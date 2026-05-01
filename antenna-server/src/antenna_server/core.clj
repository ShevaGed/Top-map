(ns antenna-server.core
  (:require [ring.adapter.jetty :as jetty]
            [ring.util.codec :as codec]
            [cheshire.core :as json]
            [next.jdbc :as jdbc]
            [next.jdbc.result-set :as rs]
            [taoensso.timbre :as log]))

;; Опис підключення до файлу бази даних та ініціалізація таблиці
(def db-spec {:dbtype "sqlite" :dbname "map_ukv_data.db"})

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
      )"])))

;; Викликаємо створення таблиці при завантаженні файлу
(init-db)

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
(defn check-visibility [elevations h1 h2 freq]
  (if (and (seq elevations) h1 h2)
    (let [n (count elevations)
          e-list (map double elevations)
          dist-total 45000.0 
          step-dist (/ dist-total (max 1 (dec n)))
          
          k 1.33
          earth-radius (* 6371000.0 k) 
          
          ;; Визначаємо запас на дифракцію залежно від частоти
          ;; freq приходить з фронтенда як 140 або 440
          diffraction-margin (if (< freq 300) 4.0 1.0)
          
          start-h (+ (first e-list) (double h1))
          end-h (+ (last e-list) (double h2))
          step-h (/ (- end-h start-h) (max 1 (dec n)))]
      
      (map-indexed (fn [idx ground-h]
                     (let [ray-h (+ start-h (* idx step-h))
                           distance-from-start (* idx step-dist)
                           distance-from-end (- dist-total distance-from-start)
                           drop-m (/ (* distance-from-start distance-from-end) 
                                     (* 2 earth-radius))
                           
                           effective-ray-h (- ray-h drop-m)
                           is-visible (> (+ effective-ray-h diffraction-margin) ground-h)]
                       {:dist idx
                        :ground ground-h
                        :ray effective-ray-h
                        :visible is-visible}))
                   e-list))
    []))

(defn handler [request]
  (let [uri (:uri request)
        method (:request-method request)
        common-headers {"Access-Control-Allow-Origin" "*"
                        "Access-Control-Allow-Methods" "POST, GET, DELETE, OPTIONS"
                        "Access-Control-Allow-Headers" "Content-Type"}]
    
    (cond
      (= method :options)
      {:status 200 :headers common-headers :body ""}

      (= uri "/calculate")
      (try
        (let [params (if (:query-string request) (codec/form-decode (:query-string request)) {})
              h (Double/parseDouble (get params "h" "0"))
              elevation (Double/parseDouble (get params "elevation" "0"))
              total-h (+ h elevation)
              distance (* 4.12 (Math/sqrt total-h))]
          (log/info "Запит /calculate: h =" h ", elevation =" elevation)
          {:status 200
           :headers (assoc common-headers "Content-Type" "text/plain; charset=utf-8")
           :body (str "Радіус прямої видимості: " (format "%.2f" distance) " км.")})
        (catch Exception e
          (log/error e "Помилка розрахунку радіусу")
          {:status 400 :headers common-headers :body "Некоректні параметри"}))

      (and (= uri "/check-profile") (= method :post))
      (try
        (let [raw-body (slurp (:body request))
              body (json/parse-string raw-body true)
              {elevations :elevations h1 :h1 h2 :h2 freq :freq} body
              freq-val (or freq 140)
              result (check-visibility elevations h1 h2 freq-val)]
          (log/info "Запит /check-profile: точок =" (count elevations) "freq =" freq-val)
          {:status 200
           :headers (assoc common-headers "Content-Type" "application/json")
           :body (json/generate-string result)})
        (catch Exception e
          (log/error e "ПОМИЛКА НА СЕРВЕРІ (профіль)")
          {:status 500 :headers common-headers :body (json/generate-string {:error (.getMessage e)})}))

      (and (= uri "/save-scan") (= method :post))
      (try
        (let [raw-body (slurp (:body request))
              body (json/parse-string raw-body)]
          (save-scan body)
          (log/info "Запит /save-scan: збережено нову точку")
          {:status 200
           :headers common-headers
           :body (json/generate-string {:status "success" :message "Збережено успішно"})})
        (catch Exception e
          (log/error e "ПОМИЛКА БД (збереження)")
          {:status 500 :headers common-headers :body (json/generate-string {:error (.getMessage e)})}))

      (and (= uri "/history") (= method :get))
      (try
        (let [history (get-all-scans)]
          (log/info "Запит /history: віддано" (count history) "записів")
          {:status 200
           :headers (assoc common-headers "Content-Type" "application/json")
           :body (json/generate-string history)})
        (catch Exception e
          (log/error e "ПОМИЛКА ОТРИМАННЯ ІСТОРІЇ")
          {:status 500 :headers common-headers :body (json/generate-string {:error (.getMessage e)})}))

      (and (clojure.string/starts-with? uri "/delete-scan/") (= method :delete))
      (try
        (let [id (last (clojure.string/split uri #"/"))]
          (delete-scan id)
          (log/info "Запит /delete-scan: видалено ID =" id)
          {:status 200
           :headers common-headers
           :body (json/generate-string {:status "success" :id id})})
        (catch Exception e
          (log/error e "ПОМИЛКА ВИДАЛЕННЯ")
          {:status 500 :headers common-headers :body (json/generate-string {:error (.getMessage e)})}))

      :else
      (do
        (log/warn "Маршрут не знайдено:" uri)
        {:status 404 :headers common-headers :body "Not Found"}))))

(defn -main []
  (log/info "Вхід у головну функцію")
  (try
    (jetty/run-jetty handler {:port 3000 :join? false})
    (log/info "Сервер успішно запущено на http://localhost:3000")
    (catch Exception e
      (log/error e "Не вдалося запустити сервер!"))))



