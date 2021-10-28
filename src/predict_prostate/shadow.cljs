(ns predict-prostate.shadow
  (:require [rum.core :as rum]
            [cljs.core.async :refer [chan]]
            [goog.dom :as gdom]
            [predict-prostate.state.mutations :refer [mutator]]
            ;[predict3.state.run-time :refer [t-state-change t-state-cursor]]
            ;[translations.config :refer [live-dictionary-url predict-edit]]
            [predict-prostate.pages.root :refer [root #_edit-root]]
            [pubsub.feeds :refer [publish]]
            ;[translations.tongue-base :refer [load-all-translations]]
            ;[translations.tranny-api :refer [base-url]]
            ))

(enable-console-print!)

;;;; Start the mutator!
(defonce once-only-guard (mutator))

; Global channels for response handling on startup
(def ok-chan (chan 0))
(def err-chan (chan 0))
(def static-chan (chan 0))                                  ; It may be safe to re-use ok-chan here

(defn main []
  ;; conditionally start the app based on whether the #main-app-area
  ;; node is on the page
  (rum/mount (root) (gdom/getElement "app"))

  ;(println "predict-edit" predict-edit (str base-url "upserts/all"))
  ; retain both options here as lein-fighweel uses the main entry for editing as well as for production
;;   (if predict-edit
;;     (do
;;       (println "edit: loading translations from: " (str base-url "upserts/all"))
;;       (load-all-translations static-chan ok-chan err-chan (str base-url "upserts/all") t-state-cursor))
;;     (do
;;       (println "prod: publish t-state-change " live-dictionary-url)
;;       (publish t-state-change live-dictionary-url)))
  )          ; will call load-translation*

;; (defn edit-main []
;;   ;; Start the editor in a shadow build
;;   (rum/mount (edit-root) (gdom/getElement "app"))
;;   (println "edit: loading translations from: " (str base-url "upserts/all"))
;;   (load-all-translations static-chan ok-chan err-chan (str base-url "upserts/all") t-state-cursor))          ; will call load-translation*