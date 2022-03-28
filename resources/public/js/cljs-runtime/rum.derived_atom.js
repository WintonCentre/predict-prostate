goog.provide('rum.derived_atom');
rum.derived_atom.derived_atom = (function rum$derived_atom$derived_atom(var_args){
var G__41016 = arguments.length;
switch (G__41016) {
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
var map__41019 = opts;
var map__41019__$1 = cljs.core.__destructure_map(map__41019);
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41019__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var check_equals_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__41019__$1,new cljs.core.Keyword(null,"check-equals?","check-equals?",-2005755315),true);
var recalc = (function (){var G__41020 = cljs.core.count(refs);
switch (G__41020) {
case (1):
var vec__41021 = refs;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41021,(0),null);
return (function (){
var G__41024 = cljs.core.deref(a);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__41024) : f.call(null,G__41024));
});

break;
case (2):
var vec__41025 = refs;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41025,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41025,(1),null);
return (function (){
var G__41028 = cljs.core.deref(a);
var G__41029 = cljs.core.deref(b);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__41028,G__41029) : f.call(null,G__41028,G__41029));
});

break;
case (3):
var vec__41030 = refs;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41030,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41030,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41030,(2),null);
return (function (){
var G__41034 = cljs.core.deref(a);
var G__41035 = cljs.core.deref(b);
var G__41036 = cljs.core.deref(c);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__41034,G__41035,G__41036) : f.call(null,G__41034,G__41035,G__41036));
});

break;
default:
return (function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.deref,refs));
});

}
})();
var sink = (cljs.core.truth_(ref)?(function (){var G__41037 = ref;
cljs.core.reset_BANG_(G__41037,(recalc.cljs$core$IFn$_invoke$arity$0 ? recalc.cljs$core$IFn$_invoke$arity$0() : recalc.call(null)));

return G__41037;
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
var seq__41039_41048 = cljs.core.seq(refs);
var chunk__41040_41049 = null;
var count__41041_41050 = (0);
var i__41042_41051 = (0);
while(true){
if((i__41042_41051 < count__41041_41050)){
var ref_41053__$1 = chunk__41040_41049.cljs$core$IIndexed$_nth$arity$2(null,i__41042_41051);
cljs.core.add_watch(ref_41053__$1,key,watch);


var G__41055 = seq__41039_41048;
var G__41056 = chunk__41040_41049;
var G__41057 = count__41041_41050;
var G__41058 = (i__41042_41051 + (1));
seq__41039_41048 = G__41055;
chunk__41040_41049 = G__41056;
count__41041_41050 = G__41057;
i__41042_41051 = G__41058;
continue;
} else {
var temp__5753__auto___41059 = cljs.core.seq(seq__41039_41048);
if(temp__5753__auto___41059){
var seq__41039_41060__$1 = temp__5753__auto___41059;
if(cljs.core.chunked_seq_QMARK_(seq__41039_41060__$1)){
var c__4638__auto___41061 = cljs.core.chunk_first(seq__41039_41060__$1);
var G__41062 = cljs.core.chunk_rest(seq__41039_41060__$1);
var G__41063 = c__4638__auto___41061;
var G__41064 = cljs.core.count(c__4638__auto___41061);
var G__41065 = (0);
seq__41039_41048 = G__41062;
chunk__41040_41049 = G__41063;
count__41041_41050 = G__41064;
i__41042_41051 = G__41065;
continue;
} else {
var ref_41066__$1 = cljs.core.first(seq__41039_41060__$1);
cljs.core.add_watch(ref_41066__$1,key,watch);


var G__41067 = cljs.core.next(seq__41039_41060__$1);
var G__41068 = null;
var G__41069 = (0);
var G__41070 = (0);
seq__41039_41048 = G__41067;
chunk__41040_41049 = G__41068;
count__41041_41050 = G__41069;
i__41042_41051 = G__41070;
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
