(ns predict-prostate.results.text
  (:require [rum.core :as rum]
            [predict-prostate.components.helpful-form-groups :refer [form-entry]]
            [predict-prostate.state.config :refer [input-groups get-input-default]]
            [predict-prostate.components.button :refer [year-picker]]
            [predict-prostate.results.common :refer [stacked-yearly-values stacked-bar-yearly-props
                                             filter-results->stacked-bar-props result-scroll-height]]
            [predict-prostate.state.run-time :refer [input-change input-cursor input-widget input-label results-cursor]]
            [predict-prostate.results.util :refer [lookup ->Item treatment-callout-text strip-root fill avoid-decimals]]
            [graphics.simple-icons :refer [icon]]
            [pubsub.feeds :refer [publish]]
            ))



;; todo: move to predict-prostate.results.comon or util
(defn set-default [key]
  "Set the default state of an input after it is mounted. Use this on tab switching if something has to go back to default."
  {:did-mount (fn [state]
                (let [default (get-input-default input-groups key)]
                  (publish (input-change key) default))
                state)})

;; todo: move to predict-prostate.results.comon or util
(defn year-selected []
  "return a cursor containing the selected year"
  (input-cursor :result-year))

(defn benefit [data key]
  (key data))


(defn benefits [data & keys]
  (apply + (map #(% data) keys)))


(defn emph [n]
  (if false
    [:span {:style {:font-size "16px" :font-weight "bold"}} n]
    n))

(comment
  ; later
  (def icons? false)
  (defn woman [] (icon {:family :ionicon} "ion-woman"))
  (defn line [data treatments key]
    [:p [:span {:style {:font-size "14px" :color fill :line-height "0px"}}] (map woman (range (benefits data key)))])
  )

(rum/defc texts < rum/static [years data treatments]
  (let [surg (benefits data :surgery)
        horm (benefits data :horm)
        chemo (benefits data :chemo)
        tra (benefits data :tra)



        list-item (fn [horm chemo tra]
                    (let [sum-scht (Math.round (+ surg horm chemo tra))
                          delta-cht (- sum-scht (Math.round surg))]
                      (when (pos? (+ horm chemo tra))
                        [:li [:p (emph sum-scht) " out of " (emph 100) " women treated (an extra " (emph delta-cht) ") are alive because of "
                              (when (pos? horm) (emph "hormone therapy"))
                              (when (pos? chemo) (emph (str (if (pos? horm) ", and " " ") "chemotherapy")))
                              (when (pos? tra) (emph (str (if (or (pos? horm) (pos? chemo)) ", and ") "trastuzumab"))) "."]])))]
    [:.row
     [:.col-sm-12 {:style {:margin-top "20px" :margin-left "-8px" :margin-bottom "10px" :display "inline-block"}}
      [:p "Based on the information you have entered:"]
      (year-picker) [:span {:style {:font-size "16px"}} " years after surgery"]

      ]

     [:.col-sm-12
      [:p (emph (Math.round surg)) " out of " (emph 100) " women are alive at " years " years with " (emph "surgery only") "."]

      [:ul
       (when (pos? horm)
         (list-item horm 0 0))
       (when (pos? chemo)
         (list-item horm chemo 0))
       (when (pos? tra)
         (list-item horm chemo tra))
       ]


      ]]))


(rum/defc results-in-text < rum/reactive (set-default :result-year) []
  (let [horm-yes (rum/react (input-cursor :horm))
        tra-yes (rum/react (input-cursor :tra))
        year (rum/react (year-selected))
        treatments (map strip-root [:surgery :horm :chemo :tra :br :oth])
        data (into {} (stacked-yearly-values {:model      "v2.1"
                                              :treatments treatments
                                              :results    (rum/react results-cursor)
                                              :tra-yes    tra-yes
                                              :horm-yes   horm-yes} year))]

    [:div

     [:.row
      [:.col-sm-12
       (texts year data treatments)]]

     [:.row
      [:.col-sm-12
       [:p "Of the women who would not survive, " (emph (js/Math.round (:oth data))) " would die due to causes not related to breast cancer."]
       ]]
     ]

    ))