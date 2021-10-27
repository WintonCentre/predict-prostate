goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___40563 = arguments.length;
var i__4737__auto___40566 = (0);
while(true){
if((i__4737__auto___40566 < len__4736__auto___40563)){
args__4742__auto__.push((arguments[i__4737__auto___40566]));

var G__40571 = (i__4737__auto___40566 + (1));
i__4737__auto___40566 = G__40571;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq40366){
var G__40367 = cljs.core.first(seq40366);
var seq40366__$1 = cljs.core.next(seq40366);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40367,seq40366__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__40369 = cljs.core.seq(sources);
var chunk__40370 = null;
var count__40371 = (0);
var i__40372 = (0);
while(true){
if((i__40372 < count__40371)){
var map__40385 = chunk__40370.cljs$core$IIndexed$_nth$arity$2(null,i__40372);
var map__40385__$1 = (((((!((map__40385 == null))))?(((((map__40385.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40385.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40385):map__40385);
var src = map__40385__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40385__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40385__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40385__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40385__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e40390){var e_40577 = e40390;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_40577);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_40577.message)].join('')));
}

var G__40578 = seq__40369;
var G__40579 = chunk__40370;
var G__40580 = count__40371;
var G__40581 = (i__40372 + (1));
seq__40369 = G__40578;
chunk__40370 = G__40579;
count__40371 = G__40580;
i__40372 = G__40581;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__40369);
if(temp__5735__auto__){
var seq__40369__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40369__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__40369__$1);
var G__40582 = cljs.core.chunk_rest(seq__40369__$1);
var G__40583 = c__4556__auto__;
var G__40584 = cljs.core.count(c__4556__auto__);
var G__40585 = (0);
seq__40369 = G__40582;
chunk__40370 = G__40583;
count__40371 = G__40584;
i__40372 = G__40585;
continue;
} else {
var map__40391 = cljs.core.first(seq__40369__$1);
var map__40391__$1 = (((((!((map__40391 == null))))?(((((map__40391.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40391.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40391):map__40391);
var src = map__40391__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40391__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40391__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40391__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40391__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e40394){var e_40588 = e40394;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_40588);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_40588.message)].join('')));
}

var G__40589 = cljs.core.next(seq__40369__$1);
var G__40590 = null;
var G__40591 = (0);
var G__40592 = (0);
seq__40369 = G__40589;
chunk__40370 = G__40590;
count__40371 = G__40591;
i__40372 = G__40592;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__40398 = cljs.core.seq(js_requires);
var chunk__40399 = null;
var count__40400 = (0);
var i__40401 = (0);
while(true){
if((i__40401 < count__40400)){
var js_ns = chunk__40399.cljs$core$IIndexed$_nth$arity$2(null,i__40401);
var require_str_40595 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_40595);


var G__40596 = seq__40398;
var G__40597 = chunk__40399;
var G__40598 = count__40400;
var G__40599 = (i__40401 + (1));
seq__40398 = G__40596;
chunk__40399 = G__40597;
count__40400 = G__40598;
i__40401 = G__40599;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__40398);
if(temp__5735__auto__){
var seq__40398__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40398__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__40398__$1);
var G__40600 = cljs.core.chunk_rest(seq__40398__$1);
var G__40601 = c__4556__auto__;
var G__40602 = cljs.core.count(c__4556__auto__);
var G__40603 = (0);
seq__40398 = G__40600;
chunk__40399 = G__40601;
count__40400 = G__40602;
i__40401 = G__40603;
continue;
} else {
var js_ns = cljs.core.first(seq__40398__$1);
var require_str_40604 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_40604);


var G__40605 = cljs.core.next(seq__40398__$1);
var G__40606 = null;
var G__40607 = (0);
var G__40608 = (0);
seq__40398 = G__40605;
chunk__40399 = G__40606;
count__40400 = G__40607;
i__40401 = G__40608;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__40403){
var map__40404 = p__40403;
var map__40404__$1 = (((((!((map__40404 == null))))?(((((map__40404.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40404.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40404):map__40404);
var msg = map__40404__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40404__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40404__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__40406(s__40407){
return (new cljs.core.LazySeq(null,(function (){
var s__40407__$1 = s__40407;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__40407__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__40412 = cljs.core.first(xs__6292__auto__);
var map__40412__$1 = (((((!((map__40412 == null))))?(((((map__40412.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40412.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40412):map__40412);
var src = map__40412__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40412__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40412__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4525__auto__ = ((function (s__40407__$1,map__40412,map__40412__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__40404,map__40404__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__40406_$_iter__40408(s__40409){
return (new cljs.core.LazySeq(null,((function (s__40407__$1,map__40412,map__40412__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__40404,map__40404__$1,msg,info,reload_info){
return (function (){
var s__40409__$1 = s__40409;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__40409__$1);
if(temp__5735__auto____$1){
var s__40409__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__40409__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__40409__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__40411 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__40410 = (0);
while(true){
if((i__40410 < size__4528__auto__)){
var warning = cljs.core._nth(c__4527__auto__,i__40410);
cljs.core.chunk_append(b__40411,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__40614 = (i__40410 + (1));
i__40410 = G__40614;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__40411),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__40406_$_iter__40408(cljs.core.chunk_rest(s__40409__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__40411),null);
}
} else {
var warning = cljs.core.first(s__40409__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__40406_$_iter__40408(cljs.core.rest(s__40409__$2)));
}
} else {
return null;
}
break;
}
});})(s__40407__$1,map__40412,map__40412__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__40404,map__40404__$1,msg,info,reload_info))
,null,null));
});})(s__40407__$1,map__40412,map__40412__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__40404,map__40404__$1,msg,info,reload_info))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(warnings));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__40406(cljs.core.rest(s__40407__$1)));
} else {
var G__40618 = cljs.core.rest(s__40407__$1);
s__40407__$1 = G__40618;
continue;
}
} else {
var G__40619 = cljs.core.rest(s__40407__$1);
s__40407__$1 = G__40619;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__40415_40621 = cljs.core.seq(warnings);
var chunk__40416_40622 = null;
var count__40417_40623 = (0);
var i__40418_40624 = (0);
while(true){
if((i__40418_40624 < count__40417_40623)){
var map__40423_40625 = chunk__40416_40622.cljs$core$IIndexed$_nth$arity$2(null,i__40418_40624);
var map__40423_40626__$1 = (((((!((map__40423_40625 == null))))?(((((map__40423_40625.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40423_40625.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40423_40625):map__40423_40625);
var w_40627 = map__40423_40626__$1;
var msg_40628__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40423_40626__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_40629 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40423_40626__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_40630 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40423_40626__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_40631 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40423_40626__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_40631)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_40629),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_40630),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_40628__$1)].join(''));


var G__40635 = seq__40415_40621;
var G__40636 = chunk__40416_40622;
var G__40637 = count__40417_40623;
var G__40638 = (i__40418_40624 + (1));
seq__40415_40621 = G__40635;
chunk__40416_40622 = G__40636;
count__40417_40623 = G__40637;
i__40418_40624 = G__40638;
continue;
} else {
var temp__5735__auto___40639 = cljs.core.seq(seq__40415_40621);
if(temp__5735__auto___40639){
var seq__40415_40640__$1 = temp__5735__auto___40639;
if(cljs.core.chunked_seq_QMARK_(seq__40415_40640__$1)){
var c__4556__auto___40641 = cljs.core.chunk_first(seq__40415_40640__$1);
var G__40642 = cljs.core.chunk_rest(seq__40415_40640__$1);
var G__40643 = c__4556__auto___40641;
var G__40644 = cljs.core.count(c__4556__auto___40641);
var G__40645 = (0);
seq__40415_40621 = G__40642;
chunk__40416_40622 = G__40643;
count__40417_40623 = G__40644;
i__40418_40624 = G__40645;
continue;
} else {
var map__40426_40647 = cljs.core.first(seq__40415_40640__$1);
var map__40426_40648__$1 = (((((!((map__40426_40647 == null))))?(((((map__40426_40647.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40426_40647.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40426_40647):map__40426_40647);
var w_40649 = map__40426_40648__$1;
var msg_40650__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40426_40648__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_40651 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40426_40648__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_40652 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40426_40648__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_40653 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40426_40648__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_40653)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_40651),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_40652),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_40650__$1)].join(''));


var G__40660 = cljs.core.next(seq__40415_40640__$1);
var G__40661 = null;
var G__40662 = (0);
var G__40663 = (0);
seq__40415_40621 = G__40660;
chunk__40416_40622 = G__40661;
count__40417_40623 = G__40662;
i__40418_40624 = G__40663;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__40402_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__40402_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$)){
return new$;
} else {
return false;
}
} else {
return false;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__40442){
var map__40443 = p__40442;
var map__40443__$1 = (((((!((map__40443 == null))))?(((((map__40443.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40443.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40443):map__40443);
var msg = map__40443__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40443__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__40445 = cljs.core.seq(updates);
var chunk__40447 = null;
var count__40448 = (0);
var i__40449 = (0);
while(true){
if((i__40449 < count__40448)){
var path = chunk__40447.cljs$core$IIndexed$_nth$arity$2(null,i__40449);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__40483_40692 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__40487_40693 = null;
var count__40488_40694 = (0);
var i__40489_40695 = (0);
while(true){
if((i__40489_40695 < count__40488_40694)){
var node_40698 = chunk__40487_40693.cljs$core$IIndexed$_nth$arity$2(null,i__40489_40695);
if(cljs.core.not(node_40698.shadow$old)){
var path_match_40701 = shadow.cljs.devtools.client.browser.match_paths(node_40698.getAttribute("href"),path);
if(cljs.core.truth_(path_match_40701)){
var new_link_40703 = (function (){var G__40495 = node_40698.cloneNode(true);
G__40495.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_40701),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__40495;
})();
(node_40698.shadow$old = true);

(new_link_40703.onload = ((function (seq__40483_40692,chunk__40487_40693,count__40488_40694,i__40489_40695,seq__40445,chunk__40447,count__40448,i__40449,new_link_40703,path_match_40701,node_40698,path,map__40443,map__40443__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_40698);
});})(seq__40483_40692,chunk__40487_40693,count__40488_40694,i__40489_40695,seq__40445,chunk__40447,count__40448,i__40449,new_link_40703,path_match_40701,node_40698,path,map__40443,map__40443__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_40701], 0));

goog.dom.insertSiblingAfter(new_link_40703,node_40698);


var G__40714 = seq__40483_40692;
var G__40715 = chunk__40487_40693;
var G__40716 = count__40488_40694;
var G__40717 = (i__40489_40695 + (1));
seq__40483_40692 = G__40714;
chunk__40487_40693 = G__40715;
count__40488_40694 = G__40716;
i__40489_40695 = G__40717;
continue;
} else {
var G__40720 = seq__40483_40692;
var G__40721 = chunk__40487_40693;
var G__40722 = count__40488_40694;
var G__40723 = (i__40489_40695 + (1));
seq__40483_40692 = G__40720;
chunk__40487_40693 = G__40721;
count__40488_40694 = G__40722;
i__40489_40695 = G__40723;
continue;
}
} else {
var G__40724 = seq__40483_40692;
var G__40725 = chunk__40487_40693;
var G__40726 = count__40488_40694;
var G__40727 = (i__40489_40695 + (1));
seq__40483_40692 = G__40724;
chunk__40487_40693 = G__40725;
count__40488_40694 = G__40726;
i__40489_40695 = G__40727;
continue;
}
} else {
var temp__5735__auto___40728 = cljs.core.seq(seq__40483_40692);
if(temp__5735__auto___40728){
var seq__40483_40729__$1 = temp__5735__auto___40728;
if(cljs.core.chunked_seq_QMARK_(seq__40483_40729__$1)){
var c__4556__auto___40730 = cljs.core.chunk_first(seq__40483_40729__$1);
var G__40731 = cljs.core.chunk_rest(seq__40483_40729__$1);
var G__40732 = c__4556__auto___40730;
var G__40733 = cljs.core.count(c__4556__auto___40730);
var G__40734 = (0);
seq__40483_40692 = G__40731;
chunk__40487_40693 = G__40732;
count__40488_40694 = G__40733;
i__40489_40695 = G__40734;
continue;
} else {
var node_40736 = cljs.core.first(seq__40483_40729__$1);
if(cljs.core.not(node_40736.shadow$old)){
var path_match_40737 = shadow.cljs.devtools.client.browser.match_paths(node_40736.getAttribute("href"),path);
if(cljs.core.truth_(path_match_40737)){
var new_link_40740 = (function (){var G__40496 = node_40736.cloneNode(true);
G__40496.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_40737),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__40496;
})();
(node_40736.shadow$old = true);

(new_link_40740.onload = ((function (seq__40483_40692,chunk__40487_40693,count__40488_40694,i__40489_40695,seq__40445,chunk__40447,count__40448,i__40449,new_link_40740,path_match_40737,node_40736,seq__40483_40729__$1,temp__5735__auto___40728,path,map__40443,map__40443__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_40736);
});})(seq__40483_40692,chunk__40487_40693,count__40488_40694,i__40489_40695,seq__40445,chunk__40447,count__40448,i__40449,new_link_40740,path_match_40737,node_40736,seq__40483_40729__$1,temp__5735__auto___40728,path,map__40443,map__40443__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_40737], 0));

goog.dom.insertSiblingAfter(new_link_40740,node_40736);


var G__40743 = cljs.core.next(seq__40483_40729__$1);
var G__40744 = null;
var G__40745 = (0);
var G__40746 = (0);
seq__40483_40692 = G__40743;
chunk__40487_40693 = G__40744;
count__40488_40694 = G__40745;
i__40489_40695 = G__40746;
continue;
} else {
var G__40749 = cljs.core.next(seq__40483_40729__$1);
var G__40750 = null;
var G__40751 = (0);
var G__40752 = (0);
seq__40483_40692 = G__40749;
chunk__40487_40693 = G__40750;
count__40488_40694 = G__40751;
i__40489_40695 = G__40752;
continue;
}
} else {
var G__40753 = cljs.core.next(seq__40483_40729__$1);
var G__40754 = null;
var G__40755 = (0);
var G__40756 = (0);
seq__40483_40692 = G__40753;
chunk__40487_40693 = G__40754;
count__40488_40694 = G__40755;
i__40489_40695 = G__40756;
continue;
}
}
} else {
}
}
break;
}


var G__40758 = seq__40445;
var G__40759 = chunk__40447;
var G__40760 = count__40448;
var G__40761 = (i__40449 + (1));
seq__40445 = G__40758;
chunk__40447 = G__40759;
count__40448 = G__40760;
i__40449 = G__40761;
continue;
} else {
var G__40762 = seq__40445;
var G__40763 = chunk__40447;
var G__40764 = count__40448;
var G__40765 = (i__40449 + (1));
seq__40445 = G__40762;
chunk__40447 = G__40763;
count__40448 = G__40764;
i__40449 = G__40765;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__40445);
if(temp__5735__auto__){
var seq__40445__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40445__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__40445__$1);
var G__40769 = cljs.core.chunk_rest(seq__40445__$1);
var G__40770 = c__4556__auto__;
var G__40771 = cljs.core.count(c__4556__auto__);
var G__40772 = (0);
seq__40445 = G__40769;
chunk__40447 = G__40770;
count__40448 = G__40771;
i__40449 = G__40772;
continue;
} else {
var path = cljs.core.first(seq__40445__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__40498_40773 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__40502_40774 = null;
var count__40503_40775 = (0);
var i__40504_40776 = (0);
while(true){
if((i__40504_40776 < count__40503_40775)){
var node_40779 = chunk__40502_40774.cljs$core$IIndexed$_nth$arity$2(null,i__40504_40776);
if(cljs.core.not(node_40779.shadow$old)){
var path_match_40780 = shadow.cljs.devtools.client.browser.match_paths(node_40779.getAttribute("href"),path);
if(cljs.core.truth_(path_match_40780)){
var new_link_40782 = (function (){var G__40513 = node_40779.cloneNode(true);
G__40513.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_40780),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__40513;
})();
(node_40779.shadow$old = true);

(new_link_40782.onload = ((function (seq__40498_40773,chunk__40502_40774,count__40503_40775,i__40504_40776,seq__40445,chunk__40447,count__40448,i__40449,new_link_40782,path_match_40780,node_40779,path,seq__40445__$1,temp__5735__auto__,map__40443,map__40443__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_40779);
});})(seq__40498_40773,chunk__40502_40774,count__40503_40775,i__40504_40776,seq__40445,chunk__40447,count__40448,i__40449,new_link_40782,path_match_40780,node_40779,path,seq__40445__$1,temp__5735__auto__,map__40443,map__40443__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_40780], 0));

goog.dom.insertSiblingAfter(new_link_40782,node_40779);


var G__40783 = seq__40498_40773;
var G__40784 = chunk__40502_40774;
var G__40785 = count__40503_40775;
var G__40786 = (i__40504_40776 + (1));
seq__40498_40773 = G__40783;
chunk__40502_40774 = G__40784;
count__40503_40775 = G__40785;
i__40504_40776 = G__40786;
continue;
} else {
var G__40787 = seq__40498_40773;
var G__40788 = chunk__40502_40774;
var G__40789 = count__40503_40775;
var G__40790 = (i__40504_40776 + (1));
seq__40498_40773 = G__40787;
chunk__40502_40774 = G__40788;
count__40503_40775 = G__40789;
i__40504_40776 = G__40790;
continue;
}
} else {
var G__40791 = seq__40498_40773;
var G__40792 = chunk__40502_40774;
var G__40793 = count__40503_40775;
var G__40794 = (i__40504_40776 + (1));
seq__40498_40773 = G__40791;
chunk__40502_40774 = G__40792;
count__40503_40775 = G__40793;
i__40504_40776 = G__40794;
continue;
}
} else {
var temp__5735__auto___40795__$1 = cljs.core.seq(seq__40498_40773);
if(temp__5735__auto___40795__$1){
var seq__40498_40796__$1 = temp__5735__auto___40795__$1;
if(cljs.core.chunked_seq_QMARK_(seq__40498_40796__$1)){
var c__4556__auto___40797 = cljs.core.chunk_first(seq__40498_40796__$1);
var G__40798 = cljs.core.chunk_rest(seq__40498_40796__$1);
var G__40799 = c__4556__auto___40797;
var G__40800 = cljs.core.count(c__4556__auto___40797);
var G__40801 = (0);
seq__40498_40773 = G__40798;
chunk__40502_40774 = G__40799;
count__40503_40775 = G__40800;
i__40504_40776 = G__40801;
continue;
} else {
var node_40802 = cljs.core.first(seq__40498_40796__$1);
if(cljs.core.not(node_40802.shadow$old)){
var path_match_40803 = shadow.cljs.devtools.client.browser.match_paths(node_40802.getAttribute("href"),path);
if(cljs.core.truth_(path_match_40803)){
var new_link_40804 = (function (){var G__40515 = node_40802.cloneNode(true);
G__40515.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_40803),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__40515;
})();
(node_40802.shadow$old = true);

(new_link_40804.onload = ((function (seq__40498_40773,chunk__40502_40774,count__40503_40775,i__40504_40776,seq__40445,chunk__40447,count__40448,i__40449,new_link_40804,path_match_40803,node_40802,seq__40498_40796__$1,temp__5735__auto___40795__$1,path,seq__40445__$1,temp__5735__auto__,map__40443,map__40443__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_40802);
});})(seq__40498_40773,chunk__40502_40774,count__40503_40775,i__40504_40776,seq__40445,chunk__40447,count__40448,i__40449,new_link_40804,path_match_40803,node_40802,seq__40498_40796__$1,temp__5735__auto___40795__$1,path,seq__40445__$1,temp__5735__auto__,map__40443,map__40443__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_40803], 0));

goog.dom.insertSiblingAfter(new_link_40804,node_40802);


var G__40805 = cljs.core.next(seq__40498_40796__$1);
var G__40806 = null;
var G__40807 = (0);
var G__40808 = (0);
seq__40498_40773 = G__40805;
chunk__40502_40774 = G__40806;
count__40503_40775 = G__40807;
i__40504_40776 = G__40808;
continue;
} else {
var G__40809 = cljs.core.next(seq__40498_40796__$1);
var G__40810 = null;
var G__40811 = (0);
var G__40812 = (0);
seq__40498_40773 = G__40809;
chunk__40502_40774 = G__40810;
count__40503_40775 = G__40811;
i__40504_40776 = G__40812;
continue;
}
} else {
var G__40813 = cljs.core.next(seq__40498_40796__$1);
var G__40814 = null;
var G__40815 = (0);
var G__40816 = (0);
seq__40498_40773 = G__40813;
chunk__40502_40774 = G__40814;
count__40503_40775 = G__40815;
i__40504_40776 = G__40816;
continue;
}
}
} else {
}
}
break;
}


var G__40817 = cljs.core.next(seq__40445__$1);
var G__40818 = null;
var G__40819 = (0);
var G__40820 = (0);
seq__40445 = G__40817;
chunk__40447 = G__40818;
count__40448 = G__40819;
i__40449 = G__40820;
continue;
} else {
var G__40821 = cljs.core.next(seq__40445__$1);
var G__40822 = null;
var G__40823 = (0);
var G__40824 = (0);
seq__40445 = G__40821;
chunk__40447 = G__40822;
count__40448 = G__40823;
i__40449 = G__40824;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__40517){
var map__40518 = p__40517;
var map__40518__$1 = (((((!((map__40518 == null))))?(((((map__40518.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40518.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40518):map__40518);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40518__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__40520){
var map__40521 = p__40520;
var map__40521__$1 = (((((!((map__40521 == null))))?(((((map__40521.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40521.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40521):map__40521);
var _ = map__40521__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40521__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__40525,done,error){
var map__40526 = p__40525;
var map__40526__$1 = (((((!((map__40526 == null))))?(((((map__40526.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40526.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40526):map__40526);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40526__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__40528,done,error){
var map__40529 = p__40528;
var map__40529__$1 = (((((!((map__40529 == null))))?(((((map__40529.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40529.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40529):map__40529);
var msg = map__40529__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40529__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40529__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40529__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__40531){
var map__40532 = p__40531;
var map__40532__$1 = (((((!((map__40532 == null))))?(((((map__40532.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40532.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40532):map__40532);
var src = map__40532__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40532__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4115__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4115__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__40536 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__40536) : done.call(null,G__40536));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__40538){
var map__40539 = p__40538;
var map__40539__$1 = (((((!((map__40539 == null))))?(((((map__40539.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40539.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40539):map__40539);
var msg__$1 = map__40539__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40539__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e40542){var ex = e40542;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__40543){
var map__40544 = p__40543;
var map__40544__$1 = (((((!((map__40544 == null))))?(((((map__40544.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40544.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40544):map__40544);
var env = map__40544__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40544__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__40546){
var map__40547 = p__40546;
var map__40547__$1 = (((((!((map__40547 == null))))?(((((map__40547.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40547.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40547):map__40547);
var msg = map__40547__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40547__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__40550){
var map__40551 = p__40550;
var map__40551__$1 = (((((!((map__40551 == null))))?(((((map__40551.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40551.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40551):map__40551);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40551__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40551__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__40555){
var map__40557 = p__40555;
var map__40557__$1 = (((((!((map__40557 == null))))?(((((map__40557.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40557.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40557):map__40557);
var svc = map__40557__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40557__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
