goog.provide('common.data_frame');
common.data_frame.cell_apply = (function common$data_frame$cell_apply(f){
return (function (p__44006){
var vec__44007 = p__44006;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44007,(0),null);
var vs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44007,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,vs)], null);
});
});
/**
 * Update a cell at position k index with old value to a new value
 *   given by (f k index old)
 */
common.data_frame.cell_update = (function common$data_frame$cell_update(f){
return (function (p__44011){
var vec__44013 = p__44011;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44013,(0),null);
var vs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44013,(1),null);
var g = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(f,k);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(g,vs)], null);
});
});
common.data_frame.cell_sums = (function common$data_frame$cell_sums(p__44020){
var vec__44021 = p__44020;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44021,(0),null);
var vs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44021,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.reductions.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,vs)], null);
});
common.data_frame.cell_diffs = (function common$data_frame$cell_diffs(initial){
return (function (p__44024){
var vec__44025 = p__44024;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44025,(0),null);
var vs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44025,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__44028){
var vec__44029 = p__44028;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44029,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44029,(1),null);
return (b - a);
}),cljs.core.partition.cljs$core$IFn$_invoke$arity$3((2),(1),cljs.core.cons(initial,vs)))], null);
});
});
common.data_frame.cell_binary = (function common$data_frame$cell_binary(f){
return (function (p__44032){
var vec__44033 = p__44032;
var vec__44036 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44033,(0),null);
var k1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44036,(0),null);
var vs1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44036,(1),null);
var vec__44039 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44033,(1),null);
var k2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44039,(0),null);
var vs2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44039,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k1,cljs.core.map.cljs$core$IFn$_invoke$arity$3(f,vs1,vs2)], null);
});
});

//# sourceMappingURL=common.data_frame.js.map
