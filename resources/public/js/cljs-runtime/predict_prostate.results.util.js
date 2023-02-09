goog.provide('predict_prostate.results.util');
predict_prostate.results.util.encode_triplet = (function predict_prostate$results$util$encode_triplet(e1,e2,e3){
var keys = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=");
var enc1 = (e1 >> (2));
var enc2 = (((e1 & (3)) << (4)) | (e2 >> (4)));
var enc3 = (((e2 & (15)) << (2)) | (e3 >> (6)));
var enc4 = (e3 & (63));
return clojure.string.join.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(keys.cljs$core$IFn$_invoke$arity$1 ? keys.cljs$core$IFn$_invoke$arity$1(enc1) : keys.call(null,enc1)),(keys.cljs$core$IFn$_invoke$arity$1 ? keys.cljs$core$IFn$_invoke$arity$1(enc2) : keys.call(null,enc2)),(keys.cljs$core$IFn$_invoke$arity$1 ? keys.cljs$core$IFn$_invoke$arity$1(enc3) : keys.call(null,enc3)),(keys.cljs$core$IFn$_invoke$arity$1 ? keys.cljs$core$IFn$_invoke$arity$1(enc4) : keys.call(null,enc4))], null));
});
predict_prostate.results.util.encode_rgb = (function predict_prostate$results$util$encode_rgb(r,g,b){
return clojure.string.join.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [predict_prostate.results.util.encode_triplet((0),r,g),predict_prostate.results.util.encode_triplet(b,(255),(255))], null));
});
predict_prostate.results.util.generate_pixel = (function predict_prostate$results$util$generate_pixel(encoded_color){
return clojure.string.join.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["data:image/gif;base64,R0lGODlhAQABAPAA",encoded_color,"/yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="], null));
});
/**
 * Generates a 1 px data url from an rgb colour
 */
predict_prostate.results.util.fill_data_url = (function predict_prostate$results$util$fill_data_url(r,g,b){
return predict_prostate.results.util.generate_pixel(predict_prostate.results.util.encode_rgb(r,g,b));
});
/**
 * Generates a 1 px data url from a hex colour
 */
predict_prostate.results.util.hex_data_url = (function predict_prostate$results$util$hex_data_url(hex){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(predict_prostate.results.util.fill_data_url,goog.color.hexToRgb(hex));
});
predict_prostate.results.util.dashed_stroke = "#FA0";
predict_prostate.results.util.above_dashed = "#ffffff";
predict_prostate.results.util.conservative_fill = "#2222dd";
predict_prostate.results.util.radical_fill = "#00afef";
predict_prostate.results.util.radical_range = "#88ddff";
predict_prostate.results.util.radical_below = "#00ddff";
predict_prostate.results.util.radical_above = "#eeee88";
predict_prostate.results.util.fills_by_style = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"area1","area1",-316994623),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [predict_prostate.results.util.above_dashed,predict_prostate.results.util.radical_fill,predict_prostate.results.util.conservative_fill], null),new cljs.core.Keyword(null,"line2","line2",-1975668782),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [predict_prostate.results.util.above_dashed,predict_prostate.results.util.radical_above,predict_prostate.results.util.radical_below,predict_prostate.results.util.conservative_fill], null)], null);
predict_prostate.results.util.fills_by_style_STAR_ = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"area1","area1",-316994623),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"above","above",-1286866470),predict_prostate.results.util.above_dashed,new cljs.core.Keyword(null,"radical-above","radical-above",-674575611),predict_prostate.results.util.above_dashed,new cljs.core.Keyword(null,"radical","radical",1159030213),predict_prostate.results.util.radical_fill,new cljs.core.Keyword(null,"conservative","conservative",-1075714010),predict_prostate.results.util.conservative_fill], null),new cljs.core.Keyword(null,"line2","line2",-1975668782),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"above","above",-1286866470),predict_prostate.results.util.above_dashed,new cljs.core.Keyword(null,"radical-above","radical-above",-674575611),predict_prostate.results.util.radical_above,new cljs.core.Keyword(null,"radical","radical",1159030213),predict_prostate.results.util.radical_below,new cljs.core.Keyword(null,"conservative","conservative",-1075714010),predict_prostate.results.util.conservative_fill], null)], null);
predict_prostate.results.util.fills = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#ffffff","#00afef",predict_prostate.results.util.conservative_fill], null);
predict_prostate.results.util.fill = predict_prostate.results.util.fills;
predict_prostate.results.util.data_fill = (function predict_prostate$results$util$data_fill(index){

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(predict_prostate.results.util.fill_data_url,goog.color.hexToRgb((predict_prostate.results.util.fill.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.util.fill.cljs$core$IFn$_invoke$arity$1(index) : predict_prostate.results.util.fill.call(null,index))));
});
predict_prostate.results.util.min_label_percent = (3);
predict_prostate.results.util.treatment_fills = (function predict_prostate$results$util$treatment_fills(index){

var G__46260 = ((cljs.core.count(predict_prostate.results.util.fills) - (1)) - index);
return (predict_prostate.results.util.fill.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.util.fill.cljs$core$IFn$_invoke$arity$1(G__46260) : predict_prostate.results.util.fill.call(null,G__46260));
});
predict_prostate.results.util.treatment_fills_STAR_ = (function predict_prostate$results$util$treatment_fills_STAR_(plot_style,index){

var f = (plot_style.cljs$core$IFn$_invoke$arity$1 ? plot_style.cljs$core$IFn$_invoke$arity$1(predict_prostate.results.util.fills_by_style) : plot_style.call(null,predict_prostate.results.util.fills_by_style));
var G__46265 = ((cljs.core.count(f) - (1)) - index);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__46265) : f.call(null,G__46265));
});
predict_prostate.results.util.clip = (function predict_prostate$results$util$clip(p__46266){
var map__46267 = p__46266;
var map__46267__$1 = cljs.core.__destructure_map(map__46267);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__46267__$1,new cljs.core.Keyword(null,"value","value",305978217),(0));
var min = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__46267__$1,new cljs.core.Keyword(null,"min","min",444991522),(0));
var max = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__46267__$1,new cljs.core.Keyword(null,"max","max",61366548),(10));

if((value > max)){
return max;
} else {
if((value < min)){
return min;
} else {
return value;
}
}
});
predict_prostate.results.util.toPrecision = (function predict_prostate$results$util$toPrecision(var_args){
var args__4824__auto__ = [];
var len__4818__auto___46329 = arguments.length;
var i__4819__auto___46330 = (0);
while(true){
if((i__4819__auto___46330 < len__4818__auto___46329)){
args__4824__auto__.push((arguments[i__4819__auto___46330]));

var G__46331 = (i__4819__auto___46330 + (1));
i__4819__auto___46330 = G__46331;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return predict_prostate.results.util.toPrecision.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(predict_prostate.results.util.toPrecision.cljs$core$IFn$_invoke$arity$variadic = (function (f,p__46278){
var vec__46279 = p__46278;
var high = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46279,(0),null);
return parseFloat((new Number(f)).toPrecision((((f >= (10)))?(2):(cljs.core.truth_(high)?(2):(1)))));
}));

(predict_prostate.results.util.toPrecision.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(predict_prostate.results.util.toPrecision.cljs$lang$applyTo = (function (seq46270){
var G__46271 = cljs.core.first(seq46270);
var seq46270__$1 = cljs.core.next(seq46270);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46271,seq46270__$1);
}));

predict_prostate.results.util.avoid_decimals = (function predict_prostate$results$util$avoid_decimals(var_args){
var args__4824__auto__ = [];
var len__4818__auto___46332 = arguments.length;
var i__4819__auto___46333 = (0);
while(true){
if((i__4819__auto___46333 < len__4818__auto___46332)){
args__4824__auto__.push((arguments[i__4819__auto___46333]));

var G__46334 = (i__4819__auto___46333 + (1));
i__4819__auto___46333 = G__46334;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return predict_prostate.results.util.avoid_decimals.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(predict_prostate.results.util.avoid_decimals.cljs$core$IFn$_invoke$arity$variadic = (function (d,p__46288){
var vec__46289 = p__46288;
var high = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46289,(0),null);

var p = (((d < (10)))?(cljs.core.truth_(high)?(1):(0)):(0));
return (new Number(d)).toFixed(p);
}));

(predict_prostate.results.util.avoid_decimals.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(predict_prostate.results.util.avoid_decimals.cljs$lang$applyTo = (function (seq46286){
var G__46287 = cljs.core.first(seq46286);
var seq46286__$1 = cljs.core.next(seq46286);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46287,seq46286__$1);
}));

predict_prostate.results.util.one_dp = (function predict_prostate$results$util$one_dp(d,p){

return (new Number(d)).toFixed(p);
});
/**
 * convert float fraction to a decimal percent value at full precision
 */
predict_prostate.results.util.to_percent = (function predict_prostate$results$util$to_percent(f){
return ((100) * f);
});
predict_prostate.results.util.percent = (function predict_prostate$results$util$percent(var_args){
var G__46299 = arguments.length;
switch (G__46299) {
case 1:
return predict_prostate.results.util.percent.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return predict_prostate.results.util.percent.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(predict_prostate.results.util.percent.cljs$core$IFn$_invoke$arity$1 = (function (d){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(Math.round(((100) * d))),"%"].join('');
}));

(predict_prostate.results.util.percent.cljs$core$IFn$_invoke$arity$2 = (function (d,p){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(predict_prostate.results.util.one_dp(((100) * d),p)),"%"].join('');
}));

(predict_prostate.results.util.percent.cljs$lang$maxFixedArity = 2);

predict_prostate.results.util.prostate_blue = "#225FB1";
predict_prostate.results.util.NHS_blue = "#005EB4";
predict_prostate.results.util.alison_blue_1 = "#d3e7fd";
predict_prostate.results.util.alison_blue_1_rgb = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(211),(231),(253)], null);
predict_prostate.results.util.alison_blue_2 = "#002e5d";
predict_prostate.results.util.alison_blue_3 = "#1f6bc4";
predict_prostate.results.util.alison_blue_5 = "#edf5ff";
predict_prostate.results.util.alison_blue_4 = "#ffffff";
predict_prostate.results.util.alison_pink = "#b4078d";

//# sourceMappingURL=predict_prostate.results.util.js.map
