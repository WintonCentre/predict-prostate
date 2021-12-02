goog.provide('predict_prostate.components.button');
predict_prostate.components.button.information = rum.core.build_defc((function (p__111699,_){
var map__111701 = p__111699;
var map__111701__$1 = (((((!((map__111701 == null))))?(((((map__111701.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__111701.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__111701):map__111701);
var values = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__111701__$1,new cljs.core.Keyword(null,"values","values",372645556));
var ttt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__111701__$1,new cljs.core.Keyword(null,"ttt","ttt",1858561240));
var ttt_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__111701__$1,new cljs.core.Keyword(null,"ttt-key","ttt-key",-171752593));
return React.createElement("div",null,React.createElement("div",null,(function (){var attrs111706 = (function (){var G__111708 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ttt_key,values], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__111708) : ttt.call(null,G__111708));
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs111706))?sablono.interpreter.attributes(attrs111706):null),((cljs.core.map_QMARK_(attrs111706))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs111706)], null)));
})()));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"information");
predict_prostate.components.button.button_label = (function predict_prostate$components$button$button_label(t,k,label){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(["button/",cljs.core.name(new cljs.core.Keyword(null,"topic","topic",-1960480691).cljs$core$IFn$_invoke$arity$1(t)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1((((k instanceof cljs.core.Keyword))?cljs.core.name(k):((typeof k === 'number')?["n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join(''):k)))].join('')),label], null);
});
predict_prostate.components.button.toggle_button = rum.core.build_defc((function (p__111714,label){
var map__111715 = p__111714;
var map__111715__$1 = (((((!((map__111715 == null))))?(((((map__111715.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__111715.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__111715):map__111715);
var ttt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__111715__$1,new cljs.core.Keyword(null,"ttt","ttt",1858561240));
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__111715__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__111715__$1,new cljs.core.Keyword(null,"value","value",305978217));
var topic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__111715__$1,new cljs.core.Keyword(null,"topic","topic",-1960480691));
var disabled = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__111715__$1,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),false);
var handler = (function (){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(key,value)){
return pubsub.feeds.publish(topic,key);
} else {
return null;
}
});
return React.createElement("button",({"className": ["btn btn-default btn-sm custom",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,value))?" active":"")].join(''), "disabled": disabled, "type": "button", "key": label, "onKeyDown": (function (p1__111713_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__111713_SHARP_.nativeEvent.code,"Enter")){
return handler();
} else {
return null;
}
}), "onClick": handler}),sablono.interpreter.interpret(label));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$], null),"toggle-button");
predict_prostate.components.button.radio_button_group = rum.core.build_defc((function (p__111720,group_cursor){
var map__111721 = p__111720;
var map__111721__$1 = (((((!((map__111721 == null))))?(((((map__111721.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__111721.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__111721):map__111721);
var ttt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__111721__$1,new cljs.core.Keyword(null,"ttt","ttt",1858561240));
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__111721__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var aria_label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__111721__$1,new cljs.core.Keyword(null,"aria-label","aria-label",455891514));
var aria_describedby = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__111721__$1,new cljs.core.Keyword(null,"aria-describedby","aria-describedby",1826540471));
var values = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__111721__$1,new cljs.core.Keyword(null,"values","values",372645556));
var unknowable = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__111721__$1,new cljs.core.Keyword(null,"unknowable","unknowable",1635948924));
var vertical = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__111721__$1,new cljs.core.Keyword(null,"vertical","vertical",718696748));
var group_value = rum.core.react(group_cursor);
return React.createElement("div",null,React.createElement("div",null,React.createElement("div",({"role": "group", "aria-label": aria_label, "aria-describedby": aria_describedby, "className": ["btn-group",(cljs.core.truth_(vertical)?"-vertical":"")].join('')}),sablono.interpreter.interpret(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__111731){
var vec__111732 = p__111731;
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__111732,(0),null);
var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__111732,(1),null);
return rum.core.with_key((function (){var G__111735 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"ttt","ttt",1858561240),ttt,new cljs.core.Keyword(null,"key","key",-1516042587),val,new cljs.core.Keyword(null,"value","value",305978217),group_value,new cljs.core.Keyword(null,"topic","topic",-1960480691),predict_prostate.state.run_time.input_change(key),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(group_value,new cljs.core.Keyword(null,"disabled","disabled",-1529784218))], null);
var G__111736 = label;
return (predict_prostate.components.button.toggle_button.cljs$core$IFn$_invoke$arity$2 ? predict_prostate.components.button.toggle_button.cljs$core$IFn$_invoke$arity$2(G__111735,G__111736) : predict_prostate.components.button.toggle_button.call(null,G__111735,G__111736));
})(),label);
}),values)),sablono.interpreter.interpret((cljs.core.truth_(unknowable)?(function (){var G__111738 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"ttt","ttt",1858561240),ttt,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"unknown","unknown",-935977881),new cljs.core.Keyword(null,"value","value",305978217),group_value,new cljs.core.Keyword(null,"topic","topic",-1960480691),predict_prostate.state.run_time.input_change(key),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(group_value,new cljs.core.Keyword(null,"disabled","disabled",-1529784218))], null);
var G__111739 = predict_prostate.state.run_time.unknown;
return (predict_prostate.components.button.toggle_button.cljs$core$IFn$_invoke$arity$2 ? predict_prostate.components.button.toggle_button.cljs$core$IFn$_invoke$arity$2(G__111738,G__111739) : predict_prostate.components.button.toggle_button.call(null,G__111738,G__111739));
})():null)))));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"radio-button-group");
predict_prostate.components.button.horiz_radio_button_group = rum.core.build_defc((function (p__111742,group_cursor){
var map__111743 = p__111742;
var map__111743__$1 = (((((!((map__111743 == null))))?(((((map__111743.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__111743.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__111743):map__111743);
var ttt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__111743__$1,new cljs.core.Keyword(null,"ttt","ttt",1858561240));
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__111743__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var aria_label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__111743__$1,new cljs.core.Keyword(null,"aria-label","aria-label",455891514));
var aria_describedby = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__111743__$1,new cljs.core.Keyword(null,"aria-describedby","aria-describedby",1826540471));
var values = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__111743__$1,new cljs.core.Keyword(null,"values","values",372645556));
var unknowable = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__111743__$1,new cljs.core.Keyword(null,"unknowable","unknowable",1635948924));
var group_value = rum.core.react(group_cursor);
return React.createElement("div",({"role": "group", "aria-label": aria_label, "aria-describedby": aria_describedby, "style": ({"display": "inline-block"}), "className": "btn-group"}),sablono.interpreter.interpret(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__111753){
var vec__111754 = p__111753;
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__111754,(0),null);
var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__111754,(1),null);
return rum.core.with_key((function (){var G__111757 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ttt","ttt",1858561240),ttt,new cljs.core.Keyword(null,"key","key",-1516042587),val,new cljs.core.Keyword(null,"value","value",305978217),group_value,new cljs.core.Keyword(null,"topic","topic",-1960480691),predict_prostate.state.run_time.input_change(key)], null);
var G__111758 = label;
return (predict_prostate.components.button.toggle_button.cljs$core$IFn$_invoke$arity$2 ? predict_prostate.components.button.toggle_button.cljs$core$IFn$_invoke$arity$2(G__111757,G__111758) : predict_prostate.components.button.toggle_button.call(null,G__111757,G__111758));
})(),label);
}),values)),sablono.interpreter.interpret((cljs.core.truth_(unknowable)?(function (){var G__111761 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ttt","ttt",1858561240),ttt,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"unknown","unknown",-935977881),new cljs.core.Keyword(null,"value","value",305978217),group_value,new cljs.core.Keyword(null,"topic","topic",-1960480691),predict_prostate.state.run_time.input_change(key)], null);
var G__111762 = predict_prostate.state.run_time.unknown;
return (predict_prostate.components.button.toggle_button.cljs$core$IFn$_invoke$arity$2 ? predict_prostate.components.button.toggle_button.cljs$core$IFn$_invoke$arity$2(G__111761,G__111762) : predict_prostate.components.button.toggle_button.call(null,G__111761,G__111762));
})():null)));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"horiz-radio-button-group");
predict_prostate.components.button.year_picker = rum.core.build_defc((function (ttt){
return sablono.interpreter.interpret((function (){var G__111765 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ttt","ttt",1858561240),ttt,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"result-year","result-year",1413238532),new cljs.core.Keyword(null,"values","values",372645556),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),"10"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(15),"15"], null)], null)], null);
var G__111766 = predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"result-year","result-year",1413238532));
return (predict_prostate.components.button.horiz_radio_button_group.cljs$core$IFn$_invoke$arity$2 ? predict_prostate.components.button.horiz_radio_button_group.cljs$core$IFn$_invoke$arity$2(G__111765,G__111766) : predict_prostate.components.button.horiz_radio_button_group.call(null,G__111765,G__111766));
})());
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"year-picker");
predict_prostate.components.button.radio_button_group_vertical = rum.core.build_defc((function (props,group_cursor){
return sablono.interpreter.interpret((function (){var G__111768 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertical","vertical",718696748),true], null)], 0));
var G__111769 = group_cursor;
return (predict_prostate.components.button.radio_button_group.cljs$core$IFn$_invoke$arity$2 ? predict_prostate.components.button.radio_button_group.cljs$core$IFn$_invoke$arity$2(G__111768,G__111769) : predict_prostate.components.button.radio_button_group.call(null,G__111768,G__111769));
})());
}),null,"radio-button-group-vertical");
predict_prostate.components.button.small_help_button = rum.core.build_defc((function (p__111774){
var map__111775 = p__111774;
var map__111775__$1 = (((((!((map__111775 == null))))?(((((map__111775.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__111775.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__111775):map__111775);
var props = map__111775__$1;
var help_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__111775__$1,new cljs.core.Keyword(null,"help-id","help-id",-1064550845));
var icon_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__111775__$1,new cljs.core.Keyword(null,"icon-name","icon-name",152456315));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__111775__$1,new cljs.core.Keyword(null,"title","title",636505583));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__111775__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
return React.createElement("button",({"role": "button", "tabIndex": "0", "data-content": "Help TBD", "type": "button", "className": "btn btn-info btn-sm", "title": title, "style": ({"cursor": "pointer", "padding": "0px 11px", "fontSize": "20px", "borderRadius": (15)}), "aria-label": ["info on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(text)].join(''), "onKeyDown": (function (p1__111773_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Enter",p1__111773_SHARP_.nativeEvent.code)){
return predict_prostate.state.run_time.help_key_change.pubsub$feeds$TopicFeed$publish$arity$2(null,help_id);
} else {
return null;
}
}), "data-target": "#topModal", "onClick": (function (){
return predict_prostate.state.run_time.help_key_change.pubsub$feeds$TopicFeed$publish$arity$2(null,help_id);
}), "data-toggle": "modal"}),sablono.interpreter.interpret((function (){var G__111780 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"family","family",-1313145692),new cljs.core.Keyword(null,"fa","fa",484981183)], null);
var G__111781 = "info";
return (graphics.simple_icons.icon.cljs$core$IFn$_invoke$arity$2 ? graphics.simple_icons.icon.cljs$core$IFn$_invoke$arity$2(G__111780,G__111781) : graphics.simple_icons.icon.call(null,G__111780,G__111781));
})()),"");
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$], null),"small-help-button");
predict_prostate.components.button.treatment_help_button = rum.core.build_defc((function (p__111786){
var map__111787 = p__111786;
var map__111787__$1 = (((((!((map__111787 == null))))?(((((map__111787.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__111787.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__111787):map__111787);
var props = map__111787__$1;
var help_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__111787__$1,new cljs.core.Keyword(null,"help-id","help-id",-1064550845));
var icon_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__111787__$1,new cljs.core.Keyword(null,"icon-name","icon-name",152456315));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__111787__$1,new cljs.core.Keyword(null,"title","title",636505583));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__111787__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
return React.createElement("button",({"role": "button", "tabIndex": "0", "data-content": "Help TBD", "type": "button", "className": "btn btn-info btn-sm", "title": title, "onKeyDown": (function (p1__111784_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Enter",p1__111784_SHARP_.nativeEvent.code)){
return predict_prostate.state.run_time.help_key_change.pubsub$feeds$TopicFeed$publish$arity$2(null,help_id);
} else {
return null;
}
}), "data-target": "#topModal", "onClick": (function (){
return predict_prostate.state.run_time.help_key_change.pubsub$feeds$TopicFeed$publish$arity$2(null,help_id);
}), "data-toggle": "modal"}),sablono.interpreter.interpret((function (){var G__111792 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"family","family",-1313145692),new cljs.core.Keyword(null,"fa","fa",484981183)], null);
var G__111793 = "warning";
return (graphics.simple_icons.icon.cljs$core$IFn$_invoke$arity$2 ? graphics.simple_icons.icon.cljs$core$IFn$_invoke$arity$2(G__111792,G__111793) : graphics.simple_icons.icon.call(null,G__111792,G__111793));
})())," Potential harms");
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$], null),"treatment-help-button");
predict_prostate.components.button.settings_button = rum.core.build_defc((function (ttt){
var settings = "settings";
return React.createElement("button",({"role": "button", "tabIndex": "0", "data-content": "Settings content", "type": "button", "className": "btn btn-default", "title": "Settings", "onKeyDown": (function (p1__111794_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Enter",p1__111794_SHARP_.nativeEvent.code)){
return predict_prostate.state.run_time.settings_change.pubsub$feeds$TopicFeed$publish$arity$2(null,settings);
} else {
return null;
}
}), "data-target": "#settingsModal", "onClick": (function (){
return predict_prostate.state.run_time.settings_change.pubsub$feeds$TopicFeed$publish$arity$2(null,settings);
}), "data-toggle": "modal"}),sablono.interpreter.interpret((function (){var G__111798 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"family","family",-1313145692),new cljs.core.Keyword(null,"fa","fa",484981183)], null);
var G__111799 = "cog";
return (graphics.simple_icons.icon.cljs$core$IFn$_invoke$arity$2 ? graphics.simple_icons.icon.cljs$core$IFn$_invoke$arity$2(G__111798,G__111799) : graphics.simple_icons.icon.call(null,G__111798,G__111799));
})())," ",sablono.interpreter.interpret((function (){var G__111800 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tool","settings","tool/settings",1559915107),"Settings"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__111800) : ttt.call(null,G__111800));
})()));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$], null),"settings-button");
predict_prostate.components.button.print_button = rum.core.build_defc((function (ttt){
return React.createElement("button",({"role": "button", "tabIndex": "0", "data-content": "Print content", "type": "button", "className": "btn btn-danger btn-lg screen-only pull-right", "title": "Print Results", "style": ({"marginRight": (15)}), "aria-label": "show printable results", "onKeyDown": (function (p1__111802_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Enter",p1__111802_SHARP_.nativeEvent.code)){
return predict_prostate.state.run_time.print_change.pubsub$feeds$TopicFeed$publish$arity$2(null,"print");
} else {
return null;
}
}), "data-target": "#printModal", "onClick": (function (){
return predict_prostate.state.run_time.print_change.pubsub$feeds$TopicFeed$publish$arity$2(null,"print");
}), "data-toggle": "modal"}),sablono.interpreter.interpret((function (){var G__111806 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"family","family",-1313145692),new cljs.core.Keyword(null,"fa","fa",484981183)], null);
var G__111807 = "print";
return (graphics.simple_icons.icon.cljs$core$IFn$_invoke$arity$2 ? graphics.simple_icons.icon.cljs$core$IFn$_invoke$arity$2(G__111806,G__111807) : graphics.simple_icons.icon.call(null,G__111806,G__111807));
})())," ",sablono.interpreter.interpret((function (){var G__111808 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("home","print-button","home/print-button",303249748),"Print"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__111808) : ttt.call(null,G__111808));
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
})], null),(function (){var G__111809 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"family","family",-1313145692),new cljs.core.Keyword(null,"fa","fa",484981183)], null);
var G__111810 = "chevron-right";
return (graphics.simple_icons.icon.cljs$core$IFn$_invoke$arity$2 ? graphics.simple_icons.icon.cljs$core$IFn$_invoke$arity$2(G__111809,G__111810) : graphics.simple_icons.icon.call(null,G__111809,G__111810));
})()," ",(function (){var G__111813 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("home","start-button","home/start-button",-934525868),"Start Predict"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__111813) : ttt.call(null,G__111813));
})()], null);
});
predict_prostate.components.button.start_button_group = (function predict_prostate$components$button$start_button_group(ttt,supported_languages){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".btn-group",".btn-group",-850887226),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),(975),new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),(15),new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),(15),new cljs.core.Keyword(null,"margin-top","margin-top",392161226),(15)], null)], null),predict_prostate.components.button.start_button(ttt),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-default.btn-lg.dropdown-toggle","button.btn.btn-default.btn-lg.dropdown-toggle",539604190),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"data-toggle","data-toggle",436966687),"dropdown",new cljs.core.Keyword(null,"aria-haspopup","aria-haspopup",-1220141412),"true",new cljs.core.Keyword(null,"aria-expanded","aria-expanded",-1360942393),"false"], null),(function (){var G__111815 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("navbar","change-language","navbar/change-language",-1814466745),"Change Language"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__111815) : ttt.call(null,G__111815));
})()," ",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.caret","span.caret",-1405994877)], null)], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.dropdown-menu.lang","ul.dropdown-menu.lang",-1120672871)], null),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (lang){
return predict_prostate.components.button.menu_item((function (){var G__111818 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lang], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__111818) : ttt.call(null,G__111818));
})(),lang);
}),supported_languages))], null);
});

//# sourceMappingURL=predict_prostate.components.button.js.map
