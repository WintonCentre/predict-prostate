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
var G__43470__delegate = function (k,args){
var k_STAR_ = (((k instanceof cljs.core.Keyword))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null):k);
if(cljs.core.vector_QMARK_(k_STAR_)){
var translation = (function (){var G__43258 = lang;
var G__43259 = cljs.core.first(k_STAR_);
var G__43260 = args;
return (translator.cljs$core$IFn$_invoke$arity$3 ? translator.cljs$core$IFn$_invoke$arity$3(G__43258,G__43259,G__43260) : translator.call(null,G__43258,G__43259,G__43260));
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
var G__43470 = function (k,var_args){
var args = null;
if (arguments.length > 1) {
var G__43471__i = 0, G__43471__a = new Array(arguments.length -  1);
while (G__43471__i < G__43471__a.length) {G__43471__a[G__43471__i] = arguments[G__43471__i + 1]; ++G__43471__i;}
  args = new cljs.core.IndexedSeq(G__43471__a,0,null);
} 
return G__43470__delegate.call(this,k,args);};
G__43470.cljs$lang$maxFixedArity = 1;
G__43470.cljs$lang$applyTo = (function (arglist__43472){
var k = cljs.core.first(arglist__43472);
var args = cljs.core.rest(arglist__43472);
return G__43470__delegate(k,args);
});
G__43470.cljs$core$IFn$_invoke$arity$variadic = G__43470__delegate;
return G__43470;
})()
;
});
translations.tongue_base.error_handler = (function translations$tongue_base$error_handler(p__43261){
var map__43262 = p__43261;
var map__43262__$1 = cljs.core.__destructure_map(map__43262);
var callback = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43262__$1,new cljs.core.Keyword(null,"callback","callback",-705136228));
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43262__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43262__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["error dispatch - status : ",status,"\ntext: ",status_text], 0));

var G__43263 = (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1(status)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_text)].join('')));
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__43263) : callback.call(null,G__43263));
});
translations.tongue_base.file_error = (function translations$tongue_base$file_error(p__43265){
var map__43266 = p__43265;
var map__43266__$1 = cljs.core.__destructure_map(map__43266);
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43266__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43266__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return console.log(["file error: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_text)].join(''));
});
/**
 * Process ops over a dictionary, returning a new dictionary.
 *   If the ops merge in words from a new language, that is merged in to the supported languages set
 */
translations.tongue_base.process_dict_op = (function translations$tongue_base$process_dict_op(var_args){
var G__43270 = arguments.length;
switch (G__43270) {
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

(translations.tongue_base.process_dict_op.cljs$core$IFn$_invoke$arity$3 = (function (dict,p__43271,_){
var vec__43272 = p__43271;
var seq__43273 = cljs.core.seq(vec__43272);
var first__43274 = cljs.core.first(seq__43273);
var seq__43273__$1 = cljs.core.next(seq__43273);
var op = first__43274;
var args = seq__43273__$1;
var G__43275 = op;
var G__43275__$1 = (((G__43275 instanceof cljs.core.Keyword))?G__43275.fqn:null);
switch (G__43275__$1) {
case "upsert":
var vec__43276 = args;
var lang = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43276,(0),null);
var new_words = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43276,(1),null);
var current_lang = new cljs.core.Keyword(null,"lang","lang",-1819677104).cljs$core$IFn$_invoke$arity$1(dict);
var new_lang_dict = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(dict,new cljs.core.Keyword(null,"languages","languages",1471910331),cljs.core.conj,lang),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"translations","translations",-1114228673),lang], null),cljs.core.merge,new_words);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_lang_dict,new cljs.core.Keyword(null,"translator","translator",-1752203115),translations.tongue_base.wrap_translator(current_lang,tongue.core.build_translate(new cljs.core.Keyword(null,"translations","translations",-1114228673).cljs$core$IFn$_invoke$arity$1(new_lang_dict))));

break;
case "switch":
var vec__43279 = args;
var lang = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43279,(0),null);
if(cljs.core.truth_((function (){var and__4210__auto__ = lang;
if(cljs.core.truth_(and__4210__auto__)){
return cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dict,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"translations","translations",-1114228673),lang], null)));
} else {
return and__4210__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(dict,new cljs.core.Keyword(null,"lang","lang",-1819677104),lang,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"translator","translator",-1752203115),translations.tongue_base.wrap_translator(lang,tongue.core.build_translate(new cljs.core.Keyword(null,"translations","translations",-1114228673).cljs$core$IFn$_invoke$arity$1(dict)))], 0));
} else {
return dict;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__43275__$1)].join('')));

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
if(((cljs.core.seq(op_args)) && (cljs.core.every_QMARK_((function (p__43284){
var vec__43285 = p__43284;
var seq__43286 = cljs.core.seq(vec__43285);
var first__43287 = cljs.core.first(seq__43286);
var seq__43286__$1 = cljs.core.next(seq__43286);
var op = first__43287;
var first__43287__$1 = cljs.core.first(seq__43286__$1);
var seq__43286__$2 = cljs.core.next(seq__43286__$1);
var lang = first__43287__$1;
var _ = seq__43286__$2;
var and__4210__auto____$1 = (function (){var fexpr__43288 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"upsert","upsert",1416724984),null,new cljs.core.Keyword(null,"switch","switch",71881310),null], null), null);
return (fexpr__43288.cljs$core$IFn$_invoke$arity$1 ? fexpr__43288.cljs$core$IFn$_invoke$arity$1(op) : fexpr__43288.call(null,op));
})();
if(cljs.core.truth_(and__4210__auto____$1)){
return (((lang instanceof cljs.core.Keyword)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),((cljs.core.name(lang)).length))));
} else {
return and__4210__auto____$1;
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
translations.tongue_base.get_dictionary = (function translations$tongue_base$get_dictionary(url,p__43291){
var map__43292 = p__43291;
var map__43292__$1 = cljs.core.__destructure_map(map__43292);
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43292__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
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
return ((cljs.core.seq(op_args)) && (cljs.core.every_QMARK_((function (p__43294){
var vec__43295 = p__43294;
var seq__43296 = cljs.core.seq(vec__43295);
var first__43297 = cljs.core.first(seq__43296);
var seq__43296__$1 = cljs.core.next(seq__43296);
var op = first__43297;
var first__43297__$1 = cljs.core.first(seq__43296__$1);
var seq__43296__$2 = cljs.core.next(seq__43296__$1);
var lang = first__43297__$1;
var args = seq__43296__$2;
var pred__43299 = cljs.core._EQ_;
var expr__43300 = op;
if(cljs.core.truth_((pred__43299.cljs$core$IFn$_invoke$arity$2 ? pred__43299.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"upsert","upsert",1416724984),expr__43300) : pred__43299.call(null,new cljs.core.Keyword(null,"upsert","upsert",1416724984),expr__43300)))){
return ((cljs.core.seq_QMARK_(args)) && (((cljs.core.map_QMARK_(cljs.core.first(args))) && ((lang instanceof cljs.core.Keyword)))));
} else {
if(cljs.core.truth_((pred__43299.cljs$core$IFn$_invoke$arity$2 ? pred__43299.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"switch","switch",71881310),expr__43300) : pred__43299.call(null,new cljs.core.Keyword(null,"switch","switch",71881310),expr__43300)))){
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
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__43324){
var vec__43325 = p__43324;
var cmd = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43325,(0),null);
var lang = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43325,(1),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43325,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cmd),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(lang),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__43328){
var vec__43329 = p__43328;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43329,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43329,(1),null);
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
translations.tongue_base.get_dictionary("/dictionary.txt",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-error","on-error",1728533530),(function (p1__43332_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(err_chan,p1__43332_SHARP_);
}),new cljs.core.Keyword(null,"handler","handler",-195596612),(function (p1__43333_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(static_chan,p1__43333_SHARP_);
})], null));

var c__36087__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36088__auto__ = (function (){var switch__35885__auto__ = (function (state_43408){
var state_val_43409 = (state_43408[(1)]);
if((state_val_43409 === (1))){
var inst_43342 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_43343 = [static_chan,err_chan];
var inst_43344 = (new cljs.core.PersistentVector(null,2,(5),inst_43342,inst_43343,null));
var state_43408__$1 = state_43408;
return cljs.core.async.ioc_alts_BANG_(state_43408__$1,(2),inst_43344);
} else {
if((state_val_43409 === (2))){
var inst_43346 = (state_43408[(7)]);
var inst_43348 = (state_43408[(8)]);
var inst_43346__$1 = (state_43408[(2)]);
var inst_43347 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43346__$1,(0),null);
var inst_43348__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43346__$1,(1),null);
var inst_43349 = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(inst_43347);
var inst_43350 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(static_chan,inst_43348__$1);
var state_43408__$1 = (function (){var statearr_43411 = state_43408;
(statearr_43411[(7)] = inst_43346__$1);

(statearr_43411[(9)] = inst_43349);

(statearr_43411[(8)] = inst_43348__$1);

return statearr_43411;
})();
if(inst_43350){
var statearr_43415_43479 = state_43408__$1;
(statearr_43415_43479[(1)] = (3));

} else {
var statearr_43416_43481 = state_43408__$1;
(statearr_43416_43481[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43409 === (3))){
var inst_43346 = (state_43408[(7)]);
var inst_43349 = (state_43408[(9)]);
var inst_43348 = (state_43408[(8)]);
var inst_43353 = cljs.core.deref(ref);
var inst_43354 = translations.tongue_base.process_dict_ops(inst_43353,inst_43349);
var inst_43355 = cljs.core.reset_BANG_(ref,inst_43354);
var inst_43359 = [new cljs.core.Keyword(null,"handler","handler",-195596612),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),new cljs.core.Keyword(null,"format","format",-1306924766)];
var inst_43360 = (function (){var vec__43339 = inst_43346;
var seed_dict = inst_43349;
var port = inst_43348;
return (function (p1__43334_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ok_chan,p1__43334_SHARP_);
});
})();
var inst_43361 = (function (){var vec__43339 = inst_43346;
var seed_dict = inst_43349;
var port = inst_43348;
return (function (p1__43335_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(err_chan,p1__43335_SHARP_);
});
})();
var inst_43362 = [inst_43360,inst_43361,new cljs.core.Keyword(null,"transit","transit",359458387)];
var inst_43363 = cljs.core.PersistentHashMap.fromArrays(inst_43359,inst_43362);
var inst_43364 = ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic(dictionary_endpoint,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_43363], 0));
var inst_43398 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_43399 = (function (){var vec__43339 = inst_43346;
var seed_dict = inst_43349;
var port = inst_43348;
var c__36087__auto____$1 = inst_43398;
return (function (){
var f__36088__auto__ = (function (){var switch__35885__auto__ = (function (state_43396){
var state_val_43397 = (state_43396[(1)]);
if((state_val_43397 === (1))){
var inst_43368 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_43369 = [ok_chan,err_chan];
var inst_43370 = (new cljs.core.PersistentVector(null,2,(5),inst_43368,inst_43369,null));
var state_43396__$1 = state_43396;
return cljs.core.async.ioc_alts_BANG_(state_43396__$1,(2),inst_43370);
} else {
if((state_val_43397 === (2))){
var inst_43372 = (state_43396[(2)]);
var inst_43373 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43372,(0),null);
var inst_43374 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43372,(1),null);
var inst_43375 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ok_chan,inst_43374);
var state_43396__$1 = (function (){var statearr_43419 = state_43396;
(statearr_43419[(7)] = inst_43373);

return statearr_43419;
})();
if(inst_43375){
var statearr_43420_43484 = state_43396__$1;
(statearr_43420_43484[(1)] = (3));

} else {
var statearr_43422_43485 = state_43396__$1;
(statearr_43422_43485[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43397 === (3))){
var inst_43377 = (state_43396[(8)]);
var inst_43373 = (state_43396[(7)]);
var inst_43377__$1 = translations.tongue_base.read_json_dict(inst_43373);
var inst_43378 = translations.tongue_base.validate_op_args(inst_43377__$1);
var state_43396__$1 = (function (){var statearr_43424 = state_43396;
(statearr_43424[(8)] = inst_43377__$1);

return statearr_43424;
})();
if(inst_43378){
var statearr_43425_43486 = state_43396__$1;
(statearr_43425_43486[(1)] = (6));

} else {
var statearr_43426_43487 = state_43396__$1;
(statearr_43426_43487[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43397 === (4))){
var inst_43373 = (state_43396[(7)]);
var inst_43390 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_43373], 0));
var inst_43391 = ["error from",cljs.core.str.cljs$core$IFn$_invoke$arity$1(dictionary_endpoint),":",inst_43390].join('');
var inst_43392 = alert(inst_43391);
var state_43396__$1 = state_43396;
var statearr_43427_43488 = state_43396__$1;
(statearr_43427_43488[(2)] = inst_43392);

(statearr_43427_43488[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43397 === (5))){
var inst_43394 = (state_43396[(2)]);
var state_43396__$1 = state_43396;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43396__$1,inst_43394);
} else {
if((state_val_43397 === (6))){
var inst_43377 = (state_43396[(8)]);
var inst_43380 = cljs.core.deref(ref);
var inst_43381 = translations.tongue_base.process_dict_ops(inst_43380,inst_43377);
var inst_43382 = cljs.core.reset_BANG_(ref,inst_43381);
var state_43396__$1 = state_43396;
var statearr_43432_43489 = state_43396__$1;
(statearr_43432_43489[(2)] = inst_43382);

(statearr_43432_43489[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43397 === (7))){
var inst_43385 = alert("Local dictionary parse failure");
var state_43396__$1 = state_43396;
var statearr_43433_43490 = state_43396__$1;
(statearr_43433_43490[(2)] = inst_43385);

(statearr_43433_43490[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43397 === (8))){
var inst_43387 = (state_43396[(2)]);
var state_43396__$1 = state_43396;
var statearr_43437_43491 = state_43396__$1;
(statearr_43437_43491[(2)] = inst_43387);

(statearr_43437_43491[(1)] = (5));


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
var translations$tongue_base$load_all_translations_$_state_machine__35886__auto__ = null;
var translations$tongue_base$load_all_translations_$_state_machine__35886__auto____0 = (function (){
var statearr_43439 = [null,null,null,null,null,null,null,null,null];
(statearr_43439[(0)] = translations$tongue_base$load_all_translations_$_state_machine__35886__auto__);

(statearr_43439[(1)] = (1));

return statearr_43439;
});
var translations$tongue_base$load_all_translations_$_state_machine__35886__auto____1 = (function (state_43396){
while(true){
var ret_value__35887__auto__ = (function (){try{while(true){
var result__35888__auto__ = switch__35885__auto__(state_43396);
if(cljs.core.keyword_identical_QMARK_(result__35888__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35888__auto__;
}
break;
}
}catch (e43440){var ex__35889__auto__ = e43440;
var statearr_43441_43492 = state_43396;
(statearr_43441_43492[(2)] = ex__35889__auto__);


if(cljs.core.seq((state_43396[(4)]))){
var statearr_43442_43493 = state_43396;
(statearr_43442_43493[(1)] = cljs.core.first((state_43396[(4)])));

} else {
throw ex__35889__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43494 = state_43396;
state_43396 = G__43494;
continue;
} else {
return ret_value__35887__auto__;
}
break;
}
});
translations$tongue_base$load_all_translations_$_state_machine__35886__auto__ = function(state_43396){
switch(arguments.length){
case 0:
return translations$tongue_base$load_all_translations_$_state_machine__35886__auto____0.call(this);
case 1:
return translations$tongue_base$load_all_translations_$_state_machine__35886__auto____1.call(this,state_43396);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
translations$tongue_base$load_all_translations_$_state_machine__35886__auto__.cljs$core$IFn$_invoke$arity$0 = translations$tongue_base$load_all_translations_$_state_machine__35886__auto____0;
translations$tongue_base$load_all_translations_$_state_machine__35886__auto__.cljs$core$IFn$_invoke$arity$1 = translations$tongue_base$load_all_translations_$_state_machine__35886__auto____1;
return translations$tongue_base$load_all_translations_$_state_machine__35886__auto__;
})()
})();
var state__36089__auto__ = (function (){var statearr_43446 = f__36088__auto__();
(statearr_43446[(6)] = c__36087__auto____$1);

return statearr_43446;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36089__auto__);
});
})();
var inst_43400 = cljs.core.async.impl.dispatch.run(inst_43399);
var state_43408__$1 = (function (){var statearr_43448 = state_43408;
(statearr_43448[(10)] = inst_43364);

(statearr_43448[(11)] = inst_43355);

(statearr_43448[(12)] = inst_43400);

return statearr_43448;
})();
var statearr_43449_43497 = state_43408__$1;
(statearr_43449_43497[(2)] = inst_43398);

(statearr_43449_43497[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43409 === (4))){
var inst_43349 = (state_43408[(9)]);
var inst_43402 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_43349], 0));
var inst_43403 = ["error from dictionary.txt ",inst_43402].join('');
var inst_43404 = alert(inst_43403);
var state_43408__$1 = state_43408;
var statearr_43453_43501 = state_43408__$1;
(statearr_43453_43501[(2)] = inst_43404);

(statearr_43453_43501[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43409 === (5))){
var inst_43406 = (state_43408[(2)]);
var state_43408__$1 = state_43408;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43408__$1,inst_43406);
} else {
return null;
}
}
}
}
}
});
return (function() {
var translations$tongue_base$load_all_translations_$_state_machine__35886__auto__ = null;
var translations$tongue_base$load_all_translations_$_state_machine__35886__auto____0 = (function (){
var statearr_43459 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43459[(0)] = translations$tongue_base$load_all_translations_$_state_machine__35886__auto__);

(statearr_43459[(1)] = (1));

return statearr_43459;
});
var translations$tongue_base$load_all_translations_$_state_machine__35886__auto____1 = (function (state_43408){
while(true){
var ret_value__35887__auto__ = (function (){try{while(true){
var result__35888__auto__ = switch__35885__auto__(state_43408);
if(cljs.core.keyword_identical_QMARK_(result__35888__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35888__auto__;
}
break;
}
}catch (e43461){var ex__35889__auto__ = e43461;
var statearr_43462_43502 = state_43408;
(statearr_43462_43502[(2)] = ex__35889__auto__);


if(cljs.core.seq((state_43408[(4)]))){
var statearr_43463_43503 = state_43408;
(statearr_43463_43503[(1)] = cljs.core.first((state_43408[(4)])));

} else {
throw ex__35889__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43504 = state_43408;
state_43408 = G__43504;
continue;
} else {
return ret_value__35887__auto__;
}
break;
}
});
translations$tongue_base$load_all_translations_$_state_machine__35886__auto__ = function(state_43408){
switch(arguments.length){
case 0:
return translations$tongue_base$load_all_translations_$_state_machine__35886__auto____0.call(this);
case 1:
return translations$tongue_base$load_all_translations_$_state_machine__35886__auto____1.call(this,state_43408);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
translations$tongue_base$load_all_translations_$_state_machine__35886__auto__.cljs$core$IFn$_invoke$arity$0 = translations$tongue_base$load_all_translations_$_state_machine__35886__auto____0;
translations$tongue_base$load_all_translations_$_state_machine__35886__auto__.cljs$core$IFn$_invoke$arity$1 = translations$tongue_base$load_all_translations_$_state_machine__35886__auto____1;
return translations$tongue_base$load_all_translations_$_state_machine__35886__auto__;
})()
})();
var state__36089__auto__ = (function (){var statearr_43468 = f__36088__auto__();
(statearr_43468[(6)] = c__36087__auto__);

return statearr_43468;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36089__auto__);
}));

return c__36087__auto__;
});

//# sourceMappingURL=translations.tongue_base.js.map
