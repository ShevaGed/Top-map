(ns antenna-server.core
  (:require [ring.adapter.jetty :as jetty]))

;; Це наш "Обробник" (Handler). 
;; Він отримує запит (request) і повертає мапу-відповідь.
(defn handler [request]
  {:status 200
   :headers {"Content-Type" "text/plain; charset=utf-8"}
   :body "Привіт, Антоне! Сервер антени готовий до роботи."})

(defn -main []
  (println "Запускаю сервер на порту 3000...")
  (jetty/run-jetty handler {:port 3000 :join? false}))
