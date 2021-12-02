goog.provide('predict_prostate.state.mutations');
predict_prostate.state.mutations.paq = window._paq;
/**
 * Send an event to matemo. 
 */
predict_prostate.state.mutations.matomo_track = (function predict_prostate$state$mutations$matomo_track(var_args){
var G__88327 = arguments.length;
switch (G__88327) {
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
var seq__88337_88766 = cljs.core.seq(predict_prostate.state.run_time.input_changes());
var chunk__88340_88767 = null;
var count__88341_88768 = (0);
var i__88342_88769 = (0);
while(true){
if((i__88342_88769 < count__88341_88768)){
var vec__88448_88772 = chunk__88340_88767.cljs$core$IIndexed$_nth$arity$2(null,i__88342_88769);
var key_88773 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88448_88772,(0),null);
var topic_88774 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88448_88772,(1),null);
if(cljs.core.truth_(key_88773)){
if(cljs.core.truth_(topic_88774)){

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_88773,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355))){
var map__88461_88782 = predict_prostate.state.localStorage.get_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),new cljs.core.Keyword(null,"line2","line2",-1975668782)], null));
var map__88461_88783__$1 = (((((!((map__88461_88782 == null))))?(((((map__88461_88782.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__88461_88782.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__88461_88782):map__88461_88782);
var plot_style_88784 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88461_88783__$1,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355));
if(cljs.core.truth_((function (){var fexpr__88466 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"area1","area1",-316994623),null,new cljs.core.Keyword(null,"line2","line2",-1975668782),null], null), null);
return (fexpr__88466.cljs$core$IFn$_invoke$arity$1 ? fexpr__88466.cljs$core$IFn$_invoke$arity$1(plot_style_88784) : fexpr__88466.call(null,plot_style_88784));
})())){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),plot_style_88784);
} else {
predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),new cljs.core.Keyword(null,"line2","line2",-1975668782)], null));

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),new cljs.core.Keyword(null,"line2","line2",-1975668782));
}
} else {
pubsub.feeds.publish(topic_88774,(cljs.core.truth_((function (){var fexpr__88471 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"age","age",-604307804),null,new cljs.core.Keyword(null,"psa","psa",-321761459),null], null), null);
return (fexpr__88471.cljs$core$IFn$_invoke$arity$1 ? fexpr__88471.cljs$core$IFn$_invoke$arity$1(key_88773) : fexpr__88471.call(null,key_88773));
})())?"":null));

}


var G__88790 = seq__88337_88766;
var G__88791 = chunk__88340_88767;
var G__88792 = count__88341_88768;
var G__88793 = (i__88342_88769 + (1));
seq__88337_88766 = G__88790;
chunk__88340_88767 = G__88791;
count__88341_88768 = G__88792;
i__88342_88769 = G__88793;
continue;
} else {
var G__88796 = seq__88337_88766;
var G__88797 = chunk__88340_88767;
var G__88798 = count__88341_88768;
var G__88799 = (i__88342_88769 + (1));
seq__88337_88766 = G__88796;
chunk__88340_88767 = G__88797;
count__88341_88768 = G__88798;
i__88342_88769 = G__88799;
continue;
}
} else {
var G__88800 = seq__88337_88766;
var G__88801 = chunk__88340_88767;
var G__88802 = count__88341_88768;
var G__88803 = (i__88342_88769 + (1));
seq__88337_88766 = G__88800;
chunk__88340_88767 = G__88801;
count__88341_88768 = G__88802;
i__88342_88769 = G__88803;
continue;
}
} else {
var temp__5735__auto___88805 = cljs.core.seq(seq__88337_88766);
if(temp__5735__auto___88805){
var seq__88337_88806__$1 = temp__5735__auto___88805;
if(cljs.core.chunked_seq_QMARK_(seq__88337_88806__$1)){
var c__4556__auto___88807 = cljs.core.chunk_first(seq__88337_88806__$1);
var G__88808 = cljs.core.chunk_rest(seq__88337_88806__$1);
var G__88809 = c__4556__auto___88807;
var G__88810 = cljs.core.count(c__4556__auto___88807);
var G__88811 = (0);
seq__88337_88766 = G__88808;
chunk__88340_88767 = G__88809;
count__88341_88768 = G__88810;
i__88342_88769 = G__88811;
continue;
} else {
var vec__88486_88812 = cljs.core.first(seq__88337_88806__$1);
var key_88813 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88486_88812,(0),null);
var topic_88814 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88486_88812,(1),null);
if(cljs.core.truth_(key_88813)){
if(cljs.core.truth_(topic_88814)){

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_88813,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355))){
var map__88489_88815 = predict_prostate.state.localStorage.get_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),new cljs.core.Keyword(null,"line2","line2",-1975668782)], null));
var map__88489_88816__$1 = (((((!((map__88489_88815 == null))))?(((((map__88489_88815.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__88489_88815.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__88489_88815):map__88489_88815);
var plot_style_88817 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88489_88816__$1,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355));
if(cljs.core.truth_((function (){var fexpr__88493 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"area1","area1",-316994623),null,new cljs.core.Keyword(null,"line2","line2",-1975668782),null], null), null);
return (fexpr__88493.cljs$core$IFn$_invoke$arity$1 ? fexpr__88493.cljs$core$IFn$_invoke$arity$1(plot_style_88817) : fexpr__88493.call(null,plot_style_88817));
})())){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),plot_style_88817);
} else {
predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),new cljs.core.Keyword(null,"line2","line2",-1975668782)], null));

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),new cljs.core.Keyword(null,"line2","line2",-1975668782));
}
} else {
pubsub.feeds.publish(topic_88814,(cljs.core.truth_((function (){var fexpr__88496 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"age","age",-604307804),null,new cljs.core.Keyword(null,"psa","psa",-321761459),null], null), null);
return (fexpr__88496.cljs$core$IFn$_invoke$arity$1 ? fexpr__88496.cljs$core$IFn$_invoke$arity$1(key_88813) : fexpr__88496.call(null,key_88813));
})())?"":null));

}


var G__88820 = cljs.core.next(seq__88337_88806__$1);
var G__88821 = null;
var G__88822 = (0);
var G__88823 = (0);
seq__88337_88766 = G__88820;
chunk__88340_88767 = G__88821;
count__88341_88768 = G__88822;
i__88342_88769 = G__88823;
continue;
} else {
var G__88825 = cljs.core.next(seq__88337_88806__$1);
var G__88826 = null;
var G__88827 = (0);
var G__88828 = (0);
seq__88337_88766 = G__88825;
chunk__88340_88767 = G__88826;
count__88341_88768 = G__88827;
i__88342_88769 = G__88828;
continue;
}
} else {
var G__88829 = cljs.core.next(seq__88337_88806__$1);
var G__88830 = null;
var G__88831 = (0);
var G__88832 = (0);
seq__88337_88766 = G__88829;
chunk__88340_88767 = G__88830;
count__88341_88768 = G__88831;
i__88342_88769 = G__88832;
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
var len__4736__auto___88838 = arguments.length;
var i__4737__auto___88842 = (0);
while(true){
if((i__4737__auto___88842 < len__4736__auto___88838)){
args__4742__auto__.push((arguments[i__4737__auto___88842]));

var G__88843 = (i__4737__auto___88842 + (1));
i__4737__auto___88842 = G__88843;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return predict_prostate.state.mutations.subscribe_to.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(predict_prostate.state.mutations.subscribe_to.cljs$core$IFn$_invoke$arity$variadic = (function (change,cursor,p__88546){
var vec__88548 = p__88546;
var silent = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88548,(0),null);
return pubsub.feeds.subscribe(change,(function (p1__88522_SHARP_,p2__88524_SHARP_){
if(cljs.core.truth_(silent)){
} else {
predict_prostate.state.mutations.log(p1__88522_SHARP_,cljs.core.deref(cursor),p2__88524_SHARP_);
}

return cljs.core.reset_BANG_(cursor,p2__88524_SHARP_);
}));
}));

(predict_prostate.state.mutations.subscribe_to.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(predict_prostate.state.mutations.subscribe_to.cljs$lang$applyTo = (function (seq88527){
var G__88530 = cljs.core.first(seq88527);
var seq88527__$1 = cljs.core.next(seq88527);
var G__88531 = cljs.core.first(seq88527__$1);
var seq88527__$2 = cljs.core.next(seq88527__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__88530,G__88531,seq88527__$2);
}));

predict_prostate.state.mutations.clip = (function predict_prostate$state$mutations$clip(p__88574){
var map__88575 = p__88574;
var map__88575__$1 = (((((!((map__88575 == null))))?(((((map__88575.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__88575.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__88575):map__88575);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88575__$1,new cljs.core.Keyword(null,"value","value",305978217));
var min = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88575__$1,new cljs.core.Keyword(null,"min","min",444991522));
var max = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88575__$1,new cljs.core.Keyword(null,"max","max",61366548));
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
var seq__88598_88844 = cljs.core.seq(predict_prostate.state.run_time.input_changes());
var chunk__88599_88845 = null;
var count__88600_88846 = (0);
var i__88601_88847 = (0);
while(true){
if((i__88601_88847 < count__88600_88846)){
var vec__88644_88848 = chunk__88599_88845.cljs$core$IIndexed$_nth$arity$2(null,i__88601_88847);
var key_88849 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88644_88848,(0),null);
var change_88850 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88644_88848,(1),null);
if(cljs.core.truth_(change_88850)){
pubsub.feeds.subscribe(change_88850,((function (seq__88598_88844,chunk__88599_88845,count__88600_88846,i__88601_88847,vec__88644_88848,key_88849,change_88850){
return (function (topic,value){
predict_prostate.state.mutations.log(topic,cljs.core.deref(predict_prostate.state.run_time.input_cursor(key_88849)),value);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666),key_88849)){
var vec__88652_88851 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(value,":");
var value_88852__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88652_88851,(0),null);
var bad_88853 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88652_88851,(1),null);
var bci_88854 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520))));
var bct_88855 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666))));
if(cljs.core.truth_(isNaN(bci_88854))){
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520)),predict_prostate.state.mutations.num_to_str((function (){var x__4214__auto__ = (1);
var y__4215__auto__ = (function (){var x__4217__auto__ = bci_88854;
var y__4218__auto__ = predict_prostate.state.mutations.str_to_num(value_88852__$1);
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})();
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})()));
}

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_88852__$1),(cljs.core.truth_(bad_88853)?":":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(bad_88853)].join(''));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520),key_88849)){
var vec__88655_88856 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(value,":");
var value_88857__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88655_88856,(0),null);
var bad_88858 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88655_88856,(1),null);
var bci_88859 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520))));
var bct_88860 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666))));
if(cljs.core.not(isNaN(bct_88860))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_88857__$1),(cljs.core.truth_((function (){var or__4126__auto__ = (value_88857__$1 < (0));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return bad_88858;
}
})())?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_88857__$1)].join(''):"")].join(''));
} else {
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_88849,new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969)),value);

predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969),value], null));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,new cljs.core.Keyword(null,"gleason","gleason",-2044470526))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526)),cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518))));
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518)),cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526))));
}
} else {
if(cljs.core.truth_((function (){var fexpr__88666 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gleason","gleason",-2044470526),null,new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518),null], null), null);
return (fexpr__88666.cljs$core$IFn$_invoke$arity$1 ? fexpr__88666.cljs$core$IFn$_invoke$arity$1(key_88849) : fexpr__88666.call(null,key_88849));
})())){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526)),value);

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518)),value);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_88849,new cljs.core.Keyword(null,"h-admissions","h-admissions",-1503094844))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"h-admissions","h-admissions",-1503094844)),value);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,(0))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"charlson-comorbidity","charlson-comorbidity",-633596907)),null);
} else {
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_88849,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),value);

predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),value], null));
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(key_88849),(((value == null))?predict_prostate.state.config.get_input_default(predict_prostate.state.config.input_groups,key_88849):value));

}
}
}
}
}
}

return predict_prostate.models.runner.recalculate_model.cljs$core$IFn$_invoke$arity$2(predict_prostate.state.run_time.input_map(),predict_prostate.state.run_time.N);
});})(seq__88598_88844,chunk__88599_88845,count__88600_88846,i__88601_88847,vec__88644_88848,key_88849,change_88850))
);
} else {
}


var G__88861 = seq__88598_88844;
var G__88862 = chunk__88599_88845;
var G__88863 = count__88600_88846;
var G__88864 = (i__88601_88847 + (1));
seq__88598_88844 = G__88861;
chunk__88599_88845 = G__88862;
count__88600_88846 = G__88863;
i__88601_88847 = G__88864;
continue;
} else {
var temp__5735__auto___88865 = cljs.core.seq(seq__88598_88844);
if(temp__5735__auto___88865){
var seq__88598_88866__$1 = temp__5735__auto___88865;
if(cljs.core.chunked_seq_QMARK_(seq__88598_88866__$1)){
var c__4556__auto___88867 = cljs.core.chunk_first(seq__88598_88866__$1);
var G__88868 = cljs.core.chunk_rest(seq__88598_88866__$1);
var G__88869 = c__4556__auto___88867;
var G__88870 = cljs.core.count(c__4556__auto___88867);
var G__88871 = (0);
seq__88598_88844 = G__88868;
chunk__88599_88845 = G__88869;
count__88600_88846 = G__88870;
i__88601_88847 = G__88871;
continue;
} else {
var vec__88677_88872 = cljs.core.first(seq__88598_88866__$1);
var key_88873 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88677_88872,(0),null);
var change_88874 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88677_88872,(1),null);
if(cljs.core.truth_(change_88874)){
pubsub.feeds.subscribe(change_88874,((function (seq__88598_88844,chunk__88599_88845,count__88600_88846,i__88601_88847,vec__88677_88872,key_88873,change_88874,seq__88598_88866__$1,temp__5735__auto___88865){
return (function (topic,value){
predict_prostate.state.mutations.log(topic,cljs.core.deref(predict_prostate.state.run_time.input_cursor(key_88873)),value);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666),key_88873)){
var vec__88681_88875 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(value,":");
var value_88876__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88681_88875,(0),null);
var bad_88877 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88681_88875,(1),null);
var bci_88878 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520))));
var bct_88879 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666))));
if(cljs.core.truth_(isNaN(bci_88878))){
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520)),predict_prostate.state.mutations.num_to_str((function (){var x__4214__auto__ = (1);
var y__4215__auto__ = (function (){var x__4217__auto__ = bci_88878;
var y__4218__auto__ = predict_prostate.state.mutations.str_to_num(value_88876__$1);
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})();
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})()));
}

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_88876__$1),(cljs.core.truth_(bad_88877)?":":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(bad_88877)].join(''));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520),key_88873)){
var vec__88687_88880 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(value,":");
var value_88881__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88687_88880,(0),null);
var bad_88882 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88687_88880,(1),null);
var bci_88883 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520))));
var bct_88884 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666))));
if(cljs.core.not(isNaN(bct_88884))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_88881__$1),(cljs.core.truth_((function (){var or__4126__auto__ = (value_88881__$1 < (0));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return bad_88882;
}
})())?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_88881__$1)].join(''):"")].join(''));
} else {
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_88873,new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969)),value);

predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969),value], null));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,new cljs.core.Keyword(null,"gleason","gleason",-2044470526))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526)),cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518))));
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518)),cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526))));
}
} else {
if(cljs.core.truth_((function (){var fexpr__88692 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gleason","gleason",-2044470526),null,new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518),null], null), null);
return (fexpr__88692.cljs$core$IFn$_invoke$arity$1 ? fexpr__88692.cljs$core$IFn$_invoke$arity$1(key_88873) : fexpr__88692.call(null,key_88873));
})())){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526)),value);

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518)),value);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_88873,new cljs.core.Keyword(null,"h-admissions","h-admissions",-1503094844))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"h-admissions","h-admissions",-1503094844)),value);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,(0))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"charlson-comorbidity","charlson-comorbidity",-633596907)),null);
} else {
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_88873,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),value);

predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),value], null));
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(key_88873),(((value == null))?predict_prostate.state.config.get_input_default(predict_prostate.state.config.input_groups,key_88873):value));

}
}
}
}
}
}

return predict_prostate.models.runner.recalculate_model.cljs$core$IFn$_invoke$arity$2(predict_prostate.state.run_time.input_map(),predict_prostate.state.run_time.N);
});})(seq__88598_88844,chunk__88599_88845,count__88600_88846,i__88601_88847,vec__88677_88872,key_88873,change_88874,seq__88598_88866__$1,temp__5735__auto___88865))
);
} else {
}


var G__88887 = cljs.core.next(seq__88598_88866__$1);
var G__88888 = null;
var G__88889 = (0);
var G__88890 = (0);
seq__88598_88844 = G__88887;
chunk__88599_88845 = G__88888;
count__88600_88846 = G__88889;
i__88601_88847 = G__88890;
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

predict_prostate.state.run_time.route_change.pubsub$feeds$TopicFeed$subscribe$arity$2(null,(function (_,p__88696){
var vec__88697 = p__88696;
var page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88697,(0),null);
var param1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88697,(1),null);
var param2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88697,(2),null);
var rvec = vec__88697;
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
var new_lang_88891 = new cljs.core.Keyword(null,"lang","lang",-1819677104).cljs$core$IFn$_invoke$arity$1(predict_prostate.state.localStorage.get_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"en","en",88457073)], null)));
predict_prostate.state.mutations.reload_lang(cljs.core.name(new_lang_88891));

return translations.tongue_base.load_translations_STAR_(url,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(translations.tongue_base.handle_dictionary,predict_prostate.state.run_time.t_state_cursor));
}));

predict_prostate.state.run_time.edit_change.pubsub$feeds$TopicFeed$subscribe$arity$2(null,(function (_,arg){
var text = (function (){var fexpr__88701 = cljs.core.deref(predict_prostate.state.run_time.ttt_cursor);
return (fexpr__88701.cljs$core$IFn$_invoke$arity$1 ? fexpr__88701.cljs$core$IFn$_invoke$arity$1(arg) : fexpr__88701.call(null,arg));
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(predict_prostate.state.run_time.edit_cursor,cljs.core.assoc,new cljs.core.Keyword(null,"edit-arg","edit-arg",1216866257),arg,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"edit-key","edit-key",-1833788727),((((cljs.core.vector_QMARK_(arg)) && ((cljs.core.count(arg) > (0)))))?cljs.core.first(arg):arg),new cljs.core.Keyword(null,"text","text",-1790561697),((((cljs.core.vector_QMARK_(arg)) && ((cljs.core.count(arg) > (1)))))?cljs.core.second(arg):text)], 0));

return $("#editorModal").modal("show");
}));

predict_prostate.state.run_time.new_text_change.pubsub$feeds$TopicFeed$subscribe$arity$2(null,(function (_,p__88702){
var vec__88703 = p__88702;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88703,(0),null);
var new_text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88703,(1),null);
return cljs.core.reset_BANG_(predict_prostate.state.run_time.new_text_cursor,new_text);
}));

predict_prostate.state.run_time.text_change.pubsub$feeds$TopicFeed$subscribe$arity$2(null,(function (_,p__88711){
var vec__88712 = p__88711;
var edit_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88712,(0),null);
var new_text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88712,(1),null);
var lang = new cljs.core.Keyword(null,"lang","lang",-1819677104).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(predict_prostate.state.run_time.t_state_cursor));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(predict_prostate.state.run_time.t_state_cursor,translations.tongue_base.process_dict_op,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"upsert","upsert",1416724984),new cljs.core.Keyword(null,"lang","lang",-1819677104).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(predict_prostate.state.run_time.t_state_cursor)),cljs.core.PersistentArrayMap.createAsIfByAssoc([edit_key,new_text])], null));

cljs.core.reset_BANG_(predict_prostate.state.run_time.new_text_cursor,null);

return translations.tranny_api.upload_translation.cljs$core$IFn$_invoke$arity$3(edit_key,cljs.core.name(lang),new_text);
}));

predict_prostate.state.run_time.add_language_modal.pubsub$feeds$TopicFeed$subscribe$arity$2(null,(function (_){
return $("#newLanguageModal").modal("show");
}));

predict_prostate.state.run_time.add_language.pubsub$feeds$TopicFeed$subscribe$arity$2(null,(function (_,p__88719){
var vec__88720 = p__88719;
var new_lang = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88720,(0),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(new_lang))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(predict_prostate.state.run_time.t_state_cursor,cljs.core.update,new cljs.core.Keyword(null,"languages","languages",1471910331),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(new_lang)], 0));
} else {
return null;
}
}));

return predict_prostate.state.mutations.clear_inputs();
});

//# sourceMappingURL=predict_prostate.state.mutations.js.map
