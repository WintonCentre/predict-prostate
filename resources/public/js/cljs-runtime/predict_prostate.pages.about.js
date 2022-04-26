goog.provide('predict_prostate.pages.about');
predict_prostate.pages.about.page_components = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"about","about",1423892543),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["about"], null),new cljs.core.Keyword(null,"overview","overview",-435037267),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["overview","whatpredictdoes","whoisitfor","howpredictworks","whobuiltpredict"], null),new cljs.core.Keyword(null,"technical","technical",-1762752687),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["technical","history","preversions","publications"], null)], null);
predict_prostate.pages.about.save_offsets = (function predict_prostate$pages$about$save_offsets(state){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["*save-offsets* args",new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)], 0));

var vec__56715 = new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56715,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56715,(1),null);
var offsets = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56715,(2),null);
var comp = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
var dom_node = ReactDOM.findDOMNode(comp);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(offsets,cljs.core.assoc,k,dom_node.offsetTop);

return state;
});
predict_prostate.pages.about.scroll_to_mixin = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),predict_prostate.pages.about.save_offsets,new cljs.core.Keyword(null,"did-update","did-update",-2143702256),predict_prostate.pages.about.save_offsets], null);
predict_prostate.pages.about.hr = rum.core.lazy_build(rum.core.build_defc,(function (){
return daiquiri.core.create_element("hr",{'style':{'color':"red"}},null);
}),null,"predict-prostate.pages.about/hr");
predict_prostate.pages.about.sectionc = rum.core.lazy_build(rum.core.build_defc,(function (k,ttt,offsets){
var rt = rum.core.react(predict_prostate.state.run_time.route);
return daiquiri.core.create_element("div",{'id':cljs.core.name(k)},[daiquiri.interpreter.interpret(predict_prostate.content_reader.all_subsections(ttt,cljs.core.name(k)))]);
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [predict_prostate.pages.about.scroll_to_mixin,rum.core.static$,rum.core.reactive], null),"predict-prostate.pages.about/sectionc");
predict_prostate.pages.about.scroller = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"did-update","did-update",-2143702256),(function (state){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["*scroller* args",new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)], 0));

var vec__56724_56742 = new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state);
var __56743 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56724_56742,(0),null);
var vec__56727_56744 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56724_56742,(1),null);
var __56745__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56727_56744,(0),null);
var map__56730_56746 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56727_56744,(1),null);
var map__56730_56747__$1 = cljs.core.__destructure_map(map__56730_56746);
var page_56748 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56730_56747__$1,new cljs.core.Keyword(null,"page","page",849072397));
var scroll_section_56749 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56730_56747__$1,new cljs.core.Keyword(null,"section","section",-300141526));
var scroll_section_56750__$1 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(scroll_section_56749);
interop.utils.scrollTo((cljs.core.truth_(scroll_section_56750__$1)?cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(new cljs.core.Keyword("predict-prostate.pages.about","offsets","predict-prostate.pages.about/offsets",228292490).cljs$core$IFn$_invoke$arity$1(state)),cljs.core.name(scroll_section_56750__$1)):(0)));

return state;
})], null);
/**
 * Renders a (text) page given the bide parsed route containing a page, and optionally a section.
 */
predict_prostate.pages.about.about = rum.core.lazy_build(rum.core.build_defcs,(function (state,ttt,route){
var vec__56733 = route;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56733,(0),null);
var map__56736 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56733,(1),null);
var map__56736__$1 = cljs.core.__destructure_map(map__56736);
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56736__$1,new cljs.core.Keyword(null,"page","page",849072397));
var scroll_section = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56736__$1,new cljs.core.Keyword(null,"section","section",-300141526));
var page__$1 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(page);
var scroll_section__$1 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(scroll_section);
var vec__56737 = predict_prostate.content_reader.section.cljs$core$IFn$_invoke$arity$2(ttt,"tool-preamble");
var seq__56738 = cljs.core.seq(vec__56737);
var first__56739 = cljs.core.first(seq__56738);
var seq__56738__$1 = cljs.core.next(seq__56738);
var ___$1 = first__56739;
var preamble = seq__56738__$1;
return daiquiri.core.create_element("div",{'className':"container-fluid"},[predict_prostate.layout.header.header(ttt),predict_prostate.layout.header.header_banner(ttt,"about-preamble"),daiquiri.core.create_element("div",{'id':"main-content",'tabIndex':(-1),'className':"row"},[daiquiri.core.create_element("div",{'style':{'minHeight':"calc(100vh - 700px)"},'className':"col-sm-10 col-sm-offset-1 col-lg-8 col-lg-offset-2"},[(cljs.core.truth_(page__$1)?(function (){var sec = (cljs.core.truth_(scroll_section__$1)?cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__56732_SHARP_,p2__56731_SHARP_){
return rum.core.with_key(predict_prostate.pages.about.sectionc(p2__56731_SHARP_,ttt,new cljs.core.Keyword("predict-prostate.pages.about","offsets","predict-prostate.pages.about/offsets",228292490).cljs$core$IFn$_invoke$arity$1(state)),p1__56732_SHARP_);
}),(predict_prostate.pages.about.page_components.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.pages.about.page_components.cljs$core$IFn$_invoke$arity$1(page__$1) : predict_prostate.pages.about.page_components.call(null,page__$1))):predict_prostate.content_reader.all_subsections(ttt,cljs.core.name(page__$1)));
return daiquiri.interpreter.interpret(sec);
})():null)])]),predict_prostate.components.bs3_modal.editor_modal(),predict_prostate.layout.header.footer_banner(ttt),daiquiri.core.create_element("div",{'className':"row screen-only"},[predict_prostate.layout.header.footer()])]);
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.local.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("predict-prostate.pages.about","offsets","predict-prostate.pages.about/offsets",228292490)),rum.core.static$,predict_prostate.pages.about.scroller], null),"predict-prostate.pages.about/about");

//# sourceMappingURL=predict_prostate.pages.about.js.map
