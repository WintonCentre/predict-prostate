(ns predict-prostate.results.sidefx

  (:require [rum.core :as rum]
            [predict-prostate.components.primitives :refer [blob]]
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
  [:div
   [:.table-responsive {:key   1
                        :style {:margin-top "15px"
                                :font-size  "1.2em"}}
    [:table.table.table-hover.table-bordered {:style {:padding 0 :margin 0 :font-size "16px"}}
     [:thead
      [:tr.info
       [:th "Potential Harm"]
       [:th "Conservative " [:br] "Management" [:br] "(CM)" [:.pull-right.screen-only (help "side-effects-am")]]
       [:th "Radical " [:br] "Prostatectomy" [:br] "(RP)" [:.pull-right.screen-only (help "side-effects-rp")]]
       [:th "Radiotherapy" [:br] "(RT)" [:.pull-right.screen-only (help "side-effects-rt")]]
       ]]
     [:tbody
      [:tr
       [:td]
       [:td {:col-span 3} [:strong "Proportion affected after 3 years"]]]
      [:tr
       [:td [:strong "Erectile dysfunction"] [:br] "Erections insufficient for intercourse\n"]
       [:td "27%"]
       [:td
        [:button.btn-link {:on-click #(publish help-key-change "nerve-sparing")} "56% ‡"]
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
      ]]]
   [:dl.print-only
    [:dt "‡"] [:dd "Nerve-sparing radical prostatectomy"]
    [:dt "*"] [:dd "Non-nerve-sparing radical prostatectomy"]
    ]
   ])

(def treatment-fills
  {:conservative "#1500AA"
   :radical      "#3DAFEF"
   :radiotherapy "#CC5CA4"})

(rum/defc sidefx-header
  []
  [:div {:style {:background-color "#D9EDF7" :padding 10}}
   [:h4 "Potentially permanent harms of"]
   [:div {:style {:font-size 16}} (blob (:conservative treatment-fills) 15) " Conservative management"]
   [:div {:style {:font-size 16}} (blob (:radical treatment-fills) 15) " Radical prostectomy"]
   [:div {:style {:font-size 16}} (blob (:radiotherapy treatment-fills) 15) " Radiotherapy"]]
  )

(defn sidefx-content
  [{:keys [title sub-title]} content]
  (into [] (conj [:div {:style {:padding 15 :font-size 16}}
                    [:h5 title]
                    [:h6 sub-title]
                    ]
                   (content))))

(rum/defc sidefx-linear
  [{:keys [treatment prefix n]}]
  [:div
   [:span prefix n]])

(rum/defc sidefx-discrete
  []
  [:div {:style {:border "1px solid black" :font-size 16}}
   (sidefx-header)
   (sidefx-content
     {:title "Erectile dysfunction" :sub-title "Erections insufficient for intercourse"}
     #(sidefx-linear {:treatment :conservative
                      :prefix    "With conservative management, about "
                      :n         27}))
   (sidefx-content {:title "Incontinence" :sub-title "Wore one or more pads in the last 4 weeks"}
                   #(sidefx-linear {:treatment :conservative
                                    :prefix    "With conservative management, about "
                                    :n         27}))
   (sidefx-content {:title "Bowel issues" :sub-title "Bloody stools about half the time or more frequently"}
                   #(sidefx-linear {:treatment :conservative
                                    :prefix    "With conservative management, about "
                                    :n         27}))
   ])

(rum/defc sidefx-continuous
  []
  [:div {:style {:border "1px solid black" :font-size 16}}
   (sidefx-header)
   (sidefx-content {:title "Erectile dysfunction" :sub-title "Erections insufficient for intercourse"}
                   #(sidefx-linear {:treatment :conservative
                                    :prefix    "With conservative management, about "
                                    :n         27}))
   (sidefx-content {:title "Incontinence" :sub-title "Wore one or more pads in the last 4 weeks"}
                   #(sidefx-linear {:treatment :conservative
                                    :prefix    "With conservative management, about "
                                    :n         27}))
   (sidefx-content {:title "Bowel issues" :sub-title "Bloody stools about half the time or more frequently"}
                   #(sidefx-linear {:treatment :conservative
                                    :prefix    "With conservative management, about "
                                    :n         27}))
   ]
  )



(rum/defc results-in-sidefx < rum/static rum/reactive []
  (let [ph-style (rum/react (input-cursor :ph-style))]
    [:div {:style {:margin-top "15px"}}

     [:.row {:style {:margin-top " 20px "}}
      [:.col-sm-12
       [:ul {:style {:font-size 16}}
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
         [:a {:href   "https://www.nejm.org/doi/full/10.1056/NEJMoa1606221"
              :target "_blank"}
          "https://www.nejm.org/doi/full/10.1056/NEJMoa1606221"]]
        ]]
      ]

     [:row
      [:.col-sm-12
       (condp = ph-style
         :table (sidefx-table)
         :discrete (sidefx-discrete)
         :continuous (sidefx-continuous)
         :else (println "bad ph-style setting"))]

      [:.col-sm-12                                          ; {:style {:margin-top 20}}
       [:h4 "More Information"]
       [:p "The following websites provide excellent advice and information on treatments and their potential harms:"]
       [:h5 "About treatments:"]
       [:ul {:style {:list-style-type "none"}}
        [:li {:key 1}
         [:a {:href "http://www.cancerresearchuk.org/about-cancer/prostate-cancer/treatment" :target "blank"} "Cancer research UK"]]
        [:li {:key 2}
         [:a {:href "https://www.nhs.uk/conditions/prostate-cancer/treatment/" :target "blank"} "NHS"]]]


       [:h5 "About potential harms:"]
       [:ul {:style {:list-style-type "none"}}
        [:li {:key 3}
         [:a {:href "https://www.nhs.uk/conditions/prostate-cancer/treatment/#radical-prostatectomy" :target "blank"} "Radical prostatectomy"]]
        [:li {:key 4}
         [:a {:href "https://www.nhs.uk/conditions/prostate-cancer/treatment/#radiotherapy" :target "blank"} "Radiotherapy"]]
        ]
       [:h5 "Further advice and support:"]
       [:ul {:style {:list-style-type "none"}}
        [:li {:key 1}
         [:a {:href "http://www.macmillan.org.uk/" :target "blank"} "Macmillan"]]
        [:li {:key 2}
         [:a {:href "http://prostatecanceruk.org/" :target "_blank"} "Prostate Cancer UK"]]
        [:li {:key 3}
         [:a {:href "https://www.nhs.uk/pages/home.aspx" :target "_blank"} "NHS Choices"]]
        ]]
      ]])
  )




