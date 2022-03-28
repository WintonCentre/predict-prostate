goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__40268,p__40269){
var map__40271 = p__40268;
var map__40271__$1 = cljs.core.__destructure_map(map__40271);
var svc = map__40271__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40271__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40271__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40271__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__40272 = p__40269;
var map__40272__$1 = cljs.core.__destructure_map(map__40272);
var msg = map__40272__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40272__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40272__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40272__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__40272__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__40297,p__40298){
var map__40299 = p__40297;
var map__40299__$1 = cljs.core.__destructure_map(map__40299);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40299__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__40300 = p__40298;
var map__40300__$1 = cljs.core.__destructure_map(map__40300);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40300__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__40306,p__40307){
var map__40308 = p__40306;
var map__40308__$1 = cljs.core.__destructure_map(map__40308);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40308__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40308__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__40309 = p__40307;
var map__40309__$1 = cljs.core.__destructure_map(map__40309);
var msg = map__40309__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__40309__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__40313,tid){
var map__40314 = p__40313;
var map__40314__$1 = cljs.core.__destructure_map(map__40314);
var svc = map__40314__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40314__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__40323 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__40324 = null;
var count__40325 = (0);
var i__40326 = (0);
while(true){
if((i__40326 < count__40325)){
var vec__40340 = chunk__40324.cljs$core$IIndexed$_nth$arity$2(null,i__40326);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40340,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40340,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__40364 = seq__40323;
var G__40365 = chunk__40324;
var G__40366 = count__40325;
var G__40367 = (i__40326 + (1));
seq__40323 = G__40364;
chunk__40324 = G__40365;
count__40325 = G__40366;
i__40326 = G__40367;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__40323);
if(temp__5753__auto__){
var seq__40323__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40323__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__40323__$1);
var G__40368 = cljs.core.chunk_rest(seq__40323__$1);
var G__40369 = c__4638__auto__;
var G__40370 = cljs.core.count(c__4638__auto__);
var G__40371 = (0);
seq__40323 = G__40368;
chunk__40324 = G__40369;
count__40325 = G__40370;
i__40326 = G__40371;
continue;
} else {
var vec__40343 = cljs.core.first(seq__40323__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40343,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40343,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__40372 = cljs.core.next(seq__40323__$1);
var G__40373 = null;
var G__40374 = (0);
var G__40375 = (0);
seq__40323 = G__40372;
chunk__40324 = G__40373;
count__40325 = G__40374;
i__40326 = G__40375;
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
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__40319_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__40319_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__40320_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__40320_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__40321_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__40321_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__40322_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__40322_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__40361){
var map__40362 = p__40361;
var map__40362__$1 = cljs.core.__destructure_map(map__40362);
var svc = map__40362__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40362__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40362__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
