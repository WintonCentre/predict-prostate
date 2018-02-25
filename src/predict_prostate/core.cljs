(ns predict-prostate.core
  (:require [rum.core :as rum]
            [goog.dom :as gdom]
            [predict-prostate.state.mutations :refer [mutator]]
            [predict-prostate.pages.root :refer [root]])

  (:require-macros [devcards.core :as dc :refer [defcard deftest]]
                   ))

(enable-console-print!)

;;;; Start the mutator!
(defonce once-only-guard
  (mutator)
  )

(defn main []
  ;; conditionally start the app based on whether the #main-app-area
  ;; node is on the page
  (rum/mount (root) (gdom/getElement "app"))
  )

(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)
