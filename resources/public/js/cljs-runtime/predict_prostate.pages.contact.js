goog.provide('predict_prostate.pages.contact');
predict_prostate.pages.contact.contact = rum.core.lazy_build(rum.core.build_defc,(function (ttt,_){
return daiquiri.core.create_element("div",{'className':"container-fluid"},[predict_prostate.layout.header.header(ttt),predict_prostate.layout.header.header_banner(ttt,"contact-preamble"),daiquiri.core.create_element("div",{'id':"main-content",'tabIndex':(-1),'className':"row"},[daiquiri.core.create_element("div",{'style':{'minHeight':"calc(100vh - 700px)"},'className':"col-sm-10 col-sm-offset-1 col-lg-8 col-lg-offset-2"},[daiquiri.interpreter.interpret(predict_prostate.content_reader.all_subsections(ttt,"contact"))])]),interop.utils.scrollTo((0)),predict_prostate.components.bs3_modal.editor_modal(),predict_prostate.layout.header.footer_banner(ttt),daiquiri.core.create_element("div",{'className':"row screen-only"},[predict_prostate.layout.header.footer()])]);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$], null),"predict-prostate.pages.contact/contact");

//# sourceMappingURL=predict_prostate.pages.contact.js.map
