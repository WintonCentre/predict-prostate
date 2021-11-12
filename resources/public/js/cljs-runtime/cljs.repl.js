goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__38201){
var map__38202 = p__38201;
var map__38202__$1 = (((((!((map__38202 == null))))?(((((map__38202.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38202.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38202):map__38202);
var m = map__38202__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38202__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38202__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__38208_38518 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__38209_38519 = null;
var count__38210_38520 = (0);
var i__38211_38521 = (0);
while(true){
if((i__38211_38521 < count__38210_38520)){
var f_38522 = chunk__38209_38519.cljs$core$IIndexed$_nth$arity$2(null,i__38211_38521);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_38522], 0));


var G__38523 = seq__38208_38518;
var G__38524 = chunk__38209_38519;
var G__38525 = count__38210_38520;
var G__38526 = (i__38211_38521 + (1));
seq__38208_38518 = G__38523;
chunk__38209_38519 = G__38524;
count__38210_38520 = G__38525;
i__38211_38521 = G__38526;
continue;
} else {
var temp__5735__auto___38527 = cljs.core.seq(seq__38208_38518);
if(temp__5735__auto___38527){
var seq__38208_38528__$1 = temp__5735__auto___38527;
if(cljs.core.chunked_seq_QMARK_(seq__38208_38528__$1)){
var c__4556__auto___38529 = cljs.core.chunk_first(seq__38208_38528__$1);
var G__38530 = cljs.core.chunk_rest(seq__38208_38528__$1);
var G__38531 = c__4556__auto___38529;
var G__38532 = cljs.core.count(c__4556__auto___38529);
var G__38533 = (0);
seq__38208_38518 = G__38530;
chunk__38209_38519 = G__38531;
count__38210_38520 = G__38532;
i__38211_38521 = G__38533;
continue;
} else {
var f_38534 = cljs.core.first(seq__38208_38528__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_38534], 0));


var G__38535 = cljs.core.next(seq__38208_38528__$1);
var G__38536 = null;
var G__38537 = (0);
var G__38538 = (0);
seq__38208_38518 = G__38535;
chunk__38209_38519 = G__38536;
count__38210_38520 = G__38537;
i__38211_38521 = G__38538;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_38539 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_38539], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_38539)))?cljs.core.second(arglists_38539):arglists_38539)], 0));
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
var seq__38213_38542 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__38214_38543 = null;
var count__38215_38544 = (0);
var i__38216_38545 = (0);
while(true){
if((i__38216_38545 < count__38215_38544)){
var vec__38227_38546 = chunk__38214_38543.cljs$core$IIndexed$_nth$arity$2(null,i__38216_38545);
var name_38547 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38227_38546,(0),null);
var map__38230_38548 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38227_38546,(1),null);
var map__38230_38549__$1 = (((((!((map__38230_38548 == null))))?(((((map__38230_38548.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38230_38548.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38230_38548):map__38230_38548);
var doc_38550 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38230_38549__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_38551 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38230_38549__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_38547], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_38551], 0));

if(cljs.core.truth_(doc_38550)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_38550], 0));
} else {
}


var G__38552 = seq__38213_38542;
var G__38553 = chunk__38214_38543;
var G__38554 = count__38215_38544;
var G__38555 = (i__38216_38545 + (1));
seq__38213_38542 = G__38552;
chunk__38214_38543 = G__38553;
count__38215_38544 = G__38554;
i__38216_38545 = G__38555;
continue;
} else {
var temp__5735__auto___38556 = cljs.core.seq(seq__38213_38542);
if(temp__5735__auto___38556){
var seq__38213_38557__$1 = temp__5735__auto___38556;
if(cljs.core.chunked_seq_QMARK_(seq__38213_38557__$1)){
var c__4556__auto___38558 = cljs.core.chunk_first(seq__38213_38557__$1);
var G__38559 = cljs.core.chunk_rest(seq__38213_38557__$1);
var G__38560 = c__4556__auto___38558;
var G__38561 = cljs.core.count(c__4556__auto___38558);
var G__38562 = (0);
seq__38213_38542 = G__38559;
chunk__38214_38543 = G__38560;
count__38215_38544 = G__38561;
i__38216_38545 = G__38562;
continue;
} else {
var vec__38232_38566 = cljs.core.first(seq__38213_38557__$1);
var name_38567 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38232_38566,(0),null);
var map__38235_38568 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38232_38566,(1),null);
var map__38235_38569__$1 = (((((!((map__38235_38568 == null))))?(((((map__38235_38568.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38235_38568.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38235_38568):map__38235_38568);
var doc_38570 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38235_38569__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_38571 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38235_38569__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_38567], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_38571], 0));

if(cljs.core.truth_(doc_38570)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_38570], 0));
} else {
}


var G__38575 = cljs.core.next(seq__38213_38557__$1);
var G__38576 = null;
var G__38577 = (0);
var G__38578 = (0);
seq__38213_38542 = G__38575;
chunk__38214_38543 = G__38576;
count__38215_38544 = G__38577;
i__38216_38545 = G__38578;
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

var seq__38240 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__38241 = null;
var count__38242 = (0);
var i__38243 = (0);
while(true){
if((i__38243 < count__38242)){
var role = chunk__38241.cljs$core$IIndexed$_nth$arity$2(null,i__38243);
var temp__5735__auto___38584__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___38584__$1)){
var spec_38586 = temp__5735__auto___38584__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_38586)], 0));
} else {
}


var G__38587 = seq__38240;
var G__38588 = chunk__38241;
var G__38589 = count__38242;
var G__38590 = (i__38243 + (1));
seq__38240 = G__38587;
chunk__38241 = G__38588;
count__38242 = G__38589;
i__38243 = G__38590;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__38240);
if(temp__5735__auto____$1){
var seq__38240__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__38240__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__38240__$1);
var G__38591 = cljs.core.chunk_rest(seq__38240__$1);
var G__38592 = c__4556__auto__;
var G__38593 = cljs.core.count(c__4556__auto__);
var G__38594 = (0);
seq__38240 = G__38591;
chunk__38241 = G__38592;
count__38242 = G__38593;
i__38243 = G__38594;
continue;
} else {
var role = cljs.core.first(seq__38240__$1);
var temp__5735__auto___38595__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___38595__$2)){
var spec_38596 = temp__5735__auto___38595__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_38596)], 0));
} else {
}


var G__38597 = cljs.core.next(seq__38240__$1);
var G__38598 = null;
var G__38599 = (0);
var G__38600 = (0);
seq__38240 = G__38597;
chunk__38241 = G__38598;
count__38242 = G__38599;
i__38243 = G__38600;
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
var G__38601 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__38602 = cljs.core.ex_cause(t);
via = G__38601;
t = G__38602;
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
var map__38412 = datafied_throwable;
var map__38412__$1 = (((((!((map__38412 == null))))?(((((map__38412.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38412.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38412):map__38412);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38412__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38412__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__38412__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__38414 = cljs.core.last(via);
var map__38414__$1 = (((((!((map__38414 == null))))?(((((map__38414.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38414.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38414):map__38414);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38414__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38414__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38414__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__38416 = data;
var map__38416__$1 = (((((!((map__38416 == null))))?(((((map__38416.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38416.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38416):map__38416);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38416__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38416__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38416__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__38417 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__38417__$1 = (((((!((map__38417 == null))))?(((((map__38417.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38417.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38417):map__38417);
var top_data = map__38417__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38417__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__38433 = phase;
var G__38433__$1 = (((G__38433 instanceof cljs.core.Keyword))?G__38433.fqn:null);
switch (G__38433__$1) {
case "read-source":
var map__38435 = data;
var map__38435__$1 = (((((!((map__38435 == null))))?(((((map__38435.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38435.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38435):map__38435);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38435__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38435__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__38439 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__38439__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38439,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__38439);
var G__38439__$2 = (cljs.core.truth_((function (){var fexpr__38440 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__38440.cljs$core$IFn$_invoke$arity$1 ? fexpr__38440.cljs$core$IFn$_invoke$arity$1(source) : fexpr__38440.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__38439__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__38439__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38439__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__38439__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__38442 = top_data;
var G__38442__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38442,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__38442);
var G__38442__$2 = (cljs.core.truth_((function (){var fexpr__38444 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__38444.cljs$core$IFn$_invoke$arity$1 ? fexpr__38444.cljs$core$IFn$_invoke$arity$1(source) : fexpr__38444.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__38442__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__38442__$1);
var G__38442__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38442__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__38442__$2);
var G__38442__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38442__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__38442__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38442__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__38442__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__38448 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38448,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38448,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38448,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38448,(3),null);
var G__38451 = top_data;
var G__38451__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38451,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__38451);
var G__38451__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38451__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__38451__$1);
var G__38451__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38451__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__38451__$2);
var G__38451__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38451__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__38451__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38451__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__38451__$4;
}

break;
case "execution":
var vec__38452 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38452,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38452,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38452,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38452,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__38409_SHARP_){
var or__4126__auto__ = (p1__38409_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var fexpr__38456 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__38456.cljs$core$IFn$_invoke$arity$1 ? fexpr__38456.cljs$core$IFn$_invoke$arity$1(p1__38409_SHARP_) : fexpr__38456.call(null,p1__38409_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__38459 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__38459__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38459,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__38459);
var G__38459__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38459__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__38459__$1);
var G__38459__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38459__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__38459__$2);
var G__38459__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38459__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__38459__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38459__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__38459__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38433__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__38464){
var map__38465 = p__38464;
var map__38465__$1 = (((((!((map__38465 == null))))?(((((map__38465.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38465.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38465):map__38465);
var triage_data = map__38465__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38465__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38465__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38465__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38465__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38465__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38465__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38465__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38465__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__38473 = phase;
var G__38473__$1 = (((G__38473 instanceof cljs.core.Keyword))?G__38473.fqn:null);
switch (G__38473__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__38474 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__38475 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__38476 = loc;
var G__38477 = (cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__38478_38667 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__38479_38668 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__38480_38669 = true;
var _STAR_print_fn_STAR__temp_val__38481_38670 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__38480_38669);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__38481_38670);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__38462_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__38462_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__38479_38668);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__38478_38667);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__38474,G__38475,G__38476,G__38477) : format.call(null,G__38474,G__38475,G__38476,G__38477));

break;
case "macroexpansion":
var G__38483 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__38484 = cause_type;
var G__38485 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__38486 = loc;
var G__38487 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__38483,G__38484,G__38485,G__38486,G__38487) : format.call(null,G__38483,G__38484,G__38485,G__38486,G__38487));

break;
case "compile-syntax-check":
var G__38490 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__38491 = cause_type;
var G__38492 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__38493 = loc;
var G__38494 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__38490,G__38491,G__38492,G__38493,G__38494) : format.call(null,G__38490,G__38491,G__38492,G__38493,G__38494));

break;
case "compilation":
var G__38495 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__38496 = cause_type;
var G__38497 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__38498 = loc;
var G__38499 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__38495,G__38496,G__38497,G__38498,G__38499) : format.call(null,G__38495,G__38496,G__38497,G__38498,G__38499));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__38500 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__38501 = symbol;
var G__38502 = loc;
var G__38503 = (function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__38504_38675 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__38505_38676 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__38506_38677 = true;
var _STAR_print_fn_STAR__temp_val__38507_38678 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__38506_38677);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__38507_38678);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__38463_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__38463_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__38505_38676);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__38504_38675);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__38500,G__38501,G__38502,G__38503) : format.call(null,G__38500,G__38501,G__38502,G__38503));
} else {
var G__38511 = "Execution error%s at %s(%s).\n%s\n";
var G__38512 = cause_type;
var G__38513 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__38514 = loc;
var G__38515 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__38511,G__38512,G__38513,G__38514,G__38515) : format.call(null,G__38511,G__38512,G__38513,G__38514,G__38515));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38473__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
