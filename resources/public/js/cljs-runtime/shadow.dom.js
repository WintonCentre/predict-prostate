goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_39212 = (function (this$){
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
return shadow$dom$IElement$_to_dom$dyn_39212(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_39213 = (function (this$){
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
return shadow$dom$SVGElement$_to_svg$dyn_39213(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__38012 = coll;
var G__38013 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__38012,G__38013) : shadow.dom.lazy_native_coll_seq.call(null,G__38012,G__38013));
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
var G__38035 = arguments.length;
switch (G__38035) {
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
var G__38042 = arguments.length;
switch (G__38042) {
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
var G__38049 = arguments.length;
switch (G__38049) {
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
var G__38057 = arguments.length;
switch (G__38057) {
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
var G__38063 = arguments.length;
switch (G__38063) {
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
var G__38073 = arguments.length;
switch (G__38073) {
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
}catch (e38082){if((e38082 instanceof Object)){
var e = e38082;
return console.log("didnt support attachEvent",el,e);
} else {
throw e38082;

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
var seq__38092 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__38093 = null;
var count__38094 = (0);
var i__38095 = (0);
while(true){
if((i__38095 < count__38094)){
var el = chunk__38093.cljs$core$IIndexed$_nth$arity$2(null,i__38095);
var handler_39221__$1 = ((function (seq__38092,chunk__38093,count__38094,i__38095,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__38092,chunk__38093,count__38094,i__38095,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_39221__$1);


var G__39222 = seq__38092;
var G__39223 = chunk__38093;
var G__39224 = count__38094;
var G__39225 = (i__38095 + (1));
seq__38092 = G__39222;
chunk__38093 = G__39223;
count__38094 = G__39224;
i__38095 = G__39225;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__38092);
if(temp__5735__auto__){
var seq__38092__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38092__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__38092__$1);
var G__39226 = cljs.core.chunk_rest(seq__38092__$1);
var G__39227 = c__4556__auto__;
var G__39228 = cljs.core.count(c__4556__auto__);
var G__39229 = (0);
seq__38092 = G__39226;
chunk__38093 = G__39227;
count__38094 = G__39228;
i__38095 = G__39229;
continue;
} else {
var el = cljs.core.first(seq__38092__$1);
var handler_39230__$1 = ((function (seq__38092,chunk__38093,count__38094,i__38095,el,seq__38092__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__38092,chunk__38093,count__38094,i__38095,el,seq__38092__$1,temp__5735__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_39230__$1);


var G__39231 = cljs.core.next(seq__38092__$1);
var G__39232 = null;
var G__39233 = (0);
var G__39234 = (0);
seq__38092 = G__39231;
chunk__38093 = G__39232;
count__38094 = G__39233;
i__38095 = G__39234;
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
var G__38105 = arguments.length;
switch (G__38105) {
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
var seq__38128 = cljs.core.seq(events);
var chunk__38129 = null;
var count__38130 = (0);
var i__38131 = (0);
while(true){
if((i__38131 < count__38130)){
var vec__38146 = chunk__38129.cljs$core$IIndexed$_nth$arity$2(null,i__38131);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38146,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38146,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__39240 = seq__38128;
var G__39241 = chunk__38129;
var G__39242 = count__38130;
var G__39243 = (i__38131 + (1));
seq__38128 = G__39240;
chunk__38129 = G__39241;
count__38130 = G__39242;
i__38131 = G__39243;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__38128);
if(temp__5735__auto__){
var seq__38128__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38128__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__38128__$1);
var G__39244 = cljs.core.chunk_rest(seq__38128__$1);
var G__39245 = c__4556__auto__;
var G__39246 = cljs.core.count(c__4556__auto__);
var G__39247 = (0);
seq__38128 = G__39244;
chunk__38129 = G__39245;
count__38130 = G__39246;
i__38131 = G__39247;
continue;
} else {
var vec__38162 = cljs.core.first(seq__38128__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38162,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38162,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__39248 = cljs.core.next(seq__38128__$1);
var G__39249 = null;
var G__39250 = (0);
var G__39251 = (0);
seq__38128 = G__39248;
chunk__38129 = G__39249;
count__38130 = G__39250;
i__38131 = G__39251;
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
var seq__38175 = cljs.core.seq(styles);
var chunk__38176 = null;
var count__38177 = (0);
var i__38178 = (0);
while(true){
if((i__38178 < count__38177)){
var vec__38210 = chunk__38176.cljs$core$IIndexed$_nth$arity$2(null,i__38178);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38210,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38210,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__39252 = seq__38175;
var G__39253 = chunk__38176;
var G__39254 = count__38177;
var G__39255 = (i__38178 + (1));
seq__38175 = G__39252;
chunk__38176 = G__39253;
count__38177 = G__39254;
i__38178 = G__39255;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__38175);
if(temp__5735__auto__){
var seq__38175__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38175__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__38175__$1);
var G__39256 = cljs.core.chunk_rest(seq__38175__$1);
var G__39257 = c__4556__auto__;
var G__39258 = cljs.core.count(c__4556__auto__);
var G__39259 = (0);
seq__38175 = G__39256;
chunk__38176 = G__39257;
count__38177 = G__39258;
i__38178 = G__39259;
continue;
} else {
var vec__38221 = cljs.core.first(seq__38175__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38221,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38221,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__39260 = cljs.core.next(seq__38175__$1);
var G__39261 = null;
var G__39262 = (0);
var G__39263 = (0);
seq__38175 = G__39260;
chunk__38176 = G__39261;
count__38177 = G__39262;
i__38178 = G__39263;
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
var G__38240_39264 = key;
var G__38240_39265__$1 = (((G__38240_39264 instanceof cljs.core.Keyword))?G__38240_39264.fqn:null);
switch (G__38240_39265__$1) {
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
var ks_39267 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4126__auto__ = goog.string.startsWith(ks_39267,"data-");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return goog.string.startsWith(ks_39267,"aria-");
}
})())){
el.setAttribute(ks_39267,value);
} else {
(el[ks_39267] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__38289){
var map__38291 = p__38289;
var map__38291__$1 = (((((!((map__38291 == null))))?(((((map__38291.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38291.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38291):map__38291);
var props = map__38291__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38291__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__38293 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38293,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38293,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38293,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__38297 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__38297,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__38297;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__38301 = arguments.length;
switch (G__38301) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__38302){
var vec__38303 = p__38302;
var seq__38304 = cljs.core.seq(vec__38303);
var first__38305 = cljs.core.first(seq__38304);
var seq__38304__$1 = cljs.core.next(seq__38304);
var nn = first__38305;
var first__38305__$1 = cljs.core.first(seq__38304__$1);
var seq__38304__$2 = cljs.core.next(seq__38304__$1);
var np = first__38305__$1;
var nc = seq__38304__$2;
var node = vec__38303;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__38308 = nn;
var G__38309 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__38308,G__38309) : create_fn.call(null,G__38308,G__38309));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__38310 = nn;
var G__38311 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__38310,G__38311) : create_fn.call(null,G__38310,G__38311));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__38312 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38312,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38312,(1),null);
var seq__38316_39271 = cljs.core.seq(node_children);
var chunk__38317_39272 = null;
var count__38318_39273 = (0);
var i__38319_39274 = (0);
while(true){
if((i__38319_39274 < count__38318_39273)){
var child_struct_39275 = chunk__38317_39272.cljs$core$IIndexed$_nth$arity$2(null,i__38319_39274);
var children_39276 = shadow.dom.dom_node(child_struct_39275);
if(cljs.core.seq_QMARK_(children_39276)){
var seq__38362_39277 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_39276));
var chunk__38364_39278 = null;
var count__38365_39279 = (0);
var i__38366_39280 = (0);
while(true){
if((i__38366_39280 < count__38365_39279)){
var child_39281 = chunk__38364_39278.cljs$core$IIndexed$_nth$arity$2(null,i__38366_39280);
if(cljs.core.truth_(child_39281)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_39281);


var G__39282 = seq__38362_39277;
var G__39283 = chunk__38364_39278;
var G__39284 = count__38365_39279;
var G__39285 = (i__38366_39280 + (1));
seq__38362_39277 = G__39282;
chunk__38364_39278 = G__39283;
count__38365_39279 = G__39284;
i__38366_39280 = G__39285;
continue;
} else {
var G__39286 = seq__38362_39277;
var G__39287 = chunk__38364_39278;
var G__39288 = count__38365_39279;
var G__39289 = (i__38366_39280 + (1));
seq__38362_39277 = G__39286;
chunk__38364_39278 = G__39287;
count__38365_39279 = G__39288;
i__38366_39280 = G__39289;
continue;
}
} else {
var temp__5735__auto___39290 = cljs.core.seq(seq__38362_39277);
if(temp__5735__auto___39290){
var seq__38362_39291__$1 = temp__5735__auto___39290;
if(cljs.core.chunked_seq_QMARK_(seq__38362_39291__$1)){
var c__4556__auto___39292 = cljs.core.chunk_first(seq__38362_39291__$1);
var G__39293 = cljs.core.chunk_rest(seq__38362_39291__$1);
var G__39294 = c__4556__auto___39292;
var G__39295 = cljs.core.count(c__4556__auto___39292);
var G__39296 = (0);
seq__38362_39277 = G__39293;
chunk__38364_39278 = G__39294;
count__38365_39279 = G__39295;
i__38366_39280 = G__39296;
continue;
} else {
var child_39297 = cljs.core.first(seq__38362_39291__$1);
if(cljs.core.truth_(child_39297)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_39297);


var G__39298 = cljs.core.next(seq__38362_39291__$1);
var G__39299 = null;
var G__39300 = (0);
var G__39301 = (0);
seq__38362_39277 = G__39298;
chunk__38364_39278 = G__39299;
count__38365_39279 = G__39300;
i__38366_39280 = G__39301;
continue;
} else {
var G__39302 = cljs.core.next(seq__38362_39291__$1);
var G__39303 = null;
var G__39304 = (0);
var G__39305 = (0);
seq__38362_39277 = G__39302;
chunk__38364_39278 = G__39303;
count__38365_39279 = G__39304;
i__38366_39280 = G__39305;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_39276);
}


var G__39306 = seq__38316_39271;
var G__39307 = chunk__38317_39272;
var G__39308 = count__38318_39273;
var G__39309 = (i__38319_39274 + (1));
seq__38316_39271 = G__39306;
chunk__38317_39272 = G__39307;
count__38318_39273 = G__39308;
i__38319_39274 = G__39309;
continue;
} else {
var temp__5735__auto___39310 = cljs.core.seq(seq__38316_39271);
if(temp__5735__auto___39310){
var seq__38316_39311__$1 = temp__5735__auto___39310;
if(cljs.core.chunked_seq_QMARK_(seq__38316_39311__$1)){
var c__4556__auto___39312 = cljs.core.chunk_first(seq__38316_39311__$1);
var G__39313 = cljs.core.chunk_rest(seq__38316_39311__$1);
var G__39314 = c__4556__auto___39312;
var G__39315 = cljs.core.count(c__4556__auto___39312);
var G__39316 = (0);
seq__38316_39271 = G__39313;
chunk__38317_39272 = G__39314;
count__38318_39273 = G__39315;
i__38319_39274 = G__39316;
continue;
} else {
var child_struct_39317 = cljs.core.first(seq__38316_39311__$1);
var children_39318 = shadow.dom.dom_node(child_struct_39317);
if(cljs.core.seq_QMARK_(children_39318)){
var seq__38376_39319 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_39318));
var chunk__38378_39320 = null;
var count__38379_39321 = (0);
var i__38380_39322 = (0);
while(true){
if((i__38380_39322 < count__38379_39321)){
var child_39323 = chunk__38378_39320.cljs$core$IIndexed$_nth$arity$2(null,i__38380_39322);
if(cljs.core.truth_(child_39323)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_39323);


var G__39324 = seq__38376_39319;
var G__39325 = chunk__38378_39320;
var G__39326 = count__38379_39321;
var G__39327 = (i__38380_39322 + (1));
seq__38376_39319 = G__39324;
chunk__38378_39320 = G__39325;
count__38379_39321 = G__39326;
i__38380_39322 = G__39327;
continue;
} else {
var G__39328 = seq__38376_39319;
var G__39329 = chunk__38378_39320;
var G__39330 = count__38379_39321;
var G__39331 = (i__38380_39322 + (1));
seq__38376_39319 = G__39328;
chunk__38378_39320 = G__39329;
count__38379_39321 = G__39330;
i__38380_39322 = G__39331;
continue;
}
} else {
var temp__5735__auto___39332__$1 = cljs.core.seq(seq__38376_39319);
if(temp__5735__auto___39332__$1){
var seq__38376_39333__$1 = temp__5735__auto___39332__$1;
if(cljs.core.chunked_seq_QMARK_(seq__38376_39333__$1)){
var c__4556__auto___39334 = cljs.core.chunk_first(seq__38376_39333__$1);
var G__39335 = cljs.core.chunk_rest(seq__38376_39333__$1);
var G__39336 = c__4556__auto___39334;
var G__39337 = cljs.core.count(c__4556__auto___39334);
var G__39338 = (0);
seq__38376_39319 = G__39335;
chunk__38378_39320 = G__39336;
count__38379_39321 = G__39337;
i__38380_39322 = G__39338;
continue;
} else {
var child_39339 = cljs.core.first(seq__38376_39333__$1);
if(cljs.core.truth_(child_39339)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_39339);


var G__39340 = cljs.core.next(seq__38376_39333__$1);
var G__39341 = null;
var G__39342 = (0);
var G__39343 = (0);
seq__38376_39319 = G__39340;
chunk__38378_39320 = G__39341;
count__38379_39321 = G__39342;
i__38380_39322 = G__39343;
continue;
} else {
var G__39344 = cljs.core.next(seq__38376_39333__$1);
var G__39345 = null;
var G__39346 = (0);
var G__39347 = (0);
seq__38376_39319 = G__39344;
chunk__38378_39320 = G__39345;
count__38379_39321 = G__39346;
i__38380_39322 = G__39347;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_39318);
}


var G__39348 = cljs.core.next(seq__38316_39311__$1);
var G__39349 = null;
var G__39350 = (0);
var G__39351 = (0);
seq__38316_39271 = G__39348;
chunk__38317_39272 = G__39349;
count__38318_39273 = G__39350;
i__38319_39274 = G__39351;
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
var seq__38414 = cljs.core.seq(node);
var chunk__38415 = null;
var count__38416 = (0);
var i__38417 = (0);
while(true){
if((i__38417 < count__38416)){
var n = chunk__38415.cljs$core$IIndexed$_nth$arity$2(null,i__38417);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__39354 = seq__38414;
var G__39355 = chunk__38415;
var G__39356 = count__38416;
var G__39357 = (i__38417 + (1));
seq__38414 = G__39354;
chunk__38415 = G__39355;
count__38416 = G__39356;
i__38417 = G__39357;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__38414);
if(temp__5735__auto__){
var seq__38414__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38414__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__38414__$1);
var G__39358 = cljs.core.chunk_rest(seq__38414__$1);
var G__39359 = c__4556__auto__;
var G__39360 = cljs.core.count(c__4556__auto__);
var G__39361 = (0);
seq__38414 = G__39358;
chunk__38415 = G__39359;
count__38416 = G__39360;
i__38417 = G__39361;
continue;
} else {
var n = cljs.core.first(seq__38414__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__39362 = cljs.core.next(seq__38414__$1);
var G__39363 = null;
var G__39364 = (0);
var G__39365 = (0);
seq__38414 = G__39362;
chunk__38415 = G__39363;
count__38416 = G__39364;
i__38417 = G__39365;
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
var G__38448 = arguments.length;
switch (G__38448) {
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
var G__38456 = arguments.length;
switch (G__38456) {
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
var G__38535 = arguments.length;
switch (G__38535) {
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
var len__4736__auto___39371 = arguments.length;
var i__4737__auto___39372 = (0);
while(true){
if((i__4737__auto___39372 < len__4736__auto___39371)){
args__4742__auto__.push((arguments[i__4737__auto___39372]));

var G__39373 = (i__4737__auto___39372 + (1));
i__4737__auto___39372 = G__39373;
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
var seq__38578_39374 = cljs.core.seq(nodes);
var chunk__38579_39375 = null;
var count__38580_39376 = (0);
var i__38581_39377 = (0);
while(true){
if((i__38581_39377 < count__38580_39376)){
var node_39378 = chunk__38579_39375.cljs$core$IIndexed$_nth$arity$2(null,i__38581_39377);
fragment.appendChild(shadow.dom._to_dom(node_39378));


var G__39379 = seq__38578_39374;
var G__39380 = chunk__38579_39375;
var G__39381 = count__38580_39376;
var G__39382 = (i__38581_39377 + (1));
seq__38578_39374 = G__39379;
chunk__38579_39375 = G__39380;
count__38580_39376 = G__39381;
i__38581_39377 = G__39382;
continue;
} else {
var temp__5735__auto___39383 = cljs.core.seq(seq__38578_39374);
if(temp__5735__auto___39383){
var seq__38578_39384__$1 = temp__5735__auto___39383;
if(cljs.core.chunked_seq_QMARK_(seq__38578_39384__$1)){
var c__4556__auto___39385 = cljs.core.chunk_first(seq__38578_39384__$1);
var G__39386 = cljs.core.chunk_rest(seq__38578_39384__$1);
var G__39387 = c__4556__auto___39385;
var G__39388 = cljs.core.count(c__4556__auto___39385);
var G__39389 = (0);
seq__38578_39374 = G__39386;
chunk__38579_39375 = G__39387;
count__38580_39376 = G__39388;
i__38581_39377 = G__39389;
continue;
} else {
var node_39390 = cljs.core.first(seq__38578_39384__$1);
fragment.appendChild(shadow.dom._to_dom(node_39390));


var G__39391 = cljs.core.next(seq__38578_39384__$1);
var G__39392 = null;
var G__39393 = (0);
var G__39394 = (0);
seq__38578_39374 = G__39391;
chunk__38579_39375 = G__39392;
count__38580_39376 = G__39393;
i__38581_39377 = G__39394;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq38577){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq38577));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__38648_39396 = cljs.core.seq(scripts);
var chunk__38650_39397 = null;
var count__38651_39398 = (0);
var i__38652_39399 = (0);
while(true){
if((i__38652_39399 < count__38651_39398)){
var vec__38687_39401 = chunk__38650_39397.cljs$core$IIndexed$_nth$arity$2(null,i__38652_39399);
var script_tag_39402 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38687_39401,(0),null);
var script_body_39403 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38687_39401,(1),null);
eval(script_body_39403);


var G__39405 = seq__38648_39396;
var G__39406 = chunk__38650_39397;
var G__39407 = count__38651_39398;
var G__39408 = (i__38652_39399 + (1));
seq__38648_39396 = G__39405;
chunk__38650_39397 = G__39406;
count__38651_39398 = G__39407;
i__38652_39399 = G__39408;
continue;
} else {
var temp__5735__auto___39409 = cljs.core.seq(seq__38648_39396);
if(temp__5735__auto___39409){
var seq__38648_39410__$1 = temp__5735__auto___39409;
if(cljs.core.chunked_seq_QMARK_(seq__38648_39410__$1)){
var c__4556__auto___39411 = cljs.core.chunk_first(seq__38648_39410__$1);
var G__39412 = cljs.core.chunk_rest(seq__38648_39410__$1);
var G__39413 = c__4556__auto___39411;
var G__39414 = cljs.core.count(c__4556__auto___39411);
var G__39415 = (0);
seq__38648_39396 = G__39412;
chunk__38650_39397 = G__39413;
count__38651_39398 = G__39414;
i__38652_39399 = G__39415;
continue;
} else {
var vec__38697_39416 = cljs.core.first(seq__38648_39410__$1);
var script_tag_39417 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38697_39416,(0),null);
var script_body_39418 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38697_39416,(1),null);
eval(script_body_39418);


var G__39419 = cljs.core.next(seq__38648_39410__$1);
var G__39420 = null;
var G__39421 = (0);
var G__39422 = (0);
seq__38648_39396 = G__39419;
chunk__38650_39397 = G__39420;
count__38651_39398 = G__39421;
i__38652_39399 = G__39422;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__38703){
var vec__38705 = p__38703;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38705,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38705,(1),null);
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
var G__38733 = arguments.length;
switch (G__38733) {
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
var seq__38737 = cljs.core.seq(style_keys);
var chunk__38738 = null;
var count__38739 = (0);
var i__38740 = (0);
while(true){
if((i__38740 < count__38739)){
var it = chunk__38738.cljs$core$IIndexed$_nth$arity$2(null,i__38740);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__39424 = seq__38737;
var G__39425 = chunk__38738;
var G__39426 = count__38739;
var G__39427 = (i__38740 + (1));
seq__38737 = G__39424;
chunk__38738 = G__39425;
count__38739 = G__39426;
i__38740 = G__39427;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__38737);
if(temp__5735__auto__){
var seq__38737__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38737__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__38737__$1);
var G__39428 = cljs.core.chunk_rest(seq__38737__$1);
var G__39429 = c__4556__auto__;
var G__39430 = cljs.core.count(c__4556__auto__);
var G__39431 = (0);
seq__38737 = G__39428;
chunk__38738 = G__39429;
count__38739 = G__39430;
i__38740 = G__39431;
continue;
} else {
var it = cljs.core.first(seq__38737__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__39432 = cljs.core.next(seq__38737__$1);
var G__39433 = null;
var G__39434 = (0);
var G__39435 = (0);
seq__38737 = G__39432;
chunk__38738 = G__39433;
count__38739 = G__39434;
i__38740 = G__39435;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k38883,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__38914 = k38883;
var G__38914__$1 = (((G__38914 instanceof cljs.core.Keyword))?G__38914.fqn:null);
switch (G__38914__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k38883,else__4383__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__38929){
var vec__38931 = p__38929;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38931,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38931,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__38882){
var self__ = this;
var G__38882__$1 = this;
return (new cljs.core.RecordIter((0),G__38882__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this38884,other38885){
var self__ = this;
var this38884__$1 = this;
return (((!((other38885 == null)))) && ((this38884__$1.constructor === other38885.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this38884__$1.x,other38885.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this38884__$1.y,other38885.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this38884__$1.__extmap,other38885.__extmap)));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__38882){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__38979 = cljs.core.keyword_identical_QMARK_;
var expr__38980 = k__4388__auto__;
if(cljs.core.truth_((pred__38979.cljs$core$IFn$_invoke$arity$2 ? pred__38979.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__38980) : pred__38979.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__38980)))){
return (new shadow.dom.Coordinate(G__38882,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__38979.cljs$core$IFn$_invoke$arity$2 ? pred__38979.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__38980) : pred__38979.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__38980)))){
return (new shadow.dom.Coordinate(self__.x,G__38882,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__38882),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__38882){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__38882,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__38890){
var extmap__4419__auto__ = (function (){var G__38988 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__38890,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__38890)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__38988);
} else {
return G__38988;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__38890),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__38890),null,cljs.core.not_empty(extmap__4419__auto__),null));
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k38994,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__39003 = k38994;
var G__39003__$1 = (((G__39003 instanceof cljs.core.Keyword))?G__39003.fqn:null);
switch (G__39003__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k38994,else__4383__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__39004){
var vec__39005 = p__39004;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39005,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39005,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__38993){
var self__ = this;
var G__38993__$1 = this;
return (new cljs.core.RecordIter((0),G__38993__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this38995,other38996){
var self__ = this;
var this38995__$1 = this;
return (((!((other38996 == null)))) && ((this38995__$1.constructor === other38996.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this38995__$1.w,other38996.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this38995__$1.h,other38996.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this38995__$1.__extmap,other38996.__extmap)));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__38993){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__39015 = cljs.core.keyword_identical_QMARK_;
var expr__39016 = k__4388__auto__;
if(cljs.core.truth_((pred__39015.cljs$core$IFn$_invoke$arity$2 ? pred__39015.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__39016) : pred__39015.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__39016)))){
return (new shadow.dom.Size(G__38993,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__39015.cljs$core$IFn$_invoke$arity$2 ? pred__39015.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__39016) : pred__39015.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__39016)))){
return (new shadow.dom.Size(self__.w,G__38993,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__38993),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__38993){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__38993,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__38998){
var extmap__4419__auto__ = (function (){var G__39032 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__38998,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__38998)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__39032);
} else {
return G__39032;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__38998),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__38998),null,cljs.core.not_empty(extmap__4419__auto__),null));
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
var G__39473 = (i + (1));
var G__39474 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__39473;
ret = G__39474;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__39122){
var vec__39123 = p__39122;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39123,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39123,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__39127 = arguments.length;
switch (G__39127) {
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
var G__39482 = ps;
var G__39483 = (i + (1));
el__$1 = G__39482;
i = G__39483;
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
var vec__39131 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39131,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39131,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39131,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__39136_39490 = cljs.core.seq(props);
var chunk__39137_39491 = null;
var count__39138_39492 = (0);
var i__39139_39493 = (0);
while(true){
if((i__39139_39493 < count__39138_39492)){
var vec__39149_39494 = chunk__39137_39491.cljs$core$IIndexed$_nth$arity$2(null,i__39139_39493);
var k_39495 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39149_39494,(0),null);
var v_39496 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39149_39494,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_39495);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_39495),v_39496);


var G__39499 = seq__39136_39490;
var G__39500 = chunk__39137_39491;
var G__39501 = count__39138_39492;
var G__39502 = (i__39139_39493 + (1));
seq__39136_39490 = G__39499;
chunk__39137_39491 = G__39500;
count__39138_39492 = G__39501;
i__39139_39493 = G__39502;
continue;
} else {
var temp__5735__auto___39504 = cljs.core.seq(seq__39136_39490);
if(temp__5735__auto___39504){
var seq__39136_39505__$1 = temp__5735__auto___39504;
if(cljs.core.chunked_seq_QMARK_(seq__39136_39505__$1)){
var c__4556__auto___39506 = cljs.core.chunk_first(seq__39136_39505__$1);
var G__39507 = cljs.core.chunk_rest(seq__39136_39505__$1);
var G__39508 = c__4556__auto___39506;
var G__39509 = cljs.core.count(c__4556__auto___39506);
var G__39510 = (0);
seq__39136_39490 = G__39507;
chunk__39137_39491 = G__39508;
count__39138_39492 = G__39509;
i__39139_39493 = G__39510;
continue;
} else {
var vec__39152_39511 = cljs.core.first(seq__39136_39505__$1);
var k_39512 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39152_39511,(0),null);
var v_39513 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39152_39511,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_39512);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_39512),v_39513);


var G__39514 = cljs.core.next(seq__39136_39505__$1);
var G__39515 = null;
var G__39516 = (0);
var G__39517 = (0);
seq__39136_39490 = G__39514;
chunk__39137_39491 = G__39515;
count__39138_39492 = G__39516;
i__39139_39493 = G__39517;
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
var vec__39156 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39156,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39156,(1),null);
var seq__39159_39518 = cljs.core.seq(node_children);
var chunk__39161_39519 = null;
var count__39162_39520 = (0);
var i__39163_39521 = (0);
while(true){
if((i__39163_39521 < count__39162_39520)){
var child_struct_39522 = chunk__39161_39519.cljs$core$IIndexed$_nth$arity$2(null,i__39163_39521);
if((!((child_struct_39522 == null)))){
if(typeof child_struct_39522 === 'string'){
var text_39527 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_39527),child_struct_39522].join(''));
} else {
var children_39528 = shadow.dom.svg_node(child_struct_39522);
if(cljs.core.seq_QMARK_(children_39528)){
var seq__39177_39529 = cljs.core.seq(children_39528);
var chunk__39179_39530 = null;
var count__39180_39531 = (0);
var i__39181_39532 = (0);
while(true){
if((i__39181_39532 < count__39180_39531)){
var child_39533 = chunk__39179_39530.cljs$core$IIndexed$_nth$arity$2(null,i__39181_39532);
if(cljs.core.truth_(child_39533)){
node.appendChild(child_39533);


var G__39534 = seq__39177_39529;
var G__39535 = chunk__39179_39530;
var G__39536 = count__39180_39531;
var G__39537 = (i__39181_39532 + (1));
seq__39177_39529 = G__39534;
chunk__39179_39530 = G__39535;
count__39180_39531 = G__39536;
i__39181_39532 = G__39537;
continue;
} else {
var G__39539 = seq__39177_39529;
var G__39540 = chunk__39179_39530;
var G__39541 = count__39180_39531;
var G__39542 = (i__39181_39532 + (1));
seq__39177_39529 = G__39539;
chunk__39179_39530 = G__39540;
count__39180_39531 = G__39541;
i__39181_39532 = G__39542;
continue;
}
} else {
var temp__5735__auto___39543 = cljs.core.seq(seq__39177_39529);
if(temp__5735__auto___39543){
var seq__39177_39544__$1 = temp__5735__auto___39543;
if(cljs.core.chunked_seq_QMARK_(seq__39177_39544__$1)){
var c__4556__auto___39545 = cljs.core.chunk_first(seq__39177_39544__$1);
var G__39546 = cljs.core.chunk_rest(seq__39177_39544__$1);
var G__39547 = c__4556__auto___39545;
var G__39548 = cljs.core.count(c__4556__auto___39545);
var G__39549 = (0);
seq__39177_39529 = G__39546;
chunk__39179_39530 = G__39547;
count__39180_39531 = G__39548;
i__39181_39532 = G__39549;
continue;
} else {
var child_39550 = cljs.core.first(seq__39177_39544__$1);
if(cljs.core.truth_(child_39550)){
node.appendChild(child_39550);


var G__39551 = cljs.core.next(seq__39177_39544__$1);
var G__39552 = null;
var G__39553 = (0);
var G__39554 = (0);
seq__39177_39529 = G__39551;
chunk__39179_39530 = G__39552;
count__39180_39531 = G__39553;
i__39181_39532 = G__39554;
continue;
} else {
var G__39555 = cljs.core.next(seq__39177_39544__$1);
var G__39556 = null;
var G__39557 = (0);
var G__39558 = (0);
seq__39177_39529 = G__39555;
chunk__39179_39530 = G__39556;
count__39180_39531 = G__39557;
i__39181_39532 = G__39558;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_39528);
}
}


var G__39559 = seq__39159_39518;
var G__39560 = chunk__39161_39519;
var G__39561 = count__39162_39520;
var G__39562 = (i__39163_39521 + (1));
seq__39159_39518 = G__39559;
chunk__39161_39519 = G__39560;
count__39162_39520 = G__39561;
i__39163_39521 = G__39562;
continue;
} else {
var G__39563 = seq__39159_39518;
var G__39564 = chunk__39161_39519;
var G__39565 = count__39162_39520;
var G__39566 = (i__39163_39521 + (1));
seq__39159_39518 = G__39563;
chunk__39161_39519 = G__39564;
count__39162_39520 = G__39565;
i__39163_39521 = G__39566;
continue;
}
} else {
var temp__5735__auto___39567 = cljs.core.seq(seq__39159_39518);
if(temp__5735__auto___39567){
var seq__39159_39568__$1 = temp__5735__auto___39567;
if(cljs.core.chunked_seq_QMARK_(seq__39159_39568__$1)){
var c__4556__auto___39569 = cljs.core.chunk_first(seq__39159_39568__$1);
var G__39570 = cljs.core.chunk_rest(seq__39159_39568__$1);
var G__39571 = c__4556__auto___39569;
var G__39572 = cljs.core.count(c__4556__auto___39569);
var G__39573 = (0);
seq__39159_39518 = G__39570;
chunk__39161_39519 = G__39571;
count__39162_39520 = G__39572;
i__39163_39521 = G__39573;
continue;
} else {
var child_struct_39574 = cljs.core.first(seq__39159_39568__$1);
if((!((child_struct_39574 == null)))){
if(typeof child_struct_39574 === 'string'){
var text_39576 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_39576),child_struct_39574].join(''));
} else {
var children_39577 = shadow.dom.svg_node(child_struct_39574);
if(cljs.core.seq_QMARK_(children_39577)){
var seq__39190_39579 = cljs.core.seq(children_39577);
var chunk__39192_39580 = null;
var count__39193_39581 = (0);
var i__39194_39582 = (0);
while(true){
if((i__39194_39582 < count__39193_39581)){
var child_39583 = chunk__39192_39580.cljs$core$IIndexed$_nth$arity$2(null,i__39194_39582);
if(cljs.core.truth_(child_39583)){
node.appendChild(child_39583);


var G__39584 = seq__39190_39579;
var G__39585 = chunk__39192_39580;
var G__39586 = count__39193_39581;
var G__39587 = (i__39194_39582 + (1));
seq__39190_39579 = G__39584;
chunk__39192_39580 = G__39585;
count__39193_39581 = G__39586;
i__39194_39582 = G__39587;
continue;
} else {
var G__39588 = seq__39190_39579;
var G__39589 = chunk__39192_39580;
var G__39590 = count__39193_39581;
var G__39591 = (i__39194_39582 + (1));
seq__39190_39579 = G__39588;
chunk__39192_39580 = G__39589;
count__39193_39581 = G__39590;
i__39194_39582 = G__39591;
continue;
}
} else {
var temp__5735__auto___39592__$1 = cljs.core.seq(seq__39190_39579);
if(temp__5735__auto___39592__$1){
var seq__39190_39593__$1 = temp__5735__auto___39592__$1;
if(cljs.core.chunked_seq_QMARK_(seq__39190_39593__$1)){
var c__4556__auto___39594 = cljs.core.chunk_first(seq__39190_39593__$1);
var G__39595 = cljs.core.chunk_rest(seq__39190_39593__$1);
var G__39596 = c__4556__auto___39594;
var G__39597 = cljs.core.count(c__4556__auto___39594);
var G__39598 = (0);
seq__39190_39579 = G__39595;
chunk__39192_39580 = G__39596;
count__39193_39581 = G__39597;
i__39194_39582 = G__39598;
continue;
} else {
var child_39599 = cljs.core.first(seq__39190_39593__$1);
if(cljs.core.truth_(child_39599)){
node.appendChild(child_39599);


var G__39600 = cljs.core.next(seq__39190_39593__$1);
var G__39601 = null;
var G__39602 = (0);
var G__39603 = (0);
seq__39190_39579 = G__39600;
chunk__39192_39580 = G__39601;
count__39193_39581 = G__39602;
i__39194_39582 = G__39603;
continue;
} else {
var G__39604 = cljs.core.next(seq__39190_39593__$1);
var G__39605 = null;
var G__39606 = (0);
var G__39607 = (0);
seq__39190_39579 = G__39604;
chunk__39192_39580 = G__39605;
count__39193_39581 = G__39606;
i__39194_39582 = G__39607;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_39577);
}
}


var G__39608 = cljs.core.next(seq__39159_39568__$1);
var G__39609 = null;
var G__39610 = (0);
var G__39611 = (0);
seq__39159_39518 = G__39608;
chunk__39161_39519 = G__39609;
count__39162_39520 = G__39610;
i__39163_39521 = G__39611;
continue;
} else {
var G__39612 = cljs.core.next(seq__39159_39568__$1);
var G__39613 = null;
var G__39614 = (0);
var G__39615 = (0);
seq__39159_39518 = G__39612;
chunk__39161_39519 = G__39613;
count__39162_39520 = G__39614;
i__39163_39521 = G__39615;
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
var len__4736__auto___39618 = arguments.length;
var i__4737__auto___39619 = (0);
while(true){
if((i__4737__auto___39619 < len__4736__auto___39618)){
args__4742__auto__.push((arguments[i__4737__auto___39619]));

var G__39620 = (i__4737__auto___39619 + (1));
i__4737__auto___39619 = G__39620;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq39196){
var G__39197 = cljs.core.first(seq39196);
var seq39196__$1 = cljs.core.next(seq39196);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39197,seq39196__$1);
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
var G__39199 = arguments.length;
switch (G__39199) {
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
var c__35306__auto___39627 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35307__auto__ = (function (){var switch__35071__auto__ = (function (state_39204){
var state_val_39205 = (state_39204[(1)]);
if((state_val_39205 === (1))){
var state_39204__$1 = state_39204;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39204__$1,(2),once_or_cleanup);
} else {
if((state_val_39205 === (2))){
var inst_39201 = (state_39204[(2)]);
var inst_39202 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_39204__$1 = (function (){var statearr_39206 = state_39204;
(statearr_39206[(7)] = inst_39201);

return statearr_39206;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_39204__$1,inst_39202);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__35072__auto__ = null;
var shadow$dom$state_machine__35072__auto____0 = (function (){
var statearr_39207 = [null,null,null,null,null,null,null,null];
(statearr_39207[(0)] = shadow$dom$state_machine__35072__auto__);

(statearr_39207[(1)] = (1));

return statearr_39207;
});
var shadow$dom$state_machine__35072__auto____1 = (function (state_39204){
while(true){
var ret_value__35073__auto__ = (function (){try{while(true){
var result__35074__auto__ = switch__35071__auto__(state_39204);
if(cljs.core.keyword_identical_QMARK_(result__35074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35074__auto__;
}
break;
}
}catch (e39208){var ex__35075__auto__ = e39208;
var statearr_39209_39628 = state_39204;
(statearr_39209_39628[(2)] = ex__35075__auto__);


if(cljs.core.seq((state_39204[(4)]))){
var statearr_39210_39629 = state_39204;
(statearr_39210_39629[(1)] = cljs.core.first((state_39204[(4)])));

} else {
throw ex__35075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39630 = state_39204;
state_39204 = G__39630;
continue;
} else {
return ret_value__35073__auto__;
}
break;
}
});
shadow$dom$state_machine__35072__auto__ = function(state_39204){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__35072__auto____0.call(this);
case 1:
return shadow$dom$state_machine__35072__auto____1.call(this,state_39204);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__35072__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__35072__auto____0;
shadow$dom$state_machine__35072__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__35072__auto____1;
return shadow$dom$state_machine__35072__auto__;
})()
})();
var state__35308__auto__ = (function (){var statearr_39211 = f__35307__auto__();
(statearr_39211[(6)] = c__35306__auto___39627);

return statearr_39211;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35308__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
