goog.provide('predict_prostate.state.mutations');
predict_prostate.state.mutations.paq = window._paq;
/**
 * Send an event to matemo. 
 */
predict_prostate.state.mutations.matomo_track = (function predict_prostate$state$mutations$matomo_track(var_args){
var G__32241 = arguments.length;
switch (G__32241) {
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
var seq__32273_32780 = cljs.core.seq(predict_prostate.state.run_time.input_changes());
var chunk__32276_32781 = null;
var count__32277_32782 = (0);
var i__32278_32783 = (0);
while(true){
if((i__32278_32783 < count__32277_32782)){
var vec__32424_32785 = chunk__32276_32781.cljs$core$IIndexed$_nth$arity$2(null,i__32278_32783);
var key_32786 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32424_32785,(0),null);
var topic_32787 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32424_32785,(1),null);
if(cljs.core.truth_(key_32786)){
if(cljs.core.truth_(topic_32787)){

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_32786,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355))){
var map__32434_32790 = predict_prostate.state.localStorage.get_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),new cljs.core.Keyword(null,"line2","line2",-1975668782)], null));
var map__32434_32791__$1 = cljs.core.__destructure_map(map__32434_32790);
var plot_style_32792 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32434_32791__$1,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355));
if(cljs.core.truth_((function (){var fexpr__32439 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"area1","area1",-316994623),null,new cljs.core.Keyword(null,"line2","line2",-1975668782),null], null), null);
return (fexpr__32439.cljs$core$IFn$_invoke$arity$1 ? fexpr__32439.cljs$core$IFn$_invoke$arity$1(plot_style_32792) : fexpr__32439.call(null,plot_style_32792));
})())){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),plot_style_32792);
} else {
predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),new cljs.core.Keyword(null,"line2","line2",-1975668782)], null));

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),new cljs.core.Keyword(null,"line2","line2",-1975668782));
}
} else {
pubsub.feeds.publish(topic_32787,(cljs.core.truth_((function (){var fexpr__32448 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"age","age",-604307804),null,new cljs.core.Keyword(null,"psa","psa",-321761459),null], null), null);
return (fexpr__32448.cljs$core$IFn$_invoke$arity$1 ? fexpr__32448.cljs$core$IFn$_invoke$arity$1(key_32786) : fexpr__32448.call(null,key_32786));
})())?"":null));

}


var G__32798 = seq__32273_32780;
var G__32799 = chunk__32276_32781;
var G__32800 = count__32277_32782;
var G__32801 = (i__32278_32783 + (1));
seq__32273_32780 = G__32798;
chunk__32276_32781 = G__32799;
count__32277_32782 = G__32800;
i__32278_32783 = G__32801;
continue;
} else {
var G__32802 = seq__32273_32780;
var G__32803 = chunk__32276_32781;
var G__32804 = count__32277_32782;
var G__32805 = (i__32278_32783 + (1));
seq__32273_32780 = G__32802;
chunk__32276_32781 = G__32803;
count__32277_32782 = G__32804;
i__32278_32783 = G__32805;
continue;
}
} else {
var G__32806 = seq__32273_32780;
var G__32807 = chunk__32276_32781;
var G__32808 = count__32277_32782;
var G__32809 = (i__32278_32783 + (1));
seq__32273_32780 = G__32806;
chunk__32276_32781 = G__32807;
count__32277_32782 = G__32808;
i__32278_32783 = G__32809;
continue;
}
} else {
var temp__5753__auto___32810 = cljs.core.seq(seq__32273_32780);
if(temp__5753__auto___32810){
var seq__32273_32811__$1 = temp__5753__auto___32810;
if(cljs.core.chunked_seq_QMARK_(seq__32273_32811__$1)){
var c__4638__auto___32812 = cljs.core.chunk_first(seq__32273_32811__$1);
var G__32813 = cljs.core.chunk_rest(seq__32273_32811__$1);
var G__32814 = c__4638__auto___32812;
var G__32815 = cljs.core.count(c__4638__auto___32812);
var G__32816 = (0);
seq__32273_32780 = G__32813;
chunk__32276_32781 = G__32814;
count__32277_32782 = G__32815;
i__32278_32783 = G__32816;
continue;
} else {
var vec__32464_32817 = cljs.core.first(seq__32273_32811__$1);
var key_32818 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32464_32817,(0),null);
var topic_32819 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32464_32817,(1),null);
if(cljs.core.truth_(key_32818)){
if(cljs.core.truth_(topic_32819)){

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_32818,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355))){
var map__32468_32821 = predict_prostate.state.localStorage.get_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),new cljs.core.Keyword(null,"line2","line2",-1975668782)], null));
var map__32468_32822__$1 = cljs.core.__destructure_map(map__32468_32821);
var plot_style_32823 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32468_32822__$1,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355));
if(cljs.core.truth_((function (){var fexpr__32469 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"area1","area1",-316994623),null,new cljs.core.Keyword(null,"line2","line2",-1975668782),null], null), null);
return (fexpr__32469.cljs$core$IFn$_invoke$arity$1 ? fexpr__32469.cljs$core$IFn$_invoke$arity$1(plot_style_32823) : fexpr__32469.call(null,plot_style_32823));
})())){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),plot_style_32823);
} else {
predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),new cljs.core.Keyword(null,"line2","line2",-1975668782)], null));

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),new cljs.core.Keyword(null,"line2","line2",-1975668782));
}
} else {
pubsub.feeds.publish(topic_32819,(cljs.core.truth_((function (){var fexpr__32471 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"age","age",-604307804),null,new cljs.core.Keyword(null,"psa","psa",-321761459),null], null), null);
return (fexpr__32471.cljs$core$IFn$_invoke$arity$1 ? fexpr__32471.cljs$core$IFn$_invoke$arity$1(key_32818) : fexpr__32471.call(null,key_32818));
})())?"":null));

}


var G__32825 = cljs.core.next(seq__32273_32811__$1);
var G__32826 = null;
var G__32827 = (0);
var G__32828 = (0);
seq__32273_32780 = G__32825;
chunk__32276_32781 = G__32826;
count__32277_32782 = G__32827;
i__32278_32783 = G__32828;
continue;
} else {
var G__32829 = cljs.core.next(seq__32273_32811__$1);
var G__32830 = null;
var G__32831 = (0);
var G__32832 = (0);
seq__32273_32780 = G__32829;
chunk__32276_32781 = G__32830;
count__32277_32782 = G__32831;
i__32278_32783 = G__32832;
continue;
}
} else {
var G__32834 = cljs.core.next(seq__32273_32811__$1);
var G__32835 = null;
var G__32836 = (0);
var G__32837 = (0);
seq__32273_32780 = G__32834;
chunk__32276_32781 = G__32835;
count__32277_32782 = G__32836;
i__32278_32783 = G__32837;
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
var len__4818__auto___32839 = arguments.length;
var i__4819__auto___32840 = (0);
while(true){
if((i__4819__auto___32840 < len__4818__auto___32839)){
args__4824__auto__.push((arguments[i__4819__auto___32840]));

var G__32841 = (i__4819__auto___32840 + (1));
i__4819__auto___32840 = G__32841;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return predict_prostate.state.mutations.subscribe_to.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(predict_prostate.state.mutations.subscribe_to.cljs$core$IFn$_invoke$arity$variadic = (function (change,cursor,p__32481){
var vec__32483 = p__32481;
var silent = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32483,(0),null);
return pubsub.feeds.subscribe(change,(function (p1__32473_SHARP_,p2__32474_SHARP_){
if(cljs.core.truth_(silent)){
} else {
predict_prostate.state.mutations.log(p1__32473_SHARP_,cljs.core.deref(cursor),p2__32474_SHARP_);
}

return cljs.core.reset_BANG_(cursor,p2__32474_SHARP_);
}));
}));

(predict_prostate.state.mutations.subscribe_to.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(predict_prostate.state.mutations.subscribe_to.cljs$lang$applyTo = (function (seq32476){
var G__32477 = cljs.core.first(seq32476);
var seq32476__$1 = cljs.core.next(seq32476);
var G__32478 = cljs.core.first(seq32476__$1);
var seq32476__$2 = cljs.core.next(seq32476__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32477,G__32478,seq32476__$2);
}));

predict_prostate.state.mutations.clip = (function predict_prostate$state$mutations$clip(p__32488){
var map__32489 = p__32488;
var map__32489__$1 = cljs.core.__destructure_map(map__32489);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32489__$1,new cljs.core.Keyword(null,"value","value",305978217));
var min = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32489__$1,new cljs.core.Keyword(null,"min","min",444991522));
var max = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32489__$1,new cljs.core.Keyword(null,"max","max",61366548));
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
var seq__32518_32842 = cljs.core.seq(predict_prostate.state.run_time.input_changes());
var chunk__32519_32843 = null;
var count__32520_32844 = (0);
var i__32521_32845 = (0);
while(true){
if((i__32521_32845 < count__32520_32844)){
var vec__32628_32846 = chunk__32519_32843.cljs$core$IIndexed$_nth$arity$2(null,i__32521_32845);
var key_32847 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32628_32846,(0),null);
var change_32848 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32628_32846,(1),null);
if(cljs.core.truth_(change_32848)){
pubsub.feeds.subscribe(change_32848,((function (seq__32518_32842,chunk__32519_32843,count__32520_32844,i__32521_32845,vec__32628_32846,key_32847,change_32848){
return (function (topic,value){
predict_prostate.state.mutations.log(topic,cljs.core.deref(predict_prostate.state.run_time.input_cursor(key_32847)),value);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666),key_32847)){
var vec__32635_32849 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(value,":");
var value_32850__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32635_32849,(0),null);
var bad_32851 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32635_32849,(1),null);
var bci_32852 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520))));
var bct_32853 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666))));
if(cljs.core.truth_(isNaN(bci_32852))){
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520)),predict_prostate.state.mutations.num_to_str((function (){var x__4295__auto__ = (1);
var y__4296__auto__ = (function (){var x__4298__auto__ = bci_32852;
var y__4299__auto__ = predict_prostate.state.mutations.str_to_num(value_32850__$1);
return ((x__4298__auto__ < y__4299__auto__) ? x__4298__auto__ : y__4299__auto__);
})();
return ((x__4295__auto__ > y__4296__auto__) ? x__4295__auto__ : y__4296__auto__);
})()));
}

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_32850__$1),(cljs.core.truth_(bad_32851)?":":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(bad_32851)].join(''));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520),key_32847)){
var vec__32648_32855 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(value,":");
var value_32856__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32648_32855,(0),null);
var bad_32857 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32648_32855,(1),null);
var bci_32858 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520))));
var bct_32859 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666))));
if(cljs.core.not(isNaN(bct_32859))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_32856__$1),(cljs.core.truth_((function (){var or__4212__auto__ = (value_32856__$1 < (0));
if(or__4212__auto__){
return or__4212__auto__;
} else {
return bad_32857;
}
})())?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_32856__$1)].join(''):"")].join(''));
} else {
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_32847,new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969)),value);

predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969),value], null));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,new cljs.core.Keyword(null,"gleason","gleason",-2044470526))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526)),cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518))));
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518)),cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526))));
}
} else {
if(cljs.core.truth_((function (){var fexpr__32701 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gleason","gleason",-2044470526),null,new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518),null], null), null);
return (fexpr__32701.cljs$core$IFn$_invoke$arity$1 ? fexpr__32701.cljs$core$IFn$_invoke$arity$1(key_32847) : fexpr__32701.call(null,key_32847));
})())){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526)),value);

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518)),value);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_32847,new cljs.core.Keyword(null,"h-admissions","h-admissions",-1503094844))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"h-admissions","h-admissions",-1503094844)),value);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,(0))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"charlson-comorbidity","charlson-comorbidity",-633596907)),null);
} else {
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_32847,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),value);

predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),value], null));
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(key_32847),(((value == null))?predict_prostate.state.config.get_input_default(predict_prostate.state.config.input_groups,key_32847):value));

}
}
}
}
}
}

return predict_prostate.models.runner.recalculate_model.cljs$core$IFn$_invoke$arity$2(predict_prostate.state.run_time.input_map(),predict_prostate.state.run_time.N);
});})(seq__32518_32842,chunk__32519_32843,count__32520_32844,i__32521_32845,vec__32628_32846,key_32847,change_32848))
);
} else {
}


var G__32867 = seq__32518_32842;
var G__32868 = chunk__32519_32843;
var G__32869 = count__32520_32844;
var G__32870 = (i__32521_32845 + (1));
seq__32518_32842 = G__32867;
chunk__32519_32843 = G__32868;
count__32520_32844 = G__32869;
i__32521_32845 = G__32870;
continue;
} else {
var temp__5753__auto___32871 = cljs.core.seq(seq__32518_32842);
if(temp__5753__auto___32871){
var seq__32518_32873__$1 = temp__5753__auto___32871;
if(cljs.core.chunked_seq_QMARK_(seq__32518_32873__$1)){
var c__4638__auto___32875 = cljs.core.chunk_first(seq__32518_32873__$1);
var G__32876 = cljs.core.chunk_rest(seq__32518_32873__$1);
var G__32877 = c__4638__auto___32875;
var G__32878 = cljs.core.count(c__4638__auto___32875);
var G__32879 = (0);
seq__32518_32842 = G__32876;
chunk__32519_32843 = G__32877;
count__32520_32844 = G__32878;
i__32521_32845 = G__32879;
continue;
} else {
var vec__32719_32880 = cljs.core.first(seq__32518_32873__$1);
var key_32881 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32719_32880,(0),null);
var change_32882 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32719_32880,(1),null);
if(cljs.core.truth_(change_32882)){
pubsub.feeds.subscribe(change_32882,((function (seq__32518_32842,chunk__32519_32843,count__32520_32844,i__32521_32845,vec__32719_32880,key_32881,change_32882,seq__32518_32873__$1,temp__5753__auto___32871){
return (function (topic,value){
predict_prostate.state.mutations.log(topic,cljs.core.deref(predict_prostate.state.run_time.input_cursor(key_32881)),value);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666),key_32881)){
var vec__32730_32883 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(value,":");
var value_32884__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32730_32883,(0),null);
var bad_32885 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32730_32883,(1),null);
var bci_32886 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520))));
var bct_32887 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666))));
if(cljs.core.truth_(isNaN(bci_32886))){
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520)),predict_prostate.state.mutations.num_to_str((function (){var x__4295__auto__ = (1);
var y__4296__auto__ = (function (){var x__4298__auto__ = bci_32886;
var y__4299__auto__ = predict_prostate.state.mutations.str_to_num(value_32884__$1);
return ((x__4298__auto__ < y__4299__auto__) ? x__4298__auto__ : y__4299__auto__);
})();
return ((x__4295__auto__ > y__4296__auto__) ? x__4295__auto__ : y__4296__auto__);
})()));
}

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_32884__$1),(cljs.core.truth_(bad_32885)?":":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(bad_32885)].join(''));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520),key_32881)){
var vec__32739_32893 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(value,":");
var value_32894__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32739_32893,(0),null);
var bad_32895 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32739_32893,(1),null);
var bci_32896 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520))));
var bct_32897 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666))));
if(cljs.core.not(isNaN(bct_32897))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_32894__$1),(cljs.core.truth_((function (){var or__4212__auto__ = (value_32894__$1 < (0));
if(or__4212__auto__){
return or__4212__auto__;
} else {
return bad_32895;
}
})())?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_32894__$1)].join(''):"")].join(''));
} else {
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_32881,new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969)),value);

predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969),value], null));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,new cljs.core.Keyword(null,"gleason","gleason",-2044470526))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526)),cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518))));
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518)),cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526))));
}
} else {
if(cljs.core.truth_((function (){var fexpr__32742 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gleason","gleason",-2044470526),null,new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518),null], null), null);
return (fexpr__32742.cljs$core$IFn$_invoke$arity$1 ? fexpr__32742.cljs$core$IFn$_invoke$arity$1(key_32881) : fexpr__32742.call(null,key_32881));
})())){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526)),value);

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518)),value);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_32881,new cljs.core.Keyword(null,"h-admissions","h-admissions",-1503094844))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"h-admissions","h-admissions",-1503094844)),value);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,(0))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"charlson-comorbidity","charlson-comorbidity",-633596907)),null);
} else {
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_32881,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),value);

predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),value], null));
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(key_32881),(((value == null))?predict_prostate.state.config.get_input_default(predict_prostate.state.config.input_groups,key_32881):value));

}
}
}
}
}
}

return predict_prostate.models.runner.recalculate_model.cljs$core$IFn$_invoke$arity$2(predict_prostate.state.run_time.input_map(),predict_prostate.state.run_time.N);
});})(seq__32518_32842,chunk__32519_32843,count__32520_32844,i__32521_32845,vec__32719_32880,key_32881,change_32882,seq__32518_32873__$1,temp__5753__auto___32871))
);
} else {
}


var G__32907 = cljs.core.next(seq__32518_32873__$1);
var G__32908 = null;
var G__32909 = (0);
var G__32910 = (0);
seq__32518_32842 = G__32907;
chunk__32519_32843 = G__32908;
count__32520_32844 = G__32909;
i__32521_32845 = G__32910;
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

predict_prostate.state.run_time.route_change.pubsub$feeds$TopicFeed$subscribe$arity$2(null,(function (_,p__32754){
var vec__32755 = p__32754;
var page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32755,(0),null);
var param1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32755,(1),null);
var param2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32755,(2),null);
var rvec = vec__32755;
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
var new_lang_32934 = new cljs.core.Keyword(null,"lang","lang",-1819677104).cljs$core$IFn$_invoke$arity$1(predict_prostate.state.localStorage.get_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"en","en",88457073)], null)));
predict_prostate.state.mutations.reload_lang(cljs.core.name(new_lang_32934));

return translations.tongue_base.load_translations_STAR_(url,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(translations.tongue_base.handle_dictionary,predict_prostate.state.run_time.t_state_cursor));
}));

predict_prostate.state.run_time.edit_change.pubsub$feeds$TopicFeed$subscribe$arity$2(null,(function (_,arg){
var text = (function (){var fexpr__32760 = cljs.core.deref(predict_prostate.state.run_time.ttt_cursor);
return (fexpr__32760.cljs$core$IFn$_invoke$arity$1 ? fexpr__32760.cljs$core$IFn$_invoke$arity$1(arg) : fexpr__32760.call(null,arg));
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(predict_prostate.state.run_time.edit_cursor,cljs.core.assoc,new cljs.core.Keyword(null,"edit-arg","edit-arg",1216866257),arg,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"edit-key","edit-key",-1833788727),((((cljs.core.vector_QMARK_(arg)) && ((cljs.core.count(arg) > (0)))))?cljs.core.first(arg):arg),new cljs.core.Keyword(null,"text","text",-1790561697),((((cljs.core.vector_QMARK_(arg)) && ((cljs.core.count(arg) > (1)))))?cljs.core.second(arg):text)], 0));

return $("#editorModal").modal("show");
}));

predict_prostate.state.run_time.new_text_change.pubsub$feeds$TopicFeed$subscribe$arity$2(null,(function (_,p__32761){
var vec__32762 = p__32761;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32762,(0),null);
var new_text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32762,(1),null);
return cljs.core.reset_BANG_(predict_prostate.state.run_time.new_text_cursor,new_text);
}));

predict_prostate.state.run_time.text_change.pubsub$feeds$TopicFeed$subscribe$arity$2(null,(function (_,p__32766){
var vec__32767 = p__32766;
var edit_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32767,(0),null);
var new_text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32767,(1),null);
var lang = new cljs.core.Keyword(null,"lang","lang",-1819677104).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(predict_prostate.state.run_time.t_state_cursor));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(predict_prostate.state.run_time.t_state_cursor,translations.tongue_base.process_dict_op,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"upsert","upsert",1416724984),new cljs.core.Keyword(null,"lang","lang",-1819677104).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(predict_prostate.state.run_time.t_state_cursor)),cljs.core.PersistentArrayMap.createAsIfByAssoc([edit_key,new_text])], null));

cljs.core.reset_BANG_(predict_prostate.state.run_time.new_text_cursor,null);

return translations.tranny_api.upload_translation.cljs$core$IFn$_invoke$arity$3(edit_key,cljs.core.name(lang),new_text);
}));

predict_prostate.state.run_time.add_language_modal.pubsub$feeds$TopicFeed$subscribe$arity$2(null,(function (_){
return $("#newLanguageModal").modal("show");
}));

predict_prostate.state.run_time.add_language.pubsub$feeds$TopicFeed$subscribe$arity$2(null,(function (_,p__32773){
var vec__32774 = p__32773;
var new_lang = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32774,(0),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(new_lang))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(predict_prostate.state.run_time.t_state_cursor,cljs.core.update,new cljs.core.Keyword(null,"languages","languages",1471910331),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(new_lang)], 0));
} else {
return null;
}
}));

return predict_prostate.state.mutations.clear_inputs();
});

//# sourceMappingURL=predict_prostate.state.mutations.js.map
