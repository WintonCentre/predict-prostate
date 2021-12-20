goog.provide('predict_prostate.layout.navbar');
predict_prostate.layout.navbar.clear_all_button = rum.core.build_defc((function (p__44468){
var map__44469 = p__44468;
var map__44469__$1 = (((((!((map__44469 == null))))?(((((map__44469.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44469.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44469):map__44469);
var props = map__44469__$1;
var ttt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44469__$1,new cljs.core.Keyword(null,"ttt","ttt",1858561240));
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44469__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
return React.createElement("button",({"onClick": on_click, "className": "btn navbar-btn btn-danger btn-lg"})," ",sablono.interpreter.interpret((function (){var G__44478 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tool","reset-btn","tool/reset-btn",-2075589013),"Reset"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__44478) : ttt.call(null,G__44478));
})()));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$], null),"clear-all-button");
predict_prostate.layout.navbar.navbar = rum.core.build_defc((function (){
return React.createElement("nav",({"className": "navbar navbar-default"}),React.createElement("div",({"className": "container-fluid"}),React.createElement("div",({"style": ({"marginLeft": (0)}), "className": "navbar-header"}),"Predict ",sablono.interpreter.interpret(predict_prostate.state.run_time.model),": Prostate Cancer Survival")));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"navbar");

//# sourceMappingURL=predict_prostate.layout.navbar.js.map
