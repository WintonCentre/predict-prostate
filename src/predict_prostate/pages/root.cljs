(ns predict-prostate.pages.root
  (:require                                                 ;[org.martinklepsch.derivatives :refer [rum-derivatives]]
    [rum.core :as rum]
    [predict-prostate.state.run-time :refer [rtdb route     ;drv-spec
                                             ]]
    [predict-prostate.pages.home :refer [home]]
    [predict-prostate.pages.about :refer [about]]
    [predict-prostate.pages.patient :refer [patient]]
    [predict-prostate.pages.clinician :refer [clinician]]
    [predict-prostate.pages.tool :refer [tool]]
    ;       [predict-prostate.pages.news :refer [news]]
    [predict-prostate.pages.not-found :refer [not-found]]
    ))


(rum/defc root < rum/reactive                               ;(rum-derivatives drv-spec)
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
       )]))