goog.provide('predict_prostate.layout.result_panel');
predict_prostate.layout.result_panel.result_tab_button = rum.core.build_defc((function (label){
return React.createElement("li",({"role": "presentation", "onClick": (function (){
return predict_prostate.state.run_time.active_results_change.pubsub$feeds$TopicFeed$publish$arity$2(null,label);
}), "style": ({"cursor": "pointer", "borderRadius": "3px", "backgroundColor": "#def"}), "key": label, "className": sablono.util.join_classes(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rum.core.react(predict_prostate.state.run_time.active_results_pane),label))?"active":null)], null))}),React.createElement("a",({"aria-controls": label, "role": "tab"}),sablono.interpreter.interpret(clojure.string.capitalize(label))));
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
predict_prostate.layout.result_panel.result_tabs = rum.core.build_defc((function (){
return React.createElement("ul",({"role": "tablist", "style": ({"fontSize": "16px"}), "className": "nav nav-pills"}),sablono.interpreter.interpret(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__143836_SHARP_){
return rum.core.with_key((predict_prostate.layout.result_panel.result_tab_button.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.layout.result_panel.result_tab_button.cljs$core$IFn$_invoke$arity$1(p1__143836_SHARP_) : predict_prostate.layout.result_panel.result_tab_button.call(null,p1__143836_SHARP_)),p1__143836_SHARP_);
}),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["charts","icons","curves","table","texts"], null))));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$], null),"result-tabs");
predict_prostate.layout.result_panel.result_panes = rum.core.build_defc((function (ttt){
var attrs143838 = (function (){var G__143839 = "charts";
var G__143840 = (function (){
var G__143841 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"Overall Survival"], null);
return (predict_prostate.results.charts.results_in_charts.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.charts.results_in_charts.cljs$core$IFn$_invoke$arity$1(G__143841) : predict_prostate.results.charts.results_in_charts.call(null,G__143841));
});
return (predict_prostate.layout.result_panel.result_tab_pane.cljs$core$IFn$_invoke$arity$2 ? predict_prostate.layout.result_panel.result_tab_pane.cljs$core$IFn$_invoke$arity$2(G__143839,G__143840) : predict_prostate.layout.result_panel.result_tab_pane.call(null,G__143839,G__143840));
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs143838))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["tab-content"], null)], null),attrs143838], 0))):({"className": "tab-content"})),((cljs.core.map_QMARK_(attrs143838))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret((function (){var G__143842 = "icons";
var G__143843 = (function (){
var G__143844 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ttt","ttt",1858561240),ttt], null);
return (predict_prostate.results.icons.results_in_icons_STAR_.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.icons.results_in_icons_STAR_.cljs$core$IFn$_invoke$arity$1(G__143844) : predict_prostate.results.icons.results_in_icons_STAR_.call(null,G__143844));
});
return (predict_prostate.layout.result_panel.result_tab_pane.cljs$core$IFn$_invoke$arity$2 ? predict_prostate.layout.result_panel.result_tab_pane.cljs$core$IFn$_invoke$arity$2(G__143842,G__143843) : predict_prostate.layout.result_panel.result_tab_pane.call(null,G__143842,G__143843));
})()),sablono.interpreter.interpret((function (){var G__143845 = "curves";
var G__143846 = (function (){
var G__143847 = cljs.core.PersistentArrayMap.EMPTY;
return (predict_prostate.results.curves.results_in_curves.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.curves.results_in_curves.cljs$core$IFn$_invoke$arity$1(G__143847) : predict_prostate.results.curves.results_in_curves.call(null,G__143847));
});
return (predict_prostate.layout.result_panel.result_tab_pane.cljs$core$IFn$_invoke$arity$2 ? predict_prostate.layout.result_panel.result_tab_pane.cljs$core$IFn$_invoke$arity$2(G__143845,G__143846) : predict_prostate.layout.result_panel.result_tab_pane.call(null,G__143845,G__143846));
})()),sablono.interpreter.interpret((predict_prostate.layout.result_panel.result_tab_pane.cljs$core$IFn$_invoke$arity$2 ? predict_prostate.layout.result_panel.result_tab_pane.cljs$core$IFn$_invoke$arity$2("table",predict_prostate.results.table.results_in_table) : predict_prostate.layout.result_panel.result_tab_pane.call(null,"table",predict_prostate.results.table.results_in_table))),sablono.interpreter.interpret((predict_prostate.layout.result_panel.result_tab_pane.cljs$core$IFn$_invoke$arity$2 ? predict_prostate.layout.result_panel.result_tab_pane.cljs$core$IFn$_invoke$arity$2("texts",predict_prostate.results.text.results_in_text) : predict_prostate.layout.result_panel.result_tab_pane.call(null,"texts",predict_prostate.results.text.results_in_text)))], null):new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs143838),sablono.interpreter.interpret((function (){var G__143848 = "icons";
var G__143849 = (function (){
var G__143850 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ttt","ttt",1858561240),ttt], null);
return (predict_prostate.results.icons.results_in_icons_STAR_.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.icons.results_in_icons_STAR_.cljs$core$IFn$_invoke$arity$1(G__143850) : predict_prostate.results.icons.results_in_icons_STAR_.call(null,G__143850));
});
return (predict_prostate.layout.result_panel.result_tab_pane.cljs$core$IFn$_invoke$arity$2 ? predict_prostate.layout.result_panel.result_tab_pane.cljs$core$IFn$_invoke$arity$2(G__143848,G__143849) : predict_prostate.layout.result_panel.result_tab_pane.call(null,G__143848,G__143849));
})()),sablono.interpreter.interpret((function (){var G__143851 = "curves";
var G__143852 = (function (){
var G__143853 = cljs.core.PersistentArrayMap.EMPTY;
return (predict_prostate.results.curves.results_in_curves.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.curves.results_in_curves.cljs$core$IFn$_invoke$arity$1(G__143853) : predict_prostate.results.curves.results_in_curves.call(null,G__143853));
});
return (predict_prostate.layout.result_panel.result_tab_pane.cljs$core$IFn$_invoke$arity$2 ? predict_prostate.layout.result_panel.result_tab_pane.cljs$core$IFn$_invoke$arity$2(G__143851,G__143852) : predict_prostate.layout.result_panel.result_tab_pane.call(null,G__143851,G__143852));
})()),sablono.interpreter.interpret((predict_prostate.layout.result_panel.result_tab_pane.cljs$core$IFn$_invoke$arity$2 ? predict_prostate.layout.result_panel.result_tab_pane.cljs$core$IFn$_invoke$arity$2("table",predict_prostate.results.table.results_in_table) : predict_prostate.layout.result_panel.result_tab_pane.call(null,"table",predict_prostate.results.table.results_in_table))),sablono.interpreter.interpret((predict_prostate.layout.result_panel.result_tab_pane.cljs$core$IFn$_invoke$arity$2 ? predict_prostate.layout.result_panel.result_tab_pane.cljs$core$IFn$_invoke$arity$2("texts",predict_prostate.results.text.results_in_text) : predict_prostate.layout.result_panel.result_tab_pane.call(null,"texts",predict_prostate.results.text.results_in_text)))], null)));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$], null),"result-panes");
predict_prostate.layout.result_panel.result_panel = rum.core.build_defc((function (ttt){
return React.createElement("div",({"id": "results"}),React.createElement("h3",({"style": ({"marginTop": (20)})}),"Results"),sablono.interpreter.interpret((predict_prostate.layout.result_panel.result_tabs.cljs$core$IFn$_invoke$arity$0 ? predict_prostate.layout.result_panel.result_tabs.cljs$core$IFn$_invoke$arity$0() : predict_prostate.layout.result_panel.result_tabs.call(null))),sablono.interpreter.interpret((predict_prostate.layout.treatments_panel.treatments_options.cljs$core$IFn$_invoke$arity$0 ? predict_prostate.layout.treatments_panel.treatments_options.cljs$core$IFn$_invoke$arity$0() : predict_prostate.layout.treatments_panel.treatments_options.call(null))),sablono.interpreter.interpret((predict_prostate.layout.result_panel.result_panes.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.layout.result_panel.result_panes.cljs$core$IFn$_invoke$arity$1(ttt) : predict_prostate.layout.result_panel.result_panes.call(null,ttt))));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"result-panel");
predict_prostate.layout.result_panel.side_panel = rum.core.build_defc((function (ttt){
return React.createElement("div",({"style": ({"marginTop": (20), "backgroundColor": predict_prostate.results.util.alison_blue_1}), "className": "well"}),sablono.interpreter.interpret(predict_prostate.content_reader.all_subsections(ttt,"tool-postamble")),sablono.interpreter.interpret((cljs.core.truth_((function (){var G__143868 = cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518)));
var fexpr__143867 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(4),null,(5),null], null), null);
return (fexpr__143867.cljs$core$IFn$_invoke$arity$1 ? fexpr__143867.cljs$core$IFn$_invoke$arity$1(G__143868) : fexpr__143867.call(null,G__143868));
})())?predict_prostate.content_reader.all_subsections(ttt,"high-grade-group-warning"):null)),sablono.interpreter.interpret(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"no","no",-390373634),cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"metastasis","metastasis",255525950)))))?predict_prostate.content_reader.all_subsections(ttt,"metastasis-warning"):null)),sablono.interpreter.interpret(predict_prostate.content_reader.all_subsections(ttt,"scroll-down-for")));
}),null,"side-panel");
predict_prostate.layout.result_panel.results = rum.core.build_defc((function (p__143873){
var map__143876 = p__143873;
var map__143876__$1 = (((((!((map__143876 == null))))?(((((map__143876.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__143876.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__143876):map__143876);
var props = map__143876__$1;
var ttt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__143876__$1,new cljs.core.Keyword(null,"ttt","ttt",1858561240));
var container_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__143876__$1,new cljs.core.Keyword(null,"container?","container?",-1563620041));
return React.createElement("div",null,React.createElement("div",({"className": "row"}),(function (){var attrs143882 = (predict_prostate.layout.result_panel.result_panel.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.layout.result_panel.result_panel.cljs$core$IFn$_invoke$arity$1(ttt) : predict_prostate.layout.result_panel.result_panel.call(null,ttt));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs143882))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["col-md-6","col-md-offset-1"], null)], null),attrs143882], 0))):({"className": "col-md-6 col-md-offset-1"})),((cljs.core.map_QMARK_(attrs143882))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs143882)], null)));
})(),(function (){var attrs143883 = (predict_prostate.layout.result_panel.side_panel.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.layout.result_panel.side_panel.cljs$core$IFn$_invoke$arity$1(ttt) : predict_prostate.layout.result_panel.side_panel.call(null,ttt));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs143883))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["col-md-4"], null)], null),attrs143883], 0))):({"className": "col-md-4"})),((cljs.core.map_QMARK_(attrs143883))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs143883)], null)));
})()));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"results");

//# sourceMappingURL=predict_prostate.layout.result_panel.js.map
