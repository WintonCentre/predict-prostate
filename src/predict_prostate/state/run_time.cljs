(ns predict-prostate.state.run-time
  (:require
    [rum.core :as rum]
    [clojure.string :refer [index-of starts-with?]]
    [clojure.pprint :refer [cl-format]]
    [clojure.set :refer [union]]
    [predict-prostate.state.config :refer [event-bus]]
    [pubsub.feeds :refer [->Topic]]
    ))

(def model "prostate")
(def unknown "Unknown")
(def N 15)

(defn make-topic
  "Make a new topic on which to report events"
  [topic-key]
  (->Topic topic-key event-bus))


"When plotting adjuvant treatments, we start from a baseline of surgery only, adding treatments and hopefully improving
survival, up to the projected survival of prostate-cancer-free men "
(defonce rtdb
         (atom {

                ;; Histology is common to :gleason and grade-group inputs
                ;:histology               nil

                ;; Plot style
                :plot-style              nil

                ;; Potential Harms style
                :ph-style                nil

                :recalculate-error-state 0

                :active-results-pane     "charts"
                :active-mockup           "Mockup 1"         ;used for adverse effects mockups
                :incomplete              true

                ;; The set of widgets
                :on-screen-inputs        #{}
                :on-screen-treatments    #{}

                :show-uncertainty        :no

                ;; model results.
                ;; These should be non-nil when all inputs are complete.
                ;; Result data structure can be dependent on model
                :results                 []

                ;; active route
                :route                   [:home nil nil]

                ;; help
                :help-key                nil
                :help-header             "Help header"
                :help-content            "Help content"

                ;; settings modal initially not shown
                :help-visible            false
                :settings-visible        false

                ;; The state of the tool left-column accordion
                :hide-warning            false
                :test                    "test"
                :media                   :screen
                }))

(defonce estimates (atom nil))


(defonce media-cursor (rum/cursor rtdb :media))
(defonce media-change (make-topic :media-change))

;(defonce histology-cursor (rum/cursor rtdb :histology))
;(defonce plot-style-cursor (rum/cursor rtdb :plot-style))

(defonce hide-warning-cursor (rum/cursor rtdb :hide-warning))
(defonce hide-warning-change (make-topic :hide-warning-change))

(defonce show-uncertainty-cursor (rum/cursor rtdb :show-uncertainty))
(defonce show-uncertainty-change (make-topic :show-uncertainty-change))

(defonce route (rum/cursor rtdb :route))
(defonce route-change (make-topic :route-change))

(defonce help-header-cursor (rum/cursor rtdb :help-header))
(defonce help-header-change (make-topic :help-header-change))

(defonce help-content-cursor (rum/cursor rtdb :help-content))
(defonce help-content-change (make-topic :help-content-change))

(defonce help-key-cursor (rum/cursor rtdb :help-key))
(defonce help-key-change (make-topic :help-key-change))

(defonce settings-cursor (rum/cursor rtdb :settings-visible))
(defonce settings-change (make-topic :settings-change))

(defonce print-cursor (rum/cursor rtdb :print-visible))
(defonce print-change (make-topic :print-change))

(defonce help-cursor (rum/cursor rtdb :settings-visible))
(defonce help-change (make-topic :settings-change))

;; input keys that are currently on-screen
(defonce on-screen-inputs-cursor (rum/cursor rtdb :on-screen-inputs))

;; ref to a set containing active treatment keys (like :hormone)
(defonce on-screen-treatments-cursor (rum/cursor rtdb :on-screen-treatments))

; for REPL use
(def ost on-screen-treatments-cursor)

(defonce results-change (make-topic :results))
(defonce results-cursor (rum/cursor rtdb :results))


#_(defonce treatment-selection-cursor (rum/derived-atom [treatments-visible-cursor results-cursor] ::treatment-selection
                                                        (fn [a b] (and a b))))

(defonce active-results-pane (rum/cursor rtdb :active-results-pane))
(defonce active-results-change (make-topic :active-results-pane))

(defonce mockup-cursor (rum/cursor rtdb :active-mockup))
(defonce mockup-change (make-topic :active-mockup))

(defonce force-recalculation (make-topic :force-recalculation))

;;;
;; Input keys
;;;
(defn input-cursors []
  (get-in @rtdb [:input-config :cursor]))

;; and define an access function ...for cursors
(defn input-cursor [key]
  (get-in @rtdb [:input-config :cursor key]))

;; ...and for mutators
(defn input-changes []
  (get-in @rtdb [:input-config :change]))

(defn input-change [key]
  (get-in @rtdb [:input-config :change key]))

(defn input-label [key]
  (get-in @rtdb [:input-config :label key]))

(defn input-default [key]
  (get-in @rtdb [:input-config :default key]))

(defn input-widget [key]
  (get-in @rtdb [:input-config :widget key]))

(defn input-access [key]
  (get-in @rtdb [:input-config :access key]))

(defn input-map
  "This is the map of values that we feed into the model.
  Keys are unqualified (i.e. they don't refer to the selected treatment option)."
  []
  (into {}
        (map (fn [[k v]] [k @v])
             (filter (fn [[k _]]
                       ((union @on-screen-inputs-cursor @on-screen-treatments-cursor) k)) (input-cursors)))))


(defn year-selected []
  "return a cursor containing the selected year"
  (input-cursor :result-year))

(defn recalculate-model?
  "return true if the model can be calculated, else nil.
  im is the result of calling input-map"
  [input-map]
  (every? (fn [k] (input-map k)) @on-screen-inputs-cursor)
  )


;;;
;; Treatment keys - which depend on input keys
;;;
(comment                                                    ;; -- tests


  (input-cursors)
  ; A map of all possible input cursors installed in input-config

  (input-changes)
  ; A map of input mutation channels. Each one references a publication topic.

  @on-screen-inputs-cursor
  ; inputs which appear on screen
  ; #{:age :size :her2-status :mode :ki67-status :nodes :grade :er-status :micromets}

  @on-screen-treatments-cursor
  ; A set! (It could be ordered to save n needing graphable-treatment)
  ; => #{:chemo :horm :tra}

  (input-map)
  ; This is the map of values that we feed into the model.
  ; Keys are unqualified (i.e. they don't refer to the selected treatment option)
  ; Values are however sensitive to the treatment option setting.
  ;=> {:tra nil, :age 40, :size 2, :her2-status :yes, :mode :symptomatic, :ki67-status :yes, :nodes 2, :grade 2, :horm nil, :er-status :yes, :chemo nil, :micromets :no}

  ;; show all inputs
  (into {} (map (fn [[k v]] [k @v]) (input-cursors)))
  ; => {:post-meno nil, :chemo nil, :tra nil, :age 40, :opt-picker-1 nil, :tra nil, :size 2, :performance nil, :radio nil, :horm nil, :her2-status :yes, :tra nil, :pr-status nil, :mode :symptomatic, :opt-picker-0 nil, :tra nil, :heart-dose nil, :type nil, :ethnicity nil, :radio nil, :ki67-status :yes, :size nil, :oncotype nil, :surgery nil, :chemo nil, :lung-dose nil, :nodes 2, :bis nil, :grade 2, :weight nil, :bmi nil, :bis nil, :heart-dose nil, :horm nil, :horm nil, :side nil, :chemo nil, :er-status :yes, :chemo nil, :micromets :no, :lung-dose nil, :smoking nil, :horm nil,:height nil, :neo :no}


  @results-cursor
  ([5 {:bcSpecSur 0.9769091120924175, :cumOverallSurOL 0.9692325692973538, :cumOverallSurHormo 0.007321510374584478, :cumOverallSurChemo 0, :cumOverallSurCandH 0.007321510374584478, :cumOverallSurCHT 0.012019282569459833}] [10 {:bcSpecSur 0.9407891636797882, :cumOverallSurOL 0.9192541233440501, :cumOverallSurHormo 0.018478310249836996, :cumOverallSurChemo 0, :cumOverallSurCandH 0.018478310249836996, :cumOverallSurCHT 0.030465967535812846}] [20 {:bcSpecSur 0.8760500103304053, :cumOverallSurOL 0.8104345849686604, :cumOverallSurHormo 0.037282221638997734, :cumOverallSurChemo 0, :cumOverallSurCandH 0.037282221638997734, :cumOverallSurCHT 0.0620689089391925}])

  )