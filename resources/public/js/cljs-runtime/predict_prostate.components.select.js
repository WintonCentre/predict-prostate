goog.provide('predict_prostate.components.select');
predict_prostate.components.select.picknmix = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (state){
var props_48206 = cljs.core.first(new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state));
var sp_48207 = $(["#",cljs.core.name(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(props_48206)),".selectpicker"].join(''));
var handler_48208 = new cljs.core.Keyword(null,"on-change","on-change",-732046149).cljs$core$IFn$_invoke$arity$1(props_48206);
sp_48207.on("change",(function (){
var G__48194 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",sp_48207.val()))?null:sp_48207.val());
return (handler_48208.cljs$core$IFn$_invoke$arity$1 ? handler_48208.cljs$core$IFn$_invoke$arity$1(G__48194) : handler_48208.call(null,G__48194));
}));

sp_48207.addClass("col-md-11").selectpicker("setStyle");

sp_48207.selectpicker("show");

return state;
}),new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (state){
var props_48209 = cljs.core.first(new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state));
var sp_48210 = $(["#",cljs.core.name(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(props_48209)),".selectpicker"].join(''));
sp_48210.off("change");

sp_48210.selectpicker("destroy");

return state;
})], null);
predict_prostate.components.select.picker = rum.core.build_defc((function (p__48197,menu){
var map__48198 = p__48197;
var map__48198__$1 = (((((!((map__48198 == null))))?(((((map__48198.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48198.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48198):map__48198);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48198__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48198__$1,new cljs.core.Keyword(null,"value","value",305978217));
var class_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48198__$1,new cljs.core.Keyword(null,"class-name","class-name",945142584));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48198__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var as = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48198__$1,new cljs.core.Keyword(null,"as","as",1148689641));
var props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48198__$1,new cljs.core.Keyword(null,"props","props",453281727));
return React.createElement("div",null,(function (){var attrs48202 = (cljs.core.truth_(key)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.name(key),new cljs.core.Keyword(null,"class-name","class-name",945142584),["selectpicker ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name)].join('')], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,opt){
if(cljs.core.vector_QMARK_(opt)){
var vec__48203 = opt;
var value__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48203,(0),null);
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48203,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),idx,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.name(value__$1)], null),text], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),idx], null),opt], null);
}
}),menu)], null):null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs48202))?sablono.interpreter.attributes(attrs48202):null),((cljs.core.map_QMARK_(attrs48202))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs48202)], null)));
})());
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [predict_prostate.components.select.picknmix,rum.core.static$], null),"picker");

//# sourceMappingURL=predict_prostate.components.select.js.map