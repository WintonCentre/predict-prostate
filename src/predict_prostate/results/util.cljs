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
    (join [(keys enc1) (keys enc2) (keys enc3) (keys enc4)])))

(defn encode-rgb [r g b]
  (join [(encode-triplet 0 r g) (encode-triplet b 255 255)]))

(defn generate-pixel [encoded-color]
  (join ["data:image/gif;base64,R0lGODlhAQABAPAA" encoded-color "/yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="]))

(defn fill-data-url
  "Generates a 1 px data url from an rgb colour"
  [r g b]
  (generate-pixel (encode-rgb r g b)))

(defn hex-data-url
  "Generates a 1 px data url from a hex colour"
  [hex]
  (apply fill-data-url (hexToRgb hex)))

(def dashed-stroke "#F40")

;;
;; Colour scale designed in chroma.js, then heavily modified!
;;
(def above-dashed "#ffffff")
(def conservative-fill "#0000aa")
(def radical-fill "#00afef")
(def radical-range "#88ddff")
(def radical-below "#88ddff")
(def radical-above "#beebff")

(def fills-by-style
  {:area1 [above-dashed
           radical-fill
           conservative-fill]
   :line1 [above-dashed
           radical-range
           conservative-fill]
   :line2 [above-dashed
           radical-above
           radical-below
           conservative-fill]})

(def fills-by-style*
  {:area1 {:above above-dashed
           :radical-above above-dashed
           :radical radical-fill
           :conservative conservative-fill}
   :line1 {:above above-dashed
           :radical-above radical-range
           :radical radical-range
           :conservative conservative-fill}
   :line2 {:above above-dashed
           :radical-above radical-above
           :radical radical-below
           :conservative conservative-fill}})

(def fills* ["#ffffff"
            "#00afef"
            "#0000aa"])

(def fills ["#ffffff"
            "#99ffff"
            "#33bbee"])

(comment
  (def f1 #js [136 221 255])                                ;"#88ddff"
  (def f2 #js [190 235 255])                                ;"#beebff"
  (apply rgbToHex f1)
  (apply rgbToHex f2)
  )

(def fill fills)

(defn data-fill [index]
  "Generates a 1 pixel data-url from a fill index"
  (apply fill-data-url (hexToRgb (fill index))))


; The minimum bar size before a bar label shows up
(def min-label-percent 3)


(defn treatment-fills [index]
  "reverse order of fills for treatment plot"
  (fill (- (dec (count fills)) index))
  )

(defn treatment-fills* [plot-style index]
  "reverse order of fills for treatment plot"
  (let [f (plot-style fills-by-style)]
    (f (- (dec (count f)) index)))
  )

(comment
  "these urls should display in browsers as the basic stepped colours"
  (data-fill 0)
  ; => "data:image/gif;base64,R0lGODlhAQABAPAAAHG03P///yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="

  (data-fill 1)
  ; => "data:image/gif;base64,R0lGODlhAQABAPAAAGaMwv///yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="

  (data-fill 2)
  ; => "data:image/gif;base64,R0lGODlhAQABAPAAAAAAqv///yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="

  (encode-triplet 0 0 0)
  ;=> "AAAA"

  (encode-triplet 255 128 1)
  ;=> "/4AB"

  (lighten (hexToRgb "#DD8800") 0.5)
  (rgbToHex (lighten (hexToRgb "#DD8800") 0.5))
  (rgbToHex #js [238 196 128])

  (fill 0)                                                  ;=> light-fill
  (fill 1)
  (fill 2)
  (fill 3)
  )


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

;;;
;; Alison styling
;;;
;;;
;; Some colours
(def prostate-blue "#225FB1")
(def NHS-blue "#005EB4")
(def alison-blue-1 "#d3e7fd")                               ; home page block
(def alison-blue-1-rgb [211 231 253])                       ; home page block
(def alison-blue-2 "#002e5d")                               ; navbar & footer
(def alison-blue-3 "#257ce1")                               ; h1,h2.., primary button
(def alison-blue-5 "#edf5ff")                               ; treatment options results background
(def alison-blue-4 "#ffffff")                               ; treatment options results background (reverted)
(def alison-pink "#b4078d")                               ; treatment options results background (reverted)



