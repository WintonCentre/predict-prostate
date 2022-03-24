goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__36015,res){
var map__36017 = p__36015;
var map__36017__$1 = cljs.core.__destructure_map(map__36017);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36017__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36017__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__36019 = res;
var G__36019__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36019,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__36019);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36019__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__36019__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__36027 = arguments.length;
switch (G__36027) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__36033,msg,handlers,timeout_after_ms){
var map__36034 = p__36033;
var map__36034__$1 = cljs.core.__destructure_map(map__36034);
var runtime = map__36034__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36034__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___36285 = arguments.length;
var i__4819__auto___36286 = (0);
while(true){
if((i__4819__auto___36286 < len__4818__auto___36285)){
args__4824__auto__.push((arguments[i__4819__auto___36286]));

var G__36288 = (i__4819__auto___36286 + (1));
i__4819__auto___36286 = G__36288;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__36061,ev,args){
var map__36062 = p__36061;
var map__36062__$1 = cljs.core.__destructure_map(map__36062);
var runtime = map__36062__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36062__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__36063 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__36066 = null;
var count__36067 = (0);
var i__36068 = (0);
while(true){
if((i__36068 < count__36067)){
var ext = chunk__36066.cljs$core$IIndexed$_nth$arity$2(null,i__36068);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__36293 = seq__36063;
var G__36294 = chunk__36066;
var G__36295 = count__36067;
var G__36296 = (i__36068 + (1));
seq__36063 = G__36293;
chunk__36066 = G__36294;
count__36067 = G__36295;
i__36068 = G__36296;
continue;
} else {
var G__36297 = seq__36063;
var G__36298 = chunk__36066;
var G__36299 = count__36067;
var G__36300 = (i__36068 + (1));
seq__36063 = G__36297;
chunk__36066 = G__36298;
count__36067 = G__36299;
i__36068 = G__36300;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__36063);
if(temp__5753__auto__){
var seq__36063__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36063__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__36063__$1);
var G__36301 = cljs.core.chunk_rest(seq__36063__$1);
var G__36302 = c__4638__auto__;
var G__36303 = cljs.core.count(c__4638__auto__);
var G__36304 = (0);
seq__36063 = G__36301;
chunk__36066 = G__36302;
count__36067 = G__36303;
i__36068 = G__36304;
continue;
} else {
var ext = cljs.core.first(seq__36063__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__36305 = cljs.core.next(seq__36063__$1);
var G__36306 = null;
var G__36307 = (0);
var G__36308 = (0);
seq__36063 = G__36305;
chunk__36066 = G__36306;
count__36067 = G__36307;
i__36068 = G__36308;
continue;
} else {
var G__36309 = cljs.core.next(seq__36063__$1);
var G__36310 = null;
var G__36311 = (0);
var G__36312 = (0);
seq__36063 = G__36309;
chunk__36066 = G__36310;
count__36067 = G__36311;
i__36068 = G__36312;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq36043){
var G__36045 = cljs.core.first(seq36043);
var seq36043__$1 = cljs.core.next(seq36043);
var G__36046 = cljs.core.first(seq36043__$1);
var seq36043__$2 = cljs.core.next(seq36043__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36045,G__36046,seq36043__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__36076,p__36077){
var map__36078 = p__36076;
var map__36078__$1 = cljs.core.__destructure_map(map__36078);
var runtime = map__36078__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36078__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__36079 = p__36077;
var map__36079__$1 = cljs.core.__destructure_map(map__36079);
var msg = map__36079__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36079__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__36080 = cljs.core.deref(state_ref);
var map__36080__$1 = cljs.core.__destructure_map(map__36080);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36080__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36080__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__36128){
var map__36129 = p__36128;
var map__36129__$1 = cljs.core.__destructure_map(map__36129);
var runtime = map__36129__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36129__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__4212__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__36172,msg){
var map__36173 = p__36172;
var map__36173__$1 = cljs.core.__destructure_map(map__36173);
var runtime = map__36173__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36173__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__36188,key,p__36189){
var map__36190 = p__36188;
var map__36190__$1 = cljs.core.__destructure_map(map__36190);
var state = map__36190__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36190__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__36191 = p__36189;
var map__36191__$1 = cljs.core.__destructure_map(map__36191);
var spec = map__36191__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36191__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__36194,key,spec){
var map__36195 = p__36194;
var map__36195__$1 = cljs.core.__destructure_map(map__36195);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36195__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__36196_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__36196_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__36197_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__36197_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__36198_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__36198_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__36199_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__36199_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__36200_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__36200_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__36206,key){
var map__36207 = p__36206;
var map__36207__$1 = cljs.core.__destructure_map(map__36207);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36207__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__36212,msg){
var map__36213 = p__36212;
var map__36213__$1 = cljs.core.__destructure_map(map__36213);
var runtime = map__36213__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36213__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__36222,p__36223){
var map__36224 = p__36222;
var map__36224__$1 = cljs.core.__destructure_map(map__36224);
var runtime = map__36224__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36224__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__36225 = p__36223;
var map__36225__$1 = cljs.core.__destructure_map(map__36225);
var msg = map__36225__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36225__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36225__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__36226 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__36228 = null;
var count__36229 = (0);
var i__36230 = (0);
while(true){
if((i__36230 < count__36229)){
var map__36268 = chunk__36228.cljs$core$IIndexed$_nth$arity$2(null,i__36230);
var map__36268__$1 = cljs.core.__destructure_map(map__36268);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36268__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__36326 = seq__36226;
var G__36327 = chunk__36228;
var G__36328 = count__36229;
var G__36329 = (i__36230 + (1));
seq__36226 = G__36326;
chunk__36228 = G__36327;
count__36229 = G__36328;
i__36230 = G__36329;
continue;
} else {
var G__36330 = seq__36226;
var G__36331 = chunk__36228;
var G__36332 = count__36229;
var G__36333 = (i__36230 + (1));
seq__36226 = G__36330;
chunk__36228 = G__36331;
count__36229 = G__36332;
i__36230 = G__36333;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__36226);
if(temp__5753__auto__){
var seq__36226__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36226__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__36226__$1);
var G__36334 = cljs.core.chunk_rest(seq__36226__$1);
var G__36335 = c__4638__auto__;
var G__36336 = cljs.core.count(c__4638__auto__);
var G__36337 = (0);
seq__36226 = G__36334;
chunk__36228 = G__36335;
count__36229 = G__36336;
i__36230 = G__36337;
continue;
} else {
var map__36272 = cljs.core.first(seq__36226__$1);
var map__36272__$1 = cljs.core.__destructure_map(map__36272);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36272__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__36339 = cljs.core.next(seq__36226__$1);
var G__36340 = null;
var G__36341 = (0);
var G__36342 = (0);
seq__36226 = G__36339;
chunk__36228 = G__36340;
count__36229 = G__36341;
i__36230 = G__36342;
continue;
} else {
var G__36343 = cljs.core.next(seq__36226__$1);
var G__36344 = null;
var G__36345 = (0);
var G__36346 = (0);
seq__36226 = G__36343;
chunk__36228 = G__36344;
count__36229 = G__36345;
i__36230 = G__36346;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
