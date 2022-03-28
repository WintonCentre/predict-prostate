goog.provide('common.data_frame');
common.data_frame.cell_apply = (function common$data_frame$cell_apply(f){
return (function (p__43063){
var vec__43064 = p__43063;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43064,(0),null);
var vs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43064,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,vs)], null);
});
});
/**
 * Update a cell at position k index with old value to a new value
 *   given by (f k index old)
 */
common.data_frame.cell_update = (function common$data_frame$cell_update(f){
return (function (p__43070){
var vec__43073 = p__43070;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43073,(0),null);
var vs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43073,(1),null);
var g = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(f,k);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(g,vs)], null);
});
});
common.data_frame.cell_sums = (function common$data_frame$cell_sums(p__43080){
var vec__43082 = p__43080;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43082,(0),null);
var vs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43082,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.reductions.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,vs)], null);
});
common.data_frame.cell_diffs = (function common$data_frame$cell_diffs(initial){
return (function (p__43089){
var vec__43091 = p__43089;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43091,(0),null);
var vs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43091,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__43094){
var vec__43095 = p__43094;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43095,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43095,(1),null);
return (b - a);
}),cljs.core.partition.cljs$core$IFn$_invoke$arity$3((2),(1),cljs.core.cons(initial,vs)))], null);
});
});
common.data_frame.cell_binary = (function common$data_frame$cell_binary(f){
return (function (p__43105){
var vec__43108 = p__43105;
var vec__43111 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43108,(0),null);
var k1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43111,(0),null);
var vs1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43111,(1),null);
var vec__43114 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43108,(1),null);
var k2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43114,(0),null);
var vs2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43114,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k1,cljs.core.map.cljs$core$IFn$_invoke$arity$3(f,vs1,vs2)], null);
});
});

//# sourceMappingURL=common.data_frame.js.map
