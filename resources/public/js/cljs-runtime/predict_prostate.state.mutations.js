goog.provide('predict_prostate.state.mutations');
predict_prostate.state.mutations.paq = window._paq;
/**
 * Send an event to matemo. 
 */
predict_prostate.state.mutations.matomo_track = (function predict_prostate$state$mutations$matomo_track(var_args){
var G__164801 = arguments.length;
switch (G__164801) {
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
var seq__164816_165049 = cljs.core.seq(predict_prostate.state.run_time.input_changes());
var chunk__164819_165050 = null;
var count__164820_165051 = (0);
var i__164821_165052 = (0);
while(true){
if((i__164821_165052 < count__164820_165051)){
var vec__164857_165053 = chunk__164819_165050.cljs$core$IIndexed$_nth$arity$2(null,i__164821_165052);
var key_165054 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__164857_165053,(0),null);
var topic_165055 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__164857_165053,(1),null);
if(cljs.core.truth_(key_165054)){
if(cljs.core.truth_(topic_165055)){

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_165054,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355))){
var map__164864_165056 = predict_prostate.state.localStorage.get_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),new cljs.core.Keyword(null,"line2","line2",-1975668782)], null));
var map__164864_165057__$1 = (((((!((map__164864_165056 == null))))?(((((map__164864_165056.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__164864_165056.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__164864_165056):map__164864_165056);
var plot_style_165058 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__164864_165057__$1,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355));
if(cljs.core.truth_((function (){var fexpr__164867 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"area1","area1",-316994623),null,new cljs.core.Keyword(null,"line2","line2",-1975668782),null], null), null);
return (fexpr__164867.cljs$core$IFn$_invoke$arity$1 ? fexpr__164867.cljs$core$IFn$_invoke$arity$1(plot_style_165058) : fexpr__164867.call(null,plot_style_165058));
})())){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),plot_style_165058);
} else {
predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),new cljs.core.Keyword(null,"line2","line2",-1975668782)], null));

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),new cljs.core.Keyword(null,"line2","line2",-1975668782));
}
} else {
pubsub.feeds.publish(topic_165055,(cljs.core.truth_((function (){var fexpr__164872 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"age","age",-604307804),null,new cljs.core.Keyword(null,"psa","psa",-321761459),null], null), null);
return (fexpr__164872.cljs$core$IFn$_invoke$arity$1 ? fexpr__164872.cljs$core$IFn$_invoke$arity$1(key_165054) : fexpr__164872.call(null,key_165054));
})())?"":null));

}


var G__165059 = seq__164816_165049;
var G__165060 = chunk__164819_165050;
var G__165061 = count__164820_165051;
var G__165062 = (i__164821_165052 + (1));
seq__164816_165049 = G__165059;
chunk__164819_165050 = G__165060;
count__164820_165051 = G__165061;
i__164821_165052 = G__165062;
continue;
} else {
var G__165063 = seq__164816_165049;
var G__165064 = chunk__164819_165050;
var G__165065 = count__164820_165051;
var G__165066 = (i__164821_165052 + (1));
seq__164816_165049 = G__165063;
chunk__164819_165050 = G__165064;
count__164820_165051 = G__165065;
i__164821_165052 = G__165066;
continue;
}
} else {
var G__165067 = seq__164816_165049;
var G__165068 = chunk__164819_165050;
var G__165069 = count__164820_165051;
var G__165070 = (i__164821_165052 + (1));
seq__164816_165049 = G__165067;
chunk__164819_165050 = G__165068;
count__164820_165051 = G__165069;
i__164821_165052 = G__165070;
continue;
}
} else {
var temp__5735__auto___165071 = cljs.core.seq(seq__164816_165049);
if(temp__5735__auto___165071){
var seq__164816_165072__$1 = temp__5735__auto___165071;
if(cljs.core.chunked_seq_QMARK_(seq__164816_165072__$1)){
var c__4556__auto___165073 = cljs.core.chunk_first(seq__164816_165072__$1);
var G__165074 = cljs.core.chunk_rest(seq__164816_165072__$1);
var G__165075 = c__4556__auto___165073;
var G__165076 = cljs.core.count(c__4556__auto___165073);
var G__165077 = (0);
seq__164816_165049 = G__165074;
chunk__164819_165050 = G__165075;
count__164820_165051 = G__165076;
i__164821_165052 = G__165077;
continue;
} else {
var vec__164873_165078 = cljs.core.first(seq__164816_165072__$1);
var key_165079 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__164873_165078,(0),null);
var topic_165080 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__164873_165078,(1),null);
if(cljs.core.truth_(key_165079)){
if(cljs.core.truth_(topic_165080)){

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_165079,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355))){
var map__164878_165081 = predict_prostate.state.localStorage.get_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),new cljs.core.Keyword(null,"line2","line2",-1975668782)], null));
var map__164878_165082__$1 = (((((!((map__164878_165081 == null))))?(((((map__164878_165081.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__164878_165081.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__164878_165081):map__164878_165081);
var plot_style_165083 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__164878_165082__$1,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355));
if(cljs.core.truth_((function (){var fexpr__164881 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"area1","area1",-316994623),null,new cljs.core.Keyword(null,"line2","line2",-1975668782),null], null), null);
return (fexpr__164881.cljs$core$IFn$_invoke$arity$1 ? fexpr__164881.cljs$core$IFn$_invoke$arity$1(plot_style_165083) : fexpr__164881.call(null,plot_style_165083));
})())){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),plot_style_165083);
} else {
predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),new cljs.core.Keyword(null,"line2","line2",-1975668782)], null));

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),new cljs.core.Keyword(null,"line2","line2",-1975668782));
}
} else {
pubsub.feeds.publish(topic_165080,(cljs.core.truth_((function (){var fexpr__164883 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"age","age",-604307804),null,new cljs.core.Keyword(null,"psa","psa",-321761459),null], null), null);
return (fexpr__164883.cljs$core$IFn$_invoke$arity$1 ? fexpr__164883.cljs$core$IFn$_invoke$arity$1(key_165079) : fexpr__164883.call(null,key_165079));
})())?"":null));

}


var G__165109 = cljs.core.next(seq__164816_165072__$1);
var G__165110 = null;
var G__165111 = (0);
var G__165112 = (0);
seq__164816_165049 = G__165109;
chunk__164819_165050 = G__165110;
count__164820_165051 = G__165111;
i__164821_165052 = G__165112;
continue;
} else {
var G__165113 = cljs.core.next(seq__164816_165072__$1);
var G__165114 = null;
var G__165115 = (0);
var G__165116 = (0);
seq__164816_165049 = G__165113;
chunk__164819_165050 = G__165114;
count__164820_165051 = G__165115;
i__164821_165052 = G__165116;
continue;
}
} else {
var G__165117 = cljs.core.next(seq__164816_165072__$1);
var G__165118 = null;
var G__165119 = (0);
var G__165120 = (0);
seq__164816_165049 = G__165117;
chunk__164819_165050 = G__165118;
count__164820_165051 = G__165119;
i__164821_165052 = G__165120;
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
var len__4736__auto___165134 = arguments.length;
var i__4737__auto___165136 = (0);
while(true){
if((i__4737__auto___165136 < len__4736__auto___165134)){
args__4742__auto__.push((arguments[i__4737__auto___165136]));

var G__165137 = (i__4737__auto___165136 + (1));
i__4737__auto___165136 = G__165137;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return predict_prostate.state.mutations.subscribe_to.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(predict_prostate.state.mutations.subscribe_to.cljs$core$IFn$_invoke$arity$variadic = (function (change,cursor,p__164892){
var vec__164893 = p__164892;
var silent = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__164893,(0),null);
return pubsub.feeds.subscribe(change,(function (p1__164884_SHARP_,p2__164885_SHARP_){
if(cljs.core.truth_(silent)){
} else {
predict_prostate.state.mutations.log(p1__164884_SHARP_,cljs.core.deref(cursor),p2__164885_SHARP_);
}

return cljs.core.reset_BANG_(cursor,p2__164885_SHARP_);
}));
}));

(predict_prostate.state.mutations.subscribe_to.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(predict_prostate.state.mutations.subscribe_to.cljs$lang$applyTo = (function (seq164886){
var G__164887 = cljs.core.first(seq164886);
var seq164886__$1 = cljs.core.next(seq164886);
var G__164888 = cljs.core.first(seq164886__$1);
var seq164886__$2 = cljs.core.next(seq164886__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__164887,G__164888,seq164886__$2);
}));

predict_prostate.state.mutations.clip = (function predict_prostate$state$mutations$clip(p__164899){
var map__164900 = p__164899;
var map__164900__$1 = (((((!((map__164900 == null))))?(((((map__164900.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__164900.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__164900):map__164900);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__164900__$1,new cljs.core.Keyword(null,"value","value",305978217));
var min = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__164900__$1,new cljs.core.Keyword(null,"min","min",444991522));
var max = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__164900__$1,new cljs.core.Keyword(null,"max","max",61366548));
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
var seq__164910_165139 = cljs.core.seq(predict_prostate.state.run_time.input_changes());
var chunk__164911_165140 = null;
var count__164912_165141 = (0);
var i__164913_165142 = (0);
while(true){
if((i__164913_165142 < count__164912_165141)){
var vec__164982_165143 = chunk__164911_165140.cljs$core$IIndexed$_nth$arity$2(null,i__164913_165142);
var key_165144 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__164982_165143,(0),null);
var change_165145 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__164982_165143,(1),null);
if(cljs.core.truth_(change_165145)){
pubsub.feeds.subscribe(change_165145,((function (seq__164910_165139,chunk__164911_165140,count__164912_165141,i__164913_165142,vec__164982_165143,key_165144,change_165145){
return (function (topic,value){
predict_prostate.state.mutations.log(topic,cljs.core.deref(predict_prostate.state.run_time.input_cursor(key_165144)),value);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666),key_165144)){
var vec__164985_165146 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(value,":");
var value_165147__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__164985_165146,(0),null);
var bad_165148 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__164985_165146,(1),null);
var bci_165149 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520))));
var bct_165150 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666))));
if(cljs.core.truth_(isNaN(bci_165149))){
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520)),predict_prostate.state.mutations.num_to_str((function (){var x__4214__auto__ = (1);
var y__4215__auto__ = (function (){var x__4217__auto__ = bci_165149;
var y__4218__auto__ = predict_prostate.state.mutations.str_to_num(value_165147__$1);
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})();
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})()));
}

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_165147__$1),(cljs.core.truth_(bad_165148)?":":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(bad_165148)].join(''));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520),key_165144)){
var vec__164988_165151 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(value,":");
var value_165152__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__164988_165151,(0),null);
var bad_165153 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__164988_165151,(1),null);
var bci_165154 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520))));
var bct_165155 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666))));
if(cljs.core.not(isNaN(bct_165155))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_165152__$1),(cljs.core.truth_((function (){var or__4126__auto__ = (value_165152__$1 < (0));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return bad_165153;
}
})())?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_165152__$1)].join(''):"")].join(''));
} else {
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_165144,new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969)),value);

predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969),value], null));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,new cljs.core.Keyword(null,"gleason","gleason",-2044470526))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526)),cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518))));
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518)),cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526))));
}
} else {
if(cljs.core.truth_((function (){var fexpr__164992 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gleason","gleason",-2044470526),null,new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518),null], null), null);
return (fexpr__164992.cljs$core$IFn$_invoke$arity$1 ? fexpr__164992.cljs$core$IFn$_invoke$arity$1(key_165144) : fexpr__164992.call(null,key_165144));
})())){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526)),value);

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518)),value);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_165144,new cljs.core.Keyword(null,"h-admissions","h-admissions",-1503094844))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"h-admissions","h-admissions",-1503094844)),value);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,(0))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"charlson-comorbidity","charlson-comorbidity",-633596907)),null);
} else {
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_165144,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),value);

predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),value], null));
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(key_165144),(((value == null))?predict_prostate.state.config.get_input_default(predict_prostate.state.config.input_groups,key_165144):value));

}
}
}
}
}
}

return predict_prostate.models.runner.recalculate_model.cljs$core$IFn$_invoke$arity$2(predict_prostate.state.run_time.input_map(),predict_prostate.state.run_time.N);
});})(seq__164910_165139,chunk__164911_165140,count__164912_165141,i__164913_165142,vec__164982_165143,key_165144,change_165145))
);
} else {
}


var G__165163 = seq__164910_165139;
var G__165164 = chunk__164911_165140;
var G__165165 = count__164912_165141;
var G__165166 = (i__164913_165142 + (1));
seq__164910_165139 = G__165163;
chunk__164911_165140 = G__165164;
count__164912_165141 = G__165165;
i__164913_165142 = G__165166;
continue;
} else {
var temp__5735__auto___165167 = cljs.core.seq(seq__164910_165139);
if(temp__5735__auto___165167){
var seq__164910_165168__$1 = temp__5735__auto___165167;
if(cljs.core.chunked_seq_QMARK_(seq__164910_165168__$1)){
var c__4556__auto___165169 = cljs.core.chunk_first(seq__164910_165168__$1);
var G__165170 = cljs.core.chunk_rest(seq__164910_165168__$1);
var G__165171 = c__4556__auto___165169;
var G__165172 = cljs.core.count(c__4556__auto___165169);
var G__165173 = (0);
seq__164910_165139 = G__165170;
chunk__164911_165140 = G__165171;
count__164912_165141 = G__165172;
i__164913_165142 = G__165173;
continue;
} else {
var vec__164993_165174 = cljs.core.first(seq__164910_165168__$1);
var key_165175 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__164993_165174,(0),null);
var change_165176 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__164993_165174,(1),null);
if(cljs.core.truth_(change_165176)){
pubsub.feeds.subscribe(change_165176,((function (seq__164910_165139,chunk__164911_165140,count__164912_165141,i__164913_165142,vec__164993_165174,key_165175,change_165176,seq__164910_165168__$1,temp__5735__auto___165167){
return (function (topic,value){
predict_prostate.state.mutations.log(topic,cljs.core.deref(predict_prostate.state.run_time.input_cursor(key_165175)),value);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666),key_165175)){
var vec__165000_165177 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(value,":");
var value_165178__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__165000_165177,(0),null);
var bad_165179 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__165000_165177,(1),null);
var bci_165180 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520))));
var bct_165181 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666))));
if(cljs.core.truth_(isNaN(bci_165180))){
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520)),predict_prostate.state.mutations.num_to_str((function (){var x__4214__auto__ = (1);
var y__4215__auto__ = (function (){var x__4217__auto__ = bci_165180;
var y__4218__auto__ = predict_prostate.state.mutations.str_to_num(value_165178__$1);
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})();
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})()));
}

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_165178__$1),(cljs.core.truth_(bad_165179)?":":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(bad_165179)].join(''));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520),key_165175)){
var vec__165003_165187 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(value,":");
var value_165192__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__165003_165187,(0),null);
var bad_165194 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__165003_165187,(1),null);
var bci_165195 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520))));
var bct_165196 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666))));
if(cljs.core.not(isNaN(bct_165196))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_165192__$1),(cljs.core.truth_((function (){var or__4126__auto__ = (value_165192__$1 < (0));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return bad_165194;
}
})())?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_165192__$1)].join(''):"")].join(''));
} else {
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_165175,new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969)),value);

predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969),value], null));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,new cljs.core.Keyword(null,"gleason","gleason",-2044470526))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526)),cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518))));
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518)),cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526))));
}
} else {
if(cljs.core.truth_((function (){var fexpr__165006 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gleason","gleason",-2044470526),null,new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518),null], null), null);
return (fexpr__165006.cljs$core$IFn$_invoke$arity$1 ? fexpr__165006.cljs$core$IFn$_invoke$arity$1(key_165175) : fexpr__165006.call(null,key_165175));
})())){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526)),value);

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518)),value);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_165175,new cljs.core.Keyword(null,"h-admissions","h-admissions",-1503094844))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"h-admissions","h-admissions",-1503094844)),value);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,(0))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"charlson-comorbidity","charlson-comorbidity",-633596907)),null);
} else {
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_165175,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),value);

predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),value], null));
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(key_165175),(((value == null))?predict_prostate.state.config.get_input_default(predict_prostate.state.config.input_groups,key_165175):value));

}
}
}
}
}
}

return predict_prostate.models.runner.recalculate_model.cljs$core$IFn$_invoke$arity$2(predict_prostate.state.run_time.input_map(),predict_prostate.state.run_time.N);
});})(seq__164910_165139,chunk__164911_165140,count__164912_165141,i__164913_165142,vec__164993_165174,key_165175,change_165176,seq__164910_165168__$1,temp__5735__auto___165167))
);
} else {
}


var G__165197 = cljs.core.next(seq__164910_165168__$1);
var G__165198 = null;
var G__165199 = (0);
var G__165200 = (0);
seq__164910_165139 = G__165197;
chunk__164911_165140 = G__165198;
count__164912_165141 = G__165199;
i__164913_165142 = G__165200;
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

predict_prostate.state.run_time.route_change.pubsub$feeds$TopicFeed$subscribe$arity$2(null,(function (_,p__165020){
var vec__165021 = p__165020;
var page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__165021,(0),null);
var param1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__165021,(1),null);
var param2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__165021,(2),null);
var rvec = vec__165021;
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
var new_lang_165201 = new cljs.core.Keyword(null,"lang","lang",-1819677104).cljs$core$IFn$_invoke$arity$1(predict_prostate.state.localStorage.get_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"en","en",88457073)], null)));
predict_prostate.state.mutations.reload_lang(cljs.core.name(new_lang_165201));

return translations.tongue_base.load_translations_STAR_(url,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(translations.tongue_base.handle_dictionary,predict_prostate.state.run_time.t_state_cursor));
}));

predict_prostate.state.run_time.edit_change.pubsub$feeds$TopicFeed$subscribe$arity$2(null,(function (_,arg){
var text = (function (){var fexpr__165025 = cljs.core.deref(predict_prostate.state.run_time.ttt_cursor);
return (fexpr__165025.cljs$core$IFn$_invoke$arity$1 ? fexpr__165025.cljs$core$IFn$_invoke$arity$1(arg) : fexpr__165025.call(null,arg));
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(predict_prostate.state.run_time.edit_cursor,cljs.core.assoc,new cljs.core.Keyword(null,"edit-arg","edit-arg",1216866257),arg,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"edit-key","edit-key",-1833788727),((((cljs.core.vector_QMARK_(arg)) && ((cljs.core.count(arg) > (0)))))?cljs.core.first(arg):arg),new cljs.core.Keyword(null,"text","text",-1790561697),((((cljs.core.vector_QMARK_(arg)) && ((cljs.core.count(arg) > (1)))))?cljs.core.second(arg):text)], 0));

return $("#editorModal").modal("show");
}));

predict_prostate.state.run_time.new_text_change.pubsub$feeds$TopicFeed$subscribe$arity$2(null,(function (_,p__165026){
var vec__165027 = p__165026;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__165027,(0),null);
var new_text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__165027,(1),null);
return cljs.core.reset_BANG_(predict_prostate.state.run_time.new_text_cursor,new_text);
}));

predict_prostate.state.run_time.text_change.pubsub$feeds$TopicFeed$subscribe$arity$2(null,(function (_,p__165030){
var vec__165031 = p__165030;
var edit_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__165031,(0),null);
var new_text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__165031,(1),null);
var lang = new cljs.core.Keyword(null,"lang","lang",-1819677104).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(predict_prostate.state.run_time.t_state_cursor));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(predict_prostate.state.run_time.t_state_cursor,translations.tongue_base.process_dict_op,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"upsert","upsert",1416724984),new cljs.core.Keyword(null,"lang","lang",-1819677104).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(predict_prostate.state.run_time.t_state_cursor)),cljs.core.PersistentArrayMap.createAsIfByAssoc([edit_key,new_text])], null));

cljs.core.reset_BANG_(predict_prostate.state.run_time.new_text_cursor,null);

return translations.tranny_api.upload_translation.cljs$core$IFn$_invoke$arity$3(edit_key,cljs.core.name(lang),new_text);
}));

predict_prostate.state.run_time.add_language_modal.pubsub$feeds$TopicFeed$subscribe$arity$2(null,(function (_){
return $("#newLanguageModal").modal("show");
}));

predict_prostate.state.run_time.add_language.pubsub$feeds$TopicFeed$subscribe$arity$2(null,(function (_,p__165034){
var vec__165035 = p__165034;
var new_lang = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__165035,(0),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(new_lang))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(predict_prostate.state.run_time.t_state_cursor,cljs.core.update,new cljs.core.Keyword(null,"languages","languages",1471910331),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(new_lang)], 0));
} else {
return null;
}
}));

return predict_prostate.state.mutations.clear_inputs();
});

//# sourceMappingURL=predict_prostate.state.mutations.js.map
