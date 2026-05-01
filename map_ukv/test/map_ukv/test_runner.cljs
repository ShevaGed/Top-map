(ns map-ukv.test-runner
  (:require [cljs.test :as test]
            [map-ukv.core-test])) ;; Ми підключаємо тільки файл з ТЕСТАМИ

(defn init []
  (js/console.clear) ;; Очистимо консоль від старого сміття
  (js/console.log "=== ЗАПУСК ТЕСТІВ ===")
  (test/run-tests 'map-ukv.core-test))
