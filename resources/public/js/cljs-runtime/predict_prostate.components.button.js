goog.provide('predict_prostate.components.button');
predict_prostate.components.button.information = rum.core.build_defc((function (p__50216,group_cursor){
var map__50217 = p__50216;
var map__50217__$1 = (((((!((map__50217 == null))))?(((((map__50217.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50217.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50217):map__50217);
var props = map__50217__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50217__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var values = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50217__$1,new cljs.core.Keyword(null,"values","values",372645556));
return React.createElement("div",null,React.createElement("div",null,(function (){var attrs50219 = values;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs50219))?sablono.interpreter.attributes(attrs50219):null),((cljs.core.map_QMARK_(attrs50219))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs50219)], null)));
})()));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"information");
predict_prostate.components.button.toggle_button = rum.core.build_defc((function (p__50221,label){
var map__50222 = p__50221;
var map__50222__$1 = (((((!((map__50222 == null))))?(((((map__50222.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50222.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50222):map__50222);
var ttt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50222__$1,new cljs.core.Keyword(null,"ttt","ttt",1858561240));
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50222__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50222__$1,new cljs.core.Keyword(null,"value","value",305978217));
var topic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50222__$1,new cljs.core.Keyword(null,"topic","topic",-1960480691));
var disabled = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50222__$1,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),false);
var handler = (function (){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(key,value)){
return pubsub.feeds.publish(topic,key);
} else {
return null;
}
});
return React.createElement("button",({"className": ["btn btn-default btn-sm custom",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,value))?" active":"")].join(''), "disabled": disabled, "type": "button", "key": label, "onKeyDown": (function (p1__50220_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__50220_SHARP_.nativeEvent.code,"Enter")){
return handler();
} else {
return null;
}
}), "onClick": handler}),sablono.interpreter.interpret(label));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$], null),"toggle-button");
predict_prostate.components.button.radio_button_group = rum.core.build_defc((function (p__50224,group_cursor){
var map__50225 = p__50224;
var map__50225__$1 = (((((!((map__50225 == null))))?(((((map__50225.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50225.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50225):map__50225);
var ttt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50225__$1,new cljs.core.Keyword(null,"ttt","ttt",1858561240));
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50225__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var aria_label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50225__$1,new cljs.core.Keyword(null,"aria-label","aria-label",455891514));
var aria_describedby = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50225__$1,new cljs.core.Keyword(null,"aria-describedby","aria-describedby",1826540471));
var values = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50225__$1,new cljs.core.Keyword(null,"values","values",372645556));
var unknowable = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50225__$1,new cljs.core.Keyword(null,"unknowable","unknowable",1635948924));
var vertical = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50225__$1,new cljs.core.Keyword(null,"vertical","vertical",718696748));
var group_value = rum.core.react(group_cursor);
return React.createElement("div",null,React.createElement("div",null,React.createElement("div",({"role": "group", "aria-label": aria_label, "aria-describedby": aria_describedby, "className": ["btn-group",(cljs.core.truth_(vertical)?"-vertical":"")].join('')}),sablono.interpreter.interpret(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__50227){
var vec__50228 = p__50227;
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50228,(0),null);
var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50228,(1),null);
return rum.core.with_key((function (){var G__50231 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"ttt","ttt",1858561240),ttt,new cljs.core.Keyword(null,"key","key",-1516042587),val,new cljs.core.Keyword(null,"value","value",305978217),group_value,new cljs.core.Keyword(null,"topic","topic",-1960480691),predict_prostate.state.run_time.input_change(key),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(group_value,new cljs.core.Keyword(null,"disabled","disabled",-1529784218))], null);
var G__50232 = label;
return (predict_prostate.components.button.toggle_button.cljs$core$IFn$_invoke$arity$2 ? predict_prostate.components.button.toggle_button.cljs$core$IFn$_invoke$arity$2(G__50231,G__50232) : predict_prostate.components.button.toggle_button.call(null,G__50231,G__50232));
})(),label);
}),values)),sablono.interpreter.interpret((cljs.core.truth_(unknowable)?(function (){var G__50233 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"ttt","ttt",1858561240),ttt,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"unknown","unknown",-935977881),new cljs.core.Keyword(null,"value","value",305978217),group_value,new cljs.core.Keyword(null,"topic","topic",-1960480691),predict_prostate.state.run_time.input_change(key),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(group_value,new cljs.core.Keyword(null,"disabled","disabled",-1529784218))], null);
var G__50234 = predict_prostate.state.run_time.unknown;
return (predict_prostate.components.button.toggle_button.cljs$core$IFn$_invoke$arity$2 ? predict_prostate.components.button.toggle_button.cljs$core$IFn$_invoke$arity$2(G__50233,G__50234) : predict_prostate.components.button.toggle_button.call(null,G__50233,G__50234));
})():null)))));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"radio-button-group");
predict_prostate.components.button.horiz_radio_button_group = rum.core.build_defc((function (p__50235,group_cursor){
var map__50236 = p__50235;
var map__50236__$1 = (((((!((map__50236 == null))))?(((((map__50236.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50236.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50236):map__50236);
var ttt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50236__$1,new cljs.core.Keyword(null,"ttt","ttt",1858561240));
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50236__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var aria_label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50236__$1,new cljs.core.Keyword(null,"aria-label","aria-label",455891514));
var aria_describedby = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50236__$1,new cljs.core.Keyword(null,"aria-describedby","aria-describedby",1826540471));
var values = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50236__$1,new cljs.core.Keyword(null,"values","values",372645556));
var unknowable = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50236__$1,new cljs.core.Keyword(null,"unknowable","unknowable",1635948924));
var group_value = rum.core.react(group_cursor);
return React.createElement("div",({"role": "group", "aria-label": aria_label, "aria-describedby": aria_describedby, "style": ({"display": "inline-block"}), "className": "btn-group"}),sablono.interpreter.interpret(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__50238){
var vec__50239 = p__50238;
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50239,(0),null);
var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50239,(1),null);
return rum.core.with_key((function (){var G__50242 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ttt","ttt",1858561240),ttt,new cljs.core.Keyword(null,"key","key",-1516042587),val,new cljs.core.Keyword(null,"value","value",305978217),group_value,new cljs.core.Keyword(null,"topic","topic",-1960480691),predict_prostate.state.run_time.input_change(key)], null);
var G__50243 = label;
return (predict_prostate.components.button.toggle_button.cljs$core$IFn$_invoke$arity$2 ? predict_prostate.components.button.toggle_button.cljs$core$IFn$_invoke$arity$2(G__50242,G__50243) : predict_prostate.components.button.toggle_button.call(null,G__50242,G__50243));
})(),label);
}),values)),sablono.interpreter.interpret((cljs.core.truth_(unknowable)?(function (){var G__50244 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ttt","ttt",1858561240),ttt,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"unknown","unknown",-935977881),new cljs.core.Keyword(null,"value","value",305978217),group_value,new cljs.core.Keyword(null,"topic","topic",-1960480691),predict_prostate.state.run_time.input_change(key)], null);
var G__50245 = predict_prostate.state.run_time.unknown;
return (predict_prostate.components.button.toggle_button.cljs$core$IFn$_invoke$arity$2 ? predict_prostate.components.button.toggle_button.cljs$core$IFn$_invoke$arity$2(G__50244,G__50245) : predict_prostate.components.button.toggle_button.call(null,G__50244,G__50245));
})():null)));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"horiz-radio-button-group");
predict_prostate.components.button.year_picker = rum.core.build_defc((function (ttt){
return sablono.interpreter.interpret((function (){var G__50246 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ttt","ttt",1858561240),ttt,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"result-year","result-year",1413238532),new cljs.core.Keyword(null,"values","values",372645556),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),"10"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(15),"15"], null)], null)], null);
var G__50247 = predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"result-year","result-year",1413238532));
return (predict_prostate.components.button.horiz_radio_button_group.cljs$core$IFn$_invoke$arity$2 ? predict_prostate.components.button.horiz_radio_button_group.cljs$core$IFn$_invoke$arity$2(G__50246,G__50247) : predict_prostate.components.button.horiz_radio_button_group.call(null,G__50246,G__50247));
})());
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"year-picker");
predict_prostate.components.button.radio_button_group_vertical = rum.core.build_defc((function (props,group_cursor){
return sablono.interpreter.interpret((function (){var G__50248 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertical","vertical",718696748),true], null)], 0));
var G__50249 = group_cursor;
return (predict_prostate.components.button.radio_button_group.cljs$core$IFn$_invoke$arity$2 ? predict_prostate.components.button.radio_button_group.cljs$core$IFn$_invoke$arity$2(G__50248,G__50249) : predict_prostate.components.button.radio_button_group.call(null,G__50248,G__50249));
})());
}),null,"radio-button-group-vertical");
predict_prostate.components.button.small_help_button = rum.core.build_defc((function (p__50251){
var map__50252 = p__50251;
var map__50252__$1 = (((((!((map__50252 == null))))?(((((map__50252.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50252.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50252):map__50252);
var props = map__50252__$1;
var help_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50252__$1,new cljs.core.Keyword(null,"help-id","help-id",-1064550845));
var icon_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50252__$1,new cljs.core.Keyword(null,"icon-name","icon-name",152456315));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50252__$1,new cljs.core.Keyword(null,"title","title",636505583));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50252__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
return React.createElement("button",({"role": "button", "tabIndex": "0", "data-content": "Help TBD", "type": "button", "className": "btn btn-info btn-sm", "title": title, "style": ({"cursor": "pointer", "padding": "0px 11px", "fontSize": "20px", "borderRadius": (15)}), "aria-label": ["info on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(text)].join(''), "onKeyDown": (function (p1__50250_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Enter",p1__50250_SHARP_.nativeEvent.code)){
return predict_prostate.state.run_time.help_key_change.pubsub$feeds$TopicFeed$publish$arity$2(null,help_id);
} else {
return null;
}
}), "data-target": "#topModal", "onClick": (function (){
return predict_prostate.state.run_time.help_key_change.pubsub$feeds$TopicFeed$publish$arity$2(null,help_id);
}), "data-toggle": "modal"}),sablono.interpreter.interpret((function (){var G__50254 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"family","family",-1313145692),new cljs.core.Keyword(null,"fa","fa",484981183)], null);
var G__50255 = "info";
return (graphics.simple_icons.icon.cljs$core$IFn$_invoke$arity$2 ? graphics.simple_icons.icon.cljs$core$IFn$_invoke$arity$2(G__50254,G__50255) : graphics.simple_icons.icon.call(null,G__50254,G__50255));
})()),"");
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$], null),"small-help-button");
predict_prostate.components.button.treatment_help_button = rum.core.build_defc((function (p__50257){
var map__50258 = p__50257;
var map__50258__$1 = (((((!((map__50258 == null))))?(((((map__50258.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50258.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50258):map__50258);
var props = map__50258__$1;
var help_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50258__$1,new cljs.core.Keyword(null,"help-id","help-id",-1064550845));
var icon_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50258__$1,new cljs.core.Keyword(null,"icon-name","icon-name",152456315));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50258__$1,new cljs.core.Keyword(null,"title","title",636505583));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50258__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
return React.createElement("button",({"role": "button", "tabIndex": "0", "data-content": "Help TBD", "type": "button", "className": "btn btn-info btn-sm", "title": title, "onKeyDown": (function (p1__50256_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Enter",p1__50256_SHARP_.nativeEvent.code)){
return predict_prostate.state.run_time.help_key_change.pubsub$feeds$TopicFeed$publish$arity$2(null,help_id);
} else {
return null;
}
}), "data-target": "#topModal", "onClick": (function (){
return predict_prostate.state.run_time.help_key_change.pubsub$feeds$TopicFeed$publish$arity$2(null,help_id);
}), "data-toggle": "modal"}),sablono.interpreter.interpret((function (){var G__50260 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"family","family",-1313145692),new cljs.core.Keyword(null,"fa","fa",484981183)], null);
var G__50261 = "warning";
return (graphics.simple_icons.icon.cljs$core$IFn$_invoke$arity$2 ? graphics.simple_icons.icon.cljs$core$IFn$_invoke$arity$2(G__50260,G__50261) : graphics.simple_icons.icon.call(null,G__50260,G__50261));
})())," Potential harms");
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$], null),"treatment-help-button");
predict_prostate.components.button.settings_button = rum.core.build_defc((function (ttt){
var settings = "settings";
return React.createElement("button",({"role": "button", "tabIndex": "0", "data-content": "Settings content", "type": "button", "className": "btn btn-default", "title": "Settings", "onKeyDown": (function (p1__50262_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Enter",p1__50262_SHARP_.nativeEvent.code)){
return predict_prostate.state.run_time.settings_change.pubsub$feeds$TopicFeed$publish$arity$2(null,settings);
} else {
return null;
}
}), "data-target": "#settingsModal", "onClick": (function (){
return predict_prostate.state.run_time.settings_change.pubsub$feeds$TopicFeed$publish$arity$2(null,settings);
}), "data-toggle": "modal"}),sablono.interpreter.interpret((function (){var G__50263 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"family","family",-1313145692),new cljs.core.Keyword(null,"fa","fa",484981183)], null);
var G__50264 = "cog";
return (graphics.simple_icons.icon.cljs$core$IFn$_invoke$arity$2 ? graphics.simple_icons.icon.cljs$core$IFn$_invoke$arity$2(G__50263,G__50264) : graphics.simple_icons.icon.call(null,G__50263,G__50264));
})())," ",sablono.interpreter.interpret((function (){var G__50265 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tools","settings","tools/settings",1046071950),"Settings"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__50265) : ttt.call(null,G__50265));
})()));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$], null),"settings-button");
predict_prostate.components.button.print_button = rum.core.build_defc((function (ttt){
return React.createElement("button",({"role": "button", "tabIndex": "0", "data-content": "Print content", "type": "button", "className": "btn btn-danger btn-lg screen-only pull-right", "title": "Print Results", "style": ({"marginRight": (15)}), "aria-label": "show printable results", "onKeyDown": (function (p1__50266_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Enter",p1__50266_SHARP_.nativeEvent.code)){
return predict_prostate.state.run_time.print_change.pubsub$feeds$TopicFeed$publish$arity$2(null,"print");
} else {
return null;
}
}), "data-target": "#printModal", "onClick": (function (){
return predict_prostate.state.run_time.print_change.pubsub$feeds$TopicFeed$publish$arity$2(null,"print");
}), "data-toggle": "modal"}),sablono.interpreter.interpret((function (){var G__50267 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"family","family",-1313145692),new cljs.core.Keyword(null,"fa","fa",484981183)], null);
var G__50268 = "print";
return (graphics.simple_icons.icon.cljs$core$IFn$_invoke$arity$2 ? graphics.simple_icons.icon.cljs$core$IFn$_invoke$arity$2(G__50267,G__50268) : graphics.simple_icons.icon.call(null,G__50267,G__50268));
})())," ",sablono.interpreter.interpret((function (){var G__50269 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("home","print-button","home/print-button",303249748),"Print"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__50269) : ttt.call(null,G__50269));
})()));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$], null),"print-button");
predict_prostate.components.button.menu_item = (function predict_prostate$components$button$menu_item(item,lang){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return predict_prostate.state.run_time.language_change.pubsub$feeds$TopicFeed$publish$arity$2(null,lang);
})], null),item], null)], null);
});
predict_prostate.components.button.start_button = (function predict_prostate$components$button$start_button(ttt){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-primary.btn-lg","button.btn.btn-primary.btn-lg",613853517),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"aria-label","aria-label",455891514),"go to predict tool",new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return predict_prostate.state.run_time.route_change.pubsub$feeds$TopicFeed$publish$arity$2(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tool","tool",-1298696470),null,null], null));
})], null),(function (){var G__50270 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"family","family",-1313145692),new cljs.core.Keyword(null,"fa","fa",484981183)], null);
var G__50271 = "chevron-right";
return (graphics.simple_icons.icon.cljs$core$IFn$_invoke$arity$2 ? graphics.simple_icons.icon.cljs$core$IFn$_invoke$arity$2(G__50270,G__50271) : graphics.simple_icons.icon.call(null,G__50270,G__50271));
})()," ",(function (){var G__50272 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("home","start-button","home/start-button",-934525868),"Start Predict"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__50272) : ttt.call(null,G__50272));
})()], null);
});
predict_prostate.components.button.start_button_group = (function predict_prostate$components$button$start_button_group(ttt,supported_languages){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".btn-group",".btn-group",-850887226),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),(975),new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),(15),new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),(15),new cljs.core.Keyword(null,"margin-top","margin-top",392161226),(15)], null)], null),predict_prostate.components.button.start_button(ttt),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-default.btn-lg.dropdown-toggle","button.btn.btn-default.btn-lg.dropdown-toggle",539604190),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"data-toggle","data-toggle",436966687),"dropdown",new cljs.core.Keyword(null,"aria-haspopup","aria-haspopup",-1220141412),"true",new cljs.core.Keyword(null,"aria-expanded","aria-expanded",-1360942393),"false"], null),(function (){var G__50273 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("navbar","change-language","navbar/change-language",-1814466745),"Change Language"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__50273) : ttt.call(null,G__50273));
})()," ",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.caret","span.caret",-1405994877)], null)], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.dropdown-menu.lang","ul.dropdown-menu.lang",-1120672871)], null),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (lang){
return predict_prostate.components.button.menu_item((function (){var G__50274 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lang], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__50274) : ttt.call(null,G__50274));
})(),lang);
}),supported_languages))], null);
});

//# sourceMappingURL=predict_prostate.components.button.js.map
