goog.provide('predict_prostate.state.load_config');
predict_prostate.state.load_config.widget_options = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (g){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(g),g], null);
}),predict_prostate.state.config.input_groups));
predict_prostate.state.load_config.default$ = rum.core.build_defc((function() { 
var G__111952__delegate = function (p__111820,extra){
var map__111821 = p__111820;
var map__111821__$1 = (((((!((map__111821 == null))))?(((((map__111821.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__111821.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__111821):map__111821);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__111821__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__111821__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__111821__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__111821__$1,new cljs.core.Keyword(null,"params","params",710516235));
var attrs111819 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Unknown widget ",key,label,type,params,extra], 0));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs111819))?sablono.interpreter.attributes(attrs111819):null),((cljs.core.map_QMARK_(attrs111819))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs111819)], null)));
};
var G__111952 = function (p__111820,var_args){
var extra = null;
if (arguments.length > 1) {
var G__111958__i = 0, G__111958__a = new Array(arguments.length -  1);
while (G__111958__i < G__111958__a.length) {G__111958__a[G__111958__i] = arguments[G__111958__i + 1]; ++G__111958__i;}
  extra = new cljs.core.IndexedSeq(G__111958__a,0,null);
} 
return G__111952__delegate.call(this,p__111820,extra);};
G__111952.cljs$lang$maxFixedArity = 1;
G__111952.cljs$lang$applyTo = (function (arglist__111960){
var p__111820 = cljs.core.first(arglist__111960);
var extra = cljs.core.rest(arglist__111960);
return G__111952__delegate(p__111820,extra);
});
G__111952.cljs$core$IFn$_invoke$arity$variadic = G__111952__delegate;
return G__111952;
})()
,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$], null),"default");
if((typeof predict_prostate !== 'undefined') && (typeof predict_prostate.state !== 'undefined') && (typeof predict_prostate.state.load_config !== 'undefined') && (typeof predict_prostate.state.load_config.make_widget !== 'undefined')){
} else {
predict_prostate.state.load_config.make_widget = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__111837 = cljs.core.get_global_hierarchy;
return (fexpr__111837.cljs$core$IFn$_invoke$arity$0 ? fexpr__111837.cljs$core$IFn$_invoke$arity$0() : fexpr__111837.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("predict-prostate.state.load-config","make-widget"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
predict_prostate.state.load_config.make_widget.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (params){
return (predict_prostate.state.load_config.default$.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.state.load_config.default$.cljs$core$IFn$_invoke$arity$1(params) : predict_prostate.state.load_config.default$.call(null,params));
}));
predict_prostate.state.load_config.make_widget.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"string","string",-1989541586),(function (p__111839){
var map__111840 = p__111839;
var map__111840__$1 = (((((!((map__111840 == null))))?(((((map__111840.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__111840.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__111840):map__111840);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__111840__$1,new cljs.core.Keyword(null,"params","params",710516235));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),"10px",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"16px"], null)], null),params], null);
}));
predict_prostate.state.load_config.rbg_label = (function predict_prostate$state$load_config$rbg_label(label){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(label)," radio button group"].join('');
});
predict_prostate.state.load_config.make_widget.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"information","information",12262679),(function (p__111845){
var map__111846 = p__111845;
var map__111846__$1 = (((((!((map__111846 == null))))?(((((map__111846.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__111846.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__111846):map__111846);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__111846__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__111846__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__111846__$1,new cljs.core.Keyword(null,"params","params",710516235));
var unknowable = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__111846__$1,new cljs.core.Keyword(null,"unknowable","unknowable",1635948924));
var ttt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__111846__$1,new cljs.core.Keyword(null,"ttt","ttt",1858561240));
var G__111851 = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"aria-label","aria-label",455891514),label,new cljs.core.Keyword(null,"aria-described-by","aria-described-by",591270710),"todo",new cljs.core.Keyword(null,"values","values",372645556),cljs.core.second(params),new cljs.core.Keyword(null,"ttt","ttt",1858561240),ttt,new cljs.core.Keyword(null,"ttt-key","ttt-key",-171752593),cljs.core.first(params),new cljs.core.Keyword(null,"unknowable","unknowable",1635948924),unknowable], null);
var G__111852 = predict_prostate.state.run_time.input_cursor(key);
return (predict_prostate.components.button.information.cljs$core$IFn$_invoke$arity$2 ? predict_prostate.components.button.information.cljs$core$IFn$_invoke$arity$2(G__111851,G__111852) : predict_prostate.components.button.information.call(null,G__111851,G__111852));
}));
predict_prostate.state.load_config.make_widget.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"radio-group","radio-group",1791520002),(function (p__111855){
var map__111856 = p__111855;
var map__111856__$1 = (((((!((map__111856 == null))))?(((((map__111856.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__111856.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__111856):map__111856);
var ttt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__111856__$1,new cljs.core.Keyword(null,"ttt","ttt",1858561240));
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__111856__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__111856__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__111856__$1,new cljs.core.Keyword(null,"params","params",710516235));
var unknowable = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__111856__$1,new cljs.core.Keyword(null,"unknowable","unknowable",1635948924));
var G__111861 = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ttt","ttt",1858561240),ttt,new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"aria-label","aria-label",455891514),label,new cljs.core.Keyword(null,"aria-described-by","aria-described-by",591270710),"todo",new cljs.core.Keyword(null,"values","values",372645556),params,new cljs.core.Keyword(null,"unknowable","unknowable",1635948924),unknowable], null);
var G__111862 = predict_prostate.state.run_time.input_cursor(key);
return (predict_prostate.components.button.radio_button_group.cljs$core$IFn$_invoke$arity$2 ? predict_prostate.components.button.radio_button_group.cljs$core$IFn$_invoke$arity$2(G__111861,G__111862) : predict_prostate.components.button.radio_button_group.call(null,G__111861,G__111862));
}));
predict_prostate.state.load_config.make_widget.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"radio-group-vertical","radio-group-vertical",30488436),(function (p__111863){
var map__111864 = p__111863;
var map__111864__$1 = (((((!((map__111864 == null))))?(((((map__111864.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__111864.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__111864):map__111864);
var ttt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__111864__$1,new cljs.core.Keyword(null,"ttt","ttt",1858561240));
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__111864__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__111864__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__111864__$1,new cljs.core.Keyword(null,"params","params",710516235));
var unknowable = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__111864__$1,new cljs.core.Keyword(null,"unknowable","unknowable",1635948924));
var G__111868 = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ttt","ttt",1858561240),ttt,new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"aria-label","aria-label",455891514),label,new cljs.core.Keyword(null,"aria-described-by","aria-described-by",591270710),"todo",new cljs.core.Keyword(null,"values","values",372645556),params,new cljs.core.Keyword(null,"unknowable","unknowable",1635948924),unknowable], null);
var G__111869 = predict_prostate.state.run_time.input_cursor(key);
return (predict_prostate.components.button.radio_button_group_vertical.cljs$core$IFn$_invoke$arity$2 ? predict_prostate.components.button.radio_button_group_vertical.cljs$core$IFn$_invoke$arity$2(G__111868,G__111869) : predict_prostate.components.button.radio_button_group_vertical.call(null,G__111868,G__111869));
}));
predict_prostate.state.load_config.make_widget.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"numeric-input","numeric-input",1592356787),(function (p__111878){
var map__111879 = p__111878;
var map__111879__$1 = (((((!((map__111879 == null))))?(((((map__111879.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__111879.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__111879):map__111879);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__111879__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__111879__$1,new cljs.core.Keyword(null,"params","params",710516235));
var G__111887 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(params,new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.name(key),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"input-ref","input-ref",575432746),predict_prostate.state.run_time.input_cursor(key),new cljs.core.Keyword(null,"onChange","onChange",-312891301),(function (p1__111876_SHARP_){
return pubsub.feeds.publish(predict_prostate.state.run_time.input_change(key),p1__111876_SHARP_);
})], 0));
return (wc_rum_lib.numeric_input.numeric_input.cljs$core$IFn$_invoke$arity$1 ? wc_rum_lib.numeric_input.numeric_input.cljs$core$IFn$_invoke$arity$1(G__111887) : wc_rum_lib.numeric_input.numeric_input.call(null,G__111887));
}));
predict_prostate.state.load_config.make_widget.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"select","select",1147833503),(function (p__111890){
var map__111892 = p__111890;
var map__111892__$1 = (((((!((map__111892 == null))))?(((((map__111892.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__111892.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__111892):map__111892);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__111892__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__111892__$1,new cljs.core.Keyword(null,"params","params",710516235));
var G__111899 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__111889_SHARP_){
return pubsub.feeds.publish(predict_prostate.state.run_time.input_change(key),p1__111889_SHARP_);
})], null);
var G__111900 = new cljs.core.Keyword(null,"menu","menu",352255198).cljs$core$IFn$_invoke$arity$1(params);
return (predict_prostate.components.select.picker.cljs$core$IFn$_invoke$arity$2 ? predict_prostate.components.select.picker.cljs$core$IFn$_invoke$arity$2(G__111899,G__111900) : predict_prostate.components.select.picker.call(null,G__111899,G__111900));
}));
predict_prostate.state.load_config.build_input_widgets_in = (function predict_prostate$state$load_config$build_input_widgets_in(old_wiring,groups){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,g){
var map__111907 = g;
var map__111907__$1 = (((((!((map__111907 == null))))?(((((map__111907.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__111907.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__111907):map__111907);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__111907__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__111907__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var widget_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__111907__$1,new cljs.core.Keyword(null,"widget-type","widget-type",1836256899));
var widget_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__111907__$1,new cljs.core.Keyword(null,"widget-params","widget-params",1462627490));
var unknowable = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__111907__$1,new cljs.core.Keyword(null,"unknowable","unknowable",1635948924));
return cljs.core.assoc_in(cljs.core.assoc_in(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"widget","widget",-853968943),key], null),predict_prostate.state.load_config.make_widget.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"label","label",1718410804),label,new cljs.core.Keyword(null,"type","type",1174270348),widget_type,new cljs.core.Keyword(null,"params","params",710516235),widget_params,new cljs.core.Keyword(null,"unknowable","unknowable",1635948924),unknowable], null))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),key], null),label);
}),old_wiring,groups);
});
/**
 * We're now rendering widgets at use rather than at initialisation.
 */
predict_prostate.state.load_config.render_widget = (function predict_prostate$state$load_config$render_widget(ttt,key){
var options = (predict_prostate.state.load_config.widget_options.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.state.load_config.widget_options.cljs$core$IFn$_invoke$arity$1(key) : predict_prostate.state.load_config.widget_options.call(null,key));
var map__111927 = options;
var map__111927__$1 = (((((!((map__111927 == null))))?(((((map__111927.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__111927.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__111927):map__111927);
var widget_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__111927__$1,new cljs.core.Keyword(null,"widget-type","widget-type",1836256899));
var widget_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__111927__$1,new cljs.core.Keyword(null,"widget-params","widget-params",1462627490));
return predict_prostate.state.load_config.make_widget.cljs$core$IFn$_invoke$arity$1(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(options,new cljs.core.Keyword(null,"type","type",1174270348),widget_type,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"params","params",710516235),widget_params,new cljs.core.Keyword(null,"ttt","ttt",1858561240),ttt], 0)));
});
/**
 * Adds the db refs on key :cursor, and mutation refs on key :change to the set of known inputs.
 */
predict_prostate.state.load_config.add_input_group = (function predict_prostate$state$load_config$add_input_group(ref,old_wiring,groups){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,g){
var map__111935 = g;
var map__111935__$1 = (((((!((map__111935 == null))))?(((((map__111935.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__111935.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__111935):map__111935);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__111935__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var read_only = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__111935__$1,new cljs.core.Keyword(null,"read-only","read-only",-191706886));
var write_only = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__111935__$1,new cljs.core.Keyword(null,"write-only","write-only",292146609));
return cljs.core.assoc_in(cljs.core.assoc_in(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),key], null),(cljs.core.truth_(write_only)?null:rum.core.cursor_in(ref,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"widgets","widgets",-159098978),key], null)))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change","change",-1163046502),key], null),(cljs.core.truth_(read_only)?null:pubsub.feeds.__GT_Topic(key,predict_prostate.state.run_time.event_bus)));
}),old_wiring,groups);
});
if((typeof predict_prostate !== 'undefined') && (typeof predict_prostate.state !== 'undefined') && (typeof predict_prostate.state.load_config !== 'undefined') && (typeof predict_prostate.state.load_config.once_only_guard !== 'undefined')){
} else {
predict_prostate.state.load_config.once_only_guard = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(predict_prostate.state.run_time.rtdb,cljs.core.assoc,new cljs.core.Keyword(null,"input-config","input-config",-1105526956),predict_prostate.state.load_config.add_input_group(predict_prostate.state.run_time.rtdb,cljs.core.PersistentArrayMap.EMPTY,predict_prostate.state.config.input_groups));
}
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(predict_prostate.state.run_time.rtdb,cljs.core.update,new cljs.core.Keyword(null,"input-config","input-config",-1105526956),(function (p1__111942_SHARP_){
return predict_prostate.state.load_config.build_input_widgets_in(p1__111942_SHARP_,predict_prostate.state.config.input_groups);
}));
/**
 * The (maximal) set of input-group keys present in a model. This is derived directly from the model
 *   field in the input configuration.
 */
predict_prostate.state.load_config.live_keys_by_model = (function predict_prostate$state$load_config$live_keys_by_model(model){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__111943_SHARP_){
var fexpr__111948 = new cljs.core.Keyword(null,"models","models",-1985455662).cljs$core$IFn$_invoke$arity$1(p1__111943_SHARP_);
return (fexpr__111948.cljs$core$IFn$_invoke$arity$1 ? fexpr__111948.cljs$core$IFn$_invoke$arity$1(model) : fexpr__111948.call(null,model));
}),predict_prostate.state.config.input_groups)));
});

//# sourceMappingURL=predict_prostate.state.load_config.js.map
