goog.provide('predict_prostate.state.mutations');
predict_prostate.state.mutations.paq = window._paq;
/**
 * Send an event to matemo. 
 */
predict_prostate.state.mutations.matomo_track = (function predict_prostate$state$mutations$matomo_track(var_args){
var G__33882 = arguments.length;
switch (G__33882) {
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
var seq__33896_34268 = cljs.core.seq(predict_prostate.state.run_time.input_changes());
var chunk__33899_34269 = null;
var count__33900_34270 = (0);
var i__33901_34271 = (0);
while(true){
if((i__33901_34271 < count__33900_34270)){
var vec__33922_34274 = chunk__33899_34269.cljs$core$IIndexed$_nth$arity$2(null,i__33901_34271);
var key_34275 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33922_34274,(0),null);
var topic_34276 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33922_34274,(1),null);
if(cljs.core.truth_(key_34275)){
if(cljs.core.truth_(topic_34276)){

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_34275,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355))){
var map__33926_34279 = predict_prostate.state.localStorage.get_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),new cljs.core.Keyword(null,"line2","line2",-1975668782)], null));
var map__33926_34280__$1 = cljs.core.__destructure_map(map__33926_34279);
var plot_style_34281 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33926_34280__$1,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355));
if(cljs.core.truth_((function (){var fexpr__33927 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"area1","area1",-316994623),null,new cljs.core.Keyword(null,"line2","line2",-1975668782),null], null), null);
return (fexpr__33927.cljs$core$IFn$_invoke$arity$1 ? fexpr__33927.cljs$core$IFn$_invoke$arity$1(plot_style_34281) : fexpr__33927.call(null,plot_style_34281));
})())){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),plot_style_34281);
} else {
predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),new cljs.core.Keyword(null,"line2","line2",-1975668782)], null));

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),new cljs.core.Keyword(null,"line2","line2",-1975668782));
}
} else {
pubsub.feeds.publish(topic_34276,(cljs.core.truth_((function (){var fexpr__33928 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"age","age",-604307804),null,new cljs.core.Keyword(null,"psa","psa",-321761459),null], null), null);
return (fexpr__33928.cljs$core$IFn$_invoke$arity$1 ? fexpr__33928.cljs$core$IFn$_invoke$arity$1(key_34275) : fexpr__33928.call(null,key_34275));
})())?"":null));

}


var G__34289 = seq__33896_34268;
var G__34290 = chunk__33899_34269;
var G__34291 = count__33900_34270;
var G__34292 = (i__33901_34271 + (1));
seq__33896_34268 = G__34289;
chunk__33899_34269 = G__34290;
count__33900_34270 = G__34291;
i__33901_34271 = G__34292;
continue;
} else {
var G__34294 = seq__33896_34268;
var G__34295 = chunk__33899_34269;
var G__34296 = count__33900_34270;
var G__34297 = (i__33901_34271 + (1));
seq__33896_34268 = G__34294;
chunk__33899_34269 = G__34295;
count__33900_34270 = G__34296;
i__33901_34271 = G__34297;
continue;
}
} else {
var G__34299 = seq__33896_34268;
var G__34300 = chunk__33899_34269;
var G__34301 = count__33900_34270;
var G__34302 = (i__33901_34271 + (1));
seq__33896_34268 = G__34299;
chunk__33899_34269 = G__34300;
count__33900_34270 = G__34301;
i__33901_34271 = G__34302;
continue;
}
} else {
var temp__5753__auto___34303 = cljs.core.seq(seq__33896_34268);
if(temp__5753__auto___34303){
var seq__33896_34305__$1 = temp__5753__auto___34303;
if(cljs.core.chunked_seq_QMARK_(seq__33896_34305__$1)){
var c__4638__auto___34306 = cljs.core.chunk_first(seq__33896_34305__$1);
var G__34308 = cljs.core.chunk_rest(seq__33896_34305__$1);
var G__34309 = c__4638__auto___34306;
var G__34310 = cljs.core.count(c__4638__auto___34306);
var G__34311 = (0);
seq__33896_34268 = G__34308;
chunk__33899_34269 = G__34309;
count__33900_34270 = G__34310;
i__33901_34271 = G__34311;
continue;
} else {
var vec__33929_34313 = cljs.core.first(seq__33896_34305__$1);
var key_34314 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33929_34313,(0),null);
var topic_34315 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33929_34313,(1),null);
if(cljs.core.truth_(key_34314)){
if(cljs.core.truth_(topic_34315)){

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_34314,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355))){
var map__33932_34318 = predict_prostate.state.localStorage.get_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),new cljs.core.Keyword(null,"line2","line2",-1975668782)], null));
var map__33932_34319__$1 = cljs.core.__destructure_map(map__33932_34318);
var plot_style_34320 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33932_34319__$1,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355));
if(cljs.core.truth_((function (){var fexpr__33933 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"area1","area1",-316994623),null,new cljs.core.Keyword(null,"line2","line2",-1975668782),null], null), null);
return (fexpr__33933.cljs$core$IFn$_invoke$arity$1 ? fexpr__33933.cljs$core$IFn$_invoke$arity$1(plot_style_34320) : fexpr__33933.call(null,plot_style_34320));
})())){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),plot_style_34320);
} else {
predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),new cljs.core.Keyword(null,"line2","line2",-1975668782)], null));

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),new cljs.core.Keyword(null,"line2","line2",-1975668782));
}
} else {
pubsub.feeds.publish(topic_34315,(cljs.core.truth_((function (){var fexpr__33936 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"age","age",-604307804),null,new cljs.core.Keyword(null,"psa","psa",-321761459),null], null), null);
return (fexpr__33936.cljs$core$IFn$_invoke$arity$1 ? fexpr__33936.cljs$core$IFn$_invoke$arity$1(key_34314) : fexpr__33936.call(null,key_34314));
})())?"":null));

}


var G__34327 = cljs.core.next(seq__33896_34305__$1);
var G__34328 = null;
var G__34329 = (0);
var G__34330 = (0);
seq__33896_34268 = G__34327;
chunk__33899_34269 = G__34328;
count__33900_34270 = G__34329;
i__33901_34271 = G__34330;
continue;
} else {
var G__34332 = cljs.core.next(seq__33896_34305__$1);
var G__34333 = null;
var G__34334 = (0);
var G__34335 = (0);
seq__33896_34268 = G__34332;
chunk__33899_34269 = G__34333;
count__33900_34270 = G__34334;
i__33901_34271 = G__34335;
continue;
}
} else {
var G__34337 = cljs.core.next(seq__33896_34305__$1);
var G__34338 = null;
var G__34339 = (0);
var G__34340 = (0);
seq__33896_34268 = G__34337;
chunk__33899_34269 = G__34338;
count__33900_34270 = G__34339;
i__33901_34271 = G__34340;
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
var args__4824__auto__ = [];
var len__4818__auto___34343 = arguments.length;
var i__4819__auto___34344 = (0);
while(true){
if((i__4819__auto___34344 < len__4818__auto___34343)){
args__4824__auto__.push((arguments[i__4819__auto___34344]));

var G__34346 = (i__4819__auto___34344 + (1));
i__4819__auto___34344 = G__34346;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return predict_prostate.state.mutations.subscribe_to.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(predict_prostate.state.mutations.subscribe_to.cljs$core$IFn$_invoke$arity$variadic = (function (change,cursor,p__33954){
var vec__33955 = p__33954;
var silent = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33955,(0),null);
return pubsub.feeds.subscribe(change,(function (p1__33945_SHARP_,p2__33946_SHARP_){
if(cljs.core.truth_(silent)){
} else {
predict_prostate.state.mutations.log(p1__33945_SHARP_,cljs.core.deref(cursor),p2__33946_SHARP_);
}

return cljs.core.reset_BANG_(cursor,p2__33946_SHARP_);
}));
}));

(predict_prostate.state.mutations.subscribe_to.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(predict_prostate.state.mutations.subscribe_to.cljs$lang$applyTo = (function (seq33947){
var G__33948 = cljs.core.first(seq33947);
var seq33947__$1 = cljs.core.next(seq33947);
var G__33949 = cljs.core.first(seq33947__$1);
var seq33947__$2 = cljs.core.next(seq33947__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33948,G__33949,seq33947__$2);
}));

predict_prostate.state.mutations.clip = (function predict_prostate$state$mutations$clip(p__33958){
var map__33959 = p__33958;
var map__33959__$1 = cljs.core.__destructure_map(map__33959);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33959__$1,new cljs.core.Keyword(null,"value","value",305978217));
var min = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33959__$1,new cljs.core.Keyword(null,"min","min",444991522));
var max = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33959__$1,new cljs.core.Keyword(null,"max","max",61366548));
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
var seq__34003_34359 = cljs.core.seq(predict_prostate.state.run_time.input_changes());
var chunk__34004_34360 = null;
var count__34005_34361 = (0);
var i__34006_34362 = (0);
while(true){
if((i__34006_34362 < count__34005_34361)){
var vec__34161_34364 = chunk__34004_34360.cljs$core$IIndexed$_nth$arity$2(null,i__34006_34362);
var key_34365 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34161_34364,(0),null);
var change_34366 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34161_34364,(1),null);
if(cljs.core.truth_(change_34366)){
pubsub.feeds.subscribe(change_34366,((function (seq__34003_34359,chunk__34004_34360,count__34005_34361,i__34006_34362,vec__34161_34364,key_34365,change_34366){
return (function (topic,value){
predict_prostate.state.mutations.log(topic,cljs.core.deref(predict_prostate.state.run_time.input_cursor(key_34365)),value);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666),key_34365)){
var vec__34165_34374 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(value,":");
var value_34375__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34165_34374,(0),null);
var bad_34376 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34165_34374,(1),null);
var bci_34377 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520))));
var bct_34378 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666))));
if(cljs.core.truth_(isNaN(bci_34377))){
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520)),predict_prostate.state.mutations.num_to_str((function (){var x__4295__auto__ = (1);
var y__4296__auto__ = (function (){var x__4298__auto__ = bci_34377;
var y__4299__auto__ = predict_prostate.state.mutations.str_to_num(value_34375__$1);
return ((x__4298__auto__ < y__4299__auto__) ? x__4298__auto__ : y__4299__auto__);
})();
return ((x__4295__auto__ > y__4296__auto__) ? x__4295__auto__ : y__4296__auto__);
})()));
}

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_34375__$1),(cljs.core.truth_(bad_34376)?":":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(bad_34376)].join(''));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520),key_34365)){
var vec__34170_34383 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(value,":");
var value_34384__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34170_34383,(0),null);
var bad_34385 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34170_34383,(1),null);
var bci_34386 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520))));
var bct_34387 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666))));
if(cljs.core.not(isNaN(bct_34387))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_34384__$1),(cljs.core.truth_((function (){var or__4212__auto__ = (value_34384__$1 < (0));
if(or__4212__auto__){
return or__4212__auto__;
} else {
return bad_34385;
}
})())?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_34384__$1)].join(''):"")].join(''));
} else {
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_34365,new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969)),value);

predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969),value], null));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,new cljs.core.Keyword(null,"gleason","gleason",-2044470526))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526)),cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518))));
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518)),cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526))));
}
} else {
if(cljs.core.truth_((function (){var fexpr__34175 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gleason","gleason",-2044470526),null,new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518),null], null), null);
return (fexpr__34175.cljs$core$IFn$_invoke$arity$1 ? fexpr__34175.cljs$core$IFn$_invoke$arity$1(key_34365) : fexpr__34175.call(null,key_34365));
})())){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526)),value);

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518)),value);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_34365,new cljs.core.Keyword(null,"h-admissions","h-admissions",-1503094844))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"h-admissions","h-admissions",-1503094844)),value);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,(0))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"charlson-comorbidity","charlson-comorbidity",-633596907)),null);
} else {
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_34365,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),value);

predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),value], null));
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(key_34365),(((value == null))?predict_prostate.state.config.get_input_default(predict_prostate.state.config.input_groups,key_34365):value));

}
}
}
}
}
}

return predict_prostate.models.runner.recalculate_model.cljs$core$IFn$_invoke$arity$2(predict_prostate.state.run_time.input_map(),predict_prostate.state.run_time.N);
});})(seq__34003_34359,chunk__34004_34360,count__34005_34361,i__34006_34362,vec__34161_34364,key_34365,change_34366))
);
} else {
}


var G__34397 = seq__34003_34359;
var G__34398 = chunk__34004_34360;
var G__34399 = count__34005_34361;
var G__34400 = (i__34006_34362 + (1));
seq__34003_34359 = G__34397;
chunk__34004_34360 = G__34398;
count__34005_34361 = G__34399;
i__34006_34362 = G__34400;
continue;
} else {
var temp__5753__auto___34401 = cljs.core.seq(seq__34003_34359);
if(temp__5753__auto___34401){
var seq__34003_34402__$1 = temp__5753__auto___34401;
if(cljs.core.chunked_seq_QMARK_(seq__34003_34402__$1)){
var c__4638__auto___34404 = cljs.core.chunk_first(seq__34003_34402__$1);
var G__34405 = cljs.core.chunk_rest(seq__34003_34402__$1);
var G__34406 = c__4638__auto___34404;
var G__34407 = cljs.core.count(c__4638__auto___34404);
var G__34408 = (0);
seq__34003_34359 = G__34405;
chunk__34004_34360 = G__34406;
count__34005_34361 = G__34407;
i__34006_34362 = G__34408;
continue;
} else {
var vec__34180_34409 = cljs.core.first(seq__34003_34402__$1);
var key_34410 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34180_34409,(0),null);
var change_34411 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34180_34409,(1),null);
if(cljs.core.truth_(change_34411)){
pubsub.feeds.subscribe(change_34411,((function (seq__34003_34359,chunk__34004_34360,count__34005_34361,i__34006_34362,vec__34180_34409,key_34410,change_34411,seq__34003_34402__$1,temp__5753__auto___34401){
return (function (topic,value){
predict_prostate.state.mutations.log(topic,cljs.core.deref(predict_prostate.state.run_time.input_cursor(key_34410)),value);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666),key_34410)){
var vec__34184_34414 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(value,":");
var value_34415__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34184_34414,(0),null);
var bad_34416 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34184_34414,(1),null);
var bci_34417 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520))));
var bct_34418 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666))));
if(cljs.core.truth_(isNaN(bci_34417))){
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520)),predict_prostate.state.mutations.num_to_str((function (){var x__4295__auto__ = (1);
var y__4296__auto__ = (function (){var x__4298__auto__ = bci_34417;
var y__4299__auto__ = predict_prostate.state.mutations.str_to_num(value_34415__$1);
return ((x__4298__auto__ < y__4299__auto__) ? x__4298__auto__ : y__4299__auto__);
})();
return ((x__4295__auto__ > y__4296__auto__) ? x__4295__auto__ : y__4296__auto__);
})()));
}

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_34415__$1),(cljs.core.truth_(bad_34416)?":":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(bad_34416)].join(''));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520),key_34410)){
var vec__34188_34420 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(value,":");
var value_34421__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34188_34420,(0),null);
var bad_34422 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34188_34420,(1),null);
var bci_34423 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520))));
var bct_34424 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666))));
if(cljs.core.not(isNaN(bct_34424))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_34421__$1),(cljs.core.truth_((function (){var or__4212__auto__ = (value_34421__$1 < (0));
if(or__4212__auto__){
return or__4212__auto__;
} else {
return bad_34422;
}
})())?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_34421__$1)].join(''):"")].join(''));
} else {
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_34410,new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969)),value);

predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969),value], null));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,new cljs.core.Keyword(null,"gleason","gleason",-2044470526))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526)),cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518))));
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518)),cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526))));
}
} else {
if(cljs.core.truth_((function (){var fexpr__34193 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gleason","gleason",-2044470526),null,new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518),null], null), null);
return (fexpr__34193.cljs$core$IFn$_invoke$arity$1 ? fexpr__34193.cljs$core$IFn$_invoke$arity$1(key_34410) : fexpr__34193.call(null,key_34410));
})())){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526)),value);

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518)),value);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_34410,new cljs.core.Keyword(null,"h-admissions","h-admissions",-1503094844))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"h-admissions","h-admissions",-1503094844)),value);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,(0))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"charlson-comorbidity","charlson-comorbidity",-633596907)),null);
} else {
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_34410,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),value);

predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),value], null));
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(key_34410),(((value == null))?predict_prostate.state.config.get_input_default(predict_prostate.state.config.input_groups,key_34410):value));

}
}
}
}
}
}

return predict_prostate.models.runner.recalculate_model.cljs$core$IFn$_invoke$arity$2(predict_prostate.state.run_time.input_map(),predict_prostate.state.run_time.N);
});})(seq__34003_34359,chunk__34004_34360,count__34005_34361,i__34006_34362,vec__34180_34409,key_34410,change_34411,seq__34003_34402__$1,temp__5753__auto___34401))
);
} else {
}


var G__34436 = cljs.core.next(seq__34003_34402__$1);
var G__34437 = null;
var G__34438 = (0);
var G__34439 = (0);
seq__34003_34359 = G__34436;
chunk__34004_34360 = G__34437;
count__34005_34361 = G__34438;
i__34006_34362 = G__34439;
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

predict_prostate.state.run_time.route_change.pubsub$feeds$TopicFeed$subscribe$arity$2(null,(function (_,p__34200){
var vec__34201 = p__34200;
var page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34201,(0),null);
var param1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34201,(1),null);
var param2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34201,(2),null);
var rvec = vec__34201;
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
var new_lang_34452 = new cljs.core.Keyword(null,"lang","lang",-1819677104).cljs$core$IFn$_invoke$arity$1(predict_prostate.state.localStorage.get_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"en","en",88457073)], null)));
predict_prostate.state.mutations.reload_lang(cljs.core.name(new_lang_34452));

return translations.tongue_base.load_translations_STAR_(url,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(translations.tongue_base.handle_dictionary,predict_prostate.state.run_time.t_state_cursor));
}));

predict_prostate.state.run_time.edit_change.pubsub$feeds$TopicFeed$subscribe$arity$2(null,(function (_,arg){
var text = (function (){var fexpr__34208 = cljs.core.deref(predict_prostate.state.run_time.ttt_cursor);
return (fexpr__34208.cljs$core$IFn$_invoke$arity$1 ? fexpr__34208.cljs$core$IFn$_invoke$arity$1(arg) : fexpr__34208.call(null,arg));
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(predict_prostate.state.run_time.edit_cursor,cljs.core.assoc,new cljs.core.Keyword(null,"edit-arg","edit-arg",1216866257),arg,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"edit-key","edit-key",-1833788727),((((cljs.core.vector_QMARK_(arg)) && ((cljs.core.count(arg) > (0)))))?cljs.core.first(arg):arg),new cljs.core.Keyword(null,"text","text",-1790561697),((((cljs.core.vector_QMARK_(arg)) && ((cljs.core.count(arg) > (1)))))?cljs.core.second(arg):text)], 0));

return $("#editorModal").modal("show");
}));

predict_prostate.state.run_time.new_text_change.pubsub$feeds$TopicFeed$subscribe$arity$2(null,(function (_,p__34212){
var vec__34214 = p__34212;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34214,(0),null);
var new_text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34214,(1),null);
return cljs.core.reset_BANG_(predict_prostate.state.run_time.new_text_cursor,new_text);
}));

predict_prostate.state.run_time.text_change.pubsub$feeds$TopicFeed$subscribe$arity$2(null,(function (_,p__34220){
var vec__34222 = p__34220;
var edit_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34222,(0),null);
var new_text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34222,(1),null);
var lang = new cljs.core.Keyword(null,"lang","lang",-1819677104).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(predict_prostate.state.run_time.t_state_cursor));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(predict_prostate.state.run_time.t_state_cursor,translations.tongue_base.process_dict_op,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"upsert","upsert",1416724984),new cljs.core.Keyword(null,"lang","lang",-1819677104).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(predict_prostate.state.run_time.t_state_cursor)),cljs.core.PersistentArrayMap.createAsIfByAssoc([edit_key,new_text])], null));

cljs.core.reset_BANG_(predict_prostate.state.run_time.new_text_cursor,null);

return translations.tranny_api.upload_translation.cljs$core$IFn$_invoke$arity$3(edit_key,cljs.core.name(lang),new_text);
}));

predict_prostate.state.run_time.add_language_modal.pubsub$feeds$TopicFeed$subscribe$arity$2(null,(function (_){
return $("#newLanguageModal").modal("show");
}));

predict_prostate.state.run_time.add_language.pubsub$feeds$TopicFeed$subscribe$arity$2(null,(function (_,p__34232){
var vec__34233 = p__34232;
var new_lang = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34233,(0),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(new_lang))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(predict_prostate.state.run_time.t_state_cursor,cljs.core.update,new cljs.core.Keyword(null,"languages","languages",1471910331),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(new_lang)], 0));
} else {
return null;
}
}));

return predict_prostate.state.mutations.clear_inputs();
});

//# sourceMappingURL=predict_prostate.state.mutations.js.map
