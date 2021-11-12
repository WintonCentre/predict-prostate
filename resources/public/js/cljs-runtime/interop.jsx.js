goog.provide('interop.jsx');
interop.jsx.jq$ = (function (){var target_obj_50577 = window;
var _STAR_runtime_state_STAR__orig_val__50579 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__50580 = oops.state.prepare_state(target_obj_50577,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__50580);

try{var next_obj_50578 = ((oops.core.validate_object_access_dynamically(target_obj_50577,(0),"jQuery",true,true,false))?(target_obj_50577["jQuery"]):null);
return next_obj_50578;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__50579);
}})();
interop.jsx.jq$find = (function interop$jsx$jq$find(id){
return (interop.jsx.jq$.cljs$core$IFn$_invoke$arity$1 ? interop.jsx.jq$.cljs$core$IFn$_invoke$arity$1(id) : interop.jsx.jq$.call(null,id));
});
interop.jsx.jq$call = (function interop$jsx$jq$call(var_args){
var G__50583 = arguments.length;
switch (G__50583) {
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
var target_obj_50587 = interop.jsx.jq$find(id);
var _STAR_runtime_state_STAR__orig_val__50605 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__50607 = oops.state.prepare_state(target_obj_50587,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__50607);

try{var call_info_50591 = oops.core.get_selector_call_info_dynamically(target_obj_50587,method);
var fn_50590 = (call_info_50591[(1)]);
if(oops.core.validate_fn_call_dynamically(fn_50590,oops.state.get_last_access_modifier())){
if((!((fn_50590 == null)))){
return fn_50590.call((call_info_50591[(0)]));
} else {
return null;
}
} else {
return null;
}
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__50605);
}}));

(interop.jsx.jq$call.cljs$core$IFn$_invoke$arity$3 = (function (id,method,p1){
var target_obj_50634 = interop.jsx.jq$find(id);
var _STAR_runtime_state_STAR__orig_val__50637 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__50638 = oops.state.prepare_state(target_obj_50634,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__50638);

try{var call_info_50636 = oops.core.get_selector_call_info_dynamically(target_obj_50634,method);
var fn_50635 = (call_info_50636[(1)]);
if(oops.core.validate_fn_call_dynamically(fn_50635,oops.state.get_last_access_modifier())){
if((!((fn_50635 == null)))){
return fn_50635.call((call_info_50636[(0)]),p1);
} else {
return null;
}
} else {
return null;
}
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__50637);
}}));

(interop.jsx.jq$call.cljs$lang$maxFixedArity = 3);

interop.jsx.create_element = (React["createElement"]);
interop.jsx.jsx = (function interop$jsx$jsx(element,props,content){
return React.createElement(element,cljs.core.clj__GT_js(props),content);
});
interop.jsx.jsx_STAR_ = (function interop$jsx$jsx_STAR_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___50674 = arguments.length;
var i__4737__auto___50675 = (0);
while(true){
if((i__4737__auto___50675 < len__4736__auto___50674)){
args__4742__auto__.push((arguments[i__4737__auto___50675]));

var G__50676 = (i__4737__auto___50675 + (1));
i__4737__auto___50675 = G__50676;
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
(interop.jsx.jsx_STAR_.cljs$lang$applyTo = (function (seq50643){
var G__50644 = cljs.core.first(seq50643);
var seq50643__$1 = cljs.core.next(seq50643);
var G__50645 = cljs.core.first(seq50643__$1);
var seq50643__$2 = cljs.core.next(seq50643__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50644,G__50645,seq50643__$2);
}));

interop.jsx.make_element = (function interop$jsx$make_element(tag){
return (function() { 
var G__50679__delegate = function (props,children){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(interop.jsx.create_element,tag,cljs.core.clj__GT_js(props),children);
};
var G__50679 = function (props,var_args){
var children = null;
if (arguments.length > 1) {
var G__50680__i = 0, G__50680__a = new Array(arguments.length -  1);
while (G__50680__i < G__50680__a.length) {G__50680__a[G__50680__i] = arguments[G__50680__i + 1]; ++G__50680__i;}
  children = new cljs.core.IndexedSeq(G__50680__a,0,null);
} 
return G__50679__delegate.call(this,props,children);};
G__50679.cljs$lang$maxFixedArity = 1;
G__50679.cljs$lang$applyTo = (function (arglist__50681){
var props = cljs.core.first(arglist__50681);
var children = cljs.core.rest(arglist__50681);
return G__50679__delegate(props,children);
});
G__50679.cljs$core$IFn$_invoke$arity$variadic = G__50679__delegate;
return G__50679;
})()
;
});
interop.jsx.div = interop.jsx.make_element("div");
interop.jsx.p = interop.jsx.make_element("p");

//# sourceMappingURL=interop.jsx.js.map
