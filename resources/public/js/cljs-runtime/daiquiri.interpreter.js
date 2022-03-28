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
var seq__30273_30325 = cljs.core.seq(x);
var chunk__30274_30326 = null;
var count__30275_30327 = (0);
var i__30276_30328 = (0);
while(true){
if((i__30276_30328 < count__30275_30327)){
var vec__30293_30329 = chunk__30274_30326.cljs$core$IIndexed$_nth$arity$2(null,i__30276_30328);
var k_30330 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30293_30329,(0),null);
var v_30331 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30293_30329,(1),null);
goog.object.set(m,cljs.core.name(k_30330),v_30331);


var G__30333 = seq__30273_30325;
var G__30334 = chunk__30274_30326;
var G__30335 = count__30275_30327;
var G__30336 = (i__30276_30328 + (1));
seq__30273_30325 = G__30333;
chunk__30274_30326 = G__30334;
count__30275_30327 = G__30335;
i__30276_30328 = G__30336;
continue;
} else {
var temp__5753__auto___30338 = cljs.core.seq(seq__30273_30325);
if(temp__5753__auto___30338){
var seq__30273_30340__$1 = temp__5753__auto___30338;
if(cljs.core.chunked_seq_QMARK_(seq__30273_30340__$1)){
var c__4638__auto___30341 = cljs.core.chunk_first(seq__30273_30340__$1);
var G__30342 = cljs.core.chunk_rest(seq__30273_30340__$1);
var G__30343 = c__4638__auto___30341;
var G__30344 = cljs.core.count(c__4638__auto___30341);
var G__30345 = (0);
seq__30273_30325 = G__30342;
chunk__30274_30326 = G__30343;
count__30275_30327 = G__30344;
i__30276_30328 = G__30345;
continue;
} else {
var vec__30296_30346 = cljs.core.first(seq__30273_30340__$1);
var k_30347 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30296_30346,(0),null);
var v_30348 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30296_30346,(1),null);
goog.object.set(m,cljs.core.name(k_30347),v_30348);


var G__30349 = cljs.core.next(seq__30273_30340__$1);
var G__30350 = null;
var G__30351 = (0);
var G__30352 = (0);
seq__30273_30325 = G__30349;
chunk__30274_30326 = G__30350;
count__30275_30327 = G__30351;
i__30276_30328 = G__30352;
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
var vec__30305 = daiquiri.normalize.element(element);
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30305,(0),null);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30305,(1),null);
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30305,(2),null);
return daiquiri.interpreter.create_element(type,daiquiri.interpreter.element_attributes(attrs),daiquiri.interpreter.interpret_seq(content));
});
daiquiri.interpreter.fragment = (function daiquiri$interpreter$fragment(p__30308){
var vec__30309 = p__30308;
var seq__30310 = cljs.core.seq(vec__30309);
var first__30311 = cljs.core.first(seq__30310);
var seq__30310__$1 = cljs.core.next(seq__30310);
var _ = first__30311;
var first__30311__$1 = cljs.core.first(seq__30310__$1);
var seq__30310__$2 = cljs.core.next(seq__30310__$1);
var attrs = first__30311__$1;
var children = seq__30310__$2;
var vec__30312 = ((cljs.core.map_QMARK_(attrs))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [daiquiri.interpreter.component_attributes(attrs),daiquiri.interpreter.interpret_seq(children)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,daiquiri.interpreter.interpret_seq(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs], null),children))], null));
var attrs__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30312,(0),null);
var children__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30312,(1),null);
return daiquiri.interpreter.create_element(React.Fragment,attrs__$1,children__$1);
});
daiquiri.interpreter.interop = (function daiquiri$interpreter$interop(p__30315){
var vec__30316 = p__30315;
var seq__30317 = cljs.core.seq(vec__30316);
var first__30318 = cljs.core.first(seq__30317);
var seq__30317__$1 = cljs.core.next(seq__30317);
var _ = first__30318;
var first__30318__$1 = cljs.core.first(seq__30317__$1);
var seq__30317__$2 = cljs.core.next(seq__30317__$1);
var component = first__30318__$1;
var first__30318__$2 = cljs.core.first(seq__30317__$2);
var seq__30317__$3 = cljs.core.next(seq__30317__$2);
var attrs = first__30318__$2;
var children = seq__30317__$3;
var vec__30319 = ((cljs.core.map_QMARK_(attrs))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [daiquiri.interpreter.component_attributes(attrs),daiquiri.interpreter.interpret_seq(children)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,daiquiri.interpreter.interpret_seq(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs], null),children))], null));
var attrs__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30319,(0),null);
var children__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30319,(1),null);
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
