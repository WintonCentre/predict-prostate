goog.provide('predict_prostate.models.adapters.predict');
predict_prostate.models.adapters.predict.in_range = (function predict_prostate$models$adapters$predict$in_range(s){
var vec__44172 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(s,/:/);
var good = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44172,(0),null);
var bad = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44172,(1),null);
return parseFloat(good);
});
/**
 * Run the prostate model, mapping input factors to numeric model parameters.
 *   Arity 1 defaults to 10 year prediction using the 10 year model.
 *   Arity 2 allows you to say how many but uses the 15 year model if n > 10
 */
predict_prostate.models.adapters.predict.predict_prostate = (function predict_prostate$models$adapters$predict$predict_prostate(var_args){
var G__44179 = arguments.length;
switch (G__44179) {
case 2:
return predict_prostate.models.adapters.predict.predict_prostate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return predict_prostate.models.adapters.predict.predict_prostate.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(predict_prostate.models.adapters.predict.predict_prostate.cljs$core$IFn$_invoke$arity$2 = (function (input_map,n){
return predict_prostate.models.prostate_release.run_prostate(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(input_map,new cljs.core.Keyword(null,"age","age",-604307804),cljs.reader.read_string),new cljs.core.Keyword(null,"n","n",562130025),cljs.core.constantly(n)),new cljs.core.Keyword(null,"psa","psa",-321761459),cljs.reader.read_string),new cljs.core.Keyword(null,"t-stage","t-stage",-1315750984),cljs.core.identity),new cljs.core.Keyword(null,"protect","protect",-67966332),(0)));
}));

(predict_prostate.models.adapters.predict.predict_prostate.cljs$core$IFn$_invoke$arity$1 = (function (input_map){
return predict_prostate.models.adapters.predict.predict_prostate.cljs$core$IFn$_invoke$arity$2(input_map,(10));
}));

(predict_prostate.models.adapters.predict.predict_prostate.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=predict_prostate.models.adapters.predict.js.map
