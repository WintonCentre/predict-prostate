(ns predict-prostate.mixins
  (:require [clojure.set :refer [difference]]
            [predict-prostate.state.run-time :refer [force-recalculation]]
            [pubsub.feeds :refer [publish]]
            [predict-prostate.state.run-time :refer [on-screen-inputs-cursor on-screen-treatments-cursor input-map]]))

(defn arg-local
  "Works like the rum/local mixin, but the initial value is taken
  from component args rather than passed in as a mixin parameter.
  If called with a key, that key is used to store the local state atom.
  If initial is a function it is used to locate the arg needed in :rum/args,
  else it is treated as an initial value."
  ([initial]
   (arg-local initial ::value))

  ([initial key]
   {:init (fn [{:keys [args :rum/args] :as state}]
            (assoc state key (atom (if (fn? initial)
                                     (apply initial args)
                                     initial))))}))

(def sizing-mixin
  "allow a rum component to access its rendered size"
  {:will-mount   (fn [state] (assoc state :width (atom 100) :height (atom 100) :resizer (atom nil)))
   :did-mount    (fn [state]
                   (let [node (js/ReactDOM.findDOMNode (:rum/react-component state))
                         resize #(do
                                   (reset! (:width state) (.-clientWidth node))
                                   (reset! (:height state) (.-clientHeight node)))]
                     (.addEventListener js/window "resize" resize)
                     (reset! (:resizer state) resize)
                     (resize)
                     state))
   :will-unmount (fn [state]
                   (.removeEventListener js/window "resize" (:resizer state))
                   state)})



(def active-monitor
  "Since the inputs are configurable and sometimes hidden, we need to actively monitor which ones are on screen at
  any one time. This is so we know when to switch on treatments."
  {
   :did-mount    (fn [state]
                   (let [[{:keys [key]}] (:rum/args state)]
                     (swap! on-screen-inputs-cursor conj key)
                     (publish force-recalculation nil)
                     )
                   state)
   :will-unmount (fn [state]
                   (let [[{:keys [key]}] (:rum/args state)]
                     (swap! on-screen-inputs-cursor disj key)
                     (publish force-recalculation nil))
                   state)
   })


(def treatment-monitor
  "A mixin which keeps track of treatment inputs present in the user interface.
  Currently tracks both fully qualified treatments (with a treatment options suffix)
  and treatments with this suffix stripped off."
  {
   :did-mount    (fn [state]
                   (let [[{:keys [key]} _] (:rum/args state)]
                     (swap! on-screen-treatments-cursor conj key))
                   state)
   :will-unmount (fn [state]
                   (let [[{:keys [key]} _] (:rum/args state)]
                     (swap! on-screen-treatments-cursor disj #{key}))
                   state)
   })


