(ns predict-prostate.state.load-config
  (:require
    [rum.core :as rum]
    [pubsub.feeds :refer [->Topic publish subscribe unsubscribe]]
    [clojure.string :refer [index-of]]
    [predict-prostate.state.config :refer [input-groups event-bus]]
    [predict-prostate.state.run-time :refer [rtdb
                                             input-cursor
                                             input-cursors
                                             input-change
                                             estimates
                                             ]]

    [predict-prostate.components.button :refer [radio-button-group radio-button-group-vertical]]
    [predict-prostate.components.select :refer [picker]]
    [wc-rum-lib.numeric-input :refer [numeric-input]]))


(rum/defc default < rum/static [{:keys [key label type params]} & extra]
  [:div (pr-str "Unknown widget " key label type params extra)])

(defmulti make-widget :type)

(defmethod make-widget :default [params]
  (default params))

(defmethod make-widget :string [{:keys [params]}]
  [:div {:style {:padding-top "10px" :font-size "16px"}} params])

(defmethod make-widget :radio-group [{:keys [key label params unknowable]}]
  (radio-button-group
    {:key               key
     :aria-label        label
     :aria-described-by "todo"
     :values            params
     :unknowable        unknowable}
    (input-cursor key)))

(defmethod make-widget :radio-group-vertical [{:keys [key label params unknowable]}]
  (radio-button-group-vertical
    {:key               key
     :aria-label        label
     :aria-described-by "todo"
     :values            params
     :unknowable        unknowable}
    (input-cursor key)))

(defmethod make-widget :numeric-input [{:keys [key params]}]
  (numeric-input (assoc params
                   :input-ref (input-cursor key)
                   :onChange #(publish (input-change key) %))))

(defmethod make-widget :select [{:keys [key params]}]
  (picker {:key key :on-change #(publish (input-change key) %)} (:menu params)))

(defn build-input-widgets-in [old-wiring groups]
  (reduce (fn [m g]
            (let [{:keys [key label widget-type widget-params unknowable]} g]
              (-> m
                  (assoc-in [:widget key] (make-widget {:key        key
                                                        :label      label
                                                        :type       widget-type
                                                        :params     widget-params
                                                        :unknowable unknowable}))
                  (assoc-in [:label key] label)
                  )))
          old-wiring groups))

(defn add-input-group
  "Adds the db refs on key :cursor, and mutation refs on key :change to the set of known inputs."
  [ref old-wiring groups]
  (reduce (fn [m g]
            (let [{:keys [key read-only write-only]} g]
              (-> m
                  (assoc-in [:cursor key] (when-not write-only (rum/cursor-in ref [:widgets key])))
                  (assoc-in [:change key] (when-not read-only (->Topic key event-bus)))
                  )))
          old-wiring groups))

;;
;; Create input widgets and load into state just once (per browser load)
;;
;; todo: This process a bit naff as the app-state contains react components that cannot be shown or printed or reloaded.
;; Main benefit is that we can configure inputs using data (currently using state.config).
;;
(defonce once-only-guard (swap! rtdb assoc :input-config (add-input-group rtdb {} input-groups)))

; add widgets
(swap! rtdb update :input-config #(build-input-widgets-in % input-groups))


(defn live-keys-by-model
  "The (maximal) set of input-group keys present in a model. This is derived directly from the model
  field in the input configuration."
  [model]
  (into #{} (map :key (filter #(and ((:models %) model)) input-groups))))
(comment
  (live-keys-by-model "prostate")
  ;=>
  #_#{:gleason :age :h-admissions :biopsy50 :psa :plot-style :biopsy-done
      :charlson-comorbidity :primary-rx :t-stage :grade-group :brca})




