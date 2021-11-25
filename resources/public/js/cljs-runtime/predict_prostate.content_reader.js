goog.provide('predict_prostate.content_reader');
/**
 * Regular expression that parses a CSS-style id and class from an element name.
 */
predict_prostate.content_reader.re_tag = /([^\s\.#]+)(?:#([^\s\.#]+))?(?:\.([^\s#]+))?/;
/**
 * return true if tag contains a hash tag-id matching id.
 */
predict_prostate.content_reader.match_id = (function predict_prostate$content_reader$match_id(tag,id){
var vec__93875 = cljs.core.re_find(predict_prostate.content_reader.re_tag,cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__93875,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__93875,(1),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__93875,(2),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__93875,(3),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,tag_id);
});
predict_prostate.content_reader.match_node = (function predict_prostate$content_reader$match_node(ttt,node,id){
var vec__93881 = node;
var seq__93882 = cljs.core.seq(vec__93881);
var first__93883 = cljs.core.first(seq__93882);
var seq__93882__$1 = cljs.core.next(seq__93882);
var x = first__93883;
var xs = seq__93882__$1;
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
predict_prostate.content_reader.add_hiccup_key = (function predict_prostate$content_reader$add_hiccup_key(key,p__93893){
var vec__93894 = p__93893;
var seq__93895 = cljs.core.seq(vec__93894);
var first__93896 = cljs.core.first(seq__93895);
var seq__93895__$1 = cljs.core.next(seq__93895);
var tag = first__93896;
var args = seq__93895__$1;
var vec__93897 = args;
var seq__93898 = cljs.core.seq(vec__93897);
var first__93899 = cljs.core.first(seq__93898);
var seq__93898__$1 = cljs.core.next(seq__93898);
var m = first__93899;
var rest_args = seq__93898__$1;
var vec__93900 = ((cljs.core.map_QMARK_(m))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.Keyword(null,"key","key",-1516042587),key),rest_args], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),key], null),args], null));
var mk = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__93900,(0),null);
var rest_args_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__93900,(1),null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,mk], null),rest_args_STAR_));
});
predict_prostate.content_reader.section = (function predict_prostate$content_reader$section(var_args){
var G__93914 = arguments.length;
switch (G__93914) {
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
var map__93917 = predict_prostate.content_reader.match_node(ttt,node,id);
var map__93917__$1 = (((((!((map__93917 == null))))?(((((map__93917.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__93917.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__93917):map__93917);
var _ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93917__$1,new cljs.core.Keyword(null,"_","_",1453416199));
var xs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93917__$1,new cljs.core.Keyword(null,"xs","xs",649443341));
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
var iter__4529__auto__ = (function predict_prostate$content_reader$all_subsections_$_iter__93929(s__93930){
return (new cljs.core.LazySeq(null,(function (){
var s__93930__$1 = s__93930;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__93930__$1);
if(temp__5735__auto__){
var s__93930__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__93930__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__93930__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__93932 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__93931 = (0);
while(true){
if((i__93931 < size__4528__auto__)){
var k = cljs.core._nth(c__4527__auto__,i__93931);
var vec__93936 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.rest(node),k);
var seq__93937 = cljs.core.seq(vec__93936);
var first__93938 = cljs.core.first(seq__93937);
var seq__93937__$1 = cljs.core.next(seq__93937);
var _ = first__93938;
var first__93938__$1 = cljs.core.first(seq__93937__$1);
var seq__93937__$2 = cljs.core.next(seq__93937__$1);
var title = first__93938__$1;
var content = seq__93937__$2;
cljs.core.chunk_append(b__93932,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),predict_prostate.results.util.alison_blue_3], null)], null),title], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (i__93931,vec__93936,seq__93937,first__93938,seq__93937__$1,_,first__93938__$1,seq__93937__$2,title,content,k,c__4527__auto__,size__4528__auto__,b__93932,s__93930__$2,temp__5735__auto__,node){
return (function (p1__93923_SHARP_,p2__93924_SHARP_){
return predict_prostate.content_reader.add_hiccup_key(["k",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__93923_SHARP_)].join(''),p2__93924_SHARP_);
});})(i__93931,vec__93936,seq__93937,first__93938,seq__93937__$1,_,first__93938__$1,seq__93937__$2,title,content,k,c__4527__auto__,size__4528__auto__,b__93932,s__93930__$2,temp__5735__auto__,node))
,content)], null));

var G__93947 = (i__93931 + (1));
i__93931 = G__93947;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__93932),predict_prostate$content_reader$all_subsections_$_iter__93929(cljs.core.chunk_rest(s__93930__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__93932),null);
}
} else {
var k = cljs.core.first(s__93930__$2);
var vec__93942 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.rest(node),k);
var seq__93943 = cljs.core.seq(vec__93942);
var first__93944 = cljs.core.first(seq__93943);
var seq__93943__$1 = cljs.core.next(seq__93943);
var _ = first__93944;
var first__93944__$1 = cljs.core.first(seq__93943__$1);
var seq__93943__$2 = cljs.core.next(seq__93943__$1);
var title = first__93944__$1;
var content = seq__93943__$2;
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),predict_prostate.results.util.alison_blue_3], null)], null),title], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (vec__93942,seq__93943,first__93944,seq__93943__$1,_,first__93944__$1,seq__93943__$2,title,content,k,s__93930__$2,temp__5735__auto__,node){
return (function (p1__93923_SHARP_,p2__93924_SHARP_){
return predict_prostate.content_reader.add_hiccup_key(["k",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__93923_SHARP_)].join(''),p2__93924_SHARP_);
});})(vec__93942,seq__93943,first__93944,seq__93943__$1,_,first__93944__$1,seq__93943__$2,title,content,k,s__93930__$2,temp__5735__auto__,node))
,content)], null),predict_prostate$content_reader$all_subsections_$_iter__93929(cljs.core.rest(s__93930__$2)));
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
