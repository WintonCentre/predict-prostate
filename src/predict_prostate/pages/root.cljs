(ns predict-prostate.pages.root
  (:require                                                 ;[org.martinklepsch.derivatives :refer [rum-derivatives]]
    [rum.core :as rum]
    [predict-prostate.state.run-time :refer [rtdb route media-change media-cursor]]
    [predict-prostate.pages.home :refer [home]]
    [predict-prostate.pages.about :refer [about]]
    [predict-prostate.pages.legal :refer [legal]]
    [predict-prostate.pages.contact :refer [contact]]
    [predict-prostate.pages.tool :refer [tool]]
    [predict-prostate.pages.not-found :refer [not-found]]
    [pubsub.feeds :refer [->Topic publish subscribe unsubscribe]]
    ))

(defn before-print []
  (publish media-change :print)
  )

(defn after-print []
  (publish media-change :screen)
  )

;see https://www.tjvantoll.com/2012/06/15/detecting-print-requests-with-javascript/

(defn before-after-print []
  (goog.object.set js/window "onbeforeprint" before-print)
  (goog.object.set js/window "onafterprint" after-print))

(def media-watch {:did-mount (fn [state]
                               ; chrome matchMedia is dodgy, and we detect it through its addEventListener prototype
                               (if-not (.-oldBrowser js/window)
                                 (if (.-addEventListener (.matchMedia js/window "print"))
                                   (before-after-print)     ; chrome
                                   (let [mql (.matchMedia js/window "print")]
                                     (.addListener mql #(if (goog.object.get % "matches") (before-print) (after-print))))) ; firefox
                                 (before-after-print)
                                 )
                               state)})

(rum/defc root < rum/reactive media-watch                   ;(rum-derivatives drv-spec)
                 "Root of site. All components are within this tree"
  []
  (let [[page params query :as rt] (rum/react route)]
    [:div
     (case page
       :home (home)
       :about (about rt)
       :tool (tool)
       :contact (contact rt)
       :legal (legal rt)

       :not-found (not-found)
       ;[:div "404"]
       )]))




(comment
  (ns predict-prostate.pages.root
    (:require                                               ;[org.martinklepsch.derivatives :refer [rum-derivatives]]
      [rum.core :as rum]
      [predict-prostate.state.run-time :refer [rtdb route]]
      [predict-prostate.pages.home :refer [home]]
      [predict-prostate.pages.about :refer [about]]
      [predict-prostate.pages.patient :refer [patient]]
      [predict-prostate.pages.clinician :refer [clinician]]
      [predict-prostate.pages.tool :refer [tool]]
      ;       [predict-prostate.pages.news :refer [news]]
      [predict-prostate.pages.not-found :refer [not-found]]
      ))


  (rum/defc root < rum/reactive                             ;(rum-derivatives drv-spec)
                   "Root of site. All components are within this tree"
    []
    (let [[page params query] (rum/react route)]
      [:div
       (case page
         :home (home)
         :about (about)
         :patient (patient)
         :clinician (clinician)
         :tool (tool)
         :not-found (not-found)
         [:div "404"]
         )])))

