(ns predict-prostate.layout.header
  (:require [rum.core :as rum]
            [bide.core :as r]
            [predict-prostate.router :refer [router]]
            [predict-prostate.state.run-time :refer [input-cursor route-change]]
            [predict-prostate.components.bs3-navbar :refer [hamburger-navbar]]
            [predict-prostate.components.button :refer [radio-button-group start-button]]
            [predict-prostate.content-reader :refer [section]]
            [predict-prostate.results.util :refer [alison-blue-1 alison-blue-2 alison-blue-3 alison-pink]]
            [pubsub.feeds :refer [publish]]

            )
  )

(def NHS-blue "#005FB4")

(rum/defc header-banner [banner-id]
  (let [[_ & preamble] (section banner-id)]
    [:.row {:style {:margin-left  -30
                    :margin-right -30}}
     [:.col-xs-12
      [:div {:style {:position         "relative"
                     :width            "100%"
                     :background-color alison-blue-1}}

       [:div {:style {:position   "absolute"
                      :width      "100%"
                      :top        0
                      :bottom     "20%"
                      :opacity    0.25
                      :background "linear-gradient(rgba(255,255,255,0), #fff)"}}]

       [:.row.screen-only
        [:.col-sm-12
         [:div {:style {:background-color alison-blue-1
                        :height           30
                        :width            "100%"}}]]]]]]))


(rum/defc footer-banner []
  [:.row.screen-only {:style {:background-color alison-blue-1
                              :padding-top      20
                              :padding-bottom   20
                              :margin-top       20
                              :margin-bottom    0}}
   [:.col-md-3.col-md-offset-2.text-center
    [:img {:src "assets/tool-icon.png" :alt "tool-icon" :aria-hidden true}]
    [:h3 "Want to use Predict?"]
    [:p "This tool helps to understand how treatments for prostate cancer may improve survival rates after surgery."]
    (start-button)]

   [:.col-md-3..col-md-offset-2.text-center {:style {:margin-top "20px"}}
    [:img {:src "assets/faq-icon.png" :alt "faq-icon" :aria-hidden true}]
    [:h3 "Someone to talk to?"]
    [:p " if you are fighting cancer, it’s often easier with support. Here, you can find further information and links."]
    [:button.btn.btn-danger.btn-lg
     {:on-click #(publish route-change [:about {:page "faqs"} nil])}
     "Support Links" #_"See the FAQs"]
    ]])


(defn skip-to [content-id]
  [:.row.screen-only
   [:.col-sm-11.col-xs-12.skip
    #_[:a#skippy.sr-only-focusable.pull-right {:tab-index 0
                                               :style     {:cursor "pointer"}
                                               :on-click  #(do (.focus (js/$ content-id)) false)} "Skip to main content"]
    [:a.pull-right {:tab-index    1
                    :style        {:cursor "pointer"}
                    :on-key-press #(if (= (.. % -nativeEvent -key) "Enter")
                                     (do (.focus (js/$ content-id)) false))
                    :on-click     #(do (.focus (js/$ content-id)) false)} "Skip to main content"]]])



(rum/defc header []

  ;(banner)
  [:.row
   [:.col-sm-10.col-sm-offset-1.col-xs-12
    [:img.img-responsive.pull-right {:src   "assets/NHS.jpg"
                                     :alt   "NHS logo"
                                     :style {:width         "85px"
                                             :margin-top    "30px"
                                             :margin-bottom "38px"}}]
    [:img.img-responsive {:src   "assets/prostate-angle-man_1.png"
                          :alt   "Predict prostate logo"
                          :style {:width         "180px"
                                  :margin-top    "13px"
                                  :margin-bottom "6px"
                                  }}]]
   [:.col-xs-12
    (skip-to "#main-content")
    (hamburger-navbar)
    ]])


(rum/defc footer []
  [:div
   [:.row.print-only
    [:.col-xs-12
     [:img {:src "assets/print-footer.png"}]]]

   [:.row-fluid.screen-only {:style {:clear "both"
                         :color "white"}}

    [:.col.footer
     {:style {:width            "100%"
              :min-height       "200px"
              :background-color "#1F3754"                   ;NHS-blue
              :border-radius    "0px"
              :padding          "30px"
              }}
     [:row
      [:.col-sm-3                                           ;.col-sm-offset-1
       [:img.img-responsive {:src   "assets/phe-neg.png"
                             :style {:margin-top 10
                                     :margin-left 10
                                     ;:margin-bottom "4ex"
                                     :max-width     "120px" #_"70%"}}]]
      [:.col-sm-4
       [:img.img-responsive {:src   "assets/urology.png"
                             :style {:margin-top 10
                                     ;:margin-bottom "3ex"
                                     :max-width     "175px" #_"90%"}}]]
      [:.col-sm-4
       [:img.img-responsive {:src   "assets/ucs-winton-transparent.png"
                             :style {:margin-top 10
                                     ;:margin-bottom "3ex"
                                     :max-width     "175px" #_"90%"}}]]
      ]]]])