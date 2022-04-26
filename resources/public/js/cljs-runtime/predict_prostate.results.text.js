goog.provide('predict_prostate.results.text');
predict_prostate.results.text.round = Math.round;
predict_prostate.results.text.set_default = (function predict_prostate$results$text$set_default(key){

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (state){
var default_43927 = predict_prostate.state.config.get_input_default(predict_prostate.state.config.input_groups,key);
pubsub.feeds.publish(predict_prostate.state.run_time.input_change(key),default_43927);

return state;
})], null);
});
predict_prostate.results.text.emph = (function predict_prostate$results$text$emph(n){
return n;

});
predict_prostate.results.text.texts = rum.core.lazy_build(rum.core.build_defc,(function (years,data,radical_QMARK_,printable,ttt){
var cs = (function (){var G__43811 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"conservative-survival","conservative-survival",-852356338).cljs$core$IFn$_invoke$arity$1(data),years);
return (predict_prostate.results.text.round.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.text.round.cljs$core$IFn$_invoke$arity$1(G__43811) : predict_prostate.results.text.round.call(null,G__43811));
})();
var rs = (function (){var G__43812 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"radical-survival","radical-survival",-74207469).cljs$core$IFn$_invoke$arity$1(data),years);
return (predict_prostate.results.text.round.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.text.round.cljs$core$IFn$_invoke$arity$1(G__43812) : predict_prostate.results.text.round.call(null,G__43812));
})();
var benefit = (rs - cs);
return daiquiri.core.create_element("div",{'className':"row"},[daiquiri.core.create_element("div",{'className':"print-only"},[daiquiri.core.create_element("div",{'style':{'marginTop':(0),'marginBottom':"0px",'display':"inline-block",'fontSize':(12)},'className':"col-sm-12 print-only"},[daiquiri.interpreter.interpret((function (){var G__43825 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text1","text/text1",-653651391),"Based on the information you have entered,"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__43825) : ttt.call(null,G__43825));
})())," ",(function (){var attrs43821 = predict_prostate.results.text.emph(cs);
return daiquiri.core.create_element("p",((cljs.core.map_QMARK_(attrs43821))?daiquiri.interpreter.element_attributes(attrs43821):null),((cljs.core.map_QMARK_(attrs43821))?[" ",daiquiri.interpreter.interpret((function (){var G__43828 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text2","text/text2",-2036319681),"out of"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__43828) : ttt.call(null,G__43828));
})())," ",daiquiri.interpreter.interpret(predict_prostate.results.text.emph((100)))," ",daiquiri.interpreter.interpret((function (){var G__43830 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text3","text/text3",614591440),"men are alive at years with"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__43830) : ttt.call(null,G__43830));
})())," ",daiquiri.interpreter.interpret((function (){var G__43832 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text4","text/text4",306591495),predict_prostate.results.text.emph("initial conservative management.")], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__43832) : ttt.call(null,G__43832));
})())]:[daiquiri.interpreter.interpret(attrs43821)," ",daiquiri.interpreter.interpret((function (){var G__43834 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text2","text/text2",-2036319681),"out of"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__43834) : ttt.call(null,G__43834));
})())," ",daiquiri.interpreter.interpret(predict_prostate.results.text.emph((100)))," ",daiquiri.interpreter.interpret((function (){var G__43837 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text3","text/text3",614591440),"men are alive at years with"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__43837) : ttt.call(null,G__43837));
})())," ",daiquiri.interpreter.interpret((function (){var G__43840 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text4","text/text4",306591495),predict_prostate.results.text.emph("initial conservative management.")], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__43840) : ttt.call(null,G__43840));
})())]));
})(),(cljs.core.truth_(radical_QMARK_)?(function (){var attrs43822 = predict_prostate.results.text.emph(rs);
return daiquiri.core.create_element("p",((cljs.core.map_QMARK_(attrs43822))?daiquiri.interpreter.element_attributes(attrs43822):null),((cljs.core.map_QMARK_(attrs43822))?[" ",daiquiri.interpreter.interpret((function (){var G__43843 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text5","text/text5",-369961466),"out of"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__43843) : ttt.call(null,G__43843));
})())," ",daiquiri.interpreter.interpret(predict_prostate.results.text.emph((100)))," ",daiquiri.interpreter.interpret((function (){var G__43845 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text6","text/text6",1344477451),"men treated (an extra"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__43845) : ttt.call(null,G__43845));
})())," ",daiquiri.interpreter.interpret(predict_prostate.results.text.emph(benefit)),") ",daiquiri.interpreter.interpret((function (){var G__43847 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text7","text/text7",1774786329),"are alive because of"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__43847) : ttt.call(null,G__43847));
})())," ",daiquiri.interpreter.interpret((function (){var G__43849 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text8","text/text8",495329353),predict_prostate.results.text.emph("radical treatment.")], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__43849) : ttt.call(null,G__43849));
})())]:[daiquiri.interpreter.interpret(attrs43822)," ",daiquiri.interpreter.interpret((function (){var G__43851 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text5","text/text5",-369961466),"out of"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__43851) : ttt.call(null,G__43851));
})())," ",daiquiri.interpreter.interpret(predict_prostate.results.text.emph((100)))," ",daiquiri.interpreter.interpret((function (){var G__43853 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text6","text/text6",1344477451),"men treated (an extra"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__43853) : ttt.call(null,G__43853));
})())," ",daiquiri.interpreter.interpret(predict_prostate.results.text.emph(benefit)),") ",daiquiri.interpreter.interpret((function (){var G__43855 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text7","text/text7",1774786329),"are alive because of"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__43855) : ttt.call(null,G__43855));
})())," ",daiquiri.interpreter.interpret((function (){var G__43857 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text8","text/text8",495329353),predict_prostate.results.text.emph("radical treatment.")], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__43857) : ttt.call(null,G__43857));
})())]));
})():null)])]),daiquiri.core.create_element("div",{'className':"screen-only"},[daiquiri.core.create_element("div",{'style':{'marginTop':(15),'marginBottom':"0px",'display':"inline-block",'fontSize':(16)},'className':"col-sm-12"},[(function (){var attrs43860 = (function (){var G__43863 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text1","text/text1",-653651391),"Based on the information you have entered,"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__43863) : ttt.call(null,G__43863));
})();
return daiquiri.core.create_element("span",((cljs.core.map_QMARK_(attrs43860))?daiquiri.interpreter.element_attributes(attrs43860):null),((cljs.core.map_QMARK_(attrs43860))?[" ",predict_prostate.components.button.year_picker(ttt)," ",daiquiri.interpreter.interpret((function (){var G__43865 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text9","text/text9",808987274),"years after diagnosis:"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__43865) : ttt.call(null,G__43865));
})())]:[daiquiri.interpreter.interpret(attrs43860)," ",predict_prostate.components.button.year_picker(ttt)," ",daiquiri.interpreter.interpret((function (){var G__43867 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text9","text/text9",808987274),"years after diagnosis:"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__43867) : ttt.call(null,G__43867));
})())]));
})(),(function (){var attrs43861 = predict_prostate.results.text.emph(cs);
return daiquiri.core.create_element("p",((cljs.core.map_QMARK_(attrs43861))?daiquiri.interpreter.element_attributes(attrs43861):null),((cljs.core.map_QMARK_(attrs43861))?[" ",daiquiri.interpreter.interpret((function (){var G__43869 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text10","text/text10",-1477220547),"out of"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__43869) : ttt.call(null,G__43869));
})())," ",daiquiri.interpreter.interpret(predict_prostate.results.text.emph((100)))," ",daiquiri.interpreter.interpret((function (){var G__43871 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text11","text/text11",-1985706273),"men are alive at"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__43871) : ttt.call(null,G__43871));
})())," ",daiquiri.interpreter.interpret(years)," ",daiquiri.interpreter.interpret((function (){var G__43873 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text12","text/text12",1578344657),"years with"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__43873) : ttt.call(null,G__43873));
})())," ",daiquiri.interpreter.interpret((function (){var G__43875 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text13","text/text13",201858299),predict_prostate.results.text.emph("initial conservative treatment.")], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__43875) : ttt.call(null,G__43875));
})())]:[daiquiri.interpreter.interpret(attrs43861)," ",daiquiri.interpreter.interpret((function (){var G__43877 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text10","text/text10",-1477220547),"out of"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__43877) : ttt.call(null,G__43877));
})())," ",daiquiri.interpreter.interpret(predict_prostate.results.text.emph((100)))," ",daiquiri.interpreter.interpret((function (){var G__43879 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text11","text/text11",-1985706273),"men are alive at"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__43879) : ttt.call(null,G__43879));
})())," ",daiquiri.interpreter.interpret(years)," ",daiquiri.interpreter.interpret((function (){var G__43881 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text12","text/text12",1578344657),"years with"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__43881) : ttt.call(null,G__43881));
})())," ",daiquiri.interpreter.interpret((function (){var G__43883 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text13","text/text13",201858299),predict_prostate.results.text.emph("initial conservative treatment.")], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__43883) : ttt.call(null,G__43883));
})())]));
})(),(cljs.core.truth_(radical_QMARK_)?(function (){var attrs43862 = predict_prostate.results.text.emph(rs);
return daiquiri.core.create_element("p",((cljs.core.map_QMARK_(attrs43862))?daiquiri.interpreter.element_attributes(attrs43862):null),((cljs.core.map_QMARK_(attrs43862))?[" ",daiquiri.interpreter.interpret((function (){var G__43886 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text14","text/text14",881888124),"out of"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__43886) : ttt.call(null,G__43886));
})())," ",daiquiri.interpreter.interpret(predict_prostate.results.text.emph((100)))," ",daiquiri.interpreter.interpret((function (){var G__43888 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text15","text/text15",1059028049),"men treated (an extra"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__43888) : ttt.call(null,G__43888));
})())," ",daiquiri.interpreter.interpret(predict_prostate.results.text.emph(benefit)),") ",daiquiri.interpreter.interpret((function (){var G__43890 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text16","text/text16",-203890799),"are alive because of"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__43890) : ttt.call(null,G__43890));
})())," ",daiquiri.interpreter.interpret((function (){var G__43892 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text17","text/text17",-1309195728),predict_prostate.results.text.emph("radical treatment.")], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__43892) : ttt.call(null,G__43892));
})())]:[daiquiri.interpreter.interpret(attrs43862)," ",daiquiri.interpreter.interpret((function (){var G__43894 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text14","text/text14",881888124),"out of"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__43894) : ttt.call(null,G__43894));
})())," ",daiquiri.interpreter.interpret(predict_prostate.results.text.emph((100)))," ",daiquiri.interpreter.interpret((function (){var G__43896 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text15","text/text15",1059028049),"men treated (an extra"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__43896) : ttt.call(null,G__43896));
})())," ",daiquiri.interpreter.interpret(predict_prostate.results.text.emph(benefit)),") ",daiquiri.interpreter.interpret((function (){var G__43898 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text16","text/text16",-203890799),"are alive because of"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__43898) : ttt.call(null,G__43898));
})())," ",daiquiri.interpreter.interpret((function (){var G__43900 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text17","text/text17",-1309195728),predict_prostate.results.text.emph("radical treatment.")], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__43900) : ttt.call(null,G__43900));
})())]));
})():null)])])]);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$], null),"predict-prostate.results.text/texts");
/**
 * Different models use different treatment widgets, so we need to use these to react to the correct
 *   treatments and lookup the appropriate result-data.
 */
predict_prostate.results.text.extract_data = (function predict_prostate$results$text$extract_data(results,radical_QMARK_){
var one_sum = (function (p1__43901_SHARP_,p2__43902_SHARP_){
return ((100) * ((1) - (p1__43901_SHARP_ + p2__43902_SHARP_)));
});
var radical_survival = cljs.core.map.cljs$core$IFn$_invoke$arity$3(one_sum,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(results,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"radical","radical",1159030213),new cljs.core.Keyword(null,"pred-PC-cum","pred-PC-cum",1965177836)], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(results,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"radical","radical",1159030213),new cljs.core.Keyword(null,"pred-NPC-cum","pred-NPC-cum",-1636287417)], null)));
var conservative_survival = cljs.core.map.cljs$core$IFn$_invoke$arity$3(one_sum,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(results,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"conservative","conservative",-1075714010),new cljs.core.Keyword(null,"pred-PC-cum","pred-PC-cum",1965177836)], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(results,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"conservative","conservative",-1075714010),new cljs.core.Keyword(null,"pred-NPC-cum","pred-NPC-cum",-1636287417)], null)));
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"title","title",636505583),"Overall Survival",new cljs.core.Keyword(null,"subtitle-over","subtitle-over",1867978156),"for men with prostate cancer, 5 and 10 years after diagnosis",new cljs.core.Keyword(null,"subtitle-under","subtitle-under",-1133908191),"years after diagnosis",new cljs.core.Keyword(null,"conservative-survival","conservative-survival",-852356338),conservative_survival,new cljs.core.Keyword(null,"radical-survival","radical-survival",-74207469),radical_survival,new cljs.core.Keyword(null,"radical-benefit","radical-benefit",1730049395),cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__43903_SHARP_,p2__43904_SHARP_){
return (p1__43903_SHARP_ - p2__43904_SHARP_);
}),radical_survival,conservative_survival),new cljs.core.Keyword(null,"dotted-orange","dotted-orange",-573056274),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__43905_SHARP_){
return ((100) * ((1) - p1__43905_SHARP_));
}),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(results,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(radical_QMARK_)?new cljs.core.Keyword(null,"radical","radical",1159030213):new cljs.core.Keyword(null,"conservative","conservative",-1075714010)),new cljs.core.Keyword(null,"NPC-survival","NPC-survival",-1399930619)], null)))], null);
});
predict_prostate.results.text.results_in_text = rum.core.lazy_build(rum.core.build_defc,(function (p__43913){
var map__43914 = p__43913;
var map__43914__$1 = cljs.core.__destructure_map(map__43914);
var printable = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43914__$1,new cljs.core.Keyword(null,"printable","printable",-928999004));
var ttt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43914__$1,new cljs.core.Keyword(null,"ttt","ttt",1858561240));
var year = rum.core.react(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"result-year","result-year",1413238532)));
var radical_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),rum.core.react(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"primary-rx","primary-rx",-1656848904))));
var data = predict_prostate.results.text.extract_data(rum.core.react(predict_prostate.state.run_time.results_cursor),radical_QMARK_);
var text1 = (function (){var G__43915 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text18","text/text18",342067524),"Of the men who would not survive,"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__43915) : ttt.call(null,G__43915));
})();
var text2 = (function (){var G__43916 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text19","text/text19",-1551481809),"would die due to causes not related to prostate cancer."], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__43916) : ttt.call(null,G__43916));
})();
return daiquiri.core.create_element("div",null,[predict_prostate.results.text.texts(year,data,radical_QMARK_,printable,ttt),daiquiri.core.create_element("p",{'style':{'fontSize':(12)},'className':"print-only"},[daiquiri.interpreter.interpret(text1)," ",daiquiri.interpreter.interpret(predict_prostate.results.text.emph((function (){var G__43918 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"dotted-orange","dotted-orange",-573056274).cljs$core$IFn$_invoke$arity$1(data),year);
return (predict_prostate.results.text.round.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.text.round.cljs$core$IFn$_invoke$arity$1(G__43918) : predict_prostate.results.text.round.call(null,G__43918));
})()))," ",daiquiri.interpreter.interpret(text2)]),daiquiri.core.create_element("p",{'style':{'fontSize':(16)},'className':"screen-only"},[daiquiri.interpreter.interpret(text1)," ",daiquiri.interpreter.interpret(predict_prostate.results.text.emph((function (){var G__43922 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"dotted-orange","dotted-orange",-573056274).cljs$core$IFn$_invoke$arity$1(data),year);
return (predict_prostate.results.text.round.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.text.round.cljs$core$IFn$_invoke$arity$1(G__43922) : predict_prostate.results.text.round.call(null,G__43922));
})()))," ",daiquiri.interpreter.interpret(text2)])]);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"predict-prostate.results.text/results-in-text");

//# sourceMappingURL=predict_prostate.results.text.js.map
