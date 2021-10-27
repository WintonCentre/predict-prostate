goog.provide('predict_prostate.state.mutations');
predict_prostate.state.mutations.clear_inputs = (function predict_prostate$state$mutations$clear_inputs(){
var seq__33769_33934 = cljs.core.seq(predict_prostate.state.run_time.input_changes());
var chunk__33772_33935 = null;
var count__33773_33936 = (0);
var i__33774_33937 = (0);
while(true){
if((i__33774_33937 < count__33773_33936)){
var vec__33812_33938 = chunk__33772_33935.cljs$core$IIndexed$_nth$arity$2(null,i__33774_33937);
var key_33939 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33812_33938,(0),null);
var topic_33940 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33812_33938,(1),null);
if(cljs.core.truth_(key_33939)){
if(cljs.core.truth_(topic_33940)){

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_33939,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355))){
var map__33815_33941 = predict_prostate.state.localStorage.get_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),new cljs.core.Keyword(null,"line2","line2",-1975668782)], null));
var map__33815_33942__$1 = (((((!((map__33815_33941 == null))))?(((((map__33815_33941.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33815_33941.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33815_33941):map__33815_33941);
var plot_style_33943 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33815_33942__$1,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355));
if(cljs.core.truth_((function (){var fexpr__33819 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"area1","area1",-316994623),null,new cljs.core.Keyword(null,"line2","line2",-1975668782),null], null), null);
return (fexpr__33819.cljs$core$IFn$_invoke$arity$1 ? fexpr__33819.cljs$core$IFn$_invoke$arity$1(plot_style_33943) : fexpr__33819.call(null,plot_style_33943));
})())){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),plot_style_33943);
} else {
predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),new cljs.core.Keyword(null,"line2","line2",-1975668782)], null));

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),new cljs.core.Keyword(null,"line2","line2",-1975668782));
}
} else {
pubsub.feeds.publish(topic_33940,(cljs.core.truth_((function (){var fexpr__33820 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"age","age",-604307804),null,new cljs.core.Keyword(null,"psa","psa",-321761459),null], null), null);
return (fexpr__33820.cljs$core$IFn$_invoke$arity$1 ? fexpr__33820.cljs$core$IFn$_invoke$arity$1(key_33939) : fexpr__33820.call(null,key_33939));
})())?"":null));

}


var G__33955 = seq__33769_33934;
var G__33956 = chunk__33772_33935;
var G__33957 = count__33773_33936;
var G__33958 = (i__33774_33937 + (1));
seq__33769_33934 = G__33955;
chunk__33772_33935 = G__33956;
count__33773_33936 = G__33957;
i__33774_33937 = G__33958;
continue;
} else {
var G__33959 = seq__33769_33934;
var G__33960 = chunk__33772_33935;
var G__33961 = count__33773_33936;
var G__33962 = (i__33774_33937 + (1));
seq__33769_33934 = G__33959;
chunk__33772_33935 = G__33960;
count__33773_33936 = G__33961;
i__33774_33937 = G__33962;
continue;
}
} else {
var G__33963 = seq__33769_33934;
var G__33964 = chunk__33772_33935;
var G__33965 = count__33773_33936;
var G__33966 = (i__33774_33937 + (1));
seq__33769_33934 = G__33963;
chunk__33772_33935 = G__33964;
count__33773_33936 = G__33965;
i__33774_33937 = G__33966;
continue;
}
} else {
var temp__5735__auto___33967 = cljs.core.seq(seq__33769_33934);
if(temp__5735__auto___33967){
var seq__33769_33968__$1 = temp__5735__auto___33967;
if(cljs.core.chunked_seq_QMARK_(seq__33769_33968__$1)){
var c__4556__auto___33969 = cljs.core.chunk_first(seq__33769_33968__$1);
var G__33970 = cljs.core.chunk_rest(seq__33769_33968__$1);
var G__33971 = c__4556__auto___33969;
var G__33972 = cljs.core.count(c__4556__auto___33969);
var G__33973 = (0);
seq__33769_33934 = G__33970;
chunk__33772_33935 = G__33971;
count__33773_33936 = G__33972;
i__33774_33937 = G__33973;
continue;
} else {
var vec__33825_33974 = cljs.core.first(seq__33769_33968__$1);
var key_33975 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33825_33974,(0),null);
var topic_33976 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33825_33974,(1),null);
if(cljs.core.truth_(key_33975)){
if(cljs.core.truth_(topic_33976)){

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_33975,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355))){
var map__33828_33977 = predict_prostate.state.localStorage.get_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),new cljs.core.Keyword(null,"line2","line2",-1975668782)], null));
var map__33828_33978__$1 = (((((!((map__33828_33977 == null))))?(((((map__33828_33977.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33828_33977.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33828_33977):map__33828_33977);
var plot_style_33979 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33828_33978__$1,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355));
if(cljs.core.truth_((function (){var fexpr__33830 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"area1","area1",-316994623),null,new cljs.core.Keyword(null,"line2","line2",-1975668782),null], null), null);
return (fexpr__33830.cljs$core$IFn$_invoke$arity$1 ? fexpr__33830.cljs$core$IFn$_invoke$arity$1(plot_style_33979) : fexpr__33830.call(null,plot_style_33979));
})())){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),plot_style_33979);
} else {
predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),new cljs.core.Keyword(null,"line2","line2",-1975668782)], null));

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),new cljs.core.Keyword(null,"line2","line2",-1975668782));
}
} else {
pubsub.feeds.publish(topic_33976,(cljs.core.truth_((function (){var fexpr__33831 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"age","age",-604307804),null,new cljs.core.Keyword(null,"psa","psa",-321761459),null], null), null);
return (fexpr__33831.cljs$core$IFn$_invoke$arity$1 ? fexpr__33831.cljs$core$IFn$_invoke$arity$1(key_33975) : fexpr__33831.call(null,key_33975));
})())?"":null));

}


var G__33980 = cljs.core.next(seq__33769_33968__$1);
var G__33981 = null;
var G__33982 = (0);
var G__33983 = (0);
seq__33769_33934 = G__33980;
chunk__33772_33935 = G__33981;
count__33773_33936 = G__33982;
i__33774_33937 = G__33983;
continue;
} else {
var G__33984 = cljs.core.next(seq__33769_33968__$1);
var G__33985 = null;
var G__33986 = (0);
var G__33987 = (0);
seq__33769_33934 = G__33984;
chunk__33772_33935 = G__33985;
count__33773_33936 = G__33986;
i__33774_33937 = G__33987;
continue;
}
} else {
var G__33988 = cljs.core.next(seq__33769_33968__$1);
var G__33989 = null;
var G__33990 = (0);
var G__33991 = (0);
seq__33769_33934 = G__33988;
chunk__33772_33935 = G__33989;
count__33773_33936 = G__33990;
i__33774_33937 = G__33991;
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
var len__4736__auto___33993 = arguments.length;
var i__4737__auto___33994 = (0);
while(true){
if((i__4737__auto___33994 < len__4736__auto___33993)){
args__4742__auto__.push((arguments[i__4737__auto___33994]));

var G__33995 = (i__4737__auto___33994 + (1));
i__4737__auto___33994 = G__33995;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return predict_prostate.state.mutations.subscribe_to.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(predict_prostate.state.mutations.subscribe_to.cljs$core$IFn$_invoke$arity$variadic = (function (change,cursor,p__33844){
var vec__33845 = p__33844;
var silent = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33845,(0),null);
return pubsub.feeds.subscribe(change,(function (p1__33835_SHARP_,p2__33836_SHARP_){
if(cljs.core.truth_(silent)){
} else {
predict_prostate.state.mutations.log(p1__33835_SHARP_,cljs.core.deref(cursor),p2__33836_SHARP_);
}

return cljs.core.reset_BANG_(cursor,p2__33836_SHARP_);
}));
}));

(predict_prostate.state.mutations.subscribe_to.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(predict_prostate.state.mutations.subscribe_to.cljs$lang$applyTo = (function (seq33839){
var G__33840 = cljs.core.first(seq33839);
var seq33839__$1 = cljs.core.next(seq33839);
var G__33841 = cljs.core.first(seq33839__$1);
var seq33839__$2 = cljs.core.next(seq33839__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33840,G__33841,seq33839__$2);
}));

predict_prostate.state.mutations.clip = (function predict_prostate$state$mutations$clip(p__33848){
var map__33849 = p__33848;
var map__33849__$1 = (((((!((map__33849 == null))))?(((((map__33849.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33849.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33849):map__33849);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33849__$1,new cljs.core.Keyword(null,"value","value",305978217));
var min = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33849__$1,new cljs.core.Keyword(null,"min","min",444991522));
var max = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33849__$1,new cljs.core.Keyword(null,"max","max",61366548));
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
var seq__33851_34001 = cljs.core.seq(predict_prostate.state.run_time.input_changes());
var chunk__33852_34002 = null;
var count__33853_34003 = (0);
var i__33854_34004 = (0);
while(true){
if((i__33854_34004 < count__33853_34003)){
var vec__33875_34005 = chunk__33852_34002.cljs$core$IIndexed$_nth$arity$2(null,i__33854_34004);
var key_34006 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33875_34005,(0),null);
var change_34007 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33875_34005,(1),null);
if(cljs.core.truth_(change_34007)){
pubsub.feeds.subscribe(change_34007,((function (seq__33851_34001,chunk__33852_34002,count__33853_34003,i__33854_34004,vec__33875_34005,key_34006,change_34007){
return (function (topic,value){
predict_prostate.state.mutations.log(topic,cljs.core.deref(predict_prostate.state.run_time.input_cursor(key_34006)),value);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666),key_34006)){
var vec__33878_34008 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(value,":");
var value_34009__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33878_34008,(0),null);
var bad_34010 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33878_34008,(1),null);
var bci_34011 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520))));
var bct_34012 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666))));
if(cljs.core.truth_(isNaN(bci_34011))){
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520)),predict_prostate.state.mutations.num_to_str((function (){var x__4214__auto__ = (1);
var y__4215__auto__ = (function (){var x__4217__auto__ = bci_34011;
var y__4218__auto__ = predict_prostate.state.mutations.str_to_num(value_34009__$1);
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})();
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})()));
}

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_34009__$1),(cljs.core.truth_(bad_34010)?":":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(bad_34010)].join(''));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520),key_34006)){
var vec__33881_34013 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(value,":");
var value_34014__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33881_34013,(0),null);
var bad_34015 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33881_34013,(1),null);
var bci_34016 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520))));
var bct_34017 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666))));
if(cljs.core.not(isNaN(bct_34017))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_34014__$1),(cljs.core.truth_((function (){var or__4126__auto__ = (value_34014__$1 < (0));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return bad_34015;
}
})())?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_34014__$1)].join(''):"")].join(''));
} else {
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_34006,new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969)),value);

predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969),value], null));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,new cljs.core.Keyword(null,"gleason","gleason",-2044470526))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526)),cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518))));
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518)),cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526))));
}
} else {
if(cljs.core.truth_((function (){var fexpr__33884 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gleason","gleason",-2044470526),null,new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518),null], null), null);
return (fexpr__33884.cljs$core$IFn$_invoke$arity$1 ? fexpr__33884.cljs$core$IFn$_invoke$arity$1(key_34006) : fexpr__33884.call(null,key_34006));
})())){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526)),value);

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518)),value);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_34006,new cljs.core.Keyword(null,"h-admissions","h-admissions",-1503094844))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"h-admissions","h-admissions",-1503094844)),value);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,(0))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"charlson-comorbidity","charlson-comorbidity",-633596907)),null);
} else {
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_34006,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),value);

predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),value], null));
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(key_34006),(((value == null))?predict_prostate.state.config.get_input_default(predict_prostate.state.config.input_groups,key_34006):value));

}
}
}
}
}
}

return predict_prostate.models.runner.recalculate_model.cljs$core$IFn$_invoke$arity$2(predict_prostate.state.run_time.input_map(),predict_prostate.state.run_time.N);
});})(seq__33851_34001,chunk__33852_34002,count__33853_34003,i__33854_34004,vec__33875_34005,key_34006,change_34007))
);
} else {
}


var G__34018 = seq__33851_34001;
var G__34019 = chunk__33852_34002;
var G__34020 = count__33853_34003;
var G__34021 = (i__33854_34004 + (1));
seq__33851_34001 = G__34018;
chunk__33852_34002 = G__34019;
count__33853_34003 = G__34020;
i__33854_34004 = G__34021;
continue;
} else {
var temp__5735__auto___34022 = cljs.core.seq(seq__33851_34001);
if(temp__5735__auto___34022){
var seq__33851_34023__$1 = temp__5735__auto___34022;
if(cljs.core.chunked_seq_QMARK_(seq__33851_34023__$1)){
var c__4556__auto___34024 = cljs.core.chunk_first(seq__33851_34023__$1);
var G__34025 = cljs.core.chunk_rest(seq__33851_34023__$1);
var G__34026 = c__4556__auto___34024;
var G__34027 = cljs.core.count(c__4556__auto___34024);
var G__34028 = (0);
seq__33851_34001 = G__34025;
chunk__33852_34002 = G__34026;
count__33853_34003 = G__34027;
i__33854_34004 = G__34028;
continue;
} else {
var vec__33888_34029 = cljs.core.first(seq__33851_34023__$1);
var key_34030 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33888_34029,(0),null);
var change_34031 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33888_34029,(1),null);
if(cljs.core.truth_(change_34031)){
pubsub.feeds.subscribe(change_34031,((function (seq__33851_34001,chunk__33852_34002,count__33853_34003,i__33854_34004,vec__33888_34029,key_34030,change_34031,seq__33851_34023__$1,temp__5735__auto___34022){
return (function (topic,value){
predict_prostate.state.mutations.log(topic,cljs.core.deref(predict_prostate.state.run_time.input_cursor(key_34030)),value);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666),key_34030)){
var vec__33891_34032 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(value,":");
var value_34033__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33891_34032,(0),null);
var bad_34034 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33891_34032,(1),null);
var bci_34035 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520))));
var bct_34036 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666))));
if(cljs.core.truth_(isNaN(bci_34035))){
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520)),predict_prostate.state.mutations.num_to_str((function (){var x__4214__auto__ = (1);
var y__4215__auto__ = (function (){var x__4217__auto__ = bci_34035;
var y__4218__auto__ = predict_prostate.state.mutations.str_to_num(value_34033__$1);
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})();
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})()));
}

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_34033__$1),(cljs.core.truth_(bad_34034)?":":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(bad_34034)].join(''));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520),key_34030)){
var vec__33900_34038 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(value,":");
var value_34039__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33900_34038,(0),null);
var bad_34040 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33900_34038,(1),null);
var bci_34041 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520))));
var bct_34042 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666))));
if(cljs.core.not(isNaN(bct_34042))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_34039__$1),(cljs.core.truth_((function (){var or__4126__auto__ = (value_34039__$1 < (0));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return bad_34040;
}
})())?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_34039__$1)].join(''):"")].join(''));
} else {
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_34030,new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969)),value);

predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969),value], null));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,new cljs.core.Keyword(null,"gleason","gleason",-2044470526))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526)),cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518))));
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518)),cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526))));
}
} else {
if(cljs.core.truth_((function (){var fexpr__33915 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gleason","gleason",-2044470526),null,new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518),null], null), null);
return (fexpr__33915.cljs$core$IFn$_invoke$arity$1 ? fexpr__33915.cljs$core$IFn$_invoke$arity$1(key_34030) : fexpr__33915.call(null,key_34030));
})())){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526)),value);

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518)),value);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_34030,new cljs.core.Keyword(null,"h-admissions","h-admissions",-1503094844))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"h-admissions","h-admissions",-1503094844)),value);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,(0))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"charlson-comorbidity","charlson-comorbidity",-633596907)),null);
} else {
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_34030,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),value);

predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),value], null));
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(key_34030),(((value == null))?predict_prostate.state.config.get_input_default(predict_prostate.state.config.input_groups,key_34030):value));

}
}
}
}
}
}

return predict_prostate.models.runner.recalculate_model.cljs$core$IFn$_invoke$arity$2(predict_prostate.state.run_time.input_map(),predict_prostate.state.run_time.N);
});})(seq__33851_34001,chunk__33852_34002,count__33853_34003,i__33854_34004,vec__33888_34029,key_34030,change_34031,seq__33851_34023__$1,temp__5735__auto___34022))
);
} else {
}


var G__34047 = cljs.core.next(seq__33851_34023__$1);
var G__34048 = null;
var G__34049 = (0);
var G__34050 = (0);
seq__33851_34001 = G__34047;
chunk__33852_34002 = G__34048;
count__33853_34003 = G__34049;
i__33854_34004 = G__34050;
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

predict_prostate.state.run_time.route_change.pubsub$feeds$TopicFeed$subscribe$arity$2(null,(function (_,p__33929){
var vec__33930 = p__33929;
var page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33930,(0),null);
var param1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33930,(1),null);
var param2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33930,(2),null);
var rvec = vec__33930;
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
