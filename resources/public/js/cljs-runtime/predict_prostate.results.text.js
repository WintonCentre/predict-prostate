goog.provide('predict_prostate.results.text');
predict_prostate.results.text.round = Math.round;
predict_prostate.results.text.set_default = (function predict_prostate$results$text$set_default(key){

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (state){
var default_33965 = predict_prostate.state.config.get_input_default(predict_prostate.state.config.input_groups,key);
pubsub.feeds.publish(predict_prostate.state.run_time.input_change(key),default_33965);

return state;
})], null);
});
predict_prostate.results.text.emph = (function predict_prostate$results$text$emph(n){
return n;

});
predict_prostate.results.text.texts = rum.core.build_defc((function (years,data,radical_QMARK_,printable,ttt){
var cs = (function (){var G__33897 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"conservative-survival","conservative-survival",-852356338).cljs$core$IFn$_invoke$arity$1(data),years);
return (predict_prostate.results.text.round.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.text.round.cljs$core$IFn$_invoke$arity$1(G__33897) : predict_prostate.results.text.round.call(null,G__33897));
})();
var rs = (function (){var G__33898 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"radical-survival","radical-survival",-74207469).cljs$core$IFn$_invoke$arity$1(data),years);
return (predict_prostate.results.text.round.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.text.round.cljs$core$IFn$_invoke$arity$1(G__33898) : predict_prostate.results.text.round.call(null,G__33898));
})();
var benefit = (rs - cs);
return React.createElement("div",({"className": "row"}),React.createElement("div",({"className": "print-only"}),React.createElement("div",({"style": ({"marginTop": (0), "marginBottom": "0px", "display": "inline-block", "fontSize": (12)}), "className": "col-sm-12 print-only"}),sablono.interpreter.interpret((function (){var G__33900 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text1","text/text1",-653651391),"Based on the information you have entered,"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33900) : ttt.call(null,G__33900));
})())," ",(function (){var attrs33899 = predict_prostate.results.text.emph(cs);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"p",((cljs.core.map_QMARK_(attrs33899))?sablono.interpreter.attributes(attrs33899):null),((cljs.core.map_QMARK_(attrs33899))?new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",sablono.interpreter.interpret((function (){var G__33901 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text2","text/text2",-2036319681),"out of"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33901) : ttt.call(null,G__33901));
})())," ",sablono.interpreter.interpret(predict_prostate.results.text.emph((100)))," ",sablono.interpreter.interpret((function (){var G__33902 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text3","text/text3",614591440),"men are alive at years with"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33902) : ttt.call(null,G__33902));
})())," ",sablono.interpreter.interpret((function (){var G__33904 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text4","text/text4",306591495),predict_prostate.results.text.emph("initial conservative management.")], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33904) : ttt.call(null,G__33904));
})())], null):new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs33899)," ",sablono.interpreter.interpret((function (){var G__33906 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text2","text/text2",-2036319681),"out of"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33906) : ttt.call(null,G__33906));
})())," ",sablono.interpreter.interpret(predict_prostate.results.text.emph((100)))," ",sablono.interpreter.interpret((function (){var G__33907 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text3","text/text3",614591440),"men are alive at years with"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33907) : ttt.call(null,G__33907));
})())," ",sablono.interpreter.interpret((function (){var G__33908 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text4","text/text4",306591495),predict_prostate.results.text.emph("initial conservative management.")], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33908) : ttt.call(null,G__33908));
})())], null)));
})(),sablono.interpreter.interpret((cljs.core.truth_(radical_QMARK_)?new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),predict_prostate.results.text.emph(rs)," ",(function (){var G__33909 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text5","text/text5",-369961466),"out of"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33909) : ttt.call(null,G__33909));
})()," ",predict_prostate.results.text.emph((100))," ",(function (){var G__33910 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text6","text/text6",1344477451),"men treated (an extra"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33910) : ttt.call(null,G__33910));
})()," ",predict_prostate.results.text.emph(benefit),") ",(function (){var G__33911 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text7","text/text7",1774786329),"are alive because of"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33911) : ttt.call(null,G__33911));
})()," ",(function (){var G__33912 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text8","text/text8",495329353),predict_prostate.results.text.emph("radical treatment.")], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33912) : ttt.call(null,G__33912));
})()], null):null)))),React.createElement("div",({"className": "screen-only"}),React.createElement("div",({"style": ({"marginTop": (15), "marginBottom": "0px", "display": "inline-block", "fontSize": (16)}), "className": "col-sm-12"}),(function (){var attrs33913 = (function (){var G__33919 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text1","text/text1",-653651391),"Based on the information you have entered,"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33919) : ttt.call(null,G__33919));
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs33913))?sablono.interpreter.attributes(attrs33913):null),((cljs.core.map_QMARK_(attrs33913))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",sablono.interpreter.interpret((predict_prostate.components.button.year_picker.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.components.button.year_picker.cljs$core$IFn$_invoke$arity$1(ttt) : predict_prostate.components.button.year_picker.call(null,ttt)))," ",sablono.interpreter.interpret((function (){var G__33920 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text9","text/text9",808987274),"years after diagnosis:"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33920) : ttt.call(null,G__33920));
})())], null):new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs33913)," ",sablono.interpreter.interpret((predict_prostate.components.button.year_picker.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.components.button.year_picker.cljs$core$IFn$_invoke$arity$1(ttt) : predict_prostate.components.button.year_picker.call(null,ttt)))," ",sablono.interpreter.interpret((function (){var G__33921 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text9","text/text9",808987274),"years after diagnosis:"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33921) : ttt.call(null,G__33921));
})())], null)));
})(),(function (){var attrs33914 = predict_prostate.results.text.emph(cs);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"p",((cljs.core.map_QMARK_(attrs33914))?sablono.interpreter.attributes(attrs33914):null),((cljs.core.map_QMARK_(attrs33914))?new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",sablono.interpreter.interpret((function (){var G__33922 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text10","text/text10",-1477220547),"out of"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33922) : ttt.call(null,G__33922));
})())," ",sablono.interpreter.interpret(predict_prostate.results.text.emph((100)))," ",sablono.interpreter.interpret((function (){var G__33923 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text11","text/text11",-1985706273),"men are alive at"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33923) : ttt.call(null,G__33923));
})())," ",sablono.interpreter.interpret(years)," ",sablono.interpreter.interpret((function (){var G__33924 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text12","text/text12",1578344657),"years with"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33924) : ttt.call(null,G__33924));
})())," ",sablono.interpreter.interpret((function (){var G__33925 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text13","text/text13",201858299),predict_prostate.results.text.emph("initial conservative treatment.")], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33925) : ttt.call(null,G__33925));
})())], null):new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs33914)," ",sablono.interpreter.interpret((function (){var G__33926 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text10","text/text10",-1477220547),"out of"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33926) : ttt.call(null,G__33926));
})())," ",sablono.interpreter.interpret(predict_prostate.results.text.emph((100)))," ",sablono.interpreter.interpret((function (){var G__33927 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text11","text/text11",-1985706273),"men are alive at"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33927) : ttt.call(null,G__33927));
})())," ",sablono.interpreter.interpret(years)," ",sablono.interpreter.interpret((function (){var G__33928 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text12","text/text12",1578344657),"years with"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33928) : ttt.call(null,G__33928));
})())," ",sablono.interpreter.interpret((function (){var G__33929 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text13","text/text13",201858299),predict_prostate.results.text.emph("initial conservative treatment.")], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33929) : ttt.call(null,G__33929));
})())], null)));
})(),sablono.interpreter.interpret((cljs.core.truth_(radical_QMARK_)?new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),predict_prostate.results.text.emph(rs)," ",(function (){var G__33930 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text14","text/text14",881888124),"out of"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33930) : ttt.call(null,G__33930));
})()," ",predict_prostate.results.text.emph((100))," ",(function (){var G__33931 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text15","text/text15",1059028049),"men treated (an extra"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33931) : ttt.call(null,G__33931));
})()," ",predict_prostate.results.text.emph(benefit),") ",(function (){var G__33932 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text16","text/text16",-203890799),"are alive because of"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33932) : ttt.call(null,G__33932));
})()," ",(function (){var G__33933 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text17","text/text17",-1309195728),predict_prostate.results.text.emph("radical treatment.")], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33933) : ttt.call(null,G__33933));
})()], null):null)))));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$], null),"texts");
/**
 * Different models use different treatment widgets, so we need to use these to react to the correct
 *   treatments and lookup the appropriate result-data.
 */
predict_prostate.results.text.extract_data = (function predict_prostate$results$text$extract_data(results,radical_QMARK_){
var one_sum = (function (p1__33935_SHARP_,p2__33936_SHARP_){
return ((100) * ((1) - (p1__33935_SHARP_ + p2__33936_SHARP_)));
});
var radical_survival = cljs.core.map.cljs$core$IFn$_invoke$arity$3(one_sum,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(results,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"radical","radical",1159030213),new cljs.core.Keyword(null,"pred-PC-cum","pred-PC-cum",1965177836)], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(results,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"radical","radical",1159030213),new cljs.core.Keyword(null,"pred-NPC-cum","pred-NPC-cum",-1636287417)], null)));
var conservative_survival = cljs.core.map.cljs$core$IFn$_invoke$arity$3(one_sum,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(results,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"conservative","conservative",-1075714010),new cljs.core.Keyword(null,"pred-PC-cum","pred-PC-cum",1965177836)], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(results,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"conservative","conservative",-1075714010),new cljs.core.Keyword(null,"pred-NPC-cum","pred-NPC-cum",-1636287417)], null)));
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"title","title",636505583),"Overall Survival",new cljs.core.Keyword(null,"subtitle-over","subtitle-over",1867978156),"for men with prostate cancer, 5 and 10 years after diagnosis",new cljs.core.Keyword(null,"subtitle-under","subtitle-under",-1133908191),"years after diagnosis",new cljs.core.Keyword(null,"conservative-survival","conservative-survival",-852356338),conservative_survival,new cljs.core.Keyword(null,"radical-survival","radical-survival",-74207469),radical_survival,new cljs.core.Keyword(null,"radical-benefit","radical-benefit",1730049395),cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__33937_SHARP_,p2__33938_SHARP_){
return (p1__33937_SHARP_ - p2__33938_SHARP_);
}),radical_survival,conservative_survival),new cljs.core.Keyword(null,"dotted-orange","dotted-orange",-573056274),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__33939_SHARP_){
return ((100) * ((1) - p1__33939_SHARP_));
}),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(results,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(radical_QMARK_)?new cljs.core.Keyword(null,"radical","radical",1159030213):new cljs.core.Keyword(null,"conservative","conservative",-1075714010)),new cljs.core.Keyword(null,"NPC-survival","NPC-survival",-1399930619)], null)))], null);
});
predict_prostate.results.text.results_in_text = rum.core.build_defc((function (p__33947){
var map__33948 = p__33947;
var map__33948__$1 = cljs.core.__destructure_map(map__33948);
var printable = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33948__$1,new cljs.core.Keyword(null,"printable","printable",-928999004));
var ttt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33948__$1,new cljs.core.Keyword(null,"ttt","ttt",1858561240));
var year = rum.core.react(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"result-year","result-year",1413238532)));
var radical_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),rum.core.react(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"primary-rx","primary-rx",-1656848904))));
var data = predict_prostate.results.text.extract_data(rum.core.react(predict_prostate.state.run_time.results_cursor),radical_QMARK_);
var text1 = (function (){var G__33952 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text18","text/text18",342067524),"Of the men who would not survive,"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33952) : ttt.call(null,G__33952));
})();
var text2 = (function (){var G__33953 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("text","text19","text/text19",-1551481809),"would die due to causes not related to prostate cancer."], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33953) : ttt.call(null,G__33953));
})();
var attrs33943 = (predict_prostate.results.text.texts.cljs$core$IFn$_invoke$arity$5 ? predict_prostate.results.text.texts.cljs$core$IFn$_invoke$arity$5(year,data,radical_QMARK_,printable,ttt) : predict_prostate.results.text.texts.call(null,year,data,radical_QMARK_,printable,ttt));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs33943))?sablono.interpreter.attributes(attrs33943):null),((cljs.core.map_QMARK_(attrs33943))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.createElement("p",({"style": ({"fontSize": (12)}), "className": "print-only"}),sablono.interpreter.interpret(text1)," ",sablono.interpreter.interpret(predict_prostate.results.text.emph((function (){var G__33954 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"dotted-orange","dotted-orange",-573056274).cljs$core$IFn$_invoke$arity$1(data),year);
return (predict_prostate.results.text.round.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.text.round.cljs$core$IFn$_invoke$arity$1(G__33954) : predict_prostate.results.text.round.call(null,G__33954));
})()))," ",sablono.interpreter.interpret(text2)),React.createElement("p",({"style": ({"fontSize": (16)}), "className": "screen-only"}),sablono.interpreter.interpret(text1)," ",sablono.interpreter.interpret(predict_prostate.results.text.emph((function (){var G__33955 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"dotted-orange","dotted-orange",-573056274).cljs$core$IFn$_invoke$arity$1(data),year);
return (predict_prostate.results.text.round.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.text.round.cljs$core$IFn$_invoke$arity$1(G__33955) : predict_prostate.results.text.round.call(null,G__33955));
})()))," ",sablono.interpreter.interpret(text2))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs33943),React.createElement("p",({"style": ({"fontSize": (12)}), "className": "print-only"}),sablono.interpreter.interpret(text1)," ",sablono.interpreter.interpret(predict_prostate.results.text.emph((function (){var G__33961 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"dotted-orange","dotted-orange",-573056274).cljs$core$IFn$_invoke$arity$1(data),year);
return (predict_prostate.results.text.round.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.text.round.cljs$core$IFn$_invoke$arity$1(G__33961) : predict_prostate.results.text.round.call(null,G__33961));
})()))," ",sablono.interpreter.interpret(text2)),React.createElement("p",({"style": ({"fontSize": (16)}), "className": "screen-only"}),sablono.interpreter.interpret(text1)," ",sablono.interpreter.interpret(predict_prostate.results.text.emph((function (){var G__33963 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"dotted-orange","dotted-orange",-573056274).cljs$core$IFn$_invoke$arity$1(data),year);
return (predict_prostate.results.text.round.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.text.round.cljs$core$IFn$_invoke$arity$1(G__33963) : predict_prostate.results.text.round.call(null,G__33963));
})()))," ",sablono.interpreter.interpret(text2))], null)));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"results-in-text");

//# sourceMappingURL=predict_prostate.results.text.js.map
