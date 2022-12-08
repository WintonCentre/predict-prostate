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
var G__35267 = arguments.length;
switch (G__35267) {
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
}), "style": ({"cursor": "pointer", "borderRadius": "3px", "backgroundColor": "#def"}), "key": cljs.core.name(label_key), "className": sablono.util.join_classes(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(predict_prostate.layout.result_panel.safe_check.cljs$core$IFn$_invoke$arity$2(rum.core.react(predict_prostate.state.run_time.active_results_pane),label_key))?"active":null)], null))}),React.createElement("a",({"aria-controls": cljs.core.name(label_key), "role": "tab"}),sablono.interpreter.interpret((function (){var G__35270 = predict_prostate.layout.result_panel.tab_label_key(label_key);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__35270) : ttt.call(null,G__35270));
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
return React.createElement("ul",({"role": "tablist", "style": ({"fontSize": "16px"}), "className": "nav nav-pills"}),sablono.interpreter.interpret(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__35274_SHARP_){
return rum.core.with_key((predict_prostate.layout.result_panel.result_tab_button.cljs$core$IFn$_invoke$arity$2 ? predict_prostate.layout.result_panel.result_tab_button.cljs$core$IFn$_invoke$arity$2(ttt,p1__35274_SHARP_) : predict_prostate.layout.result_panel.result_tab_button.call(null,ttt,p1__35274_SHARP_)),cljs.core.name(p1__35274_SHARP_));
}),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"charts","charts",555258811),new cljs.core.Keyword(null,"icons","icons",-297140977),new cljs.core.Keyword(null,"curves","curves",-510805378),new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.Keyword(null,"texts","texts",-2031072472)], null))));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$], null),"result-tabs");
predict_prostate.layout.result_panel.result_panes = rum.core.build_defc((function (ttt){
var attrs35275 = (function (){var G__35276 = "charts";
var G__35277 = (function (){
var G__35278 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),(function (){var G__35279 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chart","title","chart/title",739030541),"Overall Survival"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__35279) : ttt.call(null,G__35279));
})(),new cljs.core.Keyword(null,"ttt","ttt",1858561240),ttt], null);
return (predict_prostate.results.charts.results_in_charts.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.charts.results_in_charts.cljs$core$IFn$_invoke$arity$1(G__35278) : predict_prostate.results.charts.results_in_charts.call(null,G__35278));
});
return (predict_prostate.layout.result_panel.result_tab_pane.cljs$core$IFn$_invoke$arity$2 ? predict_prostate.layout.result_panel.result_tab_pane.cljs$core$IFn$_invoke$arity$2(G__35276,G__35277) : predict_prostate.layout.result_panel.result_tab_pane.call(null,G__35276,G__35277));
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs35275))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["tab-content"], null)], null),attrs35275], 0))):({"className": "tab-content"})),((cljs.core.map_QMARK_(attrs35275))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret((function (){var G__35280 = "icons";
var G__35281 = (function (){
var G__35282 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ttt","ttt",1858561240),ttt], null);
return (predict_prostate.results.icons.results_in_icons_STAR_.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.icons.results_in_icons_STAR_.cljs$core$IFn$_invoke$arity$1(G__35282) : predict_prostate.results.icons.results_in_icons_STAR_.call(null,G__35282));
});
return (predict_prostate.layout.result_panel.result_tab_pane.cljs$core$IFn$_invoke$arity$2 ? predict_prostate.layout.result_panel.result_tab_pane.cljs$core$IFn$_invoke$arity$2(G__35280,G__35281) : predict_prostate.layout.result_panel.result_tab_pane.call(null,G__35280,G__35281));
})()),sablono.interpreter.interpret((function (){var G__35283 = "curves";
var G__35284 = (function (){
var G__35285 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ttt","ttt",1858561240),ttt], null);
return (predict_prostate.results.curves.results_in_curves.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.curves.results_in_curves.cljs$core$IFn$_invoke$arity$1(G__35285) : predict_prostate.results.curves.results_in_curves.call(null,G__35285));
});
return (predict_prostate.layout.result_panel.result_tab_pane.cljs$core$IFn$_invoke$arity$2 ? predict_prostate.layout.result_panel.result_tab_pane.cljs$core$IFn$_invoke$arity$2(G__35283,G__35284) : predict_prostate.layout.result_panel.result_tab_pane.call(null,G__35283,G__35284));
})()),sablono.interpreter.interpret((function (){var G__35286 = "table";
var G__35287 = (function (){
return (predict_prostate.results.table.results_in_table.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.table.results_in_table.cljs$core$IFn$_invoke$arity$1(ttt) : predict_prostate.results.table.results_in_table.call(null,ttt));
});
return (predict_prostate.layout.result_panel.result_tab_pane.cljs$core$IFn$_invoke$arity$2 ? predict_prostate.layout.result_panel.result_tab_pane.cljs$core$IFn$_invoke$arity$2(G__35286,G__35287) : predict_prostate.layout.result_panel.result_tab_pane.call(null,G__35286,G__35287));
})()),sablono.interpreter.interpret((function (){var G__35288 = "texts";
var G__35289 = (function (){
var G__35290 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ttt","ttt",1858561240),ttt], null);
return (predict_prostate.results.text.results_in_text.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.text.results_in_text.cljs$core$IFn$_invoke$arity$1(G__35290) : predict_prostate.results.text.results_in_text.call(null,G__35290));
});
return (predict_prostate.layout.result_panel.result_tab_pane.cljs$core$IFn$_invoke$arity$2 ? predict_prostate.layout.result_panel.result_tab_pane.cljs$core$IFn$_invoke$arity$2(G__35288,G__35289) : predict_prostate.layout.result_panel.result_tab_pane.call(null,G__35288,G__35289));
})())], null):new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs35275),sablono.interpreter.interpret((function (){var G__35291 = "icons";
var G__35292 = (function (){
var G__35293 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ttt","ttt",1858561240),ttt], null);
return (predict_prostate.results.icons.results_in_icons_STAR_.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.icons.results_in_icons_STAR_.cljs$core$IFn$_invoke$arity$1(G__35293) : predict_prostate.results.icons.results_in_icons_STAR_.call(null,G__35293));
});
return (predict_prostate.layout.result_panel.result_tab_pane.cljs$core$IFn$_invoke$arity$2 ? predict_prostate.layout.result_panel.result_tab_pane.cljs$core$IFn$_invoke$arity$2(G__35291,G__35292) : predict_prostate.layout.result_panel.result_tab_pane.call(null,G__35291,G__35292));
})()),sablono.interpreter.interpret((function (){var G__35294 = "curves";
var G__35295 = (function (){
var G__35296 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ttt","ttt",1858561240),ttt], null);
return (predict_prostate.results.curves.results_in_curves.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.curves.results_in_curves.cljs$core$IFn$_invoke$arity$1(G__35296) : predict_prostate.results.curves.results_in_curves.call(null,G__35296));
});
return (predict_prostate.layout.result_panel.result_tab_pane.cljs$core$IFn$_invoke$arity$2 ? predict_prostate.layout.result_panel.result_tab_pane.cljs$core$IFn$_invoke$arity$2(G__35294,G__35295) : predict_prostate.layout.result_panel.result_tab_pane.call(null,G__35294,G__35295));
})()),sablono.interpreter.interpret((function (){var G__35297 = "table";
var G__35298 = (function (){
return (predict_prostate.results.table.results_in_table.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.table.results_in_table.cljs$core$IFn$_invoke$arity$1(ttt) : predict_prostate.results.table.results_in_table.call(null,ttt));
});
return (predict_prostate.layout.result_panel.result_tab_pane.cljs$core$IFn$_invoke$arity$2 ? predict_prostate.layout.result_panel.result_tab_pane.cljs$core$IFn$_invoke$arity$2(G__35297,G__35298) : predict_prostate.layout.result_panel.result_tab_pane.call(null,G__35297,G__35298));
})()),sablono.interpreter.interpret((function (){var G__35299 = "texts";
var G__35300 = (function (){
var G__35301 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ttt","ttt",1858561240),ttt], null);
return (predict_prostate.results.text.results_in_text.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.text.results_in_text.cljs$core$IFn$_invoke$arity$1(G__35301) : predict_prostate.results.text.results_in_text.call(null,G__35301));
});
return (predict_prostate.layout.result_panel.result_tab_pane.cljs$core$IFn$_invoke$arity$2 ? predict_prostate.layout.result_panel.result_tab_pane.cljs$core$IFn$_invoke$arity$2(G__35299,G__35300) : predict_prostate.layout.result_panel.result_tab_pane.call(null,G__35299,G__35300));
})())], null)));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$], null),"result-panes");
predict_prostate.layout.result_panel.result_panel = rum.core.build_defc((function (ttt){
return React.createElement("div",({"id": "results"}),React.createElement("h3",({"style": ({"marginTop": (20)})}),sablono.interpreter.interpret((function (){var G__35302 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("results","title","results/title",-565898779),"Results"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__35302) : ttt.call(null,G__35302));
})())),sablono.interpreter.interpret((predict_prostate.layout.result_panel.result_tabs.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.layout.result_panel.result_tabs.cljs$core$IFn$_invoke$arity$1(ttt) : predict_prostate.layout.result_panel.result_tabs.call(null,ttt))),sablono.interpreter.interpret((predict_prostate.layout.treatments_panel.treatments_options.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.layout.treatments_panel.treatments_options.cljs$core$IFn$_invoke$arity$1(ttt) : predict_prostate.layout.treatments_panel.treatments_options.call(null,ttt))),sablono.interpreter.interpret((predict_prostate.layout.result_panel.result_panes.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.layout.result_panel.result_panes.cljs$core$IFn$_invoke$arity$1(ttt) : predict_prostate.layout.result_panel.result_panes.call(null,ttt))));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"result-panel");
predict_prostate.layout.result_panel.side_panel = rum.core.build_defc((function (ttt){
return React.createElement("div",({"style": ({"marginTop": (20), "backgroundColor": predict_prostate.results.util.alison_blue_1}), "className": "well"}),sablono.interpreter.interpret(predict_prostate.content_reader.all_subsections(ttt,"tool-postamble")),sablono.interpreter.interpret((cljs.core.truth_((function (){var G__35304 = cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518)));
var fexpr__35303 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(4),null,(5),null], null), null);
return (fexpr__35303.cljs$core$IFn$_invoke$arity$1 ? fexpr__35303.cljs$core$IFn$_invoke$arity$1(G__35304) : fexpr__35303.call(null,G__35304));
})())?predict_prostate.content_reader.all_subsections(ttt,"high-grade-group-warning"):null)),sablono.interpreter.interpret(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"no","no",-390373634),cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"metastasis","metastasis",255525950)))))?predict_prostate.content_reader.all_subsections(ttt,"metastasis-warning"):null)),sablono.interpreter.interpret(predict_prostate.content_reader.all_subsections(ttt,"scroll-down-for")));
}),null,"side-panel");
predict_prostate.layout.result_panel.results = rum.core.build_defc((function (p__35305){
var map__35306 = p__35305;
var map__35306__$1 = cljs.core.__destructure_map(map__35306);
var props = map__35306__$1;
var ttt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35306__$1,new cljs.core.Keyword(null,"ttt","ttt",1858561240));
var container_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35306__$1,new cljs.core.Keyword(null,"container?","container?",-1563620041));
return React.createElement("div",null,React.createElement("div",({"className": "row"}),(function (){var attrs35307 = (predict_prostate.layout.result_panel.result_panel.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.layout.result_panel.result_panel.cljs$core$IFn$_invoke$arity$1(ttt) : predict_prostate.layout.result_panel.result_panel.call(null,ttt));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs35307))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["col-md-6","col-md-offset-1"], null)], null),attrs35307], 0))):({"className": "col-md-6 col-md-offset-1"})),((cljs.core.map_QMARK_(attrs35307))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs35307)], null)));
})(),(function (){var attrs35308 = (predict_prostate.layout.result_panel.side_panel.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.layout.result_panel.side_panel.cljs$core$IFn$_invoke$arity$1(ttt) : predict_prostate.layout.result_panel.side_panel.call(null,ttt));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs35308))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["col-md-4"], null)], null),attrs35308], 0))):({"className": "col-md-4"})),((cljs.core.map_QMARK_(attrs35308))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs35308)], null)));
})()));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"results");

//# sourceMappingURL=predict_prostate.layout.result_panel.js.map
