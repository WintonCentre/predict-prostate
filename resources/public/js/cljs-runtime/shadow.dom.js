goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_39613 = (function (this$){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4510__auto__.call(null,this$));
} else {
var m__4508__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4508__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_39613(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_39614 = (function (this$){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4510__auto__.call(null,this$));
} else {
var m__4508__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4508__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_39614(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__38460 = coll;
var G__38461 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__38460,G__38461) : shadow.dom.lazy_native_coll_seq.call(null,G__38460,G__38461));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4212__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__38515 = arguments.length;
switch (G__38515) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__38571 = arguments.length;
switch (G__38571) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__38588 = arguments.length;
switch (G__38588) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__38600 = arguments.length;
switch (G__38600) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__38612 = arguments.length;
switch (G__38612) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__38620 = arguments.length;
switch (G__38620) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4212__auto__ = (!((typeof document !== 'undefined')));
if(or__4212__auto__){
return or__4212__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e38631){if((e38631 instanceof Object)){
var e = e38631;
return console.log("didnt support attachEvent",el,e);
} else {
throw e38631;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4212__auto__ = (!((typeof document !== 'undefined')));
if(or__4212__auto__){
return or__4212__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__38640 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__38641 = null;
var count__38642 = (0);
var i__38643 = (0);
while(true){
if((i__38643 < count__38642)){
var el = chunk__38641.cljs$core$IIndexed$_nth$arity$2(null,i__38643);
var handler_39634__$1 = ((function (seq__38640,chunk__38641,count__38642,i__38643,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__38640,chunk__38641,count__38642,i__38643,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_39634__$1);


var G__39639 = seq__38640;
var G__39640 = chunk__38641;
var G__39641 = count__38642;
var G__39642 = (i__38643 + (1));
seq__38640 = G__39639;
chunk__38641 = G__39640;
count__38642 = G__39641;
i__38643 = G__39642;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__38640);
if(temp__5753__auto__){
var seq__38640__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38640__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__38640__$1);
var G__39643 = cljs.core.chunk_rest(seq__38640__$1);
var G__39644 = c__4638__auto__;
var G__39645 = cljs.core.count(c__4638__auto__);
var G__39646 = (0);
seq__38640 = G__39643;
chunk__38641 = G__39644;
count__38642 = G__39645;
i__38643 = G__39646;
continue;
} else {
var el = cljs.core.first(seq__38640__$1);
var handler_39651__$1 = ((function (seq__38640,chunk__38641,count__38642,i__38643,el,seq__38640__$1,temp__5753__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__38640,chunk__38641,count__38642,i__38643,el,seq__38640__$1,temp__5753__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_39651__$1);


var G__39652 = cljs.core.next(seq__38640__$1);
var G__39653 = null;
var G__39654 = (0);
var G__39655 = (0);
seq__38640 = G__39652;
chunk__38641 = G__39653;
count__38642 = G__39654;
i__38643 = G__39655;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__38670 = arguments.length;
switch (G__38670) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__38685 = cljs.core.seq(events);
var chunk__38686 = null;
var count__38687 = (0);
var i__38688 = (0);
while(true){
if((i__38688 < count__38687)){
var vec__38717 = chunk__38686.cljs$core$IIndexed$_nth$arity$2(null,i__38688);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38717,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38717,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__39664 = seq__38685;
var G__39665 = chunk__38686;
var G__39666 = count__38687;
var G__39667 = (i__38688 + (1));
seq__38685 = G__39664;
chunk__38686 = G__39665;
count__38687 = G__39666;
i__38688 = G__39667;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__38685);
if(temp__5753__auto__){
var seq__38685__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38685__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__38685__$1);
var G__39668 = cljs.core.chunk_rest(seq__38685__$1);
var G__39669 = c__4638__auto__;
var G__39670 = cljs.core.count(c__4638__auto__);
var G__39671 = (0);
seq__38685 = G__39668;
chunk__38686 = G__39669;
count__38687 = G__39670;
i__38688 = G__39671;
continue;
} else {
var vec__38723 = cljs.core.first(seq__38685__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38723,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38723,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__39675 = cljs.core.next(seq__38685__$1);
var G__39676 = null;
var G__39677 = (0);
var G__39678 = (0);
seq__38685 = G__39675;
chunk__38686 = G__39676;
count__38687 = G__39677;
i__38688 = G__39678;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__38730 = cljs.core.seq(styles);
var chunk__38731 = null;
var count__38732 = (0);
var i__38733 = (0);
while(true){
if((i__38733 < count__38732)){
var vec__38743 = chunk__38731.cljs$core$IIndexed$_nth$arity$2(null,i__38733);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38743,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38743,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__39679 = seq__38730;
var G__39680 = chunk__38731;
var G__39681 = count__38732;
var G__39682 = (i__38733 + (1));
seq__38730 = G__39679;
chunk__38731 = G__39680;
count__38732 = G__39681;
i__38733 = G__39682;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__38730);
if(temp__5753__auto__){
var seq__38730__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38730__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__38730__$1);
var G__39683 = cljs.core.chunk_rest(seq__38730__$1);
var G__39684 = c__4638__auto__;
var G__39685 = cljs.core.count(c__4638__auto__);
var G__39686 = (0);
seq__38730 = G__39683;
chunk__38731 = G__39684;
count__38732 = G__39685;
i__38733 = G__39686;
continue;
} else {
var vec__38757 = cljs.core.first(seq__38730__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38757,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38757,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__39687 = cljs.core.next(seq__38730__$1);
var G__39688 = null;
var G__39689 = (0);
var G__39690 = (0);
seq__38730 = G__39687;
chunk__38731 = G__39688;
count__38732 = G__39689;
i__38733 = G__39690;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__38760_39691 = key;
var G__38760_39692__$1 = (((G__38760_39691 instanceof cljs.core.Keyword))?G__38760_39691.fqn:null);
switch (G__38760_39692__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_39694 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4212__auto__ = goog.string.startsWith(ks_39694,"data-");
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return goog.string.startsWith(ks_39694,"aria-");
}
})())){
el.setAttribute(ks_39694,value);
} else {
(el[ks_39694] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__38792){
var map__38797 = p__38792;
var map__38797__$1 = cljs.core.__destructure_map(map__38797);
var props = map__38797__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38797__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__38802 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38802,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38802,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38802,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__38810 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__38810,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__38810;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__38814 = arguments.length;
switch (G__38814) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__38828){
var vec__38829 = p__38828;
var seq__38830 = cljs.core.seq(vec__38829);
var first__38831 = cljs.core.first(seq__38830);
var seq__38830__$1 = cljs.core.next(seq__38830);
var nn = first__38831;
var first__38831__$1 = cljs.core.first(seq__38830__$1);
var seq__38830__$2 = cljs.core.next(seq__38830__$1);
var np = first__38831__$1;
var nc = seq__38830__$2;
var node = vec__38829;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__38836 = nn;
var G__38837 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__38836,G__38837) : create_fn.call(null,G__38836,G__38837));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__38838 = nn;
var G__38839 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__38838,G__38839) : create_fn.call(null,G__38838,G__38839));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__38843 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38843,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38843,(1),null);
var seq__38848_39697 = cljs.core.seq(node_children);
var chunk__38849_39698 = null;
var count__38850_39699 = (0);
var i__38851_39700 = (0);
while(true){
if((i__38851_39700 < count__38850_39699)){
var child_struct_39703 = chunk__38849_39698.cljs$core$IIndexed$_nth$arity$2(null,i__38851_39700);
var children_39704 = shadow.dom.dom_node(child_struct_39703);
if(cljs.core.seq_QMARK_(children_39704)){
var seq__38887_39705 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_39704));
var chunk__38889_39706 = null;
var count__38890_39707 = (0);
var i__38891_39708 = (0);
while(true){
if((i__38891_39708 < count__38890_39707)){
var child_39709 = chunk__38889_39706.cljs$core$IIndexed$_nth$arity$2(null,i__38891_39708);
if(cljs.core.truth_(child_39709)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_39709);


var G__39710 = seq__38887_39705;
var G__39711 = chunk__38889_39706;
var G__39712 = count__38890_39707;
var G__39713 = (i__38891_39708 + (1));
seq__38887_39705 = G__39710;
chunk__38889_39706 = G__39711;
count__38890_39707 = G__39712;
i__38891_39708 = G__39713;
continue;
} else {
var G__39714 = seq__38887_39705;
var G__39715 = chunk__38889_39706;
var G__39716 = count__38890_39707;
var G__39717 = (i__38891_39708 + (1));
seq__38887_39705 = G__39714;
chunk__38889_39706 = G__39715;
count__38890_39707 = G__39716;
i__38891_39708 = G__39717;
continue;
}
} else {
var temp__5753__auto___39718 = cljs.core.seq(seq__38887_39705);
if(temp__5753__auto___39718){
var seq__38887_39719__$1 = temp__5753__auto___39718;
if(cljs.core.chunked_seq_QMARK_(seq__38887_39719__$1)){
var c__4638__auto___39721 = cljs.core.chunk_first(seq__38887_39719__$1);
var G__39722 = cljs.core.chunk_rest(seq__38887_39719__$1);
var G__39723 = c__4638__auto___39721;
var G__39724 = cljs.core.count(c__4638__auto___39721);
var G__39725 = (0);
seq__38887_39705 = G__39722;
chunk__38889_39706 = G__39723;
count__38890_39707 = G__39724;
i__38891_39708 = G__39725;
continue;
} else {
var child_39726 = cljs.core.first(seq__38887_39719__$1);
if(cljs.core.truth_(child_39726)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_39726);


var G__39727 = cljs.core.next(seq__38887_39719__$1);
var G__39728 = null;
var G__39729 = (0);
var G__39730 = (0);
seq__38887_39705 = G__39727;
chunk__38889_39706 = G__39728;
count__38890_39707 = G__39729;
i__38891_39708 = G__39730;
continue;
} else {
var G__39731 = cljs.core.next(seq__38887_39719__$1);
var G__39732 = null;
var G__39733 = (0);
var G__39734 = (0);
seq__38887_39705 = G__39731;
chunk__38889_39706 = G__39732;
count__38890_39707 = G__39733;
i__38891_39708 = G__39734;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_39704);
}


var G__39735 = seq__38848_39697;
var G__39736 = chunk__38849_39698;
var G__39737 = count__38850_39699;
var G__39738 = (i__38851_39700 + (1));
seq__38848_39697 = G__39735;
chunk__38849_39698 = G__39736;
count__38850_39699 = G__39737;
i__38851_39700 = G__39738;
continue;
} else {
var temp__5753__auto___39739 = cljs.core.seq(seq__38848_39697);
if(temp__5753__auto___39739){
var seq__38848_39740__$1 = temp__5753__auto___39739;
if(cljs.core.chunked_seq_QMARK_(seq__38848_39740__$1)){
var c__4638__auto___39741 = cljs.core.chunk_first(seq__38848_39740__$1);
var G__39742 = cljs.core.chunk_rest(seq__38848_39740__$1);
var G__39743 = c__4638__auto___39741;
var G__39744 = cljs.core.count(c__4638__auto___39741);
var G__39745 = (0);
seq__38848_39697 = G__39742;
chunk__38849_39698 = G__39743;
count__38850_39699 = G__39744;
i__38851_39700 = G__39745;
continue;
} else {
var child_struct_39746 = cljs.core.first(seq__38848_39740__$1);
var children_39747 = shadow.dom.dom_node(child_struct_39746);
if(cljs.core.seq_QMARK_(children_39747)){
var seq__38903_39748 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_39747));
var chunk__38905_39749 = null;
var count__38906_39750 = (0);
var i__38907_39751 = (0);
while(true){
if((i__38907_39751 < count__38906_39750)){
var child_39752 = chunk__38905_39749.cljs$core$IIndexed$_nth$arity$2(null,i__38907_39751);
if(cljs.core.truth_(child_39752)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_39752);


var G__39753 = seq__38903_39748;
var G__39754 = chunk__38905_39749;
var G__39755 = count__38906_39750;
var G__39756 = (i__38907_39751 + (1));
seq__38903_39748 = G__39753;
chunk__38905_39749 = G__39754;
count__38906_39750 = G__39755;
i__38907_39751 = G__39756;
continue;
} else {
var G__39757 = seq__38903_39748;
var G__39758 = chunk__38905_39749;
var G__39759 = count__38906_39750;
var G__39760 = (i__38907_39751 + (1));
seq__38903_39748 = G__39757;
chunk__38905_39749 = G__39758;
count__38906_39750 = G__39759;
i__38907_39751 = G__39760;
continue;
}
} else {
var temp__5753__auto___39761__$1 = cljs.core.seq(seq__38903_39748);
if(temp__5753__auto___39761__$1){
var seq__38903_39762__$1 = temp__5753__auto___39761__$1;
if(cljs.core.chunked_seq_QMARK_(seq__38903_39762__$1)){
var c__4638__auto___39763 = cljs.core.chunk_first(seq__38903_39762__$1);
var G__39764 = cljs.core.chunk_rest(seq__38903_39762__$1);
var G__39765 = c__4638__auto___39763;
var G__39766 = cljs.core.count(c__4638__auto___39763);
var G__39767 = (0);
seq__38903_39748 = G__39764;
chunk__38905_39749 = G__39765;
count__38906_39750 = G__39766;
i__38907_39751 = G__39767;
continue;
} else {
var child_39768 = cljs.core.first(seq__38903_39762__$1);
if(cljs.core.truth_(child_39768)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_39768);


var G__39769 = cljs.core.next(seq__38903_39762__$1);
var G__39770 = null;
var G__39771 = (0);
var G__39772 = (0);
seq__38903_39748 = G__39769;
chunk__38905_39749 = G__39770;
count__38906_39750 = G__39771;
i__38907_39751 = G__39772;
continue;
} else {
var G__39773 = cljs.core.next(seq__38903_39762__$1);
var G__39774 = null;
var G__39775 = (0);
var G__39776 = (0);
seq__38903_39748 = G__39773;
chunk__38905_39749 = G__39774;
count__38906_39750 = G__39775;
i__38907_39751 = G__39776;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_39747);
}


var G__39777 = cljs.core.next(seq__38848_39740__$1);
var G__39778 = null;
var G__39779 = (0);
var G__39780 = (0);
seq__38848_39697 = G__39777;
chunk__38849_39698 = G__39778;
count__38850_39699 = G__39779;
i__38851_39700 = G__39780;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__38926 = cljs.core.seq(node);
var chunk__38927 = null;
var count__38928 = (0);
var i__38929 = (0);
while(true){
if((i__38929 < count__38928)){
var n = chunk__38927.cljs$core$IIndexed$_nth$arity$2(null,i__38929);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__39781 = seq__38926;
var G__39782 = chunk__38927;
var G__39783 = count__38928;
var G__39784 = (i__38929 + (1));
seq__38926 = G__39781;
chunk__38927 = G__39782;
count__38928 = G__39783;
i__38929 = G__39784;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__38926);
if(temp__5753__auto__){
var seq__38926__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38926__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__38926__$1);
var G__39785 = cljs.core.chunk_rest(seq__38926__$1);
var G__39786 = c__4638__auto__;
var G__39787 = cljs.core.count(c__4638__auto__);
var G__39788 = (0);
seq__38926 = G__39785;
chunk__38927 = G__39786;
count__38928 = G__39787;
i__38929 = G__39788;
continue;
} else {
var n = cljs.core.first(seq__38926__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__39789 = cljs.core.next(seq__38926__$1);
var G__39790 = null;
var G__39791 = (0);
var G__39792 = (0);
seq__38926 = G__39789;
chunk__38927 = G__39790;
count__38928 = G__39791;
i__38929 = G__39792;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__38945 = arguments.length;
switch (G__38945) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__38959 = arguments.length;
switch (G__38959) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__38968 = arguments.length;
switch (G__38968) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4212__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4824__auto__ = [];
var len__4818__auto___39798 = arguments.length;
var i__4819__auto___39799 = (0);
while(true){
if((i__4819__auto___39799 < len__4818__auto___39798)){
args__4824__auto__.push((arguments[i__4819__auto___39799]));

var G__39800 = (i__4819__auto___39799 + (1));
i__4819__auto___39799 = G__39800;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__38981_39801 = cljs.core.seq(nodes);
var chunk__38982_39802 = null;
var count__38983_39803 = (0);
var i__38984_39804 = (0);
while(true){
if((i__38984_39804 < count__38983_39803)){
var node_39805 = chunk__38982_39802.cljs$core$IIndexed$_nth$arity$2(null,i__38984_39804);
fragment.appendChild(shadow.dom._to_dom(node_39805));


var G__39806 = seq__38981_39801;
var G__39807 = chunk__38982_39802;
var G__39808 = count__38983_39803;
var G__39809 = (i__38984_39804 + (1));
seq__38981_39801 = G__39806;
chunk__38982_39802 = G__39807;
count__38983_39803 = G__39808;
i__38984_39804 = G__39809;
continue;
} else {
var temp__5753__auto___39810 = cljs.core.seq(seq__38981_39801);
if(temp__5753__auto___39810){
var seq__38981_39811__$1 = temp__5753__auto___39810;
if(cljs.core.chunked_seq_QMARK_(seq__38981_39811__$1)){
var c__4638__auto___39812 = cljs.core.chunk_first(seq__38981_39811__$1);
var G__39813 = cljs.core.chunk_rest(seq__38981_39811__$1);
var G__39814 = c__4638__auto___39812;
var G__39815 = cljs.core.count(c__4638__auto___39812);
var G__39816 = (0);
seq__38981_39801 = G__39813;
chunk__38982_39802 = G__39814;
count__38983_39803 = G__39815;
i__38984_39804 = G__39816;
continue;
} else {
var node_39817 = cljs.core.first(seq__38981_39811__$1);
fragment.appendChild(shadow.dom._to_dom(node_39817));


var G__39819 = cljs.core.next(seq__38981_39811__$1);
var G__39820 = null;
var G__39821 = (0);
var G__39822 = (0);
seq__38981_39801 = G__39819;
chunk__38982_39802 = G__39820;
count__38983_39803 = G__39821;
i__38984_39804 = G__39822;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq38971){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq38971));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__39002_39823 = cljs.core.seq(scripts);
var chunk__39003_39824 = null;
var count__39004_39825 = (0);
var i__39005_39826 = (0);
while(true){
if((i__39005_39826 < count__39004_39825)){
var vec__39019_39827 = chunk__39003_39824.cljs$core$IIndexed$_nth$arity$2(null,i__39005_39826);
var script_tag_39828 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39019_39827,(0),null);
var script_body_39829 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39019_39827,(1),null);
eval(script_body_39829);


var G__39830 = seq__39002_39823;
var G__39831 = chunk__39003_39824;
var G__39832 = count__39004_39825;
var G__39833 = (i__39005_39826 + (1));
seq__39002_39823 = G__39830;
chunk__39003_39824 = G__39831;
count__39004_39825 = G__39832;
i__39005_39826 = G__39833;
continue;
} else {
var temp__5753__auto___39834 = cljs.core.seq(seq__39002_39823);
if(temp__5753__auto___39834){
var seq__39002_39835__$1 = temp__5753__auto___39834;
if(cljs.core.chunked_seq_QMARK_(seq__39002_39835__$1)){
var c__4638__auto___39836 = cljs.core.chunk_first(seq__39002_39835__$1);
var G__39837 = cljs.core.chunk_rest(seq__39002_39835__$1);
var G__39838 = c__4638__auto___39836;
var G__39839 = cljs.core.count(c__4638__auto___39836);
var G__39840 = (0);
seq__39002_39823 = G__39837;
chunk__39003_39824 = G__39838;
count__39004_39825 = G__39839;
i__39005_39826 = G__39840;
continue;
} else {
var vec__39023_39841 = cljs.core.first(seq__39002_39835__$1);
var script_tag_39842 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39023_39841,(0),null);
var script_body_39843 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39023_39841,(1),null);
eval(script_body_39843);


var G__39844 = cljs.core.next(seq__39002_39835__$1);
var G__39845 = null;
var G__39846 = (0);
var G__39847 = (0);
seq__39002_39823 = G__39844;
chunk__39003_39824 = G__39845;
count__39004_39825 = G__39846;
i__39005_39826 = G__39847;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__39029){
var vec__39030 = p__39029;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39030,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39030,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__39042 = arguments.length;
switch (G__39042) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__39057 = cljs.core.seq(style_keys);
var chunk__39058 = null;
var count__39059 = (0);
var i__39060 = (0);
while(true){
if((i__39060 < count__39059)){
var it = chunk__39058.cljs$core$IIndexed$_nth$arity$2(null,i__39060);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__39853 = seq__39057;
var G__39854 = chunk__39058;
var G__39855 = count__39059;
var G__39856 = (i__39060 + (1));
seq__39057 = G__39853;
chunk__39058 = G__39854;
count__39059 = G__39855;
i__39060 = G__39856;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__39057);
if(temp__5753__auto__){
var seq__39057__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39057__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__39057__$1);
var G__39858 = cljs.core.chunk_rest(seq__39057__$1);
var G__39859 = c__4638__auto__;
var G__39860 = cljs.core.count(c__4638__auto__);
var G__39861 = (0);
seq__39057 = G__39858;
chunk__39058 = G__39859;
count__39059 = G__39860;
i__39060 = G__39861;
continue;
} else {
var it = cljs.core.first(seq__39057__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__39863 = cljs.core.next(seq__39057__$1);
var G__39864 = null;
var G__39865 = (0);
var G__39866 = (0);
seq__39057 = G__39863;
chunk__39058 = G__39864;
count__39059 = G__39865;
i__39060 = G__39866;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4461__auto__,k__4462__auto__){
var self__ = this;
var this__4461__auto____$1 = this;
return this__4461__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4462__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4463__auto__,k39072,else__4464__auto__){
var self__ = this;
var this__4463__auto____$1 = this;
var G__39083 = k39072;
var G__39083__$1 = (((G__39083 instanceof cljs.core.Keyword))?G__39083.fqn:null);
switch (G__39083__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k39072,else__4464__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4481__auto__,f__4482__auto__,init__4483__auto__){
var self__ = this;
var this__4481__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4484__auto__,p__39087){
var vec__39088 = p__39087;
var k__4485__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39088,(0),null);
var v__4486__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39088,(1),null);
return (f__4482__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4482__auto__.cljs$core$IFn$_invoke$arity$3(ret__4484__auto__,k__4485__auto__,v__4486__auto__) : f__4482__auto__.call(null,ret__4484__auto__,k__4485__auto__,v__4486__auto__));
}),init__4483__auto__,this__4481__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4476__auto__,writer__4477__auto__,opts__4478__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
var pr_pair__4479__auto__ = (function (keyval__4480__auto__){
return cljs.core.pr_sequential_writer(writer__4477__auto__,cljs.core.pr_writer,""," ","",opts__4478__auto__,keyval__4480__auto__);
});
return cljs.core.pr_sequential_writer(writer__4477__auto__,pr_pair__4479__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4478__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__39071){
var self__ = this;
var G__39071__$1 = this;
return (new cljs.core.RecordIter((0),G__39071__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4459__auto__){
var self__ = this;
var this__4459__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4456__auto__){
var self__ = this;
var this__4456__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4465__auto__){
var self__ = this;
var this__4465__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4457__auto__){
var self__ = this;
var this__4457__auto____$1 = this;
var h__4319__auto__ = self__.__hash;
if((!((h__4319__auto__ == null)))){
return h__4319__auto__;
} else {
var h__4319__auto____$1 = (function (coll__4458__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4458__auto__));
})(this__4457__auto____$1);
(self__.__hash = h__4319__auto____$1);

return h__4319__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this39073,other39074){
var self__ = this;
var this39073__$1 = this;
return (((!((other39074 == null)))) && ((((this39073__$1.constructor === other39074.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this39073__$1.x,other39074.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this39073__$1.y,other39074.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this39073__$1.__extmap,other39074.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4471__auto__,k__4472__auto__){
var self__ = this;
var this__4471__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4472__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4471__auto____$1),self__.__meta),k__4472__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4472__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4468__auto__,k39072){
var self__ = this;
var this__4468__auto____$1 = this;
var G__39117 = k39072;
var G__39117__$1 = (((G__39117 instanceof cljs.core.Keyword))?G__39117.fqn:null);
switch (G__39117__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k39072);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4469__auto__,k__4470__auto__,G__39071){
var self__ = this;
var this__4469__auto____$1 = this;
var pred__39120 = cljs.core.keyword_identical_QMARK_;
var expr__39121 = k__4470__auto__;
if(cljs.core.truth_((pred__39120.cljs$core$IFn$_invoke$arity$2 ? pred__39120.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__39121) : pred__39120.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__39121)))){
return (new shadow.dom.Coordinate(G__39071,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__39120.cljs$core$IFn$_invoke$arity$2 ? pred__39120.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__39121) : pred__39120.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__39121)))){
return (new shadow.dom.Coordinate(self__.x,G__39071,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4470__auto__,G__39071),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4474__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4460__auto__,G__39071){
var self__ = this;
var this__4460__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__39071,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4466__auto__,entry__4467__auto__){
var self__ = this;
var this__4466__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4467__auto__)){
return this__4466__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4467__auto__,(0)),cljs.core._nth(entry__4467__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4466__auto____$1,entry__4467__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4505__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4505__auto__,writer__4506__auto__){
return cljs.core._write(writer__4506__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__39077){
var extmap__4501__auto__ = (function (){var G__39124 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__39077,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__39077)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__39124);
} else {
return G__39124;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__39077),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__39077),null,cljs.core.not_empty(extmap__4501__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4461__auto__,k__4462__auto__){
var self__ = this;
var this__4461__auto____$1 = this;
return this__4461__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4462__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4463__auto__,k39126,else__4464__auto__){
var self__ = this;
var this__4463__auto____$1 = this;
var G__39131 = k39126;
var G__39131__$1 = (((G__39131 instanceof cljs.core.Keyword))?G__39131.fqn:null);
switch (G__39131__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k39126,else__4464__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4481__auto__,f__4482__auto__,init__4483__auto__){
var self__ = this;
var this__4481__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4484__auto__,p__39135){
var vec__39136 = p__39135;
var k__4485__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39136,(0),null);
var v__4486__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39136,(1),null);
return (f__4482__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4482__auto__.cljs$core$IFn$_invoke$arity$3(ret__4484__auto__,k__4485__auto__,v__4486__auto__) : f__4482__auto__.call(null,ret__4484__auto__,k__4485__auto__,v__4486__auto__));
}),init__4483__auto__,this__4481__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4476__auto__,writer__4477__auto__,opts__4478__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
var pr_pair__4479__auto__ = (function (keyval__4480__auto__){
return cljs.core.pr_sequential_writer(writer__4477__auto__,cljs.core.pr_writer,""," ","",opts__4478__auto__,keyval__4480__auto__);
});
return cljs.core.pr_sequential_writer(writer__4477__auto__,pr_pair__4479__auto__,"#shadow.dom.Size{",", ","}",opts__4478__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__39125){
var self__ = this;
var G__39125__$1 = this;
return (new cljs.core.RecordIter((0),G__39125__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4459__auto__){
var self__ = this;
var this__4459__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4456__auto__){
var self__ = this;
var this__4456__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4465__auto__){
var self__ = this;
var this__4465__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4457__auto__){
var self__ = this;
var this__4457__auto____$1 = this;
var h__4319__auto__ = self__.__hash;
if((!((h__4319__auto__ == null)))){
return h__4319__auto__;
} else {
var h__4319__auto____$1 = (function (coll__4458__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4458__auto__));
})(this__4457__auto____$1);
(self__.__hash = h__4319__auto____$1);

return h__4319__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this39127,other39128){
var self__ = this;
var this39127__$1 = this;
return (((!((other39128 == null)))) && ((((this39127__$1.constructor === other39128.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this39127__$1.w,other39128.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this39127__$1.h,other39128.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this39127__$1.__extmap,other39128.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4471__auto__,k__4472__auto__){
var self__ = this;
var this__4471__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4472__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4471__auto____$1),self__.__meta),k__4472__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4472__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4468__auto__,k39126){
var self__ = this;
var this__4468__auto____$1 = this;
var G__39162 = k39126;
var G__39162__$1 = (((G__39162 instanceof cljs.core.Keyword))?G__39162.fqn:null);
switch (G__39162__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k39126);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4469__auto__,k__4470__auto__,G__39125){
var self__ = this;
var this__4469__auto____$1 = this;
var pred__39165 = cljs.core.keyword_identical_QMARK_;
var expr__39166 = k__4470__auto__;
if(cljs.core.truth_((pred__39165.cljs$core$IFn$_invoke$arity$2 ? pred__39165.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__39166) : pred__39165.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__39166)))){
return (new shadow.dom.Size(G__39125,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__39165.cljs$core$IFn$_invoke$arity$2 ? pred__39165.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__39166) : pred__39165.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__39166)))){
return (new shadow.dom.Size(self__.w,G__39125,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4470__auto__,G__39125),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4474__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4460__auto__,G__39125){
var self__ = this;
var this__4460__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__39125,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4466__auto__,entry__4467__auto__){
var self__ = this;
var this__4466__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4467__auto__)){
return this__4466__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4467__auto__,(0)),cljs.core._nth(entry__4467__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4466__auto____$1,entry__4467__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4505__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4505__auto__,writer__4506__auto__){
return cljs.core._write(writer__4506__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__39129){
var extmap__4501__auto__ = (function (){var G__39179 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__39129,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__39129)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__39179);
} else {
return G__39179;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__39129),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__39129),null,cljs.core.not_empty(extmap__4501__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4692__auto__ = opts;
var l__4693__auto__ = a__4692__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4693__auto__)){
var G__39920 = (i + (1));
var G__39921 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__39920;
ret = G__39921;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__39249){
var vec__39255 = p__39249;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39255,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39255,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__39285 = arguments.length;
switch (G__39285) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5751__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5751__auto__)){
var child = temp__5751__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__39926 = ps;
var G__39927 = (i + (1));
el__$1 = G__39926;
i = G__39927;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__39410 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39410,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39410,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39410,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__39413_39930 = cljs.core.seq(props);
var chunk__39414_39931 = null;
var count__39415_39932 = (0);
var i__39416_39933 = (0);
while(true){
if((i__39416_39933 < count__39415_39932)){
var vec__39423_39934 = chunk__39414_39931.cljs$core$IIndexed$_nth$arity$2(null,i__39416_39933);
var k_39935 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39423_39934,(0),null);
var v_39936 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39423_39934,(1),null);
el.setAttributeNS((function (){var temp__5753__auto__ = cljs.core.namespace(k_39935);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_39935),v_39936);


var G__39937 = seq__39413_39930;
var G__39938 = chunk__39414_39931;
var G__39939 = count__39415_39932;
var G__39940 = (i__39416_39933 + (1));
seq__39413_39930 = G__39937;
chunk__39414_39931 = G__39938;
count__39415_39932 = G__39939;
i__39416_39933 = G__39940;
continue;
} else {
var temp__5753__auto___39941 = cljs.core.seq(seq__39413_39930);
if(temp__5753__auto___39941){
var seq__39413_39942__$1 = temp__5753__auto___39941;
if(cljs.core.chunked_seq_QMARK_(seq__39413_39942__$1)){
var c__4638__auto___39943 = cljs.core.chunk_first(seq__39413_39942__$1);
var G__39944 = cljs.core.chunk_rest(seq__39413_39942__$1);
var G__39945 = c__4638__auto___39943;
var G__39946 = cljs.core.count(c__4638__auto___39943);
var G__39947 = (0);
seq__39413_39930 = G__39944;
chunk__39414_39931 = G__39945;
count__39415_39932 = G__39946;
i__39416_39933 = G__39947;
continue;
} else {
var vec__39426_39948 = cljs.core.first(seq__39413_39942__$1);
var k_39949 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39426_39948,(0),null);
var v_39950 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39426_39948,(1),null);
el.setAttributeNS((function (){var temp__5753__auto____$1 = cljs.core.namespace(k_39949);
if(cljs.core.truth_(temp__5753__auto____$1)){
var ns = temp__5753__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_39949),v_39950);


var G__39952 = cljs.core.next(seq__39413_39942__$1);
var G__39953 = null;
var G__39954 = (0);
var G__39955 = (0);
seq__39413_39930 = G__39952;
chunk__39414_39931 = G__39953;
count__39415_39932 = G__39954;
i__39416_39933 = G__39955;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__39430 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39430,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39430,(1),null);
var seq__39433_39957 = cljs.core.seq(node_children);
var chunk__39435_39958 = null;
var count__39436_39959 = (0);
var i__39437_39960 = (0);
while(true){
if((i__39437_39960 < count__39436_39959)){
var child_struct_39961 = chunk__39435_39958.cljs$core$IIndexed$_nth$arity$2(null,i__39437_39960);
if((!((child_struct_39961 == null)))){
if(typeof child_struct_39961 === 'string'){
var text_39962 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_39962),child_struct_39961].join(''));
} else {
var children_39963 = shadow.dom.svg_node(child_struct_39961);
if(cljs.core.seq_QMARK_(children_39963)){
var seq__39457_39964 = cljs.core.seq(children_39963);
var chunk__39459_39965 = null;
var count__39460_39966 = (0);
var i__39461_39967 = (0);
while(true){
if((i__39461_39967 < count__39460_39966)){
var child_39968 = chunk__39459_39965.cljs$core$IIndexed$_nth$arity$2(null,i__39461_39967);
if(cljs.core.truth_(child_39968)){
node.appendChild(child_39968);


var G__39969 = seq__39457_39964;
var G__39970 = chunk__39459_39965;
var G__39971 = count__39460_39966;
var G__39972 = (i__39461_39967 + (1));
seq__39457_39964 = G__39969;
chunk__39459_39965 = G__39970;
count__39460_39966 = G__39971;
i__39461_39967 = G__39972;
continue;
} else {
var G__39973 = seq__39457_39964;
var G__39974 = chunk__39459_39965;
var G__39975 = count__39460_39966;
var G__39976 = (i__39461_39967 + (1));
seq__39457_39964 = G__39973;
chunk__39459_39965 = G__39974;
count__39460_39966 = G__39975;
i__39461_39967 = G__39976;
continue;
}
} else {
var temp__5753__auto___39979 = cljs.core.seq(seq__39457_39964);
if(temp__5753__auto___39979){
var seq__39457_39980__$1 = temp__5753__auto___39979;
if(cljs.core.chunked_seq_QMARK_(seq__39457_39980__$1)){
var c__4638__auto___39981 = cljs.core.chunk_first(seq__39457_39980__$1);
var G__39982 = cljs.core.chunk_rest(seq__39457_39980__$1);
var G__39983 = c__4638__auto___39981;
var G__39984 = cljs.core.count(c__4638__auto___39981);
var G__39985 = (0);
seq__39457_39964 = G__39982;
chunk__39459_39965 = G__39983;
count__39460_39966 = G__39984;
i__39461_39967 = G__39985;
continue;
} else {
var child_39986 = cljs.core.first(seq__39457_39980__$1);
if(cljs.core.truth_(child_39986)){
node.appendChild(child_39986);


var G__39987 = cljs.core.next(seq__39457_39980__$1);
var G__39988 = null;
var G__39989 = (0);
var G__39990 = (0);
seq__39457_39964 = G__39987;
chunk__39459_39965 = G__39988;
count__39460_39966 = G__39989;
i__39461_39967 = G__39990;
continue;
} else {
var G__39992 = cljs.core.next(seq__39457_39980__$1);
var G__39993 = null;
var G__39994 = (0);
var G__39995 = (0);
seq__39457_39964 = G__39992;
chunk__39459_39965 = G__39993;
count__39460_39966 = G__39994;
i__39461_39967 = G__39995;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_39963);
}
}


var G__39997 = seq__39433_39957;
var G__39998 = chunk__39435_39958;
var G__39999 = count__39436_39959;
var G__40000 = (i__39437_39960 + (1));
seq__39433_39957 = G__39997;
chunk__39435_39958 = G__39998;
count__39436_39959 = G__39999;
i__39437_39960 = G__40000;
continue;
} else {
var G__40001 = seq__39433_39957;
var G__40002 = chunk__39435_39958;
var G__40003 = count__39436_39959;
var G__40004 = (i__39437_39960 + (1));
seq__39433_39957 = G__40001;
chunk__39435_39958 = G__40002;
count__39436_39959 = G__40003;
i__39437_39960 = G__40004;
continue;
}
} else {
var temp__5753__auto___40007 = cljs.core.seq(seq__39433_39957);
if(temp__5753__auto___40007){
var seq__39433_40008__$1 = temp__5753__auto___40007;
if(cljs.core.chunked_seq_QMARK_(seq__39433_40008__$1)){
var c__4638__auto___40009 = cljs.core.chunk_first(seq__39433_40008__$1);
var G__40010 = cljs.core.chunk_rest(seq__39433_40008__$1);
var G__40011 = c__4638__auto___40009;
var G__40012 = cljs.core.count(c__4638__auto___40009);
var G__40013 = (0);
seq__39433_39957 = G__40010;
chunk__39435_39958 = G__40011;
count__39436_39959 = G__40012;
i__39437_39960 = G__40013;
continue;
} else {
var child_struct_40014 = cljs.core.first(seq__39433_40008__$1);
if((!((child_struct_40014 == null)))){
if(typeof child_struct_40014 === 'string'){
var text_40015 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_40015),child_struct_40014].join(''));
} else {
var children_40016 = shadow.dom.svg_node(child_struct_40014);
if(cljs.core.seq_QMARK_(children_40016)){
var seq__39466_40017 = cljs.core.seq(children_40016);
var chunk__39468_40018 = null;
var count__39469_40019 = (0);
var i__39470_40020 = (0);
while(true){
if((i__39470_40020 < count__39469_40019)){
var child_40021 = chunk__39468_40018.cljs$core$IIndexed$_nth$arity$2(null,i__39470_40020);
if(cljs.core.truth_(child_40021)){
node.appendChild(child_40021);


var G__40022 = seq__39466_40017;
var G__40023 = chunk__39468_40018;
var G__40024 = count__39469_40019;
var G__40025 = (i__39470_40020 + (1));
seq__39466_40017 = G__40022;
chunk__39468_40018 = G__40023;
count__39469_40019 = G__40024;
i__39470_40020 = G__40025;
continue;
} else {
var G__40026 = seq__39466_40017;
var G__40027 = chunk__39468_40018;
var G__40028 = count__39469_40019;
var G__40029 = (i__39470_40020 + (1));
seq__39466_40017 = G__40026;
chunk__39468_40018 = G__40027;
count__39469_40019 = G__40028;
i__39470_40020 = G__40029;
continue;
}
} else {
var temp__5753__auto___40030__$1 = cljs.core.seq(seq__39466_40017);
if(temp__5753__auto___40030__$1){
var seq__39466_40031__$1 = temp__5753__auto___40030__$1;
if(cljs.core.chunked_seq_QMARK_(seq__39466_40031__$1)){
var c__4638__auto___40032 = cljs.core.chunk_first(seq__39466_40031__$1);
var G__40033 = cljs.core.chunk_rest(seq__39466_40031__$1);
var G__40034 = c__4638__auto___40032;
var G__40035 = cljs.core.count(c__4638__auto___40032);
var G__40036 = (0);
seq__39466_40017 = G__40033;
chunk__39468_40018 = G__40034;
count__39469_40019 = G__40035;
i__39470_40020 = G__40036;
continue;
} else {
var child_40037 = cljs.core.first(seq__39466_40031__$1);
if(cljs.core.truth_(child_40037)){
node.appendChild(child_40037);


var G__40038 = cljs.core.next(seq__39466_40031__$1);
var G__40039 = null;
var G__40040 = (0);
var G__40041 = (0);
seq__39466_40017 = G__40038;
chunk__39468_40018 = G__40039;
count__39469_40019 = G__40040;
i__39470_40020 = G__40041;
continue;
} else {
var G__40042 = cljs.core.next(seq__39466_40031__$1);
var G__40043 = null;
var G__40044 = (0);
var G__40045 = (0);
seq__39466_40017 = G__40042;
chunk__39468_40018 = G__40043;
count__39469_40019 = G__40044;
i__39470_40020 = G__40045;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_40016);
}
}


var G__40046 = cljs.core.next(seq__39433_40008__$1);
var G__40047 = null;
var G__40048 = (0);
var G__40049 = (0);
seq__39433_39957 = G__40046;
chunk__39435_39958 = G__40047;
count__39436_39959 = G__40048;
i__39437_39960 = G__40049;
continue;
} else {
var G__40050 = cljs.core.next(seq__39433_40008__$1);
var G__40051 = null;
var G__40052 = (0);
var G__40053 = (0);
seq__39433_39957 = G__40050;
chunk__39435_39958 = G__40051;
count__39436_39959 = G__40052;
i__39437_39960 = G__40053;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4824__auto__ = [];
var len__4818__auto___40061 = arguments.length;
var i__4819__auto___40062 = (0);
while(true){
if((i__4819__auto___40062 < len__4818__auto___40061)){
args__4824__auto__.push((arguments[i__4819__auto___40062]));

var G__40063 = (i__4819__auto___40062 + (1));
i__4819__auto___40062 = G__40063;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq39481){
var G__39482 = cljs.core.first(seq39481);
var seq39481__$1 = cljs.core.next(seq39481);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39482,seq39481__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__39522 = arguments.length;
switch (G__39522) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4210__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4210__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4210__auto__;
}
})())){
var c__36087__auto___40070 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36088__auto__ = (function (){var switch__35885__auto__ = (function (state_39532){
var state_val_39533 = (state_39532[(1)]);
if((state_val_39533 === (1))){
var state_39532__$1 = state_39532;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39532__$1,(2),once_or_cleanup);
} else {
if((state_val_39533 === (2))){
var inst_39528 = (state_39532[(2)]);
var inst_39529 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_39532__$1 = (function (){var statearr_39562 = state_39532;
(statearr_39562[(7)] = inst_39528);

return statearr_39562;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_39532__$1,inst_39529);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__35886__auto__ = null;
var shadow$dom$state_machine__35886__auto____0 = (function (){
var statearr_39567 = [null,null,null,null,null,null,null,null];
(statearr_39567[(0)] = shadow$dom$state_machine__35886__auto__);

(statearr_39567[(1)] = (1));

return statearr_39567;
});
var shadow$dom$state_machine__35886__auto____1 = (function (state_39532){
while(true){
var ret_value__35887__auto__ = (function (){try{while(true){
var result__35888__auto__ = switch__35885__auto__(state_39532);
if(cljs.core.keyword_identical_QMARK_(result__35888__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35888__auto__;
}
break;
}
}catch (e39575){var ex__35889__auto__ = e39575;
var statearr_39582_40071 = state_39532;
(statearr_39582_40071[(2)] = ex__35889__auto__);


if(cljs.core.seq((state_39532[(4)]))){
var statearr_39583_40072 = state_39532;
(statearr_39583_40072[(1)] = cljs.core.first((state_39532[(4)])));

} else {
throw ex__35889__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40076 = state_39532;
state_39532 = G__40076;
continue;
} else {
return ret_value__35887__auto__;
}
break;
}
});
shadow$dom$state_machine__35886__auto__ = function(state_39532){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__35886__auto____0.call(this);
case 1:
return shadow$dom$state_machine__35886__auto____1.call(this,state_39532);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__35886__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__35886__auto____0;
shadow$dom$state_machine__35886__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__35886__auto____1;
return shadow$dom$state_machine__35886__auto__;
})()
})();
var state__36089__auto__ = (function (){var statearr_39588 = f__36088__auto__();
(statearr_39588[(6)] = c__36087__auto___40070);

return statearr_39588;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36089__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
