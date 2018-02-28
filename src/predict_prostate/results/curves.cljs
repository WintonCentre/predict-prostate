(ns predict-prostate.results.curves
  (:require [clojure.string :as str]
            [rum.core :as rum]
            [predict-prostate.results.util :refer [lookup strip-root callout-fill fill treatment-fills use-line
                                           without-stroke dashed-stroke]]
            [predict-prostate.state.run-time :refer [results-cursor input-cursor]]
            [predict-prostate.results.common :refer [stacked-yearly-values result-scroll-height]]
            [predict-prostate.components.primitives :refer [dead-icon]]
            [predict-prostate.mixins :refer [sizing-mixin]]
            [pubsub.feeds :refer [publish]]
            [svg.space :refer [space]]
            [cljs-css-modules.macro :refer-macros [defstyle]]
            [svg.axis :refer [axisBottom axisTop axisLeft axisRight]]
            [svg.scales :refer [->Identity nice-linear i->o o->i in out ticks tick-format-specifier]]
            [svg.mixins :refer [patch-svg-attrs]]
            [goog.object :as gobj :refer [getValueByKeys]]
            [com.rpl.specter :refer [select transform VAL ALL MAP-VALS nthpath walker]]
            ))


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



(comment
  fill
  (getValueByKeys 0)

  (into {} (map (partial stacked-yearly-values
                         (assoc result-data :horm-yes horm-yes :tra-yes tra-yes)) [1 2])))


(defn filter-results->stacked-curve-data
  "Different models use different treatment widgets, so we need to use these to react to the correct
  treatments and lookup the appropriate result-data."
  [{:keys [model treatments results horm-yes tra-yes] :as result-data} years]

  (cond
    (#{"v1.2" "v2.1"} model)

    {:title          "Breast Cancer Survival"
     :subtitle-over  "over 10 years"
     :subtitle-under "years after surgery"
     :dataset        (mapv (partial stacked-yearly-values
                                    (assoc result-data :horm-yes horm-yes :tra-yes tra-yes)) years)}

    :else
    (throw (js/Error. "no Oxford curves yet"))

    ))

(comment
  (stacked-yearly-values {:model      "v2.1"
                          :treatments (map strip-root [:surgery :horm :chemo :tra :br :oth])
                          :results    @results-cursor
                          :tra-yes    true
                          :horm-yes   true} 5) ˆ

  (filter-results->stacked-curve-data
    {:model      "v2.1"
     :treatments (map strip-root [:surgery :horm :chemo :tra :br :oth])
     :results    @results-cursor
     :horm-yes   true
     :tra-yes    true} [0 1 2 3 4 5])
  )


(defn transpose [m]
  "transpose a 2D data matrix"
  (apply mapv vector m))

(comment
  (transpose [[1 2] [3 4]])
  ;=> [[1 3] [2 4]]

  (transpose [[1 2 3] [4 5 6]])
  ;=> [[1 4] [2 5] [3 6]]
  )


(defn get-data
  [{:keys [model treatments results horm-yes tra-yes] :as result-data} years]
  (let [curve-data (filter-results->stacked-curve-data result-data years)]
    (for [y years]
      (into {} (for [treatment (nth (:dataset curve-data) y)]
                 treatment)))))


(defn other-as-delta
  "Convert other cause of death to a survival delta"
  [data]
  (select [ALL VAL :oth] data)
  (transform [ALL VAL :oth] (fn [m v] (- (- 100 (:oth m)) (+ (:surgery m) (:horm m) (:chemo m) (:tra m)))) data))



(defn format-year-data [transposed]
  (println "transposed: " transposed)
  (into [] (for [t transposed]
             (into [] (map-indexed (fn [i v] {:x i :y v}) t)))))

(comment
  (def data (get-data
              {:model      "v2.1"
               :treatments (map strip-root [:surgery :horm :chemo :tra :oth])
               :results    @results-cursor
               :horm-yes   true
               :tra-yes    true} (range 11)))
  (def oth-data (get-data
                  {:model      "v2.1"
                   :treatments [:oth]
                   :results    @results-cursor
                   :horm-yes   true
                   :tra-yes    true} (range 11)))
  data
  oth-data

  (map #(reductions + (select [MAP-VALS] %)) data)

  (map (comp #(- 100 %) :oth) oth-data)

  (other-as-delta data)

  )




;;;;;;;;;;;;;;



(rum/defc plot [{:keys [X Y]} data]

  "data should look something like this:
  ([{:x 0, :y 100} {:x 1, :y 98.89556593176486} ... {:x 9, :y 64.83779488900586} {:x 10, :y 60.8297996952587}]
   [{:x 0, :y 100} {:x 1, :y 98.89556593176486} ... {:x 9, :y 64.83779488900586} {:x 10, :y 60.8297996952587}]
   [{:x 0, :y 100} {:x 1, :y 98.89556593176486} ... {:x 9, :y 64.83779488900586} {:x 10, :y 60.8297996952587}]
   [{:x 0, :y 100} {:x 1, :y 98.89556593176486} ... {:x 9, :y 64.83779488900586} {:x 10, :y 60.8297996952587}]
   [{:x 0, :y 100} {:x 1, :y 99.93906220645762} ... {:x 9, :y 98.75403990843078} {:x 10, :y 98.5298358866154}])"
  (let [point (fn [x y] (str (X x) " " (Y y)))
        coord (fn [m] (point (:x m) (:y m)))
        rev-data (reverse data)]

    [:g
     (map-indexed (fn [i d] [:polygon {:key    (str "p" i)
                                       :fill   (treatment-fills (- (dec (count data)) i))
                                       :points (str/join ", " [
                                                               (str/join ", " (map #(coord (d %)) (range 11)))
                                                               (str/join ", "
                                                                         [(point 10 0)
                                                                          (point 0 0)]
                                                                         )])}])
                  rev-data)
     (map-indexed (fn [i d] [:polyline {:key    (str "l" i)
                                        :fill   "none"
                                        :stroke dashed-stroke :strokeDasharray "8,8" :strokeWidth 5 :strokeLinecap "round"
                                        :points (map #(coord (d %)) (range 11))
                                        }])
                  [(first rev-data)])
     ]

    )
  )


(rum/defc curves-container [{:keys [outer margin inner padding width height x y]} data]
  (let [inner (if (nil? inner) {:width  (- (:width outer) (:left margin) (:right margin))
                                :height (- (:height outer) (:top margin) (:bottom margin))}
                               inner)
        width (if (nil? width) (- (:width inner) (:left padding) (:right padding)) width)
        height (if (nil? height) (- (:height inner) (:top padding) (:bottom padding)) height)
        x (if (nil? x) (->Identity [0 width] 10) x)
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
          "Percentage of men surviving"]]

        [:g {:key "x-title" :transform (str "translate(0 50)")}
         [:text {:key        "note"
                 :class-name (:annotation styles)
                 :x          (X 2.5)
                 :y          (Y 0)}
          "Years after surgery"]]

        #_(println "all-data" data)
        #_(rum/with-key (other-plot {:X X :Y Y} (last data)) "other-area")
        (rum/with-key (plot {:X X :Y Y} (if use-line (butlast data) data)) "plot")

        ; Add grid overlay
        (map-indexed (fn [k x_k] [:line {:key              (str "x" x_k)
                                         :x1               (X x_k)
                                         :x2               (X x_k)
                                         :y1               (Y 0)
                                         :y2               (Y 100)
                                         :stroke           "#fff"
                                         :stroke-opacity   0.5
                                         :stroke-width     (if (odd? k) 2 1)
                                         :stroke-dasharray (if (odd? k) "5 5" "2 10")}])
                     (range 1 10))

        (map-indexed (fn [k y_k] [:line {:key              (str "y" y_k)
                                         :x1               (X 0)
                                         :x2               (X 10)
                                         :y1               (Y y_k)
                                         :y2               (Y y_k)
                                         :stroke           "#fff"
                                         :stroke-opacity   0.5
                                         :stroke-width     (if (odd? k) 1 1)
                                         :stroke-dasharray (if (odd? k) "5 5" "2 10")}])
                     (range 10 100 10))]

       ]]]))

(rum/defc curves < rum/reactive rum/static (rum/local [] ::data)
  [cum-data]
  (let [margin {:top 10 :right 10 :bottom 0 :left 0}
        padding {:top 20 :right 0 :bottom 60 :left 80}
        outer {:width 400 :height 400}]
    (println "raw-data" cum-data)
    [:div (curves-container (space outer margin padding [0 10] 5 [0 100] 5) cum-data)]))

(defn benefit [data tk]
  (tk (nth data 10)))

(defn some-benefit? [data treatment-key] (pos? (benefit data treatment-key)))

(rum/defc legend [data]
  [:div {:width "100%"}
   [:div {:style {:border-top     (str "4px dashed " dashed-stroke)
                  :width          "50px"
                  :display        "inline-block"
                  :margin-top     "15px"
                  :vertical-align "top"}}]
   [:div {:style {:display     "inline-block"
                  :margin-left "10px"
                  :width       "calc(100% - 60px)"}} [:p " Survival of these men if they were free of cancer"]]
   (when (some-benefit? data :primary-rx)
     [:p (dead-icon (fill 2)) " Additional benefit of radical treatment"])
   [:p (dead-icon (fill 3)) " Conservative"]])




(defn extract-data [results]
  "extract plot data from the model run"
  (let [years (range 0 11)
        one-sum #(- 1 (+ %1 %2))
        radical-survival (map one-sum
                              (get-in results [:radical :pred-PC-cum])
                              (get-in results [:radical :pred-NPC-cum]) years)
        conservative-survival (map one-sum
                                   (get-in results [:conservative :pred-PC-cum])
                                   (get-in results [:conservative :pred-NPC-cum]) years)]
    [

     (map #(* 100 %) conservative-survival)
     (map #(* 100 %) radical-survival)
     (map #(* 100 %) (get-in results [:conservative :NPC-survival])) ; dotted orange
     ]
    ))



(rum/defcs results-in-curves < rum/static rum/reactive sizing-mixin [state]
  (let [width (rum/react (:width state))
        side-by-side (> width 600)
        treatment-keys []

        data (extract-data (rum/react results-cursor))

        cum-data (format-year-data data)]

    [:div {:style {:position "relative"}}

     [:p {:style {:margin-top "15px"}}
      "This graph shows the percentage of men surviving up to 10 years. These results are based on the inputs and treatments you selected"]


     [:div {:style {:width   (if side-by-side "70%" "100%")
                    :display "inline-block"}}
      [:div {:style {:padding "15px 40px 0px 0px"}} (curves cum-data)]]
     [:div {:style {:padding-top    "30px"
                    :vertical-align "top"
                    :width          (if side-by-side "30%" "100%")
                    :display        "inline-block"}}
      ; :todo curves legend
      ;(legend data)
      ]

     ]))

(comment

  (lookup {:model      "v2.1"
           :treatments #{:chemo :horm :tra}
           :result     {:bcSpecSur 0.4495268506028409, :cumOverallSurOL 0.41329243111142366, :cumOverallSurHormo 0.1284467702423861, :cumOverallSurChemo 0, :cumOverallSurCandH 0.1284467702423861, :cumOverallSurCHT 0.23040898151056183}
           :key        :tra
           :horm-yes   true
           :tra-yes    true
           })


  (stacked-yearly-values {:model      "v2.1"
                          :treatments (map strip-root [:surgery :horm :chemo :tra])
                          :results    @results-cursor
                          :tra-yes    true
                          :horm-yes   true} 5)

  )