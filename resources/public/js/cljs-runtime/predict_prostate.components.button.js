goog.provide('predict_prostate.components.button');
predict_prostate.components.button.information = rum.core.build_defc((function (p__159710,group_cursor){
var map__159711 = p__159710;
var map__159711__$1 = (((((!((map__159711 == null))))?(((((map__159711.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__159711.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__159711):map__159711);
var props = map__159711__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__159711__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var values = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__159711__$1,new cljs.core.Keyword(null,"values","values",372645556));
return React.createElement("div",null,React.createElement("div",null,(function (){var attrs159715 = values;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs159715))?sablono.interpreter.attributes(attrs159715):null),((cljs.core.map_QMARK_(attrs159715))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs159715)], null)));
})()));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"information");
predict_prostate.components.button.toggle_button = rum.core.build_defc((function (p__159719,label){
var map__159721 = p__159719;
var map__159721__$1 = (((((!((map__159721 == null))))?(((((map__159721.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__159721.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__159721):map__159721);
var ttt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__159721__$1,new cljs.core.Keyword(null,"ttt","ttt",1858561240));
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__159721__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__159721__$1,new cljs.core.Keyword(null,"value","value",305978217));
var topic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__159721__$1,new cljs.core.Keyword(null,"topic","topic",-1960480691));
var disabled = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__159721__$1,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),false);
var handler = (function (){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(key,value)){
return pubsub.feeds.publish(topic,key);
} else {
return null;
}
});
return React.createElement("button",({"className": ["btn btn-default btn-sm custom",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,value))?" active":"")].join(''), "disabled": disabled, "type": "button", "key": label, "onKeyDown": (function (p1__159717_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__159717_SHARP_.nativeEvent.code,"Enter")){
return handler();
} else {
return null;
}
}), "onClick": handler}),sablono.interpreter.interpret(label));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$], null),"toggle-button");
predict_prostate.components.button.radio_button_group = rum.core.build_defc((function (p__159726,group_cursor){
var map__159728 = p__159726;
var map__159728__$1 = (((((!((map__159728 == null))))?(((((map__159728.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__159728.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__159728):map__159728);
var ttt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__159728__$1,new cljs.core.Keyword(null,"ttt","ttt",1858561240));
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__159728__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var aria_label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__159728__$1,new cljs.core.Keyword(null,"aria-label","aria-label",455891514));
var aria_describedby = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__159728__$1,new cljs.core.Keyword(null,"aria-describedby","aria-describedby",1826540471));
var values = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__159728__$1,new cljs.core.Keyword(null,"values","values",372645556));
var unknowable = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__159728__$1,new cljs.core.Keyword(null,"unknowable","unknowable",1635948924));
var vertical = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__159728__$1,new cljs.core.Keyword(null,"vertical","vertical",718696748));
var group_value = rum.core.react(group_cursor);
return React.createElement("div",null,React.createElement("div",null,React.createElement("div",({"role": "group", "aria-label": aria_label, "aria-describedby": aria_describedby, "className": ["btn-group",(cljs.core.truth_(vertical)?"-vertical":"")].join('')}),sablono.interpreter.interpret(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__159732){
var vec__159736 = p__159732;
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__159736,(0),null);
var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__159736,(1),null);
return rum.core.with_key((function (){var G__159740 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"ttt","ttt",1858561240),ttt,new cljs.core.Keyword(null,"key","key",-1516042587),val,new cljs.core.Keyword(null,"value","value",305978217),group_value,new cljs.core.Keyword(null,"topic","topic",-1960480691),predict_prostate.state.run_time.input_change(key),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(group_value,new cljs.core.Keyword(null,"disabled","disabled",-1529784218))], null);
var G__159742 = label;
return (predict_prostate.components.button.toggle_button.cljs$core$IFn$_invoke$arity$2 ? predict_prostate.components.button.toggle_button.cljs$core$IFn$_invoke$arity$2(G__159740,G__159742) : predict_prostate.components.button.toggle_button.call(null,G__159740,G__159742));
})(),label);
}),values)),sablono.interpreter.interpret((cljs.core.truth_(unknowable)?(function (){var G__159743 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"ttt","ttt",1858561240),ttt,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"unknown","unknown",-935977881),new cljs.core.Keyword(null,"value","value",305978217),group_value,new cljs.core.Keyword(null,"topic","topic",-1960480691),predict_prostate.state.run_time.input_change(key),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(group_value,new cljs.core.Keyword(null,"disabled","disabled",-1529784218))], null);
var G__159744 = predict_prostate.state.run_time.unknown;
return (predict_prostate.components.button.toggle_button.cljs$core$IFn$_invoke$arity$2 ? predict_prostate.components.button.toggle_button.cljs$core$IFn$_invoke$arity$2(G__159743,G__159744) : predict_prostate.components.button.toggle_button.call(null,G__159743,G__159744));
})():null)))));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"radio-button-group");
predict_prostate.components.button.horiz_radio_button_group = rum.core.build_defc((function (p__159748,group_cursor){
var map__159750 = p__159748;
var map__159750__$1 = (((((!((map__159750 == null))))?(((((map__159750.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__159750.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__159750):map__159750);
var ttt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__159750__$1,new cljs.core.Keyword(null,"ttt","ttt",1858561240));
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__159750__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var aria_label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__159750__$1,new cljs.core.Keyword(null,"aria-label","aria-label",455891514));
var aria_describedby = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__159750__$1,new cljs.core.Keyword(null,"aria-describedby","aria-describedby",1826540471));
var values = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__159750__$1,new cljs.core.Keyword(null,"values","values",372645556));
var unknowable = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__159750__$1,new cljs.core.Keyword(null,"unknowable","unknowable",1635948924));
var group_value = rum.core.react(group_cursor);
return React.createElement("div",({"role": "group", "aria-label": aria_label, "aria-describedby": aria_describedby, "style": ({"display": "inline-block"}), "className": "btn-group"}),sablono.interpreter.interpret(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__159754){
var vec__159758 = p__159754;
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__159758,(0),null);
var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__159758,(1),null);
return rum.core.with_key((function (){var G__159763 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ttt","ttt",1858561240),ttt,new cljs.core.Keyword(null,"key","key",-1516042587),val,new cljs.core.Keyword(null,"value","value",305978217),group_value,new cljs.core.Keyword(null,"topic","topic",-1960480691),predict_prostate.state.run_time.input_change(key)], null);
var G__159764 = label;
return (predict_prostate.components.button.toggle_button.cljs$core$IFn$_invoke$arity$2 ? predict_prostate.components.button.toggle_button.cljs$core$IFn$_invoke$arity$2(G__159763,G__159764) : predict_prostate.components.button.toggle_button.call(null,G__159763,G__159764));
})(),label);
}),values)),sablono.interpreter.interpret((cljs.core.truth_(unknowable)?(function (){var G__159767 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ttt","ttt",1858561240),ttt,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"unknown","unknown",-935977881),new cljs.core.Keyword(null,"value","value",305978217),group_value,new cljs.core.Keyword(null,"topic","topic",-1960480691),predict_prostate.state.run_time.input_change(key)], null);
var G__159768 = predict_prostate.state.run_time.unknown;
return (predict_prostate.components.button.toggle_button.cljs$core$IFn$_invoke$arity$2 ? predict_prostate.components.button.toggle_button.cljs$core$IFn$_invoke$arity$2(G__159767,G__159768) : predict_prostate.components.button.toggle_button.call(null,G__159767,G__159768));
})():null)));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"horiz-radio-button-group");
predict_prostate.components.button.year_picker = rum.core.build_defc((function (ttt){
return sablono.interpreter.interpret((function (){var G__159771 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ttt","ttt",1858561240),ttt,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"result-year","result-year",1413238532),new cljs.core.Keyword(null,"values","values",372645556),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),"10"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(15),"15"], null)], null)], null);
var G__159772 = predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"result-year","result-year",1413238532));
return (predict_prostate.components.button.horiz_radio_button_group.cljs$core$IFn$_invoke$arity$2 ? predict_prostate.components.button.horiz_radio_button_group.cljs$core$IFn$_invoke$arity$2(G__159771,G__159772) : predict_prostate.components.button.horiz_radio_button_group.call(null,G__159771,G__159772));
})());
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"year-picker");
predict_prostate.components.button.radio_button_group_vertical = rum.core.build_defc((function (props,group_cursor){
return sablono.interpreter.interpret((function (){var G__159775 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertical","vertical",718696748),true], null)], 0));
var G__159776 = group_cursor;
return (predict_prostate.components.button.radio_button_group.cljs$core$IFn$_invoke$arity$2 ? predict_prostate.components.button.radio_button_group.cljs$core$IFn$_invoke$arity$2(G__159775,G__159776) : predict_prostate.components.button.radio_button_group.call(null,G__159775,G__159776));
})());
}),null,"radio-button-group-vertical");
predict_prostate.components.button.small_help_button = rum.core.build_defc((function (p__159782){
var map__159783 = p__159782;
var map__159783__$1 = (((((!((map__159783 == null))))?(((((map__159783.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__159783.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__159783):map__159783);
var props = map__159783__$1;
var help_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__159783__$1,new cljs.core.Keyword(null,"help-id","help-id",-1064550845));
var icon_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__159783__$1,new cljs.core.Keyword(null,"icon-name","icon-name",152456315));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__159783__$1,new cljs.core.Keyword(null,"title","title",636505583));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__159783__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
return React.createElement("button",({"role": "button", "tabIndex": "0", "data-content": "Help TBD", "type": "button", "className": "btn btn-info btn-sm", "title": title, "style": ({"cursor": "pointer", "padding": "0px 11px", "fontSize": "20px", "borderRadius": (15)}), "aria-label": ["info on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(text)].join(''), "onKeyDown": (function (p1__159778_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Enter",p1__159778_SHARP_.nativeEvent.code)){
return predict_prostate.state.run_time.help_key_change.pubsub$feeds$TopicFeed$publish$arity$2(null,help_id);
} else {
return null;
}
}), "data-target": "#topModal", "onClick": (function (){
return predict_prostate.state.run_time.help_key_change.pubsub$feeds$TopicFeed$publish$arity$2(null,help_id);
}), "data-toggle": "modal"}),sablono.interpreter.interpret((function (){var G__159787 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"family","family",-1313145692),new cljs.core.Keyword(null,"fa","fa",484981183)], null);
var G__159788 = "info";
return (graphics.simple_icons.icon.cljs$core$IFn$_invoke$arity$2 ? graphics.simple_icons.icon.cljs$core$IFn$_invoke$arity$2(G__159787,G__159788) : graphics.simple_icons.icon.call(null,G__159787,G__159788));
})()),"");
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$], null),"small-help-button");
predict_prostate.components.button.treatment_help_button = rum.core.build_defc((function (p__159793){
var map__159795 = p__159793;
var map__159795__$1 = (((((!((map__159795 == null))))?(((((map__159795.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__159795.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__159795):map__159795);
var props = map__159795__$1;
var help_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__159795__$1,new cljs.core.Keyword(null,"help-id","help-id",-1064550845));
var icon_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__159795__$1,new cljs.core.Keyword(null,"icon-name","icon-name",152456315));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__159795__$1,new cljs.core.Keyword(null,"title","title",636505583));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__159795__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
return React.createElement("button",({"role": "button", "tabIndex": "0", "data-content": "Help TBD", "type": "button", "className": "btn btn-info btn-sm", "title": title, "onKeyDown": (function (p1__159790_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Enter",p1__159790_SHARP_.nativeEvent.code)){
return predict_prostate.state.run_time.help_key_change.pubsub$feeds$TopicFeed$publish$arity$2(null,help_id);
} else {
return null;
}
}), "data-target": "#topModal", "onClick": (function (){
return predict_prostate.state.run_time.help_key_change.pubsub$feeds$TopicFeed$publish$arity$2(null,help_id);
}), "data-toggle": "modal"}),sablono.interpreter.interpret((function (){var G__159799 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"family","family",-1313145692),new cljs.core.Keyword(null,"fa","fa",484981183)], null);
var G__159800 = "warning";
return (graphics.simple_icons.icon.cljs$core$IFn$_invoke$arity$2 ? graphics.simple_icons.icon.cljs$core$IFn$_invoke$arity$2(G__159799,G__159800) : graphics.simple_icons.icon.call(null,G__159799,G__159800));
})())," Potential harms");
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$], null),"treatment-help-button");
predict_prostate.components.button.settings_button = rum.core.build_defc((function (ttt){
var settings = "settings";
return React.createElement("button",({"role": "button", "tabIndex": "0", "data-content": "Settings content", "type": "button", "className": "btn btn-default", "title": "Settings", "onKeyDown": (function (p1__159802_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Enter",p1__159802_SHARP_.nativeEvent.code)){
return predict_prostate.state.run_time.settings_change.pubsub$feeds$TopicFeed$publish$arity$2(null,settings);
} else {
return null;
}
}), "data-target": "#settingsModal", "onClick": (function (){
return predict_prostate.state.run_time.settings_change.pubsub$feeds$TopicFeed$publish$arity$2(null,settings);
}), "data-toggle": "modal"}),sablono.interpreter.interpret((function (){var G__159805 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"family","family",-1313145692),new cljs.core.Keyword(null,"fa","fa",484981183)], null);
var G__159806 = "cog";
return (graphics.simple_icons.icon.cljs$core$IFn$_invoke$arity$2 ? graphics.simple_icons.icon.cljs$core$IFn$_invoke$arity$2(G__159805,G__159806) : graphics.simple_icons.icon.call(null,G__159805,G__159806));
})())," ",sablono.interpreter.interpret((function (){var G__159808 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tool","settings","tool/settings",1559915107),"Settings"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__159808) : ttt.call(null,G__159808));
})()));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$], null),"settings-button");
predict_prostate.components.button.print_button = rum.core.build_defc((function (ttt){
return React.createElement("button",({"role": "button", "tabIndex": "0", "data-content": "Print content", "type": "button", "className": "btn btn-danger btn-lg screen-only pull-right", "title": "Print Results", "style": ({"marginRight": (15)}), "aria-label": "show printable results", "onKeyDown": (function (p1__159810_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Enter",p1__159810_SHARP_.nativeEvent.code)){
return predict_prostate.state.run_time.print_change.pubsub$feeds$TopicFeed$publish$arity$2(null,"print");
} else {
return null;
}
}), "data-target": "#printModal", "onClick": (function (){
return predict_prostate.state.run_time.print_change.pubsub$feeds$TopicFeed$publish$arity$2(null,"print");
}), "data-toggle": "modal"}),sablono.interpreter.interpret((function (){var G__159813 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"family","family",-1313145692),new cljs.core.Keyword(null,"fa","fa",484981183)], null);
var G__159814 = "print";
return (graphics.simple_icons.icon.cljs$core$IFn$_invoke$arity$2 ? graphics.simple_icons.icon.cljs$core$IFn$_invoke$arity$2(G__159813,G__159814) : graphics.simple_icons.icon.call(null,G__159813,G__159814));
})())," ",sablono.interpreter.interpret((function (){var G__159816 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("home","print-button","home/print-button",303249748),"Print"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__159816) : ttt.call(null,G__159816));
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
})], null),(function (){var G__159817 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"family","family",-1313145692),new cljs.core.Keyword(null,"fa","fa",484981183)], null);
var G__159818 = "chevron-right";
return (graphics.simple_icons.icon.cljs$core$IFn$_invoke$arity$2 ? graphics.simple_icons.icon.cljs$core$IFn$_invoke$arity$2(G__159817,G__159818) : graphics.simple_icons.icon.call(null,G__159817,G__159818));
})()," ",(function (){var G__159822 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("home","start-button","home/start-button",-934525868),"Start Predict"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__159822) : ttt.call(null,G__159822));
})()], null);
});
predict_prostate.components.button.start_button_group = (function predict_prostate$components$button$start_button_group(ttt,supported_languages){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".btn-group",".btn-group",-850887226),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),(975),new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),(15),new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),(15),new cljs.core.Keyword(null,"margin-top","margin-top",392161226),(15)], null)], null),predict_prostate.components.button.start_button(ttt),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-default.btn-lg.dropdown-toggle","button.btn.btn-default.btn-lg.dropdown-toggle",539604190),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"data-toggle","data-toggle",436966687),"dropdown",new cljs.core.Keyword(null,"aria-haspopup","aria-haspopup",-1220141412),"true",new cljs.core.Keyword(null,"aria-expanded","aria-expanded",-1360942393),"false"], null),(function (){var G__159824 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("navbar","change-language","navbar/change-language",-1814466745),"Change Language"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__159824) : ttt.call(null,G__159824));
})()," ",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.caret","span.caret",-1405994877)], null)], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.dropdown-menu.lang","ul.dropdown-menu.lang",-1120672871)], null),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (lang){
return predict_prostate.components.button.menu_item((function (){var G__159826 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lang], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__159826) : ttt.call(null,G__159826));
})(),lang);
}),supported_languages))], null);
});

//# sourceMappingURL=predict_prostate.components.button.js.map
