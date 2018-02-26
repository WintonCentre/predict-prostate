(ns predict-prostate.router
  (:require [bide.core :as r]
            [predict-prostate.state.run-time :refer [route]])
  )

(enable-console-print!)

(def use-hash-fragment true)
(def hash-fragment (if use-hash-fragment "#" ""))

(def router
  (r/router [["/" :home]
             ["/home" :home]
             ["/tool" :tool]
             ]))

(defn on-navigate
  "A function which will be called on each route change."
  [name params query]
  (reset! route [name params query])
  )

(r/start! router {:default :not-found
                  :on-navigate on-navigate})

(comment

  (r/match router "/")
  ;=> [:home nil nil]

  (r/match router "")
  ;=> [:home nil nil]

  (r/match router "/news")
  ;[:news nil nil]

  (r/match router "/tools")
  ;[:news nil nil]


  )