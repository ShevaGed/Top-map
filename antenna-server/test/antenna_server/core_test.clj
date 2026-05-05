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

(deftest quantize-test
  (testing "Quantize rounds lat/lng to 4 decimals"
    (is (= 50.1234 (server/quantize 50.12344999)))
    (is (= 50.1235 (server/quantize 50.12345001)))))

(deftest backoff-test
  (testing "Adaptive backoff: failures grow exponentially, successes decay one step at a time"
    (reset! server/throttle-state {:fails 0 :backoff-ms 0})
    (is (= 0 (server/current-backoff-ms)))
    (server/note-rate-limited!)
    (is (= 500 (server/current-backoff-ms)) "1st failure → 500ms")
    (server/note-rate-limited!)
    (is (= 1000 (server/current-backoff-ms)) "2nd failure → 1s")
    (server/note-rate-limited!)
    (is (= 2000 (server/current-backoff-ms)) "3rd failure → 2s")
    ;; Drive past the cap.
    ;; Drive past the cap. fails=7 already saturates (500*2^6=32k > 30k cap),
    ;; so once we're at fails=13 several successes still see the cap.
    (dotimes [_ 10] (server/note-rate-limited!))
    (is (= 30000 (server/current-backoff-ms)) "Caps at 30s")
    (is (= 13 (-> server/throttle-state deref :fails)))
    ;; 7 successes: fails 13 → 6 → backoff drops to 16s.
    (dotimes [_ 7] (server/note-success!))
    (is (= 16000 (server/current-backoff-ms)) "fails=6 → 16s")
    (server/note-success!) (is (= 8000  (server/current-backoff-ms)))
    (server/note-success!) (is (= 4000  (server/current-backoff-ms)))
    (server/note-success!) (is (= 2000  (server/current-backoff-ms)))
    (server/note-success!) (is (= 1000  (server/current-backoff-ms)))
    (server/note-success!) (is (= 500   (server/current-backoff-ms)))
    (server/note-success!)
    (is (= 0 (server/current-backoff-ms)) "Floors at 0")
    (server/note-success!)
    (is (= 0 (-> server/throttle-state deref :fails))
        "fails never goes below 0")))
