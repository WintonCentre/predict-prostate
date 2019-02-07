(ns predict-prostate.router
  (:require [bide.core :as r]
            [predict-prostate.state.run-time :refer [route route-change]]
            [pubsub.feeds :refer [publish]]
            )
  )

(enable-console-print!)

(def old-browser (goog.object.get js/window "oldBrowser"))

(defn use-hash-fragment [] (or goog.DEBUG old-browser))

(defn docroot [url] (str "/" url))

(def base (if goog.DEBUG "" ""))

; internal hrefs
(defn iref [url] (str (if (use-hash-fragment) "#" "") base url))

(defn rooted [url] (str (if (use-hash-fragment) "" "") url))
;(def rooted identity)

(def router
  "Longest path must be first."
  (r/router
    [
     [(rooted "/") :home]
     [(rooted "/home") :home]
     [(rooted "/about/:page/:section") :about]
     [(rooted "/about/:page") :about]
     [(rooted "/about") :about]
     [(rooted "/tool") :tool]
     [(rooted "/legal/:page") :legal]
     [(rooted "/legal") :legal]
     [(rooted "/contact") :contact]
     ]))

(defn set-location [url]
  (goog.object/set (goog.object/get js/window "location") "href" url))

(defn on-navigate
  "A function which will be called on each route change."
  [name params query]
  (-> (js/$ ".modal") (.modal "hide"))                      ;Hide any visible modals after navigation
  (reset! route [name params query]))

(def navigate-to
  (partial publish route-change))

(r/start! router {:default     (if (use-hash-fragment) :not-found :home)
                  :on-navigate on-navigate
                  :html5?      (not (use-hash-fragment))})

(comment

  (r/resolve router :about {:page "history"} nil)
  ;=> "/about/history


  )