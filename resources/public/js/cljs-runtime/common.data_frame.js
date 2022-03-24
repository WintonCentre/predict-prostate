goog.provide('common.data_frame');
common.data_frame.cell_apply = (function common$data_frame$cell_apply(f){
return (function (p__43926){
var vec__43927 = p__43926;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43927,(0),null);
var vs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43927,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,vs)], null);
});
});
/**
 * Update a cell at position k index with old value to a new value
 *   given by (f k index old)
 */
common.data_frame.cell_update = (function common$data_frame$cell_update(f){
return (function (p__43932){
var vec__43934 = p__43932;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43934,(0),null);
var vs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43934,(1),null);
var g = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(f,k);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(g,vs)], null);
});
});
common.data_frame.cell_sums = (function common$data_frame$cell_sums(p__43940){
var vec__43941 = p__43940;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43941,(0),null);
var vs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43941,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.reductions.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,vs)], null);
});
common.data_frame.cell_diffs = (function common$data_frame$cell_diffs(initial){
return (function (p__43948){
var vec__43949 = p__43948;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43949,(0),null);
var vs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43949,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__43953){
var vec__43954 = p__43953;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43954,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43954,(1),null);
return (b - a);
}),cljs.core.partition.cljs$core$IFn$_invoke$arity$3((2),(1),cljs.core.cons(initial,vs)))], null);
});
});
common.data_frame.cell_binary = (function common$data_frame$cell_binary(f){
return (function (p__43963){
var vec__43964 = p__43963;
var vec__43967 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43964,(0),null);
var k1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43967,(0),null);
var vs1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43967,(1),null);
var vec__43970 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43964,(1),null);
var k2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43970,(0),null);
var vs2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43970,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k1,cljs.core.map.cljs$core$IFn$_invoke$arity$3(f,vs1,vs2)], null);
});
});

//# sourceMappingURL=common.data_frame.js.map
