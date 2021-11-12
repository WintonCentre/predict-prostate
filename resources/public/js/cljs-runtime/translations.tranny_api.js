goog.provide('translations.tranny_api');
translations.tranny_api.server_url = "https://api.spa.breast.wintoncentre.uk/";
translations.tranny_api.base_url = [translations.tranny_api.server_url,"api/"].join('');
translations.tranny_api.get_handler = (function translations$tranny_api$get_handler(response){
var clj_rsp = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(response,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var hit_count = cljs.core.count(clj_rsp);
var result = (function (){var pred__35784 = cljs.core._EQ_;
var expr__35785 = hit_count;
if(cljs.core.truth_((pred__35784.cljs$core$IFn$_invoke$arity$2 ? pred__35784.cljs$core$IFn$_invoke$arity$2((0),expr__35785) : pred__35784.call(null,(0),expr__35785)))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["No results"], 0));
} else {
if(cljs.core.truth_((pred__35784.cljs$core$IFn$_invoke$arity$2 ? pred__35784.cljs$core$IFn$_invoke$arity$2((1),expr__35785) : pred__35784.call(null,(1),expr__35785)))){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.first(clj_rsp),"text");
} else {
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__35783_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__35783_SHARP_,"text");
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
translations.tranny_api.error_handler = (function translations$tranny_api$error_handler(p__35787){
var map__35788 = p__35787;
var map__35788__$1 = (((((!((map__35788 == null))))?(((((map__35788.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35788.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35788):map__35788);
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35788__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35788__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
var response = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35788__$1,new cljs.core.Keyword(null,"response","response",-1068424192));
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
var G__35791 = arguments.length;
switch (G__35791) {
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

(translations.tranny_api.lookup_key.cljs$core$IFn$_invoke$arity$2 = (function (url,p__35799){
var map__35801 = p__35799;
var map__35801__$1 = (((((!((map__35801 == null))))?(((((map__35801.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35801.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35801):map__35801);
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35801__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
var error_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35801__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
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
var G__35818 = arguments.length;
switch (G__35818) {
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
var G__35820 = arguments.length;
switch (G__35820) {
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
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__35821){
var vec__35822 = p__35821;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35822,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35822,(1),null);
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
var vec__35825 = download;
var op = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35825,(0),null);
var lang = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35825,(1),null);
var translations__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35825,(2),null);
var d = vec__35825;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(lang))){
var pred__35830 = cljs.core._EQ_;
var expr__35831 = op;
if(cljs.core.truth_((pred__35830.cljs$core$IFn$_invoke$arity$2 ? pred__35830.cljs$core$IFn$_invoke$arity$2("upsert",expr__35831) : pred__35830.call(null,"upsert",expr__35831)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"upsert","upsert",1416724984),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(lang),translations.tranny_api.json_kvs__GT_m(translations__$1)], null);
} else {
if(cljs.core.truth_((pred__35830.cljs$core$IFn$_invoke$arity$2 ? pred__35830.cljs$core$IFn$_invoke$arity$2("switch",expr__35831) : pred__35830.call(null,"switch",expr__35831)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switch","switch",71881310),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(lang)], null);
} else {
if(cljs.core.truth_((pred__35830.cljs$core$IFn$_invoke$arity$2 ? pred__35830.cljs$core$IFn$_invoke$arity$2("error",expr__35831) : pred__35830.call(null,"error",expr__35831)))){
var vec__35835 = d;
var seq__35836 = cljs.core.seq(vec__35835);
var first__35837 = cljs.core.first(seq__35836);
var seq__35836__$1 = cljs.core.next(seq__35836);
var _ = first__35837;
var msgs = seq__35836__$1;
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
var G__35841 = arguments.length;
switch (G__35841) {
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
ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic(url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (p1__35838_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ok_chan,p1__35838_SHARP_);
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),(function (p1__35839_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(err_chan,p1__35839_SHARP_);
}),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lang","lang",-1819677104),lang], null),new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"json","json",1279968570)], null)], 0));

var c__29668__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29669__auto__ = (function (){var switch__29583__auto__ = (function (state_35865){
var state_val_35866 = (state_35865[(1)]);
if((state_val_35866 === (1))){
var inst_35846 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_35848 = [ok_chan,err_chan];
var inst_35849 = (new cljs.core.PersistentVector(null,2,(5),inst_35846,inst_35848,null));
var state_35865__$1 = state_35865;
return cljs.core.async.ioc_alts_BANG_(state_35865__$1,(2),inst_35849);
} else {
if((state_val_35866 === (2))){
var inst_35851 = (state_35865[(2)]);
var inst_35852 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35851,(0),null);
var inst_35853 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35851,(1),null);
var inst_35854 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_35853,ok_chan);
var state_35865__$1 = (function (){var statearr_35867 = state_35865;
(statearr_35867[(7)] = inst_35852);

return statearr_35867;
})();
if(inst_35854){
var statearr_35868_35966 = state_35865__$1;
(statearr_35868_35966[(1)] = (3));

} else {
var statearr_35869_35967 = state_35865__$1;
(statearr_35869_35967[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35866 === (3))){
var inst_35852 = (state_35865[(7)]);
var inst_35856 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35852,"body");
var inst_35857 = translations.tranny_api.parse_downloaded_op(inst_35856);
var state_35865__$1 = state_35865;
var statearr_35870_35968 = state_35865__$1;
(statearr_35870_35968[(2)] = inst_35857);

(statearr_35870_35968[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35866 === (4))){
var inst_35852 = (state_35865[(7)]);
var inst_35859 = clojure.walk.keywordize_keys(inst_35852);
var inst_35860 = translations.tranny_api.parse_error(inst_35859);
var state_35865__$1 = state_35865;
var statearr_35871_35969 = state_35865__$1;
(statearr_35871_35969[(2)] = inst_35860);

(statearr_35871_35969[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35866 === (5))){
var inst_35862 = (state_35865[(2)]);
var state_35865__$1 = state_35865;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35865__$1,inst_35862);
} else {
return null;
}
}
}
}
}
});
return (function() {
var translations$tranny_api$state_machine__29584__auto__ = null;
var translations$tranny_api$state_machine__29584__auto____0 = (function (){
var statearr_35874 = [null,null,null,null,null,null,null,null];
(statearr_35874[(0)] = translations$tranny_api$state_machine__29584__auto__);

(statearr_35874[(1)] = (1));

return statearr_35874;
});
var translations$tranny_api$state_machine__29584__auto____1 = (function (state_35865){
while(true){
var ret_value__29585__auto__ = (function (){try{while(true){
var result__29586__auto__ = switch__29583__auto__(state_35865);
if(cljs.core.keyword_identical_QMARK_(result__29586__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29586__auto__;
}
break;
}
}catch (e35875){var ex__29587__auto__ = e35875;
var statearr_35876_35970 = state_35865;
(statearr_35876_35970[(2)] = ex__29587__auto__);


if(cljs.core.seq((state_35865[(4)]))){
var statearr_35877_35971 = state_35865;
(statearr_35877_35971[(1)] = cljs.core.first((state_35865[(4)])));

} else {
throw ex__29587__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35972 = state_35865;
state_35865 = G__35972;
continue;
} else {
return ret_value__29585__auto__;
}
break;
}
});
translations$tranny_api$state_machine__29584__auto__ = function(state_35865){
switch(arguments.length){
case 0:
return translations$tranny_api$state_machine__29584__auto____0.call(this);
case 1:
return translations$tranny_api$state_machine__29584__auto____1.call(this,state_35865);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
translations$tranny_api$state_machine__29584__auto__.cljs$core$IFn$_invoke$arity$0 = translations$tranny_api$state_machine__29584__auto____0;
translations$tranny_api$state_machine__29584__auto__.cljs$core$IFn$_invoke$arity$1 = translations$tranny_api$state_machine__29584__auto____1;
return translations$tranny_api$state_machine__29584__auto__;
})()
})();
var state__29670__auto__ = (function (){var statearr_35878 = f__29669__auto__();
(statearr_35878[(6)] = c__29668__auto__);

return statearr_35878;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29670__auto__);
}));

return c__29668__auto__;
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
var G__35882 = arguments.length;
switch (G__35882) {
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
ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic(url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (p1__35879_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ok_chan,p1__35879_SHARP_);
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),(function (p1__35880_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(err_chan,p1__35880_SHARP_);
}),new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"json","json",1279968570)], null)], 0));

var c__29668__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29669__auto__ = (function (){var switch__29583__auto__ = (function (state_35907){
var state_val_35908 = (state_35907[(1)]);
if((state_val_35908 === (1))){
var inst_35886 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_35887 = [ok_chan,err_chan];
var inst_35888 = (new cljs.core.PersistentVector(null,2,(5),inst_35886,inst_35887,null));
var state_35907__$1 = state_35907;
return cljs.core.async.ioc_alts_BANG_(state_35907__$1,(2),inst_35888);
} else {
if((state_val_35908 === (2))){
var inst_35890 = (state_35907[(2)]);
var inst_35891 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35890,(0),null);
var inst_35892 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35890,(1),null);
var inst_35893 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_35892,ok_chan);
var state_35907__$1 = (function (){var statearr_35909 = state_35907;
(statearr_35909[(7)] = inst_35891);

return statearr_35909;
})();
if(inst_35893){
var statearr_35910_35974 = state_35907__$1;
(statearr_35910_35974[(1)] = (3));

} else {
var statearr_35911_35975 = state_35907__$1;
(statearr_35911_35975[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35908 === (3))){
var inst_35891 = (state_35907[(7)]);
var inst_35895 = cljs.core.vector_QMARK_(inst_35891);
var state_35907__$1 = state_35907;
if(inst_35895){
var statearr_35914_35976 = state_35907__$1;
(statearr_35914_35976[(1)] = (6));

} else {
var statearr_35915_35977 = state_35907__$1;
(statearr_35915_35977[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35908 === (4))){
var inst_35891 = (state_35907[(7)]);
var inst_35902 = clojure.walk.keywordize_keys(inst_35891);
var inst_35903 = translations.tranny_api.parse_error(inst_35902);
var state_35907__$1 = state_35907;
var statearr_35917_35978 = state_35907__$1;
(statearr_35917_35978[(2)] = inst_35903);

(statearr_35917_35978[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35908 === (5))){
var inst_35905 = (state_35907[(2)]);
var state_35907__$1 = state_35907;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35907__$1,inst_35905);
} else {
if((state_val_35908 === (6))){
var inst_35891 = (state_35907[(7)]);
var inst_35897 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(translations.tranny_api.parse_downloaded_op,inst_35891);
var state_35907__$1 = state_35907;
var statearr_35920_35979 = state_35907__$1;
(statearr_35920_35979[(2)] = inst_35897);

(statearr_35920_35979[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35908 === (7))){
var state_35907__$1 = state_35907;
var statearr_35923_35980 = state_35907__$1;
(statearr_35923_35980[(2)] = null);

(statearr_35923_35980[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35908 === (8))){
var inst_35900 = (state_35907[(2)]);
var state_35907__$1 = state_35907;
var statearr_35924_35981 = state_35907__$1;
(statearr_35924_35981[(2)] = inst_35900);

(statearr_35924_35981[(1)] = (5));


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
var translations$tranny_api$state_machine__29584__auto__ = null;
var translations$tranny_api$state_machine__29584__auto____0 = (function (){
var statearr_35925 = [null,null,null,null,null,null,null,null];
(statearr_35925[(0)] = translations$tranny_api$state_machine__29584__auto__);

(statearr_35925[(1)] = (1));

return statearr_35925;
});
var translations$tranny_api$state_machine__29584__auto____1 = (function (state_35907){
while(true){
var ret_value__29585__auto__ = (function (){try{while(true){
var result__29586__auto__ = switch__29583__auto__(state_35907);
if(cljs.core.keyword_identical_QMARK_(result__29586__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29586__auto__;
}
break;
}
}catch (e35926){var ex__29587__auto__ = e35926;
var statearr_35927_35982 = state_35907;
(statearr_35927_35982[(2)] = ex__29587__auto__);


if(cljs.core.seq((state_35907[(4)]))){
var statearr_35928_35983 = state_35907;
(statearr_35928_35983[(1)] = cljs.core.first((state_35907[(4)])));

} else {
throw ex__29587__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35984 = state_35907;
state_35907 = G__35984;
continue;
} else {
return ret_value__29585__auto__;
}
break;
}
});
translations$tranny_api$state_machine__29584__auto__ = function(state_35907){
switch(arguments.length){
case 0:
return translations$tranny_api$state_machine__29584__auto____0.call(this);
case 1:
return translations$tranny_api$state_machine__29584__auto____1.call(this,state_35907);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
translations$tranny_api$state_machine__29584__auto__.cljs$core$IFn$_invoke$arity$0 = translations$tranny_api$state_machine__29584__auto____0;
translations$tranny_api$state_machine__29584__auto__.cljs$core$IFn$_invoke$arity$1 = translations$tranny_api$state_machine__29584__auto____1;
return translations$tranny_api$state_machine__29584__auto__;
})()
})();
var state__29670__auto__ = (function (){var statearr_35931 = f__29669__auto__();
(statearr_35931[(6)] = c__29668__auto__);

return statearr_35931;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29670__auto__);
}));

return c__29668__auto__;
}));

(translations.tranny_api.download_all_translations.cljs$core$IFn$_invoke$arity$2 = (function (ok_chan,err_chan){
return translations.tranny_api.download_all_translations.cljs$core$IFn$_invoke$arity$3(ok_chan,err_chan,translations.tranny_api.end_point("upserts/all"));
}));

(translations.tranny_api.download_all_translations.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=translations.tranny_api.js.map
