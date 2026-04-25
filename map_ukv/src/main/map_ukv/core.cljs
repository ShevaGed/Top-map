(ns map-ukv.core
  (:require ["leaflet" :as L]))

(defonce map-state (atom nil))
(defonce last-marker (atom nil))
(defonce rays-group (atom nil)) ; Група для всіх ліній «зірки»
(defonce antenna-pos (atom nil))
(defonce legend-ui (atom nil))
(defonce boundary-points (atom {}))

(def antenna-icon 
  (.icon js/L (clj->js {:iconUrl "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiMyYzNlNTAiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjxwYXRoIGQ9Ik0xMiAyTDEyIDUuNU0xMiAyMkwxMiAxMk0xMiAxMkw3IDIyTTEyIDEyTDE3IDIyTTEwIDhoNE04IDExaDhNMTEuNSAyaDEiLz48L3N2Zz4="
                        :iconSize [40 40]
                        :iconAnchor [20 40]
                        :className "antenna-icon-svg"})))

(defn flatten-all-rays [rays]
  (apply concat rays))

;; Функція для розрахунку точки на відстані та під кутом
;; Виправлена функція для розрахунку координат
(defn destination-point [lat lng distance-km bearing-deg]
  (let [radius 6371
        ;; Перетворюємо градуси в радіани вручну
        bearing (* bearing-deg (/ js/Math.PI 180))
        lat-rad (* lat (/ js/Math.PI 180))
        lng-rad (* lng (/ js/Math.PI 180))
        
        dest-lat-rad (js/Math.asin (+ (* (js/Math.sin lat-rad) (js/Math.cos (/ distance-km radius)))
                                      (* (js/Math.cos lat-rad) (js/Math.sin (/ distance-km radius)) (js/Math.cos bearing))))
        
        dest-lng-rad (+ lng-rad (js/Math.atan2 (* (js/Math.sin bearing) (js/Math.sin (/ distance-km radius)) (js/Math.cos lat-rad))
                                               (- (js/Math.cos (/ distance-km radius)) 
                                                  (* (js/Math.sin lat-rad) (js/Math.sin dest-lat-rad)))))]
    
    ;; Повертаємо назад у градуси
    [(* dest-lat-rad (/ 180 js/Math.PI)) 
     (* dest-lng-rad (/ 180 js/Math.PI))]))

(defn interpolate-points [p1 p2 steps]
  (let [[lat1 lng1] p1
        [lat2 lng2] p2]
    (map (fn [i]
           (let [fraction (/ i steps)]
             [(+ lat1 (* fraction (- lat2 lat1)))
              (+ lng1 (* fraction (- lng2 lng1)))]))
         (range (inc steps)))))

(defn fetch-ray-visibility [path-points h]
  (let [body-api (clj->js {:locations (map (fn [[lat lng]] {:latitude lat :longitude lng}) path-points)})]
    (-> (js/fetch "https://api.open-elevation.com/api/v1/lookup"
                  (clj->js {:method "POST" :headers {"Content-Type" "application/json"} :body (js/JSON.stringify body-api)}))
        (.then (fn [res] (.json res)))
        (.then (fn [data]
                 (let [elevations (map #(.-elevation %) (.-results data))]
                   (-> (js/fetch "http://localhost:3000/check-profile"
                                 (clj->js {:method "POST"
                                           :headers {"Content-Type" "application/json"}
                                           :body (js/JSON.stringify (clj->js {:elevations elevations :h1 h :h2 h}))}))
                       (.then (fn [res] (.json res)))
                       (.then (fn [result]
                                (let [res-clj (js->clj result :keywordize-keys true)
                                      is-visible (every? :visible res-clj)
                                      ;; Малюємо цей конкретный промінь
                                      p1 (first path-points)
                                      p2 (last path-points)
                                      line (L/polyline (clj->js [p1 p2]) 
                                                       (clj->js {:color (if is-visible "green" "red") 
                                                                 :weight 2 
                                                                 :opacity 0.6}))]
                                  (.addTo line @rays-group)))))))))))

;; Допоміжна функція: залишає тільки точки до першої перешкоди
(defn get-visible-segment [points-info]
  (take-while :visible points-info))

(defn update-legend-ui [freq h-base h-user]
  (let [legend-div (js/document.getElementById "dynamic-legend")]
    (when legend-div
      (set! (.-innerHTML legend-div) 
            (str "<div style='text-align:center;'>
                    <strong style='color:#2c3e50;'>Поточні параметри</strong><br>
                    <div style='margin:5px 0;'>
                       <span style='background:#3498db; color:white; padding:2px 6px; border-radius:3px; font-size:12px; font-weight:bold;'>" 
                       freq " MHz</span>
                    </div>
                    <small style='color:#7f8c8d;'>Щогла: " h-base "м | Приймач: " h-user "м</small>
                  </div>")))))


(defn handle-map-click [lat lng my-map]
  (let [h-base (js/parseFloat (.-value (js/document.getElementById "antenna-height")))
        h-user (js/parseFloat (.-value (js/document.getElementById "user-height")))
        dist   (js/parseFloat (.-value (js/document.getElementById "scan-dist")))
        freq   (js/parseInt (.-value (js/document.getElementById "freq-select")))
        loader (js/document.getElementById "loader")
        num-points 50]
    
    (set! (.-display (.-style loader)) "block")
    (.clearLayers @rays-group)
    (reset! boundary-points {})

    (when @last-marker (.remove @last-marker))

    (reset! last-marker (-> (.marker js/L (clj->js [lat lng]) (clj->js {:icon antenna-icon})) 
                           (.addTo my-map)))

    (let [angles (range 0 361 5)
          angle-map (into {} (map (fn [a] [a (interpolate-points [lat lng] (destination-point lat lng dist a) num-points)]) angles))
          flat-locations (map (fn [[la ln]] {:latitude la :longitude ln}) 
                                (apply concat (map #(get angle-map %) angles)))]
        
        (-> (js/fetch "https://api.open-elevation.com/api/v1/lookup"
                      (clj->js {:method "POST" 
                                :headers {"Content-Type" "application/json"} 
                                :body (js/JSON.stringify (clj->js {:locations flat-locations}))}))
            (.then (fn [res] (.json res)))
            (.then (fn [data]
                     (let [all-elevations (map #(.-elevation %) (.-results data))
                           chunked-elevs (partition (inc num-points) all-elevations)]
                       
                       (doseq [[idx elevs] (map-indexed vector chunked-elevs)]
                         (let [angle (nth angles idx)
                               path  (get angle-map angle)]
                           
                           (-> (js/fetch "http://localhost:3000/check-profile"
                                         (clj->js {:method "POST"
                                                   :headers {"Content-Type" "application/json"}
                                                   :body (js/JSON.stringify (clj->js {:elevations elevs :h1 h-base :h2 h-user :freq freq}))}))
                               (.then (fn [res] (.json res)))
                               (.then (fn [result]
                                        (let [res-clj (js->clj result :keywordize-keys true)
                                              visible-part (get-visible-segment res-clj)
                                              last-idx (max 0 (dec (count visible-part)))
                                              edge-point (nth path last-idx)]
                                          
                                          (swap! boundary-points assoc angle edge-point)
                                          
                                          (when (= (count @boundary-points) (count angles))
                                            (let [sorted-coords (map #(get @boundary-points %) angles)
                                                  clean-coords (filter identity sorted-coords)
                                                  poly (L/polygon (clj->js (concat [[lat lng]] clean-coords)) 
                                                                  (clj->js {:color "#3498db" :fillColor "#3498db" :fillOpacity 0.4 :weight 2}))]
                                              (.addTo poly @rays-group)
                                              (set! (.-display (.-style loader)) "none")
                                              (update-legend-ui freq h-base h-user))))))))))))))))



(defn setup-ui-events []
  (let [clear-btn  (js/document.getElementById "clear-btn")
        export-btn (js/document.getElementById "export-btn")]

    ;; Кнопка очищення
    (when clear-btn
      (.addEventListener clear-btn "click" 
        (fn [] 
          (.clearLayers @rays-group)
          (when @last-marker 
            (.remove @last-marker)
            (reset! last-marker nil))
          (reset! boundary-points {}) ; Чистимо дані в атомі
          (let [legend-div (js/document.getElementById "dynamic-legend")]
            (when legend-div
              (set! (.-innerHTML legend-div) "Клікніть на карту для розрахунку"))))))

    ;; Кнопка експорту
    ;; Логіка кнопки "Експорт JSON"
    (when export-btn
      (.addEventListener export-btn "click" 
        (fn []
          (let [marker @last-marker
                points @boundary-points]
            (if (and marker (not-empty points))
              (let [;; Використовуємо .getLatLng замість прямого доступу до властивості
                    latlng (.getLatLng marker)
                    lat (.-lat latlng)
                    lng (.-lng latlng)
                    
                    export-data {:antenna {:lat lat :lng lng}
                                 :parameters {:h1 (js/parseFloat (.-value (js/document.getElementById "antenna-height")))
                                              :h2 (js/parseFloat (.-value (js/document.getElementById "user-height")))
                                              :freq (js/parseInt (.-value (js/document.getElementById "freq-select")))}
                                 :boundary (into {} (map (fn [[k v]] [(str k) v]) points))}
                    
                    json-str (js/JSON.stringify (clj->js export-data))
                    blob (js/Blob. #js [json-str] #js {:type "application/json"})
                    url (.createObjectURL js/URL blob)
                    link (js/document.createElement "a")]
                
                (set! (.-href link) url)
                (set! (.-download link) (str "coverage-" (.getTime (js/Date.)) ".json"))
                (.click link)
                (.revokeObjectURL js/URL url))
              
              (js/alert "Помилка: Маркер не знайдено або дані ще завантажуються!"))))))))




(defn init []
  (let [topo (L/tileLayer "https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png" 
                          (clj->js {:maxZoom 17 :attribution "OpenTopoMap"}))
        streets (L/tileLayer "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" 
                            (clj->js {:attribution "OpenStreetMap"}))
        satellite (L/tileLayer "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}" 
                              (clj->js {:attribution "Esri Satellite"}))
        
        my-map (-> (.map js/L "map-id" (clj->js {:center [50.0 36.2] :zoom 11 :layers [topo]})))]

    ;; Керування шарами
    (let [base-maps (clj->js {"Топографічна" topo 
                             "Вулиці" streets 
                             "Супутник" satellite})]
      (-> (.control.layers js/L base-maps) (.addTo my-map)))

    ;; Легенда (тепер вона не заважає напису Leaflet завдяки CSS вище)
    ;; Легенда (у функції init)
(let [legend (.control js/L (clj->js {:position "bottomright"}))]
  (set! (.-onAdd legend) 
        (fn [map]
          (let [div (.create js/L.DomUtil "div" "map-legend")]
            (set! (.-id div) "dynamic-legend") ; Додаємо ID для легкого пошуку
            (set! (.-innerHTML div) "Клікніть на карту для розрахунку")
            div)))
  (.addTo legend my-map)
  (reset! legend-ui legend)) ; Зберігаємо в атом

    (reset! rays-group (-> (.layerGroup js/L) (.addTo my-map)))

    (.on my-map "click" 
         (fn [e] 
           (let [lat (.-lat (.-latlng e))
                 lng (.-lng (.-latlng e))]
             (handle-map-click lat lng my-map))))

    (setup-ui-events)
    (js/console.log "Система готова.")))

