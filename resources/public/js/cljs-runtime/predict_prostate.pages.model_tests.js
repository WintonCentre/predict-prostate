goog.provide('predict_prostate.pages.model_tests');
predict_prostate.pages.model_tests.click_handler = (function predict_prostate$pages$model_tests$click_handler(){
predict_prostate.models.tests.get_test_cases("/test-runs.txt",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (p1__46666_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(predict_prostate.state.run_time.rtdb,cljs.core.assoc,new cljs.core.Keyword(null,"model-test-cases","model-test-cases",540483205),cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(p1__46666_SHARP_));
})], null));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"model-test-cases","model-test-cases",540483205).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(predict_prostate.state.run_time.rtdb))], 0));

return predict_prostate.models.tests.test_all_cases(new cljs.core.Keyword(null,"model-test-cases","model-test-cases",540483205).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(predict_prostate.state.run_time.rtdb)));
});
predict_prostate.pages.model_tests.test_button = (function predict_prostate$pages$model_tests$test_button(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-primary.btn-lg","button.btn.btn-primary.btn-lg",613853517),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"aria-label","aria-label",455891514),"launch a batch of tests",new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),predict_prostate.pages.model_tests.click_handler], null),graphics.simple_icons.icon(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"family","family",-1313145692),new cljs.core.Keyword(null,"fa","fa",484981183)], null),"chevron-right")," ","Launch model tests"], null);
});
predict_prostate.pages.model_tests.model_tests = rum.core.lazy_build(rum.core.build_defc,(function (ttt){
return daiquiri.core.create_element("div",{'className':"container"},[daiquiri.core.create_element("div",{'className':"row"},[daiquiri.core.create_element("div",{'className':"col-sm-12"},[predict_prostate.layout.header.header(ttt),daiquiri.core.create_element("div",{'className':"row"},[daiquiri.core.create_element("div",{'style':{'paddingLeft':"25px",'paddingRight':"25px"},'className':"col-sm-4"},[daiquiri.core.create_element("p",null,["Open the console to see the results of the tests."])]),daiquiri.core.create_element("div",{'style':{'minHeight':"calc(100vh - 200px)"},'className':"col-sm-8 col-xs-12"},[daiquiri.interpreter.interpret(predict_prostate.pages.model_tests.test_button()),daiquiri.core.create_element("img",{'src':"assets/404.jpg",'style':{'marginTop':"3ex"},'alt':"Not found",'className':"img-responsive"},null)])]),predict_prostate.layout.header.footer()])])]);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$], null),"predict-prostate.pages.model-tests/model-tests");

//# sourceMappingURL=predict_prostate.pages.model_tests.js.map
