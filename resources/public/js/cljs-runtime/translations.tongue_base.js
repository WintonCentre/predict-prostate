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
var G__32710__delegate = function (k,args){
var k_STAR_ = (((k instanceof cljs.core.Keyword))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null):k);
if(cljs.core.vector_QMARK_(k_STAR_)){
var translation = (function (){var G__32470 = lang;
var G__32471 = cljs.core.first(k_STAR_);
var G__32472 = args;
return (translator.cljs$core$IFn$_invoke$arity$3 ? translator.cljs$core$IFn$_invoke$arity$3(G__32470,G__32471,G__32472) : translator.call(null,G__32470,G__32471,G__32472));
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
var G__32710 = function (k,var_args){
var args = null;
if (arguments.length > 1) {
var G__32711__i = 0, G__32711__a = new Array(arguments.length -  1);
while (G__32711__i < G__32711__a.length) {G__32711__a[G__32711__i] = arguments[G__32711__i + 1]; ++G__32711__i;}
  args = new cljs.core.IndexedSeq(G__32711__a,0,null);
} 
return G__32710__delegate.call(this,k,args);};
G__32710.cljs$lang$maxFixedArity = 1;
G__32710.cljs$lang$applyTo = (function (arglist__32712){
var k = cljs.core.first(arglist__32712);
var args = cljs.core.rest(arglist__32712);
return G__32710__delegate(k,args);
});
G__32710.cljs$core$IFn$_invoke$arity$variadic = G__32710__delegate;
return G__32710;
})()
;
});
translations.tongue_base.error_handler = (function translations$tongue_base$error_handler(p__32475){
var map__32476 = p__32475;
var map__32476__$1 = cljs.core.__destructure_map(map__32476);
var callback = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32476__$1,new cljs.core.Keyword(null,"callback","callback",-705136228));
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32476__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32476__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["error dispatch - status : ",status,"\ntext: ",status_text], 0));

var G__32477 = (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1(status)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_text)].join('')));
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__32477) : callback.call(null,G__32477));
});
translations.tongue_base.file_error = (function translations$tongue_base$file_error(p__32481){
var map__32482 = p__32481;
var map__32482__$1 = cljs.core.__destructure_map(map__32482);
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32482__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32482__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return console.log(["file error: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_text)].join(''));
});
/**
 * Process ops over a dictionary, returning a new dictionary.
 *   If the ops merge in words from a new language, that is merged in to the supported languages set
 */
translations.tongue_base.process_dict_op = (function translations$tongue_base$process_dict_op(var_args){
var G__32484 = arguments.length;
switch (G__32484) {
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

(translations.tongue_base.process_dict_op.cljs$core$IFn$_invoke$arity$3 = (function (dict,p__32487,_){
var vec__32488 = p__32487;
var seq__32489 = cljs.core.seq(vec__32488);
var first__32490 = cljs.core.first(seq__32489);
var seq__32489__$1 = cljs.core.next(seq__32489);
var op = first__32490;
var args = seq__32489__$1;
var G__32491 = op;
var G__32491__$1 = (((G__32491 instanceof cljs.core.Keyword))?G__32491.fqn:null);
switch (G__32491__$1) {
case "upsert":
var vec__32492 = args;
var lang = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32492,(0),null);
var new_words = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32492,(1),null);
var current_lang = new cljs.core.Keyword(null,"lang","lang",-1819677104).cljs$core$IFn$_invoke$arity$1(dict);
var new_lang_dict = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(dict,new cljs.core.Keyword(null,"languages","languages",1471910331),cljs.core.conj,lang),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"translations","translations",-1114228673),lang], null),cljs.core.merge,new_words);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_lang_dict,new cljs.core.Keyword(null,"translator","translator",-1752203115),translations.tongue_base.wrap_translator(current_lang,tongue.core.build_translate(new cljs.core.Keyword(null,"translations","translations",-1114228673).cljs$core$IFn$_invoke$arity$1(new_lang_dict))));

break;
case "switch":
var vec__32495 = args;
var lang = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32495,(0),null);
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32491__$1)].join('')));

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
if(((cljs.core.seq(op_args)) && (cljs.core.every_QMARK_((function (p__32513){
var vec__32514 = p__32513;
var seq__32515 = cljs.core.seq(vec__32514);
var first__32516 = cljs.core.first(seq__32515);
var seq__32515__$1 = cljs.core.next(seq__32515);
var op = first__32516;
var first__32516__$1 = cljs.core.first(seq__32515__$1);
var seq__32515__$2 = cljs.core.next(seq__32515__$1);
var lang = first__32516__$1;
var _ = seq__32515__$2;
var and__4210__auto____$1 = (function (){var fexpr__32517 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"upsert","upsert",1416724984),null,new cljs.core.Keyword(null,"switch","switch",71881310),null], null), null);
return (fexpr__32517.cljs$core$IFn$_invoke$arity$1 ? fexpr__32517.cljs$core$IFn$_invoke$arity$1(op) : fexpr__32517.call(null,op));
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
translations.tongue_base.get_dictionary = (function translations$tongue_base$get_dictionary(url,p__32522){
var map__32523 = p__32522;
var map__32523__$1 = cljs.core.__destructure_map(map__32523);
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32523__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
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
return ((cljs.core.seq(op_args)) && (cljs.core.every_QMARK_((function (p__32524){
var vec__32525 = p__32524;
var seq__32526 = cljs.core.seq(vec__32525);
var first__32527 = cljs.core.first(seq__32526);
var seq__32526__$1 = cljs.core.next(seq__32526);
var op = first__32527;
var first__32527__$1 = cljs.core.first(seq__32526__$1);
var seq__32526__$2 = cljs.core.next(seq__32526__$1);
var lang = first__32527__$1;
var args = seq__32526__$2;
var pred__32528 = cljs.core._EQ_;
var expr__32529 = op;
if(cljs.core.truth_((pred__32528.cljs$core$IFn$_invoke$arity$2 ? pred__32528.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"upsert","upsert",1416724984),expr__32529) : pred__32528.call(null,new cljs.core.Keyword(null,"upsert","upsert",1416724984),expr__32529)))){
return ((cljs.core.seq_QMARK_(args)) && (((cljs.core.map_QMARK_(cljs.core.first(args))) && ((lang instanceof cljs.core.Keyword)))));
} else {
if(cljs.core.truth_((pred__32528.cljs$core$IFn$_invoke$arity$2 ? pred__32528.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"switch","switch",71881310),expr__32529) : pred__32528.call(null,new cljs.core.Keyword(null,"switch","switch",71881310),expr__32529)))){
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
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__32534){
var vec__32535 = p__32534;
var cmd = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32535,(0),null);
var lang = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32535,(1),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32535,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cmd),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(lang),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__32538){
var vec__32539 = p__32538;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32539,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32539,(1),null);
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
translations.tongue_base.get_dictionary("/dictionary.txt",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-error","on-error",1728533530),(function (p1__32542_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(err_chan,p1__32542_SHARP_);
}),new cljs.core.Keyword(null,"handler","handler",-195596612),(function (p1__32543_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(static_chan,p1__32543_SHARP_);
})], null));

var c__30885__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30886__auto__ = (function (){var switch__30824__auto__ = (function (state_32628){
var state_val_32629 = (state_32628[(1)]);
if((state_val_32629 === (1))){
var inst_32554 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32555 = [static_chan,err_chan];
var inst_32556 = (new cljs.core.PersistentVector(null,2,(5),inst_32554,inst_32555,null));
var state_32628__$1 = state_32628;
return cljs.core.async.ioc_alts_BANG_(state_32628__$1,(2),inst_32556);
} else {
if((state_val_32629 === (2))){
var inst_32562 = (state_32628[(7)]);
var inst_32558 = (state_32628[(8)]);
var inst_32558__$1 = (state_32628[(2)]);
var inst_32560 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32558__$1,(0),null);
var inst_32562__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32558__$1,(1),null);
var inst_32563 = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(inst_32560);
var inst_32565 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(static_chan,inst_32562__$1);
var state_32628__$1 = (function (){var statearr_32635 = state_32628;
(statearr_32635[(7)] = inst_32562__$1);

(statearr_32635[(9)] = inst_32563);

(statearr_32635[(8)] = inst_32558__$1);

return statearr_32635;
})();
if(inst_32565){
var statearr_32638_32729 = state_32628__$1;
(statearr_32638_32729[(1)] = (3));

} else {
var statearr_32640_32730 = state_32628__$1;
(statearr_32640_32730[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32629 === (3))){
var inst_32562 = (state_32628[(7)]);
var inst_32563 = (state_32628[(9)]);
var inst_32558 = (state_32628[(8)]);
var inst_32571 = cljs.core.deref(ref);
var inst_32572 = translations.tongue_base.process_dict_ops(inst_32571,inst_32563);
var inst_32573 = cljs.core.reset_BANG_(ref,inst_32572);
var inst_32578 = [new cljs.core.Keyword(null,"handler","handler",-195596612),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),new cljs.core.Keyword(null,"format","format",-1306924766)];
var inst_32580 = (function (){var vec__32551 = inst_32558;
var seed_dict = inst_32563;
var port = inst_32562;
return (function (p1__32544_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ok_chan,p1__32544_SHARP_);
});
})();
var inst_32581 = (function (){var vec__32551 = inst_32558;
var seed_dict = inst_32563;
var port = inst_32562;
return (function (p1__32545_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(err_chan,p1__32545_SHARP_);
});
})();
var inst_32582 = [inst_32580,inst_32581,new cljs.core.Keyword(null,"transit","transit",359458387)];
var inst_32583 = cljs.core.PersistentHashMap.fromArrays(inst_32578,inst_32582);
var inst_32584 = ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic(dictionary_endpoint,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_32583], 0));
var inst_32618 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_32619 = (function (){var vec__32551 = inst_32558;
var seed_dict = inst_32563;
var port = inst_32562;
var c__30885__auto____$1 = inst_32618;
return (function (){
var f__30886__auto__ = (function (){var switch__30824__auto__ = (function (state_32616){
var state_val_32617 = (state_32616[(1)]);
if((state_val_32617 === (1))){
var inst_32588 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32589 = [ok_chan,err_chan];
var inst_32590 = (new cljs.core.PersistentVector(null,2,(5),inst_32588,inst_32589,null));
var state_32616__$1 = state_32616;
return cljs.core.async.ioc_alts_BANG_(state_32616__$1,(2),inst_32590);
} else {
if((state_val_32617 === (2))){
var inst_32592 = (state_32616[(2)]);
var inst_32593 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32592,(0),null);
var inst_32594 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32592,(1),null);
var inst_32595 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ok_chan,inst_32594);
var state_32616__$1 = (function (){var statearr_32646 = state_32616;
(statearr_32646[(7)] = inst_32593);

return statearr_32646;
})();
if(inst_32595){
var statearr_32648_32733 = state_32616__$1;
(statearr_32648_32733[(1)] = (3));

} else {
var statearr_32649_32734 = state_32616__$1;
(statearr_32649_32734[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32617 === (3))){
var inst_32597 = (state_32616[(8)]);
var inst_32593 = (state_32616[(7)]);
var inst_32597__$1 = translations.tongue_base.read_json_dict(inst_32593);
var inst_32598 = translations.tongue_base.validate_op_args(inst_32597__$1);
var state_32616__$1 = (function (){var statearr_32650 = state_32616;
(statearr_32650[(8)] = inst_32597__$1);

return statearr_32650;
})();
if(inst_32598){
var statearr_32651_32735 = state_32616__$1;
(statearr_32651_32735[(1)] = (6));

} else {
var statearr_32652_32736 = state_32616__$1;
(statearr_32652_32736[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32617 === (4))){
var inst_32593 = (state_32616[(7)]);
var inst_32610 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_32593], 0));
var inst_32611 = ["error from",cljs.core.str.cljs$core$IFn$_invoke$arity$1(dictionary_endpoint),":",inst_32610].join('');
var inst_32612 = alert(inst_32611);
var state_32616__$1 = state_32616;
var statearr_32656_32740 = state_32616__$1;
(statearr_32656_32740[(2)] = inst_32612);

(statearr_32656_32740[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32617 === (5))){
var inst_32614 = (state_32616[(2)]);
var state_32616__$1 = state_32616;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32616__$1,inst_32614);
} else {
if((state_val_32617 === (6))){
var inst_32597 = (state_32616[(8)]);
var inst_32600 = cljs.core.deref(ref);
var inst_32601 = translations.tongue_base.process_dict_ops(inst_32600,inst_32597);
var inst_32602 = cljs.core.reset_BANG_(ref,inst_32601);
var state_32616__$1 = state_32616;
var statearr_32678_32743 = state_32616__$1;
(statearr_32678_32743[(2)] = inst_32602);

(statearr_32678_32743[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32617 === (7))){
var inst_32605 = alert("Local dictionary parse failure");
var state_32616__$1 = state_32616;
var statearr_32681_32744 = state_32616__$1;
(statearr_32681_32744[(2)] = inst_32605);

(statearr_32681_32744[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32617 === (8))){
var inst_32607 = (state_32616[(2)]);
var state_32616__$1 = state_32616;
var statearr_32682_32746 = state_32616__$1;
(statearr_32682_32746[(2)] = inst_32607);

(statearr_32682_32746[(1)] = (5));


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
var translations$tongue_base$load_all_translations_$_state_machine__30825__auto__ = null;
var translations$tongue_base$load_all_translations_$_state_machine__30825__auto____0 = (function (){
var statearr_32683 = [null,null,null,null,null,null,null,null,null];
(statearr_32683[(0)] = translations$tongue_base$load_all_translations_$_state_machine__30825__auto__);

(statearr_32683[(1)] = (1));

return statearr_32683;
});
var translations$tongue_base$load_all_translations_$_state_machine__30825__auto____1 = (function (state_32616){
while(true){
var ret_value__30826__auto__ = (function (){try{while(true){
var result__30827__auto__ = switch__30824__auto__(state_32616);
if(cljs.core.keyword_identical_QMARK_(result__30827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30827__auto__;
}
break;
}
}catch (e32684){var ex__30828__auto__ = e32684;
var statearr_32686_32748 = state_32616;
(statearr_32686_32748[(2)] = ex__30828__auto__);


if(cljs.core.seq((state_32616[(4)]))){
var statearr_32688_32749 = state_32616;
(statearr_32688_32749[(1)] = cljs.core.first((state_32616[(4)])));

} else {
throw ex__30828__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32750 = state_32616;
state_32616 = G__32750;
continue;
} else {
return ret_value__30826__auto__;
}
break;
}
});
translations$tongue_base$load_all_translations_$_state_machine__30825__auto__ = function(state_32616){
switch(arguments.length){
case 0:
return translations$tongue_base$load_all_translations_$_state_machine__30825__auto____0.call(this);
case 1:
return translations$tongue_base$load_all_translations_$_state_machine__30825__auto____1.call(this,state_32616);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
translations$tongue_base$load_all_translations_$_state_machine__30825__auto__.cljs$core$IFn$_invoke$arity$0 = translations$tongue_base$load_all_translations_$_state_machine__30825__auto____0;
translations$tongue_base$load_all_translations_$_state_machine__30825__auto__.cljs$core$IFn$_invoke$arity$1 = translations$tongue_base$load_all_translations_$_state_machine__30825__auto____1;
return translations$tongue_base$load_all_translations_$_state_machine__30825__auto__;
})()
})();
var state__30887__auto__ = (function (){var statearr_32692 = f__30886__auto__();
(statearr_32692[(6)] = c__30885__auto____$1);

return statearr_32692;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30887__auto__);
});
})();
var inst_32620 = cljs.core.async.impl.dispatch.run(inst_32619);
var state_32628__$1 = (function (){var statearr_32693 = state_32628;
(statearr_32693[(10)] = inst_32620);

(statearr_32693[(11)] = inst_32584);

(statearr_32693[(12)] = inst_32573);

return statearr_32693;
})();
var statearr_32695_32763 = state_32628__$1;
(statearr_32695_32763[(2)] = inst_32618);

(statearr_32695_32763[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32629 === (4))){
var inst_32563 = (state_32628[(9)]);
var inst_32622 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_32563], 0));
var inst_32623 = ["error from dictionary.txt ",inst_32622].join('');
var inst_32624 = alert(inst_32623);
var state_32628__$1 = state_32628;
var statearr_32697_32764 = state_32628__$1;
(statearr_32697_32764[(2)] = inst_32624);

(statearr_32697_32764[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32629 === (5))){
var inst_32626 = (state_32628[(2)]);
var state_32628__$1 = state_32628;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32628__$1,inst_32626);
} else {
return null;
}
}
}
}
}
});
return (function() {
var translations$tongue_base$load_all_translations_$_state_machine__30825__auto__ = null;
var translations$tongue_base$load_all_translations_$_state_machine__30825__auto____0 = (function (){
var statearr_32700 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32700[(0)] = translations$tongue_base$load_all_translations_$_state_machine__30825__auto__);

(statearr_32700[(1)] = (1));

return statearr_32700;
});
var translations$tongue_base$load_all_translations_$_state_machine__30825__auto____1 = (function (state_32628){
while(true){
var ret_value__30826__auto__ = (function (){try{while(true){
var result__30827__auto__ = switch__30824__auto__(state_32628);
if(cljs.core.keyword_identical_QMARK_(result__30827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30827__auto__;
}
break;
}
}catch (e32702){var ex__30828__auto__ = e32702;
var statearr_32703_32769 = state_32628;
(statearr_32703_32769[(2)] = ex__30828__auto__);


if(cljs.core.seq((state_32628[(4)]))){
var statearr_32705_32770 = state_32628;
(statearr_32705_32770[(1)] = cljs.core.first((state_32628[(4)])));

} else {
throw ex__30828__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32772 = state_32628;
state_32628 = G__32772;
continue;
} else {
return ret_value__30826__auto__;
}
break;
}
});
translations$tongue_base$load_all_translations_$_state_machine__30825__auto__ = function(state_32628){
switch(arguments.length){
case 0:
return translations$tongue_base$load_all_translations_$_state_machine__30825__auto____0.call(this);
case 1:
return translations$tongue_base$load_all_translations_$_state_machine__30825__auto____1.call(this,state_32628);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
translations$tongue_base$load_all_translations_$_state_machine__30825__auto__.cljs$core$IFn$_invoke$arity$0 = translations$tongue_base$load_all_translations_$_state_machine__30825__auto____0;
translations$tongue_base$load_all_translations_$_state_machine__30825__auto__.cljs$core$IFn$_invoke$arity$1 = translations$tongue_base$load_all_translations_$_state_machine__30825__auto____1;
return translations$tongue_base$load_all_translations_$_state_machine__30825__auto__;
})()
})();
var state__30887__auto__ = (function (){var statearr_32708 = f__30886__auto__();
(statearr_32708[(6)] = c__30885__auto__);

return statearr_32708;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30887__auto__);
}));

return c__30885__auto__;
});

//# sourceMappingURL=translations.tongue_base.js.map
