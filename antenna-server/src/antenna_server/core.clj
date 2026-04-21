(ns antenna-server.core
  (:require [ring.adapter.jetty :as jetty]
            [ring.util.codec :as codec]
            [cheshire.core :as json]))

;; 1. Функція перевірки видимості
(defn check-visibility [elevations h1 h2]
  (if (and (seq elevations) h1 h2)
    (let [n (count elevations)
          e-list (map double elevations)
          start-h (+ (first e-list) (double h1))
          end-h (+ (last e-list) (double h2))
          step-h (/ (- end-h start-h) (max 1 (dec n)))]
      (map-indexed (fn [idx ground-h]
                     (let [ray-h (+ start-h (* idx step-h))]
                       {:ground ground-h
                        :ray ray-h
                        :visible (> ray-h ground-h)}))
                   e-list))
    (do
      (println "ПОМИЛКА: Неповні дані" {:elevations (count elevations) :h1 h1 :h2 h2})
      [])))

;; 2. Головний обробник запитів
(defn handler [request]
  (let [uri (:uri request)
        method (:request-method request)
        ;; Спільні заголовки для всіх відповідей, щоб браузер не лаявся
        common-headers {"Access-Control-Allow-Origin" "*"
                        "Access-Control-Allow-Methods" "POST, GET, OPTIONS"
                        "Access-Control-Allow-Headers" "Content-Type"}]
    
    (cond
      ;; 1. Обробка OPTIONS (попередній запит браузера)
      (= method :options)
      {:status 200 :headers common-headers :body ""}

      ;; 2. Старий калькулятор
      (= uri "/calculate")
      (let [params (if (:query-string request) (codec/form-decode (:query-string request)) {})
            h (Double/parseDouble (get params "h" "0"))
            elevation (Double/parseDouble (get params "elevation" "0"))
            total-h (+ h elevation)
            distance (* 4.12 (Math/sqrt total-h))]
        {:status 200
         :headers (assoc common-headers "Content-Type" "text/plain; charset=utf-8")
         :body (str "Радіус прямої видимості: " (format "%.2f" distance) " км.")})

      ;; 3. Новий розрахунок профілю
      (and (= uri "/check-profile") (= method :post))
      (try
        (let [raw-body (slurp (:body request))
              _ (println "Отримано тіло запиту:" raw-body) ; Побачимо в терміналі сервера
              body (json/parse-string raw-body true)
              elevations (:elevations body)
              h1 (:h1 body)
              h2 (:h2 body)
              result (check-visibility elevations h1 h2)]
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

;; 3. Запуск сервера
(defn -main []
  (jetty/run-jetty handler {:port 3000 :join? false})
  (println "Сервер запущено на http://localhost:3000"))
