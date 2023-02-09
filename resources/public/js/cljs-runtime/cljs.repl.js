goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__39000){
var map__39001 = p__39000;
var map__39001__$1 = cljs.core.__destructure_map(map__39001);
var m = map__39001__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39001__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39001__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__39005_39481 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__39006_39482 = null;
var count__39007_39483 = (0);
var i__39008_39484 = (0);
while(true){
if((i__39008_39484 < count__39007_39483)){
var f_39488 = chunk__39006_39482.cljs$core$IIndexed$_nth$arity$2(null,i__39008_39484);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_39488], 0));


var G__39489 = seq__39005_39481;
var G__39490 = chunk__39006_39482;
var G__39491 = count__39007_39483;
var G__39492 = (i__39008_39484 + (1));
seq__39005_39481 = G__39489;
chunk__39006_39482 = G__39490;
count__39007_39483 = G__39491;
i__39008_39484 = G__39492;
continue;
} else {
var temp__5753__auto___39493 = cljs.core.seq(seq__39005_39481);
if(temp__5753__auto___39493){
var seq__39005_39494__$1 = temp__5753__auto___39493;
if(cljs.core.chunked_seq_QMARK_(seq__39005_39494__$1)){
var c__4638__auto___39495 = cljs.core.chunk_first(seq__39005_39494__$1);
var G__39496 = cljs.core.chunk_rest(seq__39005_39494__$1);
var G__39497 = c__4638__auto___39495;
var G__39498 = cljs.core.count(c__4638__auto___39495);
var G__39499 = (0);
seq__39005_39481 = G__39496;
chunk__39006_39482 = G__39497;
count__39007_39483 = G__39498;
i__39008_39484 = G__39499;
continue;
} else {
var f_39500 = cljs.core.first(seq__39005_39494__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_39500], 0));


var G__39501 = cljs.core.next(seq__39005_39494__$1);
var G__39502 = null;
var G__39503 = (0);
var G__39504 = (0);
seq__39005_39481 = G__39501;
chunk__39006_39482 = G__39502;
count__39007_39483 = G__39503;
i__39008_39484 = G__39504;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_39505 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4212__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_39505], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_39505)))?cljs.core.second(arglists_39505):arglists_39505)], 0));
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
var seq__39022_39513 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__39023_39514 = null;
var count__39024_39515 = (0);
var i__39025_39516 = (0);
while(true){
if((i__39025_39516 < count__39024_39515)){
var vec__39047_39517 = chunk__39023_39514.cljs$core$IIndexed$_nth$arity$2(null,i__39025_39516);
var name_39518 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39047_39517,(0),null);
var map__39050_39519 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39047_39517,(1),null);
var map__39050_39520__$1 = cljs.core.__destructure_map(map__39050_39519);
var doc_39521 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39050_39520__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_39522 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39050_39520__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_39518], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_39522], 0));

if(cljs.core.truth_(doc_39521)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_39521], 0));
} else {
}


var G__39530 = seq__39022_39513;
var G__39531 = chunk__39023_39514;
var G__39532 = count__39024_39515;
var G__39533 = (i__39025_39516 + (1));
seq__39022_39513 = G__39530;
chunk__39023_39514 = G__39531;
count__39024_39515 = G__39532;
i__39025_39516 = G__39533;
continue;
} else {
var temp__5753__auto___39538 = cljs.core.seq(seq__39022_39513);
if(temp__5753__auto___39538){
var seq__39022_39542__$1 = temp__5753__auto___39538;
if(cljs.core.chunked_seq_QMARK_(seq__39022_39542__$1)){
var c__4638__auto___39543 = cljs.core.chunk_first(seq__39022_39542__$1);
var G__39544 = cljs.core.chunk_rest(seq__39022_39542__$1);
var G__39545 = c__4638__auto___39543;
var G__39546 = cljs.core.count(c__4638__auto___39543);
var G__39547 = (0);
seq__39022_39513 = G__39544;
chunk__39023_39514 = G__39545;
count__39024_39515 = G__39546;
i__39025_39516 = G__39547;
continue;
} else {
var vec__39052_39548 = cljs.core.first(seq__39022_39542__$1);
var name_39549 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39052_39548,(0),null);
var map__39055_39550 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39052_39548,(1),null);
var map__39055_39551__$1 = cljs.core.__destructure_map(map__39055_39550);
var doc_39552 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39055_39551__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_39553 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39055_39551__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_39549], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_39553], 0));

if(cljs.core.truth_(doc_39552)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_39552], 0));
} else {
}


var G__39558 = cljs.core.next(seq__39022_39542__$1);
var G__39559 = null;
var G__39560 = (0);
var G__39561 = (0);
seq__39022_39513 = G__39558;
chunk__39023_39514 = G__39559;
count__39024_39515 = G__39560;
i__39025_39516 = G__39561;
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

var seq__39057 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__39058 = null;
var count__39059 = (0);
var i__39060 = (0);
while(true){
if((i__39060 < count__39059)){
var role = chunk__39058.cljs$core$IIndexed$_nth$arity$2(null,i__39060);
var temp__5753__auto___39567__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___39567__$1)){
var spec_39573 = temp__5753__auto___39567__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_39573)], 0));
} else {
}


var G__39575 = seq__39057;
var G__39576 = chunk__39058;
var G__39577 = count__39059;
var G__39578 = (i__39060 + (1));
seq__39057 = G__39575;
chunk__39058 = G__39576;
count__39059 = G__39577;
i__39060 = G__39578;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq(seq__39057);
if(temp__5753__auto____$1){
var seq__39057__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__39057__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__39057__$1);
var G__39585 = cljs.core.chunk_rest(seq__39057__$1);
var G__39586 = c__4638__auto__;
var G__39587 = cljs.core.count(c__4638__auto__);
var G__39588 = (0);
seq__39057 = G__39585;
chunk__39058 = G__39586;
count__39059 = G__39587;
i__39060 = G__39588;
continue;
} else {
var role = cljs.core.first(seq__39057__$1);
var temp__5753__auto___39599__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___39599__$2)){
var spec_39600 = temp__5753__auto___39599__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_39600)], 0));
} else {
}


var G__39603 = cljs.core.next(seq__39057__$1);
var G__39604 = null;
var G__39605 = (0);
var G__39606 = (0);
seq__39057 = G__39603;
chunk__39058 = G__39604;
count__39059 = G__39605;
i__39060 = G__39606;
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
var G__39639 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__39640 = cljs.core.ex_cause(t);
via = G__39639;
t = G__39640;
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
var map__39294 = datafied_throwable;
var map__39294__$1 = cljs.core.__destructure_map(map__39294);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39294__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39294__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__39294__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__39295 = cljs.core.last(via);
var map__39295__$1 = cljs.core.__destructure_map(map__39295);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39295__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39295__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39295__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__39296 = data;
var map__39296__$1 = cljs.core.__destructure_map(map__39296);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39296__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39296__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39296__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__39297 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__39297__$1 = cljs.core.__destructure_map(map__39297);
var top_data = map__39297__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39297__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__39318 = phase;
var G__39318__$1 = (((G__39318 instanceof cljs.core.Keyword))?G__39318.fqn:null);
switch (G__39318__$1) {
case "read-source":
var map__39339 = data;
var map__39339__$1 = cljs.core.__destructure_map(map__39339);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39339__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39339__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__39351 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__39351__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39351,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__39351);
var G__39351__$2 = (cljs.core.truth_((function (){var fexpr__39363 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__39363.cljs$core$IFn$_invoke$arity$1 ? fexpr__39363.cljs$core$IFn$_invoke$arity$1(source) : fexpr__39363.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__39351__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__39351__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39351__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__39351__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__39368 = top_data;
var G__39368__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39368,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__39368);
var G__39368__$2 = (cljs.core.truth_((function (){var fexpr__39370 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__39370.cljs$core$IFn$_invoke$arity$1 ? fexpr__39370.cljs$core$IFn$_invoke$arity$1(source) : fexpr__39370.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__39368__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__39368__$1);
var G__39368__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39368__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__39368__$2);
var G__39368__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39368__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__39368__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39368__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__39368__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__39372 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39372,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39372,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39372,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39372,(3),null);
var G__39376 = top_data;
var G__39376__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39376,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__39376);
var G__39376__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39376__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__39376__$1);
var G__39376__$3 = (cljs.core.truth_((function (){var and__4210__auto__ = source__$1;
if(cljs.core.truth_(and__4210__auto__)){
return method;
} else {
return and__4210__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39376__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__39376__$2);
var G__39376__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39376__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__39376__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39376__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__39376__$4;
}

break;
case "execution":
var vec__39378 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39378,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39378,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39378,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39378,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__39273_SHARP_){
var or__4212__auto__ = (p1__39273_SHARP_ == null);
if(or__4212__auto__){
return or__4212__auto__;
} else {
var fexpr__39383 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__39383.cljs$core$IFn$_invoke$arity$1 ? fexpr__39383.cljs$core$IFn$_invoke$arity$1(p1__39273_SHARP_) : fexpr__39383.call(null,p1__39273_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4212__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return line;
}
})();
var G__39384 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__39384__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39384,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__39384);
var G__39384__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39384__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__39384__$1);
var G__39384__$3 = (cljs.core.truth_((function (){var or__4212__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39384__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4212__auto__ = fn;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__39384__$2);
var G__39384__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39384__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__39384__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39384__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__39384__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39318__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__39404){
var map__39405 = p__39404;
var map__39405__$1 = cljs.core.__destructure_map(map__39405);
var triage_data = map__39405__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39405__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39405__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39405__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39405__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39405__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39405__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39405__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39405__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__39410 = phase;
var G__39410__$1 = (((G__39410 instanceof cljs.core.Keyword))?G__39410.fqn:null);
switch (G__39410__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__39411 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__39412 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__39413 = loc;
var G__39414 = (cljs.core.truth_(spec)?(function (){var sb__4749__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__39416_39719 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__39417_39720 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__39418_39721 = true;
var _STAR_print_fn_STAR__temp_val__39419_39722 = (function (x__4750__auto__){
return sb__4749__auto__.append(x__4750__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__39418_39721);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__39419_39722);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__39402_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__39402_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__39417_39720);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__39416_39719);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4749__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__39411,G__39412,G__39413,G__39414) : format.call(null,G__39411,G__39412,G__39413,G__39414));

break;
case "macroexpansion":
var G__39421 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__39422 = cause_type;
var G__39423 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__39424 = loc;
var G__39425 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__39421,G__39422,G__39423,G__39424,G__39425) : format.call(null,G__39421,G__39422,G__39423,G__39424,G__39425));

break;
case "compile-syntax-check":
var G__39431 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__39432 = cause_type;
var G__39433 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__39434 = loc;
var G__39435 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__39431,G__39432,G__39433,G__39434,G__39435) : format.call(null,G__39431,G__39432,G__39433,G__39434,G__39435));

break;
case "compilation":
var G__39437 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__39438 = cause_type;
var G__39439 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__39440 = loc;
var G__39441 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__39437,G__39438,G__39439,G__39440,G__39441) : format.call(null,G__39437,G__39438,G__39439,G__39440,G__39441));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__39443 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__39444 = symbol;
var G__39445 = loc;
var G__39446 = (function (){var sb__4749__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__39448_39727 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__39449_39728 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__39450_39729 = true;
var _STAR_print_fn_STAR__temp_val__39451_39730 = (function (x__4750__auto__){
return sb__4749__auto__.append(x__4750__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__39450_39729);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__39451_39730);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__39403_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__39403_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__39449_39728);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__39448_39727);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4749__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__39443,G__39444,G__39445,G__39446) : format.call(null,G__39443,G__39444,G__39445,G__39446));
} else {
var G__39460 = "Execution error%s at %s(%s).\n%s\n";
var G__39461 = cause_type;
var G__39462 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__39463 = loc;
var G__39464 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__39460,G__39461,G__39462,G__39463,G__39464) : format.call(null,G__39460,G__39461,G__39462,G__39463,G__39464));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39410__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
