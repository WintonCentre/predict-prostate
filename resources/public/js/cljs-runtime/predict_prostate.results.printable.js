goog.provide('predict_prostate.results.printable');
predict_prostate.results.printable.avoid_break = (function predict_prostate$results$printable$avoid_break(var_args){
var args__4824__auto__ = [];
var len__4818__auto___56649 = arguments.length;
var i__4819__auto___56650 = (0);
while(true){
if((i__4819__auto___56650 < len__4818__auto___56649)){
args__4824__auto__.push((arguments[i__4819__auto___56650]));

var G__56651 = (i__4819__auto___56650 + (1));
i__4819__auto___56650 = G__56651;
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
(predict_prostate.results.printable.avoid_break.cljs$lang$applyTo = (function (seq56493){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56493));
}));

predict_prostate.results.printable.ttt_input_label = (function predict_prostate$results$printable$ttt_input_label(ttt,key){
return predict_prostate.components.util.widget_ttt(ttt,"help",key,predict_prostate.state.run_time.input_label(key));
});
predict_prostate.results.printable.break_before = (function predict_prostate$results$printable$break_before(var_args){
var args__4824__auto__ = [];
var len__4818__auto___56652 = arguments.length;
var i__4819__auto___56653 = (0);
while(true){
if((i__4819__auto___56653 < len__4818__auto___56652)){
args__4824__auto__.push((arguments[i__4819__auto___56653]));

var G__56654 = (i__4819__auto___56653 + (1));
i__4819__auto___56653 = G__56654;
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
(predict_prostate.results.printable.break_before.cljs$lang$applyTo = (function (seq56494){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56494));
}));

predict_prostate.results.printable.option_range = (function predict_prostate$results$printable$option_range(n){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.str),cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),n)));
});
predict_prostate.results.printable.inputs_in_print = rum.core.lazy_build(rum.core.build_defc,(function (ttt){
return daiquiri.core.create_element("div",{'className':"row"},[daiquiri.core.create_element("div",{'className':"col-sm-8 col-sm-offset-2"},[daiquiri.core.create_element("table",{'style':{'fontSize':"16px"},'className':"table table-bordered table-responsive"},[daiquiri.core.create_element("thead",null,[daiquiri.core.create_element("tr",null,[(function (){var attrs56497 = (function (){var G__56501 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("print","input","print/input",714239080),"Input"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__56501) : ttt.call(null,G__56501));
})();
return daiquiri.core.create_element("th",((cljs.core.map_QMARK_(attrs56497))?daiquiri.interpreter.element_attributes(attrs56497):null),((cljs.core.map_QMARK_(attrs56497))?null:[daiquiri.interpreter.interpret(attrs56497)]));
})(),(function (){var attrs56500 = (function (){var G__56502 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("print","value","print/value",412953628),"Value"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__56502) : ttt.call(null,G__56502));
})();
return daiquiri.core.create_element("th",((cljs.core.map_QMARK_(attrs56500))?daiquiri.interpreter.element_attributes(attrs56500):null),((cljs.core.map_QMARK_(attrs56500))?null:[daiquiri.interpreter.interpret(attrs56500)]));
})()])]),daiquiri.core.create_element("tbody",null,[daiquiri.core.create_element("tr",null,[(function (){var attrs56503 = predict_prostate.results.printable.ttt_input_label(ttt,new cljs.core.Keyword(null,"age","age",-604307804));
return daiquiri.core.create_element("td",((cljs.core.map_QMARK_(attrs56503))?daiquiri.interpreter.element_attributes(attrs56503):null),((cljs.core.map_QMARK_(attrs56503))?null:[daiquiri.interpreter.interpret(attrs56503)]));
})(),(function (){var attrs56504 = rum.core.react(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"age","age",-604307804)));
return daiquiri.core.create_element("td",((cljs.core.map_QMARK_(attrs56504))?daiquiri.interpreter.element_attributes(attrs56504):null),((cljs.core.map_QMARK_(attrs56504))?null:[daiquiri.interpreter.interpret(attrs56504)]));
})()]),daiquiri.core.create_element("tr",null,[(function (){var attrs56505 = predict_prostate.results.printable.ttt_input_label(ttt,new cljs.core.Keyword(null,"psa","psa",-321761459));
return daiquiri.core.create_element("td",((cljs.core.map_QMARK_(attrs56505))?daiquiri.interpreter.element_attributes(attrs56505):null),((cljs.core.map_QMARK_(attrs56505))?null:[daiquiri.interpreter.interpret(attrs56505)]));
})(),(function (){var attrs56506 = rum.core.react(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"psa","psa",-321761459)));
return daiquiri.core.create_element("td",((cljs.core.map_QMARK_(attrs56506))?daiquiri.interpreter.element_attributes(attrs56506):null),((cljs.core.map_QMARK_(attrs56506))?null:[daiquiri.interpreter.interpret(attrs56506)]));
})()]),daiquiri.core.create_element("tr",null,[(function (){var attrs56507 = predict_prostate.results.printable.ttt_input_label(ttt,new cljs.core.Keyword(null,"t-stage","t-stage",-1315750984));
return daiquiri.core.create_element("td",((cljs.core.map_QMARK_(attrs56507))?daiquiri.interpreter.element_attributes(attrs56507):null),((cljs.core.map_QMARK_(attrs56507))?[(cljs.core.truth_((function (){var G__56514 = rum.core.react(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"t-stage","t-stage",-1315750984)));
var fexpr__56513 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(4),null], null), null);
return (fexpr__56513.cljs$core$IFn$_invoke$arity$1 ? fexpr__56513.cljs$core$IFn$_invoke$arity$1(G__56514) : fexpr__56513.call(null,G__56514));
})())?daiquiri.core.create_element("div",{'style':{'color':"#686868",'marginTop':(0)}},[daiquiri.core.create_element("i",{'aria-hidden':"true",'style':{'color':"orange",'paddingRight':(5)},'className':"fa fa-exclamation-triangle"},null),daiquiri.interpreter.interpret((function (){var G__56518 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("patient","lwtstages","patient/lwtstages",1523511410),"The tool is less well tested in higher stages"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__56518) : ttt.call(null,G__56518));
})())]):null)]:[daiquiri.interpreter.interpret(attrs56507),(cljs.core.truth_((function (){var G__56520 = rum.core.react(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"t-stage","t-stage",-1315750984)));
var fexpr__56519 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(4),null], null), null);
return (fexpr__56519.cljs$core$IFn$_invoke$arity$1 ? fexpr__56519.cljs$core$IFn$_invoke$arity$1(G__56520) : fexpr__56519.call(null,G__56520));
})())?daiquiri.core.create_element("div",{'style':{'color':"#686868",'marginTop':(0)}},[daiquiri.core.create_element("i",{'aria-hidden':"true",'style':{'color':"orange",'paddingRight':(5)},'className':"fa fa-exclamation-triangle"},null),daiquiri.interpreter.interpret((function (){var G__56524 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("patient","lwtstages","patient/lwtstages",1523511410),"The tool is less well tested in higher stages"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__56524) : ttt.call(null,G__56524));
})())]):null)]));
})(),(function (){var attrs56512 = (function (){var G__56526 = rum.core.react(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"t-stage","t-stage",-1315750984)));
var fexpr__56525 = predict_prostate.results.printable.option_range((5));
return (fexpr__56525.cljs$core$IFn$_invoke$arity$1 ? fexpr__56525.cljs$core$IFn$_invoke$arity$1(G__56526) : fexpr__56525.call(null,G__56526));
})();
return daiquiri.core.create_element("td",((cljs.core.map_QMARK_(attrs56512))?daiquiri.interpreter.element_attributes(attrs56512):null),((cljs.core.map_QMARK_(attrs56512))?null:[daiquiri.interpreter.interpret(attrs56512)]));
})()]),daiquiri.core.create_element("tr",null,[(function (){var attrs56527 = predict_prostate.results.printable.ttt_input_label(ttt,new cljs.core.Keyword(null,"h-admissions","h-admissions",-1503094844));
return daiquiri.core.create_element("td",((cljs.core.map_QMARK_(attrs56527))?daiquiri.interpreter.element_attributes(attrs56527):null),((cljs.core.map_QMARK_(attrs56527))?null:[daiquiri.interpreter.interpret(attrs56527)]));
})(),(function (){var attrs56532 = (function (){var G__56534 = rum.core.react(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"h-admissions","h-admissions",-1503094844)));
var fexpr__56533 = new cljs.core.PersistentArrayMap(null, 2, [(0),"No",(1),"Yes"], null);
return (fexpr__56533.cljs$core$IFn$_invoke$arity$1 ? fexpr__56533.cljs$core$IFn$_invoke$arity$1(G__56534) : fexpr__56533.call(null,G__56534));
})();
return daiquiri.core.create_element("td",((cljs.core.map_QMARK_(attrs56532))?daiquiri.interpreter.element_attributes(attrs56532):null),((cljs.core.map_QMARK_(attrs56532))?null:[daiquiri.interpreter.interpret(attrs56532)]));
})()]),(((rum.core.react(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"h-admissions","h-admissions",-1503094844))) > (0)))?daiquiri.core.create_element("tr",null,[(function (){var attrs56535 = predict_prostate.results.printable.ttt_input_label(ttt,new cljs.core.Keyword(null,"charlson-comorbidity","charlson-comorbidity",-633596907));
return daiquiri.core.create_element("td",((cljs.core.map_QMARK_(attrs56535))?daiquiri.interpreter.element_attributes(attrs56535):null),((cljs.core.map_QMARK_(attrs56535))?null:[daiquiri.interpreter.interpret(attrs56535)]));
})(),(function (){var attrs56540 = (function (){var G__56542 = rum.core.react(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"charlson-comorbidity","charlson-comorbidity",-633596907)));
var fexpr__56541 = new cljs.core.PersistentArrayMap(null, 2, [(0),"No",(1),"Yes"], null);
return (fexpr__56541.cljs$core$IFn$_invoke$arity$1 ? fexpr__56541.cljs$core$IFn$_invoke$arity$1(G__56542) : fexpr__56541.call(null,G__56542));
})();
return daiquiri.core.create_element("td",((cljs.core.map_QMARK_(attrs56540))?daiquiri.interpreter.element_attributes(attrs56540):null),((cljs.core.map_QMARK_(attrs56540))?null:[daiquiri.interpreter.interpret(attrs56540)]));
})()]):null),daiquiri.core.create_element("tr",null,[(function (){var attrs56543 = predict_prostate.results.printable.ttt_input_label(ttt,new cljs.core.Keyword(null,"brca","brca",-1943532098));
return daiquiri.core.create_element("td",((cljs.core.map_QMARK_(attrs56543))?daiquiri.interpreter.element_attributes(attrs56543):null),((cljs.core.map_QMARK_(attrs56543))?null:[daiquiri.interpreter.interpret(attrs56543)]));
})(),(function (){var attrs56548 = (function (){var G__56550 = rum.core.react(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"brca","brca",-1943532098)));
var fexpr__56549 = new cljs.core.PersistentArrayMap(null, 2, [(0),"No",(1),"Yes"], null);
return (fexpr__56549.cljs$core$IFn$_invoke$arity$1 ? fexpr__56549.cljs$core$IFn$_invoke$arity$1(G__56550) : fexpr__56549.call(null,G__56550));
})();
return daiquiri.core.create_element("td",((cljs.core.map_QMARK_(attrs56548))?daiquiri.interpreter.element_attributes(attrs56548):null),((cljs.core.map_QMARK_(attrs56548))?null:[daiquiri.interpreter.interpret(attrs56548)]));
})()]),daiquiri.core.create_element("tr",null,[(function (){var attrs56551 = predict_prostate.results.printable.ttt_input_label(ttt,new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518));
return daiquiri.core.create_element("td",((cljs.core.map_QMARK_(attrs56551))?daiquiri.interpreter.element_attributes(attrs56551):null),((cljs.core.map_QMARK_(attrs56551))?[(cljs.core.truth_((function (){var G__56558 = rum.core.react(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518)));
var fexpr__56557 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(4),null,(5),null], null), null);
return (fexpr__56557.cljs$core$IFn$_invoke$arity$1 ? fexpr__56557.cljs$core$IFn$_invoke$arity$1(G__56558) : fexpr__56557.call(null,G__56558));
})())?daiquiri.core.create_element("div",{'style':{'color':"#686868",'marginTop':(0)}},[daiquiri.core.create_element("i",{'aria-hidden':"true",'style':{'color':"orange",'paddingRight':(5)},'className':"fa fa-exclamation-triangle"},null),daiquiri.interpreter.interpret((function (){var G__56562 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tumour","lwt","tumour/lwt",-1253032781),"The tool is less well tested for higher scores"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__56562) : ttt.call(null,G__56562));
})())]):null)]:[daiquiri.interpreter.interpret(attrs56551),(cljs.core.truth_((function (){var G__56564 = rum.core.react(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518)));
var fexpr__56563 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(4),null,(5),null], null), null);
return (fexpr__56563.cljs$core$IFn$_invoke$arity$1 ? fexpr__56563.cljs$core$IFn$_invoke$arity$1(G__56564) : fexpr__56563.call(null,G__56564));
})())?daiquiri.core.create_element("div",{'style':{'color':"#686868",'marginTop':(0)}},[daiquiri.core.create_element("i",{'aria-hidden':"true",'style':{'color':"orange",'paddingRight':(5)},'className':"fa fa-exclamation-triangle"},null),daiquiri.interpreter.interpret((function (){var G__56568 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tumour","lwt","tumour/lwt",-1253032781),"The tool is less well tested for higher scores"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__56568) : ttt.call(null,G__56568));
})())]):null)]));
})(),(function (){var attrs56556 = (function (){var G__56570 = rum.core.react(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518)));
var fexpr__56569 = predict_prostate.results.printable.option_range((6));
return (fexpr__56569.cljs$core$IFn$_invoke$arity$1 ? fexpr__56569.cljs$core$IFn$_invoke$arity$1(G__56570) : fexpr__56569.call(null,G__56570));
})();
return daiquiri.core.create_element("td",((cljs.core.map_QMARK_(attrs56556))?daiquiri.interpreter.element_attributes(attrs56556):null),((cljs.core.map_QMARK_(attrs56556))?null:[daiquiri.interpreter.interpret(attrs56556)]));
})()]),daiquiri.core.create_element("tr",null,[(function (){var attrs56571 = predict_prostate.results.printable.ttt_input_label(ttt,new cljs.core.Keyword(null,"gleason","gleason",-2044470526));
return daiquiri.core.create_element("td",((cljs.core.map_QMARK_(attrs56571))?daiquiri.interpreter.element_attributes(attrs56571):null),((cljs.core.map_QMARK_(attrs56571))?[(cljs.core.truth_((function (){var G__56578 = rum.core.react(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518)));
var fexpr__56577 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(4),null,(5),null], null), null);
return (fexpr__56577.cljs$core$IFn$_invoke$arity$1 ? fexpr__56577.cljs$core$IFn$_invoke$arity$1(G__56578) : fexpr__56577.call(null,G__56578));
})())?daiquiri.core.create_element("div",{'style':{'color':"#686868",'marginTop':(0)}},[daiquiri.core.create_element("i",{'aria-hidden':"true",'style':{'color':"orange",'paddingRight':(5)},'className':"fa fa-exclamation-triangle"},null),daiquiri.interpreter.interpret((function (){var G__56582 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tumour","lwt","tumour/lwt",-1253032781),"The tool is less well tested for higher scores"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__56582) : ttt.call(null,G__56582));
})())]):null)]:[daiquiri.interpreter.interpret(attrs56571),(cljs.core.truth_((function (){var G__56584 = rum.core.react(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518)));
var fexpr__56583 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(4),null,(5),null], null), null);
return (fexpr__56583.cljs$core$IFn$_invoke$arity$1 ? fexpr__56583.cljs$core$IFn$_invoke$arity$1(G__56584) : fexpr__56583.call(null,G__56584));
})())?daiquiri.core.create_element("div",{'style':{'color':"#686868",'marginTop':(0)}},[daiquiri.core.create_element("i",{'aria-hidden':"true",'style':{'color':"orange",'paddingRight':(5)},'className':"fa fa-exclamation-triangle"},null),daiquiri.interpreter.interpret((function (){var G__56588 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tumour","lwt","tumour/lwt",-1253032781),"The tool is less well tested for higher scores"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__56588) : ttt.call(null,G__56588));
})())]):null)]));
})(),(function (){var attrs56576 = (function (){var G__56590 = rum.core.react(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526)));
var fexpr__56589 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"3+3"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"3+4"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"4+3"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),"8"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),"9 or 10"], null)], null));
return (fexpr__56589.cljs$core$IFn$_invoke$arity$1 ? fexpr__56589.cljs$core$IFn$_invoke$arity$1(G__56590) : fexpr__56589.call(null,G__56590));
})();
return daiquiri.core.create_element("td",((cljs.core.map_QMARK_(attrs56576))?daiquiri.interpreter.element_attributes(attrs56576):null),((cljs.core.map_QMARK_(attrs56576))?null:[daiquiri.interpreter.interpret(attrs56576)]));
})()]),daiquiri.core.create_element("tr",null,[(function (){var attrs56591 = predict_prostate.results.printable.ttt_input_label(ttt,new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666));
return daiquiri.core.create_element("td",((cljs.core.map_QMARK_(attrs56591))?daiquiri.interpreter.element_attributes(attrs56591):null),((cljs.core.map_QMARK_(attrs56591))?null:[daiquiri.interpreter.interpret(attrs56591)]));
})(),(function (){var attrs56592 = rum.core.react(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666)));
return daiquiri.core.create_element("td",((cljs.core.map_QMARK_(attrs56592))?daiquiri.interpreter.element_attributes(attrs56592):null),((cljs.core.map_QMARK_(attrs56592))?null:[daiquiri.interpreter.interpret(attrs56592)]));
})()]),daiquiri.core.create_element("tr",null,[(function (){var attrs56593 = predict_prostate.results.printable.ttt_input_label(ttt,new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520));
return daiquiri.core.create_element("td",((cljs.core.map_QMARK_(attrs56593))?daiquiri.interpreter.element_attributes(attrs56593):null),((cljs.core.map_QMARK_(attrs56593))?null:[daiquiri.interpreter.interpret(attrs56593)]));
})(),(function (){var attrs56594 = rum.core.react(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520)));
return daiquiri.core.create_element("td",((cljs.core.map_QMARK_(attrs56594))?daiquiri.interpreter.element_attributes(attrs56594):null),((cljs.core.map_QMARK_(attrs56594))?null:[daiquiri.interpreter.interpret(attrs56594)]));
})()])])])])]);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"predict-prostate.results.printable/inputs-in-print");
predict_prostate.results.printable.treatment_note = rum.core.lazy_build(rum.core.build_defc,(function (title,content){
var attrs56595 = predict_prostate.results.printable.avoid_break.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),title], null),content], 0));
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs56595))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["col-xs-12"], null)], null),attrs56595], 0))):{'className':"col-xs-12"}),((cljs.core.map_QMARK_(attrs56595))?null:[daiquiri.interpreter.interpret(attrs56595)]));
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
return daiquiri.core.create_element("div",{'className':"row"},[daiquiri.core.create_element("div",{'className':"col-sm-12"},[daiquiri.core.create_element("h2",null,["Treatments after Surgery"]),daiquiri.core.create_element("section",{'className':"print-bigger"},["Selected treatments after surgery are:",(cljs.core.truth_(horm)?(function (){var attrs56601 = horm_label;
return daiquiri.core.create_element("li",((cljs.core.map_QMARK_(attrs56601))?daiquiri.interpreter.element_attributes(attrs56601):null),((cljs.core.map_QMARK_(attrs56601))?null:[daiquiri.interpreter.interpret(attrs56601)]));
})():null),(cljs.core.truth_(chemo)?(function (){var attrs56602 = chemo_label;
return daiquiri.core.create_element("li",((cljs.core.map_QMARK_(attrs56602))?daiquiri.interpreter.element_attributes(attrs56602):null),((cljs.core.map_QMARK_(attrs56602))?[" (",daiquiri.interpreter.interpret((function (){var G__56608 = rum.core.react(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"chemo","chemo",-1212386012)));
var fexpr__56607 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"3rd","3rd",-1568627554),"3rd generation",new cljs.core.Keyword(null,"2nd","2nd",1952531196),"2nd generation",new cljs.core.Keyword(null,"none","none",1333468478),"None"], null);
return (fexpr__56607.cljs$core$IFn$_invoke$arity$1 ? fexpr__56607.cljs$core$IFn$_invoke$arity$1(G__56608) : fexpr__56607.call(null,G__56608));
})()),")"]:[daiquiri.interpreter.interpret(attrs56602)," (",daiquiri.interpreter.interpret((function (){var G__56612 = rum.core.react(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"chemo","chemo",-1212386012)));
var fexpr__56611 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"3rd","3rd",-1568627554),"3rd generation",new cljs.core.Keyword(null,"2nd","2nd",1952531196),"2nd generation",new cljs.core.Keyword(null,"none","none",1333468478),"None"], null);
return (fexpr__56611.cljs$core$IFn$_invoke$arity$1 ? fexpr__56611.cljs$core$IFn$_invoke$arity$1(G__56612) : fexpr__56611.call(null,G__56612));
})()),")"]));
})():null),(cljs.core.truth_(tra)?(function (){var attrs56603 = tra_label;
return daiquiri.core.create_element("li",((cljs.core.map_QMARK_(attrs56603))?daiquiri.interpreter.element_attributes(attrs56603):null),((cljs.core.map_QMARK_(attrs56603))?null:[daiquiri.interpreter.interpret(attrs56603)]));
})():null),((bis)?(function (){var attrs56604 = bis_label;
return daiquiri.core.create_element("li",((cljs.core.map_QMARK_(attrs56604))?daiquiri.interpreter.element_attributes(attrs56604):null),((cljs.core.map_QMARK_(attrs56604))?null:[daiquiri.interpreter.interpret(attrs56604)]));
})():null)]),(function (){var attrs56600 = (cljs.core.truth_(horm)?predict_prostate.results.printable.treatment_note(horm_label,(cljs.core.truth_(horm)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.rest(predict_prostate.content_reader.section.cljs$core$IFn$_invoke$arity$2(ttt,"hormone-therapy"))], null):null)):null);
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs56600))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["row","print-smaller"], null)], null),attrs56600], 0))):{'className':"row print-smaller"}),((cljs.core.map_QMARK_(attrs56600))?[(cljs.core.truth_(chemo)?predict_prostate.results.printable.treatment_note(chemo_label,(cljs.core.truth_(chemo)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.rest(predict_prostate.content_reader.section.cljs$core$IFn$_invoke$arity$2(ttt,"chemotherapy"))], null):null)):null),(cljs.core.truth_(tra)?predict_prostate.results.printable.treatment_note(tra_label,(cljs.core.truth_(tra)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.rest(predict_prostate.content_reader.section.cljs$core$IFn$_invoke$arity$2(ttt,"trastuzumab"))], null):null)):null),((bis)?predict_prostate.results.printable.treatment_note(bis_label,((bis)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.rest(predict_prostate.content_reader.section.cljs$core$IFn$_invoke$arity$2(ttt,"bisphosphonates"))], null):null)):null)]:[daiquiri.interpreter.interpret(attrs56600),(cljs.core.truth_(chemo)?predict_prostate.results.printable.treatment_note(chemo_label,(cljs.core.truth_(chemo)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.rest(predict_prostate.content_reader.section.cljs$core$IFn$_invoke$arity$2(ttt,"chemotherapy"))], null):null)):null),(cljs.core.truth_(tra)?predict_prostate.results.printable.treatment_note(tra_label,(cljs.core.truth_(tra)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.rest(predict_prostate.content_reader.section.cljs$core$IFn$_invoke$arity$2(ttt,"trastuzumab"))], null):null)):null),((bis)?predict_prostate.results.printable.treatment_note(bis_label,((bis)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.rest(predict_prostate.content_reader.section.cljs$core$IFn$_invoke$arity$2(ttt,"bisphosphonates"))], null):null)):null)]));
})()])]);
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"predict-prostate.results.printable/treatments-in-print");
predict_prostate.results.printable.results_in_print = rum.core.lazy_build(rum.core.build_defc,(function (ttt){
return daiquiri.core.create_element("div",{'className':"row"},[(function (){var attrs56615 = predict_prostate.results.printable.avoid_break.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),(function (){var G__56616 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("print","inputs","print/inputs",1039888383),"Inputs"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__56616) : ttt.call(null,G__56616));
})()], null),predict_prostate.results.printable.inputs_in_print(ttt)], 0));
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs56615))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["col-sm-12"], null)], null),attrs56615], 0))):{'className':"col-sm-12"}),((cljs.core.map_QMARK_(attrs56615))?[daiquiri.interpreter.interpret(predict_prostate.results.printable.break_before.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([predict_prostate.results.printable.avoid_break.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),(function (){var G__56618 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("print","surv-curve","print/surv-curve",-1081795857),"Survival curve"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__56618) : ttt.call(null,G__56618));
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"100%",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"0%"], null)], null),predict_prostate.results.curves.results_in_curves(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"printable","printable",-928999004),true,new cljs.core.Keyword(null,"ttt","ttt",1858561240),ttt], null))], null)], 0))], 0))),daiquiri.interpreter.interpret(predict_prostate.results.printable.break_before.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([predict_prostate.results.printable.avoid_break.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),(function (){var G__56621 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("print","surv-table-1","print/surv-table-1",472241572),"Survival table"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__56621) : ttt.call(null,G__56621));
})()," - ",rum.core.react(predict_prostate.state.run_time.year_selected())," ",(function (){var G__56622 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("print","surv-table-2","print/surv-table-2",-551388149),"years after diagnosis."], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__56622) : ttt.call(null,G__56622));
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"60%",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"0%"], null)], null),predict_prostate.results.table.results_in_table(ttt)], null)], 0))], 0))),daiquiri.interpreter.interpret(predict_prostate.results.printable.break_before.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([predict_prostate.results.printable.avoid_break.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),(function (){var G__56624 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("print","surv-chart","print/surv-chart",-469806984),"Survival chart"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__56624) : ttt.call(null,G__56624));
})()], null),predict_prostate.results.charts.results_in_charts(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"printable","printable",-928999004),true,new cljs.core.Keyword(null,"ttt","ttt",1858561240),ttt], null))], 0))], 0))),daiquiri.interpreter.interpret(predict_prostate.results.printable.break_before.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([predict_prostate.results.printable.avoid_break.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),(function (){var G__56627 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("print","icarray-1","print/icarray-1",-2007539192),"Icon array showing"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__56627) : ttt.call(null,G__56627));
})()," ",rum.core.react(predict_prostate.state.run_time.year_selected())," ",(function (){var G__56628 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("print","icarray-2","print/icarray-2",-551489289),"year outcomes for 100 men"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__56628) : ttt.call(null,G__56628));
})()], null),predict_prostate.results.icons.results_in_icons_STAR_(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ttt","ttt",1858561240),ttt,new cljs.core.Keyword(null,"printable","printable",-928999004),true], null))], 0))], 0))),daiquiri.interpreter.interpret(predict_prostate.results.printable.break_before.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),(function (){var G__56630 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("print","sum-title","print/sum-title",427959026),"In Summary"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__56630) : ttt.call(null,G__56630));
})()], null),predict_prostate.results.text.results_in_text(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"printable","printable",-928999004),true,new cljs.core.Keyword(null,"ttt","ttt",1858561240),ttt], null))], 0))),daiquiri.interpreter.interpret(predict_prostate.results.printable.break_before.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),(function (){var G__56632 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("print","potharm-title","print/potharm-title",-1176889073),"Potential Harms of treatments"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__56632) : ttt.call(null,G__56632));
})()], null),predict_prostate.results.sidefx.results_in_sidefx(ttt)], 0))),predict_prostate.layout.header.footer()]:[daiquiri.interpreter.interpret(attrs56615),daiquiri.interpreter.interpret(predict_prostate.results.printable.break_before.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([predict_prostate.results.printable.avoid_break.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),(function (){var G__56634 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("print","surv-curve","print/surv-curve",-1081795857),"Survival curve"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__56634) : ttt.call(null,G__56634));
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"100%",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"0%"], null)], null),predict_prostate.results.curves.results_in_curves(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"printable","printable",-928999004),true,new cljs.core.Keyword(null,"ttt","ttt",1858561240),ttt], null))], null)], 0))], 0))),daiquiri.interpreter.interpret(predict_prostate.results.printable.break_before.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([predict_prostate.results.printable.avoid_break.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),(function (){var G__56637 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("print","surv-table-1","print/surv-table-1",472241572),"Survival table"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__56637) : ttt.call(null,G__56637));
})()," - ",rum.core.react(predict_prostate.state.run_time.year_selected())," ",(function (){var G__56638 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("print","surv-table-2","print/surv-table-2",-551388149),"years after diagnosis."], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__56638) : ttt.call(null,G__56638));
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"60%",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"0%"], null)], null),predict_prostate.results.table.results_in_table(ttt)], null)], 0))], 0))),daiquiri.interpreter.interpret(predict_prostate.results.printable.break_before.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([predict_prostate.results.printable.avoid_break.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),(function (){var G__56640 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("print","surv-chart","print/surv-chart",-469806984),"Survival chart"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__56640) : ttt.call(null,G__56640));
})()], null),predict_prostate.results.charts.results_in_charts(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"printable","printable",-928999004),true,new cljs.core.Keyword(null,"ttt","ttt",1858561240),ttt], null))], 0))], 0))),daiquiri.interpreter.interpret(predict_prostate.results.printable.break_before.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([predict_prostate.results.printable.avoid_break.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),(function (){var G__56643 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("print","icarray-1","print/icarray-1",-2007539192),"Icon array showing"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__56643) : ttt.call(null,G__56643));
})()," ",rum.core.react(predict_prostate.state.run_time.year_selected())," ",(function (){var G__56644 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("print","icarray-2","print/icarray-2",-551489289),"year outcomes for 100 men"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__56644) : ttt.call(null,G__56644));
})()], null),predict_prostate.results.icons.results_in_icons_STAR_(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ttt","ttt",1858561240),ttt,new cljs.core.Keyword(null,"printable","printable",-928999004),true], null))], 0))], 0))),daiquiri.interpreter.interpret(predict_prostate.results.printable.break_before.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),(function (){var G__56646 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("print","sum-title","print/sum-title",427959026),"In Summary"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__56646) : ttt.call(null,G__56646));
})()], null),predict_prostate.results.text.results_in_text(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"printable","printable",-928999004),true,new cljs.core.Keyword(null,"ttt","ttt",1858561240),ttt], null))], 0))),daiquiri.interpreter.interpret(predict_prostate.results.printable.break_before.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),(function (){var G__56648 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("print","potharm-title","print/potharm-title",-1176889073),"Potential Harms of treatments"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__56648) : ttt.call(null,G__56648));
})()], null),predict_prostate.results.sidefx.results_in_sidefx(ttt)], 0))),predict_prostate.layout.header.footer()]));
})()]);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,predict_prostate.mixins.set_default(new cljs.core.Keyword(null,"result-year","result-year",1413238532))], null),"predict-prostate.results.printable/results-in-print");

//# sourceMappingURL=predict_prostate.results.printable.js.map
