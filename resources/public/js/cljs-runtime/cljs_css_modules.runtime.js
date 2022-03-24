goog.provide('cljs_css_modules.runtime');
cljs_css_modules.runtime.injected_styles = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
cljs_css_modules.runtime.update_style_BANG_ = (function cljs_css_modules$runtime$update_style_BANG_(element,style){
return (element.innerHTML = style);
});
cljs_css_modules.runtime.create_style_element_BANG_ = (function cljs_css_modules$runtime$create_style_element_BANG_(style,id){
var head = document.head;
var element = document.createElement("style");
if((!((head == null)))){
} else {
throw (new Error(["Assert failed: ","An head element is required in the dom to inject the style.","\n","(some? head)"].join('')));
}

head.appendChild(element);

cljs_css_modules.runtime.update_style_BANG_(element,style);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_css_modules.runtime.injected_styles,cljs.core.assoc,id,element);
});
cljs_css_modules.runtime.inject_style_BANG_ = (function cljs_css_modules$runtime$inject_style_BANG_(style,ns,name){
var id = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''));
var injected_style = (function (){var G__46731 = cljs.core.deref(cljs_css_modules.runtime.injected_styles);
return (id.cljs$core$IFn$_invoke$arity$1 ? id.cljs$core$IFn$_invoke$arity$1(G__46731) : id.call(null,G__46731));
})();
if(cljs.core.truth_(injected_style)){
return cljs_css_modules.runtime.update_style_BANG_(injected_style,style);
} else {
return cljs_css_modules.runtime.create_style_element_BANG_(style,id);
}
});

//# sourceMappingURL=cljs_css_modules.runtime.js.map
