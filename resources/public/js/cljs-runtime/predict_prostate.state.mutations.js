goog.provide('predict_prostate.state.mutations');
predict_prostate.state.mutations.paq = window._paq;
/**
 * Send an event to matemo. 
 */
predict_prostate.state.mutations.matomo_track = (function predict_prostate$state$mutations$matomo_track(var_args){
var G__33527 = arguments.length;
switch (G__33527) {
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
var seq__33533_33794 = cljs.core.seq(predict_prostate.state.run_time.input_changes());
var chunk__33536_33795 = null;
var count__33537_33796 = (0);
var i__33538_33797 = (0);
while(true){
if((i__33538_33797 < count__33537_33796)){
var vec__33585_33798 = chunk__33536_33795.cljs$core$IIndexed$_nth$arity$2(null,i__33538_33797);
var key_33799 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33585_33798,(0),null);
var topic_33800 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33585_33798,(1),null);
if(cljs.core.truth_(key_33799)){
if(cljs.core.truth_(topic_33800)){

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_33799,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355))){
var map__33591_33801 = predict_prostate.state.localStorage.get_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),new cljs.core.Keyword(null,"line2","line2",-1975668782)], null));
var map__33591_33802__$1 = cljs.core.__destructure_map(map__33591_33801);
var plot_style_33803 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33591_33802__$1,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355));
if(cljs.core.truth_((function (){var fexpr__33592 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"area1","area1",-316994623),null,new cljs.core.Keyword(null,"line2","line2",-1975668782),null], null), null);
return (fexpr__33592.cljs$core$IFn$_invoke$arity$1 ? fexpr__33592.cljs$core$IFn$_invoke$arity$1(plot_style_33803) : fexpr__33592.call(null,plot_style_33803));
})())){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),plot_style_33803);
} else {
predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),new cljs.core.Keyword(null,"line2","line2",-1975668782)], null));

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),new cljs.core.Keyword(null,"line2","line2",-1975668782));
}
} else {
pubsub.feeds.publish(topic_33800,(cljs.core.truth_((function (){var fexpr__33595 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"age","age",-604307804),null,new cljs.core.Keyword(null,"psa","psa",-321761459),null], null), null);
return (fexpr__33595.cljs$core$IFn$_invoke$arity$1 ? fexpr__33595.cljs$core$IFn$_invoke$arity$1(key_33799) : fexpr__33595.call(null,key_33799));
})())?"":null));

}


var G__33807 = seq__33533_33794;
var G__33808 = chunk__33536_33795;
var G__33809 = count__33537_33796;
var G__33810 = (i__33538_33797 + (1));
seq__33533_33794 = G__33807;
chunk__33536_33795 = G__33808;
count__33537_33796 = G__33809;
i__33538_33797 = G__33810;
continue;
} else {
var G__33811 = seq__33533_33794;
var G__33812 = chunk__33536_33795;
var G__33813 = count__33537_33796;
var G__33814 = (i__33538_33797 + (1));
seq__33533_33794 = G__33811;
chunk__33536_33795 = G__33812;
count__33537_33796 = G__33813;
i__33538_33797 = G__33814;
continue;
}
} else {
var G__33815 = seq__33533_33794;
var G__33816 = chunk__33536_33795;
var G__33817 = count__33537_33796;
var G__33818 = (i__33538_33797 + (1));
seq__33533_33794 = G__33815;
chunk__33536_33795 = G__33816;
count__33537_33796 = G__33817;
i__33538_33797 = G__33818;
continue;
}
} else {
var temp__5753__auto___33819 = cljs.core.seq(seq__33533_33794);
if(temp__5753__auto___33819){
var seq__33533_33820__$1 = temp__5753__auto___33819;
if(cljs.core.chunked_seq_QMARK_(seq__33533_33820__$1)){
var c__4638__auto___33821 = cljs.core.chunk_first(seq__33533_33820__$1);
var G__33822 = cljs.core.chunk_rest(seq__33533_33820__$1);
var G__33823 = c__4638__auto___33821;
var G__33824 = cljs.core.count(c__4638__auto___33821);
var G__33825 = (0);
seq__33533_33794 = G__33822;
chunk__33536_33795 = G__33823;
count__33537_33796 = G__33824;
i__33538_33797 = G__33825;
continue;
} else {
var vec__33604_33826 = cljs.core.first(seq__33533_33820__$1);
var key_33827 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33604_33826,(0),null);
var topic_33828 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33604_33826,(1),null);
if(cljs.core.truth_(key_33827)){
if(cljs.core.truth_(topic_33828)){

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_33827,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355))){
var map__33609_33829 = predict_prostate.state.localStorage.get_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),new cljs.core.Keyword(null,"line2","line2",-1975668782)], null));
var map__33609_33830__$1 = cljs.core.__destructure_map(map__33609_33829);
var plot_style_33831 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33609_33830__$1,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355));
if(cljs.core.truth_((function (){var fexpr__33610 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"area1","area1",-316994623),null,new cljs.core.Keyword(null,"line2","line2",-1975668782),null], null), null);
return (fexpr__33610.cljs$core$IFn$_invoke$arity$1 ? fexpr__33610.cljs$core$IFn$_invoke$arity$1(plot_style_33831) : fexpr__33610.call(null,plot_style_33831));
})())){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),plot_style_33831);
} else {
predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),new cljs.core.Keyword(null,"line2","line2",-1975668782)], null));

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),new cljs.core.Keyword(null,"line2","line2",-1975668782));
}
} else {
pubsub.feeds.publish(topic_33828,(cljs.core.truth_((function (){var fexpr__33611 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"age","age",-604307804),null,new cljs.core.Keyword(null,"psa","psa",-321761459),null], null), null);
return (fexpr__33611.cljs$core$IFn$_invoke$arity$1 ? fexpr__33611.cljs$core$IFn$_invoke$arity$1(key_33827) : fexpr__33611.call(null,key_33827));
})())?"":null));

}


var G__33838 = cljs.core.next(seq__33533_33820__$1);
var G__33839 = null;
var G__33840 = (0);
var G__33841 = (0);
seq__33533_33794 = G__33838;
chunk__33536_33795 = G__33839;
count__33537_33796 = G__33840;
i__33538_33797 = G__33841;
continue;
} else {
var G__33842 = cljs.core.next(seq__33533_33820__$1);
var G__33843 = null;
var G__33844 = (0);
var G__33845 = (0);
seq__33533_33794 = G__33842;
chunk__33536_33795 = G__33843;
count__33537_33796 = G__33844;
i__33538_33797 = G__33845;
continue;
}
} else {
var G__33846 = cljs.core.next(seq__33533_33820__$1);
var G__33847 = null;
var G__33848 = (0);
var G__33849 = (0);
seq__33533_33794 = G__33846;
chunk__33536_33795 = G__33847;
count__33537_33796 = G__33848;
i__33538_33797 = G__33849;
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
var len__4818__auto___33853 = arguments.length;
var i__4819__auto___33855 = (0);
while(true){
if((i__4819__auto___33855 < len__4818__auto___33853)){
args__4824__auto__.push((arguments[i__4819__auto___33855]));

var G__33858 = (i__4819__auto___33855 + (1));
i__4819__auto___33855 = G__33858;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return predict_prostate.state.mutations.subscribe_to.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(predict_prostate.state.mutations.subscribe_to.cljs$core$IFn$_invoke$arity$variadic = (function (change,cursor,p__33627){
var vec__33628 = p__33627;
var silent = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33628,(0),null);
return pubsub.feeds.subscribe(change,(function (p1__33614_SHARP_,p2__33615_SHARP_){
if(cljs.core.truth_(silent)){
} else {
predict_prostate.state.mutations.log(p1__33614_SHARP_,cljs.core.deref(cursor),p2__33615_SHARP_);
}

return cljs.core.reset_BANG_(cursor,p2__33615_SHARP_);
}));
}));

(predict_prostate.state.mutations.subscribe_to.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(predict_prostate.state.mutations.subscribe_to.cljs$lang$applyTo = (function (seq33618){
var G__33622 = cljs.core.first(seq33618);
var seq33618__$1 = cljs.core.next(seq33618);
var G__33623 = cljs.core.first(seq33618__$1);
var seq33618__$2 = cljs.core.next(seq33618__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33622,G__33623,seq33618__$2);
}));

predict_prostate.state.mutations.clip = (function predict_prostate$state$mutations$clip(p__33650){
var map__33651 = p__33650;
var map__33651__$1 = cljs.core.__destructure_map(map__33651);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33651__$1,new cljs.core.Keyword(null,"value","value",305978217));
var min = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33651__$1,new cljs.core.Keyword(null,"min","min",444991522));
var max = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33651__$1,new cljs.core.Keyword(null,"max","max",61366548));
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
var seq__33670_33870 = cljs.core.seq(predict_prostate.state.run_time.input_changes());
var chunk__33671_33871 = null;
var count__33672_33872 = (0);
var i__33673_33873 = (0);
while(true){
if((i__33673_33873 < count__33672_33872)){
var vec__33728_33874 = chunk__33671_33871.cljs$core$IIndexed$_nth$arity$2(null,i__33673_33873);
var key_33875 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33728_33874,(0),null);
var change_33876 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33728_33874,(1),null);
if(cljs.core.truth_(change_33876)){
pubsub.feeds.subscribe(change_33876,((function (seq__33670_33870,chunk__33671_33871,count__33672_33872,i__33673_33873,vec__33728_33874,key_33875,change_33876){
return (function (topic,value){
predict_prostate.state.mutations.log(topic,cljs.core.deref(predict_prostate.state.run_time.input_cursor(key_33875)),value);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666),key_33875)){
var vec__33732_33878 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(value,":");
var value_33879__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33732_33878,(0),null);
var bad_33880 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33732_33878,(1),null);
var bci_33881 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520))));
var bct_33882 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666))));
if(cljs.core.truth_(isNaN(bci_33881))){
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520)),predict_prostate.state.mutations.num_to_str((function (){var x__4295__auto__ = (1);
var y__4296__auto__ = (function (){var x__4298__auto__ = bci_33881;
var y__4299__auto__ = predict_prostate.state.mutations.str_to_num(value_33879__$1);
return ((x__4298__auto__ < y__4299__auto__) ? x__4298__auto__ : y__4299__auto__);
})();
return ((x__4295__auto__ > y__4296__auto__) ? x__4295__auto__ : y__4296__auto__);
})()));
}

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_33879__$1),(cljs.core.truth_(bad_33880)?":":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(bad_33880)].join(''));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520),key_33875)){
var vec__33736_33887 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(value,":");
var value_33888__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33736_33887,(0),null);
var bad_33889 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33736_33887,(1),null);
var bci_33890 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520))));
var bct_33891 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666))));
if(cljs.core.not(isNaN(bct_33891))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_33888__$1),(cljs.core.truth_((function (){var or__4212__auto__ = (value_33888__$1 < (0));
if(or__4212__auto__){
return or__4212__auto__;
} else {
return bad_33889;
}
})())?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_33888__$1)].join(''):"")].join(''));
} else {
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_33875,new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969)),value);

predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969),value], null));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,new cljs.core.Keyword(null,"gleason","gleason",-2044470526))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526)),cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518))));
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518)),cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526))));
}
} else {
if(cljs.core.truth_((function (){var fexpr__33740 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gleason","gleason",-2044470526),null,new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518),null], null), null);
return (fexpr__33740.cljs$core$IFn$_invoke$arity$1 ? fexpr__33740.cljs$core$IFn$_invoke$arity$1(key_33875) : fexpr__33740.call(null,key_33875));
})())){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526)),value);

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518)),value);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_33875,new cljs.core.Keyword(null,"h-admissions","h-admissions",-1503094844))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"h-admissions","h-admissions",-1503094844)),value);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,(0))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"charlson-comorbidity","charlson-comorbidity",-633596907)),null);
} else {
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_33875,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),value);

predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),value], null));
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(key_33875),(((value == null))?predict_prostate.state.config.get_input_default(predict_prostate.state.config.input_groups,key_33875):value));

}
}
}
}
}
}

return predict_prostate.models.runner.recalculate_model.cljs$core$IFn$_invoke$arity$2(predict_prostate.state.run_time.input_map(),predict_prostate.state.run_time.N);
});})(seq__33670_33870,chunk__33671_33871,count__33672_33872,i__33673_33873,vec__33728_33874,key_33875,change_33876))
);
} else {
}


var G__33899 = seq__33670_33870;
var G__33900 = chunk__33671_33871;
var G__33901 = count__33672_33872;
var G__33902 = (i__33673_33873 + (1));
seq__33670_33870 = G__33899;
chunk__33671_33871 = G__33900;
count__33672_33872 = G__33901;
i__33673_33873 = G__33902;
continue;
} else {
var temp__5753__auto___33905 = cljs.core.seq(seq__33670_33870);
if(temp__5753__auto___33905){
var seq__33670_33906__$1 = temp__5753__auto___33905;
if(cljs.core.chunked_seq_QMARK_(seq__33670_33906__$1)){
var c__4638__auto___33907 = cljs.core.chunk_first(seq__33670_33906__$1);
var G__33908 = cljs.core.chunk_rest(seq__33670_33906__$1);
var G__33909 = c__4638__auto___33907;
var G__33910 = cljs.core.count(c__4638__auto___33907);
var G__33911 = (0);
seq__33670_33870 = G__33908;
chunk__33671_33871 = G__33909;
count__33672_33872 = G__33910;
i__33673_33873 = G__33911;
continue;
} else {
var vec__33742_33912 = cljs.core.first(seq__33670_33906__$1);
var key_33913 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33742_33912,(0),null);
var change_33914 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33742_33912,(1),null);
if(cljs.core.truth_(change_33914)){
pubsub.feeds.subscribe(change_33914,((function (seq__33670_33870,chunk__33671_33871,count__33672_33872,i__33673_33873,vec__33742_33912,key_33913,change_33914,seq__33670_33906__$1,temp__5753__auto___33905){
return (function (topic,value){
predict_prostate.state.mutations.log(topic,cljs.core.deref(predict_prostate.state.run_time.input_cursor(key_33913)),value);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666),key_33913)){
var vec__33745_33915 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(value,":");
var value_33916__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33745_33915,(0),null);
var bad_33917 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33745_33915,(1),null);
var bci_33918 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520))));
var bct_33919 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666))));
if(cljs.core.truth_(isNaN(bci_33918))){
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520)),predict_prostate.state.mutations.num_to_str((function (){var x__4295__auto__ = (1);
var y__4296__auto__ = (function (){var x__4298__auto__ = bci_33918;
var y__4299__auto__ = predict_prostate.state.mutations.str_to_num(value_33916__$1);
return ((x__4298__auto__ < y__4299__auto__) ? x__4298__auto__ : y__4299__auto__);
})();
return ((x__4295__auto__ > y__4296__auto__) ? x__4295__auto__ : y__4296__auto__);
})()));
}

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_33916__$1),(cljs.core.truth_(bad_33917)?":":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(bad_33917)].join(''));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520),key_33913)){
var vec__33749_33924 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(value,":");
var value_33925__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33749_33924,(0),null);
var bad_33926 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33749_33924,(1),null);
var bci_33927 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520))));
var bct_33928 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666))));
if(cljs.core.not(isNaN(bct_33928))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_33925__$1),(cljs.core.truth_((function (){var or__4212__auto__ = (value_33925__$1 < (0));
if(or__4212__auto__){
return or__4212__auto__;
} else {
return bad_33926;
}
})())?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_33925__$1)].join(''):"")].join(''));
} else {
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_33913,new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969)),value);

predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969),value], null));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,new cljs.core.Keyword(null,"gleason","gleason",-2044470526))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526)),cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518))));
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518)),cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526))));
}
} else {
if(cljs.core.truth_((function (){var fexpr__33754 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gleason","gleason",-2044470526),null,new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518),null], null), null);
return (fexpr__33754.cljs$core$IFn$_invoke$arity$1 ? fexpr__33754.cljs$core$IFn$_invoke$arity$1(key_33913) : fexpr__33754.call(null,key_33913));
})())){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526)),value);

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518)),value);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_33913,new cljs.core.Keyword(null,"h-admissions","h-admissions",-1503094844))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"h-admissions","h-admissions",-1503094844)),value);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,(0))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"charlson-comorbidity","charlson-comorbidity",-633596907)),null);
} else {
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_33913,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),value);

predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),value], null));
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(key_33913),(((value == null))?predict_prostate.state.config.get_input_default(predict_prostate.state.config.input_groups,key_33913):value));

}
}
}
}
}
}

return predict_prostate.models.runner.recalculate_model.cljs$core$IFn$_invoke$arity$2(predict_prostate.state.run_time.input_map(),predict_prostate.state.run_time.N);
});})(seq__33670_33870,chunk__33671_33871,count__33672_33872,i__33673_33873,vec__33742_33912,key_33913,change_33914,seq__33670_33906__$1,temp__5753__auto___33905))
);
} else {
}


var G__33929 = cljs.core.next(seq__33670_33906__$1);
var G__33930 = null;
var G__33931 = (0);
var G__33932 = (0);
seq__33670_33870 = G__33929;
chunk__33671_33871 = G__33930;
count__33672_33872 = G__33931;
i__33673_33873 = G__33932;
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

predict_prostate.state.run_time.route_change.pubsub$feeds$TopicFeed$subscribe$arity$2(null,(function (_,p__33760){
var vec__33761 = p__33760;
var page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33761,(0),null);
var param1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33761,(1),null);
var param2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33761,(2),null);
var rvec = vec__33761;
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
var new_lang_33933 = new cljs.core.Keyword(null,"lang","lang",-1819677104).cljs$core$IFn$_invoke$arity$1(predict_prostate.state.localStorage.get_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"en","en",88457073)], null)));
predict_prostate.state.mutations.reload_lang(cljs.core.name(new_lang_33933));

return translations.tongue_base.load_translations_STAR_(url,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(translations.tongue_base.handle_dictionary,predict_prostate.state.run_time.t_state_cursor));
}));

predict_prostate.state.run_time.edit_change.pubsub$feeds$TopicFeed$subscribe$arity$2(null,(function (_,arg){
var text = (function (){var fexpr__33773 = cljs.core.deref(predict_prostate.state.run_time.ttt_cursor);
return (fexpr__33773.cljs$core$IFn$_invoke$arity$1 ? fexpr__33773.cljs$core$IFn$_invoke$arity$1(arg) : fexpr__33773.call(null,arg));
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(predict_prostate.state.run_time.edit_cursor,cljs.core.assoc,new cljs.core.Keyword(null,"edit-arg","edit-arg",1216866257),arg,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"edit-key","edit-key",-1833788727),((((cljs.core.vector_QMARK_(arg)) && ((cljs.core.count(arg) > (0)))))?cljs.core.first(arg):arg),new cljs.core.Keyword(null,"text","text",-1790561697),((((cljs.core.vector_QMARK_(arg)) && ((cljs.core.count(arg) > (1)))))?cljs.core.second(arg):text)], 0));

return $("#editorModal").modal("show");
}));

predict_prostate.state.run_time.new_text_change.pubsub$feeds$TopicFeed$subscribe$arity$2(null,(function (_,p__33774){
var vec__33775 = p__33774;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33775,(0),null);
var new_text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33775,(1),null);
return cljs.core.reset_BANG_(predict_prostate.state.run_time.new_text_cursor,new_text);
}));

predict_prostate.state.run_time.text_change.pubsub$feeds$TopicFeed$subscribe$arity$2(null,(function (_,p__33779){
var vec__33782 = p__33779;
var edit_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33782,(0),null);
var new_text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33782,(1),null);
var lang = new cljs.core.Keyword(null,"lang","lang",-1819677104).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(predict_prostate.state.run_time.t_state_cursor));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(predict_prostate.state.run_time.t_state_cursor,translations.tongue_base.process_dict_op,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"upsert","upsert",1416724984),new cljs.core.Keyword(null,"lang","lang",-1819677104).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(predict_prostate.state.run_time.t_state_cursor)),cljs.core.PersistentArrayMap.createAsIfByAssoc([edit_key,new_text])], null));

cljs.core.reset_BANG_(predict_prostate.state.run_time.new_text_cursor,null);

return translations.tranny_api.upload_translation.cljs$core$IFn$_invoke$arity$3(edit_key,cljs.core.name(lang),new_text);
}));

predict_prostate.state.run_time.add_language_modal.pubsub$feeds$TopicFeed$subscribe$arity$2(null,(function (_){
return $("#newLanguageModal").modal("show");
}));

predict_prostate.state.run_time.add_language.pubsub$feeds$TopicFeed$subscribe$arity$2(null,(function (_,p__33786){
var vec__33787 = p__33786;
var new_lang = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33787,(0),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(new_lang))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(predict_prostate.state.run_time.t_state_cursor,cljs.core.update,new cljs.core.Keyword(null,"languages","languages",1471910331),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(new_lang)], 0));
} else {
return null;
}
}));

return predict_prostate.state.mutations.clear_inputs();
});

//# sourceMappingURL=predict_prostate.state.mutations.js.map
