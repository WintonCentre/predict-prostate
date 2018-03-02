(ns predict-prostate.results.sidefx

  (:require [rum.core :as rum]
            [predict-prostate.components.helpful-form-groups :refer [form-entry]]
            [predict-prostate.state.config :refer [input-groups get-input-default]]
            [predict-prostate.state.run-time :refer [input-cursor input-change
                                             mockup-change mockup-cursor]]
            #_[predict-prostate.results.common :refer [stacked-yearly-values stacked-bar-yearly-props
                                             filter-results->stacked-bar-props result-scroll-height]]
            [predict-prostate.state.run-time :refer [rtdb input-cursor input-widget input-label results-cursor]]
            [predict-prostate.components.button :refer [year-picker]]
            [predict-prostate.results.util :refer [strip-root avoid-decimals]]

            [pubsub.feeds :refer [publish]]
            ))


(defn set-default [key]
  "Set the default state of an input after it is mounted. Only use this "
  {:did-mount (fn [state]
                (let [default (get-input-default input-groups key)]
                  (publish (input-change key) default))
                state)})

(defn year-selected []
  "return a cursor containing the selected year"
  (input-cursor :result-year))

(defn benefit% [data key & [high]]
  (str (avoid-decimals (key data) high) "%")
  )

(defn benefits% [data & keys]
  (str (avoid-decimals (apply + (map #(% data) keys))) "%"))

(rum/defc sidefx-table < rum/reactive [data]

  ;(println data)

  (let [uncertainty? (= :yes (rum/react (input-cursor :show-uncertainty)))]
    [:.table-responsive {:style {:margin-top "15px"
                                 :font-size  "1.2em"}}
     [:table.table.table-hover {:style {:padding 0 :margin 0 :font-size "16px"}}
      [:thead
       [:tr
        [:th "Adverse effect"]
        [:th "Likelihood"]
        [:th "Severity"]
        ]]
      [:tbody
       [:tr
        [:td "Nausea "]
        [:td "2%"]
        [:td 2]]
       [:tr
        [:td "Joint Pain "]
        [:td "10%"]
        [:td 3]]
       [:tr
        [:td "Inflammation "]
        [:td "10%"]
        [:td 2]]
       ]]]))

(rum/defc progress [percent]
  [:.progress {:style {:background-color "#94d3f0"}}
   [:.progress-bar {:role          "progress-bar"
                    :aria-valuenow percent
                    :aria-valuemin 0
                    :aria-valuemax 100
                    :style         {:width            percent
                                    :background-color "#bc3d95"}}
    [:span.sr-only (str percent) "% Complete"]]])

(rum/defc sidefx-table2 < rum/reactive [data]

  ;(println data)

  (let [uncertainty? (= :yes (rum/react (input-cursor :show-uncertainty)))]
    [:.table-responsive {:style {:margin-top "15px"
                                 :font-size  "1.2em"}}
     [:table.table.table-hover {:style {:padding 0 :margin 0 :font-size "16px"}}
      [:thead
       [:tr
        [:th "Adverse effect"]
        [:th "Likelihood"]
        [:th "Severity"]
        ]]
      [:tbody
       [:tr
        [:td "Nausea "]
        [:td "2%"]
        [:td (progress 20)]]
       [:tr
        [:td "Joint Pain "]
        [:td "10%"]
        [:td (progress 40)]]
       [:tr
        [:td "Inflammation "]
        [:td "10%"]
        [:td (progress 10)]]
       ]]]))

(rum/defc sidefx-table3 < rum/reactive [data]

  ;(println data)

  (let [uncertainty? (= :yes (rum/react (input-cursor :show-uncertainty)))]
    [:.table-responsive {:style {:margin-top "15px"
                                 :font-size  "1.2em"}}
     [:table.table.table-hover {:style {:padding 0 :margin 0 :font-size "16px"}}
      [:thead
       [:tr
        [:th "Adverse effect"]
        [:th "Likelihood"]
        [:th "Severity"]
        [:th "Treatment"]
        [:th "Benefit"]
        ]]
      [:tbody
       [:tr
        [:td {:style {:rowspan 3}} "Nausea "]
        [:td "2% " [:br] "15% " [:br] "5%"]
        [:td "20% " [:br] "20% " [:br] "20%"]
        [:td "2nd chemo" [:br] "Radiotherapy" [:br] "Bisphosphonates"]
        [:td "5%" [:br] "6%" [:br] "3%"]]
       [:tr
        [:td "Joint Pain "]
        [:td "10%"]
        [:td "40%"]
        [:td "Bisphosphonates"]
        [:td "3%"]]
       [:tr
        [:td "Hair loss "]
        [:td "70%"]
        [:td "80%"]
        [:td "2nd chemo"]
        [:td "5%"]
        ]
       [:tr
        [:td "Hot Flushes "]
        [:td "30%"]
        [:td "10%"]
        [:td "Hormone Therapy"]
        [:td "4%"]]
       ]]]))

(rum/defc treatments-dropdown []
  [:span.button-group {:style {:position "relative"}}
   [:button.btn.btn-default.dropdown-toggle
    {:type          "button"
     :data-toggle   "dropdown"
     :aria-haspopup "true"
     :aria-expanded "false"
     :style {:font-size 16
             :padding 0}}
    "Bisphosphonates " [:span.caret]]
   [:ul.dropdown-menu {:style {:margin-top "10px"
                               :cursor "pointer"}}
    [:li [:a "Hormone Therapy"]]
    [:li [:a "Chemotherapy"]]
    [:li [:a "Radiotherapy"]]
    [:li [:a "Trastuzumab"]]
    [:li [:a "Bisphosphonates"]]
    ]])

(rum/defc table-benefit []
  [:span " 6 % "])

;;;
;; Add in adverse effect options on tabs
;;;

(rum/defc mockup-tab-pane < rum/reactive [label content]
  (let [mockup (rum/react mockup-cursor)]
    [:div {:id    label :role "tabpanel"
           :class (str "tab-pane" (if (= mockup label) "active" nil))}

     (when (= mockup label)
       (if content
         (content)
         [:p "No content yet"]))]))

(rum/defc mockup-button < rum/reactive [label]
  [:li {:role     "presentation"
        :class    (if (= (rum/react mockup-cursor) label) "active" nil)
        :on-click #(publish mockup-change label)
        :style    {:cursor "pointer"}
        :key      label}
   [:a {:aria-controls label :role "tab"} label]])

(rum/defc mockup-tabs < rum/static []
  [:ul.nav.nav-tabs {:role  "tablist"
                     :style {:font-size "16px"}}
   (map #(rum/with-key (mockup-button (str "Mockup " %)) %) (range 1 4))])

#_(rum/defc mockup1 [data]
  [:div
   [:.row {:style {:margin-top " 20px "}}
    [:.col-sm-4
     [:p (treatments-dropdown)]]
    [:.col-sm-3
     [:p " Benefit: " (table-benefit)]]
    [:.col-sm-5
     (year-picker) [:span {:style {:font-size "16px"}} " years after surgery"]
     ]]
   [:.row
    [:.col-sm-12
     [:p "This table shows information on adverse effects you may experience for the selected treatment."]

     ]]
   [:row
    [:.col-sm-6
     (sidefx-table data)]
    [:col-sm-6
     [:p {:style {:margin-top "20px"}} "This adverse effect data is based on women of a similar age. It does " [:strong "not"]
      " take account of dosage, or interactions between treatments."]
     [:p "Links to more info:"
      [:ul {:style {:list-style-type "none"}}
       [:li [:a {:href "https://www.macmillan.org.uk/information-and-support/breast-cancer/coping/side-effects-and-symptoms"}
             " Macmillan"]]]]]]])

(rum/defc mockup2 [data]
  [:div
   [:.row {:style {:margin-top " 20px "}}
    [:.col-sm-12
     [:p "The table shows information on the adverse effects you may experience if your treatment includes " (treatments-dropdown)
      ". The data is based on women of a similar age. It does " [:strong "not"] " take account of dosage, or of interactions between treatments."]]
    ]

   [:row
    [:.col-sm-12
     (sidefx-table2 data)]
    [:col-sm-12
     [:p "Bisphosphonates have an additional survival benefit of 2% at 5 years and 5% at 10 years."]
     [:p [:strong "Links to more info:"]
      [:ul {:style {:list-style-type "none"}}
       [:li [:a {:href "https://www.macmillan.org.uk/information-and-support/breast-cancer/coping/side-effects-and-symptoms"}
             " Macmillan"]]]]]]])

#_(rum/defc mockup3 [data]
  [:div
   [:.row {:style {:margin-top " 20px "}}
    [:.col-sm-12
     [:p "The table shows information on the adverse effects you may experience for the available treatments. "
      "The data is based on women of a similar age. It does " [:strong "not"] " take account of dosage, or of interactions between treatments."]
     ]
    ]

   [:row
    [:.col-sm-12
     (sidefx-table3 data)]
    [:col-sm-12
     [:p [:strong "Links to more info:"]
      [:ul {:style {:list-style-type "none"}}
       [:li [:a {:href "https://www.macmillan.org.uk/information-and-support/breast-cancer/coping/side-effects-and-symptoms"}
             " Macmillan"]]]]]]])

(rum/defc mockup-panes < rum/reactive []
  (let [horm-yes (rum/react (input-cursor :horm))
        tra-yes (rum/react (input-cursor :tra))
        data [1]                                            ;:todo add an extract-data for this
        ]
    [:.tab-content
     ;(mockup-tab-pane "Mockup 1" #(mockup1 data))
     (mockup-tab-pane "Mockup 2" #(mockup2 data))
     ;(mockup-tab-pane "Mockup 3" #(mockup3 data))
     ]))

(rum/defc results-in-sidefx < rum/static (set-default :result-year) []
  [:div {:style {:margin-top "15px"}}
   (mockup-tabs)
   (mockup-panes)]
  )




