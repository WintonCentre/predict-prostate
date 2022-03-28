goog.provide('predict_prostate.results.text');
predict_prostate.results.text.round = Math.round;
predict_prostate.results.text.set_default = (function predict_prostate$results$text$set_default(key){

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (state){
var default_46453 = predict_prostate.state.config.get_input_default(predict_prostate.state.config.input_groups,key);
pubsub.feeds.publish(predict_prostate.state.run_time.input_change(key),default_46453);

return state;
})], null);
});
predict_prostate.results.text.emph = (function predict_prostate$results$text$emph(n){
return n;

});
predict_prostate.results.text.texts = rum.core.lazy_build(rum.core.build_defc,(function (years,data,radical_QMARK_,printable,ttt){
var cs = (function (){var G__46334 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"conservative-survival","conservative-survival",-852356338).cljs$core$IFn$_invoke$arity$1(data),years);
return (predict_prostate.results.text.round.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.text.round.cljs$core$IFn$_invoke$arity$1(G__46334) : predict_prostate.results.text.round.call(null,G__46334));
})();
var rs = (function (){var G__46335 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"radical-survival","radical-survival",-74207469).cljs$core$IFn$_invoke$arity$1(data),years);
return (predict_prostate.results.text.round.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.text.round.cljs$core$IFn$_invoke$arity$1(G__46335) : predict_prostate.results.text.round.call(null,G__46335));
})();
var benefit = (rs - cs);
return daiquiri.core.create_element("div",{'className':"row"},[daiquiri.core.create_element("div",{'className':"print-only"},[daiquiri.core.create_element("div",{'style':{'marginTop':(0),'marginBottom':"0px",'display':"inline-block",'fontSize':(12)},'className':"col-sm-12 print-only"},[daiquiri.interpreter.interpret((function (){var G__46339 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text1","text/text1",-653651391),"Based on the information you have entered,"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__46339) : ttt.call(null,G__46339));
})())," ",(function (){var attrs46336 = predict_prostate.results.text.emph(cs);
return daiquiri.core.create_element("p",((cljs.core.map_QMARK_(attrs46336))?daiquiri.interpreter.element_attributes(attrs46336):null),((cljs.core.map_QMARK_(attrs46336))?[" ",daiquiri.interpreter.interpret((function (){var G__46341 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text2","text/text2",-2036319681),"out of"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__46341) : ttt.call(null,G__46341));
})())," ",daiquiri.interpreter.interpret(predict_prostate.results.text.emph((100)))," ",daiquiri.interpreter.interpret((function (){var G__46343 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text3","text/text3",614591440),"men are alive at years with"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__46343) : ttt.call(null,G__46343));
})())," ",daiquiri.interpreter.interpret((function (){var G__46345 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text4","text/text4",306591495),predict_prostate.results.text.emph("initial conservative management.")], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__46345) : ttt.call(null,G__46345));
})())]:[daiquiri.interpreter.interpret(attrs46336)," ",daiquiri.interpreter.interpret((function (){var G__46347 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text2","text/text2",-2036319681),"out of"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__46347) : ttt.call(null,G__46347));
})())," ",daiquiri.interpreter.interpret(predict_prostate.results.text.emph((100)))," ",daiquiri.interpreter.interpret((function (){var G__46349 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text3","text/text3",614591440),"men are alive at years with"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__46349) : ttt.call(null,G__46349));
})())," ",daiquiri.interpreter.interpret((function (){var G__46351 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text4","text/text4",306591495),predict_prostate.results.text.emph("initial conservative management.")], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__46351) : ttt.call(null,G__46351));
})())]));
})(),(cljs.core.truth_(radical_QMARK_)?(function (){var attrs46337 = predict_prostate.results.text.emph(rs);
return daiquiri.core.create_element("p",((cljs.core.map_QMARK_(attrs46337))?daiquiri.interpreter.element_attributes(attrs46337):null),((cljs.core.map_QMARK_(attrs46337))?[" ",daiquiri.interpreter.interpret((function (){var G__46353 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text5","text/text5",-369961466),"out of"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__46353) : ttt.call(null,G__46353));
})())," ",daiquiri.interpreter.interpret(predict_prostate.results.text.emph((100)))," ",daiquiri.interpreter.interpret((function (){var G__46355 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text6","text/text6",1344477451),"men treated (an extra"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__46355) : ttt.call(null,G__46355));
})())," ",daiquiri.interpreter.interpret(predict_prostate.results.text.emph(benefit)),") ",daiquiri.interpreter.interpret((function (){var G__46357 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text7","text/text7",1774786329),"are alive because of"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__46357) : ttt.call(null,G__46357));
})())," ",daiquiri.interpreter.interpret((function (){var G__46359 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text8","text/text8",495329353),predict_prostate.results.text.emph("radical treatment.")], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__46359) : ttt.call(null,G__46359));
})())]:[daiquiri.interpreter.interpret(attrs46337)," ",daiquiri.interpreter.interpret((function (){var G__46362 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text5","text/text5",-369961466),"out of"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__46362) : ttt.call(null,G__46362));
})())," ",daiquiri.interpreter.interpret(predict_prostate.results.text.emph((100)))," ",daiquiri.interpreter.interpret((function (){var G__46364 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text6","text/text6",1344477451),"men treated (an extra"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__46364) : ttt.call(null,G__46364));
})())," ",daiquiri.interpreter.interpret(predict_prostate.results.text.emph(benefit)),") ",daiquiri.interpreter.interpret((function (){var G__46366 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text7","text/text7",1774786329),"are alive because of"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__46366) : ttt.call(null,G__46366));
})())," ",daiquiri.interpreter.interpret((function (){var G__46368 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text8","text/text8",495329353),predict_prostate.results.text.emph("radical treatment.")], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__46368) : ttt.call(null,G__46368));
})())]));
})():null)])]),daiquiri.core.create_element("div",{'className':"screen-only"},[daiquiri.core.create_element("div",{'style':{'marginTop':(15),'marginBottom':"0px",'display':"inline-block",'fontSize':(16)},'className':"col-sm-12"},[(function (){var attrs46371 = (function (){var G__46375 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text1","text/text1",-653651391),"Based on the information you have entered,"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__46375) : ttt.call(null,G__46375));
})();
return daiquiri.core.create_element("span",((cljs.core.map_QMARK_(attrs46371))?daiquiri.interpreter.element_attributes(attrs46371):null),((cljs.core.map_QMARK_(attrs46371))?[" ",predict_prostate.components.button.year_picker(ttt)," ",daiquiri.interpreter.interpret((function (){var G__46377 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text9","text/text9",808987274),"years after diagnosis:"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__46377) : ttt.call(null,G__46377));
})())]:[daiquiri.interpreter.interpret(attrs46371)," ",predict_prostate.components.button.year_picker(ttt)," ",daiquiri.interpreter.interpret((function (){var G__46379 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text9","text/text9",808987274),"years after diagnosis:"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__46379) : ttt.call(null,G__46379));
})())]));
})(),(function (){var attrs46372 = predict_prostate.results.text.emph(cs);
return daiquiri.core.create_element("p",((cljs.core.map_QMARK_(attrs46372))?daiquiri.interpreter.element_attributes(attrs46372):null),((cljs.core.map_QMARK_(attrs46372))?[" ",daiquiri.interpreter.interpret((function (){var G__46382 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text10","text/text10",-1477220547),"out of"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__46382) : ttt.call(null,G__46382));
})())," ",daiquiri.interpreter.interpret(predict_prostate.results.text.emph((100)))," ",daiquiri.interpreter.interpret((function (){var G__46385 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text11","text/text11",-1985706273),"men are alive at"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__46385) : ttt.call(null,G__46385));
})())," ",daiquiri.interpreter.interpret(years)," ",daiquiri.interpreter.interpret((function (){var G__46387 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text12","text/text12",1578344657),"years with"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__46387) : ttt.call(null,G__46387));
})())," ",daiquiri.interpreter.interpret((function (){var G__46389 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text13","text/text13",201858299),predict_prostate.results.text.emph("initial conservative treatment.")], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__46389) : ttt.call(null,G__46389));
})())]:[daiquiri.interpreter.interpret(attrs46372)," ",daiquiri.interpreter.interpret((function (){var G__46391 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text10","text/text10",-1477220547),"out of"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__46391) : ttt.call(null,G__46391));
})())," ",daiquiri.interpreter.interpret(predict_prostate.results.text.emph((100)))," ",daiquiri.interpreter.interpret((function (){var G__46393 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text11","text/text11",-1985706273),"men are alive at"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__46393) : ttt.call(null,G__46393));
})())," ",daiquiri.interpreter.interpret(years)," ",daiquiri.interpreter.interpret((function (){var G__46401 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text12","text/text12",1578344657),"years with"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__46401) : ttt.call(null,G__46401));
})())," ",daiquiri.interpreter.interpret((function (){var G__46403 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text13","text/text13",201858299),predict_prostate.results.text.emph("initial conservative treatment.")], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__46403) : ttt.call(null,G__46403));
})())]));
})(),(cljs.core.truth_(radical_QMARK_)?(function (){var attrs46374 = predict_prostate.results.text.emph(rs);
return daiquiri.core.create_element("p",((cljs.core.map_QMARK_(attrs46374))?daiquiri.interpreter.element_attributes(attrs46374):null),((cljs.core.map_QMARK_(attrs46374))?[" ",daiquiri.interpreter.interpret((function (){var G__46406 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text14","text/text14",881888124),"out of"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__46406) : ttt.call(null,G__46406));
})())," ",daiquiri.interpreter.interpret(predict_prostate.results.text.emph((100)))," ",daiquiri.interpreter.interpret((function (){var G__46409 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text15","text/text15",1059028049),"men treated (an extra"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__46409) : ttt.call(null,G__46409));
})())," ",daiquiri.interpreter.interpret(predict_prostate.results.text.emph(benefit)),") ",daiquiri.interpreter.interpret((function (){var G__46411 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text16","text/text16",-203890799),"are alive because of"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__46411) : ttt.call(null,G__46411));
})())," ",daiquiri.interpreter.interpret((function (){var G__46415 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text17","text/text17",-1309195728),predict_prostate.results.text.emph("radical treatment.")], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__46415) : ttt.call(null,G__46415));
})())]:[daiquiri.interpreter.interpret(attrs46374)," ",daiquiri.interpreter.interpret((function (){var G__46418 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text14","text/text14",881888124),"out of"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__46418) : ttt.call(null,G__46418));
})())," ",daiquiri.interpreter.interpret(predict_prostate.results.text.emph((100)))," ",daiquiri.interpreter.interpret((function (){var G__46422 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text15","text/text15",1059028049),"men treated (an extra"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__46422) : ttt.call(null,G__46422));
})())," ",daiquiri.interpreter.interpret(predict_prostate.results.text.emph(benefit)),") ",daiquiri.interpreter.interpret((function (){var G__46425 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text16","text/text16",-203890799),"are alive because of"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__46425) : ttt.call(null,G__46425));
})())," ",daiquiri.interpreter.interpret((function (){var G__46428 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text17","text/text17",-1309195728),predict_prostate.results.text.emph("radical treatment.")], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__46428) : ttt.call(null,G__46428));
})())]));
})():null)])])]);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$], null),"predict-prostate.results.text/texts");
/**
 * Different models use different treatment widgets, so we need to use these to react to the correct
 *   treatments and lookup the appropriate result-data.
 */
predict_prostate.results.text.extract_data = (function predict_prostate$results$text$extract_data(results,radical_QMARK_){
var one_sum = (function (p1__46432_SHARP_,p2__46433_SHARP_){
return ((100) * ((1) - (p1__46432_SHARP_ + p2__46433_SHARP_)));
});
var radical_survival = cljs.core.map.cljs$core$IFn$_invoke$arity$3(one_sum,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(results,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"radical","radical",1159030213),new cljs.core.Keyword(null,"pred-PC-cum","pred-PC-cum",1965177836)], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(results,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"radical","radical",1159030213),new cljs.core.Keyword(null,"pred-NPC-cum","pred-NPC-cum",-1636287417)], null)));
var conservative_survival = cljs.core.map.cljs$core$IFn$_invoke$arity$3(one_sum,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(results,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"conservative","conservative",-1075714010),new cljs.core.Keyword(null,"pred-PC-cum","pred-PC-cum",1965177836)], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(results,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"conservative","conservative",-1075714010),new cljs.core.Keyword(null,"pred-NPC-cum","pred-NPC-cum",-1636287417)], null)));
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"title","title",636505583),"Overall Survival",new cljs.core.Keyword(null,"subtitle-over","subtitle-over",1867978156),"for men with prostate cancer, 5 and 10 years after diagnosis",new cljs.core.Keyword(null,"subtitle-under","subtitle-under",-1133908191),"years after diagnosis",new cljs.core.Keyword(null,"conservative-survival","conservative-survival",-852356338),conservative_survival,new cljs.core.Keyword(null,"radical-survival","radical-survival",-74207469),radical_survival,new cljs.core.Keyword(null,"radical-benefit","radical-benefit",1730049395),cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__46434_SHARP_,p2__46435_SHARP_){
return (p1__46434_SHARP_ - p2__46435_SHARP_);
}),radical_survival,conservative_survival),new cljs.core.Keyword(null,"dotted-orange","dotted-orange",-573056274),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__46436_SHARP_){
return ((100) * ((1) - p1__46436_SHARP_));
}),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(results,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(radical_QMARK_)?new cljs.core.Keyword(null,"radical","radical",1159030213):new cljs.core.Keyword(null,"conservative","conservative",-1075714010)),new cljs.core.Keyword(null,"NPC-survival","NPC-survival",-1399930619)], null)))], null);
});
predict_prostate.results.text.results_in_text = rum.core.lazy_build(rum.core.build_defc,(function (p__46439){
var map__46440 = p__46439;
var map__46440__$1 = cljs.core.__destructure_map(map__46440);
var printable = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46440__$1,new cljs.core.Keyword(null,"printable","printable",-928999004));
var ttt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46440__$1,new cljs.core.Keyword(null,"ttt","ttt",1858561240));
var year = rum.core.react(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"result-year","result-year",1413238532)));
var radical_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),rum.core.react(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"primary-rx","primary-rx",-1656848904))));
var data = predict_prostate.results.text.extract_data(rum.core.react(predict_prostate.state.run_time.results_cursor),radical_QMARK_);
var text1 = (function (){var G__46441 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text18","text/text18",342067524),"Of the men who would not survive,"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__46441) : ttt.call(null,G__46441));
})();
var text2 = (function (){var G__46442 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text19","text/text19",-1551481809),"would die due to causes not related to prostate cancer."], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__46442) : ttt.call(null,G__46442));
})();
return daiquiri.core.create_element("div",null,[predict_prostate.results.text.texts(year,data,radical_QMARK_,printable,ttt),daiquiri.core.create_element("p",{'style':{'fontSize':(12)},'className':"print-only"},[daiquiri.interpreter.interpret(text1)," ",daiquiri.interpreter.interpret(predict_prostate.results.text.emph((function (){var G__46446 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"dotted-orange","dotted-orange",-573056274).cljs$core$IFn$_invoke$arity$1(data),year);
return (predict_prostate.results.text.round.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.text.round.cljs$core$IFn$_invoke$arity$1(G__46446) : predict_prostate.results.text.round.call(null,G__46446));
})()))," ",daiquiri.interpreter.interpret(text2)]),daiquiri.core.create_element("p",{'style':{'fontSize':(16)},'className':"screen-only"},[daiquiri.interpreter.interpret(text1)," ",daiquiri.interpreter.interpret(predict_prostate.results.text.emph((function (){var G__46448 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"dotted-orange","dotted-orange",-573056274).cljs$core$IFn$_invoke$arity$1(data),year);
return (predict_prostate.results.text.round.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.text.round.cljs$core$IFn$_invoke$arity$1(G__46448) : predict_prostate.results.text.round.call(null,G__46448));
})()))," ",daiquiri.interpreter.interpret(text2)])]);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"predict-prostate.results.text/results-in-text");

//# sourceMappingURL=predict_prostate.results.text.js.map
