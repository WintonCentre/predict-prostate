goog.provide('predict_prostate.layout.treatments_panel');
predict_prostate.layout.treatments_panel.treatments_style = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"treatments-header","treatments-header",-410398467),"treatments-header--G__34210"], null);

cljs_css_modules.runtime.inject_style_BANG_(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(garden.core.css,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["div",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"12px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [".treatments-header--G__34210",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"rgba(255, 140, 0, 1) !important",new cljs.core.Keyword(null,"color","color",1011675173),"white !important",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"10px !important"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["form",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border","border",1444987323),"1px solid red"], null)], null)], null)], null)),"predict-prostate.layout.treatments-panel","treatments-style");
predict_prostate.layout.treatments_panel.treatment_input_style = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"closer","closer",10992481),"closer--G__34219"], null);

cljs_css_modules.runtime.inject_style_BANG_(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(garden.core.css,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [".closer--G__34219",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"10px"], null)], null)], null)),"predict-prostate.layout.treatments-panel","treatment-input-style");
predict_prostate.layout.treatments_panel.dummy_input = rum.core.build_defc((function (p__34227,children){
var map__34229 = p__34227;
var map__34229__$1 = (((((!((map__34229 == null))))?(((((map__34229.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34229.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34229):map__34229);
var props = map__34229__$1;
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34229__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var help_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34229__$1,new cljs.core.Keyword(null,"help-id","help-id",-1064550845));
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34229__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34229__$1,new cljs.core.Keyword(null,"error","error",-978969032));
return React.createElement("div",({"key": key, "data-key": key, "style": ({"verticalAlign": "top", "width": "100%", "display": "inline-block"}), "className": sablono.util.join_classes(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["form-group "], null))}),React.createElement("div",({"style": ({"display": "inline-block", "marginLeft": "10px", "width": "30px", "verticalAlign": "middle"})}),sablono.interpreter.interpret((cljs.core.truth_(help_id)?(function (){var G__34234 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"help-id","help-id",-1064550845),clojure.string.replace(clojure.string.lower_case(help_id)," ","-")], null);
return (predict_prostate.components.button.small_help_button.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.components.button.small_help_button.cljs$core$IFn$_invoke$arity$1(G__34234) : predict_prostate.components.button.small_help_button.call(null,G__34234));
})():null))),React.createElement("div",({"style": ({"display": "inline-block", "verticalAlign": "middle", "width": "100px"})}),React.createElement("label",({"style": ({"width": "100%", "textAlign": "left", "padding": "1px 5px"}), "className": "control-label", "htmlFor": cljs.core.name(key)}),sablono.interpreter.interpret(label))),React.createElement("div",({"style": ({"display": "inline-block", "marginLeft": "10px", "textAlign": "left", "width": "auto", "verticalAlign": "middle"})}),React.createElement("div",({"style": ({"paddingLeft": (0), "display": "inline-block", "verticalAlign": "middle"})}),sablono.interpreter.interpret(children))));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,rum.core.static$], null),"dummy-input");
predict_prostate.layout.treatments_panel.treatment_input = rum.core.build_defc((function (p__34237,children){
var map__34238 = p__34237;
var map__34238__$1 = (((((!((map__34238 == null))))?(((((map__34238.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34238.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34238):map__34238);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34238__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var help_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34238__$1,new cljs.core.Keyword(null,"help-id","help-id",-1064550845));
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34238__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var tk = key;
return React.createElement("div",({"key": key, "data-key": key, "style": ({"verticalAlign": "top", "width": "100%", "display": "inline-block"}), "className": sablono.util.join_classes(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["form-group "], null))}),React.createElement("div",({"style": ({"display": "inline-block", "marginLeft": "10px", "width": "30px", "verticalAlign": "middle"})}),sablono.interpreter.interpret((cljs.core.truth_(help_id)?(function (){var G__34241 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"help-id","help-id",-1064550845),clojure.string.replace(clojure.string.lower_case(help_id)," ","-")], null);
return (predict_prostate.components.button.small_help_button.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.components.button.small_help_button.cljs$core$IFn$_invoke$arity$1(G__34241) : predict_prostate.components.button.small_help_button.call(null,G__34241));
})():null))),React.createElement("div",({"style": ({"display": "inline-block", "verticalAlign": "middle", "width": "100px"})}),React.createElement("label",({"style": sablono.interpreter.attributes(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),"100px",new cljs.core.Keyword(null,"textAlign","textAlign",-711351626),"left",new cljs.core.Keyword(null,"padding","padding",1660304693),"1px 5px"], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"disabled","disabled",-1529784218),rum.core.react(predict_prostate.state.run_time.input_cursor(key))))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#CCC"], null):null)], 0))), "className": "control-label", "htmlFor": cljs.core.name(key)}),sablono.interpreter.interpret(label))),React.createElement("div",({"style": ({"display": "inline-block", "marginLeft": "10px", "textAlign": "left", "width": "auto", "verticalAlign": "middle"})}),React.createElement("div",({"style": ({"paddingLeft": (0), "display": "inline-block", "verticalAlign": "middle"})}),sablono.interpreter.interpret(children))));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,rum.core.static$,predict_prostate.mixins.treatment_monitor], null),"treatment-input");
predict_prostate.layout.treatments_panel.add_suffix = (function predict_prostate$layout$treatments_panel$add_suffix(key,n){
return key;
});
/**
 * Creates a labelled treatment input widget for the given treatment option and key
 */
predict_prostate.layout.treatments_panel.assumed_treatment = rum.core.build_defc((function (label,key){
return sablono.interpreter.interpret((function (){var G__34243 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),predict_prostate.state.run_time.input_label(key),new cljs.core.Keyword(null,"help-id","help-id",-1064550845),label,new cljs.core.Keyword(null,"key","key",-1516042587),key], null);
var G__34244 = predict_prostate.state.run_time.input_widget(key);
return (predict_prostate.layout.treatments_panel.dummy_input.cljs$core$IFn$_invoke$arity$2 ? predict_prostate.layout.treatments_panel.dummy_input.cljs$core$IFn$_invoke$arity$2(G__34243,G__34244) : predict_prostate.layout.treatments_panel.dummy_input.call(null,G__34243,G__34244));
})());
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"assumed-treatment");
/**
 * Creates a labelled treatment input widget for the given treatment option and key
 */
predict_prostate.layout.treatments_panel.labelled_treatment = rum.core.build_defc((function (label,key){
return sablono.interpreter.interpret((function (){var G__34245 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),predict_prostate.state.run_time.input_label(key),new cljs.core.Keyword(null,"help-id","help-id",-1064550845),label,new cljs.core.Keyword(null,"key","key",-1516042587),key], null);
var G__34246 = predict_prostate.state.run_time.input_widget(key);
return (predict_prostate.layout.treatments_panel.treatment_input.cljs$core$IFn$_invoke$arity$2 ? predict_prostate.layout.treatments_panel.treatment_input.cljs$core$IFn$_invoke$arity$2(G__34245,G__34246) : predict_prostate.layout.treatments_panel.treatment_input.call(null,G__34245,G__34246));
})());
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"labelled-treatment");
predict_prostate.layout.treatments_panel.treatments_form = rum.core.build_defcs((function (state,p__34247){
var map__34248 = p__34247;
var map__34248__$1 = (((((!((map__34248 == null))))?(((((map__34248.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34248.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34248):map__34248);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__34248__$1,new cljs.core.Keyword(null,"width","width",-384071477),"100%");
var font_scale = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__34248__$1,new cljs.core.Keyword(null,"font-scale","font-scale",1496075293),(1));
var h_over_w = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__34248__$1,new cljs.core.Keyword(null,"h-over-w","h-over-w",-704124296),(1));
var option = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34248__$1,new cljs.core.Keyword(null,"option","option",65132272));
var width_1 = rum.core.react(new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(state));
return React.createElement("form",({"style": ({"width": width, "fontSize": ((width_1 / (25)) * font_scale)}), "className": "form-horizontal"}),(function (){var attrs34255 = (predict_prostate.layout.treatments_panel.labelled_treatment.cljs$core$IFn$_invoke$arity$2 ? predict_prostate.layout.treatments_panel.labelled_treatment.cljs$core$IFn$_invoke$arity$2("Regime",new cljs.core.Keyword(null,"primary-rx","primary-rx",-1656848904)) : predict_prostate.layout.treatments_panel.labelled_treatment.call(null,"Regime",new cljs.core.Keyword(null,"primary-rx","primary-rx",-1656848904)));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs34255))?sablono.interpreter.attributes(attrs34255):null),((cljs.core.map_QMARK_(attrs34255))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs34255)], null)));
})());
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,predict_prostate.mixins.sizing_mixin], null),"treatments-form");
predict_prostate.layout.treatments_panel.treatments_options = rum.core.build_defc((function (){
return sablono.interpreter.interpret((cljs.core.truth_(rum.core.react(predict_prostate.state.run_time.results_cursor))?(function (){var G__34256 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"h-over-w","h-over-w",-704124296),1.5], null);
return (predict_prostate.layout.treatments_panel.treatments_form.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.layout.treatments_panel.treatments_form.cljs$core$IFn$_invoke$arity$1(G__34256) : predict_prostate.layout.treatments_panel.treatments_form.call(null,G__34256));
})():null));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"treatments-options");

//# sourceMappingURL=predict_prostate.layout.treatments_panel.js.map