goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__39909,p__39910){
var map__39911 = p__39909;
var map__39911__$1 = cljs.core.__destructure_map(map__39911);
var svc = map__39911__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39911__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39911__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39911__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__39912 = p__39910;
var map__39912__$1 = cljs.core.__destructure_map(map__39912);
var msg = map__39912__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39912__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39912__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39912__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__39912__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__39916,p__39917){
var map__39918 = p__39916;
var map__39918__$1 = cljs.core.__destructure_map(map__39918);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39918__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__39919 = p__39917;
var map__39919__$1 = cljs.core.__destructure_map(map__39919);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39919__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__39920,p__39921){
var map__39922 = p__39920;
var map__39922__$1 = cljs.core.__destructure_map(map__39922);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39922__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39922__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__39923 = p__39921;
var map__39923__$1 = cljs.core.__destructure_map(map__39923);
var msg = map__39923__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__39923__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__39924,tid){
var map__39925 = p__39924;
var map__39925__$1 = cljs.core.__destructure_map(map__39925);
var svc = map__39925__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39925__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__39930 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__39931 = null;
var count__39932 = (0);
var i__39933 = (0);
while(true){
if((i__39933 < count__39932)){
var vec__39940 = chunk__39931.cljs$core$IIndexed$_nth$arity$2(null,i__39933);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39940,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39940,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__39952 = seq__39930;
var G__39953 = chunk__39931;
var G__39954 = count__39932;
var G__39955 = (i__39933 + (1));
seq__39930 = G__39952;
chunk__39931 = G__39953;
count__39932 = G__39954;
i__39933 = G__39955;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__39930);
if(temp__5753__auto__){
var seq__39930__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39930__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__39930__$1);
var G__39956 = cljs.core.chunk_rest(seq__39930__$1);
var G__39957 = c__4638__auto__;
var G__39958 = cljs.core.count(c__4638__auto__);
var G__39959 = (0);
seq__39930 = G__39956;
chunk__39931 = G__39957;
count__39932 = G__39958;
i__39933 = G__39959;
continue;
} else {
var vec__39943 = cljs.core.first(seq__39930__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39943,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39943,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__39963 = cljs.core.next(seq__39930__$1);
var G__39964 = null;
var G__39965 = (0);
var G__39966 = (0);
seq__39930 = G__39963;
chunk__39931 = G__39964;
count__39932 = G__39965;
i__39933 = G__39966;
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
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__39926_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__39926_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__39927_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__39927_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__39928_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__39928_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__39929_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__39929_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__39946){
var map__39947 = p__39946;
var map__39947__$1 = cljs.core.__destructure_map(map__39947);
var svc = map__39947__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39947__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39947__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
