goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4824__auto__ = [];
var len__4818__auto___41286 = arguments.length;
var i__4819__auto___41288 = (0);
while(true){
if((i__4819__auto___41288 < len__4818__auto___41286)){
args__4824__auto__.push((arguments[i__4819__auto___41288]));

var G__41289 = (i__4819__auto___41288 + (1));
i__4819__auto___41288 = G__41289;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq41052){
var G__41054 = cljs.core.first(seq41052);
var seq41052__$1 = cljs.core.next(seq41052);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41054,seq41052__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__41071 = cljs.core.seq(sources);
var chunk__41072 = null;
var count__41073 = (0);
var i__41074 = (0);
while(true){
if((i__41074 < count__41073)){
var map__41080 = chunk__41072.cljs$core$IIndexed$_nth$arity$2(null,i__41074);
var map__41080__$1 = cljs.core.__destructure_map(map__41080);
var src = map__41080__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41080__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41080__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41080__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41080__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e41081){var e_41299 = e41081;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_41299);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_41299.message)].join('')));
}

var G__41302 = seq__41071;
var G__41303 = chunk__41072;
var G__41304 = count__41073;
var G__41305 = (i__41074 + (1));
seq__41071 = G__41302;
chunk__41072 = G__41303;
count__41073 = G__41304;
i__41074 = G__41305;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__41071);
if(temp__5753__auto__){
var seq__41071__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41071__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__41071__$1);
var G__41307 = cljs.core.chunk_rest(seq__41071__$1);
var G__41308 = c__4638__auto__;
var G__41309 = cljs.core.count(c__4638__auto__);
var G__41310 = (0);
seq__41071 = G__41307;
chunk__41072 = G__41308;
count__41073 = G__41309;
i__41074 = G__41310;
continue;
} else {
var map__41082 = cljs.core.first(seq__41071__$1);
var map__41082__$1 = cljs.core.__destructure_map(map__41082);
var src = map__41082__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41082__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41082__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41082__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41082__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e41083){var e_41315 = e41083;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_41315);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_41315.message)].join('')));
}

var G__41316 = cljs.core.next(seq__41071__$1);
var G__41317 = null;
var G__41318 = (0);
var G__41319 = (0);
seq__41071 = G__41316;
chunk__41072 = G__41317;
count__41073 = G__41318;
i__41074 = G__41319;
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
var seq__41084 = cljs.core.seq(js_requires);
var chunk__41085 = null;
var count__41086 = (0);
var i__41087 = (0);
while(true){
if((i__41087 < count__41086)){
var js_ns = chunk__41085.cljs$core$IIndexed$_nth$arity$2(null,i__41087);
var require_str_41320 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_41320);


var G__41321 = seq__41084;
var G__41322 = chunk__41085;
var G__41323 = count__41086;
var G__41324 = (i__41087 + (1));
seq__41084 = G__41321;
chunk__41085 = G__41322;
count__41086 = G__41323;
i__41087 = G__41324;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__41084);
if(temp__5753__auto__){
var seq__41084__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41084__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__41084__$1);
var G__41325 = cljs.core.chunk_rest(seq__41084__$1);
var G__41326 = c__4638__auto__;
var G__41327 = cljs.core.count(c__4638__auto__);
var G__41328 = (0);
seq__41084 = G__41325;
chunk__41085 = G__41326;
count__41086 = G__41327;
i__41087 = G__41328;
continue;
} else {
var js_ns = cljs.core.first(seq__41084__$1);
var require_str_41329 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_41329);


var G__41331 = cljs.core.next(seq__41084__$1);
var G__41332 = null;
var G__41333 = (0);
var G__41334 = (0);
seq__41084 = G__41331;
chunk__41085 = G__41332;
count__41086 = G__41333;
i__41087 = G__41334;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__41089){
var map__41090 = p__41089;
var map__41090__$1 = cljs.core.__destructure_map(map__41090);
var msg = map__41090__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41090__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41090__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4611__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__41091(s__41092){
return (new cljs.core.LazySeq(null,(function (){
var s__41092__$1 = s__41092;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__41092__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var map__41097 = cljs.core.first(xs__6308__auto__);
var map__41097__$1 = cljs.core.__destructure_map(map__41097);
var src = map__41097__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41097__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41097__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4607__auto__ = ((function (s__41092__$1,map__41097,map__41097__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__41090,map__41090__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__41091_$_iter__41093(s__41094){
return (new cljs.core.LazySeq(null,((function (s__41092__$1,map__41097,map__41097__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__41090,map__41090__$1,msg,info,reload_info){
return (function (){
var s__41094__$1 = s__41094;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__41094__$1);
if(temp__5753__auto____$1){
var s__41094__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__41094__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__41094__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__41096 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__41095 = (0);
while(true){
if((i__41095 < size__4610__auto__)){
var warning = cljs.core._nth(c__4609__auto__,i__41095);
cljs.core.chunk_append(b__41096,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__41339 = (i__41095 + (1));
i__41095 = G__41339;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__41096),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__41091_$_iter__41093(cljs.core.chunk_rest(s__41094__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__41096),null);
}
} else {
var warning = cljs.core.first(s__41094__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__41091_$_iter__41093(cljs.core.rest(s__41094__$2)));
}
} else {
return null;
}
break;
}
});})(s__41092__$1,map__41097,map__41097__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__41090,map__41090__$1,msg,info,reload_info))
,null,null));
});})(s__41092__$1,map__41097,map__41097__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__41090,map__41090__$1,msg,info,reload_info))
;
var fs__4608__auto__ = cljs.core.seq(iterys__4607__auto__(warnings));
if(fs__4608__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4608__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__41091(cljs.core.rest(s__41092__$1)));
} else {
var G__41340 = cljs.core.rest(s__41092__$1);
s__41092__$1 = G__41340;
continue;
}
} else {
var G__41342 = cljs.core.rest(s__41092__$1);
s__41092__$1 = G__41342;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__41100_41343 = cljs.core.seq(warnings);
var chunk__41101_41344 = null;
var count__41102_41345 = (0);
var i__41103_41346 = (0);
while(true){
if((i__41103_41346 < count__41102_41345)){
var map__41110_41347 = chunk__41101_41344.cljs$core$IIndexed$_nth$arity$2(null,i__41103_41346);
var map__41110_41348__$1 = cljs.core.__destructure_map(map__41110_41347);
var w_41349 = map__41110_41348__$1;
var msg_41350__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41110_41348__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_41351 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41110_41348__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_41352 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41110_41348__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_41353 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41110_41348__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_41353)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_41351),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_41352),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_41350__$1)].join(''));


var G__41356 = seq__41100_41343;
var G__41357 = chunk__41101_41344;
var G__41358 = count__41102_41345;
var G__41359 = (i__41103_41346 + (1));
seq__41100_41343 = G__41356;
chunk__41101_41344 = G__41357;
count__41102_41345 = G__41358;
i__41103_41346 = G__41359;
continue;
} else {
var temp__5753__auto___41360 = cljs.core.seq(seq__41100_41343);
if(temp__5753__auto___41360){
var seq__41100_41362__$1 = temp__5753__auto___41360;
if(cljs.core.chunked_seq_QMARK_(seq__41100_41362__$1)){
var c__4638__auto___41363 = cljs.core.chunk_first(seq__41100_41362__$1);
var G__41364 = cljs.core.chunk_rest(seq__41100_41362__$1);
var G__41365 = c__4638__auto___41363;
var G__41366 = cljs.core.count(c__4638__auto___41363);
var G__41367 = (0);
seq__41100_41343 = G__41364;
chunk__41101_41344 = G__41365;
count__41102_41345 = G__41366;
i__41103_41346 = G__41367;
continue;
} else {
var map__41111_41369 = cljs.core.first(seq__41100_41362__$1);
var map__41111_41370__$1 = cljs.core.__destructure_map(map__41111_41369);
var w_41371 = map__41111_41370__$1;
var msg_41372__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41111_41370__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_41373 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41111_41370__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_41374 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41111_41370__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_41375 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41111_41370__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_41375)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_41373),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_41374),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_41372__$1)].join(''));


var G__41376 = cljs.core.next(seq__41100_41362__$1);
var G__41377 = null;
var G__41378 = (0);
var G__41379 = (0);
seq__41100_41343 = G__41376;
chunk__41101_41344 = G__41377;
count__41102_41345 = G__41378;
i__41103_41346 = G__41379;
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

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__41088_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__41088_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
var and__4210__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4210__auto__){
var and__4210__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4210__auto____$1){
return new$;
} else {
return and__4210__auto____$1;
}
} else {
return and__4210__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__41116){
var map__41117 = p__41116;
var map__41117__$1 = cljs.core.__destructure_map(map__41117);
var msg = map__41117__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41117__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__41118 = cljs.core.seq(updates);
var chunk__41120 = null;
var count__41121 = (0);
var i__41122 = (0);
while(true){
if((i__41122 < count__41121)){
var path = chunk__41120.cljs$core$IIndexed$_nth$arity$2(null,i__41122);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__41178_41385 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__41182_41386 = null;
var count__41183_41387 = (0);
var i__41184_41388 = (0);
while(true){
if((i__41184_41388 < count__41183_41387)){
var node_41391 = chunk__41182_41386.cljs$core$IIndexed$_nth$arity$2(null,i__41184_41388);
if(cljs.core.not(node_41391.shadow$old)){
var path_match_41392 = shadow.cljs.devtools.client.browser.match_paths(node_41391.getAttribute("href"),path);
if(cljs.core.truth_(path_match_41392)){
var new_link_41393 = (function (){var G__41197 = node_41391.cloneNode(true);
G__41197.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_41392),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__41197;
})();
(node_41391.shadow$old = true);

(new_link_41393.onload = ((function (seq__41178_41385,chunk__41182_41386,count__41183_41387,i__41184_41388,seq__41118,chunk__41120,count__41121,i__41122,new_link_41393,path_match_41392,node_41391,path,map__41117,map__41117__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_41391);
});})(seq__41178_41385,chunk__41182_41386,count__41183_41387,i__41184_41388,seq__41118,chunk__41120,count__41121,i__41122,new_link_41393,path_match_41392,node_41391,path,map__41117,map__41117__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_41392], 0));

goog.dom.insertSiblingAfter(new_link_41393,node_41391);


var G__41394 = seq__41178_41385;
var G__41395 = chunk__41182_41386;
var G__41396 = count__41183_41387;
var G__41397 = (i__41184_41388 + (1));
seq__41178_41385 = G__41394;
chunk__41182_41386 = G__41395;
count__41183_41387 = G__41396;
i__41184_41388 = G__41397;
continue;
} else {
var G__41398 = seq__41178_41385;
var G__41399 = chunk__41182_41386;
var G__41400 = count__41183_41387;
var G__41401 = (i__41184_41388 + (1));
seq__41178_41385 = G__41398;
chunk__41182_41386 = G__41399;
count__41183_41387 = G__41400;
i__41184_41388 = G__41401;
continue;
}
} else {
var G__41402 = seq__41178_41385;
var G__41403 = chunk__41182_41386;
var G__41404 = count__41183_41387;
var G__41405 = (i__41184_41388 + (1));
seq__41178_41385 = G__41402;
chunk__41182_41386 = G__41403;
count__41183_41387 = G__41404;
i__41184_41388 = G__41405;
continue;
}
} else {
var temp__5753__auto___41406 = cljs.core.seq(seq__41178_41385);
if(temp__5753__auto___41406){
var seq__41178_41407__$1 = temp__5753__auto___41406;
if(cljs.core.chunked_seq_QMARK_(seq__41178_41407__$1)){
var c__4638__auto___41408 = cljs.core.chunk_first(seq__41178_41407__$1);
var G__41409 = cljs.core.chunk_rest(seq__41178_41407__$1);
var G__41410 = c__4638__auto___41408;
var G__41411 = cljs.core.count(c__4638__auto___41408);
var G__41412 = (0);
seq__41178_41385 = G__41409;
chunk__41182_41386 = G__41410;
count__41183_41387 = G__41411;
i__41184_41388 = G__41412;
continue;
} else {
var node_41414 = cljs.core.first(seq__41178_41407__$1);
if(cljs.core.not(node_41414.shadow$old)){
var path_match_41415 = shadow.cljs.devtools.client.browser.match_paths(node_41414.getAttribute("href"),path);
if(cljs.core.truth_(path_match_41415)){
var new_link_41419 = (function (){var G__41201 = node_41414.cloneNode(true);
G__41201.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_41415),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__41201;
})();
(node_41414.shadow$old = true);

(new_link_41419.onload = ((function (seq__41178_41385,chunk__41182_41386,count__41183_41387,i__41184_41388,seq__41118,chunk__41120,count__41121,i__41122,new_link_41419,path_match_41415,node_41414,seq__41178_41407__$1,temp__5753__auto___41406,path,map__41117,map__41117__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_41414);
});})(seq__41178_41385,chunk__41182_41386,count__41183_41387,i__41184_41388,seq__41118,chunk__41120,count__41121,i__41122,new_link_41419,path_match_41415,node_41414,seq__41178_41407__$1,temp__5753__auto___41406,path,map__41117,map__41117__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_41415], 0));

goog.dom.insertSiblingAfter(new_link_41419,node_41414);


var G__41426 = cljs.core.next(seq__41178_41407__$1);
var G__41427 = null;
var G__41428 = (0);
var G__41429 = (0);
seq__41178_41385 = G__41426;
chunk__41182_41386 = G__41427;
count__41183_41387 = G__41428;
i__41184_41388 = G__41429;
continue;
} else {
var G__41430 = cljs.core.next(seq__41178_41407__$1);
var G__41431 = null;
var G__41432 = (0);
var G__41433 = (0);
seq__41178_41385 = G__41430;
chunk__41182_41386 = G__41431;
count__41183_41387 = G__41432;
i__41184_41388 = G__41433;
continue;
}
} else {
var G__41434 = cljs.core.next(seq__41178_41407__$1);
var G__41435 = null;
var G__41436 = (0);
var G__41437 = (0);
seq__41178_41385 = G__41434;
chunk__41182_41386 = G__41435;
count__41183_41387 = G__41436;
i__41184_41388 = G__41437;
continue;
}
}
} else {
}
}
break;
}


var G__41438 = seq__41118;
var G__41439 = chunk__41120;
var G__41440 = count__41121;
var G__41441 = (i__41122 + (1));
seq__41118 = G__41438;
chunk__41120 = G__41439;
count__41121 = G__41440;
i__41122 = G__41441;
continue;
} else {
var G__41442 = seq__41118;
var G__41443 = chunk__41120;
var G__41444 = count__41121;
var G__41445 = (i__41122 + (1));
seq__41118 = G__41442;
chunk__41120 = G__41443;
count__41121 = G__41444;
i__41122 = G__41445;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__41118);
if(temp__5753__auto__){
var seq__41118__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41118__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__41118__$1);
var G__41452 = cljs.core.chunk_rest(seq__41118__$1);
var G__41453 = c__4638__auto__;
var G__41454 = cljs.core.count(c__4638__auto__);
var G__41455 = (0);
seq__41118 = G__41452;
chunk__41120 = G__41453;
count__41121 = G__41454;
i__41122 = G__41455;
continue;
} else {
var path = cljs.core.first(seq__41118__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__41205_41456 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__41209_41457 = null;
var count__41210_41458 = (0);
var i__41211_41459 = (0);
while(true){
if((i__41211_41459 < count__41210_41458)){
var node_41460 = chunk__41209_41457.cljs$core$IIndexed$_nth$arity$2(null,i__41211_41459);
if(cljs.core.not(node_41460.shadow$old)){
var path_match_41461 = shadow.cljs.devtools.client.browser.match_paths(node_41460.getAttribute("href"),path);
if(cljs.core.truth_(path_match_41461)){
var new_link_41462 = (function (){var G__41220 = node_41460.cloneNode(true);
G__41220.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_41461),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__41220;
})();
(node_41460.shadow$old = true);

(new_link_41462.onload = ((function (seq__41205_41456,chunk__41209_41457,count__41210_41458,i__41211_41459,seq__41118,chunk__41120,count__41121,i__41122,new_link_41462,path_match_41461,node_41460,path,seq__41118__$1,temp__5753__auto__,map__41117,map__41117__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_41460);
});})(seq__41205_41456,chunk__41209_41457,count__41210_41458,i__41211_41459,seq__41118,chunk__41120,count__41121,i__41122,new_link_41462,path_match_41461,node_41460,path,seq__41118__$1,temp__5753__auto__,map__41117,map__41117__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_41461], 0));

goog.dom.insertSiblingAfter(new_link_41462,node_41460);


var G__41470 = seq__41205_41456;
var G__41471 = chunk__41209_41457;
var G__41472 = count__41210_41458;
var G__41473 = (i__41211_41459 + (1));
seq__41205_41456 = G__41470;
chunk__41209_41457 = G__41471;
count__41210_41458 = G__41472;
i__41211_41459 = G__41473;
continue;
} else {
var G__41475 = seq__41205_41456;
var G__41476 = chunk__41209_41457;
var G__41477 = count__41210_41458;
var G__41478 = (i__41211_41459 + (1));
seq__41205_41456 = G__41475;
chunk__41209_41457 = G__41476;
count__41210_41458 = G__41477;
i__41211_41459 = G__41478;
continue;
}
} else {
var G__41480 = seq__41205_41456;
var G__41481 = chunk__41209_41457;
var G__41482 = count__41210_41458;
var G__41483 = (i__41211_41459 + (1));
seq__41205_41456 = G__41480;
chunk__41209_41457 = G__41481;
count__41210_41458 = G__41482;
i__41211_41459 = G__41483;
continue;
}
} else {
var temp__5753__auto___41484__$1 = cljs.core.seq(seq__41205_41456);
if(temp__5753__auto___41484__$1){
var seq__41205_41485__$1 = temp__5753__auto___41484__$1;
if(cljs.core.chunked_seq_QMARK_(seq__41205_41485__$1)){
var c__4638__auto___41486 = cljs.core.chunk_first(seq__41205_41485__$1);
var G__41487 = cljs.core.chunk_rest(seq__41205_41485__$1);
var G__41488 = c__4638__auto___41486;
var G__41489 = cljs.core.count(c__4638__auto___41486);
var G__41490 = (0);
seq__41205_41456 = G__41487;
chunk__41209_41457 = G__41488;
count__41210_41458 = G__41489;
i__41211_41459 = G__41490;
continue;
} else {
var node_41493 = cljs.core.first(seq__41205_41485__$1);
if(cljs.core.not(node_41493.shadow$old)){
var path_match_41494 = shadow.cljs.devtools.client.browser.match_paths(node_41493.getAttribute("href"),path);
if(cljs.core.truth_(path_match_41494)){
var new_link_41495 = (function (){var G__41224 = node_41493.cloneNode(true);
G__41224.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_41494),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__41224;
})();
(node_41493.shadow$old = true);

(new_link_41495.onload = ((function (seq__41205_41456,chunk__41209_41457,count__41210_41458,i__41211_41459,seq__41118,chunk__41120,count__41121,i__41122,new_link_41495,path_match_41494,node_41493,seq__41205_41485__$1,temp__5753__auto___41484__$1,path,seq__41118__$1,temp__5753__auto__,map__41117,map__41117__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_41493);
});})(seq__41205_41456,chunk__41209_41457,count__41210_41458,i__41211_41459,seq__41118,chunk__41120,count__41121,i__41122,new_link_41495,path_match_41494,node_41493,seq__41205_41485__$1,temp__5753__auto___41484__$1,path,seq__41118__$1,temp__5753__auto__,map__41117,map__41117__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_41494], 0));

goog.dom.insertSiblingAfter(new_link_41495,node_41493);


var G__41498 = cljs.core.next(seq__41205_41485__$1);
var G__41499 = null;
var G__41500 = (0);
var G__41501 = (0);
seq__41205_41456 = G__41498;
chunk__41209_41457 = G__41499;
count__41210_41458 = G__41500;
i__41211_41459 = G__41501;
continue;
} else {
var G__41502 = cljs.core.next(seq__41205_41485__$1);
var G__41503 = null;
var G__41504 = (0);
var G__41505 = (0);
seq__41205_41456 = G__41502;
chunk__41209_41457 = G__41503;
count__41210_41458 = G__41504;
i__41211_41459 = G__41505;
continue;
}
} else {
var G__41506 = cljs.core.next(seq__41205_41485__$1);
var G__41507 = null;
var G__41508 = (0);
var G__41509 = (0);
seq__41205_41456 = G__41506;
chunk__41209_41457 = G__41507;
count__41210_41458 = G__41508;
i__41211_41459 = G__41509;
continue;
}
}
} else {
}
}
break;
}


var G__41510 = cljs.core.next(seq__41118__$1);
var G__41511 = null;
var G__41512 = (0);
var G__41513 = (0);
seq__41118 = G__41510;
chunk__41120 = G__41511;
count__41121 = G__41512;
i__41122 = G__41513;
continue;
} else {
var G__41515 = cljs.core.next(seq__41118__$1);
var G__41516 = null;
var G__41517 = (0);
var G__41518 = (0);
seq__41118 = G__41515;
chunk__41120 = G__41516;
count__41121 = G__41517;
i__41122 = G__41518;
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
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__41228){
var map__41229 = p__41228;
var map__41229__$1 = cljs.core.__destructure_map(map__41229);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41229__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
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

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__41234){
var map__41235 = p__41234;
var map__41235__$1 = cljs.core.__destructure_map(map__41235);
var _ = map__41235__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41235__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__41236,done,error){
var map__41237 = p__41236;
var map__41237__$1 = cljs.core.__destructure_map(map__41237);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41237__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__41240,done,error){
var map__41241 = p__41240;
var map__41241__$1 = cljs.core.__destructure_map(map__41241);
var msg = map__41241__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41241__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41241__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41241__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__41242){
var map__41243 = p__41242;
var map__41243__$1 = cljs.core.__destructure_map(map__41243);
var src = map__41243__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41243__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4210__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4210__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4210__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__41244 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__41244) : done.call(null,G__41244));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__41245){
var map__41246 = p__41245;
var map__41246__$1 = cljs.core.__destructure_map(map__41246);
var msg__$1 = map__41246__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41246__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e41247){var ex = e41247;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__41248){
var map__41249 = p__41248;
var map__41249__$1 = cljs.core.__destructure_map(map__41249);
var env = map__41249__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41249__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
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
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__41256){
var map__41257 = p__41256;
var map__41257__$1 = cljs.core.__destructure_map(map__41257);
var msg = map__41257__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41257__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
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
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__41264){
var map__41266 = p__41264;
var map__41266__$1 = cljs.core.__destructure_map(map__41266);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41266__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41266__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
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
}),(function (p__41276){
var map__41277 = p__41276;
var map__41277__$1 = cljs.core.__destructure_map(map__41277);
var svc = map__41277__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41277__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
