clear
set obs 15 //based on 15 years f/u

*Set input parameters for this fictional man 

gen time=_n
gen age   = 65               // Age at diagnosis
gen age_time = age + _n
gen gradegroup = 4           // gradegroup
gen psa  = 11                 // ng/ml
gen t_stage = 2              // 
gen charlson_comorbidity =  0            // charlson comorbidity score
gen primaryRx =   0          // 0=AS 'Treatment'=1 adt=3
gen biopsy50 = 0			// 0=Unknown/not included 1=<50% cores involved 2=>=50% cores involved

*calculate the PCSM prognostic index (pi)

gen piPCSM = 0.0026005*((age/10)^3-341.155151) + 0.185959*(ln((psa+1)/100)+1.636423432) + .1614922*(t_stage==2) + .39767881*(t_stage==3) + .6330977*(t_stage==4) + .2791641*(gradegroup==2) + .5464889*(gradegroup==3) + .7411321*(gradegroup==4) + 1.367963*(gradegroup==5) + -.6837094*(primaryRx==1) + .9084921*(primaryRx==3) -0.617722958*(biopsy50==1) + 0.579225231*(biopsy50==2)

*calculate the NPCM progostic index (pi)

gen piNPCM = 0.1226666*(age-69.87427439) + 0.6382002*(charlson_comorbidity==1)

*convert years to days (used in all my formulae etc)
replace time=(365*time)

*gen PCS mortality, then per year, then convert to survival per year...

gen PCSMatT = 1 - exp(-exp(piPCSM)*exp(-16.40532 + 1.653947*(ln(time)) + 1.89e-12*(time^3)))

gen PCSM_mortrate_year = PCSMatT - PCSMatT[_n-1]

replace PCSM_mortrate_year = PCSMatT if PCSM_mortrate_year==.

gen PCSsurvival_year = 1 - PCSM_mortrate_year

*Do the same for NPCM...

gen NPCMatT = 1 - exp(-exp(piNPCM)*exp(-12.4841 + 1.32274*(ln(time)) + 2.90e-12*(time^3)))

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


****Ignore the 

*graphing it in stacked area chart
gen timeYears = (time/365)
gen overallsurvival = 100 
gen NPCM = pred_NPC_cum*100 + pred_PC_cum*100
gen PCSM = pred_PC_cum*100

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
replace PCSM = 0 in 1
replace NPCM = 0 in 1

*graph it
set scheme s1mono
twoway area overallsurvival NPCM PCSM timeYears, color(green orange red)  ///
sort yscale(range (0 10 100)) yticks(#10) ylab(0 10 20 30 40 50 60 70 80 90 100) ylabel(,grid) ///
yaxis(1 2) ylab(#10, axis(2)) xscale(range(0 10)) xlab(0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15) xtitle(" " "Time (years)", size(large))  ///
ytitle("%" " ", size(large)) ///
legend(pos(3) col(1) lab(1 "Alive") lab(2 "Non-PCa Death") lab(3 "PCa Death") stack order(1 - " " 2 - " " 3 ) size(medlarge))
graph display, xsize(3.5) ysize(1.98)

