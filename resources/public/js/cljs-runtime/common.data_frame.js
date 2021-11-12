goog.provide('common.data_frame');
common.data_frame.cell_apply = (function common$data_frame$cell_apply(f){
return (function (p__36828){
var vec__36829 = p__36828;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36829,(0),null);
var vs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36829,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,vs)], null);
});
});
/**
 * Update a cell at position k index with old value to a new value
 *   given by (f k index old)
 */
common.data_frame.cell_update = (function common$data_frame$cell_update(f){
return (function (p__36832){
var vec__36833 = p__36832;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36833,(0),null);
var vs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36833,(1),null);
var g = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(f,k);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(g,vs)], null);
});
});
common.data_frame.cell_sums = (function common$data_frame$cell_sums(p__36836){
var vec__36837 = p__36836;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36837,(0),null);
var vs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36837,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.reductions.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,vs)], null);
});
common.data_frame.cell_diffs = (function common$data_frame$cell_diffs(initial){
return (function (p__36840){
var vec__36841 = p__36840;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36841,(0),null);
var vs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36841,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__36844){
var vec__36845 = p__36844;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36845,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36845,(1),null);
return (b - a);
}),cljs.core.partition.cljs$core$IFn$_invoke$arity$3((2),(1),cljs.core.cons(initial,vs)))], null);
});
});
common.data_frame.cell_binary = (function common$data_frame$cell_binary(f){
return (function (p__36848){
var vec__36849 = p__36848;
var vec__36852 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36849,(0),null);
var k1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36852,(0),null);
var vs1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36852,(1),null);
var vec__36855 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36849,(1),null);
var k2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36855,(0),null);
var vs2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36855,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k1,cljs.core.map.cljs$core$IFn$_invoke$arity$3(f,vs1,vs2)], null);
});
});

//# sourceMappingURL=common.data_frame.js.map
