goog.provide('rum.derived_atom');
rum.derived_atom.derived_atom = (function rum$derived_atom$derived_atom(var_args){
var G__42357 = arguments.length;
switch (G__42357) {
case 3:
return rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$3 = (function (refs,key,f){
return rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4(refs,key,f,cljs.core.PersistentArrayMap.EMPTY);
}));

(rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4 = (function (refs,key,f,opts){
var map__42366 = opts;
var map__42366__$1 = (((((!((map__42366 == null))))?(((((map__42366.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42366.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42366):map__42366);
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42366__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var check_equals_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__42366__$1,new cljs.core.Keyword(null,"check-equals?","check-equals?",-2005755315),true);
var recalc = (function (){var G__42369 = cljs.core.count(refs);
switch (G__42369) {
case (1):
var vec__42370 = refs;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42370,(0),null);
return (function (){
var G__42374 = cljs.core.deref(a);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__42374) : f.call(null,G__42374));
});

break;
case (2):
var vec__42378 = refs;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42378,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42378,(1),null);
return (function (){
var G__42381 = cljs.core.deref(a);
var G__42382 = cljs.core.deref(b);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__42381,G__42382) : f.call(null,G__42381,G__42382));
});

break;
case (3):
var vec__42384 = refs;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42384,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42384,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42384,(2),null);
return (function (){
var G__42387 = cljs.core.deref(a);
var G__42388 = cljs.core.deref(b);
var G__42389 = cljs.core.deref(c);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__42387,G__42388,G__42389) : f.call(null,G__42387,G__42388,G__42389));
});

break;
default:
return (function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.deref,refs));
});

}
})();
var sink = (cljs.core.truth_(ref)?(function (){var G__42394 = ref;
cljs.core.reset_BANG_(G__42394,(recalc.cljs$core$IFn$_invoke$arity$0 ? recalc.cljs$core$IFn$_invoke$arity$0() : recalc.call(null)));

return G__42394;
})():cljs.core.atom.cljs$core$IFn$_invoke$arity$1((recalc.cljs$core$IFn$_invoke$arity$0 ? recalc.cljs$core$IFn$_invoke$arity$0() : recalc.call(null))));
var watch = (cljs.core.truth_(check_equals_QMARK_)?(function (_,___$1,___$2,___$3){
var new_val = (recalc.cljs$core$IFn$_invoke$arity$0 ? recalc.cljs$core$IFn$_invoke$arity$0() : recalc.call(null));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(sink),new_val)){
return cljs.core.reset_BANG_(sink,new_val);
} else {
return null;
}
}):(function (_,___$1,___$2,___$3){
return cljs.core.reset_BANG_(sink,(recalc.cljs$core$IFn$_invoke$arity$0 ? recalc.cljs$core$IFn$_invoke$arity$0() : recalc.call(null)));
}));
var seq__42396_42416 = cljs.core.seq(refs);
var chunk__42397_42417 = null;
var count__42398_42418 = (0);
var i__42399_42419 = (0);
while(true){
if((i__42399_42419 < count__42398_42418)){
var ref_42420__$1 = chunk__42397_42417.cljs$core$IIndexed$_nth$arity$2(null,i__42399_42419);
cljs.core.add_watch(ref_42420__$1,key,watch);


var G__42421 = seq__42396_42416;
var G__42422 = chunk__42397_42417;
var G__42423 = count__42398_42418;
var G__42424 = (i__42399_42419 + (1));
seq__42396_42416 = G__42421;
chunk__42397_42417 = G__42422;
count__42398_42418 = G__42423;
i__42399_42419 = G__42424;
continue;
} else {
var temp__5735__auto___42425 = cljs.core.seq(seq__42396_42416);
if(temp__5735__auto___42425){
var seq__42396_42426__$1 = temp__5735__auto___42425;
if(cljs.core.chunked_seq_QMARK_(seq__42396_42426__$1)){
var c__4556__auto___42427 = cljs.core.chunk_first(seq__42396_42426__$1);
var G__42429 = cljs.core.chunk_rest(seq__42396_42426__$1);
var G__42430 = c__4556__auto___42427;
var G__42431 = cljs.core.count(c__4556__auto___42427);
var G__42432 = (0);
seq__42396_42416 = G__42429;
chunk__42397_42417 = G__42430;
count__42398_42418 = G__42431;
i__42399_42419 = G__42432;
continue;
} else {
var ref_42433__$1 = cljs.core.first(seq__42396_42426__$1);
cljs.core.add_watch(ref_42433__$1,key,watch);


var G__42434 = cljs.core.next(seq__42396_42426__$1);
var G__42435 = null;
var G__42436 = (0);
var G__42437 = (0);
seq__42396_42416 = G__42434;
chunk__42397_42417 = G__42435;
count__42398_42418 = G__42436;
i__42399_42419 = G__42437;
continue;
}
} else {
}
}
break;
}

return sink;
}));

(rum.derived_atom.derived_atom.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=rum.derived_atom.js.map
