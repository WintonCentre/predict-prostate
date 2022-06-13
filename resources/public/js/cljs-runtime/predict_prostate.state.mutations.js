goog.provide('predict_prostate.state.mutations');
predict_prostate.state.mutations.paq = window._paq;
/**
 * Send an event to matemo. 
 */
predict_prostate.state.mutations.matomo_track = (function predict_prostate$state$mutations$matomo_track(var_args){
var G__33504 = arguments.length;
switch (G__33504) {
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
var seq__33507_33747 = cljs.core.seq(predict_prostate.state.run_time.input_changes());
var chunk__33510_33748 = null;
var count__33511_33749 = (0);
var i__33512_33750 = (0);
while(true){
if((i__33512_33750 < count__33511_33749)){
var vec__33527_33751 = chunk__33510_33748.cljs$core$IIndexed$_nth$arity$2(null,i__33512_33750);
var key_33752 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33527_33751,(0),null);
var topic_33753 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33527_33751,(1),null);
if(cljs.core.truth_(key_33752)){
if(cljs.core.truth_(topic_33753)){

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_33752,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355))){
var map__33530_33754 = predict_prostate.state.localStorage.get_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),new cljs.core.Keyword(null,"line2","line2",-1975668782)], null));
var map__33530_33755__$1 = cljs.core.__destructure_map(map__33530_33754);
var plot_style_33756 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33530_33755__$1,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355));
if(cljs.core.truth_((function (){var fexpr__33531 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"area1","area1",-316994623),null,new cljs.core.Keyword(null,"line2","line2",-1975668782),null], null), null);
return (fexpr__33531.cljs$core$IFn$_invoke$arity$1 ? fexpr__33531.cljs$core$IFn$_invoke$arity$1(plot_style_33756) : fexpr__33531.call(null,plot_style_33756));
})())){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),plot_style_33756);
} else {
predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),new cljs.core.Keyword(null,"line2","line2",-1975668782)], null));

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),new cljs.core.Keyword(null,"line2","line2",-1975668782));
}
} else {
pubsub.feeds.publish(topic_33753,(cljs.core.truth_((function (){var fexpr__33532 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"age","age",-604307804),null,new cljs.core.Keyword(null,"psa","psa",-321761459),null], null), null);
return (fexpr__33532.cljs$core$IFn$_invoke$arity$1 ? fexpr__33532.cljs$core$IFn$_invoke$arity$1(key_33752) : fexpr__33532.call(null,key_33752));
})())?"":null));

}


var G__33762 = seq__33507_33747;
var G__33763 = chunk__33510_33748;
var G__33764 = count__33511_33749;
var G__33765 = (i__33512_33750 + (1));
seq__33507_33747 = G__33762;
chunk__33510_33748 = G__33763;
count__33511_33749 = G__33764;
i__33512_33750 = G__33765;
continue;
} else {
var G__33767 = seq__33507_33747;
var G__33768 = chunk__33510_33748;
var G__33769 = count__33511_33749;
var G__33770 = (i__33512_33750 + (1));
seq__33507_33747 = G__33767;
chunk__33510_33748 = G__33768;
count__33511_33749 = G__33769;
i__33512_33750 = G__33770;
continue;
}
} else {
var G__33771 = seq__33507_33747;
var G__33772 = chunk__33510_33748;
var G__33773 = count__33511_33749;
var G__33774 = (i__33512_33750 + (1));
seq__33507_33747 = G__33771;
chunk__33510_33748 = G__33772;
count__33511_33749 = G__33773;
i__33512_33750 = G__33774;
continue;
}
} else {
var temp__5753__auto___33775 = cljs.core.seq(seq__33507_33747);
if(temp__5753__auto___33775){
var seq__33507_33777__$1 = temp__5753__auto___33775;
if(cljs.core.chunked_seq_QMARK_(seq__33507_33777__$1)){
var c__4638__auto___33778 = cljs.core.chunk_first(seq__33507_33777__$1);
var G__33779 = cljs.core.chunk_rest(seq__33507_33777__$1);
var G__33780 = c__4638__auto___33778;
var G__33781 = cljs.core.count(c__4638__auto___33778);
var G__33782 = (0);
seq__33507_33747 = G__33779;
chunk__33510_33748 = G__33780;
count__33511_33749 = G__33781;
i__33512_33750 = G__33782;
continue;
} else {
var vec__33533_33784 = cljs.core.first(seq__33507_33777__$1);
var key_33785 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33533_33784,(0),null);
var topic_33786 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33533_33784,(1),null);
if(cljs.core.truth_(key_33785)){
if(cljs.core.truth_(topic_33786)){

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_33785,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355))){
var map__33536_33788 = predict_prostate.state.localStorage.get_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),new cljs.core.Keyword(null,"line2","line2",-1975668782)], null));
var map__33536_33789__$1 = cljs.core.__destructure_map(map__33536_33788);
var plot_style_33790 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33536_33789__$1,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355));
if(cljs.core.truth_((function (){var fexpr__33537 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"area1","area1",-316994623),null,new cljs.core.Keyword(null,"line2","line2",-1975668782),null], null), null);
return (fexpr__33537.cljs$core$IFn$_invoke$arity$1 ? fexpr__33537.cljs$core$IFn$_invoke$arity$1(plot_style_33790) : fexpr__33537.call(null,plot_style_33790));
})())){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),plot_style_33790);
} else {
predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),new cljs.core.Keyword(null,"line2","line2",-1975668782)], null));

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),new cljs.core.Keyword(null,"line2","line2",-1975668782));
}
} else {
pubsub.feeds.publish(topic_33786,(cljs.core.truth_((function (){var fexpr__33538 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"age","age",-604307804),null,new cljs.core.Keyword(null,"psa","psa",-321761459),null], null), null);
return (fexpr__33538.cljs$core$IFn$_invoke$arity$1 ? fexpr__33538.cljs$core$IFn$_invoke$arity$1(key_33785) : fexpr__33538.call(null,key_33785));
})())?"":null));

}


var G__33799 = cljs.core.next(seq__33507_33777__$1);
var G__33800 = null;
var G__33801 = (0);
var G__33802 = (0);
seq__33507_33747 = G__33799;
chunk__33510_33748 = G__33800;
count__33511_33749 = G__33801;
i__33512_33750 = G__33802;
continue;
} else {
var G__33803 = cljs.core.next(seq__33507_33777__$1);
var G__33804 = null;
var G__33805 = (0);
var G__33806 = (0);
seq__33507_33747 = G__33803;
chunk__33510_33748 = G__33804;
count__33511_33749 = G__33805;
i__33512_33750 = G__33806;
continue;
}
} else {
var G__33807 = cljs.core.next(seq__33507_33777__$1);
var G__33808 = null;
var G__33809 = (0);
var G__33810 = (0);
seq__33507_33747 = G__33807;
chunk__33510_33748 = G__33808;
count__33511_33749 = G__33809;
i__33512_33750 = G__33810;
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
var len__4818__auto___33814 = arguments.length;
var i__4819__auto___33815 = (0);
while(true){
if((i__4819__auto___33815 < len__4818__auto___33814)){
args__4824__auto__.push((arguments[i__4819__auto___33815]));

var G__33817 = (i__4819__auto___33815 + (1));
i__4819__auto___33815 = G__33817;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return predict_prostate.state.mutations.subscribe_to.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(predict_prostate.state.mutations.subscribe_to.cljs$core$IFn$_invoke$arity$variadic = (function (change,cursor,p__33548){
var vec__33549 = p__33548;
var silent = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33549,(0),null);
return pubsub.feeds.subscribe(change,(function (p1__33539_SHARP_,p2__33540_SHARP_){
if(cljs.core.truth_(silent)){
} else {
predict_prostate.state.mutations.log(p1__33539_SHARP_,cljs.core.deref(cursor),p2__33540_SHARP_);
}

return cljs.core.reset_BANG_(cursor,p2__33540_SHARP_);
}));
}));

(predict_prostate.state.mutations.subscribe_to.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(predict_prostate.state.mutations.subscribe_to.cljs$lang$applyTo = (function (seq33541){
var G__33542 = cljs.core.first(seq33541);
var seq33541__$1 = cljs.core.next(seq33541);
var G__33543 = cljs.core.first(seq33541__$1);
var seq33541__$2 = cljs.core.next(seq33541__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33542,G__33543,seq33541__$2);
}));

predict_prostate.state.mutations.clip = (function predict_prostate$state$mutations$clip(p__33558){
var map__33560 = p__33558;
var map__33560__$1 = cljs.core.__destructure_map(map__33560);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33560__$1,new cljs.core.Keyword(null,"value","value",305978217));
var min = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33560__$1,new cljs.core.Keyword(null,"min","min",444991522));
var max = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33560__$1,new cljs.core.Keyword(null,"max","max",61366548));
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
var seq__33568_33830 = cljs.core.seq(predict_prostate.state.run_time.input_changes());
var chunk__33569_33831 = null;
var count__33570_33832 = (0);
var i__33571_33833 = (0);
while(true){
if((i__33571_33833 < count__33570_33832)){
var vec__33629_33834 = chunk__33569_33831.cljs$core$IIndexed$_nth$arity$2(null,i__33571_33833);
var key_33835 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33629_33834,(0),null);
var change_33836 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33629_33834,(1),null);
if(cljs.core.truth_(change_33836)){
pubsub.feeds.subscribe(change_33836,((function (seq__33568_33830,chunk__33569_33831,count__33570_33832,i__33571_33833,vec__33629_33834,key_33835,change_33836){
return (function (topic,value){
predict_prostate.state.mutations.log(topic,cljs.core.deref(predict_prostate.state.run_time.input_cursor(key_33835)),value);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666),key_33835)){
var vec__33634_33839 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(value,":");
var value_33840__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33634_33839,(0),null);
var bad_33841 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33634_33839,(1),null);
var bci_33842 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520))));
var bct_33843 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666))));
if(cljs.core.truth_(isNaN(bci_33842))){
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520)),predict_prostate.state.mutations.num_to_str((function (){var x__4295__auto__ = (1);
var y__4296__auto__ = (function (){var x__4298__auto__ = bci_33842;
var y__4299__auto__ = predict_prostate.state.mutations.str_to_num(value_33840__$1);
return ((x__4298__auto__ < y__4299__auto__) ? x__4298__auto__ : y__4299__auto__);
})();
return ((x__4295__auto__ > y__4296__auto__) ? x__4295__auto__ : y__4296__auto__);
})()));
}

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_33840__$1),(cljs.core.truth_(bad_33841)?":":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(bad_33841)].join(''));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520),key_33835)){
var vec__33639_33852 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(value,":");
var value_33853__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33639_33852,(0),null);
var bad_33854 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33639_33852,(1),null);
var bci_33855 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520))));
var bct_33856 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666))));
if(cljs.core.not(isNaN(bct_33856))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_33853__$1),(cljs.core.truth_((function (){var or__4212__auto__ = (value_33853__$1 < (0));
if(or__4212__auto__){
return or__4212__auto__;
} else {
return bad_33854;
}
})())?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_33853__$1)].join(''):"")].join(''));
} else {
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_33835,new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969)),value);

predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969),value], null));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,new cljs.core.Keyword(null,"gleason","gleason",-2044470526))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526)),cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518))));
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518)),cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526))));
}
} else {
if(cljs.core.truth_((function (){var fexpr__33644 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gleason","gleason",-2044470526),null,new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518),null], null), null);
return (fexpr__33644.cljs$core$IFn$_invoke$arity$1 ? fexpr__33644.cljs$core$IFn$_invoke$arity$1(key_33835) : fexpr__33644.call(null,key_33835));
})())){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526)),value);

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518)),value);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_33835,new cljs.core.Keyword(null,"h-admissions","h-admissions",-1503094844))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"h-admissions","h-admissions",-1503094844)),value);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,(0))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"charlson-comorbidity","charlson-comorbidity",-633596907)),null);
} else {
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_33835,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),value);

predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),value], null));
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(key_33835),(((value == null))?predict_prostate.state.config.get_input_default(predict_prostate.state.config.input_groups,key_33835):value));

}
}
}
}
}
}

return predict_prostate.models.runner.recalculate_model.cljs$core$IFn$_invoke$arity$2(predict_prostate.state.run_time.input_map(),predict_prostate.state.run_time.N);
});})(seq__33568_33830,chunk__33569_33831,count__33570_33832,i__33571_33833,vec__33629_33834,key_33835,change_33836))
);
} else {
}


var G__33862 = seq__33568_33830;
var G__33863 = chunk__33569_33831;
var G__33864 = count__33570_33832;
var G__33865 = (i__33571_33833 + (1));
seq__33568_33830 = G__33862;
chunk__33569_33831 = G__33863;
count__33570_33832 = G__33864;
i__33571_33833 = G__33865;
continue;
} else {
var temp__5753__auto___33867 = cljs.core.seq(seq__33568_33830);
if(temp__5753__auto___33867){
var seq__33568_33869__$1 = temp__5753__auto___33867;
if(cljs.core.chunked_seq_QMARK_(seq__33568_33869__$1)){
var c__4638__auto___33872 = cljs.core.chunk_first(seq__33568_33869__$1);
var G__33874 = cljs.core.chunk_rest(seq__33568_33869__$1);
var G__33875 = c__4638__auto___33872;
var G__33876 = cljs.core.count(c__4638__auto___33872);
var G__33877 = (0);
seq__33568_33830 = G__33874;
chunk__33569_33831 = G__33875;
count__33570_33832 = G__33876;
i__33571_33833 = G__33877;
continue;
} else {
var vec__33651_33881 = cljs.core.first(seq__33568_33869__$1);
var key_33882 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33651_33881,(0),null);
var change_33883 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33651_33881,(1),null);
if(cljs.core.truth_(change_33883)){
pubsub.feeds.subscribe(change_33883,((function (seq__33568_33830,chunk__33569_33831,count__33570_33832,i__33571_33833,vec__33651_33881,key_33882,change_33883,seq__33568_33869__$1,temp__5753__auto___33867){
return (function (topic,value){
predict_prostate.state.mutations.log(topic,cljs.core.deref(predict_prostate.state.run_time.input_cursor(key_33882)),value);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666),key_33882)){
var vec__33658_33896 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(value,":");
var value_33897__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33658_33896,(0),null);
var bad_33898 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33658_33896,(1),null);
var bci_33899 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520))));
var bct_33900 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666))));
if(cljs.core.truth_(isNaN(bci_33899))){
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520)),predict_prostate.state.mutations.num_to_str((function (){var x__4295__auto__ = (1);
var y__4296__auto__ = (function (){var x__4298__auto__ = bci_33899;
var y__4299__auto__ = predict_prostate.state.mutations.str_to_num(value_33897__$1);
return ((x__4298__auto__ < y__4299__auto__) ? x__4298__auto__ : y__4299__auto__);
})();
return ((x__4295__auto__ > y__4296__auto__) ? x__4295__auto__ : y__4296__auto__);
})()));
}

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_33897__$1),(cljs.core.truth_(bad_33898)?":":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(bad_33898)].join(''));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520),key_33882)){
var vec__33666_33918 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(value,":");
var value_33919__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33666_33918,(0),null);
var bad_33920 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33666_33918,(1),null);
var bci_33921 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520))));
var bct_33922 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666))));
if(cljs.core.not(isNaN(bct_33922))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_33919__$1),(cljs.core.truth_((function (){var or__4212__auto__ = (value_33919__$1 < (0));
if(or__4212__auto__){
return or__4212__auto__;
} else {
return bad_33920;
}
})())?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_33919__$1)].join(''):"")].join(''));
} else {
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_33882,new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969)),value);

predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969),value], null));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,new cljs.core.Keyword(null,"gleason","gleason",-2044470526))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526)),cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518))));
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518)),cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526))));
}
} else {
if(cljs.core.truth_((function (){var fexpr__33677 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gleason","gleason",-2044470526),null,new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518),null], null), null);
return (fexpr__33677.cljs$core$IFn$_invoke$arity$1 ? fexpr__33677.cljs$core$IFn$_invoke$arity$1(key_33882) : fexpr__33677.call(null,key_33882));
})())){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526)),value);

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518)),value);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_33882,new cljs.core.Keyword(null,"h-admissions","h-admissions",-1503094844))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"h-admissions","h-admissions",-1503094844)),value);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,(0))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"charlson-comorbidity","charlson-comorbidity",-633596907)),null);
} else {
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_33882,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),value);

predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),value], null));
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(key_33882),(((value == null))?predict_prostate.state.config.get_input_default(predict_prostate.state.config.input_groups,key_33882):value));

}
}
}
}
}
}

return predict_prostate.models.runner.recalculate_model.cljs$core$IFn$_invoke$arity$2(predict_prostate.state.run_time.input_map(),predict_prostate.state.run_time.N);
});})(seq__33568_33830,chunk__33569_33831,count__33570_33832,i__33571_33833,vec__33651_33881,key_33882,change_33883,seq__33568_33869__$1,temp__5753__auto___33867))
);
} else {
}


var G__33939 = cljs.core.next(seq__33568_33869__$1);
var G__33940 = null;
var G__33941 = (0);
var G__33942 = (0);
seq__33568_33830 = G__33939;
chunk__33569_33831 = G__33940;
count__33570_33832 = G__33941;
i__33571_33833 = G__33942;
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

predict_prostate.state.run_time.route_change.pubsub$feeds$TopicFeed$subscribe$arity$2(null,(function (_,p__33681){
var vec__33682 = p__33681;
var page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33682,(0),null);
var param1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33682,(1),null);
var param2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33682,(2),null);
var rvec = vec__33682;
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
var new_lang_33946 = new cljs.core.Keyword(null,"lang","lang",-1819677104).cljs$core$IFn$_invoke$arity$1(predict_prostate.state.localStorage.get_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"en","en",88457073)], null)));
predict_prostate.state.mutations.reload_lang(cljs.core.name(new_lang_33946));

return translations.tongue_base.load_translations_STAR_(url,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(translations.tongue_base.handle_dictionary,predict_prostate.state.run_time.t_state_cursor));
}));

predict_prostate.state.run_time.edit_change.pubsub$feeds$TopicFeed$subscribe$arity$2(null,(function (_,arg){
var text = (function (){var fexpr__33685 = cljs.core.deref(predict_prostate.state.run_time.ttt_cursor);
return (fexpr__33685.cljs$core$IFn$_invoke$arity$1 ? fexpr__33685.cljs$core$IFn$_invoke$arity$1(arg) : fexpr__33685.call(null,arg));
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(predict_prostate.state.run_time.edit_cursor,cljs.core.assoc,new cljs.core.Keyword(null,"edit-arg","edit-arg",1216866257),arg,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"edit-key","edit-key",-1833788727),((((cljs.core.vector_QMARK_(arg)) && ((cljs.core.count(arg) > (0)))))?cljs.core.first(arg):arg),new cljs.core.Keyword(null,"text","text",-1790561697),((((cljs.core.vector_QMARK_(arg)) && ((cljs.core.count(arg) > (1)))))?cljs.core.second(arg):text)], 0));

return $("#editorModal").modal("show");
}));

predict_prostate.state.run_time.new_text_change.pubsub$feeds$TopicFeed$subscribe$arity$2(null,(function (_,p__33700){
var vec__33701 = p__33700;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33701,(0),null);
var new_text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33701,(1),null);
return cljs.core.reset_BANG_(predict_prostate.state.run_time.new_text_cursor,new_text);
}));

predict_prostate.state.run_time.text_change.pubsub$feeds$TopicFeed$subscribe$arity$2(null,(function (_,p__33711){
var vec__33712 = p__33711;
var edit_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33712,(0),null);
var new_text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33712,(1),null);
var lang = new cljs.core.Keyword(null,"lang","lang",-1819677104).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(predict_prostate.state.run_time.t_state_cursor));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(predict_prostate.state.run_time.t_state_cursor,translations.tongue_base.process_dict_op,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"upsert","upsert",1416724984),new cljs.core.Keyword(null,"lang","lang",-1819677104).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(predict_prostate.state.run_time.t_state_cursor)),cljs.core.PersistentArrayMap.createAsIfByAssoc([edit_key,new_text])], null));

cljs.core.reset_BANG_(predict_prostate.state.run_time.new_text_cursor,null);

return translations.tranny_api.upload_translation.cljs$core$IFn$_invoke$arity$3(edit_key,cljs.core.name(lang),new_text);
}));

predict_prostate.state.run_time.add_language_modal.pubsub$feeds$TopicFeed$subscribe$arity$2(null,(function (_){
return $("#newLanguageModal").modal("show");
}));

predict_prostate.state.run_time.add_language.pubsub$feeds$TopicFeed$subscribe$arity$2(null,(function (_,p__33717){
var vec__33718 = p__33717;
var new_lang = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33718,(0),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(new_lang))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(predict_prostate.state.run_time.t_state_cursor,cljs.core.update,new cljs.core.Keyword(null,"languages","languages",1471910331),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(new_lang)], 0));
} else {
return null;
}
}));

return predict_prostate.state.mutations.clear_inputs();
});

//# sourceMappingURL=predict_prostate.state.mutations.js.map
