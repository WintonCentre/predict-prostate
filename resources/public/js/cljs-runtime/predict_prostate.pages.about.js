goog.provide('predict_prostate.pages.about');
predict_prostate.pages.about.page_components = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"about","about",1423892543),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["about"], null),new cljs.core.Keyword(null,"overview","overview",-435037267),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["overview","whatpredictdoes","whoisitfor","howpredictworks","whobuiltpredict"], null),new cljs.core.Keyword(null,"technical","technical",-1762752687),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["technical","history","preversions","publications"], null)], null);
predict_prostate.pages.about.save_offsets = (function predict_prostate$pages$about$save_offsets(state){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["*save-offsets* args",new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)], 0));

var vec__160065 = new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__160065,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__160065,(1),null);
var offsets = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__160065,(2),null);
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

var vec__160128_160225 = new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state);
var __160226 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__160128_160225,(0),null);
var vec__160131_160227 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__160128_160225,(1),null);
var __160228__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__160131_160227,(0),null);
var map__160134_160229 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__160131_160227,(1),null);
var map__160134_160230__$1 = (((((!((map__160134_160229 == null))))?(((((map__160134_160229.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__160134_160229.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__160134_160229):map__160134_160229);
var page_160231 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__160134_160230__$1,new cljs.core.Keyword(null,"page","page",849072397));
var scroll_section_160232 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__160134_160230__$1,new cljs.core.Keyword(null,"section","section",-300141526));
var scroll_section_160233__$1 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(scroll_section_160232);
interop.utils.scrollTo((cljs.core.truth_(scroll_section_160233__$1)?cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(new cljs.core.Keyword("predict-prostate.pages.about","offsets","predict-prostate.pages.about/offsets",228292490).cljs$core$IFn$_invoke$arity$1(state)),cljs.core.name(scroll_section_160233__$1)):(0)));

return state;
})], null);
/**
 * Renders a (text) page given the bide parsed route containing a page, and optionally a section.
 */
predict_prostate.pages.about.about = rum.core.build_defcs((function (state,ttt,route){
var vec__160143 = route;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__160143,(0),null);
var map__160146 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__160143,(1),null);
var map__160146__$1 = (((((!((map__160146 == null))))?(((((map__160146.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__160146.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__160146):map__160146);
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__160146__$1,new cljs.core.Keyword(null,"page","page",849072397));
var scroll_section = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__160146__$1,new cljs.core.Keyword(null,"section","section",-300141526));
var page__$1 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(page);
var scroll_section__$1 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(scroll_section);
var vec__160147 = predict_prostate.content_reader.section.cljs$core$IFn$_invoke$arity$2(ttt,"tool-preamble");
var seq__160148 = cljs.core.seq(vec__160147);
var first__160149 = cljs.core.first(seq__160148);
var seq__160148__$1 = cljs.core.next(seq__160148);
var ___$1 = first__160149;
var preamble = seq__160148__$1;
var attrs160139 = (predict_prostate.layout.header.header.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.layout.header.header.cljs$core$IFn$_invoke$arity$1(ttt) : predict_prostate.layout.header.header.call(null,ttt));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs160139))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["container-fluid"], null)], null),attrs160139], 0))):({"className": "container-fluid"})),((cljs.core.map_QMARK_(attrs160139))?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret((predict_prostate.layout.header.header_banner.cljs$core$IFn$_invoke$arity$2 ? predict_prostate.layout.header.header_banner.cljs$core$IFn$_invoke$arity$2(ttt,"about-preamble") : predict_prostate.layout.header.header_banner.call(null,ttt,"about-preamble"))),React.createElement("div",({"id": "main-content", "tabIndex": (-1), "className": "row"}),React.createElement("div",({"style": ({"minHeight": "calc(100vh - 700px)"}), "className": "col-sm-10 col-sm-offset-1 col-lg-8 col-lg-offset-2"}),sablono.interpreter.interpret((cljs.core.truth_(page__$1)?(function (){var sec = (cljs.core.truth_(scroll_section__$1)?cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__160137_SHARP_,p2__160136_SHARP_){
return rum.core.with_key((function (){var G__160166 = p2__160136_SHARP_;
var G__160167 = ttt;
var G__160168 = new cljs.core.Keyword("predict-prostate.pages.about","offsets","predict-prostate.pages.about/offsets",228292490).cljs$core$IFn$_invoke$arity$1(state);
return (predict_prostate.pages.about.sectionc.cljs$core$IFn$_invoke$arity$3 ? predict_prostate.pages.about.sectionc.cljs$core$IFn$_invoke$arity$3(G__160166,G__160167,G__160168) : predict_prostate.pages.about.sectionc.call(null,G__160166,G__160167,G__160168));
})(),p1__160137_SHARP_);
}),(predict_prostate.pages.about.page_components.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.pages.about.page_components.cljs$core$IFn$_invoke$arity$1(page__$1) : predict_prostate.pages.about.page_components.call(null,page__$1))):predict_prostate.content_reader.all_subsections(ttt,cljs.core.name(page__$1)));
return sec;
})():null)))),sablono.interpreter.interpret((predict_prostate.components.bs3_modal.editor_modal.cljs$core$IFn$_invoke$arity$0 ? predict_prostate.components.bs3_modal.editor_modal.cljs$core$IFn$_invoke$arity$0() : predict_prostate.components.bs3_modal.editor_modal.call(null))),sablono.interpreter.interpret((predict_prostate.layout.header.footer_banner.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.layout.header.footer_banner.cljs$core$IFn$_invoke$arity$1(ttt) : predict_prostate.layout.header.footer_banner.call(null,ttt))),(function (){var attrs160141 = (predict_prostate.layout.header.footer.cljs$core$IFn$_invoke$arity$0 ? predict_prostate.layout.header.footer.cljs$core$IFn$_invoke$arity$0() : predict_prostate.layout.header.footer.call(null));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs160141))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["row","screen-only"], null)], null),attrs160141], 0))):({"className": "row screen-only"})),((cljs.core.map_QMARK_(attrs160141))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs160141)], null)));
})()], null):new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs160139),sablono.interpreter.interpret((predict_prostate.layout.header.header_banner.cljs$core$IFn$_invoke$arity$2 ? predict_prostate.layout.header.header_banner.cljs$core$IFn$_invoke$arity$2(ttt,"about-preamble") : predict_prostate.layout.header.header_banner.call(null,ttt,"about-preamble"))),React.createElement("div",({"id": "main-content", "tabIndex": (-1), "className": "row"}),React.createElement("div",({"style": ({"minHeight": "calc(100vh - 700px)"}), "className": "col-sm-10 col-sm-offset-1 col-lg-8 col-lg-offset-2"}),sablono.interpreter.interpret((cljs.core.truth_(page__$1)?(function (){var sec = (cljs.core.truth_(scroll_section__$1)?cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__160137_SHARP_,p2__160136_SHARP_){
return rum.core.with_key((function (){var G__160186 = p2__160136_SHARP_;
var G__160187 = ttt;
var G__160188 = new cljs.core.Keyword("predict-prostate.pages.about","offsets","predict-prostate.pages.about/offsets",228292490).cljs$core$IFn$_invoke$arity$1(state);
return (predict_prostate.pages.about.sectionc.cljs$core$IFn$_invoke$arity$3 ? predict_prostate.pages.about.sectionc.cljs$core$IFn$_invoke$arity$3(G__160186,G__160187,G__160188) : predict_prostate.pages.about.sectionc.call(null,G__160186,G__160187,G__160188));
})(),p1__160137_SHARP_);
}),(predict_prostate.pages.about.page_components.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.pages.about.page_components.cljs$core$IFn$_invoke$arity$1(page__$1) : predict_prostate.pages.about.page_components.call(null,page__$1))):predict_prostate.content_reader.all_subsections(ttt,cljs.core.name(page__$1)));
return sec;
})():null)))),sablono.interpreter.interpret((predict_prostate.components.bs3_modal.editor_modal.cljs$core$IFn$_invoke$arity$0 ? predict_prostate.components.bs3_modal.editor_modal.cljs$core$IFn$_invoke$arity$0() : predict_prostate.components.bs3_modal.editor_modal.call(null))),sablono.interpreter.interpret((predict_prostate.layout.header.footer_banner.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.layout.header.footer_banner.cljs$core$IFn$_invoke$arity$1(ttt) : predict_prostate.layout.header.footer_banner.call(null,ttt))),(function (){var attrs160142 = (predict_prostate.layout.header.footer.cljs$core$IFn$_invoke$arity$0 ? predict_prostate.layout.header.footer.cljs$core$IFn$_invoke$arity$0() : predict_prostate.layout.header.footer.call(null));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs160142))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["row","screen-only"], null)], null),attrs160142], 0))):({"className": "row screen-only"})),((cljs.core.map_QMARK_(attrs160142))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs160142)], null)));
})()], null)));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.local.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("predict-prostate.pages.about","offsets","predict-prostate.pages.about/offsets",228292490)),rum.core.static$,predict_prostate.pages.about.scroller], null),"about");

//# sourceMappingURL=predict_prostate.pages.about.js.map
