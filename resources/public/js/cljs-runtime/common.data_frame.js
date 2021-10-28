goog.provide('common.data_frame');
common.data_frame.cell_apply = (function common$data_frame$cell_apply(f){
return (function (p__43223){
var vec__43227 = p__43223;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43227,(0),null);
var vs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43227,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,vs)], null);
});
});
common.data_frame.cell_update = (function common$data_frame$cell_update(f){

return (function (p__43243){
var vec__43244 = p__43243;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43244,(0),null);
var vs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43244,(1),null);
var g = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(f,k);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(g,vs)], null);
});
});
common.data_frame.cell_sums = (function common$data_frame$cell_sums(p__43253){
var vec__43254 = p__43253;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43254,(0),null);
var vs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43254,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.reductions.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,vs)], null);
});
common.data_frame.cell_diffs = (function common$data_frame$cell_diffs(initial){
return (function (p__43257){
var vec__43258 = p__43257;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43258,(0),null);
var vs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43258,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__43261){
var vec__43262 = p__43261;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43262,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43262,(1),null);
return (b - a);
}),cljs.core.partition.cljs$core$IFn$_invoke$arity$3((2),(1),cljs.core.cons(initial,vs)))], null);
});
});
common.data_frame.cell_binary = (function common$data_frame$cell_binary(f){
return (function (p__43265){
var vec__43266 = p__43265;
var vec__43269 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43266,(0),null);
var k1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43269,(0),null);
var vs1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43269,(1),null);
var vec__43272 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43266,(1),null);
var k2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43272,(0),null);
var vs2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43272,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k1,cljs.core.map.cljs$core$IFn$_invoke$arity$3(f,vs1,vs2)], null);
});
});

//# sourceMappingURL=common.data_frame.js.map
