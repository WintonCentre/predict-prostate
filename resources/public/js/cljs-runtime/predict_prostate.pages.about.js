goog.provide('predict_prostate.pages.about');
predict_prostate.pages.about.page_components = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"about","about",1423892543),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["about"], null),new cljs.core.Keyword(null,"overview","overview",-435037267),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["overview","whatpredictdoes","whoisitfor","howpredictworks","whobuiltpredict"], null),new cljs.core.Keyword(null,"technical","technical",-1762752687),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["technical","history","preversions","publications"], null)], null);
predict_prostate.pages.about.save_offsets = (function predict_prostate$pages$about$save_offsets(state){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["*save-offsets* args",new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)], 0));

var vec__54570 = new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54570,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54570,(1),null);
var offsets = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54570,(2),null);
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

var vec__54592_54678 = new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state);
var __54679 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54592_54678,(0),null);
var vec__54595_54680 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54592_54678,(1),null);
var __54681__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54595_54680,(0),null);
var map__54598_54682 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54595_54680,(1),null);
var map__54598_54683__$1 = (((((!((map__54598_54682 == null))))?(((((map__54598_54682.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54598_54682.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54598_54682):map__54598_54682);
var page_54684 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54598_54683__$1,new cljs.core.Keyword(null,"page","page",849072397));
var scroll_section_54685 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54598_54683__$1,new cljs.core.Keyword(null,"section","section",-300141526));
var scroll_section_54686__$1 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(scroll_section_54685);
interop.utils.scrollTo((cljs.core.truth_(scroll_section_54686__$1)?cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(new cljs.core.Keyword("predict-prostate.pages.about","offsets","predict-prostate.pages.about/offsets",228292490).cljs$core$IFn$_invoke$arity$1(state)),cljs.core.name(scroll_section_54686__$1)):(0)));

return state;
})], null);
/**
 * Renders a (text) page given the bide parsed route containing a page, and optionally a section.
 */
predict_prostate.pages.about.about = rum.core.build_defcs((function (state,ttt,route){
var vec__54626 = route;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54626,(0),null);
var map__54629 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54626,(1),null);
var map__54629__$1 = (((((!((map__54629 == null))))?(((((map__54629.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54629.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54629):map__54629);
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54629__$1,new cljs.core.Keyword(null,"page","page",849072397));
var scroll_section = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54629__$1,new cljs.core.Keyword(null,"section","section",-300141526));
var page__$1 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(page);
var scroll_section__$1 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(scroll_section);
var vec__54630 = predict_prostate.content_reader.section.cljs$core$IFn$_invoke$arity$2(ttt,"tool-preamble");
var seq__54631 = cljs.core.seq(vec__54630);
var first__54632 = cljs.core.first(seq__54631);
var seq__54631__$1 = cljs.core.next(seq__54631);
var ___$1 = first__54632;
var preamble = seq__54631__$1;
var attrs54607 = (predict_prostate.layout.header.header.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.layout.header.header.cljs$core$IFn$_invoke$arity$1(ttt) : predict_prostate.layout.header.header.call(null,ttt));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs54607))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["container-fluid"], null)], null),attrs54607], 0))):({"className": "container-fluid"})),((cljs.core.map_QMARK_(attrs54607))?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret((predict_prostate.layout.header.header_banner.cljs$core$IFn$_invoke$arity$2 ? predict_prostate.layout.header.header_banner.cljs$core$IFn$_invoke$arity$2(ttt,"about-preamble") : predict_prostate.layout.header.header_banner.call(null,ttt,"about-preamble"))),React.createElement("div",({"id": "main-content", "tabIndex": (-1), "className": "row"}),React.createElement("div",({"style": ({"minHeight": "calc(100vh - 700px)"}), "className": "col-sm-10 col-sm-offset-1 col-lg-8 col-lg-offset-2"}),sablono.interpreter.interpret((cljs.core.truth_(page__$1)?(function (){var sec = (cljs.core.truth_(scroll_section__$1)?cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__54604_SHARP_,p2__54603_SHARP_){
return rum.core.with_key((function (){var G__54648 = p2__54603_SHARP_;
var G__54649 = ttt;
var G__54650 = new cljs.core.Keyword("predict-prostate.pages.about","offsets","predict-prostate.pages.about/offsets",228292490).cljs$core$IFn$_invoke$arity$1(state);
return (predict_prostate.pages.about.sectionc.cljs$core$IFn$_invoke$arity$3 ? predict_prostate.pages.about.sectionc.cljs$core$IFn$_invoke$arity$3(G__54648,G__54649,G__54650) : predict_prostate.pages.about.sectionc.call(null,G__54648,G__54649,G__54650));
})(),p1__54604_SHARP_);
}),(predict_prostate.pages.about.page_components.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.pages.about.page_components.cljs$core$IFn$_invoke$arity$1(page__$1) : predict_prostate.pages.about.page_components.call(null,page__$1))):predict_prostate.content_reader.all_subsections(ttt,cljs.core.name(page__$1)));
return sec;
})():null)))),sablono.interpreter.interpret((predict_prostate.components.bs3_modal.editor_modal.cljs$core$IFn$_invoke$arity$0 ? predict_prostate.components.bs3_modal.editor_modal.cljs$core$IFn$_invoke$arity$0() : predict_prostate.components.bs3_modal.editor_modal.call(null))),sablono.interpreter.interpret((predict_prostate.layout.header.footer_banner.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.layout.header.footer_banner.cljs$core$IFn$_invoke$arity$1(ttt) : predict_prostate.layout.header.footer_banner.call(null,ttt))),(function (){var attrs54608 = (predict_prostate.layout.header.footer.cljs$core$IFn$_invoke$arity$0 ? predict_prostate.layout.header.footer.cljs$core$IFn$_invoke$arity$0() : predict_prostate.layout.header.footer.call(null));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs54608))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["row","screen-only"], null)], null),attrs54608], 0))):({"className": "row screen-only"})),((cljs.core.map_QMARK_(attrs54608))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs54608)], null)));
})()], null):new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs54607),sablono.interpreter.interpret((predict_prostate.layout.header.header_banner.cljs$core$IFn$_invoke$arity$2 ? predict_prostate.layout.header.header_banner.cljs$core$IFn$_invoke$arity$2(ttt,"about-preamble") : predict_prostate.layout.header.header_banner.call(null,ttt,"about-preamble"))),React.createElement("div",({"id": "main-content", "tabIndex": (-1), "className": "row"}),React.createElement("div",({"style": ({"minHeight": "calc(100vh - 700px)"}), "className": "col-sm-10 col-sm-offset-1 col-lg-8 col-lg-offset-2"}),sablono.interpreter.interpret((cljs.core.truth_(page__$1)?(function (){var sec = (cljs.core.truth_(scroll_section__$1)?cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__54604_SHARP_,p2__54603_SHARP_){
return rum.core.with_key((function (){var G__54657 = p2__54603_SHARP_;
var G__54658 = ttt;
var G__54659 = new cljs.core.Keyword("predict-prostate.pages.about","offsets","predict-prostate.pages.about/offsets",228292490).cljs$core$IFn$_invoke$arity$1(state);
return (predict_prostate.pages.about.sectionc.cljs$core$IFn$_invoke$arity$3 ? predict_prostate.pages.about.sectionc.cljs$core$IFn$_invoke$arity$3(G__54657,G__54658,G__54659) : predict_prostate.pages.about.sectionc.call(null,G__54657,G__54658,G__54659));
})(),p1__54604_SHARP_);
}),(predict_prostate.pages.about.page_components.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.pages.about.page_components.cljs$core$IFn$_invoke$arity$1(page__$1) : predict_prostate.pages.about.page_components.call(null,page__$1))):predict_prostate.content_reader.all_subsections(ttt,cljs.core.name(page__$1)));
return sec;
})():null)))),sablono.interpreter.interpret((predict_prostate.components.bs3_modal.editor_modal.cljs$core$IFn$_invoke$arity$0 ? predict_prostate.components.bs3_modal.editor_modal.cljs$core$IFn$_invoke$arity$0() : predict_prostate.components.bs3_modal.editor_modal.call(null))),sablono.interpreter.interpret((predict_prostate.layout.header.footer_banner.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.layout.header.footer_banner.cljs$core$IFn$_invoke$arity$1(ttt) : predict_prostate.layout.header.footer_banner.call(null,ttt))),(function (){var attrs54609 = (predict_prostate.layout.header.footer.cljs$core$IFn$_invoke$arity$0 ? predict_prostate.layout.header.footer.cljs$core$IFn$_invoke$arity$0() : predict_prostate.layout.header.footer.call(null));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs54609))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["row","screen-only"], null)], null),attrs54609], 0))):({"className": "row screen-only"})),((cljs.core.map_QMARK_(attrs54609))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs54609)], null)));
})()], null)));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.local.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("predict-prostate.pages.about","offsets","predict-prostate.pages.about/offsets",228292490)),rum.core.static$,predict_prostate.pages.about.scroller], null),"about");

//# sourceMappingURL=predict_prostate.pages.about.js.map
