goog.provide('predict_prostate.results.curves');
cljs.core.enable_console_print_BANG_();
predict_prostate.results.curves.styles = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"outer","outer",-375185956),"outer--G__33352",new cljs.core.Keyword(null,"inner","inner",-1383171215),"inner--G__33352",new cljs.core.Keyword(null,"annotation","annotation",-344661666),"annotation--G__33352",new cljs.core.Keyword(null,"arrow","arrow",1071351425),"arrow--G__33352"], null);

cljs_css_modules.runtime.inject_style_BANG_(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(garden.core.css,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [".outer--G__33352",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fill","fill",883462889),"none",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"none"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [".inner--G__33352",new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fill","fill",883462889),"#fff",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#000",new cljs.core.Keyword(null,"stroke-opacity","stroke-opacity",-1191543159),(0),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),0.5,new cljs.core.Keyword(null,"stroke-dasharray","stroke-dasharray",-942933855),"3, 4"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [".annotation--G__33352",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"14pt"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [".arrow--G__33352",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#000",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"1.5px"], null)], null)], null)),"predict-prostate.results.curves","styles");
predict_prostate.results.curves.as_point_series = (function predict_prostate$results$curves$as_point_series(plot_layers){

return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4529__auto__ = (function predict_prostate$results$curves$as_point_series_$_iter__33361(s__33362){
return (new cljs.core.LazySeq(null,(function (){
var s__33362__$1 = s__33362;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__33362__$1);
if(temp__5735__auto__){
var s__33362__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__33362__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__33362__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__33364 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__33363 = (0);
while(true){
if((i__33363 < size__4528__auto__)){
var time_series = cljs.core._nth(c__4527__auto__,i__33363);
cljs.core.chunk_append(b__33364,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (i__33363,time_series,c__4527__auto__,size__4528__auto__,b__33364,s__33362__$2,temp__5735__auto__){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(i__33363,time_series,c__4527__auto__,size__4528__auto__,b__33364,s__33362__$2,temp__5735__auto__))
,time_series)));

var G__33559 = (i__33363 + (1));
i__33363 = G__33559;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__33364),predict_prostate$results$curves$as_point_series_$_iter__33361(cljs.core.chunk_rest(s__33362__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__33364),null);
}
} else {
var time_series = cljs.core.first(s__33362__$2);
return cljs.core.cons(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (time_series,s__33362__$2,temp__5735__auto__){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(time_series,s__33362__$2,temp__5735__auto__))
,time_series)),predict_prostate$results$curves$as_point_series_$_iter__33361(cljs.core.rest(s__33362__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(plot_layers);
})());
});
predict_prostate.results.curves.line_plot = rum.core.build_defc((function (p__33371,point_series,line_style){
var map__33372 = p__33371;
var map__33372__$1 = (((((!((map__33372 == null))))?(((((map__33372.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33372.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33372):map__33372);
var scale = map__33372__$1;
var X = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33372__$1,new cljs.core.Keyword(null,"X","X",1705996313));
var Y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33372__$1,new cljs.core.Keyword(null,"Y","Y",-560717356));

var point = (function (x,y){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((X.cljs$core$IFn$_invoke$arity$1 ? X.cljs$core$IFn$_invoke$arity$1(x) : X.call(null,x)))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((Y.cljs$core$IFn$_invoke$arity$1 ? Y.cljs$core$IFn$_invoke$arity$1(y) : Y.call(null,y)))].join('');
});
return React.createElement("g",null,(function (){var attrs33380 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"points","points",-1486596883),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__33368_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(point,p1__33368_SHARP_);
}),point_series)], null),line_style], 0));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"polyline",((cljs.core.map_QMARK_(attrs33380))?sablono.interpreter.attributes(attrs33380):null),((cljs.core.map_QMARK_(attrs33380))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs33380)], null)));
})());
}),null,"line-plot");
/**
 * scale contains the x-axis and y-axis scale functions.
 *   Point series should look something like this:
 *   [[0 100]  [1 98.89556593176486]  ... [9 64.83779488900586]  [10 60.8297996952587]]
 *   Baseline is the 
 */
predict_prostate.results.curves.area_plot = rum.core.build_defc((function() {
var G__33569 = null;
var G__33569__3 = (function (scale,point_series,area_style){
return sablono.interpreter.interpret((predict_prostate.results.curves.area_plot.cljs$core$IFn$_invoke$arity$4 ? predict_prostate.results.curves.area_plot.cljs$core$IFn$_invoke$arity$4(scale,point_series,area_style,(0)) : predict_prostate.results.curves.area_plot.call(null,scale,point_series,area_style,(0))));
});
var G__33569__4 = (function (p__33382,point_series,area_style,base){
var map__33386 = p__33382;
var map__33386__$1 = (((((!((map__33386 == null))))?(((((map__33386.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33386.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33386):map__33386);
var X = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33386__$1,new cljs.core.Keyword(null,"X","X",1705996313));
var Y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33386__$1,new cljs.core.Keyword(null,"Y","Y",-560717356));
return sablono.interpreter.interpret(((cljs.core.seq(point_series))?(function (){var point = (function (x,y){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((X.cljs$core$IFn$_invoke$arity$1 ? X.cljs$core$IFn$_invoke$arity$1(x) : X.call(null,x)))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((Y.cljs$core$IFn$_invoke$arity$1 ? Y.cljs$core$IFn$_invoke$arity$1(y) : Y.call(null,y)))].join('');
});
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"polygon","polygon",837053759),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"points","points",-1486596883),clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__33381_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(point,p1__33381_SHARP_);
}),point_series)),clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [point(cljs.core.first(cljs.core.last(point_series)),base),point(cljs.core.first(cljs.core.first(point_series)),base)], null))], null))], null),area_style], 0))], null)], null);
})():null));
});
G__33569 = function(p__33382,point_series,area_style,base){
switch(arguments.length){
case 3:
return G__33569__3.call(this,p__33382,point_series,area_style);
case 4:
return G__33569__4.call(this,p__33382,point_series,area_style,base);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__33569.cljs$core$IFn$_invoke$arity$3 = G__33569__3;
G__33569.cljs$core$IFn$_invoke$arity$4 = G__33569__4;
return G__33569;
})()
,null,"area-plot");
predict_prostate.results.curves.plot = rum.core.build_defc((function (p__33398,plot_style,data,radical_QMARK_){
var map__33399 = p__33398;
var map__33399__$1 = (((((!((map__33399 == null))))?(((((map__33399.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33399.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33399):map__33399);
var scale = map__33399__$1;
var X = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33399__$1,new cljs.core.Keyword(null,"X","X",1705996313));
var Y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33399__$1,new cljs.core.Keyword(null,"Y","Y",-560717356));

return sablono.interpreter.interpret((function (){var pred__33403 = cljs.core._EQ_;
var expr__33404 = plot_style;
if(cljs.core.truth_((pred__33403.cljs$core$IFn$_invoke$arity$2 ? pred__33403.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"area1","area1",-316994623),expr__33404) : pred__33403.call(null,new cljs.core.Keyword(null,"area1","area1",-316994623),expr__33404)))){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),(function (){var G__33407 = scale;
var G__33408 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(data,(1));
var G__33409 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),predict_prostate.results.util.treatment_fills((1))], null);
return (predict_prostate.results.curves.area_plot.cljs$core$IFn$_invoke$arity$3 ? predict_prostate.results.curves.area_plot.cljs$core$IFn$_invoke$arity$3(G__33407,G__33408,G__33409) : predict_prostate.results.curves.area_plot.call(null,G__33407,G__33408,G__33409));
})(),(function (){var G__33411 = scale;
var G__33412 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(data,(0));
var G__33413 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),predict_prostate.results.util.treatment_fills((0))], null);
return (predict_prostate.results.curves.area_plot.cljs$core$IFn$_invoke$arity$3 ? predict_prostate.results.curves.area_plot.cljs$core$IFn$_invoke$arity$3(G__33411,G__33412,G__33413) : predict_prostate.results.curves.area_plot.call(null,G__33411,G__33412,G__33413));
})(),(function (){var G__33414 = scale;
var G__33415 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(data,(2));
var G__33416 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fill","fill",883462889),"none",new cljs.core.Keyword(null,"stroke","stroke",1741823555),predict_prostate.results.util.dashed_stroke,new cljs.core.Keyword(null,"strokeDasharray","strokeDasharray",1664678421),"8,8",new cljs.core.Keyword(null,"strokeWidth","strokeWidth",-2130848332),(5),new cljs.core.Keyword(null,"strokeLinecap","strokeLinecap",-1974748357),"round"], null);
return (predict_prostate.results.curves.line_plot.cljs$core$IFn$_invoke$arity$3 ? predict_prostate.results.curves.line_plot.cljs$core$IFn$_invoke$arity$3(G__33414,G__33415,G__33416) : predict_prostate.results.curves.line_plot.call(null,G__33414,G__33415,G__33416));
})()], null);
} else {
if(cljs.core.truth_((pred__33403.cljs$core$IFn$_invoke$arity$2 ? pred__33403.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"line2","line2",-1975668782),expr__33404) : pred__33403.call(null,new cljs.core.Keyword(null,"line2","line2",-1975668782),expr__33404)))){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),(cljs.core.truth_(radical_QMARK_)?(function (){var G__33417 = scale;
var G__33418 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(data,(2));
var G__33419 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"radical-above","radical-above",-674575611).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"line2","line2",-1975668782).cljs$core$IFn$_invoke$arity$1(predict_prostate.results.util.fills_by_style_STAR_))], null);
return (predict_prostate.results.curves.area_plot.cljs$core$IFn$_invoke$arity$3 ? predict_prostate.results.curves.area_plot.cljs$core$IFn$_invoke$arity$3(G__33417,G__33418,G__33419) : predict_prostate.results.curves.area_plot.call(null,G__33417,G__33418,G__33419));
})():null),(cljs.core.truth_(radical_QMARK_)?(function (){var G__33421 = scale;
var G__33422 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(data,(1));
var G__33423 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"radical","radical",1159030213).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"line2","line2",-1975668782).cljs$core$IFn$_invoke$arity$1(predict_prostate.results.util.fills_by_style_STAR_))], null);
return (predict_prostate.results.curves.area_plot.cljs$core$IFn$_invoke$arity$3 ? predict_prostate.results.curves.area_plot.cljs$core$IFn$_invoke$arity$3(G__33421,G__33422,G__33423) : predict_prostate.results.curves.area_plot.call(null,G__33421,G__33422,G__33423));
})():null),(function (){var G__33424 = scale;
var G__33425 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(data,(2));
var G__33426 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fill","fill",883462889),"none",new cljs.core.Keyword(null,"stroke","stroke",1741823555),predict_prostate.results.util.dashed_stroke,new cljs.core.Keyword(null,"strokeDasharray","strokeDasharray",1664678421),"8,8",new cljs.core.Keyword(null,"strokeWidth","strokeWidth",-2130848332),(5),new cljs.core.Keyword(null,"strokeLinecap","strokeLinecap",-1974748357),"round"], null);
return (predict_prostate.results.curves.line_plot.cljs$core$IFn$_invoke$arity$3 ? predict_prostate.results.curves.line_plot.cljs$core$IFn$_invoke$arity$3(G__33424,G__33425,G__33426) : predict_prostate.results.curves.line_plot.call(null,G__33424,G__33425,G__33426));
})(),(function (){var G__33427 = scale;
var G__33428 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(data,(0));
var G__33429 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),predict_prostate.results.util.treatment_fills((0))], null);
return (predict_prostate.results.curves.area_plot.cljs$core$IFn$_invoke$arity$3 ? predict_prostate.results.curves.area_plot.cljs$core$IFn$_invoke$arity$3(G__33427,G__33428,G__33429) : predict_prostate.results.curves.area_plot.call(null,G__33427,G__33428,G__33429));
})(),(function (){var G__33431 = scale;
var G__33432 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(data,(1));
var G__33433 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"fill","fill",883462889),"none",new cljs.core.Keyword(null,"stroke","stroke",1741823555),predict_prostate.results.util.treatment_fills((0)),new cljs.core.Keyword(null,"strokeWidth","strokeWidth",-2130848332),(2),new cljs.core.Keyword(null,"strokeLinecap","strokeLinecap",-1974748357),"round"], null);
return (predict_prostate.results.curves.line_plot.cljs$core$IFn$_invoke$arity$3 ? predict_prostate.results.curves.line_plot.cljs$core$IFn$_invoke$arity$3(G__33431,G__33432,G__33433) : predict_prostate.results.curves.line_plot.call(null,G__33431,G__33432,G__33433));
})()], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),["bad plot-style",cljs.core.str.cljs$core$IFn$_invoke$arity$1(plot_style)].join('')], null);
}
}
})());
}),null,"plot");
predict_prostate.results.curves.curves_container = rum.core.build_defc((function (p__33438,plot_style,data,radical_QMARK_){
var map__33439 = p__33438;
var map__33439__$1 = (((((!((map__33439 == null))))?(((((map__33439.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33439.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33439):map__33439);
var outer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33439__$1,new cljs.core.Keyword(null,"outer","outer",-375185956));
var margin = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33439__$1,new cljs.core.Keyword(null,"margin","margin",-995903681));
var inner = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33439__$1,new cljs.core.Keyword(null,"inner","inner",-1383171215));
var padding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33439__$1,new cljs.core.Keyword(null,"padding","padding",1660304693));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33439__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33439__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33439__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33439__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var inner__$1 = (((inner == null))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),((new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(outer) - new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(margin)) - new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$1(margin)),new cljs.core.Keyword(null,"height","height",1025178622),((new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(outer) - new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(margin)) - new cljs.core.Keyword(null,"bottom","bottom",-1550509018).cljs$core$IFn$_invoke$arity$1(margin))], null):inner);
var width__$1 = (((width == null))?((new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(inner__$1) - new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(padding)) - new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$1(padding)):width);
var height__$1 = (((height == null))?((new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(inner__$1) - new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(padding)) - new cljs.core.Keyword(null,"bottom","bottom",-1550509018).cljs$core$IFn$_invoke$arity$1(padding)):height);
var x__$1 = (((x == null))?svg.scales.__GT_Identity(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),width__$1], null),predict_prostate.state.run_time.N):x);
var x_ticks = svg.scales.ticks(x__$1);
var y__$1 = (((y == null))?svg.scales.__GT_Identity(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),height__$1], null),(10)):y);
var y_ticks = svg.scales.ticks(y__$1);
var X = svg.scales.i__GT_o(x__$1);
var Y = svg.scales.i__GT_o(y__$1);
return React.createElement("div",({"style": ({"margin": "0 auto", "width": "100%", "height": (0), "paddingTop": "100%", "position": "relative"})}),React.createElement("svg",({"style": ({"position": "absolute", "top": (0), "left": (0)}), "viewBox": [" 0 0 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(outer))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(outer))].join('')}),React.createElement("g",({"key": (0), "transform": ["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(margin)),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(margin)),")"].join('')}),React.createElement("rect",({"key": (1), "className": new cljs.core.Keyword(null,"outer","outer",-375185956).cljs$core$IFn$_invoke$arity$1(predict_prostate.results.curves.styles), "width": new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(inner__$1), "height": new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(inner__$1)})),React.createElement("g",({"key": (2), "transform": ["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(padding)),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(padding)),")"].join('')}),React.createElement("rect",({"key": (1), "className": new cljs.core.Keyword(null,"inner","inner",-1383171215).cljs$core$IFn$_invoke$arity$1(predict_prostate.results.curves.styles), "width": width__$1, "height": height__$1})),React.createElement("g",({"key": "bottom", "transform": ["translate(0,",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.first(svg.scales.out(y__$1)) + (10))),")"].join('')}),sablono.interpreter.interpret((function (){var G__33444 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"scale","scale",-230427353),x__$1,new cljs.core.Keyword(null,"ticks","ticks",-406190313),x_ticks], null);
return (svg.axis.axisBottom.cljs$core$IFn$_invoke$arity$1 ? svg.axis.axisBottom.cljs$core$IFn$_invoke$arity$1(G__33444) : svg.axis.axisBottom.call(null,G__33444));
})())),React.createElement("g",({"key": "left", "transform": ["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.first(svg.scales.out(x__$1)) - (10))),",0)"].join('')}),sablono.interpreter.interpret((function (){var G__33445 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"scale","scale",-230427353),y__$1,new cljs.core.Keyword(null,"ticks","ticks",-406190313),y_ticks,new cljs.core.Keyword(null,"format-specifier","format-specifier",1758610918),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(svg.scales.tick_format_specifier(y__$1)),"%"].join('')], null);
return (svg.axis.axisLeft.cljs$core$IFn$_invoke$arity$1 ? svg.axis.axisLeft.cljs$core$IFn$_invoke$arity$1(G__33445) : svg.axis.axisLeft.call(null,G__33445));
})())),React.createElement("g",({"key": "y-title", "transform": ["translate(-62 0) rotate(-90 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((X.cljs$core$IFn$_invoke$arity$1 ? X.cljs$core$IFn$_invoke$arity$1((0)) : X.call(null,(0))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((Y.cljs$core$IFn$_invoke$arity$1 ? Y.cljs$core$IFn$_invoke$arity$1((0)) : Y.call(null,(0)))),")"].join('')}),React.createElement("text",({"key": "note", "className": new cljs.core.Keyword(null,"annotation","annotation",-344661666).cljs$core$IFn$_invoke$arity$1(predict_prostate.results.curves.styles), "x": (X.cljs$core$IFn$_invoke$arity$1 ? X.cljs$core$IFn$_invoke$arity$1((1)) : X.call(null,(1))), "y": (Y.cljs$core$IFn$_invoke$arity$1 ? Y.cljs$core$IFn$_invoke$arity$1((0)) : Y.call(null,(0)))}),"Percentage of men surviving")),React.createElement("g",({"key": "x-title", "transform": "translate(0 50)"}),React.createElement("text",({"key": "note", "className": new cljs.core.Keyword(null,"annotation","annotation",-344661666).cljs$core$IFn$_invoke$arity$1(predict_prostate.results.curves.styles), "x": (X.cljs$core$IFn$_invoke$arity$1 ? X.cljs$core$IFn$_invoke$arity$1(2.5) : X.call(null,2.5)), "y": (Y.cljs$core$IFn$_invoke$arity$1 ? Y.cljs$core$IFn$_invoke$arity$1((0)) : Y.call(null,(0)))}),"Years after diagnosis")),sablono.interpreter.interpret(rum.core.with_key((function (){var G__33446 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"X","X",1705996313),X,new cljs.core.Keyword(null,"Y","Y",-560717356),Y], null);
var G__33447 = plot_style;
var G__33448 = predict_prostate.results.curves.as_point_series(data);
var G__33449 = radical_QMARK_;
return (predict_prostate.results.curves.plot.cljs$core$IFn$_invoke$arity$4 ? predict_prostate.results.curves.plot.cljs$core$IFn$_invoke$arity$4(G__33446,G__33447,G__33448,G__33449) : predict_prostate.results.curves.plot.call(null,G__33446,G__33447,G__33448,G__33449));
})(),"plot")),sablono.interpreter.interpret(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (k,x_k){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"stroke-dasharray","stroke-dasharray",-942933855),new cljs.core.Keyword(null,"stroke","stroke",1741823555),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"stroke-opacity","stroke-opacity",-1191543159),new cljs.core.Keyword(null,"y1","y1",589123466),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),new cljs.core.Keyword(null,"x1","x1",-1863922247),new cljs.core.Keyword(null,"y2","y2",-718691301),new cljs.core.Keyword(null,"x2","x2",-1362513475)],[(((cljs.core.mod((k + (1)),(5)) === (0)))?"5 5":"2 10"),"#fff",["x",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x_k)].join(''),0.5,(Y.cljs$core$IFn$_invoke$arity$1 ? Y.cljs$core$IFn$_invoke$arity$1((0)) : Y.call(null,(0))),(1),(X.cljs$core$IFn$_invoke$arity$1 ? X.cljs$core$IFn$_invoke$arity$1(x_k) : X.call(null,x_k)),(Y.cljs$core$IFn$_invoke$arity$1 ? Y.cljs$core$IFn$_invoke$arity$1((100)) : Y.call(null,(100))),(X.cljs$core$IFn$_invoke$arity$1 ? X.cljs$core$IFn$_invoke$arity$1(x_k) : X.call(null,x_k))])], null);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),predict_prostate.state.run_time.N))),sablono.interpreter.interpret(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (k,y_k){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"stroke-dasharray","stroke-dasharray",-942933855),new cljs.core.Keyword(null,"stroke","stroke",1741823555),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"stroke-opacity","stroke-opacity",-1191543159),new cljs.core.Keyword(null,"y1","y1",589123466),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),new cljs.core.Keyword(null,"x1","x1",-1863922247),new cljs.core.Keyword(null,"y2","y2",-718691301),new cljs.core.Keyword(null,"x2","x2",-1362513475)],[((cljs.core.odd_QMARK_(k))?"5 5":"2 10"),"#fff",["y",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y_k)].join(''),0.5,(Y.cljs$core$IFn$_invoke$arity$1 ? Y.cljs$core$IFn$_invoke$arity$1(y_k) : Y.call(null,y_k)),(1),(X.cljs$core$IFn$_invoke$arity$1 ? X.cljs$core$IFn$_invoke$arity$1((0)) : X.call(null,(0))),(Y.cljs$core$IFn$_invoke$arity$1 ? Y.cljs$core$IFn$_invoke$arity$1(y_k) : Y.call(null,y_k)),(X.cljs$core$IFn$_invoke$arity$1 ? X.cljs$core$IFn$_invoke$arity$1(predict_prostate.state.run_time.N) : X.call(null,predict_prostate.state.run_time.N))])], null);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$3((10),(100),(10))))))));
}),null,"curves-container");
predict_prostate.results.curves.curves = rum.core.build_defc((function (data){
var margin = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"top","top",-1856271961),(10),new cljs.core.Keyword(null,"right","right",-452581833),(10),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),(0),new cljs.core.Keyword(null,"left","left",-399115937),(0)], null);
var padding = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"top","top",-1856271961),(20),new cljs.core.Keyword(null,"right","right",-452581833),(0),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),(60),new cljs.core.Keyword(null,"left","left",-399115937),(80)], null);
var outer = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(400),new cljs.core.Keyword(null,"height","height",1025178622),(400)], null);
var attrs33455 = (function (){var G__33456 = svg.space.space(outer,margin,padding,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),predict_prostate.state.run_time.N], null),(3),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(100)], null),(5));
var G__33457 = rum.core.react(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)));
var G__33458 = data;
var G__33459 = (rum.core.react(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"primary-rx","primary-rx",-1656848904))) > (0));
return (predict_prostate.results.curves.curves_container.cljs$core$IFn$_invoke$arity$4 ? predict_prostate.results.curves.curves_container.cljs$core$IFn$_invoke$arity$4(G__33456,G__33457,G__33458,G__33459) : predict_prostate.results.curves.curves_container.call(null,G__33456,G__33457,G__33458,G__33459));
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs33455))?sablono.interpreter.attributes(attrs33455):null),((cljs.core.map_QMARK_(attrs33455))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs33455)], null)));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,rum.core.static$,rum.core.local.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword("predict-prostate.results.curves","data","predict-prostate.results.curves/data",-1253026131))], null),"curves");
predict_prostate.results.curves.benefit = (function predict_prostate$results$curves$benefit(data,tk){
var G__33467 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(data,(10));
return (tk.cljs$core$IFn$_invoke$arity$1 ? tk.cljs$core$IFn$_invoke$arity$1(G__33467) : tk.call(null,G__33467));
});
predict_prostate.results.curves.some_benefit_QMARK_ = (function predict_prostate$results$curves$some_benefit_QMARK_(data,treatment_key){
return (predict_prostate.results.curves.benefit(data,treatment_key) > (0));
});
predict_prostate.results.curves.legend_item = rum.core.build_defc((function (p__33470){
var map__33471 = p__33470;
var map__33471__$1 = (((((!((map__33471 == null))))?(((((map__33471.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33471.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33471):map__33471);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33471__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var extra_style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33471__$1,new cljs.core.Keyword(null,"extra-style","extra-style",-1804716577));
var icon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33471__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
return React.createElement("div",null,React.createElement("div",({"key": (3), "style": sablono.interpreter.attributes(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),"50px",new cljs.core.Keyword(null,"display","display",242065432),"inline-block",new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"top",new cljs.core.Keyword(null,"text-align","text-align",1786091845),"right"], null),extra_style], 0)))}),sablono.interpreter.interpret((cljs.core.truth_(icon)?icon:null))),React.createElement("div",({"key": (4), "style": ({"display": "inline-block", "marginLeft": "10px", "width": "calc(100% - 60px)"})}),(function (){var attrs33475 = label;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"p",((cljs.core.map_QMARK_(attrs33475))?sablono.interpreter.attributes(attrs33475):null),((cljs.core.map_QMARK_(attrs33475))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs33475)], null)));
})()));
}),null,"legend-item");
predict_prostate.results.curves.legend = rum.core.build_defc((function (data){
return React.createElement("div",({"width": "100%"}),React.createElement("div",({"style": ({"borderTop": ["4px dashed ",predict_prostate.results.util.dashed_stroke].join(''), "width": "50px", "display": "inline-block", "marginTop": "15px", "verticalAlign": "top"})})),React.createElement("div",({"style": ({"display": "inline-block", "marginLeft": "10px", "width": "calc(100% - 60px)"})}),React.createElement("p",null," Survival excluding deaths from prostate cancer")),sablono.interpreter.interpret((((rum.core.react(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"primary-rx","primary-rx",-1656848904))) > (0)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),(function (){var G__33480 = (predict_prostate.results.util.fill.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.util.fill.cljs$core$IFn$_invoke$arity$1((1)) : predict_prostate.results.util.fill.call(null,(1)));
return (predict_prostate.components.primitives.dead_icon.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.components.primitives.dead_icon.cljs$core$IFn$_invoke$arity$1(G__33480) : predict_prostate.components.primitives.dead_icon.call(null,G__33480));
})()," Estimated survival with radical treatment"], null):null)),React.createElement("div",null,React.createElement("div",({"key": (3), "style": ({"width": "50px", "display": "inline-block", "marginTop": "15px", "verticalAlign": "top", "textAlign": "right"})}),sablono.interpreter.interpret((function (){var G__33485 = predict_prostate.results.util.treatment_fills((0));
return (predict_prostate.components.primitives.dead_icon.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.components.primitives.dead_icon.cljs$core$IFn$_invoke$arity$1(G__33485) : predict_prostate.components.primitives.dead_icon.call(null,G__33485));
})())),React.createElement("div",({"key": (4), "style": ({"display": "inline-block", "marginLeft": "10px", "width": "calc(100% - 60px)"})}),React.createElement("p",null," Conservative management"))));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"legend");
predict_prostate.results.curves.legend2 = rum.core.build_defc((function (plot_style,radical_QMARK_){
return React.createElement("div",({"width": "100%"}),sablono.interpreter.interpret((function (){var G__33486 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"Survival excluding deaths from prostate cancer",new cljs.core.Keyword(null,"extra-style","extra-style",-1804716577),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border-top","border-top",-158897573),["5px dashed ",predict_prostate.results.util.dashed_stroke].join(''),new cljs.core.Keyword(null,"margin-top","margin-top",392161226),(9)], null),new cljs.core.Keyword(null,"icon","icon",1679606541),null], null);
return (predict_prostate.results.curves.legend_item.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.curves.legend_item.cljs$core$IFn$_invoke$arity$1(G__33486) : predict_prostate.results.curves.legend_item.call(null,G__33486));
})()),sablono.interpreter.interpret((cljs.core.truth_(radical_QMARK_)?(function (){var pred__33487 = cljs.core._EQ_;
var expr__33488 = plot_style;
if(cljs.core.truth_((pred__33487.cljs$core$IFn$_invoke$arity$2 ? pred__33487.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"area1","area1",-316994623),expr__33488) : pred__33487.call(null,new cljs.core.Keyword(null,"area1","area1",-316994623),expr__33488)))){
var G__33490 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"Estimated survival with radical treatment",new cljs.core.Keyword(null,"extra-style","extra-style",-1804716577),null,new cljs.core.Keyword(null,"icon","icon",1679606541),(function (){var G__33491 = predict_prostate.results.util.treatment_fills((1));
return (predict_prostate.components.primitives.dead_icon.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.components.primitives.dead_icon.cljs$core$IFn$_invoke$arity$1(G__33491) : predict_prostate.components.primitives.dead_icon.call(null,G__33491));
})()], null);
return (predict_prostate.results.curves.legend_item.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.curves.legend_item.cljs$core$IFn$_invoke$arity$1(G__33490) : predict_prostate.results.curves.legend_item.call(null,G__33490));
} else {
if(cljs.core.truth_((pred__33487.cljs$core$IFn$_invoke$arity$2 ? pred__33487.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"line2","line2",-1975668782),expr__33488) : pred__33487.call(null,new cljs.core.Keyword(null,"line2","line2",-1975668782),expr__33488)))){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var G__33497 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"Potential range of treatment benefit above estimate",new cljs.core.Keyword(null,"extra-style","extra-style",-1804716577),null,new cljs.core.Keyword(null,"icon","icon",1679606541),(function (){var G__33498 = new cljs.core.Keyword(null,"radical-above","radical-above",-674575611).cljs$core$IFn$_invoke$arity$1((plot_style.cljs$core$IFn$_invoke$arity$1 ? plot_style.cljs$core$IFn$_invoke$arity$1(predict_prostate.results.util.fills_by_style_STAR_) : plot_style.call(null,predict_prostate.results.util.fills_by_style_STAR_)));
return (predict_prostate.components.primitives.dead_icon.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.components.primitives.dead_icon.cljs$core$IFn$_invoke$arity$1(G__33498) : predict_prostate.components.primitives.dead_icon.call(null,G__33498));
})()], null);
return (predict_prostate.results.curves.legend_item.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.curves.legend_item.cljs$core$IFn$_invoke$arity$1(G__33497) : predict_prostate.results.curves.legend_item.call(null,G__33497));
})(),(function (){var G__33499 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"Estimated survival with radical treatment",new cljs.core.Keyword(null,"extra-style","extra-style",-1804716577),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border-top","border-top",-158897573),["3px solid ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(predict_prostate.results.util.treatment_fills((0)))].join(''),new cljs.core.Keyword(null,"margin-top","margin-top",392161226),(9)], null),new cljs.core.Keyword(null,"icon","icon",1679606541),null], null);
return (predict_prostate.results.curves.legend_item.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.curves.legend_item.cljs$core$IFn$_invoke$arity$1(G__33499) : predict_prostate.results.curves.legend_item.call(null,G__33499));
})(),(function (){var G__33503 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"Potential range of treatment benefit below estimate",new cljs.core.Keyword(null,"extra-style","extra-style",-1804716577),null,new cljs.core.Keyword(null,"icon","icon",1679606541),(function (){var G__33505 = new cljs.core.Keyword(null,"radical","radical",1159030213).cljs$core$IFn$_invoke$arity$1((plot_style.cljs$core$IFn$_invoke$arity$1 ? plot_style.cljs$core$IFn$_invoke$arity$1(predict_prostate.results.util.fills_by_style_STAR_) : plot_style.call(null,predict_prostate.results.util.fills_by_style_STAR_)));
return (predict_prostate.components.primitives.dead_icon.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.components.primitives.dead_icon.cljs$core$IFn$_invoke$arity$1(G__33505) : predict_prostate.components.primitives.dead_icon.call(null,G__33505));
})()], null);
return (predict_prostate.results.curves.legend_item.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.curves.legend_item.cljs$core$IFn$_invoke$arity$1(G__33503) : predict_prostate.results.curves.legend_item.call(null,G__33503));
})()], null);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__33488)].join('')));
}
}
})():null)),sablono.interpreter.interpret((function (){var G__33522 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Initial conservative management",new cljs.core.Keyword(null,"icon","icon",1679606541),(function (){var G__33524 = predict_prostate.results.util.treatment_fills((0));
return (predict_prostate.components.primitives.dead_icon.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.components.primitives.dead_icon.cljs$core$IFn$_invoke$arity$1(G__33524) : predict_prostate.components.primitives.dead_icon.call(null,G__33524));
})()], null);
return (predict_prostate.results.curves.legend_item.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.curves.legend_item.cljs$core$IFn$_invoke$arity$1(G__33522) : predict_prostate.results.curves.legend_item.call(null,G__33522));
})()));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"legend2");
predict_prostate.results.curves.extract_data = (function predict_prostate$results$curves$extract_data(results,radical_QMARK_){

var one_sum = (function (p1__33527_SHARP_,p2__33528_SHARP_){
return ((100) * ((1) - (p1__33527_SHARP_ + p2__33528_SHARP_)));
});
var radical_survival = (cljs.core.truth_(radical_QMARK_)?cljs.core.map.cljs$core$IFn$_invoke$arity$3(one_sum,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(results,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"radical","radical",1159030213),new cljs.core.Keyword(null,"pred-PC-cum","pred-PC-cum",1965177836)], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(results,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"radical","radical",1159030213),new cljs.core.Keyword(null,"pred-NPC-cum","pred-NPC-cum",-1636287417)], null))):null);
var conservative_survival = cljs.core.map.cljs$core$IFn$_invoke$arity$3(one_sum,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(results,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"conservative","conservative",-1075714010),new cljs.core.Keyword(null,"pred-PC-cum","pred-PC-cum",1965177836)], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(results,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"conservative","conservative",-1075714010),new cljs.core.Keyword(null,"pred-NPC-cum","pred-NPC-cum",-1636287417)], null)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [conservative_survival,(cljs.core.truth_(radical_QMARK_)?radical_survival:null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__33529_SHARP_){
return ((100) * p1__33529_SHARP_);
}),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(results,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"conservative","conservative",-1075714010),new cljs.core.Keyword(null,"NPC-survival","NPC-survival",-1399930619)], null)))], null);
});
predict_prostate.results.curves.results_in_curves = rum.core.build_defcs((function (state,p__33543){
var map__33544 = p__33543;
var map__33544__$1 = (((((!((map__33544 == null))))?(((((map__33544.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33544.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33544):map__33544);
var printable = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33544__$1,new cljs.core.Keyword(null,"printable","printable",-928999004));
var width = rum.core.react(new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(state));
var side_by_side = (function (){var or__4126__auto__ = printable;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (width > (600));
}
})();
var radical_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),rum.core.react(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"primary-rx","primary-rx",-1656848904))));
var data = predict_prostate.results.curves.extract_data(rum.core.react(predict_prostate.state.run_time.results_cursor),radical_QMARK_);
var plot_style = rum.core.react(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)));
return React.createElement("div",({"style": ({"position": "relative"})}),React.createElement("p",({"style": ({"marginTop": "15px"})}),"This graph shows the percentage of men surviving up to ",sablono.interpreter.interpret(predict_prostate.state.run_time.N)," years. These results are based on the inputs and treatment you selected"),React.createElement("div",({"style": ({"width": (cljs.core.truth_(side_by_side)?"70%":"100%"), "maxWidth": (350), "display": "inline-block"})}),React.createElement("div",({"style": ({"padding": "15px 40px 0px 0px"})}),sablono.interpreter.interpret((predict_prostate.results.curves.curves.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.curves.curves.cljs$core$IFn$_invoke$arity$1(data) : predict_prostate.results.curves.curves.call(null,data))))),React.createElement("div",({"style": ({"paddingTop": "30px", "verticalAlign": "top", "width": (cljs.core.truth_(side_by_side)?"30%":"100%"), "display": "inline-block"})}),sablono.interpreter.interpret((predict_prostate.results.curves.legend2.cljs$core$IFn$_invoke$arity$2 ? predict_prostate.results.curves.legend2.cljs$core$IFn$_invoke$arity$2(plot_style,radical_QMARK_) : predict_prostate.results.curves.legend2.call(null,plot_style,radical_QMARK_)))));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$,rum.core.reactive,predict_prostate.mixins.sizing_mixin], null),"results-in-curves");

//# sourceMappingURL=predict_prostate.results.curves.js.map