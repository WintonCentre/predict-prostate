goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_39328 = (function (this$){
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
return shadow$dom$IElement$_to_dom$dyn_39328(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_39329 = (function (this$){
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
return shadow$dom$SVGElement$_to_svg$dyn_39329(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__38128 = coll;
var G__38129 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__38128,G__38129) : shadow.dom.lazy_native_coll_seq.call(null,G__38128,G__38129));
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
var G__38193 = arguments.length;
switch (G__38193) {
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
var G__38207 = arguments.length;
switch (G__38207) {
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
var G__38219 = arguments.length;
switch (G__38219) {
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
var G__38230 = arguments.length;
switch (G__38230) {
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
var G__38267 = arguments.length;
switch (G__38267) {
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
var G__38286 = arguments.length;
switch (G__38286) {
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
}catch (e38306){if((e38306 instanceof Object)){
var e = e38306;
return console.log("didnt support attachEvent",el,e);
} else {
throw e38306;

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
var seq__38323 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__38324 = null;
var count__38325 = (0);
var i__38326 = (0);
while(true){
if((i__38326 < count__38325)){
var el = chunk__38324.cljs$core$IIndexed$_nth$arity$2(null,i__38326);
var handler_39336__$1 = ((function (seq__38323,chunk__38324,count__38325,i__38326,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__38323,chunk__38324,count__38325,i__38326,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_39336__$1);


var G__39337 = seq__38323;
var G__39338 = chunk__38324;
var G__39339 = count__38325;
var G__39340 = (i__38326 + (1));
seq__38323 = G__39337;
chunk__38324 = G__39338;
count__38325 = G__39339;
i__38326 = G__39340;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__38323);
if(temp__5753__auto__){
var seq__38323__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38323__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__38323__$1);
var G__39341 = cljs.core.chunk_rest(seq__38323__$1);
var G__39342 = c__4638__auto__;
var G__39343 = cljs.core.count(c__4638__auto__);
var G__39344 = (0);
seq__38323 = G__39341;
chunk__38324 = G__39342;
count__38325 = G__39343;
i__38326 = G__39344;
continue;
} else {
var el = cljs.core.first(seq__38323__$1);
var handler_39345__$1 = ((function (seq__38323,chunk__38324,count__38325,i__38326,el,seq__38323__$1,temp__5753__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__38323,chunk__38324,count__38325,i__38326,el,seq__38323__$1,temp__5753__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_39345__$1);


var G__39346 = cljs.core.next(seq__38323__$1);
var G__39347 = null;
var G__39348 = (0);
var G__39349 = (0);
seq__38323 = G__39346;
chunk__38324 = G__39347;
count__38325 = G__39348;
i__38326 = G__39349;
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
var G__38378 = arguments.length;
switch (G__38378) {
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
var seq__38383 = cljs.core.seq(events);
var chunk__38384 = null;
var count__38385 = (0);
var i__38386 = (0);
while(true){
if((i__38386 < count__38385)){
var vec__38408 = chunk__38384.cljs$core$IIndexed$_nth$arity$2(null,i__38386);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38408,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38408,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__39352 = seq__38383;
var G__39353 = chunk__38384;
var G__39354 = count__38385;
var G__39355 = (i__38386 + (1));
seq__38383 = G__39352;
chunk__38384 = G__39353;
count__38385 = G__39354;
i__38386 = G__39355;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__38383);
if(temp__5753__auto__){
var seq__38383__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38383__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__38383__$1);
var G__39356 = cljs.core.chunk_rest(seq__38383__$1);
var G__39357 = c__4638__auto__;
var G__39358 = cljs.core.count(c__4638__auto__);
var G__39359 = (0);
seq__38383 = G__39356;
chunk__38384 = G__39357;
count__38385 = G__39358;
i__38386 = G__39359;
continue;
} else {
var vec__38413 = cljs.core.first(seq__38383__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38413,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38413,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__39360 = cljs.core.next(seq__38383__$1);
var G__39361 = null;
var G__39362 = (0);
var G__39363 = (0);
seq__38383 = G__39360;
chunk__38384 = G__39361;
count__38385 = G__39362;
i__38386 = G__39363;
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
var seq__38419 = cljs.core.seq(styles);
var chunk__38420 = null;
var count__38421 = (0);
var i__38422 = (0);
while(true){
if((i__38422 < count__38421)){
var vec__38434 = chunk__38420.cljs$core$IIndexed$_nth$arity$2(null,i__38422);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38434,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38434,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__39364 = seq__38419;
var G__39365 = chunk__38420;
var G__39366 = count__38421;
var G__39367 = (i__38422 + (1));
seq__38419 = G__39364;
chunk__38420 = G__39365;
count__38421 = G__39366;
i__38422 = G__39367;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__38419);
if(temp__5753__auto__){
var seq__38419__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38419__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__38419__$1);
var G__39368 = cljs.core.chunk_rest(seq__38419__$1);
var G__39369 = c__4638__auto__;
var G__39370 = cljs.core.count(c__4638__auto__);
var G__39371 = (0);
seq__38419 = G__39368;
chunk__38420 = G__39369;
count__38421 = G__39370;
i__38422 = G__39371;
continue;
} else {
var vec__38439 = cljs.core.first(seq__38419__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38439,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38439,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__39372 = cljs.core.next(seq__38419__$1);
var G__39373 = null;
var G__39374 = (0);
var G__39375 = (0);
seq__38419 = G__39372;
chunk__38420 = G__39373;
count__38421 = G__39374;
i__38422 = G__39375;
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
var G__38451_39376 = key;
var G__38451_39377__$1 = (((G__38451_39376 instanceof cljs.core.Keyword))?G__38451_39376.fqn:null);
switch (G__38451_39377__$1) {
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
var ks_39380 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4212__auto__ = goog.string.startsWith(ks_39380,"data-");
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return goog.string.startsWith(ks_39380,"aria-");
}
})())){
el.setAttribute(ks_39380,value);
} else {
(el[ks_39380] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__38470){
var map__38471 = p__38470;
var map__38471__$1 = cljs.core.__destructure_map(map__38471);
var props = map__38471__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38471__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__38473 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38473,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38473,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38473,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__38476 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__38476,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__38476;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__38489 = arguments.length;
switch (G__38489) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__38500){
var vec__38502 = p__38500;
var seq__38503 = cljs.core.seq(vec__38502);
var first__38504 = cljs.core.first(seq__38503);
var seq__38503__$1 = cljs.core.next(seq__38503);
var nn = first__38504;
var first__38504__$1 = cljs.core.first(seq__38503__$1);
var seq__38503__$2 = cljs.core.next(seq__38503__$1);
var np = first__38504__$1;
var nc = seq__38503__$2;
var node = vec__38502;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__38506 = nn;
var G__38507 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__38506,G__38507) : create_fn.call(null,G__38506,G__38507));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__38510 = nn;
var G__38511 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__38510,G__38511) : create_fn.call(null,G__38510,G__38511));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__38513 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38513,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38513,(1),null);
var seq__38519_39393 = cljs.core.seq(node_children);
var chunk__38521_39394 = null;
var count__38522_39395 = (0);
var i__38523_39396 = (0);
while(true){
if((i__38523_39396 < count__38522_39395)){
var child_struct_39397 = chunk__38521_39394.cljs$core$IIndexed$_nth$arity$2(null,i__38523_39396);
var children_39398 = shadow.dom.dom_node(child_struct_39397);
if(cljs.core.seq_QMARK_(children_39398)){
var seq__38564_39402 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_39398));
var chunk__38566_39403 = null;
var count__38567_39405 = (0);
var i__38568_39406 = (0);
while(true){
if((i__38568_39406 < count__38567_39405)){
var child_39407 = chunk__38566_39403.cljs$core$IIndexed$_nth$arity$2(null,i__38568_39406);
if(cljs.core.truth_(child_39407)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_39407);


var G__39409 = seq__38564_39402;
var G__39410 = chunk__38566_39403;
var G__39411 = count__38567_39405;
var G__39412 = (i__38568_39406 + (1));
seq__38564_39402 = G__39409;
chunk__38566_39403 = G__39410;
count__38567_39405 = G__39411;
i__38568_39406 = G__39412;
continue;
} else {
var G__39413 = seq__38564_39402;
var G__39414 = chunk__38566_39403;
var G__39415 = count__38567_39405;
var G__39416 = (i__38568_39406 + (1));
seq__38564_39402 = G__39413;
chunk__38566_39403 = G__39414;
count__38567_39405 = G__39415;
i__38568_39406 = G__39416;
continue;
}
} else {
var temp__5753__auto___39417 = cljs.core.seq(seq__38564_39402);
if(temp__5753__auto___39417){
var seq__38564_39418__$1 = temp__5753__auto___39417;
if(cljs.core.chunked_seq_QMARK_(seq__38564_39418__$1)){
var c__4638__auto___39419 = cljs.core.chunk_first(seq__38564_39418__$1);
var G__39420 = cljs.core.chunk_rest(seq__38564_39418__$1);
var G__39421 = c__4638__auto___39419;
var G__39422 = cljs.core.count(c__4638__auto___39419);
var G__39423 = (0);
seq__38564_39402 = G__39420;
chunk__38566_39403 = G__39421;
count__38567_39405 = G__39422;
i__38568_39406 = G__39423;
continue;
} else {
var child_39426 = cljs.core.first(seq__38564_39418__$1);
if(cljs.core.truth_(child_39426)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_39426);


var G__39427 = cljs.core.next(seq__38564_39418__$1);
var G__39428 = null;
var G__39429 = (0);
var G__39430 = (0);
seq__38564_39402 = G__39427;
chunk__38566_39403 = G__39428;
count__38567_39405 = G__39429;
i__38568_39406 = G__39430;
continue;
} else {
var G__39432 = cljs.core.next(seq__38564_39418__$1);
var G__39433 = null;
var G__39434 = (0);
var G__39435 = (0);
seq__38564_39402 = G__39432;
chunk__38566_39403 = G__39433;
count__38567_39405 = G__39434;
i__38568_39406 = G__39435;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_39398);
}


var G__39436 = seq__38519_39393;
var G__39437 = chunk__38521_39394;
var G__39438 = count__38522_39395;
var G__39439 = (i__38523_39396 + (1));
seq__38519_39393 = G__39436;
chunk__38521_39394 = G__39437;
count__38522_39395 = G__39438;
i__38523_39396 = G__39439;
continue;
} else {
var temp__5753__auto___39440 = cljs.core.seq(seq__38519_39393);
if(temp__5753__auto___39440){
var seq__38519_39441__$1 = temp__5753__auto___39440;
if(cljs.core.chunked_seq_QMARK_(seq__38519_39441__$1)){
var c__4638__auto___39442 = cljs.core.chunk_first(seq__38519_39441__$1);
var G__39444 = cljs.core.chunk_rest(seq__38519_39441__$1);
var G__39445 = c__4638__auto___39442;
var G__39446 = cljs.core.count(c__4638__auto___39442);
var G__39447 = (0);
seq__38519_39393 = G__39444;
chunk__38521_39394 = G__39445;
count__38522_39395 = G__39446;
i__38523_39396 = G__39447;
continue;
} else {
var child_struct_39448 = cljs.core.first(seq__38519_39441__$1);
var children_39450 = shadow.dom.dom_node(child_struct_39448);
if(cljs.core.seq_QMARK_(children_39450)){
var seq__38577_39451 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_39450));
var chunk__38579_39452 = null;
var count__38580_39453 = (0);
var i__38581_39454 = (0);
while(true){
if((i__38581_39454 < count__38580_39453)){
var child_39455 = chunk__38579_39452.cljs$core$IIndexed$_nth$arity$2(null,i__38581_39454);
if(cljs.core.truth_(child_39455)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_39455);


var G__39459 = seq__38577_39451;
var G__39460 = chunk__38579_39452;
var G__39461 = count__38580_39453;
var G__39462 = (i__38581_39454 + (1));
seq__38577_39451 = G__39459;
chunk__38579_39452 = G__39460;
count__38580_39453 = G__39461;
i__38581_39454 = G__39462;
continue;
} else {
var G__39463 = seq__38577_39451;
var G__39464 = chunk__38579_39452;
var G__39465 = count__38580_39453;
var G__39466 = (i__38581_39454 + (1));
seq__38577_39451 = G__39463;
chunk__38579_39452 = G__39464;
count__38580_39453 = G__39465;
i__38581_39454 = G__39466;
continue;
}
} else {
var temp__5753__auto___39467__$1 = cljs.core.seq(seq__38577_39451);
if(temp__5753__auto___39467__$1){
var seq__38577_39468__$1 = temp__5753__auto___39467__$1;
if(cljs.core.chunked_seq_QMARK_(seq__38577_39468__$1)){
var c__4638__auto___39470 = cljs.core.chunk_first(seq__38577_39468__$1);
var G__39471 = cljs.core.chunk_rest(seq__38577_39468__$1);
var G__39472 = c__4638__auto___39470;
var G__39473 = cljs.core.count(c__4638__auto___39470);
var G__39474 = (0);
seq__38577_39451 = G__39471;
chunk__38579_39452 = G__39472;
count__38580_39453 = G__39473;
i__38581_39454 = G__39474;
continue;
} else {
var child_39476 = cljs.core.first(seq__38577_39468__$1);
if(cljs.core.truth_(child_39476)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_39476);


var G__39477 = cljs.core.next(seq__38577_39468__$1);
var G__39478 = null;
var G__39479 = (0);
var G__39480 = (0);
seq__38577_39451 = G__39477;
chunk__38579_39452 = G__39478;
count__38580_39453 = G__39479;
i__38581_39454 = G__39480;
continue;
} else {
var G__39481 = cljs.core.next(seq__38577_39468__$1);
var G__39482 = null;
var G__39483 = (0);
var G__39484 = (0);
seq__38577_39451 = G__39481;
chunk__38579_39452 = G__39482;
count__38580_39453 = G__39483;
i__38581_39454 = G__39484;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_39450);
}


var G__39485 = cljs.core.next(seq__38519_39441__$1);
var G__39486 = null;
var G__39487 = (0);
var G__39488 = (0);
seq__38519_39393 = G__39485;
chunk__38521_39394 = G__39486;
count__38522_39395 = G__39487;
i__38523_39396 = G__39488;
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
var seq__38599 = cljs.core.seq(node);
var chunk__38600 = null;
var count__38601 = (0);
var i__38602 = (0);
while(true){
if((i__38602 < count__38601)){
var n = chunk__38600.cljs$core$IIndexed$_nth$arity$2(null,i__38602);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__39491 = seq__38599;
var G__39492 = chunk__38600;
var G__39493 = count__38601;
var G__39494 = (i__38602 + (1));
seq__38599 = G__39491;
chunk__38600 = G__39492;
count__38601 = G__39493;
i__38602 = G__39494;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__38599);
if(temp__5753__auto__){
var seq__38599__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38599__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__38599__$1);
var G__39495 = cljs.core.chunk_rest(seq__38599__$1);
var G__39496 = c__4638__auto__;
var G__39497 = cljs.core.count(c__4638__auto__);
var G__39498 = (0);
seq__38599 = G__39495;
chunk__38600 = G__39496;
count__38601 = G__39497;
i__38602 = G__39498;
continue;
} else {
var n = cljs.core.first(seq__38599__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__39499 = cljs.core.next(seq__38599__$1);
var G__39500 = null;
var G__39501 = (0);
var G__39502 = (0);
seq__38599 = G__39499;
chunk__38600 = G__39500;
count__38601 = G__39501;
i__38602 = G__39502;
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
var G__38618 = arguments.length;
switch (G__38618) {
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
var G__38632 = arguments.length;
switch (G__38632) {
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
var G__38647 = arguments.length;
switch (G__38647) {
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
var len__4818__auto___39511 = arguments.length;
var i__4819__auto___39512 = (0);
while(true){
if((i__4819__auto___39512 < len__4818__auto___39511)){
args__4824__auto__.push((arguments[i__4819__auto___39512]));

var G__39513 = (i__4819__auto___39512 + (1));
i__4819__auto___39512 = G__39513;
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
var seq__38668_39514 = cljs.core.seq(nodes);
var chunk__38669_39515 = null;
var count__38670_39516 = (0);
var i__38671_39517 = (0);
while(true){
if((i__38671_39517 < count__38670_39516)){
var node_39519 = chunk__38669_39515.cljs$core$IIndexed$_nth$arity$2(null,i__38671_39517);
fragment.appendChild(shadow.dom._to_dom(node_39519));


var G__39521 = seq__38668_39514;
var G__39522 = chunk__38669_39515;
var G__39523 = count__38670_39516;
var G__39524 = (i__38671_39517 + (1));
seq__38668_39514 = G__39521;
chunk__38669_39515 = G__39522;
count__38670_39516 = G__39523;
i__38671_39517 = G__39524;
continue;
} else {
var temp__5753__auto___39525 = cljs.core.seq(seq__38668_39514);
if(temp__5753__auto___39525){
var seq__38668_39526__$1 = temp__5753__auto___39525;
if(cljs.core.chunked_seq_QMARK_(seq__38668_39526__$1)){
var c__4638__auto___39527 = cljs.core.chunk_first(seq__38668_39526__$1);
var G__39528 = cljs.core.chunk_rest(seq__38668_39526__$1);
var G__39529 = c__4638__auto___39527;
var G__39530 = cljs.core.count(c__4638__auto___39527);
var G__39531 = (0);
seq__38668_39514 = G__39528;
chunk__38669_39515 = G__39529;
count__38670_39516 = G__39530;
i__38671_39517 = G__39531;
continue;
} else {
var node_39533 = cljs.core.first(seq__38668_39526__$1);
fragment.appendChild(shadow.dom._to_dom(node_39533));


var G__39538 = cljs.core.next(seq__38668_39526__$1);
var G__39539 = null;
var G__39540 = (0);
var G__39541 = (0);
seq__38668_39514 = G__39538;
chunk__38669_39515 = G__39539;
count__38670_39516 = G__39540;
i__38671_39517 = G__39541;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq38665){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq38665));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__38680_39543 = cljs.core.seq(scripts);
var chunk__38681_39544 = null;
var count__38682_39545 = (0);
var i__38683_39546 = (0);
while(true){
if((i__38683_39546 < count__38682_39545)){
var vec__38695_39547 = chunk__38681_39544.cljs$core$IIndexed$_nth$arity$2(null,i__38683_39546);
var script_tag_39549 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38695_39547,(0),null);
var script_body_39550 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38695_39547,(1),null);
eval(script_body_39550);


var G__39553 = seq__38680_39543;
var G__39554 = chunk__38681_39544;
var G__39555 = count__38682_39545;
var G__39556 = (i__38683_39546 + (1));
seq__38680_39543 = G__39553;
chunk__38681_39544 = G__39554;
count__38682_39545 = G__39555;
i__38683_39546 = G__39556;
continue;
} else {
var temp__5753__auto___39557 = cljs.core.seq(seq__38680_39543);
if(temp__5753__auto___39557){
var seq__38680_39558__$1 = temp__5753__auto___39557;
if(cljs.core.chunked_seq_QMARK_(seq__38680_39558__$1)){
var c__4638__auto___39559 = cljs.core.chunk_first(seq__38680_39558__$1);
var G__39560 = cljs.core.chunk_rest(seq__38680_39558__$1);
var G__39561 = c__4638__auto___39559;
var G__39562 = cljs.core.count(c__4638__auto___39559);
var G__39563 = (0);
seq__38680_39543 = G__39560;
chunk__38681_39544 = G__39561;
count__38682_39545 = G__39562;
i__38683_39546 = G__39563;
continue;
} else {
var vec__38699_39564 = cljs.core.first(seq__38680_39558__$1);
var script_tag_39565 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38699_39564,(0),null);
var script_body_39566 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38699_39564,(1),null);
eval(script_body_39566);


var G__39567 = cljs.core.next(seq__38680_39558__$1);
var G__39568 = null;
var G__39569 = (0);
var G__39570 = (0);
seq__38680_39543 = G__39567;
chunk__38681_39544 = G__39568;
count__38682_39545 = G__39569;
i__38683_39546 = G__39570;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__38705){
var vec__38708 = p__38705;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38708,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38708,(1),null);
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
var G__38737 = arguments.length;
switch (G__38737) {
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
var seq__38753 = cljs.core.seq(style_keys);
var chunk__38754 = null;
var count__38755 = (0);
var i__38756 = (0);
while(true){
if((i__38756 < count__38755)){
var it = chunk__38754.cljs$core$IIndexed$_nth$arity$2(null,i__38756);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__39573 = seq__38753;
var G__39574 = chunk__38754;
var G__39575 = count__38755;
var G__39576 = (i__38756 + (1));
seq__38753 = G__39573;
chunk__38754 = G__39574;
count__38755 = G__39575;
i__38756 = G__39576;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__38753);
if(temp__5753__auto__){
var seq__38753__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38753__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__38753__$1);
var G__39579 = cljs.core.chunk_rest(seq__38753__$1);
var G__39580 = c__4638__auto__;
var G__39581 = cljs.core.count(c__4638__auto__);
var G__39582 = (0);
seq__38753 = G__39579;
chunk__38754 = G__39580;
count__38755 = G__39581;
i__38756 = G__39582;
continue;
} else {
var it = cljs.core.first(seq__38753__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__39583 = cljs.core.next(seq__38753__$1);
var G__39584 = null;
var G__39585 = (0);
var G__39586 = (0);
seq__38753 = G__39583;
chunk__38754 = G__39584;
count__38755 = G__39585;
i__38756 = G__39586;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4463__auto__,k38771,else__4464__auto__){
var self__ = this;
var this__4463__auto____$1 = this;
var G__38779 = k38771;
var G__38779__$1 = (((G__38779 instanceof cljs.core.Keyword))?G__38779.fqn:null);
switch (G__38779__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k38771,else__4464__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4481__auto__,f__4482__auto__,init__4483__auto__){
var self__ = this;
var this__4481__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4484__auto__,p__38780){
var vec__38781 = p__38780;
var k__4485__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38781,(0),null);
var v__4486__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38781,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__38770){
var self__ = this;
var G__38770__$1 = this;
return (new cljs.core.RecordIter((0),G__38770__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this38772,other38773){
var self__ = this;
var this38772__$1 = this;
return (((!((other38773 == null)))) && ((((this38772__$1.constructor === other38773.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this38772__$1.x,other38773.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this38772__$1.y,other38773.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this38772__$1.__extmap,other38773.__extmap)))))))));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4468__auto__,k38771){
var self__ = this;
var this__4468__auto____$1 = this;
var G__38788 = k38771;
var G__38788__$1 = (((G__38788 instanceof cljs.core.Keyword))?G__38788.fqn:null);
switch (G__38788__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k38771);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4469__auto__,k__4470__auto__,G__38770){
var self__ = this;
var this__4469__auto____$1 = this;
var pred__38793 = cljs.core.keyword_identical_QMARK_;
var expr__38794 = k__4470__auto__;
if(cljs.core.truth_((pred__38793.cljs$core$IFn$_invoke$arity$2 ? pred__38793.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__38794) : pred__38793.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__38794)))){
return (new shadow.dom.Coordinate(G__38770,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__38793.cljs$core$IFn$_invoke$arity$2 ? pred__38793.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__38794) : pred__38793.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__38794)))){
return (new shadow.dom.Coordinate(self__.x,G__38770,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4470__auto__,G__38770),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4474__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4460__auto__,G__38770){
var self__ = this;
var this__4460__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__38770,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__38778){
var extmap__4501__auto__ = (function (){var G__38817 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__38778,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__38778)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__38817);
} else {
return G__38817;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__38778),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__38778),null,cljs.core.not_empty(extmap__4501__auto__),null));
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4463__auto__,k38846,else__4464__auto__){
var self__ = this;
var this__4463__auto____$1 = this;
var G__38871 = k38846;
var G__38871__$1 = (((G__38871 instanceof cljs.core.Keyword))?G__38871.fqn:null);
switch (G__38871__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k38846,else__4464__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4481__auto__,f__4482__auto__,init__4483__auto__){
var self__ = this;
var this__4481__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4484__auto__,p__38875){
var vec__38876 = p__38875;
var k__4485__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38876,(0),null);
var v__4486__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38876,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__38845){
var self__ = this;
var G__38845__$1 = this;
return (new cljs.core.RecordIter((0),G__38845__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this38847,other38848){
var self__ = this;
var this38847__$1 = this;
return (((!((other38848 == null)))) && ((((this38847__$1.constructor === other38848.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this38847__$1.w,other38848.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this38847__$1.h,other38848.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this38847__$1.__extmap,other38848.__extmap)))))))));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4468__auto__,k38846){
var self__ = this;
var this__4468__auto____$1 = this;
var G__38898 = k38846;
var G__38898__$1 = (((G__38898 instanceof cljs.core.Keyword))?G__38898.fqn:null);
switch (G__38898__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k38846);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4469__auto__,k__4470__auto__,G__38845){
var self__ = this;
var this__4469__auto____$1 = this;
var pred__38902 = cljs.core.keyword_identical_QMARK_;
var expr__38903 = k__4470__auto__;
if(cljs.core.truth_((pred__38902.cljs$core$IFn$_invoke$arity$2 ? pred__38902.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__38903) : pred__38902.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__38903)))){
return (new shadow.dom.Size(G__38845,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__38902.cljs$core$IFn$_invoke$arity$2 ? pred__38902.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__38903) : pred__38902.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__38903)))){
return (new shadow.dom.Size(self__.w,G__38845,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4470__auto__,G__38845),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4474__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4460__auto__,G__38845){
var self__ = this;
var this__4460__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__38845,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__38855){
var extmap__4501__auto__ = (function (){var G__38911 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__38855,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__38855)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__38911);
} else {
return G__38911;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__38855),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__38855),null,cljs.core.not_empty(extmap__4501__auto__),null));
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
var G__39630 = (i + (1));
var G__39631 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__39630;
ret = G__39631;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__39046){
var vec__39048 = p__39046;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39048,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39048,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__39062 = arguments.length;
switch (G__39062) {
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
var G__39636 = ps;
var G__39637 = (i + (1));
el__$1 = G__39636;
i = G__39637;
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
var vec__39129 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39129,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39129,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39129,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__39141_39638 = cljs.core.seq(props);
var chunk__39142_39639 = null;
var count__39143_39640 = (0);
var i__39144_39641 = (0);
while(true){
if((i__39144_39641 < count__39143_39640)){
var vec__39180_39642 = chunk__39142_39639.cljs$core$IIndexed$_nth$arity$2(null,i__39144_39641);
var k_39643 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39180_39642,(0),null);
var v_39644 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39180_39642,(1),null);
el.setAttributeNS((function (){var temp__5753__auto__ = cljs.core.namespace(k_39643);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_39643),v_39644);


var G__39646 = seq__39141_39638;
var G__39647 = chunk__39142_39639;
var G__39648 = count__39143_39640;
var G__39649 = (i__39144_39641 + (1));
seq__39141_39638 = G__39646;
chunk__39142_39639 = G__39647;
count__39143_39640 = G__39648;
i__39144_39641 = G__39649;
continue;
} else {
var temp__5753__auto___39650 = cljs.core.seq(seq__39141_39638);
if(temp__5753__auto___39650){
var seq__39141_39652__$1 = temp__5753__auto___39650;
if(cljs.core.chunked_seq_QMARK_(seq__39141_39652__$1)){
var c__4638__auto___39653 = cljs.core.chunk_first(seq__39141_39652__$1);
var G__39654 = cljs.core.chunk_rest(seq__39141_39652__$1);
var G__39655 = c__4638__auto___39653;
var G__39656 = cljs.core.count(c__4638__auto___39653);
var G__39657 = (0);
seq__39141_39638 = G__39654;
chunk__39142_39639 = G__39655;
count__39143_39640 = G__39656;
i__39144_39641 = G__39657;
continue;
} else {
var vec__39198_39658 = cljs.core.first(seq__39141_39652__$1);
var k_39659 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39198_39658,(0),null);
var v_39660 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39198_39658,(1),null);
el.setAttributeNS((function (){var temp__5753__auto____$1 = cljs.core.namespace(k_39659);
if(cljs.core.truth_(temp__5753__auto____$1)){
var ns = temp__5753__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_39659),v_39660);


var G__39661 = cljs.core.next(seq__39141_39652__$1);
var G__39662 = null;
var G__39663 = (0);
var G__39664 = (0);
seq__39141_39638 = G__39661;
chunk__39142_39639 = G__39662;
count__39143_39640 = G__39663;
i__39144_39641 = G__39664;
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
var vec__39220 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39220,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39220,(1),null);
var seq__39223_39672 = cljs.core.seq(node_children);
var chunk__39225_39673 = null;
var count__39226_39674 = (0);
var i__39227_39675 = (0);
while(true){
if((i__39227_39675 < count__39226_39674)){
var child_struct_39676 = chunk__39225_39673.cljs$core$IIndexed$_nth$arity$2(null,i__39227_39675);
if((!((child_struct_39676 == null)))){
if(typeof child_struct_39676 === 'string'){
var text_39677 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_39677),child_struct_39676].join(''));
} else {
var children_39678 = shadow.dom.svg_node(child_struct_39676);
if(cljs.core.seq_QMARK_(children_39678)){
var seq__39249_39681 = cljs.core.seq(children_39678);
var chunk__39255_39682 = null;
var count__39256_39683 = (0);
var i__39257_39684 = (0);
while(true){
if((i__39257_39684 < count__39256_39683)){
var child_39687 = chunk__39255_39682.cljs$core$IIndexed$_nth$arity$2(null,i__39257_39684);
if(cljs.core.truth_(child_39687)){
node.appendChild(child_39687);


var G__39691 = seq__39249_39681;
var G__39692 = chunk__39255_39682;
var G__39693 = count__39256_39683;
var G__39694 = (i__39257_39684 + (1));
seq__39249_39681 = G__39691;
chunk__39255_39682 = G__39692;
count__39256_39683 = G__39693;
i__39257_39684 = G__39694;
continue;
} else {
var G__39696 = seq__39249_39681;
var G__39697 = chunk__39255_39682;
var G__39698 = count__39256_39683;
var G__39699 = (i__39257_39684 + (1));
seq__39249_39681 = G__39696;
chunk__39255_39682 = G__39697;
count__39256_39683 = G__39698;
i__39257_39684 = G__39699;
continue;
}
} else {
var temp__5753__auto___39700 = cljs.core.seq(seq__39249_39681);
if(temp__5753__auto___39700){
var seq__39249_39701__$1 = temp__5753__auto___39700;
if(cljs.core.chunked_seq_QMARK_(seq__39249_39701__$1)){
var c__4638__auto___39702 = cljs.core.chunk_first(seq__39249_39701__$1);
var G__39703 = cljs.core.chunk_rest(seq__39249_39701__$1);
var G__39704 = c__4638__auto___39702;
var G__39705 = cljs.core.count(c__4638__auto___39702);
var G__39706 = (0);
seq__39249_39681 = G__39703;
chunk__39255_39682 = G__39704;
count__39256_39683 = G__39705;
i__39257_39684 = G__39706;
continue;
} else {
var child_39707 = cljs.core.first(seq__39249_39701__$1);
if(cljs.core.truth_(child_39707)){
node.appendChild(child_39707);


var G__39708 = cljs.core.next(seq__39249_39701__$1);
var G__39709 = null;
var G__39710 = (0);
var G__39711 = (0);
seq__39249_39681 = G__39708;
chunk__39255_39682 = G__39709;
count__39256_39683 = G__39710;
i__39257_39684 = G__39711;
continue;
} else {
var G__39714 = cljs.core.next(seq__39249_39701__$1);
var G__39715 = null;
var G__39716 = (0);
var G__39717 = (0);
seq__39249_39681 = G__39714;
chunk__39255_39682 = G__39715;
count__39256_39683 = G__39716;
i__39257_39684 = G__39717;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_39678);
}
}


var G__39718 = seq__39223_39672;
var G__39719 = chunk__39225_39673;
var G__39720 = count__39226_39674;
var G__39721 = (i__39227_39675 + (1));
seq__39223_39672 = G__39718;
chunk__39225_39673 = G__39719;
count__39226_39674 = G__39720;
i__39227_39675 = G__39721;
continue;
} else {
var G__39722 = seq__39223_39672;
var G__39723 = chunk__39225_39673;
var G__39724 = count__39226_39674;
var G__39725 = (i__39227_39675 + (1));
seq__39223_39672 = G__39722;
chunk__39225_39673 = G__39723;
count__39226_39674 = G__39724;
i__39227_39675 = G__39725;
continue;
}
} else {
var temp__5753__auto___39726 = cljs.core.seq(seq__39223_39672);
if(temp__5753__auto___39726){
var seq__39223_39727__$1 = temp__5753__auto___39726;
if(cljs.core.chunked_seq_QMARK_(seq__39223_39727__$1)){
var c__4638__auto___39733 = cljs.core.chunk_first(seq__39223_39727__$1);
var G__39734 = cljs.core.chunk_rest(seq__39223_39727__$1);
var G__39735 = c__4638__auto___39733;
var G__39736 = cljs.core.count(c__4638__auto___39733);
var G__39737 = (0);
seq__39223_39672 = G__39734;
chunk__39225_39673 = G__39735;
count__39226_39674 = G__39736;
i__39227_39675 = G__39737;
continue;
} else {
var child_struct_39744 = cljs.core.first(seq__39223_39727__$1);
if((!((child_struct_39744 == null)))){
if(typeof child_struct_39744 === 'string'){
var text_39746 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_39746),child_struct_39744].join(''));
} else {
var children_39749 = shadow.dom.svg_node(child_struct_39744);
if(cljs.core.seq_QMARK_(children_39749)){
var seq__39262_39750 = cljs.core.seq(children_39749);
var chunk__39264_39751 = null;
var count__39265_39752 = (0);
var i__39266_39753 = (0);
while(true){
if((i__39266_39753 < count__39265_39752)){
var child_39754 = chunk__39264_39751.cljs$core$IIndexed$_nth$arity$2(null,i__39266_39753);
if(cljs.core.truth_(child_39754)){
node.appendChild(child_39754);


var G__39755 = seq__39262_39750;
var G__39756 = chunk__39264_39751;
var G__39757 = count__39265_39752;
var G__39758 = (i__39266_39753 + (1));
seq__39262_39750 = G__39755;
chunk__39264_39751 = G__39756;
count__39265_39752 = G__39757;
i__39266_39753 = G__39758;
continue;
} else {
var G__39759 = seq__39262_39750;
var G__39760 = chunk__39264_39751;
var G__39761 = count__39265_39752;
var G__39762 = (i__39266_39753 + (1));
seq__39262_39750 = G__39759;
chunk__39264_39751 = G__39760;
count__39265_39752 = G__39761;
i__39266_39753 = G__39762;
continue;
}
} else {
var temp__5753__auto___39763__$1 = cljs.core.seq(seq__39262_39750);
if(temp__5753__auto___39763__$1){
var seq__39262_39764__$1 = temp__5753__auto___39763__$1;
if(cljs.core.chunked_seq_QMARK_(seq__39262_39764__$1)){
var c__4638__auto___39769 = cljs.core.chunk_first(seq__39262_39764__$1);
var G__39770 = cljs.core.chunk_rest(seq__39262_39764__$1);
var G__39771 = c__4638__auto___39769;
var G__39772 = cljs.core.count(c__4638__auto___39769);
var G__39773 = (0);
seq__39262_39750 = G__39770;
chunk__39264_39751 = G__39771;
count__39265_39752 = G__39772;
i__39266_39753 = G__39773;
continue;
} else {
var child_39774 = cljs.core.first(seq__39262_39764__$1);
if(cljs.core.truth_(child_39774)){
node.appendChild(child_39774);


var G__39775 = cljs.core.next(seq__39262_39764__$1);
var G__39776 = null;
var G__39777 = (0);
var G__39778 = (0);
seq__39262_39750 = G__39775;
chunk__39264_39751 = G__39776;
count__39265_39752 = G__39777;
i__39266_39753 = G__39778;
continue;
} else {
var G__39779 = cljs.core.next(seq__39262_39764__$1);
var G__39780 = null;
var G__39781 = (0);
var G__39782 = (0);
seq__39262_39750 = G__39779;
chunk__39264_39751 = G__39780;
count__39265_39752 = G__39781;
i__39266_39753 = G__39782;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_39749);
}
}


var G__39783 = cljs.core.next(seq__39223_39727__$1);
var G__39784 = null;
var G__39785 = (0);
var G__39786 = (0);
seq__39223_39672 = G__39783;
chunk__39225_39673 = G__39784;
count__39226_39674 = G__39785;
i__39227_39675 = G__39786;
continue;
} else {
var G__39787 = cljs.core.next(seq__39223_39727__$1);
var G__39788 = null;
var G__39789 = (0);
var G__39790 = (0);
seq__39223_39672 = G__39787;
chunk__39225_39673 = G__39788;
count__39226_39674 = G__39789;
i__39227_39675 = G__39790;
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
var len__4818__auto___39799 = arguments.length;
var i__4819__auto___39801 = (0);
while(true){
if((i__4819__auto___39801 < len__4818__auto___39799)){
args__4824__auto__.push((arguments[i__4819__auto___39801]));

var G__39802 = (i__4819__auto___39801 + (1));
i__4819__auto___39801 = G__39802;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq39280){
var G__39281 = cljs.core.first(seq39280);
var seq39280__$1 = cljs.core.next(seq39280);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39281,seq39280__$1);
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
var G__39284 = arguments.length;
switch (G__39284) {
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
var c__35744__auto___39808 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35745__auto__ = (function (){var switch__35549__auto__ = (function (state_39292){
var state_val_39293 = (state_39292[(1)]);
if((state_val_39293 === (1))){
var state_39292__$1 = state_39292;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39292__$1,(2),once_or_cleanup);
} else {
if((state_val_39293 === (2))){
var inst_39289 = (state_39292[(2)]);
var inst_39290 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_39292__$1 = (function (){var statearr_39295 = state_39292;
(statearr_39295[(7)] = inst_39289);

return statearr_39295;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_39292__$1,inst_39290);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__35550__auto__ = null;
var shadow$dom$state_machine__35550__auto____0 = (function (){
var statearr_39297 = [null,null,null,null,null,null,null,null];
(statearr_39297[(0)] = shadow$dom$state_machine__35550__auto__);

(statearr_39297[(1)] = (1));

return statearr_39297;
});
var shadow$dom$state_machine__35550__auto____1 = (function (state_39292){
while(true){
var ret_value__35551__auto__ = (function (){try{while(true){
var result__35552__auto__ = switch__35549__auto__(state_39292);
if(cljs.core.keyword_identical_QMARK_(result__35552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35552__auto__;
}
break;
}
}catch (e39298){var ex__35553__auto__ = e39298;
var statearr_39299_39812 = state_39292;
(statearr_39299_39812[(2)] = ex__35553__auto__);


if(cljs.core.seq((state_39292[(4)]))){
var statearr_39301_39813 = state_39292;
(statearr_39301_39813[(1)] = cljs.core.first((state_39292[(4)])));

} else {
throw ex__35553__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39814 = state_39292;
state_39292 = G__39814;
continue;
} else {
return ret_value__35551__auto__;
}
break;
}
});
shadow$dom$state_machine__35550__auto__ = function(state_39292){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__35550__auto____0.call(this);
case 1:
return shadow$dom$state_machine__35550__auto____1.call(this,state_39292);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__35550__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__35550__auto____0;
shadow$dom$state_machine__35550__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__35550__auto____1;
return shadow$dom$state_machine__35550__auto__;
})()
})();
var state__35746__auto__ = (function (){var statearr_39305 = f__35745__auto__();
(statearr_39305[(6)] = c__35744__auto___39808);

return statearr_39305;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35746__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
