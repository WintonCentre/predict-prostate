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
var G__44348__delegate = function (k,args){
var k_STAR_ = (((k instanceof cljs.core.Keyword))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null):k);
if(cljs.core.vector_QMARK_(k_STAR_)){
var translation = (function (){var G__44162 = lang;
var G__44163 = cljs.core.first(k_STAR_);
var G__44164 = args;
return (translator.cljs$core$IFn$_invoke$arity$3 ? translator.cljs$core$IFn$_invoke$arity$3(G__44162,G__44163,G__44164) : translator.call(null,G__44162,G__44163,G__44164));
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
var G__44348 = function (k,var_args){
var args = null;
if (arguments.length > 1) {
var G__44352__i = 0, G__44352__a = new Array(arguments.length -  1);
while (G__44352__i < G__44352__a.length) {G__44352__a[G__44352__i] = arguments[G__44352__i + 1]; ++G__44352__i;}
  args = new cljs.core.IndexedSeq(G__44352__a,0,null);
} 
return G__44348__delegate.call(this,k,args);};
G__44348.cljs$lang$maxFixedArity = 1;
G__44348.cljs$lang$applyTo = (function (arglist__44353){
var k = cljs.core.first(arglist__44353);
var args = cljs.core.rest(arglist__44353);
return G__44348__delegate(k,args);
});
G__44348.cljs$core$IFn$_invoke$arity$variadic = G__44348__delegate;
return G__44348;
})()
;
});
translations.tongue_base.error_handler = (function translations$tongue_base$error_handler(p__44165){
var map__44166 = p__44165;
var map__44166__$1 = cljs.core.__destructure_map(map__44166);
var callback = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44166__$1,new cljs.core.Keyword(null,"callback","callback",-705136228));
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44166__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44166__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["error dispatch - status : ",status,"\ntext: ",status_text], 0));

var G__44167 = (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1(status)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_text)].join('')));
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__44167) : callback.call(null,G__44167));
});
translations.tongue_base.file_error = (function translations$tongue_base$file_error(p__44170){
var map__44171 = p__44170;
var map__44171__$1 = cljs.core.__destructure_map(map__44171);
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44171__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44171__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return console.log(["file error: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_text)].join(''));
});
/**
 * Process ops over a dictionary, returning a new dictionary.
 *   If the ops merge in words from a new language, that is merged in to the supported languages set
 */
translations.tongue_base.process_dict_op = (function translations$tongue_base$process_dict_op(var_args){
var G__44176 = arguments.length;
switch (G__44176) {
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

(translations.tongue_base.process_dict_op.cljs$core$IFn$_invoke$arity$3 = (function (dict,p__44180,_){
var vec__44181 = p__44180;
var seq__44182 = cljs.core.seq(vec__44181);
var first__44183 = cljs.core.first(seq__44182);
var seq__44182__$1 = cljs.core.next(seq__44182);
var op = first__44183;
var args = seq__44182__$1;
var G__44184 = op;
var G__44184__$1 = (((G__44184 instanceof cljs.core.Keyword))?G__44184.fqn:null);
switch (G__44184__$1) {
case "upsert":
var vec__44185 = args;
var lang = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44185,(0),null);
var new_words = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44185,(1),null);
var current_lang = new cljs.core.Keyword(null,"lang","lang",-1819677104).cljs$core$IFn$_invoke$arity$1(dict);
var new_lang_dict = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(dict,new cljs.core.Keyword(null,"languages","languages",1471910331),cljs.core.conj,lang),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"translations","translations",-1114228673),lang], null),cljs.core.merge,new_words);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_lang_dict,new cljs.core.Keyword(null,"translator","translator",-1752203115),translations.tongue_base.wrap_translator(current_lang,tongue.core.build_translate(new cljs.core.Keyword(null,"translations","translations",-1114228673).cljs$core$IFn$_invoke$arity$1(new_lang_dict))));

break;
case "switch":
var vec__44188 = args;
var lang = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44188,(0),null);
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44184__$1)].join('')));

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
if(((cljs.core.seq(op_args)) && (cljs.core.every_QMARK_((function (p__44191){
var vec__44192 = p__44191;
var seq__44193 = cljs.core.seq(vec__44192);
var first__44194 = cljs.core.first(seq__44193);
var seq__44193__$1 = cljs.core.next(seq__44193);
var op = first__44194;
var first__44194__$1 = cljs.core.first(seq__44193__$1);
var seq__44193__$2 = cljs.core.next(seq__44193__$1);
var lang = first__44194__$1;
var _ = seq__44193__$2;
var and__4210__auto____$1 = (function (){var fexpr__44195 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"upsert","upsert",1416724984),null,new cljs.core.Keyword(null,"switch","switch",71881310),null], null), null);
return (fexpr__44195.cljs$core$IFn$_invoke$arity$1 ? fexpr__44195.cljs$core$IFn$_invoke$arity$1(op) : fexpr__44195.call(null,op));
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
translations.tongue_base.get_dictionary = (function translations$tongue_base$get_dictionary(url,p__44197){
var map__44198 = p__44197;
var map__44198__$1 = cljs.core.__destructure_map(map__44198);
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44198__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
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
return ((cljs.core.seq(op_args)) && (cljs.core.every_QMARK_((function (p__44201){
var vec__44202 = p__44201;
var seq__44203 = cljs.core.seq(vec__44202);
var first__44204 = cljs.core.first(seq__44203);
var seq__44203__$1 = cljs.core.next(seq__44203);
var op = first__44204;
var first__44204__$1 = cljs.core.first(seq__44203__$1);
var seq__44203__$2 = cljs.core.next(seq__44203__$1);
var lang = first__44204__$1;
var args = seq__44203__$2;
var pred__44205 = cljs.core._EQ_;
var expr__44206 = op;
if(cljs.core.truth_((pred__44205.cljs$core$IFn$_invoke$arity$2 ? pred__44205.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"upsert","upsert",1416724984),expr__44206) : pred__44205.call(null,new cljs.core.Keyword(null,"upsert","upsert",1416724984),expr__44206)))){
return ((cljs.core.seq_QMARK_(args)) && (((cljs.core.map_QMARK_(cljs.core.first(args))) && ((lang instanceof cljs.core.Keyword)))));
} else {
if(cljs.core.truth_((pred__44205.cljs$core$IFn$_invoke$arity$2 ? pred__44205.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"switch","switch",71881310),expr__44206) : pred__44205.call(null,new cljs.core.Keyword(null,"switch","switch",71881310),expr__44206)))){
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
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__44211){
var vec__44212 = p__44211;
var cmd = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44212,(0),null);
var lang = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44212,(1),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44212,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cmd),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(lang),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__44215){
var vec__44216 = p__44215;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44216,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44216,(1),null);
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
translations.tongue_base.get_dictionary("/dictionary.txt",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-error","on-error",1728533530),(function (p1__44223_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(err_chan,p1__44223_SHARP_);
}),new cljs.core.Keyword(null,"handler","handler",-195596612),(function (p1__44224_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(static_chan,p1__44224_SHARP_);
})], null));

var c__35736__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35737__auto__ = (function (){var switch__35582__auto__ = (function (state_44301){
var state_val_44302 = (state_44301[(1)]);
if((state_val_44302 === (1))){
var inst_44232 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_44233 = [static_chan,err_chan];
var inst_44234 = (new cljs.core.PersistentVector(null,2,(5),inst_44232,inst_44233,null));
var state_44301__$1 = state_44301;
return cljs.core.async.ioc_alts_BANG_(state_44301__$1,(2),inst_44234);
} else {
if((state_val_44302 === (2))){
var inst_44236 = (state_44301[(7)]);
var inst_44238 = (state_44301[(8)]);
var inst_44236__$1 = (state_44301[(2)]);
var inst_44237 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44236__$1,(0),null);
var inst_44238__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44236__$1,(1),null);
var inst_44239 = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(inst_44237);
var inst_44240 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(static_chan,inst_44238__$1);
var state_44301__$1 = (function (){var statearr_44309 = state_44301;
(statearr_44309[(7)] = inst_44236__$1);

(statearr_44309[(8)] = inst_44238__$1);

(statearr_44309[(9)] = inst_44239);

return statearr_44309;
})();
if(inst_44240){
var statearr_44310_44398 = state_44301__$1;
(statearr_44310_44398[(1)] = (3));

} else {
var statearr_44311_44399 = state_44301__$1;
(statearr_44311_44399[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44302 === (3))){
var inst_44236 = (state_44301[(7)]);
var inst_44238 = (state_44301[(8)]);
var inst_44239 = (state_44301[(9)]);
var inst_44242 = cljs.core.deref(ref);
var inst_44243 = translations.tongue_base.process_dict_ops(inst_44242,inst_44239);
var inst_44244 = cljs.core.reset_BANG_(ref,inst_44243);
var inst_44245 = [new cljs.core.Keyword(null,"handler","handler",-195596612),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),new cljs.core.Keyword(null,"format","format",-1306924766)];
var inst_44246 = (function (){var vec__44229 = inst_44236;
var seed_dict = inst_44239;
var port = inst_44238;
return (function (p1__44225_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ok_chan,p1__44225_SHARP_);
});
})();
var inst_44247 = (function (){var vec__44229 = inst_44236;
var seed_dict = inst_44239;
var port = inst_44238;
return (function (p1__44226_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(err_chan,p1__44226_SHARP_);
});
})();
var inst_44248 = [inst_44246,inst_44247,new cljs.core.Keyword(null,"transit","transit",359458387)];
var inst_44249 = cljs.core.PersistentHashMap.fromArrays(inst_44245,inst_44248);
var inst_44250 = ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic(dictionary_endpoint,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_44249], 0));
var inst_44291 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_44292 = (function (){var vec__44229 = inst_44236;
var seed_dict = inst_44239;
var port = inst_44238;
var c__35736__auto____$1 = inst_44291;
return (function (){
var f__35737__auto__ = (function (){var switch__35582__auto__ = (function (state_44282){
var state_val_44283 = (state_44282[(1)]);
if((state_val_44283 === (1))){
var inst_44254 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_44255 = [ok_chan,err_chan];
var inst_44256 = (new cljs.core.PersistentVector(null,2,(5),inst_44254,inst_44255,null));
var state_44282__$1 = state_44282;
return cljs.core.async.ioc_alts_BANG_(state_44282__$1,(2),inst_44256);
} else {
if((state_val_44283 === (2))){
var inst_44258 = (state_44282[(2)]);
var inst_44259 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44258,(0),null);
var inst_44260 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44258,(1),null);
var inst_44261 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ok_chan,inst_44260);
var state_44282__$1 = (function (){var statearr_44315 = state_44282;
(statearr_44315[(7)] = inst_44259);

return statearr_44315;
})();
if(inst_44261){
var statearr_44316_44407 = state_44282__$1;
(statearr_44316_44407[(1)] = (3));

} else {
var statearr_44317_44408 = state_44282__$1;
(statearr_44317_44408[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44283 === (3))){
var inst_44263 = (state_44282[(8)]);
var inst_44259 = (state_44282[(7)]);
var inst_44263__$1 = translations.tongue_base.read_json_dict(inst_44259);
var inst_44264 = translations.tongue_base.validate_op_args(inst_44263__$1);
var state_44282__$1 = (function (){var statearr_44318 = state_44282;
(statearr_44318[(8)] = inst_44263__$1);

return statearr_44318;
})();
if(inst_44264){
var statearr_44319_44409 = state_44282__$1;
(statearr_44319_44409[(1)] = (6));

} else {
var statearr_44320_44410 = state_44282__$1;
(statearr_44320_44410[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44283 === (4))){
var inst_44259 = (state_44282[(7)]);
var inst_44276 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_44259], 0));
var inst_44277 = ["error from",cljs.core.str.cljs$core$IFn$_invoke$arity$1(dictionary_endpoint),":",inst_44276].join('');
var inst_44278 = alert(inst_44277);
var state_44282__$1 = state_44282;
var statearr_44321_44413 = state_44282__$1;
(statearr_44321_44413[(2)] = inst_44278);

(statearr_44321_44413[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44283 === (5))){
var inst_44280 = (state_44282[(2)]);
var state_44282__$1 = state_44282;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44282__$1,inst_44280);
} else {
if((state_val_44283 === (6))){
var inst_44263 = (state_44282[(8)]);
var inst_44266 = cljs.core.deref(ref);
var inst_44267 = translations.tongue_base.process_dict_ops(inst_44266,inst_44263);
var inst_44268 = cljs.core.reset_BANG_(ref,inst_44267);
var state_44282__$1 = state_44282;
var statearr_44323_44416 = state_44282__$1;
(statearr_44323_44416[(2)] = inst_44268);

(statearr_44323_44416[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44283 === (7))){
var inst_44270 = alert("Local dictionary parse failure");
var state_44282__$1 = state_44282;
var statearr_44324_44417 = state_44282__$1;
(statearr_44324_44417[(2)] = inst_44270);

(statearr_44324_44417[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44283 === (8))){
var inst_44272 = (state_44282[(2)]);
var state_44282__$1 = state_44282;
var statearr_44326_44419 = state_44282__$1;
(statearr_44326_44419[(2)] = inst_44272);

(statearr_44326_44419[(1)] = (5));


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
var translations$tongue_base$load_all_translations_$_state_machine__35583__auto__ = null;
var translations$tongue_base$load_all_translations_$_state_machine__35583__auto____0 = (function (){
var statearr_44327 = [null,null,null,null,null,null,null,null,null];
(statearr_44327[(0)] = translations$tongue_base$load_all_translations_$_state_machine__35583__auto__);

(statearr_44327[(1)] = (1));

return statearr_44327;
});
var translations$tongue_base$load_all_translations_$_state_machine__35583__auto____1 = (function (state_44282){
while(true){
var ret_value__35584__auto__ = (function (){try{while(true){
var result__35585__auto__ = switch__35582__auto__(state_44282);
if(cljs.core.keyword_identical_QMARK_(result__35585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35585__auto__;
}
break;
}
}catch (e44328){var ex__35586__auto__ = e44328;
var statearr_44329_44424 = state_44282;
(statearr_44329_44424[(2)] = ex__35586__auto__);


if(cljs.core.seq((state_44282[(4)]))){
var statearr_44330_44425 = state_44282;
(statearr_44330_44425[(1)] = cljs.core.first((state_44282[(4)])));

} else {
throw ex__35586__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44426 = state_44282;
state_44282 = G__44426;
continue;
} else {
return ret_value__35584__auto__;
}
break;
}
});
translations$tongue_base$load_all_translations_$_state_machine__35583__auto__ = function(state_44282){
switch(arguments.length){
case 0:
return translations$tongue_base$load_all_translations_$_state_machine__35583__auto____0.call(this);
case 1:
return translations$tongue_base$load_all_translations_$_state_machine__35583__auto____1.call(this,state_44282);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
translations$tongue_base$load_all_translations_$_state_machine__35583__auto__.cljs$core$IFn$_invoke$arity$0 = translations$tongue_base$load_all_translations_$_state_machine__35583__auto____0;
translations$tongue_base$load_all_translations_$_state_machine__35583__auto__.cljs$core$IFn$_invoke$arity$1 = translations$tongue_base$load_all_translations_$_state_machine__35583__auto____1;
return translations$tongue_base$load_all_translations_$_state_machine__35583__auto__;
})()
})();
var state__35738__auto__ = (function (){var statearr_44335 = f__35737__auto__();
(statearr_44335[(6)] = c__35736__auto____$1);

return statearr_44335;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35738__auto__);
});
})();
var inst_44293 = cljs.core.async.impl.dispatch.run(inst_44292);
var state_44301__$1 = (function (){var statearr_44336 = state_44301;
(statearr_44336[(10)] = inst_44244);

(statearr_44336[(11)] = inst_44293);

(statearr_44336[(12)] = inst_44250);

return statearr_44336;
})();
var statearr_44337_44435 = state_44301__$1;
(statearr_44337_44435[(2)] = inst_44291);

(statearr_44337_44435[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44302 === (4))){
var inst_44239 = (state_44301[(9)]);
var inst_44295 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_44239], 0));
var inst_44296 = ["error from dictionary.txt ",inst_44295].join('');
var inst_44297 = alert(inst_44296);
var state_44301__$1 = state_44301;
var statearr_44338_44452 = state_44301__$1;
(statearr_44338_44452[(2)] = inst_44297);

(statearr_44338_44452[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44302 === (5))){
var inst_44299 = (state_44301[(2)]);
var state_44301__$1 = state_44301;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44301__$1,inst_44299);
} else {
return null;
}
}
}
}
}
});
return (function() {
var translations$tongue_base$load_all_translations_$_state_machine__35583__auto__ = null;
var translations$tongue_base$load_all_translations_$_state_machine__35583__auto____0 = (function (){
var statearr_44339 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44339[(0)] = translations$tongue_base$load_all_translations_$_state_machine__35583__auto__);

(statearr_44339[(1)] = (1));

return statearr_44339;
});
var translations$tongue_base$load_all_translations_$_state_machine__35583__auto____1 = (function (state_44301){
while(true){
var ret_value__35584__auto__ = (function (){try{while(true){
var result__35585__auto__ = switch__35582__auto__(state_44301);
if(cljs.core.keyword_identical_QMARK_(result__35585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35585__auto__;
}
break;
}
}catch (e44341){var ex__35586__auto__ = e44341;
var statearr_44343_44455 = state_44301;
(statearr_44343_44455[(2)] = ex__35586__auto__);


if(cljs.core.seq((state_44301[(4)]))){
var statearr_44344_44456 = state_44301;
(statearr_44344_44456[(1)] = cljs.core.first((state_44301[(4)])));

} else {
throw ex__35586__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44457 = state_44301;
state_44301 = G__44457;
continue;
} else {
return ret_value__35584__auto__;
}
break;
}
});
translations$tongue_base$load_all_translations_$_state_machine__35583__auto__ = function(state_44301){
switch(arguments.length){
case 0:
return translations$tongue_base$load_all_translations_$_state_machine__35583__auto____0.call(this);
case 1:
return translations$tongue_base$load_all_translations_$_state_machine__35583__auto____1.call(this,state_44301);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
translations$tongue_base$load_all_translations_$_state_machine__35583__auto__.cljs$core$IFn$_invoke$arity$0 = translations$tongue_base$load_all_translations_$_state_machine__35583__auto____0;
translations$tongue_base$load_all_translations_$_state_machine__35583__auto__.cljs$core$IFn$_invoke$arity$1 = translations$tongue_base$load_all_translations_$_state_machine__35583__auto____1;
return translations$tongue_base$load_all_translations_$_state_machine__35583__auto__;
})()
})();
var state__35738__auto__ = (function (){var statearr_44347 = f__35737__auto__();
(statearr_44347[(6)] = c__35736__auto__);

return statearr_44347;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35738__auto__);
}));

return c__35736__auto__;
});

//# sourceMappingURL=translations.tongue_base.js.map
