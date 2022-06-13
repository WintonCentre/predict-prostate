goog.provide('predict_prostate.components.select');
predict_prostate.components.select.picknmix = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (state){
var props_33793 = cljs.core.first(new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state));
var sp_33794 = $(["#",cljs.core.name(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(props_33793)),".selectpicker"].join(''));
var handler_33795 = new cljs.core.Keyword(null,"on-change","on-change",-732046149).cljs$core$IFn$_invoke$arity$1(props_33793);
sp_33794.on("change",(function (){
var G__33669 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",sp_33794.val()))?null:sp_33794.val());
return (handler_33795.cljs$core$IFn$_invoke$arity$1 ? handler_33795.cljs$core$IFn$_invoke$arity$1(G__33669) : handler_33795.call(null,G__33669));
}));

sp_33794.addClass("col-md-11").selectpicker("setStyle");

sp_33794.selectpicker("show");

return state;
}),new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (state){
var props_33823 = cljs.core.first(new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state));
var sp_33824 = $(["#",cljs.core.name(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(props_33823)),".selectpicker"].join(''));
sp_33824.off("change");

sp_33824.selectpicker("destroy");

return state;
})], null);
predict_prostate.components.select.picker = rum.core.build_defc((function (p__33694,menu){
var map__33699 = p__33694;
var map__33699__$1 = cljs.core.__destructure_map(map__33699);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33699__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33699__$1,new cljs.core.Keyword(null,"value","value",305978217));
var class_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33699__$1,new cljs.core.Keyword(null,"class-name","class-name",945142584));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33699__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var as = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33699__$1,new cljs.core.Keyword(null,"as","as",1148689641));
var props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33699__$1,new cljs.core.Keyword(null,"props","props",453281727));
return React.createElement("div",null,(function (){var attrs33715 = (cljs.core.truth_(key)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.name(key),new cljs.core.Keyword(null,"class-name","class-name",945142584),["selectpicker ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name)].join('')], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,opt){
if(cljs.core.vector_QMARK_(opt)){
var vec__33739 = opt;
var value__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33739,(0),null);
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33739,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),idx,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.name(value__$1)], null),text], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),idx], null),opt], null);
}
}),menu)], null):null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs33715))?sablono.interpreter.attributes(attrs33715):null),((cljs.core.map_QMARK_(attrs33715))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs33715)], null)));
})());
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [predict_prostate.components.select.picknmix,rum.core.static$], null),"picker");

//# sourceMappingURL=predict_prostate.components.select.js.map
