goog.provide('predict_prostate.pages.model_tests');
predict_prostate.pages.model_tests.load_chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((0));
predict_prostate.pages.model_tests.click_handler = (function predict_prostate$pages$model_tests$click_handler(){
predict_prostate.models.tests.get_test_cases("/test-runs.txt",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (p1__50788_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(predict_prostate.pages.model_tests.load_chan,p1__50788_SHARP_);
})], null));

var c__32698__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32699__auto__ = (function (){var switch__32628__auto__ = (function (state_50793){
var state_val_50794 = (state_50793[(1)]);
if((state_val_50794 === (1))){
var inst_50790 = (function (){return (function (p1__50789_SHARP_){
return predict_prostate.models.tests.test_all_cases(cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(p1__50789_SHARP_));
});
})();
var inst_50791 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(predict_prostate.pages.model_tests.load_chan,inst_50790);
var state_50793__$1 = state_50793;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50793__$1,inst_50791);
} else {
return null;
}
});
return (function() {
var predict_prostate$pages$model_tests$click_handler_$_state_machine__32629__auto__ = null;
var predict_prostate$pages$model_tests$click_handler_$_state_machine__32629__auto____0 = (function (){
var statearr_50797 = [null,null,null,null,null,null,null];
(statearr_50797[(0)] = predict_prostate$pages$model_tests$click_handler_$_state_machine__32629__auto__);

(statearr_50797[(1)] = (1));

return statearr_50797;
});
var predict_prostate$pages$model_tests$click_handler_$_state_machine__32629__auto____1 = (function (state_50793){
while(true){
var ret_value__32630__auto__ = (function (){try{while(true){
var result__32631__auto__ = switch__32628__auto__(state_50793);
if(cljs.core.keyword_identical_QMARK_(result__32631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32631__auto__;
}
break;
}
}catch (e50814){var ex__32632__auto__ = e50814;
var statearr_50815_50883 = state_50793;
(statearr_50815_50883[(2)] = ex__32632__auto__);


if(cljs.core.seq((state_50793[(4)]))){
var statearr_50818_50884 = state_50793;
(statearr_50818_50884[(1)] = cljs.core.first((state_50793[(4)])));

} else {
throw ex__32632__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50885 = state_50793;
state_50793 = G__50885;
continue;
} else {
return ret_value__32630__auto__;
}
break;
}
});
predict_prostate$pages$model_tests$click_handler_$_state_machine__32629__auto__ = function(state_50793){
switch(arguments.length){
case 0:
return predict_prostate$pages$model_tests$click_handler_$_state_machine__32629__auto____0.call(this);
case 1:
return predict_prostate$pages$model_tests$click_handler_$_state_machine__32629__auto____1.call(this,state_50793);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
predict_prostate$pages$model_tests$click_handler_$_state_machine__32629__auto__.cljs$core$IFn$_invoke$arity$0 = predict_prostate$pages$model_tests$click_handler_$_state_machine__32629__auto____0;
predict_prostate$pages$model_tests$click_handler_$_state_machine__32629__auto__.cljs$core$IFn$_invoke$arity$1 = predict_prostate$pages$model_tests$click_handler_$_state_machine__32629__auto____1;
return predict_prostate$pages$model_tests$click_handler_$_state_machine__32629__auto__;
})()
})();
var state__32700__auto__ = (function (){var statearr_50820 = f__32699__auto__();
(statearr_50820[(6)] = c__32698__auto__);

return statearr_50820;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32700__auto__);
}));

return c__32698__auto__;
});
predict_prostate.pages.model_tests.test_button = (function predict_prostate$pages$model_tests$test_button(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-primary.btn-lg","button.btn.btn-primary.btn-lg",613853517),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"aria-label","aria-label",455891514),"launch a batch of tests",new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),predict_prostate.pages.model_tests.click_handler], null),(function (){var G__50821 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"family","family",-1313145692),new cljs.core.Keyword(null,"fa","fa",484981183)], null);
var G__50822 = "chevron-right";
return (graphics.simple_icons.icon.cljs$core$IFn$_invoke$arity$2 ? graphics.simple_icons.icon.cljs$core$IFn$_invoke$arity$2(G__50821,G__50822) : graphics.simple_icons.icon.call(null,G__50821,G__50822));
})()," ","Launch model tests"], null);
});
predict_prostate.pages.model_tests.model_tests = rum.core.build_defc((function (ttt){
return React.createElement("div",({"className": "container"}),React.createElement("div",({"className": "row"}),(function (){var attrs50826 = (predict_prostate.layout.header.header.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.layout.header.header.cljs$core$IFn$_invoke$arity$1(ttt) : predict_prostate.layout.header.header.call(null,ttt));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs50826))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["col-sm-12"], null)], null),attrs50826], 0))):({"className": "col-sm-12"})),((cljs.core.map_QMARK_(attrs50826))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.createElement("div",({"className": "row"}),React.createElement("div",({"className": "col-12"}),React.createElement("img",({"src": "/assets/model-tests.png", "style": ({"marginTop": "3ex"}), "alt": "Model tests", "className": "img-responsive"})))),React.createElement("div",({"className": "row"}),React.createElement("div",({"style": ({"display": "flex", "justifyContent": "center"}), "className": "col-12"}),sablono.interpreter.interpret(predict_prostate.pages.model_tests.test_button()))),React.createElement("div",({"className": "row"}),React.createElement("div",({"style": ({"minHeight": "calc(100vh - 200px)", "paddingLeft": "25px", "paddingRight": "25px", "display": "flex", "justifyContent": "center"}), "className": "col-12"}),React.createElement("p",null,React.createElement("i",null,"Open the console to see the results of the tests.")))),sablono.interpreter.interpret((predict_prostate.layout.header.footer.cljs$core$IFn$_invoke$arity$0 ? predict_prostate.layout.header.footer.cljs$core$IFn$_invoke$arity$0() : predict_prostate.layout.header.footer.call(null)))], null):new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs50826),React.createElement("div",({"className": "row"}),React.createElement("div",({"className": "col-12"}),React.createElement("img",({"src": "/assets/model-tests.png", "style": ({"marginTop": "3ex"}), "alt": "Model tests", "className": "img-responsive"})))),React.createElement("div",({"className": "row"}),React.createElement("div",({"style": ({"display": "flex", "justifyContent": "center"}), "className": "col-12"}),sablono.interpreter.interpret(predict_prostate.pages.model_tests.test_button()))),React.createElement("div",({"className": "row"}),React.createElement("div",({"style": ({"minHeight": "calc(100vh - 200px)", "paddingLeft": "25px", "paddingRight": "25px", "display": "flex", "justifyContent": "center"}), "className": "col-12"}),React.createElement("p",null,React.createElement("i",null,"Open the console to see the results of the tests.")))),sablono.interpreter.interpret((predict_prostate.layout.header.footer.cljs$core$IFn$_invoke$arity$0 ? predict_prostate.layout.header.footer.cljs$core$IFn$_invoke$arity$0() : predict_prostate.layout.header.footer.call(null)))], null)));
})()));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$], null),"model-tests");

//# sourceMappingURL=predict_prostate.pages.model_tests.js.map
