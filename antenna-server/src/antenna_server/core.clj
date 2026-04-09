(ns antenna-server.core
  (:require [ring.adapter.jetty :as jetty]
            [ring.util.codec :as codec]))

(defn handler [request]
  (let [uri    (:uri request)
        ;; 1. Розбираємо параметри з URL
        params (if (:query-string request)
                 (codec/form-decode (:query-string request))
                 {})
        
        ;; 2. Перетворюємо всі вхідні дані на числа (Double)
        lat       (Double/parseDouble (get params "lat" "0"))
        lon       (Double/parseDouble (get params "lon" "0"))
        h         (Double/parseDouble (get params "h" "0"))         ; висота щогли
        elevation (Double/parseDouble (get params "elevation" "0")) ; висота рельєфу
        
        ;; 3. Головний розрахунок
        total-h   (+ h elevation)                        ; щогла + пагорб
        distance  (* 4.12 (Math/sqrt total-h))]          ; дальність горизонту

    (cond
      (= uri "/")
      {:status 200
       :headers {"Content-Type" "text/html; charset=utf-8"}
       :body "<h1>Сервер розрахунку УКХ</h1><p>Бекенд готовий до роботи.</p>"}

      (= uri "/calculate")
      {:status 200
       :headers {"Content-Type" "text/plain; charset=utf-8"
                 ;; Цей рядок дозволяє фронтенду бачити відповідь бекенду
                 "Access-Control-Allow-Origin" "*"} 
       :body (str "Об'єкт на висоті рельєфу " elevation " м.\n"
                  "З антеною " h " м (разом " total-h " м).\n"
                  "------------------------------\n"
                  "Радіус прямої видимості: " (format "%.2f" distance) " км.")}

      :else
      {:status 404
       :headers {"Content-Type" "text/html; charset=utf-8"}
       :body "<h1>404</h1><p>Сторінку не знайдено.</p>"})))

;; Наш "мотор" Jetty, який ми нікуди не викидаємо
(defn -main []
  (jetty/run-jetty handler {:port 3000 :join? false})
  (println "Сервер запущено на http://localhost:3000"))
