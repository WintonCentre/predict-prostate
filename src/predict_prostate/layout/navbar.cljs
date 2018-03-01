(ns predict-prostate.layout.navbar
  (:require [rum.core :as rum]
            [predict-prostate.state.run-time :refer [model input-changes]]
            [predict-prostate.state.mutations :refer [clear-inputs]]))


(rum/defc clear-all-button < rum/static [{:keys [on-click] :as props}]
  [:button.btn.navbar-btn.btn-danger.btn-lg {:on-click on-click} " Reset"])

(rum/defc navbar < rum/reactive []
  [:nav.navbar.navbar-default
   [:.container-fluid
    [:.navbar-header {:style {:margin-left 0}}
     "Predict " model ": Breast Cancer Survival"]]])
