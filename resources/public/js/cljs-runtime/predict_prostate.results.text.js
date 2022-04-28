goog.provide('predict_prostate.results.text');
predict_prostate.results.text.round = Math.round;
predict_prostate.results.text.set_default = (function predict_prostate$results$text$set_default(key){

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (state){
var default_33306 = predict_prostate.state.config.get_input_default(predict_prostate.state.config.input_groups,key);
pubsub.feeds.publish(predict_prostate.state.run_time.input_change(key),default_33306);

return state;
})], null);
});
predict_prostate.results.text.emph = (function predict_prostate$results$text$emph(n){
return n;

});
predict_prostate.results.text.texts = rum.core.lazy_build(rum.core.build_defc,(function (years,data,radical_QMARK_,printable,ttt){
var cs = (function (){var G__33096 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"conservative-survival","conservative-survival",-852356338).cljs$core$IFn$_invoke$arity$1(data),years);
return (predict_prostate.results.text.round.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.text.round.cljs$core$IFn$_invoke$arity$1(G__33096) : predict_prostate.results.text.round.call(null,G__33096));
})();
var rs = (function (){var G__33099 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"radical-survival","radical-survival",-74207469).cljs$core$IFn$_invoke$arity$1(data),years);
return (predict_prostate.results.text.round.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.text.round.cljs$core$IFn$_invoke$arity$1(G__33099) : predict_prostate.results.text.round.call(null,G__33099));
})();
var benefit = (rs - cs);
return daiquiri.core.create_element("div",{'className':"row"},[daiquiri.core.create_element("div",{'className':"print-only"},[daiquiri.core.create_element("div",{'style':{'marginTop':(0),'marginBottom':"0px",'display':"inline-block",'fontSize':(12)},'className':"col-sm-12 print-only"},[daiquiri.interpreter.interpret((function (){var G__33109 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text1","text/text1",-653651391),"Based on the information you have entered,"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33109) : ttt.call(null,G__33109));
})())," ",(function (){var attrs33103 = predict_prostate.results.text.emph(cs);
return daiquiri.core.create_element("p",((cljs.core.map_QMARK_(attrs33103))?daiquiri.interpreter.element_attributes(attrs33103):null),((cljs.core.map_QMARK_(attrs33103))?[" ",daiquiri.interpreter.interpret((function (){var G__33112 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text2","text/text2",-2036319681),"out of"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33112) : ttt.call(null,G__33112));
})())," ",daiquiri.interpreter.interpret(predict_prostate.results.text.emph((100)))," ",daiquiri.interpreter.interpret((function (){var G__33121 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text3","text/text3",614591440),"men are alive at years with"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33121) : ttt.call(null,G__33121));
})())," ",daiquiri.interpreter.interpret((function (){var G__33123 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text4","text/text4",306591495),predict_prostate.results.text.emph("initial conservative management.")], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33123) : ttt.call(null,G__33123));
})())]:[daiquiri.interpreter.interpret(attrs33103)," ",daiquiri.interpreter.interpret((function (){var G__33125 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text2","text/text2",-2036319681),"out of"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33125) : ttt.call(null,G__33125));
})())," ",daiquiri.interpreter.interpret(predict_prostate.results.text.emph((100)))," ",daiquiri.interpreter.interpret((function (){var G__33128 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text3","text/text3",614591440),"men are alive at years with"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33128) : ttt.call(null,G__33128));
})())," ",daiquiri.interpreter.interpret((function (){var G__33130 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text4","text/text4",306591495),predict_prostate.results.text.emph("initial conservative management.")], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33130) : ttt.call(null,G__33130));
})())]));
})(),(cljs.core.truth_(radical_QMARK_)?(function (){var attrs33107 = predict_prostate.results.text.emph(rs);
return daiquiri.core.create_element("p",((cljs.core.map_QMARK_(attrs33107))?daiquiri.interpreter.element_attributes(attrs33107):null),((cljs.core.map_QMARK_(attrs33107))?[" ",daiquiri.interpreter.interpret((function (){var G__33132 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text5","text/text5",-369961466),"out of"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33132) : ttt.call(null,G__33132));
})())," ",daiquiri.interpreter.interpret(predict_prostate.results.text.emph((100)))," ",daiquiri.interpreter.interpret((function (){var G__33136 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text6","text/text6",1344477451),"men treated (an extra"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33136) : ttt.call(null,G__33136));
})())," ",daiquiri.interpreter.interpret(predict_prostate.results.text.emph(benefit)),") ",daiquiri.interpreter.interpret((function (){var G__33187 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text7","text/text7",1774786329),"are alive because of"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33187) : ttt.call(null,G__33187));
})())," ",daiquiri.interpreter.interpret((function (){var G__33195 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text8","text/text8",495329353),predict_prostate.results.text.emph("radical treatment.")], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33195) : ttt.call(null,G__33195));
})())]:[daiquiri.interpreter.interpret(attrs33107)," ",daiquiri.interpreter.interpret((function (){var G__33199 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text5","text/text5",-369961466),"out of"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33199) : ttt.call(null,G__33199));
})())," ",daiquiri.interpreter.interpret(predict_prostate.results.text.emph((100)))," ",daiquiri.interpreter.interpret((function (){var G__33204 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text6","text/text6",1344477451),"men treated (an extra"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33204) : ttt.call(null,G__33204));
})())," ",daiquiri.interpreter.interpret(predict_prostate.results.text.emph(benefit)),") ",daiquiri.interpreter.interpret((function (){var G__33209 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text7","text/text7",1774786329),"are alive because of"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33209) : ttt.call(null,G__33209));
})())," ",daiquiri.interpreter.interpret((function (){var G__33213 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text8","text/text8",495329353),predict_prostate.results.text.emph("radical treatment.")], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33213) : ttt.call(null,G__33213));
})())]));
})():null)])]),daiquiri.core.create_element("div",{'className':"screen-only"},[daiquiri.core.create_element("div",{'style':{'marginTop':(15),'marginBottom':"0px",'display':"inline-block",'fontSize':(16)},'className':"col-sm-12"},[(function (){var attrs33221 = (function (){var G__33226 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text1","text/text1",-653651391),"Based on the information you have entered,"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33226) : ttt.call(null,G__33226));
})();
return daiquiri.core.create_element("span",((cljs.core.map_QMARK_(attrs33221))?daiquiri.interpreter.element_attributes(attrs33221):null),((cljs.core.map_QMARK_(attrs33221))?[" ",predict_prostate.components.button.year_picker(ttt)," ",daiquiri.interpreter.interpret((function (){var G__33231 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text9","text/text9",808987274),"years after diagnosis:"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33231) : ttt.call(null,G__33231));
})())]:[daiquiri.interpreter.interpret(attrs33221)," ",predict_prostate.components.button.year_picker(ttt)," ",daiquiri.interpreter.interpret((function (){var G__33235 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text9","text/text9",808987274),"years after diagnosis:"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33235) : ttt.call(null,G__33235));
})())]));
})(),(function (){var attrs33223 = predict_prostate.results.text.emph(cs);
return daiquiri.core.create_element("p",((cljs.core.map_QMARK_(attrs33223))?daiquiri.interpreter.element_attributes(attrs33223):null),((cljs.core.map_QMARK_(attrs33223))?[" ",daiquiri.interpreter.interpret((function (){var G__33237 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text10","text/text10",-1477220547),"out of"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33237) : ttt.call(null,G__33237));
})())," ",daiquiri.interpreter.interpret(predict_prostate.results.text.emph((100)))," ",daiquiri.interpreter.interpret((function (){var G__33245 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text11","text/text11",-1985706273),"men are alive at"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33245) : ttt.call(null,G__33245));
})())," ",daiquiri.interpreter.interpret(years)," ",daiquiri.interpreter.interpret((function (){var G__33250 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text12","text/text12",1578344657),"years with"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33250) : ttt.call(null,G__33250));
})())," ",daiquiri.interpreter.interpret((function (){var G__33254 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text13","text/text13",201858299),predict_prostate.results.text.emph("initial conservative treatment.")], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33254) : ttt.call(null,G__33254));
})())]:[daiquiri.interpreter.interpret(attrs33223)," ",daiquiri.interpreter.interpret((function (){var G__33258 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text10","text/text10",-1477220547),"out of"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33258) : ttt.call(null,G__33258));
})())," ",daiquiri.interpreter.interpret(predict_prostate.results.text.emph((100)))," ",daiquiri.interpreter.interpret((function (){var G__33261 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text11","text/text11",-1985706273),"men are alive at"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33261) : ttt.call(null,G__33261));
})())," ",daiquiri.interpreter.interpret(years)," ",daiquiri.interpreter.interpret((function (){var G__33264 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text12","text/text12",1578344657),"years with"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33264) : ttt.call(null,G__33264));
})())," ",daiquiri.interpreter.interpret((function (){var G__33267 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text13","text/text13",201858299),predict_prostate.results.text.emph("initial conservative treatment.")], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33267) : ttt.call(null,G__33267));
})())]));
})(),(cljs.core.truth_(radical_QMARK_)?(function (){var attrs33224 = predict_prostate.results.text.emph(rs);
return daiquiri.core.create_element("p",((cljs.core.map_QMARK_(attrs33224))?daiquiri.interpreter.element_attributes(attrs33224):null),((cljs.core.map_QMARK_(attrs33224))?[" ",daiquiri.interpreter.interpret((function (){var G__33270 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text14","text/text14",881888124),"out of"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33270) : ttt.call(null,G__33270));
})())," ",daiquiri.interpreter.interpret(predict_prostate.results.text.emph((100)))," ",daiquiri.interpreter.interpret((function (){var G__33272 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text15","text/text15",1059028049),"men treated (an extra"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33272) : ttt.call(null,G__33272));
})())," ",daiquiri.interpreter.interpret(predict_prostate.results.text.emph(benefit)),") ",daiquiri.interpreter.interpret((function (){var G__33274 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text16","text/text16",-203890799),"are alive because of"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33274) : ttt.call(null,G__33274));
})())," ",daiquiri.interpreter.interpret((function (){var G__33276 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text17","text/text17",-1309195728),predict_prostate.results.text.emph("radical treatment.")], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33276) : ttt.call(null,G__33276));
})())]:[daiquiri.interpreter.interpret(attrs33224)," ",daiquiri.interpreter.interpret((function (){var G__33278 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text14","text/text14",881888124),"out of"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33278) : ttt.call(null,G__33278));
})())," ",daiquiri.interpreter.interpret(predict_prostate.results.text.emph((100)))," ",daiquiri.interpreter.interpret((function (){var G__33280 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text15","text/text15",1059028049),"men treated (an extra"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33280) : ttt.call(null,G__33280));
})())," ",daiquiri.interpreter.interpret(predict_prostate.results.text.emph(benefit)),") ",daiquiri.interpreter.interpret((function (){var G__33282 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text16","text/text16",-203890799),"are alive because of"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33282) : ttt.call(null,G__33282));
})())," ",daiquiri.interpreter.interpret((function (){var G__33284 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text17","text/text17",-1309195728),predict_prostate.results.text.emph("radical treatment.")], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33284) : ttt.call(null,G__33284));
})())]));
})():null)])])]);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$], null),"predict-prostate.results.text/texts");
/**
 * Different models use different treatment widgets, so we need to use these to react to the correct
 *   treatments and lookup the appropriate result-data.
 */
predict_prostate.results.text.extract_data = (function predict_prostate$results$text$extract_data(results,radical_QMARK_){
var one_sum = (function (p1__33285_SHARP_,p2__33286_SHARP_){
return ((100) * ((1) - (p1__33285_SHARP_ + p2__33286_SHARP_)));
});
var radical_survival = cljs.core.map.cljs$core$IFn$_invoke$arity$3(one_sum,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(results,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"radical","radical",1159030213),new cljs.core.Keyword(null,"pred-PC-cum","pred-PC-cum",1965177836)], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(results,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"radical","radical",1159030213),new cljs.core.Keyword(null,"pred-NPC-cum","pred-NPC-cum",-1636287417)], null)));
var conservative_survival = cljs.core.map.cljs$core$IFn$_invoke$arity$3(one_sum,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(results,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"conservative","conservative",-1075714010),new cljs.core.Keyword(null,"pred-PC-cum","pred-PC-cum",1965177836)], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(results,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"conservative","conservative",-1075714010),new cljs.core.Keyword(null,"pred-NPC-cum","pred-NPC-cum",-1636287417)], null)));
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"title","title",636505583),"Overall Survival",new cljs.core.Keyword(null,"subtitle-over","subtitle-over",1867978156),"for men with prostate cancer, 5 and 10 years after diagnosis",new cljs.core.Keyword(null,"subtitle-under","subtitle-under",-1133908191),"years after diagnosis",new cljs.core.Keyword(null,"conservative-survival","conservative-survival",-852356338),conservative_survival,new cljs.core.Keyword(null,"radical-survival","radical-survival",-74207469),radical_survival,new cljs.core.Keyword(null,"radical-benefit","radical-benefit",1730049395),cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__33287_SHARP_,p2__33288_SHARP_){
return (p1__33287_SHARP_ - p2__33288_SHARP_);
}),radical_survival,conservative_survival),new cljs.core.Keyword(null,"dotted-orange","dotted-orange",-573056274),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__33289_SHARP_){
return ((100) * ((1) - p1__33289_SHARP_));
}),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(results,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(radical_QMARK_)?new cljs.core.Keyword(null,"radical","radical",1159030213):new cljs.core.Keyword(null,"conservative","conservative",-1075714010)),new cljs.core.Keyword(null,"NPC-survival","NPC-survival",-1399930619)], null)))], null);
});
predict_prostate.results.text.results_in_text = rum.core.lazy_build(rum.core.build_defc,(function (p__33292){
var map__33293 = p__33292;
var map__33293__$1 = cljs.core.__destructure_map(map__33293);
var printable = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33293__$1,new cljs.core.Keyword(null,"printable","printable",-928999004));
var ttt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33293__$1,new cljs.core.Keyword(null,"ttt","ttt",1858561240));
var year = rum.core.react(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"result-year","result-year",1413238532)));
var radical_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),rum.core.react(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"primary-rx","primary-rx",-1656848904))));
var data = predict_prostate.results.text.extract_data(rum.core.react(predict_prostate.state.run_time.results_cursor),radical_QMARK_);
var text1 = (function (){var G__33294 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text18","text/text18",342067524),"Of the men who would not survive,"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33294) : ttt.call(null,G__33294));
})();
var text2 = (function (){var G__33295 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text19","text/text19",-1551481809),"would die due to causes not related to prostate cancer."], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33295) : ttt.call(null,G__33295));
})();
return daiquiri.core.create_element("div",null,[predict_prostate.results.text.texts(year,data,radical_QMARK_,printable,ttt),daiquiri.core.create_element("p",{'style':{'fontSize':(12)},'className':"print-only"},[daiquiri.interpreter.interpret(text1)," ",daiquiri.interpreter.interpret(predict_prostate.results.text.emph((function (){var G__33298 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"dotted-orange","dotted-orange",-573056274).cljs$core$IFn$_invoke$arity$1(data),year);
return (predict_prostate.results.text.round.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.text.round.cljs$core$IFn$_invoke$arity$1(G__33298) : predict_prostate.results.text.round.call(null,G__33298));
})()))," ",daiquiri.interpreter.interpret(text2)]),daiquiri.core.create_element("p",{'style':{'fontSize':(16)},'className':"screen-only"},[daiquiri.interpreter.interpret(text1)," ",daiquiri.interpreter.interpret(predict_prostate.results.text.emph((function (){var G__33302 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"dotted-orange","dotted-orange",-573056274).cljs$core$IFn$_invoke$arity$1(data),year);
return (predict_prostate.results.text.round.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.text.round.cljs$core$IFn$_invoke$arity$1(G__33302) : predict_prostate.results.text.round.call(null,G__33302));
})()))," ",daiquiri.interpreter.interpret(text2)])]);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"predict-prostate.results.text/results-in-text");

//# sourceMappingURL=predict_prostate.results.text.js.map
