goog.provide('predict_prostate.components.bs3_modal');
predict_prostate.components.bs3_modal.some_text_QMARK_ = (function predict_prostate$components$bs3_modal$some_text_QMARK_(text){
if((((!((text == null)))) && (true))){
return text;
} else {
return null;
}
});
predict_prostate.components.bs3_modal.editor_modal = rum.core.build_defc((function (){
var edit_m = rum.core.react(predict_prostate.state.run_time.edit_cursor);
var edit_key = new cljs.core.Keyword(null,"edit-key","edit-key",-1833788727).cljs$core$IFn$_invoke$arity$1(edit_m);
var old_text = new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(edit_m);
var new_text = new cljs.core.Keyword(null,"new-text","new-text",962412088).cljs$core$IFn$_invoke$arity$1(edit_m);
var submit = (function (){
var temp__5751__auto___36481 = predict_prostate.components.bs3_modal.some_text_QMARK_(new_text);
if(cljs.core.truth_(temp__5751__auto___36481)){
var new_text_STAR__36482 = temp__5751__auto___36481;
predict_prostate.state.run_time.text_change.pubsub$feeds$TopicFeed$publish$arity$2(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [edit_key,new_text_STAR__36482], null));
} else {
}

return $("#editorModal").modal("hide");
});
return React.createElement("div",({"id": "editorModal", "role": "dialog", "tabIndex": (-1), "aria-hidden": "true", "className": "modal fade"}),React.createElement("div",({"className": "modal-dialog"}),React.createElement("div",({"className": "modal-content"}),React.createElement("div",({"className": "modal-header"}),React.createElement("button",({"type": "button ", "onClick": submit, "aria-hidden": true, "dangerouslySetInnerHTML": ({"__html": "&times;"}), "className": "close"})),(function (){var attrs36306 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(edit_key);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"h4",((cljs.core.map_QMARK_(attrs36306))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["modal-title"], null)], null),attrs36306], 0))):({"className": "modal-title"})),((cljs.core.map_QMARK_(attrs36306))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs36306)], null)));
})()),React.createElement("div",({"className": "modal-body"}),React.createElement("h5",null,"English text"),sablono.interpreter.interpret(old_text),React.createElement("hr",null),React.createElement("h5",null,"Last translation"),sablono.interpreter.interpret((function (){var G__36338 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [edit_key], null);
var fexpr__36337 = rum.core.react(predict_prostate.state.run_time.ttt_cursor);
return (fexpr__36337.cljs$core$IFn$_invoke$arity$1 ? fexpr__36337.cljs$core$IFn$_invoke$arity$1(G__36338) : fexpr__36337.call(null,G__36338));
})()),React.createElement("hr",null),React.createElement("h5",null,"New translation"),sablono.interpreter.create_element("textarea",({"style": ({"width": "100%", "height": "100%"}), "value": (((new_text == null))?(((old_text == null))?"":old_text):new_text), "onChange": (function (e){
return predict_prostate.state.run_time.new_text_change.pubsub$feeds$TopicFeed$publish$arity$2(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [edit_key,e.currentTarget.value], null));
})}))),React.createElement("div",({"className": "modal-footer"}),React.createElement("button",({"type": "button", "onClick": submit, "className": "btn btn-default"}),"Close")))));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"editor-modal");
predict_prostate.components.bs3_modal.new_language_modal = rum.core.build_defcs((function (state){
var new_lang_ref = new cljs.core.Keyword("predict-prostate.components.bs3-modal","new-lang","predict-prostate.components.bs3-modal/new-lang",-1360508233).cljs$core$IFn$_invoke$arity$1(state);
var new_lang = rum.core.react(new_lang_ref);
var submit = (function (){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(new_lang))){
predict_prostate.state.run_time.add_language.pubsub$feeds$TopicFeed$publish$arity$2(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_lang], null));

return $("#newLanguageModal").modal("hide");
} else {
return null;
}
});
return React.createElement("div",({"id": "newLanguageModal", "role": "dialog", "tabIndex": (-1), "aria-hidden": "true", "className": "modal fade"}),React.createElement("div",({"className": "modal-dialog"}),React.createElement("div",({"className": "modal-content"}),React.createElement("div",({"className": "modal-header"}),React.createElement("button",({"type": "button ", "onClick": submit, "aria-hidden": true, "dangerouslySetInnerHTML": ({"__html": "&times;"}), "className": "close"})),React.createElement("h4",({"className": "modal-title"}),"Add a new language")),React.createElement("div",({"className": "modal-body"}),React.createElement("h5",null,"Enter new language code: "),sablono.interpreter.create_element("input",({"value": new_lang, "onChange": (function (e){
return cljs.core.reset_BANG_(new_lang_ref,e.currentTarget.value);
})})),React.createElement("p",({"style": ({"color": "#bbb"})}),"Use the 2-character ISO 639-1 code")),React.createElement("div",({"className": "modal-footer"}),React.createElement("button",({"type": "button", "onClick": (function (){
return $("#newLanguageModal").modal("hide");
}), "className": "btn btn-default"}),"Cancel"),React.createElement("button",({"type": "button", "onClick": submit, "className": "btn btn-default"}),"OK")))));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,rum.core.local.cljs$core$IFn$_invoke$arity$2("",new cljs.core.Keyword("predict-prostate.components.bs3-modal","new-lang","predict-prostate.components.bs3-modal/new-lang",-1360508233))], null),"new-language-modal");
/**
 * Note that we are assuming the _single_ modal dialog is mounted on #topModal since we
 *                    are using jQuery to locate it.
 */
predict_prostate.components.bs3_modal.top_modal = rum.core.build_defc((function (ttt){
var help_key = rum.core.react(predict_prostate.state.run_time.help_key_cursor);
var help = predict_prostate.content_reader.section.cljs$core$IFn$_invoke$arity$2(ttt,help_key);
var vec__36397 = ((cljs.core.seq(help))?help:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["help header",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"red"], null)], null),"add content for ",help_key], null)], null));
var seq__36398 = cljs.core.seq(vec__36397);
var first__36399 = cljs.core.first(seq__36398);
var seq__36398__$1 = cljs.core.next(seq__36398);
var help_header = first__36399;
var help_content = seq__36398__$1;
var help_text = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.cons(new cljs.core.Keyword(null,"div","div",1057191632),help_content));
return React.createElement("div",({"id": "topModal", "role": "dialog", "aria-hidden": "true", "className": "modal fade"}),React.createElement("div",({"className": "modal-dialog"}),React.createElement("div",({"className": "modal-content"}),React.createElement("div",({"className": "modal-header"}),React.createElement("button",({"type": "button ", "onClick": (function (){
return predict_prostate.state.run_time.help_key_change.pubsub$feeds$TopicFeed$publish$arity$2(null,null);
}), "aria-hidden": true, "dangerouslySetInnerHTML": ({"__html": "&times;"}), "className": "close"})),(function (){var attrs36411 = help_header;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"h4",((cljs.core.map_QMARK_(attrs36411))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["modal-title"], null)], null),attrs36411], 0))):({"className": "modal-title"})),((cljs.core.map_QMARK_(attrs36411))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs36411)], null)));
})()),(function (){var attrs36409 = help_text;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs36409))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["modal-body"], null)], null),attrs36409], 0))):({"className": "modal-body"})),((cljs.core.map_QMARK_(attrs36409))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs36409)], null)));
})(),React.createElement("div",({"className": "modal-footer"}),React.createElement("button",({"type": "button", "onClick": (function (){
return predict_prostate.state.run_time.help_key_change.pubsub$feeds$TopicFeed$publish$arity$2(null,null);
}), "className": "btn btn-default"}),sablono.interpreter.interpret((function (){var G__36427 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"close","close",1835149582),"Close"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__36427) : ttt.call(null,G__36427));
})()))))));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"top-modal");
predict_prostate.components.bs3_modal.cancel_or_print = rum.core.build_defc((function (ttt){
return React.createElement("div",({"className": "pull-right"}),React.createElement("button",({"type": "button", "onClick": (function (){
return $("#printModal").modal("hide");
}), "className": "btn btn-default"}),sablono.interpreter.interpret((function (){var G__36433 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cancel","cancel",-1964088360),"Cancel"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__36433) : ttt.call(null,G__36433));
})()))," ",React.createElement("button",({"type": "button", "onClick": (function (){
$("printModal").modal("hide");

return print();
}), "className": "btn btn-primary"}),sablono.interpreter.interpret((function (){var G__36436 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"family","family",-1313145692),new cljs.core.Keyword(null,"fa","fa",484981183)], null);
var G__36437 = "print";
return (graphics.simple_icons.icon.cljs$core$IFn$_invoke$arity$2 ? graphics.simple_icons.icon.cljs$core$IFn$_invoke$arity$2(G__36436,G__36437) : graphics.simple_icons.icon.call(null,G__36436,G__36437));
})())," ",sablono.interpreter.interpret((function (){var G__36439 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"print","print",1299562414),"Print"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__36439) : ttt.call(null,G__36439));
})())));
}),null,"cancel-or-print");
/**
 * Note that we are assuming the _single_ modal dialog is mounted on #topModal since we
 *                      are using jQuery to locate it.
 */
predict_prostate.components.bs3_modal.print_modal = rum.core.build_defc((function (ttt){
return React.createElement("div",null,React.createElement("div",({"id": "printModal", "role": "dialog", "tabIndex": (-1), "aria-hidden": "true", "className": "modal fade"}),React.createElement("div",({"className": "modal-dialog screen-only"}),React.createElement("div",({"className": "modal-content"}),(function (){var attrs36444 = (predict_prostate.components.bs3_modal.cancel_or_print.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.components.bs3_modal.cancel_or_print.cljs$core$IFn$_invoke$arity$1(ttt) : predict_prostate.components.bs3_modal.cancel_or_print.call(null,ttt));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs36444))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["modal-header"], null)], null),attrs36444], 0))):({"className": "modal-header"})),((cljs.core.map_QMARK_(attrs36444))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs36444)], null)));
})(),(function (){var attrs36445 = (cljs.core.truth_((function (){var and__4210__auto__ = rum.core.react(predict_prostate.state.run_time.print_cursor);
if(cljs.core.truth_(and__4210__auto__)){
return rum.core.react(predict_prostate.state.run_time.results_cursor);
} else {
return and__4210__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),rum.core.with_key((predict_prostate.results.printable.results_in_print.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.printable.results_in_print.cljs$core$IFn$_invoke$arity$1(ttt) : predict_prostate.results.printable.results_in_print.call(null,ttt)),(2))], null):null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs36445))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["modal-body"], null)], null),attrs36445], 0))):({"className": "modal-body"})),((cljs.core.map_QMARK_(attrs36445))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs36445)], null)));
})(),(function (){var attrs36446 = (predict_prostate.components.bs3_modal.cancel_or_print.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.components.bs3_modal.cancel_or_print.cljs$core$IFn$_invoke$arity$1(ttt) : predict_prostate.components.bs3_modal.cancel_or_print.call(null,ttt));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs36446))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["modal-footer"], null)], null),attrs36446], 0))):({"className": "modal-footer"})),((cljs.core.map_QMARK_(attrs36446))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs36446)], null)));
})()))),React.createElement("div",({"style": ({"margin": "0 20px"}), "className": "print-only"}),sablono.interpreter.interpret((cljs.core.truth_((function (){var and__4210__auto__ = rum.core.react(predict_prostate.state.run_time.print_cursor);
if(cljs.core.truth_(and__4210__auto__)){
return rum.core.react(predict_prostate.state.run_time.results_cursor);
} else {
return and__4210__auto__;
}
})())?(predict_prostate.results.printable.results_in_print.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.printable.results_in_print.cljs$core$IFn$_invoke$arity$1(ttt) : predict_prostate.results.printable.results_in_print.call(null,ttt)):null))));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"print-modal");
/**
 * Note that we are assuming the _single_ modal dialog is mounted on #topModal since we
 *                         are using jQuery to locate it.
 */
predict_prostate.components.bs3_modal.settings_modal = rum.core.build_defc((function (ttt){
return React.createElement("div",({"id": "settingsModal", "role": "dialog", "aria-hidden": "true", "className": "modal fade"}),React.createElement("div",({"className": "modal-dialog"}),React.createElement("div",({"className": "modal-content"}),React.createElement("div",({"className": "modal-header"}),React.createElement("button",({"type": "button ", "onClick": (function (){
return predict_prostate.state.run_time.settings_change.pubsub$feeds$TopicFeed$publish$arity$2(null,null);
}), "aria-hidden": true, "dangerouslySetInnerHTML": ({"__html": "&times;"}), "className": "close"})),(function (){var attrs36465 = (function (){var G__36467 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tool","settings","tool/settings",1559915107),"Settings"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__36467) : ttt.call(null,G__36467));
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"h4",((cljs.core.map_QMARK_(attrs36465))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["modal-title"], null)], null),attrs36465], 0))):({"className": "modal-title"})),((cljs.core.map_QMARK_(attrs36465))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs36465)], null)));
})()),React.createElement("div",({"className": "modal-body"}),(function (){var attrs36470 = (function (){var G__36471 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","caps","settings/caps",-1433746733),"Choose a plot style for treatment benefit"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__36471) : ttt.call(null,G__36471));
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"p",((cljs.core.map_QMARK_(attrs36470))?sablono.interpreter.attributes(attrs36470):null),((cljs.core.map_QMARK_(attrs36470))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs36470)], null)));
})(),sablono.interpreter.interpret(predict_prostate.state.load_config.render_widget(ttt,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355))),React.createElement("div",({"className": "modal-footer"}),React.createElement("button",({"type": "button", "onClick": (function (){
return predict_prostate.state.run_time.settings_change.pubsub$feeds$TopicFeed$publish$arity$2(null,null);
}), "className": "btn btn-default"}),sablono.interpreter.interpret((function (){var G__36477 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"close","close",1835149582),"Close"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__36477) : ttt.call(null,G__36477));
})())))))));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"settings-modal");

//# sourceMappingURL=predict_prostate.components.bs3_modal.js.map
