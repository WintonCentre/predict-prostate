(ns predict-prostate.pages.tool
  (:require [rum.core :as rum]
            [cljs-css-modules.macro :refer-macros [defstyle]]
            [predict-prostate.components.bs3-modal :refer [top-modal settings-modal]]
            [predict-prostate.components.button :refer [settings-button]]
            [bide.core :as r]
            [graphics.simple-icons :as simple]
            [predict-prostate.router :refer [router]]
            [predict-prostate.content-reader :refer [section all-subsections]]
            [predict-prostate.layout.input-panels :refer [inputs-column]]
    ;[predict-prostate.layout.treatments-panel :refer [treatments-panel treatments-options]]
    ;[predict-prostate.layout.result-panel :refer [results]]
            [predict-prostate.layout.header :refer [header footer]]
            [predict-prostate.state.mutations :refer [clear-inputs]]
            [predict-prostate.state.run-time :refer [results-cursor help-key-change
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
   {:background-color "#B63D97 !important"
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



#_(rum/defc treatments-with-results < rum/reactive []
    (if (nil? (rum/react results-cursor))
      [:.alert.alert-danger {:role  "alert"
                             :style {:font-size "18px"}} "Treatment options and results will appear here when you have filled in all the information needed."]

      [:.row
       [:.col-md-12
        [:h2 {:style {:margin-top 0 :float "left"}} "Options"]
        [:div {:style {:float "right"}} (settings-button)]
        (treatments-options)
        (results true)
        [:#side-effect-warning.alert.alert-danger.clearfix {:role  "alert"
                                                            :style {:font-size  "18px"
                                                                    :margin-top "20px"}}
         (all-subsections "tool-postamble")
         ]]]))

(rum/defc tool []
  (let [[_ & preamble] (section "tool-preamble")]
    [:.container
     [:.row
      [:.col-xs-12
       (header)
       [:.row {:key 1 :style {:vertical-align "middle"}}
        [:.col-xs-8 {:key 1}
         preamble]]
       [:.row {:key 2}
        [:.col-sm-5
         (titled-panel {:title "Inputs"
                        :class (:treatments-header treatments-style)} (inputs-column))

         ]
        [:.col-sm-7 {:key   2
                     :style {:min-height "calc(100vh - 200px)"}}
         (titled-panel* {:title "Treatment Options and Results"
                         :class (:treatments-header treatments-style)}
           [:div "Treatments"]                              ;(treatments-with-results)
           )
         ]]
       (footer)
       (top-modal)
       (settings-modal)]]
     ]))

