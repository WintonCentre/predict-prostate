goog.provide('predict_prostate.shadow');
cljs.core.enable_console_print_BANG_();
if((typeof predict_prostate !== 'undefined') && (typeof predict_prostate.shadow !== 'undefined') && (typeof predict_prostate.shadow.once_only_guard !== 'undefined')){
} else {
predict_prostate.shadow.once_only_guard = predict_prostate.state.mutations.mutator();
}
predict_prostate.shadow.ok_chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((0));
predict_prostate.shadow.err_chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((0));
predict_prostate.shadow.static_chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((0));
predict_prostate.shadow.main = (function predict_prostate$shadow$main(){
return rum.core.mount((predict_prostate.pages.root.root.cljs$core$IFn$_invoke$arity$0 ? predict_prostate.pages.root.root.cljs$core$IFn$_invoke$arity$0() : predict_prostate.pages.root.root.call(null)),goog.dom.getElement("app"));
});

//# sourceMappingURL=predict_prostate.shadow.js.map
