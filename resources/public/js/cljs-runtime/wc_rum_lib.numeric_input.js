goog.provide('wc_rum_lib.numeric_input');
wc_rum_lib.numeric_input.style = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"numeric-input","numeric-input",1592356787),"numeric-input--G__34305"], null);

cljs_css_modules.runtime.inject_style_BANG_(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(garden.core.css,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [".numeric-input--G__34305",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),"130px",new cljs.core.Keyword(null,"tab-index","tab-index",895755393),(1),new cljs.core.Keyword(null,"selectable","selectable",370587038),true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [".incdec",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [".right",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"border-top-right-radius","border-top-right-radius",1678770792),"10px",new cljs.core.Keyword(null,"border-bottom-right-radius","border-bottom-right-radius",414899772),"10px",new cljs.core.Keyword(null,"width","width",-384071477),"36px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [".left",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"border-top-left-radius","border-top-left-radius",1361811342),"10px",new cljs.core.Keyword(null,"border-bottom-left-radius","border-bottom-left-radius",-76446610),"10px",new cljs.core.Keyword(null,"width","width",-384071477),"36px"], null)], null)], null)], null)], null)),"wc-rum-lib.numeric-input","style");
wc_rum_lib.numeric_input.error_QMARK_ = (function wc_rum_lib$numeric_input$error_QMARK_(value){
var or__4212__auto__ = (value == null);
if(or__4212__auto__){
return or__4212__auto__;
} else {
var or__4212__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",value);
if(or__4212__auto____$1){
return or__4212__auto____$1;
} else {
return isNaN(value);
}
}
});
/**
 * convert str to num or to ##NaN if not possible
 */
wc_rum_lib.numeric_input.str_to_num = (function wc_rum_lib$numeric_input$str_to_num(s){
return parseFloat(s);
});
wc_rum_lib.numeric_input.epsilon = 1.0E-8;
wc_rum_lib.numeric_input.near_integer_QMARK_ = (function wc_rum_lib$numeric_input$near_integer_QMARK_(n){
return (Math.abs((n - Math.round(n))) < wc_rum_lib.numeric_input.epsilon);
});
wc_rum_lib.numeric_input.trim_trailing_zero = (function wc_rum_lib$numeric_input$trim_trailing_zero(s){
var temp__5751__auto__ = cljs.core.re_matches(/(.*\.\d)\d+/,s);
if(cljs.core.truth_(temp__5751__auto__)){
var vec__34318 = temp__5751__auto__;
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34318,(0),null);
var m1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34318,(1),null);
return m1;
} else {
return s;
}
});
wc_rum_lib.numeric_input.at_precision = (function wc_rum_lib$numeric_input$at_precision(n,precision){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),precision)){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(Math.ceil(n));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((3),precision)){
if(wc_rum_lib.numeric_input.near_integer_QMARK_(n)){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(Math.floor(n));
} else {
return wc_rum_lib.numeric_input.trim_trailing_zero(n.toPrecision((new Number((3)))));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),precision)){
return (new Number(n)).toFixed((2));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),precision)){
return (new Number(n)).toFixed((1));
} else {
return null;
}
}
}
}
});
wc_rum_lib.numeric_input.num_to_str = (function wc_rum_lib$numeric_input$num_to_str(var_args){
var G__34333 = arguments.length;
switch (G__34333) {
case 1:
return wc_rum_lib.numeric_input.num_to_str.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return wc_rum_lib.numeric_input.num_to_str.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(wc_rum_lib.numeric_input.num_to_str.cljs$core$IFn$_invoke$arity$1 = (function (n){
return wc_rum_lib.numeric_input.num_to_str.cljs$core$IFn$_invoke$arity$2(n,(0));
}));

(wc_rum_lib.numeric_input.num_to_str.cljs$core$IFn$_invoke$arity$2 = (function (n,precision){
if(typeof n === 'string'){
return n;
} else {
if(cljs.core.truth_(isNaN(n))){
return "";
} else {
if(wc_rum_lib.numeric_input.near_integer_QMARK_(n)){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(Math.floor(n));
} else {
if(cljs.core.truth_(precision)){
return wc_rum_lib.numeric_input.at_precision(n,precision);
} else {
return wc_rum_lib.numeric_input.at_precision(n,(0));
}
}
}
}
}));

(wc_rum_lib.numeric_input.num_to_str.cljs$lang$maxFixedArity = 2);

wc_rum_lib.numeric_input.validate_input = (function wc_rum_lib$numeric_input$validate_input(value,nmin,nmax,step){
var value__$1 = wc_rum_lib.numeric_input.str_to_num(value);
var nmin__$1 = ((cljs.core.fn_QMARK_(nmin))?cljs.core.deref((nmin.cljs$core$IFn$_invoke$arity$0 ? nmin.cljs$core$IFn$_invoke$arity$0() : nmin.call(null))):nmin);
var nmax__$1 = ((cljs.core.fn_QMARK_(nmax))?cljs.core.deref((nmax.cljs$core$IFn$_invoke$arity$0 ? nmax.cljs$core$IFn$_invoke$arity$0() : nmax.call(null))):nmax);
var val_1 = (cljs.core.truth_(isNaN(value__$1))?(((step > (0)))?(nmin__$1 - (1)):(((step < (0)))?(nmax__$1 + (1)):nmin__$1)):value__$1);
var val_2 = (step + val_1);
var val_3 = (((val_2 < nmin__$1))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(wc_rum_lib.numeric_input.num_to_str.cljs$core$IFn$_invoke$arity$1(val_2)),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(val_2)].join(''):(((val_2 > nmax__$1))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(wc_rum_lib.numeric_input.num_to_str.cljs$core$IFn$_invoke$arity$1(val_2)),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(val_2)].join(''):val_2));
if(cljs.core.truth_(isNaN(value__$1))){
return " :0";
} else {
return val_3;
}
});
wc_rum_lib.numeric_input.handle_inc = (function wc_rum_lib$numeric_input$handle_inc(value,onChange,nmin,nmax,precision,step){
var v = wc_rum_lib.numeric_input.validate_input(value,nmin,nmax,step);
var G__34345 = wc_rum_lib.numeric_input.num_to_str.cljs$core$IFn$_invoke$arity$2(v,precision);
return (onChange.cljs$core$IFn$_invoke$arity$1 ? onChange.cljs$core$IFn$_invoke$arity$1(G__34345) : onChange.call(null,G__34345));
});
wc_rum_lib.numeric_input.handle_typed_input = (function wc_rum_lib$numeric_input$handle_typed_input(nmin,nmax,precision,onChange,e){
var value = e.target.value;
if(cljs.core.truth_(cljs.core.re_matches(/\s*\d*\.?\d*\s*/,value))){
var G__34348 = wc_rum_lib.numeric_input.num_to_str.cljs$core$IFn$_invoke$arity$2(wc_rum_lib.numeric_input.validate_input(wc_rum_lib.numeric_input.str_to_num(value),nmin,nmax,(0)),precision);
return (onChange.cljs$core$IFn$_invoke$arity$1 ? onChange.cljs$core$IFn$_invoke$arity$1(G__34348) : onChange.call(null,G__34348));
} else {
return (onChange.cljs$core$IFn$_invoke$arity$1 ? onChange.cljs$core$IFn$_invoke$arity$1("") : onChange.call(null,""));
}
});
wc_rum_lib.numeric_input.update_value = (function wc_rum_lib$numeric_input$update_value(value,nmin,nmax,precision,step,onChange){
return wc_rum_lib.numeric_input.handle_inc(value,onChange,nmin,nmax,precision,step);
});
wc_rum_lib.numeric_input.inc_dec_button = rum.core.build_defcs((function (state,p__34366){
var map__34367 = p__34366;
var map__34367__$1 = cljs.core.__destructure_map(map__34367);
var props = map__34367__$1;
var cursor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34367__$1,new cljs.core.Keyword(null,"cursor","cursor",1011937484));
var increment = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34367__$1,new cljs.core.Keyword(null,"increment","increment",-1558831484));
var onChange = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34367__$1,new cljs.core.Keyword(null,"onChange","onChange",-312891301));
var min = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34367__$1,new cljs.core.Keyword(null,"min","min",444991522));
var max = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34367__$1,new cljs.core.Keyword(null,"max","max",61366548));
var nmin = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34367__$1,new cljs.core.Keyword(null,"nmin","nmin",1751665282));
var nmax = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34367__$1,new cljs.core.Keyword(null,"nmax","nmax",608994404));
var precision = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34367__$1,new cljs.core.Keyword(null,"precision","precision",-1175707478));
var value = wc_rum_lib.numeric_input.str_to_num(rum.core.react(cursor));
return React.createElement("span",({"className": "incdec"}),React.createElement("button",({"className": [(((increment > (0)))?"right":"left")," btn btn-default "].join(''), "aria-hidden": "true", "disabled": (((increment > (0)))?(((value >= wc_rum_lib.numeric_input.str_to_num(((cljs.core.fn_QMARK_(max))?rum.core.react((max.cljs$core$IFn$_invoke$arity$0 ? max.cljs$core$IFn$_invoke$arity$0() : max.call(null))):max))))?"disabled":null):(((value <= nmin))?"disabled":null)), "tabIndex": (-1), "onClick": (function (){
return wc_rum_lib.numeric_input.update_value(cljs.core.deref(cursor),nmin,nmax,precision,increment,onChange);
})}),(((increment > (0)))?"+":"\u2013")));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$,rum.core.reactive], null),"inc-dec-button");
wc_rum_lib.numeric_input.counter = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
wc_rum_lib.numeric_input.numeric_input = rum.core.build_defc((function (p__34388){
var map__34390 = p__34388;
var map__34390__$1 = cljs.core.__destructure_map(map__34390);
var props = map__34390__$1;
var onChange = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34390__$1,new cljs.core.Keyword(null,"onChange","onChange",-312891301));
var step = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34390__$1,new cljs.core.Keyword(null,"step","step",1288888124));
var min = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34390__$1,new cljs.core.Keyword(null,"min","min",444991522));
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34390__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__34390__$1,new cljs.core.Keyword(null,"color","color",1011675173),"black");
var input_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34390__$1,new cljs.core.Keyword(null,"input-ref","input-ref",575432746));
var precision = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34390__$1,new cljs.core.Keyword(null,"precision","precision",-1175707478));
var error_color = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__34390__$1,new cljs.core.Keyword(null,"error-color","error-color",-332587474),"red");
var max = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34390__$1,new cljs.core.Keyword(null,"max","max",61366548));
var vec__34398 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(rum.core.react(input_ref),/:/);
var good = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34398,(0),null);
var bad = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34398,(1),null);
var value = wc_rum_lib.numeric_input.str_to_num(good);
var nmin = wc_rum_lib.numeric_input.str_to_num(((cljs.core.fn_QMARK_(min))?rum.core.react((min.cljs$core$IFn$_invoke$arity$0 ? min.cljs$core$IFn$_invoke$arity$0() : min.call(null))):min));
var nmax = wc_rum_lib.numeric_input.str_to_num(((cljs.core.fn_QMARK_(max))?rum.core.react((max.cljs$core$IFn$_invoke$arity$0 ? max.cljs$core$IFn$_invoke$arity$0() : max.call(null))):max));
var count = rum.core.react(wc_rum_lib.numeric_input.counter);
var mutate = (function (e){
return wc_rum_lib.numeric_input.handle_typed_input(min,max,precision,onChange,e);
});
var mutate2 = (function (e){
if(cljs.core.truth_((function (){var and__4210__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e.nativeEvent.data,".");
if(and__4210__auto__){
var and__4210__auto____$1 = cljs.core.re_matches(/\s*\d*\.?\d*\s*/,e.target.value);
if(cljs.core.truth_(and__4210__auto____$1)){
return (precision > (0));
} else {
return and__4210__auto____$1;
}
} else {
return and__4210__auto__;
}
})())){
return null;
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(wc_rum_lib.numeric_input.counter,cljs.core.inc);

return wc_rum_lib.numeric_input.handle_typed_input(min,max,precision,onChange,e);
}
});
return React.createElement("div",({"style": ({"minWidth": "100px", "tabIndex": (1), "selectable": true}), "onKeyDown": (function (p1__34382_SHARP_){
var key_code = p1__34382_SHARP_.nativeEvent.code;
if(cljs.core.truth_((function (){var fexpr__34403 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["ArrowUp",null,"ArrowDown",null], null), null);
return (fexpr__34403.cljs$core$IFn$_invoke$arity$1 ? fexpr__34403.cljs$core$IFn$_invoke$arity$1(key_code) : fexpr__34403.call(null,key_code));
})())){
p1__34382_SHARP_.preventDefault();
} else {
}

return wc_rum_lib.numeric_input.update_value(value,nmin,nmax,precision,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("ArrowUp",key_code))?step:((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("ArrowDown",key_code))?((-1) * step):(0)
)),onChange);
}), "className": "numeric-input"}),(function (){var attrs34402 = (function (){var G__34404 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(props,new cljs.core.Keyword(null,"nmin","nmin",1751665282),nmin,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"nmax","nmax",608994404),nmax,new cljs.core.Keyword(null,"precision","precision",-1175707478),precision,new cljs.core.Keyword(null,"increment","increment",-1558831484),((-1) * step),new cljs.core.Keyword(null,"cursor","cursor",1011937484),input_ref], 0));
return (wc_rum_lib.numeric_input.inc_dec_button.cljs$core$IFn$_invoke$arity$1 ? wc_rum_lib.numeric_input.inc_dec_button.cljs$core$IFn$_invoke$arity$1(G__34404) : wc_rum_lib.numeric_input.inc_dec_button.call(null,G__34404));
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs34402))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["button-group"], null)], null),attrs34402], 0))):({"className": "button-group"})),((cljs.core.map_QMARK_(attrs34402))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.create_element("input",({"type": "text", "value": good, "id": key, "onClick": mutate, "onChange": mutate2, "style": ({"color": (((bad == null))?color:error_color), "borderTop": "2px solid #ddd", "width": "58px", "padding": "0 0 4px 0", "borderLeft": "2px solid #ddd", "textAlign": "center", "fontSize": "14px", "backgroundColor": (cljs.core.truth_(isNaN(value))?"#fff":"#CCEEF8"), "height": "36px"})})),sablono.interpreter.interpret((function (){var G__34405 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(props,new cljs.core.Keyword(null,"nmin","nmin",1751665282),nmin,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"nmax","nmax",608994404),nmax,new cljs.core.Keyword(null,"precision","precision",-1175707478),precision,new cljs.core.Keyword(null,"increment","increment",-1558831484),step,new cljs.core.Keyword(null,"cursor","cursor",1011937484),input_ref], 0));
return (wc_rum_lib.numeric_input.inc_dec_button.cljs$core$IFn$_invoke$arity$1 ? wc_rum_lib.numeric_input.inc_dec_button.cljs$core$IFn$_invoke$arity$1(G__34405) : wc_rum_lib.numeric_input.inc_dec_button.call(null,G__34405));
})())], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs34402),sablono.interpreter.create_element("input",({"type": "text", "value": good, "id": key, "onClick": mutate, "onChange": mutate2, "style": ({"color": (((bad == null))?color:error_color), "borderTop": "2px solid #ddd", "width": "58px", "padding": "0 0 4px 0", "borderLeft": "2px solid #ddd", "textAlign": "center", "fontSize": "14px", "backgroundColor": (cljs.core.truth_(isNaN(value))?"#fff":"#CCEEF8"), "height": "36px"})})),sablono.interpreter.interpret((function (){var G__34406 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(props,new cljs.core.Keyword(null,"nmin","nmin",1751665282),nmin,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"nmax","nmax",608994404),nmax,new cljs.core.Keyword(null,"precision","precision",-1175707478),precision,new cljs.core.Keyword(null,"increment","increment",-1558831484),step,new cljs.core.Keyword(null,"cursor","cursor",1011937484),input_ref], 0));
return (wc_rum_lib.numeric_input.inc_dec_button.cljs$core$IFn$_invoke$arity$1 ? wc_rum_lib.numeric_input.inc_dec_button.cljs$core$IFn$_invoke$arity$1(G__34406) : wc_rum_lib.numeric_input.inc_dec_button.call(null,G__34406));
})())], null)));
})());
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$,rum.core.reactive], null),"numeric-input");

//# sourceMappingURL=wc_rum_lib.numeric_input.js.map
