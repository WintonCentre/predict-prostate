goog.provide('predict_prostate.content_reader');
/**
 * Regular expression that parses a CSS-style id and class from an element name.
 */
predict_prostate.content_reader.re_tag = /([^\s\.#]+)(?:#([^\s\.#]+))?(?:\.([^\s#]+))?/;
/**
 * return true if tag contains a hash tag-id matching id.
 */
predict_prostate.content_reader.match_id = (function predict_prostate$content_reader$match_id(tag,id){
var vec__58472 = cljs.core.re_find(predict_prostate.content_reader.re_tag,cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58472,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58472,(1),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58472,(2),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58472,(3),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,tag_id);
});
predict_prostate.content_reader.match_node = (function predict_prostate$content_reader$match_node(ttt,node,id){
var vec__58475 = node;
var seq__58476 = cljs.core.seq(vec__58475);
var first__58477 = cljs.core.first(seq__58476);
var seq__58476__$1 = cljs.core.next(seq__58476);
var x = first__58477;
var xs = seq__58476__$1;
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
predict_prostate.content_reader.add_hiccup_key = (function predict_prostate$content_reader$add_hiccup_key(key,p__58478){
var vec__58479 = p__58478;
var seq__58480 = cljs.core.seq(vec__58479);
var first__58481 = cljs.core.first(seq__58480);
var seq__58480__$1 = cljs.core.next(seq__58480);
var tag = first__58481;
var args = seq__58480__$1;
var vec__58482 = args;
var seq__58483 = cljs.core.seq(vec__58482);
var first__58484 = cljs.core.first(seq__58483);
var seq__58483__$1 = cljs.core.next(seq__58483);
var m = first__58484;
var rest_args = seq__58483__$1;
var vec__58485 = ((cljs.core.map_QMARK_(m))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.Keyword(null,"key","key",-1516042587),key),rest_args], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),key], null),args], null));
var mk = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58485,(0),null);
var rest_args_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58485,(1),null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,mk], null),rest_args_STAR_));
});
predict_prostate.content_reader.section = (function predict_prostate$content_reader$section(var_args){
var G__58489 = arguments.length;
switch (G__58489) {
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
var map__58490 = predict_prostate.content_reader.match_node(ttt,node,id);
var map__58490__$1 = cljs.core.__destructure_map(map__58490);
var _ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58490__$1,new cljs.core.Keyword(null,"_","_",1453416199));
var xs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58490__$1,new cljs.core.Keyword(null,"xs","xs",649443341));
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
var iter__4611__auto__ = (function predict_prostate$content_reader$all_subsections_$_iter__58493(s__58494){
return (new cljs.core.LazySeq(null,(function (){
var s__58494__$1 = s__58494;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__58494__$1);
if(temp__5753__auto__){
var s__58494__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__58494__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__58494__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__58496 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__58495 = (0);
while(true){
if((i__58495 < size__4610__auto__)){
var k = cljs.core._nth(c__4609__auto__,i__58495);
var vec__58497 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.rest(node),k);
var seq__58498 = cljs.core.seq(vec__58497);
var first__58499 = cljs.core.first(seq__58498);
var seq__58498__$1 = cljs.core.next(seq__58498);
var _ = first__58499;
var first__58499__$1 = cljs.core.first(seq__58498__$1);
var seq__58498__$2 = cljs.core.next(seq__58498__$1);
var title = first__58499__$1;
var content = seq__58498__$2;
cljs.core.chunk_append(b__58496,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),predict_prostate.results.util.alison_blue_3], null)], null),title], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (i__58495,vec__58497,seq__58498,first__58499,seq__58498__$1,_,first__58499__$1,seq__58498__$2,title,content,k,c__4609__auto__,size__4610__auto__,b__58496,s__58494__$2,temp__5753__auto__,node){
return (function (p1__58491_SHARP_,p2__58492_SHARP_){
return predict_prostate.content_reader.add_hiccup_key(["k",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__58491_SHARP_)].join(''),p2__58492_SHARP_);
});})(i__58495,vec__58497,seq__58498,first__58499,seq__58498__$1,_,first__58499__$1,seq__58498__$2,title,content,k,c__4609__auto__,size__4610__auto__,b__58496,s__58494__$2,temp__5753__auto__,node))
,content)], null));

var G__58504 = (i__58495 + (1));
i__58495 = G__58504;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58496),predict_prostate$content_reader$all_subsections_$_iter__58493(cljs.core.chunk_rest(s__58494__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58496),null);
}
} else {
var k = cljs.core.first(s__58494__$2);
var vec__58500 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.rest(node),k);
var seq__58501 = cljs.core.seq(vec__58500);
var first__58502 = cljs.core.first(seq__58501);
var seq__58501__$1 = cljs.core.next(seq__58501);
var _ = first__58502;
var first__58502__$1 = cljs.core.first(seq__58501__$1);
var seq__58501__$2 = cljs.core.next(seq__58501__$1);
var title = first__58502__$1;
var content = seq__58501__$2;
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),predict_prostate.results.util.alison_blue_3], null)], null),title], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (vec__58500,seq__58501,first__58502,seq__58501__$1,_,first__58502__$1,seq__58501__$2,title,content,k,s__58494__$2,temp__5753__auto__,node){
return (function (p1__58491_SHARP_,p2__58492_SHARP_){
return predict_prostate.content_reader.add_hiccup_key(["k",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__58491_SHARP_)].join(''),p2__58492_SHARP_);
});})(vec__58500,seq__58501,first__58502,seq__58501__$1,_,first__58502__$1,seq__58501__$2,title,content,k,s__58494__$2,temp__5753__auto__,node))
,content)], null),predict_prostate$content_reader$all_subsections_$_iter__58493(cljs.core.rest(s__58494__$2)));
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
