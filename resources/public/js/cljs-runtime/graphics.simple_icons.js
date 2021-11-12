goog.provide('graphics.simple_icons');
graphics.simple_icons.families = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ionicon","ionicon",-1873929832),"icon ",new cljs.core.Keyword(null,"fa","fa",484981183),"fa fa-"], null);
graphics.simple_icons.icon = rum.core.build_defc((function (p__45317,name){
var map__45318 = p__45317;
var map__45318__$1 = (((((!((map__45318 == null))))?(((((map__45318.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45318.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45318):map__45318);
var family = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45318__$1,new cljs.core.Keyword(null,"family","family",-1313145692));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45318__$1,new cljs.core.Keyword(null,"style","style",-496642736));
return React.createElement("i",({"style": sablono.interpreter.attributes(style), "className": sablono.util.join_classes(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(graphics.simple_icons.families,family)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('')], null))}));
}),null,"icon");

//# sourceMappingURL=graphics.simple_icons.js.map
