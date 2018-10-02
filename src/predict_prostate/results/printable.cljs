(ns predict-prostate.results.printable
  (:require [clojure.string :refer [split join capitalize]]
            [rum.core :as rum]
            [predict-prostate.components.helpful-form-groups :refer [form-entry]]
            [predict-prostate.state.config :refer [input-groups get-input-default]]
            [predict-prostate.content-reader :refer [section]]
            [predict-prostate.state.run-time :refer [input-cursor input-change input-widget input-label results-cursor year-selected]]
            [predict-prostate.components.button :refer [year-picker]]
            [predict-prostate.mixins :refer [set-default]]
            [predict-prostate.layout.header :refer [footer]]
            [pubsub.feeds :refer [publish]]

            [predict-prostate.results.table :refer [results-in-table]]
            [predict-prostate.results.curves :refer [results-in-curves]]
            [predict-prostate.results.charts :refer [results-in-charts]]
            [predict-prostate.results.text :refer [results-in-text]]
            [predict-prostate.results.icons :refer [results-in-icons*]]
            #_[cljs-css-modules.macro :refer-macros [defstyle]]
            ))

#_(defstyle styles
  ["p" {:font-size   "12px"}]
  )



(defn avoid-break [& content]
  (reduce conj [:div {:style {:break-inside "avoid"}}] content))


(defn break-before [& content]
  (reduce conj [:div {:style {:break-inside "avoid"}}] content))

(defn option-range
  [n]
  (into {} (map (juxt identity str) (range 1 n))))

(rum/defc inputs-in-print < rum/reactive []
  [:.row
   [:.col-sm-8.col-sm-offset-2
    [:table.table.table-bordered.table-responsive {:style {:font-size "16px"}}
     [:thead
      [:tr
       [:th "Input"]
       [:th "Value"]]]
     [:tbody
      [:tr
       [:td (input-label :age)]
       [:td (rum/react (input-cursor :age))]]
      [:tr
       [:td (input-label :psa)]
       [:td (rum/react (input-cursor :psa))]]
      [:tr
       [:td (input-label :t-stage)]
       [:td ((option-range 4)  (rum/react (input-cursor :t-stage)))]]
      [:tr
       [:td (input-label :h-admissions)]
       [:td ({0 "No" 1 "Yes"} (rum/react (input-cursor :h-admissions)))]]
      [:tr
       [:td (input-label :grade-group)]
       [:td ((option-range 5) (rum/react (input-cursor :grade-group)))]]
      [:tr
       [:td (input-label :gleason)]
       [:td ((into {} [[1 "3+3"]
                       [2 "3+4"]
                       [3 "4+3"]
                       [4 "8"]
                       [5 "9 or 10"]]) (rum/react (input-cursor :gleason)))]]
      [:tr
       [:td (input-label :biopsy50)]
       [:td ((option-range 5) (rum/react (input-cursor :biopsy50)))]]
      (when (pos? (rum/react (input-cursor :h-admissions)))
        [:tr
             [:td (input-label :charlson-comorbidity)]
             [:td ({0 "No" 1 "Yes"} (rum/react (input-cursor :charlson-comorbidity)))]])
      ]]]])

(rum/defc treatment-note [title content]

  [:.col-xs-12
   (avoid-break
     [:h4 title]
     content)]
  )

(rum/defc treatments-in-print < rum/reactive []
  (let [horm (rum/react (input-cursor :horm))
        horm-label (input-label :horm)
        chemo-label (input-label :chemo)
        tra-label (input-label :tra)
        bis-label (input-label :bis)
        chemo (rum/react (input-cursor :chemo))
        tra (rum/react (input-cursor :tra))
        bis (= :yes (rum/react (input-cursor :bis)))]
    (if-not (or horm chemo tra bis)
      [:h2 "No Treatments Selected after Surgery"]
      [:.row
       [:.col-sm-12
        [:h2 "Treatments after Surgery"]
        [:section.print-bigger
         "Selected treatments after surgery are:"
         (when horm [:li horm-label])
         (when chemo [:li chemo-label " (" ({:3rd "3rd generation" :2nd "2nd generation" :none "None"} (rum/react (input-cursor :chemo))) ")"])
         (when tra [:li tra-label])
         (when bis [:li bis-label])]
        [:.row.print-smaller
         (when horm (treatment-note horm-label (when horm [:div (rest (section "hormone-therapy"))])))
         (when chemo (treatment-note chemo-label (when chemo [:div (rest (section "chemotherapy"))])))
         (when tra (treatment-note tra-label (when tra [:div (rest (section "trastuzumab"))])))
         (when bis (treatment-note bis-label (when bis [:div (rest (section "bisphosphonates"))])))
         ]]])))



(rum/defc results-in-print
          < rum/reactive (set-default :result-year)
          []

  [:.row
   [:.col-sm-12

    (avoid-break
      [:h4 "Inputs"]
      (inputs-in-print))

    (avoid-break
      [:h4 "Survival curve"]
      [:div {:style {:max-width "100%" :margin-left "0%"}}
       (results-in-curves {:printable true})])

    (avoid-break
      ;[:p {:style {:margin-top "15px"}} "Survival estimates are based on the treatment you have selected."]
      [:h4 "Survival table - " (rum/react (year-selected)) " years after diagnosis."]
      [:div {:style {:max-width "60%" :margin-left "0%"}}
       (results-in-table)
       ])

    (avoid-break
      [:h4 "Survival chart"]
      (results-in-charts {:printable true}))

    (avoid-break
      [:h4 (rum/react (year-selected)) " year outcomes for 100 men"]
      (results-in-icons* {:printable true})
      )

    (avoid-break
      ;[:div.clearfix]
      [:h4 "In Summary"]
      (results-in-text {:printable true})
      )

    (avoid-break
      ;(treatments-in-print)
      )

    (footer)]])

