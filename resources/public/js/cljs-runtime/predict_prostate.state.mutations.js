goog.provide('predict_prostate.state.mutations');
predict_prostate.state.mutations.paq = window._paq;
/**
 * Send an event to matemo. 
 */
predict_prostate.state.mutations.matomo_track = (function predict_prostate$state$mutations$matomo_track(var_args){
var G__44569 = arguments.length;
switch (G__44569) {
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
var seq__44572_44804 = cljs.core.seq(predict_prostate.state.run_time.input_changes());
var chunk__44575_44805 = null;
var count__44576_44806 = (0);
var i__44577_44807 = (0);
while(true){
if((i__44577_44807 < count__44576_44806)){
var vec__44594_44808 = chunk__44575_44805.cljs$core$IIndexed$_nth$arity$2(null,i__44577_44807);
var key_44809 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44594_44808,(0),null);
var topic_44810 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44594_44808,(1),null);
if(cljs.core.truth_(key_44809)){
if(cljs.core.truth_(topic_44810)){

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_44809,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355))){
var map__44597_44811 = predict_prostate.state.localStorage.get_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),new cljs.core.Keyword(null,"line2","line2",-1975668782)], null));
var map__44597_44812__$1 = cljs.core.__destructure_map(map__44597_44811);
var plot_style_44813 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44597_44812__$1,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355));
if(cljs.core.truth_((function (){var fexpr__44598 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"area1","area1",-316994623),null,new cljs.core.Keyword(null,"line2","line2",-1975668782),null], null), null);
return (fexpr__44598.cljs$core$IFn$_invoke$arity$1 ? fexpr__44598.cljs$core$IFn$_invoke$arity$1(plot_style_44813) : fexpr__44598.call(null,plot_style_44813));
})())){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),plot_style_44813);
} else {
predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),new cljs.core.Keyword(null,"line2","line2",-1975668782)], null));

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),new cljs.core.Keyword(null,"line2","line2",-1975668782));
}
} else {
pubsub.feeds.publish(topic_44810,(cljs.core.truth_((function (){var fexpr__44599 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"age","age",-604307804),null,new cljs.core.Keyword(null,"psa","psa",-321761459),null], null), null);
return (fexpr__44599.cljs$core$IFn$_invoke$arity$1 ? fexpr__44599.cljs$core$IFn$_invoke$arity$1(key_44809) : fexpr__44599.call(null,key_44809));
})())?"":null));

}


var G__44817 = seq__44572_44804;
var G__44818 = chunk__44575_44805;
var G__44819 = count__44576_44806;
var G__44820 = (i__44577_44807 + (1));
seq__44572_44804 = G__44817;
chunk__44575_44805 = G__44818;
count__44576_44806 = G__44819;
i__44577_44807 = G__44820;
continue;
} else {
var G__44821 = seq__44572_44804;
var G__44822 = chunk__44575_44805;
var G__44823 = count__44576_44806;
var G__44824 = (i__44577_44807 + (1));
seq__44572_44804 = G__44821;
chunk__44575_44805 = G__44822;
count__44576_44806 = G__44823;
i__44577_44807 = G__44824;
continue;
}
} else {
var G__44825 = seq__44572_44804;
var G__44826 = chunk__44575_44805;
var G__44827 = count__44576_44806;
var G__44828 = (i__44577_44807 + (1));
seq__44572_44804 = G__44825;
chunk__44575_44805 = G__44826;
count__44576_44806 = G__44827;
i__44577_44807 = G__44828;
continue;
}
} else {
var temp__5753__auto___44829 = cljs.core.seq(seq__44572_44804);
if(temp__5753__auto___44829){
var seq__44572_44830__$1 = temp__5753__auto___44829;
if(cljs.core.chunked_seq_QMARK_(seq__44572_44830__$1)){
var c__4638__auto___44831 = cljs.core.chunk_first(seq__44572_44830__$1);
var G__44833 = cljs.core.chunk_rest(seq__44572_44830__$1);
var G__44834 = c__4638__auto___44831;
var G__44835 = cljs.core.count(c__4638__auto___44831);
var G__44836 = (0);
seq__44572_44804 = G__44833;
chunk__44575_44805 = G__44834;
count__44576_44806 = G__44835;
i__44577_44807 = G__44836;
continue;
} else {
var vec__44603_44837 = cljs.core.first(seq__44572_44830__$1);
var key_44838 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44603_44837,(0),null);
var topic_44839 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44603_44837,(1),null);
if(cljs.core.truth_(key_44838)){
if(cljs.core.truth_(topic_44839)){

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_44838,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355))){
var map__44606_44842 = predict_prostate.state.localStorage.get_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),new cljs.core.Keyword(null,"line2","line2",-1975668782)], null));
var map__44606_44843__$1 = cljs.core.__destructure_map(map__44606_44842);
var plot_style_44844 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44606_44843__$1,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355));
if(cljs.core.truth_((function (){var fexpr__44607 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"area1","area1",-316994623),null,new cljs.core.Keyword(null,"line2","line2",-1975668782),null], null), null);
return (fexpr__44607.cljs$core$IFn$_invoke$arity$1 ? fexpr__44607.cljs$core$IFn$_invoke$arity$1(plot_style_44844) : fexpr__44607.call(null,plot_style_44844));
})())){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),plot_style_44844);
} else {
predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),new cljs.core.Keyword(null,"line2","line2",-1975668782)], null));

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),new cljs.core.Keyword(null,"line2","line2",-1975668782));
}
} else {
pubsub.feeds.publish(topic_44839,(cljs.core.truth_((function (){var fexpr__44608 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"age","age",-604307804),null,new cljs.core.Keyword(null,"psa","psa",-321761459),null], null), null);
return (fexpr__44608.cljs$core$IFn$_invoke$arity$1 ? fexpr__44608.cljs$core$IFn$_invoke$arity$1(key_44838) : fexpr__44608.call(null,key_44838));
})())?"":null));

}


var G__44846 = cljs.core.next(seq__44572_44830__$1);
var G__44847 = null;
var G__44848 = (0);
var G__44849 = (0);
seq__44572_44804 = G__44846;
chunk__44575_44805 = G__44847;
count__44576_44806 = G__44848;
i__44577_44807 = G__44849;
continue;
} else {
var G__44852 = cljs.core.next(seq__44572_44830__$1);
var G__44853 = null;
var G__44854 = (0);
var G__44855 = (0);
seq__44572_44804 = G__44852;
chunk__44575_44805 = G__44853;
count__44576_44806 = G__44854;
i__44577_44807 = G__44855;
continue;
}
} else {
var G__44856 = cljs.core.next(seq__44572_44830__$1);
var G__44857 = null;
var G__44858 = (0);
var G__44859 = (0);
seq__44572_44804 = G__44856;
chunk__44575_44805 = G__44857;
count__44576_44806 = G__44858;
i__44577_44807 = G__44859;
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
var len__4818__auto___44860 = arguments.length;
var i__4819__auto___44861 = (0);
while(true){
if((i__4819__auto___44861 < len__4818__auto___44860)){
args__4824__auto__.push((arguments[i__4819__auto___44861]));

var G__44862 = (i__4819__auto___44861 + (1));
i__4819__auto___44861 = G__44862;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return predict_prostate.state.mutations.subscribe_to.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(predict_prostate.state.mutations.subscribe_to.cljs$core$IFn$_invoke$arity$variadic = (function (change,cursor,p__44615){
var vec__44616 = p__44615;
var silent = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44616,(0),null);
return pubsub.feeds.subscribe(change,(function (p1__44609_SHARP_,p2__44610_SHARP_){
if(cljs.core.truth_(silent)){
} else {
predict_prostate.state.mutations.log(p1__44609_SHARP_,cljs.core.deref(cursor),p2__44610_SHARP_);
}

return cljs.core.reset_BANG_(cursor,p2__44610_SHARP_);
}));
}));

(predict_prostate.state.mutations.subscribe_to.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(predict_prostate.state.mutations.subscribe_to.cljs$lang$applyTo = (function (seq44611){
var G__44612 = cljs.core.first(seq44611);
var seq44611__$1 = cljs.core.next(seq44611);
var G__44613 = cljs.core.first(seq44611__$1);
var seq44611__$2 = cljs.core.next(seq44611__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44612,G__44613,seq44611__$2);
}));

predict_prostate.state.mutations.clip = (function predict_prostate$state$mutations$clip(p__44619){
var map__44620 = p__44619;
var map__44620__$1 = cljs.core.__destructure_map(map__44620);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44620__$1,new cljs.core.Keyword(null,"value","value",305978217));
var min = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44620__$1,new cljs.core.Keyword(null,"min","min",444991522));
var max = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44620__$1,new cljs.core.Keyword(null,"max","max",61366548));
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
var seq__44623_44866 = cljs.core.seq(predict_prostate.state.run_time.input_changes());
var chunk__44624_44867 = null;
var count__44625_44868 = (0);
var i__44626_44869 = (0);
while(true){
if((i__44626_44869 < count__44625_44868)){
var vec__44669_44870 = chunk__44624_44867.cljs$core$IIndexed$_nth$arity$2(null,i__44626_44869);
var key_44871 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44669_44870,(0),null);
var change_44872 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44669_44870,(1),null);
if(cljs.core.truth_(change_44872)){
pubsub.feeds.subscribe(change_44872,((function (seq__44623_44866,chunk__44624_44867,count__44625_44868,i__44626_44869,vec__44669_44870,key_44871,change_44872){
return (function (topic,value){
predict_prostate.state.mutations.log(topic,cljs.core.deref(predict_prostate.state.run_time.input_cursor(key_44871)),value);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666),key_44871)){
var vec__44672_44874 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(value,":");
var value_44875__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44672_44874,(0),null);
var bad_44876 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44672_44874,(1),null);
var bci_44877 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520))));
var bct_44878 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666))));
if(cljs.core.truth_(isNaN(bci_44877))){
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520)),predict_prostate.state.mutations.num_to_str((function (){var x__4295__auto__ = (1);
var y__4296__auto__ = (function (){var x__4298__auto__ = bci_44877;
var y__4299__auto__ = predict_prostate.state.mutations.str_to_num(value_44875__$1);
return ((x__4298__auto__ < y__4299__auto__) ? x__4298__auto__ : y__4299__auto__);
})();
return ((x__4295__auto__ > y__4296__auto__) ? x__4295__auto__ : y__4296__auto__);
})()));
}

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_44875__$1),(cljs.core.truth_(bad_44876)?":":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(bad_44876)].join(''));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520),key_44871)){
var vec__44675_44879 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(value,":");
var value_44880__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44675_44879,(0),null);
var bad_44881 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44675_44879,(1),null);
var bci_44882 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520))));
var bct_44883 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666))));
if(cljs.core.not(isNaN(bct_44883))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_44880__$1),(cljs.core.truth_((function (){var or__4212__auto__ = (value_44880__$1 < (0));
if(or__4212__auto__){
return or__4212__auto__;
} else {
return bad_44881;
}
})())?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_44880__$1)].join(''):"")].join(''));
} else {
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_44871,new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969)),value);

predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969),value], null));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,new cljs.core.Keyword(null,"gleason","gleason",-2044470526))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526)),cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518))));
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518)),cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526))));
}
} else {
if(cljs.core.truth_((function (){var fexpr__44680 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gleason","gleason",-2044470526),null,new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518),null], null), null);
return (fexpr__44680.cljs$core$IFn$_invoke$arity$1 ? fexpr__44680.cljs$core$IFn$_invoke$arity$1(key_44871) : fexpr__44680.call(null,key_44871));
})())){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526)),value);

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518)),value);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_44871,new cljs.core.Keyword(null,"h-admissions","h-admissions",-1503094844))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"h-admissions","h-admissions",-1503094844)),value);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,(0))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"charlson-comorbidity","charlson-comorbidity",-633596907)),null);
} else {
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_44871,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),value);

predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),value], null));
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(key_44871),(((value == null))?predict_prostate.state.config.get_input_default(predict_prostate.state.config.input_groups,key_44871):value));

}
}
}
}
}
}

return predict_prostate.models.runner.recalculate_model.cljs$core$IFn$_invoke$arity$2(predict_prostate.state.run_time.input_map(),predict_prostate.state.run_time.N);
});})(seq__44623_44866,chunk__44624_44867,count__44625_44868,i__44626_44869,vec__44669_44870,key_44871,change_44872))
);
} else {
}


var G__44889 = seq__44623_44866;
var G__44890 = chunk__44624_44867;
var G__44891 = count__44625_44868;
var G__44892 = (i__44626_44869 + (1));
seq__44623_44866 = G__44889;
chunk__44624_44867 = G__44890;
count__44625_44868 = G__44891;
i__44626_44869 = G__44892;
continue;
} else {
var temp__5753__auto___44893 = cljs.core.seq(seq__44623_44866);
if(temp__5753__auto___44893){
var seq__44623_44894__$1 = temp__5753__auto___44893;
if(cljs.core.chunked_seq_QMARK_(seq__44623_44894__$1)){
var c__4638__auto___44895 = cljs.core.chunk_first(seq__44623_44894__$1);
var G__44896 = cljs.core.chunk_rest(seq__44623_44894__$1);
var G__44897 = c__4638__auto___44895;
var G__44898 = cljs.core.count(c__4638__auto___44895);
var G__44899 = (0);
seq__44623_44866 = G__44896;
chunk__44624_44867 = G__44897;
count__44625_44868 = G__44898;
i__44626_44869 = G__44899;
continue;
} else {
var vec__44690_44900 = cljs.core.first(seq__44623_44894__$1);
var key_44901 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44690_44900,(0),null);
var change_44902 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44690_44900,(1),null);
if(cljs.core.truth_(change_44902)){
pubsub.feeds.subscribe(change_44902,((function (seq__44623_44866,chunk__44624_44867,count__44625_44868,i__44626_44869,vec__44690_44900,key_44901,change_44902,seq__44623_44894__$1,temp__5753__auto___44893){
return (function (topic,value){
predict_prostate.state.mutations.log(topic,cljs.core.deref(predict_prostate.state.run_time.input_cursor(key_44901)),value);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666),key_44901)){
var vec__44695_44905 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(value,":");
var value_44906__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44695_44905,(0),null);
var bad_44907 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44695_44905,(1),null);
var bci_44908 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520))));
var bct_44909 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666))));
if(cljs.core.truth_(isNaN(bci_44908))){
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520)),predict_prostate.state.mutations.num_to_str((function (){var x__4295__auto__ = (1);
var y__4296__auto__ = (function (){var x__4298__auto__ = bci_44908;
var y__4299__auto__ = predict_prostate.state.mutations.str_to_num(value_44906__$1);
return ((x__4298__auto__ < y__4299__auto__) ? x__4298__auto__ : y__4299__auto__);
})();
return ((x__4295__auto__ > y__4296__auto__) ? x__4295__auto__ : y__4296__auto__);
})()));
}

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_44906__$1),(cljs.core.truth_(bad_44907)?":":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(bad_44907)].join(''));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520),key_44901)){
var vec__44700_44913 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(value,":");
var value_44914__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44700_44913,(0),null);
var bad_44915 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44700_44913,(1),null);
var bci_44916 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520))));
var bct_44917 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666))));
if(cljs.core.not(isNaN(bct_44917))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_44914__$1),(cljs.core.truth_((function (){var or__4212__auto__ = (value_44914__$1 < (0));
if(or__4212__auto__){
return or__4212__auto__;
} else {
return bad_44915;
}
})())?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_44914__$1)].join(''):"")].join(''));
} else {
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_44901,new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969)),value);

predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969),value], null));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,new cljs.core.Keyword(null,"gleason","gleason",-2044470526))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526)),cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518))));
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518)),cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526))));
}
} else {
if(cljs.core.truth_((function (){var fexpr__44705 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gleason","gleason",-2044470526),null,new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518),null], null), null);
return (fexpr__44705.cljs$core$IFn$_invoke$arity$1 ? fexpr__44705.cljs$core$IFn$_invoke$arity$1(key_44901) : fexpr__44705.call(null,key_44901));
})())){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526)),value);

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518)),value);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_44901,new cljs.core.Keyword(null,"h-admissions","h-admissions",-1503094844))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"h-admissions","h-admissions",-1503094844)),value);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,(0))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"charlson-comorbidity","charlson-comorbidity",-633596907)),null);
} else {
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_44901,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),value);

predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),value], null));
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(key_44901),(((value == null))?predict_prostate.state.config.get_input_default(predict_prostate.state.config.input_groups,key_44901):value));

}
}
}
}
}
}

return predict_prostate.models.runner.recalculate_model.cljs$core$IFn$_invoke$arity$2(predict_prostate.state.run_time.input_map(),predict_prostate.state.run_time.N);
});})(seq__44623_44866,chunk__44624_44867,count__44625_44868,i__44626_44869,vec__44690_44900,key_44901,change_44902,seq__44623_44894__$1,temp__5753__auto___44893))
);
} else {
}


var G__44929 = cljs.core.next(seq__44623_44894__$1);
var G__44930 = null;
var G__44931 = (0);
var G__44932 = (0);
seq__44623_44866 = G__44929;
chunk__44624_44867 = G__44930;
count__44625_44868 = G__44931;
i__44626_44869 = G__44932;
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

predict_prostate.state.run_time.route_change.pubsub$feeds$TopicFeed$subscribe$arity$2(null,(function (_,p__44758){
var vec__44760 = p__44758;
var page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44760,(0),null);
var param1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44760,(1),null);
var param2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44760,(2),null);
var rvec = vec__44760;
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
var new_lang_44941 = new cljs.core.Keyword(null,"lang","lang",-1819677104).cljs$core$IFn$_invoke$arity$1(predict_prostate.state.localStorage.get_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"en","en",88457073)], null)));
predict_prostate.state.mutations.reload_lang(cljs.core.name(new_lang_44941));

return translations.tongue_base.load_translations_STAR_(url,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(translations.tongue_base.handle_dictionary,predict_prostate.state.run_time.t_state_cursor));
}));

predict_prostate.state.run_time.edit_change.pubsub$feeds$TopicFeed$subscribe$arity$2(null,(function (_,arg){
var text = (function (){var fexpr__44766 = cljs.core.deref(predict_prostate.state.run_time.ttt_cursor);
return (fexpr__44766.cljs$core$IFn$_invoke$arity$1 ? fexpr__44766.cljs$core$IFn$_invoke$arity$1(arg) : fexpr__44766.call(null,arg));
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(predict_prostate.state.run_time.edit_cursor,cljs.core.assoc,new cljs.core.Keyword(null,"edit-arg","edit-arg",1216866257),arg,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"edit-key","edit-key",-1833788727),((((cljs.core.vector_QMARK_(arg)) && ((cljs.core.count(arg) > (0)))))?cljs.core.first(arg):arg),new cljs.core.Keyword(null,"text","text",-1790561697),((((cljs.core.vector_QMARK_(arg)) && ((cljs.core.count(arg) > (1)))))?cljs.core.second(arg):text)], 0));

return $("#editorModal").modal("show");
}));

predict_prostate.state.run_time.new_text_change.pubsub$feeds$TopicFeed$subscribe$arity$2(null,(function (_,p__44769){
var vec__44770 = p__44769;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44770,(0),null);
var new_text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44770,(1),null);
return cljs.core.reset_BANG_(predict_prostate.state.run_time.new_text_cursor,new_text);
}));

predict_prostate.state.run_time.text_change.pubsub$feeds$TopicFeed$subscribe$arity$2(null,(function (_,p__44773){
var vec__44774 = p__44773;
var edit_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44774,(0),null);
var new_text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44774,(1),null);
var lang = new cljs.core.Keyword(null,"lang","lang",-1819677104).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(predict_prostate.state.run_time.t_state_cursor));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(predict_prostate.state.run_time.t_state_cursor,translations.tongue_base.process_dict_op,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"upsert","upsert",1416724984),new cljs.core.Keyword(null,"lang","lang",-1819677104).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(predict_prostate.state.run_time.t_state_cursor)),cljs.core.PersistentArrayMap.createAsIfByAssoc([edit_key,new_text])], null));

cljs.core.reset_BANG_(predict_prostate.state.run_time.new_text_cursor,null);

return translations.tranny_api.upload_translation.cljs$core$IFn$_invoke$arity$3(edit_key,cljs.core.name(lang),new_text);
}));

predict_prostate.state.run_time.add_language_modal.pubsub$feeds$TopicFeed$subscribe$arity$2(null,(function (_){
return $("#newLanguageModal").modal("show");
}));

predict_prostate.state.run_time.add_language.pubsub$feeds$TopicFeed$subscribe$arity$2(null,(function (_,p__44783){
var vec__44785 = p__44783;
var new_lang = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44785,(0),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(new_lang))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(predict_prostate.state.run_time.t_state_cursor,cljs.core.update,new cljs.core.Keyword(null,"languages","languages",1471910331),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(new_lang)], 0));
} else {
return null;
}
}));

return predict_prostate.state.mutations.clear_inputs();
});

//# sourceMappingURL=predict_prostate.state.mutations.js.map
