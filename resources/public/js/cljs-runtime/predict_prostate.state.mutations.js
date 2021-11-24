goog.provide('predict_prostate.state.mutations');
predict_prostate.state.mutations.paq = window._paq;
/**
 * Send an event to matemo. 
 */
predict_prostate.state.mutations.matomo_track = (function predict_prostate$state$mutations$matomo_track(var_args){
var G__55324 = arguments.length;
switch (G__55324) {
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
var seq__55325_55674 = cljs.core.seq(predict_prostate.state.run_time.input_changes());
var chunk__55328_55675 = null;
var count__55329_55676 = (0);
var i__55330_55677 = (0);
while(true){
if((i__55330_55677 < count__55329_55676)){
var vec__55351_55682 = chunk__55328_55675.cljs$core$IIndexed$_nth$arity$2(null,i__55330_55677);
var key_55683 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55351_55682,(0),null);
var topic_55684 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55351_55682,(1),null);
if(cljs.core.truth_(key_55683)){
if(cljs.core.truth_(topic_55684)){

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_55683,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355))){
var map__55354_55685 = predict_prostate.state.localStorage.get_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),new cljs.core.Keyword(null,"line2","line2",-1975668782)], null));
var map__55354_55686__$1 = (((((!((map__55354_55685 == null))))?(((((map__55354_55685.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55354_55685.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55354_55685):map__55354_55685);
var plot_style_55687 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55354_55686__$1,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355));
if(cljs.core.truth_((function (){var fexpr__55356 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"area1","area1",-316994623),null,new cljs.core.Keyword(null,"line2","line2",-1975668782),null], null), null);
return (fexpr__55356.cljs$core$IFn$_invoke$arity$1 ? fexpr__55356.cljs$core$IFn$_invoke$arity$1(plot_style_55687) : fexpr__55356.call(null,plot_style_55687));
})())){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),plot_style_55687);
} else {
predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),new cljs.core.Keyword(null,"line2","line2",-1975668782)], null));

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),new cljs.core.Keyword(null,"line2","line2",-1975668782));
}
} else {
pubsub.feeds.publish(topic_55684,(cljs.core.truth_((function (){var fexpr__55357 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"age","age",-604307804),null,new cljs.core.Keyword(null,"psa","psa",-321761459),null], null), null);
return (fexpr__55357.cljs$core$IFn$_invoke$arity$1 ? fexpr__55357.cljs$core$IFn$_invoke$arity$1(key_55683) : fexpr__55357.call(null,key_55683));
})())?"":null));

}


var G__55688 = seq__55325_55674;
var G__55689 = chunk__55328_55675;
var G__55690 = count__55329_55676;
var G__55691 = (i__55330_55677 + (1));
seq__55325_55674 = G__55688;
chunk__55328_55675 = G__55689;
count__55329_55676 = G__55690;
i__55330_55677 = G__55691;
continue;
} else {
var G__55692 = seq__55325_55674;
var G__55693 = chunk__55328_55675;
var G__55694 = count__55329_55676;
var G__55695 = (i__55330_55677 + (1));
seq__55325_55674 = G__55692;
chunk__55328_55675 = G__55693;
count__55329_55676 = G__55694;
i__55330_55677 = G__55695;
continue;
}
} else {
var G__55696 = seq__55325_55674;
var G__55697 = chunk__55328_55675;
var G__55698 = count__55329_55676;
var G__55699 = (i__55330_55677 + (1));
seq__55325_55674 = G__55696;
chunk__55328_55675 = G__55697;
count__55329_55676 = G__55698;
i__55330_55677 = G__55699;
continue;
}
} else {
var temp__5735__auto___55700 = cljs.core.seq(seq__55325_55674);
if(temp__5735__auto___55700){
var seq__55325_55701__$1 = temp__5735__auto___55700;
if(cljs.core.chunked_seq_QMARK_(seq__55325_55701__$1)){
var c__4556__auto___55702 = cljs.core.chunk_first(seq__55325_55701__$1);
var G__55703 = cljs.core.chunk_rest(seq__55325_55701__$1);
var G__55704 = c__4556__auto___55702;
var G__55705 = cljs.core.count(c__4556__auto___55702);
var G__55706 = (0);
seq__55325_55674 = G__55703;
chunk__55328_55675 = G__55704;
count__55329_55676 = G__55705;
i__55330_55677 = G__55706;
continue;
} else {
var vec__55363_55707 = cljs.core.first(seq__55325_55701__$1);
var key_55708 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55363_55707,(0),null);
var topic_55709 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55363_55707,(1),null);
if(cljs.core.truth_(key_55708)){
if(cljs.core.truth_(topic_55709)){

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_55708,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355))){
var map__55366_55710 = predict_prostate.state.localStorage.get_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),new cljs.core.Keyword(null,"line2","line2",-1975668782)], null));
var map__55366_55711__$1 = (((((!((map__55366_55710 == null))))?(((((map__55366_55710.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55366_55710.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55366_55710):map__55366_55710);
var plot_style_55712 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55366_55711__$1,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355));
if(cljs.core.truth_((function (){var fexpr__55371 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"area1","area1",-316994623),null,new cljs.core.Keyword(null,"line2","line2",-1975668782),null], null), null);
return (fexpr__55371.cljs$core$IFn$_invoke$arity$1 ? fexpr__55371.cljs$core$IFn$_invoke$arity$1(plot_style_55712) : fexpr__55371.call(null,plot_style_55712));
})())){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),plot_style_55712);
} else {
predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),new cljs.core.Keyword(null,"line2","line2",-1975668782)], null));

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),new cljs.core.Keyword(null,"line2","line2",-1975668782));
}
} else {
pubsub.feeds.publish(topic_55709,(cljs.core.truth_((function (){var fexpr__55372 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"age","age",-604307804),null,new cljs.core.Keyword(null,"psa","psa",-321761459),null], null), null);
return (fexpr__55372.cljs$core$IFn$_invoke$arity$1 ? fexpr__55372.cljs$core$IFn$_invoke$arity$1(key_55708) : fexpr__55372.call(null,key_55708));
})())?"":null));

}


var G__55714 = cljs.core.next(seq__55325_55701__$1);
var G__55715 = null;
var G__55716 = (0);
var G__55717 = (0);
seq__55325_55674 = G__55714;
chunk__55328_55675 = G__55715;
count__55329_55676 = G__55716;
i__55330_55677 = G__55717;
continue;
} else {
var G__55718 = cljs.core.next(seq__55325_55701__$1);
var G__55719 = null;
var G__55720 = (0);
var G__55721 = (0);
seq__55325_55674 = G__55718;
chunk__55328_55675 = G__55719;
count__55329_55676 = G__55720;
i__55330_55677 = G__55721;
continue;
}
} else {
var G__55722 = cljs.core.next(seq__55325_55701__$1);
var G__55723 = null;
var G__55724 = (0);
var G__55725 = (0);
seq__55325_55674 = G__55722;
chunk__55328_55675 = G__55723;
count__55329_55676 = G__55724;
i__55330_55677 = G__55725;
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
var len__4736__auto___55726 = arguments.length;
var i__4737__auto___55727 = (0);
while(true){
if((i__4737__auto___55727 < len__4736__auto___55726)){
args__4742__auto__.push((arguments[i__4737__auto___55727]));

var G__55728 = (i__4737__auto___55727 + (1));
i__4737__auto___55727 = G__55728;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return predict_prostate.state.mutations.subscribe_to.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(predict_prostate.state.mutations.subscribe_to.cljs$core$IFn$_invoke$arity$variadic = (function (change,cursor,p__55401){
var vec__55402 = p__55401;
var silent = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55402,(0),null);
return pubsub.feeds.subscribe(change,(function (p1__55376_SHARP_,p2__55377_SHARP_){
if(cljs.core.truth_(silent)){
} else {
predict_prostate.state.mutations.log(p1__55376_SHARP_,cljs.core.deref(cursor),p2__55377_SHARP_);
}

return cljs.core.reset_BANG_(cursor,p2__55377_SHARP_);
}));
}));

(predict_prostate.state.mutations.subscribe_to.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(predict_prostate.state.mutations.subscribe_to.cljs$lang$applyTo = (function (seq55379){
var G__55380 = cljs.core.first(seq55379);
var seq55379__$1 = cljs.core.next(seq55379);
var G__55381 = cljs.core.first(seq55379__$1);
var seq55379__$2 = cljs.core.next(seq55379__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__55380,G__55381,seq55379__$2);
}));

predict_prostate.state.mutations.clip = (function predict_prostate$state$mutations$clip(p__55496){
var map__55497 = p__55496;
var map__55497__$1 = (((((!((map__55497 == null))))?(((((map__55497.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55497.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55497):map__55497);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55497__$1,new cljs.core.Keyword(null,"value","value",305978217));
var min = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55497__$1,new cljs.core.Keyword(null,"min","min",444991522));
var max = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55497__$1,new cljs.core.Keyword(null,"max","max",61366548));
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
var seq__55503_55729 = cljs.core.seq(predict_prostate.state.run_time.input_changes());
var chunk__55504_55730 = null;
var count__55505_55731 = (0);
var i__55506_55732 = (0);
while(true){
if((i__55506_55732 < count__55505_55731)){
var vec__55540_55733 = chunk__55504_55730.cljs$core$IIndexed$_nth$arity$2(null,i__55506_55732);
var key_55734 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55540_55733,(0),null);
var change_55735 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55540_55733,(1),null);
if(cljs.core.truth_(change_55735)){
pubsub.feeds.subscribe(change_55735,((function (seq__55503_55729,chunk__55504_55730,count__55505_55731,i__55506_55732,vec__55540_55733,key_55734,change_55735){
return (function (topic,value){
predict_prostate.state.mutations.log(topic,cljs.core.deref(predict_prostate.state.run_time.input_cursor(key_55734)),value);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666),key_55734)){
var vec__55547_55736 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(value,":");
var value_55737__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55547_55736,(0),null);
var bad_55738 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55547_55736,(1),null);
var bci_55739 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520))));
var bct_55740 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666))));
if(cljs.core.truth_(isNaN(bci_55739))){
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520)),predict_prostate.state.mutations.num_to_str((function (){var x__4214__auto__ = (1);
var y__4215__auto__ = (function (){var x__4217__auto__ = bci_55739;
var y__4218__auto__ = predict_prostate.state.mutations.str_to_num(value_55737__$1);
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})();
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})()));
}

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_55737__$1),(cljs.core.truth_(bad_55738)?":":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(bad_55738)].join(''));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520),key_55734)){
var vec__55550_55741 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(value,":");
var value_55742__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55550_55741,(0),null);
var bad_55743 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55550_55741,(1),null);
var bci_55744 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520))));
var bct_55745 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666))));
if(cljs.core.not(isNaN(bct_55745))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_55742__$1),(cljs.core.truth_((function (){var or__4126__auto__ = (value_55742__$1 < (0));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return bad_55743;
}
})())?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_55742__$1)].join(''):"")].join(''));
} else {
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_55734,new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969)),value);

predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969),value], null));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,new cljs.core.Keyword(null,"gleason","gleason",-2044470526))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526)),cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518))));
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518)),cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526))));
}
} else {
if(cljs.core.truth_((function (){var fexpr__55554 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gleason","gleason",-2044470526),null,new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518),null], null), null);
return (fexpr__55554.cljs$core$IFn$_invoke$arity$1 ? fexpr__55554.cljs$core$IFn$_invoke$arity$1(key_55734) : fexpr__55554.call(null,key_55734));
})())){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526)),value);

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518)),value);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_55734,new cljs.core.Keyword(null,"h-admissions","h-admissions",-1503094844))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"h-admissions","h-admissions",-1503094844)),value);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,(0))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"charlson-comorbidity","charlson-comorbidity",-633596907)),null);
} else {
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_55734,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),value);

predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),value], null));
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(key_55734),(((value == null))?predict_prostate.state.config.get_input_default(predict_prostate.state.config.input_groups,key_55734):value));

}
}
}
}
}
}

return predict_prostate.models.runner.recalculate_model.cljs$core$IFn$_invoke$arity$2(predict_prostate.state.run_time.input_map(),predict_prostate.state.run_time.N);
});})(seq__55503_55729,chunk__55504_55730,count__55505_55731,i__55506_55732,vec__55540_55733,key_55734,change_55735))
);
} else {
}


var G__55746 = seq__55503_55729;
var G__55747 = chunk__55504_55730;
var G__55748 = count__55505_55731;
var G__55749 = (i__55506_55732 + (1));
seq__55503_55729 = G__55746;
chunk__55504_55730 = G__55747;
count__55505_55731 = G__55748;
i__55506_55732 = G__55749;
continue;
} else {
var temp__5735__auto___55750 = cljs.core.seq(seq__55503_55729);
if(temp__5735__auto___55750){
var seq__55503_55751__$1 = temp__5735__auto___55750;
if(cljs.core.chunked_seq_QMARK_(seq__55503_55751__$1)){
var c__4556__auto___55752 = cljs.core.chunk_first(seq__55503_55751__$1);
var G__55753 = cljs.core.chunk_rest(seq__55503_55751__$1);
var G__55754 = c__4556__auto___55752;
var G__55755 = cljs.core.count(c__4556__auto___55752);
var G__55756 = (0);
seq__55503_55729 = G__55753;
chunk__55504_55730 = G__55754;
count__55505_55731 = G__55755;
i__55506_55732 = G__55756;
continue;
} else {
var vec__55562_55757 = cljs.core.first(seq__55503_55751__$1);
var key_55758 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55562_55757,(0),null);
var change_55759 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55562_55757,(1),null);
if(cljs.core.truth_(change_55759)){
pubsub.feeds.subscribe(change_55759,((function (seq__55503_55729,chunk__55504_55730,count__55505_55731,i__55506_55732,vec__55562_55757,key_55758,change_55759,seq__55503_55751__$1,temp__5735__auto___55750){
return (function (topic,value){
predict_prostate.state.mutations.log(topic,cljs.core.deref(predict_prostate.state.run_time.input_cursor(key_55758)),value);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666),key_55758)){
var vec__55568_55760 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(value,":");
var value_55761__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55568_55760,(0),null);
var bad_55762 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55568_55760,(1),null);
var bci_55763 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520))));
var bct_55764 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666))));
if(cljs.core.truth_(isNaN(bci_55763))){
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520)),predict_prostate.state.mutations.num_to_str((function (){var x__4214__auto__ = (1);
var y__4215__auto__ = (function (){var x__4217__auto__ = bci_55763;
var y__4218__auto__ = predict_prostate.state.mutations.str_to_num(value_55761__$1);
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})();
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})()));
}

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_55761__$1),(cljs.core.truth_(bad_55762)?":":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(bad_55762)].join(''));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520),key_55758)){
var vec__55579_55765 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(value,":");
var value_55766__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55579_55765,(0),null);
var bad_55767 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55579_55765,(1),null);
var bci_55768 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520))));
var bct_55769 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666))));
if(cljs.core.not(isNaN(bct_55769))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_55766__$1),(cljs.core.truth_((function (){var or__4126__auto__ = (value_55766__$1 < (0));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return bad_55767;
}
})())?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_55766__$1)].join(''):"")].join(''));
} else {
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_55758,new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969)),value);

predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969),value], null));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,new cljs.core.Keyword(null,"gleason","gleason",-2044470526))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526)),cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518))));
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518)),cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526))));
}
} else {
if(cljs.core.truth_((function (){var fexpr__55599 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gleason","gleason",-2044470526),null,new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518),null], null), null);
return (fexpr__55599.cljs$core$IFn$_invoke$arity$1 ? fexpr__55599.cljs$core$IFn$_invoke$arity$1(key_55758) : fexpr__55599.call(null,key_55758));
})())){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526)),value);

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518)),value);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_55758,new cljs.core.Keyword(null,"h-admissions","h-admissions",-1503094844))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"h-admissions","h-admissions",-1503094844)),value);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,(0))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"charlson-comorbidity","charlson-comorbidity",-633596907)),null);
} else {
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_55758,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),value);

predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),value], null));
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(key_55758),(((value == null))?predict_prostate.state.config.get_input_default(predict_prostate.state.config.input_groups,key_55758):value));

}
}
}
}
}
}

return predict_prostate.models.runner.recalculate_model.cljs$core$IFn$_invoke$arity$2(predict_prostate.state.run_time.input_map(),predict_prostate.state.run_time.N);
});})(seq__55503_55729,chunk__55504_55730,count__55505_55731,i__55506_55732,vec__55562_55757,key_55758,change_55759,seq__55503_55751__$1,temp__5735__auto___55750))
);
} else {
}


var G__55770 = cljs.core.next(seq__55503_55751__$1);
var G__55771 = null;
var G__55772 = (0);
var G__55773 = (0);
seq__55503_55729 = G__55770;
chunk__55504_55730 = G__55771;
count__55505_55731 = G__55772;
i__55506_55732 = G__55773;
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

predict_prostate.state.run_time.route_change.pubsub$feeds$TopicFeed$subscribe$arity$2(null,(function (_,p__55615){
var vec__55616 = p__55615;
var page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55616,(0),null);
var param1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55616,(1),null);
var param2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55616,(2),null);
var rvec = vec__55616;
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
var new_lang_55774 = new cljs.core.Keyword(null,"lang","lang",-1819677104).cljs$core$IFn$_invoke$arity$1(predict_prostate.state.localStorage.get_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"en","en",88457073)], null)));
predict_prostate.state.mutations.reload_lang(cljs.core.name(new_lang_55774));

return translations.tongue_base.load_translations_STAR_(url,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(translations.tongue_base.handle_dictionary,predict_prostate.state.run_time.t_state_cursor));
}));

predict_prostate.state.run_time.edit_change.pubsub$feeds$TopicFeed$subscribe$arity$2(null,(function (_,arg){
var text = (function (){var fexpr__55636 = cljs.core.deref(predict_prostate.state.run_time.ttt_cursor);
return (fexpr__55636.cljs$core$IFn$_invoke$arity$1 ? fexpr__55636.cljs$core$IFn$_invoke$arity$1(arg) : fexpr__55636.call(null,arg));
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(predict_prostate.state.run_time.edit_cursor,cljs.core.assoc,new cljs.core.Keyword(null,"edit-arg","edit-arg",1216866257),arg,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"edit-key","edit-key",-1833788727),((((cljs.core.vector_QMARK_(arg)) && ((cljs.core.count(arg) > (0)))))?cljs.core.first(arg):arg),new cljs.core.Keyword(null,"text","text",-1790561697),((((cljs.core.vector_QMARK_(arg)) && ((cljs.core.count(arg) > (1)))))?cljs.core.second(arg):text)], 0));

return $("#editorModal").modal("show");
}));

predict_prostate.state.run_time.new_text_change.pubsub$feeds$TopicFeed$subscribe$arity$2(null,(function (_,p__55637){
var vec__55638 = p__55637;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55638,(0),null);
var new_text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55638,(1),null);
return cljs.core.reset_BANG_(predict_prostate.state.run_time.new_text_cursor,new_text);
}));

predict_prostate.state.run_time.text_change.pubsub$feeds$TopicFeed$subscribe$arity$2(null,(function (_,p__55641){
var vec__55642 = p__55641;
var edit_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55642,(0),null);
var new_text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55642,(1),null);
var lang = new cljs.core.Keyword(null,"lang","lang",-1819677104).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(predict_prostate.state.run_time.t_state_cursor));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(predict_prostate.state.run_time.t_state_cursor,translations.tongue_base.process_dict_op,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"upsert","upsert",1416724984),new cljs.core.Keyword(null,"lang","lang",-1819677104).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(predict_prostate.state.run_time.t_state_cursor)),cljs.core.PersistentArrayMap.createAsIfByAssoc([edit_key,new_text])], null));

cljs.core.reset_BANG_(predict_prostate.state.run_time.new_text_cursor,null);

return translations.tranny_api.upload_translation.cljs$core$IFn$_invoke$arity$3(edit_key,cljs.core.name(lang),new_text);
}));

predict_prostate.state.run_time.add_language_modal.pubsub$feeds$TopicFeed$subscribe$arity$2(null,(function (_){
return $("#newLanguageModal").modal("show");
}));

predict_prostate.state.run_time.add_language.pubsub$feeds$TopicFeed$subscribe$arity$2(null,(function (_,p__55656){
var vec__55660 = p__55656;
var new_lang = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55660,(0),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(new_lang))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(predict_prostate.state.run_time.t_state_cursor,cljs.core.update,new cljs.core.Keyword(null,"languages","languages",1471910331),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(new_lang)], 0));
} else {
return null;
}
}));

return predict_prostate.state.mutations.clear_inputs();
});

//# sourceMappingURL=predict_prostate.state.mutations.js.map
