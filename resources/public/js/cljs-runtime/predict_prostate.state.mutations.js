goog.provide('predict_prostate.state.mutations');
predict_prostate.state.mutations.clear_inputs = (function predict_prostate$state$mutations$clear_inputs(){
var seq__47193_47398 = cljs.core.seq(predict_prostate.state.run_time.input_changes());
var chunk__47196_47399 = null;
var count__47197_47400 = (0);
var i__47198_47401 = (0);
while(true){
if((i__47198_47401 < count__47197_47400)){
var vec__47246_47402 = chunk__47196_47399.cljs$core$IIndexed$_nth$arity$2(null,i__47198_47401);
var key_47403 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47246_47402,(0),null);
var topic_47404 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47246_47402,(1),null);
if(cljs.core.truth_(key_47403)){
if(cljs.core.truth_(topic_47404)){

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_47403,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355))){
var map__47255_47405 = predict_prostate.state.localStorage.get_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),new cljs.core.Keyword(null,"line2","line2",-1975668782)], null));
var map__47255_47406__$1 = (((((!((map__47255_47405 == null))))?(((((map__47255_47405.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47255_47405.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47255_47405):map__47255_47405);
var plot_style_47407 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47255_47406__$1,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355));
if(cljs.core.truth_((function (){var fexpr__47258 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"area1","area1",-316994623),null,new cljs.core.Keyword(null,"line2","line2",-1975668782),null], null), null);
return (fexpr__47258.cljs$core$IFn$_invoke$arity$1 ? fexpr__47258.cljs$core$IFn$_invoke$arity$1(plot_style_47407) : fexpr__47258.call(null,plot_style_47407));
})())){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),plot_style_47407);
} else {
predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),new cljs.core.Keyword(null,"line2","line2",-1975668782)], null));

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),new cljs.core.Keyword(null,"line2","line2",-1975668782));
}
} else {
pubsub.feeds.publish(topic_47404,(cljs.core.truth_((function (){var fexpr__47260 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"age","age",-604307804),null,new cljs.core.Keyword(null,"psa","psa",-321761459),null], null), null);
return (fexpr__47260.cljs$core$IFn$_invoke$arity$1 ? fexpr__47260.cljs$core$IFn$_invoke$arity$1(key_47403) : fexpr__47260.call(null,key_47403));
})())?"":null));

}


var G__47409 = seq__47193_47398;
var G__47410 = chunk__47196_47399;
var G__47411 = count__47197_47400;
var G__47412 = (i__47198_47401 + (1));
seq__47193_47398 = G__47409;
chunk__47196_47399 = G__47410;
count__47197_47400 = G__47411;
i__47198_47401 = G__47412;
continue;
} else {
var G__47413 = seq__47193_47398;
var G__47414 = chunk__47196_47399;
var G__47415 = count__47197_47400;
var G__47416 = (i__47198_47401 + (1));
seq__47193_47398 = G__47413;
chunk__47196_47399 = G__47414;
count__47197_47400 = G__47415;
i__47198_47401 = G__47416;
continue;
}
} else {
var G__47417 = seq__47193_47398;
var G__47418 = chunk__47196_47399;
var G__47419 = count__47197_47400;
var G__47420 = (i__47198_47401 + (1));
seq__47193_47398 = G__47417;
chunk__47196_47399 = G__47418;
count__47197_47400 = G__47419;
i__47198_47401 = G__47420;
continue;
}
} else {
var temp__5735__auto___47421 = cljs.core.seq(seq__47193_47398);
if(temp__5735__auto___47421){
var seq__47193_47422__$1 = temp__5735__auto___47421;
if(cljs.core.chunked_seq_QMARK_(seq__47193_47422__$1)){
var c__4556__auto___47423 = cljs.core.chunk_first(seq__47193_47422__$1);
var G__47425 = cljs.core.chunk_rest(seq__47193_47422__$1);
var G__47426 = c__4556__auto___47423;
var G__47427 = cljs.core.count(c__4556__auto___47423);
var G__47428 = (0);
seq__47193_47398 = G__47425;
chunk__47196_47399 = G__47426;
count__47197_47400 = G__47427;
i__47198_47401 = G__47428;
continue;
} else {
var vec__47265_47430 = cljs.core.first(seq__47193_47422__$1);
var key_47431 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47265_47430,(0),null);
var topic_47432 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47265_47430,(1),null);
if(cljs.core.truth_(key_47431)){
if(cljs.core.truth_(topic_47432)){

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_47431,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355))){
var map__47268_47434 = predict_prostate.state.localStorage.get_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),new cljs.core.Keyword(null,"line2","line2",-1975668782)], null));
var map__47268_47435__$1 = (((((!((map__47268_47434 == null))))?(((((map__47268_47434.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47268_47434.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47268_47434):map__47268_47434);
var plot_style_47436 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47268_47435__$1,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355));
if(cljs.core.truth_((function (){var fexpr__47273 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"area1","area1",-316994623),null,new cljs.core.Keyword(null,"line2","line2",-1975668782),null], null), null);
return (fexpr__47273.cljs$core$IFn$_invoke$arity$1 ? fexpr__47273.cljs$core$IFn$_invoke$arity$1(plot_style_47436) : fexpr__47273.call(null,plot_style_47436));
})())){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),plot_style_47436);
} else {
predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),new cljs.core.Keyword(null,"line2","line2",-1975668782)], null));

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),new cljs.core.Keyword(null,"line2","line2",-1975668782));
}
} else {
pubsub.feeds.publish(topic_47432,(cljs.core.truth_((function (){var fexpr__47274 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"age","age",-604307804),null,new cljs.core.Keyword(null,"psa","psa",-321761459),null], null), null);
return (fexpr__47274.cljs$core$IFn$_invoke$arity$1 ? fexpr__47274.cljs$core$IFn$_invoke$arity$1(key_47431) : fexpr__47274.call(null,key_47431));
})())?"":null));

}


var G__47437 = cljs.core.next(seq__47193_47422__$1);
var G__47438 = null;
var G__47439 = (0);
var G__47440 = (0);
seq__47193_47398 = G__47437;
chunk__47196_47399 = G__47438;
count__47197_47400 = G__47439;
i__47198_47401 = G__47440;
continue;
} else {
var G__47442 = cljs.core.next(seq__47193_47422__$1);
var G__47443 = null;
var G__47444 = (0);
var G__47445 = (0);
seq__47193_47398 = G__47442;
chunk__47196_47399 = G__47443;
count__47197_47400 = G__47444;
i__47198_47401 = G__47445;
continue;
}
} else {
var G__47446 = cljs.core.next(seq__47193_47422__$1);
var G__47447 = null;
var G__47448 = (0);
var G__47449 = (0);
seq__47193_47398 = G__47446;
chunk__47196_47399 = G__47447;
count__47197_47400 = G__47448;
i__47198_47401 = G__47449;
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
var len__4736__auto___47452 = arguments.length;
var i__4737__auto___47454 = (0);
while(true){
if((i__4737__auto___47454 < len__4736__auto___47452)){
args__4742__auto__.push((arguments[i__4737__auto___47454]));

var G__47455 = (i__4737__auto___47454 + (1));
i__4737__auto___47454 = G__47455;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return predict_prostate.state.mutations.subscribe_to.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(predict_prostate.state.mutations.subscribe_to.cljs$core$IFn$_invoke$arity$variadic = (function (change,cursor,p__47294){
var vec__47295 = p__47294;
var silent = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47295,(0),null);
return pubsub.feeds.subscribe(change,(function (p1__47278_SHARP_,p2__47279_SHARP_){
if(cljs.core.truth_(silent)){
} else {
predict_prostate.state.mutations.log(p1__47278_SHARP_,cljs.core.deref(cursor),p2__47279_SHARP_);
}

return cljs.core.reset_BANG_(cursor,p2__47279_SHARP_);
}));
}));

(predict_prostate.state.mutations.subscribe_to.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(predict_prostate.state.mutations.subscribe_to.cljs$lang$applyTo = (function (seq47280){
var G__47281 = cljs.core.first(seq47280);
var seq47280__$1 = cljs.core.next(seq47280);
var G__47282 = cljs.core.first(seq47280__$1);
var seq47280__$2 = cljs.core.next(seq47280__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47281,G__47282,seq47280__$2);
}));

predict_prostate.state.mutations.clip = (function predict_prostate$state$mutations$clip(p__47313){
var map__47314 = p__47313;
var map__47314__$1 = (((((!((map__47314 == null))))?(((((map__47314.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47314.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47314):map__47314);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47314__$1,new cljs.core.Keyword(null,"value","value",305978217));
var min = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47314__$1,new cljs.core.Keyword(null,"min","min",444991522));
var max = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47314__$1,new cljs.core.Keyword(null,"max","max",61366548));
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
var seq__47320_47460 = cljs.core.seq(predict_prostate.state.run_time.input_changes());
var chunk__47321_47461 = null;
var count__47322_47462 = (0);
var i__47323_47463 = (0);
while(true){
if((i__47323_47463 < count__47322_47462)){
var vec__47374_47465 = chunk__47321_47461.cljs$core$IIndexed$_nth$arity$2(null,i__47323_47463);
var key_47466 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47374_47465,(0),null);
var change_47467 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47374_47465,(1),null);
if(cljs.core.truth_(change_47467)){
pubsub.feeds.subscribe(change_47467,((function (seq__47320_47460,chunk__47321_47461,count__47322_47462,i__47323_47463,vec__47374_47465,key_47466,change_47467){
return (function (topic,value){
predict_prostate.state.mutations.log(topic,cljs.core.deref(predict_prostate.state.run_time.input_cursor(key_47466)),value);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666),key_47466)){
var vec__47377_47470 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(value,":");
var value_47471__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47377_47470,(0),null);
var bad_47472 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47377_47470,(1),null);
var bci_47473 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520))));
var bct_47474 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666))));
if(cljs.core.truth_(isNaN(bci_47473))){
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520)),predict_prostate.state.mutations.num_to_str((function (){var x__4214__auto__ = (1);
var y__4215__auto__ = (function (){var x__4217__auto__ = bci_47473;
var y__4218__auto__ = predict_prostate.state.mutations.str_to_num(value_47471__$1);
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})();
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})()));
}

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_47471__$1),(cljs.core.truth_(bad_47472)?":":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(bad_47472)].join(''));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520),key_47466)){
var vec__47380_47476 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(value,":");
var value_47477__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47380_47476,(0),null);
var bad_47478 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47380_47476,(1),null);
var bci_47479 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520))));
var bct_47480 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666))));
if(cljs.core.not(isNaN(bct_47480))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_47477__$1),(cljs.core.truth_((function (){var or__4126__auto__ = (value_47477__$1 < (0));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return bad_47478;
}
})())?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_47477__$1)].join(''):"")].join(''));
} else {
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_47466,new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969)),value);

predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969),value], null));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,new cljs.core.Keyword(null,"gleason","gleason",-2044470526))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526)),cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518))));
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518)),cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526))));
}
} else {
if(cljs.core.truth_((function (){var fexpr__47383 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gleason","gleason",-2044470526),null,new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518),null], null), null);
return (fexpr__47383.cljs$core$IFn$_invoke$arity$1 ? fexpr__47383.cljs$core$IFn$_invoke$arity$1(key_47466) : fexpr__47383.call(null,key_47466));
})())){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526)),value);

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518)),value);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_47466,new cljs.core.Keyword(null,"h-admissions","h-admissions",-1503094844))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"h-admissions","h-admissions",-1503094844)),value);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,(0))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"charlson-comorbidity","charlson-comorbidity",-633596907)),null);
} else {
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_47466,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),value);

predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),value], null));
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(key_47466),(((value == null))?predict_prostate.state.config.get_input_default(predict_prostate.state.config.input_groups,key_47466):value));

}
}
}
}
}
}

return predict_prostate.models.runner.recalculate_model.cljs$core$IFn$_invoke$arity$2(predict_prostate.state.run_time.input_map(),predict_prostate.state.run_time.N);
});})(seq__47320_47460,chunk__47321_47461,count__47322_47462,i__47323_47463,vec__47374_47465,key_47466,change_47467))
);
} else {
}


var G__47486 = seq__47320_47460;
var G__47487 = chunk__47321_47461;
var G__47488 = count__47322_47462;
var G__47489 = (i__47323_47463 + (1));
seq__47320_47460 = G__47486;
chunk__47321_47461 = G__47487;
count__47322_47462 = G__47488;
i__47323_47463 = G__47489;
continue;
} else {
var temp__5735__auto___47490 = cljs.core.seq(seq__47320_47460);
if(temp__5735__auto___47490){
var seq__47320_47491__$1 = temp__5735__auto___47490;
if(cljs.core.chunked_seq_QMARK_(seq__47320_47491__$1)){
var c__4556__auto___47493 = cljs.core.chunk_first(seq__47320_47491__$1);
var G__47494 = cljs.core.chunk_rest(seq__47320_47491__$1);
var G__47495 = c__4556__auto___47493;
var G__47496 = cljs.core.count(c__4556__auto___47493);
var G__47497 = (0);
seq__47320_47460 = G__47494;
chunk__47321_47461 = G__47495;
count__47322_47462 = G__47496;
i__47323_47463 = G__47497;
continue;
} else {
var vec__47384_47498 = cljs.core.first(seq__47320_47491__$1);
var key_47499 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47384_47498,(0),null);
var change_47500 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47384_47498,(1),null);
if(cljs.core.truth_(change_47500)){
pubsub.feeds.subscribe(change_47500,((function (seq__47320_47460,chunk__47321_47461,count__47322_47462,i__47323_47463,vec__47384_47498,key_47499,change_47500,seq__47320_47491__$1,temp__5735__auto___47490){
return (function (topic,value){
predict_prostate.state.mutations.log(topic,cljs.core.deref(predict_prostate.state.run_time.input_cursor(key_47499)),value);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666),key_47499)){
var vec__47387_47502 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(value,":");
var value_47503__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47387_47502,(0),null);
var bad_47504 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47387_47502,(1),null);
var bci_47505 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520))));
var bct_47506 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666))));
if(cljs.core.truth_(isNaN(bci_47505))){
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520)),predict_prostate.state.mutations.num_to_str((function (){var x__4214__auto__ = (1);
var y__4215__auto__ = (function (){var x__4217__auto__ = bci_47505;
var y__4218__auto__ = predict_prostate.state.mutations.str_to_num(value_47503__$1);
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})();
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})()));
}

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_47503__$1),(cljs.core.truth_(bad_47504)?":":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(bad_47504)].join(''));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520),key_47499)){
var vec__47390_47510 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(value,":");
var value_47511__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47390_47510,(0),null);
var bad_47512 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47390_47510,(1),null);
var bci_47513 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520))));
var bct_47514 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666))));
if(cljs.core.not(isNaN(bct_47514))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_47511__$1),(cljs.core.truth_((function (){var or__4126__auto__ = (value_47511__$1 < (0));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return bad_47512;
}
})())?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_47511__$1)].join(''):"")].join(''));
} else {
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_47499,new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969)),value);

predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969),value], null));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,new cljs.core.Keyword(null,"gleason","gleason",-2044470526))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526)),cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518))));
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518)),cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526))));
}
} else {
if(cljs.core.truth_((function (){var fexpr__47393 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gleason","gleason",-2044470526),null,new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518),null], null), null);
return (fexpr__47393.cljs$core$IFn$_invoke$arity$1 ? fexpr__47393.cljs$core$IFn$_invoke$arity$1(key_47499) : fexpr__47393.call(null,key_47499));
})())){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526)),value);

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518)),value);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_47499,new cljs.core.Keyword(null,"h-admissions","h-admissions",-1503094844))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"h-admissions","h-admissions",-1503094844)),value);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,(0))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"charlson-comorbidity","charlson-comorbidity",-633596907)),null);
} else {
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_47499,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),value);

predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),value], null));
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(key_47499),(((value == null))?predict_prostate.state.config.get_input_default(predict_prostate.state.config.input_groups,key_47499):value));

}
}
}
}
}
}

return predict_prostate.models.runner.recalculate_model.cljs$core$IFn$_invoke$arity$2(predict_prostate.state.run_time.input_map(),predict_prostate.state.run_time.N);
});})(seq__47320_47460,chunk__47321_47461,count__47322_47462,i__47323_47463,vec__47384_47498,key_47499,change_47500,seq__47320_47491__$1,temp__5735__auto___47490))
);
} else {
}


var G__47520 = cljs.core.next(seq__47320_47491__$1);
var G__47521 = null;
var G__47522 = (0);
var G__47523 = (0);
seq__47320_47460 = G__47520;
chunk__47321_47461 = G__47521;
count__47322_47462 = G__47522;
i__47323_47463 = G__47523;
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

predict_prostate.state.run_time.route_change.pubsub$feeds$TopicFeed$subscribe$arity$2(null,(function (_,p__47394){
var vec__47395 = p__47394;
var page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47395,(0),null);
var param1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47395,(1),null);
var param2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47395,(2),null);
var rvec = vec__47395;
cljs.core.reset_BANG_(predict_prostate.state.run_time.route,rvec);

bide.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$4(predict_prostate.router.router,page,param1,param2);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(page,new cljs.core.Keyword(null,"home","home",-74557309))){
return (location.href = (cljs.core.truth_(predict_prostate.router.use_hash_fragment())?"/#":"/"));
} else {
return null;
}
}));

return predict_prostate.state.mutations.clear_inputs();
});

//# sourceMappingURL=predict_prostate.state.mutations.js.map
