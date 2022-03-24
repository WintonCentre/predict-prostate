goog.provide('rum.derived_atom');
rum.derived_atom.derived_atom = (function rum$derived_atom$derived_atom(var_args){
var G__42246 = arguments.length;
switch (G__42246) {
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
var map__42253 = opts;
var map__42253__$1 = cljs.core.__destructure_map(map__42253);
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42253__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var check_equals_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__42253__$1,new cljs.core.Keyword(null,"check-equals?","check-equals?",-2005755315),true);
var recalc = (function (){var G__42257 = cljs.core.count(refs);
switch (G__42257) {
case (1):
var vec__42259 = refs;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42259,(0),null);
return (function (){
var G__42262 = cljs.core.deref(a);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__42262) : f.call(null,G__42262));
});

break;
case (2):
var vec__42263 = refs;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42263,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42263,(1),null);
return (function (){
var G__42266 = cljs.core.deref(a);
var G__42267 = cljs.core.deref(b);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__42266,G__42267) : f.call(null,G__42266,G__42267));
});

break;
case (3):
var vec__42268 = refs;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42268,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42268,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42268,(2),null);
return (function (){
var G__42271 = cljs.core.deref(a);
var G__42272 = cljs.core.deref(b);
var G__42273 = cljs.core.deref(c);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__42271,G__42272,G__42273) : f.call(null,G__42271,G__42272,G__42273));
});

break;
default:
return (function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.deref,refs));
});

}
})();
var sink = (cljs.core.truth_(ref)?(function (){var G__42274 = ref;
cljs.core.reset_BANG_(G__42274,(recalc.cljs$core$IFn$_invoke$arity$0 ? recalc.cljs$core$IFn$_invoke$arity$0() : recalc.call(null)));

return G__42274;
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
var seq__42275_42348 = cljs.core.seq(refs);
var chunk__42276_42349 = null;
var count__42277_42350 = (0);
var i__42278_42351 = (0);
while(true){
if((i__42278_42351 < count__42277_42350)){
var ref_42352__$1 = chunk__42276_42349.cljs$core$IIndexed$_nth$arity$2(null,i__42278_42351);
cljs.core.add_watch(ref_42352__$1,key,watch);


var G__42353 = seq__42275_42348;
var G__42354 = chunk__42276_42349;
var G__42355 = count__42277_42350;
var G__42356 = (i__42278_42351 + (1));
seq__42275_42348 = G__42353;
chunk__42276_42349 = G__42354;
count__42277_42350 = G__42355;
i__42278_42351 = G__42356;
continue;
} else {
var temp__5753__auto___42358 = cljs.core.seq(seq__42275_42348);
if(temp__5753__auto___42358){
var seq__42275_42359__$1 = temp__5753__auto___42358;
if(cljs.core.chunked_seq_QMARK_(seq__42275_42359__$1)){
var c__4638__auto___42360 = cljs.core.chunk_first(seq__42275_42359__$1);
var G__42361 = cljs.core.chunk_rest(seq__42275_42359__$1);
var G__42362 = c__4638__auto___42360;
var G__42363 = cljs.core.count(c__4638__auto___42360);
var G__42364 = (0);
seq__42275_42348 = G__42361;
chunk__42276_42349 = G__42362;
count__42277_42350 = G__42363;
i__42278_42351 = G__42364;
continue;
} else {
var ref_42365__$1 = cljs.core.first(seq__42275_42359__$1);
cljs.core.add_watch(ref_42365__$1,key,watch);


var G__42366 = cljs.core.next(seq__42275_42359__$1);
var G__42367 = null;
var G__42368 = (0);
var G__42369 = (0);
seq__42275_42348 = G__42366;
chunk__42276_42349 = G__42367;
count__42277_42350 = G__42368;
i__42278_42351 = G__42369;
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
