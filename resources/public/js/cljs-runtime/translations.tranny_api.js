goog.provide('translations.tranny_api');
translations.tranny_api.server_url = "https://api-prostate.wintoncentre.uk/";
translations.tranny_api.base_url = [translations.tranny_api.server_url,"api/"].join('');
translations.tranny_api.get_handler = (function translations$tranny_api$get_handler(response){
var clj_rsp = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(response,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var hit_count = cljs.core.count(clj_rsp);
var result = (function (){var pred__43412 = cljs.core._EQ_;
var expr__43413 = hit_count;
if(cljs.core.truth_((pred__43412.cljs$core$IFn$_invoke$arity$2 ? pred__43412.cljs$core$IFn$_invoke$arity$2((0),expr__43413) : pred__43412.call(null,(0),expr__43413)))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["No results"], 0));
} else {
if(cljs.core.truth_((pred__43412.cljs$core$IFn$_invoke$arity$2 ? pred__43412.cljs$core$IFn$_invoke$arity$2((1),expr__43413) : pred__43412.call(null,(1),expr__43413)))){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.first(clj_rsp),"text");
} else {
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__43410_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__43410_SHARP_,"text");
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
translations.tranny_api.error_handler = (function translations$tranny_api$error_handler(p__43417){
var map__43418 = p__43417;
var map__43418__$1 = cljs.core.__destructure_map(map__43418);
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43418__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43418__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
var response = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43418__$1,new cljs.core.Keyword(null,"response","response",-1068424192));
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
var G__43423 = arguments.length;
switch (G__43423) {
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

(translations.tranny_api.lookup_key.cljs$core$IFn$_invoke$arity$2 = (function (url,p__43430){
var map__43431 = p__43430;
var map__43431__$1 = cljs.core.__destructure_map(map__43431);
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43431__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
var error_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43431__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
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
var G__43469 = arguments.length;
switch (G__43469) {
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
var G__43478 = arguments.length;
switch (G__43478) {
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
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__43495){
var vec__43498 = p__43495;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43498,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43498,(1),null);
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
var vec__43506 = download;
var op = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43506,(0),null);
var lang = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43506,(1),null);
var translations__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43506,(2),null);
var d = vec__43506;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(lang))){
var pred__43510 = cljs.core._EQ_;
var expr__43511 = op;
if(cljs.core.truth_((pred__43510.cljs$core$IFn$_invoke$arity$2 ? pred__43510.cljs$core$IFn$_invoke$arity$2("upsert",expr__43511) : pred__43510.call(null,"upsert",expr__43511)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"upsert","upsert",1416724984),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(lang),translations.tranny_api.json_kvs__GT_m(translations__$1)], null);
} else {
if(cljs.core.truth_((pred__43510.cljs$core$IFn$_invoke$arity$2 ? pred__43510.cljs$core$IFn$_invoke$arity$2("switch",expr__43511) : pred__43510.call(null,"switch",expr__43511)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switch","switch",71881310),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(lang)], null);
} else {
if(cljs.core.truth_((pred__43510.cljs$core$IFn$_invoke$arity$2 ? pred__43510.cljs$core$IFn$_invoke$arity$2("error",expr__43511) : pred__43510.call(null,"error",expr__43511)))){
var vec__43513 = d;
var seq__43514 = cljs.core.seq(vec__43513);
var first__43515 = cljs.core.first(seq__43514);
var seq__43514__$1 = cljs.core.next(seq__43514);
var _ = first__43515;
var msgs = seq__43514__$1;
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
var G__43519 = arguments.length;
switch (G__43519) {
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
ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic(url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (p1__43516_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ok_chan,p1__43516_SHARP_);
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),(function (p1__43517_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(err_chan,p1__43517_SHARP_);
}),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lang","lang",-1819677104),lang], null),new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"json","json",1279968570)], null)], 0));

var c__36087__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36088__auto__ = (function (){var switch__35885__auto__ = (function (state_43540){
var state_val_43541 = (state_43540[(1)]);
if((state_val_43541 === (1))){
var inst_43523 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_43524 = [ok_chan,err_chan];
var inst_43525 = (new cljs.core.PersistentVector(null,2,(5),inst_43523,inst_43524,null));
var state_43540__$1 = state_43540;
return cljs.core.async.ioc_alts_BANG_(state_43540__$1,(2),inst_43525);
} else {
if((state_val_43541 === (2))){
var inst_43527 = (state_43540[(2)]);
var inst_43528 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43527,(0),null);
var inst_43529 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43527,(1),null);
var inst_43530 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_43529,ok_chan);
var state_43540__$1 = (function (){var statearr_43542 = state_43540;
(statearr_43542[(7)] = inst_43528);

return statearr_43542;
})();
if(inst_43530){
var statearr_43543_43609 = state_43540__$1;
(statearr_43543_43609[(1)] = (3));

} else {
var statearr_43544_43610 = state_43540__$1;
(statearr_43544_43610[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43541 === (3))){
var inst_43528 = (state_43540[(7)]);
var inst_43532 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_43528,"body");
var inst_43533 = translations.tranny_api.parse_downloaded_op(inst_43532);
var state_43540__$1 = state_43540;
var statearr_43545_43611 = state_43540__$1;
(statearr_43545_43611[(2)] = inst_43533);

(statearr_43545_43611[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43541 === (4))){
var inst_43528 = (state_43540[(7)]);
var inst_43535 = clojure.walk.keywordize_keys(inst_43528);
var inst_43536 = translations.tranny_api.parse_error(inst_43535);
var state_43540__$1 = state_43540;
var statearr_43546_43612 = state_43540__$1;
(statearr_43546_43612[(2)] = inst_43536);

(statearr_43546_43612[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43541 === (5))){
var inst_43538 = (state_43540[(2)]);
var state_43540__$1 = state_43540;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43540__$1,inst_43538);
} else {
return null;
}
}
}
}
}
});
return (function() {
var translations$tranny_api$state_machine__35886__auto__ = null;
var translations$tranny_api$state_machine__35886__auto____0 = (function (){
var statearr_43547 = [null,null,null,null,null,null,null,null];
(statearr_43547[(0)] = translations$tranny_api$state_machine__35886__auto__);

(statearr_43547[(1)] = (1));

return statearr_43547;
});
var translations$tranny_api$state_machine__35886__auto____1 = (function (state_43540){
while(true){
var ret_value__35887__auto__ = (function (){try{while(true){
var result__35888__auto__ = switch__35885__auto__(state_43540);
if(cljs.core.keyword_identical_QMARK_(result__35888__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35888__auto__;
}
break;
}
}catch (e43548){var ex__35889__auto__ = e43548;
var statearr_43549_43613 = state_43540;
(statearr_43549_43613[(2)] = ex__35889__auto__);


if(cljs.core.seq((state_43540[(4)]))){
var statearr_43550_43614 = state_43540;
(statearr_43550_43614[(1)] = cljs.core.first((state_43540[(4)])));

} else {
throw ex__35889__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43615 = state_43540;
state_43540 = G__43615;
continue;
} else {
return ret_value__35887__auto__;
}
break;
}
});
translations$tranny_api$state_machine__35886__auto__ = function(state_43540){
switch(arguments.length){
case 0:
return translations$tranny_api$state_machine__35886__auto____0.call(this);
case 1:
return translations$tranny_api$state_machine__35886__auto____1.call(this,state_43540);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
translations$tranny_api$state_machine__35886__auto__.cljs$core$IFn$_invoke$arity$0 = translations$tranny_api$state_machine__35886__auto____0;
translations$tranny_api$state_machine__35886__auto__.cljs$core$IFn$_invoke$arity$1 = translations$tranny_api$state_machine__35886__auto____1;
return translations$tranny_api$state_machine__35886__auto__;
})()
})();
var state__36089__auto__ = (function (){var statearr_43551 = f__36088__auto__();
(statearr_43551[(6)] = c__36087__auto__);

return statearr_43551;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36089__auto__);
}));

return c__36087__auto__;
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
var G__43555 = arguments.length;
switch (G__43555) {
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
ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic(url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (p1__43552_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ok_chan,p1__43552_SHARP_);
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),(function (p1__43553_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(err_chan,p1__43553_SHARP_);
}),new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"json","json",1279968570)], null)], 0));

var c__36087__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36088__auto__ = (function (){var switch__35885__auto__ = (function (state_43580){
var state_val_43581 = (state_43580[(1)]);
if((state_val_43581 === (1))){
var inst_43559 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_43560 = [ok_chan,err_chan];
var inst_43561 = (new cljs.core.PersistentVector(null,2,(5),inst_43559,inst_43560,null));
var state_43580__$1 = state_43580;
return cljs.core.async.ioc_alts_BANG_(state_43580__$1,(2),inst_43561);
} else {
if((state_val_43581 === (2))){
var inst_43563 = (state_43580[(2)]);
var inst_43564 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43563,(0),null);
var inst_43565 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43563,(1),null);
var inst_43566 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_43565,ok_chan);
var state_43580__$1 = (function (){var statearr_43582 = state_43580;
(statearr_43582[(7)] = inst_43564);

return statearr_43582;
})();
if(inst_43566){
var statearr_43583_43617 = state_43580__$1;
(statearr_43583_43617[(1)] = (3));

} else {
var statearr_43584_43618 = state_43580__$1;
(statearr_43584_43618[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43581 === (3))){
var inst_43564 = (state_43580[(7)]);
var inst_43568 = cljs.core.vector_QMARK_(inst_43564);
var state_43580__$1 = state_43580;
if(inst_43568){
var statearr_43585_43619 = state_43580__$1;
(statearr_43585_43619[(1)] = (6));

} else {
var statearr_43586_43620 = state_43580__$1;
(statearr_43586_43620[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43581 === (4))){
var inst_43564 = (state_43580[(7)]);
var inst_43575 = clojure.walk.keywordize_keys(inst_43564);
var inst_43576 = translations.tranny_api.parse_error(inst_43575);
var state_43580__$1 = state_43580;
var statearr_43587_43621 = state_43580__$1;
(statearr_43587_43621[(2)] = inst_43576);

(statearr_43587_43621[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43581 === (5))){
var inst_43578 = (state_43580[(2)]);
var state_43580__$1 = state_43580;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43580__$1,inst_43578);
} else {
if((state_val_43581 === (6))){
var inst_43564 = (state_43580[(7)]);
var inst_43570 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(translations.tranny_api.parse_downloaded_op,inst_43564);
var state_43580__$1 = state_43580;
var statearr_43592_43622 = state_43580__$1;
(statearr_43592_43622[(2)] = inst_43570);

(statearr_43592_43622[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43581 === (7))){
var state_43580__$1 = state_43580;
var statearr_43594_43623 = state_43580__$1;
(statearr_43594_43623[(2)] = null);

(statearr_43594_43623[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43581 === (8))){
var inst_43573 = (state_43580[(2)]);
var state_43580__$1 = state_43580;
var statearr_43599_43624 = state_43580__$1;
(statearr_43599_43624[(2)] = inst_43573);

(statearr_43599_43624[(1)] = (5));


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
var translations$tranny_api$state_machine__35886__auto__ = null;
var translations$tranny_api$state_machine__35886__auto____0 = (function (){
var statearr_43600 = [null,null,null,null,null,null,null,null];
(statearr_43600[(0)] = translations$tranny_api$state_machine__35886__auto__);

(statearr_43600[(1)] = (1));

return statearr_43600;
});
var translations$tranny_api$state_machine__35886__auto____1 = (function (state_43580){
while(true){
var ret_value__35887__auto__ = (function (){try{while(true){
var result__35888__auto__ = switch__35885__auto__(state_43580);
if(cljs.core.keyword_identical_QMARK_(result__35888__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35888__auto__;
}
break;
}
}catch (e43601){var ex__35889__auto__ = e43601;
var statearr_43602_43625 = state_43580;
(statearr_43602_43625[(2)] = ex__35889__auto__);


if(cljs.core.seq((state_43580[(4)]))){
var statearr_43603_43626 = state_43580;
(statearr_43603_43626[(1)] = cljs.core.first((state_43580[(4)])));

} else {
throw ex__35889__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43627 = state_43580;
state_43580 = G__43627;
continue;
} else {
return ret_value__35887__auto__;
}
break;
}
});
translations$tranny_api$state_machine__35886__auto__ = function(state_43580){
switch(arguments.length){
case 0:
return translations$tranny_api$state_machine__35886__auto____0.call(this);
case 1:
return translations$tranny_api$state_machine__35886__auto____1.call(this,state_43580);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
translations$tranny_api$state_machine__35886__auto__.cljs$core$IFn$_invoke$arity$0 = translations$tranny_api$state_machine__35886__auto____0;
translations$tranny_api$state_machine__35886__auto__.cljs$core$IFn$_invoke$arity$1 = translations$tranny_api$state_machine__35886__auto____1;
return translations$tranny_api$state_machine__35886__auto__;
})()
})();
var state__36089__auto__ = (function (){var statearr_43604 = f__36088__auto__();
(statearr_43604[(6)] = c__36087__auto__);

return statearr_43604;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36089__auto__);
}));

return c__36087__auto__;
}));

(translations.tranny_api.download_all_translations.cljs$core$IFn$_invoke$arity$2 = (function (ok_chan,err_chan){
return translations.tranny_api.download_all_translations.cljs$core$IFn$_invoke$arity$3(ok_chan,err_chan,translations.tranny_api.end_point("upserts/all"));
}));

(translations.tranny_api.download_all_translations.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=translations.tranny_api.js.map
