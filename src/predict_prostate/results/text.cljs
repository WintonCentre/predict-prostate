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

(rum/defc texts < rum/static [years data radical? printable ttt]
  (let [cs (round (nth (:conservative-survival data) years))
        rs (round (nth (:radical-survival data) years))
        benefit (- rs cs)]
    [:.row
     ;;MH - somehow the print-only is not what is shown on the print version.
     [:.print-only
      [:.col-sm-12.print-only {:style {:margin-top 0 :margin-bottom "0px" :display "inline-block" :font-size 12}}
       (ttt [:text/text1 "Based on the information you have entered,"]) " "
       [:p (emph cs) " " (ttt [:text/text2 "out of"]) " " (emph 100) " " (ttt [:text/text3 "men are alive at years with"]) " " (ttt [:text/text4 (emph "initial conservative manage,ent")]) "."]

       (when radical?
         [:p (emph rs) " " (ttt [:text/text5 "out of"]) " " (emph 100) " " (ttt [:text/text6 "men treated (an extra"]) " " (emph benefit) ") " (ttt [:text/text7 "are alive because of"]) " " (ttt [:text/text8 (emph "radical treatment")]) "."])]]
     
     [:.screen-only
      [:.col-sm-12 {:style {:margin-top 15 :margin-bottom "0px" :display "inline-block" :font-size 16}}
       [:span (ttt [:text/text1 "Based on the information you have entered,"]) " " (year-picker ttt) " " (ttt [:text/text9 "years after diagnosis:"])]

       [:p (emph cs) " " (ttt [:text/text10 "out of"]) " " (emph 100) " " (ttt [:text/text11 "men are alive at"]) " " years " " (ttt [:text/text12 "years with"]) " " (ttt [:text/text13 (emph "initial conservative treatment")]) "."]

       (when radical?
         [:p (emph rs) " " (ttt [:text/text14 "out of"]) " " (emph 100) " " (ttt [:text/text15 "men treated (an extra"]) " " (emph benefit) ") " (ttt [:text/text16 "are alive because of"]) " " (ttt [:text/text17 (emph "radical treatment")]) "."])]]]))


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
     :dotted-orange         (map #(* 100 (- 1 %)) (get-in results [(if radical? :radical :conservative) :NPC-survival #_:pred-NPC-cum]))}
    ))

(rum/defc results-in-text < rum/reactive #_(set-default :result-year)
  [{:keys [printable ttt]}]
  (let [year (rum/react (input-cursor :result-year))
        radical? (= 1 (rum/react (input-cursor :primary-rx)))
        data (extract-data (rum/react results-cursor) radical?)
        text1 (ttt [:text/text18 "Of the men who would not survive,"])
        text2 (ttt [:text/text19 "would die due to causes not related to prostate cancer."])
        ]

    [:div
     (texts year data radical? printable ttt)
     [:p.print-only {:style {:font-size 12}} text1 " " (emph (round (nth (:dotted-orange data) year))) " " text2]
     [:p.screen-only {:style {:font-size 16}} text1 " " (emph (round (nth (:dotted-orange data) year))) " " text2]]))