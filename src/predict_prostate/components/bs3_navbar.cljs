(ns predict-prostate.components.bs3-navbar
  (:require [rum.core :as rum]
            [predict-prostate.router :refer [router set-location]]
            [bide.core :as r]
            [predict-prostate.state.run-time :refer [route route-change]]
            [pubsub.feeds :refer [publish]]))


(rum/defc collapsing-navbar < rum/static [{:keys [id] :as props} navbar-menu]
  [:.collapse.navbar-collapse {:id id}
   navbar-menu])


(rum/defc navbar [{:keys [id class-name logo] :as props} navbar-menu]
  [:nav {:class-name (str "navbar " class-name)}
   [:.container
    [:.navbar-header
     [:button.navbar-toggle {:type        "button"
                             :data-toggle "collapse"
                             :data-target (str "#" id)}
      (map (fn [i] [:span.icon-bar {:key i}]) (range 3))]
     (when logo [:img.navbar-brand {:src logo :alt "logo"}])]
    (collapsing-navbar {:id id} navbar-menu)]
   ])


(defrecord Nav-item [text on-click target])


(defn navigate-to [target]
  (println "navigating to " target)
  (publish route-change target))


(defn make-nav-item [key rt {:keys [text on-click target submenus] :as item}]
  (if (seq submenus)
    [:li {:key key :tab-index 0  :style {:cursor "pointer"} :class-name (str "dropdown" (when (= (first target) (first rt)) " active"))}
     ; removing data-toggle in next line means clicking on a dropdown button does not toggle open status
     [:a.dropdown-toggle {#_#_:data-toggle "dropdown"
                          :on-click #(on-click target)} text [:span.caret]]
     [:ul.dropdown-menu
      (map-indexed #(make-nav-item %1 rt %2) submenus)]]
    [:li {:key key :tab-index 0 :style {:cursor "pointer"} :class-name (when (= (first target) (first rt)) "active")}
     [:a {:on-click    #(on-click target)
          :data-toggle "collapse"
          :data-target ".navbar-collapse.in"
          } text]]))


(def nav-items
  [(Nav-item. "Home" navigate-to [:home])
   (assoc (Nav-item. "About Predict" navigate-to [:about {:page :overview :section :about}])
     :submenus [(Nav-item. "About Predict" navigate-to [:about {:page :overview :section :about}])
                (Nav-item. "– Who is it for?" navigate-to [:about {:page :overview :section :whoisitfor}])
                (Nav-item. "– How Predict works" navigate-to [:about {:page :overview :section :howpredictworks}])
                (Nav-item. "– Who built Predict" navigate-to [:about {:page :overview :section :whobuiltpredict}])
                (Nav-item. "Technical" navigate-to [:about {:page :technical}])
                (Nav-item. "– Development History" navigate-to [:about {:page :technical :section :history}])
                (Nav-item. "– Publications" navigate-to [:about {:page :technical :section :publications}])
                (Nav-item. "FAQs" navigate-to [:about {:page :faqs}])])


   (Nav-item. "Predict Tool" navigate-to [:tool])
   (Nav-item. "Contact" navigate-to [:contact])
   (assoc (Nav-item. "Legal" navigate-to [:legal {:page :disclaimer}])
     :submenus [(Nav-item. "Disclaimer" navigate-to [:legal {:page :disclaimer}])
                (Nav-item. "Algorithm" navigate-to [:legal {:page :algorithm}])
                (Nav-item. "Privacy & Data Protection" navigate-to [:legal {:page :privacy}])])])


(rum/defc simple-navbar < rum/static rum/reactive [[menu-items]]
  (let [rt (rum/react route)]
    [:div
     (navbar {:id         "navbar"
              :class-name "navbar-inverse"
              :logo       nil}
             [:ul.nav.navbar-nav
              (map-indexed #(make-nav-item %1 rt %2) menu-items)])]))

(defn scroll-handler
  "Returns a 'sticky' scroll event handler for a dom-node"
  [node transition-at tolerance]
  (fn [_]
    (let [y-off (aget js/window "pageYOffset")
          c (+ transition-at (.-offsetTop node))]
      (if (>= y-off (+ c tolerance))
        (.add (.-classList node) "navbar-fixed-top")
        (when (<= y-off (- c tolerance))
          (.remove (.-classList node) "navbar-fixed-top"))))))

(def sticky-mixin
  {:did-mount    (fn [state]
                   (let [comp (:rum/react-component state)
                         dom-node (js/ReactDOM.findDOMNode comp)
                         #_#_sh (scroll-handler dom-node 100)
                         sh (scroll-handler dom-node 60 40)]
                     (js/addEventListener "scroll" sh)
                     (assoc state ::scroll-handler sh
                                  ::y-off (atom (aget js/window "pageYOffset")))))

   :will-unmount (fn [state]
                   (let [comp (:rum/react-component state)
                         dom-node (js/ReactDOM.findDOMNode comp)
                         sh (::scroll-handler state)]
                     (js/removeEventListener "scroll" sh)
                     (dissoc state ::scroll-handler ::y-off)))})


(comment


  (defn scroll-handler
    "Returns a 'sticky' scroll event handler for a dom-node"
    [node transition-at]
    (fn [_]
      (if (>= (aget js/window "pageYOffset") (+ transition-at (.-offsetTop node)))
        (.add (.-classList node) "navbar-fixed-top"
              )
        (.remove (.-classList node) "navbar-fixed-top"
                 )))
    )

  (def sticky-mixin
    {:did-mount    (fn [state]
                     (let [comp (:rum/react-component state)
                           dom-node (js/ReactDOM.findDOMNode comp)
                           sh (scroll-handler dom-node 100)]
                       (js/addEventListener "scroll" sh)
                       (assoc state ::scroll-handler sh)))

     :will-unmount (fn [state]
                     (let [comp (:rum/react-component state)
                           dom-node (js/ReactDOM.findDOMNode comp)
                           sh (::scroll-handler state)]
                       (js/removeEventListener "scroll" sh)
                       (dissoc state ::scroll-handler)))}))

(rum/defc hamburger-navbar < sticky-mixin []
  [:nav
   (simple-navbar [nav-items])])
