(ns map-ukv.core
  (:require ["leaflet" :as L]))

(defonce map-state (atom nil))
(defonce last-marker (atom nil))
(defonce rays-group (atom nil)) ; Група для всіх ліній «зірки»
(defonce antenna-pos (atom nil))

(def antenna-icon 
  (.icon js/L (clj->js {:iconUrl "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiMyYzNlNTAiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cGF0aCBkPSJNMTIgMkwxMiAxMk0xMiAxMkw3IDIyTTEyIDEyTDE3IDIyTTkgMTJoNk0xMCA5aDRNMTEgNmg2Ii8+PC9zdmc+"
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

(defn handle-map-click [lat lng my-map]
  (let [h-base (js/parseFloat (.-value (js/document.getElementById "antenna-height")))
        h-user (js/parseFloat (.-value (js/document.getElementById "user-height")))
        dist   (js/parseFloat (.-value (js/document.getElementById "scan-dist")))
        loader (js/document.getElementById "loader")
        ;; Чим більше дистанція, тим більше точок нам треба для точності
        num-points (if (> dist 30) 50 30)]
    
    ;; 1. Візуальна підготовка
    (when @rays-group (.clearLayers @rays-group))
    (when-let [m @last-marker] (.remove m))
    (reset! last-marker (-> (.marker js/L (clj->js [lat lng]) (clj->js {:icon antenna-icon})) 
                            (.addTo my-map)))
    
    ;; 2. Показуємо лоадер
    (set! (.-display (.-style loader)) "block")
    (js/console.log (str "Сканування: " dist "км, щогла " h-base "м, рація " h-user "м"))

    (let [angles (range 0 360 3) ; 120 променів для гарного полігону
          all-rays (map (fn [angle] 
                          (interpolate-points [lat lng] (destination-point lat lng dist angle) num-points)) 
                        angles)
          flat-points (apply concat all-rays)]

      (let [body-api (clj->js {:locations (map (fn [[la ln]] {:latitude la :longitude ln}) flat-points)})]
        (-> (js/fetch "https://api.open-elevation.com/api/v1/lookup"
                      (clj->js {:method "POST" 
                                :headers {"Content-Type" "application/json"} 
                                :body (js/JSON.stringify body-api)}))
            (.then (fn [res] (.json res)))
            (.then (fn [data]
                     (let [all-elevations (map #(.-elevation %) (.-results data))
                           chunked-elevs (partition (inc num-points) all-elevations)
                           boundary-points (atom [])]
                       
                       (doseq [[idx elevs] (map-indexed vector chunked-elevs)]
                         (let [path (nth all-rays idx)]
                           (-> (js/fetch "http://localhost:3000/check-profile"
                                         (clj->js {:method "POST"
                                                   :headers {"Content-Type" "application/json"}
                                                   :body (js/JSON.stringify (clj->js {:elevations elevs 
                                                                                     :h1 h-base 
                                                                                     :h2 h-user}))}))
                               (.then (fn [res] (.json res)))
                               (.then (fn [result]
                                        (let [res-clj (js->clj result :keywordize-keys true)
                                              visible-part (get-visible-segment res-clj)
                                              last-visible-idx (max 0 (dec (count visible-part)))
                                              edge-point (nth path last-visible-idx)]
                                          
                                          (swap! boundary-points conj edge-point)
                                          
                                          ;; Коли всі промені зібрані
                                          (when (= (count @boundary-points) (count angles))
                                            (let [polygon-points (clj->js (concat [[lat lng]] @boundary-points))
                                                  poly (L/polygon polygon-points 
                                                                  (clj->js {:color "#3498db" 
                                                                            :fillColor "#3498db"
                                                                            :fillOpacity 0.4
                                                                            :weight 2}))]
                                              (.addTo poly @rays-group)
                                              ;; Ховаємо лоадер
                                              (set! (.-display (.-style loader)) "none")))))))))))))))))

;; Додай це в функцію init
(defn setup-ui-events []
  (let [clear-btn (js/document.getElementById "clear-btn")]
    (.addEventListener clear-btn "click" 
      (fn [] 
        (.clearLayers @rays-group)
        (when @last-marker 
          (.remove @last-marker)
          (reset! last-marker nil))))))

;; Нова деталізована іконка радіощогли
(def antenna-icon 
  (.icon js/L (clj->js {:iconUrl "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiMyYzNlNTAiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjxwYXRoIGQ9Ik0xMiAyTDEyIDUuNU0xMiAyMkwxMiAxMk0xMiAxMkw3IDIyTTEyIDEyTDE3IDIyTTEwIDhoNE04IDExaDhNMTEuNSAyaDEiLz48L3N2Zz4="
                        :iconSize [40 40]
                        :iconAnchor [20 40]
                        :className "antenna-icon-svg"})))

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
    (let [legend (.control js/L (clj->js {:position "bottomright"}))]
      (set! (.-onAdd legend) 
            (fn [map]
              (let [div (.create js/L.DomUtil "div" "map-legend")]
                (set! (.-innerHTML div) 
                      "<div style='text-align:center;'>
                        <strong style='color:#2c3e50;'>Радіопокриття</strong><br>
                        <div style='display:flex; align-items:center; justify-content:center; gap:8px; margin:5px 0;'>
                           <div class='legend-color' style='background: #3498db; width:15px; height:15px; border-radius:3px;'></div> 
                           <span style='font-weight:bold;'>VHF 170MHz</span>
                        </div>
                        <small style='color:#7f8c8d;'>H1: Щогла | H2: 1.7м</small>
                       </div>")
                div)))
      (.addTo legend my-map))

    (reset! rays-group (-> (.layerGroup js/L) (.addTo my-map)))

    (.on my-map "click" 
         (fn [e] 
           (let [lat (.-lat (.-latlng e))
                 lng (.-lng (.-latlng e))]
             (handle-map-click lat lng my-map))))

    (setup-ui-events)
    (js/console.log "Система готова.")))
