(ns predict-prostate.pages.about
  (:require [rum.core :as rum]
            [predict-prostate.components.button :refer [start-button]]
            [predict-prostate.layout.header :refer [header header-banner footer footer-banner]]
            [predict-prostate.content-reader :refer [section all-subsections]]
            [predict-prostate.state.run-time :refer [route]]
            [predict-prostate.results.util :refer [alison-blue-1 alison-blue-2 alison-blue-3 alison-pink]]
            [graphics.simple-icons :refer [icon]]
            [pubsub.feeds :refer [publish]]
            [interop.utils :refer [scrollTo]]
            [predict-prostate.components.bs3-modal :refer [editor-modal]]
            ))

(def page-components {:about ["about"]
                      :overview  ["overview" "whatpredictdoes" "whoisitfor" "howpredictworks" "whobuiltpredict"]
                      :technical ["technical" "history" "preversions" "publications"]
                      })

(defn save-offsets [state]
  #_(println "*save-offsets* args" (:rum/args state))
  (let [[k _ offsets] (:rum/args state)
        comp (:rum/react-component state)
        dom-node (js/ReactDOM.findDOMNode comp)]
    (swap! offsets assoc k (.-offsetTop dom-node))
    state))

(def scroll-to-mixin {:did-mount save-offsets
                      :did-update save-offsets})

(rum/defc hr []
  [:hr {:style {:color "red"}}])

(rum/defc sectionc < scroll-to-mixin rum/static rum/reactive [k ttt offsets]
  (let [rt (rum/react route)]
    [:div {:id (name k)}
     (all-subsections ttt (name k))]))

(def scroller {:did-update (fn [state]
                             #_(println "*scroller* args" (:rum/args state))
                             (let [[_ [_ {page :page scroll-section :section}]] (:rum/args state)
                                   scroll-section (keyword scroll-section)]
                               (scrollTo (if scroll-section (get @(::offsets state) (name scroll-section)) 0))
                               )
                             state)})


(rum/defcs about
  "Renders a (text) page given the bide parsed route containing a page, and optionally a section."
  < (rum/local {} ::offsets) < rum/static scroller 
           [state ttt route]
  (let [[_ {page :page scroll-section :section}] route
        page (keyword page)
        scroll-section (keyword scroll-section)
        [_ & preamble] (section ttt "tool-preamble")]

    [:.container-fluid
     (header ttt)
     (header-banner ttt "about-preamble")

     [:#main-content.row {:tab-index -1}
      [:.col-sm-10.col-sm-offset-1.col-lg-8.col-lg-offset-2 {:style {:min-height "calc(100vh - 700px)"}}
       (when page
         (let [sec (if scroll-section
                     (map-indexed #(rum/with-key (sectionc %2 ttt (::offsets state)) %1) (page-components page))
                     (all-subsections ttt (name page)))]        ; this is needed for FAQs
           sec))]]
     (editor-modal)
     (footer-banner ttt)

     #_(if scroll-section
         (js/scroll #js {:left 0 :top (get @(::offsets state) (name scroll-section)) :behavior "smooth"})
         (js/scroll #js {:left 0 :top 0 :behavior "smooth"}))

     ;(scrollTo (if scroll-section (get @(::offsets state) (name scroll-section)) 0))

     [:.row.screen-only
      (footer)]]))




