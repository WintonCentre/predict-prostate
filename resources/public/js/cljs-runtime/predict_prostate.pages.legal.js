goog.provide('predict_prostate.pages.legal');
predict_prostate.pages.legal.legal = rum.core.lazy_build(rum.core.build_defc,(function (ttt,route){
var vec__33443 = route;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33443,(0),null);
var map__33446 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33443,(1),null);
var map__33446__$1 = cljs.core.__destructure_map(map__33446);
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33446__$1,new cljs.core.Keyword(null,"page","page",849072397));
return daiquiri.core.create_element("div",{'className':"container-fluid"},[predict_prostate.layout.header.header(ttt),predict_prostate.layout.header.header_banner(ttt,"legal-preamble"),daiquiri.core.create_element("div",{'id':"main-content",'tabIndex':(-1),'className':"row"},[daiquiri.core.create_element("div",{'style':{'minHeight':"calc(100vh - 700px)"},'className':"col-sm-10 col-sm-offset-1 col-lg-8 col-lg-offset-2"},[(cljs.core.truth_(page)?daiquiri.interpreter.interpret(predict_prostate.content_reader.all_subsections(ttt,cljs.core.name(page))):null)])]),interop.utils.scrollTo((0)),predict_prostate.components.bs3_modal.editor_modal(),predict_prostate.layout.header.footer_banner(ttt),daiquiri.core.create_element("div",{'className':"row screen-only"},[predict_prostate.layout.header.footer()])]);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$], null),"predict-prostate.pages.legal/legal");

//# sourceMappingURL=predict_prostate.pages.legal.js.map
