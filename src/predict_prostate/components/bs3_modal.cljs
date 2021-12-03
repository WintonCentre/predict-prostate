(ns predict-prostate.components.bs3-modal
  (:require [rum.core :as rum]
            [predict-prostate.content-reader :refer [section]]
            [predict-prostate.state.run-time :refer [help-key-cursor help-key-change settings-change print-cursor results-cursor edit-cursor text-change ttt-cursor new-text-change add-language]]
            [predict-prostate.results.printable :refer [results-in-print]]
            [pubsub.feeds :refer [publish]]
            [predict-prostate.state.load-config :refer [render-widget]]
            [graphics.simple-icons :as simple]))

(defn some-text?
  [text]
  (when (and (some? text) true)
    text))

(rum/defc editor-modal < rum/reactive                       
  []
  (let [edit-m (rum/react edit-cursor)
        edit-key (:edit-key edit-m)
        old-text (:text edit-m)
        new-text (:new-text edit-m)
        submit (fn []
                 (if-let [new-text* (some-text? new-text)]
                   (publish text-change [edit-key new-text*])
                   old-text)
                 (.modal (js/$ "#editorModal") "hide"))]

    [:#editorModal.modal.fade {:role        "dialog"
                               :tab-index   -1
                               :aria-hidden "true"}
     [:.modal-dialog
      [:.modal-content
       [:.modal-header
        [:button.close {:type                    "button "
                        :on-click                submit
                        :aria-hidden             true
                        :dangerouslySetInnerHTML {:__html "&times;"}}]
        [:h4.modal-title (str edit-key)]]
       [:.modal-body
        [:h5 "English text"]
        old-text
        [:hr]
        [:h5 "Last translation"]
        ((rum/react ttt-cursor) [edit-key])
        [:hr]
        [:h5 "New translation"]
        [:textarea {:style     {:width "100%" :height "100%"}
                    :value     (if (nil? new-text) (if (nil? old-text) "" old-text) new-text)
                    :on-change (fn [e] (publish new-text-change [edit-key (.. e -currentTarget -value)]))}]]
       [:.modal-footer
        [:button.btn.btn-default {:type     "button"
                                  :on-click submit}
         "Close"]]]]]))

;Not used here but used in Breast - couldn't see it in live editor of Breast
(rum/defcs new-language-modal < rum/reactive (rum/local "" ::new-lang)
  [state]
  (let [new-lang-ref (::new-lang state)
        new-lang (rum/react new-lang-ref)
        submit #(when (= 2 (count new-lang))
                  ;(println "new language is" new-lang (string? @new-lang-ref))
                  (publish add-language [new-lang])
                  (.modal (js/$ "#newLanguageModal") "hide"))]
    [:#newLanguageModal.modal.fade {:role        "dialog"
                                    :tab-index   -1
                                    :aria-hidden "true"
                                    ;:z-index 10000
                                    }
     [:.modal-dialog
      [:.modal-content
       [:.modal-header
        [:button.close {:type                    "button "
                        :on-click                submit
                        :aria-hidden             true
                        :dangerouslySetInnerHTML {:__html "&times;"}}]
        [:h4.modal-title "Add a new language"]]
       [:.modal-body
        [:h5 "Enter new language code: "]
        [:input {:value     new-lang
                 :on-change (fn [e] (reset! new-lang-ref (.. e -currentTarget -value)))}]
        [:p {:style {:color "#bbb"}} "Use the 2-character ISO 639-1 code"]]
       [:.modal-footer
        [:button.btn.btn-default {:type     "button"
                                  :on-click #(.modal (js/$ "#newLanguageModal") "hide")}
         "Cancel"]
        [:button.btn.btn-default {:type     "button"
                                  :on-click submit}
         "OK"]]]]]))


(rum/defc top-modal < rum/reactive
                      "Note that we are assuming the _single_ modal dialog is mounted on #topModal since we
                      are using jQuery to locate it."
  [ttt]
  (let [help-key (rum/react help-key-cursor)
        help (section ttt help-key)
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
         (ttt [:close "Close"])]]]]]))



(rum/defc cancel-or-print [ttt]
  [:div.pull-right
   [:button.btn.btn-default {:type "button"
                             :on-click #(do
                                          (.modal (js/$ "#printModal") "hide"))
                             }
    (ttt [:cancel "Cancel"])]
   " "
   [:button.btn.btn-primary {:type     "button"
                             :on-click #(do (.modal (js/$ "printModal") "hide")
                                            (js/print))
                             }

    (simple/icon {:family :fa} "print") " " (ttt [:print "Print"])]]
  )


(rum/defc print-modal < rum/reactive
                        "Note that we are assuming the _single_ modal dialog is mounted on #topModal since we
                        are using jQuery to locate it."
  [ttt]
  [:div
   [:#printModal.modal.fade {:role        "dialog"
                             :tab-index   -1
                             :aria-hidden "true"}
    [:.modal-dialog.screen-only
     [:.modal-content
      [:.modal-header (cancel-or-print ttt)]
      [:.modal-body (when (and (rum/react print-cursor) (rum/react results-cursor))
                      [:div
                       (rum/with-key (results-in-print ttt) 2)])]
      [:.modal-footer (cancel-or-print ttt)]]]]
   [:.print-only {::style {:margin "0 20px"}} (when (and (rum/react print-cursor) (rum/react results-cursor)) (results-in-print ttt))]])



(rum/defc settings-modal < rum/reactive
                           "Note that we are assuming the _single_ modal dialog is mounted on #topModal since we
                           are using jQuery to locate it."
  [ttt]
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
      [:h4.modal-title (ttt [:tool/settings "Settings"])]]
     [:.modal-body

      [:p (ttt [:settings/caps "Choose a plot style for treatment benefit"])]
      (render-widget ttt :plot-style) 

      [:.modal-footer
       [:button.btn.btn-default {:type     "button"
                                 :on-click #(publish settings-change nil) ; #(hide "#settingsModal")
                                 }
        (ttt [:close "Close"])]]]]]])
