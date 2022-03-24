goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__39837,p__39838){
var map__39839 = p__39837;
var map__39839__$1 = cljs.core.__destructure_map(map__39839);
var svc = map__39839__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39839__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39839__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39839__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__39840 = p__39838;
var map__39840__$1 = cljs.core.__destructure_map(map__39840);
var msg = map__39840__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39840__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39840__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39840__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__39840__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__39841,p__39842){
var map__39844 = p__39841;
var map__39844__$1 = cljs.core.__destructure_map(map__39844);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39844__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__39845 = p__39842;
var map__39845__$1 = cljs.core.__destructure_map(map__39845);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39845__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__39850,p__39851){
var map__39852 = p__39850;
var map__39852__$1 = cljs.core.__destructure_map(map__39852);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39852__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39852__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__39853 = p__39851;
var map__39853__$1 = cljs.core.__destructure_map(map__39853);
var msg = map__39853__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__39853__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__39855,tid){
var map__39856 = p__39855;
var map__39856__$1 = cljs.core.__destructure_map(map__39856);
var svc = map__39856__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39856__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__39868 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__39869 = null;
var count__39870 = (0);
var i__39871 = (0);
while(true){
if((i__39871 < count__39870)){
var vec__39881 = chunk__39869.cljs$core$IIndexed$_nth$arity$2(null,i__39871);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39881,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39881,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__39900 = seq__39868;
var G__39901 = chunk__39869;
var G__39902 = count__39870;
var G__39903 = (i__39871 + (1));
seq__39868 = G__39900;
chunk__39869 = G__39901;
count__39870 = G__39902;
i__39871 = G__39903;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__39868);
if(temp__5753__auto__){
var seq__39868__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39868__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__39868__$1);
var G__39905 = cljs.core.chunk_rest(seq__39868__$1);
var G__39906 = c__4638__auto__;
var G__39907 = cljs.core.count(c__4638__auto__);
var G__39908 = (0);
seq__39868 = G__39905;
chunk__39869 = G__39906;
count__39870 = G__39907;
i__39871 = G__39908;
continue;
} else {
var vec__39884 = cljs.core.first(seq__39868__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39884,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39884,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__39909 = cljs.core.next(seq__39868__$1);
var G__39910 = null;
var G__39911 = (0);
var G__39912 = (0);
seq__39868 = G__39909;
chunk__39869 = G__39910;
count__39870 = G__39911;
i__39871 = G__39912;
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
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__39863_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__39863_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__39864_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__39864_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__39865_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__39865_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__39866_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__39866_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__39889){
var map__39892 = p__39889;
var map__39892__$1 = cljs.core.__destructure_map(map__39892);
var svc = map__39892__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39892__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39892__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
