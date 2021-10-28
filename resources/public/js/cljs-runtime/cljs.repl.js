goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__37901){
var map__37902 = p__37901;
var map__37902__$1 = (((((!((map__37902 == null))))?(((((map__37902.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37902.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37902):map__37902);
var m = map__37902__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37902__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37902__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__37924_38284 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__37926_38285 = null;
var count__37927_38286 = (0);
var i__37928_38287 = (0);
while(true){
if((i__37928_38287 < count__37927_38286)){
var f_38290 = chunk__37926_38285.cljs$core$IIndexed$_nth$arity$2(null,i__37928_38287);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_38290], 0));


var G__38291 = seq__37924_38284;
var G__38292 = chunk__37926_38285;
var G__38293 = count__37927_38286;
var G__38294 = (i__37928_38287 + (1));
seq__37924_38284 = G__38291;
chunk__37926_38285 = G__38292;
count__37927_38286 = G__38293;
i__37928_38287 = G__38294;
continue;
} else {
var temp__5735__auto___38295 = cljs.core.seq(seq__37924_38284);
if(temp__5735__auto___38295){
var seq__37924_38296__$1 = temp__5735__auto___38295;
if(cljs.core.chunked_seq_QMARK_(seq__37924_38296__$1)){
var c__4556__auto___38297 = cljs.core.chunk_first(seq__37924_38296__$1);
var G__38298 = cljs.core.chunk_rest(seq__37924_38296__$1);
var G__38299 = c__4556__auto___38297;
var G__38300 = cljs.core.count(c__4556__auto___38297);
var G__38301 = (0);
seq__37924_38284 = G__38298;
chunk__37926_38285 = G__38299;
count__37927_38286 = G__38300;
i__37928_38287 = G__38301;
continue;
} else {
var f_38302 = cljs.core.first(seq__37924_38296__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_38302], 0));


var G__38303 = cljs.core.next(seq__37924_38296__$1);
var G__38304 = null;
var G__38305 = (0);
var G__38306 = (0);
seq__37924_38284 = G__38303;
chunk__37926_38285 = G__38304;
count__37927_38286 = G__38305;
i__37928_38287 = G__38306;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_38309 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_38309], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_38309)))?cljs.core.second(arglists_38309):arglists_38309)], 0));
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
var seq__37963_38311 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__37964_38312 = null;
var count__37966_38313 = (0);
var i__37967_38314 = (0);
while(true){
if((i__37967_38314 < count__37966_38313)){
var vec__37987_38315 = chunk__37964_38312.cljs$core$IIndexed$_nth$arity$2(null,i__37967_38314);
var name_38316 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37987_38315,(0),null);
var map__37990_38317 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37987_38315,(1),null);
var map__37990_38318__$1 = (((((!((map__37990_38317 == null))))?(((((map__37990_38317.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37990_38317.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37990_38317):map__37990_38317);
var doc_38319 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37990_38318__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_38320 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37990_38318__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_38316], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_38320], 0));

if(cljs.core.truth_(doc_38319)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_38319], 0));
} else {
}


var G__38322 = seq__37963_38311;
var G__38323 = chunk__37964_38312;
var G__38324 = count__37966_38313;
var G__38325 = (i__37967_38314 + (1));
seq__37963_38311 = G__38322;
chunk__37964_38312 = G__38323;
count__37966_38313 = G__38324;
i__37967_38314 = G__38325;
continue;
} else {
var temp__5735__auto___38326 = cljs.core.seq(seq__37963_38311);
if(temp__5735__auto___38326){
var seq__37963_38327__$1 = temp__5735__auto___38326;
if(cljs.core.chunked_seq_QMARK_(seq__37963_38327__$1)){
var c__4556__auto___38328 = cljs.core.chunk_first(seq__37963_38327__$1);
var G__38329 = cljs.core.chunk_rest(seq__37963_38327__$1);
var G__38330 = c__4556__auto___38328;
var G__38331 = cljs.core.count(c__4556__auto___38328);
var G__38332 = (0);
seq__37963_38311 = G__38329;
chunk__37964_38312 = G__38330;
count__37966_38313 = G__38331;
i__37967_38314 = G__38332;
continue;
} else {
var vec__37996_38333 = cljs.core.first(seq__37963_38327__$1);
var name_38334 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37996_38333,(0),null);
var map__37999_38335 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37996_38333,(1),null);
var map__37999_38336__$1 = (((((!((map__37999_38335 == null))))?(((((map__37999_38335.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37999_38335.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37999_38335):map__37999_38335);
var doc_38337 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37999_38336__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_38338 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37999_38336__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_38334], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_38338], 0));

if(cljs.core.truth_(doc_38337)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_38337], 0));
} else {
}


var G__38340 = cljs.core.next(seq__37963_38327__$1);
var G__38341 = null;
var G__38342 = (0);
var G__38343 = (0);
seq__37963_38311 = G__38340;
chunk__37964_38312 = G__38341;
count__37966_38313 = G__38342;
i__37967_38314 = G__38343;
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

var seq__38008 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__38009 = null;
var count__38010 = (0);
var i__38011 = (0);
while(true){
if((i__38011 < count__38010)){
var role = chunk__38009.cljs$core$IIndexed$_nth$arity$2(null,i__38011);
var temp__5735__auto___38345__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___38345__$1)){
var spec_38346 = temp__5735__auto___38345__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_38346)], 0));
} else {
}


var G__38347 = seq__38008;
var G__38348 = chunk__38009;
var G__38349 = count__38010;
var G__38350 = (i__38011 + (1));
seq__38008 = G__38347;
chunk__38009 = G__38348;
count__38010 = G__38349;
i__38011 = G__38350;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__38008);
if(temp__5735__auto____$1){
var seq__38008__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__38008__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__38008__$1);
var G__38352 = cljs.core.chunk_rest(seq__38008__$1);
var G__38353 = c__4556__auto__;
var G__38354 = cljs.core.count(c__4556__auto__);
var G__38355 = (0);
seq__38008 = G__38352;
chunk__38009 = G__38353;
count__38010 = G__38354;
i__38011 = G__38355;
continue;
} else {
var role = cljs.core.first(seq__38008__$1);
var temp__5735__auto___38356__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___38356__$2)){
var spec_38357 = temp__5735__auto___38356__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_38357)], 0));
} else {
}


var G__38358 = cljs.core.next(seq__38008__$1);
var G__38359 = null;
var G__38360 = (0);
var G__38361 = (0);
seq__38008 = G__38358;
chunk__38009 = G__38359;
count__38010 = G__38360;
i__38011 = G__38361;
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
var G__38362 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__38363 = cljs.core.ex_cause(t);
via = G__38362;
t = G__38363;
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
var map__38055 = datafied_throwable;
var map__38055__$1 = (((((!((map__38055 == null))))?(((((map__38055.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38055.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38055):map__38055);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38055__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38055__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__38055__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__38057 = cljs.core.last(via);
var map__38057__$1 = (((((!((map__38057 == null))))?(((((map__38057.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38057.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38057):map__38057);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38057__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38057__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38057__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__38058 = data;
var map__38058__$1 = (((((!((map__38058 == null))))?(((((map__38058.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38058.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38058):map__38058);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38058__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38058__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38058__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__38059 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__38059__$1 = (((((!((map__38059 == null))))?(((((map__38059.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38059.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38059):map__38059);
var top_data = map__38059__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38059__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__38066 = phase;
var G__38066__$1 = (((G__38066 instanceof cljs.core.Keyword))?G__38066.fqn:null);
switch (G__38066__$1) {
case "read-source":
var map__38075 = data;
var map__38075__$1 = (((((!((map__38075 == null))))?(((((map__38075.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38075.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38075):map__38075);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38075__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38075__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__38080 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__38080__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38080,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__38080);
var G__38080__$2 = (cljs.core.truth_((function (){var fexpr__38082 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__38082.cljs$core$IFn$_invoke$arity$1 ? fexpr__38082.cljs$core$IFn$_invoke$arity$1(source) : fexpr__38082.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__38080__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__38080__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38080__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__38080__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__38083 = top_data;
var G__38083__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38083,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__38083);
var G__38083__$2 = (cljs.core.truth_((function (){var fexpr__38084 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__38084.cljs$core$IFn$_invoke$arity$1 ? fexpr__38084.cljs$core$IFn$_invoke$arity$1(source) : fexpr__38084.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__38083__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__38083__$1);
var G__38083__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38083__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__38083__$2);
var G__38083__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38083__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__38083__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38083__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__38083__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__38086 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38086,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38086,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38086,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38086,(3),null);
var G__38089 = top_data;
var G__38089__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38089,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__38089);
var G__38089__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38089__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__38089__$1);
var G__38089__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38089__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__38089__$2);
var G__38089__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38089__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__38089__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38089__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__38089__$4;
}

break;
case "execution":
var vec__38095 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38095,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38095,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38095,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38095,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__38043_SHARP_){
var or__4126__auto__ = (p1__38043_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var fexpr__38108 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__38108.cljs$core$IFn$_invoke$arity$1 ? fexpr__38108.cljs$core$IFn$_invoke$arity$1(p1__38043_SHARP_) : fexpr__38108.call(null,p1__38043_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__38115 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__38115__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38115,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__38115);
var G__38115__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38115__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__38115__$1);
var G__38115__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38115__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__38115__$2);
var G__38115__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38115__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__38115__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38115__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__38115__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38066__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__38161){
var map__38163 = p__38161;
var map__38163__$1 = (((((!((map__38163 == null))))?(((((map__38163.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38163.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38163):map__38163);
var triage_data = map__38163__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38163__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38163__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38163__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38163__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38163__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38163__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38163__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38163__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__38211 = phase;
var G__38211__$1 = (((G__38211 instanceof cljs.core.Keyword))?G__38211.fqn:null);
switch (G__38211__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__38217 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__38218 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__38219 = loc;
var G__38220 = (cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__38222_38427 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__38223_38428 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__38224_38429 = true;
var _STAR_print_fn_STAR__temp_val__38225_38430 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__38224_38429);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__38225_38430);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__38147_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__38147_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__38223_38428);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__38222_38427);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__38217,G__38218,G__38219,G__38220) : format.call(null,G__38217,G__38218,G__38219,G__38220));

break;
case "macroexpansion":
var G__38243 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__38244 = cause_type;
var G__38245 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__38246 = loc;
var G__38247 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__38243,G__38244,G__38245,G__38246,G__38247) : format.call(null,G__38243,G__38244,G__38245,G__38246,G__38247));

break;
case "compile-syntax-check":
var G__38250 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__38251 = cause_type;
var G__38252 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__38253 = loc;
var G__38254 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__38250,G__38251,G__38252,G__38253,G__38254) : format.call(null,G__38250,G__38251,G__38252,G__38253,G__38254));

break;
case "compilation":
var G__38255 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__38256 = cause_type;
var G__38257 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__38258 = loc;
var G__38259 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__38255,G__38256,G__38257,G__38258,G__38259) : format.call(null,G__38255,G__38256,G__38257,G__38258,G__38259));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__38260 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__38261 = symbol;
var G__38262 = loc;
var G__38263 = (function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__38265_38433 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__38266_38434 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__38267_38435 = true;
var _STAR_print_fn_STAR__temp_val__38268_38436 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__38267_38435);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__38268_38436);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__38151_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__38151_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__38266_38434);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__38265_38433);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__38260,G__38261,G__38262,G__38263) : format.call(null,G__38260,G__38261,G__38262,G__38263));
} else {
var G__38275 = "Execution error%s at %s(%s).\n%s\n";
var G__38276 = cause_type;
var G__38277 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__38278 = loc;
var G__38279 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__38275,G__38276,G__38277,G__38278,G__38279) : format.call(null,G__38275,G__38276,G__38277,G__38278,G__38279));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38211__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
