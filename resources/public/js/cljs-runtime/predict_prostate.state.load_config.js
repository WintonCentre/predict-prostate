goog.provide('predict_prostate.state.load_config');
predict_prostate.state.load_config.default$ = rum.core.build_defc((function() { 
var G__129253__delegate = function (p__129151,extra){
var map__129153 = p__129151;
var map__129153__$1 = (((((!((map__129153 == null))))?(((((map__129153.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__129153.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__129153):map__129153);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__129153__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__129153__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__129153__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__129153__$1,new cljs.core.Keyword(null,"params","params",710516235));
var attrs129150 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Unknown widget ",key,label,type,params,extra], 0));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs129150))?sablono.interpreter.attributes(attrs129150):null),((cljs.core.map_QMARK_(attrs129150))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs129150)], null)));
};
var G__129253 = function (p__129151,var_args){
var extra = null;
if (arguments.length > 1) {
var G__129262__i = 0, G__129262__a = new Array(arguments.length -  1);
while (G__129262__i < G__129262__a.length) {G__129262__a[G__129262__i] = arguments[G__129262__i + 1]; ++G__129262__i;}
  extra = new cljs.core.IndexedSeq(G__129262__a,0,null);
} 
return G__129253__delegate.call(this,p__129151,extra);};
G__129253.cljs$lang$maxFixedArity = 1;
G__129253.cljs$lang$applyTo = (function (arglist__129263){
var p__129151 = cljs.core.first(arglist__129263);
var extra = cljs.core.rest(arglist__129263);
return G__129253__delegate(p__129151,extra);
});
G__129253.cljs$core$IFn$_invoke$arity$variadic = G__129253__delegate;
return G__129253;
})()
,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$], null),"default");
if((typeof predict_prostate !== 'undefined') && (typeof predict_prostate.state !== 'undefined') && (typeof predict_prostate.state.load_config !== 'undefined') && (typeof predict_prostate.state.load_config.make_widget !== 'undefined')){
} else {
predict_prostate.state.load_config.make_widget = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__129159 = cljs.core.get_global_hierarchy;
return (fexpr__129159.cljs$core$IFn$_invoke$arity$0 ? fexpr__129159.cljs$core$IFn$_invoke$arity$0() : fexpr__129159.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("predict-prostate.state.load-config","make-widget"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
predict_prostate.state.load_config.make_widget.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (params){
return (predict_prostate.state.load_config.default$.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.state.load_config.default$.cljs$core$IFn$_invoke$arity$1(params) : predict_prostate.state.load_config.default$.call(null,params));
}));
predict_prostate.state.load_config.make_widget.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"string","string",-1989541586),(function (p__129162){
var map__129163 = p__129162;
var map__129163__$1 = (((((!((map__129163 == null))))?(((((map__129163.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__129163.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__129163):map__129163);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__129163__$1,new cljs.core.Keyword(null,"params","params",710516235));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),"10px",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"16px"], null)], null),params], null);
}));
predict_prostate.state.load_config.make_widget.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"information","information",12262679),(function (p__129169){
var map__129170 = p__129169;
var map__129170__$1 = (((((!((map__129170 == null))))?(((((map__129170.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__129170.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__129170):map__129170);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__129170__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__129170__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__129170__$1,new cljs.core.Keyword(null,"params","params",710516235));
var unknowable = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__129170__$1,new cljs.core.Keyword(null,"unknowable","unknowable",1635948924));
var ttt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__129170__$1,new cljs.core.Keyword(null,"ttt","ttt",1858561240));
var G__129172 = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"aria-label","aria-label",455891514),label,new cljs.core.Keyword(null,"aria-described-by","aria-described-by",591270710),"todo",new cljs.core.Keyword(null,"values","values",372645556),params,new cljs.core.Keyword(null,"ttt","ttt",1858561240),ttt,new cljs.core.Keyword(null,"unknowable","unknowable",1635948924),unknowable], null);
var G__129173 = predict_prostate.state.run_time.input_cursor(key);
return (predict_prostate.components.button.information.cljs$core$IFn$_invoke$arity$2 ? predict_prostate.components.button.information.cljs$core$IFn$_invoke$arity$2(G__129172,G__129173) : predict_prostate.components.button.information.call(null,G__129172,G__129173));
}));
predict_prostate.state.load_config.make_widget.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"radio-group","radio-group",1791520002),(function (p__129175){
var map__129176 = p__129175;
var map__129176__$1 = (((((!((map__129176 == null))))?(((((map__129176.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__129176.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__129176):map__129176);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__129176__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__129176__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__129176__$1,new cljs.core.Keyword(null,"params","params",710516235));
var unknowable = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__129176__$1,new cljs.core.Keyword(null,"unknowable","unknowable",1635948924));
var G__129180 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"aria-label","aria-label",455891514),label,new cljs.core.Keyword(null,"aria-described-by","aria-described-by",591270710),"todo",new cljs.core.Keyword(null,"values","values",372645556),params,new cljs.core.Keyword(null,"unknowable","unknowable",1635948924),unknowable], null);
var G__129181 = predict_prostate.state.run_time.input_cursor(key);
return (predict_prostate.components.button.radio_button_group.cljs$core$IFn$_invoke$arity$2 ? predict_prostate.components.button.radio_button_group.cljs$core$IFn$_invoke$arity$2(G__129180,G__129181) : predict_prostate.components.button.radio_button_group.call(null,G__129180,G__129181));
}));
predict_prostate.state.load_config.make_widget.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"radio-group-vertical","radio-group-vertical",30488436),(function (p__129184){
var map__129185 = p__129184;
var map__129185__$1 = (((((!((map__129185 == null))))?(((((map__129185.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__129185.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__129185):map__129185);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__129185__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__129185__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__129185__$1,new cljs.core.Keyword(null,"params","params",710516235));
var unknowable = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__129185__$1,new cljs.core.Keyword(null,"unknowable","unknowable",1635948924));
var G__129197 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"aria-label","aria-label",455891514),label,new cljs.core.Keyword(null,"aria-described-by","aria-described-by",591270710),"todo",new cljs.core.Keyword(null,"values","values",372645556),params,new cljs.core.Keyword(null,"unknowable","unknowable",1635948924),unknowable], null);
var G__129198 = predict_prostate.state.run_time.input_cursor(key);
return (predict_prostate.components.button.radio_button_group_vertical.cljs$core$IFn$_invoke$arity$2 ? predict_prostate.components.button.radio_button_group_vertical.cljs$core$IFn$_invoke$arity$2(G__129197,G__129198) : predict_prostate.components.button.radio_button_group_vertical.call(null,G__129197,G__129198));
}));
predict_prostate.state.load_config.make_widget.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"numeric-input","numeric-input",1592356787),(function (p__129201){
var map__129202 = p__129201;
var map__129202__$1 = (((((!((map__129202 == null))))?(((((map__129202.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__129202.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__129202):map__129202);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__129202__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__129202__$1,new cljs.core.Keyword(null,"params","params",710516235));
var G__129205 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(params,new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.name(key),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"input-ref","input-ref",575432746),predict_prostate.state.run_time.input_cursor(key),new cljs.core.Keyword(null,"onChange","onChange",-312891301),(function (p1__129200_SHARP_){
return pubsub.feeds.publish(predict_prostate.state.run_time.input_change(key),p1__129200_SHARP_);
})], 0));
return (wc_rum_lib.numeric_input.numeric_input.cljs$core$IFn$_invoke$arity$1 ? wc_rum_lib.numeric_input.numeric_input.cljs$core$IFn$_invoke$arity$1(G__129205) : wc_rum_lib.numeric_input.numeric_input.call(null,G__129205));
}));
predict_prostate.state.load_config.make_widget.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"select","select",1147833503),(function (p__129211){
var map__129212 = p__129211;
var map__129212__$1 = (((((!((map__129212 == null))))?(((((map__129212.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__129212.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__129212):map__129212);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__129212__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__129212__$1,new cljs.core.Keyword(null,"params","params",710516235));
var G__129216 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__129210_SHARP_){
return pubsub.feeds.publish(predict_prostate.state.run_time.input_change(key),p1__129210_SHARP_);
})], null);
var G__129217 = new cljs.core.Keyword(null,"menu","menu",352255198).cljs$core$IFn$_invoke$arity$1(params);
return (predict_prostate.components.select.picker.cljs$core$IFn$_invoke$arity$2 ? predict_prostate.components.select.picker.cljs$core$IFn$_invoke$arity$2(G__129216,G__129217) : predict_prostate.components.select.picker.call(null,G__129216,G__129217));
}));
predict_prostate.state.load_config.build_input_widgets_in = (function predict_prostate$state$load_config$build_input_widgets_in(old_wiring,groups){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,g){
var map__129220 = g;
var map__129220__$1 = (((((!((map__129220 == null))))?(((((map__129220.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__129220.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__129220):map__129220);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__129220__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__129220__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var widget_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__129220__$1,new cljs.core.Keyword(null,"widget-type","widget-type",1836256899));
var widget_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__129220__$1,new cljs.core.Keyword(null,"widget-params","widget-params",1462627490));
var unknowable = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__129220__$1,new cljs.core.Keyword(null,"unknowable","unknowable",1635948924));
return cljs.core.assoc_in(cljs.core.assoc_in(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"widget","widget",-853968943),key], null),predict_prostate.state.load_config.make_widget.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"label","label",1718410804),label,new cljs.core.Keyword(null,"type","type",1174270348),widget_type,new cljs.core.Keyword(null,"params","params",710516235),widget_params,new cljs.core.Keyword(null,"unknowable","unknowable",1635948924),unknowable], null))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),key], null),label);
}),old_wiring,groups);
});
/**
 * Adds the db refs on key :cursor, and mutation refs on key :change to the set of known inputs.
 */
predict_prostate.state.load_config.add_input_group = (function predict_prostate$state$load_config$add_input_group(ref,old_wiring,groups){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,g){
var map__129228 = g;
var map__129228__$1 = (((((!((map__129228 == null))))?(((((map__129228.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__129228.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__129228):map__129228);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__129228__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var read_only = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__129228__$1,new cljs.core.Keyword(null,"read-only","read-only",-191706886));
var write_only = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__129228__$1,new cljs.core.Keyword(null,"write-only","write-only",292146609));
return cljs.core.assoc_in(cljs.core.assoc_in(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),key], null),(cljs.core.truth_(write_only)?null:rum.core.cursor_in(ref,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"widgets","widgets",-159098978),key], null)))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change","change",-1163046502),key], null),(cljs.core.truth_(read_only)?null:pubsub.feeds.__GT_Topic(key,predict_prostate.state.run_time.event_bus)));
}),old_wiring,groups);
});
if((typeof predict_prostate !== 'undefined') && (typeof predict_prostate.state !== 'undefined') && (typeof predict_prostate.state.load_config !== 'undefined') && (typeof predict_prostate.state.load_config.once_only_guard !== 'undefined')){
} else {
predict_prostate.state.load_config.once_only_guard = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(predict_prostate.state.run_time.rtdb,cljs.core.assoc,new cljs.core.Keyword(null,"input-config","input-config",-1105526956),predict_prostate.state.load_config.add_input_group(predict_prostate.state.run_time.rtdb,cljs.core.PersistentArrayMap.EMPTY,predict_prostate.state.config.input_groups));
}
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(predict_prostate.state.run_time.rtdb,cljs.core.update,new cljs.core.Keyword(null,"input-config","input-config",-1105526956),(function (p1__129239_SHARP_){
return predict_prostate.state.load_config.build_input_widgets_in(p1__129239_SHARP_,predict_prostate.state.config.input_groups);
}));
/**
 * The (maximal) set of input-group keys present in a model. This is derived directly from the model
 *   field in the input configuration.
 */
predict_prostate.state.load_config.live_keys_by_model = (function predict_prostate$state$load_config$live_keys_by_model(model){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__129243_SHARP_){
var fexpr__129246 = new cljs.core.Keyword(null,"models","models",-1985455662).cljs$core$IFn$_invoke$arity$1(p1__129243_SHARP_);
return (fexpr__129246.cljs$core$IFn$_invoke$arity$1 ? fexpr__129246.cljs$core$IFn$_invoke$arity$1(model) : fexpr__129246.call(null,model));
}),predict_prostate.state.config.input_groups)));
});

//# sourceMappingURL=predict_prostate.state.load_config.js.map
