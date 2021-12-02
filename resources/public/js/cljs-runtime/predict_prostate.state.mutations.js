goog.provide('predict_prostate.state.mutations');
predict_prostate.state.mutations.paq = window._paq;
/**
 * Send an event to matemo. 
 */
predict_prostate.state.mutations.matomo_track = (function predict_prostate$state$mutations$matomo_track(var_args){
var G__76879 = arguments.length;
switch (G__76879) {
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
var seq__76894_77138 = cljs.core.seq(predict_prostate.state.run_time.input_changes());
var chunk__76897_77139 = null;
var count__76898_77140 = (0);
var i__76899_77141 = (0);
while(true){
if((i__76899_77141 < count__76898_77140)){
var vec__76950_77142 = chunk__76897_77139.cljs$core$IIndexed$_nth$arity$2(null,i__76899_77141);
var key_77143 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76950_77142,(0),null);
var topic_77144 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76950_77142,(1),null);
if(cljs.core.truth_(key_77143)){
if(cljs.core.truth_(topic_77144)){

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_77143,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355))){
var map__76955_77145 = predict_prostate.state.localStorage.get_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),new cljs.core.Keyword(null,"line2","line2",-1975668782)], null));
var map__76955_77146__$1 = (((((!((map__76955_77145 == null))))?(((((map__76955_77145.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__76955_77145.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__76955_77145):map__76955_77145);
var plot_style_77147 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76955_77146__$1,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355));
if(cljs.core.truth_((function (){var fexpr__76957 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"area1","area1",-316994623),null,new cljs.core.Keyword(null,"line2","line2",-1975668782),null], null), null);
return (fexpr__76957.cljs$core$IFn$_invoke$arity$1 ? fexpr__76957.cljs$core$IFn$_invoke$arity$1(plot_style_77147) : fexpr__76957.call(null,plot_style_77147));
})())){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),plot_style_77147);
} else {
predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),new cljs.core.Keyword(null,"line2","line2",-1975668782)], null));

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),new cljs.core.Keyword(null,"line2","line2",-1975668782));
}
} else {
pubsub.feeds.publish(topic_77144,(cljs.core.truth_((function (){var fexpr__76959 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"age","age",-604307804),null,new cljs.core.Keyword(null,"psa","psa",-321761459),null], null), null);
return (fexpr__76959.cljs$core$IFn$_invoke$arity$1 ? fexpr__76959.cljs$core$IFn$_invoke$arity$1(key_77143) : fexpr__76959.call(null,key_77143));
})())?"":null));

}


var G__77148 = seq__76894_77138;
var G__77149 = chunk__76897_77139;
var G__77150 = count__76898_77140;
var G__77151 = (i__76899_77141 + (1));
seq__76894_77138 = G__77148;
chunk__76897_77139 = G__77149;
count__76898_77140 = G__77150;
i__76899_77141 = G__77151;
continue;
} else {
var G__77152 = seq__76894_77138;
var G__77153 = chunk__76897_77139;
var G__77154 = count__76898_77140;
var G__77155 = (i__76899_77141 + (1));
seq__76894_77138 = G__77152;
chunk__76897_77139 = G__77153;
count__76898_77140 = G__77154;
i__76899_77141 = G__77155;
continue;
}
} else {
var G__77157 = seq__76894_77138;
var G__77158 = chunk__76897_77139;
var G__77159 = count__76898_77140;
var G__77160 = (i__76899_77141 + (1));
seq__76894_77138 = G__77157;
chunk__76897_77139 = G__77158;
count__76898_77140 = G__77159;
i__76899_77141 = G__77160;
continue;
}
} else {
var temp__5735__auto___77161 = cljs.core.seq(seq__76894_77138);
if(temp__5735__auto___77161){
var seq__76894_77162__$1 = temp__5735__auto___77161;
if(cljs.core.chunked_seq_QMARK_(seq__76894_77162__$1)){
var c__4556__auto___77163 = cljs.core.chunk_first(seq__76894_77162__$1);
var G__77164 = cljs.core.chunk_rest(seq__76894_77162__$1);
var G__77165 = c__4556__auto___77163;
var G__77166 = cljs.core.count(c__4556__auto___77163);
var G__77167 = (0);
seq__76894_77138 = G__77164;
chunk__76897_77139 = G__77165;
count__76898_77140 = G__77166;
i__76899_77141 = G__77167;
continue;
} else {
var vec__76962_77168 = cljs.core.first(seq__76894_77162__$1);
var key_77169 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76962_77168,(0),null);
var topic_77170 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76962_77168,(1),null);
if(cljs.core.truth_(key_77169)){
if(cljs.core.truth_(topic_77170)){

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_77169,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355))){
var map__76965_77172 = predict_prostate.state.localStorage.get_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),new cljs.core.Keyword(null,"line2","line2",-1975668782)], null));
var map__76965_77173__$1 = (((((!((map__76965_77172 == null))))?(((((map__76965_77172.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__76965_77172.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__76965_77172):map__76965_77172);
var plot_style_77174 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76965_77173__$1,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355));
if(cljs.core.truth_((function (){var fexpr__76967 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"area1","area1",-316994623),null,new cljs.core.Keyword(null,"line2","line2",-1975668782),null], null), null);
return (fexpr__76967.cljs$core$IFn$_invoke$arity$1 ? fexpr__76967.cljs$core$IFn$_invoke$arity$1(plot_style_77174) : fexpr__76967.call(null,plot_style_77174));
})())){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),plot_style_77174);
} else {
predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),new cljs.core.Keyword(null,"line2","line2",-1975668782)], null));

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),new cljs.core.Keyword(null,"line2","line2",-1975668782));
}
} else {
pubsub.feeds.publish(topic_77170,(cljs.core.truth_((function (){var fexpr__76969 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"age","age",-604307804),null,new cljs.core.Keyword(null,"psa","psa",-321761459),null], null), null);
return (fexpr__76969.cljs$core$IFn$_invoke$arity$1 ? fexpr__76969.cljs$core$IFn$_invoke$arity$1(key_77169) : fexpr__76969.call(null,key_77169));
})())?"":null));

}


var G__77176 = cljs.core.next(seq__76894_77162__$1);
var G__77177 = null;
var G__77178 = (0);
var G__77179 = (0);
seq__76894_77138 = G__77176;
chunk__76897_77139 = G__77177;
count__76898_77140 = G__77178;
i__76899_77141 = G__77179;
continue;
} else {
var G__77180 = cljs.core.next(seq__76894_77162__$1);
var G__77181 = null;
var G__77182 = (0);
var G__77183 = (0);
seq__76894_77138 = G__77180;
chunk__76897_77139 = G__77181;
count__76898_77140 = G__77182;
i__76899_77141 = G__77183;
continue;
}
} else {
var G__77184 = cljs.core.next(seq__76894_77162__$1);
var G__77185 = null;
var G__77186 = (0);
var G__77187 = (0);
seq__76894_77138 = G__77184;
chunk__76897_77139 = G__77185;
count__76898_77140 = G__77186;
i__76899_77141 = G__77187;
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
var len__4736__auto___77188 = arguments.length;
var i__4737__auto___77189 = (0);
while(true){
if((i__4737__auto___77189 < len__4736__auto___77188)){
args__4742__auto__.push((arguments[i__4737__auto___77189]));

var G__77191 = (i__4737__auto___77189 + (1));
i__4737__auto___77189 = G__77191;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return predict_prostate.state.mutations.subscribe_to.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(predict_prostate.state.mutations.subscribe_to.cljs$core$IFn$_invoke$arity$variadic = (function (change,cursor,p__76997){
var vec__76998 = p__76997;
var silent = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76998,(0),null);
return pubsub.feeds.subscribe(change,(function (p1__76979_SHARP_,p2__76980_SHARP_){
if(cljs.core.truth_(silent)){
} else {
predict_prostate.state.mutations.log(p1__76979_SHARP_,cljs.core.deref(cursor),p2__76980_SHARP_);
}

return cljs.core.reset_BANG_(cursor,p2__76980_SHARP_);
}));
}));

(predict_prostate.state.mutations.subscribe_to.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(predict_prostate.state.mutations.subscribe_to.cljs$lang$applyTo = (function (seq76981){
var G__76982 = cljs.core.first(seq76981);
var seq76981__$1 = cljs.core.next(seq76981);
var G__76983 = cljs.core.first(seq76981__$1);
var seq76981__$2 = cljs.core.next(seq76981__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__76982,G__76983,seq76981__$2);
}));

predict_prostate.state.mutations.clip = (function predict_prostate$state$mutations$clip(p__77002){
var map__77003 = p__77002;
var map__77003__$1 = (((((!((map__77003 == null))))?(((((map__77003.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__77003.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__77003):map__77003);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77003__$1,new cljs.core.Keyword(null,"value","value",305978217));
var min = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77003__$1,new cljs.core.Keyword(null,"min","min",444991522));
var max = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77003__$1,new cljs.core.Keyword(null,"max","max",61366548));
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
var seq__77007_77201 = cljs.core.seq(predict_prostate.state.run_time.input_changes());
var chunk__77008_77202 = null;
var count__77009_77203 = (0);
var i__77010_77204 = (0);
while(true){
if((i__77010_77204 < count__77009_77203)){
var vec__77100_77205 = chunk__77008_77202.cljs$core$IIndexed$_nth$arity$2(null,i__77010_77204);
var key_77206 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77100_77205,(0),null);
var change_77207 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77100_77205,(1),null);
if(cljs.core.truth_(change_77207)){
pubsub.feeds.subscribe(change_77207,((function (seq__77007_77201,chunk__77008_77202,count__77009_77203,i__77010_77204,vec__77100_77205,key_77206,change_77207){
return (function (topic,value){
predict_prostate.state.mutations.log(topic,cljs.core.deref(predict_prostate.state.run_time.input_cursor(key_77206)),value);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666),key_77206)){
var vec__77103_77208 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(value,":");
var value_77209__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77103_77208,(0),null);
var bad_77210 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77103_77208,(1),null);
var bci_77211 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520))));
var bct_77212 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666))));
if(cljs.core.truth_(isNaN(bci_77211))){
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520)),predict_prostate.state.mutations.num_to_str((function (){var x__4214__auto__ = (1);
var y__4215__auto__ = (function (){var x__4217__auto__ = bci_77211;
var y__4218__auto__ = predict_prostate.state.mutations.str_to_num(value_77209__$1);
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})();
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})()));
}

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_77209__$1),(cljs.core.truth_(bad_77210)?":":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(bad_77210)].join(''));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520),key_77206)){
var vec__77106_77214 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(value,":");
var value_77215__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77106_77214,(0),null);
var bad_77216 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77106_77214,(1),null);
var bci_77217 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520))));
var bct_77218 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666))));
if(cljs.core.not(isNaN(bct_77218))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_77215__$1),(cljs.core.truth_((function (){var or__4126__auto__ = (value_77215__$1 < (0));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return bad_77216;
}
})())?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_77215__$1)].join(''):"")].join(''));
} else {
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_77206,new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969)),value);

predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969),value], null));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,new cljs.core.Keyword(null,"gleason","gleason",-2044470526))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526)),cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518))));
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518)),cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526))));
}
} else {
if(cljs.core.truth_((function (){var fexpr__77109 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gleason","gleason",-2044470526),null,new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518),null], null), null);
return (fexpr__77109.cljs$core$IFn$_invoke$arity$1 ? fexpr__77109.cljs$core$IFn$_invoke$arity$1(key_77206) : fexpr__77109.call(null,key_77206));
})())){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526)),value);

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518)),value);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_77206,new cljs.core.Keyword(null,"h-admissions","h-admissions",-1503094844))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"h-admissions","h-admissions",-1503094844)),value);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,(0))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"charlson-comorbidity","charlson-comorbidity",-633596907)),null);
} else {
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_77206,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),value);

predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),value], null));
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(key_77206),(((value == null))?predict_prostate.state.config.get_input_default(predict_prostate.state.config.input_groups,key_77206):value));

}
}
}
}
}
}

return predict_prostate.models.runner.recalculate_model.cljs$core$IFn$_invoke$arity$2(predict_prostate.state.run_time.input_map(),predict_prostate.state.run_time.N);
});})(seq__77007_77201,chunk__77008_77202,count__77009_77203,i__77010_77204,vec__77100_77205,key_77206,change_77207))
);
} else {
}


var G__77221 = seq__77007_77201;
var G__77222 = chunk__77008_77202;
var G__77223 = count__77009_77203;
var G__77224 = (i__77010_77204 + (1));
seq__77007_77201 = G__77221;
chunk__77008_77202 = G__77222;
count__77009_77203 = G__77223;
i__77010_77204 = G__77224;
continue;
} else {
var temp__5735__auto___77226 = cljs.core.seq(seq__77007_77201);
if(temp__5735__auto___77226){
var seq__77007_77227__$1 = temp__5735__auto___77226;
if(cljs.core.chunked_seq_QMARK_(seq__77007_77227__$1)){
var c__4556__auto___77228 = cljs.core.chunk_first(seq__77007_77227__$1);
var G__77229 = cljs.core.chunk_rest(seq__77007_77227__$1);
var G__77230 = c__4556__auto___77228;
var G__77231 = cljs.core.count(c__4556__auto___77228);
var G__77232 = (0);
seq__77007_77201 = G__77229;
chunk__77008_77202 = G__77230;
count__77009_77203 = G__77231;
i__77010_77204 = G__77232;
continue;
} else {
var vec__77110_77233 = cljs.core.first(seq__77007_77227__$1);
var key_77234 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77110_77233,(0),null);
var change_77235 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77110_77233,(1),null);
if(cljs.core.truth_(change_77235)){
pubsub.feeds.subscribe(change_77235,((function (seq__77007_77201,chunk__77008_77202,count__77009_77203,i__77010_77204,vec__77110_77233,key_77234,change_77235,seq__77007_77227__$1,temp__5735__auto___77226){
return (function (topic,value){
predict_prostate.state.mutations.log(topic,cljs.core.deref(predict_prostate.state.run_time.input_cursor(key_77234)),value);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666),key_77234)){
var vec__77113_77237 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(value,":");
var value_77238__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77113_77237,(0),null);
var bad_77239 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77113_77237,(1),null);
var bci_77240 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520))));
var bct_77241 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666))));
if(cljs.core.truth_(isNaN(bci_77240))){
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520)),predict_prostate.state.mutations.num_to_str((function (){var x__4214__auto__ = (1);
var y__4215__auto__ = (function (){var x__4217__auto__ = bci_77240;
var y__4218__auto__ = predict_prostate.state.mutations.str_to_num(value_77238__$1);
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})();
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})()));
}

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_77238__$1),(cljs.core.truth_(bad_77239)?":":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(bad_77239)].join(''));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520),key_77234)){
var vec__77116_77243 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(value,":");
var value_77244__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77116_77243,(0),null);
var bad_77245 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77116_77243,(1),null);
var bci_77246 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520))));
var bct_77247 = predict_prostate.state.mutations.str_to_num(cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666))));
if(cljs.core.not(isNaN(bct_77247))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_77244__$1),(cljs.core.truth_((function (){var or__4126__auto__ = (value_77244__$1 < (0));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return bad_77245;
}
})())?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_77244__$1)].join(''):"")].join(''));
} else {
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_77234,new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969)),value);

predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hist-scale","hist-scale",235998969),value], null));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,new cljs.core.Keyword(null,"gleason","gleason",-2044470526))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526)),cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518))));
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518)),cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526))));
}
} else {
if(cljs.core.truth_((function (){var fexpr__77119 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gleason","gleason",-2044470526),null,new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518),null], null), null);
return (fexpr__77119.cljs$core$IFn$_invoke$arity$1 ? fexpr__77119.cljs$core$IFn$_invoke$arity$1(key_77234) : fexpr__77119.call(null,key_77234));
})())){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526)),value);

cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518)),value);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_77234,new cljs.core.Keyword(null,"h-admissions","h-admissions",-1503094844))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"h-admissions","h-admissions",-1503094844)),value);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,(0))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"charlson-comorbidity","charlson-comorbidity",-633596907)),null);
} else {
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_77234,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355))){
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)),value);

predict_prostate.state.localStorage.put_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),value], null));
} else {
cljs.core.reset_BANG_(predict_prostate.state.run_time.input_cursor(key_77234),(((value == null))?predict_prostate.state.config.get_input_default(predict_prostate.state.config.input_groups,key_77234):value));

}
}
}
}
}
}

return predict_prostate.models.runner.recalculate_model.cljs$core$IFn$_invoke$arity$2(predict_prostate.state.run_time.input_map(),predict_prostate.state.run_time.N);
});})(seq__77007_77201,chunk__77008_77202,count__77009_77203,i__77010_77204,vec__77110_77233,key_77234,change_77235,seq__77007_77227__$1,temp__5735__auto___77226))
);
} else {
}


var G__77252 = cljs.core.next(seq__77007_77227__$1);
var G__77253 = null;
var G__77254 = (0);
var G__77255 = (0);
seq__77007_77201 = G__77252;
chunk__77008_77202 = G__77253;
count__77009_77203 = G__77254;
i__77010_77204 = G__77255;
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

predict_prostate.state.run_time.route_change.pubsub$feeds$TopicFeed$subscribe$arity$2(null,(function (_,p__77120){
var vec__77121 = p__77120;
var page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77121,(0),null);
var param1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77121,(1),null);
var param2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77121,(2),null);
var rvec = vec__77121;
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
var new_lang_77265 = new cljs.core.Keyword(null,"lang","lang",-1819677104).cljs$core$IFn$_invoke$arity$1(predict_prostate.state.localStorage.get_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"en","en",88457073)], null)));
predict_prostate.state.mutations.reload_lang(cljs.core.name(new_lang_77265));

return translations.tongue_base.load_translations_STAR_(url,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(translations.tongue_base.handle_dictionary,predict_prostate.state.run_time.t_state_cursor));
}));

predict_prostate.state.run_time.edit_change.pubsub$feeds$TopicFeed$subscribe$arity$2(null,(function (_,arg){
var text = (function (){var fexpr__77124 = cljs.core.deref(predict_prostate.state.run_time.ttt_cursor);
return (fexpr__77124.cljs$core$IFn$_invoke$arity$1 ? fexpr__77124.cljs$core$IFn$_invoke$arity$1(arg) : fexpr__77124.call(null,arg));
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(predict_prostate.state.run_time.edit_cursor,cljs.core.assoc,new cljs.core.Keyword(null,"edit-arg","edit-arg",1216866257),arg,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"edit-key","edit-key",-1833788727),((((cljs.core.vector_QMARK_(arg)) && ((cljs.core.count(arg) > (0)))))?cljs.core.first(arg):arg),new cljs.core.Keyword(null,"text","text",-1790561697),((((cljs.core.vector_QMARK_(arg)) && ((cljs.core.count(arg) > (1)))))?cljs.core.second(arg):text)], 0));

return $("#editorModal").modal("show");
}));

predict_prostate.state.run_time.new_text_change.pubsub$feeds$TopicFeed$subscribe$arity$2(null,(function (_,p__77125){
var vec__77126 = p__77125;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77126,(0),null);
var new_text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77126,(1),null);
return cljs.core.reset_BANG_(predict_prostate.state.run_time.new_text_cursor,new_text);
}));

predict_prostate.state.run_time.text_change.pubsub$feeds$TopicFeed$subscribe$arity$2(null,(function (_,p__77129){
var vec__77130 = p__77129;
var edit_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77130,(0),null);
var new_text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77130,(1),null);
var lang = new cljs.core.Keyword(null,"lang","lang",-1819677104).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(predict_prostate.state.run_time.t_state_cursor));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(predict_prostate.state.run_time.t_state_cursor,translations.tongue_base.process_dict_op,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"upsert","upsert",1416724984),new cljs.core.Keyword(null,"lang","lang",-1819677104).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(predict_prostate.state.run_time.t_state_cursor)),cljs.core.PersistentArrayMap.createAsIfByAssoc([edit_key,new_text])], null));

cljs.core.reset_BANG_(predict_prostate.state.run_time.new_text_cursor,null);

return translations.tranny_api.upload_translation.cljs$core$IFn$_invoke$arity$3(edit_key,cljs.core.name(lang),new_text);
}));

predict_prostate.state.run_time.add_language_modal.pubsub$feeds$TopicFeed$subscribe$arity$2(null,(function (_){
return $("#newLanguageModal").modal("show");
}));

predict_prostate.state.run_time.add_language.pubsub$feeds$TopicFeed$subscribe$arity$2(null,(function (_,p__77133){
var vec__77134 = p__77133;
var new_lang = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77134,(0),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(new_lang))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(predict_prostate.state.run_time.t_state_cursor,cljs.core.update,new cljs.core.Keyword(null,"languages","languages",1471910331),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(new_lang)], 0));
} else {
return null;
}
}));

return predict_prostate.state.mutations.clear_inputs();
});

//# sourceMappingURL=predict_prostate.state.mutations.js.map
