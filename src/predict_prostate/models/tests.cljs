(ns predict-prostate.models.tests
  (:require [predict-prostate.models.prostate-release :refer [run-prostate]]
            [ajax.core :refer [GET]]
            [cljs.reader :as edn]))

(defn clj-stata
  "Tests one case against the stata generated output"
  [{:keys [stata-in stata-out]}]
  (let [clj-res (-> (run-prostate stata-in)
                    (update :PCSsurvival #(nth % 0))
                    (update :pred-PC-cum #(nth % 1))
                    (update :pred-NPC-cum #(nth % 1))
                    (update :NPC-survival #(nth % 1)))
        diff (merge-with - clj-res stata-out)]
    diff))

(defn test-all-cases
  "Tests all cases and returns failing test cases"
  [c]
  (let [failing-cases (filterv #(some (fn [x] (> x 0.000001)) (vals (clj-stata %))) c)]
    (cond
      (= [] failing-cases) (js/console.log "All" (count c) "model tests are passing.")
      :else (js/console.log "Some tests are failing." (str failing-cases)))))

(defn file-error [{:keys [status status-text]}]
  (.log js/console (str "file error: " status " " status-text)))

(defn get-test-cases
  "read test cases from a url."
  [url {:keys [handler]}]
  (GET url {:error-handler file-error                      ;on-error
            :handler       handler
            :format        :transit                        ;:transit
            :headers {"Cache-Control" "no-store"}
            }))

(comment
  (def cases
    [{:stata-in {:age 57, :n 10, :psa 88.68037946090843, :biopsy-cores-involved 511758, :biopsy-done 1, :charlson-comorbidity 0, :biopsy-cores-taken 1000000, :primary-rx 0, :t-stage 1, :grade-group 5, :brca 1}, :stata-out {:PCSsurvival ".98674697", :pred-PC-cum ".013230884", :pred-NPC-cum ".0019078079", :NPC-survival ".99808902"}}
     {:stata-in {:age 57, :n 15, :psa 98.6835926753496, :biopsy-cores-involved 833231, :biopsy-done 1, :charlson-comorbidity 0, :biopsy-cores-taken 1000000, :primary-rx 1, :t-stage 3, :grade-group 2, :brca 0}, :stata-out {:PCSsurvival ".99808168", :pred-PC-cum ".001916465", :pred-NPC-cum ".0019091695", :NPC-survival ".99808902"}}
     {:stata-in {:age 45, :n 15, :psa 24.750293581194715, :biopsy-cores-involved 214505, :biopsy-done 1, :charlson-comorbidity 0, :biopsy-cores-taken 1000000, :primary-rx 1, :t-stage 3, :grade-group 1, :brca 1}, :stata-out {:PCSsurvival ".99901557", :pred-PC-cum ".00098411122", :pred-NPC-cum ".0004386965", :NPC-survival ".99956119"}}
     {:stata-in {:age 59, :n 5, :psa 54.90078734695496, :biopsy-cores-involved 419415, :biopsy-done 1, :charlson-comorbidity 1, :biopsy-cores-taken 1000000, :primary-rx 0, :t-stage 1, :grade-group 5, :brca 1}, :stata-out {:PCSsurvival ".98873144", :pred-PC-cum ".011231656", :pred-NPC-cum ".0046021445", :NPC-survival ".99538273"}}
     {:stata-in {:age 67, :n 15, :psa 6.304467015092829, :biopsy-cores-involved 332829, :biopsy-done 1, :charlson-comorbidity 1, :biopsy-cores-taken 1000000, :primary-rx 0, :t-stage 3, :grade-group 5, :brca 1}, :stata-out {:PCSsurvival ".98712665", :pred-PC-cum ".012792476", :pred-NPC-cum ".012194422", :NPC-survival ".98772848"}}
     {:stata-in {:age 49, :n 10, :psa 56.87237531381666, :biopsy-cores-involved 419415, :biopsy-done 1, :charlson-comorbidity 0, :biopsy-cores-taken 1000000, :primary-rx 1, :t-stage 4, :grade-group 4, :brca 0}, :stata-out {:PCSsurvival ".99822879", :pred-PC-cum ".0017702978", :pred-NPC-cum ".00071633066", :NPC-survival ".99928331"}}
     {:stata-in {:age 54, :n 5, :psa 18.72962680067738, :biopsy-cores-involved 419415, :biopsy-done 1, :charlson-comorbidity 0, :biopsy-cores-taken 1000000, :primary-rx 0, :t-stage 2, :grade-group 5, :brca 0}, :stata-out {:PCSsurvival ".99628258", :pred-PC-cum ".0037138155", :pred-NPC-cum ".001321733", :NPC-survival ".99867696"}}
     {:stata-in {:age 35, :n 5, :psa 78.68497321001044, :biopsy-cores-involved 419415, :biopsy-done 1, :charlson-comorbidity 0, :biopsy-cores-taken 1000000, :primary-rx 0, :t-stage 4, :grade-group 4, :brca 1}, :stata-out {:PCSsurvival ".9920491", :pred-PC-cum ".0079498654", :pred-NPC-cum ".00012869922", :NPC-survival ".99987131"}}
     {:stata-in {:age 81, :n 15, :psa 65.84819880840398, :biopsy-cores-involved 91944, :biopsy-done 1, :charlson-comorbidity 1, :biopsy-cores-taken 1000000, :primary-rx 0, :t-stage 1, :grade-group 4, :brca 0}, :stata-out {:PCSsurvival ".99706537", :pred-PC-cum ".0029263659", :pred-NPC-cum ".066272773", :NPC-survival ".93354046"}}
     {:stata-in {:age 62, :n 15, :psa 81.03150548903464, :biopsy-cores-involved 419415, :biopsy-done 1, :charlson-comorbidity 1, :biopsy-cores-taken 1000000, :primary-rx 1, :t-stage 3, :grade-group 3, :brca 1}, :stata-out {:PCSsurvival ".99562901", :pred-PC-cum ".0043594576", :pred-NPC-cum ".0066467952", :NPC-survival ".9933356"}}
     {:stata-in {:age 46, :n 5, :psa 69.93799566212054, :biopsy-cores-involved 419415, :biopsy-done 1, :charlson-comorbidity 1, :biopsy-cores-taken 1000000, :primary-rx 1, :t-stage 1, :grade-group 1, :brca 0}, :stata-out {:PCSsurvival ".99955821", :pred-PC-cum ".00044167764", :pred-NPC-cum ".00093864911", :NPC-survival ".99906105"}}
     {:stata-in {:age 40, :n 5, :psa 62.131664527085604, :biopsy-cores-involved 725640, :biopsy-done 1, :charlson-comorbidity 1, :biopsy-cores-taken 1000000, :primary-rx 0, :t-stage 1, :grade-group 4, :brca 0}, :stata-out {:PCSsurvival ".99757951", :pred-PC-cum ".002419583", :pred-NPC-cum ".0004497089", :NPC-survival ".9995501"}}
     {:stata-in {:age 86, :n 15, :psa 67.56349782999848, :biopsy-cores-involved 259742, :biopsy-done 1, :charlson-comorbidity 1, :biopsy-cores-taken 1000000, :primary-rx 1, :t-stage 4, :grade-group 1, :brca 0}, :stata-out {:PCSsurvival ".99741513", :pred-PC-cum ".0025783379", :pred-NPC-cum ".1189565", :NPC-survival ".88074178"}}
     {:stata-in {:age 54, :n 10, :psa 19.035711350943373, :biopsy-cores-involved 743428, :biopsy-done 1, :charlson-comorbidity 1, :biopsy-cores-taken 1000000, :primary-rx 1, :t-stage 2, :grade-group 1, :brca 1}, :stata-out {:PCSsurvival ".99812967", :pred-PC-cum ".0018683333", :pred-NPC-cum ".002500416", :NPC-survival ".9974969"}}
     {:stata-in {:age 56, :n 5, :psa 32.78588166426538, :biopsy-cores-involved 419415, :biopsy-done 1, :charlson-comorbidity 0, :biopsy-cores-taken 1000000, :primary-rx 1, :t-stage 1, :grade-group 1, :brca 1}, :stata-out {:PCSsurvival ".99877328", :pred-PC-cum ".0012258532", :pred-NPC-cum ".0016893627", :NPC-survival ".99830943"}}
     {:stata-in {:age 79, :n 15, :psa 86.59161029684923, :biopsy-cores-involved 419415, :biopsy-done 1, :charlson-comorbidity 1, :biopsy-cores-taken 1000000, :primary-rx 0, :t-stage 4, :grade-group 2, :brca 1}, :stata-out {:PCSsurvival ".98363227", :pred-PC-cum ".016163604", :pred-NPC-cum ".051733959", :NPC-survival ".9476127"}}
     {:stata-in {:age 53, :n 5, :psa 22.309582922176542, :biopsy-cores-involved 419415, :biopsy-done 1, :charlson-comorbidity 1, :biopsy-cores-taken 1000000, :primary-rx 0, :t-stage 4, :grade-group 1, :brca 1}, :stata-out {:PCSsurvival ".9960202", :pred-PC-cum ".0039741113", :pred-NPC-cum ".0022113095", :NPC-survival ".99778557"}}
     {:stata-in {:age 92, :n 15, :psa 98.31244913416086, :biopsy-cores-involved 419415, :biopsy-done 1, :charlson-comorbidity 1, :biopsy-cores-taken 1000000, :primary-rx 0, :t-stage 2, :grade-group 1, :brca 1}, :stata-out {:PCSsurvival ".98338014", :pred-PC-cum ".016362041", :pred-NPC-cum ".22925976", :NPC-survival ".76712775"}}
     {:stata-in {:age 75, :n 5, :psa 51.252430930559676, :biopsy-cores-involved 915855, :biopsy-done 1, :charlson-comorbidity 0, :biopsy-cores-taken 1000000, :primary-rx 1, :t-stage 3, :grade-group 4, :brca 0}, :stata-out {:PCSsurvival ".994578", :pred-PC-cum ".0053996383", :pred-NPC-cum ".017180255", :NPC-survival ".98274857"}}
     {:stata-in {:age 72, :n 15, :psa 43.69854304631768, :biopsy-cores-involved 388573, :biopsy-done 1, :charlson-comorbidity 1, :biopsy-cores-taken 1000000, :primary-rx 1, :t-stage 1, :grade-group 5, :brca 0}, :stata-out {:PCSsurvival ".99688697", :pred-PC-cum ".0031045307", :pred-NPC-cum ".022480862", :NPC-survival ".97745746"}}
     {:stata-in {:age 85, :n 5, :psa 77.33509541764772, :biopsy-cores-involved 419415, :biopsy-done 1, :charlson-comorbidity 0, :biopsy-cores-taken 1000000, :primary-rx 0, :t-stage 3, :grade-group 3, :brca 0}, :stata-out {:PCSsurvival ".99124891", :pred-PC-cum ".0086846277", :pred-NPC-cum ".057174005", :NPC-survival ".9423883"}}])

  (clj-stata (nth cases 15))
  (test-all-cases cases)
  (get-test-cases "/test-runs.txt"
                  {:handler #(println (edn/read-string %))}
                  #_{:on-error #(put! err-chan %)
                     :handler  #(put! static-chan %)})
  ,)