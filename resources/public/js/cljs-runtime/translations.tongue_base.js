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
var G__44271__delegate = function (k,args){
var k_STAR_ = (((k instanceof cljs.core.Keyword))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null):k);
if(cljs.core.vector_QMARK_(k_STAR_)){
var translation = (function (){var G__44084 = lang;
var G__44085 = cljs.core.first(k_STAR_);
var G__44086 = args;
return (translator.cljs$core$IFn$_invoke$arity$3 ? translator.cljs$core$IFn$_invoke$arity$3(G__44084,G__44085,G__44086) : translator.call(null,G__44084,G__44085,G__44086));
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
var G__44271 = function (k,var_args){
var args = null;
if (arguments.length > 1) {
var G__44273__i = 0, G__44273__a = new Array(arguments.length -  1);
while (G__44273__i < G__44273__a.length) {G__44273__a[G__44273__i] = arguments[G__44273__i + 1]; ++G__44273__i;}
  args = new cljs.core.IndexedSeq(G__44273__a,0,null);
} 
return G__44271__delegate.call(this,k,args);};
G__44271.cljs$lang$maxFixedArity = 1;
G__44271.cljs$lang$applyTo = (function (arglist__44274){
var k = cljs.core.first(arglist__44274);
var args = cljs.core.rest(arglist__44274);
return G__44271__delegate(k,args);
});
G__44271.cljs$core$IFn$_invoke$arity$variadic = G__44271__delegate;
return G__44271;
})()
;
});
translations.tongue_base.error_handler = (function translations$tongue_base$error_handler(p__44087){
var map__44088 = p__44087;
var map__44088__$1 = cljs.core.__destructure_map(map__44088);
var callback = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44088__$1,new cljs.core.Keyword(null,"callback","callback",-705136228));
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44088__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44088__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["error dispatch - status : ",status,"\ntext: ",status_text], 0));

var G__44089 = (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1(status)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_text)].join('')));
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__44089) : callback.call(null,G__44089));
});
translations.tongue_base.file_error = (function translations$tongue_base$file_error(p__44092){
var map__44093 = p__44092;
var map__44093__$1 = cljs.core.__destructure_map(map__44093);
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44093__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44093__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return console.log(["file error: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_text)].join(''));
});
/**
 * Process ops over a dictionary, returning a new dictionary.
 *   If the ops merge in words from a new language, that is merged in to the supported languages set
 */
translations.tongue_base.process_dict_op = (function translations$tongue_base$process_dict_op(var_args){
var G__44097 = arguments.length;
switch (G__44097) {
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

(translations.tongue_base.process_dict_op.cljs$core$IFn$_invoke$arity$3 = (function (dict,p__44100,_){
var vec__44101 = p__44100;
var seq__44102 = cljs.core.seq(vec__44101);
var first__44103 = cljs.core.first(seq__44102);
var seq__44102__$1 = cljs.core.next(seq__44102);
var op = first__44103;
var args = seq__44102__$1;
var G__44106 = op;
var G__44106__$1 = (((G__44106 instanceof cljs.core.Keyword))?G__44106.fqn:null);
switch (G__44106__$1) {
case "upsert":
var vec__44107 = args;
var lang = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44107,(0),null);
var new_words = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44107,(1),null);
var current_lang = new cljs.core.Keyword(null,"lang","lang",-1819677104).cljs$core$IFn$_invoke$arity$1(dict);
var new_lang_dict = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(dict,new cljs.core.Keyword(null,"languages","languages",1471910331),cljs.core.conj,lang),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"translations","translations",-1114228673),lang], null),cljs.core.merge,new_words);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_lang_dict,new cljs.core.Keyword(null,"translator","translator",-1752203115),translations.tongue_base.wrap_translator(current_lang,tongue.core.build_translate(new cljs.core.Keyword(null,"translations","translations",-1114228673).cljs$core$IFn$_invoke$arity$1(new_lang_dict))));

break;
case "switch":
var vec__44118 = args;
var lang = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44118,(0),null);
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44106__$1)].join('')));

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
if(((cljs.core.seq(op_args)) && (cljs.core.every_QMARK_((function (p__44136){
var vec__44137 = p__44136;
var seq__44138 = cljs.core.seq(vec__44137);
var first__44139 = cljs.core.first(seq__44138);
var seq__44138__$1 = cljs.core.next(seq__44138);
var op = first__44139;
var first__44139__$1 = cljs.core.first(seq__44138__$1);
var seq__44138__$2 = cljs.core.next(seq__44138__$1);
var lang = first__44139__$1;
var _ = seq__44138__$2;
var and__4210__auto____$1 = (function (){var fexpr__44140 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"upsert","upsert",1416724984),null,new cljs.core.Keyword(null,"switch","switch",71881310),null], null), null);
return (fexpr__44140.cljs$core$IFn$_invoke$arity$1 ? fexpr__44140.cljs$core$IFn$_invoke$arity$1(op) : fexpr__44140.call(null,op));
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
translations.tongue_base.get_dictionary = (function translations$tongue_base$get_dictionary(url,p__44141){
var map__44142 = p__44141;
var map__44142__$1 = cljs.core.__destructure_map(map__44142);
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44142__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
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
return ((cljs.core.seq(op_args)) && (cljs.core.every_QMARK_((function (p__44144){
var vec__44145 = p__44144;
var seq__44146 = cljs.core.seq(vec__44145);
var first__44147 = cljs.core.first(seq__44146);
var seq__44146__$1 = cljs.core.next(seq__44146);
var op = first__44147;
var first__44147__$1 = cljs.core.first(seq__44146__$1);
var seq__44146__$2 = cljs.core.next(seq__44146__$1);
var lang = first__44147__$1;
var args = seq__44146__$2;
var pred__44151 = cljs.core._EQ_;
var expr__44152 = op;
if(cljs.core.truth_((pred__44151.cljs$core$IFn$_invoke$arity$2 ? pred__44151.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"upsert","upsert",1416724984),expr__44152) : pred__44151.call(null,new cljs.core.Keyword(null,"upsert","upsert",1416724984),expr__44152)))){
return ((cljs.core.seq_QMARK_(args)) && (((cljs.core.map_QMARK_(cljs.core.first(args))) && ((lang instanceof cljs.core.Keyword)))));
} else {
if(cljs.core.truth_((pred__44151.cljs$core$IFn$_invoke$arity$2 ? pred__44151.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"switch","switch",71881310),expr__44152) : pred__44151.call(null,new cljs.core.Keyword(null,"switch","switch",71881310),expr__44152)))){
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
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__44157){
var vec__44158 = p__44157;
var cmd = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44158,(0),null);
var lang = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44158,(1),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44158,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cmd),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(lang),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__44161){
var vec__44162 = p__44161;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44162,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44162,(1),null);
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
translations.tongue_base.get_dictionary("/dictionary.txt",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-error","on-error",1728533530),(function (p1__44166_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(err_chan,p1__44166_SHARP_);
}),new cljs.core.Keyword(null,"handler","handler",-195596612),(function (p1__44167_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(static_chan,p1__44167_SHARP_);
})], null));

var c__35744__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35745__auto__ = (function (){var switch__35549__auto__ = (function (state_44233){
var state_val_44234 = (state_44233[(1)]);
if((state_val_44234 === (1))){
var inst_44173 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_44174 = [static_chan,err_chan];
var inst_44175 = (new cljs.core.PersistentVector(null,2,(5),inst_44173,inst_44174,null));
var state_44233__$1 = state_44233;
return cljs.core.async.ioc_alts_BANG_(state_44233__$1,(2),inst_44175);
} else {
if((state_val_44234 === (2))){
var inst_44177 = (state_44233[(7)]);
var inst_44179 = (state_44233[(8)]);
var inst_44177__$1 = (state_44233[(2)]);
var inst_44178 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44177__$1,(0),null);
var inst_44179__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44177__$1,(1),null);
var inst_44180 = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(inst_44178);
var inst_44181 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(static_chan,inst_44179__$1);
var state_44233__$1 = (function (){var statearr_44235 = state_44233;
(statearr_44235[(7)] = inst_44177__$1);

(statearr_44235[(8)] = inst_44179__$1);

(statearr_44235[(9)] = inst_44180);

return statearr_44235;
})();
if(inst_44181){
var statearr_44236_44307 = state_44233__$1;
(statearr_44236_44307[(1)] = (3));

} else {
var statearr_44237_44309 = state_44233__$1;
(statearr_44237_44309[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44234 === (3))){
var inst_44177 = (state_44233[(7)]);
var inst_44179 = (state_44233[(8)]);
var inst_44180 = (state_44233[(9)]);
var inst_44183 = cljs.core.deref(ref);
var inst_44184 = translations.tongue_base.process_dict_ops(inst_44183,inst_44180);
var inst_44185 = cljs.core.reset_BANG_(ref,inst_44184);
var inst_44186 = [new cljs.core.Keyword(null,"handler","handler",-195596612),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),new cljs.core.Keyword(null,"format","format",-1306924766)];
var inst_44187 = (function (){var vec__44170 = inst_44177;
var seed_dict = inst_44180;
var port = inst_44179;
return (function (p1__44168_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ok_chan,p1__44168_SHARP_);
});
})();
var inst_44188 = (function (){var vec__44170 = inst_44177;
var seed_dict = inst_44180;
var port = inst_44179;
return (function (p1__44169_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(err_chan,p1__44169_SHARP_);
});
})();
var inst_44189 = [inst_44187,inst_44188,new cljs.core.Keyword(null,"transit","transit",359458387)];
var inst_44190 = cljs.core.PersistentHashMap.fromArrays(inst_44186,inst_44189);
var inst_44191 = ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic(dictionary_endpoint,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_44190], 0));
var inst_44223 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_44224 = (function (){var vec__44170 = inst_44177;
var seed_dict = inst_44180;
var port = inst_44179;
var c__35744__auto____$1 = inst_44223;
return (function (){
var f__35745__auto__ = (function (){var switch__35549__auto__ = (function (state_44221){
var state_val_44222 = (state_44221[(1)]);
if((state_val_44222 === (1))){
var inst_44195 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_44196 = [ok_chan,err_chan];
var inst_44197 = (new cljs.core.PersistentVector(null,2,(5),inst_44195,inst_44196,null));
var state_44221__$1 = state_44221;
return cljs.core.async.ioc_alts_BANG_(state_44221__$1,(2),inst_44197);
} else {
if((state_val_44222 === (2))){
var inst_44199 = (state_44221[(2)]);
var inst_44200 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44199,(0),null);
var inst_44201 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44199,(1),null);
var inst_44202 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ok_chan,inst_44201);
var state_44221__$1 = (function (){var statearr_44238 = state_44221;
(statearr_44238[(7)] = inst_44200);

return statearr_44238;
})();
if(inst_44202){
var statearr_44239_44316 = state_44221__$1;
(statearr_44239_44316[(1)] = (3));

} else {
var statearr_44240_44317 = state_44221__$1;
(statearr_44240_44317[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44222 === (3))){
var inst_44204 = (state_44221[(8)]);
var inst_44200 = (state_44221[(7)]);
var inst_44204__$1 = translations.tongue_base.read_json_dict(inst_44200);
var inst_44205 = translations.tongue_base.validate_op_args(inst_44204__$1);
var state_44221__$1 = (function (){var statearr_44241 = state_44221;
(statearr_44241[(8)] = inst_44204__$1);

return statearr_44241;
})();
if(inst_44205){
var statearr_44242_44321 = state_44221__$1;
(statearr_44242_44321[(1)] = (6));

} else {
var statearr_44243_44322 = state_44221__$1;
(statearr_44243_44322[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44222 === (4))){
var inst_44200 = (state_44221[(7)]);
var inst_44215 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_44200], 0));
var inst_44216 = ["error from",cljs.core.str.cljs$core$IFn$_invoke$arity$1(dictionary_endpoint),":",inst_44215].join('');
var inst_44217 = alert(inst_44216);
var state_44221__$1 = state_44221;
var statearr_44244_44326 = state_44221__$1;
(statearr_44244_44326[(2)] = inst_44217);

(statearr_44244_44326[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44222 === (5))){
var inst_44219 = (state_44221[(2)]);
var state_44221__$1 = state_44221;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44221__$1,inst_44219);
} else {
if((state_val_44222 === (6))){
var inst_44204 = (state_44221[(8)]);
var inst_44207 = cljs.core.deref(ref);
var inst_44208 = translations.tongue_base.process_dict_ops(inst_44207,inst_44204);
var inst_44209 = cljs.core.reset_BANG_(ref,inst_44208);
var state_44221__$1 = state_44221;
var statearr_44247_44327 = state_44221__$1;
(statearr_44247_44327[(2)] = inst_44209);

(statearr_44247_44327[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44222 === (7))){
var inst_44211 = alert("Local dictionary parse failure");
var state_44221__$1 = state_44221;
var statearr_44248_44328 = state_44221__$1;
(statearr_44248_44328[(2)] = inst_44211);

(statearr_44248_44328[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44222 === (8))){
var inst_44213 = (state_44221[(2)]);
var state_44221__$1 = state_44221;
var statearr_44249_44329 = state_44221__$1;
(statearr_44249_44329[(2)] = inst_44213);

(statearr_44249_44329[(1)] = (5));


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
var translations$tongue_base$load_all_translations_$_state_machine__35550__auto__ = null;
var translations$tongue_base$load_all_translations_$_state_machine__35550__auto____0 = (function (){
var statearr_44250 = [null,null,null,null,null,null,null,null,null];
(statearr_44250[(0)] = translations$tongue_base$load_all_translations_$_state_machine__35550__auto__);

(statearr_44250[(1)] = (1));

return statearr_44250;
});
var translations$tongue_base$load_all_translations_$_state_machine__35550__auto____1 = (function (state_44221){
while(true){
var ret_value__35551__auto__ = (function (){try{while(true){
var result__35552__auto__ = switch__35549__auto__(state_44221);
if(cljs.core.keyword_identical_QMARK_(result__35552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35552__auto__;
}
break;
}
}catch (e44251){var ex__35553__auto__ = e44251;
var statearr_44252_44332 = state_44221;
(statearr_44252_44332[(2)] = ex__35553__auto__);


if(cljs.core.seq((state_44221[(4)]))){
var statearr_44253_44333 = state_44221;
(statearr_44253_44333[(1)] = cljs.core.first((state_44221[(4)])));

} else {
throw ex__35553__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44335 = state_44221;
state_44221 = G__44335;
continue;
} else {
return ret_value__35551__auto__;
}
break;
}
});
translations$tongue_base$load_all_translations_$_state_machine__35550__auto__ = function(state_44221){
switch(arguments.length){
case 0:
return translations$tongue_base$load_all_translations_$_state_machine__35550__auto____0.call(this);
case 1:
return translations$tongue_base$load_all_translations_$_state_machine__35550__auto____1.call(this,state_44221);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
translations$tongue_base$load_all_translations_$_state_machine__35550__auto__.cljs$core$IFn$_invoke$arity$0 = translations$tongue_base$load_all_translations_$_state_machine__35550__auto____0;
translations$tongue_base$load_all_translations_$_state_machine__35550__auto__.cljs$core$IFn$_invoke$arity$1 = translations$tongue_base$load_all_translations_$_state_machine__35550__auto____1;
return translations$tongue_base$load_all_translations_$_state_machine__35550__auto__;
})()
})();
var state__35746__auto__ = (function (){var statearr_44254 = f__35745__auto__();
(statearr_44254[(6)] = c__35744__auto____$1);

return statearr_44254;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35746__auto__);
});
})();
var inst_44225 = cljs.core.async.impl.dispatch.run(inst_44224);
var state_44233__$1 = (function (){var statearr_44255 = state_44233;
(statearr_44255[(10)] = inst_44191);

(statearr_44255[(11)] = inst_44225);

(statearr_44255[(12)] = inst_44185);

return statearr_44255;
})();
var statearr_44256_44337 = state_44233__$1;
(statearr_44256_44337[(2)] = inst_44223);

(statearr_44256_44337[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44234 === (4))){
var inst_44180 = (state_44233[(9)]);
var inst_44227 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_44180], 0));
var inst_44228 = ["error from dictionary.txt ",inst_44227].join('');
var inst_44229 = alert(inst_44228);
var state_44233__$1 = state_44233;
var statearr_44257_44338 = state_44233__$1;
(statearr_44257_44338[(2)] = inst_44229);

(statearr_44257_44338[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44234 === (5))){
var inst_44231 = (state_44233[(2)]);
var state_44233__$1 = state_44233;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44233__$1,inst_44231);
} else {
return null;
}
}
}
}
}
});
return (function() {
var translations$tongue_base$load_all_translations_$_state_machine__35550__auto__ = null;
var translations$tongue_base$load_all_translations_$_state_machine__35550__auto____0 = (function (){
var statearr_44261 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44261[(0)] = translations$tongue_base$load_all_translations_$_state_machine__35550__auto__);

(statearr_44261[(1)] = (1));

return statearr_44261;
});
var translations$tongue_base$load_all_translations_$_state_machine__35550__auto____1 = (function (state_44233){
while(true){
var ret_value__35551__auto__ = (function (){try{while(true){
var result__35552__auto__ = switch__35549__auto__(state_44233);
if(cljs.core.keyword_identical_QMARK_(result__35552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35552__auto__;
}
break;
}
}catch (e44262){var ex__35553__auto__ = e44262;
var statearr_44263_44341 = state_44233;
(statearr_44263_44341[(2)] = ex__35553__auto__);


if(cljs.core.seq((state_44233[(4)]))){
var statearr_44264_44342 = state_44233;
(statearr_44264_44342[(1)] = cljs.core.first((state_44233[(4)])));

} else {
throw ex__35553__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44346 = state_44233;
state_44233 = G__44346;
continue;
} else {
return ret_value__35551__auto__;
}
break;
}
});
translations$tongue_base$load_all_translations_$_state_machine__35550__auto__ = function(state_44233){
switch(arguments.length){
case 0:
return translations$tongue_base$load_all_translations_$_state_machine__35550__auto____0.call(this);
case 1:
return translations$tongue_base$load_all_translations_$_state_machine__35550__auto____1.call(this,state_44233);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
translations$tongue_base$load_all_translations_$_state_machine__35550__auto__.cljs$core$IFn$_invoke$arity$0 = translations$tongue_base$load_all_translations_$_state_machine__35550__auto____0;
translations$tongue_base$load_all_translations_$_state_machine__35550__auto__.cljs$core$IFn$_invoke$arity$1 = translations$tongue_base$load_all_translations_$_state_machine__35550__auto____1;
return translations$tongue_base$load_all_translations_$_state_machine__35550__auto__;
})()
})();
var state__35746__auto__ = (function (){var statearr_44265 = f__35745__auto__();
(statearr_44265[(6)] = c__35744__auto__);

return statearr_44265;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35746__auto__);
}));

return c__35744__auto__;
});

//# sourceMappingURL=translations.tongue_base.js.map
