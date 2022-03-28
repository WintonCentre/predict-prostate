goog.provide('rum.derived_atom');
rum.derived_atom.derived_atom = (function rum$derived_atom$derived_atom(var_args){
var G__30159 = arguments.length;
switch (G__30159) {
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
var map__30164 = opts;
var map__30164__$1 = cljs.core.__destructure_map(map__30164);
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30164__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var check_equals_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__30164__$1,new cljs.core.Keyword(null,"check-equals?","check-equals?",-2005755315),true);
var recalc = (function (){var G__30165 = cljs.core.count(refs);
switch (G__30165) {
case (1):
var vec__30166 = refs;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30166,(0),null);
return (function (){
var G__30169 = cljs.core.deref(a);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__30169) : f.call(null,G__30169));
});

break;
case (2):
var vec__30173 = refs;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30173,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30173,(1),null);
return (function (){
var G__30176 = cljs.core.deref(a);
var G__30177 = cljs.core.deref(b);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__30176,G__30177) : f.call(null,G__30176,G__30177));
});

break;
case (3):
var vec__30178 = refs;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30178,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30178,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30178,(2),null);
return (function (){
var G__30181 = cljs.core.deref(a);
var G__30182 = cljs.core.deref(b);
var G__30183 = cljs.core.deref(c);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__30181,G__30182,G__30183) : f.call(null,G__30181,G__30182,G__30183));
});

break;
default:
return (function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.deref,refs));
});

}
})();
var sink = (cljs.core.truth_(ref)?(function (){var G__30184 = ref;
cljs.core.reset_BANG_(G__30184,(recalc.cljs$core$IFn$_invoke$arity$0 ? recalc.cljs$core$IFn$_invoke$arity$0() : recalc.call(null)));

return G__30184;
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
var seq__30186_30192 = cljs.core.seq(refs);
var chunk__30187_30193 = null;
var count__30188_30194 = (0);
var i__30189_30195 = (0);
while(true){
if((i__30189_30195 < count__30188_30194)){
var ref_30196__$1 = chunk__30187_30193.cljs$core$IIndexed$_nth$arity$2(null,i__30189_30195);
cljs.core.add_watch(ref_30196__$1,key,watch);


var G__30198 = seq__30186_30192;
var G__30199 = chunk__30187_30193;
var G__30200 = count__30188_30194;
var G__30201 = (i__30189_30195 + (1));
seq__30186_30192 = G__30198;
chunk__30187_30193 = G__30199;
count__30188_30194 = G__30200;
i__30189_30195 = G__30201;
continue;
} else {
var temp__5753__auto___30202 = cljs.core.seq(seq__30186_30192);
if(temp__5753__auto___30202){
var seq__30186_30203__$1 = temp__5753__auto___30202;
if(cljs.core.chunked_seq_QMARK_(seq__30186_30203__$1)){
var c__4638__auto___30204 = cljs.core.chunk_first(seq__30186_30203__$1);
var G__30205 = cljs.core.chunk_rest(seq__30186_30203__$1);
var G__30206 = c__4638__auto___30204;
var G__30207 = cljs.core.count(c__4638__auto___30204);
var G__30208 = (0);
seq__30186_30192 = G__30205;
chunk__30187_30193 = G__30206;
count__30188_30194 = G__30207;
i__30189_30195 = G__30208;
continue;
} else {
var ref_30209__$1 = cljs.core.first(seq__30186_30203__$1);
cljs.core.add_watch(ref_30209__$1,key,watch);


var G__30210 = cljs.core.next(seq__30186_30203__$1);
var G__30211 = null;
var G__30212 = (0);
var G__30213 = (0);
seq__30186_30192 = G__30210;
chunk__30187_30193 = G__30211;
count__30188_30194 = G__30212;
i__30189_30195 = G__30213;
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
