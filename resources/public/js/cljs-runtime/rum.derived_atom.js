goog.provide('rum.derived_atom');
rum.derived_atom.derived_atom = (function rum$derived_atom$derived_atom(var_args){
var G__30386 = arguments.length;
switch (G__30386) {
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
var map__30392 = opts;
var map__30392__$1 = cljs.core.__destructure_map(map__30392);
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30392__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var check_equals_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__30392__$1,new cljs.core.Keyword(null,"check-equals?","check-equals?",-2005755315),true);
var recalc = (function (){var G__30396 = cljs.core.count(refs);
switch (G__30396) {
case (1):
var vec__30397 = refs;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30397,(0),null);
return (function (){
var G__30400 = cljs.core.deref(a);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__30400) : f.call(null,G__30400));
});

break;
case (2):
var vec__30401 = refs;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30401,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30401,(1),null);
return (function (){
var G__30404 = cljs.core.deref(a);
var G__30405 = cljs.core.deref(b);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__30404,G__30405) : f.call(null,G__30404,G__30405));
});

break;
case (3):
var vec__30406 = refs;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30406,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30406,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30406,(2),null);
return (function (){
var G__30409 = cljs.core.deref(a);
var G__30410 = cljs.core.deref(b);
var G__30411 = cljs.core.deref(c);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__30409,G__30410,G__30411) : f.call(null,G__30409,G__30410,G__30411));
});

break;
default:
return (function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.deref,refs));
});

}
})();
var sink = (cljs.core.truth_(ref)?(function (){var G__30415 = ref;
cljs.core.reset_BANG_(G__30415,(recalc.cljs$core$IFn$_invoke$arity$0 ? recalc.cljs$core$IFn$_invoke$arity$0() : recalc.call(null)));

return G__30415;
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
var seq__30421_30427 = cljs.core.seq(refs);
var chunk__30422_30428 = null;
var count__30423_30429 = (0);
var i__30424_30430 = (0);
while(true){
if((i__30424_30430 < count__30423_30429)){
var ref_30431__$1 = chunk__30422_30428.cljs$core$IIndexed$_nth$arity$2(null,i__30424_30430);
cljs.core.add_watch(ref_30431__$1,key,watch);


var G__30432 = seq__30421_30427;
var G__30433 = chunk__30422_30428;
var G__30434 = count__30423_30429;
var G__30435 = (i__30424_30430 + (1));
seq__30421_30427 = G__30432;
chunk__30422_30428 = G__30433;
count__30423_30429 = G__30434;
i__30424_30430 = G__30435;
continue;
} else {
var temp__5753__auto___30436 = cljs.core.seq(seq__30421_30427);
if(temp__5753__auto___30436){
var seq__30421_30437__$1 = temp__5753__auto___30436;
if(cljs.core.chunked_seq_QMARK_(seq__30421_30437__$1)){
var c__4638__auto___30438 = cljs.core.chunk_first(seq__30421_30437__$1);
var G__30439 = cljs.core.chunk_rest(seq__30421_30437__$1);
var G__30440 = c__4638__auto___30438;
var G__30441 = cljs.core.count(c__4638__auto___30438);
var G__30442 = (0);
seq__30421_30427 = G__30439;
chunk__30422_30428 = G__30440;
count__30423_30429 = G__30441;
i__30424_30430 = G__30442;
continue;
} else {
var ref_30443__$1 = cljs.core.first(seq__30421_30437__$1);
cljs.core.add_watch(ref_30443__$1,key,watch);


var G__30444 = cljs.core.next(seq__30421_30437__$1);
var G__30445 = null;
var G__30446 = (0);
var G__30447 = (0);
seq__30421_30427 = G__30444;
chunk__30422_30428 = G__30445;
count__30423_30429 = G__30446;
i__30424_30430 = G__30447;
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
