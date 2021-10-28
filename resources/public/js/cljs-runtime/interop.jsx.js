goog.provide('interop.jsx');
interop.jsx.jq$ = (function (){var target_obj_45199 = window;
var _STAR_runtime_state_STAR__orig_val__45206 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__45207 = oops.state.prepare_state(target_obj_45199,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__45207);

try{var next_obj_45204 = ((oops.core.validate_object_access_dynamically(target_obj_45199,(0),"jQuery",true,true,false))?(target_obj_45199["jQuery"]):null);
return next_obj_45204;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__45206);
}})();
interop.jsx.jq$find = (function interop$jsx$jq$find(id){
return (interop.jsx.jq$.cljs$core$IFn$_invoke$arity$1 ? interop.jsx.jq$.cljs$core$IFn$_invoke$arity$1(id) : interop.jsx.jq$.call(null,id));
});
interop.jsx.jq$call = (function interop$jsx$jq$call(var_args){
var G__45209 = arguments.length;
switch (G__45209) {
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
var target_obj_45215 = interop.jsx.jq$find(id);
var _STAR_runtime_state_STAR__orig_val__45220 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__45221 = oops.state.prepare_state(target_obj_45215,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__45221);

try{var call_info_45217 = oops.core.get_selector_call_info_dynamically(target_obj_45215,method);
var fn_45216 = (call_info_45217[(1)]);
if(oops.core.validate_fn_call_dynamically(fn_45216,oops.state.get_last_access_modifier())){
if((!((fn_45216 == null)))){
return fn_45216.call((call_info_45217[(0)]));
} else {
return null;
}
} else {
return null;
}
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__45220);
}}));

(interop.jsx.jq$call.cljs$core$IFn$_invoke$arity$3 = (function (id,method,p1){
var target_obj_45223 = interop.jsx.jq$find(id);
var _STAR_runtime_state_STAR__orig_val__45229 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__45230 = oops.state.prepare_state(target_obj_45223,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__45230);

try{var call_info_45225 = oops.core.get_selector_call_info_dynamically(target_obj_45223,method);
var fn_45224 = (call_info_45225[(1)]);
if(oops.core.validate_fn_call_dynamically(fn_45224,oops.state.get_last_access_modifier())){
if((!((fn_45224 == null)))){
return fn_45224.call((call_info_45225[(0)]),p1);
} else {
return null;
}
} else {
return null;
}
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__45229);
}}));

(interop.jsx.jq$call.cljs$lang$maxFixedArity = 3);

interop.jsx.create_element = (React["createElement"]);
interop.jsx.jsx = (function interop$jsx$jsx(element,props,content){
return React.createElement(element,cljs.core.clj__GT_js(props),content);
});
interop.jsx.jsx_STAR_ = (function interop$jsx$jsx_STAR_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___45244 = arguments.length;
var i__4737__auto___45246 = (0);
while(true){
if((i__4737__auto___45246 < len__4736__auto___45244)){
args__4742__auto__.push((arguments[i__4737__auto___45246]));

var G__45248 = (i__4737__auto___45246 + (1));
i__4737__auto___45246 = G__45248;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return interop.jsx.jsx_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(interop.jsx.jsx_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (element,props,children){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(interop.jsx.create_element,element,cljs.core.clj__GT_js(props),children);
}));

(interop.jsx.jsx_STAR_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(interop.jsx.jsx_STAR_.cljs$lang$applyTo = (function (seq45231){
var G__45232 = cljs.core.first(seq45231);
var seq45231__$1 = cljs.core.next(seq45231);
var G__45233 = cljs.core.first(seq45231__$1);
var seq45231__$2 = cljs.core.next(seq45231__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45232,G__45233,seq45231__$2);
}));

interop.jsx.make_element = (function interop$jsx$make_element(tag){
return (function() { 
var G__45249__delegate = function (props,children){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(interop.jsx.create_element,tag,cljs.core.clj__GT_js(props),children);
};
var G__45249 = function (props,var_args){
var children = null;
if (arguments.length > 1) {
var G__45250__i = 0, G__45250__a = new Array(arguments.length -  1);
while (G__45250__i < G__45250__a.length) {G__45250__a[G__45250__i] = arguments[G__45250__i + 1]; ++G__45250__i;}
  children = new cljs.core.IndexedSeq(G__45250__a,0,null);
} 
return G__45249__delegate.call(this,props,children);};
G__45249.cljs$lang$maxFixedArity = 1;
G__45249.cljs$lang$applyTo = (function (arglist__45251){
var props = cljs.core.first(arglist__45251);
var children = cljs.core.rest(arglist__45251);
return G__45249__delegate(props,children);
});
G__45249.cljs$core$IFn$_invoke$arity$variadic = G__45249__delegate;
return G__45249;
})()
;
});
interop.jsx.div = interop.jsx.make_element("div");
interop.jsx.p = interop.jsx.make_element("p");

//# sourceMappingURL=interop.jsx.js.map
