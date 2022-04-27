goog.provide('predict_prostate.pages.root');
predict_prostate.pages.root.before_print = (function predict_prostate$pages$root$before_print(){
return predict_prostate.state.run_time.media_change.pubsub$feeds$TopicFeed$publish$arity$2(null,new cljs.core.Keyword(null,"print","print",1299562414));
});
predict_prostate.pages.root.after_print = (function predict_prostate$pages$root$after_print(){
return predict_prostate.state.run_time.media_change.pubsub$feeds$TopicFeed$publish$arity$2(null,new cljs.core.Keyword(null,"screen","screen",1990059748));
});
predict_prostate.pages.root.before_after_print = (function predict_prostate$pages$root$before_after_print(){
goog.object.set(window,"onbeforeprint",predict_prostate.pages.root.before_print);

return goog.object.set(window,"onafterprint",predict_prostate.pages.root.after_print);
});
predict_prostate.pages.root.media_watch = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (state){
if(cljs.core.not(window.oldBrowser)){
if(cljs.core.truth_(window.matchMedia("print").addEventListener)){
predict_prostate.pages.root.before_after_print();
} else {
var mql_61828 = window.matchMedia("print");
mql_61828.addListener((function (p1__61820_SHARP_){
if(cljs.core.truth_(goog.object.get(p1__61820_SHARP_,"matches"))){
return predict_prostate.pages.root.before_print();
} else {
return predict_prostate.pages.root.after_print();
}
}));
}
} else {
predict_prostate.pages.root.before_after_print();
}

return state;
})], null);
/**
 * Root of site. All components are within this tree
 */
predict_prostate.pages.root.root_STAR_ = rum.core.lazy_build(rum.core.build_defc,(function (ttt_STAR_){
var vec__61824 = rum.core.react(predict_prostate.state.run_time.route);
var page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61824,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61824,(1),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61824,(2),null);
var rt = vec__61824;
var lang = new cljs.core.Keyword(null,"lang","lang",-1819677104).cljs$core$IFn$_invoke$arity$1(rum.core.react(predict_prostate.state.run_time.t_state_cursor));
var attrs61823 = (function (){var G__61827 = page;
var G__61827__$1 = (((G__61827 instanceof cljs.core.Keyword))?G__61827.fqn:null);
switch (G__61827__$1) {
case "home":
return predict_prostate.pages.home.home(ttt_STAR_);

break;
case "about":
return predict_prostate.pages.about.about(ttt_STAR_,rt);

break;
case "tool":
return predict_prostate.pages.tool.tool(ttt_STAR_);

break;
case "contact":
return predict_prostate.pages.contact.contact(ttt_STAR_,rt);

break;
case "legal":
return predict_prostate.pages.legal.legal(ttt_STAR_,rt);

break;
case "not-found":
return predict_prostate.pages.not_found.not_found(ttt_STAR_);

break;
case "model-tests":
return predict_prostate.pages.model_tests.model_tests(ttt_STAR_);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__61827__$1)].join('')));

}
})();
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs61823))?daiquiri.interpreter.element_attributes(attrs61823):null),((cljs.core.map_QMARK_(attrs61823))?null:[daiquiri.interpreter.interpret(attrs61823)]));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,predict_prostate.pages.root.media_watch], null),"predict-prostate.pages.root/root*");
/**
 * Root of site. All components are within this tree
 */
predict_prostate.pages.root.root = rum.core.lazy_build(rum.core.build_defc,(function (){
return predict_prostate.pages.root.root_STAR_(translations.root.ttt);
}),null,"predict-prostate.pages.root/root");
/**
 * Root of the translation editor site. All components are within this tree
 */
predict_prostate.pages.root.edit_root = rum.core.lazy_build(rum.core.build_defc,(function (){
return predict_prostate.pages.root.root_STAR_(translations.root.ttt_edit);
}),null,"predict-prostate.pages.root/edit-root");

//# sourceMappingURL=predict_prostate.pages.root.js.map
