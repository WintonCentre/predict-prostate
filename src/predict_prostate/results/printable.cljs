(ns predict-prostate.results.printable
  (:require [clojure.string :refer [split join capitalize]]
            [rum.core :as rum]
            [predict-prostate.components.helpful-form-groups :refer [form-entry]]
            [predict-prostate.state.config :refer [input-groups get-input-default]]
            [predict-prostate.content-reader :refer [section]]
            [predict-prostate.state.run-time :refer [input-cursor input-change input-widget input-label results-cursor year-selected unknown]]
            [predict-prostate.components.button :refer [year-picker]]
            [predict-prostate.mixins :refer [set-default]]
            [predict-prostate.layout.header :refer [footer]]
            [pubsub.feeds :refer [publish]]

            [predict-prostate.results.table :refer [results-in-table]]
            [predict-prostate.results.curves :refer [results-in-curves]]
            [predict-prostate.results.charts :refer [results-in-charts]]
            [predict-prostate.results.text :refer [results-in-text]]
            [predict-prostate.results.icons :refer [results-in-icons*]]
            [predict-prostate.results.sidefx :refer [results-in-sidefx]]
    #_[cljs-css-modules.macro :refer-macros [defstyle]]
            ))

#_(defstyle styles
            ["p" {:font-size "12px"}]
            )



(defn avoid-break [& content]
  (reduce conj [:div {:style {:break-inside "avoid"}}] content))


(defn break-before [& content]
  (reduce conj [:div {:style {:break-before "always" :page-break-before "always"}}] content))

(defn option-range
  [n]
  (into {} (map (juxt identity str) (range 1 n))))

(rum/defc inputs-in-print < rum/reactive [ttt]
  [:.row
   [:.col-sm-8.col-sm-offset-2
    [:table.table.table-bordered.table-responsive {:style {:font-size "16px"}}
     [:thead
      [:tr
       [:th (ttt [:print/input "Input"])]
       [:th (ttt [:print/value "Value"])]]]
     [:tbody
      [:tr
       [:td (input-label :age)]
       [:td (rum/react (input-cursor :age))]]
      [:tr
       [:td (input-label :psa)]
       [:td (rum/react (input-cursor :psa))]]
      [:tr
       [:td (input-label :t-stage)
        (when (#{4} (rum/react (input-cursor :t-stage)))
          [:div {:style {:color      "#686868"
                         :margin-top 0}}
           [:i.fa.fa-exclamation-triangle {:aria-hidden "true" :style {:color "orange" :padding-right 5}}]
           "The tool is less well tested in higher stages"])]
       [:td ((option-range 5) (rum/react (input-cursor :t-stage)))]]
      [:tr
       [:td (input-label :h-admissions)]
       [:td ({0 "No" 1 "Yes"} (rum/react (input-cursor :h-admissions)))]]
      (when (pos? (rum/react (input-cursor :h-admissions)))
        [:tr
         [:td (input-label :charlson-comorbidity)]
         [:td ({0 "No" 1 "Yes"} (rum/react (input-cursor :charlson-comorbidity)))]])
      [:tr
       [:td (input-label :brca)]
       [:td ({0 "No" 1 "Yes"} (rum/react (input-cursor :brca)))]]
      [:tr
       [:td (input-label :grade-group)
        (when (#{4 5} (rum/react (input-cursor :grade-group)))
          [:div {:style {:color      "#686868"
                         :margin-top 0}}
           [:i.fa.fa-exclamation-triangle {:aria-hidden "true" :style {:color "orange" :padding-right 5}}]
           "The tool is less well tested for higher scores"])]
       [:td ((option-range 6) (rum/react (input-cursor :grade-group)))]]
      [:tr
       [:td (input-label :gleason)
        (when (#{4 5} (rum/react (input-cursor :grade-group)))
          [:div {:style {:color       "#686868"
                         :margin-top  0}}
           [:i.fa.fa-exclamation-triangle {:aria-hidden "true" :style {:color "orange" :padding-right 5}}]
           "The tool is less well tested for higher scores"])]
       [:td ((into {} [[1 "3+3"]
                       [2 "3+4"]
                       [3 "4+3"]
                       [4 "8"]
                       [5 "9 or 10"]]) (rum/react (input-cursor :gleason)))
        ]]
      [:tr
       [:td (input-label :biopsy-cores-taken)]
       [:td (rum/react (input-cursor :biopsy-cores-taken))]]
      [:tr
       [:td (input-label :biopsy-cores-involved)]
       [:td (rum/react (input-cursor :biopsy-cores-involved))]]
      ]]

    ]])

(rum/defc treatment-note [title content]

  [:.col-xs-12
   (avoid-break
     [:h4 title]
     content)]
  )

(rum/defc treatments-in-print < rum/reactive [ttt]
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
         (when horm (treatment-note horm-label (when horm [:div (rest (section ttt "hormone-therapy"))])))
         (when chemo (treatment-note chemo-label (when chemo [:div (rest (section ttt "chemotherapy"))])))
         (when tra (treatment-note tra-label (when tra [:div (rest (section ttt "trastuzumab"))])))
         (when bis (treatment-note bis-label (when bis [:div (rest (section ttt "bisphosphonates"))])))
         ]]])))



(rum/defc results-in-print
  < rum/reactive (set-default :result-year)
  [ttt]

  [:.row
   [:.col-sm-12

    (avoid-break
      [:h4 (ttt [:print/inputs "Inputs"])]
      (inputs-in-print ttt))

    (break-before
      (avoid-break
        [:h4 (ttt [:print/surv-curve "Survival curve"])]
        [:div {:style {:max-width "100%" :margin-left "0%"}}
         (results-in-curves {:printable true})]))

    (break-before
      (avoid-break
        ;[:p {:style {:margin-top "15px"}} "Survival estimates are based on the treatment you have selected."]
        [:h4 (ttt [:print/surv-table-1 "Survival table"]) " - " (rum/react (year-selected)) " " (ttt [:print/surv-table-2 "years after diagnosis."])]
        [:div {:style {:max-width "60%" :margin-left "0%"}}
         (results-in-table ttt)
         ]))

    (break-before
      (avoid-break
        [:h4 (ttt [:print/surv-chart "Survival chart"])]
        (results-in-charts {:printable true})))

    (break-before
      (avoid-break
        [:h4 (ttt [:print/icarray-1 "Icon array showing"]) " " (rum/react (year-selected)) " " (ttt [:print/icarray-2 "year outcomes for 100 men"])]
        (results-in-icons* {:ttt ttt :printable true})
        ))

    (break-before
      [:h4 "In Summary"]
      (results-in-text {:printable true}))

    (break-before
      [:h4 "Potential Harms of treatments"]
      (results-in-sidefx)
      )

    (footer)]])

