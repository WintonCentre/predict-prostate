goog.provide('predict_prostate.results.sidefx');
predict_prostate.results.sidefx.progress = rum.core.build_defc((function (percent){
return React.createElement("div",({"style": ({"backgroundColor": "#94d3f0"}), "className": "progress"}),React.createElement("div",({"role": "progress-bar", "aria-valuenow": percent, "aria-valuemin": (0), "aria-valuemax": (100), "style": ({"width": percent, "backgroundColor": "#bc3d95"}), "className": "progress-bar"}),(function (){var attrs33806 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(percent);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs33806))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["sr-only"], null)], null),attrs33806], 0))):({"className": "sr-only"})),((cljs.core.map_QMARK_(attrs33806))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["% Complete"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs33806),"% Complete"], null)));
})()));
}),null,"progress");
predict_prostate.results.sidefx.help = rum.core.build_defc((function (help_id){
var attrs33820 = (function (){var G__33824 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"help-id","help-id",-1064550845),help_id], null);
return (predict_prostate.components.button.small_help_button.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.components.button.small_help_button.cljs$core$IFn$_invoke$arity$1(G__33824) : predict_prostate.components.button.small_help_button.call(null,G__33824));
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs33820))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["pull-right"], null)], null),attrs33820], 0))):({"className": "pull-right"})),((cljs.core.map_QMARK_(attrs33820))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs33820)], null)));
}),null,"help");
predict_prostate.results.sidefx.treatment_fills = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"conservative","conservative",-1075714010),"#2222AA",new cljs.core.Keyword(null,"radical","radical",1159030213),"#3DAFEF",new cljs.core.Keyword(null,"radical-harms","radical-harms",-1715343730),"#660044",new cljs.core.Keyword(null,"radiotherapy","radiotherapy",-1259347062),"#CC5CA4"], null);
predict_prostate.results.sidefx.sidefx_header = rum.core.build_defc((function (ttt){
return React.createElement("div",({"style": ({"marginBottom": (15)}), "className": "col-xs-12"}),React.createElement("div",({"style": ({"backgroundColor": predict_prostate.results.util.alison_blue_1, "borderRadius": (3)}), "className": "row"}),React.createElement("h4",({"style": ({"marginLeft": (15)})}),sablono.interpreter.interpret((function (){var G__33847 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","ppho-title","sidefx/ppho-title",1137062973),"Potentially permanent harms of"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33847) : ttt.call(null,G__33847));
})())),React.createElement("div",({"className": "col-sm-6"}),React.createElement("div",({"style": ({"fontSize": (16), "marginBottom": (10)})}),sablono.interpreter.interpret((function (){var G__33853 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),"b1",new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"conservative","conservative",-1075714010).cljs$core$IFn$_invoke$arity$1(predict_prostate.results.sidefx.treatment_fills),new cljs.core.Keyword(null,"r","r",-471384190),(7)], null);
return (predict_prostate.components.primitives.blob.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.components.primitives.blob.cljs$core$IFn$_invoke$arity$1(G__33853) : predict_prostate.components.primitives.blob.call(null,G__33853));
})())," ",sablono.interpreter.interpret((function (){var G__33856 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","cm","sidefx/cm",2013581781),"Conservative management"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33856) : ttt.call(null,G__33856));
})())),React.createElement("div",({"style": ({"fontSize": (16), "marginBottom": (10)})}),sablono.interpreter.interpret((function (){var G__33859 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),"b2",new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"radical-harms","radical-harms",-1715343730).cljs$core$IFn$_invoke$arity$1(predict_prostate.results.sidefx.treatment_fills),new cljs.core.Keyword(null,"r","r",-471384190),(7)], null);
return (predict_prostate.components.primitives.blob.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.components.primitives.blob.cljs$core$IFn$_invoke$arity$1(G__33859) : predict_prostate.components.primitives.blob.call(null,G__33859));
})())," ",sablono.interpreter.interpret((function (){var G__33862 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","rp","sidefx/rp",-1252001846),"Radical prostatectomy"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33862) : ttt.call(null,G__33862));
})())),React.createElement("div",({"style": ({"fontSize": (16)})}),sablono.interpreter.interpret((function (){var G__33865 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),"b3",new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"radiotherapy","radiotherapy",-1259347062).cljs$core$IFn$_invoke$arity$1(predict_prostate.results.sidefx.treatment_fills),new cljs.core.Keyword(null,"r","r",-471384190),(7)], null);
return (predict_prostate.components.primitives.blob.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.components.primitives.blob.cljs$core$IFn$_invoke$arity$1(G__33865) : predict_prostate.components.primitives.blob.call(null,G__33865));
})())," ",sablono.interpreter.interpret((function (){var G__33867 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","rr","sidefx/rr",-1381212698),"Radical Radiotherapy"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33867) : ttt.call(null,G__33867));
})()))),React.createElement("div",({"className": "col-sm-6"}),React.createElement("p",({"style": ({"fontSize": (14)})}),sablono.interpreter.interpret((function (){var G__33872 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","ppho-text1","sidefx/ppho-text1",-581681790),"The following estimates are not individualised to you or your local treatment centre.\n    Your local team may have data specific to your centre which you can ask about."], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33872) : ttt.call(null,G__33872));
})())),React.createElement("p",({"style": ({"fontSize": (14), "color": "#f00"})}),sablono.interpreter.interpret((function (){var G__33887 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","ppho-text2","sidefx/ppho-text2",-983677722),"If you are in the UK, centre by centre provider outcomes are provided by\n     the National Prostate Cancer Audit which you may find useful:"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33887) : ttt.call(null,G__33887));
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
predict_prostate.results.sidefx.sidefx_bar = rum.core.build_defc((function (p__33928){
var map__33931 = p__33928;
var map__33931__$1 = cljs.core.__destructure_map(map__33931);
var fewer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33931__$1,new cljs.core.Keyword(null,"fewer","fewer",648726198));
var percent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33931__$1,new cljs.core.Keyword(null,"percent","percent",2031453817));
var fill = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33931__$1,new cljs.core.Keyword(null,"fill","fill",883462889));
var tallies_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33931__$1,new cljs.core.Keyword(null,"tallies?","tallies?",-496877074));
var ttt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33931__$1,new cljs.core.Keyword(null,"ttt","ttt",1858561240));
var f1 = predict_prostate.results.sidefx.fifty_1(percent);
var f2 = predict_prostate.results.sidefx.fifty_2(percent);
var hh = predict_prostate.results.sidefx.chunker((100),(10),percent);
var r = (4);
return React.createElement("div",({"className": "row"}),React.createElement("div",({"key": (1), "style": ({"fontSize": "120%", "fontWeight": "bold", "display": "inline-block"}), "className": "col-xs-1"}),React.createElement("span",({"style": ({"width": "100%", "textAlign": "right"})})),(cljs.core.truth_(fewer)?sablono.interpreter.interpret((function (){var G__33974 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","bar-lesst","sidefx/bar-lesst",-1099981635),"Less than"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33974) : ttt.call(null,G__33974));
})()):null)," ",sablono.interpreter.interpret(percent),"% "),(cljs.core.truth_(tallies_QMARK_)?React.createElement("div",({"style": ({"marginTop": (3)}), "className": "col-xs-11"}),React.createElement("div",({"key": (1), "style": ({"width": (220), "display": "inline-block"})}),sablono.interpreter.interpret(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (n){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["t-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join('')], null),(function (){var G__33987 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fill","fill",883462889),fill,new cljs.core.Keyword(null,"r","r",-471384190),r,new cljs.core.Keyword(null,"tally?","tally?",-1847300034),true], null);
return (predict_prostate.components.primitives.blob_10.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.components.primitives.blob_10.cljs$core$IFn$_invoke$arity$1(G__33987) : predict_prostate.components.primitives.blob_10.call(null,G__33987));
})()], null);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tens","tens",-2107583828).cljs$core$IFn$_invoke$arity$1(f1)))),sablono.interpreter.interpret((((new cljs.core.Keyword(null,"units","units",-533089095).cljs$core$IFn$_invoke$arity$1(f1) > (0)))?(function (){var G__33992 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"fill","fill",883462889),fill,new cljs.core.Keyword(null,"r","r",-471384190),r,new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"units","units",-533089095).cljs$core$IFn$_invoke$arity$1(f1),new cljs.core.Keyword(null,"tally?","tally?",-1847300034),true], null);
return (predict_prostate.components.primitives.mixed_10.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.components.primitives.mixed_10.cljs$core$IFn$_invoke$arity$1(G__33992) : predict_prostate.components.primitives.mixed_10.call(null,G__33992));
})():null)),sablono.interpreter.interpret(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (n){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["0-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join('')], null),(function (){var G__33993 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fill","fill",883462889),(cljs.core.truth_(tallies_QMARK_)?"#BBBBBB":"white"),new cljs.core.Keyword(null,"r","r",-471384190),r,new cljs.core.Keyword(null,"tally?","tally?",-1847300034),true], null);
return (predict_prostate.components.primitives.blob_10.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.components.primitives.blob_10.cljs$core$IFn$_invoke$arity$1(G__33993) : predict_prostate.components.primitives.blob_10.call(null,G__33993));
})()], null);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tens-empty","tens-empty",1703381257).cljs$core$IFn$_invoke$arity$1(f1))))),React.createElement("div",({"key": (2), "style": ({"width": (220), "display": "inline-block"})}),sablono.interpreter.interpret(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (n){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["t-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join('')], null),(function (){var G__33994 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fill","fill",883462889),fill,new cljs.core.Keyword(null,"r","r",-471384190),r,new cljs.core.Keyword(null,"tally?","tally?",-1847300034),true], null);
return (predict_prostate.components.primitives.blob_10.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.components.primitives.blob_10.cljs$core$IFn$_invoke$arity$1(G__33994) : predict_prostate.components.primitives.blob_10.call(null,G__33994));
})()], null);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tens","tens",-2107583828).cljs$core$IFn$_invoke$arity$1(f2)))),sablono.interpreter.interpret((((new cljs.core.Keyword(null,"units","units",-533089095).cljs$core$IFn$_invoke$arity$1(f2) > (0)))?(function (){var G__33995 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"fill","fill",883462889),fill,new cljs.core.Keyword(null,"r","r",-471384190),r,new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"units","units",-533089095).cljs$core$IFn$_invoke$arity$1(f2),new cljs.core.Keyword(null,"tally?","tally?",-1847300034),true], null);
return (predict_prostate.components.primitives.mixed_10.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.components.primitives.mixed_10.cljs$core$IFn$_invoke$arity$1(G__33995) : predict_prostate.components.primitives.mixed_10.call(null,G__33995));
})():null)),sablono.interpreter.interpret(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (n){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["0-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join('')], null),(function (){var G__33996 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fill","fill",883462889),(cljs.core.truth_(tallies_QMARK_)?"#BBBBBB":"white"),new cljs.core.Keyword(null,"r","r",-471384190),r,new cljs.core.Keyword(null,"tally?","tally?",-1847300034),true], null);
return (predict_prostate.components.primitives.blob_10.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.components.primitives.blob_10.cljs$core$IFn$_invoke$arity$1(G__33996) : predict_prostate.components.primitives.blob_10.call(null,G__33996));
})()], null);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tens-empty","tens-empty",1703381257).cljs$core$IFn$_invoke$arity$1(f2)))))):(function (){var attrs33979 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (n){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["t-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join('')], null),(function (){var G__33997 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fill","fill",883462889),fill,new cljs.core.Keyword(null,"r","r",-471384190),r], null);
return (predict_prostate.components.primitives.blob_10.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.components.primitives.blob_10.cljs$core$IFn$_invoke$arity$1(G__33997) : predict_prostate.components.primitives.blob_10.call(null,G__33997));
})()], null);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tens","tens",-2107583828).cljs$core$IFn$_invoke$arity$1(hh)));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs33979))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["col-xs-12"], null)], null),attrs33979], 0))):({"className": "col-xs-12"})),((cljs.core.map_QMARK_(attrs33979))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret((((new cljs.core.Keyword(null,"units","units",-533089095).cljs$core$IFn$_invoke$arity$1(hh) > (0)))?(function (){var G__33998 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fill","fill",883462889),fill,new cljs.core.Keyword(null,"r","r",-471384190),r,new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"units","units",-533089095).cljs$core$IFn$_invoke$arity$1(hh)], null);
return (predict_prostate.components.primitives.mixed_10.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.components.primitives.mixed_10.cljs$core$IFn$_invoke$arity$1(G__33998) : predict_prostate.components.primitives.mixed_10.call(null,G__33998));
})():null)),sablono.interpreter.interpret(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (n){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["0-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join('')], null),(function (){var G__33999 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fill","fill",883462889),"white",new cljs.core.Keyword(null,"r","r",-471384190),r], null);
return (predict_prostate.components.primitives.blob_10.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.components.primitives.blob_10.cljs$core$IFn$_invoke$arity$1(G__33999) : predict_prostate.components.primitives.blob_10.call(null,G__33999));
})()], null);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tens-empty","tens-empty",1703381257).cljs$core$IFn$_invoke$arity$1(hh))))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs33979),sablono.interpreter.interpret((((new cljs.core.Keyword(null,"units","units",-533089095).cljs$core$IFn$_invoke$arity$1(hh) > (0)))?(function (){var G__34000 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fill","fill",883462889),fill,new cljs.core.Keyword(null,"r","r",-471384190),r,new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"units","units",-533089095).cljs$core$IFn$_invoke$arity$1(hh)], null);
return (predict_prostate.components.primitives.mixed_10.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.components.primitives.mixed_10.cljs$core$IFn$_invoke$arity$1(G__34000) : predict_prostate.components.primitives.mixed_10.call(null,G__34000));
})():null)),sablono.interpreter.interpret(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (n){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["0-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join('')], null),(function (){var G__34001 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fill","fill",883462889),"white",new cljs.core.Keyword(null,"r","r",-471384190),r], null);
return (predict_prostate.components.primitives.blob_10.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.components.primitives.blob_10.cljs$core$IFn$_invoke$arity$1(G__34001) : predict_prostate.components.primitives.blob_10.call(null,G__34001));
})()], null);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tens-empty","tens-empty",1703381257).cljs$core$IFn$_invoke$arity$1(hh))))], null)));
})()));
}),null,"sidefx-bar");
predict_prostate.results.sidefx.fewer_helper = rum.core.build_defc((function() {
var G__34162 = null;
var G__34162__2 = (function (prefix,ttt){
return sablono.interpreter.interpret((predict_prostate.results.sidefx.fewer_helper.cljs$core$IFn$_invoke$arity$3 ? predict_prostate.results.sidefx.fewer_helper.cljs$core$IFn$_invoke$arity$3(prefix,"",ttt) : predict_prostate.results.sidefx.fewer_helper.call(null,prefix,"",ttt)));
});
var G__34162__3 = (function (prefix,n,ttt){
var attrs34002 = prefix;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs34002))?sablono.interpreter.attributes(attrs34002):null),((cljs.core.map_QMARK_(attrs34002))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs34003 = (function (){var G__34005 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","fewer","sidefx/fewer",1616828099),"fewer than"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__34005) : ttt.call(null,G__34005));
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"b",((cljs.core.map_QMARK_(attrs34003))?sablono.interpreter.attributes(attrs34003):null),((cljs.core.map_QMARK_(attrs34003))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",(cljs.core.truth_(n)?(function (){var attrs34006 = n;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs34006))?sablono.interpreter.attributes(attrs34006):null),((cljs.core.map_QMARK_(attrs34006))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [" "], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs34006)," "], null)));
})():"")], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs34003)," ",(cljs.core.truth_(n)?(function (){var attrs34007 = n;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs34007))?sablono.interpreter.attributes(attrs34007):null),((cljs.core.map_QMARK_(attrs34007))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [" "], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs34007)," "], null)));
})():"")], null)));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs34002),(function (){var attrs34004 = (function (){var G__34008 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","fewer","sidefx/fewer",1616828099),"fewer than"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__34008) : ttt.call(null,G__34008));
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"b",((cljs.core.map_QMARK_(attrs34004))?sablono.interpreter.attributes(attrs34004):null),((cljs.core.map_QMARK_(attrs34004))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",(cljs.core.truth_(n)?(function (){var attrs34009 = n;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs34009))?sablono.interpreter.attributes(attrs34009):null),((cljs.core.map_QMARK_(attrs34009))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [" "], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs34009)," "], null)));
})():"")], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs34004)," ",(cljs.core.truth_(n)?(function (){var attrs34010 = n;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs34010))?sablono.interpreter.attributes(attrs34010):null),((cljs.core.map_QMARK_(attrs34010))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [" "], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs34010)," "], null)));
})():"")], null)));
})()], null)));
});
G__34162 = function(prefix,n,ttt){
switch(arguments.length){
case 2:
return G__34162__2.call(this,prefix,n);
case 3:
return G__34162__3.call(this,prefix,n,ttt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__34162.cljs$core$IFn$_invoke$arity$2 = G__34162__2;
G__34162.cljs$core$IFn$_invoke$arity$3 = G__34162__3;
return G__34162;
})()
,null,"fewer-helper");
predict_prostate.results.sidefx.sidefx_linear = rum.core.build_defc((function (p__34011){
var map__34012 = p__34011;
var map__34012__$1 = cljs.core.__destructure_map(map__34012);
var treatment = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34012__$1,new cljs.core.Keyword(null,"treatment","treatment",515251816));
var prefix = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34012__$1,new cljs.core.Keyword(null,"prefix","prefix",-265908465));
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34012__$1,new cljs.core.Keyword(null,"n","n",562130025));
var fewer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34012__$1,new cljs.core.Keyword(null,"fewer","fewer",648726198));
var tallies_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34012__$1,new cljs.core.Keyword(null,"tallies?","tallies?",-496877074));
var ttt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34012__$1,new cljs.core.Keyword(null,"ttt","ttt",1858561240));
var quantity = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),Math.round(n)," ",(function (){var G__34013 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","lin-in","sidefx/lin-in",554234320),"in"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__34013) : ttt.call(null,G__34013));
})()," 100 "], null);
return React.createElement("div",null,(function (){var attrs34014 = prefix;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs34014))?sablono.interpreter.attributes(attrs34014):null),((cljs.core.map_QMARK_(attrs34014))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(fewer)?(function (){var attrs34021 = quantity;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"b",((cljs.core.map_QMARK_(attrs34021))?sablono.interpreter.attributes(attrs34021):null),((cljs.core.map_QMARK_(attrs34021))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs34021)], null)));
})():sablono.interpreter.interpret(quantity))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs34014),(cljs.core.truth_(fewer)?(function (){var attrs34025 = quantity;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"b",((cljs.core.map_QMARK_(attrs34025))?sablono.interpreter.attributes(attrs34025):null),((cljs.core.map_QMARK_(attrs34025))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs34025)], null)));
})():sablono.interpreter.interpret(quantity))], null)));
})(),(function (){var attrs34015 = (function (){var G__34026 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","lin-aft","sidefx/lin-aft",1268874602),"men have this issue after 6 years."], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__34026) : ttt.call(null,G__34026));
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs34015))?sablono.interpreter.attributes(attrs34015):null),((cljs.core.map_QMARK_(attrs34015))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs34015)], null)));
})(),sablono.interpreter.interpret((function (){var G__34027 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fewer","fewer",648726198),fewer,new cljs.core.Keyword(null,"percent","percent",2031453817),n,new cljs.core.Keyword(null,"fill","fill",883462889),(treatment.cljs$core$IFn$_invoke$arity$1 ? treatment.cljs$core$IFn$_invoke$arity$1(predict_prostate.results.sidefx.treatment_fills) : treatment.call(null,predict_prostate.results.sidefx.treatment_fills)),new cljs.core.Keyword(null,"tallies?","tallies?",-496877074),tallies_QMARK_,new cljs.core.Keyword(null,"ttt","ttt",1858561240),ttt], null);
return (predict_prostate.results.sidefx.sidefx_bar.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.sidefx.sidefx_bar.cljs$core$IFn$_invoke$arity$1(G__34027) : predict_prostate.results.sidefx.sidefx_bar.call(null,G__34027));
})()),React.createElement("br",null));
}),null,"sidefx-linear");
predict_prostate.results.sidefx.sidefx_content = rum.core.build_defc((function() { 
var G__34169__delegate = function (p__34042,content){
var map__34043 = p__34042;
var map__34043__$1 = cljs.core.__destructure_map(map__34043);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34043__$1,new cljs.core.Keyword(null,"title","title",636505583));
var sub_title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34043__$1,new cljs.core.Keyword(null,"sub-title","sub-title",-1781490288));
var subsub_title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34043__$1,new cljs.core.Keyword(null,"subsub-title","subsub-title",1374352131));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34043__$1,new cljs.core.Keyword(null,"source","source",-433931539));
return React.createElement("div",({"style": ({"padding": "0 15px 0 15px", "fontSize": (16)})}),(function (){var attrs34044 = title;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"h4",((cljs.core.map_QMARK_(attrs34044))?sablono.interpreter.attributes(attrs34044):null),((cljs.core.map_QMARK_(attrs34044))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs34044)], null)));
})(),(function (){var attrs34045 = sub_title;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"h5",((cljs.core.map_QMARK_(attrs34045))?sablono.interpreter.attributes(attrs34045):null),((cljs.core.map_QMARK_(attrs34045))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs34045)], null)));
})(),(function (){var attrs34046 = subsub_title;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"h6",((cljs.core.map_QMARK_(attrs34046))?sablono.interpreter.attributes(attrs34046):null),((cljs.core.map_QMARK_(attrs34046))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs34046)], null)));
})(),sablono.interpreter.interpret(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__34030_SHARP_,p2__34029_SHARP_){
return rum.core.with_key(p2__34029_SHARP_,p1__34030_SHARP_);
}),content)),sablono.interpreter.interpret((cljs.core.truth_(source)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".alert.alert-info",".alert.alert-info",1970443868),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(12)], null)], null),(source.cljs$core$IFn$_invoke$arity$0 ? source.cljs$core$IFn$_invoke$arity$0() : source.call(null))], null):null)));
};
var G__34169 = function (p__34042,var_args){
var content = null;
if (arguments.length > 1) {
var G__34172__i = 0, G__34172__a = new Array(arguments.length -  1);
while (G__34172__i < G__34172__a.length) {G__34172__a[G__34172__i] = arguments[G__34172__i + 1]; ++G__34172__i;}
  content = new cljs.core.IndexedSeq(G__34172__a,0,null);
} 
return G__34169__delegate.call(this,p__34042,content);};
G__34169.cljs$lang$maxFixedArity = 1;
G__34169.cljs$lang$applyTo = (function (arglist__34173){
var p__34042 = cljs.core.first(arglist__34173);
var content = cljs.core.rest(arglist__34173);
return G__34169__delegate(p__34042,content);
});
G__34169.cljs$core$IFn$_invoke$arity$variadic = G__34169__delegate;
return G__34169;
})()
,null,"sidefx-content");
predict_prostate.results.sidefx.erectile_source = rum.core.build_defc((function (ttt){
var attrs34048 = (function (){var G__34054 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","eresrc-text1","sidefx/eresrc-text1",1406494822),"Estimates for erectile dysfunction have been taken from the UK-based Prostate Testing for Cancer and Treatment (ProtecT) trial. The full research can be\n        read here:"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__34054) : ttt.call(null,G__34054));
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs34048))?sablono.interpreter.attributes(attrs34048):null),((cljs.core.map_QMARK_(attrs34048))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",React.createElement("a",({"href": "https://bjui-journals.onlinelibrary.wiley.com/doi/10.1111/bju.15739", "target": "_blank"}),"https://bjui-journals.onlinelibrary.wiley.com/doi/10.1111/bju.15739")], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs34048)," ",React.createElement("a",({"href": "https://bjui-journals.onlinelibrary.wiley.com/doi/10.1111/bju.15739", "target": "_blank"}),"https://bjui-journals.onlinelibrary.wiley.com/doi/10.1111/bju.15739")], null)));
}),null,"erectile-source");
predict_prostate.results.sidefx.incontinence_source = rum.core.build_defc((function (ttt){
var attrs34055 = (function (){var G__34060 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","incsrc-text1","sidefx/incsrc-text1",-1325551852),"Estimates for incontinence have been taken from the UK-based Prostate Testing for\n       Cancer and Treatment (ProtecT) trial. The full research can be read here:"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__34060) : ttt.call(null,G__34060));
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs34055))?sablono.interpreter.attributes(attrs34055):null),((cljs.core.map_QMARK_(attrs34055))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",React.createElement("a",({"href": "https://bjuijournals.onlinelibrary.wiley.com/doi/10.1111/bju.15739", "target": "_blank"}),"https://bjuijournals.onlinelibrary.wiley.com/doi/10.1111/bju.15739")], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs34055)," ",React.createElement("a",({"href": "https://bjuijournals.onlinelibrary.wiley.com/doi/10.1111/bju.15739", "target": "_blank"}),"https://bjuijournals.onlinelibrary.wiley.com/doi/10.1111/bju.15739")], null)));
}),null,"incontinence-source");
predict_prostate.results.sidefx.bowel_source = rum.core.build_defc((function (ttt){
return React.createElement("span",({"fontSize": (12)}),sablono.interpreter.interpret((function (){var G__34065 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","bowsrc-text1","sidefx/bowsrc-text1",-2008110457),"Estimates for bowel issues have been taken from the UK-based Prostate Testing for\n       Cancer and Treatment (ProtecT) trial. The full research can be read here:"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__34065) : ttt.call(null,G__34065));
})())," ",React.createElement("a",({"href": "https://bjuijournals.onlinelibrary.wiley.com/doi/10.1111/bju.15739", "target": "_blank"}),"https://bjuijournals.onlinelibrary.wiley.com/doi/10.1111/bju.15739"));
}),null,"bowel-source");
predict_prostate.results.sidefx.sidefx_discrete = rum.core.build_defc((function (tallies_QMARK_,ttt){
return React.createElement("div",({"style": ({"border": "1px solid #CCCCCC", "borderRadius": (3), "fontSize": (16)})}),sablono.interpreter.interpret((predict_prostate.results.sidefx.sidefx_header.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.sidefx.sidefx_header.cljs$core$IFn$_invoke$arity$1(ttt) : predict_prostate.results.sidefx.sidefx_header.call(null,ttt))),sablono.interpreter.interpret((function (){var G__34070 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),(function (){var G__34074 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","eredys-title","sidefx/eredys-title",-967487873),"Erectile dysfunction"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__34074) : ttt.call(null,G__34074));
})(),new cljs.core.Keyword(null,"sub-title","sub-title",-1781490288),(function (){var G__34075 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","eredys-subtitle","sidefx/eredys-subtitle",-814812706),"Defined as: 'Men reporting moderate or big problems with erectile dysfunction'"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__34075) : ttt.call(null,G__34075));
})(),new cljs.core.Keyword(null,"subsub-title","subsub-title",1374352131),(function (){var G__34076 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","eredys-subsubtitle","sidefx/eredys-subsubtitle",-309428800),"Percentages shown are in addition to men who may already have this problem before a treatment is given"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__34076) : ttt.call(null,G__34076));
})(),new cljs.core.Keyword(null,"source","source",-433931539),(function (){
return (predict_prostate.results.sidefx.erectile_source.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.sidefx.erectile_source.cljs$core$IFn$_invoke$arity$1(ttt) : predict_prostate.results.sidefx.erectile_source.call(null,ttt));
})], null);
var G__34071 = (function (){var G__34077 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"treatment","treatment",515251816),new cljs.core.Keyword(null,"conservative","conservative",-1075714010),new cljs.core.Keyword(null,"prefix","prefix",-265908465),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(function (){var G__34078 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","with","sidefx/with",243394541),"With"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__34078) : ttt.call(null,G__34078));
})()," ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"conservative","conservative",-1075714010).cljs$core$IFn$_invoke$arity$1(predict_prostate.results.sidefx.treatment_fills)], null)], null),(function (){var G__34079 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","cons-man","sidefx/cons-man",552309001),"conservative management,"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__34079) : ttt.call(null,G__34079));
})()], null)," ",(function (){var G__34080 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","about","sidefx/about",-2035617818),"about"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__34080) : ttt.call(null,G__34080));
})()," "], null),new cljs.core.Keyword(null,"n","n",562130025),(26),new cljs.core.Keyword(null,"tallies?","tallies?",-496877074),tallies_QMARK_,new cljs.core.Keyword(null,"ttt","ttt",1858561240),ttt], null);
return (predict_prostate.results.sidefx.sidefx_linear.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.sidefx.sidefx_linear.cljs$core$IFn$_invoke$arity$1(G__34077) : predict_prostate.results.sidefx.sidefx_linear.call(null,G__34077));
})();
var G__34072 = (function (){var G__34083 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"treatment","treatment",515251816),new cljs.core.Keyword(null,"radical-harms","radical-harms",-1715343730),new cljs.core.Keyword(null,"prefix","prefix",-265908465),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(function (){var G__34084 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","with","sidefx/with",243394541),"With"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__34084) : ttt.call(null,G__34084));
})()," ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"radical-harms","radical-harms",-1715343730).cljs$core$IFn$_invoke$arity$1(predict_prostate.results.sidefx.treatment_fills)], null)], null),(function (){var G__34085 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","radp","sidefx/radp",320511672),"radical prostatectomy (surgery),"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__34085) : ttt.call(null,G__34085));
})()], null)," ",(function (){var G__34086 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","about","sidefx/about",-2035617818),"about"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__34086) : ttt.call(null,G__34086));
})()," "], null),new cljs.core.Keyword(null,"n","n",562130025),(50),new cljs.core.Keyword(null,"tallies?","tallies?",-496877074),tallies_QMARK_,new cljs.core.Keyword(null,"ttt","ttt",1858561240),ttt], null);
return (predict_prostate.results.sidefx.sidefx_linear.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.sidefx.sidefx_linear.cljs$core$IFn$_invoke$arity$1(G__34083) : predict_prostate.results.sidefx.sidefx_linear.call(null,G__34083));
})();
var G__34073 = (function (){var G__34087 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"treatment","treatment",515251816),new cljs.core.Keyword(null,"radiotherapy","radiotherapy",-1259347062),new cljs.core.Keyword(null,"prefix","prefix",-265908465),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(function (){var G__34088 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","with","sidefx/with",243394541),"With"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__34088) : ttt.call(null,G__34088));
})()," ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"radiotherapy","radiotherapy",-1259347062).cljs$core$IFn$_invoke$arity$1(predict_prostate.results.sidefx.treatment_fills)], null)], null),(function (){var G__34089 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","radio","sidefx/radio",-450230605),"radical radiotherapy (external beam),"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__34089) : ttt.call(null,G__34089));
})()], null)," ",(function (){var G__34090 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","about","sidefx/about",-2035617818),"about"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__34090) : ttt.call(null,G__34090));
})()," "], null),new cljs.core.Keyword(null,"n","n",562130025),(39),new cljs.core.Keyword(null,"tallies?","tallies?",-496877074),tallies_QMARK_,new cljs.core.Keyword(null,"ttt","ttt",1858561240),ttt], null);
return (predict_prostate.results.sidefx.sidefx_linear.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.sidefx.sidefx_linear.cljs$core$IFn$_invoke$arity$1(G__34087) : predict_prostate.results.sidefx.sidefx_linear.call(null,G__34087));
})();
return (predict_prostate.results.sidefx.sidefx_content.cljs$core$IFn$_invoke$arity$4 ? predict_prostate.results.sidefx.sidefx_content.cljs$core$IFn$_invoke$arity$4(G__34070,G__34071,G__34072,G__34073) : predict_prostate.results.sidefx.sidefx_content.call(null,G__34070,G__34071,G__34072,G__34073));
})()),sablono.interpreter.interpret((function (){var G__34093 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),(function (){var G__34097 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","incon-title","sidefx/incon-title",-983966664),"Incontinence"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__34097) : ttt.call(null,G__34097));
})(),new cljs.core.Keyword(null,"sub-title","sub-title",-1781490288),(function (){var G__34098 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","incon-subtitle","sidefx/incon-subtitle",625073468),"Defined as: 'Use of 1 or more pads per day and assuming this problem does not exist before treatment'"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__34098) : ttt.call(null,G__34098));
})(),new cljs.core.Keyword(null,"source","source",-433931539),(function (){
return (predict_prostate.results.sidefx.incontinence_source.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.sidefx.incontinence_source.cljs$core$IFn$_invoke$arity$1(ttt) : predict_prostate.results.sidefx.incontinence_source.call(null,ttt));
})], null);
var G__34094 = (function (){var G__34099 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"treatment","treatment",515251816),new cljs.core.Keyword(null,"conservative","conservative",-1075714010),new cljs.core.Keyword(null,"prefix","prefix",-265908465),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(function (){var G__34100 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","with","sidefx/with",243394541),"With"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__34100) : ttt.call(null,G__34100));
})()," ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"conservative","conservative",-1075714010).cljs$core$IFn$_invoke$arity$1(predict_prostate.results.sidefx.treatment_fills)], null)], null),(function (){var G__34101 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","cons-man","sidefx/cons-man",552309001),"conservative management,"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__34101) : ttt.call(null,G__34101));
})()], null)," ",(function (){var G__34102 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","about","sidefx/about",-2035617818),"about"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__34102) : ttt.call(null,G__34102));
})()," "], null),new cljs.core.Keyword(null,"n","n",562130025),(1),new cljs.core.Keyword(null,"tallies?","tallies?",-496877074),tallies_QMARK_,new cljs.core.Keyword(null,"ttt","ttt",1858561240),ttt], null);
return (predict_prostate.results.sidefx.sidefx_linear.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.sidefx.sidefx_linear.cljs$core$IFn$_invoke$arity$1(G__34099) : predict_prostate.results.sidefx.sidefx_linear.call(null,G__34099));
})();
var G__34095 = (function (){var G__34103 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"treatment","treatment",515251816),new cljs.core.Keyword(null,"radical-harms","radical-harms",-1715343730),new cljs.core.Keyword(null,"prefix","prefix",-265908465),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(function (){var G__34104 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","with","sidefx/with",243394541),"With"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__34104) : ttt.call(null,G__34104));
})()," ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"radical-harms","radical-harms",-1715343730).cljs$core$IFn$_invoke$arity$1(predict_prostate.results.sidefx.treatment_fills)], null)], null),(function (){var G__34105 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","radp","sidefx/radp",320511672),"radical prostatectomy (surgery),"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__34105) : ttt.call(null,G__34105));
})()], null)," ",(function (){var G__34106 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","about","sidefx/about",-2035617818),"about"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__34106) : ttt.call(null,G__34106));
})()," "], null),new cljs.core.Keyword(null,"n","n",562130025),(20),new cljs.core.Keyword(null,"tallies?","tallies?",-496877074),tallies_QMARK_,new cljs.core.Keyword(null,"ttt","ttt",1858561240),ttt], null);
return (predict_prostate.results.sidefx.sidefx_linear.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.sidefx.sidefx_linear.cljs$core$IFn$_invoke$arity$1(G__34103) : predict_prostate.results.sidefx.sidefx_linear.call(null,G__34103));
})();
var G__34096 = (function (){var G__34107 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"treatment","treatment",515251816),new cljs.core.Keyword(null,"radiotherapy","radiotherapy",-1259347062),new cljs.core.Keyword(null,"prefix","prefix",-265908465),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(function (){var G__34108 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","with","sidefx/with",243394541),"With"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__34108) : ttt.call(null,G__34108));
})()," ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"radiotherapy","radiotherapy",-1259347062).cljs$core$IFn$_invoke$arity$1(predict_prostate.results.sidefx.treatment_fills)], null)], null),(function (){var G__34109 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","radio","sidefx/radio",-450230605),"radical radiotherapy (external beam),"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__34109) : ttt.call(null,G__34109));
})()], null)," ",(function (){var G__34110 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","about","sidefx/about",-2035617818),"about"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__34110) : ttt.call(null,G__34110));
})()," "], null),new cljs.core.Keyword(null,"n","n",562130025),(1),new cljs.core.Keyword(null,"tallies?","tallies?",-496877074),tallies_QMARK_,new cljs.core.Keyword(null,"ttt","ttt",1858561240),ttt], null);
return (predict_prostate.results.sidefx.sidefx_linear.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.sidefx.sidefx_linear.cljs$core$IFn$_invoke$arity$1(G__34107) : predict_prostate.results.sidefx.sidefx_linear.call(null,G__34107));
})();
return (predict_prostate.results.sidefx.sidefx_content.cljs$core$IFn$_invoke$arity$4 ? predict_prostate.results.sidefx.sidefx_content.cljs$core$IFn$_invoke$arity$4(G__34093,G__34094,G__34095,G__34096) : predict_prostate.results.sidefx.sidefx_content.call(null,G__34093,G__34094,G__34095,G__34096));
})()),sablono.interpreter.interpret((function (){var G__34114 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),(function (){var G__34118 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","bowiss-title","sidefx/bowiss-title",-275898307),"Bowel issues"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__34118) : ttt.call(null,G__34118));
})(),new cljs.core.Keyword(null,"sub-title","sub-title",-1781490288),(function (){var G__34119 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","bowiss-subtitle","sidefx/bowiss-subtitle",-1316088249),"Defined as: 'Bloody stools about half the time or more frequently'"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__34119) : ttt.call(null,G__34119));
})(),new cljs.core.Keyword(null,"source","source",-433931539),(function (){
return (predict_prostate.results.sidefx.bowel_source.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.sidefx.bowel_source.cljs$core$IFn$_invoke$arity$1(ttt) : predict_prostate.results.sidefx.bowel_source.call(null,ttt));
})], null);
var G__34115 = (function (){var G__34120 = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"treatment","treatment",515251816),new cljs.core.Keyword(null,"conservative","conservative",-1075714010),new cljs.core.Keyword(null,"prefix","prefix",-265908465),(function (){var G__34121 = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(function (){var G__34123 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","with","sidefx/with",243394541),"With"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__34123) : ttt.call(null,G__34123));
})()," ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"conservative","conservative",-1075714010).cljs$core$IFn$_invoke$arity$1(predict_prostate.results.sidefx.treatment_fills)], null)], null),(function (){var G__34124 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","cons-man","sidefx/cons-man",552309001),"conservative management,"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__34124) : ttt.call(null,G__34124));
})()], null)," "], null);
var G__34122 = ttt;
return (predict_prostate.results.sidefx.fewer_helper.cljs$core$IFn$_invoke$arity$2 ? predict_prostate.results.sidefx.fewer_helper.cljs$core$IFn$_invoke$arity$2(G__34121,G__34122) : predict_prostate.results.sidefx.fewer_helper.call(null,G__34121,G__34122));
})(),new cljs.core.Keyword(null,"fewer","fewer",648726198),true,new cljs.core.Keyword(null,"n","n",562130025),(1),new cljs.core.Keyword(null,"tallies?","tallies?",-496877074),tallies_QMARK_,new cljs.core.Keyword(null,"ttt","ttt",1858561240),ttt], null);
return (predict_prostate.results.sidefx.sidefx_linear.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.sidefx.sidefx_linear.cljs$core$IFn$_invoke$arity$1(G__34120) : predict_prostate.results.sidefx.sidefx_linear.call(null,G__34120));
})();
var G__34116 = (function (){var G__34125 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"treatment","treatment",515251816),new cljs.core.Keyword(null,"radical-harms","radical-harms",-1715343730),new cljs.core.Keyword(null,"prefix","prefix",-265908465),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(function (){var G__34126 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","with","sidefx/with",243394541),"With"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__34126) : ttt.call(null,G__34126));
})()," ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"radical-harms","radical-harms",-1715343730).cljs$core$IFn$_invoke$arity$1(predict_prostate.results.sidefx.treatment_fills)], null)], null),(function (){var G__34127 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","radp","sidefx/radp",320511672),"radical prostatectomy (surgery),"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__34127) : ttt.call(null,G__34127));
})()], null)," ",(function (){var G__34128 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","about","sidefx/about",-2035617818),"about"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__34128) : ttt.call(null,G__34128));
})()," "], null),new cljs.core.Keyword(null,"n","n",562130025),(1),new cljs.core.Keyword(null,"tallies?","tallies?",-496877074),tallies_QMARK_,new cljs.core.Keyword(null,"ttt","ttt",1858561240),ttt], null);
return (predict_prostate.results.sidefx.sidefx_linear.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.sidefx.sidefx_linear.cljs$core$IFn$_invoke$arity$1(G__34125) : predict_prostate.results.sidefx.sidefx_linear.call(null,G__34125));
})();
var G__34117 = (function (){var G__34129 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"treatment","treatment",515251816),new cljs.core.Keyword(null,"radiotherapy","radiotherapy",-1259347062),new cljs.core.Keyword(null,"prefix","prefix",-265908465),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(function (){var G__34130 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","with","sidefx/with",243394541),"With"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__34130) : ttt.call(null,G__34130));
})()," ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"radiotherapy","radiotherapy",-1259347062).cljs$core$IFn$_invoke$arity$1(predict_prostate.results.sidefx.treatment_fills)], null)], null),(function (){var G__34131 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","radio","sidefx/radio",-450230605),"radical radiotherapy (external beam),"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__34131) : ttt.call(null,G__34131));
})()], null)," ",(function (){var G__34132 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","about","sidefx/about",-2035617818),"about"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__34132) : ttt.call(null,G__34132));
})()," "], null),new cljs.core.Keyword(null,"n","n",562130025),(6),new cljs.core.Keyword(null,"tallies?","tallies?",-496877074),tallies_QMARK_,new cljs.core.Keyword(null,"ttt","ttt",1858561240),ttt], null);
return (predict_prostate.results.sidefx.sidefx_linear.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.sidefx.sidefx_linear.cljs$core$IFn$_invoke$arity$1(G__34129) : predict_prostate.results.sidefx.sidefx_linear.call(null,G__34129));
})();
return (predict_prostate.results.sidefx.sidefx_content.cljs$core$IFn$_invoke$arity$4 ? predict_prostate.results.sidefx.sidefx_content.cljs$core$IFn$_invoke$arity$4(G__34114,G__34115,G__34116,G__34117) : predict_prostate.results.sidefx.sidefx_content.call(null,G__34114,G__34115,G__34116,G__34117));
})()));
}),null,"sidefx-discrete");
predict_prostate.results.sidefx.sidefx_more_info = rum.core.build_defc((function (ttt){
return React.createElement("div",({"style": ({"marginTop": (20)}), "className": "col-sm-12"}),(function (){var attrs34133 = (function (){var G__34138 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","mi-title","sidefx/mi-title",-47418243),"More Information"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__34138) : ttt.call(null,G__34138));
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"h3",((cljs.core.map_QMARK_(attrs34133))?sablono.interpreter.attributes(attrs34133):null),((cljs.core.map_QMARK_(attrs34133))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs34133)], null)));
})(),(function (){var attrs34134 = (function (){var G__34139 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","mi-text1","sidefx/mi-text1",-392773301),"The following websites provide excellent advice and information on treatments and their potential harms:"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__34139) : ttt.call(null,G__34139));
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"p",((cljs.core.map_QMARK_(attrs34134))?sablono.interpreter.attributes(attrs34134):null),((cljs.core.map_QMARK_(attrs34134))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs34134)], null)));
})(),(function (){var attrs34135 = (function (){var G__34140 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","mi-text2","sidefx/mi-text2",589624303),"About treatments:"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__34140) : ttt.call(null,G__34140));
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"h5",((cljs.core.map_QMARK_(attrs34135))?sablono.interpreter.attributes(attrs34135):null),((cljs.core.map_QMARK_(attrs34135))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs34135)], null)));
})(),React.createElement("ul",({"style": ({"listStyleType": "none"})}),React.createElement("li",({"key": (1)}),React.createElement("a",({"href": "http://www.cancerresearchuk.org/about-cancer/prostate-cancer/treatment", "style": ({"textDecoration": "underline"}), "rel": "noopener", "target": "blank"}),sablono.interpreter.interpret((function (){var G__34141 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","mi-text3","sidefx/mi-text3",-1630373140),"Cancer research UK"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__34141) : ttt.call(null,G__34141));
})()))),React.createElement("li",({"key": (2)}),React.createElement("a",({"href": "https://www.nhs.uk/conditions/prostate-cancer/treatment/", "rel": "noopener", "style": ({"textDecoration": "underline"}), "target": "blank"}),sablono.interpreter.interpret((function (){var G__34142 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","mi-text4","sidefx/mi-text4",1086043072),"NHS"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__34142) : ttt.call(null,G__34142));
})())))),(function (){var attrs34136 = (function (){var G__34143 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","mi-text5","sidefx/mi-text5",-26334300),"About potential harms:"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__34143) : ttt.call(null,G__34143));
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"h5",((cljs.core.map_QMARK_(attrs34136))?sablono.interpreter.attributes(attrs34136):null),((cljs.core.map_QMARK_(attrs34136))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs34136)], null)));
})(),React.createElement("ul",({"style": ({"listStyleType": "none"})}),React.createElement("li",({"key": (3)}),React.createElement("a",({"href": "https://www.nhs.uk/conditions/prostate-cancer/treatment/#radical-prostatectomy", "style": ({"textDecoration": "underline"}), "rel": "noopener", "target": "blank"}),sablono.interpreter.interpret((function (){var G__34144 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","mi-text6","sidefx/mi-text6",-445782866),"Radical prostatectomy"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__34144) : ttt.call(null,G__34144));
})()))),React.createElement("li",({"key": (4)}),React.createElement("a",({"href": "https://www.nhs.uk/conditions/prostate-cancer/treatment/#radiotherapy", "style": ({"textDecoration": "underline"}), "rel": "noopener", "target": "blank"}),sablono.interpreter.interpret((function (){var G__34145 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","mi-text7","sidefx/mi-text7",1693220591),"Radiotherapy"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__34145) : ttt.call(null,G__34145));
})())))),(function (){var attrs34137 = (function (){var G__34146 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","mi-text8","sidefx/mi-text8",932614065),"Further advice and support:"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__34146) : ttt.call(null,G__34146));
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"h5",((cljs.core.map_QMARK_(attrs34137))?sablono.interpreter.attributes(attrs34137):null),((cljs.core.map_QMARK_(attrs34137))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs34137)], null)));
})(),React.createElement("ul",({"style": ({"listStyleType": "none"})}),React.createElement("li",({"key": (1)}),React.createElement("a",({"href": "http://www.macmillan.org.uk/", "style": ({"textDecoration": "underline"}), "rel": "noopener", "target": "blank"}),sablono.interpreter.interpret((function (){var G__34147 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","mi-text9","sidefx/mi-text9",483989971),"Macmillan"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__34147) : ttt.call(null,G__34147));
})()))),React.createElement("li",({"key": (2)}),React.createElement("a",({"href": "http://prostatecanceruk.org/", "style": ({"textDecoration": "underline"}), "rel": "noopener", "target": "_blank"}),sablono.interpreter.interpret((function (){var G__34148 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","mi-text10","sidefx/mi-text10",-421827287),"Prostate Cancer UK"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__34148) : ttt.call(null,G__34148));
})()))),React.createElement("li",({"key": (3)}),React.createElement("a",({"href": "https://www.nhs.uk/pages/home.aspx", "style": ({"textDecoration": "underline"}), "rel": "noopener", "target": "_blank"}),sablono.interpreter.interpret((function (){var G__34149 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","mi-text11","sidefx/mi-text11",1175342129),"NHS Choices"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__34149) : ttt.call(null,G__34149));
})())))));
}),null,"sidefx-more-info");
predict_prostate.results.sidefx.results_in_sidefx = rum.core.build_defc((function (ttt){
return React.createElement("div",({"style": ({"marginTop": "15px"})}),sablono.interpreter.interpret((predict_prostate.results.sidefx.sidefx_discrete.cljs$core$IFn$_invoke$arity$2 ? predict_prostate.results.sidefx.sidefx_discrete.cljs$core$IFn$_invoke$arity$2(true,ttt) : predict_prostate.results.sidefx.sidefx_discrete.call(null,true,ttt))));
}),null,"results-in-sidefx");

//# sourceMappingURL=predict_prostate.results.sidefx.js.map
