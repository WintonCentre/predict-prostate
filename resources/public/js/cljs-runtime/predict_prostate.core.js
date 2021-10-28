goog.provide('predict_prostate.core');
cljs.core.enable_console_print_BANG_();
if((typeof predict_prostate !== 'undefined') && (typeof predict_prostate.core !== 'undefined') && (typeof predict_prostate.core.once_only_guard !== 'undefined')){
} else {
predict_prostate.core.once_only_guard = predict_prostate.state.mutations.mutator();
}
predict_prostate.core.main = (function predict_prostate$core$main(){
return rum.core.mount((predict_prostate.pages.root.root.cljs$core$IFn$_invoke$arity$0 ? predict_prostate.pages.root.root.cljs$core$IFn$_invoke$arity$0() : predict_prostate.pages.root.root.call(null)),goog.dom.getElement("app"));
});
predict_prostate.core.loaded_id = setInterval((function (){
if(cljs.core.truth_((function (){var G__34585 = document.readyState;
var fexpr__34584 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["loaded",null,"complete",null], null), null);
return (fexpr__34584.cljs$core$IFn$_invoke$arity$1 ? fexpr__34584.cljs$core$IFn$_invoke$arity$1(G__34585) : fexpr__34584.call(null,G__34585));
})())){
clearInterval(predict_prostate.core.loaded_id);

return predict_prostate.core.main();
} else {
return null;
}
}),(10));
predict_prostate.core.on_js_reload = (function predict_prostate$core$on_js_reload(){
return null;
});

//# sourceMappingURL=predict_prostate.core.js.map
