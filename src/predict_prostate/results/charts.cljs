(ns predict-prostate.results.charts
  (:require [rum.core :as rum]
            [com.rpl.specter :as t :refer [select-one ALL keypath]]
            [predict-prostate.mixins :refer [sizing-mixin]]
            [predict-prostate.results.util :refer [to-percent avoid-decimals min-label-percent
                                                   fill data-fill fill-data-url hex-data-url fills-by-style*
                                                   dashed-stroke treatment-fills treatment-fills*]]
            [predict-prostate.state.run-time :refer [model input-cursor input-widget input-label
                                                     results-cursor on-screen-treatments-cursor
                                                     ]]
            [predict-prostate.components.primitives :refer [dead-icon]]
            [predict-prostate.results.curves :refer [legend2]]
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
   [".chart-wrapper" {:background-color "white" :color "black" :position "relative" :margin-top "1ex"
                      :min-height       "300px"}]
   [".stacked-bar" {:position "absolute" :bottom "8ex" :top "2ex" :left "16%"
                    :right    "16%" :background-color "whitesmoke" :color "black"}

    [".h-tick" {:position "absolute" :width "100%" :height "0%"}
     [".h-label" {:position "absolute" :top 0 :color "#888" :left "-3em" :width "calc(100% + 6em)"}
      [".left" {:position "absolute" :left "-0.5em" :width "3em" :text-align "right" :top "-1ex"}]
      [".right" {:position "absolute" :right "-0.5em" :width "3em" :text-align "left" :top "-1ex"}]]
     [".line" {:border-bottom "2px solid #CCC"}]]

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
     [".box" {:width   "7em" :height "10ex" :position "absolute" :bottom "-4.7ex"
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

(rum/defc bar-item-label
  "A white label for a dark background which also prints in white.
  SVG is about the only way to force printers to emit text in white."
  [{:keys [height]}]
  [:.bar-item-label {:style {:width "100%" :height "50%"}}
   [:svg {:height 30 :width "100%"}
    [:text {:x "50%" :y 13 :fill "#000000" :text-anchor "middle"}
     (str height "%")]]
   ])


#_(rum/defc bar-item-label [{:keys [key height] :or {key 1 height 0}}]
  [:.bar-item-label {:key key :style {:height "50%" :color "#ffffff"}}
   (str height "%")
   ])

(rum/defcs bar-item < rum/static
                      "A stacked bar item"
  [state {:keys [key bottom height fill background-url callout-text ?above item-id plot-style radical]
          :or   {key          1 bottom 0 height 0 fill "red" background-url ""
                 callout-text "Label here" ?above true}}]

  [:div {:key key}
   (when (or (= item-id 0) (= plot-style :area1))
     [:img.bar-item {:src   background-url
                     :style {:height height
                             :bottom bottom}}])
   (when (or (= item-id 1) (= plot-style :line1))
     [:img.bar-item {:src   background-url
                     :style {:height height
                             :bottom bottom}}])
   [:.bar-item {:key   1
                ;:tab-index 0
                :style {:height     height
                        :bottom     bottom
                        ;:background-color (when (= key 1) "red")
                        :border-top (if (and (= 1 item-id) radical (#{:line1 :line2} plot-style))
                                      (str "3px solid " (treatment-fills 0))
                                      "none")
                        }}

    ;; internal value label
    (let [height (avoid-decimals (js/parseFloat height))]
      (when (and (= plot-style :area1) (>= height min-label-percent))
        (bar-item-label {:key 1 :height height})
        ))

    ]])


(rum/defc bar-label [{:keys [key text top?]}]
  "A label centred above or below the bar"
  [:.bar-label {:key   key
                :style (if top? {:top "-3.5ex"} {:bottom "-3.5ex"})} text])


(rum/defc bar < rum/static
                "Render a bar and its callouts.
                Callouts are currently specific to a treatments view rather than a cause of death view."
  [{:keys [key left right width label-over label-under dataset callout oth radical plot-style]
    :or   {key 1 label-over nil label-under nil dataset []}
    :as   params}]

  (let [n (count dataset)
        sums (into [] (reductions + (cons 0 (map :value dataset))))
        inline-style (merge {:height "100%"}
                            {:left left :right right :width width})]

    ; render dashed-line rectangle
    [:.bar {:key key :style inline-style}
     [:div {:style {:position       "absolute"
                    :top            (str "calc(" oth "% - 2px)")
                    :bottom         0
                    :left           "-5px"
                    :right          "-5px"
                    :z-index        0
                    :margin         "0 5px"
                    :pointer-events "none"
                    :border-top     "4px dashed #FA0"
                    }}
      [:img.bar-item {:src   (hex-data-url (if radical
                                             (:radical-above (plot-style fills-by-style*))
                                             "#ffffff"))

                      :style {:height "100%"}
                      }]]
     [:div

      (bar-label {:key 2 :text label-under :top? false})

      (comment
        ;dataset looks like this:
        [{:treatment-key :conservative, :value 83.84078058126754} {:treatment-key :radical, :value 7.104726369432939}]
        )

      (map-indexed #(rum/with-key
                      (bar-item {:bottom     (str (sums %1) "%")
                                 :height     (str (:value %2) "%")
                                 :background-url
                                             (hex-data-url ((:treatment-key %2) (plot-style fills-by-style*)))
                                 :?above     (nil? right)
                                 :item-id    %1
                                 :radical    radical
                                 :plot-style plot-style})
                      (+ %1 1))
                   dataset)


      (when callout (rum/with-key (callout (fill (dec n))) 3))]

     ]))


(rum/defc inner-stacked-bar < rum/static rum/reactive
                              "This currently supports a left and a right stacked bar with callouts left and right and top"
  [{:keys [conservative-survival radical-benefit dotted-orange style title subtitle-under radical plot-style]}]

  [:div

   [:.stacked-bar {:key 1 :style style}
    (when title
      [:div
       [:h3 {:key "t2" :style {:position "absolute" :top "-5.5ex" :width "100%" :text-align "center"}}
        title]])


    (map-indexed #(rum/with-key (h-tick-line (str %2 "%")) (str "tick" %1)) (range 0 110 10))

    (let [years [10 15]
          radical? (= 1 (rum/react (input-cursor :primary-rx)))]
      (for [year years
            :let [left? (= year (first years))

                  data (filter #(if (= (:treatment-key %) :radical) radical? true)
                               [{:treatment-key :conservative :value (nth conservative-survival year)}
                                {:treatment-key :radical :value (nth radical-benefit year)}])



                  callout (if left? n%-text-> <-n%-text)]]


        ; remove :br and :oth fields for bar plot
        (let [plot-data data]
          (rum/with-key
            (bar {:label-under year
                  :dataset     data
                  ; pass :oth field separately
                  :oth         (- 100 (nth dotted-orange year))
                  :left        (if left? "30%" nil)
                  :right       (if left? nil "25%")
                  :width       "20%"
                  :total       (reduce + (mapv :value data))
                  :callout     (partial callout {:percent (reduce + (mapv :value plot-data))
                                                 :text    (str "survive at least " year " years")})
                  :radical     radical
                  :plot-style  plot-style})
            year))

        ))

    [:div {:key 3 :style {:position "absolute" :bottom "-5.5ex" :width "100%" :text-align "center" :font-size "16px"}}
     subtitle-under]
    ]])

(defn extract-data
  "Different models use different treatment widgets, so we need to use these to react to the correct
  treatments and lookup the appropriate result-data."

  [title results radical? plot-style]
  (let [one-sum #(* 100 (- 1 (+ %1 %2)))
        radical-survival (map one-sum
                              (get-in results [:radical :pred-PC-cum])
                              (get-in results [:radical :pred-NPC-cum]))
        conservative-survival (map one-sum
                                   (get-in results [:conservative :pred-PC-cum])
                                   (get-in results [:conservative :pred-NPC-cum]))]
    {:title                 title
     :subtitle-over         "for men with prostate cancer, 10 and 15 years after diagnosis"
     :subtitle-under        "years after diagnosis"
     :conservative-survival conservative-survival
     :radical-survival      radical-survival
     :radical-benefit       (map #(- %1 %2) radical-survival conservative-survival)

     ;:dotted-orange         (map #(* 100 (- 1 %)) (get-in results [(if radical? :radical :conservative) :pred-NPC-cum])) ; dotted orange
     :dotted-orange         (map #(* 100 %) (get-in results [(if radical? :radical :conservative) :NPC-survival])) ; dotted orange
     :plot-style            plot-style
     :radical               radical?
     }
    ))

(rum/defcs stacked-bar < rum/reactive sizing-mixin
  [state
   {:keys [width h-over-w font-scale chart-style title printable]
    :or   {width      100
           h-over-w   1
           font-scale 1}
    :as   props}]

  (let [results (rum/react results-cursor)
        plot-style (rum/react (input-cursor :plot-style))
        radical? (= 1 (rum/react (input-cursor :primary-rx)))
        width-1 (rum/react (:width state))
        side-by-side (or printable (> width-1 600))
        ]

    (when-let [chart-props (extract-data title results radical? plot-style)]
      [:div "Hello"]
      (let [bene5 (nth (:radical-benefit chart-props) 5)
            bene10 (nth (:radical-benefit chart-props) 10)
            benefit (str " Additional benefit of radical treatment is " bene5 "% at 5 years and " bene10 "% at 10 years")]
        [:div
         [:p {:style {:margin-top "15px"}}
          "This graph shows the percentage of men surviving at 10 and 15 years. These results are based on the inputs and treatments you selected"]

         [:div {:class-name (:chart chart-style)
                :style      {:width      (str (if side-by-side width 100) "%")
                             :font-size  (* (/ width-1 25) font-scale)
                             :display    "inline-block"
                             :margin-top "3ex"
                             }}

          [:.chart-wrapper {:style {:position    "relative"
                                    :padding-top (* width-1 h-over-w)}}
           (rum/with-key (inner-stacked-bar chart-props) 1)
           ]

          ]

         ; legend
         [:div {:style {:vertical-align "top"
                        :padding-top    (if side-by-side "40px" "20px")
                        :width          (str (- 100 (if side-by-side width 0)) "%")
                        :display        "inline-block"}}
          (legend2 plot-style radical?)]]))))


(rum/defc results-in-charts
  "Content of the Charts tab, showing treatment options"
  [{:keys [title printable] :as m}]
  [:div
   (stacked-bar {:width       70
                 :title       title
                 :h-over-w    0.65
                 :font-scale  1
                 :printable printable
                 :chart-style stacked-bar-chart-style})])

