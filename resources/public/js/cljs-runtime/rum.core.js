goog.provide('rum.core');
/**
 * Given React component, returns Rum state associated with it.
 */
rum.core.state = (function rum$core$state(comp){
return goog.object.get(comp.state,":rum/state");
});
rum.core.extend_BANG_ = (function rum$core$extend_BANG_(obj,props){
var seq__43154 = cljs.core.seq(props);
var chunk__43156 = null;
var count__43157 = (0);
var i__43158 = (0);
while(true){
if((i__43158 < count__43157)){
var vec__43168 = chunk__43156.cljs$core$IIndexed$_nth$arity$2(null,i__43158);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43168,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43168,(1),null);
if((!((v == null)))){
goog.object.set(obj,cljs.core.name(k),cljs.core.clj__GT_js(v));


var G__43311 = seq__43154;
var G__43312 = chunk__43156;
var G__43313 = count__43157;
var G__43314 = (i__43158 + (1));
seq__43154 = G__43311;
chunk__43156 = G__43312;
count__43157 = G__43313;
i__43158 = G__43314;
continue;
} else {
var G__43315 = seq__43154;
var G__43316 = chunk__43156;
var G__43317 = count__43157;
var G__43318 = (i__43158 + (1));
seq__43154 = G__43315;
chunk__43156 = G__43316;
count__43157 = G__43317;
i__43158 = G__43318;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__43154);
if(temp__5735__auto__){
var seq__43154__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__43154__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__43154__$1);
var G__43320 = cljs.core.chunk_rest(seq__43154__$1);
var G__43321 = c__4556__auto__;
var G__43322 = cljs.core.count(c__4556__auto__);
var G__43323 = (0);
seq__43154 = G__43320;
chunk__43156 = G__43321;
count__43157 = G__43322;
i__43158 = G__43323;
continue;
} else {
var vec__43172 = cljs.core.first(seq__43154__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43172,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43172,(1),null);
if((!((v == null)))){
goog.object.set(obj,cljs.core.name(k),cljs.core.clj__GT_js(v));


var G__43325 = cljs.core.next(seq__43154__$1);
var G__43326 = null;
var G__43327 = (0);
var G__43328 = (0);
seq__43154 = G__43325;
chunk__43156 = G__43326;
count__43157 = G__43327;
i__43158 = G__43328;
continue;
} else {
var G__43329 = cljs.core.next(seq__43154__$1);
var G__43330 = null;
var G__43331 = (0);
var G__43332 = (0);
seq__43154 = G__43329;
chunk__43156 = G__43330;
count__43157 = G__43331;
i__43158 = G__43332;
continue;
}
}
} else {
return null;
}
}
break;
}
});
rum.core.build_class = (function rum$core$build_class(render,mixins,display_name){
var init = rum.util.collect(new cljs.core.Keyword(null,"init","init",-1875481434),mixins);
var will_mount = rum.util.collect_STAR_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"will-mount","will-mount",-434633071),new cljs.core.Keyword(null,"before-render","before-render",71256781)], null),mixins);
var render__$1 = render;
var wrap_render = rum.util.collect(new cljs.core.Keyword(null,"wrap-render","wrap-render",1782000986),mixins);
var wrapped_render = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__43177_SHARP_,p2__43176_SHARP_){
return (p2__43176_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p2__43176_SHARP_.cljs$core$IFn$_invoke$arity$1(p1__43177_SHARP_) : p2__43176_SHARP_.call(null,p1__43177_SHARP_));
}),render__$1,wrap_render);
var did_mount = rum.util.collect_STAR_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),new cljs.core.Keyword(null,"after-render","after-render",1997533433)], null),mixins);
var did_remount = rum.util.collect(new cljs.core.Keyword(null,"did-remount","did-remount",1362550500),mixins);
var should_update = rum.util.collect(new cljs.core.Keyword(null,"should-update","should-update",-1292781795),mixins);
var will_update = rum.util.collect_STAR_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"will-update","will-update",328062998),new cljs.core.Keyword(null,"before-render","before-render",71256781)], null),mixins);
var did_update = rum.util.collect_STAR_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"did-update","did-update",-2143702256),new cljs.core.Keyword(null,"after-render","after-render",1997533433)], null),mixins);
var did_catch = rum.util.collect(new cljs.core.Keyword(null,"did-catch","did-catch",2139522313),mixins);
var will_unmount = rum.util.collect(new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),mixins);
var child_context = rum.util.collect(new cljs.core.Keyword(null,"child-context","child-context",-1375270295),mixins);
var class_props = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,rum.util.collect(new cljs.core.Keyword(null,"class-properties","class-properties",1351279702),mixins));
var static_props = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,rum.util.collect(new cljs.core.Keyword(null,"static-properties","static-properties",-577838503),mixins));
var ctor = (function (props){
var this$ = this;
goog.object.set(this$,"state",({":rum/state": cljs.core.volatile_BANG_(rum.util.call_all.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(goog.object.get(props,":rum/initial-state"),new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248),this$),init,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props], 0)))}));

return React.Component.call(this$,props);
});
var _ = goog.inherits(ctor,React.Component);
var prototype = goog.object.get(ctor,"prototype");
if(cljs.core.empty_QMARK_(will_mount)){
} else {
goog.object.set(prototype,"componentWillMount",(function (){
var this$ = this;
return cljs.core._vreset_BANG_(rum.core.state(this$),rum.util.call_all(cljs.core._deref(rum.core.state(this$)),will_mount));
}));
}

if(cljs.core.empty_QMARK_(did_mount)){
} else {
goog.object.set(prototype,"componentDidMount",(function (){
var this$ = this;
return cljs.core._vreset_BANG_(rum.core.state(this$),rum.util.call_all(cljs.core._deref(rum.core.state(this$)),did_mount));
}));
}

goog.object.set(prototype,"componentWillReceiveProps",(function (next_props){
var this$ = this;
var old_state = cljs.core.deref(rum.core.state(this$));
var state = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([old_state,goog.object.get(next_props,":rum/initial-state")], 0));
var next_state = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__43180_SHARP_,p2__43179_SHARP_){
return (p2__43179_SHARP_.cljs$core$IFn$_invoke$arity$2 ? p2__43179_SHARP_.cljs$core$IFn$_invoke$arity$2(old_state,p1__43180_SHARP_) : p2__43179_SHARP_.call(null,old_state,p1__43180_SHARP_));
}),state,did_remount);
return this$.setState(({":rum/state": cljs.core.volatile_BANG_(next_state)}));
}));

if(cljs.core.empty_QMARK_(should_update)){
} else {
goog.object.set(prototype,"shouldComponentUpdate",(function (next_props,next_state){
var this$ = this;
var old_state = cljs.core.deref(rum.core.state(this$));
var new_state = cljs.core.deref(goog.object.get(next_state,":rum/state"));
var or__4126__auto__ = cljs.core.some((function (p1__43181_SHARP_){
return (p1__43181_SHARP_.cljs$core$IFn$_invoke$arity$2 ? p1__43181_SHARP_.cljs$core$IFn$_invoke$arity$2(old_state,new_state) : p1__43181_SHARP_.call(null,old_state,new_state));
}),should_update);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return false;
}
}));
}

if(cljs.core.empty_QMARK_(will_update)){
} else {
goog.object.set(prototype,"componentWillUpdate",(function (___$1,next_state){
var this$ = this;
var new_state = goog.object.get(next_state,":rum/state");
return cljs.core._vreset_BANG_(new_state,rum.util.call_all(cljs.core._deref(new_state),will_update));
}));
}

goog.object.set(prototype,"render",(function (){
var this$ = this;
var state = rum.core.state(this$);
var vec__43185 = (function (){var G__43188 = cljs.core.deref(state);
return (wrapped_render.cljs$core$IFn$_invoke$arity$1 ? wrapped_render.cljs$core$IFn$_invoke$arity$1(G__43188) : wrapped_render.call(null,G__43188));
})();
var dom = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43185,(0),null);
var next_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43185,(1),null);
cljs.core.vreset_BANG_(state,next_state);

return dom;
}));

if(cljs.core.empty_QMARK_(did_update)){
} else {
goog.object.set(prototype,"componentDidUpdate",(function (___$1,___$2){
var this$ = this;
return cljs.core._vreset_BANG_(rum.core.state(this$),rum.util.call_all(cljs.core._deref(rum.core.state(this$)),did_update));
}));
}

if(cljs.core.empty_QMARK_(did_catch)){
} else {
goog.object.set(prototype,"componentDidCatch",(function (error,info){
var this$ = this;
cljs.core._vreset_BANG_(rum.core.state(this$),rum.util.call_all.cljs$core$IFn$_invoke$arity$variadic(cljs.core._deref(rum.core.state(this$)),did_catch,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([error,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","component-stack","rum/component-stack",2037541138),goog.object.get(info,"componentStack")], null)], 0)));

return this$.forceUpdate();
}));
}

goog.object.set(prototype,"componentWillUnmount",(function (){
var this$ = this;
if(cljs.core.empty_QMARK_(will_unmount)){
} else {
cljs.core._vreset_BANG_(rum.core.state(this$),rum.util.call_all(cljs.core._deref(rum.core.state(this$)),will_unmount));
}

return goog.object.set(this$,":rum/unmounted?",true);
}));

if(cljs.core.empty_QMARK_(child_context)){
} else {
goog.object.set(prototype,"getChildContext",(function (){
var this$ = this;
var state = cljs.core.deref(rum.core.state(this$));
return cljs.core.clj__GT_js(cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__43182_SHARP_){
return (p1__43182_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__43182_SHARP_.cljs$core$IFn$_invoke$arity$1(state) : p1__43182_SHARP_.call(null,state));
})),cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY,child_context));
}));
}

rum.core.extend_BANG_(prototype,class_props);

goog.object.set(ctor,"displayName",display_name);

rum.core.extend_BANG_(ctor,static_props);

return ctor;
});
rum.core.build_ctor = (function rum$core$build_ctor(render,mixins,display_name){
var class$ = rum.core.build_class(render,mixins,display_name);
var key_fn = cljs.core.first(rum.util.collect(new cljs.core.Keyword(null,"key-fn","key-fn",-636154479),mixins));
var ctor = (((!((key_fn == null))))?(function() { 
var G__43368__delegate = function (args){
var props = ({":rum/initial-state": new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","args","rum/args",1315791754),args], null), "key": cljs.core.apply.cljs$core$IFn$_invoke$arity$2(key_fn,args)});
return React.createElement(class$,props);
};
var G__43368 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43374__i = 0, G__43374__a = new Array(arguments.length -  0);
while (G__43374__i < G__43374__a.length) {G__43374__a[G__43374__i] = arguments[G__43374__i + 0]; ++G__43374__i;}
  args = new cljs.core.IndexedSeq(G__43374__a,0,null);
} 
return G__43368__delegate.call(this,args);};
G__43368.cljs$lang$maxFixedArity = 0;
G__43368.cljs$lang$applyTo = (function (arglist__43375){
var args = cljs.core.seq(arglist__43375);
return G__43368__delegate(args);
});
G__43368.cljs$core$IFn$_invoke$arity$variadic = G__43368__delegate;
return G__43368;
})()
:(function() { 
var G__43380__delegate = function (args){
var props = ({":rum/initial-state": new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","args","rum/args",1315791754),args], null)});
return React.createElement(class$,props);
};
var G__43380 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43382__i = 0, G__43382__a = new Array(arguments.length -  0);
while (G__43382__i < G__43382__a.length) {G__43382__a[G__43382__i] = arguments[G__43382__i + 0]; ++G__43382__i;}
  args = new cljs.core.IndexedSeq(G__43382__a,0,null);
} 
return G__43380__delegate.call(this,args);};
G__43380.cljs$lang$maxFixedArity = 0;
G__43380.cljs$lang$applyTo = (function (arglist__43383){
var args = cljs.core.seq(arglist__43383);
return G__43380__delegate(args);
});
G__43380.cljs$core$IFn$_invoke$arity$variadic = G__43380__delegate;
return G__43380;
})()
);
return cljs.core.with_meta(ctor,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class$], null));
});
rum.core.build_defc = (function rum$core$build_defc(render_body,mixins,display_name){
if(cljs.core.empty_QMARK_(mixins)){
var class$ = (function (props){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_body,(props[":rum/args"]));
});
var _ = (class$["displayName"] = display_name);
var ctor = (function() { 
var G__43389__delegate = function (args){
return React.createElement(class$,({":rum/args": args}));
};
var G__43389 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43390__i = 0, G__43390__a = new Array(arguments.length -  0);
while (G__43390__i < G__43390__a.length) {G__43390__a[G__43390__i] = arguments[G__43390__i + 0]; ++G__43390__i;}
  args = new cljs.core.IndexedSeq(G__43390__a,0,null);
} 
return G__43389__delegate.call(this,args);};
G__43389.cljs$lang$maxFixedArity = 0;
G__43389.cljs$lang$applyTo = (function (arglist__43391){
var args = cljs.core.seq(arglist__43391);
return G__43389__delegate(args);
});
G__43389.cljs$core$IFn$_invoke$arity$variadic = G__43389__delegate;
return G__43389;
})()
;
return cljs.core.with_meta(ctor,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class$], null));
} else {
var render = (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_body,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)),state], null);
});
return rum.core.build_ctor(render,mixins,display_name);
}
});
rum.core.build_defcs = (function rum$core$build_defcs(render_body,mixins,display_name){
var render = (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.cljs$core$IFn$_invoke$arity$3(render_body,state,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)),state], null);
});
return rum.core.build_ctor(render,mixins,display_name);
});
rum.core.build_defcc = (function rum$core$build_defcc(render_body,mixins,display_name){
var render = (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.cljs$core$IFn$_invoke$arity$3(render_body,new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)),state], null);
});
return rum.core.build_ctor(render,mixins,display_name);
});
rum.core.schedule = (function (){var or__4126__auto__ = (((typeof window !== 'undefined'))?(function (){var or__4126__auto__ = window.requestAnimationFrame;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = window.webkitRequestAnimationFrame;
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
var or__4126__auto____$2 = window.mozRequestAnimationFrame;
if(cljs.core.truth_(or__4126__auto____$2)){
return or__4126__auto____$2;
} else {
return window.msRequestAnimationFrame;
}
}
}
})():false);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (function (p1__43199_SHARP_){
return setTimeout(p1__43199_SHARP_,(16));
});
}
})();
rum.core.batch = (function (){var or__4126__auto__ = (((typeof ReactNative !== 'undefined'))?ReactNative.unstable_batchedUpdates:null);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = (((typeof ReactDOM !== 'undefined'))?ReactDOM.unstable_batchedUpdates:null);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return (function (f,a){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(a) : f.call(null,a));
});
}
}
})();
rum.core.empty_queue = cljs.core.PersistentVector.EMPTY;
rum.core.render_queue = cljs.core.volatile_BANG_(rum.core.empty_queue);
rum.core.render_all = (function rum$core$render_all(queue){
var seq__43208 = cljs.core.seq(queue);
var chunk__43210 = null;
var count__43211 = (0);
var i__43212 = (0);
while(true){
if((i__43212 < count__43211)){
var comp = chunk__43210.cljs$core$IIndexed$_nth$arity$2(null,i__43212);
if(cljs.core.not(goog.object.get(comp,":rum/unmounted?"))){
comp.forceUpdate();


var G__43397 = seq__43208;
var G__43398 = chunk__43210;
var G__43399 = count__43211;
var G__43400 = (i__43212 + (1));
seq__43208 = G__43397;
chunk__43210 = G__43398;
count__43211 = G__43399;
i__43212 = G__43400;
continue;
} else {
var G__43401 = seq__43208;
var G__43402 = chunk__43210;
var G__43403 = count__43211;
var G__43404 = (i__43212 + (1));
seq__43208 = G__43401;
chunk__43210 = G__43402;
count__43211 = G__43403;
i__43212 = G__43404;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__43208);
if(temp__5735__auto__){
var seq__43208__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__43208__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__43208__$1);
var G__43405 = cljs.core.chunk_rest(seq__43208__$1);
var G__43406 = c__4556__auto__;
var G__43407 = cljs.core.count(c__4556__auto__);
var G__43408 = (0);
seq__43208 = G__43405;
chunk__43210 = G__43406;
count__43211 = G__43407;
i__43212 = G__43408;
continue;
} else {
var comp = cljs.core.first(seq__43208__$1);
if(cljs.core.not(goog.object.get(comp,":rum/unmounted?"))){
comp.forceUpdate();


var G__43409 = cljs.core.next(seq__43208__$1);
var G__43410 = null;
var G__43411 = (0);
var G__43412 = (0);
seq__43208 = G__43409;
chunk__43210 = G__43410;
count__43211 = G__43411;
i__43212 = G__43412;
continue;
} else {
var G__43414 = cljs.core.next(seq__43208__$1);
var G__43415 = null;
var G__43416 = (0);
var G__43417 = (0);
seq__43208 = G__43414;
chunk__43210 = G__43415;
count__43211 = G__43416;
i__43212 = G__43417;
continue;
}
}
} else {
return null;
}
}
break;
}
});
rum.core.render = (function rum$core$render(){
var queue = cljs.core.deref(rum.core.render_queue);
cljs.core.vreset_BANG_(rum.core.render_queue,rum.core.empty_queue);

return (rum.core.batch.cljs$core$IFn$_invoke$arity$2 ? rum.core.batch.cljs$core$IFn$_invoke$arity$2(rum.core.render_all,queue) : rum.core.batch.call(null,rum.core.render_all,queue));
});
/**
 * Schedules react component to be rendered on next animation frame.
 */
rum.core.request_render = (function rum$core$request_render(component){
if(cljs.core.empty_QMARK_(cljs.core.deref(rum.core.render_queue))){
(rum.core.schedule.cljs$core$IFn$_invoke$arity$1 ? rum.core.schedule.cljs$core$IFn$_invoke$arity$1(rum.core.render) : rum.core.schedule.call(null,rum.core.render));
} else {
}

return rum.core.render_queue.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(rum.core.render_queue.cljs$core$IDeref$_deref$arity$1(null),component));
});
/**
 * Add element to the DOM tree. Idempotent. Subsequent mounts will just update element.
 */
rum.core.mount = (function rum$core$mount(element,node){
ReactDOM.render(element,node);

return null;
});
/**
 * Removes component from the DOM tree.
 */
rum.core.unmount = (function rum$core$unmount(node){
return ReactDOM.unmountComponentAtNode(node);
});
/**
 * Same as [[mount]] but must be called on DOM tree already rendered by a server via [[render-html]].
 */
rum.core.hydrate = (function rum$core$hydrate(element,node){
return ReactDOM.hydrate(element,node);
});
/**
 * Render `element` in a DOM `node` that is ouside of current DOM hierarchy.
 */
rum.core.portal = (function rum$core$portal(element,node){
return ReactDOM.createPortal(element,node);
});
/**
 * Adds React key to element.
 * 
 * ```
 * (rum/defc label [text] [:div text])
 * 
 * (-> (label)
 *     (rum/with-key "abc")
 *     (rum/mount js/document.body))
 * ```
 */
rum.core.with_key = (function rum$core$with_key(element,key){
return React.cloneElement(element,({"key": key}),null);
});
/**
 * Adds React ref (string or callback) to element.
 * 
 * ```
 * (rum/defc label [text] [:div text])
 * 
 * (-> (label)
 *     (rum/with-ref "abc")
 *     (rum/mount js/document.body))
 * ```
 */
rum.core.with_ref = (function rum$core$with_ref(element,ref){
return React.cloneElement(element,({"ref": ref}),null);
});
/**
 * Given state, returns top-level DOM node of component. Call it during lifecycle callbacks. Can’t be called during render.
 */
rum.core.dom_node = (function rum$core$dom_node(state){
return ReactDOM.findDOMNode(new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state));
});
/**
 * Given state and ref handle, returns React component.
 */
rum.core.ref = (function rum$core$ref(state,key){
return ((new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state)["refs"])[cljs.core.name(key)]);
});
/**
 * Given state and ref handle, returns DOM node associated with ref.
 */
rum.core.ref_node = (function rum$core$ref_node(state,key){
return ReactDOM.findDOMNode(rum.core.ref(state,cljs.core.name(key)));
});
/**
 * Mixin. Will avoid re-render if none of component’s arguments have changed. Does equality check (`=`) on all arguments.
 *   
 * ```
 * (rum/defc label < rum/static
 *   [text]
 *   [:div text])
 *   
 * (rum/mount (label "abc") js/document.body)
 * 
 * ;; def != abc, will re-render
 * (rum/mount (label "def") js/document.body)
 * 
 * ;; def == def, won’t re-render
 * (rum/mount (label "def") js/document.body)
 * ```
 */
rum.core.static$ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"should-update","should-update",-1292781795),(function (old_state,new_state){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(old_state),new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(new_state));
})], null);
/**
 * Mixin constructor. Adds an atom to component’s state that can be used to keep stuff during component’s lifecycle. Component will be re-rendered if atom’s value changes. Atom is stored under user-provided key or under `:rum/local` by default.
 *   
 * ```
 * (rum/defcs counter < (rum/local 0 :cnt)
 *   [state label]
 *   (let [*cnt (:cnt state)]
 *     [:div {:on-click (fn [_] (swap! *cnt inc))}
 *       label @*cnt]))
 * 
 * (rum/mount (counter "Click count: "))
 * ```
 */
rum.core.local = (function rum$core$local(var_args){
var G__43221 = arguments.length;
switch (G__43221) {
case 1:
return rum.core.local.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rum.core.local.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rum.core.local.cljs$core$IFn$_invoke$arity$1 = (function (initial){
return rum.core.local.cljs$core$IFn$_invoke$arity$2(initial,new cljs.core.Keyword("rum","local","rum/local",-1497916586));
}));

(rum.core.local.cljs$core$IFn$_invoke$arity$2 = (function (initial,key){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"will-mount","will-mount",-434633071),(function (state){
var local_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(initial);
var component = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
cljs.core.add_watch(local_state,key,(function (_,___$1,___$2,___$3){
return rum.core.request_render(component);
}));

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,key,local_state);
})], null);
}));

(rum.core.local.cljs$lang$maxFixedArity = 2);

/**
 * Mixin. Works in conjunction with [[react]].
 *   
 * ```
 * (rum/defc comp < rum/reactive
 *   [*counter]
 *   [:div (rum/react counter)])
 * 
 * (def *counter (atom 0))
 * (rum/mount (comp *counter) js/document.body)
 * (swap! *counter inc) ;; will force comp to re-render
 * ```
 */
rum.core.reactive = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),(function (state,props){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142),cljs.core.random_uuid());
}),new cljs.core.Keyword(null,"wrap-render","wrap-render",1782000986),(function (render_fn){
return (function (state){
var _STAR_reactions_STAR__orig_val__43230 = rum.core._STAR_reactions_STAR_;
var _STAR_reactions_STAR__temp_val__43231 = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);
(rum.core._STAR_reactions_STAR_ = _STAR_reactions_STAR__temp_val__43231);

try{var comp = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
var old_reactions = new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325).cljs$core$IFn$_invoke$arity$2(state,cljs.core.PersistentHashSet.EMPTY);
var vec__43232 = (render_fn.cljs$core$IFn$_invoke$arity$1 ? render_fn.cljs$core$IFn$_invoke$arity$1(state) : render_fn.call(null,state));
var dom = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43232,(0),null);
var next_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43232,(1),null);
var new_reactions = cljs.core.deref(rum.core._STAR_reactions_STAR_);
var key = new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142).cljs$core$IFn$_invoke$arity$1(state);
var seq__43235_43431 = cljs.core.seq(old_reactions);
var chunk__43236_43432 = null;
var count__43237_43433 = (0);
var i__43238_43434 = (0);
while(true){
if((i__43238_43434 < count__43237_43433)){
var ref_43435 = chunk__43236_43432.cljs$core$IIndexed$_nth$arity$2(null,i__43238_43434);
if(cljs.core.contains_QMARK_(new_reactions,ref_43435)){
} else {
cljs.core.remove_watch(ref_43435,key);
}


var G__43436 = seq__43235_43431;
var G__43437 = chunk__43236_43432;
var G__43438 = count__43237_43433;
var G__43439 = (i__43238_43434 + (1));
seq__43235_43431 = G__43436;
chunk__43236_43432 = G__43437;
count__43237_43433 = G__43438;
i__43238_43434 = G__43439;
continue;
} else {
var temp__5735__auto___43440 = cljs.core.seq(seq__43235_43431);
if(temp__5735__auto___43440){
var seq__43235_43441__$1 = temp__5735__auto___43440;
if(cljs.core.chunked_seq_QMARK_(seq__43235_43441__$1)){
var c__4556__auto___43442 = cljs.core.chunk_first(seq__43235_43441__$1);
var G__43443 = cljs.core.chunk_rest(seq__43235_43441__$1);
var G__43444 = c__4556__auto___43442;
var G__43445 = cljs.core.count(c__4556__auto___43442);
var G__43446 = (0);
seq__43235_43431 = G__43443;
chunk__43236_43432 = G__43444;
count__43237_43433 = G__43445;
i__43238_43434 = G__43446;
continue;
} else {
var ref_43447 = cljs.core.first(seq__43235_43441__$1);
if(cljs.core.contains_QMARK_(new_reactions,ref_43447)){
} else {
cljs.core.remove_watch(ref_43447,key);
}


var G__43448 = cljs.core.next(seq__43235_43441__$1);
var G__43449 = null;
var G__43450 = (0);
var G__43451 = (0);
seq__43235_43431 = G__43448;
chunk__43236_43432 = G__43449;
count__43237_43433 = G__43450;
i__43238_43434 = G__43451;
continue;
}
} else {
}
}
break;
}

var seq__43246_43452 = cljs.core.seq(new_reactions);
var chunk__43247_43453 = null;
var count__43248_43454 = (0);
var i__43249_43455 = (0);
while(true){
if((i__43249_43455 < count__43248_43454)){
var ref_43456 = chunk__43247_43453.cljs$core$IIndexed$_nth$arity$2(null,i__43249_43455);
if(cljs.core.contains_QMARK_(old_reactions,ref_43456)){
} else {
cljs.core.add_watch(ref_43456,key,((function (seq__43246_43452,chunk__43247_43453,count__43248_43454,i__43249_43455,ref_43456,comp,old_reactions,vec__43232,dom,next_state,new_reactions,key,_STAR_reactions_STAR__orig_val__43230,_STAR_reactions_STAR__temp_val__43231){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render(comp);
});})(seq__43246_43452,chunk__43247_43453,count__43248_43454,i__43249_43455,ref_43456,comp,old_reactions,vec__43232,dom,next_state,new_reactions,key,_STAR_reactions_STAR__orig_val__43230,_STAR_reactions_STAR__temp_val__43231))
);
}


var G__43457 = seq__43246_43452;
var G__43458 = chunk__43247_43453;
var G__43459 = count__43248_43454;
var G__43460 = (i__43249_43455 + (1));
seq__43246_43452 = G__43457;
chunk__43247_43453 = G__43458;
count__43248_43454 = G__43459;
i__43249_43455 = G__43460;
continue;
} else {
var temp__5735__auto___43461 = cljs.core.seq(seq__43246_43452);
if(temp__5735__auto___43461){
var seq__43246_43462__$1 = temp__5735__auto___43461;
if(cljs.core.chunked_seq_QMARK_(seq__43246_43462__$1)){
var c__4556__auto___43463 = cljs.core.chunk_first(seq__43246_43462__$1);
var G__43464 = cljs.core.chunk_rest(seq__43246_43462__$1);
var G__43465 = c__4556__auto___43463;
var G__43466 = cljs.core.count(c__4556__auto___43463);
var G__43467 = (0);
seq__43246_43452 = G__43464;
chunk__43247_43453 = G__43465;
count__43248_43454 = G__43466;
i__43249_43455 = G__43467;
continue;
} else {
var ref_43468 = cljs.core.first(seq__43246_43462__$1);
if(cljs.core.contains_QMARK_(old_reactions,ref_43468)){
} else {
cljs.core.add_watch(ref_43468,key,((function (seq__43246_43452,chunk__43247_43453,count__43248_43454,i__43249_43455,ref_43468,seq__43246_43462__$1,temp__5735__auto___43461,comp,old_reactions,vec__43232,dom,next_state,new_reactions,key,_STAR_reactions_STAR__orig_val__43230,_STAR_reactions_STAR__temp_val__43231){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render(comp);
});})(seq__43246_43452,chunk__43247_43453,count__43248_43454,i__43249_43455,ref_43468,seq__43246_43462__$1,temp__5735__auto___43461,comp,old_reactions,vec__43232,dom,next_state,new_reactions,key,_STAR_reactions_STAR__orig_val__43230,_STAR_reactions_STAR__temp_val__43231))
);
}


var G__43469 = cljs.core.next(seq__43246_43462__$1);
var G__43470 = null;
var G__43471 = (0);
var G__43472 = (0);
seq__43246_43452 = G__43469;
chunk__43247_43453 = G__43470;
count__43248_43454 = G__43471;
i__43249_43455 = G__43472;
continue;
}
} else {
}
}
break;
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dom,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(next_state,new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325),new_reactions)], null);
}finally {(rum.core._STAR_reactions_STAR_ = _STAR_reactions_STAR__orig_val__43230);
}});
}),new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (state){
var key_43473 = new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142).cljs$core$IFn$_invoke$arity$1(state);
var seq__43268_43474 = cljs.core.seq(new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325).cljs$core$IFn$_invoke$arity$1(state));
var chunk__43269_43475 = null;
var count__43270_43476 = (0);
var i__43271_43477 = (0);
while(true){
if((i__43271_43477 < count__43270_43476)){
var ref_43478 = chunk__43269_43475.cljs$core$IIndexed$_nth$arity$2(null,i__43271_43477);
cljs.core.remove_watch(ref_43478,key_43473);


var G__43479 = seq__43268_43474;
var G__43480 = chunk__43269_43475;
var G__43481 = count__43270_43476;
var G__43482 = (i__43271_43477 + (1));
seq__43268_43474 = G__43479;
chunk__43269_43475 = G__43480;
count__43270_43476 = G__43481;
i__43271_43477 = G__43482;
continue;
} else {
var temp__5735__auto___43483 = cljs.core.seq(seq__43268_43474);
if(temp__5735__auto___43483){
var seq__43268_43484__$1 = temp__5735__auto___43483;
if(cljs.core.chunked_seq_QMARK_(seq__43268_43484__$1)){
var c__4556__auto___43485 = cljs.core.chunk_first(seq__43268_43484__$1);
var G__43486 = cljs.core.chunk_rest(seq__43268_43484__$1);
var G__43487 = c__4556__auto___43485;
var G__43488 = cljs.core.count(c__4556__auto___43485);
var G__43489 = (0);
seq__43268_43474 = G__43486;
chunk__43269_43475 = G__43487;
count__43270_43476 = G__43488;
i__43271_43477 = G__43489;
continue;
} else {
var ref_43490 = cljs.core.first(seq__43268_43484__$1);
cljs.core.remove_watch(ref_43490,key_43473);


var G__43491 = cljs.core.next(seq__43268_43484__$1);
var G__43492 = null;
var G__43493 = (0);
var G__43494 = (0);
seq__43268_43474 = G__43491;
chunk__43269_43475 = G__43492;
count__43270_43476 = G__43493;
i__43271_43477 = G__43494;
continue;
}
} else {
}
}
break;
}

return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142)], 0));
})], null);
/**
 * Works in conjunction with [[reactive]] mixin. Use this function instead of `deref` inside render, and your component will subscribe to changes happening to the derefed atom.
 */
rum.core.react = (function rum$core$react(ref){
if(cljs.core.truth_(rum.core._STAR_reactions_STAR_)){
} else {
throw (new Error(["Assert failed: ","rum.core/react is only supported in conjunction with rum.core/reactive","\n","*reactions*"].join('')));
}

cljs.core._vreset_BANG_(rum.core._STAR_reactions_STAR_,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core._deref(rum.core._STAR_reactions_STAR_),ref));

return cljs.core.deref(ref);
});
/**
 * Use this to create “chains” and acyclic graphs of dependent atoms.
 * 
 *           [[derived-atom]] will:
 *        
 *           - Take N “source” refs.
 *           - Set up a watch on each of them.
 *           - Create “sink” atom.
 *           - When any of source refs changes:
 *              - re-run function `f`, passing N dereferenced values of source refs.
 *              - `reset!` result of `f` to the sink atom.
 *           - Return sink atom.
 * 
 *           Example:
 * 
 *           ```
 *           (def *a (atom 0))
 *           (def *b (atom 1))
 *           (def *x (derived-atom [*a *b] ::key
 *                     (fn [a b]
 *                       (str a ":" b))))
 *           
 *           (type *x) ;; => clojure.lang.Atom
 *           (deref *x) ;; => "0:1"
 *           
 *           (swap! *a inc)
 *           (deref *x) ;; => "1:1"
 *           
 *           (reset! *b 7)
 *           (deref *x) ;; => "1:7"
 *           ```
 * 
 *           Arguments:
 *        
 *           - `refs` - sequence of source refs,
 *           - `key`  - unique key to register watcher, same as in `clojure.core/add-watch`,
 *           - `f`    - function that must accept N arguments (same as number of source refs) and return a value to be written to the sink ref. Note: `f` will be called with already dereferenced values,
 *           - `opts` - optional. Map of:
 *             - `:ref` - use this as sink ref. By default creates new atom,
 *             - `:check-equals?` - Defaults to `true`. If equality check should be run on each source update: `(= @sink (f new-vals))`. When result of recalculating `f` equals to the old value, `reset!` won’t be called. Set to `false` if checking for equality can be expensive.
 */
rum.core.derived_atom = rum.derived_atom.derived_atom;
/**
 * Given atom with deep nested value and path inside it, creates an atom-like structure
 * that can be used separately from main atom, but will sync changes both ways:
 *   
 * ```
 * (def db (atom { :users { "Ivan" { :age 30 }}}))
 * 
 * (def ivan (rum/cursor db [:users "Ivan"]))
 * (deref ivan) ;; => { :age 30 }
 * 
 * (swap! ivan update :age inc) ;; => { :age 31 }
 * (deref db) ;; => { :users { "Ivan" { :age 31 }}}
 * 
 * (swap! db update-in [:users "Ivan" :age] inc)
 * ;; => { :users { "Ivan" { :age 32 }}}
 * 
 * (deref ivan) ;; => { :age 32 }
 * ```
 *   
 * Returned value supports `deref`, `swap!`, `reset!`, watches and metadata.
 *   
 * The only supported option is `:meta`
 */
rum.core.cursor_in = (function rum$core$cursor_in(var_args){
var args__4742__auto__ = [];
var len__4736__auto___43495 = arguments.length;
var i__4737__auto___43496 = (0);
while(true){
if((i__4737__auto___43496 < len__4736__auto___43495)){
args__4742__auto__.push((arguments[i__4737__auto___43496]));

var G__43497 = (i__4737__auto___43496 + (1));
i__4737__auto___43496 = G__43497;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic = (function (ref,path,p__43300){
var map__43301 = p__43300;
var map__43301__$1 = (((((!((map__43301 == null))))?(((((map__43301.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43301.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43301):map__43301);
var options = map__43301__$1;
if((ref instanceof rum.cursor.Cursor)){
return (new rum.cursor.Cursor(ref.ref,cljs.core.into.cljs$core$IFn$_invoke$arity$2(ref.path,path),new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(options)));
} else {
return (new rum.cursor.Cursor(ref,path,new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(options)));
}
}));

(rum.core.cursor_in.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(rum.core.cursor_in.cljs$lang$applyTo = (function (seq43279){
var G__43280 = cljs.core.first(seq43279);
var seq43279__$1 = cljs.core.next(seq43279);
var G__43281 = cljs.core.first(seq43279__$1);
var seq43279__$2 = cljs.core.next(seq43279__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43280,G__43281,seq43279__$2);
}));

/**
 * Same as [[cursor-in]] but accepts single key instead of path vector.
 */
rum.core.cursor = (function rum$core$cursor(var_args){
var args__4742__auto__ = [];
var len__4736__auto___43498 = arguments.length;
var i__4737__auto___43499 = (0);
while(true){
if((i__4737__auto___43499 < len__4736__auto___43498)){
args__4742__auto__.push((arguments[i__4737__auto___43499]));

var G__43500 = (i__4737__auto___43499 + (1));
i__4737__auto___43499 = G__43500;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return rum.core.cursor.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(rum.core.cursor.cljs$core$IFn$_invoke$arity$variadic = (function (ref,key,options){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(rum.core.cursor_in,ref,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null),options);
}));

(rum.core.cursor.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(rum.core.cursor.cljs$lang$applyTo = (function (seq43304){
var G__43305 = cljs.core.first(seq43304);
var seq43304__$1 = cljs.core.next(seq43304);
var G__43306 = cljs.core.first(seq43304__$1);
var seq43304__$2 = cljs.core.next(seq43304__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43305,G__43306,seq43304__$2);
}));


//# sourceMappingURL=rum.core.js.map
