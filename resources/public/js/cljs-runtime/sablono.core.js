goog.provide('sablono.core');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__42680__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args))){
var vec__42354 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));
var seq__42355 = cljs.core.seq(vec__42354);
var first__42356 = cljs.core.first(seq__42355);
var seq__42355__$1 = cljs.core.next(seq__42355);
var tag = first__42356;
var body = seq__42355__$1;
if(cljs.core.map_QMARK_(cljs.core.first(body))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.first(body),cljs.core.first(args)], 0))], null),cljs.core.rest(body));
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first(args)], null),body);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__42680 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42681__i = 0, G__42681__a = new Array(arguments.length -  0);
while (G__42681__i < G__42681__a.length) {G__42681__a[G__42681__i] = arguments[G__42681__i + 0]; ++G__42681__i;}
  args = new cljs.core.IndexedSeq(G__42681__a,0,null);
} 
return G__42680__delegate.call(this,args);};
G__42680.cljs$lang$maxFixedArity = 0;
G__42680.cljs$lang$applyTo = (function (arglist__42682){
var args = cljs.core.seq(arglist__42682);
return G__42680__delegate(args);
});
G__42680.cljs$core$IFn$_invoke$arity$variadic = G__42680__delegate;
return G__42680;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__4529__auto__ = (function sablono$core$update_arglists_$_iter__42359(s__42360){
return (new cljs.core.LazySeq(null,(function (){
var s__42360__$1 = s__42360;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__42360__$1);
if(temp__5735__auto__){
var s__42360__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__42360__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__42360__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__42362 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__42361 = (0);
while(true){
if((i__42361 < size__4528__auto__)){
var args = cljs.core._nth(c__4527__auto__,i__42361);
cljs.core.chunk_append(b__42362,cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__42684 = (i__42361 + (1));
i__42361 = G__42684;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__42362),sablono$core$update_arglists_$_iter__42359(cljs.core.chunk_rest(s__42360__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__42362),null);
}
} else {
var args = cljs.core.first(s__42360__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__42359(cljs.core.rest(s__42360__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__4742__auto__ = [];
var len__4736__auto___42686 = arguments.length;
var i__4737__auto___42687 = (0);
while(true){
if((i__4737__auto___42687 < len__4736__auto___42686)){
args__4742__auto__.push((arguments[i__4737__auto___42687]));

var G__42688 = (i__4737__auto___42687 + (1));
i__4737__auto___42687 = G__42688;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__4529__auto__ = (function sablono$core$iter__42390(s__42391){
return (new cljs.core.LazySeq(null,(function (){
var s__42391__$1 = s__42391;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__42391__$1);
if(temp__5735__auto__){
var s__42391__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__42391__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__42391__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__42393 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__42392 = (0);
while(true){
if((i__42392 < size__4528__auto__)){
var style = cljs.core._nth(c__4527__auto__,i__42392);
cljs.core.chunk_append(b__42393,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__42692 = (i__42392 + (1));
i__42392 = G__42692;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__42393),sablono$core$iter__42390(cljs.core.chunk_rest(s__42391__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__42393),null);
}
} else {
var style = cljs.core.first(s__42391__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__42390(cljs.core.rest(s__42391__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(styles);
}));

(sablono.core.include_css.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sablono.core.include_css.cljs$lang$applyTo = (function (seq42383){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42383));
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
sablono.core.link_to42408 = (function sablono$core$link_to42408(var_args){
var args__4742__auto__ = [];
var len__4736__auto___42696 = arguments.length;
var i__4737__auto___42697 = (0);
while(true){
if((i__4737__auto___42697 < len__4736__auto___42696)){
args__4742__auto__.push((arguments[i__4737__auto___42697]));

var G__42699 = (i__4737__auto___42697 + (1));
i__4737__auto___42697 = G__42699;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to42408.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(sablono.core.link_to42408.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([url], 0))], null),content], null);
}));

(sablono.core.link_to42408.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.link_to42408.cljs$lang$applyTo = (function (seq42410){
var G__42411 = cljs.core.first(seq42410);
var seq42410__$1 = cljs.core.next(seq42410);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42411,seq42410__$1);
}));


sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to42408);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to42438 = (function sablono$core$mail_to42438(var_args){
var args__4742__auto__ = [];
var len__4736__auto___42703 = arguments.length;
var i__4737__auto___42704 = (0);
while(true){
if((i__4737__auto___42704 < len__4736__auto___42703)){
args__4742__auto__.push((arguments[i__4737__auto___42704]));

var G__42705 = (i__4737__auto___42704 + (1));
i__4737__auto___42704 = G__42705;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to42438.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(sablono.core.mail_to42438.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__42451){
var vec__42452 = p__42451;
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42452,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__4126__auto__ = content;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return e_mail;
}
})()], null);
}));

(sablono.core.mail_to42438.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.mail_to42438.cljs$lang$applyTo = (function (seq42439){
var G__42440 = cljs.core.first(seq42439);
var seq42439__$1 = cljs.core.next(seq42439);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42440,seq42439__$1);
}));


sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to42438);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list42455 = (function sablono$core$unordered_list42455(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4529__auto__ = (function sablono$core$unordered_list42455_$_iter__42471(s__42472){
return (new cljs.core.LazySeq(null,(function (){
var s__42472__$1 = s__42472;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__42472__$1);
if(temp__5735__auto__){
var s__42472__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__42472__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__42472__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__42474 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__42473 = (0);
while(true){
if((i__42473 < size__4528__auto__)){
var x = cljs.core._nth(c__4527__auto__,i__42473);
cljs.core.chunk_append(b__42474,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__42707 = (i__42473 + (1));
i__42473 = G__42707;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__42474),sablono$core$unordered_list42455_$_iter__42471(cljs.core.chunk_rest(s__42472__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__42474),null);
}
} else {
var x = cljs.core.first(s__42472__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list42455_$_iter__42471(cljs.core.rest(s__42472__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list42455);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list42496 = (function sablono$core$ordered_list42496(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4529__auto__ = (function sablono$core$ordered_list42496_$_iter__42500(s__42501){
return (new cljs.core.LazySeq(null,(function (){
var s__42501__$1 = s__42501;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__42501__$1);
if(temp__5735__auto__){
var s__42501__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__42501__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__42501__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__42503 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__42502 = (0);
while(true){
if((i__42502 < size__4528__auto__)){
var x = cljs.core._nth(c__4527__auto__,i__42502);
cljs.core.chunk_append(b__42503,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__42709 = (i__42502 + (1));
i__42502 = G__42709;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__42503),sablono$core$ordered_list42496_$_iter__42500(cljs.core.chunk_rest(s__42501__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__42503),null);
}
} else {
var x = cljs.core.first(s__42501__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list42496_$_iter__42500(cljs.core.rest(s__42501__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list42496);
/**
 * Create an image element.
 */
sablono.core.image42504 = (function sablono$core$image42504(var_args){
var G__42507 = arguments.length;
switch (G__42507) {
case 1:
return sablono.core.image42504.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image42504.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.image42504.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0))], null)], null);
}));

(sablono.core.image42504.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0)),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
}));

(sablono.core.image42504.cljs$lang$maxFixedArity = 2);


sablono.core.image = sablono.core.wrap_attrs(sablono.core.image42504);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__42511_SHARP_,p2__42512_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__42511_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__42512_SHARP_),"]"].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__42513_SHARP_,p2__42514_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__42513_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__42514_SHARP_)].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(var_args){
var G__42516 = arguments.length;
switch (G__42516) {
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4126__auto__ = value;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return undefined;
}
})()], null)], null);
}));

(sablono.core.input_field_STAR_.cljs$lang$maxFixedArity = 3);

/**
 * Creates a color input field.
 */
sablono.core.color_field42522 = (function sablono$core$color_field42522(var_args){
var G__42524 = arguments.length;
switch (G__42524) {
case 1:
return sablono.core.color_field42522.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field42522.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.color_field42522.cljs$core$IFn$_invoke$arity$1 = (function (name__42341__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__42341__auto__);
}));

(sablono.core.color_field42522.cljs$core$IFn$_invoke$arity$2 = (function (name__42341__auto__,value__42342__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__42341__auto__,value__42342__auto__);
}));

(sablono.core.color_field42522.cljs$lang$maxFixedArity = 2);


sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field42522);

/**
 * Creates a date input field.
 */
sablono.core.date_field42529 = (function sablono$core$date_field42529(var_args){
var G__42533 = arguments.length;
switch (G__42533) {
case 1:
return sablono.core.date_field42529.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field42529.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.date_field42529.cljs$core$IFn$_invoke$arity$1 = (function (name__42341__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__42341__auto__);
}));

(sablono.core.date_field42529.cljs$core$IFn$_invoke$arity$2 = (function (name__42341__auto__,value__42342__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__42341__auto__,value__42342__auto__);
}));

(sablono.core.date_field42529.cljs$lang$maxFixedArity = 2);


sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field42529);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field42536 = (function sablono$core$datetime_field42536(var_args){
var G__42541 = arguments.length;
switch (G__42541) {
case 1:
return sablono.core.datetime_field42536.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field42536.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_field42536.cljs$core$IFn$_invoke$arity$1 = (function (name__42341__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__42341__auto__);
}));

(sablono.core.datetime_field42536.cljs$core$IFn$_invoke$arity$2 = (function (name__42341__auto__,value__42342__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__42341__auto__,value__42342__auto__);
}));

(sablono.core.datetime_field42536.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field42536);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field42547 = (function sablono$core$datetime_local_field42547(var_args){
var G__42557 = arguments.length;
switch (G__42557) {
case 1:
return sablono.core.datetime_local_field42547.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field42547.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_local_field42547.cljs$core$IFn$_invoke$arity$1 = (function (name__42341__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__42341__auto__);
}));

(sablono.core.datetime_local_field42547.cljs$core$IFn$_invoke$arity$2 = (function (name__42341__auto__,value__42342__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__42341__auto__,value__42342__auto__);
}));

(sablono.core.datetime_local_field42547.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field42547);

/**
 * Creates a email input field.
 */
sablono.core.email_field42558 = (function sablono$core$email_field42558(var_args){
var G__42560 = arguments.length;
switch (G__42560) {
case 1:
return sablono.core.email_field42558.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field42558.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.email_field42558.cljs$core$IFn$_invoke$arity$1 = (function (name__42341__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__42341__auto__);
}));

(sablono.core.email_field42558.cljs$core$IFn$_invoke$arity$2 = (function (name__42341__auto__,value__42342__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__42341__auto__,value__42342__auto__);
}));

(sablono.core.email_field42558.cljs$lang$maxFixedArity = 2);


sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field42558);

/**
 * Creates a file input field.
 */
sablono.core.file_field42561 = (function sablono$core$file_field42561(var_args){
var G__42563 = arguments.length;
switch (G__42563) {
case 1:
return sablono.core.file_field42561.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field42561.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.file_field42561.cljs$core$IFn$_invoke$arity$1 = (function (name__42341__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__42341__auto__);
}));

(sablono.core.file_field42561.cljs$core$IFn$_invoke$arity$2 = (function (name__42341__auto__,value__42342__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__42341__auto__,value__42342__auto__);
}));

(sablono.core.file_field42561.cljs$lang$maxFixedArity = 2);


sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field42561);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field42567 = (function sablono$core$hidden_field42567(var_args){
var G__42569 = arguments.length;
switch (G__42569) {
case 1:
return sablono.core.hidden_field42567.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field42567.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.hidden_field42567.cljs$core$IFn$_invoke$arity$1 = (function (name__42341__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__42341__auto__);
}));

(sablono.core.hidden_field42567.cljs$core$IFn$_invoke$arity$2 = (function (name__42341__auto__,value__42342__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__42341__auto__,value__42342__auto__);
}));

(sablono.core.hidden_field42567.cljs$lang$maxFixedArity = 2);


sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field42567);

/**
 * Creates a month input field.
 */
sablono.core.month_field42570 = (function sablono$core$month_field42570(var_args){
var G__42573 = arguments.length;
switch (G__42573) {
case 1:
return sablono.core.month_field42570.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field42570.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.month_field42570.cljs$core$IFn$_invoke$arity$1 = (function (name__42341__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__42341__auto__);
}));

(sablono.core.month_field42570.cljs$core$IFn$_invoke$arity$2 = (function (name__42341__auto__,value__42342__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__42341__auto__,value__42342__auto__);
}));

(sablono.core.month_field42570.cljs$lang$maxFixedArity = 2);


sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field42570);

/**
 * Creates a number input field.
 */
sablono.core.number_field42575 = (function sablono$core$number_field42575(var_args){
var G__42577 = arguments.length;
switch (G__42577) {
case 1:
return sablono.core.number_field42575.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field42575.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.number_field42575.cljs$core$IFn$_invoke$arity$1 = (function (name__42341__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__42341__auto__);
}));

(sablono.core.number_field42575.cljs$core$IFn$_invoke$arity$2 = (function (name__42341__auto__,value__42342__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__42341__auto__,value__42342__auto__);
}));

(sablono.core.number_field42575.cljs$lang$maxFixedArity = 2);


sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field42575);

/**
 * Creates a password input field.
 */
sablono.core.password_field42579 = (function sablono$core$password_field42579(var_args){
var G__42581 = arguments.length;
switch (G__42581) {
case 1:
return sablono.core.password_field42579.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field42579.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.password_field42579.cljs$core$IFn$_invoke$arity$1 = (function (name__42341__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__42341__auto__);
}));

(sablono.core.password_field42579.cljs$core$IFn$_invoke$arity$2 = (function (name__42341__auto__,value__42342__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__42341__auto__,value__42342__auto__);
}));

(sablono.core.password_field42579.cljs$lang$maxFixedArity = 2);


sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field42579);

/**
 * Creates a range input field.
 */
sablono.core.range_field42582 = (function sablono$core$range_field42582(var_args){
var G__42584 = arguments.length;
switch (G__42584) {
case 1:
return sablono.core.range_field42582.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field42582.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.range_field42582.cljs$core$IFn$_invoke$arity$1 = (function (name__42341__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__42341__auto__);
}));

(sablono.core.range_field42582.cljs$core$IFn$_invoke$arity$2 = (function (name__42341__auto__,value__42342__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__42341__auto__,value__42342__auto__);
}));

(sablono.core.range_field42582.cljs$lang$maxFixedArity = 2);


sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field42582);

/**
 * Creates a search input field.
 */
sablono.core.search_field42585 = (function sablono$core$search_field42585(var_args){
var G__42588 = arguments.length;
switch (G__42588) {
case 1:
return sablono.core.search_field42585.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field42585.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.search_field42585.cljs$core$IFn$_invoke$arity$1 = (function (name__42341__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__42341__auto__);
}));

(sablono.core.search_field42585.cljs$core$IFn$_invoke$arity$2 = (function (name__42341__auto__,value__42342__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__42341__auto__,value__42342__auto__);
}));

(sablono.core.search_field42585.cljs$lang$maxFixedArity = 2);


sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field42585);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field42590 = (function sablono$core$tel_field42590(var_args){
var G__42592 = arguments.length;
switch (G__42592) {
case 1:
return sablono.core.tel_field42590.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field42590.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.tel_field42590.cljs$core$IFn$_invoke$arity$1 = (function (name__42341__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__42341__auto__);
}));

(sablono.core.tel_field42590.cljs$core$IFn$_invoke$arity$2 = (function (name__42341__auto__,value__42342__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__42341__auto__,value__42342__auto__);
}));

(sablono.core.tel_field42590.cljs$lang$maxFixedArity = 2);


sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field42590);

/**
 * Creates a text input field.
 */
sablono.core.text_field42594 = (function sablono$core$text_field42594(var_args){
var G__42596 = arguments.length;
switch (G__42596) {
case 1:
return sablono.core.text_field42594.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field42594.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_field42594.cljs$core$IFn$_invoke$arity$1 = (function (name__42341__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__42341__auto__);
}));

(sablono.core.text_field42594.cljs$core$IFn$_invoke$arity$2 = (function (name__42341__auto__,value__42342__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__42341__auto__,value__42342__auto__);
}));

(sablono.core.text_field42594.cljs$lang$maxFixedArity = 2);


sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field42594);

/**
 * Creates a time input field.
 */
sablono.core.time_field42597 = (function sablono$core$time_field42597(var_args){
var G__42599 = arguments.length;
switch (G__42599) {
case 1:
return sablono.core.time_field42597.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field42597.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.time_field42597.cljs$core$IFn$_invoke$arity$1 = (function (name__42341__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__42341__auto__);
}));

(sablono.core.time_field42597.cljs$core$IFn$_invoke$arity$2 = (function (name__42341__auto__,value__42342__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__42341__auto__,value__42342__auto__);
}));

(sablono.core.time_field42597.cljs$lang$maxFixedArity = 2);


sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field42597);

/**
 * Creates a url input field.
 */
sablono.core.url_field42601 = (function sablono$core$url_field42601(var_args){
var G__42603 = arguments.length;
switch (G__42603) {
case 1:
return sablono.core.url_field42601.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field42601.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.url_field42601.cljs$core$IFn$_invoke$arity$1 = (function (name__42341__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__42341__auto__);
}));

(sablono.core.url_field42601.cljs$core$IFn$_invoke$arity$2 = (function (name__42341__auto__,value__42342__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__42341__auto__,value__42342__auto__);
}));

(sablono.core.url_field42601.cljs$lang$maxFixedArity = 2);


sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field42601);

/**
 * Creates a week input field.
 */
sablono.core.week_field42604 = (function sablono$core$week_field42604(var_args){
var G__42606 = arguments.length;
switch (G__42606) {
case 1:
return sablono.core.week_field42604.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field42604.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.week_field42604.cljs$core$IFn$_invoke$arity$1 = (function (name__42341__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__42341__auto__);
}));

(sablono.core.week_field42604.cljs$core$IFn$_invoke$arity$2 = (function (name__42341__auto__,value__42342__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__42341__auto__,value__42342__auto__);
}));

(sablono.core.week_field42604.cljs$lang$maxFixedArity = 2);


sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field42604);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box42607 = (function sablono$core$check_box42607(var_args){
var G__42609 = arguments.length;
switch (G__42609) {
case 1:
return sablono.core.check_box42607.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box42607.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box42607.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.check_box42607.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.check_box42607.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box42607.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box42607.cljs$lang$maxFixedArity = 3);


sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box42607);
/**
 * Creates a radio button.
 */
sablono.core.radio_button42610 = (function sablono$core$radio_button42610(var_args){
var G__42612 = arguments.length;
switch (G__42612) {
case 1:
return sablono.core.radio_button42610.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button42610.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button42610.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.radio_button42610.cljs$core$IFn$_invoke$arity$1 = (function (group){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)))], null)], null);
}));

(sablono.core.radio_button42610.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0))),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button42610.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id([sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)),"-",sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button42610.cljs$lang$maxFixedArity = 3);


sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button42610);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0)));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options42613 = (function sablono$core$select_options42613(coll){
var iter__4529__auto__ = (function sablono$core$select_options42613_$_iter__42614(s__42615){
return (new cljs.core.LazySeq(null,(function (){
var s__42615__$1 = s__42615;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__42615__$1);
if(temp__5735__auto__){
var s__42615__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__42615__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__42615__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__42617 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__42616 = (0);
while(true){
if((i__42616 < size__4528__auto__)){
var x = cljs.core._nth(c__4527__auto__,i__42616);
cljs.core.chunk_append(b__42617,((cljs.core.sequential_QMARK_(x))?(function (){var vec__42618 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42618,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42618,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42618,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),(sablono.core.select_options42613.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options42613.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options42613.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__42783 = (i__42616 + (1));
i__42616 = G__42783;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__42617),sablono$core$select_options42613_$_iter__42614(cljs.core.chunk_rest(s__42615__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__42617),null);
}
} else {
var x = cljs.core.first(s__42615__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__42621 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42621,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42621,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42621,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),(sablono.core.select_options42613.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options42613.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options42613.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options42613_$_iter__42614(cljs.core.rest(s__42615__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(coll);
});

sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options42613);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down42624 = (function sablono$core$drop_down42624(var_args){
var G__42627 = arguments.length;
switch (G__42627) {
case 2:
return sablono.core.drop_down42624.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down42624.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.drop_down42624.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down42624.cljs$core$IFn$_invoke$arity$3(name,options,null);
}));

(sablono.core.drop_down42624.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null),sablono.core.select_options(options,selected)], null);
}));

(sablono.core.drop_down42624.cljs$lang$maxFixedArity = 3);


sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down42624);
/**
 * Creates a text area element.
 */
sablono.core.text_area42640 = (function sablono$core$text_area42640(var_args){
var G__42650 = arguments.length;
switch (G__42650) {
case 1:
return sablono.core.text_area42640.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area42640.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_area42640.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.text_area42640.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4126__auto__ = value;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return undefined;
}
})()], null)], null);
}));

(sablono.core.text_area42640.cljs$lang$maxFixedArity = 2);


sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area42640);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label42662 = (function sablono$core$label42662(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id(name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs(sablono.core.label42662);
/**
 * Creates a submit button.
 */
sablono.core.submit_button42663 = (function sablono$core$submit_button42663(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button42663);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button42664 = (function sablono$core$reset_button42664(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button42664);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to42665 = (function sablono$core$form_to42665(var_args){
var args__4742__auto__ = [];
var len__4736__auto___42798 = arguments.length;
var i__4737__auto___42799 = (0);
while(true){
if((i__4737__auto___42799 < len__4736__auto___42798)){
args__4742__auto__.push((arguments[i__4737__auto___42799]));

var G__42802 = (i__4737__auto___42799 + (1));
i__4737__auto___42799 = G__42802;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to42665.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(sablono.core.form_to42665.cljs$core$IFn$_invoke$arity$variadic = (function (p__42669,body){
var vec__42670 = p__42669;
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42670,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42670,(1),null);
var method_str = clojure.string.upper_case(cljs.core.name(method));
var action_uri = sablono.util.to_uri(action);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
}));

(sablono.core.form_to42665.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.form_to42665.cljs$lang$applyTo = (function (seq42666){
var G__42667 = cljs.core.first(seq42666);
var seq42666__$1 = cljs.core.next(seq42666);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42667,seq42666__$1);
}));


sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to42665);

//# sourceMappingURL=sablono.core.js.map
