goog.provide('predict_prostate.state.mutations');
predict_prostate.state.mutations.paq = window._paq;
/**
 * Send an event to matemo. 
 */
predict_prostate.state.mutations.matomo_track = (function predict_prostate$state$mutations$matomo_track(var_args){
var G__132093 = arguments.length;
switch (G__132093) {
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
var seq__132101_132335 = cljs.core.seq(predict_prostate.state.run_time.input_changes());
var chunk__132104_132336 = null;
var count__132105_132337 = (0);
var i__132106_132338 = (0);
while(true){
if((i__132106_132338 < count__132105_132337)){
var vec__132143_132339 = chunk__132104_132336.cljs$core$IIndexed$_nth$arity$2(null,i__132106_132338);
var key_132340 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__132143_132339,(0),null);
var topic_132341 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__132143_132339,(1),null);
if(cljs.core.truth_(key_132340)){
if(cljs.core.truth_(topic_132341)){

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_132340,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355))){
var map__132148_132342 = predict_prostate.state.localStorage.get_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),new cljs.core.Keyword(null,"line2","line2",-1975668782)], null));
var map__132148_132343__$1 = (((((!((map__132148_132342 == null))))?(((((map__132148_132342.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__132148_132342.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__132148_132342):map__132148_132342);
var plot_style_132344 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__132148_132343__$1,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355));
if(cljs.core.truth_((function (){var fexpr__132152 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"area1","area1",-316994623),null,new cljs.core.Keyword(null,"line2","line2",-1975668782),null], null), null);
return (fexpr__132152.cljs$core$IFn$_invoke$arity$1 ? fexpr__132152.cljs$core$IFn$_invoke$arity$1(plot_style_132344) : fexpr__132152.call(null,plot_style_132344));
})())){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),plot_style_132344);
} else {
predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),new cljs.core.Keyword(null,"line2","line2",-1975668782)], null));

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),new cljs.core.Keyword(null,"line2","line2",-1975668782));
}
} else {
pubsub.feeds.publish(topic_132341,(cljs.core.truth_((function (){var fexpr__132154 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"age","age",-604307804),null,new cljs.core.Keyword(null,"psa","psa",-321761459),null], null), null);
return (fexpr__132154.cljs$core$IFn$_invoke$arity$1 ? fexpr__132154.cljs$core$IFn$_invoke$arity$1(key_132340) : fexpr__132154.call(null,key_132340));
})())?"":null));

}


var G__132349 = seq__132101_132335;
var G__132350 = chunk__132104_132336;
var G__132351 = count__132105_132337;
var G__132352 = (i__132106_132338 + (1));
seq__132101_132335 = G__132349;
chunk__132104_132336 = G__132350;
count__132105_132337 = G__132351;
i__132106_132338 = G__132352;
continue;
} else {
var G__132353 = seq__132101_132335;
var G__132354 = chunk__132104_132336;
var G__132355 = count__132105_132337;
var G__132356 = (i__132106_132338 + (1));
seq__132101_132335 = G__132353;
chunk__132104_132336 = G__132354;
count__132105_132337 = G__132355;
i__132106_132338 = G__132356;
continue;
}
} else {
var G__132357 = seq__132101_132335;
var G__132358 = chunk__132104_132336;
var G__132359 = count__132105_132337;
var G__132360 = (i__132106_132338 + (1));
seq__132101_132335 = G__132357;
chunk__132104_132336 = G__132358;
count__132105_132337 = G__132359;
i__132106_132338 = G__132360;
continue;
}
} else {
var temp__5735__auto___132361 = cljs.core.seq(seq__132101_132335);
if(temp__5735__auto___132361){
var seq__132101_132362__$1 = temp__5735__auto___132361;
if(cljs.core.chunked_seq_QMARK_(seq__132101_132362__$1)){
var c__4556__auto___132366 = cljs.core.chunk_first(seq__132101_132362__$1);
var G__132367 = cljs.core.chunk_rest(seq__132101_132362__$1);
var G__132368 = c__4556__auto___132366;
var G__132369 = cljs.core.count(c__4556__auto___132366);
var G__132370 = (0);
seq__132101_132335 = G__132367;
chunk__132104_132336 = G__132368;
count__132105_132337 = G__132369;
i__132106_132338 = G__132370;
continue;
} else {
var vec__132163_132371 = cljs.core.first(seq__132101_132362__$1);
var key_132372 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__132163_132371,(0),null);
var topic_132373 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__132163_132371,(1),null);
if(cljs.core.truth_(key_132372)){
if(cljs.core.truth_(topic_132373)){

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_132372,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355))){
var map__132169_132374 = predict_prostate.state.localStorage.get_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),new cljs.core.Keyword(null,"line2","line2",-1975668782)], null));
var map__132169_132375__$1 = (((((!((map__132169_132374 == null))))?(((((map__132169_132374.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__132169_132374.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__132169_132374):map__132169_132374);
var plot_style_132376 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__132169_132375__$1,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355));
if(cljs.core.truth_((function (){var fexpr__132176 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"area1","area1",-316994623),null,new cljs.core.Keyword(null,"line2","line2",-1975668782),null], null), null);
return (fexpr__132176.cljs$core$IFn$_invoke$arity$1 ? fexpr__132176.cljs$core$IFn$_invoke$arity$1(plot_style_132376) : fexpr__132176.call(null,plot_style_132376));
})())){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),plot_style_132376);
} else {
predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),new cljs.core.Keyword(null,"line2","line2",-1975668782)], null));

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),new cljs.core.Keyword(null,"line2","line2",-1975668782));
}
} else {
pubsub.feeds.publish(topic_132373,(cljs.core.truth_((function (){var fexpr__132178 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"age","age",-604307804),null,new cljs.core.Keyword(null,"psa","psa",-321761459),null], null), null);
return (fexpr__132178.cljs$core$IFn$_invoke$arity$1 ? fexpr__132178.cljs$core$IFn$_invoke$arity$1(key_132372) : fexpr__132178.call(null,key_132372));
})())?"":null));

}


var G__132380 = cljs.core.next(seq__132101_132362__$1);
var G__132381 = null;
var G__132382 = (0);
var G__132383 = (0);
seq__132101_132335 = G__132380;
chunk__132104_132336 = G__132381;
count__132105_132337 = G__132382;
i__132106_132338 = G__132383;
continue;
} else {
var G__132384 = cljs.core.next(seq__132101_132362__$1);
var G__132385 = null;
var G__132386 = (0);
var G__132387 = (0);
seq__132101_132335 = G__132384;
chunk__132104_132336 = G__132385;
count__132105_132337 = G__132386;
i__132106_132338 = G__132387;
continue;
}
} else {
var G__132388 = cljs.core.next(seq__132101_132362__$1);
var G__132389 = null;
var G__132390 = (0);
var G__132391 = (0);
seq__132101_132335 = G__132388;
chunk__132104_132336 = G__132389;
count__132105_132337 = G__132390;
i__132106_132338 = G__132391;
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
var len__4736__auto___132392 = arguments.length;
var i__4737__auto___132393 = (0);
while(true){
if((i__4737__auto___132393 < len__4736__auto___132392)){
args__4742__auto__.push((arguments[i__4737__auto___132393]));

var G__132394 = (i__4737__auto___132393 + (1));
i__4737__auto___132393 = G__132394;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return predict_prostate.state.mutations.subscribe_to.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(predict_prostate.state.mutations.subscribe_to.cljs$core$IFn$_invoke$arity$variadic = (function (change,cursor,p__132201){
var vec__132205 = p__132201;
var silent = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__132205,(0),null);
return pubsub.feeds.subscribe(change,(function (p1__132180_SHARP_,p2__132181_SHARP_){
if(cljs.core.truth_(silent)){
} else {
predict_prostate.state.mutations.log(p1__132180_SHARP_,cljs.core.deref(cursor),p2__132181_SHARP_);
}

return cljs.core.reset_BANG_(cursor,p2__132181_SHARP_);
}));
}));

(predict_prostate.state.mutations.subscribe_to.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(predict_prostate.state.mutations.subscribe_to.cljs$lang$applyTo = (function (seq132187){
var G__132188 = cljs.core.first(seq132187);
var seq132187__$1 = cljs.core.next(seq132187);
var G__132189 = cljs.core.first(seq132187__$1);
var seq132187__$2 = cljs.core.next(seq132187__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__132188,G__132189,seq132187__$2);
}));

predict_prostate.state.mutations.clip = (function predict_prostate$state$mutations$clip(p__132208){
var map__132209 = p__132208;
var map__132209__$1 = (((((!((map__132209 == null))))?(((((map__132209.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__132209.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__132209):map__132209);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__132209__$1,new cljs.core.Keyword(null,"value","value",305978217));
var min = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__132209__$1,new cljs.core.Keyword(null,"min","min",444991522));
var max = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__132209__$1,new cljs.core.Keyword(null,"max","max",61366548));
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
var seq__132211_132395 = cljs.core.seq(predict_prostate.state.run_time.input_changes());
var chunk__132212_132396 = null;
var count__132213_132397 = (0);
var i__132214_132398 = (0);
while(true){
if((i__132214_132398 < count__132213_132397)){
var vec__132258_132399 = chunk__132212_132396.cljs$core$IIndexed$_nth$arity$2(null,i__132214_132398);
var key_132400 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__132258_132399,(0),null);
var change_132401 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__132258_132399,(1),null);
if(cljs.core.truth_(change_132401)){
pubsub.feeds.subscribe(change_132401,((function (seq__132211_132395,chunk__132212_132396,count__132213_132397,i__132214_132398,vec__132258_132399,key_132400,change_132401){
return (function (topic,value){
predict_prostate.state.mutations.log(topic,cljs.core.deref(predict_prostate.state.run_time.input_cursor(key_132400)),value);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666),key_132400)){
var vec__132261_132414 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(value,":");
var value_132415__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__132261_132414,(0),null);
var bad_132416 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__132261_132414,(1),null);
var bci_132417 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520))));
var bct_132418 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666))));
if(cljs.core.truth_(isNaN(bci_132417))){
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520)),predict_prostate.state.mutations.num_to_str((function (){var x__4214__auto__ = (1);
var y__4215__auto__ = (function (){var x__4217__auto__ = bci_132417;
var y__4218__auto__ = predict_prostate.state.mutations.str_to_num(value_132415__$1);
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})();
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})()));
}

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_132415__$1),(cljs.core.truth_(bad_132416)?":":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(bad_132416)].join(''));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520),key_132400)){
var vec__132265_132422 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(value,":");
var value_132423__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__132265_132422,(0),null);
var bad_132424 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__132265_132422,(1),null);
var bci_132425 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520))));
var bct_132426 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666))));
if(cljs.core.not(isNaN(bct_132426))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_132423__$1),(cljs.core.truth_((function (){var or__4126__auto__ = (value_132423__$1 < (0));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return bad_132424;
}
})())?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_132423__$1)].join(''):"")].join(''));
} else {
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_132400,new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969)),value);

predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969),value], null));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,new cljs.core.Keyword(null,"gleason","gleason",-2044470526))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526)),cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518))));
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518)),cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526))));
}
} else {
if(cljs.core.truth_((function (){var fexpr__132271 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gleason","gleason",-2044470526),null,new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518),null], null), null);
return (fexpr__132271.cljs$core$IFn$_invoke$arity$1 ? fexpr__132271.cljs$core$IFn$_invoke$arity$1(key_132400) : fexpr__132271.call(null,key_132400));
})())){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526)),value);

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518)),value);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_132400,new cljs.core.Keyword(null,"h-admissions","h-admissions",-1503094844))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"h-admissions","h-admissions",-1503094844)),value);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,(0))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"charlson-comorbidity","charlson-comorbidity",-633596907)),null);
} else {
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_132400,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),value);

predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),value], null));
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(key_132400),(((value == null))?predict_prostate.state.config.get_input_default(predict_prostate.state.config.input_groups,key_132400):value));

}
}
}
}
}
}

return predict_prostate.models.runner.recalculate_model.cljs$core$IFn$_invoke$arity$2(predict_prostate.state.run_time.input_map(),predict_prostate.state.run_time.N);
});})(seq__132211_132395,chunk__132212_132396,count__132213_132397,i__132214_132398,vec__132258_132399,key_132400,change_132401))
);
} else {
}


var G__132437 = seq__132211_132395;
var G__132438 = chunk__132212_132396;
var G__132439 = count__132213_132397;
var G__132440 = (i__132214_132398 + (1));
seq__132211_132395 = G__132437;
chunk__132212_132396 = G__132438;
count__132213_132397 = G__132439;
i__132214_132398 = G__132440;
continue;
} else {
var temp__5735__auto___132441 = cljs.core.seq(seq__132211_132395);
if(temp__5735__auto___132441){
var seq__132211_132442__$1 = temp__5735__auto___132441;
if(cljs.core.chunked_seq_QMARK_(seq__132211_132442__$1)){
var c__4556__auto___132443 = cljs.core.chunk_first(seq__132211_132442__$1);
var G__132444 = cljs.core.chunk_rest(seq__132211_132442__$1);
var G__132445 = c__4556__auto___132443;
var G__132446 = cljs.core.count(c__4556__auto___132443);
var G__132447 = (0);
seq__132211_132395 = G__132444;
chunk__132212_132396 = G__132445;
count__132213_132397 = G__132446;
i__132214_132398 = G__132447;
continue;
} else {
var vec__132278_132448 = cljs.core.first(seq__132211_132442__$1);
var key_132449 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__132278_132448,(0),null);
var change_132450 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__132278_132448,(1),null);
if(cljs.core.truth_(change_132450)){
pubsub.feeds.subscribe(change_132450,((function (seq__132211_132395,chunk__132212_132396,count__132213_132397,i__132214_132398,vec__132278_132448,key_132449,change_132450,seq__132211_132442__$1,temp__5735__auto___132441){
return (function (topic,value){
predict_prostate.state.mutations.log(topic,cljs.core.deref(predict_prostate.state.run_time.input_cursor(key_132449)),value);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666),key_132449)){
var vec__132281_132459 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(value,":");
var value_132460__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__132281_132459,(0),null);
var bad_132461 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__132281_132459,(1),null);
var bci_132462 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520))));
var bct_132463 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666))));
if(cljs.core.truth_(isNaN(bci_132462))){
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520)),predict_prostate.state.mutations.num_to_str((function (){var x__4214__auto__ = (1);
var y__4215__auto__ = (function (){var x__4217__auto__ = bci_132462;
var y__4218__auto__ = predict_prostate.state.mutations.str_to_num(value_132460__$1);
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})();
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})()));
}

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_132460__$1),(cljs.core.truth_(bad_132461)?":":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(bad_132461)].join(''));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520),key_132449)){
var vec__132285_132471 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(value,":");
var value_132472__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__132285_132471,(0),null);
var bad_132473 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__132285_132471,(1),null);
var bci_132474 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520))));
var bct_132475 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666))));
if(cljs.core.not(isNaN(bct_132475))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_132472__$1),(cljs.core.truth_((function (){var or__4126__auto__ = (value_132472__$1 < (0));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return bad_132473;
}
})())?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_132472__$1)].join(''):"")].join(''));
} else {
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_132449,new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969)),value);

predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969),value], null));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,new cljs.core.Keyword(null,"gleason","gleason",-2044470526))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526)),cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518))));
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518)),cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526))));
}
} else {
if(cljs.core.truth_((function (){var fexpr__132294 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gleason","gleason",-2044470526),null,new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518),null], null), null);
return (fexpr__132294.cljs$core$IFn$_invoke$arity$1 ? fexpr__132294.cljs$core$IFn$_invoke$arity$1(key_132449) : fexpr__132294.call(null,key_132449));
})())){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526)),value);

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518)),value);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_132449,new cljs.core.Keyword(null,"h-admissions","h-admissions",-1503094844))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"h-admissions","h-admissions",-1503094844)),value);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,(0))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"charlson-comorbidity","charlson-comorbidity",-633596907)),null);
} else {
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_132449,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),value);

predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),value], null));
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(key_132449),(((value == null))?predict_prostate.state.config.get_input_default(predict_prostate.state.config.input_groups,key_132449):value));

}
}
}
}
}
}

return predict_prostate.models.runner.recalculate_model.cljs$core$IFn$_invoke$arity$2(predict_prostate.state.run_time.input_map(),predict_prostate.state.run_time.N);
});})(seq__132211_132395,chunk__132212_132396,count__132213_132397,i__132214_132398,vec__132278_132448,key_132449,change_132450,seq__132211_132442__$1,temp__5735__auto___132441))
);
} else {
}


var G__132483 = cljs.core.next(seq__132211_132442__$1);
var G__132484 = null;
var G__132485 = (0);
var G__132486 = (0);
seq__132211_132395 = G__132483;
chunk__132212_132396 = G__132484;
count__132213_132397 = G__132485;
i__132214_132398 = G__132486;
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

predict_prostate.state.run_time.route_change.pubsub$feeds$TopicFeed$subscribe$arity$2(null,(function (_,p__132299){
var vec__132300 = p__132299;
var page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__132300,(0),null);
var param1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__132300,(1),null);
var param2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__132300,(2),null);
var rvec = vec__132300;
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
var new_lang_132497 = new cljs.core.Keyword(null,"lang","lang",-1819677104).cljs$core$IFn$_invoke$arity$1(predict_prostate.state.localStorage.get_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"en","en",88457073)], null)));
predict_prostate.state.mutations.reload_lang(cljs.core.name(new_lang_132497));

return translations.tongue_base.load_translations_STAR_(url,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(translations.tongue_base.handle_dictionary,predict_prostate.state.run_time.t_state_cursor));
}));

predict_prostate.state.run_time.edit_change.pubsub$feeds$TopicFeed$subscribe$arity$2(null,(function (_,arg){
var text = (function (){var fexpr__132307 = cljs.core.deref(predict_prostate.state.run_time.ttt_cursor);
return (fexpr__132307.cljs$core$IFn$_invoke$arity$1 ? fexpr__132307.cljs$core$IFn$_invoke$arity$1(arg) : fexpr__132307.call(null,arg));
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(predict_prostate.state.run_time.edit_cursor,cljs.core.assoc,new cljs.core.Keyword(null,"edit-arg","edit-arg",1216866257),arg,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"edit-key","edit-key",-1833788727),((((cljs.core.vector_QMARK_(arg)) && ((cljs.core.count(arg) > (0)))))?cljs.core.first(arg):arg),new cljs.core.Keyword(null,"text","text",-1790561697),((((cljs.core.vector_QMARK_(arg)) && ((cljs.core.count(arg) > (1)))))?cljs.core.second(arg):text)], 0));

return $("#editorModal").modal("show");
}));

predict_prostate.state.run_time.new_text_change.pubsub$feeds$TopicFeed$subscribe$arity$2(null,(function (_,p__132308){
var vec__132309 = p__132308;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__132309,(0),null);
var new_text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__132309,(1),null);
return cljs.core.reset_BANG_(predict_prostate.state.run_time.new_text_cursor,new_text);
}));

predict_prostate.state.run_time.text_change.pubsub$feeds$TopicFeed$subscribe$arity$2(null,(function (_,p__132312){
var vec__132314 = p__132312;
var edit_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__132314,(0),null);
var new_text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__132314,(1),null);
var lang = new cljs.core.Keyword(null,"lang","lang",-1819677104).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(predict_prostate.state.run_time.t_state_cursor));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(predict_prostate.state.run_time.t_state_cursor,translations.tongue_base.process_dict_op,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"upsert","upsert",1416724984),new cljs.core.Keyword(null,"lang","lang",-1819677104).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(predict_prostate.state.run_time.t_state_cursor)),cljs.core.PersistentArrayMap.createAsIfByAssoc([edit_key,new_text])], null));

cljs.core.reset_BANG_(predict_prostate.state.run_time.new_text_cursor,null);

return translations.tranny_api.upload_translation.cljs$core$IFn$_invoke$arity$3(edit_key,cljs.core.name(lang),new_text);
}));

predict_prostate.state.run_time.add_language_modal.pubsub$feeds$TopicFeed$subscribe$arity$2(null,(function (_){
return $("#newLanguageModal").modal("show");
}));

predict_prostate.state.run_time.add_language.pubsub$feeds$TopicFeed$subscribe$arity$2(null,(function (_,p__132325){
var vec__132330 = p__132325;
var new_lang = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__132330,(0),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(new_lang))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(predict_prostate.state.run_time.t_state_cursor,cljs.core.update,new cljs.core.Keyword(null,"languages","languages",1471910331),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(new_lang)], 0));
} else {
return null;
}
}));

return predict_prostate.state.mutations.clear_inputs();
});

//# sourceMappingURL=predict_prostate.state.mutations.js.map
