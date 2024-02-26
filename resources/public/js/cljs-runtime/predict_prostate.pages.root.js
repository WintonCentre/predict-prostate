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
var mql_44127 = window.matchMedia("print");
mql_44127.addListener((function (p1__44121_SHARP_){
if(cljs.core.truth_(goog.object.get(p1__44121_SHARP_,"matches"))){
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
predict_prostate.pages.root.root_STAR_ = rum.core.build_defc((function (ttt_STAR_){
var vec__44123 = rum.core.react(predict_prostate.state.run_time.route);
var page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44123,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44123,(1),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44123,(2),null);
var rt = vec__44123;
var lang = new cljs.core.Keyword(null,"lang","lang",-1819677104).cljs$core$IFn$_invoke$arity$1(rum.core.react(predict_prostate.state.run_time.t_state_cursor));
var attrs44122 = (function (){var G__44126 = page;
var G__44126__$1 = (((G__44126 instanceof cljs.core.Keyword))?G__44126.fqn:null);
switch (G__44126__$1) {
case "home":
return (predict_prostate.pages.home.home.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.pages.home.home.cljs$core$IFn$_invoke$arity$1(ttt_STAR_) : predict_prostate.pages.home.home.call(null,ttt_STAR_));

break;
case "about":
return (predict_prostate.pages.about.about.cljs$core$IFn$_invoke$arity$2 ? predict_prostate.pages.about.about.cljs$core$IFn$_invoke$arity$2(ttt_STAR_,rt) : predict_prostate.pages.about.about.call(null,ttt_STAR_,rt));

break;
case "tool":
return (predict_prostate.pages.tool.tool.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.pages.tool.tool.cljs$core$IFn$_invoke$arity$1(ttt_STAR_) : predict_prostate.pages.tool.tool.call(null,ttt_STAR_));

break;
case "contact":
return (predict_prostate.pages.contact.contact.cljs$core$IFn$_invoke$arity$2 ? predict_prostate.pages.contact.contact.cljs$core$IFn$_invoke$arity$2(ttt_STAR_,rt) : predict_prostate.pages.contact.contact.call(null,ttt_STAR_,rt));

break;
case "legal":
return (predict_prostate.pages.legal.legal.cljs$core$IFn$_invoke$arity$2 ? predict_prostate.pages.legal.legal.cljs$core$IFn$_invoke$arity$2(ttt_STAR_,rt) : predict_prostate.pages.legal.legal.call(null,ttt_STAR_,rt));

break;
case "not-found":
return (predict_prostate.pages.not_found.not_found.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.pages.not_found.not_found.cljs$core$IFn$_invoke$arity$1(ttt_STAR_) : predict_prostate.pages.not_found.not_found.call(null,ttt_STAR_));

break;
case "model-tests":
return (predict_prostate.pages.model_tests.model_tests.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.pages.model_tests.model_tests.cljs$core$IFn$_invoke$arity$1(ttt_STAR_) : predict_prostate.pages.model_tests.model_tests.call(null,ttt_STAR_));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44126__$1)].join('')));

}
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs44122))?sablono.interpreter.attributes(attrs44122):null),((cljs.core.map_QMARK_(attrs44122))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs44122)], null)));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,predict_prostate.pages.root.media_watch], null),"root*");
/**
 * Root of site. All components are within this tree
 */
predict_prostate.pages.root.root = rum.core.build_defc((function (){
return sablono.interpreter.interpret((predict_prostate.pages.root.root_STAR_.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.pages.root.root_STAR_.cljs$core$IFn$_invoke$arity$1(translations.root.ttt) : predict_prostate.pages.root.root_STAR_.call(null,translations.root.ttt)));
}),null,"root");
/**
 * Root of the translation editor site. All components are within this tree
 */
predict_prostate.pages.root.edit_root = rum.core.build_defc((function (){
return sablono.interpreter.interpret((predict_prostate.pages.root.root_STAR_.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.pages.root.root_STAR_.cljs$core$IFn$_invoke$arity$1(translations.root.ttt_edit) : predict_prostate.pages.root.root_STAR_.call(null,translations.root.ttt_edit)));
}),null,"edit-root");

//# sourceMappingURL=predict_prostate.pages.root.js.map
