goog.provide('predict_prostate.components.select');
predict_prostate.components.select.picknmix = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (state){
var props_33098 = cljs.core.first(new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state));
var sp_33099 = $(["#",cljs.core.name(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(props_33098)),".selectpicker"].join(''));
var handler_33100 = new cljs.core.Keyword(null,"on-change","on-change",-732046149).cljs$core$IFn$_invoke$arity$1(props_33098);
sp_33099.on("change",(function (){
var G__33062 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",sp_33099.val()))?null:sp_33099.val());
return (handler_33100.cljs$core$IFn$_invoke$arity$1 ? handler_33100.cljs$core$IFn$_invoke$arity$1(G__33062) : handler_33100.call(null,G__33062));
}));

sp_33099.addClass("col-md-11").selectpicker("setStyle");

sp_33099.selectpicker("show");

return state;
}),new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (state){
var props_33103 = cljs.core.first(new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state));
var sp_33104 = $(["#",cljs.core.name(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(props_33103)),".selectpicker"].join(''));
sp_33104.off("change");

sp_33104.selectpicker("destroy");

return state;
})], null);
predict_prostate.components.select.picker = rum.core.lazy_build(rum.core.build_defc,(function (p__33064,menu){
var map__33065 = p__33064;
var map__33065__$1 = cljs.core.__destructure_map(map__33065);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33065__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33065__$1,new cljs.core.Keyword(null,"value","value",305978217));
var class_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33065__$1,new cljs.core.Keyword(null,"class-name","class-name",945142584));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33065__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var as = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33065__$1,new cljs.core.Keyword(null,"as","as",1148689641));
var props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33065__$1,new cljs.core.Keyword(null,"props","props",453281727));
return daiquiri.core.create_element("div",null,[(function (){var attrs33083 = (cljs.core.truth_(key)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.name(key),new cljs.core.Keyword(null,"class-name","class-name",945142584),["selectpicker ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name)].join('')], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,opt){
if(cljs.core.vector_QMARK_(opt)){
var vec__33095 = opt;
var value__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33095,(0),null);
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33095,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),idx,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.name(value__$1)], null),text], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),idx], null),opt], null);
}
}),menu)], null):null);
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs33083))?daiquiri.interpreter.element_attributes(attrs33083):null),((cljs.core.map_QMARK_(attrs33083))?null:[daiquiri.interpreter.interpret(attrs33083)]));
})()]);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [predict_prostate.components.select.picknmix,rum.core.static$], null),"predict-prostate.components.select/picker");

//# sourceMappingURL=predict_prostate.components.select.js.map
