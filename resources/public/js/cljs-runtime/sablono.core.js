goog.provide('sablono.core');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__42956__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args))){
var vec__42627 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));
var seq__42628 = cljs.core.seq(vec__42627);
var first__42629 = cljs.core.first(seq__42628);
var seq__42628__$1 = cljs.core.next(seq__42628);
var tag = first__42629;
var body = seq__42628__$1;
if(cljs.core.map_QMARK_(cljs.core.first(body))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.first(body),cljs.core.first(args)], 0))], null),cljs.core.rest(body));
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first(args)], null),body);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__42956 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42958__i = 0, G__42958__a = new Array(arguments.length -  0);
while (G__42958__i < G__42958__a.length) {G__42958__a[G__42958__i] = arguments[G__42958__i + 0]; ++G__42958__i;}
  args = new cljs.core.IndexedSeq(G__42958__a,0,null);
} 
return G__42956__delegate.call(this,args);};
G__42956.cljs$lang$maxFixedArity = 0;
G__42956.cljs$lang$applyTo = (function (arglist__42959){
var args = cljs.core.seq(arglist__42959);
return G__42956__delegate(args);
});
G__42956.cljs$core$IFn$_invoke$arity$variadic = G__42956__delegate;
return G__42956;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__4611__auto__ = (function sablono$core$update_arglists_$_iter__42631(s__42632){
return (new cljs.core.LazySeq(null,(function (){
var s__42632__$1 = s__42632;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__42632__$1);
if(temp__5753__auto__){
var s__42632__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__42632__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__42632__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__42635 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__42634 = (0);
while(true){
if((i__42634 < size__4610__auto__)){
var args = cljs.core._nth(c__4609__auto__,i__42634);
cljs.core.chunk_append(b__42635,cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__42984 = (i__42634 + (1));
i__42634 = G__42984;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__42635),sablono$core$update_arglists_$_iter__42631(cljs.core.chunk_rest(s__42632__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__42635),null);
}
} else {
var args = cljs.core.first(s__42632__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__42631(cljs.core.rest(s__42632__$2)));
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
var len__4818__auto___42989 = arguments.length;
var i__4819__auto___42990 = (0);
while(true){
if((i__4819__auto___42990 < len__4818__auto___42989)){
args__4824__auto__.push((arguments[i__4819__auto___42990]));

var G__42991 = (i__4819__auto___42990 + (1));
i__4819__auto___42990 = G__42991;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__4611__auto__ = (function sablono$core$iter__42650(s__42651){
return (new cljs.core.LazySeq(null,(function (){
var s__42651__$1 = s__42651;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__42651__$1);
if(temp__5753__auto__){
var s__42651__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__42651__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__42651__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__42653 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__42652 = (0);
while(true){
if((i__42652 < size__4610__auto__)){
var style = cljs.core._nth(c__4609__auto__,i__42652);
cljs.core.chunk_append(b__42653,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__42994 = (i__42652 + (1));
i__42652 = G__42994;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__42653),sablono$core$iter__42650(cljs.core.chunk_rest(s__42651__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__42653),null);
}
} else {
var style = cljs.core.first(s__42651__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__42650(cljs.core.rest(s__42651__$2)));
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
(sablono.core.include_css.cljs$lang$applyTo = (function (seq42642){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42642));
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
sablono.core.link_to42665 = (function sablono$core$link_to42665(var_args){
var args__4824__auto__ = [];
var len__4818__auto___43007 = arguments.length;
var i__4819__auto___43008 = (0);
while(true){
if((i__4819__auto___43008 < len__4818__auto___43007)){
args__4824__auto__.push((arguments[i__4819__auto___43008]));

var G__43011 = (i__4819__auto___43008 + (1));
i__4819__auto___43008 = G__43011;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to42665.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(sablono.core.link_to42665.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([url], 0))], null),content], null);
}));

(sablono.core.link_to42665.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.link_to42665.cljs$lang$applyTo = (function (seq42666){
var G__42667 = cljs.core.first(seq42666);
var seq42666__$1 = cljs.core.next(seq42666);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42667,seq42666__$1);
}));


sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to42665);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to42683 = (function sablono$core$mail_to42683(var_args){
var args__4824__auto__ = [];
var len__4818__auto___43020 = arguments.length;
var i__4819__auto___43022 = (0);
while(true){
if((i__4819__auto___43022 < len__4818__auto___43020)){
args__4824__auto__.push((arguments[i__4819__auto___43022]));

var G__43023 = (i__4819__auto___43022 + (1));
i__4819__auto___43022 = G__43023;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to42683.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(sablono.core.mail_to42683.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__42690){
var vec__42691 = p__42690;
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42691,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__4212__auto__ = content;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return e_mail;
}
})()], null);
}));

(sablono.core.mail_to42683.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.mail_to42683.cljs$lang$applyTo = (function (seq42687){
var G__42688 = cljs.core.first(seq42687);
var seq42687__$1 = cljs.core.next(seq42687);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42688,seq42687__$1);
}));


sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to42683);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list42698 = (function sablono$core$unordered_list42698(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4611__auto__ = (function sablono$core$unordered_list42698_$_iter__42699(s__42700){
return (new cljs.core.LazySeq(null,(function (){
var s__42700__$1 = s__42700;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__42700__$1);
if(temp__5753__auto__){
var s__42700__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__42700__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__42700__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__42702 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__42701 = (0);
while(true){
if((i__42701 < size__4610__auto__)){
var x = cljs.core._nth(c__4609__auto__,i__42701);
cljs.core.chunk_append(b__42702,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__43030 = (i__42701 + (1));
i__42701 = G__43030;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__42702),sablono$core$unordered_list42698_$_iter__42699(cljs.core.chunk_rest(s__42700__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__42702),null);
}
} else {
var x = cljs.core.first(s__42700__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list42698_$_iter__42699(cljs.core.rest(s__42700__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list42698);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list42733 = (function sablono$core$ordered_list42733(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4611__auto__ = (function sablono$core$ordered_list42733_$_iter__42734(s__42735){
return (new cljs.core.LazySeq(null,(function (){
var s__42735__$1 = s__42735;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__42735__$1);
if(temp__5753__auto__){
var s__42735__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__42735__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__42735__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__42737 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__42736 = (0);
while(true){
if((i__42736 < size__4610__auto__)){
var x = cljs.core._nth(c__4609__auto__,i__42736);
cljs.core.chunk_append(b__42737,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__43032 = (i__42736 + (1));
i__42736 = G__43032;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__42737),sablono$core$ordered_list42733_$_iter__42734(cljs.core.chunk_rest(s__42735__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__42737),null);
}
} else {
var x = cljs.core.first(s__42735__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list42733_$_iter__42734(cljs.core.rest(s__42735__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list42733);
/**
 * Create an image element.
 */
sablono.core.image42742 = (function sablono$core$image42742(var_args){
var G__42744 = arguments.length;
switch (G__42744) {
case 1:
return sablono.core.image42742.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image42742.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.image42742.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0))], null)], null);
}));

(sablono.core.image42742.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0)),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
}));

(sablono.core.image42742.cljs$lang$maxFixedArity = 2);


sablono.core.image = sablono.core.wrap_attrs(sablono.core.image42742);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__42745_SHARP_,p2__42746_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__42745_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__42746_SHARP_),"]"].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__42747_SHARP_,p2__42748_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__42747_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__42748_SHARP_)].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(var_args){
var G__42752 = arguments.length;
switch (G__42752) {
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
sablono.core.color_field42757 = (function sablono$core$color_field42757(var_args){
var G__42759 = arguments.length;
switch (G__42759) {
case 1:
return sablono.core.color_field42757.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field42757.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.color_field42757.cljs$core$IFn$_invoke$arity$1 = (function (name__42614__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__42614__auto__);
}));

(sablono.core.color_field42757.cljs$core$IFn$_invoke$arity$2 = (function (name__42614__auto__,value__42615__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__42614__auto__,value__42615__auto__);
}));

(sablono.core.color_field42757.cljs$lang$maxFixedArity = 2);


sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field42757);

/**
 * Creates a date input field.
 */
sablono.core.date_field42766 = (function sablono$core$date_field42766(var_args){
var G__42769 = arguments.length;
switch (G__42769) {
case 1:
return sablono.core.date_field42766.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field42766.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.date_field42766.cljs$core$IFn$_invoke$arity$1 = (function (name__42614__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__42614__auto__);
}));

(sablono.core.date_field42766.cljs$core$IFn$_invoke$arity$2 = (function (name__42614__auto__,value__42615__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__42614__auto__,value__42615__auto__);
}));

(sablono.core.date_field42766.cljs$lang$maxFixedArity = 2);


sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field42766);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field42773 = (function sablono$core$datetime_field42773(var_args){
var G__42775 = arguments.length;
switch (G__42775) {
case 1:
return sablono.core.datetime_field42773.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field42773.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_field42773.cljs$core$IFn$_invoke$arity$1 = (function (name__42614__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__42614__auto__);
}));

(sablono.core.datetime_field42773.cljs$core$IFn$_invoke$arity$2 = (function (name__42614__auto__,value__42615__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__42614__auto__,value__42615__auto__);
}));

(sablono.core.datetime_field42773.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field42773);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field42779 = (function sablono$core$datetime_local_field42779(var_args){
var G__42781 = arguments.length;
switch (G__42781) {
case 1:
return sablono.core.datetime_local_field42779.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field42779.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_local_field42779.cljs$core$IFn$_invoke$arity$1 = (function (name__42614__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__42614__auto__);
}));

(sablono.core.datetime_local_field42779.cljs$core$IFn$_invoke$arity$2 = (function (name__42614__auto__,value__42615__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__42614__auto__,value__42615__auto__);
}));

(sablono.core.datetime_local_field42779.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field42779);

/**
 * Creates a email input field.
 */
sablono.core.email_field42782 = (function sablono$core$email_field42782(var_args){
var G__42784 = arguments.length;
switch (G__42784) {
case 1:
return sablono.core.email_field42782.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field42782.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.email_field42782.cljs$core$IFn$_invoke$arity$1 = (function (name__42614__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__42614__auto__);
}));

(sablono.core.email_field42782.cljs$core$IFn$_invoke$arity$2 = (function (name__42614__auto__,value__42615__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__42614__auto__,value__42615__auto__);
}));

(sablono.core.email_field42782.cljs$lang$maxFixedArity = 2);


sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field42782);

/**
 * Creates a file input field.
 */
sablono.core.file_field42785 = (function sablono$core$file_field42785(var_args){
var G__42787 = arguments.length;
switch (G__42787) {
case 1:
return sablono.core.file_field42785.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field42785.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.file_field42785.cljs$core$IFn$_invoke$arity$1 = (function (name__42614__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__42614__auto__);
}));

(sablono.core.file_field42785.cljs$core$IFn$_invoke$arity$2 = (function (name__42614__auto__,value__42615__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__42614__auto__,value__42615__auto__);
}));

(sablono.core.file_field42785.cljs$lang$maxFixedArity = 2);


sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field42785);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field42788 = (function sablono$core$hidden_field42788(var_args){
var G__42790 = arguments.length;
switch (G__42790) {
case 1:
return sablono.core.hidden_field42788.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field42788.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.hidden_field42788.cljs$core$IFn$_invoke$arity$1 = (function (name__42614__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__42614__auto__);
}));

(sablono.core.hidden_field42788.cljs$core$IFn$_invoke$arity$2 = (function (name__42614__auto__,value__42615__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__42614__auto__,value__42615__auto__);
}));

(sablono.core.hidden_field42788.cljs$lang$maxFixedArity = 2);


sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field42788);

/**
 * Creates a month input field.
 */
sablono.core.month_field42791 = (function sablono$core$month_field42791(var_args){
var G__42793 = arguments.length;
switch (G__42793) {
case 1:
return sablono.core.month_field42791.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field42791.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.month_field42791.cljs$core$IFn$_invoke$arity$1 = (function (name__42614__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__42614__auto__);
}));

(sablono.core.month_field42791.cljs$core$IFn$_invoke$arity$2 = (function (name__42614__auto__,value__42615__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__42614__auto__,value__42615__auto__);
}));

(sablono.core.month_field42791.cljs$lang$maxFixedArity = 2);


sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field42791);

/**
 * Creates a number input field.
 */
sablono.core.number_field42794 = (function sablono$core$number_field42794(var_args){
var G__42796 = arguments.length;
switch (G__42796) {
case 1:
return sablono.core.number_field42794.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field42794.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.number_field42794.cljs$core$IFn$_invoke$arity$1 = (function (name__42614__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__42614__auto__);
}));

(sablono.core.number_field42794.cljs$core$IFn$_invoke$arity$2 = (function (name__42614__auto__,value__42615__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__42614__auto__,value__42615__auto__);
}));

(sablono.core.number_field42794.cljs$lang$maxFixedArity = 2);


sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field42794);

/**
 * Creates a password input field.
 */
sablono.core.password_field42799 = (function sablono$core$password_field42799(var_args){
var G__42801 = arguments.length;
switch (G__42801) {
case 1:
return sablono.core.password_field42799.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field42799.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.password_field42799.cljs$core$IFn$_invoke$arity$1 = (function (name__42614__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__42614__auto__);
}));

(sablono.core.password_field42799.cljs$core$IFn$_invoke$arity$2 = (function (name__42614__auto__,value__42615__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__42614__auto__,value__42615__auto__);
}));

(sablono.core.password_field42799.cljs$lang$maxFixedArity = 2);


sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field42799);

/**
 * Creates a range input field.
 */
sablono.core.range_field42803 = (function sablono$core$range_field42803(var_args){
var G__42805 = arguments.length;
switch (G__42805) {
case 1:
return sablono.core.range_field42803.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field42803.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.range_field42803.cljs$core$IFn$_invoke$arity$1 = (function (name__42614__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__42614__auto__);
}));

(sablono.core.range_field42803.cljs$core$IFn$_invoke$arity$2 = (function (name__42614__auto__,value__42615__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__42614__auto__,value__42615__auto__);
}));

(sablono.core.range_field42803.cljs$lang$maxFixedArity = 2);


sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field42803);

/**
 * Creates a search input field.
 */
sablono.core.search_field42806 = (function sablono$core$search_field42806(var_args){
var G__42812 = arguments.length;
switch (G__42812) {
case 1:
return sablono.core.search_field42806.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field42806.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.search_field42806.cljs$core$IFn$_invoke$arity$1 = (function (name__42614__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__42614__auto__);
}));

(sablono.core.search_field42806.cljs$core$IFn$_invoke$arity$2 = (function (name__42614__auto__,value__42615__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__42614__auto__,value__42615__auto__);
}));

(sablono.core.search_field42806.cljs$lang$maxFixedArity = 2);


sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field42806);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field42814 = (function sablono$core$tel_field42814(var_args){
var G__42816 = arguments.length;
switch (G__42816) {
case 1:
return sablono.core.tel_field42814.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field42814.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.tel_field42814.cljs$core$IFn$_invoke$arity$1 = (function (name__42614__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__42614__auto__);
}));

(sablono.core.tel_field42814.cljs$core$IFn$_invoke$arity$2 = (function (name__42614__auto__,value__42615__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__42614__auto__,value__42615__auto__);
}));

(sablono.core.tel_field42814.cljs$lang$maxFixedArity = 2);


sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field42814);

/**
 * Creates a text input field.
 */
sablono.core.text_field42822 = (function sablono$core$text_field42822(var_args){
var G__42824 = arguments.length;
switch (G__42824) {
case 1:
return sablono.core.text_field42822.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field42822.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_field42822.cljs$core$IFn$_invoke$arity$1 = (function (name__42614__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__42614__auto__);
}));

(sablono.core.text_field42822.cljs$core$IFn$_invoke$arity$2 = (function (name__42614__auto__,value__42615__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__42614__auto__,value__42615__auto__);
}));

(sablono.core.text_field42822.cljs$lang$maxFixedArity = 2);


sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field42822);

/**
 * Creates a time input field.
 */
sablono.core.time_field42825 = (function sablono$core$time_field42825(var_args){
var G__42845 = arguments.length;
switch (G__42845) {
case 1:
return sablono.core.time_field42825.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field42825.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.time_field42825.cljs$core$IFn$_invoke$arity$1 = (function (name__42614__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__42614__auto__);
}));

(sablono.core.time_field42825.cljs$core$IFn$_invoke$arity$2 = (function (name__42614__auto__,value__42615__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__42614__auto__,value__42615__auto__);
}));

(sablono.core.time_field42825.cljs$lang$maxFixedArity = 2);


sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field42825);

/**
 * Creates a url input field.
 */
sablono.core.url_field42855 = (function sablono$core$url_field42855(var_args){
var G__42862 = arguments.length;
switch (G__42862) {
case 1:
return sablono.core.url_field42855.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field42855.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.url_field42855.cljs$core$IFn$_invoke$arity$1 = (function (name__42614__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__42614__auto__);
}));

(sablono.core.url_field42855.cljs$core$IFn$_invoke$arity$2 = (function (name__42614__auto__,value__42615__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__42614__auto__,value__42615__auto__);
}));

(sablono.core.url_field42855.cljs$lang$maxFixedArity = 2);


sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field42855);

/**
 * Creates a week input field.
 */
sablono.core.week_field42871 = (function sablono$core$week_field42871(var_args){
var G__42875 = arguments.length;
switch (G__42875) {
case 1:
return sablono.core.week_field42871.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field42871.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.week_field42871.cljs$core$IFn$_invoke$arity$1 = (function (name__42614__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__42614__auto__);
}));

(sablono.core.week_field42871.cljs$core$IFn$_invoke$arity$2 = (function (name__42614__auto__,value__42615__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__42614__auto__,value__42615__auto__);
}));

(sablono.core.week_field42871.cljs$lang$maxFixedArity = 2);


sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field42871);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box42880 = (function sablono$core$check_box42880(var_args){
var G__42882 = arguments.length;
switch (G__42882) {
case 1:
return sablono.core.check_box42880.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box42880.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box42880.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.check_box42880.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.check_box42880.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box42880.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box42880.cljs$lang$maxFixedArity = 3);


sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box42880);
/**
 * Creates a radio button.
 */
sablono.core.radio_button42895 = (function sablono$core$radio_button42895(var_args){
var G__42897 = arguments.length;
switch (G__42897) {
case 1:
return sablono.core.radio_button42895.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button42895.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button42895.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.radio_button42895.cljs$core$IFn$_invoke$arity$1 = (function (group){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)))], null)], null);
}));

(sablono.core.radio_button42895.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0))),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button42895.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id([sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)),"-",sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button42895.cljs$lang$maxFixedArity = 3);


sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button42895);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0)));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options42907 = (function sablono$core$select_options42907(coll){
var iter__4611__auto__ = (function sablono$core$select_options42907_$_iter__42908(s__42909){
return (new cljs.core.LazySeq(null,(function (){
var s__42909__$1 = s__42909;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__42909__$1);
if(temp__5753__auto__){
var s__42909__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__42909__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__42909__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__42911 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__42910 = (0);
while(true){
if((i__42910 < size__4610__auto__)){
var x = cljs.core._nth(c__4609__auto__,i__42910);
cljs.core.chunk_append(b__42911,((cljs.core.sequential_QMARK_(x))?(function (){var vec__42912 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42912,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42912,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42912,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),(sablono.core.select_options42907.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options42907.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options42907.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__43115 = (i__42910 + (1));
i__42910 = G__43115;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__42911),sablono$core$select_options42907_$_iter__42908(cljs.core.chunk_rest(s__42909__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__42911),null);
}
} else {
var x = cljs.core.first(s__42909__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__42917 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42917,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42917,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42917,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),(sablono.core.select_options42907.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options42907.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options42907.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options42907_$_iter__42908(cljs.core.rest(s__42909__$2)));
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

sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options42907);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down42921 = (function sablono$core$drop_down42921(var_args){
var G__42923 = arguments.length;
switch (G__42923) {
case 2:
return sablono.core.drop_down42921.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down42921.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.drop_down42921.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down42921.cljs$core$IFn$_invoke$arity$3(name,options,null);
}));

(sablono.core.drop_down42921.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null),sablono.core.select_options(options,selected)], null);
}));

(sablono.core.drop_down42921.cljs$lang$maxFixedArity = 3);


sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down42921);
/**
 * Creates a text area element.
 */
sablono.core.text_area42925 = (function sablono$core$text_area42925(var_args){
var G__42927 = arguments.length;
switch (G__42927) {
case 1:
return sablono.core.text_area42925.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area42925.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_area42925.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.text_area42925.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4212__auto__ = value;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return undefined;
}
})()], null)], null);
}));

(sablono.core.text_area42925.cljs$lang$maxFixedArity = 2);


sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area42925);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label42934 = (function sablono$core$label42934(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id(name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs(sablono.core.label42934);
/**
 * Creates a submit button.
 */
sablono.core.submit_button42935 = (function sablono$core$submit_button42935(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button42935);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button42937 = (function sablono$core$reset_button42937(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button42937);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to42938 = (function sablono$core$form_to42938(var_args){
var args__4824__auto__ = [];
var len__4818__auto___43128 = arguments.length;
var i__4819__auto___43129 = (0);
while(true){
if((i__4819__auto___43129 < len__4818__auto___43128)){
args__4824__auto__.push((arguments[i__4819__auto___43129]));

var G__43130 = (i__4819__auto___43129 + (1));
i__4819__auto___43129 = G__43130;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to42938.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(sablono.core.form_to42938.cljs$core$IFn$_invoke$arity$variadic = (function (p__42943,body){
var vec__42944 = p__42943;
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42944,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42944,(1),null);
var method_str = clojure.string.upper_case(cljs.core.name(method));
var action_uri = sablono.util.to_uri(action);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
}));

(sablono.core.form_to42938.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.form_to42938.cljs$lang$applyTo = (function (seq42939){
var G__42940 = cljs.core.first(seq42939);
var seq42939__$1 = cljs.core.next(seq42939);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42940,seq42939__$1);
}));


sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to42938);

//# sourceMappingURL=sablono.core.js.map
