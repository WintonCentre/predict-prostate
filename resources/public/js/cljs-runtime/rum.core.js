goog.provide('rum.core');
/**
 * Given React component, returns Rum state associated with it.
 */
rum.core.state = (function rum$core$state(comp){
return goog.object.get(comp.state,":rum/state");
});
rum.core.extend_BANG_ = (function rum$core$extend_BANG_(obj,props){
var seq__43435 = cljs.core.seq(props);
var chunk__43437 = null;
var count__43438 = (0);
var i__43439 = (0);
while(true){
if((i__43439 < count__43438)){
var vec__43452 = chunk__43437.cljs$core$IIndexed$_nth$arity$2(null,i__43439);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43452,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43452,(1),null);
if((!((v == null)))){
goog.object.set(obj,cljs.core.name(k),cljs.core.clj__GT_js(v));


var G__43575 = seq__43435;
var G__43576 = chunk__43437;
var G__43577 = count__43438;
var G__43578 = (i__43439 + (1));
seq__43435 = G__43575;
chunk__43437 = G__43576;
count__43438 = G__43577;
i__43439 = G__43578;
continue;
} else {
var G__43579 = seq__43435;
var G__43580 = chunk__43437;
var G__43581 = count__43438;
var G__43582 = (i__43439 + (1));
seq__43435 = G__43579;
chunk__43437 = G__43580;
count__43438 = G__43581;
i__43439 = G__43582;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__43435);
if(temp__5753__auto__){
var seq__43435__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__43435__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__43435__$1);
var G__43583 = cljs.core.chunk_rest(seq__43435__$1);
var G__43584 = c__4638__auto__;
var G__43585 = cljs.core.count(c__4638__auto__);
var G__43586 = (0);
seq__43435 = G__43583;
chunk__43437 = G__43584;
count__43438 = G__43585;
i__43439 = G__43586;
continue;
} else {
var vec__43455 = cljs.core.first(seq__43435__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43455,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43455,(1),null);
if((!((v == null)))){
goog.object.set(obj,cljs.core.name(k),cljs.core.clj__GT_js(v));


var G__43587 = cljs.core.next(seq__43435__$1);
var G__43588 = null;
var G__43589 = (0);
var G__43590 = (0);
seq__43435 = G__43587;
chunk__43437 = G__43588;
count__43438 = G__43589;
i__43439 = G__43590;
continue;
} else {
var G__43591 = cljs.core.next(seq__43435__$1);
var G__43592 = null;
var G__43593 = (0);
var G__43594 = (0);
seq__43435 = G__43591;
chunk__43437 = G__43592;
count__43438 = G__43593;
i__43439 = G__43594;
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
var wrapped_render = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__43459_SHARP_,p2__43458_SHARP_){
return (p2__43458_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p2__43458_SHARP_.cljs$core$IFn$_invoke$arity$1(p1__43459_SHARP_) : p2__43458_SHARP_.call(null,p1__43459_SHARP_));
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
var next_state = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__43465_SHARP_,p2__43464_SHARP_){
return (p2__43464_SHARP_.cljs$core$IFn$_invoke$arity$2 ? p2__43464_SHARP_.cljs$core$IFn$_invoke$arity$2(old_state,p1__43465_SHARP_) : p2__43464_SHARP_.call(null,old_state,p1__43465_SHARP_));
}),state,did_remount);
return this$.setState(({":rum/state": cljs.core.volatile_BANG_(next_state)}));
}));

if(cljs.core.empty_QMARK_(should_update)){
} else {
goog.object.set(prototype,"shouldComponentUpdate",(function (next_props,next_state){
var this$ = this;
var old_state = cljs.core.deref(rum.core.state(this$));
var new_state = cljs.core.deref(goog.object.get(next_state,":rum/state"));
var or__4212__auto__ = cljs.core.some((function (p1__43466_SHARP_){
return (p1__43466_SHARP_.cljs$core$IFn$_invoke$arity$2 ? p1__43466_SHARP_.cljs$core$IFn$_invoke$arity$2(old_state,new_state) : p1__43466_SHARP_.call(null,old_state,new_state));
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
var vec__43473 = (function (){var G__43476 = cljs.core.deref(state);
return (wrapped_render.cljs$core$IFn$_invoke$arity$1 ? wrapped_render.cljs$core$IFn$_invoke$arity$1(G__43476) : wrapped_render.call(null,G__43476));
})();
var dom = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43473,(0),null);
var next_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43473,(1),null);
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
return cljs.core.clj__GT_js(cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__43467_SHARP_){
return (p1__43467_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__43467_SHARP_.cljs$core$IFn$_invoke$arity$1(state) : p1__43467_SHARP_.call(null,state));
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
var G__43600__delegate = function (args){
var props = ({":rum/initial-state": new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","args","rum/args",1315791754),args], null), "key": cljs.core.apply.cljs$core$IFn$_invoke$arity$2(key_fn,args)});
return React.createElement(class$,props);
};
var G__43600 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43601__i = 0, G__43601__a = new Array(arguments.length -  0);
while (G__43601__i < G__43601__a.length) {G__43601__a[G__43601__i] = arguments[G__43601__i + 0]; ++G__43601__i;}
  args = new cljs.core.IndexedSeq(G__43601__a,0,null);
} 
return G__43600__delegate.call(this,args);};
G__43600.cljs$lang$maxFixedArity = 0;
G__43600.cljs$lang$applyTo = (function (arglist__43602){
var args = cljs.core.seq(arglist__43602);
return G__43600__delegate(args);
});
G__43600.cljs$core$IFn$_invoke$arity$variadic = G__43600__delegate;
return G__43600;
})()
:(function() { 
var G__43603__delegate = function (args){
var props = ({":rum/initial-state": new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","args","rum/args",1315791754),args], null)});
return React.createElement(class$,props);
};
var G__43603 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43604__i = 0, G__43604__a = new Array(arguments.length -  0);
while (G__43604__i < G__43604__a.length) {G__43604__a[G__43604__i] = arguments[G__43604__i + 0]; ++G__43604__i;}
  args = new cljs.core.IndexedSeq(G__43604__a,0,null);
} 
return G__43603__delegate.call(this,args);};
G__43603.cljs$lang$maxFixedArity = 0;
G__43603.cljs$lang$applyTo = (function (arglist__43605){
var args = cljs.core.seq(arglist__43605);
return G__43603__delegate(args);
});
G__43603.cljs$core$IFn$_invoke$arity$variadic = G__43603__delegate;
return G__43603;
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
var G__43610__delegate = function (args){
return React.createElement(class$,({":rum/args": args}));
};
var G__43610 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43611__i = 0, G__43611__a = new Array(arguments.length -  0);
while (G__43611__i < G__43611__a.length) {G__43611__a[G__43611__i] = arguments[G__43611__i + 0]; ++G__43611__i;}
  args = new cljs.core.IndexedSeq(G__43611__a,0,null);
} 
return G__43610__delegate.call(this,args);};
G__43610.cljs$lang$maxFixedArity = 0;
G__43610.cljs$lang$applyTo = (function (arglist__43612){
var args = cljs.core.seq(arglist__43612);
return G__43610__delegate(args);
});
G__43610.cljs$core$IFn$_invoke$arity$variadic = G__43610__delegate;
return G__43610;
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
return (function (p1__43489_SHARP_){
return setTimeout(p1__43489_SHARP_,(16));
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
var seq__43495 = cljs.core.seq(queue);
var chunk__43497 = null;
var count__43498 = (0);
var i__43499 = (0);
while(true){
if((i__43499 < count__43498)){
var comp = chunk__43497.cljs$core$IIndexed$_nth$arity$2(null,i__43499);
if(cljs.core.not(goog.object.get(comp,":rum/unmounted?"))){
comp.forceUpdate();


var G__43616 = seq__43495;
var G__43617 = chunk__43497;
var G__43618 = count__43498;
var G__43619 = (i__43499 + (1));
seq__43495 = G__43616;
chunk__43497 = G__43617;
count__43498 = G__43618;
i__43499 = G__43619;
continue;
} else {
var G__43623 = seq__43495;
var G__43624 = chunk__43497;
var G__43625 = count__43498;
var G__43626 = (i__43499 + (1));
seq__43495 = G__43623;
chunk__43497 = G__43624;
count__43498 = G__43625;
i__43499 = G__43626;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__43495);
if(temp__5753__auto__){
var seq__43495__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__43495__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__43495__$1);
var G__43627 = cljs.core.chunk_rest(seq__43495__$1);
var G__43628 = c__4638__auto__;
var G__43629 = cljs.core.count(c__4638__auto__);
var G__43630 = (0);
seq__43495 = G__43627;
chunk__43497 = G__43628;
count__43498 = G__43629;
i__43499 = G__43630;
continue;
} else {
var comp = cljs.core.first(seq__43495__$1);
if(cljs.core.not(goog.object.get(comp,":rum/unmounted?"))){
comp.forceUpdate();


var G__43633 = cljs.core.next(seq__43495__$1);
var G__43634 = null;
var G__43635 = (0);
var G__43636 = (0);
seq__43495 = G__43633;
chunk__43497 = G__43634;
count__43498 = G__43635;
i__43499 = G__43636;
continue;
} else {
var G__43637 = cljs.core.next(seq__43495__$1);
var G__43638 = null;
var G__43639 = (0);
var G__43640 = (0);
seq__43495 = G__43637;
chunk__43497 = G__43638;
count__43498 = G__43639;
i__43499 = G__43640;
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
var G__43522 = arguments.length;
switch (G__43522) {
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
var _STAR_reactions_STAR__orig_val__43523 = rum.core._STAR_reactions_STAR_;
var _STAR_reactions_STAR__temp_val__43524 = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);
(rum.core._STAR_reactions_STAR_ = _STAR_reactions_STAR__temp_val__43524);

try{var comp = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
var old_reactions = new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325).cljs$core$IFn$_invoke$arity$2(state,cljs.core.PersistentHashSet.EMPTY);
var vec__43526 = (render_fn.cljs$core$IFn$_invoke$arity$1 ? render_fn.cljs$core$IFn$_invoke$arity$1(state) : render_fn.call(null,state));
var dom = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43526,(0),null);
var next_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43526,(1),null);
var new_reactions = cljs.core.deref(rum.core._STAR_reactions_STAR_);
var key = new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142).cljs$core$IFn$_invoke$arity$1(state);
var seq__43529_43643 = cljs.core.seq(old_reactions);
var chunk__43530_43644 = null;
var count__43531_43645 = (0);
var i__43532_43646 = (0);
while(true){
if((i__43532_43646 < count__43531_43645)){
var ref_43647 = chunk__43530_43644.cljs$core$IIndexed$_nth$arity$2(null,i__43532_43646);
if(cljs.core.contains_QMARK_(new_reactions,ref_43647)){
} else {
cljs.core.remove_watch(ref_43647,key);
}


var G__43648 = seq__43529_43643;
var G__43649 = chunk__43530_43644;
var G__43650 = count__43531_43645;
var G__43651 = (i__43532_43646 + (1));
seq__43529_43643 = G__43648;
chunk__43530_43644 = G__43649;
count__43531_43645 = G__43650;
i__43532_43646 = G__43651;
continue;
} else {
var temp__5753__auto___43652 = cljs.core.seq(seq__43529_43643);
if(temp__5753__auto___43652){
var seq__43529_43653__$1 = temp__5753__auto___43652;
if(cljs.core.chunked_seq_QMARK_(seq__43529_43653__$1)){
var c__4638__auto___43654 = cljs.core.chunk_first(seq__43529_43653__$1);
var G__43655 = cljs.core.chunk_rest(seq__43529_43653__$1);
var G__43656 = c__4638__auto___43654;
var G__43657 = cljs.core.count(c__4638__auto___43654);
var G__43658 = (0);
seq__43529_43643 = G__43655;
chunk__43530_43644 = G__43656;
count__43531_43645 = G__43657;
i__43532_43646 = G__43658;
continue;
} else {
var ref_43659 = cljs.core.first(seq__43529_43653__$1);
if(cljs.core.contains_QMARK_(new_reactions,ref_43659)){
} else {
cljs.core.remove_watch(ref_43659,key);
}


var G__43660 = cljs.core.next(seq__43529_43653__$1);
var G__43661 = null;
var G__43662 = (0);
var G__43663 = (0);
seq__43529_43643 = G__43660;
chunk__43530_43644 = G__43661;
count__43531_43645 = G__43662;
i__43532_43646 = G__43663;
continue;
}
} else {
}
}
break;
}

var seq__43535_43664 = cljs.core.seq(new_reactions);
var chunk__43536_43665 = null;
var count__43537_43666 = (0);
var i__43538_43667 = (0);
while(true){
if((i__43538_43667 < count__43537_43666)){
var ref_43668 = chunk__43536_43665.cljs$core$IIndexed$_nth$arity$2(null,i__43538_43667);
if(cljs.core.contains_QMARK_(old_reactions,ref_43668)){
} else {
cljs.core.add_watch(ref_43668,key,((function (seq__43535_43664,chunk__43536_43665,count__43537_43666,i__43538_43667,ref_43668,comp,old_reactions,vec__43526,dom,next_state,new_reactions,key,_STAR_reactions_STAR__orig_val__43523,_STAR_reactions_STAR__temp_val__43524){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render(comp);
});})(seq__43535_43664,chunk__43536_43665,count__43537_43666,i__43538_43667,ref_43668,comp,old_reactions,vec__43526,dom,next_state,new_reactions,key,_STAR_reactions_STAR__orig_val__43523,_STAR_reactions_STAR__temp_val__43524))
);
}


var G__43669 = seq__43535_43664;
var G__43670 = chunk__43536_43665;
var G__43671 = count__43537_43666;
var G__43672 = (i__43538_43667 + (1));
seq__43535_43664 = G__43669;
chunk__43536_43665 = G__43670;
count__43537_43666 = G__43671;
i__43538_43667 = G__43672;
continue;
} else {
var temp__5753__auto___43673 = cljs.core.seq(seq__43535_43664);
if(temp__5753__auto___43673){
var seq__43535_43677__$1 = temp__5753__auto___43673;
if(cljs.core.chunked_seq_QMARK_(seq__43535_43677__$1)){
var c__4638__auto___43678 = cljs.core.chunk_first(seq__43535_43677__$1);
var G__43679 = cljs.core.chunk_rest(seq__43535_43677__$1);
var G__43680 = c__4638__auto___43678;
var G__43681 = cljs.core.count(c__4638__auto___43678);
var G__43682 = (0);
seq__43535_43664 = G__43679;
chunk__43536_43665 = G__43680;
count__43537_43666 = G__43681;
i__43538_43667 = G__43682;
continue;
} else {
var ref_43683 = cljs.core.first(seq__43535_43677__$1);
if(cljs.core.contains_QMARK_(old_reactions,ref_43683)){
} else {
cljs.core.add_watch(ref_43683,key,((function (seq__43535_43664,chunk__43536_43665,count__43537_43666,i__43538_43667,ref_43683,seq__43535_43677__$1,temp__5753__auto___43673,comp,old_reactions,vec__43526,dom,next_state,new_reactions,key,_STAR_reactions_STAR__orig_val__43523,_STAR_reactions_STAR__temp_val__43524){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render(comp);
});})(seq__43535_43664,chunk__43536_43665,count__43537_43666,i__43538_43667,ref_43683,seq__43535_43677__$1,temp__5753__auto___43673,comp,old_reactions,vec__43526,dom,next_state,new_reactions,key,_STAR_reactions_STAR__orig_val__43523,_STAR_reactions_STAR__temp_val__43524))
);
}


var G__43684 = cljs.core.next(seq__43535_43677__$1);
var G__43685 = null;
var G__43686 = (0);
var G__43687 = (0);
seq__43535_43664 = G__43684;
chunk__43536_43665 = G__43685;
count__43537_43666 = G__43686;
i__43538_43667 = G__43687;
continue;
}
} else {
}
}
break;
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dom,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(next_state,new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325),new_reactions)], null);
}finally {(rum.core._STAR_reactions_STAR_ = _STAR_reactions_STAR__orig_val__43523);
}});
}),new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (state){
var key_43688 = new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142).cljs$core$IFn$_invoke$arity$1(state);
var seq__43543_43689 = cljs.core.seq(new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325).cljs$core$IFn$_invoke$arity$1(state));
var chunk__43544_43690 = null;
var count__43545_43691 = (0);
var i__43546_43692 = (0);
while(true){
if((i__43546_43692 < count__43545_43691)){
var ref_43693 = chunk__43544_43690.cljs$core$IIndexed$_nth$arity$2(null,i__43546_43692);
cljs.core.remove_watch(ref_43693,key_43688);


var G__43694 = seq__43543_43689;
var G__43695 = chunk__43544_43690;
var G__43696 = count__43545_43691;
var G__43697 = (i__43546_43692 + (1));
seq__43543_43689 = G__43694;
chunk__43544_43690 = G__43695;
count__43545_43691 = G__43696;
i__43546_43692 = G__43697;
continue;
} else {
var temp__5753__auto___43698 = cljs.core.seq(seq__43543_43689);
if(temp__5753__auto___43698){
var seq__43543_43699__$1 = temp__5753__auto___43698;
if(cljs.core.chunked_seq_QMARK_(seq__43543_43699__$1)){
var c__4638__auto___43700 = cljs.core.chunk_first(seq__43543_43699__$1);
var G__43701 = cljs.core.chunk_rest(seq__43543_43699__$1);
var G__43702 = c__4638__auto___43700;
var G__43703 = cljs.core.count(c__4638__auto___43700);
var G__43704 = (0);
seq__43543_43689 = G__43701;
chunk__43544_43690 = G__43702;
count__43545_43691 = G__43703;
i__43546_43692 = G__43704;
continue;
} else {
var ref_43705 = cljs.core.first(seq__43543_43699__$1);
cljs.core.remove_watch(ref_43705,key_43688);


var G__43706 = cljs.core.next(seq__43543_43699__$1);
var G__43707 = null;
var G__43708 = (0);
var G__43709 = (0);
seq__43543_43689 = G__43706;
chunk__43544_43690 = G__43707;
count__43545_43691 = G__43708;
i__43546_43692 = G__43709;
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
var len__4818__auto___43711 = arguments.length;
var i__4819__auto___43712 = (0);
while(true){
if((i__4819__auto___43712 < len__4818__auto___43711)){
args__4824__auto__.push((arguments[i__4819__auto___43712]));

var G__43713 = (i__4819__auto___43712 + (1));
i__4819__auto___43712 = G__43713;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic = (function (ref,path,p__43564){
var map__43565 = p__43564;
var map__43565__$1 = cljs.core.__destructure_map(map__43565);
var options = map__43565__$1;
if((ref instanceof rum.cursor.Cursor)){
return (new rum.cursor.Cursor(ref.ref,cljs.core.into.cljs$core$IFn$_invoke$arity$2(ref.path,path),new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(options)));
} else {
return (new rum.cursor.Cursor(ref,path,new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(options)));
}
}));

(rum.core.cursor_in.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(rum.core.cursor_in.cljs$lang$applyTo = (function (seq43558){
var G__43559 = cljs.core.first(seq43558);
var seq43558__$1 = cljs.core.next(seq43558);
var G__43560 = cljs.core.first(seq43558__$1);
var seq43558__$2 = cljs.core.next(seq43558__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43559,G__43560,seq43558__$2);
}));

/**
 * Same as [[cursor-in]] but accepts single key instead of path vector.
 */
rum.core.cursor = (function rum$core$cursor(var_args){
var args__4824__auto__ = [];
var len__4818__auto___43716 = arguments.length;
var i__4819__auto___43717 = (0);
while(true){
if((i__4819__auto___43717 < len__4818__auto___43716)){
args__4824__auto__.push((arguments[i__4819__auto___43717]));

var G__43718 = (i__4819__auto___43717 + (1));
i__4819__auto___43717 = G__43718;
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
(rum.core.cursor.cljs$lang$applyTo = (function (seq43571){
var G__43572 = cljs.core.first(seq43571);
var seq43571__$1 = cljs.core.next(seq43571);
var G__43573 = cljs.core.first(seq43571__$1);
var seq43571__$2 = cljs.core.next(seq43571__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43572,G__43573,seq43571__$2);
}));


//# sourceMappingURL=rum.core.js.map
