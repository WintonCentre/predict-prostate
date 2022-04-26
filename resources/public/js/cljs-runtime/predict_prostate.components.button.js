goog.provide('predict_prostate.components.button');
predict_prostate.components.button.information = rum.core.lazy_build(rum.core.build_defc,(function (p__42996,_){
var map__42997 = p__42996;
var map__42997__$1 = cljs.core.__destructure_map(map__42997);
var values = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42997__$1,new cljs.core.Keyword(null,"values","values",372645556));
var ttt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42997__$1,new cljs.core.Keyword(null,"ttt","ttt",1858561240));
var ttt_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42997__$1,new cljs.core.Keyword(null,"ttt-key","ttt-key",-171752593));
return daiquiri.core.create_element("div",null,[daiquiri.core.create_element("div",null,[(function (){var attrs43004 = (function (){var G__43005 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ttt_key,values], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__43005) : ttt.call(null,G__43005));
})();
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs43004))?daiquiri.interpreter.element_attributes(attrs43004):null),((cljs.core.map_QMARK_(attrs43004))?null:[daiquiri.interpreter.interpret(attrs43004)]));
})()])]);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"predict-prostate.components.button/information");
predict_prostate.components.button.button_label = (function predict_prostate$components$button$button_label(t,k,label){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(["button/",cljs.core.name(new cljs.core.Keyword(null,"topic","topic",-1960480691).cljs$core$IFn$_invoke$arity$1(t)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1((((k instanceof cljs.core.Keyword))?cljs.core.name(k):((typeof k === 'number')?["n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join(''):k)))].join('')),label], null);
});
predict_prostate.components.button.toggle_button = rum.core.lazy_build(rum.core.build_defc,(function (p__43018,label){
var map__43019 = p__43018;
var map__43019__$1 = cljs.core.__destructure_map(map__43019);
var ttt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43019__$1,new cljs.core.Keyword(null,"ttt","ttt",1858561240));
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43019__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43019__$1,new cljs.core.Keyword(null,"value","value",305978217));
var topic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43019__$1,new cljs.core.Keyword(null,"topic","topic",-1960480691));
var disabled = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__43019__$1,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),false);
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
return daiquiri.core.create_element("button",{'className':["btn btn-default btn-sm custom",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,value))?" active":"")].join(''),'disabled':disabled,'type':"button",'key':label,'onKeyDown':(function (p1__43017_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__43017_SHARP_.nativeEvent.code,"Enter")){
return handler();
} else {
return null;
}
}),'onClick':handler},[((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"result-year","result-year",1413238532),new cljs.core.Keyword(null,"topic","topic",-1960480691).cljs$core$IFn$_invoke$arity$1(topic)))?(function (){var attrs43030 = label;
return daiquiri.core.create_element("b",((cljs.core.map_QMARK_(attrs43030))?daiquiri.interpreter.element_attributes(attrs43030):null),((cljs.core.map_QMARK_(attrs43030))?null:[daiquiri.interpreter.interpret(attrs43030)]));
})():daiquiri.interpreter.interpret((function (){var G__43032 = predict_prostate.components.button.button_label(topic,key,label);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__43032) : ttt.call(null,G__43032));
})()))]);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$], null),"predict-prostate.components.button/toggle-button");
predict_prostate.components.button.radio_button_group = rum.core.lazy_build(rum.core.build_defc,(function (p__43037,group_cursor){
var map__43038 = p__43037;
var map__43038__$1 = cljs.core.__destructure_map(map__43038);
var ttt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43038__$1,new cljs.core.Keyword(null,"ttt","ttt",1858561240));
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43038__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var aria_label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43038__$1,new cljs.core.Keyword(null,"aria-label","aria-label",455891514));
var aria_describedby = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43038__$1,new cljs.core.Keyword(null,"aria-describedby","aria-describedby",1826540471));
var values = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43038__$1,new cljs.core.Keyword(null,"values","values",372645556));
var unknowable = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43038__$1,new cljs.core.Keyword(null,"unknowable","unknowable",1635948924));
var vertical = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43038__$1,new cljs.core.Keyword(null,"vertical","vertical",718696748));
var group_value = rum.core.react(group_cursor);
return daiquiri.core.create_element("div",null,[daiquiri.core.create_element("div",null,[daiquiri.core.create_element("div",{'role':"group",'aria-label':aria_label,'aria-describedby':aria_describedby,'className':["btn-group",(cljs.core.truth_(vertical)?"-vertical":"")].join('')},[daiquiri.interpreter.interpret(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__43050){
var vec__43051 = p__43050;
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43051,(0),null);
var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43051,(1),null);
return rum.core.with_key(predict_prostate.components.button.toggle_button(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"ttt","ttt",1858561240),ttt,new cljs.core.Keyword(null,"key","key",-1516042587),val,new cljs.core.Keyword(null,"value","value",305978217),group_value,new cljs.core.Keyword(null,"topic","topic",-1960480691),predict_prostate.state.run_time.input_change(key),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(group_value,new cljs.core.Keyword(null,"disabled","disabled",-1529784218))], null),label),label);
}),values)),(cljs.core.truth_(unknowable)?predict_prostate.components.button.toggle_button(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"ttt","ttt",1858561240),ttt,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"unknown","unknown",-935977881),new cljs.core.Keyword(null,"value","value",305978217),group_value,new cljs.core.Keyword(null,"topic","topic",-1960480691),predict_prostate.state.run_time.input_change(key),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(group_value,new cljs.core.Keyword(null,"disabled","disabled",-1529784218))], null),predict_prostate.state.run_time.unknown):null)])])]);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"predict-prostate.components.button/radio-button-group");
predict_prostate.components.button.horiz_radio_button_group = rum.core.lazy_build(rum.core.build_defc,(function (p__43054,group_cursor){
var map__43055 = p__43054;
var map__43055__$1 = cljs.core.__destructure_map(map__43055);
var ttt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43055__$1,new cljs.core.Keyword(null,"ttt","ttt",1858561240));
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43055__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var aria_label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43055__$1,new cljs.core.Keyword(null,"aria-label","aria-label",455891514));
var aria_describedby = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43055__$1,new cljs.core.Keyword(null,"aria-describedby","aria-describedby",1826540471));
var values = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43055__$1,new cljs.core.Keyword(null,"values","values",372645556));
var unknowable = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43055__$1,new cljs.core.Keyword(null,"unknowable","unknowable",1635948924));
var group_value = rum.core.react(group_cursor);
return daiquiri.core.create_element("div",{'role':"group",'aria-label':aria_label,'aria-describedby':aria_describedby,'style':{'display':"inline-block"},'className':"btn-group"},[daiquiri.interpreter.interpret(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__43066){
var vec__43069 = p__43066;
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43069,(0),null);
var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43069,(1),null);
return rum.core.with_key(predict_prostate.components.button.toggle_button(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ttt","ttt",1858561240),ttt,new cljs.core.Keyword(null,"key","key",-1516042587),val,new cljs.core.Keyword(null,"value","value",305978217),group_value,new cljs.core.Keyword(null,"topic","topic",-1960480691),predict_prostate.state.run_time.input_change(key)], null),label),label);
}),values)),(cljs.core.truth_(unknowable)?predict_prostate.components.button.toggle_button(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ttt","ttt",1858561240),ttt,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"unknown","unknown",-935977881),new cljs.core.Keyword(null,"value","value",305978217),group_value,new cljs.core.Keyword(null,"topic","topic",-1960480691),predict_prostate.state.run_time.input_change(key)], null),predict_prostate.state.run_time.unknown):null)]);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"predict-prostate.components.button/horiz-radio-button-group");
predict_prostate.components.button.year_picker = rum.core.lazy_build(rum.core.build_defc,(function (ttt){
return predict_prostate.components.button.horiz_radio_button_group(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ttt","ttt",1858561240),ttt,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"result-year","result-year",1413238532),new cljs.core.Keyword(null,"values","values",372645556),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),"10"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(15),"15"], null)], null)], null),predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"result-year","result-year",1413238532)));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"predict-prostate.components.button/year-picker");
predict_prostate.components.button.radio_button_group_vertical = rum.core.lazy_build(rum.core.build_defc,(function (props,group_cursor){
return predict_prostate.components.button.radio_button_group(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertical","vertical",718696748),true], null)], 0)),group_cursor);
}),null,"predict-prostate.components.button/radio-button-group-vertical");
predict_prostate.components.button.small_help_button = rum.core.lazy_build(rum.core.build_defc,(function (p__43075){
var map__43076 = p__43075;
var map__43076__$1 = cljs.core.__destructure_map(map__43076);
var props = map__43076__$1;
var help_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43076__$1,new cljs.core.Keyword(null,"help-id","help-id",-1064550845));
var icon_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43076__$1,new cljs.core.Keyword(null,"icon-name","icon-name",152456315));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43076__$1,new cljs.core.Keyword(null,"title","title",636505583));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43076__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
return daiquiri.core.create_element("button",{'role':"button",'tabIndex':"0",'data-content':"Help TBD",'type':"button",'className':"btn btn-info btn-sm",'title':title,'style':{'cursor':"pointer",'padding':"0px 11px",'fontSize':"20px",'borderRadius':(15)},'aria-label':["info on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(text)].join(''),'onKeyDown':(function (p1__43073_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Enter",p1__43073_SHARP_.nativeEvent.code)){
return predict_prostate.state.run_time.help_key_change.pubsub$feeds$TopicFeed$publish$arity$2(null,help_id);
} else {
return null;
}
}),'data-target':"#topModal",'onClick':(function (){
return predict_prostate.state.run_time.help_key_change.pubsub$feeds$TopicFeed$publish$arity$2(null,help_id);
}),'data-toggle':"modal"},[graphics.simple_icons.icon(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"family","family",-1313145692),new cljs.core.Keyword(null,"fa","fa",484981183)], null),"info"),""]);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$], null),"predict-prostate.components.button/small-help-button");
predict_prostate.components.button.treatment_help_button = rum.core.lazy_build(rum.core.build_defc,(function (p__43078){
var map__43079 = p__43078;
var map__43079__$1 = cljs.core.__destructure_map(map__43079);
var props = map__43079__$1;
var help_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43079__$1,new cljs.core.Keyword(null,"help-id","help-id",-1064550845));
var icon_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43079__$1,new cljs.core.Keyword(null,"icon-name","icon-name",152456315));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43079__$1,new cljs.core.Keyword(null,"title","title",636505583));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43079__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
return daiquiri.core.create_element("button",{'role':"button",'tabIndex':"0",'data-content':"Help TBD",'type':"button",'className':"btn btn-info btn-sm",'title':title,'onKeyDown':(function (p1__43077_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Enter",p1__43077_SHARP_.nativeEvent.code)){
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
return daiquiri.core.create_element("button",{'role':"button",'tabIndex':"0",'data-content':"Settings content",'type':"button",'className':"btn btn-default",'title':"Settings",'onKeyDown':(function (p1__43081_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Enter",p1__43081_SHARP_.nativeEvent.code)){
return predict_prostate.state.run_time.settings_change.pubsub$feeds$TopicFeed$publish$arity$2(null,settings);
} else {
return null;
}
}),'data-target':"#settingsModal",'onClick':(function (){
return predict_prostate.state.run_time.settings_change.pubsub$feeds$TopicFeed$publish$arity$2(null,settings);
}),'data-toggle':"modal"},[graphics.simple_icons.icon(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"family","family",-1313145692),new cljs.core.Keyword(null,"fa","fa",484981183)], null),"cog")," ",daiquiri.interpreter.interpret((function (){var G__43097 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tool","settings","tool/settings",1559915107),"Settings"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__43097) : ttt.call(null,G__43097));
})())]);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$], null),"predict-prostate.components.button/settings-button");
predict_prostate.components.button.print_button = rum.core.lazy_build(rum.core.build_defc,(function (ttt){
return daiquiri.core.create_element("button",{'role':"button",'tabIndex':"0",'data-content':"Print content",'type':"button",'className':"btn btn-danger btn-lg screen-only pull-right",'title':"Print Results",'style':{'marginRight':(15)},'aria-label':"show printable results",'onKeyDown':(function (p1__43101_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Enter",p1__43101_SHARP_.nativeEvent.code)){
return predict_prostate.state.run_time.print_change.pubsub$feeds$TopicFeed$publish$arity$2(null,"print");
} else {
return null;
}
}),'data-target':"#printModal",'onClick':(function (){
return predict_prostate.state.run_time.print_change.pubsub$feeds$TopicFeed$publish$arity$2(null,"print");
}),'data-toggle':"modal"},[graphics.simple_icons.icon(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"family","family",-1313145692),new cljs.core.Keyword(null,"fa","fa",484981183)], null),"print")," ",daiquiri.interpreter.interpret((function (){var G__43106 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("home","print-button","home/print-button",303249748),"Print"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__43106) : ttt.call(null,G__43106));
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
})], null),graphics.simple_icons.icon(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"family","family",-1313145692),new cljs.core.Keyword(null,"fa","fa",484981183)], null),"chevron-right")," ",(function (){var G__43113 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("home","start-button","home/start-button",-934525868),"Start Predict"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__43113) : ttt.call(null,G__43113));
})()], null);
});
predict_prostate.components.button.start_button_group = (function predict_prostate$components$button$start_button_group(ttt,supported_languages){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".btn-group",".btn-group",-850887226),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),(975),new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),(15),new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),(15),new cljs.core.Keyword(null,"margin-top","margin-top",392161226),(15)], null)], null),predict_prostate.components.button.start_button(ttt),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-default.btn-lg.dropdown-toggle","button.btn.btn-default.btn-lg.dropdown-toggle",539604190),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"data-toggle","data-toggle",436966687),"dropdown",new cljs.core.Keyword(null,"aria-haspopup","aria-haspopup",-1220141412),"true",new cljs.core.Keyword(null,"aria-expanded","aria-expanded",-1360942393),"false"], null),(function (){var G__43122 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("navbar","change-language","navbar/change-language",-1814466745),"Change Language"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__43122) : ttt.call(null,G__43122));
})()," ",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.caret","span.caret",-1405994877)], null)], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.dropdown-menu.lang","ul.dropdown-menu.lang",-1120672871)], null),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (lang){
return predict_prostate.components.button.menu_item((function (){var G__43123 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lang], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__43123) : ttt.call(null,G__43123));
})(),lang);
}),supported_languages))], null);
});

//# sourceMappingURL=predict_prostate.components.button.js.map
