(ns predict-prostate.pages.tool
  (:require [rum.core :as rum]
            [cljs-css-modules.macro :refer-macros [defstyle]]
            [predict-prostate.components.bs3-modal :refer [top-modal settings-modal print-modal editor-modal]]
            [bide.core :as r]
            [graphics.simple-icons :as simple]
            [predict-prostate.router :refer [router]]
            [predict-prostate.content-reader :refer [section all-subsections]]
            [predict-prostate.components.button :refer [settings-button print-button]]
            [predict-prostate.layout.input-panels :refer [inputs-row ;inputs-column
                                                          ]]
            [predict-prostate.layout.treatments-panel :refer [treatments-options]]
            [predict-prostate.results.sidefx :refer [results-in-sidefx sidefx-more-info]]
            [predict-prostate.layout.result-panel :refer [results]]
            [predict-prostate.layout.header :refer [header footer]]
            [predict-prostate.results.util :refer [alison-blue-1 alison-blue-2 alison-blue-3 alison-blue-4 alison-blue-5]]
            [predict-prostate.state.mutations :refer [clear-inputs]]
            [predict-prostate.state.run-time :refer [input-cursor
                                                     media-cursor
                                                     results-cursor
                                                     help-key-change help-key-cursor
                                                     settings-cursor
                                                     hide-warning-change hide-warning-cursor
                                                     route-change
                                                     print-change]]

            [pubsub.feeds :refer [publish]]
            ))

(rum/defc clear-all-button < rum/static [{:keys [on-click] :as props}]
  [:button.btn.navbar-btn.btn-danger.btn-lg {:on-click on-click} [:i.fa.fa-female] " New Patient"])

;;;
;; Main layout
;;;

#_(defstyle treatments-style
    ["div" {:font-size "12px"}]
    [".treatments-header"
     {:background-color "#005fB1 !important"
      :color            "white !important"
      :font-size        "10px !important"}
     ["form" {:border "1px solid red"}]])

(rum/defc titled-panel < rum/static [{:keys [title class body-class]} children]
  [:.panel.panel-default {:class (str "panel-default " body-class)}
   [:div {:class (str "panel-heading " class)}
    [:h3.panel-title title]]
   [:.panel-body children]])

(rum/defc titled-panel* < rum/static [{:keys [title class body-class]} children]
  [:.panel.panel-default {:class (str "panel-default " body-class)}
   [:div {:class (str "panel-heading " class)}
    [:h3.panel-title title]]
   [:.panel-body children]])

#_(rum/defc treatment-caveats []
    [:#side-effect-warning.alert.alert-danger.clearfix {:role  "alert"
                                                        :style {:font-size "18px"
                                                                ;:margin-top "20px"
                                                                }}
     (all-subsections "tool-postamble")])



(rum/defc treatments-with-results < rum/reactive [ttt]
  (let [r (rum/react results-cursor)
        mets (rum/react (input-cursor :metastasis))]

    ; todo: mets
    (if (or (not (seq r)) (nil? r) (= mets :yes))
      [:.row
       [:.col-sm-10.col-sm-offset-1.col-xs-12
        [:div {:style {:background-color alison-blue-1
                       :padding          "10px 10px 3px 10px"
                       :margin-bottom    20}}
         [:div {:style {:color     alison-blue-2
                        :font-size "20px"}}

          [:p {:style {:padding-bottom 0}}
           (simple/icon {:family :fa :style {:font-size 35 :padding-right 8}} "info-circle")

           " " (ttt [:twr/toarwa "Treatment options and results will appear here when you have filled in all the information needed above."])]]]]]
      [:.row
       [:.col-md-12.screen-only
        (results {:ttt ttt :printable (= :print (rum/react media-cursor))})]
       [:.row
        [:.col-md-10.col-md-offset-1
         (results-in-sidefx ttt)
         (sidefx-more-info ttt)]]])))

(rum/defc results-footer < rum/reactive [ttt]
  (when (rum/react results-cursor)
    [:.col-xs-12
     #_[:.row
      [:.col-md-10.col-md-offset-1 (print-button)]]

     [:.row {:style {:background-color alison-blue-1
                     :margin-top       20}}

      [:.col-md-12.text-center {:style {:margin-top 20 :margin-bottom 20}}
       #_[:img {:src "assets/faq-icon.png"}]
       [:img {:src         "assets/faq-icon.png"
              :alt         "faq icon"
              :aria-hidden true}]
       ;(simple/icon {:family :fa :style {:font-size 80 :color alison-blue-2}} "commenting-o")
       [:h3 (ttt [:faqs/q1 "Looking for advice?"])]
       [:button.btn.btn-primary.btn-lg
        {:on-click #(publish route-change [:about {:page "faqs"} nil])}
        (ttt [:rf/stf "See the FAQs"])]
       ]]

     [:button.btn.screen-only {:type        "button"
                               :on-click    #(publish print-change "print")
                               :on-key-down #(when (= "Enter" (.. % -nativeEvent -code))
                                               (publish print-change "print"))
                               :style       {:width                     "auto" 
                                             :display                   "inline-block"
                                             :opacity                   0.5
                                             :position                  "fixed"
                                             :top                       300
                                             :right                     -1
                                             :color                     "#ffffff"
                                             :background-color          "#444466"
                                             :font-size                 16
                                             :padding                   "15px 5px 15px 5px"
                                             :border-top-left-radius    10
                                             :border-bottom-left-radius 10}} (simple/icon {:family :fa} "print") " " (ttt [:print "Print"])]

     ]))


(rum/defc tool < rum/reactive [ttt]
  (let [[_ & preamble] (section ttt "tool-preamble")
        modal-active (or (rum/react settings-cursor) (rum/react help-key-cursor))]
    [:.container-fluid
     [:div {:class-name (str "row" (when modal-active " modal-active"))}
      [:.col-xs-12 {:style {:opacity 1}}
       (header ttt)
       [:#main-content.row {:tab-index -1
                            :style     {:margin-left  -30
                                        :margin-right -30}}
        [:.col-xs-12
         [:div {:style {:position         "relative"
                        :width            "100%"
                        :background-color alison-blue-1
                        }}
          [:div {:style {:position   "absolute"
                         :width      "100%"
                         :top        0
                         :bottom     "20%"
                         :opacity    0.25
                         :background "linear-gradient(rgba(255,255,255,0), #fff)"
                         }}]
          [:.row.screen-only
           [:.col-sm-4.col-sm-offset-2
            [:img.img-responsive {:src         "assets/tool-banner.png"
                                  :alt         "Predict tool banner imagery"
                                  :aria-hidden true
                                  :style       {:margin-left "5%" :zoom 0.7}}]]
           [:.col-sm-6
            [:.row
             [:.col-xs-8 preamble]
             [:.col-xs-4
              [:div {:style {:margin "40px 0 0 0px"}} (settings-button ttt)]]]]]
          [:.row.print-only
           [:.col-sm-10.col-sm-offset-1
            preamble]]
          ]]]

       [:.row.screen-only
        [:.col-md-10.col-md-offset-1
         [:.row {:key 2}
          [:.col-xs-12 {:style {:margin-bottom 20}}
           (inputs-row ttt)]]]]
       [:.row.screen-only
        [:.col-sm-12 {:style {:background-color alison-blue-4}}
         [:.row {:key 3}
          [:.col-md-10.col-md-offset-1 {:key 2}
           (treatments-with-results ttt)

           ]]]]]

      [:.screen-only
       (results-footer ttt)
       (footer)]]
     (top-modal ttt)
     (settings-modal ttt)
     (print-modal ttt)
     (editor-modal)
     ]

    ))

