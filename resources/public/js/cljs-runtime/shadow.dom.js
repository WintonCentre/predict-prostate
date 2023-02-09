goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_38989 = (function (this$){
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
return shadow$dom$IElement$_to_dom$dyn_38989(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_38992 = (function (this$){
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
return shadow$dom$SVGElement$_to_svg$dyn_38992(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__38056 = coll;
var G__38057 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__38056,G__38057) : shadow.dom.lazy_native_coll_seq.call(null,G__38056,G__38057));
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
var G__38070 = arguments.length;
switch (G__38070) {
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
var G__38074 = arguments.length;
switch (G__38074) {
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
var G__38082 = arguments.length;
switch (G__38082) {
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
var G__38093 = arguments.length;
switch (G__38093) {
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
var G__38099 = arguments.length;
switch (G__38099) {
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
var G__38109 = arguments.length;
switch (G__38109) {
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
}catch (e38126){if((e38126 instanceof Object)){
var e = e38126;
return console.log("didnt support attachEvent",el,e);
} else {
throw e38126;

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
var seq__38134 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__38135 = null;
var count__38136 = (0);
var i__38137 = (0);
while(true){
if((i__38137 < count__38136)){
var el = chunk__38135.cljs$core$IIndexed$_nth$arity$2(null,i__38137);
var handler_39063__$1 = ((function (seq__38134,chunk__38135,count__38136,i__38137,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__38134,chunk__38135,count__38136,i__38137,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_39063__$1);


var G__39064 = seq__38134;
var G__39065 = chunk__38135;
var G__39066 = count__38136;
var G__39067 = (i__38137 + (1));
seq__38134 = G__39064;
chunk__38135 = G__39065;
count__38136 = G__39066;
i__38137 = G__39067;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__38134);
if(temp__5753__auto__){
var seq__38134__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38134__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__38134__$1);
var G__39068 = cljs.core.chunk_rest(seq__38134__$1);
var G__39069 = c__4638__auto__;
var G__39070 = cljs.core.count(c__4638__auto__);
var G__39071 = (0);
seq__38134 = G__39068;
chunk__38135 = G__39069;
count__38136 = G__39070;
i__38137 = G__39071;
continue;
} else {
var el = cljs.core.first(seq__38134__$1);
var handler_39072__$1 = ((function (seq__38134,chunk__38135,count__38136,i__38137,el,seq__38134__$1,temp__5753__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__38134,chunk__38135,count__38136,i__38137,el,seq__38134__$1,temp__5753__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_39072__$1);


var G__39073 = cljs.core.next(seq__38134__$1);
var G__39074 = null;
var G__39075 = (0);
var G__39076 = (0);
seq__38134 = G__39073;
chunk__38135 = G__39074;
count__38136 = G__39075;
i__38137 = G__39076;
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
var G__38152 = arguments.length;
switch (G__38152) {
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
var seq__38161 = cljs.core.seq(events);
var chunk__38162 = null;
var count__38163 = (0);
var i__38164 = (0);
while(true){
if((i__38164 < count__38163)){
var vec__38181 = chunk__38162.cljs$core$IIndexed$_nth$arity$2(null,i__38164);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38181,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38181,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__39078 = seq__38161;
var G__39079 = chunk__38162;
var G__39080 = count__38163;
var G__39081 = (i__38164 + (1));
seq__38161 = G__39078;
chunk__38162 = G__39079;
count__38163 = G__39080;
i__38164 = G__39081;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__38161);
if(temp__5753__auto__){
var seq__38161__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38161__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__38161__$1);
var G__39084 = cljs.core.chunk_rest(seq__38161__$1);
var G__39085 = c__4638__auto__;
var G__39086 = cljs.core.count(c__4638__auto__);
var G__39087 = (0);
seq__38161 = G__39084;
chunk__38162 = G__39085;
count__38163 = G__39086;
i__38164 = G__39087;
continue;
} else {
var vec__38187 = cljs.core.first(seq__38161__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38187,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38187,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__39088 = cljs.core.next(seq__38161__$1);
var G__39089 = null;
var G__39090 = (0);
var G__39091 = (0);
seq__38161 = G__39088;
chunk__38162 = G__39089;
count__38163 = G__39090;
i__38164 = G__39091;
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
var seq__38195 = cljs.core.seq(styles);
var chunk__38196 = null;
var count__38197 = (0);
var i__38198 = (0);
while(true){
if((i__38198 < count__38197)){
var vec__38213 = chunk__38196.cljs$core$IIndexed$_nth$arity$2(null,i__38198);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38213,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38213,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__39092 = seq__38195;
var G__39093 = chunk__38196;
var G__39094 = count__38197;
var G__39095 = (i__38198 + (1));
seq__38195 = G__39092;
chunk__38196 = G__39093;
count__38197 = G__39094;
i__38198 = G__39095;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__38195);
if(temp__5753__auto__){
var seq__38195__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38195__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__38195__$1);
var G__39097 = cljs.core.chunk_rest(seq__38195__$1);
var G__39098 = c__4638__auto__;
var G__39099 = cljs.core.count(c__4638__auto__);
var G__39100 = (0);
seq__38195 = G__39097;
chunk__38196 = G__39098;
count__38197 = G__39099;
i__38198 = G__39100;
continue;
} else {
var vec__38219 = cljs.core.first(seq__38195__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38219,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38219,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__39101 = cljs.core.next(seq__38195__$1);
var G__39102 = null;
var G__39103 = (0);
var G__39104 = (0);
seq__38195 = G__39101;
chunk__38196 = G__39102;
count__38197 = G__39103;
i__38198 = G__39104;
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
var G__38224_39105 = key;
var G__38224_39106__$1 = (((G__38224_39105 instanceof cljs.core.Keyword))?G__38224_39105.fqn:null);
switch (G__38224_39106__$1) {
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
var ks_39108 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4212__auto__ = goog.string.startsWith(ks_39108,"data-");
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return goog.string.startsWith(ks_39108,"aria-");
}
})())){
el.setAttribute(ks_39108,value);
} else {
(el[ks_39108] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__38268){
var map__38272 = p__38268;
var map__38272__$1 = cljs.core.__destructure_map(map__38272);
var props = map__38272__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38272__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__38279 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38279,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38279,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38279,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__38288 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__38288,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__38288;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__38297 = arguments.length;
switch (G__38297) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__38307){
var vec__38309 = p__38307;
var seq__38310 = cljs.core.seq(vec__38309);
var first__38311 = cljs.core.first(seq__38310);
var seq__38310__$1 = cljs.core.next(seq__38310);
var nn = first__38311;
var first__38311__$1 = cljs.core.first(seq__38310__$1);
var seq__38310__$2 = cljs.core.next(seq__38310__$1);
var np = first__38311__$1;
var nc = seq__38310__$2;
var node = vec__38309;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__38314 = nn;
var G__38315 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__38314,G__38315) : create_fn.call(null,G__38314,G__38315));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__38316 = nn;
var G__38317 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__38316,G__38317) : create_fn.call(null,G__38316,G__38317));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__38319 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38319,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38319,(1),null);
var seq__38323_39129 = cljs.core.seq(node_children);
var chunk__38324_39130 = null;
var count__38325_39131 = (0);
var i__38326_39132 = (0);
while(true){
if((i__38326_39132 < count__38325_39131)){
var child_struct_39133 = chunk__38324_39130.cljs$core$IIndexed$_nth$arity$2(null,i__38326_39132);
var children_39134 = shadow.dom.dom_node(child_struct_39133);
if(cljs.core.seq_QMARK_(children_39134)){
var seq__38374_39135 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_39134));
var chunk__38376_39136 = null;
var count__38377_39137 = (0);
var i__38378_39138 = (0);
while(true){
if((i__38378_39138 < count__38377_39137)){
var child_39139 = chunk__38376_39136.cljs$core$IIndexed$_nth$arity$2(null,i__38378_39138);
if(cljs.core.truth_(child_39139)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_39139);


var G__39140 = seq__38374_39135;
var G__39141 = chunk__38376_39136;
var G__39142 = count__38377_39137;
var G__39143 = (i__38378_39138 + (1));
seq__38374_39135 = G__39140;
chunk__38376_39136 = G__39141;
count__38377_39137 = G__39142;
i__38378_39138 = G__39143;
continue;
} else {
var G__39144 = seq__38374_39135;
var G__39145 = chunk__38376_39136;
var G__39146 = count__38377_39137;
var G__39147 = (i__38378_39138 + (1));
seq__38374_39135 = G__39144;
chunk__38376_39136 = G__39145;
count__38377_39137 = G__39146;
i__38378_39138 = G__39147;
continue;
}
} else {
var temp__5753__auto___39148 = cljs.core.seq(seq__38374_39135);
if(temp__5753__auto___39148){
var seq__38374_39153__$1 = temp__5753__auto___39148;
if(cljs.core.chunked_seq_QMARK_(seq__38374_39153__$1)){
var c__4638__auto___39154 = cljs.core.chunk_first(seq__38374_39153__$1);
var G__39155 = cljs.core.chunk_rest(seq__38374_39153__$1);
var G__39156 = c__4638__auto___39154;
var G__39157 = cljs.core.count(c__4638__auto___39154);
var G__39158 = (0);
seq__38374_39135 = G__39155;
chunk__38376_39136 = G__39156;
count__38377_39137 = G__39157;
i__38378_39138 = G__39158;
continue;
} else {
var child_39162 = cljs.core.first(seq__38374_39153__$1);
if(cljs.core.truth_(child_39162)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_39162);


var G__39163 = cljs.core.next(seq__38374_39153__$1);
var G__39164 = null;
var G__39165 = (0);
var G__39166 = (0);
seq__38374_39135 = G__39163;
chunk__38376_39136 = G__39164;
count__38377_39137 = G__39165;
i__38378_39138 = G__39166;
continue;
} else {
var G__39167 = cljs.core.next(seq__38374_39153__$1);
var G__39168 = null;
var G__39169 = (0);
var G__39170 = (0);
seq__38374_39135 = G__39167;
chunk__38376_39136 = G__39168;
count__38377_39137 = G__39169;
i__38378_39138 = G__39170;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_39134);
}


var G__39171 = seq__38323_39129;
var G__39172 = chunk__38324_39130;
var G__39173 = count__38325_39131;
var G__39174 = (i__38326_39132 + (1));
seq__38323_39129 = G__39171;
chunk__38324_39130 = G__39172;
count__38325_39131 = G__39173;
i__38326_39132 = G__39174;
continue;
} else {
var temp__5753__auto___39175 = cljs.core.seq(seq__38323_39129);
if(temp__5753__auto___39175){
var seq__38323_39176__$1 = temp__5753__auto___39175;
if(cljs.core.chunked_seq_QMARK_(seq__38323_39176__$1)){
var c__4638__auto___39177 = cljs.core.chunk_first(seq__38323_39176__$1);
var G__39178 = cljs.core.chunk_rest(seq__38323_39176__$1);
var G__39179 = c__4638__auto___39177;
var G__39180 = cljs.core.count(c__4638__auto___39177);
var G__39181 = (0);
seq__38323_39129 = G__39178;
chunk__38324_39130 = G__39179;
count__38325_39131 = G__39180;
i__38326_39132 = G__39181;
continue;
} else {
var child_struct_39182 = cljs.core.first(seq__38323_39176__$1);
var children_39183 = shadow.dom.dom_node(child_struct_39182);
if(cljs.core.seq_QMARK_(children_39183)){
var seq__38386_39188 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_39183));
var chunk__38388_39189 = null;
var count__38389_39190 = (0);
var i__38390_39191 = (0);
while(true){
if((i__38390_39191 < count__38389_39190)){
var child_39194 = chunk__38388_39189.cljs$core$IIndexed$_nth$arity$2(null,i__38390_39191);
if(cljs.core.truth_(child_39194)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_39194);


var G__39200 = seq__38386_39188;
var G__39201 = chunk__38388_39189;
var G__39202 = count__38389_39190;
var G__39203 = (i__38390_39191 + (1));
seq__38386_39188 = G__39200;
chunk__38388_39189 = G__39201;
count__38389_39190 = G__39202;
i__38390_39191 = G__39203;
continue;
} else {
var G__39207 = seq__38386_39188;
var G__39208 = chunk__38388_39189;
var G__39209 = count__38389_39190;
var G__39210 = (i__38390_39191 + (1));
seq__38386_39188 = G__39207;
chunk__38388_39189 = G__39208;
count__38389_39190 = G__39209;
i__38390_39191 = G__39210;
continue;
}
} else {
var temp__5753__auto___39211__$1 = cljs.core.seq(seq__38386_39188);
if(temp__5753__auto___39211__$1){
var seq__38386_39212__$1 = temp__5753__auto___39211__$1;
if(cljs.core.chunked_seq_QMARK_(seq__38386_39212__$1)){
var c__4638__auto___39213 = cljs.core.chunk_first(seq__38386_39212__$1);
var G__39214 = cljs.core.chunk_rest(seq__38386_39212__$1);
var G__39215 = c__4638__auto___39213;
var G__39216 = cljs.core.count(c__4638__auto___39213);
var G__39217 = (0);
seq__38386_39188 = G__39214;
chunk__38388_39189 = G__39215;
count__38389_39190 = G__39216;
i__38390_39191 = G__39217;
continue;
} else {
var child_39218 = cljs.core.first(seq__38386_39212__$1);
if(cljs.core.truth_(child_39218)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_39218);


var G__39223 = cljs.core.next(seq__38386_39212__$1);
var G__39224 = null;
var G__39225 = (0);
var G__39226 = (0);
seq__38386_39188 = G__39223;
chunk__38388_39189 = G__39224;
count__38389_39190 = G__39225;
i__38390_39191 = G__39226;
continue;
} else {
var G__39227 = cljs.core.next(seq__38386_39212__$1);
var G__39228 = null;
var G__39229 = (0);
var G__39230 = (0);
seq__38386_39188 = G__39227;
chunk__38388_39189 = G__39228;
count__38389_39190 = G__39229;
i__38390_39191 = G__39230;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_39183);
}


var G__39236 = cljs.core.next(seq__38323_39176__$1);
var G__39237 = null;
var G__39238 = (0);
var G__39239 = (0);
seq__38323_39129 = G__39236;
chunk__38324_39130 = G__39237;
count__38325_39131 = G__39238;
i__38326_39132 = G__39239;
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
var seq__38425 = cljs.core.seq(node);
var chunk__38426 = null;
var count__38427 = (0);
var i__38428 = (0);
while(true){
if((i__38428 < count__38427)){
var n = chunk__38426.cljs$core$IIndexed$_nth$arity$2(null,i__38428);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__39263 = seq__38425;
var G__39264 = chunk__38426;
var G__39265 = count__38427;
var G__39266 = (i__38428 + (1));
seq__38425 = G__39263;
chunk__38426 = G__39264;
count__38427 = G__39265;
i__38428 = G__39266;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__38425);
if(temp__5753__auto__){
var seq__38425__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38425__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__38425__$1);
var G__39274 = cljs.core.chunk_rest(seq__38425__$1);
var G__39275 = c__4638__auto__;
var G__39276 = cljs.core.count(c__4638__auto__);
var G__39277 = (0);
seq__38425 = G__39274;
chunk__38426 = G__39275;
count__38427 = G__39276;
i__38428 = G__39277;
continue;
} else {
var n = cljs.core.first(seq__38425__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__39280 = cljs.core.next(seq__38425__$1);
var G__39281 = null;
var G__39282 = (0);
var G__39283 = (0);
seq__38425 = G__39280;
chunk__38426 = G__39281;
count__38427 = G__39282;
i__38428 = G__39283;
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
var G__38443 = arguments.length;
switch (G__38443) {
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
var G__38451 = arguments.length;
switch (G__38451) {
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
var G__38487 = arguments.length;
switch (G__38487) {
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
var len__4818__auto___39310 = arguments.length;
var i__4819__auto___39311 = (0);
while(true){
if((i__4819__auto___39311 < len__4818__auto___39310)){
args__4824__auto__.push((arguments[i__4819__auto___39311]));

var G__39312 = (i__4819__auto___39311 + (1));
i__4819__auto___39311 = G__39312;
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
var seq__38518_39313 = cljs.core.seq(nodes);
var chunk__38519_39314 = null;
var count__38520_39315 = (0);
var i__38521_39316 = (0);
while(true){
if((i__38521_39316 < count__38520_39315)){
var node_39317 = chunk__38519_39314.cljs$core$IIndexed$_nth$arity$2(null,i__38521_39316);
fragment.appendChild(shadow.dom._to_dom(node_39317));


var G__39319 = seq__38518_39313;
var G__39320 = chunk__38519_39314;
var G__39321 = count__38520_39315;
var G__39322 = (i__38521_39316 + (1));
seq__38518_39313 = G__39319;
chunk__38519_39314 = G__39320;
count__38520_39315 = G__39321;
i__38521_39316 = G__39322;
continue;
} else {
var temp__5753__auto___39323 = cljs.core.seq(seq__38518_39313);
if(temp__5753__auto___39323){
var seq__38518_39324__$1 = temp__5753__auto___39323;
if(cljs.core.chunked_seq_QMARK_(seq__38518_39324__$1)){
var c__4638__auto___39325 = cljs.core.chunk_first(seq__38518_39324__$1);
var G__39326 = cljs.core.chunk_rest(seq__38518_39324__$1);
var G__39327 = c__4638__auto___39325;
var G__39328 = cljs.core.count(c__4638__auto___39325);
var G__39329 = (0);
seq__38518_39313 = G__39326;
chunk__38519_39314 = G__39327;
count__38520_39315 = G__39328;
i__38521_39316 = G__39329;
continue;
} else {
var node_39330 = cljs.core.first(seq__38518_39324__$1);
fragment.appendChild(shadow.dom._to_dom(node_39330));


var G__39331 = cljs.core.next(seq__38518_39324__$1);
var G__39332 = null;
var G__39333 = (0);
var G__39334 = (0);
seq__38518_39313 = G__39331;
chunk__38519_39314 = G__39332;
count__38520_39315 = G__39333;
i__38521_39316 = G__39334;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq38510){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq38510));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__38535_39340 = cljs.core.seq(scripts);
var chunk__38536_39341 = null;
var count__38537_39342 = (0);
var i__38538_39343 = (0);
while(true){
if((i__38538_39343 < count__38537_39342)){
var vec__38553_39344 = chunk__38536_39341.cljs$core$IIndexed$_nth$arity$2(null,i__38538_39343);
var script_tag_39345 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38553_39344,(0),null);
var script_body_39346 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38553_39344,(1),null);
eval(script_body_39346);


var G__39347 = seq__38535_39340;
var G__39348 = chunk__38536_39341;
var G__39349 = count__38537_39342;
var G__39350 = (i__38538_39343 + (1));
seq__38535_39340 = G__39347;
chunk__38536_39341 = G__39348;
count__38537_39342 = G__39349;
i__38538_39343 = G__39350;
continue;
} else {
var temp__5753__auto___39353 = cljs.core.seq(seq__38535_39340);
if(temp__5753__auto___39353){
var seq__38535_39354__$1 = temp__5753__auto___39353;
if(cljs.core.chunked_seq_QMARK_(seq__38535_39354__$1)){
var c__4638__auto___39355 = cljs.core.chunk_first(seq__38535_39354__$1);
var G__39356 = cljs.core.chunk_rest(seq__38535_39354__$1);
var G__39357 = c__4638__auto___39355;
var G__39358 = cljs.core.count(c__4638__auto___39355);
var G__39359 = (0);
seq__38535_39340 = G__39356;
chunk__38536_39341 = G__39357;
count__38537_39342 = G__39358;
i__38538_39343 = G__39359;
continue;
} else {
var vec__38556_39360 = cljs.core.first(seq__38535_39354__$1);
var script_tag_39361 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38556_39360,(0),null);
var script_body_39362 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38556_39360,(1),null);
eval(script_body_39362);


var G__39364 = cljs.core.next(seq__38535_39354__$1);
var G__39365 = null;
var G__39366 = (0);
var G__39367 = (0);
seq__38535_39340 = G__39364;
chunk__38536_39341 = G__39365;
count__38537_39342 = G__39366;
i__38538_39343 = G__39367;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__38559){
var vec__38562 = p__38559;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38562,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38562,(1),null);
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
var G__38572 = arguments.length;
switch (G__38572) {
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
var seq__38605 = cljs.core.seq(style_keys);
var chunk__38609 = null;
var count__38610 = (0);
var i__38611 = (0);
while(true){
if((i__38611 < count__38610)){
var it = chunk__38609.cljs$core$IIndexed$_nth$arity$2(null,i__38611);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__39385 = seq__38605;
var G__39386 = chunk__38609;
var G__39387 = count__38610;
var G__39388 = (i__38611 + (1));
seq__38605 = G__39385;
chunk__38609 = G__39386;
count__38610 = G__39387;
i__38611 = G__39388;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__38605);
if(temp__5753__auto__){
var seq__38605__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38605__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__38605__$1);
var G__39390 = cljs.core.chunk_rest(seq__38605__$1);
var G__39391 = c__4638__auto__;
var G__39392 = cljs.core.count(c__4638__auto__);
var G__39393 = (0);
seq__38605 = G__39390;
chunk__38609 = G__39391;
count__38610 = G__39392;
i__38611 = G__39393;
continue;
} else {
var it = cljs.core.first(seq__38605__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__39397 = cljs.core.next(seq__38605__$1);
var G__39398 = null;
var G__39399 = (0);
var G__39400 = (0);
seq__38605 = G__39397;
chunk__38609 = G__39398;
count__38610 = G__39399;
i__38611 = G__39400;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4463__auto__,k38633,else__4464__auto__){
var self__ = this;
var this__4463__auto____$1 = this;
var G__38639 = k38633;
var G__38639__$1 = (((G__38639 instanceof cljs.core.Keyword))?G__38639.fqn:null);
switch (G__38639__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k38633,else__4464__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4481__auto__,f__4482__auto__,init__4483__auto__){
var self__ = this;
var this__4481__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4484__auto__,p__38647){
var vec__38648 = p__38647;
var k__4485__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38648,(0),null);
var v__4486__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38648,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__38632){
var self__ = this;
var G__38632__$1 = this;
return (new cljs.core.RecordIter((0),G__38632__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this38634,other38635){
var self__ = this;
var this38634__$1 = this;
return (((!((other38635 == null)))) && ((((this38634__$1.constructor === other38635.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this38634__$1.x,other38635.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this38634__$1.y,other38635.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this38634__$1.__extmap,other38635.__extmap)))))))));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4468__auto__,k38633){
var self__ = this;
var this__4468__auto____$1 = this;
var G__38667 = k38633;
var G__38667__$1 = (((G__38667 instanceof cljs.core.Keyword))?G__38667.fqn:null);
switch (G__38667__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k38633);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4469__auto__,k__4470__auto__,G__38632){
var self__ = this;
var this__4469__auto____$1 = this;
var pred__38670 = cljs.core.keyword_identical_QMARK_;
var expr__38671 = k__4470__auto__;
if(cljs.core.truth_((pred__38670.cljs$core$IFn$_invoke$arity$2 ? pred__38670.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__38671) : pred__38670.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__38671)))){
return (new shadow.dom.Coordinate(G__38632,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__38670.cljs$core$IFn$_invoke$arity$2 ? pred__38670.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__38671) : pred__38670.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__38671)))){
return (new shadow.dom.Coordinate(self__.x,G__38632,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4470__auto__,G__38632),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4474__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4460__auto__,G__38632){
var self__ = this;
var this__4460__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__38632,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__38637){
var extmap__4501__auto__ = (function (){var G__38692 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__38637,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__38637)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__38692);
} else {
return G__38692;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__38637),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__38637),null,cljs.core.not_empty(extmap__4501__auto__),null));
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4463__auto__,k38701,else__4464__auto__){
var self__ = this;
var this__4463__auto____$1 = this;
var G__38713 = k38701;
var G__38713__$1 = (((G__38713 instanceof cljs.core.Keyword))?G__38713.fqn:null);
switch (G__38713__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k38701,else__4464__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4481__auto__,f__4482__auto__,init__4483__auto__){
var self__ = this;
var this__4481__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4484__auto__,p__38723){
var vec__38728 = p__38723;
var k__4485__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38728,(0),null);
var v__4486__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38728,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__38700){
var self__ = this;
var G__38700__$1 = this;
return (new cljs.core.RecordIter((0),G__38700__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this38703,other38704){
var self__ = this;
var this38703__$1 = this;
return (((!((other38704 == null)))) && ((((this38703__$1.constructor === other38704.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this38703__$1.w,other38704.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this38703__$1.h,other38704.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this38703__$1.__extmap,other38704.__extmap)))))))));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4468__auto__,k38701){
var self__ = this;
var this__4468__auto____$1 = this;
var G__38746 = k38701;
var G__38746__$1 = (((G__38746 instanceof cljs.core.Keyword))?G__38746.fqn:null);
switch (G__38746__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k38701);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4469__auto__,k__4470__auto__,G__38700){
var self__ = this;
var this__4469__auto____$1 = this;
var pred__38749 = cljs.core.keyword_identical_QMARK_;
var expr__38750 = k__4470__auto__;
if(cljs.core.truth_((pred__38749.cljs$core$IFn$_invoke$arity$2 ? pred__38749.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__38750) : pred__38749.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__38750)))){
return (new shadow.dom.Size(G__38700,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__38749.cljs$core$IFn$_invoke$arity$2 ? pred__38749.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__38750) : pred__38749.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__38750)))){
return (new shadow.dom.Size(self__.w,G__38700,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4470__auto__,G__38700),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4474__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4460__auto__,G__38700){
var self__ = this;
var this__4460__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__38700,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__38709){
var extmap__4501__auto__ = (function (){var G__38775 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__38709,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__38709)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__38775);
} else {
return G__38775;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__38709),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__38709),null,cljs.core.not_empty(extmap__4501__auto__),null));
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
var G__39469 = (i + (1));
var G__39470 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__39469;
ret = G__39470;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__38789){
var vec__38790 = p__38789;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38790,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38790,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__38799 = arguments.length;
switch (G__38799) {
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
var G__39479 = ps;
var G__39480 = (i + (1));
el__$1 = G__39479;
i = G__39480;
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
var vec__38825 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38825,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38825,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38825,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__38828_39506 = cljs.core.seq(props);
var chunk__38829_39507 = null;
var count__38830_39508 = (0);
var i__38831_39509 = (0);
while(true){
if((i__38831_39509 < count__38830_39508)){
var vec__38838_39510 = chunk__38829_39507.cljs$core$IIndexed$_nth$arity$2(null,i__38831_39509);
var k_39511 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38838_39510,(0),null);
var v_39512 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38838_39510,(1),null);
el.setAttributeNS((function (){var temp__5753__auto__ = cljs.core.namespace(k_39511);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_39511),v_39512);


var G__39523 = seq__38828_39506;
var G__39524 = chunk__38829_39507;
var G__39525 = count__38830_39508;
var G__39526 = (i__38831_39509 + (1));
seq__38828_39506 = G__39523;
chunk__38829_39507 = G__39524;
count__38830_39508 = G__39525;
i__38831_39509 = G__39526;
continue;
} else {
var temp__5753__auto___39527 = cljs.core.seq(seq__38828_39506);
if(temp__5753__auto___39527){
var seq__38828_39528__$1 = temp__5753__auto___39527;
if(cljs.core.chunked_seq_QMARK_(seq__38828_39528__$1)){
var c__4638__auto___39529 = cljs.core.chunk_first(seq__38828_39528__$1);
var G__39534 = cljs.core.chunk_rest(seq__38828_39528__$1);
var G__39535 = c__4638__auto___39529;
var G__39536 = cljs.core.count(c__4638__auto___39529);
var G__39537 = (0);
seq__38828_39506 = G__39534;
chunk__38829_39507 = G__39535;
count__38830_39508 = G__39536;
i__38831_39509 = G__39537;
continue;
} else {
var vec__38841_39539 = cljs.core.first(seq__38828_39528__$1);
var k_39540 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38841_39539,(0),null);
var v_39541 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38841_39539,(1),null);
el.setAttributeNS((function (){var temp__5753__auto____$1 = cljs.core.namespace(k_39540);
if(cljs.core.truth_(temp__5753__auto____$1)){
var ns = temp__5753__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_39540),v_39541);


var G__39554 = cljs.core.next(seq__38828_39528__$1);
var G__39555 = null;
var G__39556 = (0);
var G__39557 = (0);
seq__38828_39506 = G__39554;
chunk__38829_39507 = G__39555;
count__38830_39508 = G__39556;
i__38831_39509 = G__39557;
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
var vec__38845 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38845,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38845,(1),null);
var seq__38848_39562 = cljs.core.seq(node_children);
var chunk__38850_39563 = null;
var count__38851_39564 = (0);
var i__38852_39565 = (0);
while(true){
if((i__38852_39565 < count__38851_39564)){
var child_struct_39566 = chunk__38850_39563.cljs$core$IIndexed$_nth$arity$2(null,i__38852_39565);
if((!((child_struct_39566 == null)))){
if(typeof child_struct_39566 === 'string'){
var text_39570 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_39570),child_struct_39566].join(''));
} else {
var children_39574 = shadow.dom.svg_node(child_struct_39566);
if(cljs.core.seq_QMARK_(children_39574)){
var seq__38889_39579 = cljs.core.seq(children_39574);
var chunk__38891_39580 = null;
var count__38892_39581 = (0);
var i__38893_39582 = (0);
while(true){
if((i__38893_39582 < count__38892_39581)){
var child_39583 = chunk__38891_39580.cljs$core$IIndexed$_nth$arity$2(null,i__38893_39582);
if(cljs.core.truth_(child_39583)){
node.appendChild(child_39583);


var G__39589 = seq__38889_39579;
var G__39590 = chunk__38891_39580;
var G__39591 = count__38892_39581;
var G__39592 = (i__38893_39582 + (1));
seq__38889_39579 = G__39589;
chunk__38891_39580 = G__39590;
count__38892_39581 = G__39591;
i__38893_39582 = G__39592;
continue;
} else {
var G__39595 = seq__38889_39579;
var G__39596 = chunk__38891_39580;
var G__39597 = count__38892_39581;
var G__39598 = (i__38893_39582 + (1));
seq__38889_39579 = G__39595;
chunk__38891_39580 = G__39596;
count__38892_39581 = G__39597;
i__38893_39582 = G__39598;
continue;
}
} else {
var temp__5753__auto___39601 = cljs.core.seq(seq__38889_39579);
if(temp__5753__auto___39601){
var seq__38889_39602__$1 = temp__5753__auto___39601;
if(cljs.core.chunked_seq_QMARK_(seq__38889_39602__$1)){
var c__4638__auto___39607 = cljs.core.chunk_first(seq__38889_39602__$1);
var G__39608 = cljs.core.chunk_rest(seq__38889_39602__$1);
var G__39609 = c__4638__auto___39607;
var G__39610 = cljs.core.count(c__4638__auto___39607);
var G__39611 = (0);
seq__38889_39579 = G__39608;
chunk__38891_39580 = G__39609;
count__38892_39581 = G__39610;
i__38893_39582 = G__39611;
continue;
} else {
var child_39613 = cljs.core.first(seq__38889_39602__$1);
if(cljs.core.truth_(child_39613)){
node.appendChild(child_39613);


var G__39614 = cljs.core.next(seq__38889_39602__$1);
var G__39615 = null;
var G__39616 = (0);
var G__39617 = (0);
seq__38889_39579 = G__39614;
chunk__38891_39580 = G__39615;
count__38892_39581 = G__39616;
i__38893_39582 = G__39617;
continue;
} else {
var G__39619 = cljs.core.next(seq__38889_39602__$1);
var G__39620 = null;
var G__39621 = (0);
var G__39622 = (0);
seq__38889_39579 = G__39619;
chunk__38891_39580 = G__39620;
count__38892_39581 = G__39621;
i__38893_39582 = G__39622;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_39574);
}
}


var G__39623 = seq__38848_39562;
var G__39624 = chunk__38850_39563;
var G__39625 = count__38851_39564;
var G__39626 = (i__38852_39565 + (1));
seq__38848_39562 = G__39623;
chunk__38850_39563 = G__39624;
count__38851_39564 = G__39625;
i__38852_39565 = G__39626;
continue;
} else {
var G__39627 = seq__38848_39562;
var G__39628 = chunk__38850_39563;
var G__39629 = count__38851_39564;
var G__39630 = (i__38852_39565 + (1));
seq__38848_39562 = G__39627;
chunk__38850_39563 = G__39628;
count__38851_39564 = G__39629;
i__38852_39565 = G__39630;
continue;
}
} else {
var temp__5753__auto___39632 = cljs.core.seq(seq__38848_39562);
if(temp__5753__auto___39632){
var seq__38848_39633__$1 = temp__5753__auto___39632;
if(cljs.core.chunked_seq_QMARK_(seq__38848_39633__$1)){
var c__4638__auto___39634 = cljs.core.chunk_first(seq__38848_39633__$1);
var G__39635 = cljs.core.chunk_rest(seq__38848_39633__$1);
var G__39636 = c__4638__auto___39634;
var G__39637 = cljs.core.count(c__4638__auto___39634);
var G__39638 = (0);
seq__38848_39562 = G__39635;
chunk__38850_39563 = G__39636;
count__38851_39564 = G__39637;
i__38852_39565 = G__39638;
continue;
} else {
var child_struct_39641 = cljs.core.first(seq__38848_39633__$1);
if((!((child_struct_39641 == null)))){
if(typeof child_struct_39641 === 'string'){
var text_39642 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_39642),child_struct_39641].join(''));
} else {
var children_39643 = shadow.dom.svg_node(child_struct_39641);
if(cljs.core.seq_QMARK_(children_39643)){
var seq__38906_39645 = cljs.core.seq(children_39643);
var chunk__38908_39646 = null;
var count__38909_39647 = (0);
var i__38910_39648 = (0);
while(true){
if((i__38910_39648 < count__38909_39647)){
var child_39652 = chunk__38908_39646.cljs$core$IIndexed$_nth$arity$2(null,i__38910_39648);
if(cljs.core.truth_(child_39652)){
node.appendChild(child_39652);


var G__39653 = seq__38906_39645;
var G__39654 = chunk__38908_39646;
var G__39655 = count__38909_39647;
var G__39656 = (i__38910_39648 + (1));
seq__38906_39645 = G__39653;
chunk__38908_39646 = G__39654;
count__38909_39647 = G__39655;
i__38910_39648 = G__39656;
continue;
} else {
var G__39657 = seq__38906_39645;
var G__39658 = chunk__38908_39646;
var G__39659 = count__38909_39647;
var G__39660 = (i__38910_39648 + (1));
seq__38906_39645 = G__39657;
chunk__38908_39646 = G__39658;
count__38909_39647 = G__39659;
i__38910_39648 = G__39660;
continue;
}
} else {
var temp__5753__auto___39661__$1 = cljs.core.seq(seq__38906_39645);
if(temp__5753__auto___39661__$1){
var seq__38906_39662__$1 = temp__5753__auto___39661__$1;
if(cljs.core.chunked_seq_QMARK_(seq__38906_39662__$1)){
var c__4638__auto___39667 = cljs.core.chunk_first(seq__38906_39662__$1);
var G__39668 = cljs.core.chunk_rest(seq__38906_39662__$1);
var G__39669 = c__4638__auto___39667;
var G__39670 = cljs.core.count(c__4638__auto___39667);
var G__39671 = (0);
seq__38906_39645 = G__39668;
chunk__38908_39646 = G__39669;
count__38909_39647 = G__39670;
i__38910_39648 = G__39671;
continue;
} else {
var child_39672 = cljs.core.first(seq__38906_39662__$1);
if(cljs.core.truth_(child_39672)){
node.appendChild(child_39672);


var G__39676 = cljs.core.next(seq__38906_39662__$1);
var G__39677 = null;
var G__39678 = (0);
var G__39679 = (0);
seq__38906_39645 = G__39676;
chunk__38908_39646 = G__39677;
count__38909_39647 = G__39678;
i__38910_39648 = G__39679;
continue;
} else {
var G__39680 = cljs.core.next(seq__38906_39662__$1);
var G__39681 = null;
var G__39682 = (0);
var G__39683 = (0);
seq__38906_39645 = G__39680;
chunk__38908_39646 = G__39681;
count__38909_39647 = G__39682;
i__38910_39648 = G__39683;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_39643);
}
}


var G__39684 = cljs.core.next(seq__38848_39633__$1);
var G__39685 = null;
var G__39686 = (0);
var G__39687 = (0);
seq__38848_39562 = G__39684;
chunk__38850_39563 = G__39685;
count__38851_39564 = G__39686;
i__38852_39565 = G__39687;
continue;
} else {
var G__39688 = cljs.core.next(seq__38848_39633__$1);
var G__39689 = null;
var G__39690 = (0);
var G__39691 = (0);
seq__38848_39562 = G__39688;
chunk__38850_39563 = G__39689;
count__38851_39564 = G__39690;
i__38852_39565 = G__39691;
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
var len__4818__auto___39693 = arguments.length;
var i__4819__auto___39694 = (0);
while(true){
if((i__4819__auto___39694 < len__4818__auto___39693)){
args__4824__auto__.push((arguments[i__4819__auto___39694]));

var G__39698 = (i__4819__auto___39694 + (1));
i__4819__auto___39694 = G__39698;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq38922){
var G__38923 = cljs.core.first(seq38922);
var seq38922__$1 = cljs.core.next(seq38922);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38923,seq38922__$1);
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
var G__38937 = arguments.length;
switch (G__38937) {
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
var c__35736__auto___39707 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35737__auto__ = (function (){var switch__35582__auto__ = (function (state_38947){
var state_val_38948 = (state_38947[(1)]);
if((state_val_38948 === (1))){
var state_38947__$1 = state_38947;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38947__$1,(2),once_or_cleanup);
} else {
if((state_val_38948 === (2))){
var inst_38944 = (state_38947[(2)]);
var inst_38945 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_38947__$1 = (function (){var statearr_38953 = state_38947;
(statearr_38953[(7)] = inst_38944);

return statearr_38953;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_38947__$1,inst_38945);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__35583__auto__ = null;
var shadow$dom$state_machine__35583__auto____0 = (function (){
var statearr_38955 = [null,null,null,null,null,null,null,null];
(statearr_38955[(0)] = shadow$dom$state_machine__35583__auto__);

(statearr_38955[(1)] = (1));

return statearr_38955;
});
var shadow$dom$state_machine__35583__auto____1 = (function (state_38947){
while(true){
var ret_value__35584__auto__ = (function (){try{while(true){
var result__35585__auto__ = switch__35582__auto__(state_38947);
if(cljs.core.keyword_identical_QMARK_(result__35585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35585__auto__;
}
break;
}
}catch (e38956){var ex__35586__auto__ = e38956;
var statearr_38958_39711 = state_38947;
(statearr_38958_39711[(2)] = ex__35586__auto__);


if(cljs.core.seq((state_38947[(4)]))){
var statearr_38959_39712 = state_38947;
(statearr_38959_39712[(1)] = cljs.core.first((state_38947[(4)])));

} else {
throw ex__35586__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39713 = state_38947;
state_38947 = G__39713;
continue;
} else {
return ret_value__35584__auto__;
}
break;
}
});
shadow$dom$state_machine__35583__auto__ = function(state_38947){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__35583__auto____0.call(this);
case 1:
return shadow$dom$state_machine__35583__auto____1.call(this,state_38947);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__35583__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__35583__auto____0;
shadow$dom$state_machine__35583__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__35583__auto____1;
return shadow$dom$state_machine__35583__auto__;
})()
})();
var state__35738__auto__ = (function (){var statearr_38962 = f__35737__auto__();
(statearr_38962[(6)] = c__35736__auto___39707);

return statearr_38962;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35738__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
