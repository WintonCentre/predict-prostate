goog.provide('predict_prostate.content_reader');
/**
 * Regular expression that parses a CSS-style id and class from an element name.
 */
predict_prostate.content_reader.re_tag = /([^\s\.#]+)(?:#([^\s\.#]+))?(?:\.([^\s#]+))?/;
/**
 * return true if tag contains a hash tag-id matching id.
 */
predict_prostate.content_reader.match_id = (function predict_prostate$content_reader$match_id(tag,id){
var vec__163676 = cljs.core.re_find(predict_prostate.content_reader.re_tag,cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__163676,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__163676,(1),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__163676,(2),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__163676,(3),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,tag_id);
});
predict_prostate.content_reader.match_node = (function predict_prostate$content_reader$match_node(ttt,node,id){
var vec__163686 = node;
var seq__163687 = cljs.core.seq(vec__163686);
var first__163688 = cljs.core.first(seq__163687);
var seq__163687__$1 = cljs.core.next(seq__163687);
var x = first__163688;
var xs = seq__163687__$1;
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
predict_prostate.content_reader.add_hiccup_key = (function predict_prostate$content_reader$add_hiccup_key(key,p__163695){
var vec__163696 = p__163695;
var seq__163697 = cljs.core.seq(vec__163696);
var first__163698 = cljs.core.first(seq__163697);
var seq__163697__$1 = cljs.core.next(seq__163697);
var tag = first__163698;
var args = seq__163697__$1;
var vec__163705 = args;
var seq__163706 = cljs.core.seq(vec__163705);
var first__163707 = cljs.core.first(seq__163706);
var seq__163706__$1 = cljs.core.next(seq__163706);
var m = first__163707;
var rest_args = seq__163706__$1;
var vec__163708 = ((cljs.core.map_QMARK_(m))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.Keyword(null,"key","key",-1516042587),key),rest_args], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),key], null),args], null));
var mk = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__163708,(0),null);
var rest_args_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__163708,(1),null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,mk], null),rest_args_STAR_));
});
predict_prostate.content_reader.section = (function predict_prostate$content_reader$section(var_args){
var G__163714 = arguments.length;
switch (G__163714) {
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
var map__163715 = predict_prostate.content_reader.match_node(ttt,node,id);
var map__163715__$1 = (((((!((map__163715 == null))))?(((((map__163715.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__163715.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__163715):map__163715);
var _ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__163715__$1,new cljs.core.Keyword(null,"_","_",1453416199));
var xs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__163715__$1,new cljs.core.Keyword(null,"xs","xs",649443341));
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
var iter__4529__auto__ = (function predict_prostate$content_reader$all_subsections_$_iter__163724(s__163726){
return (new cljs.core.LazySeq(null,(function (){
var s__163726__$1 = s__163726;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__163726__$1);
if(temp__5735__auto__){
var s__163726__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__163726__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__163726__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__163730 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__163728 = (0);
while(true){
if((i__163728 < size__4528__auto__)){
var k = cljs.core._nth(c__4527__auto__,i__163728);
var vec__163734 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.rest(node),k);
var seq__163735 = cljs.core.seq(vec__163734);
var first__163736 = cljs.core.first(seq__163735);
var seq__163735__$1 = cljs.core.next(seq__163735);
var _ = first__163736;
var first__163736__$1 = cljs.core.first(seq__163735__$1);
var seq__163735__$2 = cljs.core.next(seq__163735__$1);
var title = first__163736__$1;
var content = seq__163735__$2;
cljs.core.chunk_append(b__163730,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),predict_prostate.results.util.alison_blue_3], null)], null),title], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (i__163728,vec__163734,seq__163735,first__163736,seq__163735__$1,_,first__163736__$1,seq__163735__$2,title,content,k,c__4527__auto__,size__4528__auto__,b__163730,s__163726__$2,temp__5735__auto__,node){
return (function (p1__163720_SHARP_,p2__163721_SHARP_){
return predict_prostate.content_reader.add_hiccup_key(["k",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__163720_SHARP_)].join(''),p2__163721_SHARP_);
});})(i__163728,vec__163734,seq__163735,first__163736,seq__163735__$1,_,first__163736__$1,seq__163735__$2,title,content,k,c__4527__auto__,size__4528__auto__,b__163730,s__163726__$2,temp__5735__auto__,node))
,content)], null));

var G__163745 = (i__163728 + (1));
i__163728 = G__163745;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__163730),predict_prostate$content_reader$all_subsections_$_iter__163724(cljs.core.chunk_rest(s__163726__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__163730),null);
}
} else {
var k = cljs.core.first(s__163726__$2);
var vec__163737 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.rest(node),k);
var seq__163738 = cljs.core.seq(vec__163737);
var first__163739 = cljs.core.first(seq__163738);
var seq__163738__$1 = cljs.core.next(seq__163738);
var _ = first__163739;
var first__163739__$1 = cljs.core.first(seq__163738__$1);
var seq__163738__$2 = cljs.core.next(seq__163738__$1);
var title = first__163739__$1;
var content = seq__163738__$2;
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),predict_prostate.results.util.alison_blue_3], null)], null),title], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (vec__163737,seq__163738,first__163739,seq__163738__$1,_,first__163739__$1,seq__163738__$2,title,content,k,s__163726__$2,temp__5735__auto__,node){
return (function (p1__163720_SHARP_,p2__163721_SHARP_){
return predict_prostate.content_reader.add_hiccup_key(["k",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__163720_SHARP_)].join(''),p2__163721_SHARP_);
});})(vec__163737,seq__163738,first__163739,seq__163738__$1,_,first__163739__$1,seq__163738__$2,title,content,k,s__163726__$2,temp__5735__auto__,node))
,content)], null),predict_prostate$content_reader$all_subsections_$_iter__163724(cljs.core.rest(s__163726__$2)));
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
