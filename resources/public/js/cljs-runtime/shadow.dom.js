goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_39110 = (function (this$){
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
return shadow$dom$IElement$_to_dom$dyn_39110(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_39111 = (function (this$){
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
return shadow$dom$SVGElement$_to_svg$dyn_39111(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__37985 = coll;
var G__37986 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__37985,G__37986) : shadow.dom.lazy_native_coll_seq.call(null,G__37985,G__37986));
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
var G__38011 = arguments.length;
switch (G__38011) {
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
var G__38018 = arguments.length;
switch (G__38018) {
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
var G__38029 = arguments.length;
switch (G__38029) {
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
var G__38035 = arguments.length;
switch (G__38035) {
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
var G__38043 = arguments.length;
switch (G__38043) {
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
var G__38056 = arguments.length;
switch (G__38056) {
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
}catch (e38065){if((e38065 instanceof Object)){
var e = e38065;
return console.log("didnt support attachEvent",el,e);
} else {
throw e38065;

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
var seq__38076 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__38077 = null;
var count__38078 = (0);
var i__38079 = (0);
while(true){
if((i__38079 < count__38078)){
var el = chunk__38077.cljs$core$IIndexed$_nth$arity$2(null,i__38079);
var handler_39128__$1 = ((function (seq__38076,chunk__38077,count__38078,i__38079,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__38076,chunk__38077,count__38078,i__38079,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_39128__$1);


var G__39130 = seq__38076;
var G__39131 = chunk__38077;
var G__39132 = count__38078;
var G__39133 = (i__38079 + (1));
seq__38076 = G__39130;
chunk__38077 = G__39131;
count__38078 = G__39132;
i__38079 = G__39133;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__38076);
if(temp__5735__auto__){
var seq__38076__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38076__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__38076__$1);
var G__39136 = cljs.core.chunk_rest(seq__38076__$1);
var G__39137 = c__4556__auto__;
var G__39138 = cljs.core.count(c__4556__auto__);
var G__39139 = (0);
seq__38076 = G__39136;
chunk__38077 = G__39137;
count__38078 = G__39138;
i__38079 = G__39139;
continue;
} else {
var el = cljs.core.first(seq__38076__$1);
var handler_39141__$1 = ((function (seq__38076,chunk__38077,count__38078,i__38079,el,seq__38076__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__38076,chunk__38077,count__38078,i__38079,el,seq__38076__$1,temp__5735__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_39141__$1);


var G__39146 = cljs.core.next(seq__38076__$1);
var G__39147 = null;
var G__39148 = (0);
var G__39149 = (0);
seq__38076 = G__39146;
chunk__38077 = G__39147;
count__38078 = G__39148;
i__38079 = G__39149;
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
var G__38093 = arguments.length;
switch (G__38093) {
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
var seq__38112 = cljs.core.seq(events);
var chunk__38113 = null;
var count__38114 = (0);
var i__38115 = (0);
while(true){
if((i__38115 < count__38114)){
var vec__38128 = chunk__38113.cljs$core$IIndexed$_nth$arity$2(null,i__38115);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38128,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38128,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__39153 = seq__38112;
var G__39154 = chunk__38113;
var G__39155 = count__38114;
var G__39156 = (i__38115 + (1));
seq__38112 = G__39153;
chunk__38113 = G__39154;
count__38114 = G__39155;
i__38115 = G__39156;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__38112);
if(temp__5735__auto__){
var seq__38112__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38112__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__38112__$1);
var G__39158 = cljs.core.chunk_rest(seq__38112__$1);
var G__39159 = c__4556__auto__;
var G__39160 = cljs.core.count(c__4556__auto__);
var G__39161 = (0);
seq__38112 = G__39158;
chunk__38113 = G__39159;
count__38114 = G__39160;
i__38115 = G__39161;
continue;
} else {
var vec__38133 = cljs.core.first(seq__38112__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38133,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38133,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__39162 = cljs.core.next(seq__38112__$1);
var G__39163 = null;
var G__39164 = (0);
var G__39165 = (0);
seq__38112 = G__39162;
chunk__38113 = G__39163;
count__38114 = G__39164;
i__38115 = G__39165;
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
var seq__38139 = cljs.core.seq(styles);
var chunk__38140 = null;
var count__38141 = (0);
var i__38142 = (0);
while(true){
if((i__38142 < count__38141)){
var vec__38164 = chunk__38140.cljs$core$IIndexed$_nth$arity$2(null,i__38142);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38164,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38164,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__39166 = seq__38139;
var G__39167 = chunk__38140;
var G__39168 = count__38141;
var G__39169 = (i__38142 + (1));
seq__38139 = G__39166;
chunk__38140 = G__39167;
count__38141 = G__39168;
i__38142 = G__39169;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__38139);
if(temp__5735__auto__){
var seq__38139__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38139__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__38139__$1);
var G__39171 = cljs.core.chunk_rest(seq__38139__$1);
var G__39172 = c__4556__auto__;
var G__39173 = cljs.core.count(c__4556__auto__);
var G__39174 = (0);
seq__38139 = G__39171;
chunk__38140 = G__39172;
count__38141 = G__39173;
i__38142 = G__39174;
continue;
} else {
var vec__38170 = cljs.core.first(seq__38139__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38170,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38170,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__39176 = cljs.core.next(seq__38139__$1);
var G__39177 = null;
var G__39178 = (0);
var G__39179 = (0);
seq__38139 = G__39176;
chunk__38140 = G__39177;
count__38141 = G__39178;
i__38142 = G__39179;
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
var G__38176_39182 = key;
var G__38176_39183__$1 = (((G__38176_39182 instanceof cljs.core.Keyword))?G__38176_39182.fqn:null);
switch (G__38176_39183__$1) {
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
var ks_39191 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4126__auto__ = goog.string.startsWith(ks_39191,"data-");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return goog.string.startsWith(ks_39191,"aria-");
}
})())){
el.setAttribute(ks_39191,value);
} else {
(el[ks_39191] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__38189){
var map__38190 = p__38189;
var map__38190__$1 = (((((!((map__38190 == null))))?(((((map__38190.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38190.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38190):map__38190);
var props = map__38190__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38190__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__38193 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38193,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38193,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38193,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__38197 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__38197,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__38197;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__38212 = arguments.length;
switch (G__38212) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__38239){
var vec__38245 = p__38239;
var seq__38246 = cljs.core.seq(vec__38245);
var first__38247 = cljs.core.first(seq__38246);
var seq__38246__$1 = cljs.core.next(seq__38246);
var nn = first__38247;
var first__38247__$1 = cljs.core.first(seq__38246__$1);
var seq__38246__$2 = cljs.core.next(seq__38246__$1);
var np = first__38247__$1;
var nc = seq__38246__$2;
var node = vec__38245;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__38248 = nn;
var G__38249 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__38248,G__38249) : create_fn.call(null,G__38248,G__38249));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__38250 = nn;
var G__38251 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__38250,G__38251) : create_fn.call(null,G__38250,G__38251));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__38252 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38252,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38252,(1),null);
var seq__38257_39251 = cljs.core.seq(node_children);
var chunk__38258_39253 = null;
var count__38259_39254 = (0);
var i__38260_39255 = (0);
while(true){
if((i__38260_39255 < count__38259_39254)){
var child_struct_39257 = chunk__38258_39253.cljs$core$IIndexed$_nth$arity$2(null,i__38260_39255);
var children_39258 = shadow.dom.dom_node(child_struct_39257);
if(cljs.core.seq_QMARK_(children_39258)){
var seq__38302_39259 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_39258));
var chunk__38304_39260 = null;
var count__38305_39261 = (0);
var i__38306_39262 = (0);
while(true){
if((i__38306_39262 < count__38305_39261)){
var child_39263 = chunk__38304_39260.cljs$core$IIndexed$_nth$arity$2(null,i__38306_39262);
if(cljs.core.truth_(child_39263)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_39263);


var G__39264 = seq__38302_39259;
var G__39265 = chunk__38304_39260;
var G__39266 = count__38305_39261;
var G__39267 = (i__38306_39262 + (1));
seq__38302_39259 = G__39264;
chunk__38304_39260 = G__39265;
count__38305_39261 = G__39266;
i__38306_39262 = G__39267;
continue;
} else {
var G__39268 = seq__38302_39259;
var G__39269 = chunk__38304_39260;
var G__39270 = count__38305_39261;
var G__39271 = (i__38306_39262 + (1));
seq__38302_39259 = G__39268;
chunk__38304_39260 = G__39269;
count__38305_39261 = G__39270;
i__38306_39262 = G__39271;
continue;
}
} else {
var temp__5735__auto___39272 = cljs.core.seq(seq__38302_39259);
if(temp__5735__auto___39272){
var seq__38302_39273__$1 = temp__5735__auto___39272;
if(cljs.core.chunked_seq_QMARK_(seq__38302_39273__$1)){
var c__4556__auto___39274 = cljs.core.chunk_first(seq__38302_39273__$1);
var G__39276 = cljs.core.chunk_rest(seq__38302_39273__$1);
var G__39277 = c__4556__auto___39274;
var G__39278 = cljs.core.count(c__4556__auto___39274);
var G__39279 = (0);
seq__38302_39259 = G__39276;
chunk__38304_39260 = G__39277;
count__38305_39261 = G__39278;
i__38306_39262 = G__39279;
continue;
} else {
var child_39280 = cljs.core.first(seq__38302_39273__$1);
if(cljs.core.truth_(child_39280)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_39280);


var G__39282 = cljs.core.next(seq__38302_39273__$1);
var G__39283 = null;
var G__39284 = (0);
var G__39285 = (0);
seq__38302_39259 = G__39282;
chunk__38304_39260 = G__39283;
count__38305_39261 = G__39284;
i__38306_39262 = G__39285;
continue;
} else {
var G__39289 = cljs.core.next(seq__38302_39273__$1);
var G__39290 = null;
var G__39291 = (0);
var G__39292 = (0);
seq__38302_39259 = G__39289;
chunk__38304_39260 = G__39290;
count__38305_39261 = G__39291;
i__38306_39262 = G__39292;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_39258);
}


var G__39293 = seq__38257_39251;
var G__39294 = chunk__38258_39253;
var G__39295 = count__38259_39254;
var G__39296 = (i__38260_39255 + (1));
seq__38257_39251 = G__39293;
chunk__38258_39253 = G__39294;
count__38259_39254 = G__39295;
i__38260_39255 = G__39296;
continue;
} else {
var temp__5735__auto___39298 = cljs.core.seq(seq__38257_39251);
if(temp__5735__auto___39298){
var seq__38257_39299__$1 = temp__5735__auto___39298;
if(cljs.core.chunked_seq_QMARK_(seq__38257_39299__$1)){
var c__4556__auto___39300 = cljs.core.chunk_first(seq__38257_39299__$1);
var G__39301 = cljs.core.chunk_rest(seq__38257_39299__$1);
var G__39302 = c__4556__auto___39300;
var G__39303 = cljs.core.count(c__4556__auto___39300);
var G__39304 = (0);
seq__38257_39251 = G__39301;
chunk__38258_39253 = G__39302;
count__38259_39254 = G__39303;
i__38260_39255 = G__39304;
continue;
} else {
var child_struct_39305 = cljs.core.first(seq__38257_39299__$1);
var children_39306 = shadow.dom.dom_node(child_struct_39305);
if(cljs.core.seq_QMARK_(children_39306)){
var seq__38401_39307 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_39306));
var chunk__38403_39308 = null;
var count__38404_39309 = (0);
var i__38405_39310 = (0);
while(true){
if((i__38405_39310 < count__38404_39309)){
var child_39311 = chunk__38403_39308.cljs$core$IIndexed$_nth$arity$2(null,i__38405_39310);
if(cljs.core.truth_(child_39311)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_39311);


var G__39312 = seq__38401_39307;
var G__39313 = chunk__38403_39308;
var G__39314 = count__38404_39309;
var G__39315 = (i__38405_39310 + (1));
seq__38401_39307 = G__39312;
chunk__38403_39308 = G__39313;
count__38404_39309 = G__39314;
i__38405_39310 = G__39315;
continue;
} else {
var G__39321 = seq__38401_39307;
var G__39322 = chunk__38403_39308;
var G__39323 = count__38404_39309;
var G__39324 = (i__38405_39310 + (1));
seq__38401_39307 = G__39321;
chunk__38403_39308 = G__39322;
count__38404_39309 = G__39323;
i__38405_39310 = G__39324;
continue;
}
} else {
var temp__5735__auto___39329__$1 = cljs.core.seq(seq__38401_39307);
if(temp__5735__auto___39329__$1){
var seq__38401_39330__$1 = temp__5735__auto___39329__$1;
if(cljs.core.chunked_seq_QMARK_(seq__38401_39330__$1)){
var c__4556__auto___39331 = cljs.core.chunk_first(seq__38401_39330__$1);
var G__39332 = cljs.core.chunk_rest(seq__38401_39330__$1);
var G__39333 = c__4556__auto___39331;
var G__39334 = cljs.core.count(c__4556__auto___39331);
var G__39335 = (0);
seq__38401_39307 = G__39332;
chunk__38403_39308 = G__39333;
count__38404_39309 = G__39334;
i__38405_39310 = G__39335;
continue;
} else {
var child_39336 = cljs.core.first(seq__38401_39330__$1);
if(cljs.core.truth_(child_39336)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_39336);


var G__39337 = cljs.core.next(seq__38401_39330__$1);
var G__39338 = null;
var G__39339 = (0);
var G__39340 = (0);
seq__38401_39307 = G__39337;
chunk__38403_39308 = G__39338;
count__38404_39309 = G__39339;
i__38405_39310 = G__39340;
continue;
} else {
var G__39342 = cljs.core.next(seq__38401_39330__$1);
var G__39343 = null;
var G__39344 = (0);
var G__39345 = (0);
seq__38401_39307 = G__39342;
chunk__38403_39308 = G__39343;
count__38404_39309 = G__39344;
i__38405_39310 = G__39345;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_39306);
}


var G__39347 = cljs.core.next(seq__38257_39299__$1);
var G__39348 = null;
var G__39349 = (0);
var G__39350 = (0);
seq__38257_39251 = G__39347;
chunk__38258_39253 = G__39348;
count__38259_39254 = G__39349;
i__38260_39255 = G__39350;
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
var seq__38468 = cljs.core.seq(node);
var chunk__38469 = null;
var count__38470 = (0);
var i__38471 = (0);
while(true){
if((i__38471 < count__38470)){
var n = chunk__38469.cljs$core$IIndexed$_nth$arity$2(null,i__38471);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__39351 = seq__38468;
var G__39352 = chunk__38469;
var G__39353 = count__38470;
var G__39354 = (i__38471 + (1));
seq__38468 = G__39351;
chunk__38469 = G__39352;
count__38470 = G__39353;
i__38471 = G__39354;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__38468);
if(temp__5735__auto__){
var seq__38468__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38468__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__38468__$1);
var G__39359 = cljs.core.chunk_rest(seq__38468__$1);
var G__39360 = c__4556__auto__;
var G__39361 = cljs.core.count(c__4556__auto__);
var G__39362 = (0);
seq__38468 = G__39359;
chunk__38469 = G__39360;
count__38470 = G__39361;
i__38471 = G__39362;
continue;
} else {
var n = cljs.core.first(seq__38468__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__39363 = cljs.core.next(seq__38468__$1);
var G__39364 = null;
var G__39365 = (0);
var G__39366 = (0);
seq__38468 = G__39363;
chunk__38469 = G__39364;
count__38470 = G__39365;
i__38471 = G__39366;
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
var G__38489 = arguments.length;
switch (G__38489) {
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
var G__38510 = arguments.length;
switch (G__38510) {
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
var G__38517 = arguments.length;
switch (G__38517) {
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
var len__4736__auto___39377 = arguments.length;
var i__4737__auto___39378 = (0);
while(true){
if((i__4737__auto___39378 < len__4736__auto___39377)){
args__4742__auto__.push((arguments[i__4737__auto___39378]));

var G__39383 = (i__4737__auto___39378 + (1));
i__4737__auto___39378 = G__39383;
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
var seq__38579_39384 = cljs.core.seq(nodes);
var chunk__38580_39385 = null;
var count__38581_39386 = (0);
var i__38582_39387 = (0);
while(true){
if((i__38582_39387 < count__38581_39386)){
var node_39395 = chunk__38580_39385.cljs$core$IIndexed$_nth$arity$2(null,i__38582_39387);
fragment.appendChild(shadow.dom._to_dom(node_39395));


var G__39396 = seq__38579_39384;
var G__39397 = chunk__38580_39385;
var G__39398 = count__38581_39386;
var G__39399 = (i__38582_39387 + (1));
seq__38579_39384 = G__39396;
chunk__38580_39385 = G__39397;
count__38581_39386 = G__39398;
i__38582_39387 = G__39399;
continue;
} else {
var temp__5735__auto___39400 = cljs.core.seq(seq__38579_39384);
if(temp__5735__auto___39400){
var seq__38579_39401__$1 = temp__5735__auto___39400;
if(cljs.core.chunked_seq_QMARK_(seq__38579_39401__$1)){
var c__4556__auto___39402 = cljs.core.chunk_first(seq__38579_39401__$1);
var G__39403 = cljs.core.chunk_rest(seq__38579_39401__$1);
var G__39404 = c__4556__auto___39402;
var G__39405 = cljs.core.count(c__4556__auto___39402);
var G__39406 = (0);
seq__38579_39384 = G__39403;
chunk__38580_39385 = G__39404;
count__38581_39386 = G__39405;
i__38582_39387 = G__39406;
continue;
} else {
var node_39407 = cljs.core.first(seq__38579_39401__$1);
fragment.appendChild(shadow.dom._to_dom(node_39407));


var G__39408 = cljs.core.next(seq__38579_39401__$1);
var G__39409 = null;
var G__39410 = (0);
var G__39411 = (0);
seq__38579_39384 = G__39408;
chunk__38580_39385 = G__39409;
count__38581_39386 = G__39410;
i__38582_39387 = G__39411;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq38563){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq38563));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__38603_39412 = cljs.core.seq(scripts);
var chunk__38604_39413 = null;
var count__38605_39414 = (0);
var i__38606_39415 = (0);
while(true){
if((i__38606_39415 < count__38605_39414)){
var vec__38616_39416 = chunk__38604_39413.cljs$core$IIndexed$_nth$arity$2(null,i__38606_39415);
var script_tag_39417 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38616_39416,(0),null);
var script_body_39418 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38616_39416,(1),null);
eval(script_body_39418);


var G__39419 = seq__38603_39412;
var G__39420 = chunk__38604_39413;
var G__39421 = count__38605_39414;
var G__39422 = (i__38606_39415 + (1));
seq__38603_39412 = G__39419;
chunk__38604_39413 = G__39420;
count__38605_39414 = G__39421;
i__38606_39415 = G__39422;
continue;
} else {
var temp__5735__auto___39423 = cljs.core.seq(seq__38603_39412);
if(temp__5735__auto___39423){
var seq__38603_39424__$1 = temp__5735__auto___39423;
if(cljs.core.chunked_seq_QMARK_(seq__38603_39424__$1)){
var c__4556__auto___39425 = cljs.core.chunk_first(seq__38603_39424__$1);
var G__39426 = cljs.core.chunk_rest(seq__38603_39424__$1);
var G__39427 = c__4556__auto___39425;
var G__39428 = cljs.core.count(c__4556__auto___39425);
var G__39429 = (0);
seq__38603_39412 = G__39426;
chunk__38604_39413 = G__39427;
count__38605_39414 = G__39428;
i__38606_39415 = G__39429;
continue;
} else {
var vec__38621_39433 = cljs.core.first(seq__38603_39424__$1);
var script_tag_39434 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38621_39433,(0),null);
var script_body_39435 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38621_39433,(1),null);
eval(script_body_39435);


var G__39436 = cljs.core.next(seq__38603_39424__$1);
var G__39437 = null;
var G__39438 = (0);
var G__39439 = (0);
seq__38603_39412 = G__39436;
chunk__38604_39413 = G__39437;
count__38605_39414 = G__39438;
i__38606_39415 = G__39439;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__38627){
var vec__38629 = p__38627;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38629,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38629,(1),null);
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
var G__38642 = arguments.length;
switch (G__38642) {
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
var seq__38695 = cljs.core.seq(style_keys);
var chunk__38696 = null;
var count__38697 = (0);
var i__38698 = (0);
while(true){
if((i__38698 < count__38697)){
var it = chunk__38696.cljs$core$IIndexed$_nth$arity$2(null,i__38698);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__39441 = seq__38695;
var G__39442 = chunk__38696;
var G__39443 = count__38697;
var G__39444 = (i__38698 + (1));
seq__38695 = G__39441;
chunk__38696 = G__39442;
count__38697 = G__39443;
i__38698 = G__39444;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__38695);
if(temp__5735__auto__){
var seq__38695__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38695__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__38695__$1);
var G__39445 = cljs.core.chunk_rest(seq__38695__$1);
var G__39446 = c__4556__auto__;
var G__39447 = cljs.core.count(c__4556__auto__);
var G__39448 = (0);
seq__38695 = G__39445;
chunk__38696 = G__39446;
count__38697 = G__39447;
i__38698 = G__39448;
continue;
} else {
var it = cljs.core.first(seq__38695__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__39449 = cljs.core.next(seq__38695__$1);
var G__39450 = null;
var G__39451 = (0);
var G__39452 = (0);
seq__38695 = G__39449;
chunk__38696 = G__39450;
count__38697 = G__39451;
i__38698 = G__39452;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k38705,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__38719 = k38705;
var G__38719__$1 = (((G__38719 instanceof cljs.core.Keyword))?G__38719.fqn:null);
switch (G__38719__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k38705,else__4383__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__38724){
var vec__38725 = p__38724;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38725,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38725,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__38704){
var self__ = this;
var G__38704__$1 = this;
return (new cljs.core.RecordIter((0),G__38704__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this38706,other38707){
var self__ = this;
var this38706__$1 = this;
return (((!((other38707 == null)))) && ((this38706__$1.constructor === other38707.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this38706__$1.x,other38707.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this38706__$1.y,other38707.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this38706__$1.__extmap,other38707.__extmap)));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__38704){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__38771 = cljs.core.keyword_identical_QMARK_;
var expr__38772 = k__4388__auto__;
if(cljs.core.truth_((pred__38771.cljs$core$IFn$_invoke$arity$2 ? pred__38771.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__38772) : pred__38771.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__38772)))){
return (new shadow.dom.Coordinate(G__38704,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__38771.cljs$core$IFn$_invoke$arity$2 ? pred__38771.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__38772) : pred__38771.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__38772)))){
return (new shadow.dom.Coordinate(self__.x,G__38704,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__38704),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__38704){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__38704,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__38713){
var extmap__4419__auto__ = (function (){var G__38806 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__38713,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__38713)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__38806);
} else {
return G__38806;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__38713),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__38713),null,cljs.core.not_empty(extmap__4419__auto__),null));
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k38824,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__38835 = k38824;
var G__38835__$1 = (((G__38835 instanceof cljs.core.Keyword))?G__38835.fqn:null);
switch (G__38835__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k38824,else__4383__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__38843){
var vec__38846 = p__38843;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38846,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38846,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__38823){
var self__ = this;
var G__38823__$1 = this;
return (new cljs.core.RecordIter((0),G__38823__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this38825,other38826){
var self__ = this;
var this38825__$1 = this;
return (((!((other38826 == null)))) && ((this38825__$1.constructor === other38826.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this38825__$1.w,other38826.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this38825__$1.h,other38826.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this38825__$1.__extmap,other38826.__extmap)));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__38823){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__38863 = cljs.core.keyword_identical_QMARK_;
var expr__38864 = k__4388__auto__;
if(cljs.core.truth_((pred__38863.cljs$core$IFn$_invoke$arity$2 ? pred__38863.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__38864) : pred__38863.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__38864)))){
return (new shadow.dom.Size(G__38823,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__38863.cljs$core$IFn$_invoke$arity$2 ? pred__38863.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__38864) : pred__38863.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__38864)))){
return (new shadow.dom.Size(self__.w,G__38823,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__38823),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__38823){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__38823,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__38828){
var extmap__4419__auto__ = (function (){var G__38876 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__38828,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__38828)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__38876);
} else {
return G__38876;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__38828),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__38828),null,cljs.core.not_empty(extmap__4419__auto__),null));
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
var G__39459 = (i + (1));
var G__39460 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__39459;
ret = G__39460;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__38906){
var vec__38907 = p__38906;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38907,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38907,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__38911 = arguments.length;
switch (G__38911) {
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
var G__39475 = ps;
var G__39476 = (i + (1));
el__$1 = G__39475;
i = G__39476;
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
var vec__38931 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38931,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38931,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38931,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__38934_39489 = cljs.core.seq(props);
var chunk__38935_39490 = null;
var count__38936_39491 = (0);
var i__38937_39492 = (0);
while(true){
if((i__38937_39492 < count__38936_39491)){
var vec__38947_39493 = chunk__38935_39490.cljs$core$IIndexed$_nth$arity$2(null,i__38937_39492);
var k_39494 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38947_39493,(0),null);
var v_39495 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38947_39493,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_39494);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_39494),v_39495);


var G__39498 = seq__38934_39489;
var G__39499 = chunk__38935_39490;
var G__39500 = count__38936_39491;
var G__39501 = (i__38937_39492 + (1));
seq__38934_39489 = G__39498;
chunk__38935_39490 = G__39499;
count__38936_39491 = G__39500;
i__38937_39492 = G__39501;
continue;
} else {
var temp__5735__auto___39502 = cljs.core.seq(seq__38934_39489);
if(temp__5735__auto___39502){
var seq__38934_39504__$1 = temp__5735__auto___39502;
if(cljs.core.chunked_seq_QMARK_(seq__38934_39504__$1)){
var c__4556__auto___39505 = cljs.core.chunk_first(seq__38934_39504__$1);
var G__39506 = cljs.core.chunk_rest(seq__38934_39504__$1);
var G__39507 = c__4556__auto___39505;
var G__39508 = cljs.core.count(c__4556__auto___39505);
var G__39509 = (0);
seq__38934_39489 = G__39506;
chunk__38935_39490 = G__39507;
count__38936_39491 = G__39508;
i__38937_39492 = G__39509;
continue;
} else {
var vec__38953_39510 = cljs.core.first(seq__38934_39504__$1);
var k_39511 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38953_39510,(0),null);
var v_39512 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38953_39510,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_39511);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_39511),v_39512);


var G__39513 = cljs.core.next(seq__38934_39504__$1);
var G__39514 = null;
var G__39515 = (0);
var G__39516 = (0);
seq__38934_39489 = G__39513;
chunk__38935_39490 = G__39514;
count__38936_39491 = G__39515;
i__38937_39492 = G__39516;
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
var vec__38966 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38966,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38966,(1),null);
var seq__38976_39520 = cljs.core.seq(node_children);
var chunk__38978_39521 = null;
var count__38979_39522 = (0);
var i__38980_39523 = (0);
while(true){
if((i__38980_39523 < count__38979_39522)){
var child_struct_39524 = chunk__38978_39521.cljs$core$IIndexed$_nth$arity$2(null,i__38980_39523);
if((!((child_struct_39524 == null)))){
if(typeof child_struct_39524 === 'string'){
var text_39529 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_39529),child_struct_39524].join(''));
} else {
var children_39531 = shadow.dom.svg_node(child_struct_39524);
if(cljs.core.seq_QMARK_(children_39531)){
var seq__39064_39532 = cljs.core.seq(children_39531);
var chunk__39066_39533 = null;
var count__39067_39534 = (0);
var i__39068_39535 = (0);
while(true){
if((i__39068_39535 < count__39067_39534)){
var child_39536 = chunk__39066_39533.cljs$core$IIndexed$_nth$arity$2(null,i__39068_39535);
if(cljs.core.truth_(child_39536)){
node.appendChild(child_39536);


var G__39537 = seq__39064_39532;
var G__39538 = chunk__39066_39533;
var G__39539 = count__39067_39534;
var G__39540 = (i__39068_39535 + (1));
seq__39064_39532 = G__39537;
chunk__39066_39533 = G__39538;
count__39067_39534 = G__39539;
i__39068_39535 = G__39540;
continue;
} else {
var G__39542 = seq__39064_39532;
var G__39543 = chunk__39066_39533;
var G__39544 = count__39067_39534;
var G__39545 = (i__39068_39535 + (1));
seq__39064_39532 = G__39542;
chunk__39066_39533 = G__39543;
count__39067_39534 = G__39544;
i__39068_39535 = G__39545;
continue;
}
} else {
var temp__5735__auto___39547 = cljs.core.seq(seq__39064_39532);
if(temp__5735__auto___39547){
var seq__39064_39551__$1 = temp__5735__auto___39547;
if(cljs.core.chunked_seq_QMARK_(seq__39064_39551__$1)){
var c__4556__auto___39552 = cljs.core.chunk_first(seq__39064_39551__$1);
var G__39553 = cljs.core.chunk_rest(seq__39064_39551__$1);
var G__39554 = c__4556__auto___39552;
var G__39555 = cljs.core.count(c__4556__auto___39552);
var G__39556 = (0);
seq__39064_39532 = G__39553;
chunk__39066_39533 = G__39554;
count__39067_39534 = G__39555;
i__39068_39535 = G__39556;
continue;
} else {
var child_39557 = cljs.core.first(seq__39064_39551__$1);
if(cljs.core.truth_(child_39557)){
node.appendChild(child_39557);


var G__39558 = cljs.core.next(seq__39064_39551__$1);
var G__39559 = null;
var G__39560 = (0);
var G__39561 = (0);
seq__39064_39532 = G__39558;
chunk__39066_39533 = G__39559;
count__39067_39534 = G__39560;
i__39068_39535 = G__39561;
continue;
} else {
var G__39562 = cljs.core.next(seq__39064_39551__$1);
var G__39563 = null;
var G__39564 = (0);
var G__39565 = (0);
seq__39064_39532 = G__39562;
chunk__39066_39533 = G__39563;
count__39067_39534 = G__39564;
i__39068_39535 = G__39565;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_39531);
}
}


var G__39566 = seq__38976_39520;
var G__39567 = chunk__38978_39521;
var G__39568 = count__38979_39522;
var G__39569 = (i__38980_39523 + (1));
seq__38976_39520 = G__39566;
chunk__38978_39521 = G__39567;
count__38979_39522 = G__39568;
i__38980_39523 = G__39569;
continue;
} else {
var G__39570 = seq__38976_39520;
var G__39571 = chunk__38978_39521;
var G__39572 = count__38979_39522;
var G__39573 = (i__38980_39523 + (1));
seq__38976_39520 = G__39570;
chunk__38978_39521 = G__39571;
count__38979_39522 = G__39572;
i__38980_39523 = G__39573;
continue;
}
} else {
var temp__5735__auto___39574 = cljs.core.seq(seq__38976_39520);
if(temp__5735__auto___39574){
var seq__38976_39575__$1 = temp__5735__auto___39574;
if(cljs.core.chunked_seq_QMARK_(seq__38976_39575__$1)){
var c__4556__auto___39576 = cljs.core.chunk_first(seq__38976_39575__$1);
var G__39577 = cljs.core.chunk_rest(seq__38976_39575__$1);
var G__39578 = c__4556__auto___39576;
var G__39579 = cljs.core.count(c__4556__auto___39576);
var G__39580 = (0);
seq__38976_39520 = G__39577;
chunk__38978_39521 = G__39578;
count__38979_39522 = G__39579;
i__38980_39523 = G__39580;
continue;
} else {
var child_struct_39581 = cljs.core.first(seq__38976_39575__$1);
if((!((child_struct_39581 == null)))){
if(typeof child_struct_39581 === 'string'){
var text_39582 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_39582),child_struct_39581].join(''));
} else {
var children_39583 = shadow.dom.svg_node(child_struct_39581);
if(cljs.core.seq_QMARK_(children_39583)){
var seq__39076_39584 = cljs.core.seq(children_39583);
var chunk__39078_39585 = null;
var count__39079_39586 = (0);
var i__39080_39587 = (0);
while(true){
if((i__39080_39587 < count__39079_39586)){
var child_39588 = chunk__39078_39585.cljs$core$IIndexed$_nth$arity$2(null,i__39080_39587);
if(cljs.core.truth_(child_39588)){
node.appendChild(child_39588);


var G__39589 = seq__39076_39584;
var G__39590 = chunk__39078_39585;
var G__39591 = count__39079_39586;
var G__39592 = (i__39080_39587 + (1));
seq__39076_39584 = G__39589;
chunk__39078_39585 = G__39590;
count__39079_39586 = G__39591;
i__39080_39587 = G__39592;
continue;
} else {
var G__39593 = seq__39076_39584;
var G__39594 = chunk__39078_39585;
var G__39595 = count__39079_39586;
var G__39596 = (i__39080_39587 + (1));
seq__39076_39584 = G__39593;
chunk__39078_39585 = G__39594;
count__39079_39586 = G__39595;
i__39080_39587 = G__39596;
continue;
}
} else {
var temp__5735__auto___39597__$1 = cljs.core.seq(seq__39076_39584);
if(temp__5735__auto___39597__$1){
var seq__39076_39598__$1 = temp__5735__auto___39597__$1;
if(cljs.core.chunked_seq_QMARK_(seq__39076_39598__$1)){
var c__4556__auto___39599 = cljs.core.chunk_first(seq__39076_39598__$1);
var G__39600 = cljs.core.chunk_rest(seq__39076_39598__$1);
var G__39601 = c__4556__auto___39599;
var G__39602 = cljs.core.count(c__4556__auto___39599);
var G__39603 = (0);
seq__39076_39584 = G__39600;
chunk__39078_39585 = G__39601;
count__39079_39586 = G__39602;
i__39080_39587 = G__39603;
continue;
} else {
var child_39604 = cljs.core.first(seq__39076_39598__$1);
if(cljs.core.truth_(child_39604)){
node.appendChild(child_39604);


var G__39605 = cljs.core.next(seq__39076_39598__$1);
var G__39606 = null;
var G__39607 = (0);
var G__39608 = (0);
seq__39076_39584 = G__39605;
chunk__39078_39585 = G__39606;
count__39079_39586 = G__39607;
i__39080_39587 = G__39608;
continue;
} else {
var G__39609 = cljs.core.next(seq__39076_39598__$1);
var G__39610 = null;
var G__39611 = (0);
var G__39612 = (0);
seq__39076_39584 = G__39609;
chunk__39078_39585 = G__39610;
count__39079_39586 = G__39611;
i__39080_39587 = G__39612;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_39583);
}
}


var G__39613 = cljs.core.next(seq__38976_39575__$1);
var G__39614 = null;
var G__39615 = (0);
var G__39616 = (0);
seq__38976_39520 = G__39613;
chunk__38978_39521 = G__39614;
count__38979_39522 = G__39615;
i__38980_39523 = G__39616;
continue;
} else {
var G__39617 = cljs.core.next(seq__38976_39575__$1);
var G__39618 = null;
var G__39619 = (0);
var G__39620 = (0);
seq__38976_39520 = G__39617;
chunk__38978_39521 = G__39618;
count__38979_39522 = G__39619;
i__38980_39523 = G__39620;
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
var len__4736__auto___39624 = arguments.length;
var i__4737__auto___39625 = (0);
while(true){
if((i__4737__auto___39625 < len__4736__auto___39624)){
args__4742__auto__.push((arguments[i__4737__auto___39625]));

var G__39626 = (i__4737__auto___39625 + (1));
i__4737__auto___39625 = G__39626;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq39085){
var G__39086 = cljs.core.first(seq39085);
var seq39085__$1 = cljs.core.next(seq39085);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39086,seq39085__$1);
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
var G__39089 = arguments.length;
switch (G__39089) {
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
var c__35295__auto___39631 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35296__auto__ = (function (){var switch__35066__auto__ = (function (state_39097){
var state_val_39098 = (state_39097[(1)]);
if((state_val_39098 === (1))){
var state_39097__$1 = state_39097;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39097__$1,(2),once_or_cleanup);
} else {
if((state_val_39098 === (2))){
var inst_39094 = (state_39097[(2)]);
var inst_39095 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_39097__$1 = (function (){var statearr_39101 = state_39097;
(statearr_39101[(7)] = inst_39094);

return statearr_39101;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_39097__$1,inst_39095);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__35067__auto__ = null;
var shadow$dom$state_machine__35067__auto____0 = (function (){
var statearr_39104 = [null,null,null,null,null,null,null,null];
(statearr_39104[(0)] = shadow$dom$state_machine__35067__auto__);

(statearr_39104[(1)] = (1));

return statearr_39104;
});
var shadow$dom$state_machine__35067__auto____1 = (function (state_39097){
while(true){
var ret_value__35068__auto__ = (function (){try{while(true){
var result__35069__auto__ = switch__35066__auto__(state_39097);
if(cljs.core.keyword_identical_QMARK_(result__35069__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35069__auto__;
}
break;
}
}catch (e39106){var ex__35070__auto__ = e39106;
var statearr_39107_39632 = state_39097;
(statearr_39107_39632[(2)] = ex__35070__auto__);


if(cljs.core.seq((state_39097[(4)]))){
var statearr_39108_39634 = state_39097;
(statearr_39108_39634[(1)] = cljs.core.first((state_39097[(4)])));

} else {
throw ex__35070__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39635 = state_39097;
state_39097 = G__39635;
continue;
} else {
return ret_value__35068__auto__;
}
break;
}
});
shadow$dom$state_machine__35067__auto__ = function(state_39097){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__35067__auto____0.call(this);
case 1:
return shadow$dom$state_machine__35067__auto____1.call(this,state_39097);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__35067__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__35067__auto____0;
shadow$dom$state_machine__35067__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__35067__auto____1;
return shadow$dom$state_machine__35067__auto__;
})()
})();
var state__35297__auto__ = (function (){var statearr_39109 = f__35296__auto__();
(statearr_39109[(6)] = c__35295__auto___39631);

return statearr_39109;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35297__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
