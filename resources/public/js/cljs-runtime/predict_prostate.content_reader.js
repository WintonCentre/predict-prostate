goog.provide('predict_prostate.content_reader');
/**
 * Regular expression that parses a CSS-style id and class from an element name.
 */
predict_prostate.content_reader.re_tag = /([^\s\.#]+)(?:#([^\s\.#]+))?(?:\.([^\s#]+))?/;
/**
 * return true if tag contains a hash tag-id matching id.
 */
predict_prostate.content_reader.match_id = (function predict_prostate$content_reader$match_id(tag,id){
var vec__143566 = cljs.core.re_find(predict_prostate.content_reader.re_tag,cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__143566,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__143566,(1),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__143566,(2),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__143566,(3),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,tag_id);
});
predict_prostate.content_reader.match_node = (function predict_prostate$content_reader$match_node(ttt,node,id){
var vec__143572 = node;
var seq__143573 = cljs.core.seq(vec__143572);
var first__143574 = cljs.core.first(seq__143573);
var seq__143573__$1 = cljs.core.next(seq__143573);
var x = first__143574;
var xs = seq__143573__$1;
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
predict_prostate.content_reader.add_hiccup_key = (function predict_prostate$content_reader$add_hiccup_key(key,p__143581){
var vec__143583 = p__143581;
var seq__143584 = cljs.core.seq(vec__143583);
var first__143585 = cljs.core.first(seq__143584);
var seq__143584__$1 = cljs.core.next(seq__143584);
var tag = first__143585;
var args = seq__143584__$1;
var vec__143589 = args;
var seq__143590 = cljs.core.seq(vec__143589);
var first__143591 = cljs.core.first(seq__143590);
var seq__143590__$1 = cljs.core.next(seq__143590);
var m = first__143591;
var rest_args = seq__143590__$1;
var vec__143592 = ((cljs.core.map_QMARK_(m))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.Keyword(null,"key","key",-1516042587),key),rest_args], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),key], null),args], null));
var mk = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__143592,(0),null);
var rest_args_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__143592,(1),null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,mk], null),rest_args_STAR_));
});
predict_prostate.content_reader.section = (function predict_prostate$content_reader$section(var_args){
var G__143603 = arguments.length;
switch (G__143603) {
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
var map__143605 = predict_prostate.content_reader.match_node(ttt,node,id);
var map__143605__$1 = (((((!((map__143605 == null))))?(((((map__143605.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__143605.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__143605):map__143605);
var _ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__143605__$1,new cljs.core.Keyword(null,"_","_",1453416199));
var xs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__143605__$1,new cljs.core.Keyword(null,"xs","xs",649443341));
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
var iter__4529__auto__ = (function predict_prostate$content_reader$all_subsections_$_iter__143617(s__143618){
return (new cljs.core.LazySeq(null,(function (){
var s__143618__$1 = s__143618;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__143618__$1);
if(temp__5735__auto__){
var s__143618__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__143618__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__143618__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__143620 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__143619 = (0);
while(true){
if((i__143619 < size__4528__auto__)){
var k = cljs.core._nth(c__4527__auto__,i__143619);
var vec__143624 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.rest(node),k);
var seq__143625 = cljs.core.seq(vec__143624);
var first__143626 = cljs.core.first(seq__143625);
var seq__143625__$1 = cljs.core.next(seq__143625);
var _ = first__143626;
var first__143626__$1 = cljs.core.first(seq__143625__$1);
var seq__143625__$2 = cljs.core.next(seq__143625__$1);
var title = first__143626__$1;
var content = seq__143625__$2;
cljs.core.chunk_append(b__143620,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),predict_prostate.results.util.alison_blue_3], null)], null),title], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (i__143619,vec__143624,seq__143625,first__143626,seq__143625__$1,_,first__143626__$1,seq__143625__$2,title,content,k,c__4527__auto__,size__4528__auto__,b__143620,s__143618__$2,temp__5735__auto__,node){
return (function (p1__143611_SHARP_,p2__143612_SHARP_){
return predict_prostate.content_reader.add_hiccup_key(["k",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__143611_SHARP_)].join(''),p2__143612_SHARP_);
});})(i__143619,vec__143624,seq__143625,first__143626,seq__143625__$1,_,first__143626__$1,seq__143625__$2,title,content,k,c__4527__auto__,size__4528__auto__,b__143620,s__143618__$2,temp__5735__auto__,node))
,content)], null));

var G__143635 = (i__143619 + (1));
i__143619 = G__143635;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__143620),predict_prostate$content_reader$all_subsections_$_iter__143617(cljs.core.chunk_rest(s__143618__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__143620),null);
}
} else {
var k = cljs.core.first(s__143618__$2);
var vec__143627 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.rest(node),k);
var seq__143628 = cljs.core.seq(vec__143627);
var first__143629 = cljs.core.first(seq__143628);
var seq__143628__$1 = cljs.core.next(seq__143628);
var _ = first__143629;
var first__143629__$1 = cljs.core.first(seq__143628__$1);
var seq__143628__$2 = cljs.core.next(seq__143628__$1);
var title = first__143629__$1;
var content = seq__143628__$2;
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),predict_prostate.results.util.alison_blue_3], null)], null),title], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (vec__143627,seq__143628,first__143629,seq__143628__$1,_,first__143629__$1,seq__143628__$2,title,content,k,s__143618__$2,temp__5735__auto__,node){
return (function (p1__143611_SHARP_,p2__143612_SHARP_){
return predict_prostate.content_reader.add_hiccup_key(["k",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__143611_SHARP_)].join(''),p2__143612_SHARP_);
});})(vec__143627,seq__143628,first__143629,seq__143628__$1,_,first__143629__$1,seq__143628__$2,title,content,k,s__143618__$2,temp__5735__auto__,node))
,content)], null),predict_prostate$content_reader$all_subsections_$_iter__143617(cljs.core.rest(s__143618__$2)));
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
