goog.provide('sablono.core');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__32521__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args))){
var vec__32198 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));
var seq__32199 = cljs.core.seq(vec__32198);
var first__32200 = cljs.core.first(seq__32199);
var seq__32199__$1 = cljs.core.next(seq__32199);
var tag = first__32200;
var body = seq__32199__$1;
if(cljs.core.map_QMARK_(cljs.core.first(body))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.first(body),cljs.core.first(args)], 0))], null),cljs.core.rest(body));
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first(args)], null),body);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__32521 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32526__i = 0, G__32526__a = new Array(arguments.length -  0);
while (G__32526__i < G__32526__a.length) {G__32526__a[G__32526__i] = arguments[G__32526__i + 0]; ++G__32526__i;}
  args = new cljs.core.IndexedSeq(G__32526__a,0,null);
} 
return G__32521__delegate.call(this,args);};
G__32521.cljs$lang$maxFixedArity = 0;
G__32521.cljs$lang$applyTo = (function (arglist__32527){
var args = cljs.core.seq(arglist__32527);
return G__32521__delegate(args);
});
G__32521.cljs$core$IFn$_invoke$arity$variadic = G__32521__delegate;
return G__32521;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__4611__auto__ = (function sablono$core$update_arglists_$_iter__32212(s__32213){
return (new cljs.core.LazySeq(null,(function (){
var s__32213__$1 = s__32213;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__32213__$1);
if(temp__5753__auto__){
var s__32213__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__32213__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__32213__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__32215 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__32214 = (0);
while(true){
if((i__32214 < size__4610__auto__)){
var args = cljs.core._nth(c__4609__auto__,i__32214);
cljs.core.chunk_append(b__32215,cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__32529 = (i__32214 + (1));
i__32214 = G__32529;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__32215),sablono$core$update_arglists_$_iter__32212(cljs.core.chunk_rest(s__32213__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__32215),null);
}
} else {
var args = cljs.core.first(s__32213__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__32212(cljs.core.rest(s__32213__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__4824__auto__ = [];
var len__4818__auto___32532 = arguments.length;
var i__4819__auto___32533 = (0);
while(true){
if((i__4819__auto___32533 < len__4818__auto___32532)){
args__4824__auto__.push((arguments[i__4819__auto___32533]));

var G__32534 = (i__4819__auto___32533 + (1));
i__4819__auto___32533 = G__32534;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__4611__auto__ = (function sablono$core$iter__32217(s__32218){
return (new cljs.core.LazySeq(null,(function (){
var s__32218__$1 = s__32218;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__32218__$1);
if(temp__5753__auto__){
var s__32218__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__32218__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__32218__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__32220 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__32219 = (0);
while(true){
if((i__32219 < size__4610__auto__)){
var style = cljs.core._nth(c__4609__auto__,i__32219);
cljs.core.chunk_append(b__32220,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__32546 = (i__32219 + (1));
i__32219 = G__32546;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__32220),sablono$core$iter__32217(cljs.core.chunk_rest(s__32218__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__32220),null);
}
} else {
var style = cljs.core.first(s__32218__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__32217(cljs.core.rest(s__32218__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(styles);
}));

(sablono.core.include_css.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sablono.core.include_css.cljs$lang$applyTo = (function (seq32216){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32216));
}));

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",({"src": src})));
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js("http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to32221 = (function sablono$core$link_to32221(var_args){
var args__4824__auto__ = [];
var len__4818__auto___32549 = arguments.length;
var i__4819__auto___32550 = (0);
while(true){
if((i__4819__auto___32550 < len__4818__auto___32549)){
args__4824__auto__.push((arguments[i__4819__auto___32550]));

var G__32551 = (i__4819__auto___32550 + (1));
i__4819__auto___32550 = G__32551;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to32221.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(sablono.core.link_to32221.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([url], 0))], null),content], null);
}));

(sablono.core.link_to32221.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.link_to32221.cljs$lang$applyTo = (function (seq32222){
var G__32223 = cljs.core.first(seq32222);
var seq32222__$1 = cljs.core.next(seq32222);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32223,seq32222__$1);
}));


sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to32221);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to32224 = (function sablono$core$mail_to32224(var_args){
var args__4824__auto__ = [];
var len__4818__auto___32553 = arguments.length;
var i__4819__auto___32554 = (0);
while(true){
if((i__4819__auto___32554 < len__4818__auto___32553)){
args__4824__auto__.push((arguments[i__4819__auto___32554]));

var G__32555 = (i__4819__auto___32554 + (1));
i__4819__auto___32554 = G__32555;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to32224.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(sablono.core.mail_to32224.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__32227){
var vec__32228 = p__32227;
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32228,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__4212__auto__ = content;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return e_mail;
}
})()], null);
}));

(sablono.core.mail_to32224.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.mail_to32224.cljs$lang$applyTo = (function (seq32225){
var G__32226 = cljs.core.first(seq32225);
var seq32225__$1 = cljs.core.next(seq32225);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32226,seq32225__$1);
}));


sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to32224);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list32231 = (function sablono$core$unordered_list32231(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4611__auto__ = (function sablono$core$unordered_list32231_$_iter__32232(s__32233){
return (new cljs.core.LazySeq(null,(function (){
var s__32233__$1 = s__32233;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__32233__$1);
if(temp__5753__auto__){
var s__32233__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__32233__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__32233__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__32235 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__32234 = (0);
while(true){
if((i__32234 < size__4610__auto__)){
var x = cljs.core._nth(c__4609__auto__,i__32234);
cljs.core.chunk_append(b__32235,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__32558 = (i__32234 + (1));
i__32234 = G__32558;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__32235),sablono$core$unordered_list32231_$_iter__32232(cljs.core.chunk_rest(s__32233__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__32235),null);
}
} else {
var x = cljs.core.first(s__32233__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list32231_$_iter__32232(cljs.core.rest(s__32233__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list32231);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list32236 = (function sablono$core$ordered_list32236(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4611__auto__ = (function sablono$core$ordered_list32236_$_iter__32237(s__32238){
return (new cljs.core.LazySeq(null,(function (){
var s__32238__$1 = s__32238;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__32238__$1);
if(temp__5753__auto__){
var s__32238__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__32238__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__32238__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__32240 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__32239 = (0);
while(true){
if((i__32239 < size__4610__auto__)){
var x = cljs.core._nth(c__4609__auto__,i__32239);
cljs.core.chunk_append(b__32240,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__32560 = (i__32239 + (1));
i__32239 = G__32560;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__32240),sablono$core$ordered_list32236_$_iter__32237(cljs.core.chunk_rest(s__32238__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__32240),null);
}
} else {
var x = cljs.core.first(s__32238__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list32236_$_iter__32237(cljs.core.rest(s__32238__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list32236);
/**
 * Create an image element.
 */
sablono.core.image32241 = (function sablono$core$image32241(var_args){
var G__32243 = arguments.length;
switch (G__32243) {
case 1:
return sablono.core.image32241.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image32241.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.image32241.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0))], null)], null);
}));

(sablono.core.image32241.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0)),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
}));

(sablono.core.image32241.cljs$lang$maxFixedArity = 2);


sablono.core.image = sablono.core.wrap_attrs(sablono.core.image32241);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__32244_SHARP_,p2__32245_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__32244_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__32245_SHARP_),"]"].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__32246_SHARP_,p2__32247_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__32246_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__32247_SHARP_)].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(var_args){
var G__32249 = arguments.length;
switch (G__32249) {
case 2:
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (type,name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4212__auto__ = value;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return undefined;
}
})()], null)], null);
}));

(sablono.core.input_field_STAR_.cljs$lang$maxFixedArity = 3);

/**
 * Creates a color input field.
 */
sablono.core.color_field32252 = (function sablono$core$color_field32252(var_args){
var G__32256 = arguments.length;
switch (G__32256) {
case 1:
return sablono.core.color_field32252.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field32252.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.color_field32252.cljs$core$IFn$_invoke$arity$1 = (function (name__32179__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__32179__auto__);
}));

(sablono.core.color_field32252.cljs$core$IFn$_invoke$arity$2 = (function (name__32179__auto__,value__32180__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__32179__auto__,value__32180__auto__);
}));

(sablono.core.color_field32252.cljs$lang$maxFixedArity = 2);


sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field32252);

/**
 * Creates a date input field.
 */
sablono.core.date_field32261 = (function sablono$core$date_field32261(var_args){
var G__32263 = arguments.length;
switch (G__32263) {
case 1:
return sablono.core.date_field32261.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field32261.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.date_field32261.cljs$core$IFn$_invoke$arity$1 = (function (name__32179__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__32179__auto__);
}));

(sablono.core.date_field32261.cljs$core$IFn$_invoke$arity$2 = (function (name__32179__auto__,value__32180__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__32179__auto__,value__32180__auto__);
}));

(sablono.core.date_field32261.cljs$lang$maxFixedArity = 2);


sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field32261);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field32266 = (function sablono$core$datetime_field32266(var_args){
var G__32270 = arguments.length;
switch (G__32270) {
case 1:
return sablono.core.datetime_field32266.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field32266.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_field32266.cljs$core$IFn$_invoke$arity$1 = (function (name__32179__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__32179__auto__);
}));

(sablono.core.datetime_field32266.cljs$core$IFn$_invoke$arity$2 = (function (name__32179__auto__,value__32180__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__32179__auto__,value__32180__auto__);
}));

(sablono.core.datetime_field32266.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field32266);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field32275 = (function sablono$core$datetime_local_field32275(var_args){
var G__32277 = arguments.length;
switch (G__32277) {
case 1:
return sablono.core.datetime_local_field32275.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field32275.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_local_field32275.cljs$core$IFn$_invoke$arity$1 = (function (name__32179__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__32179__auto__);
}));

(sablono.core.datetime_local_field32275.cljs$core$IFn$_invoke$arity$2 = (function (name__32179__auto__,value__32180__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__32179__auto__,value__32180__auto__);
}));

(sablono.core.datetime_local_field32275.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field32275);

/**
 * Creates a email input field.
 */
sablono.core.email_field32284 = (function sablono$core$email_field32284(var_args){
var G__32288 = arguments.length;
switch (G__32288) {
case 1:
return sablono.core.email_field32284.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field32284.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.email_field32284.cljs$core$IFn$_invoke$arity$1 = (function (name__32179__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__32179__auto__);
}));

(sablono.core.email_field32284.cljs$core$IFn$_invoke$arity$2 = (function (name__32179__auto__,value__32180__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__32179__auto__,value__32180__auto__);
}));

(sablono.core.email_field32284.cljs$lang$maxFixedArity = 2);


sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field32284);

/**
 * Creates a file input field.
 */
sablono.core.file_field32293 = (function sablono$core$file_field32293(var_args){
var G__32296 = arguments.length;
switch (G__32296) {
case 1:
return sablono.core.file_field32293.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field32293.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.file_field32293.cljs$core$IFn$_invoke$arity$1 = (function (name__32179__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__32179__auto__);
}));

(sablono.core.file_field32293.cljs$core$IFn$_invoke$arity$2 = (function (name__32179__auto__,value__32180__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__32179__auto__,value__32180__auto__);
}));

(sablono.core.file_field32293.cljs$lang$maxFixedArity = 2);


sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field32293);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field32298 = (function sablono$core$hidden_field32298(var_args){
var G__32302 = arguments.length;
switch (G__32302) {
case 1:
return sablono.core.hidden_field32298.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field32298.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.hidden_field32298.cljs$core$IFn$_invoke$arity$1 = (function (name__32179__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__32179__auto__);
}));

(sablono.core.hidden_field32298.cljs$core$IFn$_invoke$arity$2 = (function (name__32179__auto__,value__32180__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__32179__auto__,value__32180__auto__);
}));

(sablono.core.hidden_field32298.cljs$lang$maxFixedArity = 2);


sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field32298);

/**
 * Creates a month input field.
 */
sablono.core.month_field32306 = (function sablono$core$month_field32306(var_args){
var G__32310 = arguments.length;
switch (G__32310) {
case 1:
return sablono.core.month_field32306.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field32306.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.month_field32306.cljs$core$IFn$_invoke$arity$1 = (function (name__32179__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__32179__auto__);
}));

(sablono.core.month_field32306.cljs$core$IFn$_invoke$arity$2 = (function (name__32179__auto__,value__32180__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__32179__auto__,value__32180__auto__);
}));

(sablono.core.month_field32306.cljs$lang$maxFixedArity = 2);


sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field32306);

/**
 * Creates a number input field.
 */
sablono.core.number_field32321 = (function sablono$core$number_field32321(var_args){
var G__32323 = arguments.length;
switch (G__32323) {
case 1:
return sablono.core.number_field32321.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field32321.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.number_field32321.cljs$core$IFn$_invoke$arity$1 = (function (name__32179__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__32179__auto__);
}));

(sablono.core.number_field32321.cljs$core$IFn$_invoke$arity$2 = (function (name__32179__auto__,value__32180__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__32179__auto__,value__32180__auto__);
}));

(sablono.core.number_field32321.cljs$lang$maxFixedArity = 2);


sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field32321);

/**
 * Creates a password input field.
 */
sablono.core.password_field32327 = (function sablono$core$password_field32327(var_args){
var G__32330 = arguments.length;
switch (G__32330) {
case 1:
return sablono.core.password_field32327.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field32327.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.password_field32327.cljs$core$IFn$_invoke$arity$1 = (function (name__32179__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__32179__auto__);
}));

(sablono.core.password_field32327.cljs$core$IFn$_invoke$arity$2 = (function (name__32179__auto__,value__32180__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__32179__auto__,value__32180__auto__);
}));

(sablono.core.password_field32327.cljs$lang$maxFixedArity = 2);


sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field32327);

/**
 * Creates a range input field.
 */
sablono.core.range_field32333 = (function sablono$core$range_field32333(var_args){
var G__32336 = arguments.length;
switch (G__32336) {
case 1:
return sablono.core.range_field32333.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field32333.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.range_field32333.cljs$core$IFn$_invoke$arity$1 = (function (name__32179__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__32179__auto__);
}));

(sablono.core.range_field32333.cljs$core$IFn$_invoke$arity$2 = (function (name__32179__auto__,value__32180__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__32179__auto__,value__32180__auto__);
}));

(sablono.core.range_field32333.cljs$lang$maxFixedArity = 2);


sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field32333);

/**
 * Creates a search input field.
 */
sablono.core.search_field32339 = (function sablono$core$search_field32339(var_args){
var G__32342 = arguments.length;
switch (G__32342) {
case 1:
return sablono.core.search_field32339.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field32339.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.search_field32339.cljs$core$IFn$_invoke$arity$1 = (function (name__32179__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__32179__auto__);
}));

(sablono.core.search_field32339.cljs$core$IFn$_invoke$arity$2 = (function (name__32179__auto__,value__32180__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__32179__auto__,value__32180__auto__);
}));

(sablono.core.search_field32339.cljs$lang$maxFixedArity = 2);


sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field32339);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field32349 = (function sablono$core$tel_field32349(var_args){
var G__32359 = arguments.length;
switch (G__32359) {
case 1:
return sablono.core.tel_field32349.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field32349.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.tel_field32349.cljs$core$IFn$_invoke$arity$1 = (function (name__32179__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__32179__auto__);
}));

(sablono.core.tel_field32349.cljs$core$IFn$_invoke$arity$2 = (function (name__32179__auto__,value__32180__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__32179__auto__,value__32180__auto__);
}));

(sablono.core.tel_field32349.cljs$lang$maxFixedArity = 2);


sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field32349);

/**
 * Creates a text input field.
 */
sablono.core.text_field32361 = (function sablono$core$text_field32361(var_args){
var G__32365 = arguments.length;
switch (G__32365) {
case 1:
return sablono.core.text_field32361.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field32361.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_field32361.cljs$core$IFn$_invoke$arity$1 = (function (name__32179__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__32179__auto__);
}));

(sablono.core.text_field32361.cljs$core$IFn$_invoke$arity$2 = (function (name__32179__auto__,value__32180__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__32179__auto__,value__32180__auto__);
}));

(sablono.core.text_field32361.cljs$lang$maxFixedArity = 2);


sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field32361);

/**
 * Creates a time input field.
 */
sablono.core.time_field32368 = (function sablono$core$time_field32368(var_args){
var G__32371 = arguments.length;
switch (G__32371) {
case 1:
return sablono.core.time_field32368.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field32368.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.time_field32368.cljs$core$IFn$_invoke$arity$1 = (function (name__32179__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__32179__auto__);
}));

(sablono.core.time_field32368.cljs$core$IFn$_invoke$arity$2 = (function (name__32179__auto__,value__32180__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__32179__auto__,value__32180__auto__);
}));

(sablono.core.time_field32368.cljs$lang$maxFixedArity = 2);


sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field32368);

/**
 * Creates a url input field.
 */
sablono.core.url_field32373 = (function sablono$core$url_field32373(var_args){
var G__32377 = arguments.length;
switch (G__32377) {
case 1:
return sablono.core.url_field32373.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field32373.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.url_field32373.cljs$core$IFn$_invoke$arity$1 = (function (name__32179__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__32179__auto__);
}));

(sablono.core.url_field32373.cljs$core$IFn$_invoke$arity$2 = (function (name__32179__auto__,value__32180__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__32179__auto__,value__32180__auto__);
}));

(sablono.core.url_field32373.cljs$lang$maxFixedArity = 2);


sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field32373);

/**
 * Creates a week input field.
 */
sablono.core.week_field32381 = (function sablono$core$week_field32381(var_args){
var G__32386 = arguments.length;
switch (G__32386) {
case 1:
return sablono.core.week_field32381.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field32381.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.week_field32381.cljs$core$IFn$_invoke$arity$1 = (function (name__32179__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__32179__auto__);
}));

(sablono.core.week_field32381.cljs$core$IFn$_invoke$arity$2 = (function (name__32179__auto__,value__32180__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__32179__auto__,value__32180__auto__);
}));

(sablono.core.week_field32381.cljs$lang$maxFixedArity = 2);


sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field32381);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box32396 = (function sablono$core$check_box32396(var_args){
var G__32400 = arguments.length;
switch (G__32400) {
case 1:
return sablono.core.check_box32396.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box32396.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box32396.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.check_box32396.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.check_box32396.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box32396.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box32396.cljs$lang$maxFixedArity = 3);


sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box32396);
/**
 * Creates a radio button.
 */
sablono.core.radio_button32404 = (function sablono$core$radio_button32404(var_args){
var G__32409 = arguments.length;
switch (G__32409) {
case 1:
return sablono.core.radio_button32404.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button32404.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button32404.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.radio_button32404.cljs$core$IFn$_invoke$arity$1 = (function (group){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)))], null)], null);
}));

(sablono.core.radio_button32404.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0))),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button32404.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id([sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)),"-",sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button32404.cljs$lang$maxFixedArity = 3);


sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button32404);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0)));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options32430 = (function sablono$core$select_options32430(coll){
var iter__4611__auto__ = (function sablono$core$select_options32430_$_iter__32434(s__32435){
return (new cljs.core.LazySeq(null,(function (){
var s__32435__$1 = s__32435;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__32435__$1);
if(temp__5753__auto__){
var s__32435__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__32435__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__32435__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__32437 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__32436 = (0);
while(true){
if((i__32436 < size__4610__auto__)){
var x = cljs.core._nth(c__4609__auto__,i__32436);
cljs.core.chunk_append(b__32437,((cljs.core.sequential_QMARK_(x))?(function (){var vec__32440 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32440,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32440,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32440,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),(sablono.core.select_options32430.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options32430.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options32430.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__32652 = (i__32436 + (1));
i__32436 = G__32652;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__32437),sablono$core$select_options32430_$_iter__32434(cljs.core.chunk_rest(s__32435__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__32437),null);
}
} else {
var x = cljs.core.first(s__32435__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__32452 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32452,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32452,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32452,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),(sablono.core.select_options32430.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options32430.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options32430.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options32430_$_iter__32434(cljs.core.rest(s__32435__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(coll);
});

sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options32430);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down32461 = (function sablono$core$drop_down32461(var_args){
var G__32469 = arguments.length;
switch (G__32469) {
case 2:
return sablono.core.drop_down32461.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down32461.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.drop_down32461.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down32461.cljs$core$IFn$_invoke$arity$3(name,options,null);
}));

(sablono.core.drop_down32461.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null),sablono.core.select_options(options,selected)], null);
}));

(sablono.core.drop_down32461.cljs$lang$maxFixedArity = 3);


sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down32461);
/**
 * Creates a text area element.
 */
sablono.core.text_area32476 = (function sablono$core$text_area32476(var_args){
var G__32478 = arguments.length;
switch (G__32478) {
case 1:
return sablono.core.text_area32476.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area32476.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_area32476.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.text_area32476.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4212__auto__ = value;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return undefined;
}
})()], null)], null);
}));

(sablono.core.text_area32476.cljs$lang$maxFixedArity = 2);


sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area32476);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label32486 = (function sablono$core$label32486(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id(name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs(sablono.core.label32486);
/**
 * Creates a submit button.
 */
sablono.core.submit_button32489 = (function sablono$core$submit_button32489(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button32489);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button32494 = (function sablono$core$reset_button32494(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button32494);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to32499 = (function sablono$core$form_to32499(var_args){
var args__4824__auto__ = [];
var len__4818__auto___32674 = arguments.length;
var i__4819__auto___32675 = (0);
while(true){
if((i__4819__auto___32675 < len__4818__auto___32674)){
args__4824__auto__.push((arguments[i__4819__auto___32675]));

var G__32677 = (i__4819__auto___32675 + (1));
i__4819__auto___32675 = G__32677;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to32499.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(sablono.core.form_to32499.cljs$core$IFn$_invoke$arity$variadic = (function (p__32507,body){
var vec__32508 = p__32507;
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32508,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32508,(1),null);
var method_str = clojure.string.upper_case(cljs.core.name(method));
var action_uri = sablono.util.to_uri(action);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
}));

(sablono.core.form_to32499.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.form_to32499.cljs$lang$applyTo = (function (seq32500){
var G__32501 = cljs.core.first(seq32500);
var seq32500__$1 = cljs.core.next(seq32500);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32501,seq32500__$1);
}));


sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to32499);

//# sourceMappingURL=sablono.core.js.map
