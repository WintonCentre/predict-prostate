goog.provide('predict_prostate.pages.about');
predict_prostate.pages.about.page_components = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"about","about",1423892543),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["about"], null),new cljs.core.Keyword(null,"overview","overview",-435037267),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["overview","whatpredictdoes","whoisitfor","howpredictworks","whobuiltpredict"], null),new cljs.core.Keyword(null,"technical","technical",-1762752687),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["technical","history","preversions","publications"], null)], null);
predict_prostate.pages.about.save_offsets = (function predict_prostate$pages$about$save_offsets(state){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["*save-offsets* args",new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)], 0));

var vec__34844 = new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34844,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34844,(1),null);
var offsets = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34844,(2),null);
var comp = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
var dom_node = ReactDOM.findDOMNode(comp);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(offsets,cljs.core.assoc,k,dom_node.offsetTop);

return state;
});
predict_prostate.pages.about.scroll_to_mixin = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),predict_prostate.pages.about.save_offsets,new cljs.core.Keyword(null,"did-update","did-update",-2143702256),predict_prostate.pages.about.save_offsets], null);
predict_prostate.pages.about.hr = rum.core.build_defc((function (){
return React.createElement("hr",({"style": ({"color": "red"})}));
}),null,"hr");
predict_prostate.pages.about.sectionc = rum.core.build_defc((function (k,ttt,offsets){
var rt = rum.core.react(predict_prostate.state.run_time.route);
return React.createElement("div",({"id": cljs.core.name(k)}),sablono.interpreter.interpret(predict_prostate.content_reader.all_subsections(ttt,cljs.core.name(k))));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [predict_prostate.pages.about.scroll_to_mixin,rum.core.static$,rum.core.reactive], null),"sectionc");
predict_prostate.pages.about.scroller = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"did-update","did-update",-2143702256),(function (state){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["*scroller* args",new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)], 0));

var vec__34871_34923 = new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state);
var __34924 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34871_34923,(0),null);
var vec__34874_34926 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34871_34923,(1),null);
var __34927__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34874_34926,(0),null);
var map__34877_34928 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34874_34926,(1),null);
var map__34877_34929__$1 = (((((!((map__34877_34928 == null))))?(((((map__34877_34928.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34877_34928.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34877_34928):map__34877_34928);
var page_34930 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34877_34929__$1,new cljs.core.Keyword(null,"page","page",849072397));
var scroll_section_34931 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34877_34929__$1,new cljs.core.Keyword(null,"section","section",-300141526));
var scroll_section_34932__$1 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(scroll_section_34931);
interop.utils.scrollTo((cljs.core.truth_(scroll_section_34932__$1)?cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(new cljs.core.Keyword("predict-prostate.pages.about","offsets","predict-prostate.pages.about/offsets",228292490).cljs$core$IFn$_invoke$arity$1(state)),cljs.core.name(scroll_section_34932__$1)):(0)));

return state;
})], null);
/**
 * Renders a (text) page given the bide parsed route containing a page, and optionally a section.
 */
predict_prostate.pages.about.about = rum.core.build_defcs((function (state,ttt,route){
var vec__34886 = route;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34886,(0),null);
var map__34889 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34886,(1),null);
var map__34889__$1 = (((((!((map__34889 == null))))?(((((map__34889.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34889.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34889):map__34889);
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34889__$1,new cljs.core.Keyword(null,"page","page",849072397));
var scroll_section = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34889__$1,new cljs.core.Keyword(null,"section","section",-300141526));
var page__$1 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(page);
var scroll_section__$1 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(scroll_section);
var vec__34890 = predict_prostate.content_reader.section.cljs$core$IFn$_invoke$arity$2(ttt,"tool-preamble");
var seq__34891 = cljs.core.seq(vec__34890);
var first__34892 = cljs.core.first(seq__34891);
var seq__34891__$1 = cljs.core.next(seq__34891);
var ___$1 = first__34892;
var preamble = seq__34891__$1;
var attrs34881 = (predict_prostate.layout.header.header.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.layout.header.header.cljs$core$IFn$_invoke$arity$1(ttt) : predict_prostate.layout.header.header.call(null,ttt));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs34881))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["container-fluid"], null)], null),attrs34881], 0))):({"className": "container-fluid"})),((cljs.core.map_QMARK_(attrs34881))?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret((predict_prostate.layout.header.header_banner.cljs$core$IFn$_invoke$arity$2 ? predict_prostate.layout.header.header_banner.cljs$core$IFn$_invoke$arity$2(ttt,"about-preamble") : predict_prostate.layout.header.header_banner.call(null,ttt,"about-preamble"))),React.createElement("div",({"id": "main-content", "tabIndex": (-1), "className": "row"}),React.createElement("div",({"style": ({"minHeight": "calc(100vh - 700px)"}), "className": "col-sm-10 col-sm-offset-1 col-lg-8 col-lg-offset-2"}),sablono.interpreter.interpret((cljs.core.truth_(page__$1)?(function (){var sec = (cljs.core.truth_(scroll_section__$1)?cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__34880_SHARP_,p2__34879_SHARP_){
return rum.core.with_key((function (){var G__34899 = p2__34879_SHARP_;
var G__34900 = ttt;
var G__34901 = new cljs.core.Keyword("predict-prostate.pages.about","offsets","predict-prostate.pages.about/offsets",228292490).cljs$core$IFn$_invoke$arity$1(state);
return (predict_prostate.pages.about.sectionc.cljs$core$IFn$_invoke$arity$3 ? predict_prostate.pages.about.sectionc.cljs$core$IFn$_invoke$arity$3(G__34899,G__34900,G__34901) : predict_prostate.pages.about.sectionc.call(null,G__34899,G__34900,G__34901));
})(),p1__34880_SHARP_);
}),(predict_prostate.pages.about.page_components.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.pages.about.page_components.cljs$core$IFn$_invoke$arity$1(page__$1) : predict_prostate.pages.about.page_components.call(null,page__$1))):predict_prostate.content_reader.all_subsections(ttt,cljs.core.name(page__$1)));
return sec;
})():null)))),sablono.interpreter.interpret((predict_prostate.components.bs3_modal.editor_modal.cljs$core$IFn$_invoke$arity$0 ? predict_prostate.components.bs3_modal.editor_modal.cljs$core$IFn$_invoke$arity$0() : predict_prostate.components.bs3_modal.editor_modal.call(null))),sablono.interpreter.interpret((predict_prostate.layout.header.footer_banner.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.layout.header.footer_banner.cljs$core$IFn$_invoke$arity$1(ttt) : predict_prostate.layout.header.footer_banner.call(null,ttt))),(function (){var attrs34884 = (predict_prostate.layout.header.footer.cljs$core$IFn$_invoke$arity$0 ? predict_prostate.layout.header.footer.cljs$core$IFn$_invoke$arity$0() : predict_prostate.layout.header.footer.call(null));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs34884))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["row","screen-only"], null)], null),attrs34884], 0))):({"className": "row screen-only"})),((cljs.core.map_QMARK_(attrs34884))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs34884)], null)));
})()], null):new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs34881),sablono.interpreter.interpret((predict_prostate.layout.header.header_banner.cljs$core$IFn$_invoke$arity$2 ? predict_prostate.layout.header.header_banner.cljs$core$IFn$_invoke$arity$2(ttt,"about-preamble") : predict_prostate.layout.header.header_banner.call(null,ttt,"about-preamble"))),React.createElement("div",({"id": "main-content", "tabIndex": (-1), "className": "row"}),React.createElement("div",({"style": ({"minHeight": "calc(100vh - 700px)"}), "className": "col-sm-10 col-sm-offset-1 col-lg-8 col-lg-offset-2"}),sablono.interpreter.interpret((cljs.core.truth_(page__$1)?(function (){var sec = (cljs.core.truth_(scroll_section__$1)?cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__34880_SHARP_,p2__34879_SHARP_){
return rum.core.with_key((function (){var G__34903 = p2__34879_SHARP_;
var G__34904 = ttt;
var G__34905 = new cljs.core.Keyword("predict-prostate.pages.about","offsets","predict-prostate.pages.about/offsets",228292490).cljs$core$IFn$_invoke$arity$1(state);
return (predict_prostate.pages.about.sectionc.cljs$core$IFn$_invoke$arity$3 ? predict_prostate.pages.about.sectionc.cljs$core$IFn$_invoke$arity$3(G__34903,G__34904,G__34905) : predict_prostate.pages.about.sectionc.call(null,G__34903,G__34904,G__34905));
})(),p1__34880_SHARP_);
}),(predict_prostate.pages.about.page_components.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.pages.about.page_components.cljs$core$IFn$_invoke$arity$1(page__$1) : predict_prostate.pages.about.page_components.call(null,page__$1))):predict_prostate.content_reader.all_subsections(ttt,cljs.core.name(page__$1)));
return sec;
})():null)))),sablono.interpreter.interpret((predict_prostate.components.bs3_modal.editor_modal.cljs$core$IFn$_invoke$arity$0 ? predict_prostate.components.bs3_modal.editor_modal.cljs$core$IFn$_invoke$arity$0() : predict_prostate.components.bs3_modal.editor_modal.call(null))),sablono.interpreter.interpret((predict_prostate.layout.header.footer_banner.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.layout.header.footer_banner.cljs$core$IFn$_invoke$arity$1(ttt) : predict_prostate.layout.header.footer_banner.call(null,ttt))),(function (){var attrs34885 = (predict_prostate.layout.header.footer.cljs$core$IFn$_invoke$arity$0 ? predict_prostate.layout.header.footer.cljs$core$IFn$_invoke$arity$0() : predict_prostate.layout.header.footer.call(null));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs34885))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["row","screen-only"], null)], null),attrs34885], 0))):({"className": "row screen-only"})),((cljs.core.map_QMARK_(attrs34885))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs34885)], null)));
})()], null)));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.local.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("predict-prostate.pages.about","offsets","predict-prostate.pages.about/offsets",228292490)),rum.core.static$,predict_prostate.pages.about.scroller], null),"about");

//# sourceMappingURL=predict_prostate.pages.about.js.map
