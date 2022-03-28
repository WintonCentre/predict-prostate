goog.provide('daiquiri.interpreter');
/**
 * Create a React element. Returns a JavaScript object when running
 *   under ClojureScript, and a om.dom.Element record in Clojure.
 */
daiquiri.interpreter.create_element = (function daiquiri$interpreter$create_element(type,attrs,children){
return React.createElement.apply(null,[type,attrs].concat(children));
});
daiquiri.interpreter.component_attributes = (function daiquiri$interpreter$component_attributes(attrs){
var x = daiquiri.util.camel_case_keys_STAR_(attrs);
var m = ({});
var seq__40857_40911 = cljs.core.seq(x);
var chunk__40858_40912 = null;
var count__40859_40913 = (0);
var i__40860_40914 = (0);
while(true){
if((i__40860_40914 < count__40859_40913)){
var vec__40872_40915 = chunk__40858_40912.cljs$core$IIndexed$_nth$arity$2(null,i__40860_40914);
var k_40916 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40872_40915,(0),null);
var v_40917 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40872_40915,(1),null);
goog.object.set(m,cljs.core.name(k_40916),v_40917);


var G__40918 = seq__40857_40911;
var G__40919 = chunk__40858_40912;
var G__40920 = count__40859_40913;
var G__40921 = (i__40860_40914 + (1));
seq__40857_40911 = G__40918;
chunk__40858_40912 = G__40919;
count__40859_40913 = G__40920;
i__40860_40914 = G__40921;
continue;
} else {
var temp__5753__auto___40922 = cljs.core.seq(seq__40857_40911);
if(temp__5753__auto___40922){
var seq__40857_40923__$1 = temp__5753__auto___40922;
if(cljs.core.chunked_seq_QMARK_(seq__40857_40923__$1)){
var c__4638__auto___40924 = cljs.core.chunk_first(seq__40857_40923__$1);
var G__40925 = cljs.core.chunk_rest(seq__40857_40923__$1);
var G__40926 = c__4638__auto___40924;
var G__40927 = cljs.core.count(c__4638__auto___40924);
var G__40928 = (0);
seq__40857_40911 = G__40925;
chunk__40858_40912 = G__40926;
count__40859_40913 = G__40927;
i__40860_40914 = G__40928;
continue;
} else {
var vec__40876_40929 = cljs.core.first(seq__40857_40923__$1);
var k_40930 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40876_40929,(0),null);
var v_40931 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40876_40929,(1),null);
goog.object.set(m,cljs.core.name(k_40930),v_40931);


var G__40932 = cljs.core.next(seq__40857_40923__$1);
var G__40933 = null;
var G__40934 = (0);
var G__40935 = (0);
seq__40857_40911 = G__40932;
chunk__40858_40912 = G__40933;
count__40859_40913 = G__40934;
i__40860_40914 = G__40935;
continue;
}
} else {
}
}
break;
}

return m;
});
daiquiri.interpreter.element_attributes = (function daiquiri$interpreter$element_attributes(attrs){
var temp__5753__auto__ = cljs.core.clj__GT_js(daiquiri.util.html_to_dom_attrs(attrs));
if(cljs.core.truth_(temp__5753__auto__)){
var js_attrs = temp__5753__auto__;
var class$ = js_attrs.className;
var class$__$1 = ((cljs.core.array_QMARK_(class$))?clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",class$):class$);
if(cljs.core.truth_(js_attrs.onChange)){
(js_attrs.onChange = rum.core.mark_sync_update(js_attrs.onChange));
} else {
}

if(clojure.string.blank_QMARK_(class$__$1)){
delete js_attrs["className"];
} else {
(js_attrs.className = class$__$1);
}

return js_attrs;
} else {
return null;
}
});
/**
 * Eagerly interpret the seq `x` as HTML elements.
 */
daiquiri.interpreter.interpret_seq = (function daiquiri$interpreter$interpret_seq(x){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret,x__$1){
ret.push((daiquiri.interpreter.interpret.cljs$core$IFn$_invoke$arity$1 ? daiquiri.interpreter.interpret.cljs$core$IFn$_invoke$arity$1(x__$1) : daiquiri.interpreter.interpret.call(null,x__$1)));

return ret;
}),[],x);
});
/**
 * Render an element vector as a HTML element.
 */
daiquiri.interpreter.element = (function daiquiri$interpreter$element(element){
var vec__40885 = daiquiri.normalize.element(element);
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40885,(0),null);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40885,(1),null);
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40885,(2),null);
return daiquiri.interpreter.create_element(type,daiquiri.interpreter.element_attributes(attrs),daiquiri.interpreter.interpret_seq(content));
});
daiquiri.interpreter.fragment = (function daiquiri$interpreter$fragment(p__40889){
var vec__40890 = p__40889;
var seq__40891 = cljs.core.seq(vec__40890);
var first__40892 = cljs.core.first(seq__40891);
var seq__40891__$1 = cljs.core.next(seq__40891);
var _ = first__40892;
var first__40892__$1 = cljs.core.first(seq__40891__$1);
var seq__40891__$2 = cljs.core.next(seq__40891__$1);
var attrs = first__40892__$1;
var children = seq__40891__$2;
var vec__40893 = ((cljs.core.map_QMARK_(attrs))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [daiquiri.interpreter.component_attributes(attrs),daiquiri.interpreter.interpret_seq(children)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,daiquiri.interpreter.interpret_seq(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs], null),children))], null));
var attrs__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40893,(0),null);
var children__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40893,(1),null);
return daiquiri.interpreter.create_element(React.Fragment,attrs__$1,children__$1);
});
daiquiri.interpreter.interop = (function daiquiri$interpreter$interop(p__40897){
var vec__40899 = p__40897;
var seq__40900 = cljs.core.seq(vec__40899);
var first__40901 = cljs.core.first(seq__40900);
var seq__40900__$1 = cljs.core.next(seq__40900);
var _ = first__40901;
var first__40901__$1 = cljs.core.first(seq__40900__$1);
var seq__40900__$2 = cljs.core.next(seq__40900__$1);
var component = first__40901__$1;
var first__40901__$2 = cljs.core.first(seq__40900__$2);
var seq__40900__$3 = cljs.core.next(seq__40900__$2);
var attrs = first__40901__$2;
var children = seq__40900__$3;
var vec__40902 = ((cljs.core.map_QMARK_(attrs))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [daiquiri.interpreter.component_attributes(attrs),daiquiri.interpreter.interpret_seq(children)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,daiquiri.interpreter.interpret_seq(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs], null),children))], null));
var attrs__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40902,(0),null);
var children__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40902,(1),null);
return daiquiri.interpreter.create_element(component,attrs__$1,children__$1);
});
/**
 * Interpret the vector `x` as an HTML element or a the children of an
 *   element.
 */
daiquiri.interpreter.interpret_vec = (function daiquiri$interpreter$interpret_vec(x){
if(daiquiri.util.fragment_QMARK_(x)){
return daiquiri.interpreter.fragment(x);
} else {
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword(null,">",">",-555517146),cljs.core.nth.cljs$core$IFn$_invoke$arity$3(x,(0),null))){
return daiquiri.interpreter.interop(x);
} else {
if(daiquiri.util.element_QMARK_(x)){
return daiquiri.interpreter.element(x);
} else {
return daiquiri.interpreter.interpret_seq(x);

}
}
}
});
daiquiri.interpreter.interpret = (function daiquiri$interpreter$interpret(v){
if(cljs.core.vector_QMARK_(v)){
return daiquiri.interpreter.interpret_vec(v);
} else {
if(cljs.core.seq_QMARK_(v)){
return daiquiri.interpreter.interpret_seq(v);
} else {
return v;

}
}
});

//# sourceMappingURL=daiquiri.interpreter.js.map
