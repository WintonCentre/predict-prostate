goog.provide('predict_prostate.pages.model_tests');
predict_prostate.pages.model_tests.load_chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((0));
predict_prostate.pages.model_tests.click_handler = (function predict_prostate$pages$model_tests$click_handler(){
predict_prostate.models.tests.get_test_cases("/test-runs.txt",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (p1__35245_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(predict_prostate.pages.model_tests.load_chan,p1__35245_SHARP_);
})], null));

var c__30046__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30047__auto__ = (function (){var switch__29976__auto__ = (function (state_35250){
var state_val_35251 = (state_35250[(1)]);
if((state_val_35251 === (1))){
var inst_35247 = (function (){return (function (p1__35246_SHARP_){
return predict_prostate.models.tests.test_all_cases(cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(p1__35246_SHARP_));
});
})();
var inst_35248 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(predict_prostate.pages.model_tests.load_chan,inst_35247);
var state_35250__$1 = state_35250;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35250__$1,inst_35248);
} else {
return null;
}
});
return (function() {
var predict_prostate$pages$model_tests$click_handler_$_state_machine__29977__auto__ = null;
var predict_prostate$pages$model_tests$click_handler_$_state_machine__29977__auto____0 = (function (){
var statearr_35252 = [null,null,null,null,null,null,null];
(statearr_35252[(0)] = predict_prostate$pages$model_tests$click_handler_$_state_machine__29977__auto__);

(statearr_35252[(1)] = (1));

return statearr_35252;
});
var predict_prostate$pages$model_tests$click_handler_$_state_machine__29977__auto____1 = (function (state_35250){
while(true){
var ret_value__29978__auto__ = (function (){try{while(true){
var result__29979__auto__ = switch__29976__auto__(state_35250);
if(cljs.core.keyword_identical_QMARK_(result__29979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29979__auto__;
}
break;
}
}catch (e35253){var ex__29980__auto__ = e35253;
var statearr_35254_35271 = state_35250;
(statearr_35254_35271[(2)] = ex__29980__auto__);


if(cljs.core.seq((state_35250[(4)]))){
var statearr_35255_35272 = state_35250;
(statearr_35255_35272[(1)] = cljs.core.first((state_35250[(4)])));

} else {
throw ex__29980__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29978__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35273 = state_35250;
state_35250 = G__35273;
continue;
} else {
return ret_value__29978__auto__;
}
break;
}
});
predict_prostate$pages$model_tests$click_handler_$_state_machine__29977__auto__ = function(state_35250){
switch(arguments.length){
case 0:
return predict_prostate$pages$model_tests$click_handler_$_state_machine__29977__auto____0.call(this);
case 1:
return predict_prostate$pages$model_tests$click_handler_$_state_machine__29977__auto____1.call(this,state_35250);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
predict_prostate$pages$model_tests$click_handler_$_state_machine__29977__auto__.cljs$core$IFn$_invoke$arity$0 = predict_prostate$pages$model_tests$click_handler_$_state_machine__29977__auto____0;
predict_prostate$pages$model_tests$click_handler_$_state_machine__29977__auto__.cljs$core$IFn$_invoke$arity$1 = predict_prostate$pages$model_tests$click_handler_$_state_machine__29977__auto____1;
return predict_prostate$pages$model_tests$click_handler_$_state_machine__29977__auto__;
})()
})();
var state__30048__auto__ = (function (){var statearr_35256 = f__30047__auto__();
(statearr_35256[(6)] = c__30046__auto__);

return statearr_35256;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30048__auto__);
}));

return c__30046__auto__;
});
predict_prostate.pages.model_tests.test_button = (function predict_prostate$pages$model_tests$test_button(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-primary.btn-lg","button.btn.btn-primary.btn-lg",613853517),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"aria-label","aria-label",455891514),"launch a batch of tests",new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),predict_prostate.pages.model_tests.click_handler], null),(function (){var G__35257 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"family","family",-1313145692),new cljs.core.Keyword(null,"fa","fa",484981183)], null);
var G__35258 = "chevron-right";
return (graphics.simple_icons.icon.cljs$core$IFn$_invoke$arity$2 ? graphics.simple_icons.icon.cljs$core$IFn$_invoke$arity$2(G__35257,G__35258) : graphics.simple_icons.icon.call(null,G__35257,G__35258));
})()," ","Launch model tests"], null);
});
predict_prostate.pages.model_tests.model_tests = rum.core.build_defc((function (ttt){
return React.createElement("div",({"className": "container"}),React.createElement("div",({"className": "row"}),(function (){var attrs35259 = (predict_prostate.layout.header.header.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.layout.header.header.cljs$core$IFn$_invoke$arity$1(ttt) : predict_prostate.layout.header.header.call(null,ttt));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs35259))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["col-sm-12"], null)], null),attrs35259], 0))):({"className": "col-sm-12"})),((cljs.core.map_QMARK_(attrs35259))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.createElement("div",({"className": "row"}),React.createElement("div",({"className": "col-12"}),React.createElement("img",({"src": "/assets/model-tests.png", "style": ({"marginTop": "3ex"}), "alt": "Model tests", "className": "img-responsive"})))),React.createElement("div",({"className": "row"}),React.createElement("div",({"style": ({"display": "flex", "justifyContent": "center"}), "className": "col-12"}),sablono.interpreter.interpret(predict_prostate.pages.model_tests.test_button()))),React.createElement("div",({"className": "row"}),React.createElement("div",({"style": ({"minHeight": "calc(100vh - 200px)", "paddingLeft": "25px", "paddingRight": "25px", "display": "flex", "justifyContent": "center"}), "className": "col-12"}),React.createElement("p",null,React.createElement("i",null,"Open the console to see the results of the tests.")))),sablono.interpreter.interpret((predict_prostate.layout.header.footer.cljs$core$IFn$_invoke$arity$0 ? predict_prostate.layout.header.footer.cljs$core$IFn$_invoke$arity$0() : predict_prostate.layout.header.footer.call(null)))], null):new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs35259),React.createElement("div",({"className": "row"}),React.createElement("div",({"className": "col-12"}),React.createElement("img",({"src": "/assets/model-tests.png", "style": ({"marginTop": "3ex"}), "alt": "Model tests", "className": "img-responsive"})))),React.createElement("div",({"className": "row"}),React.createElement("div",({"style": ({"display": "flex", "justifyContent": "center"}), "className": "col-12"}),sablono.interpreter.interpret(predict_prostate.pages.model_tests.test_button()))),React.createElement("div",({"className": "row"}),React.createElement("div",({"style": ({"minHeight": "calc(100vh - 200px)", "paddingLeft": "25px", "paddingRight": "25px", "display": "flex", "justifyContent": "center"}), "className": "col-12"}),React.createElement("p",null,React.createElement("i",null,"Open the console to see the results of the tests.")))),sablono.interpreter.interpret((predict_prostate.layout.header.footer.cljs$core$IFn$_invoke$arity$0 ? predict_prostate.layout.header.footer.cljs$core$IFn$_invoke$arity$0() : predict_prostate.layout.header.footer.call(null)))], null)));
})()));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$], null),"model-tests");

//# sourceMappingURL=predict_prostate.pages.model_tests.js.map
