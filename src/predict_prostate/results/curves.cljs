(ns predict-prostate.results.curves
  (:require [clojure.string :as str]
            [rum.core :as rum]
            [predict-prostate.results.util :refer [fill treatment-fills dashed-stroke fills-by-style*]]
            [predict-prostate.state.run-time :refer [N results-cursor input-cursor ttt-cursor]]
            [predict-prostate.components.primitives :refer [dead-icon]]
            [predict-prostate.mixins :refer [sizing-mixin]]
            [svg.space :refer [space]]
            [cljs-css-modules.macro :refer-macros [defstyle]]
            [svg.axis :refer [axisBottom axisLeft]]
            [svg.scales :refer [->Identity i->o out ticks tick-format-specifier]]
            [translations.config :refer [translation-profile]]))


(enable-console-print!)

(defstyle styles
  [".outer" {:fill   "none"
             :stroke "none"}]
  [".inner" {:fill             "#fff"
             :stroke           "#000"
             :stroke-opacity   0
             :stroke-width     0.5
             :stroke-dasharray "3, 4"}]
  [".annotation" {
                  :font-size "14pt"
                  }]
  [".arrow" {
             :stroke       "#000"
             :stroke-width "1.5px"
             }])


(defn as-point-series [plot-layers]
  "Convert a vector of data-layers of time-series y-values to a vector of time-series of [x y] points."
  (into [] (for [time-series plot-layers]
             (into [] (map-indexed (fn [i v] [i v]) time-series)))))

(rum/defc line-plot [{:keys [X Y] :as scale} point-series line-style]
  "X and Y are the x-axis and y-axis scale functions.
  Data should look something like this:
  [[0 100]  [1 98.89556593176486]  ... [9 64.83779488900586]  [10 60.8297996952587]]"

  (let [point (fn [x y] (str (X x) " " (Y y)))]
    [:g
     [:polyline (merge {:points (map #(apply point %) point-series)} line-style)]]))

(rum/defc area-plot
  "scale contains the x-axis and y-axis scale functions.
  Point series should look something like this:
  [[0 100]  [1 98.89556593176486]  ... [9 64.83779488900586]  [10 60.8297996952587]]
  Baseline is the "
  ([scale point-series area-style]
   (area-plot scale point-series area-style 0))
  ([{:keys [X Y]} point-series area-style base]
   (when (seq point-series)
     (let [point (fn [x y] (str (X x) " " (Y y)))]
       [:g
        [:polygon (merge {:points (str/join ", " [(str/join ", " (map #(apply point %) point-series))
                                                  (str/join ", " [(point (first (last point-series)) base)
                                                                  (point (first (first point-series)) base)])])}
                    area-style)]]))))

(rum/defc plot [{:keys [X Y] :as scale} plot-style data radical?]
  "X and Y are the x-axis and y-axis scale functions.
  Data should look something like this:
  ([[0 100]  [1 98.89556593176486]  ... [9 64.83779488900586]  [10 60.8297996952587] ]
   [[0 100]  [1 98.89556593176486]  ... [9 64.83779488900586]  [10 60.8297996952587] ]
   [[0 100]  [1 98.89556593176486]  ... [9 64.83779488900586]  [10 60.8297996952587] ]
   [[0 100]  [1 98.89556593176486]  ... [9 64.83779488900586]  [10 60.8297996952587] ]
   [[0 100]  [1 99.93906220645762]  ... [9 98.75403990843078]  [10 98.5298358866154] ])"

  (condp = plot-style
    :area1
    [:g
     ;(map-indexed #(rum/with-key (area-plot scale (nth data %1) {:fill (treatment-fills %1)}) (str "a" %1)) area-data)
     (area-plot scale (nth data 1) {:fill (treatment-fills 1)})
     (area-plot scale (nth data 0) {:fill (treatment-fills 0)})
     (line-plot scale (nth data 2) {:fill "none" :stroke dashed-stroke :strokeDasharray "8,8" :strokeWidth 5 :strokeLinecap "round"})
     ]

    :line2
    [:g
     ; light blue fill
     (when radical? (area-plot scale (nth data 2) {:fill (:radical-above (:line2 fills-by-style*))}))

     ; light blue fill
     (when radical? (area-plot scale (nth data 1) {:fill (:radical (:line2 fills-by-style*))}))

     ; dotted orange
     (line-plot scale (nth data 2) {:fill "none" :stroke dashed-stroke :strokeDasharray "8,8" :strokeWidth 5 :strokeLinecap "round"})

     ; dark blue conservative
     (area-plot scale (nth data 0) {:fill (treatment-fills 0)})

     ; dark blue line
     (line-plot scale (nth data 1) {:fill "none" :stroke (treatment-fills 0) :strokeWidth 2 :strokeLinecap "round"})

     ]



    [:text (str "bad plot-style" plot-style)]
    ))


(rum/defc curves-container [{:keys [outer margin inner padding width height x y x-title y-title]} plot-style data radical?]
  (let [inner (if (nil? inner) {:width  (- (:width outer) (:left margin) (:right margin))
                                :height (- (:height outer) (:top margin) (:bottom margin))}
                               inner)
        width (if (nil? width) (- (:width inner) (:left padding) (:right padding)) width)
        height (if (nil? height) (- (:height inner) (:top padding) (:bottom padding)) height)
        x (if (nil? x) (->Identity [0 width] N) x)
        x-ticks (ticks x)                                   ;(if (nil? x-ticks) (ticks 0 width 10) x-ticks)
        y (if (nil? y) (->Identity [0 height] 10) y)
        y-ticks (ticks y)                                   ;(if (nil? y-ticks) (ticks 0 height 5) y-ticks)
        X (i->o x)
        Y (i->o y)
        ]

    [:div {:style {:margin      "0 auto"
                   :width       "100%"
                   :height      0
                   :padding-top "100%"
                   :position    "relative"
                   }}
     [:svg {:style    {:position "absolute"
                       :top      0
                       :left     0
                       }
            :view-box (str " 0 0 " (:width outer) " " (:height outer))}

      [:g {:key       0
           :transform (str "translate(" (:left margin) ", " (:top margin) ")")}

       [:rect {:key        1
               :class-name (:outer styles)
               :width      (:width inner)
               :height     (:height inner)}]

       ;;
       ;; define the coordinate system
       ;;
       [:g {:key       2
            :transform (str "translate(" (:left padding) "," (:top padding) ")")}
        [:rect {:key        1
                :class-name (:inner styles)
                :width      width
                :height     height}]

        ;; axes on all edges
        [:g {:key       "bottom"
             ;:class-name ".xaxis"
             :transform (str "translate(0," (+ (first (out y)) 10) ")")}
         (axisBottom {:scale x :ticks x-ticks})]

        [:g {:key       "left"
             :transform (str "translate(" (- (first (out x)) 10) ",0)")}
         (axisLeft {:scale y :ticks y-ticks :format-specifier (str (tick-format-specifier y) "%")})]


        [:g {:key       "y-title"
             :transform (str "translate(-62 0) rotate(-90 " (X 0) " " (Y 0) ")")}
         [:text {:key        "note"
                 :class-name (:annotation styles)
                 :x          (X 1)
                 :y          (Y 0)}
          y-title]]

        [:g {:key "x-title" :transform (str "translate(0 50)")}
         [:text {:key        "note"
                 :class-name (:annotation styles)
                 :x          (X 2.5)
                 :y          (Y 0)}
          x-title]]

        (rum/with-key (plot {:X X :Y Y} plot-style (as-point-series data) radical?) "plot")

        ; Add grid overlay
        (map-indexed (fn [k x_k] [:line {:key              (str "x" x_k)
                                         :x1               (X x_k)
                                         :x2               (X x_k)
                                         :y1               (Y 0)
                                         :y2               (Y 100)
                                         :stroke           "#fff"
                                         :stroke-opacity   0.5
                                         :stroke-width     1
                                         :stroke-dasharray (if (zero? (mod (inc k) 5)) "5 5" "2 10")}])
          (range 1 N))

        (map-indexed (fn [k y_k] [:line {:key              (str "y" y_k)
                                         :x1               (X 0)
                                         :x2               (X N)
                                         :y1               (Y y_k)
                                         :y2               (Y y_k)
                                         :stroke           "#fff"
                                         :stroke-opacity   0.5
                                         :stroke-width     1
                                         :stroke-dasharray (if (odd? k) "5 5" "2 10")}])
          (range 10 100 10))]

       ]]]))

(rum/defc curves < rum/reactive rum/static (rum/local [] ::data)
  [data ttt]
  (let [margin {:top 10 :right 10 :bottom 0 :left 0}
        padding {:top 20 :right 0 :bottom 60 :left 80}
        outer {:width 400 :height 400}
        y-title [:curves/y-axis "Percentage of men surviving"]
        x-title [:curves/x-axis "Years after diagnosis"]
        ttt* (rum/react ttt-cursor)]
    [:div

     (when (= translation-profile :edit)
       [:div {:style {:font-size 16}}
        (ttt y-title)])

     (curves-container
      (assoc (space outer margin padding [0 N] 3 [0 100] 5)
             :y-title (ttt* y-title)
             :x-title (ttt* x-title))
      (rum/react (input-cursor :plot-style))
      data
      (pos? (rum/react (input-cursor :primary-rx))))
     
     (when (= translation-profile :edit)
       [:div
        [:div {:style {:width "100%" :text-align "center" :font-size 16}}
         (ttt x-title)]])
     
     ]))

(defn benefit [data tk]
  (tk (nth data 10)))

(defn some-benefit? [data treatment-key] (pos? (benefit data treatment-key)))

(rum/defc legend-item
  [{:keys [label extra-style icon]}]
  [:div
   [:div {:key   3
          :style (merge {:width          "50px"
                         :display        "inline-block"
                         ;:margin-top     "15px"
                         :vertical-align "top"
                         :text-align     "right"}
                   extra-style)}
    (when icon icon)]
   [:div {:key   4
          :style {:display     "inline-block"
                  :margin-left "10px"
                  :width       "calc(100% - 60px)"}}
    [:p label]]])

(rum/defc legend < rum/reactive [data]
  [:div {:width "100%"}
   [:div {:style {:border-top     (str "4px dashed " dashed-stroke)
                  :width          "50px"
                  :display        "inline-block"
                  :margin-top     "15px"
                  :vertical-align "top"}}]
   [:div {:style {:display     "inline-block"
                  :margin-left "10px"
                  :width       "calc(100% - 60px)"}}
    [:p " Survival excluding deaths from prostate cancer"]]
   (when (pos? (rum/react (input-cursor :primary-rx)))
     [:p (dead-icon (fill 1)) " Estimated survival with radical treatment"])

   [:div
    [:div {:key   3
           :style {:width          "50px"
                   :display        "inline-block"
                   :margin-top     "15px"
                   :vertical-align "top"
                   :text-align     "right"}}
     (dead-icon (treatment-fills 0))]
    [:div {:key   4
           :style {:display     "inline-block"
                   :margin-left "10px"
                   :width       "calc(100% - 60px)"}}
     [:p " Conservative management"]]]

   ])

(rum/defc legend2 < rum/reactive [plot-style radical? ttt]
  [:div {:width "100%"}
   (legend-item {:label       (ttt [:lgd2/sedfpc "Survival excluding deaths from prostate cancer"])
                 :extra-style {:border-top (str "5px dashed " dashed-stroke)
                               :margin-top 9}
                 :icon        nil})

   (when radical?
     (condp = plot-style
       :area1
       (legend-item {:label    (ttt [:lgd2/eswrt "Estimated survival with radical treatment"])
                     :extra-style nil
                     :icon        (dead-icon (treatment-fills 1))})

       :line2
       [:div

        (legend-item {:label       (ttt [:lgd2/protbae "Potential range of treatment benefit above estimate"])
                      :extra-style nil
                      :icon        (dead-icon (:radical-above (plot-style fills-by-style*)))})
        (legend-item {:label       (ttt [:lgd2/eswrt "Estimated survival with radical treatment"])
                      :extra-style {:border-top (str "3px solid " (treatment-fills 0))
                                    :margin-top 9}
                      :icon        nil})
        (legend-item {:label       (ttt [:lgd2/protbbe "Potential range of treatment benefit below estimate"])
                      :extra-style nil
                      :icon        (dead-icon (:radical (plot-style fills-by-style*)))})]))

   (legend-item {:label (ttt [:lgd2/icm "Initial conservative management"])
                 :icon  (dead-icon (treatment-fills 0))})

   ])

(defn extract-data [results radical?]
  "extract plot data from the model run. Include radical treatment if radical?"
  (let [;years (range 0 11)
        one-sum #(* 100 (- 1 (+ %1 %2)))
        radical-survival (when radical? (map one-sum
                                          (get-in results [:radical :pred-PC-cum])
                                          (get-in results [:radical :pred-NPC-cum])))
        conservative-survival (map one-sum
                                (get-in results [:conservative :pred-PC-cum])
                                (get-in results [:conservative :pred-NPC-cum]))]
    [conservative-survival                                  ; 0 conservative
     (when radical? radical-survival)                       ; 1 radical
     ;(map #(* 100 (- 1 %)) (get-in results [(if radical? :radical :conservative) :pred-NPC-cum])) ; 2 dotted orange
     (map #(* 100 %) (get-in results [:conservative :NPC-survival]))
     ]))


(rum/defcs results-in-curves < rum/static rum/reactive sizing-mixin [state {:keys [printable ttt]}]
  (let [width (rum/react (:width state))
        side-by-side (or printable (> width 600))
        radical? (= 1 (rum/react (input-cursor :primary-rx)))
        data (extract-data (rum/react results-cursor) radical?)
        plot-style (rum/react (input-cursor :plot-style))
        ;point-series (as-point-series data)
        ]
    [:div {:style {:position "relative"}}

     [:p {:style {:margin-top "15px"}}
      (ttt [:curves/text1 "This graph shows the percentage of men surviving up to"]) " " N " " (ttt [:curves/text2 "years. These results are based on the inputs and treatment you selected"])]


     [:div {:style {:width   (if side-by-side "70%" "100%")
                    :max-width 350
                    :display "inline-block"}}
      [:div {:style {:padding "15px 40px 0px 0px"}} (curves data ttt)]]
     [:div {:style {:padding-top    "30px"
                    :vertical-align "top"
                    :width          (if side-by-side "30%" "100%")
                    :display        "inline-block"}}
      (legend2 plot-style radical? ttt)
      ]]))