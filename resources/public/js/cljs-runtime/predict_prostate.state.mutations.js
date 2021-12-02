goog.provide('predict_prostate.state.mutations');
predict_prostate.state.mutations.paq = window._paq;
/**
 * Send an event to matemo. 
 */
predict_prostate.state.mutations.matomo_track = (function predict_prostate$state$mutations$matomo_track(var_args){
var G__69575 = arguments.length;
switch (G__69575) {
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
var seq__69591_70039 = cljs.core.seq(predict_prostate.state.run_time.input_changes());
var chunk__69594_70040 = null;
var count__69595_70041 = (0);
var i__69596_70042 = (0);
while(true){
if((i__69596_70042 < count__69595_70041)){
var vec__69695_70043 = chunk__69594_70040.cljs$core$IIndexed$_nth$arity$2(null,i__69596_70042);
var key_70044 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69695_70043,(0),null);
var topic_70045 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69695_70043,(1),null);
if(cljs.core.truth_(key_70044)){
if(cljs.core.truth_(topic_70045)){

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_70044,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355))){
var map__69711_70047 = predict_prostate.state.localStorage.get_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),new cljs.core.Keyword(null,"line2","line2",-1975668782)], null));
var map__69711_70048__$1 = (((((!((map__69711_70047 == null))))?(((((map__69711_70047.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69711_70047.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69711_70047):map__69711_70047);
var plot_style_70049 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69711_70048__$1,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355));
if(cljs.core.truth_((function (){var fexpr__69721 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"area1","area1",-316994623),null,new cljs.core.Keyword(null,"line2","line2",-1975668782),null], null), null);
return (fexpr__69721.cljs$core$IFn$_invoke$arity$1 ? fexpr__69721.cljs$core$IFn$_invoke$arity$1(plot_style_70049) : fexpr__69721.call(null,plot_style_70049));
})())){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),plot_style_70049);
} else {
predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),new cljs.core.Keyword(null,"line2","line2",-1975668782)], null));

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),new cljs.core.Keyword(null,"line2","line2",-1975668782));
}
} else {
pubsub.feeds.publish(topic_70045,(cljs.core.truth_((function (){var fexpr__69728 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"age","age",-604307804),null,new cljs.core.Keyword(null,"psa","psa",-321761459),null], null), null);
return (fexpr__69728.cljs$core$IFn$_invoke$arity$1 ? fexpr__69728.cljs$core$IFn$_invoke$arity$1(key_70044) : fexpr__69728.call(null,key_70044));
})())?"":null));

}


var G__70050 = seq__69591_70039;
var G__70051 = chunk__69594_70040;
var G__70052 = count__69595_70041;
var G__70053 = (i__69596_70042 + (1));
seq__69591_70039 = G__70050;
chunk__69594_70040 = G__70051;
count__69595_70041 = G__70052;
i__69596_70042 = G__70053;
continue;
} else {
var G__70054 = seq__69591_70039;
var G__70055 = chunk__69594_70040;
var G__70056 = count__69595_70041;
var G__70057 = (i__69596_70042 + (1));
seq__69591_70039 = G__70054;
chunk__69594_70040 = G__70055;
count__69595_70041 = G__70056;
i__69596_70042 = G__70057;
continue;
}
} else {
var G__70058 = seq__69591_70039;
var G__70059 = chunk__69594_70040;
var G__70060 = count__69595_70041;
var G__70061 = (i__69596_70042 + (1));
seq__69591_70039 = G__70058;
chunk__69594_70040 = G__70059;
count__69595_70041 = G__70060;
i__69596_70042 = G__70061;
continue;
}
} else {
var temp__5735__auto___70062 = cljs.core.seq(seq__69591_70039);
if(temp__5735__auto___70062){
var seq__69591_70063__$1 = temp__5735__auto___70062;
if(cljs.core.chunked_seq_QMARK_(seq__69591_70063__$1)){
var c__4556__auto___70064 = cljs.core.chunk_first(seq__69591_70063__$1);
var G__70065 = cljs.core.chunk_rest(seq__69591_70063__$1);
var G__70066 = c__4556__auto___70064;
var G__70067 = cljs.core.count(c__4556__auto___70064);
var G__70068 = (0);
seq__69591_70039 = G__70065;
chunk__69594_70040 = G__70066;
count__69595_70041 = G__70067;
i__69596_70042 = G__70068;
continue;
} else {
var vec__69742_70069 = cljs.core.first(seq__69591_70063__$1);
var key_70070 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69742_70069,(0),null);
var topic_70071 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69742_70069,(1),null);
if(cljs.core.truth_(key_70070)){
if(cljs.core.truth_(topic_70071)){

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_70070,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355))){
var map__69753_70072 = predict_prostate.state.localStorage.get_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),new cljs.core.Keyword(null,"line2","line2",-1975668782)], null));
var map__69753_70073__$1 = (((((!((map__69753_70072 == null))))?(((((map__69753_70072.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69753_70072.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69753_70072):map__69753_70072);
var plot_style_70074 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69753_70073__$1,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355));
if(cljs.core.truth_((function (){var fexpr__69777 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"area1","area1",-316994623),null,new cljs.core.Keyword(null,"line2","line2",-1975668782),null], null), null);
return (fexpr__69777.cljs$core$IFn$_invoke$arity$1 ? fexpr__69777.cljs$core$IFn$_invoke$arity$1(plot_style_70074) : fexpr__69777.call(null,plot_style_70074));
})())){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),plot_style_70074);
} else {
predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),new cljs.core.Keyword(null,"line2","line2",-1975668782)], null));

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),new cljs.core.Keyword(null,"line2","line2",-1975668782));
}
} else {
pubsub.feeds.publish(topic_70071,(cljs.core.truth_((function (){var fexpr__69789 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"age","age",-604307804),null,new cljs.core.Keyword(null,"psa","psa",-321761459),null], null), null);
return (fexpr__69789.cljs$core$IFn$_invoke$arity$1 ? fexpr__69789.cljs$core$IFn$_invoke$arity$1(key_70070) : fexpr__69789.call(null,key_70070));
})())?"":null));

}


var G__70075 = cljs.core.next(seq__69591_70063__$1);
var G__70076 = null;
var G__70077 = (0);
var G__70078 = (0);
seq__69591_70039 = G__70075;
chunk__69594_70040 = G__70076;
count__69595_70041 = G__70077;
i__69596_70042 = G__70078;
continue;
} else {
var G__70079 = cljs.core.next(seq__69591_70063__$1);
var G__70080 = null;
var G__70081 = (0);
var G__70082 = (0);
seq__69591_70039 = G__70079;
chunk__69594_70040 = G__70080;
count__69595_70041 = G__70081;
i__69596_70042 = G__70082;
continue;
}
} else {
var G__70083 = cljs.core.next(seq__69591_70063__$1);
var G__70084 = null;
var G__70085 = (0);
var G__70086 = (0);
seq__69591_70039 = G__70083;
chunk__69594_70040 = G__70084;
count__69595_70041 = G__70085;
i__69596_70042 = G__70086;
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
var len__4736__auto___70087 = arguments.length;
var i__4737__auto___70088 = (0);
while(true){
if((i__4737__auto___70088 < len__4736__auto___70087)){
args__4742__auto__.push((arguments[i__4737__auto___70088]));

var G__70089 = (i__4737__auto___70088 + (1));
i__4737__auto___70088 = G__70089;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return predict_prostate.state.mutations.subscribe_to.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(predict_prostate.state.mutations.subscribe_to.cljs$core$IFn$_invoke$arity$variadic = (function (change,cursor,p__69822){
var vec__69823 = p__69822;
var silent = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69823,(0),null);
return pubsub.feeds.subscribe(change,(function (p1__69817_SHARP_,p2__69818_SHARP_){
if(cljs.core.truth_(silent)){
} else {
predict_prostate.state.mutations.log(p1__69817_SHARP_,cljs.core.deref(cursor),p2__69818_SHARP_);
}

return cljs.core.reset_BANG_(cursor,p2__69818_SHARP_);
}));
}));

(predict_prostate.state.mutations.subscribe_to.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(predict_prostate.state.mutations.subscribe_to.cljs$lang$applyTo = (function (seq69819){
var G__69820 = cljs.core.first(seq69819);
var seq69819__$1 = cljs.core.next(seq69819);
var G__69821 = cljs.core.first(seq69819__$1);
var seq69819__$2 = cljs.core.next(seq69819__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__69820,G__69821,seq69819__$2);
}));

predict_prostate.state.mutations.clip = (function predict_prostate$state$mutations$clip(p__69827){
var map__69829 = p__69827;
var map__69829__$1 = (((((!((map__69829 == null))))?(((((map__69829.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69829.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69829):map__69829);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69829__$1,new cljs.core.Keyword(null,"value","value",305978217));
var min = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69829__$1,new cljs.core.Keyword(null,"min","min",444991522));
var max = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69829__$1,new cljs.core.Keyword(null,"max","max",61366548));
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
var seq__69844_70090 = cljs.core.seq(predict_prostate.state.run_time.input_changes());
var chunk__69845_70091 = null;
var count__69846_70092 = (0);
var i__69847_70093 = (0);
while(true){
if((i__69847_70093 < count__69846_70092)){
var vec__69952_70094 = chunk__69845_70091.cljs$core$IIndexed$_nth$arity$2(null,i__69847_70093);
var key_70095 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69952_70094,(0),null);
var change_70096 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69952_70094,(1),null);
if(cljs.core.truth_(change_70096)){
pubsub.feeds.subscribe(change_70096,((function (seq__69844_70090,chunk__69845_70091,count__69846_70092,i__69847_70093,vec__69952_70094,key_70095,change_70096){
return (function (topic,value){
predict_prostate.state.mutations.log(topic,cljs.core.deref(predict_prostate.state.run_time.input_cursor(key_70095)),value);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666),key_70095)){
var vec__69955_70097 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(value,":");
var value_70098__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69955_70097,(0),null);
var bad_70099 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69955_70097,(1),null);
var bci_70100 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520))));
var bct_70101 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666))));
if(cljs.core.truth_(isNaN(bci_70100))){
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520)),predict_prostate.state.mutations.num_to_str((function (){var x__4214__auto__ = (1);
var y__4215__auto__ = (function (){var x__4217__auto__ = bci_70100;
var y__4218__auto__ = predict_prostate.state.mutations.str_to_num(value_70098__$1);
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})();
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})()));
}

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_70098__$1),(cljs.core.truth_(bad_70099)?":":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(bad_70099)].join(''));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520),key_70095)){
var vec__69961_70102 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(value,":");
var value_70103__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69961_70102,(0),null);
var bad_70104 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69961_70102,(1),null);
var bci_70105 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520))));
var bct_70106 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666))));
if(cljs.core.not(isNaN(bct_70106))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_70103__$1),(cljs.core.truth_((function (){var or__4126__auto__ = (value_70103__$1 < (0));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return bad_70104;
}
})())?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_70103__$1)].join(''):"")].join(''));
} else {
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_70095,new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969)),value);

predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969),value], null));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,new cljs.core.Keyword(null,"gleason","gleason",-2044470526))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526)),cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518))));
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518)),cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526))));
}
} else {
if(cljs.core.truth_((function (){var fexpr__69966 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gleason","gleason",-2044470526),null,new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518),null], null), null);
return (fexpr__69966.cljs$core$IFn$_invoke$arity$1 ? fexpr__69966.cljs$core$IFn$_invoke$arity$1(key_70095) : fexpr__69966.call(null,key_70095));
})())){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526)),value);

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518)),value);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_70095,new cljs.core.Keyword(null,"h-admissions","h-admissions",-1503094844))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"h-admissions","h-admissions",-1503094844)),value);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,(0))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"charlson-comorbidity","charlson-comorbidity",-633596907)),null);
} else {
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_70095,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),value);

predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),value], null));
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(key_70095),(((value == null))?predict_prostate.state.config.get_input_default(predict_prostate.state.config.input_groups,key_70095):value));

}
}
}
}
}
}

return predict_prostate.models.runner.recalculate_model.cljs$core$IFn$_invoke$arity$2(predict_prostate.state.run_time.input_map(),predict_prostate.state.run_time.N);
});})(seq__69844_70090,chunk__69845_70091,count__69846_70092,i__69847_70093,vec__69952_70094,key_70095,change_70096))
);
} else {
}


var G__70108 = seq__69844_70090;
var G__70109 = chunk__69845_70091;
var G__70110 = count__69846_70092;
var G__70111 = (i__69847_70093 + (1));
seq__69844_70090 = G__70108;
chunk__69845_70091 = G__70109;
count__69846_70092 = G__70110;
i__69847_70093 = G__70111;
continue;
} else {
var temp__5735__auto___70112 = cljs.core.seq(seq__69844_70090);
if(temp__5735__auto___70112){
var seq__69844_70113__$1 = temp__5735__auto___70112;
if(cljs.core.chunked_seq_QMARK_(seq__69844_70113__$1)){
var c__4556__auto___70114 = cljs.core.chunk_first(seq__69844_70113__$1);
var G__70115 = cljs.core.chunk_rest(seq__69844_70113__$1);
var G__70116 = c__4556__auto___70114;
var G__70117 = cljs.core.count(c__4556__auto___70114);
var G__70118 = (0);
seq__69844_70090 = G__70115;
chunk__69845_70091 = G__70116;
count__69846_70092 = G__70117;
i__69847_70093 = G__70118;
continue;
} else {
var vec__69982_70119 = cljs.core.first(seq__69844_70113__$1);
var key_70120 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69982_70119,(0),null);
var change_70121 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69982_70119,(1),null);
if(cljs.core.truth_(change_70121)){
pubsub.feeds.subscribe(change_70121,((function (seq__69844_70090,chunk__69845_70091,count__69846_70092,i__69847_70093,vec__69982_70119,key_70120,change_70121,seq__69844_70113__$1,temp__5735__auto___70112){
return (function (topic,value){
predict_prostate.state.mutations.log(topic,cljs.core.deref(predict_prostate.state.run_time.input_cursor(key_70120)),value);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666),key_70120)){
var vec__69990_70122 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(value,":");
var value_70123__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69990_70122,(0),null);
var bad_70124 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69990_70122,(1),null);
var bci_70125 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520))));
var bct_70126 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666))));
if(cljs.core.truth_(isNaN(bci_70125))){
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520)),predict_prostate.state.mutations.num_to_str((function (){var x__4214__auto__ = (1);
var y__4215__auto__ = (function (){var x__4217__auto__ = bci_70125;
var y__4218__auto__ = predict_prostate.state.mutations.str_to_num(value_70123__$1);
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})();
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})()));
}

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_70123__$1),(cljs.core.truth_(bad_70124)?":":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(bad_70124)].join(''));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520),key_70120)){
var vec__70001_70128 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(value,":");
var value_70129__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70001_70128,(0),null);
var bad_70130 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70001_70128,(1),null);
var bci_70131 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520))));
var bct_70132 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666))));
if(cljs.core.not(isNaN(bct_70132))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_70129__$1),(cljs.core.truth_((function (){var or__4126__auto__ = (value_70129__$1 < (0));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return bad_70130;
}
})())?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_70129__$1)].join(''):"")].join(''));
} else {
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_70120,new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969)),value);

predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969),value], null));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,new cljs.core.Keyword(null,"gleason","gleason",-2044470526))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526)),cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518))));
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518)),cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526))));
}
} else {
if(cljs.core.truth_((function (){var fexpr__70012 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gleason","gleason",-2044470526),null,new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518),null], null), null);
return (fexpr__70012.cljs$core$IFn$_invoke$arity$1 ? fexpr__70012.cljs$core$IFn$_invoke$arity$1(key_70120) : fexpr__70012.call(null,key_70120));
})())){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526)),value);

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518)),value);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_70120,new cljs.core.Keyword(null,"h-admissions","h-admissions",-1503094844))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"h-admissions","h-admissions",-1503094844)),value);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,(0))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"charlson-comorbidity","charlson-comorbidity",-633596907)),null);
} else {
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_70120,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),value);

predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),value], null));
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(key_70120),(((value == null))?predict_prostate.state.config.get_input_default(predict_prostate.state.config.input_groups,key_70120):value));

}
}
}
}
}
}

return predict_prostate.models.runner.recalculate_model.cljs$core$IFn$_invoke$arity$2(predict_prostate.state.run_time.input_map(),predict_prostate.state.run_time.N);
});})(seq__69844_70090,chunk__69845_70091,count__69846_70092,i__69847_70093,vec__69982_70119,key_70120,change_70121,seq__69844_70113__$1,temp__5735__auto___70112))
);
} else {
}


var G__70133 = cljs.core.next(seq__69844_70113__$1);
var G__70134 = null;
var G__70135 = (0);
var G__70136 = (0);
seq__69844_70090 = G__70133;
chunk__69845_70091 = G__70134;
count__69846_70092 = G__70135;
i__69847_70093 = G__70136;
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

predict_prostate.state.run_time.route_change.pubsub$feeds$TopicFeed$subscribe$arity$2(null,(function (_,p__70016){
var vec__70017 = p__70016;
var page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70017,(0),null);
var param1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70017,(1),null);
var param2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70017,(2),null);
var rvec = vec__70017;
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
var new_lang_70157 = new cljs.core.Keyword(null,"lang","lang",-1819677104).cljs$core$IFn$_invoke$arity$1(predict_prostate.state.localStorage.get_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"en","en",88457073)], null)));
predict_prostate.state.mutations.reload_lang(cljs.core.name(new_lang_70157));

return translations.tongue_base.load_translations_STAR_(url,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(translations.tongue_base.handle_dictionary,predict_prostate.state.run_time.t_state_cursor));
}));

predict_prostate.state.run_time.edit_change.pubsub$feeds$TopicFeed$subscribe$arity$2(null,(function (_,arg){
var text = (function (){var fexpr__70020 = cljs.core.deref(predict_prostate.state.run_time.ttt_cursor);
return (fexpr__70020.cljs$core$IFn$_invoke$arity$1 ? fexpr__70020.cljs$core$IFn$_invoke$arity$1(arg) : fexpr__70020.call(null,arg));
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(predict_prostate.state.run_time.edit_cursor,cljs.core.assoc,new cljs.core.Keyword(null,"edit-arg","edit-arg",1216866257),arg,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"edit-key","edit-key",-1833788727),((((cljs.core.vector_QMARK_(arg)) && ((cljs.core.count(arg) > (0)))))?cljs.core.first(arg):arg),new cljs.core.Keyword(null,"text","text",-1790561697),((((cljs.core.vector_QMARK_(arg)) && ((cljs.core.count(arg) > (1)))))?cljs.core.second(arg):text)], 0));

return $("#editorModal").modal("show");
}));

predict_prostate.state.run_time.new_text_change.pubsub$feeds$TopicFeed$subscribe$arity$2(null,(function (_,p__70022){
var vec__70023 = p__70022;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70023,(0),null);
var new_text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70023,(1),null);
return cljs.core.reset_BANG_(predict_prostate.state.run_time.new_text_cursor,new_text);
}));

predict_prostate.state.run_time.text_change.pubsub$feeds$TopicFeed$subscribe$arity$2(null,(function (_,p__70027){
var vec__70028 = p__70027;
var edit_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70028,(0),null);
var new_text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70028,(1),null);
var lang = new cljs.core.Keyword(null,"lang","lang",-1819677104).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(predict_prostate.state.run_time.t_state_cursor));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(predict_prostate.state.run_time.t_state_cursor,translations.tongue_base.process_dict_op,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"upsert","upsert",1416724984),new cljs.core.Keyword(null,"lang","lang",-1819677104).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(predict_prostate.state.run_time.t_state_cursor)),cljs.core.PersistentArrayMap.createAsIfByAssoc([edit_key,new_text])], null));

cljs.core.reset_BANG_(predict_prostate.state.run_time.new_text_cursor,null);

return translations.tranny_api.upload_translation.cljs$core$IFn$_invoke$arity$3(edit_key,cljs.core.name(lang),new_text);
}));

predict_prostate.state.run_time.add_language_modal.pubsub$feeds$TopicFeed$subscribe$arity$2(null,(function (_){
return $("#newLanguageModal").modal("show");
}));

predict_prostate.state.run_time.add_language.pubsub$feeds$TopicFeed$subscribe$arity$2(null,(function (_,p__70032){
var vec__70033 = p__70032;
var new_lang = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70033,(0),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(new_lang))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(predict_prostate.state.run_time.t_state_cursor,cljs.core.update,new cljs.core.Keyword(null,"languages","languages",1471910331),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(new_lang)], 0));
} else {
return null;
}
}));

return predict_prostate.state.mutations.clear_inputs();
});

//# sourceMappingURL=predict_prostate.state.mutations.js.map
