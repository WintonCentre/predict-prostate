goog.provide('translations.tranny_api');
translations.tranny_api.server_url = "https://api-prostate.wintoncentre.uk/";
translations.tranny_api.base_url = [translations.tranny_api.server_url,"api/"].join('');
translations.tranny_api.get_handler = (function translations$tranny_api$get_handler(response){
var clj_rsp = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(response,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var hit_count = cljs.core.count(clj_rsp);
var result = (function (){var pred__44276 = cljs.core._EQ_;
var expr__44277 = hit_count;
if(cljs.core.truth_((pred__44276.cljs$core$IFn$_invoke$arity$2 ? pred__44276.cljs$core$IFn$_invoke$arity$2((0),expr__44277) : pred__44276.call(null,(0),expr__44277)))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["No results"], 0));
} else {
if(cljs.core.truth_((pred__44276.cljs$core$IFn$_invoke$arity$2 ? pred__44276.cljs$core$IFn$_invoke$arity$2((1),expr__44277) : pred__44276.call(null,(1),expr__44277)))){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.first(clj_rsp),"text");
} else {
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__44275_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__44275_SHARP_,"text");
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
translations.tranny_api.error_handler = (function translations$tranny_api$error_handler(p__44280){
var map__44281 = p__44280;
var map__44281__$1 = cljs.core.__destructure_map(map__44281);
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44281__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44281__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
var response = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44281__$1,new cljs.core.Keyword(null,"response","response",-1068424192));
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
var G__44293 = arguments.length;
switch (G__44293) {
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

(translations.tranny_api.lookup_key.cljs$core$IFn$_invoke$arity$2 = (function (url,p__44297){
var map__44298 = p__44297;
var map__44298__$1 = cljs.core.__destructure_map(map__44298);
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44298__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
var error_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44298__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
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
var G__44302 = arguments.length;
switch (G__44302) {
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
var G__44304 = arguments.length;
switch (G__44304) {
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
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__44308){
var vec__44310 = p__44308;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44310,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44310,(1),null);
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
var vec__44313 = download;
var op = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44313,(0),null);
var lang = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44313,(1),null);
var translations__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44313,(2),null);
var d = vec__44313;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(lang))){
var pred__44318 = cljs.core._EQ_;
var expr__44319 = op;
if(cljs.core.truth_((pred__44318.cljs$core$IFn$_invoke$arity$2 ? pred__44318.cljs$core$IFn$_invoke$arity$2("upsert",expr__44319) : pred__44318.call(null,"upsert",expr__44319)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"upsert","upsert",1416724984),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(lang),translations.tranny_api.json_kvs__GT_m(translations__$1)], null);
} else {
if(cljs.core.truth_((pred__44318.cljs$core$IFn$_invoke$arity$2 ? pred__44318.cljs$core$IFn$_invoke$arity$2("switch",expr__44319) : pred__44318.call(null,"switch",expr__44319)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switch","switch",71881310),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(lang)], null);
} else {
if(cljs.core.truth_((pred__44318.cljs$core$IFn$_invoke$arity$2 ? pred__44318.cljs$core$IFn$_invoke$arity$2("error",expr__44319) : pred__44318.call(null,"error",expr__44319)))){
var vec__44323 = d;
var seq__44324 = cljs.core.seq(vec__44323);
var first__44325 = cljs.core.first(seq__44324);
var seq__44324__$1 = cljs.core.next(seq__44324);
var _ = first__44325;
var msgs = seq__44324__$1;
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
var G__44336 = arguments.length;
switch (G__44336) {
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
ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic(url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (p1__44330_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ok_chan,p1__44330_SHARP_);
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),(function (p1__44331_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(err_chan,p1__44331_SHARP_);
}),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lang","lang",-1819677104),lang], null),new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"json","json",1279968570)], null)], 0));

var c__35744__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35745__auto__ = (function (){var switch__35549__auto__ = (function (state_44365){
var state_val_44366 = (state_44365[(1)]);
if((state_val_44366 === (1))){
var inst_44348 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_44349 = [ok_chan,err_chan];
var inst_44350 = (new cljs.core.PersistentVector(null,2,(5),inst_44348,inst_44349,null));
var state_44365__$1 = state_44365;
return cljs.core.async.ioc_alts_BANG_(state_44365__$1,(2),inst_44350);
} else {
if((state_val_44366 === (2))){
var inst_44352 = (state_44365[(2)]);
var inst_44353 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44352,(0),null);
var inst_44354 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44352,(1),null);
var inst_44355 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_44354,ok_chan);
var state_44365__$1 = (function (){var statearr_44367 = state_44365;
(statearr_44367[(7)] = inst_44353);

return statearr_44367;
})();
if(inst_44355){
var statearr_44368_44474 = state_44365__$1;
(statearr_44368_44474[(1)] = (3));

} else {
var statearr_44369_44476 = state_44365__$1;
(statearr_44369_44476[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44366 === (3))){
var inst_44353 = (state_44365[(7)]);
var inst_44357 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_44353,"body");
var inst_44358 = translations.tranny_api.parse_downloaded_op(inst_44357);
var state_44365__$1 = state_44365;
var statearr_44370_44477 = state_44365__$1;
(statearr_44370_44477[(2)] = inst_44358);

(statearr_44370_44477[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44366 === (4))){
var inst_44353 = (state_44365[(7)]);
var inst_44360 = clojure.walk.keywordize_keys(inst_44353);
var inst_44361 = translations.tranny_api.parse_error(inst_44360);
var state_44365__$1 = state_44365;
var statearr_44371_44478 = state_44365__$1;
(statearr_44371_44478[(2)] = inst_44361);

(statearr_44371_44478[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44366 === (5))){
var inst_44363 = (state_44365[(2)]);
var state_44365__$1 = state_44365;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44365__$1,inst_44363);
} else {
return null;
}
}
}
}
}
});
return (function() {
var translations$tranny_api$state_machine__35550__auto__ = null;
var translations$tranny_api$state_machine__35550__auto____0 = (function (){
var statearr_44372 = [null,null,null,null,null,null,null,null];
(statearr_44372[(0)] = translations$tranny_api$state_machine__35550__auto__);

(statearr_44372[(1)] = (1));

return statearr_44372;
});
var translations$tranny_api$state_machine__35550__auto____1 = (function (state_44365){
while(true){
var ret_value__35551__auto__ = (function (){try{while(true){
var result__35552__auto__ = switch__35549__auto__(state_44365);
if(cljs.core.keyword_identical_QMARK_(result__35552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35552__auto__;
}
break;
}
}catch (e44373){var ex__35553__auto__ = e44373;
var statearr_44374_44479 = state_44365;
(statearr_44374_44479[(2)] = ex__35553__auto__);


if(cljs.core.seq((state_44365[(4)]))){
var statearr_44375_44480 = state_44365;
(statearr_44375_44480[(1)] = cljs.core.first((state_44365[(4)])));

} else {
throw ex__35553__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44482 = state_44365;
state_44365 = G__44482;
continue;
} else {
return ret_value__35551__auto__;
}
break;
}
});
translations$tranny_api$state_machine__35550__auto__ = function(state_44365){
switch(arguments.length){
case 0:
return translations$tranny_api$state_machine__35550__auto____0.call(this);
case 1:
return translations$tranny_api$state_machine__35550__auto____1.call(this,state_44365);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
translations$tranny_api$state_machine__35550__auto__.cljs$core$IFn$_invoke$arity$0 = translations$tranny_api$state_machine__35550__auto____0;
translations$tranny_api$state_machine__35550__auto__.cljs$core$IFn$_invoke$arity$1 = translations$tranny_api$state_machine__35550__auto____1;
return translations$tranny_api$state_machine__35550__auto__;
})()
})();
var state__35746__auto__ = (function (){var statearr_44377 = f__35745__auto__();
(statearr_44377[(6)] = c__35744__auto__);

return statearr_44377;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35746__auto__);
}));

return c__35744__auto__;
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
var G__44392 = arguments.length;
switch (G__44392) {
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
ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic(url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (p1__44378_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ok_chan,p1__44378_SHARP_);
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),(function (p1__44379_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(err_chan,p1__44379_SHARP_);
}),new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"json","json",1279968570)], null)], 0));

var c__35744__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35745__auto__ = (function (){var switch__35549__auto__ = (function (state_44417){
var state_val_44418 = (state_44417[(1)]);
if((state_val_44418 === (1))){
var inst_44396 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_44397 = [ok_chan,err_chan];
var inst_44398 = (new cljs.core.PersistentVector(null,2,(5),inst_44396,inst_44397,null));
var state_44417__$1 = state_44417;
return cljs.core.async.ioc_alts_BANG_(state_44417__$1,(2),inst_44398);
} else {
if((state_val_44418 === (2))){
var inst_44400 = (state_44417[(2)]);
var inst_44401 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44400,(0),null);
var inst_44402 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44400,(1),null);
var inst_44403 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_44402,ok_chan);
var state_44417__$1 = (function (){var statearr_44419 = state_44417;
(statearr_44419[(7)] = inst_44401);

return statearr_44419;
})();
if(inst_44403){
var statearr_44420_44492 = state_44417__$1;
(statearr_44420_44492[(1)] = (3));

} else {
var statearr_44421_44493 = state_44417__$1;
(statearr_44421_44493[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44418 === (3))){
var inst_44401 = (state_44417[(7)]);
var inst_44405 = cljs.core.vector_QMARK_(inst_44401);
var state_44417__$1 = state_44417;
if(inst_44405){
var statearr_44422_44494 = state_44417__$1;
(statearr_44422_44494[(1)] = (6));

} else {
var statearr_44423_44495 = state_44417__$1;
(statearr_44423_44495[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44418 === (4))){
var inst_44401 = (state_44417[(7)]);
var inst_44412 = clojure.walk.keywordize_keys(inst_44401);
var inst_44413 = translations.tranny_api.parse_error(inst_44412);
var state_44417__$1 = state_44417;
var statearr_44424_44496 = state_44417__$1;
(statearr_44424_44496[(2)] = inst_44413);

(statearr_44424_44496[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44418 === (5))){
var inst_44415 = (state_44417[(2)]);
var state_44417__$1 = state_44417;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44417__$1,inst_44415);
} else {
if((state_val_44418 === (6))){
var inst_44401 = (state_44417[(7)]);
var inst_44407 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(translations.tranny_api.parse_downloaded_op,inst_44401);
var state_44417__$1 = state_44417;
var statearr_44425_44497 = state_44417__$1;
(statearr_44425_44497[(2)] = inst_44407);

(statearr_44425_44497[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44418 === (7))){
var state_44417__$1 = state_44417;
var statearr_44426_44498 = state_44417__$1;
(statearr_44426_44498[(2)] = null);

(statearr_44426_44498[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44418 === (8))){
var inst_44410 = (state_44417[(2)]);
var state_44417__$1 = state_44417;
var statearr_44427_44499 = state_44417__$1;
(statearr_44427_44499[(2)] = inst_44410);

(statearr_44427_44499[(1)] = (5));


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
var translations$tranny_api$state_machine__35550__auto__ = null;
var translations$tranny_api$state_machine__35550__auto____0 = (function (){
var statearr_44428 = [null,null,null,null,null,null,null,null];
(statearr_44428[(0)] = translations$tranny_api$state_machine__35550__auto__);

(statearr_44428[(1)] = (1));

return statearr_44428;
});
var translations$tranny_api$state_machine__35550__auto____1 = (function (state_44417){
while(true){
var ret_value__35551__auto__ = (function (){try{while(true){
var result__35552__auto__ = switch__35549__auto__(state_44417);
if(cljs.core.keyword_identical_QMARK_(result__35552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35552__auto__;
}
break;
}
}catch (e44429){var ex__35553__auto__ = e44429;
var statearr_44430_44501 = state_44417;
(statearr_44430_44501[(2)] = ex__35553__auto__);


if(cljs.core.seq((state_44417[(4)]))){
var statearr_44431_44502 = state_44417;
(statearr_44431_44502[(1)] = cljs.core.first((state_44417[(4)])));

} else {
throw ex__35553__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44503 = state_44417;
state_44417 = G__44503;
continue;
} else {
return ret_value__35551__auto__;
}
break;
}
});
translations$tranny_api$state_machine__35550__auto__ = function(state_44417){
switch(arguments.length){
case 0:
return translations$tranny_api$state_machine__35550__auto____0.call(this);
case 1:
return translations$tranny_api$state_machine__35550__auto____1.call(this,state_44417);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
translations$tranny_api$state_machine__35550__auto__.cljs$core$IFn$_invoke$arity$0 = translations$tranny_api$state_machine__35550__auto____0;
translations$tranny_api$state_machine__35550__auto__.cljs$core$IFn$_invoke$arity$1 = translations$tranny_api$state_machine__35550__auto____1;
return translations$tranny_api$state_machine__35550__auto__;
})()
})();
var state__35746__auto__ = (function (){var statearr_44432 = f__35745__auto__();
(statearr_44432[(6)] = c__35744__auto__);

return statearr_44432;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35746__auto__);
}));

return c__35744__auto__;
}));

(translations.tranny_api.download_all_translations.cljs$core$IFn$_invoke$arity$2 = (function (ok_chan,err_chan){
return translations.tranny_api.download_all_translations.cljs$core$IFn$_invoke$arity$3(ok_chan,err_chan,translations.tranny_api.end_point("upserts/all"));
}));

(translations.tranny_api.download_all_translations.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=translations.tranny_api.js.map
