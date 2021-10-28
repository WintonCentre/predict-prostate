goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___40576 = arguments.length;
var i__4737__auto___40577 = (0);
while(true){
if((i__4737__auto___40577 < len__4736__auto___40576)){
args__4742__auto__.push((arguments[i__4737__auto___40577]));

var G__40578 = (i__4737__auto___40577 + (1));
i__4737__auto___40577 = G__40578;
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq40358){
var G__40359 = cljs.core.first(seq40358);
var seq40358__$1 = cljs.core.next(seq40358);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40359,seq40358__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__40362 = cljs.core.seq(sources);
var chunk__40363 = null;
var count__40364 = (0);
var i__40365 = (0);
while(true){
if((i__40365 < count__40364)){
var map__40373 = chunk__40363.cljs$core$IIndexed$_nth$arity$2(null,i__40365);
var map__40373__$1 = (((((!((map__40373 == null))))?(((((map__40373.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40373.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40373):map__40373);
var src = map__40373__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40373__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40373__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40373__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40373__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e40375){var e_40584 = e40375;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_40584);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_40584.message)].join('')));
}

var G__40587 = seq__40362;
var G__40588 = chunk__40363;
var G__40589 = count__40364;
var G__40590 = (i__40365 + (1));
seq__40362 = G__40587;
chunk__40363 = G__40588;
count__40364 = G__40589;
i__40365 = G__40590;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__40362);
if(temp__5735__auto__){
var seq__40362__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40362__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__40362__$1);
var G__40592 = cljs.core.chunk_rest(seq__40362__$1);
var G__40593 = c__4556__auto__;
var G__40594 = cljs.core.count(c__4556__auto__);
var G__40595 = (0);
seq__40362 = G__40592;
chunk__40363 = G__40593;
count__40364 = G__40594;
i__40365 = G__40595;
continue;
} else {
var map__40376 = cljs.core.first(seq__40362__$1);
var map__40376__$1 = (((((!((map__40376 == null))))?(((((map__40376.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40376.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40376):map__40376);
var src = map__40376__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40376__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40376__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40376__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40376__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e40379){var e_40599 = e40379;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_40599);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_40599.message)].join('')));
}

var G__40600 = cljs.core.next(seq__40362__$1);
var G__40601 = null;
var G__40602 = (0);
var G__40603 = (0);
seq__40362 = G__40600;
chunk__40363 = G__40601;
count__40364 = G__40602;
i__40365 = G__40603;
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
var seq__40380 = cljs.core.seq(js_requires);
var chunk__40381 = null;
var count__40382 = (0);
var i__40383 = (0);
while(true){
if((i__40383 < count__40382)){
var js_ns = chunk__40381.cljs$core$IIndexed$_nth$arity$2(null,i__40383);
var require_str_40609 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_40609);


var G__40610 = seq__40380;
var G__40611 = chunk__40381;
var G__40612 = count__40382;
var G__40613 = (i__40383 + (1));
seq__40380 = G__40610;
chunk__40381 = G__40611;
count__40382 = G__40612;
i__40383 = G__40613;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__40380);
if(temp__5735__auto__){
var seq__40380__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40380__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__40380__$1);
var G__40616 = cljs.core.chunk_rest(seq__40380__$1);
var G__40617 = c__4556__auto__;
var G__40618 = cljs.core.count(c__4556__auto__);
var G__40619 = (0);
seq__40380 = G__40616;
chunk__40381 = G__40617;
count__40382 = G__40618;
i__40383 = G__40619;
continue;
} else {
var js_ns = cljs.core.first(seq__40380__$1);
var require_str_40622 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_40622);


var G__40623 = cljs.core.next(seq__40380__$1);
var G__40624 = null;
var G__40625 = (0);
var G__40626 = (0);
seq__40380 = G__40623;
chunk__40381 = G__40624;
count__40382 = G__40625;
i__40383 = G__40626;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__40386){
var map__40387 = p__40386;
var map__40387__$1 = (((((!((map__40387 == null))))?(((((map__40387.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40387.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40387):map__40387);
var msg = map__40387__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40387__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40387__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__40390(s__40391){
return (new cljs.core.LazySeq(null,(function (){
var s__40391__$1 = s__40391;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__40391__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__40396 = cljs.core.first(xs__6292__auto__);
var map__40396__$1 = (((((!((map__40396 == null))))?(((((map__40396.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40396.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40396):map__40396);
var src = map__40396__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40396__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40396__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4525__auto__ = ((function (s__40391__$1,map__40396,map__40396__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__40387,map__40387__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__40390_$_iter__40392(s__40393){
return (new cljs.core.LazySeq(null,((function (s__40391__$1,map__40396,map__40396__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__40387,map__40387__$1,msg,info,reload_info){
return (function (){
var s__40393__$1 = s__40393;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__40393__$1);
if(temp__5735__auto____$1){
var s__40393__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__40393__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__40393__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__40395 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__40394 = (0);
while(true){
if((i__40394 < size__4528__auto__)){
var warning = cljs.core._nth(c__4527__auto__,i__40394);
cljs.core.chunk_append(b__40395,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__40639 = (i__40394 + (1));
i__40394 = G__40639;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__40395),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__40390_$_iter__40392(cljs.core.chunk_rest(s__40393__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__40395),null);
}
} else {
var warning = cljs.core.first(s__40393__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__40390_$_iter__40392(cljs.core.rest(s__40393__$2)));
}
} else {
return null;
}
break;
}
});})(s__40391__$1,map__40396,map__40396__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__40387,map__40387__$1,msg,info,reload_info))
,null,null));
});})(s__40391__$1,map__40396,map__40396__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__40387,map__40387__$1,msg,info,reload_info))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(warnings));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__40390(cljs.core.rest(s__40391__$1)));
} else {
var G__40643 = cljs.core.rest(s__40391__$1);
s__40391__$1 = G__40643;
continue;
}
} else {
var G__40644 = cljs.core.rest(s__40391__$1);
s__40391__$1 = G__40644;
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
var seq__40401_40645 = cljs.core.seq(warnings);
var chunk__40402_40646 = null;
var count__40403_40647 = (0);
var i__40404_40648 = (0);
while(true){
if((i__40404_40648 < count__40403_40647)){
var map__40409_40649 = chunk__40402_40646.cljs$core$IIndexed$_nth$arity$2(null,i__40404_40648);
var map__40409_40650__$1 = (((((!((map__40409_40649 == null))))?(((((map__40409_40649.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40409_40649.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40409_40649):map__40409_40649);
var w_40651 = map__40409_40650__$1;
var msg_40652__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40409_40650__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_40653 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40409_40650__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_40654 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40409_40650__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_40655 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40409_40650__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_40655)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_40653),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_40654),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_40652__$1)].join(''));


var G__40663 = seq__40401_40645;
var G__40664 = chunk__40402_40646;
var G__40665 = count__40403_40647;
var G__40666 = (i__40404_40648 + (1));
seq__40401_40645 = G__40663;
chunk__40402_40646 = G__40664;
count__40403_40647 = G__40665;
i__40404_40648 = G__40666;
continue;
} else {
var temp__5735__auto___40669 = cljs.core.seq(seq__40401_40645);
if(temp__5735__auto___40669){
var seq__40401_40671__$1 = temp__5735__auto___40669;
if(cljs.core.chunked_seq_QMARK_(seq__40401_40671__$1)){
var c__4556__auto___40673 = cljs.core.chunk_first(seq__40401_40671__$1);
var G__40674 = cljs.core.chunk_rest(seq__40401_40671__$1);
var G__40675 = c__4556__auto___40673;
var G__40676 = cljs.core.count(c__4556__auto___40673);
var G__40677 = (0);
seq__40401_40645 = G__40674;
chunk__40402_40646 = G__40675;
count__40403_40647 = G__40676;
i__40404_40648 = G__40677;
continue;
} else {
var map__40411_40680 = cljs.core.first(seq__40401_40671__$1);
var map__40411_40681__$1 = (((((!((map__40411_40680 == null))))?(((((map__40411_40680.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40411_40680.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40411_40680):map__40411_40680);
var w_40682 = map__40411_40681__$1;
var msg_40683__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40411_40681__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_40684 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40411_40681__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_40685 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40411_40681__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_40686 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40411_40681__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_40686)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_40684),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_40685),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_40683__$1)].join(''));


var G__40694 = cljs.core.next(seq__40401_40671__$1);
var G__40695 = null;
var G__40696 = (0);
var G__40697 = (0);
seq__40401_40645 = G__40694;
chunk__40402_40646 = G__40695;
count__40403_40647 = G__40696;
i__40404_40648 = G__40697;
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

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__40384_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__40384_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__40414){
var map__40415 = p__40414;
var map__40415__$1 = (((((!((map__40415 == null))))?(((((map__40415.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40415.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40415):map__40415);
var msg = map__40415__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40415__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__40417 = cljs.core.seq(updates);
var chunk__40419 = null;
var count__40420 = (0);
var i__40421 = (0);
while(true){
if((i__40421 < count__40420)){
var path = chunk__40419.cljs$core$IIndexed$_nth$arity$2(null,i__40421);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__40460_40706 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__40464_40707 = null;
var count__40465_40708 = (0);
var i__40466_40709 = (0);
while(true){
if((i__40466_40709 < count__40465_40708)){
var node_40710 = chunk__40464_40707.cljs$core$IIndexed$_nth$arity$2(null,i__40466_40709);
if(cljs.core.not(node_40710.shadow$old)){
var path_match_40711 = shadow.cljs.devtools.client.browser.match_paths(node_40710.getAttribute("href"),path);
if(cljs.core.truth_(path_match_40711)){
var new_link_40712 = (function (){var G__40473 = node_40710.cloneNode(true);
G__40473.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_40711),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__40473;
})();
(node_40710.shadow$old = true);

(new_link_40712.onload = ((function (seq__40460_40706,chunk__40464_40707,count__40465_40708,i__40466_40709,seq__40417,chunk__40419,count__40420,i__40421,new_link_40712,path_match_40711,node_40710,path,map__40415,map__40415__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_40710);
});})(seq__40460_40706,chunk__40464_40707,count__40465_40708,i__40466_40709,seq__40417,chunk__40419,count__40420,i__40421,new_link_40712,path_match_40711,node_40710,path,map__40415,map__40415__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_40711], 0));

goog.dom.insertSiblingAfter(new_link_40712,node_40710);


var G__40716 = seq__40460_40706;
var G__40717 = chunk__40464_40707;
var G__40718 = count__40465_40708;
var G__40719 = (i__40466_40709 + (1));
seq__40460_40706 = G__40716;
chunk__40464_40707 = G__40717;
count__40465_40708 = G__40718;
i__40466_40709 = G__40719;
continue;
} else {
var G__40720 = seq__40460_40706;
var G__40721 = chunk__40464_40707;
var G__40722 = count__40465_40708;
var G__40723 = (i__40466_40709 + (1));
seq__40460_40706 = G__40720;
chunk__40464_40707 = G__40721;
count__40465_40708 = G__40722;
i__40466_40709 = G__40723;
continue;
}
} else {
var G__40725 = seq__40460_40706;
var G__40726 = chunk__40464_40707;
var G__40727 = count__40465_40708;
var G__40728 = (i__40466_40709 + (1));
seq__40460_40706 = G__40725;
chunk__40464_40707 = G__40726;
count__40465_40708 = G__40727;
i__40466_40709 = G__40728;
continue;
}
} else {
var temp__5735__auto___40730 = cljs.core.seq(seq__40460_40706);
if(temp__5735__auto___40730){
var seq__40460_40731__$1 = temp__5735__auto___40730;
if(cljs.core.chunked_seq_QMARK_(seq__40460_40731__$1)){
var c__4556__auto___40732 = cljs.core.chunk_first(seq__40460_40731__$1);
var G__40733 = cljs.core.chunk_rest(seq__40460_40731__$1);
var G__40734 = c__4556__auto___40732;
var G__40735 = cljs.core.count(c__4556__auto___40732);
var G__40736 = (0);
seq__40460_40706 = G__40733;
chunk__40464_40707 = G__40734;
count__40465_40708 = G__40735;
i__40466_40709 = G__40736;
continue;
} else {
var node_40739 = cljs.core.first(seq__40460_40731__$1);
if(cljs.core.not(node_40739.shadow$old)){
var path_match_40740 = shadow.cljs.devtools.client.browser.match_paths(node_40739.getAttribute("href"),path);
if(cljs.core.truth_(path_match_40740)){
var new_link_40741 = (function (){var G__40474 = node_40739.cloneNode(true);
G__40474.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_40740),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__40474;
})();
(node_40739.shadow$old = true);

(new_link_40741.onload = ((function (seq__40460_40706,chunk__40464_40707,count__40465_40708,i__40466_40709,seq__40417,chunk__40419,count__40420,i__40421,new_link_40741,path_match_40740,node_40739,seq__40460_40731__$1,temp__5735__auto___40730,path,map__40415,map__40415__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_40739);
});})(seq__40460_40706,chunk__40464_40707,count__40465_40708,i__40466_40709,seq__40417,chunk__40419,count__40420,i__40421,new_link_40741,path_match_40740,node_40739,seq__40460_40731__$1,temp__5735__auto___40730,path,map__40415,map__40415__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_40740], 0));

goog.dom.insertSiblingAfter(new_link_40741,node_40739);


var G__40744 = cljs.core.next(seq__40460_40731__$1);
var G__40745 = null;
var G__40746 = (0);
var G__40747 = (0);
seq__40460_40706 = G__40744;
chunk__40464_40707 = G__40745;
count__40465_40708 = G__40746;
i__40466_40709 = G__40747;
continue;
} else {
var G__40750 = cljs.core.next(seq__40460_40731__$1);
var G__40751 = null;
var G__40752 = (0);
var G__40753 = (0);
seq__40460_40706 = G__40750;
chunk__40464_40707 = G__40751;
count__40465_40708 = G__40752;
i__40466_40709 = G__40753;
continue;
}
} else {
var G__40754 = cljs.core.next(seq__40460_40731__$1);
var G__40755 = null;
var G__40756 = (0);
var G__40757 = (0);
seq__40460_40706 = G__40754;
chunk__40464_40707 = G__40755;
count__40465_40708 = G__40756;
i__40466_40709 = G__40757;
continue;
}
}
} else {
}
}
break;
}


var G__40758 = seq__40417;
var G__40759 = chunk__40419;
var G__40760 = count__40420;
var G__40761 = (i__40421 + (1));
seq__40417 = G__40758;
chunk__40419 = G__40759;
count__40420 = G__40760;
i__40421 = G__40761;
continue;
} else {
var G__40762 = seq__40417;
var G__40763 = chunk__40419;
var G__40764 = count__40420;
var G__40765 = (i__40421 + (1));
seq__40417 = G__40762;
chunk__40419 = G__40763;
count__40420 = G__40764;
i__40421 = G__40765;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__40417);
if(temp__5735__auto__){
var seq__40417__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40417__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__40417__$1);
var G__40769 = cljs.core.chunk_rest(seq__40417__$1);
var G__40770 = c__4556__auto__;
var G__40771 = cljs.core.count(c__4556__auto__);
var G__40772 = (0);
seq__40417 = G__40769;
chunk__40419 = G__40770;
count__40420 = G__40771;
i__40421 = G__40772;
continue;
} else {
var path = cljs.core.first(seq__40417__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__40475_40773 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__40479_40774 = null;
var count__40480_40775 = (0);
var i__40481_40776 = (0);
while(true){
if((i__40481_40776 < count__40480_40775)){
var node_40777 = chunk__40479_40774.cljs$core$IIndexed$_nth$arity$2(null,i__40481_40776);
if(cljs.core.not(node_40777.shadow$old)){
var path_match_40778 = shadow.cljs.devtools.client.browser.match_paths(node_40777.getAttribute("href"),path);
if(cljs.core.truth_(path_match_40778)){
var new_link_40779 = (function (){var G__40494 = node_40777.cloneNode(true);
G__40494.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_40778),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__40494;
})();
(node_40777.shadow$old = true);

(new_link_40779.onload = ((function (seq__40475_40773,chunk__40479_40774,count__40480_40775,i__40481_40776,seq__40417,chunk__40419,count__40420,i__40421,new_link_40779,path_match_40778,node_40777,path,seq__40417__$1,temp__5735__auto__,map__40415,map__40415__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_40777);
});})(seq__40475_40773,chunk__40479_40774,count__40480_40775,i__40481_40776,seq__40417,chunk__40419,count__40420,i__40421,new_link_40779,path_match_40778,node_40777,path,seq__40417__$1,temp__5735__auto__,map__40415,map__40415__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_40778], 0));

goog.dom.insertSiblingAfter(new_link_40779,node_40777);


var G__40780 = seq__40475_40773;
var G__40781 = chunk__40479_40774;
var G__40782 = count__40480_40775;
var G__40783 = (i__40481_40776 + (1));
seq__40475_40773 = G__40780;
chunk__40479_40774 = G__40781;
count__40480_40775 = G__40782;
i__40481_40776 = G__40783;
continue;
} else {
var G__40784 = seq__40475_40773;
var G__40785 = chunk__40479_40774;
var G__40786 = count__40480_40775;
var G__40787 = (i__40481_40776 + (1));
seq__40475_40773 = G__40784;
chunk__40479_40774 = G__40785;
count__40480_40775 = G__40786;
i__40481_40776 = G__40787;
continue;
}
} else {
var G__40788 = seq__40475_40773;
var G__40789 = chunk__40479_40774;
var G__40790 = count__40480_40775;
var G__40791 = (i__40481_40776 + (1));
seq__40475_40773 = G__40788;
chunk__40479_40774 = G__40789;
count__40480_40775 = G__40790;
i__40481_40776 = G__40791;
continue;
}
} else {
var temp__5735__auto___40792__$1 = cljs.core.seq(seq__40475_40773);
if(temp__5735__auto___40792__$1){
var seq__40475_40793__$1 = temp__5735__auto___40792__$1;
if(cljs.core.chunked_seq_QMARK_(seq__40475_40793__$1)){
var c__4556__auto___40794 = cljs.core.chunk_first(seq__40475_40793__$1);
var G__40795 = cljs.core.chunk_rest(seq__40475_40793__$1);
var G__40796 = c__4556__auto___40794;
var G__40797 = cljs.core.count(c__4556__auto___40794);
var G__40798 = (0);
seq__40475_40773 = G__40795;
chunk__40479_40774 = G__40796;
count__40480_40775 = G__40797;
i__40481_40776 = G__40798;
continue;
} else {
var node_40799 = cljs.core.first(seq__40475_40793__$1);
if(cljs.core.not(node_40799.shadow$old)){
var path_match_40800 = shadow.cljs.devtools.client.browser.match_paths(node_40799.getAttribute("href"),path);
if(cljs.core.truth_(path_match_40800)){
var new_link_40801 = (function (){var G__40497 = node_40799.cloneNode(true);
G__40497.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_40800),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__40497;
})();
(node_40799.shadow$old = true);

(new_link_40801.onload = ((function (seq__40475_40773,chunk__40479_40774,count__40480_40775,i__40481_40776,seq__40417,chunk__40419,count__40420,i__40421,new_link_40801,path_match_40800,node_40799,seq__40475_40793__$1,temp__5735__auto___40792__$1,path,seq__40417__$1,temp__5735__auto__,map__40415,map__40415__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_40799);
});})(seq__40475_40773,chunk__40479_40774,count__40480_40775,i__40481_40776,seq__40417,chunk__40419,count__40420,i__40421,new_link_40801,path_match_40800,node_40799,seq__40475_40793__$1,temp__5735__auto___40792__$1,path,seq__40417__$1,temp__5735__auto__,map__40415,map__40415__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_40800], 0));

goog.dom.insertSiblingAfter(new_link_40801,node_40799);


var G__40802 = cljs.core.next(seq__40475_40793__$1);
var G__40803 = null;
var G__40804 = (0);
var G__40805 = (0);
seq__40475_40773 = G__40802;
chunk__40479_40774 = G__40803;
count__40480_40775 = G__40804;
i__40481_40776 = G__40805;
continue;
} else {
var G__40806 = cljs.core.next(seq__40475_40793__$1);
var G__40807 = null;
var G__40808 = (0);
var G__40809 = (0);
seq__40475_40773 = G__40806;
chunk__40479_40774 = G__40807;
count__40480_40775 = G__40808;
i__40481_40776 = G__40809;
continue;
}
} else {
var G__40810 = cljs.core.next(seq__40475_40793__$1);
var G__40811 = null;
var G__40812 = (0);
var G__40813 = (0);
seq__40475_40773 = G__40810;
chunk__40479_40774 = G__40811;
count__40480_40775 = G__40812;
i__40481_40776 = G__40813;
continue;
}
}
} else {
}
}
break;
}


var G__40814 = cljs.core.next(seq__40417__$1);
var G__40815 = null;
var G__40816 = (0);
var G__40817 = (0);
seq__40417 = G__40814;
chunk__40419 = G__40815;
count__40420 = G__40816;
i__40421 = G__40817;
continue;
} else {
var G__40818 = cljs.core.next(seq__40417__$1);
var G__40819 = null;
var G__40820 = (0);
var G__40821 = (0);
seq__40417 = G__40818;
chunk__40419 = G__40819;
count__40420 = G__40820;
i__40421 = G__40821;
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
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__40508){
var map__40509 = p__40508;
var map__40509__$1 = (((((!((map__40509 == null))))?(((((map__40509.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40509.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40509):map__40509);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40509__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
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

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__40521){
var map__40522 = p__40521;
var map__40522__$1 = (((((!((map__40522 == null))))?(((((map__40522.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40522.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40522):map__40522);
var _ = map__40522__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40522__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__40526,done,error){
var map__40527 = p__40526;
var map__40527__$1 = (((((!((map__40527 == null))))?(((((map__40527.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40527.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40527):map__40527);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40527__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__40533,done,error){
var map__40534 = p__40533;
var map__40534__$1 = (((((!((map__40534 == null))))?(((((map__40534.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40534.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40534):map__40534);
var msg = map__40534__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40534__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40534__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40534__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__40544){
var map__40549 = p__40544;
var map__40549__$1 = (((((!((map__40549 == null))))?(((((map__40549.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40549.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40549):map__40549);
var src = map__40549__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40549__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4115__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4115__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__40554 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__40554) : done.call(null,G__40554));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__40555){
var map__40558 = p__40555;
var map__40558__$1 = (((((!((map__40558 == null))))?(((((map__40558.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40558.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40558):map__40558);
var msg__$1 = map__40558__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40558__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e40562){var ex = e40562;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__40563){
var map__40564 = p__40563;
var map__40564__$1 = (((((!((map__40564 == null))))?(((((map__40564.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40564.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40564):map__40564);
var env = map__40564__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40564__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
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
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__40567){
var map__40568 = p__40567;
var map__40568__$1 = (((((!((map__40568 == null))))?(((((map__40568.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40568.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40568):map__40568);
var msg = map__40568__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40568__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
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
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__40570){
var map__40571 = p__40570;
var map__40571__$1 = (((((!((map__40571 == null))))?(((((map__40571.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40571.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40571):map__40571);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40571__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40571__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
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
}),(function (p__40573){
var map__40574 = p__40573;
var map__40574__$1 = (((((!((map__40574 == null))))?(((((map__40574.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40574.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40574):map__40574);
var svc = map__40574__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40574__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
