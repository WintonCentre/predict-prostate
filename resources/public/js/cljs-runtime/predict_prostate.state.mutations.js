goog.provide('predict_prostate.state.mutations');
predict_prostate.state.mutations.paq = window._paq;
/**
 * Send an event to matemo. 
 */
predict_prostate.state.mutations.matomo_track = (function predict_prostate$state$mutations$matomo_track(var_args){
var G__84269 = arguments.length;
switch (G__84269) {
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
var seq__84321_84678 = cljs.core.seq(predict_prostate.state.run_time.input_changes());
var chunk__84324_84679 = null;
var count__84325_84680 = (0);
var i__84326_84681 = (0);
while(true){
if((i__84326_84681 < count__84325_84680)){
var vec__84383_84688 = chunk__84324_84679.cljs$core$IIndexed$_nth$arity$2(null,i__84326_84681);
var key_84689 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84383_84688,(0),null);
var topic_84690 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84383_84688,(1),null);
if(cljs.core.truth_(key_84689)){
if(cljs.core.truth_(topic_84690)){

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_84689,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355))){
var map__84387_84691 = predict_prostate.state.localStorage.get_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),new cljs.core.Keyword(null,"line2","line2",-1975668782)], null));
var map__84387_84692__$1 = (((((!((map__84387_84691 == null))))?(((((map__84387_84691.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__84387_84691.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__84387_84691):map__84387_84691);
var plot_style_84693 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84387_84692__$1,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355));
if(cljs.core.truth_((function (){var fexpr__84398 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"area1","area1",-316994623),null,new cljs.core.Keyword(null,"line2","line2",-1975668782),null], null), null);
return (fexpr__84398.cljs$core$IFn$_invoke$arity$1 ? fexpr__84398.cljs$core$IFn$_invoke$arity$1(plot_style_84693) : fexpr__84398.call(null,plot_style_84693));
})())){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),plot_style_84693);
} else {
predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),new cljs.core.Keyword(null,"line2","line2",-1975668782)], null));

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),new cljs.core.Keyword(null,"line2","line2",-1975668782));
}
} else {
pubsub.feeds.publish(topic_84690,(cljs.core.truth_((function (){var fexpr__84403 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"age","age",-604307804),null,new cljs.core.Keyword(null,"psa","psa",-321761459),null], null), null);
return (fexpr__84403.cljs$core$IFn$_invoke$arity$1 ? fexpr__84403.cljs$core$IFn$_invoke$arity$1(key_84689) : fexpr__84403.call(null,key_84689));
})())?"":null));

}


var G__84694 = seq__84321_84678;
var G__84695 = chunk__84324_84679;
var G__84696 = count__84325_84680;
var G__84697 = (i__84326_84681 + (1));
seq__84321_84678 = G__84694;
chunk__84324_84679 = G__84695;
count__84325_84680 = G__84696;
i__84326_84681 = G__84697;
continue;
} else {
var G__84698 = seq__84321_84678;
var G__84699 = chunk__84324_84679;
var G__84700 = count__84325_84680;
var G__84701 = (i__84326_84681 + (1));
seq__84321_84678 = G__84698;
chunk__84324_84679 = G__84699;
count__84325_84680 = G__84700;
i__84326_84681 = G__84701;
continue;
}
} else {
var G__84702 = seq__84321_84678;
var G__84703 = chunk__84324_84679;
var G__84704 = count__84325_84680;
var G__84705 = (i__84326_84681 + (1));
seq__84321_84678 = G__84702;
chunk__84324_84679 = G__84703;
count__84325_84680 = G__84704;
i__84326_84681 = G__84705;
continue;
}
} else {
var temp__5735__auto___84706 = cljs.core.seq(seq__84321_84678);
if(temp__5735__auto___84706){
var seq__84321_84707__$1 = temp__5735__auto___84706;
if(cljs.core.chunked_seq_QMARK_(seq__84321_84707__$1)){
var c__4556__auto___84708 = cljs.core.chunk_first(seq__84321_84707__$1);
var G__84709 = cljs.core.chunk_rest(seq__84321_84707__$1);
var G__84710 = c__4556__auto___84708;
var G__84711 = cljs.core.count(c__4556__auto___84708);
var G__84712 = (0);
seq__84321_84678 = G__84709;
chunk__84324_84679 = G__84710;
count__84325_84680 = G__84711;
i__84326_84681 = G__84712;
continue;
} else {
var vec__84408_84713 = cljs.core.first(seq__84321_84707__$1);
var key_84714 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84408_84713,(0),null);
var topic_84715 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84408_84713,(1),null);
if(cljs.core.truth_(key_84714)){
if(cljs.core.truth_(topic_84715)){

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_84714,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355))){
var map__84412_84716 = predict_prostate.state.localStorage.get_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),new cljs.core.Keyword(null,"line2","line2",-1975668782)], null));
var map__84412_84717__$1 = (((((!((map__84412_84716 == null))))?(((((map__84412_84716.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__84412_84716.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__84412_84716):map__84412_84716);
var plot_style_84718 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84412_84717__$1,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355));
if(cljs.core.truth_((function (){var fexpr__84415 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"area1","area1",-316994623),null,new cljs.core.Keyword(null,"line2","line2",-1975668782),null], null), null);
return (fexpr__84415.cljs$core$IFn$_invoke$arity$1 ? fexpr__84415.cljs$core$IFn$_invoke$arity$1(plot_style_84718) : fexpr__84415.call(null,plot_style_84718));
})())){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),plot_style_84718);
} else {
predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),new cljs.core.Keyword(null,"line2","line2",-1975668782)], null));

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),new cljs.core.Keyword(null,"line2","line2",-1975668782));
}
} else {
pubsub.feeds.publish(topic_84715,(cljs.core.truth_((function (){var fexpr__84431 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"age","age",-604307804),null,new cljs.core.Keyword(null,"psa","psa",-321761459),null], null), null);
return (fexpr__84431.cljs$core$IFn$_invoke$arity$1 ? fexpr__84431.cljs$core$IFn$_invoke$arity$1(key_84714) : fexpr__84431.call(null,key_84714));
})())?"":null));

}


var G__84719 = cljs.core.next(seq__84321_84707__$1);
var G__84720 = null;
var G__84721 = (0);
var G__84722 = (0);
seq__84321_84678 = G__84719;
chunk__84324_84679 = G__84720;
count__84325_84680 = G__84721;
i__84326_84681 = G__84722;
continue;
} else {
var G__84723 = cljs.core.next(seq__84321_84707__$1);
var G__84724 = null;
var G__84725 = (0);
var G__84726 = (0);
seq__84321_84678 = G__84723;
chunk__84324_84679 = G__84724;
count__84325_84680 = G__84725;
i__84326_84681 = G__84726;
continue;
}
} else {
var G__84727 = cljs.core.next(seq__84321_84707__$1);
var G__84728 = null;
var G__84729 = (0);
var G__84730 = (0);
seq__84321_84678 = G__84727;
chunk__84324_84679 = G__84728;
count__84325_84680 = G__84729;
i__84326_84681 = G__84730;
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
var len__4736__auto___84731 = arguments.length;
var i__4737__auto___84732 = (0);
while(true){
if((i__4737__auto___84732 < len__4736__auto___84731)){
args__4742__auto__.push((arguments[i__4737__auto___84732]));

var G__84733 = (i__4737__auto___84732 + (1));
i__4737__auto___84732 = G__84733;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return predict_prostate.state.mutations.subscribe_to.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(predict_prostate.state.mutations.subscribe_to.cljs$core$IFn$_invoke$arity$variadic = (function (change,cursor,p__84458){
var vec__84459 = p__84458;
var silent = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84459,(0),null);
return pubsub.feeds.subscribe(change,(function (p1__84447_SHARP_,p2__84448_SHARP_){
if(cljs.core.truth_(silent)){
} else {
predict_prostate.state.mutations.log(p1__84447_SHARP_,cljs.core.deref(cursor),p2__84448_SHARP_);
}

return cljs.core.reset_BANG_(cursor,p2__84448_SHARP_);
}));
}));

(predict_prostate.state.mutations.subscribe_to.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(predict_prostate.state.mutations.subscribe_to.cljs$lang$applyTo = (function (seq84450){
var G__84451 = cljs.core.first(seq84450);
var seq84450__$1 = cljs.core.next(seq84450);
var G__84452 = cljs.core.first(seq84450__$1);
var seq84450__$2 = cljs.core.next(seq84450__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__84451,G__84452,seq84450__$2);
}));

predict_prostate.state.mutations.clip = (function predict_prostate$state$mutations$clip(p__84478){
var map__84480 = p__84478;
var map__84480__$1 = (((((!((map__84480 == null))))?(((((map__84480.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__84480.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__84480):map__84480);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84480__$1,new cljs.core.Keyword(null,"value","value",305978217));
var min = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84480__$1,new cljs.core.Keyword(null,"min","min",444991522));
var max = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84480__$1,new cljs.core.Keyword(null,"max","max",61366548));
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
var seq__84507_84734 = cljs.core.seq(predict_prostate.state.run_time.input_changes());
var chunk__84508_84735 = null;
var count__84509_84736 = (0);
var i__84510_84737 = (0);
while(true){
if((i__84510_84737 < count__84509_84736)){
var vec__84558_84738 = chunk__84508_84735.cljs$core$IIndexed$_nth$arity$2(null,i__84510_84737);
var key_84739 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84558_84738,(0),null);
var change_84740 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84558_84738,(1),null);
if(cljs.core.truth_(change_84740)){
pubsub.feeds.subscribe(change_84740,((function (seq__84507_84734,chunk__84508_84735,count__84509_84736,i__84510_84737,vec__84558_84738,key_84739,change_84740){
return (function (topic,value){
predict_prostate.state.mutations.log(topic,cljs.core.deref(predict_prostate.state.run_time.input_cursor(key_84739)),value);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666),key_84739)){
var vec__84564_84741 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(value,":");
var value_84742__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84564_84741,(0),null);
var bad_84743 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84564_84741,(1),null);
var bci_84744 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520))));
var bct_84745 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666))));
if(cljs.core.truth_(isNaN(bci_84744))){
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520)),predict_prostate.state.mutations.num_to_str((function (){var x__4214__auto__ = (1);
var y__4215__auto__ = (function (){var x__4217__auto__ = bci_84744;
var y__4218__auto__ = predict_prostate.state.mutations.str_to_num(value_84742__$1);
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})();
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})()));
}

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_84742__$1),(cljs.core.truth_(bad_84743)?":":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(bad_84743)].join(''));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520),key_84739)){
var vec__84569_84746 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(value,":");
var value_84747__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84569_84746,(0),null);
var bad_84748 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84569_84746,(1),null);
var bci_84749 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520))));
var bct_84750 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666))));
if(cljs.core.not(isNaN(bct_84750))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_84747__$1),(cljs.core.truth_((function (){var or__4126__auto__ = (value_84747__$1 < (0));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return bad_84748;
}
})())?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_84747__$1)].join(''):"")].join(''));
} else {
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_84739,new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969)),value);

predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969),value], null));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,new cljs.core.Keyword(null,"gleason","gleason",-2044470526))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526)),cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518))));
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518)),cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526))));
}
} else {
if(cljs.core.truth_((function (){var fexpr__84573 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gleason","gleason",-2044470526),null,new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518),null], null), null);
return (fexpr__84573.cljs$core$IFn$_invoke$arity$1 ? fexpr__84573.cljs$core$IFn$_invoke$arity$1(key_84739) : fexpr__84573.call(null,key_84739));
})())){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526)),value);

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518)),value);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_84739,new cljs.core.Keyword(null,"h-admissions","h-admissions",-1503094844))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"h-admissions","h-admissions",-1503094844)),value);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,(0))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"charlson-comorbidity","charlson-comorbidity",-633596907)),null);
} else {
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_84739,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),value);

predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),value], null));
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(key_84739),(((value == null))?predict_prostate.state.config.get_input_default(predict_prostate.state.config.input_groups,key_84739):value));

}
}
}
}
}
}

return predict_prostate.models.runner.recalculate_model.cljs$core$IFn$_invoke$arity$2(predict_prostate.state.run_time.input_map(),predict_prostate.state.run_time.N);
});})(seq__84507_84734,chunk__84508_84735,count__84509_84736,i__84510_84737,vec__84558_84738,key_84739,change_84740))
);
} else {
}


var G__84752 = seq__84507_84734;
var G__84753 = chunk__84508_84735;
var G__84754 = count__84509_84736;
var G__84755 = (i__84510_84737 + (1));
seq__84507_84734 = G__84752;
chunk__84508_84735 = G__84753;
count__84509_84736 = G__84754;
i__84510_84737 = G__84755;
continue;
} else {
var temp__5735__auto___84756 = cljs.core.seq(seq__84507_84734);
if(temp__5735__auto___84756){
var seq__84507_84757__$1 = temp__5735__auto___84756;
if(cljs.core.chunked_seq_QMARK_(seq__84507_84757__$1)){
var c__4556__auto___84758 = cljs.core.chunk_first(seq__84507_84757__$1);
var G__84759 = cljs.core.chunk_rest(seq__84507_84757__$1);
var G__84760 = c__4556__auto___84758;
var G__84761 = cljs.core.count(c__4556__auto___84758);
var G__84762 = (0);
seq__84507_84734 = G__84759;
chunk__84508_84735 = G__84760;
count__84509_84736 = G__84761;
i__84510_84737 = G__84762;
continue;
} else {
var vec__84574_84763 = cljs.core.first(seq__84507_84757__$1);
var key_84764 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84574_84763,(0),null);
var change_84765 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84574_84763,(1),null);
if(cljs.core.truth_(change_84765)){
pubsub.feeds.subscribe(change_84765,((function (seq__84507_84734,chunk__84508_84735,count__84509_84736,i__84510_84737,vec__84574_84763,key_84764,change_84765,seq__84507_84757__$1,temp__5735__auto___84756){
return (function (topic,value){
predict_prostate.state.mutations.log(topic,cljs.core.deref(predict_prostate.state.run_time.input_cursor(key_84764)),value);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666),key_84764)){
var vec__84579_84766 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(value,":");
var value_84767__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84579_84766,(0),null);
var bad_84768 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84579_84766,(1),null);
var bci_84769 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520))));
var bct_84770 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666))));
if(cljs.core.truth_(isNaN(bci_84769))){
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520)),predict_prostate.state.mutations.num_to_str((function (){var x__4214__auto__ = (1);
var y__4215__auto__ = (function (){var x__4217__auto__ = bci_84769;
var y__4218__auto__ = predict_prostate.state.mutations.str_to_num(value_84767__$1);
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})();
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})()));
}

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_84767__$1),(cljs.core.truth_(bad_84768)?":":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(bad_84768)].join(''));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520),key_84764)){
var vec__84583_84772 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(value,":");
var value_84773__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84583_84772,(0),null);
var bad_84774 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84583_84772,(1),null);
var bci_84775 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520))));
var bct_84776 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666))));
if(cljs.core.not(isNaN(bct_84776))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_84773__$1),(cljs.core.truth_((function (){var or__4126__auto__ = (value_84773__$1 < (0));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return bad_84774;
}
})())?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_84773__$1)].join(''):"")].join(''));
} else {
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_84764,new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969)),value);

predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969),value], null));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,new cljs.core.Keyword(null,"gleason","gleason",-2044470526))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526)),cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518))));
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518)),cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526))));
}
} else {
if(cljs.core.truth_((function (){var fexpr__84603 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gleason","gleason",-2044470526),null,new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518),null], null), null);
return (fexpr__84603.cljs$core$IFn$_invoke$arity$1 ? fexpr__84603.cljs$core$IFn$_invoke$arity$1(key_84764) : fexpr__84603.call(null,key_84764));
})())){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526)),value);

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518)),value);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_84764,new cljs.core.Keyword(null,"h-admissions","h-admissions",-1503094844))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"h-admissions","h-admissions",-1503094844)),value);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,(0))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"charlson-comorbidity","charlson-comorbidity",-633596907)),null);
} else {
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_84764,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),value);

predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),value], null));
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(key_84764),(((value == null))?predict_prostate.state.config.get_input_default(predict_prostate.state.config.input_groups,key_84764):value));

}
}
}
}
}
}

return predict_prostate.models.runner.recalculate_model.cljs$core$IFn$_invoke$arity$2(predict_prostate.state.run_time.input_map(),predict_prostate.state.run_time.N);
});})(seq__84507_84734,chunk__84508_84735,count__84509_84736,i__84510_84737,vec__84574_84763,key_84764,change_84765,seq__84507_84757__$1,temp__5735__auto___84756))
);
} else {
}


var G__84785 = cljs.core.next(seq__84507_84757__$1);
var G__84786 = null;
var G__84787 = (0);
var G__84788 = (0);
seq__84507_84734 = G__84785;
chunk__84508_84735 = G__84786;
count__84509_84736 = G__84787;
i__84510_84737 = G__84788;
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

predict_prostate.state.run_time.route_change.pubsub$feeds$TopicFeed$subscribe$arity$2(null,(function (_,p__84628){
var vec__84630 = p__84628;
var page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84630,(0),null);
var param1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84630,(1),null);
var param2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84630,(2),null);
var rvec = vec__84630;
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
var new_lang_84794 = new cljs.core.Keyword(null,"lang","lang",-1819677104).cljs$core$IFn$_invoke$arity$1(predict_prostate.state.localStorage.get_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"en","en",88457073)], null)));
predict_prostate.state.mutations.reload_lang(cljs.core.name(new_lang_84794));

return translations.tongue_base.load_translations_STAR_(url,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(translations.tongue_base.handle_dictionary,predict_prostate.state.run_time.t_state_cursor));
}));

predict_prostate.state.run_time.edit_change.pubsub$feeds$TopicFeed$subscribe$arity$2(null,(function (_,arg){
var text = (function (){var fexpr__84653 = cljs.core.deref(predict_prostate.state.run_time.ttt_cursor);
return (fexpr__84653.cljs$core$IFn$_invoke$arity$1 ? fexpr__84653.cljs$core$IFn$_invoke$arity$1(arg) : fexpr__84653.call(null,arg));
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(predict_prostate.state.run_time.edit_cursor,cljs.core.assoc,new cljs.core.Keyword(null,"edit-arg","edit-arg",1216866257),arg,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"edit-key","edit-key",-1833788727),((((cljs.core.vector_QMARK_(arg)) && ((cljs.core.count(arg) > (0)))))?cljs.core.first(arg):arg),new cljs.core.Keyword(null,"text","text",-1790561697),((((cljs.core.vector_QMARK_(arg)) && ((cljs.core.count(arg) > (1)))))?cljs.core.second(arg):text)], 0));

return $("#editorModal").modal("show");
}));

predict_prostate.state.run_time.new_text_change.pubsub$feeds$TopicFeed$subscribe$arity$2(null,(function (_,p__84660){
var vec__84661 = p__84660;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84661,(0),null);
var new_text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84661,(1),null);
return cljs.core.reset_BANG_(predict_prostate.state.run_time.new_text_cursor,new_text);
}));

predict_prostate.state.run_time.text_change.pubsub$feeds$TopicFeed$subscribe$arity$2(null,(function (_,p__84665){
var vec__84666 = p__84665;
var edit_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84666,(0),null);
var new_text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84666,(1),null);
var lang = new cljs.core.Keyword(null,"lang","lang",-1819677104).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(predict_prostate.state.run_time.t_state_cursor));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(predict_prostate.state.run_time.t_state_cursor,translations.tongue_base.process_dict_op,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"upsert","upsert",1416724984),new cljs.core.Keyword(null,"lang","lang",-1819677104).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(predict_prostate.state.run_time.t_state_cursor)),cljs.core.PersistentArrayMap.createAsIfByAssoc([edit_key,new_text])], null));

cljs.core.reset_BANG_(predict_prostate.state.run_time.new_text_cursor,null);

return translations.tranny_api.upload_translation.cljs$core$IFn$_invoke$arity$3(edit_key,cljs.core.name(lang),new_text);
}));

predict_prostate.state.run_time.add_language_modal.pubsub$feeds$TopicFeed$subscribe$arity$2(null,(function (_){
return $("#newLanguageModal").modal("show");
}));

predict_prostate.state.run_time.add_language.pubsub$feeds$TopicFeed$subscribe$arity$2(null,(function (_,p__84670){
var vec__84671 = p__84670;
var new_lang = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84671,(0),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(new_lang))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(predict_prostate.state.run_time.t_state_cursor,cljs.core.update,new cljs.core.Keyword(null,"languages","languages",1471910331),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(new_lang)], 0));
} else {
return null;
}
}));

return predict_prostate.state.mutations.clear_inputs();
});

//# sourceMappingURL=predict_prostate.state.mutations.js.map
