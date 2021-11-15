goog.provide('predict_prostate.state.mutations');
predict_prostate.state.mutations.paq = window._paq;
/**
 * Send an event to matemo. 
 */
predict_prostate.state.mutations.matomo_track = (function predict_prostate$state$mutations$matomo_track(var_args){
var G__41984 = arguments.length;
switch (G__41984) {
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
var seq__41985_42095 = cljs.core.seq(predict_prostate.state.run_time.input_changes());
var chunk__41988_42096 = null;
var count__41989_42097 = (0);
var i__41990_42098 = (0);
while(true){
if((i__41990_42098 < count__41989_42097)){
var vec__42007_42099 = chunk__41988_42096.cljs$core$IIndexed$_nth$arity$2(null,i__41990_42098);
var key_42100 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42007_42099,(0),null);
var topic_42101 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42007_42099,(1),null);
if(cljs.core.truth_(key_42100)){
if(cljs.core.truth_(topic_42101)){

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_42100,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355))){
var map__42010_42102 = predict_prostate.state.localStorage.get_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),new cljs.core.Keyword(null,"line2","line2",-1975668782)], null));
var map__42010_42103__$1 = (((((!((map__42010_42102 == null))))?(((((map__42010_42102.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42010_42102.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42010_42102):map__42010_42102);
var plot_style_42104 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42010_42103__$1,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355));
if(cljs.core.truth_((function (){var fexpr__42012 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"area1","area1",-316994623),null,new cljs.core.Keyword(null,"line2","line2",-1975668782),null], null), null);
return (fexpr__42012.cljs$core$IFn$_invoke$arity$1 ? fexpr__42012.cljs$core$IFn$_invoke$arity$1(plot_style_42104) : fexpr__42012.call(null,plot_style_42104));
})())){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),plot_style_42104);
} else {
predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),new cljs.core.Keyword(null,"line2","line2",-1975668782)], null));

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),new cljs.core.Keyword(null,"line2","line2",-1975668782));
}
} else {
pubsub.feeds.publish(topic_42101,(cljs.core.truth_((function (){var fexpr__42013 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"age","age",-604307804),null,new cljs.core.Keyword(null,"psa","psa",-321761459),null], null), null);
return (fexpr__42013.cljs$core$IFn$_invoke$arity$1 ? fexpr__42013.cljs$core$IFn$_invoke$arity$1(key_42100) : fexpr__42013.call(null,key_42100));
})())?"":null));

}


var G__42105 = seq__41985_42095;
var G__42106 = chunk__41988_42096;
var G__42107 = count__41989_42097;
var G__42108 = (i__41990_42098 + (1));
seq__41985_42095 = G__42105;
chunk__41988_42096 = G__42106;
count__41989_42097 = G__42107;
i__41990_42098 = G__42108;
continue;
} else {
var G__42109 = seq__41985_42095;
var G__42110 = chunk__41988_42096;
var G__42111 = count__41989_42097;
var G__42112 = (i__41990_42098 + (1));
seq__41985_42095 = G__42109;
chunk__41988_42096 = G__42110;
count__41989_42097 = G__42111;
i__41990_42098 = G__42112;
continue;
}
} else {
var G__42113 = seq__41985_42095;
var G__42114 = chunk__41988_42096;
var G__42115 = count__41989_42097;
var G__42116 = (i__41990_42098 + (1));
seq__41985_42095 = G__42113;
chunk__41988_42096 = G__42114;
count__41989_42097 = G__42115;
i__41990_42098 = G__42116;
continue;
}
} else {
var temp__5735__auto___42117 = cljs.core.seq(seq__41985_42095);
if(temp__5735__auto___42117){
var seq__41985_42118__$1 = temp__5735__auto___42117;
if(cljs.core.chunked_seq_QMARK_(seq__41985_42118__$1)){
var c__4556__auto___42119 = cljs.core.chunk_first(seq__41985_42118__$1);
var G__42120 = cljs.core.chunk_rest(seq__41985_42118__$1);
var G__42121 = c__4556__auto___42119;
var G__42122 = cljs.core.count(c__4556__auto___42119);
var G__42123 = (0);
seq__41985_42095 = G__42120;
chunk__41988_42096 = G__42121;
count__41989_42097 = G__42122;
i__41990_42098 = G__42123;
continue;
} else {
var vec__42014_42124 = cljs.core.first(seq__41985_42118__$1);
var key_42125 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42014_42124,(0),null);
var topic_42126 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42014_42124,(1),null);
if(cljs.core.truth_(key_42125)){
if(cljs.core.truth_(topic_42126)){

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_42125,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355))){
var map__42017_42127 = predict_prostate.state.localStorage.get_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),new cljs.core.Keyword(null,"line2","line2",-1975668782)], null));
var map__42017_42128__$1 = (((((!((map__42017_42127 == null))))?(((((map__42017_42127.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42017_42127.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42017_42127):map__42017_42127);
var plot_style_42129 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42017_42128__$1,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355));
if(cljs.core.truth_((function (){var fexpr__42019 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"area1","area1",-316994623),null,new cljs.core.Keyword(null,"line2","line2",-1975668782),null], null), null);
return (fexpr__42019.cljs$core$IFn$_invoke$arity$1 ? fexpr__42019.cljs$core$IFn$_invoke$arity$1(plot_style_42129) : fexpr__42019.call(null,plot_style_42129));
})())){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),plot_style_42129);
} else {
predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),new cljs.core.Keyword(null,"line2","line2",-1975668782)], null));

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),new cljs.core.Keyword(null,"line2","line2",-1975668782));
}
} else {
pubsub.feeds.publish(topic_42126,(cljs.core.truth_((function (){var fexpr__42020 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"age","age",-604307804),null,new cljs.core.Keyword(null,"psa","psa",-321761459),null], null), null);
return (fexpr__42020.cljs$core$IFn$_invoke$arity$1 ? fexpr__42020.cljs$core$IFn$_invoke$arity$1(key_42125) : fexpr__42020.call(null,key_42125));
})())?"":null));

}


var G__42130 = cljs.core.next(seq__41985_42118__$1);
var G__42131 = null;
var G__42132 = (0);
var G__42133 = (0);
seq__41985_42095 = G__42130;
chunk__41988_42096 = G__42131;
count__41989_42097 = G__42132;
i__41990_42098 = G__42133;
continue;
} else {
var G__42134 = cljs.core.next(seq__41985_42118__$1);
var G__42135 = null;
var G__42136 = (0);
var G__42137 = (0);
seq__41985_42095 = G__42134;
chunk__41988_42096 = G__42135;
count__41989_42097 = G__42136;
i__41990_42098 = G__42137;
continue;
}
} else {
var G__42138 = cljs.core.next(seq__41985_42118__$1);
var G__42139 = null;
var G__42140 = (0);
var G__42141 = (0);
seq__41985_42095 = G__42138;
chunk__41988_42096 = G__42139;
count__41989_42097 = G__42140;
i__41990_42098 = G__42141;
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
var len__4736__auto___42142 = arguments.length;
var i__4737__auto___42143 = (0);
while(true){
if((i__4737__auto___42143 < len__4736__auto___42142)){
args__4742__auto__.push((arguments[i__4737__auto___42143]));

var G__42144 = (i__4737__auto___42143 + (1));
i__4737__auto___42143 = G__42144;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return predict_prostate.state.mutations.subscribe_to.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(predict_prostate.state.mutations.subscribe_to.cljs$core$IFn$_invoke$arity$variadic = (function (change,cursor,p__42026){
var vec__42027 = p__42026;
var silent = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42027,(0),null);
return pubsub.feeds.subscribe(change,(function (p1__42021_SHARP_,p2__42022_SHARP_){
if(cljs.core.truth_(silent)){
} else {
predict_prostate.state.mutations.log(p1__42021_SHARP_,cljs.core.deref(cursor),p2__42022_SHARP_);
}

return cljs.core.reset_BANG_(cursor,p2__42022_SHARP_);
}));
}));

(predict_prostate.state.mutations.subscribe_to.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(predict_prostate.state.mutations.subscribe_to.cljs$lang$applyTo = (function (seq42023){
var G__42024 = cljs.core.first(seq42023);
var seq42023__$1 = cljs.core.next(seq42023);
var G__42025 = cljs.core.first(seq42023__$1);
var seq42023__$2 = cljs.core.next(seq42023__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42024,G__42025,seq42023__$2);
}));

predict_prostate.state.mutations.clip = (function predict_prostate$state$mutations$clip(p__42030){
var map__42031 = p__42030;
var map__42031__$1 = (((((!((map__42031 == null))))?(((((map__42031.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42031.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42031):map__42031);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42031__$1,new cljs.core.Keyword(null,"value","value",305978217));
var min = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42031__$1,new cljs.core.Keyword(null,"min","min",444991522));
var max = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42031__$1,new cljs.core.Keyword(null,"max","max",61366548));
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
var seq__42033_42145 = cljs.core.seq(predict_prostate.state.run_time.input_changes());
var chunk__42034_42146 = null;
var count__42035_42147 = (0);
var i__42036_42148 = (0);
while(true){
if((i__42036_42148 < count__42035_42147)){
var vec__42057_42149 = chunk__42034_42146.cljs$core$IIndexed$_nth$arity$2(null,i__42036_42148);
var key_42150 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42057_42149,(0),null);
var change_42151 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42057_42149,(1),null);
if(cljs.core.truth_(change_42151)){
pubsub.feeds.subscribe(change_42151,((function (seq__42033_42145,chunk__42034_42146,count__42035_42147,i__42036_42148,vec__42057_42149,key_42150,change_42151){
return (function (topic,value){
predict_prostate.state.mutations.log(topic,cljs.core.deref(predict_prostate.state.run_time.input_cursor(key_42150)),value);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666),key_42150)){
var vec__42060_42152 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(value,":");
var value_42153__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42060_42152,(0),null);
var bad_42154 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42060_42152,(1),null);
var bci_42155 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520))));
var bct_42156 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666))));
if(cljs.core.truth_(isNaN(bci_42155))){
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520)),predict_prostate.state.mutations.num_to_str((function (){var x__4214__auto__ = (1);
var y__4215__auto__ = (function (){var x__4217__auto__ = bci_42155;
var y__4218__auto__ = predict_prostate.state.mutations.str_to_num(value_42153__$1);
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})();
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})()));
}

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_42153__$1),(cljs.core.truth_(bad_42154)?":":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(bad_42154)].join(''));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520),key_42150)){
var vec__42063_42160 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(value,":");
var value_42161__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42063_42160,(0),null);
var bad_42162 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42063_42160,(1),null);
var bci_42163 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520))));
var bct_42164 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666))));
if(cljs.core.not(isNaN(bct_42164))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_42161__$1),(cljs.core.truth_((function (){var or__4126__auto__ = (value_42161__$1 < (0));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return bad_42162;
}
})())?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_42161__$1)].join(''):"")].join(''));
} else {
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_42150,new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969)),value);

predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969),value], null));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,new cljs.core.Keyword(null,"gleason","gleason",-2044470526))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526)),cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518))));
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518)),cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526))));
}
} else {
if(cljs.core.truth_((function (){var fexpr__42066 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gleason","gleason",-2044470526),null,new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518),null], null), null);
return (fexpr__42066.cljs$core$IFn$_invoke$arity$1 ? fexpr__42066.cljs$core$IFn$_invoke$arity$1(key_42150) : fexpr__42066.call(null,key_42150));
})())){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526)),value);

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518)),value);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_42150,new cljs.core.Keyword(null,"h-admissions","h-admissions",-1503094844))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"h-admissions","h-admissions",-1503094844)),value);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,(0))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"charlson-comorbidity","charlson-comorbidity",-633596907)),null);
} else {
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_42150,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),value);

predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),value], null));
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(key_42150),(((value == null))?predict_prostate.state.config.get_input_default(predict_prostate.state.config.input_groups,key_42150):value));

}
}
}
}
}
}

return predict_prostate.models.runner.recalculate_model.cljs$core$IFn$_invoke$arity$2(predict_prostate.state.run_time.input_map(),predict_prostate.state.run_time.N);
});})(seq__42033_42145,chunk__42034_42146,count__42035_42147,i__42036_42148,vec__42057_42149,key_42150,change_42151))
);
} else {
}


var G__42165 = seq__42033_42145;
var G__42166 = chunk__42034_42146;
var G__42167 = count__42035_42147;
var G__42168 = (i__42036_42148 + (1));
seq__42033_42145 = G__42165;
chunk__42034_42146 = G__42166;
count__42035_42147 = G__42167;
i__42036_42148 = G__42168;
continue;
} else {
var temp__5735__auto___42169 = cljs.core.seq(seq__42033_42145);
if(temp__5735__auto___42169){
var seq__42033_42170__$1 = temp__5735__auto___42169;
if(cljs.core.chunked_seq_QMARK_(seq__42033_42170__$1)){
var c__4556__auto___42171 = cljs.core.chunk_first(seq__42033_42170__$1);
var G__42172 = cljs.core.chunk_rest(seq__42033_42170__$1);
var G__42173 = c__4556__auto___42171;
var G__42174 = cljs.core.count(c__4556__auto___42171);
var G__42175 = (0);
seq__42033_42145 = G__42172;
chunk__42034_42146 = G__42173;
count__42035_42147 = G__42174;
i__42036_42148 = G__42175;
continue;
} else {
var vec__42067_42176 = cljs.core.first(seq__42033_42170__$1);
var key_42177 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42067_42176,(0),null);
var change_42178 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42067_42176,(1),null);
if(cljs.core.truth_(change_42178)){
pubsub.feeds.subscribe(change_42178,((function (seq__42033_42145,chunk__42034_42146,count__42035_42147,i__42036_42148,vec__42067_42176,key_42177,change_42178,seq__42033_42170__$1,temp__5735__auto___42169){
return (function (topic,value){
predict_prostate.state.mutations.log(topic,cljs.core.deref(predict_prostate.state.run_time.input_cursor(key_42177)),value);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666),key_42177)){
var vec__42070_42179 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(value,":");
var value_42180__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42070_42179,(0),null);
var bad_42181 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42070_42179,(1),null);
var bci_42182 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520))));
var bct_42183 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666))));
if(cljs.core.truth_(isNaN(bci_42182))){
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520)),predict_prostate.state.mutations.num_to_str((function (){var x__4214__auto__ = (1);
var y__4215__auto__ = (function (){var x__4217__auto__ = bci_42182;
var y__4218__auto__ = predict_prostate.state.mutations.str_to_num(value_42180__$1);
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})();
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})()));
}

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_42180__$1),(cljs.core.truth_(bad_42181)?":":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(bad_42181)].join(''));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520),key_42177)){
var vec__42073_42184 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(value,":");
var value_42185__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42073_42184,(0),null);
var bad_42186 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42073_42184,(1),null);
var bci_42187 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520))));
var bct_42188 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666))));
if(cljs.core.not(isNaN(bct_42188))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_42185__$1),(cljs.core.truth_((function (){var or__4126__auto__ = (value_42185__$1 < (0));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return bad_42186;
}
})())?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_42185__$1)].join(''):"")].join(''));
} else {
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_42177,new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969)),value);

predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969),value], null));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,new cljs.core.Keyword(null,"gleason","gleason",-2044470526))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526)),cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518))));
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518)),cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526))));
}
} else {
if(cljs.core.truth_((function (){var fexpr__42076 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gleason","gleason",-2044470526),null,new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518),null], null), null);
return (fexpr__42076.cljs$core$IFn$_invoke$arity$1 ? fexpr__42076.cljs$core$IFn$_invoke$arity$1(key_42177) : fexpr__42076.call(null,key_42177));
})())){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526)),value);

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518)),value);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_42177,new cljs.core.Keyword(null,"h-admissions","h-admissions",-1503094844))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"h-admissions","h-admissions",-1503094844)),value);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,(0))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"charlson-comorbidity","charlson-comorbidity",-633596907)),null);
} else {
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_42177,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),value);

predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),value], null));
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(key_42177),(((value == null))?predict_prostate.state.config.get_input_default(predict_prostate.state.config.input_groups,key_42177):value));

}
}
}
}
}
}

return predict_prostate.models.runner.recalculate_model.cljs$core$IFn$_invoke$arity$2(predict_prostate.state.run_time.input_map(),predict_prostate.state.run_time.N);
});})(seq__42033_42145,chunk__42034_42146,count__42035_42147,i__42036_42148,vec__42067_42176,key_42177,change_42178,seq__42033_42170__$1,temp__5735__auto___42169))
);
} else {
}


var G__42189 = cljs.core.next(seq__42033_42170__$1);
var G__42190 = null;
var G__42191 = (0);
var G__42192 = (0);
seq__42033_42145 = G__42189;
chunk__42034_42146 = G__42190;
count__42035_42147 = G__42191;
i__42036_42148 = G__42192;
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

predict_prostate.state.run_time.route_change.pubsub$feeds$TopicFeed$subscribe$arity$2(null,(function (_,p__42077){
var vec__42078 = p__42077;
var page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42078,(0),null);
var param1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42078,(1),null);
var param2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42078,(2),null);
var rvec = vec__42078;
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
var new_lang_42193 = new cljs.core.Keyword(null,"lang","lang",-1819677104).cljs$core$IFn$_invoke$arity$1(predict_prostate.state.localStorage.get_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"en","en",88457073)], null)));
predict_prostate.state.mutations.reload_lang(cljs.core.name(new_lang_42193));

return translations.tongue_base.load_translations_STAR_(url,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(translations.tongue_base.handle_dictionary,predict_prostate.state.run_time.t_state_cursor));
}));

predict_prostate.state.run_time.edit_change.pubsub$feeds$TopicFeed$subscribe$arity$2(null,(function (_,arg){
var text = (function (){var fexpr__42081 = cljs.core.deref(predict_prostate.state.run_time.ttt_cursor);
return (fexpr__42081.cljs$core$IFn$_invoke$arity$1 ? fexpr__42081.cljs$core$IFn$_invoke$arity$1(arg) : fexpr__42081.call(null,arg));
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(predict_prostate.state.run_time.edit_cursor,cljs.core.assoc,new cljs.core.Keyword(null,"edit-arg","edit-arg",1216866257),arg,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"edit-key","edit-key",-1833788727),((((cljs.core.vector_QMARK_(arg)) && ((cljs.core.count(arg) > (0)))))?cljs.core.first(arg):arg),new cljs.core.Keyword(null,"text","text",-1790561697),((((cljs.core.vector_QMARK_(arg)) && ((cljs.core.count(arg) > (1)))))?cljs.core.second(arg):text)], 0));

return $("#editorModal").modal("show");
}));

predict_prostate.state.run_time.new_text_change.pubsub$feeds$TopicFeed$subscribe$arity$2(null,(function (_,p__42082){
var vec__42083 = p__42082;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42083,(0),null);
var new_text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42083,(1),null);
return cljs.core.reset_BANG_(predict_prostate.state.run_time.new_text_cursor,new_text);
}));

predict_prostate.state.run_time.text_change.pubsub$feeds$TopicFeed$subscribe$arity$2(null,(function (_,p__42086){
var vec__42087 = p__42086;
var edit_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42087,(0),null);
var new_text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42087,(1),null);
var lang = new cljs.core.Keyword(null,"lang","lang",-1819677104).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(predict_prostate.state.run_time.t_state_cursor));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(predict_prostate.state.run_time.t_state_cursor,translations.tongue_base.process_dict_op,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"upsert","upsert",1416724984),new cljs.core.Keyword(null,"lang","lang",-1819677104).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(predict_prostate.state.run_time.t_state_cursor)),cljs.core.PersistentArrayMap.createAsIfByAssoc([edit_key,new_text])], null));

cljs.core.reset_BANG_(predict_prostate.state.run_time.new_text_cursor,null);

return translations.tranny_api.upload_translation.cljs$core$IFn$_invoke$arity$3(edit_key,cljs.core.name(lang),new_text);
}));

predict_prostate.state.run_time.add_language_modal.pubsub$feeds$TopicFeed$subscribe$arity$2(null,(function (_){
return $("#newLanguageModal").modal("show");
}));

predict_prostate.state.run_time.add_language.pubsub$feeds$TopicFeed$subscribe$arity$2(null,(function (_,p__42090){
var vec__42091 = p__42090;
var new_lang = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42091,(0),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(new_lang))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(predict_prostate.state.run_time.t_state_cursor,cljs.core.update,new cljs.core.Keyword(null,"languages","languages",1471910331),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(new_lang)], 0));
} else {
return null;
}
}));

return predict_prostate.state.mutations.clear_inputs();
});

//# sourceMappingURL=predict_prostate.state.mutations.js.map
