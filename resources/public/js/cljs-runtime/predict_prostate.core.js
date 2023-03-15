goog.provide('predict_prostate.core');
cljs.core.enable_console_print_BANG_();
if((typeof predict_prostate !== 'undefined') && (typeof predict_prostate.core !== 'undefined') && (typeof predict_prostate.core.once_only_guard !== 'undefined')){
} else {
predict_prostate.core.once_only_guard = predict_prostate.state.mutations.mutator();
}
predict_prostate.core.ok_chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((0));
predict_prostate.core.err_chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((0));
predict_prostate.core.static_chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((0));
predict_prostate.core.init = (function predict_prostate$core$init(){
try{return navigator.serviceWorker.register("/sw_cache_update.js").then((function (){
return console.log("service worker registered");
}));
}catch (e24155){if((e24155 instanceof Object)){
var err = e24155;
return console.error("Failed to register service worker",err);
} else {
throw e24155;

}
}});
goog.exportSymbol('predict_prostate.core.init', predict_prostate.core.init);
predict_prostate.core.main = (function predict_prostate$core$main(){
predict_prostate.core.init();

if(translations.config.predict_edit){
rum.core.mount((predict_prostate.pages.root.edit_root.cljs$core$IFn$_invoke$arity$0 ? predict_prostate.pages.root.edit_root.cljs$core$IFn$_invoke$arity$0() : predict_prostate.pages.root.edit_root.call(null)),goog.dom.getElement("app"));

return translations.tongue_base.load_all_translations(predict_prostate.core.static_chan,predict_prostate.core.ok_chan,predict_prostate.core.err_chan,[translations.tranny_api.base_url,"upserts/all"].join(''),predict_prostate.state.run_time.t_state_cursor);
} else {
rum.core.mount((predict_prostate.pages.root.root.cljs$core$IFn$_invoke$arity$0 ? predict_prostate.pages.root.root.cljs$core$IFn$_invoke$arity$0() : predict_prostate.pages.root.root.call(null)),goog.dom.getElement("app"));

return predict_prostate.state.run_time.t_state_change.pubsub$feeds$TopicFeed$publish$arity$2(null,translations.config.live_dictionary_url);
}
});
predict_prostate.core.edit_main = (function predict_prostate$core$edit_main(){
return rum.core.mount((predict_prostate.pages.root.edit_root.cljs$core$IFn$_invoke$arity$0 ? predict_prostate.pages.root.edit_root.cljs$core$IFn$_invoke$arity$0() : predict_prostate.pages.root.edit_root.call(null)),goog.dom.getElement("app"));
});
predict_prostate.core.loaded_id = setInterval((function (){
if(cljs.core.truth_((function (){var G__24157 = document.readyState;
var fexpr__24156 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["loaded",null,"complete",null], null), null);
return (fexpr__24156.cljs$core$IFn$_invoke$arity$1 ? fexpr__24156.cljs$core$IFn$_invoke$arity$1(G__24157) : fexpr__24156.call(null,G__24157));
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
