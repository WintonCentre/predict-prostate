goog.provide('rum.util');
rum.util.collect = (function rum$util$collect(key,mixins){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (m){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,key);
}),mixins));
});
rum.util.collect_STAR_ = (function rum$util$collect_STAR_(keys,mixins){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (m){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (k){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
}),keys);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([mixins], 0)));
});
rum.util.call_all = (function rum$util$call_all(var_args){
var args__4824__auto__ = [];
var len__4818__auto___42738 = arguments.length;
var i__4819__auto___42739 = (0);
while(true){
if((i__4819__auto___42739 < len__4818__auto___42738)){
args__4824__auto__.push((arguments[i__4819__auto___42739]));

var G__42741 = (i__4819__auto___42739 + (1));
i__4819__auto___42739 = G__42741;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return rum.util.call_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(rum.util.call_all.cljs$core$IFn$_invoke$arity$variadic = (function (state,fns,args){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (state__$1,fn){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(fn,state__$1,args);
}),state,fns);
}));

(rum.util.call_all.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(rum.util.call_all.cljs$lang$applyTo = (function (seq42703){
var G__42704 = cljs.core.first(seq42703);
var seq42703__$1 = cljs.core.next(seq42703);
var G__42705 = cljs.core.first(seq42703__$1);
var seq42703__$2 = cljs.core.next(seq42703__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42704,G__42705,seq42703__$2);
}));


//# sourceMappingURL=rum.util.js.map
