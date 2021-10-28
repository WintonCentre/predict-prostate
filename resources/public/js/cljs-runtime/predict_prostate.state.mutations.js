goog.provide('predict_prostate.state.mutations');
predict_prostate.state.mutations.clear_inputs = (function predict_prostate$state$mutations$clear_inputs(){
var seq__33791_33970 = cljs.core.seq(predict_prostate.state.run_time.input_changes());
var chunk__33794_33971 = null;
var count__33795_33972 = (0);
var i__33796_33973 = (0);
while(true){
if((i__33796_33973 < count__33795_33972)){
var vec__33834_33975 = chunk__33794_33971.cljs$core$IIndexed$_nth$arity$2(null,i__33796_33973);
var key_33976 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33834_33975,(0),null);
var topic_33977 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33834_33975,(1),null);
if(cljs.core.truth_(key_33976)){
if(cljs.core.truth_(topic_33977)){

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_33976,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355))){
var map__33839_33979 = predict_prostate.state.localStorage.get_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),new cljs.core.Keyword(null,"line2","line2",-1975668782)], null));
var map__33839_33980__$1 = (((((!((map__33839_33979 == null))))?(((((map__33839_33979.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33839_33979.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33839_33979):map__33839_33979);
var plot_style_33981 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33839_33980__$1,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355));
if(cljs.core.truth_((function (){var fexpr__33841 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"area1","area1",-316994623),null,new cljs.core.Keyword(null,"line2","line2",-1975668782),null], null), null);
return (fexpr__33841.cljs$core$IFn$_invoke$arity$1 ? fexpr__33841.cljs$core$IFn$_invoke$arity$1(plot_style_33981) : fexpr__33841.call(null,plot_style_33981));
})())){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),plot_style_33981);
} else {
predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),new cljs.core.Keyword(null,"line2","line2",-1975668782)], null));

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),new cljs.core.Keyword(null,"line2","line2",-1975668782));
}
} else {
pubsub.feeds.publish(topic_33977,(cljs.core.truth_((function (){var fexpr__33843 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"age","age",-604307804),null,new cljs.core.Keyword(null,"psa","psa",-321761459),null], null), null);
return (fexpr__33843.cljs$core$IFn$_invoke$arity$1 ? fexpr__33843.cljs$core$IFn$_invoke$arity$1(key_33976) : fexpr__33843.call(null,key_33976));
})())?"":null));

}


var G__33983 = seq__33791_33970;
var G__33984 = chunk__33794_33971;
var G__33985 = count__33795_33972;
var G__33986 = (i__33796_33973 + (1));
seq__33791_33970 = G__33983;
chunk__33794_33971 = G__33984;
count__33795_33972 = G__33985;
i__33796_33973 = G__33986;
continue;
} else {
var G__33987 = seq__33791_33970;
var G__33988 = chunk__33794_33971;
var G__33989 = count__33795_33972;
var G__33990 = (i__33796_33973 + (1));
seq__33791_33970 = G__33987;
chunk__33794_33971 = G__33988;
count__33795_33972 = G__33989;
i__33796_33973 = G__33990;
continue;
}
} else {
var G__33991 = seq__33791_33970;
var G__33992 = chunk__33794_33971;
var G__33993 = count__33795_33972;
var G__33994 = (i__33796_33973 + (1));
seq__33791_33970 = G__33991;
chunk__33794_33971 = G__33992;
count__33795_33972 = G__33993;
i__33796_33973 = G__33994;
continue;
}
} else {
var temp__5735__auto___33995 = cljs.core.seq(seq__33791_33970);
if(temp__5735__auto___33995){
var seq__33791_33996__$1 = temp__5735__auto___33995;
if(cljs.core.chunked_seq_QMARK_(seq__33791_33996__$1)){
var c__4556__auto___33997 = cljs.core.chunk_first(seq__33791_33996__$1);
var G__33999 = cljs.core.chunk_rest(seq__33791_33996__$1);
var G__34000 = c__4556__auto___33997;
var G__34001 = cljs.core.count(c__4556__auto___33997);
var G__34002 = (0);
seq__33791_33970 = G__33999;
chunk__33794_33971 = G__34000;
count__33795_33972 = G__34001;
i__33796_33973 = G__34002;
continue;
} else {
var vec__33847_34003 = cljs.core.first(seq__33791_33996__$1);
var key_34004 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33847_34003,(0),null);
var topic_34005 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33847_34003,(1),null);
if(cljs.core.truth_(key_34004)){
if(cljs.core.truth_(topic_34005)){

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_34004,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355))){
var map__33850_34006 = predict_prostate.state.localStorage.get_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),new cljs.core.Keyword(null,"line2","line2",-1975668782)], null));
var map__33850_34007__$1 = (((((!((map__33850_34006 == null))))?(((((map__33850_34006.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33850_34006.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33850_34006):map__33850_34006);
var plot_style_34008 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33850_34007__$1,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355));
if(cljs.core.truth_((function (){var fexpr__33852 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"area1","area1",-316994623),null,new cljs.core.Keyword(null,"line2","line2",-1975668782),null], null), null);
return (fexpr__33852.cljs$core$IFn$_invoke$arity$1 ? fexpr__33852.cljs$core$IFn$_invoke$arity$1(plot_style_34008) : fexpr__33852.call(null,plot_style_34008));
})())){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),plot_style_34008);
} else {
predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),new cljs.core.Keyword(null,"line2","line2",-1975668782)], null));

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),new cljs.core.Keyword(null,"line2","line2",-1975668782));
}
} else {
pubsub.feeds.publish(topic_34005,(cljs.core.truth_((function (){var fexpr__33853 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"age","age",-604307804),null,new cljs.core.Keyword(null,"psa","psa",-321761459),null], null), null);
return (fexpr__33853.cljs$core$IFn$_invoke$arity$1 ? fexpr__33853.cljs$core$IFn$_invoke$arity$1(key_34004) : fexpr__33853.call(null,key_34004));
})())?"":null));

}


var G__34010 = cljs.core.next(seq__33791_33996__$1);
var G__34011 = null;
var G__34012 = (0);
var G__34013 = (0);
seq__33791_33970 = G__34010;
chunk__33794_33971 = G__34011;
count__33795_33972 = G__34012;
i__33796_33973 = G__34013;
continue;
} else {
var G__34014 = cljs.core.next(seq__33791_33996__$1);
var G__34015 = null;
var G__34016 = (0);
var G__34017 = (0);
seq__33791_33970 = G__34014;
chunk__33794_33971 = G__34015;
count__33795_33972 = G__34016;
i__33796_33973 = G__34017;
continue;
}
} else {
var G__34018 = cljs.core.next(seq__33791_33996__$1);
var G__34019 = null;
var G__34020 = (0);
var G__34021 = (0);
seq__33791_33970 = G__34018;
chunk__33794_33971 = G__34019;
count__33795_33972 = G__34020;
i__33796_33973 = G__34021;
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
var len__4736__auto___34023 = arguments.length;
var i__4737__auto___34024 = (0);
while(true){
if((i__4737__auto___34024 < len__4736__auto___34023)){
args__4742__auto__.push((arguments[i__4737__auto___34024]));

var G__34027 = (i__4737__auto___34024 + (1));
i__4737__auto___34024 = G__34027;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return predict_prostate.state.mutations.subscribe_to.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(predict_prostate.state.mutations.subscribe_to.cljs$core$IFn$_invoke$arity$variadic = (function (change,cursor,p__33863){
var vec__33864 = p__33863;
var silent = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33864,(0),null);
return pubsub.feeds.subscribe(change,(function (p1__33854_SHARP_,p2__33855_SHARP_){
if(cljs.core.truth_(silent)){
} else {
predict_prostate.state.mutations.log(p1__33854_SHARP_,cljs.core.deref(cursor),p2__33855_SHARP_);
}

return cljs.core.reset_BANG_(cursor,p2__33855_SHARP_);
}));
}));

(predict_prostate.state.mutations.subscribe_to.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(predict_prostate.state.mutations.subscribe_to.cljs$lang$applyTo = (function (seq33859){
var G__33860 = cljs.core.first(seq33859);
var seq33859__$1 = cljs.core.next(seq33859);
var G__33861 = cljs.core.first(seq33859__$1);
var seq33859__$2 = cljs.core.next(seq33859__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33860,G__33861,seq33859__$2);
}));

predict_prostate.state.mutations.clip = (function predict_prostate$state$mutations$clip(p__33870){
var map__33871 = p__33870;
var map__33871__$1 = (((((!((map__33871 == null))))?(((((map__33871.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33871.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33871):map__33871);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33871__$1,new cljs.core.Keyword(null,"value","value",305978217));
var min = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33871__$1,new cljs.core.Keyword(null,"min","min",444991522));
var max = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33871__$1,new cljs.core.Keyword(null,"max","max",61366548));
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
var seq__33879_34030 = cljs.core.seq(predict_prostate.state.run_time.input_changes());
var chunk__33880_34031 = null;
var count__33881_34032 = (0);
var i__33882_34033 = (0);
while(true){
if((i__33882_34033 < count__33881_34032)){
var vec__33916_34036 = chunk__33880_34031.cljs$core$IIndexed$_nth$arity$2(null,i__33882_34033);
var key_34037 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33916_34036,(0),null);
var change_34039 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33916_34036,(1),null);
if(cljs.core.truth_(change_34039)){
pubsub.feeds.subscribe(change_34039,((function (seq__33879_34030,chunk__33880_34031,count__33881_34032,i__33882_34033,vec__33916_34036,key_34037,change_34039){
return (function (topic,value){
predict_prostate.state.mutations.log(topic,cljs.core.deref(predict_prostate.state.run_time.input_cursor(key_34037)),value);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666),key_34037)){
var vec__33919_34043 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(value,":");
var value_34044__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33919_34043,(0),null);
var bad_34045 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33919_34043,(1),null);
var bci_34046 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520))));
var bct_34047 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666))));
if(cljs.core.truth_(isNaN(bci_34046))){
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520)),predict_prostate.state.mutations.num_to_str((function (){var x__4214__auto__ = (1);
var y__4215__auto__ = (function (){var x__4217__auto__ = bci_34046;
var y__4218__auto__ = predict_prostate.state.mutations.str_to_num(value_34044__$1);
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})();
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})()));
}

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_34044__$1),(cljs.core.truth_(bad_34045)?":":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(bad_34045)].join(''));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520),key_34037)){
var vec__33923_34051 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(value,":");
var value_34052__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33923_34051,(0),null);
var bad_34053 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33923_34051,(1),null);
var bci_34054 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520))));
var bct_34055 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666))));
if(cljs.core.not(isNaN(bct_34055))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_34052__$1),(cljs.core.truth_((function (){var or__4126__auto__ = (value_34052__$1 < (0));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return bad_34053;
}
})())?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_34052__$1)].join(''):"")].join(''));
} else {
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_34037,new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969)),value);

predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969),value], null));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,new cljs.core.Keyword(null,"gleason","gleason",-2044470526))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526)),cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518))));
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518)),cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526))));
}
} else {
if(cljs.core.truth_((function (){var fexpr__33929 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gleason","gleason",-2044470526),null,new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518),null], null), null);
return (fexpr__33929.cljs$core$IFn$_invoke$arity$1 ? fexpr__33929.cljs$core$IFn$_invoke$arity$1(key_34037) : fexpr__33929.call(null,key_34037));
})())){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526)),value);

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518)),value);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_34037,new cljs.core.Keyword(null,"h-admissions","h-admissions",-1503094844))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"h-admissions","h-admissions",-1503094844)),value);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,(0))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"charlson-comorbidity","charlson-comorbidity",-633596907)),null);
} else {
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_34037,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),value);

predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),value], null));
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(key_34037),(((value == null))?predict_prostate.state.config.get_input_default(predict_prostate.state.config.input_groups,key_34037):value));

}
}
}
}
}
}

return predict_prostate.models.runner.recalculate_model.cljs$core$IFn$_invoke$arity$2(predict_prostate.state.run_time.input_map(),predict_prostate.state.run_time.N);
});})(seq__33879_34030,chunk__33880_34031,count__33881_34032,i__33882_34033,vec__33916_34036,key_34037,change_34039))
);
} else {
}


var G__34061 = seq__33879_34030;
var G__34062 = chunk__33880_34031;
var G__34063 = count__33881_34032;
var G__34064 = (i__33882_34033 + (1));
seq__33879_34030 = G__34061;
chunk__33880_34031 = G__34062;
count__33881_34032 = G__34063;
i__33882_34033 = G__34064;
continue;
} else {
var temp__5735__auto___34066 = cljs.core.seq(seq__33879_34030);
if(temp__5735__auto___34066){
var seq__33879_34067__$1 = temp__5735__auto___34066;
if(cljs.core.chunked_seq_QMARK_(seq__33879_34067__$1)){
var c__4556__auto___34068 = cljs.core.chunk_first(seq__33879_34067__$1);
var G__34069 = cljs.core.chunk_rest(seq__33879_34067__$1);
var G__34070 = c__4556__auto___34068;
var G__34071 = cljs.core.count(c__4556__auto___34068);
var G__34072 = (0);
seq__33879_34030 = G__34069;
chunk__33880_34031 = G__34070;
count__33881_34032 = G__34071;
i__33882_34033 = G__34072;
continue;
} else {
var vec__33933_34074 = cljs.core.first(seq__33879_34067__$1);
var key_34075 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33933_34074,(0),null);
var change_34076 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33933_34074,(1),null);
if(cljs.core.truth_(change_34076)){
pubsub.feeds.subscribe(change_34076,((function (seq__33879_34030,chunk__33880_34031,count__33881_34032,i__33882_34033,vec__33933_34074,key_34075,change_34076,seq__33879_34067__$1,temp__5735__auto___34066){
return (function (topic,value){
predict_prostate.state.mutations.log(topic,cljs.core.deref(predict_prostate.state.run_time.input_cursor(key_34075)),value);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666),key_34075)){
var vec__33938_34079 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(value,":");
var value_34080__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33938_34079,(0),null);
var bad_34081 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33938_34079,(1),null);
var bci_34082 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520))));
var bct_34083 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666))));
if(cljs.core.truth_(isNaN(bci_34082))){
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520)),predict_prostate.state.mutations.num_to_str((function (){var x__4214__auto__ = (1);
var y__4215__auto__ = (function (){var x__4217__auto__ = bci_34082;
var y__4218__auto__ = predict_prostate.state.mutations.str_to_num(value_34080__$1);
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})();
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})()));
}

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_34080__$1),(cljs.core.truth_(bad_34081)?":":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(bad_34081)].join(''));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520),key_34075)){
var vec__33943_34085 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(value,":");
var value_34086__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33943_34085,(0),null);
var bad_34087 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33943_34085,(1),null);
var bci_34088 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520))));
var bct_34089 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666))));
if(cljs.core.not(isNaN(bct_34089))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_34086__$1),(cljs.core.truth_((function (){var or__4126__auto__ = (value_34086__$1 < (0));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return bad_34087;
}
})())?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_34086__$1)].join(''):"")].join(''));
} else {
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_34075,new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969)),value);

predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969),value], null));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,new cljs.core.Keyword(null,"gleason","gleason",-2044470526))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526)),cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518))));
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518)),cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526))));
}
} else {
if(cljs.core.truth_((function (){var fexpr__33947 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gleason","gleason",-2044470526),null,new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518),null], null), null);
return (fexpr__33947.cljs$core$IFn$_invoke$arity$1 ? fexpr__33947.cljs$core$IFn$_invoke$arity$1(key_34075) : fexpr__33947.call(null,key_34075));
})())){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526)),value);

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518)),value);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_34075,new cljs.core.Keyword(null,"h-admissions","h-admissions",-1503094844))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"h-admissions","h-admissions",-1503094844)),value);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,(0))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"charlson-comorbidity","charlson-comorbidity",-633596907)),null);
} else {
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_34075,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),value);

predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),value], null));
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(key_34075),(((value == null))?predict_prostate.state.config.get_input_default(predict_prostate.state.config.input_groups,key_34075):value));

}
}
}
}
}
}

return predict_prostate.models.runner.recalculate_model.cljs$core$IFn$_invoke$arity$2(predict_prostate.state.run_time.input_map(),predict_prostate.state.run_time.N);
});})(seq__33879_34030,chunk__33880_34031,count__33881_34032,i__33882_34033,vec__33933_34074,key_34075,change_34076,seq__33879_34067__$1,temp__5735__auto___34066))
);
} else {
}


var G__34114 = cljs.core.next(seq__33879_34067__$1);
var G__34115 = null;
var G__34116 = (0);
var G__34117 = (0);
seq__33879_34030 = G__34114;
chunk__33880_34031 = G__34115;
count__33881_34032 = G__34116;
i__33882_34033 = G__34117;
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
return (interop.jsx.jq$.cljs$core$IFn$_invoke$arity$1 ? interop.jsx.jq$.cljs$core$IFn$_invoke$arity$1("#topModal") : interop.jsx.jq$.call(null,"#topModal")).modal("show");
} else {
return (interop.jsx.jq$.cljs$core$IFn$_invoke$arity$1 ? interop.jsx.jq$.cljs$core$IFn$_invoke$arity$1("#topModal") : interop.jsx.jq$.call(null,"#topModal")).modal("hide");
}
}));

predict_prostate.state.run_time.settings_change.pubsub$feeds$TopicFeed$subscribe$arity$2(null,(function (_,help_key){
cljs.core.reset_BANG_(predict_prostate.state.run_time.settings_cursor,help_key);

if(cljs.core.truth_(help_key)){
return (interop.jsx.jq$.cljs$core$IFn$_invoke$arity$1 ? interop.jsx.jq$.cljs$core$IFn$_invoke$arity$1("#settingsModal") : interop.jsx.jq$.call(null,"#settingsModal")).modal("show");
} else {
return (interop.jsx.jq$.cljs$core$IFn$_invoke$arity$1 ? interop.jsx.jq$.cljs$core$IFn$_invoke$arity$1("#settingsModal") : interop.jsx.jq$.call(null,"#settingsModal")).modal("hide");
}
}));

predict_prostate.state.run_time.print_change.pubsub$feeds$TopicFeed$subscribe$arity$2(null,(function (_,val){
cljs.core.reset_BANG_(predict_prostate.state.run_time.print_cursor,val);

return $("#printModal").modal("show");
}));

predict_prostate.state.run_time.route_change.pubsub$feeds$TopicFeed$subscribe$arity$2(null,(function (_,p__33963){
var vec__33965 = p__33963;
var page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33965,(0),null);
var param1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33965,(1),null);
var param2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33965,(2),null);
var rvec = vec__33965;
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
