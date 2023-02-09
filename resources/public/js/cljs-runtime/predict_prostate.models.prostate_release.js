goog.provide('predict_prostate.models.prostate_release');
predict_prostate.models.prostate_release.exp = Math.exp;
predict_prostate.models.prostate_release.ln = Math.log;
predict_prostate.models.prostate_release.pow = Math.pow;
predict_prostate.models.prostate_release.abs = Math.abs;
predict_prostate.models.prostate_release.pi_pcsm = (function predict_prostate$models$prostate_release$pi_pcsm(p__44125){
var map__44126 = p__44125;
var map__44126__$1 = cljs.core.__destructure_map(map__44126);
var inputs = map__44126__$1;
var grade_group = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44126__$1,new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518));
var brca = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44126__$1,new cljs.core.Keyword(null,"brca","brca",-1943532098));
var age = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44126__$1,new cljs.core.Keyword(null,"age","age",-604307804));
var biopsy50 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44126__$1,new cljs.core.Keyword(null,"biopsy50","biopsy50",-1232179703));
var psa = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44126__$1,new cljs.core.Keyword(null,"psa","psa",-321761459));
var biopsy_cores_involved = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44126__$1,new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520));
var biopsy_done = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44126__$1,new cljs.core.Keyword(null,"biopsy-done","biopsy-done",-1332187565));
var biopsy_cores_taken = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44126__$1,new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666));
var primary_rx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44126__$1,new cljs.core.Keyword(null,"primary-rx","primary-rx",-1656848904));
var t_stage = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44126__$1,new cljs.core.Keyword(null,"t-stage","t-stage",-1315750984));

var ppc = (cljs.core.truth_((function (){var and__4210__auto__ = biopsy_cores_involved;
if(cljs.core.truth_(and__4210__auto__)){
var and__4210__auto____$1 = biopsy_cores_taken;
if(cljs.core.truth_(and__4210__auto____$1)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),biopsy_done);
} else {
return and__4210__auto____$1;
}
} else {
return and__4210__auto__;
}
})())?((100) * (biopsy_cores_involved / biopsy_cores_taken)):41.9415);
return (((((((0.0026005 * ((function (){var G__44128 = (age / (10));
var G__44129 = (3);
return (predict_prostate.models.prostate_release.pow.cljs$core$IFn$_invoke$arity$2 ? predict_prostate.models.prostate_release.pow.cljs$core$IFn$_invoke$arity$2(G__44128,G__44129) : predict_prostate.models.prostate_release.pow.call(null,G__44128,G__44129));
})() - 341.155151)) + (0.185959 * ((function (){var G__44130 = ((psa + (1)) / (100));
return (predict_prostate.models.prostate_release.ln.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.models.prostate_release.ln.cljs$core$IFn$_invoke$arity$1(G__44130) : predict_prostate.models.prostate_release.ln.call(null,G__44130));
})() + 1.636423432))) + cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 4, [(1),(0),(2),0.1614922,(3),0.39767881,(4),0.6330977], null),t_stage)) + cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 5, [(1),(0),(2),0.2791641,(3),0.5464889,(4),0.7411321,(5),1.367963], null),grade_group)) + cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 4, [0.9,(predict_prostate.models.prostate_release.ln.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.models.prostate_release.ln.cljs$core$IFn$_invoke$arity$1(0.35) : predict_prostate.models.prostate_release.ln.call(null,0.35)),(1),-0.6837094,1.1,(predict_prostate.models.prostate_release.ln.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.models.prostate_release.ln.cljs$core$IFn$_invoke$arity$1(0.67) : predict_prostate.models.prostate_release.ln.call(null,0.67)),(3),0.9084921], null),primary_rx)) + cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 4, [null,(0),(0),(0),(1),0.956,(2),(0)], null),brca)) + ((Math.sqrt(((ppc + 0.1811159) / (100))) - 0.649019) * 1.890134));
});
predict_prostate.models.prostate_release.pi_npcm = (function predict_prostate$models$prostate_release$pi_npcm(p__44131){
var map__44132 = p__44131;
var map__44132__$1 = cljs.core.__destructure_map(map__44132);
var age = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44132__$1,new cljs.core.Keyword(null,"age","age",-604307804));
var charlson_comorbidity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44132__$1,new cljs.core.Keyword(null,"charlson-comorbidity","charlson-comorbidity",-633596907));

return ((0.1226666 * (age - 69.87427439)) + cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [(0),(0),(1),0.6382002], null),charlson_comorbidity));
});
predict_prostate.models.prostate_release.days = (function predict_prostate$models$prostate_release$days(t){
return ((365) * t);
});
predict_prostate.models.prostate_release.pcsm_at_t = (function predict_prostate$models$prostate_release$pcsm_at_t(time,pi){

return ((1) + (- (function (){var G__44134 = ((- (predict_prostate.models.prostate_release.exp.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.models.prostate_release.exp.cljs$core$IFn$_invoke$arity$1(pi) : predict_prostate.models.prostate_release.exp.call(null,pi))) * (function (){var G__44135 = ((-16.40532 + (1.653947 * (predict_prostate.models.prostate_release.ln.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.models.prostate_release.ln.cljs$core$IFn$_invoke$arity$1(time) : predict_prostate.models.prostate_release.ln.call(null,time)))) + (1.89E-12 * (predict_prostate.models.prostate_release.pow.cljs$core$IFn$_invoke$arity$2 ? predict_prostate.models.prostate_release.pow.cljs$core$IFn$_invoke$arity$2(time,(3)) : predict_prostate.models.prostate_release.pow.call(null,time,(3)))));
return (predict_prostate.models.prostate_release.exp.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.models.prostate_release.exp.cljs$core$IFn$_invoke$arity$1(G__44135) : predict_prostate.models.prostate_release.exp.call(null,G__44135));
})());
return (predict_prostate.models.prostate_release.exp.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.models.prostate_release.exp.cljs$core$IFn$_invoke$arity$1(G__44134) : predict_prostate.models.prostate_release.exp.call(null,G__44134));
})()));
});
predict_prostate.models.prostate_release.f = (function predict_prostate$models$prostate_release$f(p__44136){
var map__44137 = p__44136;
var map__44137__$1 = cljs.core.__destructure_map(map__44137);
var foo = map__44137__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__44137__$1,new cljs.core.Keyword(null,"n","n",562130025),(10));
var a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44137__$1,new cljs.core.Keyword(null,"a","a",-2123407586));
var b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44137__$1,new cljs.core.Keyword(null,"b","b",1482224470));
var c = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__44137__$1,new cljs.core.Keyword(null,"c","c",-1763192079),(3));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [foo,c,n], null);
});
predict_prostate.models.prostate_release.npcm_at_t = (function predict_prostate$models$prostate_release$npcm_at_t(time,pi){

return ((1) + (- (function (){var G__44138 = ((- (predict_prostate.models.prostate_release.exp.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.models.prostate_release.exp.cljs$core$IFn$_invoke$arity$1(pi) : predict_prostate.models.prostate_release.exp.call(null,pi))) * (function (){var G__44139 = ((-12.4841 + (1.32274 * (predict_prostate.models.prostate_release.ln.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.models.prostate_release.ln.cljs$core$IFn$_invoke$arity$1(time) : predict_prostate.models.prostate_release.ln.call(null,time)))) + (2.9E-12 * (predict_prostate.models.prostate_release.pow.cljs$core$IFn$_invoke$arity$2 ? predict_prostate.models.prostate_release.pow.cljs$core$IFn$_invoke$arity$2(time,(3)) : predict_prostate.models.prostate_release.pow.call(null,time,(3)))));
return (predict_prostate.models.prostate_release.exp.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.models.prostate_release.exp.cljs$core$IFn$_invoke$arity$1(G__44139) : predict_prostate.models.prostate_release.exp.call(null,G__44139));
})());
return (predict_prostate.models.prostate_release.exp.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.models.prostate_release.exp.cljs$core$IFn$_invoke$arity$1(G__44138) : predict_prostate.models.prostate_release.exp.call(null,G__44138));
})()));
});
predict_prostate.models.prostate_release.run_prostate = (function predict_prostate$models$prostate_release$run_prostate(p__44160){
var map__44161 = p__44160;
var map__44161__$1 = cljs.core.__destructure_map(map__44161);
var args = map__44161__$1;
var grade_group = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44161__$1,new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518));
var protect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44161__$1,new cljs.core.Keyword(null,"protect","protect",-67966332));
var age = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44161__$1,new cljs.core.Keyword(null,"age","age",-604307804));
var biopsy50 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44161__$1,new cljs.core.Keyword(null,"biopsy50","biopsy50",-1232179703));
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44161__$1,new cljs.core.Keyword(null,"n","n",562130025));
var psa = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44161__$1,new cljs.core.Keyword(null,"psa","psa",-321761459));
var charlson_comorbidity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44161__$1,new cljs.core.Keyword(null,"charlson-comorbidity","charlson-comorbidity",-633596907));
var primary_rx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44161__$1,new cljs.core.Keyword(null,"primary-rx","primary-rx",-1656848904));
var t_stage = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44161__$1,new cljs.core.Keyword(null,"t-stage","t-stage",-1315750984));
var piPCSM = predict_prostate.models.prostate_release.pi_pcsm(args);
var piNPCM = predict_prostate.models.prostate_release.pi_npcm(args);
var PCSMatT = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__44140_SHARP_){
return predict_prostate.models.prostate_release.pcsm_at_t(predict_prostate.models.prostate_release.days(p1__44140_SHARP_),piPCSM);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(n + (1))));
var PCSM_mortrate_year = common.utils.deltas((0),PCSMatT);
var PCS_survival_year = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__44141_SHARP_){
return ((1) - p1__44141_SHARP_);
}),PCSM_mortrate_year);
var NPCMatT = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__44142_SHARP_){
return predict_prostate.models.prostate_release.npcm_at_t(predict_prostate.models.prostate_release.days(p1__44142_SHARP_),piNPCM);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(n + (1))));
var NPCM_mortrate_year = common.utils.deltas((0),NPCMatT);
var NPC_survival_year = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__44143_SHARP_){
return ((1) - p1__44143_SHARP_);
}),NPCM_mortrate_year);
var PCSsurvival = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__44144_SHARP_){
return ((1) - p1__44144_SHARP_);
}),PCSMatT);
var NPCsurvival = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__44145_SHARP_){
return ((1) - p1__44145_SHARP_);
}),NPCMatT);
var allcauseM = cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__44146_SHARP_,p2__44147_SHARP_){
return ((1) - (p1__44146_SHARP_ * p2__44147_SHARP_));
}),PCSsurvival,NPCsurvival);
var allcauseM_inyear = common.utils.deltas((0),allcauseM);
var proportionPC_cum = cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__44148_SHARP_,p2__44149_SHARP_){
return (p1__44148_SHARP_ / (p1__44148_SHARP_ + p2__44149_SHARP_));
}),PCSMatT,NPCMatT);
var proportionPC = cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__44150_SHARP_,p2__44151_SHARP_){
return (p1__44150_SHARP_ / (p1__44150_SHARP_ + p2__44151_SHARP_));
}),PCSM_mortrate_year,NPCM_mortrate_year);
var propn_NPC = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__44152_SHARP_){
return ((1) - p1__44152_SHARP_);
}),proportionPC);
var pred_PC_year = cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__44153_SHARP_,p2__44154_SHARP_){
return (p1__44153_SHARP_ * p2__44154_SHARP_);
}),proportionPC,allcauseM_inyear);
var pred_PC_cum = cljs.core.reductions.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,pred_PC_year);
var pred_NPC_year = cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__44155_SHARP_,p2__44156_SHARP_){
return (p1__44155_SHARP_ * p2__44156_SHARP_);
}),propn_NPC,allcauseM_inyear);
var pred_NPC_cum = cljs.core.reductions.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,pred_NPC_year);
var overall_survival = cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__44157_SHARP_,p2__44158_SHARP_){
return ((100) * ((1) - (p1__44157_SHARP_ + p2__44158_SHARP_)));
}),pred_NPC_cum,pred_PC_cum);
var NPCM = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__44159_SHARP_){
return ((100) - (p1__44159_SHARP_ * (100)));
}),pred_PC_cum);
return (new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"PCSsurvival","PCSsurvival",1208128423),PCSsurvival,new cljs.core.Keyword(null,"pred-PC-cum","pred-PC-cum",1965177836),cljs.core.cons((0),pred_PC_cum),new cljs.core.Keyword(null,"pred-NPC-cum","pred-NPC-cum",-1636287417),cljs.core.cons((0),pred_NPC_cum),new cljs.core.Keyword(null,"NPC-survival","NPC-survival",-1399930619),cljs.core.cons((1),NPCsurvival)],null));
});

//# sourceMappingURL=predict_prostate.models.prostate_release.js.map
