goog.provide('predict_prostate.results.text');
predict_prostate.results.text.round = Math.round;
predict_prostate.results.text.set_default = (function predict_prostate$results$text$set_default(key){

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (state){
var default_34938 = predict_prostate.state.config.get_input_default(predict_prostate.state.config.input_groups,key);
pubsub.feeds.publish(predict_prostate.state.run_time.input_change(key),default_34938);

return state;
})], null);
});
predict_prostate.results.text.emph = (function predict_prostate$results$text$emph(n){
return n;

});
predict_prostate.results.text.texts = rum.core.lazy_build(rum.core.build_defc,(function (years,data,radical_QMARK_,printable,ttt){
var cs = (function (){var G__34784 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"conservative-survival","conservative-survival",-852356338).cljs$core$IFn$_invoke$arity$1(data),years);
return (predict_prostate.results.text.round.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.text.round.cljs$core$IFn$_invoke$arity$1(G__34784) : predict_prostate.results.text.round.call(null,G__34784));
})();
var rs = (function (){var G__34785 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"radical-survival","radical-survival",-74207469).cljs$core$IFn$_invoke$arity$1(data),years);
return (predict_prostate.results.text.round.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.text.round.cljs$core$IFn$_invoke$arity$1(G__34785) : predict_prostate.results.text.round.call(null,G__34785));
})();
var benefit = (rs - cs);
return daiquiri.core.create_element("div",{'className':"row"},[daiquiri.core.create_element("div",{'className':"print-only"},[daiquiri.core.create_element("div",{'style':{'marginTop':(0),'marginBottom':"0px",'display':"inline-block",'fontSize':(12)},'className':"col-sm-12 print-only"},[daiquiri.interpreter.interpret((function (){var G__34789 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text1","text/text1",-653651391),"Based on the information you have entered,"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__34789) : ttt.call(null,G__34789));
})())," ",(function (){var attrs34786 = predict_prostate.results.text.emph(cs);
return daiquiri.core.create_element("p",((cljs.core.map_QMARK_(attrs34786))?daiquiri.interpreter.element_attributes(attrs34786):null),((cljs.core.map_QMARK_(attrs34786))?[" ",daiquiri.interpreter.interpret((function (){var G__34792 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text2","text/text2",-2036319681),"out of"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__34792) : ttt.call(null,G__34792));
})())," ",daiquiri.interpreter.interpret(predict_prostate.results.text.emph((100)))," ",daiquiri.interpreter.interpret((function (){var G__34794 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text3","text/text3",614591440),"men are alive at years with"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__34794) : ttt.call(null,G__34794));
})())," ",daiquiri.interpreter.interpret((function (){var G__34796 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text4","text/text4",306591495),predict_prostate.results.text.emph("initial conservative management.")], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__34796) : ttt.call(null,G__34796));
})())]:[daiquiri.interpreter.interpret(attrs34786)," ",daiquiri.interpreter.interpret((function (){var G__34798 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text2","text/text2",-2036319681),"out of"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__34798) : ttt.call(null,G__34798));
})())," ",daiquiri.interpreter.interpret(predict_prostate.results.text.emph((100)))," ",daiquiri.interpreter.interpret((function (){var G__34800 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text3","text/text3",614591440),"men are alive at years with"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__34800) : ttt.call(null,G__34800));
})())," ",daiquiri.interpreter.interpret((function (){var G__34802 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text4","text/text4",306591495),predict_prostate.results.text.emph("initial conservative management.")], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__34802) : ttt.call(null,G__34802));
})())]));
})(),(cljs.core.truth_(radical_QMARK_)?(function (){var attrs34787 = predict_prostate.results.text.emph(rs);
return daiquiri.core.create_element("p",((cljs.core.map_QMARK_(attrs34787))?daiquiri.interpreter.element_attributes(attrs34787):null),((cljs.core.map_QMARK_(attrs34787))?[" ",daiquiri.interpreter.interpret((function (){var G__34804 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text5","text/text5",-369961466),"out of"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__34804) : ttt.call(null,G__34804));
})())," ",daiquiri.interpreter.interpret(predict_prostate.results.text.emph((100)))," ",daiquiri.interpreter.interpret((function (){var G__34806 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text6","text/text6",1344477451),"men treated (an extra"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__34806) : ttt.call(null,G__34806));
})())," ",daiquiri.interpreter.interpret(predict_prostate.results.text.emph(benefit)),") ",daiquiri.interpreter.interpret((function (){var G__34808 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text7","text/text7",1774786329),"are alive because of"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__34808) : ttt.call(null,G__34808));
})())," ",daiquiri.interpreter.interpret((function (){var G__34810 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text8","text/text8",495329353),predict_prostate.results.text.emph("radical treatment.")], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__34810) : ttt.call(null,G__34810));
})())]:[daiquiri.interpreter.interpret(attrs34787)," ",daiquiri.interpreter.interpret((function (){var G__34813 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text5","text/text5",-369961466),"out of"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__34813) : ttt.call(null,G__34813));
})())," ",daiquiri.interpreter.interpret(predict_prostate.results.text.emph((100)))," ",daiquiri.interpreter.interpret((function (){var G__34815 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text6","text/text6",1344477451),"men treated (an extra"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__34815) : ttt.call(null,G__34815));
})())," ",daiquiri.interpreter.interpret(predict_prostate.results.text.emph(benefit)),") ",daiquiri.interpreter.interpret((function (){var G__34817 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text7","text/text7",1774786329),"are alive because of"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__34817) : ttt.call(null,G__34817));
})())," ",daiquiri.interpreter.interpret((function (){var G__34821 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text8","text/text8",495329353),predict_prostate.results.text.emph("radical treatment.")], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__34821) : ttt.call(null,G__34821));
})())]));
})():null)])]),daiquiri.core.create_element("div",{'className':"screen-only"},[daiquiri.core.create_element("div",{'style':{'marginTop':(15),'marginBottom':"0px",'display':"inline-block",'fontSize':(16)},'className':"col-sm-12"},[(function (){var attrs34824 = (function (){var G__34828 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text1","text/text1",-653651391),"Based on the information you have entered,"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__34828) : ttt.call(null,G__34828));
})();
return daiquiri.core.create_element("span",((cljs.core.map_QMARK_(attrs34824))?daiquiri.interpreter.element_attributes(attrs34824):null),((cljs.core.map_QMARK_(attrs34824))?[" ",predict_prostate.components.button.year_picker(ttt)," ",daiquiri.interpreter.interpret((function (){var G__34832 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text9","text/text9",808987274),"years after diagnosis:"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__34832) : ttt.call(null,G__34832));
})())]:[daiquiri.interpreter.interpret(attrs34824)," ",predict_prostate.components.button.year_picker(ttt)," ",daiquiri.interpreter.interpret((function (){var G__34834 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text9","text/text9",808987274),"years after diagnosis:"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__34834) : ttt.call(null,G__34834));
})())]));
})(),(function (){var attrs34826 = predict_prostate.results.text.emph(cs);
return daiquiri.core.create_element("p",((cljs.core.map_QMARK_(attrs34826))?daiquiri.interpreter.element_attributes(attrs34826):null),((cljs.core.map_QMARK_(attrs34826))?[" ",daiquiri.interpreter.interpret((function (){var G__34837 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text10","text/text10",-1477220547),"out of"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__34837) : ttt.call(null,G__34837));
})())," ",daiquiri.interpreter.interpret(predict_prostate.results.text.emph((100)))," ",daiquiri.interpreter.interpret((function (){var G__34840 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text11","text/text11",-1985706273),"men are alive at"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__34840) : ttt.call(null,G__34840));
})())," ",daiquiri.interpreter.interpret(years)," ",daiquiri.interpreter.interpret((function (){var G__34842 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text12","text/text12",1578344657),"years with"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__34842) : ttt.call(null,G__34842));
})())," ",daiquiri.interpreter.interpret((function (){var G__34845 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text13","text/text13",201858299),predict_prostate.results.text.emph("initial conservative treatment.")], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__34845) : ttt.call(null,G__34845));
})())]:[daiquiri.interpreter.interpret(attrs34826)," ",daiquiri.interpreter.interpret((function (){var G__34854 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text10","text/text10",-1477220547),"out of"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__34854) : ttt.call(null,G__34854));
})())," ",daiquiri.interpreter.interpret(predict_prostate.results.text.emph((100)))," ",daiquiri.interpreter.interpret((function (){var G__34859 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text11","text/text11",-1985706273),"men are alive at"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__34859) : ttt.call(null,G__34859));
})())," ",daiquiri.interpreter.interpret(years)," ",daiquiri.interpreter.interpret((function (){var G__34862 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text12","text/text12",1578344657),"years with"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__34862) : ttt.call(null,G__34862));
})())," ",daiquiri.interpreter.interpret((function (){var G__34865 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text13","text/text13",201858299),predict_prostate.results.text.emph("initial conservative treatment.")], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__34865) : ttt.call(null,G__34865));
})())]));
})(),(cljs.core.truth_(radical_QMARK_)?(function (){var attrs34827 = predict_prostate.results.text.emph(rs);
return daiquiri.core.create_element("p",((cljs.core.map_QMARK_(attrs34827))?daiquiri.interpreter.element_attributes(attrs34827):null),((cljs.core.map_QMARK_(attrs34827))?[" ",daiquiri.interpreter.interpret((function (){var G__34870 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text14","text/text14",881888124),"out of"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__34870) : ttt.call(null,G__34870));
})())," ",daiquiri.interpreter.interpret(predict_prostate.results.text.emph((100)))," ",daiquiri.interpreter.interpret((function (){var G__34873 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text15","text/text15",1059028049),"men treated (an extra"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__34873) : ttt.call(null,G__34873));
})())," ",daiquiri.interpreter.interpret(predict_prostate.results.text.emph(benefit)),") ",daiquiri.interpreter.interpret((function (){var G__34878 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text16","text/text16",-203890799),"are alive because of"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__34878) : ttt.call(null,G__34878));
})())," ",daiquiri.interpreter.interpret((function (){var G__34880 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text17","text/text17",-1309195728),predict_prostate.results.text.emph("radical treatment.")], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__34880) : ttt.call(null,G__34880));
})())]:[daiquiri.interpreter.interpret(attrs34827)," ",daiquiri.interpreter.interpret((function (){var G__34882 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text14","text/text14",881888124),"out of"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__34882) : ttt.call(null,G__34882));
})())," ",daiquiri.interpreter.interpret(predict_prostate.results.text.emph((100)))," ",daiquiri.interpreter.interpret((function (){var G__34884 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text15","text/text15",1059028049),"men treated (an extra"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__34884) : ttt.call(null,G__34884));
})())," ",daiquiri.interpreter.interpret(predict_prostate.results.text.emph(benefit)),") ",daiquiri.interpreter.interpret((function (){var G__34892 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text16","text/text16",-203890799),"are alive because of"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__34892) : ttt.call(null,G__34892));
})())," ",daiquiri.interpreter.interpret((function (){var G__34894 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text17","text/text17",-1309195728),predict_prostate.results.text.emph("radical treatment.")], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__34894) : ttt.call(null,G__34894));
})())]));
})():null)])])]);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$], null),"predict-prostate.results.text/texts");
/**
 * Different models use different treatment widgets, so we need to use these to react to the correct
 *   treatments and lookup the appropriate result-data.
 */
predict_prostate.results.text.extract_data = (function predict_prostate$results$text$extract_data(results,radical_QMARK_){
var one_sum = (function (p1__34895_SHARP_,p2__34896_SHARP_){
return ((100) * ((1) - (p1__34895_SHARP_ + p2__34896_SHARP_)));
});
var radical_survival = cljs.core.map.cljs$core$IFn$_invoke$arity$3(one_sum,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(results,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"radical","radical",1159030213),new cljs.core.Keyword(null,"pred-PC-cum","pred-PC-cum",1965177836)], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(results,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"radical","radical",1159030213),new cljs.core.Keyword(null,"pred-NPC-cum","pred-NPC-cum",-1636287417)], null)));
var conservative_survival = cljs.core.map.cljs$core$IFn$_invoke$arity$3(one_sum,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(results,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"conservative","conservative",-1075714010),new cljs.core.Keyword(null,"pred-PC-cum","pred-PC-cum",1965177836)], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(results,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"conservative","conservative",-1075714010),new cljs.core.Keyword(null,"pred-NPC-cum","pred-NPC-cum",-1636287417)], null)));
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"title","title",636505583),"Overall Survival",new cljs.core.Keyword(null,"subtitle-over","subtitle-over",1867978156),"for men with prostate cancer, 5 and 10 years after diagnosis",new cljs.core.Keyword(null,"subtitle-under","subtitle-under",-1133908191),"years after diagnosis",new cljs.core.Keyword(null,"conservative-survival","conservative-survival",-852356338),conservative_survival,new cljs.core.Keyword(null,"radical-survival","radical-survival",-74207469),radical_survival,new cljs.core.Keyword(null,"radical-benefit","radical-benefit",1730049395),cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__34897_SHARP_,p2__34898_SHARP_){
return (p1__34897_SHARP_ - p2__34898_SHARP_);
}),radical_survival,conservative_survival),new cljs.core.Keyword(null,"dotted-orange","dotted-orange",-573056274),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__34899_SHARP_){
return ((100) * ((1) - p1__34899_SHARP_));
}),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(results,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(radical_QMARK_)?new cljs.core.Keyword(null,"radical","radical",1159030213):new cljs.core.Keyword(null,"conservative","conservative",-1075714010)),new cljs.core.Keyword(null,"NPC-survival","NPC-survival",-1399930619)], null)))], null);
});
predict_prostate.results.text.results_in_text = rum.core.lazy_build(rum.core.build_defc,(function (p__34902){
var map__34903 = p__34902;
var map__34903__$1 = cljs.core.__destructure_map(map__34903);
var printable = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34903__$1,new cljs.core.Keyword(null,"printable","printable",-928999004));
var ttt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34903__$1,new cljs.core.Keyword(null,"ttt","ttt",1858561240));
var year = rum.core.react(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"result-year","result-year",1413238532)));
var radical_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),rum.core.react(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"primary-rx","primary-rx",-1656848904))));
var data = predict_prostate.results.text.extract_data(rum.core.react(predict_prostate.state.run_time.results_cursor),radical_QMARK_);
var text1 = (function (){var G__34904 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text18","text/text18",342067524),"Of the men who would not survive,"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__34904) : ttt.call(null,G__34904));
})();
var text2 = (function (){var G__34905 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text19","text/text19",-1551481809),"would die due to causes not related to prostate cancer."], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__34905) : ttt.call(null,G__34905));
})();
return daiquiri.core.create_element("div",null,[predict_prostate.results.text.texts(year,data,radical_QMARK_,printable,ttt),daiquiri.core.create_element("p",{'style':{'fontSize':(12)},'className':"print-only"},[daiquiri.interpreter.interpret(text1)," ",daiquiri.interpreter.interpret(predict_prostate.results.text.emph((function (){var G__34916 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"dotted-orange","dotted-orange",-573056274).cljs$core$IFn$_invoke$arity$1(data),year);
return (predict_prostate.results.text.round.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.text.round.cljs$core$IFn$_invoke$arity$1(G__34916) : predict_prostate.results.text.round.call(null,G__34916));
})()))," ",daiquiri.interpreter.interpret(text2)]),daiquiri.core.create_element("p",{'style':{'fontSize':(16)},'className':"screen-only"},[daiquiri.interpreter.interpret(text1)," ",daiquiri.interpreter.interpret(predict_prostate.results.text.emph((function (){var G__34925 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"dotted-orange","dotted-orange",-573056274).cljs$core$IFn$_invoke$arity$1(data),year);
return (predict_prostate.results.text.round.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.text.round.cljs$core$IFn$_invoke$arity$1(G__34925) : predict_prostate.results.text.round.call(null,G__34925));
})()))," ",daiquiri.interpreter.interpret(text2)])]);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"predict-prostate.results.text/results-in-text");

//# sourceMappingURL=predict_prostate.results.text.js.map
