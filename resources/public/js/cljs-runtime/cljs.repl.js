goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__38090){
var map__38097 = p__38090;
var map__38097__$1 = (((((!((map__38097 == null))))?(((((map__38097.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38097.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38097):map__38097);
var m = map__38097__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38097__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38097__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__38124_38452 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__38125_38453 = null;
var count__38126_38454 = (0);
var i__38127_38455 = (0);
while(true){
if((i__38127_38455 < count__38126_38454)){
var f_38457 = chunk__38125_38453.cljs$core$IIndexed$_nth$arity$2(null,i__38127_38455);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_38457], 0));


var G__38458 = seq__38124_38452;
var G__38459 = chunk__38125_38453;
var G__38460 = count__38126_38454;
var G__38461 = (i__38127_38455 + (1));
seq__38124_38452 = G__38458;
chunk__38125_38453 = G__38459;
count__38126_38454 = G__38460;
i__38127_38455 = G__38461;
continue;
} else {
var temp__5735__auto___38462 = cljs.core.seq(seq__38124_38452);
if(temp__5735__auto___38462){
var seq__38124_38463__$1 = temp__5735__auto___38462;
if(cljs.core.chunked_seq_QMARK_(seq__38124_38463__$1)){
var c__4556__auto___38464 = cljs.core.chunk_first(seq__38124_38463__$1);
var G__38465 = cljs.core.chunk_rest(seq__38124_38463__$1);
var G__38466 = c__4556__auto___38464;
var G__38467 = cljs.core.count(c__4556__auto___38464);
var G__38468 = (0);
seq__38124_38452 = G__38465;
chunk__38125_38453 = G__38466;
count__38126_38454 = G__38467;
i__38127_38455 = G__38468;
continue;
} else {
var f_38470 = cljs.core.first(seq__38124_38463__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_38470], 0));


var G__38471 = cljs.core.next(seq__38124_38463__$1);
var G__38472 = null;
var G__38473 = (0);
var G__38474 = (0);
seq__38124_38452 = G__38471;
chunk__38125_38453 = G__38472;
count__38126_38454 = G__38473;
i__38127_38455 = G__38474;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_38475 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_38475], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_38475)))?cljs.core.second(arglists_38475):arglists_38475)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__38250_38477 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__38251_38478 = null;
var count__38252_38479 = (0);
var i__38253_38480 = (0);
while(true){
if((i__38253_38480 < count__38252_38479)){
var vec__38274_38481 = chunk__38251_38478.cljs$core$IIndexed$_nth$arity$2(null,i__38253_38480);
var name_38482 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38274_38481,(0),null);
var map__38277_38483 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38274_38481,(1),null);
var map__38277_38484__$1 = (((((!((map__38277_38483 == null))))?(((((map__38277_38483.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38277_38483.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38277_38483):map__38277_38483);
var doc_38485 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38277_38484__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_38486 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38277_38484__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_38482], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_38486], 0));

if(cljs.core.truth_(doc_38485)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_38485], 0));
} else {
}


var G__38489 = seq__38250_38477;
var G__38490 = chunk__38251_38478;
var G__38491 = count__38252_38479;
var G__38492 = (i__38253_38480 + (1));
seq__38250_38477 = G__38489;
chunk__38251_38478 = G__38490;
count__38252_38479 = G__38491;
i__38253_38480 = G__38492;
continue;
} else {
var temp__5735__auto___38493 = cljs.core.seq(seq__38250_38477);
if(temp__5735__auto___38493){
var seq__38250_38494__$1 = temp__5735__auto___38493;
if(cljs.core.chunked_seq_QMARK_(seq__38250_38494__$1)){
var c__4556__auto___38495 = cljs.core.chunk_first(seq__38250_38494__$1);
var G__38497 = cljs.core.chunk_rest(seq__38250_38494__$1);
var G__38498 = c__4556__auto___38495;
var G__38499 = cljs.core.count(c__4556__auto___38495);
var G__38500 = (0);
seq__38250_38477 = G__38497;
chunk__38251_38478 = G__38498;
count__38252_38479 = G__38499;
i__38253_38480 = G__38500;
continue;
} else {
var vec__38279_38501 = cljs.core.first(seq__38250_38494__$1);
var name_38502 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38279_38501,(0),null);
var map__38282_38503 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38279_38501,(1),null);
var map__38282_38504__$1 = (((((!((map__38282_38503 == null))))?(((((map__38282_38503.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38282_38503.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38282_38503):map__38282_38503);
var doc_38505 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38282_38504__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_38506 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38282_38504__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_38502], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_38506], 0));

if(cljs.core.truth_(doc_38505)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_38505], 0));
} else {
}


var G__38507 = cljs.core.next(seq__38250_38494__$1);
var G__38508 = null;
var G__38509 = (0);
var G__38510 = (0);
seq__38250_38477 = G__38507;
chunk__38251_38478 = G__38508;
count__38252_38479 = G__38509;
i__38253_38480 = G__38510;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__38285 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__38286 = null;
var count__38287 = (0);
var i__38288 = (0);
while(true){
if((i__38288 < count__38287)){
var role = chunk__38286.cljs$core$IIndexed$_nth$arity$2(null,i__38288);
var temp__5735__auto___38511__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___38511__$1)){
var spec_38512 = temp__5735__auto___38511__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_38512)], 0));
} else {
}


var G__38513 = seq__38285;
var G__38514 = chunk__38286;
var G__38515 = count__38287;
var G__38516 = (i__38288 + (1));
seq__38285 = G__38513;
chunk__38286 = G__38514;
count__38287 = G__38515;
i__38288 = G__38516;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__38285);
if(temp__5735__auto____$1){
var seq__38285__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__38285__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__38285__$1);
var G__38518 = cljs.core.chunk_rest(seq__38285__$1);
var G__38519 = c__4556__auto__;
var G__38520 = cljs.core.count(c__4556__auto__);
var G__38521 = (0);
seq__38285 = G__38518;
chunk__38286 = G__38519;
count__38287 = G__38520;
i__38288 = G__38521;
continue;
} else {
var role = cljs.core.first(seq__38285__$1);
var temp__5735__auto___38523__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___38523__$2)){
var spec_38524 = temp__5735__auto___38523__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_38524)], 0));
} else {
}


var G__38527 = cljs.core.next(seq__38285__$1);
var G__38528 = null;
var G__38529 = (0);
var G__38530 = (0);
seq__38285 = G__38527;
chunk__38286 = G__38528;
count__38287 = G__38529;
i__38288 = G__38530;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__38537 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__38538 = cljs.core.ex_cause(t);
via = G__38537;
t = G__38538;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__38329 = datafied_throwable;
var map__38329__$1 = (((((!((map__38329 == null))))?(((((map__38329.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38329.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38329):map__38329);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38329__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38329__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__38329__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__38331 = cljs.core.last(via);
var map__38331__$1 = (((((!((map__38331 == null))))?(((((map__38331.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38331.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38331):map__38331);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38331__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38331__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38331__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__38332 = data;
var map__38332__$1 = (((((!((map__38332 == null))))?(((((map__38332.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38332.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38332):map__38332);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38332__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38332__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38332__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__38333 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__38333__$1 = (((((!((map__38333 == null))))?(((((map__38333.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38333.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38333):map__38333);
var top_data = map__38333__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38333__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__38343 = phase;
var G__38343__$1 = (((G__38343 instanceof cljs.core.Keyword))?G__38343.fqn:null);
switch (G__38343__$1) {
case "read-source":
var map__38348 = data;
var map__38348__$1 = (((((!((map__38348 == null))))?(((((map__38348.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38348.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38348):map__38348);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38348__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38348__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__38351 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__38351__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38351,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__38351);
var G__38351__$2 = (cljs.core.truth_((function (){var fexpr__38353 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__38353.cljs$core$IFn$_invoke$arity$1 ? fexpr__38353.cljs$core$IFn$_invoke$arity$1(source) : fexpr__38353.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__38351__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__38351__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38351__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__38351__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__38354 = top_data;
var G__38354__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38354,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__38354);
var G__38354__$2 = (cljs.core.truth_((function (){var fexpr__38355 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__38355.cljs$core$IFn$_invoke$arity$1 ? fexpr__38355.cljs$core$IFn$_invoke$arity$1(source) : fexpr__38355.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__38354__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__38354__$1);
var G__38354__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38354__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__38354__$2);
var G__38354__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38354__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__38354__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38354__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__38354__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__38357 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38357,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38357,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38357,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38357,(3),null);
var G__38361 = top_data;
var G__38361__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38361,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__38361);
var G__38361__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38361__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__38361__$1);
var G__38361__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38361__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__38361__$2);
var G__38361__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38361__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__38361__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38361__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__38361__$4;
}

break;
case "execution":
var vec__38370 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38370,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38370,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38370,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38370,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__38328_SHARP_){
var or__4126__auto__ = (p1__38328_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var fexpr__38374 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__38374.cljs$core$IFn$_invoke$arity$1 ? fexpr__38374.cljs$core$IFn$_invoke$arity$1(p1__38328_SHARP_) : fexpr__38374.call(null,p1__38328_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__38375 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__38375__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38375,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__38375);
var G__38375__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38375__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__38375__$1);
var G__38375__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38375__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__38375__$2);
var G__38375__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38375__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__38375__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38375__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__38375__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38343__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__38387){
var map__38388 = p__38387;
var map__38388__$1 = (((((!((map__38388 == null))))?(((((map__38388.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38388.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38388):map__38388);
var triage_data = map__38388__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38388__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38388__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38388__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38388__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38388__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38388__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38388__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38388__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__38392 = phase;
var G__38392__$1 = (((G__38392 instanceof cljs.core.Keyword))?G__38392.fqn:null);
switch (G__38392__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__38393 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__38394 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__38395 = loc;
var G__38396 = (cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__38397_38560 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__38398_38561 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__38399_38562 = true;
var _STAR_print_fn_STAR__temp_val__38400_38563 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__38399_38562);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__38400_38563);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__38384_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__38384_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__38398_38561);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__38397_38560);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__38393,G__38394,G__38395,G__38396) : format.call(null,G__38393,G__38394,G__38395,G__38396));

break;
case "macroexpansion":
var G__38402 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__38403 = cause_type;
var G__38404 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__38405 = loc;
var G__38406 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__38402,G__38403,G__38404,G__38405,G__38406) : format.call(null,G__38402,G__38403,G__38404,G__38405,G__38406));

break;
case "compile-syntax-check":
var G__38408 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__38409 = cause_type;
var G__38410 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__38411 = loc;
var G__38412 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__38408,G__38409,G__38410,G__38411,G__38412) : format.call(null,G__38408,G__38409,G__38410,G__38411,G__38412));

break;
case "compilation":
var G__38418 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__38419 = cause_type;
var G__38420 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__38421 = loc;
var G__38422 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__38418,G__38419,G__38420,G__38421,G__38422) : format.call(null,G__38418,G__38419,G__38420,G__38421,G__38422));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__38427 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__38428 = symbol;
var G__38429 = loc;
var G__38430 = (function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__38431_38569 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__38432_38570 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__38433_38571 = true;
var _STAR_print_fn_STAR__temp_val__38434_38572 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__38433_38571);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__38434_38572);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__38385_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__38385_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__38432_38570);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__38431_38569);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__38427,G__38428,G__38429,G__38430) : format.call(null,G__38427,G__38428,G__38429,G__38430));
} else {
var G__38436 = "Execution error%s at %s(%s).\n%s\n";
var G__38437 = cause_type;
var G__38438 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__38439 = loc;
var G__38440 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__38436,G__38437,G__38438,G__38439,G__38440) : format.call(null,G__38436,G__38437,G__38438,G__38439,G__38440));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38392__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
