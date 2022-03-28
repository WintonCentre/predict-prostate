goog.provide('predict_prostate.components.select');
predict_prostate.components.select.picknmix = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (state){
var props_45891 = cljs.core.first(new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state));
var sp_45892 = $(["#",cljs.core.name(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(props_45891)),".selectpicker"].join(''));
var handler_45893 = new cljs.core.Keyword(null,"on-change","on-change",-732046149).cljs$core$IFn$_invoke$arity$1(props_45891);
sp_45892.on("change",(function (){
var G__45851 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",sp_45892.val()))?null:sp_45892.val());
return (handler_45893.cljs$core$IFn$_invoke$arity$1 ? handler_45893.cljs$core$IFn$_invoke$arity$1(G__45851) : handler_45893.call(null,G__45851));
}));

sp_45892.addClass("col-md-11").selectpicker("setStyle");

sp_45892.selectpicker("show");

return state;
}),new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (state){
var props_45902 = cljs.core.first(new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state));
var sp_45903 = $(["#",cljs.core.name(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(props_45902)),".selectpicker"].join(''));
sp_45903.off("change");

sp_45903.selectpicker("destroy");

return state;
})], null);
predict_prostate.components.select.picker = rum.core.lazy_build(rum.core.build_defc,(function (p__45863,menu){
var map__45864 = p__45863;
var map__45864__$1 = cljs.core.__destructure_map(map__45864);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45864__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45864__$1,new cljs.core.Keyword(null,"value","value",305978217));
var class_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45864__$1,new cljs.core.Keyword(null,"class-name","class-name",945142584));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45864__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var as = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45864__$1,new cljs.core.Keyword(null,"as","as",1148689641));
var props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45864__$1,new cljs.core.Keyword(null,"props","props",453281727));
return daiquiri.core.create_element("div",null,[(function (){var attrs45875 = (cljs.core.truth_(key)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.name(key),new cljs.core.Keyword(null,"class-name","class-name",945142584),["selectpicker ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name)].join('')], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,opt){
if(cljs.core.vector_QMARK_(opt)){
var vec__45878 = opt;
var value__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45878,(0),null);
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45878,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),idx,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.name(value__$1)], null),text], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),idx], null),opt], null);
}
}),menu)], null):null);
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs45875))?daiquiri.interpreter.element_attributes(attrs45875):null),((cljs.core.map_QMARK_(attrs45875))?null:[daiquiri.interpreter.interpret(attrs45875)]));
})()]);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [predict_prostate.components.select.picknmix,rum.core.static$], null),"predict-prostate.components.select/picker");

//# sourceMappingURL=predict_prostate.components.select.js.map
