(ns predict-prostate.results.sidefx

  (:require [rum.core :as rum]
            [predict-prostate.components.helpful-form-groups :refer [form-entry]]
            [predict-prostate.components.button :refer [small-help-button]]
            [predict-prostate.state.config :refer [input-groups get-input-default]]
            [predict-prostate.state.run-time :refer [input-cursor input-change
                                                     mockup-change mockup-cursor
                                                     help-key-change]]

    ;[predict-prostate.state.run-time :refer [unknown input-cursor input-change help-key-change settings-change]]

            [predict-prostate.state.run-time :refer [rtdb input-cursor input-widget input-label results-cursor]]
            [predict-prostate.components.button :refer [year-picker]]
            [pubsub.feeds :refer [publish]]
            ))

(rum/defc progress [percent]
  [:.progress {:style {:background-color "#94d3f0"}}
   [:.progress-bar {:role          "progress-bar"
                    :aria-valuenow percent
                    :aria-valuemin 0
                    :aria-valuemax 100
                    :style         {:width            percent
                                    :background-color "#bc3d95"}}
    [:span.sr-only (str percent) "% Complete"]]])

(rum/defc help [help-id]
  [:.pull-right (small-help-button {:help-id help-id})])

(rum/defc sidefx-table []

  [:.table-responsive {:key   1
                       :style {:margin-top "15px"
                               :font-size  "1.2em"}}
   [:table.table.table-hover.table-bordered {:style {:padding 0 :margin 0 :font-size "16px"}}
    [:thead
     [:tr.info
      [:th "Side effect"]
      [:th "Conservative " [:br] "Management" [:br] "(CM)" [:.pull-right (help "side-effects-am")]]
      [:th "Radical " [:br] "Prostatectomy" [:br] "(RP)" (help "side-effects-rp")]
      [:th "Radiotherapy" [:br] "(RT)" (help "side-effects-rt")]
      ]]
    [:tbody
     [:tr
      [:td]
      [:td {:col-span 3} [:strong "Proportion affected after 3 years"]]]
     [:tr
      [:td [:strong "Erectile dysfunction"] [:br] "Erections insufficient for intercourse\n"]
      [:td "27%"]
      [:td
       [:button.btn-link {:on-click #(publish help-key-change "nerve-sparing")} "56% ‡" ]
       [:br]
       [:button.btn-link {:on-click #(publish help-key-change "non-nerve-sparing")} " 66% *"]]
      [:td "39%"]]
     [:tr
      [:td [:strong "Incontinence"] [:br] "Wear one or more pads per day in the last 4 weeks."]
      [:td "0.4%"]
      [:td "19.6%"]
      [:td "3.0%"]]
     [:tr
      [:td [:strong "Bowel issues"] [:br] "Bloody stools about half the time or more frequently"]
      [:td "1.6%"]
      [:td "1.2%"]
      [:td "7.4%"]]


     ]]])

#_(rum/defc sidefx-table1 []

  [:.table-responsive {:key   1
                       :style {:margin-top "15px"
                               :font-size  "1.2em"}}
   [:table.table.table-hover.table-bordered {:style {:padding 0 :margin 0 :font-size "16px"}}
    [:thead
     [:tr.info
      [:th "Incontinence"]
      [:th "Active " [:br] "Monitoring" [:br] "(AM)" [:.pull-right (help "side-effects-am")]]
      [:th "Radical " [:br] "Prostatectomy" [:br] "(RP)" (help "side-effects-rp")]
      [:th "Radiotherapy" [:br] "(RT)" (help "side-effects-rt")]
      ]]
    [:tbody
     [:tr
      [:td {:col-span 4} "Use of 1 or more pads per day in the last 4 weeks"]]
     [:tr
      [:td [:strong "1 year"]]
      [:td "4%"]
      [:td "26%"]
      [:td "4%"]]
     [:tr
      [:td [:strong "5 years"]]
      [:td "7%"]
      [:td "17%"]
      [:td "3%"]]

     ]]])

#_(rum/defc sidefx-table2 []

  [:.table-responsive {:key   2
                       :style {:margin-top "15px"
                               :font-size  "1.2em"}}
   [:table.table.table-hover.table-bordered {:style {:padding 0 :margin 0 :font-size "16px"}}
    [:thead
     [:tr.info
      [:th "Erections"]
      [:th "Active " [:br] "Monitoring" [:br] "(AM)" [:.pull-right (help "side-effects-am")]]
      [:th "Radical " [:br] "Prostatectomy" [:br] "(RP)" (help "side-effects-rp")]
      [:th "Radiotherapy" [:br] "(RT)" (help "side-effects-rt")]
      ]]
    [:tbody
     [:tr
      [:td {:col-span 4} "Erections firm enough for intercourse"]
      ;[:td ""]
      ;[:td ""]
      ;[:td ""]
      ]
     [:tr
      [:td [:strong "1 year"]]
      [:td "49%"]
      [:td "15%"]
      [:td "38%"]]
     [:tr
      [:td [:strong "5 years"]]
      [:td "35%"]
      [:td "20%"]
      [:td "27%"]]

     ]]])

#_(rum/defc sidefx-table3 []

  [:.table-responsive {:key   3
                       :style {:margin-top "15px"
                               :font-size  "1.2em"}}
   [:table.table.table-hover.table-bordered {:style {:padding 0 :margin 0 :font-size "16px"}}
    [:thead
     [:tr.info
      [:th "Bowel habits"]
      [:th "Active" [:br] "Monitoring" [:br] "(AM)" [:.pull-right (help "side-effects-am")]]
      [:th "Radical " [:br] "Prostatectomy" [:br] "(RP)" (help "side-effects-rp")]
      [:th "Radiotherapy" [:br] "(RT)" (help "side-effects-rt")]
      ]]
    [:tbody
     [:tr
      [:td {:col-span 4} "Bloody stools about half the time or more frequently"]]
     [:tr
      [:td [:strong "1 year"]]
      [:td "1.4%"]
      [:td "0.6%"]
      [:td "3.9%"]]
     [:tr
      [:td [:strong "5 years"]]
      [:td "2.2%"]
      [:td "0.9%"]
      [:td "8%"]]

     ]]])



(rum/defc results-in-sidefx < rum/static []
  [:div {:style {:margin-top "15px"}}
   [:div
    [:.row {:style {:margin-top " 20px "}}
     [:.col-sm-12
      #_[:p "Data taken from the UK-based Prostate Testing for Cancer and Treatment (ProtecT) trial.
      1643 men completed questionnaires after being randomly assigned at diagnosis to one of the 3 treatments shown."
         [:br] [:br]
         "The full research can be read here: "
         [:a.pull-right {:href  "http://www.nejm.org/doi/full/10.1056/NEJMoa1606221"
                         :style {:text-align "right"}}
          "Patient Reported Outcomes after Monitoring,"
          [:br]
          "Surgery, or Radiotherapy for Prostate Cancer" [:br] "Donovan et al [2016]"]]

      [:p
       [:ul
        [:li "The following estimates assume that function is normal before treatment."]
        [:li "These are not individualised estimates to you, and may vary depending on the treatment centre and other
       factors. Information on outcomes in your local centre may be available from your clinician."]
        [:li "Estimates for erectile dysfunction have been derived from a large American study. The full research can be
       read here: "
         [:a {:href   "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5782813/"
              :target "_blank"}
          "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5782813/"]]
        [:li "Estimates for incontinence and bowel dysfunction have been taken from the UK-based Prostate Testing for
       Cancer and Treatment (ProtecT) trial. The full research can be read here: "
         [:a {:href "https://www.nejm.org/doi/full/10.1056/NEJMoa1606221"
              :target "_blank"}
          "https://www.nejm.org/doi/full/10.1056/NEJMoa1606221"]]
        ]]]
     ]

    [:row
     [:.col-sm-12
      (sidefx-table)

      #_(sidefx-table1)

      #_(sidefx-table2)

      #_(sidefx-table3)
      ]
     #_[:col-sm-12
        [:div [:p [:strong "Links to more info:"]]
         [:ul {:style {:list-style-type "none"}}
          [:li [:p [:a {:href "https://www.macmillan.org.uk/information-and-support/prostate-cancer/early-prostate-cancer/treating/treatment-decisions/understanding-your-diagnosis/treatment-overview.html"}
                    " Macmillan"]]]]]]]]]
  )




