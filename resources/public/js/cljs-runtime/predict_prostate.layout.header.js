goog.provide('predict_prostate.layout.header');
predict_prostate.layout.header.NHS_blue = "#005FB4";
predict_prostate.layout.header.header_banner = rum.core.lazy_build(rum.core.build_defc,(function (ttt,banner_id){
var vec__33010 = predict_prostate.content_reader.section.cljs$core$IFn$_invoke$arity$2(ttt,banner_id);
var seq__33011 = cljs.core.seq(vec__33010);
var first__33012 = cljs.core.first(seq__33011);
var seq__33011__$1 = cljs.core.next(seq__33011);
var _ = first__33012;
var preamble = seq__33011__$1;
return daiquiri.core.create_element("div",{'style':{'marginLeft':(-30),'marginRight':(-30)},'className':"row"},[daiquiri.core.create_element("div",{'className':"col-xs-12"},[daiquiri.core.create_element("div",{'style':{'position':"relative",'width':"100%",'backgroundColor':predict_prostate.results.util.alison_blue_1}},[daiquiri.core.create_element("div",{'style':{'position':"absolute",'width':"100%",'top':(0),'bottom':"20%",'opacity':0.25,'background':"linear-gradient(rgba(255,255,255,0), #fff)"}},null),daiquiri.core.create_element("div",{'className':"row screen-only"},[daiquiri.core.create_element("div",{'className':"col-sm-12"},[daiquiri.core.create_element("div",{'style':{'backgroundColor':predict_prostate.results.util.alison_blue_1,'height':(30),'width':"100%"}},[])])])])])]);
}),null,"predict-prostate.layout.header/header-banner");
predict_prostate.layout.header.footer_banner = rum.core.lazy_build(rum.core.build_defc,(function (ttt){
return daiquiri.core.create_element("div",{'style':{'backgroundColor':predict_prostate.results.util.alison_blue_1,'paddingTop':(20),'paddingBottom':(20),'marginTop':(20),'marginBottom':(0)},'className':"row screen-only"},[daiquiri.core.create_element("div",{'className':"col-md-3 col-md-offset-2 text-center"},[daiquiri.core.create_element("img",{'src':"/assets/tool-icon.png",'alt':"tool-icon",'aria-hidden':true},null),(function (){var attrs33023 = (function (){var G__33031 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fb","wtupp-title","fb/wtupp-title",-1414474898),"Want to use Predict Prostate?"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33031) : ttt.call(null,G__33031));
})();
return daiquiri.core.create_element("h3",((cljs.core.map_QMARK_(attrs33023))?daiquiri.interpreter.element_attributes(attrs33023):null),((cljs.core.map_QMARK_(attrs33023))?null:[daiquiri.interpreter.interpret(attrs33023)]));
})(),(function (){var attrs33030 = (function (){var G__33032 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fb","wtupp-text1","fb/wtupp-text1",-1300454758),"This tool helps to understand how treatments for prostate cancer may improve survival rates after diagnosis."], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33032) : ttt.call(null,G__33032));
})();
return daiquiri.core.create_element("p",((cljs.core.map_QMARK_(attrs33030))?daiquiri.interpreter.element_attributes(attrs33030):null),((cljs.core.map_QMARK_(attrs33030))?null:[daiquiri.interpreter.interpret(attrs33030)]));
})(),daiquiri.interpreter.interpret(predict_prostate.components.button.start_button(ttt))]),daiquiri.core.create_element("div",{'style':{'marginTop':"20px"},'className':"col-md-3 col-md-offset-2 text-center"},[daiquiri.core.create_element("img",{'src':"/assets/faq-icon.png",'alt':"faq-icon",'aria-hidden':true},null),(function (){var attrs33040 = (function (){var G__33044 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fb","sttt-title","fb/sttt-title",-55013877),"Someone to talk to?"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33044) : ttt.call(null,G__33044));
})();
return daiquiri.core.create_element("h3",((cljs.core.map_QMARK_(attrs33040))?daiquiri.interpreter.element_attributes(attrs33040):null),((cljs.core.map_QMARK_(attrs33040))?null:[daiquiri.interpreter.interpret(attrs33040)]));
})(),(function (){var attrs33043 = (function (){var G__33045 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fb","sttt-text1","fb/sttt-text1",-1075642630),"If you are fighting cancer, it\u2019s often easier with support. Here, you can find further information and links."], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33045) : ttt.call(null,G__33045));
})();
return daiquiri.core.create_element("p",((cljs.core.map_QMARK_(attrs33043))?daiquiri.interpreter.element_attributes(attrs33043):null),((cljs.core.map_QMARK_(attrs33043))?null:[daiquiri.interpreter.interpret(attrs33043)]));
})(),daiquiri.core.create_element("button",{'onClick':(function (){
return predict_prostate.state.run_time.route_change.pubsub$feeds$TopicFeed$publish$arity$2(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"about","about",1423892543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"page","page",849072397),"faqs"], null),null], null));
}),'className':"btn btn-danger btn-lg"},[daiquiri.interpreter.interpret((function (){var G__33047 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fb","sl","fb/sl",1007548333),"Support Links"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__33047) : ttt.call(null,G__33047));
})())])])]);
}),null,"predict-prostate.layout.header/footer-banner");
predict_prostate.layout.header.skip_to = (function predict_prostate$layout$header$skip_to(content_id){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".row.screen-only",".row.screen-only",-2115519411),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".col-sm-11.col-xs-12.skip",".col-sm-11.col-xs-12.skip",-1029820403),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.pull-right","a.pull-right",1072084270),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tab-index","tab-index",895755393),(0),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on-key-press","on-key-press",-399563677),(function (p1__33048_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__33048_SHARP_.nativeEvent.key,"Enter")){
$(content_id).focus();

return false;
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
$(content_id).focus();

return false;
})], null),"Skip to main content"], null)], null)], null);
});
predict_prostate.layout.header.header = rum.core.lazy_build(rum.core.build_defc,(function (ttt){
return daiquiri.core.create_element("div",{'className':"row"},[daiquiri.core.create_element("div",{'className':"col-sm-10 col-sm-offset-1 col-xs-12"},[daiquiri.core.create_element("img",{'src':"/assets/NHS.jpg",'alt':"NHS logo",'style':{'width':"85px",'marginTop':"30px",'marginBottom':"38px"},'className':"img-responsive pull-right"},null),daiquiri.core.create_element("img",{'src':"/assets/prostate-angle-man_1.png",'alt':"Predict prostate logo",'style':{'width':"180px",'marginTop':"13px",'marginBottom':"6px"},'className':"img-responsive"},null)]),(function (){var attrs33051 = predict_prostate.layout.header.skip_to("#main-content");
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs33051))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["col-xs-12"], null)], null),attrs33051], 0))):{'className':"col-xs-12"}),((cljs.core.map_QMARK_(attrs33051))?[predict_prostate.components.bs3_navbar.hamburger_navbar(ttt)]:[daiquiri.interpreter.interpret(attrs33051),predict_prostate.components.bs3_navbar.hamburger_navbar(ttt)]));
})()]);
}),null,"predict-prostate.layout.header/header");
predict_prostate.layout.header.footer = rum.core.lazy_build(rum.core.build_defc,(function (){
return daiquiri.core.create_element("div",null,[daiquiri.core.create_element("div",{'className':"row print-only"},[daiquiri.core.create_element("div",{'className':"col-xs-12"},[daiquiri.core.create_element("img",{'src':"/assets/print-footer.png",'alt':"Footer Logo"},null)])]),daiquiri.core.create_element("div",{'style':{'clear':"both",'color':"white"},'className':"row screen-only"},[daiquiri.core.create_element("div",{'style':{'width':"100%",'minHeight':"200px",'backgroundColor':"#1F3754",'borderRadius':"0px",'padding':"30px"},'className':"col footer"},[daiquiri.core.create_element("div",{'className':"row"},[daiquiri.core.create_element("div",{'className':"col-sm-10 col-sm-offset-1"},[daiquiri.core.create_element("div",{'className':"row"},[daiquiri.core.create_element("div",{'className':"col-sm-4"},[daiquiri.core.create_element("img",{'src':"/assets/phe-neg.png",'alt':"Public Health Logo",'style':{'marginTop':(10),'marginLeft':"auto",'marginRight':"auto",'maxWidth':"120px"},'className':"img-responsive"},null)]),daiquiri.core.create_element("div",{'className':"col-sm-4"},[daiquiri.core.create_element("img",{'src':"/assets/urology-white-text.png",'alt':"University of Cam Urology Group Logo",'style':{'marginTop':(10),'marginLeft':"auto",'marginRight':"auto",'maxWidth':"175px"},'className':"img-responsive"},null)]),daiquiri.core.create_element("div",{'className':"col-sm-4"},[daiquiri.core.create_element("img",{'src':"/assets/ucs-winton-transparent.png",'alt':"Winton Centre Logo",'style':{'marginTop':(10),'marginLeft':"auto",'marginRight':"auto",'maxWidth':"175px"},'className':"img-responsive"},null)])])])])])]),daiquiri.core.create_element("div",{'className':"row copy-footer-container"},[daiquiri.core.create_element("div",{'className':"col-lg-9 col-md-6 col-md-offset-3 col-lg-offset-1 copy-footer"},[["Copyright \u24B8 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).getFullYear())," University of Cambridge. All Rights Reserved | "].join(''),daiquiri.core.create_element("a",{'onClick':(function (){
return predict_prostate.state.run_time.route_change.pubsub$feeds$TopicFeed$publish$arity$2(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"legal","legal",302401964),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"page","page",849072397),"privacy"], null),null], null));
}),'href':"javascript:void(0)"},["Privacy & Data Protection"])," | ",daiquiri.core.create_element("a",{'onClick':(function (){
return predict_prostate.state.run_time.route_change.pubsub$feeds$TopicFeed$publish$arity$2(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"legal","legal",302401964),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"page","page",849072397),"disclaimer"], null),null], null));
}),'href':"javascript:void(0)"},["Disclaimer"])]),daiquiri.core.create_element("div",{'className':"col-xs-12 build-version"},[daiquiri.core.create_element("img",{'style':{'width':(40),'marginRight':(5),'border':"none"},'alt':"LOT mark",'src':"/assets/lot2.png"},null),"v-0.0-0.00-0-hash",daiquiri.core.create_element("img",{'style':{'width':(30),'marginLeft':(10),'marginRight':(5),'border':"none"},'alt':"CE mark",'src':"/assets/ce2.png"},null)])])]);
}),null,"predict-prostate.layout.header/footer");

//# sourceMappingURL=predict_prostate.layout.header.js.map
