goog.provide('translations.tongue_base');
/**
 * Return a translation function which wraps tongue 'translate', giving it similar
 *   capabilities as the tempura translator.
 * 
 *   The returned function takes a language, a k to translate, plus any args
 * 
 *   If k is a string it returns k untranslated.
 * 
 *   If k is a keyword, it looks up  k in the translations dictionary for the
 *   given language, possibly with argument interpolation. i.e. Just like the original.
 * 
 *   If k is a vector, the first element is used as the lookup key. The remaining elements are ignored and may
 *   be used to document the translation.
 * 
 *   If k is some other type (most usefully a string), it is converted to a string and returned. Any other arguments are ignored.
 *   
 */
translations.tongue_base.wrap_translator = (function translations$tongue_base$wrap_translator(lang,translator){
return (function() { 
var G__32453__delegate = function (k,args){
var k_STAR_ = (((k instanceof cljs.core.Keyword))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null):k);
if(cljs.core.vector_QMARK_(k_STAR_)){
var translation = (function (){var G__32240 = lang;
var G__32241 = cljs.core.first(k_STAR_);
var G__32242 = args;
return (translator.cljs$core$IFn$_invoke$arity$3 ? translator.cljs$core$IFn$_invoke$arity$3(G__32240,G__32241,G__32242) : translator.call(null,G__32240,G__32241,G__32242));
})();
if(clojure.string.starts_with_QMARK_(translation,"{")){
return k_STAR_;
} else {
return translation;
}
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(k);
}
};
var G__32453 = function (k,var_args){
var args = null;
if (arguments.length > 1) {
var G__32456__i = 0, G__32456__a = new Array(arguments.length -  1);
while (G__32456__i < G__32456__a.length) {G__32456__a[G__32456__i] = arguments[G__32456__i + 1]; ++G__32456__i;}
  args = new cljs.core.IndexedSeq(G__32456__a,0,null);
} 
return G__32453__delegate.call(this,k,args);};
G__32453.cljs$lang$maxFixedArity = 1;
G__32453.cljs$lang$applyTo = (function (arglist__32457){
var k = cljs.core.first(arglist__32457);
var args = cljs.core.rest(arglist__32457);
return G__32453__delegate(k,args);
});
G__32453.cljs$core$IFn$_invoke$arity$variadic = G__32453__delegate;
return G__32453;
})()
;
});
translations.tongue_base.error_handler = (function translations$tongue_base$error_handler(p__32246){
var map__32247 = p__32246;
var map__32247__$1 = (((((!((map__32247 == null))))?(((((map__32247.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32247.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32247):map__32247);
var callback = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32247__$1,new cljs.core.Keyword(null,"callback","callback",-705136228));
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32247__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32247__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["error dispatch - status : ",status,"\ntext: ",status_text], 0));

var G__32249 = (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1(status)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_text)].join('')));
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__32249) : callback.call(null,G__32249));
});
translations.tongue_base.file_error = (function translations$tongue_base$file_error(p__32251){
var map__32252 = p__32251;
var map__32252__$1 = (((((!((map__32252 == null))))?(((((map__32252.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32252.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32252):map__32252);
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32252__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32252__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return console.log(["file error: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_text)].join(''));
});
/**
 * Process ops over a dictionary, returning a new dictionary.
 *   If the ops merge in words from a new language, that is merged in to the supported languages set
 */
translations.tongue_base.process_dict_op = (function translations$tongue_base$process_dict_op(var_args){
var G__32255 = arguments.length;
switch (G__32255) {
case 3:
return translations.tongue_base.process_dict_op.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return translations.tongue_base.process_dict_op.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(translations.tongue_base.process_dict_op.cljs$core$IFn$_invoke$arity$3 = (function (dict,p__32256,_){
var vec__32257 = p__32256;
var seq__32258 = cljs.core.seq(vec__32257);
var first__32259 = cljs.core.first(seq__32258);
var seq__32258__$1 = cljs.core.next(seq__32258);
var op = first__32259;
var args = seq__32258__$1;
var G__32260 = op;
var G__32260__$1 = (((G__32260 instanceof cljs.core.Keyword))?G__32260.fqn:null);
switch (G__32260__$1) {
case "upsert":
var vec__32261 = args;
var lang = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32261,(0),null);
var new_words = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32261,(1),null);
var current_lang = new cljs.core.Keyword(null,"lang","lang",-1819677104).cljs$core$IFn$_invoke$arity$1(dict);
var new_lang_dict = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(dict,new cljs.core.Keyword(null,"languages","languages",1471910331),cljs.core.conj,lang),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"translations","translations",-1114228673),lang], null),cljs.core.merge,new_words);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_lang_dict,new cljs.core.Keyword(null,"translator","translator",-1752203115),translations.tongue_base.wrap_translator(current_lang,tongue.core.build_translate(new cljs.core.Keyword(null,"translations","translations",-1114228673).cljs$core$IFn$_invoke$arity$1(new_lang_dict))));

break;
case "switch":
var vec__32264 = args;
var lang = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32264,(0),null);
if(cljs.core.truth_((function (){var and__4115__auto__ = lang;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dict,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"translations","translations",-1114228673),lang], null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(dict,new cljs.core.Keyword(null,"lang","lang",-1819677104),lang,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"translator","translator",-1752203115),translations.tongue_base.wrap_translator(lang,tongue.core.build_translate(new cljs.core.Keyword(null,"translations","translations",-1114228673).cljs$core$IFn$_invoke$arity$1(dict)))], 0));
} else {
return dict;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32260__$1)].join('')));

}
}));

(translations.tongue_base.process_dict_op.cljs$core$IFn$_invoke$arity$2 = (function (dict,op_args){
return translations.tongue_base.process_dict_op.cljs$core$IFn$_invoke$arity$3(dict,op_args,true);
}));

(translations.tongue_base.process_dict_op.cljs$lang$maxFixedArity = 3);

/**
 * process a sequence of operations into the translation state
 */
translations.tongue_base.process_dict_ops = (function translations$tongue_base$process_dict_ops(t_state,op_args){
var new_lang = new cljs.core.Keyword(null,"lang","lang",-1819677104).cljs$core$IFn$_invoke$arity$1(predict_prostate.state.localStorage.get_settings_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"en","en",88457073)], null)));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(translations.tongue_base.process_dict_op,t_state,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(op_args,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switch","switch",71881310),new_lang], null)));
});
/**
 * process a sequence of operations on the dictionary, inserting them into the translation state @ref.
 *   USED IN PRODUCTION DICTIONARY LOAD.
 */
translations.tongue_base.handle_dictionary = (function translations$tongue_base$handle_dictionary(ref,edn_rsp){
if(cljs.core.truth_(cljs.core.set_QMARK_)){
} else {
throw (new Error("Assert failed: set?"));
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"languages","languages",1471910331).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ref)))){
} else {
throw (new Error("Assert failed: (:languages (clojure.core/deref ref))"));
}

var op_args = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(edn_rsp);
if(((cljs.core.seq(op_args)) && (cljs.core.every_QMARK_((function (p__32274){
var vec__32275 = p__32274;
var seq__32276 = cljs.core.seq(vec__32275);
var first__32277 = cljs.core.first(seq__32276);
var seq__32276__$1 = cljs.core.next(seq__32276);
var op = first__32277;
var first__32277__$1 = cljs.core.first(seq__32276__$1);
var seq__32276__$2 = cljs.core.next(seq__32276__$1);
var lang = first__32277__$1;
var _ = seq__32276__$2;
var and__4115__auto__ = (function (){var fexpr__32280 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"upsert","upsert",1416724984),null,new cljs.core.Keyword(null,"switch","switch",71881310),null], null), null);
return (fexpr__32280.cljs$core$IFn$_invoke$arity$1 ? fexpr__32280.cljs$core$IFn$_invoke$arity$1(op) : fexpr__32280.call(null,op));
})();
if(cljs.core.truth_(and__4115__auto__)){
return (((lang instanceof cljs.core.Keyword)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),((cljs.core.name(lang)).length))));
} else {
return and__4115__auto__;
}
}),op_args)))){
return cljs.core.reset_BANG_(ref,translations.tongue_base.process_dict_ops(cljs.core.deref(ref),op_args));
} else {
return null;
}
});
/**
 * read dictionary ops from a url.
 *   USED IN PRODUCTION DICTIONARY LOAD
 */
translations.tongue_base.get_dictionary = (function translations$tongue_base$get_dictionary(url,p__32281){
var map__32282 = p__32281;
var map__32282__$1 = (((((!((map__32282 == null))))?(((((map__32282.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32282.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32282):map__32282);
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32282__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic(url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),translations.tongue_base.file_error,new cljs.core.Keyword(null,"handler","handler",-195596612),handler,new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"transit","transit",359458387)], null)], 0));
});
/**
 * load the initial dictionary into the rtdb t-state.
 *   local dictionary-url is the relative url to a txt file containing :upsert and :switch commands.
 *   At runtime, the callback handler is usually a call to handle-dictionary with ref bound to the t-state-change cursor.
 *   At test time this may be different.
 * 
 *   USED IN PRODUCTION DICTIONARY LOAD
 */
translations.tongue_base.load_translations_STAR_ = (function translations$tongue_base$load_translations_STAR_(local_dictionary_url,handler){
return translations.tongue_base.get_dictionary(local_dictionary_url,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 1, ["Cache-Control","no-store"], null),new cljs.core.Keyword(null,"on-error","on-error",1728533530),translations.tongue_base.file_error,new cljs.core.Keyword(null,"handler","handler",-195596612),handler], null));
});
translations.tongue_base.validate_op_args = (function translations$tongue_base$validate_op_args(op_args){
return ((cljs.core.seq(op_args)) && (cljs.core.every_QMARK_((function (p__32291){
var vec__32292 = p__32291;
var seq__32293 = cljs.core.seq(vec__32292);
var first__32294 = cljs.core.first(seq__32293);
var seq__32293__$1 = cljs.core.next(seq__32293);
var op = first__32294;
var first__32294__$1 = cljs.core.first(seq__32293__$1);
var seq__32293__$2 = cljs.core.next(seq__32293__$1);
var lang = first__32294__$1;
var args = seq__32293__$2;
var pred__32295 = cljs.core._EQ_;
var expr__32296 = op;
if(cljs.core.truth_((pred__32295.cljs$core$IFn$_invoke$arity$2 ? pred__32295.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"upsert","upsert",1416724984),expr__32296) : pred__32295.call(null,new cljs.core.Keyword(null,"upsert","upsert",1416724984),expr__32296)))){
return ((cljs.core.seq_QMARK_(args)) && (cljs.core.map_QMARK_(cljs.core.first(args))) && ((lang instanceof cljs.core.Keyword)));
} else {
if(cljs.core.truth_((pred__32295.cljs$core$IFn$_invoke$arity$2 ? pred__32295.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"switch","switch",71881310),expr__32296) : pred__32295.call(null,new cljs.core.Keyword(null,"switch","switch",71881310),expr__32296)))){
return (lang instanceof cljs.core.Keyword);
} else {
return false;
}
}
}),op_args)));
});
/**
 * Note that his code should be shared with the babashka bin/getdictionary.clj script, once we work out how to do that.
 *   Take json read in from the dictionary api end point and convert it into a valid clojure data structure with valid
 *   keywords in the form :ns/key rather than teh string ':ns#key'.
 */
translations.tongue_base.read_json_dict = (function translations$tongue_base$read_json_dict(json){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__32298){
var vec__32299 = p__32298;
var cmd = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32299,(0),null);
var lang = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32299,(1),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32299,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cmd),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(lang),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__32302){
var vec__32303 = p__32302;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32303,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32303,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2("/",clojure.string.split.cljs$core$IFn$_invoke$arity$2(k,/#/)))),v], null);
}),m))], null);
}),json);
});
/**
 * Load the initial dictionary into the rtdb t-state from the live-dictionary-url - a static txt file on the server.
 * Once complete, and this is just used in the editing system, also download all translations on the server, and merge them.
 * 
 * Both remote and local dictionaries contain a vector of [:upsert lang translations] commands, and these are added
 * into the ref atom or cursor on reception. Once there, they are used to translate all text wrapped in ttt function calls.
 * 
 * If a [:switch lang] command is received then the default language will change too.
 * We can use transit here since we are not dependent on coast middleware which only supports json.
 */
translations.tongue_base.load_all_translations = (function translations$tongue_base$load_all_translations(static_chan,ok_chan,err_chan,dictionary_endpoint,ref){
translations.tongue_base.get_dictionary("dictionary.txt",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-error","on-error",1728533530),(function (p1__32306_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(err_chan,p1__32306_SHARP_);
}),new cljs.core.Keyword(null,"handler","handler",-195596612),(function (p1__32307_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(static_chan,p1__32307_SHARP_);
})], null));

var c__29668__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29669__auto__ = (function (){var switch__29583__auto__ = (function (state_32401){
var state_val_32402 = (state_32401[(1)]);
if((state_val_32402 === (1))){
var inst_32321 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32322 = [static_chan,err_chan];
var inst_32323 = (new cljs.core.PersistentVector(null,2,(5),inst_32321,inst_32322,null));
var state_32401__$1 = state_32401;
return cljs.core.async.ioc_alts_BANG_(state_32401__$1,(2),inst_32323);
} else {
if((state_val_32402 === (2))){
var inst_32325 = (state_32401[(7)]);
var inst_32329 = (state_32401[(8)]);
var inst_32325__$1 = (state_32401[(2)]);
var inst_32328 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32325__$1,(0),null);
var inst_32329__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32325__$1,(1),null);
var inst_32330 = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(inst_32328);
var inst_32331 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(static_chan,inst_32329__$1);
var state_32401__$1 = (function (){var statearr_32405 = state_32401;
(statearr_32405[(7)] = inst_32325__$1);

(statearr_32405[(9)] = inst_32330);

(statearr_32405[(8)] = inst_32329__$1);

return statearr_32405;
})();
if(inst_32331){
var statearr_32408_32478 = state_32401__$1;
(statearr_32408_32478[(1)] = (3));

} else {
var statearr_32409_32479 = state_32401__$1;
(statearr_32409_32479[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32402 === (3))){
var inst_32325 = (state_32401[(7)]);
var inst_32330 = (state_32401[(9)]);
var inst_32329 = (state_32401[(8)]);
var inst_32333 = cljs.core.deref(ref);
var inst_32334 = translations.tongue_base.process_dict_ops(inst_32333,inst_32330);
var inst_32335 = cljs.core.reset_BANG_(ref,inst_32334);
var inst_32337 = [new cljs.core.Keyword(null,"handler","handler",-195596612),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),new cljs.core.Keyword(null,"format","format",-1306924766)];
var inst_32339 = (function (){var vec__32318 = inst_32325;
var seed_dict = inst_32330;
var port = inst_32329;
return (function (p1__32308_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ok_chan,p1__32308_SHARP_);
});
})();
var inst_32340 = (function (){var vec__32318 = inst_32325;
var seed_dict = inst_32330;
var port = inst_32329;
return (function (p1__32309_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(err_chan,p1__32309_SHARP_);
});
})();
var inst_32341 = [inst_32339,inst_32340,new cljs.core.Keyword(null,"transit","transit",359458387)];
var inst_32342 = cljs.core.PersistentHashMap.fromArrays(inst_32337,inst_32341);
var inst_32343 = ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic(dictionary_endpoint,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_32342], 0));
var inst_32387 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_32389 = (function (){var vec__32318 = inst_32325;
var seed_dict = inst_32330;
var port = inst_32329;
var c__29668__auto____$1 = inst_32387;
return (function (){
var f__29669__auto__ = (function (){var switch__29583__auto__ = (function (state_32379){
var state_val_32382 = (state_32379[(1)]);
if((state_val_32382 === (1))){
var inst_32347 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32348 = [ok_chan,err_chan];
var inst_32349 = (new cljs.core.PersistentVector(null,2,(5),inst_32347,inst_32348,null));
var state_32379__$1 = state_32379;
return cljs.core.async.ioc_alts_BANG_(state_32379__$1,(2),inst_32349);
} else {
if((state_val_32382 === (2))){
var inst_32351 = (state_32379[(2)]);
var inst_32352 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32351,(0),null);
var inst_32353 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32351,(1),null);
var inst_32354 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ok_chan,inst_32353);
var state_32379__$1 = (function (){var statearr_32413 = state_32379;
(statearr_32413[(7)] = inst_32352);

return statearr_32413;
})();
if(inst_32354){
var statearr_32414_32483 = state_32379__$1;
(statearr_32414_32483[(1)] = (3));

} else {
var statearr_32415_32484 = state_32379__$1;
(statearr_32415_32484[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32382 === (3))){
var inst_32357 = (state_32379[(8)]);
var inst_32352 = (state_32379[(7)]);
var inst_32357__$1 = translations.tongue_base.read_json_dict(inst_32352);
var inst_32358 = translations.tongue_base.validate_op_args(inst_32357__$1);
var state_32379__$1 = (function (){var statearr_32418 = state_32379;
(statearr_32418[(8)] = inst_32357__$1);

return statearr_32418;
})();
if(inst_32358){
var statearr_32419_32485 = state_32379__$1;
(statearr_32419_32485[(1)] = (6));

} else {
var statearr_32421_32486 = state_32379__$1;
(statearr_32421_32486[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32382 === (4))){
var inst_32352 = (state_32379[(7)]);
var inst_32371 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_32352], 0));
var inst_32372 = ["error from",cljs.core.str.cljs$core$IFn$_invoke$arity$1(dictionary_endpoint),":",inst_32371].join('');
var inst_32373 = alert(inst_32372);
var state_32379__$1 = state_32379;
var statearr_32423_32487 = state_32379__$1;
(statearr_32423_32487[(2)] = inst_32373);

(statearr_32423_32487[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32382 === (5))){
var inst_32375 = (state_32379[(2)]);
var state_32379__$1 = state_32379;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32379__$1,inst_32375);
} else {
if((state_val_32382 === (6))){
var inst_32357 = (state_32379[(8)]);
var inst_32360 = cljs.core.deref(ref);
var inst_32361 = translations.tongue_base.process_dict_ops(inst_32360,inst_32357);
var inst_32362 = cljs.core.reset_BANG_(ref,inst_32361);
var state_32379__$1 = state_32379;
var statearr_32428_32489 = state_32379__$1;
(statearr_32428_32489[(2)] = inst_32362);

(statearr_32428_32489[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32382 === (7))){
var inst_32365 = alert("Local dictionary parse failure");
var state_32379__$1 = state_32379;
var statearr_32433_32490 = state_32379__$1;
(statearr_32433_32490[(2)] = inst_32365);

(statearr_32433_32490[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32382 === (8))){
var inst_32367 = (state_32379[(2)]);
var state_32379__$1 = state_32379;
var statearr_32434_32491 = state_32379__$1;
(statearr_32434_32491[(2)] = inst_32367);

(statearr_32434_32491[(1)] = (5));


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
var translations$tongue_base$load_all_translations_$_state_machine__29584__auto__ = null;
var translations$tongue_base$load_all_translations_$_state_machine__29584__auto____0 = (function (){
var statearr_32435 = [null,null,null,null,null,null,null,null,null];
(statearr_32435[(0)] = translations$tongue_base$load_all_translations_$_state_machine__29584__auto__);

(statearr_32435[(1)] = (1));

return statearr_32435;
});
var translations$tongue_base$load_all_translations_$_state_machine__29584__auto____1 = (function (state_32379){
while(true){
var ret_value__29585__auto__ = (function (){try{while(true){
var result__29586__auto__ = switch__29583__auto__(state_32379);
if(cljs.core.keyword_identical_QMARK_(result__29586__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29586__auto__;
}
break;
}
}catch (e32437){var ex__29587__auto__ = e32437;
var statearr_32438_32492 = state_32379;
(statearr_32438_32492[(2)] = ex__29587__auto__);


if(cljs.core.seq((state_32379[(4)]))){
var statearr_32439_32493 = state_32379;
(statearr_32439_32493[(1)] = cljs.core.first((state_32379[(4)])));

} else {
throw ex__29587__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32494 = state_32379;
state_32379 = G__32494;
continue;
} else {
return ret_value__29585__auto__;
}
break;
}
});
translations$tongue_base$load_all_translations_$_state_machine__29584__auto__ = function(state_32379){
switch(arguments.length){
case 0:
return translations$tongue_base$load_all_translations_$_state_machine__29584__auto____0.call(this);
case 1:
return translations$tongue_base$load_all_translations_$_state_machine__29584__auto____1.call(this,state_32379);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
translations$tongue_base$load_all_translations_$_state_machine__29584__auto__.cljs$core$IFn$_invoke$arity$0 = translations$tongue_base$load_all_translations_$_state_machine__29584__auto____0;
translations$tongue_base$load_all_translations_$_state_machine__29584__auto__.cljs$core$IFn$_invoke$arity$1 = translations$tongue_base$load_all_translations_$_state_machine__29584__auto____1;
return translations$tongue_base$load_all_translations_$_state_machine__29584__auto__;
})()
})();
var state__29670__auto__ = (function (){var statearr_32441 = f__29669__auto__();
(statearr_32441[(6)] = c__29668__auto____$1);

return statearr_32441;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29670__auto__);
});
})();
var inst_32390 = cljs.core.async.impl.dispatch.run(inst_32389);
var state_32401__$1 = (function (){var statearr_32442 = state_32401;
(statearr_32442[(10)] = inst_32335);

(statearr_32442[(11)] = inst_32390);

(statearr_32442[(12)] = inst_32343);

return statearr_32442;
})();
var statearr_32443_32495 = state_32401__$1;
(statearr_32443_32495[(2)] = inst_32387);

(statearr_32443_32495[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32402 === (4))){
var inst_32330 = (state_32401[(9)]);
var inst_32395 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_32330], 0));
var inst_32396 = ["error from dictionary.txt ",inst_32395].join('');
var inst_32397 = alert(inst_32396);
var state_32401__$1 = state_32401;
var statearr_32445_32496 = state_32401__$1;
(statearr_32445_32496[(2)] = inst_32397);

(statearr_32445_32496[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32402 === (5))){
var inst_32399 = (state_32401[(2)]);
var state_32401__$1 = state_32401;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32401__$1,inst_32399);
} else {
return null;
}
}
}
}
}
});
return (function() {
var translations$tongue_base$load_all_translations_$_state_machine__29584__auto__ = null;
var translations$tongue_base$load_all_translations_$_state_machine__29584__auto____0 = (function (){
var statearr_32447 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32447[(0)] = translations$tongue_base$load_all_translations_$_state_machine__29584__auto__);

(statearr_32447[(1)] = (1));

return statearr_32447;
});
var translations$tongue_base$load_all_translations_$_state_machine__29584__auto____1 = (function (state_32401){
while(true){
var ret_value__29585__auto__ = (function (){try{while(true){
var result__29586__auto__ = switch__29583__auto__(state_32401);
if(cljs.core.keyword_identical_QMARK_(result__29586__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29586__auto__;
}
break;
}
}catch (e32448){var ex__29587__auto__ = e32448;
var statearr_32449_32498 = state_32401;
(statearr_32449_32498[(2)] = ex__29587__auto__);


if(cljs.core.seq((state_32401[(4)]))){
var statearr_32450_32500 = state_32401;
(statearr_32450_32500[(1)] = cljs.core.first((state_32401[(4)])));

} else {
throw ex__29587__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32501 = state_32401;
state_32401 = G__32501;
continue;
} else {
return ret_value__29585__auto__;
}
break;
}
});
translations$tongue_base$load_all_translations_$_state_machine__29584__auto__ = function(state_32401){
switch(arguments.length){
case 0:
return translations$tongue_base$load_all_translations_$_state_machine__29584__auto____0.call(this);
case 1:
return translations$tongue_base$load_all_translations_$_state_machine__29584__auto____1.call(this,state_32401);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
translations$tongue_base$load_all_translations_$_state_machine__29584__auto__.cljs$core$IFn$_invoke$arity$0 = translations$tongue_base$load_all_translations_$_state_machine__29584__auto____0;
translations$tongue_base$load_all_translations_$_state_machine__29584__auto__.cljs$core$IFn$_invoke$arity$1 = translations$tongue_base$load_all_translations_$_state_machine__29584__auto____1;
return translations$tongue_base$load_all_translations_$_state_machine__29584__auto__;
})()
})();
var state__29670__auto__ = (function (){var statearr_32452 = f__29669__auto__();
(statearr_32452[(6)] = c__29668__auto__);

return statearr_32452;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29670__auto__);
}));

return c__29668__auto__;
});

//# sourceMappingURL=translations.tongue_base.js.map
