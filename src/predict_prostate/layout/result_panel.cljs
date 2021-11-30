(ns predict-prostate.layout.result-panel
  (:require [clojure.string :refer [capitalize]]
            [rum.core :as rum]
            [predict-prostate.state.run-time :refer [active-results-pane active-results-change input-cursor]]
            [predict-prostate.layout.treatments-panel :refer [treatments-options]]
            [predict-prostate.components.panels :refer [titled-panel]]
            [predict-prostate.results.util :refer [alison-blue-1]]
            [pubsub.feeds :refer [publish]]
            [interop.jsx :refer [jsx]]
            [predict-prostate.results.table :refer [results-in-table]]
            [predict-prostate.results.curves :refer [results-in-curves]]
            [predict-prostate.results.charts :refer [results-in-charts]]
            [predict-prostate.results.icons :refer [results-in-icons*]]
            [predict-prostate.results.text :refer [results-in-text]]
            [predict-prostate.results.sidefx :refer [results-in-sidefx]]
            [predict-prostate.content-reader :refer [all-subsections]]
            ))

(defn tab-label-key
  "Lookup/edit key for a tab given a label or a key for that label
  ; (tab-label-key :curve)
  ; => [:tab-label/curve \"Curve\"]
  "
  [label-key]
  (let [label (name label-key)]
    [(keyword (str "tab-label/" label)) (capitalize label)]))

(defn safe-check
  "Check whether kn1 and kn2 share same names (2-arity) or some other property f (3-arity)."
  ([kn1 kn2]
   (safe-check kn1 kn2 name))
  ([kn1 kn2 f]
   (= (f kn1) (f kn2))))

(rum/defc result-tab-button < rum/reactive [ttt label-key]
  [:li {:role     "presentation"
        :class    (if (safe-check (rum/react active-results-pane) label-key) "active" nil)
        :on-click #(publish active-results-change (name label-key))
        :style    {:cursor           "pointer"
                   :border-radius    "3px"
                   :background-color "#def"}
        :key      (name label-key)
        }
   [:a {:aria-controls (name label-key) :role "tab"
        ;:data-on "click" :data-event-category "Results Tab" :data-event-action label       ; Old html-tag trigger.
        } (ttt (tab-label-key label-key))]
   ])

(rum/defc result-tab-pane < rum/reactive [label content]
  [:div {:id    label :role "tabpanel"
         :class (str "tab-pane" (if (= (rum/react active-results-pane) label) "active" nil))
         }
   (when (= (rum/react active-results-pane) label)
     (if content
       (do (if (exists? js/window.ga)
             (.ga js/window "send" "event" "Results Tab" label)
             ) (content))
       [:p "No content yet"])
     ;(.log js/console "content called: " label)
     )
   ]
  )

(rum/defc result-tabs < rum/static [ttt]
  [:ul.nav.nav-pills {:role  "tablist"
                      :style {:font-size "16px"}}
   (map #(rum/with-key (result-tab-button ttt %) (name %)) [:charts
                                                            :icons
                                                            :curves
                                                            :table 
                                                            :texts])
   #_[:a {
        :ga-on "click" :ga-event-category "Results Tab" :ga-event-action "test"
        :style {:background-color "green"}
        } "Some test clickable item"]
   ])

(rum/defc result-panes < rum/static [ttt]
  [:.tab-content
   (result-tab-pane "charts" #(results-in-charts {:title (ttt [:chart/title "Overall Survival"]) :ttt ttt}))
   (result-tab-pane "icons" #(results-in-icons* {:ttt ttt}))
   (result-tab-pane "curves" #(results-in-curves {:ttt ttt}))
   (result-tab-pane "table" #(results-in-table ttt))
   (result-tab-pane "texts" #(results-in-text {:ttt ttt}))
   ])

(rum/defc result-panel < rum/reactive [ttt]
  [:div#results
   [:h3 {:style {:margin-top 20}} "Results"]
   (result-tabs ttt)
   (treatments-options)
   (result-panes ttt)]
  )

(rum/defc side-panel [ttt]
  [:.well {:style {:margin-top 20  :background-color alison-blue-1}}
   (all-subsections ttt "tool-postamble")
   (when (#{4 5} @(input-cursor :grade-group))
     (all-subsections ttt "high-grade-group-warning"))
   (when (not= :no @(input-cursor :metastasis))
     (all-subsections ttt "metastasis-warning"))
   (all-subsections ttt "scroll-down-for")
   ])

(rum/defc results < rum/reactive [{:keys [ttt container?] :as props}]
  [:div #_(when container? {:class-name "container"})
   [:.row
    [:.col-md-6.col-md-offset-1
     (result-panel ttt)]
    [:.col-md-4
     (side-panel ttt)]
    ]])