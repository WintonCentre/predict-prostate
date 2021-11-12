goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___40612 = arguments.length;
var i__4737__auto___40613 = (0);
while(true){
if((i__4737__auto___40613 < len__4736__auto___40612)){
args__4742__auto__.push((arguments[i__4737__auto___40613]));

var G__40614 = (i__4737__auto___40613 + (1));
i__4737__auto___40613 = G__40614;
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq40334){
var G__40335 = cljs.core.first(seq40334);
var seq40334__$1 = cljs.core.next(seq40334);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40335,seq40334__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__40342 = cljs.core.seq(sources);
var chunk__40343 = null;
var count__40344 = (0);
var i__40345 = (0);
while(true){
if((i__40345 < count__40344)){
var map__40356 = chunk__40343.cljs$core$IIndexed$_nth$arity$2(null,i__40345);
var map__40356__$1 = (((((!((map__40356 == null))))?(((((map__40356.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40356.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40356):map__40356);
var src = map__40356__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40356__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40356__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40356__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40356__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e40359){var e_40616 = e40359;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_40616);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_40616.message)].join('')));
}

var G__40617 = seq__40342;
var G__40618 = chunk__40343;
var G__40619 = count__40344;
var G__40620 = (i__40345 + (1));
seq__40342 = G__40617;
chunk__40343 = G__40618;
count__40344 = G__40619;
i__40345 = G__40620;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__40342);
if(temp__5735__auto__){
var seq__40342__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40342__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__40342__$1);
var G__40621 = cljs.core.chunk_rest(seq__40342__$1);
var G__40622 = c__4556__auto__;
var G__40623 = cljs.core.count(c__4556__auto__);
var G__40624 = (0);
seq__40342 = G__40621;
chunk__40343 = G__40622;
count__40344 = G__40623;
i__40345 = G__40624;
continue;
} else {
var map__40360 = cljs.core.first(seq__40342__$1);
var map__40360__$1 = (((((!((map__40360 == null))))?(((((map__40360.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40360.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40360):map__40360);
var src = map__40360__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40360__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40360__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40360__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40360__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e40364){var e_40625 = e40364;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_40625);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_40625.message)].join('')));
}

var G__40626 = cljs.core.next(seq__40342__$1);
var G__40627 = null;
var G__40628 = (0);
var G__40629 = (0);
seq__40342 = G__40626;
chunk__40343 = G__40627;
count__40344 = G__40628;
i__40345 = G__40629;
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
var seq__40371 = cljs.core.seq(js_requires);
var chunk__40372 = null;
var count__40373 = (0);
var i__40374 = (0);
while(true){
if((i__40374 < count__40373)){
var js_ns = chunk__40372.cljs$core$IIndexed$_nth$arity$2(null,i__40374);
var require_str_40630 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_40630);


var G__40631 = seq__40371;
var G__40632 = chunk__40372;
var G__40633 = count__40373;
var G__40634 = (i__40374 + (1));
seq__40371 = G__40631;
chunk__40372 = G__40632;
count__40373 = G__40633;
i__40374 = G__40634;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__40371);
if(temp__5735__auto__){
var seq__40371__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40371__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__40371__$1);
var G__40635 = cljs.core.chunk_rest(seq__40371__$1);
var G__40636 = c__4556__auto__;
var G__40637 = cljs.core.count(c__4556__auto__);
var G__40638 = (0);
seq__40371 = G__40635;
chunk__40372 = G__40636;
count__40373 = G__40637;
i__40374 = G__40638;
continue;
} else {
var js_ns = cljs.core.first(seq__40371__$1);
var require_str_40639 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_40639);


var G__40640 = cljs.core.next(seq__40371__$1);
var G__40641 = null;
var G__40642 = (0);
var G__40643 = (0);
seq__40371 = G__40640;
chunk__40372 = G__40641;
count__40373 = G__40642;
i__40374 = G__40643;
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
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__40392(s__40393){
return (new cljs.core.LazySeq(null,(function (){
var s__40393__$1 = s__40393;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__40393__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__40398 = cljs.core.first(xs__6292__auto__);
var map__40398__$1 = (((((!((map__40398 == null))))?(((((map__40398.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40398.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40398):map__40398);
var src = map__40398__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40398__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40398__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4525__auto__ = ((function (s__40393__$1,map__40398,map__40398__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__40387,map__40387__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__40392_$_iter__40394(s__40395){
return (new cljs.core.LazySeq(null,((function (s__40393__$1,map__40398,map__40398__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__40387,map__40387__$1,msg,info,reload_info){
return (function (){
var s__40395__$1 = s__40395;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__40395__$1);
if(temp__5735__auto____$1){
var s__40395__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__40395__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__40395__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__40397 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__40396 = (0);
while(true){
if((i__40396 < size__4528__auto__)){
var warning = cljs.core._nth(c__4527__auto__,i__40396);
cljs.core.chunk_append(b__40397,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__40646 = (i__40396 + (1));
i__40396 = G__40646;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__40397),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__40392_$_iter__40394(cljs.core.chunk_rest(s__40395__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__40397),null);
}
} else {
var warning = cljs.core.first(s__40395__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__40392_$_iter__40394(cljs.core.rest(s__40395__$2)));
}
} else {
return null;
}
break;
}
});})(s__40393__$1,map__40398,map__40398__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__40387,map__40387__$1,msg,info,reload_info))
,null,null));
});})(s__40393__$1,map__40398,map__40398__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__40387,map__40387__$1,msg,info,reload_info))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(warnings));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__40392(cljs.core.rest(s__40393__$1)));
} else {
var G__40650 = cljs.core.rest(s__40393__$1);
s__40393__$1 = G__40650;
continue;
}
} else {
var G__40651 = cljs.core.rest(s__40393__$1);
s__40393__$1 = G__40651;
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
var seq__40402_40653 = cljs.core.seq(warnings);
var chunk__40403_40654 = null;
var count__40404_40655 = (0);
var i__40406_40656 = (0);
while(true){
if((i__40406_40656 < count__40404_40655)){
var map__40411_40657 = chunk__40403_40654.cljs$core$IIndexed$_nth$arity$2(null,i__40406_40656);
var map__40411_40658__$1 = (((((!((map__40411_40657 == null))))?(((((map__40411_40657.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40411_40657.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40411_40657):map__40411_40657);
var w_40659 = map__40411_40658__$1;
var msg_40660__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40411_40658__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_40661 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40411_40658__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_40662 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40411_40658__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_40663 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40411_40658__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_40663)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_40661),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_40662),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_40660__$1)].join(''));


var G__40664 = seq__40402_40653;
var G__40665 = chunk__40403_40654;
var G__40666 = count__40404_40655;
var G__40667 = (i__40406_40656 + (1));
seq__40402_40653 = G__40664;
chunk__40403_40654 = G__40665;
count__40404_40655 = G__40666;
i__40406_40656 = G__40667;
continue;
} else {
var temp__5735__auto___40668 = cljs.core.seq(seq__40402_40653);
if(temp__5735__auto___40668){
var seq__40402_40669__$1 = temp__5735__auto___40668;
if(cljs.core.chunked_seq_QMARK_(seq__40402_40669__$1)){
var c__4556__auto___40670 = cljs.core.chunk_first(seq__40402_40669__$1);
var G__40671 = cljs.core.chunk_rest(seq__40402_40669__$1);
var G__40672 = c__4556__auto___40670;
var G__40673 = cljs.core.count(c__4556__auto___40670);
var G__40674 = (0);
seq__40402_40653 = G__40671;
chunk__40403_40654 = G__40672;
count__40404_40655 = G__40673;
i__40406_40656 = G__40674;
continue;
} else {
var map__40419_40675 = cljs.core.first(seq__40402_40669__$1);
var map__40419_40676__$1 = (((((!((map__40419_40675 == null))))?(((((map__40419_40675.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40419_40675.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40419_40675):map__40419_40675);
var w_40677 = map__40419_40676__$1;
var msg_40678__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40419_40676__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_40679 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40419_40676__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_40680 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40419_40676__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_40681 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40419_40676__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_40681)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_40679),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_40680),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_40678__$1)].join(''));


var G__40682 = cljs.core.next(seq__40402_40669__$1);
var G__40683 = null;
var G__40684 = (0);
var G__40685 = (0);
seq__40402_40653 = G__40682;
chunk__40403_40654 = G__40683;
count__40404_40655 = G__40684;
i__40406_40656 = G__40685;
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

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__40381_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__40381_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__40421){
var map__40422 = p__40421;
var map__40422__$1 = (((((!((map__40422 == null))))?(((((map__40422.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40422.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40422):map__40422);
var msg = map__40422__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40422__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__40425 = cljs.core.seq(updates);
var chunk__40427 = null;
var count__40428 = (0);
var i__40429 = (0);
while(true){
if((i__40429 < count__40428)){
var path = chunk__40427.cljs$core$IIndexed$_nth$arity$2(null,i__40429);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__40515_40686 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__40519_40687 = null;
var count__40520_40688 = (0);
var i__40521_40689 = (0);
while(true){
if((i__40521_40689 < count__40520_40688)){
var node_40690 = chunk__40519_40687.cljs$core$IIndexed$_nth$arity$2(null,i__40521_40689);
if(cljs.core.not(node_40690.shadow$old)){
var path_match_40691 = shadow.cljs.devtools.client.browser.match_paths(node_40690.getAttribute("href"),path);
if(cljs.core.truth_(path_match_40691)){
var new_link_40692 = (function (){var G__40539 = node_40690.cloneNode(true);
G__40539.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_40691),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__40539;
})();
(node_40690.shadow$old = true);

(new_link_40692.onload = ((function (seq__40515_40686,chunk__40519_40687,count__40520_40688,i__40521_40689,seq__40425,chunk__40427,count__40428,i__40429,new_link_40692,path_match_40691,node_40690,path,map__40422,map__40422__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_40690);
});})(seq__40515_40686,chunk__40519_40687,count__40520_40688,i__40521_40689,seq__40425,chunk__40427,count__40428,i__40429,new_link_40692,path_match_40691,node_40690,path,map__40422,map__40422__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_40691], 0));

goog.dom.insertSiblingAfter(new_link_40692,node_40690);


var G__40693 = seq__40515_40686;
var G__40694 = chunk__40519_40687;
var G__40695 = count__40520_40688;
var G__40696 = (i__40521_40689 + (1));
seq__40515_40686 = G__40693;
chunk__40519_40687 = G__40694;
count__40520_40688 = G__40695;
i__40521_40689 = G__40696;
continue;
} else {
var G__40697 = seq__40515_40686;
var G__40698 = chunk__40519_40687;
var G__40699 = count__40520_40688;
var G__40700 = (i__40521_40689 + (1));
seq__40515_40686 = G__40697;
chunk__40519_40687 = G__40698;
count__40520_40688 = G__40699;
i__40521_40689 = G__40700;
continue;
}
} else {
var G__40701 = seq__40515_40686;
var G__40702 = chunk__40519_40687;
var G__40703 = count__40520_40688;
var G__40704 = (i__40521_40689 + (1));
seq__40515_40686 = G__40701;
chunk__40519_40687 = G__40702;
count__40520_40688 = G__40703;
i__40521_40689 = G__40704;
continue;
}
} else {
var temp__5735__auto___40705 = cljs.core.seq(seq__40515_40686);
if(temp__5735__auto___40705){
var seq__40515_40706__$1 = temp__5735__auto___40705;
if(cljs.core.chunked_seq_QMARK_(seq__40515_40706__$1)){
var c__4556__auto___40707 = cljs.core.chunk_first(seq__40515_40706__$1);
var G__40708 = cljs.core.chunk_rest(seq__40515_40706__$1);
var G__40709 = c__4556__auto___40707;
var G__40710 = cljs.core.count(c__4556__auto___40707);
var G__40711 = (0);
seq__40515_40686 = G__40708;
chunk__40519_40687 = G__40709;
count__40520_40688 = G__40710;
i__40521_40689 = G__40711;
continue;
} else {
var node_40712 = cljs.core.first(seq__40515_40706__$1);
if(cljs.core.not(node_40712.shadow$old)){
var path_match_40713 = shadow.cljs.devtools.client.browser.match_paths(node_40712.getAttribute("href"),path);
if(cljs.core.truth_(path_match_40713)){
var new_link_40714 = (function (){var G__40541 = node_40712.cloneNode(true);
G__40541.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_40713),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__40541;
})();
(node_40712.shadow$old = true);

(new_link_40714.onload = ((function (seq__40515_40686,chunk__40519_40687,count__40520_40688,i__40521_40689,seq__40425,chunk__40427,count__40428,i__40429,new_link_40714,path_match_40713,node_40712,seq__40515_40706__$1,temp__5735__auto___40705,path,map__40422,map__40422__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_40712);
});})(seq__40515_40686,chunk__40519_40687,count__40520_40688,i__40521_40689,seq__40425,chunk__40427,count__40428,i__40429,new_link_40714,path_match_40713,node_40712,seq__40515_40706__$1,temp__5735__auto___40705,path,map__40422,map__40422__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_40713], 0));

goog.dom.insertSiblingAfter(new_link_40714,node_40712);


var G__40715 = cljs.core.next(seq__40515_40706__$1);
var G__40716 = null;
var G__40717 = (0);
var G__40718 = (0);
seq__40515_40686 = G__40715;
chunk__40519_40687 = G__40716;
count__40520_40688 = G__40717;
i__40521_40689 = G__40718;
continue;
} else {
var G__40719 = cljs.core.next(seq__40515_40706__$1);
var G__40720 = null;
var G__40721 = (0);
var G__40722 = (0);
seq__40515_40686 = G__40719;
chunk__40519_40687 = G__40720;
count__40520_40688 = G__40721;
i__40521_40689 = G__40722;
continue;
}
} else {
var G__40723 = cljs.core.next(seq__40515_40706__$1);
var G__40724 = null;
var G__40725 = (0);
var G__40726 = (0);
seq__40515_40686 = G__40723;
chunk__40519_40687 = G__40724;
count__40520_40688 = G__40725;
i__40521_40689 = G__40726;
continue;
}
}
} else {
}
}
break;
}


var G__40727 = seq__40425;
var G__40728 = chunk__40427;
var G__40729 = count__40428;
var G__40730 = (i__40429 + (1));
seq__40425 = G__40727;
chunk__40427 = G__40728;
count__40428 = G__40729;
i__40429 = G__40730;
continue;
} else {
var G__40731 = seq__40425;
var G__40732 = chunk__40427;
var G__40733 = count__40428;
var G__40734 = (i__40429 + (1));
seq__40425 = G__40731;
chunk__40427 = G__40732;
count__40428 = G__40733;
i__40429 = G__40734;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__40425);
if(temp__5735__auto__){
var seq__40425__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40425__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__40425__$1);
var G__40735 = cljs.core.chunk_rest(seq__40425__$1);
var G__40736 = c__4556__auto__;
var G__40737 = cljs.core.count(c__4556__auto__);
var G__40738 = (0);
seq__40425 = G__40735;
chunk__40427 = G__40736;
count__40428 = G__40737;
i__40429 = G__40738;
continue;
} else {
var path = cljs.core.first(seq__40425__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__40549_40739 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__40553_40740 = null;
var count__40554_40741 = (0);
var i__40555_40742 = (0);
while(true){
if((i__40555_40742 < count__40554_40741)){
var node_40744 = chunk__40553_40740.cljs$core$IIndexed$_nth$arity$2(null,i__40555_40742);
if(cljs.core.not(node_40744.shadow$old)){
var path_match_40745 = shadow.cljs.devtools.client.browser.match_paths(node_40744.getAttribute("href"),path);
if(cljs.core.truth_(path_match_40745)){
var new_link_40747 = (function (){var G__40562 = node_40744.cloneNode(true);
G__40562.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_40745),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__40562;
})();
(node_40744.shadow$old = true);

(new_link_40747.onload = ((function (seq__40549_40739,chunk__40553_40740,count__40554_40741,i__40555_40742,seq__40425,chunk__40427,count__40428,i__40429,new_link_40747,path_match_40745,node_40744,path,seq__40425__$1,temp__5735__auto__,map__40422,map__40422__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_40744);
});})(seq__40549_40739,chunk__40553_40740,count__40554_40741,i__40555_40742,seq__40425,chunk__40427,count__40428,i__40429,new_link_40747,path_match_40745,node_40744,path,seq__40425__$1,temp__5735__auto__,map__40422,map__40422__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_40745], 0));

goog.dom.insertSiblingAfter(new_link_40747,node_40744);


var G__40748 = seq__40549_40739;
var G__40749 = chunk__40553_40740;
var G__40750 = count__40554_40741;
var G__40751 = (i__40555_40742 + (1));
seq__40549_40739 = G__40748;
chunk__40553_40740 = G__40749;
count__40554_40741 = G__40750;
i__40555_40742 = G__40751;
continue;
} else {
var G__40752 = seq__40549_40739;
var G__40753 = chunk__40553_40740;
var G__40754 = count__40554_40741;
var G__40755 = (i__40555_40742 + (1));
seq__40549_40739 = G__40752;
chunk__40553_40740 = G__40753;
count__40554_40741 = G__40754;
i__40555_40742 = G__40755;
continue;
}
} else {
var G__40756 = seq__40549_40739;
var G__40757 = chunk__40553_40740;
var G__40758 = count__40554_40741;
var G__40759 = (i__40555_40742 + (1));
seq__40549_40739 = G__40756;
chunk__40553_40740 = G__40757;
count__40554_40741 = G__40758;
i__40555_40742 = G__40759;
continue;
}
} else {
var temp__5735__auto___40760__$1 = cljs.core.seq(seq__40549_40739);
if(temp__5735__auto___40760__$1){
var seq__40549_40762__$1 = temp__5735__auto___40760__$1;
if(cljs.core.chunked_seq_QMARK_(seq__40549_40762__$1)){
var c__4556__auto___40763 = cljs.core.chunk_first(seq__40549_40762__$1);
var G__40764 = cljs.core.chunk_rest(seq__40549_40762__$1);
var G__40765 = c__4556__auto___40763;
var G__40766 = cljs.core.count(c__4556__auto___40763);
var G__40767 = (0);
seq__40549_40739 = G__40764;
chunk__40553_40740 = G__40765;
count__40554_40741 = G__40766;
i__40555_40742 = G__40767;
continue;
} else {
var node_40769 = cljs.core.first(seq__40549_40762__$1);
if(cljs.core.not(node_40769.shadow$old)){
var path_match_40771 = shadow.cljs.devtools.client.browser.match_paths(node_40769.getAttribute("href"),path);
if(cljs.core.truth_(path_match_40771)){
var new_link_40772 = (function (){var G__40563 = node_40769.cloneNode(true);
G__40563.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_40771),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__40563;
})();
(node_40769.shadow$old = true);

(new_link_40772.onload = ((function (seq__40549_40739,chunk__40553_40740,count__40554_40741,i__40555_40742,seq__40425,chunk__40427,count__40428,i__40429,new_link_40772,path_match_40771,node_40769,seq__40549_40762__$1,temp__5735__auto___40760__$1,path,seq__40425__$1,temp__5735__auto__,map__40422,map__40422__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_40769);
});})(seq__40549_40739,chunk__40553_40740,count__40554_40741,i__40555_40742,seq__40425,chunk__40427,count__40428,i__40429,new_link_40772,path_match_40771,node_40769,seq__40549_40762__$1,temp__5735__auto___40760__$1,path,seq__40425__$1,temp__5735__auto__,map__40422,map__40422__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_40771], 0));

goog.dom.insertSiblingAfter(new_link_40772,node_40769);


var G__40774 = cljs.core.next(seq__40549_40762__$1);
var G__40775 = null;
var G__40776 = (0);
var G__40777 = (0);
seq__40549_40739 = G__40774;
chunk__40553_40740 = G__40775;
count__40554_40741 = G__40776;
i__40555_40742 = G__40777;
continue;
} else {
var G__40778 = cljs.core.next(seq__40549_40762__$1);
var G__40779 = null;
var G__40780 = (0);
var G__40781 = (0);
seq__40549_40739 = G__40778;
chunk__40553_40740 = G__40779;
count__40554_40741 = G__40780;
i__40555_40742 = G__40781;
continue;
}
} else {
var G__40782 = cljs.core.next(seq__40549_40762__$1);
var G__40783 = null;
var G__40784 = (0);
var G__40785 = (0);
seq__40549_40739 = G__40782;
chunk__40553_40740 = G__40783;
count__40554_40741 = G__40784;
i__40555_40742 = G__40785;
continue;
}
}
} else {
}
}
break;
}


var G__40786 = cljs.core.next(seq__40425__$1);
var G__40787 = null;
var G__40788 = (0);
var G__40789 = (0);
seq__40425 = G__40786;
chunk__40427 = G__40787;
count__40428 = G__40788;
i__40429 = G__40789;
continue;
} else {
var G__40790 = cljs.core.next(seq__40425__$1);
var G__40791 = null;
var G__40792 = (0);
var G__40793 = (0);
seq__40425 = G__40790;
chunk__40427 = G__40791;
count__40428 = G__40792;
i__40429 = G__40793;
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
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__40565){
var map__40566 = p__40565;
var map__40566__$1 = (((((!((map__40566 == null))))?(((((map__40566.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40566.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40566):map__40566);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40566__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
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

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__40572){
var map__40573 = p__40572;
var map__40573__$1 = (((((!((map__40573 == null))))?(((((map__40573.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40573.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40573):map__40573);
var _ = map__40573__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40573__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__40575,done,error){
var map__40576 = p__40575;
var map__40576__$1 = (((((!((map__40576 == null))))?(((((map__40576.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40576.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40576):map__40576);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40576__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__40578,done,error){
var map__40579 = p__40578;
var map__40579__$1 = (((((!((map__40579 == null))))?(((((map__40579.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40579.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40579):map__40579);
var msg = map__40579__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40579__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40579__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40579__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__40581){
var map__40582 = p__40581;
var map__40582__$1 = (((((!((map__40582 == null))))?(((((map__40582.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40582.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40582):map__40582);
var src = map__40582__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40582__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4115__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4115__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__40584 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__40584) : done.call(null,G__40584));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__40585){
var map__40586 = p__40585;
var map__40586__$1 = (((((!((map__40586 == null))))?(((((map__40586.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40586.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40586):map__40586);
var msg__$1 = map__40586__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40586__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e40590){var ex = e40590;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__40591){
var map__40592 = p__40591;
var map__40592__$1 = (((((!((map__40592 == null))))?(((((map__40592.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40592.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40592):map__40592);
var env = map__40592__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40592__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
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
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__40598){
var map__40599 = p__40598;
var map__40599__$1 = (((((!((map__40599 == null))))?(((((map__40599.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40599.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40599):map__40599);
var msg = map__40599__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40599__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
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
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__40601){
var map__40602 = p__40601;
var map__40602__$1 = (((((!((map__40602 == null))))?(((((map__40602.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40602.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40602):map__40602);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40602__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40602__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
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
}),(function (p__40606){
var map__40607 = p__40606;
var map__40607__$1 = (((((!((map__40607 == null))))?(((((map__40607.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40607.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40607):map__40607);
var svc = map__40607__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40607__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
