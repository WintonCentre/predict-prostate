(ns predict-prostate.results.text
  (:require [rum.core :as rum]
            [predict-prostate.components.helpful-form-groups :refer [form-entry]]
            [predict-prostate.state.config :refer [input-groups get-input-default]]
            [predict-prostate.components.button :refer [year-picker]]
            [predict-prostate.state.run-time :refer [input-change input-cursor results-cursor]]
            [predict-prostate.results.util :refer [fill avoid-decimals]]
            [graphics.simple-icons :refer [icon]]
            [pubsub.feeds :refer [publish]]))


(def round js/Math.round)

(defn set-default [key]
  "Set the default state of an input after it is mounted. Use this on tab switching if something has to go back to default."
  {:did-mount (fn [state]
                (let [default (get-input-default input-groups key)]
                  (publish (input-change key) default))
                state)})

(defn emph [n]
  (if false
    [:span {:style {:font-size "16px" :font-weight "bold"}} n]
    n))

(rum/defc texts < rum/static [years data radical?]
  (let [cs (round (nth (:conservative-survival data) years))
        rs (round (nth (:radical-survival data) years))
        benefit (- rs cs)]
    [:.row
     [:.col-sm-12 {:style {:margin-top "20px" :margin-left "-8px" :margin-bottom "10px" :display "inline-block"}}
      [:p "Based on the information you have entered:"]
      (year-picker) [:span {:style {:font-size "16px"}} " years after diagnosis"]]

     [:.col-sm-12
      [:p (emph cs) " out of " (emph 100) " men are alive at " years " years with " (emph "conservative treatment") "."]

      (when radical?
        [:p (emph rs) " out of " (emph 100) " men treated (an extra " (emph benefit) ") are alive because of " (emph "radical treatment") "."])]]))


(defn extract-data
  "Different models use different treatment widgets, so we need to use these to react to the correct
  treatments and lookup the appropriate result-data."

  [results]
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
     :dotted-orange         (map #(* 100 %) (get-in results [:conservative :NPC-survival])) ; dotted orange
     }
    ))

(rum/defc results-in-text < rum/reactive (set-default :result-year) []
  (let [year (rum/react (input-cursor :result-year))
        data (extract-data (rum/react results-cursor))
        radical? (= 1 (rum/react (input-cursor :primary-rx)))]

    [:div

     [:.row
      [:.col-sm-12
       (texts year data radical?)]]

     [:.row
      [:.col-sm-12
       [:p "Of the men who would not survive,
       " (emph (- 100 (js/Math.round (nth (:dotted-orange data) year))))
        " would die due to causes not related to prostate cancer."]]]]))