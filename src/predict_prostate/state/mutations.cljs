(ns predict-prostate.state.mutations
  (:require [predict-prostate.state.run-time :refer [N      ; the number of years in the model
                                                     model
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
                                                     media-cursor
                                                     media-change
                                                     print-cursor
                                                     print-change
                                                     route
                                                     route-change
                                                     hide-warning-change
                                                     hide-warning-cursor
                                                     show-uncertainty-change
                                                     show-uncertainty-cursor
                                                     force-recalculation
                                                     ]]
            [predict-prostate.state.config :refer [input-groups get-input-default]]
            [predict-prostate.state.localStorage :refer [get-settings! put-settings!]]
            [predict-prostate.models.runner :refer [recalculate-model]]
            [pubsub.feeds :refer [publish subscribe]]
            [clojure.core.async :refer [timeout <!]]
            [cljs.reader :refer [read-string]]
            [clojure.string :refer [split]]
            [bide.core :as r]
            [predict-prostate.router :refer [router use-hash-fragment]]
            [interop.jsx :refer [jq$]]
    #_[predict-prostate.results.util :refer [clip]]
            )
  (:require-macros [cljs.core.async.macros :refer [go]]))

(set! *warn-on-infer* false)

(defn clear-inputs []
  (doseq [[key topic] (input-changes)
          :when key
          :when topic]

    "restore saved settings"
    (cond

      (= key :plot-style)
      (let [{:keys [plot-style]} (get-settings! {:plot-style :line2})]
        (if (#{:area1 :line2} plot-style)
          (reset! (input-cursor :plot-style) plot-style)
          (do
            (put-settings! {:plot-style :line2})
            (reset! (input-cursor :plot-style) :line2))
          ))

      :else
      (publish topic (if (#{:age :psa} key) "" nil))))
  (publish results-change nil)
  )


(defn log [topic old new]
  ;(println "Mutate: " topic " " old " -> " new)
  )

(defn subscribe-to [change cursor & [silent]]
  (subscribe change
             #(do (when-not silent (log %1 @cursor %2))
                  (reset! cursor %2))))

(defn clip [{:keys [value min max]}]
  (if (>= value min)
    (if (<= value max)
      value
      max)
    min))

;;
;; Numeric values are always stored in state as strings, but processed as numerics
;;
(defn str-to-num [s] (js/parseFloat s))
(comment
  (str-to-num "3.5")                                        ;=> 3.5
  (str-to-num 3.5)                                          ;=> 3.5
  )

(defn num-to-str [n] (if (js/isNaN n) nil (str n)))


(defn mutator []

  (doseq [[key change] (input-changes)]
    (when change
      (subscribe change
                 (fn [topic value]

                   (log topic @(input-cursor key) value)

                   (cond

                     (= :biopsy-cores-taken key)
                     (let [[value bad] (split value ":")
                           bci (str-to-num  @(input-cursor :biopsy-cores-involved))
                           bct (str-to-num  @(input-cursor :biopsy-cores-taken))]
                       ;(println "t value = " (if (string? value) "str " "num ") value)
                       ;(println "t taken = " (if (string? bct) "str " "num ") bct)
                       ;(println "t involved = " (if (string? bci) "str " "num ") bci)
                       ;(println "t bad = " bad)
                       (when-not (js/isNaN bci)
                         (reset! (input-cursor :biopsy-cores-involved) (num-to-str (max 1 (min bci (str-to-num value))))))
                       (reset! (input-cursor :biopsy-cores-taken) (str value (when bad ":") bad)))

                     (= :biopsy-cores-involved key)
                     (let [[value bad] (split value ":")
                           bci (str-to-num  @(input-cursor :biopsy-cores-involved))
                           bct (str-to-num  @(input-cursor :biopsy-cores-taken))]
                       ;(println "i value = " (if (string? value) "str " "num ") value)
                       ;(println "i taken = " (if (string? bct) "str " "num ") bct)
                       ;(println "i involved = " (if (string? bci) "str " "num ") bci)
                       ;(println "i bad = " bad)
                       (when (not (js/isNaN bct))
                         (reset! (input-cursor :biopsy-cores-involved)
                                 (str value (if (or (neg? value) bad)
                                              (str ":" value)
                                              "")))))

                     (= key :hist-scale)
                     (do
                       (reset! (input-cursor :hist-scale) value)
                       (put-settings! {:hist-scale value})

                       ; copy the value from the old scale to the newly selected scale
                       (if (= value :gleason)
                         (reset! (input-cursor :gleason) @(input-cursor :grade-group))
                         (reset! (input-cursor :grade-group) @(input-cursor :gleason)))
                       )

                     (#{:gleason :grade-group} key)
                     (do
                       (reset! (input-cursor :gleason) value)
                       (reset! (input-cursor :grade-group) value))

                     (= key :h-admissions)
                     (do
                       (reset! (input-cursor :h-admissions) value)
                       (if (= value 0)
                         (reset! (input-cursor :charlson-comorbidity) nil)))

                     (= key :plot-style)
                     (do
                       (reset! (input-cursor :plot-style) value)
                       (put-settings! {:plot-style value}))

                     :else
                     (reset! (input-cursor key) (if (nil? value)
                                                  (get-input-default input-groups key)
                                                  value))

                     )

                   ;; This and the following subscribe are the only spots where we recalculate the model, and we delay it until
                   ;; any changes to the on-screen-inputs have been rendered.
                   (recalculate-model (input-map) N)))))

  (subscribe force-recalculation
             (fn [_ _]
               (recalculate-model (input-map) N)))

  ;; various
  (subscribe-to media-change media-cursor false)

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
               (if help-key
                 (.modal (jq$ "#topModal") "show")
                 (.modal (jq$ "#topModal") "hide"))))

  (subscribe settings-change
             (fn [_ help-key]
               (reset! settings-cursor help-key)
               (if help-key
                 (.modal (jq$ "#settingsModal") "show")
                 (.modal (jq$ "#settingsModal") "hide"))))


  (subscribe print-change
             (fn [_ val]
               (reset! print-cursor val)
               (.modal (js/$ "#printModal") "show"))
             )

  (subscribe route-change
             (fn [_ [page param1 param2 :as rvec]]
               (reset! route rvec)
               (r/navigate! router page param1 param2)
               (when (= page :home) (set! (.-href js/location) (if (use-hash-fragment) "/#" "/")))
               ))

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
