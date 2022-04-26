(ns predict-prostate.pages.root
  (:require                                                 ;[org.martinklepsch.derivatives :refer [rum-derivatives]]
   [rum.core :as rum]
   [predict-prostate.state.run-time :refer [rtdb route media-change media-cursor t-state-cursor]]
   [predict-prostate.pages.home :refer [home]]
   [predict-prostate.pages.about :refer [about]]
   [predict-prostate.pages.legal :refer [legal]]
   [predict-prostate.pages.contact :refer [contact]]
   [predict-prostate.pages.tool :refer [tool]]
   [predict-prostate.pages.not-found :refer [not-found]]
   [predict-prostate.pages.model-tests :refer [model-tests]]
   [pubsub.feeds :refer [->Topic publish subscribe unsubscribe]]
   [translations.root :refer [ttt ttt-edit]]
   ))

(defn before-print []
  (publish media-change :print)
  )

(defn after-print []
  (publish media-change :screen)
  )

;see https://www.tjvantoll.com/2012/06/15/detecting-print-requests-with-javascript/

(defn before-after-print []
  (js/goog.object.set js/window "onbeforeprint" before-print)
  (js/goog.object.set js/window "onafterprint" after-print))

(def media-watch {:did-mount (fn [state]
                               ; chrome matchMedia is dodgy, and we detect it through its addEventListener prototype
                               (if-not (.-oldBrowser js/window)
                                 (if (.-addEventListener (.matchMedia js/window "print"))
                                   (before-after-print)     ; chrome
                                   (let [mql (.matchMedia js/window "print")]
                                     (.addListener mql #(if (js/goog.object.get % "matches") (before-print) (after-print))))) ; firefox
                                 (before-after-print)
                                 )
                               state)})

(rum/defc root* < rum/reactive media-watch                   ;(rum-derivatives drv-spec)
                 "Root of site. All components are within this tree"
  [ttt*]
  (let [[page _ _ :as rt] (rum/react route)
        lang (:lang (rum/react t-state-cursor))]
    [:div
     (case page
       :home (home ttt*) #_(home)
       :about (about ttt* rt) #_(about rt)
       :tool (tool ttt*)
       :contact (contact ttt* rt) #_(contact rt)
       :legal (legal ttt* rt) #_(legal rt)

       :not-found (not-found ttt*) ;; commented out in predict3...
       :model-tests (model-tests ttt*)
       ;[:div "404"]
       )]))

(rum/defc root                                              ;< rum/reactive media-watch
  "Root of site. All components are within this tree"
  []
  (root* ttt))

(rum/defc edit-root                                         ;< rum/reactive media-watch
  "Root of the translation editor site. All components are within this tree"
  []
  (root* ttt-edit))



;; (comment
;;   (ns predict-prostate.pages.root
;;     (:require                                               ;[org.martinklepsch.derivatives :refer [rum-derivatives]]
;;       [rum.core :as rum]
;;       [predict-prostate.state.run-time :refer [rtdb route]]
;;       [predict-prostate.pages.home :refer [home]]
;;       [predict-prostate.pages.about :refer [about]]
;;       [predict-prostate.pages.patient :refer [patient]]
;;       [predict-prostate.pages.clinician :refer [clinician]]
;;       [predict-prostate.pages.tool :refer [tool]]
;;       ;       [predict-prostate.pages.news :refer [news]]
;;       [predict-prostate.pages.not-found :refer [not-found]]
;;       ))


;;   (rum/defc root < rum/reactive                             ;(rum-derivatives drv-spec)
;;                    "Root of site. All components are within this tree"
;;     []
;;     (let [[page params query] (rum/react route)]
;;       [:div
;;        (case page
;;          :home (home)
;;          :about (about)
;;          :patient (patient)
;;          :clinician (clinician)
;;          :tool (tool)
;;          :not-found (not-found)
;;          [:div "404"]
;;          )])))

