(ns predict-prostate.components.bs3-modal
  (:require [rum.core :as rum]
            [predict-prostate.content-reader :refer [section]]
            [predict-prostate.state.run-time :refer [help-key-cursor help-key-change settings-change input-widget settings-cursor print-cursor results-cursor]]
            [predict-prostate.results.printable :refer [results-in-print]]
            [pubsub.feeds :refer [publish]]
            [interop.jsx :refer [jq$ jq$call]]
            [graphics.simple-icons :as simple]))

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


(rum/defc cancel-or-print []
  [:div.pull-right
   [:button.btn.btn-default {:type     "button"
                             :on-click #(do
                                          (.modal (js/$ "#printModal") "hide")
                                          )}
    "Cancel"]
   " "
   [:button.btn.btn-primary {:type     "button"
                             :on-click #(do
                                          (.modal (js/$ "#printModal") "hide")
                                          (js/print)
                                          )}

    (simple/icon {:family :fa} "print") " Print"]]
  )


(rum/defc print-modal < rum/reactive
                        "Note that we are assuming the _single_ modal dialog is mounted on #topModal since we
                        are using jQuery to locate it."
  []
  [:div
   [:#printModal.modal.fade {:role        "dialog"
                             :tab-index   -1
                             :aria-hidden "true"}
    [:.modal-dialog.screen-only
     [:.modal-content
      [:.modal-header (cancel-or-print)]
      [:.modal-body (when (and (rum/react print-cursor) (rum/react results-cursor))
                      [:div
                       (rum/with-key (results-in-print) 2)])]
      [:.modal-footer (cancel-or-print)]]]]
   [:.print-only {::style {:margin "0 20px"}} (when (and (rum/react print-cursor) (rum/react results-cursor)) (results-in-print))]])



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
