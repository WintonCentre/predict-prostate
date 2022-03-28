goog.provide('predict_prostate.layout.header');
predict_prostate.layout.header.NHS_blue = "#005FB4";
predict_prostate.layout.header.header_banner = rum.core.lazy_build(rum.core.build_defc,(function (ttt,banner_id){
var vec__34691 = predict_prostate.content_reader.section.cljs$core$IFn$_invoke$arity$2(ttt,banner_id);
var seq__34692 = cljs.core.seq(vec__34691);
var first__34693 = cljs.core.first(seq__34692);
var seq__34692__$1 = cljs.core.next(seq__34692);
var _ = first__34693;
var preamble = seq__34692__$1;
return daiquiri.core.create_element("div",{'style':{'marginLeft':(-30),'marginRight':(-30)},'className':"row"},[daiquiri.core.create_element("div",{'className':"col-xs-12"},[daiquiri.core.create_element("div",{'style':{'position':"relative",'width':"100%",'backgroundColor':predict_prostate.results.util.alison_blue_1}},[daiquiri.core.create_element("div",{'style':{'position':"absolute",'width':"100%",'top':(0),'bottom':"20%",'opacity':0.25,'background':"linear-gradient(rgba(255,255,255,0), #fff)"}},null),daiquiri.core.create_element("div",{'className':"row screen-only"},[daiquiri.core.create_element("div",{'className':"col-sm-12"},[daiquiri.core.create_element("div",{'style':{'backgroundColor':predict_prostate.results.util.alison_blue_1,'height':(30),'width':"100%"}},[])])])])])]);
}),null,"predict-prostate.layout.header/header-banner");
predict_prostate.layout.header.footer_banner = rum.core.lazy_build(rum.core.build_defc,(function (ttt){
return daiquiri.core.create_element("div",{'style':{'backgroundColor':predict_prostate.results.util.alison_blue_1,'paddingTop':(20),'paddingBottom':(20),'marginTop':(20),'marginBottom':(0)},'className':"row screen-only"},[daiquiri.core.create_element("div",{'className':"col-md-3 col-md-offset-2 text-center"},[daiquiri.core.create_element("img",{'src':"/assets/tool-icon.png",'alt':"tool-icon",'aria-hidden':true},null),(function (){var attrs34712 = (function (){var G__34716 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fb","wtupp-title","fb/wtupp-title",-1414474898),"Want to use Predict Prostate?"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__34716) : ttt.call(null,G__34716));
})();
return daiquiri.core.create_element("h3",((cljs.core.map_QMARK_(attrs34712))?daiquiri.interpreter.element_attributes(attrs34712):null),((cljs.core.map_QMARK_(attrs34712))?null:[daiquiri.interpreter.interpret(attrs34712)]));
})(),(function (){var attrs34715 = (function (){var G__34717 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fb","wtupp-text1","fb/wtupp-text1",-1300454758),"This tool helps to understand how treatments for prostate cancer may improve survival rates after diagnosis."], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__34717) : ttt.call(null,G__34717));
})();
return daiquiri.core.create_element("p",((cljs.core.map_QMARK_(attrs34715))?daiquiri.interpreter.element_attributes(attrs34715):null),((cljs.core.map_QMARK_(attrs34715))?null:[daiquiri.interpreter.interpret(attrs34715)]));
})(),daiquiri.interpreter.interpret(predict_prostate.components.button.start_button(ttt))]),daiquiri.core.create_element("div",{'style':{'marginTop':"20px"},'className':"col-md-3 col-md-offset-2 text-center"},[daiquiri.core.create_element("img",{'src':"/assets/faq-icon.png",'alt':"faq-icon",'aria-hidden':true},null),(function (){var attrs34725 = (function (){var G__34732 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fb","sttt-title","fb/sttt-title",-55013877),"Someone to talk to?"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__34732) : ttt.call(null,G__34732));
})();
return daiquiri.core.create_element("h3",((cljs.core.map_QMARK_(attrs34725))?daiquiri.interpreter.element_attributes(attrs34725):null),((cljs.core.map_QMARK_(attrs34725))?null:[daiquiri.interpreter.interpret(attrs34725)]));
})(),(function (){var attrs34731 = (function (){var G__34733 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fb","sttt-text1","fb/sttt-text1",-1075642630),"If you are fighting cancer, it\u2019s often easier with support. Here, you can find further information and links."], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__34733) : ttt.call(null,G__34733));
})();
return daiquiri.core.create_element("p",((cljs.core.map_QMARK_(attrs34731))?daiquiri.interpreter.element_attributes(attrs34731):null),((cljs.core.map_QMARK_(attrs34731))?null:[daiquiri.interpreter.interpret(attrs34731)]));
})(),daiquiri.core.create_element("button",{'onClick':(function (){
return predict_prostate.state.run_time.route_change.pubsub$feeds$TopicFeed$publish$arity$2(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"about","about",1423892543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"page","page",849072397),"faqs"], null),null], null));
}),'className':"btn btn-danger btn-lg"},[daiquiri.interpreter.interpret((function (){var G__34735 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fb","sl","fb/sl",1007548333),"Support Links"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__34735) : ttt.call(null,G__34735));
})())])])]);
}),null,"predict-prostate.layout.header/footer-banner");
predict_prostate.layout.header.skip_to = (function predict_prostate$layout$header$skip_to(content_id){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".row.screen-only",".row.screen-only",-2115519411),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".col-sm-11.col-xs-12.skip",".col-sm-11.col-xs-12.skip",-1029820403),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.pull-right","a.pull-right",1072084270),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tab-index","tab-index",895755393),(0),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on-key-press","on-key-press",-399563677),(function (p1__34736_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__34736_SHARP_.nativeEvent.key,"Enter")){
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
return daiquiri.core.create_element("div",{'className':"row"},[daiquiri.core.create_element("div",{'className':"col-sm-10 col-sm-offset-1 col-xs-12"},[daiquiri.core.create_element("img",{'src':"/assets/NHS.jpg",'alt':"NHS logo",'style':{'width':"85px",'marginTop':"30px",'marginBottom':"38px"},'className':"img-responsive pull-right"},null),daiquiri.core.create_element("img",{'src':"/assets/prostate-angle-man_1.png",'alt':"Predict prostate logo",'style':{'width':"180px",'marginTop':"13px",'marginBottom':"6px"},'className':"img-responsive"},null)]),(function (){var attrs34739 = predict_prostate.layout.header.skip_to("#main-content");
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs34739))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["col-xs-12"], null)], null),attrs34739], 0))):{'className':"col-xs-12"}),((cljs.core.map_QMARK_(attrs34739))?[predict_prostate.components.bs3_navbar.hamburger_navbar(ttt)]:[daiquiri.interpreter.interpret(attrs34739),predict_prostate.components.bs3_navbar.hamburger_navbar(ttt)]));
})()]);
}),null,"predict-prostate.layout.header/header");
predict_prostate.layout.header.footer = rum.core.lazy_build(rum.core.build_defc,(function (){
return daiquiri.core.create_element("div",null,[daiquiri.core.create_element("div",{'className':"row print-only"},[daiquiri.core.create_element("div",{'className':"col-xs-12"},[daiquiri.core.create_element("img",{'src':"/assets/print-footer.png",'alt':"Footer Logo"},null)])]),daiquiri.core.create_element("div",{'style':{'clear':"both",'color':"white"},'className':"row screen-only"},[daiquiri.core.create_element("div",{'style':{'width':"100%",'minHeight':"200px",'backgroundColor':"#1F3754",'borderRadius':"0px",'padding':"30px"},'className':"col footer"},[daiquiri.core.create_element("div",{'className':"row"},[daiquiri.core.create_element("div",{'className':"col-sm-10 col-sm-offset-1"},[daiquiri.core.create_element("div",{'className':"row"},[daiquiri.core.create_element("div",{'className':"col-sm-4"},[daiquiri.core.create_element("img",{'src':"/assets/phe-neg.png",'alt':"Public Health Logo",'style':{'marginTop':(10),'marginLeft':"auto",'marginRight':"auto",'maxWidth':"120px"},'className':"img-responsive"},null)]),daiquiri.core.create_element("div",{'className':"col-sm-4"},[daiquiri.core.create_element("img",{'src':"/assets/urology-white-text.png",'alt':"University of Cam Urology Group Logo",'style':{'marginTop':(10),'marginLeft':"auto",'marginRight':"auto",'maxWidth':"175px"},'className':"img-responsive"},null)]),daiquiri.core.create_element("div",{'className':"col-sm-4"},[daiquiri.core.create_element("img",{'src':"/assets/ucs-winton-transparent.png",'alt':"Winton Centre Logo",'style':{'marginTop':(10),'marginLeft':"auto",'marginRight':"auto",'maxWidth':"175px"},'className':"img-responsive"},null)])])])])])]),daiquiri.core.create_element("div",{'className':"row copy-footer-container"},[daiquiri.core.create_element("div",{'className':"col-lg-9 col-md-6 col-md-offset-3 col-lg-offset-1 copy-footer"},[["Copyright \u24B8 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).getFullYear())," University of Cambridge. All Rights Reserved | "].join(''),daiquiri.core.create_element("a",{'onClick':(function (){
return predict_prostate.state.run_time.route_change.pubsub$feeds$TopicFeed$publish$arity$2(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"legal","legal",302401964),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"page","page",849072397),"privacy"], null),null], null));
}),'href':"javascript:void(0)"},["Privacy & Data Protection"])," | ",daiquiri.core.create_element("a",{'onClick':(function (){
return predict_prostate.state.run_time.route_change.pubsub$feeds$TopicFeed$publish$arity$2(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"legal","legal",302401964),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"page","page",849072397),"disclaimer"], null),null], null));
}),'href':"javascript:void(0)"},["Disclaimer"])]),daiquiri.core.create_element("div",{'className':"col-lg-12 build-version pull-right"},[daiquiri.core.create_element("img",{'style':{'width':(40),'marginRight':(5),'border':"none"},'alt':"LOT mark",'src':"/assets/lot2.png"},null),"v-0.0-0.00-0-hash",daiquiri.core.create_element("img",{'style':{'width':(30),'marginLeft':(10),'marginRight':(5),'border':"none"},'alt':"CE mark",'src':"/assets/ce2.png"},null)])])]);
}),null,"predict-prostate.layout.header/footer");

//# sourceMappingURL=predict_prostate.layout.header.js.map
