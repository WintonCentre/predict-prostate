goog.provide('interop.jsx');
interop.jsx.jq$ = (function (){var target_obj_48446 = window;
var _STAR_runtime_state_STAR__orig_val__48475 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__48476 = oops.state.prepare_state(target_obj_48446,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__48476);

try{var next_obj_48474 = ((oops.core.validate_object_access_dynamically(target_obj_48446,(0),"jQuery",true,true,false))?(target_obj_48446["jQuery"]):null);
return next_obj_48474;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__48475);
}})();
interop.jsx.jq$find = (function interop$jsx$jq$find(id){
return (interop.jsx.jq$.cljs$core$IFn$_invoke$arity$1 ? interop.jsx.jq$.cljs$core$IFn$_invoke$arity$1(id) : interop.jsx.jq$.call(null,id));
});
interop.jsx.jq$call = (function interop$jsx$jq$call(var_args){
var G__48487 = arguments.length;
switch (G__48487) {
case 2:
return interop.jsx.jq$call.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return interop.jsx.jq$call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(interop.jsx.jq$call.cljs$core$IFn$_invoke$arity$2 = (function (id,method){
var target_obj_48488 = interop.jsx.jq$find(id);
var _STAR_runtime_state_STAR__orig_val__48491 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__48492 = oops.state.prepare_state(target_obj_48488,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__48492);

try{var call_info_48490 = oops.core.get_selector_call_info_dynamically(target_obj_48488,method);
var fn_48489 = (call_info_48490[(1)]);
if(oops.core.validate_fn_call_dynamically(fn_48489,oops.state.get_last_access_modifier())){
if((!((fn_48489 == null)))){
return fn_48489.call((call_info_48490[(0)]));
} else {
return null;
}
} else {
return null;
}
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__48491);
}}));

(interop.jsx.jq$call.cljs$core$IFn$_invoke$arity$3 = (function (id,method,p1){
var target_obj_48493 = interop.jsx.jq$find(id);
var _STAR_runtime_state_STAR__orig_val__48496 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__48497 = oops.state.prepare_state(target_obj_48493,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__48497);

try{var call_info_48495 = oops.core.get_selector_call_info_dynamically(target_obj_48493,method);
var fn_48494 = (call_info_48495[(1)]);
if(oops.core.validate_fn_call_dynamically(fn_48494,oops.state.get_last_access_modifier())){
if((!((fn_48494 == null)))){
return fn_48494.call((call_info_48495[(0)]),p1);
} else {
return null;
}
} else {
return null;
}
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__48496);
}}));

(interop.jsx.jq$call.cljs$lang$maxFixedArity = 3);

interop.jsx.create_element = (React["createElement"]);
interop.jsx.jsx = (function interop$jsx$jsx(element,props,content){
return React.createElement(element,cljs.core.clj__GT_js(props),content);
});
interop.jsx.jsx_STAR_ = (function interop$jsx$jsx_STAR_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___48508 = arguments.length;
var i__4819__auto___48509 = (0);
while(true){
if((i__4819__auto___48509 < len__4818__auto___48508)){
args__4824__auto__.push((arguments[i__4819__auto___48509]));

var G__48510 = (i__4819__auto___48509 + (1));
i__4819__auto___48509 = G__48510;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return interop.jsx.jsx_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(interop.jsx.jsx_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (element,props,children){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(interop.jsx.create_element,element,cljs.core.clj__GT_js(props),children);
}));

(interop.jsx.jsx_STAR_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(interop.jsx.jsx_STAR_.cljs$lang$applyTo = (function (seq48498){
var G__48499 = cljs.core.first(seq48498);
var seq48498__$1 = cljs.core.next(seq48498);
var G__48500 = cljs.core.first(seq48498__$1);
var seq48498__$2 = cljs.core.next(seq48498__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48499,G__48500,seq48498__$2);
}));

interop.jsx.make_element = (function interop$jsx$make_element(tag){
return (function() { 
var G__48514__delegate = function (props,children){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(interop.jsx.create_element,tag,cljs.core.clj__GT_js(props),children);
};
var G__48514 = function (props,var_args){
var children = null;
if (arguments.length > 1) {
var G__48515__i = 0, G__48515__a = new Array(arguments.length -  1);
while (G__48515__i < G__48515__a.length) {G__48515__a[G__48515__i] = arguments[G__48515__i + 1]; ++G__48515__i;}
  children = new cljs.core.IndexedSeq(G__48515__a,0,null);
} 
return G__48514__delegate.call(this,props,children);};
G__48514.cljs$lang$maxFixedArity = 1;
G__48514.cljs$lang$applyTo = (function (arglist__48516){
var props = cljs.core.first(arglist__48516);
var children = cljs.core.rest(arglist__48516);
return G__48514__delegate(props,children);
});
G__48514.cljs$core$IFn$_invoke$arity$variadic = G__48514__delegate;
return G__48514;
})()
;
});
interop.jsx.div = interop.jsx.make_element("div");
interop.jsx.p = interop.jsx.make_element("p");

//# sourceMappingURL=interop.jsx.js.map
