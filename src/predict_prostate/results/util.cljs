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
;; Cloure scale designed in chroma.js
;;
(def cat-scale-6-0 ["#ffcc0" "#ff8888" "#00cdf2" "#D838B9" "#008600" "#272a75"])
;; http://gka.github.io/palettes/#diverging|c0=darkblue,blue,darkorange|c1=lightblue,teal,dd1493|steps=6|bez0=1|bez1=1|coL0=1|coL1=1
(def cat-scale-6-1 ["#00008b" "#8722ae" "#e16665"   "#95c6d2" "#7e9eac" "#dd1493"])
(def cat-scale-6-2 ["#00008b" "#77008b" "#af1e83" "#d53f73" "#eb5e5a" "#f17b31"])
(def cat-scale-6-3 ["#00008b" "#e16665" "#8722ae"  "#95c6d2" "#7e9eac" "#dd1493"])
;; http://gka.github.io/palettes/#diverging|c0=darkblue,blue,darkorange|c1=6ce5ff,teal,dd1493|steps=6|bez0=1|bez1=1|coL0=1|coL1=1
(def cat-scale-6-4 ["#00008b" "#e16665" "#8722ae"  "#5fd1e6" "#67a4b6" "#dd1493"])
;; http://gka.github.io/palettes/#diverging|c0=0000aa,blue,darkorange|c1=6ce5ff,teal,dd1493|steps=6|bez0=1|bez1=1|coL0=1|coL1=1
(def cat-scale-6-5 ["#0000aa" "#e56961" "#9427b3"  "#5fd1e6" "#67a4b6" "#dd1493"])
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

(def fills-by-treatment (zipmap ["trastuzumab" "chemotherapy" "hormone-therapy" "surgery"] fills))

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
  (fill (- 2 index))
  )

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

