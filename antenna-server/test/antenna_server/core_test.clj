(ns antenna-server.core-test
  (:require [clojure.test :refer [deftest is testing]]
            [ring.mock.request :as mock]
            [antenna-server.core :as server] ;; Підключаємо твій файл
            [cheshire.core :as json]))

(deftest api-test
  (testing "Маршрут /history повертає 200 OK"
    ;; Викликаємо server/handler замість server/app
    (let [response (server/handler (mock/request :get "/history"))]
      (is (= 200 (:status response)))
      (is (string? (:body response)))))

  (testing "Маршрут /calculate працює"
    (let [response (server/handler (mock/request :get "/calculate?h=10&elevation=100"))]
      (is (= 200 (:status response)))
      ;; Перевіряємо, чи є в тілі відповіді текст про радіус
      (is (clojure.string/includes? (:body response) "Радіус прямої видимості"))))

  (testing "Перевірка математики видимості прямо в коді"
    (let [elevations [100 100 100]
          h1 10
          h2 10
          freq 140
          result (server/check-visibility elevations h1 h2 freq)]
      (is (= 3 (count result)))
      (is (:visible (first result))))))
