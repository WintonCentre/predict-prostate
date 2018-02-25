(ns common.utils)

(defn deltas [start v]
  "Calculate deltas of a seq, inserting start as the first value to compare"
  (into [] (map (fn [[a b]] (- b a)) (partition 2 1 (cons start v)))))