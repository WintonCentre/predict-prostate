goog.provide('predict_prostate.results.curves');
cljs.core.enable_console_print_BANG_();
predict_prostate.results.curves.styles = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"outer","outer",-375185956),"outer--G__48297",new cljs.core.Keyword(null,"inner","inner",-1383171215),"inner--G__48297",new cljs.core.Keyword(null,"annotation","annotation",-344661666),"annotation--G__48297",new cljs.core.Keyword(null,"arrow","arrow",1071351425),"arrow--G__48297"], null);

cljs_css_modules.runtime.inject_style_BANG_(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(garden.core.css,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [".outer--G__48297",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fill","fill",883462889),"none",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"none"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [".inner--G__48297",new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fill","fill",883462889),"#fff",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#000",new cljs.core.Keyword(null,"stroke-opacity","stroke-opacity",-1191543159),(0),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),0.5,new cljs.core.Keyword(null,"stroke-dasharray","stroke-dasharray",-942933855),"3, 4"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [".annotation--G__48297",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"14pt"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [".arrow--G__48297",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#000",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"1.5px"], null)], null)], null)),"predict-prostate.results.curves","styles");
predict_prostate.results.curves.as_point_series = (function predict_prostate$results$curves$as_point_series(plot_layers){

return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4611__auto__ = (function predict_prostate$results$curves$as_point_series_$_iter__48298(s__48299){
return (new cljs.core.LazySeq(null,(function (){
var s__48299__$1 = s__48299;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__48299__$1);
if(temp__5753__auto__){
var s__48299__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__48299__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__48299__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__48301 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__48300 = (0);
while(true){
if((i__48300 < size__4610__auto__)){
var time_series = cljs.core._nth(c__4609__auto__,i__48300);
cljs.core.chunk_append(b__48301,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (i__48300,time_series,c__4609__auto__,size__4610__auto__,b__48301,s__48299__$2,temp__5753__auto__){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(i__48300,time_series,c__4609__auto__,size__4610__auto__,b__48301,s__48299__$2,temp__5753__auto__))
,time_series)));

var G__48391 = (i__48300 + (1));
i__48300 = G__48391;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__48301),predict_prostate$results$curves$as_point_series_$_iter__48298(cljs.core.chunk_rest(s__48299__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__48301),null);
}
} else {
var time_series = cljs.core.first(s__48299__$2);
return cljs.core.cons(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (time_series,s__48299__$2,temp__5753__auto__){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(time_series,s__48299__$2,temp__5753__auto__))
,time_series)),predict_prostate$results$curves$as_point_series_$_iter__48298(cljs.core.rest(s__48299__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(plot_layers);
})());
});
predict_prostate.results.curves.line_plot = rum.core.build_defc((function (p__48303,point_series,line_style){
var map__48304 = p__48303;
var map__48304__$1 = cljs.core.__destructure_map(map__48304);
var scale = map__48304__$1;
var X = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48304__$1,new cljs.core.Keyword(null,"X","X",1705996313));
var Y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48304__$1,new cljs.core.Keyword(null,"Y","Y",-560717356));

var point = (function (x,y){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((X.cljs$core$IFn$_invoke$arity$1 ? X.cljs$core$IFn$_invoke$arity$1(x) : X.call(null,x)))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((Y.cljs$core$IFn$_invoke$arity$1 ? Y.cljs$core$IFn$_invoke$arity$1(y) : Y.call(null,y)))].join('');
});
return React.createElement("g",null,(function (){var attrs48305 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"points","points",-1486596883),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__48302_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(point,p1__48302_SHARP_);
}),point_series)], null),line_style], 0));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"polyline",((cljs.core.map_QMARK_(attrs48305))?sablono.interpreter.attributes(attrs48305):null),((cljs.core.map_QMARK_(attrs48305))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs48305)], null)));
})());
}),null,"line-plot");
/**
 * scale contains the x-axis and y-axis scale functions.
 *   Point series should look something like this:
 *   [[0 100]  [1 98.89556593176486]  ... [9 64.83779488900586]  [10 60.8297996952587]]
 *   Baseline is the 
 */
predict_prostate.results.curves.area_plot = rum.core.build_defc((function() {
var G__48392 = null;
var G__48392__3 = (function (scale,point_series,area_style){
return sablono.interpreter.interpret((predict_prostate.results.curves.area_plot.cljs$core$IFn$_invoke$arity$4 ? predict_prostate.results.curves.area_plot.cljs$core$IFn$_invoke$arity$4(scale,point_series,area_style,(0)) : predict_prostate.results.curves.area_plot.call(null,scale,point_series,area_style,(0))));
});
var G__48392__4 = (function (p__48307,point_series,area_style,base){
var map__48308 = p__48307;
var map__48308__$1 = cljs.core.__destructure_map(map__48308);
var X = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48308__$1,new cljs.core.Keyword(null,"X","X",1705996313));
var Y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48308__$1,new cljs.core.Keyword(null,"Y","Y",-560717356));
return sablono.interpreter.interpret(((cljs.core.seq(point_series))?(function (){var point = (function (x,y){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((X.cljs$core$IFn$_invoke$arity$1 ? X.cljs$core$IFn$_invoke$arity$1(x) : X.call(null,x)))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((Y.cljs$core$IFn$_invoke$arity$1 ? Y.cljs$core$IFn$_invoke$arity$1(y) : Y.call(null,y)))].join('');
});
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"polygon","polygon",837053759),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"points","points",-1486596883),clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__48306_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(point,p1__48306_SHARP_);
}),point_series)),clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [point(cljs.core.first(cljs.core.last(point_series)),base),point(cljs.core.first(cljs.core.first(point_series)),base)], null))], null))], null),area_style], 0))], null)], null);
})():null));
});
G__48392 = function(p__48307,point_series,area_style,base){
switch(arguments.length){
case 3:
return G__48392__3.call(this,p__48307,point_series,area_style);
case 4:
return G__48392__4.call(this,p__48307,point_series,area_style,base);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__48392.cljs$core$IFn$_invoke$arity$3 = G__48392__3;
G__48392.cljs$core$IFn$_invoke$arity$4 = G__48392__4;
return G__48392;
})()
,null,"area-plot");
predict_prostate.results.curves.plot = rum.core.build_defc((function (p__48309,plot_style,data,radical_QMARK_){
var map__48310 = p__48309;
var map__48310__$1 = cljs.core.__destructure_map(map__48310);
var scale = map__48310__$1;
var X = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48310__$1,new cljs.core.Keyword(null,"X","X",1705996313));
var Y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48310__$1,new cljs.core.Keyword(null,"Y","Y",-560717356));

return sablono.interpreter.interpret((function (){var pred__48311 = cljs.core._EQ_;
var expr__48312 = plot_style;
if(cljs.core.truth_((pred__48311.cljs$core$IFn$_invoke$arity$2 ? pred__48311.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"area1","area1",-316994623),expr__48312) : pred__48311.call(null,new cljs.core.Keyword(null,"area1","area1",-316994623),expr__48312)))){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),(function (){var G__48314 = scale;
var G__48315 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(data,(1));
var G__48316 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),predict_prostate.results.util.treatment_fills((1))], null);
return (predict_prostate.results.curves.area_plot.cljs$core$IFn$_invoke$arity$3 ? predict_prostate.results.curves.area_plot.cljs$core$IFn$_invoke$arity$3(G__48314,G__48315,G__48316) : predict_prostate.results.curves.area_plot.call(null,G__48314,G__48315,G__48316));
})(),(function (){var G__48317 = scale;
var G__48318 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(data,(0));
var G__48319 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),predict_prostate.results.util.treatment_fills((0))], null);
return (predict_prostate.results.curves.area_plot.cljs$core$IFn$_invoke$arity$3 ? predict_prostate.results.curves.area_plot.cljs$core$IFn$_invoke$arity$3(G__48317,G__48318,G__48319) : predict_prostate.results.curves.area_plot.call(null,G__48317,G__48318,G__48319));
})(),(function (){var G__48320 = scale;
var G__48321 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(data,(2));
var G__48322 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fill","fill",883462889),"none",new cljs.core.Keyword(null,"stroke","stroke",1741823555),predict_prostate.results.util.dashed_stroke,new cljs.core.Keyword(null,"strokeDasharray","strokeDasharray",1664678421),"8,8",new cljs.core.Keyword(null,"strokeWidth","strokeWidth",-2130848332),(5),new cljs.core.Keyword(null,"strokeLinecap","strokeLinecap",-1974748357),"round"], null);
return (predict_prostate.results.curves.line_plot.cljs$core$IFn$_invoke$arity$3 ? predict_prostate.results.curves.line_plot.cljs$core$IFn$_invoke$arity$3(G__48320,G__48321,G__48322) : predict_prostate.results.curves.line_plot.call(null,G__48320,G__48321,G__48322));
})()], null);
} else {
if(cljs.core.truth_((pred__48311.cljs$core$IFn$_invoke$arity$2 ? pred__48311.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"line2","line2",-1975668782),expr__48312) : pred__48311.call(null,new cljs.core.Keyword(null,"line2","line2",-1975668782),expr__48312)))){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),(cljs.core.truth_(radical_QMARK_)?(function (){var G__48323 = scale;
var G__48324 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(data,(2));
var G__48325 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"radical-above","radical-above",-674575611).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"line2","line2",-1975668782).cljs$core$IFn$_invoke$arity$1(predict_prostate.results.util.fills_by_style_STAR_))], null);
return (predict_prostate.results.curves.area_plot.cljs$core$IFn$_invoke$arity$3 ? predict_prostate.results.curves.area_plot.cljs$core$IFn$_invoke$arity$3(G__48323,G__48324,G__48325) : predict_prostate.results.curves.area_plot.call(null,G__48323,G__48324,G__48325));
})():null),(cljs.core.truth_(radical_QMARK_)?(function (){var G__48326 = scale;
var G__48327 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(data,(1));
var G__48328 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"radical","radical",1159030213).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"line2","line2",-1975668782).cljs$core$IFn$_invoke$arity$1(predict_prostate.results.util.fills_by_style_STAR_))], null);
return (predict_prostate.results.curves.area_plot.cljs$core$IFn$_invoke$arity$3 ? predict_prostate.results.curves.area_plot.cljs$core$IFn$_invoke$arity$3(G__48326,G__48327,G__48328) : predict_prostate.results.curves.area_plot.call(null,G__48326,G__48327,G__48328));
})():null),(function (){var G__48329 = scale;
var G__48330 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(data,(2));
var G__48331 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fill","fill",883462889),"none",new cljs.core.Keyword(null,"stroke","stroke",1741823555),predict_prostate.results.util.dashed_stroke,new cljs.core.Keyword(null,"strokeDasharray","strokeDasharray",1664678421),"8,8",new cljs.core.Keyword(null,"strokeWidth","strokeWidth",-2130848332),(5),new cljs.core.Keyword(null,"strokeLinecap","strokeLinecap",-1974748357),"round"], null);
return (predict_prostate.results.curves.line_plot.cljs$core$IFn$_invoke$arity$3 ? predict_prostate.results.curves.line_plot.cljs$core$IFn$_invoke$arity$3(G__48329,G__48330,G__48331) : predict_prostate.results.curves.line_plot.call(null,G__48329,G__48330,G__48331));
})(),(function (){var G__48332 = scale;
var G__48333 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(data,(0));
var G__48334 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),predict_prostate.results.util.treatment_fills((0))], null);
return (predict_prostate.results.curves.area_plot.cljs$core$IFn$_invoke$arity$3 ? predict_prostate.results.curves.area_plot.cljs$core$IFn$_invoke$arity$3(G__48332,G__48333,G__48334) : predict_prostate.results.curves.area_plot.call(null,G__48332,G__48333,G__48334));
})(),(function (){var G__48335 = scale;
var G__48336 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(data,(1));
var G__48337 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"fill","fill",883462889),"none",new cljs.core.Keyword(null,"stroke","stroke",1741823555),predict_prostate.results.util.treatment_fills((0)),new cljs.core.Keyword(null,"strokeWidth","strokeWidth",-2130848332),(2),new cljs.core.Keyword(null,"strokeLinecap","strokeLinecap",-1974748357),"round"], null);
return (predict_prostate.results.curves.line_plot.cljs$core$IFn$_invoke$arity$3 ? predict_prostate.results.curves.line_plot.cljs$core$IFn$_invoke$arity$3(G__48335,G__48336,G__48337) : predict_prostate.results.curves.line_plot.call(null,G__48335,G__48336,G__48337));
})()], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),["bad plot-style",cljs.core.str.cljs$core$IFn$_invoke$arity$1(plot_style)].join('')], null);
}
}
})());
}),null,"plot");
predict_prostate.results.curves.curves_container = rum.core.build_defc((function (p__48338,plot_style,data,radical_QMARK_){
var map__48339 = p__48338;
var map__48339__$1 = cljs.core.__destructure_map(map__48339);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48339__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var outer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48339__$1,new cljs.core.Keyword(null,"outer","outer",-375185956));
var y_title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48339__$1,new cljs.core.Keyword(null,"y-title","y-title",220785852));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48339__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var margin = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48339__$1,new cljs.core.Keyword(null,"margin","margin",-995903681));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48339__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var x_title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48339__$1,new cljs.core.Keyword(null,"x-title","x-title",698054088));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48339__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var inner = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48339__$1,new cljs.core.Keyword(null,"inner","inner",-1383171215));
var padding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48339__$1,new cljs.core.Keyword(null,"padding","padding",1660304693));
var inner__$1 = (((inner == null))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),((new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(outer) - new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(margin)) - new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$1(margin)),new cljs.core.Keyword(null,"height","height",1025178622),((new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(outer) - new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(margin)) - new cljs.core.Keyword(null,"bottom","bottom",-1550509018).cljs$core$IFn$_invoke$arity$1(margin))], null):inner);
var width__$1 = (((width == null))?((new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(inner__$1) - new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(padding)) - new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$1(padding)):width);
var height__$1 = (((height == null))?((new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(inner__$1) - new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(padding)) - new cljs.core.Keyword(null,"bottom","bottom",-1550509018).cljs$core$IFn$_invoke$arity$1(padding)):height);
var x__$1 = (((x == null))?svg.scales.__GT_Identity(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),width__$1], null),predict_prostate.state.run_time.N):x);
var x_ticks = svg.scales.ticks(x__$1);
var y__$1 = (((y == null))?svg.scales.__GT_Identity(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),height__$1], null),(10)):y);
var y_ticks = svg.scales.ticks(y__$1);
var X = svg.scales.i__GT_o(x__$1);
var Y = svg.scales.i__GT_o(y__$1);
return React.createElement("div",({"style": ({"margin": "0 auto", "width": "100%", "height": (0), "paddingTop": "100%", "position": "relative"})}),React.createElement("svg",({"style": ({"position": "absolute", "top": (0), "left": (0)}), "viewBox": [" 0 0 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(outer))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(outer))].join('')}),React.createElement("g",({"key": (0), "transform": ["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(margin)),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(margin)),")"].join('')}),React.createElement("rect",({"key": (1), "className": new cljs.core.Keyword(null,"outer","outer",-375185956).cljs$core$IFn$_invoke$arity$1(predict_prostate.results.curves.styles), "width": new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(inner__$1), "height": new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(inner__$1)})),React.createElement("g",({"key": (2), "transform": ["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(padding)),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(padding)),")"].join('')}),React.createElement("rect",({"key": (1), "className": new cljs.core.Keyword(null,"inner","inner",-1383171215).cljs$core$IFn$_invoke$arity$1(predict_prostate.results.curves.styles), "width": width__$1, "height": height__$1})),React.createElement("g",({"key": "bottom", "transform": ["translate(0,",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.first(svg.scales.out(y__$1)) + (10))),")"].join('')}),sablono.interpreter.interpret((function (){var G__48340 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"scale","scale",-230427353),x__$1,new cljs.core.Keyword(null,"ticks","ticks",-406190313),x_ticks], null);
return (svg.axis.axisBottom.cljs$core$IFn$_invoke$arity$1 ? svg.axis.axisBottom.cljs$core$IFn$_invoke$arity$1(G__48340) : svg.axis.axisBottom.call(null,G__48340));
})())),React.createElement("g",({"key": "left", "transform": ["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.first(svg.scales.out(x__$1)) - (10))),",0)"].join('')}),sablono.interpreter.interpret((function (){var G__48341 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"scale","scale",-230427353),y__$1,new cljs.core.Keyword(null,"ticks","ticks",-406190313),y_ticks,new cljs.core.Keyword(null,"format-specifier","format-specifier",1758610918),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(svg.scales.tick_format_specifier(y__$1)),"%"].join('')], null);
return (svg.axis.axisLeft.cljs$core$IFn$_invoke$arity$1 ? svg.axis.axisLeft.cljs$core$IFn$_invoke$arity$1(G__48341) : svg.axis.axisLeft.call(null,G__48341));
})())),React.createElement("g",({"key": "y-title", "transform": ["translate(-62 0) rotate(-90 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((X.cljs$core$IFn$_invoke$arity$1 ? X.cljs$core$IFn$_invoke$arity$1((0)) : X.call(null,(0))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((Y.cljs$core$IFn$_invoke$arity$1 ? Y.cljs$core$IFn$_invoke$arity$1((0)) : Y.call(null,(0)))),")"].join('')}),React.createElement("text",({"key": "note", "className": new cljs.core.Keyword(null,"annotation","annotation",-344661666).cljs$core$IFn$_invoke$arity$1(predict_prostate.results.curves.styles), "x": (X.cljs$core$IFn$_invoke$arity$1 ? X.cljs$core$IFn$_invoke$arity$1((1)) : X.call(null,(1))), "y": (Y.cljs$core$IFn$_invoke$arity$1 ? Y.cljs$core$IFn$_invoke$arity$1((0)) : Y.call(null,(0)))}),sablono.interpreter.interpret(y_title))),React.createElement("g",({"key": "x-title", "transform": "translate(0 50)"}),React.createElement("text",({"key": "note", "className": new cljs.core.Keyword(null,"annotation","annotation",-344661666).cljs$core$IFn$_invoke$arity$1(predict_prostate.results.curves.styles), "x": (X.cljs$core$IFn$_invoke$arity$1 ? X.cljs$core$IFn$_invoke$arity$1(2.5) : X.call(null,2.5)), "y": (Y.cljs$core$IFn$_invoke$arity$1 ? Y.cljs$core$IFn$_invoke$arity$1((0)) : Y.call(null,(0)))}),sablono.interpreter.interpret(x_title))),sablono.interpreter.interpret(rum.core.with_key((function (){var G__48342 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"X","X",1705996313),X,new cljs.core.Keyword(null,"Y","Y",-560717356),Y], null);
var G__48343 = plot_style;
var G__48344 = predict_prostate.results.curves.as_point_series(data);
var G__48345 = radical_QMARK_;
return (predict_prostate.results.curves.plot.cljs$core$IFn$_invoke$arity$4 ? predict_prostate.results.curves.plot.cljs$core$IFn$_invoke$arity$4(G__48342,G__48343,G__48344,G__48345) : predict_prostate.results.curves.plot.call(null,G__48342,G__48343,G__48344,G__48345));
})(),"plot")),sablono.interpreter.interpret(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (k,x_k){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"stroke-dasharray","stroke-dasharray",-942933855),new cljs.core.Keyword(null,"stroke","stroke",1741823555),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"stroke-opacity","stroke-opacity",-1191543159),new cljs.core.Keyword(null,"y1","y1",589123466),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),new cljs.core.Keyword(null,"x1","x1",-1863922247),new cljs.core.Keyword(null,"y2","y2",-718691301),new cljs.core.Keyword(null,"x2","x2",-1362513475)],[(((cljs.core.mod((k + (1)),(5)) === (0)))?"5 5":"2 10"),"#fff",["x",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x_k)].join(''),0.5,(Y.cljs$core$IFn$_invoke$arity$1 ? Y.cljs$core$IFn$_invoke$arity$1((0)) : Y.call(null,(0))),(1),(X.cljs$core$IFn$_invoke$arity$1 ? X.cljs$core$IFn$_invoke$arity$1(x_k) : X.call(null,x_k)),(Y.cljs$core$IFn$_invoke$arity$1 ? Y.cljs$core$IFn$_invoke$arity$1((100)) : Y.call(null,(100))),(X.cljs$core$IFn$_invoke$arity$1 ? X.cljs$core$IFn$_invoke$arity$1(x_k) : X.call(null,x_k))])], null);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),predict_prostate.state.run_time.N))),sablono.interpreter.interpret(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (k,y_k){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"stroke-dasharray","stroke-dasharray",-942933855),new cljs.core.Keyword(null,"stroke","stroke",1741823555),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"stroke-opacity","stroke-opacity",-1191543159),new cljs.core.Keyword(null,"y1","y1",589123466),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),new cljs.core.Keyword(null,"x1","x1",-1863922247),new cljs.core.Keyword(null,"y2","y2",-718691301),new cljs.core.Keyword(null,"x2","x2",-1362513475)],[((cljs.core.odd_QMARK_(k))?"5 5":"2 10"),"#fff",["y",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y_k)].join(''),0.5,(Y.cljs$core$IFn$_invoke$arity$1 ? Y.cljs$core$IFn$_invoke$arity$1(y_k) : Y.call(null,y_k)),(1),(X.cljs$core$IFn$_invoke$arity$1 ? X.cljs$core$IFn$_invoke$arity$1((0)) : X.call(null,(0))),(Y.cljs$core$IFn$_invoke$arity$1 ? Y.cljs$core$IFn$_invoke$arity$1(y_k) : Y.call(null,y_k)),(X.cljs$core$IFn$_invoke$arity$1 ? X.cljs$core$IFn$_invoke$arity$1(predict_prostate.state.run_time.N) : X.call(null,predict_prostate.state.run_time.N))])], null);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$3((10),(100),(10))))))));
}),null,"curves-container");
predict_prostate.results.curves.curves = rum.core.build_defc((function (data,ttt){
var margin = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"top","top",-1856271961),(10),new cljs.core.Keyword(null,"right","right",-452581833),(10),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),(0),new cljs.core.Keyword(null,"left","left",-399115937),(0)], null);
var padding = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"top","top",-1856271961),(20),new cljs.core.Keyword(null,"right","right",-452581833),(0),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),(60),new cljs.core.Keyword(null,"left","left",-399115937),(80)], null);
var outer = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(400),new cljs.core.Keyword(null,"height","height",1025178622),(400)], null);
var y_title = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("curves","y-axis","curves/y-axis",-1870350726),"Percentage of men surviving"], null);
var x_title = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("curves","x-axis","curves/x-axis",704064159),"Years after diagnosis"], null);
var ttt_STAR_ = rum.core.react(predict_prostate.state.run_time.ttt_cursor);
var attrs48346 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(translations.config.translation_profile,new cljs.core.Keyword(null,"edit","edit",-1641834166)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(16)], null)], null),(ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(y_title) : ttt.call(null,y_title))], null):null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs48346))?sablono.interpreter.attributes(attrs48346):null),((cljs.core.map_QMARK_(attrs48346))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret((function (){var G__48347 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(svg.space.space(outer,margin,padding,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),predict_prostate.state.run_time.N], null),(3),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(100)], null),(5)),new cljs.core.Keyword(null,"y-title","y-title",220785852),(ttt_STAR_.cljs$core$IFn$_invoke$arity$1 ? ttt_STAR_.cljs$core$IFn$_invoke$arity$1(y_title) : ttt_STAR_.call(null,y_title)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"x-title","x-title",698054088),(ttt_STAR_.cljs$core$IFn$_invoke$arity$1 ? ttt_STAR_.cljs$core$IFn$_invoke$arity$1(x_title) : ttt_STAR_.call(null,x_title))], 0));
var G__48348 = rum.core.react(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)));
var G__48349 = data;
var G__48350 = (rum.core.react(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"primary-rx","primary-rx",-1656848904))) > (0));
return (predict_prostate.results.curves.curves_container.cljs$core$IFn$_invoke$arity$4 ? predict_prostate.results.curves.curves_container.cljs$core$IFn$_invoke$arity$4(G__48347,G__48348,G__48349,G__48350) : predict_prostate.results.curves.curves_container.call(null,G__48347,G__48348,G__48349,G__48350));
})()),sablono.interpreter.interpret(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(translations.config.translation_profile,new cljs.core.Keyword(null,"edit","edit",-1641834166)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(16)], null)], null),(ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(x_title) : ttt.call(null,x_title))], null)], null):null))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs48346),sablono.interpreter.interpret((function (){var G__48351 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(svg.space.space(outer,margin,padding,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),predict_prostate.state.run_time.N], null),(3),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(100)], null),(5)),new cljs.core.Keyword(null,"y-title","y-title",220785852),(ttt_STAR_.cljs$core$IFn$_invoke$arity$1 ? ttt_STAR_.cljs$core$IFn$_invoke$arity$1(y_title) : ttt_STAR_.call(null,y_title)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"x-title","x-title",698054088),(ttt_STAR_.cljs$core$IFn$_invoke$arity$1 ? ttt_STAR_.cljs$core$IFn$_invoke$arity$1(x_title) : ttt_STAR_.call(null,x_title))], 0));
var G__48352 = rum.core.react(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)));
var G__48353 = data;
var G__48354 = (rum.core.react(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"primary-rx","primary-rx",-1656848904))) > (0));
return (predict_prostate.results.curves.curves_container.cljs$core$IFn$_invoke$arity$4 ? predict_prostate.results.curves.curves_container.cljs$core$IFn$_invoke$arity$4(G__48351,G__48352,G__48353,G__48354) : predict_prostate.results.curves.curves_container.call(null,G__48351,G__48352,G__48353,G__48354));
})()),sablono.interpreter.interpret(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(translations.config.translation_profile,new cljs.core.Keyword(null,"edit","edit",-1641834166)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(16)], null)], null),(ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(x_title) : ttt.call(null,x_title))], null)], null):null))], null)));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,rum.core.static$,rum.core.local.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword("predict-prostate.results.curves","data","predict-prostate.results.curves/data",-1253026131))], null),"curves");
predict_prostate.results.curves.benefit = (function predict_prostate$results$curves$benefit(data,tk){
var G__48355 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(data,(10));
return (tk.cljs$core$IFn$_invoke$arity$1 ? tk.cljs$core$IFn$_invoke$arity$1(G__48355) : tk.call(null,G__48355));
});
predict_prostate.results.curves.some_benefit_QMARK_ = (function predict_prostate$results$curves$some_benefit_QMARK_(data,treatment_key){
return (predict_prostate.results.curves.benefit(data,treatment_key) > (0));
});
predict_prostate.results.curves.legend_item = rum.core.build_defc((function (p__48356){
var map__48357 = p__48356;
var map__48357__$1 = cljs.core.__destructure_map(map__48357);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48357__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var extra_style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48357__$1,new cljs.core.Keyword(null,"extra-style","extra-style",-1804716577));
var icon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48357__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
return React.createElement("div",null,React.createElement("div",({"key": (3), "style": sablono.interpreter.attributes(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),"50px",new cljs.core.Keyword(null,"display","display",242065432),"inline-block",new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"top",new cljs.core.Keyword(null,"text-align","text-align",1786091845),"right"], null),extra_style], 0)))}),sablono.interpreter.interpret((cljs.core.truth_(icon)?icon:null))),React.createElement("div",({"key": (4), "style": ({"display": "inline-block", "marginLeft": "10px", "width": "calc(100% - 60px)"})}),(function (){var attrs48358 = label;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"p",((cljs.core.map_QMARK_(attrs48358))?sablono.interpreter.attributes(attrs48358):null),((cljs.core.map_QMARK_(attrs48358))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs48358)], null)));
})()));
}),null,"legend-item");
predict_prostate.results.curves.legend = rum.core.build_defc((function (data){
return React.createElement("div",({"width": "100%"}),React.createElement("div",({"style": ({"borderTop": ["4px dashed ",predict_prostate.results.util.dashed_stroke].join(''), "width": "50px", "display": "inline-block", "marginTop": "15px", "verticalAlign": "top"})})),React.createElement("div",({"style": ({"display": "inline-block", "marginLeft": "10px", "width": "calc(100% - 60px)"})}),React.createElement("p",null," Survival excluding deaths from prostate cancer")),sablono.interpreter.interpret((((rum.core.react(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"primary-rx","primary-rx",-1656848904))) > (0)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),(function (){var G__48361 = (predict_prostate.results.util.fill.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.util.fill.cljs$core$IFn$_invoke$arity$1((1)) : predict_prostate.results.util.fill.call(null,(1)));
return (predict_prostate.components.primitives.dead_icon.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.components.primitives.dead_icon.cljs$core$IFn$_invoke$arity$1(G__48361) : predict_prostate.components.primitives.dead_icon.call(null,G__48361));
})()," Estimated survival with radical treatment"], null):null)),React.createElement("div",null,React.createElement("div",({"key": (3), "style": ({"width": "50px", "display": "inline-block", "marginTop": "15px", "verticalAlign": "top", "textAlign": "right"})}),sablono.interpreter.interpret((function (){var G__48364 = predict_prostate.results.util.treatment_fills((0));
return (predict_prostate.components.primitives.dead_icon.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.components.primitives.dead_icon.cljs$core$IFn$_invoke$arity$1(G__48364) : predict_prostate.components.primitives.dead_icon.call(null,G__48364));
})())),React.createElement("div",({"key": (4), "style": ({"display": "inline-block", "marginLeft": "10px", "width": "calc(100% - 60px)"})}),React.createElement("p",null," Conservative management"))));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"legend");
predict_prostate.results.curves.legend2 = rum.core.build_defc((function (plot_style,radical_QMARK_,ttt){
return React.createElement("div",({"width": "100%"}),sablono.interpreter.interpret((function (){var G__48365 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),(function (){var G__48366 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lgd2","sedfpc","lgd2/sedfpc",-1163952161),"Survival excluding deaths from prostate cancer"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__48366) : ttt.call(null,G__48366));
})(),new cljs.core.Keyword(null,"extra-style","extra-style",-1804716577),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border-top","border-top",-158897573),["5px dashed ",predict_prostate.results.util.dashed_stroke].join(''),new cljs.core.Keyword(null,"margin-top","margin-top",392161226),(9)], null),new cljs.core.Keyword(null,"icon","icon",1679606541),null], null);
return (predict_prostate.results.curves.legend_item.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.curves.legend_item.cljs$core$IFn$_invoke$arity$1(G__48365) : predict_prostate.results.curves.legend_item.call(null,G__48365));
})()),sablono.interpreter.interpret((cljs.core.truth_(radical_QMARK_)?(function (){var pred__48367 = cljs.core._EQ_;
var expr__48368 = plot_style;
if(cljs.core.truth_((pred__48367.cljs$core$IFn$_invoke$arity$2 ? pred__48367.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"area1","area1",-316994623),expr__48368) : pred__48367.call(null,new cljs.core.Keyword(null,"area1","area1",-316994623),expr__48368)))){
var G__48370 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),(function (){var G__48371 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lgd2","eswrt","lgd2/eswrt",1641414781),"Estimated survival with radical treatment"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__48371) : ttt.call(null,G__48371));
})(),new cljs.core.Keyword(null,"extra-style","extra-style",-1804716577),null,new cljs.core.Keyword(null,"icon","icon",1679606541),(function (){var G__48372 = predict_prostate.results.util.treatment_fills((1));
return (predict_prostate.components.primitives.dead_icon.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.components.primitives.dead_icon.cljs$core$IFn$_invoke$arity$1(G__48372) : predict_prostate.components.primitives.dead_icon.call(null,G__48372));
})()], null);
return (predict_prostate.results.curves.legend_item.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.curves.legend_item.cljs$core$IFn$_invoke$arity$1(G__48370) : predict_prostate.results.curves.legend_item.call(null,G__48370));
} else {
if(cljs.core.truth_((pred__48367.cljs$core$IFn$_invoke$arity$2 ? pred__48367.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"line2","line2",-1975668782),expr__48368) : pred__48367.call(null,new cljs.core.Keyword(null,"line2","line2",-1975668782),expr__48368)))){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var G__48373 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),(function (){var G__48374 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lgd2","protbae","lgd2/protbae",-1147677642),"Potential range of treatment benefit above estimate"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__48374) : ttt.call(null,G__48374));
})(),new cljs.core.Keyword(null,"extra-style","extra-style",-1804716577),null,new cljs.core.Keyword(null,"icon","icon",1679606541),(function (){var G__48375 = new cljs.core.Keyword(null,"radical-above","radical-above",-674575611).cljs$core$IFn$_invoke$arity$1((plot_style.cljs$core$IFn$_invoke$arity$1 ? plot_style.cljs$core$IFn$_invoke$arity$1(predict_prostate.results.util.fills_by_style_STAR_) : plot_style.call(null,predict_prostate.results.util.fills_by_style_STAR_)));
return (predict_prostate.components.primitives.dead_icon.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.components.primitives.dead_icon.cljs$core$IFn$_invoke$arity$1(G__48375) : predict_prostate.components.primitives.dead_icon.call(null,G__48375));
})()], null);
return (predict_prostate.results.curves.legend_item.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.curves.legend_item.cljs$core$IFn$_invoke$arity$1(G__48373) : predict_prostate.results.curves.legend_item.call(null,G__48373));
})(),(function (){var G__48376 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),(function (){var G__48377 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lgd2","eswrt","lgd2/eswrt",1641414781),"Estimated survival with radical treatment"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__48377) : ttt.call(null,G__48377));
})(),new cljs.core.Keyword(null,"extra-style","extra-style",-1804716577),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border-top","border-top",-158897573),["3px solid ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(predict_prostate.results.util.treatment_fills((0)))].join(''),new cljs.core.Keyword(null,"margin-top","margin-top",392161226),(9)], null),new cljs.core.Keyword(null,"icon","icon",1679606541),null], null);
return (predict_prostate.results.curves.legend_item.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.curves.legend_item.cljs$core$IFn$_invoke$arity$1(G__48376) : predict_prostate.results.curves.legend_item.call(null,G__48376));
})(),(function (){var G__48378 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),(function (){var G__48379 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lgd2","protbbe","lgd2/protbbe",-1321727644),"Potential range of treatment benefit below estimate"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__48379) : ttt.call(null,G__48379));
})(),new cljs.core.Keyword(null,"extra-style","extra-style",-1804716577),null,new cljs.core.Keyword(null,"icon","icon",1679606541),(function (){var G__48380 = new cljs.core.Keyword(null,"radical","radical",1159030213).cljs$core$IFn$_invoke$arity$1((plot_style.cljs$core$IFn$_invoke$arity$1 ? plot_style.cljs$core$IFn$_invoke$arity$1(predict_prostate.results.util.fills_by_style_STAR_) : plot_style.call(null,predict_prostate.results.util.fills_by_style_STAR_)));
return (predict_prostate.components.primitives.dead_icon.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.components.primitives.dead_icon.cljs$core$IFn$_invoke$arity$1(G__48380) : predict_prostate.components.primitives.dead_icon.call(null,G__48380));
})()], null);
return (predict_prostate.results.curves.legend_item.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.curves.legend_item.cljs$core$IFn$_invoke$arity$1(G__48378) : predict_prostate.results.curves.legend_item.call(null,G__48378));
})()], null);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__48368)].join('')));
}
}
})():null)),sablono.interpreter.interpret((function (){var G__48381 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),(function (){var G__48382 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lgd2","icm","lgd2/icm",-1326449508),"Initial conservative management"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__48382) : ttt.call(null,G__48382));
})(),new cljs.core.Keyword(null,"icon","icon",1679606541),(function (){var G__48383 = predict_prostate.results.util.treatment_fills((0));
return (predict_prostate.components.primitives.dead_icon.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.components.primitives.dead_icon.cljs$core$IFn$_invoke$arity$1(G__48383) : predict_prostate.components.primitives.dead_icon.call(null,G__48383));
})()], null);
return (predict_prostate.results.curves.legend_item.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.curves.legend_item.cljs$core$IFn$_invoke$arity$1(G__48381) : predict_prostate.results.curves.legend_item.call(null,G__48381));
})()));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"legend2");
predict_prostate.results.curves.extract_data = (function predict_prostate$results$curves$extract_data(results,radical_QMARK_){

var one_sum = (function (p1__48384_SHARP_,p2__48385_SHARP_){
return ((100) * ((1) - (p1__48384_SHARP_ + p2__48385_SHARP_)));
});
var radical_survival = (cljs.core.truth_(radical_QMARK_)?cljs.core.map.cljs$core$IFn$_invoke$arity$3(one_sum,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(results,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"radical","radical",1159030213),new cljs.core.Keyword(null,"pred-PC-cum","pred-PC-cum",1965177836)], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(results,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"radical","radical",1159030213),new cljs.core.Keyword(null,"pred-NPC-cum","pred-NPC-cum",-1636287417)], null))):null);
var conservative_survival = cljs.core.map.cljs$core$IFn$_invoke$arity$3(one_sum,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(results,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"conservative","conservative",-1075714010),new cljs.core.Keyword(null,"pred-PC-cum","pred-PC-cum",1965177836)], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(results,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"conservative","conservative",-1075714010),new cljs.core.Keyword(null,"pred-NPC-cum","pred-NPC-cum",-1636287417)], null)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [conservative_survival,(cljs.core.truth_(radical_QMARK_)?radical_survival:null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__48386_SHARP_){
return ((100) * p1__48386_SHARP_);
}),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(results,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"conservative","conservative",-1075714010),new cljs.core.Keyword(null,"NPC-survival","NPC-survival",-1399930619)], null)))], null);
});
predict_prostate.results.curves.results_in_curves = rum.core.build_defcs((function (state,p__48387){
var map__48388 = p__48387;
var map__48388__$1 = cljs.core.__destructure_map(map__48388);
var printable = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48388__$1,new cljs.core.Keyword(null,"printable","printable",-928999004));
var ttt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48388__$1,new cljs.core.Keyword(null,"ttt","ttt",1858561240));
var width = rum.core.react(new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(state));
var side_by_side = (function (){var or__4212__auto__ = printable;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (width > (600));
}
})();
var radical_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),rum.core.react(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"primary-rx","primary-rx",-1656848904))));
var data = predict_prostate.results.curves.extract_data(rum.core.react(predict_prostate.state.run_time.results_cursor),radical_QMARK_);
var plot_style = rum.core.react(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)));
return React.createElement("div",({"style": ({"position": "relative"})}),React.createElement("p",({"style": ({"marginTop": "15px"})}),sablono.interpreter.interpret((function (){var G__48389 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("curves","text1","curves/text1",1739254328),"This graph shows the percentage of men surviving up to"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__48389) : ttt.call(null,G__48389));
})())," ",sablono.interpreter.interpret(predict_prostate.state.run_time.N)," ",sablono.interpreter.interpret((function (){var G__48390 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("curves","text2","curves/text2",-687894014),"years. These results are based on the inputs and treatment you selected"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__48390) : ttt.call(null,G__48390));
})())),React.createElement("div",({"style": ({"width": (cljs.core.truth_(side_by_side)?"70%":"100%"), "maxWidth": (350), "display": "inline-block"})}),React.createElement("div",({"style": ({"padding": "15px 40px 0px 0px"})}),sablono.interpreter.interpret((predict_prostate.results.curves.curves.cljs$core$IFn$_invoke$arity$2 ? predict_prostate.results.curves.curves.cljs$core$IFn$_invoke$arity$2(data,ttt) : predict_prostate.results.curves.curves.call(null,data,ttt))))),React.createElement("div",({"style": ({"paddingTop": "30px", "verticalAlign": "top", "width": (cljs.core.truth_(side_by_side)?"30%":"100%"), "display": "inline-block"})}),sablono.interpreter.interpret((predict_prostate.results.curves.legend2.cljs$core$IFn$_invoke$arity$3 ? predict_prostate.results.curves.legend2.cljs$core$IFn$_invoke$arity$3(plot_style,radical_QMARK_,ttt) : predict_prostate.results.curves.legend2.call(null,plot_style,radical_QMARK_,ttt)))));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$,rum.core.reactive,predict_prostate.mixins.sizing_mixin], null),"results-in-curves");

//# sourceMappingURL=predict_prostate.results.curves.js.map
