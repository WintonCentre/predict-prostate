goog.provide('common.data_frame');
common.data_frame.cell_apply = (function common$data_frame$cell_apply(f){
return (function (p__42628){
var vec__42629 = p__42628;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42629,(0),null);
var vs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42629,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,vs)], null);
});
});
common.data_frame.cell_update = (function common$data_frame$cell_update(f){

return (function (p__42632){
var vec__42633 = p__42632;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42633,(0),null);
var vs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42633,(1),null);
var g = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(f,k);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(g,vs)], null);
});
});
common.data_frame.cell_sums = (function common$data_frame$cell_sums(p__42636){
var vec__42637 = p__42636;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42637,(0),null);
var vs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42637,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.reductions.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,vs)], null);
});
common.data_frame.cell_diffs = (function common$data_frame$cell_diffs(initial){
return (function (p__42641){
var vec__42642 = p__42641;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42642,(0),null);
var vs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42642,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__42645){
var vec__42646 = p__42645;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42646,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42646,(1),null);
return (b - a);
}),cljs.core.partition.cljs$core$IFn$_invoke$arity$3((2),(1),cljs.core.cons(initial,vs)))], null);
});
});
common.data_frame.cell_binary = (function common$data_frame$cell_binary(f){
return (function (p__42651){
var vec__42652 = p__42651;
var vec__42655 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42652,(0),null);
var k1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42655,(0),null);
var vs1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42655,(1),null);
var vec__42658 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42652,(1),null);
var k2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42658,(0),null);
var vs2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42658,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k1,cljs.core.map.cljs$core$IFn$_invoke$arity$3(f,vs1,vs2)], null);
});
});

//# sourceMappingURL=common.data_frame.js.map
