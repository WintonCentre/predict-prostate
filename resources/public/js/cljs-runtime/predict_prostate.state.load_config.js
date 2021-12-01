goog.provide('predict_prostate.state.load_config');
predict_prostate.state.load_config.default$ = rum.core.build_defc((function() { 
var G__54748__delegate = function (p__54574,extra){
var map__54575 = p__54574;
var map__54575__$1 = (((((!((map__54575 == null))))?(((((map__54575.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54575.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54575):map__54575);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54575__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54575__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54575__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54575__$1,new cljs.core.Keyword(null,"params","params",710516235));
var attrs54573 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Unknown widget ",key,label,type,params,extra], 0));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs54573))?sablono.interpreter.attributes(attrs54573):null),((cljs.core.map_QMARK_(attrs54573))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs54573)], null)));
};
var G__54748 = function (p__54574,var_args){
var extra = null;
if (arguments.length > 1) {
var G__54756__i = 0, G__54756__a = new Array(arguments.length -  1);
while (G__54756__i < G__54756__a.length) {G__54756__a[G__54756__i] = arguments[G__54756__i + 1]; ++G__54756__i;}
  extra = new cljs.core.IndexedSeq(G__54756__a,0,null);
} 
return G__54748__delegate.call(this,p__54574,extra);};
G__54748.cljs$lang$maxFixedArity = 1;
G__54748.cljs$lang$applyTo = (function (arglist__54759){
var p__54574 = cljs.core.first(arglist__54759);
var extra = cljs.core.rest(arglist__54759);
return G__54748__delegate(p__54574,extra);
});
G__54748.cljs$core$IFn$_invoke$arity$variadic = G__54748__delegate;
return G__54748;
})()
,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$], null),"default");
if((typeof predict_prostate !== 'undefined') && (typeof predict_prostate.state !== 'undefined') && (typeof predict_prostate.state.load_config !== 'undefined') && (typeof predict_prostate.state.load_config.make_widget !== 'undefined')){
} else {
predict_prostate.state.load_config.make_widget = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__54585 = cljs.core.get_global_hierarchy;
return (fexpr__54585.cljs$core$IFn$_invoke$arity$0 ? fexpr__54585.cljs$core$IFn$_invoke$arity$0() : fexpr__54585.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("predict-prostate.state.load-config","make-widget"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
predict_prostate.state.load_config.make_widget.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (params){
return (predict_prostate.state.load_config.default$.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.state.load_config.default$.cljs$core$IFn$_invoke$arity$1(params) : predict_prostate.state.load_config.default$.call(null,params));
}));
predict_prostate.state.load_config.make_widget.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"string","string",-1989541586),(function (p__54587){
var map__54588 = p__54587;
var map__54588__$1 = (((((!((map__54588 == null))))?(((((map__54588.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54588.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54588):map__54588);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54588__$1,new cljs.core.Keyword(null,"params","params",710516235));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),"10px",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"16px"], null)], null),params], null);
}));
predict_prostate.state.load_config.make_widget.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"information","information",12262679),(function (p__54600){
var map__54601 = p__54600;
var map__54601__$1 = (((((!((map__54601 == null))))?(((((map__54601.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54601.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54601):map__54601);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54601__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54601__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54601__$1,new cljs.core.Keyword(null,"params","params",710516235));
var unknowable = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54601__$1,new cljs.core.Keyword(null,"unknowable","unknowable",1635948924));
var ttt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54601__$1,new cljs.core.Keyword(null,"ttt","ttt",1858561240));
var G__54605 = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"aria-label","aria-label",455891514),label,new cljs.core.Keyword(null,"aria-described-by","aria-described-by",591270710),"todo",new cljs.core.Keyword(null,"values","values",372645556),params,new cljs.core.Keyword(null,"ttt","ttt",1858561240),ttt,new cljs.core.Keyword(null,"unknowable","unknowable",1635948924),unknowable], null);
var G__54606 = predict_prostate.state.run_time.input_cursor(key);
return (predict_prostate.components.button.information.cljs$core$IFn$_invoke$arity$2 ? predict_prostate.components.button.information.cljs$core$IFn$_invoke$arity$2(G__54605,G__54606) : predict_prostate.components.button.information.call(null,G__54605,G__54606));
}));
predict_prostate.state.load_config.make_widget.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"radio-group","radio-group",1791520002),(function (p__54610){
var map__54611 = p__54610;
var map__54611__$1 = (((((!((map__54611 == null))))?(((((map__54611.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54611.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54611):map__54611);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54611__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54611__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54611__$1,new cljs.core.Keyword(null,"params","params",710516235));
var unknowable = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54611__$1,new cljs.core.Keyword(null,"unknowable","unknowable",1635948924));
var G__54637 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"aria-label","aria-label",455891514),label,new cljs.core.Keyword(null,"aria-described-by","aria-described-by",591270710),"todo",new cljs.core.Keyword(null,"values","values",372645556),params,new cljs.core.Keyword(null,"unknowable","unknowable",1635948924),unknowable], null);
var G__54638 = predict_prostate.state.run_time.input_cursor(key);
return (predict_prostate.components.button.radio_button_group.cljs$core$IFn$_invoke$arity$2 ? predict_prostate.components.button.radio_button_group.cljs$core$IFn$_invoke$arity$2(G__54637,G__54638) : predict_prostate.components.button.radio_button_group.call(null,G__54637,G__54638));
}));
predict_prostate.state.load_config.make_widget.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"radio-group-vertical","radio-group-vertical",30488436),(function (p__54640){
var map__54641 = p__54640;
var map__54641__$1 = (((((!((map__54641 == null))))?(((((map__54641.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54641.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54641):map__54641);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54641__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54641__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54641__$1,new cljs.core.Keyword(null,"params","params",710516235));
var unknowable = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54641__$1,new cljs.core.Keyword(null,"unknowable","unknowable",1635948924));
var G__54646 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"aria-label","aria-label",455891514),label,new cljs.core.Keyword(null,"aria-described-by","aria-described-by",591270710),"todo",new cljs.core.Keyword(null,"values","values",372645556),params,new cljs.core.Keyword(null,"unknowable","unknowable",1635948924),unknowable], null);
var G__54647 = predict_prostate.state.run_time.input_cursor(key);
return (predict_prostate.components.button.radio_button_group_vertical.cljs$core$IFn$_invoke$arity$2 ? predict_prostate.components.button.radio_button_group_vertical.cljs$core$IFn$_invoke$arity$2(G__54646,G__54647) : predict_prostate.components.button.radio_button_group_vertical.call(null,G__54646,G__54647));
}));
predict_prostate.state.load_config.make_widget.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"numeric-input","numeric-input",1592356787),(function (p__54653){
var map__54654 = p__54653;
var map__54654__$1 = (((((!((map__54654 == null))))?(((((map__54654.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54654.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54654):map__54654);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54654__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54654__$1,new cljs.core.Keyword(null,"params","params",710516235));
var G__54656 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(params,new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.name(key),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"input-ref","input-ref",575432746),predict_prostate.state.run_time.input_cursor(key),new cljs.core.Keyword(null,"onChange","onChange",-312891301),(function (p1__54651_SHARP_){
return pubsub.feeds.publish(predict_prostate.state.run_time.input_change(key),p1__54651_SHARP_);
})], 0));
return (wc_rum_lib.numeric_input.numeric_input.cljs$core$IFn$_invoke$arity$1 ? wc_rum_lib.numeric_input.numeric_input.cljs$core$IFn$_invoke$arity$1(G__54656) : wc_rum_lib.numeric_input.numeric_input.call(null,G__54656));
}));
predict_prostate.state.load_config.make_widget.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"select","select",1147833503),(function (p__54665){
var map__54666 = p__54665;
var map__54666__$1 = (((((!((map__54666 == null))))?(((((map__54666.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54666.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54666):map__54666);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54666__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54666__$1,new cljs.core.Keyword(null,"params","params",710516235));
var G__54668 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__54663_SHARP_){
return pubsub.feeds.publish(predict_prostate.state.run_time.input_change(key),p1__54663_SHARP_);
})], null);
var G__54669 = new cljs.core.Keyword(null,"menu","menu",352255198).cljs$core$IFn$_invoke$arity$1(params);
return (predict_prostate.components.select.picker.cljs$core$IFn$_invoke$arity$2 ? predict_prostate.components.select.picker.cljs$core$IFn$_invoke$arity$2(G__54668,G__54669) : predict_prostate.components.select.picker.call(null,G__54668,G__54669));
}));
predict_prostate.state.load_config.build_input_widgets_in = (function predict_prostate$state$load_config$build_input_widgets_in(old_wiring,groups){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,g){
var map__54670 = g;
var map__54670__$1 = (((((!((map__54670 == null))))?(((((map__54670.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54670.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54670):map__54670);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54670__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54670__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var widget_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54670__$1,new cljs.core.Keyword(null,"widget-type","widget-type",1836256899));
var widget_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54670__$1,new cljs.core.Keyword(null,"widget-params","widget-params",1462627490));
var unknowable = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54670__$1,new cljs.core.Keyword(null,"unknowable","unknowable",1635948924));
return cljs.core.assoc_in(cljs.core.assoc_in(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"widget","widget",-853968943),key], null),predict_prostate.state.load_config.make_widget.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"label","label",1718410804),label,new cljs.core.Keyword(null,"type","type",1174270348),widget_type,new cljs.core.Keyword(null,"params","params",710516235),widget_params,new cljs.core.Keyword(null,"unknowable","unknowable",1635948924),unknowable], null))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),key], null),label);
}),old_wiring,groups);
});
/**
 * Adds the db refs on key :cursor, and mutation refs on key :change to the set of known inputs.
 */
predict_prostate.state.load_config.add_input_group = (function predict_prostate$state$load_config$add_input_group(ref,old_wiring,groups){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,g){
var map__54687 = g;
var map__54687__$1 = (((((!((map__54687 == null))))?(((((map__54687.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54687.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54687):map__54687);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54687__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var read_only = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54687__$1,new cljs.core.Keyword(null,"read-only","read-only",-191706886));
var write_only = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54687__$1,new cljs.core.Keyword(null,"write-only","write-only",292146609));
return cljs.core.assoc_in(cljs.core.assoc_in(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),key], null),(cljs.core.truth_(write_only)?null:rum.core.cursor_in(ref,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"widgets","widgets",-159098978),key], null)))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change","change",-1163046502),key], null),(cljs.core.truth_(read_only)?null:pubsub.feeds.__GT_Topic(key,predict_prostate.state.run_time.event_bus)));
}),old_wiring,groups);
});
if((typeof predict_prostate !== 'undefined') && (typeof predict_prostate.state !== 'undefined') && (typeof predict_prostate.state.load_config !== 'undefined') && (typeof predict_prostate.state.load_config.once_only_guard !== 'undefined')){
} else {
predict_prostate.state.load_config.once_only_guard = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(predict_prostate.state.run_time.rtdb,cljs.core.assoc,new cljs.core.Keyword(null,"input-config","input-config",-1105526956),predict_prostate.state.load_config.add_input_group(predict_prostate.state.run_time.rtdb,cljs.core.PersistentArrayMap.EMPTY,predict_prostate.state.config.input_groups));
}
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(predict_prostate.state.run_time.rtdb,cljs.core.update,new cljs.core.Keyword(null,"input-config","input-config",-1105526956),(function (p1__54706_SHARP_){
return predict_prostate.state.load_config.build_input_widgets_in(p1__54706_SHARP_,predict_prostate.state.config.input_groups);
}));
/**
 * The (maximal) set of input-group keys present in a model. This is derived directly from the model
 *   field in the input configuration.
 */
predict_prostate.state.load_config.live_keys_by_model = (function predict_prostate$state$load_config$live_keys_by_model(model){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__54714_SHARP_){
var fexpr__54729 = new cljs.core.Keyword(null,"models","models",-1985455662).cljs$core$IFn$_invoke$arity$1(p1__54714_SHARP_);
return (fexpr__54729.cljs$core$IFn$_invoke$arity$1 ? fexpr__54729.cljs$core$IFn$_invoke$arity$1(model) : fexpr__54729.call(null,model));
}),predict_prostate.state.config.input_groups)));
});

//# sourceMappingURL=predict_prostate.state.load_config.js.map
