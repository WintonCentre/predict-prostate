(ns predict-prostate.results.calculations
  (:require [predict-prostate.results.util :refer [one-dp]])
  )

(comment

  ;; Just pulling together the various visualisation specific data extractors for comparison...
  ;;
  ;; Could be rationalised?
  ;;

  (defn one-sum [x y] (* 100 (- 1 (+ x y))))


  (defn percent
    ([d]
     (str (Math.round (* 100 d)) "%"))
    ([d p]
     (str (one-dp (* 100 d) p) "%")))


  ;; CHARTS
  (defn extract-data-charts

    [title results radical? plot-style]
    (let [radical-survival (map one-sum
                                (get-in results [:radical :pred-PC-cum])
                                (get-in results [:radical :pred-NPC-cum]))
          conservative-survival (map one-sum
                                     (get-in results [:conservative :pred-PC-cum])
                                     (get-in results [:conservative :pred-NPC-cum]))]
      {:conservative-survival conservative-survival
       :radical-survival      radical-survival
       :radical-benefit       (map #(- %1 %2) radical-survival conservative-survival)

       :dotted-orange         (map #(* 100 %) (get-in results [(if radical? :radical :conservative) :NPC-survival])) ; dotted orange
       :plot-style            plot-style
       :radical               radical?
       }
      ))

  ;; CURVES
  (defn extract-data-curves [results radical?]
    (let [
          radical-survival (when radical? (map one-sum
                                               (get-in results [:radical :pred-PC-cum])
                                               (get-in results [:radical :pred-NPC-cum])))
          conservative-survival (map one-sum
                                     (get-in results [:conservative :pred-PC-cum])
                                     (get-in results [:conservative :pred-NPC-cum]))]
      [conservative-survival                                ; 0 conservative
       (when radical? radical-survival)                     ; 1 radical
       (map #(* 100 %) (get-in results [:conservative :NPC-survival]))
       ]))

  ;; TABLES
  (defn extract-data-tables [results radical? year]
    (let [conservative-survival (- 1 (+ (nth (get-in results [:conservative :pred-PC-cum]) year)
                                        (nth (get-in results [:conservative :pred-NPC-cum]) year)))
          radical-low-survival (- 1 (+ (nth (get-in results [:radical-low :pred-PC-cum]) year)
                                       (nth (get-in results [:radical-low :pred-NPC-cum]) year)))
          radical-high-survival (- 1 (+ (nth (get-in results [:radical-high :pred-PC-cum]) year)
                                        (nth (get-in results [:radical-high :pred-NPC-cum]) year)))
          radical-survival (- 1 (+ (nth (get-in results [:radical :pred-PC-cum]) year)
                                   (nth (get-in results [:radical :pred-NPC-cum]) year)))
          data {:dotted-orange (percent (nth (get-in results [:conservative :NPC-survival]) year))
                :conservative  {:overall (percent conservative-survival)
                                :benefit "-"}
                :radical       {:overall      (percent radical-survival)
                                :benefit-low  (percent (- radical-low-survival conservative-survival) 1)
                                :benefit-high (percent (- radical-high-survival conservative-survival) 1)
                                :benefit      (percent (- radical-survival conservative-survival) 1)}}]
      data))

  ;; TEXT
  (defn extract-data-text

    [results radical?]
    (let [radical-survival (map one-sum
                                (get-in results [:radical :pred-PC-cum])
                                (get-in results [:radical :pred-NPC-cum]))
          conservative-survival (map one-sum
                                     (get-in results [:conservative :pred-PC-cum])
                                     (get-in results [:conservative :pred-NPC-cum]))]
      {
       :conservative-survival conservative-survival
       :radical-survival      radical-survival
       :radical-benefit       (map #(- %1 %2) radical-survival conservative-survival)
       :dotted-orange         (map #(* 100 (- 1 %)) (get-in results [(if radical? :radical :conservative) :pred-NPC-cum]))
       }
      ))


  ;; ICONS
  (defn extract-data-icons

    [results radical?]
    (let [radical-survival (map one-sum
                                (get-in results [:radical :pred-PC-cum])
                                (get-in results [:radical :pred-NPC-cum]))
          conservative-survival (map one-sum
                                     (get-in results [:conservative :pred-PC-cum])
                                     (get-in results [:conservative :pred-NPC-cum]))]
      {
       :conservative-survival conservative-survival
       :radical-survival      radical-survival
       :radical-benefit       (map #(- %1 %2) radical-survival conservative-survival)
       :dotted-orange         (map #(* 100 %) (get-in results [:conservative :NPC-survival])) ; dotted orange
       }
      )))
