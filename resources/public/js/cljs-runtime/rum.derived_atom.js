goog.provide('rum.derived_atom');
rum.derived_atom.derived_atom = (function rum$derived_atom$derived_atom(var_args){
var G__42664 = arguments.length;
switch (G__42664) {
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
var map__42668 = opts;
var map__42668__$1 = cljs.core.__destructure_map(map__42668);
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42668__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var check_equals_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__42668__$1,new cljs.core.Keyword(null,"check-equals?","check-equals?",-2005755315),true);
var recalc = (function (){var G__42669 = cljs.core.count(refs);
switch (G__42669) {
case (1):
var vec__42670 = refs;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42670,(0),null);
return (function (){
var G__42673 = cljs.core.deref(a);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__42673) : f.call(null,G__42673));
});

break;
case (2):
var vec__42675 = refs;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42675,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42675,(1),null);
return (function (){
var G__42678 = cljs.core.deref(a);
var G__42679 = cljs.core.deref(b);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__42678,G__42679) : f.call(null,G__42678,G__42679));
});

break;
case (3):
var vec__42680 = refs;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42680,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42680,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42680,(2),null);
return (function (){
var G__42684 = cljs.core.deref(a);
var G__42685 = cljs.core.deref(b);
var G__42686 = cljs.core.deref(c);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__42684,G__42685,G__42686) : f.call(null,G__42684,G__42685,G__42686));
});

break;
default:
return (function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.deref,refs));
});

}
})();
var sink = (cljs.core.truth_(ref)?(function (){var G__42689 = ref;
cljs.core.reset_BANG_(G__42689,(recalc.cljs$core$IFn$_invoke$arity$0 ? recalc.cljs$core$IFn$_invoke$arity$0() : recalc.call(null)));

return G__42689;
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
var seq__42694_42712 = cljs.core.seq(refs);
var chunk__42695_42713 = null;
var count__42696_42714 = (0);
var i__42697_42715 = (0);
while(true){
if((i__42697_42715 < count__42696_42714)){
var ref_42716__$1 = chunk__42695_42713.cljs$core$IIndexed$_nth$arity$2(null,i__42697_42715);
cljs.core.add_watch(ref_42716__$1,key,watch);


var G__42717 = seq__42694_42712;
var G__42718 = chunk__42695_42713;
var G__42719 = count__42696_42714;
var G__42720 = (i__42697_42715 + (1));
seq__42694_42712 = G__42717;
chunk__42695_42713 = G__42718;
count__42696_42714 = G__42719;
i__42697_42715 = G__42720;
continue;
} else {
var temp__5753__auto___42721 = cljs.core.seq(seq__42694_42712);
if(temp__5753__auto___42721){
var seq__42694_42722__$1 = temp__5753__auto___42721;
if(cljs.core.chunked_seq_QMARK_(seq__42694_42722__$1)){
var c__4638__auto___42723 = cljs.core.chunk_first(seq__42694_42722__$1);
var G__42724 = cljs.core.chunk_rest(seq__42694_42722__$1);
var G__42725 = c__4638__auto___42723;
var G__42726 = cljs.core.count(c__4638__auto___42723);
var G__42727 = (0);
seq__42694_42712 = G__42724;
chunk__42695_42713 = G__42725;
count__42696_42714 = G__42726;
i__42697_42715 = G__42727;
continue;
} else {
var ref_42728__$1 = cljs.core.first(seq__42694_42722__$1);
cljs.core.add_watch(ref_42728__$1,key,watch);


var G__42729 = cljs.core.next(seq__42694_42722__$1);
var G__42730 = null;
var G__42731 = (0);
var G__42732 = (0);
seq__42694_42712 = G__42729;
chunk__42695_42713 = G__42730;
count__42696_42714 = G__42731;
i__42697_42715 = G__42732;
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
