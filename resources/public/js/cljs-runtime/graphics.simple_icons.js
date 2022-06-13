goog.provide('graphics.simple_icons');
graphics.simple_icons.families = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ionicon","ionicon",-1873929832),"icon ",new cljs.core.Keyword(null,"fa","fa",484981183),"fa fa-"], null);
graphics.simple_icons.icon = rum.core.build_defc((function (p__33505,name){
var map__33506 = p__33505;
var map__33506__$1 = cljs.core.__destructure_map(map__33506);
var family = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33506__$1,new cljs.core.Keyword(null,"family","family",-1313145692));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33506__$1,new cljs.core.Keyword(null,"style","style",-496642736));
return React.createElement("i",({"style": sablono.interpreter.attributes(style), "className": sablono.util.join_classes(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(graphics.simple_icons.families,family)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('')], null))}));
}),null,"icon");

//# sourceMappingURL=graphics.simple_icons.js.map
