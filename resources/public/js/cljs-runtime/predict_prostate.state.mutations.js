goog.provide('predict_prostate.state.mutations');
predict_prostate.state.mutations.paq = window._paq;
/**
 * Send an event to matemo. 
 */
predict_prostate.state.mutations.matomo_track = (function predict_prostate$state$mutations$matomo_track(var_args){
var G__44307 = arguments.length;
switch (G__44307) {
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
var seq__44308_44418 = cljs.core.seq(predict_prostate.state.run_time.input_changes());
var chunk__44311_44419 = null;
var count__44312_44420 = (0);
var i__44313_44421 = (0);
while(true){
if((i__44313_44421 < count__44312_44420)){
var vec__44330_44422 = chunk__44311_44419.cljs$core$IIndexed$_nth$arity$2(null,i__44313_44421);
var key_44423 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44330_44422,(0),null);
var topic_44424 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44330_44422,(1),null);
if(cljs.core.truth_(key_44423)){
if(cljs.core.truth_(topic_44424)){

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_44423,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355))){
var map__44333_44425 = predict_prostate.state.localStorage.get_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),new cljs.core.Keyword(null,"line2","line2",-1975668782)], null));
var map__44333_44426__$1 = (((((!((map__44333_44425 == null))))?(((((map__44333_44425.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44333_44425.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44333_44425):map__44333_44425);
var plot_style_44427 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44333_44426__$1,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355));
if(cljs.core.truth_((function (){var fexpr__44335 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"area1","area1",-316994623),null,new cljs.core.Keyword(null,"line2","line2",-1975668782),null], null), null);
return (fexpr__44335.cljs$core$IFn$_invoke$arity$1 ? fexpr__44335.cljs$core$IFn$_invoke$arity$1(plot_style_44427) : fexpr__44335.call(null,plot_style_44427));
})())){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),plot_style_44427);
} else {
predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),new cljs.core.Keyword(null,"line2","line2",-1975668782)], null));

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),new cljs.core.Keyword(null,"line2","line2",-1975668782));
}
} else {
pubsub.feeds.publish(topic_44424,(cljs.core.truth_((function (){var fexpr__44336 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"age","age",-604307804),null,new cljs.core.Keyword(null,"psa","psa",-321761459),null], null), null);
return (fexpr__44336.cljs$core$IFn$_invoke$arity$1 ? fexpr__44336.cljs$core$IFn$_invoke$arity$1(key_44423) : fexpr__44336.call(null,key_44423));
})())?"":null));

}


var G__44428 = seq__44308_44418;
var G__44429 = chunk__44311_44419;
var G__44430 = count__44312_44420;
var G__44431 = (i__44313_44421 + (1));
seq__44308_44418 = G__44428;
chunk__44311_44419 = G__44429;
count__44312_44420 = G__44430;
i__44313_44421 = G__44431;
continue;
} else {
var G__44432 = seq__44308_44418;
var G__44433 = chunk__44311_44419;
var G__44434 = count__44312_44420;
var G__44435 = (i__44313_44421 + (1));
seq__44308_44418 = G__44432;
chunk__44311_44419 = G__44433;
count__44312_44420 = G__44434;
i__44313_44421 = G__44435;
continue;
}
} else {
var G__44436 = seq__44308_44418;
var G__44437 = chunk__44311_44419;
var G__44438 = count__44312_44420;
var G__44439 = (i__44313_44421 + (1));
seq__44308_44418 = G__44436;
chunk__44311_44419 = G__44437;
count__44312_44420 = G__44438;
i__44313_44421 = G__44439;
continue;
}
} else {
var temp__5735__auto___44440 = cljs.core.seq(seq__44308_44418);
if(temp__5735__auto___44440){
var seq__44308_44441__$1 = temp__5735__auto___44440;
if(cljs.core.chunked_seq_QMARK_(seq__44308_44441__$1)){
var c__4556__auto___44442 = cljs.core.chunk_first(seq__44308_44441__$1);
var G__44443 = cljs.core.chunk_rest(seq__44308_44441__$1);
var G__44444 = c__4556__auto___44442;
var G__44445 = cljs.core.count(c__4556__auto___44442);
var G__44446 = (0);
seq__44308_44418 = G__44443;
chunk__44311_44419 = G__44444;
count__44312_44420 = G__44445;
i__44313_44421 = G__44446;
continue;
} else {
var vec__44337_44447 = cljs.core.first(seq__44308_44441__$1);
var key_44448 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44337_44447,(0),null);
var topic_44449 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44337_44447,(1),null);
if(cljs.core.truth_(key_44448)){
if(cljs.core.truth_(topic_44449)){

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_44448,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355))){
var map__44340_44450 = predict_prostate.state.localStorage.get_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),new cljs.core.Keyword(null,"line2","line2",-1975668782)], null));
var map__44340_44451__$1 = (((((!((map__44340_44450 == null))))?(((((map__44340_44450.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44340_44450.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44340_44450):map__44340_44450);
var plot_style_44452 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44340_44451__$1,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355));
if(cljs.core.truth_((function (){var fexpr__44342 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"area1","area1",-316994623),null,new cljs.core.Keyword(null,"line2","line2",-1975668782),null], null), null);
return (fexpr__44342.cljs$core$IFn$_invoke$arity$1 ? fexpr__44342.cljs$core$IFn$_invoke$arity$1(plot_style_44452) : fexpr__44342.call(null,plot_style_44452));
})())){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),plot_style_44452);
} else {
predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),new cljs.core.Keyword(null,"line2","line2",-1975668782)], null));

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),new cljs.core.Keyword(null,"line2","line2",-1975668782));
}
} else {
pubsub.feeds.publish(topic_44449,(cljs.core.truth_((function (){var fexpr__44343 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"age","age",-604307804),null,new cljs.core.Keyword(null,"psa","psa",-321761459),null], null), null);
return (fexpr__44343.cljs$core$IFn$_invoke$arity$1 ? fexpr__44343.cljs$core$IFn$_invoke$arity$1(key_44448) : fexpr__44343.call(null,key_44448));
})())?"":null));

}


var G__44453 = cljs.core.next(seq__44308_44441__$1);
var G__44454 = null;
var G__44455 = (0);
var G__44456 = (0);
seq__44308_44418 = G__44453;
chunk__44311_44419 = G__44454;
count__44312_44420 = G__44455;
i__44313_44421 = G__44456;
continue;
} else {
var G__44457 = cljs.core.next(seq__44308_44441__$1);
var G__44458 = null;
var G__44459 = (0);
var G__44460 = (0);
seq__44308_44418 = G__44457;
chunk__44311_44419 = G__44458;
count__44312_44420 = G__44459;
i__44313_44421 = G__44460;
continue;
}
} else {
var G__44461 = cljs.core.next(seq__44308_44441__$1);
var G__44462 = null;
var G__44463 = (0);
var G__44464 = (0);
seq__44308_44418 = G__44461;
chunk__44311_44419 = G__44462;
count__44312_44420 = G__44463;
i__44313_44421 = G__44464;
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
var len__4736__auto___44465 = arguments.length;
var i__4737__auto___44466 = (0);
while(true){
if((i__4737__auto___44466 < len__4736__auto___44465)){
args__4742__auto__.push((arguments[i__4737__auto___44466]));

var G__44467 = (i__4737__auto___44466 + (1));
i__4737__auto___44466 = G__44467;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return predict_prostate.state.mutations.subscribe_to.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(predict_prostate.state.mutations.subscribe_to.cljs$core$IFn$_invoke$arity$variadic = (function (change,cursor,p__44349){
var vec__44350 = p__44349;
var silent = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44350,(0),null);
return pubsub.feeds.subscribe(change,(function (p1__44344_SHARP_,p2__44345_SHARP_){
if(cljs.core.truth_(silent)){
} else {
predict_prostate.state.mutations.log(p1__44344_SHARP_,cljs.core.deref(cursor),p2__44345_SHARP_);
}

return cljs.core.reset_BANG_(cursor,p2__44345_SHARP_);
}));
}));

(predict_prostate.state.mutations.subscribe_to.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(predict_prostate.state.mutations.subscribe_to.cljs$lang$applyTo = (function (seq44346){
var G__44347 = cljs.core.first(seq44346);
var seq44346__$1 = cljs.core.next(seq44346);
var G__44348 = cljs.core.first(seq44346__$1);
var seq44346__$2 = cljs.core.next(seq44346__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44347,G__44348,seq44346__$2);
}));

predict_prostate.state.mutations.clip = (function predict_prostate$state$mutations$clip(p__44353){
var map__44354 = p__44353;
var map__44354__$1 = (((((!((map__44354 == null))))?(((((map__44354.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44354.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44354):map__44354);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44354__$1,new cljs.core.Keyword(null,"value","value",305978217));
var min = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44354__$1,new cljs.core.Keyword(null,"min","min",444991522));
var max = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44354__$1,new cljs.core.Keyword(null,"max","max",61366548));
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
var seq__44356_44471 = cljs.core.seq(predict_prostate.state.run_time.input_changes());
var chunk__44357_44472 = null;
var count__44358_44473 = (0);
var i__44359_44474 = (0);
while(true){
if((i__44359_44474 < count__44358_44473)){
var vec__44380_44475 = chunk__44357_44472.cljs$core$IIndexed$_nth$arity$2(null,i__44359_44474);
var key_44476 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44380_44475,(0),null);
var change_44477 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44380_44475,(1),null);
if(cljs.core.truth_(change_44477)){
pubsub.feeds.subscribe(change_44477,((function (seq__44356_44471,chunk__44357_44472,count__44358_44473,i__44359_44474,vec__44380_44475,key_44476,change_44477){
return (function (topic,value){
predict_prostate.state.mutations.log(topic,cljs.core.deref(predict_prostate.state.run_time.input_cursor(key_44476)),value);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666),key_44476)){
var vec__44383_44479 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(value,":");
var value_44480__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44383_44479,(0),null);
var bad_44481 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44383_44479,(1),null);
var bci_44482 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520))));
var bct_44483 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666))));
if(cljs.core.truth_(isNaN(bci_44482))){
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520)),predict_prostate.state.mutations.num_to_str((function (){var x__4214__auto__ = (1);
var y__4215__auto__ = (function (){var x__4217__auto__ = bci_44482;
var y__4218__auto__ = predict_prostate.state.mutations.str_to_num(value_44480__$1);
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})();
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})()));
}

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_44480__$1),(cljs.core.truth_(bad_44481)?":":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(bad_44481)].join(''));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520),key_44476)){
var vec__44386_44484 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(value,":");
var value_44485__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44386_44484,(0),null);
var bad_44486 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44386_44484,(1),null);
var bci_44487 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520))));
var bct_44488 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666))));
if(cljs.core.not(isNaN(bct_44488))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_44485__$1),(cljs.core.truth_((function (){var or__4126__auto__ = (value_44485__$1 < (0));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return bad_44486;
}
})())?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_44485__$1)].join(''):"")].join(''));
} else {
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_44476,new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969)),value);

predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969),value], null));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,new cljs.core.Keyword(null,"gleason","gleason",-2044470526))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526)),cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518))));
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518)),cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526))));
}
} else {
if(cljs.core.truth_((function (){var fexpr__44389 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gleason","gleason",-2044470526),null,new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518),null], null), null);
return (fexpr__44389.cljs$core$IFn$_invoke$arity$1 ? fexpr__44389.cljs$core$IFn$_invoke$arity$1(key_44476) : fexpr__44389.call(null,key_44476));
})())){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526)),value);

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518)),value);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_44476,new cljs.core.Keyword(null,"h-admissions","h-admissions",-1503094844))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"h-admissions","h-admissions",-1503094844)),value);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,(0))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"charlson-comorbidity","charlson-comorbidity",-633596907)),null);
} else {
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_44476,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),value);

predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),value], null));
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(key_44476),(((value == null))?predict_prostate.state.config.get_input_default(predict_prostate.state.config.input_groups,key_44476):value));

}
}
}
}
}
}

return predict_prostate.models.runner.recalculate_model.cljs$core$IFn$_invoke$arity$2(predict_prostate.state.run_time.input_map(),predict_prostate.state.run_time.N);
});})(seq__44356_44471,chunk__44357_44472,count__44358_44473,i__44359_44474,vec__44380_44475,key_44476,change_44477))
);
} else {
}


var G__44489 = seq__44356_44471;
var G__44490 = chunk__44357_44472;
var G__44491 = count__44358_44473;
var G__44492 = (i__44359_44474 + (1));
seq__44356_44471 = G__44489;
chunk__44357_44472 = G__44490;
count__44358_44473 = G__44491;
i__44359_44474 = G__44492;
continue;
} else {
var temp__5735__auto___44493 = cljs.core.seq(seq__44356_44471);
if(temp__5735__auto___44493){
var seq__44356_44494__$1 = temp__5735__auto___44493;
if(cljs.core.chunked_seq_QMARK_(seq__44356_44494__$1)){
var c__4556__auto___44495 = cljs.core.chunk_first(seq__44356_44494__$1);
var G__44496 = cljs.core.chunk_rest(seq__44356_44494__$1);
var G__44497 = c__4556__auto___44495;
var G__44498 = cljs.core.count(c__4556__auto___44495);
var G__44499 = (0);
seq__44356_44471 = G__44496;
chunk__44357_44472 = G__44497;
count__44358_44473 = G__44498;
i__44359_44474 = G__44499;
continue;
} else {
var vec__44390_44500 = cljs.core.first(seq__44356_44494__$1);
var key_44501 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44390_44500,(0),null);
var change_44502 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44390_44500,(1),null);
if(cljs.core.truth_(change_44502)){
pubsub.feeds.subscribe(change_44502,((function (seq__44356_44471,chunk__44357_44472,count__44358_44473,i__44359_44474,vec__44390_44500,key_44501,change_44502,seq__44356_44494__$1,temp__5735__auto___44493){
return (function (topic,value){
predict_prostate.state.mutations.log(topic,cljs.core.deref(predict_prostate.state.run_time.input_cursor(key_44501)),value);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666),key_44501)){
var vec__44393_44503 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(value,":");
var value_44504__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44393_44503,(0),null);
var bad_44505 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44393_44503,(1),null);
var bci_44506 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520))));
var bct_44507 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666))));
if(cljs.core.truth_(isNaN(bci_44506))){
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520)),predict_prostate.state.mutations.num_to_str((function (){var x__4214__auto__ = (1);
var y__4215__auto__ = (function (){var x__4217__auto__ = bci_44506;
var y__4218__auto__ = predict_prostate.state.mutations.str_to_num(value_44504__$1);
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})();
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})()));
}

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_44504__$1),(cljs.core.truth_(bad_44505)?":":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(bad_44505)].join(''));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520),key_44501)){
var vec__44396_44508 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(value,":");
var value_44509__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44396_44508,(0),null);
var bad_44510 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44396_44508,(1),null);
var bci_44511 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520))));
var bct_44512 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666))));
if(cljs.core.not(isNaN(bct_44512))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_44509__$1),(cljs.core.truth_((function (){var or__4126__auto__ = (value_44509__$1 < (0));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return bad_44510;
}
})())?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_44509__$1)].join(''):"")].join(''));
} else {
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_44501,new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969)),value);

predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969),value], null));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,new cljs.core.Keyword(null,"gleason","gleason",-2044470526))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526)),cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518))));
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518)),cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526))));
}
} else {
if(cljs.core.truth_((function (){var fexpr__44399 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gleason","gleason",-2044470526),null,new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518),null], null), null);
return (fexpr__44399.cljs$core$IFn$_invoke$arity$1 ? fexpr__44399.cljs$core$IFn$_invoke$arity$1(key_44501) : fexpr__44399.call(null,key_44501));
})())){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526)),value);

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518)),value);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_44501,new cljs.core.Keyword(null,"h-admissions","h-admissions",-1503094844))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"h-admissions","h-admissions",-1503094844)),value);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,(0))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"charlson-comorbidity","charlson-comorbidity",-633596907)),null);
} else {
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_44501,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),value);

predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),value], null));
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(key_44501),(((value == null))?predict_prostate.state.config.get_input_default(predict_prostate.state.config.input_groups,key_44501):value));

}
}
}
}
}
}

return predict_prostate.models.runner.recalculate_model.cljs$core$IFn$_invoke$arity$2(predict_prostate.state.run_time.input_map(),predict_prostate.state.run_time.N);
});})(seq__44356_44471,chunk__44357_44472,count__44358_44473,i__44359_44474,vec__44390_44500,key_44501,change_44502,seq__44356_44494__$1,temp__5735__auto___44493))
);
} else {
}


var G__44513 = cljs.core.next(seq__44356_44494__$1);
var G__44514 = null;
var G__44515 = (0);
var G__44516 = (0);
seq__44356_44471 = G__44513;
chunk__44357_44472 = G__44514;
count__44358_44473 = G__44515;
i__44359_44474 = G__44516;
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

predict_prostate.state.run_time.route_change.pubsub$feeds$TopicFeed$subscribe$arity$2(null,(function (_,p__44400){
var vec__44401 = p__44400;
var page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44401,(0),null);
var param1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44401,(1),null);
var param2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44401,(2),null);
var rvec = vec__44401;
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
var new_lang_44517 = new cljs.core.Keyword(null,"lang","lang",-1819677104).cljs$core$IFn$_invoke$arity$1(predict_prostate.state.localStorage.get_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"en","en",88457073)], null)));
predict_prostate.state.mutations.reload_lang(cljs.core.name(new_lang_44517));

return translations.tongue_base.load_translations_STAR_(url,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(translations.tongue_base.handle_dictionary,predict_prostate.state.run_time.t_state_cursor));
}));

predict_prostate.state.run_time.edit_change.pubsub$feeds$TopicFeed$subscribe$arity$2(null,(function (_,arg){
var text = (function (){var fexpr__44404 = cljs.core.deref(predict_prostate.state.run_time.ttt_cursor);
return (fexpr__44404.cljs$core$IFn$_invoke$arity$1 ? fexpr__44404.cljs$core$IFn$_invoke$arity$1(arg) : fexpr__44404.call(null,arg));
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(predict_prostate.state.run_time.edit_cursor,cljs.core.assoc,new cljs.core.Keyword(null,"edit-arg","edit-arg",1216866257),arg,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"edit-key","edit-key",-1833788727),((((cljs.core.vector_QMARK_(arg)) && ((cljs.core.count(arg) > (0)))))?cljs.core.first(arg):arg),new cljs.core.Keyword(null,"text","text",-1790561697),((((cljs.core.vector_QMARK_(arg)) && ((cljs.core.count(arg) > (1)))))?cljs.core.second(arg):text)], 0));

return $("#editorModal").modal("show");
}));

predict_prostate.state.run_time.new_text_change.pubsub$feeds$TopicFeed$subscribe$arity$2(null,(function (_,p__44405){
var vec__44406 = p__44405;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44406,(0),null);
var new_text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44406,(1),null);
return cljs.core.reset_BANG_(predict_prostate.state.run_time.new_text_cursor,new_text);
}));

predict_prostate.state.run_time.text_change.pubsub$feeds$TopicFeed$subscribe$arity$2(null,(function (_,p__44409){
var vec__44410 = p__44409;
var edit_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44410,(0),null);
var new_text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44410,(1),null);
var lang = new cljs.core.Keyword(null,"lang","lang",-1819677104).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(predict_prostate.state.run_time.t_state_cursor));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(predict_prostate.state.run_time.t_state_cursor,translations.tongue_base.process_dict_op,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"upsert","upsert",1416724984),new cljs.core.Keyword(null,"lang","lang",-1819677104).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(predict_prostate.state.run_time.t_state_cursor)),cljs.core.PersistentArrayMap.createAsIfByAssoc([edit_key,new_text])], null));

cljs.core.reset_BANG_(predict_prostate.state.run_time.new_text_cursor,null);

return translations.tranny_api.upload_translation.cljs$core$IFn$_invoke$arity$3(edit_key,cljs.core.name(lang),new_text);
}));

predict_prostate.state.run_time.add_language_modal.pubsub$feeds$TopicFeed$subscribe$arity$2(null,(function (_){
return $("#newLanguageModal").modal("show");
}));

predict_prostate.state.run_time.add_language.pubsub$feeds$TopicFeed$subscribe$arity$2(null,(function (_,p__44413){
var vec__44414 = p__44413;
var new_lang = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44414,(0),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(new_lang))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(predict_prostate.state.run_time.t_state_cursor,cljs.core.update,new cljs.core.Keyword(null,"languages","languages",1471910331),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(new_lang)], 0));
} else {
return null;
}
}));

return predict_prostate.state.mutations.clear_inputs();
});

//# sourceMappingURL=predict_prostate.state.mutations.js.map
