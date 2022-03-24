goog.provide('rum.core');
/**
 * Given React component, returns Rum state associated with it.
 */
rum.core.state = (function rum$core$state(comp){
return goog.object.get(comp.state,":rum/state");
});
rum.core.extend_BANG_ = (function rum$core$extend_BANG_(obj,props){
var seq__43387 = cljs.core.seq(props);
var chunk__43389 = null;
var count__43390 = (0);
var i__43391 = (0);
while(true){
if((i__43391 < count__43390)){
var vec__43399 = chunk__43389.cljs$core$IIndexed$_nth$arity$2(null,i__43391);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43399,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43399,(1),null);
if((!((v == null)))){
goog.object.set(obj,cljs.core.name(k),cljs.core.clj__GT_js(v));


var G__43496 = seq__43387;
var G__43497 = chunk__43389;
var G__43498 = count__43390;
var G__43499 = (i__43391 + (1));
seq__43387 = G__43496;
chunk__43389 = G__43497;
count__43390 = G__43498;
i__43391 = G__43499;
continue;
} else {
var G__43500 = seq__43387;
var G__43501 = chunk__43389;
var G__43502 = count__43390;
var G__43503 = (i__43391 + (1));
seq__43387 = G__43500;
chunk__43389 = G__43501;
count__43390 = G__43502;
i__43391 = G__43503;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__43387);
if(temp__5753__auto__){
var seq__43387__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__43387__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__43387__$1);
var G__43504 = cljs.core.chunk_rest(seq__43387__$1);
var G__43505 = c__4638__auto__;
var G__43506 = cljs.core.count(c__4638__auto__);
var G__43507 = (0);
seq__43387 = G__43504;
chunk__43389 = G__43505;
count__43390 = G__43506;
i__43391 = G__43507;
continue;
} else {
var vec__43402 = cljs.core.first(seq__43387__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43402,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43402,(1),null);
if((!((v == null)))){
goog.object.set(obj,cljs.core.name(k),cljs.core.clj__GT_js(v));


var G__43508 = cljs.core.next(seq__43387__$1);
var G__43509 = null;
var G__43510 = (0);
var G__43511 = (0);
seq__43387 = G__43508;
chunk__43389 = G__43509;
count__43390 = G__43510;
i__43391 = G__43511;
continue;
} else {
var G__43512 = cljs.core.next(seq__43387__$1);
var G__43513 = null;
var G__43514 = (0);
var G__43515 = (0);
seq__43387 = G__43512;
chunk__43389 = G__43513;
count__43390 = G__43514;
i__43391 = G__43515;
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
var wrapped_render = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__43406_SHARP_,p2__43405_SHARP_){
return (p2__43405_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p2__43405_SHARP_.cljs$core$IFn$_invoke$arity$1(p1__43406_SHARP_) : p2__43405_SHARP_.call(null,p1__43406_SHARP_));
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
var next_state = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__43408_SHARP_,p2__43407_SHARP_){
return (p2__43407_SHARP_.cljs$core$IFn$_invoke$arity$2 ? p2__43407_SHARP_.cljs$core$IFn$_invoke$arity$2(old_state,p1__43408_SHARP_) : p2__43407_SHARP_.call(null,old_state,p1__43408_SHARP_));
}),state,did_remount);
return this$.setState(({":rum/state": cljs.core.volatile_BANG_(next_state)}));
}));

if(cljs.core.empty_QMARK_(should_update)){
} else {
goog.object.set(prototype,"shouldComponentUpdate",(function (next_props,next_state){
var this$ = this;
var old_state = cljs.core.deref(rum.core.state(this$));
var new_state = cljs.core.deref(goog.object.get(next_state,":rum/state"));
var or__4212__auto__ = cljs.core.some((function (p1__43409_SHARP_){
return (p1__43409_SHARP_.cljs$core$IFn$_invoke$arity$2 ? p1__43409_SHARP_.cljs$core$IFn$_invoke$arity$2(old_state,new_state) : p1__43409_SHARP_.call(null,old_state,new_state));
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
var vec__43411 = (function (){var G__43414 = cljs.core.deref(state);
return (wrapped_render.cljs$core$IFn$_invoke$arity$1 ? wrapped_render.cljs$core$IFn$_invoke$arity$1(G__43414) : wrapped_render.call(null,G__43414));
})();
var dom = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43411,(0),null);
var next_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43411,(1),null);
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
return cljs.core.clj__GT_js(cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__43410_SHARP_){
return (p1__43410_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__43410_SHARP_.cljs$core$IFn$_invoke$arity$1(state) : p1__43410_SHARP_.call(null,state));
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
var G__43520__delegate = function (args){
var props = ({":rum/initial-state": new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","args","rum/args",1315791754),args], null), "key": cljs.core.apply.cljs$core$IFn$_invoke$arity$2(key_fn,args)});
return React.createElement(class$,props);
};
var G__43520 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43522__i = 0, G__43522__a = new Array(arguments.length -  0);
while (G__43522__i < G__43522__a.length) {G__43522__a[G__43522__i] = arguments[G__43522__i + 0]; ++G__43522__i;}
  args = new cljs.core.IndexedSeq(G__43522__a,0,null);
} 
return G__43520__delegate.call(this,args);};
G__43520.cljs$lang$maxFixedArity = 0;
G__43520.cljs$lang$applyTo = (function (arglist__43523){
var args = cljs.core.seq(arglist__43523);
return G__43520__delegate(args);
});
G__43520.cljs$core$IFn$_invoke$arity$variadic = G__43520__delegate;
return G__43520;
})()
:(function() { 
var G__43524__delegate = function (args){
var props = ({":rum/initial-state": new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","args","rum/args",1315791754),args], null)});
return React.createElement(class$,props);
};
var G__43524 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43525__i = 0, G__43525__a = new Array(arguments.length -  0);
while (G__43525__i < G__43525__a.length) {G__43525__a[G__43525__i] = arguments[G__43525__i + 0]; ++G__43525__i;}
  args = new cljs.core.IndexedSeq(G__43525__a,0,null);
} 
return G__43524__delegate.call(this,args);};
G__43524.cljs$lang$maxFixedArity = 0;
G__43524.cljs$lang$applyTo = (function (arglist__43526){
var args = cljs.core.seq(arglist__43526);
return G__43524__delegate(args);
});
G__43524.cljs$core$IFn$_invoke$arity$variadic = G__43524__delegate;
return G__43524;
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
var G__43527__delegate = function (args){
return React.createElement(class$,({":rum/args": args}));
};
var G__43527 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43528__i = 0, G__43528__a = new Array(arguments.length -  0);
while (G__43528__i < G__43528__a.length) {G__43528__a[G__43528__i] = arguments[G__43528__i + 0]; ++G__43528__i;}
  args = new cljs.core.IndexedSeq(G__43528__a,0,null);
} 
return G__43527__delegate.call(this,args);};
G__43527.cljs$lang$maxFixedArity = 0;
G__43527.cljs$lang$applyTo = (function (arglist__43529){
var args = cljs.core.seq(arglist__43529);
return G__43527__delegate(args);
});
G__43527.cljs$core$IFn$_invoke$arity$variadic = G__43527__delegate;
return G__43527;
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
return (function (p1__43424_SHARP_){
return setTimeout(p1__43424_SHARP_,(16));
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
var seq__43427 = cljs.core.seq(queue);
var chunk__43429 = null;
var count__43430 = (0);
var i__43431 = (0);
while(true){
if((i__43431 < count__43430)){
var comp = chunk__43429.cljs$core$IIndexed$_nth$arity$2(null,i__43431);
if(cljs.core.not(goog.object.get(comp,":rum/unmounted?"))){
comp.forceUpdate();


var G__43536 = seq__43427;
var G__43537 = chunk__43429;
var G__43538 = count__43430;
var G__43539 = (i__43431 + (1));
seq__43427 = G__43536;
chunk__43429 = G__43537;
count__43430 = G__43538;
i__43431 = G__43539;
continue;
} else {
var G__43540 = seq__43427;
var G__43541 = chunk__43429;
var G__43542 = count__43430;
var G__43543 = (i__43431 + (1));
seq__43427 = G__43540;
chunk__43429 = G__43541;
count__43430 = G__43542;
i__43431 = G__43543;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__43427);
if(temp__5753__auto__){
var seq__43427__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__43427__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__43427__$1);
var G__43544 = cljs.core.chunk_rest(seq__43427__$1);
var G__43545 = c__4638__auto__;
var G__43546 = cljs.core.count(c__4638__auto__);
var G__43547 = (0);
seq__43427 = G__43544;
chunk__43429 = G__43545;
count__43430 = G__43546;
i__43431 = G__43547;
continue;
} else {
var comp = cljs.core.first(seq__43427__$1);
if(cljs.core.not(goog.object.get(comp,":rum/unmounted?"))){
comp.forceUpdate();


var G__43549 = cljs.core.next(seq__43427__$1);
var G__43550 = null;
var G__43551 = (0);
var G__43552 = (0);
seq__43427 = G__43549;
chunk__43429 = G__43550;
count__43430 = G__43551;
i__43431 = G__43552;
continue;
} else {
var G__43553 = cljs.core.next(seq__43427__$1);
var G__43554 = null;
var G__43555 = (0);
var G__43556 = (0);
seq__43427 = G__43553;
chunk__43429 = G__43554;
count__43430 = G__43555;
i__43431 = G__43556;
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
var G__43438 = arguments.length;
switch (G__43438) {
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
var _STAR_reactions_STAR__orig_val__43448 = rum.core._STAR_reactions_STAR_;
var _STAR_reactions_STAR__temp_val__43449 = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);
(rum.core._STAR_reactions_STAR_ = _STAR_reactions_STAR__temp_val__43449);

try{var comp = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
var old_reactions = new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325).cljs$core$IFn$_invoke$arity$2(state,cljs.core.PersistentHashSet.EMPTY);
var vec__43451 = (render_fn.cljs$core$IFn$_invoke$arity$1 ? render_fn.cljs$core$IFn$_invoke$arity$1(state) : render_fn.call(null,state));
var dom = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43451,(0),null);
var next_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43451,(1),null);
var new_reactions = cljs.core.deref(rum.core._STAR_reactions_STAR_);
var key = new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142).cljs$core$IFn$_invoke$arity$1(state);
var seq__43454_43577 = cljs.core.seq(old_reactions);
var chunk__43455_43578 = null;
var count__43456_43579 = (0);
var i__43457_43580 = (0);
while(true){
if((i__43457_43580 < count__43456_43579)){
var ref_43581 = chunk__43455_43578.cljs$core$IIndexed$_nth$arity$2(null,i__43457_43580);
if(cljs.core.contains_QMARK_(new_reactions,ref_43581)){
} else {
cljs.core.remove_watch(ref_43581,key);
}


var G__43582 = seq__43454_43577;
var G__43583 = chunk__43455_43578;
var G__43584 = count__43456_43579;
var G__43585 = (i__43457_43580 + (1));
seq__43454_43577 = G__43582;
chunk__43455_43578 = G__43583;
count__43456_43579 = G__43584;
i__43457_43580 = G__43585;
continue;
} else {
var temp__5753__auto___43586 = cljs.core.seq(seq__43454_43577);
if(temp__5753__auto___43586){
var seq__43454_43587__$1 = temp__5753__auto___43586;
if(cljs.core.chunked_seq_QMARK_(seq__43454_43587__$1)){
var c__4638__auto___43588 = cljs.core.chunk_first(seq__43454_43587__$1);
var G__43589 = cljs.core.chunk_rest(seq__43454_43587__$1);
var G__43590 = c__4638__auto___43588;
var G__43591 = cljs.core.count(c__4638__auto___43588);
var G__43592 = (0);
seq__43454_43577 = G__43589;
chunk__43455_43578 = G__43590;
count__43456_43579 = G__43591;
i__43457_43580 = G__43592;
continue;
} else {
var ref_43593 = cljs.core.first(seq__43454_43587__$1);
if(cljs.core.contains_QMARK_(new_reactions,ref_43593)){
} else {
cljs.core.remove_watch(ref_43593,key);
}


var G__43594 = cljs.core.next(seq__43454_43587__$1);
var G__43595 = null;
var G__43596 = (0);
var G__43597 = (0);
seq__43454_43577 = G__43594;
chunk__43455_43578 = G__43595;
count__43456_43579 = G__43596;
i__43457_43580 = G__43597;
continue;
}
} else {
}
}
break;
}

var seq__43464_43598 = cljs.core.seq(new_reactions);
var chunk__43465_43599 = null;
var count__43466_43600 = (0);
var i__43467_43601 = (0);
while(true){
if((i__43467_43601 < count__43466_43600)){
var ref_43602 = chunk__43465_43599.cljs$core$IIndexed$_nth$arity$2(null,i__43467_43601);
if(cljs.core.contains_QMARK_(old_reactions,ref_43602)){
} else {
cljs.core.add_watch(ref_43602,key,((function (seq__43464_43598,chunk__43465_43599,count__43466_43600,i__43467_43601,ref_43602,comp,old_reactions,vec__43451,dom,next_state,new_reactions,key,_STAR_reactions_STAR__orig_val__43448,_STAR_reactions_STAR__temp_val__43449){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render(comp);
});})(seq__43464_43598,chunk__43465_43599,count__43466_43600,i__43467_43601,ref_43602,comp,old_reactions,vec__43451,dom,next_state,new_reactions,key,_STAR_reactions_STAR__orig_val__43448,_STAR_reactions_STAR__temp_val__43449))
);
}


var G__43603 = seq__43464_43598;
var G__43604 = chunk__43465_43599;
var G__43605 = count__43466_43600;
var G__43606 = (i__43467_43601 + (1));
seq__43464_43598 = G__43603;
chunk__43465_43599 = G__43604;
count__43466_43600 = G__43605;
i__43467_43601 = G__43606;
continue;
} else {
var temp__5753__auto___43607 = cljs.core.seq(seq__43464_43598);
if(temp__5753__auto___43607){
var seq__43464_43608__$1 = temp__5753__auto___43607;
if(cljs.core.chunked_seq_QMARK_(seq__43464_43608__$1)){
var c__4638__auto___43609 = cljs.core.chunk_first(seq__43464_43608__$1);
var G__43610 = cljs.core.chunk_rest(seq__43464_43608__$1);
var G__43611 = c__4638__auto___43609;
var G__43612 = cljs.core.count(c__4638__auto___43609);
var G__43613 = (0);
seq__43464_43598 = G__43610;
chunk__43465_43599 = G__43611;
count__43466_43600 = G__43612;
i__43467_43601 = G__43613;
continue;
} else {
var ref_43614 = cljs.core.first(seq__43464_43608__$1);
if(cljs.core.contains_QMARK_(old_reactions,ref_43614)){
} else {
cljs.core.add_watch(ref_43614,key,((function (seq__43464_43598,chunk__43465_43599,count__43466_43600,i__43467_43601,ref_43614,seq__43464_43608__$1,temp__5753__auto___43607,comp,old_reactions,vec__43451,dom,next_state,new_reactions,key,_STAR_reactions_STAR__orig_val__43448,_STAR_reactions_STAR__temp_val__43449){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render(comp);
});})(seq__43464_43598,chunk__43465_43599,count__43466_43600,i__43467_43601,ref_43614,seq__43464_43608__$1,temp__5753__auto___43607,comp,old_reactions,vec__43451,dom,next_state,new_reactions,key,_STAR_reactions_STAR__orig_val__43448,_STAR_reactions_STAR__temp_val__43449))
);
}


var G__43615 = cljs.core.next(seq__43464_43608__$1);
var G__43616 = null;
var G__43617 = (0);
var G__43618 = (0);
seq__43464_43598 = G__43615;
chunk__43465_43599 = G__43616;
count__43466_43600 = G__43617;
i__43467_43601 = G__43618;
continue;
}
} else {
}
}
break;
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dom,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(next_state,new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325),new_reactions)], null);
}finally {(rum.core._STAR_reactions_STAR_ = _STAR_reactions_STAR__orig_val__43448);
}});
}),new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (state){
var key_43619 = new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142).cljs$core$IFn$_invoke$arity$1(state);
var seq__43473_43620 = cljs.core.seq(new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325).cljs$core$IFn$_invoke$arity$1(state));
var chunk__43474_43621 = null;
var count__43475_43622 = (0);
var i__43476_43623 = (0);
while(true){
if((i__43476_43623 < count__43475_43622)){
var ref_43624 = chunk__43474_43621.cljs$core$IIndexed$_nth$arity$2(null,i__43476_43623);
cljs.core.remove_watch(ref_43624,key_43619);


var G__43625 = seq__43473_43620;
var G__43626 = chunk__43474_43621;
var G__43627 = count__43475_43622;
var G__43628 = (i__43476_43623 + (1));
seq__43473_43620 = G__43625;
chunk__43474_43621 = G__43626;
count__43475_43622 = G__43627;
i__43476_43623 = G__43628;
continue;
} else {
var temp__5753__auto___43629 = cljs.core.seq(seq__43473_43620);
if(temp__5753__auto___43629){
var seq__43473_43630__$1 = temp__5753__auto___43629;
if(cljs.core.chunked_seq_QMARK_(seq__43473_43630__$1)){
var c__4638__auto___43631 = cljs.core.chunk_first(seq__43473_43630__$1);
var G__43632 = cljs.core.chunk_rest(seq__43473_43630__$1);
var G__43633 = c__4638__auto___43631;
var G__43634 = cljs.core.count(c__4638__auto___43631);
var G__43635 = (0);
seq__43473_43620 = G__43632;
chunk__43474_43621 = G__43633;
count__43475_43622 = G__43634;
i__43476_43623 = G__43635;
continue;
} else {
var ref_43636 = cljs.core.first(seq__43473_43630__$1);
cljs.core.remove_watch(ref_43636,key_43619);


var G__43637 = cljs.core.next(seq__43473_43630__$1);
var G__43638 = null;
var G__43639 = (0);
var G__43640 = (0);
seq__43473_43620 = G__43637;
chunk__43474_43621 = G__43638;
count__43475_43622 = G__43639;
i__43476_43623 = G__43640;
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
var len__4818__auto___43641 = arguments.length;
var i__4819__auto___43642 = (0);
while(true){
if((i__4819__auto___43642 < len__4818__auto___43641)){
args__4824__auto__.push((arguments[i__4819__auto___43642]));

var G__43643 = (i__4819__auto___43642 + (1));
i__4819__auto___43642 = G__43643;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic = (function (ref,path,p__43491){
var map__43492 = p__43491;
var map__43492__$1 = cljs.core.__destructure_map(map__43492);
var options = map__43492__$1;
if((ref instanceof rum.cursor.Cursor)){
return (new rum.cursor.Cursor(ref.ref,cljs.core.into.cljs$core$IFn$_invoke$arity$2(ref.path,path),new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(options)));
} else {
return (new rum.cursor.Cursor(ref,path,new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(options)));
}
}));

(rum.core.cursor_in.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(rum.core.cursor_in.cljs$lang$applyTo = (function (seq43488){
var G__43489 = cljs.core.first(seq43488);
var seq43488__$1 = cljs.core.next(seq43488);
var G__43490 = cljs.core.first(seq43488__$1);
var seq43488__$2 = cljs.core.next(seq43488__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43489,G__43490,seq43488__$2);
}));

/**
 * Same as [[cursor-in]] but accepts single key instead of path vector.
 */
rum.core.cursor = (function rum$core$cursor(var_args){
var args__4824__auto__ = [];
var len__4818__auto___43644 = arguments.length;
var i__4819__auto___43645 = (0);
while(true){
if((i__4819__auto___43645 < len__4818__auto___43644)){
args__4824__auto__.push((arguments[i__4819__auto___43645]));

var G__43646 = (i__4819__auto___43645 + (1));
i__4819__auto___43645 = G__43646;
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
(rum.core.cursor.cljs$lang$applyTo = (function (seq43493){
var G__43494 = cljs.core.first(seq43493);
var seq43493__$1 = cljs.core.next(seq43493);
var G__43495 = cljs.core.first(seq43493__$1);
var seq43493__$2 = cljs.core.next(seq43493__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43494,G__43495,seq43493__$2);
}));


//# sourceMappingURL=rum.core.js.map
