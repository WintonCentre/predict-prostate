goog.provide('predict_prostate.state.mutations');
predict_prostate.state.mutations.paq = window._paq;
/**
 * Send an event to matemo. 
 */
predict_prostate.state.mutations.matomo_track = (function predict_prostate$state$mutations$matomo_track(var_args){
var G__44655 = arguments.length;
switch (G__44655) {
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
var seq__44660_44999 = cljs.core.seq(predict_prostate.state.run_time.input_changes());
var chunk__44663_45000 = null;
var count__44664_45001 = (0);
var i__44665_45002 = (0);
while(true){
if((i__44665_45002 < count__44664_45001)){
var vec__44682_45004 = chunk__44663_45000.cljs$core$IIndexed$_nth$arity$2(null,i__44665_45002);
var key_45005 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44682_45004,(0),null);
var topic_45006 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44682_45004,(1),null);
if(cljs.core.truth_(key_45005)){
if(cljs.core.truth_(topic_45006)){

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_45005,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355))){
var map__44685_45009 = predict_prostate.state.localStorage.get_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),new cljs.core.Keyword(null,"line2","line2",-1975668782)], null));
var map__44685_45010__$1 = cljs.core.__destructure_map(map__44685_45009);
var plot_style_45011 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44685_45010__$1,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355));
if(cljs.core.truth_((function (){var fexpr__44686 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"area1","area1",-316994623),null,new cljs.core.Keyword(null,"line2","line2",-1975668782),null], null), null);
return (fexpr__44686.cljs$core$IFn$_invoke$arity$1 ? fexpr__44686.cljs$core$IFn$_invoke$arity$1(plot_style_45011) : fexpr__44686.call(null,plot_style_45011));
})())){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),plot_style_45011);
} else {
predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),new cljs.core.Keyword(null,"line2","line2",-1975668782)], null));

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),new cljs.core.Keyword(null,"line2","line2",-1975668782));
}
} else {
pubsub.feeds.publish(topic_45006,(cljs.core.truth_((function (){var fexpr__44687 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"age","age",-604307804),null,new cljs.core.Keyword(null,"psa","psa",-321761459),null], null), null);
return (fexpr__44687.cljs$core$IFn$_invoke$arity$1 ? fexpr__44687.cljs$core$IFn$_invoke$arity$1(key_45005) : fexpr__44687.call(null,key_45005));
})())?"":null));

}


var G__45018 = seq__44660_44999;
var G__45019 = chunk__44663_45000;
var G__45020 = count__44664_45001;
var G__45021 = (i__44665_45002 + (1));
seq__44660_44999 = G__45018;
chunk__44663_45000 = G__45019;
count__44664_45001 = G__45020;
i__44665_45002 = G__45021;
continue;
} else {
var G__45023 = seq__44660_44999;
var G__45024 = chunk__44663_45000;
var G__45025 = count__44664_45001;
var G__45026 = (i__44665_45002 + (1));
seq__44660_44999 = G__45023;
chunk__44663_45000 = G__45024;
count__44664_45001 = G__45025;
i__44665_45002 = G__45026;
continue;
}
} else {
var G__45028 = seq__44660_44999;
var G__45029 = chunk__44663_45000;
var G__45030 = count__44664_45001;
var G__45031 = (i__44665_45002 + (1));
seq__44660_44999 = G__45028;
chunk__44663_45000 = G__45029;
count__44664_45001 = G__45030;
i__44665_45002 = G__45031;
continue;
}
} else {
var temp__5753__auto___45032 = cljs.core.seq(seq__44660_44999);
if(temp__5753__auto___45032){
var seq__44660_45034__$1 = temp__5753__auto___45032;
if(cljs.core.chunked_seq_QMARK_(seq__44660_45034__$1)){
var c__4638__auto___45035 = cljs.core.chunk_first(seq__44660_45034__$1);
var G__45037 = cljs.core.chunk_rest(seq__44660_45034__$1);
var G__45038 = c__4638__auto___45035;
var G__45039 = cljs.core.count(c__4638__auto___45035);
var G__45040 = (0);
seq__44660_44999 = G__45037;
chunk__44663_45000 = G__45038;
count__44664_45001 = G__45039;
i__44665_45002 = G__45040;
continue;
} else {
var vec__44688_45041 = cljs.core.first(seq__44660_45034__$1);
var key_45042 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44688_45041,(0),null);
var topic_45043 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44688_45041,(1),null);
if(cljs.core.truth_(key_45042)){
if(cljs.core.truth_(topic_45043)){

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_45042,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355))){
var map__44691_45046 = predict_prostate.state.localStorage.get_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),new cljs.core.Keyword(null,"line2","line2",-1975668782)], null));
var map__44691_45047__$1 = cljs.core.__destructure_map(map__44691_45046);
var plot_style_45048 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44691_45047__$1,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355));
if(cljs.core.truth_((function (){var fexpr__44692 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"area1","area1",-316994623),null,new cljs.core.Keyword(null,"line2","line2",-1975668782),null], null), null);
return (fexpr__44692.cljs$core$IFn$_invoke$arity$1 ? fexpr__44692.cljs$core$IFn$_invoke$arity$1(plot_style_45048) : fexpr__44692.call(null,plot_style_45048));
})())){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),plot_style_45048);
} else {
predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),new cljs.core.Keyword(null,"line2","line2",-1975668782)], null));

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),new cljs.core.Keyword(null,"line2","line2",-1975668782));
}
} else {
pubsub.feeds.publish(topic_45043,(cljs.core.truth_((function (){var fexpr__44693 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"age","age",-604307804),null,new cljs.core.Keyword(null,"psa","psa",-321761459),null], null), null);
return (fexpr__44693.cljs$core$IFn$_invoke$arity$1 ? fexpr__44693.cljs$core$IFn$_invoke$arity$1(key_45042) : fexpr__44693.call(null,key_45042));
})())?"":null));

}


var G__45054 = cljs.core.next(seq__44660_45034__$1);
var G__45055 = null;
var G__45056 = (0);
var G__45057 = (0);
seq__44660_44999 = G__45054;
chunk__44663_45000 = G__45055;
count__44664_45001 = G__45056;
i__44665_45002 = G__45057;
continue;
} else {
var G__45059 = cljs.core.next(seq__44660_45034__$1);
var G__45060 = null;
var G__45061 = (0);
var G__45062 = (0);
seq__44660_44999 = G__45059;
chunk__44663_45000 = G__45060;
count__44664_45001 = G__45061;
i__44665_45002 = G__45062;
continue;
}
} else {
var G__45063 = cljs.core.next(seq__44660_45034__$1);
var G__45064 = null;
var G__45065 = (0);
var G__45066 = (0);
seq__44660_44999 = G__45063;
chunk__44663_45000 = G__45064;
count__44664_45001 = G__45065;
i__44665_45002 = G__45066;
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
var len__4818__auto___45070 = arguments.length;
var i__4819__auto___45071 = (0);
while(true){
if((i__4819__auto___45071 < len__4818__auto___45070)){
args__4824__auto__.push((arguments[i__4819__auto___45071]));

var G__45073 = (i__4819__auto___45071 + (1));
i__4819__auto___45071 = G__45073;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return predict_prostate.state.mutations.subscribe_to.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(predict_prostate.state.mutations.subscribe_to.cljs$core$IFn$_invoke$arity$variadic = (function (change,cursor,p__44699){
var vec__44700 = p__44699;
var silent = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44700,(0),null);
return pubsub.feeds.subscribe(change,(function (p1__44694_SHARP_,p2__44695_SHARP_){
if(cljs.core.truth_(silent)){
} else {
predict_prostate.state.mutations.log(p1__44694_SHARP_,cljs.core.deref(cursor),p2__44695_SHARP_);
}

return cljs.core.reset_BANG_(cursor,p2__44695_SHARP_);
}));
}));

(predict_prostate.state.mutations.subscribe_to.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(predict_prostate.state.mutations.subscribe_to.cljs$lang$applyTo = (function (seq44696){
var G__44697 = cljs.core.first(seq44696);
var seq44696__$1 = cljs.core.next(seq44696);
var G__44698 = cljs.core.first(seq44696__$1);
var seq44696__$2 = cljs.core.next(seq44696__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44697,G__44698,seq44696__$2);
}));

predict_prostate.state.mutations.clip = (function predict_prostate$state$mutations$clip(p__44703){
var map__44704 = p__44703;
var map__44704__$1 = cljs.core.__destructure_map(map__44704);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44704__$1,new cljs.core.Keyword(null,"value","value",305978217));
var min = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44704__$1,new cljs.core.Keyword(null,"min","min",444991522));
var max = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44704__$1,new cljs.core.Keyword(null,"max","max",61366548));
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
var seq__44705_45086 = cljs.core.seq(predict_prostate.state.run_time.input_changes());
var chunk__44706_45087 = null;
var count__44707_45088 = (0);
var i__44708_45089 = (0);
while(true){
if((i__44708_45089 < count__44707_45088)){
var vec__44791_45091 = chunk__44706_45087.cljs$core$IIndexed$_nth$arity$2(null,i__44708_45089);
var key_45092 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44791_45091,(0),null);
var change_45093 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44791_45091,(1),null);
if(cljs.core.truth_(change_45093)){
pubsub.feeds.subscribe(change_45093,((function (seq__44705_45086,chunk__44706_45087,count__44707_45088,i__44708_45089,vec__44791_45091,key_45092,change_45093){
return (function (topic,value){
predict_prostate.state.mutations.log(topic,cljs.core.deref(predict_prostate.state.run_time.input_cursor(key_45092)),value);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666),key_45092)){
var vec__44808_45098 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(value,":");
var value_45099__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44808_45098,(0),null);
var bad_45100 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44808_45098,(1),null);
var bci_45101 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520))));
var bct_45102 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666))));
if(cljs.core.truth_(isNaN(bci_45101))){
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520)),predict_prostate.state.mutations.num_to_str((function (){var x__4295__auto__ = (1);
var y__4296__auto__ = (function (){var x__4298__auto__ = bci_45101;
var y__4299__auto__ = predict_prostate.state.mutations.str_to_num(value_45099__$1);
return ((x__4298__auto__ < y__4299__auto__) ? x__4298__auto__ : y__4299__auto__);
})();
return ((x__4295__auto__ > y__4296__auto__) ? x__4295__auto__ : y__4296__auto__);
})()));
}

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_45099__$1),(cljs.core.truth_(bad_45100)?":":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(bad_45100)].join(''));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520),key_45092)){
var vec__44820_45110 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(value,":");
var value_45111__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44820_45110,(0),null);
var bad_45112 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44820_45110,(1),null);
var bci_45113 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520))));
var bct_45114 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666))));
if(cljs.core.not(isNaN(bct_45114))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_45111__$1),(cljs.core.truth_((function (){var or__4212__auto__ = (value_45111__$1 < (0));
if(or__4212__auto__){
return or__4212__auto__;
} else {
return bad_45112;
}
})())?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_45111__$1)].join(''):"")].join(''));
} else {
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_45092,new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969)),value);

predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969),value], null));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,new cljs.core.Keyword(null,"gleason","gleason",-2044470526))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526)),cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518))));
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518)),cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526))));
}
} else {
if(cljs.core.truth_((function (){var fexpr__44832 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gleason","gleason",-2044470526),null,new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518),null], null), null);
return (fexpr__44832.cljs$core$IFn$_invoke$arity$1 ? fexpr__44832.cljs$core$IFn$_invoke$arity$1(key_45092) : fexpr__44832.call(null,key_45092));
})())){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526)),value);

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518)),value);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_45092,new cljs.core.Keyword(null,"h-admissions","h-admissions",-1503094844))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"h-admissions","h-admissions",-1503094844)),value);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,(0))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"charlson-comorbidity","charlson-comorbidity",-633596907)),null);
} else {
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_45092,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),value);

predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),value], null));
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(key_45092),(((value == null))?predict_prostate.state.config.get_input_default(predict_prostate.state.config.input_groups,key_45092):value));

}
}
}
}
}
}

return predict_prostate.models.runner.recalculate_model.cljs$core$IFn$_invoke$arity$2(predict_prostate.state.run_time.input_map(),predict_prostate.state.run_time.N);
});})(seq__44705_45086,chunk__44706_45087,count__44707_45088,i__44708_45089,vec__44791_45091,key_45092,change_45093))
);
} else {
}


var G__45131 = seq__44705_45086;
var G__45133 = chunk__44706_45087;
var G__45134 = count__44707_45088;
var G__45135 = (i__44708_45089 + (1));
seq__44705_45086 = G__45131;
chunk__44706_45087 = G__45133;
count__44707_45088 = G__45134;
i__44708_45089 = G__45135;
continue;
} else {
var temp__5753__auto___45137 = cljs.core.seq(seq__44705_45086);
if(temp__5753__auto___45137){
var seq__44705_45138__$1 = temp__5753__auto___45137;
if(cljs.core.chunked_seq_QMARK_(seq__44705_45138__$1)){
var c__4638__auto___45140 = cljs.core.chunk_first(seq__44705_45138__$1);
var G__45141 = cljs.core.chunk_rest(seq__44705_45138__$1);
var G__45142 = c__4638__auto___45140;
var G__45143 = cljs.core.count(c__4638__auto___45140);
var G__45144 = (0);
seq__44705_45086 = G__45141;
chunk__44706_45087 = G__45142;
count__44707_45088 = G__45143;
i__44708_45089 = G__45144;
continue;
} else {
var vec__44847_45146 = cljs.core.first(seq__44705_45138__$1);
var key_45147 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44847_45146,(0),null);
var change_45148 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44847_45146,(1),null);
if(cljs.core.truth_(change_45148)){
pubsub.feeds.subscribe(change_45148,((function (seq__44705_45086,chunk__44706_45087,count__44707_45088,i__44708_45089,vec__44847_45146,key_45147,change_45148,seq__44705_45138__$1,temp__5753__auto___45137){
return (function (topic,value){
predict_prostate.state.mutations.log(topic,cljs.core.deref(predict_prostate.state.run_time.input_cursor(key_45147)),value);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666),key_45147)){
var vec__44855_45153 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(value,":");
var value_45154__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44855_45153,(0),null);
var bad_45155 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44855_45153,(1),null);
var bci_45156 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520))));
var bct_45157 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666))));
if(cljs.core.truth_(isNaN(bci_45156))){
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520)),predict_prostate.state.mutations.num_to_str((function (){var x__4295__auto__ = (1);
var y__4296__auto__ = (function (){var x__4298__auto__ = bci_45156;
var y__4299__auto__ = predict_prostate.state.mutations.str_to_num(value_45154__$1);
return ((x__4298__auto__ < y__4299__auto__) ? x__4298__auto__ : y__4299__auto__);
})();
return ((x__4295__auto__ > y__4296__auto__) ? x__4295__auto__ : y__4296__auto__);
})()));
}

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_45154__$1),(cljs.core.truth_(bad_45155)?":":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(bad_45155)].join(''));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520),key_45147)){
var vec__44866_45164 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(value,":");
var value_45165__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44866_45164,(0),null);
var bad_45166 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44866_45164,(1),null);
var bci_45167 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520))));
var bct_45168 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666))));
if(cljs.core.not(isNaN(bct_45168))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_45165__$1),(cljs.core.truth_((function (){var or__4212__auto__ = (value_45165__$1 < (0));
if(or__4212__auto__){
return or__4212__auto__;
} else {
return bad_45166;
}
})())?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_45165__$1)].join(''):"")].join(''));
} else {
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_45147,new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969)),value);

predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969),value], null));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,new cljs.core.Keyword(null,"gleason","gleason",-2044470526))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526)),cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518))));
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518)),cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526))));
}
} else {
if(cljs.core.truth_((function (){var fexpr__44878 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gleason","gleason",-2044470526),null,new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518),null], null), null);
return (fexpr__44878.cljs$core$IFn$_invoke$arity$1 ? fexpr__44878.cljs$core$IFn$_invoke$arity$1(key_45147) : fexpr__44878.call(null,key_45147));
})())){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526)),value);

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518)),value);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_45147,new cljs.core.Keyword(null,"h-admissions","h-admissions",-1503094844))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"h-admissions","h-admissions",-1503094844)),value);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,(0))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"charlson-comorbidity","charlson-comorbidity",-633596907)),null);
} else {
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_45147,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),value);

predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),value], null));
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(key_45147),(((value == null))?predict_prostate.state.config.get_input_default(predict_prostate.state.config.input_groups,key_45147):value));

}
}
}
}
}
}

return predict_prostate.models.runner.recalculate_model.cljs$core$IFn$_invoke$arity$2(predict_prostate.state.run_time.input_map(),predict_prostate.state.run_time.N);
});})(seq__44705_45086,chunk__44706_45087,count__44707_45088,i__44708_45089,vec__44847_45146,key_45147,change_45148,seq__44705_45138__$1,temp__5753__auto___45137))
);
} else {
}


var G__45192 = cljs.core.next(seq__44705_45138__$1);
var G__45193 = null;
var G__45194 = (0);
var G__45195 = (0);
seq__44705_45086 = G__45192;
chunk__44706_45087 = G__45193;
count__44707_45088 = G__45194;
i__44708_45089 = G__45195;
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

predict_prostate.state.run_time.route_change.pubsub$feeds$TopicFeed$subscribe$arity$2(null,(function (_,p__44903){
var vec__44906 = p__44903;
var page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44906,(0),null);
var param1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44906,(1),null);
var param2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44906,(2),null);
var rvec = vec__44906;
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
var new_lang_45201 = new cljs.core.Keyword(null,"lang","lang",-1819677104).cljs$core$IFn$_invoke$arity$1(predict_prostate.state.localStorage.get_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"en","en",88457073)], null)));
predict_prostate.state.mutations.reload_lang(cljs.core.name(new_lang_45201));

return translations.tongue_base.load_translations_STAR_(url,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(translations.tongue_base.handle_dictionary,predict_prostate.state.run_time.t_state_cursor));
}));

predict_prostate.state.run_time.edit_change.pubsub$feeds$TopicFeed$subscribe$arity$2(null,(function (_,arg){
var text = (function (){var fexpr__44927 = cljs.core.deref(predict_prostate.state.run_time.ttt_cursor);
return (fexpr__44927.cljs$core$IFn$_invoke$arity$1 ? fexpr__44927.cljs$core$IFn$_invoke$arity$1(arg) : fexpr__44927.call(null,arg));
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(predict_prostate.state.run_time.edit_cursor,cljs.core.assoc,new cljs.core.Keyword(null,"edit-arg","edit-arg",1216866257),arg,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"edit-key","edit-key",-1833788727),((((cljs.core.vector_QMARK_(arg)) && ((cljs.core.count(arg) > (0)))))?cljs.core.first(arg):arg),new cljs.core.Keyword(null,"text","text",-1790561697),((((cljs.core.vector_QMARK_(arg)) && ((cljs.core.count(arg) > (1)))))?cljs.core.second(arg):text)], 0));

return $("#editorModal").modal("show");
}));

predict_prostate.state.run_time.new_text_change.pubsub$feeds$TopicFeed$subscribe$arity$2(null,(function (_,p__44941){
var vec__44943 = p__44941;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44943,(0),null);
var new_text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44943,(1),null);
return cljs.core.reset_BANG_(predict_prostate.state.run_time.new_text_cursor,new_text);
}));

predict_prostate.state.run_time.text_change.pubsub$feeds$TopicFeed$subscribe$arity$2(null,(function (_,p__44950){
var vec__44952 = p__44950;
var edit_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44952,(0),null);
var new_text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44952,(1),null);
var lang = new cljs.core.Keyword(null,"lang","lang",-1819677104).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(predict_prostate.state.run_time.t_state_cursor));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(predict_prostate.state.run_time.t_state_cursor,translations.tongue_base.process_dict_op,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"upsert","upsert",1416724984),new cljs.core.Keyword(null,"lang","lang",-1819677104).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(predict_prostate.state.run_time.t_state_cursor)),cljs.core.PersistentArrayMap.createAsIfByAssoc([edit_key,new_text])], null));

cljs.core.reset_BANG_(predict_prostate.state.run_time.new_text_cursor,null);

return translations.tranny_api.upload_translation.cljs$core$IFn$_invoke$arity$3(edit_key,cljs.core.name(lang),new_text);
}));

predict_prostate.state.run_time.add_language_modal.pubsub$feeds$TopicFeed$subscribe$arity$2(null,(function (_){
return $("#newLanguageModal").modal("show");
}));

predict_prostate.state.run_time.add_language.pubsub$feeds$TopicFeed$subscribe$arity$2(null,(function (_,p__44963){
var vec__44965 = p__44963;
var new_lang = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44965,(0),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(new_lang))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(predict_prostate.state.run_time.t_state_cursor,cljs.core.update,new cljs.core.Keyword(null,"languages","languages",1471910331),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(new_lang)], 0));
} else {
return null;
}
}));

return predict_prostate.state.mutations.clear_inputs();
});

//# sourceMappingURL=predict_prostate.state.mutations.js.map
