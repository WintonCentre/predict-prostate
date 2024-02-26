(ns predict-prostate.layout.header
  (:require [rum.core :as rum]
            [predict-prostate.state.run-time :refer [input-cursor route-change]]
            [predict-prostate.components.bs3-navbar :refer [hamburger-navbar]]
            [predict-prostate.components.button :refer [radio-button-group start-button]]
            [predict-prostate.content-reader :refer [section]]
            [predict-prostate.results.util :refer [alison-blue-1 alison-blue-2 alison-blue-3 alison-pink]]
            [pubsub.feeds :refer [publish]]))

(def NHS-blue "#005FB4")

(rum/defc header-banner [ttt banner-id]
  (let [[_ & preamble] (section ttt banner-id)]
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


(rum/defc footer-banner [ttt]
  [:.row.screen-only {:style {:background-color alison-blue-1
                              :padding-top      20
                              :padding-bottom   20
                              :margin-top       20
                              :margin-bottom    0}}
   [:.col-md-3.col-md-offset-2.text-center
    [:img {:src "/assets/tool-icon.png" :alt "tool-icon" :aria-hidden true}]
    [:h3 (ttt [:fb/wtupp-title "Want to use Predict Prostate?"])]
    [:p (ttt [:fb/wtupp-text1 "This tool helps to understand how treatments for prostate cancer may improve survival rates after diagnosis."])]
    (start-button ttt)]

   [:.col-md-3..col-md-offset-2.text-center {:style {:margin-top "20px"}}
    [:img {:src "/assets/faq-icon.png" :alt "faq-icon" :aria-hidden true}]
    [:h3 (ttt [:fb/sttt-title "Someone to talk to?"])]
    [:p (ttt [:fb/sttt-text1 "If you are fighting cancer, it’s often easier with support. Here, you can find further information and links."])]
    [:button.btn.btn-danger.btn-lg
     {:on-click #(publish route-change [:about {:page "faqs"} nil])}
     (ttt [:fb/sl "Support Links"]) #_"See the FAQs"]
    ]])


(defn skip-to [content-id]
  [:.row.screen-only
   [:.col-sm-11.col-xs-12.skip
    [:a.pull-right {:tab-index    0
                    :style        {:cursor "pointer"}
                    :on-key-press #(if (= (.. % -nativeEvent -key) "Enter")
                                     (do (.focus (js/$ content-id)) false))
                    :on-click     #(do (.focus (js/$ content-id)) false)} "Skip to main content"]]])



(rum/defc header [ttt]

  ;(banner)
  [:.row
   [:.col-sm-10.col-sm-offset-1.col-xs-12
    #_[:img.img-responsive.pull-right {:src   "/assets/NHS.jpg"
                                     :alt   "NHS logo"
                                     :style {:width         "85px"
                                             :margin-top    "30px"
                                             :margin-bottom "38px"}}]
    [:img.img-responsive {:src   "/assets/prostate-angle-man_1.png"
                          :alt   "Predict prostate logo"
                          :style {:width         "180px"
                                  :margin-top    "13px"
                                  :margin-bottom "6px"
                                  }}]]
   [:.col-xs-12
    (skip-to "#main-content")
    (hamburger-navbar ttt)
    ]])


(rum/defc footer []
  [:div
   [:.row.print-only 
    [:.col-sm-4
     [:img.img-responsive.pull-left {:style {:width 140 :margin-top 15 :border "none"}
                                     :src   "/assets/uni-logo-transparent.png"
                                     :alt   "University of Cambridge Logo"}]]
    [:.col-sm-4
     [:img.img-responsive.pull-right {:style {:width 160 :margin-right 10 :border "none"}
                                      :src   "/assets/wc-logo-transparent.png"
                                      :alt   "Winton Centre Logo"}]]]

   [:.row.screen-only {:style {:clear "both"
                               :color "white"}}

    [:.col.footer
     {:style {:width            "100%"
              :min-height       "200px"
              :background-color "#1F3754"                   ;NHS-blue
              :border-radius    "0px"
              :padding          "30px"}}
     [:.row
      [:.col-sm-10.col-sm-offset-1.col-xs-12
       [:img.img-responsive.pull-right {:src   "/assets/ucs-winton-transparent.png"
                                        :alt   "Winton Centre Logo"
                                        :style {:margin-top 10
                                                :margin-left "auto"
                                                :margin-right "auto"
                                              ;:margin-bottom "3ex"
                                                :max-width  "175px"}}]
       [:img.img-responsive.pull-left {:src   "/assets/u-of-c-neg.png"
                                       :alt   "University of Cambridge Logo"
                                       :style {:margin-top 15
                                              ;:margin-bottom "3ex"
                                               :margin-left "auto"
                                               :margin-right "auto"
                                               :max-width  "175px" #_"90%"}}]
       
       #_[:.row
        #_[:.col-sm-4
           [:img.img-responsive {:src   "/assets/phe-neg.png"
                                 :alt   "Public Health Logo"
                                 :style {:margin-top  10
                                         :margin-left "auto"
                                         :margin-right "auto"
                                         :max-width   "120px" #_"70%"}}]]
        [:.col-sm-4
         [:img.img-responsive.pull-left {:src   "/assets/u-of-c-neg.png"
                                         :alt   "University of Cambridge Logo"
                                         :style {:margin-top 15
                                       ;:margin-bottom "3ex"
                                                 :margin-left "auto"
                                                 :margin-right "auto"
                                                 :max-width  "175px" #_"90%"}}]]
        [:.col-sm-4]
        [:.col-sm-4
         [:img.img-responsive.pull-right {:src   "/assets/ucs-winton-transparent.png"
                                          :alt   "Winton Centre Logo"
                                          :style {:margin-top 10
                                                  :margin-left "auto"
                                                  :margin-right "auto"
                                       ;:margin-bottom "3ex"
                                                  :max-width  "175px"}}]]]]]]]
   [:.row.copy-footer-container
    [:.col-lg-9.col-md-6.col-md-offset-3.col-lg-offset-1.copy-footer
     (str "Copyright Ⓒ " (.getFullYear (js/Date.)) " University of Cambridge. All Rights Reserved | ")
     [:a {:on-click #(publish route-change [:legal {:page "privacy"} nil]) :href "javascript:void(0)"} "Privacy & Data Protection"]
     " | "
     [:a {:on-click #(publish route-change [:legal {:page "disclaimer"} nil]) :href "javascript:void(0)"} "Disclaimer"]]
    [:.col-xs-12.build-version
     ;"Build: v0.0-dev-#000-hash"
     [:img {:style {:width 40 :margin-right 5 :border "none"}
            :alt   "LOT mark"
            :src   "/assets/lot2.png"}]
     "v-0.0-0.00-0-hash"

     [:img {:style {:width 30 :margin-left 10 :margin-right 5 :border "none"}
            :alt   "CE mark"
            :src   "/assets/ce2.png"}]]]])
