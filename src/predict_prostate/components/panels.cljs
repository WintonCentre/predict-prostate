(ns predict-prostate.components.panels
  (:require [rum.core :as rum]))

(rum/defc titled-panel < rum/static [{:keys [key title help class body-class] :as props} children]
  [:div
   children
   ]
  )


(def unused {:style {:position "absolute" :left "-1.5em" :width "8em"
                     :top      "47ex"}})