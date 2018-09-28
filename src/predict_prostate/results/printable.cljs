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
            [predict-prostate.results.icons :refer [results-in-icons]]
            ))

(defn avoid-break [& content]
  (reduce conj [:div {:style {:break-inside "avoid"}}] content))


(defn break-before [& content]
  (reduce conj [:div {:style {:break-inside "avoid"}}] content))


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
       [:td (input-label :post-meno)]
       [:td ({:post "Yes" :pre "No" :unknown "Unknown"} (rum/react (input-cursor :post-meno)))]]
      [:tr
       [:td (input-label :er-status)]
       [:td ({:yes "Positive" :no "Negative"} (rum/react (input-cursor :er-status)))]]
      [:tr
       [:td (input-label :her2-status)]
       [:td ({:yes "Positive" :no "Negative" :unknown "Unknown"} (rum/react (input-cursor :her2-status)))]]
      [:tr
       [:td (input-label :ki67-status)]
       [:td ({:yes "Positive" :no "Negative" :unknown "Unknown"} (rum/react (input-cursor :ki67-status)))]]
      [:tr
       [:td (input-label :size)]
       [:td (rum/react (input-cursor :size))]]
      [:tr
       [:td (input-label :grade)]
       [:td (-> (rum/react (input-cursor :grade)) name last)]]
      [:tr
       [:td (input-label :mode)]
       [:td ({:symptomatic "Symptoms" :screen "Screening" :unknown "Unknown"} (rum/react (input-cursor :mode)))]]
      [:tr
       [:td (input-label :nodes)]
       [:td (rum/react (input-cursor :nodes))]]
      (when-not (= :disabled (rum/react (input-cursor :micromets)))
        [:tr
         [:td (input-label :micromets)]
         [:td (capitalize (name (rum/react (input-cursor :micromets))))]])]]]])

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
      [:h2 "Inputs"]
      #_(inputs-in-print))

    (avoid-break
      [:h2 "Results"]
      [:p {:style {:margin-top "15px"}} "Based on the information you have provided, these results are for women who have
    already had surgery."]
      [:h3 "Survival table - " (rum/react (year-selected)) " years after surgery."]
      [:div {:style {:max-width "60%" :margin-left "20%"}}
       #_(results-in-table {:printable true})])

    (avoid-break
      [:h3 "Survival curve"]
      [:p "This graph shows the percentage of women surviving up to " (rum/react (input-cursor :ten-fifteen)) " years."]
      [:div {:style {:max-width "100%" :margin-left "0%"}}
       #_(results-in-curves {:printable true :width 600})])

    (avoid-break
      [:h3 "Overall survival"]
      [:p "This chart shows the percentage of women surviving " (rum/react (year-selected)) " years after surgery."]
      #_(results-in-charts {:printable true}))

    (avoid-break
      [:div.clearfix]
      [:h3 "In Summary"]
      #_(results-in-text {:printable true}))

    (avoid-break
      [:h3 (rum/react (year-selected)) " year outcomes for 100 women"]
      #_(results-in-icons {:printable true}))
    (avoid-break
      #_(treatments-in-print))

    (footer)]])

