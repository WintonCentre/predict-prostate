goog.provide('predict_prostate.layout.result_panel');
/**
 * Lookup/edit key for a tab given a label or a key for that label
 *   ; (tab-label-key :curve)
 *   ; => [:tab-label/curve "Curve"]
 *   
 */
predict_prostate.layout.result_panel.tab_label_key = (function predict_prostate$layout$result_panel$tab_label_key(label_key){
var label = cljs.core.name(label_key);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(["tab-label/",label].join('')),clojure.string.capitalize(label)], null);
});
/**
 * Check whether kn1 and kn2 share same names (2-arity) or some other property f (3-arity).
 */
predict_prostate.layout.result_panel.safe_check = (function predict_prostate$layout$result_panel$safe_check(var_args){
var G__184345 = arguments.length;
switch (G__184345) {
case 2:
return predict_prostate.layout.result_panel.safe_check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return predict_prostate.layout.result_panel.safe_check.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(predict_prostate.layout.result_panel.safe_check.cljs$core$IFn$_invoke$arity$2 = (function (kn1,kn2){
return predict_prostate.layout.result_panel.safe_check.cljs$core$IFn$_invoke$arity$3(kn1,kn2,cljs.core.name);
}));

(predict_prostate.layout.result_panel.safe_check.cljs$core$IFn$_invoke$arity$3 = (function (kn1,kn2,f){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(kn1) : f.call(null,kn1)),(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(kn2) : f.call(null,kn2)));
}));

(predict_prostate.layout.result_panel.safe_check.cljs$lang$maxFixedArity = 3);

predict_prostate.layout.result_panel.result_tab_button = rum.core.build_defc((function (ttt,label_key){
return React.createElement("li",({"role": "presentation", "onClick": (function (){
return predict_prostate.state.run_time.active_results_change.pubsub$feeds$TopicFeed$publish$arity$2(null,cljs.core.name(label_key));
}), "style": ({"cursor": "pointer", "borderRadius": "3px", "backgroundColor": "#def"}), "key": cljs.core.name(label_key), "className": sablono.util.join_classes(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(predict_prostate.layout.result_panel.safe_check.cljs$core$IFn$_invoke$arity$2(rum.core.react(predict_prostate.state.run_time.active_results_pane),label_key))?"active":null)], null))}),React.createElement("a",({"aria-controls": cljs.core.name(label_key), "role": "tab"}),sablono.interpreter.interpret((function (){var G__184347 = predict_prostate.layout.result_panel.tab_label_key(label_key);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__184347) : ttt.call(null,G__184347));
})())));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"result-tab-button");
predict_prostate.layout.result_panel.result_tab_pane = rum.core.build_defc((function (label,content){
return React.createElement("div",({"id": label, "role": "tabpanel", "className": sablono.util.join_classes(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["tab-pane",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rum.core.react(predict_prostate.state.run_time.active_results_pane),label))?"active":null)].join('')], null))}),sablono.interpreter.interpret(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rum.core.react(predict_prostate.state.run_time.active_results_pane),label))?(cljs.core.truth_(content)?(function (){
if((typeof window !== 'undefined') && (typeof window.ga !== 'undefined')){
window.ga("send","event","Results Tab",label);
} else {
}

return (content.cljs$core$IFn$_invoke$arity$0 ? content.cljs$core$IFn$_invoke$arity$0() : content.call(null));
})()
:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"No content yet"], null)):null)));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"result-tab-pane");
predict_prostate.layout.result_panel.result_tabs = rum.core.build_defc((function (ttt){
return React.createElement("ul",({"role": "tablist", "style": ({"fontSize": "16px"}), "className": "nav nav-pills"}),sablono.interpreter.interpret(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__184349_SHARP_){
return rum.core.with_key((predict_prostate.layout.result_panel.result_tab_button.cljs$core$IFn$_invoke$arity$2 ? predict_prostate.layout.result_panel.result_tab_button.cljs$core$IFn$_invoke$arity$2(ttt,p1__184349_SHARP_) : predict_prostate.layout.result_panel.result_tab_button.call(null,ttt,p1__184349_SHARP_)),cljs.core.name(p1__184349_SHARP_));
}),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"charts","charts",555258811),new cljs.core.Keyword(null,"icons","icons",-297140977),new cljs.core.Keyword(null,"curves","curves",-510805378),new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.Keyword(null,"texts","texts",-2031072472)], null))));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$], null),"result-tabs");
predict_prostate.layout.result_panel.result_panes = rum.core.build_defc((function (ttt){
var attrs184352 = (function (){var G__184355 = "charts";
var G__184356 = (function (){
var G__184358 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),(function (){var G__184360 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chart","title","chart/title",739030541),"Overall Survival"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__184360) : ttt.call(null,G__184360));
})(),new cljs.core.Keyword(null,"ttt","ttt",1858561240),ttt], null);
return (predict_prostate.results.charts.results_in_charts.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.charts.results_in_charts.cljs$core$IFn$_invoke$arity$1(G__184358) : predict_prostate.results.charts.results_in_charts.call(null,G__184358));
});
return (predict_prostate.layout.result_panel.result_tab_pane.cljs$core$IFn$_invoke$arity$2 ? predict_prostate.layout.result_panel.result_tab_pane.cljs$core$IFn$_invoke$arity$2(G__184355,G__184356) : predict_prostate.layout.result_panel.result_tab_pane.call(null,G__184355,G__184356));
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs184352))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["tab-content"], null)], null),attrs184352], 0))):({"className": "tab-content"})),((cljs.core.map_QMARK_(attrs184352))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret((function (){var G__184361 = "icons";
var G__184362 = (function (){
var G__184365 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ttt","ttt",1858561240),ttt], null);
return (predict_prostate.results.icons.results_in_icons_STAR_.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.icons.results_in_icons_STAR_.cljs$core$IFn$_invoke$arity$1(G__184365) : predict_prostate.results.icons.results_in_icons_STAR_.call(null,G__184365));
});
return (predict_prostate.layout.result_panel.result_tab_pane.cljs$core$IFn$_invoke$arity$2 ? predict_prostate.layout.result_panel.result_tab_pane.cljs$core$IFn$_invoke$arity$2(G__184361,G__184362) : predict_prostate.layout.result_panel.result_tab_pane.call(null,G__184361,G__184362));
})()),sablono.interpreter.interpret((function (){var G__184367 = "curves";
var G__184368 = (function (){
var G__184371 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ttt","ttt",1858561240),ttt], null);
return (predict_prostate.results.curves.results_in_curves.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.curves.results_in_curves.cljs$core$IFn$_invoke$arity$1(G__184371) : predict_prostate.results.curves.results_in_curves.call(null,G__184371));
});
return (predict_prostate.layout.result_panel.result_tab_pane.cljs$core$IFn$_invoke$arity$2 ? predict_prostate.layout.result_panel.result_tab_pane.cljs$core$IFn$_invoke$arity$2(G__184367,G__184368) : predict_prostate.layout.result_panel.result_tab_pane.call(null,G__184367,G__184368));
})()),sablono.interpreter.interpret((function (){var G__184373 = "table";
var G__184374 = (function (){
return (predict_prostate.results.table.results_in_table.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.table.results_in_table.cljs$core$IFn$_invoke$arity$1(ttt) : predict_prostate.results.table.results_in_table.call(null,ttt));
});
return (predict_prostate.layout.result_panel.result_tab_pane.cljs$core$IFn$_invoke$arity$2 ? predict_prostate.layout.result_panel.result_tab_pane.cljs$core$IFn$_invoke$arity$2(G__184373,G__184374) : predict_prostate.layout.result_panel.result_tab_pane.call(null,G__184373,G__184374));
})()),sablono.interpreter.interpret((function (){var G__184377 = "texts";
var G__184378 = (function (){
var G__184381 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ttt","ttt",1858561240),ttt], null);
return (predict_prostate.results.text.results_in_text.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.text.results_in_text.cljs$core$IFn$_invoke$arity$1(G__184381) : predict_prostate.results.text.results_in_text.call(null,G__184381));
});
return (predict_prostate.layout.result_panel.result_tab_pane.cljs$core$IFn$_invoke$arity$2 ? predict_prostate.layout.result_panel.result_tab_pane.cljs$core$IFn$_invoke$arity$2(G__184377,G__184378) : predict_prostate.layout.result_panel.result_tab_pane.call(null,G__184377,G__184378));
})())], null):new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs184352),sablono.interpreter.interpret((function (){var G__184383 = "icons";
var G__184384 = (function (){
var G__184387 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ttt","ttt",1858561240),ttt], null);
return (predict_prostate.results.icons.results_in_icons_STAR_.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.icons.results_in_icons_STAR_.cljs$core$IFn$_invoke$arity$1(G__184387) : predict_prostate.results.icons.results_in_icons_STAR_.call(null,G__184387));
});
return (predict_prostate.layout.result_panel.result_tab_pane.cljs$core$IFn$_invoke$arity$2 ? predict_prostate.layout.result_panel.result_tab_pane.cljs$core$IFn$_invoke$arity$2(G__184383,G__184384) : predict_prostate.layout.result_panel.result_tab_pane.call(null,G__184383,G__184384));
})()),sablono.interpreter.interpret((function (){var G__184389 = "curves";
var G__184390 = (function (){
var G__184393 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ttt","ttt",1858561240),ttt], null);
return (predict_prostate.results.curves.results_in_curves.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.curves.results_in_curves.cljs$core$IFn$_invoke$arity$1(G__184393) : predict_prostate.results.curves.results_in_curves.call(null,G__184393));
});
return (predict_prostate.layout.result_panel.result_tab_pane.cljs$core$IFn$_invoke$arity$2 ? predict_prostate.layout.result_panel.result_tab_pane.cljs$core$IFn$_invoke$arity$2(G__184389,G__184390) : predict_prostate.layout.result_panel.result_tab_pane.call(null,G__184389,G__184390));
})()),sablono.interpreter.interpret((function (){var G__184395 = "table";
var G__184397 = (function (){
return (predict_prostate.results.table.results_in_table.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.table.results_in_table.cljs$core$IFn$_invoke$arity$1(ttt) : predict_prostate.results.table.results_in_table.call(null,ttt));
});
return (predict_prostate.layout.result_panel.result_tab_pane.cljs$core$IFn$_invoke$arity$2 ? predict_prostate.layout.result_panel.result_tab_pane.cljs$core$IFn$_invoke$arity$2(G__184395,G__184397) : predict_prostate.layout.result_panel.result_tab_pane.call(null,G__184395,G__184397));
})()),sablono.interpreter.interpret((function (){var G__184399 = "texts";
var G__184400 = (function (){
var G__184403 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ttt","ttt",1858561240),ttt], null);
return (predict_prostate.results.text.results_in_text.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.text.results_in_text.cljs$core$IFn$_invoke$arity$1(G__184403) : predict_prostate.results.text.results_in_text.call(null,G__184403));
});
return (predict_prostate.layout.result_panel.result_tab_pane.cljs$core$IFn$_invoke$arity$2 ? predict_prostate.layout.result_panel.result_tab_pane.cljs$core$IFn$_invoke$arity$2(G__184399,G__184400) : predict_prostate.layout.result_panel.result_tab_pane.call(null,G__184399,G__184400));
})())], null)));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$], null),"result-panes");
predict_prostate.layout.result_panel.result_panel = rum.core.build_defc((function (ttt){
return React.createElement("div",({"id": "results"}),React.createElement("h3",({"style": ({"marginTop": (20)})}),"Results"),sablono.interpreter.interpret((predict_prostate.layout.result_panel.result_tabs.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.layout.result_panel.result_tabs.cljs$core$IFn$_invoke$arity$1(ttt) : predict_prostate.layout.result_panel.result_tabs.call(null,ttt))),sablono.interpreter.interpret((predict_prostate.layout.treatments_panel.treatments_options.cljs$core$IFn$_invoke$arity$0 ? predict_prostate.layout.treatments_panel.treatments_options.cljs$core$IFn$_invoke$arity$0() : predict_prostate.layout.treatments_panel.treatments_options.call(null))),sablono.interpreter.interpret((predict_prostate.layout.result_panel.result_panes.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.layout.result_panel.result_panes.cljs$core$IFn$_invoke$arity$1(ttt) : predict_prostate.layout.result_panel.result_panes.call(null,ttt))));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"result-panel");
predict_prostate.layout.result_panel.side_panel = rum.core.build_defc((function (ttt){
return React.createElement("div",({"style": ({"marginTop": (20), "backgroundColor": predict_prostate.results.util.alison_blue_1}), "className": "well"}),sablono.interpreter.interpret(predict_prostate.content_reader.all_subsections(ttt,"tool-postamble")),sablono.interpreter.interpret((cljs.core.truth_((function (){var G__184412 = cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518)));
var fexpr__184410 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(4),null,(5),null], null), null);
return (fexpr__184410.cljs$core$IFn$_invoke$arity$1 ? fexpr__184410.cljs$core$IFn$_invoke$arity$1(G__184412) : fexpr__184410.call(null,G__184412));
})())?predict_prostate.content_reader.all_subsections(ttt,"high-grade-group-warning"):null)),sablono.interpreter.interpret(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"no","no",-390373634),cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"metastasis","metastasis",255525950)))))?predict_prostate.content_reader.all_subsections(ttt,"metastasis-warning"):null)),sablono.interpreter.interpret(predict_prostate.content_reader.all_subsections(ttt,"scroll-down-for")));
}),null,"side-panel");
predict_prostate.layout.result_panel.results = rum.core.build_defc((function (p__184413){
var map__184416 = p__184413;
var map__184416__$1 = (((((!((map__184416 == null))))?(((((map__184416.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__184416.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__184416):map__184416);
var props = map__184416__$1;
var ttt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__184416__$1,new cljs.core.Keyword(null,"ttt","ttt",1858561240));
var container_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__184416__$1,new cljs.core.Keyword(null,"container?","container?",-1563620041));
return React.createElement("div",null,React.createElement("div",({"className": "row"}),(function (){var attrs184420 = (predict_prostate.layout.result_panel.result_panel.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.layout.result_panel.result_panel.cljs$core$IFn$_invoke$arity$1(ttt) : predict_prostate.layout.result_panel.result_panel.call(null,ttt));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs184420))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["col-md-6","col-md-offset-1"], null)], null),attrs184420], 0))):({"className": "col-md-6 col-md-offset-1"})),((cljs.core.map_QMARK_(attrs184420))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs184420)], null)));
})(),(function (){var attrs184422 = (predict_prostate.layout.result_panel.side_panel.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.layout.result_panel.side_panel.cljs$core$IFn$_invoke$arity$1(ttt) : predict_prostate.layout.result_panel.side_panel.call(null,ttt));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs184422))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["col-md-4"], null)], null),attrs184422], 0))):({"className": "col-md-4"})),((cljs.core.map_QMARK_(attrs184422))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs184422)], null)));
})()));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"results");

//# sourceMappingURL=predict_prostate.layout.result_panel.js.map
