(ns predict-prostate.results.util
  (:require [clojure.string :refer [index-of join]]
            [goog.color :as col :refer [parse lighten rgbToHex hexToRgb rgbArrayToHex blend]]))


;;;
;; Most browsers do not print background colours without the user setting a preference to do so.
;; We can paint divs with a background image, but we need to generate them algorithimcally.
;; Let's have a go at making dataURLs to paint backgrounds...
;;
;; See http://jsfiddle.net/LPxrT/
;;
(defn encode-triplet [e1 e2 e3]
  (let [keys (into [] "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=")
        enc1 (bit-shift-right e1 2)
        enc2 (bit-or (bit-shift-left (bit-and e1 3) 4) (bit-shift-right e2 4))
        enc3 (bit-or (bit-shift-left (bit-and e2 15) 2) (bit-shift-right e3 6))
        enc4 (bit-and e3 63)]
    (join [(keys enc1) (keys enc2) (keys enc3) (keys enc4)])
    ))

(defn encode-rgb [r g b]
  (join [(encode-triplet 0 r g) (encode-triplet b 255 255)]))

(defn generate-pixel [encoded-color]
  (join ["data:image/gif;base64,R0lGODlhAQABAPAA" encoded-color "/yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="]))

(defn fill-data-url [r g b]
  (generate-pixel (encode-rgb r g b)))

(comment
  (encode-triplet 0 0 0)
  ;=> "AAAA"

  (encode-triplet 255 128 1)
  ;=> "/4AB"
  )

(def dark-fill #js [109 63 148])                            ;"mid-blue-theme"

(def light-fill #js [0 176 207])

(def callout-fill-array #js [238 196 128])

(def callout-fill (rgbArrayToHex callout-fill-array))

(comment
  (lighten (hexToRgb "#DD8800") 0.5)
  (rgbToHex (lighten (hexToRgb "#DD8800") 0.5))
  (rgbToHex #js [238 196 128])
  )

(comment
  (rgbArrayToHex dark-fill)
  (rgbArrayToHex light-fill)
  (fill 0)                                                ;=> light-fill
  (fill 1)
  (fill 2)
  (fill 3)
  )

(def dashed-stroke "#FA0")
;;
;; Colour scale designed in chroma.js, then heavily modified!
;;
(def cat-scale-6-6 ["#0000aa"
                    "#00afef"
                    ;"#5fd1e6"
                    "#ffffff"           ;"#e56961" "#9427b3" "#67a4b6" "#dd1493"
                    ])

(def fills (into [] (reverse cat-scale-6-6)))

#_(def fills )

(defn fill
  ([index]
   (fills index))
  )

(defn stepsToRGBArray
  [index]
  (hexToRgb (fill index)))

(defn data-fill [index]
  "Generates a data-url in steps between dark-fill and light-fill."
  (apply fill-data-url (stepsToRGBArray index)))

(defn callout-data-fill []
  (apply fill-data-url callout-fill-array)
  )

(comment
  "these urls should display in browsers as the basic stepped colours"
  (data-fill 0)
  ; => "data:image/gif;base64,R0lGODlhAQABAPAAAHG03P///yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="

  (data-fill 1)
  ; => "data:image/gif;base64,R0lGODlhAQABAPAAAGaMwv///yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="

  (data-fill 3)
  ; => "data:image/gif;base64,R0lGODlhAQABAPAAAFA8j////yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
  )

(def without-stroke {:stroke dashed-stroke :strokeDasharray "8,8" :strokeWidth 5 :strokeLinecap "round"})

(def min-label-percent 3)

(defn treatment-fills [index]
  "reverse order of fills for treatment plot"
  (fill (- (dec (count fills)) index))
  )

(def over-estimate-fill) "#99eeff"
(def under-estimate-fill "#88ddff")

; use a line to indicate survival without cancer
(def use-line true)


;;
;; models may recalculate data based on what is required for the currently selected presentation
;;

(defn clip [{:keys [value min max]
             :or   {value 0 min 0 max 10}}]
  "clip a value to be between min and max inclusively"
  (if (> value max)
    max
    (if (< value min)
      min
      value)))

(defn toPrecision
  [f & [high]]
  (js/parseFloat (.toPrecision (js/Number. f) (if (>= f 10) 2 (if high 2 1)))))


(defn avoid-decimals [d & [high]]
  "return a string representation of a number such as a percentage."
  (let [p (if (< d 10) (if high 1 0) 0)]
    (.toFixed (js/Number. d) p)))

(defn one-dp [d p]
  "return a string representation of a number such as a percentage."
  (.toFixed (js/Number. d) p))

(defn to-percent
  "convert float fraction to a decimal percent value at full precision"
  [f]
  (* 100 f))


(comment
  (to-percent 0.0032 false)                                 ;=> 0.3
  (to-percent 0.0032 true)                                  ;=> 0.32
  (to-percent 0.0032)                                       ;=> 0.3
  (to-percent 0.2345 true)
  (to-percent 0.002345)
  )

