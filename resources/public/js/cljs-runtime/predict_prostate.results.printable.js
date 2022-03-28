goog.provide('predict_prostate.results.printable');
predict_prostate.results.printable.avoid_break = (function predict_prostate$results$printable$avoid_break(var_args){
var args__4824__auto__ = [];
var len__4818__auto___48635 = arguments.length;
var i__4819__auto___48636 = (0);
while(true){
if((i__4819__auto___48636 < len__4818__auto___48635)){
args__4824__auto__.push((arguments[i__4819__auto___48636]));

var G__48637 = (i__4819__auto___48636 + (1));
i__4819__auto___48636 = G__48637;
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
(predict_prostate.results.printable.avoid_break.cljs$lang$applyTo = (function (seq48439){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48439));
}));

predict_prostate.results.printable.ttt_input_label = (function predict_prostate$results$printable$ttt_input_label(ttt,key){
return predict_prostate.components.util.widget_ttt(ttt,"help",key,predict_prostate.state.run_time.input_label(key));
});
predict_prostate.results.printable.break_before = (function predict_prostate$results$printable$break_before(var_args){
var args__4824__auto__ = [];
var len__4818__auto___48638 = arguments.length;
var i__4819__auto___48639 = (0);
while(true){
if((i__4819__auto___48639 < len__4818__auto___48638)){
args__4824__auto__.push((arguments[i__4819__auto___48639]));

var G__48640 = (i__4819__auto___48639 + (1));
i__4819__auto___48639 = G__48640;
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
(predict_prostate.results.printable.break_before.cljs$lang$applyTo = (function (seq48444){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48444));
}));

predict_prostate.results.printable.option_range = (function predict_prostate$results$printable$option_range(n){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.str),cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),n)));
});
predict_prostate.results.printable.inputs_in_print = rum.core.lazy_build(rum.core.build_defc,(function (ttt){
return daiquiri.core.create_element("div",{'className':"row"},[daiquiri.core.create_element("div",{'className':"col-sm-8 col-sm-offset-2"},[daiquiri.core.create_element("table",{'style':{'fontSize':"16px"},'className':"table table-bordered table-responsive"},[daiquiri.core.create_element("thead",null,[daiquiri.core.create_element("tr",null,[(function (){var attrs48451 = (function (){var G__48455 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("print","input","print/input",714239080),"Input"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__48455) : ttt.call(null,G__48455));
})();
return daiquiri.core.create_element("th",((cljs.core.map_QMARK_(attrs48451))?daiquiri.interpreter.element_attributes(attrs48451):null),((cljs.core.map_QMARK_(attrs48451))?null:[daiquiri.interpreter.interpret(attrs48451)]));
})(),(function (){var attrs48454 = (function (){var G__48456 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("print","value","print/value",412953628),"Value"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__48456) : ttt.call(null,G__48456));
})();
return daiquiri.core.create_element("th",((cljs.core.map_QMARK_(attrs48454))?daiquiri.interpreter.element_attributes(attrs48454):null),((cljs.core.map_QMARK_(attrs48454))?null:[daiquiri.interpreter.interpret(attrs48454)]));
})()])]),daiquiri.core.create_element("tbody",null,[daiquiri.core.create_element("tr",null,[(function (){var attrs48460 = predict_prostate.results.printable.ttt_input_label(ttt,new cljs.core.Keyword(null,"age","age",-604307804));
return daiquiri.core.create_element("td",((cljs.core.map_QMARK_(attrs48460))?daiquiri.interpreter.element_attributes(attrs48460):null),((cljs.core.map_QMARK_(attrs48460))?null:[daiquiri.interpreter.interpret(attrs48460)]));
})(),(function (){var attrs48461 = rum.core.react(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"age","age",-604307804)));
return daiquiri.core.create_element("td",((cljs.core.map_QMARK_(attrs48461))?daiquiri.interpreter.element_attributes(attrs48461):null),((cljs.core.map_QMARK_(attrs48461))?null:[daiquiri.interpreter.interpret(attrs48461)]));
})()]),daiquiri.core.create_element("tr",null,[(function (){var attrs48462 = predict_prostate.results.printable.ttt_input_label(ttt,new cljs.core.Keyword(null,"psa","psa",-321761459));
return daiquiri.core.create_element("td",((cljs.core.map_QMARK_(attrs48462))?daiquiri.interpreter.element_attributes(attrs48462):null),((cljs.core.map_QMARK_(attrs48462))?null:[daiquiri.interpreter.interpret(attrs48462)]));
})(),(function (){var attrs48463 = rum.core.react(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"psa","psa",-321761459)));
return daiquiri.core.create_element("td",((cljs.core.map_QMARK_(attrs48463))?daiquiri.interpreter.element_attributes(attrs48463):null),((cljs.core.map_QMARK_(attrs48463))?null:[daiquiri.interpreter.interpret(attrs48463)]));
})()]),daiquiri.core.create_element("tr",null,[(function (){var attrs48464 = predict_prostate.results.printable.ttt_input_label(ttt,new cljs.core.Keyword(null,"t-stage","t-stage",-1315750984));
return daiquiri.core.create_element("td",((cljs.core.map_QMARK_(attrs48464))?daiquiri.interpreter.element_attributes(attrs48464):null),((cljs.core.map_QMARK_(attrs48464))?[(cljs.core.truth_((function (){var G__48475 = rum.core.react(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"t-stage","t-stage",-1315750984)));
var fexpr__48474 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(4),null], null), null);
return (fexpr__48474.cljs$core$IFn$_invoke$arity$1 ? fexpr__48474.cljs$core$IFn$_invoke$arity$1(G__48475) : fexpr__48474.call(null,G__48475));
})())?daiquiri.core.create_element("div",{'style':{'color':"#686868",'marginTop':(0)}},[daiquiri.core.create_element("i",{'aria-hidden':"true",'style':{'color':"orange",'paddingRight':(5)},'className':"fa fa-exclamation-triangle"},null),daiquiri.interpreter.interpret((function (){var G__48481 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("patient","lwtstages","patient/lwtstages",1523511410),"The tool is less well tested in higher stages"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__48481) : ttt.call(null,G__48481));
})())]):null)]:[daiquiri.interpreter.interpret(attrs48464),(cljs.core.truth_((function (){var G__48483 = rum.core.react(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"t-stage","t-stage",-1315750984)));
var fexpr__48482 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(4),null], null), null);
return (fexpr__48482.cljs$core$IFn$_invoke$arity$1 ? fexpr__48482.cljs$core$IFn$_invoke$arity$1(G__48483) : fexpr__48482.call(null,G__48483));
})())?daiquiri.core.create_element("div",{'style':{'color':"#686868",'marginTop':(0)}},[daiquiri.core.create_element("i",{'aria-hidden':"true",'style':{'color':"orange",'paddingRight':(5)},'className':"fa fa-exclamation-triangle"},null),daiquiri.interpreter.interpret((function (){var G__48488 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("patient","lwtstages","patient/lwtstages",1523511410),"The tool is less well tested in higher stages"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__48488) : ttt.call(null,G__48488));
})())]):null)]));
})(),(function (){var attrs48471 = (function (){var G__48491 = rum.core.react(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"t-stage","t-stage",-1315750984)));
var fexpr__48490 = predict_prostate.results.printable.option_range((5));
return (fexpr__48490.cljs$core$IFn$_invoke$arity$1 ? fexpr__48490.cljs$core$IFn$_invoke$arity$1(G__48491) : fexpr__48490.call(null,G__48491));
})();
return daiquiri.core.create_element("td",((cljs.core.map_QMARK_(attrs48471))?daiquiri.interpreter.element_attributes(attrs48471):null),((cljs.core.map_QMARK_(attrs48471))?null:[daiquiri.interpreter.interpret(attrs48471)]));
})()]),daiquiri.core.create_element("tr",null,[(function (){var attrs48492 = predict_prostate.results.printable.ttt_input_label(ttt,new cljs.core.Keyword(null,"h-admissions","h-admissions",-1503094844));
return daiquiri.core.create_element("td",((cljs.core.map_QMARK_(attrs48492))?daiquiri.interpreter.element_attributes(attrs48492):null),((cljs.core.map_QMARK_(attrs48492))?null:[daiquiri.interpreter.interpret(attrs48492)]));
})(),(function (){var attrs48497 = (function (){var G__48499 = rum.core.react(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"h-admissions","h-admissions",-1503094844)));
var fexpr__48498 = new cljs.core.PersistentArrayMap(null, 2, [(0),"No",(1),"Yes"], null);
return (fexpr__48498.cljs$core$IFn$_invoke$arity$1 ? fexpr__48498.cljs$core$IFn$_invoke$arity$1(G__48499) : fexpr__48498.call(null,G__48499));
})();
return daiquiri.core.create_element("td",((cljs.core.map_QMARK_(attrs48497))?daiquiri.interpreter.element_attributes(attrs48497):null),((cljs.core.map_QMARK_(attrs48497))?null:[daiquiri.interpreter.interpret(attrs48497)]));
})()]),(((rum.core.react(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"h-admissions","h-admissions",-1503094844))) > (0)))?daiquiri.core.create_element("tr",null,[(function (){var attrs48501 = predict_prostate.results.printable.ttt_input_label(ttt,new cljs.core.Keyword(null,"charlson-comorbidity","charlson-comorbidity",-633596907));
return daiquiri.core.create_element("td",((cljs.core.map_QMARK_(attrs48501))?daiquiri.interpreter.element_attributes(attrs48501):null),((cljs.core.map_QMARK_(attrs48501))?null:[daiquiri.interpreter.interpret(attrs48501)]));
})(),(function (){var attrs48507 = (function (){var G__48509 = rum.core.react(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"charlson-comorbidity","charlson-comorbidity",-633596907)));
var fexpr__48508 = new cljs.core.PersistentArrayMap(null, 2, [(0),"No",(1),"Yes"], null);
return (fexpr__48508.cljs$core$IFn$_invoke$arity$1 ? fexpr__48508.cljs$core$IFn$_invoke$arity$1(G__48509) : fexpr__48508.call(null,G__48509));
})();
return daiquiri.core.create_element("td",((cljs.core.map_QMARK_(attrs48507))?daiquiri.interpreter.element_attributes(attrs48507):null),((cljs.core.map_QMARK_(attrs48507))?null:[daiquiri.interpreter.interpret(attrs48507)]));
})()]):null),daiquiri.core.create_element("tr",null,[(function (){var attrs48510 = predict_prostate.results.printable.ttt_input_label(ttt,new cljs.core.Keyword(null,"brca","brca",-1943532098));
return daiquiri.core.create_element("td",((cljs.core.map_QMARK_(attrs48510))?daiquiri.interpreter.element_attributes(attrs48510):null),((cljs.core.map_QMARK_(attrs48510))?null:[daiquiri.interpreter.interpret(attrs48510)]));
})(),(function (){var attrs48515 = (function (){var G__48517 = rum.core.react(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"brca","brca",-1943532098)));
var fexpr__48516 = new cljs.core.PersistentArrayMap(null, 2, [(0),"No",(1),"Yes"], null);
return (fexpr__48516.cljs$core$IFn$_invoke$arity$1 ? fexpr__48516.cljs$core$IFn$_invoke$arity$1(G__48517) : fexpr__48516.call(null,G__48517));
})();
return daiquiri.core.create_element("td",((cljs.core.map_QMARK_(attrs48515))?daiquiri.interpreter.element_attributes(attrs48515):null),((cljs.core.map_QMARK_(attrs48515))?null:[daiquiri.interpreter.interpret(attrs48515)]));
})()]),daiquiri.core.create_element("tr",null,[(function (){var attrs48518 = predict_prostate.results.printable.ttt_input_label(ttt,new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518));
return daiquiri.core.create_element("td",((cljs.core.map_QMARK_(attrs48518))?daiquiri.interpreter.element_attributes(attrs48518):null),((cljs.core.map_QMARK_(attrs48518))?[(cljs.core.truth_((function (){var G__48525 = rum.core.react(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518)));
var fexpr__48524 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(4),null,(5),null], null), null);
return (fexpr__48524.cljs$core$IFn$_invoke$arity$1 ? fexpr__48524.cljs$core$IFn$_invoke$arity$1(G__48525) : fexpr__48524.call(null,G__48525));
})())?daiquiri.core.create_element("div",{'style':{'color':"#686868",'marginTop':(0)}},[daiquiri.core.create_element("i",{'aria-hidden':"true",'style':{'color':"orange",'paddingRight':(5)},'className':"fa fa-exclamation-triangle"},null),daiquiri.interpreter.interpret((function (){var G__48532 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tumour","lwt","tumour/lwt",-1253032781),"The tool is less well tested for higher scores"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__48532) : ttt.call(null,G__48532));
})())]):null)]:[daiquiri.interpreter.interpret(attrs48518),(cljs.core.truth_((function (){var G__48534 = rum.core.react(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518)));
var fexpr__48533 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(4),null,(5),null], null), null);
return (fexpr__48533.cljs$core$IFn$_invoke$arity$1 ? fexpr__48533.cljs$core$IFn$_invoke$arity$1(G__48534) : fexpr__48533.call(null,G__48534));
})())?daiquiri.core.create_element("div",{'style':{'color':"#686868",'marginTop':(0)}},[daiquiri.core.create_element("i",{'aria-hidden':"true",'style':{'color':"orange",'paddingRight':(5)},'className':"fa fa-exclamation-triangle"},null),daiquiri.interpreter.interpret((function (){var G__48538 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tumour","lwt","tumour/lwt",-1253032781),"The tool is less well tested for higher scores"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__48538) : ttt.call(null,G__48538));
})())]):null)]));
})(),(function (){var attrs48523 = (function (){var G__48540 = rum.core.react(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518)));
var fexpr__48539 = predict_prostate.results.printable.option_range((6));
return (fexpr__48539.cljs$core$IFn$_invoke$arity$1 ? fexpr__48539.cljs$core$IFn$_invoke$arity$1(G__48540) : fexpr__48539.call(null,G__48540));
})();
return daiquiri.core.create_element("td",((cljs.core.map_QMARK_(attrs48523))?daiquiri.interpreter.element_attributes(attrs48523):null),((cljs.core.map_QMARK_(attrs48523))?null:[daiquiri.interpreter.interpret(attrs48523)]));
})()]),daiquiri.core.create_element("tr",null,[(function (){var attrs48541 = predict_prostate.results.printable.ttt_input_label(ttt,new cljs.core.Keyword(null,"gleason","gleason",-2044470526));
return daiquiri.core.create_element("td",((cljs.core.map_QMARK_(attrs48541))?daiquiri.interpreter.element_attributes(attrs48541):null),((cljs.core.map_QMARK_(attrs48541))?[(cljs.core.truth_((function (){var G__48548 = rum.core.react(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518)));
var fexpr__48547 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(4),null,(5),null], null), null);
return (fexpr__48547.cljs$core$IFn$_invoke$arity$1 ? fexpr__48547.cljs$core$IFn$_invoke$arity$1(G__48548) : fexpr__48547.call(null,G__48548));
})())?daiquiri.core.create_element("div",{'style':{'color':"#686868",'marginTop':(0)}},[daiquiri.core.create_element("i",{'aria-hidden':"true",'style':{'color':"orange",'paddingRight':(5)},'className':"fa fa-exclamation-triangle"},null),daiquiri.interpreter.interpret((function (){var G__48554 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tumour","lwt","tumour/lwt",-1253032781),"The tool is less well tested for higher scores"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__48554) : ttt.call(null,G__48554));
})())]):null)]:[daiquiri.interpreter.interpret(attrs48541),(cljs.core.truth_((function (){var G__48556 = rum.core.react(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518)));
var fexpr__48555 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(4),null,(5),null], null), null);
return (fexpr__48555.cljs$core$IFn$_invoke$arity$1 ? fexpr__48555.cljs$core$IFn$_invoke$arity$1(G__48556) : fexpr__48555.call(null,G__48556));
})())?daiquiri.core.create_element("div",{'style':{'color':"#686868",'marginTop':(0)}},[daiquiri.core.create_element("i",{'aria-hidden':"true",'style':{'color':"orange",'paddingRight':(5)},'className':"fa fa-exclamation-triangle"},null),daiquiri.interpreter.interpret((function (){var G__48562 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tumour","lwt","tumour/lwt",-1253032781),"The tool is less well tested for higher scores"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__48562) : ttt.call(null,G__48562));
})())]):null)]));
})(),(function (){var attrs48546 = (function (){var G__48564 = rum.core.react(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526)));
var fexpr__48563 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"3+3"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"3+4"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"4+3"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),"8"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),"9 or 10"], null)], null));
return (fexpr__48563.cljs$core$IFn$_invoke$arity$1 ? fexpr__48563.cljs$core$IFn$_invoke$arity$1(G__48564) : fexpr__48563.call(null,G__48564));
})();
return daiquiri.core.create_element("td",((cljs.core.map_QMARK_(attrs48546))?daiquiri.interpreter.element_attributes(attrs48546):null),((cljs.core.map_QMARK_(attrs48546))?null:[daiquiri.interpreter.interpret(attrs48546)]));
})()]),daiquiri.core.create_element("tr",null,[(function (){var attrs48566 = predict_prostate.results.printable.ttt_input_label(ttt,new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666));
return daiquiri.core.create_element("td",((cljs.core.map_QMARK_(attrs48566))?daiquiri.interpreter.element_attributes(attrs48566):null),((cljs.core.map_QMARK_(attrs48566))?null:[daiquiri.interpreter.interpret(attrs48566)]));
})(),(function (){var attrs48567 = rum.core.react(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666)));
return daiquiri.core.create_element("td",((cljs.core.map_QMARK_(attrs48567))?daiquiri.interpreter.element_attributes(attrs48567):null),((cljs.core.map_QMARK_(attrs48567))?null:[daiquiri.interpreter.interpret(attrs48567)]));
})()]),daiquiri.core.create_element("tr",null,[(function (){var attrs48569 = predict_prostate.results.printable.ttt_input_label(ttt,new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520));
return daiquiri.core.create_element("td",((cljs.core.map_QMARK_(attrs48569))?daiquiri.interpreter.element_attributes(attrs48569):null),((cljs.core.map_QMARK_(attrs48569))?null:[daiquiri.interpreter.interpret(attrs48569)]));
})(),(function (){var attrs48570 = rum.core.react(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520)));
return daiquiri.core.create_element("td",((cljs.core.map_QMARK_(attrs48570))?daiquiri.interpreter.element_attributes(attrs48570):null),((cljs.core.map_QMARK_(attrs48570))?null:[daiquiri.interpreter.interpret(attrs48570)]));
})()])])])])]);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"predict-prostate.results.printable/inputs-in-print");
predict_prostate.results.printable.treatment_note = rum.core.lazy_build(rum.core.build_defc,(function (title,content){
var attrs48571 = predict_prostate.results.printable.avoid_break.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),title], null),content], 0));
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs48571))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["col-xs-12"], null)], null),attrs48571], 0))):{'className':"col-xs-12"}),((cljs.core.map_QMARK_(attrs48571))?null:[daiquiri.interpreter.interpret(attrs48571)]));
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
return daiquiri.core.create_element("div",{'className':"row"},[daiquiri.core.create_element("div",{'className':"col-sm-12"},[daiquiri.core.create_element("h2",null,["Treatments after Surgery"]),daiquiri.core.create_element("section",{'className':"print-bigger"},["Selected treatments after surgery are:",(cljs.core.truth_(horm)?(function (){var attrs48587 = horm_label;
return daiquiri.core.create_element("li",((cljs.core.map_QMARK_(attrs48587))?daiquiri.interpreter.element_attributes(attrs48587):null),((cljs.core.map_QMARK_(attrs48587))?null:[daiquiri.interpreter.interpret(attrs48587)]));
})():null),(cljs.core.truth_(chemo)?(function (){var attrs48588 = chemo_label;
return daiquiri.core.create_element("li",((cljs.core.map_QMARK_(attrs48588))?daiquiri.interpreter.element_attributes(attrs48588):null),((cljs.core.map_QMARK_(attrs48588))?[" (",daiquiri.interpreter.interpret((function (){var G__48594 = rum.core.react(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"chemo","chemo",-1212386012)));
var fexpr__48593 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"3rd","3rd",-1568627554),"3rd generation",new cljs.core.Keyword(null,"2nd","2nd",1952531196),"2nd generation",new cljs.core.Keyword(null,"none","none",1333468478),"None"], null);
return (fexpr__48593.cljs$core$IFn$_invoke$arity$1 ? fexpr__48593.cljs$core$IFn$_invoke$arity$1(G__48594) : fexpr__48593.call(null,G__48594));
})()),")"]:[daiquiri.interpreter.interpret(attrs48588)," (",daiquiri.interpreter.interpret((function (){var G__48598 = rum.core.react(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"chemo","chemo",-1212386012)));
var fexpr__48597 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"3rd","3rd",-1568627554),"3rd generation",new cljs.core.Keyword(null,"2nd","2nd",1952531196),"2nd generation",new cljs.core.Keyword(null,"none","none",1333468478),"None"], null);
return (fexpr__48597.cljs$core$IFn$_invoke$arity$1 ? fexpr__48597.cljs$core$IFn$_invoke$arity$1(G__48598) : fexpr__48597.call(null,G__48598));
})()),")"]));
})():null),(cljs.core.truth_(tra)?(function (){var attrs48589 = tra_label;
return daiquiri.core.create_element("li",((cljs.core.map_QMARK_(attrs48589))?daiquiri.interpreter.element_attributes(attrs48589):null),((cljs.core.map_QMARK_(attrs48589))?null:[daiquiri.interpreter.interpret(attrs48589)]));
})():null),((bis)?(function (){var attrs48590 = bis_label;
return daiquiri.core.create_element("li",((cljs.core.map_QMARK_(attrs48590))?daiquiri.interpreter.element_attributes(attrs48590):null),((cljs.core.map_QMARK_(attrs48590))?null:[daiquiri.interpreter.interpret(attrs48590)]));
})():null)]),(function (){var attrs48586 = (cljs.core.truth_(horm)?predict_prostate.results.printable.treatment_note(horm_label,(cljs.core.truth_(horm)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.rest(predict_prostate.content_reader.section.cljs$core$IFn$_invoke$arity$2(ttt,"hormone-therapy"))], null):null)):null);
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs48586))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["row","print-smaller"], null)], null),attrs48586], 0))):{'className':"row print-smaller"}),((cljs.core.map_QMARK_(attrs48586))?[(cljs.core.truth_(chemo)?predict_prostate.results.printable.treatment_note(chemo_label,(cljs.core.truth_(chemo)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.rest(predict_prostate.content_reader.section.cljs$core$IFn$_invoke$arity$2(ttt,"chemotherapy"))], null):null)):null),(cljs.core.truth_(tra)?predict_prostate.results.printable.treatment_note(tra_label,(cljs.core.truth_(tra)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.rest(predict_prostate.content_reader.section.cljs$core$IFn$_invoke$arity$2(ttt,"trastuzumab"))], null):null)):null),((bis)?predict_prostate.results.printable.treatment_note(bis_label,((bis)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.rest(predict_prostate.content_reader.section.cljs$core$IFn$_invoke$arity$2(ttt,"bisphosphonates"))], null):null)):null)]:[daiquiri.interpreter.interpret(attrs48586),(cljs.core.truth_(chemo)?predict_prostate.results.printable.treatment_note(chemo_label,(cljs.core.truth_(chemo)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.rest(predict_prostate.content_reader.section.cljs$core$IFn$_invoke$arity$2(ttt,"chemotherapy"))], null):null)):null),(cljs.core.truth_(tra)?predict_prostate.results.printable.treatment_note(tra_label,(cljs.core.truth_(tra)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.rest(predict_prostate.content_reader.section.cljs$core$IFn$_invoke$arity$2(ttt,"trastuzumab"))], null):null)):null),((bis)?predict_prostate.results.printable.treatment_note(bis_label,((bis)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.rest(predict_prostate.content_reader.section.cljs$core$IFn$_invoke$arity$2(ttt,"bisphosphonates"))], null):null)):null)]));
})()])]);
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"predict-prostate.results.printable/treatments-in-print");
predict_prostate.results.printable.results_in_print = rum.core.lazy_build(rum.core.build_defc,(function (ttt){
return daiquiri.core.create_element("div",{'className':"row"},[(function (){var attrs48601 = predict_prostate.results.printable.avoid_break.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),(function (){var G__48602 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("print","inputs","print/inputs",1039888383),"Inputs"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__48602) : ttt.call(null,G__48602));
})()], null),predict_prostate.results.printable.inputs_in_print(ttt)], 0));
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs48601))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["col-sm-12"], null)], null),attrs48601], 0))):{'className':"col-sm-12"}),((cljs.core.map_QMARK_(attrs48601))?[daiquiri.interpreter.interpret(predict_prostate.results.printable.break_before.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([predict_prostate.results.printable.avoid_break.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),(function (){var G__48604 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("print","surv-curve","print/surv-curve",-1081795857),"Survival curve"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__48604) : ttt.call(null,G__48604));
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"100%",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"0%"], null)], null),predict_prostate.results.curves.results_in_curves(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"printable","printable",-928999004),true,new cljs.core.Keyword(null,"ttt","ttt",1858561240),ttt], null))], null)], 0))], 0))),daiquiri.interpreter.interpret(predict_prostate.results.printable.break_before.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([predict_prostate.results.printable.avoid_break.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),(function (){var G__48607 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("print","surv-table-1","print/surv-table-1",472241572),"Survival table"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__48607) : ttt.call(null,G__48607));
})()," - ",rum.core.react(predict_prostate.state.run_time.year_selected())," ",(function (){var G__48608 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("print","surv-table-2","print/surv-table-2",-551388149),"years after diagnosis."], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__48608) : ttt.call(null,G__48608));
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"60%",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"0%"], null)], null),predict_prostate.results.table.results_in_table(ttt)], null)], 0))], 0))),daiquiri.interpreter.interpret(predict_prostate.results.printable.break_before.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([predict_prostate.results.printable.avoid_break.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),(function (){var G__48610 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("print","surv-chart","print/surv-chart",-469806984),"Survival chart"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__48610) : ttt.call(null,G__48610));
})()], null),predict_prostate.results.charts.results_in_charts(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"printable","printable",-928999004),true,new cljs.core.Keyword(null,"ttt","ttt",1858561240),ttt], null))], 0))], 0))),daiquiri.interpreter.interpret(predict_prostate.results.printable.break_before.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([predict_prostate.results.printable.avoid_break.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),(function (){var G__48613 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("print","icarray-1","print/icarray-1",-2007539192),"Icon array showing"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__48613) : ttt.call(null,G__48613));
})()," ",rum.core.react(predict_prostate.state.run_time.year_selected())," ",(function (){var G__48614 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("print","icarray-2","print/icarray-2",-551489289),"year outcomes for 100 men"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__48614) : ttt.call(null,G__48614));
})()], null),predict_prostate.results.icons.results_in_icons_STAR_(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ttt","ttt",1858561240),ttt,new cljs.core.Keyword(null,"printable","printable",-928999004),true], null))], 0))], 0))),daiquiri.interpreter.interpret(predict_prostate.results.printable.break_before.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),(function (){var G__48616 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("print","sum-title","print/sum-title",427959026),"In Summary"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__48616) : ttt.call(null,G__48616));
})()], null),predict_prostate.results.text.results_in_text(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"printable","printable",-928999004),true,new cljs.core.Keyword(null,"ttt","ttt",1858561240),ttt], null))], 0))),daiquiri.interpreter.interpret(predict_prostate.results.printable.break_before.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),(function (){var G__48618 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("print","potharm-title","print/potharm-title",-1176889073),"Potential Harms of treatments"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__48618) : ttt.call(null,G__48618));
})()], null),predict_prostate.results.sidefx.results_in_sidefx(ttt)], 0))),predict_prostate.layout.header.footer()]:[daiquiri.interpreter.interpret(attrs48601),daiquiri.interpreter.interpret(predict_prostate.results.printable.break_before.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([predict_prostate.results.printable.avoid_break.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),(function (){var G__48620 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("print","surv-curve","print/surv-curve",-1081795857),"Survival curve"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__48620) : ttt.call(null,G__48620));
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"100%",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"0%"], null)], null),predict_prostate.results.curves.results_in_curves(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"printable","printable",-928999004),true,new cljs.core.Keyword(null,"ttt","ttt",1858561240),ttt], null))], null)], 0))], 0))),daiquiri.interpreter.interpret(predict_prostate.results.printable.break_before.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([predict_prostate.results.printable.avoid_break.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),(function (){var G__48623 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("print","surv-table-1","print/surv-table-1",472241572),"Survival table"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__48623) : ttt.call(null,G__48623));
})()," - ",rum.core.react(predict_prostate.state.run_time.year_selected())," ",(function (){var G__48624 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("print","surv-table-2","print/surv-table-2",-551388149),"years after diagnosis."], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__48624) : ttt.call(null,G__48624));
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"60%",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"0%"], null)], null),predict_prostate.results.table.results_in_table(ttt)], null)], 0))], 0))),daiquiri.interpreter.interpret(predict_prostate.results.printable.break_before.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([predict_prostate.results.printable.avoid_break.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),(function (){var G__48626 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("print","surv-chart","print/surv-chart",-469806984),"Survival chart"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__48626) : ttt.call(null,G__48626));
})()], null),predict_prostate.results.charts.results_in_charts(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"printable","printable",-928999004),true,new cljs.core.Keyword(null,"ttt","ttt",1858561240),ttt], null))], 0))], 0))),daiquiri.interpreter.interpret(predict_prostate.results.printable.break_before.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([predict_prostate.results.printable.avoid_break.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),(function (){var G__48629 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("print","icarray-1","print/icarray-1",-2007539192),"Icon array showing"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__48629) : ttt.call(null,G__48629));
})()," ",rum.core.react(predict_prostate.state.run_time.year_selected())," ",(function (){var G__48630 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("print","icarray-2","print/icarray-2",-551489289),"year outcomes for 100 men"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__48630) : ttt.call(null,G__48630));
})()], null),predict_prostate.results.icons.results_in_icons_STAR_(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ttt","ttt",1858561240),ttt,new cljs.core.Keyword(null,"printable","printable",-928999004),true], null))], 0))], 0))),daiquiri.interpreter.interpret(predict_prostate.results.printable.break_before.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),(function (){var G__48632 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("print","sum-title","print/sum-title",427959026),"In Summary"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__48632) : ttt.call(null,G__48632));
})()], null),predict_prostate.results.text.results_in_text(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"printable","printable",-928999004),true,new cljs.core.Keyword(null,"ttt","ttt",1858561240),ttt], null))], 0))),daiquiri.interpreter.interpret(predict_prostate.results.printable.break_before.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),(function (){var G__48634 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("print","potharm-title","print/potharm-title",-1176889073),"Potential Harms of treatments"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__48634) : ttt.call(null,G__48634));
})()], null),predict_prostate.results.sidefx.results_in_sidefx(ttt)], 0))),predict_prostate.layout.header.footer()]));
})()]);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,predict_prostate.mixins.set_default(new cljs.core.Keyword(null,"result-year","result-year",1413238532))], null),"predict-prostate.results.printable/results-in-print");

//# sourceMappingURL=predict_prostate.results.printable.js.map
