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
  (:import (java.net URI)
           (java.net.http HttpClient HttpRequest
                          HttpRequest$BodyPublishers
                          HttpResponse$BodyHandlers)
           (java.time Duration))
  (:gen-class))

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

(defn calculate-handler [request]
  (try
    (let [params (if (:query-string request)
                   (codec/form-decode (:query-string request))
                   {})
          h (Double/parseDouble (get params "h" "0"))
          elevation (Double/parseDouble (get params "elevation" "0"))
          total-h (+ h elevation)
          distance (* 4.12 (Math/sqrt total-h))]
      (log/info "Запит /calculate: h =" h ", elevation =" elevation)
      {:status 200
       :headers {"Content-Type" "text/plain; charset=utf-8"}
       :body (str "Радіус прямої видимості: " (format "%.2f" distance) " км.")})
    (catch Exception e
      (log/error e "Помилка розрахунку радіусу")
      {:status 400 :body "Некоректні параметри"})))

(defn check-profile-handler [request]
  (try
    (let [body (json/parse-string (slurp (:body request)) true)
          {elevations :elevations h1 :h1 h2 :h2 freq :freq} body
          freq-val (or freq 140)
          result (check-visibility elevations h1 h2 freq-val)]
      (log/info "Запит /check-profile: точок =" (count elevations) "freq =" freq-val)
      {:status 200
       :headers {"Content-Type" "application/json"}
       :body (json/generate-string result)})
    (catch Exception e
      (log/error e "ПОМИЛКА НА СЕРВЕРІ (профіль)")
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

;; ---- Elevation proxy: cache + adaptive backoff ----------------------

(def ^String elevation-api-url "https://api.open-elevation.com/api/v1/lookup")
;; Open-Elevation accepts up to ~1024 locations per POST; stay well under.
(def ^:const upstream-chunk-size 500)
;; SQLite default SQLITE_MAX_VARIABLE_NUMBER is 999; one ? per cache key.
(def ^:const sqlite-param-chunk 900)
;; Quantize coords to ~11 m at the equator (SRTM grid is ~30 m anyway).
(def ^:const quantize-factor 10000.0)

(defn quantize ^double [^double v]
  (/ (Math/round (* v quantize-factor)) quantize-factor))

(defn cache-lookup [ds q-keys]
  (if (empty? q-keys)
    {}
    (->> (partition-all sqlite-param-chunk (distinct q-keys))
         (mapcat (fn [chunk]
                   (let [placeholders (str/join "," (repeat (count chunk) "?"))
                         sql (str "SELECT lat_q, lng_q, elevation "
                                  "FROM elevation_cache "
                                  "WHERE (lat_q || ',' || lng_q) IN ("
                                  placeholders ")")
                         params (map (fn [[lat lng]] (str lat "," lng)) chunk)]
                     (jdbc/execute! ds (into [sql] params)
                                    {:builder-fn rs/as-unqualified-maps}))))
         (map (fn [{:keys [lat_q lng_q elevation]}]
                [[lat_q lng_q] elevation]))
         (into {}))))

(defn cache-insert! [ds rows]
  (when (seq rows)
    (jdbc/execute-batch!
      ds
      "INSERT OR REPLACE INTO elevation_cache (lat_q, lng_q, elevation) VALUES (?, ?, ?)"
      (map (fn [{:keys [lat lng elevation]}]
             [(double lat) (double lng) (double elevation)])
           rows)
      {})))

;; --- HTTP client (java.net.http, no extra dep) ---

(defonce ^HttpClient http-client
  (-> (HttpClient/newBuilder)
      (.connectTimeout (Duration/ofSeconds 10))
      (.build)))

(defn http-post-json [^String url ^String body-str]
  (let [req (-> (HttpRequest/newBuilder)
                (.uri (URI/create url))
                (.timeout (Duration/ofSeconds 30))
                (.header "Content-Type" "application/json")
                (.POST (HttpRequest$BodyPublishers/ofString body-str))
                (.build))
        resp (.send http-client req (HttpResponse$BodyHandlers/ofString))]
    {:status (.statusCode resp) :body (.body resp)}))

;; --- Adaptive backoff (logarithmic-feel: 0.5,1,2,4,8,16,30s cap) ---

(def ^:const backoff-base-ms 500)
(def ^:const backoff-max-ms 30000)
(def ^:const max-upstream-attempts 4)

(defn- compute-backoff-ms ^long [^long fails]
  (if (zero? fails)
    0
    (long (min backoff-max-ms
               (* backoff-base-ms (Math/pow 2 (dec fails)))))))

(defonce throttle-state
  (atom {:fails 0 :backoff-ms 0}))

(defn current-backoff-ms ^long [] (:backoff-ms @throttle-state))

(defn note-success! []
  (swap! throttle-state
         (fn [{:keys [fails]}]
           (let [n (max 0 (dec fails))]
             {:fails n :backoff-ms (compute-backoff-ms n)}))))

(defn note-rate-limited! []
  (swap! throttle-state
         (fn [{:keys [fails]}]
           (let [n (inc fails)]
             {:fails n :backoff-ms (compute-backoff-ms n)}))))

(defn- retryable-status? [status]
  (or (= 429 status) (>= status 500) (zero? status)))

(defn fetch-elevations-upstream
  "POST one chunk of locations to Open-Elevation. Sleeps the current
   backoff before each attempt, retries up to max-upstream-attempts on
   429/5xx, throws ex-info on permanent failure."
  [locations]
  (let [body (json/generate-string {:locations locations})]
    (loop [attempt 1]
      (let [delay (current-backoff-ms)]
        (when (pos? delay)
          (log/info "Backoff sleep" delay "ms before upstream call")
          (Thread/sleep delay)))
      (let [{:keys [status body] :as resp}
            (try (http-post-json elevation-api-url body)
                 (catch Exception e
                   (log/warn "Upstream IO error:" (.getMessage e))
                   {:status 0 :body (.getMessage e)}))]
        (cond
          (= 200 status)
          (do (note-success!)
              (-> body (json/parse-string true) :results))

          (and (retryable-status? status) (< attempt max-upstream-attempts))
          (do (note-rate-limited!)
              (log/warn (str "Upstream " status ", backoff now "
                             (current-backoff-ms) "ms (attempt "
                             attempt "/" max-upstream-attempts ")"))
              (recur (inc attempt)))

          :else
          (do (note-rate-limited!)
              (log/error "Upstream call failed permanently, status =" status)
              (throw (ex-info "Upstream elevation API failed"
                              {:status status :body body}))))))))

(defn fetch-elevations-chunked [locations]
  (->> (partition-all upstream-chunk-size locations)
       (mapcat fetch-elevations-upstream)
       doall))

(defn elevation-handler [request]
  (try
    (let [ds (jdbc/get-datasource db-spec)
          body (json/parse-string (slurp (:body request)) true)
          locations (:locations body)
          q-pairs (mapv (fn [{:keys [latitude longitude]}]
                          [(quantize latitude) (quantize longitude)])
                        locations)
          unique-keys (distinct q-pairs)
          cached (cache-lookup ds unique-keys)
          missing-keys (remove cached unique-keys)
          fetched (when (seq missing-keys)
                    (fetch-elevations-chunked
                      (map (fn [[lat lng]]
                             {:latitude lat :longitude lng})
                           missing-keys)))
          new-rows (map (fn [{:keys [latitude longitude elevation]}]
                          {:lat latitude :lng longitude :elevation elevation})
                        fetched)
          _ (cache-insert! ds new-rows)
          all-by-key (merge cached
                            (into {} (map (fn [{:keys [lat lng elevation]}]
                                            [[lat lng] elevation])
                                          new-rows)))
          results (mapv (fn [[lat-q lng-q] {:keys [latitude longitude]}]
                          {:latitude latitude
                           :longitude longitude
                           :elevation (get all-by-key [lat-q lng-q])})
                        q-pairs locations)]
      (log/info (str "Запит /elevation: точок=" (count locations)
                     " cache-hit=" (- (count locations) (count missing-keys))
                     " upstream=" (count missing-keys)
                     " backoff=" (current-backoff-ms) "ms"))
      {:status 200
       :headers {"Content-Type" "application/json"}
       :body (json/generate-string {:results results})})
    (catch clojure.lang.ExceptionInfo e
      (log/error "Помилка отримання висот upstream:" (.getMessage e))
      {:status 502
       :headers {"Content-Type" "application/json"}
       :body (json/generate-string
               {:error "Upstream elevation API failed"
                :status (-> e ex-data :status)})})
    (catch Exception e
      (log/error e "Помилка /elevation")
      {:status 500
       :headers {"Content-Type" "application/json"}
       :body (json/generate-string {:error (.getMessage e)})})))

;; ---- Routes ---------------------------------------------------------

(def routes
  [["/"                 {:get    index-handler}]
   ["/calculate"        {:get    calculate-handler}]
   ["/check-profile"    {:post   check-profile-handler}]
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
  (let [port (Integer/parseInt (or (System/getenv "PORT") "3000"))]
    (try
      (jetty/run-jetty handler {:port port :join? false})
      (log/info (str "Сервер успішно запущено на http://localhost:" port))
      (catch Exception e
        (log/error e "Не вдалося запустити сервер!")))))
