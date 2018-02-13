clear
set obs 10 //based on 10 years f/u

*Set input parameters for this fictional man 

gen time=_n
gen age   = 45               // Age at diagnosis
gen age_time = age + _n
gen gradegroup = 5           // gradegroup
gen psa  = 85                 // ng/ml
gen t_stage = 3              // 
gen charlson_comorbidity =  1            // charlson comorbidity score
gen primaryRx = 0            // 0=AS 'Treatment'=1 adt=3
gen Protect = 0 			// 0=As per our model otherwise 1=ProtectRPcoef 2-ProtectRTcoef
gen biopsy50 = 0			// 0=Unknown/not included 1=<50% cores involved 2=>=50% cores involved

*calculate the PCSM prognostic index (pi)

gen piPCSM = 0.002219*((age/10)^3 -341.1652608) + 0.1066838*(ln((psa+1)/100)+1.635612967) + .1271878*(t_stage==2) + .3912962*(t_stage==3) + .5572669*(t_stage==4) + .2404877*(gradegroup==2) + .5844514*(gradegroup==3) + .840747*(gradegroup==4) + 1.480844*(gradegroup==5) + -.7277408*(primaryRx==1) + 1.070543*(primaryRx==3) + -0.46204*(Protect==1) + -0.67334*(Protect==2) + -0.5811587*(biopsy50==1) + 0.55990146*(biopsy50==2)

*calculate the NPCM progostic index (pi)

gen piNPCM = 0.1229245*(age-69.8749646) + 0.6640308*(charlson_comorbidity==1)

*convert years to days (used in all my formulae etc)
replace time=(365*time)


*generate baseline mortality (though I don't go on to use this!?)

gen bs_PCSM = exp(-17.03262 + 1311.891*(time^-2) + 1.726887*(ln(time)))

gen bs_NPCM = exp(-12.45735 + 1.317565*(ln(time)) + 3.01e-12*(time^3))


*gen PCS mortality, then per year, then convert to survival per year...

gen PCSMatT = 1 - exp(-exp(piPCSM)*exp(-17.03262 + 1311.891*(time^-2) + 1.726887*(ln(time))))
 
gen PCSM_mortrate_year = PCSMatT - PCSMatT[_n-1]

replace PCSM_mortrate_year = PCSMatT if PCSM_mortrate_year==.

gen PCSsurvival_year = 1 - PCSM_mortrate_year

*Do the same for NPCM...

gen NPCMatT = 1 - exp(-exp(piNPCM)*exp(-12.45735 + 1.317565*(ln(time)) + 3.01e-12*(time^3)))

gen NPCM_mortrate_year = NPCMatT - NPCMatT[_n-1]

replace NPCM_mortrate_year = NPCMatT if NPCM_mortrate_year==.

gen NPCsurvival_year = 1 - NPCM_mortrate_year 

*generate survivals

gen PCSsurvival = 1 - PCSMatT

gen NPCsurvival = 1 - NPCMatT

*'all cause mortality'

gen allcauseM = 1 - PCSsurvival*NPCsurvival

gen allcauseM_inyear = allcauseM - allcauseM[_n-1] 
replace allcauseM_inyear = allcauseM if allcauseM_inyear==.

*proportion of all cause mortality

gen proportionPC_cum = PCSMatT / (PCSMatT + NPCMatT)

gen proportionPC = (PCSM_mortrate_year)/(NPCM_mortrate_year + PCSM_mortrate_year)

gen propn_NPC = 1-proportionPC // this makes more sense to me, but the breast code (line 121) suggests this should be*allcauseM_inyear ??why??

*PC mortality as competing risk

gen pred_PC_year = proportionPC*allcauseM_inyear

gen pred_PC_cum = pred_PC_year in 1 

replace pred_PC_cum = pred_PC_year + pred_PC_cum[_n-1] in 2/-1

*NPC Mortality as competing risk

gen pred_NPC_year = propn_NPC*allcauseM_inyear

gen pred_NPC_cum = pred_NPC_year

replace pred_NPC_cum = pred_NPC_year + pred_NPC_cum[_n-1] in 2/-1

*graphing it in stacked area chart
gen timeYears = (time/365)
gen overallsurvival = 100 - (pred_NPC_cum*100 + pred_PC_cum*100)
gen NPCM = 100 - (pred_PC_cum*100)
gen PCSM = 100

*Add a 0 year
insobs 1, before(1)
replace time = 0 in 1
replace pred_NPC_year = 0 in 1
replace pred_NPC_year = . in 1
replace pred_PC_cum = 0 in 1
replace pred_NPC_cum = 0 in 1
replace overallsurvival = 100 in 1
replace timeYears = 0 in 1
replace NPCM = 0 in 1
replace PCSM = 0 in 1
replace PCSM = 100 in 1
replace NPCM = 100 in 1

*graph it
set scheme s1mono
twoway area PCSM NPCM overallsurvival timeYears, color(red orange green) ///
sort yscale(range (0 10 100)) yticks(#10) ylab(0 10 20 30 40 50 60 70 80 90 100) ///
xscale(range(0 10)) xlab(1 2 3 4 5 6 7 8 9 10) xtitle(Time (years)) ///
ytitle(Estimated Survival (%)) ///
legend(pos(3) col(1) lab(1 "PCa Death") lab(2 "Non-PCa death") lab(3 "Alive") stack order(1 - " " 2 - " " 3 ))
graph display, xsize(10) ysize(6)
