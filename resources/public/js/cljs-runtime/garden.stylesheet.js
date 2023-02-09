goog.provide('garden.stylesheet');
/**
 * Create a rule function for the given selector. The `selector`
 *   argument must be valid selector (ie. a keyword, string, or symbol).
 *   Additional arguments may consist of extra selectors or
 *   declarations.
 * 
 *   The returned function accepts any number of arguments which represent
 *   the rule's children.
 * 
 *   Ex.
 *    (let [text-field (rule "[type="text"])]
 *     (text-field {:border ["1px" :solid "black"]}))
 *    ;; => ["[type="text"] {:boder ["1px" :solid "black"]}]
 */
garden.stylesheet.rule = (function garden$stylesheet$rule(var_args){
var args__4824__auto__ = [];
var len__4818__auto___46293 = arguments.length;
var i__4819__auto___46294 = (0);
while(true){
if((i__4819__auto___46294 < len__4818__auto___46293)){
args__4824__auto__.push((arguments[i__4819__auto___46294]));

var G__46298 = (i__4819__auto___46294 + (1));
i__4819__auto___46294 = G__46298;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return garden.stylesheet.rule.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(garden.stylesheet.rule.cljs$core$IFn$_invoke$arity$variadic = (function (selector,more){
if((!((((selector instanceof cljs.core.Keyword)) || (((typeof selector === 'string') || ((selector instanceof cljs.core.Symbol)))))))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Selector must be either a keyword, string, or symbol.",cljs.core.PersistentArrayMap.EMPTY);
} else {
return (function() { 
var G__46301__delegate = function (children){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,selector,more),children);
};
var G__46301 = function (var_args){
var children = null;
if (arguments.length > 0) {
var G__46302__i = 0, G__46302__a = new Array(arguments.length -  0);
while (G__46302__i < G__46302__a.length) {G__46302__a[G__46302__i] = arguments[G__46302__i + 0]; ++G__46302__i;}
  children = new cljs.core.IndexedSeq(G__46302__a,0,null);
} 
return G__46301__delegate.call(this,children);};
G__46301.cljs$lang$maxFixedArity = 0;
G__46301.cljs$lang$applyTo = (function (arglist__46303){
var children = cljs.core.seq(arglist__46303);
return G__46301__delegate(children);
});
G__46301.cljs$core$IFn$_invoke$arity$variadic = G__46301__delegate;
return G__46301;
})()
;
}
}));

(garden.stylesheet.rule.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(garden.stylesheet.rule.cljs$lang$applyTo = (function (seq46247){
var G__46248 = cljs.core.first(seq46247);
var seq46247__$1 = cljs.core.next(seq46247);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46248,seq46247__$1);
}));

garden.stylesheet.cssfn = (function garden$stylesheet$cssfn(fn_name){
return (function() { 
var G__46304__delegate = function (args){
return (new garden.types.CSSFunction(fn_name,args,null,null,null));
};
var G__46304 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__46305__i = 0, G__46305__a = new Array(arguments.length -  0);
while (G__46305__i < G__46305__a.length) {G__46305__a[G__46305__i] = arguments[G__46305__i + 0]; ++G__46305__i;}
  args = new cljs.core.IndexedSeq(G__46305__a,0,null);
} 
return G__46304__delegate.call(this,args);};
G__46304.cljs$lang$maxFixedArity = 0;
G__46304.cljs$lang$applyTo = (function (arglist__46306){
var args = cljs.core.seq(arglist__46306);
return G__46304__delegate(args);
});
G__46304.cljs$core$IFn$_invoke$arity$variadic = G__46304__delegate;
return G__46304;
})()
;
});
garden.stylesheet.at_rule = (function garden$stylesheet$at_rule(identifier,value){
return (new garden.types.CSSAtRule(identifier,value,null,null,null));
});
/**
 * Create a CSS @font-face rule.
 */
garden.stylesheet.at_font_face = (function garden$stylesheet$at_font_face(var_args){
var args__4824__auto__ = [];
var len__4818__auto___46307 = arguments.length;
var i__4819__auto___46308 = (0);
while(true){
if((i__4819__auto___46308 < len__4818__auto___46307)){
args__4824__auto__.push((arguments[i__4819__auto___46308]));

var G__46309 = (i__4819__auto___46308 + (1));
i__4819__auto___46308 = G__46309;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return garden.stylesheet.at_font_face.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(garden.stylesheet.at_font_face.cljs$core$IFn$_invoke$arity$variadic = (function (font_properties){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["@font-face",font_properties], null);
}));

(garden.stylesheet.at_font_face.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(garden.stylesheet.at_font_face.cljs$lang$applyTo = (function (seq46255){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq46255));
}));

/**
 * Create a CSS @import rule.
 */
garden.stylesheet.at_import = (function garden$stylesheet$at_import(var_args){
var G__46264 = arguments.length;
switch (G__46264) {
case 1:
return garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__4839__auto__ = [];
var len__4818__auto___46312 = arguments.length;
var i__4819__auto___46313 = (0);
while(true){
if((i__4819__auto___46313 < len__4818__auto___46312)){
args_arr__4839__auto__.push((arguments[i__4819__auto___46313]));

var G__46314 = (i__4819__auto___46313 + (1));
i__4819__auto___46313 = G__46314;
continue;
} else {
}
break;
}

var argseq__4840__auto__ = (new cljs.core.IndexedSeq(args_arr__4839__auto__.slice((1)),(0),null));
return garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4840__auto__);

}
});

(garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$1 = (function (url){
return garden.stylesheet.at_rule(new cljs.core.Keyword(null,"import","import",-1399500709),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678),null], null));
}));

(garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$variadic = (function (url,media_queries){
return garden.stylesheet.at_rule(new cljs.core.Keyword(null,"import","import",-1399500709),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678),media_queries], null));
}));

/** @this {Function} */
(garden.stylesheet.at_import.cljs$lang$applyTo = (function (seq46262){
var G__46263 = cljs.core.first(seq46262);
var seq46262__$1 = cljs.core.next(seq46262);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46263,seq46262__$1);
}));

(garden.stylesheet.at_import.cljs$lang$maxFixedArity = (1));

/**
 * Create a CSS @media rule.
 */
garden.stylesheet.at_media = (function garden$stylesheet$at_media(var_args){
var args__4824__auto__ = [];
var len__4818__auto___46315 = arguments.length;
var i__4819__auto___46316 = (0);
while(true){
if((i__4819__auto___46316 < len__4818__auto___46315)){
args__4824__auto__.push((arguments[i__4819__auto___46316]));

var G__46317 = (i__4819__auto___46316 + (1));
i__4819__auto___46316 = G__46317;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return garden.stylesheet.at_media.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(garden.stylesheet.at_media.cljs$core$IFn$_invoke$arity$variadic = (function (media_queries,rules){
return garden.stylesheet.at_rule(new cljs.core.Keyword(null,"media","media",-1066138403),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678),media_queries,new cljs.core.Keyword(null,"rules","rules",1198912366),rules], null));
}));

(garden.stylesheet.at_media.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(garden.stylesheet.at_media.cljs$lang$applyTo = (function (seq46268){
var G__46269 = cljs.core.first(seq46268);
var seq46268__$1 = cljs.core.next(seq46268);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46269,seq46268__$1);
}));

/**
 * Create a CSS @keyframes rule.
 */
garden.stylesheet.at_keyframes = (function garden$stylesheet$at_keyframes(var_args){
var args__4824__auto__ = [];
var len__4818__auto___46318 = arguments.length;
var i__4819__auto___46319 = (0);
while(true){
if((i__4819__auto___46319 < len__4818__auto___46318)){
args__4824__auto__.push((arguments[i__4819__auto___46319]));

var G__46320 = (i__4819__auto___46319 + (1));
i__4819__auto___46319 = G__46320;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return garden.stylesheet.at_keyframes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(garden.stylesheet.at_keyframes.cljs$core$IFn$_invoke$arity$variadic = (function (identifier,frames){
return garden.stylesheet.at_rule(new cljs.core.Keyword(null,"keyframes","keyframes",-1437976012),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"identifier","identifier",-805503498),identifier,new cljs.core.Keyword(null,"frames","frames",1765687497),frames], null));
}));

(garden.stylesheet.at_keyframes.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(garden.stylesheet.at_keyframes.cljs$lang$applyTo = (function (seq46284){
var G__46285 = cljs.core.first(seq46284);
var seq46284__$1 = cljs.core.next(seq46284);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46285,seq46284__$1);
}));

/**
 * Create a color from RGB values.
 */
garden.stylesheet.rgb = (function garden$stylesheet$rgb(r,g,b){
return garden.color.rgb.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,g,b], null));
});
/**
 * Create a color from HSL values.
 */
garden.stylesheet.hsl = (function garden$stylesheet$hsl(h,s,l){
return garden.color.hsl.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [h,s,l], null));
});

//# sourceMappingURL=garden.stylesheet.js.map
