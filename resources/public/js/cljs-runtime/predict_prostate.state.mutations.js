goog.provide('predict_prostate.state.mutations');
predict_prostate.state.mutations.paq = window._paq;
/**
 * Send an event to matemo. 
 */
predict_prostate.state.mutations.matomo_track = (function predict_prostate$state$mutations$matomo_track(var_args){
var G__33458 = arguments.length;
switch (G__33458) {
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
var seq__33459_33715 = cljs.core.seq(predict_prostate.state.run_time.input_changes());
var chunk__33462_33716 = null;
var count__33463_33717 = (0);
var i__33464_33718 = (0);
while(true){
if((i__33464_33718 < count__33463_33717)){
var vec__33499_33720 = chunk__33462_33716.cljs$core$IIndexed$_nth$arity$2(null,i__33464_33718);
var key_33721 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33499_33720,(0),null);
var topic_33722 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33499_33720,(1),null);
if(cljs.core.truth_(key_33721)){
if(cljs.core.truth_(topic_33722)){

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_33721,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355))){
var map__33502_33724 = predict_prostate.state.localStorage.get_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),new cljs.core.Keyword(null,"line2","line2",-1975668782)], null));
var map__33502_33725__$1 = cljs.core.__destructure_map(map__33502_33724);
var plot_style_33726 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33502_33725__$1,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355));
if(cljs.core.truth_((function (){var fexpr__33503 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"area1","area1",-316994623),null,new cljs.core.Keyword(null,"line2","line2",-1975668782),null], null), null);
return (fexpr__33503.cljs$core$IFn$_invoke$arity$1 ? fexpr__33503.cljs$core$IFn$_invoke$arity$1(plot_style_33726) : fexpr__33503.call(null,plot_style_33726));
})())){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),plot_style_33726);
} else {
predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),new cljs.core.Keyword(null,"line2","line2",-1975668782)], null));

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),new cljs.core.Keyword(null,"line2","line2",-1975668782));
}
} else {
pubsub.feeds.publish(topic_33722,(cljs.core.truth_((function (){var fexpr__33505 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"age","age",-604307804),null,new cljs.core.Keyword(null,"psa","psa",-321761459),null], null), null);
return (fexpr__33505.cljs$core$IFn$_invoke$arity$1 ? fexpr__33505.cljs$core$IFn$_invoke$arity$1(key_33721) : fexpr__33505.call(null,key_33721));
})())?"":null));

}


var G__33727 = seq__33459_33715;
var G__33728 = chunk__33462_33716;
var G__33729 = count__33463_33717;
var G__33730 = (i__33464_33718 + (1));
seq__33459_33715 = G__33727;
chunk__33462_33716 = G__33728;
count__33463_33717 = G__33729;
i__33464_33718 = G__33730;
continue;
} else {
var G__33731 = seq__33459_33715;
var G__33732 = chunk__33462_33716;
var G__33733 = count__33463_33717;
var G__33734 = (i__33464_33718 + (1));
seq__33459_33715 = G__33731;
chunk__33462_33716 = G__33732;
count__33463_33717 = G__33733;
i__33464_33718 = G__33734;
continue;
}
} else {
var G__33735 = seq__33459_33715;
var G__33736 = chunk__33462_33716;
var G__33737 = count__33463_33717;
var G__33738 = (i__33464_33718 + (1));
seq__33459_33715 = G__33735;
chunk__33462_33716 = G__33736;
count__33463_33717 = G__33737;
i__33464_33718 = G__33738;
continue;
}
} else {
var temp__5753__auto___33739 = cljs.core.seq(seq__33459_33715);
if(temp__5753__auto___33739){
var seq__33459_33740__$1 = temp__5753__auto___33739;
if(cljs.core.chunked_seq_QMARK_(seq__33459_33740__$1)){
var c__4638__auto___33741 = cljs.core.chunk_first(seq__33459_33740__$1);
var G__33742 = cljs.core.chunk_rest(seq__33459_33740__$1);
var G__33743 = c__4638__auto___33741;
var G__33744 = cljs.core.count(c__4638__auto___33741);
var G__33745 = (0);
seq__33459_33715 = G__33742;
chunk__33462_33716 = G__33743;
count__33463_33717 = G__33744;
i__33464_33718 = G__33745;
continue;
} else {
var vec__33506_33746 = cljs.core.first(seq__33459_33740__$1);
var key_33747 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33506_33746,(0),null);
var topic_33748 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33506_33746,(1),null);
if(cljs.core.truth_(key_33747)){
if(cljs.core.truth_(topic_33748)){

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_33747,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355))){
var map__33509_33749 = predict_prostate.state.localStorage.get_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),new cljs.core.Keyword(null,"line2","line2",-1975668782)], null));
var map__33509_33750__$1 = cljs.core.__destructure_map(map__33509_33749);
var plot_style_33751 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33509_33750__$1,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355));
if(cljs.core.truth_((function (){var fexpr__33510 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"area1","area1",-316994623),null,new cljs.core.Keyword(null,"line2","line2",-1975668782),null], null), null);
return (fexpr__33510.cljs$core$IFn$_invoke$arity$1 ? fexpr__33510.cljs$core$IFn$_invoke$arity$1(plot_style_33751) : fexpr__33510.call(null,plot_style_33751));
})())){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),plot_style_33751);
} else {
predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),new cljs.core.Keyword(null,"line2","line2",-1975668782)], null));

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),new cljs.core.Keyword(null,"line2","line2",-1975668782));
}
} else {
pubsub.feeds.publish(topic_33748,(cljs.core.truth_((function (){var fexpr__33511 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"age","age",-604307804),null,new cljs.core.Keyword(null,"psa","psa",-321761459),null], null), null);
return (fexpr__33511.cljs$core$IFn$_invoke$arity$1 ? fexpr__33511.cljs$core$IFn$_invoke$arity$1(key_33747) : fexpr__33511.call(null,key_33747));
})())?"":null));

}


var G__33753 = cljs.core.next(seq__33459_33740__$1);
var G__33754 = null;
var G__33755 = (0);
var G__33756 = (0);
seq__33459_33715 = G__33753;
chunk__33462_33716 = G__33754;
count__33463_33717 = G__33755;
i__33464_33718 = G__33756;
continue;
} else {
var G__33757 = cljs.core.next(seq__33459_33740__$1);
var G__33758 = null;
var G__33759 = (0);
var G__33760 = (0);
seq__33459_33715 = G__33757;
chunk__33462_33716 = G__33758;
count__33463_33717 = G__33759;
i__33464_33718 = G__33760;
continue;
}
} else {
var G__33761 = cljs.core.next(seq__33459_33740__$1);
var G__33762 = null;
var G__33763 = (0);
var G__33764 = (0);
seq__33459_33715 = G__33761;
chunk__33462_33716 = G__33762;
count__33463_33717 = G__33763;
i__33464_33718 = G__33764;
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
var len__4818__auto___33765 = arguments.length;
var i__4819__auto___33766 = (0);
while(true){
if((i__4819__auto___33766 < len__4818__auto___33765)){
args__4824__auto__.push((arguments[i__4819__auto___33766]));

var G__33767 = (i__4819__auto___33766 + (1));
i__4819__auto___33766 = G__33767;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return predict_prostate.state.mutations.subscribe_to.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(predict_prostate.state.mutations.subscribe_to.cljs$core$IFn$_invoke$arity$variadic = (function (change,cursor,p__33550){
var vec__33551 = p__33550;
var silent = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33551,(0),null);
return pubsub.feeds.subscribe(change,(function (p1__33520_SHARP_,p2__33521_SHARP_){
if(cljs.core.truth_(silent)){
} else {
predict_prostate.state.mutations.log(p1__33520_SHARP_,cljs.core.deref(cursor),p2__33521_SHARP_);
}

return cljs.core.reset_BANG_(cursor,p2__33521_SHARP_);
}));
}));

(predict_prostate.state.mutations.subscribe_to.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(predict_prostate.state.mutations.subscribe_to.cljs$lang$applyTo = (function (seq33535){
var G__33543 = cljs.core.first(seq33535);
var seq33535__$1 = cljs.core.next(seq33535);
var G__33544 = cljs.core.first(seq33535__$1);
var seq33535__$2 = cljs.core.next(seq33535__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33543,G__33544,seq33535__$2);
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
var seq__33582_33772 = cljs.core.seq(predict_prostate.state.run_time.input_changes());
var chunk__33583_33773 = null;
var count__33584_33774 = (0);
var i__33585_33775 = (0);
while(true){
if((i__33585_33775 < count__33584_33774)){
var vec__33632_33776 = chunk__33583_33773.cljs$core$IIndexed$_nth$arity$2(null,i__33585_33775);
var key_33777 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33632_33776,(0),null);
var change_33778 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33632_33776,(1),null);
if(cljs.core.truth_(change_33778)){
pubsub.feeds.subscribe(change_33778,((function (seq__33582_33772,chunk__33583_33773,count__33584_33774,i__33585_33775,vec__33632_33776,key_33777,change_33778){
return (function (topic,value){
predict_prostate.state.mutations.log(topic,cljs.core.deref(predict_prostate.state.run_time.input_cursor(key_33777)),value);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666),key_33777)){
var vec__33638_33781 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(value,":");
var value_33782__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33638_33781,(0),null);
var bad_33783 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33638_33781,(1),null);
var bci_33784 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520))));
var bct_33785 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666))));
if(cljs.core.truth_(isNaN(bci_33784))){
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520)),predict_prostate.state.mutations.num_to_str((function (){var x__4295__auto__ = (1);
var y__4296__auto__ = (function (){var x__4298__auto__ = bci_33784;
var y__4299__auto__ = predict_prostate.state.mutations.str_to_num(value_33782__$1);
return ((x__4298__auto__ < y__4299__auto__) ? x__4298__auto__ : y__4299__auto__);
})();
return ((x__4295__auto__ > y__4296__auto__) ? x__4295__auto__ : y__4296__auto__);
})()));
}

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_33782__$1),(cljs.core.truth_(bad_33783)?":":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(bad_33783)].join(''));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520),key_33777)){
var vec__33648_33795 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(value,":");
var value_33796__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33648_33795,(0),null);
var bad_33797 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33648_33795,(1),null);
var bci_33798 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520))));
var bct_33799 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666))));
if(cljs.core.not(isNaN(bct_33799))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_33796__$1),(cljs.core.truth_((function (){var or__4212__auto__ = (value_33796__$1 < (0));
if(or__4212__auto__){
return or__4212__auto__;
} else {
return bad_33797;
}
})())?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_33796__$1)].join(''):"")].join(''));
} else {
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_33777,new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969)),value);

predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969),value], null));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,new cljs.core.Keyword(null,"gleason","gleason",-2044470526))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526)),cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518))));
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518)),cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526))));
}
} else {
if(cljs.core.truth_((function (){var fexpr__33667 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gleason","gleason",-2044470526),null,new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518),null], null), null);
return (fexpr__33667.cljs$core$IFn$_invoke$arity$1 ? fexpr__33667.cljs$core$IFn$_invoke$arity$1(key_33777) : fexpr__33667.call(null,key_33777));
})())){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526)),value);

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518)),value);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_33777,new cljs.core.Keyword(null,"h-admissions","h-admissions",-1503094844))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"h-admissions","h-admissions",-1503094844)),value);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,(0))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"charlson-comorbidity","charlson-comorbidity",-633596907)),null);
} else {
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_33777,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),value);

predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),value], null));
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(key_33777),(((value == null))?predict_prostate.state.config.get_input_default(predict_prostate.state.config.input_groups,key_33777):value));

}
}
}
}
}
}

return predict_prostate.models.runner.recalculate_model.cljs$core$IFn$_invoke$arity$2(predict_prostate.state.run_time.input_map(),predict_prostate.state.run_time.N);
});})(seq__33582_33772,chunk__33583_33773,count__33584_33774,i__33585_33775,vec__33632_33776,key_33777,change_33778))
);
} else {
}


var G__33811 = seq__33582_33772;
var G__33812 = chunk__33583_33773;
var G__33813 = count__33584_33774;
var G__33814 = (i__33585_33775 + (1));
seq__33582_33772 = G__33811;
chunk__33583_33773 = G__33812;
count__33584_33774 = G__33813;
i__33585_33775 = G__33814;
continue;
} else {
var temp__5753__auto___33815 = cljs.core.seq(seq__33582_33772);
if(temp__5753__auto___33815){
var seq__33582_33817__$1 = temp__5753__auto___33815;
if(cljs.core.chunked_seq_QMARK_(seq__33582_33817__$1)){
var c__4638__auto___33818 = cljs.core.chunk_first(seq__33582_33817__$1);
var G__33819 = cljs.core.chunk_rest(seq__33582_33817__$1);
var G__33820 = c__4638__auto___33818;
var G__33821 = cljs.core.count(c__4638__auto___33818);
var G__33822 = (0);
seq__33582_33772 = G__33819;
chunk__33583_33773 = G__33820;
count__33584_33774 = G__33821;
i__33585_33775 = G__33822;
continue;
} else {
var vec__33673_33823 = cljs.core.first(seq__33582_33817__$1);
var key_33824 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33673_33823,(0),null);
var change_33825 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33673_33823,(1),null);
if(cljs.core.truth_(change_33825)){
pubsub.feeds.subscribe(change_33825,((function (seq__33582_33772,chunk__33583_33773,count__33584_33774,i__33585_33775,vec__33673_33823,key_33824,change_33825,seq__33582_33817__$1,temp__5753__auto___33815){
return (function (topic,value){
predict_prostate.state.mutations.log(topic,cljs.core.deref(predict_prostate.state.run_time.input_cursor(key_33824)),value);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666),key_33824)){
var vec__33677_33826 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(value,":");
var value_33827__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33677_33826,(0),null);
var bad_33828 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33677_33826,(1),null);
var bci_33829 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520))));
var bct_33830 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666))));
if(cljs.core.truth_(isNaN(bci_33829))){
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520)),predict_prostate.state.mutations.num_to_str((function (){var x__4295__auto__ = (1);
var y__4296__auto__ = (function (){var x__4298__auto__ = bci_33829;
var y__4299__auto__ = predict_prostate.state.mutations.str_to_num(value_33827__$1);
return ((x__4298__auto__ < y__4299__auto__) ? x__4298__auto__ : y__4299__auto__);
})();
return ((x__4295__auto__ > y__4296__auto__) ? x__4295__auto__ : y__4296__auto__);
})()));
}

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_33827__$1),(cljs.core.truth_(bad_33828)?":":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(bad_33828)].join(''));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520),key_33824)){
var vec__33681_33831 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(value,":");
var value_33832__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33681_33831,(0),null);
var bad_33833 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33681_33831,(1),null);
var bci_33834 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520))));
var bct_33835 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666))));
if(cljs.core.not(isNaN(bct_33835))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_33832__$1),(cljs.core.truth_((function (){var or__4212__auto__ = (value_33832__$1 < (0));
if(or__4212__auto__){
return or__4212__auto__;
} else {
return bad_33833;
}
})())?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_33832__$1)].join(''):"")].join(''));
} else {
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_33824,new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969)),value);

predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969),value], null));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,new cljs.core.Keyword(null,"gleason","gleason",-2044470526))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526)),cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518))));
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518)),cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526))));
}
} else {
if(cljs.core.truth_((function (){var fexpr__33691 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gleason","gleason",-2044470526),null,new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518),null], null), null);
return (fexpr__33691.cljs$core$IFn$_invoke$arity$1 ? fexpr__33691.cljs$core$IFn$_invoke$arity$1(key_33824) : fexpr__33691.call(null,key_33824));
})())){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526)),value);

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518)),value);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_33824,new cljs.core.Keyword(null,"h-admissions","h-admissions",-1503094844))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"h-admissions","h-admissions",-1503094844)),value);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,(0))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"charlson-comorbidity","charlson-comorbidity",-633596907)),null);
} else {
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_33824,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),value);

predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),value], null));
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(key_33824),(((value == null))?predict_prostate.state.config.get_input_default(predict_prostate.state.config.input_groups,key_33824):value));

}
}
}
}
}
}

return predict_prostate.models.runner.recalculate_model.cljs$core$IFn$_invoke$arity$2(predict_prostate.state.run_time.input_map(),predict_prostate.state.run_time.N);
});})(seq__33582_33772,chunk__33583_33773,count__33584_33774,i__33585_33775,vec__33673_33823,key_33824,change_33825,seq__33582_33817__$1,temp__5753__auto___33815))
);
} else {
}


var G__33847 = cljs.core.next(seq__33582_33817__$1);
var G__33848 = null;
var G__33849 = (0);
var G__33850 = (0);
seq__33582_33772 = G__33847;
chunk__33583_33773 = G__33848;
count__33584_33774 = G__33849;
i__33585_33775 = G__33850;
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

predict_prostate.state.run_time.route_change.pubsub$feeds$TopicFeed$subscribe$arity$2(null,(function (_,p__33696){
var vec__33697 = p__33696;
var page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33697,(0),null);
var param1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33697,(1),null);
var param2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33697,(2),null);
var rvec = vec__33697;
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
var new_lang_33851 = new cljs.core.Keyword(null,"lang","lang",-1819677104).cljs$core$IFn$_invoke$arity$1(predict_prostate.state.localStorage.get_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"en","en",88457073)], null)));
predict_prostate.state.mutations.reload_lang(cljs.core.name(new_lang_33851));

return translations.tongue_base.load_translations_STAR_(url,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(translations.tongue_base.handle_dictionary,predict_prostate.state.run_time.t_state_cursor));
}));

predict_prostate.state.run_time.edit_change.pubsub$feeds$TopicFeed$subscribe$arity$2(null,(function (_,arg){
var text = (function (){var fexpr__33700 = cljs.core.deref(predict_prostate.state.run_time.ttt_cursor);
return (fexpr__33700.cljs$core$IFn$_invoke$arity$1 ? fexpr__33700.cljs$core$IFn$_invoke$arity$1(arg) : fexpr__33700.call(null,arg));
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(predict_prostate.state.run_time.edit_cursor,cljs.core.assoc,new cljs.core.Keyword(null,"edit-arg","edit-arg",1216866257),arg,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"edit-key","edit-key",-1833788727),((((cljs.core.vector_QMARK_(arg)) && ((cljs.core.count(arg) > (0)))))?cljs.core.first(arg):arg),new cljs.core.Keyword(null,"text","text",-1790561697),((((cljs.core.vector_QMARK_(arg)) && ((cljs.core.count(arg) > (1)))))?cljs.core.second(arg):text)], 0));

return $("#editorModal").modal("show");
}));

predict_prostate.state.run_time.new_text_change.pubsub$feeds$TopicFeed$subscribe$arity$2(null,(function (_,p__33701){
var vec__33702 = p__33701;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33702,(0),null);
var new_text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33702,(1),null);
return cljs.core.reset_BANG_(predict_prostate.state.run_time.new_text_cursor,new_text);
}));

predict_prostate.state.run_time.text_change.pubsub$feeds$TopicFeed$subscribe$arity$2(null,(function (_,p__33705){
var vec__33706 = p__33705;
var edit_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33706,(0),null);
var new_text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33706,(1),null);
var lang = new cljs.core.Keyword(null,"lang","lang",-1819677104).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(predict_prostate.state.run_time.t_state_cursor));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(predict_prostate.state.run_time.t_state_cursor,translations.tongue_base.process_dict_op,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"upsert","upsert",1416724984),new cljs.core.Keyword(null,"lang","lang",-1819677104).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(predict_prostate.state.run_time.t_state_cursor)),cljs.core.PersistentArrayMap.createAsIfByAssoc([edit_key,new_text])], null));

cljs.core.reset_BANG_(predict_prostate.state.run_time.new_text_cursor,null);

return translations.tranny_api.upload_translation.cljs$core$IFn$_invoke$arity$3(edit_key,cljs.core.name(lang),new_text);
}));

predict_prostate.state.run_time.add_language_modal.pubsub$feeds$TopicFeed$subscribe$arity$2(null,(function (_){
return $("#newLanguageModal").modal("show");
}));

predict_prostate.state.run_time.add_language.pubsub$feeds$TopicFeed$subscribe$arity$2(null,(function (_,p__33709){
var vec__33710 = p__33709;
var new_lang = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33710,(0),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(new_lang))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(predict_prostate.state.run_time.t_state_cursor,cljs.core.update,new cljs.core.Keyword(null,"languages","languages",1471910331),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(new_lang)], 0));
} else {
return null;
}
}));

return predict_prostate.state.mutations.clear_inputs();
});

//# sourceMappingURL=predict_prostate.state.mutations.js.map
