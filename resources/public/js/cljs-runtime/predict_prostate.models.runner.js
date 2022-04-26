goog.provide('predict_prostate.models.runner');
/**
 * recalculate-model predictions based on a selected model for n years.
 *   Arity 1 is for 10 years
 */
predict_prostate.models.runner.recalculate_model = (function predict_prostate$models$runner$recalculate_model(var_args){
var G__42999 = arguments.length;
switch (G__42999) {
case 2:
return predict_prostate.models.runner.recalculate_model.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return predict_prostate.models.runner.recalculate_model.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(predict_prostate.models.runner.recalculate_model.cljs$core$IFn$_invoke$arity$2 = (function (input_map,n){
return predict_prostate.state.run_time.results_change.pubsub$feeds$TopicFeed$publish$arity$2(null,((predict_prostate.state.run_time.recalculate_model_QMARK_(input_map))?(function (){var inputs = input_map;
var radical = predict_prostate.models.adapters.predict.predict_prostate.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inputs,new cljs.core.Keyword(null,"primary-rx","primary-rx",-1656848904),(1)),n);
var results = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"conservative","conservative",-1075714010),predict_prostate.models.adapters.predict.predict_prostate.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inputs,new cljs.core.Keyword(null,"primary-rx","primary-rx",-1656848904),(0)),n),new cljs.core.Keyword(null,"radical-low","radical-low",-2080230438),predict_prostate.models.adapters.predict.predict_prostate.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inputs,new cljs.core.Keyword(null,"primary-rx","primary-rx",-1656848904),0.9),n),new cljs.core.Keyword(null,"radical","radical",1159030213),predict_prostate.models.adapters.predict.predict_prostate.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inputs,new cljs.core.Keyword(null,"primary-rx","primary-rx",-1656848904),(1)),n),new cljs.core.Keyword(null,"radical-high","radical-high",1024405463),predict_prostate.models.adapters.predict.predict_prostate.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inputs,new cljs.core.Keyword(null,"primary-rx","primary-rx",-1656848904),1.1),n)], null);
return results;
})():null));
}));

(predict_prostate.models.runner.recalculate_model.cljs$core$IFn$_invoke$arity$1 = (function (input_map){
return predict_prostate.models.runner.recalculate_model.cljs$core$IFn$_invoke$arity$2(input_map,(10));
}));

(predict_prostate.models.runner.recalculate_model.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=predict_prostate.models.runner.js.map
