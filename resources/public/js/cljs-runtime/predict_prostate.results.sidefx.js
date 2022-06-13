goog.provide('predict_prostate.results.sidefx');
predict_prostate.results.sidefx.progress = rum.core.build_defc((function (percent){
return React.createElement("div",({"style": ({"backgroundColor": "#94d3f0"}), "className": "progress"}),React.createElement("div",({"role": "progress-bar", "aria-valuenow": percent, "aria-valuemin": (0), "aria-valuemax": (100), "style": ({"width": percent, "backgroundColor": "#bc3d95"}), "className": "progress-bar"}),(function (){var attrs36840 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(percent);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs36840))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["sr-only"], null)], null),attrs36840], 0))):({"className": "sr-only"})),((cljs.core.map_QMARK_(attrs36840))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["% Complete"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs36840),"% Complete"], null)));
})()));
}),null,"progress");
predict_prostate.results.sidefx.help = rum.core.build_defc((function (help_id){
var attrs36841 = (function (){var G__36842 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"help-id","help-id",-1064550845),help_id], null);
return (predict_prostate.components.button.small_help_button.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.components.button.small_help_button.cljs$core$IFn$_invoke$arity$1(G__36842) : predict_prostate.components.button.small_help_button.call(null,G__36842));
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs36841))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["pull-right"], null)], null),attrs36841], 0))):({"className": "pull-right"})),((cljs.core.map_QMARK_(attrs36841))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs36841)], null)));
}),null,"help");
predict_prostate.results.sidefx.treatment_fills = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"conservative","conservative",-1075714010),"#2222AA",new cljs.core.Keyword(null,"radical","radical",1159030213),"#3DAFEF",new cljs.core.Keyword(null,"radical-harms","radical-harms",-1715343730),"#660044",new cljs.core.Keyword(null,"radiotherapy","radiotherapy",-1259347062),"#CC5CA4"], null);
predict_prostate.results.sidefx.sidefx_header = rum.core.build_defc((function (ttt){
return React.createElement("div",({"style": ({"marginBottom": (15)}), "className": "col-xs-12"}),React.createElement("div",({"style": ({"backgroundColor": predict_prostate.results.util.alison_blue_1, "borderRadius": (3)}), "className": "row"}),React.createElement("h4",({"style": ({"marginLeft": (15)})}),sablono.interpreter.interpret((function (){var G__36843 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","ppho-title","sidefx/ppho-title",1137062973),"Potentially permanent harms of"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__36843) : ttt.call(null,G__36843));
})())),React.createElement("div",({"className": "col-sm-6"}),React.createElement("div",({"style": ({"fontSize": (16), "marginBottom": (10)})}),sablono.interpreter.interpret((function (){var G__36844 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),"b1",new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"conservative","conservative",-1075714010).cljs$core$IFn$_invoke$arity$1(predict_prostate.results.sidefx.treatment_fills),new cljs.core.Keyword(null,"r","r",-471384190),(7)], null);
return (predict_prostate.components.primitives.blob.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.components.primitives.blob.cljs$core$IFn$_invoke$arity$1(G__36844) : predict_prostate.components.primitives.blob.call(null,G__36844));
})())," ",sablono.interpreter.interpret((function (){var G__36845 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","cm","sidefx/cm",2013581781),"Conservative management"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__36845) : ttt.call(null,G__36845));
})())),React.createElement("div",({"style": ({"fontSize": (16), "marginBottom": (10)})}),sablono.interpreter.interpret((function (){var G__36846 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),"b2",new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"radical-harms","radical-harms",-1715343730).cljs$core$IFn$_invoke$arity$1(predict_prostate.results.sidefx.treatment_fills),new cljs.core.Keyword(null,"r","r",-471384190),(7)], null);
return (predict_prostate.components.primitives.blob.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.components.primitives.blob.cljs$core$IFn$_invoke$arity$1(G__36846) : predict_prostate.components.primitives.blob.call(null,G__36846));
})())," ",sablono.interpreter.interpret((function (){var G__36847 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","rp","sidefx/rp",-1252001846),"Radical prostatectomy"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__36847) : ttt.call(null,G__36847));
})())),React.createElement("div",({"style": ({"fontSize": (16)})}),sablono.interpreter.interpret((function (){var G__36848 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),"b3",new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"radiotherapy","radiotherapy",-1259347062).cljs$core$IFn$_invoke$arity$1(predict_prostate.results.sidefx.treatment_fills),new cljs.core.Keyword(null,"r","r",-471384190),(7)], null);
return (predict_prostate.components.primitives.blob.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.components.primitives.blob.cljs$core$IFn$_invoke$arity$1(G__36848) : predict_prostate.components.primitives.blob.call(null,G__36848));
})())," ",sablono.interpreter.interpret((function (){var G__36849 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","rr","sidefx/rr",-1381212698),"Radical Radiotherapy"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__36849) : ttt.call(null,G__36849));
})()))),React.createElement("div",({"className": "col-sm-6"}),React.createElement("p",({"style": ({"fontSize": (14)})}),sablono.interpreter.interpret((function (){var G__36850 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","ppho-text1","sidefx/ppho-text1",-581681790),"The following estimates are not individualised to you or your local treatment centre.\n    Your local team may have data specific to your centre which you can ask about."], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__36850) : ttt.call(null,G__36850));
})())),React.createElement("p",({"style": ({"fontSize": (14), "color": "#f00"})}),sablono.interpreter.interpret((function (){var G__36853 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","ppho-text2","sidefx/ppho-text2",-983677722),"If you are in the UK, centre by centre provider outcomes are provided by\n     the National Prostate Cancer Audit which you may find useful:"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__36853) : ttt.call(null,G__36853));
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
predict_prostate.results.sidefx.sidefx_bar = rum.core.build_defc((function (p__36854){
var map__36855 = p__36854;
var map__36855__$1 = cljs.core.__destructure_map(map__36855);
var fewer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36855__$1,new cljs.core.Keyword(null,"fewer","fewer",648726198));
var percent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36855__$1,new cljs.core.Keyword(null,"percent","percent",2031453817));
var fill = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36855__$1,new cljs.core.Keyword(null,"fill","fill",883462889));
var tallies_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36855__$1,new cljs.core.Keyword(null,"tallies?","tallies?",-496877074));
var ttt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36855__$1,new cljs.core.Keyword(null,"ttt","ttt",1858561240));
var f1 = predict_prostate.results.sidefx.fifty_1(percent);
var f2 = predict_prostate.results.sidefx.fifty_2(percent);
var hh = predict_prostate.results.sidefx.chunker((100),(10),percent);
var r = (4);
return React.createElement("div",({"className": "row"}),React.createElement("div",({"key": (1), "style": ({"fontSize": "120%", "fontWeight": "bold", "display": "inline-block"}), "className": "col-xs-1"}),React.createElement("span",({"style": ({"width": "100%", "textAlign": "right"})})),(cljs.core.truth_(fewer)?sablono.interpreter.interpret((function (){var G__36858 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","bar-lesst","sidefx/bar-lesst",-1099981635),"Less than"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__36858) : ttt.call(null,G__36858));
})()):null)," ",sablono.interpreter.interpret(percent),"% "),(cljs.core.truth_(tallies_QMARK_)?React.createElement("div",({"style": ({"marginTop": (3)}), "className": "col-xs-11"}),React.createElement("div",({"key": (1), "style": ({"width": (220), "display": "inline-block"})}),sablono.interpreter.interpret(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (n){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["t-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join('')], null),(function (){var G__36860 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fill","fill",883462889),fill,new cljs.core.Keyword(null,"r","r",-471384190),r,new cljs.core.Keyword(null,"tally?","tally?",-1847300034),true], null);
return (predict_prostate.components.primitives.blob_10.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.components.primitives.blob_10.cljs$core$IFn$_invoke$arity$1(G__36860) : predict_prostate.components.primitives.blob_10.call(null,G__36860));
})()], null);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tens","tens",-2107583828).cljs$core$IFn$_invoke$arity$1(f1)))),sablono.interpreter.interpret((((new cljs.core.Keyword(null,"units","units",-533089095).cljs$core$IFn$_invoke$arity$1(f1) > (0)))?(function (){var G__36861 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"fill","fill",883462889),fill,new cljs.core.Keyword(null,"r","r",-471384190),r,new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"units","units",-533089095).cljs$core$IFn$_invoke$arity$1(f1),new cljs.core.Keyword(null,"tally?","tally?",-1847300034),true], null);
return (predict_prostate.components.primitives.mixed_10.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.components.primitives.mixed_10.cljs$core$IFn$_invoke$arity$1(G__36861) : predict_prostate.components.primitives.mixed_10.call(null,G__36861));
})():null)),sablono.interpreter.interpret(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (n){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["0-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join('')], null),(function (){var G__36862 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fill","fill",883462889),(cljs.core.truth_(tallies_QMARK_)?"#BBBBBB":"white"),new cljs.core.Keyword(null,"r","r",-471384190),r,new cljs.core.Keyword(null,"tally?","tally?",-1847300034),true], null);
return (predict_prostate.components.primitives.blob_10.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.components.primitives.blob_10.cljs$core$IFn$_invoke$arity$1(G__36862) : predict_prostate.components.primitives.blob_10.call(null,G__36862));
})()], null);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tens-empty","tens-empty",1703381257).cljs$core$IFn$_invoke$arity$1(f1))))),React.createElement("div",({"key": (2), "style": ({"width": (220), "display": "inline-block"})}),sablono.interpreter.interpret(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (n){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["t-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join('')], null),(function (){var G__36863 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fill","fill",883462889),fill,new cljs.core.Keyword(null,"r","r",-471384190),r,new cljs.core.Keyword(null,"tally?","tally?",-1847300034),true], null);
return (predict_prostate.components.primitives.blob_10.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.components.primitives.blob_10.cljs$core$IFn$_invoke$arity$1(G__36863) : predict_prostate.components.primitives.blob_10.call(null,G__36863));
})()], null);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tens","tens",-2107583828).cljs$core$IFn$_invoke$arity$1(f2)))),sablono.interpreter.interpret((((new cljs.core.Keyword(null,"units","units",-533089095).cljs$core$IFn$_invoke$arity$1(f2) > (0)))?(function (){var G__36864 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"fill","fill",883462889),fill,new cljs.core.Keyword(null,"r","r",-471384190),r,new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"units","units",-533089095).cljs$core$IFn$_invoke$arity$1(f2),new cljs.core.Keyword(null,"tally?","tally?",-1847300034),true], null);
return (predict_prostate.components.primitives.mixed_10.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.components.primitives.mixed_10.cljs$core$IFn$_invoke$arity$1(G__36864) : predict_prostate.components.primitives.mixed_10.call(null,G__36864));
})():null)),sablono.interpreter.interpret(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (n){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["0-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join('')], null),(function (){var G__36865 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fill","fill",883462889),(cljs.core.truth_(tallies_QMARK_)?"#BBBBBB":"white"),new cljs.core.Keyword(null,"r","r",-471384190),r,new cljs.core.Keyword(null,"tally?","tally?",-1847300034),true], null);
return (predict_prostate.components.primitives.blob_10.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.components.primitives.blob_10.cljs$core$IFn$_invoke$arity$1(G__36865) : predict_prostate.components.primitives.blob_10.call(null,G__36865));
})()], null);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tens-empty","tens-empty",1703381257).cljs$core$IFn$_invoke$arity$1(f2)))))):(function (){var attrs36859 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (n){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["t-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join('')], null),(function (){var G__36866 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fill","fill",883462889),fill,new cljs.core.Keyword(null,"r","r",-471384190),r], null);
return (predict_prostate.components.primitives.blob_10.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.components.primitives.blob_10.cljs$core$IFn$_invoke$arity$1(G__36866) : predict_prostate.components.primitives.blob_10.call(null,G__36866));
})()], null);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tens","tens",-2107583828).cljs$core$IFn$_invoke$arity$1(hh)));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs36859))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["col-xs-12"], null)], null),attrs36859], 0))):({"className": "col-xs-12"})),((cljs.core.map_QMARK_(attrs36859))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret((((new cljs.core.Keyword(null,"units","units",-533089095).cljs$core$IFn$_invoke$arity$1(hh) > (0)))?(function (){var G__36867 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fill","fill",883462889),fill,new cljs.core.Keyword(null,"r","r",-471384190),r,new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"units","units",-533089095).cljs$core$IFn$_invoke$arity$1(hh)], null);
return (predict_prostate.components.primitives.mixed_10.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.components.primitives.mixed_10.cljs$core$IFn$_invoke$arity$1(G__36867) : predict_prostate.components.primitives.mixed_10.call(null,G__36867));
})():null)),sablono.interpreter.interpret(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (n){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["0-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join('')], null),(function (){var G__36868 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fill","fill",883462889),"white",new cljs.core.Keyword(null,"r","r",-471384190),r], null);
return (predict_prostate.components.primitives.blob_10.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.components.primitives.blob_10.cljs$core$IFn$_invoke$arity$1(G__36868) : predict_prostate.components.primitives.blob_10.call(null,G__36868));
})()], null);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tens-empty","tens-empty",1703381257).cljs$core$IFn$_invoke$arity$1(hh))))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs36859),sablono.interpreter.interpret((((new cljs.core.Keyword(null,"units","units",-533089095).cljs$core$IFn$_invoke$arity$1(hh) > (0)))?(function (){var G__36869 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fill","fill",883462889),fill,new cljs.core.Keyword(null,"r","r",-471384190),r,new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"units","units",-533089095).cljs$core$IFn$_invoke$arity$1(hh)], null);
return (predict_prostate.components.primitives.mixed_10.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.components.primitives.mixed_10.cljs$core$IFn$_invoke$arity$1(G__36869) : predict_prostate.components.primitives.mixed_10.call(null,G__36869));
})():null)),sablono.interpreter.interpret(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (n){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["0-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join('')], null),(function (){var G__36870 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fill","fill",883462889),"white",new cljs.core.Keyword(null,"r","r",-471384190),r], null);
return (predict_prostate.components.primitives.blob_10.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.components.primitives.blob_10.cljs$core$IFn$_invoke$arity$1(G__36870) : predict_prostate.components.primitives.blob_10.call(null,G__36870));
})()], null);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tens-empty","tens-empty",1703381257).cljs$core$IFn$_invoke$arity$1(hh))))], null)));
})()));
}),null,"sidefx-bar");
predict_prostate.results.sidefx.fewer_helper = rum.core.build_defc((function() {
var G__36988 = null;
var G__36988__2 = (function (prefix,ttt){
return sablono.interpreter.interpret((predict_prostate.results.sidefx.fewer_helper.cljs$core$IFn$_invoke$arity$3 ? predict_prostate.results.sidefx.fewer_helper.cljs$core$IFn$_invoke$arity$3(prefix,"",ttt) : predict_prostate.results.sidefx.fewer_helper.call(null,prefix,"",ttt)));
});
var G__36988__3 = (function (prefix,n,ttt){
var attrs36871 = prefix;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs36871))?sablono.interpreter.attributes(attrs36871):null),((cljs.core.map_QMARK_(attrs36871))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs36872 = (function (){var G__36874 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","fewer","sidefx/fewer",1616828099),"fewer than"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__36874) : ttt.call(null,G__36874));
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"b",((cljs.core.map_QMARK_(attrs36872))?sablono.interpreter.attributes(attrs36872):null),((cljs.core.map_QMARK_(attrs36872))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",(cljs.core.truth_(n)?(function (){var attrs36875 = n;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs36875))?sablono.interpreter.attributes(attrs36875):null),((cljs.core.map_QMARK_(attrs36875))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [" "], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs36875)," "], null)));
})():"")], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs36872)," ",(cljs.core.truth_(n)?(function (){var attrs36876 = n;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs36876))?sablono.interpreter.attributes(attrs36876):null),((cljs.core.map_QMARK_(attrs36876))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [" "], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs36876)," "], null)));
})():"")], null)));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs36871),(function (){var attrs36873 = (function (){var G__36877 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","fewer","sidefx/fewer",1616828099),"fewer than"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__36877) : ttt.call(null,G__36877));
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"b",((cljs.core.map_QMARK_(attrs36873))?sablono.interpreter.attributes(attrs36873):null),((cljs.core.map_QMARK_(attrs36873))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",(cljs.core.truth_(n)?(function (){var attrs36878 = n;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs36878))?sablono.interpreter.attributes(attrs36878):null),((cljs.core.map_QMARK_(attrs36878))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [" "], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs36878)," "], null)));
})():"")], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs36873)," ",(cljs.core.truth_(n)?(function (){var attrs36879 = n;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs36879))?sablono.interpreter.attributes(attrs36879):null),((cljs.core.map_QMARK_(attrs36879))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [" "], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs36879)," "], null)));
})():"")], null)));
})()], null)));
});
G__36988 = function(prefix,n,ttt){
switch(arguments.length){
case 2:
return G__36988__2.call(this,prefix,n);
case 3:
return G__36988__3.call(this,prefix,n,ttt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__36988.cljs$core$IFn$_invoke$arity$2 = G__36988__2;
G__36988.cljs$core$IFn$_invoke$arity$3 = G__36988__3;
return G__36988;
})()
,null,"fewer-helper");
predict_prostate.results.sidefx.sidefx_linear = rum.core.build_defc((function (p__36880){
var map__36881 = p__36880;
var map__36881__$1 = cljs.core.__destructure_map(map__36881);
var treatment = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36881__$1,new cljs.core.Keyword(null,"treatment","treatment",515251816));
var prefix = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36881__$1,new cljs.core.Keyword(null,"prefix","prefix",-265908465));
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36881__$1,new cljs.core.Keyword(null,"n","n",562130025));
var fewer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36881__$1,new cljs.core.Keyword(null,"fewer","fewer",648726198));
var tallies_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36881__$1,new cljs.core.Keyword(null,"tallies?","tallies?",-496877074));
var ttt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36881__$1,new cljs.core.Keyword(null,"ttt","ttt",1858561240));
var quantity = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),Math.round(n)," ",(function (){var G__36882 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","lin-in","sidefx/lin-in",554234320),"in"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__36882) : ttt.call(null,G__36882));
})()," 100 "], null);
return React.createElement("div",null,(function (){var attrs36883 = prefix;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs36883))?sablono.interpreter.attributes(attrs36883):null),((cljs.core.map_QMARK_(attrs36883))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(fewer)?(function (){var attrs36887 = quantity;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"b",((cljs.core.map_QMARK_(attrs36887))?sablono.interpreter.attributes(attrs36887):null),((cljs.core.map_QMARK_(attrs36887))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs36887)], null)));
})():sablono.interpreter.interpret(quantity))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs36883),(cljs.core.truth_(fewer)?(function (){var attrs36888 = quantity;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"b",((cljs.core.map_QMARK_(attrs36888))?sablono.interpreter.attributes(attrs36888):null),((cljs.core.map_QMARK_(attrs36888))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs36888)], null)));
})():sablono.interpreter.interpret(quantity))], null)));
})(),(function (){var attrs36884 = (function (){var G__36889 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","lin-aft","sidefx/lin-aft",1268874602),"men have this issue after 6 years."], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__36889) : ttt.call(null,G__36889));
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs36884))?sablono.interpreter.attributes(attrs36884):null),((cljs.core.map_QMARK_(attrs36884))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs36884)], null)));
})(),sablono.interpreter.interpret((function (){var G__36890 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fewer","fewer",648726198),fewer,new cljs.core.Keyword(null,"percent","percent",2031453817),n,new cljs.core.Keyword(null,"fill","fill",883462889),(treatment.cljs$core$IFn$_invoke$arity$1 ? treatment.cljs$core$IFn$_invoke$arity$1(predict_prostate.results.sidefx.treatment_fills) : treatment.call(null,predict_prostate.results.sidefx.treatment_fills)),new cljs.core.Keyword(null,"tallies?","tallies?",-496877074),tallies_QMARK_,new cljs.core.Keyword(null,"ttt","ttt",1858561240),ttt], null);
return (predict_prostate.results.sidefx.sidefx_bar.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.sidefx.sidefx_bar.cljs$core$IFn$_invoke$arity$1(G__36890) : predict_prostate.results.sidefx.sidefx_bar.call(null,G__36890));
})()),React.createElement("br",null));
}),null,"sidefx-linear");
predict_prostate.results.sidefx.sidefx_content = rum.core.build_defc((function() { 
var G__36992__delegate = function (p__36895,content){
var map__36896 = p__36895;
var map__36896__$1 = cljs.core.__destructure_map(map__36896);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36896__$1,new cljs.core.Keyword(null,"title","title",636505583));
var sub_title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36896__$1,new cljs.core.Keyword(null,"sub-title","sub-title",-1781490288));
var subsub_title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36896__$1,new cljs.core.Keyword(null,"subsub-title","subsub-title",1374352131));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36896__$1,new cljs.core.Keyword(null,"source","source",-433931539));
return React.createElement("div",({"style": ({"padding": "0 15px 0 15px", "fontSize": (16)})}),(function (){var attrs36897 = title;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"h4",((cljs.core.map_QMARK_(attrs36897))?sablono.interpreter.attributes(attrs36897):null),((cljs.core.map_QMARK_(attrs36897))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs36897)], null)));
})(),(function (){var attrs36898 = sub_title;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"h5",((cljs.core.map_QMARK_(attrs36898))?sablono.interpreter.attributes(attrs36898):null),((cljs.core.map_QMARK_(attrs36898))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs36898)], null)));
})(),(function (){var attrs36899 = subsub_title;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"h6",((cljs.core.map_QMARK_(attrs36899))?sablono.interpreter.attributes(attrs36899):null),((cljs.core.map_QMARK_(attrs36899))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs36899)], null)));
})(),sablono.interpreter.interpret(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__36892_SHARP_,p2__36891_SHARP_){
return rum.core.with_key(p2__36891_SHARP_,p1__36892_SHARP_);
}),content)),sablono.interpreter.interpret((cljs.core.truth_(source)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".alert.alert-info",".alert.alert-info",1970443868),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(12)], null)], null),(source.cljs$core$IFn$_invoke$arity$0 ? source.cljs$core$IFn$_invoke$arity$0() : source.call(null))], null):null)));
};
var G__36992 = function (p__36895,var_args){
var content = null;
if (arguments.length > 1) {
var G__36994__i = 0, G__36994__a = new Array(arguments.length -  1);
while (G__36994__i < G__36994__a.length) {G__36994__a[G__36994__i] = arguments[G__36994__i + 1]; ++G__36994__i;}
  content = new cljs.core.IndexedSeq(G__36994__a,0,null);
} 
return G__36992__delegate.call(this,p__36895,content);};
G__36992.cljs$lang$maxFixedArity = 1;
G__36992.cljs$lang$applyTo = (function (arglist__36995){
var p__36895 = cljs.core.first(arglist__36995);
var content = cljs.core.rest(arglist__36995);
return G__36992__delegate(p__36895,content);
});
G__36992.cljs$core$IFn$_invoke$arity$variadic = G__36992__delegate;
return G__36992;
})()
,null,"sidefx-content");
predict_prostate.results.sidefx.erectile_source = rum.core.build_defc((function (ttt){
var attrs36900 = (function (){var G__36905 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","eresrc-text1","sidefx/eresrc-text1",1406494822),"Estimates for erectile dysfunction have been taken from the UK-based Prostate Testing for Cancer and Treatment (ProtecT) trial. The full research can be\n        read here:"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__36905) : ttt.call(null,G__36905));
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs36900))?sablono.interpreter.attributes(attrs36900):null),((cljs.core.map_QMARK_(attrs36900))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",React.createElement("a",({"href": "https://bjui-journals.onlinelibrary.wiley.com/doi/10.1111/bju.15739", "target": "_blank"}),"https://bjui-journals.onlinelibrary.wiley.com/doi/10.1111/bju.15739")], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs36900)," ",React.createElement("a",({"href": "https://bjui-journals.onlinelibrary.wiley.com/doi/10.1111/bju.15739", "target": "_blank"}),"https://bjui-journals.onlinelibrary.wiley.com/doi/10.1111/bju.15739")], null)));
}),null,"erectile-source");
predict_prostate.results.sidefx.incontinence_source = rum.core.build_defc((function (ttt){
var attrs36906 = (function (){var G__36911 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","incsrc-text1","sidefx/incsrc-text1",-1325551852),"Estimates for incontinence have been taken from the UK-based Prostate Testing for\n       Cancer and Treatment (ProtecT) trial. The full research can be read here:"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__36911) : ttt.call(null,G__36911));
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs36906))?sablono.interpreter.attributes(attrs36906):null),((cljs.core.map_QMARK_(attrs36906))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",React.createElement("a",({"href": "https://bjuijournals.onlinelibrary.wiley.com/doi/10.1111/bju.15739", "target": "_blank"}),"https://bjuijournals.onlinelibrary.wiley.com/doi/10.1111/bju.15739")], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs36906)," ",React.createElement("a",({"href": "https://bjuijournals.onlinelibrary.wiley.com/doi/10.1111/bju.15739", "target": "_blank"}),"https://bjuijournals.onlinelibrary.wiley.com/doi/10.1111/bju.15739")], null)));
}),null,"incontinence-source");
predict_prostate.results.sidefx.bowel_source = rum.core.build_defc((function (ttt){
return React.createElement("span",({"fontSize": (12)}),sablono.interpreter.interpret((function (){var G__36914 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","bowsrc-text1","sidefx/bowsrc-text1",-2008110457),"Estimates for bowel issues have been taken from the UK-based Prostate Testing for\n       Cancer and Treatment (ProtecT) trial. The full research can be read here:"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__36914) : ttt.call(null,G__36914));
})())," ",React.createElement("a",({"href": "https://bjuijournals.onlinelibrary.wiley.com/doi/10.1111/bju.15739", "target": "_blank"}),"https://bjuijournals.onlinelibrary.wiley.com/doi/10.1111/bju.15739"));
}),null,"bowel-source");
predict_prostate.results.sidefx.sidefx_discrete = rum.core.build_defc((function (tallies_QMARK_,ttt){
return React.createElement("div",({"style": ({"border": "1px solid #CCCCCC", "borderRadius": (3), "fontSize": (16)})}),sablono.interpreter.interpret((predict_prostate.results.sidefx.sidefx_header.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.sidefx.sidefx_header.cljs$core$IFn$_invoke$arity$1(ttt) : predict_prostate.results.sidefx.sidefx_header.call(null,ttt))),sablono.interpreter.interpret((function (){var G__36915 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),(function (){var G__36919 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","eredys-title","sidefx/eredys-title",-967487873),"Erectile dysfunction"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__36919) : ttt.call(null,G__36919));
})(),new cljs.core.Keyword(null,"sub-title","sub-title",-1781490288),(function (){var G__36920 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","eredys-subtitle","sidefx/eredys-subtitle",-814812706),"Defined as: 'Lack of firmness for intercourse'"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__36920) : ttt.call(null,G__36920));
})(),new cljs.core.Keyword(null,"subsub-title","subsub-title",1374352131),(function (){var G__36921 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","eredys-subsubtitle","sidefx/eredys-subsubtitle",-309428800),"Percentages shown are in addition to men who may already have this problem before a treatment is given"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__36921) : ttt.call(null,G__36921));
})(),new cljs.core.Keyword(null,"source","source",-433931539),(function (){
return (predict_prostate.results.sidefx.erectile_source.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.sidefx.erectile_source.cljs$core$IFn$_invoke$arity$1(ttt) : predict_prostate.results.sidefx.erectile_source.call(null,ttt));
})], null);
var G__36916 = (function (){var G__36922 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"treatment","treatment",515251816),new cljs.core.Keyword(null,"conservative","conservative",-1075714010),new cljs.core.Keyword(null,"prefix","prefix",-265908465),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(function (){var G__36923 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","with","sidefx/with",243394541),"With"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__36923) : ttt.call(null,G__36923));
})()," ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"conservative","conservative",-1075714010).cljs$core$IFn$_invoke$arity$1(predict_prostate.results.sidefx.treatment_fills)], null)], null),(function (){var G__36924 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","cons-man","sidefx/cons-man",552309001),"conservative management,"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__36924) : ttt.call(null,G__36924));
})()], null)," ",(function (){var G__36925 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","about","sidefx/about",-2035617818),"about"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__36925) : ttt.call(null,G__36925));
})()," "], null),new cljs.core.Keyword(null,"n","n",562130025),(21),new cljs.core.Keyword(null,"tallies?","tallies?",-496877074),tallies_QMARK_,new cljs.core.Keyword(null,"ttt","ttt",1858561240),ttt], null);
return (predict_prostate.results.sidefx.sidefx_linear.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.sidefx.sidefx_linear.cljs$core$IFn$_invoke$arity$1(G__36922) : predict_prostate.results.sidefx.sidefx_linear.call(null,G__36922));
})();
var G__36917 = (function (){var G__36926 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"treatment","treatment",515251816),new cljs.core.Keyword(null,"radical-harms","radical-harms",-1715343730),new cljs.core.Keyword(null,"prefix","prefix",-265908465),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(function (){var G__36927 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","with","sidefx/with",243394541),"With"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__36927) : ttt.call(null,G__36927));
})()," ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"radical-harms","radical-harms",-1715343730).cljs$core$IFn$_invoke$arity$1(predict_prostate.results.sidefx.treatment_fills)], null)], null),(function (){var G__36928 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","radp","sidefx/radp",320511672),"radical prostatectomy (surgery),"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__36928) : ttt.call(null,G__36928));
})()], null)," ",(function (){var G__36929 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","about","sidefx/about",-2035617818),"about"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__36929) : ttt.call(null,G__36929));
})()," "], null),new cljs.core.Keyword(null,"n","n",562130025),(50),new cljs.core.Keyword(null,"tallies?","tallies?",-496877074),tallies_QMARK_,new cljs.core.Keyword(null,"ttt","ttt",1858561240),ttt], null);
return (predict_prostate.results.sidefx.sidefx_linear.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.sidefx.sidefx_linear.cljs$core$IFn$_invoke$arity$1(G__36926) : predict_prostate.results.sidefx.sidefx_linear.call(null,G__36926));
})();
var G__36918 = (function (){var G__36930 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"treatment","treatment",515251816),new cljs.core.Keyword(null,"radiotherapy","radiotherapy",-1259347062),new cljs.core.Keyword(null,"prefix","prefix",-265908465),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(function (){var G__36931 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","with","sidefx/with",243394541),"With"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__36931) : ttt.call(null,G__36931));
})()," ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"radiotherapy","radiotherapy",-1259347062).cljs$core$IFn$_invoke$arity$1(predict_prostate.results.sidefx.treatment_fills)], null)], null),(function (){var G__36932 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","radio","sidefx/radio",-450230605),"radical radiotherapy (external beam),"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__36932) : ttt.call(null,G__36932));
})()], null)," ",(function (){var G__36933 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","about","sidefx/about",-2035617818),"about"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__36933) : ttt.call(null,G__36933));
})()," "], null),new cljs.core.Keyword(null,"n","n",562130025),(36),new cljs.core.Keyword(null,"tallies?","tallies?",-496877074),tallies_QMARK_,new cljs.core.Keyword(null,"ttt","ttt",1858561240),ttt], null);
return (predict_prostate.results.sidefx.sidefx_linear.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.sidefx.sidefx_linear.cljs$core$IFn$_invoke$arity$1(G__36930) : predict_prostate.results.sidefx.sidefx_linear.call(null,G__36930));
})();
return (predict_prostate.results.sidefx.sidefx_content.cljs$core$IFn$_invoke$arity$4 ? predict_prostate.results.sidefx.sidefx_content.cljs$core$IFn$_invoke$arity$4(G__36915,G__36916,G__36917,G__36918) : predict_prostate.results.sidefx.sidefx_content.call(null,G__36915,G__36916,G__36917,G__36918));
})()),sablono.interpreter.interpret((function (){var G__36934 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),(function (){var G__36938 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","incon-title","sidefx/incon-title",-983966664),"Incontinence"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__36938) : ttt.call(null,G__36938));
})(),new cljs.core.Keyword(null,"sub-title","sub-title",-1781490288),(function (){var G__36939 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","incon-subtitle","sidefx/incon-subtitle",625073468),"Defined as: 'Use of 1 or more pads per day and assuming this problem does not exist before treatment'"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__36939) : ttt.call(null,G__36939));
})(),new cljs.core.Keyword(null,"source","source",-433931539),(function (){
return (predict_prostate.results.sidefx.incontinence_source.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.sidefx.incontinence_source.cljs$core$IFn$_invoke$arity$1(ttt) : predict_prostate.results.sidefx.incontinence_source.call(null,ttt));
})], null);
var G__36935 = (function (){var G__36940 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"treatment","treatment",515251816),new cljs.core.Keyword(null,"conservative","conservative",-1075714010),new cljs.core.Keyword(null,"prefix","prefix",-265908465),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(function (){var G__36941 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","with","sidefx/with",243394541),"With"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__36941) : ttt.call(null,G__36941));
})()," ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"conservative","conservative",-1075714010).cljs$core$IFn$_invoke$arity$1(predict_prostate.results.sidefx.treatment_fills)], null)], null),(function (){var G__36942 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","cons-man","sidefx/cons-man",552309001),"conservative management,"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__36942) : ttt.call(null,G__36942));
})()], null)," ",(function (){var G__36943 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","about","sidefx/about",-2035617818),"about"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__36943) : ttt.call(null,G__36943));
})()," "], null),new cljs.core.Keyword(null,"n","n",562130025),(1),new cljs.core.Keyword(null,"tallies?","tallies?",-496877074),tallies_QMARK_,new cljs.core.Keyword(null,"ttt","ttt",1858561240),ttt], null);
return (predict_prostate.results.sidefx.sidefx_linear.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.sidefx.sidefx_linear.cljs$core$IFn$_invoke$arity$1(G__36940) : predict_prostate.results.sidefx.sidefx_linear.call(null,G__36940));
})();
var G__36936 = (function (){var G__36944 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"treatment","treatment",515251816),new cljs.core.Keyword(null,"radical-harms","radical-harms",-1715343730),new cljs.core.Keyword(null,"prefix","prefix",-265908465),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(function (){var G__36945 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","with","sidefx/with",243394541),"With"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__36945) : ttt.call(null,G__36945));
})()," ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"radical-harms","radical-harms",-1715343730).cljs$core$IFn$_invoke$arity$1(predict_prostate.results.sidefx.treatment_fills)], null)], null),(function (){var G__36946 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","radp","sidefx/radp",320511672),"radical prostatectomy (surgery),"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__36946) : ttt.call(null,G__36946));
})()], null)," ",(function (){var G__36947 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","about","sidefx/about",-2035617818),"about"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__36947) : ttt.call(null,G__36947));
})()," "], null),new cljs.core.Keyword(null,"n","n",562130025),(20),new cljs.core.Keyword(null,"tallies?","tallies?",-496877074),tallies_QMARK_,new cljs.core.Keyword(null,"ttt","ttt",1858561240),ttt], null);
return (predict_prostate.results.sidefx.sidefx_linear.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.sidefx.sidefx_linear.cljs$core$IFn$_invoke$arity$1(G__36944) : predict_prostate.results.sidefx.sidefx_linear.call(null,G__36944));
})();
var G__36937 = (function (){var G__36948 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"treatment","treatment",515251816),new cljs.core.Keyword(null,"radiotherapy","radiotherapy",-1259347062),new cljs.core.Keyword(null,"prefix","prefix",-265908465),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(function (){var G__36949 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","with","sidefx/with",243394541),"With"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__36949) : ttt.call(null,G__36949));
})()," ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"radiotherapy","radiotherapy",-1259347062).cljs$core$IFn$_invoke$arity$1(predict_prostate.results.sidefx.treatment_fills)], null)], null),(function (){var G__36950 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","radio","sidefx/radio",-450230605),"radical radiotherapy (external beam),"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__36950) : ttt.call(null,G__36950));
})()], null)," ",(function (){var G__36951 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","about","sidefx/about",-2035617818),"about"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__36951) : ttt.call(null,G__36951));
})()," "], null),new cljs.core.Keyword(null,"n","n",562130025),(3),new cljs.core.Keyword(null,"tallies?","tallies?",-496877074),tallies_QMARK_,new cljs.core.Keyword(null,"ttt","ttt",1858561240),ttt], null);
return (predict_prostate.results.sidefx.sidefx_linear.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.sidefx.sidefx_linear.cljs$core$IFn$_invoke$arity$1(G__36948) : predict_prostate.results.sidefx.sidefx_linear.call(null,G__36948));
})();
return (predict_prostate.results.sidefx.sidefx_content.cljs$core$IFn$_invoke$arity$4 ? predict_prostate.results.sidefx.sidefx_content.cljs$core$IFn$_invoke$arity$4(G__36934,G__36935,G__36936,G__36937) : predict_prostate.results.sidefx.sidefx_content.call(null,G__36934,G__36935,G__36936,G__36937));
})()),sablono.interpreter.interpret((function (){var G__36952 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),(function (){var G__36956 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","bowiss-title","sidefx/bowiss-title",-275898307),"Bowel issues"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__36956) : ttt.call(null,G__36956));
})(),new cljs.core.Keyword(null,"sub-title","sub-title",-1781490288),(function (){var G__36957 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","bowiss-subtitle","sidefx/bowiss-subtitle",-1316088249),"Defined as: 'Bloody stools about half the time or more frequently'"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__36957) : ttt.call(null,G__36957));
})(),new cljs.core.Keyword(null,"source","source",-433931539),(function (){
return (predict_prostate.results.sidefx.bowel_source.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.sidefx.bowel_source.cljs$core$IFn$_invoke$arity$1(ttt) : predict_prostate.results.sidefx.bowel_source.call(null,ttt));
})], null);
var G__36953 = (function (){var G__36958 = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"treatment","treatment",515251816),new cljs.core.Keyword(null,"conservative","conservative",-1075714010),new cljs.core.Keyword(null,"prefix","prefix",-265908465),(function (){var G__36959 = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(function (){var G__36961 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","with","sidefx/with",243394541),"With"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__36961) : ttt.call(null,G__36961));
})()," ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"conservative","conservative",-1075714010).cljs$core$IFn$_invoke$arity$1(predict_prostate.results.sidefx.treatment_fills)], null)], null),(function (){var G__36962 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","cons-man","sidefx/cons-man",552309001),"conservative management,"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__36962) : ttt.call(null,G__36962));
})()], null)," "], null);
var G__36960 = ttt;
return (predict_prostate.results.sidefx.fewer_helper.cljs$core$IFn$_invoke$arity$2 ? predict_prostate.results.sidefx.fewer_helper.cljs$core$IFn$_invoke$arity$2(G__36959,G__36960) : predict_prostate.results.sidefx.fewer_helper.call(null,G__36959,G__36960));
})(),new cljs.core.Keyword(null,"fewer","fewer",648726198),true,new cljs.core.Keyword(null,"n","n",562130025),(1),new cljs.core.Keyword(null,"tallies?","tallies?",-496877074),tallies_QMARK_,new cljs.core.Keyword(null,"ttt","ttt",1858561240),ttt], null);
return (predict_prostate.results.sidefx.sidefx_linear.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.sidefx.sidefx_linear.cljs$core$IFn$_invoke$arity$1(G__36958) : predict_prostate.results.sidefx.sidefx_linear.call(null,G__36958));
})();
var G__36954 = (function (){var G__36963 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"treatment","treatment",515251816),new cljs.core.Keyword(null,"radical-harms","radical-harms",-1715343730),new cljs.core.Keyword(null,"prefix","prefix",-265908465),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(function (){var G__36964 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","with","sidefx/with",243394541),"With"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__36964) : ttt.call(null,G__36964));
})()," ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"radical-harms","radical-harms",-1715343730).cljs$core$IFn$_invoke$arity$1(predict_prostate.results.sidefx.treatment_fills)], null)], null),(function (){var G__36965 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","radp","sidefx/radp",320511672),"radical prostatectomy (surgery),"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__36965) : ttt.call(null,G__36965));
})()], null)," ",(function (){var G__36966 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","about","sidefx/about",-2035617818),"about"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__36966) : ttt.call(null,G__36966));
})()," "], null),new cljs.core.Keyword(null,"n","n",562130025),(1),new cljs.core.Keyword(null,"tallies?","tallies?",-496877074),tallies_QMARK_,new cljs.core.Keyword(null,"ttt","ttt",1858561240),ttt], null);
return (predict_prostate.results.sidefx.sidefx_linear.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.sidefx.sidefx_linear.cljs$core$IFn$_invoke$arity$1(G__36963) : predict_prostate.results.sidefx.sidefx_linear.call(null,G__36963));
})();
var G__36955 = (function (){var G__36967 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"treatment","treatment",515251816),new cljs.core.Keyword(null,"radiotherapy","radiotherapy",-1259347062),new cljs.core.Keyword(null,"prefix","prefix",-265908465),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(function (){var G__36968 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","with","sidefx/with",243394541),"With"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__36968) : ttt.call(null,G__36968));
})()," ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"radiotherapy","radiotherapy",-1259347062).cljs$core$IFn$_invoke$arity$1(predict_prostate.results.sidefx.treatment_fills)], null)], null),(function (){var G__36969 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","radio","sidefx/radio",-450230605),"radical radiotherapy (external beam),"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__36969) : ttt.call(null,G__36969));
})()], null)," ",(function (){var G__36970 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","about","sidefx/about",-2035617818),"about"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__36970) : ttt.call(null,G__36970));
})()," "], null),new cljs.core.Keyword(null,"n","n",562130025),(6),new cljs.core.Keyword(null,"tallies?","tallies?",-496877074),tallies_QMARK_,new cljs.core.Keyword(null,"ttt","ttt",1858561240),ttt], null);
return (predict_prostate.results.sidefx.sidefx_linear.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.sidefx.sidefx_linear.cljs$core$IFn$_invoke$arity$1(G__36967) : predict_prostate.results.sidefx.sidefx_linear.call(null,G__36967));
})();
return (predict_prostate.results.sidefx.sidefx_content.cljs$core$IFn$_invoke$arity$4 ? predict_prostate.results.sidefx.sidefx_content.cljs$core$IFn$_invoke$arity$4(G__36952,G__36953,G__36954,G__36955) : predict_prostate.results.sidefx.sidefx_content.call(null,G__36952,G__36953,G__36954,G__36955));
})()));
}),null,"sidefx-discrete");
predict_prostate.results.sidefx.sidefx_more_info = rum.core.build_defc((function (ttt){
return React.createElement("div",({"style": ({"marginTop": (20)}), "className": "col-sm-12"}),(function (){var attrs36971 = (function (){var G__36976 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","mi-title","sidefx/mi-title",-47418243),"More Information"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__36976) : ttt.call(null,G__36976));
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"h3",((cljs.core.map_QMARK_(attrs36971))?sablono.interpreter.attributes(attrs36971):null),((cljs.core.map_QMARK_(attrs36971))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs36971)], null)));
})(),(function (){var attrs36972 = (function (){var G__36977 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","mi-text1","sidefx/mi-text1",-392773301),"The following websites provide excellent advice and information on treatments and their potential harms:"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__36977) : ttt.call(null,G__36977));
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"p",((cljs.core.map_QMARK_(attrs36972))?sablono.interpreter.attributes(attrs36972):null),((cljs.core.map_QMARK_(attrs36972))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs36972)], null)));
})(),(function (){var attrs36973 = (function (){var G__36978 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","mi-text2","sidefx/mi-text2",589624303),"About treatments:"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__36978) : ttt.call(null,G__36978));
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"h5",((cljs.core.map_QMARK_(attrs36973))?sablono.interpreter.attributes(attrs36973):null),((cljs.core.map_QMARK_(attrs36973))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs36973)], null)));
})(),React.createElement("ul",({"style": ({"listStyleType": "none"})}),React.createElement("li",({"key": (1)}),React.createElement("a",({"href": "http://www.cancerresearchuk.org/about-cancer/prostate-cancer/treatment", "style": ({"textDecoration": "underline"}), "rel": "noopener", "target": "blank"}),sablono.interpreter.interpret((function (){var G__36979 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","mi-text3","sidefx/mi-text3",-1630373140),"Cancer research UK"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__36979) : ttt.call(null,G__36979));
})()))),React.createElement("li",({"key": (2)}),React.createElement("a",({"href": "https://www.nhs.uk/conditions/prostate-cancer/treatment/", "rel": "noopener", "style": ({"textDecoration": "underline"}), "target": "blank"}),sablono.interpreter.interpret((function (){var G__36980 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","mi-text4","sidefx/mi-text4",1086043072),"NHS"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__36980) : ttt.call(null,G__36980));
})())))),(function (){var attrs36974 = (function (){var G__36981 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","mi-text5","sidefx/mi-text5",-26334300),"About potential harms:"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__36981) : ttt.call(null,G__36981));
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"h5",((cljs.core.map_QMARK_(attrs36974))?sablono.interpreter.attributes(attrs36974):null),((cljs.core.map_QMARK_(attrs36974))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs36974)], null)));
})(),React.createElement("ul",({"style": ({"listStyleType": "none"})}),React.createElement("li",({"key": (3)}),React.createElement("a",({"href": "https://www.nhs.uk/conditions/prostate-cancer/treatment/#radical-prostatectomy", "style": ({"textDecoration": "underline"}), "rel": "noopener", "target": "blank"}),sablono.interpreter.interpret((function (){var G__36982 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","mi-text6","sidefx/mi-text6",-445782866),"Radical prostatectomy"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__36982) : ttt.call(null,G__36982));
})()))),React.createElement("li",({"key": (4)}),React.createElement("a",({"href": "https://www.nhs.uk/conditions/prostate-cancer/treatment/#radiotherapy", "style": ({"textDecoration": "underline"}), "rel": "noopener", "target": "blank"}),sablono.interpreter.interpret((function (){var G__36983 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","mi-text7","sidefx/mi-text7",1693220591),"Radiotherapy"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__36983) : ttt.call(null,G__36983));
})())))),(function (){var attrs36975 = (function (){var G__36984 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","mi-text8","sidefx/mi-text8",932614065),"Further advice and support:"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__36984) : ttt.call(null,G__36984));
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"h5",((cljs.core.map_QMARK_(attrs36975))?sablono.interpreter.attributes(attrs36975):null),((cljs.core.map_QMARK_(attrs36975))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs36975)], null)));
})(),React.createElement("ul",({"style": ({"listStyleType": "none"})}),React.createElement("li",({"key": (1)}),React.createElement("a",({"href": "http://www.macmillan.org.uk/", "style": ({"textDecoration": "underline"}), "rel": "noopener", "target": "blank"}),sablono.interpreter.interpret((function (){var G__36985 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","mi-text9","sidefx/mi-text9",483989971),"Macmillan"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__36985) : ttt.call(null,G__36985));
})()))),React.createElement("li",({"key": (2)}),React.createElement("a",({"href": "http://prostatecanceruk.org/", "style": ({"textDecoration": "underline"}), "rel": "noopener", "target": "_blank"}),sablono.interpreter.interpret((function (){var G__36986 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","mi-text10","sidefx/mi-text10",-421827287),"Prostate Cancer UK"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__36986) : ttt.call(null,G__36986));
})()))),React.createElement("li",({"key": (3)}),React.createElement("a",({"href": "https://www.nhs.uk/pages/home.aspx", "style": ({"textDecoration": "underline"}), "rel": "noopener", "target": "_blank"}),sablono.interpreter.interpret((function (){var G__36987 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sidefx","mi-text11","sidefx/mi-text11",1175342129),"NHS Choices"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__36987) : ttt.call(null,G__36987));
})())))));
}),null,"sidefx-more-info");
predict_prostate.results.sidefx.results_in_sidefx = rum.core.build_defc((function (ttt){
return React.createElement("div",({"style": ({"marginTop": "15px"})}),sablono.interpreter.interpret((predict_prostate.results.sidefx.sidefx_discrete.cljs$core$IFn$_invoke$arity$2 ? predict_prostate.results.sidefx.sidefx_discrete.cljs$core$IFn$_invoke$arity$2(true,ttt) : predict_prostate.results.sidefx.sidefx_discrete.call(null,true,ttt))));
}),null,"results-in-sidefx");

//# sourceMappingURL=predict_prostate.results.sidefx.js.map
