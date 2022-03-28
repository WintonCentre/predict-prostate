goog.provide('tongue.core');
tongue.core.inst_formatter = tongue.inst.formatter;
tongue.core.format_inst_iso = (function (){var G__42453 = "{year}-{month-numeric-padded}-{day-padded}T{hour24-padded}:{minutes-padded}:{seconds-padded}";
var G__42454 = cljs.core.PersistentArrayMap.EMPTY;
return (tongue.core.inst_formatter.cljs$core$IFn$_invoke$arity$2 ? tongue.core.inst_formatter.cljs$core$IFn$_invoke$arity$2(G__42453,G__42454) : tongue.core.inst_formatter.call(null,G__42453,G__42454));
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
var or__4212__auto__ = (function (){var fexpr__42456 = cljs.core.deref(tongue.core.tags_cache);
return (fexpr__42456.cljs$core$IFn$_invoke$arity$1 ? fexpr__42456.cljs$core$IFn$_invoke$arity$1(locale) : fexpr__42456.call(null,locale));
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
var G__42600 = cljs.core.next(subtags);
var G__42601 = tag;
var G__42602 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(tags,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(tag));
subtags = G__42600;
last_tag = G__42601;
tags = G__42602;
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
var or__4212__auto__ = (function (){var dict = cljs.core.get.cljs$core$IFn$_invoke$arity$2(dicts,tag);
if(cljs.core.contains_QMARK_(dict,key)){
return cljs.core.reduced(cljs.core.get.cljs$core$IFn$_invoke$arity$2(dict,key));
} else {
return null;
}
})();
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
var G__42605 = cljs.core.next(tags);
tags = G__42605;
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
return tongue.core.lookup_template_for_locale(dicts,new cljs.core.Keyword("tongue","fallback","tongue/fallback",1378320181).cljs$core$IFn$_invoke$arity$1(dicts),key);
}
});
tongue.core.escape_re_subst = (function tongue$core$escape_re_subst(str){
return clojure.string.replace(str,/\$/,"$$$$");
});
tongue.core.format_argument = (function tongue$core$format_argument(dicts,locale,x){
if(typeof x === 'number'){
var formatter = cljs.core.unreduced((function (){var or__4212__auto__ = tongue.core.lookup_template_for_locale(dicts,locale,new cljs.core.Keyword("tongue","format-number","tongue/format-number",-1083453276));
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.str;
}
})());
return (formatter.cljs$core$IFn$_invoke$arity$1 ? formatter.cljs$core$IFn$_invoke$arity$1(x) : formatter.call(null,x));
} else {
if(cljs.core.inst_QMARK_(x)){
var formatter = cljs.core.unreduced((function (){var or__4212__auto__ = tongue.core.lookup_template_for_locale(dicts,locale,new cljs.core.Keyword("tongue","format-inst","tongue/format-inst",1968776314));
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return tongue.core.format_inst_iso;
}
})());
return (formatter.cljs$core$IFn$_invoke$arity$1 ? formatter.cljs$core$IFn$_invoke$arity$1(x) : formatter.call(null,x));
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(x);

}
}
});

/**
 * @interface
 */
tongue.core.IInterpolate = function(){};

var tongue$core$IInterpolate$interpolate_named$dyn_42609 = (function (v,dicts,locale,interpolations){
var x__4509__auto__ = (((v == null))?null:v);
var m__4510__auto__ = (tongue.core.interpolate_named[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$4(v,dicts,locale,interpolations) : m__4510__auto__.call(null,v,dicts,locale,interpolations));
} else {
var m__4508__auto__ = (tongue.core.interpolate_named["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$4(v,dicts,locale,interpolations) : m__4508__auto__.call(null,v,dicts,locale,interpolations));
} else {
throw cljs.core.missing_protocol("IInterpolate.interpolate-named",v);
}
}
});
/**
 * Interpolate the value `v` with named `interpolations` in the provided map.
 */
tongue.core.interpolate_named = (function tongue$core$interpolate_named(v,dicts,locale,interpolations){
if((((!((v == null)))) && ((!((v.tongue$core$IInterpolate$interpolate_named$arity$4 == null)))))){
return v.tongue$core$IInterpolate$interpolate_named$arity$4(v,dicts,locale,interpolations);
} else {
return tongue$core$IInterpolate$interpolate_named$dyn_42609(v,dicts,locale,interpolations);
}
});

var tongue$core$IInterpolate$interpolate_positional$dyn_42613 = (function (v,dicts,locale,interpolations){
var x__4509__auto__ = (((v == null))?null:v);
var m__4510__auto__ = (tongue.core.interpolate_positional[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$4(v,dicts,locale,interpolations) : m__4510__auto__.call(null,v,dicts,locale,interpolations));
} else {
var m__4508__auto__ = (tongue.core.interpolate_positional["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$4(v,dicts,locale,interpolations) : m__4508__auto__.call(null,v,dicts,locale,interpolations));
} else {
throw cljs.core.missing_protocol("IInterpolate.interpolate-positional",v);
}
}
});
/**
 * Interpolate the value `v` with positional `interpolations` in the provided vector.
 */
tongue.core.interpolate_positional = (function tongue$core$interpolate_positional(v,dicts,locale,interpolations){
if((((!((v == null)))) && ((!((v.tongue$core$IInterpolate$interpolate_positional$arity$4 == null)))))){
return v.tongue$core$IInterpolate$interpolate_positional$arity$4(v,dicts,locale,interpolations);
} else {
return tongue$core$IInterpolate$interpolate_positional$dyn_42613(v,dicts,locale,interpolations);
}
});

goog.object.set(tongue.core.IInterpolate,"string",true);

goog.object.set(tongue.core.interpolate_named,"string",(function (s,dicts,locale,interpolations){
return clojure.string.replace(s,/\{([\w*!_?$%&=<>'\-+.#0-9]+|[\w*!_?$%&=<>'\-+.#0-9]+\/[\w*!_?$%&=<>'\-+.#0-9:]+)\}/,(function (p__42539){
var vec__42540 = p__42539;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42540,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42540,(1),null);
return tongue.core.format_argument(dicts,locale,cljs.core.get.cljs$core$IFn$_invoke$arity$2(interpolations,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k)));
}));
}));

goog.object.set(tongue.core.interpolate_positional,"string",(function (s,dicts,locale,interpolations){
return clojure.string.replace(s,/\{(\d+)\}/,(function (p__42543){
var vec__42544 = p__42543;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42544,(0),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42544,(1),null);
var idx = tongue.core.parse_long(n);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(interpolations,(idx - (1)),["{Missing index ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx),"}"].join(''));
return tongue.core.format_argument(dicts,locale,arg);
}));
}));
tongue.core.invoke_QMARK_ = (function tongue$core$invoke_QMARK_(t){
return ((cljs.core.ifn_QMARK_(t)) && ((!((((!((t == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === t.tongue$core$IInterpolate$))))?true:(((!t.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(tongue.core.IInterpolate,t):false)):cljs.core.native_satisfies_QMARK_(tongue.core.IInterpolate,t))))));
});
tongue.core.translate_missing = (function tongue$core$translate_missing(dicts,locale,key){
var temp__5755__auto__ = tongue.core.lookup_template(dicts,locale,new cljs.core.Keyword("tongue","missing-key","tongue/missing-key",-1899230106));
if((temp__5755__auto__ == null)){
return ["{Missing key ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(key),"}"].join('');
} else {
var t = temp__5755__auto__;
var t__$1 = cljs.core.unreduced(t);
if(tongue.core.invoke_QMARK_(t__$1)){
return tongue.core.interpolate_positional((t__$1.cljs$core$IFn$_invoke$arity$1 ? t__$1.cljs$core$IFn$_invoke$arity$1(key) : t__$1.call(null,key)),dicts,locale,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null));
} else {
if((t__$1 == null)){
return null;
} else {
return tongue.core.interpolate_positional(t__$1,dicts,locale,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null));

}
}
}
});
tongue.core.translate = (function tongue$core$translate(var_args){
var G__42573 = arguments.length;
switch (G__42573) {
case 3:
return tongue.core.translate.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return tongue.core.translate.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__4839__auto__ = [];
var len__4818__auto___42618 = arguments.length;
var i__4819__auto___42619 = (0);
while(true){
if((i__4819__auto___42619 < len__4818__auto___42618)){
args_arr__4839__auto__.push((arguments[i__4819__auto___42619]));

var G__42620 = (i__4819__auto___42619 + (1));
i__4819__auto___42619 = G__42620;
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

var temp__5755__auto__ = tongue.core.lookup_template(dicts,locale,key);
if((temp__5755__auto__ == null)){
return tongue.core.translate_missing(dicts,locale,key);
} else {
var t = temp__5755__auto__;
var t__$1 = cljs.core.unreduced(t);
if(tongue.core.invoke_QMARK_(t__$1)){
return (t__$1.cljs$core$IFn$_invoke$arity$0 ? t__$1.cljs$core$IFn$_invoke$arity$0() : t__$1.call(null));
} else {
return t__$1;
}
}
}));

(tongue.core.translate.cljs$core$IFn$_invoke$arity$4 = (function (dicts,locale,key,x){

var temp__5755__auto__ = tongue.core.lookup_template(dicts,locale,key);
if((temp__5755__auto__ == null)){
return tongue.core.translate_missing(dicts,locale,key);
} else {
var t = temp__5755__auto__;
var t__$1 = cljs.core.unreduced(t);
var v = ((tongue.core.invoke_QMARK_(t__$1))?(t__$1.cljs$core$IFn$_invoke$arity$1 ? t__$1.cljs$core$IFn$_invoke$arity$1(x) : t__$1.call(null,x)):t__$1);
if(cljs.core.map_QMARK_(x)){
return tongue.core.interpolate_named(v,dicts,locale,x);
} else {
return tongue.core.interpolate_positional(v,dicts,locale,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null));
}
}
}));

(tongue.core.translate.cljs$core$IFn$_invoke$arity$variadic = (function (dicts,locale,key,x,rest){

var temp__5755__auto__ = tongue.core.lookup_template(dicts,locale,key);
if((temp__5755__auto__ == null)){
return tongue.core.translate_missing(dicts,locale,key);
} else {
var t = temp__5755__auto__;
var t__$1 = cljs.core.unreduced(t);
var args = cljs.core.cons(x,rest);
return tongue.core.interpolate_positional(((tongue.core.invoke_QMARK_(t__$1))?cljs.core.apply.cljs$core$IFn$_invoke$arity$3(t__$1,x,rest):t__$1),dicts,locale,args);
}
}));

/** @this {Function} */
(tongue.core.translate.cljs$lang$applyTo = (function (seq42565){
var G__42566 = cljs.core.first(seq42565);
var seq42565__$1 = cljs.core.next(seq42565);
var G__42567 = cljs.core.first(seq42565__$1);
var seq42565__$2 = cljs.core.next(seq42565__$1);
var G__42568 = cljs.core.first(seq42565__$2);
var seq42565__$3 = cljs.core.next(seq42565__$2);
var G__42569 = cljs.core.first(seq42565__$3);
var seq42565__$4 = cljs.core.next(seq42565__$3);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42566,G__42567,G__42568,G__42569,seq42565__$4);
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
var G__42587 = arguments.length;
switch (G__42587) {
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

tongue.core.resolve_alias_1 = (function tongue$core$resolve_alias_1(m,k){
var v = k;
var path = cljs.core.PersistentHashSet.EMPTY;
while(true){
if(cljs.core.truth_((path.cljs$core$IFn$_invoke$arity$1 ? path.cljs$core$IFn$_invoke$arity$1(v) : path.call(null,v)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Unable to resolve mutually recursive alias",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),path], null));
} else {
}

var val = (function (){var or__4212__auto__ = (m.cljs$core$IFn$_invoke$arity$1 ? m.cljs$core$IFn$_invoke$arity$1(v) : m.call(null,v));
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return v;
}
})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,v)){
return val;
} else {
var G__42649 = val;
var G__42650 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,v);
v = G__42649;
path = G__42650;
continue;
}
break;
}
});
/**
 * Shallowly walks a map, and finds every value that is also a key in the same
 *   map, and replaces the value with the referenced value. Recursively walks the
 *   map to resolve layered aliases.
 * 
 *   (resolve-aliases {:a 1 :b 2 :c :a}) ;;=> {:a 1 :b 2 :c 1}
 */
tongue.core.resolve_aliases = (function tongue$core$resolve_aliases(m){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__42593_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.first(p1__42593_SHARP_),tongue.core.resolve_alias_1(m,cljs.core.second(p1__42593_SHARP_))],null));
}),m));
});
tongue.core.build_dicts = (function tongue$core$build_dicts(dicts){
return cljs.core.reduce_kv((function (acc,lang,dict){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,lang,((cljs.core.map_QMARK_(dict))?tongue.core.resolve_aliases(tongue.core.build_dict.cljs$core$IFn$_invoke$arity$1(dict)):dict));
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
var G__42655 = null;
var G__42655__2 = (function (locale,key){
return tongue.core.translate.cljs$core$IFn$_invoke$arity$3(compiled_dicts,locale,key);
});
var G__42655__3 = (function (locale,key,x){
return tongue.core.translate.cljs$core$IFn$_invoke$arity$4(compiled_dicts,locale,key,x);
});
var G__42655__4 = (function() { 
var G__42656__delegate = function (locale,key,x,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(tongue.core.translate,compiled_dicts,locale,key,x,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([args], 0));
};
var G__42656 = function (locale,key,x,var_args){
var args = null;
if (arguments.length > 3) {
var G__42659__i = 0, G__42659__a = new Array(arguments.length -  3);
while (G__42659__i < G__42659__a.length) {G__42659__a[G__42659__i] = arguments[G__42659__i + 3]; ++G__42659__i;}
  args = new cljs.core.IndexedSeq(G__42659__a,0,null);
} 
return G__42656__delegate.call(this,locale,key,x,args);};
G__42656.cljs$lang$maxFixedArity = 3;
G__42656.cljs$lang$applyTo = (function (arglist__42660){
var locale = cljs.core.first(arglist__42660);
arglist__42660 = cljs.core.next(arglist__42660);
var key = cljs.core.first(arglist__42660);
arglist__42660 = cljs.core.next(arglist__42660);
var x = cljs.core.first(arglist__42660);
var args = cljs.core.rest(arglist__42660);
return G__42656__delegate(locale,key,x,args);
});
G__42656.cljs$core$IFn$_invoke$arity$variadic = G__42656__delegate;
return G__42656;
})()
;
G__42655 = function(locale,key,x,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return G__42655__2.call(this,locale,key);
case 3:
return G__42655__3.call(this,locale,key,x);
default:
var G__42664 = null;
if (arguments.length > 3) {
var G__42665__i = 0, G__42665__a = new Array(arguments.length -  3);
while (G__42665__i < G__42665__a.length) {G__42665__a[G__42665__i] = arguments[G__42665__i + 3]; ++G__42665__i;}
G__42664 = new cljs.core.IndexedSeq(G__42665__a,0,null);
}
return G__42655__4.cljs$core$IFn$_invoke$arity$variadic(locale,key,x, G__42664);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__42655.cljs$lang$maxFixedArity = 3;
G__42655.cljs$lang$applyTo = G__42655__4.cljs$lang$applyTo;
G__42655.cljs$core$IFn$_invoke$arity$2 = G__42655__2;
G__42655.cljs$core$IFn$_invoke$arity$3 = G__42655__3;
G__42655.cljs$core$IFn$_invoke$arity$variadic = G__42655__4.cljs$core$IFn$_invoke$arity$variadic;
return G__42655;
})()
});

//# sourceMappingURL=tongue.core.js.map
