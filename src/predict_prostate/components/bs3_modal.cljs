(ns predict-prostate.components.bs3-modal
  (:require [rum.core :as rum]
            [predict-prostate.content-reader :refer [section]]
            [predict-prostate.state.run-time :refer [help-key-cursor help-key-change settings-change input-widget settings-cursor]]
            [pubsub.feeds :refer [publish]]
            [interop.jsx :refer [jq$ jq$call]]))

(set! *warn-on-infer* true)


(defn hide
  [element-id]
  (jq$call element-id "modal" "hide"))


(rum/defc top-modal < rum/reactive
                      "Note that we are assuming the _single_ modal dialog is mounted on #topModal since we
                      are using jQuery to locate it."
  []
  (let [help-key (rum/react help-key-cursor)
        help (section help-key)
        [help-header & help-content] (if (seq help)
                                       help
                                       ["help header" [:p {:style {:color "red"}} "add content for " help-key]])
        help-text (into [] (cons :div help-content))
        ]

    [:#topModal.modal.fade {:role        "dialog"
                            ;:tabIndex -1
                            :aria-hidden "true"}
     [:.modal-dialog
      [:.modal-content
       [:.modal-header
        [:button.close {:type                    "button "
                        :on-click                #(publish help-key-change nil) ; #(hide "#topModal")
                        :aria-hidden             true
                        :dangerouslySetInnerHTML {:__html "&times;"}}]
        [:h4.modal-title help-header]]
       [:.modal-body help-text]
       [:.modal-footer
        [:button.btn.btn-default {:type     "button"
                                  :on-click #(publish help-key-change nil) ;#(hide "#topModal")
                                  }
         "Close"]]]]]))


(rum/defc settings-modal < rum/reactive
                           "Note that we are assuming the _single_ modal dialog is mounted on #topModal since we
                           are using jQuery to locate it."
  []

  [:#settingsModal.modal.fade {:role        "dialog"
                               ;:tabIndex -1
                               :aria-hidden "true"}
   [:.modal-dialog
    [:.modal-content
     [:.modal-header
      [:button.close {:type                    "button "
                      :on-click                #(publish settings-change nil) ;(hide "#settingsModal")
                      :aria-hidden             true
                      :dangerouslySetInnerHTML {:__html "&times;"}}]
      [:h4.modal-title "Settings"]]
     [:.modal-body
      [:p "Configure the histological scale to use either Grade group or Gleason or both."]
      (input-widget :hist-scale)
      [:hr]
      [:p "Choose a plot-style"]
      (input-widget :plot-style)
      ]
     [:.modal-footer
      [:button.btn.btn-default {:type     "button"
                                :on-click #(publish settings-change nil) ; #(hide "#settingsModal")
                                }
       "Close"]]]]])
