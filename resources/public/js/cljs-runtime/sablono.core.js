goog.provide('sablono.core');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__42685__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args))){
var vec__42420 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));
var seq__42421 = cljs.core.seq(vec__42420);
var first__42422 = cljs.core.first(seq__42421);
var seq__42421__$1 = cljs.core.next(seq__42421);
var tag = first__42422;
var body = seq__42421__$1;
if(cljs.core.map_QMARK_(cljs.core.first(body))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.first(body),cljs.core.first(args)], 0))], null),cljs.core.rest(body));
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first(args)], null),body);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__42685 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42687__i = 0, G__42687__a = new Array(arguments.length -  0);
while (G__42687__i < G__42687__a.length) {G__42687__a[G__42687__i] = arguments[G__42687__i + 0]; ++G__42687__i;}
  args = new cljs.core.IndexedSeq(G__42687__a,0,null);
} 
return G__42685__delegate.call(this,args);};
G__42685.cljs$lang$maxFixedArity = 0;
G__42685.cljs$lang$applyTo = (function (arglist__42688){
var args = cljs.core.seq(arglist__42688);
return G__42685__delegate(args);
});
G__42685.cljs$core$IFn$_invoke$arity$variadic = G__42685__delegate;
return G__42685;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__4529__auto__ = (function sablono$core$update_arglists_$_iter__42428(s__42429){
return (new cljs.core.LazySeq(null,(function (){
var s__42429__$1 = s__42429;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__42429__$1);
if(temp__5735__auto__){
var s__42429__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__42429__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__42429__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__42431 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__42430 = (0);
while(true){
if((i__42430 < size__4528__auto__)){
var args = cljs.core._nth(c__4527__auto__,i__42430);
cljs.core.chunk_append(b__42431,cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__42695 = (i__42430 + (1));
i__42430 = G__42695;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__42431),sablono$core$update_arglists_$_iter__42428(cljs.core.chunk_rest(s__42429__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__42431),null);
}
} else {
var args = cljs.core.first(s__42429__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__42428(cljs.core.rest(s__42429__$2)));
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
var len__4736__auto___42708 = arguments.length;
var i__4737__auto___42709 = (0);
while(true){
if((i__4737__auto___42709 < len__4736__auto___42708)){
args__4742__auto__.push((arguments[i__4737__auto___42709]));

var G__42712 = (i__4737__auto___42709 + (1));
i__4737__auto___42709 = G__42712;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__4529__auto__ = (function sablono$core$iter__42435(s__42436){
return (new cljs.core.LazySeq(null,(function (){
var s__42436__$1 = s__42436;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__42436__$1);
if(temp__5735__auto__){
var s__42436__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__42436__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__42436__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__42438 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__42437 = (0);
while(true){
if((i__42437 < size__4528__auto__)){
var style = cljs.core._nth(c__4527__auto__,i__42437);
cljs.core.chunk_append(b__42438,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__42716 = (i__42437 + (1));
i__42437 = G__42716;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__42438),sablono$core$iter__42435(cljs.core.chunk_rest(s__42436__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__42438),null);
}
} else {
var style = cljs.core.first(s__42436__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__42435(cljs.core.rest(s__42436__$2)));
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
(sablono.core.include_css.cljs$lang$applyTo = (function (seq42434){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42434));
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
sablono.core.link_to42440 = (function sablono$core$link_to42440(var_args){
var args__4742__auto__ = [];
var len__4736__auto___42720 = arguments.length;
var i__4737__auto___42721 = (0);
while(true){
if((i__4737__auto___42721 < len__4736__auto___42720)){
args__4742__auto__.push((arguments[i__4737__auto___42721]));

var G__42723 = (i__4737__auto___42721 + (1));
i__4737__auto___42721 = G__42723;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to42440.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(sablono.core.link_to42440.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([url], 0))], null),content], null);
}));

(sablono.core.link_to42440.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.link_to42440.cljs$lang$applyTo = (function (seq42441){
var G__42442 = cljs.core.first(seq42441);
var seq42441__$1 = cljs.core.next(seq42441);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42442,seq42441__$1);
}));


sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to42440);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to42443 = (function sablono$core$mail_to42443(var_args){
var args__4742__auto__ = [];
var len__4736__auto___42725 = arguments.length;
var i__4737__auto___42726 = (0);
while(true){
if((i__4737__auto___42726 < len__4736__auto___42725)){
args__4742__auto__.push((arguments[i__4737__auto___42726]));

var G__42727 = (i__4737__auto___42726 + (1));
i__4737__auto___42726 = G__42727;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to42443.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(sablono.core.mail_to42443.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__42448){
var vec__42449 = p__42448;
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42449,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__4126__auto__ = content;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return e_mail;
}
})()], null);
}));

(sablono.core.mail_to42443.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.mail_to42443.cljs$lang$applyTo = (function (seq42444){
var G__42445 = cljs.core.first(seq42444);
var seq42444__$1 = cljs.core.next(seq42444);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42445,seq42444__$1);
}));


sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to42443);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list42456 = (function sablono$core$unordered_list42456(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4529__auto__ = (function sablono$core$unordered_list42456_$_iter__42457(s__42458){
return (new cljs.core.LazySeq(null,(function (){
var s__42458__$1 = s__42458;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__42458__$1);
if(temp__5735__auto__){
var s__42458__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__42458__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__42458__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__42460 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__42459 = (0);
while(true){
if((i__42459 < size__4528__auto__)){
var x = cljs.core._nth(c__4527__auto__,i__42459);
cljs.core.chunk_append(b__42460,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__42731 = (i__42459 + (1));
i__42459 = G__42731;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__42460),sablono$core$unordered_list42456_$_iter__42457(cljs.core.chunk_rest(s__42458__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__42460),null);
}
} else {
var x = cljs.core.first(s__42458__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list42456_$_iter__42457(cljs.core.rest(s__42458__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list42456);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list42461 = (function sablono$core$ordered_list42461(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4529__auto__ = (function sablono$core$ordered_list42461_$_iter__42462(s__42463){
return (new cljs.core.LazySeq(null,(function (){
var s__42463__$1 = s__42463;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__42463__$1);
if(temp__5735__auto__){
var s__42463__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__42463__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__42463__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__42465 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__42464 = (0);
while(true){
if((i__42464 < size__4528__auto__)){
var x = cljs.core._nth(c__4527__auto__,i__42464);
cljs.core.chunk_append(b__42465,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__42734 = (i__42464 + (1));
i__42464 = G__42734;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__42465),sablono$core$ordered_list42461_$_iter__42462(cljs.core.chunk_rest(s__42463__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__42465),null);
}
} else {
var x = cljs.core.first(s__42463__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list42461_$_iter__42462(cljs.core.rest(s__42463__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list42461);
/**
 * Create an image element.
 */
sablono.core.image42466 = (function sablono$core$image42466(var_args){
var G__42468 = arguments.length;
switch (G__42468) {
case 1:
return sablono.core.image42466.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image42466.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.image42466.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0))], null)], null);
}));

(sablono.core.image42466.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0)),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
}));

(sablono.core.image42466.cljs$lang$maxFixedArity = 2);


sablono.core.image = sablono.core.wrap_attrs(sablono.core.image42466);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__42475_SHARP_,p2__42476_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__42475_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__42476_SHARP_),"]"].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__42477_SHARP_,p2__42478_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__42477_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__42478_SHARP_)].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(var_args){
var G__42485 = arguments.length;
switch (G__42485) {
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
sablono.core.color_field42486 = (function sablono$core$color_field42486(var_args){
var G__42490 = arguments.length;
switch (G__42490) {
case 1:
return sablono.core.color_field42486.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field42486.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.color_field42486.cljs$core$IFn$_invoke$arity$1 = (function (name__42411__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__42411__auto__);
}));

(sablono.core.color_field42486.cljs$core$IFn$_invoke$arity$2 = (function (name__42411__auto__,value__42412__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__42411__auto__,value__42412__auto__);
}));

(sablono.core.color_field42486.cljs$lang$maxFixedArity = 2);


sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field42486);

/**
 * Creates a date input field.
 */
sablono.core.date_field42491 = (function sablono$core$date_field42491(var_args){
var G__42493 = arguments.length;
switch (G__42493) {
case 1:
return sablono.core.date_field42491.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field42491.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.date_field42491.cljs$core$IFn$_invoke$arity$1 = (function (name__42411__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__42411__auto__);
}));

(sablono.core.date_field42491.cljs$core$IFn$_invoke$arity$2 = (function (name__42411__auto__,value__42412__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__42411__auto__,value__42412__auto__);
}));

(sablono.core.date_field42491.cljs$lang$maxFixedArity = 2);


sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field42491);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field42494 = (function sablono$core$datetime_field42494(var_args){
var G__42498 = arguments.length;
switch (G__42498) {
case 1:
return sablono.core.datetime_field42494.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field42494.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_field42494.cljs$core$IFn$_invoke$arity$1 = (function (name__42411__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__42411__auto__);
}));

(sablono.core.datetime_field42494.cljs$core$IFn$_invoke$arity$2 = (function (name__42411__auto__,value__42412__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__42411__auto__,value__42412__auto__);
}));

(sablono.core.datetime_field42494.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field42494);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field42499 = (function sablono$core$datetime_local_field42499(var_args){
var G__42501 = arguments.length;
switch (G__42501) {
case 1:
return sablono.core.datetime_local_field42499.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field42499.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_local_field42499.cljs$core$IFn$_invoke$arity$1 = (function (name__42411__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__42411__auto__);
}));

(sablono.core.datetime_local_field42499.cljs$core$IFn$_invoke$arity$2 = (function (name__42411__auto__,value__42412__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__42411__auto__,value__42412__auto__);
}));

(sablono.core.datetime_local_field42499.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field42499);

/**
 * Creates a email input field.
 */
sablono.core.email_field42535 = (function sablono$core$email_field42535(var_args){
var G__42537 = arguments.length;
switch (G__42537) {
case 1:
return sablono.core.email_field42535.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field42535.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.email_field42535.cljs$core$IFn$_invoke$arity$1 = (function (name__42411__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__42411__auto__);
}));

(sablono.core.email_field42535.cljs$core$IFn$_invoke$arity$2 = (function (name__42411__auto__,value__42412__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__42411__auto__,value__42412__auto__);
}));

(sablono.core.email_field42535.cljs$lang$maxFixedArity = 2);


sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field42535);

/**
 * Creates a file input field.
 */
sablono.core.file_field42575 = (function sablono$core$file_field42575(var_args){
var G__42577 = arguments.length;
switch (G__42577) {
case 1:
return sablono.core.file_field42575.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field42575.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.file_field42575.cljs$core$IFn$_invoke$arity$1 = (function (name__42411__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__42411__auto__);
}));

(sablono.core.file_field42575.cljs$core$IFn$_invoke$arity$2 = (function (name__42411__auto__,value__42412__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__42411__auto__,value__42412__auto__);
}));

(sablono.core.file_field42575.cljs$lang$maxFixedArity = 2);


sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field42575);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field42578 = (function sablono$core$hidden_field42578(var_args){
var G__42580 = arguments.length;
switch (G__42580) {
case 1:
return sablono.core.hidden_field42578.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field42578.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.hidden_field42578.cljs$core$IFn$_invoke$arity$1 = (function (name__42411__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__42411__auto__);
}));

(sablono.core.hidden_field42578.cljs$core$IFn$_invoke$arity$2 = (function (name__42411__auto__,value__42412__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__42411__auto__,value__42412__auto__);
}));

(sablono.core.hidden_field42578.cljs$lang$maxFixedArity = 2);


sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field42578);

/**
 * Creates a month input field.
 */
sablono.core.month_field42581 = (function sablono$core$month_field42581(var_args){
var G__42583 = arguments.length;
switch (G__42583) {
case 1:
return sablono.core.month_field42581.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field42581.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.month_field42581.cljs$core$IFn$_invoke$arity$1 = (function (name__42411__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__42411__auto__);
}));

(sablono.core.month_field42581.cljs$core$IFn$_invoke$arity$2 = (function (name__42411__auto__,value__42412__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__42411__auto__,value__42412__auto__);
}));

(sablono.core.month_field42581.cljs$lang$maxFixedArity = 2);


sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field42581);

/**
 * Creates a number input field.
 */
sablono.core.number_field42585 = (function sablono$core$number_field42585(var_args){
var G__42589 = arguments.length;
switch (G__42589) {
case 1:
return sablono.core.number_field42585.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field42585.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.number_field42585.cljs$core$IFn$_invoke$arity$1 = (function (name__42411__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__42411__auto__);
}));

(sablono.core.number_field42585.cljs$core$IFn$_invoke$arity$2 = (function (name__42411__auto__,value__42412__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__42411__auto__,value__42412__auto__);
}));

(sablono.core.number_field42585.cljs$lang$maxFixedArity = 2);


sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field42585);

/**
 * Creates a password input field.
 */
sablono.core.password_field42591 = (function sablono$core$password_field42591(var_args){
var G__42593 = arguments.length;
switch (G__42593) {
case 1:
return sablono.core.password_field42591.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field42591.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.password_field42591.cljs$core$IFn$_invoke$arity$1 = (function (name__42411__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__42411__auto__);
}));

(sablono.core.password_field42591.cljs$core$IFn$_invoke$arity$2 = (function (name__42411__auto__,value__42412__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__42411__auto__,value__42412__auto__);
}));

(sablono.core.password_field42591.cljs$lang$maxFixedArity = 2);


sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field42591);

/**
 * Creates a range input field.
 */
sablono.core.range_field42595 = (function sablono$core$range_field42595(var_args){
var G__42597 = arguments.length;
switch (G__42597) {
case 1:
return sablono.core.range_field42595.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field42595.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.range_field42595.cljs$core$IFn$_invoke$arity$1 = (function (name__42411__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__42411__auto__);
}));

(sablono.core.range_field42595.cljs$core$IFn$_invoke$arity$2 = (function (name__42411__auto__,value__42412__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__42411__auto__,value__42412__auto__);
}));

(sablono.core.range_field42595.cljs$lang$maxFixedArity = 2);


sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field42595);

/**
 * Creates a search input field.
 */
sablono.core.search_field42599 = (function sablono$core$search_field42599(var_args){
var G__42601 = arguments.length;
switch (G__42601) {
case 1:
return sablono.core.search_field42599.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field42599.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.search_field42599.cljs$core$IFn$_invoke$arity$1 = (function (name__42411__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__42411__auto__);
}));

(sablono.core.search_field42599.cljs$core$IFn$_invoke$arity$2 = (function (name__42411__auto__,value__42412__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__42411__auto__,value__42412__auto__);
}));

(sablono.core.search_field42599.cljs$lang$maxFixedArity = 2);


sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field42599);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field42602 = (function sablono$core$tel_field42602(var_args){
var G__42604 = arguments.length;
switch (G__42604) {
case 1:
return sablono.core.tel_field42602.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field42602.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.tel_field42602.cljs$core$IFn$_invoke$arity$1 = (function (name__42411__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__42411__auto__);
}));

(sablono.core.tel_field42602.cljs$core$IFn$_invoke$arity$2 = (function (name__42411__auto__,value__42412__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__42411__auto__,value__42412__auto__);
}));

(sablono.core.tel_field42602.cljs$lang$maxFixedArity = 2);


sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field42602);

/**
 * Creates a text input field.
 */
sablono.core.text_field42609 = (function sablono$core$text_field42609(var_args){
var G__42611 = arguments.length;
switch (G__42611) {
case 1:
return sablono.core.text_field42609.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field42609.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_field42609.cljs$core$IFn$_invoke$arity$1 = (function (name__42411__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__42411__auto__);
}));

(sablono.core.text_field42609.cljs$core$IFn$_invoke$arity$2 = (function (name__42411__auto__,value__42412__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__42411__auto__,value__42412__auto__);
}));

(sablono.core.text_field42609.cljs$lang$maxFixedArity = 2);


sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field42609);

/**
 * Creates a time input field.
 */
sablono.core.time_field42612 = (function sablono$core$time_field42612(var_args){
var G__42614 = arguments.length;
switch (G__42614) {
case 1:
return sablono.core.time_field42612.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field42612.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.time_field42612.cljs$core$IFn$_invoke$arity$1 = (function (name__42411__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__42411__auto__);
}));

(sablono.core.time_field42612.cljs$core$IFn$_invoke$arity$2 = (function (name__42411__auto__,value__42412__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__42411__auto__,value__42412__auto__);
}));

(sablono.core.time_field42612.cljs$lang$maxFixedArity = 2);


sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field42612);

/**
 * Creates a url input field.
 */
sablono.core.url_field42619 = (function sablono$core$url_field42619(var_args){
var G__42621 = arguments.length;
switch (G__42621) {
case 1:
return sablono.core.url_field42619.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field42619.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.url_field42619.cljs$core$IFn$_invoke$arity$1 = (function (name__42411__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__42411__auto__);
}));

(sablono.core.url_field42619.cljs$core$IFn$_invoke$arity$2 = (function (name__42411__auto__,value__42412__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__42411__auto__,value__42412__auto__);
}));

(sablono.core.url_field42619.cljs$lang$maxFixedArity = 2);


sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field42619);

/**
 * Creates a week input field.
 */
sablono.core.week_field42623 = (function sablono$core$week_field42623(var_args){
var G__42625 = arguments.length;
switch (G__42625) {
case 1:
return sablono.core.week_field42623.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field42623.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.week_field42623.cljs$core$IFn$_invoke$arity$1 = (function (name__42411__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__42411__auto__);
}));

(sablono.core.week_field42623.cljs$core$IFn$_invoke$arity$2 = (function (name__42411__auto__,value__42412__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__42411__auto__,value__42412__auto__);
}));

(sablono.core.week_field42623.cljs$lang$maxFixedArity = 2);


sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field42623);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box42631 = (function sablono$core$check_box42631(var_args){
var G__42643 = arguments.length;
switch (G__42643) {
case 1:
return sablono.core.check_box42631.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box42631.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box42631.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.check_box42631.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.check_box42631.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box42631.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box42631.cljs$lang$maxFixedArity = 3);


sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box42631);
/**
 * Creates a radio button.
 */
sablono.core.radio_button42647 = (function sablono$core$radio_button42647(var_args){
var G__42649 = arguments.length;
switch (G__42649) {
case 1:
return sablono.core.radio_button42647.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button42647.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button42647.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.radio_button42647.cljs$core$IFn$_invoke$arity$1 = (function (group){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)))], null)], null);
}));

(sablono.core.radio_button42647.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0))),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button42647.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id([sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)),"-",sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button42647.cljs$lang$maxFixedArity = 3);


sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button42647);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0)));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options42650 = (function sablono$core$select_options42650(coll){
var iter__4529__auto__ = (function sablono$core$select_options42650_$_iter__42651(s__42652){
return (new cljs.core.LazySeq(null,(function (){
var s__42652__$1 = s__42652;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__42652__$1);
if(temp__5735__auto__){
var s__42652__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__42652__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__42652__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__42654 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__42653 = (0);
while(true){
if((i__42653 < size__4528__auto__)){
var x = cljs.core._nth(c__4527__auto__,i__42653);
cljs.core.chunk_append(b__42654,((cljs.core.sequential_QMARK_(x))?(function (){var vec__42656 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42656,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42656,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42656,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),(sablono.core.select_options42650.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options42650.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options42650.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__42832 = (i__42653 + (1));
i__42653 = G__42832;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__42654),sablono$core$select_options42650_$_iter__42651(cljs.core.chunk_rest(s__42652__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__42654),null);
}
} else {
var x = cljs.core.first(s__42652__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__42659 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42659,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42659,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42659,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),(sablono.core.select_options42650.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options42650.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options42650.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options42650_$_iter__42651(cljs.core.rest(s__42652__$2)));
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

sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options42650);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down42662 = (function sablono$core$drop_down42662(var_args){
var G__42664 = arguments.length;
switch (G__42664) {
case 2:
return sablono.core.drop_down42662.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down42662.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.drop_down42662.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down42662.cljs$core$IFn$_invoke$arity$3(name,options,null);
}));

(sablono.core.drop_down42662.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null),sablono.core.select_options(options,selected)], null);
}));

(sablono.core.drop_down42662.cljs$lang$maxFixedArity = 3);


sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down42662);
/**
 * Creates a text area element.
 */
sablono.core.text_area42665 = (function sablono$core$text_area42665(var_args){
var G__42667 = arguments.length;
switch (G__42667) {
case 1:
return sablono.core.text_area42665.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area42665.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_area42665.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.text_area42665.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4126__auto__ = value;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return undefined;
}
})()], null)], null);
}));

(sablono.core.text_area42665.cljs$lang$maxFixedArity = 2);


sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area42665);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label42668 = (function sablono$core$label42668(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id(name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs(sablono.core.label42668);
/**
 * Creates a submit button.
 */
sablono.core.submit_button42670 = (function sablono$core$submit_button42670(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button42670);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button42673 = (function sablono$core$reset_button42673(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button42673);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to42674 = (function sablono$core$form_to42674(var_args){
var args__4742__auto__ = [];
var len__4736__auto___42841 = arguments.length;
var i__4737__auto___42842 = (0);
while(true){
if((i__4737__auto___42842 < len__4736__auto___42841)){
args__4742__auto__.push((arguments[i__4737__auto___42842]));

var G__42843 = (i__4737__auto___42842 + (1));
i__4737__auto___42842 = G__42843;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to42674.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(sablono.core.form_to42674.cljs$core$IFn$_invoke$arity$variadic = (function (p__42677,body){
var vec__42678 = p__42677;
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42678,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42678,(1),null);
var method_str = clojure.string.upper_case(cljs.core.name(method));
var action_uri = sablono.util.to_uri(action);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
}));

(sablono.core.form_to42674.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.form_to42674.cljs$lang$applyTo = (function (seq42675){
var G__42676 = cljs.core.first(seq42675);
var seq42675__$1 = cljs.core.next(seq42675);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42676,seq42675__$1);
}));


sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to42674);

//# sourceMappingURL=sablono.core.js.map
