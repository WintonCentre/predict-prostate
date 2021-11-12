goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__39099,p__39100){
var map__39102 = p__39099;
var map__39102__$1 = (((((!((map__39102 == null))))?(((((map__39102.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39102.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39102):map__39102);
var svc = map__39102__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39102__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39102__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39102__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__39103 = p__39100;
var map__39103__$1 = (((((!((map__39103 == null))))?(((((map__39103.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39103.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39103):map__39103);
var msg = map__39103__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39103__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39103__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39103__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__39103__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__39134,p__39135){
var map__39142 = p__39134;
var map__39142__$1 = (((((!((map__39142 == null))))?(((((map__39142.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39142.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39142):map__39142);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39142__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__39143 = p__39135;
var map__39143__$1 = (((((!((map__39143 == null))))?(((((map__39143.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39143.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39143):map__39143);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39143__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__39180,p__39181){
var map__39185 = p__39180;
var map__39185__$1 = (((((!((map__39185 == null))))?(((((map__39185.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39185.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39185):map__39185);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39185__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39185__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__39186 = p__39181;
var map__39186__$1 = (((((!((map__39186 == null))))?(((((map__39186.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39186.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39186):map__39186);
var msg = map__39186__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__39186__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__39192,tid){
var map__39193 = p__39192;
var map__39193__$1 = (((((!((map__39193 == null))))?(((((map__39193.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39193.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39193):map__39193);
var svc = map__39193__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39193__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__39216 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__39217 = null;
var count__39218 = (0);
var i__39219 = (0);
while(true){
if((i__39219 < count__39218)){
var vec__39237 = chunk__39217.cljs$core$IIndexed$_nth$arity$2(null,i__39219);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39237,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39237,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__39373 = seq__39216;
var G__39374 = chunk__39217;
var G__39375 = count__39218;
var G__39376 = (i__39219 + (1));
seq__39216 = G__39373;
chunk__39217 = G__39374;
count__39218 = G__39375;
i__39219 = G__39376;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__39216);
if(temp__5735__auto__){
var seq__39216__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39216__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__39216__$1);
var G__39379 = cljs.core.chunk_rest(seq__39216__$1);
var G__39380 = c__4556__auto__;
var G__39381 = cljs.core.count(c__4556__auto__);
var G__39382 = (0);
seq__39216 = G__39379;
chunk__39217 = G__39380;
count__39218 = G__39381;
i__39219 = G__39382;
continue;
} else {
var vec__39244 = cljs.core.first(seq__39216__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39244,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39244,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__39391 = cljs.core.next(seq__39216__$1);
var G__39392 = null;
var G__39393 = (0);
var G__39394 = (0);
seq__39216 = G__39391;
chunk__39217 = G__39392;
count__39218 = G__39393;
i__39219 = G__39394;
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
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__39204_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__39204_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__39205_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__39205_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__39206_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__39206_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__39207_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__39207_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__39275){
var map__39288 = p__39275;
var map__39288__$1 = (((((!((map__39288 == null))))?(((((map__39288.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39288.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39288):map__39288);
var svc = map__39288__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39288__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39288__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
