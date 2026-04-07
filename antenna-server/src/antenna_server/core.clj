(ns antenna-server.core
  (:require [ring.adapter.jetty :as jetty]
            [ring.util.codec :as codec])) ; Додали інструмент для розшифровки тексту

(defn handler [request]
  (let [uri (:uri request)
        ;; Перетворюємо рядок "lat=49.9&lon=36.2" на мапу {"lat" "49.9" "lon" "36.2"}
        params (if (:query-string request)
                 (codec/form-decode (:query-string request))
                 {})]
    
    (cond
      (= uri "/") 
      {:status 200
       :headers {"Content-Type" "text/html; charset=utf-8"}
       :body "<h1>Головна сторінка</h1><p>Вітаю на сервері антени!</p>"}

      (= uri "/calculate")
      {:status 200
       :headers {"Content-Type" "text/plain; charset=utf-8"}
       :body (str "Ми розшифрували параметри: " params 
                  "\nШирота (lat) це: " (get params "lat")
                  "\nДовгота (lon) це: " (get params "lon"))}

      :else
      {:status 404
       :headers {"Content-Type" "text/html; charset=utf-8"}
       :body "<h1>Помилка 404</h1><p>Сторінку не знайдено.</p>"})))

(defn -main []
  (println "Запускаю сервер на порту 3000...")
  (jetty/run-jetty handler {:port 3000 :join? false}))
