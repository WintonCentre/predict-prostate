(ns predict-prostate.layout.result-panel
  (:require [clojure.string :refer [capitalize]]
            [rum.core :as rum]
            [predict-prostate.state.run-time :refer [active-results-pane active-results-change]]
            [predict-prostate.components.panels :refer [titled-panel]]
            [pubsub.feeds :refer [publish]]
            [interop.jsx :refer [jsx]]
            [predict-prostate.results.table :refer [results-in-table]]
            [predict-prostate.results.curves :refer [results-in-curves]]
            [predict-prostate.results.charts :refer [results-in-charts]]
            [predict-prostate.results.icons :refer [results-in-icons]]
            [predict-prostate.results.text :refer [results-in-text]]
            [predict-prostate.results.sidefx :refer [results-in-sidefx]]
            [predict-prostate.content-reader :refer [all-subsections]]
            ))


(rum/defc result-tab-button < rum/reactive [label]
  [:li {:role     "presentation"
        :class    (if (= (rum/react active-results-pane) label) "active" nil)
        :on-click #(publish active-results-change label)
        :style    {:cursor           "pointer"
                   :border-radius    "3px"
                   :background-color "#def"}
        :key      label}
   [:a {:aria-controls label :role "tab"} (capitalize label)]])

(rum/defc result-tab-pane < rum/reactive [label content]
  [:div {:id    label :role "tabpanel"
         :class (str "tab-pane" (if (= (rum/react active-results-pane) label) "active" nil))
         }
   (when (= (rum/react active-results-pane) label)
     (if content
       (content)
       [:p "No content yet"]))]
  )

(rum/defc result-tabs < rum/static []
  [:ul.nav.nav-pills {:role  "tablist"
                      :style {:font-size "16px"}}
   (map #(rum/with-key (result-tab-button %) %) ["charts"
                                                 "curves"
                                                 "table"
                                                 "texts"
                                                 "icons"
                                                 ])])

(rum/defc result-panes < rum/static []
  [:.tab-content
   (result-tab-pane "charts" results-in-charts)
   (result-tab-pane "curves"  results-in-curves)
   (result-tab-pane "table" results-in-table)
   (result-tab-pane "icons" results-in-icons)
   (result-tab-pane "texts" results-in-text)
   #_(result-tab-pane "Treatment side effects" results-in-sidefx)
   ])

(rum/defc result-panel < rum/reactive []
  [:div#results
   [:h2 {:style {:margin-top 30}} "Results"]
   (result-tabs)
   (result-panes)]
  )

(rum/defc results < rum/reactive [{:keys [container?] :as props}]
  [:div (when container? {:class-name "container"})
   [:.row
    [:.col-md-12
     [:div
      (result-panel)
      [:h2 "Potential Harms"]
      (results-in-sidefx)]]

    ]])