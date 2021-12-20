(ns predict-prostate.core
  (:require [rum.core :as rum]
            [cljs.core.async :refer [chan]]
            [goog.dom :as gdom]
            [predict-prostate.state.mutations :refer [mutator]]
            [predict-prostate.state.run-time :refer [t-state-change t-state-cursor]]
            [translations.config :refer [live-dictionary-url predict-edit]]
            [predict-prostate.pages.root :refer [root edit-root]]
            [pubsub.feeds :refer [publish]]
            [translations.tongue-base :refer [load-all-translations]]
            [translations.tranny-api :refer [base-url]]))

(enable-console-print!)

;;;; Start the mutator!
(defonce once-only-guard
  (mutator)
  )

; Global channels for response handling on startup
(def ok-chan (chan 0))
(def err-chan (chan 0))
(def static-chan (chan 0))

(defn main []
  ;;main is the entry point for both production mode and edition mode
  (if predict-edit
    (do
      (rum/mount (edit-root) (gdom/getElement "app"))
      (println "edit: loading translations from: " (str base-url "upserts/all"))
      (load-all-translations static-chan ok-chan err-chan (str base-url "upserts/all") t-state-cursor))
    (do
      (rum/mount (root) (gdom/getElement "app"))
      (println "prod: publish t-state-change " live-dictionary-url)
      (publish t-state-change live-dictionary-url)))
  )

(defn edit-main []
  ;; conditionally start the app based on whether the #main-app-area
  ;; node is on the page
  (rum/mount (edit-root) (gdom/getElement "app")))

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
