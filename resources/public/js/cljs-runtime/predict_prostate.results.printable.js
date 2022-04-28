goog.provide('predict_prostate.results.printable');
predict_prostate.results.printable.avoid_break = (function predict_prostate$results$printable$avoid_break(var_args){
var args__4824__auto__ = [];
var len__4818__auto___32665 = arguments.length;
var i__4819__auto___32666 = (0);
while(true){
if((i__4819__auto___32666 < len__4818__auto___32665)){
args__4824__auto__.push((arguments[i__4819__auto___32666]));

var G__32667 = (i__4819__auto___32666 + (1));
i__4819__auto___32666 = G__32667;
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
(predict_prostate.results.printable.avoid_break.cljs$lang$applyTo = (function (seq32381){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32381));
}));

predict_prostate.results.printable.ttt_input_label = (function predict_prostate$results$printable$ttt_input_label(ttt,key){
return predict_prostate.components.util.widget_ttt(ttt,"help",key,predict_prostate.state.run_time.input_label(key));
});
predict_prostate.results.printable.break_before = (function predict_prostate$results$printable$break_before(var_args){
var args__4824__auto__ = [];
var len__4818__auto___32673 = arguments.length;
var i__4819__auto___32674 = (0);
while(true){
if((i__4819__auto___32674 < len__4818__auto___32673)){
args__4824__auto__.push((arguments[i__4819__auto___32674]));

var G__32675 = (i__4819__auto___32674 + (1));
i__4819__auto___32674 = G__32675;
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
(predict_prostate.results.printable.break_before.cljs$lang$applyTo = (function (seq32382){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32382));
}));

predict_prostate.results.printable.option_range = (function predict_prostate$results$printable$option_range(n){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.str),cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),n)));
});
predict_prostate.results.printable.inputs_in_print = rum.core.lazy_build(rum.core.build_defc,(function (ttt){
return daiquiri.core.create_element("div",{'className':"row"},[daiquiri.core.create_element("div",{'className':"col-sm-8 col-sm-offset-2"},[daiquiri.core.create_element("table",{'style':{'fontSize':"16px"},'className':"table table-bordered table-responsive"},[daiquiri.core.create_element("thead",null,[daiquiri.core.create_element("tr",null,[(function (){var attrs32385 = (function (){var G__32389 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("print","input","print/input",714239080),"Input"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__32389) : ttt.call(null,G__32389));
})();
return daiquiri.core.create_element("th",((cljs.core.map_QMARK_(attrs32385))?daiquiri.interpreter.element_attributes(attrs32385):null),((cljs.core.map_QMARK_(attrs32385))?null:[daiquiri.interpreter.interpret(attrs32385)]));
})(),(function (){var attrs32388 = (function (){var G__32390 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("print","value","print/value",412953628),"Value"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__32390) : ttt.call(null,G__32390));
})();
return daiquiri.core.create_element("th",((cljs.core.map_QMARK_(attrs32388))?daiquiri.interpreter.element_attributes(attrs32388):null),((cljs.core.map_QMARK_(attrs32388))?null:[daiquiri.interpreter.interpret(attrs32388)]));
})()])]),daiquiri.core.create_element("tbody",null,[daiquiri.core.create_element("tr",null,[(function (){var attrs32391 = predict_prostate.results.printable.ttt_input_label(ttt,new cljs.core.Keyword(null,"age","age",-604307804));
return daiquiri.core.create_element("td",((cljs.core.map_QMARK_(attrs32391))?daiquiri.interpreter.element_attributes(attrs32391):null),((cljs.core.map_QMARK_(attrs32391))?null:[daiquiri.interpreter.interpret(attrs32391)]));
})(),(function (){var attrs32392 = rum.core.react(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"age","age",-604307804)));
return daiquiri.core.create_element("td",((cljs.core.map_QMARK_(attrs32392))?daiquiri.interpreter.element_attributes(attrs32392):null),((cljs.core.map_QMARK_(attrs32392))?null:[daiquiri.interpreter.interpret(attrs32392)]));
})()]),daiquiri.core.create_element("tr",null,[(function (){var attrs32393 = predict_prostate.results.printable.ttt_input_label(ttt,new cljs.core.Keyword(null,"psa","psa",-321761459));
return daiquiri.core.create_element("td",((cljs.core.map_QMARK_(attrs32393))?daiquiri.interpreter.element_attributes(attrs32393):null),((cljs.core.map_QMARK_(attrs32393))?null:[daiquiri.interpreter.interpret(attrs32393)]));
})(),(function (){var attrs32394 = rum.core.react(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"psa","psa",-321761459)));
return daiquiri.core.create_element("td",((cljs.core.map_QMARK_(attrs32394))?daiquiri.interpreter.element_attributes(attrs32394):null),((cljs.core.map_QMARK_(attrs32394))?null:[daiquiri.interpreter.interpret(attrs32394)]));
})()]),daiquiri.core.create_element("tr",null,[(function (){var attrs32395 = predict_prostate.results.printable.ttt_input_label(ttt,new cljs.core.Keyword(null,"t-stage","t-stage",-1315750984));
return daiquiri.core.create_element("td",((cljs.core.map_QMARK_(attrs32395))?daiquiri.interpreter.element_attributes(attrs32395):null),((cljs.core.map_QMARK_(attrs32395))?[(cljs.core.truth_((function (){var G__32402 = rum.core.react(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"t-stage","t-stage",-1315750984)));
var fexpr__32401 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(4),null], null), null);
return (fexpr__32401.cljs$core$IFn$_invoke$arity$1 ? fexpr__32401.cljs$core$IFn$_invoke$arity$1(G__32402) : fexpr__32401.call(null,G__32402));
})())?daiquiri.core.create_element("div",{'style':{'color':"#686868",'marginTop':(0)}},[daiquiri.core.create_element("i",{'aria-hidden':"true",'style':{'color':"orange",'paddingRight':(5)},'className':"fa fa-exclamation-triangle"},null),daiquiri.interpreter.interpret((function (){var G__32406 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("patient","lwtstages","patient/lwtstages",1523511410),"The tool is less well tested in higher stages"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__32406) : ttt.call(null,G__32406));
})())]):null)]:[daiquiri.interpreter.interpret(attrs32395),(cljs.core.truth_((function (){var G__32408 = rum.core.react(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"t-stage","t-stage",-1315750984)));
var fexpr__32407 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(4),null], null), null);
return (fexpr__32407.cljs$core$IFn$_invoke$arity$1 ? fexpr__32407.cljs$core$IFn$_invoke$arity$1(G__32408) : fexpr__32407.call(null,G__32408));
})())?daiquiri.core.create_element("div",{'style':{'color':"#686868",'marginTop':(0)}},[daiquiri.core.create_element("i",{'aria-hidden':"true",'style':{'color':"orange",'paddingRight':(5)},'className':"fa fa-exclamation-triangle"},null),daiquiri.interpreter.interpret((function (){var G__32412 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("patient","lwtstages","patient/lwtstages",1523511410),"The tool is less well tested in higher stages"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__32412) : ttt.call(null,G__32412));
})())]):null)]));
})(),(function (){var attrs32400 = (function (){var G__32414 = rum.core.react(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"t-stage","t-stage",-1315750984)));
var fexpr__32413 = predict_prostate.results.printable.option_range((5));
return (fexpr__32413.cljs$core$IFn$_invoke$arity$1 ? fexpr__32413.cljs$core$IFn$_invoke$arity$1(G__32414) : fexpr__32413.call(null,G__32414));
})();
return daiquiri.core.create_element("td",((cljs.core.map_QMARK_(attrs32400))?daiquiri.interpreter.element_attributes(attrs32400):null),((cljs.core.map_QMARK_(attrs32400))?null:[daiquiri.interpreter.interpret(attrs32400)]));
})()]),daiquiri.core.create_element("tr",null,[(function (){var attrs32415 = predict_prostate.results.printable.ttt_input_label(ttt,new cljs.core.Keyword(null,"h-admissions","h-admissions",-1503094844));
return daiquiri.core.create_element("td",((cljs.core.map_QMARK_(attrs32415))?daiquiri.interpreter.element_attributes(attrs32415):null),((cljs.core.map_QMARK_(attrs32415))?null:[daiquiri.interpreter.interpret(attrs32415)]));
})(),(function (){var attrs32420 = (function (){var G__32422 = rum.core.react(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"h-admissions","h-admissions",-1503094844)));
var fexpr__32421 = new cljs.core.PersistentArrayMap(null, 2, [(0),"No",(1),"Yes"], null);
return (fexpr__32421.cljs$core$IFn$_invoke$arity$1 ? fexpr__32421.cljs$core$IFn$_invoke$arity$1(G__32422) : fexpr__32421.call(null,G__32422));
})();
return daiquiri.core.create_element("td",((cljs.core.map_QMARK_(attrs32420))?daiquiri.interpreter.element_attributes(attrs32420):null),((cljs.core.map_QMARK_(attrs32420))?null:[daiquiri.interpreter.interpret(attrs32420)]));
})()]),(((rum.core.react(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"h-admissions","h-admissions",-1503094844))) > (0)))?daiquiri.core.create_element("tr",null,[(function (){var attrs32423 = predict_prostate.results.printable.ttt_input_label(ttt,new cljs.core.Keyword(null,"charlson-comorbidity","charlson-comorbidity",-633596907));
return daiquiri.core.create_element("td",((cljs.core.map_QMARK_(attrs32423))?daiquiri.interpreter.element_attributes(attrs32423):null),((cljs.core.map_QMARK_(attrs32423))?null:[daiquiri.interpreter.interpret(attrs32423)]));
})(),(function (){var attrs32428 = (function (){var G__32430 = rum.core.react(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"charlson-comorbidity","charlson-comorbidity",-633596907)));
var fexpr__32429 = new cljs.core.PersistentArrayMap(null, 2, [(0),"No",(1),"Yes"], null);
return (fexpr__32429.cljs$core$IFn$_invoke$arity$1 ? fexpr__32429.cljs$core$IFn$_invoke$arity$1(G__32430) : fexpr__32429.call(null,G__32430));
})();
return daiquiri.core.create_element("td",((cljs.core.map_QMARK_(attrs32428))?daiquiri.interpreter.element_attributes(attrs32428):null),((cljs.core.map_QMARK_(attrs32428))?null:[daiquiri.interpreter.interpret(attrs32428)]));
})()]):null),daiquiri.core.create_element("tr",null,[(function (){var attrs32431 = predict_prostate.results.printable.ttt_input_label(ttt,new cljs.core.Keyword(null,"brca","brca",-1943532098));
return daiquiri.core.create_element("td",((cljs.core.map_QMARK_(attrs32431))?daiquiri.interpreter.element_attributes(attrs32431):null),((cljs.core.map_QMARK_(attrs32431))?null:[daiquiri.interpreter.interpret(attrs32431)]));
})(),(function (){var attrs32436 = (function (){var G__32438 = rum.core.react(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"brca","brca",-1943532098)));
var fexpr__32437 = new cljs.core.PersistentArrayMap(null, 2, [(0),"No",(1),"Yes"], null);
return (fexpr__32437.cljs$core$IFn$_invoke$arity$1 ? fexpr__32437.cljs$core$IFn$_invoke$arity$1(G__32438) : fexpr__32437.call(null,G__32438));
})();
return daiquiri.core.create_element("td",((cljs.core.map_QMARK_(attrs32436))?daiquiri.interpreter.element_attributes(attrs32436):null),((cljs.core.map_QMARK_(attrs32436))?null:[daiquiri.interpreter.interpret(attrs32436)]));
})()]),daiquiri.core.create_element("tr",null,[(function (){var attrs32439 = predict_prostate.results.printable.ttt_input_label(ttt,new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518));
return daiquiri.core.create_element("td",((cljs.core.map_QMARK_(attrs32439))?daiquiri.interpreter.element_attributes(attrs32439):null),((cljs.core.map_QMARK_(attrs32439))?[(cljs.core.truth_((function (){var G__32446 = rum.core.react(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518)));
var fexpr__32445 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(4),null,(5),null], null), null);
return (fexpr__32445.cljs$core$IFn$_invoke$arity$1 ? fexpr__32445.cljs$core$IFn$_invoke$arity$1(G__32446) : fexpr__32445.call(null,G__32446));
})())?daiquiri.core.create_element("div",{'style':{'color':"#686868",'marginTop':(0)}},[daiquiri.core.create_element("i",{'aria-hidden':"true",'style':{'color':"orange",'paddingRight':(5)},'className':"fa fa-exclamation-triangle"},null),daiquiri.interpreter.interpret((function (){var G__32450 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tumour","lwt","tumour/lwt",-1253032781),"The tool is less well tested for higher scores"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__32450) : ttt.call(null,G__32450));
})())]):null)]:[daiquiri.interpreter.interpret(attrs32439),(cljs.core.truth_((function (){var G__32452 = rum.core.react(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518)));
var fexpr__32451 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(4),null,(5),null], null), null);
return (fexpr__32451.cljs$core$IFn$_invoke$arity$1 ? fexpr__32451.cljs$core$IFn$_invoke$arity$1(G__32452) : fexpr__32451.call(null,G__32452));
})())?daiquiri.core.create_element("div",{'style':{'color':"#686868",'marginTop':(0)}},[daiquiri.core.create_element("i",{'aria-hidden':"true",'style':{'color':"orange",'paddingRight':(5)},'className':"fa fa-exclamation-triangle"},null),daiquiri.interpreter.interpret((function (){var G__32456 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tumour","lwt","tumour/lwt",-1253032781),"The tool is less well tested for higher scores"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__32456) : ttt.call(null,G__32456));
})())]):null)]));
})(),(function (){var attrs32444 = (function (){var G__32458 = rum.core.react(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518)));
var fexpr__32457 = predict_prostate.results.printable.option_range((6));
return (fexpr__32457.cljs$core$IFn$_invoke$arity$1 ? fexpr__32457.cljs$core$IFn$_invoke$arity$1(G__32458) : fexpr__32457.call(null,G__32458));
})();
return daiquiri.core.create_element("td",((cljs.core.map_QMARK_(attrs32444))?daiquiri.interpreter.element_attributes(attrs32444):null),((cljs.core.map_QMARK_(attrs32444))?null:[daiquiri.interpreter.interpret(attrs32444)]));
})()]),daiquiri.core.create_element("tr",null,[(function (){var attrs32461 = predict_prostate.results.printable.ttt_input_label(ttt,new cljs.core.Keyword(null,"gleason","gleason",-2044470526));
return daiquiri.core.create_element("td",((cljs.core.map_QMARK_(attrs32461))?daiquiri.interpreter.element_attributes(attrs32461):null),((cljs.core.map_QMARK_(attrs32461))?[(cljs.core.truth_((function (){var G__32474 = rum.core.react(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518)));
var fexpr__32473 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(4),null,(5),null], null), null);
return (fexpr__32473.cljs$core$IFn$_invoke$arity$1 ? fexpr__32473.cljs$core$IFn$_invoke$arity$1(G__32474) : fexpr__32473.call(null,G__32474));
})())?daiquiri.core.create_element("div",{'style':{'color':"#686868",'marginTop':(0)}},[daiquiri.core.create_element("i",{'aria-hidden':"true",'style':{'color':"orange",'paddingRight':(5)},'className':"fa fa-exclamation-triangle"},null),daiquiri.interpreter.interpret((function (){var G__32484 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tumour","lwt","tumour/lwt",-1253032781),"The tool is less well tested for higher scores"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__32484) : ttt.call(null,G__32484));
})())]):null)]:[daiquiri.interpreter.interpret(attrs32461),(cljs.core.truth_((function (){var G__32487 = rum.core.react(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518)));
var fexpr__32486 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(4),null,(5),null], null), null);
return (fexpr__32486.cljs$core$IFn$_invoke$arity$1 ? fexpr__32486.cljs$core$IFn$_invoke$arity$1(G__32487) : fexpr__32486.call(null,G__32487));
})())?daiquiri.core.create_element("div",{'style':{'color':"#686868",'marginTop':(0)}},[daiquiri.core.create_element("i",{'aria-hidden':"true",'style':{'color':"orange",'paddingRight':(5)},'className':"fa fa-exclamation-triangle"},null),daiquiri.interpreter.interpret((function (){var G__32495 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tumour","lwt","tumour/lwt",-1253032781),"The tool is less well tested for higher scores"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__32495) : ttt.call(null,G__32495));
})())]):null)]));
})(),(function (){var attrs32472 = (function (){var G__32499 = rum.core.react(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526)));
var fexpr__32498 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"3+3"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"3+4"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"4+3"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),"8"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),"9 or 10"], null)], null));
return (fexpr__32498.cljs$core$IFn$_invoke$arity$1 ? fexpr__32498.cljs$core$IFn$_invoke$arity$1(G__32499) : fexpr__32498.call(null,G__32499));
})();
return daiquiri.core.create_element("td",((cljs.core.map_QMARK_(attrs32472))?daiquiri.interpreter.element_attributes(attrs32472):null),((cljs.core.map_QMARK_(attrs32472))?null:[daiquiri.interpreter.interpret(attrs32472)]));
})()]),daiquiri.core.create_element("tr",null,[(function (){var attrs32504 = predict_prostate.results.printable.ttt_input_label(ttt,new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666));
return daiquiri.core.create_element("td",((cljs.core.map_QMARK_(attrs32504))?daiquiri.interpreter.element_attributes(attrs32504):null),((cljs.core.map_QMARK_(attrs32504))?null:[daiquiri.interpreter.interpret(attrs32504)]));
})(),(function (){var attrs32505 = rum.core.react(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666)));
return daiquiri.core.create_element("td",((cljs.core.map_QMARK_(attrs32505))?daiquiri.interpreter.element_attributes(attrs32505):null),((cljs.core.map_QMARK_(attrs32505))?null:[daiquiri.interpreter.interpret(attrs32505)]));
})()]),daiquiri.core.create_element("tr",null,[(function (){var attrs32510 = predict_prostate.results.printable.ttt_input_label(ttt,new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520));
return daiquiri.core.create_element("td",((cljs.core.map_QMARK_(attrs32510))?daiquiri.interpreter.element_attributes(attrs32510):null),((cljs.core.map_QMARK_(attrs32510))?null:[daiquiri.interpreter.interpret(attrs32510)]));
})(),(function (){var attrs32512 = rum.core.react(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520)));
return daiquiri.core.create_element("td",((cljs.core.map_QMARK_(attrs32512))?daiquiri.interpreter.element_attributes(attrs32512):null),((cljs.core.map_QMARK_(attrs32512))?null:[daiquiri.interpreter.interpret(attrs32512)]));
})()])])])])]);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"predict-prostate.results.printable/inputs-in-print");
predict_prostate.results.printable.treatment_note = rum.core.lazy_build(rum.core.build_defc,(function (title,content){
var attrs32529 = predict_prostate.results.printable.avoid_break.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),title], null),content], 0));
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs32529))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["col-xs-12"], null)], null),attrs32529], 0))):{'className':"col-xs-12"}),((cljs.core.map_QMARK_(attrs32529))?null:[daiquiri.interpreter.interpret(attrs32529)]));
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
return daiquiri.core.create_element("div",{'className':"row"},[daiquiri.core.create_element("div",{'className':"col-sm-12"},[daiquiri.core.create_element("h2",null,["Treatments after Surgery"]),daiquiri.core.create_element("section",{'className':"print-bigger"},["Selected treatments after surgery are:",(cljs.core.truth_(horm)?(function (){var attrs32573 = horm_label;
return daiquiri.core.create_element("li",((cljs.core.map_QMARK_(attrs32573))?daiquiri.interpreter.element_attributes(attrs32573):null),((cljs.core.map_QMARK_(attrs32573))?null:[daiquiri.interpreter.interpret(attrs32573)]));
})():null),(cljs.core.truth_(chemo)?(function (){var attrs32574 = chemo_label;
return daiquiri.core.create_element("li",((cljs.core.map_QMARK_(attrs32574))?daiquiri.interpreter.element_attributes(attrs32574):null),((cljs.core.map_QMARK_(attrs32574))?[" (",daiquiri.interpreter.interpret((function (){var G__32585 = rum.core.react(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"chemo","chemo",-1212386012)));
var fexpr__32584 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"3rd","3rd",-1568627554),"3rd generation",new cljs.core.Keyword(null,"2nd","2nd",1952531196),"2nd generation",new cljs.core.Keyword(null,"none","none",1333468478),"None"], null);
return (fexpr__32584.cljs$core$IFn$_invoke$arity$1 ? fexpr__32584.cljs$core$IFn$_invoke$arity$1(G__32585) : fexpr__32584.call(null,G__32585));
})()),")"]:[daiquiri.interpreter.interpret(attrs32574)," (",daiquiri.interpreter.interpret((function (){var G__32592 = rum.core.react(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"chemo","chemo",-1212386012)));
var fexpr__32591 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"3rd","3rd",-1568627554),"3rd generation",new cljs.core.Keyword(null,"2nd","2nd",1952531196),"2nd generation",new cljs.core.Keyword(null,"none","none",1333468478),"None"], null);
return (fexpr__32591.cljs$core$IFn$_invoke$arity$1 ? fexpr__32591.cljs$core$IFn$_invoke$arity$1(G__32592) : fexpr__32591.call(null,G__32592));
})()),")"]));
})():null),(cljs.core.truth_(tra)?(function (){var attrs32575 = tra_label;
return daiquiri.core.create_element("li",((cljs.core.map_QMARK_(attrs32575))?daiquiri.interpreter.element_attributes(attrs32575):null),((cljs.core.map_QMARK_(attrs32575))?null:[daiquiri.interpreter.interpret(attrs32575)]));
})():null),((bis)?(function (){var attrs32576 = bis_label;
return daiquiri.core.create_element("li",((cljs.core.map_QMARK_(attrs32576))?daiquiri.interpreter.element_attributes(attrs32576):null),((cljs.core.map_QMARK_(attrs32576))?null:[daiquiri.interpreter.interpret(attrs32576)]));
})():null)]),(function (){var attrs32572 = (cljs.core.truth_(horm)?predict_prostate.results.printable.treatment_note(horm_label,(cljs.core.truth_(horm)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.rest(predict_prostate.content_reader.section.cljs$core$IFn$_invoke$arity$2(ttt,"hormone-therapy"))], null):null)):null);
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs32572))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["row","print-smaller"], null)], null),attrs32572], 0))):{'className':"row print-smaller"}),((cljs.core.map_QMARK_(attrs32572))?[(cljs.core.truth_(chemo)?predict_prostate.results.printable.treatment_note(chemo_label,(cljs.core.truth_(chemo)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.rest(predict_prostate.content_reader.section.cljs$core$IFn$_invoke$arity$2(ttt,"chemotherapy"))], null):null)):null),(cljs.core.truth_(tra)?predict_prostate.results.printable.treatment_note(tra_label,(cljs.core.truth_(tra)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.rest(predict_prostate.content_reader.section.cljs$core$IFn$_invoke$arity$2(ttt,"trastuzumab"))], null):null)):null),((bis)?predict_prostate.results.printable.treatment_note(bis_label,((bis)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.rest(predict_prostate.content_reader.section.cljs$core$IFn$_invoke$arity$2(ttt,"bisphosphonates"))], null):null)):null)]:[daiquiri.interpreter.interpret(attrs32572),(cljs.core.truth_(chemo)?predict_prostate.results.printable.treatment_note(chemo_label,(cljs.core.truth_(chemo)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.rest(predict_prostate.content_reader.section.cljs$core$IFn$_invoke$arity$2(ttt,"chemotherapy"))], null):null)):null),(cljs.core.truth_(tra)?predict_prostate.results.printable.treatment_note(tra_label,(cljs.core.truth_(tra)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.rest(predict_prostate.content_reader.section.cljs$core$IFn$_invoke$arity$2(ttt,"trastuzumab"))], null):null)):null),((bis)?predict_prostate.results.printable.treatment_note(bis_label,((bis)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.rest(predict_prostate.content_reader.section.cljs$core$IFn$_invoke$arity$2(ttt,"bisphosphonates"))], null):null)):null)]));
})()])]);
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"predict-prostate.results.printable/treatments-in-print");
predict_prostate.results.printable.results_in_print = rum.core.lazy_build(rum.core.build_defc,(function (ttt){
return daiquiri.core.create_element("div",{'className':"row"},[(function (){var attrs32609 = predict_prostate.results.printable.avoid_break.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),(function (){var G__32610 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("print","inputs","print/inputs",1039888383),"Inputs"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__32610) : ttt.call(null,G__32610));
})()], null),predict_prostate.results.printable.inputs_in_print(ttt)], 0));
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs32609))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["col-sm-12"], null)], null),attrs32609], 0))):{'className':"col-sm-12"}),((cljs.core.map_QMARK_(attrs32609))?[daiquiri.interpreter.interpret(predict_prostate.results.printable.break_before.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([predict_prostate.results.printable.avoid_break.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),(function (){var G__32612 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("print","surv-curve","print/surv-curve",-1081795857),"Survival curve"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__32612) : ttt.call(null,G__32612));
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"100%",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"0%"], null)], null),predict_prostate.results.curves.results_in_curves(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"printable","printable",-928999004),true,new cljs.core.Keyword(null,"ttt","ttt",1858561240),ttt], null))], null)], 0))], 0))),daiquiri.interpreter.interpret(predict_prostate.results.printable.break_before.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([predict_prostate.results.printable.avoid_break.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),(function (){var G__32615 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("print","surv-table-1","print/surv-table-1",472241572),"Survival table"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__32615) : ttt.call(null,G__32615));
})()," - ",rum.core.react(predict_prostate.state.run_time.year_selected())," ",(function (){var G__32616 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("print","surv-table-2","print/surv-table-2",-551388149),"years after diagnosis."], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__32616) : ttt.call(null,G__32616));
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"60%",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"0%"], null)], null),predict_prostate.results.table.results_in_table(ttt)], null)], 0))], 0))),daiquiri.interpreter.interpret(predict_prostate.results.printable.break_before.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([predict_prostate.results.printable.avoid_break.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),(function (){var G__32618 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("print","surv-chart","print/surv-chart",-469806984),"Survival chart"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__32618) : ttt.call(null,G__32618));
})()], null),predict_prostate.results.charts.results_in_charts(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"printable","printable",-928999004),true,new cljs.core.Keyword(null,"ttt","ttt",1858561240),ttt], null))], 0))], 0))),daiquiri.interpreter.interpret(predict_prostate.results.printable.break_before.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([predict_prostate.results.printable.avoid_break.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),(function (){var G__32621 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("print","icarray-1","print/icarray-1",-2007539192),"Icon array showing"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__32621) : ttt.call(null,G__32621));
})()," ",rum.core.react(predict_prostate.state.run_time.year_selected())," ",(function (){var G__32622 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("print","icarray-2","print/icarray-2",-551489289),"year outcomes for 100 men"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__32622) : ttt.call(null,G__32622));
})()], null),predict_prostate.results.icons.results_in_icons_STAR_(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ttt","ttt",1858561240),ttt,new cljs.core.Keyword(null,"printable","printable",-928999004),true], null))], 0))], 0))),daiquiri.interpreter.interpret(predict_prostate.results.printable.break_before.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),(function (){var G__32624 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("print","sum-title","print/sum-title",427959026),"In Summary"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__32624) : ttt.call(null,G__32624));
})()], null),predict_prostate.results.text.results_in_text(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"printable","printable",-928999004),true,new cljs.core.Keyword(null,"ttt","ttt",1858561240),ttt], null))], 0))),daiquiri.interpreter.interpret(predict_prostate.results.printable.break_before.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),(function (){var G__32626 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("print","potharm-title","print/potharm-title",-1176889073),"Potential Harms of treatments"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__32626) : ttt.call(null,G__32626));
})()], null),predict_prostate.results.sidefx.results_in_sidefx(ttt)], 0))),predict_prostate.layout.header.footer()]:[daiquiri.interpreter.interpret(attrs32609),daiquiri.interpreter.interpret(predict_prostate.results.printable.break_before.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([predict_prostate.results.printable.avoid_break.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),(function (){var G__32630 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("print","surv-curve","print/surv-curve",-1081795857),"Survival curve"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__32630) : ttt.call(null,G__32630));
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"100%",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"0%"], null)], null),predict_prostate.results.curves.results_in_curves(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"printable","printable",-928999004),true,new cljs.core.Keyword(null,"ttt","ttt",1858561240),ttt], null))], null)], 0))], 0))),daiquiri.interpreter.interpret(predict_prostate.results.printable.break_before.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([predict_prostate.results.printable.avoid_break.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),(function (){var G__32635 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("print","surv-table-1","print/surv-table-1",472241572),"Survival table"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__32635) : ttt.call(null,G__32635));
})()," - ",rum.core.react(predict_prostate.state.run_time.year_selected())," ",(function (){var G__32636 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("print","surv-table-2","print/surv-table-2",-551388149),"years after diagnosis."], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__32636) : ttt.call(null,G__32636));
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"60%",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"0%"], null)], null),predict_prostate.results.table.results_in_table(ttt)], null)], 0))], 0))),daiquiri.interpreter.interpret(predict_prostate.results.printable.break_before.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([predict_prostate.results.printable.avoid_break.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),(function (){var G__32639 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("print","surv-chart","print/surv-chart",-469806984),"Survival chart"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__32639) : ttt.call(null,G__32639));
})()], null),predict_prostate.results.charts.results_in_charts(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"printable","printable",-928999004),true,new cljs.core.Keyword(null,"ttt","ttt",1858561240),ttt], null))], 0))], 0))),daiquiri.interpreter.interpret(predict_prostate.results.printable.break_before.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([predict_prostate.results.printable.avoid_break.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),(function (){var G__32645 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("print","icarray-1","print/icarray-1",-2007539192),"Icon array showing"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__32645) : ttt.call(null,G__32645));
})()," ",rum.core.react(predict_prostate.state.run_time.year_selected())," ",(function (){var G__32647 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("print","icarray-2","print/icarray-2",-551489289),"year outcomes for 100 men"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__32647) : ttt.call(null,G__32647));
})()], null),predict_prostate.results.icons.results_in_icons_STAR_(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ttt","ttt",1858561240),ttt,new cljs.core.Keyword(null,"printable","printable",-928999004),true], null))], 0))], 0))),daiquiri.interpreter.interpret(predict_prostate.results.printable.break_before.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),(function (){var G__32650 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("print","sum-title","print/sum-title",427959026),"In Summary"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__32650) : ttt.call(null,G__32650));
})()], null),predict_prostate.results.text.results_in_text(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"printable","printable",-928999004),true,new cljs.core.Keyword(null,"ttt","ttt",1858561240),ttt], null))], 0))),daiquiri.interpreter.interpret(predict_prostate.results.printable.break_before.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),(function (){var G__32655 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("print","potharm-title","print/potharm-title",-1176889073),"Potential Harms of treatments"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__32655) : ttt.call(null,G__32655));
})()], null),predict_prostate.results.sidefx.results_in_sidefx(ttt)], 0))),predict_prostate.layout.header.footer()]));
})()]);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,predict_prostate.mixins.set_default(new cljs.core.Keyword(null,"result-year","result-year",1413238532))], null),"predict-prostate.results.printable/results-in-print");

//# sourceMappingURL=predict_prostate.results.printable.js.map
