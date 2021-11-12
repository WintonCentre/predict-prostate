goog.provide('svg.mixins');
svg.mixins.patch_svg_attrs = (function svg$mixins$patch_svg_attrs(m){

return (function (state){
var seq__48409_48425 = cljs.core.seq(m);
var chunk__48410_48426 = null;
var count__48411_48427 = (0);
var i__48412_48428 = (0);
while(true){
if((i__48412_48428 < count__48411_48427)){
var vec__48419_48439 = chunk__48410_48426.cljs$core$IIndexed$_nth$arity$2(null,i__48412_48428);
var attr_48440 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48419_48439,(0),null);
var value_48441 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48419_48439,(1),null);
rum.core.dom_node(state).setAttribute(attr_48440,value_48441);


var G__48442 = seq__48409_48425;
var G__48443 = chunk__48410_48426;
var G__48444 = count__48411_48427;
var G__48445 = (i__48412_48428 + (1));
seq__48409_48425 = G__48442;
chunk__48410_48426 = G__48443;
count__48411_48427 = G__48444;
i__48412_48428 = G__48445;
continue;
} else {
var temp__5735__auto___48446 = cljs.core.seq(seq__48409_48425);
if(temp__5735__auto___48446){
var seq__48409_48447__$1 = temp__5735__auto___48446;
if(cljs.core.chunked_seq_QMARK_(seq__48409_48447__$1)){
var c__4556__auto___48448 = cljs.core.chunk_first(seq__48409_48447__$1);
var G__48449 = cljs.core.chunk_rest(seq__48409_48447__$1);
var G__48450 = c__4556__auto___48448;
var G__48451 = cljs.core.count(c__4556__auto___48448);
var G__48452 = (0);
seq__48409_48425 = G__48449;
chunk__48410_48426 = G__48450;
count__48411_48427 = G__48451;
i__48412_48428 = G__48452;
continue;
} else {
var vec__48422_48453 = cljs.core.first(seq__48409_48447__$1);
var attr_48454 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48422_48453,(0),null);
var value_48455 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48422_48453,(1),null);
rum.core.dom_node(state).setAttribute(attr_48454,value_48455);


var G__48460 = cljs.core.next(seq__48409_48447__$1);
var G__48461 = null;
var G__48462 = (0);
var G__48463 = (0);
seq__48409_48425 = G__48460;
chunk__48410_48426 = G__48461;
count__48411_48427 = G__48462;
i__48412_48428 = G__48463;
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
