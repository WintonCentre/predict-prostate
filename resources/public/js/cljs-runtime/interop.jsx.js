goog.provide('interop.jsx');
interop.jsx.jq$ = (function (){var target_obj_36860 = window;
var _STAR_runtime_state_STAR__orig_val__36898 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__36899 = oops.state.prepare_state(target_obj_36860,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__36899);

try{var next_obj_36888 = ((oops.core.validate_object_access_dynamically(target_obj_36860,(0),"jQuery",true,true,false))?(target_obj_36860["jQuery"]):null);
return next_obj_36888;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__36898);
}})();
interop.jsx.jq$find = (function interop$jsx$jq$find(id){
return (interop.jsx.jq$.cljs$core$IFn$_invoke$arity$1 ? interop.jsx.jq$.cljs$core$IFn$_invoke$arity$1(id) : interop.jsx.jq$.call(null,id));
});
interop.jsx.jq$call = (function interop$jsx$jq$call(var_args){
var G__36910 = arguments.length;
switch (G__36910) {
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
var target_obj_36911 = interop.jsx.jq$find(id);
var _STAR_runtime_state_STAR__orig_val__36914 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__36915 = oops.state.prepare_state(target_obj_36911,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__36915);

try{var call_info_36913 = oops.core.get_selector_call_info_dynamically(target_obj_36911,method);
var fn_36912 = (call_info_36913[(1)]);
if(oops.core.validate_fn_call_dynamically(fn_36912,oops.state.get_last_access_modifier())){
if((!((fn_36912 == null)))){
return fn_36912.call((call_info_36913[(0)]));
} else {
return null;
}
} else {
return null;
}
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__36914);
}}));

(interop.jsx.jq$call.cljs$core$IFn$_invoke$arity$3 = (function (id,method,p1){
var target_obj_36916 = interop.jsx.jq$find(id);
var _STAR_runtime_state_STAR__orig_val__36919 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__36920 = oops.state.prepare_state(target_obj_36916,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__36920);

try{var call_info_36918 = oops.core.get_selector_call_info_dynamically(target_obj_36916,method);
var fn_36917 = (call_info_36918[(1)]);
if(oops.core.validate_fn_call_dynamically(fn_36917,oops.state.get_last_access_modifier())){
if((!((fn_36917 == null)))){
return fn_36917.call((call_info_36918[(0)]),p1);
} else {
return null;
}
} else {
return null;
}
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__36919);
}}));

(interop.jsx.jq$call.cljs$lang$maxFixedArity = 3);

interop.jsx.create_element = (React["createElement"]);
interop.jsx.jsx = (function interop$jsx$jsx(element,props,content){
return React.createElement(element,cljs.core.clj__GT_js(props),content);
});
interop.jsx.jsx_STAR_ = (function interop$jsx$jsx_STAR_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___36925 = arguments.length;
var i__4819__auto___36926 = (0);
while(true){
if((i__4819__auto___36926 < len__4818__auto___36925)){
args__4824__auto__.push((arguments[i__4819__auto___36926]));

var G__36927 = (i__4819__auto___36926 + (1));
i__4819__auto___36926 = G__36927;
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
(interop.jsx.jsx_STAR_.cljs$lang$applyTo = (function (seq36921){
var G__36922 = cljs.core.first(seq36921);
var seq36921__$1 = cljs.core.next(seq36921);
var G__36923 = cljs.core.first(seq36921__$1);
var seq36921__$2 = cljs.core.next(seq36921__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36922,G__36923,seq36921__$2);
}));

interop.jsx.make_element = (function interop$jsx$make_element(tag){
return (function() { 
var G__36928__delegate = function (props,children){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(interop.jsx.create_element,tag,cljs.core.clj__GT_js(props),children);
};
var G__36928 = function (props,var_args){
var children = null;
if (arguments.length > 1) {
var G__36929__i = 0, G__36929__a = new Array(arguments.length -  1);
while (G__36929__i < G__36929__a.length) {G__36929__a[G__36929__i] = arguments[G__36929__i + 1]; ++G__36929__i;}
  children = new cljs.core.IndexedSeq(G__36929__a,0,null);
} 
return G__36928__delegate.call(this,props,children);};
G__36928.cljs$lang$maxFixedArity = 1;
G__36928.cljs$lang$applyTo = (function (arglist__36930){
var props = cljs.core.first(arglist__36930);
var children = cljs.core.rest(arglist__36930);
return G__36928__delegate(props,children);
});
G__36928.cljs$core$IFn$_invoke$arity$variadic = G__36928__delegate;
return G__36928;
})()
;
});
interop.jsx.div = interop.jsx.make_element("div");
interop.jsx.p = interop.jsx.make_element("p");

//# sourceMappingURL=interop.jsx.js.map
