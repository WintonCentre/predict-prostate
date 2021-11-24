goog.provide('translations.root');
translations.root._ttt = (function translations$root$_ttt(ttt,arg){
var text_or_v = (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(arg) : ttt.call(null,arg));
var text = ((cljs.core.vector_QMARK_(text_or_v))?(((cljs.core.count(text_or_v) > (1)))?cljs.core.second(text_or_v):(((cljs.core.count(text_or_v) > (0)))?cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(text_or_v)):"**argv**")):text_or_v);
var lang = new cljs.core.Keyword(null,"lang","lang",-1819677104).cljs$core$IFn$_invoke$arity$1(rum.core.react(predict_prostate.state.run_time.t_state_cursor));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lang,text], null);
});
translations.root.ttt = rum.core.build_defc((function (arg){
var vec__54769 = translations.root._ttt(rum.core.react(predict_prostate.state.run_time.ttt_cursor),arg);
var lang = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54769,(0),null);
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54769,(1),null);
var attrs54767 = text;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs54767))?sablono.interpreter.attributes(attrs54767):null),((cljs.core.map_QMARK_(attrs54767))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs54767)], null)));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"ttt");
/**
 * Further wrap the translation function in one that provides an editable and clickable span instead of just the string.
 *                   Note that this naturally sits in the application rather than in the translations namespace.
 */
translations.root.ttt_edit = rum.core.build_defc((function (arg){
var vec__54778 = translations.root._ttt(rum.core.react(predict_prostate.state.run_time.ttt_cursor),arg);
var lang = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54778,(0),null);
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54778,(1),null);
if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"en","en",88457073),new cljs.core.Keyword(null,"lang","lang",-1819677104).cljs$core$IFn$_invoke$arity$1(rum.core.react(predict_prostate.state.run_time.t_state_cursor)))) && (cljs.core.vector_QMARK_(arg)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(text,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(predict_prostate.state.run_time.t_state_cursor),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"translations","translations",-1114228673),lang,cljs.core.first(arg)], null)))))){
return React.createElement("span",({"style": ({"backgroundColor": "#e488", "color": "#fff", "border": "1px dashed #e48"}), "onClick": (function (p1__54776_SHARP_){
predict_prostate.state.run_time.edit_change.pubsub$feeds$TopicFeed$publish$arity$2(null,arg);

return p1__54776_SHARP_.stopPropagation();
})}),sablono.interpreter.interpret(text));
} else {
return React.createElement("span",({"style": ({"backgroundColor": "#e482", "display": "inline-block", "minWidth": "1ex", "minHeight": "10px", "border": ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(text,""))?"1px solid red":"1px solid #ccc")}), "onClick": (function (p1__54777_SHARP_){
predict_prostate.state.run_time.edit_change.pubsub$feeds$TopicFeed$publish$arity$2(null,arg);

return p1__54777_SHARP_.stopPropagation();
})}),sablono.interpreter.interpret(text));
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"ttt-edit");

//# sourceMappingURL=translations.root.js.map
