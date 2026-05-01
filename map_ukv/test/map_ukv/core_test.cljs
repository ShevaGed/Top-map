(ns map-ukv.core-test
  (:require [cljs.test :refer [deftest is testing]]
            [map-ukv.core :as core]))

(deftest destination-point-test
  (testing "Розрахунок координат: рух на Північ на 111 км"
    (let [lat 50.0
          lng 36.0
          dist 111.12
          bearing 0
          [dest-lat dest-lng] (core/destination-point lat lng dist bearing)]
      ;; Перевіряємо широту (має стати ~51.0)
      (is (< (js/Math.abs (- dest-lat 51.0)) 0.1))
      ;; Перевіряємо довготу (майже не змінюється)
      (is (< (js/Math.abs (- dest-lng 36.0)) 0.01)))))

(deftest get-visible-segment-test
  (testing "Обрізання променя при перешкоді"
    (let [mock-data [{:visible true} {:visible true} {:visible false} {:visible true}]
          result (core/get-visible-segment mock-data)]
      (is (= 2 (count result)) "Має залишитись 2 точки до перешкоди"))))
