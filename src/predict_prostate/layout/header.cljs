(ns predict-prostate.layout.header
  (:require [rum.core :as rum]
            [bide.core :as r]
            [predict-prostate.router :refer [router]]
            [predict-prostate.state.run-time :refer [input-cursor]]
            [predict-prostate.components.bs3-navbar :refer [hamburger-navbar]]
            [predict-prostate.components.button :refer [radio-button-group]]
    ;[predict-prostate.content-reader :refer [section]]
            )
  )

(def NHS-blue "#005FB4")

(rum/defc header []
  (let [[strap-line & _] "strap-line"                       ;(section "strap-line")
        ]
    [:.container-fluid
     [:.row
      [:.col-xs-6
       [:.row
        [:.col-sm-10
         [:img.img-responsive {:src   "assets/predict-prostate.png"
                               :style {:margin-left "-15px"
                                       :margin-bottom "5px"}}]
         #_[:p.pull-right {:style {:padding-left "00px"
                                 :text-align   "right"
                                 :font-weight  "bold"
                                 :font-size    "16px"
                                 :color        NHS-blue}} strap-line]]]]
      [:.col-xs-3.pull-right
       [:img.img-responsive.pull-right {:src   "assets/nhs.png"
                         :style {:margin-top  "40px"
                                 :margin-right "-15px"}}]
       #_(radio-button-group {:key              :performance
                            :aria-label       "Performance"
                            :aria-describedby "About the tumour help"
                            :style {:text-align "right"
                                    :margin-right "-15px"
                                    :display "inline-block"}
                            :values           [[0 "Printable version"] [1 "Screen version"]]
                            }
                           (input-cursor :performance))]

      ]
     [:.row
      [:.col
       (hamburger-navbar)]]
     ])
  )

(rum/defc footer []


  [:.row-fluid {:style {:clear "both"
                        :color "white"}}
   [:.col [:br ]]
   [:.col.footer
    {:style {:width      "100%"
             :min-height "200px" :background-color NHS-blue
             :border-radius "5px"
             :padding "30px"}}
    [:row
     [:.col-sm-3
      [:img.img-responsive {:src "assets/phe-neg.png"
                            :style {:margin-bottom "4ex"
                                    :max-width "70%"}}]]
     [:.col-sm-3
      [:img.img-responsive {:src "assets/urology.png"
                            :style {:margin-bottom "3ex"
                                    :max-width "90%"}}]]
     [:.col-sm-3
      [:img.img-responsive {:src "assets/ucs-winton-transparent.png"
                            :style {:margin-bottom "3ex"
                                    :max-width "90%"}}]]
     [:.col-sm-3
      [:img.img-responsive {:src   "assets/nhs-neg.png"
                                       :style {:margin-bottom "3ex"
                                               :max-width "50%"}}]]]]])