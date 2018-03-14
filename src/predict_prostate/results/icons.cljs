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


(rum/defc results-in-icons < rum/reactive (set-default :result-year) []

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

                       [:.col-xs-12
                        (placed-icons fill-counts)

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

      [:row
       [:.col-xs-12
        [:p {:style {:margin-top "15px"}} "This display shows the outcomes for 100 men. These results are based on the inputs and treatments you selected."]
        #_(form-entry {:key :result-year})


        (year-picker)
        #_(input-widget :result-year)
        [:span {:style {:font-size "16px"}} " years after diagnosis"]

        (if (= 5 (rum/react (input-cursor :result-year)))
          (render-year 5 data)
          (render-year 10 data))]

       ]

      ]
     [:div {:style {:clear "both"}} " "]]
    )

  )
