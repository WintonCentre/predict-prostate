goog.provide('translations.tranny_api');
translations.tranny_api.server_url = "http://localhost:1337/";
translations.tranny_api.base_url = [translations.tranny_api.server_url,"api/"].join('');
translations.tranny_api.get_handler = (function translations$tranny_api$get_handler(response){
var clj_rsp = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(response,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var hit_count = cljs.core.count(clj_rsp);
var result = (function (){var pred__39287 = cljs.core._EQ_;
var expr__39288 = hit_count;
if(cljs.core.truth_((pred__39287.cljs$core$IFn$_invoke$arity$2 ? pred__39287.cljs$core$IFn$_invoke$arity$2((0),expr__39288) : pred__39287.call(null,(0),expr__39288)))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["No results"], 0));
} else {
if(cljs.core.truth_((pred__39287.cljs$core$IFn$_invoke$arity$2 ? pred__39287.cljs$core$IFn$_invoke$arity$2((1),expr__39288) : pred__39287.call(null,(1),expr__39288)))){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.first(clj_rsp),"text");
} else {
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__39285_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__39285_SHARP_,"text");
}),clj_rsp);
}
}
})();
return result;
});
translations.tranny_api.ta = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
translations.tranny_api.post_handler = (function translations$tranny_api$post_handler(response){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["successful response",response], 0));
});
translations.tranny_api.error_handler = (function translations$tranny_api$error_handler(p__39293){
var map__39294 = p__39293;
var map__39294__$1 = (((((!((map__39294 == null))))?(((((map__39294.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39294.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39294):map__39294);
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39294__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39294__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
var response = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39294__$1,new cljs.core.Keyword(null,"response","response",-1068424192));
console.log(["something bad happened: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_text)].join(''));

if(cljs.core.truth_(response)){
return console.log(cljs.core.get.cljs$core$IFn$_invoke$arity$2(response,"message"));
} else {
return null;
}
});
/**
 * lookup key in tranny server. 3-arity variant for testing.
 */
translations.tranny_api.lookup_key = (function translations$tranny_api$lookup_key(var_args){
var G__39301 = arguments.length;
switch (G__39301) {
case 1:
return translations.tranny_api.lookup_key.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return translations.tranny_api.lookup_key.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(translations.tranny_api.lookup_key.cljs$core$IFn$_invoke$arity$1 = (function (key){
return translations.tranny_api.lookup_key.cljs$core$IFn$_invoke$arity$2([translations.tranny_api.base_url,"key/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),translations.tranny_api.get_handler,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),translations.tranny_api.error_handler], null));
}));

(translations.tranny_api.lookup_key.cljs$core$IFn$_invoke$arity$2 = (function (url,p__39306){
var map__39307 = p__39306;
var map__39307__$1 = (((((!((map__39307 == null))))?(((((map__39307.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39307.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39307):map__39307);
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39307__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
var error_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39307__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic(url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"handler","handler",-195596612),handler,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),error_handler,new cljs.core.Keyword(null,"mode","mode",654403691),"no-cors"], null)], 0));
}));

(translations.tranny_api.lookup_key.cljs$lang$maxFixedArity = 2);

/**
 * lookup language and key in tranny server
 */
translations.tranny_api.lookup_key_lang = (function translations$tranny_api$lookup_key_lang(key,lang){
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic([translations.tranny_api.base_url,"key/",cljs.core.name(key),"/lang/",cljs.core.name(lang)].join(''),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),translations.tranny_api.get_handler,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),translations.tranny_api.error_handler], null)], 0));
});
/**
 * generates a string representation of a namespaced keyword.
 *   :foo/bar -> ":foo/bar"
 *   :bar -> "bar"
 *   The inverse function to 'keyword'.
 */
translations.tranny_api.wordkey = (function translations$tranny_api$wordkey(key){
var ns_key = cljs.core.namespace(key);
return [(cljs.core.truth_(ns_key)?[ns_key,"/"].join(''):null),cljs.core.name(key)].join('');
});
/**
 * Update a key for a language with new text
 */
translations.tranny_api.upload_translation = (function translations$tranny_api$upload_translation(var_args){
var G__39310 = arguments.length;
switch (G__39310) {
case 3:
return translations.tranny_api.upload_translation.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return translations.tranny_api.upload_translation.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(translations.tranny_api.upload_translation.cljs$core$IFn$_invoke$arity$3 = (function (key,lang,text){
var url = [translations.tranny_api.base_url,"translation"].join('');
return translations.tranny_api.upload_translation.cljs$core$IFn$_invoke$arity$4(url,key,lang,text);
}));

(translations.tranny_api.upload_translation.cljs$core$IFn$_invoke$arity$4 = (function (url,key,lang,text){
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic(url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handler","handler",-195596612),translations.tranny_api.post_handler,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),translations.tranny_api.error_handler,new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),translations.tranny_api.wordkey(key),new cljs.core.Keyword(null,"lang","lang",-1819677104),cljs.core.str.cljs$core$IFn$_invoke$arity$1(lang),new cljs.core.Keyword(null,"text","text",-1790561697),cljs.core.str.cljs$core$IFn$_invoke$arity$1(text)], null),new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"json","json",1279968570)], null)], 0));
}));

(translations.tranny_api.upload_translation.cljs$lang$maxFixedArity = 4);

/**
 * Convert a relative endpoint url into an absolute address
 */
translations.tranny_api.end_point = (function translations$tranny_api$end_point(rel_url){
return [translations.tranny_api.base_url,cljs.core.str.cljs$core$IFn$_invoke$arity$1(rel_url)].join('');
});
/**
 * Update a key for a language with new text
 */
translations.tranny_api.delete_translation = (function translations$tranny_api$delete_translation(var_args){
var G__39315 = arguments.length;
switch (G__39315) {
case 2:
return translations.tranny_api.delete_translation.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return translations.tranny_api.delete_translation.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(translations.tranny_api.delete_translation.cljs$core$IFn$_invoke$arity$2 = (function (key,lang){
var url = translations.tranny_api.end_point("delete");
return translations.tranny_api.delete_translation.cljs$core$IFn$_invoke$arity$3(url,key,lang);
}));

(translations.tranny_api.delete_translation.cljs$core$IFn$_invoke$arity$3 = (function (url,key,lang){
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic(url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handler","handler",-195596612),translations.tranny_api.post_handler,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),translations.tranny_api.error_handler,new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),translations.tranny_api.wordkey(key),new cljs.core.Keyword(null,"lang","lang",-1819677104),cljs.core.str.cljs$core$IFn$_invoke$arity$1(lang)], null),new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"json","json",1279968570)], null)], 0));
}));

(translations.tranny_api.delete_translation.cljs$lang$maxFixedArity = 3);

/**
 * Convert a seq of json key-value pairs to a clojure map, replacing # with / to regain namespace.
 *   This assumes the json generator replaced / namespace separators with \#.
 *   It's necessary to substitute '/' in namespaced keywords as data.json lib throws away namespaces - which we are using
 *   to help identify the page where the translation appears.
 */
translations.tranny_api.json_kvs__GT_m = (function translations$tranny_api$json_kvs__GT_m(kvs){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__39321){
var vec__39322 = p__39321;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39322,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39322,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.replace(s,/#/,"/")),v], null);
}),kvs));
});
/**
 * Validate a download containing an upsert or switch operation.
 *   If the op is a valid upsert, return the :upsert with decoded params
 *   If the op is a valid switch, return the :switch with decoded params
 */
translations.tranny_api.parse_downloaded_op = (function translations$tranny_api$parse_downloaded_op(download){
if(cljs.core.vector_QMARK_(download)){
var vec__39334 = download;
var op = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39334,(0),null);
var lang = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39334,(1),null);
var translations__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39334,(2),null);
var d = vec__39334;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(lang))){
var pred__39339 = cljs.core._EQ_;
var expr__39340 = op;
if(cljs.core.truth_((pred__39339.cljs$core$IFn$_invoke$arity$2 ? pred__39339.cljs$core$IFn$_invoke$arity$2("upsert",expr__39340) : pred__39339.call(null,"upsert",expr__39340)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"upsert","upsert",1416724984),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(lang),translations.tranny_api.json_kvs__GT_m(translations__$1)], null);
} else {
if(cljs.core.truth_((pred__39339.cljs$core$IFn$_invoke$arity$2 ? pred__39339.cljs$core$IFn$_invoke$arity$2("switch",expr__39340) : pred__39339.call(null,"switch",expr__39340)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switch","switch",71881310),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(lang)], null);
} else {
if(cljs.core.truth_((pred__39339.cljs$core$IFn$_invoke$arity$2 ? pred__39339.cljs$core$IFn$_invoke$arity$2("error",expr__39340) : pred__39339.call(null,"error",expr__39340)))){
var vec__39343 = d;
var seq__39344 = cljs.core.seq(vec__39343);
var first__39345 = cljs.core.first(seq__39344);
var seq__39344__$1 = cljs.core.next(seq__39344);
var _ = first__39345;
var msgs = seq__39344__$1;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),msgs], null);
} else {
return null;
}
}
}
} else {
return null;
}
} else {
return null;
}
});
/**
 * Parse a server error into something tidier. Expects a map with :status, :status-text and [:response :message]
 */
translations.tranny_api.parse_error = (function translations$tranny_api$parse_error(er_m){
var msg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(er_m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"response","response",-1068424192),new cljs.core.Keyword(null,"message","message",-406056002)], null));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(er_m,new cljs.core.Keyword(null,"response","response",-1068424192)),new cljs.core.Keyword(null,"failure","failure",720415879)),new cljs.core.Keyword(null,"message","message",-406056002),msg);
});
/**
 * Given bufferless ok-chan and err-chan, will POST a download request to endpoint api/upserts in 3 arity version or to
 *   given url in 4 arity version. Downloads just the dictionary for the given language.
 *   The go block waits for a response on either channel, and returns a channel containing the parsed response.
 * 
 *   Intended for a single language. NOT IN USE YET.
 */
translations.tranny_api.download_lang_translations = (function translations$tranny_api$download_lang_translations(var_args){
var G__39350 = arguments.length;
switch (G__39350) {
case 4:
return translations.tranny_api.download_lang_translations.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 3:
return translations.tranny_api.download_lang_translations.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(translations.tranny_api.download_lang_translations.cljs$core$IFn$_invoke$arity$4 = (function (ok_chan,err_chan,lang,url){
ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic(url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (p1__39347_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ok_chan,p1__39347_SHARP_);
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),(function (p1__39348_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(err_chan,p1__39348_SHARP_);
}),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lang","lang",-1819677104),lang], null),new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"json","json",1279968570)], null)], 0));

var c__29432__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29433__auto__ = (function (){var switch__29362__auto__ = (function (state_39393){
var state_val_39394 = (state_39393[(1)]);
if((state_val_39394 === (1))){
var inst_39374 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_39375 = [ok_chan,err_chan];
var inst_39376 = (new cljs.core.PersistentVector(null,2,(5),inst_39374,inst_39375,null));
var state_39393__$1 = state_39393;
return cljs.core.async.ioc_alts_BANG_(state_39393__$1,(2),inst_39376);
} else {
if((state_val_39394 === (2))){
var inst_39378 = (state_39393[(2)]);
var inst_39379 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_39378,(0),null);
var inst_39381 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_39378,(1),null);
var inst_39383 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_39381,ok_chan);
var state_39393__$1 = (function (){var statearr_39395 = state_39393;
(statearr_39395[(7)] = inst_39379);

return statearr_39395;
})();
if(inst_39383){
var statearr_39396_39510 = state_39393__$1;
(statearr_39396_39510[(1)] = (3));

} else {
var statearr_39397_39511 = state_39393__$1;
(statearr_39397_39511[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39394 === (3))){
var inst_39379 = (state_39393[(7)]);
var inst_39385 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_39379,"body");
var inst_39386 = translations.tranny_api.parse_downloaded_op(inst_39385);
var state_39393__$1 = state_39393;
var statearr_39398_39513 = state_39393__$1;
(statearr_39398_39513[(2)] = inst_39386);

(statearr_39398_39513[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39394 === (4))){
var inst_39379 = (state_39393[(7)]);
var inst_39388 = clojure.walk.keywordize_keys(inst_39379);
var inst_39389 = translations.tranny_api.parse_error(inst_39388);
var state_39393__$1 = state_39393;
var statearr_39399_39515 = state_39393__$1;
(statearr_39399_39515[(2)] = inst_39389);

(statearr_39399_39515[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39394 === (5))){
var inst_39391 = (state_39393[(2)]);
var state_39393__$1 = state_39393;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39393__$1,inst_39391);
} else {
return null;
}
}
}
}
}
});
return (function() {
var translations$tranny_api$state_machine__29363__auto__ = null;
var translations$tranny_api$state_machine__29363__auto____0 = (function (){
var statearr_39402 = [null,null,null,null,null,null,null,null];
(statearr_39402[(0)] = translations$tranny_api$state_machine__29363__auto__);

(statearr_39402[(1)] = (1));

return statearr_39402;
});
var translations$tranny_api$state_machine__29363__auto____1 = (function (state_39393){
while(true){
var ret_value__29364__auto__ = (function (){try{while(true){
var result__29365__auto__ = switch__29362__auto__(state_39393);
if(cljs.core.keyword_identical_QMARK_(result__29365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29365__auto__;
}
break;
}
}catch (e39404){var ex__29366__auto__ = e39404;
var statearr_39405_39524 = state_39393;
(statearr_39405_39524[(2)] = ex__29366__auto__);


if(cljs.core.seq((state_39393[(4)]))){
var statearr_39406_39525 = state_39393;
(statearr_39406_39525[(1)] = cljs.core.first((state_39393[(4)])));

} else {
throw ex__29366__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39529 = state_39393;
state_39393 = G__39529;
continue;
} else {
return ret_value__29364__auto__;
}
break;
}
});
translations$tranny_api$state_machine__29363__auto__ = function(state_39393){
switch(arguments.length){
case 0:
return translations$tranny_api$state_machine__29363__auto____0.call(this);
case 1:
return translations$tranny_api$state_machine__29363__auto____1.call(this,state_39393);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
translations$tranny_api$state_machine__29363__auto__.cljs$core$IFn$_invoke$arity$0 = translations$tranny_api$state_machine__29363__auto____0;
translations$tranny_api$state_machine__29363__auto__.cljs$core$IFn$_invoke$arity$1 = translations$tranny_api$state_machine__29363__auto____1;
return translations$tranny_api$state_machine__29363__auto__;
})()
})();
var state__29434__auto__ = (function (){var statearr_39413 = f__29433__auto__();
(statearr_39413[(6)] = c__29432__auto__);

return statearr_39413;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29434__auto__);
}));

return c__29432__auto__;
}));

(translations.tranny_api.download_lang_translations.cljs$core$IFn$_invoke$arity$3 = (function (ok_chan,err_chan,lang){
return translations.tranny_api.download_lang_translations.cljs$core$IFn$_invoke$arity$4(ok_chan,err_chan,lang,translations.tranny_api.end_point("upserts"));
}));

(translations.tranny_api.download_lang_translations.cljs$lang$maxFixedArity = 4);

/**
 * Given bufferless ok-chan and err-chan, will POST a download-all-translations request to endpoint upserts-all in
 *   2-arity or given url in 3 arity version.
 *   The go block waits for a response on either chan, and returns a chan containing the parsed response.
 */
translations.tranny_api.download_all_translations = (function translations$tranny_api$download_all_translations(var_args){
var G__39420 = arguments.length;
switch (G__39420) {
case 3:
return translations.tranny_api.download_all_translations.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return translations.tranny_api.download_all_translations.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(translations.tranny_api.download_all_translations.cljs$core$IFn$_invoke$arity$3 = (function (ok_chan,err_chan,url){
ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic(url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (p1__39415_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ok_chan,p1__39415_SHARP_);
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),(function (p1__39416_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(err_chan,p1__39416_SHARP_);
}),new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"json","json",1279968570)], null)], 0));

var c__29432__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29433__auto__ = (function (){var switch__29362__auto__ = (function (state_39473){
var state_val_39474 = (state_39473[(1)]);
if((state_val_39474 === (1))){
var inst_39430 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_39431 = [ok_chan,err_chan];
var inst_39432 = (new cljs.core.PersistentVector(null,2,(5),inst_39430,inst_39431,null));
var state_39473__$1 = state_39473;
return cljs.core.async.ioc_alts_BANG_(state_39473__$1,(2),inst_39432);
} else {
if((state_val_39474 === (2))){
var inst_39438 = (state_39473[(2)]);
var inst_39442 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_39438,(0),null);
var inst_39444 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_39438,(1),null);
var inst_39446 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_39444,ok_chan);
var state_39473__$1 = (function (){var statearr_39481 = state_39473;
(statearr_39481[(7)] = inst_39442);

return statearr_39481;
})();
if(inst_39446){
var statearr_39482_39545 = state_39473__$1;
(statearr_39482_39545[(1)] = (3));

} else {
var statearr_39483_39546 = state_39473__$1;
(statearr_39483_39546[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39474 === (3))){
var inst_39442 = (state_39473[(7)]);
var inst_39454 = cljs.core.vector_QMARK_(inst_39442);
var state_39473__$1 = state_39473;
if(inst_39454){
var statearr_39486_39547 = state_39473__$1;
(statearr_39486_39547[(1)] = (6));

} else {
var statearr_39487_39548 = state_39473__$1;
(statearr_39487_39548[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39474 === (4))){
var inst_39442 = (state_39473[(7)]);
var inst_39466 = clojure.walk.keywordize_keys(inst_39442);
var inst_39467 = translations.tranny_api.parse_error(inst_39466);
var state_39473__$1 = state_39473;
var statearr_39489_39553 = state_39473__$1;
(statearr_39489_39553[(2)] = inst_39467);

(statearr_39489_39553[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39474 === (5))){
var inst_39469 = (state_39473[(2)]);
var state_39473__$1 = state_39473;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39473__$1,inst_39469);
} else {
if((state_val_39474 === (6))){
var inst_39442 = (state_39473[(7)]);
var inst_39460 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(translations.tranny_api.parse_downloaded_op,inst_39442);
var state_39473__$1 = state_39473;
var statearr_39492_39556 = state_39473__$1;
(statearr_39492_39556[(2)] = inst_39460);

(statearr_39492_39556[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39474 === (7))){
var state_39473__$1 = state_39473;
var statearr_39495_39557 = state_39473__$1;
(statearr_39495_39557[(2)] = null);

(statearr_39495_39557[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39474 === (8))){
var inst_39464 = (state_39473[(2)]);
var state_39473__$1 = state_39473;
var statearr_39496_39558 = state_39473__$1;
(statearr_39496_39558[(2)] = inst_39464);

(statearr_39496_39558[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});
return (function() {
var translations$tranny_api$state_machine__29363__auto__ = null;
var translations$tranny_api$state_machine__29363__auto____0 = (function (){
var statearr_39498 = [null,null,null,null,null,null,null,null];
(statearr_39498[(0)] = translations$tranny_api$state_machine__29363__auto__);

(statearr_39498[(1)] = (1));

return statearr_39498;
});
var translations$tranny_api$state_machine__29363__auto____1 = (function (state_39473){
while(true){
var ret_value__29364__auto__ = (function (){try{while(true){
var result__29365__auto__ = switch__29362__auto__(state_39473);
if(cljs.core.keyword_identical_QMARK_(result__29365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29365__auto__;
}
break;
}
}catch (e39499){var ex__29366__auto__ = e39499;
var statearr_39500_39561 = state_39473;
(statearr_39500_39561[(2)] = ex__29366__auto__);


if(cljs.core.seq((state_39473[(4)]))){
var statearr_39501_39562 = state_39473;
(statearr_39501_39562[(1)] = cljs.core.first((state_39473[(4)])));

} else {
throw ex__29366__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39563 = state_39473;
state_39473 = G__39563;
continue;
} else {
return ret_value__29364__auto__;
}
break;
}
});
translations$tranny_api$state_machine__29363__auto__ = function(state_39473){
switch(arguments.length){
case 0:
return translations$tranny_api$state_machine__29363__auto____0.call(this);
case 1:
return translations$tranny_api$state_machine__29363__auto____1.call(this,state_39473);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
translations$tranny_api$state_machine__29363__auto__.cljs$core$IFn$_invoke$arity$0 = translations$tranny_api$state_machine__29363__auto____0;
translations$tranny_api$state_machine__29363__auto__.cljs$core$IFn$_invoke$arity$1 = translations$tranny_api$state_machine__29363__auto____1;
return translations$tranny_api$state_machine__29363__auto__;
})()
})();
var state__29434__auto__ = (function (){var statearr_39502 = f__29433__auto__();
(statearr_39502[(6)] = c__29432__auto__);

return statearr_39502;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29434__auto__);
}));

return c__29432__auto__;
}));

(translations.tranny_api.download_all_translations.cljs$core$IFn$_invoke$arity$2 = (function (ok_chan,err_chan){
return translations.tranny_api.download_all_translations.cljs$core$IFn$_invoke$arity$3(ok_chan,err_chan,translations.tranny_api.end_point("upserts/all"));
}));

(translations.tranny_api.download_all_translations.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=translations.tranny_api.js.map
