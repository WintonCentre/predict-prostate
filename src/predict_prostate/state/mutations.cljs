(ns predict-prostate.state.mutations
  (:require [predict-prostate.state.run-time :refer [model
                                                     input-cursor
                                                     input-change
                                                     input-changes
                                                     input-default
                                                     active-results-pane
                                                     active-results-change
                                                     mockup-cursor
                                                     mockup-change
                                                     results-cursor
                                                     results-change
                                                     input-map
                                                     help-key-cursor
                                                     help-key-change
                                                     settings-cursor
                                                     settings-change
                                                     route
                                                     route-change
                                                     hide-warning-change
                                                     hide-warning-cursor
                                                     show-uncertainty-change
                                                     show-uncertainty-cursor
                                                     ]]
            [predict-prostate.state.config :refer [input-groups get-input-default]]
            [predict-prostate.state.localStorage :refer [get-settings! put-settings!]]
            [predict-prostate.models.runner :refer [recalculate-model]]
            [pubsub.feeds :refer [publish subscribe]]
            [clojure.core.async :refer [timeout <!]]
            [bide.core :as r]
            [predict-prostate.router :refer [router]]
    #_[predict-prostate.results.util :refer [clip]]
            )
  (:require-macros [cljs.core.async.macros :refer [go]]))


(defn clear-inputs []
  (doseq [[key topic] (input-changes)
          :when key
          :when topic]
    "don't zap the settings local storage on startup"
    (if (= key :enable-radio)
      (let [enable-radio (:enable-radio (get-settings! {:enable-radio :no}))]
        (reset! (input-cursor :enable-radio) enable-radio))
      (publish topic (if (#{:age :size :nodes} key) "" nil))))
  (publish results-change nil)
  )


(defn log [topic old new]
  (println "Mutate: " topic " " old " -> " new)
  )

(defn subscribe-to [change cursor & [silent]]
  (subscribe change
    #(do (when-not silent (log %1 @cursor %2))
         (reset! cursor %2)
         )))

(defn clip [{:keys [value min max]}]
  (if (>= value min)
    (if (<= value max)
      value
      max)
    min))

(defn mutator []

  (doseq [[key change] (input-changes)]
    (when change
      (subscribe change
        (fn [topic value]

          (log topic @(input-cursor key) value)

          (cond
            (= key :age)
            (reset! (input-cursor :age) (if (or (= "" value) (nil? value))
                                          ""
                                          (str (clip {:value value :min 0 :max 100})))
              )

            ;; when nodes changes to zero, micromets can be entered, otherwise, and initially, they are disabled
            (= key :nodes)
            (do (if (zero? (js/parseInt value))
                  (reset! (input-cursor :micromets) nil)
                  (reset! (input-cursor :micromets) :disabled))
                (reset! (input-cursor :nodes) value))

            ;; when :er-status is negative, hormone therapy is disabled
            (= key :er-status)
            (do (cond
                  (= :no @(input-cursor :er-status)) (reset! (input-cursor :horm) nil)
                  (= :no value) (reset! (input-cursor :horm) :disabled)
                  )
                (reset! (input-cursor :er-status) value))

            ;; when :post-meno is pre, bisphosphonates are disabled
            (= key :post-meno)
            (do (cond
                  (= :pre @(input-cursor :post-meno)) (reset! (input-cursor :bis) nil)
                  ;(= nil @(input-cursor :post-meno)) (reset! (input-cursor :bis) nil)
                  (= :pre value) (reset! (input-cursor :bis) :disabled)
                  ;(= nil value) (reset! (input-cursor :bis) :disabled)
                  )
                (reset! (input-cursor :post-meno) value))

            ;; when :her2-status is negative, trastuzumab is disabled
            (= key :her2-status)
            (do
              (cond
                (= :no @(input-cursor :her2-status)) (reset! (input-cursor :tra) nil)
                (= :no value) (reset! (input-cursor :tra) :disabled)
                )
              (reset! (input-cursor :her2-status) value)
              )

            ;;
            (= key :enable-radio)
            (do
              (.log js/console ":enable-radio" value)
              (reset! (input-cursor :enable-radio) value)
              (put-settings! {:enable-radio value}))

            :else
            (reset! (input-cursor key) (if (nil? value)
                                         (get-input-default input-groups key)
                                         value))
            )
          #_(reset! (input-cursor key) (if (nil? value) (get-input-default input-groups key) value))

          ;; This is the one and only spot where we recalculate the model!
          (recalculate-model model (input-map))))))


  ;; various
  (subscribe-to active-results-change active-results-pane true)
  (subscribe-to mockup-change mockup-cursor true)

  ; (subscribe-to help-key-change help-key-cursor true)
  (subscribe-to hide-warning-change hide-warning-cursor true)
  (subscribe-to show-uncertainty-change show-uncertainty-cursor true)

  (subscribe results-change
    (fn [_ results]
      (reset! results-cursor results)))


  (subscribe help-key-change
    (fn [_ help-key]
      (reset! help-key-cursor help-key)
      (.modal (js/$ "#topModal") "show")
      )
    )

  (subscribe settings-change
    (fn [_ help-key]
      (reset! settings-cursor help-key)
      (.modal (js/$ "#settingsModal") "show")
      )
    )

  ;(subscribe-to route-change route true)
  (subscribe route-change
    (fn [_ [page param1 param2 :as rvec]]
      ;(prn "route-change" page param1 param2)
      (reset! route rvec)
      (r/navigate! router page param1 param2)))

  ;; Now clear all values to nil/default
  (clear-inputs))

(comment

  (publish route-change [:home nil nil])
  (publish route-change [:tool nil nil])

  (get-input-default input-groups :neo)

  (count (.querySelectorAll js/document ".has-error"))

  (count (.querySelectorAll js/document "[data-key]"))
  )


(comment
  ; lazy-seq example:

  (declare helper)

  (defn even? [n]
    (lazy-seq
      (if (zero? n)
        [true]
        (cons n (helper (dec n))))))

  (defn helper [n]
    (lazy-seq
      (if (zero? n)
        [false]
        (cons n (even? (dec n))))))
  )
