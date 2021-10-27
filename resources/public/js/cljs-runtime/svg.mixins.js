goog.provide('svg.mixins');
svg.mixins.patch_svg_attrs = (function svg$mixins$patch_svg_attrs(m){

return (function (state){
var seq__47172_47191 = cljs.core.seq(m);
var chunk__47173_47192 = null;
var count__47174_47193 = (0);
var i__47175_47194 = (0);
while(true){
if((i__47175_47194 < count__47174_47193)){
var vec__47184_47196 = chunk__47173_47192.cljs$core$IIndexed$_nth$arity$2(null,i__47175_47194);
var attr_47197 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47184_47196,(0),null);
var value_47198 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47184_47196,(1),null);
rum.core.dom_node(state).setAttribute(attr_47197,value_47198);


var G__47200 = seq__47172_47191;
var G__47201 = chunk__47173_47192;
var G__47202 = count__47174_47193;
var G__47203 = (i__47175_47194 + (1));
seq__47172_47191 = G__47200;
chunk__47173_47192 = G__47201;
count__47174_47193 = G__47202;
i__47175_47194 = G__47203;
continue;
} else {
var temp__5735__auto___47204 = cljs.core.seq(seq__47172_47191);
if(temp__5735__auto___47204){
var seq__47172_47205__$1 = temp__5735__auto___47204;
if(cljs.core.chunked_seq_QMARK_(seq__47172_47205__$1)){
var c__4556__auto___47206 = cljs.core.chunk_first(seq__47172_47205__$1);
var G__47207 = cljs.core.chunk_rest(seq__47172_47205__$1);
var G__47208 = c__4556__auto___47206;
var G__47209 = cljs.core.count(c__4556__auto___47206);
var G__47210 = (0);
seq__47172_47191 = G__47207;
chunk__47173_47192 = G__47208;
count__47174_47193 = G__47209;
i__47175_47194 = G__47210;
continue;
} else {
var vec__47187_47211 = cljs.core.first(seq__47172_47205__$1);
var attr_47212 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47187_47211,(0),null);
var value_47213 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47187_47211,(1),null);
rum.core.dom_node(state).setAttribute(attr_47212,value_47213);


var G__47214 = cljs.core.next(seq__47172_47205__$1);
var G__47215 = null;
var G__47216 = (0);
var G__47217 = (0);
seq__47172_47191 = G__47214;
chunk__47173_47192 = G__47215;
count__47174_47193 = G__47216;
i__47175_47194 = G__47217;
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
