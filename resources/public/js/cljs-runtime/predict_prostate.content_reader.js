goog.provide('predict_prostate.content_reader');
/**
 * Regular expression that parses a CSS-style id and class from an element name.
 */
predict_prostate.content_reader.re_tag = /([^\s\.#]+)(?:#([^\s\.#]+))?(?:\.([^\s#]+))?/;
/**
 * return true if tag contains a hash tag-id matching id.
 */
predict_prostate.content_reader.match_id = (function predict_prostate$content_reader$match_id(tag,id){
var vec__159229 = cljs.core.re_find(predict_prostate.content_reader.re_tag,cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__159229,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__159229,(1),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__159229,(2),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__159229,(3),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,tag_id);
});
predict_prostate.content_reader.match_node = (function predict_prostate$content_reader$match_node(ttt,node,id){
var vec__159235 = node;
var seq__159236 = cljs.core.seq(vec__159235);
var first__159237 = cljs.core.first(seq__159236);
var seq__159236__$1 = cljs.core.next(seq__159236);
var x = first__159237;
var xs = seq__159236__$1;
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
var temp__5733__auto__ = (predict_prostate.content_reader.match_node.cljs$core$IFn$_invoke$arity$3 ? predict_prostate.content_reader.match_node.cljs$core$IFn$_invoke$arity$3(ttt,x,id) : predict_prostate.content_reader.match_node.call(null,ttt,x,id));
if(cljs.core.truth_(temp__5733__auto__)){
var rv = temp__5733__auto__;
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
predict_prostate.content_reader.add_hiccup_key = (function predict_prostate$content_reader$add_hiccup_key(key,p__159247){
var vec__159248 = p__159247;
var seq__159249 = cljs.core.seq(vec__159248);
var first__159250 = cljs.core.first(seq__159249);
var seq__159249__$1 = cljs.core.next(seq__159249);
var tag = first__159250;
var args = seq__159249__$1;
var vec__159251 = args;
var seq__159252 = cljs.core.seq(vec__159251);
var first__159253 = cljs.core.first(seq__159252);
var seq__159252__$1 = cljs.core.next(seq__159252);
var m = first__159253;
var rest_args = seq__159252__$1;
var vec__159254 = ((cljs.core.map_QMARK_(m))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.Keyword(null,"key","key",-1516042587),key),rest_args], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),key], null),args], null));
var mk = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__159254,(0),null);
var rest_args_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__159254,(1),null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,mk], null),rest_args_STAR_));
});
predict_prostate.content_reader.section = (function predict_prostate$content_reader$section(var_args){
var G__159268 = arguments.length;
switch (G__159268) {
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
var map__159271 = predict_prostate.content_reader.match_node(ttt,node,id);
var map__159271__$1 = (((((!((map__159271 == null))))?(((((map__159271.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__159271.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__159271):map__159271);
var _ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__159271__$1,new cljs.core.Keyword(null,"_","_",1453416199));
var xs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__159271__$1,new cljs.core.Keyword(null,"xs","xs",649443341));
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
var iter__4529__auto__ = (function predict_prostate$content_reader$all_subsections_$_iter__159279(s__159280){
return (new cljs.core.LazySeq(null,(function (){
var s__159280__$1 = s__159280;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__159280__$1);
if(temp__5735__auto__){
var s__159280__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__159280__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__159280__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__159286 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__159285 = (0);
while(true){
if((i__159285 < size__4528__auto__)){
var k = cljs.core._nth(c__4527__auto__,i__159285);
var vec__159290 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.rest(node),k);
var seq__159291 = cljs.core.seq(vec__159290);
var first__159292 = cljs.core.first(seq__159291);
var seq__159291__$1 = cljs.core.next(seq__159291);
var _ = first__159292;
var first__159292__$1 = cljs.core.first(seq__159291__$1);
var seq__159291__$2 = cljs.core.next(seq__159291__$1);
var title = first__159292__$1;
var content = seq__159291__$2;
cljs.core.chunk_append(b__159286,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),predict_prostate.results.util.alison_blue_3], null)], null),title], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (i__159285,vec__159290,seq__159291,first__159292,seq__159291__$1,_,first__159292__$1,seq__159291__$2,title,content,k,c__4527__auto__,size__4528__auto__,b__159286,s__159280__$2,temp__5735__auto__,node){
return (function (p1__159277_SHARP_,p2__159278_SHARP_){
return predict_prostate.content_reader.add_hiccup_key(["k",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__159277_SHARP_)].join(''),p2__159278_SHARP_);
});})(i__159285,vec__159290,seq__159291,first__159292,seq__159291__$1,_,first__159292__$1,seq__159291__$2,title,content,k,c__4527__auto__,size__4528__auto__,b__159286,s__159280__$2,temp__5735__auto__,node))
,content)], null));

var G__159302 = (i__159285 + (1));
i__159285 = G__159302;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__159286),predict_prostate$content_reader$all_subsections_$_iter__159279(cljs.core.chunk_rest(s__159280__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__159286),null);
}
} else {
var k = cljs.core.first(s__159280__$2);
var vec__159293 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.rest(node),k);
var seq__159294 = cljs.core.seq(vec__159293);
var first__159295 = cljs.core.first(seq__159294);
var seq__159294__$1 = cljs.core.next(seq__159294);
var _ = first__159295;
var first__159295__$1 = cljs.core.first(seq__159294__$1);
var seq__159294__$2 = cljs.core.next(seq__159294__$1);
var title = first__159295__$1;
var content = seq__159294__$2;
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),predict_prostate.results.util.alison_blue_3], null)], null),title], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (vec__159293,seq__159294,first__159295,seq__159294__$1,_,first__159295__$1,seq__159294__$2,title,content,k,s__159280__$2,temp__5735__auto__,node){
return (function (p1__159277_SHARP_,p2__159278_SHARP_){
return predict_prostate.content_reader.add_hiccup_key(["k",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__159277_SHARP_)].join(''),p2__159278_SHARP_);
});})(vec__159293,seq__159294,first__159295,seq__159294__$1,_,first__159295__$1,seq__159294__$2,title,content,k,s__159280__$2,temp__5735__auto__,node))
,content)], null),predict_prostate$content_reader$all_subsections_$_iter__159279(cljs.core.rest(s__159280__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.rest(node))));
});

//# sourceMappingURL=predict_prostate.content_reader.js.map
