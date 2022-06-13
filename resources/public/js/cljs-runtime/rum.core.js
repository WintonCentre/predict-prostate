goog.provide('rum.core');
/**
 * Given React component, returns Rum state associated with it.
 */
rum.core.state = (function rum$core$state(comp){
return goog.object.get(comp.state,":rum/state");
});
rum.core.extend_BANG_ = (function rum$core$extend_BANG_(obj,props){
var seq__32209 = cljs.core.seq(props);
var chunk__32211 = null;
var count__32212 = (0);
var i__32213 = (0);
while(true){
if((i__32213 < count__32212)){
var vec__32221 = chunk__32211.cljs$core$IIndexed$_nth$arity$2(null,i__32213);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32221,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32221,(1),null);
if((!((v == null)))){
goog.object.set(obj,cljs.core.name(k),cljs.core.clj__GT_js(v));


var G__32368 = seq__32209;
var G__32369 = chunk__32211;
var G__32370 = count__32212;
var G__32371 = (i__32213 + (1));
seq__32209 = G__32368;
chunk__32211 = G__32369;
count__32212 = G__32370;
i__32213 = G__32371;
continue;
} else {
var G__32372 = seq__32209;
var G__32373 = chunk__32211;
var G__32374 = count__32212;
var G__32375 = (i__32213 + (1));
seq__32209 = G__32372;
chunk__32211 = G__32373;
count__32212 = G__32374;
i__32213 = G__32375;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__32209);
if(temp__5753__auto__){
var seq__32209__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32209__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__32209__$1);
var G__32376 = cljs.core.chunk_rest(seq__32209__$1);
var G__32377 = c__4638__auto__;
var G__32378 = cljs.core.count(c__4638__auto__);
var G__32379 = (0);
seq__32209 = G__32376;
chunk__32211 = G__32377;
count__32212 = G__32378;
i__32213 = G__32379;
continue;
} else {
var vec__32224 = cljs.core.first(seq__32209__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32224,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32224,(1),null);
if((!((v == null)))){
goog.object.set(obj,cljs.core.name(k),cljs.core.clj__GT_js(v));


var G__32380 = cljs.core.next(seq__32209__$1);
var G__32381 = null;
var G__32382 = (0);
var G__32383 = (0);
seq__32209 = G__32380;
chunk__32211 = G__32381;
count__32212 = G__32382;
i__32213 = G__32383;
continue;
} else {
var G__32384 = cljs.core.next(seq__32209__$1);
var G__32385 = null;
var G__32386 = (0);
var G__32387 = (0);
seq__32209 = G__32384;
chunk__32211 = G__32385;
count__32212 = G__32386;
i__32213 = G__32387;
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
var wrapped_render = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__32230_SHARP_,p2__32229_SHARP_){
return (p2__32229_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p2__32229_SHARP_.cljs$core$IFn$_invoke$arity$1(p1__32230_SHARP_) : p2__32229_SHARP_.call(null,p1__32230_SHARP_));
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
var next_state = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__32236_SHARP_,p2__32235_SHARP_){
return (p2__32235_SHARP_.cljs$core$IFn$_invoke$arity$2 ? p2__32235_SHARP_.cljs$core$IFn$_invoke$arity$2(old_state,p1__32236_SHARP_) : p2__32235_SHARP_.call(null,old_state,p1__32236_SHARP_));
}),state,did_remount);
return this$.setState(({":rum/state": cljs.core.volatile_BANG_(next_state)}));
}));

if(cljs.core.empty_QMARK_(should_update)){
} else {
goog.object.set(prototype,"shouldComponentUpdate",(function (next_props,next_state){
var this$ = this;
var old_state = cljs.core.deref(rum.core.state(this$));
var new_state = cljs.core.deref(goog.object.get(next_state,":rum/state"));
var or__4212__auto__ = cljs.core.some((function (p1__32237_SHARP_){
return (p1__32237_SHARP_.cljs$core$IFn$_invoke$arity$2 ? p1__32237_SHARP_.cljs$core$IFn$_invoke$arity$2(old_state,new_state) : p1__32237_SHARP_.call(null,old_state,new_state));
}),should_update);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
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
var vec__32249 = (function (){var G__32252 = cljs.core.deref(state);
return (wrapped_render.cljs$core$IFn$_invoke$arity$1 ? wrapped_render.cljs$core$IFn$_invoke$arity$1(G__32252) : wrapped_render.call(null,G__32252));
})();
var dom = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32249,(0),null);
var next_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32249,(1),null);
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
return cljs.core.clj__GT_js(cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__32238_SHARP_){
return (p1__32238_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__32238_SHARP_.cljs$core$IFn$_invoke$arity$1(state) : p1__32238_SHARP_.call(null,state));
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
var G__32399__delegate = function (args){
var props = ({":rum/initial-state": new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","args","rum/args",1315791754),args], null), "key": cljs.core.apply.cljs$core$IFn$_invoke$arity$2(key_fn,args)});
return React.createElement(class$,props);
};
var G__32399 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32401__i = 0, G__32401__a = new Array(arguments.length -  0);
while (G__32401__i < G__32401__a.length) {G__32401__a[G__32401__i] = arguments[G__32401__i + 0]; ++G__32401__i;}
  args = new cljs.core.IndexedSeq(G__32401__a,0,null);
} 
return G__32399__delegate.call(this,args);};
G__32399.cljs$lang$maxFixedArity = 0;
G__32399.cljs$lang$applyTo = (function (arglist__32402){
var args = cljs.core.seq(arglist__32402);
return G__32399__delegate(args);
});
G__32399.cljs$core$IFn$_invoke$arity$variadic = G__32399__delegate;
return G__32399;
})()
:(function() { 
var G__32404__delegate = function (args){
var props = ({":rum/initial-state": new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","args","rum/args",1315791754),args], null)});
return React.createElement(class$,props);
};
var G__32404 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32406__i = 0, G__32406__a = new Array(arguments.length -  0);
while (G__32406__i < G__32406__a.length) {G__32406__a[G__32406__i] = arguments[G__32406__i + 0]; ++G__32406__i;}
  args = new cljs.core.IndexedSeq(G__32406__a,0,null);
} 
return G__32404__delegate.call(this,args);};
G__32404.cljs$lang$maxFixedArity = 0;
G__32404.cljs$lang$applyTo = (function (arglist__32407){
var args = cljs.core.seq(arglist__32407);
return G__32404__delegate(args);
});
G__32404.cljs$core$IFn$_invoke$arity$variadic = G__32404__delegate;
return G__32404;
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
var G__32412__delegate = function (args){
return React.createElement(class$,({":rum/args": args}));
};
var G__32412 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32413__i = 0, G__32413__a = new Array(arguments.length -  0);
while (G__32413__i < G__32413__a.length) {G__32413__a[G__32413__i] = arguments[G__32413__i + 0]; ++G__32413__i;}
  args = new cljs.core.IndexedSeq(G__32413__a,0,null);
} 
return G__32412__delegate.call(this,args);};
G__32412.cljs$lang$maxFixedArity = 0;
G__32412.cljs$lang$applyTo = (function (arglist__32414){
var args = cljs.core.seq(arglist__32414);
return G__32412__delegate(args);
});
G__32412.cljs$core$IFn$_invoke$arity$variadic = G__32412__delegate;
return G__32412;
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
rum.core.schedule = (function (){var or__4212__auto__ = (function (){var and__4210__auto__ = (typeof window !== 'undefined');
if(and__4210__auto__){
var or__4212__auto__ = window.requestAnimationFrame;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
var or__4212__auto____$1 = window.webkitRequestAnimationFrame;
if(cljs.core.truth_(or__4212__auto____$1)){
return or__4212__auto____$1;
} else {
var or__4212__auto____$2 = window.mozRequestAnimationFrame;
if(cljs.core.truth_(or__4212__auto____$2)){
return or__4212__auto____$2;
} else {
return window.msRequestAnimationFrame;
}
}
}
} else {
return and__4210__auto__;
}
})();
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (function (p1__32275_SHARP_){
return setTimeout(p1__32275_SHARP_,(16));
});
}
})();
rum.core.batch = (function (){var or__4212__auto__ = (((typeof ReactNative !== 'undefined'))?ReactNative.unstable_batchedUpdates:null);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
var or__4212__auto____$1 = (((typeof ReactDOM !== 'undefined'))?ReactDOM.unstable_batchedUpdates:null);
if(cljs.core.truth_(or__4212__auto____$1)){
return or__4212__auto____$1;
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
var seq__32276 = cljs.core.seq(queue);
var chunk__32278 = null;
var count__32279 = (0);
var i__32280 = (0);
while(true){
if((i__32280 < count__32279)){
var comp = chunk__32278.cljs$core$IIndexed$_nth$arity$2(null,i__32280);
if(cljs.core.not(goog.object.get(comp,":rum/unmounted?"))){
comp.forceUpdate();


var G__32428 = seq__32276;
var G__32429 = chunk__32278;
var G__32430 = count__32279;
var G__32431 = (i__32280 + (1));
seq__32276 = G__32428;
chunk__32278 = G__32429;
count__32279 = G__32430;
i__32280 = G__32431;
continue;
} else {
var G__32433 = seq__32276;
var G__32434 = chunk__32278;
var G__32435 = count__32279;
var G__32436 = (i__32280 + (1));
seq__32276 = G__32433;
chunk__32278 = G__32434;
count__32279 = G__32435;
i__32280 = G__32436;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__32276);
if(temp__5753__auto__){
var seq__32276__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32276__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__32276__$1);
var G__32439 = cljs.core.chunk_rest(seq__32276__$1);
var G__32440 = c__4638__auto__;
var G__32441 = cljs.core.count(c__4638__auto__);
var G__32442 = (0);
seq__32276 = G__32439;
chunk__32278 = G__32440;
count__32279 = G__32441;
i__32280 = G__32442;
continue;
} else {
var comp = cljs.core.first(seq__32276__$1);
if(cljs.core.not(goog.object.get(comp,":rum/unmounted?"))){
comp.forceUpdate();


var G__32443 = cljs.core.next(seq__32276__$1);
var G__32444 = null;
var G__32445 = (0);
var G__32446 = (0);
seq__32276 = G__32443;
chunk__32278 = G__32444;
count__32279 = G__32445;
i__32280 = G__32446;
continue;
} else {
var G__32447 = cljs.core.next(seq__32276__$1);
var G__32448 = null;
var G__32449 = (0);
var G__32450 = (0);
seq__32276 = G__32447;
chunk__32278 = G__32448;
count__32279 = G__32449;
i__32280 = G__32450;
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
var G__32283 = arguments.length;
switch (G__32283) {
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
var _STAR_reactions_STAR__orig_val__32284 = rum.core._STAR_reactions_STAR_;
var _STAR_reactions_STAR__temp_val__32285 = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);
(rum.core._STAR_reactions_STAR_ = _STAR_reactions_STAR__temp_val__32285);

try{var comp = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
var old_reactions = new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325).cljs$core$IFn$_invoke$arity$2(state,cljs.core.PersistentHashSet.EMPTY);
var vec__32286 = (render_fn.cljs$core$IFn$_invoke$arity$1 ? render_fn.cljs$core$IFn$_invoke$arity$1(state) : render_fn.call(null,state));
var dom = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32286,(0),null);
var next_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32286,(1),null);
var new_reactions = cljs.core.deref(rum.core._STAR_reactions_STAR_);
var key = new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142).cljs$core$IFn$_invoke$arity$1(state);
var seq__32289_32477 = cljs.core.seq(old_reactions);
var chunk__32290_32478 = null;
var count__32291_32479 = (0);
var i__32292_32480 = (0);
while(true){
if((i__32292_32480 < count__32291_32479)){
var ref_32484 = chunk__32290_32478.cljs$core$IIndexed$_nth$arity$2(null,i__32292_32480);
if(cljs.core.contains_QMARK_(new_reactions,ref_32484)){
} else {
cljs.core.remove_watch(ref_32484,key);
}


var G__32487 = seq__32289_32477;
var G__32488 = chunk__32290_32478;
var G__32489 = count__32291_32479;
var G__32490 = (i__32292_32480 + (1));
seq__32289_32477 = G__32487;
chunk__32290_32478 = G__32488;
count__32291_32479 = G__32489;
i__32292_32480 = G__32490;
continue;
} else {
var temp__5753__auto___32492 = cljs.core.seq(seq__32289_32477);
if(temp__5753__auto___32492){
var seq__32289_32494__$1 = temp__5753__auto___32492;
if(cljs.core.chunked_seq_QMARK_(seq__32289_32494__$1)){
var c__4638__auto___32495 = cljs.core.chunk_first(seq__32289_32494__$1);
var G__32496 = cljs.core.chunk_rest(seq__32289_32494__$1);
var G__32497 = c__4638__auto___32495;
var G__32498 = cljs.core.count(c__4638__auto___32495);
var G__32499 = (0);
seq__32289_32477 = G__32496;
chunk__32290_32478 = G__32497;
count__32291_32479 = G__32498;
i__32292_32480 = G__32499;
continue;
} else {
var ref_32500 = cljs.core.first(seq__32289_32494__$1);
if(cljs.core.contains_QMARK_(new_reactions,ref_32500)){
} else {
cljs.core.remove_watch(ref_32500,key);
}


var G__32501 = cljs.core.next(seq__32289_32494__$1);
var G__32502 = null;
var G__32503 = (0);
var G__32504 = (0);
seq__32289_32477 = G__32501;
chunk__32290_32478 = G__32502;
count__32291_32479 = G__32503;
i__32292_32480 = G__32504;
continue;
}
} else {
}
}
break;
}

var seq__32293_32505 = cljs.core.seq(new_reactions);
var chunk__32294_32506 = null;
var count__32295_32507 = (0);
var i__32296_32508 = (0);
while(true){
if((i__32296_32508 < count__32295_32507)){
var ref_32509 = chunk__32294_32506.cljs$core$IIndexed$_nth$arity$2(null,i__32296_32508);
if(cljs.core.contains_QMARK_(old_reactions,ref_32509)){
} else {
cljs.core.add_watch(ref_32509,key,((function (seq__32293_32505,chunk__32294_32506,count__32295_32507,i__32296_32508,ref_32509,comp,old_reactions,vec__32286,dom,next_state,new_reactions,key,_STAR_reactions_STAR__orig_val__32284,_STAR_reactions_STAR__temp_val__32285){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render(comp);
});})(seq__32293_32505,chunk__32294_32506,count__32295_32507,i__32296_32508,ref_32509,comp,old_reactions,vec__32286,dom,next_state,new_reactions,key,_STAR_reactions_STAR__orig_val__32284,_STAR_reactions_STAR__temp_val__32285))
);
}


var G__32510 = seq__32293_32505;
var G__32511 = chunk__32294_32506;
var G__32512 = count__32295_32507;
var G__32513 = (i__32296_32508 + (1));
seq__32293_32505 = G__32510;
chunk__32294_32506 = G__32511;
count__32295_32507 = G__32512;
i__32296_32508 = G__32513;
continue;
} else {
var temp__5753__auto___32514 = cljs.core.seq(seq__32293_32505);
if(temp__5753__auto___32514){
var seq__32293_32515__$1 = temp__5753__auto___32514;
if(cljs.core.chunked_seq_QMARK_(seq__32293_32515__$1)){
var c__4638__auto___32516 = cljs.core.chunk_first(seq__32293_32515__$1);
var G__32517 = cljs.core.chunk_rest(seq__32293_32515__$1);
var G__32518 = c__4638__auto___32516;
var G__32519 = cljs.core.count(c__4638__auto___32516);
var G__32520 = (0);
seq__32293_32505 = G__32517;
chunk__32294_32506 = G__32518;
count__32295_32507 = G__32519;
i__32296_32508 = G__32520;
continue;
} else {
var ref_32521 = cljs.core.first(seq__32293_32515__$1);
if(cljs.core.contains_QMARK_(old_reactions,ref_32521)){
} else {
cljs.core.add_watch(ref_32521,key,((function (seq__32293_32505,chunk__32294_32506,count__32295_32507,i__32296_32508,ref_32521,seq__32293_32515__$1,temp__5753__auto___32514,comp,old_reactions,vec__32286,dom,next_state,new_reactions,key,_STAR_reactions_STAR__orig_val__32284,_STAR_reactions_STAR__temp_val__32285){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render(comp);
});})(seq__32293_32505,chunk__32294_32506,count__32295_32507,i__32296_32508,ref_32521,seq__32293_32515__$1,temp__5753__auto___32514,comp,old_reactions,vec__32286,dom,next_state,new_reactions,key,_STAR_reactions_STAR__orig_val__32284,_STAR_reactions_STAR__temp_val__32285))
);
}


var G__32522 = cljs.core.next(seq__32293_32515__$1);
var G__32523 = null;
var G__32524 = (0);
var G__32525 = (0);
seq__32293_32505 = G__32522;
chunk__32294_32506 = G__32523;
count__32295_32507 = G__32524;
i__32296_32508 = G__32525;
continue;
}
} else {
}
}
break;
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dom,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(next_state,new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325),new_reactions)], null);
}finally {(rum.core._STAR_reactions_STAR_ = _STAR_reactions_STAR__orig_val__32284);
}});
}),new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (state){
var key_32526 = new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142).cljs$core$IFn$_invoke$arity$1(state);
var seq__32303_32527 = cljs.core.seq(new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325).cljs$core$IFn$_invoke$arity$1(state));
var chunk__32304_32528 = null;
var count__32305_32529 = (0);
var i__32306_32530 = (0);
while(true){
if((i__32306_32530 < count__32305_32529)){
var ref_32531 = chunk__32304_32528.cljs$core$IIndexed$_nth$arity$2(null,i__32306_32530);
cljs.core.remove_watch(ref_32531,key_32526);


var G__32532 = seq__32303_32527;
var G__32533 = chunk__32304_32528;
var G__32534 = count__32305_32529;
var G__32535 = (i__32306_32530 + (1));
seq__32303_32527 = G__32532;
chunk__32304_32528 = G__32533;
count__32305_32529 = G__32534;
i__32306_32530 = G__32535;
continue;
} else {
var temp__5753__auto___32536 = cljs.core.seq(seq__32303_32527);
if(temp__5753__auto___32536){
var seq__32303_32537__$1 = temp__5753__auto___32536;
if(cljs.core.chunked_seq_QMARK_(seq__32303_32537__$1)){
var c__4638__auto___32538 = cljs.core.chunk_first(seq__32303_32537__$1);
var G__32539 = cljs.core.chunk_rest(seq__32303_32537__$1);
var G__32540 = c__4638__auto___32538;
var G__32541 = cljs.core.count(c__4638__auto___32538);
var G__32542 = (0);
seq__32303_32527 = G__32539;
chunk__32304_32528 = G__32540;
count__32305_32529 = G__32541;
i__32306_32530 = G__32542;
continue;
} else {
var ref_32543 = cljs.core.first(seq__32303_32537__$1);
cljs.core.remove_watch(ref_32543,key_32526);


var G__32544 = cljs.core.next(seq__32303_32537__$1);
var G__32545 = null;
var G__32546 = (0);
var G__32547 = (0);
seq__32303_32527 = G__32544;
chunk__32304_32528 = G__32545;
count__32305_32529 = G__32546;
i__32306_32530 = G__32547;
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
var args__4824__auto__ = [];
var len__4818__auto___32548 = arguments.length;
var i__4819__auto___32549 = (0);
while(true){
if((i__4819__auto___32549 < len__4818__auto___32548)){
args__4824__auto__.push((arguments[i__4819__auto___32549]));

var G__32551 = (i__4819__auto___32549 + (1));
i__4819__auto___32549 = G__32551;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic = (function (ref,path,p__32338){
var map__32339 = p__32338;
var map__32339__$1 = cljs.core.__destructure_map(map__32339);
var options = map__32339__$1;
if((ref instanceof rum.cursor.Cursor)){
return (new rum.cursor.Cursor(ref.ref,cljs.core.into.cljs$core$IFn$_invoke$arity$2(ref.path,path),new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(options)));
} else {
return (new rum.cursor.Cursor(ref,path,new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(options)));
}
}));

(rum.core.cursor_in.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(rum.core.cursor_in.cljs$lang$applyTo = (function (seq32322){
var G__32323 = cljs.core.first(seq32322);
var seq32322__$1 = cljs.core.next(seq32322);
var G__32324 = cljs.core.first(seq32322__$1);
var seq32322__$2 = cljs.core.next(seq32322__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32323,G__32324,seq32322__$2);
}));

/**
 * Same as [[cursor-in]] but accepts single key instead of path vector.
 */
rum.core.cursor = (function rum$core$cursor(var_args){
var args__4824__auto__ = [];
var len__4818__auto___32558 = arguments.length;
var i__4819__auto___32559 = (0);
while(true){
if((i__4819__auto___32559 < len__4818__auto___32558)){
args__4824__auto__.push((arguments[i__4819__auto___32559]));

var G__32561 = (i__4819__auto___32559 + (1));
i__4819__auto___32559 = G__32561;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return rum.core.cursor.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(rum.core.cursor.cljs$core$IFn$_invoke$arity$variadic = (function (ref,key,options){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(rum.core.cursor_in,ref,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null),options);
}));

(rum.core.cursor.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(rum.core.cursor.cljs$lang$applyTo = (function (seq32353){
var G__32354 = cljs.core.first(seq32353);
var seq32353__$1 = cljs.core.next(seq32353);
var G__32355 = cljs.core.first(seq32353__$1);
var seq32353__$2 = cljs.core.next(seq32353__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32354,G__32355,seq32353__$2);
}));


//# sourceMappingURL=rum.core.js.map
