goog.provide('predict_prostate.layout.treatments_panel');
predict_prostate.layout.treatments_panel.treatments_style = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"treatments-header","treatments-header",-410398467),"treatments-header--G__48338"], null);

cljs_css_modules.runtime.inject_style_BANG_(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(garden.core.css,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["div",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"12px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [".treatments-header--G__48338",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"rgba(255, 140, 0, 1) !important",new cljs.core.Keyword(null,"color","color",1011675173),"white !important",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"10px !important"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["form",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border","border",1444987323),"1px solid red"], null)], null)], null)], null)),"predict-prostate.layout.treatments-panel","treatments-style");
predict_prostate.layout.treatments_panel.treatment_input_style = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"closer","closer",10992481),"closer--G__48340"], null);

cljs_css_modules.runtime.inject_style_BANG_(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(garden.core.css,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [".closer--G__48340",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"10px"], null)], null)], null)),"predict-prostate.layout.treatments-panel","treatment-input-style");
predict_prostate.layout.treatments_panel.dummy_input = rum.core.lazy_build(rum.core.build_defc,(function (p__48345,children){
var map__48346 = p__48345;
var map__48346__$1 = cljs.core.__destructure_map(map__48346);
var props = map__48346__$1;
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48346__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var help_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48346__$1,new cljs.core.Keyword(null,"help-id","help-id",-1064550845));
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48346__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48346__$1,new cljs.core.Keyword(null,"error","error",-978969032));
return daiquiri.core.create_element("div",{'key':key,'data-key':key,'style':{'verticalAlign':"top",'width':"100%",'display':"inline-block"},'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["form-group "], null))},[daiquiri.core.create_element("div",{'style':{'display':"inline-block",'marginLeft':"10px",'width':"30px",'verticalAlign':"middle"}},[(cljs.core.truth_(help_id)?predict_prostate.components.button.small_help_button(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"help-id","help-id",-1064550845),clojure.string.replace(clojure.string.lower_case(help_id)," ","-")], null)):null)]),daiquiri.core.create_element("div",{'style':{'display':"inline-block",'verticalAlign':"middle",'width':"100px"}},[daiquiri.core.create_element("label",{'style':{'width':"100%",'textAlign':"left",'padding':"1px 5px"},'className':"control-label",'htmlFor':cljs.core.name(key)},[daiquiri.interpreter.interpret(label)])]),daiquiri.core.create_element("div",{'style':{'display':"inline-block",'marginLeft':"10px",'textAlign':"left",'width':"auto",'verticalAlign':"middle"}},[daiquiri.core.create_element("div",{'style':{'paddingLeft':(0),'display':"inline-block",'verticalAlign':"middle"}},[daiquiri.interpreter.interpret(children)])])]);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,rum.core.static$], null),"predict-prostate.layout.treatments-panel/dummy-input");
predict_prostate.layout.treatments_panel.treatment_input = rum.core.lazy_build(rum.core.build_defc,(function (p__48356,children){
var map__48357 = p__48356;
var map__48357__$1 = cljs.core.__destructure_map(map__48357);
var ttt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48357__$1,new cljs.core.Keyword(null,"ttt","ttt",1858561240));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48357__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var help_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48357__$1,new cljs.core.Keyword(null,"help-id","help-id",-1064550845));
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48357__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var tk = key;
return daiquiri.core.create_element("div",{'key':key,'data-key':key,'style':{'verticalAlign':"top",'width':"100%",'display':"inline-block"},'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["form-group "], null))},[daiquiri.core.create_element("div",{'style':{'display':"inline-block",'marginLeft':"10px",'width':"30px",'verticalAlign':"middle"}},[(cljs.core.truth_(help_id)?predict_prostate.components.button.small_help_button(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"help-id","help-id",-1064550845),clojure.string.replace(clojure.string.lower_case(help_id)," ","-")], null)):null)]),daiquiri.core.create_element("div",{'style':{'display':"inline-block",'verticalAlign':"middle",'width':"100px"}},[daiquiri.core.create_element("label",{'style':daiquiri.interpreter.element_attributes(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),"100px",new cljs.core.Keyword(null,"textAlign","textAlign",-711351626),"left",new cljs.core.Keyword(null,"padding","padding",1660304693),"1px 5px"], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"disabled","disabled",-1529784218),rum.core.react(predict_prostate.state.run_time.input_cursor(key))))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#CCC"], null):null)], 0))),'className':"control-label",'htmlFor':cljs.core.name(key)},[daiquiri.interpreter.interpret((function (){var G__48363 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(["treatment/",cljs.core.name(key)].join('')),label], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__48363) : ttt.call(null,G__48363));
})())])]),daiquiri.core.create_element("div",{'style':{'display':"inline-block",'marginLeft':"10px",'textAlign':"left",'width':"auto",'verticalAlign':"middle"}},[daiquiri.core.create_element("div",{'style':{'paddingLeft':(0),'display':"inline-block",'verticalAlign':"middle"}},[daiquiri.interpreter.interpret(children)])])]);
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,rum.core.static$,predict_prostate.mixins.treatment_monitor], null),"predict-prostate.layout.treatments-panel/treatment-input");
predict_prostate.layout.treatments_panel.add_suffix = (function predict_prostate$layout$treatments_panel$add_suffix(key,n){
return key;
});
/**
 * Creates a labelled treatment input widget for the given treatment option and key
 */
predict_prostate.layout.treatments_panel.assumed_treatment = rum.core.lazy_build(rum.core.build_defc,(function (label,key){
return predict_prostate.layout.treatments_panel.dummy_input(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),predict_prostate.state.run_time.input_label(key),new cljs.core.Keyword(null,"help-id","help-id",-1064550845),label,new cljs.core.Keyword(null,"key","key",-1516042587),key], null),predict_prostate.state.run_time.input_widget(key));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"predict-prostate.layout.treatments-panel/assumed-treatment");
/**
 * Creates a labelled treatment input widget for the given treatment option and key
 */
predict_prostate.layout.treatments_panel.labelled_treatment = rum.core.lazy_build(rum.core.build_defc,(function (ttt,label,key){
return predict_prostate.layout.treatments_panel.treatment_input(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ttt","ttt",1858561240),ttt,new cljs.core.Keyword(null,"label","label",1718410804),predict_prostate.state.run_time.input_label(key),new cljs.core.Keyword(null,"help-id","help-id",-1064550845),label,new cljs.core.Keyword(null,"key","key",-1516042587),key], null),predict_prostate.state.load_config.render_widget(ttt,key));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"predict-prostate.layout.treatments-panel/labelled-treatment");
predict_prostate.layout.treatments_panel.treatments_form = rum.core.lazy_build(rum.core.build_defcs,(function (state,p__48367){
var map__48368 = p__48367;
var map__48368__$1 = cljs.core.__destructure_map(map__48368);
var ttt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48368__$1,new cljs.core.Keyword(null,"ttt","ttt",1858561240));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48368__$1,new cljs.core.Keyword(null,"width","width",-384071477),"100%");
var font_scale = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48368__$1,new cljs.core.Keyword(null,"font-scale","font-scale",1496075293),(1));
var h_over_w = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48368__$1,new cljs.core.Keyword(null,"h-over-w","h-over-w",-704124296),(1));
var option = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48368__$1,new cljs.core.Keyword(null,"option","option",65132272));
var width_1 = rum.core.react(new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(state));
return daiquiri.core.create_element("form",{'style':{'width':width,'fontSize':((width_1 / (25)) * font_scale)},'className':"form-horizontal"},[daiquiri.core.create_element("div",null,[predict_prostate.layout.treatments_panel.labelled_treatment(ttt,"Regime",new cljs.core.Keyword(null,"primary-rx","primary-rx",-1656848904))])]);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,predict_prostate.mixins.sizing_mixin], null),"predict-prostate.layout.treatments-panel/treatments-form");
predict_prostate.layout.treatments_panel.treatments_options = rum.core.lazy_build(rum.core.build_defc,(function (ttt){
if(cljs.core.truth_(rum.core.react(predict_prostate.state.run_time.results_cursor))){
return predict_prostate.layout.treatments_panel.treatments_form(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ttt","ttt",1858561240),ttt,new cljs.core.Keyword(null,"h-over-w","h-over-w",-704124296),1.5], null));
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"predict-prostate.layout.treatments-panel/treatments-options");

//# sourceMappingURL=predict_prostate.layout.treatments_panel.js.map
