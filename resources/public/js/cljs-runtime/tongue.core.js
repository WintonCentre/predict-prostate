goog.provide('tongue.core');
tongue.core.inst_formatter = tongue.inst.formatter;
tongue.core.format_inst_iso = (function (){var G__42532 = "{year}-{month-numeric-padded}-{day-padded}T{hour24-padded}:{minutes-padded}:{seconds-padded}";
var G__42533 = cljs.core.PersistentArrayMap.EMPTY;
return (tongue.core.inst_formatter.cljs$core$IFn$_invoke$arity$2 ? tongue.core.inst_formatter.cljs$core$IFn$_invoke$arity$2(G__42532,G__42533) : tongue.core.inst_formatter.call(null,G__42532,G__42533));
})();
tongue.core.number_formatter = tongue.number.formatter;
tongue.core.parse_long = (function tongue$core$parse_long(s){
return parseInt(s);
});
if((typeof tongue !== 'undefined') && (typeof tongue.core !== 'undefined') && (typeof tongue.core.tags_cache !== 'undefined')){
} else {
tongue.core.tags_cache = cljs.core.volatile_BANG_(cljs.core.PersistentArrayMap.EMPTY);
}
/**
 * :az-Arab-IR => (:az-Arab-IR :az-Arab :az), cached
 */
tongue.core.tags = (function tongue$core$tags(locale){
var or__4212__auto__ = (function (){var fexpr__42541 = cljs.core.deref(tongue.core.tags_cache);
return (fexpr__42541.cljs$core$IFn$_invoke$arity$1 ? fexpr__42541.cljs$core$IFn$_invoke$arity$1(locale) : fexpr__42541.call(null,locale));
})();
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
var tags = (function (){var subtags = clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.name(locale),/-/);
var last_tag = null;
var tags = cljs.core.List.EMPTY;
while(true){
var temp__5755__auto__ = cljs.core.first(subtags);
if((temp__5755__auto__ == null)){
return tags;
} else {
var subtag = temp__5755__auto__;
var tag = [last_tag,(cljs.core.truth_(last_tag)?"-":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(subtag)].join('');
var G__42673 = cljs.core.next(subtags);
var G__42674 = tag;
var G__42675 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(tags,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(tag));
subtags = G__42673;
last_tag = G__42674;
tags = G__42675;
continue;
}
break;
}
})();
tongue.core.tags_cache.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(tongue.core.tags_cache.cljs$core$IDeref$_deref$arity$1(null),locale,tags));

return tags;
}
});
tongue.core.lookup_template_for_locale = (function tongue$core$lookup_template_for_locale(dicts,locale,key){
if(cljs.core.truth_(locale)){
var tags = tongue.core.tags(locale);
while(true){
var temp__5757__auto__ = cljs.core.first(tags);
if((temp__5757__auto__ == null)){
return null;
} else {
var tag = temp__5757__auto__;
var or__4212__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(dicts,tag),key);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
var G__42685 = cljs.core.next(tags);
tags = G__42685;
continue;
}
}
break;
}
} else {
return null;
}
});
tongue.core.lookup_template = (function tongue$core$lookup_template(dicts,locale,key){
var or__4212__auto__ = tongue.core.lookup_template_for_locale(dicts,locale,key);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
var or__4212__auto____$1 = tongue.core.lookup_template_for_locale(dicts,new cljs.core.Keyword("tongue","fallback","tongue/fallback",1378320181).cljs$core$IFn$_invoke$arity$1(dicts),key);
if(cljs.core.truth_(or__4212__auto____$1)){
return or__4212__auto____$1;
} else {
return ["{Missing key ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(key),"}"].join('');
}
}
});
tongue.core.escape_re_subst = (function tongue$core$escape_re_subst(str){
return clojure.string.replace(str,/\$/,"$$$$");
});
tongue.core.format_argument = (function tongue$core$format_argument(dicts,locale,x){
if(typeof x === 'number'){
var formatter = (function (){var or__4212__auto__ = tongue.core.lookup_template_for_locale(dicts,locale,new cljs.core.Keyword("tongue","format-number","tongue/format-number",-1083453276));
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.str;
}
})();
return (formatter.cljs$core$IFn$_invoke$arity$1 ? formatter.cljs$core$IFn$_invoke$arity$1(x) : formatter.call(null,x));
} else {
if(cljs.core.inst_QMARK_(x)){
var formatter = (function (){var or__4212__auto__ = tongue.core.lookup_template_for_locale(dicts,locale,new cljs.core.Keyword("tongue","format-inst","tongue/format-inst",1968776314));
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return tongue.core.format_inst_iso;
}
})();
return (formatter.cljs$core$IFn$_invoke$arity$1 ? formatter.cljs$core$IFn$_invoke$arity$1(x) : formatter.call(null,x));
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(x);

}
}
});
tongue.core.translate = (function tongue$core$translate(var_args){
var G__42614 = arguments.length;
switch (G__42614) {
case 3:
return tongue.core.translate.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return tongue.core.translate.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__4839__auto__ = [];
var len__4818__auto___42691 = arguments.length;
var i__4819__auto___42692 = (0);
while(true){
if((i__4819__auto___42692 < len__4818__auto___42691)){
args_arr__4839__auto__.push((arguments[i__4819__auto___42692]));

var G__42693 = (i__4819__auto___42692 + (1));
i__4819__auto___42692 = G__42693;
continue;
} else {
}
break;
}

var argseq__4840__auto__ = (new cljs.core.IndexedSeq(args_arr__4839__auto__.slice((4)),(0),null));
return tongue.core.translate.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4840__auto__);

}
});

(tongue.core.translate.cljs$core$IFn$_invoke$arity$3 = (function (dicts,locale,key){

var t = tongue.core.lookup_template(dicts,locale,key);
if(cljs.core.ifn_QMARK_(t)){
return (t.cljs$core$IFn$_invoke$arity$0 ? t.cljs$core$IFn$_invoke$arity$0() : t.call(null));
} else {
return t;
}
}));

(tongue.core.translate.cljs$core$IFn$_invoke$arity$4 = (function (dicts,locale,key,x){

var t = tongue.core.lookup_template(dicts,locale,key);
var s = ((cljs.core.ifn_QMARK_(t))?(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(x) : t.call(null,x)):t);
if(cljs.core.map_QMARK_(x)){
return clojure.string.replace(s,/\{(\w+)\}/,(function (p__42619){
var vec__42620 = p__42619;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42620,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42620,(1),null);
return tongue.core.format_argument(dicts,locale,cljs.core.get.cljs$core$IFn$_invoke$arity$2(x,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k)));
}));
} else {
return clojure.string.replace(s,/\{1\}/,tongue.core.escape_re_subst(tongue.core.format_argument(dicts,locale,x)));
}
}));

(tongue.core.translate.cljs$core$IFn$_invoke$arity$variadic = (function (dicts,locale,key,x,rest){

var args = cljs.core.cons(x,rest);
var t = tongue.core.lookup_template(dicts,locale,key);
var s = ((cljs.core.ifn_QMARK_(t))?cljs.core.apply.cljs$core$IFn$_invoke$arity$3(t,x,rest):t);
return clojure.string.replace(s,/\{(\d+)\}/,(function (p__42624){
var vec__42625 = p__42624;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42625,(0),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42625,(1),null);
var idx = tongue.core.parse_long(n);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(args,(idx - (1)),["{Missing index ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx),"}"].join(''));
return tongue.core.format_argument(dicts,locale,arg);
}));
}));

/** @this {Function} */
(tongue.core.translate.cljs$lang$applyTo = (function (seq42607){
var G__42608 = cljs.core.first(seq42607);
var seq42607__$1 = cljs.core.next(seq42607);
var G__42610 = cljs.core.first(seq42607__$1);
var seq42607__$2 = cljs.core.next(seq42607__$1);
var G__42611 = cljs.core.first(seq42607__$2);
var seq42607__$3 = cljs.core.next(seq42607__$2);
var G__42612 = cljs.core.first(seq42607__$3);
var seq42607__$4 = cljs.core.next(seq42607__$3);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42608,G__42610,G__42611,G__42612,seq42607__$4);
}));

(tongue.core.translate.cljs$lang$maxFixedArity = (4));

tongue.core.append_ns = (function tongue$core$append_ns(ns,segment){
return [(cljs.core.truth_(ns)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"."].join(''):null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(segment)].join('');
});
/**
 * Collapses nested maps into namespaced keywords:
 * { :ns { :key 1 }} => { :ns/key 1 }
 * { :animal { :flying { :bird 420 }}} => { :animal.flying/bird 420 }
 */
tongue.core.build_dict = (function tongue$core$build_dict(var_args){
var G__42638 = arguments.length;
switch (G__42638) {
case 1:
return tongue.core.build_dict.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tongue.core.build_dict.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(tongue.core.build_dict.cljs$core$IFn$_invoke$arity$1 = (function (dict){
return tongue.core.build_dict.cljs$core$IFn$_invoke$arity$2(null,dict);
}));

(tongue.core.build_dict.cljs$core$IFn$_invoke$arity$2 = (function (ns,dict){
return cljs.core.reduce_kv((function (aggr,key,value){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("tongue",cljs.core.namespace(key))){
if((ns == null)){
} else {
throw (new Error(["Assert failed: ",":tongue/... keys can only be specified at top level","\n","(nil? ns)"].join('')));
}

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(aggr,key,value);
} else {
if(cljs.core.map_QMARK_(value)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([aggr,tongue.core.build_dict.cljs$core$IFn$_invoke$arity$2(tongue.core.append_ns(ns,cljs.core.name(key)),value)], 0));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(aggr,cljs.core.keyword.cljs$core$IFn$_invoke$arity$2((function (){var or__4212__auto__ = ns;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.namespace(key);
}
})(),cljs.core.name(key)),value);

}
}
}),cljs.core.PersistentArrayMap.EMPTY,dict);
}));

(tongue.core.build_dict.cljs$lang$maxFixedArity = 2);

tongue.core.build_dicts = (function tongue$core$build_dicts(dicts){
return cljs.core.reduce_kv((function (acc,lang,dict){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,lang,((cljs.core.map_QMARK_(dict))?tongue.core.build_dict.cljs$core$IFn$_invoke$arity$1(dict):dict));
}),cljs.core.PersistentArrayMap.EMPTY,dicts);
});
/**
 * Given dicts, builds translate function closed over these dicts:
 * 
 *     (build-translate dicts) => ( [locale key & args] => string )
 */
tongue.core.build_translate = (function tongue$core$build_translate(dicts){

var compiled_dicts = tongue.core.build_dicts(dicts);
return (function() {
var G__42700 = null;
var G__42700__2 = (function (locale,key){
return tongue.core.translate.cljs$core$IFn$_invoke$arity$3(compiled_dicts,locale,key);
});
var G__42700__3 = (function (locale,key,x){
return tongue.core.translate.cljs$core$IFn$_invoke$arity$4(compiled_dicts,locale,key,x);
});
var G__42700__4 = (function() { 
var G__42701__delegate = function (locale,key,x,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(tongue.core.translate,compiled_dicts,locale,key,x,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([args], 0));
};
var G__42701 = function (locale,key,x,var_args){
var args = null;
if (arguments.length > 3) {
var G__42702__i = 0, G__42702__a = new Array(arguments.length -  3);
while (G__42702__i < G__42702__a.length) {G__42702__a[G__42702__i] = arguments[G__42702__i + 3]; ++G__42702__i;}
  args = new cljs.core.IndexedSeq(G__42702__a,0,null);
} 
return G__42701__delegate.call(this,locale,key,x,args);};
G__42701.cljs$lang$maxFixedArity = 3;
G__42701.cljs$lang$applyTo = (function (arglist__42704){
var locale = cljs.core.first(arglist__42704);
arglist__42704 = cljs.core.next(arglist__42704);
var key = cljs.core.first(arglist__42704);
arglist__42704 = cljs.core.next(arglist__42704);
var x = cljs.core.first(arglist__42704);
var args = cljs.core.rest(arglist__42704);
return G__42701__delegate(locale,key,x,args);
});
G__42701.cljs$core$IFn$_invoke$arity$variadic = G__42701__delegate;
return G__42701;
})()
;
G__42700 = function(locale,key,x,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return G__42700__2.call(this,locale,key);
case 3:
return G__42700__3.call(this,locale,key,x);
default:
var G__42706 = null;
if (arguments.length > 3) {
var G__42707__i = 0, G__42707__a = new Array(arguments.length -  3);
while (G__42707__i < G__42707__a.length) {G__42707__a[G__42707__i] = arguments[G__42707__i + 3]; ++G__42707__i;}
G__42706 = new cljs.core.IndexedSeq(G__42707__a,0,null);
}
return G__42700__4.cljs$core$IFn$_invoke$arity$variadic(locale,key,x, G__42706);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__42700.cljs$lang$maxFixedArity = 3;
G__42700.cljs$lang$applyTo = G__42700__4.cljs$lang$applyTo;
G__42700.cljs$core$IFn$_invoke$arity$2 = G__42700__2;
G__42700.cljs$core$IFn$_invoke$arity$3 = G__42700__3;
G__42700.cljs$core$IFn$_invoke$arity$variadic = G__42700__4.cljs$core$IFn$_invoke$arity$variadic;
return G__42700;
})()
});

//# sourceMappingURL=tongue.core.js.map
