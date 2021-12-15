goog.provide('predict_prostate.content_reader');
/**
 * Regular expression that parses a CSS-style id and class from an element name.
 */
predict_prostate.content_reader.re_tag = /([^\s\.#]+)(?:#([^\s\.#]+))?(?:\.([^\s#]+))?/;
/**
 * return true if tag contains a hash tag-id matching id.
 */
predict_prostate.content_reader.match_id = (function predict_prostate$content_reader$match_id(tag,id){
var vec__33335 = cljs.core.re_find(predict_prostate.content_reader.re_tag,cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33335,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33335,(1),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33335,(2),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33335,(3),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,tag_id);
});
predict_prostate.content_reader.match_node = (function predict_prostate$content_reader$match_node(ttt,node,id){
var vec__33338 = node;
var seq__33339 = cljs.core.seq(vec__33338);
var first__33340 = cljs.core.first(seq__33339);
var seq__33339__$1 = cljs.core.next(seq__33339);
var x = first__33340;
var xs = seq__33339__$1;
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
predict_prostate.content_reader.add_hiccup_key = (function predict_prostate$content_reader$add_hiccup_key(key,p__33341){
var vec__33342 = p__33341;
var seq__33343 = cljs.core.seq(vec__33342);
var first__33344 = cljs.core.first(seq__33343);
var seq__33343__$1 = cljs.core.next(seq__33343);
var tag = first__33344;
var args = seq__33343__$1;
var vec__33345 = args;
var seq__33346 = cljs.core.seq(vec__33345);
var first__33347 = cljs.core.first(seq__33346);
var seq__33346__$1 = cljs.core.next(seq__33346);
var m = first__33347;
var rest_args = seq__33346__$1;
var vec__33348 = ((cljs.core.map_QMARK_(m))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.Keyword(null,"key","key",-1516042587),key),rest_args], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),key], null),args], null));
var mk = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33348,(0),null);
var rest_args_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33348,(1),null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,mk], null),rest_args_STAR_));
});
predict_prostate.content_reader.section = (function predict_prostate$content_reader$section(var_args){
var G__33352 = arguments.length;
switch (G__33352) {
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
var map__33353 = predict_prostate.content_reader.match_node(ttt,node,id);
var map__33353__$1 = (((((!((map__33353 == null))))?(((((map__33353.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33353.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33353):map__33353);
var _ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33353__$1,new cljs.core.Keyword(null,"_","_",1453416199));
var xs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33353__$1,new cljs.core.Keyword(null,"xs","xs",649443341));
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
var iter__4529__auto__ = (function predict_prostate$content_reader$all_subsections_$_iter__33361(s__33362){
return (new cljs.core.LazySeq(null,(function (){
var s__33362__$1 = s__33362;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__33362__$1);
if(temp__5735__auto__){
var s__33362__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__33362__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__33362__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__33364 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__33363 = (0);
while(true){
if((i__33363 < size__4528__auto__)){
var k = cljs.core._nth(c__4527__auto__,i__33363);
var vec__33365 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.rest(node),k);
var seq__33366 = cljs.core.seq(vec__33365);
var first__33367 = cljs.core.first(seq__33366);
var seq__33366__$1 = cljs.core.next(seq__33366);
var _ = first__33367;
var first__33367__$1 = cljs.core.first(seq__33366__$1);
var seq__33366__$2 = cljs.core.next(seq__33366__$1);
var title = first__33367__$1;
var content = seq__33366__$2;
cljs.core.chunk_append(b__33364,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),predict_prostate.results.util.alison_blue_3], null)], null),title], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (i__33363,vec__33365,seq__33366,first__33367,seq__33366__$1,_,first__33367__$1,seq__33366__$2,title,content,k,c__4527__auto__,size__4528__auto__,b__33364,s__33362__$2,temp__5735__auto__,node){
return (function (p1__33355_SHARP_,p2__33356_SHARP_){
return predict_prostate.content_reader.add_hiccup_key(["k",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__33355_SHARP_)].join(''),p2__33356_SHARP_);
});})(i__33363,vec__33365,seq__33366,first__33367,seq__33366__$1,_,first__33367__$1,seq__33366__$2,title,content,k,c__4527__auto__,size__4528__auto__,b__33364,s__33362__$2,temp__5735__auto__,node))
,content)], null));

var G__33385 = (i__33363 + (1));
i__33363 = G__33385;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__33364),predict_prostate$content_reader$all_subsections_$_iter__33361(cljs.core.chunk_rest(s__33362__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__33364),null);
}
} else {
var k = cljs.core.first(s__33362__$2);
var vec__33368 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.rest(node),k);
var seq__33369 = cljs.core.seq(vec__33368);
var first__33370 = cljs.core.first(seq__33369);
var seq__33369__$1 = cljs.core.next(seq__33369);
var _ = first__33370;
var first__33370__$1 = cljs.core.first(seq__33369__$1);
var seq__33369__$2 = cljs.core.next(seq__33369__$1);
var title = first__33370__$1;
var content = seq__33369__$2;
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),predict_prostate.results.util.alison_blue_3], null)], null),title], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (vec__33368,seq__33369,first__33370,seq__33369__$1,_,first__33370__$1,seq__33369__$2,title,content,k,s__33362__$2,temp__5735__auto__,node){
return (function (p1__33355_SHARP_,p2__33356_SHARP_){
return predict_prostate.content_reader.add_hiccup_key(["k",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__33355_SHARP_)].join(''),p2__33356_SHARP_);
});})(vec__33368,seq__33369,first__33370,seq__33369__$1,_,first__33370__$1,seq__33369__$2,title,content,k,s__33362__$2,temp__5735__auto__,node))
,content)], null),predict_prostate$content_reader$all_subsections_$_iter__33361(cljs.core.rest(s__33362__$2)));
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
