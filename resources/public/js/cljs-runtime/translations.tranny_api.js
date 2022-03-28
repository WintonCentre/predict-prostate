goog.provide('translations.tranny_api');
translations.tranny_api.server_url = "https://api-prostate.wintoncentre.uk/";
translations.tranny_api.base_url = [translations.tranny_api.server_url,"api/"].join('');
translations.tranny_api.get_handler = (function translations$tranny_api$get_handler(response){
var clj_rsp = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(response,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var hit_count = cljs.core.count(clj_rsp);
var result = (function (){var pred__32465 = cljs.core._EQ_;
var expr__32466 = hit_count;
if(cljs.core.truth_((pred__32465.cljs$core$IFn$_invoke$arity$2 ? pred__32465.cljs$core$IFn$_invoke$arity$2((0),expr__32466) : pred__32465.call(null,(0),expr__32466)))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["No results"], 0));
} else {
if(cljs.core.truth_((pred__32465.cljs$core$IFn$_invoke$arity$2 ? pred__32465.cljs$core$IFn$_invoke$arity$2((1),expr__32466) : pred__32465.call(null,(1),expr__32466)))){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.first(clj_rsp),"text");
} else {
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__32464_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__32464_SHARP_,"text");
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
translations.tranny_api.error_handler = (function translations$tranny_api$error_handler(p__32468){
var map__32469 = p__32468;
var map__32469__$1 = cljs.core.__destructure_map(map__32469);
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32469__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32469__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
var response = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32469__$1,new cljs.core.Keyword(null,"response","response",-1068424192));
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
var G__32474 = arguments.length;
switch (G__32474) {
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

(translations.tranny_api.lookup_key.cljs$core$IFn$_invoke$arity$2 = (function (url,p__32478){
var map__32479 = p__32478;
var map__32479__$1 = cljs.core.__destructure_map(map__32479);
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32479__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
var error_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32479__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
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
var G__32486 = arguments.length;
switch (G__32486) {
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
var G__32499 = arguments.length;
switch (G__32499) {
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
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__32500){
var vec__32501 = p__32500;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32501,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32501,(1),null);
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
var vec__32504 = download;
var op = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32504,(0),null);
var lang = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32504,(1),null);
var translations__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32504,(2),null);
var d = vec__32504;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(lang))){
var pred__32507 = cljs.core._EQ_;
var expr__32508 = op;
if(cljs.core.truth_((pred__32507.cljs$core$IFn$_invoke$arity$2 ? pred__32507.cljs$core$IFn$_invoke$arity$2("upsert",expr__32508) : pred__32507.call(null,"upsert",expr__32508)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"upsert","upsert",1416724984),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(lang),translations.tranny_api.json_kvs__GT_m(translations__$1)], null);
} else {
if(cljs.core.truth_((pred__32507.cljs$core$IFn$_invoke$arity$2 ? pred__32507.cljs$core$IFn$_invoke$arity$2("switch",expr__32508) : pred__32507.call(null,"switch",expr__32508)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switch","switch",71881310),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(lang)], null);
} else {
if(cljs.core.truth_((pred__32507.cljs$core$IFn$_invoke$arity$2 ? pred__32507.cljs$core$IFn$_invoke$arity$2("error",expr__32508) : pred__32507.call(null,"error",expr__32508)))){
var vec__32510 = d;
var seq__32511 = cljs.core.seq(vec__32510);
var first__32512 = cljs.core.first(seq__32511);
var seq__32511__$1 = cljs.core.next(seq__32511);
var _ = first__32512;
var msgs = seq__32511__$1;
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
var G__32521 = arguments.length;
switch (G__32521) {
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
ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic(url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (p1__32518_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ok_chan,p1__32518_SHARP_);
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),(function (p1__32519_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(err_chan,p1__32519_SHARP_);
}),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lang","lang",-1819677104),lang], null),new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"json","json",1279968570)], null)], 0));

var c__30885__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30886__auto__ = (function (){var switch__30824__auto__ = (function (state_32604){
var state_val_32609 = (state_32604[(1)]);
if((state_val_32609 === (1))){
var inst_32546 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32547 = [ok_chan,err_chan];
var inst_32548 = (new cljs.core.PersistentVector(null,2,(5),inst_32546,inst_32547,null));
var state_32604__$1 = state_32604;
return cljs.core.async.ioc_alts_BANG_(state_32604__$1,(2),inst_32548);
} else {
if((state_val_32609 === (2))){
var inst_32550 = (state_32604[(2)]);
var inst_32559 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32550,(0),null);
var inst_32561 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32550,(1),null);
var inst_32564 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32561,ok_chan);
var state_32604__$1 = (function (){var statearr_32630 = state_32604;
(statearr_32630[(7)] = inst_32559);

return statearr_32630;
})();
if(inst_32564){
var statearr_32631_32727 = state_32604__$1;
(statearr_32631_32727[(1)] = (3));

} else {
var statearr_32632_32728 = state_32604__$1;
(statearr_32632_32728[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32609 === (3))){
var inst_32559 = (state_32604[(7)]);
var inst_32568 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32559,"body");
var inst_32569 = translations.tranny_api.parse_downloaded_op(inst_32568);
var state_32604__$1 = state_32604;
var statearr_32633_32731 = state_32604__$1;
(statearr_32633_32731[(2)] = inst_32569);

(statearr_32633_32731[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32609 === (4))){
var inst_32559 = (state_32604[(7)]);
var inst_32574 = clojure.walk.keywordize_keys(inst_32559);
var inst_32575 = translations.tranny_api.parse_error(inst_32574);
var state_32604__$1 = state_32604;
var statearr_32634_32732 = state_32604__$1;
(statearr_32634_32732[(2)] = inst_32575);

(statearr_32634_32732[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32609 === (5))){
var inst_32577 = (state_32604[(2)]);
var state_32604__$1 = state_32604;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32604__$1,inst_32577);
} else {
return null;
}
}
}
}
}
});
return (function() {
var translations$tranny_api$state_machine__30825__auto__ = null;
var translations$tranny_api$state_machine__30825__auto____0 = (function (){
var statearr_32636 = [null,null,null,null,null,null,null,null];
(statearr_32636[(0)] = translations$tranny_api$state_machine__30825__auto__);

(statearr_32636[(1)] = (1));

return statearr_32636;
});
var translations$tranny_api$state_machine__30825__auto____1 = (function (state_32604){
while(true){
var ret_value__30826__auto__ = (function (){try{while(true){
var result__30827__auto__ = switch__30824__auto__(state_32604);
if(cljs.core.keyword_identical_QMARK_(result__30827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30827__auto__;
}
break;
}
}catch (e32637){var ex__30828__auto__ = e32637;
var statearr_32639_32737 = state_32604;
(statearr_32639_32737[(2)] = ex__30828__auto__);


if(cljs.core.seq((state_32604[(4)]))){
var statearr_32641_32738 = state_32604;
(statearr_32641_32738[(1)] = cljs.core.first((state_32604[(4)])));

} else {
throw ex__30828__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32742 = state_32604;
state_32604 = G__32742;
continue;
} else {
return ret_value__30826__auto__;
}
break;
}
});
translations$tranny_api$state_machine__30825__auto__ = function(state_32604){
switch(arguments.length){
case 0:
return translations$tranny_api$state_machine__30825__auto____0.call(this);
case 1:
return translations$tranny_api$state_machine__30825__auto____1.call(this,state_32604);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
translations$tranny_api$state_machine__30825__auto__.cljs$core$IFn$_invoke$arity$0 = translations$tranny_api$state_machine__30825__auto____0;
translations$tranny_api$state_machine__30825__auto__.cljs$core$IFn$_invoke$arity$1 = translations$tranny_api$state_machine__30825__auto____1;
return translations$tranny_api$state_machine__30825__auto__;
})()
})();
var state__30887__auto__ = (function (){var statearr_32642 = f__30886__auto__();
(statearr_32642[(6)] = c__30885__auto__);

return statearr_32642;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30887__auto__);
}));

return c__30885__auto__;
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
var G__32647 = arguments.length;
switch (G__32647) {
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
ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic(url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (p1__32643_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ok_chan,p1__32643_SHARP_);
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),(function (p1__32644_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(err_chan,p1__32644_SHARP_);
}),new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"json","json",1279968570)], null)], 0));

var c__30885__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30886__auto__ = (function (){var switch__30824__auto__ = (function (state_32679){
var state_val_32680 = (state_32679[(1)]);
if((state_val_32680 === (1))){
var inst_32657 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32658 = [ok_chan,err_chan];
var inst_32659 = (new cljs.core.PersistentVector(null,2,(5),inst_32657,inst_32658,null));
var state_32679__$1 = state_32679;
return cljs.core.async.ioc_alts_BANG_(state_32679__$1,(2),inst_32659);
} else {
if((state_val_32680 === (2))){
var inst_32661 = (state_32679[(2)]);
var inst_32662 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32661,(0),null);
var inst_32663 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32661,(1),null);
var inst_32664 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32663,ok_chan);
var state_32679__$1 = (function (){var statearr_32685 = state_32679;
(statearr_32685[(7)] = inst_32662);

return statearr_32685;
})();
if(inst_32664){
var statearr_32687_32773 = state_32679__$1;
(statearr_32687_32773[(1)] = (3));

} else {
var statearr_32689_32774 = state_32679__$1;
(statearr_32689_32774[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32680 === (3))){
var inst_32662 = (state_32679[(7)]);
var inst_32666 = cljs.core.vector_QMARK_(inst_32662);
var state_32679__$1 = state_32679;
if(inst_32666){
var statearr_32690_32775 = state_32679__$1;
(statearr_32690_32775[(1)] = (6));

} else {
var statearr_32691_32776 = state_32679__$1;
(statearr_32691_32776[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32680 === (4))){
var inst_32662 = (state_32679[(7)]);
var inst_32673 = clojure.walk.keywordize_keys(inst_32662);
var inst_32674 = translations.tranny_api.parse_error(inst_32673);
var state_32679__$1 = state_32679;
var statearr_32694_32777 = state_32679__$1;
(statearr_32694_32777[(2)] = inst_32674);

(statearr_32694_32777[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32680 === (5))){
var inst_32676 = (state_32679[(2)]);
var state_32679__$1 = state_32679;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32679__$1,inst_32676);
} else {
if((state_val_32680 === (6))){
var inst_32662 = (state_32679[(7)]);
var inst_32668 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(translations.tranny_api.parse_downloaded_op,inst_32662);
var state_32679__$1 = state_32679;
var statearr_32696_32778 = state_32679__$1;
(statearr_32696_32778[(2)] = inst_32668);

(statearr_32696_32778[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32680 === (7))){
var state_32679__$1 = state_32679;
var statearr_32698_32779 = state_32679__$1;
(statearr_32698_32779[(2)] = null);

(statearr_32698_32779[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32680 === (8))){
var inst_32671 = (state_32679[(2)]);
var state_32679__$1 = state_32679;
var statearr_32699_32780 = state_32679__$1;
(statearr_32699_32780[(2)] = inst_32671);

(statearr_32699_32780[(1)] = (5));


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
var translations$tranny_api$state_machine__30825__auto__ = null;
var translations$tranny_api$state_machine__30825__auto____0 = (function (){
var statearr_32701 = [null,null,null,null,null,null,null,null];
(statearr_32701[(0)] = translations$tranny_api$state_machine__30825__auto__);

(statearr_32701[(1)] = (1));

return statearr_32701;
});
var translations$tranny_api$state_machine__30825__auto____1 = (function (state_32679){
while(true){
var ret_value__30826__auto__ = (function (){try{while(true){
var result__30827__auto__ = switch__30824__auto__(state_32679);
if(cljs.core.keyword_identical_QMARK_(result__30827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30827__auto__;
}
break;
}
}catch (e32704){var ex__30828__auto__ = e32704;
var statearr_32706_32781 = state_32679;
(statearr_32706_32781[(2)] = ex__30828__auto__);


if(cljs.core.seq((state_32679[(4)]))){
var statearr_32707_32782 = state_32679;
(statearr_32707_32782[(1)] = cljs.core.first((state_32679[(4)])));

} else {
throw ex__30828__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32784 = state_32679;
state_32679 = G__32784;
continue;
} else {
return ret_value__30826__auto__;
}
break;
}
});
translations$tranny_api$state_machine__30825__auto__ = function(state_32679){
switch(arguments.length){
case 0:
return translations$tranny_api$state_machine__30825__auto____0.call(this);
case 1:
return translations$tranny_api$state_machine__30825__auto____1.call(this,state_32679);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
translations$tranny_api$state_machine__30825__auto__.cljs$core$IFn$_invoke$arity$0 = translations$tranny_api$state_machine__30825__auto____0;
translations$tranny_api$state_machine__30825__auto__.cljs$core$IFn$_invoke$arity$1 = translations$tranny_api$state_machine__30825__auto____1;
return translations$tranny_api$state_machine__30825__auto__;
})()
})();
var state__30887__auto__ = (function (){var statearr_32709 = f__30886__auto__();
(statearr_32709[(6)] = c__30885__auto__);

return statearr_32709;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30887__auto__);
}));

return c__30885__auto__;
}));

(translations.tranny_api.download_all_translations.cljs$core$IFn$_invoke$arity$2 = (function (ok_chan,err_chan){
return translations.tranny_api.download_all_translations.cljs$core$IFn$_invoke$arity$3(ok_chan,err_chan,translations.tranny_api.end_point("upserts/all"));
}));

(translations.tranny_api.download_all_translations.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=translations.tranny_api.js.map
