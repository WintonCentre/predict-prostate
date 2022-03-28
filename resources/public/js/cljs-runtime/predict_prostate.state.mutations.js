goog.provide('predict_prostate.state.mutations');
predict_prostate.state.mutations.paq = window._paq;
/**
 * Send an event to matemo. 
 */
predict_prostate.state.mutations.matomo_track = (function predict_prostate$state$mutations$matomo_track(var_args){
var G__43697 = arguments.length;
switch (G__43697) {
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
var seq__43699_43868 = cljs.core.seq(predict_prostate.state.run_time.input_changes());
var chunk__43702_43869 = null;
var count__43703_43870 = (0);
var i__43704_43871 = (0);
while(true){
if((i__43704_43871 < count__43703_43870)){
var vec__43720_43872 = chunk__43702_43869.cljs$core$IIndexed$_nth$arity$2(null,i__43704_43871);
var key_43873 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43720_43872,(0),null);
var topic_43874 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43720_43872,(1),null);
if(cljs.core.truth_(key_43873)){
if(cljs.core.truth_(topic_43874)){

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_43873,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355))){
var map__43723_43875 = predict_prostate.state.localStorage.get_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),new cljs.core.Keyword(null,"line2","line2",-1975668782)], null));
var map__43723_43876__$1 = cljs.core.__destructure_map(map__43723_43875);
var plot_style_43877 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43723_43876__$1,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355));
if(cljs.core.truth_((function (){var fexpr__43724 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"area1","area1",-316994623),null,new cljs.core.Keyword(null,"line2","line2",-1975668782),null], null), null);
return (fexpr__43724.cljs$core$IFn$_invoke$arity$1 ? fexpr__43724.cljs$core$IFn$_invoke$arity$1(plot_style_43877) : fexpr__43724.call(null,plot_style_43877));
})())){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),plot_style_43877);
} else {
predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),new cljs.core.Keyword(null,"line2","line2",-1975668782)], null));

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),new cljs.core.Keyword(null,"line2","line2",-1975668782));
}
} else {
pubsub.feeds.publish(topic_43874,(cljs.core.truth_((function (){var fexpr__43726 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"age","age",-604307804),null,new cljs.core.Keyword(null,"psa","psa",-321761459),null], null), null);
return (fexpr__43726.cljs$core$IFn$_invoke$arity$1 ? fexpr__43726.cljs$core$IFn$_invoke$arity$1(key_43873) : fexpr__43726.call(null,key_43873));
})())?"":null));

}


var G__43879 = seq__43699_43868;
var G__43880 = chunk__43702_43869;
var G__43881 = count__43703_43870;
var G__43882 = (i__43704_43871 + (1));
seq__43699_43868 = G__43879;
chunk__43702_43869 = G__43880;
count__43703_43870 = G__43881;
i__43704_43871 = G__43882;
continue;
} else {
var G__43884 = seq__43699_43868;
var G__43885 = chunk__43702_43869;
var G__43886 = count__43703_43870;
var G__43887 = (i__43704_43871 + (1));
seq__43699_43868 = G__43884;
chunk__43702_43869 = G__43885;
count__43703_43870 = G__43886;
i__43704_43871 = G__43887;
continue;
}
} else {
var G__43888 = seq__43699_43868;
var G__43889 = chunk__43702_43869;
var G__43890 = count__43703_43870;
var G__43891 = (i__43704_43871 + (1));
seq__43699_43868 = G__43888;
chunk__43702_43869 = G__43889;
count__43703_43870 = G__43890;
i__43704_43871 = G__43891;
continue;
}
} else {
var temp__5753__auto___43893 = cljs.core.seq(seq__43699_43868);
if(temp__5753__auto___43893){
var seq__43699_43894__$1 = temp__5753__auto___43893;
if(cljs.core.chunked_seq_QMARK_(seq__43699_43894__$1)){
var c__4638__auto___43895 = cljs.core.chunk_first(seq__43699_43894__$1);
var G__43896 = cljs.core.chunk_rest(seq__43699_43894__$1);
var G__43897 = c__4638__auto___43895;
var G__43898 = cljs.core.count(c__4638__auto___43895);
var G__43899 = (0);
seq__43699_43868 = G__43896;
chunk__43702_43869 = G__43897;
count__43703_43870 = G__43898;
i__43704_43871 = G__43899;
continue;
} else {
var vec__43727_43901 = cljs.core.first(seq__43699_43894__$1);
var key_43902 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43727_43901,(0),null);
var topic_43903 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43727_43901,(1),null);
if(cljs.core.truth_(key_43902)){
if(cljs.core.truth_(topic_43903)){

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_43902,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355))){
var map__43730_43905 = predict_prostate.state.localStorage.get_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),new cljs.core.Keyword(null,"line2","line2",-1975668782)], null));
var map__43730_43906__$1 = cljs.core.__destructure_map(map__43730_43905);
var plot_style_43907 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43730_43906__$1,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355));
if(cljs.core.truth_((function (){var fexpr__43731 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"area1","area1",-316994623),null,new cljs.core.Keyword(null,"line2","line2",-1975668782),null], null), null);
return (fexpr__43731.cljs$core$IFn$_invoke$arity$1 ? fexpr__43731.cljs$core$IFn$_invoke$arity$1(plot_style_43907) : fexpr__43731.call(null,plot_style_43907));
})())){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),plot_style_43907);
} else {
predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),new cljs.core.Keyword(null,"line2","line2",-1975668782)], null));

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),new cljs.core.Keyword(null,"line2","line2",-1975668782));
}
} else {
pubsub.feeds.publish(topic_43903,(cljs.core.truth_((function (){var fexpr__43732 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"age","age",-604307804),null,new cljs.core.Keyword(null,"psa","psa",-321761459),null], null), null);
return (fexpr__43732.cljs$core$IFn$_invoke$arity$1 ? fexpr__43732.cljs$core$IFn$_invoke$arity$1(key_43902) : fexpr__43732.call(null,key_43902));
})())?"":null));

}


var G__43913 = cljs.core.next(seq__43699_43894__$1);
var G__43914 = null;
var G__43915 = (0);
var G__43916 = (0);
seq__43699_43868 = G__43913;
chunk__43702_43869 = G__43914;
count__43703_43870 = G__43915;
i__43704_43871 = G__43916;
continue;
} else {
var G__43917 = cljs.core.next(seq__43699_43894__$1);
var G__43918 = null;
var G__43919 = (0);
var G__43920 = (0);
seq__43699_43868 = G__43917;
chunk__43702_43869 = G__43918;
count__43703_43870 = G__43919;
i__43704_43871 = G__43920;
continue;
}
} else {
var G__43922 = cljs.core.next(seq__43699_43894__$1);
var G__43923 = null;
var G__43924 = (0);
var G__43925 = (0);
seq__43699_43868 = G__43922;
chunk__43702_43869 = G__43923;
count__43703_43870 = G__43924;
i__43704_43871 = G__43925;
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
var len__4818__auto___43929 = arguments.length;
var i__4819__auto___43930 = (0);
while(true){
if((i__4819__auto___43930 < len__4818__auto___43929)){
args__4824__auto__.push((arguments[i__4819__auto___43930]));

var G__43931 = (i__4819__auto___43930 + (1));
i__4819__auto___43930 = G__43931;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return predict_prostate.state.mutations.subscribe_to.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(predict_prostate.state.mutations.subscribe_to.cljs$core$IFn$_invoke$arity$variadic = (function (change,cursor,p__43738){
var vec__43739 = p__43738;
var silent = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43739,(0),null);
return pubsub.feeds.subscribe(change,(function (p1__43733_SHARP_,p2__43734_SHARP_){
if(cljs.core.truth_(silent)){
} else {
predict_prostate.state.mutations.log(p1__43733_SHARP_,cljs.core.deref(cursor),p2__43734_SHARP_);
}

return cljs.core.reset_BANG_(cursor,p2__43734_SHARP_);
}));
}));

(predict_prostate.state.mutations.subscribe_to.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(predict_prostate.state.mutations.subscribe_to.cljs$lang$applyTo = (function (seq43735){
var G__43736 = cljs.core.first(seq43735);
var seq43735__$1 = cljs.core.next(seq43735);
var G__43737 = cljs.core.first(seq43735__$1);
var seq43735__$2 = cljs.core.next(seq43735__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43736,G__43737,seq43735__$2);
}));

predict_prostate.state.mutations.clip = (function predict_prostate$state$mutations$clip(p__43742){
var map__43743 = p__43742;
var map__43743__$1 = cljs.core.__destructure_map(map__43743);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43743__$1,new cljs.core.Keyword(null,"value","value",305978217));
var min = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43743__$1,new cljs.core.Keyword(null,"min","min",444991522));
var max = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43743__$1,new cljs.core.Keyword(null,"max","max",61366548));
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
var seq__43746_43939 = cljs.core.seq(predict_prostate.state.run_time.input_changes());
var chunk__43747_43940 = null;
var count__43748_43941 = (0);
var i__43749_43943 = (0);
while(true){
if((i__43749_43943 < count__43748_43941)){
var vec__43787_43945 = chunk__43747_43940.cljs$core$IIndexed$_nth$arity$2(null,i__43749_43943);
var key_43946 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43787_43945,(0),null);
var change_43947 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43787_43945,(1),null);
if(cljs.core.truth_(change_43947)){
pubsub.feeds.subscribe(change_43947,((function (seq__43746_43939,chunk__43747_43940,count__43748_43941,i__43749_43943,vec__43787_43945,key_43946,change_43947){
return (function (topic,value){
predict_prostate.state.mutations.log(topic,cljs.core.deref(predict_prostate.state.run_time.input_cursor(key_43946)),value);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666),key_43946)){
var vec__43790_43948 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(value,":");
var value_43949__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43790_43948,(0),null);
var bad_43950 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43790_43948,(1),null);
var bci_43951 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520))));
var bct_43952 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666))));
if(cljs.core.truth_(isNaN(bci_43951))){
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520)),predict_prostate.state.mutations.num_to_str((function (){var x__4295__auto__ = (1);
var y__4296__auto__ = (function (){var x__4298__auto__ = bci_43951;
var y__4299__auto__ = predict_prostate.state.mutations.str_to_num(value_43949__$1);
return ((x__4298__auto__ < y__4299__auto__) ? x__4298__auto__ : y__4299__auto__);
})();
return ((x__4295__auto__ > y__4296__auto__) ? x__4295__auto__ : y__4296__auto__);
})()));
}

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_43949__$1),(cljs.core.truth_(bad_43950)?":":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(bad_43950)].join(''));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520),key_43946)){
var vec__43793_43958 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(value,":");
var value_43959__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43793_43958,(0),null);
var bad_43960 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43793_43958,(1),null);
var bci_43961 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520))));
var bct_43962 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666))));
if(cljs.core.not(isNaN(bct_43962))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_43959__$1),(cljs.core.truth_((function (){var or__4212__auto__ = (value_43959__$1 < (0));
if(or__4212__auto__){
return or__4212__auto__;
} else {
return bad_43960;
}
})())?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_43959__$1)].join(''):"")].join(''));
} else {
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_43946,new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969)),value);

predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969),value], null));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,new cljs.core.Keyword(null,"gleason","gleason",-2044470526))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526)),cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518))));
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518)),cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526))));
}
} else {
if(cljs.core.truth_((function (){var fexpr__43796 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gleason","gleason",-2044470526),null,new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518),null], null), null);
return (fexpr__43796.cljs$core$IFn$_invoke$arity$1 ? fexpr__43796.cljs$core$IFn$_invoke$arity$1(key_43946) : fexpr__43796.call(null,key_43946));
})())){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526)),value);

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518)),value);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_43946,new cljs.core.Keyword(null,"h-admissions","h-admissions",-1503094844))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"h-admissions","h-admissions",-1503094844)),value);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,(0))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"charlson-comorbidity","charlson-comorbidity",-633596907)),null);
} else {
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_43946,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),value);

predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),value], null));
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(key_43946),(((value == null))?predict_prostate.state.config.get_input_default(predict_prostate.state.config.input_groups,key_43946):value));

}
}
}
}
}
}

return predict_prostate.models.runner.recalculate_model.cljs$core$IFn$_invoke$arity$2(predict_prostate.state.run_time.input_map(),predict_prostate.state.run_time.N);
});})(seq__43746_43939,chunk__43747_43940,count__43748_43941,i__43749_43943,vec__43787_43945,key_43946,change_43947))
);
} else {
}


var G__43966 = seq__43746_43939;
var G__43967 = chunk__43747_43940;
var G__43968 = count__43748_43941;
var G__43969 = (i__43749_43943 + (1));
seq__43746_43939 = G__43966;
chunk__43747_43940 = G__43967;
count__43748_43941 = G__43968;
i__43749_43943 = G__43969;
continue;
} else {
var temp__5753__auto___43970 = cljs.core.seq(seq__43746_43939);
if(temp__5753__auto___43970){
var seq__43746_43972__$1 = temp__5753__auto___43970;
if(cljs.core.chunked_seq_QMARK_(seq__43746_43972__$1)){
var c__4638__auto___43973 = cljs.core.chunk_first(seq__43746_43972__$1);
var G__43974 = cljs.core.chunk_rest(seq__43746_43972__$1);
var G__43975 = c__4638__auto___43973;
var G__43976 = cljs.core.count(c__4638__auto___43973);
var G__43977 = (0);
seq__43746_43939 = G__43974;
chunk__43747_43940 = G__43975;
count__43748_43941 = G__43976;
i__43749_43943 = G__43977;
continue;
} else {
var vec__43803_43978 = cljs.core.first(seq__43746_43972__$1);
var key_43979 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43803_43978,(0),null);
var change_43980 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43803_43978,(1),null);
if(cljs.core.truth_(change_43980)){
pubsub.feeds.subscribe(change_43980,((function (seq__43746_43939,chunk__43747_43940,count__43748_43941,i__43749_43943,vec__43803_43978,key_43979,change_43980,seq__43746_43972__$1,temp__5753__auto___43970){
return (function (topic,value){
predict_prostate.state.mutations.log(topic,cljs.core.deref(predict_prostate.state.run_time.input_cursor(key_43979)),value);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666),key_43979)){
var vec__43806_43981 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(value,":");
var value_43982__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43806_43981,(0),null);
var bad_43983 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43806_43981,(1),null);
var bci_43984 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520))));
var bct_43985 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666))));
if(cljs.core.truth_(isNaN(bci_43984))){
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520)),predict_prostate.state.mutations.num_to_str((function (){var x__4295__auto__ = (1);
var y__4296__auto__ = (function (){var x__4298__auto__ = bci_43984;
var y__4299__auto__ = predict_prostate.state.mutations.str_to_num(value_43982__$1);
return ((x__4298__auto__ < y__4299__auto__) ? x__4298__auto__ : y__4299__auto__);
})();
return ((x__4295__auto__ > y__4296__auto__) ? x__4295__auto__ : y__4296__auto__);
})()));
}

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_43982__$1),(cljs.core.truth_(bad_43983)?":":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(bad_43983)].join(''));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520),key_43979)){
var vec__43809_43994 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(value,":");
var value_43995__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43809_43994,(0),null);
var bad_43996 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43809_43994,(1),null);
var bci_43997 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520))));
var bct_43998 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666))));
if(cljs.core.not(isNaN(bct_43998))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_43995__$1),(cljs.core.truth_((function (){var or__4212__auto__ = (value_43995__$1 < (0));
if(or__4212__auto__){
return or__4212__auto__;
} else {
return bad_43996;
}
})())?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_43995__$1)].join(''):"")].join(''));
} else {
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_43979,new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969)),value);

predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969),value], null));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,new cljs.core.Keyword(null,"gleason","gleason",-2044470526))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526)),cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518))));
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518)),cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526))));
}
} else {
if(cljs.core.truth_((function (){var fexpr__43814 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gleason","gleason",-2044470526),null,new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518),null], null), null);
return (fexpr__43814.cljs$core$IFn$_invoke$arity$1 ? fexpr__43814.cljs$core$IFn$_invoke$arity$1(key_43979) : fexpr__43814.call(null,key_43979));
})())){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526)),value);

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518)),value);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_43979,new cljs.core.Keyword(null,"h-admissions","h-admissions",-1503094844))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"h-admissions","h-admissions",-1503094844)),value);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,(0))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"charlson-comorbidity","charlson-comorbidity",-633596907)),null);
} else {
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_43979,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),value);

predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),value], null));
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(key_43979),(((value == null))?predict_prostate.state.config.get_input_default(predict_prostate.state.config.input_groups,key_43979):value));

}
}
}
}
}
}

return predict_prostate.models.runner.recalculate_model.cljs$core$IFn$_invoke$arity$2(predict_prostate.state.run_time.input_map(),predict_prostate.state.run_time.N);
});})(seq__43746_43939,chunk__43747_43940,count__43748_43941,i__43749_43943,vec__43803_43978,key_43979,change_43980,seq__43746_43972__$1,temp__5753__auto___43970))
);
} else {
}


var G__44006 = cljs.core.next(seq__43746_43972__$1);
var G__44007 = null;
var G__44008 = (0);
var G__44009 = (0);
seq__43746_43939 = G__44006;
chunk__43747_43940 = G__44007;
count__43748_43941 = G__44008;
i__43749_43943 = G__44009;
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

predict_prostate.state.run_time.route_change.pubsub$feeds$TopicFeed$subscribe$arity$2(null,(function (_,p__43822){
var vec__43823 = p__43822;
var page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43823,(0),null);
var param1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43823,(1),null);
var param2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43823,(2),null);
var rvec = vec__43823;
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
var new_lang_44016 = new cljs.core.Keyword(null,"lang","lang",-1819677104).cljs$core$IFn$_invoke$arity$1(predict_prostate.state.localStorage.get_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"en","en",88457073)], null)));
predict_prostate.state.mutations.reload_lang(cljs.core.name(new_lang_44016));

return translations.tongue_base.load_translations_STAR_(url,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(translations.tongue_base.handle_dictionary,predict_prostate.state.run_time.t_state_cursor));
}));

predict_prostate.state.run_time.edit_change.pubsub$feeds$TopicFeed$subscribe$arity$2(null,(function (_,arg){
var text = (function (){var fexpr__43826 = cljs.core.deref(predict_prostate.state.run_time.ttt_cursor);
return (fexpr__43826.cljs$core$IFn$_invoke$arity$1 ? fexpr__43826.cljs$core$IFn$_invoke$arity$1(arg) : fexpr__43826.call(null,arg));
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(predict_prostate.state.run_time.edit_cursor,cljs.core.assoc,new cljs.core.Keyword(null,"edit-arg","edit-arg",1216866257),arg,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"edit-key","edit-key",-1833788727),((((cljs.core.vector_QMARK_(arg)) && ((cljs.core.count(arg) > (0)))))?cljs.core.first(arg):arg),new cljs.core.Keyword(null,"text","text",-1790561697),((((cljs.core.vector_QMARK_(arg)) && ((cljs.core.count(arg) > (1)))))?cljs.core.second(arg):text)], 0));

return $("#editorModal").modal("show");
}));

predict_prostate.state.run_time.new_text_change.pubsub$feeds$TopicFeed$subscribe$arity$2(null,(function (_,p__43827){
var vec__43828 = p__43827;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43828,(0),null);
var new_text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43828,(1),null);
return cljs.core.reset_BANG_(predict_prostate.state.run_time.new_text_cursor,new_text);
}));

predict_prostate.state.run_time.text_change.pubsub$feeds$TopicFeed$subscribe$arity$2(null,(function (_,p__43833){
var vec__43836 = p__43833;
var edit_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43836,(0),null);
var new_text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43836,(1),null);
var lang = new cljs.core.Keyword(null,"lang","lang",-1819677104).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(predict_prostate.state.run_time.t_state_cursor));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(predict_prostate.state.run_time.t_state_cursor,translations.tongue_base.process_dict_op,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"upsert","upsert",1416724984),new cljs.core.Keyword(null,"lang","lang",-1819677104).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(predict_prostate.state.run_time.t_state_cursor)),cljs.core.PersistentArrayMap.createAsIfByAssoc([edit_key,new_text])], null));

cljs.core.reset_BANG_(predict_prostate.state.run_time.new_text_cursor,null);

return translations.tranny_api.upload_translation.cljs$core$IFn$_invoke$arity$3(edit_key,cljs.core.name(lang),new_text);
}));

predict_prostate.state.run_time.add_language_modal.pubsub$feeds$TopicFeed$subscribe$arity$2(null,(function (_){
return $("#newLanguageModal").modal("show");
}));

predict_prostate.state.run_time.add_language.pubsub$feeds$TopicFeed$subscribe$arity$2(null,(function (_,p__43852){
var vec__43854 = p__43852;
var new_lang = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43854,(0),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(new_lang))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(predict_prostate.state.run_time.t_state_cursor,cljs.core.update,new cljs.core.Keyword(null,"languages","languages",1471910331),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(new_lang)], 0));
} else {
return null;
}
}));

return predict_prostate.state.mutations.clear_inputs();
});

//# sourceMappingURL=predict_prostate.state.mutations.js.map
