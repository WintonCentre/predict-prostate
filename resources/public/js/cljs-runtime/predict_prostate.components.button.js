goog.provide('predict_prostate.components.button');
predict_prostate.components.button.information = rum.core.lazy_build(rum.core.build_defc,(function (p__33845,_){
var map__33847 = p__33845;
var map__33847__$1 = cljs.core.__destructure_map(map__33847);
var values = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33847__$1,new cljs.core.Keyword(null,"values","values",372645556));
var ttt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33847__$1,new cljs.core.Keyword(null,"ttt","ttt",1858561240));
var ttt_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33847__$1,new cljs.core.Keyword(null,"ttt-key","ttt-key",-171752593));
return daiquiri.core.create_element("div",null,[daiquiri.core.create_element("div",null,[(function (){var attrs33856 = (function (){var G__33858 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ttt_key,values], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33858) : ttt.call(null,G__33858));
})();
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs33856))?daiquiri.interpreter.element_attributes(attrs33856):null),((cljs.core.map_QMARK_(attrs33856))?null:[daiquiri.interpreter.interpret(attrs33856)]));
})()])]);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"predict-prostate.components.button/information");
predict_prostate.components.button.button_label = (function predict_prostate$components$button$button_label(t,k,label){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(["button/",cljs.core.name(new cljs.core.Keyword(null,"topic","topic",-1960480691).cljs$core$IFn$_invoke$arity$1(t)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1((((k instanceof cljs.core.Keyword))?cljs.core.name(k):((typeof k === 'number')?["n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join(''):k)))].join('')),label], null);
});
predict_prostate.components.button.toggle_button = rum.core.lazy_build(rum.core.build_defc,(function (p__33865,label){
var map__33866 = p__33865;
var map__33866__$1 = cljs.core.__destructure_map(map__33866);
var ttt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33866__$1,new cljs.core.Keyword(null,"ttt","ttt",1858561240));
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33866__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33866__$1,new cljs.core.Keyword(null,"value","value",305978217));
var topic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33866__$1,new cljs.core.Keyword(null,"topic","topic",-1960480691));
var disabled = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__33866__$1,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),false);
if((ttt == null)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["toggle-button (nil ttt) ",new cljs.core.Keyword(null,"topic","topic",-1960480691).cljs$core$IFn$_invoke$arity$1(topic),key], 0));
} else {
}

var handler = (function (){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(key,value)){
return pubsub.feeds.publish(topic,key);
} else {
return null;
}
});
return daiquiri.core.create_element("button",{'className':["btn btn-default btn-sm custom",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,value))?" active":"")].join(''),'disabled':disabled,'type':"button",'key':label,'onKeyDown':(function (p1__33864_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__33864_SHARP_.nativeEvent.code,"Enter")){
return handler();
} else {
return null;
}
}),'onClick':handler},[((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"result-year","result-year",1413238532),new cljs.core.Keyword(null,"topic","topic",-1960480691).cljs$core$IFn$_invoke$arity$1(topic)))?(function (){var attrs33867 = label;
return daiquiri.core.create_element("b",((cljs.core.map_QMARK_(attrs33867))?daiquiri.interpreter.element_attributes(attrs33867):null),((cljs.core.map_QMARK_(attrs33867))?null:[daiquiri.interpreter.interpret(attrs33867)]));
})():daiquiri.interpreter.interpret((function (){var G__33869 = predict_prostate.components.button.button_label(topic,key,label);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33869) : ttt.call(null,G__33869));
})()))]);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$], null),"predict-prostate.components.button/toggle-button");
predict_prostate.components.button.radio_button_group = rum.core.lazy_build(rum.core.build_defc,(function (p__33871,group_cursor){
var map__33872 = p__33871;
var map__33872__$1 = cljs.core.__destructure_map(map__33872);
var ttt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33872__$1,new cljs.core.Keyword(null,"ttt","ttt",1858561240));
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33872__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var aria_label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33872__$1,new cljs.core.Keyword(null,"aria-label","aria-label",455891514));
var aria_describedby = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33872__$1,new cljs.core.Keyword(null,"aria-describedby","aria-describedby",1826540471));
var values = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33872__$1,new cljs.core.Keyword(null,"values","values",372645556));
var unknowable = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33872__$1,new cljs.core.Keyword(null,"unknowable","unknowable",1635948924));
var vertical = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33872__$1,new cljs.core.Keyword(null,"vertical","vertical",718696748));
var group_value = rum.core.react(group_cursor);
return daiquiri.core.create_element("div",null,[daiquiri.core.create_element("div",null,[daiquiri.core.create_element("div",{'role':"group",'aria-label':aria_label,'aria-describedby':aria_describedby,'className':["btn-group",(cljs.core.truth_(vertical)?"-vertical":"")].join('')},[daiquiri.interpreter.interpret(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__33889){
var vec__33891 = p__33889;
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33891,(0),null);
var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33891,(1),null);
return rum.core.with_key(predict_prostate.components.button.toggle_button(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"ttt","ttt",1858561240),ttt,new cljs.core.Keyword(null,"key","key",-1516042587),val,new cljs.core.Keyword(null,"value","value",305978217),group_value,new cljs.core.Keyword(null,"topic","topic",-1960480691),predict_prostate.state.run_time.input_change(key),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(group_value,new cljs.core.Keyword(null,"disabled","disabled",-1529784218))], null),label),label);
}),values)),(cljs.core.truth_(unknowable)?predict_prostate.components.button.toggle_button(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"ttt","ttt",1858561240),ttt,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"unknown","unknown",-935977881),new cljs.core.Keyword(null,"value","value",305978217),group_value,new cljs.core.Keyword(null,"topic","topic",-1960480691),predict_prostate.state.run_time.input_change(key),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(group_value,new cljs.core.Keyword(null,"disabled","disabled",-1529784218))], null),predict_prostate.state.run_time.unknown):null)])])]);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"predict-prostate.components.button/radio-button-group");
predict_prostate.components.button.horiz_radio_button_group = rum.core.lazy_build(rum.core.build_defc,(function (p__33921,group_cursor){
var map__33925 = p__33921;
var map__33925__$1 = cljs.core.__destructure_map(map__33925);
var ttt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33925__$1,new cljs.core.Keyword(null,"ttt","ttt",1858561240));
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33925__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var aria_label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33925__$1,new cljs.core.Keyword(null,"aria-label","aria-label",455891514));
var aria_describedby = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33925__$1,new cljs.core.Keyword(null,"aria-describedby","aria-describedby",1826540471));
var values = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33925__$1,new cljs.core.Keyword(null,"values","values",372645556));
var unknowable = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33925__$1,new cljs.core.Keyword(null,"unknowable","unknowable",1635948924));
var group_value = rum.core.react(group_cursor);
return daiquiri.core.create_element("div",{'role':"group",'aria-label':aria_label,'aria-describedby':aria_describedby,'style':{'display':"inline-block"},'className':"btn-group"},[daiquiri.interpreter.interpret(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__33950){
var vec__33951 = p__33950;
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33951,(0),null);
var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33951,(1),null);
return rum.core.with_key(predict_prostate.components.button.toggle_button(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ttt","ttt",1858561240),ttt,new cljs.core.Keyword(null,"key","key",-1516042587),val,new cljs.core.Keyword(null,"value","value",305978217),group_value,new cljs.core.Keyword(null,"topic","topic",-1960480691),predict_prostate.state.run_time.input_change(key)], null),label),label);
}),values)),(cljs.core.truth_(unknowable)?predict_prostate.components.button.toggle_button(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ttt","ttt",1858561240),ttt,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"unknown","unknown",-935977881),new cljs.core.Keyword(null,"value","value",305978217),group_value,new cljs.core.Keyword(null,"topic","topic",-1960480691),predict_prostate.state.run_time.input_change(key)], null),predict_prostate.state.run_time.unknown):null)]);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"predict-prostate.components.button/horiz-radio-button-group");
predict_prostate.components.button.year_picker = rum.core.lazy_build(rum.core.build_defc,(function (ttt){
return predict_prostate.components.button.horiz_radio_button_group(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ttt","ttt",1858561240),ttt,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"result-year","result-year",1413238532),new cljs.core.Keyword(null,"values","values",372645556),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),"10"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(15),"15"], null)], null)], null),predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"result-year","result-year",1413238532)));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"predict-prostate.components.button/year-picker");
predict_prostate.components.button.radio_button_group_vertical = rum.core.lazy_build(rum.core.build_defc,(function (props,group_cursor){
return predict_prostate.components.button.radio_button_group(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertical","vertical",718696748),true], null)], 0)),group_cursor);
}),null,"predict-prostate.components.button/radio-button-group-vertical");
predict_prostate.components.button.small_help_button = rum.core.lazy_build(rum.core.build_defc,(function (p__33961){
var map__33962 = p__33961;
var map__33962__$1 = cljs.core.__destructure_map(map__33962);
var props = map__33962__$1;
var help_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33962__$1,new cljs.core.Keyword(null,"help-id","help-id",-1064550845));
var icon_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33962__$1,new cljs.core.Keyword(null,"icon-name","icon-name",152456315));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33962__$1,new cljs.core.Keyword(null,"title","title",636505583));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33962__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
return daiquiri.core.create_element("button",{'role':"button",'tabIndex':"0",'data-content':"Help TBD",'type':"button",'className':"btn btn-info btn-sm",'title':title,'style':{'cursor':"pointer",'padding':"0px 11px",'fontSize':"20px",'borderRadius':(15)},'aria-label':["info on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(text)].join(''),'onKeyDown':(function (p1__33960_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Enter",p1__33960_SHARP_.nativeEvent.code)){
return predict_prostate.state.run_time.help_key_change.pubsub$feeds$TopicFeed$publish$arity$2(null,help_id);
} else {
return null;
}
}),'data-target':"#topModal",'onClick':(function (){
return predict_prostate.state.run_time.help_key_change.pubsub$feeds$TopicFeed$publish$arity$2(null,help_id);
}),'data-toggle':"modal"},[graphics.simple_icons.icon(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"family","family",-1313145692),new cljs.core.Keyword(null,"fa","fa",484981183)], null),"info"),""]);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$], null),"predict-prostate.components.button/small-help-button");
predict_prostate.components.button.treatment_help_button = rum.core.lazy_build(rum.core.build_defc,(function (p__33965){
var map__33966 = p__33965;
var map__33966__$1 = cljs.core.__destructure_map(map__33966);
var props = map__33966__$1;
var help_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33966__$1,new cljs.core.Keyword(null,"help-id","help-id",-1064550845));
var icon_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33966__$1,new cljs.core.Keyword(null,"icon-name","icon-name",152456315));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33966__$1,new cljs.core.Keyword(null,"title","title",636505583));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33966__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
return daiquiri.core.create_element("button",{'role':"button",'tabIndex':"0",'data-content':"Help TBD",'type':"button",'className':"btn btn-info btn-sm",'title':title,'onKeyDown':(function (p1__33963_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Enter",p1__33963_SHARP_.nativeEvent.code)){
return predict_prostate.state.run_time.help_key_change.pubsub$feeds$TopicFeed$publish$arity$2(null,help_id);
} else {
return null;
}
}),'data-target':"#topModal",'onClick':(function (){
return predict_prostate.state.run_time.help_key_change.pubsub$feeds$TopicFeed$publish$arity$2(null,help_id);
}),'data-toggle':"modal"},[graphics.simple_icons.icon(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"family","family",-1313145692),new cljs.core.Keyword(null,"fa","fa",484981183)], null),"warning")," Potential harms"]);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$], null),"predict-prostate.components.button/treatment-help-button");
predict_prostate.components.button.settings_button = rum.core.lazy_build(rum.core.build_defc,(function (ttt){
var settings = "settings";
return daiquiri.core.create_element("button",{'role':"button",'tabIndex':"0",'data-content':"Settings content",'type':"button",'className':"btn btn-default",'title':"Settings",'onKeyDown':(function (p1__33967_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Enter",p1__33967_SHARP_.nativeEvent.code)){
return predict_prostate.state.run_time.settings_change.pubsub$feeds$TopicFeed$publish$arity$2(null,settings);
} else {
return null;
}
}),'data-target':"#settingsModal",'onClick':(function (){
return predict_prostate.state.run_time.settings_change.pubsub$feeds$TopicFeed$publish$arity$2(null,settings);
}),'data-toggle':"modal"},[graphics.simple_icons.icon(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"family","family",-1313145692),new cljs.core.Keyword(null,"fa","fa",484981183)], null),"cog")," ",daiquiri.interpreter.interpret((function (){var G__33969 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tool","settings","tool/settings",1559915107),"Settings"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33969) : ttt.call(null,G__33969));
})())]);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$], null),"predict-prostate.components.button/settings-button");
predict_prostate.components.button.print_button = rum.core.lazy_build(rum.core.build_defc,(function (ttt){
return daiquiri.core.create_element("button",{'role':"button",'tabIndex':"0",'data-content':"Print content",'type':"button",'className':"btn btn-danger btn-lg screen-only pull-right",'title':"Print Results",'style':{'marginRight':(15)},'aria-label':"show printable results",'onKeyDown':(function (p1__33972_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Enter",p1__33972_SHARP_.nativeEvent.code)){
return predict_prostate.state.run_time.print_change.pubsub$feeds$TopicFeed$publish$arity$2(null,"print");
} else {
return null;
}
}),'data-target':"#printModal",'onClick':(function (){
return predict_prostate.state.run_time.print_change.pubsub$feeds$TopicFeed$publish$arity$2(null,"print");
}),'data-toggle':"modal"},[graphics.simple_icons.icon(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"family","family",-1313145692),new cljs.core.Keyword(null,"fa","fa",484981183)], null),"print")," ",daiquiri.interpreter.interpret((function (){var G__33977 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("home","print-button","home/print-button",303249748),"Print"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33977) : ttt.call(null,G__33977));
})())]);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$], null),"predict-prostate.components.button/print-button");
predict_prostate.components.button.menu_item = (function predict_prostate$components$button$menu_item(item,lang){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return predict_prostate.state.run_time.language_change.pubsub$feeds$TopicFeed$publish$arity$2(null,lang);
})], null),item], null)], null);
});
predict_prostate.components.button.start_button = (function predict_prostate$components$button$start_button(ttt){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-primary.btn-lg","button.btn.btn-primary.btn-lg",613853517),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"aria-label","aria-label",455891514),"go to predict tool",new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return predict_prostate.state.run_time.route_change.pubsub$feeds$TopicFeed$publish$arity$2(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tool","tool",-1298696470),null,null], null));
})], null),graphics.simple_icons.icon(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"family","family",-1313145692),new cljs.core.Keyword(null,"fa","fa",484981183)], null),"chevron-right")," ",(function (){var G__33978 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("home","start-button","home/start-button",-934525868),"Start Predict"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33978) : ttt.call(null,G__33978));
})()], null);
});
predict_prostate.components.button.start_button_group = (function predict_prostate$components$button$start_button_group(ttt,supported_languages){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".btn-group",".btn-group",-850887226),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),(975),new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),(15),new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),(15),new cljs.core.Keyword(null,"margin-top","margin-top",392161226),(15)], null)], null),predict_prostate.components.button.start_button(ttt),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-default.btn-lg.dropdown-toggle","button.btn.btn-default.btn-lg.dropdown-toggle",539604190),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"data-toggle","data-toggle",436966687),"dropdown",new cljs.core.Keyword(null,"aria-haspopup","aria-haspopup",-1220141412),"true",new cljs.core.Keyword(null,"aria-expanded","aria-expanded",-1360942393),"false"], null),(function (){var G__33979 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("navbar","change-language","navbar/change-language",-1814466745),"Change Language"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33979) : ttt.call(null,G__33979));
})()," ",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.caret","span.caret",-1405994877)], null)], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.dropdown-menu.lang","ul.dropdown-menu.lang",-1120672871)], null),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (lang){
return predict_prostate.components.button.menu_item((function (){var G__33980 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lang], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33980) : ttt.call(null,G__33980));
})(),lang);
}),supported_languages))], null);
});

//# sourceMappingURL=predict_prostate.components.button.js.map
