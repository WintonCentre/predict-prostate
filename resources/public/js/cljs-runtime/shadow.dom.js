goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_39210 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_39210(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_39211 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_39211(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__38140 = coll;
var G__38141 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__38140,G__38141) : shadow.dom.lazy_native_coll_seq.call(null,G__38140,G__38141));
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
var or__4126__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
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

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"shadow.dom/NativeColl");
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
var G__38178 = arguments.length;
switch (G__38178) {
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
var G__38189 = arguments.length;
switch (G__38189) {
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
var G__38198 = arguments.length;
switch (G__38198) {
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
var G__38213 = arguments.length;
switch (G__38213) {
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
var G__38226 = arguments.length;
switch (G__38226) {
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
var G__38238 = arguments.length;
switch (G__38238) {
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

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e38249){if((e38249 instanceof Object)){
var e = e38249;
return console.log("didnt support attachEvent",el,e);
} else {
throw e38249;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__38270 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__38271 = null;
var count__38272 = (0);
var i__38273 = (0);
while(true){
if((i__38273 < count__38272)){
var el = chunk__38271.cljs$core$IIndexed$_nth$arity$2(null,i__38273);
var handler_39258__$1 = ((function (seq__38270,chunk__38271,count__38272,i__38273,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__38270,chunk__38271,count__38272,i__38273,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_39258__$1);


var G__39259 = seq__38270;
var G__39260 = chunk__38271;
var G__39261 = count__38272;
var G__39262 = (i__38273 + (1));
seq__38270 = G__39259;
chunk__38271 = G__39260;
count__38272 = G__39261;
i__38273 = G__39262;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__38270);
if(temp__5735__auto__){
var seq__38270__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38270__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__38270__$1);
var G__39263 = cljs.core.chunk_rest(seq__38270__$1);
var G__39264 = c__4556__auto__;
var G__39265 = cljs.core.count(c__4556__auto__);
var G__39266 = (0);
seq__38270 = G__39263;
chunk__38271 = G__39264;
count__38272 = G__39265;
i__38273 = G__39266;
continue;
} else {
var el = cljs.core.first(seq__38270__$1);
var handler_39267__$1 = ((function (seq__38270,chunk__38271,count__38272,i__38273,el,seq__38270__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__38270,chunk__38271,count__38272,i__38273,el,seq__38270__$1,temp__5735__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_39267__$1);


var G__39268 = cljs.core.next(seq__38270__$1);
var G__39269 = null;
var G__39270 = (0);
var G__39271 = (0);
seq__38270 = G__39268;
chunk__38271 = G__39269;
count__38272 = G__39270;
i__38273 = G__39271;
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
var G__38368 = arguments.length;
switch (G__38368) {
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
var seq__38380 = cljs.core.seq(events);
var chunk__38381 = null;
var count__38382 = (0);
var i__38383 = (0);
while(true){
if((i__38383 < count__38382)){
var vec__38394 = chunk__38381.cljs$core$IIndexed$_nth$arity$2(null,i__38383);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38394,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38394,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__39277 = seq__38380;
var G__39278 = chunk__38381;
var G__39279 = count__38382;
var G__39280 = (i__38383 + (1));
seq__38380 = G__39277;
chunk__38381 = G__39278;
count__38382 = G__39279;
i__38383 = G__39280;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__38380);
if(temp__5735__auto__){
var seq__38380__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38380__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__38380__$1);
var G__39282 = cljs.core.chunk_rest(seq__38380__$1);
var G__39283 = c__4556__auto__;
var G__39284 = cljs.core.count(c__4556__auto__);
var G__39285 = (0);
seq__38380 = G__39282;
chunk__38381 = G__39283;
count__38382 = G__39284;
i__38383 = G__39285;
continue;
} else {
var vec__38400 = cljs.core.first(seq__38380__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38400,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38400,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__39287 = cljs.core.next(seq__38380__$1);
var G__39288 = null;
var G__39289 = (0);
var G__39290 = (0);
seq__38380 = G__39287;
chunk__38381 = G__39288;
count__38382 = G__39289;
i__38383 = G__39290;
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
var seq__38405 = cljs.core.seq(styles);
var chunk__38406 = null;
var count__38407 = (0);
var i__38408 = (0);
while(true){
if((i__38408 < count__38407)){
var vec__38419 = chunk__38406.cljs$core$IIndexed$_nth$arity$2(null,i__38408);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38419,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38419,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__39291 = seq__38405;
var G__39292 = chunk__38406;
var G__39293 = count__38407;
var G__39294 = (i__38408 + (1));
seq__38405 = G__39291;
chunk__38406 = G__39292;
count__38407 = G__39293;
i__38408 = G__39294;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__38405);
if(temp__5735__auto__){
var seq__38405__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38405__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__38405__$1);
var G__39295 = cljs.core.chunk_rest(seq__38405__$1);
var G__39296 = c__4556__auto__;
var G__39297 = cljs.core.count(c__4556__auto__);
var G__39298 = (0);
seq__38405 = G__39295;
chunk__38406 = G__39296;
count__38407 = G__39297;
i__38408 = G__39298;
continue;
} else {
var vec__38423 = cljs.core.first(seq__38405__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38423,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38423,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__39299 = cljs.core.next(seq__38405__$1);
var G__39300 = null;
var G__39301 = (0);
var G__39302 = (0);
seq__38405 = G__39299;
chunk__38406 = G__39300;
count__38407 = G__39301;
i__38408 = G__39302;
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
var G__38431_39307 = key;
var G__38431_39308__$1 = (((G__38431_39307 instanceof cljs.core.Keyword))?G__38431_39307.fqn:null);
switch (G__38431_39308__$1) {
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
var ks_39315 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4126__auto__ = goog.string.startsWith(ks_39315,"data-");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return goog.string.startsWith(ks_39315,"aria-");
}
})())){
el.setAttribute(ks_39315,value);
} else {
(el[ks_39315] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__38441){
var map__38442 = p__38441;
var map__38442__$1 = (((((!((map__38442 == null))))?(((((map__38442.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38442.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38442):map__38442);
var props = map__38442__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38442__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__38467 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38467,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38467,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38467,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__38474 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__38474,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__38474;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__38487 = arguments.length;
switch (G__38487) {
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
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
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
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__38501){
var vec__38504 = p__38501;
var seq__38505 = cljs.core.seq(vec__38504);
var first__38506 = cljs.core.first(seq__38505);
var seq__38505__$1 = cljs.core.next(seq__38505);
var nn = first__38506;
var first__38506__$1 = cljs.core.first(seq__38505__$1);
var seq__38505__$2 = cljs.core.next(seq__38505__$1);
var np = first__38506__$1;
var nc = seq__38505__$2;
var node = vec__38504;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__38510 = nn;
var G__38511 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__38510,G__38511) : create_fn.call(null,G__38510,G__38511));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__38515 = nn;
var G__38516 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__38515,G__38516) : create_fn.call(null,G__38515,G__38516));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__38520 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38520,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38520,(1),null);
var seq__38523_39373 = cljs.core.seq(node_children);
var chunk__38524_39374 = null;
var count__38525_39375 = (0);
var i__38526_39376 = (0);
while(true){
if((i__38526_39376 < count__38525_39375)){
var child_struct_39380 = chunk__38524_39374.cljs$core$IIndexed$_nth$arity$2(null,i__38526_39376);
var children_39381 = shadow.dom.dom_node(child_struct_39380);
if(cljs.core.seq_QMARK_(children_39381)){
var seq__38544_39382 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_39381));
var chunk__38546_39383 = null;
var count__38547_39384 = (0);
var i__38548_39385 = (0);
while(true){
if((i__38548_39385 < count__38547_39384)){
var child_39387 = chunk__38546_39383.cljs$core$IIndexed$_nth$arity$2(null,i__38548_39385);
if(cljs.core.truth_(child_39387)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_39387);


var G__39389 = seq__38544_39382;
var G__39390 = chunk__38546_39383;
var G__39391 = count__38547_39384;
var G__39392 = (i__38548_39385 + (1));
seq__38544_39382 = G__39389;
chunk__38546_39383 = G__39390;
count__38547_39384 = G__39391;
i__38548_39385 = G__39392;
continue;
} else {
var G__39393 = seq__38544_39382;
var G__39394 = chunk__38546_39383;
var G__39395 = count__38547_39384;
var G__39396 = (i__38548_39385 + (1));
seq__38544_39382 = G__39393;
chunk__38546_39383 = G__39394;
count__38547_39384 = G__39395;
i__38548_39385 = G__39396;
continue;
}
} else {
var temp__5735__auto___39397 = cljs.core.seq(seq__38544_39382);
if(temp__5735__auto___39397){
var seq__38544_39400__$1 = temp__5735__auto___39397;
if(cljs.core.chunked_seq_QMARK_(seq__38544_39400__$1)){
var c__4556__auto___39401 = cljs.core.chunk_first(seq__38544_39400__$1);
var G__39402 = cljs.core.chunk_rest(seq__38544_39400__$1);
var G__39403 = c__4556__auto___39401;
var G__39404 = cljs.core.count(c__4556__auto___39401);
var G__39405 = (0);
seq__38544_39382 = G__39402;
chunk__38546_39383 = G__39403;
count__38547_39384 = G__39404;
i__38548_39385 = G__39405;
continue;
} else {
var child_39406 = cljs.core.first(seq__38544_39400__$1);
if(cljs.core.truth_(child_39406)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_39406);


var G__39407 = cljs.core.next(seq__38544_39400__$1);
var G__39408 = null;
var G__39409 = (0);
var G__39410 = (0);
seq__38544_39382 = G__39407;
chunk__38546_39383 = G__39408;
count__38547_39384 = G__39409;
i__38548_39385 = G__39410;
continue;
} else {
var G__39412 = cljs.core.next(seq__38544_39400__$1);
var G__39413 = null;
var G__39414 = (0);
var G__39415 = (0);
seq__38544_39382 = G__39412;
chunk__38546_39383 = G__39413;
count__38547_39384 = G__39414;
i__38548_39385 = G__39415;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_39381);
}


var G__39416 = seq__38523_39373;
var G__39417 = chunk__38524_39374;
var G__39418 = count__38525_39375;
var G__39419 = (i__38526_39376 + (1));
seq__38523_39373 = G__39416;
chunk__38524_39374 = G__39417;
count__38525_39375 = G__39418;
i__38526_39376 = G__39419;
continue;
} else {
var temp__5735__auto___39420 = cljs.core.seq(seq__38523_39373);
if(temp__5735__auto___39420){
var seq__38523_39421__$1 = temp__5735__auto___39420;
if(cljs.core.chunked_seq_QMARK_(seq__38523_39421__$1)){
var c__4556__auto___39422 = cljs.core.chunk_first(seq__38523_39421__$1);
var G__39423 = cljs.core.chunk_rest(seq__38523_39421__$1);
var G__39424 = c__4556__auto___39422;
var G__39425 = cljs.core.count(c__4556__auto___39422);
var G__39426 = (0);
seq__38523_39373 = G__39423;
chunk__38524_39374 = G__39424;
count__38525_39375 = G__39425;
i__38526_39376 = G__39426;
continue;
} else {
var child_struct_39427 = cljs.core.first(seq__38523_39421__$1);
var children_39428 = shadow.dom.dom_node(child_struct_39427);
if(cljs.core.seq_QMARK_(children_39428)){
var seq__38551_39429 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_39428));
var chunk__38553_39430 = null;
var count__38554_39431 = (0);
var i__38555_39432 = (0);
while(true){
if((i__38555_39432 < count__38554_39431)){
var child_39433 = chunk__38553_39430.cljs$core$IIndexed$_nth$arity$2(null,i__38555_39432);
if(cljs.core.truth_(child_39433)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_39433);


var G__39434 = seq__38551_39429;
var G__39435 = chunk__38553_39430;
var G__39436 = count__38554_39431;
var G__39437 = (i__38555_39432 + (1));
seq__38551_39429 = G__39434;
chunk__38553_39430 = G__39435;
count__38554_39431 = G__39436;
i__38555_39432 = G__39437;
continue;
} else {
var G__39438 = seq__38551_39429;
var G__39439 = chunk__38553_39430;
var G__39440 = count__38554_39431;
var G__39441 = (i__38555_39432 + (1));
seq__38551_39429 = G__39438;
chunk__38553_39430 = G__39439;
count__38554_39431 = G__39440;
i__38555_39432 = G__39441;
continue;
}
} else {
var temp__5735__auto___39442__$1 = cljs.core.seq(seq__38551_39429);
if(temp__5735__auto___39442__$1){
var seq__38551_39443__$1 = temp__5735__auto___39442__$1;
if(cljs.core.chunked_seq_QMARK_(seq__38551_39443__$1)){
var c__4556__auto___39444 = cljs.core.chunk_first(seq__38551_39443__$1);
var G__39445 = cljs.core.chunk_rest(seq__38551_39443__$1);
var G__39446 = c__4556__auto___39444;
var G__39447 = cljs.core.count(c__4556__auto___39444);
var G__39448 = (0);
seq__38551_39429 = G__39445;
chunk__38553_39430 = G__39446;
count__38554_39431 = G__39447;
i__38555_39432 = G__39448;
continue;
} else {
var child_39449 = cljs.core.first(seq__38551_39443__$1);
if(cljs.core.truth_(child_39449)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_39449);


var G__39450 = cljs.core.next(seq__38551_39443__$1);
var G__39451 = null;
var G__39452 = (0);
var G__39453 = (0);
seq__38551_39429 = G__39450;
chunk__38553_39430 = G__39451;
count__38554_39431 = G__39452;
i__38555_39432 = G__39453;
continue;
} else {
var G__39454 = cljs.core.next(seq__38551_39443__$1);
var G__39455 = null;
var G__39456 = (0);
var G__39457 = (0);
seq__38551_39429 = G__39454;
chunk__38553_39430 = G__39455;
count__38554_39431 = G__39456;
i__38555_39432 = G__39457;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_39428);
}


var G__39458 = cljs.core.next(seq__38523_39421__$1);
var G__39459 = null;
var G__39460 = (0);
var G__39461 = (0);
seq__38523_39373 = G__39458;
chunk__38524_39374 = G__39459;
count__38525_39375 = G__39460;
i__38526_39376 = G__39461;
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
var seq__38584 = cljs.core.seq(node);
var chunk__38585 = null;
var count__38586 = (0);
var i__38587 = (0);
while(true){
if((i__38587 < count__38586)){
var n = chunk__38585.cljs$core$IIndexed$_nth$arity$2(null,i__38587);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__39465 = seq__38584;
var G__39466 = chunk__38585;
var G__39467 = count__38586;
var G__39468 = (i__38587 + (1));
seq__38584 = G__39465;
chunk__38585 = G__39466;
count__38586 = G__39467;
i__38587 = G__39468;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__38584);
if(temp__5735__auto__){
var seq__38584__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38584__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__38584__$1);
var G__39469 = cljs.core.chunk_rest(seq__38584__$1);
var G__39470 = c__4556__auto__;
var G__39471 = cljs.core.count(c__4556__auto__);
var G__39472 = (0);
seq__38584 = G__39469;
chunk__38585 = G__39470;
count__38586 = G__39471;
i__38587 = G__39472;
continue;
} else {
var n = cljs.core.first(seq__38584__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__39473 = cljs.core.next(seq__38584__$1);
var G__39474 = null;
var G__39475 = (0);
var G__39476 = (0);
seq__38584 = G__39473;
chunk__38585 = G__39474;
count__38586 = G__39475;
i__38587 = G__39476;
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
var G__38632 = arguments.length;
switch (G__38632) {
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
var G__38650 = arguments.length;
switch (G__38650) {
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
var G__38662 = arguments.length;
switch (G__38662) {
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
var or__4126__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
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
var args__4742__auto__ = [];
var len__4736__auto___39491 = arguments.length;
var i__4737__auto___39492 = (0);
while(true){
if((i__4737__auto___39492 < len__4736__auto___39491)){
args__4742__auto__.push((arguments[i__4737__auto___39492]));

var G__39494 = (i__4737__auto___39492 + (1));
i__4737__auto___39492 = G__39494;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__38691_39495 = cljs.core.seq(nodes);
var chunk__38693_39496 = null;
var count__38694_39497 = (0);
var i__38695_39498 = (0);
while(true){
if((i__38695_39498 < count__38694_39497)){
var node_39499 = chunk__38693_39496.cljs$core$IIndexed$_nth$arity$2(null,i__38695_39498);
fragment.appendChild(shadow.dom._to_dom(node_39499));


var G__39500 = seq__38691_39495;
var G__39501 = chunk__38693_39496;
var G__39502 = count__38694_39497;
var G__39503 = (i__38695_39498 + (1));
seq__38691_39495 = G__39500;
chunk__38693_39496 = G__39501;
count__38694_39497 = G__39502;
i__38695_39498 = G__39503;
continue;
} else {
var temp__5735__auto___39504 = cljs.core.seq(seq__38691_39495);
if(temp__5735__auto___39504){
var seq__38691_39506__$1 = temp__5735__auto___39504;
if(cljs.core.chunked_seq_QMARK_(seq__38691_39506__$1)){
var c__4556__auto___39510 = cljs.core.chunk_first(seq__38691_39506__$1);
var G__39511 = cljs.core.chunk_rest(seq__38691_39506__$1);
var G__39512 = c__4556__auto___39510;
var G__39513 = cljs.core.count(c__4556__auto___39510);
var G__39514 = (0);
seq__38691_39495 = G__39511;
chunk__38693_39496 = G__39512;
count__38694_39497 = G__39513;
i__38695_39498 = G__39514;
continue;
} else {
var node_39515 = cljs.core.first(seq__38691_39506__$1);
fragment.appendChild(shadow.dom._to_dom(node_39515));


var G__39516 = cljs.core.next(seq__38691_39506__$1);
var G__39517 = null;
var G__39518 = (0);
var G__39519 = (0);
seq__38691_39495 = G__39516;
chunk__38693_39496 = G__39517;
count__38694_39497 = G__39518;
i__38695_39498 = G__39519;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq38686){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq38686));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__38711_39520 = cljs.core.seq(scripts);
var chunk__38712_39521 = null;
var count__38713_39522 = (0);
var i__38714_39523 = (0);
while(true){
if((i__38714_39523 < count__38713_39522)){
var vec__38723_39524 = chunk__38712_39521.cljs$core$IIndexed$_nth$arity$2(null,i__38714_39523);
var script_tag_39525 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38723_39524,(0),null);
var script_body_39526 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38723_39524,(1),null);
eval(script_body_39526);


var G__39527 = seq__38711_39520;
var G__39528 = chunk__38712_39521;
var G__39529 = count__38713_39522;
var G__39530 = (i__38714_39523 + (1));
seq__38711_39520 = G__39527;
chunk__38712_39521 = G__39528;
count__38713_39522 = G__39529;
i__38714_39523 = G__39530;
continue;
} else {
var temp__5735__auto___39531 = cljs.core.seq(seq__38711_39520);
if(temp__5735__auto___39531){
var seq__38711_39532__$1 = temp__5735__auto___39531;
if(cljs.core.chunked_seq_QMARK_(seq__38711_39532__$1)){
var c__4556__auto___39533 = cljs.core.chunk_first(seq__38711_39532__$1);
var G__39534 = cljs.core.chunk_rest(seq__38711_39532__$1);
var G__39535 = c__4556__auto___39533;
var G__39536 = cljs.core.count(c__4556__auto___39533);
var G__39537 = (0);
seq__38711_39520 = G__39534;
chunk__38712_39521 = G__39535;
count__38713_39522 = G__39536;
i__38714_39523 = G__39537;
continue;
} else {
var vec__38733_39538 = cljs.core.first(seq__38711_39532__$1);
var script_tag_39539 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38733_39538,(0),null);
var script_body_39540 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38733_39538,(1),null);
eval(script_body_39540);


var G__39541 = cljs.core.next(seq__38711_39532__$1);
var G__39542 = null;
var G__39543 = (0);
var G__39544 = (0);
seq__38711_39520 = G__39541;
chunk__38712_39521 = G__39542;
count__38713_39522 = G__39543;
i__38714_39523 = G__39544;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__38737){
var vec__38739 = p__38737;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38739,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38739,(1),null);
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
var G__38757 = arguments.length;
switch (G__38757) {
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
var seq__38771 = cljs.core.seq(style_keys);
var chunk__38772 = null;
var count__38773 = (0);
var i__38774 = (0);
while(true){
if((i__38774 < count__38773)){
var it = chunk__38772.cljs$core$IIndexed$_nth$arity$2(null,i__38774);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__39555 = seq__38771;
var G__39556 = chunk__38772;
var G__39557 = count__38773;
var G__39558 = (i__38774 + (1));
seq__38771 = G__39555;
chunk__38772 = G__39556;
count__38773 = G__39557;
i__38774 = G__39558;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__38771);
if(temp__5735__auto__){
var seq__38771__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38771__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__38771__$1);
var G__39559 = cljs.core.chunk_rest(seq__38771__$1);
var G__39560 = c__4556__auto__;
var G__39561 = cljs.core.count(c__4556__auto__);
var G__39562 = (0);
seq__38771 = G__39559;
chunk__38772 = G__39560;
count__38773 = G__39561;
i__38774 = G__39562;
continue;
} else {
var it = cljs.core.first(seq__38771__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__39563 = cljs.core.next(seq__38771__$1);
var G__39564 = null;
var G__39565 = (0);
var G__39566 = (0);
seq__38771 = G__39563;
chunk__38772 = G__39564;
count__38773 = G__39565;
i__38774 = G__39566;
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
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k38781,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__38810 = k38781;
var G__38810__$1 = (((G__38810 instanceof cljs.core.Keyword))?G__38810.fqn:null);
switch (G__38810__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k38781,else__4383__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__38814){
var vec__38815 = p__38814;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38815,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38815,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__38780){
var self__ = this;
var G__38780__$1 = this;
return (new cljs.core.RecordIter((0),G__38780__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this38782,other38783){
var self__ = this;
var this38782__$1 = this;
return (((!((other38783 == null)))) && ((this38782__$1.constructor === other38783.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this38782__$1.x,other38783.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this38782__$1.y,other38783.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this38782__$1.__extmap,other38783.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__38780){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__38828 = cljs.core.keyword_identical_QMARK_;
var expr__38829 = k__4388__auto__;
if(cljs.core.truth_((pred__38828.cljs$core$IFn$_invoke$arity$2 ? pred__38828.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__38829) : pred__38828.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__38829)))){
return (new shadow.dom.Coordinate(G__38780,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__38828.cljs$core$IFn$_invoke$arity$2 ? pred__38828.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__38829) : pred__38828.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__38829)))){
return (new shadow.dom.Coordinate(self__.x,G__38780,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__38780),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__38780){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__38780,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Coordinate");
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__38785){
var extmap__4419__auto__ = (function (){var G__38840 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__38785,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__38785)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__38840);
} else {
return G__38840;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__38785),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__38785),null,cljs.core.not_empty(extmap__4419__auto__),null));
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
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k38851,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__38859 = k38851;
var G__38859__$1 = (((G__38859 instanceof cljs.core.Keyword))?G__38859.fqn:null);
switch (G__38859__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k38851,else__4383__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__38865){
var vec__38868 = p__38865;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38868,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38868,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Size{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__38850){
var self__ = this;
var G__38850__$1 = this;
return (new cljs.core.RecordIter((0),G__38850__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this38852,other38853){
var self__ = this;
var this38852__$1 = this;
return (((!((other38853 == null)))) && ((this38852__$1.constructor === other38853.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this38852__$1.w,other38853.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this38852__$1.h,other38853.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this38852__$1.__extmap,other38853.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__38850){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__38887 = cljs.core.keyword_identical_QMARK_;
var expr__38888 = k__4388__auto__;
if(cljs.core.truth_((pred__38887.cljs$core$IFn$_invoke$arity$2 ? pred__38887.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__38888) : pred__38887.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__38888)))){
return (new shadow.dom.Size(G__38850,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__38887.cljs$core$IFn$_invoke$arity$2 ? pred__38887.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__38888) : pred__38887.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__38888)))){
return (new shadow.dom.Size(self__.w,G__38850,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__38850),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__38850){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__38850,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Size");
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__38854){
var extmap__4419__auto__ = (function (){var G__38899 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__38854,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__38854)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__38899);
} else {
return G__38899;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__38854),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__38854),null,cljs.core.not_empty(extmap__4419__auto__),null));
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
var a__4610__auto__ = opts;
var l__4611__auto__ = a__4610__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4611__auto__)){
var G__39626 = (i + (1));
var G__39627 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__39626;
ret = G__39627;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__38928){
var vec__38929 = p__38928;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38929,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38929,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__38943 = arguments.length;
switch (G__38943) {
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
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
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
var G__39652 = ps;
var G__39653 = (i + (1));
el__$1 = G__39652;
i = G__39653;
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
var vec__38987 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38987,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38987,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38987,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__38995_39665 = cljs.core.seq(props);
var chunk__38996_39666 = null;
var count__38997_39667 = (0);
var i__38998_39668 = (0);
while(true){
if((i__38998_39668 < count__38997_39667)){
var vec__39012_39670 = chunk__38996_39666.cljs$core$IIndexed$_nth$arity$2(null,i__38998_39668);
var k_39671 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39012_39670,(0),null);
var v_39672 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39012_39670,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_39671);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_39671),v_39672);


var G__39689 = seq__38995_39665;
var G__39690 = chunk__38996_39666;
var G__39691 = count__38997_39667;
var G__39692 = (i__38998_39668 + (1));
seq__38995_39665 = G__39689;
chunk__38996_39666 = G__39690;
count__38997_39667 = G__39691;
i__38998_39668 = G__39692;
continue;
} else {
var temp__5735__auto___39697 = cljs.core.seq(seq__38995_39665);
if(temp__5735__auto___39697){
var seq__38995_39702__$1 = temp__5735__auto___39697;
if(cljs.core.chunked_seq_QMARK_(seq__38995_39702__$1)){
var c__4556__auto___39707 = cljs.core.chunk_first(seq__38995_39702__$1);
var G__39708 = cljs.core.chunk_rest(seq__38995_39702__$1);
var G__39709 = c__4556__auto___39707;
var G__39710 = cljs.core.count(c__4556__auto___39707);
var G__39711 = (0);
seq__38995_39665 = G__39708;
chunk__38996_39666 = G__39709;
count__38997_39667 = G__39710;
i__38998_39668 = G__39711;
continue;
} else {
var vec__39022_39715 = cljs.core.first(seq__38995_39702__$1);
var k_39716 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39022_39715,(0),null);
var v_39717 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39022_39715,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_39716);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_39716),v_39717);


var G__39725 = cljs.core.next(seq__38995_39702__$1);
var G__39726 = null;
var G__39727 = (0);
var G__39728 = (0);
seq__38995_39665 = G__39725;
chunk__38996_39666 = G__39726;
count__38997_39667 = G__39727;
i__38998_39668 = G__39728;
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
var vec__39039 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39039,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39039,(1),null);
var seq__39043_39731 = cljs.core.seq(node_children);
var chunk__39045_39732 = null;
var count__39046_39734 = (0);
var i__39047_39735 = (0);
while(true){
if((i__39047_39735 < count__39046_39734)){
var child_struct_39736 = chunk__39045_39732.cljs$core$IIndexed$_nth$arity$2(null,i__39047_39735);
if((!((child_struct_39736 == null)))){
if(typeof child_struct_39736 === 'string'){
var text_39737 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_39737),child_struct_39736].join(''));
} else {
var children_39740 = shadow.dom.svg_node(child_struct_39736);
if(cljs.core.seq_QMARK_(children_39740)){
var seq__39082_39741 = cljs.core.seq(children_39740);
var chunk__39084_39742 = null;
var count__39085_39743 = (0);
var i__39086_39745 = (0);
while(true){
if((i__39086_39745 < count__39085_39743)){
var child_39748 = chunk__39084_39742.cljs$core$IIndexed$_nth$arity$2(null,i__39086_39745);
if(cljs.core.truth_(child_39748)){
node.appendChild(child_39748);


var G__39751 = seq__39082_39741;
var G__39752 = chunk__39084_39742;
var G__39753 = count__39085_39743;
var G__39754 = (i__39086_39745 + (1));
seq__39082_39741 = G__39751;
chunk__39084_39742 = G__39752;
count__39085_39743 = G__39753;
i__39086_39745 = G__39754;
continue;
} else {
var G__39755 = seq__39082_39741;
var G__39756 = chunk__39084_39742;
var G__39757 = count__39085_39743;
var G__39758 = (i__39086_39745 + (1));
seq__39082_39741 = G__39755;
chunk__39084_39742 = G__39756;
count__39085_39743 = G__39757;
i__39086_39745 = G__39758;
continue;
}
} else {
var temp__5735__auto___39760 = cljs.core.seq(seq__39082_39741);
if(temp__5735__auto___39760){
var seq__39082_39761__$1 = temp__5735__auto___39760;
if(cljs.core.chunked_seq_QMARK_(seq__39082_39761__$1)){
var c__4556__auto___39762 = cljs.core.chunk_first(seq__39082_39761__$1);
var G__39763 = cljs.core.chunk_rest(seq__39082_39761__$1);
var G__39764 = c__4556__auto___39762;
var G__39765 = cljs.core.count(c__4556__auto___39762);
var G__39766 = (0);
seq__39082_39741 = G__39763;
chunk__39084_39742 = G__39764;
count__39085_39743 = G__39765;
i__39086_39745 = G__39766;
continue;
} else {
var child_39767 = cljs.core.first(seq__39082_39761__$1);
if(cljs.core.truth_(child_39767)){
node.appendChild(child_39767);


var G__39768 = cljs.core.next(seq__39082_39761__$1);
var G__39769 = null;
var G__39770 = (0);
var G__39771 = (0);
seq__39082_39741 = G__39768;
chunk__39084_39742 = G__39769;
count__39085_39743 = G__39770;
i__39086_39745 = G__39771;
continue;
} else {
var G__39772 = cljs.core.next(seq__39082_39761__$1);
var G__39773 = null;
var G__39774 = (0);
var G__39775 = (0);
seq__39082_39741 = G__39772;
chunk__39084_39742 = G__39773;
count__39085_39743 = G__39774;
i__39086_39745 = G__39775;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_39740);
}
}


var G__39776 = seq__39043_39731;
var G__39777 = chunk__39045_39732;
var G__39778 = count__39046_39734;
var G__39779 = (i__39047_39735 + (1));
seq__39043_39731 = G__39776;
chunk__39045_39732 = G__39777;
count__39046_39734 = G__39778;
i__39047_39735 = G__39779;
continue;
} else {
var G__39781 = seq__39043_39731;
var G__39782 = chunk__39045_39732;
var G__39783 = count__39046_39734;
var G__39784 = (i__39047_39735 + (1));
seq__39043_39731 = G__39781;
chunk__39045_39732 = G__39782;
count__39046_39734 = G__39783;
i__39047_39735 = G__39784;
continue;
}
} else {
var temp__5735__auto___39785 = cljs.core.seq(seq__39043_39731);
if(temp__5735__auto___39785){
var seq__39043_39787__$1 = temp__5735__auto___39785;
if(cljs.core.chunked_seq_QMARK_(seq__39043_39787__$1)){
var c__4556__auto___39788 = cljs.core.chunk_first(seq__39043_39787__$1);
var G__39789 = cljs.core.chunk_rest(seq__39043_39787__$1);
var G__39790 = c__4556__auto___39788;
var G__39791 = cljs.core.count(c__4556__auto___39788);
var G__39792 = (0);
seq__39043_39731 = G__39789;
chunk__39045_39732 = G__39790;
count__39046_39734 = G__39791;
i__39047_39735 = G__39792;
continue;
} else {
var child_struct_39794 = cljs.core.first(seq__39043_39787__$1);
if((!((child_struct_39794 == null)))){
if(typeof child_struct_39794 === 'string'){
var text_39795 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_39795),child_struct_39794].join(''));
} else {
var children_39797 = shadow.dom.svg_node(child_struct_39794);
if(cljs.core.seq_QMARK_(children_39797)){
var seq__39101_39798 = cljs.core.seq(children_39797);
var chunk__39103_39799 = null;
var count__39104_39800 = (0);
var i__39105_39801 = (0);
while(true){
if((i__39105_39801 < count__39104_39800)){
var child_39802 = chunk__39103_39799.cljs$core$IIndexed$_nth$arity$2(null,i__39105_39801);
if(cljs.core.truth_(child_39802)){
node.appendChild(child_39802);


var G__39803 = seq__39101_39798;
var G__39804 = chunk__39103_39799;
var G__39805 = count__39104_39800;
var G__39806 = (i__39105_39801 + (1));
seq__39101_39798 = G__39803;
chunk__39103_39799 = G__39804;
count__39104_39800 = G__39805;
i__39105_39801 = G__39806;
continue;
} else {
var G__39807 = seq__39101_39798;
var G__39808 = chunk__39103_39799;
var G__39809 = count__39104_39800;
var G__39810 = (i__39105_39801 + (1));
seq__39101_39798 = G__39807;
chunk__39103_39799 = G__39808;
count__39104_39800 = G__39809;
i__39105_39801 = G__39810;
continue;
}
} else {
var temp__5735__auto___39811__$1 = cljs.core.seq(seq__39101_39798);
if(temp__5735__auto___39811__$1){
var seq__39101_39812__$1 = temp__5735__auto___39811__$1;
if(cljs.core.chunked_seq_QMARK_(seq__39101_39812__$1)){
var c__4556__auto___39813 = cljs.core.chunk_first(seq__39101_39812__$1);
var G__39814 = cljs.core.chunk_rest(seq__39101_39812__$1);
var G__39815 = c__4556__auto___39813;
var G__39816 = cljs.core.count(c__4556__auto___39813);
var G__39817 = (0);
seq__39101_39798 = G__39814;
chunk__39103_39799 = G__39815;
count__39104_39800 = G__39816;
i__39105_39801 = G__39817;
continue;
} else {
var child_39818 = cljs.core.first(seq__39101_39812__$1);
if(cljs.core.truth_(child_39818)){
node.appendChild(child_39818);


var G__39819 = cljs.core.next(seq__39101_39812__$1);
var G__39820 = null;
var G__39821 = (0);
var G__39822 = (0);
seq__39101_39798 = G__39819;
chunk__39103_39799 = G__39820;
count__39104_39800 = G__39821;
i__39105_39801 = G__39822;
continue;
} else {
var G__39823 = cljs.core.next(seq__39101_39812__$1);
var G__39824 = null;
var G__39825 = (0);
var G__39826 = (0);
seq__39101_39798 = G__39823;
chunk__39103_39799 = G__39824;
count__39104_39800 = G__39825;
i__39105_39801 = G__39826;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_39797);
}
}


var G__39827 = cljs.core.next(seq__39043_39787__$1);
var G__39828 = null;
var G__39829 = (0);
var G__39830 = (0);
seq__39043_39731 = G__39827;
chunk__39045_39732 = G__39828;
count__39046_39734 = G__39829;
i__39047_39735 = G__39830;
continue;
} else {
var G__39831 = cljs.core.next(seq__39043_39787__$1);
var G__39832 = null;
var G__39833 = (0);
var G__39834 = (0);
seq__39043_39731 = G__39831;
chunk__39045_39732 = G__39832;
count__39046_39734 = G__39833;
i__39047_39735 = G__39834;
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
var args__4742__auto__ = [];
var len__4736__auto___39835 = arguments.length;
var i__4737__auto___39836 = (0);
while(true){
if((i__4737__auto___39836 < len__4736__auto___39835)){
args__4742__auto__.push((arguments[i__4737__auto___39836]));

var G__39837 = (i__4737__auto___39836 + (1));
i__4737__auto___39836 = G__39837;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq39120){
var G__39121 = cljs.core.first(seq39120);
var seq39120__$1 = cljs.core.next(seq39120);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39121,seq39120__$1);
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
var G__39190 = arguments.length;
switch (G__39190) {
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

if(cljs.core.truth_((function (){var and__4115__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4115__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4115__auto__;
}
})())){
var c__35275__auto___39839 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35276__auto__ = (function (){var switch__35062__auto__ = (function (state_39196){
var state_val_39197 = (state_39196[(1)]);
if((state_val_39197 === (1))){
var state_39196__$1 = state_39196;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39196__$1,(2),once_or_cleanup);
} else {
if((state_val_39197 === (2))){
var inst_39193 = (state_39196[(2)]);
var inst_39194 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_39196__$1 = (function (){var statearr_39202 = state_39196;
(statearr_39202[(7)] = inst_39193);

return statearr_39202;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_39196__$1,inst_39194);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__35063__auto__ = null;
var shadow$dom$state_machine__35063__auto____0 = (function (){
var statearr_39203 = [null,null,null,null,null,null,null,null];
(statearr_39203[(0)] = shadow$dom$state_machine__35063__auto__);

(statearr_39203[(1)] = (1));

return statearr_39203;
});
var shadow$dom$state_machine__35063__auto____1 = (function (state_39196){
while(true){
var ret_value__35064__auto__ = (function (){try{while(true){
var result__35065__auto__ = switch__35062__auto__(state_39196);
if(cljs.core.keyword_identical_QMARK_(result__35065__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35065__auto__;
}
break;
}
}catch (e39204){var ex__35066__auto__ = e39204;
var statearr_39205_39840 = state_39196;
(statearr_39205_39840[(2)] = ex__35066__auto__);


if(cljs.core.seq((state_39196[(4)]))){
var statearr_39206_39841 = state_39196;
(statearr_39206_39841[(1)] = cljs.core.first((state_39196[(4)])));

} else {
throw ex__35066__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39842 = state_39196;
state_39196 = G__39842;
continue;
} else {
return ret_value__35064__auto__;
}
break;
}
});
shadow$dom$state_machine__35063__auto__ = function(state_39196){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__35063__auto____0.call(this);
case 1:
return shadow$dom$state_machine__35063__auto____1.call(this,state_39196);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__35063__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__35063__auto____0;
shadow$dom$state_machine__35063__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__35063__auto____1;
return shadow$dom$state_machine__35063__auto__;
})()
})();
var state__35277__auto__ = (function (){var statearr_39207 = f__35276__auto__();
(statearr_39207[(6)] = c__35275__auto___39839);

return statearr_39207;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35277__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
