goog.provide('predict_prostate.state.mutations');
predict_prostate.state.mutations.paq = window._paq;
/**
 * Send an event to matemo. 
 */
predict_prostate.state.mutations.matomo_track = (function predict_prostate$state$mutations$matomo_track(var_args){
var G__45378 = arguments.length;
switch (G__45378) {
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
var seq__45382_45567 = cljs.core.seq(predict_prostate.state.run_time.input_changes());
var chunk__45385_45568 = null;
var count__45386_45569 = (0);
var i__45387_45570 = (0);
while(true){
if((i__45387_45570 < count__45386_45569)){
var vec__45405_45571 = chunk__45385_45568.cljs$core$IIndexed$_nth$arity$2(null,i__45387_45570);
var key_45572 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45405_45571,(0),null);
var topic_45573 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45405_45571,(1),null);
if(cljs.core.truth_(key_45572)){
if(cljs.core.truth_(topic_45573)){

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_45572,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355))){
var map__45408_45576 = predict_prostate.state.localStorage.get_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),new cljs.core.Keyword(null,"line2","line2",-1975668782)], null));
var map__45408_45578__$1 = cljs.core.__destructure_map(map__45408_45576);
var plot_style_45579 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45408_45578__$1,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355));
if(cljs.core.truth_((function (){var fexpr__45409 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"area1","area1",-316994623),null,new cljs.core.Keyword(null,"line2","line2",-1975668782),null], null), null);
return (fexpr__45409.cljs$core$IFn$_invoke$arity$1 ? fexpr__45409.cljs$core$IFn$_invoke$arity$1(plot_style_45579) : fexpr__45409.call(null,plot_style_45579));
})())){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),plot_style_45579);
} else {
predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),new cljs.core.Keyword(null,"line2","line2",-1975668782)], null));

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),new cljs.core.Keyword(null,"line2","line2",-1975668782));
}
} else {
pubsub.feeds.publish(topic_45573,(cljs.core.truth_((function (){var fexpr__45410 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"age","age",-604307804),null,new cljs.core.Keyword(null,"psa","psa",-321761459),null], null), null);
return (fexpr__45410.cljs$core$IFn$_invoke$arity$1 ? fexpr__45410.cljs$core$IFn$_invoke$arity$1(key_45572) : fexpr__45410.call(null,key_45572));
})())?"":null));

}


var G__45580 = seq__45382_45567;
var G__45581 = chunk__45385_45568;
var G__45582 = count__45386_45569;
var G__45583 = (i__45387_45570 + (1));
seq__45382_45567 = G__45580;
chunk__45385_45568 = G__45581;
count__45386_45569 = G__45582;
i__45387_45570 = G__45583;
continue;
} else {
var G__45584 = seq__45382_45567;
var G__45585 = chunk__45385_45568;
var G__45586 = count__45386_45569;
var G__45587 = (i__45387_45570 + (1));
seq__45382_45567 = G__45584;
chunk__45385_45568 = G__45585;
count__45386_45569 = G__45586;
i__45387_45570 = G__45587;
continue;
}
} else {
var G__45588 = seq__45382_45567;
var G__45589 = chunk__45385_45568;
var G__45590 = count__45386_45569;
var G__45591 = (i__45387_45570 + (1));
seq__45382_45567 = G__45588;
chunk__45385_45568 = G__45589;
count__45386_45569 = G__45590;
i__45387_45570 = G__45591;
continue;
}
} else {
var temp__5753__auto___45592 = cljs.core.seq(seq__45382_45567);
if(temp__5753__auto___45592){
var seq__45382_45593__$1 = temp__5753__auto___45592;
if(cljs.core.chunked_seq_QMARK_(seq__45382_45593__$1)){
var c__4638__auto___45594 = cljs.core.chunk_first(seq__45382_45593__$1);
var G__45596 = cljs.core.chunk_rest(seq__45382_45593__$1);
var G__45597 = c__4638__auto___45594;
var G__45598 = cljs.core.count(c__4638__auto___45594);
var G__45599 = (0);
seq__45382_45567 = G__45596;
chunk__45385_45568 = G__45597;
count__45386_45569 = G__45598;
i__45387_45570 = G__45599;
continue;
} else {
var vec__45411_45600 = cljs.core.first(seq__45382_45593__$1);
var key_45601 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45411_45600,(0),null);
var topic_45602 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45411_45600,(1),null);
if(cljs.core.truth_(key_45601)){
if(cljs.core.truth_(topic_45602)){

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_45601,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355))){
var map__45414_45604 = predict_prostate.state.localStorage.get_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),new cljs.core.Keyword(null,"line2","line2",-1975668782)], null));
var map__45414_45605__$1 = cljs.core.__destructure_map(map__45414_45604);
var plot_style_45606 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45414_45605__$1,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355));
if(cljs.core.truth_((function (){var fexpr__45415 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"area1","area1",-316994623),null,new cljs.core.Keyword(null,"line2","line2",-1975668782),null], null), null);
return (fexpr__45415.cljs$core$IFn$_invoke$arity$1 ? fexpr__45415.cljs$core$IFn$_invoke$arity$1(plot_style_45606) : fexpr__45415.call(null,plot_style_45606));
})())){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),plot_style_45606);
} else {
predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),new cljs.core.Keyword(null,"line2","line2",-1975668782)], null));

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),new cljs.core.Keyword(null,"line2","line2",-1975668782));
}
} else {
pubsub.feeds.publish(topic_45602,(cljs.core.truth_((function (){var fexpr__45416 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"age","age",-604307804),null,new cljs.core.Keyword(null,"psa","psa",-321761459),null], null), null);
return (fexpr__45416.cljs$core$IFn$_invoke$arity$1 ? fexpr__45416.cljs$core$IFn$_invoke$arity$1(key_45601) : fexpr__45416.call(null,key_45601));
})())?"":null));

}


var G__45610 = cljs.core.next(seq__45382_45593__$1);
var G__45611 = null;
var G__45612 = (0);
var G__45613 = (0);
seq__45382_45567 = G__45610;
chunk__45385_45568 = G__45611;
count__45386_45569 = G__45612;
i__45387_45570 = G__45613;
continue;
} else {
var G__45615 = cljs.core.next(seq__45382_45593__$1);
var G__45616 = null;
var G__45617 = (0);
var G__45618 = (0);
seq__45382_45567 = G__45615;
chunk__45385_45568 = G__45616;
count__45386_45569 = G__45617;
i__45387_45570 = G__45618;
continue;
}
} else {
var G__45619 = cljs.core.next(seq__45382_45593__$1);
var G__45620 = null;
var G__45621 = (0);
var G__45622 = (0);
seq__45382_45567 = G__45619;
chunk__45385_45568 = G__45620;
count__45386_45569 = G__45621;
i__45387_45570 = G__45622;
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
var len__4818__auto___45624 = arguments.length;
var i__4819__auto___45625 = (0);
while(true){
if((i__4819__auto___45625 < len__4818__auto___45624)){
args__4824__auto__.push((arguments[i__4819__auto___45625]));

var G__45627 = (i__4819__auto___45625 + (1));
i__4819__auto___45625 = G__45627;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return predict_prostate.state.mutations.subscribe_to.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(predict_prostate.state.mutations.subscribe_to.cljs$core$IFn$_invoke$arity$variadic = (function (change,cursor,p__45422){
var vec__45423 = p__45422;
var silent = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45423,(0),null);
return pubsub.feeds.subscribe(change,(function (p1__45417_SHARP_,p2__45418_SHARP_){
if(cljs.core.truth_(silent)){
} else {
predict_prostate.state.mutations.log(p1__45417_SHARP_,cljs.core.deref(cursor),p2__45418_SHARP_);
}

return cljs.core.reset_BANG_(cursor,p2__45418_SHARP_);
}));
}));

(predict_prostate.state.mutations.subscribe_to.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(predict_prostate.state.mutations.subscribe_to.cljs$lang$applyTo = (function (seq45419){
var G__45420 = cljs.core.first(seq45419);
var seq45419__$1 = cljs.core.next(seq45419);
var G__45421 = cljs.core.first(seq45419__$1);
var seq45419__$2 = cljs.core.next(seq45419__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45420,G__45421,seq45419__$2);
}));

predict_prostate.state.mutations.clip = (function predict_prostate$state$mutations$clip(p__45426){
var map__45427 = p__45426;
var map__45427__$1 = cljs.core.__destructure_map(map__45427);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45427__$1,new cljs.core.Keyword(null,"value","value",305978217));
var min = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45427__$1,new cljs.core.Keyword(null,"min","min",444991522));
var max = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45427__$1,new cljs.core.Keyword(null,"max","max",61366548));
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
var seq__45428_45642 = cljs.core.seq(predict_prostate.state.run_time.input_changes());
var chunk__45429_45643 = null;
var count__45430_45644 = (0);
var i__45431_45645 = (0);
while(true){
if((i__45431_45645 < count__45430_45644)){
var vec__45463_45649 = chunk__45429_45643.cljs$core$IIndexed$_nth$arity$2(null,i__45431_45645);
var key_45650 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45463_45649,(0),null);
var change_45651 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45463_45649,(1),null);
if(cljs.core.truth_(change_45651)){
pubsub.feeds.subscribe(change_45651,((function (seq__45428_45642,chunk__45429_45643,count__45430_45644,i__45431_45645,vec__45463_45649,key_45650,change_45651){
return (function (topic,value){
predict_prostate.state.mutations.log(topic,cljs.core.deref(predict_prostate.state.run_time.input_cursor(key_45650)),value);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666),key_45650)){
var vec__45466_45660 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(value,":");
var value_45661__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45466_45660,(0),null);
var bad_45662 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45466_45660,(1),null);
var bci_45663 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520))));
var bct_45664 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666))));
if(cljs.core.truth_(isNaN(bci_45663))){
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520)),predict_prostate.state.mutations.num_to_str((function (){var x__4295__auto__ = (1);
var y__4296__auto__ = (function (){var x__4298__auto__ = bci_45663;
var y__4299__auto__ = predict_prostate.state.mutations.str_to_num(value_45661__$1);
return ((x__4298__auto__ < y__4299__auto__) ? x__4298__auto__ : y__4299__auto__);
})();
return ((x__4295__auto__ > y__4296__auto__) ? x__4295__auto__ : y__4296__auto__);
})()));
}

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_45661__$1),(cljs.core.truth_(bad_45662)?":":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(bad_45662)].join(''));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520),key_45650)){
var vec__45478_45671 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(value,":");
var value_45672__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45478_45671,(0),null);
var bad_45673 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45478_45671,(1),null);
var bci_45674 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520))));
var bct_45675 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666))));
if(cljs.core.not(isNaN(bct_45675))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_45672__$1),(cljs.core.truth_((function (){var or__4212__auto__ = (value_45672__$1 < (0));
if(or__4212__auto__){
return or__4212__auto__;
} else {
return bad_45673;
}
})())?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_45672__$1)].join(''):"")].join(''));
} else {
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_45650,new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969)),value);

predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969),value], null));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,new cljs.core.Keyword(null,"gleason","gleason",-2044470526))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526)),cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518))));
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518)),cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526))));
}
} else {
if(cljs.core.truth_((function (){var fexpr__45496 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gleason","gleason",-2044470526),null,new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518),null], null), null);
return (fexpr__45496.cljs$core$IFn$_invoke$arity$1 ? fexpr__45496.cljs$core$IFn$_invoke$arity$1(key_45650) : fexpr__45496.call(null,key_45650));
})())){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526)),value);

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518)),value);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_45650,new cljs.core.Keyword(null,"h-admissions","h-admissions",-1503094844))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"h-admissions","h-admissions",-1503094844)),value);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,(0))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"charlson-comorbidity","charlson-comorbidity",-633596907)),null);
} else {
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_45650,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),value);

predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),value], null));
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(key_45650),(((value == null))?predict_prostate.state.config.get_input_default(predict_prostate.state.config.input_groups,key_45650):value));

}
}
}
}
}
}

return predict_prostate.models.runner.recalculate_model.cljs$core$IFn$_invoke$arity$2(predict_prostate.state.run_time.input_map(),predict_prostate.state.run_time.N);
});})(seq__45428_45642,chunk__45429_45643,count__45430_45644,i__45431_45645,vec__45463_45649,key_45650,change_45651))
);
} else {
}


var G__45678 = seq__45428_45642;
var G__45679 = chunk__45429_45643;
var G__45680 = count__45430_45644;
var G__45681 = (i__45431_45645 + (1));
seq__45428_45642 = G__45678;
chunk__45429_45643 = G__45679;
count__45430_45644 = G__45680;
i__45431_45645 = G__45681;
continue;
} else {
var temp__5753__auto___45682 = cljs.core.seq(seq__45428_45642);
if(temp__5753__auto___45682){
var seq__45428_45683__$1 = temp__5753__auto___45682;
if(cljs.core.chunked_seq_QMARK_(seq__45428_45683__$1)){
var c__4638__auto___45684 = cljs.core.chunk_first(seq__45428_45683__$1);
var G__45685 = cljs.core.chunk_rest(seq__45428_45683__$1);
var G__45686 = c__4638__auto___45684;
var G__45687 = cljs.core.count(c__4638__auto___45684);
var G__45688 = (0);
seq__45428_45642 = G__45685;
chunk__45429_45643 = G__45686;
count__45430_45644 = G__45687;
i__45431_45645 = G__45688;
continue;
} else {
var vec__45512_45689 = cljs.core.first(seq__45428_45683__$1);
var key_45690 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45512_45689,(0),null);
var change_45691 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45512_45689,(1),null);
if(cljs.core.truth_(change_45691)){
pubsub.feeds.subscribe(change_45691,((function (seq__45428_45642,chunk__45429_45643,count__45430_45644,i__45431_45645,vec__45512_45689,key_45690,change_45691,seq__45428_45683__$1,temp__5753__auto___45682){
return (function (topic,value){
predict_prostate.state.mutations.log(topic,cljs.core.deref(predict_prostate.state.run_time.input_cursor(key_45690)),value);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666),key_45690)){
var vec__45520_45692 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(value,":");
var value_45693__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45520_45692,(0),null);
var bad_45694 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45520_45692,(1),null);
var bci_45695 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520))));
var bct_45696 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666))));
if(cljs.core.truth_(isNaN(bci_45695))){
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520)),predict_prostate.state.mutations.num_to_str((function (){var x__4295__auto__ = (1);
var y__4296__auto__ = (function (){var x__4298__auto__ = bci_45695;
var y__4299__auto__ = predict_prostate.state.mutations.str_to_num(value_45693__$1);
return ((x__4298__auto__ < y__4299__auto__) ? x__4298__auto__ : y__4299__auto__);
})();
return ((x__4295__auto__ > y__4296__auto__) ? x__4295__auto__ : y__4296__auto__);
})()));
}

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_45693__$1),(cljs.core.truth_(bad_45694)?":":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(bad_45694)].join(''));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520),key_45690)){
var vec__45523_45698 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(value,":");
var value_45699__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45523_45698,(0),null);
var bad_45700 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45523_45698,(1),null);
var bci_45701 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520))));
var bct_45702 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666))));
if(cljs.core.not(isNaN(bct_45702))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_45699__$1),(cljs.core.truth_((function (){var or__4212__auto__ = (value_45699__$1 < (0));
if(or__4212__auto__){
return or__4212__auto__;
} else {
return bad_45700;
}
})())?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_45699__$1)].join(''):"")].join(''));
} else {
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_45690,new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969)),value);

predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969),value], null));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,new cljs.core.Keyword(null,"gleason","gleason",-2044470526))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526)),cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518))));
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518)),cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526))));
}
} else {
if(cljs.core.truth_((function (){var fexpr__45526 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gleason","gleason",-2044470526),null,new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518),null], null), null);
return (fexpr__45526.cljs$core$IFn$_invoke$arity$1 ? fexpr__45526.cljs$core$IFn$_invoke$arity$1(key_45690) : fexpr__45526.call(null,key_45690));
})())){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526)),value);

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518)),value);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_45690,new cljs.core.Keyword(null,"h-admissions","h-admissions",-1503094844))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"h-admissions","h-admissions",-1503094844)),value);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,(0))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"charlson-comorbidity","charlson-comorbidity",-633596907)),null);
} else {
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_45690,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),value);

predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),value], null));
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(key_45690),(((value == null))?predict_prostate.state.config.get_input_default(predict_prostate.state.config.input_groups,key_45690):value));

}
}
}
}
}
}

return predict_prostate.models.runner.recalculate_model.cljs$core$IFn$_invoke$arity$2(predict_prostate.state.run_time.input_map(),predict_prostate.state.run_time.N);
});})(seq__45428_45642,chunk__45429_45643,count__45430_45644,i__45431_45645,vec__45512_45689,key_45690,change_45691,seq__45428_45683__$1,temp__5753__auto___45682))
);
} else {
}


var G__45706 = cljs.core.next(seq__45428_45683__$1);
var G__45707 = null;
var G__45708 = (0);
var G__45709 = (0);
seq__45428_45642 = G__45706;
chunk__45429_45643 = G__45707;
count__45430_45644 = G__45708;
i__45431_45645 = G__45709;
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

predict_prostate.state.run_time.route_change.pubsub$feeds$TopicFeed$subscribe$arity$2(null,(function (_,p__45536){
var vec__45537 = p__45536;
var page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45537,(0),null);
var param1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45537,(1),null);
var param2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45537,(2),null);
var rvec = vec__45537;
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
var new_lang_45711 = new cljs.core.Keyword(null,"lang","lang",-1819677104).cljs$core$IFn$_invoke$arity$1(predict_prostate.state.localStorage.get_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"en","en",88457073)], null)));
predict_prostate.state.mutations.reload_lang(cljs.core.name(new_lang_45711));

return translations.tongue_base.load_translations_STAR_(url,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(translations.tongue_base.handle_dictionary,predict_prostate.state.run_time.t_state_cursor));
}));

predict_prostate.state.run_time.edit_change.pubsub$feeds$TopicFeed$subscribe$arity$2(null,(function (_,arg){
var text = (function (){var fexpr__45542 = cljs.core.deref(predict_prostate.state.run_time.ttt_cursor);
return (fexpr__45542.cljs$core$IFn$_invoke$arity$1 ? fexpr__45542.cljs$core$IFn$_invoke$arity$1(arg) : fexpr__45542.call(null,arg));
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(predict_prostate.state.run_time.edit_cursor,cljs.core.assoc,new cljs.core.Keyword(null,"edit-arg","edit-arg",1216866257),arg,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"edit-key","edit-key",-1833788727),((((cljs.core.vector_QMARK_(arg)) && ((cljs.core.count(arg) > (0)))))?cljs.core.first(arg):arg),new cljs.core.Keyword(null,"text","text",-1790561697),((((cljs.core.vector_QMARK_(arg)) && ((cljs.core.count(arg) > (1)))))?cljs.core.second(arg):text)], 0));

return $("#editorModal").modal("show");
}));

predict_prostate.state.run_time.new_text_change.pubsub$feeds$TopicFeed$subscribe$arity$2(null,(function (_,p__45543){
var vec__45544 = p__45543;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45544,(0),null);
var new_text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45544,(1),null);
return cljs.core.reset_BANG_(predict_prostate.state.run_time.new_text_cursor,new_text);
}));

predict_prostate.state.run_time.text_change.pubsub$feeds$TopicFeed$subscribe$arity$2(null,(function (_,p__45547){
var vec__45548 = p__45547;
var edit_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45548,(0),null);
var new_text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45548,(1),null);
var lang = new cljs.core.Keyword(null,"lang","lang",-1819677104).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(predict_prostate.state.run_time.t_state_cursor));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(predict_prostate.state.run_time.t_state_cursor,translations.tongue_base.process_dict_op,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"upsert","upsert",1416724984),new cljs.core.Keyword(null,"lang","lang",-1819677104).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(predict_prostate.state.run_time.t_state_cursor)),cljs.core.PersistentArrayMap.createAsIfByAssoc([edit_key,new_text])], null));

cljs.core.reset_BANG_(predict_prostate.state.run_time.new_text_cursor,null);

return translations.tranny_api.upload_translation.cljs$core$IFn$_invoke$arity$3(edit_key,cljs.core.name(lang),new_text);
}));

predict_prostate.state.run_time.add_language_modal.pubsub$feeds$TopicFeed$subscribe$arity$2(null,(function (_){
return $("#newLanguageModal").modal("show");
}));

predict_prostate.state.run_time.add_language.pubsub$feeds$TopicFeed$subscribe$arity$2(null,(function (_,p__45553){
var vec__45554 = p__45553;
var new_lang = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45554,(0),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(new_lang))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(predict_prostate.state.run_time.t_state_cursor,cljs.core.update,new cljs.core.Keyword(null,"languages","languages",1471910331),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(new_lang)], 0));
} else {
return null;
}
}));

return predict_prostate.state.mutations.clear_inputs();
});

//# sourceMappingURL=predict_prostate.state.mutations.js.map
