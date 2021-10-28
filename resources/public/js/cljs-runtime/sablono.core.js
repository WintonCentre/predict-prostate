goog.provide('sablono.core');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__42673__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args))){
var vec__42350 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));
var seq__42351 = cljs.core.seq(vec__42350);
var first__42352 = cljs.core.first(seq__42351);
var seq__42351__$1 = cljs.core.next(seq__42351);
var tag = first__42352;
var body = seq__42351__$1;
if(cljs.core.map_QMARK_(cljs.core.first(body))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.first(body),cljs.core.first(args)], 0))], null),cljs.core.rest(body));
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first(args)], null),body);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__42673 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42684__i = 0, G__42684__a = new Array(arguments.length -  0);
while (G__42684__i < G__42684__a.length) {G__42684__a[G__42684__i] = arguments[G__42684__i + 0]; ++G__42684__i;}
  args = new cljs.core.IndexedSeq(G__42684__a,0,null);
} 
return G__42673__delegate.call(this,args);};
G__42673.cljs$lang$maxFixedArity = 0;
G__42673.cljs$lang$applyTo = (function (arglist__42685){
var args = cljs.core.seq(arglist__42685);
return G__42673__delegate(args);
});
G__42673.cljs$core$IFn$_invoke$arity$variadic = G__42673__delegate;
return G__42673;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__4529__auto__ = (function sablono$core$update_arglists_$_iter__42355(s__42356){
return (new cljs.core.LazySeq(null,(function (){
var s__42356__$1 = s__42356;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__42356__$1);
if(temp__5735__auto__){
var s__42356__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__42356__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__42356__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__42358 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__42357 = (0);
while(true){
if((i__42357 < size__4528__auto__)){
var args = cljs.core._nth(c__4527__auto__,i__42357);
cljs.core.chunk_append(b__42358,cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__42688 = (i__42357 + (1));
i__42357 = G__42688;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__42358),sablono$core$update_arglists_$_iter__42355(cljs.core.chunk_rest(s__42356__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__42358),null);
}
} else {
var args = cljs.core.first(s__42356__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__42355(cljs.core.rest(s__42356__$2)));
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
var len__4736__auto___42689 = arguments.length;
var i__4737__auto___42690 = (0);
while(true){
if((i__4737__auto___42690 < len__4736__auto___42689)){
args__4742__auto__.push((arguments[i__4737__auto___42690]));

var G__42691 = (i__4737__auto___42690 + (1));
i__4737__auto___42690 = G__42691;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__4529__auto__ = (function sablono$core$iter__42369(s__42370){
return (new cljs.core.LazySeq(null,(function (){
var s__42370__$1 = s__42370;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__42370__$1);
if(temp__5735__auto__){
var s__42370__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__42370__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__42370__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__42372 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__42371 = (0);
while(true){
if((i__42371 < size__4528__auto__)){
var style = cljs.core._nth(c__4527__auto__,i__42371);
cljs.core.chunk_append(b__42372,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__42693 = (i__42371 + (1));
i__42371 = G__42693;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__42372),sablono$core$iter__42369(cljs.core.chunk_rest(s__42370__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__42372),null);
}
} else {
var style = cljs.core.first(s__42370__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__42369(cljs.core.rest(s__42370__$2)));
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
(sablono.core.include_css.cljs$lang$applyTo = (function (seq42366){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42366));
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
sablono.core.link_to42401 = (function sablono$core$link_to42401(var_args){
var args__4742__auto__ = [];
var len__4736__auto___42695 = arguments.length;
var i__4737__auto___42696 = (0);
while(true){
if((i__4737__auto___42696 < len__4736__auto___42695)){
args__4742__auto__.push((arguments[i__4737__auto___42696]));

var G__42697 = (i__4737__auto___42696 + (1));
i__4737__auto___42696 = G__42697;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to42401.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(sablono.core.link_to42401.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([url], 0))], null),content], null);
}));

(sablono.core.link_to42401.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.link_to42401.cljs$lang$applyTo = (function (seq42403){
var G__42404 = cljs.core.first(seq42403);
var seq42403__$1 = cljs.core.next(seq42403);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42404,seq42403__$1);
}));


sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to42401);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to42434 = (function sablono$core$mail_to42434(var_args){
var args__4742__auto__ = [];
var len__4736__auto___42700 = arguments.length;
var i__4737__auto___42701 = (0);
while(true){
if((i__4737__auto___42701 < len__4736__auto___42700)){
args__4742__auto__.push((arguments[i__4737__auto___42701]));

var G__42702 = (i__4737__auto___42701 + (1));
i__4737__auto___42701 = G__42702;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to42434.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(sablono.core.mail_to42434.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__42437){
var vec__42438 = p__42437;
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42438,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__4126__auto__ = content;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return e_mail;
}
})()], null);
}));

(sablono.core.mail_to42434.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.mail_to42434.cljs$lang$applyTo = (function (seq42435){
var G__42436 = cljs.core.first(seq42435);
var seq42435__$1 = cljs.core.next(seq42435);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42436,seq42435__$1);
}));


sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to42434);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list42441 = (function sablono$core$unordered_list42441(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4529__auto__ = (function sablono$core$unordered_list42441_$_iter__42442(s__42443){
return (new cljs.core.LazySeq(null,(function (){
var s__42443__$1 = s__42443;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__42443__$1);
if(temp__5735__auto__){
var s__42443__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__42443__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__42443__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__42445 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__42444 = (0);
while(true){
if((i__42444 < size__4528__auto__)){
var x = cljs.core._nth(c__4527__auto__,i__42444);
cljs.core.chunk_append(b__42445,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__42704 = (i__42444 + (1));
i__42444 = G__42704;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__42445),sablono$core$unordered_list42441_$_iter__42442(cljs.core.chunk_rest(s__42443__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__42445),null);
}
} else {
var x = cljs.core.first(s__42443__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list42441_$_iter__42442(cljs.core.rest(s__42443__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list42441);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list42446 = (function sablono$core$ordered_list42446(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4529__auto__ = (function sablono$core$ordered_list42446_$_iter__42447(s__42448){
return (new cljs.core.LazySeq(null,(function (){
var s__42448__$1 = s__42448;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__42448__$1);
if(temp__5735__auto__){
var s__42448__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__42448__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__42448__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__42450 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__42449 = (0);
while(true){
if((i__42449 < size__4528__auto__)){
var x = cljs.core._nth(c__4527__auto__,i__42449);
cljs.core.chunk_append(b__42450,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__42708 = (i__42449 + (1));
i__42449 = G__42708;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__42450),sablono$core$ordered_list42446_$_iter__42447(cljs.core.chunk_rest(s__42448__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__42450),null);
}
} else {
var x = cljs.core.first(s__42448__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list42446_$_iter__42447(cljs.core.rest(s__42448__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list42446);
/**
 * Create an image element.
 */
sablono.core.image42454 = (function sablono$core$image42454(var_args){
var G__42456 = arguments.length;
switch (G__42456) {
case 1:
return sablono.core.image42454.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image42454.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.image42454.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0))], null)], null);
}));

(sablono.core.image42454.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0)),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
}));

(sablono.core.image42454.cljs$lang$maxFixedArity = 2);


sablono.core.image = sablono.core.wrap_attrs(sablono.core.image42454);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__42460_SHARP_,p2__42461_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__42460_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__42461_SHARP_),"]"].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__42462_SHARP_,p2__42463_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__42462_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__42463_SHARP_)].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(var_args){
var G__42470 = arguments.length;
switch (G__42470) {
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
sablono.core.color_field42471 = (function sablono$core$color_field42471(var_args){
var G__42473 = arguments.length;
switch (G__42473) {
case 1:
return sablono.core.color_field42471.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field42471.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.color_field42471.cljs$core$IFn$_invoke$arity$1 = (function (name__42338__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__42338__auto__);
}));

(sablono.core.color_field42471.cljs$core$IFn$_invoke$arity$2 = (function (name__42338__auto__,value__42339__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__42338__auto__,value__42339__auto__);
}));

(sablono.core.color_field42471.cljs$lang$maxFixedArity = 2);


sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field42471);

/**
 * Creates a date input field.
 */
sablono.core.date_field42480 = (function sablono$core$date_field42480(var_args){
var G__42482 = arguments.length;
switch (G__42482) {
case 1:
return sablono.core.date_field42480.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field42480.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.date_field42480.cljs$core$IFn$_invoke$arity$1 = (function (name__42338__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__42338__auto__);
}));

(sablono.core.date_field42480.cljs$core$IFn$_invoke$arity$2 = (function (name__42338__auto__,value__42339__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__42338__auto__,value__42339__auto__);
}));

(sablono.core.date_field42480.cljs$lang$maxFixedArity = 2);


sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field42480);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field42484 = (function sablono$core$datetime_field42484(var_args){
var G__42486 = arguments.length;
switch (G__42486) {
case 1:
return sablono.core.datetime_field42484.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field42484.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_field42484.cljs$core$IFn$_invoke$arity$1 = (function (name__42338__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__42338__auto__);
}));

(sablono.core.datetime_field42484.cljs$core$IFn$_invoke$arity$2 = (function (name__42338__auto__,value__42339__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__42338__auto__,value__42339__auto__);
}));

(sablono.core.datetime_field42484.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field42484);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field42492 = (function sablono$core$datetime_local_field42492(var_args){
var G__42497 = arguments.length;
switch (G__42497) {
case 1:
return sablono.core.datetime_local_field42492.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field42492.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_local_field42492.cljs$core$IFn$_invoke$arity$1 = (function (name__42338__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__42338__auto__);
}));

(sablono.core.datetime_local_field42492.cljs$core$IFn$_invoke$arity$2 = (function (name__42338__auto__,value__42339__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__42338__auto__,value__42339__auto__);
}));

(sablono.core.datetime_local_field42492.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field42492);

/**
 * Creates a email input field.
 */
sablono.core.email_field42510 = (function sablono$core$email_field42510(var_args){
var G__42515 = arguments.length;
switch (G__42515) {
case 1:
return sablono.core.email_field42510.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field42510.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.email_field42510.cljs$core$IFn$_invoke$arity$1 = (function (name__42338__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__42338__auto__);
}));

(sablono.core.email_field42510.cljs$core$IFn$_invoke$arity$2 = (function (name__42338__auto__,value__42339__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__42338__auto__,value__42339__auto__);
}));

(sablono.core.email_field42510.cljs$lang$maxFixedArity = 2);


sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field42510);

/**
 * Creates a file input field.
 */
sablono.core.file_field42528 = (function sablono$core$file_field42528(var_args){
var G__42532 = arguments.length;
switch (G__42532) {
case 1:
return sablono.core.file_field42528.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field42528.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.file_field42528.cljs$core$IFn$_invoke$arity$1 = (function (name__42338__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__42338__auto__);
}));

(sablono.core.file_field42528.cljs$core$IFn$_invoke$arity$2 = (function (name__42338__auto__,value__42339__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__42338__auto__,value__42339__auto__);
}));

(sablono.core.file_field42528.cljs$lang$maxFixedArity = 2);


sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field42528);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field42533 = (function sablono$core$hidden_field42533(var_args){
var G__42535 = arguments.length;
switch (G__42535) {
case 1:
return sablono.core.hidden_field42533.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field42533.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.hidden_field42533.cljs$core$IFn$_invoke$arity$1 = (function (name__42338__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__42338__auto__);
}));

(sablono.core.hidden_field42533.cljs$core$IFn$_invoke$arity$2 = (function (name__42338__auto__,value__42339__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__42338__auto__,value__42339__auto__);
}));

(sablono.core.hidden_field42533.cljs$lang$maxFixedArity = 2);


sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field42533);

/**
 * Creates a month input field.
 */
sablono.core.month_field42538 = (function sablono$core$month_field42538(var_args){
var G__42540 = arguments.length;
switch (G__42540) {
case 1:
return sablono.core.month_field42538.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field42538.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.month_field42538.cljs$core$IFn$_invoke$arity$1 = (function (name__42338__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__42338__auto__);
}));

(sablono.core.month_field42538.cljs$core$IFn$_invoke$arity$2 = (function (name__42338__auto__,value__42339__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__42338__auto__,value__42339__auto__);
}));

(sablono.core.month_field42538.cljs$lang$maxFixedArity = 2);


sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field42538);

/**
 * Creates a number input field.
 */
sablono.core.number_field42546 = (function sablono$core$number_field42546(var_args){
var G__42549 = arguments.length;
switch (G__42549) {
case 1:
return sablono.core.number_field42546.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field42546.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.number_field42546.cljs$core$IFn$_invoke$arity$1 = (function (name__42338__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__42338__auto__);
}));

(sablono.core.number_field42546.cljs$core$IFn$_invoke$arity$2 = (function (name__42338__auto__,value__42339__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__42338__auto__,value__42339__auto__);
}));

(sablono.core.number_field42546.cljs$lang$maxFixedArity = 2);


sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field42546);

/**
 * Creates a password input field.
 */
sablono.core.password_field42555 = (function sablono$core$password_field42555(var_args){
var G__42560 = arguments.length;
switch (G__42560) {
case 1:
return sablono.core.password_field42555.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field42555.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.password_field42555.cljs$core$IFn$_invoke$arity$1 = (function (name__42338__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__42338__auto__);
}));

(sablono.core.password_field42555.cljs$core$IFn$_invoke$arity$2 = (function (name__42338__auto__,value__42339__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__42338__auto__,value__42339__auto__);
}));

(sablono.core.password_field42555.cljs$lang$maxFixedArity = 2);


sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field42555);

/**
 * Creates a range input field.
 */
sablono.core.range_field42563 = (function sablono$core$range_field42563(var_args){
var G__42565 = arguments.length;
switch (G__42565) {
case 1:
return sablono.core.range_field42563.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field42563.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.range_field42563.cljs$core$IFn$_invoke$arity$1 = (function (name__42338__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__42338__auto__);
}));

(sablono.core.range_field42563.cljs$core$IFn$_invoke$arity$2 = (function (name__42338__auto__,value__42339__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__42338__auto__,value__42339__auto__);
}));

(sablono.core.range_field42563.cljs$lang$maxFixedArity = 2);


sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field42563);

/**
 * Creates a search input field.
 */
sablono.core.search_field42567 = (function sablono$core$search_field42567(var_args){
var G__42570 = arguments.length;
switch (G__42570) {
case 1:
return sablono.core.search_field42567.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field42567.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.search_field42567.cljs$core$IFn$_invoke$arity$1 = (function (name__42338__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__42338__auto__);
}));

(sablono.core.search_field42567.cljs$core$IFn$_invoke$arity$2 = (function (name__42338__auto__,value__42339__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__42338__auto__,value__42339__auto__);
}));

(sablono.core.search_field42567.cljs$lang$maxFixedArity = 2);


sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field42567);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field42571 = (function sablono$core$tel_field42571(var_args){
var G__42573 = arguments.length;
switch (G__42573) {
case 1:
return sablono.core.tel_field42571.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field42571.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.tel_field42571.cljs$core$IFn$_invoke$arity$1 = (function (name__42338__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__42338__auto__);
}));

(sablono.core.tel_field42571.cljs$core$IFn$_invoke$arity$2 = (function (name__42338__auto__,value__42339__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__42338__auto__,value__42339__auto__);
}));

(sablono.core.tel_field42571.cljs$lang$maxFixedArity = 2);


sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field42571);

/**
 * Creates a text input field.
 */
sablono.core.text_field42577 = (function sablono$core$text_field42577(var_args){
var G__42581 = arguments.length;
switch (G__42581) {
case 1:
return sablono.core.text_field42577.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field42577.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_field42577.cljs$core$IFn$_invoke$arity$1 = (function (name__42338__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__42338__auto__);
}));

(sablono.core.text_field42577.cljs$core$IFn$_invoke$arity$2 = (function (name__42338__auto__,value__42339__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__42338__auto__,value__42339__auto__);
}));

(sablono.core.text_field42577.cljs$lang$maxFixedArity = 2);


sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field42577);

/**
 * Creates a time input field.
 */
sablono.core.time_field42585 = (function sablono$core$time_field42585(var_args){
var G__42588 = arguments.length;
switch (G__42588) {
case 1:
return sablono.core.time_field42585.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field42585.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.time_field42585.cljs$core$IFn$_invoke$arity$1 = (function (name__42338__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__42338__auto__);
}));

(sablono.core.time_field42585.cljs$core$IFn$_invoke$arity$2 = (function (name__42338__auto__,value__42339__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__42338__auto__,value__42339__auto__);
}));

(sablono.core.time_field42585.cljs$lang$maxFixedArity = 2);


sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field42585);

/**
 * Creates a url input field.
 */
sablono.core.url_field42590 = (function sablono$core$url_field42590(var_args){
var G__42592 = arguments.length;
switch (G__42592) {
case 1:
return sablono.core.url_field42590.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field42590.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.url_field42590.cljs$core$IFn$_invoke$arity$1 = (function (name__42338__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__42338__auto__);
}));

(sablono.core.url_field42590.cljs$core$IFn$_invoke$arity$2 = (function (name__42338__auto__,value__42339__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__42338__auto__,value__42339__auto__);
}));

(sablono.core.url_field42590.cljs$lang$maxFixedArity = 2);


sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field42590);

/**
 * Creates a week input field.
 */
sablono.core.week_field42596 = (function sablono$core$week_field42596(var_args){
var G__42598 = arguments.length;
switch (G__42598) {
case 1:
return sablono.core.week_field42596.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field42596.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.week_field42596.cljs$core$IFn$_invoke$arity$1 = (function (name__42338__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__42338__auto__);
}));

(sablono.core.week_field42596.cljs$core$IFn$_invoke$arity$2 = (function (name__42338__auto__,value__42339__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__42338__auto__,value__42339__auto__);
}));

(sablono.core.week_field42596.cljs$lang$maxFixedArity = 2);


sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field42596);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box42599 = (function sablono$core$check_box42599(var_args){
var G__42601 = arguments.length;
switch (G__42601) {
case 1:
return sablono.core.check_box42599.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box42599.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box42599.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.check_box42599.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.check_box42599.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box42599.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box42599.cljs$lang$maxFixedArity = 3);


sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box42599);
/**
 * Creates a radio button.
 */
sablono.core.radio_button42603 = (function sablono$core$radio_button42603(var_args){
var G__42605 = arguments.length;
switch (G__42605) {
case 1:
return sablono.core.radio_button42603.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button42603.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button42603.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.radio_button42603.cljs$core$IFn$_invoke$arity$1 = (function (group){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)))], null)], null);
}));

(sablono.core.radio_button42603.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0))),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button42603.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id([sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)),"-",sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button42603.cljs$lang$maxFixedArity = 3);


sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button42603);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0)));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options42611 = (function sablono$core$select_options42611(coll){
var iter__4529__auto__ = (function sablono$core$select_options42611_$_iter__42614(s__42615){
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
cljs.core.chunk_append(b__42617,((cljs.core.sequential_QMARK_(x))?(function (){var vec__42621 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42621,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42621,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42621,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),(sablono.core.select_options42611.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options42611.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options42611.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__42777 = (i__42616 + (1));
i__42616 = G__42777;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__42617),sablono$core$select_options42611_$_iter__42614(cljs.core.chunk_rest(s__42615__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__42617),null);
}
} else {
var x = cljs.core.first(s__42615__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__42624 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42624,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42624,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42624,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),(sablono.core.select_options42611.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options42611.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options42611.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options42611_$_iter__42614(cljs.core.rest(s__42615__$2)));
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

sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options42611);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down42630 = (function sablono$core$drop_down42630(var_args){
var G__42632 = arguments.length;
switch (G__42632) {
case 2:
return sablono.core.drop_down42630.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down42630.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.drop_down42630.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down42630.cljs$core$IFn$_invoke$arity$3(name,options,null);
}));

(sablono.core.drop_down42630.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null),sablono.core.select_options(options,selected)], null);
}));

(sablono.core.drop_down42630.cljs$lang$maxFixedArity = 3);


sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down42630);
/**
 * Creates a text area element.
 */
sablono.core.text_area42634 = (function sablono$core$text_area42634(var_args){
var G__42638 = arguments.length;
switch (G__42638) {
case 1:
return sablono.core.text_area42634.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area42634.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_area42634.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.text_area42634.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4126__auto__ = value;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return undefined;
}
})()], null)], null);
}));

(sablono.core.text_area42634.cljs$lang$maxFixedArity = 2);


sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area42634);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label42645 = (function sablono$core$label42645(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id(name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs(sablono.core.label42645);
/**
 * Creates a submit button.
 */
sablono.core.submit_button42648 = (function sablono$core$submit_button42648(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button42648);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button42650 = (function sablono$core$reset_button42650(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button42650);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to42651 = (function sablono$core$form_to42651(var_args){
var args__4742__auto__ = [];
var len__4736__auto___42788 = arguments.length;
var i__4737__auto___42789 = (0);
while(true){
if((i__4737__auto___42789 < len__4736__auto___42788)){
args__4742__auto__.push((arguments[i__4737__auto___42789]));

var G__42790 = (i__4737__auto___42789 + (1));
i__4737__auto___42789 = G__42790;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to42651.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(sablono.core.form_to42651.cljs$core$IFn$_invoke$arity$variadic = (function (p__42657,body){
var vec__42658 = p__42657;
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42658,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42658,(1),null);
var method_str = clojure.string.upper_case(cljs.core.name(method));
var action_uri = sablono.util.to_uri(action);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
}));

(sablono.core.form_to42651.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.form_to42651.cljs$lang$applyTo = (function (seq42654){
var G__42655 = cljs.core.first(seq42654);
var seq42654__$1 = cljs.core.next(seq42654);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42655,seq42654__$1);
}));


sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to42651);

//# sourceMappingURL=sablono.core.js.map
