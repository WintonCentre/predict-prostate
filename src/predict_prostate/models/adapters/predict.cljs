(ns predict-prostate.models.adapters.predict
  (:require [predict-prostate.models.prostate :refer [run-prostate]]
            [clojure.string :refer [starts-with?]]
            [cljs.reader :refer [read-string]]
            [goog.object :refer [getValueByKeys]]
            ))

(defn predict-prostate
  "Run the prostate model, mapping input factors to numeric model parameters."
  [input-map]
  (-> input-map
      (update :age read-string)
      (update :n (constantly 10))
      (update :psa read-string)
      (update :t-stage identity)
      (update :grade-group identity)
      (update :charlson-comorbidity identity)
      (update :biopsy50 #(if (= :unknown %) 0 %))
      (assoc :protect 0)
      (run-prostate)))

(comment

  (def results
    {:conservative
     {:pred-PC-cum  '(0 0.00209439167481409 0.0068631030425986275 0.013751329202967382 0.022479232057763355 0.032849141591410363 0.04470083770029029 0.057894651946130055 0.07230334252302753 0.08780755798557525 0.10429297055204881),
      :pred-NPC-cum '(0 0.0002182447271967578 0.000544287475592099 0.0009307275902806942 0.0013662580043685233 0.0018484505910423502 0.002380109932274687 0.002968343202003146 0.0036245266082841282 0.004364779246955558 0.005210877168111608),
      :NPC-survival '(1 0.9997817121199226 0.9994554593459529 0.9990685368375318 0.9986321524197489 0.9981486208199123 0.9976149894821492 0.9970239420761796 0.9963637933269195 0.9956179553493606 0.9947639276902916)},
     :radical-low
     {:pred-PC-cum  '(0 0.0007335583499764896 0.002407602686350095 0.004835063469570774 0.007926895894052616 0.011624081339670616 0.01588165160115533 0.02066252974225701 0.0259344864220196 0.031668383409725595 0.03783702781932995),
      :pred-NPC-cum '(0 0.00021825115659365523 0.000544316212833242 0.000930799814108788 0.0013664002731486977 0.0018486971474197707 0.0023805071975003395 0.0029689574762498195 0.0036254571263068746 0.004366180648653087 0.005212998991071756),
      :NPC-survival '(1 0.9997817121199226 0.9994554593459529 0.9990685368375318 0.9986321524197489 0.9981486208199123 0.9976149894821492 0.9970239420761796 0.9963637933269195 0.9956179553493606 0.9947639276902916)},
     :radical
     {:pred-PC-cum  '(0 0.0010121556874419695 0.0033208892722127277 0.006666009669913535 0.010922079710044877 0.01600471235091617 0.021848603059883027 0.028399086041023668 0.03560797615060335 0.04343117663580254 0.0518271193008505),
      :pred-NPC-cum '(0 0.00021824868254736567 0.000544304911834677 0.0009307712038230736 0.0013663438408784236 0.0018485995864232431 0.002380350841826511 0.0029687176069217803 0.003625097434017231 0.004365645501480441 0.005212199988904085),
      :NPC-survival '(1 0.9997817121199226 0.9994554593459529 0.9990685368375318 0.9986321524197489 0.9981486208199123 0.9976149894821492 0.9970239420761796 0.9963637933269195 0.9956179553493606 0.9947639276902916)},
     :radical-high
     {:pred-PC-cum  '(0 0.0014037401627852591 0.004603579602983735 0.00923466300292725 0.015118065289657147 0.02213108709725974 0.03017695312299632 0.03917322657966766 0.049046144092173935 0.05972738307190151 0.07115196920296826),
      :pred-NPC-cum '(0 0.00021824664197662888 0.0005442958283880051 0.0009307484328346354 0.0013662990801877593 0.0018485221694604212 0.002380226355133872 0.002968525522271607 0.0036248070970956343 0.004365209233051064 0.005211540965589994),
      :NPC-survival '(1 0.9997817121199226 0.9994554593459529 0.9990685368375318 0.9986321524197489 0.9981486208199123 0.9976149894821492 0.9970239420761796 0.9963637933269195 0.9956179553493606 0.9947639276902916)}})

  (defn extract-data [results]
    (let [years (range 0 11)
          one-sum #(- 1 (+ %1 %2))
          radical-low-survival (map one-sum
                                    (get-in results [:radical-low :pred-PC-cum])
                                    (get-in results [:radical-low :pred-NPC-cum]) years)
          radical-survival (map one-sum
                                (get-in results [:radical :pred-PC-cum])
                                (get-in results [:radical :pred-NPC-cum]) years)
          radical-high-survival (map one-sum
                                     (get-in results [:radical-high :pred-PC-cum])
                                     (get-in results [:radical-high :pred-NPC-cum]) years)
          conservative-survival (map one-sum
                                     (get-in results [:conservative :pred-PC-cum])
                                     (get-in results [:conservative :pred-NPC-cum]) years)]
      {:dotted-orange         (get-in results [:conservative :NPC-survival])
       :conservative-survival conservative-survival
       :radical-survival      radical-survival
       :radical-benefit       (map - radical-survival conservative-survival)
       :radical-benefit-low   (map - radical-low-survival conservative-survival)
       :radical-benefit-high  (map - radical-high-survival conservative-survival)
       }))

  (extract-data results)
  )
