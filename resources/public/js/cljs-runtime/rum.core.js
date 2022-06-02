goog.provide('rum.core');
/**
 * Given React component, returns Rum state associated with it.
 */
rum.core.state = (function rum$core$state(comp){
return goog.object.get(comp.state,":rum/state");
});
rum.core.extend_BANG_ = (function rum$core$extend_BANG_(obj,props){
var seq__33171 = cljs.core.seq(props);
var chunk__33173 = null;
var count__33174 = (0);
var i__33175 = (0);
while(true){
if((i__33175 < count__33174)){
var vec__33205 = chunk__33173.cljs$core$IIndexed$_nth$arity$2(null,i__33175);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33205,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33205,(1),null);
if((!((v == null)))){
goog.object.set(obj,cljs.core.name(k),cljs.core.clj__GT_js(v));


var G__33440 = seq__33171;
var G__33441 = chunk__33173;
var G__33442 = count__33174;
var G__33443 = (i__33175 + (1));
seq__33171 = G__33440;
chunk__33173 = G__33441;
count__33174 = G__33442;
i__33175 = G__33443;
continue;
} else {
var G__33444 = seq__33171;
var G__33445 = chunk__33173;
var G__33446 = count__33174;
var G__33447 = (i__33175 + (1));
seq__33171 = G__33444;
chunk__33173 = G__33445;
count__33174 = G__33446;
i__33175 = G__33447;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__33171);
if(temp__5753__auto__){
var seq__33171__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33171__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__33171__$1);
var G__33448 = cljs.core.chunk_rest(seq__33171__$1);
var G__33449 = c__4638__auto__;
var G__33450 = cljs.core.count(c__4638__auto__);
var G__33451 = (0);
seq__33171 = G__33448;
chunk__33173 = G__33449;
count__33174 = G__33450;
i__33175 = G__33451;
continue;
} else {
var vec__33218 = cljs.core.first(seq__33171__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33218,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33218,(1),null);
if((!((v == null)))){
goog.object.set(obj,cljs.core.name(k),cljs.core.clj__GT_js(v));


var G__33452 = cljs.core.next(seq__33171__$1);
var G__33453 = null;
var G__33454 = (0);
var G__33455 = (0);
seq__33171 = G__33452;
chunk__33173 = G__33453;
count__33174 = G__33454;
i__33175 = G__33455;
continue;
} else {
var G__33456 = cljs.core.next(seq__33171__$1);
var G__33457 = null;
var G__33458 = (0);
var G__33459 = (0);
seq__33171 = G__33456;
chunk__33173 = G__33457;
count__33174 = G__33458;
i__33175 = G__33459;
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
var wrapped_render = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__33226_SHARP_,p2__33225_SHARP_){
return (p2__33225_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p2__33225_SHARP_.cljs$core$IFn$_invoke$arity$1(p1__33226_SHARP_) : p2__33225_SHARP_.call(null,p1__33226_SHARP_));
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
var next_state = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__33233_SHARP_,p2__33232_SHARP_){
return (p2__33232_SHARP_.cljs$core$IFn$_invoke$arity$2 ? p2__33232_SHARP_.cljs$core$IFn$_invoke$arity$2(old_state,p1__33233_SHARP_) : p2__33232_SHARP_.call(null,old_state,p1__33233_SHARP_));
}),state,did_remount);
return this$.setState(({":rum/state": cljs.core.volatile_BANG_(next_state)}));
}));

if(cljs.core.empty_QMARK_(should_update)){
} else {
goog.object.set(prototype,"shouldComponentUpdate",(function (next_props,next_state){
var this$ = this;
var old_state = cljs.core.deref(rum.core.state(this$));
var new_state = cljs.core.deref(goog.object.get(next_state,":rum/state"));
var or__4212__auto__ = cljs.core.some((function (p1__33234_SHARP_){
return (p1__33234_SHARP_.cljs$core$IFn$_invoke$arity$2 ? p1__33234_SHARP_.cljs$core$IFn$_invoke$arity$2(old_state,new_state) : p1__33234_SHARP_.call(null,old_state,new_state));
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
var vec__33252 = (function (){var G__33255 = cljs.core.deref(state);
return (wrapped_render.cljs$core$IFn$_invoke$arity$1 ? wrapped_render.cljs$core$IFn$_invoke$arity$1(G__33255) : wrapped_render.call(null,G__33255));
})();
var dom = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33252,(0),null);
var next_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33252,(1),null);
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
return cljs.core.clj__GT_js(cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__33238_SHARP_){
return (p1__33238_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__33238_SHARP_.cljs$core$IFn$_invoke$arity$1(state) : p1__33238_SHARP_.call(null,state));
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
var G__33460__delegate = function (args){
var props = ({":rum/initial-state": new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","args","rum/args",1315791754),args], null), "key": cljs.core.apply.cljs$core$IFn$_invoke$arity$2(key_fn,args)});
return React.createElement(class$,props);
};
var G__33460 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33461__i = 0, G__33461__a = new Array(arguments.length -  0);
while (G__33461__i < G__33461__a.length) {G__33461__a[G__33461__i] = arguments[G__33461__i + 0]; ++G__33461__i;}
  args = new cljs.core.IndexedSeq(G__33461__a,0,null);
} 
return G__33460__delegate.call(this,args);};
G__33460.cljs$lang$maxFixedArity = 0;
G__33460.cljs$lang$applyTo = (function (arglist__33462){
var args = cljs.core.seq(arglist__33462);
return G__33460__delegate(args);
});
G__33460.cljs$core$IFn$_invoke$arity$variadic = G__33460__delegate;
return G__33460;
})()
:(function() { 
var G__33463__delegate = function (args){
var props = ({":rum/initial-state": new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","args","rum/args",1315791754),args], null)});
return React.createElement(class$,props);
};
var G__33463 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33464__i = 0, G__33464__a = new Array(arguments.length -  0);
while (G__33464__i < G__33464__a.length) {G__33464__a[G__33464__i] = arguments[G__33464__i + 0]; ++G__33464__i;}
  args = new cljs.core.IndexedSeq(G__33464__a,0,null);
} 
return G__33463__delegate.call(this,args);};
G__33463.cljs$lang$maxFixedArity = 0;
G__33463.cljs$lang$applyTo = (function (arglist__33465){
var args = cljs.core.seq(arglist__33465);
return G__33463__delegate(args);
});
G__33463.cljs$core$IFn$_invoke$arity$variadic = G__33463__delegate;
return G__33463;
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
var G__33466__delegate = function (args){
return React.createElement(class$,({":rum/args": args}));
};
var G__33466 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33468__i = 0, G__33468__a = new Array(arguments.length -  0);
while (G__33468__i < G__33468__a.length) {G__33468__a[G__33468__i] = arguments[G__33468__i + 0]; ++G__33468__i;}
  args = new cljs.core.IndexedSeq(G__33468__a,0,null);
} 
return G__33466__delegate.call(this,args);};
G__33466.cljs$lang$maxFixedArity = 0;
G__33466.cljs$lang$applyTo = (function (arglist__33470){
var args = cljs.core.seq(arglist__33470);
return G__33466__delegate(args);
});
G__33466.cljs$core$IFn$_invoke$arity$variadic = G__33466__delegate;
return G__33466;
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
return (function (p1__33269_SHARP_){
return setTimeout(p1__33269_SHARP_,(16));
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
var seq__33284 = cljs.core.seq(queue);
var chunk__33286 = null;
var count__33287 = (0);
var i__33288 = (0);
while(true){
if((i__33288 < count__33287)){
var comp = chunk__33286.cljs$core$IIndexed$_nth$arity$2(null,i__33288);
if(cljs.core.not(goog.object.get(comp,":rum/unmounted?"))){
comp.forceUpdate();


var G__33476 = seq__33284;
var G__33477 = chunk__33286;
var G__33478 = count__33287;
var G__33479 = (i__33288 + (1));
seq__33284 = G__33476;
chunk__33286 = G__33477;
count__33287 = G__33478;
i__33288 = G__33479;
continue;
} else {
var G__33480 = seq__33284;
var G__33481 = chunk__33286;
var G__33482 = count__33287;
var G__33483 = (i__33288 + (1));
seq__33284 = G__33480;
chunk__33286 = G__33481;
count__33287 = G__33482;
i__33288 = G__33483;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__33284);
if(temp__5753__auto__){
var seq__33284__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33284__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__33284__$1);
var G__33485 = cljs.core.chunk_rest(seq__33284__$1);
var G__33486 = c__4638__auto__;
var G__33487 = cljs.core.count(c__4638__auto__);
var G__33488 = (0);
seq__33284 = G__33485;
chunk__33286 = G__33486;
count__33287 = G__33487;
i__33288 = G__33488;
continue;
} else {
var comp = cljs.core.first(seq__33284__$1);
if(cljs.core.not(goog.object.get(comp,":rum/unmounted?"))){
comp.forceUpdate();


var G__33489 = cljs.core.next(seq__33284__$1);
var G__33490 = null;
var G__33491 = (0);
var G__33492 = (0);
seq__33284 = G__33489;
chunk__33286 = G__33490;
count__33287 = G__33491;
i__33288 = G__33492;
continue;
} else {
var G__33493 = cljs.core.next(seq__33284__$1);
var G__33494 = null;
var G__33495 = (0);
var G__33496 = (0);
seq__33284 = G__33493;
chunk__33286 = G__33494;
count__33287 = G__33495;
i__33288 = G__33496;
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
var G__33330 = arguments.length;
switch (G__33330) {
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
var _STAR_reactions_STAR__orig_val__33340 = rum.core._STAR_reactions_STAR_;
var _STAR_reactions_STAR__temp_val__33345 = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);
(rum.core._STAR_reactions_STAR_ = _STAR_reactions_STAR__temp_val__33345);

try{var comp = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
var old_reactions = new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325).cljs$core$IFn$_invoke$arity$2(state,cljs.core.PersistentHashSet.EMPTY);
var vec__33358 = (render_fn.cljs$core$IFn$_invoke$arity$1 ? render_fn.cljs$core$IFn$_invoke$arity$1(state) : render_fn.call(null,state));
var dom = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33358,(0),null);
var next_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33358,(1),null);
var new_reactions = cljs.core.deref(rum.core._STAR_reactions_STAR_);
var key = new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142).cljs$core$IFn$_invoke$arity$1(state);
var seq__33362_33507 = cljs.core.seq(old_reactions);
var chunk__33363_33508 = null;
var count__33364_33509 = (0);
var i__33365_33510 = (0);
while(true){
if((i__33365_33510 < count__33364_33509)){
var ref_33511 = chunk__33363_33508.cljs$core$IIndexed$_nth$arity$2(null,i__33365_33510);
if(cljs.core.contains_QMARK_(new_reactions,ref_33511)){
} else {
cljs.core.remove_watch(ref_33511,key);
}


var G__33512 = seq__33362_33507;
var G__33513 = chunk__33363_33508;
var G__33514 = count__33364_33509;
var G__33515 = (i__33365_33510 + (1));
seq__33362_33507 = G__33512;
chunk__33363_33508 = G__33513;
count__33364_33509 = G__33514;
i__33365_33510 = G__33515;
continue;
} else {
var temp__5753__auto___33516 = cljs.core.seq(seq__33362_33507);
if(temp__5753__auto___33516){
var seq__33362_33517__$1 = temp__5753__auto___33516;
if(cljs.core.chunked_seq_QMARK_(seq__33362_33517__$1)){
var c__4638__auto___33520 = cljs.core.chunk_first(seq__33362_33517__$1);
var G__33521 = cljs.core.chunk_rest(seq__33362_33517__$1);
var G__33522 = c__4638__auto___33520;
var G__33523 = cljs.core.count(c__4638__auto___33520);
var G__33524 = (0);
seq__33362_33507 = G__33521;
chunk__33363_33508 = G__33522;
count__33364_33509 = G__33523;
i__33365_33510 = G__33524;
continue;
} else {
var ref_33525 = cljs.core.first(seq__33362_33517__$1);
if(cljs.core.contains_QMARK_(new_reactions,ref_33525)){
} else {
cljs.core.remove_watch(ref_33525,key);
}


var G__33526 = cljs.core.next(seq__33362_33517__$1);
var G__33527 = null;
var G__33528 = (0);
var G__33529 = (0);
seq__33362_33507 = G__33526;
chunk__33363_33508 = G__33527;
count__33364_33509 = G__33528;
i__33365_33510 = G__33529;
continue;
}
} else {
}
}
break;
}

var seq__33370_33530 = cljs.core.seq(new_reactions);
var chunk__33371_33531 = null;
var count__33372_33532 = (0);
var i__33373_33533 = (0);
while(true){
if((i__33373_33533 < count__33372_33532)){
var ref_33534 = chunk__33371_33531.cljs$core$IIndexed$_nth$arity$2(null,i__33373_33533);
if(cljs.core.contains_QMARK_(old_reactions,ref_33534)){
} else {
cljs.core.add_watch(ref_33534,key,((function (seq__33370_33530,chunk__33371_33531,count__33372_33532,i__33373_33533,ref_33534,comp,old_reactions,vec__33358,dom,next_state,new_reactions,key,_STAR_reactions_STAR__orig_val__33340,_STAR_reactions_STAR__temp_val__33345){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render(comp);
});})(seq__33370_33530,chunk__33371_33531,count__33372_33532,i__33373_33533,ref_33534,comp,old_reactions,vec__33358,dom,next_state,new_reactions,key,_STAR_reactions_STAR__orig_val__33340,_STAR_reactions_STAR__temp_val__33345))
);
}


var G__33535 = seq__33370_33530;
var G__33536 = chunk__33371_33531;
var G__33537 = count__33372_33532;
var G__33538 = (i__33373_33533 + (1));
seq__33370_33530 = G__33535;
chunk__33371_33531 = G__33536;
count__33372_33532 = G__33537;
i__33373_33533 = G__33538;
continue;
} else {
var temp__5753__auto___33539 = cljs.core.seq(seq__33370_33530);
if(temp__5753__auto___33539){
var seq__33370_33540__$1 = temp__5753__auto___33539;
if(cljs.core.chunked_seq_QMARK_(seq__33370_33540__$1)){
var c__4638__auto___33541 = cljs.core.chunk_first(seq__33370_33540__$1);
var G__33542 = cljs.core.chunk_rest(seq__33370_33540__$1);
var G__33543 = c__4638__auto___33541;
var G__33544 = cljs.core.count(c__4638__auto___33541);
var G__33545 = (0);
seq__33370_33530 = G__33542;
chunk__33371_33531 = G__33543;
count__33372_33532 = G__33544;
i__33373_33533 = G__33545;
continue;
} else {
var ref_33546 = cljs.core.first(seq__33370_33540__$1);
if(cljs.core.contains_QMARK_(old_reactions,ref_33546)){
} else {
cljs.core.add_watch(ref_33546,key,((function (seq__33370_33530,chunk__33371_33531,count__33372_33532,i__33373_33533,ref_33546,seq__33370_33540__$1,temp__5753__auto___33539,comp,old_reactions,vec__33358,dom,next_state,new_reactions,key,_STAR_reactions_STAR__orig_val__33340,_STAR_reactions_STAR__temp_val__33345){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render(comp);
});})(seq__33370_33530,chunk__33371_33531,count__33372_33532,i__33373_33533,ref_33546,seq__33370_33540__$1,temp__5753__auto___33539,comp,old_reactions,vec__33358,dom,next_state,new_reactions,key,_STAR_reactions_STAR__orig_val__33340,_STAR_reactions_STAR__temp_val__33345))
);
}


var G__33548 = cljs.core.next(seq__33370_33540__$1);
var G__33549 = null;
var G__33550 = (0);
var G__33551 = (0);
seq__33370_33530 = G__33548;
chunk__33371_33531 = G__33549;
count__33372_33532 = G__33550;
i__33373_33533 = G__33551;
continue;
}
} else {
}
}
break;
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dom,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(next_state,new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325),new_reactions)], null);
}finally {(rum.core._STAR_reactions_STAR_ = _STAR_reactions_STAR__orig_val__33340);
}});
}),new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (state){
var key_33553 = new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142).cljs$core$IFn$_invoke$arity$1(state);
var seq__33388_33554 = cljs.core.seq(new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325).cljs$core$IFn$_invoke$arity$1(state));
var chunk__33389_33555 = null;
var count__33390_33556 = (0);
var i__33391_33557 = (0);
while(true){
if((i__33391_33557 < count__33390_33556)){
var ref_33558 = chunk__33389_33555.cljs$core$IIndexed$_nth$arity$2(null,i__33391_33557);
cljs.core.remove_watch(ref_33558,key_33553);


var G__33559 = seq__33388_33554;
var G__33560 = chunk__33389_33555;
var G__33561 = count__33390_33556;
var G__33562 = (i__33391_33557 + (1));
seq__33388_33554 = G__33559;
chunk__33389_33555 = G__33560;
count__33390_33556 = G__33561;
i__33391_33557 = G__33562;
continue;
} else {
var temp__5753__auto___33563 = cljs.core.seq(seq__33388_33554);
if(temp__5753__auto___33563){
var seq__33388_33564__$1 = temp__5753__auto___33563;
if(cljs.core.chunked_seq_QMARK_(seq__33388_33564__$1)){
var c__4638__auto___33566 = cljs.core.chunk_first(seq__33388_33564__$1);
var G__33568 = cljs.core.chunk_rest(seq__33388_33564__$1);
var G__33569 = c__4638__auto___33566;
var G__33570 = cljs.core.count(c__4638__auto___33566);
var G__33571 = (0);
seq__33388_33554 = G__33568;
chunk__33389_33555 = G__33569;
count__33390_33556 = G__33570;
i__33391_33557 = G__33571;
continue;
} else {
var ref_33572 = cljs.core.first(seq__33388_33564__$1);
cljs.core.remove_watch(ref_33572,key_33553);


var G__33573 = cljs.core.next(seq__33388_33564__$1);
var G__33574 = null;
var G__33575 = (0);
var G__33576 = (0);
seq__33388_33554 = G__33573;
chunk__33389_33555 = G__33574;
count__33390_33556 = G__33575;
i__33391_33557 = G__33576;
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
var len__4818__auto___33578 = arguments.length;
var i__4819__auto___33579 = (0);
while(true){
if((i__4819__auto___33579 < len__4818__auto___33578)){
args__4824__auto__.push((arguments[i__4819__auto___33579]));

var G__33580 = (i__4819__auto___33579 + (1));
i__4819__auto___33579 = G__33580;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic = (function (ref,path,p__33413){
var map__33414 = p__33413;
var map__33414__$1 = cljs.core.__destructure_map(map__33414);
var options = map__33414__$1;
if((ref instanceof rum.cursor.Cursor)){
return (new rum.cursor.Cursor(ref.ref,cljs.core.into.cljs$core$IFn$_invoke$arity$2(ref.path,path),new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(options)));
} else {
return (new rum.cursor.Cursor(ref,path,new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(options)));
}
}));

(rum.core.cursor_in.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(rum.core.cursor_in.cljs$lang$applyTo = (function (seq33407){
var G__33408 = cljs.core.first(seq33407);
var seq33407__$1 = cljs.core.next(seq33407);
var G__33409 = cljs.core.first(seq33407__$1);
var seq33407__$2 = cljs.core.next(seq33407__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33408,G__33409,seq33407__$2);
}));

/**
 * Same as [[cursor-in]] but accepts single key instead of path vector.
 */
rum.core.cursor = (function rum$core$cursor(var_args){
var args__4824__auto__ = [];
var len__4818__auto___33583 = arguments.length;
var i__4819__auto___33584 = (0);
while(true){
if((i__4819__auto___33584 < len__4818__auto___33583)){
args__4824__auto__.push((arguments[i__4819__auto___33584]));

var G__33586 = (i__4819__auto___33584 + (1));
i__4819__auto___33584 = G__33586;
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
(rum.core.cursor.cljs$lang$applyTo = (function (seq33418){
var G__33419 = cljs.core.first(seq33418);
var seq33418__$1 = cljs.core.next(seq33418);
var G__33420 = cljs.core.first(seq33418__$1);
var seq33418__$2 = cljs.core.next(seq33418__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33419,G__33420,seq33418__$2);
}));


//# sourceMappingURL=rum.core.js.map
