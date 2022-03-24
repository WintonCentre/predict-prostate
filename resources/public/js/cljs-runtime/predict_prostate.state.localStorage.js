goog.provide('predict_prostate.state.localStorage');
predict_prostate.state.localStorage.get_settings_BANG_ = (function predict_prostate$state$localStorage$get_settings_BANG_(default_value){
var x = (function (){var temp__5751__auto__ = localStorage.getItem("predict-prostate-2.0");
if(cljs.core.truth_(temp__5751__auto__)){
var settings = temp__5751__auto__;
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([default_value,cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(settings)], 0));
} else {
return default_value;
}
})();
return x;
});
predict_prostate.state.localStorage.put_settings_BANG_ = (function predict_prostate$state$localStorage$put_settings_BANG_(settings){
var old_settings = predict_prostate.state.localStorage.get_settings_BANG_(cljs.core.PersistentArrayMap.EMPTY);
return localStorage.setItem("predict-prostate-2.0",cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([old_settings,settings], 0)));
});

//# sourceMappingURL=predict_prostate.state.localStorage.js.map
