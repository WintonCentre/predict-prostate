goog.provide('predict_prostate.state.load_config');
predict_prostate.state.load_config.widget_options = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (g){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(g),g], null);
}),predict_prostate.state.config.input_groups));
predict_prostate.state.load_config.default$ = rum.core.build_defc((function() { 
var G__39228__delegate = function (p__39169,extra){
var map__39170 = p__39169;
var map__39170__$1 = cljs.core.__destructure_map(map__39170);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39170__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39170__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39170__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39170__$1,new cljs.core.Keyword(null,"params","params",710516235));
var attrs39165 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Unknown widget ",key,label,type,params,extra], 0));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs39165))?sablono.interpreter.attributes(attrs39165):null),((cljs.core.map_QMARK_(attrs39165))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs39165)], null)));
};
var G__39228 = function (p__39169,var_args){
var extra = null;
if (arguments.length > 1) {
var G__39229__i = 0, G__39229__a = new Array(arguments.length -  1);
while (G__39229__i < G__39229__a.length) {G__39229__a[G__39229__i] = arguments[G__39229__i + 1]; ++G__39229__i;}
  extra = new cljs.core.IndexedSeq(G__39229__a,0,null);
} 
return G__39228__delegate.call(this,p__39169,extra);};
G__39228.cljs$lang$maxFixedArity = 1;
G__39228.cljs$lang$applyTo = (function (arglist__39230){
var p__39169 = cljs.core.first(arglist__39230);
var extra = cljs.core.rest(arglist__39230);
return G__39228__delegate(p__39169,extra);
});
G__39228.cljs$core$IFn$_invoke$arity$variadic = G__39228__delegate;
return G__39228;
})()
,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$], null),"default");
if((typeof predict_prostate !== 'undefined') && (typeof predict_prostate.state !== 'undefined') && (typeof predict_prostate.state.load_config !== 'undefined') && (typeof predict_prostate.state.load_config.make_widget !== 'undefined')){
} else {
predict_prostate.state.load_config.make_widget = (function (){var method_table__4701__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4702__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4703__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4704__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4705__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__39173 = cljs.core.get_global_hierarchy;
return (fexpr__39173.cljs$core$IFn$_invoke$arity$0 ? fexpr__39173.cljs$core$IFn$_invoke$arity$0() : fexpr__39173.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("predict-prostate.state.load-config","make-widget"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4705__auto__,method_table__4701__auto__,prefer_table__4702__auto__,method_cache__4703__auto__,cached_hierarchy__4704__auto__));
})();
}
predict_prostate.state.load_config.make_widget.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (params){
return (predict_prostate.state.load_config.default$.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.state.load_config.default$.cljs$core$IFn$_invoke$arity$1(params) : predict_prostate.state.load_config.default$.call(null,params));
}));
predict_prostate.state.load_config.make_widget.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"string","string",-1989541586),(function (p__39176){
var map__39177 = p__39176;
var map__39177__$1 = cljs.core.__destructure_map(map__39177);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39177__$1,new cljs.core.Keyword(null,"params","params",710516235));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),"10px",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"16px"], null)], null),params], null);
}));
predict_prostate.state.load_config.rbg_label = (function predict_prostate$state$load_config$rbg_label(label){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(label)," radio button group"].join('');
});
predict_prostate.state.load_config.make_widget.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"information","information",12262679),(function (p__39182){
var map__39183 = p__39182;
var map__39183__$1 = cljs.core.__destructure_map(map__39183);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39183__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39183__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39183__$1,new cljs.core.Keyword(null,"params","params",710516235));
var unknowable = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39183__$1,new cljs.core.Keyword(null,"unknowable","unknowable",1635948924));
var ttt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39183__$1,new cljs.core.Keyword(null,"ttt","ttt",1858561240));
var G__39186 = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"aria-label","aria-label",455891514),label,new cljs.core.Keyword(null,"aria-described-by","aria-described-by",591270710),"todo",new cljs.core.Keyword(null,"values","values",372645556),cljs.core.second(params),new cljs.core.Keyword(null,"ttt","ttt",1858561240),ttt,new cljs.core.Keyword(null,"ttt-key","ttt-key",-171752593),cljs.core.first(params),new cljs.core.Keyword(null,"unknowable","unknowable",1635948924),unknowable], null);
var G__39187 = predict_prostate.state.run_time.input_cursor(key);
return (predict_prostate.components.button.information.cljs$core$IFn$_invoke$arity$2 ? predict_prostate.components.button.information.cljs$core$IFn$_invoke$arity$2(G__39186,G__39187) : predict_prostate.components.button.information.call(null,G__39186,G__39187));
}));
predict_prostate.state.load_config.make_widget.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"radio-group","radio-group",1791520002),(function (p__39190){
var map__39191 = p__39190;
var map__39191__$1 = cljs.core.__destructure_map(map__39191);
var ttt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39191__$1,new cljs.core.Keyword(null,"ttt","ttt",1858561240));
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39191__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39191__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39191__$1,new cljs.core.Keyword(null,"params","params",710516235));
var unknowable = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39191__$1,new cljs.core.Keyword(null,"unknowable","unknowable",1635948924));
var G__39193 = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ttt","ttt",1858561240),ttt,new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"aria-label","aria-label",455891514),predict_prostate.state.load_config.rbg_label(label),new cljs.core.Keyword(null,"aria-described-by","aria-described-by",591270710),"todo",new cljs.core.Keyword(null,"values","values",372645556),params,new cljs.core.Keyword(null,"unknowable","unknowable",1635948924),unknowable], null);
var G__39194 = predict_prostate.state.run_time.input_cursor(key);
return (predict_prostate.components.button.radio_button_group.cljs$core$IFn$_invoke$arity$2 ? predict_prostate.components.button.radio_button_group.cljs$core$IFn$_invoke$arity$2(G__39193,G__39194) : predict_prostate.components.button.radio_button_group.call(null,G__39193,G__39194));
}));
predict_prostate.state.load_config.make_widget.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"radio-group-vertical","radio-group-vertical",30488436),(function (p__39196){
var map__39197 = p__39196;
var map__39197__$1 = cljs.core.__destructure_map(map__39197);
var ttt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39197__$1,new cljs.core.Keyword(null,"ttt","ttt",1858561240));
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39197__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39197__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39197__$1,new cljs.core.Keyword(null,"params","params",710516235));
var unknowable = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39197__$1,new cljs.core.Keyword(null,"unknowable","unknowable",1635948924));
var G__39199 = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ttt","ttt",1858561240),ttt,new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.name(key),new cljs.core.Keyword(null,"aria-label","aria-label",455891514),predict_prostate.state.load_config.rbg_label(label),new cljs.core.Keyword(null,"aria-described-by","aria-described-by",591270710),"todo",new cljs.core.Keyword(null,"values","values",372645556),params,new cljs.core.Keyword(null,"unknowable","unknowable",1635948924),unknowable], null);
var G__39200 = predict_prostate.state.run_time.input_cursor(key);
return (predict_prostate.components.button.radio_button_group_vertical.cljs$core$IFn$_invoke$arity$2 ? predict_prostate.components.button.radio_button_group_vertical.cljs$core$IFn$_invoke$arity$2(G__39199,G__39200) : predict_prostate.components.button.radio_button_group_vertical.call(null,G__39199,G__39200));
}));
predict_prostate.state.load_config.make_widget.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"numeric-input","numeric-input",1592356787),(function (p__39203){
var map__39204 = p__39203;
var map__39204__$1 = cljs.core.__destructure_map(map__39204);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39204__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39204__$1,new cljs.core.Keyword(null,"params","params",710516235));
var G__39205 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(params,new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.name(key),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"input-ref","input-ref",575432746),predict_prostate.state.run_time.input_cursor(key),new cljs.core.Keyword(null,"onChange","onChange",-312891301),(function (p1__39202_SHARP_){
return pubsub.feeds.publish(predict_prostate.state.run_time.input_change(key),p1__39202_SHARP_);
})], 0));
return (wc_rum_lib.numeric_input.numeric_input.cljs$core$IFn$_invoke$arity$1 ? wc_rum_lib.numeric_input.numeric_input.cljs$core$IFn$_invoke$arity$1(G__39205) : wc_rum_lib.numeric_input.numeric_input.call(null,G__39205));
}));
predict_prostate.state.load_config.make_widget.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"select","select",1147833503),(function (p__39208){
var map__39210 = p__39208;
var map__39210__$1 = cljs.core.__destructure_map(map__39210);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39210__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39210__$1,new cljs.core.Keyword(null,"params","params",710516235));
var G__39212 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__39207_SHARP_){
return pubsub.feeds.publish(predict_prostate.state.run_time.input_change(key),p1__39207_SHARP_);
})], null);
var G__39213 = new cljs.core.Keyword(null,"menu","menu",352255198).cljs$core$IFn$_invoke$arity$1(params);
return (predict_prostate.components.select.picker.cljs$core$IFn$_invoke$arity$2 ? predict_prostate.components.select.picker.cljs$core$IFn$_invoke$arity$2(G__39212,G__39213) : predict_prostate.components.select.picker.call(null,G__39212,G__39213));
}));
predict_prostate.state.load_config.build_input_widgets_in = (function predict_prostate$state$load_config$build_input_widgets_in(old_wiring,groups){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,g){
var map__39215 = g;
var map__39215__$1 = cljs.core.__destructure_map(map__39215);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39215__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39215__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var widget_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39215__$1,new cljs.core.Keyword(null,"widget-type","widget-type",1836256899));
var widget_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39215__$1,new cljs.core.Keyword(null,"widget-params","widget-params",1462627490));
var unknowable = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39215__$1,new cljs.core.Keyword(null,"unknowable","unknowable",1635948924));
return cljs.core.assoc_in(cljs.core.assoc_in(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"widget","widget",-853968943),key], null),predict_prostate.state.load_config.make_widget.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"label","label",1718410804),label,new cljs.core.Keyword(null,"type","type",1174270348),widget_type,new cljs.core.Keyword(null,"params","params",710516235),widget_params,new cljs.core.Keyword(null,"unknowable","unknowable",1635948924),unknowable], null))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),key], null),label);
}),old_wiring,groups);
});
/**
 * We're now rendering widgets at use rather than at initialisation.
 */
predict_prostate.state.load_config.render_widget = (function predict_prostate$state$load_config$render_widget(ttt,key){
var options = (predict_prostate.state.load_config.widget_options.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.state.load_config.widget_options.cljs$core$IFn$_invoke$arity$1(key) : predict_prostate.state.load_config.widget_options.call(null,key));
var map__39216 = options;
var map__39216__$1 = cljs.core.__destructure_map(map__39216);
var widget_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39216__$1,new cljs.core.Keyword(null,"widget-type","widget-type",1836256899));
var widget_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39216__$1,new cljs.core.Keyword(null,"widget-params","widget-params",1462627490));
return predict_prostate.state.load_config.make_widget.cljs$core$IFn$_invoke$arity$1(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(options,new cljs.core.Keyword(null,"type","type",1174270348),widget_type,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"params","params",710516235),widget_params,new cljs.core.Keyword(null,"ttt","ttt",1858561240),ttt], 0)));
});
/**
 * Adds the db refs on key :cursor, and mutation refs on key :change to the set of known inputs.
 */
predict_prostate.state.load_config.add_input_group = (function predict_prostate$state$load_config$add_input_group(ref,old_wiring,groups){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,g){
var map__39219 = g;
var map__39219__$1 = cljs.core.__destructure_map(map__39219);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39219__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var read_only = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39219__$1,new cljs.core.Keyword(null,"read-only","read-only",-191706886));
var write_only = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39219__$1,new cljs.core.Keyword(null,"write-only","write-only",292146609));
return cljs.core.assoc_in(cljs.core.assoc_in(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),key], null),(cljs.core.truth_(write_only)?null:rum.core.cursor_in(ref,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"widgets","widgets",-159098978),key], null)))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change","change",-1163046502),key], null),(cljs.core.truth_(read_only)?null:pubsub.feeds.__GT_Topic(key,predict_prostate.state.run_time.event_bus)));
}),old_wiring,groups);
});
if((typeof predict_prostate !== 'undefined') && (typeof predict_prostate.state !== 'undefined') && (typeof predict_prostate.state.load_config !== 'undefined') && (typeof predict_prostate.state.load_config.once_only_guard !== 'undefined')){
} else {
predict_prostate.state.load_config.once_only_guard = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(predict_prostate.state.run_time.rtdb,cljs.core.assoc,new cljs.core.Keyword(null,"input-config","input-config",-1105526956),predict_prostate.state.load_config.add_input_group(predict_prostate.state.run_time.rtdb,cljs.core.PersistentArrayMap.EMPTY,predict_prostate.state.config.input_groups));
}
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(predict_prostate.state.run_time.rtdb,cljs.core.update,new cljs.core.Keyword(null,"input-config","input-config",-1105526956),(function (p1__39222_SHARP_){
return predict_prostate.state.load_config.build_input_widgets_in(p1__39222_SHARP_,predict_prostate.state.config.input_groups);
}));
/**
 * The (maximal) set of input-group keys present in a model. This is derived directly from the model
 *   field in the input configuration.
 */
predict_prostate.state.load_config.live_keys_by_model = (function predict_prostate$state$load_config$live_keys_by_model(model){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__39223_SHARP_){
var fexpr__39224 = new cljs.core.Keyword(null,"models","models",-1985455662).cljs$core$IFn$_invoke$arity$1(p1__39223_SHARP_);
return (fexpr__39224.cljs$core$IFn$_invoke$arity$1 ? fexpr__39224.cljs$core$IFn$_invoke$arity$1(model) : fexpr__39224.call(null,model));
}),predict_prostate.state.config.input_groups)));
});

//# sourceMappingURL=predict_prostate.state.load_config.js.map
