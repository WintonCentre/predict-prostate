(ns predict-prostate.models.prostate
  (:require [common.data-frame :refer [cell-apply cell-update cell-sums cell-diffs]]
            [common.utils :refer [deltas]]))

(def exp js/Math.exp)
(def ln js/Math.log)
(def pow js/Math.pow)
(def abs js/Math.abs)


; stata L 19
(defn pi-pcsm [{:keys [age psa t-stage grade-group primary-rx protect biopsy50]}]
  "gen pi-pcsm = 0.002219*((age/10)^3 -341.1652608) + 0.1066838*(ln((psa+1)/100)+1.635612967) + .1271878*(t_stage==2) + .3912962*(t_stage==3) + .5572669*(t_stage==4) + .2404877*(gradegroup==2) + .5844514*(gradegroup==3) + .840747*(gradegroup==4) + 1.480844*(gradegroup==5) + -.7277408*(primaryRx==1) + 1.070543*(primaryRx==3) + -0.46204*(Protect==1) + -0.67334*(Protect==2) + -0.5811587*(biopsy50==1) + 0.55990146*(biopsy50==2)"
  (+ (* 0.002219 (+ (pow (/ age 10) 3) -341.1652608))
     (* 0.1066838 (+ (ln (/ (inc psa) 100)) 1.635612967))
     (get {2 0.1271878
           3 0.3912962
           4 0.5572669} t-stage)
     (get {2 0.2404877
           3 0.5844514
           4 0.840747
           5 1.480844} grade-group)
     (get {1 -0.7277408
           3 1.070543} primary-rx)
     (get {1 -0.46204
           2 -0.67334} protect)
     (get {1 -0.5811587
           2 0.55990146} biopsy50)
     ))
(comment
  (pi-pcsm {:age 45 :psa 85 :t-stage 3 :grade-group 5 :primary-rx 0 :protect 0 :biopsy50 0})
  ;=> 1.4757039089297683
  )

(defn pi-npcm [{:keys [age charlson-comorbidity]}]
  "gen pi-npcm = 0.1229245*(age-69.8749646) + 0.6640308*(charlson_comorbidity==1)"
  (+ (* 0.1229245 (- age 69.8749646))
     (get {1 0.6640308} charlson-comorbidity))
  )
(comment
  (pi-npcm {:age 45 :charlson-comorbidity 1})
  ; => -2.3937117859727
  )


; using 'days' instead of 'time' so as not to shadow the clojure 'time' function
(defn days [t] (* 365 t))

#_(comment
    ; generate baseline mortality (though I don't go on to use this!?)
    ; ok to bind 'time' to a local
    (defn bs-PCSM [time]
      "exp(-17.03262 + 1311.891*(time^-2) + 1.726887*(ln(time)))"
      (exp (+ -17.03262
              (* 1311.891 (pow time -2))
              (* 1.726887 (ln time))))
      )
    (comment
      (bs-PCSM (days 10))
      ;=> 0.05682600500436472 (year 10)
      )

    (defn bs-NPCM [time]
      "exp(-12.45735 + 1.317565*(ln(time)) + 3.01e-12*(time^3))"
      (exp (+ -12.45735
              (* 1.317565 (ln time))
              (* 3.01e-12 (pow time 3))))
      )
    (comment
      (bs-NPCM (days 10))
      ;=> 0.22231086828716715 (year 10)
      ))


;gen PCS mortality, then per year, then convert to survival per year...
(defn pcsm-at-t [time pi]
  "1 - exp(-exp(pi-pcsm)*exp(-17.03262 + 1311.891*(time^-2) + 1.726887*(ln(time))))"
  (+ 1
     (- (exp (* (- (exp pi))
                (exp (+ -17.03262
                        (* 1311.891 (pow time -2))
                        (* 1.726887 (ln time)))))))))
(comment
  (pcsm-at-t (days 10)))


(defn npcm-at-t [time pi]
  "1 - exp(-exp(piNPCM)*exp(-12.45735 + 1.317565*(ln(time)) + 3.01e-12*(time^3)))"
  (+ 1
     (- (exp (* (- (exp pi))
                (exp (+ -12.45735
                        (* 1.317565 (ln time))
                        (* 3.01e-12 (pow time 3))))))))) ; 3.01e-12 !!!!

(defn run-prostate [{:keys [n age grade-group psa t-stage charlson-comorbidity primary-rx protect biopsy50]
                         :as   args}]

  (let [defaults {:n 10 :age 45 :grade-group 5 :psa 85 :t-stage 3 :charlson-comorbidity 1 :primary-rx 0 :protect 0 :biopsy50 0}
        args (merge defaults args)

        ;calculate the PCSM prognostic index (pi)
        piPCSM (pi-pcsm args)
        ; 1.4757039089297683

        ;calculate the NPCM progostic index (pi)
        piNPCM (pi-npcm args)
        ;-3.0577425859727

        ;
        ; gen PCS mortality, then per year, then convert to survival per year... L 36
        ;
        PCSMatT (map #(pcsm-at-t (days %) piPCSM) (range 1 (inc n)))
        ; (0.004696368826957453 0.015348535722248369 0.030632249443662052 0.049821202973259204 0.0723622401089552 0.09778069760891961 0.1256472677385151 0.1555640347706816 0.1871582391504335 0.22007959169657776)

        PCSM-mortrate-year (deltas 0 PCSMatT)
        ; [0.004696368826957453 0.010652166895290915 0.015283713721413683 0.019188953529597153 0.022541037135695996 0.02541845749996441 0.02786657012959548 0.029916767032166502 0.03159420437975191 0.032921352546144256]

        PCS-survival-year (map #(- 1 %) PCSM-mortrate-year)
        ; (0.9953036311730425 0.9893478331047091 0.9847162862785863 0.9808110464704028 0.977458962864304 0.9745815425000356 0.9721334298704045 0.9700832329678335 0.9684057956202481 0.9670786474538557)

        ;
        ; do the same for NPCM... L 49
        ;
        NPCMatT (map #(npcm-at-t (days %) piNPCM) (range 1 (inc n)))
        ; (0.0008435940967794764 0.0021034450705306185 0.003596050109458959 0.005277474404832394 0.007138103010569274 0.009188519090954417 0.011455884009952233 0.013983784428835522 0.016834044593207587 0.02009025121514263)

        NPCM-mortrate-year (deltas 0 NPCMatT)
        ; [0.0008435940967794764 0.001259850973751142 0.0014926050389283407 0.0016814242953734349 0.0018606286057368804 0.0020504160803851423 0.0022673649189978162 0.0025279004188832888 0.002850260164372065 0.0032562066219350427]

        NPC-survival-year (map #(- 1 %) NPCM-mortrate-year)
        ; (0.9991564059032205 0.9987401490262489 0.9985073949610717 0.9983185757046266 0.9981393713942631 0.9979495839196149 0.9977326350810022 0.9974720995811167 0.9971497398356279 0.996743793378065)

        ;
        ;generate survivals
        ;
        PCSsurvival (map #(- 1 %) PCSMatT)
        ;(0.9953036311730425 0.9846514642777516 0.969367750556338 0.9501787970267408 0.9276377598910448 0.9022193023910804 0.8743527322614849 0.8444359652293184 0.8128417608495665 0.7799204083034222)

        NPCsurvival (map #(- 1 %) NPCMatT)
        ;(0.9991564059032205 0.9978965549294694 0.996403949890541 0.9947225255951676 0.9928618969894307 0.9908114809090456 0.9885441159900478 0.9860162155711645 0.9831659554067924 0.9799097487848574)

        ;
        ;'all cause mortality'
        ;
        allcauseM (map #(- 1 (* %1 %2 )) PCSsurvival NPCsurvival)
        ;(0.005535976336812465 0.01741962778769468 0.03411802269051689 0.05483556505613563 0.0789835662715267 0.1060704395470139 0.1356633605530203 0.16737197747451704 0.20084110431861169 0.23574775252364877)

        allcauseM-inyear (deltas 0 allcauseM)
        ; [0.005535976336812465 0.011883651450882216 0.01669839490282221 0.020717542365618735 0.02414800121539107 0.0270868732754872 0.029592921006006412 0.031708616921496735 0.03346912684409464 0.03490664820503708]

        ;
        ; proportion of all cause mortality
        ;
        proportionPC-cum (map #(/ %1 (+ %1 %2)) PCSMatT NPCMatT)
        ;(0.847729484591698 0.8794759072130388 0.8949425549607571 0.9042209129145304 0.9102159857565977 0.914104283009165 0.9164463078642722 0.9175260631086086 0.9174800914362404 0.9163529292704825)

        proportionPC (map #(/ %1 (+ %1 %2)) PCSM-mortrate-year NPCM-mortrate-year)
        ;(0.847729484591698 0.8942403133741444 0.9110321082436409 0.9194378035322059 0.9237527851534536 0.9253577797910928 0.9247600090270526 0.9220888423039323 0.9172538025684129 0.9099972624769542)

        ; this makes more sense to me, but the breast code (line 121) suggests this should be*allcauseM_inyear ??why??
        propn-NPC (map #(- 1 %) proportionPC)
        ;(0.15227432175853584 0.10576301912922303 0.08897095127071308 0.0805651104869638 0.07625006528048706 0.07464507324581204 0.07524290854617943 0.07791420339558741 0.08274944035552734 0.0900062551706945)

        ;
        ; *PC mortality as competing risk
        ;
        pred-PC-year (map #(* %1 %2) proportionPC allcauseM-inyear)
        ;(0.004693010282765466 0.01062683944561739 0.015212771614112598 0.01904848684638193 0.022306775075572483 0.02506503606101867 0.027366331363946138 0.029238136411749632 0.03069965006915814 0.03176491052736049)

        pred-PC-cum (reductions + pred-PC-year)
        ;(0.004693010282765466 0.015319849728382854 0.03053262134249545 0.049581108188877385 0.07188788326444986 0.09695291932546854 0.12431925068941468 0.15355738710116432 0.18425703717032246 0.21602194769768296)

        ;
        ; *NPC Mortality as competing risk
        ;
        pred-NPC-year (map #(* %1 %2) propn-NPC allcauseM-inyear)
        ; (0.0008429908119527243 0.001256855450638569 0.001485676844069427 0.0016691159590441862 0.0018412916653964386 0.0020219068365977025 0.00222666296597377 0.0024705576375669007 0.002769558258234278 0.0031418245000532172)

        pred-NPC-cum (reductions + pred-NPC-year)
        ; (0.0008429908119527243 0.002099846262591293 0.0035855231066607204 0.005254639065704907 0.0070959307311013456 0.009117837567699048 0.011344500533672818 0.013815058171239718 0.016584616429473995 0.01972644092952721)

        overall-survival (map #(* 100 (- 1 (+ %1 %2))) pred-NPC-cum pred-PC-cum)
        ; (99.44639989052818 98.25803040090258 96.58818555508438 94.51642527454177 92.10161860044488 89.39292431068324 86.43362487769124 83.2627554727596 79.91583464002035 76.42516113727899)
        NPCM (map #(- 100 (* % 100)) pred-PC-cum)
        ; (99.53069897172345 98.46801502716171 96.94673786575045 95.04188918111227 92.81121167355501 90.30470806745315 87.56807493105853 84.64426128988357 81.57429628296775 78.39780523023171)
        ]

    {:overall-survival overall-survival
     :NPCM NPCM
     :PCSM 100}

    ;(println "piPCSM" piPCSM)
    ;(println "piNPCM" piNPCM)
    ;(println "PCSMatT" PCSMatT)
    ;(println "PCSM-mortrate-year" PCSM-mortrate-year)
    ;(println "PCS-survival-year" PCS-survival-year)
    ;(println "NPCMatT" NPCMatT)
    ;(println "NPCM-mortrate-year" NPCM-mortrate-year)
    ;(println "NPC-survival-year" NPC-survival-year)
    ;(println "PCSsurvival" PCSsurvival)
    ;(println "NPCsurvival" NPCsurvival)
    ;(println "allcauseM" allcauseM)
    ;(0.005535976336812465 0.01741962778769468 0.03411802269051689 0.05483556505613563 0.0789835662715267 0.1060704395470139 0.1356633605530203 0.16737197747451704 0.20084110431861169 0.23574775252364877)
    ;(println "allcauseM-inyear" allcauseM-inyear)
    ;(println "proportionPC-cum" proportionPC-cum)
    ;(println "proportionPC" proportionPC)
    ;(println "propn-NPC" propn-NPC)
    ;(println "pred-PC-year" pred-PC-year)
    ;(println "pred-PC-cum" pred-PC-cum)
    ;(println "pred-NPC-year" pred-NPC-year)
    ;(println "pred-NPC-cum" pred-NPC-cum)
    ;(println "overall-survival" overall-survival)
    ;(println "NPCM" NPCM)

    )
  )