goog.provide('predict_prostate.content_reader');
/**
 * Regular expression that parses a CSS-style id and class from an element name.
 */
predict_prostate.content_reader.re_tag = /([^\s\.#]+)(?:#([^\s\.#]+))?(?:\.([^\s#]+))?/;
/**
 * return true if tag contains a hash tag-id matching id.
 */
predict_prostate.content_reader.match_id = (function predict_prostate$content_reader$match_id(tag,id){
var vec__158129 = cljs.core.re_find(predict_prostate.content_reader.re_tag,cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__158129,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__158129,(1),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__158129,(2),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__158129,(3),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,tag_id);
});
predict_prostate.content_reader.match_node = (function predict_prostate$content_reader$match_node(ttt,node,id){
var vec__158141 = node;
var seq__158142 = cljs.core.seq(vec__158141);
var first__158143 = cljs.core.first(seq__158142);
var seq__158142__$1 = cljs.core.next(seq__158142);
var x = first__158143;
var xs = seq__158142__$1;
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
predict_prostate.content_reader.add_hiccup_key = (function predict_prostate$content_reader$add_hiccup_key(key,p__158147){
var vec__158149 = p__158147;
var seq__158150 = cljs.core.seq(vec__158149);
var first__158151 = cljs.core.first(seq__158150);
var seq__158150__$1 = cljs.core.next(seq__158150);
var tag = first__158151;
var args = seq__158150__$1;
var vec__158155 = args;
var seq__158156 = cljs.core.seq(vec__158155);
var first__158157 = cljs.core.first(seq__158156);
var seq__158156__$1 = cljs.core.next(seq__158156);
var m = first__158157;
var rest_args = seq__158156__$1;
var vec__158158 = ((cljs.core.map_QMARK_(m))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.Keyword(null,"key","key",-1516042587),key),rest_args], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),key], null),args], null));
var mk = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__158158,(0),null);
var rest_args_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__158158,(1),null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,mk], null),rest_args_STAR_));
});
predict_prostate.content_reader.section = (function predict_prostate$content_reader$section(var_args){
var G__158169 = arguments.length;
switch (G__158169) {
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
var map__158171 = predict_prostate.content_reader.match_node(ttt,node,id);
var map__158171__$1 = (((((!((map__158171 == null))))?(((((map__158171.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__158171.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__158171):map__158171);
var _ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__158171__$1,new cljs.core.Keyword(null,"_","_",1453416199));
var xs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__158171__$1,new cljs.core.Keyword(null,"xs","xs",649443341));
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
var iter__4529__auto__ = (function predict_prostate$content_reader$all_subsections_$_iter__158179(s__158180){
return (new cljs.core.LazySeq(null,(function (){
var s__158180__$1 = s__158180;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__158180__$1);
if(temp__5735__auto__){
var s__158180__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__158180__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__158180__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__158182 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__158181 = (0);
while(true){
if((i__158181 < size__4528__auto__)){
var k = cljs.core._nth(c__4527__auto__,i__158181);
var vec__158187 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.rest(node),k);
var seq__158188 = cljs.core.seq(vec__158187);
var first__158189 = cljs.core.first(seq__158188);
var seq__158188__$1 = cljs.core.next(seq__158188);
var _ = first__158189;
var first__158189__$1 = cljs.core.first(seq__158188__$1);
var seq__158188__$2 = cljs.core.next(seq__158188__$1);
var title = first__158189__$1;
var content = seq__158188__$2;
cljs.core.chunk_append(b__158182,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),predict_prostate.results.util.alison_blue_3], null)], null),title], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (i__158181,vec__158187,seq__158188,first__158189,seq__158188__$1,_,first__158189__$1,seq__158188__$2,title,content,k,c__4527__auto__,size__4528__auto__,b__158182,s__158180__$2,temp__5735__auto__,node){
return (function (p1__158175_SHARP_,p2__158176_SHARP_){
return predict_prostate.content_reader.add_hiccup_key(["k",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__158175_SHARP_)].join(''),p2__158176_SHARP_);
});})(i__158181,vec__158187,seq__158188,first__158189,seq__158188__$1,_,first__158189__$1,seq__158188__$2,title,content,k,c__4527__auto__,size__4528__auto__,b__158182,s__158180__$2,temp__5735__auto__,node))
,content)], null));

var G__158201 = (i__158181 + (1));
i__158181 = G__158201;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__158182),predict_prostate$content_reader$all_subsections_$_iter__158179(cljs.core.chunk_rest(s__158180__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__158182),null);
}
} else {
var k = cljs.core.first(s__158180__$2);
var vec__158193 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.rest(node),k);
var seq__158194 = cljs.core.seq(vec__158193);
var first__158195 = cljs.core.first(seq__158194);
var seq__158194__$1 = cljs.core.next(seq__158194);
var _ = first__158195;
var first__158195__$1 = cljs.core.first(seq__158194__$1);
var seq__158194__$2 = cljs.core.next(seq__158194__$1);
var title = first__158195__$1;
var content = seq__158194__$2;
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),predict_prostate.results.util.alison_blue_3], null)], null),title], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (vec__158193,seq__158194,first__158195,seq__158194__$1,_,first__158195__$1,seq__158194__$2,title,content,k,s__158180__$2,temp__5735__auto__,node){
return (function (p1__158175_SHARP_,p2__158176_SHARP_){
return predict_prostate.content_reader.add_hiccup_key(["k",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__158175_SHARP_)].join(''),p2__158176_SHARP_);
});})(vec__158193,seq__158194,first__158195,seq__158194__$1,_,first__158195__$1,seq__158194__$2,title,content,k,s__158180__$2,temp__5735__auto__,node))
,content)], null),predict_prostate$content_reader$all_subsections_$_iter__158179(cljs.core.rest(s__158180__$2)));
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
