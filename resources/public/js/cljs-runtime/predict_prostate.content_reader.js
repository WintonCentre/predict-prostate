goog.provide('predict_prostate.content_reader');
/**
 * Regular expression that parses a CSS-style id and class from an element name.
 */
predict_prostate.content_reader.re_tag = /([^\s\.#]+)(?:#([^\s\.#]+))?(?:\.([^\s#]+))?/;
/**
 * return true if tag contains a hash tag-id matching id.
 */
predict_prostate.content_reader.match_id = (function predict_prostate$content_reader$match_id(tag,id){
var vec__40246 = cljs.core.re_find(predict_prostate.content_reader.re_tag,cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40246,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40246,(1),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40246,(2),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40246,(3),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,tag_id);
});
predict_prostate.content_reader.match_node = (function predict_prostate$content_reader$match_node(ttt,node,id){
var vec__40249 = node;
var seq__40250 = cljs.core.seq(vec__40249);
var first__40251 = cljs.core.first(seq__40250);
var seq__40250__$1 = cljs.core.next(seq__40250);
var x = first__40251;
var xs = seq__40250__$1;
if((x == null)){
return null;
} else {
if(cljs.core.truth_(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(x))){
if(predict_prostate.content_reader.match_id(x,id)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"xs","xs",649443341),xs], null);
} else {
return (predict_prostate.content_reader.match_node.cljs$core$IFn$_invoke$arity$3 ? predict_prostate.content_reader.match_node.cljs$core$IFn$_invoke$arity$3(ttt,xs,id) : predict_prostate.content_reader.match_node.call(null,ttt,xs,id));
}
} else {
if(cljs.core.vector_QMARK_(x)){
var temp__5751__auto__ = (predict_prostate.content_reader.match_node.cljs$core$IFn$_invoke$arity$3 ? predict_prostate.content_reader.match_node.cljs$core$IFn$_invoke$arity$3(ttt,x,id) : predict_prostate.content_reader.match_node.call(null,ttt,x,id));
if(cljs.core.truth_(temp__5751__auto__)){
var rv = temp__5751__auto__;
return rv;
} else {
return (predict_prostate.content_reader.match_node.cljs$core$IFn$_invoke$arity$3 ? predict_prostate.content_reader.match_node.cljs$core$IFn$_invoke$arity$3(ttt,xs,id) : predict_prostate.content_reader.match_node.call(null,ttt,xs,id));
}
} else {
if(cljs.core.seq(xs)){
return (predict_prostate.content_reader.match_node.cljs$core$IFn$_invoke$arity$3 ? predict_prostate.content_reader.match_node.cljs$core$IFn$_invoke$arity$3(ttt,xs,id) : predict_prostate.content_reader.match_node.call(null,ttt,xs,id));
} else {
return null;

}
}
}
}
});
predict_prostate.content_reader.add_hiccup_key = (function predict_prostate$content_reader$add_hiccup_key(key,p__40252){
var vec__40253 = p__40252;
var seq__40254 = cljs.core.seq(vec__40253);
var first__40255 = cljs.core.first(seq__40254);
var seq__40254__$1 = cljs.core.next(seq__40254);
var tag = first__40255;
var args = seq__40254__$1;
var vec__40256 = args;
var seq__40257 = cljs.core.seq(vec__40256);
var first__40258 = cljs.core.first(seq__40257);
var seq__40257__$1 = cljs.core.next(seq__40257);
var m = first__40258;
var rest_args = seq__40257__$1;
var vec__40259 = ((cljs.core.map_QMARK_(m))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.Keyword(null,"key","key",-1516042587),key),rest_args], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),key], null),args], null));
var mk = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40259,(0),null);
var rest_args_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40259,(1),null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,mk], null),rest_args_STAR_));
});
predict_prostate.content_reader.section = (function predict_prostate$content_reader$section(var_args){
var G__40263 = arguments.length;
switch (G__40263) {
case 3:
return predict_prostate.content_reader.section.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return predict_prostate.content_reader.section.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(predict_prostate.content_reader.section.cljs$core$IFn$_invoke$arity$3 = (function (ttt,node,id){
var map__40264 = predict_prostate.content_reader.match_node(ttt,node,id);
var map__40264__$1 = cljs.core.__destructure_map(map__40264);
var _ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40264__$1,new cljs.core.Keyword(null,"_","_",1453416199));
var xs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40264__$1,new cljs.core.Keyword(null,"xs","xs",649443341));
return xs;
}));

(predict_prostate.content_reader.section.cljs$core$IFn$_invoke$arity$2 = (function (ttt,id){
return predict_prostate.content_reader.section.cljs$core$IFn$_invoke$arity$3(ttt,predict_prostate.content.content(ttt),id);
}));

(predict_prostate.content_reader.section.cljs$lang$maxFixedArity = 3);

/**
 * loop through subsections adding keys.
 */
predict_prostate.content_reader.all_subsections = (function predict_prostate$content_reader$all_subsections(ttt,id){
var node = predict_prostate.content_reader.section.cljs$core$IFn$_invoke$arity$2(ttt,id);
var iter__4611__auto__ = (function predict_prostate$content_reader$all_subsections_$_iter__40267(s__40268){
return (new cljs.core.LazySeq(null,(function (){
var s__40268__$1 = s__40268;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__40268__$1);
if(temp__5753__auto__){
var s__40268__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__40268__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__40268__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__40270 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__40269 = (0);
while(true){
if((i__40269 < size__4610__auto__)){
var k = cljs.core._nth(c__4609__auto__,i__40269);
var vec__40271 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.rest(node),k);
var seq__40272 = cljs.core.seq(vec__40271);
var first__40273 = cljs.core.first(seq__40272);
var seq__40272__$1 = cljs.core.next(seq__40272);
var _ = first__40273;
var first__40273__$1 = cljs.core.first(seq__40272__$1);
var seq__40272__$2 = cljs.core.next(seq__40272__$1);
var title = first__40273__$1;
var content = seq__40272__$2;
cljs.core.chunk_append(b__40270,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),predict_prostate.results.util.alison_blue_3], null)], null),title], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (i__40269,vec__40271,seq__40272,first__40273,seq__40272__$1,_,first__40273__$1,seq__40272__$2,title,content,k,c__4609__auto__,size__4610__auto__,b__40270,s__40268__$2,temp__5753__auto__,node){
return (function (p1__40265_SHARP_,p2__40266_SHARP_){
return predict_prostate.content_reader.add_hiccup_key(["k",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__40265_SHARP_)].join(''),p2__40266_SHARP_);
});})(i__40269,vec__40271,seq__40272,first__40273,seq__40272__$1,_,first__40273__$1,seq__40272__$2,title,content,k,c__4609__auto__,size__4610__auto__,b__40270,s__40268__$2,temp__5753__auto__,node))
,content)], null));

var G__40278 = (i__40269 + (1));
i__40269 = G__40278;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__40270),predict_prostate$content_reader$all_subsections_$_iter__40267(cljs.core.chunk_rest(s__40268__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__40270),null);
}
} else {
var k = cljs.core.first(s__40268__$2);
var vec__40274 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.rest(node),k);
var seq__40275 = cljs.core.seq(vec__40274);
var first__40276 = cljs.core.first(seq__40275);
var seq__40275__$1 = cljs.core.next(seq__40275);
var _ = first__40276;
var first__40276__$1 = cljs.core.first(seq__40275__$1);
var seq__40275__$2 = cljs.core.next(seq__40275__$1);
var title = first__40276__$1;
var content = seq__40275__$2;
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),predict_prostate.results.util.alison_blue_3], null)], null),title], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (vec__40274,seq__40275,first__40276,seq__40275__$1,_,first__40276__$1,seq__40275__$2,title,content,k,s__40268__$2,temp__5753__auto__,node){
return (function (p1__40265_SHARP_,p2__40266_SHARP_){
return predict_prostate.content_reader.add_hiccup_key(["k",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__40265_SHARP_)].join(''),p2__40266_SHARP_);
});})(vec__40274,seq__40275,first__40276,seq__40275__$1,_,first__40276__$1,seq__40275__$2,title,content,k,s__40268__$2,temp__5753__auto__,node))
,content)], null),predict_prostate$content_reader$all_subsections_$_iter__40267(cljs.core.rest(s__40268__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.rest(node))));
});

//# sourceMappingURL=predict_prostate.content_reader.js.map
