goog.provide('predict_prostate.results.printable');
predict_prostate.results.printable.avoid_break = (function predict_prostate$results$printable$avoid_break(var_args){
var args__4824__auto__ = [];
var len__4818__auto___46928 = arguments.length;
var i__4819__auto___46929 = (0);
while(true){
if((i__4819__auto___46929 < len__4818__auto___46928)){
args__4824__auto__.push((arguments[i__4819__auto___46929]));

var G__46930 = (i__4819__auto___46929 + (1));
i__4819__auto___46929 = G__46930;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return predict_prostate.results.printable.avoid_break.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(predict_prostate.results.printable.avoid_break.cljs$core$IFn$_invoke$arity$variadic = (function (content){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"break-inside","break-inside",310021897),"avoid"], null)], null)], null),content);
}));

(predict_prostate.results.printable.avoid_break.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(predict_prostate.results.printable.avoid_break.cljs$lang$applyTo = (function (seq46768){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq46768));
}));

predict_prostate.results.printable.ttt_input_label = (function predict_prostate$results$printable$ttt_input_label(ttt,key){
return predict_prostate.components.util.widget_ttt(ttt,"help",key,predict_prostate.state.run_time.input_label(key));
});
predict_prostate.results.printable.break_before = (function predict_prostate$results$printable$break_before(var_args){
var args__4824__auto__ = [];
var len__4818__auto___46931 = arguments.length;
var i__4819__auto___46932 = (0);
while(true){
if((i__4819__auto___46932 < len__4818__auto___46931)){
args__4824__auto__.push((arguments[i__4819__auto___46932]));

var G__46933 = (i__4819__auto___46932 + (1));
i__4819__auto___46932 = G__46933;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return predict_prostate.results.printable.break_before.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(predict_prostate.results.printable.break_before.cljs$core$IFn$_invoke$arity$variadic = (function (content){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"break-before","break-before",-1036311591),"always",new cljs.core.Keyword(null,"page-break-before","page-break-before",-944104780),"always"], null)], null)], null),content);
}));

(predict_prostate.results.printable.break_before.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(predict_prostate.results.printable.break_before.cljs$lang$applyTo = (function (seq46769){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq46769));
}));

predict_prostate.results.printable.option_range = (function predict_prostate$results$printable$option_range(n){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.str),cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),n)));
});
predict_prostate.results.printable.inputs_in_print = rum.core.lazy_build(rum.core.build_defc,(function (ttt){
return daiquiri.core.create_element("div",{'className':"row"},[daiquiri.core.create_element("div",{'className':"col-sm-8 col-sm-offset-2"},[daiquiri.core.create_element("table",{'style':{'fontSize':"16px"},'className':"table table-bordered table-responsive"},[daiquiri.core.create_element("thead",null,[daiquiri.core.create_element("tr",null,[(function (){var attrs46772 = (function (){var G__46776 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("print","input","print/input",714239080),"Input"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__46776) : ttt.call(null,G__46776));
})();
return daiquiri.core.create_element("th",((cljs.core.map_QMARK_(attrs46772))?daiquiri.interpreter.element_attributes(attrs46772):null),((cljs.core.map_QMARK_(attrs46772))?null:[daiquiri.interpreter.interpret(attrs46772)]));
})(),(function (){var attrs46775 = (function (){var G__46777 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("print","value","print/value",412953628),"Value"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__46777) : ttt.call(null,G__46777));
})();
return daiquiri.core.create_element("th",((cljs.core.map_QMARK_(attrs46775))?daiquiri.interpreter.element_attributes(attrs46775):null),((cljs.core.map_QMARK_(attrs46775))?null:[daiquiri.interpreter.interpret(attrs46775)]));
})()])]),daiquiri.core.create_element("tbody",null,[daiquiri.core.create_element("tr",null,[(function (){var attrs46778 = predict_prostate.results.printable.ttt_input_label(ttt,new cljs.core.Keyword(null,"age","age",-604307804));
return daiquiri.core.create_element("td",((cljs.core.map_QMARK_(attrs46778))?daiquiri.interpreter.element_attributes(attrs46778):null),((cljs.core.map_QMARK_(attrs46778))?null:[daiquiri.interpreter.interpret(attrs46778)]));
})(),(function (){var attrs46779 = rum.core.react(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"age","age",-604307804)));
return daiquiri.core.create_element("td",((cljs.core.map_QMARK_(attrs46779))?daiquiri.interpreter.element_attributes(attrs46779):null),((cljs.core.map_QMARK_(attrs46779))?null:[daiquiri.interpreter.interpret(attrs46779)]));
})()]),daiquiri.core.create_element("tr",null,[(function (){var attrs46780 = predict_prostate.results.printable.ttt_input_label(ttt,new cljs.core.Keyword(null,"psa","psa",-321761459));
return daiquiri.core.create_element("td",((cljs.core.map_QMARK_(attrs46780))?daiquiri.interpreter.element_attributes(attrs46780):null),((cljs.core.map_QMARK_(attrs46780))?null:[daiquiri.interpreter.interpret(attrs46780)]));
})(),(function (){var attrs46781 = rum.core.react(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"psa","psa",-321761459)));
return daiquiri.core.create_element("td",((cljs.core.map_QMARK_(attrs46781))?daiquiri.interpreter.element_attributes(attrs46781):null),((cljs.core.map_QMARK_(attrs46781))?null:[daiquiri.interpreter.interpret(attrs46781)]));
})()]),daiquiri.core.create_element("tr",null,[(function (){var attrs46782 = predict_prostate.results.printable.ttt_input_label(ttt,new cljs.core.Keyword(null,"t-stage","t-stage",-1315750984));
return daiquiri.core.create_element("td",((cljs.core.map_QMARK_(attrs46782))?daiquiri.interpreter.element_attributes(attrs46782):null),((cljs.core.map_QMARK_(attrs46782))?[(cljs.core.truth_((function (){var G__46792 = rum.core.react(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"t-stage","t-stage",-1315750984)));
var fexpr__46791 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(4),null], null), null);
return (fexpr__46791.cljs$core$IFn$_invoke$arity$1 ? fexpr__46791.cljs$core$IFn$_invoke$arity$1(G__46792) : fexpr__46791.call(null,G__46792));
})())?daiquiri.core.create_element("div",{'style':{'color':"#686868",'marginTop':(0)}},[daiquiri.core.create_element("i",{'aria-hidden':"true",'style':{'color':"orange",'paddingRight':(5)},'className':"fa fa-exclamation-triangle"},null),daiquiri.interpreter.interpret((function (){var G__46797 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("patient","lwtstages","patient/lwtstages",1523511410),"The tool is less well tested in higher stages"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__46797) : ttt.call(null,G__46797));
})())]):null)]:[daiquiri.interpreter.interpret(attrs46782),(cljs.core.truth_((function (){var G__46799 = rum.core.react(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"t-stage","t-stage",-1315750984)));
var fexpr__46798 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(4),null], null), null);
return (fexpr__46798.cljs$core$IFn$_invoke$arity$1 ? fexpr__46798.cljs$core$IFn$_invoke$arity$1(G__46799) : fexpr__46798.call(null,G__46799));
})())?daiquiri.core.create_element("div",{'style':{'color':"#686868",'marginTop':(0)}},[daiquiri.core.create_element("i",{'aria-hidden':"true",'style':{'color':"orange",'paddingRight':(5)},'className':"fa fa-exclamation-triangle"},null),daiquiri.interpreter.interpret((function (){var G__46803 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("patient","lwtstages","patient/lwtstages",1523511410),"The tool is less well tested in higher stages"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__46803) : ttt.call(null,G__46803));
})())]):null)]));
})(),(function (){var attrs46789 = (function (){var G__46805 = rum.core.react(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"t-stage","t-stage",-1315750984)));
var fexpr__46804 = predict_prostate.results.printable.option_range((5));
return (fexpr__46804.cljs$core$IFn$_invoke$arity$1 ? fexpr__46804.cljs$core$IFn$_invoke$arity$1(G__46805) : fexpr__46804.call(null,G__46805));
})();
return daiquiri.core.create_element("td",((cljs.core.map_QMARK_(attrs46789))?daiquiri.interpreter.element_attributes(attrs46789):null),((cljs.core.map_QMARK_(attrs46789))?null:[daiquiri.interpreter.interpret(attrs46789)]));
})()]),daiquiri.core.create_element("tr",null,[(function (){var attrs46806 = predict_prostate.results.printable.ttt_input_label(ttt,new cljs.core.Keyword(null,"h-admissions","h-admissions",-1503094844));
return daiquiri.core.create_element("td",((cljs.core.map_QMARK_(attrs46806))?daiquiri.interpreter.element_attributes(attrs46806):null),((cljs.core.map_QMARK_(attrs46806))?null:[daiquiri.interpreter.interpret(attrs46806)]));
})(),(function (){var attrs46811 = (function (){var G__46813 = rum.core.react(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"h-admissions","h-admissions",-1503094844)));
var fexpr__46812 = new cljs.core.PersistentArrayMap(null, 2, [(0),"No",(1),"Yes"], null);
return (fexpr__46812.cljs$core$IFn$_invoke$arity$1 ? fexpr__46812.cljs$core$IFn$_invoke$arity$1(G__46813) : fexpr__46812.call(null,G__46813));
})();
return daiquiri.core.create_element("td",((cljs.core.map_QMARK_(attrs46811))?daiquiri.interpreter.element_attributes(attrs46811):null),((cljs.core.map_QMARK_(attrs46811))?null:[daiquiri.interpreter.interpret(attrs46811)]));
})()]),(((rum.core.react(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"h-admissions","h-admissions",-1503094844))) > (0)))?daiquiri.core.create_element("tr",null,[(function (){var attrs46814 = predict_prostate.results.printable.ttt_input_label(ttt,new cljs.core.Keyword(null,"charlson-comorbidity","charlson-comorbidity",-633596907));
return daiquiri.core.create_element("td",((cljs.core.map_QMARK_(attrs46814))?daiquiri.interpreter.element_attributes(attrs46814):null),((cljs.core.map_QMARK_(attrs46814))?null:[daiquiri.interpreter.interpret(attrs46814)]));
})(),(function (){var attrs46819 = (function (){var G__46821 = rum.core.react(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"charlson-comorbidity","charlson-comorbidity",-633596907)));
var fexpr__46820 = new cljs.core.PersistentArrayMap(null, 2, [(0),"No",(1),"Yes"], null);
return (fexpr__46820.cljs$core$IFn$_invoke$arity$1 ? fexpr__46820.cljs$core$IFn$_invoke$arity$1(G__46821) : fexpr__46820.call(null,G__46821));
})();
return daiquiri.core.create_element("td",((cljs.core.map_QMARK_(attrs46819))?daiquiri.interpreter.element_attributes(attrs46819):null),((cljs.core.map_QMARK_(attrs46819))?null:[daiquiri.interpreter.interpret(attrs46819)]));
})()]):null),daiquiri.core.create_element("tr",null,[(function (){var attrs46822 = predict_prostate.results.printable.ttt_input_label(ttt,new cljs.core.Keyword(null,"brca","brca",-1943532098));
return daiquiri.core.create_element("td",((cljs.core.map_QMARK_(attrs46822))?daiquiri.interpreter.element_attributes(attrs46822):null),((cljs.core.map_QMARK_(attrs46822))?null:[daiquiri.interpreter.interpret(attrs46822)]));
})(),(function (){var attrs46827 = (function (){var G__46829 = rum.core.react(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"brca","brca",-1943532098)));
var fexpr__46828 = new cljs.core.PersistentArrayMap(null, 2, [(0),"No",(1),"Yes"], null);
return (fexpr__46828.cljs$core$IFn$_invoke$arity$1 ? fexpr__46828.cljs$core$IFn$_invoke$arity$1(G__46829) : fexpr__46828.call(null,G__46829));
})();
return daiquiri.core.create_element("td",((cljs.core.map_QMARK_(attrs46827))?daiquiri.interpreter.element_attributes(attrs46827):null),((cljs.core.map_QMARK_(attrs46827))?null:[daiquiri.interpreter.interpret(attrs46827)]));
})()]),daiquiri.core.create_element("tr",null,[(function (){var attrs46830 = predict_prostate.results.printable.ttt_input_label(ttt,new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518));
return daiquiri.core.create_element("td",((cljs.core.map_QMARK_(attrs46830))?daiquiri.interpreter.element_attributes(attrs46830):null),((cljs.core.map_QMARK_(attrs46830))?[(cljs.core.truth_((function (){var G__46837 = rum.core.react(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518)));
var fexpr__46836 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(4),null,(5),null], null), null);
return (fexpr__46836.cljs$core$IFn$_invoke$arity$1 ? fexpr__46836.cljs$core$IFn$_invoke$arity$1(G__46837) : fexpr__46836.call(null,G__46837));
})())?daiquiri.core.create_element("div",{'style':{'color':"#686868",'marginTop':(0)}},[daiquiri.core.create_element("i",{'aria-hidden':"true",'style':{'color':"orange",'paddingRight':(5)},'className':"fa fa-exclamation-triangle"},null),daiquiri.interpreter.interpret((function (){var G__46841 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tumour","lwt","tumour/lwt",-1253032781),"The tool is less well tested for higher scores"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__46841) : ttt.call(null,G__46841));
})())]):null)]:[daiquiri.interpreter.interpret(attrs46830),(cljs.core.truth_((function (){var G__46843 = rum.core.react(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518)));
var fexpr__46842 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(4),null,(5),null], null), null);
return (fexpr__46842.cljs$core$IFn$_invoke$arity$1 ? fexpr__46842.cljs$core$IFn$_invoke$arity$1(G__46843) : fexpr__46842.call(null,G__46843));
})())?daiquiri.core.create_element("div",{'style':{'color':"#686868",'marginTop':(0)}},[daiquiri.core.create_element("i",{'aria-hidden':"true",'style':{'color':"orange",'paddingRight':(5)},'className':"fa fa-exclamation-triangle"},null),daiquiri.interpreter.interpret((function (){var G__46847 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tumour","lwt","tumour/lwt",-1253032781),"The tool is less well tested for higher scores"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__46847) : ttt.call(null,G__46847));
})())]):null)]));
})(),(function (){var attrs46835 = (function (){var G__46849 = rum.core.react(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518)));
var fexpr__46848 = predict_prostate.results.printable.option_range((6));
return (fexpr__46848.cljs$core$IFn$_invoke$arity$1 ? fexpr__46848.cljs$core$IFn$_invoke$arity$1(G__46849) : fexpr__46848.call(null,G__46849));
})();
return daiquiri.core.create_element("td",((cljs.core.map_QMARK_(attrs46835))?daiquiri.interpreter.element_attributes(attrs46835):null),((cljs.core.map_QMARK_(attrs46835))?null:[daiquiri.interpreter.interpret(attrs46835)]));
})()]),daiquiri.core.create_element("tr",null,[(function (){var attrs46850 = predict_prostate.results.printable.ttt_input_label(ttt,new cljs.core.Keyword(null,"gleason","gleason",-2044470526));
return daiquiri.core.create_element("td",((cljs.core.map_QMARK_(attrs46850))?daiquiri.interpreter.element_attributes(attrs46850):null),((cljs.core.map_QMARK_(attrs46850))?[(cljs.core.truth_((function (){var G__46857 = rum.core.react(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518)));
var fexpr__46856 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(4),null,(5),null], null), null);
return (fexpr__46856.cljs$core$IFn$_invoke$arity$1 ? fexpr__46856.cljs$core$IFn$_invoke$arity$1(G__46857) : fexpr__46856.call(null,G__46857));
})())?daiquiri.core.create_element("div",{'style':{'color':"#686868",'marginTop':(0)}},[daiquiri.core.create_element("i",{'aria-hidden':"true",'style':{'color':"orange",'paddingRight':(5)},'className':"fa fa-exclamation-triangle"},null),daiquiri.interpreter.interpret((function (){var G__46861 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tumour","lwt","tumour/lwt",-1253032781),"The tool is less well tested for higher scores"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__46861) : ttt.call(null,G__46861));
})())]):null)]:[daiquiri.interpreter.interpret(attrs46850),(cljs.core.truth_((function (){var G__46863 = rum.core.react(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518)));
var fexpr__46862 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(4),null,(5),null], null), null);
return (fexpr__46862.cljs$core$IFn$_invoke$arity$1 ? fexpr__46862.cljs$core$IFn$_invoke$arity$1(G__46863) : fexpr__46862.call(null,G__46863));
})())?daiquiri.core.create_element("div",{'style':{'color':"#686868",'marginTop':(0)}},[daiquiri.core.create_element("i",{'aria-hidden':"true",'style':{'color':"orange",'paddingRight':(5)},'className':"fa fa-exclamation-triangle"},null),daiquiri.interpreter.interpret((function (){var G__46867 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tumour","lwt","tumour/lwt",-1253032781),"The tool is less well tested for higher scores"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__46867) : ttt.call(null,G__46867));
})())]):null)]));
})(),(function (){var attrs46855 = (function (){var G__46869 = rum.core.react(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526)));
var fexpr__46868 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"3+3"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"3+4"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"4+3"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),"8"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),"9 or 10"], null)], null));
return (fexpr__46868.cljs$core$IFn$_invoke$arity$1 ? fexpr__46868.cljs$core$IFn$_invoke$arity$1(G__46869) : fexpr__46868.call(null,G__46869));
})();
return daiquiri.core.create_element("td",((cljs.core.map_QMARK_(attrs46855))?daiquiri.interpreter.element_attributes(attrs46855):null),((cljs.core.map_QMARK_(attrs46855))?null:[daiquiri.interpreter.interpret(attrs46855)]));
})()]),daiquiri.core.create_element("tr",null,[(function (){var attrs46870 = predict_prostate.results.printable.ttt_input_label(ttt,new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666));
return daiquiri.core.create_element("td",((cljs.core.map_QMARK_(attrs46870))?daiquiri.interpreter.element_attributes(attrs46870):null),((cljs.core.map_QMARK_(attrs46870))?null:[daiquiri.interpreter.interpret(attrs46870)]));
})(),(function (){var attrs46871 = rum.core.react(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666)));
return daiquiri.core.create_element("td",((cljs.core.map_QMARK_(attrs46871))?daiquiri.interpreter.element_attributes(attrs46871):null),((cljs.core.map_QMARK_(attrs46871))?null:[daiquiri.interpreter.interpret(attrs46871)]));
})()]),daiquiri.core.create_element("tr",null,[(function (){var attrs46872 = predict_prostate.results.printable.ttt_input_label(ttt,new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520));
return daiquiri.core.create_element("td",((cljs.core.map_QMARK_(attrs46872))?daiquiri.interpreter.element_attributes(attrs46872):null),((cljs.core.map_QMARK_(attrs46872))?null:[daiquiri.interpreter.interpret(attrs46872)]));
})(),(function (){var attrs46873 = rum.core.react(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520)));
return daiquiri.core.create_element("td",((cljs.core.map_QMARK_(attrs46873))?daiquiri.interpreter.element_attributes(attrs46873):null),((cljs.core.map_QMARK_(attrs46873))?null:[daiquiri.interpreter.interpret(attrs46873)]));
})()])])])])]);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"predict-prostate.results.printable/inputs-in-print");
predict_prostate.results.printable.treatment_note = rum.core.lazy_build(rum.core.build_defc,(function (title,content){
var attrs46874 = predict_prostate.results.printable.avoid_break.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),title], null),content], 0));
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs46874))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["col-xs-12"], null)], null),attrs46874], 0))):{'className':"col-xs-12"}),((cljs.core.map_QMARK_(attrs46874))?null:[daiquiri.interpreter.interpret(attrs46874)]));
}),null,"predict-prostate.results.printable/treatment-note");
predict_prostate.results.printable.treatments_in_print = rum.core.lazy_build(rum.core.build_defc,(function (ttt){
var horm = rum.core.react(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"horm","horm",-68905121)));
var horm_label = predict_prostate.state.run_time.input_label(new cljs.core.Keyword(null,"horm","horm",-68905121));
var chemo_label = predict_prostate.state.run_time.input_label(new cljs.core.Keyword(null,"chemo","chemo",-1212386012));
var tra_label = predict_prostate.state.run_time.input_label(new cljs.core.Keyword(null,"tra","tra",-92028888));
var bis_label = predict_prostate.state.run_time.input_label(new cljs.core.Keyword(null,"bis","bis",-1311072700));
var chemo = rum.core.react(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"chemo","chemo",-1212386012)));
var tra = rum.core.react(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"tra","tra",-92028888)));
var bis = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"yes","yes",182838819),rum.core.react(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"bis","bis",-1311072700))));
if(cljs.core.not((function (){var or__4212__auto__ = horm;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
var or__4212__auto____$1 = chemo;
if(cljs.core.truth_(or__4212__auto____$1)){
return or__4212__auto____$1;
} else {
var or__4212__auto____$2 = tra;
if(cljs.core.truth_(or__4212__auto____$2)){
return or__4212__auto____$2;
} else {
return bis;
}
}
}
})())){
return daiquiri.core.create_element("h2",null,["No Treatments Selected after Surgery"]);
} else {
return daiquiri.core.create_element("div",{'className':"row"},[daiquiri.core.create_element("div",{'className':"col-sm-12"},[daiquiri.core.create_element("h2",null,["Treatments after Surgery"]),daiquiri.core.create_element("section",{'className':"print-bigger"},["Selected treatments after surgery are:",(cljs.core.truth_(horm)?(function (){var attrs46880 = horm_label;
return daiquiri.core.create_element("li",((cljs.core.map_QMARK_(attrs46880))?daiquiri.interpreter.element_attributes(attrs46880):null),((cljs.core.map_QMARK_(attrs46880))?null:[daiquiri.interpreter.interpret(attrs46880)]));
})():null),(cljs.core.truth_(chemo)?(function (){var attrs46881 = chemo_label;
return daiquiri.core.create_element("li",((cljs.core.map_QMARK_(attrs46881))?daiquiri.interpreter.element_attributes(attrs46881):null),((cljs.core.map_QMARK_(attrs46881))?[" (",daiquiri.interpreter.interpret((function (){var G__46887 = rum.core.react(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"chemo","chemo",-1212386012)));
var fexpr__46886 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"3rd","3rd",-1568627554),"3rd generation",new cljs.core.Keyword(null,"2nd","2nd",1952531196),"2nd generation",new cljs.core.Keyword(null,"none","none",1333468478),"None"], null);
return (fexpr__46886.cljs$core$IFn$_invoke$arity$1 ? fexpr__46886.cljs$core$IFn$_invoke$arity$1(G__46887) : fexpr__46886.call(null,G__46887));
})()),")"]:[daiquiri.interpreter.interpret(attrs46881)," (",daiquiri.interpreter.interpret((function (){var G__46891 = rum.core.react(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"chemo","chemo",-1212386012)));
var fexpr__46890 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"3rd","3rd",-1568627554),"3rd generation",new cljs.core.Keyword(null,"2nd","2nd",1952531196),"2nd generation",new cljs.core.Keyword(null,"none","none",1333468478),"None"], null);
return (fexpr__46890.cljs$core$IFn$_invoke$arity$1 ? fexpr__46890.cljs$core$IFn$_invoke$arity$1(G__46891) : fexpr__46890.call(null,G__46891));
})()),")"]));
})():null),(cljs.core.truth_(tra)?(function (){var attrs46882 = tra_label;
return daiquiri.core.create_element("li",((cljs.core.map_QMARK_(attrs46882))?daiquiri.interpreter.element_attributes(attrs46882):null),((cljs.core.map_QMARK_(attrs46882))?null:[daiquiri.interpreter.interpret(attrs46882)]));
})():null),((bis)?(function (){var attrs46883 = bis_label;
return daiquiri.core.create_element("li",((cljs.core.map_QMARK_(attrs46883))?daiquiri.interpreter.element_attributes(attrs46883):null),((cljs.core.map_QMARK_(attrs46883))?null:[daiquiri.interpreter.interpret(attrs46883)]));
})():null)]),(function (){var attrs46879 = (cljs.core.truth_(horm)?predict_prostate.results.printable.treatment_note(horm_label,(cljs.core.truth_(horm)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.rest(predict_prostate.content_reader.section.cljs$core$IFn$_invoke$arity$2(ttt,"hormone-therapy"))], null):null)):null);
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs46879))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["row","print-smaller"], null)], null),attrs46879], 0))):{'className':"row print-smaller"}),((cljs.core.map_QMARK_(attrs46879))?[(cljs.core.truth_(chemo)?predict_prostate.results.printable.treatment_note(chemo_label,(cljs.core.truth_(chemo)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.rest(predict_prostate.content_reader.section.cljs$core$IFn$_invoke$arity$2(ttt,"chemotherapy"))], null):null)):null),(cljs.core.truth_(tra)?predict_prostate.results.printable.treatment_note(tra_label,(cljs.core.truth_(tra)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.rest(predict_prostate.content_reader.section.cljs$core$IFn$_invoke$arity$2(ttt,"trastuzumab"))], null):null)):null),((bis)?predict_prostate.results.printable.treatment_note(bis_label,((bis)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.rest(predict_prostate.content_reader.section.cljs$core$IFn$_invoke$arity$2(ttt,"bisphosphonates"))], null):null)):null)]:[daiquiri.interpreter.interpret(attrs46879),(cljs.core.truth_(chemo)?predict_prostate.results.printable.treatment_note(chemo_label,(cljs.core.truth_(chemo)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.rest(predict_prostate.content_reader.section.cljs$core$IFn$_invoke$arity$2(ttt,"chemotherapy"))], null):null)):null),(cljs.core.truth_(tra)?predict_prostate.results.printable.treatment_note(tra_label,(cljs.core.truth_(tra)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.rest(predict_prostate.content_reader.section.cljs$core$IFn$_invoke$arity$2(ttt,"trastuzumab"))], null):null)):null),((bis)?predict_prostate.results.printable.treatment_note(bis_label,((bis)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.rest(predict_prostate.content_reader.section.cljs$core$IFn$_invoke$arity$2(ttt,"bisphosphonates"))], null):null)):null)]));
})()])]);
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"predict-prostate.results.printable/treatments-in-print");
predict_prostate.results.printable.results_in_print = rum.core.lazy_build(rum.core.build_defc,(function (ttt){
return daiquiri.core.create_element("div",{'className':"row"},[(function (){var attrs46894 = predict_prostate.results.printable.avoid_break.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),(function (){var G__46895 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("print","inputs","print/inputs",1039888383),"Inputs"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__46895) : ttt.call(null,G__46895));
})()], null),predict_prostate.results.printable.inputs_in_print(ttt)], 0));
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs46894))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["col-sm-12"], null)], null),attrs46894], 0))):{'className':"col-sm-12"}),((cljs.core.map_QMARK_(attrs46894))?[daiquiri.interpreter.interpret(predict_prostate.results.printable.break_before.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([predict_prostate.results.printable.avoid_break.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),(function (){var G__46897 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("print","surv-curve","print/surv-curve",-1081795857),"Survival curve"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__46897) : ttt.call(null,G__46897));
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"100%",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"0%"], null)], null),predict_prostate.results.curves.results_in_curves(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"printable","printable",-928999004),true,new cljs.core.Keyword(null,"ttt","ttt",1858561240),ttt], null))], null)], 0))], 0))),daiquiri.interpreter.interpret(predict_prostate.results.printable.break_before.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([predict_prostate.results.printable.avoid_break.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),(function (){var G__46900 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("print","surv-table-1","print/surv-table-1",472241572),"Survival table"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__46900) : ttt.call(null,G__46900));
})()," - ",rum.core.react(predict_prostate.state.run_time.year_selected())," ",(function (){var G__46901 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("print","surv-table-2","print/surv-table-2",-551388149),"years after diagnosis."], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__46901) : ttt.call(null,G__46901));
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"60%",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"0%"], null)], null),predict_prostate.results.table.results_in_table(ttt)], null)], 0))], 0))),daiquiri.interpreter.interpret(predict_prostate.results.printable.break_before.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([predict_prostate.results.printable.avoid_break.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),(function (){var G__46903 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("print","surv-chart","print/surv-chart",-469806984),"Survival chart"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__46903) : ttt.call(null,G__46903));
})()], null),predict_prostate.results.charts.results_in_charts(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"printable","printable",-928999004),true,new cljs.core.Keyword(null,"ttt","ttt",1858561240),ttt], null))], 0))], 0))),daiquiri.interpreter.interpret(predict_prostate.results.printable.break_before.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([predict_prostate.results.printable.avoid_break.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),(function (){var G__46906 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("print","icarray-1","print/icarray-1",-2007539192),"Icon array showing"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__46906) : ttt.call(null,G__46906));
})()," ",rum.core.react(predict_prostate.state.run_time.year_selected())," ",(function (){var G__46907 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("print","icarray-2","print/icarray-2",-551489289),"year outcomes for 100 men"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__46907) : ttt.call(null,G__46907));
})()], null),predict_prostate.results.icons.results_in_icons_STAR_(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ttt","ttt",1858561240),ttt,new cljs.core.Keyword(null,"printable","printable",-928999004),true], null))], 0))], 0))),daiquiri.interpreter.interpret(predict_prostate.results.printable.break_before.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),(function (){var G__46909 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("print","sum-title","print/sum-title",427959026),"In Summary"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__46909) : ttt.call(null,G__46909));
})()], null),predict_prostate.results.text.results_in_text(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"printable","printable",-928999004),true,new cljs.core.Keyword(null,"ttt","ttt",1858561240),ttt], null))], 0))),daiquiri.interpreter.interpret(predict_prostate.results.printable.break_before.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),(function (){var G__46911 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("print","potharm-title","print/potharm-title",-1176889073),"Potential Harms of treatments"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__46911) : ttt.call(null,G__46911));
})()], null),predict_prostate.results.sidefx.results_in_sidefx(ttt)], 0))),predict_prostate.layout.header.footer()]:[daiquiri.interpreter.interpret(attrs46894),daiquiri.interpreter.interpret(predict_prostate.results.printable.break_before.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([predict_prostate.results.printable.avoid_break.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),(function (){var G__46913 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("print","surv-curve","print/surv-curve",-1081795857),"Survival curve"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__46913) : ttt.call(null,G__46913));
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"100%",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"0%"], null)], null),predict_prostate.results.curves.results_in_curves(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"printable","printable",-928999004),true,new cljs.core.Keyword(null,"ttt","ttt",1858561240),ttt], null))], null)], 0))], 0))),daiquiri.interpreter.interpret(predict_prostate.results.printable.break_before.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([predict_prostate.results.printable.avoid_break.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),(function (){var G__46916 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("print","surv-table-1","print/surv-table-1",472241572),"Survival table"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__46916) : ttt.call(null,G__46916));
})()," - ",rum.core.react(predict_prostate.state.run_time.year_selected())," ",(function (){var G__46917 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("print","surv-table-2","print/surv-table-2",-551388149),"years after diagnosis."], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__46917) : ttt.call(null,G__46917));
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"60%",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"0%"], null)], null),predict_prostate.results.table.results_in_table(ttt)], null)], 0))], 0))),daiquiri.interpreter.interpret(predict_prostate.results.printable.break_before.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([predict_prostate.results.printable.avoid_break.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),(function (){var G__46919 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("print","surv-chart","print/surv-chart",-469806984),"Survival chart"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__46919) : ttt.call(null,G__46919));
})()], null),predict_prostate.results.charts.results_in_charts(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"printable","printable",-928999004),true,new cljs.core.Keyword(null,"ttt","ttt",1858561240),ttt], null))], 0))], 0))),daiquiri.interpreter.interpret(predict_prostate.results.printable.break_before.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([predict_prostate.results.printable.avoid_break.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),(function (){var G__46922 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("print","icarray-1","print/icarray-1",-2007539192),"Icon array showing"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__46922) : ttt.call(null,G__46922));
})()," ",rum.core.react(predict_prostate.state.run_time.year_selected())," ",(function (){var G__46923 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("print","icarray-2","print/icarray-2",-551489289),"year outcomes for 100 men"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__46923) : ttt.call(null,G__46923));
})()], null),predict_prostate.results.icons.results_in_icons_STAR_(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ttt","ttt",1858561240),ttt,new cljs.core.Keyword(null,"printable","printable",-928999004),true], null))], 0))], 0))),daiquiri.interpreter.interpret(predict_prostate.results.printable.break_before.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),(function (){var G__46925 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("print","sum-title","print/sum-title",427959026),"In Summary"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__46925) : ttt.call(null,G__46925));
})()], null),predict_prostate.results.text.results_in_text(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"printable","printable",-928999004),true,new cljs.core.Keyword(null,"ttt","ttt",1858561240),ttt], null))], 0))),daiquiri.interpreter.interpret(predict_prostate.results.printable.break_before.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),(function (){var G__46927 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("print","potharm-title","print/potharm-title",-1176889073),"Potential Harms of treatments"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__46927) : ttt.call(null,G__46927));
})()], null),predict_prostate.results.sidefx.results_in_sidefx(ttt)], 0))),predict_prostate.layout.header.footer()]));
})()]);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,predict_prostate.mixins.set_default(new cljs.core.Keyword(null,"result-year","result-year",1413238532))], null),"predict-prostate.results.printable/results-in-print");

//# sourceMappingURL=predict_prostate.results.printable.js.map
