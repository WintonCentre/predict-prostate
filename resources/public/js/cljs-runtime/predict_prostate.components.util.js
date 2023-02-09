goog.provide('predict_prostate.components.util');
predict_prostate.components.util.ttt_key = (function predict_prostate$components$util$ttt_key(widget_id,widget_key){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(widget_id),"/",cljs.core.name(widget_key)].join(''));
});
/**
 * Wrap text in a ttt call for a particular widget context
 */
predict_prostate.components.util.widget_ttt = (function predict_prostate$components$util$widget_ttt(ttt,widget_id,widget_key,text){
var G__46813 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [predict_prostate.components.util.ttt_key(widget_id,widget_key),text], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__46813) : ttt.call(null,G__46813));
});

//# sourceMappingURL=predict_prostate.components.util.js.map
