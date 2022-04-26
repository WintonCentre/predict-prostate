goog.provide('predict_prostate.results.text');
predict_prostate.results.text.round = Math.round;
predict_prostate.results.text.set_default = (function predict_prostate$results$text$set_default(key){

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (state){
var default_56256 = predict_prostate.state.config.get_input_default(predict_prostate.state.config.input_groups,key);
pubsub.feeds.publish(predict_prostate.state.run_time.input_change(key),default_56256);

return state;
})], null);
});
predict_prostate.results.text.emph = (function predict_prostate$results$text$emph(n){
return n;

});
predict_prostate.results.text.texts = rum.core.lazy_build(rum.core.build_defc,(function (years,data,radical_QMARK_,printable,ttt){
var cs = (function (){var G__56116 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"conservative-survival","conservative-survival",-852356338).cljs$core$IFn$_invoke$arity$1(data),years);
return (predict_prostate.results.text.round.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.text.round.cljs$core$IFn$_invoke$arity$1(G__56116) : predict_prostate.results.text.round.call(null,G__56116));
})();
var rs = (function (){var G__56118 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"radical-survival","radical-survival",-74207469).cljs$core$IFn$_invoke$arity$1(data),years);
return (predict_prostate.results.text.round.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.text.round.cljs$core$IFn$_invoke$arity$1(G__56118) : predict_prostate.results.text.round.call(null,G__56118));
})();
var benefit = (rs - cs);
return daiquiri.core.create_element("div",{'className':"row"},[daiquiri.core.create_element("div",{'className':"print-only"},[daiquiri.core.create_element("div",{'style':{'marginTop':(0),'marginBottom':"0px",'display':"inline-block",'fontSize':(12)},'className':"col-sm-12 print-only"},[daiquiri.interpreter.interpret((function (){var G__56126 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text1","text/text1",-653651391),"Based on the information you have entered,"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__56126) : ttt.call(null,G__56126));
})())," ",(function (){var attrs56123 = predict_prostate.results.text.emph(cs);
return daiquiri.core.create_element("p",((cljs.core.map_QMARK_(attrs56123))?daiquiri.interpreter.element_attributes(attrs56123):null),((cljs.core.map_QMARK_(attrs56123))?[" ",daiquiri.interpreter.interpret((function (){var G__56128 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text2","text/text2",-2036319681),"out of"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__56128) : ttt.call(null,G__56128));
})())," ",daiquiri.interpreter.interpret(predict_prostate.results.text.emph((100)))," ",daiquiri.interpreter.interpret((function (){var G__56130 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text3","text/text3",614591440),"men are alive at years with"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__56130) : ttt.call(null,G__56130));
})())," ",daiquiri.interpreter.interpret((function (){var G__56132 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text4","text/text4",306591495),predict_prostate.results.text.emph("initial conservative management.")], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__56132) : ttt.call(null,G__56132));
})())]:[daiquiri.interpreter.interpret(attrs56123)," ",daiquiri.interpreter.interpret((function (){var G__56136 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text2","text/text2",-2036319681),"out of"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__56136) : ttt.call(null,G__56136));
})())," ",daiquiri.interpreter.interpret(predict_prostate.results.text.emph((100)))," ",daiquiri.interpreter.interpret((function (){var G__56138 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text3","text/text3",614591440),"men are alive at years with"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__56138) : ttt.call(null,G__56138));
})())," ",daiquiri.interpreter.interpret((function (){var G__56141 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text4","text/text4",306591495),predict_prostate.results.text.emph("initial conservative management.")], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__56141) : ttt.call(null,G__56141));
})())]));
})(),(cljs.core.truth_(radical_QMARK_)?(function (){var attrs56124 = predict_prostate.results.text.emph(rs);
return daiquiri.core.create_element("p",((cljs.core.map_QMARK_(attrs56124))?daiquiri.interpreter.element_attributes(attrs56124):null),((cljs.core.map_QMARK_(attrs56124))?[" ",daiquiri.interpreter.interpret((function (){var G__56147 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text5","text/text5",-369961466),"out of"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__56147) : ttt.call(null,G__56147));
})())," ",daiquiri.interpreter.interpret(predict_prostate.results.text.emph((100)))," ",daiquiri.interpreter.interpret((function (){var G__56152 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text6","text/text6",1344477451),"men treated (an extra"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__56152) : ttt.call(null,G__56152));
})())," ",daiquiri.interpreter.interpret(predict_prostate.results.text.emph(benefit)),") ",daiquiri.interpreter.interpret((function (){var G__56156 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text7","text/text7",1774786329),"are alive because of"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__56156) : ttt.call(null,G__56156));
})())," ",daiquiri.interpreter.interpret((function (){var G__56159 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text8","text/text8",495329353),predict_prostate.results.text.emph("radical treatment.")], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__56159) : ttt.call(null,G__56159));
})())]:[daiquiri.interpreter.interpret(attrs56124)," ",daiquiri.interpreter.interpret((function (){var G__56162 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text5","text/text5",-369961466),"out of"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__56162) : ttt.call(null,G__56162));
})())," ",daiquiri.interpreter.interpret(predict_prostate.results.text.emph((100)))," ",daiquiri.interpreter.interpret((function (){var G__56166 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text6","text/text6",1344477451),"men treated (an extra"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__56166) : ttt.call(null,G__56166));
})())," ",daiquiri.interpreter.interpret(predict_prostate.results.text.emph(benefit)),") ",daiquiri.interpreter.interpret((function (){var G__56170 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text7","text/text7",1774786329),"are alive because of"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__56170) : ttt.call(null,G__56170));
})())," ",daiquiri.interpreter.interpret((function (){var G__56172 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text8","text/text8",495329353),predict_prostate.results.text.emph("radical treatment.")], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__56172) : ttt.call(null,G__56172));
})())]));
})():null)])]),daiquiri.core.create_element("div",{'className':"screen-only"},[daiquiri.core.create_element("div",{'style':{'marginTop':(15),'marginBottom':"0px",'display':"inline-block",'fontSize':(16)},'className':"col-sm-12"},[(function (){var attrs56176 = (function (){var G__56180 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text1","text/text1",-653651391),"Based on the information you have entered,"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__56180) : ttt.call(null,G__56180));
})();
return daiquiri.core.create_element("span",((cljs.core.map_QMARK_(attrs56176))?daiquiri.interpreter.element_attributes(attrs56176):null),((cljs.core.map_QMARK_(attrs56176))?[" ",predict_prostate.components.button.year_picker(ttt)," ",daiquiri.interpreter.interpret((function (){var G__56182 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text9","text/text9",808987274),"years after diagnosis:"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__56182) : ttt.call(null,G__56182));
})())]:[daiquiri.interpreter.interpret(attrs56176)," ",predict_prostate.components.button.year_picker(ttt)," ",daiquiri.interpreter.interpret((function (){var G__56184 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text9","text/text9",808987274),"years after diagnosis:"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__56184) : ttt.call(null,G__56184));
})())]));
})(),(function (){var attrs56178 = predict_prostate.results.text.emph(cs);
return daiquiri.core.create_element("p",((cljs.core.map_QMARK_(attrs56178))?daiquiri.interpreter.element_attributes(attrs56178):null),((cljs.core.map_QMARK_(attrs56178))?[" ",daiquiri.interpreter.interpret((function (){var G__56186 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text10","text/text10",-1477220547),"out of"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__56186) : ttt.call(null,G__56186));
})())," ",daiquiri.interpreter.interpret(predict_prostate.results.text.emph((100)))," ",daiquiri.interpreter.interpret((function (){var G__56188 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text11","text/text11",-1985706273),"men are alive at"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__56188) : ttt.call(null,G__56188));
})())," ",daiquiri.interpreter.interpret(years)," ",daiquiri.interpreter.interpret((function (){var G__56190 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text12","text/text12",1578344657),"years with"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__56190) : ttt.call(null,G__56190));
})())," ",daiquiri.interpreter.interpret((function (){var G__56193 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text13","text/text13",201858299),predict_prostate.results.text.emph("initial conservative treatment.")], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__56193) : ttt.call(null,G__56193));
})())]:[daiquiri.interpreter.interpret(attrs56178)," ",daiquiri.interpreter.interpret((function (){var G__56195 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text10","text/text10",-1477220547),"out of"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__56195) : ttt.call(null,G__56195));
})())," ",daiquiri.interpreter.interpret(predict_prostate.results.text.emph((100)))," ",daiquiri.interpreter.interpret((function (){var G__56199 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text11","text/text11",-1985706273),"men are alive at"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__56199) : ttt.call(null,G__56199));
})())," ",daiquiri.interpreter.interpret(years)," ",daiquiri.interpreter.interpret((function (){var G__56201 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text12","text/text12",1578344657),"years with"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__56201) : ttt.call(null,G__56201));
})())," ",daiquiri.interpreter.interpret((function (){var G__56204 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text13","text/text13",201858299),predict_prostate.results.text.emph("initial conservative treatment.")], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__56204) : ttt.call(null,G__56204));
})())]));
})(),(cljs.core.truth_(radical_QMARK_)?(function (){var attrs56179 = predict_prostate.results.text.emph(rs);
return daiquiri.core.create_element("p",((cljs.core.map_QMARK_(attrs56179))?daiquiri.interpreter.element_attributes(attrs56179):null),((cljs.core.map_QMARK_(attrs56179))?[" ",daiquiri.interpreter.interpret((function (){var G__56209 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text14","text/text14",881888124),"out of"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__56209) : ttt.call(null,G__56209));
})())," ",daiquiri.interpreter.interpret(predict_prostate.results.text.emph((100)))," ",daiquiri.interpreter.interpret((function (){var G__56211 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text15","text/text15",1059028049),"men treated (an extra"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__56211) : ttt.call(null,G__56211));
})())," ",daiquiri.interpreter.interpret(predict_prostate.results.text.emph(benefit)),") ",daiquiri.interpreter.interpret((function (){var G__56213 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text16","text/text16",-203890799),"are alive because of"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__56213) : ttt.call(null,G__56213));
})())," ",daiquiri.interpreter.interpret((function (){var G__56217 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text17","text/text17",-1309195728),predict_prostate.results.text.emph("radical treatment.")], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__56217) : ttt.call(null,G__56217));
})())]:[daiquiri.interpreter.interpret(attrs56179)," ",daiquiri.interpreter.interpret((function (){var G__56225 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text14","text/text14",881888124),"out of"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__56225) : ttt.call(null,G__56225));
})())," ",daiquiri.interpreter.interpret(predict_prostate.results.text.emph((100)))," ",daiquiri.interpreter.interpret((function (){var G__56227 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text15","text/text15",1059028049),"men treated (an extra"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__56227) : ttt.call(null,G__56227));
})())," ",daiquiri.interpreter.interpret(predict_prostate.results.text.emph(benefit)),") ",daiquiri.interpreter.interpret((function (){var G__56229 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text16","text/text16",-203890799),"are alive because of"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__56229) : ttt.call(null,G__56229));
})())," ",daiquiri.interpreter.interpret((function (){var G__56232 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text17","text/text17",-1309195728),predict_prostate.results.text.emph("radical treatment.")], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__56232) : ttt.call(null,G__56232));
})())]));
})():null)])])]);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$], null),"predict-prostate.results.text/texts");
/**
 * Different models use different treatment widgets, so we need to use these to react to the correct
 *   treatments and lookup the appropriate result-data.
 */
predict_prostate.results.text.extract_data = (function predict_prostate$results$text$extract_data(results,radical_QMARK_){
var one_sum = (function (p1__56235_SHARP_,p2__56236_SHARP_){
return ((100) * ((1) - (p1__56235_SHARP_ + p2__56236_SHARP_)));
});
var radical_survival = cljs.core.map.cljs$core$IFn$_invoke$arity$3(one_sum,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(results,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"radical","radical",1159030213),new cljs.core.Keyword(null,"pred-PC-cum","pred-PC-cum",1965177836)], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(results,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"radical","radical",1159030213),new cljs.core.Keyword(null,"pred-NPC-cum","pred-NPC-cum",-1636287417)], null)));
var conservative_survival = cljs.core.map.cljs$core$IFn$_invoke$arity$3(one_sum,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(results,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"conservative","conservative",-1075714010),new cljs.core.Keyword(null,"pred-PC-cum","pred-PC-cum",1965177836)], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(results,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"conservative","conservative",-1075714010),new cljs.core.Keyword(null,"pred-NPC-cum","pred-NPC-cum",-1636287417)], null)));
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"title","title",636505583),"Overall Survival",new cljs.core.Keyword(null,"subtitle-over","subtitle-over",1867978156),"for men with prostate cancer, 5 and 10 years after diagnosis",new cljs.core.Keyword(null,"subtitle-under","subtitle-under",-1133908191),"years after diagnosis",new cljs.core.Keyword(null,"conservative-survival","conservative-survival",-852356338),conservative_survival,new cljs.core.Keyword(null,"radical-survival","radical-survival",-74207469),radical_survival,new cljs.core.Keyword(null,"radical-benefit","radical-benefit",1730049395),cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__56238_SHARP_,p2__56239_SHARP_){
return (p1__56238_SHARP_ - p2__56239_SHARP_);
}),radical_survival,conservative_survival),new cljs.core.Keyword(null,"dotted-orange","dotted-orange",-573056274),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__56240_SHARP_){
return ((100) * ((1) - p1__56240_SHARP_));
}),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(results,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(radical_QMARK_)?new cljs.core.Keyword(null,"radical","radical",1159030213):new cljs.core.Keyword(null,"conservative","conservative",-1075714010)),new cljs.core.Keyword(null,"NPC-survival","NPC-survival",-1399930619)], null)))], null);
});
predict_prostate.results.text.results_in_text = rum.core.lazy_build(rum.core.build_defc,(function (p__56243){
var map__56244 = p__56243;
var map__56244__$1 = cljs.core.__destructure_map(map__56244);
var printable = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56244__$1,new cljs.core.Keyword(null,"printable","printable",-928999004));
var ttt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56244__$1,new cljs.core.Keyword(null,"ttt","ttt",1858561240));
var year = rum.core.react(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"result-year","result-year",1413238532)));
var radical_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),rum.core.react(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"primary-rx","primary-rx",-1656848904))));
var data = predict_prostate.results.text.extract_data(rum.core.react(predict_prostate.state.run_time.results_cursor),radical_QMARK_);
var text1 = (function (){var G__56247 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text18","text/text18",342067524),"Of the men who would not survive,"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__56247) : ttt.call(null,G__56247));
})();
var text2 = (function (){var G__56248 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text19","text/text19",-1551481809),"would die due to causes not related to prostate cancer."], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__56248) : ttt.call(null,G__56248));
})();
return daiquiri.core.create_element("div",null,[predict_prostate.results.text.texts(year,data,radical_QMARK_,printable,ttt),daiquiri.core.create_element("p",{'style':{'fontSize':(12)},'className':"print-only"},[daiquiri.interpreter.interpret(text1)," ",daiquiri.interpreter.interpret(predict_prostate.results.text.emph((function (){var G__56250 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"dotted-orange","dotted-orange",-573056274).cljs$core$IFn$_invoke$arity$1(data),year);
return (predict_prostate.results.text.round.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.text.round.cljs$core$IFn$_invoke$arity$1(G__56250) : predict_prostate.results.text.round.call(null,G__56250));
})()))," ",daiquiri.interpreter.interpret(text2)]),daiquiri.core.create_element("p",{'style':{'fontSize':(16)},'className':"screen-only"},[daiquiri.interpreter.interpret(text1)," ",daiquiri.interpreter.interpret(predict_prostate.results.text.emph((function (){var G__56252 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"dotted-orange","dotted-orange",-573056274).cljs$core$IFn$_invoke$arity$1(data),year);
return (predict_prostate.results.text.round.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.text.round.cljs$core$IFn$_invoke$arity$1(G__56252) : predict_prostate.results.text.round.call(null,G__56252));
})()))," ",daiquiri.interpreter.interpret(text2)])]);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"predict-prostate.results.text/results-in-text");

//# sourceMappingURL=predict_prostate.results.text.js.map
