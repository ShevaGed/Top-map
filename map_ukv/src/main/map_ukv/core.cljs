(ns map-ukv.core
  (:require ["leaflet" :as L]
            [clojure.string :as str]))

(goog-define API-URL "")

(defonce map-state (atom nil))
(defonce active-antennas (atom [])) ; Поточні додані антени з параметрами
(declare lat-lng->mgrs)
(defonce markers (atom [])) ; Маркери антен (максимум 2)
(defonce radio-marker (atom nil)) ; Маркер рації (тільки один)
(defonce radio-layers (atom nil)) ; Шар з колами пагорбів для рації
(defonce rays-group (atom nil)) ; Група для всіх ліній «зірки»
(defonce legend-ui (atom nil))
(defonce last-scan-results (atom nil))
(defonce hill-circles (atom [])) ;; Кола пагорбів для динамічного радіусу
(defonce boundary-points (atom {}))
(defonce ruler-active? (atom false))   ; Чи увімкнено режим лінійки (тепер глобальний)
(defonce ruler-points (atom []))       ; Сюди збиратимемо координати [pt1 pt2]
(defonce ruler-layers (atom nil))      ; Група шарів суто для лінійки та тексту
(defonce antenna-colors ["#e74c3c" "#3498db" "#2ecc71" "#f1c40f" "#9b59b6" "#e67e22" "#1abc9c" "#e84393"])
;; ── Утилітні хелпери ──────────────────────────────────────────────────────

(defn get-ui-val
  "Читає рядкове значення поля UI за id"
  [id]
  (.-value (js/document.getElementById id)))

(defn post-json
  "Надсилає POST запит з JSON тілом, повертає Promise<clj>"
  [url body-clj]
  (-> (js/fetch (str API-URL url)
                (clj->js {:method "POST"
                           :headers {"Content-Type" "application/json"}
                           :body (js/JSON.stringify (clj->js body-clj))}))
      (.then #(.json %))
      (.then #(js->clj % :keywordize-keys true))))

(defn make-elev-label
  "Створює divIcon з підписом висоти для маркера"
  [text color top-px left-px]
  (.divIcon js/L (clj->js {:className ""
                            :html (str "<div style='"
                                       "font-size:10px;font-weight:bold;"
                                       "color:" color ";"
                                       "text-shadow:0 0 3px white,0 0 3px white;"
                                       "white-space:nowrap;"
                                       "margin-top:" top-px "px;"
                                       "margin-left:" left-px "px;'>"
                                       text "</div>")
                            :iconAnchor [0 0]})))

(defn add-to-layer
  "Додає Leaflet об'єкт до шару"
  [obj layer]
  (.addTo obj layer)
  obj)

(def antenna-icon 
  (.icon js/L (clj->js {:iconUrl "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiMyYzNlNTAiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjxwYXRoIGQ9Ik0xMiAyTDEyIDUuNU0xMiAyMkwxMiAxMk0xMiAxMkw3IDIyTTEyIDEyTDE3IDIyTTEwIDhoNE04IDExaDhNMTEuNSAyaDEiLz48L3N2Zz4="
                        :iconSize [40 40]
                        :iconAnchor [20 40]
                        :className "antenna-icon-svg"})))

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

(defn update-legend-ui [my-map]
  (let [legend-div (js/document.getElementById "dynamic-legend")]
    (when legend-div
      ;; Налаштовуємо скролл та розміри для самого контейнера легенди
      (set! (.-style.maxHeight legend-div) "200px")
      (set! (.-style.overflowY legend-div) "auto")
      (set! (.-style.width legend-div) "280px")
      
      (if (empty? @active-antennas)
        (set! (.-innerHTML legend-div) "<div style='text-align:center; padding:5px; color:gray;'>Список антен порожній</div>")
        (let [header "<div style='font-weight:bold; text-align:center; margin-bottom:5px; border-bottom:1px solid #ccc; padding-bottom:3px;'>Активні антени:</div>"
              rows (map-indexed
                     (fn [idx ant]
                       (let [color (:color ant)
                             mgrs  (:mgrs ant)
                             h1    (:h1 ant)
                             freq  (:freq ant)
                             lat   (:lat ant)
                             lng   (:lng ant)]
                         (str "<div class='antenna-list-item' style='cursor:pointer; padding:4px; margin-bottom:3px; border-radius:3px; background:rgba(255,255,255,0.9); font-size:11px; display:flex; align-items:center; gap:6px;' "
                              "onclick='let m = map_ukv.core.map_state; if(m) { @m.flyTo([" lat "," lng "], 13); }'>"
                              "<span style='background:" color "; width:10px; height:10px; border-radius:50%; display:inline-block;'></span>"
                              "<span><b>#" (inc idx) "</b> | " freq "MHz | " h1 "м | " mgrs "</span>"
                              "</div>")))
                     @active-antennas)
              full-html (str header (apply str rows))]
          (set! (.-innerHTML legend-div) full-html))))))

(defn validate-params [h-base h-user dist freq]
  (cond
    (or (js/isNaN h-base) (< h-base 1) (> h-base 300))
    (do (js/alert "Помилка: Висота антени має бути від 1 до 300 метрів.") false)

    (or (js/isNaN h-user) (< h-user 1) (> h-user 50))
    (do (js/alert "Помилка: Висота приймача має бути від 1 до 50 метрів.") false)

    (or (js/isNaN dist) (<= dist 0) (> dist 100))
    (do (js/alert "Помилка: Дистанція сканування має бути від 1 до 100 км.") false)

    (not (contains? #{140 440} freq))
    (do (js/alert "Помилка: Оберіть коректну частоту (140 або 440 МГц).") false)

    :else true))



;; ── Рендеринг режиму рації ────────────────────────────────────────────────


(defn hill-radius [zoom]
  (max 40 (/ 1800 (js/Math.pow 1.6 (- zoom 9)))))

(defn render-zone-rings [lat lng color layer]
  (doseq [zone-km [10 20 30 40 50]]
    (add-to-layer
      (.circle js/L (clj->js [lat lng])
               (clj->js {:radius    (* zone-km 1000)
                         :color     color :weight 2
                         :opacity   0.85  :fill false
                         :dashArray "10, 6"}))
      layer)))

(defn render-radio-label [lat lng elev layer]
  (add-to-layer
    (.marker js/L (clj->js [lat lng])
             (clj->js {:icon        (make-elev-label (str "📻 " (js/Math.round elev) "м")
                                                     "#2c3e50" 8 -12)
                       :interactive false}))
    layer))

(defn render-hill-point [pt color layer]
  (let [lbl    (str (js/Math.round (:elev pt)) "м")
        r      (hill-radius (.getZoom @map-state))
        circle (.circle js/L (clj->js [(:lat pt) (:lng pt)])
                        (clj->js {:radius r :color color :fillColor color
                                  :fillOpacity 0.85 :weight 0}))]
    (add-to-layer circle layer)
    (swap! hill-circles conj circle)
    (add-to-layer
      (.marker js/L (clj->js [(:lat pt) (:lng pt)])
               (clj->js {:icon (make-elev-label lbl "#4a235a" 6 -10) :interactive false}))
      layer)))

(defn pick-top-hills
  "Жадібний відбір top-n найвищих точок з мінімумом min-d-m між ними"
  [pts n min-d-m]
  (reduce
    (fn [acc pt]
      (if (>= (count acc) n)
        (reduced acc)
        (if (every? (fn [s]
                      (let [dlat (- (:lat pt) (:lat s))
                            dlng (- (:lng pt) (:lng s))]
                        (> (js/Math.sqrt (+ (* dlat dlat 1.23e10)
                                           (* dlng dlng 7.5e9)))
                           min-d-m)))
                    acc)
          (conj acc pt)
          acc)))
    []
    (sort-by :elev > pts)))

(defn select-hills-by-zones [all-pts]
  (let [pick (fn [from to] (pick-top-hills
                              (filter #(and (>= (:dist-km %) from) (< (:dist-km %) to)) all-pts)
                              15 5000.0))]
    (concat (pick 10 20) (pick 20 30) (pick 30 40)
            ;; остання зона включно з 50
            (pick-top-hills (filter #(and (>= (:dist-km %) 40) (<= (:dist-km %) 50)) all-pts)
                            15 5000.0))))

;; ── Рендеринг звичайного режиму ───────────────────────────────────────────

(defn render-coverage-polygon [lat lng angles angle-map res-clj color antenna-id]
  (let [edge-points (map-indexed
                      (fn [idx points-info]
                        (let [path (get angle-map (nth angles idx))
                              last-idx (max 0 (dec (count (take-while :visible points-info))))]
                          (nth path last-idx)))
                      res-clj)
        ;; Створюємо полігон Leaflet
        poly (L/polygon (clj->js (concat [[lat lng]] edge-points))
                        (clj->js {:color color :fillColor color
                                  :fillOpacity 0.4 :weight 2 :smoothFactor 1}))]
    ;; Записуємо ID антени в об'єкт полігону
    (when antenna-id (aset poly "antenna_id" antenna-id))
    
    (add-to-layer poly @rays-group)))

(defn handle-map-click [lat lng my-map]
  (let [h-base     (js/parseFloat (get-ui-val "antenna-height"))
        h-user     (js/parseFloat (get-ui-val "user-height"))
        dist-km    (js/parseFloat (get-ui-val "scan-dist"))
        dist-m     (* dist-km 1000)
        freq       (js/parseInt (get-ui-val "freq-select"))
        loader     (js/document.getElementById "loader")
        reverse-mode? (.-checked (js/document.getElementById "mode-toggle"))
        angles     (if reverse-mode? (range 0 360 1) (range 0 361 3))
        num-points (if reverse-mode?
                     (-> (/ dist-km 1.0) (js/Math.max 20) (js/Math.min 50) js/Math.round)
                     (-> (/ dist-km 0.4) (js/Math.max 20) (js/Math.min 150) js/Math.round))
        h1 h-base
        h2 h-user]

    (when (validate-params h-base h-user dist-km freq)

      (if reverse-mode?
        ;; === РЕЖИМ РАЦІЇ: один маркер, замінюємо попередній ===
        (do
          (when @radio-marker (.remove @radio-marker))
          (when @radio-layers (.clearLayers @radio-layers))
          (reset! radio-layers (-> (.layerGroup js/L) (.addTo my-map)))
          (reset! hill-circles [])
          (reset! radio-marker (-> (.marker js/L (clj->js [lat lng]) (clj->js {:icon antenna-icon}))
                                   (.addTo my-map)))))

      (set! (.-display (.-style loader)) "block")

      (let [new-marker (when (not reverse-mode?)
                         (-> (.marker js/L (clj->js [lat lng]) (clj->js {:icon antenna-icon}))
                             (.addTo my-map)))
            _ (when new-marker (swap! markers conj new-marker))
            _ (when new-marker (aset new-marker "antenna_id" (.now js/Date)))
            marker-id (count @markers)
            color (if reverse-mode? 
                    "#8e44ad"
                    (let [color-index (mod (dec marker-id) (count antenna-colors))]
                      (nth antenna-colors color-index)))
            
            ;; 1. Розрахунок геометрії променів
            angle-map (into {} (map (fn [a] [a (interpolate-points [lat lng] (destination-point lat lng dist-km a) num-points)]) angles))
            flat-locations (map (fn [[la ln]] {:latitude la :longitude ln}) 
                                (apply concat (map #(get angle-map %) angles)))]

        ;; 2. Отримання висот
        (-> (js/fetch (str API-URL "/elevation")
                      (clj->js {:method "POST" 
                                :headers {"Content-Type" "application/json"} 
                                :body (js/JSON.stringify (clj->js {:locations flat-locations}))}))
            (.then (fn [res] (.json res)))
            (.then (fn [data]
                     (let [all-elevations (map #(.-elevation %) (.-results data))
                           chunked-elevs (partition (inc num-points) all-elevations)]
                       
                       ;; 3. Отримання видимості / пошук пагорбів
                       (if reverse-mode?
                         ;; === REVERSE MODE: пагорби по зонах ===
                         ;; 0-10км  — пропускаємо
                         ;; 10-20км — 15 найвищих точок, мін 5км між ними
                         ;; 20-30км — 15 найвищих точок, мін 5км між ними
                         ;; 30-40км — 15 найвищих точок, мін 5км між ними
                         ;; 40-50км — 15 найвищих точок, мін 5км між ними
                         ;; Збираємо всі точки з відстанню
                         (let [all-paths (map #(get angle-map %) angles)
                               step-km  (/ dist-km num-points)
                               all-pts  (mapcat
                                          (fn [path elevs]
                                            (map-indexed
                                              (fn [i [la ln]]
                                                {:elev (nth elevs i 0) :lat la :lng ln
                                                 :dist-km (* i step-km)})
                                              path))
                                          all-paths chunked-elevs)
                               selected (select-hills-by-zones all-pts)]

                           (render-zone-rings lat lng color @radio-layers)
                           (render-radio-label lat lng (first (first chunked-elevs)) @radio-layers)
                           (doseq [pt selected] (render-hill-point pt color @radio-layers))

                           (set! (.-display (.-style loader)) "none")
                          (update-legend-ui my-map))

                         ;; === ЗВИЧАЙНИЙ РЕЖИМ ===
                         (-> (post-json "/check-profile-batch"
                                        {:elevations_list chunked-elevs
                                         :h1 h-base :h2 h-user
                                         :freq freq :dist dist-m})
                             (.then (fn [res-clj]
                                      (reset! last-scan-results {:lat lat :lng lng :results res-clj
                                                                 :params {:h1 h-base :h2 h-user
                                                                           :dist dist-km :freq freq}})
                                      (let [a-id (when new-marker (aget new-marker "antenna_id"))]
                                        (render-coverage-polygon lat lng angles angle-map res-clj color a-id))
                                      
                                      ;; Зберігаємо дані антени в наш новий атом
                                      (swap! active-antennas conj {:color color
                                                                   :mgrs  (lat-lng->mgrs lat lng)
                                                                   :h1    h-base
                                                                   :freq  freq
                                                                   :lat   lat
                                                                   :lng   lng})
                                      
                                      (set! (.-display (.-style loader)) "none")
                                      ;; Викликаємо оновлену функцію з правильним аргументом
                                      (update-legend-ui my-map)))
                             (.catch (fn [err]
                                       (set! (.-display (.-style loader)) "none")
                                       (js/alert (str "Помилка: " (.-message err)))))))))))))))
(defn render-history-table [data]
  (let [body (js/document.getElementById "history-body")]
    (when body
      (set! (.-innerHTML body) "")
      (if (empty? data)
        (set! (.-innerHTML body) "<tr><td colspan='4' style='text-align:center; padding:10px; color:gray;'>Історія порожня</td></tr>")
        (doseq [item data]
          (let [row (.insertRow body)
                id (get item "id")
                lat (str (get item "lat"))
                lng (str (get item "lng"))
                h1  (str (get item "h_antenna"))
                h2  (str (get item "h_user"))
                freq (str (get item "freq"))
                raw-dt (str (get item "created_at"))
                dt (if (> (count raw-dt) 16) (subs raw-dt 5 16) raw-dt)]
            
            (.setAttribute row "data-lat" lat)
            (.setAttribute row "data-lng" lng)
            (.setAttribute row "data-h1" h1)
            (.setAttribute row "data-h2" h2)
            (.setAttribute row "data-freq" freq)
            (.setAttribute row "data-id" id) ; Зберігаємо ID для видалення
            
            (set! (.-className row) "history-row")
            (set! (.-style.cursor row) "pointer")

            (set! (.-innerHTML row)
                  (str "<td style='padding: 6px 4px; color: #000;'>" dt "</td>"
                       "<td style='padding: 6px 4px; font-weight: bold; color: #2980b9; text-align: center;'>" freq "</td>"
                       "<td style='padding: 6px 4px; color: #27ae60; text-align: right;'>" h1 "/" h2 "м</td>"
                       "<td style='padding: 6px 4px; text-align: center;'>"
                       "<button class='delete-btn' style='background:none; border:none; color:#e74c3c; cursor:pointer; font-weight:bold; font-size:14px;'>&times;</button>"
                       "</td>"))))))))


(defn fetch-history []
  (-> (js/fetch (str API-URL "/history"))
      (.then (fn [res] (.json res)))
      (.then (fn [data]
               (let [clj-data (js->clj data)]
                 (render-history-table clj-data))))
      (.catch (fn [err]
                (js/console.error "Помилка завантаження історії:" err)))))


(defn save-to-db [lat lng h1 h2 freq]
  (let [data {:lat lat 
              :lng lng 
              :h1 h1 
              :h2 h2 
              :freq freq}]
    (-> (js/fetch (str API-URL "/save-scan")
                  (clj->js {:method "POST"
                            :headers {"Content-Type" "application/json"}
                            :body (js/JSON.stringify (clj->js data))}))
        (.then (fn [res] (.json res)))
        (.then (fn [result]
                 (js/console.log "Збережено в БД:" result)
                 (fetch-history)
                 (js/alert "Розрахунок успішно збережено в базу даних!")))
        (.catch (fn [err]
                  (js/console.error "Помилка збереження:" err)
                  (js/alert "Не вдалося зберегти в БД."))))))


(defn delete-from-db [id]
  (when (and id (js/confirm "Ви впевнені, що хочете видалити цей запис?"))
    (-> (js/fetch (str API-URL "/delete-scan/" id)
                  (clj->js {:method "DELETE"}))
        (.then (fn [res] 
                 (if (.-ok res)
                   (.json res)
                   (throw (js/Error. "Помилка сервера")))))
        (.then (fn [result]
                 (js/console.log "Видалено ID:" id)
                 (fetch-history))) ; Оновлюємо таблицю
        (.catch (fn [err]
                  (js/console.error "Помилка видалення:" err)
                  (js/alert "Не вдалося видалити запис із бази."))))) )

(defn setup-ui-events []
  (let [clear-btn    (js/document.getElementById "clear-btn")
        export-btn   (js/document.getElementById "export-btn")
        save-db-btn  (js/document.getElementById "save-db-btn")
        history-body (js/document.getElementById "history-body")]

    (when clear-btn
      (.addEventListener clear-btn "click"
                         (fn []
                           (.clearLayers @rays-group)
                           (doseq [m @markers] (.remove m))
                           (reset! markers [])
                           (when @radio-marker (.remove @radio-marker))
                           (when @radio-layers (.clearLayers @radio-layers))
                           (reset! radio-marker nil)
                           (reset! radio-layers nil)
                           (reset! active-antennas [])
                           (update-legend-ui @map-state))))

    (when export-btn
      (.addEventListener export-btn "click" 
                         (fn []
                           (if-let [scan @last-scan-results]
                             (let [json-str (js/JSON.stringify (clj->js scan))
                                   blob (js/Blob. #js [json-str] #js {:type "application/json"})
                                   url (.createObjectURL js/URL blob)
                                   link (js/document.createElement "a")]
                               (set! (.-href link) url)
                               (set! (.-download link) (str "coverage-" (js/Date.now) ".json"))
                               (.click link)
                               (.revokeObjectURL js/URL url))
                             (js/alert "Помилка: Спочатку зробіть розрахунок на карті!")))))

    (when save-db-btn
      (.addEventListener save-db-btn "click" 
                         (fn []
                           (let [marker (last @markers)]
                             (if marker
                               (let [latlng (.getLatLng marker)
                                     h1 (js/parseFloat (get-ui-val "antenna-height"))
                                     h2 (js/parseFloat (get-ui-val "user-height"))
                                     freq (js/parseInt (get-ui-val "freq-select"))]
                                 (save-to-db (.-lat latlng) (.-lng latlng) h1 h2 freq))
                               (js/alert "Спочатку поставте антену на карту!"))))))

   (when history-body
     (.addEventListener history-body "click"
       (fn [e]
         (let [target (.-target e)
               row (.closest target "tr")
               id (aget row "dataset" "id")]
           
           ;; ПЕРЕВІРКА: Якщо натиснули на кнопку видалення (хрестик)
           (if (.contains (.-classList target) "delete-btn")
             (do 
               (.stopPropagation e) ; Щоб не спрацював клік по всьому рядку
               (delete-from-db id))
             
             ;; Інакше — логіка переходу до антени
             (let [lat (js/parseFloat (aget row "dataset" "lat"))
                   lng (js/parseFloat (aget row "dataset" "lng"))
                   h1 (js/parseFloat (aget row "dataset" "h1"))
                   h2 (js/parseFloat (aget row "dataset" "h2"))
                   freq (js/parseInt (aget row "dataset" "freq"))]
               (when (and (not (js/isNaN lat)) (not (js/isNaN lng)))
                 (.flyTo @map-state (clj->js [lat lng]) 13)
                 (set! (.-value (js/document.getElementById "antenna-height")) h1)
                 (set! (.-value (js/document.getElementById "user-height")) h2)
                 (set! (.-value (js/document.getElementById "freq-select")) freq)
                 (handle-map-click lat lng @map-state))))))))))



;; ── Контекстне меню ───────────────────────────────────────────────────────

(defn hide-context-menu []
  (let [menu (js/document.getElementById "map-context-menu")]
    (when menu (set! (.-display (.-style menu)) "none"))))

(defn lat-lng->mgrs [lat lng]
  (let [zone-num   (+ 1 (js/Math.floor (/ (+ lng 180) 6)))
        zone-letters "CDEFGHJKLMNPQRSTUVWX"
        lat-band   (nth zone-letters (js/Math.floor (/ (+ lat 80) 8)) "Z")
        lat-r      (* lat (/ js/Math.PI 180))
        lng-r      (* lng (/ js/Math.PI 180))
        lng0       (* (+ (* (- zone-num 1) 6) -180 3) (/ js/Math.PI 180))
        a          6378137.0
        f          (/ 1 298.257223563)
        b          (* a (- 1 f))
        e2         (- 1 (* (/ b a) (/ b a)))
        n          (/ a (js/Math.sqrt (- 1 (* e2 (js/Math.pow (js/Math.sin lat-r) 2)))))
        t          (js/Math.pow (js/Math.tan lat-r) 2)
        c          (* (/ e2 (- 1 e2)) (js/Math.pow (js/Math.cos lat-r) 2))
        aa         (* (js/Math.cos lat-r) (- lng-r lng0))
        m          (* a (- (* (- 1 (/ e2 4) (/ (* 3 e2 e2) 64)) lat-r)
                           (* (+ (/ (* 3 e2) 8) (/ (* 3 e2 e2) 32)) (js/Math.sin (* 2 lat-r)))
                           (* (/ (* 15 e2 e2) 256) (js/Math.sin (* 4 lat-r)))))
        easting    (+ (* 0.9996 n (+ aa (* aa aa aa (/ (- 1 t c) 6))
                                     (* aa aa aa aa aa (/ (- 5 (* 18 t) t t (* 72 c)) 120))))
                      500000)
        northing   (+ (* 0.9996 (+ m (* n (js/Math.tan lat-r)
                                       (+ (* aa aa (/ 1 2))
                                          (* aa aa aa aa (/ (- 5 t (* 9 c)) 24))))))
                      (if (< lat 0) 10000000 0))
        e100k      (js/Math.floor (/ easting 100000))
        n100k      (js/Math.floor (/ northing 100000))
        e-letters  (nth ["ABCDEFGH" "JKLMNPQR" "STUVWXYZ"] (mod (- zone-num 1) 3) "A")
        n-letters  (if (odd? zone-num) "ABCDEFGHJKLMNPQRSTUV" "FGHJKLMNPQRSTUVABCDE")
        e-letter   (nth e-letters (- e100k 1) "A")
        n-letter   (nth n-letters (mod n100k 20) "A")
        e5         (js/Math.floor (mod easting 100000))
        n5         (js/Math.floor (mod northing 100000))
        pad5       (fn [n] (let [s (str n)] (str (apply str (repeat (- 5 (count s)) "0")) s)))]
    (str zone-num lat-band " " e-letter n-letter " " (pad5 e5) " " (pad5 n5))))

(defn show-context-menu [x y lat lng]
  (let [menu     (js/document.getElementById "map-context-menu")
        mgrs-val (js/document.getElementById "ctx-mgrs-val")
        dd-val   (js/document.getElementById "ctx-dd-val")
        mgrs-str (lat-lng->mgrs lat lng)
        dd-str   (str (.toFixed lat 6) ", " (.toFixed lng 6))]
    ;; Заповнюємо значення
    (set! (.-textContent mgrs-val) mgrs-str)
    (set! (.-textContent dd-val)   dd-str)
    ;; Позиціонуємо і показуємо
    (set! (.-left (.-style menu))    (str x "px"))
    (set! (.-top  (.-style menu))    (str y "px"))
    (set! (.-display (.-style menu)) "block")
    ;; Коригуємо якщо виходить за край екрану
    (let [rect (.getBoundingClientRect menu)
          vw   (.-innerWidth js/window)
          vh   (.-innerHeight js/window)]
      (when (> (.-right rect) vw)
        (set! (.-left (.-style menu)) (str (- x (.-width rect)) "px")))
      (when (> (.-bottom rect) vh)
        (set! (.-top  (.-style menu)) (str (- y (.-height rect)) "px"))))))

(defn setup-context-menu [my-map]
  (let [menu   (js/document.getElementById "map-context-menu")
        map-el (js/document.getElementById "map-id")]
    ;; Правий клік через DOM — надійно в усіх браузерах
    (.addEventListener map-el "contextmenu"
      (fn [e]
        (.preventDefault e)
        (.stopPropagation e)
        (let [x   (.-clientX e)
              y   (.-clientY e)
              ll  (.mouseEventToLatLng my-map e)
              lat (.-lat ll)
              lng (.-lng ll)]
          (show-context-menu x y lat lng)))
      false)
    ;; Клік на MGRS — копіюємо
    (.addEventListener (js/document.getElementById "ctx-mgrs") "click"
      (fn [_]
        (let [val (.-textContent (js/document.getElementById "ctx-mgrs-val"))]
          (-> (.-clipboard js/navigator) (.writeText val))
          (set! (.-textContent (js/document.getElementById "ctx-mgrs-val")) "✓ скопійовано!")
          (js/setTimeout #(set! (.-textContent (js/document.getElementById "ctx-mgrs-val")) val) 1500))
        (hide-context-menu)))
    ;; Клік на DD — копіюємо
    (.addEventListener (js/document.getElementById "ctx-dd") "click"
      (fn [_]
        (let [val (.-textContent (js/document.getElementById "ctx-dd-val"))]
          (-> (.-clipboard js/navigator) (.writeText val))
          (set! (.-textContent (js/document.getElementById "ctx-dd-val")) "✓ скопійовано!")
          (js/setTimeout #(set! (.-textContent (js/document.getElementById "ctx-dd-val")) val) 1500))
        (hide-context-menu)))
    ;; Будь-який клік або drag — ховаємо меню
    (.on my-map "click"     (fn [_] (hide-context-menu)))
    (.on my-map "movestart" (fn [_] (hide-context-menu)))
    (.addEventListener js/document "keydown"
      (fn [e] (when (= (.-key e) "Escape") (hide-context-menu))))))

(defn init []
  (let [topo (L/tileLayer "https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png" 
                          (clj->js {:maxZoom 17 :attribution "OpenTopoMap"}))
        streets (L/tileLayer "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" 
                            (clj->js {:attribution "OpenStreetMap"}))
        satellite (L/tileLayer "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}" 
                              (clj->js {:attribution "Esri Satellite"}))
        
        my-map (-> (.map js/L "map-id" (clj->js {:center [50.0 36.2] :zoom 11 :layers [topo] :attributionControl false})))]

    ;; КРИТИЧНО: Зберігаємо екземпляр карти в атом, щоб інші функції (як flyTo) могли його дістати
    (reset! map-state my-map)
    (setup-context-menu my-map)

    ;; Керування шарами
    (let [base-maps (clj->js {"Топографічна" topo 
                             "Вулиці" streets 
                             "Супутник" satellite})]
      (-> (.control.layers js/L base-maps) (.addTo my-map)))

    ;; Легенда
    (let [legend (.control js/L (clj->js {:position "bottomright"}))]
      (set! (.-onAdd legend) 
            (fn [map]
              (let [div (.create js/L.DomUtil "div" "map-legend")]
                (set! (.-id div) "dynamic-legend")
                (set! (.-innerHTML div) "Клікніть на карту для розрахунку")
                div)))
      (.addTo legend my-map)
      (reset! legend-ui legend))

    (reset! rays-group (-> (.layerGroup js/L) (.addTo my-map)))

    ;; Лінійка масштабу
    (-> (.control.scale js/L (clj->js {:position "bottomright" :metric true :imperial false}))
        (.addTo my-map))

    ;; Ініціалізуємо групу шарів для лінійки та додаємо її на карту
    (reset! ruler-layers (-> (.layerGroup js/L) (.addTo my-map)))

    ;; Один єдиний і правильний контрол лінійки
    (let [ruler-ctrl (.control js/L (clj->js {:position "topright"}))]
      (set! (.-onAdd ruler-ctrl)
            (fn [_]
              (let [btn (.createElement js/document "div")]
                (set! (.-className btn) "leaflet-ruler-btn")
                (set! (.-id btn) "ruler-tool-btn")
                (set! (.-title btn) "Лінійка — вимірювання відстані")
                (set! (.-innerHTML btn) "📏")
                
                ;; Якщо сторінка перезавантажилась, а атом залишився true — підсвічуємо кнопку
                (when @ruler-active? (.add (.-classList btn) "active"))
                
                (.disableClickPropagation js/L.DomEvent btn)
                (.disableScrollPropagation js/L.DomEvent btn)
                
                (.addEventListener btn "click"
                  (fn [e]
                    (.preventDefault e)
                    (.stopPropagation e)
                    (swap! ruler-active? not)
                    (if @ruler-active?
                      (.add (.-classList btn) "active")
                      (do 
                        (.remove (.-classList btn) "active")
                        ;; Умова: при вимкненні кнопки лінійка та текст ОДРАЗУ зникають
                        (when @ruler-layers (.clearLayers @ruler-layers))
                        (reset! ruler-points [])))))
                btn)))
      (.addTo ruler-ctrl my-map))

   (.on my-map "click" 
         (fn [e] 
           (let [latlng (.-latlng e)
                 lat (.-lat latlng)
                 lng (.-lng latlng)]
             (if @ruler-active?
               ;; === РЕЖИМ ЛІНІЙКИ ===
               (cond
                 ;; Третій клік: очищаємо все і починаємо заново з першої точки
                 (= (count @ruler-points) 2)
                 (let [start-dot (js/L.circleMarker latlng (clj->js {:radius 5 :color "red" :fillColor "red" :fillOpacity 1}))]
                   (.clearLayers @ruler-layers)
                   (reset! ruler-points [latlng])
                   (.addLayer @ruler-layers start-dot))

                 ;; Перший клік: запам'ятовуємо точку старта і малюємо першу цятку
                 (empty? @ruler-points)
                 (let [start-dot (js/L.circleMarker latlng (clj->js {:radius 5 :color "red" :fillColor "red" :fillOpacity 1}))]
                   (swap! ruler-points conj latlng)
                   (.addLayer @ruler-layers start-dot))

                 ;; Другий клік: малюємо лінію, другу цятку та виводимо відстань
                 (= (count @ruler-points) 1)
                 (let [p1 (first @ruler-points)
                       p2 latlng
                       ;; Малюємо другу точку фінішу
                       end-dot (js/L.circleMarker p2 (clj->js {:radius 5 :color "red" :fillColor "red" :fillOpacity 1}))
                       
                       ;; Рахуємо точну відстань
                       dist-m (.distanceTo p1 p2) 
                       dist-str (if (>= dist-m 1000)
                                  (str (.toFixed (/ dist-m 1000) 2) " км")
                                  (str (js/Math.round dist-m) " м"))
                       
                       ;; Середня точка для тексту
                       mid-lat (/ (+ (.-lat p1) (.-lat p2)) 2)
                       mid-lng (/ (+ (.-lng p1) (.-lng p2)) 2)
                       
                       ;; Тонка червона лінія
                       poly (js/L.polyline (clj->js [p1 p2]) (clj->js {:color "red" :weight 2}))
                       
                       ;; Чистий підпис БЕЗ КВАДРАТИКІВ (прибираємо стилі та фони Leaflet через className "ruler-tooltip")
                       text-icon (.divIcon js/L (clj->js {:className "ruler-tooltip"
                                                          :html (str "<div style='font-size:12px; font-weight:bold; color:red; "
                                                                     "text-shadow: 0 0 4px white, 0 0 4px white; white-space:nowrap; "
                                                                     "background: rgba(255,255,255,0.8); padding: 2px 5px; border-radius: 3px; "
                                                                     "border: 1px solid red; display: inline-block;'> "
                                                                     dist-str "</div>")
                                                          :iconAnchor [25 10]}))
                       text-marker (js/L.marker (clj->js [mid-lat mid-lng]) (clj->js {:icon text-icon :interactive false}))]
                   
                   (swap! ruler-points conj p2)
                   ;; Додаємо всі елементи в групу лінійки
                   (.addLayer @ruler-layers poly)
                   (.addLayer @ruler-layers end-dot)
                   (.addLayer @ruler-layers text-marker)))

               ;; === ЗВИЧАЙНИЙ РЕЖИМ (СТАРА ЛОГІКА) ===
               (handle-map-click lat lng my-map)))))

    ;; Динамічний радіус кіл при зміні масштабу
    (.on my-map "zoomend"
         (fn [_]
           (let [r (hill-radius (.getZoom my-map))]
             (doseq [circle @hill-circles]
               (.setRadius circle r)))))

    (when-let [dist-input (js/document.getElementById "scan-dist")]
      (set! (.-value dist-input) "50"))

    (setup-ui-events)
    (fetch-history)

    ;; Підказка висоти під мишкою
    (let [tooltip (js/document.createElement "div")]
      (set! (.-id tooltip) "elevation-tooltip")
      (.appendChild (.-body js/document) tooltip)

      ;; Дебаунс щоб не спамити запитами
      (let [timer (atom nil)]
        (.on my-map "mousemove"
             (fn [e]
               (let [x (.-clientX (.-originalEvent e))
                     y (.-clientY (.-originalEvent e))]
                 ;; Показуємо tooltip одразу поруч з курсором
                 (set! (.-display (.-style tooltip)) "block")
                 (set! (.-left (.-style tooltip)) (str (+ x 15) "px"))
                 (set! (.-top  (.-style tooltip)) (str (- y 10) "px"))
                 ;; Дебаунс 150мс — не запитуємо при кожному пікселі
                 (when @timer (js/clearTimeout @timer))
                 (reset! timer
                   (js/setTimeout
                     (fn []
                       (let [lat (.-lat (.-latlng e))
                             lng (.-lng (.-latlng e))]
                         (-> (js/fetch (str API-URL "/elevation")
                                       (clj->js {:method "POST"
                                                 :headers {"Content-Type" "application/json"}
                                                 :body (js/JSON.stringify
                                                         (clj->js {:locations [{:latitude lat :longitude lng}]}))}))
                             (.then (fn [r] (.json r)))
                             (.then (fn [d]
                                      (let [elev (.-elevation (aget (.-results d) 0))]
                                        (set! (.-innerHTML tooltip)
                                              (str "⛰ " (js/Math.round elev) " м"))))))))
                     150)))))
        (.on my-map "mouseout"
             (fn [_]
               (set! (.-display (.-style tooltip)) "none")
               (when @timer (js/clearTimeout @timer))))))

    (js/console.log "Система готова.")))
