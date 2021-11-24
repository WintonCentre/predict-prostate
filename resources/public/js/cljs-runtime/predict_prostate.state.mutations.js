goog.provide('predict_prostate.state.mutations');
predict_prostate.state.mutations.paq = window._paq;
/**
 * Send an event to matemo. 
 */
predict_prostate.state.mutations.matomo_track = (function predict_prostate$state$mutations$matomo_track(var_args){
var G__39514 = arguments.length;
switch (G__39514) {
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
var seq__39516_39773 = cljs.core.seq(predict_prostate.state.run_time.input_changes());
var chunk__39519_39774 = null;
var count__39520_39775 = (0);
var i__39521_39776 = (0);
while(true){
if((i__39521_39776 < count__39520_39775)){
var vec__39564_39777 = chunk__39519_39774.cljs$core$IIndexed$_nth$arity$2(null,i__39521_39776);
var key_39778 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39564_39777,(0),null);
var topic_39779 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39564_39777,(1),null);
if(cljs.core.truth_(key_39778)){
if(cljs.core.truth_(topic_39779)){

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_39778,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355))){
var map__39567_39784 = predict_prostate.state.localStorage.get_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),new cljs.core.Keyword(null,"line2","line2",-1975668782)], null));
var map__39567_39785__$1 = (((((!((map__39567_39784 == null))))?(((((map__39567_39784.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39567_39784.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39567_39784):map__39567_39784);
var plot_style_39786 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39567_39785__$1,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355));
if(cljs.core.truth_((function (){var fexpr__39569 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"area1","area1",-316994623),null,new cljs.core.Keyword(null,"line2","line2",-1975668782),null], null), null);
return (fexpr__39569.cljs$core$IFn$_invoke$arity$1 ? fexpr__39569.cljs$core$IFn$_invoke$arity$1(plot_style_39786) : fexpr__39569.call(null,plot_style_39786));
})())){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),plot_style_39786);
} else {
predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),new cljs.core.Keyword(null,"line2","line2",-1975668782)], null));

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),new cljs.core.Keyword(null,"line2","line2",-1975668782));
}
} else {
pubsub.feeds.publish(topic_39779,(cljs.core.truth_((function (){var fexpr__39581 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"age","age",-604307804),null,new cljs.core.Keyword(null,"psa","psa",-321761459),null], null), null);
return (fexpr__39581.cljs$core$IFn$_invoke$arity$1 ? fexpr__39581.cljs$core$IFn$_invoke$arity$1(key_39778) : fexpr__39581.call(null,key_39778));
})())?"":null));

}


var G__39793 = seq__39516_39773;
var G__39794 = chunk__39519_39774;
var G__39795 = count__39520_39775;
var G__39796 = (i__39521_39776 + (1));
seq__39516_39773 = G__39793;
chunk__39519_39774 = G__39794;
count__39520_39775 = G__39795;
i__39521_39776 = G__39796;
continue;
} else {
var G__39801 = seq__39516_39773;
var G__39802 = chunk__39519_39774;
var G__39803 = count__39520_39775;
var G__39804 = (i__39521_39776 + (1));
seq__39516_39773 = G__39801;
chunk__39519_39774 = G__39802;
count__39520_39775 = G__39803;
i__39521_39776 = G__39804;
continue;
}
} else {
var G__39809 = seq__39516_39773;
var G__39810 = chunk__39519_39774;
var G__39811 = count__39520_39775;
var G__39812 = (i__39521_39776 + (1));
seq__39516_39773 = G__39809;
chunk__39519_39774 = G__39810;
count__39520_39775 = G__39811;
i__39521_39776 = G__39812;
continue;
}
} else {
var temp__5735__auto___39817 = cljs.core.seq(seq__39516_39773);
if(temp__5735__auto___39817){
var seq__39516_39818__$1 = temp__5735__auto___39817;
if(cljs.core.chunked_seq_QMARK_(seq__39516_39818__$1)){
var c__4556__auto___39820 = cljs.core.chunk_first(seq__39516_39818__$1);
var G__39822 = cljs.core.chunk_rest(seq__39516_39818__$1);
var G__39823 = c__4556__auto___39820;
var G__39824 = cljs.core.count(c__4556__auto___39820);
var G__39825 = (0);
seq__39516_39773 = G__39822;
chunk__39519_39774 = G__39823;
count__39520_39775 = G__39824;
i__39521_39776 = G__39825;
continue;
} else {
var vec__39591_39831 = cljs.core.first(seq__39516_39818__$1);
var key_39832 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39591_39831,(0),null);
var topic_39833 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39591_39831,(1),null);
if(cljs.core.truth_(key_39832)){
if(cljs.core.truth_(topic_39833)){

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_39832,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355))){
var map__39597_39837 = predict_prostate.state.localStorage.get_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),new cljs.core.Keyword(null,"line2","line2",-1975668782)], null));
var map__39597_39838__$1 = (((((!((map__39597_39837 == null))))?(((((map__39597_39837.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39597_39837.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39597_39837):map__39597_39837);
var plot_style_39839 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39597_39838__$1,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355));
if(cljs.core.truth_((function (){var fexpr__39600 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"area1","area1",-316994623),null,new cljs.core.Keyword(null,"line2","line2",-1975668782),null], null), null);
return (fexpr__39600.cljs$core$IFn$_invoke$arity$1 ? fexpr__39600.cljs$core$IFn$_invoke$arity$1(plot_style_39839) : fexpr__39600.call(null,plot_style_39839));
})())){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),plot_style_39839);
} else {
predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),new cljs.core.Keyword(null,"line2","line2",-1975668782)], null));

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),new cljs.core.Keyword(null,"line2","line2",-1975668782));
}
} else {
pubsub.feeds.publish(topic_39833,(cljs.core.truth_((function (){var fexpr__39602 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"age","age",-604307804),null,new cljs.core.Keyword(null,"psa","psa",-321761459),null], null), null);
return (fexpr__39602.cljs$core$IFn$_invoke$arity$1 ? fexpr__39602.cljs$core$IFn$_invoke$arity$1(key_39832) : fexpr__39602.call(null,key_39832));
})())?"":null));

}


var G__39843 = cljs.core.next(seq__39516_39818__$1);
var G__39844 = null;
var G__39845 = (0);
var G__39846 = (0);
seq__39516_39773 = G__39843;
chunk__39519_39774 = G__39844;
count__39520_39775 = G__39845;
i__39521_39776 = G__39846;
continue;
} else {
var G__39851 = cljs.core.next(seq__39516_39818__$1);
var G__39852 = null;
var G__39853 = (0);
var G__39854 = (0);
seq__39516_39773 = G__39851;
chunk__39519_39774 = G__39852;
count__39520_39775 = G__39853;
i__39521_39776 = G__39854;
continue;
}
} else {
var G__39859 = cljs.core.next(seq__39516_39818__$1);
var G__39860 = null;
var G__39861 = (0);
var G__39862 = (0);
seq__39516_39773 = G__39859;
chunk__39519_39774 = G__39860;
count__39520_39775 = G__39861;
i__39521_39776 = G__39862;
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
var len__4736__auto___39867 = arguments.length;
var i__4737__auto___39869 = (0);
while(true){
if((i__4737__auto___39869 < len__4736__auto___39867)){
args__4742__auto__.push((arguments[i__4737__auto___39869]));

var G__39872 = (i__4737__auto___39869 + (1));
i__4737__auto___39869 = G__39872;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return predict_prostate.state.mutations.subscribe_to.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(predict_prostate.state.mutations.subscribe_to.cljs$core$IFn$_invoke$arity$variadic = (function (change,cursor,p__39620){
var vec__39621 = p__39620;
var silent = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39621,(0),null);
return pubsub.feeds.subscribe(change,(function (p1__39606_SHARP_,p2__39607_SHARP_){
if(cljs.core.truth_(silent)){
} else {
predict_prostate.state.mutations.log(p1__39606_SHARP_,cljs.core.deref(cursor),p2__39607_SHARP_);
}

return cljs.core.reset_BANG_(cursor,p2__39607_SHARP_);
}));
}));

(predict_prostate.state.mutations.subscribe_to.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(predict_prostate.state.mutations.subscribe_to.cljs$lang$applyTo = (function (seq39612){
var G__39613 = cljs.core.first(seq39612);
var seq39612__$1 = cljs.core.next(seq39612);
var G__39614 = cljs.core.first(seq39612__$1);
var seq39612__$2 = cljs.core.next(seq39612__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39613,G__39614,seq39612__$2);
}));

predict_prostate.state.mutations.clip = (function predict_prostate$state$mutations$clip(p__39634){
var map__39635 = p__39634;
var map__39635__$1 = (((((!((map__39635 == null))))?(((((map__39635.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39635.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39635):map__39635);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39635__$1,new cljs.core.Keyword(null,"value","value",305978217));
var min = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39635__$1,new cljs.core.Keyword(null,"min","min",444991522));
var max = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39635__$1,new cljs.core.Keyword(null,"max","max",61366548));
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
var seq__39646_39873 = cljs.core.seq(predict_prostate.state.run_time.input_changes());
var chunk__39647_39874 = null;
var count__39648_39875 = (0);
var i__39649_39876 = (0);
while(true){
if((i__39649_39876 < count__39648_39875)){
var vec__39696_39877 = chunk__39647_39874.cljs$core$IIndexed$_nth$arity$2(null,i__39649_39876);
var key_39878 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39696_39877,(0),null);
var change_39879 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39696_39877,(1),null);
if(cljs.core.truth_(change_39879)){
pubsub.feeds.subscribe(change_39879,((function (seq__39646_39873,chunk__39647_39874,count__39648_39875,i__39649_39876,vec__39696_39877,key_39878,change_39879){
return (function (topic,value){
predict_prostate.state.mutations.log(topic,cljs.core.deref(predict_prostate.state.run_time.input_cursor(key_39878)),value);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666),key_39878)){
var vec__39699_39880 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(value,":");
var value_39881__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39699_39880,(0),null);
var bad_39882 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39699_39880,(1),null);
var bci_39883 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520))));
var bct_39884 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666))));
if(cljs.core.truth_(isNaN(bci_39883))){
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520)),predict_prostate.state.mutations.num_to_str((function (){var x__4214__auto__ = (1);
var y__4215__auto__ = (function (){var x__4217__auto__ = bci_39883;
var y__4218__auto__ = predict_prostate.state.mutations.str_to_num(value_39881__$1);
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})();
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})()));
}

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_39881__$1),(cljs.core.truth_(bad_39882)?":":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(bad_39882)].join(''));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520),key_39878)){
var vec__39702_39885 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(value,":");
var value_39886__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39702_39885,(0),null);
var bad_39887 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39702_39885,(1),null);
var bci_39888 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520))));
var bct_39889 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666))));
if(cljs.core.not(isNaN(bct_39889))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_39886__$1),(cljs.core.truth_((function (){var or__4126__auto__ = (value_39886__$1 < (0));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return bad_39887;
}
})())?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_39886__$1)].join(''):"")].join(''));
} else {
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_39878,new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969)),value);

predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969),value], null));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,new cljs.core.Keyword(null,"gleason","gleason",-2044470526))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526)),cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518))));
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518)),cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526))));
}
} else {
if(cljs.core.truth_((function (){var fexpr__39706 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gleason","gleason",-2044470526),null,new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518),null], null), null);
return (fexpr__39706.cljs$core$IFn$_invoke$arity$1 ? fexpr__39706.cljs$core$IFn$_invoke$arity$1(key_39878) : fexpr__39706.call(null,key_39878));
})())){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526)),value);

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518)),value);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_39878,new cljs.core.Keyword(null,"h-admissions","h-admissions",-1503094844))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"h-admissions","h-admissions",-1503094844)),value);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,(0))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"charlson-comorbidity","charlson-comorbidity",-633596907)),null);
} else {
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_39878,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),value);

predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),value], null));
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(key_39878),(((value == null))?predict_prostate.state.config.get_input_default(predict_prostate.state.config.input_groups,key_39878):value));

}
}
}
}
}
}

return predict_prostate.models.runner.recalculate_model.cljs$core$IFn$_invoke$arity$2(predict_prostate.state.run_time.input_map(),predict_prostate.state.run_time.N);
});})(seq__39646_39873,chunk__39647_39874,count__39648_39875,i__39649_39876,vec__39696_39877,key_39878,change_39879))
);
} else {
}


var G__39890 = seq__39646_39873;
var G__39891 = chunk__39647_39874;
var G__39892 = count__39648_39875;
var G__39893 = (i__39649_39876 + (1));
seq__39646_39873 = G__39890;
chunk__39647_39874 = G__39891;
count__39648_39875 = G__39892;
i__39649_39876 = G__39893;
continue;
} else {
var temp__5735__auto___39894 = cljs.core.seq(seq__39646_39873);
if(temp__5735__auto___39894){
var seq__39646_39895__$1 = temp__5735__auto___39894;
if(cljs.core.chunked_seq_QMARK_(seq__39646_39895__$1)){
var c__4556__auto___39896 = cljs.core.chunk_first(seq__39646_39895__$1);
var G__39897 = cljs.core.chunk_rest(seq__39646_39895__$1);
var G__39898 = c__4556__auto___39896;
var G__39899 = cljs.core.count(c__4556__auto___39896);
var G__39900 = (0);
seq__39646_39873 = G__39897;
chunk__39647_39874 = G__39898;
count__39648_39875 = G__39899;
i__39649_39876 = G__39900;
continue;
} else {
var vec__39713_39901 = cljs.core.first(seq__39646_39895__$1);
var key_39902 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39713_39901,(0),null);
var change_39903 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39713_39901,(1),null);
if(cljs.core.truth_(change_39903)){
pubsub.feeds.subscribe(change_39903,((function (seq__39646_39873,chunk__39647_39874,count__39648_39875,i__39649_39876,vec__39713_39901,key_39902,change_39903,seq__39646_39895__$1,temp__5735__auto___39894){
return (function (topic,value){
predict_prostate.state.mutations.log(topic,cljs.core.deref(predict_prostate.state.run_time.input_cursor(key_39902)),value);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666),key_39902)){
var vec__39716_39904 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(value,":");
var value_39905__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39716_39904,(0),null);
var bad_39906 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39716_39904,(1),null);
var bci_39907 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520))));
var bct_39908 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666))));
if(cljs.core.truth_(isNaN(bci_39907))){
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520)),predict_prostate.state.mutations.num_to_str((function (){var x__4214__auto__ = (1);
var y__4215__auto__ = (function (){var x__4217__auto__ = bci_39907;
var y__4218__auto__ = predict_prostate.state.mutations.str_to_num(value_39905__$1);
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})();
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})()));
}

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_39905__$1),(cljs.core.truth_(bad_39906)?":":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(bad_39906)].join(''));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520),key_39902)){
var vec__39722_39921 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(value,":");
var value_39922__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39722_39921,(0),null);
var bad_39923 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39722_39921,(1),null);
var bci_39924 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520))));
var bct_39925 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666))));
if(cljs.core.not(isNaN(bct_39925))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_39922__$1),(cljs.core.truth_((function (){var or__4126__auto__ = (value_39922__$1 < (0));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return bad_39923;
}
})())?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_39922__$1)].join(''):"")].join(''));
} else {
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_39902,new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969)),value);

predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969),value], null));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,new cljs.core.Keyword(null,"gleason","gleason",-2044470526))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526)),cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518))));
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518)),cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526))));
}
} else {
if(cljs.core.truth_((function (){var fexpr__39726 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gleason","gleason",-2044470526),null,new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518),null], null), null);
return (fexpr__39726.cljs$core$IFn$_invoke$arity$1 ? fexpr__39726.cljs$core$IFn$_invoke$arity$1(key_39902) : fexpr__39726.call(null,key_39902));
})())){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526)),value);

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518)),value);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_39902,new cljs.core.Keyword(null,"h-admissions","h-admissions",-1503094844))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"h-admissions","h-admissions",-1503094844)),value);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,(0))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"charlson-comorbidity","charlson-comorbidity",-633596907)),null);
} else {
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_39902,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),value);

predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),value], null));
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(key_39902),(((value == null))?predict_prostate.state.config.get_input_default(predict_prostate.state.config.input_groups,key_39902):value));

}
}
}
}
}
}

return predict_prostate.models.runner.recalculate_model.cljs$core$IFn$_invoke$arity$2(predict_prostate.state.run_time.input_map(),predict_prostate.state.run_time.N);
});})(seq__39646_39873,chunk__39647_39874,count__39648_39875,i__39649_39876,vec__39713_39901,key_39902,change_39903,seq__39646_39895__$1,temp__5735__auto___39894))
);
} else {
}


var G__39931 = cljs.core.next(seq__39646_39895__$1);
var G__39932 = null;
var G__39933 = (0);
var G__39934 = (0);
seq__39646_39873 = G__39931;
chunk__39647_39874 = G__39932;
count__39648_39875 = G__39933;
i__39649_39876 = G__39934;
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

predict_prostate.state.run_time.route_change.pubsub$feeds$TopicFeed$subscribe$arity$2(null,(function (_,p__39736){
var vec__39737 = p__39736;
var page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39737,(0),null);
var param1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39737,(1),null);
var param2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39737,(2),null);
var rvec = vec__39737;
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
var new_lang_39959 = new cljs.core.Keyword(null,"lang","lang",-1819677104).cljs$core$IFn$_invoke$arity$1(predict_prostate.state.localStorage.get_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"en","en",88457073)], null)));
predict_prostate.state.mutations.reload_lang(cljs.core.name(new_lang_39959));

return translations.tongue_base.load_translations_STAR_(url,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(translations.tongue_base.handle_dictionary,predict_prostate.state.run_time.t_state_cursor));
}));

predict_prostate.state.run_time.edit_change.pubsub$feeds$TopicFeed$subscribe$arity$2(null,(function (_,arg){
var text = (function (){var fexpr__39741 = cljs.core.deref(predict_prostate.state.run_time.ttt_cursor);
return (fexpr__39741.cljs$core$IFn$_invoke$arity$1 ? fexpr__39741.cljs$core$IFn$_invoke$arity$1(arg) : fexpr__39741.call(null,arg));
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(predict_prostate.state.run_time.edit_cursor,cljs.core.assoc,new cljs.core.Keyword(null,"edit-arg","edit-arg",1216866257),arg,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"edit-key","edit-key",-1833788727),((((cljs.core.vector_QMARK_(arg)) && ((cljs.core.count(arg) > (0)))))?cljs.core.first(arg):arg),new cljs.core.Keyword(null,"text","text",-1790561697),((((cljs.core.vector_QMARK_(arg)) && ((cljs.core.count(arg) > (1)))))?cljs.core.second(arg):text)], 0));

return $("#editorModal").modal("show");
}));

predict_prostate.state.run_time.new_text_change.pubsub$feeds$TopicFeed$subscribe$arity$2(null,(function (_,p__39742){
var vec__39743 = p__39742;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39743,(0),null);
var new_text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39743,(1),null);
return cljs.core.reset_BANG_(predict_prostate.state.run_time.new_text_cursor,new_text);
}));

predict_prostate.state.run_time.text_change.pubsub$feeds$TopicFeed$subscribe$arity$2(null,(function (_,p__39750){
var vec__39751 = p__39750;
var edit_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39751,(0),null);
var new_text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39751,(1),null);
var lang = new cljs.core.Keyword(null,"lang","lang",-1819677104).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(predict_prostate.state.run_time.t_state_cursor));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(predict_prostate.state.run_time.t_state_cursor,translations.tongue_base.process_dict_op,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"upsert","upsert",1416724984),new cljs.core.Keyword(null,"lang","lang",-1819677104).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(predict_prostate.state.run_time.t_state_cursor)),cljs.core.PersistentArrayMap.createAsIfByAssoc([edit_key,new_text])], null));

cljs.core.reset_BANG_(predict_prostate.state.run_time.new_text_cursor,null);

return translations.tranny_api.upload_translation.cljs$core$IFn$_invoke$arity$3(edit_key,cljs.core.name(lang),new_text);
}));

predict_prostate.state.run_time.add_language_modal.pubsub$feeds$TopicFeed$subscribe$arity$2(null,(function (_){
return $("#newLanguageModal").modal("show");
}));

predict_prostate.state.run_time.add_language.pubsub$feeds$TopicFeed$subscribe$arity$2(null,(function (_,p__39754){
var vec__39755 = p__39754;
var new_lang = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39755,(0),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(new_lang))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(predict_prostate.state.run_time.t_state_cursor,cljs.core.update,new cljs.core.Keyword(null,"languages","languages",1471910331),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(new_lang)], 0));
} else {
return null;
}
}));

return predict_prostate.state.mutations.clear_inputs();
});

//# sourceMappingURL=predict_prostate.state.mutations.js.map
