(ns predict-prostate.results.icons
  (:require [rum.core :as rum]
            [predict-prostate.results.util :refer [fill]]
            [predict-prostate.state.run-time :refer [input-cursor results-cursor input-widget input-change]]
            [predict-prostate.state.config :refer [input-groups get-input-default]]
            [predict-prostate.components.button :refer [horiz-radio-button-group year-picker]]
            [predict-prostate.components.helpful-form-groups :refer [form-entry]]
            [predict-prostate.components.primitives :refer [pic pic-dead open-icon dead-icon]]
            [pubsub.feeds :refer [publish]]
            ))

(def round js/Math.round)

(def br-deaths-fill "#fcc")
(def oth-deaths-fill "#888")

(defn set-default [key]
  "Set the default state of an input after it is mounted. Use this on tab switching if something has to go back to default."
  {:did-mount (fn [state]
                (let [default (get-input-default input-groups key)]
                  (publish (input-change key) default))
                state)})

(defn color-picker [fill-counts cum-counts n]
  {:fill   (cond
             (< n (cum-counts 0)) (get-in fill-counts [0 0])
             (< n (cum-counts 1)) (get-in fill-counts [1 0])
             (< n (cum-counts 2)) (get-in fill-counts [2 0])
             :else (get-in fill-counts [3 0]))
   :filled (< n (cum-counts 1))})

(rum/defc placed-icons
  "Place a square of icons with these colours and counts.
  Fill-counts looks like: [[#0000aa 82] [#00afef 3] [#fcc 3] [#888 12]].
  Counts should sum to 100."
  [fill-counts]
  {:pre [(= 100 (reduce + (mapv second fill-counts)))]}

  ;(println "fill-counts" fill-counts)
  (let [cum-counts (into [] (reductions + (mapv second fill-counts)))]

    [:div
     (for [y (range 10)
           x (range 10)
           :let [n (+ x (* 10 y))
                 style (color-picker fill-counts cum-counts n)
                 shape (if (:filled style) pic pic-dead)]]

       (rum/with-key
         (shape {:fill (:fill style) :x x :y y}) n))]))

(defn add-s [n]
  (if (= n 1) "" "s"))

(defn extract-data
  "Different models use different treatment widgets, so we need to use these to react to the correct
  treatments and lookup the appropriate result-data."

  [results radical?]
  (let [one-sum #(* 100 (- 1 (+ %1 %2)))
        radical-survival (map one-sum
                              (get-in results [:radical :pred-PC-cum])
                              (get-in results [:radical :pred-NPC-cum]))
        conservative-survival (map one-sum
                                   (get-in results [:conservative :pred-PC-cum])
                                   (get-in results [:conservative :pred-NPC-cum]))]
    {:title                 "Overall Survival"
     :subtitle-over         "for men with prostate cancer, 5 and 10 years after diagnosis"
     :subtitle-under        "years after diagnosis"
     :conservative-survival conservative-survival
     :radical-survival      radical-survival
     :radical-benefit       (map #(- %1 %2) radical-survival conservative-survival)
     :dotted-orange         (map #(* 100 (- 1 %)) (get-in results [(if radical? :radical :conservative) :pred-NPC-cum])) ; dotted orange

     ;:dotted-orange         (map #(* 100 %) (get-in results [:conservative :NPC-survival])) ; dotted orange
     }
    ))


#_(rum/defc results-in-icons < rum/reactive (set-default :result-year) []

  (let [radical? (= 1 (rum/react (input-cursor :primary-rx)))
        data (extract-data (rum/react results-cursor) radical?)
        years (rum/react (input-cursor :result-year))
        cs (round (nth (:conservative-survival data) years))
        rs (if radical? (round (nth (:radical-survival data) years)) 0)
        benefit (if radical? (- rs cs) 0)
        pc-deaths (round (- (nth (:dotted-orange data) years) cs benefit))
        npc-deaths (- 100 pc-deaths benefit cs)
        fill-counts [[(fill 2) cs] [(fill 1) benefit] [br-deaths-fill pc-deaths] [oth-deaths-fill npc-deaths]]

        render-year (fn [year data]
                      [:.row.clearfix {:style {:position "relative" :clear "both" :min-height "260px"}}

                       [:.col-xs-6
                        (placed-icons fill-counts)]

                       [:.col-xs-6
                        ; legend
                        [:div {:style {:padding-top "20px" :position "absolute" :left "250px"}}
                         (when (pos? npc-deaths)
                           [:p {:style {:font-size "14px"}} (open-icon oth-deaths-fill) " " npc-deaths " death" (add-s npc-deaths) " due to other causes"])
                         (when (pos? pc-deaths)
                           [:p {:style {:font-size "14px"}} (open-icon br-deaths-fill) " " pc-deaths " prostate cancer related death" (add-s pc-deaths)])
                         (when (pos? benefit)
                           [:p {:style {:font-size "14px"}} (dead-icon (fill 1)) " " benefit " extra survivor" (add-s benefit) " due to radical treatment"])
                         [:p {:style {:font-size "14px"}} (dead-icon (fill 2)) " " cs " survivors with conservative treatment"]
                         [:div {:style {:clear "both"}}]]]])]

    [:div

     [:div {:style {:position "relative"}}

      [:row {:style {:position "relative"}}
       [:.col-xs-12
        [:p {:style {:margin-top "15px"}} "This display shows the outcomes for 100 men. These results are based on the inputs and treatments you selected."]
        #_(form-entry {:key :result-year})


        (year-picker)
        #_(input-widget :result-year)
        [:span {:style {:font-size "16px"}} " years after diagnosis"]

        (if (= 10 (rum/react (input-cursor :result-year)))
          (render-year 10 data)
          (render-year 15 data))]

       ]

      ]
     [:div {:style {:clear "both"}} " "]]
    ))

(rum/defc results-in-icons* < rum/reactive (set-default :result-year)
  [{:keys [printable]}]

  (let [radical? (= 1 (rum/react (input-cursor :primary-rx)))
        data (extract-data (rum/react results-cursor) radical?)
        years (rum/react (input-cursor :result-year))
        cs (round (nth (:conservative-survival data) years))
        rs (if radical? (round (nth (:radical-survival data) years)) 0)
        benefit (if radical? (- rs cs) 0)
        pc-deaths (round (- (nth (:dotted-orange data) years) cs benefit))
        npc-deaths (- 100 pc-deaths benefit cs)
        fill-counts [[(fill 2) cs] [(fill 1) benefit] [br-deaths-fill pc-deaths] [oth-deaths-fill npc-deaths]]

        render-year (fn [year data]
                      [:.row {:style {:clear "both"}}

                       [:.col-sm-6 {:style {:position "relative"
                                            :clear "both"
                                            :height 260 :top -260}}
                        (placed-icons fill-counts)]

                       [:.col-sm-6 {:style {:padding-top "15px"}}
                        ; legend

                        (when (pos? npc-deaths)
                          [:p {:style {:font-size "14px"}} (open-icon oth-deaths-fill) " " npc-deaths " death" (add-s npc-deaths) " due to other causes"])
                        (when (pos? pc-deaths)
                          [:p {:style {:font-size "14px"}} (open-icon br-deaths-fill) " " pc-deaths " prostate cancer related death" (add-s pc-deaths)])
                        (when (pos? benefit)
                          [:p {:style {:font-size "14px"}} (dead-icon (fill 1)) " " benefit " extra survivor" (add-s benefit) " due to radical treatment"])
                        [:p {:style {:font-size "14px"}} (dead-icon (fill 2)) " " cs " survivors with conservative treatment"]
                        [:div {:style {:clear "both"}}]]])]

    [:div
     [:div
      [:.row {:style {:position "relative"}}
       [:.col-xs-12
        {:style {:margin-top "15px" :font-size 16}} "This display shows the outcomes for 100 men. These results are based on the inputs and treatments you selected "
        [:span.screen-only (year-picker)]
        [:span.print-only {:style {:font-size 16}} years]
        " years after diagnosis"

        (render-year years data)
        ]]]
     [:div {:style {:clear "both"}} " "]]))

(comment
  ; bc version for comparison

  (rum/defc render-icons
    [data]
    (let [br-deaths (- 100 (:oth data) (:bis data) (:tra data) (:chemo data) (:radio data) (:horm data) (:surgery data))
          legend-style {:font-size "16px" :margin-bottom 4}]
      [:.row {:style {:clear "both"}}


       [:.col-md-6 {:style {:position       "relative"
                            :height         230
                            :top            -230
                            :pointer-events "none"
                            }} (placed-icons data)]

       ; legend
       [:.col-md-6 {:style {:padding-top "15px"}}
        (when (pos? (:oth data))
          [:p {:style legend-style} (open-icon oth-deaths-fill) " " (:oth data) " death" (add-s (:oth data)) " due to other causes"])
        (when (pos? br-deaths)
          [:p {:style legend-style} (open-icon br-deaths-fill) " " br-deaths " breast cancer related death" (add-s br-deaths)])
        (when (pos? (:bis data))
          [:p {:style legend-style} (filled-icon (hex-palette :bis)) " " (:bis data) " extra survivor" (add-s (:tra data)) " due to bisphosphonates"])
        (when (pos? (:tra data))
          [:p {:style legend-style} (filled-icon (hex-palette :tra)) " " (:tra data) " extra survivor" (add-s (:tra data)) " due to trastuzumab"])
        (when (pos? (:chemo data))
          [:p {:style legend-style} (filled-icon (hex-palette :chemo)) " " (:chemo data) " extra survivor" (add-s (:chemo data)) " due to chemotherapy"])
        (when (pos? (:horm data))
          [:p {:style legend-style} (filled-icon (hex-palette :horm)) " " (:horm data) " extra survivor" (add-s (:horm data)) " due to hormone therapy"])
        [:p {:style legend-style} (filled-icon (hex-palette :surgery)) " " (:surgery data) " survivors with surgery alone"]
        ]

       ]))

  (rum/defc results-in-icons < rum/reactive
    [{:keys [printable]}]
    (let [data (into {}
                     (map (fn [[k v]] [k (js/Math.round v)]))
                     (additional-benefit-kvs {:annual-benefits (:annual-benefits (rum/react results-cursor))
                                              :year            (rum/react (year-selected))
                                              :tks             treatment-keys*}))
          data (assoc data :br (- 100 (:oth data) (:tra data) (:chemo data) (:horm data) (:surgery data)))]

      [:div
       [:.row
        (when-not printable
          [:.col-sm-12 {:style {:margin-top "15px" :font-size 16}}
           common-results-text
           "This display shows the outcomes for 100 men based on the inputs and treatments you have selected "
           (year-picker) " years after surgery."])
        [:.col-sm-12 {:style {:margin-bottom "15px"}}
         (render-icons data)]]])))