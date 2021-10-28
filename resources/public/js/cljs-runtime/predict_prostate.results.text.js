goog.provide('predict_prostate.results.text');
predict_prostate.results.text.round = Math.round;
predict_prostate.results.text.set_default = (function predict_prostate$results$text$set_default(key){

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (state){
var default_34042 = predict_prostate.state.config.get_input_default(predict_prostate.state.config.input_groups,key);
pubsub.feeds.publish(predict_prostate.state.run_time.input_change(key),default_34042);

return state;
})], null);
});
predict_prostate.results.text.emph = (function predict_prostate$results$text$emph(n){
return n;

});
predict_prostate.results.text.texts = rum.core.build_defc((function (years,data,radical_QMARK_,printable){
var cs = (function (){var G__33958 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"conservative-survival","conservative-survival",-852356338).cljs$core$IFn$_invoke$arity$1(data),years);
return (predict_prostate.results.text.round.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.text.round.cljs$core$IFn$_invoke$arity$1(G__33958) : predict_prostate.results.text.round.call(null,G__33958));
})();
var rs = (function (){var G__33959 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"radical-survival","radical-survival",-74207469).cljs$core$IFn$_invoke$arity$1(data),years);
return (predict_prostate.results.text.round.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.text.round.cljs$core$IFn$_invoke$arity$1(G__33959) : predict_prostate.results.text.round.call(null,G__33959));
})();
var benefit = (rs - cs);
return React.createElement("div",({"className": "row"}),React.createElement("div",({"className": "print-only"}),React.createElement("div",({"style": ({"marginTop": (0), "marginBottom": "0px", "display": "inline-block", "fontSize": (12)}), "className": "col-sm-12 print-only"}),"Based on the information you have entered, ",(function (){var attrs33961 = predict_prostate.results.text.emph(cs);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"p",((cljs.core.map_QMARK_(attrs33961))?sablono.interpreter.attributes(attrs33961):null),((cljs.core.map_QMARK_(attrs33961))?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [" out of ",sablono.interpreter.interpret(predict_prostate.results.text.emph((100)))," men are alive at years with ",sablono.interpreter.interpret(predict_prostate.results.text.emph("initial conservative manage,ent")),"."], null):new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs33961)," out of ",sablono.interpreter.interpret(predict_prostate.results.text.emph((100)))," men are alive at years with ",sablono.interpreter.interpret(predict_prostate.results.text.emph("initial conservative manage,ent")),"."], null)));
})(),sablono.interpreter.interpret((cljs.core.truth_(radical_QMARK_)?new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),predict_prostate.results.text.emph(rs)," out of ",predict_prostate.results.text.emph((100))," men treated (an extra ",predict_prostate.results.text.emph(benefit),") are alive because of ",predict_prostate.results.text.emph("radical treatment"),"."], null):null)))),React.createElement("div",({"className": "screen-only"}),React.createElement("div",({"style": ({"marginTop": (15), "marginBottom": "0px", "display": "inline-block", "fontSize": (16)}), "className": "col-sm-12"}),React.createElement("span",null,"Based on the information you have entered, ",sablono.interpreter.interpret((predict_prostate.components.button.year_picker.cljs$core$IFn$_invoke$arity$0 ? predict_prostate.components.button.year_picker.cljs$core$IFn$_invoke$arity$0() : predict_prostate.components.button.year_picker.call(null)))," years after diagnosis:"),(function (){var attrs33963 = predict_prostate.results.text.emph(cs);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"p",((cljs.core.map_QMARK_(attrs33963))?sablono.interpreter.attributes(attrs33963):null),((cljs.core.map_QMARK_(attrs33963))?new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [" out of ",sablono.interpreter.interpret(predict_prostate.results.text.emph((100)))," men are alive at ",sablono.interpreter.interpret(years)," years with ",sablono.interpreter.interpret(predict_prostate.results.text.emph("initial conservative treatment")),"."], null):new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs33963)," out of ",sablono.interpreter.interpret(predict_prostate.results.text.emph((100)))," men are alive at ",sablono.interpreter.interpret(years)," years with ",sablono.interpreter.interpret(predict_prostate.results.text.emph("initial conservative treatment")),"."], null)));
})(),sablono.interpreter.interpret((cljs.core.truth_(radical_QMARK_)?new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),predict_prostate.results.text.emph(rs)," out of ",predict_prostate.results.text.emph((100))," men treated (an extra ",predict_prostate.results.text.emph(benefit),") are alive because of ",predict_prostate.results.text.emph("radical treatment"),"."], null):null)))));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$], null),"texts");
/**
 * Different models use different treatment widgets, so we need to use these to react to the correct
 *   treatments and lookup the appropriate result-data.
 */
predict_prostate.results.text.extract_data = (function predict_prostate$results$text$extract_data(results,radical_QMARK_){
var one_sum = (function (p1__33972_SHARP_,p2__33973_SHARP_){
return ((100) * ((1) - (p1__33972_SHARP_ + p2__33973_SHARP_)));
});
var radical_survival = cljs.core.map.cljs$core$IFn$_invoke$arity$3(one_sum,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(results,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"radical","radical",1159030213),new cljs.core.Keyword(null,"pred-PC-cum","pred-PC-cum",1965177836)], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(results,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"radical","radical",1159030213),new cljs.core.Keyword(null,"pred-NPC-cum","pred-NPC-cum",-1636287417)], null)));
var conservative_survival = cljs.core.map.cljs$core$IFn$_invoke$arity$3(one_sum,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(results,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"conservative","conservative",-1075714010),new cljs.core.Keyword(null,"pred-PC-cum","pred-PC-cum",1965177836)], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(results,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"conservative","conservative",-1075714010),new cljs.core.Keyword(null,"pred-NPC-cum","pred-NPC-cum",-1636287417)], null)));
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"title","title",636505583),"Overall Survival",new cljs.core.Keyword(null,"subtitle-over","subtitle-over",1867978156),"for men with prostate cancer, 5 and 10 years after diagnosis",new cljs.core.Keyword(null,"subtitle-under","subtitle-under",-1133908191),"years after diagnosis",new cljs.core.Keyword(null,"conservative-survival","conservative-survival",-852356338),conservative_survival,new cljs.core.Keyword(null,"radical-survival","radical-survival",-74207469),radical_survival,new cljs.core.Keyword(null,"radical-benefit","radical-benefit",1730049395),cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__33976_SHARP_,p2__33977_SHARP_){
return (p1__33976_SHARP_ - p2__33977_SHARP_);
}),radical_survival,conservative_survival),new cljs.core.Keyword(null,"dotted-orange","dotted-orange",-573056274),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__33978_SHARP_){
return ((100) * ((1) - p1__33978_SHARP_));
}),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(results,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(radical_QMARK_)?new cljs.core.Keyword(null,"radical","radical",1159030213):new cljs.core.Keyword(null,"conservative","conservative",-1075714010)),new cljs.core.Keyword(null,"NPC-survival","NPC-survival",-1399930619)], null)))], null);
});
predict_prostate.results.text.results_in_text = rum.core.build_defc((function (p__33990){
var map__33991 = p__33990;
var map__33991__$1 = (((((!((map__33991 == null))))?(((((map__33991.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33991.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33991):map__33991);
var printable = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33991__$1,new cljs.core.Keyword(null,"printable","printable",-928999004));
var year = rum.core.react(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"result-year","result-year",1413238532)));
var radical_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),rum.core.react(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"primary-rx","primary-rx",-1656848904))));
var data = predict_prostate.results.text.extract_data(rum.core.react(predict_prostate.state.run_time.results_cursor),radical_QMARK_);
var text1 = "Of the men who would not survive, ";
var text2 = " would die due to causes not related to prostate cancer.";
var attrs33985 = (predict_prostate.results.text.texts.cljs$core$IFn$_invoke$arity$4 ? predict_prostate.results.text.texts.cljs$core$IFn$_invoke$arity$4(year,data,radical_QMARK_,printable) : predict_prostate.results.text.texts.call(null,year,data,radical_QMARK_,printable));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs33985))?sablono.interpreter.attributes(attrs33985):null),((cljs.core.map_QMARK_(attrs33985))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.createElement("p",({"style": ({"fontSize": (12)}), "className": "print-only"}),sablono.interpreter.interpret(text1),sablono.interpreter.interpret(predict_prostate.results.text.emph((function (){var G__34009 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"dotted-orange","dotted-orange",-573056274).cljs$core$IFn$_invoke$arity$1(data),year);
return (predict_prostate.results.text.round.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.text.round.cljs$core$IFn$_invoke$arity$1(G__34009) : predict_prostate.results.text.round.call(null,G__34009));
})())),sablono.interpreter.interpret(text2)),React.createElement("p",({"style": ({"fontSize": (16)}), "className": "screen-only"}),sablono.interpreter.interpret(text1),sablono.interpreter.interpret(predict_prostate.results.text.emph((function (){var G__34011 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"dotted-orange","dotted-orange",-573056274).cljs$core$IFn$_invoke$arity$1(data),year);
return (predict_prostate.results.text.round.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.text.round.cljs$core$IFn$_invoke$arity$1(G__34011) : predict_prostate.results.text.round.call(null,G__34011));
})())),sablono.interpreter.interpret(text2))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs33985),React.createElement("p",({"style": ({"fontSize": (12)}), "className": "print-only"}),sablono.interpreter.interpret(text1),sablono.interpreter.interpret(predict_prostate.results.text.emph((function (){var G__34019 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"dotted-orange","dotted-orange",-573056274).cljs$core$IFn$_invoke$arity$1(data),year);
return (predict_prostate.results.text.round.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.text.round.cljs$core$IFn$_invoke$arity$1(G__34019) : predict_prostate.results.text.round.call(null,G__34019));
})())),sablono.interpreter.interpret(text2)),React.createElement("p",({"style": ({"fontSize": (16)}), "className": "screen-only"}),sablono.interpreter.interpret(text1),sablono.interpreter.interpret(predict_prostate.results.text.emph((function (){var G__34022 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"dotted-orange","dotted-orange",-573056274).cljs$core$IFn$_invoke$arity$1(data),year);
return (predict_prostate.results.text.round.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.text.round.cljs$core$IFn$_invoke$arity$1(G__34022) : predict_prostate.results.text.round.call(null,G__34022));
})())),sablono.interpreter.interpret(text2))], null)));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"results-in-text");

//# sourceMappingURL=predict_prostate.results.text.js.map
