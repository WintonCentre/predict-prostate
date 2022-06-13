goog.provide('predict_prostate.components.helpful_form_groups');
predict_prostate.components.helpful_form_groups.helpful_input = rum.core.build_defc((function (p__34471,children){
var map__34472 = p__34471;
var map__34472__$1 = cljs.core.__destructure_map(map__34472);
var props = map__34472__$1;
var ttt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34472__$1,new cljs.core.Keyword(null,"ttt","ttt",1858561240));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34472__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34472__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34472__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var help_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34472__$1,new cljs.core.Keyword(null,"help-id","help-id",-1064550845));
return React.createElement("div",({"key": key, "data-key": key, "style": ({"verticalAlign": "top", "width": "100%", "display": "inline-block"}), "className": sablono.util.join_classes(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["form-group",(cljs.core.truth_(error)?" has-error":"")].join('')], null))}),React.createElement("div",({"style": ({"display": "inline-block", "marginLeft": "10px", "width": "30px", "verticalAlign": "middle"})}),sablono.interpreter.interpret((cljs.core.truth_(help_id)?(function (){var G__34476 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"help-id","help-id",-1064550845),help_id], null);
return (predict_prostate.components.button.small_help_button.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.components.button.small_help_button.cljs$core$IFn$_invoke$arity$1(G__34476) : predict_prostate.components.button.small_help_button.call(null,G__34476));
})():null))),React.createElement("div",({"style": ({"display": "inline-block", "verticalAlign": "middle", "width": "100px"})}),React.createElement("label",({"style": sablono.interpreter.attributes(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"textAlign","textAlign",-711351626),"left",new cljs.core.Keyword(null,"padding","padding",1660304693),"1px 5px",new cljs.core.Keyword(null,"word-break","word-break",-407281356),"break-word"], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rum.core.react(predict_prostate.state.run_time.input_cursor(key)),new cljs.core.Keyword(null,"disabled","disabled",-1529784218)))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#CCC"], null):null)], 0))), "className": "control-label", "htmlFor": cljs.core.name(key)}),sablono.interpreter.interpret(predict_prostate.components.util.widget_ttt(ttt,"help",key,label)))),React.createElement("div",({"style": ({"display": "inline-block", "marginLeft": "10px", "textAlign": "left", "width": "auto", "verticalAlign": "middle"})}),React.createElement("div",({"style": ({"paddingLeft": (0), "display": "inline-block", "verticalAlign": "middle"})}),sablono.interpreter.interpret(children))));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$,rum.core.reactive], null),"helpful-input");
predict_prostate.components.helpful_form_groups.form_entry = rum.core.build_defc((function (p__34477){
var map__34478 = p__34477;
var map__34478__$1 = cljs.core.__destructure_map(map__34478);
var ttt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34478__$1,new cljs.core.Keyword(null,"ttt","ttt",1858561240));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34478__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34478__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
return sablono.interpreter.interpret((function (){var G__34479 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"ttt","ttt",1858561240),(cljs.core.truth_(ttt)?ttt:rum.core.react(predict_prostate.state.run_time.ttt_cursor)),new cljs.core.Keyword(null,"label","label",1718410804),predict_prostate.state.run_time.input_label(key),new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"help-id","help-id",-1064550845),(cljs.core.truth_(label)?clojure.string.replace(clojure.string.lower_case(label)," ","-"):null),new cljs.core.Keyword(null,"error","error",-978969032),predict_prostate.state.run_time.error_QMARK_(rum.core.react(predict_prostate.state.run_time.input_cursor(key)))], null);
var G__34480 = predict_prostate.state.load_config.render_widget(ttt,key);
return (predict_prostate.components.helpful_form_groups.helpful_input.cljs$core$IFn$_invoke$arity$2 ? predict_prostate.components.helpful_form_groups.helpful_input.cljs$core$IFn$_invoke$arity$2(G__34479,G__34480) : predict_prostate.components.helpful_form_groups.helpful_input.call(null,G__34479,G__34480));
})());
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,predict_prostate.mixins.active_monitor], null),"form-entry");

//# sourceMappingURL=predict_prostate.components.helpful_form_groups.js.map
