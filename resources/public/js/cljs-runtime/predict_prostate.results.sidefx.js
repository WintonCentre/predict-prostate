goog.provide('predict_prostate.results.sidefx');
predict_prostate.results.sidefx.progress = rum.core.build_defc((function (percent){
return React.createElement("div",({"style": ({"backgroundColor": "#94d3f0"}), "className": "progress"}),React.createElement("div",({"role": "progress-bar", "aria-valuenow": percent, "aria-valuemin": (0), "aria-valuemax": (100), "style": ({"width": percent, "backgroundColor": "#bc3d95"}), "className": "progress-bar"}),(function (){var attrs33578 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(percent);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs33578))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["sr-only"], null)], null),attrs33578], 0))):({"className": "sr-only"})),((cljs.core.map_QMARK_(attrs33578))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["% Complete"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs33578),"% Complete"], null)));
})()));
}),null,"progress");
predict_prostate.results.sidefx.help = rum.core.build_defc((function (help_id){
var attrs33581 = (function (){var G__33582 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"help-id","help-id",-1064550845),help_id], null);
return (predict_prostate.components.button.small_help_button.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.components.button.small_help_button.cljs$core$IFn$_invoke$arity$1(G__33582) : predict_prostate.components.button.small_help_button.call(null,G__33582));
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs33581))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["pull-right"], null)], null),attrs33581], 0))):({"className": "pull-right"})),((cljs.core.map_QMARK_(attrs33581))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs33581)], null)));
}),null,"help");
predict_prostate.results.sidefx.treatment_fills = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"conservative","conservative",-1075714010),"#2222AA",new cljs.core.Keyword(null,"radical","radical",1159030213),"#3DAFEF",new cljs.core.Keyword(null,"radical-harms","radical-harms",-1715343730),"#660044",new cljs.core.Keyword(null,"radiotherapy","radiotherapy",-1259347062),"#CC5CA4"], null);
predict_prostate.results.sidefx.sidefx_header = rum.core.build_defc((function (ttt){
return React.createElement("div",({"style": ({"marginBottom": (15)}), "className": "col-xs-12"}),React.createElement("div",({"style": ({"backgroundColor": predict_prostate.results.util.alison_blue_1, "borderRadius": (3)}), "className": "row"}),React.createElement("h4",({"style": ({"marginLeft": (15)})}),sablono.interpreter.interpret((function (){var G__33589 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","ppho-title","sidefx/ppho-title",1137062973),"Potentially permanent harms of"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33589) : ttt.call(null,G__33589));
})())),React.createElement("div",({"className": "col-sm-6"}),React.createElement("div",({"style": ({"fontSize": (16), "marginBottom": (10)})}),sablono.interpreter.interpret((function (){var G__33595 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),"b1",new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"conservative","conservative",-1075714010).cljs$core$IFn$_invoke$arity$1(predict_prostate.results.sidefx.treatment_fills),new cljs.core.Keyword(null,"r","r",-471384190),(7)], null);
return (predict_prostate.components.primitives.blob.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.components.primitives.blob.cljs$core$IFn$_invoke$arity$1(G__33595) : predict_prostate.components.primitives.blob.call(null,G__33595));
})())," ",sablono.interpreter.interpret((function (){var G__33598 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","cm","sidefx/cm",2013581781),"Conservative management"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33598) : ttt.call(null,G__33598));
})())),React.createElement("div",({"style": ({"fontSize": (16), "marginBottom": (10)})}),sablono.interpreter.interpret((function (){var G__33601 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),"b2",new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"radical-harms","radical-harms",-1715343730).cljs$core$IFn$_invoke$arity$1(predict_prostate.results.sidefx.treatment_fills),new cljs.core.Keyword(null,"r","r",-471384190),(7)], null);
return (predict_prostate.components.primitives.blob.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.components.primitives.blob.cljs$core$IFn$_invoke$arity$1(G__33601) : predict_prostate.components.primitives.blob.call(null,G__33601));
})())," ",sablono.interpreter.interpret((function (){var G__33607 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","rp","sidefx/rp",-1252001846),"Radical prostatectomy"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33607) : ttt.call(null,G__33607));
})())),React.createElement("div",({"style": ({"fontSize": (16)})}),sablono.interpreter.interpret((function (){var G__33611 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),"b3",new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"radiotherapy","radiotherapy",-1259347062).cljs$core$IFn$_invoke$arity$1(predict_prostate.results.sidefx.treatment_fills),new cljs.core.Keyword(null,"r","r",-471384190),(7)], null);
return (predict_prostate.components.primitives.blob.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.components.primitives.blob.cljs$core$IFn$_invoke$arity$1(G__33611) : predict_prostate.components.primitives.blob.call(null,G__33611));
})())," ",sablono.interpreter.interpret((function (){var G__33613 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","rr","sidefx/rr",-1381212698),"Radical Radiotherapy"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33613) : ttt.call(null,G__33613));
})()))),React.createElement("div",({"className": "col-sm-6"}),React.createElement("p",({"style": ({"fontSize": (14)})}),sablono.interpreter.interpret((function (){var G__33619 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","ppho-text1","sidefx/ppho-text1",-581681790),"The following estimates assume that the function is normal before treatment and have been taken from large published studies.\n    The estimates are not individualised to you or your local treatment centre or are they derived from the predict calculator.\n    Your local team may have data specific to your centre which you can ask about."], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33619) : ttt.call(null,G__33619));
})())),React.createElement("p",({"style": ({"fontSize": (14), "color": "#f00"})}),sablono.interpreter.interpret((function (){var G__33634 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","ppho-text2","sidefx/ppho-text2",-983677722),"If you are in the UK, centre by centre provider outcomes are provided by\n     the National Prostate Cancer Audit which you may find useful:"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33634) : ttt.call(null,G__33634));
})())," ",React.createElement("a",({"href": "https://www.npca.org.uk/provider-results/", "target": "_blank"}),"https://www.npca.org.uk/provider-results/"),"."))));
}),null,"sidefx-header");
/**
 * divide n into chunks, returning number of full tens, remaining units, and empty tens after colouring p items
 */
predict_prostate.results.sidefx.chunker = (function predict_prostate$results$sidefx$chunker(n,chunk_size,p){
if((p <= n)){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tens","tens",-2107583828),cljs.core.quot(p,chunk_size),new cljs.core.Keyword(null,"units","units",-533089095),cljs.core.mod(p,chunk_size),new cljs.core.Keyword(null,"tens-empty","tens-empty",1703381257),cljs.core.quot((n - p),chunk_size)], null);
} else {
return alert("invalid (chunk ",n,p,chunk_size,")");
}
});
predict_prostate.results.sidefx.fifty_1 = (function predict_prostate$results$sidefx$fifty_1(p){
return predict_prostate.results.sidefx.chunker((50),(10),(((p > (50)))?(50):p));
});
predict_prostate.results.sidefx.fifty_2 = (function predict_prostate$results$sidefx$fifty_2(p){
return predict_prostate.results.sidefx.chunker((50),(10),(((p > (50)))?(p - (50)):(0)));
});
predict_prostate.results.sidefx.sidefx_bar = rum.core.build_defc((function (p__33658){
var map__33660 = p__33658;
var map__33660__$1 = cljs.core.__destructure_map(map__33660);
var fewer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33660__$1,new cljs.core.Keyword(null,"fewer","fewer",648726198));
var percent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33660__$1,new cljs.core.Keyword(null,"percent","percent",2031453817));
var fill = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33660__$1,new cljs.core.Keyword(null,"fill","fill",883462889));
var tallies_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33660__$1,new cljs.core.Keyword(null,"tallies?","tallies?",-496877074));
var ttt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33660__$1,new cljs.core.Keyword(null,"ttt","ttt",1858561240));
var f1 = predict_prostate.results.sidefx.fifty_1(percent);
var f2 = predict_prostate.results.sidefx.fifty_2(percent);
var hh = predict_prostate.results.sidefx.chunker((100),(10),percent);
var r = (4);
return React.createElement("div",({"className": "row"}),React.createElement("div",({"key": (1), "style": ({"fontSize": "120%", "fontWeight": "bold", "display": "inline-block"}), "className": "col-xs-1"}),React.createElement("span",({"style": ({"width": "100%", "textAlign": "right"})})),(cljs.core.truth_(fewer)?sablono.interpreter.interpret((function (){var G__33670 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","bar-lesst","sidefx/bar-lesst",-1099981635),"Less than"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33670) : ttt.call(null,G__33670));
})()):null)," ",sablono.interpreter.interpret(percent),"% "),(cljs.core.truth_(tallies_QMARK_)?React.createElement("div",({"style": ({"marginTop": (3)}), "className": "col-xs-11"}),React.createElement("div",({"key": (1), "style": ({"width": (220), "display": "inline-block"})}),sablono.interpreter.interpret(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (n){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["t-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join('')], null),(function (){var G__33686 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fill","fill",883462889),fill,new cljs.core.Keyword(null,"r","r",-471384190),r,new cljs.core.Keyword(null,"tally?","tally?",-1847300034),true], null);
return (predict_prostate.components.primitives.blob_10.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.components.primitives.blob_10.cljs$core$IFn$_invoke$arity$1(G__33686) : predict_prostate.components.primitives.blob_10.call(null,G__33686));
})()], null);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tens","tens",-2107583828).cljs$core$IFn$_invoke$arity$1(f1)))),sablono.interpreter.interpret((((new cljs.core.Keyword(null,"units","units",-533089095).cljs$core$IFn$_invoke$arity$1(f1) > (0)))?(function (){var G__33691 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"fill","fill",883462889),fill,new cljs.core.Keyword(null,"r","r",-471384190),r,new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"units","units",-533089095).cljs$core$IFn$_invoke$arity$1(f1),new cljs.core.Keyword(null,"tally?","tally?",-1847300034),true], null);
return (predict_prostate.components.primitives.mixed_10.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.components.primitives.mixed_10.cljs$core$IFn$_invoke$arity$1(G__33691) : predict_prostate.components.primitives.mixed_10.call(null,G__33691));
})():null)),sablono.interpreter.interpret(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (n){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["0-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join('')], null),(function (){var G__33695 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fill","fill",883462889),(cljs.core.truth_(tallies_QMARK_)?"#BBBBBB":"white"),new cljs.core.Keyword(null,"r","r",-471384190),r,new cljs.core.Keyword(null,"tally?","tally?",-1847300034),true], null);
return (predict_prostate.components.primitives.blob_10.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.components.primitives.blob_10.cljs$core$IFn$_invoke$arity$1(G__33695) : predict_prostate.components.primitives.blob_10.call(null,G__33695));
})()], null);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tens-empty","tens-empty",1703381257).cljs$core$IFn$_invoke$arity$1(f1))))),React.createElement("div",({"key": (2), "style": ({"width": (220), "display": "inline-block"})}),sablono.interpreter.interpret(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (n){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["t-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join('')], null),(function (){var G__33715 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fill","fill",883462889),fill,new cljs.core.Keyword(null,"r","r",-471384190),r,new cljs.core.Keyword(null,"tally?","tally?",-1847300034),true], null);
return (predict_prostate.components.primitives.blob_10.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.components.primitives.blob_10.cljs$core$IFn$_invoke$arity$1(G__33715) : predict_prostate.components.primitives.blob_10.call(null,G__33715));
})()], null);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tens","tens",-2107583828).cljs$core$IFn$_invoke$arity$1(f2)))),sablono.interpreter.interpret((((new cljs.core.Keyword(null,"units","units",-533089095).cljs$core$IFn$_invoke$arity$1(f2) > (0)))?(function (){var G__33725 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"fill","fill",883462889),fill,new cljs.core.Keyword(null,"r","r",-471384190),r,new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"units","units",-533089095).cljs$core$IFn$_invoke$arity$1(f2),new cljs.core.Keyword(null,"tally?","tally?",-1847300034),true], null);
return (predict_prostate.components.primitives.mixed_10.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.components.primitives.mixed_10.cljs$core$IFn$_invoke$arity$1(G__33725) : predict_prostate.components.primitives.mixed_10.call(null,G__33725));
})():null)),sablono.interpreter.interpret(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (n){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["0-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join('')], null),(function (){var G__33730 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fill","fill",883462889),(cljs.core.truth_(tallies_QMARK_)?"#BBBBBB":"white"),new cljs.core.Keyword(null,"r","r",-471384190),r,new cljs.core.Keyword(null,"tally?","tally?",-1847300034),true], null);
return (predict_prostate.components.primitives.blob_10.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.components.primitives.blob_10.cljs$core$IFn$_invoke$arity$1(G__33730) : predict_prostate.components.primitives.blob_10.call(null,G__33730));
})()], null);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tens-empty","tens-empty",1703381257).cljs$core$IFn$_invoke$arity$1(f2)))))):(function (){var attrs33676 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (n){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["t-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join('')], null),(function (){var G__33746 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fill","fill",883462889),fill,new cljs.core.Keyword(null,"r","r",-471384190),r], null);
return (predict_prostate.components.primitives.blob_10.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.components.primitives.blob_10.cljs$core$IFn$_invoke$arity$1(G__33746) : predict_prostate.components.primitives.blob_10.call(null,G__33746));
})()], null);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tens","tens",-2107583828).cljs$core$IFn$_invoke$arity$1(hh)));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs33676))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["col-xs-12"], null)], null),attrs33676], 0))):({"className": "col-xs-12"})),((cljs.core.map_QMARK_(attrs33676))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret((((new cljs.core.Keyword(null,"units","units",-533089095).cljs$core$IFn$_invoke$arity$1(hh) > (0)))?(function (){var G__33787 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fill","fill",883462889),fill,new cljs.core.Keyword(null,"r","r",-471384190),r,new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"units","units",-533089095).cljs$core$IFn$_invoke$arity$1(hh)], null);
return (predict_prostate.components.primitives.mixed_10.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.components.primitives.mixed_10.cljs$core$IFn$_invoke$arity$1(G__33787) : predict_prostate.components.primitives.mixed_10.call(null,G__33787));
})():null)),sablono.interpreter.interpret(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (n){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["0-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join('')], null),(function (){var G__33799 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fill","fill",883462889),"white",new cljs.core.Keyword(null,"r","r",-471384190),r], null);
return (predict_prostate.components.primitives.blob_10.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.components.primitives.blob_10.cljs$core$IFn$_invoke$arity$1(G__33799) : predict_prostate.components.primitives.blob_10.call(null,G__33799));
})()], null);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tens-empty","tens-empty",1703381257).cljs$core$IFn$_invoke$arity$1(hh))))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs33676),sablono.interpreter.interpret((((new cljs.core.Keyword(null,"units","units",-533089095).cljs$core$IFn$_invoke$arity$1(hh) > (0)))?(function (){var G__33800 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fill","fill",883462889),fill,new cljs.core.Keyword(null,"r","r",-471384190),r,new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"units","units",-533089095).cljs$core$IFn$_invoke$arity$1(hh)], null);
return (predict_prostate.components.primitives.mixed_10.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.components.primitives.mixed_10.cljs$core$IFn$_invoke$arity$1(G__33800) : predict_prostate.components.primitives.mixed_10.call(null,G__33800));
})():null)),sablono.interpreter.interpret(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (n){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["0-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join('')], null),(function (){var G__33801 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fill","fill",883462889),"white",new cljs.core.Keyword(null,"r","r",-471384190),r], null);
return (predict_prostate.components.primitives.blob_10.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.components.primitives.blob_10.cljs$core$IFn$_invoke$arity$1(G__33801) : predict_prostate.components.primitives.blob_10.call(null,G__33801));
})()], null);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tens-empty","tens-empty",1703381257).cljs$core$IFn$_invoke$arity$1(hh))))], null)));
})()));
}),null,"sidefx-bar");
predict_prostate.results.sidefx.fewer_helper = rum.core.build_defc((function() {
var G__34027 = null;
var G__34027__2 = (function (prefix,ttt){
return sablono.interpreter.interpret((predict_prostate.results.sidefx.fewer_helper.cljs$core$IFn$_invoke$arity$3 ? predict_prostate.results.sidefx.fewer_helper.cljs$core$IFn$_invoke$arity$3(prefix,"",ttt) : predict_prostate.results.sidefx.fewer_helper.call(null,prefix,"",ttt)));
});
var G__34027__3 = (function (prefix,n,ttt){
var attrs33802 = prefix;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs33802))?sablono.interpreter.attributes(attrs33802):null),((cljs.core.map_QMARK_(attrs33802))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs33803 = (function (){var G__33807 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","fewer","sidefx/fewer",1616828099),"fewer than"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33807) : ttt.call(null,G__33807));
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"b",((cljs.core.map_QMARK_(attrs33803))?sablono.interpreter.attributes(attrs33803):null),((cljs.core.map_QMARK_(attrs33803))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",(cljs.core.truth_(n)?(function (){var attrs33808 = n;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs33808))?sablono.interpreter.attributes(attrs33808):null),((cljs.core.map_QMARK_(attrs33808))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [" "], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs33808)," "], null)));
})():"")], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs33803)," ",(cljs.core.truth_(n)?(function (){var attrs33812 = n;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs33812))?sablono.interpreter.attributes(attrs33812):null),((cljs.core.map_QMARK_(attrs33812))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [" "], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs33812)," "], null)));
})():"")], null)));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs33802),(function (){var attrs33804 = (function (){var G__33818 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","fewer","sidefx/fewer",1616828099),"fewer than"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33818) : ttt.call(null,G__33818));
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"b",((cljs.core.map_QMARK_(attrs33804))?sablono.interpreter.attributes(attrs33804):null),((cljs.core.map_QMARK_(attrs33804))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",(cljs.core.truth_(n)?(function (){var attrs33820 = n;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs33820))?sablono.interpreter.attributes(attrs33820):null),((cljs.core.map_QMARK_(attrs33820))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [" "], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs33820)," "], null)));
})():"")], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs33804)," ",(cljs.core.truth_(n)?(function (){var attrs33831 = n;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs33831))?sablono.interpreter.attributes(attrs33831):null),((cljs.core.map_QMARK_(attrs33831))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [" "], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs33831)," "], null)));
})():"")], null)));
})()], null)));
});
G__34027 = function(prefix,n,ttt){
switch(arguments.length){
case 2:
return G__34027__2.call(this,prefix,n);
case 3:
return G__34027__3.call(this,prefix,n,ttt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__34027.cljs$core$IFn$_invoke$arity$2 = G__34027__2;
G__34027.cljs$core$IFn$_invoke$arity$3 = G__34027__3;
return G__34027;
})()
,null,"fewer-helper");
predict_prostate.results.sidefx.sidefx_linear = rum.core.build_defc((function (p__33832){
var map__33833 = p__33832;
var map__33833__$1 = cljs.core.__destructure_map(map__33833);
var treatment = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33833__$1,new cljs.core.Keyword(null,"treatment","treatment",515251816));
var prefix = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33833__$1,new cljs.core.Keyword(null,"prefix","prefix",-265908465));
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33833__$1,new cljs.core.Keyword(null,"n","n",562130025));
var fewer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33833__$1,new cljs.core.Keyword(null,"fewer","fewer",648726198));
var tallies_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33833__$1,new cljs.core.Keyword(null,"tallies?","tallies?",-496877074));
var ttt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33833__$1,new cljs.core.Keyword(null,"ttt","ttt",1858561240));
var quantity = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),Math.round(n)," ",(function (){var G__33834 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","lin-in","sidefx/lin-in",554234320),"in"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33834) : ttt.call(null,G__33834));
})()," 100 "], null);
return React.createElement("div",null,(function (){var attrs33835 = prefix;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs33835))?sablono.interpreter.attributes(attrs33835):null),((cljs.core.map_QMARK_(attrs33835))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(fewer)?(function (){var attrs33845 = quantity;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"b",((cljs.core.map_QMARK_(attrs33845))?sablono.interpreter.attributes(attrs33845):null),((cljs.core.map_QMARK_(attrs33845))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs33845)], null)));
})():sablono.interpreter.interpret(quantity))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs33835),(cljs.core.truth_(fewer)?(function (){var attrs33849 = quantity;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"b",((cljs.core.map_QMARK_(attrs33849))?sablono.interpreter.attributes(attrs33849):null),((cljs.core.map_QMARK_(attrs33849))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs33849)], null)));
})():sablono.interpreter.interpret(quantity))], null)));
})(),(function (){var attrs33836 = (function (){var G__33851 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","lin-aft","sidefx/lin-aft",1268874602),"men have this issue after 3 years."], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33851) : ttt.call(null,G__33851));
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs33836))?sablono.interpreter.attributes(attrs33836):null),((cljs.core.map_QMARK_(attrs33836))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs33836)], null)));
})(),sablono.interpreter.interpret((function (){var G__33853 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fewer","fewer",648726198),fewer,new cljs.core.Keyword(null,"percent","percent",2031453817),n,new cljs.core.Keyword(null,"fill","fill",883462889),(treatment.cljs$core$IFn$_invoke$arity$1 ? treatment.cljs$core$IFn$_invoke$arity$1(predict_prostate.results.sidefx.treatment_fills) : treatment.call(null,predict_prostate.results.sidefx.treatment_fills)),new cljs.core.Keyword(null,"tallies?","tallies?",-496877074),tallies_QMARK_,new cljs.core.Keyword(null,"ttt","ttt",1858561240),ttt], null);
return (predict_prostate.results.sidefx.sidefx_bar.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.sidefx.sidefx_bar.cljs$core$IFn$_invoke$arity$1(G__33853) : predict_prostate.results.sidefx.sidefx_bar.call(null,G__33853));
})()),React.createElement("br",null));
}),null,"sidefx-linear");
predict_prostate.results.sidefx.sidefx_content = rum.core.build_defc((function() { 
var G__34028__delegate = function (p__33859,content){
var map__33860 = p__33859;
var map__33860__$1 = cljs.core.__destructure_map(map__33860);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33860__$1,new cljs.core.Keyword(null,"title","title",636505583));
var sub_title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33860__$1,new cljs.core.Keyword(null,"sub-title","sub-title",-1781490288));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33860__$1,new cljs.core.Keyword(null,"source","source",-433931539));
return React.createElement("div",({"style": ({"padding": "0 15px 0 15px", "fontSize": (16)})}),(function (){var attrs33863 = title;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"h4",((cljs.core.map_QMARK_(attrs33863))?sablono.interpreter.attributes(attrs33863):null),((cljs.core.map_QMARK_(attrs33863))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs33863)], null)));
})(),(function (){var attrs33864 = sub_title;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"h5",((cljs.core.map_QMARK_(attrs33864))?sablono.interpreter.attributes(attrs33864):null),((cljs.core.map_QMARK_(attrs33864))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs33864)], null)));
})(),sablono.interpreter.interpret(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__33856_SHARP_,p2__33855_SHARP_){
return rum.core.with_key(p2__33855_SHARP_,p1__33856_SHARP_);
}),content)),sablono.interpreter.interpret((cljs.core.truth_(source)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".alert.alert-info",".alert.alert-info",1970443868),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(12)], null)], null),(source.cljs$core$IFn$_invoke$arity$0 ? source.cljs$core$IFn$_invoke$arity$0() : source.call(null))], null):null)));
};
var G__34028 = function (p__33859,var_args){
var content = null;
if (arguments.length > 1) {
var G__34029__i = 0, G__34029__a = new Array(arguments.length -  1);
while (G__34029__i < G__34029__a.length) {G__34029__a[G__34029__i] = arguments[G__34029__i + 1]; ++G__34029__i;}
  content = new cljs.core.IndexedSeq(G__34029__a,0,null);
} 
return G__34028__delegate.call(this,p__33859,content);};
G__34028.cljs$lang$maxFixedArity = 1;
G__34028.cljs$lang$applyTo = (function (arglist__34030){
var p__33859 = cljs.core.first(arglist__34030);
var content = cljs.core.rest(arglist__34030);
return G__34028__delegate(p__33859,content);
});
G__34028.cljs$core$IFn$_invoke$arity$variadic = G__34028__delegate;
return G__34028;
})()
,null,"sidefx-content");
predict_prostate.results.sidefx.erectile_source = rum.core.build_defc((function (ttt){
var attrs33873 = (function (){var G__33880 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","eresrc-text1","sidefx/eresrc-text1",1406494822),"Estimates for erectile dysfunction have been derived from a large American study. The full research can be\n        read here:"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33880) : ttt.call(null,G__33880));
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs33873))?sablono.interpreter.attributes(attrs33873):null),((cljs.core.map_QMARK_(attrs33873))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",React.createElement("a",({"href": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5782813/", "target": "_blank"}),"https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5782813/")], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs33873)," ",React.createElement("a",({"href": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5782813/", "target": "_blank"}),"https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5782813/")], null)));
}),null,"erectile-source");
predict_prostate.results.sidefx.incontinence_source = rum.core.build_defc((function (ttt){
var attrs33881 = (function (){var G__33888 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","incsrc-text1","sidefx/incsrc-text1",-1325551852),"Estimates for incontinence dysfunction have been taken from the UK-based Prostate Testing for\n       Cancer and Treatment (ProtecT) trial. The full research can be read here:"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33888) : ttt.call(null,G__33888));
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs33881))?sablono.interpreter.attributes(attrs33881):null),((cljs.core.map_QMARK_(attrs33881))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",React.createElement("a",({"href": "https://www.nejm.org/doi/full/10.1056/NEJMoa1606221", "target": "_blank"}),"https://www.nejm.org/doi/full/10.1056/NEJMoa1606221")], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs33881)," ",React.createElement("a",({"href": "https://www.nejm.org/doi/full/10.1056/NEJMoa1606221", "target": "_blank"}),"https://www.nejm.org/doi/full/10.1056/NEJMoa1606221")], null)));
}),null,"incontinence-source");
predict_prostate.results.sidefx.bowel_source = rum.core.build_defc((function (ttt){
return React.createElement("span",({"fontSize": (12)}),sablono.interpreter.interpret((function (){var G__33903 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","bowsrc-text1","sidefx/bowsrc-text1",-2008110457),"Estimates for bowel dysfunction have been taken from the UK-based Prostate Testing for\n       Cancer and Treatment (ProtecT) trial. The full research can be read here:"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33903) : ttt.call(null,G__33903));
})())," ",React.createElement("a",({"href": "https://www.nejm.org/doi/full/10.1056/NEJMoa1606221", "target": "_blank"}),"https://www.nejm.org/doi/full/10.1056/NEJMoa1606221"));
}),null,"bowel-source");
predict_prostate.results.sidefx.sidefx_discrete = rum.core.build_defc((function (tallies_QMARK_,ttt){
return React.createElement("div",({"style": ({"border": "1px solid #CCCCCC", "borderRadius": (3), "fontSize": (16)})}),sablono.interpreter.interpret((predict_prostate.results.sidefx.sidefx_header.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.sidefx.sidefx_header.cljs$core$IFn$_invoke$arity$1(ttt) : predict_prostate.results.sidefx.sidefx_header.call(null,ttt))),sablono.interpreter.interpret((function (){var G__33905 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),(function (){var G__33910 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","eredys-title","sidefx/eredys-title",-967487873),"Erectile dysfunction"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33910) : ttt.call(null,G__33910));
})(),new cljs.core.Keyword(null,"sub-title","sub-title",-1781490288),(function (){var G__33911 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","eredys-subtitle","sidefx/eredys-subtitle",-814812706),"Defined as: 'Erections insufficient for intercourse'"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33911) : ttt.call(null,G__33911));
})(),new cljs.core.Keyword(null,"source","source",-433931539),(function (){
return (predict_prostate.results.sidefx.erectile_source.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.sidefx.erectile_source.cljs$core$IFn$_invoke$arity$1(ttt) : predict_prostate.results.sidefx.erectile_source.call(null,ttt));
})], null);
var G__33906 = (function (){var G__33912 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"treatment","treatment",515251816),new cljs.core.Keyword(null,"conservative","conservative",-1075714010),new cljs.core.Keyword(null,"prefix","prefix",-265908465),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(function (){var G__33913 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","with","sidefx/with",243394541),"With"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33913) : ttt.call(null,G__33913));
})()," ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"conservative","conservative",-1075714010).cljs$core$IFn$_invoke$arity$1(predict_prostate.results.sidefx.treatment_fills)], null)], null),(function (){var G__33914 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","cons-man","sidefx/cons-man",552309001),"conservative management,"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33914) : ttt.call(null,G__33914));
})()], null)," ",(function (){var G__33915 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","about","sidefx/about",-2035617818),"about"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33915) : ttt.call(null,G__33915));
})()," "], null),new cljs.core.Keyword(null,"n","n",562130025),(27),new cljs.core.Keyword(null,"tallies?","tallies?",-496877074),tallies_QMARK_,new cljs.core.Keyword(null,"ttt","ttt",1858561240),ttt], null);
return (predict_prostate.results.sidefx.sidefx_linear.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.sidefx.sidefx_linear.cljs$core$IFn$_invoke$arity$1(G__33912) : predict_prostate.results.sidefx.sidefx_linear.call(null,G__33912));
})();
var G__33907 = (function (){var G__33916 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"treatment","treatment",515251816),new cljs.core.Keyword(null,"radical-harms","radical-harms",-1715343730),new cljs.core.Keyword(null,"prefix","prefix",-265908465),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(function (){var G__33919 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","with","sidefx/with",243394541),"With"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33919) : ttt.call(null,G__33919));
})()," ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"radical-harms","radical-harms",-1715343730).cljs$core$IFn$_invoke$arity$1(predict_prostate.results.sidefx.treatment_fills)], null)], null),(function (){var G__33920 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","nsrp","sidefx/nsrp",-4133850),"nerve-sparing radical prostatectomy,"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33920) : ttt.call(null,G__33920));
})()], null)," ",(function (){var G__33921 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","about","sidefx/about",-2035617818),"about"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33921) : ttt.call(null,G__33921));
})()," "], null),new cljs.core.Keyword(null,"n","n",562130025),(56),new cljs.core.Keyword(null,"tallies?","tallies?",-496877074),tallies_QMARK_,new cljs.core.Keyword(null,"ttt","ttt",1858561240),ttt], null);
return (predict_prostate.results.sidefx.sidefx_linear.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.sidefx.sidefx_linear.cljs$core$IFn$_invoke$arity$1(G__33916) : predict_prostate.results.sidefx.sidefx_linear.call(null,G__33916));
})();
var G__33908 = (function (){var G__33922 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"treatment","treatment",515251816),new cljs.core.Keyword(null,"radical-harms","radical-harms",-1715343730),new cljs.core.Keyword(null,"prefix","prefix",-265908465),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(function (){var G__33927 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","with","sidefx/with",243394541),"With"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33927) : ttt.call(null,G__33927));
})()," ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"radical-harms","radical-harms",-1715343730).cljs$core$IFn$_invoke$arity$1(predict_prostate.results.sidefx.treatment_fills)], null)], null),(function (){var G__33928 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","nnsrp","sidefx/nnsrp",1026763627),"non-nerve-sparing radical prostatectomy,"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33928) : ttt.call(null,G__33928));
})()], null)," ",(function (){var G__33929 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","about","sidefx/about",-2035617818),"about"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33929) : ttt.call(null,G__33929));
})()," "], null),new cljs.core.Keyword(null,"n","n",562130025),(66),new cljs.core.Keyword(null,"tallies?","tallies?",-496877074),tallies_QMARK_,new cljs.core.Keyword(null,"ttt","ttt",1858561240),ttt], null);
return (predict_prostate.results.sidefx.sidefx_linear.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.sidefx.sidefx_linear.cljs$core$IFn$_invoke$arity$1(G__33922) : predict_prostate.results.sidefx.sidefx_linear.call(null,G__33922));
})();
var G__33909 = (function (){var G__33930 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"treatment","treatment",515251816),new cljs.core.Keyword(null,"radiotherapy","radiotherapy",-1259347062),new cljs.core.Keyword(null,"prefix","prefix",-265908465),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(function (){var G__33931 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","with","sidefx/with",243394541),"With"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33931) : ttt.call(null,G__33931));
})()," ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"radiotherapy","radiotherapy",-1259347062).cljs$core$IFn$_invoke$arity$1(predict_prostate.results.sidefx.treatment_fills)], null)], null),(function (){var G__33932 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","radio","sidefx/radio",-450230605),"radiotherapy,"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33932) : ttt.call(null,G__33932));
})()], null)," ",(function (){var G__33933 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","about","sidefx/about",-2035617818),"about"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33933) : ttt.call(null,G__33933));
})()," "], null),new cljs.core.Keyword(null,"n","n",562130025),(39),new cljs.core.Keyword(null,"tallies?","tallies?",-496877074),tallies_QMARK_,new cljs.core.Keyword(null,"ttt","ttt",1858561240),ttt], null);
return (predict_prostate.results.sidefx.sidefx_linear.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.sidefx.sidefx_linear.cljs$core$IFn$_invoke$arity$1(G__33930) : predict_prostate.results.sidefx.sidefx_linear.call(null,G__33930));
})();
return (predict_prostate.results.sidefx.sidefx_content.cljs$core$IFn$_invoke$arity$5 ? predict_prostate.results.sidefx.sidefx_content.cljs$core$IFn$_invoke$arity$5(G__33905,G__33906,G__33907,G__33908,G__33909) : predict_prostate.results.sidefx.sidefx_content.call(null,G__33905,G__33906,G__33907,G__33908,G__33909));
})()),sablono.interpreter.interpret((function (){var G__33934 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),(function (){var G__33941 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","incon-title","sidefx/incon-title",-983966664),"Incontinence"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33941) : ttt.call(null,G__33941));
})(),new cljs.core.Keyword(null,"sub-title","sub-title",-1781490288),(function (){var G__33942 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","incon-subtitle","sidefx/incon-subtitle",625073468),"Defined as: 'Wore one or more pads in the last 4 weeks'"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33942) : ttt.call(null,G__33942));
})(),new cljs.core.Keyword(null,"source","source",-433931539),(function (){
return (predict_prostate.results.sidefx.incontinence_source.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.sidefx.incontinence_source.cljs$core$IFn$_invoke$arity$1(ttt) : predict_prostate.results.sidefx.incontinence_source.call(null,ttt));
})], null);
var G__33935 = (function (){var G__33943 = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"treatment","treatment",515251816),new cljs.core.Keyword(null,"conservative","conservative",-1075714010),new cljs.core.Keyword(null,"fewer","fewer",648726198),true,new cljs.core.Keyword(null,"prefix","prefix",-265908465),(function (){var G__33944 = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(function (){var G__33946 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","with","sidefx/with",243394541),"With"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33946) : ttt.call(null,G__33946));
})()," ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"conservative","conservative",-1075714010).cljs$core$IFn$_invoke$arity$1(predict_prostate.results.sidefx.treatment_fills)], null)], null),(function (){var G__33947 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","cons-man","sidefx/cons-man",552309001),"conservative management,"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33947) : ttt.call(null,G__33947));
})()], null)," "], null);
var G__33945 = ttt;
return (predict_prostate.results.sidefx.fewer_helper.cljs$core$IFn$_invoke$arity$2 ? predict_prostate.results.sidefx.fewer_helper.cljs$core$IFn$_invoke$arity$2(G__33944,G__33945) : predict_prostate.results.sidefx.fewer_helper.call(null,G__33944,G__33945));
})(),new cljs.core.Keyword(null,"n","n",562130025),(1),new cljs.core.Keyword(null,"tallies?","tallies?",-496877074),tallies_QMARK_,new cljs.core.Keyword(null,"ttt","ttt",1858561240),ttt], null);
return (predict_prostate.results.sidefx.sidefx_linear.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.sidefx.sidefx_linear.cljs$core$IFn$_invoke$arity$1(G__33943) : predict_prostate.results.sidefx.sidefx_linear.call(null,G__33943));
})();
var G__33936 = (function (){var G__33948 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"treatment","treatment",515251816),new cljs.core.Keyword(null,"radical-harms","radical-harms",-1715343730),new cljs.core.Keyword(null,"prefix","prefix",-265908465),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(function (){var G__33949 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","with","sidefx/with",243394541),"With"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33949) : ttt.call(null,G__33949));
})()," ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"radical-harms","radical-harms",-1715343730).cljs$core$IFn$_invoke$arity$1(predict_prostate.results.sidefx.treatment_fills)], null)], null),(function (){var G__33950 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","radp","sidefx/radp",320511672),"radical prostatectomy,"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33950) : ttt.call(null,G__33950));
})()], null)," ",(function (){var G__33954 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","about","sidefx/about",-2035617818),"about"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33954) : ttt.call(null,G__33954));
})()," "], null),new cljs.core.Keyword(null,"n","n",562130025),(20),new cljs.core.Keyword(null,"tallies?","tallies?",-496877074),tallies_QMARK_,new cljs.core.Keyword(null,"ttt","ttt",1858561240),ttt], null);
return (predict_prostate.results.sidefx.sidefx_linear.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.sidefx.sidefx_linear.cljs$core$IFn$_invoke$arity$1(G__33948) : predict_prostate.results.sidefx.sidefx_linear.call(null,G__33948));
})();
var G__33937 = (function (){var G__33955 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"treatment","treatment",515251816),new cljs.core.Keyword(null,"radiotherapy","radiotherapy",-1259347062),new cljs.core.Keyword(null,"prefix","prefix",-265908465),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(function (){var G__33956 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","with","sidefx/with",243394541),"With"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33956) : ttt.call(null,G__33956));
})()," ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"radiotherapy","radiotherapy",-1259347062).cljs$core$IFn$_invoke$arity$1(predict_prostate.results.sidefx.treatment_fills)], null)], null),(function (){var G__33957 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","radio","sidefx/radio",-450230605),"radiotherapy,"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33957) : ttt.call(null,G__33957));
})()], null)," ",(function (){var G__33958 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","about","sidefx/about",-2035617818),"about"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33958) : ttt.call(null,G__33958));
})()," "], null),new cljs.core.Keyword(null,"n","n",562130025),(3),new cljs.core.Keyword(null,"tallies?","tallies?",-496877074),tallies_QMARK_,new cljs.core.Keyword(null,"ttt","ttt",1858561240),ttt], null);
return (predict_prostate.results.sidefx.sidefx_linear.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.sidefx.sidefx_linear.cljs$core$IFn$_invoke$arity$1(G__33955) : predict_prostate.results.sidefx.sidefx_linear.call(null,G__33955));
})();
return (predict_prostate.results.sidefx.sidefx_content.cljs$core$IFn$_invoke$arity$4 ? predict_prostate.results.sidefx.sidefx_content.cljs$core$IFn$_invoke$arity$4(G__33934,G__33935,G__33936,G__33937) : predict_prostate.results.sidefx.sidefx_content.call(null,G__33934,G__33935,G__33936,G__33937));
})()),sablono.interpreter.interpret((function (){var G__33959 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),(function (){var G__33963 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","bowiss-title","sidefx/bowiss-title",-275898307),"Bowel issues"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33963) : ttt.call(null,G__33963));
})(),new cljs.core.Keyword(null,"sub-title","sub-title",-1781490288),(function (){var G__33964 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","bowiss-subtitle","sidefx/bowiss-subtitle",-1316088249),"Defined as: 'Bloody stools about half the time or more frequently'"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33964) : ttt.call(null,G__33964));
})(),new cljs.core.Keyword(null,"source","source",-433931539),(function (){
return (predict_prostate.results.sidefx.bowel_source.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.sidefx.bowel_source.cljs$core$IFn$_invoke$arity$1(ttt) : predict_prostate.results.sidefx.bowel_source.call(null,ttt));
})], null);
var G__33960 = (function (){var G__33965 = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"treatment","treatment",515251816),new cljs.core.Keyword(null,"conservative","conservative",-1075714010),new cljs.core.Keyword(null,"prefix","prefix",-265908465),(function (){var G__33966 = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(function (){var G__33968 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","with","sidefx/with",243394541),"With"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33968) : ttt.call(null,G__33968));
})()," ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"conservative","conservative",-1075714010).cljs$core$IFn$_invoke$arity$1(predict_prostate.results.sidefx.treatment_fills)], null)], null),(function (){var G__33969 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","cons-man","sidefx/cons-man",552309001),"conservative management,"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33969) : ttt.call(null,G__33969));
})()], null)," "], null);
var G__33967 = ttt;
return (predict_prostate.results.sidefx.fewer_helper.cljs$core$IFn$_invoke$arity$2 ? predict_prostate.results.sidefx.fewer_helper.cljs$core$IFn$_invoke$arity$2(G__33966,G__33967) : predict_prostate.results.sidefx.fewer_helper.call(null,G__33966,G__33967));
})(),new cljs.core.Keyword(null,"fewer","fewer",648726198),true,new cljs.core.Keyword(null,"n","n",562130025),(2),new cljs.core.Keyword(null,"tallies?","tallies?",-496877074),tallies_QMARK_,new cljs.core.Keyword(null,"ttt","ttt",1858561240),ttt], null);
return (predict_prostate.results.sidefx.sidefx_linear.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.sidefx.sidefx_linear.cljs$core$IFn$_invoke$arity$1(G__33965) : predict_prostate.results.sidefx.sidefx_linear.call(null,G__33965));
})();
var G__33961 = (function (){var G__33970 = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"treatment","treatment",515251816),new cljs.core.Keyword(null,"radical-harms","radical-harms",-1715343730),new cljs.core.Keyword(null,"prefix","prefix",-265908465),(function (){var G__33971 = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(function (){var G__33973 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","with","sidefx/with",243394541),"With"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33973) : ttt.call(null,G__33973));
})()," ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"radical-harms","radical-harms",-1715343730).cljs$core$IFn$_invoke$arity$1(predict_prostate.results.sidefx.treatment_fills)], null)], null),(function (){var G__33974 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","radp","sidefx/radp",320511672),"radical prostatectomy,"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33974) : ttt.call(null,G__33974));
})()], null)," "], null);
var G__33972 = ttt;
return (predict_prostate.results.sidefx.fewer_helper.cljs$core$IFn$_invoke$arity$2 ? predict_prostate.results.sidefx.fewer_helper.cljs$core$IFn$_invoke$arity$2(G__33971,G__33972) : predict_prostate.results.sidefx.fewer_helper.call(null,G__33971,G__33972));
})(),new cljs.core.Keyword(null,"fewer","fewer",648726198),true,new cljs.core.Keyword(null,"n","n",562130025),(2),new cljs.core.Keyword(null,"tallies?","tallies?",-496877074),tallies_QMARK_,new cljs.core.Keyword(null,"ttt","ttt",1858561240),ttt], null);
return (predict_prostate.results.sidefx.sidefx_linear.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.sidefx.sidefx_linear.cljs$core$IFn$_invoke$arity$1(G__33970) : predict_prostate.results.sidefx.sidefx_linear.call(null,G__33970));
})();
var G__33962 = (function (){var G__33975 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"treatment","treatment",515251816),new cljs.core.Keyword(null,"radiotherapy","radiotherapy",-1259347062),new cljs.core.Keyword(null,"prefix","prefix",-265908465),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(function (){var G__33976 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","with","sidefx/with",243394541),"With"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33976) : ttt.call(null,G__33976));
})()," ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"radiotherapy","radiotherapy",-1259347062).cljs$core$IFn$_invoke$arity$1(predict_prostate.results.sidefx.treatment_fills)], null)], null),(function (){var G__33979 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","radio","sidefx/radio",-450230605),"radiotherapy,"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33979) : ttt.call(null,G__33979));
})()], null)," ",(function (){var G__33981 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","about","sidefx/about",-2035617818),"about"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33981) : ttt.call(null,G__33981));
})()," "], null),new cljs.core.Keyword(null,"n","n",562130025),(7),new cljs.core.Keyword(null,"tallies?","tallies?",-496877074),tallies_QMARK_,new cljs.core.Keyword(null,"ttt","ttt",1858561240),ttt], null);
return (predict_prostate.results.sidefx.sidefx_linear.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.sidefx.sidefx_linear.cljs$core$IFn$_invoke$arity$1(G__33975) : predict_prostate.results.sidefx.sidefx_linear.call(null,G__33975));
})();
return (predict_prostate.results.sidefx.sidefx_content.cljs$core$IFn$_invoke$arity$4 ? predict_prostate.results.sidefx.sidefx_content.cljs$core$IFn$_invoke$arity$4(G__33959,G__33960,G__33961,G__33962) : predict_prostate.results.sidefx.sidefx_content.call(null,G__33959,G__33960,G__33961,G__33962));
})()));
}),null,"sidefx-discrete");
predict_prostate.results.sidefx.sidefx_more_info = rum.core.build_defc((function (ttt){
return React.createElement("div",({"style": ({"marginTop": (20)}), "className": "col-sm-12"}),(function (){var attrs33988 = (function (){var G__33994 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","mi-title","sidefx/mi-title",-47418243),"More Information"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33994) : ttt.call(null,G__33994));
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"h3",((cljs.core.map_QMARK_(attrs33988))?sablono.interpreter.attributes(attrs33988):null),((cljs.core.map_QMARK_(attrs33988))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs33988)], null)));
})(),(function (){var attrs33989 = (function (){var G__33995 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","mi-text1","sidefx/mi-text1",-392773301),"The following websites provide excellent advice and information on treatments and their potential harms:"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33995) : ttt.call(null,G__33995));
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"p",((cljs.core.map_QMARK_(attrs33989))?sablono.interpreter.attributes(attrs33989):null),((cljs.core.map_QMARK_(attrs33989))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs33989)], null)));
})(),(function (){var attrs33990 = (function (){var G__33996 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","mi-text2","sidefx/mi-text2",589624303),"About treatments:"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33996) : ttt.call(null,G__33996));
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"h5",((cljs.core.map_QMARK_(attrs33990))?sablono.interpreter.attributes(attrs33990):null),((cljs.core.map_QMARK_(attrs33990))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs33990)], null)));
})(),React.createElement("ul",({"style": ({"listStyleType": "none"})}),React.createElement("li",({"key": (1)}),React.createElement("a",({"href": "http://www.cancerresearchuk.org/about-cancer/prostate-cancer/treatment", "style": ({"textDecoration": "underline"}), "rel": "noopener", "target": "blank"}),sablono.interpreter.interpret((function (){var G__33997 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","mi-text3","sidefx/mi-text3",-1630373140),"Cancer research UK"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33997) : ttt.call(null,G__33997));
})()))),React.createElement("li",({"key": (2)}),React.createElement("a",({"href": "https://www.nhs.uk/conditions/prostate-cancer/treatment/", "rel": "noopener", "style": ({"textDecoration": "underline"}), "target": "blank"}),sablono.interpreter.interpret((function (){var G__33998 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","mi-text4","sidefx/mi-text4",1086043072),"NHS"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33998) : ttt.call(null,G__33998));
})())))),(function (){var attrs33992 = (function (){var G__34000 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","mi-text5","sidefx/mi-text5",-26334300),"About potential harms:"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__34000) : ttt.call(null,G__34000));
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"h5",((cljs.core.map_QMARK_(attrs33992))?sablono.interpreter.attributes(attrs33992):null),((cljs.core.map_QMARK_(attrs33992))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs33992)], null)));
})(),React.createElement("ul",({"style": ({"listStyleType": "none"})}),React.createElement("li",({"key": (3)}),React.createElement("a",({"href": "https://www.nhs.uk/conditions/prostate-cancer/treatment/#radical-prostatectomy", "style": ({"textDecoration": "underline"}), "rel": "noopener", "target": "blank"}),sablono.interpreter.interpret((function (){var G__34002 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","mi-text6","sidefx/mi-text6",-445782866),"Radical prostatectomy"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__34002) : ttt.call(null,G__34002));
})()))),React.createElement("li",({"key": (4)}),React.createElement("a",({"href": "https://www.nhs.uk/conditions/prostate-cancer/treatment/#radiotherapy", "style": ({"textDecoration": "underline"}), "rel": "noopener", "target": "blank"}),sablono.interpreter.interpret((function (){var G__34003 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","mi-text7","sidefx/mi-text7",1693220591),"Radiotherapy"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__34003) : ttt.call(null,G__34003));
})())))),(function (){var attrs33993 = (function (){var G__34004 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","mi-text8","sidefx/mi-text8",932614065),"Further advice and support:"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__34004) : ttt.call(null,G__34004));
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"h5",((cljs.core.map_QMARK_(attrs33993))?sablono.interpreter.attributes(attrs33993):null),((cljs.core.map_QMARK_(attrs33993))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs33993)], null)));
})(),React.createElement("ul",({"style": ({"listStyleType": "none"})}),React.createElement("li",({"key": (1)}),React.createElement("a",({"href": "http://www.macmillan.org.uk/", "style": ({"textDecoration": "underline"}), "rel": "noopener", "target": "blank"}),sablono.interpreter.interpret((function (){var G__34008 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","mi-text9","sidefx/mi-text9",483989971),"Macmillan"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__34008) : ttt.call(null,G__34008));
})()))),React.createElement("li",({"key": (2)}),React.createElement("a",({"href": "http://prostatecanceruk.org/", "style": ({"textDecoration": "underline"}), "rel": "noopener", "target": "_blank"}),sablono.interpreter.interpret((function (){var G__34020 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","mi-text10","sidefx/mi-text10",-421827287),"Prostate Cancer UK"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__34020) : ttt.call(null,G__34020));
})()))),React.createElement("li",({"key": (3)}),React.createElement("a",({"href": "https://www.nhs.uk/pages/home.aspx", "style": ({"textDecoration": "underline"}), "rel": "noopener", "target": "_blank"}),sablono.interpreter.interpret((function (){var G__34021 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","mi-text11","sidefx/mi-text11",1175342129),"NHS Choices"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__34021) : ttt.call(null,G__34021));
})())))));
}),null,"sidefx-more-info");
predict_prostate.results.sidefx.results_in_sidefx = rum.core.build_defc((function (ttt){
return React.createElement("div",({"style": ({"marginTop": "15px"})}),sablono.interpreter.interpret((predict_prostate.results.sidefx.sidefx_discrete.cljs$core$IFn$_invoke$arity$2 ? predict_prostate.results.sidefx.sidefx_discrete.cljs$core$IFn$_invoke$arity$2(true,ttt) : predict_prostate.results.sidefx.sidefx_discrete.call(null,true,ttt))));
}),null,"results-in-sidefx");

//# sourceMappingURL=predict_prostate.results.sidefx.js.map
