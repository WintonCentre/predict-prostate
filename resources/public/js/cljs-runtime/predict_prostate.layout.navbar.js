goog.provide('predict_prostate.layout.navbar');
predict_prostate.layout.navbar.clear_all_button = rum.core.build_defc((function (p__42157){
var map__42158 = p__42157;
var map__42158__$1 = (((((!((map__42158 == null))))?(((((map__42158.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42158.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42158):map__42158);
var props = map__42158__$1;
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42158__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
return React.createElement("button",({"onClick": on_click, "className": "btn navbar-btn btn-danger btn-lg"})," Reset");
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$], null),"clear-all-button");
predict_prostate.layout.navbar.navbar = rum.core.build_defc((function (){
return React.createElement("nav",({"className": "navbar navbar-default"}),React.createElement("div",({"className": "container-fluid"}),React.createElement("div",({"style": ({"marginLeft": (0)}), "className": "navbar-header"}),"Predict ",sablono.interpreter.interpret(predict_prostate.state.run_time.model),": Prostate Cancer Survival")));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"navbar");

//# sourceMappingURL=predict_prostate.layout.navbar.js.map
