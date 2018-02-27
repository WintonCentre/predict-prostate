(ns predict-prostate.results.charts
  (:require [rum.core :as rum]
            [com.rpl.specter :as t :refer [select-one ALL keypath]]
            [predict-prostate.mixins :refer [sizing-mixin]]
            [predict-prostate.results.util :refer [Item lookup ->Item treatment-callout-text
                                           to-percent avoid-decimals min-label-percent
                                           strip-root fill data-fill fill-data-url
                                            callout-data-fill  dashed-stroke]]
            [predict-prostate.results.common :refer [stacked-yearly-values stacked-bar-yearly-props filter-results->stacked-bar-props result-scroll-height]]
            [predict-prostate.state.run-time :refer [model input-cursor input-widget input-label
                                             enabled-treatments results-cursor on-screen-treatments-cursor
                                             ]]
            [predict-prostate.components.primitives :refer [dead-icon]]
            [pubsub.feeds :refer [publish]]
            [clojure.string :refer [join]]
            [cljs-css-modules.macro :refer-macros [defstyle]]
            [cljs.pprint :refer [pp]]
    ;[goog.color :as col :refer [parse lighten rgbToHex hexToRgb]]
            ))

(defn border [fill] (str "1px solid " fill))
(defn arrow [fill] (str "2ex solid " fill))
(def arrow-color [220 150 0])
(def arrow-fill (arrow (str "rgb(" (join "," arrow-color) ")")))

(def z-front 20)
(def z-back 1)

(defstyle stacked-bar-chart-style
          [".chart" {:page-break-before "always"}
           [".chart-wrapper" {:background-color "white" :color "black" :position "relative" :margin-top "0ex"
                              }]
           [".stacked-bar" {:position "absolute" :bottom "8ex" :top "2ex" :left "16%"
                            :right    "16%" :background-color "whitesmoke" :color "black"}

            [".h-tick" {:position "absolute" :width "100%" :height "0%"}
             [".h-label" {:position "absolute" :top 0 :color "#888" :left "-3em" :width "calc(100% + 6em)"}
              [".left" {:position "absolute" :left "-0.5em" :width "3em" :text-align "right" :top "-1ex"}]
              [".right" {:position "absolute" :right "-0.5em" :width "3em" :text-align "left" :top "-1ex"}]]
             [".line" {:border-bottom "1px solid #CCC"}]]

            [".bar" {:position "absolute" :background-color "white" :border "1px solid #CCC" :border-bottom "none"}
             [".bar-label" {:position   "absolute" :color "black" :left "0%" :width "100%"
                            :text-align "center" :font-size "1.2em"
                            }]
             [".bar-item" {:position           "absolute" :width "100%" :left 0
                           :transition         "height 300ms, bottom 300ms, opacity 3000ms" :transition-timing-function "ease-out"
                           :-webkit-transition "height 300ms, bottom 300ms, opacity 300ms" :-webkit-transition-timing-function "ease-out"
                           :-moz-transition    "height 300ms, bottom 300ms, opacity 300ms" :-moz-transition-timing-function "ease-out"}
              [".bar-item-label" {:position "absolute" :width "100%" :text-align "center"
                                  :bottom   "1.37ex" :border "1px none red"}]]]

            [".callout" {:position   "absolute"
                         :transition "height 300ms, bottom 300ms" :transition-timing-function "ease-out"}
             [".box" {:width   "7em" :height "6.65ex" :position "absolute" :bottom "-3.25ex"
                      :padding "0.5ex 1ex 0.3ex 0.5ex" :text-align "right" :color "white" :border-radius "0.5ex"}
              [".total" {:position "absolute" :left "0.6ex" :bottom "1.3ex" :color "white" :font-size "1.2em"}]]
             [".arrow" {:position   "absolute" :bottom "-1ex" :width 0 :height 0
                        :border-top "1ex solid transparent" :border-bottom "1ex solid transparent"}]]
            ]
           ])

(rum/defc <-n%-text->
  "Left or Right callout"
  [{:keys [->? percent text fill]
    :or   {->? true percent 50 text "half" fill "red"}}]

  [:.callout {:style {:left (if ->? 0 nil) :right (if ->? nil 0) :bottom (str percent "%")}}
   [:img.box {:src   (apply fill-data-url arrow-color)      ;(data-fill 4 3)
              :style {:padding    0
                      :text-align "center"
                      :left       (if ->? "-15.5ex" nil)
                      :right      (if ->? nil "-15.5ex")}
              }]
   [:.box {:style {:text-align "center"
                   :left       (if ->? "-15.5ex" nil)
                   :right      (if ->? nil "-15.5ex")
                   }}
    [:span {:style {:font-size "1.2em"}} (str (avoid-decimals (js/Number percent)) "% ")] text
    ]
   [:.arrow {:style {:border-left  (if ->? arrow-fill nil)
                     :border-right (if ->? nil arrow-fill)
                     :left         (if ->? nil 0)
                     :right        (if ->? 0 nil)
                     }}]])


(rum/defc n%-text->
  "Left callout pointing right"
  [props fill]
  (<-n%-text-> (assoc props :->? true :fill fill)))


(rum/defc <-n%-text
  "Right callout pointing left"
  [props fill]
  (<-n%-text-> (assoc props :->? false :fill fill)))


(rum/defc h-tick-line [h]
  [:.h-tick {:style {:position "absolute" :bottom h}}
   [:.line {:key 1}]
   [:.h-label {:key 2}
    [:.left {:key 1} h]
    [:.right {:key 2} h]]])


(rum/defc bar-item-label [{:keys [key height ] :or {key 1 height 0}}]
  [:.bar-item-label {:key key :style {:height "50%" :color "#ffffff"}}
   (str height "%")
   ])

(rum/defcs bar-item < rum/static
                      "A stacked bar item"
  [state {:keys [key bottom height fill background-url label callout-text ?above treatment-key ]
          :or   {key          1 bottom 0 height 0 fill "red" background-url ""
                 callout-text "Label here" ?above true}}]

  [:div {:key key}
   [:img.bar-item {:src   background-url
                   :style {:height height
                           :bottom bottom}}]
   [:.bar-item {:key   1
                ;:tab-index 0
                :style {:height height
                        :bottom bottom}}

    ;; internal value label
    (let [height (avoid-decimals (js/parseFloat height))                  ; (js/parseInt height)
          ]
      (when (>= height min-label-percent)
        (bar-item-label {:key 1 :height height})))

    ]])


(rum/defc bar-label [{:keys [key text top?]}]
  "A label centred above or below the bar"
  [:.bar-label {:key   key
                :style (if top? {:top "-3.5ex"} {:bottom "-3.5ex"})} text])


(rum/defc bar < rum/static
                "Render a bar and its callouts.
                Callouts are currently specific to a treatments view rather than a cause of death view."
  [{:keys [key left right width label-over label-under dataset callout oth]
    :or   {key 1 label-over nil label-under nil dataset []}
    :as   params}]
  ;(println "bar params " params)
  ;(.log js/console "bar dataset" dataset)
  (let [n (count dataset)
        sums (into [] (reductions + (cons 0 (map :value dataset))))
        inline-style (merge {:height "100%"}
                            {:left left :right right :width width})]

    ;(println dataset)

    [:.bar {:key key :style inline-style}
     (bar-label {:key 2 :text label-under :top? false})
     (map-indexed #(rum/with-key
                     (bar-item {:bottom         (str (sums %1) "%")
                                :height         (str (:value %2) "%")
                                :fill           (fill (- n %1 1))
                                :background-url (data-fill (- n %1 1))
                                :treatment-key  (:treatment-key %2)
                                :?above         (nil? right)})
                     (+ %1 4))
                  dataset)

     (when callout (rum/with-key (callout (fill (dec n))) 3))


     [:div {:style {:position       "absolute"
                    :top            (str "calc(" oth "% - 2px)")
                    :bottom         0
                    :left           "-5px"
                    :right          "-5px"
                    :z-index        10
                    :pointer-events "none"
                    :border-top     "4px dashed #FA0"}}]
     ]))


(rum/defc inner-stacked-bar < rum/static
                              "This currently supports a left and a right stacked bar with callouts left and right and top"
  [{:keys [dataset style title subtitle-under]}]

  [:div

   [:.stacked-bar {:key 1 :style style}
    (when title
      [:div
       [:h3 {:key "t2" :style {:position "absolute" :top "-5.5ex" :width "100%" :text-align "center"}}
        title]])


    (map-indexed #(rum/with-key (h-tick-line (str %2 "%")) (str "tick" %1)) (range 0 110 10))

    (let [years (sort (keys dataset))]
      (for [year years
            :let [left? (= year (first years))
                  data (get dataset year)
                  callout (if left? n%-text-> <-n%-text)]]

        (do
          ; remove :br and :oth fields for bar plot
          (let [plot-data (-> data (butlast) (butlast))]
            (rum/with-key
              (bar {:label-under   year
                    :dataset       plot-data
                    ; pass :oth field separately
                    :oth           (-> data (last) (:value))
                    :left          (if left? "30%" nil)
                    :right         (if left? nil "25%")
                    :width         "20%"
                    :total         (reduce + (mapv :value data))
                    :callout       (partial callout {:percent (reduce + (mapv :value plot-data))
                                                     :text    (str "survive " year " yrs")})})
              year)))

        ))

    [:div {:key 3 :style {:position "absolute" :bottom "-5.5ex" :width "100%" :text-align "center" :font-size "16px"}}
     subtitle-under]
    ]])

(comment
  (lookup "2.0" #{:surgery :horm} :horm @results-cursor)
  (into {} (map (partial stacked-bar-yearly-props
                         {:model      "v2.1"
                          :treatments [:horm :chemo :tra]
                          :results    @results-cursor
                          :horm-yes   true
                          :tra-yes    true}) [5 10]))

  ; working test (age 28 er- her2+ ki67+ symptoms 20mm grade2 nodes4 no-mets)
  {5
   [{:treatment-key :horm, :value 0}
    {:treatment-key :chemo, :value 13}
    {:treatment-key :tra, :value 8}],
   10
   [{:treatment-key :horm, :value 0}
    {:treatment-key :chemo, :value 15}
    {:treatment-key :tra, :value 10}]}
  )

(defn get-year-treatment-benefit
  [chart-props treatment-key year]
  (select-one [:dataset (keypath year) ALL #(= (:treatment-key %) treatment-key) :value] chart-props))

(rum/defcs stacked-bar < rum/reactive sizing-mixin
  [state
   {:keys [width h-over-w font-scale chart-style]
    :or   {width      100
           h-over-w   1
           font-scale 1}
    :as   props}]

  (let [treatments (concat [:surgery] (enabled-treatments (rum/react on-screen-treatments-cursor)) [:br :oth])
        results (rum/react results-cursor)
        width-1 (rum/react (:width state))
        side-by-side (> width-1 600)
        ]

    (when-let [chart-props (filter-results->stacked-bar-props {:model      model
                                                               :treatments treatments
                                                               :results    results
                                                               :horm-yes   (rum/react (input-cursor :horm))
                                                               :tra-yes    (rum/react (input-cursor :tra))} [5 10])]

      (let [uncertainty? (= :yes (rum/react (input-cursor :show-uncertainty)))
            benefit (partial get-year-treatment-benefit chart-props)
            some-benefit? #(pos? (+ (benefit % 5) (benefit % 10)))
            add-benefit (fn [treatment-key treatment]
                          (let [bene5 (avoid-decimals (benefit treatment-key 5))
                                bene10 (avoid-decimals (benefit treatment-key 10))]
                            (str " Additional benefit of " treatment " is " bene5 "% at 5 years and " bene10 "% at 10 years")))]
        [:div
         [:p {:style {:margin-top "15px"}}
          "This graph shows the percentage of women surviving at 5 and 10 years. These results are based on the inputs and treatments you selected"]

         [:div {:class-name (:chart chart-style)
                :style      {:width      (str (if side-by-side width 100) "%")
                             :font-size  (* (/ width-1 25) font-scale)
                             :display    "inline-block"
                             :margin-top "3ex"
                             }}

          [:.chart-wrapper {:style {:position    "relative"
                                    :padding-top (* width-1 h-over-w)}}

           (rum/with-key (inner-stacked-bar chart-props) 1)]

          ]
         [:div {:style {:vertical-align "top"
                        :padding-top    (if side-by-side "20px" "20px")
                        :width          (str (- 100 (if side-by-side width 0)) "%")
                        :display        "inline-block"
                        }}
          [:p]
          [:div {:style {:border-top     (str "4px dashed " dashed-stroke)
                         :width          "50px"
                         :display        "inline-block"
                         :margin-top     "15px"
                         :vertical-align "top"}}]
          [:div {:style {:display     "inline-block"
                         :margin-left "10px"
                         :width       "calc(100% - 60px)"}} [:p "Survival of these women if they were free of cancer"]]
          (when (some-benefit? :tra)
            [:p (dead-icon (fill 0)) (add-benefit :tra "trastuzumab")])
          (when (some-benefit? :chemo)
            [:p (dead-icon (fill 1)) (add-benefit :chemo "chemotherapy")])
          (when (some-benefit? :horm)
            [:p (dead-icon (fill 2)) (add-benefit :horm "hormone therapy")])
          [:p (dead-icon (fill 3)) " Surgery only survival is " (avoid-decimals (benefit :surgery 5)) "% at 5 years and " (avoid-decimals (benefit :surgery 10)) "% at 10 years"]
          ]]))))

(comment

  (filter-results->stacked-bar-props {:model      "v2.1"
                                      :treatments '(:surgery :horm :chemo :tra)
                                      :results    @results-cursor
                                      :tra-yes    "yes"
                                      :horm-yes   "yes"} [5])
  )

(rum/defc results-in-charts []
  "Content of the Charts tab, showing treatment options"
  [:div
   (stacked-bar {:width       70
                 :h-over-w    0.65
                 :font-scale  1
                 :chart-style stacked-bar-chart-style})])

