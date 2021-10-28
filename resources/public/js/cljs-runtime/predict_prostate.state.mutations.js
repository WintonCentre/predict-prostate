goog.provide('predict_prostate.state.mutations');
predict_prostate.state.mutations.clear_inputs = (function predict_prostate$state$mutations$clear_inputs(){
var seq__33841_34070 = cljs.core.seq(predict_prostate.state.run_time.input_changes());
var chunk__33844_34071 = null;
var count__33845_34072 = (0);
var i__33846_34073 = (0);
while(true){
if((i__33846_34073 < count__33845_34072)){
var vec__33910_34076 = chunk__33844_34071.cljs$core$IIndexed$_nth$arity$2(null,i__33846_34073);
var key_34077 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33910_34076,(0),null);
var topic_34078 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33910_34076,(1),null);
if(cljs.core.truth_(key_34077)){
if(cljs.core.truth_(topic_34078)){

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_34077,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355))){
var map__33917_34079 = predict_prostate.state.localStorage.get_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),new cljs.core.Keyword(null,"line2","line2",-1975668782)], null));
var map__33917_34080__$1 = (((((!((map__33917_34079 == null))))?(((((map__33917_34079.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33917_34079.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33917_34079):map__33917_34079);
var plot_style_34081 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33917_34080__$1,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355));
if(cljs.core.truth_((function (){var fexpr__33926 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"area1","area1",-316994623),null,new cljs.core.Keyword(null,"line2","line2",-1975668782),null], null), null);
return (fexpr__33926.cljs$core$IFn$_invoke$arity$1 ? fexpr__33926.cljs$core$IFn$_invoke$arity$1(plot_style_34081) : fexpr__33926.call(null,plot_style_34081));
})())){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),plot_style_34081);
} else {
predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),new cljs.core.Keyword(null,"line2","line2",-1975668782)], null));

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),new cljs.core.Keyword(null,"line2","line2",-1975668782));
}
} else {
pubsub.feeds.publish(topic_34078,(cljs.core.truth_((function (){var fexpr__33927 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"age","age",-604307804),null,new cljs.core.Keyword(null,"psa","psa",-321761459),null], null), null);
return (fexpr__33927.cljs$core$IFn$_invoke$arity$1 ? fexpr__33927.cljs$core$IFn$_invoke$arity$1(key_34077) : fexpr__33927.call(null,key_34077));
})())?"":null));

}


var G__34097 = seq__33841_34070;
var G__34098 = chunk__33844_34071;
var G__34099 = count__33845_34072;
var G__34100 = (i__33846_34073 + (1));
seq__33841_34070 = G__34097;
chunk__33844_34071 = G__34098;
count__33845_34072 = G__34099;
i__33846_34073 = G__34100;
continue;
} else {
var G__34101 = seq__33841_34070;
var G__34102 = chunk__33844_34071;
var G__34103 = count__33845_34072;
var G__34104 = (i__33846_34073 + (1));
seq__33841_34070 = G__34101;
chunk__33844_34071 = G__34102;
count__33845_34072 = G__34103;
i__33846_34073 = G__34104;
continue;
}
} else {
var G__34105 = seq__33841_34070;
var G__34106 = chunk__33844_34071;
var G__34107 = count__33845_34072;
var G__34108 = (i__33846_34073 + (1));
seq__33841_34070 = G__34105;
chunk__33844_34071 = G__34106;
count__33845_34072 = G__34107;
i__33846_34073 = G__34108;
continue;
}
} else {
var temp__5735__auto___34109 = cljs.core.seq(seq__33841_34070);
if(temp__5735__auto___34109){
var seq__33841_34110__$1 = temp__5735__auto___34109;
if(cljs.core.chunked_seq_QMARK_(seq__33841_34110__$1)){
var c__4556__auto___34111 = cljs.core.chunk_first(seq__33841_34110__$1);
var G__34112 = cljs.core.chunk_rest(seq__33841_34110__$1);
var G__34113 = c__4556__auto___34111;
var G__34114 = cljs.core.count(c__4556__auto___34111);
var G__34115 = (0);
seq__33841_34070 = G__34112;
chunk__33844_34071 = G__34113;
count__33845_34072 = G__34114;
i__33846_34073 = G__34115;
continue;
} else {
var vec__33931_34118 = cljs.core.first(seq__33841_34110__$1);
var key_34119 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33931_34118,(0),null);
var topic_34120 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33931_34118,(1),null);
if(cljs.core.truth_(key_34119)){
if(cljs.core.truth_(topic_34120)){

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_34119,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355))){
var map__33934_34123 = predict_prostate.state.localStorage.get_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),new cljs.core.Keyword(null,"line2","line2",-1975668782)], null));
var map__33934_34124__$1 = (((((!((map__33934_34123 == null))))?(((((map__33934_34123.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33934_34123.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33934_34123):map__33934_34123);
var plot_style_34125 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33934_34124__$1,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355));
if(cljs.core.truth_((function (){var fexpr__33942 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"area1","area1",-316994623),null,new cljs.core.Keyword(null,"line2","line2",-1975668782),null], null), null);
return (fexpr__33942.cljs$core$IFn$_invoke$arity$1 ? fexpr__33942.cljs$core$IFn$_invoke$arity$1(plot_style_34125) : fexpr__33942.call(null,plot_style_34125));
})())){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),plot_style_34125);
} else {
predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),new cljs.core.Keyword(null,"line2","line2",-1975668782)], null));

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),new cljs.core.Keyword(null,"line2","line2",-1975668782));
}
} else {
pubsub.feeds.publish(topic_34120,(cljs.core.truth_((function (){var fexpr__33943 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"age","age",-604307804),null,new cljs.core.Keyword(null,"psa","psa",-321761459),null], null), null);
return (fexpr__33943.cljs$core$IFn$_invoke$arity$1 ? fexpr__33943.cljs$core$IFn$_invoke$arity$1(key_34119) : fexpr__33943.call(null,key_34119));
})())?"":null));

}


var G__34126 = cljs.core.next(seq__33841_34110__$1);
var G__34127 = null;
var G__34128 = (0);
var G__34129 = (0);
seq__33841_34070 = G__34126;
chunk__33844_34071 = G__34127;
count__33845_34072 = G__34128;
i__33846_34073 = G__34129;
continue;
} else {
var G__34130 = cljs.core.next(seq__33841_34110__$1);
var G__34131 = null;
var G__34132 = (0);
var G__34133 = (0);
seq__33841_34070 = G__34130;
chunk__33844_34071 = G__34131;
count__33845_34072 = G__34132;
i__33846_34073 = G__34133;
continue;
}
} else {
var G__34134 = cljs.core.next(seq__33841_34110__$1);
var G__34135 = null;
var G__34136 = (0);
var G__34137 = (0);
seq__33841_34070 = G__34134;
chunk__33844_34071 = G__34135;
count__33845_34072 = G__34136;
i__33846_34073 = G__34137;
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
var len__4736__auto___34150 = arguments.length;
var i__4737__auto___34151 = (0);
while(true){
if((i__4737__auto___34151 < len__4736__auto___34150)){
args__4742__auto__.push((arguments[i__4737__auto___34151]));

var G__34154 = (i__4737__auto___34151 + (1));
i__4737__auto___34151 = G__34154;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return predict_prostate.state.mutations.subscribe_to.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(predict_prostate.state.mutations.subscribe_to.cljs$core$IFn$_invoke$arity$variadic = (function (change,cursor,p__33993){
var vec__33994 = p__33993;
var silent = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33994,(0),null);
return pubsub.feeds.subscribe(change,(function (p1__33970_SHARP_,p2__33971_SHARP_){
if(cljs.core.truth_(silent)){
} else {
predict_prostate.state.mutations.log(p1__33970_SHARP_,cljs.core.deref(cursor),p2__33971_SHARP_);
}

return cljs.core.reset_BANG_(cursor,p2__33971_SHARP_);
}));
}));

(predict_prostate.state.mutations.subscribe_to.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(predict_prostate.state.mutations.subscribe_to.cljs$lang$applyTo = (function (seq33978){
var G__33979 = cljs.core.first(seq33978);
var seq33978__$1 = cljs.core.next(seq33978);
var G__33980 = cljs.core.first(seq33978__$1);
var seq33978__$2 = cljs.core.next(seq33978__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33979,G__33980,seq33978__$2);
}));

predict_prostate.state.mutations.clip = (function predict_prostate$state$mutations$clip(p__33997){
var map__33998 = p__33997;
var map__33998__$1 = (((((!((map__33998 == null))))?(((((map__33998.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33998.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33998):map__33998);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33998__$1,new cljs.core.Keyword(null,"value","value",305978217));
var min = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33998__$1,new cljs.core.Keyword(null,"min","min",444991522));
var max = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33998__$1,new cljs.core.Keyword(null,"max","max",61366548));
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
var seq__34000_34222 = cljs.core.seq(predict_prostate.state.run_time.input_changes());
var chunk__34001_34223 = null;
var count__34002_34224 = (0);
var i__34003_34225 = (0);
while(true){
if((i__34003_34225 < count__34002_34224)){
var vec__34024_34234 = chunk__34001_34223.cljs$core$IIndexed$_nth$arity$2(null,i__34003_34225);
var key_34235 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34024_34234,(0),null);
var change_34236 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34024_34234,(1),null);
if(cljs.core.truth_(change_34236)){
pubsub.feeds.subscribe(change_34236,((function (seq__34000_34222,chunk__34001_34223,count__34002_34224,i__34003_34225,vec__34024_34234,key_34235,change_34236){
return (function (topic,value){
predict_prostate.state.mutations.log(topic,cljs.core.deref(predict_prostate.state.run_time.input_cursor(key_34235)),value);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666),key_34235)){
var vec__34030_34241 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(value,":");
var value_34242__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34030_34241,(0),null);
var bad_34243 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34030_34241,(1),null);
var bci_34244 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520))));
var bct_34245 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666))));
if(cljs.core.truth_(isNaN(bci_34244))){
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520)),predict_prostate.state.mutations.num_to_str((function (){var x__4214__auto__ = (1);
var y__4215__auto__ = (function (){var x__4217__auto__ = bci_34244;
var y__4218__auto__ = predict_prostate.state.mutations.str_to_num(value_34242__$1);
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})();
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})()));
}

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_34242__$1),(cljs.core.truth_(bad_34243)?":":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(bad_34243)].join(''));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520),key_34235)){
var vec__34033_34247 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(value,":");
var value_34248__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34033_34247,(0),null);
var bad_34249 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34033_34247,(1),null);
var bci_34250 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520))));
var bct_34251 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666))));
if(cljs.core.not(isNaN(bct_34251))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_34248__$1),(cljs.core.truth_((function (){var or__4126__auto__ = (value_34248__$1 < (0));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return bad_34249;
}
})())?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_34248__$1)].join(''):"")].join(''));
} else {
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_34235,new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969)),value);

predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969),value], null));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,new cljs.core.Keyword(null,"gleason","gleason",-2044470526))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526)),cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518))));
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518)),cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526))));
}
} else {
if(cljs.core.truth_((function (){var fexpr__34036 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gleason","gleason",-2044470526),null,new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518),null], null), null);
return (fexpr__34036.cljs$core$IFn$_invoke$arity$1 ? fexpr__34036.cljs$core$IFn$_invoke$arity$1(key_34235) : fexpr__34036.call(null,key_34235));
})())){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526)),value);

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518)),value);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_34235,new cljs.core.Keyword(null,"h-admissions","h-admissions",-1503094844))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"h-admissions","h-admissions",-1503094844)),value);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,(0))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"charlson-comorbidity","charlson-comorbidity",-633596907)),null);
} else {
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_34235,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),value);

predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),value], null));
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(key_34235),(((value == null))?predict_prostate.state.config.get_input_default(predict_prostate.state.config.input_groups,key_34235):value));

}
}
}
}
}
}

return predict_prostate.models.runner.recalculate_model.cljs$core$IFn$_invoke$arity$2(predict_prostate.state.run_time.input_map(),predict_prostate.state.run_time.N);
});})(seq__34000_34222,chunk__34001_34223,count__34002_34224,i__34003_34225,vec__34024_34234,key_34235,change_34236))
);
} else {
}


var G__34256 = seq__34000_34222;
var G__34257 = chunk__34001_34223;
var G__34258 = count__34002_34224;
var G__34259 = (i__34003_34225 + (1));
seq__34000_34222 = G__34256;
chunk__34001_34223 = G__34257;
count__34002_34224 = G__34258;
i__34003_34225 = G__34259;
continue;
} else {
var temp__5735__auto___34260 = cljs.core.seq(seq__34000_34222);
if(temp__5735__auto___34260){
var seq__34000_34261__$1 = temp__5735__auto___34260;
if(cljs.core.chunked_seq_QMARK_(seq__34000_34261__$1)){
var c__4556__auto___34262 = cljs.core.chunk_first(seq__34000_34261__$1);
var G__34263 = cljs.core.chunk_rest(seq__34000_34261__$1);
var G__34264 = c__4556__auto___34262;
var G__34265 = cljs.core.count(c__4556__auto___34262);
var G__34266 = (0);
seq__34000_34222 = G__34263;
chunk__34001_34223 = G__34264;
count__34002_34224 = G__34265;
i__34003_34225 = G__34266;
continue;
} else {
var vec__34037_34267 = cljs.core.first(seq__34000_34261__$1);
var key_34268 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34037_34267,(0),null);
var change_34269 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34037_34267,(1),null);
if(cljs.core.truth_(change_34269)){
pubsub.feeds.subscribe(change_34269,((function (seq__34000_34222,chunk__34001_34223,count__34002_34224,i__34003_34225,vec__34037_34267,key_34268,change_34269,seq__34000_34261__$1,temp__5735__auto___34260){
return (function (topic,value){
predict_prostate.state.mutations.log(topic,cljs.core.deref(predict_prostate.state.run_time.input_cursor(key_34268)),value);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666),key_34268)){
var vec__34040_34270 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(value,":");
var value_34271__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34040_34270,(0),null);
var bad_34272 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34040_34270,(1),null);
var bci_34273 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520))));
var bct_34274 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666))));
if(cljs.core.truth_(isNaN(bci_34273))){
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520)),predict_prostate.state.mutations.num_to_str((function (){var x__4214__auto__ = (1);
var y__4215__auto__ = (function (){var x__4217__auto__ = bci_34273;
var y__4218__auto__ = predict_prostate.state.mutations.str_to_num(value_34271__$1);
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})();
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})()));
}

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_34271__$1),(cljs.core.truth_(bad_34272)?":":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(bad_34272)].join(''));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520),key_34268)){
var vec__34043_34276 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(value,":");
var value_34277__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34043_34276,(0),null);
var bad_34278 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34043_34276,(1),null);
var bci_34279 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520))));
var bct_34280 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666))));
if(cljs.core.not(isNaN(bct_34280))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_34277__$1),(cljs.core.truth_((function (){var or__4126__auto__ = (value_34277__$1 < (0));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return bad_34278;
}
})())?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_34277__$1)].join(''):"")].join(''));
} else {
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_34268,new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969)),value);

predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969),value], null));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,new cljs.core.Keyword(null,"gleason","gleason",-2044470526))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526)),cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518))));
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518)),cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526))));
}
} else {
if(cljs.core.truth_((function (){var fexpr__34047 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gleason","gleason",-2044470526),null,new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518),null], null), null);
return (fexpr__34047.cljs$core$IFn$_invoke$arity$1 ? fexpr__34047.cljs$core$IFn$_invoke$arity$1(key_34268) : fexpr__34047.call(null,key_34268));
})())){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526)),value);

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518)),value);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_34268,new cljs.core.Keyword(null,"h-admissions","h-admissions",-1503094844))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"h-admissions","h-admissions",-1503094844)),value);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,(0))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"charlson-comorbidity","charlson-comorbidity",-633596907)),null);
} else {
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_34268,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),value);

predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),value], null));
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(key_34268),(((value == null))?predict_prostate.state.config.get_input_default(predict_prostate.state.config.input_groups,key_34268):value));

}
}
}
}
}
}

return predict_prostate.models.runner.recalculate_model.cljs$core$IFn$_invoke$arity$2(predict_prostate.state.run_time.input_map(),predict_prostate.state.run_time.N);
});})(seq__34000_34222,chunk__34001_34223,count__34002_34224,i__34003_34225,vec__34037_34267,key_34268,change_34269,seq__34000_34261__$1,temp__5735__auto___34260))
);
} else {
}


var G__34281 = cljs.core.next(seq__34000_34261__$1);
var G__34282 = null;
var G__34283 = (0);
var G__34284 = (0);
seq__34000_34222 = G__34281;
chunk__34001_34223 = G__34282;
count__34002_34224 = G__34283;
i__34003_34225 = G__34284;
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

predict_prostate.state.run_time.route_change.pubsub$feeds$TopicFeed$subscribe$arity$2(null,(function (_,p__34054){
var vec__34055 = p__34054;
var page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34055,(0),null);
var param1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34055,(1),null);
var param2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34055,(2),null);
var rvec = vec__34055;
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
