clear

quietly {
set obs 15 //based on 15 years f/u

*Set input parameters for this fictional man 

gen time=_n
gen age   = 70               // Age at diagnosis (35-95)
gen age_time = age + _n
gen gradegroup = 2           // gradegroup (1-5
gen psa  = 10                 // ng/ml (0-100)
gen t_stage = 2              // (1-4)
gen charlson_comorbidity =  0            // charlson comorbidity score (0 or 1)
gen primaryRx =   0          // 0=AS 1='Treatment' 3=adt
gen biopsy50 = 0			// 0=Unknown/not included 1=<50% cores involved 2=>=50% cores involved
gen BRCA = 0               // 0 = unknown/negative 1=BRCA mutation carrier
gen PPC = 41.9415      // = % Positive Cores. If unknown, enter 41.9415 for 'average' PPC effect (OR can remove the  part of eqn below which relates to PPC)

*calculate the PCSM prognostic index (pi)
gen piPCSM = 0.0026005*((age/10)^3-341.155151) + 0.185959*(ln((psa+1)/100)+1.636423432) + .1614922*(t_stage==2) + .39767881*(t_stage==3) + .6330977*(t_stage==4) + .2791641*(gradegroup==2) + .5464889*(gradegroup==3) + .7411321*(gradegroup==4) + 1.367963*(gradegroup==5) + -.6837094*(primaryRx==1) + .9084921*(primaryRx==3) -0.617722958*(biopsy50==1) + 0.579225231*(biopsy50==2) +0.956*(BRCA==1) +(((PPC+0.1811159)/100)^.5-.649019)*1.890134 

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


//The output we are interested in is: pred_PC_cum pred_NPC_cum and allcauseM at 10 or 15 years.
} 
table time, c(sum pred_PC_cum sum pred_NPC_cum sum allcauseM)


***If we want to graph these  - the code is in previous iterations of this sheet***
