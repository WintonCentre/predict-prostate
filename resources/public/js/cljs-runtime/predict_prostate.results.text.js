goog.provide('predict_prostate.results.text');
predict_prostate.results.text.round = Math.round;
predict_prostate.results.text.set_default = (function predict_prostate$results$text$set_default(key){

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (state){
var default_88562 = predict_prostate.state.config.get_input_default(predict_prostate.state.config.input_groups,key);
pubsub.feeds.publish(predict_prostate.state.run_time.input_change(key),default_88562);

return state;
})], null);
});
predict_prostate.results.text.emph = (function predict_prostate$results$text$emph(n){
return n;

});
predict_prostate.results.text.texts = rum.core.build_defc((function (years,data,radical_QMARK_,printable,ttt){
var cs = (function (){var G__88330 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"conservative-survival","conservative-survival",-852356338).cljs$core$IFn$_invoke$arity$1(data),years);
return (predict_prostate.results.text.round.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.text.round.cljs$core$IFn$_invoke$arity$1(G__88330) : predict_prostate.results.text.round.call(null,G__88330));
})();
var rs = (function (){var G__88331 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"radical-survival","radical-survival",-74207469).cljs$core$IFn$_invoke$arity$1(data),years);
return (predict_prostate.results.text.round.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.text.round.cljs$core$IFn$_invoke$arity$1(G__88331) : predict_prostate.results.text.round.call(null,G__88331));
})();
var benefit = (rs - cs);
return React.createElement("div",({"className": "row"}),React.createElement("div",({"className": "print-only"}),React.createElement("div",({"style": ({"marginTop": (0), "marginBottom": "0px", "display": "inline-block", "fontSize": (12)}), "className": "col-sm-12 print-only"}),sablono.interpreter.interpret((function (){var G__88336 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text1","text/text1",-653651391),"Based on the information you have entered,"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__88336) : ttt.call(null,G__88336));
})())," ",(function (){var attrs88333 = predict_prostate.results.text.emph(cs);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"p",((cljs.core.map_QMARK_(attrs88333))?sablono.interpreter.attributes(attrs88333):null),((cljs.core.map_QMARK_(attrs88333))?new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",sablono.interpreter.interpret((function (){var G__88343 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text2","text/text2",-2036319681),"out of"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__88343) : ttt.call(null,G__88343));
})())," ",sablono.interpreter.interpret(predict_prostate.results.text.emph((100)))," ",sablono.interpreter.interpret((function (){var G__88347 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text3","text/text3",614591440),"men are alive at years with"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__88347) : ttt.call(null,G__88347));
})())," ",sablono.interpreter.interpret((function (){var G__88350 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text4","text/text4",306591495),predict_prostate.results.text.emph("initial conservative manage,ent")], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__88350) : ttt.call(null,G__88350));
})()),"."], null):new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs88333)," ",sablono.interpreter.interpret((function (){var G__88351 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text2","text/text2",-2036319681),"out of"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__88351) : ttt.call(null,G__88351));
})())," ",sablono.interpreter.interpret(predict_prostate.results.text.emph((100)))," ",sablono.interpreter.interpret((function (){var G__88355 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text3","text/text3",614591440),"men are alive at years with"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__88355) : ttt.call(null,G__88355));
})())," ",sablono.interpreter.interpret((function (){var G__88356 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text4","text/text4",306591495),predict_prostate.results.text.emph("initial conservative manage,ent")], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__88356) : ttt.call(null,G__88356));
})()),"."], null)));
})(),sablono.interpreter.interpret((cljs.core.truth_(radical_QMARK_)?new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),predict_prostate.results.text.emph(rs)," ",(function (){var G__88359 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text5","text/text5",-369961466),"out of"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__88359) : ttt.call(null,G__88359));
})()," ",predict_prostate.results.text.emph((100))," ",(function (){var G__88360 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text6","text/text6",1344477451),"men treated (an extra"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__88360) : ttt.call(null,G__88360));
})()," ",predict_prostate.results.text.emph(benefit),") ",(function (){var G__88361 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text7","text/text7",1774786329),"are alive because of"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__88361) : ttt.call(null,G__88361));
})()," ",(function (){var G__88363 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text8","text/text8",495329353),predict_prostate.results.text.emph("radical treatment")], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__88363) : ttt.call(null,G__88363));
})(),"."], null):null)))),React.createElement("div",({"className": "screen-only"}),React.createElement("div",({"style": ({"marginTop": (15), "marginBottom": "0px", "display": "inline-block", "fontSize": (16)}), "className": "col-sm-12"}),(function (){var attrs88373 = (function (){var G__88376 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text1","text/text1",-653651391),"Based on the information you have entered,"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__88376) : ttt.call(null,G__88376));
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs88373))?sablono.interpreter.attributes(attrs88373):null),((cljs.core.map_QMARK_(attrs88373))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",sablono.interpreter.interpret((predict_prostate.components.button.year_picker.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.components.button.year_picker.cljs$core$IFn$_invoke$arity$1(ttt) : predict_prostate.components.button.year_picker.call(null,ttt)))," ",sablono.interpreter.interpret((function (){var G__88378 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text9","text/text9",808987274),"years after diagnosis:"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__88378) : ttt.call(null,G__88378));
})())], null):new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs88373)," ",sablono.interpreter.interpret((predict_prostate.components.button.year_picker.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.components.button.year_picker.cljs$core$IFn$_invoke$arity$1(ttt) : predict_prostate.components.button.year_picker.call(null,ttt)))," ",sablono.interpreter.interpret((function (){var G__88385 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text9","text/text9",808987274),"years after diagnosis:"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__88385) : ttt.call(null,G__88385));
})())], null)));
})(),(function (){var attrs88375 = predict_prostate.results.text.emph(cs);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"p",((cljs.core.map_QMARK_(attrs88375))?sablono.interpreter.attributes(attrs88375):null),((cljs.core.map_QMARK_(attrs88375))?new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",sablono.interpreter.interpret((function (){var G__88387 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text10","text/text10",-1477220547),"out of"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__88387) : ttt.call(null,G__88387));
})())," ",sablono.interpreter.interpret(predict_prostate.results.text.emph((100)))," ",sablono.interpreter.interpret((function (){var G__88392 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text11","text/text11",-1985706273),"men are alive at"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__88392) : ttt.call(null,G__88392));
})())," ",sablono.interpreter.interpret(years)," ",sablono.interpreter.interpret((function (){var G__88400 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text12","text/text12",1578344657),"years with"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__88400) : ttt.call(null,G__88400));
})())," ",sablono.interpreter.interpret((function (){var G__88407 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text13","text/text13",201858299),predict_prostate.results.text.emph("initial conservative treatment")], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__88407) : ttt.call(null,G__88407));
})()),"."], null):new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs88375)," ",sablono.interpreter.interpret((function (){var G__88408 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text10","text/text10",-1477220547),"out of"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__88408) : ttt.call(null,G__88408));
})())," ",sablono.interpreter.interpret(predict_prostate.results.text.emph((100)))," ",sablono.interpreter.interpret((function (){var G__88414 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text11","text/text11",-1985706273),"men are alive at"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__88414) : ttt.call(null,G__88414));
})())," ",sablono.interpreter.interpret(years)," ",sablono.interpreter.interpret((function (){var G__88418 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text12","text/text12",1578344657),"years with"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__88418) : ttt.call(null,G__88418));
})())," ",sablono.interpreter.interpret((function (){var G__88428 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text13","text/text13",201858299),predict_prostate.results.text.emph("initial conservative treatment")], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__88428) : ttt.call(null,G__88428));
})()),"."], null)));
})(),sablono.interpreter.interpret((cljs.core.truth_(radical_QMARK_)?new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),predict_prostate.results.text.emph(rs)," ",(function (){var G__88429 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text14","text/text14",881888124),"out of"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__88429) : ttt.call(null,G__88429));
})()," ",predict_prostate.results.text.emph((100))," ",(function (){var G__88434 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text15","text/text15",1059028049),"men treated (an extra"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__88434) : ttt.call(null,G__88434));
})()," ",predict_prostate.results.text.emph(benefit),") ",(function (){var G__88436 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text16","text/text16",-203890799),"are alive because of"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__88436) : ttt.call(null,G__88436));
})()," ",(function (){var G__88437 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text17","text/text17",-1309195728),predict_prostate.results.text.emph("radical treatment")], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__88437) : ttt.call(null,G__88437));
})(),"."], null):null)))));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$], null),"texts");
/**
 * Different models use different treatment widgets, so we need to use these to react to the correct
 *   treatments and lookup the appropriate result-data.
 */
predict_prostate.results.text.extract_data = (function predict_prostate$results$text$extract_data(results,radical_QMARK_){
var one_sum = (function (p1__88446_SHARP_,p2__88447_SHARP_){
return ((100) * ((1) - (p1__88446_SHARP_ + p2__88447_SHARP_)));
});
var radical_survival = cljs.core.map.cljs$core$IFn$_invoke$arity$3(one_sum,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(results,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"radical","radical",1159030213),new cljs.core.Keyword(null,"pred-PC-cum","pred-PC-cum",1965177836)], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(results,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"radical","radical",1159030213),new cljs.core.Keyword(null,"pred-NPC-cum","pred-NPC-cum",-1636287417)], null)));
var conservative_survival = cljs.core.map.cljs$core$IFn$_invoke$arity$3(one_sum,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(results,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"conservative","conservative",-1075714010),new cljs.core.Keyword(null,"pred-PC-cum","pred-PC-cum",1965177836)], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(results,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"conservative","conservative",-1075714010),new cljs.core.Keyword(null,"pred-NPC-cum","pred-NPC-cum",-1636287417)], null)));
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"title","title",636505583),"Overall Survival",new cljs.core.Keyword(null,"subtitle-over","subtitle-over",1867978156),"for men with prostate cancer, 5 and 10 years after diagnosis",new cljs.core.Keyword(null,"subtitle-under","subtitle-under",-1133908191),"years after diagnosis",new cljs.core.Keyword(null,"conservative-survival","conservative-survival",-852356338),conservative_survival,new cljs.core.Keyword(null,"radical-survival","radical-survival",-74207469),radical_survival,new cljs.core.Keyword(null,"radical-benefit","radical-benefit",1730049395),cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__88453_SHARP_,p2__88454_SHARP_){
return (p1__88453_SHARP_ - p2__88454_SHARP_);
}),radical_survival,conservative_survival),new cljs.core.Keyword(null,"dotted-orange","dotted-orange",-573056274),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__88456_SHARP_){
return ((100) * ((1) - p1__88456_SHARP_));
}),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(results,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(radical_QMARK_)?new cljs.core.Keyword(null,"radical","radical",1159030213):new cljs.core.Keyword(null,"conservative","conservative",-1075714010)),new cljs.core.Keyword(null,"NPC-survival","NPC-survival",-1399930619)], null)))], null);
});
predict_prostate.results.text.results_in_text = rum.core.build_defc((function (p__88477){
var map__88479 = p__88477;
var map__88479__$1 = (((((!((map__88479 == null))))?(((((map__88479.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__88479.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__88479):map__88479);
var printable = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88479__$1,new cljs.core.Keyword(null,"printable","printable",-928999004));
var ttt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88479__$1,new cljs.core.Keyword(null,"ttt","ttt",1858561240));
var year = rum.core.react(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"result-year","result-year",1413238532)));
var radical_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),rum.core.react(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"primary-rx","primary-rx",-1656848904))));
var data = predict_prostate.results.text.extract_data(rum.core.react(predict_prostate.state.run_time.results_cursor),radical_QMARK_);
var text1 = (function (){var G__88491 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text18","text/text18",342067524),"Of the men who would not survive,"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__88491) : ttt.call(null,G__88491));
})();
var text2 = (function (){var G__88492 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text19","text/text19",-1551481809),"would die due to causes not related to prostate cancer"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__88492) : ttt.call(null,G__88492));
})();
var attrs88473 = (predict_prostate.results.text.texts.cljs$core$IFn$_invoke$arity$5 ? predict_prostate.results.text.texts.cljs$core$IFn$_invoke$arity$5(year,data,radical_QMARK_,printable,ttt) : predict_prostate.results.text.texts.call(null,year,data,radical_QMARK_,printable,ttt));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs88473))?sablono.interpreter.attributes(attrs88473):null),((cljs.core.map_QMARK_(attrs88473))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.createElement("p",({"style": ({"fontSize": (12)}), "className": "print-only"}),sablono.interpreter.interpret(text1)," ",sablono.interpreter.interpret(predict_prostate.results.text.emph((function (){var G__88500 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"dotted-orange","dotted-orange",-573056274).cljs$core$IFn$_invoke$arity$1(data),year);
return (predict_prostate.results.text.round.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.text.round.cljs$core$IFn$_invoke$arity$1(G__88500) : predict_prostate.results.text.round.call(null,G__88500));
})()))," ",sablono.interpreter.interpret(text2),"."),React.createElement("p",({"style": ({"fontSize": (16)}), "className": "screen-only"}),sablono.interpreter.interpret(text1)," ",sablono.interpreter.interpret(predict_prostate.results.text.emph((function (){var G__88503 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"dotted-orange","dotted-orange",-573056274).cljs$core$IFn$_invoke$arity$1(data),year);
return (predict_prostate.results.text.round.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.text.round.cljs$core$IFn$_invoke$arity$1(G__88503) : predict_prostate.results.text.round.call(null,G__88503));
})()))," ",sablono.interpreter.interpret(text2),".")], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs88473),React.createElement("p",({"style": ({"fontSize": (12)}), "className": "print-only"}),sablono.interpreter.interpret(text1)," ",sablono.interpreter.interpret(predict_prostate.results.text.emph((function (){var G__88507 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"dotted-orange","dotted-orange",-573056274).cljs$core$IFn$_invoke$arity$1(data),year);
return (predict_prostate.results.text.round.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.text.round.cljs$core$IFn$_invoke$arity$1(G__88507) : predict_prostate.results.text.round.call(null,G__88507));
})()))," ",sablono.interpreter.interpret(text2),"."),React.createElement("p",({"style": ({"fontSize": (16)}), "className": "screen-only"}),sablono.interpreter.interpret(text1)," ",sablono.interpreter.interpret(predict_prostate.results.text.emph((function (){var G__88532 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"dotted-orange","dotted-orange",-573056274).cljs$core$IFn$_invoke$arity$1(data),year);
return (predict_prostate.results.text.round.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.text.round.cljs$core$IFn$_invoke$arity$1(G__88532) : predict_prostate.results.text.round.call(null,G__88532));
})()))," ",sablono.interpreter.interpret(text2),".")], null)));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"results-in-text");

//# sourceMappingURL=predict_prostate.results.text.js.map
