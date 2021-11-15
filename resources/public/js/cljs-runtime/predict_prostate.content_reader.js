goog.provide('predict_prostate.content_reader');
/**
 * Regular expression that parses a CSS-style id and class from an element name.
 */
predict_prostate.content_reader.re_tag = /([^\s\.#]+)(?:#([^\s\.#]+))?(?:\.([^\s#]+))?/;
/**
 * return true if tag contains a hash tag-id matching id.
 */
predict_prostate.content_reader.match_id = (function predict_prostate$content_reader$match_id(tag,id){
var vec__32910 = cljs.core.re_find(predict_prostate.content_reader.re_tag,cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32910,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32910,(1),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32910,(2),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32910,(3),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,tag_id);
});
predict_prostate.content_reader.match_node = (function predict_prostate$content_reader$match_node(ttt,node,id){
var vec__32913 = node;
var seq__32914 = cljs.core.seq(vec__32913);
var first__32915 = cljs.core.first(seq__32914);
var seq__32914__$1 = cljs.core.next(seq__32914);
var x = first__32915;
var xs = seq__32914__$1;
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
predict_prostate.content_reader.add_hiccup_key = (function predict_prostate$content_reader$add_hiccup_key(key,p__32916){
var vec__32917 = p__32916;
var seq__32918 = cljs.core.seq(vec__32917);
var first__32921 = cljs.core.first(seq__32918);
var seq__32918__$1 = cljs.core.next(seq__32918);
var tag = first__32921;
var args = seq__32918__$1;
var vec__32923 = args;
var seq__32924 = cljs.core.seq(vec__32923);
var first__32925 = cljs.core.first(seq__32924);
var seq__32924__$1 = cljs.core.next(seq__32924);
var m = first__32925;
var rest_args = seq__32924__$1;
var vec__32926 = ((cljs.core.map_QMARK_(m))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.Keyword(null,"key","key",-1516042587),key),rest_args], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),key], null),args], null));
var mk = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32926,(0),null);
var rest_args_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32926,(1),null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,mk], null),rest_args_STAR_));
});
predict_prostate.content_reader.section = (function predict_prostate$content_reader$section(var_args){
var G__32952 = arguments.length;
switch (G__32952) {
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
var map__32966 = predict_prostate.content_reader.match_node(ttt,node,id);
var map__32966__$1 = (((((!((map__32966 == null))))?(((((map__32966.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32966.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32966):map__32966);
var _ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32966__$1,new cljs.core.Keyword(null,"_","_",1453416199));
var xs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32966__$1,new cljs.core.Keyword(null,"xs","xs",649443341));
return xs;
}));

(predict_prostate.content_reader.section.cljs$core$IFn$_invoke$arity$2 = (function (ttt,id){
return predict_prostate.content_reader.section.cljs$core$IFn$_invoke$arity$3(ttt,predict_prostate.content.content(),id);
}));

(predict_prostate.content_reader.section.cljs$lang$maxFixedArity = 3);

/**
 * loop through subsections adding keys.
 */
predict_prostate.content_reader.all_subsections = (function predict_prostate$content_reader$all_subsections(ttt,id){
var node = predict_prostate.content_reader.section.cljs$core$IFn$_invoke$arity$2(ttt,id);
var iter__4529__auto__ = (function predict_prostate$content_reader$all_subsections_$_iter__32971(s__32972){
return (new cljs.core.LazySeq(null,(function (){
var s__32972__$1 = s__32972;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__32972__$1);
if(temp__5735__auto__){
var s__32972__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__32972__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__32972__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__32974 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__32973 = (0);
while(true){
if((i__32973 < size__4528__auto__)){
var k = cljs.core._nth(c__4527__auto__,i__32973);
var vec__32976 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.rest(node),k);
var seq__32977 = cljs.core.seq(vec__32976);
var first__32978 = cljs.core.first(seq__32977);
var seq__32977__$1 = cljs.core.next(seq__32977);
var _ = first__32978;
var first__32978__$1 = cljs.core.first(seq__32977__$1);
var seq__32977__$2 = cljs.core.next(seq__32977__$1);
var title = first__32978__$1;
var content = seq__32977__$2;
cljs.core.chunk_append(b__32974,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),predict_prostate.results.util.alison_blue_3], null)], null),title], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (i__32973,vec__32976,seq__32977,first__32978,seq__32977__$1,_,first__32978__$1,seq__32977__$2,title,content,k,c__4527__auto__,size__4528__auto__,b__32974,s__32972__$2,temp__5735__auto__,node){
return (function (p1__32969_SHARP_,p2__32970_SHARP_){
return predict_prostate.content_reader.add_hiccup_key(["k",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__32969_SHARP_)].join(''),p2__32970_SHARP_);
});})(i__32973,vec__32976,seq__32977,first__32978,seq__32977__$1,_,first__32978__$1,seq__32977__$2,title,content,k,c__4527__auto__,size__4528__auto__,b__32974,s__32972__$2,temp__5735__auto__,node))
,content)], null));

var G__33011 = (i__32973 + (1));
i__32973 = G__33011;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__32974),predict_prostate$content_reader$all_subsections_$_iter__32971(cljs.core.chunk_rest(s__32972__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__32974),null);
}
} else {
var k = cljs.core.first(s__32972__$2);
var vec__32980 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.rest(node),k);
var seq__32981 = cljs.core.seq(vec__32980);
var first__32982 = cljs.core.first(seq__32981);
var seq__32981__$1 = cljs.core.next(seq__32981);
var _ = first__32982;
var first__32982__$1 = cljs.core.first(seq__32981__$1);
var seq__32981__$2 = cljs.core.next(seq__32981__$1);
var title = first__32982__$1;
var content = seq__32981__$2;
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),predict_prostate.results.util.alison_blue_3], null)], null),title], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (vec__32980,seq__32981,first__32982,seq__32981__$1,_,first__32982__$1,seq__32981__$2,title,content,k,s__32972__$2,temp__5735__auto__,node){
return (function (p1__32969_SHARP_,p2__32970_SHARP_){
return predict_prostate.content_reader.add_hiccup_key(["k",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__32969_SHARP_)].join(''),p2__32970_SHARP_);
});})(vec__32980,seq__32981,first__32982,seq__32981__$1,_,first__32982__$1,seq__32981__$2,title,content,k,s__32972__$2,temp__5735__auto__,node))
,content)], null),predict_prostate$content_reader$all_subsections_$_iter__32971(cljs.core.rest(s__32972__$2)));
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
