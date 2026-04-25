(ns antenna-server.core
  (:require [ring.adapter.jetty :as jetty]
            [ring.util.codec :as codec]
            [cheshire.core :as json]))

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

;; 2. Головний обробник запитів
(defn handler [request]
  (let [uri (:uri request)
        method (:request-method request)
        common-headers {"Access-Control-Allow-Origin" "*"
                        "Access-Control-Allow-Methods" "POST, GET, OPTIONS"
                        "Access-Control-Allow-Headers" "Content-Type"}]
    
    (cond
      (= method :options)
      {:status 200 :headers common-headers :body ""}

      (= uri "/calculate")
      (let [params (if (:query-string request) (codec/form-decode (:query-string request)) {})
            h (Double/parseDouble (get params "h" "0"))
            elevation (Double/parseDouble (get params "elevation" "0"))
            total-h (+ h elevation)
            distance (* 4.12 (Math/sqrt total-h))]
        {:status 200
         :headers (assoc common-headers "Content-Type" "text/plain; charset=utf-8")
         :body (str "Радіус прямої видимості: " (format "%.2f" distance) " км.")})

      ;; 3. Оновлений розрахунок профілю (тут головні зміни!)
      (and (= uri "/check-profile") (= method :post))
      (try
        (let [raw-body (slurp (:body request))
              body (json/parse-string raw-body true)
              elevations (:elevations body)
              h1 (:h1 body)
              h2 (:h2 body)
              ;; Витягуємо частоту з JSON, якщо її немає — ставимо 140
              freq (or (:freq body) 140)
              ;; ПЕРЕДАЄМО freq у функцію розрахунку
              result (check-visibility elevations h1 h2 freq)]
          {:status 200
           :headers (assoc common-headers "Content-Type" "application/json")
           :body (json/generate-string result)})
        (catch Exception e
          (println "ПОМИЛКА НА СЕРВЕРІ:" (.getMessage e))
          {:status 500
           :headers common-headers
           :body (json/generate-string {:error (.getMessage e)})}))

      :else
      {:status 404 :headers common-headers :body "Not Found"})))

(defn -main []
  (jetty/run-jetty handler {:port 3000 :join? false})
  (println "Сервер запущено на http://localhost:3000"))
