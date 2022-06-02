goog.provide('predict_prostate.components.select');
predict_prostate.components.select.picknmix = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (state){
var props_34081 = cljs.core.first(new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state));
var sp_34082 = $(["#",cljs.core.name(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(props_34081)),".selectpicker"].join(''));
var handler_34083 = new cljs.core.Keyword(null,"on-change","on-change",-732046149).cljs$core$IFn$_invoke$arity$1(props_34081);
sp_34082.on("change",(function (){
var G__34069 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",sp_34082.val()))?null:sp_34082.val());
return (handler_34083.cljs$core$IFn$_invoke$arity$1 ? handler_34083.cljs$core$IFn$_invoke$arity$1(G__34069) : handler_34083.call(null,G__34069));
}));

sp_34082.addClass("col-md-11").selectpicker("setStyle");

sp_34082.selectpicker("show");

return state;
}),new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (state){
var props_34084 = cljs.core.first(new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state));
var sp_34085 = $(["#",cljs.core.name(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(props_34084)),".selectpicker"].join(''));
sp_34085.off("change");

sp_34085.selectpicker("destroy");

return state;
})], null);
predict_prostate.components.select.picker = rum.core.build_defc((function (p__34075,menu){
var map__34076 = p__34075;
var map__34076__$1 = cljs.core.__destructure_map(map__34076);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34076__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34076__$1,new cljs.core.Keyword(null,"value","value",305978217));
var class_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34076__$1,new cljs.core.Keyword(null,"class-name","class-name",945142584));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34076__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var as = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34076__$1,new cljs.core.Keyword(null,"as","as",1148689641));
var props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34076__$1,new cljs.core.Keyword(null,"props","props",453281727));
return React.createElement("div",null,(function (){var attrs34077 = (cljs.core.truth_(key)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.name(key),new cljs.core.Keyword(null,"class-name","class-name",945142584),["selectpicker ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name)].join('')], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,opt){
if(cljs.core.vector_QMARK_(opt)){
var vec__34078 = opt;
var value__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34078,(0),null);
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34078,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),idx,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.name(value__$1)], null),text], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),idx], null),opt], null);
}
}),menu)], null):null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs34077))?sablono.interpreter.attributes(attrs34077):null),((cljs.core.map_QMARK_(attrs34077))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs34077)], null)));
})());
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [predict_prostate.components.select.picknmix,rum.core.static$], null),"picker");

//# sourceMappingURL=predict_prostate.components.select.js.map
