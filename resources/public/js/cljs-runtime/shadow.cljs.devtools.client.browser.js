goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4824__auto__ = [];
var len__4818__auto___42823 = arguments.length;
var i__4819__auto___42824 = (0);
while(true){
if((i__4819__auto___42824 < len__4818__auto___42823)){
args__4824__auto__.push((arguments[i__4819__auto___42824]));

var G__42825 = (i__4819__auto___42824 + (1));
i__4819__auto___42824 = G__42825;
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq42465){
var G__42466 = cljs.core.first(seq42465);
var seq42465__$1 = cljs.core.next(seq42465);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42466,seq42465__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__42471 = cljs.core.seq(sources);
var chunk__42472 = null;
var count__42473 = (0);
var i__42474 = (0);
while(true){
if((i__42474 < count__42473)){
var map__42508 = chunk__42472.cljs$core$IIndexed$_nth$arity$2(null,i__42474);
var map__42508__$1 = cljs.core.__destructure_map(map__42508);
var src = map__42508__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42508__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42508__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42508__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42508__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e42512){var e_42829 = e42512;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_42829);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_42829.message)].join('')));
}

var G__42830 = seq__42471;
var G__42831 = chunk__42472;
var G__42832 = count__42473;
var G__42833 = (i__42474 + (1));
seq__42471 = G__42830;
chunk__42472 = G__42831;
count__42473 = G__42832;
i__42474 = G__42833;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__42471);
if(temp__5753__auto__){
var seq__42471__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42471__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__42471__$1);
var G__42836 = cljs.core.chunk_rest(seq__42471__$1);
var G__42837 = c__4638__auto__;
var G__42838 = cljs.core.count(c__4638__auto__);
var G__42839 = (0);
seq__42471 = G__42836;
chunk__42472 = G__42837;
count__42473 = G__42838;
i__42474 = G__42839;
continue;
} else {
var map__42515 = cljs.core.first(seq__42471__$1);
var map__42515__$1 = cljs.core.__destructure_map(map__42515);
var src = map__42515__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42515__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42515__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42515__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42515__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e42522){var e_42840 = e42522;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_42840);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_42840.message)].join('')));
}

var G__42841 = cljs.core.next(seq__42471__$1);
var G__42842 = null;
var G__42843 = (0);
var G__42844 = (0);
seq__42471 = G__42841;
chunk__42472 = G__42842;
count__42473 = G__42843;
i__42474 = G__42844;
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
var seq__42528 = cljs.core.seq(js_requires);
var chunk__42529 = null;
var count__42530 = (0);
var i__42531 = (0);
while(true){
if((i__42531 < count__42530)){
var js_ns = chunk__42529.cljs$core$IIndexed$_nth$arity$2(null,i__42531);
var require_str_42845 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_42845);


var G__42846 = seq__42528;
var G__42847 = chunk__42529;
var G__42848 = count__42530;
var G__42849 = (i__42531 + (1));
seq__42528 = G__42846;
chunk__42529 = G__42847;
count__42530 = G__42848;
i__42531 = G__42849;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__42528);
if(temp__5753__auto__){
var seq__42528__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42528__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__42528__$1);
var G__42850 = cljs.core.chunk_rest(seq__42528__$1);
var G__42851 = c__4638__auto__;
var G__42852 = cljs.core.count(c__4638__auto__);
var G__42853 = (0);
seq__42528 = G__42850;
chunk__42529 = G__42851;
count__42530 = G__42852;
i__42531 = G__42853;
continue;
} else {
var js_ns = cljs.core.first(seq__42528__$1);
var require_str_42854 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_42854);


var G__42855 = cljs.core.next(seq__42528__$1);
var G__42856 = null;
var G__42857 = (0);
var G__42858 = (0);
seq__42528 = G__42855;
chunk__42529 = G__42856;
count__42530 = G__42857;
i__42531 = G__42858;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__42543){
var map__42544 = p__42543;
var map__42544__$1 = cljs.core.__destructure_map(map__42544);
var msg = map__42544__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42544__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42544__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4611__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__42545(s__42546){
return (new cljs.core.LazySeq(null,(function (){
var s__42546__$1 = s__42546;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__42546__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var map__42551 = cljs.core.first(xs__6308__auto__);
var map__42551__$1 = cljs.core.__destructure_map(map__42551);
var src = map__42551__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42551__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42551__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4607__auto__ = ((function (s__42546__$1,map__42551,map__42551__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__42544,map__42544__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__42545_$_iter__42547(s__42548){
return (new cljs.core.LazySeq(null,((function (s__42546__$1,map__42551,map__42551__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__42544,map__42544__$1,msg,info,reload_info){
return (function (){
var s__42548__$1 = s__42548;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__42548__$1);
if(temp__5753__auto____$1){
var s__42548__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__42548__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__42548__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__42550 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__42549 = (0);
while(true){
if((i__42549 < size__4610__auto__)){
var warning = cljs.core._nth(c__4609__auto__,i__42549);
cljs.core.chunk_append(b__42550,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__42861 = (i__42549 + (1));
i__42549 = G__42861;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__42550),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__42545_$_iter__42547(cljs.core.chunk_rest(s__42548__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__42550),null);
}
} else {
var warning = cljs.core.first(s__42548__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__42545_$_iter__42547(cljs.core.rest(s__42548__$2)));
}
} else {
return null;
}
break;
}
});})(s__42546__$1,map__42551,map__42551__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__42544,map__42544__$1,msg,info,reload_info))
,null,null));
});})(s__42546__$1,map__42551,map__42551__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__42544,map__42544__$1,msg,info,reload_info))
;
var fs__4608__auto__ = cljs.core.seq(iterys__4607__auto__(warnings));
if(fs__4608__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4608__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__42545(cljs.core.rest(s__42546__$1)));
} else {
var G__42864 = cljs.core.rest(s__42546__$1);
s__42546__$1 = G__42864;
continue;
}
} else {
var G__42865 = cljs.core.rest(s__42546__$1);
s__42546__$1 = G__42865;
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
var seq__42555_42866 = cljs.core.seq(warnings);
var chunk__42556_42867 = null;
var count__42557_42868 = (0);
var i__42558_42869 = (0);
while(true){
if((i__42558_42869 < count__42557_42868)){
var map__42561_42870 = chunk__42556_42867.cljs$core$IIndexed$_nth$arity$2(null,i__42558_42869);
var map__42561_42871__$1 = cljs.core.__destructure_map(map__42561_42870);
var w_42872 = map__42561_42871__$1;
var msg_42873__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42561_42871__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_42874 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42561_42871__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_42875 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42561_42871__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_42876 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42561_42871__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_42876)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_42874),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_42875),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_42873__$1)].join(''));


var G__42878 = seq__42555_42866;
var G__42879 = chunk__42556_42867;
var G__42880 = count__42557_42868;
var G__42881 = (i__42558_42869 + (1));
seq__42555_42866 = G__42878;
chunk__42556_42867 = G__42879;
count__42557_42868 = G__42880;
i__42558_42869 = G__42881;
continue;
} else {
var temp__5753__auto___42882 = cljs.core.seq(seq__42555_42866);
if(temp__5753__auto___42882){
var seq__42555_42883__$1 = temp__5753__auto___42882;
if(cljs.core.chunked_seq_QMARK_(seq__42555_42883__$1)){
var c__4638__auto___42884 = cljs.core.chunk_first(seq__42555_42883__$1);
var G__42885 = cljs.core.chunk_rest(seq__42555_42883__$1);
var G__42886 = c__4638__auto___42884;
var G__42887 = cljs.core.count(c__4638__auto___42884);
var G__42888 = (0);
seq__42555_42866 = G__42885;
chunk__42556_42867 = G__42886;
count__42557_42868 = G__42887;
i__42558_42869 = G__42888;
continue;
} else {
var map__42563_42890 = cljs.core.first(seq__42555_42883__$1);
var map__42563_42891__$1 = cljs.core.__destructure_map(map__42563_42890);
var w_42892 = map__42563_42891__$1;
var msg_42893__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42563_42891__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_42894 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42563_42891__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_42895 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42563_42891__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_42896 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42563_42891__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_42896)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_42894),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_42895),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_42893__$1)].join(''));


var G__42897 = cljs.core.next(seq__42555_42883__$1);
var G__42898 = null;
var G__42899 = (0);
var G__42900 = (0);
seq__42555_42866 = G__42897;
chunk__42556_42867 = G__42898;
count__42557_42868 = G__42899;
i__42558_42869 = G__42900;
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

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__42542_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__42542_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__42568){
var map__42569 = p__42568;
var map__42569__$1 = cljs.core.__destructure_map(map__42569);
var msg = map__42569__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42569__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__42570 = cljs.core.seq(updates);
var chunk__42572 = null;
var count__42573 = (0);
var i__42574 = (0);
while(true){
if((i__42574 < count__42573)){
var path = chunk__42572.cljs$core$IIndexed$_nth$arity$2(null,i__42574);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__42660_42904 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__42664_42905 = null;
var count__42665_42906 = (0);
var i__42666_42907 = (0);
while(true){
if((i__42666_42907 < count__42665_42906)){
var node_42908 = chunk__42664_42905.cljs$core$IIndexed$_nth$arity$2(null,i__42666_42907);
if(cljs.core.not(node_42908.shadow$old)){
var path_match_42909 = shadow.cljs.devtools.client.browser.match_paths(node_42908.getAttribute("href"),path);
if(cljs.core.truth_(path_match_42909)){
var new_link_42910 = (function (){var G__42689 = node_42908.cloneNode(true);
G__42689.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_42909),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__42689;
})();
(node_42908.shadow$old = true);

(new_link_42910.onload = ((function (seq__42660_42904,chunk__42664_42905,count__42665_42906,i__42666_42907,seq__42570,chunk__42572,count__42573,i__42574,new_link_42910,path_match_42909,node_42908,path,map__42569,map__42569__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_42908);
});})(seq__42660_42904,chunk__42664_42905,count__42665_42906,i__42666_42907,seq__42570,chunk__42572,count__42573,i__42574,new_link_42910,path_match_42909,node_42908,path,map__42569,map__42569__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_42909], 0));

goog.dom.insertSiblingAfter(new_link_42910,node_42908);


var G__42911 = seq__42660_42904;
var G__42912 = chunk__42664_42905;
var G__42913 = count__42665_42906;
var G__42914 = (i__42666_42907 + (1));
seq__42660_42904 = G__42911;
chunk__42664_42905 = G__42912;
count__42665_42906 = G__42913;
i__42666_42907 = G__42914;
continue;
} else {
var G__42915 = seq__42660_42904;
var G__42916 = chunk__42664_42905;
var G__42917 = count__42665_42906;
var G__42918 = (i__42666_42907 + (1));
seq__42660_42904 = G__42915;
chunk__42664_42905 = G__42916;
count__42665_42906 = G__42917;
i__42666_42907 = G__42918;
continue;
}
} else {
var G__42919 = seq__42660_42904;
var G__42920 = chunk__42664_42905;
var G__42921 = count__42665_42906;
var G__42922 = (i__42666_42907 + (1));
seq__42660_42904 = G__42919;
chunk__42664_42905 = G__42920;
count__42665_42906 = G__42921;
i__42666_42907 = G__42922;
continue;
}
} else {
var temp__5753__auto___42923 = cljs.core.seq(seq__42660_42904);
if(temp__5753__auto___42923){
var seq__42660_42924__$1 = temp__5753__auto___42923;
if(cljs.core.chunked_seq_QMARK_(seq__42660_42924__$1)){
var c__4638__auto___42925 = cljs.core.chunk_first(seq__42660_42924__$1);
var G__42926 = cljs.core.chunk_rest(seq__42660_42924__$1);
var G__42927 = c__4638__auto___42925;
var G__42928 = cljs.core.count(c__4638__auto___42925);
var G__42929 = (0);
seq__42660_42904 = G__42926;
chunk__42664_42905 = G__42927;
count__42665_42906 = G__42928;
i__42666_42907 = G__42929;
continue;
} else {
var node_42930 = cljs.core.first(seq__42660_42924__$1);
if(cljs.core.not(node_42930.shadow$old)){
var path_match_42931 = shadow.cljs.devtools.client.browser.match_paths(node_42930.getAttribute("href"),path);
if(cljs.core.truth_(path_match_42931)){
var new_link_42932 = (function (){var G__42698 = node_42930.cloneNode(true);
G__42698.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_42931),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__42698;
})();
(node_42930.shadow$old = true);

(new_link_42932.onload = ((function (seq__42660_42904,chunk__42664_42905,count__42665_42906,i__42666_42907,seq__42570,chunk__42572,count__42573,i__42574,new_link_42932,path_match_42931,node_42930,seq__42660_42924__$1,temp__5753__auto___42923,path,map__42569,map__42569__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_42930);
});})(seq__42660_42904,chunk__42664_42905,count__42665_42906,i__42666_42907,seq__42570,chunk__42572,count__42573,i__42574,new_link_42932,path_match_42931,node_42930,seq__42660_42924__$1,temp__5753__auto___42923,path,map__42569,map__42569__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_42931], 0));

goog.dom.insertSiblingAfter(new_link_42932,node_42930);


var G__42934 = cljs.core.next(seq__42660_42924__$1);
var G__42935 = null;
var G__42937 = (0);
var G__42938 = (0);
seq__42660_42904 = G__42934;
chunk__42664_42905 = G__42935;
count__42665_42906 = G__42937;
i__42666_42907 = G__42938;
continue;
} else {
var G__42939 = cljs.core.next(seq__42660_42924__$1);
var G__42940 = null;
var G__42941 = (0);
var G__42942 = (0);
seq__42660_42904 = G__42939;
chunk__42664_42905 = G__42940;
count__42665_42906 = G__42941;
i__42666_42907 = G__42942;
continue;
}
} else {
var G__42943 = cljs.core.next(seq__42660_42924__$1);
var G__42944 = null;
var G__42945 = (0);
var G__42946 = (0);
seq__42660_42904 = G__42943;
chunk__42664_42905 = G__42944;
count__42665_42906 = G__42945;
i__42666_42907 = G__42946;
continue;
}
}
} else {
}
}
break;
}


var G__42947 = seq__42570;
var G__42948 = chunk__42572;
var G__42949 = count__42573;
var G__42950 = (i__42574 + (1));
seq__42570 = G__42947;
chunk__42572 = G__42948;
count__42573 = G__42949;
i__42574 = G__42950;
continue;
} else {
var G__42951 = seq__42570;
var G__42952 = chunk__42572;
var G__42953 = count__42573;
var G__42954 = (i__42574 + (1));
seq__42570 = G__42951;
chunk__42572 = G__42952;
count__42573 = G__42953;
i__42574 = G__42954;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__42570);
if(temp__5753__auto__){
var seq__42570__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42570__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__42570__$1);
var G__42955 = cljs.core.chunk_rest(seq__42570__$1);
var G__42956 = c__4638__auto__;
var G__42957 = cljs.core.count(c__4638__auto__);
var G__42958 = (0);
seq__42570 = G__42955;
chunk__42572 = G__42956;
count__42573 = G__42957;
i__42574 = G__42958;
continue;
} else {
var path = cljs.core.first(seq__42570__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__42708_42960 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__42712_42961 = null;
var count__42713_42962 = (0);
var i__42714_42963 = (0);
while(true){
if((i__42714_42963 < count__42713_42962)){
var node_42964 = chunk__42712_42961.cljs$core$IIndexed$_nth$arity$2(null,i__42714_42963);
if(cljs.core.not(node_42964.shadow$old)){
var path_match_42966 = shadow.cljs.devtools.client.browser.match_paths(node_42964.getAttribute("href"),path);
if(cljs.core.truth_(path_match_42966)){
var new_link_42968 = (function (){var G__42733 = node_42964.cloneNode(true);
G__42733.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_42966),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__42733;
})();
(node_42964.shadow$old = true);

(new_link_42968.onload = ((function (seq__42708_42960,chunk__42712_42961,count__42713_42962,i__42714_42963,seq__42570,chunk__42572,count__42573,i__42574,new_link_42968,path_match_42966,node_42964,path,seq__42570__$1,temp__5753__auto__,map__42569,map__42569__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_42964);
});})(seq__42708_42960,chunk__42712_42961,count__42713_42962,i__42714_42963,seq__42570,chunk__42572,count__42573,i__42574,new_link_42968,path_match_42966,node_42964,path,seq__42570__$1,temp__5753__auto__,map__42569,map__42569__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_42966], 0));

goog.dom.insertSiblingAfter(new_link_42968,node_42964);


var G__42969 = seq__42708_42960;
var G__42970 = chunk__42712_42961;
var G__42971 = count__42713_42962;
var G__42972 = (i__42714_42963 + (1));
seq__42708_42960 = G__42969;
chunk__42712_42961 = G__42970;
count__42713_42962 = G__42971;
i__42714_42963 = G__42972;
continue;
} else {
var G__42974 = seq__42708_42960;
var G__42975 = chunk__42712_42961;
var G__42976 = count__42713_42962;
var G__42977 = (i__42714_42963 + (1));
seq__42708_42960 = G__42974;
chunk__42712_42961 = G__42975;
count__42713_42962 = G__42976;
i__42714_42963 = G__42977;
continue;
}
} else {
var G__42978 = seq__42708_42960;
var G__42979 = chunk__42712_42961;
var G__42980 = count__42713_42962;
var G__42981 = (i__42714_42963 + (1));
seq__42708_42960 = G__42978;
chunk__42712_42961 = G__42979;
count__42713_42962 = G__42980;
i__42714_42963 = G__42981;
continue;
}
} else {
var temp__5753__auto___42982__$1 = cljs.core.seq(seq__42708_42960);
if(temp__5753__auto___42982__$1){
var seq__42708_42984__$1 = temp__5753__auto___42982__$1;
if(cljs.core.chunked_seq_QMARK_(seq__42708_42984__$1)){
var c__4638__auto___42985 = cljs.core.chunk_first(seq__42708_42984__$1);
var G__42986 = cljs.core.chunk_rest(seq__42708_42984__$1);
var G__42987 = c__4638__auto___42985;
var G__42988 = cljs.core.count(c__4638__auto___42985);
var G__42989 = (0);
seq__42708_42960 = G__42986;
chunk__42712_42961 = G__42987;
count__42713_42962 = G__42988;
i__42714_42963 = G__42989;
continue;
} else {
var node_42990 = cljs.core.first(seq__42708_42984__$1);
if(cljs.core.not(node_42990.shadow$old)){
var path_match_42991 = shadow.cljs.devtools.client.browser.match_paths(node_42990.getAttribute("href"),path);
if(cljs.core.truth_(path_match_42991)){
var new_link_42993 = (function (){var G__42741 = node_42990.cloneNode(true);
G__42741.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_42991),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__42741;
})();
(node_42990.shadow$old = true);

(new_link_42993.onload = ((function (seq__42708_42960,chunk__42712_42961,count__42713_42962,i__42714_42963,seq__42570,chunk__42572,count__42573,i__42574,new_link_42993,path_match_42991,node_42990,seq__42708_42984__$1,temp__5753__auto___42982__$1,path,seq__42570__$1,temp__5753__auto__,map__42569,map__42569__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_42990);
});})(seq__42708_42960,chunk__42712_42961,count__42713_42962,i__42714_42963,seq__42570,chunk__42572,count__42573,i__42574,new_link_42993,path_match_42991,node_42990,seq__42708_42984__$1,temp__5753__auto___42982__$1,path,seq__42570__$1,temp__5753__auto__,map__42569,map__42569__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_42991], 0));

goog.dom.insertSiblingAfter(new_link_42993,node_42990);


var G__42995 = cljs.core.next(seq__42708_42984__$1);
var G__42996 = null;
var G__42997 = (0);
var G__42998 = (0);
seq__42708_42960 = G__42995;
chunk__42712_42961 = G__42996;
count__42713_42962 = G__42997;
i__42714_42963 = G__42998;
continue;
} else {
var G__42999 = cljs.core.next(seq__42708_42984__$1);
var G__43000 = null;
var G__43001 = (0);
var G__43002 = (0);
seq__42708_42960 = G__42999;
chunk__42712_42961 = G__43000;
count__42713_42962 = G__43001;
i__42714_42963 = G__43002;
continue;
}
} else {
var G__43003 = cljs.core.next(seq__42708_42984__$1);
var G__43004 = null;
var G__43005 = (0);
var G__43006 = (0);
seq__42708_42960 = G__43003;
chunk__42712_42961 = G__43004;
count__42713_42962 = G__43005;
i__42714_42963 = G__43006;
continue;
}
}
} else {
}
}
break;
}


var G__43007 = cljs.core.next(seq__42570__$1);
var G__43008 = null;
var G__43009 = (0);
var G__43010 = (0);
seq__42570 = G__43007;
chunk__42572 = G__43008;
count__42573 = G__43009;
i__42574 = G__43010;
continue;
} else {
var G__43011 = cljs.core.next(seq__42570__$1);
var G__43012 = null;
var G__43013 = (0);
var G__43014 = (0);
seq__42570 = G__43011;
chunk__42572 = G__43012;
count__42573 = G__43013;
i__42574 = G__43014;
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
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__42747){
var map__42748 = p__42747;
var map__42748__$1 = cljs.core.__destructure_map(map__42748);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42748__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
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

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__42765){
var map__42767 = p__42765;
var map__42767__$1 = cljs.core.__destructure_map(map__42767);
var _ = map__42767__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42767__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__42769,done,error){
var map__42770 = p__42769;
var map__42770__$1 = cljs.core.__destructure_map(map__42770);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42770__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__42773,done,error){
var map__42774 = p__42773;
var map__42774__$1 = cljs.core.__destructure_map(map__42774);
var msg = map__42774__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42774__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42774__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42774__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__42777){
var map__42779 = p__42777;
var map__42779__$1 = cljs.core.__destructure_map(map__42779);
var src = map__42779__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42779__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4210__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4210__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4210__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__42783 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__42783) : done.call(null,G__42783));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__42786){
var map__42787 = p__42786;
var map__42787__$1 = cljs.core.__destructure_map(map__42787);
var msg__$1 = map__42787__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42787__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e42788){var ex = e42788;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__42789){
var map__42790 = p__42789;
var map__42790__$1 = cljs.core.__destructure_map(map__42790);
var env = map__42790__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42790__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
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
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__42797){
var map__42798 = p__42797;
var map__42798__$1 = cljs.core.__destructure_map(map__42798);
var msg = map__42798__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42798__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
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
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__42814){
var map__42815 = p__42814;
var map__42815__$1 = cljs.core.__destructure_map(map__42815);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42815__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42815__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
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
}),(function (p__42817){
var map__42819 = p__42817;
var map__42819__$1 = cljs.core.__destructure_map(map__42819);
var svc = map__42819__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42819__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
