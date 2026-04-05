(ns map-ukv.core
  (:require ["leaflet" :as L])) ;; Підключаємо встановлену через npm бібліотеку

;; Створюємо "коробку" для карти, щоб мати до неї доступ з будь-якої функції
(defonce map-state (atom nil))

(defonce last-marker (atom nil)) ; Спочатку тут порожньо (nil)

(defn get-elevation [lat lng my-map]
  (-> (js/fetch (str "https://api.open-elevation.com/api/v1/lookup?locations=" lat "," lng))
      (.then (fn [response] (.json response)))
      (.then (fn [data]
               (let [results (.-results data)
                     first-res (aget results 0)
                     elevation (.-elevation first-res)]
                 
                 ;; --- НОВА ЛОГІКА ВИДАЛЕННЯ ---
                 (when-let [old-marker @last-marker]
                   (.remove old-marker)) ; Видаляємо старий маркер з карти
                 ;; ----------------------------

                 (let [new-marker (-> (.marker js/L (clj->js [lat lng]))
                                      (.addTo my-map)
                                      (.bindPopup (str "<b>Висота:</b> " elevation " м"))
                                      (.openPopup))]
                   
                   ;; Запам'ятовуємо новий маркер у наш атом
                   (reset! last-marker new-marker)))))))


(defn init []
  (let [ ;; 1. Створюємо об'єкт карти і прив'язуємо до нашого div
        my-map (.map L "map-id")
        ;; 2. Шлях до карти OpenTopoMap
        topo-url "https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png"
        ;; 3. Налаштування (авторство та масштаб)
        options (clj->js {:maxZoom 17
                          :attribution "Map data: &copy; OpenStreetMap contributors, SRTM | Map style: &copy; OpenTopoMap (CC-BY-SA)"})]
    
    ;; Встановлюємо початкову точку (наприклад, Київ) і масштаб 10
    (.setView my-map (clj->js [50.45 30.52]) 10)
    
    ;; Додаємо шар карти до нашого об'єкта
    (.addTo (.tileLayer L topo-url options) my-map)

    ;; Додаємо "слухача" подій на клік
    (.on my-map "click" 
         (fn [event]
           (let [lat (.. event -latlng -lat)
                 lng (.. event -latlng -lng)]
             (get-elevation lat lng my-map)))) ;; Викликаємо запит висоти
    
    ;; Зберігаємо карту в атом
    (reset! map-state my-map)
    
    (js/console.log "Map-ukv успішно запущена!")))
