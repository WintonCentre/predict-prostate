goog.provide('garden.util');
/**
 * Formats a string using goog.string.format.
 */
garden.util.format = (function garden$util$format(var_args){
var args__4824__auto__ = [];
var len__4818__auto___44756 = arguments.length;
var i__4819__auto___44757 = (0);
while(true){
if((i__4819__auto___44757 < len__4818__auto___44756)){
args__4824__auto__.push((arguments[i__4819__auto___44757]));

var G__44759 = (i__4819__auto___44757 + (1));
i__4819__auto___44757 = G__44759;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return garden.util.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(garden.util.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.string.format,fmt,args);
}));

(garden.util.format.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(garden.util.format.cljs$lang$applyTo = (function (seq44600){
var G__44601 = cljs.core.first(seq44600);
var seq44600__$1 = cljs.core.next(seq44600);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44601,seq44600__$1);
}));


/**
 * @interface
 */
garden.util.ToString = function(){};

var garden$util$ToString$to_str$dyn_44765 = (function (this$){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (garden.util.to_str[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4510__auto__.call(null,this$));
} else {
var m__4508__auto__ = (garden.util.to_str["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4508__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("ToString.to-str",this$);
}
}
});
/**
 * Convert a value into a string.
 */
garden.util.to_str = (function garden$util$to_str(this$){
if((((!((this$ == null)))) && ((!((this$.garden$util$ToString$to_str$arity$1 == null)))))){
return this$.garden$util$ToString$to_str$arity$1(this$);
} else {
return garden$util$ToString$to_str$dyn_44765(this$);
}
});

(cljs.core.Keyword.prototype.garden$util$ToString$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.garden$util$ToString$to_str$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.name(this$__$1);
}));

goog.object.set(garden.util.ToString,"_",true);

goog.object.set(garden.util.to_str,"_",(function (this$){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$);
}));

goog.object.set(garden.util.ToString,"null",true);

goog.object.set(garden.util.to_str,"null",(function (this$){
return "";
}));
/**
 * Convert a variable number of values into strings.
 */
garden.util.as_str = (function garden$util$as_str(var_args){
var args__4824__auto__ = [];
var len__4818__auto___44781 = arguments.length;
var i__4819__auto___44782 = (0);
while(true){
if((i__4819__auto___44782 < len__4818__auto___44781)){
args__4824__auto__.push((arguments[i__4819__auto___44782]));

var G__44784 = (i__4819__auto___44782 + (1));
i__4819__auto___44782 = G__44784;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return garden.util.as_str.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(garden.util.as_str.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2(garden.util.to_str,args));
}));

(garden.util.as_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(garden.util.as_str.cljs$lang$applyTo = (function (seq44622){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq44622));
}));

/**
 * Convert a string to an integer with optional base.
 */
garden.util.string__GT_int = (function garden$util$string__GT_int(var_args){
var args__4824__auto__ = [];
var len__4818__auto___44788 = arguments.length;
var i__4819__auto___44789 = (0);
while(true){
if((i__4819__auto___44789 < len__4818__auto___44788)){
args__4824__auto__.push((arguments[i__4819__auto___44789]));

var G__44790 = (i__4819__auto___44789 + (1));
i__4819__auto___44789 = G__44790;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return garden.util.string__GT_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(garden.util.string__GT_int.cljs$core$IFn$_invoke$arity$variadic = (function (s,p__44635){
var vec__44636 = p__44635;
var radix = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44636,(0),null);
var radix__$1 = (function (){var or__4212__auto__ = radix;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (10);
}
})();
return parseInt(s,radix__$1);
}));

(garden.util.string__GT_int.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(garden.util.string__GT_int.cljs$lang$applyTo = (function (seq44630){
var G__44631 = cljs.core.first(seq44630);
var seq44630__$1 = cljs.core.next(seq44630);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44631,seq44630__$1);
}));

/**
 * Convert an integer to a string with optional base.
 */
garden.util.int__GT_string = (function garden$util$int__GT_string(var_args){
var args__4824__auto__ = [];
var len__4818__auto___44791 = arguments.length;
var i__4819__auto___44792 = (0);
while(true){
if((i__4819__auto___44792 < len__4818__auto___44791)){
args__4824__auto__.push((arguments[i__4819__auto___44792]));

var G__44793 = (i__4819__auto___44792 + (1));
i__4819__auto___44792 = G__44793;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return garden.util.int__GT_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(garden.util.int__GT_string.cljs$core$IFn$_invoke$arity$variadic = (function (i,p__44645){
var vec__44646 = p__44645;
var radix = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44646,(0),null);
var radix__$1 = (function (){var or__4212__auto__ = radix;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (10);
}
})();
return i.toString(radix__$1);
}));

(garden.util.int__GT_string.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(garden.util.int__GT_string.cljs$lang$applyTo = (function (seq44642){
var G__44643 = cljs.core.first(seq44642);
var seq44642__$1 = cljs.core.next(seq44642);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44643,seq44642__$1);
}));

/**
 * Return a space separated list of values.
 */
garden.util.space_join = (function garden$util$space_join(xs){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(garden.util.to_str,xs));
});
/**
 * Return a comma separated list of values. Subsequences are joined with
 * spaces.
 */
garden.util.comma_join = (function garden$util$comma_join(xs){
var ys = (function (){var iter__4611__auto__ = (function garden$util$comma_join_$_iter__44653(s__44654){
return (new cljs.core.LazySeq(null,(function (){
var s__44654__$1 = s__44654;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__44654__$1);
if(temp__5753__auto__){
var s__44654__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__44654__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__44654__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__44656 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__44655 = (0);
while(true){
if((i__44655 < size__4610__auto__)){
var x = cljs.core._nth(c__4609__auto__,i__44655);
cljs.core.chunk_append(b__44656,((cljs.core.sequential_QMARK_(x))?garden.util.space_join(x):garden.util.to_str(x)));

var G__44795 = (i__44655 + (1));
i__44655 = G__44795;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__44656),garden$util$comma_join_$_iter__44653(cljs.core.chunk_rest(s__44654__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__44656),null);
}
} else {
var x = cljs.core.first(s__44654__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?garden.util.space_join(x):garden.util.to_str(x)),garden$util$comma_join_$_iter__44653(cljs.core.rest(s__44654__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(xs);
})();
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",ys);
});
/**
 * Wrap a string with double quotes.
 */
garden.util.wrap_quotes = (function garden$util$wrap_quotes(s){
return ["\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"\""].join('');
});
/**
 * True if `(map? x)` and `x` does not satisfy `clojure.lang.IRecord`.
 */
garden.util.hash_map_QMARK_ = (function garden$util$hash_map_QMARK_(x){
return ((cljs.core.map_QMARK_(x)) && ((!(cljs.core.record_QMARK_(x)))));
});
/**
 * Alias to `vector?`.
 */
garden.util.rule_QMARK_ = cljs.core.vector_QMARK_;
/**
 * Alias to `hash-map?`.
 */
garden.util.declaration_QMARK_ = garden.util.hash_map_QMARK_;
garden.util.at_rule_QMARK_ = (function garden$util$at_rule_QMARK_(x){
return (x instanceof garden.types.CSSAtRule);
});
/**
 * True if `x` is a CSS `@media` rule.
 */
garden.util.at_media_QMARK_ = (function garden$util$at_media_QMARK_(x){
return ((garden.util.at_rule_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"identifier","identifier",-805503498).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"media","media",-1066138403))));
});
/**
 * True if `x` is a CSS `@keyframes` rule.
 */
garden.util.at_keyframes_QMARK_ = (function garden$util$at_keyframes_QMARK_(x){
return ((garden.util.at_rule_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"identifier","identifier",-805503498).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"keyframes","keyframes",-1437976012))));
});
/**
 * True if `x` is a CSS `@import` rule.
 */
garden.util.at_import_QMARK_ = (function garden$util$at_import_QMARK_(x){
return ((garden.util.at_rule_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"identifier","identifier",-805503498).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"import","import",-1399500709))));
});
/**
 * Attach a CSS style prefix to s.
 */
garden.util.prefix = (function garden$util$prefix(p,s){
var p__$1 = garden.util.to_str(p);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("-",cljs.core.last(p__$1))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p__$1),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('');
}
});
/**
 * Attach a CSS vendor prefix to s.
 */
garden.util.vendor_prefix = (function garden$util$vendor_prefix(p,s){
var p__$1 = garden.util.to_str(p);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("-",cljs.core.first(p__$1))){
return garden.util.prefix(p__$1,s);
} else {
return garden.util.prefix(["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p__$1)].join(''),s);
}
});
/**
 * True if n is a natural number.
 */
garden.util.natural_QMARK_ = (function garden$util$natural_QMARK_(n){
return ((cljs.core.integer_QMARK_(n)) && ((n > (0))));
});
/**
 * True if n is a number between a and b.
 */
garden.util.between_QMARK_ = (function garden$util$between_QMARK_(n,a,b){
var bottom = (function (){var x__4298__auto__ = a;
var y__4299__auto__ = b;
return ((x__4298__auto__ < y__4299__auto__) ? x__4298__auto__ : y__4299__auto__);
})();
var top = (function (){var x__4295__auto__ = a;
var y__4296__auto__ = b;
return ((x__4295__auto__ > y__4296__auto__) ? x__4295__auto__ : y__4296__auto__);
})();
return (((n >= bottom)) && ((n <= top)));
});
/**
 * Return a number such that n is no less than a and no more than b.
 */
garden.util.clip = (function garden$util$clip(a,b,n){
var vec__44683 = (((a <= b))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,a], null));
var a__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44683,(0),null);
var b__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44683,(1),null);
var x__4295__auto__ = a__$1;
var y__4296__auto__ = (function (){var x__4298__auto__ = b__$1;
var y__4299__auto__ = n;
return ((x__4298__auto__ < y__4299__auto__) ? x__4298__auto__ : y__4299__auto__);
})();
return ((x__4295__auto__ > y__4296__auto__) ? x__4295__auto__ : y__4296__auto__);
});
/**
 * Return the average of two or more numbers.
 */
garden.util.average = (function garden$util$average(var_args){
var args__4824__auto__ = [];
var len__4818__auto___44814 = arguments.length;
var i__4819__auto___44815 = (0);
while(true){
if((i__4819__auto___44815 < len__4818__auto___44814)){
args__4824__auto__.push((arguments[i__4819__auto___44815]));

var G__44816 = (i__4819__auto___44815 + (1));
i__4819__auto___44815 = G__44816;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return garden.util.average.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(garden.util.average.cljs$core$IFn$_invoke$arity$variadic = (function (n,m,more){
return (cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core._PLUS_,n,m,more) / (2.0 + cljs.core.count(more)));
}));

(garden.util.average.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(garden.util.average.cljs$lang$applyTo = (function (seq44686){
var G__44687 = cljs.core.first(seq44686);
var seq44686__$1 = cljs.core.next(seq44686);
var G__44688 = cljs.core.first(seq44686__$1);
var seq44686__$2 = cljs.core.next(seq44686__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44687,G__44688,seq44686__$2);
}));

/**
 * All the ways to take one item from each sequence.
 */
garden.util.cartesian_product = (function garden$util$cartesian_product(var_args){
var args__4824__auto__ = [];
var len__4818__auto___44840 = arguments.length;
var i__4819__auto___44841 = (0);
while(true){
if((i__4819__auto___44841 < len__4818__auto___44840)){
args__4824__auto__.push((arguments[i__4819__auto___44841]));

var G__44845 = (i__4819__auto___44841 + (1));
i__4819__auto___44841 = G__44845;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return garden.util.cartesian_product.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(garden.util.cartesian_product.cljs$core$IFn$_invoke$arity$variadic = (function (seqs){
var v_original_seqs = cljs.core.vec(seqs);
var step = (function garden$util$step(v_seqs){
var increment = (function (v_seqs__$1){
var i = (cljs.core.count(v_seqs__$1) - (1));
var v_seqs__$2 = v_seqs__$1;
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,(-1))){
return null;
} else {
var temp__5751__auto__ = cljs.core.next((v_seqs__$2.cljs$core$IFn$_invoke$arity$1 ? v_seqs__$2.cljs$core$IFn$_invoke$arity$1(i) : v_seqs__$2.call(null,i)));
if(temp__5751__auto__){
var rst = temp__5751__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v_seqs__$2,i,rst);
} else {
var G__44850 = (i - (1));
var G__44851 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v_seqs__$2,i,(v_original_seqs.cljs$core$IFn$_invoke$arity$1 ? v_original_seqs.cljs$core$IFn$_invoke$arity$1(i) : v_original_seqs.call(null,i)));
i = G__44850;
v_seqs__$2 = G__44851;
continue;
}
}
break;
}
});
if(cljs.core.truth_(v_seqs)){
return cljs.core.cons(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,v_seqs),(new cljs.core.LazySeq(null,(function (){
return garden$util$step(increment(v_seqs));
}),null,null)));
} else {
return null;
}
});
if(cljs.core.every_QMARK_(cljs.core.seq,seqs)){
return (new cljs.core.LazySeq(null,(function (){
return step(v_original_seqs);
}),null,null));
} else {
return null;
}
}));

(garden.util.cartesian_product.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(garden.util.cartesian_product.cljs$lang$applyTo = (function (seq44694){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq44694));
}));


//# sourceMappingURL=garden.util.js.map
