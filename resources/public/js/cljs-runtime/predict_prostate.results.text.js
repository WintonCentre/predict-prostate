goog.provide('predict_prostate.results.text');
predict_prostate.results.text.round = Math.round;
predict_prostate.results.text.set_default = (function predict_prostate$results$text$set_default(key){

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (state){
var default_94061 = predict_prostate.state.config.get_input_default(predict_prostate.state.config.input_groups,key);
pubsub.feeds.publish(predict_prostate.state.run_time.input_change(key),default_94061);

return state;
})], null);
});
predict_prostate.results.text.emph = (function predict_prostate$results$text$emph(n){
return n;

});
predict_prostate.results.text.texts = rum.core.build_defc((function (years,data,radical_QMARK_,printable,ttt){
var cs = (function (){var G__94029 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"conservative-survival","conservative-survival",-852356338).cljs$core$IFn$_invoke$arity$1(data),years);
return (predict_prostate.results.text.round.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.text.round.cljs$core$IFn$_invoke$arity$1(G__94029) : predict_prostate.results.text.round.call(null,G__94029));
})();
var rs = (function (){var G__94036 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"radical-survival","radical-survival",-74207469).cljs$core$IFn$_invoke$arity$1(data),years);
return (predict_prostate.results.text.round.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.text.round.cljs$core$IFn$_invoke$arity$1(G__94036) : predict_prostate.results.text.round.call(null,G__94036));
})();
var benefit = (rs - cs);
return React.createElement("div",({"className": "row"}),React.createElement("div",({"className": "print-only"}),React.createElement("div",({"style": ({"marginTop": (0), "marginBottom": "0px", "display": "inline-block", "fontSize": (12)}), "className": "col-sm-12 print-only"}),"Based on the information you have entered, ",(function (){var attrs94037 = predict_prostate.results.text.emph(cs);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"p",((cljs.core.map_QMARK_(attrs94037))?sablono.interpreter.attributes(attrs94037):null),((cljs.core.map_QMARK_(attrs94037))?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [" out of ",sablono.interpreter.interpret(predict_prostate.results.text.emph((100)))," men are alive at years with ",sablono.interpreter.interpret(predict_prostate.results.text.emph("initial conservative manage,ent")),"."], null):new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs94037)," out of ",sablono.interpreter.interpret(predict_prostate.results.text.emph((100)))," men are alive at years with ",sablono.interpreter.interpret(predict_prostate.results.text.emph("initial conservative manage,ent")),"."], null)));
})(),sablono.interpreter.interpret((cljs.core.truth_(radical_QMARK_)?new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),predict_prostate.results.text.emph(rs)," out of ",predict_prostate.results.text.emph((100))," men treated (an extra ",predict_prostate.results.text.emph(benefit),") are alive because of ",predict_prostate.results.text.emph("radical treatment"),"."], null):null)))),React.createElement("div",({"className": "screen-only"}),React.createElement("div",({"style": ({"marginTop": (15), "marginBottom": "0px", "display": "inline-block", "fontSize": (16)}), "className": "col-sm-12"}),React.createElement("span",null,"Based on the information you have entered, ",sablono.interpreter.interpret((predict_prostate.components.button.year_picker.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.components.button.year_picker.cljs$core$IFn$_invoke$arity$1(ttt) : predict_prostate.components.button.year_picker.call(null,ttt)))," years after diagnosis:"),(function (){var attrs94040 = predict_prostate.results.text.emph(cs);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"p",((cljs.core.map_QMARK_(attrs94040))?sablono.interpreter.attributes(attrs94040):null),((cljs.core.map_QMARK_(attrs94040))?new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [" out of ",sablono.interpreter.interpret(predict_prostate.results.text.emph((100)))," men are alive at ",sablono.interpreter.interpret(years)," years with ",sablono.interpreter.interpret(predict_prostate.results.text.emph("initial conservative treatment")),"."], null):new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs94040)," out of ",sablono.interpreter.interpret(predict_prostate.results.text.emph((100)))," men are alive at ",sablono.interpreter.interpret(years)," years with ",sablono.interpreter.interpret(predict_prostate.results.text.emph("initial conservative treatment")),"."], null)));
})(),sablono.interpreter.interpret((cljs.core.truth_(radical_QMARK_)?new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),predict_prostate.results.text.emph(rs)," out of ",predict_prostate.results.text.emph((100))," men treated (an extra ",predict_prostate.results.text.emph(benefit),") are alive because of ",predict_prostate.results.text.emph("radical treatment"),"."], null):null)))));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$], null),"texts");
/**
 * Different models use different treatment widgets, so we need to use these to react to the correct
 *   treatments and lookup the appropriate result-data.
 */
predict_prostate.results.text.extract_data = (function predict_prostate$results$text$extract_data(results,radical_QMARK_){
var one_sum = (function (p1__94043_SHARP_,p2__94044_SHARP_){
return ((100) * ((1) - (p1__94043_SHARP_ + p2__94044_SHARP_)));
});
var radical_survival = cljs.core.map.cljs$core$IFn$_invoke$arity$3(one_sum,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(results,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"radical","radical",1159030213),new cljs.core.Keyword(null,"pred-PC-cum","pred-PC-cum",1965177836)], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(results,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"radical","radical",1159030213),new cljs.core.Keyword(null,"pred-NPC-cum","pred-NPC-cum",-1636287417)], null)));
var conservative_survival = cljs.core.map.cljs$core$IFn$_invoke$arity$3(one_sum,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(results,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"conservative","conservative",-1075714010),new cljs.core.Keyword(null,"pred-PC-cum","pred-PC-cum",1965177836)], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(results,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"conservative","conservative",-1075714010),new cljs.core.Keyword(null,"pred-NPC-cum","pred-NPC-cum",-1636287417)], null)));
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"title","title",636505583),"Overall Survival",new cljs.core.Keyword(null,"subtitle-over","subtitle-over",1867978156),"for men with prostate cancer, 5 and 10 years after diagnosis",new cljs.core.Keyword(null,"subtitle-under","subtitle-under",-1133908191),"years after diagnosis",new cljs.core.Keyword(null,"conservative-survival","conservative-survival",-852356338),conservative_survival,new cljs.core.Keyword(null,"radical-survival","radical-survival",-74207469),radical_survival,new cljs.core.Keyword(null,"radical-benefit","radical-benefit",1730049395),cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__94047_SHARP_,p2__94048_SHARP_){
return (p1__94047_SHARP_ - p2__94048_SHARP_);
}),radical_survival,conservative_survival),new cljs.core.Keyword(null,"dotted-orange","dotted-orange",-573056274),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__94049_SHARP_){
return ((100) * ((1) - p1__94049_SHARP_));
}),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(results,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(radical_QMARK_)?new cljs.core.Keyword(null,"radical","radical",1159030213):new cljs.core.Keyword(null,"conservative","conservative",-1075714010)),new cljs.core.Keyword(null,"NPC-survival","NPC-survival",-1399930619)], null)))], null);
});
predict_prostate.results.text.results_in_text = rum.core.build_defc((function (p__94053){
var map__94054 = p__94053;
var map__94054__$1 = (((((!((map__94054 == null))))?(((((map__94054.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__94054.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__94054):map__94054);
var printable = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__94054__$1,new cljs.core.Keyword(null,"printable","printable",-928999004));
var ttt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__94054__$1,new cljs.core.Keyword(null,"ttt","ttt",1858561240));
var year = rum.core.react(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"result-year","result-year",1413238532)));
var radical_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),rum.core.react(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"primary-rx","primary-rx",-1656848904))));
var data = predict_prostate.results.text.extract_data(rum.core.react(predict_prostate.state.run_time.results_cursor),radical_QMARK_);
var text1 = "Of the men who would not survive, ";
var text2 = " would die due to causes not related to prostate cancer.";
var attrs94050 = (predict_prostate.results.text.texts.cljs$core$IFn$_invoke$arity$5 ? predict_prostate.results.text.texts.cljs$core$IFn$_invoke$arity$5(year,data,radical_QMARK_,printable,ttt) : predict_prostate.results.text.texts.call(null,year,data,radical_QMARK_,printable,ttt));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs94050))?sablono.interpreter.attributes(attrs94050):null),((cljs.core.map_QMARK_(attrs94050))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.createElement("p",({"style": ({"fontSize": (12)}), "className": "print-only"}),sablono.interpreter.interpret(text1),sablono.interpreter.interpret(predict_prostate.results.text.emph((function (){var G__94057 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"dotted-orange","dotted-orange",-573056274).cljs$core$IFn$_invoke$arity$1(data),year);
return (predict_prostate.results.text.round.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.text.round.cljs$core$IFn$_invoke$arity$1(G__94057) : predict_prostate.results.text.round.call(null,G__94057));
})())),sablono.interpreter.interpret(text2)),React.createElement("p",({"style": ({"fontSize": (16)}), "className": "screen-only"}),sablono.interpreter.interpret(text1),sablono.interpreter.interpret(predict_prostate.results.text.emph((function (){var G__94058 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"dotted-orange","dotted-orange",-573056274).cljs$core$IFn$_invoke$arity$1(data),year);
return (predict_prostate.results.text.round.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.text.round.cljs$core$IFn$_invoke$arity$1(G__94058) : predict_prostate.results.text.round.call(null,G__94058));
})())),sablono.interpreter.interpret(text2))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs94050),React.createElement("p",({"style": ({"fontSize": (12)}), "className": "print-only"}),sablono.interpreter.interpret(text1),sablono.interpreter.interpret(predict_prostate.results.text.emph((function (){var G__94059 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"dotted-orange","dotted-orange",-573056274).cljs$core$IFn$_invoke$arity$1(data),year);
return (predict_prostate.results.text.round.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.text.round.cljs$core$IFn$_invoke$arity$1(G__94059) : predict_prostate.results.text.round.call(null,G__94059));
})())),sablono.interpreter.interpret(text2)),React.createElement("p",({"style": ({"fontSize": (16)}), "className": "screen-only"}),sablono.interpreter.interpret(text1),sablono.interpreter.interpret(predict_prostate.results.text.emph((function (){var G__94060 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"dotted-orange","dotted-orange",-573056274).cljs$core$IFn$_invoke$arity$1(data),year);
return (predict_prostate.results.text.round.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.text.round.cljs$core$IFn$_invoke$arity$1(G__94060) : predict_prostate.results.text.round.call(null,G__94060));
})())),sablono.interpreter.interpret(text2))], null)));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"results-in-text");

//# sourceMappingURL=predict_prostate.results.text.js.map
