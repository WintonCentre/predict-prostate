goog.provide('predict_prostate.state.mutations');
predict_prostate.state.mutations.paq = window._paq;
/**
 * Send an event to matemo. 
 */
predict_prostate.state.mutations.matomo_track = (function predict_prostate$state$mutations$matomo_track(var_args){
var G__36203 = arguments.length;
switch (G__36203) {
case 3:
return predict_prostate.state.mutations.matomo_track.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return predict_prostate.state.mutations.matomo_track.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(predict_prostate.state.mutations.matomo_track.cljs$core$IFn$_invoke$arity$3 = (function (category,action,tracked_name){
return predict_prostate.state.mutations.paq.push(["trackEvent",cljs.core.name(category),cljs.core.name(action),cljs.core.name(tracked_name)]);
}));

(predict_prostate.state.mutations.matomo_track.cljs$core$IFn$_invoke$arity$4 = (function (category,action,tracked_name,value){
return predict_prostate.state.mutations.paq.push(["trackEvent",cljs.core.name(category),cljs.core.name(action),cljs.core.name(tracked_name),value]);
}));

(predict_prostate.state.mutations.matomo_track.cljs$lang$maxFixedArity = 4);

predict_prostate.state.mutations.reload_lang = cljs.core.partial.cljs$core$IFn$_invoke$arity$3(predict_prostate.state.mutations.matomo_track,"Language","RELOAD-LANG");
predict_prostate.state.mutations.switch_lang = cljs.core.partial.cljs$core$IFn$_invoke$arity$3(predict_prostate.state.mutations.matomo_track,"Language","SWITCH-LANG");
predict_prostate.state.mutations.clear_inputs = (function predict_prostate$state$mutations$clear_inputs(){
var seq__36204_36314 = cljs.core.seq(predict_prostate.state.run_time.input_changes());
var chunk__36207_36315 = null;
var count__36208_36316 = (0);
var i__36209_36317 = (0);
while(true){
if((i__36209_36317 < count__36208_36316)){
var vec__36226_36318 = chunk__36207_36315.cljs$core$IIndexed$_nth$arity$2(null,i__36209_36317);
var key_36319 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36226_36318,(0),null);
var topic_36320 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36226_36318,(1),null);
if(cljs.core.truth_(key_36319)){
if(cljs.core.truth_(topic_36320)){

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_36319,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355))){
var map__36229_36321 = predict_prostate.state.localStorage.get_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),new cljs.core.Keyword(null,"line2","line2",-1975668782)], null));
var map__36229_36322__$1 = (((((!((map__36229_36321 == null))))?(((((map__36229_36321.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36229_36321.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36229_36321):map__36229_36321);
var plot_style_36323 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36229_36322__$1,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355));
if(cljs.core.truth_((function (){var fexpr__36231 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"area1","area1",-316994623),null,new cljs.core.Keyword(null,"line2","line2",-1975668782),null], null), null);
return (fexpr__36231.cljs$core$IFn$_invoke$arity$1 ? fexpr__36231.cljs$core$IFn$_invoke$arity$1(plot_style_36323) : fexpr__36231.call(null,plot_style_36323));
})())){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),plot_style_36323);
} else {
predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),new cljs.core.Keyword(null,"line2","line2",-1975668782)], null));

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),new cljs.core.Keyword(null,"line2","line2",-1975668782));
}
} else {
pubsub.feeds.publish(topic_36320,(cljs.core.truth_((function (){var fexpr__36232 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"age","age",-604307804),null,new cljs.core.Keyword(null,"psa","psa",-321761459),null], null), null);
return (fexpr__36232.cljs$core$IFn$_invoke$arity$1 ? fexpr__36232.cljs$core$IFn$_invoke$arity$1(key_36319) : fexpr__36232.call(null,key_36319));
})())?"":null));

}


var G__36324 = seq__36204_36314;
var G__36325 = chunk__36207_36315;
var G__36326 = count__36208_36316;
var G__36327 = (i__36209_36317 + (1));
seq__36204_36314 = G__36324;
chunk__36207_36315 = G__36325;
count__36208_36316 = G__36326;
i__36209_36317 = G__36327;
continue;
} else {
var G__36328 = seq__36204_36314;
var G__36329 = chunk__36207_36315;
var G__36330 = count__36208_36316;
var G__36331 = (i__36209_36317 + (1));
seq__36204_36314 = G__36328;
chunk__36207_36315 = G__36329;
count__36208_36316 = G__36330;
i__36209_36317 = G__36331;
continue;
}
} else {
var G__36332 = seq__36204_36314;
var G__36333 = chunk__36207_36315;
var G__36334 = count__36208_36316;
var G__36335 = (i__36209_36317 + (1));
seq__36204_36314 = G__36332;
chunk__36207_36315 = G__36333;
count__36208_36316 = G__36334;
i__36209_36317 = G__36335;
continue;
}
} else {
var temp__5735__auto___36336 = cljs.core.seq(seq__36204_36314);
if(temp__5735__auto___36336){
var seq__36204_36337__$1 = temp__5735__auto___36336;
if(cljs.core.chunked_seq_QMARK_(seq__36204_36337__$1)){
var c__4556__auto___36338 = cljs.core.chunk_first(seq__36204_36337__$1);
var G__36339 = cljs.core.chunk_rest(seq__36204_36337__$1);
var G__36340 = c__4556__auto___36338;
var G__36341 = cljs.core.count(c__4556__auto___36338);
var G__36342 = (0);
seq__36204_36314 = G__36339;
chunk__36207_36315 = G__36340;
count__36208_36316 = G__36341;
i__36209_36317 = G__36342;
continue;
} else {
var vec__36233_36343 = cljs.core.first(seq__36204_36337__$1);
var key_36344 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36233_36343,(0),null);
var topic_36345 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36233_36343,(1),null);
if(cljs.core.truth_(key_36344)){
if(cljs.core.truth_(topic_36345)){

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_36344,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355))){
var map__36236_36346 = predict_prostate.state.localStorage.get_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),new cljs.core.Keyword(null,"line2","line2",-1975668782)], null));
var map__36236_36347__$1 = (((((!((map__36236_36346 == null))))?(((((map__36236_36346.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36236_36346.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36236_36346):map__36236_36346);
var plot_style_36348 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36236_36347__$1,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355));
if(cljs.core.truth_((function (){var fexpr__36238 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"area1","area1",-316994623),null,new cljs.core.Keyword(null,"line2","line2",-1975668782),null], null), null);
return (fexpr__36238.cljs$core$IFn$_invoke$arity$1 ? fexpr__36238.cljs$core$IFn$_invoke$arity$1(plot_style_36348) : fexpr__36238.call(null,plot_style_36348));
})())){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),plot_style_36348);
} else {
predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),new cljs.core.Keyword(null,"line2","line2",-1975668782)], null));

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),new cljs.core.Keyword(null,"line2","line2",-1975668782));
}
} else {
pubsub.feeds.publish(topic_36345,(cljs.core.truth_((function (){var fexpr__36239 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"age","age",-604307804),null,new cljs.core.Keyword(null,"psa","psa",-321761459),null], null), null);
return (fexpr__36239.cljs$core$IFn$_invoke$arity$1 ? fexpr__36239.cljs$core$IFn$_invoke$arity$1(key_36344) : fexpr__36239.call(null,key_36344));
})())?"":null));

}


var G__36352 = cljs.core.next(seq__36204_36337__$1);
var G__36353 = null;
var G__36354 = (0);
var G__36355 = (0);
seq__36204_36314 = G__36352;
chunk__36207_36315 = G__36353;
count__36208_36316 = G__36354;
i__36209_36317 = G__36355;
continue;
} else {
var G__36356 = cljs.core.next(seq__36204_36337__$1);
var G__36357 = null;
var G__36358 = (0);
var G__36359 = (0);
seq__36204_36314 = G__36356;
chunk__36207_36315 = G__36357;
count__36208_36316 = G__36358;
i__36209_36317 = G__36359;
continue;
}
} else {
var G__36360 = cljs.core.next(seq__36204_36337__$1);
var G__36361 = null;
var G__36362 = (0);
var G__36363 = (0);
seq__36204_36314 = G__36360;
chunk__36207_36315 = G__36361;
count__36208_36316 = G__36362;
i__36209_36317 = G__36363;
continue;
}
}
} else {
}
}
break;
}

return predict_prostate.state.run_time.results_change.pubsub$feeds$TopicFeed$publish$arity$2(null,null);
});
predict_prostate.state.mutations.log = (function predict_prostate$state$mutations$log(topic,old,new$){
return null;
});
predict_prostate.state.mutations.subscribe_to = (function predict_prostate$state$mutations$subscribe_to(var_args){
var args__4742__auto__ = [];
var len__4736__auto___36365 = arguments.length;
var i__4737__auto___36366 = (0);
while(true){
if((i__4737__auto___36366 < len__4736__auto___36365)){
args__4742__auto__.push((arguments[i__4737__auto___36366]));

var G__36367 = (i__4737__auto___36366 + (1));
i__4737__auto___36366 = G__36367;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return predict_prostate.state.mutations.subscribe_to.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(predict_prostate.state.mutations.subscribe_to.cljs$core$IFn$_invoke$arity$variadic = (function (change,cursor,p__36245){
var vec__36246 = p__36245;
var silent = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36246,(0),null);
return pubsub.feeds.subscribe(change,(function (p1__36240_SHARP_,p2__36241_SHARP_){
if(cljs.core.truth_(silent)){
} else {
predict_prostate.state.mutations.log(p1__36240_SHARP_,cljs.core.deref(cursor),p2__36241_SHARP_);
}

return cljs.core.reset_BANG_(cursor,p2__36241_SHARP_);
}));
}));

(predict_prostate.state.mutations.subscribe_to.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(predict_prostate.state.mutations.subscribe_to.cljs$lang$applyTo = (function (seq36242){
var G__36243 = cljs.core.first(seq36242);
var seq36242__$1 = cljs.core.next(seq36242);
var G__36244 = cljs.core.first(seq36242__$1);
var seq36242__$2 = cljs.core.next(seq36242__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36243,G__36244,seq36242__$2);
}));

predict_prostate.state.mutations.clip = (function predict_prostate$state$mutations$clip(p__36249){
var map__36250 = p__36249;
var map__36250__$1 = (((((!((map__36250 == null))))?(((((map__36250.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36250.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36250):map__36250);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36250__$1,new cljs.core.Keyword(null,"value","value",305978217));
var min = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36250__$1,new cljs.core.Keyword(null,"min","min",444991522));
var max = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36250__$1,new cljs.core.Keyword(null,"max","max",61366548));
if((value >= min)){
if((value <= max)){
return value;
} else {
return max;
}
} else {
return min;
}
});
predict_prostate.state.mutations.str_to_num = (function predict_prostate$state$mutations$str_to_num(s){
return parseFloat(s);
});
predict_prostate.state.mutations.num_to_str = (function predict_prostate$state$mutations$num_to_str(n){
if(cljs.core.truth_(isNaN(n))){
return null;
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(n);
}
});
predict_prostate.state.mutations.mutator = (function predict_prostate$state$mutations$mutator(){
var seq__36252_36368 = cljs.core.seq(predict_prostate.state.run_time.input_changes());
var chunk__36253_36369 = null;
var count__36254_36370 = (0);
var i__36255_36371 = (0);
while(true){
if((i__36255_36371 < count__36254_36370)){
var vec__36276_36372 = chunk__36253_36369.cljs$core$IIndexed$_nth$arity$2(null,i__36255_36371);
var key_36373 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36276_36372,(0),null);
var change_36374 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36276_36372,(1),null);
if(cljs.core.truth_(change_36374)){
pubsub.feeds.subscribe(change_36374,((function (seq__36252_36368,chunk__36253_36369,count__36254_36370,i__36255_36371,vec__36276_36372,key_36373,change_36374){
return (function (topic,value){
predict_prostate.state.mutations.log(topic,cljs.core.deref(predict_prostate.state.run_time.input_cursor(key_36373)),value);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666),key_36373)){
var vec__36279_36375 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(value,":");
var value_36376__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36279_36375,(0),null);
var bad_36377 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36279_36375,(1),null);
var bci_36378 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520))));
var bct_36379 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666))));
if(cljs.core.truth_(isNaN(bci_36378))){
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520)),predict_prostate.state.mutations.num_to_str((function (){var x__4214__auto__ = (1);
var y__4215__auto__ = (function (){var x__4217__auto__ = bci_36378;
var y__4218__auto__ = predict_prostate.state.mutations.str_to_num(value_36376__$1);
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})();
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})()));
}

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_36376__$1),(cljs.core.truth_(bad_36377)?":":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(bad_36377)].join(''));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520),key_36373)){
var vec__36282_36380 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(value,":");
var value_36381__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36282_36380,(0),null);
var bad_36382 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36282_36380,(1),null);
var bci_36383 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520))));
var bct_36384 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666))));
if(cljs.core.not(isNaN(bct_36384))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_36381__$1),(cljs.core.truth_((function (){var or__4126__auto__ = (value_36381__$1 < (0));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return bad_36382;
}
})())?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_36381__$1)].join(''):"")].join(''));
} else {
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_36373,new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969)),value);

predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969),value], null));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,new cljs.core.Keyword(null,"gleason","gleason",-2044470526))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526)),cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518))));
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518)),cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526))));
}
} else {
if(cljs.core.truth_((function (){var fexpr__36285 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gleason","gleason",-2044470526),null,new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518),null], null), null);
return (fexpr__36285.cljs$core$IFn$_invoke$arity$1 ? fexpr__36285.cljs$core$IFn$_invoke$arity$1(key_36373) : fexpr__36285.call(null,key_36373));
})())){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526)),value);

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518)),value);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_36373,new cljs.core.Keyword(null,"h-admissions","h-admissions",-1503094844))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"h-admissions","h-admissions",-1503094844)),value);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,(0))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"charlson-comorbidity","charlson-comorbidity",-633596907)),null);
} else {
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_36373,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),value);

predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),value], null));
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(key_36373),(((value == null))?predict_prostate.state.config.get_input_default(predict_prostate.state.config.input_groups,key_36373):value));

}
}
}
}
}
}

return predict_prostate.models.runner.recalculate_model.cljs$core$IFn$_invoke$arity$2(predict_prostate.state.run_time.input_map(),predict_prostate.state.run_time.N);
});})(seq__36252_36368,chunk__36253_36369,count__36254_36370,i__36255_36371,vec__36276_36372,key_36373,change_36374))
);
} else {
}


var G__36387 = seq__36252_36368;
var G__36388 = chunk__36253_36369;
var G__36389 = count__36254_36370;
var G__36390 = (i__36255_36371 + (1));
seq__36252_36368 = G__36387;
chunk__36253_36369 = G__36388;
count__36254_36370 = G__36389;
i__36255_36371 = G__36390;
continue;
} else {
var temp__5735__auto___36391 = cljs.core.seq(seq__36252_36368);
if(temp__5735__auto___36391){
var seq__36252_36392__$1 = temp__5735__auto___36391;
if(cljs.core.chunked_seq_QMARK_(seq__36252_36392__$1)){
var c__4556__auto___36393 = cljs.core.chunk_first(seq__36252_36392__$1);
var G__36394 = cljs.core.chunk_rest(seq__36252_36392__$1);
var G__36395 = c__4556__auto___36393;
var G__36396 = cljs.core.count(c__4556__auto___36393);
var G__36397 = (0);
seq__36252_36368 = G__36394;
chunk__36253_36369 = G__36395;
count__36254_36370 = G__36396;
i__36255_36371 = G__36397;
continue;
} else {
var vec__36286_36398 = cljs.core.first(seq__36252_36392__$1);
var key_36399 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36286_36398,(0),null);
var change_36400 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36286_36398,(1),null);
if(cljs.core.truth_(change_36400)){
pubsub.feeds.subscribe(change_36400,((function (seq__36252_36368,chunk__36253_36369,count__36254_36370,i__36255_36371,vec__36286_36398,key_36399,change_36400,seq__36252_36392__$1,temp__5735__auto___36391){
return (function (topic,value){
predict_prostate.state.mutations.log(topic,cljs.core.deref(predict_prostate.state.run_time.input_cursor(key_36399)),value);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666),key_36399)){
var vec__36289_36401 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(value,":");
var value_36402__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36289_36401,(0),null);
var bad_36403 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36289_36401,(1),null);
var bci_36404 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520))));
var bct_36405 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666))));
if(cljs.core.truth_(isNaN(bci_36404))){
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520)),predict_prostate.state.mutations.num_to_str((function (){var x__4214__auto__ = (1);
var y__4215__auto__ = (function (){var x__4217__auto__ = bci_36404;
var y__4218__auto__ = predict_prostate.state.mutations.str_to_num(value_36402__$1);
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})();
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})()));
}

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_36402__$1),(cljs.core.truth_(bad_36403)?":":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(bad_36403)].join(''));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520),key_36399)){
var vec__36292_36406 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(value,":");
var value_36407__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36292_36406,(0),null);
var bad_36408 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36292_36406,(1),null);
var bci_36409 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520))));
var bct_36410 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666))));
if(cljs.core.not(isNaN(bct_36410))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_36407__$1),(cljs.core.truth_((function (){var or__4126__auto__ = (value_36407__$1 < (0));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return bad_36408;
}
})())?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_36407__$1)].join(''):"")].join(''));
} else {
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_36399,new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969)),value);

predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969),value], null));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,new cljs.core.Keyword(null,"gleason","gleason",-2044470526))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526)),cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518))));
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518)),cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526))));
}
} else {
if(cljs.core.truth_((function (){var fexpr__36295 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gleason","gleason",-2044470526),null,new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518),null], null), null);
return (fexpr__36295.cljs$core$IFn$_invoke$arity$1 ? fexpr__36295.cljs$core$IFn$_invoke$arity$1(key_36399) : fexpr__36295.call(null,key_36399));
})())){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526)),value);

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518)),value);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_36399,new cljs.core.Keyword(null,"h-admissions","h-admissions",-1503094844))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"h-admissions","h-admissions",-1503094844)),value);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,(0))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"charlson-comorbidity","charlson-comorbidity",-633596907)),null);
} else {
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_36399,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),value);

predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),value], null));
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(key_36399),(((value == null))?predict_prostate.state.config.get_input_default(predict_prostate.state.config.input_groups,key_36399):value));

}
}
}
}
}
}

return predict_prostate.models.runner.recalculate_model.cljs$core$IFn$_invoke$arity$2(predict_prostate.state.run_time.input_map(),predict_prostate.state.run_time.N);
});})(seq__36252_36368,chunk__36253_36369,count__36254_36370,i__36255_36371,vec__36286_36398,key_36399,change_36400,seq__36252_36392__$1,temp__5735__auto___36391))
);
} else {
}


var G__36416 = cljs.core.next(seq__36252_36392__$1);
var G__36417 = null;
var G__36418 = (0);
var G__36419 = (0);
seq__36252_36368 = G__36416;
chunk__36253_36369 = G__36417;
count__36254_36370 = G__36418;
i__36255_36371 = G__36419;
continue;
}
} else {
}
}
break;
}

predict_prostate.state.run_time.force_recalculation.pubsub$feeds$TopicFeed$subscribe$arity$2(null,(function (_,___$1){
return predict_prostate.models.runner.recalculate_model.cljs$core$IFn$_invoke$arity$2(predict_prostate.state.run_time.input_map(),predict_prostate.state.run_time.N);
}));

predict_prostate.state.mutations.subscribe_to.cljs$core$IFn$_invoke$arity$variadic(predict_prostate.state.run_time.media_change,predict_prostate.state.run_time.media_cursor,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([false], 0));

predict_prostate.state.mutations.subscribe_to.cljs$core$IFn$_invoke$arity$variadic(predict_prostate.state.run_time.active_results_change,predict_prostate.state.run_time.active_results_pane,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([true], 0));

predict_prostate.state.mutations.subscribe_to.cljs$core$IFn$_invoke$arity$variadic(predict_prostate.state.run_time.mockup_change,predict_prostate.state.run_time.mockup_cursor,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([true], 0));

predict_prostate.state.mutations.subscribe_to.cljs$core$IFn$_invoke$arity$variadic(predict_prostate.state.run_time.hide_warning_change,predict_prostate.state.run_time.hide_warning_cursor,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([true], 0));

predict_prostate.state.mutations.subscribe_to.cljs$core$IFn$_invoke$arity$variadic(predict_prostate.state.run_time.show_uncertainty_change,predict_prostate.state.run_time.show_uncertainty_cursor,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([true], 0));

predict_prostate.state.run_time.results_change.pubsub$feeds$TopicFeed$subscribe$arity$2(null,(function (_,results){
return cljs.core.reset_BANG_(predict_prostate.state.run_time.results_cursor,results);
}));

predict_prostate.state.run_time.help_key_change.pubsub$feeds$TopicFeed$subscribe$arity$2(null,(function (_,help_key){
cljs.core.reset_BANG_(predict_prostate.state.run_time.help_key_cursor,help_key);

if(cljs.core.truth_(help_key)){
return $("#topModal").modal("show");
} else {
return $("#topModal").modal("hide");
}
}));

predict_prostate.state.run_time.settings_change.pubsub$feeds$TopicFeed$subscribe$arity$2(null,(function (_,help_key){
cljs.core.reset_BANG_(predict_prostate.state.run_time.settings_cursor,help_key);

if(cljs.core.truth_(help_key)){
return $("#settingsModal").modal("show");
} else {
return $("#settingsModal").modal("hide");
}
}));

predict_prostate.state.run_time.print_change.pubsub$feeds$TopicFeed$subscribe$arity$2(null,(function (_,val){
cljs.core.reset_BANG_(predict_prostate.state.run_time.print_cursor,val);

return $("#printModal").modal("show");
}));

predict_prostate.state.run_time.route_change.pubsub$feeds$TopicFeed$subscribe$arity$2(null,(function (_,p__36296){
var vec__36297 = p__36296;
var page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36297,(0),null);
var param1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36297,(1),null);
var param2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36297,(2),null);
var rvec = vec__36297;
cljs.core.reset_BANG_(predict_prostate.state.run_time.route,rvec);

bide.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$4(predict_prostate.router.router,page,param1,param2);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(page,new cljs.core.Keyword(null,"home","home",-74557309))){
return (location.href = (cljs.core.truth_(predict_prostate.router.use_hash_fragment())?"/#":"/"));
} else {
return null;
}
}));

predict_prostate.state.run_time.language_change.pubsub$feeds$TopicFeed$subscribe$arity$2(null,(function (_,lang){
var old_lang = new cljs.core.Keyword(null,"lang","lang",-1819677104).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(predict_prostate.state.run_time.t_state_cursor));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(predict_prostate.state.run_time.t_state_cursor,translations.tongue_base.process_dict_op,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switch","switch",71881310),lang], null));

if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old_lang,lang)){
predict_prostate.state.mutations.switch_lang(cljs.core.name(lang));

predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lang","lang",-1819677104),lang], null));

return $("html").attr("dir",(cljs.core.truth_((predict_prostate.state.config.rtl_languages.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.state.config.rtl_languages.cljs$core$IFn$_invoke$arity$1(lang) : predict_prostate.state.config.rtl_languages.call(null,lang)))?"rtl":"ltr"));
} else {
return null;
}
}));

predict_prostate.state.run_time.t_state_change.pubsub$feeds$TopicFeed$subscribe$arity$2(null,(function (_,url){
var new_lang_36422 = new cljs.core.Keyword(null,"lang","lang",-1819677104).cljs$core$IFn$_invoke$arity$1(predict_prostate.state.localStorage.get_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"en","en",88457073)], null)));
predict_prostate.state.mutations.reload_lang(cljs.core.name(new_lang_36422));

return translations.tongue_base.load_translations_STAR_(url,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(translations.tongue_base.handle_dictionary,predict_prostate.state.run_time.t_state_cursor));
}));

predict_prostate.state.run_time.edit_change.pubsub$feeds$TopicFeed$subscribe$arity$2(null,(function (_,arg){
var text = (function (){var fexpr__36300 = cljs.core.deref(predict_prostate.state.run_time.ttt_cursor);
return (fexpr__36300.cljs$core$IFn$_invoke$arity$1 ? fexpr__36300.cljs$core$IFn$_invoke$arity$1(arg) : fexpr__36300.call(null,arg));
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(predict_prostate.state.run_time.edit_cursor,cljs.core.assoc,new cljs.core.Keyword(null,"edit-arg","edit-arg",1216866257),arg,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"edit-key","edit-key",-1833788727),((((cljs.core.vector_QMARK_(arg)) && ((cljs.core.count(arg) > (0)))))?cljs.core.first(arg):arg),new cljs.core.Keyword(null,"text","text",-1790561697),((((cljs.core.vector_QMARK_(arg)) && ((cljs.core.count(arg) > (1)))))?cljs.core.second(arg):text)], 0));

return $("#editorModal").modal("show");
}));

predict_prostate.state.run_time.new_text_change.pubsub$feeds$TopicFeed$subscribe$arity$2(null,(function (_,p__36301){
var vec__36302 = p__36301;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36302,(0),null);
var new_text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36302,(1),null);
return cljs.core.reset_BANG_(predict_prostate.state.run_time.new_text_cursor,new_text);
}));

predict_prostate.state.run_time.text_change.pubsub$feeds$TopicFeed$subscribe$arity$2(null,(function (_,p__36305){
var vec__36306 = p__36305;
var edit_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36306,(0),null);
var new_text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36306,(1),null);
var lang = new cljs.core.Keyword(null,"lang","lang",-1819677104).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(predict_prostate.state.run_time.t_state_cursor));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(predict_prostate.state.run_time.t_state_cursor,translations.tongue_base.process_dict_op,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"upsert","upsert",1416724984),new cljs.core.Keyword(null,"lang","lang",-1819677104).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(predict_prostate.state.run_time.t_state_cursor)),cljs.core.PersistentArrayMap.createAsIfByAssoc([edit_key,new_text])], null));

cljs.core.reset_BANG_(predict_prostate.state.run_time.new_text_cursor,null);

return translations.tranny_api.upload_translation.cljs$core$IFn$_invoke$arity$3(edit_key,cljs.core.name(lang),new_text);
}));

predict_prostate.state.run_time.add_language_modal.pubsub$feeds$TopicFeed$subscribe$arity$2(null,(function (_){
return $("#newLanguageModal").modal("show");
}));

predict_prostate.state.run_time.add_language.pubsub$feeds$TopicFeed$subscribe$arity$2(null,(function (_,p__36309){
var vec__36310 = p__36309;
var new_lang = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36310,(0),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(new_lang))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(predict_prostate.state.run_time.t_state_cursor,cljs.core.update,new cljs.core.Keyword(null,"languages","languages",1471910331),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(new_lang)], 0));
} else {
return null;
}
}));

return predict_prostate.state.mutations.clear_inputs();
});

//# sourceMappingURL=predict_prostate.state.mutations.js.map
