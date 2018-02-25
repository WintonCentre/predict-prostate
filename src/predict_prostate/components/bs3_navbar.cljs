(ns predict-prostate.components.bs3-navbar
  (:require [rum.core :as rum]
            [predict-prostate.router :refer [router hash-fragment]]
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
     (when logo [:img.navbar-brand {:src logo}])]
    (collapsing-navbar {:id id} navbar-menu)]
   ])


;==============

(defrecord Nav-item [text on-click target])

(defn target->url [target]
  (str hash-fragment (apply r/resolve router target)      ;"/" (name target)
       ))

(defn make-nav-item [{:keys [text on-click target] :as item}]
  ;(prn target (rum/react route))
  [:li {:class-name (when (= target (rum/react route)) "active")
        }
   [:a.navbar.btn {:on-click    #(on-click target)
                   :data-toggle "collapse"
                   :data-target ".navbar-collapse.in"
                   :href        (target->url target)} text]])

(def navigate-to (partial publish route-change)
  ;(r/navigate! router target nil nil)
  )

(def nav-items [
                (Nav-item. "Home" navigate-to [:home nil nil])
                (Nav-item. "About" navigate-to [:about nil nil])
                (Nav-item. "Patient Information" navigate-to [:patient nil nil])
                (Nav-item. "Clinician Information" navigate-to [:clinician nil nil])
                (Nav-item. "Predict Tool" navigate-to [:tool nil nil])
                ])

;================
(rum/defc simple-navbar < rum/static rum/reactive [[menu-items]]
  (navbar {:id         "navbar"
           :class-name "navbar-inverse"
           :logo       nil}
          (->> menu-items
               (map make-nav-item)
               (reduce conj [:ul.nav.navbar-nav])
               )
          ))

(comment
  (reduce conj [:ul.nav.navbar-nav] (map make-nav-item nav-items))

  (->> nav-items
       (map make-nav-item)
       (reduce conj [:ul.nav.navbar-nav]))
  )

(rum/defc hamburger-navbar []
  (simple-navbar [nav-items]))



(rum/defc hamburger-navbar* []
  [:nav.navbar.navbar-inverse
   [:.container
    [:.navbar-header
     [:button.navbar-toggle {:type        "button"
                             :data-toggle "collapse"
                             :data-target "#navbar"}
      (map (fn [i] [:span.icon-bar {:key i}]) (range 3))]
     #_[:img.navbar-brand {:style {:padding 10} :src "/assets/logo-neg.png" }]]
    [:#navbar.collapse.navbar-collapse
     [:ul.nav.navbar-nav
      [:li.active
       [:a {:href "#"} "Home"]]
      [:li.dropdown {:key 1}
       [:a.dropdown-toggle {:data-toggle "dropdown"
                            :href        "#"}
        "Menu " [:span.caret]]
       [:ul.dropdown-menu
        [:li {:key 1} [:a.link {:href "#/News"} "News"]]
        [:li {:key 2} [:a {:href "#"} "Page 1-2"]]
        [:li {:key 3} [:a {:href "#"} "Page 1-3"]]]]
      [:li [:a {:key 2
                :href "#"} "Page 2"]]
      [:li [:a {:key 3
                :href "#"} "Page 3"]]]]]
   ])
