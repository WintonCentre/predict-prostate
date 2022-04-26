goog.provide('predict_prostate.models.tests');
/**
 * Tests one case against the stata generated output
 */
predict_prostate.models.tests.clj_stata = (function predict_prostate$models$tests$clj_stata(p__58543){
var map__58544 = p__58543;
var map__58544__$1 = cljs.core.__destructure_map(map__58544);
var stata_in = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58544__$1,new cljs.core.Keyword(null,"stata-in","stata-in",-1119740949));
var stata_out = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58544__$1,new cljs.core.Keyword(null,"stata-out","stata-out",-287158852));
var clj_res = cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(predict_prostate.models.prostate_release.run_prostate(stata_in),new cljs.core.Keyword(null,"PCSsurvival","PCSsurvival",1208128423),(function (p1__58539_SHARP_){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__58539_SHARP_,(0));
})),new cljs.core.Keyword(null,"pred-PC-cum","pred-PC-cum",1965177836),(function (p1__58540_SHARP_){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__58540_SHARP_,(1));
})),new cljs.core.Keyword(null,"pred-NPC-cum","pred-NPC-cum",-1636287417),(function (p1__58541_SHARP_){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__58541_SHARP_,(1));
})),new cljs.core.Keyword(null,"NPC-survival","NPC-survival",-1399930619),(function (p1__58542_SHARP_){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__58542_SHARP_,(1));
}));
var diff = cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core._,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clj_res,stata_out], 0));
return diff;
});
/**
 * Tests all cases and returns failing test cases
 */
predict_prostate.models.tests.test_all_cases = (function predict_prostate$models$tests$test_all_cases(c){
var failing_cases = cljs.core.filterv((function (p1__58545_SHARP_){
return cljs.core.some((function (x){
return (x > 1.0E-6);
}),cljs.core.vals(predict_prostate.models.tests.clj_stata(p1__58545_SHARP_)));
}),c);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,failing_cases)){
return console.log("All",cljs.core.count(c),"model tests are passing.");
} else {
return console.log("Some (",cljs.core.count(failing_cases),") tests are failing.",cljs.core.str.cljs$core$IFn$_invoke$arity$1(failing_cases));

}
});
predict_prostate.models.tests.file_error = (function predict_prostate$models$tests$file_error(p__58546){
var map__58547 = p__58546;
var map__58547__$1 = cljs.core.__destructure_map(map__58547);
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58547__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58547__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return console.log(["file error: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_text)].join(''));
});
/**
 * read test cases from a url.
 */
predict_prostate.models.tests.get_test_cases = (function predict_prostate$models$tests$get_test_cases(url,p__58548){
var map__58549 = p__58548;
var map__58549__$1 = cljs.core.__destructure_map(map__58549);
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58549__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic(url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),predict_prostate.models.tests.file_error,new cljs.core.Keyword(null,"handler","handler",-195596612),handler,new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"transit","transit",359458387),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 1, ["Cache-Control","no-store"], null)], null)], 0));
});

//# sourceMappingURL=predict_prostate.models.tests.js.map
