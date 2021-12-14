goog.provide('translations.tranny_api');
translations.tranny_api.server_url = "https://api-prostate.wintoncentre.uk/";
translations.tranny_api.base_url = [translations.tranny_api.server_url,"api/"].join('');
translations.tranny_api.get_handler = (function translations$tranny_api$get_handler(response){
var clj_rsp = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(response,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var hit_count = cljs.core.count(clj_rsp);
var result = (function (){var pred__164554 = cljs.core._EQ_;
var expr__164556 = hit_count;
if(cljs.core.truth_((pred__164554.cljs$core$IFn$_invoke$arity$2 ? pred__164554.cljs$core$IFn$_invoke$arity$2((0),expr__164556) : pred__164554.call(null,(0),expr__164556)))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["No results"], 0));
} else {
if(cljs.core.truth_((pred__164554.cljs$core$IFn$_invoke$arity$2 ? pred__164554.cljs$core$IFn$_invoke$arity$2((1),expr__164556) : pred__164554.call(null,(1),expr__164556)))){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.first(clj_rsp),"text");
} else {
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__164552_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__164552_SHARP_,"text");
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
translations.tranny_api.error_handler = (function translations$tranny_api$error_handler(p__164559){
var map__164561 = p__164559;
var map__164561__$1 = (((((!((map__164561 == null))))?(((((map__164561.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__164561.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__164561):map__164561);
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__164561__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__164561__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
var response = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__164561__$1,new cljs.core.Keyword(null,"response","response",-1068424192));
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
var G__164568 = arguments.length;
switch (G__164568) {
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

(translations.tranny_api.lookup_key.cljs$core$IFn$_invoke$arity$2 = (function (url,p__164570){
var map__164571 = p__164570;
var map__164571__$1 = (((((!((map__164571 == null))))?(((((map__164571.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__164571.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__164571):map__164571);
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__164571__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
var error_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__164571__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
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
var G__164584 = arguments.length;
switch (G__164584) {
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
var G__164599 = arguments.length;
switch (G__164599) {
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
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__164600){
var vec__164601 = p__164600;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__164601,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__164601,(1),null);
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
var vec__164604 = download;
var op = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__164604,(0),null);
var lang = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__164604,(1),null);
var translations__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__164604,(2),null);
var d = vec__164604;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(lang))){
var pred__164607 = cljs.core._EQ_;
var expr__164608 = op;
if(cljs.core.truth_((pred__164607.cljs$core$IFn$_invoke$arity$2 ? pred__164607.cljs$core$IFn$_invoke$arity$2("upsert",expr__164608) : pred__164607.call(null,"upsert",expr__164608)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"upsert","upsert",1416724984),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(lang),translations.tranny_api.json_kvs__GT_m(translations__$1)], null);
} else {
if(cljs.core.truth_((pred__164607.cljs$core$IFn$_invoke$arity$2 ? pred__164607.cljs$core$IFn$_invoke$arity$2("switch",expr__164608) : pred__164607.call(null,"switch",expr__164608)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switch","switch",71881310),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(lang)], null);
} else {
if(cljs.core.truth_((pred__164607.cljs$core$IFn$_invoke$arity$2 ? pred__164607.cljs$core$IFn$_invoke$arity$2("error",expr__164608) : pred__164607.call(null,"error",expr__164608)))){
var vec__164610 = d;
var seq__164611 = cljs.core.seq(vec__164610);
var first__164612 = cljs.core.first(seq__164611);
var seq__164611__$1 = cljs.core.next(seq__164611);
var _ = first__164612;
var msgs = seq__164611__$1;
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
var G__164616 = arguments.length;
switch (G__164616) {
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
ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic(url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (p1__164613_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ok_chan,p1__164613_SHARP_);
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),(function (p1__164614_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(err_chan,p1__164614_SHARP_);
}),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lang","lang",-1819677104),lang], null),new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"json","json",1279968570)], null)], 0));

var c__29733__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29734__auto__ = (function (){var switch__29648__auto__ = (function (state_164658){
var state_val_164660 = (state_164658[(1)]);
if((state_val_164660 === (1))){
var inst_164623 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_164626 = [ok_chan,err_chan];
var inst_164628 = (new cljs.core.PersistentVector(null,2,(5),inst_164623,inst_164626,null));
var state_164658__$1 = state_164658;
return cljs.core.async.ioc_alts_BANG_(state_164658__$1,(2),inst_164628);
} else {
if((state_val_164660 === (2))){
var inst_164632 = (state_164658[(2)]);
var inst_164634 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_164632,(0),null);
var inst_164636 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_164632,(1),null);
var inst_164637 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_164636,ok_chan);
var state_164658__$1 = (function (){var statearr_164661 = state_164658;
(statearr_164661[(7)] = inst_164634);

return statearr_164661;
})();
if(inst_164637){
var statearr_164664_164889 = state_164658__$1;
(statearr_164664_164889[(1)] = (3));

} else {
var statearr_164665_164890 = state_164658__$1;
(statearr_164665_164890[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_164660 === (3))){
var inst_164634 = (state_164658[(7)]);
var inst_164641 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_164634,"body");
var inst_164642 = translations.tranny_api.parse_downloaded_op(inst_164641);
var state_164658__$1 = state_164658;
var statearr_164667_164891 = state_164658__$1;
(statearr_164667_164891[(2)] = inst_164642);

(statearr_164667_164891[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_164660 === (4))){
var inst_164634 = (state_164658[(7)]);
var inst_164647 = clojure.walk.keywordize_keys(inst_164634);
var inst_164648 = translations.tranny_api.parse_error(inst_164647);
var state_164658__$1 = state_164658;
var statearr_164670_164896 = state_164658__$1;
(statearr_164670_164896[(2)] = inst_164648);

(statearr_164670_164896[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_164660 === (5))){
var inst_164653 = (state_164658[(2)]);
var state_164658__$1 = state_164658;
return cljs.core.async.impl.ioc_helpers.return_chan(state_164658__$1,inst_164653);
} else {
return null;
}
}
}
}
}
});
return (function() {
var translations$tranny_api$state_machine__29649__auto__ = null;
var translations$tranny_api$state_machine__29649__auto____0 = (function (){
var statearr_164672 = [null,null,null,null,null,null,null,null];
(statearr_164672[(0)] = translations$tranny_api$state_machine__29649__auto__);

(statearr_164672[(1)] = (1));

return statearr_164672;
});
var translations$tranny_api$state_machine__29649__auto____1 = (function (state_164658){
while(true){
var ret_value__29650__auto__ = (function (){try{while(true){
var result__29651__auto__ = switch__29648__auto__(state_164658);
if(cljs.core.keyword_identical_QMARK_(result__29651__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29651__auto__;
}
break;
}
}catch (e164673){var ex__29652__auto__ = e164673;
var statearr_164675_164897 = state_164658;
(statearr_164675_164897[(2)] = ex__29652__auto__);


if(cljs.core.seq((state_164658[(4)]))){
var statearr_164677_164898 = state_164658;
(statearr_164677_164898[(1)] = cljs.core.first((state_164658[(4)])));

} else {
throw ex__29652__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29650__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__164902 = state_164658;
state_164658 = G__164902;
continue;
} else {
return ret_value__29650__auto__;
}
break;
}
});
translations$tranny_api$state_machine__29649__auto__ = function(state_164658){
switch(arguments.length){
case 0:
return translations$tranny_api$state_machine__29649__auto____0.call(this);
case 1:
return translations$tranny_api$state_machine__29649__auto____1.call(this,state_164658);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
translations$tranny_api$state_machine__29649__auto__.cljs$core$IFn$_invoke$arity$0 = translations$tranny_api$state_machine__29649__auto____0;
translations$tranny_api$state_machine__29649__auto__.cljs$core$IFn$_invoke$arity$1 = translations$tranny_api$state_machine__29649__auto____1;
return translations$tranny_api$state_machine__29649__auto__;
})()
})();
var state__29735__auto__ = (function (){var statearr_164680 = f__29734__auto__();
(statearr_164680[(6)] = c__29733__auto__);

return statearr_164680;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29735__auto__);
}));

return c__29733__auto__;
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
var G__164686 = arguments.length;
switch (G__164686) {
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
ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic(url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (p1__164681_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ok_chan,p1__164681_SHARP_);
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),(function (p1__164682_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(err_chan,p1__164682_SHARP_);
}),new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"json","json",1279968570)], null)], 0));

var c__29733__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29734__auto__ = (function (){var switch__29648__auto__ = (function (state_164738){
var state_val_164740 = (state_164738[(1)]);
if((state_val_164740 === (1))){
var inst_164695 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_164698 = [ok_chan,err_chan];
var inst_164700 = (new cljs.core.PersistentVector(null,2,(5),inst_164695,inst_164698,null));
var state_164738__$1 = state_164738;
return cljs.core.async.ioc_alts_BANG_(state_164738__$1,(2),inst_164700);
} else {
if((state_val_164740 === (2))){
var inst_164704 = (state_164738[(2)]);
var inst_164706 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_164704,(0),null);
var inst_164708 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_164704,(1),null);
var inst_164710 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_164708,ok_chan);
var state_164738__$1 = (function (){var statearr_164742 = state_164738;
(statearr_164742[(7)] = inst_164706);

return statearr_164742;
})();
if(inst_164710){
var statearr_164744_164904 = state_164738__$1;
(statearr_164744_164904[(1)] = (3));

} else {
var statearr_164746_164905 = state_164738__$1;
(statearr_164746_164905[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_164740 === (3))){
var inst_164706 = (state_164738[(7)]);
var inst_164714 = cljs.core.vector_QMARK_(inst_164706);
var state_164738__$1 = state_164738;
if(inst_164714){
var statearr_164748_164906 = state_164738__$1;
(statearr_164748_164906[(1)] = (6));

} else {
var statearr_164750_164907 = state_164738__$1;
(statearr_164750_164907[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_164740 === (4))){
var inst_164706 = (state_164738[(7)]);
var inst_164732 = clojure.walk.keywordize_keys(inst_164706);
var inst_164733 = translations.tranny_api.parse_error(inst_164732);
var state_164738__$1 = state_164738;
var statearr_164752_164908 = state_164738__$1;
(statearr_164752_164908[(2)] = inst_164733);

(statearr_164752_164908[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_164740 === (5))){
var inst_164735 = (state_164738[(2)]);
var state_164738__$1 = state_164738;
return cljs.core.async.impl.ioc_helpers.return_chan(state_164738__$1,inst_164735);
} else {
if((state_val_164740 === (6))){
var inst_164706 = (state_164738[(7)]);
var inst_164718 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(translations.tranny_api.parse_downloaded_op,inst_164706);
var state_164738__$1 = state_164738;
var statearr_164753_164909 = state_164738__$1;
(statearr_164753_164909[(2)] = inst_164718);

(statearr_164753_164909[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_164740 === (7))){
var state_164738__$1 = state_164738;
var statearr_164755_164918 = state_164738__$1;
(statearr_164755_164918[(2)] = null);

(statearr_164755_164918[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_164740 === (8))){
var inst_164725 = (state_164738[(2)]);
var state_164738__$1 = state_164738;
var statearr_164757_164925 = state_164738__$1;
(statearr_164757_164925[(2)] = inst_164725);

(statearr_164757_164925[(1)] = (5));


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
var translations$tranny_api$state_machine__29649__auto__ = null;
var translations$tranny_api$state_machine__29649__auto____0 = (function (){
var statearr_164759 = [null,null,null,null,null,null,null,null];
(statearr_164759[(0)] = translations$tranny_api$state_machine__29649__auto__);

(statearr_164759[(1)] = (1));

return statearr_164759;
});
var translations$tranny_api$state_machine__29649__auto____1 = (function (state_164738){
while(true){
var ret_value__29650__auto__ = (function (){try{while(true){
var result__29651__auto__ = switch__29648__auto__(state_164738);
if(cljs.core.keyword_identical_QMARK_(result__29651__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29651__auto__;
}
break;
}
}catch (e164761){var ex__29652__auto__ = e164761;
var statearr_164763_164935 = state_164738;
(statearr_164763_164935[(2)] = ex__29652__auto__);


if(cljs.core.seq((state_164738[(4)]))){
var statearr_164765_164936 = state_164738;
(statearr_164765_164936[(1)] = cljs.core.first((state_164738[(4)])));

} else {
throw ex__29652__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29650__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__164940 = state_164738;
state_164738 = G__164940;
continue;
} else {
return ret_value__29650__auto__;
}
break;
}
});
translations$tranny_api$state_machine__29649__auto__ = function(state_164738){
switch(arguments.length){
case 0:
return translations$tranny_api$state_machine__29649__auto____0.call(this);
case 1:
return translations$tranny_api$state_machine__29649__auto____1.call(this,state_164738);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
translations$tranny_api$state_machine__29649__auto__.cljs$core$IFn$_invoke$arity$0 = translations$tranny_api$state_machine__29649__auto____0;
translations$tranny_api$state_machine__29649__auto__.cljs$core$IFn$_invoke$arity$1 = translations$tranny_api$state_machine__29649__auto____1;
return translations$tranny_api$state_machine__29649__auto__;
})()
})();
var state__29735__auto__ = (function (){var statearr_164773 = f__29734__auto__();
(statearr_164773[(6)] = c__29733__auto__);

return statearr_164773;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29735__auto__);
}));

return c__29733__auto__;
}));

(translations.tranny_api.download_all_translations.cljs$core$IFn$_invoke$arity$2 = (function (ok_chan,err_chan){
return translations.tranny_api.download_all_translations.cljs$core$IFn$_invoke$arity$3(ok_chan,err_chan,translations.tranny_api.end_point("upserts/all"));
}));

(translations.tranny_api.download_all_translations.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=translations.tranny_api.js.map
