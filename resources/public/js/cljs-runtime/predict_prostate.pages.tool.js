goog.provide('predict_prostate.pages.tool');
predict_prostate.pages.tool.clear_all_button = rum.core.lazy_build(rum.core.build_defc,(function (p__56903){
var map__56906 = p__56903;
var map__56906__$1 = cljs.core.__destructure_map(map__56906);
var props = map__56906__$1;
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56906__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
return daiquiri.core.create_element("button",{'onClick':on_click,'className':"btn navbar-btn btn-danger btn-lg"},[daiquiri.core.create_element("i",{'className':"fa fa-female"},null)," New Patient"]);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$], null),"predict-prostate.pages.tool/clear-all-button");
predict_prostate.pages.tool.titled_panel = rum.core.lazy_build(rum.core.build_defc,(function (p__56911,children){
var map__56912 = p__56911;
var map__56912__$1 = cljs.core.__destructure_map(map__56912);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56912__$1,new cljs.core.Keyword(null,"title","title",636505583));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56912__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var body_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56912__$1,new cljs.core.Keyword(null,"body-class","body-class",-633564203));
return daiquiri.core.create_element("div",{'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["panel","panel-default",["panel-default ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(body_class)].join('')], null))},[daiquiri.core.create_element("div",{'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["panel-heading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join('')], null))},[(function (){var attrs56914 = title;
return daiquiri.core.create_element("h3",((cljs.core.map_QMARK_(attrs56914))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["panel-title"], null)], null),attrs56914], 0))):{'className':"panel-title"}),((cljs.core.map_QMARK_(attrs56914))?null:[daiquiri.interpreter.interpret(attrs56914)]));
})()]),(function (){var attrs56913 = children;
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs56913))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["panel-body"], null)], null),attrs56913], 0))):{'className':"panel-body"}),((cljs.core.map_QMARK_(attrs56913))?null:[daiquiri.interpreter.interpret(attrs56913)]));
})()]);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$], null),"predict-prostate.pages.tool/titled-panel");
predict_prostate.pages.tool.titled_panel_STAR_ = rum.core.lazy_build(rum.core.build_defc,(function (p__56918,children){
var map__56919 = p__56918;
var map__56919__$1 = cljs.core.__destructure_map(map__56919);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56919__$1,new cljs.core.Keyword(null,"title","title",636505583));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56919__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var body_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56919__$1,new cljs.core.Keyword(null,"body-class","body-class",-633564203));
return daiquiri.core.create_element("div",{'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["panel","panel-default",["panel-default ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(body_class)].join('')], null))},[daiquiri.core.create_element("div",{'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["panel-heading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join('')], null))},[(function (){var attrs56921 = title;
return daiquiri.core.create_element("h3",((cljs.core.map_QMARK_(attrs56921))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["panel-title"], null)], null),attrs56921], 0))):{'className':"panel-title"}),((cljs.core.map_QMARK_(attrs56921))?null:[daiquiri.interpreter.interpret(attrs56921)]));
})()]),(function (){var attrs56920 = children;
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs56920))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["panel-body"], null)], null),attrs56920], 0))):{'className':"panel-body"}),((cljs.core.map_QMARK_(attrs56920))?null:[daiquiri.interpreter.interpret(attrs56920)]));
})()]);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$], null),"predict-prostate.pages.tool/titled-panel*");
predict_prostate.pages.tool.treatments_with_results = rum.core.lazy_build(rum.core.build_defc,(function (ttt){
var r = rum.core.react(predict_prostate.state.run_time.results_cursor);
var mets = rum.core.react(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"metastasis","metastasis",255525950)));
if(((cljs.core.not(cljs.core.seq(r))) || ((((r == null)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mets,new cljs.core.Keyword(null,"yes","yes",182838819))))))){
return daiquiri.core.create_element("div",{'className':"row"},[daiquiri.core.create_element("div",{'className':"col-sm-10 col-sm-offset-1 col-xs-12"},[daiquiri.core.create_element("div",{'style':{'backgroundColor':predict_prostate.results.util.alison_blue_1,'padding':"10px 10px 3px 10px",'marginBottom':(20)}},[daiquiri.core.create_element("div",{'style':{'color':predict_prostate.results.util.alison_blue_2,'fontSize':"20px"}},[daiquiri.core.create_element("p",{'style':{'paddingBottom':(0)}},[graphics.simple_icons.icon(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"family","family",-1313145692),new cljs.core.Keyword(null,"fa","fa",484981183),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(35),new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),(8)], null)], null),"info-circle")," ",daiquiri.interpreter.interpret((function (){var G__56923 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("twr","toarwa","twr/toarwa",-1670935684),"Treatment options and results will appear here when you have filled in all the information needed above."], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__56923) : ttt.call(null,G__56923));
})())])])])])]);
} else {
return daiquiri.core.create_element("div",{'className':"row"},[daiquiri.core.create_element("div",{'className':"col-md-12 screen-only"},[predict_prostate.layout.result_panel.results(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ttt","ttt",1858561240),ttt,new cljs.core.Keyword(null,"printable","printable",-928999004),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"print","print",1299562414),rum.core.react(predict_prostate.state.run_time.media_cursor))], null))]),daiquiri.core.create_element("div",{'className':"row"},[daiquiri.core.create_element("div",{'className':"col-md-10 col-md-offset-1"},[predict_prostate.results.sidefx.results_in_sidefx(ttt),predict_prostate.results.sidefx.sidefx_more_info(ttt)])])]);
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"predict-prostate.pages.tool/treatments-with-results");
predict_prostate.pages.tool.results_footer = rum.core.lazy_build(rum.core.build_defc,(function (ttt){
if(cljs.core.truth_(rum.core.react(predict_prostate.state.run_time.results_cursor))){
return daiquiri.core.create_element("div",{'className':"col-xs-12"},[daiquiri.core.create_element("div",{'style':{'backgroundColor':predict_prostate.results.util.alison_blue_1,'marginTop':(20)},'className':"row"},[daiquiri.core.create_element("div",{'style':{'marginTop':(20),'marginBottom':(20)},'className':"col-md-12 text-center"},[daiquiri.core.create_element("img",{'src':"assets/faq-icon.png",'alt':"faq icon",'aria-hidden':true},null),(function (){var attrs56929 = (function (){var G__56930 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("faqs","q1","faqs/q1",43329279),"Looking for advice?"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__56930) : ttt.call(null,G__56930));
})();
return daiquiri.core.create_element("h3",((cljs.core.map_QMARK_(attrs56929))?daiquiri.interpreter.element_attributes(attrs56929):null),((cljs.core.map_QMARK_(attrs56929))?null:[daiquiri.interpreter.interpret(attrs56929)]));
})(),daiquiri.core.create_element("button",{'onClick':(function (){
return predict_prostate.state.run_time.route_change.pubsub$feeds$TopicFeed$publish$arity$2(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"about","about",1423892543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"page","page",849072397),"faqs"], null),null], null));
}),'className':"btn btn-primary btn-lg"},[daiquiri.interpreter.interpret((function (){var G__56932 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rf","stf","rf/stf",-588923695),"See the FAQs"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__56932) : ttt.call(null,G__56932));
})())])])]),daiquiri.core.create_element("button",{'type':"button",'onClick':(function (){
return predict_prostate.state.run_time.print_change.pubsub$feeds$TopicFeed$publish$arity$2(null,"print");
}),'onKeyDown':(function (p1__56924_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Enter",p1__56924_SHARP_.nativeEvent.code)){
return predict_prostate.state.run_time.print_change.pubsub$feeds$TopicFeed$publish$arity$2(null,"print");
} else {
return null;
}
}),'style':{'color':"#ffffff",'top':(300),'borderBottomLeftRadius':(10),'width':"auto",'borderTopLeftRadius':(10),'opacity':0.5,'padding':"15px 5px 15px 5px",'right':(-1),'display':"inline-block",'position':"fixed",'fontSize':(16),'backgroundColor':"#444466"},'className':"btn screen-only"},[graphics.simple_icons.icon(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"family","family",-1313145692),new cljs.core.Keyword(null,"fa","fa",484981183)], null),"print")," ",daiquiri.interpreter.interpret((function (){var G__56934 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"print","print",1299562414),"Print"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__56934) : ttt.call(null,G__56934));
})())])]);
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"predict-prostate.pages.tool/results-footer");
predict_prostate.pages.tool.tool = rum.core.lazy_build(rum.core.build_defc,(function (ttt){
var vec__56935 = predict_prostate.content_reader.section.cljs$core$IFn$_invoke$arity$2(ttt,"tool-preamble");
var seq__56936 = cljs.core.seq(vec__56935);
var first__56937 = cljs.core.first(seq__56936);
var seq__56936__$1 = cljs.core.next(seq__56936);
var _ = first__56937;
var preamble = seq__56936__$1;
var modal_active = (function (){var or__4212__auto__ = rum.core.react(predict_prostate.state.run_time.settings_cursor);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return rum.core.react(predict_prostate.state.run_time.help_key_cursor);
}
})();
return daiquiri.core.create_element("div",{'className':"container-fluid"},[daiquiri.core.create_element("div",{'className':["row",(cljs.core.truth_(modal_active)?" modal-active":null)].join('')},[daiquiri.core.create_element("div",{'style':{'opacity':(1)},'className':"col-xs-12"},[predict_prostate.layout.header.header(ttt),daiquiri.core.create_element("div",{'id':"main-content",'tabIndex':(-1),'style':{'marginLeft':(-30),'marginRight':(-30)},'className':"row"},[daiquiri.core.create_element("div",{'className':"col-xs-12"},[daiquiri.core.create_element("div",{'style':{'position':"relative",'width':"100%",'backgroundColor':predict_prostate.results.util.alison_blue_1}},[daiquiri.core.create_element("div",{'style':{'position':"absolute",'width':"100%",'top':(0),'bottom':"20%",'opacity':0.25,'background':"linear-gradient(rgba(255,255,255,0), #fff)"}},null),daiquiri.core.create_element("div",{'className':"row screen-only"},[daiquiri.core.create_element("div",{'className':"col-sm-4 col-sm-offset-2"},[daiquiri.core.create_element("img",{'src':"assets/tool-banner.png",'alt':"Predict tool banner imagery",'aria-hidden':true,'style':{'marginLeft':"5%",'zoom':0.7},'className':"img-responsive"},null)]),daiquiri.core.create_element("div",{'className':"col-sm-6"},[daiquiri.core.create_element("div",{'className':"row"},[(function (){var attrs56942 = preamble;
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs56942))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["col-xs-8"], null)], null),attrs56942], 0))):{'className':"col-xs-8"}),((cljs.core.map_QMARK_(attrs56942))?null:[daiquiri.interpreter.interpret(attrs56942)]));
})(),daiquiri.core.create_element("div",{'className':"col-xs-4"},[daiquiri.core.create_element("div",{'style':{'margin':"40px 0 0 0px"}},[predict_prostate.components.button.settings_button(ttt)])])])])]),daiquiri.core.create_element("div",{'className':"row print-only"},[(function (){var attrs56943 = preamble;
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs56943))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["col-sm-10","col-sm-offset-1"], null)], null),attrs56943], 0))):{'className':"col-sm-10 col-sm-offset-1"}),((cljs.core.map_QMARK_(attrs56943))?null:[daiquiri.interpreter.interpret(attrs56943)]));
})()])])])]),daiquiri.core.create_element("div",{'className':"row screen-only"},[daiquiri.core.create_element("div",{'className':"col-md-10 col-md-offset-1"},[daiquiri.core.create_element("div",{'key':(2),'className':"row"},[daiquiri.core.create_element("div",{'style':{'marginBottom':(20)},'className':"col-xs-12"},[predict_prostate.layout.input_panels.inputs_row(ttt)])])])]),daiquiri.core.create_element("div",{'className':"row screen-only"},[daiquiri.core.create_element("div",{'style':{'backgroundColor':predict_prostate.results.util.alison_blue_4},'className':"col-sm-12"},[daiquiri.core.create_element("div",{'key':(3),'className':"row"},[daiquiri.core.create_element("div",{'key':(2),'className':"col-md-10 col-md-offset-1"},[predict_prostate.pages.tool.treatments_with_results(ttt)])])])])]),daiquiri.core.create_element("div",{'className':"screen-only"},[predict_prostate.pages.tool.results_footer(ttt),predict_prostate.layout.header.footer()])]),predict_prostate.components.bs3_modal.top_modal(ttt),predict_prostate.components.bs3_modal.settings_modal(ttt),predict_prostate.components.bs3_modal.print_modal(ttt),predict_prostate.components.bs3_modal.editor_modal()]);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"predict-prostate.pages.tool/tool");

//# sourceMappingURL=predict_prostate.pages.tool.js.map
