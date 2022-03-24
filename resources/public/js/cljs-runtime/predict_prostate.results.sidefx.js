goog.provide('predict_prostate.results.sidefx');
predict_prostate.results.sidefx.progress = rum.core.build_defc((function (percent){
return React.createElement("div",({"style": ({"backgroundColor": "#94d3f0"}), "className": "progress"}),React.createElement("div",({"role": "progress-bar", "aria-valuenow": percent, "aria-valuemin": (0), "aria-valuemax": (100), "style": ({"width": percent, "backgroundColor": "#bc3d95"}), "className": "progress-bar"}),(function (){var attrs47267 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(percent);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs47267))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["sr-only"], null)], null),attrs47267], 0))):({"className": "sr-only"})),((cljs.core.map_QMARK_(attrs47267))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["% Complete"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs47267),"% Complete"], null)));
})()));
}),null,"progress");
predict_prostate.results.sidefx.help = rum.core.build_defc((function (help_id){
var attrs47270 = (function (){var G__47273 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"help-id","help-id",-1064550845),help_id], null);
return (predict_prostate.components.button.small_help_button.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.components.button.small_help_button.cljs$core$IFn$_invoke$arity$1(G__47273) : predict_prostate.components.button.small_help_button.call(null,G__47273));
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs47270))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["pull-right"], null)], null),attrs47270], 0))):({"className": "pull-right"})),((cljs.core.map_QMARK_(attrs47270))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs47270)], null)));
}),null,"help");
predict_prostate.results.sidefx.treatment_fills = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"conservative","conservative",-1075714010),"#2222AA",new cljs.core.Keyword(null,"radical","radical",1159030213),"#3DAFEF",new cljs.core.Keyword(null,"radical-harms","radical-harms",-1715343730),"#660044",new cljs.core.Keyword(null,"radiotherapy","radiotherapy",-1259347062),"#CC5CA4"], null);
predict_prostate.results.sidefx.sidefx_header = rum.core.build_defc((function (ttt){
return React.createElement("div",({"style": ({"marginBottom": (15)}), "className": "col-xs-12"}),React.createElement("div",({"style": ({"backgroundColor": predict_prostate.results.util.alison_blue_1, "borderRadius": (3)}), "className": "row"}),React.createElement("h4",({"style": ({"marginLeft": (15)})}),sablono.interpreter.interpret((function (){var G__47289 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","ppho-title","sidefx/ppho-title",1137062973),"Potentially permanent harms of"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__47289) : ttt.call(null,G__47289));
})())),React.createElement("div",({"className": "col-sm-6"}),React.createElement("div",({"style": ({"fontSize": (16), "marginBottom": (10)})}),sablono.interpreter.interpret((function (){var G__47293 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),"b1",new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"conservative","conservative",-1075714010).cljs$core$IFn$_invoke$arity$1(predict_prostate.results.sidefx.treatment_fills),new cljs.core.Keyword(null,"r","r",-471384190),(7)], null);
return (predict_prostate.components.primitives.blob.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.components.primitives.blob.cljs$core$IFn$_invoke$arity$1(G__47293) : predict_prostate.components.primitives.blob.call(null,G__47293));
})())," ",sablono.interpreter.interpret((function (){var G__47296 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","cm","sidefx/cm",2013581781),"Conservative management"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__47296) : ttt.call(null,G__47296));
})())),React.createElement("div",({"style": ({"fontSize": (16), "marginBottom": (10)})}),sablono.interpreter.interpret((function (){var G__47297 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),"b2",new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"radical-harms","radical-harms",-1715343730).cljs$core$IFn$_invoke$arity$1(predict_prostate.results.sidefx.treatment_fills),new cljs.core.Keyword(null,"r","r",-471384190),(7)], null);
return (predict_prostate.components.primitives.blob.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.components.primitives.blob.cljs$core$IFn$_invoke$arity$1(G__47297) : predict_prostate.components.primitives.blob.call(null,G__47297));
})())," ",sablono.interpreter.interpret((function (){var G__47299 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","rp","sidefx/rp",-1252001846),"Radical prostatectomy"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__47299) : ttt.call(null,G__47299));
})())),React.createElement("div",({"style": ({"fontSize": (16)})}),sablono.interpreter.interpret((function (){var G__47300 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),"b3",new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"radiotherapy","radiotherapy",-1259347062).cljs$core$IFn$_invoke$arity$1(predict_prostate.results.sidefx.treatment_fills),new cljs.core.Keyword(null,"r","r",-471384190),(7)], null);
return (predict_prostate.components.primitives.blob.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.components.primitives.blob.cljs$core$IFn$_invoke$arity$1(G__47300) : predict_prostate.components.primitives.blob.call(null,G__47300));
})())," ",sablono.interpreter.interpret((function (){var G__47305 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","rr","sidefx/rr",-1381212698),"Radical Radiotherapy"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__47305) : ttt.call(null,G__47305));
})()))),React.createElement("div",({"className": "col-sm-6"}),React.createElement("p",({"style": ({"fontSize": (14)})}),sablono.interpreter.interpret((function (){var G__47307 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","ppho-text1","sidefx/ppho-text1",-581681790),"The following estimates assume that the function is normal before treatment and have been taken from large published studies.\n    The estimates are not individualised to you or your local treatment centre or are they derived from the predict calculator.\n    Your local team may have data specific to your centre which you can ask about."], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__47307) : ttt.call(null,G__47307));
})())),React.createElement("p",({"style": ({"fontSize": (14), "color": "#f00"})}),sablono.interpreter.interpret((function (){var G__47313 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","ppho-text2","sidefx/ppho-text2",-983677722),"If you are in the UK, centre by centre provider outcomes are provided by\n     the National Prostate Cancer Audit which you may find useful:"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__47313) : ttt.call(null,G__47313));
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
predict_prostate.results.sidefx.sidefx_bar = rum.core.build_defc((function (p__47325){
var map__47327 = p__47325;
var map__47327__$1 = cljs.core.__destructure_map(map__47327);
var fewer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47327__$1,new cljs.core.Keyword(null,"fewer","fewer",648726198));
var percent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47327__$1,new cljs.core.Keyword(null,"percent","percent",2031453817));
var fill = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47327__$1,new cljs.core.Keyword(null,"fill","fill",883462889));
var tallies_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47327__$1,new cljs.core.Keyword(null,"tallies?","tallies?",-496877074));
var ttt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47327__$1,new cljs.core.Keyword(null,"ttt","ttt",1858561240));
var f1 = predict_prostate.results.sidefx.fifty_1(percent);
var f2 = predict_prostate.results.sidefx.fifty_2(percent);
var hh = predict_prostate.results.sidefx.chunker((100),(10),percent);
var r = (4);
return React.createElement("div",({"className": "row"}),React.createElement("div",({"key": (1), "style": ({"fontSize": "120%", "fontWeight": "bold", "display": "inline-block"}), "className": "col-xs-1"}),React.createElement("span",({"style": ({"width": "100%", "textAlign": "right"})})),(cljs.core.truth_(fewer)?sablono.interpreter.interpret((function (){var G__47351 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","bar-lesst","sidefx/bar-lesst",-1099981635),"Less than"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__47351) : ttt.call(null,G__47351));
})()):null)," ",sablono.interpreter.interpret(percent),"% "),(cljs.core.truth_(tallies_QMARK_)?React.createElement("div",({"style": ({"marginTop": (3)}), "className": "col-xs-11"}),React.createElement("div",({"key": (1), "style": ({"width": (220), "display": "inline-block"})}),sablono.interpreter.interpret(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (n){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["t-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join('')], null),(function (){var G__47359 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fill","fill",883462889),fill,new cljs.core.Keyword(null,"r","r",-471384190),r,new cljs.core.Keyword(null,"tally?","tally?",-1847300034),true], null);
return (predict_prostate.components.primitives.blob_10.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.components.primitives.blob_10.cljs$core$IFn$_invoke$arity$1(G__47359) : predict_prostate.components.primitives.blob_10.call(null,G__47359));
})()], null);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tens","tens",-2107583828).cljs$core$IFn$_invoke$arity$1(f1)))),sablono.interpreter.interpret((((new cljs.core.Keyword(null,"units","units",-533089095).cljs$core$IFn$_invoke$arity$1(f1) > (0)))?(function (){var G__47360 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"fill","fill",883462889),fill,new cljs.core.Keyword(null,"r","r",-471384190),r,new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"units","units",-533089095).cljs$core$IFn$_invoke$arity$1(f1),new cljs.core.Keyword(null,"tally?","tally?",-1847300034),true], null);
return (predict_prostate.components.primitives.mixed_10.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.components.primitives.mixed_10.cljs$core$IFn$_invoke$arity$1(G__47360) : predict_prostate.components.primitives.mixed_10.call(null,G__47360));
})():null)),sablono.interpreter.interpret(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (n){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["0-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join('')], null),(function (){var G__47361 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fill","fill",883462889),(cljs.core.truth_(tallies_QMARK_)?"#BBBBBB":"white"),new cljs.core.Keyword(null,"r","r",-471384190),r,new cljs.core.Keyword(null,"tally?","tally?",-1847300034),true], null);
return (predict_prostate.components.primitives.blob_10.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.components.primitives.blob_10.cljs$core$IFn$_invoke$arity$1(G__47361) : predict_prostate.components.primitives.blob_10.call(null,G__47361));
})()], null);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tens-empty","tens-empty",1703381257).cljs$core$IFn$_invoke$arity$1(f1))))),React.createElement("div",({"key": (2), "style": ({"width": (220), "display": "inline-block"})}),sablono.interpreter.interpret(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (n){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["t-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join('')], null),(function (){var G__47364 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fill","fill",883462889),fill,new cljs.core.Keyword(null,"r","r",-471384190),r,new cljs.core.Keyword(null,"tally?","tally?",-1847300034),true], null);
return (predict_prostate.components.primitives.blob_10.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.components.primitives.blob_10.cljs$core$IFn$_invoke$arity$1(G__47364) : predict_prostate.components.primitives.blob_10.call(null,G__47364));
})()], null);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tens","tens",-2107583828).cljs$core$IFn$_invoke$arity$1(f2)))),sablono.interpreter.interpret((((new cljs.core.Keyword(null,"units","units",-533089095).cljs$core$IFn$_invoke$arity$1(f2) > (0)))?(function (){var G__47365 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"fill","fill",883462889),fill,new cljs.core.Keyword(null,"r","r",-471384190),r,new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"units","units",-533089095).cljs$core$IFn$_invoke$arity$1(f2),new cljs.core.Keyword(null,"tally?","tally?",-1847300034),true], null);
return (predict_prostate.components.primitives.mixed_10.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.components.primitives.mixed_10.cljs$core$IFn$_invoke$arity$1(G__47365) : predict_prostate.components.primitives.mixed_10.call(null,G__47365));
})():null)),sablono.interpreter.interpret(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (n){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["0-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join('')], null),(function (){var G__47366 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fill","fill",883462889),(cljs.core.truth_(tallies_QMARK_)?"#BBBBBB":"white"),new cljs.core.Keyword(null,"r","r",-471384190),r,new cljs.core.Keyword(null,"tally?","tally?",-1847300034),true], null);
return (predict_prostate.components.primitives.blob_10.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.components.primitives.blob_10.cljs$core$IFn$_invoke$arity$1(G__47366) : predict_prostate.components.primitives.blob_10.call(null,G__47366));
})()], null);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tens-empty","tens-empty",1703381257).cljs$core$IFn$_invoke$arity$1(f2)))))):(function (){var attrs47358 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (n){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["t-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join('')], null),(function (){var G__47367 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fill","fill",883462889),fill,new cljs.core.Keyword(null,"r","r",-471384190),r], null);
return (predict_prostate.components.primitives.blob_10.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.components.primitives.blob_10.cljs$core$IFn$_invoke$arity$1(G__47367) : predict_prostate.components.primitives.blob_10.call(null,G__47367));
})()], null);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tens","tens",-2107583828).cljs$core$IFn$_invoke$arity$1(hh)));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs47358))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["col-xs-12"], null)], null),attrs47358], 0))):({"className": "col-xs-12"})),((cljs.core.map_QMARK_(attrs47358))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret((((new cljs.core.Keyword(null,"units","units",-533089095).cljs$core$IFn$_invoke$arity$1(hh) > (0)))?(function (){var G__47368 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fill","fill",883462889),fill,new cljs.core.Keyword(null,"r","r",-471384190),r,new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"units","units",-533089095).cljs$core$IFn$_invoke$arity$1(hh)], null);
return (predict_prostate.components.primitives.mixed_10.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.components.primitives.mixed_10.cljs$core$IFn$_invoke$arity$1(G__47368) : predict_prostate.components.primitives.mixed_10.call(null,G__47368));
})():null)),sablono.interpreter.interpret(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (n){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["0-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join('')], null),(function (){var G__47369 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fill","fill",883462889),"white",new cljs.core.Keyword(null,"r","r",-471384190),r], null);
return (predict_prostate.components.primitives.blob_10.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.components.primitives.blob_10.cljs$core$IFn$_invoke$arity$1(G__47369) : predict_prostate.components.primitives.blob_10.call(null,G__47369));
})()], null);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tens-empty","tens-empty",1703381257).cljs$core$IFn$_invoke$arity$1(hh))))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs47358),sablono.interpreter.interpret((((new cljs.core.Keyword(null,"units","units",-533089095).cljs$core$IFn$_invoke$arity$1(hh) > (0)))?(function (){var G__47370 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fill","fill",883462889),fill,new cljs.core.Keyword(null,"r","r",-471384190),r,new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"units","units",-533089095).cljs$core$IFn$_invoke$arity$1(hh)], null);
return (predict_prostate.components.primitives.mixed_10.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.components.primitives.mixed_10.cljs$core$IFn$_invoke$arity$1(G__47370) : predict_prostate.components.primitives.mixed_10.call(null,G__47370));
})():null)),sablono.interpreter.interpret(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (n){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["0-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join('')], null),(function (){var G__47371 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fill","fill",883462889),"white",new cljs.core.Keyword(null,"r","r",-471384190),r], null);
return (predict_prostate.components.primitives.blob_10.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.components.primitives.blob_10.cljs$core$IFn$_invoke$arity$1(G__47371) : predict_prostate.components.primitives.blob_10.call(null,G__47371));
})()], null);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tens-empty","tens-empty",1703381257).cljs$core$IFn$_invoke$arity$1(hh))))], null)));
})()));
}),null,"sidefx-bar");
predict_prostate.results.sidefx.fewer_helper = rum.core.build_defc((function() {
var G__47547 = null;
var G__47547__2 = (function (prefix,ttt){
return sablono.interpreter.interpret((predict_prostate.results.sidefx.fewer_helper.cljs$core$IFn$_invoke$arity$3 ? predict_prostate.results.sidefx.fewer_helper.cljs$core$IFn$_invoke$arity$3(prefix,"",ttt) : predict_prostate.results.sidefx.fewer_helper.call(null,prefix,"",ttt)));
});
var G__47547__3 = (function (prefix,n,ttt){
var attrs47372 = prefix;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs47372))?sablono.interpreter.attributes(attrs47372):null),((cljs.core.map_QMARK_(attrs47372))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs47373 = (function (){var G__47375 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","fewer","sidefx/fewer",1616828099),"fewer than"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__47375) : ttt.call(null,G__47375));
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"b",((cljs.core.map_QMARK_(attrs47373))?sablono.interpreter.attributes(attrs47373):null),((cljs.core.map_QMARK_(attrs47373))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",(cljs.core.truth_(n)?(function (){var attrs47376 = n;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs47376))?sablono.interpreter.attributes(attrs47376):null),((cljs.core.map_QMARK_(attrs47376))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [" "], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs47376)," "], null)));
})():"")], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs47373)," ",(cljs.core.truth_(n)?(function (){var attrs47377 = n;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs47377))?sablono.interpreter.attributes(attrs47377):null),((cljs.core.map_QMARK_(attrs47377))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [" "], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs47377)," "], null)));
})():"")], null)));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs47372),(function (){var attrs47374 = (function (){var G__47378 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","fewer","sidefx/fewer",1616828099),"fewer than"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__47378) : ttt.call(null,G__47378));
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"b",((cljs.core.map_QMARK_(attrs47374))?sablono.interpreter.attributes(attrs47374):null),((cljs.core.map_QMARK_(attrs47374))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",(cljs.core.truth_(n)?(function (){var attrs47379 = n;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs47379))?sablono.interpreter.attributes(attrs47379):null),((cljs.core.map_QMARK_(attrs47379))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [" "], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs47379)," "], null)));
})():"")], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs47374)," ",(cljs.core.truth_(n)?(function (){var attrs47380 = n;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs47380))?sablono.interpreter.attributes(attrs47380):null),((cljs.core.map_QMARK_(attrs47380))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [" "], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs47380)," "], null)));
})():"")], null)));
})()], null)));
});
G__47547 = function(prefix,n,ttt){
switch(arguments.length){
case 2:
return G__47547__2.call(this,prefix,n);
case 3:
return G__47547__3.call(this,prefix,n,ttt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__47547.cljs$core$IFn$_invoke$arity$2 = G__47547__2;
G__47547.cljs$core$IFn$_invoke$arity$3 = G__47547__3;
return G__47547;
})()
,null,"fewer-helper");
predict_prostate.results.sidefx.sidefx_linear = rum.core.build_defc((function (p__47382){
var map__47383 = p__47382;
var map__47383__$1 = cljs.core.__destructure_map(map__47383);
var treatment = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47383__$1,new cljs.core.Keyword(null,"treatment","treatment",515251816));
var prefix = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47383__$1,new cljs.core.Keyword(null,"prefix","prefix",-265908465));
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47383__$1,new cljs.core.Keyword(null,"n","n",562130025));
var fewer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47383__$1,new cljs.core.Keyword(null,"fewer","fewer",648726198));
var tallies_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47383__$1,new cljs.core.Keyword(null,"tallies?","tallies?",-496877074));
var ttt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47383__$1,new cljs.core.Keyword(null,"ttt","ttt",1858561240));
var quantity = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),Math.round(n)," ",(function (){var G__47385 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","lin-in","sidefx/lin-in",554234320),"in"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__47385) : ttt.call(null,G__47385));
})()," 100 "], null);
return React.createElement("div",null,(function (){var attrs47386 = prefix;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs47386))?sablono.interpreter.attributes(attrs47386):null),((cljs.core.map_QMARK_(attrs47386))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(fewer)?(function (){var attrs47390 = quantity;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"b",((cljs.core.map_QMARK_(attrs47390))?sablono.interpreter.attributes(attrs47390):null),((cljs.core.map_QMARK_(attrs47390))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs47390)], null)));
})():sablono.interpreter.interpret(quantity))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs47386),(cljs.core.truth_(fewer)?(function (){var attrs47395 = quantity;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"b",((cljs.core.map_QMARK_(attrs47395))?sablono.interpreter.attributes(attrs47395):null),((cljs.core.map_QMARK_(attrs47395))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs47395)], null)));
})():sablono.interpreter.interpret(quantity))], null)));
})(),(function (){var attrs47387 = (function (){var G__47396 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","lin-aft","sidefx/lin-aft",1268874602),"men have this issue after 3 years."], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__47396) : ttt.call(null,G__47396));
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs47387))?sablono.interpreter.attributes(attrs47387):null),((cljs.core.map_QMARK_(attrs47387))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs47387)], null)));
})(),sablono.interpreter.interpret((function (){var G__47397 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fewer","fewer",648726198),fewer,new cljs.core.Keyword(null,"percent","percent",2031453817),n,new cljs.core.Keyword(null,"fill","fill",883462889),(treatment.cljs$core$IFn$_invoke$arity$1 ? treatment.cljs$core$IFn$_invoke$arity$1(predict_prostate.results.sidefx.treatment_fills) : treatment.call(null,predict_prostate.results.sidefx.treatment_fills)),new cljs.core.Keyword(null,"tallies?","tallies?",-496877074),tallies_QMARK_,new cljs.core.Keyword(null,"ttt","ttt",1858561240),ttt], null);
return (predict_prostate.results.sidefx.sidefx_bar.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.sidefx.sidefx_bar.cljs$core$IFn$_invoke$arity$1(G__47397) : predict_prostate.results.sidefx.sidefx_bar.call(null,G__47397));
})()),React.createElement("br",null));
}),null,"sidefx-linear");
predict_prostate.results.sidefx.sidefx_content = rum.core.build_defc((function() { 
var G__47551__delegate = function (p__47402,content){
var map__47404 = p__47402;
var map__47404__$1 = cljs.core.__destructure_map(map__47404);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47404__$1,new cljs.core.Keyword(null,"title","title",636505583));
var sub_title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47404__$1,new cljs.core.Keyword(null,"sub-title","sub-title",-1781490288));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47404__$1,new cljs.core.Keyword(null,"source","source",-433931539));
return React.createElement("div",({"style": ({"padding": "0 15px 0 15px", "fontSize": (16)})}),(function (){var attrs47405 = title;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"h4",((cljs.core.map_QMARK_(attrs47405))?sablono.interpreter.attributes(attrs47405):null),((cljs.core.map_QMARK_(attrs47405))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs47405)], null)));
})(),(function (){var attrs47406 = sub_title;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"h5",((cljs.core.map_QMARK_(attrs47406))?sablono.interpreter.attributes(attrs47406):null),((cljs.core.map_QMARK_(attrs47406))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs47406)], null)));
})(),sablono.interpreter.interpret(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__47399_SHARP_,p2__47398_SHARP_){
return rum.core.with_key(p2__47398_SHARP_,p1__47399_SHARP_);
}),content)),sablono.interpreter.interpret((cljs.core.truth_(source)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".alert.alert-info",".alert.alert-info",1970443868),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(12)], null)], null),(source.cljs$core$IFn$_invoke$arity$0 ? source.cljs$core$IFn$_invoke$arity$0() : source.call(null))], null):null)));
};
var G__47551 = function (p__47402,var_args){
var content = null;
if (arguments.length > 1) {
var G__47552__i = 0, G__47552__a = new Array(arguments.length -  1);
while (G__47552__i < G__47552__a.length) {G__47552__a[G__47552__i] = arguments[G__47552__i + 1]; ++G__47552__i;}
  content = new cljs.core.IndexedSeq(G__47552__a,0,null);
} 
return G__47551__delegate.call(this,p__47402,content);};
G__47551.cljs$lang$maxFixedArity = 1;
G__47551.cljs$lang$applyTo = (function (arglist__47553){
var p__47402 = cljs.core.first(arglist__47553);
var content = cljs.core.rest(arglist__47553);
return G__47551__delegate(p__47402,content);
});
G__47551.cljs$core$IFn$_invoke$arity$variadic = G__47551__delegate;
return G__47551;
})()
,null,"sidefx-content");
predict_prostate.results.sidefx.erectile_source = rum.core.build_defc((function (ttt){
var attrs47415 = (function (){var G__47421 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","eresrc-text1","sidefx/eresrc-text1",1406494822),"Estimates for erectile dysfunction have been derived from a large American study. The full research can be\n        read here:"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__47421) : ttt.call(null,G__47421));
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs47415))?sablono.interpreter.attributes(attrs47415):null),((cljs.core.map_QMARK_(attrs47415))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",React.createElement("a",({"href": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5782813/", "target": "_blank"}),"https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5782813/")], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs47415)," ",React.createElement("a",({"href": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5782813/", "target": "_blank"}),"https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5782813/")], null)));
}),null,"erectile-source");
predict_prostate.results.sidefx.incontinence_source = rum.core.build_defc((function (ttt){
var attrs47424 = (function (){var G__47432 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","incsrc-text1","sidefx/incsrc-text1",-1325551852),"Estimates for incontinence dysfunction have been taken from the UK-based Prostate Testing for\n       Cancer and Treatment (ProtecT) trial. The full research can be read here:"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__47432) : ttt.call(null,G__47432));
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs47424))?sablono.interpreter.attributes(attrs47424):null),((cljs.core.map_QMARK_(attrs47424))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",React.createElement("a",({"href": "https://www.nejm.org/doi/full/10.1056/NEJMoa1606221", "target": "_blank"}),"https://www.nejm.org/doi/full/10.1056/NEJMoa1606221")], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs47424)," ",React.createElement("a",({"href": "https://www.nejm.org/doi/full/10.1056/NEJMoa1606221", "target": "_blank"}),"https://www.nejm.org/doi/full/10.1056/NEJMoa1606221")], null)));
}),null,"incontinence-source");
predict_prostate.results.sidefx.bowel_source = rum.core.build_defc((function (ttt){
return React.createElement("span",({"fontSize": (12)}),sablono.interpreter.interpret((function (){var G__47449 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","bowsrc-text1","sidefx/bowsrc-text1",-2008110457),"Estimates for bowel dysfunction have been taken from the UK-based Prostate Testing for\n       Cancer and Treatment (ProtecT) trial. The full research can be read here:"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__47449) : ttt.call(null,G__47449));
})())," ",React.createElement("a",({"href": "https://www.nejm.org/doi/full/10.1056/NEJMoa1606221", "target": "_blank"}),"https://www.nejm.org/doi/full/10.1056/NEJMoa1606221"));
}),null,"bowel-source");
predict_prostate.results.sidefx.sidefx_discrete = rum.core.build_defc((function (tallies_QMARK_,ttt){
return React.createElement("div",({"style": ({"border": "1px solid #CCCCCC", "borderRadius": (3), "fontSize": (16)})}),sablono.interpreter.interpret((predict_prostate.results.sidefx.sidefx_header.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.sidefx.sidefx_header.cljs$core$IFn$_invoke$arity$1(ttt) : predict_prostate.results.sidefx.sidefx_header.call(null,ttt))),sablono.interpreter.interpret((function (){var G__47464 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),(function (){var G__47469 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","eredys-title","sidefx/eredys-title",-967487873),"Erectile dysfunction"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__47469) : ttt.call(null,G__47469));
})(),new cljs.core.Keyword(null,"sub-title","sub-title",-1781490288),(function (){var G__47470 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","eredys-subtitle","sidefx/eredys-subtitle",-814812706),"Defined as: 'Erections insufficient for intercourse'"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__47470) : ttt.call(null,G__47470));
})(),new cljs.core.Keyword(null,"source","source",-433931539),(function (){
return (predict_prostate.results.sidefx.erectile_source.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.sidefx.erectile_source.cljs$core$IFn$_invoke$arity$1(ttt) : predict_prostate.results.sidefx.erectile_source.call(null,ttt));
})], null);
var G__47465 = (function (){var G__47472 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"treatment","treatment",515251816),new cljs.core.Keyword(null,"conservative","conservative",-1075714010),new cljs.core.Keyword(null,"prefix","prefix",-265908465),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(function (){var G__47474 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","with","sidefx/with",243394541),"With"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__47474) : ttt.call(null,G__47474));
})()," ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"conservative","conservative",-1075714010).cljs$core$IFn$_invoke$arity$1(predict_prostate.results.sidefx.treatment_fills)], null)], null),(function (){var G__47475 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","cons-man","sidefx/cons-man",552309001),"conservative management,"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__47475) : ttt.call(null,G__47475));
})()], null)," ",(function (){var G__47476 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","about","sidefx/about",-2035617818),"about"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__47476) : ttt.call(null,G__47476));
})()," "], null),new cljs.core.Keyword(null,"n","n",562130025),(27),new cljs.core.Keyword(null,"tallies?","tallies?",-496877074),tallies_QMARK_,new cljs.core.Keyword(null,"ttt","ttt",1858561240),ttt], null);
return (predict_prostate.results.sidefx.sidefx_linear.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.sidefx.sidefx_linear.cljs$core$IFn$_invoke$arity$1(G__47472) : predict_prostate.results.sidefx.sidefx_linear.call(null,G__47472));
})();
var G__47466 = (function (){var G__47477 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"treatment","treatment",515251816),new cljs.core.Keyword(null,"radical-harms","radical-harms",-1715343730),new cljs.core.Keyword(null,"prefix","prefix",-265908465),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(function (){var G__47478 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","with","sidefx/with",243394541),"With"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__47478) : ttt.call(null,G__47478));
})()," ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"radical-harms","radical-harms",-1715343730).cljs$core$IFn$_invoke$arity$1(predict_prostate.results.sidefx.treatment_fills)], null)], null),(function (){var G__47479 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","nsrp","sidefx/nsrp",-4133850),"nerve-sparing radical prostatectomy,"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__47479) : ttt.call(null,G__47479));
})()], null)," ",(function (){var G__47480 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","about","sidefx/about",-2035617818),"about"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__47480) : ttt.call(null,G__47480));
})()," "], null),new cljs.core.Keyword(null,"n","n",562130025),(56),new cljs.core.Keyword(null,"tallies?","tallies?",-496877074),tallies_QMARK_,new cljs.core.Keyword(null,"ttt","ttt",1858561240),ttt], null);
return (predict_prostate.results.sidefx.sidefx_linear.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.sidefx.sidefx_linear.cljs$core$IFn$_invoke$arity$1(G__47477) : predict_prostate.results.sidefx.sidefx_linear.call(null,G__47477));
})();
var G__47467 = (function (){var G__47481 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"treatment","treatment",515251816),new cljs.core.Keyword(null,"radical-harms","radical-harms",-1715343730),new cljs.core.Keyword(null,"prefix","prefix",-265908465),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(function (){var G__47482 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","with","sidefx/with",243394541),"With"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__47482) : ttt.call(null,G__47482));
})()," ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"radical-harms","radical-harms",-1715343730).cljs$core$IFn$_invoke$arity$1(predict_prostate.results.sidefx.treatment_fills)], null)], null),(function (){var G__47483 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","nnsrp","sidefx/nnsrp",1026763627),"non-nerve-sparing radical prostatectomy,"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__47483) : ttt.call(null,G__47483));
})()], null)," ",(function (){var G__47484 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","about","sidefx/about",-2035617818),"about"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__47484) : ttt.call(null,G__47484));
})()," "], null),new cljs.core.Keyword(null,"n","n",562130025),(66),new cljs.core.Keyword(null,"tallies?","tallies?",-496877074),tallies_QMARK_,new cljs.core.Keyword(null,"ttt","ttt",1858561240),ttt], null);
return (predict_prostate.results.sidefx.sidefx_linear.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.sidefx.sidefx_linear.cljs$core$IFn$_invoke$arity$1(G__47481) : predict_prostate.results.sidefx.sidefx_linear.call(null,G__47481));
})();
var G__47468 = (function (){var G__47485 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"treatment","treatment",515251816),new cljs.core.Keyword(null,"radiotherapy","radiotherapy",-1259347062),new cljs.core.Keyword(null,"prefix","prefix",-265908465),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(function (){var G__47486 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","with","sidefx/with",243394541),"With"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__47486) : ttt.call(null,G__47486));
})()," ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"radiotherapy","radiotherapy",-1259347062).cljs$core$IFn$_invoke$arity$1(predict_prostate.results.sidefx.treatment_fills)], null)], null),(function (){var G__47487 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","radio","sidefx/radio",-450230605),"radiotherapy,"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__47487) : ttt.call(null,G__47487));
})()], null)," ",(function (){var G__47488 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","about","sidefx/about",-2035617818),"about"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__47488) : ttt.call(null,G__47488));
})()," "], null),new cljs.core.Keyword(null,"n","n",562130025),(39),new cljs.core.Keyword(null,"tallies?","tallies?",-496877074),tallies_QMARK_,new cljs.core.Keyword(null,"ttt","ttt",1858561240),ttt], null);
return (predict_prostate.results.sidefx.sidefx_linear.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.sidefx.sidefx_linear.cljs$core$IFn$_invoke$arity$1(G__47485) : predict_prostate.results.sidefx.sidefx_linear.call(null,G__47485));
})();
return (predict_prostate.results.sidefx.sidefx_content.cljs$core$IFn$_invoke$arity$5 ? predict_prostate.results.sidefx.sidefx_content.cljs$core$IFn$_invoke$arity$5(G__47464,G__47465,G__47466,G__47467,G__47468) : predict_prostate.results.sidefx.sidefx_content.call(null,G__47464,G__47465,G__47466,G__47467,G__47468));
})()),sablono.interpreter.interpret((function (){var G__47490 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),(function (){var G__47494 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","incon-title","sidefx/incon-title",-983966664),"Incontinence"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__47494) : ttt.call(null,G__47494));
})(),new cljs.core.Keyword(null,"sub-title","sub-title",-1781490288),(function (){var G__47495 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","incon-subtitle","sidefx/incon-subtitle",625073468),"Defined as: 'Wore one or more pads in the last 4 weeks'"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__47495) : ttt.call(null,G__47495));
})(),new cljs.core.Keyword(null,"source","source",-433931539),(function (){
return (predict_prostate.results.sidefx.incontinence_source.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.sidefx.incontinence_source.cljs$core$IFn$_invoke$arity$1(ttt) : predict_prostate.results.sidefx.incontinence_source.call(null,ttt));
})], null);
var G__47491 = (function (){var G__47496 = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"treatment","treatment",515251816),new cljs.core.Keyword(null,"conservative","conservative",-1075714010),new cljs.core.Keyword(null,"fewer","fewer",648726198),true,new cljs.core.Keyword(null,"prefix","prefix",-265908465),(function (){var G__47497 = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(function (){var G__47500 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","with","sidefx/with",243394541),"With"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__47500) : ttt.call(null,G__47500));
})()," ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"conservative","conservative",-1075714010).cljs$core$IFn$_invoke$arity$1(predict_prostate.results.sidefx.treatment_fills)], null)], null),(function (){var G__47501 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","cons-man","sidefx/cons-man",552309001),"conservative management,"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__47501) : ttt.call(null,G__47501));
})()], null)," "], null);
var G__47498 = ttt;
return (predict_prostate.results.sidefx.fewer_helper.cljs$core$IFn$_invoke$arity$2 ? predict_prostate.results.sidefx.fewer_helper.cljs$core$IFn$_invoke$arity$2(G__47497,G__47498) : predict_prostate.results.sidefx.fewer_helper.call(null,G__47497,G__47498));
})(),new cljs.core.Keyword(null,"n","n",562130025),(1),new cljs.core.Keyword(null,"tallies?","tallies?",-496877074),tallies_QMARK_,new cljs.core.Keyword(null,"ttt","ttt",1858561240),ttt], null);
return (predict_prostate.results.sidefx.sidefx_linear.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.sidefx.sidefx_linear.cljs$core$IFn$_invoke$arity$1(G__47496) : predict_prostate.results.sidefx.sidefx_linear.call(null,G__47496));
})();
var G__47492 = (function (){var G__47502 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"treatment","treatment",515251816),new cljs.core.Keyword(null,"radical-harms","radical-harms",-1715343730),new cljs.core.Keyword(null,"prefix","prefix",-265908465),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(function (){var G__47503 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","with","sidefx/with",243394541),"With"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__47503) : ttt.call(null,G__47503));
})()," ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"radical-harms","radical-harms",-1715343730).cljs$core$IFn$_invoke$arity$1(predict_prostate.results.sidefx.treatment_fills)], null)], null),(function (){var G__47504 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","radp","sidefx/radp",320511672),"radical prostatectomy,"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__47504) : ttt.call(null,G__47504));
})()], null)," ",(function (){var G__47505 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","about","sidefx/about",-2035617818),"about"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__47505) : ttt.call(null,G__47505));
})()," "], null),new cljs.core.Keyword(null,"n","n",562130025),(20),new cljs.core.Keyword(null,"tallies?","tallies?",-496877074),tallies_QMARK_,new cljs.core.Keyword(null,"ttt","ttt",1858561240),ttt], null);
return (predict_prostate.results.sidefx.sidefx_linear.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.sidefx.sidefx_linear.cljs$core$IFn$_invoke$arity$1(G__47502) : predict_prostate.results.sidefx.sidefx_linear.call(null,G__47502));
})();
var G__47493 = (function (){var G__47506 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"treatment","treatment",515251816),new cljs.core.Keyword(null,"radiotherapy","radiotherapy",-1259347062),new cljs.core.Keyword(null,"prefix","prefix",-265908465),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(function (){var G__47507 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","with","sidefx/with",243394541),"With"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__47507) : ttt.call(null,G__47507));
})()," ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"radiotherapy","radiotherapy",-1259347062).cljs$core$IFn$_invoke$arity$1(predict_prostate.results.sidefx.treatment_fills)], null)], null),(function (){var G__47508 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","radio","sidefx/radio",-450230605),"radiotherapy,"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__47508) : ttt.call(null,G__47508));
})()], null)," ",(function (){var G__47509 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","about","sidefx/about",-2035617818),"about"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__47509) : ttt.call(null,G__47509));
})()," "], null),new cljs.core.Keyword(null,"n","n",562130025),(3),new cljs.core.Keyword(null,"tallies?","tallies?",-496877074),tallies_QMARK_,new cljs.core.Keyword(null,"ttt","ttt",1858561240),ttt], null);
return (predict_prostate.results.sidefx.sidefx_linear.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.sidefx.sidefx_linear.cljs$core$IFn$_invoke$arity$1(G__47506) : predict_prostate.results.sidefx.sidefx_linear.call(null,G__47506));
})();
return (predict_prostate.results.sidefx.sidefx_content.cljs$core$IFn$_invoke$arity$4 ? predict_prostate.results.sidefx.sidefx_content.cljs$core$IFn$_invoke$arity$4(G__47490,G__47491,G__47492,G__47493) : predict_prostate.results.sidefx.sidefx_content.call(null,G__47490,G__47491,G__47492,G__47493));
})()),sablono.interpreter.interpret((function (){var G__47510 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),(function (){var G__47514 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","bowiss-title","sidefx/bowiss-title",-275898307),"Bowel issues"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__47514) : ttt.call(null,G__47514));
})(),new cljs.core.Keyword(null,"sub-title","sub-title",-1781490288),(function (){var G__47515 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","bowiss-subtitle","sidefx/bowiss-subtitle",-1316088249),"Defined as: 'Bloody stools about half the time or more frequently'"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__47515) : ttt.call(null,G__47515));
})(),new cljs.core.Keyword(null,"source","source",-433931539),(function (){
return (predict_prostate.results.sidefx.bowel_source.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.sidefx.bowel_source.cljs$core$IFn$_invoke$arity$1(ttt) : predict_prostate.results.sidefx.bowel_source.call(null,ttt));
})], null);
var G__47511 = (function (){var G__47516 = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"treatment","treatment",515251816),new cljs.core.Keyword(null,"conservative","conservative",-1075714010),new cljs.core.Keyword(null,"prefix","prefix",-265908465),(function (){var G__47517 = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(function (){var G__47519 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","with","sidefx/with",243394541),"With"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__47519) : ttt.call(null,G__47519));
})()," ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"conservative","conservative",-1075714010).cljs$core$IFn$_invoke$arity$1(predict_prostate.results.sidefx.treatment_fills)], null)], null),(function (){var G__47520 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","cons-man","sidefx/cons-man",552309001),"conservative management,"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__47520) : ttt.call(null,G__47520));
})()], null)," "], null);
var G__47518 = ttt;
return (predict_prostate.results.sidefx.fewer_helper.cljs$core$IFn$_invoke$arity$2 ? predict_prostate.results.sidefx.fewer_helper.cljs$core$IFn$_invoke$arity$2(G__47517,G__47518) : predict_prostate.results.sidefx.fewer_helper.call(null,G__47517,G__47518));
})(),new cljs.core.Keyword(null,"fewer","fewer",648726198),true,new cljs.core.Keyword(null,"n","n",562130025),(2),new cljs.core.Keyword(null,"tallies?","tallies?",-496877074),tallies_QMARK_,new cljs.core.Keyword(null,"ttt","ttt",1858561240),ttt], null);
return (predict_prostate.results.sidefx.sidefx_linear.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.sidefx.sidefx_linear.cljs$core$IFn$_invoke$arity$1(G__47516) : predict_prostate.results.sidefx.sidefx_linear.call(null,G__47516));
})();
var G__47512 = (function (){var G__47521 = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"treatment","treatment",515251816),new cljs.core.Keyword(null,"radical-harms","radical-harms",-1715343730),new cljs.core.Keyword(null,"prefix","prefix",-265908465),(function (){var G__47522 = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(function (){var G__47524 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","with","sidefx/with",243394541),"With"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__47524) : ttt.call(null,G__47524));
})()," ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"radical-harms","radical-harms",-1715343730).cljs$core$IFn$_invoke$arity$1(predict_prostate.results.sidefx.treatment_fills)], null)], null),(function (){var G__47525 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","radp","sidefx/radp",320511672),"radical prostatectomy,"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__47525) : ttt.call(null,G__47525));
})()], null)," "], null);
var G__47523 = ttt;
return (predict_prostate.results.sidefx.fewer_helper.cljs$core$IFn$_invoke$arity$2 ? predict_prostate.results.sidefx.fewer_helper.cljs$core$IFn$_invoke$arity$2(G__47522,G__47523) : predict_prostate.results.sidefx.fewer_helper.call(null,G__47522,G__47523));
})(),new cljs.core.Keyword(null,"fewer","fewer",648726198),true,new cljs.core.Keyword(null,"n","n",562130025),(2),new cljs.core.Keyword(null,"tallies?","tallies?",-496877074),tallies_QMARK_,new cljs.core.Keyword(null,"ttt","ttt",1858561240),ttt], null);
return (predict_prostate.results.sidefx.sidefx_linear.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.sidefx.sidefx_linear.cljs$core$IFn$_invoke$arity$1(G__47521) : predict_prostate.results.sidefx.sidefx_linear.call(null,G__47521));
})();
var G__47513 = (function (){var G__47526 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"treatment","treatment",515251816),new cljs.core.Keyword(null,"radiotherapy","radiotherapy",-1259347062),new cljs.core.Keyword(null,"prefix","prefix",-265908465),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(function (){var G__47527 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","with","sidefx/with",243394541),"With"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__47527) : ttt.call(null,G__47527));
})()," ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"radiotherapy","radiotherapy",-1259347062).cljs$core$IFn$_invoke$arity$1(predict_prostate.results.sidefx.treatment_fills)], null)], null),(function (){var G__47528 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","radio","sidefx/radio",-450230605),"radiotherapy,"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__47528) : ttt.call(null,G__47528));
})()], null)," ",(function (){var G__47529 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","about","sidefx/about",-2035617818),"about"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__47529) : ttt.call(null,G__47529));
})()," "], null),new cljs.core.Keyword(null,"n","n",562130025),(7),new cljs.core.Keyword(null,"tallies?","tallies?",-496877074),tallies_QMARK_,new cljs.core.Keyword(null,"ttt","ttt",1858561240),ttt], null);
return (predict_prostate.results.sidefx.sidefx_linear.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.sidefx.sidefx_linear.cljs$core$IFn$_invoke$arity$1(G__47526) : predict_prostate.results.sidefx.sidefx_linear.call(null,G__47526));
})();
return (predict_prostate.results.sidefx.sidefx_content.cljs$core$IFn$_invoke$arity$4 ? predict_prostate.results.sidefx.sidefx_content.cljs$core$IFn$_invoke$arity$4(G__47510,G__47511,G__47512,G__47513) : predict_prostate.results.sidefx.sidefx_content.call(null,G__47510,G__47511,G__47512,G__47513));
})()));
}),null,"sidefx-discrete");
predict_prostate.results.sidefx.sidefx_more_info = rum.core.build_defc((function (ttt){
return React.createElement("div",({"style": ({"marginTop": (20)}), "className": "col-sm-12"}),(function (){var attrs47530 = (function (){var G__47535 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","mi-title","sidefx/mi-title",-47418243),"More Information"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__47535) : ttt.call(null,G__47535));
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"h3",((cljs.core.map_QMARK_(attrs47530))?sablono.interpreter.attributes(attrs47530):null),((cljs.core.map_QMARK_(attrs47530))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs47530)], null)));
})(),(function (){var attrs47531 = (function (){var G__47536 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","mi-text1","sidefx/mi-text1",-392773301),"The following websites provide excellent advice and information on treatments and their potential harms:"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__47536) : ttt.call(null,G__47536));
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"p",((cljs.core.map_QMARK_(attrs47531))?sablono.interpreter.attributes(attrs47531):null),((cljs.core.map_QMARK_(attrs47531))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs47531)], null)));
})(),(function (){var attrs47532 = (function (){var G__47537 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","mi-text2","sidefx/mi-text2",589624303),"About treatments:"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__47537) : ttt.call(null,G__47537));
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"h5",((cljs.core.map_QMARK_(attrs47532))?sablono.interpreter.attributes(attrs47532):null),((cljs.core.map_QMARK_(attrs47532))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs47532)], null)));
})(),React.createElement("ul",({"style": ({"listStyleType": "none"})}),React.createElement("li",({"key": (1)}),React.createElement("a",({"href": "http://www.cancerresearchuk.org/about-cancer/prostate-cancer/treatment", "style": ({"textDecoration": "underline"}), "rel": "noopener", "target": "blank"}),sablono.interpreter.interpret((function (){var G__47538 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","mi-text3","sidefx/mi-text3",-1630373140),"Cancer research UK"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__47538) : ttt.call(null,G__47538));
})()))),React.createElement("li",({"key": (2)}),React.createElement("a",({"href": "https://www.nhs.uk/conditions/prostate-cancer/treatment/", "rel": "noopener", "style": ({"textDecoration": "underline"}), "target": "blank"}),sablono.interpreter.interpret((function (){var G__47539 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","mi-text4","sidefx/mi-text4",1086043072),"NHS"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__47539) : ttt.call(null,G__47539));
})())))),(function (){var attrs47533 = (function (){var G__47540 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","mi-text5","sidefx/mi-text5",-26334300),"About potential harms:"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__47540) : ttt.call(null,G__47540));
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"h5",((cljs.core.map_QMARK_(attrs47533))?sablono.interpreter.attributes(attrs47533):null),((cljs.core.map_QMARK_(attrs47533))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs47533)], null)));
})(),React.createElement("ul",({"style": ({"listStyleType": "none"})}),React.createElement("li",({"key": (3)}),React.createElement("a",({"href": "https://www.nhs.uk/conditions/prostate-cancer/treatment/#radical-prostatectomy", "style": ({"textDecoration": "underline"}), "rel": "noopener", "target": "blank"}),sablono.interpreter.interpret((function (){var G__47541 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","mi-text6","sidefx/mi-text6",-445782866),"Radical prostatectomy"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__47541) : ttt.call(null,G__47541));
})()))),React.createElement("li",({"key": (4)}),React.createElement("a",({"href": "https://www.nhs.uk/conditions/prostate-cancer/treatment/#radiotherapy", "style": ({"textDecoration": "underline"}), "rel": "noopener", "target": "blank"}),sablono.interpreter.interpret((function (){var G__47542 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","mi-text7","sidefx/mi-text7",1693220591),"Radiotherapy"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__47542) : ttt.call(null,G__47542));
})())))),(function (){var attrs47534 = (function (){var G__47543 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","mi-text8","sidefx/mi-text8",932614065),"Further advice and support:"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__47543) : ttt.call(null,G__47543));
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"h5",((cljs.core.map_QMARK_(attrs47534))?sablono.interpreter.attributes(attrs47534):null),((cljs.core.map_QMARK_(attrs47534))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs47534)], null)));
})(),React.createElement("ul",({"style": ({"listStyleType": "none"})}),React.createElement("li",({"key": (1)}),React.createElement("a",({"href": "http://www.macmillan.org.uk/", "style": ({"textDecoration": "underline"}), "rel": "noopener", "target": "blank"}),sablono.interpreter.interpret((function (){var G__47544 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","mi-text9","sidefx/mi-text9",483989971),"Macmillan"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__47544) : ttt.call(null,G__47544));
})()))),React.createElement("li",({"key": (2)}),React.createElement("a",({"href": "http://prostatecanceruk.org/", "style": ({"textDecoration": "underline"}), "rel": "noopener", "target": "_blank"}),sablono.interpreter.interpret((function (){var G__47545 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","mi-text10","sidefx/mi-text10",-421827287),"Prostate Cancer UK"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__47545) : ttt.call(null,G__47545));
})()))),React.createElement("li",({"key": (3)}),React.createElement("a",({"href": "https://www.nhs.uk/pages/home.aspx", "style": ({"textDecoration": "underline"}), "rel": "noopener", "target": "_blank"}),sablono.interpreter.interpret((function (){var G__47546 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","mi-text11","sidefx/mi-text11",1175342129),"NHS Choices"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__47546) : ttt.call(null,G__47546));
})())))));
}),null,"sidefx-more-info");
predict_prostate.results.sidefx.results_in_sidefx = rum.core.build_defc((function (ttt){
return React.createElement("div",({"style": ({"marginTop": "15px"})}),sablono.interpreter.interpret((predict_prostate.results.sidefx.sidefx_discrete.cljs$core$IFn$_invoke$arity$2 ? predict_prostate.results.sidefx.sidefx_discrete.cljs$core$IFn$_invoke$arity$2(true,ttt) : predict_prostate.results.sidefx.sidefx_discrete.call(null,true,ttt))));
}),null,"results-in-sidefx");

//# sourceMappingURL=predict_prostate.results.sidefx.js.map
