goog.provide('rum.derived_atom');
rum.derived_atom.derived_atom = (function rum$derived_atom$derived_atom(var_args){
var G__42360 = arguments.length;
switch (G__42360) {
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
var map__42367 = opts;
var map__42367__$1 = (((((!((map__42367 == null))))?(((((map__42367.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42367.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42367):map__42367);
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42367__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var check_equals_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__42367__$1,new cljs.core.Keyword(null,"check-equals?","check-equals?",-2005755315),true);
var recalc = (function (){var G__42373 = cljs.core.count(refs);
switch (G__42373) {
case (1):
var vec__42374 = refs;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42374,(0),null);
return (function (){
var G__42377 = cljs.core.deref(a);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__42377) : f.call(null,G__42377));
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
var vec__42383 = refs;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42383,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42383,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42383,(2),null);
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
var sink = (cljs.core.truth_(ref)?(function (){var G__42395 = ref;
cljs.core.reset_BANG_(G__42395,(recalc.cljs$core$IFn$_invoke$arity$0 ? recalc.cljs$core$IFn$_invoke$arity$0() : recalc.call(null)));

return G__42395;
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
var seq__42397_42413 = cljs.core.seq(refs);
var chunk__42398_42414 = null;
var count__42399_42415 = (0);
var i__42400_42416 = (0);
while(true){
if((i__42400_42416 < count__42399_42415)){
var ref_42417__$1 = chunk__42398_42414.cljs$core$IIndexed$_nth$arity$2(null,i__42400_42416);
cljs.core.add_watch(ref_42417__$1,key,watch);


var G__42418 = seq__42397_42413;
var G__42419 = chunk__42398_42414;
var G__42420 = count__42399_42415;
var G__42421 = (i__42400_42416 + (1));
seq__42397_42413 = G__42418;
chunk__42398_42414 = G__42419;
count__42399_42415 = G__42420;
i__42400_42416 = G__42421;
continue;
} else {
var temp__5735__auto___42422 = cljs.core.seq(seq__42397_42413);
if(temp__5735__auto___42422){
var seq__42397_42423__$1 = temp__5735__auto___42422;
if(cljs.core.chunked_seq_QMARK_(seq__42397_42423__$1)){
var c__4556__auto___42424 = cljs.core.chunk_first(seq__42397_42423__$1);
var G__42425 = cljs.core.chunk_rest(seq__42397_42423__$1);
var G__42426 = c__4556__auto___42424;
var G__42427 = cljs.core.count(c__4556__auto___42424);
var G__42428 = (0);
seq__42397_42413 = G__42425;
chunk__42398_42414 = G__42426;
count__42399_42415 = G__42427;
i__42400_42416 = G__42428;
continue;
} else {
var ref_42429__$1 = cljs.core.first(seq__42397_42423__$1);
cljs.core.add_watch(ref_42429__$1,key,watch);


var G__42430 = cljs.core.next(seq__42397_42423__$1);
var G__42431 = null;
var G__42432 = (0);
var G__42433 = (0);
seq__42397_42413 = G__42430;
chunk__42398_42414 = G__42431;
count__42399_42415 = G__42432;
i__42400_42416 = G__42433;
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
