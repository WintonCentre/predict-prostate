goog.provide('predict_prostate.pages.model_tests');
predict_prostate.pages.model_tests.load_chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((0));
predict_prostate.pages.model_tests.click_handler = (function predict_prostate$pages$model_tests$click_handler(){
predict_prostate.models.tests.get_test_cases("/test-runs.txt",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (p1__59257_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(predict_prostate.pages.model_tests.load_chan,p1__59257_SHARP_);
})], null));

var c__30019__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30020__auto__ = (function (){var switch__29949__auto__ = (function (state_59262){
var state_val_59263 = (state_59262[(1)]);
if((state_val_59263 === (1))){
var inst_59259 = (function (){return (function (p1__59258_SHARP_){
return predict_prostate.models.tests.test_all_cases(cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(p1__59258_SHARP_));
});
})();
var inst_59260 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(predict_prostate.pages.model_tests.load_chan,inst_59259);
var state_59262__$1 = state_59262;
return cljs.core.async.impl.ioc_helpers.return_chan(state_59262__$1,inst_59260);
} else {
return null;
}
});
return (function() {
var predict_prostate$pages$model_tests$click_handler_$_state_machine__29950__auto__ = null;
var predict_prostate$pages$model_tests$click_handler_$_state_machine__29950__auto____0 = (function (){
var statearr_59264 = [null,null,null,null,null,null,null];
(statearr_59264[(0)] = predict_prostate$pages$model_tests$click_handler_$_state_machine__29950__auto__);

(statearr_59264[(1)] = (1));

return statearr_59264;
});
var predict_prostate$pages$model_tests$click_handler_$_state_machine__29950__auto____1 = (function (state_59262){
while(true){
var ret_value__29951__auto__ = (function (){try{while(true){
var result__29952__auto__ = switch__29949__auto__(state_59262);
if(cljs.core.keyword_identical_QMARK_(result__29952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29952__auto__;
}
break;
}
}catch (e59265){var ex__29953__auto__ = e59265;
var statearr_59266_59273 = state_59262;
(statearr_59266_59273[(2)] = ex__29953__auto__);


if(cljs.core.seq((state_59262[(4)]))){
var statearr_59267_59274 = state_59262;
(statearr_59267_59274[(1)] = cljs.core.first((state_59262[(4)])));

} else {
throw ex__29953__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59275 = state_59262;
state_59262 = G__59275;
continue;
} else {
return ret_value__29951__auto__;
}
break;
}
});
predict_prostate$pages$model_tests$click_handler_$_state_machine__29950__auto__ = function(state_59262){
switch(arguments.length){
case 0:
return predict_prostate$pages$model_tests$click_handler_$_state_machine__29950__auto____0.call(this);
case 1:
return predict_prostate$pages$model_tests$click_handler_$_state_machine__29950__auto____1.call(this,state_59262);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
predict_prostate$pages$model_tests$click_handler_$_state_machine__29950__auto__.cljs$core$IFn$_invoke$arity$0 = predict_prostate$pages$model_tests$click_handler_$_state_machine__29950__auto____0;
predict_prostate$pages$model_tests$click_handler_$_state_machine__29950__auto__.cljs$core$IFn$_invoke$arity$1 = predict_prostate$pages$model_tests$click_handler_$_state_machine__29950__auto____1;
return predict_prostate$pages$model_tests$click_handler_$_state_machine__29950__auto__;
})()
})();
var state__30021__auto__ = (function (){var statearr_59268 = f__30020__auto__();
(statearr_59268[(6)] = c__30019__auto__);

return statearr_59268;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30021__auto__);
}));

return c__30019__auto__;
});
predict_prostate.pages.model_tests.test_button = (function predict_prostate$pages$model_tests$test_button(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-primary.btn-lg","button.btn.btn-primary.btn-lg",613853517),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"aria-label","aria-label",455891514),"launch a batch of tests",new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),predict_prostate.pages.model_tests.click_handler], null),graphics.simple_icons.icon(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"family","family",-1313145692),new cljs.core.Keyword(null,"fa","fa",484981183)], null),"chevron-right")," ","Launch model tests"], null);
});
predict_prostate.pages.model_tests.model_tests = rum.core.lazy_build(rum.core.build_defc,(function (ttt){
return daiquiri.core.create_element("div",{'className':"container"},[daiquiri.core.create_element("div",{'className':"row"},[daiquiri.core.create_element("div",{'className':"col-sm-12"},[predict_prostate.layout.header.header(ttt),daiquiri.core.create_element("div",{'className':"row"},[daiquiri.core.create_element("div",{'className':"col-12"},[daiquiri.core.create_element("img",{'src':"assets/model-tests.png",'style':{'marginTop':"3ex"},'alt':"Model tests",'className':"img-responsive"},null)])]),daiquiri.core.create_element("div",{'className':"row"},[daiquiri.core.create_element("div",{'style':{'display':"flex",'justifyContent':"center"},'className':"col-12"},[daiquiri.interpreter.interpret(predict_prostate.pages.model_tests.test_button())])]),daiquiri.core.create_element("div",{'className':"row"},[daiquiri.core.create_element("div",{'style':{'minHeight':"calc(100vh - 200px)",'paddingLeft':"25px",'paddingRight':"25px",'display':"flex",'justifyContent':"center"},'className':"col-12"},[daiquiri.core.create_element("p",null,[daiquiri.core.create_element("i",null,["Open the console to see the results of the tests."])])])]),predict_prostate.layout.header.footer()])])]);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$], null),"predict-prostate.pages.model-tests/model-tests");

//# sourceMappingURL=predict_prostate.pages.model_tests.js.map
