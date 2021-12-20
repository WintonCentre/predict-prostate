goog.provide('predict_prostate.state.mutations');
predict_prostate.state.mutations.paq = window._paq;
/**
 * Send an event to matemo. 
 */
predict_prostate.state.mutations.matomo_track = (function predict_prostate$state$mutations$matomo_track(var_args){
var G__40244 = arguments.length;
switch (G__40244) {
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
var seq__40265_40889 = cljs.core.seq(predict_prostate.state.run_time.input_changes());
var chunk__40268_40890 = null;
var count__40269_40891 = (0);
var i__40270_40892 = (0);
while(true){
if((i__40270_40892 < count__40269_40891)){
var vec__40322_40893 = chunk__40268_40890.cljs$core$IIndexed$_nth$arity$2(null,i__40270_40892);
var key_40894 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40322_40893,(0),null);
var topic_40895 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40322_40893,(1),null);
if(cljs.core.truth_(key_40894)){
if(cljs.core.truth_(topic_40895)){

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_40894,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355))){
var map__40326_40901 = predict_prostate.state.localStorage.get_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),new cljs.core.Keyword(null,"line2","line2",-1975668782)], null));
var map__40326_40902__$1 = (((((!((map__40326_40901 == null))))?(((((map__40326_40901.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40326_40901.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40326_40901):map__40326_40901);
var plot_style_40903 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40326_40902__$1,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355));
if(cljs.core.truth_((function (){var fexpr__40328 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"area1","area1",-316994623),null,new cljs.core.Keyword(null,"line2","line2",-1975668782),null], null), null);
return (fexpr__40328.cljs$core$IFn$_invoke$arity$1 ? fexpr__40328.cljs$core$IFn$_invoke$arity$1(plot_style_40903) : fexpr__40328.call(null,plot_style_40903));
})())){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),plot_style_40903);
} else {
predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),new cljs.core.Keyword(null,"line2","line2",-1975668782)], null));

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),new cljs.core.Keyword(null,"line2","line2",-1975668782));
}
} else {
pubsub.feeds.publish(topic_40895,(cljs.core.truth_((function (){var fexpr__40329 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"age","age",-604307804),null,new cljs.core.Keyword(null,"psa","psa",-321761459),null], null), null);
return (fexpr__40329.cljs$core$IFn$_invoke$arity$1 ? fexpr__40329.cljs$core$IFn$_invoke$arity$1(key_40894) : fexpr__40329.call(null,key_40894));
})())?"":null));

}


var G__40915 = seq__40265_40889;
var G__40916 = chunk__40268_40890;
var G__40917 = count__40269_40891;
var G__40918 = (i__40270_40892 + (1));
seq__40265_40889 = G__40915;
chunk__40268_40890 = G__40916;
count__40269_40891 = G__40917;
i__40270_40892 = G__40918;
continue;
} else {
var G__40919 = seq__40265_40889;
var G__40920 = chunk__40268_40890;
var G__40921 = count__40269_40891;
var G__40922 = (i__40270_40892 + (1));
seq__40265_40889 = G__40919;
chunk__40268_40890 = G__40920;
count__40269_40891 = G__40921;
i__40270_40892 = G__40922;
continue;
}
} else {
var G__40923 = seq__40265_40889;
var G__40924 = chunk__40268_40890;
var G__40925 = count__40269_40891;
var G__40926 = (i__40270_40892 + (1));
seq__40265_40889 = G__40923;
chunk__40268_40890 = G__40924;
count__40269_40891 = G__40925;
i__40270_40892 = G__40926;
continue;
}
} else {
var temp__5735__auto___40927 = cljs.core.seq(seq__40265_40889);
if(temp__5735__auto___40927){
var seq__40265_40928__$1 = temp__5735__auto___40927;
if(cljs.core.chunked_seq_QMARK_(seq__40265_40928__$1)){
var c__4556__auto___40929 = cljs.core.chunk_first(seq__40265_40928__$1);
var G__40930 = cljs.core.chunk_rest(seq__40265_40928__$1);
var G__40931 = c__4556__auto___40929;
var G__40932 = cljs.core.count(c__4556__auto___40929);
var G__40933 = (0);
seq__40265_40889 = G__40930;
chunk__40268_40890 = G__40931;
count__40269_40891 = G__40932;
i__40270_40892 = G__40933;
continue;
} else {
var vec__40341_40934 = cljs.core.first(seq__40265_40928__$1);
var key_40935 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40341_40934,(0),null);
var topic_40936 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40341_40934,(1),null);
if(cljs.core.truth_(key_40935)){
if(cljs.core.truth_(topic_40936)){

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_40935,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355))){
var map__40349_40937 = predict_prostate.state.localStorage.get_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),new cljs.core.Keyword(null,"line2","line2",-1975668782)], null));
var map__40349_40938__$1 = (((((!((map__40349_40937 == null))))?(((((map__40349_40937.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40349_40937.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40349_40937):map__40349_40937);
var plot_style_40939 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40349_40938__$1,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355));
if(cljs.core.truth_((function (){var fexpr__40357 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"area1","area1",-316994623),null,new cljs.core.Keyword(null,"line2","line2",-1975668782),null], null), null);
return (fexpr__40357.cljs$core$IFn$_invoke$arity$1 ? fexpr__40357.cljs$core$IFn$_invoke$arity$1(plot_style_40939) : fexpr__40357.call(null,plot_style_40939));
})())){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),plot_style_40939);
} else {
predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),new cljs.core.Keyword(null,"line2","line2",-1975668782)], null));

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),new cljs.core.Keyword(null,"line2","line2",-1975668782));
}
} else {
pubsub.feeds.publish(topic_40936,(cljs.core.truth_((function (){var fexpr__40364 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"age","age",-604307804),null,new cljs.core.Keyword(null,"psa","psa",-321761459),null], null), null);
return (fexpr__40364.cljs$core$IFn$_invoke$arity$1 ? fexpr__40364.cljs$core$IFn$_invoke$arity$1(key_40935) : fexpr__40364.call(null,key_40935));
})())?"":null));

}


var G__40950 = cljs.core.next(seq__40265_40928__$1);
var G__40951 = null;
var G__40952 = (0);
var G__40953 = (0);
seq__40265_40889 = G__40950;
chunk__40268_40890 = G__40951;
count__40269_40891 = G__40952;
i__40270_40892 = G__40953;
continue;
} else {
var G__40954 = cljs.core.next(seq__40265_40928__$1);
var G__40955 = null;
var G__40956 = (0);
var G__40957 = (0);
seq__40265_40889 = G__40954;
chunk__40268_40890 = G__40955;
count__40269_40891 = G__40956;
i__40270_40892 = G__40957;
continue;
}
} else {
var G__40958 = cljs.core.next(seq__40265_40928__$1);
var G__40959 = null;
var G__40960 = (0);
var G__40961 = (0);
seq__40265_40889 = G__40958;
chunk__40268_40890 = G__40959;
count__40269_40891 = G__40960;
i__40270_40892 = G__40961;
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
var len__4736__auto___40963 = arguments.length;
var i__4737__auto___40964 = (0);
while(true){
if((i__4737__auto___40964 < len__4736__auto___40963)){
args__4742__auto__.push((arguments[i__4737__auto___40964]));

var G__40965 = (i__4737__auto___40964 + (1));
i__4737__auto___40964 = G__40965;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return predict_prostate.state.mutations.subscribe_to.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(predict_prostate.state.mutations.subscribe_to.cljs$core$IFn$_invoke$arity$variadic = (function (change,cursor,p__40403){
var vec__40404 = p__40403;
var silent = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40404,(0),null);
return pubsub.feeds.subscribe(change,(function (p1__40380_SHARP_,p2__40381_SHARP_){
if(cljs.core.truth_(silent)){
} else {
predict_prostate.state.mutations.log(p1__40380_SHARP_,cljs.core.deref(cursor),p2__40381_SHARP_);
}

return cljs.core.reset_BANG_(cursor,p2__40381_SHARP_);
}));
}));

(predict_prostate.state.mutations.subscribe_to.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(predict_prostate.state.mutations.subscribe_to.cljs$lang$applyTo = (function (seq40384){
var G__40385 = cljs.core.first(seq40384);
var seq40384__$1 = cljs.core.next(seq40384);
var G__40386 = cljs.core.first(seq40384__$1);
var seq40384__$2 = cljs.core.next(seq40384__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40385,G__40386,seq40384__$2);
}));

predict_prostate.state.mutations.clip = (function predict_prostate$state$mutations$clip(p__40433){
var map__40434 = p__40433;
var map__40434__$1 = (((((!((map__40434 == null))))?(((((map__40434.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40434.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40434):map__40434);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40434__$1,new cljs.core.Keyword(null,"value","value",305978217));
var min = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40434__$1,new cljs.core.Keyword(null,"min","min",444991522));
var max = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40434__$1,new cljs.core.Keyword(null,"max","max",61366548));
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
var seq__40501_40975 = cljs.core.seq(predict_prostate.state.run_time.input_changes());
var chunk__40503_40976 = null;
var count__40504_40977 = (0);
var i__40505_40978 = (0);
while(true){
if((i__40505_40978 < count__40504_40977)){
var vec__40669_40979 = chunk__40503_40976.cljs$core$IIndexed$_nth$arity$2(null,i__40505_40978);
var key_40980 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40669_40979,(0),null);
var change_40981 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40669_40979,(1),null);
if(cljs.core.truth_(change_40981)){
pubsub.feeds.subscribe(change_40981,((function (seq__40501_40975,chunk__40503_40976,count__40504_40977,i__40505_40978,vec__40669_40979,key_40980,change_40981){
return (function (topic,value){
predict_prostate.state.mutations.log(topic,cljs.core.deref(predict_prostate.state.run_time.input_cursor(key_40980)),value);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666),key_40980)){
var vec__40691_40982 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(value,":");
var value_40983__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40691_40982,(0),null);
var bad_40984 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40691_40982,(1),null);
var bci_40985 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520))));
var bct_40986 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666))));
if(cljs.core.truth_(isNaN(bci_40985))){
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520)),predict_prostate.state.mutations.num_to_str((function (){var x__4214__auto__ = (1);
var y__4215__auto__ = (function (){var x__4217__auto__ = bci_40985;
var y__4218__auto__ = predict_prostate.state.mutations.str_to_num(value_40983__$1);
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})();
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})()));
}

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_40983__$1),(cljs.core.truth_(bad_40984)?":":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(bad_40984)].join(''));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520),key_40980)){
var vec__40714_40987 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(value,":");
var value_40988__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40714_40987,(0),null);
var bad_40989 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40714_40987,(1),null);
var bci_40990 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520))));
var bct_40991 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666))));
if(cljs.core.not(isNaN(bct_40991))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_40988__$1),(cljs.core.truth_((function (){var or__4126__auto__ = (value_40988__$1 < (0));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return bad_40989;
}
})())?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_40988__$1)].join(''):"")].join(''));
} else {
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_40980,new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969)),value);

predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969),value], null));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,new cljs.core.Keyword(null,"gleason","gleason",-2044470526))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526)),cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518))));
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518)),cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526))));
}
} else {
if(cljs.core.truth_((function (){var fexpr__40733 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gleason","gleason",-2044470526),null,new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518),null], null), null);
return (fexpr__40733.cljs$core$IFn$_invoke$arity$1 ? fexpr__40733.cljs$core$IFn$_invoke$arity$1(key_40980) : fexpr__40733.call(null,key_40980));
})())){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526)),value);

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518)),value);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_40980,new cljs.core.Keyword(null,"h-admissions","h-admissions",-1503094844))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"h-admissions","h-admissions",-1503094844)),value);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,(0))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"charlson-comorbidity","charlson-comorbidity",-633596907)),null);
} else {
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_40980,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),value);

predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),value], null));
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(key_40980),(((value == null))?predict_prostate.state.config.get_input_default(predict_prostate.state.config.input_groups,key_40980):value));

}
}
}
}
}
}

return predict_prostate.models.runner.recalculate_model.cljs$core$IFn$_invoke$arity$2(predict_prostate.state.run_time.input_map(),predict_prostate.state.run_time.N);
});})(seq__40501_40975,chunk__40503_40976,count__40504_40977,i__40505_40978,vec__40669_40979,key_40980,change_40981))
);
} else {
}


var G__40995 = seq__40501_40975;
var G__40996 = chunk__40503_40976;
var G__40997 = count__40504_40977;
var G__40998 = (i__40505_40978 + (1));
seq__40501_40975 = G__40995;
chunk__40503_40976 = G__40996;
count__40504_40977 = G__40997;
i__40505_40978 = G__40998;
continue;
} else {
var temp__5735__auto___40999 = cljs.core.seq(seq__40501_40975);
if(temp__5735__auto___40999){
var seq__40501_41000__$1 = temp__5735__auto___40999;
if(cljs.core.chunked_seq_QMARK_(seq__40501_41000__$1)){
var c__4556__auto___41001 = cljs.core.chunk_first(seq__40501_41000__$1);
var G__41002 = cljs.core.chunk_rest(seq__40501_41000__$1);
var G__41003 = c__4556__auto___41001;
var G__41004 = cljs.core.count(c__4556__auto___41001);
var G__41005 = (0);
seq__40501_40975 = G__41002;
chunk__40503_40976 = G__41003;
count__40504_40977 = G__41004;
i__40505_40978 = G__41005;
continue;
} else {
var vec__40750_41006 = cljs.core.first(seq__40501_41000__$1);
var key_41007 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40750_41006,(0),null);
var change_41008 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40750_41006,(1),null);
if(cljs.core.truth_(change_41008)){
pubsub.feeds.subscribe(change_41008,((function (seq__40501_40975,chunk__40503_40976,count__40504_40977,i__40505_40978,vec__40750_41006,key_41007,change_41008,seq__40501_41000__$1,temp__5735__auto___40999){
return (function (topic,value){
predict_prostate.state.mutations.log(topic,cljs.core.deref(predict_prostate.state.run_time.input_cursor(key_41007)),value);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666),key_41007)){
var vec__40755_41010 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(value,":");
var value_41011__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40755_41010,(0),null);
var bad_41012 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40755_41010,(1),null);
var bci_41013 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520))));
var bct_41014 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666))));
if(cljs.core.truth_(isNaN(bci_41013))){
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520)),predict_prostate.state.mutations.num_to_str((function (){var x__4214__auto__ = (1);
var y__4215__auto__ = (function (){var x__4217__auto__ = bci_41013;
var y__4218__auto__ = predict_prostate.state.mutations.str_to_num(value_41011__$1);
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})();
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})()));
}

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_41011__$1),(cljs.core.truth_(bad_41012)?":":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(bad_41012)].join(''));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520),key_41007)){
var vec__40761_41016 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(value,":");
var value_41017__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40761_41016,(0),null);
var bad_41018 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40761_41016,(1),null);
var bci_41019 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520))));
var bct_41020 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666))));
if(cljs.core.not(isNaN(bct_41020))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_41017__$1),(cljs.core.truth_((function (){var or__4126__auto__ = (value_41017__$1 < (0));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return bad_41018;
}
})())?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_41017__$1)].join(''):"")].join(''));
} else {
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_41007,new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969)),value);

predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969),value], null));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,new cljs.core.Keyword(null,"gleason","gleason",-2044470526))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526)),cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518))));
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518)),cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526))));
}
} else {
if(cljs.core.truth_((function (){var fexpr__40769 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gleason","gleason",-2044470526),null,new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518),null], null), null);
return (fexpr__40769.cljs$core$IFn$_invoke$arity$1 ? fexpr__40769.cljs$core$IFn$_invoke$arity$1(key_41007) : fexpr__40769.call(null,key_41007));
})())){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526)),value);

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518)),value);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_41007,new cljs.core.Keyword(null,"h-admissions","h-admissions",-1503094844))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"h-admissions","h-admissions",-1503094844)),value);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,(0))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"charlson-comorbidity","charlson-comorbidity",-633596907)),null);
} else {
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_41007,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),value);

predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),value], null));
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(key_41007),(((value == null))?predict_prostate.state.config.get_input_default(predict_prostate.state.config.input_groups,key_41007):value));

}
}
}
}
}
}

return predict_prostate.models.runner.recalculate_model.cljs$core$IFn$_invoke$arity$2(predict_prostate.state.run_time.input_map(),predict_prostate.state.run_time.N);
});})(seq__40501_40975,chunk__40503_40976,count__40504_40977,i__40505_40978,vec__40750_41006,key_41007,change_41008,seq__40501_41000__$1,temp__5735__auto___40999))
);
} else {
}


var G__41040 = cljs.core.next(seq__40501_41000__$1);
var G__41041 = null;
var G__41042 = (0);
var G__41043 = (0);
seq__40501_40975 = G__41040;
chunk__40503_40976 = G__41041;
count__40504_40977 = G__41042;
i__40505_40978 = G__41043;
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

predict_prostate.state.run_time.route_change.pubsub$feeds$TopicFeed$subscribe$arity$2(null,(function (_,p__40798){
var vec__40801 = p__40798;
var page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40801,(0),null);
var param1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40801,(1),null);
var param2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40801,(2),null);
var rvec = vec__40801;
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
var new_lang_41065 = new cljs.core.Keyword(null,"lang","lang",-1819677104).cljs$core$IFn$_invoke$arity$1(predict_prostate.state.localStorage.get_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"en","en",88457073)], null)));
predict_prostate.state.mutations.reload_lang(cljs.core.name(new_lang_41065));

return translations.tongue_base.load_translations_STAR_(url,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(translations.tongue_base.handle_dictionary,predict_prostate.state.run_time.t_state_cursor));
}));

predict_prostate.state.run_time.edit_change.pubsub$feeds$TopicFeed$subscribe$arity$2(null,(function (_,arg){
var text = (function (){var fexpr__40823 = cljs.core.deref(predict_prostate.state.run_time.ttt_cursor);
return (fexpr__40823.cljs$core$IFn$_invoke$arity$1 ? fexpr__40823.cljs$core$IFn$_invoke$arity$1(arg) : fexpr__40823.call(null,arg));
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(predict_prostate.state.run_time.edit_cursor,cljs.core.assoc,new cljs.core.Keyword(null,"edit-arg","edit-arg",1216866257),arg,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"edit-key","edit-key",-1833788727),((((cljs.core.vector_QMARK_(arg)) && ((cljs.core.count(arg) > (0)))))?cljs.core.first(arg):arg),new cljs.core.Keyword(null,"text","text",-1790561697),((((cljs.core.vector_QMARK_(arg)) && ((cljs.core.count(arg) > (1)))))?cljs.core.second(arg):text)], 0));

return $("#editorModal").modal("show");
}));

predict_prostate.state.run_time.new_text_change.pubsub$feeds$TopicFeed$subscribe$arity$2(null,(function (_,p__40834){
var vec__40836 = p__40834;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40836,(0),null);
var new_text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40836,(1),null);
return cljs.core.reset_BANG_(predict_prostate.state.run_time.new_text_cursor,new_text);
}));

predict_prostate.state.run_time.text_change.pubsub$feeds$TopicFeed$subscribe$arity$2(null,(function (_,p__40840){
var vec__40841 = p__40840;
var edit_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40841,(0),null);
var new_text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40841,(1),null);
var lang = new cljs.core.Keyword(null,"lang","lang",-1819677104).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(predict_prostate.state.run_time.t_state_cursor));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(predict_prostate.state.run_time.t_state_cursor,translations.tongue_base.process_dict_op,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"upsert","upsert",1416724984),new cljs.core.Keyword(null,"lang","lang",-1819677104).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(predict_prostate.state.run_time.t_state_cursor)),cljs.core.PersistentArrayMap.createAsIfByAssoc([edit_key,new_text])], null));

cljs.core.reset_BANG_(predict_prostate.state.run_time.new_text_cursor,null);

return translations.tranny_api.upload_translation.cljs$core$IFn$_invoke$arity$3(edit_key,cljs.core.name(lang),new_text);
}));

predict_prostate.state.run_time.add_language_modal.pubsub$feeds$TopicFeed$subscribe$arity$2(null,(function (_){
return $("#newLanguageModal").modal("show");
}));

predict_prostate.state.run_time.add_language.pubsub$feeds$TopicFeed$subscribe$arity$2(null,(function (_,p__40844){
var vec__40845 = p__40844;
var new_lang = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40845,(0),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(new_lang))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(predict_prostate.state.run_time.t_state_cursor,cljs.core.update,new cljs.core.Keyword(null,"languages","languages",1471910331),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(new_lang)], 0));
} else {
return null;
}
}));

return predict_prostate.state.mutations.clear_inputs();
});

//# sourceMappingURL=predict_prostate.state.mutations.js.map
