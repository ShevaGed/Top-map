(ns antenna-server.core
  (:require [ring.adapter.jetty :as jetty]
            [reitit.ring :as ring]
            [ring.util.codec :as codec]
            [ring.util.response :as response]
            [cheshire.core :as json]
            [clojure.string :as str]
            [next.jdbc :as jdbc]
            [next.jdbc.result-set :as rs]
            [taoensso.timbre :as log])
  (:gen-class))

;; Опис підключення до файлу бази даних та ініціалізація таблиці
(def db-spec {:jdbcUrl "jdbc:sqlite:map_ukv_data.db?journal_mode=WAL&busy_timeout=5000"})

(defn init-db []
  (let [ds (jdbc/get-datasource db-spec)]
    (jdbc/execute! ds ["
      CREATE TABLE IF NOT EXISTS antenna_scans (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        lat REAL NOT NULL,
        lng REAL NOT NULL,
        h_antenna REAL,
        h_user REAL,
        freq INTEGER,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      )"])
    (jdbc/execute! ds ["
      CREATE TABLE IF NOT EXISTS elevation_cache (
        lat_q REAL NOT NULL,
        lng_q REAL NOT NULL,
        elevation REAL NOT NULL,
        fetched_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        PRIMARY KEY (lat_q, lng_q)
      )"])))

;; Викликаємо створення таблиці при завантаженні файлу
(init-db)


(defn get-local-elevation [lat lng]
  (let [lat-floor (int (Math/floor lat))
        lng-floor (int (Math/floor lng))
        filename (format "data/srtm/N%02dE%03d.hgt" lat-floor lng-floor)
        file (clojure.java.io/file filename)]
    (if (.exists file)
      (try
        (with-open [is (clojure.java.io/input-stream file)]
          (let [size 1201 ;; Розмір сітки SRTM3
                row (int (* (- 1.0 (- lat lat-floor)) (dec size)))
                col (int (* (- lng lng-floor) (dec size)))
                offset (* 2 (+ (* row size) col))
                buffer (byte-array 2)]
            (.skip is offset)
            (.read is buffer)
            (let [b1 (bit-and (aget buffer 0) 0xff)
                  b2 (bit-and (aget buffer 1) 0xff)
                  h (bit-or (bit-shift-left b1 8) b2)]
              (double (if (> h 32767) (- h 65536) h)))))
        (catch Exception e
          (log/error "Помилка читання файлу:" (.getMessage e))
          nil))
      nil)))


(defn save-scan [scan-data]
  (let [ds (jdbc/get-datasource db-spec)]
    (jdbc/execute! ds
                   ["INSERT INTO antenna_scans (lat, lng, h_antenna, h_user, freq)
        VALUES (?, ?, ?, ?, ?)"
                    (get scan-data "lat")
                    (get scan-data "lng")
                    (get scan-data "h1")
                    (get scan-data "h2")
                    (get scan-data "freq")])))

(defn get-all-scans []
  (let [ds (jdbc/get-datasource db-spec)]
    (jdbc/execute! ds ["SELECT
                        id, lat, lng, h_antenna, h_user, freq,
                        datetime(created_at, 'localtime') as created_at
                        FROM antenna_scans
                        ORDER BY created_at DESC"]
                   {:builder-fn rs/as-unqualified-maps})))

(defn delete-scan [id]
  (let [ds (jdbc/get-datasource db-spec)]
    (jdbc/execute! ds ["DELETE FROM antenna_scans WHERE id = ?" id])))

;; 1. Функція перевірки видимості (додано параметр freq)
(defn check-visibility [elevations h1 h2 freq dist-m]
  (if (and (seq elevations) h1 h2)
    (let [n (count elevations)
          e-list (map double elevations)
          dist-total (double (or dist-m 45000.0))
          step-dist (/ dist-total (max 1 (dec n)))

          k 1.33 ;; Врахування рефракції атмосфери (викривлення променя до землі)
          earth-radius (* 6371000.0 k)
          
          ;; МАРЖА ДИФРАКЦІЇ: ми дозволяємо землі "заходити" на промінь на 2 метри
          ;; Це імітує те, як низькочастотний сигнал огинає верхівки дерев чи пагорбів.
          diffraction-margin -2.0 

          start-h (+ (first e-list) (double h1))
          end-h (+ (last e-list) (double h2))
          step-h (/ (- end-h start-h) (max 1 (dec n)))]

      (map-indexed (fn [idx ground-h]
                     (let [ray-h (+ start-h (* idx step-h))
                           distance-from-start (* idx step-dist)
                           distance-from-end (- dist-total distance-from-start)
                           
                           ;; Вигин землі
                           drop-m (/ (* distance-from-start distance-from-end)
                                     (* 2 earth-radius))

                           effective-ray-h (- ray-h drop-m)
                           
                           ;; Зв'язок є, навіть якщо промінь на 2 метри нижче за верхівку (дифракція)
                           is-visible (> (+ effective-ray-h 2.0) ground-h)]
                       {:dist (* idx step-dist)
                        :ground ground-h
                        :ray effective-ray-h
                        :visible is-visible}))
                   e-list))
    []))



(def cors-headers
  {"Access-Control-Allow-Origin" "*"
   "Access-Control-Allow-Methods" "POST, GET, DELETE, OPTIONS"
   "Access-Control-Allow-Headers" "Content-Type"})

(defn wrap-cors [handler]
  (fn [request]
    (if (= :options (:request-method request))
      {:status 200 :headers cors-headers :body ""}
      (let [response (handler request)]
        (cond-> response
          response (update :headers merge cors-headers))))))

(defn check-profile-batch-handler [request]
  (try
    (let [body (json/parse-string (slurp (:body request)) true)
          ;; додаємо dist сюди
          {:keys [elevations_list h1 h2 freq dist]} body
          freq-val (or freq 140)
          ;; Передаємо dist у кожен виклик
          results (mapv #(check-visibility % h1 h2 freq-val dist) elevations_list)]
      
      (log/info (str "Запит /check-profile-batch: променів=" (count elevations_list) " dist=" dist))
      
      {:status 200
       :headers {"Content-Type" "application/json"}
       :body (json/generate-string results)})
    (catch Exception e
      (log/error e "ПОМИЛКА НА СЕРВЕРІ (batch профіль)")
      {:status 500
       :body (json/generate-string {:error (.getMessage e)})})))



(defn save-scan-handler [request]
  (try
    (let [body (json/parse-string (slurp (:body request)))]
      (save-scan body)
      (log/info "Запит /save-scan: збережено нову точку")
      {:status 200
       :body (json/generate-string {:status "success" :message "Збережено успішно"})})
    (catch Exception e
      (log/error e "ПОМИЛКА БД (збереження)")
      {:status 500
       :body (json/generate-string {:error (.getMessage e)})})))

(defn history-handler [_request]
  (try
    (let [history (get-all-scans)]
      (log/info "Запит /history: віддано" (count history) "записів")
      {:status 200
       :headers {"Content-Type" "application/json"}
       :body (json/generate-string history)})
    (catch Exception e
      (log/error e "ПОМИЛКА ОТРИМАННЯ ІСТОРІЇ")
      {:status 500
       :body (json/generate-string {:error (.getMessage e)})})))

(defn delete-scan-handler [request]
  (try
    (let [id (get-in request [:path-params :id])]
      (delete-scan id)
      (log/info "Запит /delete-scan: видалено ID =" id)
      {:status 200
       :body (json/generate-string {:status "success" :id id})})
    (catch Exception e
      (log/error e "ПОМИЛКА ВИДАЛЕННЯ")
      {:status 500
       :body (json/generate-string {:error (.getMessage e)})})))

(defn index-handler [_request]
  (-> (response/resource-response "public/index.html")
      (response/content-type "text/html; charset=utf-8")))


(defn elevation-handler [request]
  (try
    (let [body (json/parse-string (slurp (:body request)) true)
          locations (:locations body)
          ;; Пряме отримання висот з файлів без інтернету і без зайвого кешування в БД
          results (mapv (fn [{:keys [latitude longitude]}]
                          {:latitude latitude
                           :longitude longitude
                           :elevation (or (get-local-elevation latitude longitude) 0.0)})
                        locations)]
      
      (log/info (str "Швидкий запит /elevation: оброблено " (count locations) " точок з локальних файлів"))
      
      {:status 200
       :headers {"Content-Type" "application/json"}
       :body (json/generate-string {:results results})})
    (catch Exception e
      (log/error e "Помилка швидкого /elevation")
      {:status 500
       :body (json/generate-string {:error (.getMessage e)})})))

;; ---- Routes ---------------------------------------------------------

(def routes
  [["/"                {:get    index-handler}]
   ["/check-profile-batch" {:post check-profile-batch-handler}]
   ["/save-scan"        {:post   save-scan-handler}]
   ["/history"          {:get    history-handler}]
   ["/delete-scan/:id"  {:delete delete-scan-handler}]
   ["/elevation"        {:post   elevation-handler}]])

(def handler
  (-> (ring/ring-handler
        (ring/router routes)
        (ring/routes
          (ring/create-resource-handler {:path "/" :root "public"})
          (ring/create-default-handler
            {:not-found (constantly {:status 404 :body "Not Found"})})))
      wrap-cors))

(defn -main [& _args]
  (log/info "Вхід у головну функцію")
  
  ;; --- Налаштування бази даних (WAL режим) ---
  (try
    (let [ds (jdbc/get-datasource db-spec)]
      (jdbc/execute! ds ["PRAGMA journal_mode=WAL;"])
      (jdbc/execute! ds ["PRAGMA synchronous=NORMAL;"])
      (log/info "✅ SQLite переведено в режим WAL"))
    (catch Exception e
      (log/error e "Помилка при налаштуванні SQLite")))
  ;; -------------------------------------------

  (let [test-h (get-local-elevation 50.45 30.52)]
    (if test-h
      (log/info "✅ ТЕСТ SRTM ПРОЙДЕНО: Висота в Києві =" test-h "м.")
      (log/warn "❌ ТЕСТ SRTM ПРОВАЛЕНО: Файл не знайдено за шляхом antenna-server/data/srtm/N50E030.hgt")))
  
  (let [port (Integer/parseInt (or (System/getenv "PORT") "3000"))]
    (try
      (jetty/run-jetty handler {:port port :join? false})
      (log/info (str "Сервер успішно запущено на http://localhost:" port))
      (catch Exception e
        (log/error e "Не вдалося запустити сервер!")))))
