goog.provide('predict_prostate.state.mutations');
predict_prostate.state.mutations.paq = window._paq;
/**
 * Send an event to matemo. 
 */
predict_prostate.state.mutations.matomo_track = (function predict_prostate$state$mutations$matomo_track(var_args){
var G__159706 = arguments.length;
switch (G__159706) {
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
var seq__159736_160123 = cljs.core.seq(predict_prostate.state.run_time.input_changes());
var chunk__159739_160124 = null;
var count__159740_160125 = (0);
var i__159741_160126 = (0);
while(true){
if((i__159741_160126 < count__159740_160125)){
var vec__159855_160127 = chunk__159739_160124.cljs$core$IIndexed$_nth$arity$2(null,i__159741_160126);
var key_160128 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__159855_160127,(0),null);
var topic_160129 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__159855_160127,(1),null);
if(cljs.core.truth_(key_160128)){
if(cljs.core.truth_(topic_160129)){

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_160128,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355))){
var map__159863_160130 = predict_prostate.state.localStorage.get_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),new cljs.core.Keyword(null,"line2","line2",-1975668782)], null));
var map__159863_160131__$1 = (((((!((map__159863_160130 == null))))?(((((map__159863_160130.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__159863_160130.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__159863_160130):map__159863_160130);
var plot_style_160132 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__159863_160131__$1,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355));
if(cljs.core.truth_((function (){var fexpr__159867 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"area1","area1",-316994623),null,new cljs.core.Keyword(null,"line2","line2",-1975668782),null], null), null);
return (fexpr__159867.cljs$core$IFn$_invoke$arity$1 ? fexpr__159867.cljs$core$IFn$_invoke$arity$1(plot_style_160132) : fexpr__159867.call(null,plot_style_160132));
})())){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),plot_style_160132);
} else {
predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),new cljs.core.Keyword(null,"line2","line2",-1975668782)], null));

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),new cljs.core.Keyword(null,"line2","line2",-1975668782));
}
} else {
pubsub.feeds.publish(topic_160129,(cljs.core.truth_((function (){var fexpr__159874 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"age","age",-604307804),null,new cljs.core.Keyword(null,"psa","psa",-321761459),null], null), null);
return (fexpr__159874.cljs$core$IFn$_invoke$arity$1 ? fexpr__159874.cljs$core$IFn$_invoke$arity$1(key_160128) : fexpr__159874.call(null,key_160128));
})())?"":null));

}


var G__160133 = seq__159736_160123;
var G__160134 = chunk__159739_160124;
var G__160135 = count__159740_160125;
var G__160136 = (i__159741_160126 + (1));
seq__159736_160123 = G__160133;
chunk__159739_160124 = G__160134;
count__159740_160125 = G__160135;
i__159741_160126 = G__160136;
continue;
} else {
var G__160137 = seq__159736_160123;
var G__160138 = chunk__159739_160124;
var G__160139 = count__159740_160125;
var G__160140 = (i__159741_160126 + (1));
seq__159736_160123 = G__160137;
chunk__159739_160124 = G__160138;
count__159740_160125 = G__160139;
i__159741_160126 = G__160140;
continue;
}
} else {
var G__160141 = seq__159736_160123;
var G__160142 = chunk__159739_160124;
var G__160143 = count__159740_160125;
var G__160144 = (i__159741_160126 + (1));
seq__159736_160123 = G__160141;
chunk__159739_160124 = G__160142;
count__159740_160125 = G__160143;
i__159741_160126 = G__160144;
continue;
}
} else {
var temp__5735__auto___160145 = cljs.core.seq(seq__159736_160123);
if(temp__5735__auto___160145){
var seq__159736_160146__$1 = temp__5735__auto___160145;
if(cljs.core.chunked_seq_QMARK_(seq__159736_160146__$1)){
var c__4556__auto___160147 = cljs.core.chunk_first(seq__159736_160146__$1);
var G__160148 = cljs.core.chunk_rest(seq__159736_160146__$1);
var G__160149 = c__4556__auto___160147;
var G__160150 = cljs.core.count(c__4556__auto___160147);
var G__160151 = (0);
seq__159736_160123 = G__160148;
chunk__159739_160124 = G__160149;
count__159740_160125 = G__160150;
i__159741_160126 = G__160151;
continue;
} else {
var vec__159881_160152 = cljs.core.first(seq__159736_160146__$1);
var key_160153 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__159881_160152,(0),null);
var topic_160154 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__159881_160152,(1),null);
if(cljs.core.truth_(key_160153)){
if(cljs.core.truth_(topic_160154)){

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_160153,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355))){
var map__159889_160155 = predict_prostate.state.localStorage.get_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),new cljs.core.Keyword(null,"line2","line2",-1975668782)], null));
var map__159889_160156__$1 = (((((!((map__159889_160155 == null))))?(((((map__159889_160155.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__159889_160155.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__159889_160155):map__159889_160155);
var plot_style_160157 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__159889_160156__$1,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355));
if(cljs.core.truth_((function (){var fexpr__159894 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"area1","area1",-316994623),null,new cljs.core.Keyword(null,"line2","line2",-1975668782),null], null), null);
return (fexpr__159894.cljs$core$IFn$_invoke$arity$1 ? fexpr__159894.cljs$core$IFn$_invoke$arity$1(plot_style_160157) : fexpr__159894.call(null,plot_style_160157));
})())){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),plot_style_160157);
} else {
predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),new cljs.core.Keyword(null,"line2","line2",-1975668782)], null));

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),new cljs.core.Keyword(null,"line2","line2",-1975668782));
}
} else {
pubsub.feeds.publish(topic_160154,(cljs.core.truth_((function (){var fexpr__159895 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"age","age",-604307804),null,new cljs.core.Keyword(null,"psa","psa",-321761459),null], null), null);
return (fexpr__159895.cljs$core$IFn$_invoke$arity$1 ? fexpr__159895.cljs$core$IFn$_invoke$arity$1(key_160153) : fexpr__159895.call(null,key_160153));
})())?"":null));

}


var G__160158 = cljs.core.next(seq__159736_160146__$1);
var G__160159 = null;
var G__160160 = (0);
var G__160161 = (0);
seq__159736_160123 = G__160158;
chunk__159739_160124 = G__160159;
count__159740_160125 = G__160160;
i__159741_160126 = G__160161;
continue;
} else {
var G__160162 = cljs.core.next(seq__159736_160146__$1);
var G__160163 = null;
var G__160164 = (0);
var G__160165 = (0);
seq__159736_160123 = G__160162;
chunk__159739_160124 = G__160163;
count__159740_160125 = G__160164;
i__159741_160126 = G__160165;
continue;
}
} else {
var G__160166 = cljs.core.next(seq__159736_160146__$1);
var G__160167 = null;
var G__160168 = (0);
var G__160169 = (0);
seq__159736_160123 = G__160166;
chunk__159739_160124 = G__160167;
count__159740_160125 = G__160168;
i__159741_160126 = G__160169;
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
var len__4736__auto___160173 = arguments.length;
var i__4737__auto___160179 = (0);
while(true){
if((i__4737__auto___160179 < len__4736__auto___160173)){
args__4742__auto__.push((arguments[i__4737__auto___160179]));

var G__160180 = (i__4737__auto___160179 + (1));
i__4737__auto___160179 = G__160180;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return predict_prostate.state.mutations.subscribe_to.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(predict_prostate.state.mutations.subscribe_to.cljs$core$IFn$_invoke$arity$variadic = (function (change,cursor,p__159929){
var vec__159930 = p__159929;
var silent = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__159930,(0),null);
return pubsub.feeds.subscribe(change,(function (p1__159903_SHARP_,p2__159904_SHARP_){
if(cljs.core.truth_(silent)){
} else {
predict_prostate.state.mutations.log(p1__159903_SHARP_,cljs.core.deref(cursor),p2__159904_SHARP_);
}

return cljs.core.reset_BANG_(cursor,p2__159904_SHARP_);
}));
}));

(predict_prostate.state.mutations.subscribe_to.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(predict_prostate.state.mutations.subscribe_to.cljs$lang$applyTo = (function (seq159905){
var G__159906 = cljs.core.first(seq159905);
var seq159905__$1 = cljs.core.next(seq159905);
var G__159907 = cljs.core.first(seq159905__$1);
var seq159905__$2 = cljs.core.next(seq159905__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__159906,G__159907,seq159905__$2);
}));

predict_prostate.state.mutations.clip = (function predict_prostate$state$mutations$clip(p__159933){
var map__159934 = p__159933;
var map__159934__$1 = (((((!((map__159934 == null))))?(((((map__159934.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__159934.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__159934):map__159934);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__159934__$1,new cljs.core.Keyword(null,"value","value",305978217));
var min = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__159934__$1,new cljs.core.Keyword(null,"min","min",444991522));
var max = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__159934__$1,new cljs.core.Keyword(null,"max","max",61366548));
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
var seq__159945_160186 = cljs.core.seq(predict_prostate.state.run_time.input_changes());
var chunk__159946_160187 = null;
var count__159947_160188 = (0);
var i__159948_160189 = (0);
while(true){
if((i__159948_160189 < count__159947_160188)){
var vec__159993_160190 = chunk__159946_160187.cljs$core$IIndexed$_nth$arity$2(null,i__159948_160189);
var key_160191 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__159993_160190,(0),null);
var change_160192 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__159993_160190,(1),null);
if(cljs.core.truth_(change_160192)){
pubsub.feeds.subscribe(change_160192,((function (seq__159945_160186,chunk__159946_160187,count__159947_160188,i__159948_160189,vec__159993_160190,key_160191,change_160192){
return (function (topic,value){
predict_prostate.state.mutations.log(topic,cljs.core.deref(predict_prostate.state.run_time.input_cursor(key_160191)),value);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666),key_160191)){
var vec__160012_160203 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(value,":");
var value_160204__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__160012_160203,(0),null);
var bad_160205 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__160012_160203,(1),null);
var bci_160206 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520))));
var bct_160207 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666))));
if(cljs.core.truth_(isNaN(bci_160206))){
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520)),predict_prostate.state.mutations.num_to_str((function (){var x__4214__auto__ = (1);
var y__4215__auto__ = (function (){var x__4217__auto__ = bci_160206;
var y__4218__auto__ = predict_prostate.state.mutations.str_to_num(value_160204__$1);
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})();
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})()));
}

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_160204__$1),(cljs.core.truth_(bad_160205)?":":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(bad_160205)].join(''));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520),key_160191)){
var vec__160019_160211 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(value,":");
var value_160212__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__160019_160211,(0),null);
var bad_160213 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__160019_160211,(1),null);
var bci_160214 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520))));
var bct_160215 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666))));
if(cljs.core.not(isNaN(bct_160215))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_160212__$1),(cljs.core.truth_((function (){var or__4126__auto__ = (value_160212__$1 < (0));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return bad_160213;
}
})())?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_160212__$1)].join(''):"")].join(''));
} else {
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_160191,new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969)),value);

predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969),value], null));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,new cljs.core.Keyword(null,"gleason","gleason",-2044470526))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526)),cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518))));
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518)),cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526))));
}
} else {
if(cljs.core.truth_((function (){var fexpr__160022 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gleason","gleason",-2044470526),null,new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518),null], null), null);
return (fexpr__160022.cljs$core$IFn$_invoke$arity$1 ? fexpr__160022.cljs$core$IFn$_invoke$arity$1(key_160191) : fexpr__160022.call(null,key_160191));
})())){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526)),value);

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518)),value);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_160191,new cljs.core.Keyword(null,"h-admissions","h-admissions",-1503094844))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"h-admissions","h-admissions",-1503094844)),value);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,(0))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"charlson-comorbidity","charlson-comorbidity",-633596907)),null);
} else {
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_160191,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),value);

predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),value], null));
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(key_160191),(((value == null))?predict_prostate.state.config.get_input_default(predict_prostate.state.config.input_groups,key_160191):value));

}
}
}
}
}
}

return predict_prostate.models.runner.recalculate_model.cljs$core$IFn$_invoke$arity$2(predict_prostate.state.run_time.input_map(),predict_prostate.state.run_time.N);
});})(seq__159945_160186,chunk__159946_160187,count__159947_160188,i__159948_160189,vec__159993_160190,key_160191,change_160192))
);
} else {
}


var G__160225 = seq__159945_160186;
var G__160226 = chunk__159946_160187;
var G__160227 = count__159947_160188;
var G__160228 = (i__159948_160189 + (1));
seq__159945_160186 = G__160225;
chunk__159946_160187 = G__160226;
count__159947_160188 = G__160227;
i__159948_160189 = G__160228;
continue;
} else {
var temp__5735__auto___160239 = cljs.core.seq(seq__159945_160186);
if(temp__5735__auto___160239){
var seq__159945_160240__$1 = temp__5735__auto___160239;
if(cljs.core.chunked_seq_QMARK_(seq__159945_160240__$1)){
var c__4556__auto___160241 = cljs.core.chunk_first(seq__159945_160240__$1);
var G__160242 = cljs.core.chunk_rest(seq__159945_160240__$1);
var G__160243 = c__4556__auto___160241;
var G__160244 = cljs.core.count(c__4556__auto___160241);
var G__160245 = (0);
seq__159945_160186 = G__160242;
chunk__159946_160187 = G__160243;
count__159947_160188 = G__160244;
i__159948_160189 = G__160245;
continue;
} else {
var vec__160023_160251 = cljs.core.first(seq__159945_160240__$1);
var key_160252 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__160023_160251,(0),null);
var change_160253 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__160023_160251,(1),null);
if(cljs.core.truth_(change_160253)){
pubsub.feeds.subscribe(change_160253,((function (seq__159945_160186,chunk__159946_160187,count__159947_160188,i__159948_160189,vec__160023_160251,key_160252,change_160253,seq__159945_160240__$1,temp__5735__auto___160239){
return (function (topic,value){
predict_prostate.state.mutations.log(topic,cljs.core.deref(predict_prostate.state.run_time.input_cursor(key_160252)),value);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666),key_160252)){
var vec__160030_160257 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(value,":");
var value_160258__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__160030_160257,(0),null);
var bad_160259 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__160030_160257,(1),null);
var bci_160260 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520))));
var bct_160261 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666))));
if(cljs.core.truth_(isNaN(bci_160260))){
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520)),predict_prostate.state.mutations.num_to_str((function (){var x__4214__auto__ = (1);
var y__4215__auto__ = (function (){var x__4217__auto__ = bci_160260;
var y__4218__auto__ = predict_prostate.state.mutations.str_to_num(value_160258__$1);
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})();
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})()));
}

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_160258__$1),(cljs.core.truth_(bad_160259)?":":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(bad_160259)].join(''));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520),key_160252)){
var vec__160033_160269 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(value,":");
var value_160270__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__160033_160269,(0),null);
var bad_160271 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__160033_160269,(1),null);
var bci_160272 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520))));
var bct_160273 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666))));
if(cljs.core.not(isNaN(bct_160273))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_160270__$1),(cljs.core.truth_((function (){var or__4126__auto__ = (value_160270__$1 < (0));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return bad_160271;
}
})())?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_160270__$1)].join(''):"")].join(''));
} else {
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_160252,new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969)),value);

predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969),value], null));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,new cljs.core.Keyword(null,"gleason","gleason",-2044470526))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526)),cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518))));
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518)),cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526))));
}
} else {
if(cljs.core.truth_((function (){var fexpr__160042 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gleason","gleason",-2044470526),null,new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518),null], null), null);
return (fexpr__160042.cljs$core$IFn$_invoke$arity$1 ? fexpr__160042.cljs$core$IFn$_invoke$arity$1(key_160252) : fexpr__160042.call(null,key_160252));
})())){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526)),value);

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518)),value);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_160252,new cljs.core.Keyword(null,"h-admissions","h-admissions",-1503094844))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"h-admissions","h-admissions",-1503094844)),value);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,(0))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"charlson-comorbidity","charlson-comorbidity",-633596907)),null);
} else {
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_160252,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),value);

predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),value], null));
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(key_160252),(((value == null))?predict_prostate.state.config.get_input_default(predict_prostate.state.config.input_groups,key_160252):value));

}
}
}
}
}
}

return predict_prostate.models.runner.recalculate_model.cljs$core$IFn$_invoke$arity$2(predict_prostate.state.run_time.input_map(),predict_prostate.state.run_time.N);
});})(seq__159945_160186,chunk__159946_160187,count__159947_160188,i__159948_160189,vec__160023_160251,key_160252,change_160253,seq__159945_160240__$1,temp__5735__auto___160239))
);
} else {
}


var G__160280 = cljs.core.next(seq__159945_160240__$1);
var G__160281 = null;
var G__160282 = (0);
var G__160283 = (0);
seq__159945_160186 = G__160280;
chunk__159946_160187 = G__160281;
count__159947_160188 = G__160282;
i__159948_160189 = G__160283;
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

predict_prostate.state.run_time.route_change.pubsub$feeds$TopicFeed$subscribe$arity$2(null,(function (_,p__160051){
var vec__160052 = p__160051;
var page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__160052,(0),null);
var param1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__160052,(1),null);
var param2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__160052,(2),null);
var rvec = vec__160052;
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
var new_lang_160305 = new cljs.core.Keyword(null,"lang","lang",-1819677104).cljs$core$IFn$_invoke$arity$1(predict_prostate.state.localStorage.get_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"en","en",88457073)], null)));
predict_prostate.state.mutations.reload_lang(cljs.core.name(new_lang_160305));

return translations.tongue_base.load_translations_STAR_(url,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(translations.tongue_base.handle_dictionary,predict_prostate.state.run_time.t_state_cursor));
}));

predict_prostate.state.run_time.edit_change.pubsub$feeds$TopicFeed$subscribe$arity$2(null,(function (_,arg){
var text = (function (){var fexpr__160065 = cljs.core.deref(predict_prostate.state.run_time.ttt_cursor);
return (fexpr__160065.cljs$core$IFn$_invoke$arity$1 ? fexpr__160065.cljs$core$IFn$_invoke$arity$1(arg) : fexpr__160065.call(null,arg));
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(predict_prostate.state.run_time.edit_cursor,cljs.core.assoc,new cljs.core.Keyword(null,"edit-arg","edit-arg",1216866257),arg,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"edit-key","edit-key",-1833788727),((((cljs.core.vector_QMARK_(arg)) && ((cljs.core.count(arg) > (0)))))?cljs.core.first(arg):arg),new cljs.core.Keyword(null,"text","text",-1790561697),((((cljs.core.vector_QMARK_(arg)) && ((cljs.core.count(arg) > (1)))))?cljs.core.second(arg):text)], 0));

return $("#editorModal").modal("show");
}));

predict_prostate.state.run_time.new_text_change.pubsub$feeds$TopicFeed$subscribe$arity$2(null,(function (_,p__160066){
var vec__160071 = p__160066;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__160071,(0),null);
var new_text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__160071,(1),null);
return cljs.core.reset_BANG_(predict_prostate.state.run_time.new_text_cursor,new_text);
}));

predict_prostate.state.run_time.text_change.pubsub$feeds$TopicFeed$subscribe$arity$2(null,(function (_,p__160074){
var vec__160079 = p__160074;
var edit_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__160079,(0),null);
var new_text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__160079,(1),null);
var lang = new cljs.core.Keyword(null,"lang","lang",-1819677104).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(predict_prostate.state.run_time.t_state_cursor));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(predict_prostate.state.run_time.t_state_cursor,translations.tongue_base.process_dict_op,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"upsert","upsert",1416724984),new cljs.core.Keyword(null,"lang","lang",-1819677104).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(predict_prostate.state.run_time.t_state_cursor)),cljs.core.PersistentArrayMap.createAsIfByAssoc([edit_key,new_text])], null));

cljs.core.reset_BANG_(predict_prostate.state.run_time.new_text_cursor,null);

return translations.tranny_api.upload_translation.cljs$core$IFn$_invoke$arity$3(edit_key,cljs.core.name(lang),new_text);
}));

predict_prostate.state.run_time.add_language_modal.pubsub$feeds$TopicFeed$subscribe$arity$2(null,(function (_){
return $("#newLanguageModal").modal("show");
}));

predict_prostate.state.run_time.add_language.pubsub$feeds$TopicFeed$subscribe$arity$2(null,(function (_,p__160099){
var vec__160100 = p__160099;
var new_lang = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__160100,(0),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(new_lang))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(predict_prostate.state.run_time.t_state_cursor,cljs.core.update,new cljs.core.Keyword(null,"languages","languages",1471910331),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(new_lang)], 0));
} else {
return null;
}
}));

return predict_prostate.state.mutations.clear_inputs();
});

//# sourceMappingURL=predict_prostate.state.mutations.js.map
