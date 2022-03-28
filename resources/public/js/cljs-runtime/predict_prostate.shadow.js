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
rum.core.mount(predict_prostate.pages.root.root(),goog.dom.getElement("app"));

if(translations.config.predict_edit){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["edit: loading translations from: ",[translations.tranny_api.base_url,"upserts/all"].join('')], 0));

return translations.tongue_base.load_all_translations(predict_prostate.shadow.static_chan,predict_prostate.shadow.ok_chan,predict_prostate.shadow.err_chan,[translations.tranny_api.base_url,"upserts/all"].join(''),predict_prostate.state.run_time.t_state_cursor);
} else {
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["prod: publish t-state-change ",translations.config.live_dictionary_url], 0));

return predict_prostate.state.run_time.t_state_change.pubsub$feeds$TopicFeed$publish$arity$2(null,translations.config.live_dictionary_url);
}
});
predict_prostate.shadow.edit_main = (function predict_prostate$shadow$edit_main(){
rum.core.mount(predict_prostate.pages.root.edit_root(),goog.dom.getElement("app"));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["edit: loading translations from: ",[translations.tranny_api.base_url,"upserts/all"].join('')], 0));

return translations.tongue_base.load_all_translations(predict_prostate.shadow.static_chan,predict_prostate.shadow.ok_chan,predict_prostate.shadow.err_chan,[translations.tranny_api.base_url,"upserts/all"].join(''),predict_prostate.state.run_time.t_state_cursor);
});

//# sourceMappingURL=predict_prostate.shadow.js.map
