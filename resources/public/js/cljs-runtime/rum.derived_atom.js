goog.provide('rum.derived_atom');
rum.derived_atom.derived_atom = (function rum$derived_atom$derived_atom(var_args){
var G__40442 = arguments.length;
switch (G__40442) {
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
var map__40444 = opts;
var map__40444__$1 = (((((!((map__40444 == null))))?(((((map__40444.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40444.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40444):map__40444);
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40444__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var check_equals_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__40444__$1,new cljs.core.Keyword(null,"check-equals?","check-equals?",-2005755315),true);
var recalc = (function (){var G__40446 = cljs.core.count(refs);
switch (G__40446) {
case (1):
var vec__40447 = refs;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40447,(0),null);
return (function (){
var G__40450 = cljs.core.deref(a);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__40450) : f.call(null,G__40450));
});

break;
case (2):
var vec__40451 = refs;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40451,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40451,(1),null);
return (function (){
var G__40454 = cljs.core.deref(a);
var G__40455 = cljs.core.deref(b);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__40454,G__40455) : f.call(null,G__40454,G__40455));
});

break;
case (3):
var vec__40457 = refs;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40457,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40457,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40457,(2),null);
return (function (){
var G__40460 = cljs.core.deref(a);
var G__40461 = cljs.core.deref(b);
var G__40462 = cljs.core.deref(c);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__40460,G__40461,G__40462) : f.call(null,G__40460,G__40461,G__40462));
});

break;
default:
return (function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.deref,refs));
});

}
})();
var sink = (cljs.core.truth_(ref)?(function (){var G__40464 = ref;
cljs.core.reset_BANG_(G__40464,(recalc.cljs$core$IFn$_invoke$arity$0 ? recalc.cljs$core$IFn$_invoke$arity$0() : recalc.call(null)));

return G__40464;
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
var seq__40465_40472 = cljs.core.seq(refs);
var chunk__40466_40473 = null;
var count__40467_40474 = (0);
var i__40468_40475 = (0);
while(true){
if((i__40468_40475 < count__40467_40474)){
var ref_40476__$1 = chunk__40466_40473.cljs$core$IIndexed$_nth$arity$2(null,i__40468_40475);
cljs.core.add_watch(ref_40476__$1,key,watch);


var G__40477 = seq__40465_40472;
var G__40478 = chunk__40466_40473;
var G__40479 = count__40467_40474;
var G__40480 = (i__40468_40475 + (1));
seq__40465_40472 = G__40477;
chunk__40466_40473 = G__40478;
count__40467_40474 = G__40479;
i__40468_40475 = G__40480;
continue;
} else {
var temp__5735__auto___40481 = cljs.core.seq(seq__40465_40472);
if(temp__5735__auto___40481){
var seq__40465_40482__$1 = temp__5735__auto___40481;
if(cljs.core.chunked_seq_QMARK_(seq__40465_40482__$1)){
var c__4556__auto___40483 = cljs.core.chunk_first(seq__40465_40482__$1);
var G__40484 = cljs.core.chunk_rest(seq__40465_40482__$1);
var G__40485 = c__4556__auto___40483;
var G__40486 = cljs.core.count(c__4556__auto___40483);
var G__40487 = (0);
seq__40465_40472 = G__40484;
chunk__40466_40473 = G__40485;
count__40467_40474 = G__40486;
i__40468_40475 = G__40487;
continue;
} else {
var ref_40488__$1 = cljs.core.first(seq__40465_40482__$1);
cljs.core.add_watch(ref_40488__$1,key,watch);


var G__40489 = cljs.core.next(seq__40465_40482__$1);
var G__40490 = null;
var G__40491 = (0);
var G__40492 = (0);
seq__40465_40472 = G__40489;
chunk__40466_40473 = G__40490;
count__40467_40474 = G__40491;
i__40468_40475 = G__40492;
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
