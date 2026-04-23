(ns map-ukv.core
  (:require ["leaflet" :as L]))

(defonce map-state (atom nil))
(defonce last-marker (atom nil))
(defonce rays-group (atom nil)) ; Група для всіх ліній «зірки»
(defonce antenna-pos (atom nil))


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
  (when @rays-group (.clearLayers @rays-group))
  (when-let [m @last-marker] (.remove m))
  
  (let [m (-> (.marker js/L (clj->js [lat lng])) (.addTo my-map))
      h-base (js/parseFloat (.-value (js/document.getElementById "antenna-height")))
      h-user 1.5 
      dist 45 ; Збільшуємо до 45 км
      angles (range 0 360 3) ; Крок 3 градуси (120 променів) - баланс точності та швидкості
      ;; Збільшуємо кількість точок на промені до 50 для дальніх дистанцій
      all-rays (map (fn [angle] 
                      (interpolate-points [lat lng] (destination-point lat lng dist angle) 50)) 
                    angles)
      flat-points (apply concat all-rays)]
    
    (reset! last-marker m)
    (js/console.log "Будую полігон покриття...")

    (let [body-api (clj->js {:locations (map (fn [[la ln]] {:latitude la :longitude ln}) flat-points)})]
      (-> (js/fetch "https://api.open-elevation.com/api/v1/lookup"
                    (clj->js {:method "POST" 
                              :headers {"Content-Type" "application/json"} 
                              :body (js/JSON.stringify body-api)}))
          (.then (fn [res] (.json res)))
          (.then (fn [data]
                   (let [all-elevations (map #(.-elevation %) (.-results data))
                         chunked-elevs (partition 51 all-elevations)
                         boundary-points (atom [])]
                     
                     (doseq [[idx elevs] (map-indexed vector chunked-elevs)]
                       (let [path (nth all-rays idx)]
                         (-> (js/fetch "http://localhost:3000/check-profile"
                                       (clj->js {:method "POST"
                                                 :headers {"Content-Type" "application/json"}
                                                 :body (js/JSON.stringify (clj->js {:elevations elevs :h1 h-base :h2 h-user}))}))
                             (.then (fn [res] (.json res)))
                             (.then (fn [result]
                                      (let [res-clj (js->clj result :keywordize-keys true)
                                            visible-part (get-visible-segment res-clj)
                                            last-visible-idx (max 0 (dec (count visible-part)))
                                            edge-point (nth path last-visible-idx)]
                                        
                                        (swap! boundary-points conj edge-point)
                                        
                                        (when (= (count @boundary-points) (count angles))
                                          (let [polygon-points (clj->js (concat [[lat lng]] @boundary-points))
                                                poly (L/polygon polygon-points 
                                                                (clj->js {:color "#3388ff" 
                                                                          :fillColor "#3388ff"
                                                                          :fillOpacity 0.4
                                                                          :weight 2}))]
                                            (.addTo poly @rays-group))))))))))))))))

(defn init []
  (let [my-map (.map L "map-id")
        topo-url "https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png"
        options (clj->js {:maxZoom 17 :attribution "OpenTopoMap"})]
    (.setView my-map (clj->js [50.45 30.52]) 10)
    (.addTo (.tileLayer L topo-url options) my-map)
    
    ;; Створюємо групу для променів
    (reset! rays-group (-> (.layerGroup L) (.addTo my-map)))
    
    (.on my-map "click" (fn [e] (handle-map-click (.. e -latlng -lat) (.. e -latlng -lng) my-map)))
    (reset! map-state my-map)))
