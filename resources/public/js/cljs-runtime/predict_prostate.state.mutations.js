goog.provide('predict_prostate.state.mutations');
predict_prostate.state.mutations.paq = window._paq;
/**
 * Send an event to matemo. 
 */
predict_prostate.state.mutations.matomo_track = (function predict_prostate$state$mutations$matomo_track(var_args){
var G__55427 = arguments.length;
switch (G__55427) {
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
var seq__55447_55927 = cljs.core.seq(predict_prostate.state.run_time.input_changes());
var chunk__55451_55928 = null;
var count__55452_55929 = (0);
var i__55453_55930 = (0);
while(true){
if((i__55453_55930 < count__55452_55929)){
var vec__55494_55931 = chunk__55451_55928.cljs$core$IIndexed$_nth$arity$2(null,i__55453_55930);
var key_55932 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55494_55931,(0),null);
var topic_55933 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55494_55931,(1),null);
if(cljs.core.truth_(key_55932)){
if(cljs.core.truth_(topic_55933)){

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_55932,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355))){
var map__55499_55934 = predict_prostate.state.localStorage.get_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),new cljs.core.Keyword(null,"line2","line2",-1975668782)], null));
var map__55499_55935__$1 = cljs.core.__destructure_map(map__55499_55934);
var plot_style_55936 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55499_55935__$1,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355));
if(cljs.core.truth_((function (){var fexpr__55501 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"area1","area1",-316994623),null,new cljs.core.Keyword(null,"line2","line2",-1975668782),null], null), null);
return (fexpr__55501.cljs$core$IFn$_invoke$arity$1 ? fexpr__55501.cljs$core$IFn$_invoke$arity$1(plot_style_55936) : fexpr__55501.call(null,plot_style_55936));
})())){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),plot_style_55936);
} else {
predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),new cljs.core.Keyword(null,"line2","line2",-1975668782)], null));

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),new cljs.core.Keyword(null,"line2","line2",-1975668782));
}
} else {
pubsub.feeds.publish(topic_55933,(cljs.core.truth_((function (){var fexpr__55504 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"age","age",-604307804),null,new cljs.core.Keyword(null,"psa","psa",-321761459),null], null), null);
return (fexpr__55504.cljs$core$IFn$_invoke$arity$1 ? fexpr__55504.cljs$core$IFn$_invoke$arity$1(key_55932) : fexpr__55504.call(null,key_55932));
})())?"":null));

}


var G__55937 = seq__55447_55927;
var G__55938 = chunk__55451_55928;
var G__55939 = count__55452_55929;
var G__55940 = (i__55453_55930 + (1));
seq__55447_55927 = G__55937;
chunk__55451_55928 = G__55938;
count__55452_55929 = G__55939;
i__55453_55930 = G__55940;
continue;
} else {
var G__55941 = seq__55447_55927;
var G__55942 = chunk__55451_55928;
var G__55943 = count__55452_55929;
var G__55944 = (i__55453_55930 + (1));
seq__55447_55927 = G__55941;
chunk__55451_55928 = G__55942;
count__55452_55929 = G__55943;
i__55453_55930 = G__55944;
continue;
}
} else {
var G__55945 = seq__55447_55927;
var G__55946 = chunk__55451_55928;
var G__55947 = count__55452_55929;
var G__55948 = (i__55453_55930 + (1));
seq__55447_55927 = G__55945;
chunk__55451_55928 = G__55946;
count__55452_55929 = G__55947;
i__55453_55930 = G__55948;
continue;
}
} else {
var temp__5753__auto___55949 = cljs.core.seq(seq__55447_55927);
if(temp__5753__auto___55949){
var seq__55447_55950__$1 = temp__5753__auto___55949;
if(cljs.core.chunked_seq_QMARK_(seq__55447_55950__$1)){
var c__4638__auto___55951 = cljs.core.chunk_first(seq__55447_55950__$1);
var G__55952 = cljs.core.chunk_rest(seq__55447_55950__$1);
var G__55953 = c__4638__auto___55951;
var G__55954 = cljs.core.count(c__4638__auto___55951);
var G__55955 = (0);
seq__55447_55927 = G__55952;
chunk__55451_55928 = G__55953;
count__55452_55929 = G__55954;
i__55453_55930 = G__55955;
continue;
} else {
var vec__55512_55956 = cljs.core.first(seq__55447_55950__$1);
var key_55957 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55512_55956,(0),null);
var topic_55958 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55512_55956,(1),null);
if(cljs.core.truth_(key_55957)){
if(cljs.core.truth_(topic_55958)){

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_55957,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355))){
var map__55517_55959 = predict_prostate.state.localStorage.get_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),new cljs.core.Keyword(null,"line2","line2",-1975668782)], null));
var map__55517_55960__$1 = cljs.core.__destructure_map(map__55517_55959);
var plot_style_55961 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55517_55960__$1,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355));
if(cljs.core.truth_((function (){var fexpr__55519 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"area1","area1",-316994623),null,new cljs.core.Keyword(null,"line2","line2",-1975668782),null], null), null);
return (fexpr__55519.cljs$core$IFn$_invoke$arity$1 ? fexpr__55519.cljs$core$IFn$_invoke$arity$1(plot_style_55961) : fexpr__55519.call(null,plot_style_55961));
})())){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),plot_style_55961);
} else {
predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),new cljs.core.Keyword(null,"line2","line2",-1975668782)], null));

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),new cljs.core.Keyword(null,"line2","line2",-1975668782));
}
} else {
pubsub.feeds.publish(topic_55958,(cljs.core.truth_((function (){var fexpr__55522 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"age","age",-604307804),null,new cljs.core.Keyword(null,"psa","psa",-321761459),null], null), null);
return (fexpr__55522.cljs$core$IFn$_invoke$arity$1 ? fexpr__55522.cljs$core$IFn$_invoke$arity$1(key_55957) : fexpr__55522.call(null,key_55957));
})())?"":null));

}


var G__55964 = cljs.core.next(seq__55447_55950__$1);
var G__55965 = null;
var G__55966 = (0);
var G__55967 = (0);
seq__55447_55927 = G__55964;
chunk__55451_55928 = G__55965;
count__55452_55929 = G__55966;
i__55453_55930 = G__55967;
continue;
} else {
var G__55968 = cljs.core.next(seq__55447_55950__$1);
var G__55969 = null;
var G__55970 = (0);
var G__55971 = (0);
seq__55447_55927 = G__55968;
chunk__55451_55928 = G__55969;
count__55452_55929 = G__55970;
i__55453_55930 = G__55971;
continue;
}
} else {
var G__55972 = cljs.core.next(seq__55447_55950__$1);
var G__55973 = null;
var G__55974 = (0);
var G__55975 = (0);
seq__55447_55927 = G__55972;
chunk__55451_55928 = G__55973;
count__55452_55929 = G__55974;
i__55453_55930 = G__55975;
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
var len__4818__auto___55976 = arguments.length;
var i__4819__auto___55978 = (0);
while(true){
if((i__4819__auto___55978 < len__4818__auto___55976)){
args__4824__auto__.push((arguments[i__4819__auto___55978]));

var G__55980 = (i__4819__auto___55978 + (1));
i__4819__auto___55978 = G__55980;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return predict_prostate.state.mutations.subscribe_to.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(predict_prostate.state.mutations.subscribe_to.cljs$core$IFn$_invoke$arity$variadic = (function (change,cursor,p__55542){
var vec__55543 = p__55542;
var silent = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55543,(0),null);
return pubsub.feeds.subscribe(change,(function (p1__55533_SHARP_,p2__55535_SHARP_){
if(cljs.core.truth_(silent)){
} else {
predict_prostate.state.mutations.log(p1__55533_SHARP_,cljs.core.deref(cursor),p2__55535_SHARP_);
}

return cljs.core.reset_BANG_(cursor,p2__55535_SHARP_);
}));
}));

(predict_prostate.state.mutations.subscribe_to.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(predict_prostate.state.mutations.subscribe_to.cljs$lang$applyTo = (function (seq55538){
var G__55539 = cljs.core.first(seq55538);
var seq55538__$1 = cljs.core.next(seq55538);
var G__55540 = cljs.core.first(seq55538__$1);
var seq55538__$2 = cljs.core.next(seq55538__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__55539,G__55540,seq55538__$2);
}));

predict_prostate.state.mutations.clip = (function predict_prostate$state$mutations$clip(p__55546){
var map__55547 = p__55546;
var map__55547__$1 = cljs.core.__destructure_map(map__55547);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55547__$1,new cljs.core.Keyword(null,"value","value",305978217));
var min = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55547__$1,new cljs.core.Keyword(null,"min","min",444991522));
var max = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55547__$1,new cljs.core.Keyword(null,"max","max",61366548));
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
var seq__55551_55981 = cljs.core.seq(predict_prostate.state.run_time.input_changes());
var chunk__55552_55982 = null;
var count__55553_55983 = (0);
var i__55554_55984 = (0);
while(true){
if((i__55554_55984 < count__55553_55983)){
var vec__55624_55985 = chunk__55552_55982.cljs$core$IIndexed$_nth$arity$2(null,i__55554_55984);
var key_55986 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55624_55985,(0),null);
var change_55987 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55624_55985,(1),null);
if(cljs.core.truth_(change_55987)){
pubsub.feeds.subscribe(change_55987,((function (seq__55551_55981,chunk__55552_55982,count__55553_55983,i__55554_55984,vec__55624_55985,key_55986,change_55987){
return (function (topic,value){
predict_prostate.state.mutations.log(topic,cljs.core.deref(predict_prostate.state.run_time.input_cursor(key_55986)),value);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666),key_55986)){
var vec__55633_55988 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(value,":");
var value_55989__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55633_55988,(0),null);
var bad_55990 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55633_55988,(1),null);
var bci_55991 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520))));
var bct_55992 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666))));
if(cljs.core.truth_(isNaN(bci_55991))){
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520)),predict_prostate.state.mutations.num_to_str((function (){var x__4295__auto__ = (1);
var y__4296__auto__ = (function (){var x__4298__auto__ = bci_55991;
var y__4299__auto__ = predict_prostate.state.mutations.str_to_num(value_55989__$1);
return ((x__4298__auto__ < y__4299__auto__) ? x__4298__auto__ : y__4299__auto__);
})();
return ((x__4295__auto__ > y__4296__auto__) ? x__4295__auto__ : y__4296__auto__);
})()));
}

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_55989__$1),(cljs.core.truth_(bad_55990)?":":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(bad_55990)].join(''));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520),key_55986)){
var vec__55661_55993 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(value,":");
var value_55994__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55661_55993,(0),null);
var bad_55995 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55661_55993,(1),null);
var bci_55996 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520))));
var bct_55997 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666))));
if(cljs.core.not(isNaN(bct_55997))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_55994__$1),(cljs.core.truth_((function (){var or__4212__auto__ = (value_55994__$1 < (0));
if(or__4212__auto__){
return or__4212__auto__;
} else {
return bad_55995;
}
})())?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_55994__$1)].join(''):"")].join(''));
} else {
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_55986,new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969)),value);

predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969),value], null));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,new cljs.core.Keyword(null,"gleason","gleason",-2044470526))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526)),cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518))));
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518)),cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526))));
}
} else {
if(cljs.core.truth_((function (){var fexpr__55803 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gleason","gleason",-2044470526),null,new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518),null], null), null);
return (fexpr__55803.cljs$core$IFn$_invoke$arity$1 ? fexpr__55803.cljs$core$IFn$_invoke$arity$1(key_55986) : fexpr__55803.call(null,key_55986));
})())){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526)),value);

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518)),value);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_55986,new cljs.core.Keyword(null,"h-admissions","h-admissions",-1503094844))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"h-admissions","h-admissions",-1503094844)),value);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,(0))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"charlson-comorbidity","charlson-comorbidity",-633596907)),null);
} else {
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_55986,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),value);

predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),value], null));
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(key_55986),(((value == null))?predict_prostate.state.config.get_input_default(predict_prostate.state.config.input_groups,key_55986):value));

}
}
}
}
}
}

return predict_prostate.models.runner.recalculate_model.cljs$core$IFn$_invoke$arity$2(predict_prostate.state.run_time.input_map(),predict_prostate.state.run_time.N);
});})(seq__55551_55981,chunk__55552_55982,count__55553_55983,i__55554_55984,vec__55624_55985,key_55986,change_55987))
);
} else {
}


var G__56003 = seq__55551_55981;
var G__56004 = chunk__55552_55982;
var G__56005 = count__55553_55983;
var G__56006 = (i__55554_55984 + (1));
seq__55551_55981 = G__56003;
chunk__55552_55982 = G__56004;
count__55553_55983 = G__56005;
i__55554_55984 = G__56006;
continue;
} else {
var temp__5753__auto___56007 = cljs.core.seq(seq__55551_55981);
if(temp__5753__auto___56007){
var seq__55551_56008__$1 = temp__5753__auto___56007;
if(cljs.core.chunked_seq_QMARK_(seq__55551_56008__$1)){
var c__4638__auto___56009 = cljs.core.chunk_first(seq__55551_56008__$1);
var G__56010 = cljs.core.chunk_rest(seq__55551_56008__$1);
var G__56011 = c__4638__auto___56009;
var G__56012 = cljs.core.count(c__4638__auto___56009);
var G__56013 = (0);
seq__55551_55981 = G__56010;
chunk__55552_55982 = G__56011;
count__55553_55983 = G__56012;
i__55554_55984 = G__56013;
continue;
} else {
var vec__55872_56014 = cljs.core.first(seq__55551_56008__$1);
var key_56015 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55872_56014,(0),null);
var change_56016 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55872_56014,(1),null);
if(cljs.core.truth_(change_56016)){
pubsub.feeds.subscribe(change_56016,((function (seq__55551_55981,chunk__55552_55982,count__55553_55983,i__55554_55984,vec__55872_56014,key_56015,change_56016,seq__55551_56008__$1,temp__5753__auto___56007){
return (function (topic,value){
predict_prostate.state.mutations.log(topic,cljs.core.deref(predict_prostate.state.run_time.input_cursor(key_56015)),value);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666),key_56015)){
var vec__55881_56020 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(value,":");
var value_56021__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55881_56020,(0),null);
var bad_56022 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55881_56020,(1),null);
var bci_56023 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520))));
var bct_56024 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666))));
if(cljs.core.truth_(isNaN(bci_56023))){
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520)),predict_prostate.state.mutations.num_to_str((function (){var x__4295__auto__ = (1);
var y__4296__auto__ = (function (){var x__4298__auto__ = bci_56023;
var y__4299__auto__ = predict_prostate.state.mutations.str_to_num(value_56021__$1);
return ((x__4298__auto__ < y__4299__auto__) ? x__4298__auto__ : y__4299__auto__);
})();
return ((x__4295__auto__ > y__4296__auto__) ? x__4295__auto__ : y__4296__auto__);
})()));
}

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_56021__$1),(cljs.core.truth_(bad_56022)?":":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(bad_56022)].join(''));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520),key_56015)){
var vec__55897_56032 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(value,":");
var value_56033__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55897_56032,(0),null);
var bad_56034 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55897_56032,(1),null);
var bci_56035 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520))));
var bct_56036 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666))));
if(cljs.core.not(isNaN(bct_56036))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_56033__$1),(cljs.core.truth_((function (){var or__4212__auto__ = (value_56033__$1 < (0));
if(or__4212__auto__){
return or__4212__auto__;
} else {
return bad_56034;
}
})())?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_56033__$1)].join(''):"")].join(''));
} else {
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_56015,new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969)),value);

predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969),value], null));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,new cljs.core.Keyword(null,"gleason","gleason",-2044470526))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526)),cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518))));
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518)),cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526))));
}
} else {
if(cljs.core.truth_((function (){var fexpr__55905 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gleason","gleason",-2044470526),null,new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518),null], null), null);
return (fexpr__55905.cljs$core$IFn$_invoke$arity$1 ? fexpr__55905.cljs$core$IFn$_invoke$arity$1(key_56015) : fexpr__55905.call(null,key_56015));
})())){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526)),value);

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518)),value);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_56015,new cljs.core.Keyword(null,"h-admissions","h-admissions",-1503094844))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"h-admissions","h-admissions",-1503094844)),value);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,(0))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"charlson-comorbidity","charlson-comorbidity",-633596907)),null);
} else {
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_56015,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),value);

predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),value], null));
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(key_56015),(((value == null))?predict_prostate.state.config.get_input_default(predict_prostate.state.config.input_groups,key_56015):value));

}
}
}
}
}
}

return predict_prostate.models.runner.recalculate_model.cljs$core$IFn$_invoke$arity$2(predict_prostate.state.run_time.input_map(),predict_prostate.state.run_time.N);
});})(seq__55551_55981,chunk__55552_55982,count__55553_55983,i__55554_55984,vec__55872_56014,key_56015,change_56016,seq__55551_56008__$1,temp__5753__auto___56007))
);
} else {
}


var G__56047 = cljs.core.next(seq__55551_56008__$1);
var G__56048 = null;
var G__56049 = (0);
var G__56050 = (0);
seq__55551_55981 = G__56047;
chunk__55552_55982 = G__56048;
count__55553_55983 = G__56049;
i__55554_55984 = G__56050;
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

predict_prostate.state.run_time.route_change.pubsub$feeds$TopicFeed$subscribe$arity$2(null,(function (_,p__55909){
var vec__55910 = p__55909;
var page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55910,(0),null);
var param1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55910,(1),null);
var param2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55910,(2),null);
var rvec = vec__55910;
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
var new_lang_56060 = new cljs.core.Keyword(null,"lang","lang",-1819677104).cljs$core$IFn$_invoke$arity$1(predict_prostate.state.localStorage.get_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"en","en",88457073)], null)));
predict_prostate.state.mutations.reload_lang(cljs.core.name(new_lang_56060));

return translations.tongue_base.load_translations_STAR_(url,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(translations.tongue_base.handle_dictionary,predict_prostate.state.run_time.t_state_cursor));
}));

predict_prostate.state.run_time.edit_change.pubsub$feeds$TopicFeed$subscribe$arity$2(null,(function (_,arg){
var text = (function (){var fexpr__55913 = cljs.core.deref(predict_prostate.state.run_time.ttt_cursor);
return (fexpr__55913.cljs$core$IFn$_invoke$arity$1 ? fexpr__55913.cljs$core$IFn$_invoke$arity$1(arg) : fexpr__55913.call(null,arg));
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(predict_prostate.state.run_time.edit_cursor,cljs.core.assoc,new cljs.core.Keyword(null,"edit-arg","edit-arg",1216866257),arg,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"edit-key","edit-key",-1833788727),((((cljs.core.vector_QMARK_(arg)) && ((cljs.core.count(arg) > (0)))))?cljs.core.first(arg):arg),new cljs.core.Keyword(null,"text","text",-1790561697),((((cljs.core.vector_QMARK_(arg)) && ((cljs.core.count(arg) > (1)))))?cljs.core.second(arg):text)], 0));

return $("#editorModal").modal("show");
}));

predict_prostate.state.run_time.new_text_change.pubsub$feeds$TopicFeed$subscribe$arity$2(null,(function (_,p__55914){
var vec__55915 = p__55914;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55915,(0),null);
var new_text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55915,(1),null);
return cljs.core.reset_BANG_(predict_prostate.state.run_time.new_text_cursor,new_text);
}));

predict_prostate.state.run_time.text_change.pubsub$feeds$TopicFeed$subscribe$arity$2(null,(function (_,p__55918){
var vec__55919 = p__55918;
var edit_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55919,(0),null);
var new_text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55919,(1),null);
var lang = new cljs.core.Keyword(null,"lang","lang",-1819677104).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(predict_prostate.state.run_time.t_state_cursor));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(predict_prostate.state.run_time.t_state_cursor,translations.tongue_base.process_dict_op,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"upsert","upsert",1416724984),new cljs.core.Keyword(null,"lang","lang",-1819677104).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(predict_prostate.state.run_time.t_state_cursor)),cljs.core.PersistentArrayMap.createAsIfByAssoc([edit_key,new_text])], null));

cljs.core.reset_BANG_(predict_prostate.state.run_time.new_text_cursor,null);

return translations.tranny_api.upload_translation.cljs$core$IFn$_invoke$arity$3(edit_key,cljs.core.name(lang),new_text);
}));

predict_prostate.state.run_time.add_language_modal.pubsub$feeds$TopicFeed$subscribe$arity$2(null,(function (_){
return $("#newLanguageModal").modal("show");
}));

predict_prostate.state.run_time.add_language.pubsub$feeds$TopicFeed$subscribe$arity$2(null,(function (_,p__55922){
var vec__55923 = p__55922;
var new_lang = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55923,(0),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(new_lang))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(predict_prostate.state.run_time.t_state_cursor,cljs.core.update,new cljs.core.Keyword(null,"languages","languages",1471910331),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(new_lang)], 0));
} else {
return null;
}
}));

return predict_prostate.state.mutations.clear_inputs();
});

//# sourceMappingURL=predict_prostate.state.mutations.js.map
