goog.provide('predict_prostate.state.mutations');
predict_prostate.state.mutations.paq = window._paq;
/**
 * Send an event to matemo. 
 */
predict_prostate.state.mutations.matomo_track = (function predict_prostate$state$mutations$matomo_track(var_args){
var G__37200 = arguments.length;
switch (G__37200) {
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
var seq__37228_37589 = cljs.core.seq(predict_prostate.state.run_time.input_changes());
var chunk__37231_37590 = null;
var count__37235_37591 = (0);
var i__37236_37592 = (0);
while(true){
if((i__37236_37592 < count__37235_37591)){
var vec__37305_37594 = chunk__37231_37590.cljs$core$IIndexed$_nth$arity$2(null,i__37236_37592);
var key_37595 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37305_37594,(0),null);
var topic_37596 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37305_37594,(1),null);
if(cljs.core.truth_(key_37595)){
if(cljs.core.truth_(topic_37596)){

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_37595,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355))){
var map__37311_37597 = predict_prostate.state.localStorage.get_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),new cljs.core.Keyword(null,"line2","line2",-1975668782)], null));
var map__37311_37598__$1 = (((((!((map__37311_37597 == null))))?(((((map__37311_37597.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37311_37597.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37311_37597):map__37311_37597);
var plot_style_37599 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37311_37598__$1,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355));
if(cljs.core.truth_((function (){var fexpr__37341 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"area1","area1",-316994623),null,new cljs.core.Keyword(null,"line2","line2",-1975668782),null], null), null);
return (fexpr__37341.cljs$core$IFn$_invoke$arity$1 ? fexpr__37341.cljs$core$IFn$_invoke$arity$1(plot_style_37599) : fexpr__37341.call(null,plot_style_37599));
})())){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),plot_style_37599);
} else {
predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),new cljs.core.Keyword(null,"line2","line2",-1975668782)], null));

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),new cljs.core.Keyword(null,"line2","line2",-1975668782));
}
} else {
pubsub.feeds.publish(topic_37596,(cljs.core.truth_((function (){var fexpr__37343 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"age","age",-604307804),null,new cljs.core.Keyword(null,"psa","psa",-321761459),null], null), null);
return (fexpr__37343.cljs$core$IFn$_invoke$arity$1 ? fexpr__37343.cljs$core$IFn$_invoke$arity$1(key_37595) : fexpr__37343.call(null,key_37595));
})())?"":null));

}


var G__37603 = seq__37228_37589;
var G__37604 = chunk__37231_37590;
var G__37605 = count__37235_37591;
var G__37606 = (i__37236_37592 + (1));
seq__37228_37589 = G__37603;
chunk__37231_37590 = G__37604;
count__37235_37591 = G__37605;
i__37236_37592 = G__37606;
continue;
} else {
var G__37608 = seq__37228_37589;
var G__37609 = chunk__37231_37590;
var G__37610 = count__37235_37591;
var G__37611 = (i__37236_37592 + (1));
seq__37228_37589 = G__37608;
chunk__37231_37590 = G__37609;
count__37235_37591 = G__37610;
i__37236_37592 = G__37611;
continue;
}
} else {
var G__37613 = seq__37228_37589;
var G__37614 = chunk__37231_37590;
var G__37615 = count__37235_37591;
var G__37616 = (i__37236_37592 + (1));
seq__37228_37589 = G__37613;
chunk__37231_37590 = G__37614;
count__37235_37591 = G__37615;
i__37236_37592 = G__37616;
continue;
}
} else {
var temp__5735__auto___37617 = cljs.core.seq(seq__37228_37589);
if(temp__5735__auto___37617){
var seq__37228_37618__$1 = temp__5735__auto___37617;
if(cljs.core.chunked_seq_QMARK_(seq__37228_37618__$1)){
var c__4556__auto___37619 = cljs.core.chunk_first(seq__37228_37618__$1);
var G__37620 = cljs.core.chunk_rest(seq__37228_37618__$1);
var G__37621 = c__4556__auto___37619;
var G__37622 = cljs.core.count(c__4556__auto___37619);
var G__37623 = (0);
seq__37228_37589 = G__37620;
chunk__37231_37590 = G__37621;
count__37235_37591 = G__37622;
i__37236_37592 = G__37623;
continue;
} else {
var vec__37345_37624 = cljs.core.first(seq__37228_37618__$1);
var key_37625 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37345_37624,(0),null);
var topic_37626 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37345_37624,(1),null);
if(cljs.core.truth_(key_37625)){
if(cljs.core.truth_(topic_37626)){

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_37625,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355))){
var map__37356_37627 = predict_prostate.state.localStorage.get_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),new cljs.core.Keyword(null,"line2","line2",-1975668782)], null));
var map__37356_37628__$1 = (((((!((map__37356_37627 == null))))?(((((map__37356_37627.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37356_37627.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37356_37627):map__37356_37627);
var plot_style_37629 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37356_37628__$1,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355));
if(cljs.core.truth_((function (){var fexpr__37361 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"area1","area1",-316994623),null,new cljs.core.Keyword(null,"line2","line2",-1975668782),null], null), null);
return (fexpr__37361.cljs$core$IFn$_invoke$arity$1 ? fexpr__37361.cljs$core$IFn$_invoke$arity$1(plot_style_37629) : fexpr__37361.call(null,plot_style_37629));
})())){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),plot_style_37629);
} else {
predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),new cljs.core.Keyword(null,"line2","line2",-1975668782)], null));

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),new cljs.core.Keyword(null,"line2","line2",-1975668782));
}
} else {
pubsub.feeds.publish(topic_37626,(cljs.core.truth_((function (){var fexpr__37363 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"age","age",-604307804),null,new cljs.core.Keyword(null,"psa","psa",-321761459),null], null), null);
return (fexpr__37363.cljs$core$IFn$_invoke$arity$1 ? fexpr__37363.cljs$core$IFn$_invoke$arity$1(key_37625) : fexpr__37363.call(null,key_37625));
})())?"":null));

}


var G__37630 = cljs.core.next(seq__37228_37618__$1);
var G__37631 = null;
var G__37632 = (0);
var G__37633 = (0);
seq__37228_37589 = G__37630;
chunk__37231_37590 = G__37631;
count__37235_37591 = G__37632;
i__37236_37592 = G__37633;
continue;
} else {
var G__37634 = cljs.core.next(seq__37228_37618__$1);
var G__37635 = null;
var G__37636 = (0);
var G__37637 = (0);
seq__37228_37589 = G__37634;
chunk__37231_37590 = G__37635;
count__37235_37591 = G__37636;
i__37236_37592 = G__37637;
continue;
}
} else {
var G__37639 = cljs.core.next(seq__37228_37618__$1);
var G__37640 = null;
var G__37641 = (0);
var G__37642 = (0);
seq__37228_37589 = G__37639;
chunk__37231_37590 = G__37640;
count__37235_37591 = G__37641;
i__37236_37592 = G__37642;
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
var len__4736__auto___37644 = arguments.length;
var i__4737__auto___37645 = (0);
while(true){
if((i__4737__auto___37645 < len__4736__auto___37644)){
args__4742__auto__.push((arguments[i__4737__auto___37645]));

var G__37646 = (i__4737__auto___37645 + (1));
i__4737__auto___37645 = G__37646;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return predict_prostate.state.mutations.subscribe_to.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(predict_prostate.state.mutations.subscribe_to.cljs$core$IFn$_invoke$arity$variadic = (function (change,cursor,p__37383){
var vec__37384 = p__37383;
var silent = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37384,(0),null);
return pubsub.feeds.subscribe(change,(function (p1__37376_SHARP_,p2__37377_SHARP_){
if(cljs.core.truth_(silent)){
} else {
predict_prostate.state.mutations.log(p1__37376_SHARP_,cljs.core.deref(cursor),p2__37377_SHARP_);
}

return cljs.core.reset_BANG_(cursor,p2__37377_SHARP_);
}));
}));

(predict_prostate.state.mutations.subscribe_to.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(predict_prostate.state.mutations.subscribe_to.cljs$lang$applyTo = (function (seq37379){
var G__37380 = cljs.core.first(seq37379);
var seq37379__$1 = cljs.core.next(seq37379);
var G__37381 = cljs.core.first(seq37379__$1);
var seq37379__$2 = cljs.core.next(seq37379__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37380,G__37381,seq37379__$2);
}));

predict_prostate.state.mutations.clip = (function predict_prostate$state$mutations$clip(p__37393){
var map__37395 = p__37393;
var map__37395__$1 = (((((!((map__37395 == null))))?(((((map__37395.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37395.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37395):map__37395);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37395__$1,new cljs.core.Keyword(null,"value","value",305978217));
var min = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37395__$1,new cljs.core.Keyword(null,"min","min",444991522));
var max = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37395__$1,new cljs.core.Keyword(null,"max","max",61366548));
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
var seq__37447_37649 = cljs.core.seq(predict_prostate.state.run_time.input_changes());
var chunk__37449_37650 = null;
var count__37450_37651 = (0);
var i__37451_37652 = (0);
while(true){
if((i__37451_37652 < count__37450_37651)){
var vec__37546_37653 = chunk__37449_37650.cljs$core$IIndexed$_nth$arity$2(null,i__37451_37652);
var key_37654 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37546_37653,(0),null);
var change_37655 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37546_37653,(1),null);
if(cljs.core.truth_(change_37655)){
pubsub.feeds.subscribe(change_37655,((function (seq__37447_37649,chunk__37449_37650,count__37450_37651,i__37451_37652,vec__37546_37653,key_37654,change_37655){
return (function (topic,value){
predict_prostate.state.mutations.log(topic,cljs.core.deref(predict_prostate.state.run_time.input_cursor(key_37654)),value);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666),key_37654)){
var vec__37549_37657 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(value,":");
var value_37658__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37549_37657,(0),null);
var bad_37659 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37549_37657,(1),null);
var bci_37660 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520))));
var bct_37661 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666))));
if(cljs.core.truth_(isNaN(bci_37660))){
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520)),predict_prostate.state.mutations.num_to_str((function (){var x__4214__auto__ = (1);
var y__4215__auto__ = (function (){var x__4217__auto__ = bci_37660;
var y__4218__auto__ = predict_prostate.state.mutations.str_to_num(value_37658__$1);
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})();
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})()));
}

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_37658__$1),(cljs.core.truth_(bad_37659)?":":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(bad_37659)].join(''));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520),key_37654)){
var vec__37552_37662 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(value,":");
var value_37663__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37552_37662,(0),null);
var bad_37664 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37552_37662,(1),null);
var bci_37665 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520))));
var bct_37666 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666))));
if(cljs.core.not(isNaN(bct_37666))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_37663__$1),(cljs.core.truth_((function (){var or__4126__auto__ = (value_37663__$1 < (0));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return bad_37664;
}
})())?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_37663__$1)].join(''):"")].join(''));
} else {
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_37654,new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969)),value);

predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969),value], null));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,new cljs.core.Keyword(null,"gleason","gleason",-2044470526))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526)),cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518))));
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518)),cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526))));
}
} else {
if(cljs.core.truth_((function (){var fexpr__37555 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gleason","gleason",-2044470526),null,new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518),null], null), null);
return (fexpr__37555.cljs$core$IFn$_invoke$arity$1 ? fexpr__37555.cljs$core$IFn$_invoke$arity$1(key_37654) : fexpr__37555.call(null,key_37654));
})())){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526)),value);

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518)),value);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_37654,new cljs.core.Keyword(null,"h-admissions","h-admissions",-1503094844))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"h-admissions","h-admissions",-1503094844)),value);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,(0))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"charlson-comorbidity","charlson-comorbidity",-633596907)),null);
} else {
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_37654,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),value);

predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),value], null));
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(key_37654),(((value == null))?predict_prostate.state.config.get_input_default(predict_prostate.state.config.input_groups,key_37654):value));

}
}
}
}
}
}

return predict_prostate.models.runner.recalculate_model.cljs$core$IFn$_invoke$arity$2(predict_prostate.state.run_time.input_map(),predict_prostate.state.run_time.N);
});})(seq__37447_37649,chunk__37449_37650,count__37450_37651,i__37451_37652,vec__37546_37653,key_37654,change_37655))
);
} else {
}


var G__37677 = seq__37447_37649;
var G__37678 = chunk__37449_37650;
var G__37679 = count__37450_37651;
var G__37680 = (i__37451_37652 + (1));
seq__37447_37649 = G__37677;
chunk__37449_37650 = G__37678;
count__37450_37651 = G__37679;
i__37451_37652 = G__37680;
continue;
} else {
var temp__5735__auto___37681 = cljs.core.seq(seq__37447_37649);
if(temp__5735__auto___37681){
var seq__37447_37682__$1 = temp__5735__auto___37681;
if(cljs.core.chunked_seq_QMARK_(seq__37447_37682__$1)){
var c__4556__auto___37683 = cljs.core.chunk_first(seq__37447_37682__$1);
var G__37684 = cljs.core.chunk_rest(seq__37447_37682__$1);
var G__37685 = c__4556__auto___37683;
var G__37686 = cljs.core.count(c__4556__auto___37683);
var G__37687 = (0);
seq__37447_37649 = G__37684;
chunk__37449_37650 = G__37685;
count__37450_37651 = G__37686;
i__37451_37652 = G__37687;
continue;
} else {
var vec__37556_37688 = cljs.core.first(seq__37447_37682__$1);
var key_37689 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37556_37688,(0),null);
var change_37690 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37556_37688,(1),null);
if(cljs.core.truth_(change_37690)){
pubsub.feeds.subscribe(change_37690,((function (seq__37447_37649,chunk__37449_37650,count__37450_37651,i__37451_37652,vec__37556_37688,key_37689,change_37690,seq__37447_37682__$1,temp__5735__auto___37681){
return (function (topic,value){
predict_prostate.state.mutations.log(topic,cljs.core.deref(predict_prostate.state.run_time.input_cursor(key_37689)),value);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666),key_37689)){
var vec__37559_37691 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(value,":");
var value_37692__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37559_37691,(0),null);
var bad_37693 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37559_37691,(1),null);
var bci_37694 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520))));
var bct_37695 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666))));
if(cljs.core.truth_(isNaN(bci_37694))){
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520)),predict_prostate.state.mutations.num_to_str((function (){var x__4214__auto__ = (1);
var y__4215__auto__ = (function (){var x__4217__auto__ = bci_37694;
var y__4218__auto__ = predict_prostate.state.mutations.str_to_num(value_37692__$1);
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})();
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})()));
}

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_37692__$1),(cljs.core.truth_(bad_37693)?":":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(bad_37693)].join(''));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520),key_37689)){
var vec__37562_37712 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(value,":");
var value_37713__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37562_37712,(0),null);
var bad_37714 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37562_37712,(1),null);
var bci_37715 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520))));
var bct_37716 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666))));
if(cljs.core.not(isNaN(bct_37716))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_37713__$1),(cljs.core.truth_((function (){var or__4126__auto__ = (value_37713__$1 < (0));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return bad_37714;
}
})())?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_37713__$1)].join(''):"")].join(''));
} else {
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_37689,new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969)),value);

predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969),value], null));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,new cljs.core.Keyword(null,"gleason","gleason",-2044470526))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526)),cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518))));
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518)),cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526))));
}
} else {
if(cljs.core.truth_((function (){var fexpr__37565 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gleason","gleason",-2044470526),null,new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518),null], null), null);
return (fexpr__37565.cljs$core$IFn$_invoke$arity$1 ? fexpr__37565.cljs$core$IFn$_invoke$arity$1(key_37689) : fexpr__37565.call(null,key_37689));
})())){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526)),value);

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518)),value);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_37689,new cljs.core.Keyword(null,"h-admissions","h-admissions",-1503094844))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"h-admissions","h-admissions",-1503094844)),value);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,(0))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"charlson-comorbidity","charlson-comorbidity",-633596907)),null);
} else {
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_37689,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),value);

predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),value], null));
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(key_37689),(((value == null))?predict_prostate.state.config.get_input_default(predict_prostate.state.config.input_groups,key_37689):value));

}
}
}
}
}
}

return predict_prostate.models.runner.recalculate_model.cljs$core$IFn$_invoke$arity$2(predict_prostate.state.run_time.input_map(),predict_prostate.state.run_time.N);
});})(seq__37447_37649,chunk__37449_37650,count__37450_37651,i__37451_37652,vec__37556_37688,key_37689,change_37690,seq__37447_37682__$1,temp__5735__auto___37681))
);
} else {
}


var G__37730 = cljs.core.next(seq__37447_37682__$1);
var G__37731 = null;
var G__37732 = (0);
var G__37733 = (0);
seq__37447_37649 = G__37730;
chunk__37449_37650 = G__37731;
count__37450_37651 = G__37732;
i__37451_37652 = G__37733;
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

predict_prostate.state.run_time.route_change.pubsub$feeds$TopicFeed$subscribe$arity$2(null,(function (_,p__37566){
var vec__37567 = p__37566;
var page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37567,(0),null);
var param1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37567,(1),null);
var param2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37567,(2),null);
var rvec = vec__37567;
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
var new_lang_37775 = new cljs.core.Keyword(null,"lang","lang",-1819677104).cljs$core$IFn$_invoke$arity$1(predict_prostate.state.localStorage.get_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"en","en",88457073)], null)));
predict_prostate.state.mutations.reload_lang(cljs.core.name(new_lang_37775));

return translations.tongue_base.load_translations_STAR_(url,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(translations.tongue_base.handle_dictionary,predict_prostate.state.run_time.t_state_cursor));
}));

predict_prostate.state.run_time.edit_change.pubsub$feeds$TopicFeed$subscribe$arity$2(null,(function (_,arg){
var text = (function (){var fexpr__37570 = cljs.core.deref(predict_prostate.state.run_time.ttt_cursor);
return (fexpr__37570.cljs$core$IFn$_invoke$arity$1 ? fexpr__37570.cljs$core$IFn$_invoke$arity$1(arg) : fexpr__37570.call(null,arg));
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(predict_prostate.state.run_time.edit_cursor,cljs.core.assoc,new cljs.core.Keyword(null,"edit-arg","edit-arg",1216866257),arg,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"edit-key","edit-key",-1833788727),((((cljs.core.vector_QMARK_(arg)) && ((cljs.core.count(arg) > (0)))))?cljs.core.first(arg):arg),new cljs.core.Keyword(null,"text","text",-1790561697),((((cljs.core.vector_QMARK_(arg)) && ((cljs.core.count(arg) > (1)))))?cljs.core.second(arg):text)], 0));

return $("#editorModal").modal("show");
}));

predict_prostate.state.run_time.new_text_change.pubsub$feeds$TopicFeed$subscribe$arity$2(null,(function (_,p__37571){
var vec__37572 = p__37571;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37572,(0),null);
var new_text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37572,(1),null);
return cljs.core.reset_BANG_(predict_prostate.state.run_time.new_text_cursor,new_text);
}));

predict_prostate.state.run_time.text_change.pubsub$feeds$TopicFeed$subscribe$arity$2(null,(function (_,p__37575){
var vec__37576 = p__37575;
var edit_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37576,(0),null);
var new_text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37576,(1),null);
var lang = new cljs.core.Keyword(null,"lang","lang",-1819677104).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(predict_prostate.state.run_time.t_state_cursor));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(predict_prostate.state.run_time.t_state_cursor,translations.tongue_base.process_dict_op,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"upsert","upsert",1416724984),new cljs.core.Keyword(null,"lang","lang",-1819677104).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(predict_prostate.state.run_time.t_state_cursor)),cljs.core.PersistentArrayMap.createAsIfByAssoc([edit_key,new_text])], null));

cljs.core.reset_BANG_(predict_prostate.state.run_time.new_text_cursor,null);

return translations.tranny_api.upload_translation.cljs$core$IFn$_invoke$arity$3(edit_key,cljs.core.name(lang),new_text);
}));

predict_prostate.state.run_time.add_language_modal.pubsub$feeds$TopicFeed$subscribe$arity$2(null,(function (_){
return $("#newLanguageModal").modal("show");
}));

predict_prostate.state.run_time.add_language.pubsub$feeds$TopicFeed$subscribe$arity$2(null,(function (_,p__37579){
var vec__37580 = p__37579;
var new_lang = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37580,(0),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(new_lang))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(predict_prostate.state.run_time.t_state_cursor,cljs.core.update,new cljs.core.Keyword(null,"languages","languages",1471910331),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(new_lang)], 0));
} else {
return null;
}
}));

return predict_prostate.state.mutations.clear_inputs();
});

//# sourceMappingURL=predict_prostate.state.mutations.js.map
