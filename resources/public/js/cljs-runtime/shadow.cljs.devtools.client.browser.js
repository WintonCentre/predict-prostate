goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4824__auto__ = [];
var len__4818__auto___40815 = arguments.length;
var i__4819__auto___40816 = (0);
while(true){
if((i__4819__auto___40816 < len__4818__auto___40815)){
args__4824__auto__.push((arguments[i__4819__auto___40816]));

var G__40817 = (i__4819__auto___40816 + (1));
i__4819__auto___40816 = G__40817;
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq40615){
var G__40616 = cljs.core.first(seq40615);
var seq40615__$1 = cljs.core.next(seq40615);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40616,seq40615__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__40620 = cljs.core.seq(sources);
var chunk__40621 = null;
var count__40622 = (0);
var i__40623 = (0);
while(true){
if((i__40623 < count__40622)){
var map__40628 = chunk__40621.cljs$core$IIndexed$_nth$arity$2(null,i__40623);
var map__40628__$1 = cljs.core.__destructure_map(map__40628);
var src = map__40628__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40628__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40628__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40628__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40628__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e40629){var e_40819 = e40629;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_40819);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_40819.message)].join('')));
}

var G__40820 = seq__40620;
var G__40821 = chunk__40621;
var G__40822 = count__40622;
var G__40823 = (i__40623 + (1));
seq__40620 = G__40820;
chunk__40621 = G__40821;
count__40622 = G__40822;
i__40623 = G__40823;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__40620);
if(temp__5753__auto__){
var seq__40620__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40620__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__40620__$1);
var G__40824 = cljs.core.chunk_rest(seq__40620__$1);
var G__40825 = c__4638__auto__;
var G__40826 = cljs.core.count(c__4638__auto__);
var G__40827 = (0);
seq__40620 = G__40824;
chunk__40621 = G__40825;
count__40622 = G__40826;
i__40623 = G__40827;
continue;
} else {
var map__40630 = cljs.core.first(seq__40620__$1);
var map__40630__$1 = cljs.core.__destructure_map(map__40630);
var src = map__40630__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40630__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40630__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40630__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40630__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e40631){var e_40828 = e40631;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_40828);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_40828.message)].join('')));
}

var G__40829 = cljs.core.next(seq__40620__$1);
var G__40830 = null;
var G__40831 = (0);
var G__40832 = (0);
seq__40620 = G__40829;
chunk__40621 = G__40830;
count__40622 = G__40831;
i__40623 = G__40832;
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
var seq__40633 = cljs.core.seq(js_requires);
var chunk__40634 = null;
var count__40635 = (0);
var i__40636 = (0);
while(true){
if((i__40636 < count__40635)){
var js_ns = chunk__40634.cljs$core$IIndexed$_nth$arity$2(null,i__40636);
var require_str_40833 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_40833);


var G__40834 = seq__40633;
var G__40835 = chunk__40634;
var G__40836 = count__40635;
var G__40837 = (i__40636 + (1));
seq__40633 = G__40834;
chunk__40634 = G__40835;
count__40635 = G__40836;
i__40636 = G__40837;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__40633);
if(temp__5753__auto__){
var seq__40633__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40633__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__40633__$1);
var G__40838 = cljs.core.chunk_rest(seq__40633__$1);
var G__40839 = c__4638__auto__;
var G__40840 = cljs.core.count(c__4638__auto__);
var G__40841 = (0);
seq__40633 = G__40838;
chunk__40634 = G__40839;
count__40635 = G__40840;
i__40636 = G__40841;
continue;
} else {
var js_ns = cljs.core.first(seq__40633__$1);
var require_str_40842 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_40842);


var G__40843 = cljs.core.next(seq__40633__$1);
var G__40844 = null;
var G__40845 = (0);
var G__40846 = (0);
seq__40633 = G__40843;
chunk__40634 = G__40844;
count__40635 = G__40845;
i__40636 = G__40846;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__40646){
var map__40647 = p__40646;
var map__40647__$1 = cljs.core.__destructure_map(map__40647);
var msg = map__40647__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40647__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40647__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4611__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__40651(s__40653){
return (new cljs.core.LazySeq(null,(function (){
var s__40653__$1 = s__40653;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__40653__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var map__40666 = cljs.core.first(xs__6308__auto__);
var map__40666__$1 = cljs.core.__destructure_map(map__40666);
var src = map__40666__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40666__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40666__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4607__auto__ = ((function (s__40653__$1,map__40666,map__40666__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__40647,map__40647__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__40651_$_iter__40654(s__40655){
return (new cljs.core.LazySeq(null,((function (s__40653__$1,map__40666,map__40666__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__40647,map__40647__$1,msg,info,reload_info){
return (function (){
var s__40655__$1 = s__40655;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__40655__$1);
if(temp__5753__auto____$1){
var s__40655__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__40655__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__40655__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__40657 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__40656 = (0);
while(true){
if((i__40656 < size__4610__auto__)){
var warning = cljs.core._nth(c__4609__auto__,i__40656);
cljs.core.chunk_append(b__40657,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__40847 = (i__40656 + (1));
i__40656 = G__40847;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__40657),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__40651_$_iter__40654(cljs.core.chunk_rest(s__40655__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__40657),null);
}
} else {
var warning = cljs.core.first(s__40655__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__40651_$_iter__40654(cljs.core.rest(s__40655__$2)));
}
} else {
return null;
}
break;
}
});})(s__40653__$1,map__40666,map__40666__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__40647,map__40647__$1,msg,info,reload_info))
,null,null));
});})(s__40653__$1,map__40666,map__40666__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__40647,map__40647__$1,msg,info,reload_info))
;
var fs__4608__auto__ = cljs.core.seq(iterys__4607__auto__(warnings));
if(fs__4608__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4608__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__40651(cljs.core.rest(s__40653__$1)));
} else {
var G__40848 = cljs.core.rest(s__40653__$1);
s__40653__$1 = G__40848;
continue;
}
} else {
var G__40849 = cljs.core.rest(s__40653__$1);
s__40653__$1 = G__40849;
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
var seq__40672_40852 = cljs.core.seq(warnings);
var chunk__40673_40853 = null;
var count__40674_40854 = (0);
var i__40675_40855 = (0);
while(true){
if((i__40675_40855 < count__40674_40854)){
var map__40681_40856 = chunk__40673_40853.cljs$core$IIndexed$_nth$arity$2(null,i__40675_40855);
var map__40681_40857__$1 = cljs.core.__destructure_map(map__40681_40856);
var w_40858 = map__40681_40857__$1;
var msg_40859__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40681_40857__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_40860 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40681_40857__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_40861 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40681_40857__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_40862 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40681_40857__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_40862)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_40860),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_40861),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_40859__$1)].join(''));


var G__40863 = seq__40672_40852;
var G__40864 = chunk__40673_40853;
var G__40865 = count__40674_40854;
var G__40866 = (i__40675_40855 + (1));
seq__40672_40852 = G__40863;
chunk__40673_40853 = G__40864;
count__40674_40854 = G__40865;
i__40675_40855 = G__40866;
continue;
} else {
var temp__5753__auto___40867 = cljs.core.seq(seq__40672_40852);
if(temp__5753__auto___40867){
var seq__40672_40868__$1 = temp__5753__auto___40867;
if(cljs.core.chunked_seq_QMARK_(seq__40672_40868__$1)){
var c__4638__auto___40869 = cljs.core.chunk_first(seq__40672_40868__$1);
var G__40870 = cljs.core.chunk_rest(seq__40672_40868__$1);
var G__40871 = c__4638__auto___40869;
var G__40872 = cljs.core.count(c__4638__auto___40869);
var G__40873 = (0);
seq__40672_40852 = G__40870;
chunk__40673_40853 = G__40871;
count__40674_40854 = G__40872;
i__40675_40855 = G__40873;
continue;
} else {
var map__40683_40874 = cljs.core.first(seq__40672_40868__$1);
var map__40683_40875__$1 = cljs.core.__destructure_map(map__40683_40874);
var w_40876 = map__40683_40875__$1;
var msg_40877__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40683_40875__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_40878 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40683_40875__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_40879 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40683_40875__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_40880 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40683_40875__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_40880)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_40878),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_40879),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_40877__$1)].join(''));


var G__40882 = cljs.core.next(seq__40672_40868__$1);
var G__40883 = null;
var G__40884 = (0);
var G__40885 = (0);
seq__40672_40852 = G__40882;
chunk__40673_40853 = G__40883;
count__40674_40854 = G__40884;
i__40675_40855 = G__40885;
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

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__40644_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__40644_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__40691){
var map__40692 = p__40691;
var map__40692__$1 = cljs.core.__destructure_map(map__40692);
var msg = map__40692__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40692__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__40693 = cljs.core.seq(updates);
var chunk__40695 = null;
var count__40696 = (0);
var i__40697 = (0);
while(true){
if((i__40697 < count__40696)){
var path = chunk__40695.cljs$core$IIndexed$_nth$arity$2(null,i__40697);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__40735_40889 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__40739_40890 = null;
var count__40740_40891 = (0);
var i__40741_40892 = (0);
while(true){
if((i__40741_40892 < count__40740_40891)){
var node_40893 = chunk__40739_40890.cljs$core$IIndexed$_nth$arity$2(null,i__40741_40892);
if(cljs.core.not(node_40893.shadow$old)){
var path_match_40894 = shadow.cljs.devtools.client.browser.match_paths(node_40893.getAttribute("href"),path);
if(cljs.core.truth_(path_match_40894)){
var new_link_40895 = (function (){var G__40749 = node_40893.cloneNode(true);
G__40749.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_40894),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__40749;
})();
(node_40893.shadow$old = true);

(new_link_40895.onload = ((function (seq__40735_40889,chunk__40739_40890,count__40740_40891,i__40741_40892,seq__40693,chunk__40695,count__40696,i__40697,new_link_40895,path_match_40894,node_40893,path,map__40692,map__40692__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_40893);
});})(seq__40735_40889,chunk__40739_40890,count__40740_40891,i__40741_40892,seq__40693,chunk__40695,count__40696,i__40697,new_link_40895,path_match_40894,node_40893,path,map__40692,map__40692__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_40894], 0));

goog.dom.insertSiblingAfter(new_link_40895,node_40893);


var G__40896 = seq__40735_40889;
var G__40897 = chunk__40739_40890;
var G__40898 = count__40740_40891;
var G__40899 = (i__40741_40892 + (1));
seq__40735_40889 = G__40896;
chunk__40739_40890 = G__40897;
count__40740_40891 = G__40898;
i__40741_40892 = G__40899;
continue;
} else {
var G__40900 = seq__40735_40889;
var G__40901 = chunk__40739_40890;
var G__40902 = count__40740_40891;
var G__40903 = (i__40741_40892 + (1));
seq__40735_40889 = G__40900;
chunk__40739_40890 = G__40901;
count__40740_40891 = G__40902;
i__40741_40892 = G__40903;
continue;
}
} else {
var G__40904 = seq__40735_40889;
var G__40905 = chunk__40739_40890;
var G__40906 = count__40740_40891;
var G__40907 = (i__40741_40892 + (1));
seq__40735_40889 = G__40904;
chunk__40739_40890 = G__40905;
count__40740_40891 = G__40906;
i__40741_40892 = G__40907;
continue;
}
} else {
var temp__5753__auto___40908 = cljs.core.seq(seq__40735_40889);
if(temp__5753__auto___40908){
var seq__40735_40909__$1 = temp__5753__auto___40908;
if(cljs.core.chunked_seq_QMARK_(seq__40735_40909__$1)){
var c__4638__auto___40910 = cljs.core.chunk_first(seq__40735_40909__$1);
var G__40911 = cljs.core.chunk_rest(seq__40735_40909__$1);
var G__40912 = c__4638__auto___40910;
var G__40913 = cljs.core.count(c__4638__auto___40910);
var G__40914 = (0);
seq__40735_40889 = G__40911;
chunk__40739_40890 = G__40912;
count__40740_40891 = G__40913;
i__40741_40892 = G__40914;
continue;
} else {
var node_40915 = cljs.core.first(seq__40735_40909__$1);
if(cljs.core.not(node_40915.shadow$old)){
var path_match_40916 = shadow.cljs.devtools.client.browser.match_paths(node_40915.getAttribute("href"),path);
if(cljs.core.truth_(path_match_40916)){
var new_link_40917 = (function (){var G__40753 = node_40915.cloneNode(true);
G__40753.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_40916),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__40753;
})();
(node_40915.shadow$old = true);

(new_link_40917.onload = ((function (seq__40735_40889,chunk__40739_40890,count__40740_40891,i__40741_40892,seq__40693,chunk__40695,count__40696,i__40697,new_link_40917,path_match_40916,node_40915,seq__40735_40909__$1,temp__5753__auto___40908,path,map__40692,map__40692__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_40915);
});})(seq__40735_40889,chunk__40739_40890,count__40740_40891,i__40741_40892,seq__40693,chunk__40695,count__40696,i__40697,new_link_40917,path_match_40916,node_40915,seq__40735_40909__$1,temp__5753__auto___40908,path,map__40692,map__40692__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_40916], 0));

goog.dom.insertSiblingAfter(new_link_40917,node_40915);


var G__40918 = cljs.core.next(seq__40735_40909__$1);
var G__40919 = null;
var G__40920 = (0);
var G__40921 = (0);
seq__40735_40889 = G__40918;
chunk__40739_40890 = G__40919;
count__40740_40891 = G__40920;
i__40741_40892 = G__40921;
continue;
} else {
var G__40922 = cljs.core.next(seq__40735_40909__$1);
var G__40923 = null;
var G__40924 = (0);
var G__40925 = (0);
seq__40735_40889 = G__40922;
chunk__40739_40890 = G__40923;
count__40740_40891 = G__40924;
i__40741_40892 = G__40925;
continue;
}
} else {
var G__40926 = cljs.core.next(seq__40735_40909__$1);
var G__40927 = null;
var G__40928 = (0);
var G__40929 = (0);
seq__40735_40889 = G__40926;
chunk__40739_40890 = G__40927;
count__40740_40891 = G__40928;
i__40741_40892 = G__40929;
continue;
}
}
} else {
}
}
break;
}


var G__40930 = seq__40693;
var G__40931 = chunk__40695;
var G__40932 = count__40696;
var G__40933 = (i__40697 + (1));
seq__40693 = G__40930;
chunk__40695 = G__40931;
count__40696 = G__40932;
i__40697 = G__40933;
continue;
} else {
var G__40934 = seq__40693;
var G__40935 = chunk__40695;
var G__40936 = count__40696;
var G__40937 = (i__40697 + (1));
seq__40693 = G__40934;
chunk__40695 = G__40935;
count__40696 = G__40936;
i__40697 = G__40937;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__40693);
if(temp__5753__auto__){
var seq__40693__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40693__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__40693__$1);
var G__40938 = cljs.core.chunk_rest(seq__40693__$1);
var G__40939 = c__4638__auto__;
var G__40940 = cljs.core.count(c__4638__auto__);
var G__40941 = (0);
seq__40693 = G__40938;
chunk__40695 = G__40939;
count__40696 = G__40940;
i__40697 = G__40941;
continue;
} else {
var path = cljs.core.first(seq__40693__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__40754_40942 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__40758_40943 = null;
var count__40759_40944 = (0);
var i__40760_40945 = (0);
while(true){
if((i__40760_40945 < count__40759_40944)){
var node_40946 = chunk__40758_40943.cljs$core$IIndexed$_nth$arity$2(null,i__40760_40945);
if(cljs.core.not(node_40946.shadow$old)){
var path_match_40947 = shadow.cljs.devtools.client.browser.match_paths(node_40946.getAttribute("href"),path);
if(cljs.core.truth_(path_match_40947)){
var new_link_40949 = (function (){var G__40766 = node_40946.cloneNode(true);
G__40766.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_40947),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__40766;
})();
(node_40946.shadow$old = true);

(new_link_40949.onload = ((function (seq__40754_40942,chunk__40758_40943,count__40759_40944,i__40760_40945,seq__40693,chunk__40695,count__40696,i__40697,new_link_40949,path_match_40947,node_40946,path,seq__40693__$1,temp__5753__auto__,map__40692,map__40692__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_40946);
});})(seq__40754_40942,chunk__40758_40943,count__40759_40944,i__40760_40945,seq__40693,chunk__40695,count__40696,i__40697,new_link_40949,path_match_40947,node_40946,path,seq__40693__$1,temp__5753__auto__,map__40692,map__40692__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_40947], 0));

goog.dom.insertSiblingAfter(new_link_40949,node_40946);


var G__40955 = seq__40754_40942;
var G__40956 = chunk__40758_40943;
var G__40957 = count__40759_40944;
var G__40958 = (i__40760_40945 + (1));
seq__40754_40942 = G__40955;
chunk__40758_40943 = G__40956;
count__40759_40944 = G__40957;
i__40760_40945 = G__40958;
continue;
} else {
var G__40959 = seq__40754_40942;
var G__40960 = chunk__40758_40943;
var G__40961 = count__40759_40944;
var G__40962 = (i__40760_40945 + (1));
seq__40754_40942 = G__40959;
chunk__40758_40943 = G__40960;
count__40759_40944 = G__40961;
i__40760_40945 = G__40962;
continue;
}
} else {
var G__40963 = seq__40754_40942;
var G__40964 = chunk__40758_40943;
var G__40965 = count__40759_40944;
var G__40966 = (i__40760_40945 + (1));
seq__40754_40942 = G__40963;
chunk__40758_40943 = G__40964;
count__40759_40944 = G__40965;
i__40760_40945 = G__40966;
continue;
}
} else {
var temp__5753__auto___40971__$1 = cljs.core.seq(seq__40754_40942);
if(temp__5753__auto___40971__$1){
var seq__40754_40972__$1 = temp__5753__auto___40971__$1;
if(cljs.core.chunked_seq_QMARK_(seq__40754_40972__$1)){
var c__4638__auto___40985 = cljs.core.chunk_first(seq__40754_40972__$1);
var G__40989 = cljs.core.chunk_rest(seq__40754_40972__$1);
var G__40990 = c__4638__auto___40985;
var G__40991 = cljs.core.count(c__4638__auto___40985);
var G__40992 = (0);
seq__40754_40942 = G__40989;
chunk__40758_40943 = G__40990;
count__40759_40944 = G__40991;
i__40760_40945 = G__40992;
continue;
} else {
var node_40993 = cljs.core.first(seq__40754_40972__$1);
if(cljs.core.not(node_40993.shadow$old)){
var path_match_40996 = shadow.cljs.devtools.client.browser.match_paths(node_40993.getAttribute("href"),path);
if(cljs.core.truth_(path_match_40996)){
var new_link_40997 = (function (){var G__40767 = node_40993.cloneNode(true);
G__40767.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_40996),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__40767;
})();
(node_40993.shadow$old = true);

(new_link_40997.onload = ((function (seq__40754_40942,chunk__40758_40943,count__40759_40944,i__40760_40945,seq__40693,chunk__40695,count__40696,i__40697,new_link_40997,path_match_40996,node_40993,seq__40754_40972__$1,temp__5753__auto___40971__$1,path,seq__40693__$1,temp__5753__auto__,map__40692,map__40692__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_40993);
});})(seq__40754_40942,chunk__40758_40943,count__40759_40944,i__40760_40945,seq__40693,chunk__40695,count__40696,i__40697,new_link_40997,path_match_40996,node_40993,seq__40754_40972__$1,temp__5753__auto___40971__$1,path,seq__40693__$1,temp__5753__auto__,map__40692,map__40692__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_40996], 0));

goog.dom.insertSiblingAfter(new_link_40997,node_40993);


var G__41000 = cljs.core.next(seq__40754_40972__$1);
var G__41001 = null;
var G__41002 = (0);
var G__41003 = (0);
seq__40754_40942 = G__41000;
chunk__40758_40943 = G__41001;
count__40759_40944 = G__41002;
i__40760_40945 = G__41003;
continue;
} else {
var G__41004 = cljs.core.next(seq__40754_40972__$1);
var G__41005 = null;
var G__41006 = (0);
var G__41007 = (0);
seq__40754_40942 = G__41004;
chunk__40758_40943 = G__41005;
count__40759_40944 = G__41006;
i__40760_40945 = G__41007;
continue;
}
} else {
var G__41008 = cljs.core.next(seq__40754_40972__$1);
var G__41009 = null;
var G__41010 = (0);
var G__41011 = (0);
seq__40754_40942 = G__41008;
chunk__40758_40943 = G__41009;
count__40759_40944 = G__41010;
i__40760_40945 = G__41011;
continue;
}
}
} else {
}
}
break;
}


var G__41012 = cljs.core.next(seq__40693__$1);
var G__41013 = null;
var G__41014 = (0);
var G__41015 = (0);
seq__40693 = G__41012;
chunk__40695 = G__41013;
count__40696 = G__41014;
i__40697 = G__41015;
continue;
} else {
var G__41016 = cljs.core.next(seq__40693__$1);
var G__41017 = null;
var G__41018 = (0);
var G__41019 = (0);
seq__40693 = G__41016;
chunk__40695 = G__41017;
count__40696 = G__41018;
i__40697 = G__41019;
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
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__40769){
var map__40770 = p__40769;
var map__40770__$1 = cljs.core.__destructure_map(map__40770);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40770__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
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

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__40778){
var map__40779 = p__40778;
var map__40779__$1 = cljs.core.__destructure_map(map__40779);
var _ = map__40779__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40779__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__40780,done,error){
var map__40781 = p__40780;
var map__40781__$1 = cljs.core.__destructure_map(map__40781);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40781__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__40784,done,error){
var map__40786 = p__40784;
var map__40786__$1 = cljs.core.__destructure_map(map__40786);
var msg = map__40786__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40786__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40786__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40786__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__40787){
var map__40788 = p__40787;
var map__40788__$1 = cljs.core.__destructure_map(map__40788);
var src = map__40788__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40788__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4210__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4210__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4210__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__40789 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__40789) : done.call(null,G__40789));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__40790){
var map__40791 = p__40790;
var map__40791__$1 = cljs.core.__destructure_map(map__40791);
var msg__$1 = map__40791__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40791__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e40792){var ex = e40792;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__40793){
var map__40794 = p__40793;
var map__40794__$1 = cljs.core.__destructure_map(map__40794);
var env = map__40794__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40794__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
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
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__40799){
var map__40800 = p__40799;
var map__40800__$1 = cljs.core.__destructure_map(map__40800);
var msg = map__40800__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40800__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
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
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__40805){
var map__40807 = p__40805;
var map__40807__$1 = cljs.core.__destructure_map(map__40807);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40807__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40807__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
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
}),(function (p__40808){
var map__40809 = p__40808;
var map__40809__$1 = cljs.core.__destructure_map(map__40809);
var svc = map__40809__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40809__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
