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
var G__132065__delegate = function (k,args){
var k_STAR_ = (((k instanceof cljs.core.Keyword))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null):k);
if(cljs.core.vector_QMARK_(k_STAR_)){
var translation = (function (){var G__131749 = lang;
var G__131752 = cljs.core.first(k_STAR_);
var G__131754 = args;
return (translator.cljs$core$IFn$_invoke$arity$3 ? translator.cljs$core$IFn$_invoke$arity$3(G__131749,G__131752,G__131754) : translator.call(null,G__131749,G__131752,G__131754));
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
var G__132065 = function (k,var_args){
var args = null;
if (arguments.length > 1) {
var G__132067__i = 0, G__132067__a = new Array(arguments.length -  1);
while (G__132067__i < G__132067__a.length) {G__132067__a[G__132067__i] = arguments[G__132067__i + 1]; ++G__132067__i;}
  args = new cljs.core.IndexedSeq(G__132067__a,0,null);
} 
return G__132065__delegate.call(this,k,args);};
G__132065.cljs$lang$maxFixedArity = 1;
G__132065.cljs$lang$applyTo = (function (arglist__132069){
var k = cljs.core.first(arglist__132069);
var args = cljs.core.rest(arglist__132069);
return G__132065__delegate(k,args);
});
G__132065.cljs$core$IFn$_invoke$arity$variadic = G__132065__delegate;
return G__132065;
})()
;
});
translations.tongue_base.error_handler = (function translations$tongue_base$error_handler(p__131756){
var map__131758 = p__131756;
var map__131758__$1 = (((((!((map__131758 == null))))?(((((map__131758.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__131758.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__131758):map__131758);
var callback = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__131758__$1,new cljs.core.Keyword(null,"callback","callback",-705136228));
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__131758__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__131758__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["error dispatch - status : ",status,"\ntext: ",status_text], 0));

var G__131761 = (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1(status)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_text)].join('')));
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__131761) : callback.call(null,G__131761));
});
translations.tongue_base.file_error = (function translations$tongue_base$file_error(p__131766){
var map__131769 = p__131766;
var map__131769__$1 = (((((!((map__131769 == null))))?(((((map__131769.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__131769.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__131769):map__131769);
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__131769__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__131769__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return console.log(["file error: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_text)].join(''));
});
/**
 * Process ops over a dictionary, returning a new dictionary.
 *   If the ops merge in words from a new language, that is merged in to the supported languages set
 */
translations.tongue_base.process_dict_op = (function translations$tongue_base$process_dict_op(var_args){
var G__131774 = arguments.length;
switch (G__131774) {
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

(translations.tongue_base.process_dict_op.cljs$core$IFn$_invoke$arity$3 = (function (dict,p__131780,_){
var vec__131781 = p__131780;
var seq__131782 = cljs.core.seq(vec__131781);
var first__131783 = cljs.core.first(seq__131782);
var seq__131782__$1 = cljs.core.next(seq__131782);
var op = first__131783;
var args = seq__131782__$1;
var G__131784 = op;
var G__131784__$1 = (((G__131784 instanceof cljs.core.Keyword))?G__131784.fqn:null);
switch (G__131784__$1) {
case "upsert":
var vec__131788 = args;
var lang = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__131788,(0),null);
var new_words = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__131788,(1),null);
var current_lang = new cljs.core.Keyword(null,"lang","lang",-1819677104).cljs$core$IFn$_invoke$arity$1(dict);
var new_lang_dict = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(dict,new cljs.core.Keyword(null,"languages","languages",1471910331),cljs.core.conj,lang),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"translations","translations",-1114228673),lang], null),cljs.core.merge,new_words);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_lang_dict,new cljs.core.Keyword(null,"translator","translator",-1752203115),translations.tongue_base.wrap_translator(current_lang,tongue.core.build_translate(new cljs.core.Keyword(null,"translations","translations",-1114228673).cljs$core$IFn$_invoke$arity$1(new_lang_dict))));

break;
case "switch":
var vec__131794 = args;
var lang = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__131794,(0),null);
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__131784__$1)].join('')));

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
if(((cljs.core.seq(op_args)) && (cljs.core.every_QMARK_((function (p__131812){
var vec__131816 = p__131812;
var seq__131817 = cljs.core.seq(vec__131816);
var first__131818 = cljs.core.first(seq__131817);
var seq__131817__$1 = cljs.core.next(seq__131817);
var op = first__131818;
var first__131818__$1 = cljs.core.first(seq__131817__$1);
var seq__131817__$2 = cljs.core.next(seq__131817__$1);
var lang = first__131818__$1;
var _ = seq__131817__$2;
var and__4115__auto__ = (function (){var fexpr__131824 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"upsert","upsert",1416724984),null,new cljs.core.Keyword(null,"switch","switch",71881310),null], null), null);
return (fexpr__131824.cljs$core$IFn$_invoke$arity$1 ? fexpr__131824.cljs$core$IFn$_invoke$arity$1(op) : fexpr__131824.call(null,op));
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
translations.tongue_base.get_dictionary = (function translations$tongue_base$get_dictionary(url,p__131827){
var map__131829 = p__131827;
var map__131829__$1 = (((((!((map__131829 == null))))?(((((map__131829.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__131829.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__131829):map__131829);
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__131829__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
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
return ((cljs.core.seq(op_args)) && (cljs.core.every_QMARK_((function (p__131849){
var vec__131853 = p__131849;
var seq__131854 = cljs.core.seq(vec__131853);
var first__131855 = cljs.core.first(seq__131854);
var seq__131854__$1 = cljs.core.next(seq__131854);
var op = first__131855;
var first__131855__$1 = cljs.core.first(seq__131854__$1);
var seq__131854__$2 = cljs.core.next(seq__131854__$1);
var lang = first__131855__$1;
var args = seq__131854__$2;
var pred__131856 = cljs.core._EQ_;
var expr__131857 = op;
if(cljs.core.truth_((pred__131856.cljs$core$IFn$_invoke$arity$2 ? pred__131856.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"upsert","upsert",1416724984),expr__131857) : pred__131856.call(null,new cljs.core.Keyword(null,"upsert","upsert",1416724984),expr__131857)))){
return ((cljs.core.seq_QMARK_(args)) && (cljs.core.map_QMARK_(cljs.core.first(args))) && ((lang instanceof cljs.core.Keyword)));
} else {
if(cljs.core.truth_((pred__131856.cljs$core$IFn$_invoke$arity$2 ? pred__131856.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"switch","switch",71881310),expr__131857) : pred__131856.call(null,new cljs.core.Keyword(null,"switch","switch",71881310),expr__131857)))){
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
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__131863){
var vec__131864 = p__131863;
var cmd = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__131864,(0),null);
var lang = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__131864,(1),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__131864,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cmd),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(lang),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__131871){
var vec__131872 = p__131871;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__131872,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__131872,(1),null);
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
translations.tongue_base.get_dictionary("dictionary.txt",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-error","on-error",1728533530),(function (p1__131879_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(err_chan,p1__131879_SHARP_);
}),new cljs.core.Keyword(null,"handler","handler",-195596612),(function (p1__131880_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(static_chan,p1__131880_SHARP_);
})], null));

var c__29432__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29433__auto__ = (function (){var switch__29362__auto__ = (function (state_132011){
var state_val_132012 = (state_132011[(1)]);
if((state_val_132012 === (1))){
var inst_131890 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_131892 = [static_chan,err_chan];
var inst_131894 = (new cljs.core.PersistentVector(null,2,(5),inst_131890,inst_131892,null));
var state_132011__$1 = state_132011;
return cljs.core.async.ioc_alts_BANG_(state_132011__$1,(2),inst_131894);
} else {
if((state_val_132012 === (2))){
var inst_131902 = (state_132011[(7)]);
var inst_131898 = (state_132011[(8)]);
var inst_131898__$1 = (state_132011[(2)]);
var inst_131900 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_131898__$1,(0),null);
var inst_131902__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_131898__$1,(1),null);
var inst_131904 = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(inst_131900);
var inst_131906 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(static_chan,inst_131902__$1);
var state_132011__$1 = (function (){var statearr_132014 = state_132011;
(statearr_132014[(7)] = inst_131902__$1);

(statearr_132014[(9)] = inst_131904);

(statearr_132014[(8)] = inst_131898__$1);

return statearr_132014;
})();
if(inst_131906){
var statearr_132016_132086 = state_132011__$1;
(statearr_132016_132086[(1)] = (3));

} else {
var statearr_132018_132087 = state_132011__$1;
(statearr_132018_132087[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_132012 === (3))){
var inst_131902 = (state_132011[(7)]);
var inst_131904 = (state_132011[(9)]);
var inst_131898 = (state_132011[(8)]);
var inst_131909 = cljs.core.deref(ref);
var inst_131910 = translations.tongue_base.process_dict_ops(inst_131909,inst_131904);
var inst_131911 = cljs.core.reset_BANG_(ref,inst_131910);
var inst_131916 = [new cljs.core.Keyword(null,"handler","handler",-195596612),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),new cljs.core.Keyword(null,"format","format",-1306924766)];
var inst_131918 = (function (){var vec__131886 = inst_131898;
var seed_dict = inst_131904;
var port = inst_131902;
return (function (p1__131881_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ok_chan,p1__131881_SHARP_);
});
})();
var inst_131920 = (function (){var vec__131886 = inst_131898;
var seed_dict = inst_131904;
var port = inst_131902;
return (function (p1__131882_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(err_chan,p1__131882_SHARP_);
});
})();
var inst_131922 = [inst_131918,inst_131920,new cljs.core.Keyword(null,"transit","transit",359458387)];
var inst_131924 = cljs.core.PersistentHashMap.fromArrays(inst_131916,inst_131922);
var inst_131926 = ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic(dictionary_endpoint,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_131924], 0));
var inst_131990 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_131993 = (function (){var vec__131886 = inst_131898;
var seed_dict = inst_131904;
var port = inst_131902;
var c__29432__auto____$1 = inst_131990;
return (function (){
var f__29433__auto__ = (function (){var switch__29362__auto__ = (function (state_131985){
var state_val_131988 = (state_131985[(1)]);
if((state_val_131988 === (1))){
var inst_131934 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_131938 = [ok_chan,err_chan];
var inst_131940 = (new cljs.core.PersistentVector(null,2,(5),inst_131934,inst_131938,null));
var state_131985__$1 = state_131985;
return cljs.core.async.ioc_alts_BANG_(state_131985__$1,(2),inst_131940);
} else {
if((state_val_131988 === (2))){
var inst_131942 = (state_131985[(2)]);
var inst_131944 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_131942,(0),null);
var inst_131946 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_131942,(1),null);
var inst_131948 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ok_chan,inst_131946);
var state_131985__$1 = (function (){var statearr_132020 = state_131985;
(statearr_132020[(7)] = inst_131944);

return statearr_132020;
})();
if(inst_131948){
var statearr_132022_132115 = state_131985__$1;
(statearr_132022_132115[(1)] = (3));

} else {
var statearr_132024_132117 = state_131985__$1;
(statearr_132024_132117[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_131988 === (3))){
var inst_131944 = (state_131985[(7)]);
var inst_131954 = (state_131985[(8)]);
var inst_131954__$1 = translations.tongue_base.read_json_dict(inst_131944);
var inst_131955 = translations.tongue_base.validate_op_args(inst_131954__$1);
var state_131985__$1 = (function (){var statearr_132026 = state_131985;
(statearr_132026[(8)] = inst_131954__$1);

return statearr_132026;
})();
if(inst_131955){
var statearr_132028_132119 = state_131985__$1;
(statearr_132028_132119[(1)] = (6));

} else {
var statearr_132030_132120 = state_131985__$1;
(statearr_132030_132120[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_131988 === (4))){
var inst_131944 = (state_131985[(7)]);
var inst_131978 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_131944], 0));
var inst_131979 = ["error from",cljs.core.str.cljs$core$IFn$_invoke$arity$1(dictionary_endpoint),":",inst_131978].join('');
var inst_131980 = alert(inst_131979);
var state_131985__$1 = state_131985;
var statearr_132031_132123 = state_131985__$1;
(statearr_132031_132123[(2)] = inst_131980);

(statearr_132031_132123[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_131988 === (5))){
var inst_131982 = (state_131985[(2)]);
var state_131985__$1 = state_131985;
return cljs.core.async.impl.ioc_helpers.return_chan(state_131985__$1,inst_131982);
} else {
if((state_val_131988 === (6))){
var inst_131954 = (state_131985[(8)]);
var inst_131961 = cljs.core.deref(ref);
var inst_131962 = translations.tongue_base.process_dict_ops(inst_131961,inst_131954);
var inst_131963 = cljs.core.reset_BANG_(ref,inst_131962);
var state_131985__$1 = state_131985;
var statearr_132033_132125 = state_131985__$1;
(statearr_132033_132125[(2)] = inst_131963);

(statearr_132033_132125[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_131988 === (7))){
var inst_131966 = alert("Local dictionary parse failure");
var state_131985__$1 = state_131985;
var statearr_132034_132130 = state_131985__$1;
(statearr_132034_132130[(2)] = inst_131966);

(statearr_132034_132130[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_131988 === (8))){
var inst_131970 = (state_131985[(2)]);
var state_131985__$1 = state_131985;
var statearr_132035_132131 = state_131985__$1;
(statearr_132035_132131[(2)] = inst_131970);

(statearr_132035_132131[(1)] = (5));


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
var translations$tongue_base$load_all_translations_$_state_machine__29363__auto__ = null;
var translations$tongue_base$load_all_translations_$_state_machine__29363__auto____0 = (function (){
var statearr_132036 = [null,null,null,null,null,null,null,null,null];
(statearr_132036[(0)] = translations$tongue_base$load_all_translations_$_state_machine__29363__auto__);

(statearr_132036[(1)] = (1));

return statearr_132036;
});
var translations$tongue_base$load_all_translations_$_state_machine__29363__auto____1 = (function (state_131985){
while(true){
var ret_value__29364__auto__ = (function (){try{while(true){
var result__29365__auto__ = switch__29362__auto__(state_131985);
if(cljs.core.keyword_identical_QMARK_(result__29365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29365__auto__;
}
break;
}
}catch (e132038){var ex__29366__auto__ = e132038;
var statearr_132040_132138 = state_131985;
(statearr_132040_132138[(2)] = ex__29366__auto__);


if(cljs.core.seq((state_131985[(4)]))){
var statearr_132041_132140 = state_131985;
(statearr_132041_132140[(1)] = cljs.core.first((state_131985[(4)])));

} else {
throw ex__29366__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__132141 = state_131985;
state_131985 = G__132141;
continue;
} else {
return ret_value__29364__auto__;
}
break;
}
});
translations$tongue_base$load_all_translations_$_state_machine__29363__auto__ = function(state_131985){
switch(arguments.length){
case 0:
return translations$tongue_base$load_all_translations_$_state_machine__29363__auto____0.call(this);
case 1:
return translations$tongue_base$load_all_translations_$_state_machine__29363__auto____1.call(this,state_131985);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
translations$tongue_base$load_all_translations_$_state_machine__29363__auto__.cljs$core$IFn$_invoke$arity$0 = translations$tongue_base$load_all_translations_$_state_machine__29363__auto____0;
translations$tongue_base$load_all_translations_$_state_machine__29363__auto__.cljs$core$IFn$_invoke$arity$1 = translations$tongue_base$load_all_translations_$_state_machine__29363__auto____1;
return translations$tongue_base$load_all_translations_$_state_machine__29363__auto__;
})()
})();
var state__29434__auto__ = (function (){var statearr_132043 = f__29433__auto__();
(statearr_132043[(6)] = c__29432__auto____$1);

return statearr_132043;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29434__auto__);
});
})();
var inst_131995 = cljs.core.async.impl.dispatch.run(inst_131993);
var state_132011__$1 = (function (){var statearr_132045 = state_132011;
(statearr_132045[(10)] = inst_131911);

(statearr_132045[(11)] = inst_131995);

(statearr_132045[(12)] = inst_131926);

return statearr_132045;
})();
var statearr_132048_132150 = state_132011__$1;
(statearr_132048_132150[(2)] = inst_131990);

(statearr_132048_132150[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_132012 === (4))){
var inst_131904 = (state_132011[(9)]);
var inst_132002 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_131904], 0));
var inst_132003 = ["error from dictionary.txt ",inst_132002].join('');
var inst_132004 = alert(inst_132003);
var state_132011__$1 = state_132011;
var statearr_132050_132153 = state_132011__$1;
(statearr_132050_132153[(2)] = inst_132004);

(statearr_132050_132153[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_132012 === (5))){
var inst_132007 = (state_132011[(2)]);
var state_132011__$1 = state_132011;
return cljs.core.async.impl.ioc_helpers.return_chan(state_132011__$1,inst_132007);
} else {
return null;
}
}
}
}
}
});
return (function() {
var translations$tongue_base$load_all_translations_$_state_machine__29363__auto__ = null;
var translations$tongue_base$load_all_translations_$_state_machine__29363__auto____0 = (function (){
var statearr_132053 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_132053[(0)] = translations$tongue_base$load_all_translations_$_state_machine__29363__auto__);

(statearr_132053[(1)] = (1));

return statearr_132053;
});
var translations$tongue_base$load_all_translations_$_state_machine__29363__auto____1 = (function (state_132011){
while(true){
var ret_value__29364__auto__ = (function (){try{while(true){
var result__29365__auto__ = switch__29362__auto__(state_132011);
if(cljs.core.keyword_identical_QMARK_(result__29365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29365__auto__;
}
break;
}
}catch (e132055){var ex__29366__auto__ = e132055;
var statearr_132056_132157 = state_132011;
(statearr_132056_132157[(2)] = ex__29366__auto__);


if(cljs.core.seq((state_132011[(4)]))){
var statearr_132058_132158 = state_132011;
(statearr_132058_132158[(1)] = cljs.core.first((state_132011[(4)])));

} else {
throw ex__29366__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__132159 = state_132011;
state_132011 = G__132159;
continue;
} else {
return ret_value__29364__auto__;
}
break;
}
});
translations$tongue_base$load_all_translations_$_state_machine__29363__auto__ = function(state_132011){
switch(arguments.length){
case 0:
return translations$tongue_base$load_all_translations_$_state_machine__29363__auto____0.call(this);
case 1:
return translations$tongue_base$load_all_translations_$_state_machine__29363__auto____1.call(this,state_132011);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
translations$tongue_base$load_all_translations_$_state_machine__29363__auto__.cljs$core$IFn$_invoke$arity$0 = translations$tongue_base$load_all_translations_$_state_machine__29363__auto____0;
translations$tongue_base$load_all_translations_$_state_machine__29363__auto__.cljs$core$IFn$_invoke$arity$1 = translations$tongue_base$load_all_translations_$_state_machine__29363__auto____1;
return translations$tongue_base$load_all_translations_$_state_machine__29363__auto__;
})()
})();
var state__29434__auto__ = (function (){var statearr_132059 = f__29433__auto__();
(statearr_132059[(6)] = c__29432__auto__);

return statearr_132059;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29434__auto__);
}));

return c__29432__auto__;
});

//# sourceMappingURL=translations.tongue_base.js.map
