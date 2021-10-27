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
var mql_34573 = window.matchMedia("print");
mql_34573.addListener((function (p1__34567_SHARP_){
if(cljs.core.truth_(goog.object.get(p1__34567_SHARP_,"matches"))){
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
predict_prostate.pages.root.root = rum.core.build_defc((function (){
var vec__34569 = rum.core.react(predict_prostate.state.run_time.route);
var page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34569,(0),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34569,(1),null);
var query = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34569,(2),null);
var rt = vec__34569;
var attrs34568 = (function (){var G__34572 = page;
var G__34572__$1 = (((G__34572 instanceof cljs.core.Keyword))?G__34572.fqn:null);
switch (G__34572__$1) {
case "home":
return (predict_prostate.pages.home.home.cljs$core$IFn$_invoke$arity$0 ? predict_prostate.pages.home.home.cljs$core$IFn$_invoke$arity$0() : predict_prostate.pages.home.home.call(null));

break;
case "about":
return (predict_prostate.pages.about.about.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.pages.about.about.cljs$core$IFn$_invoke$arity$1(rt) : predict_prostate.pages.about.about.call(null,rt));

break;
case "tool":
return (predict_prostate.pages.tool.tool.cljs$core$IFn$_invoke$arity$0 ? predict_prostate.pages.tool.tool.cljs$core$IFn$_invoke$arity$0() : predict_prostate.pages.tool.tool.call(null));

break;
case "contact":
return (predict_prostate.pages.contact.contact.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.pages.contact.contact.cljs$core$IFn$_invoke$arity$1(rt) : predict_prostate.pages.contact.contact.call(null,rt));

break;
case "legal":
return (predict_prostate.pages.legal.legal.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.pages.legal.legal.cljs$core$IFn$_invoke$arity$1(rt) : predict_prostate.pages.legal.legal.call(null,rt));

break;
case "not-found":
return (predict_prostate.pages.not_found.not_found.cljs$core$IFn$_invoke$arity$0 ? predict_prostate.pages.not_found.not_found.cljs$core$IFn$_invoke$arity$0() : predict_prostate.pages.not_found.not_found.call(null));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34572__$1)].join('')));

}
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs34568))?sablono.interpreter.attributes(attrs34568):null),((cljs.core.map_QMARK_(attrs34568))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs34568)], null)));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,predict_prostate.pages.root.media_watch], null),"root");

//# sourceMappingURL=predict_prostate.pages.root.js.map
