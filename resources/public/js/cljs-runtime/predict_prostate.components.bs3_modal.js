goog.provide('predict_prostate.components.bs3_modal');
predict_prostate.components.bs3_modal.some_text_QMARK_ = (function predict_prostate$components$bs3_modal$some_text_QMARK_(text){
if((((!((text == null)))) && (true))){
return text;
} else {
return null;
}
});
predict_prostate.components.bs3_modal.editor_modal = rum.core.lazy_build(rum.core.build_defc,(function (){
var edit_m = rum.core.react(predict_prostate.state.run_time.edit_cursor);
var edit_key = new cljs.core.Keyword(null,"edit-key","edit-key",-1833788727).cljs$core$IFn$_invoke$arity$1(edit_m);
var old_text = new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(edit_m);
var new_text = new cljs.core.Keyword(null,"new-text","new-text",962412088).cljs$core$IFn$_invoke$arity$1(edit_m);
var submit = (function (){
var temp__5751__auto___33312 = predict_prostate.components.bs3_modal.some_text_QMARK_(new_text);
if(cljs.core.truth_(temp__5751__auto___33312)){
var new_text_STAR__33313 = temp__5751__auto___33312;
predict_prostate.state.run_time.text_change.pubsub$feeds$TopicFeed$publish$arity$2(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [edit_key,new_text_STAR__33313], null));
} else {
}

return $("#editorModal").modal("hide");
});
return daiquiri.core.create_element("div",{'id':"editorModal",'role':"dialog",'tabIndex':(-1),'aria-hidden':"true",'className':"modal fade"},[daiquiri.core.create_element("div",{'className':"modal-dialog"},[daiquiri.core.create_element("div",{'className':"modal-content"},[daiquiri.core.create_element("div",{'className':"modal-header"},[daiquiri.core.create_element("button",{'type':"button ",'onClick':submit,'aria-hidden':true,'dangerouslySetInnerHTML':{'__html':"&times;"},'className':"close"},[]),daiquiri.core.create_element("h4",{'className':"modal-title"},[cljs.core.str.cljs$core$IFn$_invoke$arity$1(edit_key)])]),daiquiri.core.create_element("div",{'className':"modal-body"},[daiquiri.core.create_element("h5",null,["English text"]),daiquiri.interpreter.interpret(old_text),daiquiri.core.create_element("hr",null,null),daiquiri.core.create_element("h5",null,["Last translation"]),daiquiri.interpreter.interpret((function (){var G__33226 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [edit_key], null);
var fexpr__33225 = rum.core.react(predict_prostate.state.run_time.ttt_cursor);
return (fexpr__33225.cljs$core$IFn$_invoke$arity$1 ? fexpr__33225.cljs$core$IFn$_invoke$arity$1(G__33226) : fexpr__33225.call(null,G__33226));
})()),daiquiri.core.create_element("hr",null,null),daiquiri.core.create_element("h5",null,["New translation"]),daiquiri.core.create_element("textarea",{'style':{'width':"100%",'height':"100%"},'value':(((new_text == null))?(((old_text == null))?"":old_text):new_text),'onChange':rum.core.mark_sync_update((function (e){
return predict_prostate.state.run_time.new_text_change.pubsub$feeds$TopicFeed$publish$arity$2(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [edit_key,e.currentTarget.value], null));
}))},[])]),daiquiri.core.create_element("div",{'className':"modal-footer"},[daiquiri.core.create_element("button",{'type':"button",'onClick':submit,'className':"btn btn-default"},["Close"])])])])]);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"predict-prostate.components.bs3-modal/editor-modal");
predict_prostate.components.bs3_modal.new_language_modal = rum.core.lazy_build(rum.core.build_defcs,(function (state){
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
return daiquiri.core.create_element("div",{'id':"newLanguageModal",'role':"dialog",'tabIndex':(-1),'aria-hidden':"true",'className':"modal fade"},[daiquiri.core.create_element("div",{'className':"modal-dialog"},[daiquiri.core.create_element("div",{'className':"modal-content"},[daiquiri.core.create_element("div",{'className':"modal-header"},[daiquiri.core.create_element("button",{'type':"button ",'onClick':submit,'aria-hidden':true,'dangerouslySetInnerHTML':{'__html':"&times;"},'className':"close"},[]),daiquiri.core.create_element("h4",{'className':"modal-title"},["Add a new language"])]),daiquiri.core.create_element("div",{'className':"modal-body"},[daiquiri.core.create_element("h5",null,["Enter new language code: "]),daiquiri.core.create_element("input",{'value':new_lang,'onChange':rum.core.mark_sync_update((function (e){
return cljs.core.reset_BANG_(new_lang_ref,e.currentTarget.value);
}))},[]),daiquiri.core.create_element("p",{'style':{'color':"#bbb"}},["Use the 2-character ISO 639-1 code"])]),daiquiri.core.create_element("div",{'className':"modal-footer"},[daiquiri.core.create_element("button",{'type':"button",'onClick':(function (){
return $("#newLanguageModal").modal("hide");
}),'className':"btn btn-default"},["Cancel"]),daiquiri.core.create_element("button",{'type':"button",'onClick':submit,'className':"btn btn-default"},["OK"])])])])]);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,rum.core.local.cljs$core$IFn$_invoke$arity$2("",new cljs.core.Keyword("predict-prostate.components.bs3-modal","new-lang","predict-prostate.components.bs3-modal/new-lang",-1360508233))], null),"predict-prostate.components.bs3-modal/new-language-modal");
/**
 * Note that we are assuming the _single_ modal dialog is mounted on #topModal since we
 *                    are using jQuery to locate it.
 */
predict_prostate.components.bs3_modal.top_modal = rum.core.lazy_build(rum.core.build_defc,(function (ttt){
var help_key = rum.core.react(predict_prostate.state.run_time.help_key_cursor);
var help = predict_prostate.content_reader.section.cljs$core$IFn$_invoke$arity$2(ttt,help_key);
var vec__33262 = ((cljs.core.seq(help))?help:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["help header",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"red"], null)], null),"add content for ",help_key], null)], null));
var seq__33263 = cljs.core.seq(vec__33262);
var first__33264 = cljs.core.first(seq__33263);
var seq__33263__$1 = cljs.core.next(seq__33263);
var help_header = first__33264;
var help_content = seq__33263__$1;
var help_text = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.cons(new cljs.core.Keyword(null,"div","div",1057191632),help_content));
return daiquiri.core.create_element("div",{'id':"topModal",'role':"dialog",'aria-hidden':"true",'className':"modal fade"},[daiquiri.core.create_element("div",{'className':"modal-dialog"},[daiquiri.core.create_element("div",{'className':"modal-content"},[daiquiri.core.create_element("div",{'className':"modal-header"},[daiquiri.core.create_element("button",{'type':"button ",'onClick':(function (){
return predict_prostate.state.run_time.help_key_change.pubsub$feeds$TopicFeed$publish$arity$2(null,null);
}),'aria-hidden':true,'dangerouslySetInnerHTML':{'__html':"&times;"},'className':"close"},[]),(function (){var attrs33266 = help_header;
return daiquiri.core.create_element("h4",((cljs.core.map_QMARK_(attrs33266))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["modal-title"], null)], null),attrs33266], 0))):{'className':"modal-title"}),((cljs.core.map_QMARK_(attrs33266))?null:[daiquiri.interpreter.interpret(attrs33266)]));
})()]),(function (){var attrs33265 = help_text;
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs33265))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["modal-body"], null)], null),attrs33265], 0))):{'className':"modal-body"}),((cljs.core.map_QMARK_(attrs33265))?null:[daiquiri.interpreter.interpret(attrs33265)]));
})(),daiquiri.core.create_element("div",{'className':"modal-footer"},[daiquiri.core.create_element("button",{'type':"button",'onClick':(function (){
return predict_prostate.state.run_time.help_key_change.pubsub$feeds$TopicFeed$publish$arity$2(null,null);
}),'className':"btn btn-default"},[daiquiri.interpreter.interpret((function (){var G__33270 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"close","close",1835149582),"Close"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33270) : ttt.call(null,G__33270));
})())])])])])]);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"predict-prostate.components.bs3-modal/top-modal");
predict_prostate.components.bs3_modal.cancel_or_print = rum.core.lazy_build(rum.core.build_defc,(function (ttt){
return daiquiri.core.create_element("div",{'className':"pull-right"},[daiquiri.core.create_element("button",{'type':"button",'onClick':(function (){
return $("#printModal").modal("hide");
}),'className':"btn btn-default"},[daiquiri.interpreter.interpret((function (){var G__33278 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cancel","cancel",-1964088360),"Cancel"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33278) : ttt.call(null,G__33278));
})())])," ",daiquiri.core.create_element("button",{'type':"button",'onClick':(function (){
$("printModal").modal("hide");

return print();
}),'className':"btn btn-primary"},[graphics.simple_icons.icon(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"family","family",-1313145692),new cljs.core.Keyword(null,"fa","fa",484981183)], null),"print")," ",daiquiri.interpreter.interpret((function (){var G__33280 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"print","print",1299562414),"Print"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33280) : ttt.call(null,G__33280));
})())])]);
}),null,"predict-prostate.components.bs3-modal/cancel-or-print");
/**
 * Note that we are assuming the _single_ modal dialog is mounted on #topModal since we
 *                      are using jQuery to locate it.
 */
predict_prostate.components.bs3_modal.print_modal = rum.core.lazy_build(rum.core.build_defc,(function (ttt){
return daiquiri.core.create_element("div",null,[daiquiri.core.create_element("div",{'id':"printModal",'role':"dialog",'tabIndex':(-1),'aria-hidden':"true",'className':"modal fade"},[daiquiri.core.create_element("div",{'className':"modal-dialog screen-only"},[daiquiri.core.create_element("div",{'className':"modal-content"},[daiquiri.core.create_element("div",{'className':"modal-header"},[predict_prostate.components.bs3_modal.cancel_or_print(ttt)]),(function (){var attrs33289 = (cljs.core.truth_((function (){var and__4210__auto__ = rum.core.react(predict_prostate.state.run_time.print_cursor);
if(cljs.core.truth_(and__4210__auto__)){
return rum.core.react(predict_prostate.state.run_time.results_cursor);
} else {
return and__4210__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),rum.core.with_key(predict_prostate.results.printable.results_in_print(ttt),(2))], null):null);
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs33289))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["modal-body"], null)], null),attrs33289], 0))):{'className':"modal-body"}),((cljs.core.map_QMARK_(attrs33289))?null:[daiquiri.interpreter.interpret(attrs33289)]));
})(),daiquiri.core.create_element("div",{'className':"modal-footer"},[predict_prostate.components.bs3_modal.cancel_or_print(ttt)])])])]),daiquiri.core.create_element("div",{'style':{'margin':"0 20px"},'className':"print-only"},[(cljs.core.truth_((function (){var and__4210__auto__ = rum.core.react(predict_prostate.state.run_time.print_cursor);
if(cljs.core.truth_(and__4210__auto__)){
return rum.core.react(predict_prostate.state.run_time.results_cursor);
} else {
return and__4210__auto__;
}
})())?predict_prostate.results.printable.results_in_print(ttt):null)])]);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"predict-prostate.components.bs3-modal/print-modal");
/**
 * Note that we are assuming the _single_ modal dialog is mounted on #topModal since we
 *                         are using jQuery to locate it.
 */
predict_prostate.components.bs3_modal.settings_modal = rum.core.lazy_build(rum.core.build_defc,(function (ttt){
return daiquiri.core.create_element("div",{'id':"settingsModal",'role':"dialog",'aria-hidden':"true",'className':"modal fade"},[daiquiri.core.create_element("div",{'className':"modal-dialog"},[daiquiri.core.create_element("div",{'className':"modal-content"},[daiquiri.core.create_element("div",{'className':"modal-header"},[daiquiri.core.create_element("button",{'type':"button ",'onClick':(function (){
return predict_prostate.state.run_time.settings_change.pubsub$feeds$TopicFeed$publish$arity$2(null,null);
}),'aria-hidden':true,'dangerouslySetInnerHTML':{'__html':"&times;"},'className':"close"},[]),(function (){var attrs33296 = (function (){var G__33297 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tool","settings","tool/settings",1559915107),"Settings"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33297) : ttt.call(null,G__33297));
})();
return daiquiri.core.create_element("h4",((cljs.core.map_QMARK_(attrs33296))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["modal-title"], null)], null),attrs33296], 0))):{'className':"modal-title"}),((cljs.core.map_QMARK_(attrs33296))?null:[daiquiri.interpreter.interpret(attrs33296)]));
})()]),daiquiri.core.create_element("div",{'className':"modal-body"},[(function (){var attrs33302 = (function (){var G__33303 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","caps","settings/caps",-1433746733),"Choose a plot style for treatment benefit"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33303) : ttt.call(null,G__33303));
})();
return daiquiri.core.create_element("p",((cljs.core.map_QMARK_(attrs33302))?daiquiri.interpreter.element_attributes(attrs33302):null),((cljs.core.map_QMARK_(attrs33302))?null:[daiquiri.interpreter.interpret(attrs33302)]));
})(),daiquiri.interpreter.interpret(predict_prostate.state.load_config.render_widget(ttt,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355))),daiquiri.core.create_element("div",{'className':"modal-footer"},[daiquiri.core.create_element("button",{'type':"button",'onClick':(function (){
return predict_prostate.state.run_time.settings_change.pubsub$feeds$TopicFeed$publish$arity$2(null,null);
}),'className':"btn btn-default"},[daiquiri.interpreter.interpret((function (){var G__33309 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"close","close",1835149582),"Close"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33309) : ttt.call(null,G__33309));
})())])])])])])]);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"predict-prostate.components.bs3-modal/settings-modal");

//# sourceMappingURL=predict_prostate.components.bs3_modal.js.map
