goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__38803){
var map__38805 = p__38803;
var map__38805__$1 = cljs.core.__destructure_map(map__38805);
var m = map__38805__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38805__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38805__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__38809_39132 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__38810_39133 = null;
var count__38811_39134 = (0);
var i__38812_39135 = (0);
while(true){
if((i__38812_39135 < count__38811_39134)){
var f_39136 = chunk__38810_39133.cljs$core$IIndexed$_nth$arity$2(null,i__38812_39135);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_39136], 0));


var G__39137 = seq__38809_39132;
var G__39138 = chunk__38810_39133;
var G__39139 = count__38811_39134;
var G__39140 = (i__38812_39135 + (1));
seq__38809_39132 = G__39137;
chunk__38810_39133 = G__39138;
count__38811_39134 = G__39139;
i__38812_39135 = G__39140;
continue;
} else {
var temp__5753__auto___39145 = cljs.core.seq(seq__38809_39132);
if(temp__5753__auto___39145){
var seq__38809_39146__$1 = temp__5753__auto___39145;
if(cljs.core.chunked_seq_QMARK_(seq__38809_39146__$1)){
var c__4638__auto___39147 = cljs.core.chunk_first(seq__38809_39146__$1);
var G__39148 = cljs.core.chunk_rest(seq__38809_39146__$1);
var G__39149 = c__4638__auto___39147;
var G__39150 = cljs.core.count(c__4638__auto___39147);
var G__39151 = (0);
seq__38809_39132 = G__39148;
chunk__38810_39133 = G__39149;
count__38811_39134 = G__39150;
i__38812_39135 = G__39151;
continue;
} else {
var f_39155 = cljs.core.first(seq__38809_39146__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_39155], 0));


var G__39156 = cljs.core.next(seq__38809_39146__$1);
var G__39157 = null;
var G__39158 = (0);
var G__39159 = (0);
seq__38809_39132 = G__39156;
chunk__38810_39133 = G__39157;
count__38811_39134 = G__39158;
i__38812_39135 = G__39159;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_39160 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4212__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_39160], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_39160)))?cljs.core.second(arglists_39160):arglists_39160)], 0));
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
var seq__38821_39161 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__38822_39162 = null;
var count__38823_39163 = (0);
var i__38824_39164 = (0);
while(true){
if((i__38824_39164 < count__38823_39163)){
var vec__38839_39168 = chunk__38822_39162.cljs$core$IIndexed$_nth$arity$2(null,i__38824_39164);
var name_39169 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38839_39168,(0),null);
var map__38842_39170 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38839_39168,(1),null);
var map__38842_39171__$1 = cljs.core.__destructure_map(map__38842_39170);
var doc_39172 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38842_39171__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_39173 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38842_39171__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_39169], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_39173], 0));

if(cljs.core.truth_(doc_39172)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_39172], 0));
} else {
}


var G__39174 = seq__38821_39161;
var G__39175 = chunk__38822_39162;
var G__39176 = count__38823_39163;
var G__39177 = (i__38824_39164 + (1));
seq__38821_39161 = G__39174;
chunk__38822_39162 = G__39175;
count__38823_39163 = G__39176;
i__38824_39164 = G__39177;
continue;
} else {
var temp__5753__auto___39178 = cljs.core.seq(seq__38821_39161);
if(temp__5753__auto___39178){
var seq__38821_39179__$1 = temp__5753__auto___39178;
if(cljs.core.chunked_seq_QMARK_(seq__38821_39179__$1)){
var c__4638__auto___39183 = cljs.core.chunk_first(seq__38821_39179__$1);
var G__39184 = cljs.core.chunk_rest(seq__38821_39179__$1);
var G__39185 = c__4638__auto___39183;
var G__39186 = cljs.core.count(c__4638__auto___39183);
var G__39187 = (0);
seq__38821_39161 = G__39184;
chunk__38822_39162 = G__39185;
count__38823_39163 = G__39186;
i__38824_39164 = G__39187;
continue;
} else {
var vec__38851_39188 = cljs.core.first(seq__38821_39179__$1);
var name_39189 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38851_39188,(0),null);
var map__38854_39190 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38851_39188,(1),null);
var map__38854_39191__$1 = cljs.core.__destructure_map(map__38854_39190);
var doc_39192 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38854_39191__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_39193 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38854_39191__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_39189], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_39193], 0));

if(cljs.core.truth_(doc_39192)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_39192], 0));
} else {
}


var G__39194 = cljs.core.next(seq__38821_39179__$1);
var G__39195 = null;
var G__39196 = (0);
var G__39197 = (0);
seq__38821_39161 = G__39194;
chunk__38822_39162 = G__39195;
count__38823_39163 = G__39196;
i__38824_39164 = G__39197;
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

var seq__38865 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__38866 = null;
var count__38867 = (0);
var i__38868 = (0);
while(true){
if((i__38868 < count__38867)){
var role = chunk__38866.cljs$core$IIndexed$_nth$arity$2(null,i__38868);
var temp__5753__auto___39201__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___39201__$1)){
var spec_39202 = temp__5753__auto___39201__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_39202)], 0));
} else {
}


var G__39203 = seq__38865;
var G__39204 = chunk__38866;
var G__39205 = count__38867;
var G__39206 = (i__38868 + (1));
seq__38865 = G__39203;
chunk__38866 = G__39204;
count__38867 = G__39205;
i__38868 = G__39206;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq(seq__38865);
if(temp__5753__auto____$1){
var seq__38865__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__38865__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__38865__$1);
var G__39207 = cljs.core.chunk_rest(seq__38865__$1);
var G__39208 = c__4638__auto__;
var G__39209 = cljs.core.count(c__4638__auto__);
var G__39210 = (0);
seq__38865 = G__39207;
chunk__38866 = G__39208;
count__38867 = G__39209;
i__38868 = G__39210;
continue;
} else {
var role = cljs.core.first(seq__38865__$1);
var temp__5753__auto___39211__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___39211__$2)){
var spec_39212 = temp__5753__auto___39211__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_39212)], 0));
} else {
}


var G__39213 = cljs.core.next(seq__38865__$1);
var G__39214 = null;
var G__39215 = (0);
var G__39216 = (0);
seq__38865 = G__39213;
chunk__38866 = G__39214;
count__38867 = G__39215;
i__38868 = G__39216;
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
var G__39218 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__39219 = cljs.core.ex_cause(t);
via = G__39218;
t = G__39219;
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
var map__38999 = datafied_throwable;
var map__38999__$1 = cljs.core.__destructure_map(map__38999);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38999__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38999__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__38999__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__39004 = cljs.core.last(via);
var map__39004__$1 = cljs.core.__destructure_map(map__39004);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39004__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39004__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39004__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__39005 = data;
var map__39005__$1 = cljs.core.__destructure_map(map__39005);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39005__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39005__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39005__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__39007 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__39007__$1 = cljs.core.__destructure_map(map__39007);
var top_data = map__39007__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39007__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__39016 = phase;
var G__39016__$1 = (((G__39016 instanceof cljs.core.Keyword))?G__39016.fqn:null);
switch (G__39016__$1) {
case "read-source":
var map__39023 = data;
var map__39023__$1 = cljs.core.__destructure_map(map__39023);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39023__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39023__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__39024 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__39024__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39024,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__39024);
var G__39024__$2 = (cljs.core.truth_((function (){var fexpr__39026 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__39026.cljs$core$IFn$_invoke$arity$1 ? fexpr__39026.cljs$core$IFn$_invoke$arity$1(source) : fexpr__39026.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__39024__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__39024__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39024__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__39024__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__39031 = top_data;
var G__39031__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39031,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__39031);
var G__39031__$2 = (cljs.core.truth_((function (){var fexpr__39033 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__39033.cljs$core$IFn$_invoke$arity$1 ? fexpr__39033.cljs$core$IFn$_invoke$arity$1(source) : fexpr__39033.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__39031__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__39031__$1);
var G__39031__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39031__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__39031__$2);
var G__39031__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39031__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__39031__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39031__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__39031__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__39039 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39039,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39039,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39039,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39039,(3),null);
var G__39042 = top_data;
var G__39042__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39042,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__39042);
var G__39042__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39042__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__39042__$1);
var G__39042__$3 = (cljs.core.truth_((function (){var and__4210__auto__ = source__$1;
if(cljs.core.truth_(and__4210__auto__)){
return method;
} else {
return and__4210__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39042__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__39042__$2);
var G__39042__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39042__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__39042__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39042__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__39042__$4;
}

break;
case "execution":
var vec__39051 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39051,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39051,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39051,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39051,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__38990_SHARP_){
var or__4212__auto__ = (p1__38990_SHARP_ == null);
if(or__4212__auto__){
return or__4212__auto__;
} else {
var fexpr__39055 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__39055.cljs$core$IFn$_invoke$arity$1 ? fexpr__39055.cljs$core$IFn$_invoke$arity$1(p1__38990_SHARP_) : fexpr__39055.call(null,p1__38990_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4212__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return line;
}
})();
var G__39059 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__39059__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39059,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__39059);
var G__39059__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39059__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__39059__$1);
var G__39059__$3 = (cljs.core.truth_((function (){var or__4212__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39059__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4212__auto__ = fn;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__39059__$2);
var G__39059__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39059__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__39059__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39059__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__39059__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39016__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__39070){
var map__39071 = p__39070;
var map__39071__$1 = cljs.core.__destructure_map(map__39071);
var triage_data = map__39071__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39071__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39071__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39071__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39071__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39071__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39071__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39071__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39071__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__39082 = phase;
var G__39082__$1 = (((G__39082 instanceof cljs.core.Keyword))?G__39082.fqn:null);
switch (G__39082__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__39084 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__39085 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__39086 = loc;
var G__39087 = (cljs.core.truth_(spec)?(function (){var sb__4749__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__39088_39245 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__39089_39246 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__39090_39247 = true;
var _STAR_print_fn_STAR__temp_val__39091_39248 = (function (x__4750__auto__){
return sb__4749__auto__.append(x__4750__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__39090_39247);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__39091_39248);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__39066_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__39066_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__39089_39246);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__39088_39245);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4749__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__39084,G__39085,G__39086,G__39087) : format.call(null,G__39084,G__39085,G__39086,G__39087));

break;
case "macroexpansion":
var G__39093 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__39094 = cause_type;
var G__39095 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__39096 = loc;
var G__39097 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__39093,G__39094,G__39095,G__39096,G__39097) : format.call(null,G__39093,G__39094,G__39095,G__39096,G__39097));

break;
case "compile-syntax-check":
var G__39098 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__39099 = cause_type;
var G__39100 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__39101 = loc;
var G__39102 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__39098,G__39099,G__39100,G__39101,G__39102) : format.call(null,G__39098,G__39099,G__39100,G__39101,G__39102));

break;
case "compilation":
var G__39103 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__39104 = cause_type;
var G__39105 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__39106 = loc;
var G__39107 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__39103,G__39104,G__39105,G__39106,G__39107) : format.call(null,G__39103,G__39104,G__39105,G__39106,G__39107));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__39108 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__39109 = symbol;
var G__39110 = loc;
var G__39111 = (function (){var sb__4749__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__39112_39268 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__39113_39269 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__39114_39270 = true;
var _STAR_print_fn_STAR__temp_val__39115_39271 = (function (x__4750__auto__){
return sb__4749__auto__.append(x__4750__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__39114_39270);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__39115_39271);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__39067_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__39067_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__39113_39269);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__39112_39268);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4749__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__39108,G__39109,G__39110,G__39111) : format.call(null,G__39108,G__39109,G__39110,G__39111));
} else {
var G__39120 = "Execution error%s at %s(%s).\n%s\n";
var G__39121 = cause_type;
var G__39122 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__39123 = loc;
var G__39124 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__39120,G__39121,G__39122,G__39123,G__39124) : format.call(null,G__39120,G__39121,G__39122,G__39123,G__39124));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39082__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
