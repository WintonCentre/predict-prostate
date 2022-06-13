goog.provide('rum.derived_atom');
rum.derived_atom.derived_atom = (function rum$derived_atom$derived_atom(var_args){
var G__30077 = arguments.length;
switch (G__30077) {
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
var map__30095 = opts;
var map__30095__$1 = cljs.core.__destructure_map(map__30095);
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30095__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var check_equals_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__30095__$1,new cljs.core.Keyword(null,"check-equals?","check-equals?",-2005755315),true);
var recalc = (function (){var G__30112 = cljs.core.count(refs);
switch (G__30112) {
case (1):
var vec__30113 = refs;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30113,(0),null);
return (function (){
var G__30121 = cljs.core.deref(a);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__30121) : f.call(null,G__30121));
});

break;
case (2):
var vec__30123 = refs;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30123,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30123,(1),null);
return (function (){
var G__30126 = cljs.core.deref(a);
var G__30127 = cljs.core.deref(b);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__30126,G__30127) : f.call(null,G__30126,G__30127));
});

break;
case (3):
var vec__30128 = refs;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30128,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30128,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30128,(2),null);
return (function (){
var G__30133 = cljs.core.deref(a);
var G__30134 = cljs.core.deref(b);
var G__30135 = cljs.core.deref(c);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__30133,G__30134,G__30135) : f.call(null,G__30133,G__30134,G__30135));
});

break;
default:
return (function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.deref,refs));
});

}
})();
var sink = (cljs.core.truth_(ref)?(function (){var G__30140 = ref;
cljs.core.reset_BANG_(G__30140,(recalc.cljs$core$IFn$_invoke$arity$0 ? recalc.cljs$core$IFn$_invoke$arity$0() : recalc.call(null)));

return G__30140;
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
var seq__30147_30195 = cljs.core.seq(refs);
var chunk__30148_30196 = null;
var count__30149_30197 = (0);
var i__30150_30198 = (0);
while(true){
if((i__30150_30198 < count__30149_30197)){
var ref_30203__$1 = chunk__30148_30196.cljs$core$IIndexed$_nth$arity$2(null,i__30150_30198);
cljs.core.add_watch(ref_30203__$1,key,watch);


var G__30205 = seq__30147_30195;
var G__30206 = chunk__30148_30196;
var G__30207 = count__30149_30197;
var G__30208 = (i__30150_30198 + (1));
seq__30147_30195 = G__30205;
chunk__30148_30196 = G__30206;
count__30149_30197 = G__30207;
i__30150_30198 = G__30208;
continue;
} else {
var temp__5753__auto___30213 = cljs.core.seq(seq__30147_30195);
if(temp__5753__auto___30213){
var seq__30147_30221__$1 = temp__5753__auto___30213;
if(cljs.core.chunked_seq_QMARK_(seq__30147_30221__$1)){
var c__4638__auto___30229 = cljs.core.chunk_first(seq__30147_30221__$1);
var G__30235 = cljs.core.chunk_rest(seq__30147_30221__$1);
var G__30236 = c__4638__auto___30229;
var G__30237 = cljs.core.count(c__4638__auto___30229);
var G__30238 = (0);
seq__30147_30195 = G__30235;
chunk__30148_30196 = G__30236;
count__30149_30197 = G__30237;
i__30150_30198 = G__30238;
continue;
} else {
var ref_30252__$1 = cljs.core.first(seq__30147_30221__$1);
cljs.core.add_watch(ref_30252__$1,key,watch);


var G__30253 = cljs.core.next(seq__30147_30221__$1);
var G__30254 = null;
var G__30255 = (0);
var G__30256 = (0);
seq__30147_30195 = G__30253;
chunk__30148_30196 = G__30254;
count__30149_30197 = G__30255;
i__30150_30198 = G__30256;
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
