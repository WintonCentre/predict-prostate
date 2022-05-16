goog.provide('predict_prostate.state.mutations');
predict_prostate.state.mutations.paq = window._paq;
/**
 * Send an event to matemo. 
 */
predict_prostate.state.mutations.matomo_track = (function predict_prostate$state$mutations$matomo_track(var_args){
var G__42362 = arguments.length;
switch (G__42362) {
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
var seq__42385_42809 = cljs.core.seq(predict_prostate.state.run_time.input_changes());
var chunk__42388_42810 = null;
var count__42389_42811 = (0);
var i__42390_42812 = (0);
while(true){
if((i__42390_42812 < count__42389_42811)){
var vec__42527_42813 = chunk__42388_42810.cljs$core$IIndexed$_nth$arity$2(null,i__42390_42812);
var key_42814 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42527_42813,(0),null);
var topic_42815 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42527_42813,(1),null);
if(cljs.core.truth_(key_42814)){
if(cljs.core.truth_(topic_42815)){

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_42814,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355))){
var map__42531_42816 = predict_prostate.state.localStorage.get_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),new cljs.core.Keyword(null,"line2","line2",-1975668782)], null));
var map__42531_42817__$1 = cljs.core.__destructure_map(map__42531_42816);
var plot_style_42818 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42531_42817__$1,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355));
if(cljs.core.truth_((function (){var fexpr__42538 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"area1","area1",-316994623),null,new cljs.core.Keyword(null,"line2","line2",-1975668782),null], null), null);
return (fexpr__42538.cljs$core$IFn$_invoke$arity$1 ? fexpr__42538.cljs$core$IFn$_invoke$arity$1(plot_style_42818) : fexpr__42538.call(null,plot_style_42818));
})())){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),plot_style_42818);
} else {
predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),new cljs.core.Keyword(null,"line2","line2",-1975668782)], null));

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),new cljs.core.Keyword(null,"line2","line2",-1975668782));
}
} else {
pubsub.feeds.publish(topic_42815,(cljs.core.truth_((function (){var fexpr__42546 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"age","age",-604307804),null,new cljs.core.Keyword(null,"psa","psa",-321761459),null], null), null);
return (fexpr__42546.cljs$core$IFn$_invoke$arity$1 ? fexpr__42546.cljs$core$IFn$_invoke$arity$1(key_42814) : fexpr__42546.call(null,key_42814));
})())?"":null));

}


var G__42819 = seq__42385_42809;
var G__42820 = chunk__42388_42810;
var G__42821 = count__42389_42811;
var G__42822 = (i__42390_42812 + (1));
seq__42385_42809 = G__42819;
chunk__42388_42810 = G__42820;
count__42389_42811 = G__42821;
i__42390_42812 = G__42822;
continue;
} else {
var G__42823 = seq__42385_42809;
var G__42824 = chunk__42388_42810;
var G__42825 = count__42389_42811;
var G__42826 = (i__42390_42812 + (1));
seq__42385_42809 = G__42823;
chunk__42388_42810 = G__42824;
count__42389_42811 = G__42825;
i__42390_42812 = G__42826;
continue;
}
} else {
var G__42827 = seq__42385_42809;
var G__42828 = chunk__42388_42810;
var G__42829 = count__42389_42811;
var G__42830 = (i__42390_42812 + (1));
seq__42385_42809 = G__42827;
chunk__42388_42810 = G__42828;
count__42389_42811 = G__42829;
i__42390_42812 = G__42830;
continue;
}
} else {
var temp__5753__auto___42831 = cljs.core.seq(seq__42385_42809);
if(temp__5753__auto___42831){
var seq__42385_42832__$1 = temp__5753__auto___42831;
if(cljs.core.chunked_seq_QMARK_(seq__42385_42832__$1)){
var c__4638__auto___42835 = cljs.core.chunk_first(seq__42385_42832__$1);
var G__42837 = cljs.core.chunk_rest(seq__42385_42832__$1);
var G__42838 = c__4638__auto___42835;
var G__42839 = cljs.core.count(c__4638__auto___42835);
var G__42840 = (0);
seq__42385_42809 = G__42837;
chunk__42388_42810 = G__42838;
count__42389_42811 = G__42839;
i__42390_42812 = G__42840;
continue;
} else {
var vec__42567_42842 = cljs.core.first(seq__42385_42832__$1);
var key_42843 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42567_42842,(0),null);
var topic_42844 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42567_42842,(1),null);
if(cljs.core.truth_(key_42843)){
if(cljs.core.truth_(topic_42844)){

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_42843,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355))){
var map__42572_42846 = predict_prostate.state.localStorage.get_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),new cljs.core.Keyword(null,"line2","line2",-1975668782)], null));
var map__42572_42847__$1 = cljs.core.__destructure_map(map__42572_42846);
var plot_style_42848 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42572_42847__$1,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355));
if(cljs.core.truth_((function (){var fexpr__42573 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"area1","area1",-316994623),null,new cljs.core.Keyword(null,"line2","line2",-1975668782),null], null), null);
return (fexpr__42573.cljs$core$IFn$_invoke$arity$1 ? fexpr__42573.cljs$core$IFn$_invoke$arity$1(plot_style_42848) : fexpr__42573.call(null,plot_style_42848));
})())){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),plot_style_42848);
} else {
predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),new cljs.core.Keyword(null,"line2","line2",-1975668782)], null));

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),new cljs.core.Keyword(null,"line2","line2",-1975668782));
}
} else {
pubsub.feeds.publish(topic_42844,(cljs.core.truth_((function (){var fexpr__42577 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"age","age",-604307804),null,new cljs.core.Keyword(null,"psa","psa",-321761459),null], null), null);
return (fexpr__42577.cljs$core$IFn$_invoke$arity$1 ? fexpr__42577.cljs$core$IFn$_invoke$arity$1(key_42843) : fexpr__42577.call(null,key_42843));
})())?"":null));

}


var G__42859 = cljs.core.next(seq__42385_42832__$1);
var G__42860 = null;
var G__42861 = (0);
var G__42862 = (0);
seq__42385_42809 = G__42859;
chunk__42388_42810 = G__42860;
count__42389_42811 = G__42861;
i__42390_42812 = G__42862;
continue;
} else {
var G__42864 = cljs.core.next(seq__42385_42832__$1);
var G__42865 = null;
var G__42866 = (0);
var G__42867 = (0);
seq__42385_42809 = G__42864;
chunk__42388_42810 = G__42865;
count__42389_42811 = G__42866;
i__42390_42812 = G__42867;
continue;
}
} else {
var G__42870 = cljs.core.next(seq__42385_42832__$1);
var G__42871 = null;
var G__42872 = (0);
var G__42873 = (0);
seq__42385_42809 = G__42870;
chunk__42388_42810 = G__42871;
count__42389_42811 = G__42872;
i__42390_42812 = G__42873;
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
var len__4818__auto___42878 = arguments.length;
var i__4819__auto___42879 = (0);
while(true){
if((i__4819__auto___42879 < len__4818__auto___42878)){
args__4824__auto__.push((arguments[i__4819__auto___42879]));

var G__42884 = (i__4819__auto___42879 + (1));
i__4819__auto___42879 = G__42884;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return predict_prostate.state.mutations.subscribe_to.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(predict_prostate.state.mutations.subscribe_to.cljs$core$IFn$_invoke$arity$variadic = (function (change,cursor,p__42603){
var vec__42605 = p__42603;
var silent = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42605,(0),null);
return pubsub.feeds.subscribe(change,(function (p1__42586_SHARP_,p2__42587_SHARP_){
if(cljs.core.truth_(silent)){
} else {
predict_prostate.state.mutations.log(p1__42586_SHARP_,cljs.core.deref(cursor),p2__42587_SHARP_);
}

return cljs.core.reset_BANG_(cursor,p2__42587_SHARP_);
}));
}));

(predict_prostate.state.mutations.subscribe_to.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(predict_prostate.state.mutations.subscribe_to.cljs$lang$applyTo = (function (seq42589){
var G__42590 = cljs.core.first(seq42589);
var seq42589__$1 = cljs.core.next(seq42589);
var G__42591 = cljs.core.first(seq42589__$1);
var seq42589__$2 = cljs.core.next(seq42589__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42590,G__42591,seq42589__$2);
}));

predict_prostate.state.mutations.clip = (function predict_prostate$state$mutations$clip(p__42656){
var map__42657 = p__42656;
var map__42657__$1 = cljs.core.__destructure_map(map__42657);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42657__$1,new cljs.core.Keyword(null,"value","value",305978217));
var min = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42657__$1,new cljs.core.Keyword(null,"min","min",444991522));
var max = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42657__$1,new cljs.core.Keyword(null,"max","max",61366548));
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
var seq__42662_42909 = cljs.core.seq(predict_prostate.state.run_time.input_changes());
var chunk__42663_42910 = null;
var count__42664_42911 = (0);
var i__42665_42912 = (0);
while(true){
if((i__42665_42912 < count__42664_42911)){
var vec__42766_42913 = chunk__42663_42910.cljs$core$IIndexed$_nth$arity$2(null,i__42665_42912);
var key_42914 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42766_42913,(0),null);
var change_42915 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42766_42913,(1),null);
if(cljs.core.truth_(change_42915)){
pubsub.feeds.subscribe(change_42915,((function (seq__42662_42909,chunk__42663_42910,count__42664_42911,i__42665_42912,vec__42766_42913,key_42914,change_42915){
return (function (topic,value){
predict_prostate.state.mutations.log(topic,cljs.core.deref(predict_prostate.state.run_time.input_cursor(key_42914)),value);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666),key_42914)){
var vec__42769_42918 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(value,":");
var value_42919__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42769_42918,(0),null);
var bad_42920 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42769_42918,(1),null);
var bci_42921 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520))));
var bct_42922 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666))));
if(cljs.core.truth_(isNaN(bci_42921))){
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520)),predict_prostate.state.mutations.num_to_str((function (){var x__4295__auto__ = (1);
var y__4296__auto__ = (function (){var x__4298__auto__ = bci_42921;
var y__4299__auto__ = predict_prostate.state.mutations.str_to_num(value_42919__$1);
return ((x__4298__auto__ < y__4299__auto__) ? x__4298__auto__ : y__4299__auto__);
})();
return ((x__4295__auto__ > y__4296__auto__) ? x__4295__auto__ : y__4296__auto__);
})()));
}

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_42919__$1),(cljs.core.truth_(bad_42920)?":":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(bad_42920)].join(''));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520),key_42914)){
var vec__42772_42923 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(value,":");
var value_42924__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42772_42923,(0),null);
var bad_42925 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42772_42923,(1),null);
var bci_42926 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520))));
var bct_42927 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666))));
if(cljs.core.not(isNaN(bct_42927))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_42924__$1),(cljs.core.truth_((function (){var or__4212__auto__ = (value_42924__$1 < (0));
if(or__4212__auto__){
return or__4212__auto__;
} else {
return bad_42925;
}
})())?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_42924__$1)].join(''):"")].join(''));
} else {
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_42914,new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969)),value);

predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969),value], null));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,new cljs.core.Keyword(null,"gleason","gleason",-2044470526))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526)),cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518))));
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518)),cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526))));
}
} else {
if(cljs.core.truth_((function (){var fexpr__42775 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gleason","gleason",-2044470526),null,new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518),null], null), null);
return (fexpr__42775.cljs$core$IFn$_invoke$arity$1 ? fexpr__42775.cljs$core$IFn$_invoke$arity$1(key_42914) : fexpr__42775.call(null,key_42914));
})())){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526)),value);

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518)),value);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_42914,new cljs.core.Keyword(null,"h-admissions","h-admissions",-1503094844))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"h-admissions","h-admissions",-1503094844)),value);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,(0))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"charlson-comorbidity","charlson-comorbidity",-633596907)),null);
} else {
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_42914,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),value);

predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),value], null));
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(key_42914),(((value == null))?predict_prostate.state.config.get_input_default(predict_prostate.state.config.input_groups,key_42914):value));

}
}
}
}
}
}

return predict_prostate.models.runner.recalculate_model.cljs$core$IFn$_invoke$arity$2(predict_prostate.state.run_time.input_map(),predict_prostate.state.run_time.N);
});})(seq__42662_42909,chunk__42663_42910,count__42664_42911,i__42665_42912,vec__42766_42913,key_42914,change_42915))
);
} else {
}


var G__42929 = seq__42662_42909;
var G__42930 = chunk__42663_42910;
var G__42931 = count__42664_42911;
var G__42932 = (i__42665_42912 + (1));
seq__42662_42909 = G__42929;
chunk__42663_42910 = G__42930;
count__42664_42911 = G__42931;
i__42665_42912 = G__42932;
continue;
} else {
var temp__5753__auto___42933 = cljs.core.seq(seq__42662_42909);
if(temp__5753__auto___42933){
var seq__42662_42934__$1 = temp__5753__auto___42933;
if(cljs.core.chunked_seq_QMARK_(seq__42662_42934__$1)){
var c__4638__auto___42935 = cljs.core.chunk_first(seq__42662_42934__$1);
var G__42936 = cljs.core.chunk_rest(seq__42662_42934__$1);
var G__42937 = c__4638__auto___42935;
var G__42938 = cljs.core.count(c__4638__auto___42935);
var G__42939 = (0);
seq__42662_42909 = G__42936;
chunk__42663_42910 = G__42937;
count__42664_42911 = G__42938;
i__42665_42912 = G__42939;
continue;
} else {
var vec__42778_42940 = cljs.core.first(seq__42662_42934__$1);
var key_42941 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42778_42940,(0),null);
var change_42942 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42778_42940,(1),null);
if(cljs.core.truth_(change_42942)){
pubsub.feeds.subscribe(change_42942,((function (seq__42662_42909,chunk__42663_42910,count__42664_42911,i__42665_42912,vec__42778_42940,key_42941,change_42942,seq__42662_42934__$1,temp__5753__auto___42933){
return (function (topic,value){
predict_prostate.state.mutations.log(topic,cljs.core.deref(predict_prostate.state.run_time.input_cursor(key_42941)),value);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666),key_42941)){
var vec__42781_42945 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(value,":");
var value_42946__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42781_42945,(0),null);
var bad_42947 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42781_42945,(1),null);
var bci_42948 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520))));
var bct_42949 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666))));
if(cljs.core.truth_(isNaN(bci_42948))){
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520)),predict_prostate.state.mutations.num_to_str((function (){var x__4295__auto__ = (1);
var y__4296__auto__ = (function (){var x__4298__auto__ = bci_42948;
var y__4299__auto__ = predict_prostate.state.mutations.str_to_num(value_42946__$1);
return ((x__4298__auto__ < y__4299__auto__) ? x__4298__auto__ : y__4299__auto__);
})();
return ((x__4295__auto__ > y__4296__auto__) ? x__4295__auto__ : y__4296__auto__);
})()));
}

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_42946__$1),(cljs.core.truth_(bad_42947)?":":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(bad_42947)].join(''));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520),key_42941)){
var vec__42784_42954 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(value,":");
var value_42955__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42784_42954,(0),null);
var bad_42956 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42784_42954,(1),null);
var bci_42957 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520))));
var bct_42958 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666))));
if(cljs.core.not(isNaN(bct_42958))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_42955__$1),(cljs.core.truth_((function (){var or__4212__auto__ = (value_42955__$1 < (0));
if(or__4212__auto__){
return or__4212__auto__;
} else {
return bad_42956;
}
})())?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_42955__$1)].join(''):"")].join(''));
} else {
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_42941,new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969)),value);

predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969),value], null));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,new cljs.core.Keyword(null,"gleason","gleason",-2044470526))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526)),cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518))));
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518)),cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526))));
}
} else {
if(cljs.core.truth_((function (){var fexpr__42787 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gleason","gleason",-2044470526),null,new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518),null], null), null);
return (fexpr__42787.cljs$core$IFn$_invoke$arity$1 ? fexpr__42787.cljs$core$IFn$_invoke$arity$1(key_42941) : fexpr__42787.call(null,key_42941));
})())){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526)),value);

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518)),value);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_42941,new cljs.core.Keyword(null,"h-admissions","h-admissions",-1503094844))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"h-admissions","h-admissions",-1503094844)),value);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,(0))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"charlson-comorbidity","charlson-comorbidity",-633596907)),null);
} else {
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_42941,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),value);

predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),value], null));
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(key_42941),(((value == null))?predict_prostate.state.config.get_input_default(predict_prostate.state.config.input_groups,key_42941):value));

}
}
}
}
}
}

return predict_prostate.models.runner.recalculate_model.cljs$core$IFn$_invoke$arity$2(predict_prostate.state.run_time.input_map(),predict_prostate.state.run_time.N);
});})(seq__42662_42909,chunk__42663_42910,count__42664_42911,i__42665_42912,vec__42778_42940,key_42941,change_42942,seq__42662_42934__$1,temp__5753__auto___42933))
);
} else {
}


var G__42964 = cljs.core.next(seq__42662_42934__$1);
var G__42965 = null;
var G__42966 = (0);
var G__42967 = (0);
seq__42662_42909 = G__42964;
chunk__42663_42910 = G__42965;
count__42664_42911 = G__42966;
i__42665_42912 = G__42967;
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

predict_prostate.state.run_time.route_change.pubsub$feeds$TopicFeed$subscribe$arity$2(null,(function (_,p__42790){
var vec__42791 = p__42790;
var page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42791,(0),null);
var param1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42791,(1),null);
var param2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42791,(2),null);
var rvec = vec__42791;
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
var new_lang_42978 = new cljs.core.Keyword(null,"lang","lang",-1819677104).cljs$core$IFn$_invoke$arity$1(predict_prostate.state.localStorage.get_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"en","en",88457073)], null)));
predict_prostate.state.mutations.reload_lang(cljs.core.name(new_lang_42978));

return translations.tongue_base.load_translations_STAR_(url,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(translations.tongue_base.handle_dictionary,predict_prostate.state.run_time.t_state_cursor));
}));

predict_prostate.state.run_time.edit_change.pubsub$feeds$TopicFeed$subscribe$arity$2(null,(function (_,arg){
var text = (function (){var fexpr__42794 = cljs.core.deref(predict_prostate.state.run_time.ttt_cursor);
return (fexpr__42794.cljs$core$IFn$_invoke$arity$1 ? fexpr__42794.cljs$core$IFn$_invoke$arity$1(arg) : fexpr__42794.call(null,arg));
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(predict_prostate.state.run_time.edit_cursor,cljs.core.assoc,new cljs.core.Keyword(null,"edit-arg","edit-arg",1216866257),arg,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"edit-key","edit-key",-1833788727),((((cljs.core.vector_QMARK_(arg)) && ((cljs.core.count(arg) > (0)))))?cljs.core.first(arg):arg),new cljs.core.Keyword(null,"text","text",-1790561697),((((cljs.core.vector_QMARK_(arg)) && ((cljs.core.count(arg) > (1)))))?cljs.core.second(arg):text)], 0));

return $("#editorModal").modal("show");
}));

predict_prostate.state.run_time.new_text_change.pubsub$feeds$TopicFeed$subscribe$arity$2(null,(function (_,p__42795){
var vec__42796 = p__42795;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42796,(0),null);
var new_text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42796,(1),null);
return cljs.core.reset_BANG_(predict_prostate.state.run_time.new_text_cursor,new_text);
}));

predict_prostate.state.run_time.text_change.pubsub$feeds$TopicFeed$subscribe$arity$2(null,(function (_,p__42800){
var vec__42801 = p__42800;
var edit_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42801,(0),null);
var new_text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42801,(1),null);
var lang = new cljs.core.Keyword(null,"lang","lang",-1819677104).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(predict_prostate.state.run_time.t_state_cursor));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(predict_prostate.state.run_time.t_state_cursor,translations.tongue_base.process_dict_op,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"upsert","upsert",1416724984),new cljs.core.Keyword(null,"lang","lang",-1819677104).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(predict_prostate.state.run_time.t_state_cursor)),cljs.core.PersistentArrayMap.createAsIfByAssoc([edit_key,new_text])], null));

cljs.core.reset_BANG_(predict_prostate.state.run_time.new_text_cursor,null);

return translations.tranny_api.upload_translation.cljs$core$IFn$_invoke$arity$3(edit_key,cljs.core.name(lang),new_text);
}));

predict_prostate.state.run_time.add_language_modal.pubsub$feeds$TopicFeed$subscribe$arity$2(null,(function (_){
return $("#newLanguageModal").modal("show");
}));

predict_prostate.state.run_time.add_language.pubsub$feeds$TopicFeed$subscribe$arity$2(null,(function (_,p__42804){
var vec__42805 = p__42804;
var new_lang = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42805,(0),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(new_lang))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(predict_prostate.state.run_time.t_state_cursor,cljs.core.update,new cljs.core.Keyword(null,"languages","languages",1471910331),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(new_lang)], 0));
} else {
return null;
}
}));

return predict_prostate.state.mutations.clear_inputs();
});

//# sourceMappingURL=predict_prostate.state.mutations.js.map
