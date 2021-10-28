goog.provide('svg.mixins');
svg.mixins.patch_svg_attrs = (function svg$mixins$patch_svg_attrs(m){

return (function (state){
var seq__47082_47103 = cljs.core.seq(m);
var chunk__47083_47104 = null;
var count__47084_47105 = (0);
var i__47085_47106 = (0);
while(true){
if((i__47085_47106 < count__47084_47105)){
var vec__47093_47107 = chunk__47083_47104.cljs$core$IIndexed$_nth$arity$2(null,i__47085_47106);
var attr_47108 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47093_47107,(0),null);
var value_47109 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47093_47107,(1),null);
rum.core.dom_node(state).setAttribute(attr_47108,value_47109);


var G__47110 = seq__47082_47103;
var G__47111 = chunk__47083_47104;
var G__47112 = count__47084_47105;
var G__47113 = (i__47085_47106 + (1));
seq__47082_47103 = G__47110;
chunk__47083_47104 = G__47111;
count__47084_47105 = G__47112;
i__47085_47106 = G__47113;
continue;
} else {
var temp__5735__auto___47114 = cljs.core.seq(seq__47082_47103);
if(temp__5735__auto___47114){
var seq__47082_47119__$1 = temp__5735__auto___47114;
if(cljs.core.chunked_seq_QMARK_(seq__47082_47119__$1)){
var c__4556__auto___47120 = cljs.core.chunk_first(seq__47082_47119__$1);
var G__47121 = cljs.core.chunk_rest(seq__47082_47119__$1);
var G__47122 = c__4556__auto___47120;
var G__47123 = cljs.core.count(c__4556__auto___47120);
var G__47124 = (0);
seq__47082_47103 = G__47121;
chunk__47083_47104 = G__47122;
count__47084_47105 = G__47123;
i__47085_47106 = G__47124;
continue;
} else {
var vec__47097_47125 = cljs.core.first(seq__47082_47119__$1);
var attr_47126 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47097_47125,(0),null);
var value_47127 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47097_47125,(1),null);
rum.core.dom_node(state).setAttribute(attr_47126,value_47127);


var G__47129 = cljs.core.next(seq__47082_47119__$1);
var G__47130 = null;
var G__47131 = (0);
var G__47132 = (0);
seq__47082_47103 = G__47129;
chunk__47083_47104 = G__47130;
count__47084_47105 = G__47131;
i__47085_47106 = G__47132;
continue;
}
} else {
}
}
break;
}

return state;
});
});

//# sourceMappingURL=svg.mixins.js.map
