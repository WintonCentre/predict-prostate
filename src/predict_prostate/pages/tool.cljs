(ns predict-prostate.pages.tool
  (:require [rum.core :as rum]
            [cljs-css-modules.macro :refer-macros [defstyle]]
            [predict-prostate.components.bs3-modal :refer [top-modal settings-modal print-modal]]
            [bide.core :as r]
            [graphics.simple-icons :as simple]
            [predict-prostate.router :refer [router]]
            [predict-prostate.content-reader :refer [section all-subsections]]
            [predict-prostate.components.button :refer [settings-button print-button]]
            [predict-prostate.layout.input-panels :refer [inputs-column]]
            [predict-prostate.layout.treatments-panel :refer [treatments-options]]
            [predict-prostate.layout.result-panel :refer [results]]
            [predict-prostate.layout.header :refer [header footer]]
            [predict-prostate.state.mutations :refer [clear-inputs]]
            [predict-prostate.state.run-time :refer [results-cursor
                                                     help-key-change help-key-cursor
                                                     settings-cursor
                                                     hide-warning-change hide-warning-cursor]]
            [pubsub.feeds :refer [publish]]
            ))

(rum/defc clear-all-button < rum/static [{:keys [on-click] :as props}]
  [:button.btn.navbar-btn.btn-danger.btn-lg {:on-click on-click} [:i.fa.fa-female] " New Patient"])

;;;
;; Main layout
;;;

(defstyle treatments-style
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

(rum/defc treatment-caveats []
  [:#side-effect-warning.alert.alert-danger.clearfix {:role  "alert"
                                                      :style {:font-size "18px"
                                                              ;:margin-top "20px"
                                                              }}
   (all-subsections "tool-postamble")])

(rum/defc treatments-with-results < rum/reactive []
  (if (nil? (rum/react results-cursor))
    [:.alert.alert-danger {:role  "alert"
                           :style {:font-size "18px"}} "Treatment options and results will appear here when you have filled in all the information needed."]

    [:.row
     [:.col-md-12
      [:h2 {:style {:margin-top 0 :float "left"}} "Options"]
      (treatments-options)
      (results true)
      (print-button)
      ]]))

#_(rum/defc treatments-with-results < rum/reactive []
  (if (nil? (rum/react results-cursor))
    [:.row
     [:.col-sm-10.col-sm-offset-1.col-xs-12
      [:div {:style {:background-color alison-blue-1
                     :padding          "10px 10px 3px 10px"
                     :margin-bottom    20}}
       [:div {:style {:color     alison-blue-2
                      :font-size "20px"}}

        [:p {:style {:padding-bottom 0}}
         (simple/icon {:family :fa :style {:font-size 35 :padding-right 8}} "info-circle")

         " Treatment options and results will appear here when you have filled in all the information needed above."]]]]]
    [:div
     [:.row
      [:.col-md-6.clearfix
       [:h3 "Treatment Options"]
       (treatments-options)
       [:.hidden-xs.hidden-sm
        (print-button)]
       ]
      [:.col-md-6.screen-only
       (results {:printable (= :print (rum/react media-cursor))})]

      [:.hidden-md.hidden-lg
       (print-button)]]

     ]))



(rum/defc tool < rum/reactive []
  (let [[_ & preamble] (section "tool-preamble")
        modal-active (or (rum/react settings-cursor) (rum/react help-key-cursor))]
    [:.container
     [:div {:class-name (str "row" (when modal-active " modal-active"))}
      [:.col-xs-12 {:style {:opacity 1}}
       (header)
       [:.row {:key 1 :style {:vertical-align "middle"}}
        [:.col-xs-8 {:key 1}
         preamble]
        [:.col-xs-4 {:key 2}
         [:.pull-right {:style {:margin-top "30px"}} (settings-button)]]]
       [:.row {:key 2}
        [:.col-sm-5
         (titled-panel {:title "Inputs"
                        :class (:treatments-header treatments-style)} (inputs-column))

         ]
        [:.col-sm-7 {:key   2
                     :style {:min-height (if (rum/react results-cursor) "0" "calc(100vh - 200px)")}
                     }
         (titled-panel* {:title "Treatment Options and Results"
                         :class (:treatments-header treatments-style)}
                        [:div (treatments-with-results)]
                        )
         ]
        ]
       [:.row {:key 3}
        [:.col-xs-12
         (when (rum/react results-cursor) (treatment-caveats))]]]

      (footer)]
     (top-modal)
     (settings-modal)
     (print-modal)
     ]

    ))

