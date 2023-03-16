goog.provide('predict_prostate.results.sidefx');
predict_prostate.results.sidefx.progress = rum.core.build_defc((function (percent){
return React.createElement("div",({"style": ({"backgroundColor": "#94d3f0"}), "className": "progress"}),React.createElement("div",({"role": "progress-bar", "aria-valuenow": percent, "aria-valuemin": (0), "aria-valuemax": (100), "style": ({"width": percent, "backgroundColor": "#bc3d95"}), "className": "progress-bar"}),(function (){var attrs33412 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(percent);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs33412))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["sr-only"], null)], null),attrs33412], 0))):({"className": "sr-only"})),((cljs.core.map_QMARK_(attrs33412))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["% Complete"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs33412),"% Complete"], null)));
})()));
}),null,"progress");
predict_prostate.results.sidefx.help = rum.core.build_defc((function (help_id){
var attrs33482 = (function (){var G__33483 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"help-id","help-id",-1064550845),help_id], null);
return (predict_prostate.components.button.small_help_button.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.components.button.small_help_button.cljs$core$IFn$_invoke$arity$1(G__33483) : predict_prostate.components.button.small_help_button.call(null,G__33483));
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs33482))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["pull-right"], null)], null),attrs33482], 0))):({"className": "pull-right"})),((cljs.core.map_QMARK_(attrs33482))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs33482)], null)));
}),null,"help");
predict_prostate.results.sidefx.treatment_fills = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"conservative","conservative",-1075714010),"#2222AA",new cljs.core.Keyword(null,"radical","radical",1159030213),"#3DAFEF",new cljs.core.Keyword(null,"radical-harms","radical-harms",-1715343730),"#660044",new cljs.core.Keyword(null,"radiotherapy","radiotherapy",-1259347062),"#CC5CA4"], null);
predict_prostate.results.sidefx.sidefx_header = rum.core.build_defc((function (ttt){
return React.createElement("div",({"style": ({"marginBottom": (15)}), "className": "col-xs-12"}),React.createElement("div",({"style": ({"backgroundColor": predict_prostate.results.util.alison_blue_1, "borderRadius": (3)}), "className": "row"}),React.createElement("h4",({"style": ({"marginLeft": (15)})}),sablono.interpreter.interpret((function (){var G__33488 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","ppho-title","sidefx/ppho-title",1137062973),"Potentially permanent harms of"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33488) : ttt.call(null,G__33488));
})())),React.createElement("div",({"className": "col-sm-6"}),React.createElement("div",({"style": ({"fontSize": (16), "marginBottom": (10)})}),sablono.interpreter.interpret((function (){var G__33493 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),"b1",new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"conservative","conservative",-1075714010).cljs$core$IFn$_invoke$arity$1(predict_prostate.results.sidefx.treatment_fills),new cljs.core.Keyword(null,"r","r",-471384190),(7)], null);
return (predict_prostate.components.primitives.blob.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.components.primitives.blob.cljs$core$IFn$_invoke$arity$1(G__33493) : predict_prostate.components.primitives.blob.call(null,G__33493));
})())," ",sablono.interpreter.interpret((function (){var G__33494 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","cm","sidefx/cm",2013581781),"Conservative management"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33494) : ttt.call(null,G__33494));
})())),React.createElement("div",({"style": ({"fontSize": (16), "marginBottom": (10)})}),sablono.interpreter.interpret((function (){var G__33495 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),"b2",new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"radical-harms","radical-harms",-1715343730).cljs$core$IFn$_invoke$arity$1(predict_prostate.results.sidefx.treatment_fills),new cljs.core.Keyword(null,"r","r",-471384190),(7)], null);
return (predict_prostate.components.primitives.blob.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.components.primitives.blob.cljs$core$IFn$_invoke$arity$1(G__33495) : predict_prostate.components.primitives.blob.call(null,G__33495));
})())," ",sablono.interpreter.interpret((function (){var G__33498 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","rp","sidefx/rp",-1252001846),"Radical prostatectomy"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33498) : ttt.call(null,G__33498));
})())),React.createElement("div",({"style": ({"fontSize": (16)})}),sablono.interpreter.interpret((function (){var G__33501 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),"b3",new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"radiotherapy","radiotherapy",-1259347062).cljs$core$IFn$_invoke$arity$1(predict_prostate.results.sidefx.treatment_fills),new cljs.core.Keyword(null,"r","r",-471384190),(7)], null);
return (predict_prostate.components.primitives.blob.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.components.primitives.blob.cljs$core$IFn$_invoke$arity$1(G__33501) : predict_prostate.components.primitives.blob.call(null,G__33501));
})())," ",sablono.interpreter.interpret((function (){var G__33505 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","rr","sidefx/rr",-1381212698),"Radical Radiotherapy"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33505) : ttt.call(null,G__33505));
})()))),React.createElement("div",({"className": "col-sm-6"}),React.createElement("p",({"style": ({"fontSize": (14)})}),sablono.interpreter.interpret((function (){var G__33507 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","ppho-text1","sidefx/ppho-text1",-581681790),"The following estimates are not individualised to you or your local treatment centre.\n    Your local team may have data specific to your centre which you can ask about."], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33507) : ttt.call(null,G__33507));
})())),React.createElement("p",({"style": ({"fontSize": (14), "color": "#f00"})}),sablono.interpreter.interpret((function (){var G__33516 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","ppho-text2","sidefx/ppho-text2",-983677722),"If you are in the UK, centre by centre provider outcomes are provided by\n     the National Prostate Cancer Audit which you may find useful:"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33516) : ttt.call(null,G__33516));
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
predict_prostate.results.sidefx.sidefx_bar = rum.core.build_defc((function (p__33549){
var map__33558 = p__33549;
var map__33558__$1 = cljs.core.__destructure_map(map__33558);
var fewer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33558__$1,new cljs.core.Keyword(null,"fewer","fewer",648726198));
var percent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33558__$1,new cljs.core.Keyword(null,"percent","percent",2031453817));
var fill = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33558__$1,new cljs.core.Keyword(null,"fill","fill",883462889));
var tallies_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33558__$1,new cljs.core.Keyword(null,"tallies?","tallies?",-496877074));
var ttt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33558__$1,new cljs.core.Keyword(null,"ttt","ttt",1858561240));
var f1 = predict_prostate.results.sidefx.fifty_1(percent);
var f2 = predict_prostate.results.sidefx.fifty_2(percent);
var hh = predict_prostate.results.sidefx.chunker((100),(10),percent);
var r = (4);
return React.createElement("div",({"className": "row"}),React.createElement("div",({"key": (1), "style": ({"fontSize": "120%", "fontWeight": "bold", "display": "inline-block"}), "className": "col-xs-1"}),React.createElement("span",({"style": ({"width": "100%", "textAlign": "right"})})),(cljs.core.truth_(fewer)?sablono.interpreter.interpret((function (){var G__33569 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","bar-lesst","sidefx/bar-lesst",-1099981635),"Less than"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33569) : ttt.call(null,G__33569));
})()):null)," ",sablono.interpreter.interpret(percent),"% "),(cljs.core.truth_(tallies_QMARK_)?React.createElement("div",({"style": ({"marginTop": (3)}), "className": "col-xs-11"}),React.createElement("div",({"key": (1), "style": ({"width": (220), "display": "inline-block"})}),sablono.interpreter.interpret(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (n){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["t-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join('')], null),(function (){var G__33577 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fill","fill",883462889),fill,new cljs.core.Keyword(null,"r","r",-471384190),r,new cljs.core.Keyword(null,"tally?","tally?",-1847300034),true], null);
return (predict_prostate.components.primitives.blob_10.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.components.primitives.blob_10.cljs$core$IFn$_invoke$arity$1(G__33577) : predict_prostate.components.primitives.blob_10.call(null,G__33577));
})()], null);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tens","tens",-2107583828).cljs$core$IFn$_invoke$arity$1(f1)))),sablono.interpreter.interpret((((new cljs.core.Keyword(null,"units","units",-533089095).cljs$core$IFn$_invoke$arity$1(f1) > (0)))?(function (){var G__33580 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"fill","fill",883462889),fill,new cljs.core.Keyword(null,"r","r",-471384190),r,new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"units","units",-533089095).cljs$core$IFn$_invoke$arity$1(f1),new cljs.core.Keyword(null,"tally?","tally?",-1847300034),true], null);
return (predict_prostate.components.primitives.mixed_10.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.components.primitives.mixed_10.cljs$core$IFn$_invoke$arity$1(G__33580) : predict_prostate.components.primitives.mixed_10.call(null,G__33580));
})():null)),sablono.interpreter.interpret(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (n){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["0-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join('')], null),(function (){var G__33585 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fill","fill",883462889),(cljs.core.truth_(tallies_QMARK_)?"#BBBBBB":"white"),new cljs.core.Keyword(null,"r","r",-471384190),r,new cljs.core.Keyword(null,"tally?","tally?",-1847300034),true], null);
return (predict_prostate.components.primitives.blob_10.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.components.primitives.blob_10.cljs$core$IFn$_invoke$arity$1(G__33585) : predict_prostate.components.primitives.blob_10.call(null,G__33585));
})()], null);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tens-empty","tens-empty",1703381257).cljs$core$IFn$_invoke$arity$1(f1))))),React.createElement("div",({"key": (2), "style": ({"width": (220), "display": "inline-block"})}),sablono.interpreter.interpret(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (n){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["t-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join('')], null),(function (){var G__33586 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fill","fill",883462889),fill,new cljs.core.Keyword(null,"r","r",-471384190),r,new cljs.core.Keyword(null,"tally?","tally?",-1847300034),true], null);
return (predict_prostate.components.primitives.blob_10.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.components.primitives.blob_10.cljs$core$IFn$_invoke$arity$1(G__33586) : predict_prostate.components.primitives.blob_10.call(null,G__33586));
})()], null);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tens","tens",-2107583828).cljs$core$IFn$_invoke$arity$1(f2)))),sablono.interpreter.interpret((((new cljs.core.Keyword(null,"units","units",-533089095).cljs$core$IFn$_invoke$arity$1(f2) > (0)))?(function (){var G__33589 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"fill","fill",883462889),fill,new cljs.core.Keyword(null,"r","r",-471384190),r,new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"units","units",-533089095).cljs$core$IFn$_invoke$arity$1(f2),new cljs.core.Keyword(null,"tally?","tally?",-1847300034),true], null);
return (predict_prostate.components.primitives.mixed_10.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.components.primitives.mixed_10.cljs$core$IFn$_invoke$arity$1(G__33589) : predict_prostate.components.primitives.mixed_10.call(null,G__33589));
})():null)),sablono.interpreter.interpret(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (n){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["0-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join('')], null),(function (){var G__33594 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fill","fill",883462889),(cljs.core.truth_(tallies_QMARK_)?"#BBBBBB":"white"),new cljs.core.Keyword(null,"r","r",-471384190),r,new cljs.core.Keyword(null,"tally?","tally?",-1847300034),true], null);
return (predict_prostate.components.primitives.blob_10.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.components.primitives.blob_10.cljs$core$IFn$_invoke$arity$1(G__33594) : predict_prostate.components.primitives.blob_10.call(null,G__33594));
})()], null);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tens-empty","tens-empty",1703381257).cljs$core$IFn$_invoke$arity$1(f2)))))):(function (){var attrs33575 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (n){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["t-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join('')], null),(function (){var G__33595 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fill","fill",883462889),fill,new cljs.core.Keyword(null,"r","r",-471384190),r], null);
return (predict_prostate.components.primitives.blob_10.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.components.primitives.blob_10.cljs$core$IFn$_invoke$arity$1(G__33595) : predict_prostate.components.primitives.blob_10.call(null,G__33595));
})()], null);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tens","tens",-2107583828).cljs$core$IFn$_invoke$arity$1(hh)));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs33575))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["col-xs-12"], null)], null),attrs33575], 0))):({"className": "col-xs-12"})),((cljs.core.map_QMARK_(attrs33575))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret((((new cljs.core.Keyword(null,"units","units",-533089095).cljs$core$IFn$_invoke$arity$1(hh) > (0)))?(function (){var G__33596 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fill","fill",883462889),fill,new cljs.core.Keyword(null,"r","r",-471384190),r,new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"units","units",-533089095).cljs$core$IFn$_invoke$arity$1(hh)], null);
return (predict_prostate.components.primitives.mixed_10.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.components.primitives.mixed_10.cljs$core$IFn$_invoke$arity$1(G__33596) : predict_prostate.components.primitives.mixed_10.call(null,G__33596));
})():null)),sablono.interpreter.interpret(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (n){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["0-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join('')], null),(function (){var G__33597 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fill","fill",883462889),"white",new cljs.core.Keyword(null,"r","r",-471384190),r], null);
return (predict_prostate.components.primitives.blob_10.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.components.primitives.blob_10.cljs$core$IFn$_invoke$arity$1(G__33597) : predict_prostate.components.primitives.blob_10.call(null,G__33597));
})()], null);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tens-empty","tens-empty",1703381257).cljs$core$IFn$_invoke$arity$1(hh))))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs33575),sablono.interpreter.interpret((((new cljs.core.Keyword(null,"units","units",-533089095).cljs$core$IFn$_invoke$arity$1(hh) > (0)))?(function (){var G__33601 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fill","fill",883462889),fill,new cljs.core.Keyword(null,"r","r",-471384190),r,new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"units","units",-533089095).cljs$core$IFn$_invoke$arity$1(hh)], null);
return (predict_prostate.components.primitives.mixed_10.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.components.primitives.mixed_10.cljs$core$IFn$_invoke$arity$1(G__33601) : predict_prostate.components.primitives.mixed_10.call(null,G__33601));
})():null)),sablono.interpreter.interpret(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (n){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["0-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join('')], null),(function (){var G__33603 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fill","fill",883462889),"white",new cljs.core.Keyword(null,"r","r",-471384190),r], null);
return (predict_prostate.components.primitives.blob_10.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.components.primitives.blob_10.cljs$core$IFn$_invoke$arity$1(G__33603) : predict_prostate.components.primitives.blob_10.call(null,G__33603));
})()], null);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tens-empty","tens-empty",1703381257).cljs$core$IFn$_invoke$arity$1(hh))))], null)));
})()));
}),null,"sidefx-bar");
predict_prostate.results.sidefx.fewer_helper = rum.core.build_defc((function() {
var G__34004 = null;
var G__34004__2 = (function (prefix,ttt){
return sablono.interpreter.interpret((predict_prostate.results.sidefx.fewer_helper.cljs$core$IFn$_invoke$arity$3 ? predict_prostate.results.sidefx.fewer_helper.cljs$core$IFn$_invoke$arity$3(prefix,"",ttt) : predict_prostate.results.sidefx.fewer_helper.call(null,prefix,"",ttt)));
});
var G__34004__3 = (function (prefix,n,ttt){
var attrs33607 = prefix;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs33607))?sablono.interpreter.attributes(attrs33607):null),((cljs.core.map_QMARK_(attrs33607))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs33608 = (function (){var G__33613 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","fewer","sidefx/fewer",1616828099),"fewer than"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33613) : ttt.call(null,G__33613));
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"b",((cljs.core.map_QMARK_(attrs33608))?sablono.interpreter.attributes(attrs33608):null),((cljs.core.map_QMARK_(attrs33608))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",(cljs.core.truth_(n)?(function (){var attrs33616 = n;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs33616))?sablono.interpreter.attributes(attrs33616):null),((cljs.core.map_QMARK_(attrs33616))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [" "], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs33616)," "], null)));
})():"")], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs33608)," ",(cljs.core.truth_(n)?(function (){var attrs33622 = n;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs33622))?sablono.interpreter.attributes(attrs33622):null),((cljs.core.map_QMARK_(attrs33622))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [" "], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs33622)," "], null)));
})():"")], null)));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs33607),(function (){var attrs33609 = (function (){var G__33623 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","fewer","sidefx/fewer",1616828099),"fewer than"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33623) : ttt.call(null,G__33623));
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"b",((cljs.core.map_QMARK_(attrs33609))?sablono.interpreter.attributes(attrs33609):null),((cljs.core.map_QMARK_(attrs33609))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",(cljs.core.truth_(n)?(function (){var attrs33624 = n;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs33624))?sablono.interpreter.attributes(attrs33624):null),((cljs.core.map_QMARK_(attrs33624))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [" "], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs33624)," "], null)));
})():"")], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs33609)," ",(cljs.core.truth_(n)?(function (){var attrs33629 = n;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs33629))?sablono.interpreter.attributes(attrs33629):null),((cljs.core.map_QMARK_(attrs33629))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [" "], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs33629)," "], null)));
})():"")], null)));
})()], null)));
});
G__34004 = function(prefix,n,ttt){
switch(arguments.length){
case 2:
return G__34004__2.call(this,prefix,n);
case 3:
return G__34004__3.call(this,prefix,n,ttt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__34004.cljs$core$IFn$_invoke$arity$2 = G__34004__2;
G__34004.cljs$core$IFn$_invoke$arity$3 = G__34004__3;
return G__34004;
})()
,null,"fewer-helper");
predict_prostate.results.sidefx.sidefx_linear = rum.core.build_defc((function (p__33632){
var map__33633 = p__33632;
var map__33633__$1 = cljs.core.__destructure_map(map__33633);
var treatment = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33633__$1,new cljs.core.Keyword(null,"treatment","treatment",515251816));
var prefix = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33633__$1,new cljs.core.Keyword(null,"prefix","prefix",-265908465));
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33633__$1,new cljs.core.Keyword(null,"n","n",562130025));
var fewer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33633__$1,new cljs.core.Keyword(null,"fewer","fewer",648726198));
var tallies_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33633__$1,new cljs.core.Keyword(null,"tallies?","tallies?",-496877074));
var ttt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33633__$1,new cljs.core.Keyword(null,"ttt","ttt",1858561240));
var quantity = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),Math.round(n)," ",(function (){var G__33638 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","lin-in","sidefx/lin-in",554234320),"in"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33638) : ttt.call(null,G__33638));
})()," 100 "], null);
var m = rum.core.react(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"sidefx-maturities","sidefx-maturities",-1735430249)));
return React.createElement("div",null,(function (){var attrs33641 = prefix;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs33641))?sablono.interpreter.attributes(attrs33641):null),((cljs.core.map_QMARK_(attrs33641))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(fewer)?(function (){var attrs33652 = quantity;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"b",((cljs.core.map_QMARK_(attrs33652))?sablono.interpreter.attributes(attrs33652):null),((cljs.core.map_QMARK_(attrs33652))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs33652)], null)));
})():sablono.interpreter.interpret(quantity))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs33641),(cljs.core.truth_(fewer)?(function (){var attrs33654 = quantity;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"b",((cljs.core.map_QMARK_(attrs33654))?sablono.interpreter.attributes(attrs33654):null),((cljs.core.map_QMARK_(attrs33654))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs33654)], null)));
})():sablono.interpreter.interpret(quantity))], null)));
})(),(function (){var attrs33642 = (function (){var G__33657 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","lin-aft-1","sidefx/lin-aft-1",700152003),"men have this issue after"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33657) : ttt.call(null,G__33657));
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs33642))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["print-only"], null)], null),attrs33642], 0))):({"className": "print-only"})),((cljs.core.map_QMARK_(attrs33642))?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",sablono.interpreter.interpret(m)," ",sablono.interpreter.interpret((function (){var G__33660 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","lin-aft-2","sidefx/lin-aft-2",1303612160),"years"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33660) : ttt.call(null,G__33660));
})()),"."], null):new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs33642)," ",sablono.interpreter.interpret(m)," ",sablono.interpreter.interpret((function (){var G__33661 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","lin-aft-2","sidefx/lin-aft-2",1303612160),"years"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33661) : ttt.call(null,G__33661));
})()),"."], null)));
})(),(function (){var attrs33643 = (function (){var G__33664 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","lin-aft-1","sidefx/lin-aft-1",700152003),"men have this issue after"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33664) : ttt.call(null,G__33664));
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs33643))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["screen-only"], null)], null),attrs33643], 0))):({"className": "screen-only"})),((cljs.core.map_QMARK_(attrs33643))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [" "], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs33643)," "], null)));
})(),(function (){var attrs33644 = (predict_prostate.components.button.maturity_picker.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.components.button.maturity_picker.cljs$core$IFn$_invoke$arity$1(ttt) : predict_prostate.components.button.maturity_picker.call(null,ttt));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs33644))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["screen-only"], null)], null),attrs33644], 0))):({"className": "screen-only"})),((cljs.core.map_QMARK_(attrs33644))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [" "], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs33644)," "], null)));
})(),(function (){var attrs33645 = (function (){var G__33676 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","lin-aft-2","sidefx/lin-aft-2",1303612160),"years"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33676) : ttt.call(null,G__33676));
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs33645))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["screen-only"], null)], null),attrs33645], 0))):({"className": "screen-only"})),((cljs.core.map_QMARK_(attrs33645))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["."], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs33645),"."], null)));
})(),sablono.interpreter.interpret((function (){var G__33677 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fewer","fewer",648726198),fewer,new cljs.core.Keyword(null,"percent","percent",2031453817),n,new cljs.core.Keyword(null,"fill","fill",883462889),(treatment.cljs$core$IFn$_invoke$arity$1 ? treatment.cljs$core$IFn$_invoke$arity$1(predict_prostate.results.sidefx.treatment_fills) : treatment.call(null,predict_prostate.results.sidefx.treatment_fills)),new cljs.core.Keyword(null,"tallies?","tallies?",-496877074),tallies_QMARK_,new cljs.core.Keyword(null,"ttt","ttt",1858561240),ttt], null);
return (predict_prostate.results.sidefx.sidefx_bar.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.sidefx.sidefx_bar.cljs$core$IFn$_invoke$arity$1(G__33677) : predict_prostate.results.sidefx.sidefx_bar.call(null,G__33677));
})()),React.createElement("br",null));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"sidefx-linear");
predict_prostate.results.sidefx.sidefx_content = rum.core.build_defc((function() { 
var G__34091__delegate = function (p__33694,content){
var map__33695 = p__33694;
var map__33695__$1 = cljs.core.__destructure_map(map__33695);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33695__$1,new cljs.core.Keyword(null,"title","title",636505583));
var sub_title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33695__$1,new cljs.core.Keyword(null,"sub-title","sub-title",-1781490288));
var subsub_title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33695__$1,new cljs.core.Keyword(null,"subsub-title","subsub-title",1374352131));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33695__$1,new cljs.core.Keyword(null,"source","source",-433931539));
return React.createElement("div",({"style": ({"padding": "0 15px 0 15px", "fontSize": (16)})}),(function (){var attrs33697 = title;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"h4",((cljs.core.map_QMARK_(attrs33697))?sablono.interpreter.attributes(attrs33697):null),((cljs.core.map_QMARK_(attrs33697))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs33697)], null)));
})(),(function (){var attrs33698 = sub_title;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"h5",((cljs.core.map_QMARK_(attrs33698))?sablono.interpreter.attributes(attrs33698):null),((cljs.core.map_QMARK_(attrs33698))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs33698)], null)));
})(),(function (){var attrs33699 = subsub_title;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"h6",((cljs.core.map_QMARK_(attrs33699))?sablono.interpreter.attributes(attrs33699):null),((cljs.core.map_QMARK_(attrs33699))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs33699)], null)));
})(),sablono.interpreter.interpret(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__33689_SHARP_,p2__33688_SHARP_){
return rum.core.with_key(p2__33688_SHARP_,p1__33689_SHARP_);
}),content)),sablono.interpreter.interpret((cljs.core.truth_(source)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".alert.alert-info",".alert.alert-info",1970443868),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(12)], null)], null),(source.cljs$core$IFn$_invoke$arity$0 ? source.cljs$core$IFn$_invoke$arity$0() : source.call(null))], null):null)));
};
var G__34091 = function (p__33694,var_args){
var content = null;
if (arguments.length > 1) {
var G__34093__i = 0, G__34093__a = new Array(arguments.length -  1);
while (G__34093__i < G__34093__a.length) {G__34093__a[G__34093__i] = arguments[G__34093__i + 1]; ++G__34093__i;}
  content = new cljs.core.IndexedSeq(G__34093__a,0,null);
} 
return G__34091__delegate.call(this,p__33694,content);};
G__34091.cljs$lang$maxFixedArity = 1;
G__34091.cljs$lang$applyTo = (function (arglist__34096){
var p__33694 = cljs.core.first(arglist__34096);
var content = cljs.core.rest(arglist__34096);
return G__34091__delegate(p__33694,content);
});
G__34091.cljs$core$IFn$_invoke$arity$variadic = G__34091__delegate;
return G__34091;
})()
,null,"sidefx-content");
predict_prostate.results.sidefx.erectile_source = rum.core.build_defc((function (ttt){
var attrs33713 = (function (){var G__33722 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","eresrc-text1","sidefx/eresrc-text1",1406494822),"Estimates for erectile dysfunction have been taken from the UK-based Prostate Testing for Cancer and Treatment (ProtecT) trial. The full research can be\n        read here:"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33722) : ttt.call(null,G__33722));
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs33713))?sablono.interpreter.attributes(attrs33713):null),((cljs.core.map_QMARK_(attrs33713))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",React.createElement("a",({"href": "https://evidence.nejm.org/doi/10.1056/EVIDoa2300018", "target": "_blank"}),"https://evidence.nejm.org/doi/10.1056/EVIDoa2300018")], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs33713)," ",React.createElement("a",({"href": "https://evidence.nejm.org/doi/10.1056/EVIDoa2300018", "target": "_blank"}),"https://evidence.nejm.org/doi/10.1056/EVIDoa2300018")], null)));
}),null,"erectile-source");
predict_prostate.results.sidefx.incontinence_source = rum.core.build_defc((function (ttt){
var attrs33727 = (function (){var G__33736 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","incsrc-text1","sidefx/incsrc-text1",-1325551852),"Estimates for incontinence have been taken from the UK-based Prostate Testing for\n       Cancer and Treatment (ProtecT) trial. The full research can be read here:"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33736) : ttt.call(null,G__33736));
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs33727))?sablono.interpreter.attributes(attrs33727):null),((cljs.core.map_QMARK_(attrs33727))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",React.createElement("a",({"href": "https://evidence.nejm.org/doi/10.1056/EVIDoa2300018", "target": "_blank"}),"https://evidence.nejm.org/doi/10.1056/EVIDoa2300018")], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs33727)," ",React.createElement("a",({"href": "https://evidence.nejm.org/doi/10.1056/EVIDoa2300018", "target": "_blank"}),"https://evidence.nejm.org/doi/10.1056/EVIDoa2300018")], null)));
}),null,"incontinence-source");
predict_prostate.results.sidefx.bowel_source = rum.core.build_defc((function (ttt){
return React.createElement("span",({"fontSize": (12)}),sablono.interpreter.interpret((function (){var G__33746 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","bowsrc-text1","sidefx/bowsrc-text1",-2008110457),"Estimates for bowel issues have been taken from the UK-based Prostate Testing for\n       Cancer and Treatment (ProtecT) trial. The full research can be read here:"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33746) : ttt.call(null,G__33746));
})())," ",React.createElement("a",({"href": "https://evidence.nejm.org/doi/10.1056/EVIDoa2300018", "target": "_blank"}),"https://evidence.nejm.org/doi/10.1056/EVIDoa2300018"));
}),null,"bowel-source");
predict_prostate.results.sidefx.sidefx_discrete = rum.core.build_defc((function (tallies_QMARK_,ttt){
var m = rum.core.react(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"sidefx-maturities","sidefx-maturities",-1735430249)));
return React.createElement("div",({"style": ({"border": "1px solid #CCCCCC", "borderRadius": (3), "fontSize": (16)})}),sablono.interpreter.interpret((predict_prostate.results.sidefx.sidefx_header.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.sidefx.sidefx_header.cljs$core$IFn$_invoke$arity$1(ttt) : predict_prostate.results.sidefx.sidefx_header.call(null,ttt))),sablono.interpreter.interpret((function (){var G__33755 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),(function (){var G__33759 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","eredys-title","sidefx/eredys-title",-967487873),"Erectile dysfunction"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33759) : ttt.call(null,G__33759));
})(),new cljs.core.Keyword(null,"sub-title","sub-title",-1781490288),(function (){var G__33760 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","eredys-subtitle","sidefx/eredys-subtitle",-814812706),"Defined as: 'Erections not firm enough for intercourse'"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33760) : ttt.call(null,G__33760));
})(),new cljs.core.Keyword(null,"subsub-title","subsub-title",1374352131),(function (){var G__33761 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","eredys-subsubtitle","sidefx/eredys-subsubtitle",-309428800),"Percentages shown are in addition to men who may already have this problem before a treatment is given"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33761) : ttt.call(null,G__33761));
})(),new cljs.core.Keyword(null,"source","source",-433931539),(function (){
return (predict_prostate.results.sidefx.erectile_source.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.sidefx.erectile_source.cljs$core$IFn$_invoke$arity$1(ttt) : predict_prostate.results.sidefx.erectile_source.call(null,ttt));
})], null);
var G__33756 = (function (){var G__33762 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"treatment","treatment",515251816),new cljs.core.Keyword(null,"conservative","conservative",-1075714010),new cljs.core.Keyword(null,"prefix","prefix",-265908465),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(function (){var G__33763 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","with","sidefx/with",243394541),"With"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33763) : ttt.call(null,G__33763));
})()," ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"conservative","conservative",-1075714010).cljs$core$IFn$_invoke$arity$1(predict_prostate.results.sidefx.treatment_fills)], null)], null),(function (){var G__33767 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","cons-man2","sidefx/cons-man2",1760439626),"conservative management (men who did not subsequently change to radical treatment),"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33767) : ttt.call(null,G__33767));
})()], null)," ",(function (){var G__33770 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","about","sidefx/about",-2035617818),"about"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33770) : ttt.call(null,G__33770));
})()," "], null),new cljs.core.Keyword(null,"n","n",562130025),(function (){var G__33773 = m;
switch (G__33773) {
case (3):
return (53);

break;
case (6):
return (66);

break;
case (9):
return (69);

break;
case (12):
return (77);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__33773)].join('')));

}
})(),new cljs.core.Keyword(null,"tallies?","tallies?",-496877074),tallies_QMARK_,new cljs.core.Keyword(null,"ttt","ttt",1858561240),ttt], null);
return (predict_prostate.results.sidefx.sidefx_linear.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.sidefx.sidefx_linear.cljs$core$IFn$_invoke$arity$1(G__33762) : predict_prostate.results.sidefx.sidefx_linear.call(null,G__33762));
})();
var G__33757 = (function (){var G__33801 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"treatment","treatment",515251816),new cljs.core.Keyword(null,"radical-harms","radical-harms",-1715343730),new cljs.core.Keyword(null,"prefix","prefix",-265908465),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(function (){var G__33802 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","with","sidefx/with",243394541),"With"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33802) : ttt.call(null,G__33802));
})()," ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"radical-harms","radical-harms",-1715343730).cljs$core$IFn$_invoke$arity$1(predict_prostate.results.sidefx.treatment_fills)], null)], null),(function (){var G__33803 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","radp","sidefx/radp",320511672),"radical prostatectomy (surgery),"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33803) : ttt.call(null,G__33803));
})()], null)," ",(function (){var G__33804 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","about","sidefx/about",-2035617818),"about"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33804) : ttt.call(null,G__33804));
})()," "], null),new cljs.core.Keyword(null,"n","n",562130025),(function (){var G__33806 = m;
switch (G__33806) {
case (3):
return (79);

break;
case (6):
return (84);

break;
case (9):
return (85);

break;
case (12):
return (87);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__33806)].join('')));

}
})(),new cljs.core.Keyword(null,"tallies?","tallies?",-496877074),tallies_QMARK_,new cljs.core.Keyword(null,"ttt","ttt",1858561240),ttt], null);
return (predict_prostate.results.sidefx.sidefx_linear.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.sidefx.sidefx_linear.cljs$core$IFn$_invoke$arity$1(G__33801) : predict_prostate.results.sidefx.sidefx_linear.call(null,G__33801));
})();
var G__33758 = (function (){var G__33807 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"treatment","treatment",515251816),new cljs.core.Keyword(null,"radiotherapy","radiotherapy",-1259347062),new cljs.core.Keyword(null,"prefix","prefix",-265908465),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(function (){var G__33808 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","with","sidefx/with",243394541),"With"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33808) : ttt.call(null,G__33808));
})()," ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"radiotherapy","radiotherapy",-1259347062).cljs$core$IFn$_invoke$arity$1(predict_prostate.results.sidefx.treatment_fills)], null)], null),(function (){var G__33811 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","radio","sidefx/radio",-450230605),"radical radiotherapy (external beam),"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33811) : ttt.call(null,G__33811));
})()], null)," ",(function (){var G__33813 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","about","sidefx/about",-2035617818),"about"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33813) : ttt.call(null,G__33813));
})()," "], null),new cljs.core.Keyword(null,"n","n",562130025),(function (){var G__33815 = m;
switch (G__33815) {
case (3):
return (66);

break;
case (6):
return (73);

break;
case (9):
return (79);

break;
case (12):
return (85);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__33815)].join('')));

}
})(),new cljs.core.Keyword(null,"tallies?","tallies?",-496877074),tallies_QMARK_,new cljs.core.Keyword(null,"ttt","ttt",1858561240),ttt], null);
return (predict_prostate.results.sidefx.sidefx_linear.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.sidefx.sidefx_linear.cljs$core$IFn$_invoke$arity$1(G__33807) : predict_prostate.results.sidefx.sidefx_linear.call(null,G__33807));
})();
return (predict_prostate.results.sidefx.sidefx_content.cljs$core$IFn$_invoke$arity$4 ? predict_prostate.results.sidefx.sidefx_content.cljs$core$IFn$_invoke$arity$4(G__33755,G__33756,G__33757,G__33758) : predict_prostate.results.sidefx.sidefx_content.call(null,G__33755,G__33756,G__33757,G__33758));
})()),sablono.interpreter.interpret((function (){var G__33816 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),(function (){var G__33821 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","incon-title","sidefx/incon-title",-983966664),"Incontinence"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33821) : ttt.call(null,G__33821));
})(),new cljs.core.Keyword(null,"sub-title","sub-title",-1781490288),(function (){var G__33822 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","incon-subtitle","sidefx/incon-subtitle",625073468),"Defined as: 'Use of 1 or more pads per day in the past 4 weeks and assuming this problem does not exist before treatment'"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33822) : ttt.call(null,G__33822));
})(),new cljs.core.Keyword(null,"source","source",-433931539),(function (){
return (predict_prostate.results.sidefx.incontinence_source.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.sidefx.incontinence_source.cljs$core$IFn$_invoke$arity$1(ttt) : predict_prostate.results.sidefx.incontinence_source.call(null,ttt));
})], null);
var G__33817 = (function (){var G__33824 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"treatment","treatment",515251816),new cljs.core.Keyword(null,"conservative","conservative",-1075714010),new cljs.core.Keyword(null,"prefix","prefix",-265908465),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(function (){var G__33825 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","with","sidefx/with",243394541),"With"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33825) : ttt.call(null,G__33825));
})()," ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"conservative","conservative",-1075714010).cljs$core$IFn$_invoke$arity$1(predict_prostate.results.sidefx.treatment_fills)], null)], null),(function (){var G__33827 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","cons-man2","sidefx/cons-man2",1760439626),"conservative management (men who did not subsequently change to radical treatment),"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33827) : ttt.call(null,G__33827));
})()], null)," ",(function (){var G__33828 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","about","sidefx/about",-2035617818),"about"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33828) : ttt.call(null,G__33828));
})()," "], null),new cljs.core.Keyword(null,"n","n",562130025),(function (){var G__33830 = m;
switch (G__33830) {
case (3):
return (1);

break;
case (6):
return (2);

break;
case (9):
return (3);

break;
case (12):
return (3);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__33830)].join('')));

}
})(),new cljs.core.Keyword(null,"tallies?","tallies?",-496877074),tallies_QMARK_,new cljs.core.Keyword(null,"ttt","ttt",1858561240),ttt], null);
return (predict_prostate.results.sidefx.sidefx_linear.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.sidefx.sidefx_linear.cljs$core$IFn$_invoke$arity$1(G__33824) : predict_prostate.results.sidefx.sidefx_linear.call(null,G__33824));
})();
var G__33818 = (function (){var G__33831 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"treatment","treatment",515251816),new cljs.core.Keyword(null,"radical-harms","radical-harms",-1715343730),new cljs.core.Keyword(null,"prefix","prefix",-265908465),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(function (){var G__33832 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","with","sidefx/with",243394541),"With"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33832) : ttt.call(null,G__33832));
})()," ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"radical-harms","radical-harms",-1715343730).cljs$core$IFn$_invoke$arity$1(predict_prostate.results.sidefx.treatment_fills)], null)], null),(function (){var G__33834 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","radp","sidefx/radp",320511672),"radical prostatectomy (surgery),"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33834) : ttt.call(null,G__33834));
})()], null)," ",(function (){var G__33835 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","about","sidefx/about",-2035617818),"about"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33835) : ttt.call(null,G__33835));
})()," "], null),new cljs.core.Keyword(null,"n","n",562130025),(function (){var G__33836 = m;
switch (G__33836) {
case (3):
return (19);

break;
case (6):
return (17);

break;
case (9):
return (20);

break;
case (12):
return (24);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__33836)].join('')));

}
})(),new cljs.core.Keyword(null,"tallies?","tallies?",-496877074),tallies_QMARK_,new cljs.core.Keyword(null,"ttt","ttt",1858561240),ttt], null);
return (predict_prostate.results.sidefx.sidefx_linear.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.sidefx.sidefx_linear.cljs$core$IFn$_invoke$arity$1(G__33831) : predict_prostate.results.sidefx.sidefx_linear.call(null,G__33831));
})();
var G__33819 = (function (){var G__33841 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"treatment","treatment",515251816),new cljs.core.Keyword(null,"radiotherapy","radiotherapy",-1259347062),new cljs.core.Keyword(null,"prefix","prefix",-265908465),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(function (){var G__33842 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","with","sidefx/with",243394541),"With"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33842) : ttt.call(null,G__33842));
})()," ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"radiotherapy","radiotherapy",-1259347062).cljs$core$IFn$_invoke$arity$1(predict_prostate.results.sidefx.treatment_fills)], null)], null),(function (){var G__33843 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","radio","sidefx/radio",-450230605),"radical radiotherapy (external beam),"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33843) : ttt.call(null,G__33843));
})()], null)," ",(function (){var G__33845 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","about","sidefx/about",-2035617818),"about"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33845) : ttt.call(null,G__33845));
})()," "], null),new cljs.core.Keyword(null,"n","n",562130025),(function (){var G__33846 = m;
switch (G__33846) {
case (3):
return (3);

break;
case (6):
return (4);

break;
case (9):
return (4);

break;
case (12):
return (8);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__33846)].join('')));

}
})(),new cljs.core.Keyword(null,"tallies?","tallies?",-496877074),tallies_QMARK_,new cljs.core.Keyword(null,"ttt","ttt",1858561240),ttt], null);
return (predict_prostate.results.sidefx.sidefx_linear.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.sidefx.sidefx_linear.cljs$core$IFn$_invoke$arity$1(G__33841) : predict_prostate.results.sidefx.sidefx_linear.call(null,G__33841));
})();
return (predict_prostate.results.sidefx.sidefx_content.cljs$core$IFn$_invoke$arity$4 ? predict_prostate.results.sidefx.sidefx_content.cljs$core$IFn$_invoke$arity$4(G__33816,G__33817,G__33818,G__33819) : predict_prostate.results.sidefx.sidefx_content.call(null,G__33816,G__33817,G__33818,G__33819));
})()),sablono.interpreter.interpret((function (){var G__33848 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),(function (){var G__33852 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","bowiss-title","sidefx/bowiss-title",-275898307),"Bowel issues"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33852) : ttt.call(null,G__33852));
})(),new cljs.core.Keyword(null,"sub-title","sub-title",-1781490288),(function (){var G__33854 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","bowiss-subtitle","sidefx/bowiss-subtitle",-1316088249),"Defined as: 'Bloody stools about half the time or more frequently'"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33854) : ttt.call(null,G__33854));
})(),new cljs.core.Keyword(null,"source","source",-433931539),(function (){
return (predict_prostate.results.sidefx.bowel_source.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.sidefx.bowel_source.cljs$core$IFn$_invoke$arity$1(ttt) : predict_prostate.results.sidefx.bowel_source.call(null,ttt));
})], null);
var G__33849 = (function (){var G__33856 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"treatment","treatment",515251816),new cljs.core.Keyword(null,"conservative","conservative",-1075714010),new cljs.core.Keyword(null,"prefix","prefix",-265908465),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(function (){var G__33857 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","with","sidefx/with",243394541),"With"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33857) : ttt.call(null,G__33857));
})()," ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"conservative","conservative",-1075714010).cljs$core$IFn$_invoke$arity$1(predict_prostate.results.sidefx.treatment_fills)], null)], null),(function (){var G__33858 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","cons-man","sidefx/cons-man",552309001),"conservative management,"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33858) : ttt.call(null,G__33858));
})()], null)," ",(function (){var G__33860 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","about","sidefx/about",-2035617818),"about"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33860) : ttt.call(null,G__33860));
})()," "], null),new cljs.core.Keyword(null,"n","n",562130025),(function (){var G__33861 = m;
switch (G__33861) {
case (3):
return (2);

break;
case (6):
return (1);

break;
case (9):
return (2);

break;
case (12):
return (1);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__33861)].join('')));

}
})(),new cljs.core.Keyword(null,"tallies?","tallies?",-496877074),tallies_QMARK_,new cljs.core.Keyword(null,"ttt","ttt",1858561240),ttt], null);
return (predict_prostate.results.sidefx.sidefx_linear.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.sidefx.sidefx_linear.cljs$core$IFn$_invoke$arity$1(G__33856) : predict_prostate.results.sidefx.sidefx_linear.call(null,G__33856));
})();
var G__33850 = (function (){var G__33863 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"treatment","treatment",515251816),new cljs.core.Keyword(null,"radical-harms","radical-harms",-1715343730),new cljs.core.Keyword(null,"prefix","prefix",-265908465),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(function (){var G__33864 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","with","sidefx/with",243394541),"With"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33864) : ttt.call(null,G__33864));
})()," ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"radical-harms","radical-harms",-1715343730).cljs$core$IFn$_invoke$arity$1(predict_prostate.results.sidefx.treatment_fills)], null)], null),(function (){var G__33865 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","radp","sidefx/radp",320511672),"radical prostatectomy (surgery),"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33865) : ttt.call(null,G__33865));
})()], null)," ",(function (){var G__33866 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","about","sidefx/about",-2035617818),"about"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33866) : ttt.call(null,G__33866));
})()," "], null),new cljs.core.Keyword(null,"n","n",562130025),(function (){var G__33867 = m;
switch (G__33867) {
case (3):
return (1);

break;
case (6):
return (1);

break;
case (9):
return (1);

break;
case (12):
return (2);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__33867)].join('')));

}
})(),new cljs.core.Keyword(null,"tallies?","tallies?",-496877074),tallies_QMARK_,new cljs.core.Keyword(null,"ttt","ttt",1858561240),ttt], null);
return (predict_prostate.results.sidefx.sidefx_linear.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.sidefx.sidefx_linear.cljs$core$IFn$_invoke$arity$1(G__33863) : predict_prostate.results.sidefx.sidefx_linear.call(null,G__33863));
})();
var G__33851 = (function (){var G__33869 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"treatment","treatment",515251816),new cljs.core.Keyword(null,"radiotherapy","radiotherapy",-1259347062),new cljs.core.Keyword(null,"prefix","prefix",-265908465),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(function (){var G__33870 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","with","sidefx/with",243394541),"With"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33870) : ttt.call(null,G__33870));
})()," ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"radiotherapy","radiotherapy",-1259347062).cljs$core$IFn$_invoke$arity$1(predict_prostate.results.sidefx.treatment_fills)], null)], null),(function (){var G__33871 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","radio","sidefx/radio",-450230605),"radical radiotherapy (external beam),"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33871) : ttt.call(null,G__33871));
})()], null)," ",(function (){var G__33872 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","about","sidefx/about",-2035617818),"about"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33872) : ttt.call(null,G__33872));
})()," "], null),new cljs.core.Keyword(null,"n","n",562130025),(function (){var G__33875 = m;
switch (G__33875) {
case (3):
return (7);

break;
case (6):
return (6);

break;
case (9):
return (3);

break;
case (12):
return (2);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__33875)].join('')));

}
})(),new cljs.core.Keyword(null,"tallies?","tallies?",-496877074),tallies_QMARK_,new cljs.core.Keyword(null,"ttt","ttt",1858561240),ttt], null);
return (predict_prostate.results.sidefx.sidefx_linear.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.sidefx.sidefx_linear.cljs$core$IFn$_invoke$arity$1(G__33869) : predict_prostate.results.sidefx.sidefx_linear.call(null,G__33869));
})();
return (predict_prostate.results.sidefx.sidefx_content.cljs$core$IFn$_invoke$arity$4 ? predict_prostate.results.sidefx.sidefx_content.cljs$core$IFn$_invoke$arity$4(G__33848,G__33849,G__33850,G__33851) : predict_prostate.results.sidefx.sidefx_content.call(null,G__33848,G__33849,G__33850,G__33851));
})()));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"sidefx-discrete");
predict_prostate.results.sidefx.sidefx_more_info = rum.core.build_defc((function (ttt){
return React.createElement("div",({"style": ({"marginTop": (20)}), "className": "col-sm-12"}),(function (){var attrs33882 = (function (){var G__33888 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","mi-title","sidefx/mi-title",-47418243),"More Information"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33888) : ttt.call(null,G__33888));
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"h3",((cljs.core.map_QMARK_(attrs33882))?sablono.interpreter.attributes(attrs33882):null),((cljs.core.map_QMARK_(attrs33882))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs33882)], null)));
})(),(function (){var attrs33883 = (function (){var G__33889 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","mi-text1","sidefx/mi-text1",-392773301),"The following websites provide excellent advice and information on treatments and their potential harms:"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33889) : ttt.call(null,G__33889));
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"p",((cljs.core.map_QMARK_(attrs33883))?sablono.interpreter.attributes(attrs33883):null),((cljs.core.map_QMARK_(attrs33883))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs33883)], null)));
})(),(function (){var attrs33884 = (function (){var G__33891 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","mi-text2","sidefx/mi-text2",589624303),"About treatments:"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33891) : ttt.call(null,G__33891));
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"h5",((cljs.core.map_QMARK_(attrs33884))?sablono.interpreter.attributes(attrs33884):null),((cljs.core.map_QMARK_(attrs33884))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs33884)], null)));
})(),React.createElement("ul",({"style": ({"listStyleType": "none"})}),React.createElement("li",({"key": (1)}),React.createElement("a",({"href": "http://www.cancerresearchuk.org/about-cancer/prostate-cancer/treatment", "style": ({"textDecoration": "underline"}), "rel": "noopener", "target": "blank"}),sablono.interpreter.interpret((function (){var G__33892 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","mi-text3","sidefx/mi-text3",-1630373140),"Cancer research UK"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33892) : ttt.call(null,G__33892));
})()))),React.createElement("li",({"key": (2)}),React.createElement("a",({"href": "https://www.nhs.uk/conditions/prostate-cancer/treatment/", "rel": "noopener", "style": ({"textDecoration": "underline"}), "target": "blank"}),sablono.interpreter.interpret((function (){var G__33895 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","mi-text4","sidefx/mi-text4",1086043072),"NHS"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33895) : ttt.call(null,G__33895));
})())))),(function (){var attrs33885 = (function (){var G__33898 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","mi-text5","sidefx/mi-text5",-26334300),"About potential harms:"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33898) : ttt.call(null,G__33898));
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"h5",((cljs.core.map_QMARK_(attrs33885))?sablono.interpreter.attributes(attrs33885):null),((cljs.core.map_QMARK_(attrs33885))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs33885)], null)));
})(),React.createElement("ul",({"style": ({"listStyleType": "none"})}),React.createElement("li",({"key": (3)}),React.createElement("a",({"href": "https://www.nhs.uk/conditions/prostate-cancer/treatment/#radical-prostatectomy", "style": ({"textDecoration": "underline"}), "rel": "noopener", "target": "blank"}),sablono.interpreter.interpret((function (){var G__33901 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","mi-text6","sidefx/mi-text6",-445782866),"Radical prostatectomy"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33901) : ttt.call(null,G__33901));
})()))),React.createElement("li",({"key": (4)}),React.createElement("a",({"href": "https://www.nhs.uk/conditions/prostate-cancer/treatment/#radiotherapy", "style": ({"textDecoration": "underline"}), "rel": "noopener", "target": "blank"}),sablono.interpreter.interpret((function (){var G__33902 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","mi-text7","sidefx/mi-text7",1693220591),"Radiotherapy"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33902) : ttt.call(null,G__33902));
})())))),(function (){var attrs33886 = (function (){var G__33903 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","mi-text8","sidefx/mi-text8",932614065),"Further advice and support:"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33903) : ttt.call(null,G__33903));
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"h5",((cljs.core.map_QMARK_(attrs33886))?sablono.interpreter.attributes(attrs33886):null),((cljs.core.map_QMARK_(attrs33886))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs33886)], null)));
})(),React.createElement("ul",({"style": ({"listStyleType": "none"})}),React.createElement("li",({"key": (1)}),React.createElement("a",({"href": "http://www.macmillan.org.uk/", "style": ({"textDecoration": "underline"}), "rel": "noopener", "target": "blank"}),sablono.interpreter.interpret((function (){var G__33908 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","mi-text9","sidefx/mi-text9",483989971),"Macmillan"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33908) : ttt.call(null,G__33908));
})()))),React.createElement("li",({"key": (2)}),React.createElement("a",({"href": "http://prostatecanceruk.org/", "style": ({"textDecoration": "underline"}), "rel": "noopener", "target": "_blank"}),sablono.interpreter.interpret((function (){var G__33912 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","mi-text10","sidefx/mi-text10",-421827287),"Prostate Cancer UK"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33912) : ttt.call(null,G__33912));
})()))),React.createElement("li",({"key": (3)}),React.createElement("a",({"href": "https://www.nhs.uk/pages/home.aspx", "style": ({"textDecoration": "underline"}), "rel": "noopener", "target": "_blank"}),sablono.interpreter.interpret((function (){var G__33913 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","mi-text11","sidefx/mi-text11",1175342129),"NHS Choices"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33913) : ttt.call(null,G__33913));
})())))));
}),null,"sidefx-more-info");
predict_prostate.results.sidefx.results_in_sidefx = rum.core.build_defc((function (ttt){
return React.createElement("div",({"style": ({"marginTop": "15px"})}),sablono.interpreter.interpret((predict_prostate.results.sidefx.sidefx_discrete.cljs$core$IFn$_invoke$arity$2 ? predict_prostate.results.sidefx.sidefx_discrete.cljs$core$IFn$_invoke$arity$2(true,ttt) : predict_prostate.results.sidefx.sidefx_discrete.call(null,true,ttt))));
}),null,"results-in-sidefx");

//# sourceMappingURL=predict_prostate.results.sidefx.js.map
