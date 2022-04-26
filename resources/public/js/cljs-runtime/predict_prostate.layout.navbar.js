goog.provide('predict_prostate.layout.navbar');
predict_prostate.layout.navbar.clear_all_button = rum.core.lazy_build(rum.core.build_defc,(function (p__56705){
var map__56706 = p__56705;
var map__56706__$1 = cljs.core.__destructure_map(map__56706);
var props = map__56706__$1;
var ttt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56706__$1,new cljs.core.Keyword(null,"ttt","ttt",1858561240));
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56706__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
return daiquiri.core.create_element("button",{'onClick':on_click,'className':"btn navbar-btn btn-danger btn-lg"},[" ",daiquiri.interpreter.interpret((function (){var G__56711 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tool","reset-btn","tool/reset-btn",-2075589013),"Reset"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__56711) : ttt.call(null,G__56711));
})())]);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$], null),"predict-prostate.layout.navbar/clear-all-button");
predict_prostate.layout.navbar.navbar = rum.core.lazy_build(rum.core.build_defc,(function (){
return daiquiri.core.create_element("nav",{'className':"navbar navbar-default"},[daiquiri.core.create_element("div",{'className':"container-fluid"},[daiquiri.core.create_element("div",{'style':{'marginLeft':(0)},'className':"navbar-header"},["Predict ",predict_prostate.state.run_time.model,": Prostate Cancer Survival"])])]);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"predict-prostate.layout.navbar/navbar");

//# sourceMappingURL=predict_prostate.layout.navbar.js.map
