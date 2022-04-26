goog.provide('predict_prostate.results.printable');
predict_prostate.results.printable.avoid_break = (function predict_prostate$results$printable$avoid_break(var_args){
var args__4824__auto__ = [];
var len__4818__auto___44385 = arguments.length;
var i__4819__auto___44386 = (0);
while(true){
if((i__4819__auto___44386 < len__4818__auto___44385)){
args__4824__auto__.push((arguments[i__4819__auto___44386]));

var G__44387 = (i__4819__auto___44386 + (1));
i__4819__auto___44386 = G__44387;
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
(predict_prostate.results.printable.avoid_break.cljs$lang$applyTo = (function (seq44221){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq44221));
}));

predict_prostate.results.printable.ttt_input_label = (function predict_prostate$results$printable$ttt_input_label(ttt,key){
return predict_prostate.components.util.widget_ttt(ttt,"help",key,predict_prostate.state.run_time.input_label(key));
});
predict_prostate.results.printable.break_before = (function predict_prostate$results$printable$break_before(var_args){
var args__4824__auto__ = [];
var len__4818__auto___44388 = arguments.length;
var i__4819__auto___44389 = (0);
while(true){
if((i__4819__auto___44389 < len__4818__auto___44388)){
args__4824__auto__.push((arguments[i__4819__auto___44389]));

var G__44390 = (i__4819__auto___44389 + (1));
i__4819__auto___44389 = G__44390;
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
(predict_prostate.results.printable.break_before.cljs$lang$applyTo = (function (seq44222){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq44222));
}));

predict_prostate.results.printable.option_range = (function predict_prostate$results$printable$option_range(n){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.str),cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),n)));
});
predict_prostate.results.printable.inputs_in_print = rum.core.lazy_build(rum.core.build_defc,(function (ttt){
return daiquiri.core.create_element("div",{'className':"row"},[daiquiri.core.create_element("div",{'className':"col-sm-8 col-sm-offset-2"},[daiquiri.core.create_element("table",{'style':{'fontSize':"16px"},'className':"table table-bordered table-responsive"},[daiquiri.core.create_element("thead",null,[daiquiri.core.create_element("tr",null,[(function (){var attrs44226 = (function (){var G__44231 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("print","input","print/input",714239080),"Input"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__44231) : ttt.call(null,G__44231));
})();
return daiquiri.core.create_element("th",((cljs.core.map_QMARK_(attrs44226))?daiquiri.interpreter.element_attributes(attrs44226):null),((cljs.core.map_QMARK_(attrs44226))?null:[daiquiri.interpreter.interpret(attrs44226)]));
})(),(function (){var attrs44230 = (function (){var G__44232 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("print","value","print/value",412953628),"Value"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__44232) : ttt.call(null,G__44232));
})();
return daiquiri.core.create_element("th",((cljs.core.map_QMARK_(attrs44230))?daiquiri.interpreter.element_attributes(attrs44230):null),((cljs.core.map_QMARK_(attrs44230))?null:[daiquiri.interpreter.interpret(attrs44230)]));
})()])]),daiquiri.core.create_element("tbody",null,[daiquiri.core.create_element("tr",null,[(function (){var attrs44233 = predict_prostate.results.printable.ttt_input_label(ttt,new cljs.core.Keyword(null,"age","age",-604307804));
return daiquiri.core.create_element("td",((cljs.core.map_QMARK_(attrs44233))?daiquiri.interpreter.element_attributes(attrs44233):null),((cljs.core.map_QMARK_(attrs44233))?null:[daiquiri.interpreter.interpret(attrs44233)]));
})(),(function (){var attrs44234 = rum.core.react(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"age","age",-604307804)));
return daiquiri.core.create_element("td",((cljs.core.map_QMARK_(attrs44234))?daiquiri.interpreter.element_attributes(attrs44234):null),((cljs.core.map_QMARK_(attrs44234))?null:[daiquiri.interpreter.interpret(attrs44234)]));
})()]),daiquiri.core.create_element("tr",null,[(function (){var attrs44235 = predict_prostate.results.printable.ttt_input_label(ttt,new cljs.core.Keyword(null,"psa","psa",-321761459));
return daiquiri.core.create_element("td",((cljs.core.map_QMARK_(attrs44235))?daiquiri.interpreter.element_attributes(attrs44235):null),((cljs.core.map_QMARK_(attrs44235))?null:[daiquiri.interpreter.interpret(attrs44235)]));
})(),(function (){var attrs44236 = rum.core.react(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"psa","psa",-321761459)));
return daiquiri.core.create_element("td",((cljs.core.map_QMARK_(attrs44236))?daiquiri.interpreter.element_attributes(attrs44236):null),((cljs.core.map_QMARK_(attrs44236))?null:[daiquiri.interpreter.interpret(attrs44236)]));
})()]),daiquiri.core.create_element("tr",null,[(function (){var attrs44239 = predict_prostate.results.printable.ttt_input_label(ttt,new cljs.core.Keyword(null,"t-stage","t-stage",-1315750984));
return daiquiri.core.create_element("td",((cljs.core.map_QMARK_(attrs44239))?daiquiri.interpreter.element_attributes(attrs44239):null),((cljs.core.map_QMARK_(attrs44239))?[(cljs.core.truth_((function (){var G__44246 = rum.core.react(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"t-stage","t-stage",-1315750984)));
var fexpr__44245 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(4),null], null), null);
return (fexpr__44245.cljs$core$IFn$_invoke$arity$1 ? fexpr__44245.cljs$core$IFn$_invoke$arity$1(G__44246) : fexpr__44245.call(null,G__44246));
})())?daiquiri.core.create_element("div",{'style':{'color':"#686868",'marginTop':(0)}},[daiquiri.core.create_element("i",{'aria-hidden':"true",'style':{'color':"orange",'paddingRight':(5)},'className':"fa fa-exclamation-triangle"},null),daiquiri.interpreter.interpret((function (){var G__44250 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("patient","lwtstages","patient/lwtstages",1523511410),"The tool is less well tested in higher stages"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__44250) : ttt.call(null,G__44250));
})())]):null)]:[daiquiri.interpreter.interpret(attrs44239),(cljs.core.truth_((function (){var G__44252 = rum.core.react(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"t-stage","t-stage",-1315750984)));
var fexpr__44251 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(4),null], null), null);
return (fexpr__44251.cljs$core$IFn$_invoke$arity$1 ? fexpr__44251.cljs$core$IFn$_invoke$arity$1(G__44252) : fexpr__44251.call(null,G__44252));
})())?daiquiri.core.create_element("div",{'style':{'color':"#686868",'marginTop':(0)}},[daiquiri.core.create_element("i",{'aria-hidden':"true",'style':{'color':"orange",'paddingRight':(5)},'className':"fa fa-exclamation-triangle"},null),daiquiri.interpreter.interpret((function (){var G__44256 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("patient","lwtstages","patient/lwtstages",1523511410),"The tool is less well tested in higher stages"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__44256) : ttt.call(null,G__44256));
})())]):null)]));
})(),(function (){var attrs44244 = (function (){var G__44258 = rum.core.react(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"t-stage","t-stage",-1315750984)));
var fexpr__44257 = predict_prostate.results.printable.option_range((5));
return (fexpr__44257.cljs$core$IFn$_invoke$arity$1 ? fexpr__44257.cljs$core$IFn$_invoke$arity$1(G__44258) : fexpr__44257.call(null,G__44258));
})();
return daiquiri.core.create_element("td",((cljs.core.map_QMARK_(attrs44244))?daiquiri.interpreter.element_attributes(attrs44244):null),((cljs.core.map_QMARK_(attrs44244))?null:[daiquiri.interpreter.interpret(attrs44244)]));
})()]),daiquiri.core.create_element("tr",null,[(function (){var attrs44259 = predict_prostate.results.printable.ttt_input_label(ttt,new cljs.core.Keyword(null,"h-admissions","h-admissions",-1503094844));
return daiquiri.core.create_element("td",((cljs.core.map_QMARK_(attrs44259))?daiquiri.interpreter.element_attributes(attrs44259):null),((cljs.core.map_QMARK_(attrs44259))?null:[daiquiri.interpreter.interpret(attrs44259)]));
})(),(function (){var attrs44264 = (function (){var G__44266 = rum.core.react(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"h-admissions","h-admissions",-1503094844)));
var fexpr__44265 = new cljs.core.PersistentArrayMap(null, 2, [(0),"No",(1),"Yes"], null);
return (fexpr__44265.cljs$core$IFn$_invoke$arity$1 ? fexpr__44265.cljs$core$IFn$_invoke$arity$1(G__44266) : fexpr__44265.call(null,G__44266));
})();
return daiquiri.core.create_element("td",((cljs.core.map_QMARK_(attrs44264))?daiquiri.interpreter.element_attributes(attrs44264):null),((cljs.core.map_QMARK_(attrs44264))?null:[daiquiri.interpreter.interpret(attrs44264)]));
})()]),(((rum.core.react(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"h-admissions","h-admissions",-1503094844))) > (0)))?daiquiri.core.create_element("tr",null,[(function (){var attrs44267 = predict_prostate.results.printable.ttt_input_label(ttt,new cljs.core.Keyword(null,"charlson-comorbidity","charlson-comorbidity",-633596907));
return daiquiri.core.create_element("td",((cljs.core.map_QMARK_(attrs44267))?daiquiri.interpreter.element_attributes(attrs44267):null),((cljs.core.map_QMARK_(attrs44267))?null:[daiquiri.interpreter.interpret(attrs44267)]));
})(),(function (){var attrs44272 = (function (){var G__44274 = rum.core.react(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"charlson-comorbidity","charlson-comorbidity",-633596907)));
var fexpr__44273 = new cljs.core.PersistentArrayMap(null, 2, [(0),"No",(1),"Yes"], null);
return (fexpr__44273.cljs$core$IFn$_invoke$arity$1 ? fexpr__44273.cljs$core$IFn$_invoke$arity$1(G__44274) : fexpr__44273.call(null,G__44274));
})();
return daiquiri.core.create_element("td",((cljs.core.map_QMARK_(attrs44272))?daiquiri.interpreter.element_attributes(attrs44272):null),((cljs.core.map_QMARK_(attrs44272))?null:[daiquiri.interpreter.interpret(attrs44272)]));
})()]):null),daiquiri.core.create_element("tr",null,[(function (){var attrs44275 = predict_prostate.results.printable.ttt_input_label(ttt,new cljs.core.Keyword(null,"brca","brca",-1943532098));
return daiquiri.core.create_element("td",((cljs.core.map_QMARK_(attrs44275))?daiquiri.interpreter.element_attributes(attrs44275):null),((cljs.core.map_QMARK_(attrs44275))?null:[daiquiri.interpreter.interpret(attrs44275)]));
})(),(function (){var attrs44280 = (function (){var G__44282 = rum.core.react(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"brca","brca",-1943532098)));
var fexpr__44281 = new cljs.core.PersistentArrayMap(null, 2, [(0),"No",(1),"Yes"], null);
return (fexpr__44281.cljs$core$IFn$_invoke$arity$1 ? fexpr__44281.cljs$core$IFn$_invoke$arity$1(G__44282) : fexpr__44281.call(null,G__44282));
})();
return daiquiri.core.create_element("td",((cljs.core.map_QMARK_(attrs44280))?daiquiri.interpreter.element_attributes(attrs44280):null),((cljs.core.map_QMARK_(attrs44280))?null:[daiquiri.interpreter.interpret(attrs44280)]));
})()]),daiquiri.core.create_element("tr",null,[(function (){var attrs44283 = predict_prostate.results.printable.ttt_input_label(ttt,new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518));
return daiquiri.core.create_element("td",((cljs.core.map_QMARK_(attrs44283))?daiquiri.interpreter.element_attributes(attrs44283):null),((cljs.core.map_QMARK_(attrs44283))?[(cljs.core.truth_((function (){var G__44290 = rum.core.react(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518)));
var fexpr__44289 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(4),null,(5),null], null), null);
return (fexpr__44289.cljs$core$IFn$_invoke$arity$1 ? fexpr__44289.cljs$core$IFn$_invoke$arity$1(G__44290) : fexpr__44289.call(null,G__44290));
})())?daiquiri.core.create_element("div",{'style':{'color':"#686868",'marginTop':(0)}},[daiquiri.core.create_element("i",{'aria-hidden':"true",'style':{'color':"orange",'paddingRight':(5)},'className':"fa fa-exclamation-triangle"},null),daiquiri.interpreter.interpret((function (){var G__44294 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tumour","lwt","tumour/lwt",-1253032781),"The tool is less well tested for higher scores"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__44294) : ttt.call(null,G__44294));
})())]):null)]:[daiquiri.interpreter.interpret(attrs44283),(cljs.core.truth_((function (){var G__44296 = rum.core.react(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518)));
var fexpr__44295 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(4),null,(5),null], null), null);
return (fexpr__44295.cljs$core$IFn$_invoke$arity$1 ? fexpr__44295.cljs$core$IFn$_invoke$arity$1(G__44296) : fexpr__44295.call(null,G__44296));
})())?daiquiri.core.create_element("div",{'style':{'color':"#686868",'marginTop':(0)}},[daiquiri.core.create_element("i",{'aria-hidden':"true",'style':{'color':"orange",'paddingRight':(5)},'className':"fa fa-exclamation-triangle"},null),daiquiri.interpreter.interpret((function (){var G__44300 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tumour","lwt","tumour/lwt",-1253032781),"The tool is less well tested for higher scores"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__44300) : ttt.call(null,G__44300));
})())]):null)]));
})(),(function (){var attrs44288 = (function (){var G__44302 = rum.core.react(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518)));
var fexpr__44301 = predict_prostate.results.printable.option_range((6));
return (fexpr__44301.cljs$core$IFn$_invoke$arity$1 ? fexpr__44301.cljs$core$IFn$_invoke$arity$1(G__44302) : fexpr__44301.call(null,G__44302));
})();
return daiquiri.core.create_element("td",((cljs.core.map_QMARK_(attrs44288))?daiquiri.interpreter.element_attributes(attrs44288):null),((cljs.core.map_QMARK_(attrs44288))?null:[daiquiri.interpreter.interpret(attrs44288)]));
})()]),daiquiri.core.create_element("tr",null,[(function (){var attrs44303 = predict_prostate.results.printable.ttt_input_label(ttt,new cljs.core.Keyword(null,"gleason","gleason",-2044470526));
return daiquiri.core.create_element("td",((cljs.core.map_QMARK_(attrs44303))?daiquiri.interpreter.element_attributes(attrs44303):null),((cljs.core.map_QMARK_(attrs44303))?[(cljs.core.truth_((function (){var G__44310 = rum.core.react(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518)));
var fexpr__44309 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(4),null,(5),null], null), null);
return (fexpr__44309.cljs$core$IFn$_invoke$arity$1 ? fexpr__44309.cljs$core$IFn$_invoke$arity$1(G__44310) : fexpr__44309.call(null,G__44310));
})())?daiquiri.core.create_element("div",{'style':{'color':"#686868",'marginTop':(0)}},[daiquiri.core.create_element("i",{'aria-hidden':"true",'style':{'color':"orange",'paddingRight':(5)},'className':"fa fa-exclamation-triangle"},null),daiquiri.interpreter.interpret((function (){var G__44314 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tumour","lwt","tumour/lwt",-1253032781),"The tool is less well tested for higher scores"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__44314) : ttt.call(null,G__44314));
})())]):null)]:[daiquiri.interpreter.interpret(attrs44303),(cljs.core.truth_((function (){var G__44316 = rum.core.react(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518)));
var fexpr__44315 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(4),null,(5),null], null), null);
return (fexpr__44315.cljs$core$IFn$_invoke$arity$1 ? fexpr__44315.cljs$core$IFn$_invoke$arity$1(G__44316) : fexpr__44315.call(null,G__44316));
})())?daiquiri.core.create_element("div",{'style':{'color':"#686868",'marginTop':(0)}},[daiquiri.core.create_element("i",{'aria-hidden':"true",'style':{'color':"orange",'paddingRight':(5)},'className':"fa fa-exclamation-triangle"},null),daiquiri.interpreter.interpret((function (){var G__44320 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tumour","lwt","tumour/lwt",-1253032781),"The tool is less well tested for higher scores"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__44320) : ttt.call(null,G__44320));
})())]):null)]));
})(),(function (){var attrs44308 = (function (){var G__44322 = rum.core.react(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"gleason","gleason",-2044470526)));
var fexpr__44321 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"3+3"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"3+4"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"4+3"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),"8"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),"9 or 10"], null)], null));
return (fexpr__44321.cljs$core$IFn$_invoke$arity$1 ? fexpr__44321.cljs$core$IFn$_invoke$arity$1(G__44322) : fexpr__44321.call(null,G__44322));
})();
return daiquiri.core.create_element("td",((cljs.core.map_QMARK_(attrs44308))?daiquiri.interpreter.element_attributes(attrs44308):null),((cljs.core.map_QMARK_(attrs44308))?null:[daiquiri.interpreter.interpret(attrs44308)]));
})()]),daiquiri.core.create_element("tr",null,[(function (){var attrs44323 = predict_prostate.results.printable.ttt_input_label(ttt,new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666));
return daiquiri.core.create_element("td",((cljs.core.map_QMARK_(attrs44323))?daiquiri.interpreter.element_attributes(attrs44323):null),((cljs.core.map_QMARK_(attrs44323))?null:[daiquiri.interpreter.interpret(attrs44323)]));
})(),(function (){var attrs44324 = rum.core.react(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666)));
return daiquiri.core.create_element("td",((cljs.core.map_QMARK_(attrs44324))?daiquiri.interpreter.element_attributes(attrs44324):null),((cljs.core.map_QMARK_(attrs44324))?null:[daiquiri.interpreter.interpret(attrs44324)]));
})()]),daiquiri.core.create_element("tr",null,[(function (){var attrs44325 = predict_prostate.results.printable.ttt_input_label(ttt,new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520));
return daiquiri.core.create_element("td",((cljs.core.map_QMARK_(attrs44325))?daiquiri.interpreter.element_attributes(attrs44325):null),((cljs.core.map_QMARK_(attrs44325))?null:[daiquiri.interpreter.interpret(attrs44325)]));
})(),(function (){var attrs44326 = rum.core.react(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520)));
return daiquiri.core.create_element("td",((cljs.core.map_QMARK_(attrs44326))?daiquiri.interpreter.element_attributes(attrs44326):null),((cljs.core.map_QMARK_(attrs44326))?null:[daiquiri.interpreter.interpret(attrs44326)]));
})()])])])])]);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"predict-prostate.results.printable/inputs-in-print");
predict_prostate.results.printable.treatment_note = rum.core.lazy_build(rum.core.build_defc,(function (title,content){
var attrs44327 = predict_prostate.results.printable.avoid_break.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),title], null),content], 0));
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs44327))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["col-xs-12"], null)], null),attrs44327], 0))):{'className':"col-xs-12"}),((cljs.core.map_QMARK_(attrs44327))?null:[daiquiri.interpreter.interpret(attrs44327)]));
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
return daiquiri.core.create_element("div",{'className':"row"},[daiquiri.core.create_element("div",{'className':"col-sm-12"},[daiquiri.core.create_element("h2",null,["Treatments after Surgery"]),daiquiri.core.create_element("section",{'className':"print-bigger"},["Selected treatments after surgery are:",(cljs.core.truth_(horm)?(function (){var attrs44333 = horm_label;
return daiquiri.core.create_element("li",((cljs.core.map_QMARK_(attrs44333))?daiquiri.interpreter.element_attributes(attrs44333):null),((cljs.core.map_QMARK_(attrs44333))?null:[daiquiri.interpreter.interpret(attrs44333)]));
})():null),(cljs.core.truth_(chemo)?(function (){var attrs44334 = chemo_label;
return daiquiri.core.create_element("li",((cljs.core.map_QMARK_(attrs44334))?daiquiri.interpreter.element_attributes(attrs44334):null),((cljs.core.map_QMARK_(attrs44334))?[" (",daiquiri.interpreter.interpret((function (){var G__44340 = rum.core.react(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"chemo","chemo",-1212386012)));
var fexpr__44339 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"3rd","3rd",-1568627554),"3rd generation",new cljs.core.Keyword(null,"2nd","2nd",1952531196),"2nd generation",new cljs.core.Keyword(null,"none","none",1333468478),"None"], null);
return (fexpr__44339.cljs$core$IFn$_invoke$arity$1 ? fexpr__44339.cljs$core$IFn$_invoke$arity$1(G__44340) : fexpr__44339.call(null,G__44340));
})()),")"]:[daiquiri.interpreter.interpret(attrs44334)," (",daiquiri.interpreter.interpret((function (){var G__44344 = rum.core.react(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"chemo","chemo",-1212386012)));
var fexpr__44343 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"3rd","3rd",-1568627554),"3rd generation",new cljs.core.Keyword(null,"2nd","2nd",1952531196),"2nd generation",new cljs.core.Keyword(null,"none","none",1333468478),"None"], null);
return (fexpr__44343.cljs$core$IFn$_invoke$arity$1 ? fexpr__44343.cljs$core$IFn$_invoke$arity$1(G__44344) : fexpr__44343.call(null,G__44344));
})()),")"]));
})():null),(cljs.core.truth_(tra)?(function (){var attrs44335 = tra_label;
return daiquiri.core.create_element("li",((cljs.core.map_QMARK_(attrs44335))?daiquiri.interpreter.element_attributes(attrs44335):null),((cljs.core.map_QMARK_(attrs44335))?null:[daiquiri.interpreter.interpret(attrs44335)]));
})():null),((bis)?(function (){var attrs44336 = bis_label;
return daiquiri.core.create_element("li",((cljs.core.map_QMARK_(attrs44336))?daiquiri.interpreter.element_attributes(attrs44336):null),((cljs.core.map_QMARK_(attrs44336))?null:[daiquiri.interpreter.interpret(attrs44336)]));
})():null)]),(function (){var attrs44332 = (cljs.core.truth_(horm)?predict_prostate.results.printable.treatment_note(horm_label,(cljs.core.truth_(horm)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.rest(predict_prostate.content_reader.section.cljs$core$IFn$_invoke$arity$2(ttt,"hormone-therapy"))], null):null)):null);
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs44332))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["row","print-smaller"], null)], null),attrs44332], 0))):{'className':"row print-smaller"}),((cljs.core.map_QMARK_(attrs44332))?[(cljs.core.truth_(chemo)?predict_prostate.results.printable.treatment_note(chemo_label,(cljs.core.truth_(chemo)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.rest(predict_prostate.content_reader.section.cljs$core$IFn$_invoke$arity$2(ttt,"chemotherapy"))], null):null)):null),(cljs.core.truth_(tra)?predict_prostate.results.printable.treatment_note(tra_label,(cljs.core.truth_(tra)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.rest(predict_prostate.content_reader.section.cljs$core$IFn$_invoke$arity$2(ttt,"trastuzumab"))], null):null)):null),((bis)?predict_prostate.results.printable.treatment_note(bis_label,((bis)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.rest(predict_prostate.content_reader.section.cljs$core$IFn$_invoke$arity$2(ttt,"bisphosphonates"))], null):null)):null)]:[daiquiri.interpreter.interpret(attrs44332),(cljs.core.truth_(chemo)?predict_prostate.results.printable.treatment_note(chemo_label,(cljs.core.truth_(chemo)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.rest(predict_prostate.content_reader.section.cljs$core$IFn$_invoke$arity$2(ttt,"chemotherapy"))], null):null)):null),(cljs.core.truth_(tra)?predict_prostate.results.printable.treatment_note(tra_label,(cljs.core.truth_(tra)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.rest(predict_prostate.content_reader.section.cljs$core$IFn$_invoke$arity$2(ttt,"trastuzumab"))], null):null)):null),((bis)?predict_prostate.results.printable.treatment_note(bis_label,((bis)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.rest(predict_prostate.content_reader.section.cljs$core$IFn$_invoke$arity$2(ttt,"bisphosphonates"))], null):null)):null)]));
})()])]);
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"predict-prostate.results.printable/treatments-in-print");
predict_prostate.results.printable.results_in_print = rum.core.lazy_build(rum.core.build_defc,(function (ttt){
return daiquiri.core.create_element("div",{'className':"row"},[(function (){var attrs44349 = predict_prostate.results.printable.avoid_break.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),(function (){var G__44352 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("print","inputs","print/inputs",1039888383),"Inputs"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__44352) : ttt.call(null,G__44352));
})()], null),predict_prostate.results.printable.inputs_in_print(ttt)], 0));
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs44349))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["col-sm-12"], null)], null),attrs44349], 0))):{'className':"col-sm-12"}),((cljs.core.map_QMARK_(attrs44349))?[daiquiri.interpreter.interpret(predict_prostate.results.printable.break_before.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([predict_prostate.results.printable.avoid_break.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),(function (){var G__44354 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("print","surv-curve","print/surv-curve",-1081795857),"Survival curve"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__44354) : ttt.call(null,G__44354));
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"100%",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"0%"], null)], null),predict_prostate.results.curves.results_in_curves(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"printable","printable",-928999004),true,new cljs.core.Keyword(null,"ttt","ttt",1858561240),ttt], null))], null)], 0))], 0))),daiquiri.interpreter.interpret(predict_prostate.results.printable.break_before.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([predict_prostate.results.printable.avoid_break.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),(function (){var G__44357 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("print","surv-table-1","print/surv-table-1",472241572),"Survival table"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__44357) : ttt.call(null,G__44357));
})()," - ",rum.core.react(predict_prostate.state.run_time.year_selected())," ",(function (){var G__44358 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("print","surv-table-2","print/surv-table-2",-551388149),"years after diagnosis."], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__44358) : ttt.call(null,G__44358));
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"60%",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"0%"], null)], null),predict_prostate.results.table.results_in_table(ttt)], null)], 0))], 0))),daiquiri.interpreter.interpret(predict_prostate.results.printable.break_before.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([predict_prostate.results.printable.avoid_break.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),(function (){var G__44360 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("print","surv-chart","print/surv-chart",-469806984),"Survival chart"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__44360) : ttt.call(null,G__44360));
})()], null),predict_prostate.results.charts.results_in_charts(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"printable","printable",-928999004),true,new cljs.core.Keyword(null,"ttt","ttt",1858561240),ttt], null))], 0))], 0))),daiquiri.interpreter.interpret(predict_prostate.results.printable.break_before.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([predict_prostate.results.printable.avoid_break.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),(function (){var G__44363 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("print","icarray-1","print/icarray-1",-2007539192),"Icon array showing"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__44363) : ttt.call(null,G__44363));
})()," ",rum.core.react(predict_prostate.state.run_time.year_selected())," ",(function (){var G__44364 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("print","icarray-2","print/icarray-2",-551489289),"year outcomes for 100 men"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__44364) : ttt.call(null,G__44364));
})()], null),predict_prostate.results.icons.results_in_icons_STAR_(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ttt","ttt",1858561240),ttt,new cljs.core.Keyword(null,"printable","printable",-928999004),true], null))], 0))], 0))),daiquiri.interpreter.interpret(predict_prostate.results.printable.break_before.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),(function (){var G__44366 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("print","sum-title","print/sum-title",427959026),"In Summary"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__44366) : ttt.call(null,G__44366));
})()], null),predict_prostate.results.text.results_in_text(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"printable","printable",-928999004),true,new cljs.core.Keyword(null,"ttt","ttt",1858561240),ttt], null))], 0))),daiquiri.interpreter.interpret(predict_prostate.results.printable.break_before.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),(function (){var G__44368 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("print","potharm-title","print/potharm-title",-1176889073),"Potential Harms of treatments"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__44368) : ttt.call(null,G__44368));
})()], null),predict_prostate.results.sidefx.results_in_sidefx(ttt)], 0))),predict_prostate.layout.header.footer()]:[daiquiri.interpreter.interpret(attrs44349),daiquiri.interpreter.interpret(predict_prostate.results.printable.break_before.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([predict_prostate.results.printable.avoid_break.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),(function (){var G__44370 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("print","surv-curve","print/surv-curve",-1081795857),"Survival curve"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__44370) : ttt.call(null,G__44370));
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"100%",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"0%"], null)], null),predict_prostate.results.curves.results_in_curves(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"printable","printable",-928999004),true,new cljs.core.Keyword(null,"ttt","ttt",1858561240),ttt], null))], null)], 0))], 0))),daiquiri.interpreter.interpret(predict_prostate.results.printable.break_before.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([predict_prostate.results.printable.avoid_break.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),(function (){var G__44373 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("print","surv-table-1","print/surv-table-1",472241572),"Survival table"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__44373) : ttt.call(null,G__44373));
})()," - ",rum.core.react(predict_prostate.state.run_time.year_selected())," ",(function (){var G__44374 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("print","surv-table-2","print/surv-table-2",-551388149),"years after diagnosis."], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__44374) : ttt.call(null,G__44374));
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"60%",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"0%"], null)], null),predict_prostate.results.table.results_in_table(ttt)], null)], 0))], 0))),daiquiri.interpreter.interpret(predict_prostate.results.printable.break_before.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([predict_prostate.results.printable.avoid_break.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),(function (){var G__44376 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("print","surv-chart","print/surv-chart",-469806984),"Survival chart"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__44376) : ttt.call(null,G__44376));
})()], null),predict_prostate.results.charts.results_in_charts(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"printable","printable",-928999004),true,new cljs.core.Keyword(null,"ttt","ttt",1858561240),ttt], null))], 0))], 0))),daiquiri.interpreter.interpret(predict_prostate.results.printable.break_before.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([predict_prostate.results.printable.avoid_break.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),(function (){var G__44379 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("print","icarray-1","print/icarray-1",-2007539192),"Icon array showing"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__44379) : ttt.call(null,G__44379));
})()," ",rum.core.react(predict_prostate.state.run_time.year_selected())," ",(function (){var G__44380 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("print","icarray-2","print/icarray-2",-551489289),"year outcomes for 100 men"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__44380) : ttt.call(null,G__44380));
})()], null),predict_prostate.results.icons.results_in_icons_STAR_(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ttt","ttt",1858561240),ttt,new cljs.core.Keyword(null,"printable","printable",-928999004),true], null))], 0))], 0))),daiquiri.interpreter.interpret(predict_prostate.results.printable.break_before.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),(function (){var G__44382 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("print","sum-title","print/sum-title",427959026),"In Summary"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__44382) : ttt.call(null,G__44382));
})()], null),predict_prostate.results.text.results_in_text(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"printable","printable",-928999004),true,new cljs.core.Keyword(null,"ttt","ttt",1858561240),ttt], null))], 0))),daiquiri.interpreter.interpret(predict_prostate.results.printable.break_before.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),(function (){var G__44384 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("print","potharm-title","print/potharm-title",-1176889073),"Potential Harms of treatments"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__44384) : ttt.call(null,G__44384));
})()], null),predict_prostate.results.sidefx.results_in_sidefx(ttt)], 0))),predict_prostate.layout.header.footer()]));
})()]);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,predict_prostate.mixins.set_default(new cljs.core.Keyword(null,"result-year","result-year",1413238532))], null),"predict-prostate.results.printable/results-in-print");

//# sourceMappingURL=predict_prostate.results.printable.js.map
