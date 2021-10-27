(ns predict-prostate.core
  (:require [rum.core :as rum]
            [goog.dom :as gdom]
            [cljs.core.async :refer [chan]]
            [predict-prostate.state.mutations :refer [mutator]]
            [predict-prostate.pages.root :refer [root]]))

; We are getting an infer warning on accessing .modal property in bootstrap
(set! *warn-on-infer* false)

(enable-console-print!)

;;;; Start the mutator!
(defonce once-only-guard
  (mutator)
  )

; Global channels for response handling on startup
(def ok-chan (chan 0))
(def err-chan (chan 0))
(def static-chan (chan 0))                                  ; It may be safe to re-use ok-chan here

(defn ^:after-load main
  "main entry."
  []
  ;; conditionally start the app based on whether the #main-app-area
  ;; node is on the page
  (rum/mount (root) (gdom/getElement "app"))

  ;(println "predict-edit" predict-edit (str base-url "upserts/all"))
  ; retain both options here as lein-fighweel uses this main entry for both editing and production
  #_(if predict-edit ; not yet!
    (do
      (println "edit: loading translations from: " (str base-url "upserts/all"))
      (load-all-translations static-chan ok-chan err-chan (str base-url "upserts/all") t-state-cursor))
    (do
      (println "prod: publish t-state-change " live-dictionary-url)
      (publish t-state-change live-dictionary-url))))          ; will call load-translation*

; not-yet
#_(defn ^:after-load edit-main []
  ;; conditionally start the app based on whether the #main-app-area
  ;; node is on the page
  (rum/mount (edit-root) (gdom/getElement "app"))
  (println "edit: loading translations from: " (str base-url "upserts/all"))
  (load-all-translations static-chan ok-chan err-chan (str base-url "upserts/all") t-state-cursor))          ; will call load-translation*

;; lein-figwheel demands that the entry point must be called
(defonce loaded-id (js/setInterval
                    #(when (#{"loaded" "complete"} (.-readyState js/document))
                       (js/clearInterval loaded-id)
                       (main)
                       #_(if predict-edit (edit-main) (main)))
                    10))







(comment
  ;; ORIGINAL PROSTATE CODE

  (defn main []
  ;; conditionally start the app based on whether the #main-app-area
  ;; node is on the page
    (rum/mount (root) (gdom/getElement "app")))


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
 0 )


