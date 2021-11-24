goog.provide('translations.tranny_api');
translations.tranny_api.server_url = "http://localhost:1337/";
translations.tranny_api.base_url = [translations.tranny_api.server_url,"api/"].join('');
translations.tranny_api.get_handler = (function translations$tranny_api$get_handler(response){
var clj_rsp = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(response,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var hit_count = cljs.core.count(clj_rsp);
var result = (function (){var pred__54089 = cljs.core._EQ_;
var expr__54090 = hit_count;
if(cljs.core.truth_((pred__54089.cljs$core$IFn$_invoke$arity$2 ? pred__54089.cljs$core$IFn$_invoke$arity$2((0),expr__54090) : pred__54089.call(null,(0),expr__54090)))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["No results"], 0));
} else {
if(cljs.core.truth_((pred__54089.cljs$core$IFn$_invoke$arity$2 ? pred__54089.cljs$core$IFn$_invoke$arity$2((1),expr__54090) : pred__54089.call(null,(1),expr__54090)))){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.first(clj_rsp),"text");
} else {
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__54087_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__54087_SHARP_,"text");
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
translations.tranny_api.error_handler = (function translations$tranny_api$error_handler(p__54095){
var map__54096 = p__54095;
var map__54096__$1 = (((((!((map__54096 == null))))?(((((map__54096.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54096.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54096):map__54096);
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54096__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54096__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
var response = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54096__$1,new cljs.core.Keyword(null,"response","response",-1068424192));
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
var G__54103 = arguments.length;
switch (G__54103) {
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

(translations.tranny_api.lookup_key.cljs$core$IFn$_invoke$arity$2 = (function (url,p__54105){
var map__54107 = p__54105;
var map__54107__$1 = (((((!((map__54107 == null))))?(((((map__54107.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54107.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54107):map__54107);
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54107__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
var error_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54107__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
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
var G__54114 = arguments.length;
switch (G__54114) {
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
var G__54118 = arguments.length;
switch (G__54118) {
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
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__54123){
var vec__54124 = p__54123;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54124,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54124,(1),null);
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
var vec__54133 = download;
var op = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54133,(0),null);
var lang = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54133,(1),null);
var translations__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54133,(2),null);
var d = vec__54133;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(lang))){
var pred__54136 = cljs.core._EQ_;
var expr__54137 = op;
if(cljs.core.truth_((pred__54136.cljs$core$IFn$_invoke$arity$2 ? pred__54136.cljs$core$IFn$_invoke$arity$2("upsert",expr__54137) : pred__54136.call(null,"upsert",expr__54137)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"upsert","upsert",1416724984),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(lang),translations.tranny_api.json_kvs__GT_m(translations__$1)], null);
} else {
if(cljs.core.truth_((pred__54136.cljs$core$IFn$_invoke$arity$2 ? pred__54136.cljs$core$IFn$_invoke$arity$2("switch",expr__54137) : pred__54136.call(null,"switch",expr__54137)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switch","switch",71881310),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(lang)], null);
} else {
if(cljs.core.truth_((pred__54136.cljs$core$IFn$_invoke$arity$2 ? pred__54136.cljs$core$IFn$_invoke$arity$2("error",expr__54137) : pred__54136.call(null,"error",expr__54137)))){
var vec__54142 = d;
var seq__54143 = cljs.core.seq(vec__54142);
var first__54144 = cljs.core.first(seq__54143);
var seq__54143__$1 = cljs.core.next(seq__54143);
var _ = first__54144;
var msgs = seq__54143__$1;
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
var G__54152 = arguments.length;
switch (G__54152) {
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
ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic(url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (p1__54148_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ok_chan,p1__54148_SHARP_);
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),(function (p1__54149_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(err_chan,p1__54149_SHARP_);
}),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lang","lang",-1819677104),lang], null),new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"json","json",1279968570)], null)], 0));

var c__29432__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29433__auto__ = (function (){var switch__29362__auto__ = (function (state_54193){
var state_val_54196 = (state_54193[(1)]);
if((state_val_54196 === (1))){
var inst_54160 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_54161 = [ok_chan,err_chan];
var inst_54163 = (new cljs.core.PersistentVector(null,2,(5),inst_54160,inst_54161,null));
var state_54193__$1 = state_54193;
return cljs.core.async.ioc_alts_BANG_(state_54193__$1,(2),inst_54163);
} else {
if((state_val_54196 === (2))){
var inst_54168 = (state_54193[(2)]);
var inst_54171 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_54168,(0),null);
var inst_54173 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_54168,(1),null);
var inst_54175 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_54173,ok_chan);
var state_54193__$1 = (function (){var statearr_54198 = state_54193;
(statearr_54198[(7)] = inst_54171);

return statearr_54198;
})();
if(inst_54175){
var statearr_54200_54348 = state_54193__$1;
(statearr_54200_54348[(1)] = (3));

} else {
var statearr_54202_54349 = state_54193__$1;
(statearr_54202_54349[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54196 === (3))){
var inst_54171 = (state_54193[(7)]);
var inst_54180 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_54171,"body");
var inst_54181 = translations.tranny_api.parse_downloaded_op(inst_54180);
var state_54193__$1 = state_54193;
var statearr_54204_54353 = state_54193__$1;
(statearr_54204_54353[(2)] = inst_54181);

(statearr_54204_54353[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54196 === (4))){
var inst_54171 = (state_54193[(7)]);
var inst_54186 = clojure.walk.keywordize_keys(inst_54171);
var inst_54188 = translations.tranny_api.parse_error(inst_54186);
var state_54193__$1 = state_54193;
var statearr_54206_54357 = state_54193__$1;
(statearr_54206_54357[(2)] = inst_54188);

(statearr_54206_54357[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54196 === (5))){
var inst_54190 = (state_54193[(2)]);
var state_54193__$1 = state_54193;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54193__$1,inst_54190);
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
var statearr_54208 = [null,null,null,null,null,null,null,null];
(statearr_54208[(0)] = translations$tranny_api$state_machine__29363__auto__);

(statearr_54208[(1)] = (1));

return statearr_54208;
});
var translations$tranny_api$state_machine__29363__auto____1 = (function (state_54193){
while(true){
var ret_value__29364__auto__ = (function (){try{while(true){
var result__29365__auto__ = switch__29362__auto__(state_54193);
if(cljs.core.keyword_identical_QMARK_(result__29365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29365__auto__;
}
break;
}
}catch (e54209){var ex__29366__auto__ = e54209;
var statearr_54211_54364 = state_54193;
(statearr_54211_54364[(2)] = ex__29366__auto__);


if(cljs.core.seq((state_54193[(4)]))){
var statearr_54213_54366 = state_54193;
(statearr_54213_54366[(1)] = cljs.core.first((state_54193[(4)])));

} else {
throw ex__29366__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54371 = state_54193;
state_54193 = G__54371;
continue;
} else {
return ret_value__29364__auto__;
}
break;
}
});
translations$tranny_api$state_machine__29363__auto__ = function(state_54193){
switch(arguments.length){
case 0:
return translations$tranny_api$state_machine__29363__auto____0.call(this);
case 1:
return translations$tranny_api$state_machine__29363__auto____1.call(this,state_54193);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
translations$tranny_api$state_machine__29363__auto__.cljs$core$IFn$_invoke$arity$0 = translations$tranny_api$state_machine__29363__auto____0;
translations$tranny_api$state_machine__29363__auto__.cljs$core$IFn$_invoke$arity$1 = translations$tranny_api$state_machine__29363__auto____1;
return translations$tranny_api$state_machine__29363__auto__;
})()
})();
var state__29434__auto__ = (function (){var statearr_54216 = f__29433__auto__();
(statearr_54216[(6)] = c__29432__auto__);

return statearr_54216;
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
var G__54224 = arguments.length;
switch (G__54224) {
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
ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic(url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (p1__54217_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ok_chan,p1__54217_SHARP_);
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),(function (p1__54220_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(err_chan,p1__54220_SHARP_);
}),new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"json","json",1279968570)], null)], 0));

var c__29432__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29433__auto__ = (function (){var switch__29362__auto__ = (function (state_54273){
var state_val_54274 = (state_54273[(1)]);
if((state_val_54274 === (1))){
var inst_54231 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_54233 = [ok_chan,err_chan];
var inst_54234 = (new cljs.core.PersistentVector(null,2,(5),inst_54231,inst_54233,null));
var state_54273__$1 = state_54273;
return cljs.core.async.ioc_alts_BANG_(state_54273__$1,(2),inst_54234);
} else {
if((state_val_54274 === (2))){
var inst_54237 = (state_54273[(2)]);
var inst_54241 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_54237,(0),null);
var inst_54243 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_54237,(1),null);
var inst_54245 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_54243,ok_chan);
var state_54273__$1 = (function (){var statearr_54277 = state_54273;
(statearr_54277[(7)] = inst_54241);

return statearr_54277;
})();
if(inst_54245){
var statearr_54278_54402 = state_54273__$1;
(statearr_54278_54402[(1)] = (3));

} else {
var statearr_54279_54403 = state_54273__$1;
(statearr_54279_54403[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54274 === (3))){
var inst_54241 = (state_54273[(7)]);
var inst_54249 = cljs.core.vector_QMARK_(inst_54241);
var state_54273__$1 = state_54273;
if(inst_54249){
var statearr_54283_54405 = state_54273__$1;
(statearr_54283_54405[(1)] = (6));

} else {
var statearr_54284_54406 = state_54273__$1;
(statearr_54284_54406[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54274 === (4))){
var inst_54241 = (state_54273[(7)]);
var inst_54263 = clojure.walk.keywordize_keys(inst_54241);
var inst_54264 = translations.tranny_api.parse_error(inst_54263);
var state_54273__$1 = state_54273;
var statearr_54287_54409 = state_54273__$1;
(statearr_54287_54409[(2)] = inst_54264);

(statearr_54287_54409[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54274 === (5))){
var inst_54266 = (state_54273[(2)]);
var state_54273__$1 = state_54273;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54273__$1,inst_54266);
} else {
if((state_val_54274 === (6))){
var inst_54241 = (state_54273[(7)]);
var inst_54253 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(translations.tranny_api.parse_downloaded_op,inst_54241);
var state_54273__$1 = state_54273;
var statearr_54289_54418 = state_54273__$1;
(statearr_54289_54418[(2)] = inst_54253);

(statearr_54289_54418[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54274 === (7))){
var state_54273__$1 = state_54273;
var statearr_54290_54419 = state_54273__$1;
(statearr_54290_54419[(2)] = null);

(statearr_54290_54419[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54274 === (8))){
var inst_54257 = (state_54273[(2)]);
var state_54273__$1 = state_54273;
var statearr_54292_54424 = state_54273__$1;
(statearr_54292_54424[(2)] = inst_54257);

(statearr_54292_54424[(1)] = (5));


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
var statearr_54295 = [null,null,null,null,null,null,null,null];
(statearr_54295[(0)] = translations$tranny_api$state_machine__29363__auto__);

(statearr_54295[(1)] = (1));

return statearr_54295;
});
var translations$tranny_api$state_machine__29363__auto____1 = (function (state_54273){
while(true){
var ret_value__29364__auto__ = (function (){try{while(true){
var result__29365__auto__ = switch__29362__auto__(state_54273);
if(cljs.core.keyword_identical_QMARK_(result__29365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29365__auto__;
}
break;
}
}catch (e54296){var ex__29366__auto__ = e54296;
var statearr_54298_54429 = state_54273;
(statearr_54298_54429[(2)] = ex__29366__auto__);


if(cljs.core.seq((state_54273[(4)]))){
var statearr_54299_54430 = state_54273;
(statearr_54299_54430[(1)] = cljs.core.first((state_54273[(4)])));

} else {
throw ex__29366__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54431 = state_54273;
state_54273 = G__54431;
continue;
} else {
return ret_value__29364__auto__;
}
break;
}
});
translations$tranny_api$state_machine__29363__auto__ = function(state_54273){
switch(arguments.length){
case 0:
return translations$tranny_api$state_machine__29363__auto____0.call(this);
case 1:
return translations$tranny_api$state_machine__29363__auto____1.call(this,state_54273);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
translations$tranny_api$state_machine__29363__auto__.cljs$core$IFn$_invoke$arity$0 = translations$tranny_api$state_machine__29363__auto____0;
translations$tranny_api$state_machine__29363__auto__.cljs$core$IFn$_invoke$arity$1 = translations$tranny_api$state_machine__29363__auto____1;
return translations$tranny_api$state_machine__29363__auto__;
})()
})();
var state__29434__auto__ = (function (){var statearr_54303 = f__29433__auto__();
(statearr_54303[(6)] = c__29432__auto__);

return statearr_54303;
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
