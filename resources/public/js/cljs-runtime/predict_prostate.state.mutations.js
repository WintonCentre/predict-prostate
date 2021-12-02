goog.provide('predict_prostate.state.mutations');
predict_prostate.state.mutations.paq = window._paq;
/**
 * Send an event to matemo. 
 */
predict_prostate.state.mutations.matomo_track = (function predict_prostate$state$mutations$matomo_track(var_args){
var G__105501 = arguments.length;
switch (G__105501) {
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
var seq__105532_105968 = cljs.core.seq(predict_prostate.state.run_time.input_changes());
var chunk__105571_105969 = null;
var count__105572_105970 = (0);
var i__105574_105971 = (0);
while(true){
if((i__105574_105971 < count__105572_105970)){
var vec__105720_105972 = chunk__105571_105969.cljs$core$IIndexed$_nth$arity$2(null,i__105574_105971);
var key_105973 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__105720_105972,(0),null);
var topic_105974 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__105720_105972,(1),null);
if(cljs.core.truth_(key_105973)){
if(cljs.core.truth_(topic_105974)){

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_105973,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355))){
var map__105727_105975 = predict_prostate.state.localStorage.get_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),new cljs.core.Keyword(null,"line2","line2",-1975668782)], null));
var map__105727_105976__$1 = (((((!((map__105727_105975 == null))))?(((((map__105727_105975.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__105727_105975.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__105727_105975):map__105727_105975);
var plot_style_105977 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__105727_105976__$1,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355));
if(cljs.core.truth_((function (){var fexpr__105733 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"area1","area1",-316994623),null,new cljs.core.Keyword(null,"line2","line2",-1975668782),null], null), null);
return (fexpr__105733.cljs$core$IFn$_invoke$arity$1 ? fexpr__105733.cljs$core$IFn$_invoke$arity$1(plot_style_105977) : fexpr__105733.call(null,plot_style_105977));
})())){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),plot_style_105977);
} else {
predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),new cljs.core.Keyword(null,"line2","line2",-1975668782)], null));

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),new cljs.core.Keyword(null,"line2","line2",-1975668782));
}
} else {
pubsub.feeds.publish(topic_105974,(cljs.core.truth_((function (){var fexpr__105737 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"age","age",-604307804),null,new cljs.core.Keyword(null,"psa","psa",-321761459),null], null), null);
return (fexpr__105737.cljs$core$IFn$_invoke$arity$1 ? fexpr__105737.cljs$core$IFn$_invoke$arity$1(key_105973) : fexpr__105737.call(null,key_105973));
})())?"":null));

}


var G__105978 = seq__105532_105968;
var G__105979 = chunk__105571_105969;
var G__105980 = count__105572_105970;
var G__105981 = (i__105574_105971 + (1));
seq__105532_105968 = G__105978;
chunk__105571_105969 = G__105979;
count__105572_105970 = G__105980;
i__105574_105971 = G__105981;
continue;
} else {
var G__105982 = seq__105532_105968;
var G__105983 = chunk__105571_105969;
var G__105984 = count__105572_105970;
var G__105985 = (i__105574_105971 + (1));
seq__105532_105968 = G__105982;
chunk__105571_105969 = G__105983;
count__105572_105970 = G__105984;
i__105574_105971 = G__105985;
continue;
}
} else {
var G__105986 = seq__105532_105968;
var G__105987 = chunk__105571_105969;
var G__105988 = count__105572_105970;
var G__105989 = (i__105574_105971 + (1));
seq__105532_105968 = G__105986;
chunk__105571_105969 = G__105987;
count__105572_105970 = G__105988;
i__105574_105971 = G__105989;
continue;
}
} else {
var temp__5735__auto___105990 = cljs.core.seq(seq__105532_105968);
if(temp__5735__auto___105990){
var seq__105532_105991__$1 = temp__5735__auto___105990;
if(cljs.core.chunked_seq_QMARK_(seq__105532_105991__$1)){
var c__4556__auto___105992 = cljs.core.chunk_first(seq__105532_105991__$1);
var G__105993 = cljs.core.chunk_rest(seq__105532_105991__$1);
var G__105994 = c__4556__auto___105992;
var G__105995 = cljs.core.count(c__4556__auto___105992);
var G__105996 = (0);
seq__105532_105968 = G__105993;
chunk__105571_105969 = G__105994;
count__105572_105970 = G__105995;
i__105574_105971 = G__105996;
continue;
} else {
var vec__105742_105997 = cljs.core.first(seq__105532_105991__$1);
var key_105998 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__105742_105997,(0),null);
var topic_105999 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__105742_105997,(1),null);
if(cljs.core.truth_(key_105998)){
if(cljs.core.truth_(topic_105999)){

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_105998,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355))){
var map__105750_106000 = predict_prostate.state.localStorage.get_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),new cljs.core.Keyword(null,"line2","line2",-1975668782)], null));
var map__105750_106001__$1 = (((((!((map__105750_106000 == null))))?(((((map__105750_106000.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__105750_106000.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__105750_106000):map__105750_106000);
var plot_style_106002 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__105750_106001__$1,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355));
if(cljs.core.truth_((function (){var fexpr__105754 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"area1","area1",-316994623),null,new cljs.core.Keyword(null,"line2","line2",-1975668782),null], null), null);
return (fexpr__105754.cljs$core$IFn$_invoke$arity$1 ? fexpr__105754.cljs$core$IFn$_invoke$arity$1(plot_style_106002) : fexpr__105754.call(null,plot_style_106002));
})())){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),plot_style_106002);
} else {
predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),new cljs.core.Keyword(null,"line2","line2",-1975668782)], null));

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),new cljs.core.Keyword(null,"line2","line2",-1975668782));
}
} else {
pubsub.feeds.publish(topic_105999,(cljs.core.truth_((function (){var fexpr__105755 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"age","age",-604307804),null,new cljs.core.Keyword(null,"psa","psa",-321761459),null], null), null);
return (fexpr__105755.cljs$core$IFn$_invoke$arity$1 ? fexpr__105755.cljs$core$IFn$_invoke$arity$1(key_105998) : fexpr__105755.call(null,key_105998));
})())?"":null));

}


var G__106003 = cljs.core.next(seq__105532_105991__$1);
var G__106004 = null;
var G__106005 = (0);
var G__106006 = (0);
seq__105532_105968 = G__106003;
chunk__105571_105969 = G__106004;
count__105572_105970 = G__106005;
i__105574_105971 = G__106006;
continue;
} else {
var G__106007 = cljs.core.next(seq__105532_105991__$1);
var G__106008 = null;
var G__106009 = (0);
var G__106010 = (0);
seq__105532_105968 = G__106007;
chunk__105571_105969 = G__106008;
count__105572_105970 = G__106009;
i__105574_105971 = G__106010;
continue;
}
} else {
var G__106011 = cljs.core.next(seq__105532_105991__$1);
var G__106012 = null;
var G__106013 = (0);
var G__106014 = (0);
seq__105532_105968 = G__106011;
chunk__105571_105969 = G__106012;
count__105572_105970 = G__106013;
i__105574_105971 = G__106014;
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
var len__4736__auto___106015 = arguments.length;
var i__4737__auto___106016 = (0);
while(true){
if((i__4737__auto___106016 < len__4736__auto___106015)){
args__4742__auto__.push((arguments[i__4737__auto___106016]));

var G__106017 = (i__4737__auto___106016 + (1));
i__4737__auto___106016 = G__106017;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return predict_prostate.state.mutations.subscribe_to.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(predict_prostate.state.mutations.subscribe_to.cljs$core$IFn$_invoke$arity$variadic = (function (change,cursor,p__105787){
var vec__105789 = p__105787;
var silent = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__105789,(0),null);
return pubsub.feeds.subscribe(change,(function (p1__105758_SHARP_,p2__105759_SHARP_){
if(cljs.core.truth_(silent)){
} else {
predict_prostate.state.mutations.log(p1__105758_SHARP_,cljs.core.deref(cursor),p2__105759_SHARP_);
}

return cljs.core.reset_BANG_(cursor,p2__105759_SHARP_);
}));
}));

(predict_prostate.state.mutations.subscribe_to.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(predict_prostate.state.mutations.subscribe_to.cljs$lang$applyTo = (function (seq105764){
var G__105765 = cljs.core.first(seq105764);
var seq105764__$1 = cljs.core.next(seq105764);
var G__105766 = cljs.core.first(seq105764__$1);
var seq105764__$2 = cljs.core.next(seq105764__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__105765,G__105766,seq105764__$2);
}));

predict_prostate.state.mutations.clip = (function predict_prostate$state$mutations$clip(p__105792){
var map__105793 = p__105792;
var map__105793__$1 = (((((!((map__105793 == null))))?(((((map__105793.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__105793.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__105793):map__105793);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__105793__$1,new cljs.core.Keyword(null,"value","value",305978217));
var min = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__105793__$1,new cljs.core.Keyword(null,"min","min",444991522));
var max = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__105793__$1,new cljs.core.Keyword(null,"max","max",61366548));
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
var seq__105812_106019 = cljs.core.seq(predict_prostate.state.run_time.input_changes());
var chunk__105814_106020 = null;
var count__105815_106021 = (0);
var i__105816_106022 = (0);
while(true){
if((i__105816_106022 < count__105815_106021)){
var vec__105863_106024 = chunk__105814_106020.cljs$core$IIndexed$_nth$arity$2(null,i__105816_106022);
var key_106025 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__105863_106024,(0),null);
var change_106026 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__105863_106024,(1),null);
if(cljs.core.truth_(change_106026)){
pubsub.feeds.subscribe(change_106026,((function (seq__105812_106019,chunk__105814_106020,count__105815_106021,i__105816_106022,vec__105863_106024,key_106025,change_106026){
return (function (topic,value){
predict_prostate.state.mutations.log(topic,cljs.core.deref(predict_prostate.state.run_time.input_cursor(key_106025)),value);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666),key_106025)){
var vec__105874_106027 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(value,":");
var value_106028__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__105874_106027,(0),null);
var bad_106029 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__105874_106027,(1),null);
var bci_106030 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520))));
var bct_106031 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666))));
if(cljs.core.truth_(isNaN(bci_106030))){
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520)),predict_prostate.state.mutations.num_to_str((function (){var x__4214__auto__ = (1);
var y__4215__auto__ = (function (){var x__4217__auto__ = bci_106030;
var y__4218__auto__ = predict_prostate.state.mutations.str_to_num(value_106028__$1);
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})();
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})()));
}

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_106028__$1),(cljs.core.truth_(bad_106029)?":":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(bad_106029)].join(''));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520),key_106025)){
var vec__105889_106033 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(value,":");
var value_106034__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__105889_106033,(0),null);
var bad_106035 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__105889_106033,(1),null);
var bci_106036 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520))));
var bct_106037 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666))));
if(cljs.core.not(isNaN(bct_106037))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_106034__$1),(cljs.core.truth_((function (){var or__4126__auto__ = (value_106034__$1 < (0));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return bad_106035;
}
})())?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_106034__$1)].join(''):"")].join(''));
} else {
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_106025,new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969)),value);

predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969),value], null));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,new cljs.core.Keyword(null,"gleason","gleason",-2044470526))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526)),cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518))));
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518)),cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526))));
}
} else {
if(cljs.core.truth_((function (){var fexpr__105912 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gleason","gleason",-2044470526),null,new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518),null], null), null);
return (fexpr__105912.cljs$core$IFn$_invoke$arity$1 ? fexpr__105912.cljs$core$IFn$_invoke$arity$1(key_106025) : fexpr__105912.call(null,key_106025));
})())){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526)),value);

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518)),value);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_106025,new cljs.core.Keyword(null,"h-admissions","h-admissions",-1503094844))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"h-admissions","h-admissions",-1503094844)),value);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,(0))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"charlson-comorbidity","charlson-comorbidity",-633596907)),null);
} else {
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_106025,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),value);

predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),value], null));
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(key_106025),(((value == null))?predict_prostate.state.config.get_input_default(predict_prostate.state.config.input_groups,key_106025):value));

}
}
}
}
}
}

return predict_prostate.models.runner.recalculate_model.cljs$core$IFn$_invoke$arity$2(predict_prostate.state.run_time.input_map(),predict_prostate.state.run_time.N);
});})(seq__105812_106019,chunk__105814_106020,count__105815_106021,i__105816_106022,vec__105863_106024,key_106025,change_106026))
);
} else {
}


var G__106038 = seq__105812_106019;
var G__106039 = chunk__105814_106020;
var G__106040 = count__105815_106021;
var G__106041 = (i__105816_106022 + (1));
seq__105812_106019 = G__106038;
chunk__105814_106020 = G__106039;
count__105815_106021 = G__106040;
i__105816_106022 = G__106041;
continue;
} else {
var temp__5735__auto___106042 = cljs.core.seq(seq__105812_106019);
if(temp__5735__auto___106042){
var seq__105812_106043__$1 = temp__5735__auto___106042;
if(cljs.core.chunked_seq_QMARK_(seq__105812_106043__$1)){
var c__4556__auto___106044 = cljs.core.chunk_first(seq__105812_106043__$1);
var G__106045 = cljs.core.chunk_rest(seq__105812_106043__$1);
var G__106046 = c__4556__auto___106044;
var G__106047 = cljs.core.count(c__4556__auto___106044);
var G__106048 = (0);
seq__105812_106019 = G__106045;
chunk__105814_106020 = G__106046;
count__105815_106021 = G__106047;
i__105816_106022 = G__106048;
continue;
} else {
var vec__105923_106049 = cljs.core.first(seq__105812_106043__$1);
var key_106050 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__105923_106049,(0),null);
var change_106051 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__105923_106049,(1),null);
if(cljs.core.truth_(change_106051)){
pubsub.feeds.subscribe(change_106051,((function (seq__105812_106019,chunk__105814_106020,count__105815_106021,i__105816_106022,vec__105923_106049,key_106050,change_106051,seq__105812_106043__$1,temp__5735__auto___106042){
return (function (topic,value){
predict_prostate.state.mutations.log(topic,cljs.core.deref(predict_prostate.state.run_time.input_cursor(key_106050)),value);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666),key_106050)){
var vec__105926_106052 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(value,":");
var value_106053__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__105926_106052,(0),null);
var bad_106054 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__105926_106052,(1),null);
var bci_106055 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520))));
var bct_106056 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666))));
if(cljs.core.truth_(isNaN(bci_106055))){
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520)),predict_prostate.state.mutations.num_to_str((function (){var x__4214__auto__ = (1);
var y__4215__auto__ = (function (){var x__4217__auto__ = bci_106055;
var y__4218__auto__ = predict_prostate.state.mutations.str_to_num(value_106053__$1);
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})();
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})()));
}

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_106053__$1),(cljs.core.truth_(bad_106054)?":":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(bad_106054)].join(''));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520),key_106050)){
var vec__105929_106060 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(value,":");
var value_106061__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__105929_106060,(0),null);
var bad_106062 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__105929_106060,(1),null);
var bci_106063 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520))));
var bct_106064 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666))));
if(cljs.core.not(isNaN(bct_106064))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_106061__$1),(cljs.core.truth_((function (){var or__4126__auto__ = (value_106061__$1 < (0));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return bad_106062;
}
})())?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_106061__$1)].join(''):"")].join(''));
} else {
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_106050,new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969)),value);

predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969),value], null));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,new cljs.core.Keyword(null,"gleason","gleason",-2044470526))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526)),cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518))));
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518)),cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526))));
}
} else {
if(cljs.core.truth_((function (){var fexpr__105932 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gleason","gleason",-2044470526),null,new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518),null], null), null);
return (fexpr__105932.cljs$core$IFn$_invoke$arity$1 ? fexpr__105932.cljs$core$IFn$_invoke$arity$1(key_106050) : fexpr__105932.call(null,key_106050));
})())){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526)),value);

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518)),value);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_106050,new cljs.core.Keyword(null,"h-admissions","h-admissions",-1503094844))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"h-admissions","h-admissions",-1503094844)),value);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,(0))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"charlson-comorbidity","charlson-comorbidity",-633596907)),null);
} else {
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_106050,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),value);

predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),value], null));
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(key_106050),(((value == null))?predict_prostate.state.config.get_input_default(predict_prostate.state.config.input_groups,key_106050):value));

}
}
}
}
}
}

return predict_prostate.models.runner.recalculate_model.cljs$core$IFn$_invoke$arity$2(predict_prostate.state.run_time.input_map(),predict_prostate.state.run_time.N);
});})(seq__105812_106019,chunk__105814_106020,count__105815_106021,i__105816_106022,vec__105923_106049,key_106050,change_106051,seq__105812_106043__$1,temp__5735__auto___106042))
);
} else {
}


var G__106084 = cljs.core.next(seq__105812_106043__$1);
var G__106085 = null;
var G__106086 = (0);
var G__106087 = (0);
seq__105812_106019 = G__106084;
chunk__105814_106020 = G__106085;
count__105815_106021 = G__106086;
i__105816_106022 = G__106087;
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

predict_prostate.state.run_time.route_change.pubsub$feeds$TopicFeed$subscribe$arity$2(null,(function (_,p__105947){
var vec__105948 = p__105947;
var page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__105948,(0),null);
var param1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__105948,(1),null);
var param2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__105948,(2),null);
var rvec = vec__105948;
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
var new_lang_106101 = new cljs.core.Keyword(null,"lang","lang",-1819677104).cljs$core$IFn$_invoke$arity$1(predict_prostate.state.localStorage.get_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"en","en",88457073)], null)));
predict_prostate.state.mutations.reload_lang(cljs.core.name(new_lang_106101));

return translations.tongue_base.load_translations_STAR_(url,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(translations.tongue_base.handle_dictionary,predict_prostate.state.run_time.t_state_cursor));
}));

predict_prostate.state.run_time.edit_change.pubsub$feeds$TopicFeed$subscribe$arity$2(null,(function (_,arg){
var text = (function (){var fexpr__105954 = cljs.core.deref(predict_prostate.state.run_time.ttt_cursor);
return (fexpr__105954.cljs$core$IFn$_invoke$arity$1 ? fexpr__105954.cljs$core$IFn$_invoke$arity$1(arg) : fexpr__105954.call(null,arg));
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(predict_prostate.state.run_time.edit_cursor,cljs.core.assoc,new cljs.core.Keyword(null,"edit-arg","edit-arg",1216866257),arg,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"edit-key","edit-key",-1833788727),((((cljs.core.vector_QMARK_(arg)) && ((cljs.core.count(arg) > (0)))))?cljs.core.first(arg):arg),new cljs.core.Keyword(null,"text","text",-1790561697),((((cljs.core.vector_QMARK_(arg)) && ((cljs.core.count(arg) > (1)))))?cljs.core.second(arg):text)], 0));

return $("#editorModal").modal("show");
}));

predict_prostate.state.run_time.new_text_change.pubsub$feeds$TopicFeed$subscribe$arity$2(null,(function (_,p__105955){
var vec__105956 = p__105955;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__105956,(0),null);
var new_text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__105956,(1),null);
return cljs.core.reset_BANG_(predict_prostate.state.run_time.new_text_cursor,new_text);
}));

predict_prostate.state.run_time.text_change.pubsub$feeds$TopicFeed$subscribe$arity$2(null,(function (_,p__105959){
var vec__105960 = p__105959;
var edit_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__105960,(0),null);
var new_text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__105960,(1),null);
var lang = new cljs.core.Keyword(null,"lang","lang",-1819677104).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(predict_prostate.state.run_time.t_state_cursor));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(predict_prostate.state.run_time.t_state_cursor,translations.tongue_base.process_dict_op,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"upsert","upsert",1416724984),new cljs.core.Keyword(null,"lang","lang",-1819677104).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(predict_prostate.state.run_time.t_state_cursor)),cljs.core.PersistentArrayMap.createAsIfByAssoc([edit_key,new_text])], null));

cljs.core.reset_BANG_(predict_prostate.state.run_time.new_text_cursor,null);

return translations.tranny_api.upload_translation.cljs$core$IFn$_invoke$arity$3(edit_key,cljs.core.name(lang),new_text);
}));

predict_prostate.state.run_time.add_language_modal.pubsub$feeds$TopicFeed$subscribe$arity$2(null,(function (_){
return $("#newLanguageModal").modal("show");
}));

predict_prostate.state.run_time.add_language.pubsub$feeds$TopicFeed$subscribe$arity$2(null,(function (_,p__105963){
var vec__105964 = p__105963;
var new_lang = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__105964,(0),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(new_lang))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(predict_prostate.state.run_time.t_state_cursor,cljs.core.update,new cljs.core.Keyword(null,"languages","languages",1471910331),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(new_lang)], 0));
} else {
return null;
}
}));

return predict_prostate.state.mutations.clear_inputs();
});

//# sourceMappingURL=predict_prostate.state.mutations.js.map
