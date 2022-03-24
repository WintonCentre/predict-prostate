goog.provide('sablono.core');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__42734__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args))){
var vec__42228 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));
var seq__42229 = cljs.core.seq(vec__42228);
var first__42230 = cljs.core.first(seq__42229);
var seq__42229__$1 = cljs.core.next(seq__42229);
var tag = first__42230;
var body = seq__42229__$1;
if(cljs.core.map_QMARK_(cljs.core.first(body))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.first(body),cljs.core.first(args)], 0))], null),cljs.core.rest(body));
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first(args)], null),body);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__42734 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42736__i = 0, G__42736__a = new Array(arguments.length -  0);
while (G__42736__i < G__42736__a.length) {G__42736__a[G__42736__i] = arguments[G__42736__i + 0]; ++G__42736__i;}
  args = new cljs.core.IndexedSeq(G__42736__a,0,null);
} 
return G__42734__delegate.call(this,args);};
G__42734.cljs$lang$maxFixedArity = 0;
G__42734.cljs$lang$applyTo = (function (arglist__42737){
var args = cljs.core.seq(arglist__42737);
return G__42734__delegate(args);
});
G__42734.cljs$core$IFn$_invoke$arity$variadic = G__42734__delegate;
return G__42734;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__4611__auto__ = (function sablono$core$update_arglists_$_iter__42232(s__42233){
return (new cljs.core.LazySeq(null,(function (){
var s__42233__$1 = s__42233;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__42233__$1);
if(temp__5753__auto__){
var s__42233__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__42233__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__42233__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__42235 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__42234 = (0);
while(true){
if((i__42234 < size__4610__auto__)){
var args = cljs.core._nth(c__4609__auto__,i__42234);
cljs.core.chunk_append(b__42235,cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__42742 = (i__42234 + (1));
i__42234 = G__42742;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__42235),sablono$core$update_arglists_$_iter__42232(cljs.core.chunk_rest(s__42233__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__42235),null);
}
} else {
var args = cljs.core.first(s__42233__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__42232(cljs.core.rest(s__42233__$2)));
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
var len__4818__auto___42743 = arguments.length;
var i__4819__auto___42744 = (0);
while(true){
if((i__4819__auto___42744 < len__4818__auto___42743)){
args__4824__auto__.push((arguments[i__4819__auto___42744]));

var G__42745 = (i__4819__auto___42744 + (1));
i__4819__auto___42744 = G__42745;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__4611__auto__ = (function sablono$core$iter__42242(s__42243){
return (new cljs.core.LazySeq(null,(function (){
var s__42243__$1 = s__42243;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__42243__$1);
if(temp__5753__auto__){
var s__42243__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__42243__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__42243__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__42245 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__42244 = (0);
while(true){
if((i__42244 < size__4610__auto__)){
var style = cljs.core._nth(c__4609__auto__,i__42244);
cljs.core.chunk_append(b__42245,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__42746 = (i__42244 + (1));
i__42244 = G__42746;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__42245),sablono$core$iter__42242(cljs.core.chunk_rest(s__42243__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__42245),null);
}
} else {
var style = cljs.core.first(s__42243__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__42242(cljs.core.rest(s__42243__$2)));
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
(sablono.core.include_css.cljs$lang$applyTo = (function (seq42240){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42240));
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
sablono.core.link_to42302 = (function sablono$core$link_to42302(var_args){
var args__4824__auto__ = [];
var len__4818__auto___42749 = arguments.length;
var i__4819__auto___42750 = (0);
while(true){
if((i__4819__auto___42750 < len__4818__auto___42749)){
args__4824__auto__.push((arguments[i__4819__auto___42750]));

var G__42751 = (i__4819__auto___42750 + (1));
i__4819__auto___42750 = G__42751;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to42302.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(sablono.core.link_to42302.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([url], 0))], null),content], null);
}));

(sablono.core.link_to42302.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.link_to42302.cljs$lang$applyTo = (function (seq42307){
var G__42308 = cljs.core.first(seq42307);
var seq42307__$1 = cljs.core.next(seq42307);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42308,seq42307__$1);
}));


sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to42302);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to42320 = (function sablono$core$mail_to42320(var_args){
var args__4824__auto__ = [];
var len__4818__auto___42753 = arguments.length;
var i__4819__auto___42754 = (0);
while(true){
if((i__4819__auto___42754 < len__4818__auto___42753)){
args__4824__auto__.push((arguments[i__4819__auto___42754]));

var G__42755 = (i__4819__auto___42754 + (1));
i__4819__auto___42754 = G__42755;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to42320.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(sablono.core.mail_to42320.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__42326){
var vec__42327 = p__42326;
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42327,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__4212__auto__ = content;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return e_mail;
}
})()], null);
}));

(sablono.core.mail_to42320.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.mail_to42320.cljs$lang$applyTo = (function (seq42322){
var G__42323 = cljs.core.first(seq42322);
var seq42322__$1 = cljs.core.next(seq42322);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42323,seq42322__$1);
}));


sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to42320);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list42336 = (function sablono$core$unordered_list42336(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4611__auto__ = (function sablono$core$unordered_list42336_$_iter__42339(s__42340){
return (new cljs.core.LazySeq(null,(function (){
var s__42340__$1 = s__42340;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__42340__$1);
if(temp__5753__auto__){
var s__42340__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__42340__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__42340__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__42342 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__42341 = (0);
while(true){
if((i__42341 < size__4610__auto__)){
var x = cljs.core._nth(c__4609__auto__,i__42341);
cljs.core.chunk_append(b__42342,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__42756 = (i__42341 + (1));
i__42341 = G__42756;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__42342),sablono$core$unordered_list42336_$_iter__42339(cljs.core.chunk_rest(s__42340__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__42342),null);
}
} else {
var x = cljs.core.first(s__42340__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list42336_$_iter__42339(cljs.core.rest(s__42340__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list42336);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list42343 = (function sablono$core$ordered_list42343(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4611__auto__ = (function sablono$core$ordered_list42343_$_iter__42344(s__42345){
return (new cljs.core.LazySeq(null,(function (){
var s__42345__$1 = s__42345;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__42345__$1);
if(temp__5753__auto__){
var s__42345__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__42345__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__42345__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__42347 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__42346 = (0);
while(true){
if((i__42346 < size__4610__auto__)){
var x = cljs.core._nth(c__4609__auto__,i__42346);
cljs.core.chunk_append(b__42347,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__42762 = (i__42346 + (1));
i__42346 = G__42762;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__42347),sablono$core$ordered_list42343_$_iter__42344(cljs.core.chunk_rest(s__42345__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__42347),null);
}
} else {
var x = cljs.core.first(s__42345__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list42343_$_iter__42344(cljs.core.rest(s__42345__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list42343);
/**
 * Create an image element.
 */
sablono.core.image42370 = (function sablono$core$image42370(var_args){
var G__42372 = arguments.length;
switch (G__42372) {
case 1:
return sablono.core.image42370.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image42370.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.image42370.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0))], null)], null);
}));

(sablono.core.image42370.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0)),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
}));

(sablono.core.image42370.cljs$lang$maxFixedArity = 2);


sablono.core.image = sablono.core.wrap_attrs(sablono.core.image42370);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__42374_SHARP_,p2__42375_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__42374_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__42375_SHARP_),"]"].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__42400_SHARP_,p2__42401_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__42400_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__42401_SHARP_)].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(var_args){
var G__42416 = arguments.length;
switch (G__42416) {
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
sablono.core.color_field42433 = (function sablono$core$color_field42433(var_args){
var G__42437 = arguments.length;
switch (G__42437) {
case 1:
return sablono.core.color_field42433.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field42433.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.color_field42433.cljs$core$IFn$_invoke$arity$1 = (function (name__42220__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__42220__auto__);
}));

(sablono.core.color_field42433.cljs$core$IFn$_invoke$arity$2 = (function (name__42220__auto__,value__42221__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__42220__auto__,value__42221__auto__);
}));

(sablono.core.color_field42433.cljs$lang$maxFixedArity = 2);


sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field42433);

/**
 * Creates a date input field.
 */
sablono.core.date_field42451 = (function sablono$core$date_field42451(var_args){
var G__42453 = arguments.length;
switch (G__42453) {
case 1:
return sablono.core.date_field42451.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field42451.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.date_field42451.cljs$core$IFn$_invoke$arity$1 = (function (name__42220__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__42220__auto__);
}));

(sablono.core.date_field42451.cljs$core$IFn$_invoke$arity$2 = (function (name__42220__auto__,value__42221__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__42220__auto__,value__42221__auto__);
}));

(sablono.core.date_field42451.cljs$lang$maxFixedArity = 2);


sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field42451);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field42457 = (function sablono$core$datetime_field42457(var_args){
var G__42460 = arguments.length;
switch (G__42460) {
case 1:
return sablono.core.datetime_field42457.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field42457.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_field42457.cljs$core$IFn$_invoke$arity$1 = (function (name__42220__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__42220__auto__);
}));

(sablono.core.datetime_field42457.cljs$core$IFn$_invoke$arity$2 = (function (name__42220__auto__,value__42221__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__42220__auto__,value__42221__auto__);
}));

(sablono.core.datetime_field42457.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field42457);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field42476 = (function sablono$core$datetime_local_field42476(var_args){
var G__42480 = arguments.length;
switch (G__42480) {
case 1:
return sablono.core.datetime_local_field42476.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field42476.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_local_field42476.cljs$core$IFn$_invoke$arity$1 = (function (name__42220__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__42220__auto__);
}));

(sablono.core.datetime_local_field42476.cljs$core$IFn$_invoke$arity$2 = (function (name__42220__auto__,value__42221__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__42220__auto__,value__42221__auto__);
}));

(sablono.core.datetime_local_field42476.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field42476);

/**
 * Creates a email input field.
 */
sablono.core.email_field42484 = (function sablono$core$email_field42484(var_args){
var G__42490 = arguments.length;
switch (G__42490) {
case 1:
return sablono.core.email_field42484.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field42484.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.email_field42484.cljs$core$IFn$_invoke$arity$1 = (function (name__42220__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__42220__auto__);
}));

(sablono.core.email_field42484.cljs$core$IFn$_invoke$arity$2 = (function (name__42220__auto__,value__42221__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__42220__auto__,value__42221__auto__);
}));

(sablono.core.email_field42484.cljs$lang$maxFixedArity = 2);


sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field42484);

/**
 * Creates a file input field.
 */
sablono.core.file_field42492 = (function sablono$core$file_field42492(var_args){
var G__42495 = arguments.length;
switch (G__42495) {
case 1:
return sablono.core.file_field42492.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field42492.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.file_field42492.cljs$core$IFn$_invoke$arity$1 = (function (name__42220__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__42220__auto__);
}));

(sablono.core.file_field42492.cljs$core$IFn$_invoke$arity$2 = (function (name__42220__auto__,value__42221__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__42220__auto__,value__42221__auto__);
}));

(sablono.core.file_field42492.cljs$lang$maxFixedArity = 2);


sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field42492);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field42498 = (function sablono$core$hidden_field42498(var_args){
var G__42500 = arguments.length;
switch (G__42500) {
case 1:
return sablono.core.hidden_field42498.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field42498.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.hidden_field42498.cljs$core$IFn$_invoke$arity$1 = (function (name__42220__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__42220__auto__);
}));

(sablono.core.hidden_field42498.cljs$core$IFn$_invoke$arity$2 = (function (name__42220__auto__,value__42221__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__42220__auto__,value__42221__auto__);
}));

(sablono.core.hidden_field42498.cljs$lang$maxFixedArity = 2);


sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field42498);

/**
 * Creates a month input field.
 */
sablono.core.month_field42505 = (function sablono$core$month_field42505(var_args){
var G__42511 = arguments.length;
switch (G__42511) {
case 1:
return sablono.core.month_field42505.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field42505.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.month_field42505.cljs$core$IFn$_invoke$arity$1 = (function (name__42220__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__42220__auto__);
}));

(sablono.core.month_field42505.cljs$core$IFn$_invoke$arity$2 = (function (name__42220__auto__,value__42221__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__42220__auto__,value__42221__auto__);
}));

(sablono.core.month_field42505.cljs$lang$maxFixedArity = 2);


sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field42505);

/**
 * Creates a number input field.
 */
sablono.core.number_field42514 = (function sablono$core$number_field42514(var_args){
var G__42521 = arguments.length;
switch (G__42521) {
case 1:
return sablono.core.number_field42514.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field42514.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.number_field42514.cljs$core$IFn$_invoke$arity$1 = (function (name__42220__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__42220__auto__);
}));

(sablono.core.number_field42514.cljs$core$IFn$_invoke$arity$2 = (function (name__42220__auto__,value__42221__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__42220__auto__,value__42221__auto__);
}));

(sablono.core.number_field42514.cljs$lang$maxFixedArity = 2);


sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field42514);

/**
 * Creates a password input field.
 */
sablono.core.password_field42525 = (function sablono$core$password_field42525(var_args){
var G__42527 = arguments.length;
switch (G__42527) {
case 1:
return sablono.core.password_field42525.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field42525.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.password_field42525.cljs$core$IFn$_invoke$arity$1 = (function (name__42220__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__42220__auto__);
}));

(sablono.core.password_field42525.cljs$core$IFn$_invoke$arity$2 = (function (name__42220__auto__,value__42221__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__42220__auto__,value__42221__auto__);
}));

(sablono.core.password_field42525.cljs$lang$maxFixedArity = 2);


sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field42525);

/**
 * Creates a range input field.
 */
sablono.core.range_field42535 = (function sablono$core$range_field42535(var_args){
var G__42540 = arguments.length;
switch (G__42540) {
case 1:
return sablono.core.range_field42535.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field42535.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.range_field42535.cljs$core$IFn$_invoke$arity$1 = (function (name__42220__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__42220__auto__);
}));

(sablono.core.range_field42535.cljs$core$IFn$_invoke$arity$2 = (function (name__42220__auto__,value__42221__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__42220__auto__,value__42221__auto__);
}));

(sablono.core.range_field42535.cljs$lang$maxFixedArity = 2);


sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field42535);

/**
 * Creates a search input field.
 */
sablono.core.search_field42552 = (function sablono$core$search_field42552(var_args){
var G__42554 = arguments.length;
switch (G__42554) {
case 1:
return sablono.core.search_field42552.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field42552.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.search_field42552.cljs$core$IFn$_invoke$arity$1 = (function (name__42220__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__42220__auto__);
}));

(sablono.core.search_field42552.cljs$core$IFn$_invoke$arity$2 = (function (name__42220__auto__,value__42221__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__42220__auto__,value__42221__auto__);
}));

(sablono.core.search_field42552.cljs$lang$maxFixedArity = 2);


sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field42552);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field42564 = (function sablono$core$tel_field42564(var_args){
var G__42566 = arguments.length;
switch (G__42566) {
case 1:
return sablono.core.tel_field42564.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field42564.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.tel_field42564.cljs$core$IFn$_invoke$arity$1 = (function (name__42220__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__42220__auto__);
}));

(sablono.core.tel_field42564.cljs$core$IFn$_invoke$arity$2 = (function (name__42220__auto__,value__42221__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__42220__auto__,value__42221__auto__);
}));

(sablono.core.tel_field42564.cljs$lang$maxFixedArity = 2);


sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field42564);

/**
 * Creates a text input field.
 */
sablono.core.text_field42590 = (function sablono$core$text_field42590(var_args){
var G__42593 = arguments.length;
switch (G__42593) {
case 1:
return sablono.core.text_field42590.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field42590.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_field42590.cljs$core$IFn$_invoke$arity$1 = (function (name__42220__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__42220__auto__);
}));

(sablono.core.text_field42590.cljs$core$IFn$_invoke$arity$2 = (function (name__42220__auto__,value__42221__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__42220__auto__,value__42221__auto__);
}));

(sablono.core.text_field42590.cljs$lang$maxFixedArity = 2);


sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field42590);

/**
 * Creates a time input field.
 */
sablono.core.time_field42604 = (function sablono$core$time_field42604(var_args){
var G__42606 = arguments.length;
switch (G__42606) {
case 1:
return sablono.core.time_field42604.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field42604.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.time_field42604.cljs$core$IFn$_invoke$arity$1 = (function (name__42220__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__42220__auto__);
}));

(sablono.core.time_field42604.cljs$core$IFn$_invoke$arity$2 = (function (name__42220__auto__,value__42221__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__42220__auto__,value__42221__auto__);
}));

(sablono.core.time_field42604.cljs$lang$maxFixedArity = 2);


sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field42604);

/**
 * Creates a url input field.
 */
sablono.core.url_field42609 = (function sablono$core$url_field42609(var_args){
var G__42615 = arguments.length;
switch (G__42615) {
case 1:
return sablono.core.url_field42609.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field42609.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.url_field42609.cljs$core$IFn$_invoke$arity$1 = (function (name__42220__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__42220__auto__);
}));

(sablono.core.url_field42609.cljs$core$IFn$_invoke$arity$2 = (function (name__42220__auto__,value__42221__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__42220__auto__,value__42221__auto__);
}));

(sablono.core.url_field42609.cljs$lang$maxFixedArity = 2);


sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field42609);

/**
 * Creates a week input field.
 */
sablono.core.week_field42617 = (function sablono$core$week_field42617(var_args){
var G__42623 = arguments.length;
switch (G__42623) {
case 1:
return sablono.core.week_field42617.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field42617.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.week_field42617.cljs$core$IFn$_invoke$arity$1 = (function (name__42220__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__42220__auto__);
}));

(sablono.core.week_field42617.cljs$core$IFn$_invoke$arity$2 = (function (name__42220__auto__,value__42221__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__42220__auto__,value__42221__auto__);
}));

(sablono.core.week_field42617.cljs$lang$maxFixedArity = 2);


sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field42617);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box42628 = (function sablono$core$check_box42628(var_args){
var G__42632 = arguments.length;
switch (G__42632) {
case 1:
return sablono.core.check_box42628.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box42628.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box42628.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.check_box42628.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.check_box42628.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box42628.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box42628.cljs$lang$maxFixedArity = 3);


sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box42628);
/**
 * Creates a radio button.
 */
sablono.core.radio_button42634 = (function sablono$core$radio_button42634(var_args){
var G__42639 = arguments.length;
switch (G__42639) {
case 1:
return sablono.core.radio_button42634.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button42634.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button42634.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.radio_button42634.cljs$core$IFn$_invoke$arity$1 = (function (group){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)))], null)], null);
}));

(sablono.core.radio_button42634.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0))),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button42634.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id([sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)),"-",sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button42634.cljs$lang$maxFixedArity = 3);


sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button42634);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0)));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options42672 = (function sablono$core$select_options42672(coll){
var iter__4611__auto__ = (function sablono$core$select_options42672_$_iter__42680(s__42681){
return (new cljs.core.LazySeq(null,(function (){
var s__42681__$1 = s__42681;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__42681__$1);
if(temp__5753__auto__){
var s__42681__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__42681__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__42681__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__42683 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__42682 = (0);
while(true){
if((i__42682 < size__4610__auto__)){
var x = cljs.core._nth(c__4609__auto__,i__42682);
cljs.core.chunk_append(b__42683,((cljs.core.sequential_QMARK_(x))?(function (){var vec__42686 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42686,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42686,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42686,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),(sablono.core.select_options42672.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options42672.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options42672.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__42959 = (i__42682 + (1));
i__42682 = G__42959;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__42683),sablono$core$select_options42672_$_iter__42680(cljs.core.chunk_rest(s__42681__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__42683),null);
}
} else {
var x = cljs.core.first(s__42681__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__42694 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42694,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42694,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42694,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),(sablono.core.select_options42672.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options42672.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options42672.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options42672_$_iter__42680(cljs.core.rest(s__42681__$2)));
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

sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options42672);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down42699 = (function sablono$core$drop_down42699(var_args){
var G__42705 = arguments.length;
switch (G__42705) {
case 2:
return sablono.core.drop_down42699.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down42699.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.drop_down42699.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down42699.cljs$core$IFn$_invoke$arity$3(name,options,null);
}));

(sablono.core.drop_down42699.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null),sablono.core.select_options(options,selected)], null);
}));

(sablono.core.drop_down42699.cljs$lang$maxFixedArity = 3);


sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down42699);
/**
 * Creates a text area element.
 */
sablono.core.text_area42718 = (function sablono$core$text_area42718(var_args){
var G__42720 = arguments.length;
switch (G__42720) {
case 1:
return sablono.core.text_area42718.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area42718.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_area42718.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.text_area42718.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4212__auto__ = value;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return undefined;
}
})()], null)], null);
}));

(sablono.core.text_area42718.cljs$lang$maxFixedArity = 2);


sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area42718);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label42722 = (function sablono$core$label42722(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id(name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs(sablono.core.label42722);
/**
 * Creates a submit button.
 */
sablono.core.submit_button42723 = (function sablono$core$submit_button42723(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button42723);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button42724 = (function sablono$core$reset_button42724(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button42724);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to42725 = (function sablono$core$form_to42725(var_args){
var args__4824__auto__ = [];
var len__4818__auto___43023 = arguments.length;
var i__4819__auto___43024 = (0);
while(true){
if((i__4819__auto___43024 < len__4818__auto___43023)){
args__4824__auto__.push((arguments[i__4819__auto___43024]));

var G__43025 = (i__4819__auto___43024 + (1));
i__4819__auto___43024 = G__43025;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to42725.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(sablono.core.form_to42725.cljs$core$IFn$_invoke$arity$variadic = (function (p__42729,body){
var vec__42730 = p__42729;
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42730,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42730,(1),null);
var method_str = clojure.string.upper_case(cljs.core.name(method));
var action_uri = sablono.util.to_uri(action);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
}));

(sablono.core.form_to42725.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.form_to42725.cljs$lang$applyTo = (function (seq42726){
var G__42727 = cljs.core.first(seq42726);
var seq42726__$1 = cljs.core.next(seq42726);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42727,seq42726__$1);
}));


sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to42725);

//# sourceMappingURL=sablono.core.js.map
