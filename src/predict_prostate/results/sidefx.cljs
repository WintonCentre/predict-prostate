(ns predict-prostate.results.sidefx

  (:require [rum.core :as rum]
            [predict-prostate.results.util :refer [alison-blue-1 conservative-fill]]
            [predict-prostate.components.primitives :refer [blob blob-10 mixed-10]]
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

#_(rum/defc sidefx-table []
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
  {:conservative  "#2222AA"                                 ;conservative-fill #_"#0000AA"
   :radical       "#3DAFEF"
   :radical-harms "#660044"                                          ;"#448800" "#880088"
   :radiotherapy  "#CC5CA4"})

(rum/defc sidefx-header
  []
  [:.col-xs-12 {:style {:margin-bottom 15}}
   [:.row {:style {:background-color alison-blue-1 #_"#D9EDF7" :border-radius 3}}
    [:h4 {:style {:margin-left 15}} "Potentially permanent harms of"]
    [:.col-sm-6
     [:div {:style {:font-size 16 :margin-bottom 10}} (blob {:key "b1" :fill (:conservative treatment-fills) :r 7}) " Conservative management"]
     [:div {:style {:font-size 16 :margin-bottom 10}} (blob {:key "b2" :fill (:radical-harms treatment-fills) :r 7}) " Radical prostatectomy"]
     [:div {:style {:font-size 16}} (blob {:key "b3" :fill (:radiotherapy treatment-fills) :r 7}) " Radical Radiotherapy"]]
    [:.col-sm-6
     [:p {:style {:font-size 14}} "The following estimates assume that the function is normal before treatment.
    The estimates are not individualised to you or your local treatment centre.
    Your local team may have data specific to your centre which you can ask about."]
     ]]]
  )

(defn chunker
  "divide n into chunks, returning number of full tens, remaining units, and empty tens after colouring p items"
  [n chunk-size p]
  (if (<= p n)
    {:tens       (quot p chunk-size)
     :units      (mod p chunk-size)
     :tens-empty (quot (- n p) chunk-size)}
    (js/alert "invalid (chunk " n p chunk-size ")")))

(defn fifty-1 [p] (chunker 50 10 (if (> p 50) 50 p)))
(defn fifty-2 [p] (chunker 50 10 (if (> p 50) (- p 50) 0)))

(rum/defc sidefx-bar
  [{:keys [fewer percent fill tallies?]}]
  (let [f1 (fifty-1 percent)
        f2 (fifty-2 percent)
        hh (chunker 100 10 percent)
        r 4]
    [:.row
     [:.col-xs-1 {:key 1 :style {:font-size "120%" :font-weight "bold" :display "inline-block"}}
      [:span {:style {:width "100%" :text-align "right"}}] (if fewer "Less than ") percent "% "]
     (if tallies?
       [:.col-xs-11 {:style {:margin-top 3}}
        [:div {:key 1 :style {:width 220 :display "inline-block"}}
         (map (fn [n] [:span {:key (str "t-" n)} (blob-10 {:fill fill :r r :tally? true})]) (range (:tens f1)))
         (when (pos? (:units f1)) (mixed-10 {:fill fill :r r :x (:units f1) :tally? true}))
         (map (fn [n] [:span {:key (str "0-" n)} (blob-10 {:fill (if tallies? "#BBBBBB" "white") :r r :tally? true})]) (range (:tens-empty f1)))]
        [:div {:key 2 :style {:width 220 :display "inline-block"}}
         (map (fn [n] [:span {:key (str "t-" n)} (blob-10 {:fill fill :r r :tally? true})]) (range (:tens f2)))
         (when (pos? (:units f2)) (mixed-10 {:fill fill :r r :x (:units f2) :tally? true}))
         (map (fn [n] [:span {:key (str "0-" n)} (blob-10 {:fill (if tallies? "#BBBBBB" "white") :r r :tally? true})]) (range (:tens-empty f2)))]
        ]
       [:.col-xs-12
        (map (fn [n] [:span {:key (str "t-" n)} (blob-10 {:fill fill :r r})]) (range (:tens hh)))
        (when (pos? (:units hh)) (mixed-10 {:fill fill :r r :x (:units hh)}))
        (map (fn [n] [:span {:key (str "0-" n)} (blob-10 {:fill "white" :r r})]) (range (:tens-empty hh)))])
     ]))

(rum/defc fewer-helper
  ([prefix]
   (fewer-helper prefix ""))
  ([prefix n]
   [:span prefix
    [:b "fewer than " (if n [:span n " "] "")]]))

(rum/defc sidefx-linear
  [{:keys [treatment prefix n fewer tallies?]}]
  (let [quantity [:span (Math.round n) " in 100 "]]
    [:div
     [:span prefix (if fewer [:b quantity] quantity)]
     [:span "men have this issue after 3 years."]
     (sidefx-bar {:fewer fewer :percent n :fill (treatment treatment-fills) :tallies? tallies?})
     [:br]
     ]))


(rum/defc sidefx-content
  [{:keys [title sub-title source]} & content]
  [:div {:style {:padding "0 15px 0 15px" :font-size 16}}
   [:h4 title]
   [:h5 sub-title]
   (map-indexed #(rum/with-key %2 %1) content)
   (when source [:.alert.alert-info {:style {:font-size 12}} (source)])]
  #_(into [] (conj [:div {:style {:padding "0 15px 0 15px" :font-size 16}}
                    [:h4 title]
                    [:h5 sub-title]]
                   (map-indexed #(rum/with-key %2 %1) content)))
  )

(rum/defc erectile-source []
  [:span
   "Estimates for erectile dysfunction have been derived from a large American study. The full research can be
        read here: "
   [:a {:href   "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5782813/"
        :target "_blank"}
    "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5782813/"]])

(rum/defc incontinence-source []
  [:span
   "Estimates for incontinence dysfunction have been taken from the UK-based Prostate Testing for
       Cancer and Treatment (ProtecT) trial. The full research can be read here: "
   [:a {:href   "https://www.nejm.org/doi/full/10.1056/NEJMoa1606221"
        :target "_blank"}
    "https://www.nejm.org/doi/full/10.1056/NEJMoa1606221"]])

(rum/defc bowel-source []
  [:span {:font-size 12}
   "Estimates for bowel dysfunction have been taken from the UK-based Prostate Testing for
       Cancer and Treatment (ProtecT) trial. The full research can be read here: "
   [:a {:href   "https://www.nejm.org/doi/full/10.1056/NEJMoa1606221"
        :target "_blank"}
    "https://www.nejm.org/doi/full/10.1056/NEJMoa1606221"]])

(rum/defc sidefx-discrete
  [tallies?]
  [:div {:style {:border "1px solid #CCCCCC" :border-radius 3 :font-size 16}}
   (sidefx-header)
   (sidefx-content {:title  "Erectile dysfunction" :sub-title "Defined as: 'Erections insufficient for intercourse' "
                    :source erectile-source}

                   (sidefx-linear {:treatment :conservative
                                   :prefix    [:span "With " [:b {:style {:color (:conservative treatment-fills)}} "conservative management"] ", about "]
                                   :n         27
                                   :tallies?  tallies?})
                   (sidefx-linear {:treatment :radical-harms
                                   :prefix    [:span "With " [:b {:style {:color (:radical-harms treatment-fills)}} "nerve-sparing radical prostatectomy"] ", about "]
                                   :n         56
                                   :tallies?  tallies?})
                   (sidefx-linear {:treatment :radical-harms
                                   :prefix    [:span "With " [:b {:style {:color (:radical-harms treatment-fills)}} "non-nerve-sparing radical prostatectomy"] ", about "]
                                   :n         66
                                   :tallies?  tallies?})
                   (sidefx-linear {:treatment :radiotherapy
                                   :prefix    [:span "With " [:b {:style {:color (:radiotherapy treatment-fills)}} "radiotherapy"] ", about "]
                                   :n         39
                                   :tallies?  tallies?}))

   (sidefx-content {:title  "Incontinence" :sub-title "Defined as: 'Wore one or more pads in the last 4 weeks' "
                    :source incontinence-source}
                   (sidefx-linear {:treatment :conservative
                                   :fewer     true
                                   :prefix    (fewer-helper [:span "With " [:b {:style {:color (:conservative treatment-fills)}} "conservative management"] ", "])
                                   :n         1
                                   :tallies?  tallies?})
                   (sidefx-linear {:treatment :radical-harms
                                   :prefix    [:span "With " [:b {:style {:color (:radical-harms treatment-fills)}} "radical prostatectomy"] ", about "]
                                   :n         20
                                   :tallies?  tallies?})
                   (sidefx-linear {:treatment :radiotherapy
                                   :prefix    [:span "With " [:b {:style {:color (:radiotherapy treatment-fills)}} "radiotherapy"] ", about "]
                                   :n         3
                                   :tallies?  tallies?}))

   (sidefx-content {:title  "Bowel issues" :sub-title "Defined as: 'Bloody stools about half the time or more frequently' "
                    :source bowel-source}
                   (sidefx-linear {:treatment :conservative
                                   :prefix    (fewer-helper [:span "With " [:b {:style {:color (:conservative treatment-fills)}} "conservative management"] ", "])
                                   :fewer     true
                                   :n         2
                                   :tallies?  tallies?})
                   (sidefx-linear {:treatment :radical-harms
                                   :prefix    (fewer-helper [:span "With " [:b {:style {:color (:radical-harms treatment-fills)}} "radical prostatectomy"] ", "])
                                   :fewer     true
                                   :n         2
                                   :tallies?  tallies?})
                   (sidefx-linear {:treatment :radiotherapy
                                   :prefix    [:span "With " [:b {:style {:color (:radiotherapy treatment-fills)}} "radiotherapy"] ", about "]
                                   :n         7
                                   :tallies?  tallies?}))
   ]
  )

(rum/defc sidefx-more-info
  []

  [:.col-sm-12 {:style {:margin-top 20}} ;.col-sm-12
   [:h3 "More Information"]
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
    ]])

(rum/defc results-in-sidefx []
  [:div {:style {:margin-top "15px"}}
   (sidefx-discrete true)
   ]
  )




