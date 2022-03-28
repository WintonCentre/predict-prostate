goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__39183){
var map__39185 = p__39183;
var map__39185__$1 = cljs.core.__destructure_map(map__39185);
var m = map__39185__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39185__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39185__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4212__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return [(function (){var temp__5753__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
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
var seq__39191_39523 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__39192_39524 = null;
var count__39193_39525 = (0);
var i__39194_39526 = (0);
while(true){
if((i__39194_39526 < count__39193_39525)){
var f_39531 = chunk__39192_39524.cljs$core$IIndexed$_nth$arity$2(null,i__39194_39526);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_39531], 0));


var G__39534 = seq__39191_39523;
var G__39535 = chunk__39192_39524;
var G__39536 = count__39193_39525;
var G__39537 = (i__39194_39526 + (1));
seq__39191_39523 = G__39534;
chunk__39192_39524 = G__39535;
count__39193_39525 = G__39536;
i__39194_39526 = G__39537;
continue;
} else {
var temp__5753__auto___39539 = cljs.core.seq(seq__39191_39523);
if(temp__5753__auto___39539){
var seq__39191_39540__$1 = temp__5753__auto___39539;
if(cljs.core.chunked_seq_QMARK_(seq__39191_39540__$1)){
var c__4638__auto___39541 = cljs.core.chunk_first(seq__39191_39540__$1);
var G__39542 = cljs.core.chunk_rest(seq__39191_39540__$1);
var G__39543 = c__4638__auto___39541;
var G__39544 = cljs.core.count(c__4638__auto___39541);
var G__39545 = (0);
seq__39191_39523 = G__39542;
chunk__39192_39524 = G__39543;
count__39193_39525 = G__39544;
i__39194_39526 = G__39545;
continue;
} else {
var f_39546 = cljs.core.first(seq__39191_39540__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_39546], 0));


var G__39547 = cljs.core.next(seq__39191_39540__$1);
var G__39548 = null;
var G__39549 = (0);
var G__39550 = (0);
seq__39191_39523 = G__39547;
chunk__39192_39524 = G__39548;
count__39193_39525 = G__39549;
i__39194_39526 = G__39550;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_39551 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4212__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_39551], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_39551)))?cljs.core.second(arglists_39551):arglists_39551)], 0));
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
var seq__39205_39552 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__39206_39553 = null;
var count__39207_39554 = (0);
var i__39208_39555 = (0);
while(true){
if((i__39208_39555 < count__39207_39554)){
var vec__39232_39556 = chunk__39206_39553.cljs$core$IIndexed$_nth$arity$2(null,i__39208_39555);
var name_39557 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39232_39556,(0),null);
var map__39235_39558 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39232_39556,(1),null);
var map__39235_39559__$1 = cljs.core.__destructure_map(map__39235_39558);
var doc_39560 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39235_39559__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_39561 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39235_39559__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_39557], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_39561], 0));

if(cljs.core.truth_(doc_39560)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_39560], 0));
} else {
}


var G__39563 = seq__39205_39552;
var G__39564 = chunk__39206_39553;
var G__39565 = count__39207_39554;
var G__39566 = (i__39208_39555 + (1));
seq__39205_39552 = G__39563;
chunk__39206_39553 = G__39564;
count__39207_39554 = G__39565;
i__39208_39555 = G__39566;
continue;
} else {
var temp__5753__auto___39568 = cljs.core.seq(seq__39205_39552);
if(temp__5753__auto___39568){
var seq__39205_39569__$1 = temp__5753__auto___39568;
if(cljs.core.chunked_seq_QMARK_(seq__39205_39569__$1)){
var c__4638__auto___39570 = cljs.core.chunk_first(seq__39205_39569__$1);
var G__39571 = cljs.core.chunk_rest(seq__39205_39569__$1);
var G__39572 = c__4638__auto___39570;
var G__39573 = cljs.core.count(c__4638__auto___39570);
var G__39574 = (0);
seq__39205_39552 = G__39571;
chunk__39206_39553 = G__39572;
count__39207_39554 = G__39573;
i__39208_39555 = G__39574;
continue;
} else {
var vec__39240_39576 = cljs.core.first(seq__39205_39569__$1);
var name_39577 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39240_39576,(0),null);
var map__39243_39578 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39240_39576,(1),null);
var map__39243_39579__$1 = cljs.core.__destructure_map(map__39243_39578);
var doc_39580 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39243_39579__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_39581 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39243_39579__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_39577], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_39581], 0));

if(cljs.core.truth_(doc_39580)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_39580], 0));
} else {
}


var G__39584 = cljs.core.next(seq__39205_39569__$1);
var G__39585 = null;
var G__39586 = (0);
var G__39587 = (0);
seq__39205_39552 = G__39584;
chunk__39206_39553 = G__39585;
count__39207_39554 = G__39586;
i__39208_39555 = G__39587;
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
var temp__5753__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5753__auto__)){
var fnspec = temp__5753__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__39251 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__39252 = null;
var count__39253 = (0);
var i__39254 = (0);
while(true){
if((i__39254 < count__39253)){
var role = chunk__39252.cljs$core$IIndexed$_nth$arity$2(null,i__39254);
var temp__5753__auto___39589__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___39589__$1)){
var spec_39590 = temp__5753__auto___39589__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_39590)], 0));
} else {
}


var G__39591 = seq__39251;
var G__39592 = chunk__39252;
var G__39593 = count__39253;
var G__39594 = (i__39254 + (1));
seq__39251 = G__39591;
chunk__39252 = G__39592;
count__39253 = G__39593;
i__39254 = G__39594;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq(seq__39251);
if(temp__5753__auto____$1){
var seq__39251__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__39251__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__39251__$1);
var G__39595 = cljs.core.chunk_rest(seq__39251__$1);
var G__39596 = c__4638__auto__;
var G__39597 = cljs.core.count(c__4638__auto__);
var G__39598 = (0);
seq__39251 = G__39595;
chunk__39252 = G__39596;
count__39253 = G__39597;
i__39254 = G__39598;
continue;
} else {
var role = cljs.core.first(seq__39251__$1);
var temp__5753__auto___39599__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___39599__$2)){
var spec_39600 = temp__5753__auto___39599__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_39600)], 0));
} else {
}


var G__39601 = cljs.core.next(seq__39251__$1);
var G__39602 = null;
var G__39603 = (0);
var G__39604 = (0);
seq__39251 = G__39601;
chunk__39252 = G__39602;
count__39253 = G__39603;
i__39254 = G__39604;
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
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5753__auto__)){
var msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5753__auto__)){
var ed = temp__5753__auto__;
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
var G__39605 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__39606 = cljs.core.ex_cause(t);
via = G__39605;
t = G__39606;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5753__auto__)){
var root_msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5753__auto__)){
var data = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5753__auto__)){
var phase = temp__5753__auto__;
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
var map__39354 = datafied_throwable;
var map__39354__$1 = cljs.core.__destructure_map(map__39354);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39354__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39354__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__39354__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__39355 = cljs.core.last(via);
var map__39355__$1 = cljs.core.__destructure_map(map__39355);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39355__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39355__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39355__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__39356 = data;
var map__39356__$1 = cljs.core.__destructure_map(map__39356);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39356__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39356__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39356__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__39357 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__39357__$1 = cljs.core.__destructure_map(map__39357);
var top_data = map__39357__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39357__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__39373 = phase;
var G__39373__$1 = (((G__39373 instanceof cljs.core.Keyword))?G__39373.fqn:null);
switch (G__39373__$1) {
case "read-source":
var map__39389 = data;
var map__39389__$1 = cljs.core.__destructure_map(map__39389);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39389__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39389__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__39397 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__39397__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39397,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__39397);
var G__39397__$2 = (cljs.core.truth_((function (){var fexpr__39399 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__39399.cljs$core$IFn$_invoke$arity$1 ? fexpr__39399.cljs$core$IFn$_invoke$arity$1(source) : fexpr__39399.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__39397__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__39397__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39397__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__39397__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__39400 = top_data;
var G__39400__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39400,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__39400);
var G__39400__$2 = (cljs.core.truth_((function (){var fexpr__39401 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__39401.cljs$core$IFn$_invoke$arity$1 ? fexpr__39401.cljs$core$IFn$_invoke$arity$1(source) : fexpr__39401.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__39400__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__39400__$1);
var G__39400__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39400__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__39400__$2);
var G__39400__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39400__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__39400__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39400__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__39400__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__39402 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39402,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39402,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39402,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39402,(3),null);
var G__39405 = top_data;
var G__39405__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39405,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__39405);
var G__39405__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39405__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__39405__$1);
var G__39405__$3 = (cljs.core.truth_((function (){var and__4210__auto__ = source__$1;
if(cljs.core.truth_(and__4210__auto__)){
return method;
} else {
return and__4210__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39405__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__39405__$2);
var G__39405__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39405__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__39405__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39405__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__39405__$4;
}

break;
case "execution":
var vec__39407 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39407,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39407,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39407,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39407,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__39344_SHARP_){
var or__4212__auto__ = (p1__39344_SHARP_ == null);
if(or__4212__auto__){
return or__4212__auto__;
} else {
var fexpr__39454 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__39454.cljs$core$IFn$_invoke$arity$1 ? fexpr__39454.cljs$core$IFn$_invoke$arity$1(p1__39344_SHARP_) : fexpr__39454.call(null,p1__39344_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4212__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return line;
}
})();
var G__39456 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__39456__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39456,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__39456);
var G__39456__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39456__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__39456__$1);
var G__39456__$3 = (cljs.core.truth_((function (){var or__4212__auto__ = fn;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
var and__4210__auto__ = source__$1;
if(cljs.core.truth_(and__4210__auto__)){
return method;
} else {
return and__4210__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39456__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4212__auto__ = fn;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__39456__$2);
var G__39456__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39456__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__39456__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39456__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__39456__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39373__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__39465){
var map__39472 = p__39465;
var map__39472__$1 = cljs.core.__destructure_map(map__39472);
var triage_data = map__39472__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39472__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39472__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39472__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39472__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39472__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39472__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39472__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39472__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4212__auto__ = source;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4212__auto__ = line;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4212__auto__ = class$;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__39483 = phase;
var G__39483__$1 = (((G__39483 instanceof cljs.core.Keyword))?G__39483.fqn:null);
switch (G__39483__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__39484 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__39485 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__39486 = loc;
var G__39487 = (cljs.core.truth_(spec)?(function (){var sb__4749__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__39488_39629 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__39489_39630 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__39490_39631 = true;
var _STAR_print_fn_STAR__temp_val__39491_39632 = (function (x__4750__auto__){
return sb__4749__auto__.append(x__4750__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__39490_39631);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__39491_39632);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__39463_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__39463_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__39489_39630);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__39488_39629);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4749__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__39484,G__39485,G__39486,G__39487) : format.call(null,G__39484,G__39485,G__39486,G__39487));

break;
case "macroexpansion":
var G__39492 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__39493 = cause_type;
var G__39494 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__39495 = loc;
var G__39496 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__39492,G__39493,G__39494,G__39495,G__39496) : format.call(null,G__39492,G__39493,G__39494,G__39495,G__39496));

break;
case "compile-syntax-check":
var G__39497 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__39498 = cause_type;
var G__39499 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__39500 = loc;
var G__39501 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__39497,G__39498,G__39499,G__39500,G__39501) : format.call(null,G__39497,G__39498,G__39499,G__39500,G__39501));

break;
case "compilation":
var G__39502 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__39503 = cause_type;
var G__39504 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__39505 = loc;
var G__39506 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__39502,G__39503,G__39504,G__39505,G__39506) : format.call(null,G__39502,G__39503,G__39504,G__39505,G__39506));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__39507 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__39508 = symbol;
var G__39509 = loc;
var G__39510 = (function (){var sb__4749__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__39511_39647 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__39512_39648 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__39513_39649 = true;
var _STAR_print_fn_STAR__temp_val__39514_39650 = (function (x__4750__auto__){
return sb__4749__auto__.append(x__4750__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__39513_39649);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__39514_39650);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__39464_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__39464_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__39512_39648);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__39511_39647);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4749__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__39507,G__39508,G__39509,G__39510) : format.call(null,G__39507,G__39508,G__39509,G__39510));
} else {
var G__39516 = "Execution error%s at %s(%s).\n%s\n";
var G__39517 = cause_type;
var G__39518 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__39519 = loc;
var G__39520 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__39516,G__39517,G__39518,G__39519,G__39520) : format.call(null,G__39516,G__39517,G__39518,G__39519,G__39520));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39483__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
