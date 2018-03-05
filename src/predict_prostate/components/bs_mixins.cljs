(ns predict-prostate.components.bs-mixins
  (:require [interop.jsx :refer [jq$ jq$call]]))

;;
;; Rum mixins to enable bootstrap popovers and tooltips
;;

(defn ready [handler]
  (.ready (jq$ js/document) handler))

(def tt-mixin {:did-mount (fn [state]
                            (ready
                              #(do (jq$call (jq$ "[data-toggle=\"popover\"]") "popover")
                                   (jq$call (jq$ "[data-toggle = \"tooltip\"]") "tooltip")))
                            state)
               })

(def bs-popover
  {:did-mount (fn [state]
                (ready
                  #(jq$call (jq$ "[data-toggle=\"popover\"]") "popover"))
                state)
   })
