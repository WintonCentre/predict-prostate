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
var G__55313__delegate = function (k,args){
var k_STAR_ = (((k instanceof cljs.core.Keyword))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null):k);
if(cljs.core.vector_QMARK_(k_STAR_)){
var translation = (function (){var G__54997 = lang;
var G__55000 = cljs.core.first(k_STAR_);
var G__55002 = args;
return (translator.cljs$core$IFn$_invoke$arity$3 ? translator.cljs$core$IFn$_invoke$arity$3(G__54997,G__55000,G__55002) : translator.call(null,G__54997,G__55000,G__55002));
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
var G__55313 = function (k,var_args){
var args = null;
if (arguments.length > 1) {
var G__55315__i = 0, G__55315__a = new Array(arguments.length -  1);
while (G__55315__i < G__55315__a.length) {G__55315__a[G__55315__i] = arguments[G__55315__i + 1]; ++G__55315__i;}
  args = new cljs.core.IndexedSeq(G__55315__a,0,null);
} 
return G__55313__delegate.call(this,k,args);};
G__55313.cljs$lang$maxFixedArity = 1;
G__55313.cljs$lang$applyTo = (function (arglist__55317){
var k = cljs.core.first(arglist__55317);
var args = cljs.core.rest(arglist__55317);
return G__55313__delegate(k,args);
});
G__55313.cljs$core$IFn$_invoke$arity$variadic = G__55313__delegate;
return G__55313;
})()
;
});
translations.tongue_base.error_handler = (function translations$tongue_base$error_handler(p__55004){
var map__55006 = p__55004;
var map__55006__$1 = (((((!((map__55006 == null))))?(((((map__55006.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55006.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55006):map__55006);
var callback = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55006__$1,new cljs.core.Keyword(null,"callback","callback",-705136228));
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55006__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55006__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["error dispatch - status : ",status,"\ntext: ",status_text], 0));

var G__55010 = (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1(status)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_text)].join('')));
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__55010) : callback.call(null,G__55010));
});
translations.tongue_base.file_error = (function translations$tongue_base$file_error(p__55014){
var map__55016 = p__55014;
var map__55016__$1 = (((((!((map__55016 == null))))?(((((map__55016.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55016.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55016):map__55016);
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55016__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55016__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return console.log(["file error: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_text)].join(''));
});
/**
 * Process ops over a dictionary, returning a new dictionary.
 *   If the ops merge in words from a new language, that is merged in to the supported languages set
 */
translations.tongue_base.process_dict_op = (function translations$tongue_base$process_dict_op(var_args){
var G__55022 = arguments.length;
switch (G__55022) {
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

(translations.tongue_base.process_dict_op.cljs$core$IFn$_invoke$arity$3 = (function (dict,p__55024,_){
var vec__55028 = p__55024;
var seq__55029 = cljs.core.seq(vec__55028);
var first__55030 = cljs.core.first(seq__55029);
var seq__55029__$1 = cljs.core.next(seq__55029);
var op = first__55030;
var args = seq__55029__$1;
var G__55031 = op;
var G__55031__$1 = (((G__55031 instanceof cljs.core.Keyword))?G__55031.fqn:null);
switch (G__55031__$1) {
case "upsert":
var vec__55033 = args;
var lang = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55033,(0),null);
var new_words = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55033,(1),null);
var current_lang = new cljs.core.Keyword(null,"lang","lang",-1819677104).cljs$core$IFn$_invoke$arity$1(dict);
var new_lang_dict = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(dict,new cljs.core.Keyword(null,"languages","languages",1471910331),cljs.core.conj,lang),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"translations","translations",-1114228673),lang], null),cljs.core.merge,new_words);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_lang_dict,new cljs.core.Keyword(null,"translator","translator",-1752203115),translations.tongue_base.wrap_translator(current_lang,tongue.core.build_translate(new cljs.core.Keyword(null,"translations","translations",-1114228673).cljs$core$IFn$_invoke$arity$1(new_lang_dict))));

break;
case "switch":
var vec__55039 = args;
var lang = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55039,(0),null);
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__55031__$1)].join('')));

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
if(((cljs.core.seq(op_args)) && (cljs.core.every_QMARK_((function (p__55059){
var vec__55061 = p__55059;
var seq__55062 = cljs.core.seq(vec__55061);
var first__55063 = cljs.core.first(seq__55062);
var seq__55062__$1 = cljs.core.next(seq__55062);
var op = first__55063;
var first__55063__$1 = cljs.core.first(seq__55062__$1);
var seq__55062__$2 = cljs.core.next(seq__55062__$1);
var lang = first__55063__$1;
var _ = seq__55062__$2;
var and__4115__auto__ = (function (){var fexpr__55071 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"upsert","upsert",1416724984),null,new cljs.core.Keyword(null,"switch","switch",71881310),null], null), null);
return (fexpr__55071.cljs$core$IFn$_invoke$arity$1 ? fexpr__55071.cljs$core$IFn$_invoke$arity$1(op) : fexpr__55071.call(null,op));
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
translations.tongue_base.get_dictionary = (function translations$tongue_base$get_dictionary(url,p__55073){
var map__55075 = p__55073;
var map__55075__$1 = (((((!((map__55075 == null))))?(((((map__55075.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55075.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55075):map__55075);
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55075__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
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
return ((cljs.core.seq(op_args)) && (cljs.core.every_QMARK_((function (p__55093){
var vec__55095 = p__55093;
var seq__55096 = cljs.core.seq(vec__55095);
var first__55097 = cljs.core.first(seq__55096);
var seq__55096__$1 = cljs.core.next(seq__55096);
var op = first__55097;
var first__55097__$1 = cljs.core.first(seq__55096__$1);
var seq__55096__$2 = cljs.core.next(seq__55096__$1);
var lang = first__55097__$1;
var args = seq__55096__$2;
var pred__55101 = cljs.core._EQ_;
var expr__55102 = op;
if(cljs.core.truth_((pred__55101.cljs$core$IFn$_invoke$arity$2 ? pred__55101.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"upsert","upsert",1416724984),expr__55102) : pred__55101.call(null,new cljs.core.Keyword(null,"upsert","upsert",1416724984),expr__55102)))){
return ((cljs.core.seq_QMARK_(args)) && (cljs.core.map_QMARK_(cljs.core.first(args))) && ((lang instanceof cljs.core.Keyword)));
} else {
if(cljs.core.truth_((pred__55101.cljs$core$IFn$_invoke$arity$2 ? pred__55101.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"switch","switch",71881310),expr__55102) : pred__55101.call(null,new cljs.core.Keyword(null,"switch","switch",71881310),expr__55102)))){
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
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__55107){
var vec__55109 = p__55107;
var cmd = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55109,(0),null);
var lang = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55109,(1),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55109,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cmd),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(lang),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__55119){
var vec__55120 = p__55119;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55120,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55120,(1),null);
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
translations.tongue_base.get_dictionary("dictionary.txt",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-error","on-error",1728533530),(function (p1__55127_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(err_chan,p1__55127_SHARP_);
}),new cljs.core.Keyword(null,"handler","handler",-195596612),(function (p1__55128_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(static_chan,p1__55128_SHARP_);
})], null));

var c__29432__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29433__auto__ = (function (){var switch__29362__auto__ = (function (state_55257){
var state_val_55258 = (state_55257[(1)]);
if((state_val_55258 === (1))){
var inst_55143 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_55145 = [static_chan,err_chan];
var inst_55147 = (new cljs.core.PersistentVector(null,2,(5),inst_55143,inst_55145,null));
var state_55257__$1 = state_55257;
return cljs.core.async.ioc_alts_BANG_(state_55257__$1,(2),inst_55147);
} else {
if((state_val_55258 === (2))){
var inst_55153 = (state_55257[(7)]);
var inst_55149 = (state_55257[(8)]);
var inst_55149__$1 = (state_55257[(2)]);
var inst_55151 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_55149__$1,(0),null);
var inst_55153__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_55149__$1,(1),null);
var inst_55154 = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(inst_55151);
var inst_55158 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(static_chan,inst_55153__$1);
var state_55257__$1 = (function (){var statearr_55261 = state_55257;
(statearr_55261[(7)] = inst_55153__$1);

(statearr_55261[(9)] = inst_55154);

(statearr_55261[(8)] = inst_55149__$1);

return statearr_55261;
})();
if(inst_55158){
var statearr_55264_55348 = state_55257__$1;
(statearr_55264_55348[(1)] = (3));

} else {
var statearr_55266_55350 = state_55257__$1;
(statearr_55266_55350[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55258 === (3))){
var inst_55153 = (state_55257[(7)]);
var inst_55154 = (state_55257[(9)]);
var inst_55149 = (state_55257[(8)]);
var inst_55160 = cljs.core.deref(ref);
var inst_55161 = translations.tongue_base.process_dict_ops(inst_55160,inst_55154);
var inst_55162 = cljs.core.reset_BANG_(ref,inst_55161);
var inst_55163 = [new cljs.core.Keyword(null,"handler","handler",-195596612),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),new cljs.core.Keyword(null,"format","format",-1306924766)];
var inst_55165 = (function (){var vec__55135 = inst_55149;
var seed_dict = inst_55154;
var port = inst_55153;
return (function (p1__55129_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ok_chan,p1__55129_SHARP_);
});
})();
var inst_55167 = (function (){var vec__55135 = inst_55149;
var seed_dict = inst_55154;
var port = inst_55153;
return (function (p1__55130_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(err_chan,p1__55130_SHARP_);
});
})();
var inst_55168 = [inst_55165,inst_55167,new cljs.core.Keyword(null,"transit","transit",359458387)];
var inst_55169 = cljs.core.PersistentHashMap.fromArrays(inst_55163,inst_55168);
var inst_55170 = ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic(dictionary_endpoint,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_55169], 0));
var inst_55238 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_55241 = (function (){var vec__55135 = inst_55149;
var seed_dict = inst_55154;
var port = inst_55153;
var c__29432__auto____$1 = inst_55238;
return (function (){
var f__29433__auto__ = (function (){var switch__29362__auto__ = (function (state_55234){
var state_val_55236 = (state_55234[(1)]);
if((state_val_55236 === (1))){
var inst_55182 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_55187 = [ok_chan,err_chan];
var inst_55188 = (new cljs.core.PersistentVector(null,2,(5),inst_55182,inst_55187,null));
var state_55234__$1 = state_55234;
return cljs.core.async.ioc_alts_BANG_(state_55234__$1,(2),inst_55188);
} else {
if((state_val_55236 === (2))){
var inst_55191 = (state_55234[(2)]);
var inst_55193 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_55191,(0),null);
var inst_55195 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_55191,(1),null);
var inst_55197 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ok_chan,inst_55195);
var state_55234__$1 = (function (){var statearr_55268 = state_55234;
(statearr_55268[(7)] = inst_55193);

return statearr_55268;
})();
if(inst_55197){
var statearr_55270_55358 = state_55234__$1;
(statearr_55270_55358[(1)] = (3));

} else {
var statearr_55272_55359 = state_55234__$1;
(statearr_55272_55359[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55236 === (3))){
var inst_55193 = (state_55234[(7)]);
var inst_55201 = (state_55234[(8)]);
var inst_55201__$1 = translations.tongue_base.read_json_dict(inst_55193);
var inst_55203 = translations.tongue_base.validate_op_args(inst_55201__$1);
var state_55234__$1 = (function (){var statearr_55274 = state_55234;
(statearr_55274[(8)] = inst_55201__$1);

return statearr_55274;
})();
if(inst_55203){
var statearr_55276_55360 = state_55234__$1;
(statearr_55276_55360[(1)] = (6));

} else {
var statearr_55278_55361 = state_55234__$1;
(statearr_55278_55361[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55236 === (4))){
var inst_55193 = (state_55234[(7)]);
var inst_55224 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_55193], 0));
var inst_55226 = ["error from",cljs.core.str.cljs$core$IFn$_invoke$arity$1(dictionary_endpoint),":",inst_55224].join('');
var inst_55228 = alert(inst_55226);
var state_55234__$1 = state_55234;
var statearr_55280_55362 = state_55234__$1;
(statearr_55280_55362[(2)] = inst_55228);

(statearr_55280_55362[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55236 === (5))){
var inst_55230 = (state_55234[(2)]);
var state_55234__$1 = state_55234;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55234__$1,inst_55230);
} else {
if((state_val_55236 === (6))){
var inst_55201 = (state_55234[(8)]);
var inst_55209 = cljs.core.deref(ref);
var inst_55210 = translations.tongue_base.process_dict_ops(inst_55209,inst_55201);
var inst_55211 = cljs.core.reset_BANG_(ref,inst_55210);
var state_55234__$1 = state_55234;
var statearr_55282_55367 = state_55234__$1;
(statearr_55282_55367[(2)] = inst_55211);

(statearr_55282_55367[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55236 === (7))){
var inst_55217 = alert("Local dictionary parse failure");
var state_55234__$1 = state_55234;
var statearr_55284_55369 = state_55234__$1;
(statearr_55284_55369[(2)] = inst_55217);

(statearr_55284_55369[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55236 === (8))){
var inst_55219 = (state_55234[(2)]);
var state_55234__$1 = state_55234;
var statearr_55286_55370 = state_55234__$1;
(statearr_55286_55370[(2)] = inst_55219);

(statearr_55286_55370[(1)] = (5));


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
var statearr_55288 = [null,null,null,null,null,null,null,null,null];
(statearr_55288[(0)] = translations$tongue_base$load_all_translations_$_state_machine__29363__auto__);

(statearr_55288[(1)] = (1));

return statearr_55288;
});
var translations$tongue_base$load_all_translations_$_state_machine__29363__auto____1 = (function (state_55234){
while(true){
var ret_value__29364__auto__ = (function (){try{while(true){
var result__29365__auto__ = switch__29362__auto__(state_55234);
if(cljs.core.keyword_identical_QMARK_(result__29365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29365__auto__;
}
break;
}
}catch (e55290){var ex__29366__auto__ = e55290;
var statearr_55292_55373 = state_55234;
(statearr_55292_55373[(2)] = ex__29366__auto__);


if(cljs.core.seq((state_55234[(4)]))){
var statearr_55294_55374 = state_55234;
(statearr_55294_55374[(1)] = cljs.core.first((state_55234[(4)])));

} else {
throw ex__29366__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55375 = state_55234;
state_55234 = G__55375;
continue;
} else {
return ret_value__29364__auto__;
}
break;
}
});
translations$tongue_base$load_all_translations_$_state_machine__29363__auto__ = function(state_55234){
switch(arguments.length){
case 0:
return translations$tongue_base$load_all_translations_$_state_machine__29363__auto____0.call(this);
case 1:
return translations$tongue_base$load_all_translations_$_state_machine__29363__auto____1.call(this,state_55234);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
translations$tongue_base$load_all_translations_$_state_machine__29363__auto__.cljs$core$IFn$_invoke$arity$0 = translations$tongue_base$load_all_translations_$_state_machine__29363__auto____0;
translations$tongue_base$load_all_translations_$_state_machine__29363__auto__.cljs$core$IFn$_invoke$arity$1 = translations$tongue_base$load_all_translations_$_state_machine__29363__auto____1;
return translations$tongue_base$load_all_translations_$_state_machine__29363__auto__;
})()
})();
var state__29434__auto__ = (function (){var statearr_55296 = f__29433__auto__();
(statearr_55296[(6)] = c__29432__auto____$1);

return statearr_55296;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29434__auto__);
});
})();
var inst_55243 = cljs.core.async.impl.dispatch.run(inst_55241);
var state_55257__$1 = (function (){var statearr_55298 = state_55257;
(statearr_55298[(10)] = inst_55162);

(statearr_55298[(11)] = inst_55243);

(statearr_55298[(12)] = inst_55170);

return statearr_55298;
})();
var statearr_55300_55378 = state_55257__$1;
(statearr_55300_55378[(2)] = inst_55238);

(statearr_55300_55378[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55258 === (4))){
var inst_55154 = (state_55257[(9)]);
var inst_55245 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_55154], 0));
var inst_55247 = ["error from dictionary.txt ",inst_55245].join('');
var inst_55248 = alert(inst_55247);
var state_55257__$1 = state_55257;
var statearr_55302_55382 = state_55257__$1;
(statearr_55302_55382[(2)] = inst_55248);

(statearr_55302_55382[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55258 === (5))){
var inst_55252 = (state_55257[(2)]);
var state_55257__$1 = state_55257;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55257__$1,inst_55252);
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
var statearr_55304 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_55304[(0)] = translations$tongue_base$load_all_translations_$_state_machine__29363__auto__);

(statearr_55304[(1)] = (1));

return statearr_55304;
});
var translations$tongue_base$load_all_translations_$_state_machine__29363__auto____1 = (function (state_55257){
while(true){
var ret_value__29364__auto__ = (function (){try{while(true){
var result__29365__auto__ = switch__29362__auto__(state_55257);
if(cljs.core.keyword_identical_QMARK_(result__29365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29365__auto__;
}
break;
}
}catch (e55306){var ex__29366__auto__ = e55306;
var statearr_55308_55391 = state_55257;
(statearr_55308_55391[(2)] = ex__29366__auto__);


if(cljs.core.seq((state_55257[(4)]))){
var statearr_55310_55392 = state_55257;
(statearr_55310_55392[(1)] = cljs.core.first((state_55257[(4)])));

} else {
throw ex__29366__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55393 = state_55257;
state_55257 = G__55393;
continue;
} else {
return ret_value__29364__auto__;
}
break;
}
});
translations$tongue_base$load_all_translations_$_state_machine__29363__auto__ = function(state_55257){
switch(arguments.length){
case 0:
return translations$tongue_base$load_all_translations_$_state_machine__29363__auto____0.call(this);
case 1:
return translations$tongue_base$load_all_translations_$_state_machine__29363__auto____1.call(this,state_55257);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
translations$tongue_base$load_all_translations_$_state_machine__29363__auto__.cljs$core$IFn$_invoke$arity$0 = translations$tongue_base$load_all_translations_$_state_machine__29363__auto____0;
translations$tongue_base$load_all_translations_$_state_machine__29363__auto__.cljs$core$IFn$_invoke$arity$1 = translations$tongue_base$load_all_translations_$_state_machine__29363__auto____1;
return translations$tongue_base$load_all_translations_$_state_machine__29363__auto__;
})()
})();
var state__29434__auto__ = (function (){var statearr_55312 = f__29433__auto__();
(statearr_55312[(6)] = c__29432__auto__);

return statearr_55312;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29434__auto__);
}));

return c__29432__auto__;
});

//# sourceMappingURL=translations.tongue_base.js.map
