(ns predict-prostate.components.bs3-modal
  (:require [rum.core :as rum]
            #_[predict-prostate.content-reader :refer [section]]
            [predict-prostate.state.run-time :refer [help-key-cursor input-widget]]))

(rum/defc top-modal < rum/reactive
                      "Note that we are assuming the _single_ modal dialog is mounted on #topModal since we
                      are using jQuery to locate it."
  []
  (let [help-key (rum/react help-key-cursor)
        help ["Header" "Content"]                          ;(section help-key)
        [help-header & help-content] (if (seq help)
                                       help
                                       ["help header" [:p "help content"]])
        help-text (into [] (cons :div help-content))
        ]

    [:#topModal.modal.fade {:role        "dialog"
                            ;:tabIndex -1
                            :aria-hidden "true"}
     [:.modal-dialog
      [:.modal-content
       [:.modal-header
        [:button.close {:type                    "button "
                        :on-click                #(.modal (js/$ "#topModal") "hide")
                        :aria-hidden             true
                        :dangerouslySetInnerHTML {:__html "&times;"}}]
        [:h4.modal-title help-header]]
       [:.modal-body help-text]
       [:.modal-footer
        [:button.btn.btn-default {:type     "button"
                                  :on-click #(.modal (js/$ "#topModal") "hide")}
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
                      :on-click                #(.modal (js/$ "#settingsModal") "hide")
                      :aria-hidden             true
                      :dangerouslySetInnerHTML {:__html "&times;"}}]
      [:h4.modal-title "Settings"]]
     [:.modal-body
      [:p "Should " [:strong "radiotherapy"] " be included as a treatment option in this tool? "]
      (input-widget :enable-radio)
      [:p "The benefits or harms of radiotherapy are estimated from a 2011 study - see the clinician information for
       more detail. The harms and benefits we are able to present here are averaged over the whole population. They may differ
       markedly in individual cases due to factors such as radiation dose, location of the target area, and patient
       behaviours such as smoking"]]
     [:.modal-footer
      [:button.btn.btn-default {:type     "button"
                                :on-click #(.modal (js/$ "#settingsModal") "hide")}
       "Close"]]]]])
