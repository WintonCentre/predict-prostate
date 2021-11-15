goog.provide('predict_prostate.components.button');
predict_prostate.components.button.information = rum.core.build_defc((function (p__32730,group_cursor){
var map__32743 = p__32730;
var map__32743__$1 = (((((!((map__32743 == null))))?(((((map__32743.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32743.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32743):map__32743);
var props = map__32743__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32743__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var values = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32743__$1,new cljs.core.Keyword(null,"values","values",372645556));
return React.createElement("div",null,React.createElement("div",null,(function (){var attrs32789 = values;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs32789))?sablono.interpreter.attributes(attrs32789):null),((cljs.core.map_QMARK_(attrs32789))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs32789)], null)));
})()));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"information");
predict_prostate.components.button.toggle_button = rum.core.build_defc((function (p__32809,label){
var map__32810 = p__32809;
var map__32810__$1 = (((((!((map__32810 == null))))?(((((map__32810.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32810.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32810):map__32810);
var ttt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32810__$1,new cljs.core.Keyword(null,"ttt","ttt",1858561240));
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32810__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32810__$1,new cljs.core.Keyword(null,"value","value",305978217));
var topic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32810__$1,new cljs.core.Keyword(null,"topic","topic",-1960480691));
var disabled = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__32810__$1,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),false);
var handler = (function (){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(key,value)){
return pubsub.feeds.publish(topic,key);
} else {
return null;
}
});
return React.createElement("button",({"className": ["btn btn-default btn-sm custom",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,value))?" active":"")].join(''), "disabled": disabled, "type": "button", "key": label, "onKeyDown": (function (p1__32797_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__32797_SHARP_.nativeEvent.code,"Enter")){
return handler();
} else {
return null;
}
}), "onClick": handler}),sablono.interpreter.interpret(label));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$], null),"toggle-button");
predict_prostate.components.button.radio_button_group = rum.core.build_defc((function (p__32828,group_cursor){
var map__32829 = p__32828;
var map__32829__$1 = (((((!((map__32829 == null))))?(((((map__32829.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32829.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32829):map__32829);
var ttt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32829__$1,new cljs.core.Keyword(null,"ttt","ttt",1858561240));
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32829__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var aria_label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32829__$1,new cljs.core.Keyword(null,"aria-label","aria-label",455891514));
var aria_describedby = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32829__$1,new cljs.core.Keyword(null,"aria-describedby","aria-describedby",1826540471));
var values = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32829__$1,new cljs.core.Keyword(null,"values","values",372645556));
var unknowable = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32829__$1,new cljs.core.Keyword(null,"unknowable","unknowable",1635948924));
var vertical = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32829__$1,new cljs.core.Keyword(null,"vertical","vertical",718696748));
var group_value = rum.core.react(group_cursor);
return React.createElement("div",null,React.createElement("div",null,React.createElement("div",({"role": "group", "aria-label": aria_label, "aria-describedby": aria_describedby, "className": ["btn-group",(cljs.core.truth_(vertical)?"-vertical":"")].join('')}),sablono.interpreter.interpret(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__32835){
var vec__32836 = p__32835;
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32836,(0),null);
var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32836,(1),null);
return rum.core.with_key((function (){var G__32839 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"ttt","ttt",1858561240),ttt,new cljs.core.Keyword(null,"key","key",-1516042587),val,new cljs.core.Keyword(null,"value","value",305978217),group_value,new cljs.core.Keyword(null,"topic","topic",-1960480691),predict_prostate.state.run_time.input_change(key),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(group_value,new cljs.core.Keyword(null,"disabled","disabled",-1529784218))], null);
var G__32840 = label;
return (predict_prostate.components.button.toggle_button.cljs$core$IFn$_invoke$arity$2 ? predict_prostate.components.button.toggle_button.cljs$core$IFn$_invoke$arity$2(G__32839,G__32840) : predict_prostate.components.button.toggle_button.call(null,G__32839,G__32840));
})(),label);
}),values)),sablono.interpreter.interpret((cljs.core.truth_(unknowable)?(function (){var G__32841 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"ttt","ttt",1858561240),ttt,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"unknown","unknown",-935977881),new cljs.core.Keyword(null,"value","value",305978217),group_value,new cljs.core.Keyword(null,"topic","topic",-1960480691),predict_prostate.state.run_time.input_change(key),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(group_value,new cljs.core.Keyword(null,"disabled","disabled",-1529784218))], null);
var G__32842 = predict_prostate.state.run_time.unknown;
return (predict_prostate.components.button.toggle_button.cljs$core$IFn$_invoke$arity$2 ? predict_prostate.components.button.toggle_button.cljs$core$IFn$_invoke$arity$2(G__32841,G__32842) : predict_prostate.components.button.toggle_button.call(null,G__32841,G__32842));
})():null)))));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"radio-button-group");
predict_prostate.components.button.horiz_radio_button_group = rum.core.build_defc((function (p__32843,group_cursor){
var map__32844 = p__32843;
var map__32844__$1 = (((((!((map__32844 == null))))?(((((map__32844.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32844.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32844):map__32844);
var ttt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32844__$1,new cljs.core.Keyword(null,"ttt","ttt",1858561240));
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32844__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var aria_label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32844__$1,new cljs.core.Keyword(null,"aria-label","aria-label",455891514));
var aria_describedby = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32844__$1,new cljs.core.Keyword(null,"aria-describedby","aria-describedby",1826540471));
var values = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32844__$1,new cljs.core.Keyword(null,"values","values",372645556));
var unknowable = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32844__$1,new cljs.core.Keyword(null,"unknowable","unknowable",1635948924));
var group_value = rum.core.react(group_cursor);
return React.createElement("div",({"role": "group", "aria-label": aria_label, "aria-describedby": aria_describedby, "style": ({"display": "inline-block"}), "className": "btn-group"}),sablono.interpreter.interpret(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__32846){
var vec__32847 = p__32846;
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32847,(0),null);
var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32847,(1),null);
return rum.core.with_key((function (){var G__32850 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ttt","ttt",1858561240),ttt,new cljs.core.Keyword(null,"key","key",-1516042587),val,new cljs.core.Keyword(null,"value","value",305978217),group_value,new cljs.core.Keyword(null,"topic","topic",-1960480691),predict_prostate.state.run_time.input_change(key)], null);
var G__32851 = label;
return (predict_prostate.components.button.toggle_button.cljs$core$IFn$_invoke$arity$2 ? predict_prostate.components.button.toggle_button.cljs$core$IFn$_invoke$arity$2(G__32850,G__32851) : predict_prostate.components.button.toggle_button.call(null,G__32850,G__32851));
})(),label);
}),values)),sablono.interpreter.interpret((cljs.core.truth_(unknowable)?(function (){var G__32852 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ttt","ttt",1858561240),ttt,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"unknown","unknown",-935977881),new cljs.core.Keyword(null,"value","value",305978217),group_value,new cljs.core.Keyword(null,"topic","topic",-1960480691),predict_prostate.state.run_time.input_change(key)], null);
var G__32853 = predict_prostate.state.run_time.unknown;
return (predict_prostate.components.button.toggle_button.cljs$core$IFn$_invoke$arity$2 ? predict_prostate.components.button.toggle_button.cljs$core$IFn$_invoke$arity$2(G__32852,G__32853) : predict_prostate.components.button.toggle_button.call(null,G__32852,G__32853));
})():null)));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"horiz-radio-button-group");
predict_prostate.components.button.year_picker = rum.core.build_defc((function (ttt){
return sablono.interpreter.interpret((function (){var G__32854 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ttt","ttt",1858561240),ttt,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"result-year","result-year",1413238532),new cljs.core.Keyword(null,"values","values",372645556),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),"10"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(15),"15"], null)], null)], null);
var G__32855 = predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"result-year","result-year",1413238532));
return (predict_prostate.components.button.horiz_radio_button_group.cljs$core$IFn$_invoke$arity$2 ? predict_prostate.components.button.horiz_radio_button_group.cljs$core$IFn$_invoke$arity$2(G__32854,G__32855) : predict_prostate.components.button.horiz_radio_button_group.call(null,G__32854,G__32855));
})());
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"year-picker");
predict_prostate.components.button.radio_button_group_vertical = rum.core.build_defc((function (props,group_cursor){
return sablono.interpreter.interpret((function (){var G__32856 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertical","vertical",718696748),true], null)], 0));
var G__32857 = group_cursor;
return (predict_prostate.components.button.radio_button_group.cljs$core$IFn$_invoke$arity$2 ? predict_prostate.components.button.radio_button_group.cljs$core$IFn$_invoke$arity$2(G__32856,G__32857) : predict_prostate.components.button.radio_button_group.call(null,G__32856,G__32857));
})());
}),null,"radio-button-group-vertical");
predict_prostate.components.button.small_help_button = rum.core.build_defc((function (p__32859){
var map__32860 = p__32859;
var map__32860__$1 = (((((!((map__32860 == null))))?(((((map__32860.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32860.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32860):map__32860);
var props = map__32860__$1;
var help_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32860__$1,new cljs.core.Keyword(null,"help-id","help-id",-1064550845));
var icon_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32860__$1,new cljs.core.Keyword(null,"icon-name","icon-name",152456315));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32860__$1,new cljs.core.Keyword(null,"title","title",636505583));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32860__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
return React.createElement("button",({"role": "button", "tabIndex": "0", "data-content": "Help TBD", "type": "button", "className": "btn btn-info btn-sm", "title": title, "style": ({"cursor": "pointer", "padding": "0px 11px", "fontSize": "20px", "borderRadius": (15)}), "aria-label": ["info on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(text)].join(''), "onKeyDown": (function (p1__32858_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Enter",p1__32858_SHARP_.nativeEvent.code)){
return predict_prostate.state.run_time.help_key_change.pubsub$feeds$TopicFeed$publish$arity$2(null,help_id);
} else {
return null;
}
}), "data-target": "#topModal", "onClick": (function (){
return predict_prostate.state.run_time.help_key_change.pubsub$feeds$TopicFeed$publish$arity$2(null,help_id);
}), "data-toggle": "modal"}),sablono.interpreter.interpret((function (){var G__32862 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"family","family",-1313145692),new cljs.core.Keyword(null,"fa","fa",484981183)], null);
var G__32863 = "info";
return (graphics.simple_icons.icon.cljs$core$IFn$_invoke$arity$2 ? graphics.simple_icons.icon.cljs$core$IFn$_invoke$arity$2(G__32862,G__32863) : graphics.simple_icons.icon.call(null,G__32862,G__32863));
})()),"");
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$], null),"small-help-button");
predict_prostate.components.button.treatment_help_button = rum.core.build_defc((function (p__32865){
var map__32866 = p__32865;
var map__32866__$1 = (((((!((map__32866 == null))))?(((((map__32866.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32866.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32866):map__32866);
var props = map__32866__$1;
var help_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32866__$1,new cljs.core.Keyword(null,"help-id","help-id",-1064550845));
var icon_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32866__$1,new cljs.core.Keyword(null,"icon-name","icon-name",152456315));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32866__$1,new cljs.core.Keyword(null,"title","title",636505583));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32866__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
return React.createElement("button",({"role": "button", "tabIndex": "0", "data-content": "Help TBD", "type": "button", "className": "btn btn-info btn-sm", "title": title, "onKeyDown": (function (p1__32864_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Enter",p1__32864_SHARP_.nativeEvent.code)){
return predict_prostate.state.run_time.help_key_change.pubsub$feeds$TopicFeed$publish$arity$2(null,help_id);
} else {
return null;
}
}), "data-target": "#topModal", "onClick": (function (){
return predict_prostate.state.run_time.help_key_change.pubsub$feeds$TopicFeed$publish$arity$2(null,help_id);
}), "data-toggle": "modal"}),sablono.interpreter.interpret((function (){var G__32868 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"family","family",-1313145692),new cljs.core.Keyword(null,"fa","fa",484981183)], null);
var G__32869 = "warning";
return (graphics.simple_icons.icon.cljs$core$IFn$_invoke$arity$2 ? graphics.simple_icons.icon.cljs$core$IFn$_invoke$arity$2(G__32868,G__32869) : graphics.simple_icons.icon.call(null,G__32868,G__32869));
})())," Potential harms");
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$], null),"treatment-help-button");
predict_prostate.components.button.settings_button = rum.core.build_defc((function (ttt){
var settings = "settings";
return React.createElement("button",({"role": "button", "tabIndex": "0", "data-content": "Settings content", "type": "button", "className": "btn btn-default", "title": "Settings", "onKeyDown": (function (p1__32870_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Enter",p1__32870_SHARP_.nativeEvent.code)){
return predict_prostate.state.run_time.settings_change.pubsub$feeds$TopicFeed$publish$arity$2(null,settings);
} else {
return null;
}
}), "data-target": "#settingsModal", "onClick": (function (){
return predict_prostate.state.run_time.settings_change.pubsub$feeds$TopicFeed$publish$arity$2(null,settings);
}), "data-toggle": "modal"}),sablono.interpreter.interpret((function (){var G__32874 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"family","family",-1313145692),new cljs.core.Keyword(null,"fa","fa",484981183)], null);
var G__32875 = "cog";
return (graphics.simple_icons.icon.cljs$core$IFn$_invoke$arity$2 ? graphics.simple_icons.icon.cljs$core$IFn$_invoke$arity$2(G__32874,G__32875) : graphics.simple_icons.icon.call(null,G__32874,G__32875));
})())," ",sablono.interpreter.interpret((function (){var G__32876 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tools","settings","tools/settings",1046071950),"Settings"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__32876) : ttt.call(null,G__32876));
})()));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$], null),"settings-button");
predict_prostate.components.button.print_button = rum.core.build_defc((function (ttt){
return React.createElement("button",({"role": "button", "tabIndex": "0", "data-content": "Print content", "type": "button", "className": "btn btn-danger btn-lg screen-only pull-right", "title": "Print Results", "style": ({"marginRight": (15)}), "aria-label": "show printable results", "onKeyDown": (function (p1__32877_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Enter",p1__32877_SHARP_.nativeEvent.code)){
return predict_prostate.state.run_time.print_change.pubsub$feeds$TopicFeed$publish$arity$2(null,"print");
} else {
return null;
}
}), "data-target": "#printModal", "onClick": (function (){
return predict_prostate.state.run_time.print_change.pubsub$feeds$TopicFeed$publish$arity$2(null,"print");
}), "data-toggle": "modal"}),sablono.interpreter.interpret((function (){var G__32879 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"family","family",-1313145692),new cljs.core.Keyword(null,"fa","fa",484981183)], null);
var G__32880 = "print";
return (graphics.simple_icons.icon.cljs$core$IFn$_invoke$arity$2 ? graphics.simple_icons.icon.cljs$core$IFn$_invoke$arity$2(G__32879,G__32880) : graphics.simple_icons.icon.call(null,G__32879,G__32880));
})())," ",sablono.interpreter.interpret((function (){var G__32881 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("home","print-button","home/print-button",303249748),"Print"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__32881) : ttt.call(null,G__32881));
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
})], null),(function (){var G__32882 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"family","family",-1313145692),new cljs.core.Keyword(null,"fa","fa",484981183)], null);
var G__32883 = "chevron-right";
return (graphics.simple_icons.icon.cljs$core$IFn$_invoke$arity$2 ? graphics.simple_icons.icon.cljs$core$IFn$_invoke$arity$2(G__32882,G__32883) : graphics.simple_icons.icon.call(null,G__32882,G__32883));
})()," ",(function (){var G__32884 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("home","start-button","home/start-button",-934525868),"Start Predict"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__32884) : ttt.call(null,G__32884));
})()], null);
});
predict_prostate.components.button.start_button_group = (function predict_prostate$components$button$start_button_group(ttt,supported_languages){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".btn-group",".btn-group",-850887226),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),(975),new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),(15),new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),(15),new cljs.core.Keyword(null,"margin-top","margin-top",392161226),(15)], null)], null),predict_prostate.components.button.start_button(ttt),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-default.btn-lg.dropdown-toggle","button.btn.btn-default.btn-lg.dropdown-toggle",539604190),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"data-toggle","data-toggle",436966687),"dropdown",new cljs.core.Keyword(null,"aria-haspopup","aria-haspopup",-1220141412),"true",new cljs.core.Keyword(null,"aria-expanded","aria-expanded",-1360942393),"false"], null),(function (){var G__32885 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("navbar","change-language","navbar/change-language",-1814466745),"Change Language"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__32885) : ttt.call(null,G__32885));
})()," ",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.caret","span.caret",-1405994877)], null)], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.dropdown-menu.lang","ul.dropdown-menu.lang",-1120672871)], null),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (lang){
return predict_prostate.components.button.menu_item((function (){var G__32886 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lang], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__32886) : ttt.call(null,G__32886));
})(),lang);
}),supported_languages))], null);
});

//# sourceMappingURL=predict_prostate.components.button.js.map
