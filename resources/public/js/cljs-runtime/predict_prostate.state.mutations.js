goog.provide('predict_prostate.state.mutations');
predict_prostate.state.mutations.paq = window._paq;
/**
 * Send an event to matemo. 
 */
predict_prostate.state.mutations.matomo_track = (function predict_prostate$state$mutations$matomo_track(var_args){
var G__137941 = arguments.length;
switch (G__137941) {
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
var seq__137957_138342 = cljs.core.seq(predict_prostate.state.run_time.input_changes());
var chunk__137960_138343 = null;
var count__137961_138344 = (0);
var i__137962_138345 = (0);
while(true){
if((i__137962_138345 < count__137961_138344)){
var vec__138046_138348 = chunk__137960_138343.cljs$core$IIndexed$_nth$arity$2(null,i__137962_138345);
var key_138349 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__138046_138348,(0),null);
var topic_138350 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__138046_138348,(1),null);
if(cljs.core.truth_(key_138349)){
if(cljs.core.truth_(topic_138350)){

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_138349,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355))){
var map__138049_138356 = predict_prostate.state.localStorage.get_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),new cljs.core.Keyword(null,"line2","line2",-1975668782)], null));
var map__138049_138357__$1 = (((((!((map__138049_138356 == null))))?(((((map__138049_138356.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__138049_138356.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__138049_138356):map__138049_138356);
var plot_style_138358 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__138049_138357__$1,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355));
if(cljs.core.truth_((function (){var fexpr__138057 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"area1","area1",-316994623),null,new cljs.core.Keyword(null,"line2","line2",-1975668782),null], null), null);
return (fexpr__138057.cljs$core$IFn$_invoke$arity$1 ? fexpr__138057.cljs$core$IFn$_invoke$arity$1(plot_style_138358) : fexpr__138057.call(null,plot_style_138358));
})())){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),plot_style_138358);
} else {
predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),new cljs.core.Keyword(null,"line2","line2",-1975668782)], null));

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),new cljs.core.Keyword(null,"line2","line2",-1975668782));
}
} else {
pubsub.feeds.publish(topic_138350,(cljs.core.truth_((function (){var fexpr__138061 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"age","age",-604307804),null,new cljs.core.Keyword(null,"psa","psa",-321761459),null], null), null);
return (fexpr__138061.cljs$core$IFn$_invoke$arity$1 ? fexpr__138061.cljs$core$IFn$_invoke$arity$1(key_138349) : fexpr__138061.call(null,key_138349));
})())?"":null));

}


var G__138373 = seq__137957_138342;
var G__138374 = chunk__137960_138343;
var G__138375 = count__137961_138344;
var G__138376 = (i__137962_138345 + (1));
seq__137957_138342 = G__138373;
chunk__137960_138343 = G__138374;
count__137961_138344 = G__138375;
i__137962_138345 = G__138376;
continue;
} else {
var G__138381 = seq__137957_138342;
var G__138382 = chunk__137960_138343;
var G__138383 = count__137961_138344;
var G__138385 = (i__137962_138345 + (1));
seq__137957_138342 = G__138381;
chunk__137960_138343 = G__138382;
count__137961_138344 = G__138383;
i__137962_138345 = G__138385;
continue;
}
} else {
var G__138387 = seq__137957_138342;
var G__138388 = chunk__137960_138343;
var G__138389 = count__137961_138344;
var G__138390 = (i__137962_138345 + (1));
seq__137957_138342 = G__138387;
chunk__137960_138343 = G__138388;
count__137961_138344 = G__138389;
i__137962_138345 = G__138390;
continue;
}
} else {
var temp__5735__auto___138394 = cljs.core.seq(seq__137957_138342);
if(temp__5735__auto___138394){
var seq__137957_138404__$1 = temp__5735__auto___138394;
if(cljs.core.chunked_seq_QMARK_(seq__137957_138404__$1)){
var c__4556__auto___138407 = cljs.core.chunk_first(seq__137957_138404__$1);
var G__138408 = cljs.core.chunk_rest(seq__137957_138404__$1);
var G__138409 = c__4556__auto___138407;
var G__138410 = cljs.core.count(c__4556__auto___138407);
var G__138411 = (0);
seq__137957_138342 = G__138408;
chunk__137960_138343 = G__138409;
count__137961_138344 = G__138410;
i__137962_138345 = G__138411;
continue;
} else {
var vec__138070_138417 = cljs.core.first(seq__137957_138404__$1);
var key_138418 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__138070_138417,(0),null);
var topic_138419 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__138070_138417,(1),null);
if(cljs.core.truth_(key_138418)){
if(cljs.core.truth_(topic_138419)){

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_138418,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355))){
var map__138073_138424 = predict_prostate.state.localStorage.get_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),new cljs.core.Keyword(null,"line2","line2",-1975668782)], null));
var map__138073_138425__$1 = (((((!((map__138073_138424 == null))))?(((((map__138073_138424.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__138073_138424.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__138073_138424):map__138073_138424);
var plot_style_138426 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__138073_138425__$1,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355));
if(cljs.core.truth_((function (){var fexpr__138079 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"area1","area1",-316994623),null,new cljs.core.Keyword(null,"line2","line2",-1975668782),null], null), null);
return (fexpr__138079.cljs$core$IFn$_invoke$arity$1 ? fexpr__138079.cljs$core$IFn$_invoke$arity$1(plot_style_138426) : fexpr__138079.call(null,plot_style_138426));
})())){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),plot_style_138426);
} else {
predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),new cljs.core.Keyword(null,"line2","line2",-1975668782)], null));

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),new cljs.core.Keyword(null,"line2","line2",-1975668782));
}
} else {
pubsub.feeds.publish(topic_138419,(cljs.core.truth_((function (){var fexpr__138085 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"age","age",-604307804),null,new cljs.core.Keyword(null,"psa","psa",-321761459),null], null), null);
return (fexpr__138085.cljs$core$IFn$_invoke$arity$1 ? fexpr__138085.cljs$core$IFn$_invoke$arity$1(key_138418) : fexpr__138085.call(null,key_138418));
})())?"":null));

}


var G__138430 = cljs.core.next(seq__137957_138404__$1);
var G__138431 = null;
var G__138432 = (0);
var G__138433 = (0);
seq__137957_138342 = G__138430;
chunk__137960_138343 = G__138431;
count__137961_138344 = G__138432;
i__137962_138345 = G__138433;
continue;
} else {
var G__138434 = cljs.core.next(seq__137957_138404__$1);
var G__138435 = null;
var G__138436 = (0);
var G__138437 = (0);
seq__137957_138342 = G__138434;
chunk__137960_138343 = G__138435;
count__137961_138344 = G__138436;
i__137962_138345 = G__138437;
continue;
}
} else {
var G__138438 = cljs.core.next(seq__137957_138404__$1);
var G__138439 = null;
var G__138440 = (0);
var G__138441 = (0);
seq__137957_138342 = G__138438;
chunk__137960_138343 = G__138439;
count__137961_138344 = G__138440;
i__137962_138345 = G__138441;
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
var len__4736__auto___138442 = arguments.length;
var i__4737__auto___138443 = (0);
while(true){
if((i__4737__auto___138443 < len__4736__auto___138442)){
args__4742__auto__.push((arguments[i__4737__auto___138443]));

var G__138445 = (i__4737__auto___138443 + (1));
i__4737__auto___138443 = G__138445;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return predict_prostate.state.mutations.subscribe_to.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(predict_prostate.state.mutations.subscribe_to.cljs$core$IFn$_invoke$arity$variadic = (function (change,cursor,p__138159){
var vec__138162 = p__138159;
var silent = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__138162,(0),null);
return pubsub.feeds.subscribe(change,(function (p1__138107_SHARP_,p2__138108_SHARP_){
if(cljs.core.truth_(silent)){
} else {
predict_prostate.state.mutations.log(p1__138107_SHARP_,cljs.core.deref(cursor),p2__138108_SHARP_);
}

return cljs.core.reset_BANG_(cursor,p2__138108_SHARP_);
}));
}));

(predict_prostate.state.mutations.subscribe_to.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(predict_prostate.state.mutations.subscribe_to.cljs$lang$applyTo = (function (seq138112){
var G__138113 = cljs.core.first(seq138112);
var seq138112__$1 = cljs.core.next(seq138112);
var G__138114 = cljs.core.first(seq138112__$1);
var seq138112__$2 = cljs.core.next(seq138112__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__138113,G__138114,seq138112__$2);
}));

predict_prostate.state.mutations.clip = (function predict_prostate$state$mutations$clip(p__138173){
var map__138179 = p__138173;
var map__138179__$1 = (((((!((map__138179 == null))))?(((((map__138179.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__138179.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__138179):map__138179);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__138179__$1,new cljs.core.Keyword(null,"value","value",305978217));
var min = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__138179__$1,new cljs.core.Keyword(null,"min","min",444991522));
var max = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__138179__$1,new cljs.core.Keyword(null,"max","max",61366548));
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
var seq__138212_138450 = cljs.core.seq(predict_prostate.state.run_time.input_changes());
var chunk__138213_138451 = null;
var count__138214_138452 = (0);
var i__138215_138453 = (0);
while(true){
if((i__138215_138453 < count__138214_138452)){
var vec__138266_138454 = chunk__138213_138451.cljs$core$IIndexed$_nth$arity$2(null,i__138215_138453);
var key_138455 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__138266_138454,(0),null);
var change_138456 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__138266_138454,(1),null);
if(cljs.core.truth_(change_138456)){
pubsub.feeds.subscribe(change_138456,((function (seq__138212_138450,chunk__138213_138451,count__138214_138452,i__138215_138453,vec__138266_138454,key_138455,change_138456){
return (function (topic,value){
predict_prostate.state.mutations.log(topic,cljs.core.deref(predict_prostate.state.run_time.input_cursor(key_138455)),value);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666),key_138455)){
var vec__138269_138457 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(value,":");
var value_138458__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__138269_138457,(0),null);
var bad_138459 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__138269_138457,(1),null);
var bci_138460 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520))));
var bct_138461 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666))));
if(cljs.core.truth_(isNaN(bci_138460))){
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520)),predict_prostate.state.mutations.num_to_str((function (){var x__4214__auto__ = (1);
var y__4215__auto__ = (function (){var x__4217__auto__ = bci_138460;
var y__4218__auto__ = predict_prostate.state.mutations.str_to_num(value_138458__$1);
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})();
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})()));
}

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_138458__$1),(cljs.core.truth_(bad_138459)?":":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(bad_138459)].join(''));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520),key_138455)){
var vec__138274_138462 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(value,":");
var value_138463__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__138274_138462,(0),null);
var bad_138464 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__138274_138462,(1),null);
var bci_138465 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520))));
var bct_138466 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666))));
if(cljs.core.not(isNaN(bct_138466))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_138463__$1),(cljs.core.truth_((function (){var or__4126__auto__ = (value_138463__$1 < (0));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return bad_138464;
}
})())?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_138463__$1)].join(''):"")].join(''));
} else {
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_138455,new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969)),value);

predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969),value], null));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,new cljs.core.Keyword(null,"gleason","gleason",-2044470526))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526)),cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518))));
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518)),cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526))));
}
} else {
if(cljs.core.truth_((function (){var fexpr__138280 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gleason","gleason",-2044470526),null,new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518),null], null), null);
return (fexpr__138280.cljs$core$IFn$_invoke$arity$1 ? fexpr__138280.cljs$core$IFn$_invoke$arity$1(key_138455) : fexpr__138280.call(null,key_138455));
})())){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526)),value);

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518)),value);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_138455,new cljs.core.Keyword(null,"h-admissions","h-admissions",-1503094844))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"h-admissions","h-admissions",-1503094844)),value);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,(0))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"charlson-comorbidity","charlson-comorbidity",-633596907)),null);
} else {
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_138455,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),value);

predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),value], null));
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(key_138455),(((value == null))?predict_prostate.state.config.get_input_default(predict_prostate.state.config.input_groups,key_138455):value));

}
}
}
}
}
}

return predict_prostate.models.runner.recalculate_model.cljs$core$IFn$_invoke$arity$2(predict_prostate.state.run_time.input_map(),predict_prostate.state.run_time.N);
});})(seq__138212_138450,chunk__138213_138451,count__138214_138452,i__138215_138453,vec__138266_138454,key_138455,change_138456))
);
} else {
}


var G__138467 = seq__138212_138450;
var G__138468 = chunk__138213_138451;
var G__138469 = count__138214_138452;
var G__138470 = (i__138215_138453 + (1));
seq__138212_138450 = G__138467;
chunk__138213_138451 = G__138468;
count__138214_138452 = G__138469;
i__138215_138453 = G__138470;
continue;
} else {
var temp__5735__auto___138471 = cljs.core.seq(seq__138212_138450);
if(temp__5735__auto___138471){
var seq__138212_138472__$1 = temp__5735__auto___138471;
if(cljs.core.chunked_seq_QMARK_(seq__138212_138472__$1)){
var c__4556__auto___138473 = cljs.core.chunk_first(seq__138212_138472__$1);
var G__138474 = cljs.core.chunk_rest(seq__138212_138472__$1);
var G__138475 = c__4556__auto___138473;
var G__138476 = cljs.core.count(c__4556__auto___138473);
var G__138477 = (0);
seq__138212_138450 = G__138474;
chunk__138213_138451 = G__138475;
count__138214_138452 = G__138476;
i__138215_138453 = G__138477;
continue;
} else {
var vec__138281_138478 = cljs.core.first(seq__138212_138472__$1);
var key_138479 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__138281_138478,(0),null);
var change_138480 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__138281_138478,(1),null);
if(cljs.core.truth_(change_138480)){
pubsub.feeds.subscribe(change_138480,((function (seq__138212_138450,chunk__138213_138451,count__138214_138452,i__138215_138453,vec__138281_138478,key_138479,change_138480,seq__138212_138472__$1,temp__5735__auto___138471){
return (function (topic,value){
predict_prostate.state.mutations.log(topic,cljs.core.deref(predict_prostate.state.run_time.input_cursor(key_138479)),value);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666),key_138479)){
var vec__138286_138481 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(value,":");
var value_138482__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__138286_138481,(0),null);
var bad_138483 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__138286_138481,(1),null);
var bci_138484 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520))));
var bct_138485 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666))));
if(cljs.core.truth_(isNaN(bci_138484))){
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520)),predict_prostate.state.mutations.num_to_str((function (){var x__4214__auto__ = (1);
var y__4215__auto__ = (function (){var x__4217__auto__ = bci_138484;
var y__4218__auto__ = predict_prostate.state.mutations.str_to_num(value_138482__$1);
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})();
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})()));
}

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_138482__$1),(cljs.core.truth_(bad_138483)?":":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(bad_138483)].join(''));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520),key_138479)){
var vec__138290_138486 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(value,":");
var value_138487__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__138290_138486,(0),null);
var bad_138488 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__138290_138486,(1),null);
var bci_138489 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520))));
var bct_138490 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666))));
if(cljs.core.not(isNaN(bct_138490))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_138487__$1),(cljs.core.truth_((function (){var or__4126__auto__ = (value_138487__$1 < (0));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return bad_138488;
}
})())?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_138487__$1)].join(''):"")].join(''));
} else {
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_138479,new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969)),value);

predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969),value], null));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,new cljs.core.Keyword(null,"gleason","gleason",-2044470526))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526)),cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518))));
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518)),cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526))));
}
} else {
if(cljs.core.truth_((function (){var fexpr__138295 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gleason","gleason",-2044470526),null,new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518),null], null), null);
return (fexpr__138295.cljs$core$IFn$_invoke$arity$1 ? fexpr__138295.cljs$core$IFn$_invoke$arity$1(key_138479) : fexpr__138295.call(null,key_138479));
})())){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526)),value);

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518)),value);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_138479,new cljs.core.Keyword(null,"h-admissions","h-admissions",-1503094844))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"h-admissions","h-admissions",-1503094844)),value);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,(0))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"charlson-comorbidity","charlson-comorbidity",-633596907)),null);
} else {
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_138479,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),value);

predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),value], null));
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(key_138479),(((value == null))?predict_prostate.state.config.get_input_default(predict_prostate.state.config.input_groups,key_138479):value));

}
}
}
}
}
}

return predict_prostate.models.runner.recalculate_model.cljs$core$IFn$_invoke$arity$2(predict_prostate.state.run_time.input_map(),predict_prostate.state.run_time.N);
});})(seq__138212_138450,chunk__138213_138451,count__138214_138452,i__138215_138453,vec__138281_138478,key_138479,change_138480,seq__138212_138472__$1,temp__5735__auto___138471))
);
} else {
}


var G__138491 = cljs.core.next(seq__138212_138472__$1);
var G__138492 = null;
var G__138493 = (0);
var G__138494 = (0);
seq__138212_138450 = G__138491;
chunk__138213_138451 = G__138492;
count__138214_138452 = G__138493;
i__138215_138453 = G__138494;
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

predict_prostate.state.run_time.route_change.pubsub$feeds$TopicFeed$subscribe$arity$2(null,(function (_,p__138299){
var vec__138300 = p__138299;
var page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__138300,(0),null);
var param1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__138300,(1),null);
var param2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__138300,(2),null);
var rvec = vec__138300;
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
var new_lang_138496 = new cljs.core.Keyword(null,"lang","lang",-1819677104).cljs$core$IFn$_invoke$arity$1(predict_prostate.state.localStorage.get_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"en","en",88457073)], null)));
predict_prostate.state.mutations.reload_lang(cljs.core.name(new_lang_138496));

return translations.tongue_base.load_translations_STAR_(url,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(translations.tongue_base.handle_dictionary,predict_prostate.state.run_time.t_state_cursor));
}));

predict_prostate.state.run_time.edit_change.pubsub$feeds$TopicFeed$subscribe$arity$2(null,(function (_,arg){
var text = (function (){var fexpr__138304 = cljs.core.deref(predict_prostate.state.run_time.ttt_cursor);
return (fexpr__138304.cljs$core$IFn$_invoke$arity$1 ? fexpr__138304.cljs$core$IFn$_invoke$arity$1(arg) : fexpr__138304.call(null,arg));
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(predict_prostate.state.run_time.edit_cursor,cljs.core.assoc,new cljs.core.Keyword(null,"edit-arg","edit-arg",1216866257),arg,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"edit-key","edit-key",-1833788727),((((cljs.core.vector_QMARK_(arg)) && ((cljs.core.count(arg) > (0)))))?cljs.core.first(arg):arg),new cljs.core.Keyword(null,"text","text",-1790561697),((((cljs.core.vector_QMARK_(arg)) && ((cljs.core.count(arg) > (1)))))?cljs.core.second(arg):text)], 0));

return $("#editorModal").modal("show");
}));

predict_prostate.state.run_time.new_text_change.pubsub$feeds$TopicFeed$subscribe$arity$2(null,(function (_,p__138307){
var vec__138308 = p__138307;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__138308,(0),null);
var new_text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__138308,(1),null);
return cljs.core.reset_BANG_(predict_prostate.state.run_time.new_text_cursor,new_text);
}));

predict_prostate.state.run_time.text_change.pubsub$feeds$TopicFeed$subscribe$arity$2(null,(function (_,p__138311){
var vec__138312 = p__138311;
var edit_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__138312,(0),null);
var new_text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__138312,(1),null);
var lang = new cljs.core.Keyword(null,"lang","lang",-1819677104).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(predict_prostate.state.run_time.t_state_cursor));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(predict_prostate.state.run_time.t_state_cursor,translations.tongue_base.process_dict_op,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"upsert","upsert",1416724984),new cljs.core.Keyword(null,"lang","lang",-1819677104).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(predict_prostate.state.run_time.t_state_cursor)),cljs.core.PersistentArrayMap.createAsIfByAssoc([edit_key,new_text])], null));

cljs.core.reset_BANG_(predict_prostate.state.run_time.new_text_cursor,null);

return translations.tranny_api.upload_translation.cljs$core$IFn$_invoke$arity$3(edit_key,cljs.core.name(lang),new_text);
}));

predict_prostate.state.run_time.add_language_modal.pubsub$feeds$TopicFeed$subscribe$arity$2(null,(function (_){
return $("#newLanguageModal").modal("show");
}));

predict_prostate.state.run_time.add_language.pubsub$feeds$TopicFeed$subscribe$arity$2(null,(function (_,p__138315){
var vec__138316 = p__138315;
var new_lang = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__138316,(0),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(new_lang))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(predict_prostate.state.run_time.t_state_cursor,cljs.core.update,new cljs.core.Keyword(null,"languages","languages",1471910331),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(new_lang)], 0));
} else {
return null;
}
}));

return predict_prostate.state.mutations.clear_inputs();
});

//# sourceMappingURL=predict_prostate.state.mutations.js.map
