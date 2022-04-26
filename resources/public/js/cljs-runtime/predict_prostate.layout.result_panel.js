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
var G__56841 = arguments.length;
switch (G__56841) {
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

predict_prostate.layout.result_panel.result_tab_button = rum.core.lazy_build(rum.core.build_defc,(function (ttt,label_key){
return daiquiri.core.create_element("li",{'role':"presentation",'onClick':(function (){
return predict_prostate.state.run_time.active_results_change.pubsub$feeds$TopicFeed$publish$arity$2(null,cljs.core.name(label_key));
}),'style':{'cursor':"pointer",'borderRadius':"3px",'backgroundColor':"#def"},'key':cljs.core.name(label_key),'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(predict_prostate.layout.result_panel.safe_check.cljs$core$IFn$_invoke$arity$2(rum.core.react(predict_prostate.state.run_time.active_results_pane),label_key))?"active":null)], null))},[daiquiri.core.create_element("a",{'aria-controls':cljs.core.name(label_key),'role':"tab"},[daiquiri.interpreter.interpret((function (){var G__56843 = predict_prostate.layout.result_panel.tab_label_key(label_key);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__56843) : ttt.call(null,G__56843));
})())])]);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"predict-prostate.layout.result-panel/result-tab-button");
predict_prostate.layout.result_panel.result_tab_pane = rum.core.lazy_build(rum.core.build_defc,(function (label,content){
return daiquiri.core.create_element("div",{'id':label,'role':"tabpanel",'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["tab-pane",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rum.core.react(predict_prostate.state.run_time.active_results_pane),label))?"active":null)].join('')], null))},[((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rum.core.react(predict_prostate.state.run_time.active_results_pane),label))?(cljs.core.truth_(content)?(function (){
if((typeof window !== 'undefined') && (typeof window.ga !== 'undefined')){
window.ga("send","event","Results Tab",label);
} else {
}

return daiquiri.interpreter.interpret((content.cljs$core$IFn$_invoke$arity$0 ? content.cljs$core$IFn$_invoke$arity$0() : content.call(null)));
})()
:daiquiri.core.create_element("p",null,["No content yet"])):null)]);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"predict-prostate.layout.result-panel/result-tab-pane");
predict_prostate.layout.result_panel.result_tabs = rum.core.lazy_build(rum.core.build_defc,(function (ttt){
return daiquiri.core.create_element("ul",{'role':"tablist",'style':{'fontSize':"16px"},'className':"nav nav-pills"},[daiquiri.interpreter.interpret(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__56846_SHARP_){
return rum.core.with_key(predict_prostate.layout.result_panel.result_tab_button(ttt,p1__56846_SHARP_),cljs.core.name(p1__56846_SHARP_));
}),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"charts","charts",555258811),new cljs.core.Keyword(null,"icons","icons",-297140977),new cljs.core.Keyword(null,"curves","curves",-510805378),new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.Keyword(null,"texts","texts",-2031072472)], null)))]);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$], null),"predict-prostate.layout.result-panel/result-tabs");
predict_prostate.layout.result_panel.result_panes = rum.core.lazy_build(rum.core.build_defc,(function (ttt){
return daiquiri.core.create_element("div",{'className':"tab-content"},[predict_prostate.layout.result_panel.result_tab_pane("charts",(function (){
return predict_prostate.results.charts.results_in_charts(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),(function (){var G__56850 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chart","title","chart/title",739030541),"Overall Survival"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__56850) : ttt.call(null,G__56850));
})(),new cljs.core.Keyword(null,"ttt","ttt",1858561240),ttt], null));
})),predict_prostate.layout.result_panel.result_tab_pane("icons",(function (){
return predict_prostate.results.icons.results_in_icons_STAR_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ttt","ttt",1858561240),ttt], null));
})),predict_prostate.layout.result_panel.result_tab_pane("curves",(function (){
return predict_prostate.results.curves.results_in_curves(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ttt","ttt",1858561240),ttt], null));
})),predict_prostate.layout.result_panel.result_tab_pane("table",(function (){
return predict_prostate.results.table.results_in_table(ttt);
})),predict_prostate.layout.result_panel.result_tab_pane("texts",(function (){
return predict_prostate.results.text.results_in_text(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ttt","ttt",1858561240),ttt], null));
}))]);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$], null),"predict-prostate.layout.result-panel/result-panes");
predict_prostate.layout.result_panel.result_panel = rum.core.lazy_build(rum.core.build_defc,(function (ttt){
return daiquiri.core.create_element("div",{'id':"results"},[daiquiri.core.create_element("h3",{'style':{'marginTop':(20)}},[daiquiri.interpreter.interpret((function (){var G__56852 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("results","title","results/title",-565898779),"Results"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__56852) : ttt.call(null,G__56852));
})())]),predict_prostate.layout.result_panel.result_tabs(ttt),predict_prostate.layout.treatments_panel.treatments_options(ttt),predict_prostate.layout.result_panel.result_panes(ttt)]);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"predict-prostate.layout.result-panel/result-panel");
predict_prostate.layout.result_panel.side_panel = rum.core.lazy_build(rum.core.build_defc,(function (ttt){
return daiquiri.core.create_element("div",{'style':{'marginTop':(20),'backgroundColor':predict_prostate.results.util.alison_blue_1},'className':"well"},[daiquiri.interpreter.interpret(predict_prostate.content_reader.all_subsections(ttt,"tool-postamble")),(cljs.core.truth_((function (){var G__56854 = cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518)));
var fexpr__56853 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(4),null,(5),null], null), null);
return (fexpr__56853.cljs$core$IFn$_invoke$arity$1 ? fexpr__56853.cljs$core$IFn$_invoke$arity$1(G__56854) : fexpr__56853.call(null,G__56854));
})())?daiquiri.interpreter.interpret(predict_prostate.content_reader.all_subsections(ttt,"high-grade-group-warning")):null),((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"no","no",-390373634),cljs.core.deref(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"metastasis","metastasis",255525950)))))?daiquiri.interpreter.interpret(predict_prostate.content_reader.all_subsections(ttt,"metastasis-warning")):null),daiquiri.interpreter.interpret(predict_prostate.content_reader.all_subsections(ttt,"scroll-down-for"))]);
}),null,"predict-prostate.layout.result-panel/side-panel");
predict_prostate.layout.result_panel.results = rum.core.lazy_build(rum.core.build_defc,(function (p__56855){
var map__56856 = p__56855;
var map__56856__$1 = cljs.core.__destructure_map(map__56856);
var props = map__56856__$1;
var ttt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56856__$1,new cljs.core.Keyword(null,"ttt","ttt",1858561240));
var container_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56856__$1,new cljs.core.Keyword(null,"container?","container?",-1563620041));
return daiquiri.core.create_element("div",null,[daiquiri.core.create_element("div",{'className':"row"},[daiquiri.core.create_element("div",{'className':"col-md-6 col-md-offset-1"},[predict_prostate.layout.result_panel.result_panel(ttt)]),daiquiri.core.create_element("div",{'className':"col-md-4"},[predict_prostate.layout.result_panel.side_panel(ttt)])])]);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"predict-prostate.layout.result-panel/results");

//# sourceMappingURL=predict_prostate.layout.result_panel.js.map
