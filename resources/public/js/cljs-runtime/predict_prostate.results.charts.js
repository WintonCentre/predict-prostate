goog.provide('predict_prostate.results.charts');
predict_prostate.results.charts.border = (function predict_prostate$results$charts$border(fill){
return ["1px solid ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fill)].join('');
});
predict_prostate.results.charts.arrow = (function predict_prostate$results$charts$arrow(fill){
return ["2ex solid ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fill)].join('');
});
predict_prostate.results.charts.arrow_color = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(204),(238),(248)], null);
predict_prostate.results.charts.arrow_fill = predict_prostate.results.charts.arrow(["rgb(",clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",predict_prostate.results.charts.arrow_color),")"].join(''));
predict_prostate.results.charts.z_front = (20);
predict_prostate.results.charts.z_back = (1);
predict_prostate.results.charts.stacked_bar_chart_style = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"chart","chart",1173225425),"chart--G__225797"], null);

cljs_css_modules.runtime.inject_style_BANG_(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(garden.core.css,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [".chart--G__225797",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"page-break-before","page-break-before",-944104780),"always"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [".chart-wrapper",new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"white",new cljs.core.Keyword(null,"color","color",1011675173),"black",new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"1ex",new cljs.core.Keyword(null,"min-height","min-height",398480837),"300px"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [".stacked-bar",new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"bottom","bottom",-1550509018),"8ex",new cljs.core.Keyword(null,"top","top",-1856271961),"2ex",new cljs.core.Keyword(null,"left","left",-399115937),"16%",new cljs.core.Keyword(null,"right","right",-452581833),"16%",new cljs.core.Keyword(null,"background-color","background-color",570434026),"whitesmoke",new cljs.core.Keyword(null,"color","color",1011675173),"black"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [".h-tick",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"0%"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [".h-label",new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"top","top",-1856271961),(0),new cljs.core.Keyword(null,"color","color",1011675173),"#888",new cljs.core.Keyword(null,"left","left",-399115937),"-3em",new cljs.core.Keyword(null,"width","width",-384071477),"calc(100% + 6em)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [".left",new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"left","left",-399115937),"-0.5em",new cljs.core.Keyword(null,"width","width",-384071477),"3em",new cljs.core.Keyword(null,"text-align","text-align",1786091845),"right",new cljs.core.Keyword(null,"top","top",-1856271961),"-1ex"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [".right",new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"right","right",-452581833),"-0.5em",new cljs.core.Keyword(null,"width","width",-384071477),"3em",new cljs.core.Keyword(null,"text-align","text-align",1786091845),"left",new cljs.core.Keyword(null,"top","top",-1856271961),"-1ex"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [".line",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),"2px solid #CCC"], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [".bar",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"background-color","background-color",570434026),"white",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #CCC",new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),"none"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [".bar-label",new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"color","color",1011675173),"black",new cljs.core.Keyword(null,"left","left",-399115937),"0%",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1.2em"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [".bar-item",cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"-webkit-transition-timing-function","-webkit-transition-timing-function",-174259456),new cljs.core.Keyword(null,"-moz-transition-timing-function","-moz-transition-timing-function",1479147813),new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"transition-timing-function","transition-timing-function",-549540522),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"-moz-transition","-moz-transition",1010651163),new cljs.core.Keyword(null,"-webkit-transition","-webkit-transition",1908091196),new cljs.core.Keyword(null,"left","left",-399115937)],["ease-out","ease-out","height 300ms, bottom 300ms, opacity 3000ms","100%","ease-out","absolute","height 300ms, bottom 300ms, opacity 300ms","height 300ms, bottom 300ms, opacity 300ms",(0)]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [".bar-item-label",new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center",new cljs.core.Keyword(null,"bottom","bottom",-1550509018),"1.37ex",new cljs.core.Keyword(null,"border","border",1444987323),"1px none red"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [".callout",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"transition","transition",765692007),"height 300ms, bottom 300ms",new cljs.core.Keyword(null,"transition-timing-function","transition-timing-function",-549540522),"ease-out"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [".box",new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"width","width",-384071477),"7em",new cljs.core.Keyword(null,"height","height",1025178622),"10ex",new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"bottom","bottom",-1550509018),"-4.7ex",new cljs.core.Keyword(null,"padding","padding",1660304693),"0.5ex 1ex 0.3ex 0.5ex",new cljs.core.Keyword(null,"text-align","text-align",1786091845),"right",new cljs.core.Keyword(null,"color","color",1011675173),"#5A8FA9",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"0.5ex"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [".total",new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"left","left",-399115937),"0.6ex",new cljs.core.Keyword(null,"bottom","bottom",-1550509018),"1.3ex",new cljs.core.Keyword(null,"color","color",1011675173),"#5A8FA9",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1.2em"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [".arrow",new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"bottom","bottom",-1550509018),"-1ex",new cljs.core.Keyword(null,"width","width",-384071477),(0),new cljs.core.Keyword(null,"height","height",1025178622),(0),new cljs.core.Keyword(null,"border-top","border-top",-158897573),"1ex solid transparent",new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),"1ex solid transparent"], null)], null)], null)], null)], null)], null)),"predict-prostate.results.charts","stacked-bar-chart-style");
/**
 * Left or Right callout
 */
predict_prostate.results.charts._LT__n_PERCENT__text__GT_ = rum.core.build_defc((function (p__225800){
var map__225802 = p__225800;
var map__225802__$1 = (((((!((map__225802 == null))))?(((((map__225802.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__225802.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__225802):map__225802);
var __GT__QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__225802__$1,new cljs.core.Keyword(null,"->?","->?",-2119349094),true);
var percent = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__225802__$1,new cljs.core.Keyword(null,"percent","percent",2031453817),(50));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__225802__$1,new cljs.core.Keyword(null,"text","text",-1790561697),"half");
var fill = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__225802__$1,new cljs.core.Keyword(null,"fill","fill",883462889),"red");
return React.createElement("div",({"style": ({"left": (cljs.core.truth_(__GT__QMARK_)?(0):null), "right": (cljs.core.truth_(__GT__QMARK_)?null:(0)), "bottom": [cljs.core.str.cljs$core$IFn$_invoke$arity$1(percent),"%"].join('')}), "className": "callout"}),React.createElement("img",({"src": cljs.core.apply.cljs$core$IFn$_invoke$arity$2(predict_prostate.results.util.fill_data_url,predict_prostate.results.charts.arrow_color), "style": ({"padding": (0), "textAlign": "center", "left": (cljs.core.truth_(__GT__QMARK_)?"-15.5ex":null), "right": (cljs.core.truth_(__GT__QMARK_)?null:"-15.5ex")}), "className": "box"})),React.createElement("div",({"style": ({"textAlign": "center", "left": (cljs.core.truth_(__GT__QMARK_)?"-15.5ex":null), "right": (cljs.core.truth_(__GT__QMARK_)?null:"-15.5ex")}), "className": "box"}),React.createElement("span",({"style": ({"fontSize": "1.2em"})}),sablono.interpreter.interpret([cljs.core.str.cljs$core$IFn$_invoke$arity$1(predict_prostate.results.util.avoid_decimals(Number(percent))),"% "].join(''))),sablono.interpreter.interpret(text)),React.createElement("div",({"style": ({"borderLeft": (cljs.core.truth_(__GT__QMARK_)?predict_prostate.results.charts.arrow_fill:null), "borderRight": (cljs.core.truth_(__GT__QMARK_)?null:predict_prostate.results.charts.arrow_fill), "left": (cljs.core.truth_(__GT__QMARK_)?null:(0)), "right": (cljs.core.truth_(__GT__QMARK_)?(0):null)}), "className": "arrow"})));
}),null,"<-n%-text->");
/**
 * Left callout pointing right
 */
predict_prostate.results.charts.n_PERCENT__text__GT_ = rum.core.build_defc((function (props,fill){
return sablono.interpreter.interpret((function (){var G__225806 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(props,new cljs.core.Keyword(null,"->?","->?",-2119349094),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"fill","fill",883462889),fill], 0));
return (predict_prostate.results.charts._LT__n_PERCENT__text__GT_.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.charts._LT__n_PERCENT__text__GT_.cljs$core$IFn$_invoke$arity$1(G__225806) : predict_prostate.results.charts._LT__n_PERCENT__text__GT_.call(null,G__225806));
})());
}),null,"n%-text->");
/**
 * Right callout pointing left
 */
predict_prostate.results.charts._LT__n_PERCENT__text = rum.core.build_defc((function (props,fill){
return sablono.interpreter.interpret((function (){var G__225808 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(props,new cljs.core.Keyword(null,"->?","->?",-2119349094),false,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"fill","fill",883462889),fill], 0));
return (predict_prostate.results.charts._LT__n_PERCENT__text__GT_.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.charts._LT__n_PERCENT__text__GT_.cljs$core$IFn$_invoke$arity$1(G__225808) : predict_prostate.results.charts._LT__n_PERCENT__text__GT_.call(null,G__225808));
})());
}),null,"<-n%-text");
predict_prostate.results.charts.h_tick_line = rum.core.build_defc((function (h){
return React.createElement("div",({"style": ({"position": "absolute", "bottom": h}), "className": "h-tick"}),React.createElement("div",({"key": (1), "className": "line"})),React.createElement("div",({"key": (2), "className": "h-label"}),React.createElement("div",({"key": (1), "className": "left"}),sablono.interpreter.interpret(h)),React.createElement("div",({"key": (2), "className": "right"}),sablono.interpreter.interpret(h))));
}),null,"h-tick-line");
/**
 * A white label for a dark background which also prints in white.
 *   SVG is about the only way to force printers to emit text in white.
 */
predict_prostate.results.charts.bar_item_label = rum.core.build_defc((function (p__225813){
var map__225814 = p__225813;
var map__225814__$1 = (((((!((map__225814 == null))))?(((((map__225814.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__225814.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__225814):map__225814);
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__225814__$1,new cljs.core.Keyword(null,"height","height",1025178622));
return React.createElement("div",({"style": ({"width": "100%", "height": "50%"}), "className": "bar-item-label"}),React.createElement("svg",({"height": (30), "width": "100%"}),React.createElement("text",({"x": "50%", "y": (13), "fill": "#ffffff", "textAnchor": "middle"}),sablono.interpreter.interpret([cljs.core.str.cljs$core$IFn$_invoke$arity$1(height),"%"].join('')))));
}),null,"bar-item-label");
/**
 * A stacked bar item
 */
predict_prostate.results.charts.bar_item = rum.core.build_defcs((function (state,p__225819){
var map__225820 = p__225819;
var map__225820__$1 = (((((!((map__225820 == null))))?(((((map__225820.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__225820.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__225820):map__225820);
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__225820__$1,new cljs.core.Keyword(null,"height","height",1025178622),(0));
var radical = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__225820__$1,new cljs.core.Keyword(null,"radical","radical",1159030213));
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__225820__$1,new cljs.core.Keyword(null,"key","key",-1516042587),(1));
var bottom = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__225820__$1,new cljs.core.Keyword(null,"bottom","bottom",-1550509018),(0));
var _QMARK_above = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__225820__$1,new cljs.core.Keyword(null,"?above","?above",-2015534809),true);
var item_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__225820__$1,new cljs.core.Keyword(null,"item-id","item-id",-1804511607));
var fill = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__225820__$1,new cljs.core.Keyword(null,"fill","fill",883462889),"red");
var plot_style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__225820__$1,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355));
var background_url = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__225820__$1,new cljs.core.Keyword(null,"background-url","background-url",26809970),"");
var callout_text = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__225820__$1,new cljs.core.Keyword(null,"callout-text","callout-text",-690023756),"Label here");
return React.createElement("div",({"key": key}),sablono.interpreter.interpret(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(item_id,(0))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(plot_style,new cljs.core.Keyword(null,"area1","area1",-316994623)))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.bar-item","img.bar-item",-516942192),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),background_url,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"bottom","bottom",-1550509018),bottom], null)], null)], null):null)),sablono.interpreter.interpret(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(item_id,(1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.bar-item","img.bar-item",-516942192),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),background_url,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"bottom","bottom",-1550509018),bottom], null)], null)], null):null)),React.createElement("div",({"key": (1), "style": ({"height": height, "bottom": bottom, "borderTop": (cljs.core.truth_(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),item_id))?(function (){var and__4115__auto__ = radical;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"line2","line2",-1975668782),plot_style);
} else {
return and__4115__auto__;
}
})():false))?["3px solid ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(predict_prostate.results.util.treatment_fills((0)))].join(''):"none")}), "className": "bar-item"}),(function (){var height__$1 = predict_prostate.results.util.avoid_decimals(parseFloat(height));
return sablono.interpreter.interpret(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(plot_style,new cljs.core.Keyword(null,"area1","area1",-316994623))) && ((height__$1 >= predict_prostate.results.util.min_label_percent))))?(function (){var G__225825 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),(1),new cljs.core.Keyword(null,"height","height",1025178622),height__$1], null);
return (predict_prostate.results.charts.bar_item_label.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.charts.bar_item_label.cljs$core$IFn$_invoke$arity$1(G__225825) : predict_prostate.results.charts.bar_item_label.call(null,G__225825));
})():null));
})()));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$], null),"bar-item");
predict_prostate.results.charts.bar_label = rum.core.build_defc((function (p__225826){
var map__225827 = p__225826;
var map__225827__$1 = (((((!((map__225827 == null))))?(((((map__225827.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__225827.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__225827):map__225827);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__225827__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__225827__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var top_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__225827__$1,new cljs.core.Keyword(null,"top?","top?",-1883283796));

return React.createElement("div",({"key": key, "style": sablono.interpreter.attributes((cljs.core.truth_(top_QMARK_)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"top","top",-1856271961),"-3.5ex"], null):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bottom","bottom",-1550509018),"-3.5ex"], null))), "className": "bar-label"}),sablono.interpreter.interpret(text));
}),null,"bar-label");
/**
 * Render a bar and its callouts.
 *              Callouts are currently specific to a treatments view rather than a cause of death view.
 */
predict_prostate.results.charts.bar = rum.core.build_defc((function (p__225835){
var map__225836 = p__225835;
var map__225836__$1 = (((((!((map__225836 == null))))?(((((map__225836.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__225836.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__225836):map__225836);
var params = map__225836__$1;
var oth = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__225836__$1,new cljs.core.Keyword(null,"oth","oth",901151226));
var callout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__225836__$1,new cljs.core.Keyword(null,"callout","callout",1420070683));
var dataset = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__225836__$1,new cljs.core.Keyword(null,"dataset","dataset",1159262238),cljs.core.PersistentVector.EMPTY);
var left = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__225836__$1,new cljs.core.Keyword(null,"left","left",-399115937));
var label_over = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__225836__$1,new cljs.core.Keyword(null,"label-over","label-over",-1632412125),null);
var label_under = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__225836__$1,new cljs.core.Keyword(null,"label-under","label-under",-1646119292),null);
var radical = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__225836__$1,new cljs.core.Keyword(null,"radical","radical",1159030213));
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__225836__$1,new cljs.core.Keyword(null,"key","key",-1516042587),(1));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__225836__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var plot_style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__225836__$1,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355));
var right = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__225836__$1,new cljs.core.Keyword(null,"right","right",-452581833));
var n = cljs.core.count(dataset);
var sums = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.reductions.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.cons((0),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"value","value",305978217),dataset))));
var inline_style = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),"100%"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"left","left",-399115937),left,new cljs.core.Keyword(null,"right","right",-452581833),right,new cljs.core.Keyword(null,"width","width",-384071477),width], null)], 0));
return React.createElement("div",({"key": key, "style": sablono.interpreter.attributes(inline_style), "className": "bar"}),React.createElement("div",({"style": ({"pointerEvents": "none", "bottom": (0), "top": ["calc(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(oth),"% - 2px)"].join(''), "borderTop": "4px dashed #FA0", "zIndex": (0), "right": "-5px", "position": "absolute", "left": "-5px", "margin": "0 5px"})}),React.createElement("img",({"src": predict_prostate.results.util.hex_data_url((cljs.core.truth_(radical)?new cljs.core.Keyword(null,"radical-above","radical-above",-674575611).cljs$core$IFn$_invoke$arity$1((plot_style.cljs$core$IFn$_invoke$arity$1 ? plot_style.cljs$core$IFn$_invoke$arity$1(predict_prostate.results.util.fills_by_style_STAR_) : plot_style.call(null,predict_prostate.results.util.fills_by_style_STAR_))):"#ffffff")), "style": ({"height": "100%"}), "className": "bar-item"}))),(function (){var attrs225843 = (function (){var G__225844 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),(2),new cljs.core.Keyword(null,"text","text",-1790561697),label_under,new cljs.core.Keyword(null,"top?","top?",-1883283796),false], null);
return (predict_prostate.results.charts.bar_label.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.charts.bar_label.cljs$core$IFn$_invoke$arity$1(G__225844) : predict_prostate.results.charts.bar_label.call(null,G__225844));
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs225843))?sablono.interpreter.attributes(attrs225843):null),((cljs.core.map_QMARK_(attrs225843))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(null),sablono.interpreter.interpret(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__225833_SHARP_,p2__225834_SHARP_){
return rum.core.with_key((function (){var G__225845 = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"bottom","bottom",-1550509018),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((sums.cljs$core$IFn$_invoke$arity$1 ? sums.cljs$core$IFn$_invoke$arity$1(p1__225833_SHARP_) : sums.call(null,p1__225833_SHARP_))),"%"].join(''),new cljs.core.Keyword(null,"height","height",1025178622),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p2__225834_SHARP_)),"%"].join(''),new cljs.core.Keyword(null,"background-url","background-url",26809970),predict_prostate.results.util.hex_data_url((function (){var G__225847 = (plot_style.cljs$core$IFn$_invoke$arity$1 ? plot_style.cljs$core$IFn$_invoke$arity$1(predict_prostate.results.util.fills_by_style_STAR_) : plot_style.call(null,predict_prostate.results.util.fills_by_style_STAR_));
var fexpr__225846 = new cljs.core.Keyword(null,"treatment-key","treatment-key",-2085594499).cljs$core$IFn$_invoke$arity$1(p2__225834_SHARP_);
return (fexpr__225846.cljs$core$IFn$_invoke$arity$1 ? fexpr__225846.cljs$core$IFn$_invoke$arity$1(G__225847) : fexpr__225846.call(null,G__225847));
})()),new cljs.core.Keyword(null,"?above","?above",-2015534809),(right == null),new cljs.core.Keyword(null,"item-id","item-id",-1804511607),p1__225833_SHARP_,new cljs.core.Keyword(null,"radical","radical",1159030213),radical,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),plot_style], null);
return (predict_prostate.results.charts.bar_item.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.charts.bar_item.cljs$core$IFn$_invoke$arity$1(G__225845) : predict_prostate.results.charts.bar_item.call(null,G__225845));
})(),(p1__225833_SHARP_ + (1)));
}),dataset)),sablono.interpreter.interpret((cljs.core.truth_(callout)?rum.core.with_key((function (){var G__225849 = (function (){var G__225850 = (n - (1));
return (predict_prostate.results.util.fill.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.util.fill.cljs$core$IFn$_invoke$arity$1(G__225850) : predict_prostate.results.util.fill.call(null,G__225850));
})();
return (callout.cljs$core$IFn$_invoke$arity$1 ? callout.cljs$core$IFn$_invoke$arity$1(G__225849) : callout.call(null,G__225849));
})(),(3)):null))], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs225843),sablono.interpreter.interpret(null),sablono.interpreter.interpret(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__225833_SHARP_,p2__225834_SHARP_){
return rum.core.with_key((function (){var G__225852 = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"bottom","bottom",-1550509018),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((sums.cljs$core$IFn$_invoke$arity$1 ? sums.cljs$core$IFn$_invoke$arity$1(p1__225833_SHARP_) : sums.call(null,p1__225833_SHARP_))),"%"].join(''),new cljs.core.Keyword(null,"height","height",1025178622),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p2__225834_SHARP_)),"%"].join(''),new cljs.core.Keyword(null,"background-url","background-url",26809970),predict_prostate.results.util.hex_data_url((function (){var G__225855 = (plot_style.cljs$core$IFn$_invoke$arity$1 ? plot_style.cljs$core$IFn$_invoke$arity$1(predict_prostate.results.util.fills_by_style_STAR_) : plot_style.call(null,predict_prostate.results.util.fills_by_style_STAR_));
var fexpr__225854 = new cljs.core.Keyword(null,"treatment-key","treatment-key",-2085594499).cljs$core$IFn$_invoke$arity$1(p2__225834_SHARP_);
return (fexpr__225854.cljs$core$IFn$_invoke$arity$1 ? fexpr__225854.cljs$core$IFn$_invoke$arity$1(G__225855) : fexpr__225854.call(null,G__225855));
})()),new cljs.core.Keyword(null,"?above","?above",-2015534809),(right == null),new cljs.core.Keyword(null,"item-id","item-id",-1804511607),p1__225833_SHARP_,new cljs.core.Keyword(null,"radical","radical",1159030213),radical,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),plot_style], null);
return (predict_prostate.results.charts.bar_item.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.charts.bar_item.cljs$core$IFn$_invoke$arity$1(G__225852) : predict_prostate.results.charts.bar_item.call(null,G__225852));
})(),(p1__225833_SHARP_ + (1)));
}),dataset)),sablono.interpreter.interpret((cljs.core.truth_(callout)?rum.core.with_key((function (){var G__225858 = (function (){var G__225859 = (n - (1));
return (predict_prostate.results.util.fill.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.util.fill.cljs$core$IFn$_invoke$arity$1(G__225859) : predict_prostate.results.util.fill.call(null,G__225859));
})();
return (callout.cljs$core$IFn$_invoke$arity$1 ? callout.cljs$core$IFn$_invoke$arity$1(G__225858) : callout.call(null,G__225858));
})(),(3)):null))], null)));
})());
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$], null),"bar");
/**
 * This currently supports a left and a right stacked bar with callouts left and right and top
 */
predict_prostate.results.charts.inner_stacked_bar = rum.core.build_defc((function (p__225870){
var map__225871 = p__225870;
var map__225871__$1 = (((((!((map__225871 == null))))?(((((map__225871.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__225871.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__225871):map__225871);
var subtitle_under = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__225871__$1,new cljs.core.Keyword(null,"subtitle-under","subtitle-under",-1133908191));
var radical = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__225871__$1,new cljs.core.Keyword(null,"radical","radical",1159030213));
var plot_style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__225871__$1,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355));
var dotted_orange = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__225871__$1,new cljs.core.Keyword(null,"dotted-orange","dotted-orange",-573056274));
var conservative_survival = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__225871__$1,new cljs.core.Keyword(null,"conservative-survival","conservative-survival",-852356338));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__225871__$1,new cljs.core.Keyword(null,"title","title",636505583));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__225871__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var radical_benefit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__225871__$1,new cljs.core.Keyword(null,"radical-benefit","radical-benefit",1730049395));
var ttt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__225871__$1,new cljs.core.Keyword(null,"ttt","ttt",1858561240));
return React.createElement("div",null,React.createElement("div",({"key": (1), "style": sablono.interpreter.attributes(style), "className": "stacked-bar"}),sablono.interpreter.interpret((cljs.core.truth_(title)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"t2",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"top","top",-1856271961),"-5.5ex",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center"], null)], null),title], null)], null):null)),sablono.interpreter.interpret(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__225863_SHARP_,p2__225862_SHARP_){
return rum.core.with_key((function (){var G__225879 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__225862_SHARP_),"%"].join('');
return (predict_prostate.results.charts.h_tick_line.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.charts.h_tick_line.cljs$core$IFn$_invoke$arity$1(G__225879) : predict_prostate.results.charts.h_tick_line.call(null,G__225879));
})(),["tick",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__225863_SHARP_)].join(''));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$3((0),(110),(10)))),(function (){var years = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),(15)], null);
var radical_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),rum.core.react(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"primary-rx","primary-rx",-1656848904))));
return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function predict_prostate$results$charts$iter__225880(s__225881){
return (new cljs.core.LazySeq(null,(function (){
var s__225881__$1 = s__225881;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__225881__$1);
if(temp__5735__auto__){
var s__225881__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__225881__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__225881__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__225883 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__225882 = (0);
while(true){
if((i__225882 < size__4528__auto__)){
var year = cljs.core._nth(c__4527__auto__,i__225882);
var left_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(year,cljs.core.first(years));
var data = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (i__225882,left_QMARK_,year,c__4527__auto__,size__4528__auto__,b__225883,s__225881__$2,temp__5735__auto__,years,radical_QMARK_,map__225871,map__225871__$1,subtitle_under,radical,plot_style,dotted_orange,conservative_survival,title,style,radical_benefit,ttt){
return (function (p1__225865_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"treatment-key","treatment-key",-2085594499).cljs$core$IFn$_invoke$arity$1(p1__225865_SHARP_),new cljs.core.Keyword(null,"radical","radical",1159030213))){
return radical_QMARK_;
} else {
return true;
}
});})(i__225882,left_QMARK_,year,c__4527__auto__,size__4528__auto__,b__225883,s__225881__$2,temp__5735__auto__,years,radical_QMARK_,map__225871,map__225871__$1,subtitle_under,radical,plot_style,dotted_orange,conservative_survival,title,style,radical_benefit,ttt))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"treatment-key","treatment-key",-2085594499),new cljs.core.Keyword(null,"conservative","conservative",-1075714010),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(conservative_survival,year)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"treatment-key","treatment-key",-2085594499),new cljs.core.Keyword(null,"radical","radical",1159030213),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(radical_benefit,year)], null)], null));
var callout = ((left_QMARK_)?predict_prostate.results.charts.n_PERCENT__text__GT_:predict_prostate.results.charts._LT__n_PERCENT__text);
cljs.core.chunk_append(b__225883,(function (){var plot_data = data;
return sablono.interpreter.interpret(rum.core.with_key((function (){var G__225889 = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"label-under","label-under",-1646119292),new cljs.core.Keyword(null,"radical","radical",1159030213),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),new cljs.core.Keyword(null,"total","total",1916810418),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"oth","oth",901151226),new cljs.core.Keyword(null,"callout","callout",1420070683),new cljs.core.Keyword(null,"dataset","dataset",1159262238),new cljs.core.Keyword(null,"left","left",-399115937)],[year,radical,"18%",plot_style,cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"value","value",305978217),data)),((left_QMARK_)?null:"30%"),((100) - cljs.core.nth.cljs$core$IFn$_invoke$arity$2(dotted_orange,year)),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(callout,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"percent","percent",2031453817),cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"value","value",305978217),plot_data)),new cljs.core.Keyword(null,"text","text",-1790561697),["survive at least"," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(year)," ","years"].join('')], null)),data,((left_QMARK_)?"30%":null)]);
return (predict_prostate.results.charts.bar.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.charts.bar.cljs$core$IFn$_invoke$arity$1(G__225889) : predict_prostate.results.charts.bar.call(null,G__225889));
})(),year));
})());

var G__226122 = (i__225882 + (1));
i__225882 = G__226122;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__225883),predict_prostate$results$charts$iter__225880(cljs.core.chunk_rest(s__225881__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__225883),null);
}
} else {
var year = cljs.core.first(s__225881__$2);
var left_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(year,cljs.core.first(years));
var data = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (left_QMARK_,year,s__225881__$2,temp__5735__auto__,years,radical_QMARK_,map__225871,map__225871__$1,subtitle_under,radical,plot_style,dotted_orange,conservative_survival,title,style,radical_benefit,ttt){
return (function (p1__225865_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"treatment-key","treatment-key",-2085594499).cljs$core$IFn$_invoke$arity$1(p1__225865_SHARP_),new cljs.core.Keyword(null,"radical","radical",1159030213))){
return radical_QMARK_;
} else {
return true;
}
});})(left_QMARK_,year,s__225881__$2,temp__5735__auto__,years,radical_QMARK_,map__225871,map__225871__$1,subtitle_under,radical,plot_style,dotted_orange,conservative_survival,title,style,radical_benefit,ttt))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"treatment-key","treatment-key",-2085594499),new cljs.core.Keyword(null,"conservative","conservative",-1075714010),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(conservative_survival,year)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"treatment-key","treatment-key",-2085594499),new cljs.core.Keyword(null,"radical","radical",1159030213),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(radical_benefit,year)], null)], null));
var callout = ((left_QMARK_)?predict_prostate.results.charts.n_PERCENT__text__GT_:predict_prostate.results.charts._LT__n_PERCENT__text);
return cljs.core.cons((function (){var plot_data = data;
return sablono.interpreter.interpret(rum.core.with_key((function (){var G__225891 = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"label-under","label-under",-1646119292),new cljs.core.Keyword(null,"radical","radical",1159030213),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),new cljs.core.Keyword(null,"total","total",1916810418),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"oth","oth",901151226),new cljs.core.Keyword(null,"callout","callout",1420070683),new cljs.core.Keyword(null,"dataset","dataset",1159262238),new cljs.core.Keyword(null,"left","left",-399115937)],[year,radical,"18%",plot_style,cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"value","value",305978217),data)),((left_QMARK_)?null:"30%"),((100) - cljs.core.nth.cljs$core$IFn$_invoke$arity$2(dotted_orange,year)),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(callout,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"percent","percent",2031453817),cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"value","value",305978217),plot_data)),new cljs.core.Keyword(null,"text","text",-1790561697),["survive at least"," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(year)," ","years"].join('')], null)),data,((left_QMARK_)?"30%":null)]);
return (predict_prostate.results.charts.bar.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.charts.bar.cljs$core$IFn$_invoke$arity$1(G__225891) : predict_prostate.results.charts.bar.call(null,G__225891));
})(),year));
})(),predict_prostate$results$charts$iter__225880(cljs.core.rest(s__225881__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(years);
})());
})(),React.createElement("div",({"key": (3), "style": ({"position": "absolute", "bottom": "-5.5ex", "width": "100%", "textAlign": "center", "fontSize": "16px"})}),sablono.interpreter.interpret((function (){var G__225893 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chart","subunder","chart/subunder",893115798),subtitle_under], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__225893) : ttt.call(null,G__225893));
})()))));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$,rum.core.reactive], null),"inner-stacked-bar");
/**
 * Different models use different treatment widgets, so we need to use these to react to the correct
 *   treatments and lookup the appropriate result-data.
 */
predict_prostate.results.charts.extract_data = (function predict_prostate$results$charts$extract_data(title,results,radical_QMARK_,plot_style){
var one_sum = (function (p1__225895_SHARP_,p2__225898_SHARP_){
return ((100) * ((1) - (p1__225895_SHARP_ + p2__225898_SHARP_)));
});
var radical_survival = cljs.core.map.cljs$core$IFn$_invoke$arity$3(one_sum,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(results,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"radical","radical",1159030213),new cljs.core.Keyword(null,"pred-PC-cum","pred-PC-cum",1965177836)], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(results,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"radical","radical",1159030213),new cljs.core.Keyword(null,"pred-NPC-cum","pred-NPC-cum",-1636287417)], null)));
var conservative_survival = cljs.core.map.cljs$core$IFn$_invoke$arity$3(one_sum,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(results,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"conservative","conservative",-1075714010),new cljs.core.Keyword(null,"pred-PC-cum","pred-PC-cum",1965177836)], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(results,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"conservative","conservative",-1075714010),new cljs.core.Keyword(null,"pred-NPC-cum","pred-NPC-cum",-1636287417)], null)));
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"subtitle-under","subtitle-under",-1133908191),new cljs.core.Keyword(null,"radical","radical",1159030213),new cljs.core.Keyword(null,"subtitle-over","subtitle-over",1867978156),new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),new cljs.core.Keyword(null,"dotted-orange","dotted-orange",-573056274),new cljs.core.Keyword(null,"conservative-survival","conservative-survival",-852356338),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"radical-benefit","radical-benefit",1730049395),new cljs.core.Keyword(null,"radical-survival","radical-survival",-74207469)],["years after diagnosis",radical_QMARK_,"for men with prostate cancer, 10 and 15 years after diagnosis",plot_style,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__225904_SHARP_){
return ((100) * p1__225904_SHARP_);
}),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(results,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(radical_QMARK_)?new cljs.core.Keyword(null,"radical","radical",1159030213):new cljs.core.Keyword(null,"conservative","conservative",-1075714010)),new cljs.core.Keyword(null,"NPC-survival","NPC-survival",-1399930619)], null))),conservative_survival,title,cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__225902_SHARP_,p2__225903_SHARP_){
return (p1__225902_SHARP_ - p2__225903_SHARP_);
}),radical_survival,conservative_survival),radical_survival]);
});
predict_prostate.results.charts.stacked_bar = rum.core.build_defcs((function (state,p__225908){
var map__225909 = p__225908;
var map__225909__$1 = (((((!((map__225909 == null))))?(((((map__225909.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__225909.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__225909):map__225909);
var props = map__225909__$1;
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__225909__$1,new cljs.core.Keyword(null,"width","width",-384071477),(100));
var h_over_w = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__225909__$1,new cljs.core.Keyword(null,"h-over-w","h-over-w",-704124296),(1));
var font_scale = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__225909__$1,new cljs.core.Keyword(null,"font-scale","font-scale",1496075293),(1));
var chart_style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__225909__$1,new cljs.core.Keyword(null,"chart-style","chart-style",1760650084));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__225909__$1,new cljs.core.Keyword(null,"title","title",636505583));
var printable = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__225909__$1,new cljs.core.Keyword(null,"printable","printable",-928999004));
var ttt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__225909__$1,new cljs.core.Keyword(null,"ttt","ttt",1858561240));
var results = rum.core.react(predict_prostate.state.run_time.results_cursor);
var plot_style = rum.core.react(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355)));
var radical_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),rum.core.react(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"primary-rx","primary-rx",-1656848904))));
var width_1 = rum.core.react(new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(state));
var side_by_side = (function (){var or__4126__auto__ = printable;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (width_1 > (600));
}
})();
return sablono.interpreter.interpret((function (){var temp__5735__auto__ = predict_prostate.results.charts.extract_data(title,results,radical_QMARK_,plot_style);
if(cljs.core.truth_(temp__5735__auto__)){
var chart_props = temp__5735__auto__;
new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Hello"], null);

var bene5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"radical-benefit","radical-benefit",1730049395).cljs$core$IFn$_invoke$arity$1(chart_props),(5));
var bene10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"radical-benefit","radical-benefit",1730049395).cljs$core$IFn$_invoke$arity$1(chart_props),(10));
var benefit = [" Additional benefit of radical treatment is ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(bene5),"% at 5 years and ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(bene10),"% at 10 years"].join('');
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"15px"], null)], null),(function (){var G__225913 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chart","perc-text1","chart/perc-text1",1891645743),"This graph shows the percentage of men surviving at 10 and 15 years. These results are based on the inputs and treatments you selected"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__225913) : ttt.call(null,G__225913));
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class-name","class-name",945142584),new cljs.core.Keyword(null,"chart","chart",1173225425).cljs$core$IFn$_invoke$arity$1(chart_style),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"width","width",-384071477),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(side_by_side)?width:(100))),"%"].join(''),new cljs.core.Keyword(null,"max-width","max-width",-1939924051),(400),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),((width_1 / (25)) * font_scale),new cljs.core.Keyword(null,"display","display",242065432),"inline-block",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"3ex"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".chart-wrapper",".chart-wrapper",914141400),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),(width_1 * h_over_w)], null)], null),rum.core.with_key((function (){var G__225914 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(chart_props,new cljs.core.Keyword(null,"ttt","ttt",1858561240),ttt);
return (predict_prostate.results.charts.inner_stacked_bar.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.charts.inner_stacked_bar.cljs$core$IFn$_invoke$arity$1(G__225914) : predict_prostate.results.charts.inner_stacked_bar.call(null,G__225914));
})(),(1))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"top",new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),(cljs.core.truth_(side_by_side)?"40px":"20px"),new cljs.core.Keyword(null,"width","width",-384071477),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(((100) - (cljs.core.truth_(side_by_side)?width:(0)))),"%"].join(''),new cljs.core.Keyword(null,"display","display",242065432),"inline-block"], null)], null),(predict_prostate.results.curves.legend2.cljs$core$IFn$_invoke$arity$3 ? predict_prostate.results.curves.legend2.cljs$core$IFn$_invoke$arity$3(plot_style,radical_QMARK_,ttt) : predict_prostate.results.curves.legend2.call(null,plot_style,radical_QMARK_,ttt))], null)], null);
} else {
return null;
}
})());
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,predict_prostate.mixins.sizing_mixin], null),"stacked-bar");
/**
 * Content of the Charts tab, showing treatment options
 */
predict_prostate.results.charts.results_in_charts = rum.core.build_defc((function (p__225920){
var map__225922 = p__225920;
var map__225922__$1 = (((((!((map__225922 == null))))?(((((map__225922.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__225922.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__225922):map__225922);
var m = map__225922__$1;
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__225922__$1,new cljs.core.Keyword(null,"title","title",636505583));
var printable = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__225922__$1,new cljs.core.Keyword(null,"printable","printable",-928999004));
var ttt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__225922__$1,new cljs.core.Keyword(null,"ttt","ttt",1858561240));
var attrs225919 = (function (){var G__225924 = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"width","width",-384071477),(70),new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"h-over-w","h-over-w",-704124296),0.4,new cljs.core.Keyword(null,"font-scale","font-scale",1496075293),(1),new cljs.core.Keyword(null,"printable","printable",-928999004),printable,new cljs.core.Keyword(null,"chart-style","chart-style",1760650084),predict_prostate.results.charts.stacked_bar_chart_style,new cljs.core.Keyword(null,"ttt","ttt",1858561240),ttt], null);
return (predict_prostate.results.charts.stacked_bar.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.charts.stacked_bar.cljs$core$IFn$_invoke$arity$1(G__225924) : predict_prostate.results.charts.stacked_bar.call(null,G__225924));
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs225919))?sablono.interpreter.attributes(attrs225919):null),((cljs.core.map_QMARK_(attrs225919))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs225919)], null)));
}),null,"results-in-charts");

//# sourceMappingURL=predict_prostate.results.charts.js.map
