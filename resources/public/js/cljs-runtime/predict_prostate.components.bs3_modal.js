goog.provide('predict_prostate.components.bs3_modal');
predict_prostate.components.bs3_modal.hide = (function predict_prostate$components$bs3_modal$hide(element_id){
return interop.jsx.jq$call.cljs$core$IFn$_invoke$arity$3(element_id,"modal","hide");
});
/**
 * Note that we are assuming the _single_ modal dialog is mounted on #topModal since we
 *                    are using jQuery to locate it.
 */
predict_prostate.components.bs3_modal.top_modal = rum.core.build_defc((function (){
var help_key = rum.core.react(predict_prostate.state.run_time.help_key_cursor);
var help = predict_prostate.content_reader.section.cljs$core$IFn$_invoke$arity$1(help_key);
var vec__34424 = ((cljs.core.seq(help))?help:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["help header",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"red"], null)], null),"add content for ",help_key], null)], null));
var seq__34425 = cljs.core.seq(vec__34424);
var first__34426 = cljs.core.first(seq__34425);
var seq__34425__$1 = cljs.core.next(seq__34425);
var help_header = first__34426;
var help_content = seq__34425__$1;
var help_text = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.cons(new cljs.core.Keyword(null,"div","div",1057191632),help_content));
return React.createElement("div",({"id": "topModal", "role": "dialog", "aria-hidden": "true", "className": "modal fade"}),React.createElement("div",({"className": "modal-dialog"}),React.createElement("div",({"className": "modal-content"}),React.createElement("div",({"className": "modal-header"}),React.createElement("button",({"type": "button ", "onClick": (function (){
return predict_prostate.state.run_time.help_key_change.pubsub$feeds$TopicFeed$publish$arity$2(null,null);
}), "aria-hidden": true, "dangerouslySetInnerHTML": ({"__html": "&times;"}), "className": "close"})),(function (){var attrs34431 = help_header;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"h4",((cljs.core.map_QMARK_(attrs34431))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["modal-title"], null)], null),attrs34431], 0))):({"className": "modal-title"})),((cljs.core.map_QMARK_(attrs34431))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs34431)], null)));
})()),(function (){var attrs34430 = help_text;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs34430))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["modal-body"], null)], null),attrs34430], 0))):({"className": "modal-body"})),((cljs.core.map_QMARK_(attrs34430))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs34430)], null)));
})(),React.createElement("div",({"className": "modal-footer"}),React.createElement("button",({"type": "button", "onClick": (function (){
return predict_prostate.state.run_time.help_key_change.pubsub$feeds$TopicFeed$publish$arity$2(null,null);
}), "className": "btn btn-default"}),"Close")))));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"top-modal");
predict_prostate.components.bs3_modal.cancel_or_print = rum.core.build_defc((function (){
return React.createElement("div",({"className": "pull-right"}),React.createElement("button",({"type": "button", "onClick": (function (){
return interop.jsx.jq$call.cljs$core$IFn$_invoke$arity$3("#printModal","modal","hide");
}), "className": "btn btn-default"}),"Cancel")," ",React.createElement("button",({"type": "button", "onClick": (function (){
interop.jsx.jq$call.cljs$core$IFn$_invoke$arity$3("#printModal","modal","hide");

return print();
}), "className": "btn btn-primary"}),sablono.interpreter.interpret((function (){var G__34434 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"family","family",-1313145692),new cljs.core.Keyword(null,"fa","fa",484981183)], null);
var G__34435 = "print";
return (graphics.simple_icons.icon.cljs$core$IFn$_invoke$arity$2 ? graphics.simple_icons.icon.cljs$core$IFn$_invoke$arity$2(G__34434,G__34435) : graphics.simple_icons.icon.call(null,G__34434,G__34435));
})())," Print"));
}),null,"cancel-or-print");
/**
 * Note that we are assuming the _single_ modal dialog is mounted on #topModal since we
 *                      are using jQuery to locate it.
 */
predict_prostate.components.bs3_modal.print_modal = rum.core.build_defc((function (){
return React.createElement("div",null,React.createElement("div",({"id": "printModal", "role": "dialog", "tabIndex": (-1), "aria-hidden": "true", "className": "modal fade"}),React.createElement("div",({"className": "modal-dialog screen-only"}),React.createElement("div",({"className": "modal-content"}),(function (){var attrs34438 = (predict_prostate.components.bs3_modal.cancel_or_print.cljs$core$IFn$_invoke$arity$0 ? predict_prostate.components.bs3_modal.cancel_or_print.cljs$core$IFn$_invoke$arity$0() : predict_prostate.components.bs3_modal.cancel_or_print.call(null));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs34438))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["modal-header"], null)], null),attrs34438], 0))):({"className": "modal-header"})),((cljs.core.map_QMARK_(attrs34438))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs34438)], null)));
})(),(function (){var attrs34439 = (cljs.core.truth_((function (){var and__4115__auto__ = rum.core.react(predict_prostate.state.run_time.print_cursor);
if(cljs.core.truth_(and__4115__auto__)){
return rum.core.react(predict_prostate.state.run_time.results_cursor);
} else {
return and__4115__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),rum.core.with_key((predict_prostate.results.printable.results_in_print.cljs$core$IFn$_invoke$arity$0 ? predict_prostate.results.printable.results_in_print.cljs$core$IFn$_invoke$arity$0() : predict_prostate.results.printable.results_in_print.call(null)),(2))], null):null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs34439))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["modal-body"], null)], null),attrs34439], 0))):({"className": "modal-body"})),((cljs.core.map_QMARK_(attrs34439))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs34439)], null)));
})(),(function (){var attrs34440 = (predict_prostate.components.bs3_modal.cancel_or_print.cljs$core$IFn$_invoke$arity$0 ? predict_prostate.components.bs3_modal.cancel_or_print.cljs$core$IFn$_invoke$arity$0() : predict_prostate.components.bs3_modal.cancel_or_print.call(null));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs34440))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["modal-footer"], null)], null),attrs34440], 0))):({"className": "modal-footer"})),((cljs.core.map_QMARK_(attrs34440))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs34440)], null)));
})()))),React.createElement("div",({"style": ({"margin": "0 20px"}), "className": "print-only"}),sablono.interpreter.interpret((cljs.core.truth_((function (){var and__4115__auto__ = rum.core.react(predict_prostate.state.run_time.print_cursor);
if(cljs.core.truth_(and__4115__auto__)){
return rum.core.react(predict_prostate.state.run_time.results_cursor);
} else {
return and__4115__auto__;
}
})())?(predict_prostate.results.printable.results_in_print.cljs$core$IFn$_invoke$arity$0 ? predict_prostate.results.printable.results_in_print.cljs$core$IFn$_invoke$arity$0() : predict_prostate.results.printable.results_in_print.call(null)):null))));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"print-modal");
/**
 * Note that we are assuming the _single_ modal dialog is mounted on #topModal since we
 *                         are using jQuery to locate it.
 */
predict_prostate.components.bs3_modal.settings_modal = rum.core.build_defc((function (){
return React.createElement("div",({"id": "settingsModal", "role": "dialog", "aria-hidden": "true", "className": "modal fade"}),React.createElement("div",({"className": "modal-dialog"}),React.createElement("div",({"className": "modal-content"}),React.createElement("div",({"className": "modal-header"}),React.createElement("button",({"type": "button ", "onClick": (function (){
return predict_prostate.state.run_time.settings_change.pubsub$feeds$TopicFeed$publish$arity$2(null,null);
}), "aria-hidden": true, "dangerouslySetInnerHTML": ({"__html": "&times;"}), "className": "close"})),React.createElement("h4",({"className": "modal-title"}),"Settings")),React.createElement("div",({"className": "modal-body"}),React.createElement("p",null,"Choose a plot style for treatment benefit"),sablono.interpreter.interpret(predict_prostate.state.run_time.input_widget(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355))),React.createElement("div",({"className": "modal-footer"}),React.createElement("button",({"type": "button", "onClick": (function (){
return predict_prostate.state.run_time.settings_change.pubsub$feeds$TopicFeed$publish$arity$2(null,null);
}), "className": "btn btn-default"}),"Close"))))));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"settings-modal");

//# sourceMappingURL=predict_prostate.components.bs3_modal.js.map
