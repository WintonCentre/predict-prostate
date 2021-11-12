goog.provide('predict_prostate.state.mutations');
predict_prostate.state.mutations.clear_inputs = (function predict_prostate$state$mutations$clear_inputs(){
var seq__32719_33004 = cljs.core.seq(predict_prostate.state.run_time.input_changes());
var chunk__32722_33005 = null;
var count__32723_33006 = (0);
var i__32724_33007 = (0);
while(true){
if((i__32724_33007 < count__32723_33006)){
var vec__32771_33008 = chunk__32722_33005.cljs$core$IIndexed$_nth$arity$2(null,i__32724_33007);
var key_33009 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32771_33008,(0),null);
var topic_33010 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32771_33008,(1),null);
if(cljs.core.truth_(key_33009)){
if(cljs.core.truth_(topic_33010)){

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_33009,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355))){
var map__32776_33011 = predict_prostate.state.localStorage.get_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),new cljs.core.Keyword(null,"line2","line2",-1975668782)], null));
var map__32776_33012__$1 = (((((!((map__32776_33011 == null))))?(((((map__32776_33011.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32776_33011.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32776_33011):map__32776_33011);
var plot_style_33013 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32776_33012__$1,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355));
if(cljs.core.truth_((function (){var fexpr__32781 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"area1","area1",-316994623),null,new cljs.core.Keyword(null,"line2","line2",-1975668782),null], null), null);
return (fexpr__32781.cljs$core$IFn$_invoke$arity$1 ? fexpr__32781.cljs$core$IFn$_invoke$arity$1(plot_style_33013) : fexpr__32781.call(null,plot_style_33013));
})())){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),plot_style_33013);
} else {
predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),new cljs.core.Keyword(null,"line2","line2",-1975668782)], null));

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),new cljs.core.Keyword(null,"line2","line2",-1975668782));
}
} else {
pubsub.feeds.publish(topic_33010,(cljs.core.truth_((function (){var fexpr__32785 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"age","age",-604307804),null,new cljs.core.Keyword(null,"psa","psa",-321761459),null], null), null);
return (fexpr__32785.cljs$core$IFn$_invoke$arity$1 ? fexpr__32785.cljs$core$IFn$_invoke$arity$1(key_33009) : fexpr__32785.call(null,key_33009));
})())?"":null));

}


var G__33017 = seq__32719_33004;
var G__33018 = chunk__32722_33005;
var G__33019 = count__32723_33006;
var G__33020 = (i__32724_33007 + (1));
seq__32719_33004 = G__33017;
chunk__32722_33005 = G__33018;
count__32723_33006 = G__33019;
i__32724_33007 = G__33020;
continue;
} else {
var G__33021 = seq__32719_33004;
var G__33022 = chunk__32722_33005;
var G__33023 = count__32723_33006;
var G__33024 = (i__32724_33007 + (1));
seq__32719_33004 = G__33021;
chunk__32722_33005 = G__33022;
count__32723_33006 = G__33023;
i__32724_33007 = G__33024;
continue;
}
} else {
var G__33025 = seq__32719_33004;
var G__33026 = chunk__32722_33005;
var G__33027 = count__32723_33006;
var G__33028 = (i__32724_33007 + (1));
seq__32719_33004 = G__33025;
chunk__32722_33005 = G__33026;
count__32723_33006 = G__33027;
i__32724_33007 = G__33028;
continue;
}
} else {
var temp__5735__auto___33029 = cljs.core.seq(seq__32719_33004);
if(temp__5735__auto___33029){
var seq__32719_33030__$1 = temp__5735__auto___33029;
if(cljs.core.chunked_seq_QMARK_(seq__32719_33030__$1)){
var c__4556__auto___33033 = cljs.core.chunk_first(seq__32719_33030__$1);
var G__33035 = cljs.core.chunk_rest(seq__32719_33030__$1);
var G__33036 = c__4556__auto___33033;
var G__33037 = cljs.core.count(c__4556__auto___33033);
var G__33038 = (0);
seq__32719_33004 = G__33035;
chunk__32722_33005 = G__33036;
count__32723_33006 = G__33037;
i__32724_33007 = G__33038;
continue;
} else {
var vec__32791_33039 = cljs.core.first(seq__32719_33030__$1);
var key_33040 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32791_33039,(0),null);
var topic_33041 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32791_33039,(1),null);
if(cljs.core.truth_(key_33040)){
if(cljs.core.truth_(topic_33041)){

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_33040,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355))){
var map__32795_33042 = predict_prostate.state.localStorage.get_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),new cljs.core.Keyword(null,"line2","line2",-1975668782)], null));
var map__32795_33043__$1 = (((((!((map__32795_33042 == null))))?(((((map__32795_33042.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32795_33042.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32795_33042):map__32795_33042);
var plot_style_33044 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32795_33043__$1,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355));
if(cljs.core.truth_((function (){var fexpr__32802 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"area1","area1",-316994623),null,new cljs.core.Keyword(null,"line2","line2",-1975668782),null], null), null);
return (fexpr__32802.cljs$core$IFn$_invoke$arity$1 ? fexpr__32802.cljs$core$IFn$_invoke$arity$1(plot_style_33044) : fexpr__32802.call(null,plot_style_33044));
})())){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),plot_style_33044);
} else {
predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),new cljs.core.Keyword(null,"line2","line2",-1975668782)], null));

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),new cljs.core.Keyword(null,"line2","line2",-1975668782));
}
} else {
pubsub.feeds.publish(topic_33041,(cljs.core.truth_((function (){var fexpr__32803 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"age","age",-604307804),null,new cljs.core.Keyword(null,"psa","psa",-321761459),null], null), null);
return (fexpr__32803.cljs$core$IFn$_invoke$arity$1 ? fexpr__32803.cljs$core$IFn$_invoke$arity$1(key_33040) : fexpr__32803.call(null,key_33040));
})())?"":null));

}


var G__33046 = cljs.core.next(seq__32719_33030__$1);
var G__33047 = null;
var G__33048 = (0);
var G__33049 = (0);
seq__32719_33004 = G__33046;
chunk__32722_33005 = G__33047;
count__32723_33006 = G__33048;
i__32724_33007 = G__33049;
continue;
} else {
var G__33050 = cljs.core.next(seq__32719_33030__$1);
var G__33051 = null;
var G__33052 = (0);
var G__33053 = (0);
seq__32719_33004 = G__33050;
chunk__32722_33005 = G__33051;
count__32723_33006 = G__33052;
i__32724_33007 = G__33053;
continue;
}
} else {
var G__33054 = cljs.core.next(seq__32719_33030__$1);
var G__33055 = null;
var G__33056 = (0);
var G__33057 = (0);
seq__32719_33004 = G__33054;
chunk__32722_33005 = G__33055;
count__32723_33006 = G__33056;
i__32724_33007 = G__33057;
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
var len__4736__auto___33058 = arguments.length;
var i__4737__auto___33059 = (0);
while(true){
if((i__4737__auto___33059 < len__4736__auto___33058)){
args__4742__auto__.push((arguments[i__4737__auto___33059]));

var G__33060 = (i__4737__auto___33059 + (1));
i__4737__auto___33059 = G__33060;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return predict_prostate.state.mutations.subscribe_to.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(predict_prostate.state.mutations.subscribe_to.cljs$core$IFn$_invoke$arity$variadic = (function (change,cursor,p__32822){
var vec__32823 = p__32822;
var silent = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32823,(0),null);
return pubsub.feeds.subscribe(change,(function (p1__32809_SHARP_,p2__32810_SHARP_){
if(cljs.core.truth_(silent)){
} else {
predict_prostate.state.mutations.log(p1__32809_SHARP_,cljs.core.deref(cursor),p2__32810_SHARP_);
}

return cljs.core.reset_BANG_(cursor,p2__32810_SHARP_);
}));
}));

(predict_prostate.state.mutations.subscribe_to.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(predict_prostate.state.mutations.subscribe_to.cljs$lang$applyTo = (function (seq32811){
var G__32812 = cljs.core.first(seq32811);
var seq32811__$1 = cljs.core.next(seq32811);
var G__32813 = cljs.core.first(seq32811__$1);
var seq32811__$2 = cljs.core.next(seq32811__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32812,G__32813,seq32811__$2);
}));

predict_prostate.state.mutations.clip = (function predict_prostate$state$mutations$clip(p__32828){
var map__32829 = p__32828;
var map__32829__$1 = (((((!((map__32829 == null))))?(((((map__32829.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32829.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32829):map__32829);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32829__$1,new cljs.core.Keyword(null,"value","value",305978217));
var min = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32829__$1,new cljs.core.Keyword(null,"min","min",444991522));
var max = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32829__$1,new cljs.core.Keyword(null,"max","max",61366548));
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
var seq__32841_33066 = cljs.core.seq(predict_prostate.state.run_time.input_changes());
var chunk__32842_33067 = null;
var count__32843_33068 = (0);
var i__32844_33069 = (0);
while(true){
if((i__32844_33069 < count__32843_33068)){
var vec__32938_33071 = chunk__32842_33067.cljs$core$IIndexed$_nth$arity$2(null,i__32844_33069);
var key_33072 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32938_33071,(0),null);
var change_33073 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32938_33071,(1),null);
if(cljs.core.truth_(change_33073)){
pubsub.feeds.subscribe(change_33073,((function (seq__32841_33066,chunk__32842_33067,count__32843_33068,i__32844_33069,vec__32938_33071,key_33072,change_33073){
return (function (topic,value){
predict_prostate.state.mutations.log(topic,cljs.core.deref(predict_prostate.state.run_time.input_cursor(key_33072)),value);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666),key_33072)){
var vec__32941_33076 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(value,":");
var value_33077__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32941_33076,(0),null);
var bad_33078 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32941_33076,(1),null);
var bci_33079 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520))));
var bct_33080 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666))));
if(cljs.core.truth_(isNaN(bci_33079))){
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520)),predict_prostate.state.mutations.num_to_str((function (){var x__4214__auto__ = (1);
var y__4215__auto__ = (function (){var x__4217__auto__ = bci_33079;
var y__4218__auto__ = predict_prostate.state.mutations.str_to_num(value_33077__$1);
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})();
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})()));
}

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_33077__$1),(cljs.core.truth_(bad_33078)?":":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(bad_33078)].join(''));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520),key_33072)){
var vec__32963_33081 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(value,":");
var value_33082__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32963_33081,(0),null);
var bad_33083 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32963_33081,(1),null);
var bci_33084 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520))));
var bct_33085 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666))));
if(cljs.core.not(isNaN(bct_33085))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_33082__$1),(cljs.core.truth_((function (){var or__4126__auto__ = (value_33082__$1 < (0));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return bad_33083;
}
})())?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_33082__$1)].join(''):"")].join(''));
} else {
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_33072,new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969)),value);

predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969),value], null));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,new cljs.core.Keyword(null,"gleason","gleason",-2044470526))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526)),cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518))));
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518)),cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526))));
}
} else {
if(cljs.core.truth_((function (){var fexpr__32977 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gleason","gleason",-2044470526),null,new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518),null], null), null);
return (fexpr__32977.cljs$core$IFn$_invoke$arity$1 ? fexpr__32977.cljs$core$IFn$_invoke$arity$1(key_33072) : fexpr__32977.call(null,key_33072));
})())){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526)),value);

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518)),value);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_33072,new cljs.core.Keyword(null,"h-admissions","h-admissions",-1503094844))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"h-admissions","h-admissions",-1503094844)),value);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,(0))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"charlson-comorbidity","charlson-comorbidity",-633596907)),null);
} else {
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_33072,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),value);

predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),value], null));
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(key_33072),(((value == null))?predict_prostate.state.config.get_input_default(predict_prostate.state.config.input_groups,key_33072):value));

}
}
}
}
}
}

return predict_prostate.models.runner.recalculate_model.cljs$core$IFn$_invoke$arity$2(predict_prostate.state.run_time.input_map(),predict_prostate.state.run_time.N);
});})(seq__32841_33066,chunk__32842_33067,count__32843_33068,i__32844_33069,vec__32938_33071,key_33072,change_33073))
);
} else {
}


var G__33097 = seq__32841_33066;
var G__33098 = chunk__32842_33067;
var G__33099 = count__32843_33068;
var G__33100 = (i__32844_33069 + (1));
seq__32841_33066 = G__33097;
chunk__32842_33067 = G__33098;
count__32843_33068 = G__33099;
i__32844_33069 = G__33100;
continue;
} else {
var temp__5735__auto___33101 = cljs.core.seq(seq__32841_33066);
if(temp__5735__auto___33101){
var seq__32841_33102__$1 = temp__5735__auto___33101;
if(cljs.core.chunked_seq_QMARK_(seq__32841_33102__$1)){
var c__4556__auto___33103 = cljs.core.chunk_first(seq__32841_33102__$1);
var G__33104 = cljs.core.chunk_rest(seq__32841_33102__$1);
var G__33105 = c__4556__auto___33103;
var G__33106 = cljs.core.count(c__4556__auto___33103);
var G__33107 = (0);
seq__32841_33066 = G__33104;
chunk__32842_33067 = G__33105;
count__32843_33068 = G__33106;
i__32844_33069 = G__33107;
continue;
} else {
var vec__32985_33108 = cljs.core.first(seq__32841_33102__$1);
var key_33109 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32985_33108,(0),null);
var change_33110 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32985_33108,(1),null);
if(cljs.core.truth_(change_33110)){
pubsub.feeds.subscribe(change_33110,((function (seq__32841_33066,chunk__32842_33067,count__32843_33068,i__32844_33069,vec__32985_33108,key_33109,change_33110,seq__32841_33102__$1,temp__5735__auto___33101){
return (function (topic,value){
predict_prostate.state.mutations.log(topic,cljs.core.deref(predict_prostate.state.run_time.input_cursor(key_33109)),value);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666),key_33109)){
var vec__32988_33111 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(value,":");
var value_33112__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32988_33111,(0),null);
var bad_33113 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32988_33111,(1),null);
var bci_33114 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520))));
var bct_33115 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666))));
if(cljs.core.truth_(isNaN(bci_33114))){
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520)),predict_prostate.state.mutations.num_to_str((function (){var x__4214__auto__ = (1);
var y__4215__auto__ = (function (){var x__4217__auto__ = bci_33114;
var y__4218__auto__ = predict_prostate.state.mutations.str_to_num(value_33112__$1);
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})();
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})()));
}

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_33112__$1),(cljs.core.truth_(bad_33113)?":":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(bad_33113)].join(''));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520),key_33109)){
var vec__32994_33116 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(value,":");
var value_33117__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32994_33116,(0),null);
var bad_33118 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32994_33116,(1),null);
var bci_33119 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520))));
var bct_33120 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666))));
if(cljs.core.not(isNaN(bct_33120))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_33117__$1),(cljs.core.truth_((function (){var or__4126__auto__ = (value_33117__$1 < (0));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return bad_33118;
}
})())?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_33117__$1)].join(''):"")].join(''));
} else {
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_33109,new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969)),value);

predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969),value], null));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,new cljs.core.Keyword(null,"gleason","gleason",-2044470526))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526)),cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518))));
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518)),cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526))));
}
} else {
if(cljs.core.truth_((function (){var fexpr__32999 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gleason","gleason",-2044470526),null,new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518),null], null), null);
return (fexpr__32999.cljs$core$IFn$_invoke$arity$1 ? fexpr__32999.cljs$core$IFn$_invoke$arity$1(key_33109) : fexpr__32999.call(null,key_33109));
})())){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526)),value);

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518)),value);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_33109,new cljs.core.Keyword(null,"h-admissions","h-admissions",-1503094844))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"h-admissions","h-admissions",-1503094844)),value);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,(0))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"charlson-comorbidity","charlson-comorbidity",-633596907)),null);
} else {
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_33109,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),value);

predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),value], null));
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(key_33109),(((value == null))?predict_prostate.state.config.get_input_default(predict_prostate.state.config.input_groups,key_33109):value));

}
}
}
}
}
}

return predict_prostate.models.runner.recalculate_model.cljs$core$IFn$_invoke$arity$2(predict_prostate.state.run_time.input_map(),predict_prostate.state.run_time.N);
});})(seq__32841_33066,chunk__32842_33067,count__32843_33068,i__32844_33069,vec__32985_33108,key_33109,change_33110,seq__32841_33102__$1,temp__5735__auto___33101))
);
} else {
}


var G__33124 = cljs.core.next(seq__32841_33102__$1);
var G__33125 = null;
var G__33126 = (0);
var G__33127 = (0);
seq__32841_33066 = G__33124;
chunk__32842_33067 = G__33125;
count__32843_33068 = G__33126;
i__32844_33069 = G__33127;
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

predict_prostate.state.run_time.route_change.pubsub$feeds$TopicFeed$subscribe$arity$2(null,(function (_,p__33000){
var vec__33001 = p__33000;
var page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33001,(0),null);
var param1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33001,(1),null);
var param2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33001,(2),null);
var rvec = vec__33001;
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
