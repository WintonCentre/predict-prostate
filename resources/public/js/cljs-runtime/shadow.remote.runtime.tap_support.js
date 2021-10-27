goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__39026,p__39027){
var map__39028 = p__39026;
var map__39028__$1 = (((((!((map__39028 == null))))?(((((map__39028.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39028.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39028):map__39028);
var svc = map__39028__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39028__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39028__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39028__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__39029 = p__39027;
var map__39029__$1 = (((((!((map__39029 == null))))?(((((map__39029.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39029.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39029):map__39029);
var msg = map__39029__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39029__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39029__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39029__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__39029__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__39041,p__39042){
var map__39044 = p__39041;
var map__39044__$1 = (((((!((map__39044 == null))))?(((((map__39044.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39044.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39044):map__39044);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39044__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__39045 = p__39042;
var map__39045__$1 = (((((!((map__39045 == null))))?(((((map__39045.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39045.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39045):map__39045);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39045__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__39053,p__39054){
var map__39055 = p__39053;
var map__39055__$1 = (((((!((map__39055 == null))))?(((((map__39055.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39055.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39055):map__39055);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39055__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39055__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__39056 = p__39054;
var map__39056__$1 = (((((!((map__39056 == null))))?(((((map__39056.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39056.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39056):map__39056);
var msg = map__39056__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__39056__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__39064,tid){
var map__39065 = p__39064;
var map__39065__$1 = (((((!((map__39065 == null))))?(((((map__39065.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39065.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39065):map__39065);
var svc = map__39065__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39065__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__39077 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__39078 = null;
var count__39079 = (0);
var i__39080 = (0);
while(true){
if((i__39080 < count__39079)){
var vec__39092 = chunk__39078.cljs$core$IIndexed$_nth$arity$2(null,i__39080);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39092,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39092,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__39106 = seq__39077;
var G__39107 = chunk__39078;
var G__39108 = count__39079;
var G__39109 = (i__39080 + (1));
seq__39077 = G__39106;
chunk__39078 = G__39107;
count__39079 = G__39108;
i__39080 = G__39109;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__39077);
if(temp__5735__auto__){
var seq__39077__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39077__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__39077__$1);
var G__39114 = cljs.core.chunk_rest(seq__39077__$1);
var G__39115 = c__4556__auto__;
var G__39116 = cljs.core.count(c__4556__auto__);
var G__39117 = (0);
seq__39077 = G__39114;
chunk__39078 = G__39115;
count__39079 = G__39116;
i__39080 = G__39117;
continue;
} else {
var vec__39095 = cljs.core.first(seq__39077__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39095,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39095,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__39118 = cljs.core.next(seq__39077__$1);
var G__39119 = null;
var G__39120 = (0);
var G__39121 = (0);
seq__39077 = G__39118;
chunk__39078 = G__39119;
count__39079 = G__39120;
i__39080 = G__39121;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__39071_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__39071_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__39072_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__39072_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__39073_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__39073_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__39074_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__39074_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__39100){
var map__39101 = p__39100;
var map__39101__$1 = (((((!((map__39101 == null))))?(((((map__39101.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39101.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39101):map__39101);
var svc = map__39101__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39101__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39101__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
