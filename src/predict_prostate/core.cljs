(ns predict-prostate.core
  (:require [rum.core :as rum]
            [goog.dom :as gdom]
            [predict-prostate.state.mutations :refer [mutator]]
            [predict-prostate.pages.root :refer [root]])

  (:require-macros [devcards.core :as dc :refer [defcard deftest]]
                   ))

; We are getting an infer warning on accessing .modal property in bootstrap
(set! *warn-on-infer* false)

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

;; This appears to be necessary.
(def loaded-id (js/setInterval
                 #(when (#{"loaded" "complete"} (.-readyState js/document))
                    (js/clearInterval loaded-id)
                    (main))
                 10))

(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)
