goog.provide('translations.tranny_api');
translations.tranny_api.server_url = "http://localhost:1337/";
translations.tranny_api.base_url = [translations.tranny_api.server_url,"api/"].join('');
translations.tranny_api.get_handler = (function translations$tranny_api$get_handler(response){
var clj_rsp = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(response,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var hit_count = cljs.core.count(clj_rsp);
var result = (function (){var pred__127999 = cljs.core._EQ_;
var expr__128000 = hit_count;
if(cljs.core.truth_((pred__127999.cljs$core$IFn$_invoke$arity$2 ? pred__127999.cljs$core$IFn$_invoke$arity$2((0),expr__128000) : pred__127999.call(null,(0),expr__128000)))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["No results"], 0));
} else {
if(cljs.core.truth_((pred__127999.cljs$core$IFn$_invoke$arity$2 ? pred__127999.cljs$core$IFn$_invoke$arity$2((1),expr__128000) : pred__127999.call(null,(1),expr__128000)))){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.first(clj_rsp),"text");
} else {
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__127995_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__127995_SHARP_,"text");
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
translations.tranny_api.error_handler = (function translations$tranny_api$error_handler(p__128004){
var map__128006 = p__128004;
var map__128006__$1 = (((((!((map__128006 == null))))?(((((map__128006.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__128006.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__128006):map__128006);
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__128006__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__128006__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
var response = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__128006__$1,new cljs.core.Keyword(null,"response","response",-1068424192));
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
var G__128012 = arguments.length;
switch (G__128012) {
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

(translations.tranny_api.lookup_key.cljs$core$IFn$_invoke$arity$2 = (function (url,p__128013){
var map__128015 = p__128013;
var map__128015__$1 = (((((!((map__128015 == null))))?(((((map__128015.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__128015.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__128015):map__128015);
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__128015__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
var error_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__128015__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
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
var G__128021 = arguments.length;
switch (G__128021) {
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
var G__128025 = arguments.length;
switch (G__128025) {
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
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__128028){
var vec__128032 = p__128028;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__128032,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__128032,(1),null);
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
var vec__128038 = download;
var op = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__128038,(0),null);
var lang = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__128038,(1),null);
var translations__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__128038,(2),null);
var d = vec__128038;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(lang))){
var pred__128044 = cljs.core._EQ_;
var expr__128045 = op;
if(cljs.core.truth_((pred__128044.cljs$core$IFn$_invoke$arity$2 ? pred__128044.cljs$core$IFn$_invoke$arity$2("upsert",expr__128045) : pred__128044.call(null,"upsert",expr__128045)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"upsert","upsert",1416724984),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(lang),translations.tranny_api.json_kvs__GT_m(translations__$1)], null);
} else {
if(cljs.core.truth_((pred__128044.cljs$core$IFn$_invoke$arity$2 ? pred__128044.cljs$core$IFn$_invoke$arity$2("switch",expr__128045) : pred__128044.call(null,"switch",expr__128045)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switch","switch",71881310),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(lang)], null);
} else {
if(cljs.core.truth_((pred__128044.cljs$core$IFn$_invoke$arity$2 ? pred__128044.cljs$core$IFn$_invoke$arity$2("error",expr__128045) : pred__128044.call(null,"error",expr__128045)))){
var vec__128047 = d;
var seq__128048 = cljs.core.seq(vec__128047);
var first__128049 = cljs.core.first(seq__128048);
var seq__128048__$1 = cljs.core.next(seq__128048);
var _ = first__128049;
var msgs = seq__128048__$1;
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
var G__128060 = arguments.length;
switch (G__128060) {
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
ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic(url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (p1__128053_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ok_chan,p1__128053_SHARP_);
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),(function (p1__128056_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(err_chan,p1__128056_SHARP_);
}),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lang","lang",-1819677104),lang], null),new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"json","json",1279968570)], null)], 0));

var c__29432__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29433__auto__ = (function (){var switch__29362__auto__ = (function (state_128101){
var state_val_128103 = (state_128101[(1)]);
if((state_val_128103 === (1))){
var inst_128067 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_128070 = [ok_chan,err_chan];
var inst_128072 = (new cljs.core.PersistentVector(null,2,(5),inst_128067,inst_128070,null));
var state_128101__$1 = state_128101;
return cljs.core.async.ioc_alts_BANG_(state_128101__$1,(2),inst_128072);
} else {
if((state_val_128103 === (2))){
var inst_128076 = (state_128101[(2)]);
var inst_128078 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_128076,(0),null);
var inst_128080 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_128076,(1),null);
var inst_128082 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_128080,ok_chan);
var state_128101__$1 = (function (){var statearr_128106 = state_128101;
(statearr_128106[(7)] = inst_128078);

return statearr_128106;
})();
if(inst_128082){
var statearr_128108_128227 = state_128101__$1;
(statearr_128108_128227[(1)] = (3));

} else {
var statearr_128110_128228 = state_128101__$1;
(statearr_128110_128228[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128103 === (3))){
var inst_128078 = (state_128101[(7)]);
var inst_128086 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_128078,"body");
var inst_128088 = translations.tranny_api.parse_downloaded_op(inst_128086);
var state_128101__$1 = state_128101;
var statearr_128112_128230 = state_128101__$1;
(statearr_128112_128230[(2)] = inst_128088);

(statearr_128112_128230[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128103 === (4))){
var inst_128078 = (state_128101[(7)]);
var inst_128095 = clojure.walk.keywordize_keys(inst_128078);
var inst_128096 = translations.tranny_api.parse_error(inst_128095);
var state_128101__$1 = state_128101;
var statearr_128114_128240 = state_128101__$1;
(statearr_128114_128240[(2)] = inst_128096);

(statearr_128114_128240[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128103 === (5))){
var inst_128098 = (state_128101[(2)]);
var state_128101__$1 = state_128101;
return cljs.core.async.impl.ioc_helpers.return_chan(state_128101__$1,inst_128098);
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
var statearr_128116 = [null,null,null,null,null,null,null,null];
(statearr_128116[(0)] = translations$tranny_api$state_machine__29363__auto__);

(statearr_128116[(1)] = (1));

return statearr_128116;
});
var translations$tranny_api$state_machine__29363__auto____1 = (function (state_128101){
while(true){
var ret_value__29364__auto__ = (function (){try{while(true){
var result__29365__auto__ = switch__29362__auto__(state_128101);
if(cljs.core.keyword_identical_QMARK_(result__29365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29365__auto__;
}
break;
}
}catch (e128118){var ex__29366__auto__ = e128118;
var statearr_128120_128264 = state_128101;
(statearr_128120_128264[(2)] = ex__29366__auto__);


if(cljs.core.seq((state_128101[(4)]))){
var statearr_128122_128266 = state_128101;
(statearr_128122_128266[(1)] = cljs.core.first((state_128101[(4)])));

} else {
throw ex__29366__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__128268 = state_128101;
state_128101 = G__128268;
continue;
} else {
return ret_value__29364__auto__;
}
break;
}
});
translations$tranny_api$state_machine__29363__auto__ = function(state_128101){
switch(arguments.length){
case 0:
return translations$tranny_api$state_machine__29363__auto____0.call(this);
case 1:
return translations$tranny_api$state_machine__29363__auto____1.call(this,state_128101);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
translations$tranny_api$state_machine__29363__auto__.cljs$core$IFn$_invoke$arity$0 = translations$tranny_api$state_machine__29363__auto____0;
translations$tranny_api$state_machine__29363__auto__.cljs$core$IFn$_invoke$arity$1 = translations$tranny_api$state_machine__29363__auto____1;
return translations$tranny_api$state_machine__29363__auto__;
})()
})();
var state__29434__auto__ = (function (){var statearr_128124 = f__29433__auto__();
(statearr_128124[(6)] = c__29432__auto__);

return statearr_128124;
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
var G__128132 = arguments.length;
switch (G__128132) {
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
ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic(url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (p1__128126_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ok_chan,p1__128126_SHARP_);
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),(function (p1__128128_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(err_chan,p1__128128_SHARP_);
}),new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"json","json",1279968570)], null)], 0));

var c__29432__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29433__auto__ = (function (){var switch__29362__auto__ = (function (state_128183){
var state_val_128184 = (state_128183[(1)]);
if((state_val_128184 === (1))){
var inst_128140 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_128143 = [ok_chan,err_chan];
var inst_128145 = (new cljs.core.PersistentVector(null,2,(5),inst_128140,inst_128143,null));
var state_128183__$1 = state_128183;
return cljs.core.async.ioc_alts_BANG_(state_128183__$1,(2),inst_128145);
} else {
if((state_val_128184 === (2))){
var inst_128148 = (state_128183[(2)]);
var inst_128150 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_128148,(0),null);
var inst_128153 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_128148,(1),null);
var inst_128155 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_128153,ok_chan);
var state_128183__$1 = (function (){var statearr_128187 = state_128183;
(statearr_128187[(7)] = inst_128150);

return statearr_128187;
})();
if(inst_128155){
var statearr_128189_128314 = state_128183__$1;
(statearr_128189_128314[(1)] = (3));

} else {
var statearr_128190_128316 = state_128183__$1;
(statearr_128190_128316[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128184 === (3))){
var inst_128150 = (state_128183[(7)]);
var inst_128159 = cljs.core.vector_QMARK_(inst_128150);
var state_128183__$1 = state_128183;
if(inst_128159){
var statearr_128193_128322 = state_128183__$1;
(statearr_128193_128322[(1)] = (6));

} else {
var statearr_128194_128324 = state_128183__$1;
(statearr_128194_128324[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128184 === (4))){
var inst_128150 = (state_128183[(7)]);
var inst_128176 = clojure.walk.keywordize_keys(inst_128150);
var inst_128177 = translations.tranny_api.parse_error(inst_128176);
var state_128183__$1 = state_128183;
var statearr_128196_128332 = state_128183__$1;
(statearr_128196_128332[(2)] = inst_128177);

(statearr_128196_128332[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128184 === (5))){
var inst_128179 = (state_128183[(2)]);
var state_128183__$1 = state_128183;
return cljs.core.async.impl.ioc_helpers.return_chan(state_128183__$1,inst_128179);
} else {
if((state_val_128184 === (6))){
var inst_128150 = (state_128183[(7)]);
var inst_128165 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(translations.tranny_api.parse_downloaded_op,inst_128150);
var state_128183__$1 = state_128183;
var statearr_128198_128334 = state_128183__$1;
(statearr_128198_128334[(2)] = inst_128165);

(statearr_128198_128334[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128184 === (7))){
var state_128183__$1 = state_128183;
var statearr_128200_128336 = state_128183__$1;
(statearr_128200_128336[(2)] = null);

(statearr_128200_128336[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128184 === (8))){
var inst_128169 = (state_128183[(2)]);
var state_128183__$1 = state_128183;
var statearr_128202_128338 = state_128183__$1;
(statearr_128202_128338[(2)] = inst_128169);

(statearr_128202_128338[(1)] = (5));


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
var statearr_128204 = [null,null,null,null,null,null,null,null];
(statearr_128204[(0)] = translations$tranny_api$state_machine__29363__auto__);

(statearr_128204[(1)] = (1));

return statearr_128204;
});
var translations$tranny_api$state_machine__29363__auto____1 = (function (state_128183){
while(true){
var ret_value__29364__auto__ = (function (){try{while(true){
var result__29365__auto__ = switch__29362__auto__(state_128183);
if(cljs.core.keyword_identical_QMARK_(result__29365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29365__auto__;
}
break;
}
}catch (e128207){var ex__29366__auto__ = e128207;
var statearr_128209_128348 = state_128183;
(statearr_128209_128348[(2)] = ex__29366__auto__);


if(cljs.core.seq((state_128183[(4)]))){
var statearr_128210_128350 = state_128183;
(statearr_128210_128350[(1)] = cljs.core.first((state_128183[(4)])));

} else {
throw ex__29366__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__128352 = state_128183;
state_128183 = G__128352;
continue;
} else {
return ret_value__29364__auto__;
}
break;
}
});
translations$tranny_api$state_machine__29363__auto__ = function(state_128183){
switch(arguments.length){
case 0:
return translations$tranny_api$state_machine__29363__auto____0.call(this);
case 1:
return translations$tranny_api$state_machine__29363__auto____1.call(this,state_128183);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
translations$tranny_api$state_machine__29363__auto__.cljs$core$IFn$_invoke$arity$0 = translations$tranny_api$state_machine__29363__auto____0;
translations$tranny_api$state_machine__29363__auto__.cljs$core$IFn$_invoke$arity$1 = translations$tranny_api$state_machine__29363__auto____1;
return translations$tranny_api$state_machine__29363__auto__;
})()
})();
var state__29434__auto__ = (function (){var statearr_128212 = f__29433__auto__();
(statearr_128212[(6)] = c__29432__auto__);

return statearr_128212;
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
