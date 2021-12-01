goog.provide('translations.config');
translations.config.translation_profile = new cljs.core.Keyword(null,"edit","edit",-1641834166);
translations.config.live_dictionary_url = "/live_dictionary.txt";
translations.config.initial_supported_langs = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"fr","fr",1577713888),null,new cljs.core.Keyword(null,"es","es",1831673219),null,new cljs.core.Keyword(null,"pt","pt",556460867),null,new cljs.core.Keyword(null,"tc","tc",1771278567),null,new cljs.core.Keyword(null,"en","en",88457073),null,new cljs.core.Keyword(null,"nl","nl",90952593),null,new cljs.core.Keyword(null,"sc","sc",1148023032),null], null), null);
translations.config.predict_edit = false;
translations.config.initial_lang = new cljs.core.Keyword(null,"en","en",88457073);
translations.config.initial_translations = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"missing","missing",362507769),"**MISSING**",new cljs.core.Keyword("curves","x-axis","curves/x-axis",704064159),"Years after diagnosis",new cljs.core.Keyword("curves","y-axis","curves/y-axis",-1870350726),"Percentage of men surviving"], null)], null);
translations.config.initial_t_state = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"languages","languages",1471910331),translations.config.initial_supported_langs,new cljs.core.Keyword(null,"lang","lang",-1819677104),translations.config.initial_lang,new cljs.core.Keyword(null,"translations","translations",-1114228673),translations.config.initial_translations,new cljs.core.Keyword(null,"translator","translator",-1752203115),translations.tongue_base.wrap_translator(translations.config.initial_lang,tongue.core.build_translate(translations.config.initial_translations))], null);

//# sourceMappingURL=translations.config.js.map
