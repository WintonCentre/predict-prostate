goog.provide('rum.core');
/**
 * Given React component, returns Rum state associated with it.
 */
rum.core.state = (function rum$core$state(comp){
return goog.object.get(comp.state,":rum/state");
});
rum.core.extend_BANG_ = (function rum$core$extend_BANG_(obj,props){
var seq__43234 = cljs.core.seq(props);
var chunk__43236 = null;
var count__43237 = (0);
var i__43238 = (0);
while(true){
if((i__43238 < count__43237)){
var vec__43250 = chunk__43236.cljs$core$IIndexed$_nth$arity$2(null,i__43238);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43250,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43250,(1),null);
if((!((v == null)))){
goog.object.set(obj,cljs.core.name(k),cljs.core.clj__GT_js(v));


var G__43355 = seq__43234;
var G__43356 = chunk__43236;
var G__43357 = count__43237;
var G__43358 = (i__43238 + (1));
seq__43234 = G__43355;
chunk__43236 = G__43356;
count__43237 = G__43357;
i__43238 = G__43358;
continue;
} else {
var G__43362 = seq__43234;
var G__43363 = chunk__43236;
var G__43364 = count__43237;
var G__43365 = (i__43238 + (1));
seq__43234 = G__43362;
chunk__43236 = G__43363;
count__43237 = G__43364;
i__43238 = G__43365;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__43234);
if(temp__5735__auto__){
var seq__43234__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__43234__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__43234__$1);
var G__43366 = cljs.core.chunk_rest(seq__43234__$1);
var G__43367 = c__4556__auto__;
var G__43368 = cljs.core.count(c__4556__auto__);
var G__43369 = (0);
seq__43234 = G__43366;
chunk__43236 = G__43367;
count__43237 = G__43368;
i__43238 = G__43369;
continue;
} else {
var vec__43253 = cljs.core.first(seq__43234__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43253,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43253,(1),null);
if((!((v == null)))){
goog.object.set(obj,cljs.core.name(k),cljs.core.clj__GT_js(v));


var G__43373 = cljs.core.next(seq__43234__$1);
var G__43374 = null;
var G__43375 = (0);
var G__43376 = (0);
seq__43234 = G__43373;
chunk__43236 = G__43374;
count__43237 = G__43375;
i__43238 = G__43376;
continue;
} else {
var G__43377 = cljs.core.next(seq__43234__$1);
var G__43378 = null;
var G__43379 = (0);
var G__43380 = (0);
seq__43234 = G__43377;
chunk__43236 = G__43378;
count__43237 = G__43379;
i__43238 = G__43380;
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
var wrapped_render = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__43257_SHARP_,p2__43256_SHARP_){
return (p2__43256_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p2__43256_SHARP_.cljs$core$IFn$_invoke$arity$1(p1__43257_SHARP_) : p2__43256_SHARP_.call(null,p1__43257_SHARP_));
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
var next_state = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__43261_SHARP_,p2__43260_SHARP_){
return (p2__43260_SHARP_.cljs$core$IFn$_invoke$arity$2 ? p2__43260_SHARP_.cljs$core$IFn$_invoke$arity$2(old_state,p1__43261_SHARP_) : p2__43260_SHARP_.call(null,old_state,p1__43261_SHARP_));
}),state,did_remount);
return this$.setState(({":rum/state": cljs.core.volatile_BANG_(next_state)}));
}));

if(cljs.core.empty_QMARK_(should_update)){
} else {
goog.object.set(prototype,"shouldComponentUpdate",(function (next_props,next_state){
var this$ = this;
var old_state = cljs.core.deref(rum.core.state(this$));
var new_state = cljs.core.deref(goog.object.get(next_state,":rum/state"));
var or__4126__auto__ = cljs.core.some((function (p1__43262_SHARP_){
return (p1__43262_SHARP_.cljs$core$IFn$_invoke$arity$2 ? p1__43262_SHARP_.cljs$core$IFn$_invoke$arity$2(old_state,new_state) : p1__43262_SHARP_.call(null,old_state,new_state));
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
var vec__43286 = (function (){var G__43289 = cljs.core.deref(state);
return (wrapped_render.cljs$core$IFn$_invoke$arity$1 ? wrapped_render.cljs$core$IFn$_invoke$arity$1(G__43289) : wrapped_render.call(null,G__43289));
})();
var dom = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43286,(0),null);
var next_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43286,(1),null);
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
return cljs.core.clj__GT_js(cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__43265_SHARP_){
return (p1__43265_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__43265_SHARP_.cljs$core$IFn$_invoke$arity$1(state) : p1__43265_SHARP_.call(null,state));
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
var G__43383__delegate = function (args){
var props = ({":rum/initial-state": new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","args","rum/args",1315791754),args], null), "key": cljs.core.apply.cljs$core$IFn$_invoke$arity$2(key_fn,args)});
return React.createElement(class$,props);
};
var G__43383 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43385__i = 0, G__43385__a = new Array(arguments.length -  0);
while (G__43385__i < G__43385__a.length) {G__43385__a[G__43385__i] = arguments[G__43385__i + 0]; ++G__43385__i;}
  args = new cljs.core.IndexedSeq(G__43385__a,0,null);
} 
return G__43383__delegate.call(this,args);};
G__43383.cljs$lang$maxFixedArity = 0;
G__43383.cljs$lang$applyTo = (function (arglist__43386){
var args = cljs.core.seq(arglist__43386);
return G__43383__delegate(args);
});
G__43383.cljs$core$IFn$_invoke$arity$variadic = G__43383__delegate;
return G__43383;
})()
:(function() { 
var G__43387__delegate = function (args){
var props = ({":rum/initial-state": new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","args","rum/args",1315791754),args], null)});
return React.createElement(class$,props);
};
var G__43387 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43389__i = 0, G__43389__a = new Array(arguments.length -  0);
while (G__43389__i < G__43389__a.length) {G__43389__a[G__43389__i] = arguments[G__43389__i + 0]; ++G__43389__i;}
  args = new cljs.core.IndexedSeq(G__43389__a,0,null);
} 
return G__43387__delegate.call(this,args);};
G__43387.cljs$lang$maxFixedArity = 0;
G__43387.cljs$lang$applyTo = (function (arglist__43390){
var args = cljs.core.seq(arglist__43390);
return G__43387__delegate(args);
});
G__43387.cljs$core$IFn$_invoke$arity$variadic = G__43387__delegate;
return G__43387;
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
var G__43391__delegate = function (args){
return React.createElement(class$,({":rum/args": args}));
};
var G__43391 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43392__i = 0, G__43392__a = new Array(arguments.length -  0);
while (G__43392__i < G__43392__a.length) {G__43392__a[G__43392__i] = arguments[G__43392__i + 0]; ++G__43392__i;}
  args = new cljs.core.IndexedSeq(G__43392__a,0,null);
} 
return G__43391__delegate.call(this,args);};
G__43391.cljs$lang$maxFixedArity = 0;
G__43391.cljs$lang$applyTo = (function (arglist__43394){
var args = cljs.core.seq(arglist__43394);
return G__43391__delegate(args);
});
G__43391.cljs$core$IFn$_invoke$arity$variadic = G__43391__delegate;
return G__43391;
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
return (function (p1__43298_SHARP_){
return setTimeout(p1__43298_SHARP_,(16));
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
var seq__43301 = cljs.core.seq(queue);
var chunk__43303 = null;
var count__43304 = (0);
var i__43305 = (0);
while(true){
if((i__43305 < count__43304)){
var comp = chunk__43303.cljs$core$IIndexed$_nth$arity$2(null,i__43305);
if(cljs.core.not(goog.object.get(comp,":rum/unmounted?"))){
comp.forceUpdate();


var G__43405 = seq__43301;
var G__43406 = chunk__43303;
var G__43407 = count__43304;
var G__43408 = (i__43305 + (1));
seq__43301 = G__43405;
chunk__43303 = G__43406;
count__43304 = G__43407;
i__43305 = G__43408;
continue;
} else {
var G__43409 = seq__43301;
var G__43410 = chunk__43303;
var G__43411 = count__43304;
var G__43412 = (i__43305 + (1));
seq__43301 = G__43409;
chunk__43303 = G__43410;
count__43304 = G__43411;
i__43305 = G__43412;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__43301);
if(temp__5735__auto__){
var seq__43301__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__43301__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__43301__$1);
var G__43413 = cljs.core.chunk_rest(seq__43301__$1);
var G__43414 = c__4556__auto__;
var G__43415 = cljs.core.count(c__4556__auto__);
var G__43416 = (0);
seq__43301 = G__43413;
chunk__43303 = G__43414;
count__43304 = G__43415;
i__43305 = G__43416;
continue;
} else {
var comp = cljs.core.first(seq__43301__$1);
if(cljs.core.not(goog.object.get(comp,":rum/unmounted?"))){
comp.forceUpdate();


var G__43417 = cljs.core.next(seq__43301__$1);
var G__43418 = null;
var G__43419 = (0);
var G__43420 = (0);
seq__43301 = G__43417;
chunk__43303 = G__43418;
count__43304 = G__43419;
i__43305 = G__43420;
continue;
} else {
var G__43421 = cljs.core.next(seq__43301__$1);
var G__43422 = null;
var G__43423 = (0);
var G__43424 = (0);
seq__43301 = G__43421;
chunk__43303 = G__43422;
count__43304 = G__43423;
i__43305 = G__43424;
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
var G__43308 = arguments.length;
switch (G__43308) {
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
var _STAR_reactions_STAR__orig_val__43309 = rum.core._STAR_reactions_STAR_;
var _STAR_reactions_STAR__temp_val__43310 = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);
(rum.core._STAR_reactions_STAR_ = _STAR_reactions_STAR__temp_val__43310);

try{var comp = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
var old_reactions = new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325).cljs$core$IFn$_invoke$arity$2(state,cljs.core.PersistentHashSet.EMPTY);
var vec__43311 = (render_fn.cljs$core$IFn$_invoke$arity$1 ? render_fn.cljs$core$IFn$_invoke$arity$1(state) : render_fn.call(null,state));
var dom = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43311,(0),null);
var next_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43311,(1),null);
var new_reactions = cljs.core.deref(rum.core._STAR_reactions_STAR_);
var key = new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142).cljs$core$IFn$_invoke$arity$1(state);
var seq__43314_43428 = cljs.core.seq(old_reactions);
var chunk__43315_43429 = null;
var count__43316_43430 = (0);
var i__43317_43431 = (0);
while(true){
if((i__43317_43431 < count__43316_43430)){
var ref_43432 = chunk__43315_43429.cljs$core$IIndexed$_nth$arity$2(null,i__43317_43431);
if(cljs.core.contains_QMARK_(new_reactions,ref_43432)){
} else {
cljs.core.remove_watch(ref_43432,key);
}


var G__43433 = seq__43314_43428;
var G__43434 = chunk__43315_43429;
var G__43435 = count__43316_43430;
var G__43436 = (i__43317_43431 + (1));
seq__43314_43428 = G__43433;
chunk__43315_43429 = G__43434;
count__43316_43430 = G__43435;
i__43317_43431 = G__43436;
continue;
} else {
var temp__5735__auto___43437 = cljs.core.seq(seq__43314_43428);
if(temp__5735__auto___43437){
var seq__43314_43438__$1 = temp__5735__auto___43437;
if(cljs.core.chunked_seq_QMARK_(seq__43314_43438__$1)){
var c__4556__auto___43439 = cljs.core.chunk_first(seq__43314_43438__$1);
var G__43440 = cljs.core.chunk_rest(seq__43314_43438__$1);
var G__43441 = c__4556__auto___43439;
var G__43442 = cljs.core.count(c__4556__auto___43439);
var G__43443 = (0);
seq__43314_43428 = G__43440;
chunk__43315_43429 = G__43441;
count__43316_43430 = G__43442;
i__43317_43431 = G__43443;
continue;
} else {
var ref_43444 = cljs.core.first(seq__43314_43438__$1);
if(cljs.core.contains_QMARK_(new_reactions,ref_43444)){
} else {
cljs.core.remove_watch(ref_43444,key);
}


var G__43445 = cljs.core.next(seq__43314_43438__$1);
var G__43446 = null;
var G__43447 = (0);
var G__43448 = (0);
seq__43314_43428 = G__43445;
chunk__43315_43429 = G__43446;
count__43316_43430 = G__43447;
i__43317_43431 = G__43448;
continue;
}
} else {
}
}
break;
}

var seq__43318_43449 = cljs.core.seq(new_reactions);
var chunk__43319_43450 = null;
var count__43320_43451 = (0);
var i__43321_43452 = (0);
while(true){
if((i__43321_43452 < count__43320_43451)){
var ref_43453 = chunk__43319_43450.cljs$core$IIndexed$_nth$arity$2(null,i__43321_43452);
if(cljs.core.contains_QMARK_(old_reactions,ref_43453)){
} else {
cljs.core.add_watch(ref_43453,key,((function (seq__43318_43449,chunk__43319_43450,count__43320_43451,i__43321_43452,ref_43453,comp,old_reactions,vec__43311,dom,next_state,new_reactions,key,_STAR_reactions_STAR__orig_val__43309,_STAR_reactions_STAR__temp_val__43310){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render(comp);
});})(seq__43318_43449,chunk__43319_43450,count__43320_43451,i__43321_43452,ref_43453,comp,old_reactions,vec__43311,dom,next_state,new_reactions,key,_STAR_reactions_STAR__orig_val__43309,_STAR_reactions_STAR__temp_val__43310))
);
}


var G__43454 = seq__43318_43449;
var G__43455 = chunk__43319_43450;
var G__43456 = count__43320_43451;
var G__43457 = (i__43321_43452 + (1));
seq__43318_43449 = G__43454;
chunk__43319_43450 = G__43455;
count__43320_43451 = G__43456;
i__43321_43452 = G__43457;
continue;
} else {
var temp__5735__auto___43458 = cljs.core.seq(seq__43318_43449);
if(temp__5735__auto___43458){
var seq__43318_43459__$1 = temp__5735__auto___43458;
if(cljs.core.chunked_seq_QMARK_(seq__43318_43459__$1)){
var c__4556__auto___43460 = cljs.core.chunk_first(seq__43318_43459__$1);
var G__43461 = cljs.core.chunk_rest(seq__43318_43459__$1);
var G__43462 = c__4556__auto___43460;
var G__43463 = cljs.core.count(c__4556__auto___43460);
var G__43464 = (0);
seq__43318_43449 = G__43461;
chunk__43319_43450 = G__43462;
count__43320_43451 = G__43463;
i__43321_43452 = G__43464;
continue;
} else {
var ref_43465 = cljs.core.first(seq__43318_43459__$1);
if(cljs.core.contains_QMARK_(old_reactions,ref_43465)){
} else {
cljs.core.add_watch(ref_43465,key,((function (seq__43318_43449,chunk__43319_43450,count__43320_43451,i__43321_43452,ref_43465,seq__43318_43459__$1,temp__5735__auto___43458,comp,old_reactions,vec__43311,dom,next_state,new_reactions,key,_STAR_reactions_STAR__orig_val__43309,_STAR_reactions_STAR__temp_val__43310){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render(comp);
});})(seq__43318_43449,chunk__43319_43450,count__43320_43451,i__43321_43452,ref_43465,seq__43318_43459__$1,temp__5735__auto___43458,comp,old_reactions,vec__43311,dom,next_state,new_reactions,key,_STAR_reactions_STAR__orig_val__43309,_STAR_reactions_STAR__temp_val__43310))
);
}


var G__43466 = cljs.core.next(seq__43318_43459__$1);
var G__43467 = null;
var G__43468 = (0);
var G__43469 = (0);
seq__43318_43449 = G__43466;
chunk__43319_43450 = G__43467;
count__43320_43451 = G__43468;
i__43321_43452 = G__43469;
continue;
}
} else {
}
}
break;
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dom,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(next_state,new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325),new_reactions)], null);
}finally {(rum.core._STAR_reactions_STAR_ = _STAR_reactions_STAR__orig_val__43309);
}});
}),new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (state){
var key_43470 = new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142).cljs$core$IFn$_invoke$arity$1(state);
var seq__43323_43471 = cljs.core.seq(new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325).cljs$core$IFn$_invoke$arity$1(state));
var chunk__43324_43472 = null;
var count__43325_43473 = (0);
var i__43326_43474 = (0);
while(true){
if((i__43326_43474 < count__43325_43473)){
var ref_43478 = chunk__43324_43472.cljs$core$IIndexed$_nth$arity$2(null,i__43326_43474);
cljs.core.remove_watch(ref_43478,key_43470);


var G__43479 = seq__43323_43471;
var G__43480 = chunk__43324_43472;
var G__43481 = count__43325_43473;
var G__43482 = (i__43326_43474 + (1));
seq__43323_43471 = G__43479;
chunk__43324_43472 = G__43480;
count__43325_43473 = G__43481;
i__43326_43474 = G__43482;
continue;
} else {
var temp__5735__auto___43483 = cljs.core.seq(seq__43323_43471);
if(temp__5735__auto___43483){
var seq__43323_43484__$1 = temp__5735__auto___43483;
if(cljs.core.chunked_seq_QMARK_(seq__43323_43484__$1)){
var c__4556__auto___43485 = cljs.core.chunk_first(seq__43323_43484__$1);
var G__43486 = cljs.core.chunk_rest(seq__43323_43484__$1);
var G__43487 = c__4556__auto___43485;
var G__43488 = cljs.core.count(c__4556__auto___43485);
var G__43489 = (0);
seq__43323_43471 = G__43486;
chunk__43324_43472 = G__43487;
count__43325_43473 = G__43488;
i__43326_43474 = G__43489;
continue;
} else {
var ref_43490 = cljs.core.first(seq__43323_43484__$1);
cljs.core.remove_watch(ref_43490,key_43470);


var G__43491 = cljs.core.next(seq__43323_43484__$1);
var G__43492 = null;
var G__43493 = (0);
var G__43494 = (0);
seq__43323_43471 = G__43491;
chunk__43324_43472 = G__43492;
count__43325_43473 = G__43493;
i__43326_43474 = G__43494;
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
var len__4736__auto___43500 = arguments.length;
var i__4737__auto___43501 = (0);
while(true){
if((i__4737__auto___43501 < len__4736__auto___43500)){
args__4742__auto__.push((arguments[i__4737__auto___43501]));

var G__43502 = (i__4737__auto___43501 + (1));
i__4737__auto___43501 = G__43502;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic = (function (ref,path,p__43336){
var map__43337 = p__43336;
var map__43337__$1 = (((((!((map__43337 == null))))?(((((map__43337.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43337.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43337):map__43337);
var options = map__43337__$1;
if((ref instanceof rum.cursor.Cursor)){
return (new rum.cursor.Cursor(ref.ref,cljs.core.into.cljs$core$IFn$_invoke$arity$2(ref.path,path),new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(options)));
} else {
return (new rum.cursor.Cursor(ref,path,new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(options)));
}
}));

(rum.core.cursor_in.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(rum.core.cursor_in.cljs$lang$applyTo = (function (seq43332){
var G__43333 = cljs.core.first(seq43332);
var seq43332__$1 = cljs.core.next(seq43332);
var G__43334 = cljs.core.first(seq43332__$1);
var seq43332__$2 = cljs.core.next(seq43332__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43333,G__43334,seq43332__$2);
}));

/**
 * Same as [[cursor-in]] but accepts single key instead of path vector.
 */
rum.core.cursor = (function rum$core$cursor(var_args){
var args__4742__auto__ = [];
var len__4736__auto___43506 = arguments.length;
var i__4737__auto___43507 = (0);
while(true){
if((i__4737__auto___43507 < len__4736__auto___43506)){
args__4742__auto__.push((arguments[i__4737__auto___43507]));

var G__43508 = (i__4737__auto___43507 + (1));
i__4737__auto___43507 = G__43508;
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
(rum.core.cursor.cljs$lang$applyTo = (function (seq43339){
var G__43340 = cljs.core.first(seq43339);
var seq43339__$1 = cljs.core.next(seq43339);
var G__43341 = cljs.core.first(seq43339__$1);
var seq43339__$2 = cljs.core.next(seq43339__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43340,G__43341,seq43339__$2);
}));


//# sourceMappingURL=rum.core.js.map
