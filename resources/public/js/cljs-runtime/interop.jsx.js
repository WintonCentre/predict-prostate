goog.provide('interop.jsx');
interop.jsx.jq$ = (function (){var target_obj_49268 = window;
var _STAR_runtime_state_STAR__orig_val__49296 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__49299 = oops.state.prepare_state(target_obj_49268,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__49299);

try{var next_obj_49279 = ((oops.core.validate_object_access_dynamically(target_obj_49268,(0),"jQuery",true,true,false))?(target_obj_49268["jQuery"]):null);
return next_obj_49279;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__49296);
}})();
interop.jsx.jq$find = (function interop$jsx$jq$find(id){
return (interop.jsx.jq$.cljs$core$IFn$_invoke$arity$1 ? interop.jsx.jq$.cljs$core$IFn$_invoke$arity$1(id) : interop.jsx.jq$.call(null,id));
});
interop.jsx.jq$call = (function interop$jsx$jq$call(var_args){
var G__49319 = arguments.length;
switch (G__49319) {
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
var target_obj_49320 = interop.jsx.jq$find(id);
var _STAR_runtime_state_STAR__orig_val__49323 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__49324 = oops.state.prepare_state(target_obj_49320,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__49324);

try{var call_info_49322 = oops.core.get_selector_call_info_dynamically(target_obj_49320,method);
var fn_49321 = (call_info_49322[(1)]);
if(oops.core.validate_fn_call_dynamically(fn_49321,oops.state.get_last_access_modifier())){
if((!((fn_49321 == null)))){
return fn_49321.call((call_info_49322[(0)]));
} else {
return null;
}
} else {
return null;
}
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__49323);
}}));

(interop.jsx.jq$call.cljs$core$IFn$_invoke$arity$3 = (function (id,method,p1){
var target_obj_49325 = interop.jsx.jq$find(id);
var _STAR_runtime_state_STAR__orig_val__49328 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__49329 = oops.state.prepare_state(target_obj_49325,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__49329);

try{var call_info_49327 = oops.core.get_selector_call_info_dynamically(target_obj_49325,method);
var fn_49326 = (call_info_49327[(1)]);
if(oops.core.validate_fn_call_dynamically(fn_49326,oops.state.get_last_access_modifier())){
if((!((fn_49326 == null)))){
return fn_49326.call((call_info_49327[(0)]),p1);
} else {
return null;
}
} else {
return null;
}
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__49328);
}}));

(interop.jsx.jq$call.cljs$lang$maxFixedArity = 3);

interop.jsx.create_element = (React["createElement"]);
interop.jsx.jsx = (function interop$jsx$jsx(element,props,content){
return React.createElement(element,cljs.core.clj__GT_js(props),content);
});
interop.jsx.jsx_STAR_ = (function interop$jsx$jsx_STAR_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___49334 = arguments.length;
var i__4819__auto___49335 = (0);
while(true){
if((i__4819__auto___49335 < len__4818__auto___49334)){
args__4824__auto__.push((arguments[i__4819__auto___49335]));

var G__49336 = (i__4819__auto___49335 + (1));
i__4819__auto___49335 = G__49336;
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
(interop.jsx.jsx_STAR_.cljs$lang$applyTo = (function (seq49330){
var G__49331 = cljs.core.first(seq49330);
var seq49330__$1 = cljs.core.next(seq49330);
var G__49332 = cljs.core.first(seq49330__$1);
var seq49330__$2 = cljs.core.next(seq49330__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49331,G__49332,seq49330__$2);
}));

interop.jsx.make_element = (function interop$jsx$make_element(tag){
return (function() { 
var G__49337__delegate = function (props,children){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(interop.jsx.create_element,tag,cljs.core.clj__GT_js(props),children);
};
var G__49337 = function (props,var_args){
var children = null;
if (arguments.length > 1) {
var G__49338__i = 0, G__49338__a = new Array(arguments.length -  1);
while (G__49338__i < G__49338__a.length) {G__49338__a[G__49338__i] = arguments[G__49338__i + 1]; ++G__49338__i;}
  children = new cljs.core.IndexedSeq(G__49338__a,0,null);
} 
return G__49337__delegate.call(this,props,children);};
G__49337.cljs$lang$maxFixedArity = 1;
G__49337.cljs$lang$applyTo = (function (arglist__49339){
var props = cljs.core.first(arglist__49339);
var children = cljs.core.rest(arglist__49339);
return G__49337__delegate(props,children);
});
G__49337.cljs$core$IFn$_invoke$arity$variadic = G__49337__delegate;
return G__49337;
})()
;
});
interop.jsx.div = interop.jsx.make_element("div");
interop.jsx.p = interop.jsx.make_element("p");

//# sourceMappingURL=interop.jsx.js.map
