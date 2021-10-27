goog.provide('predict_prostate.content_reader');
/**
 * Regular expression that parses a CSS-style id and class from an element name.
 */
predict_prostate.content_reader.re_tag = /([^\s\.#]+)(?:#([^\s\.#]+))?(?:\.([^\s#]+))?/;
predict_prostate.content_reader.match_id = (function predict_prostate$content_reader$match_id(tag,id){

var vec__33885 = cljs.core.re_find(predict_prostate.content_reader.re_tag,cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33885,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33885,(1),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33885,(2),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33885,(3),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,tag_id);
});
predict_prostate.content_reader.match_node = (function predict_prostate$content_reader$match_node(node,id){
var vec__33894 = node;
var seq__33895 = cljs.core.seq(vec__33894);
var first__33896 = cljs.core.first(seq__33895);
var seq__33895__$1 = cljs.core.next(seq__33895);
var x = first__33896;
var xs = seq__33895__$1;
if((x == null)){
return null;
} else {
if(cljs.core.truth_(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(x))){
if(predict_prostate.content_reader.match_id(x,id)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"xs","xs",649443341),xs], null);
} else {
return (predict_prostate.content_reader.match_node.cljs$core$IFn$_invoke$arity$2 ? predict_prostate.content_reader.match_node.cljs$core$IFn$_invoke$arity$2(xs,id) : predict_prostate.content_reader.match_node.call(null,xs,id));
}
} else {
if(cljs.core.vector_QMARK_(x)){
var temp__5733__auto__ = (predict_prostate.content_reader.match_node.cljs$core$IFn$_invoke$arity$2 ? predict_prostate.content_reader.match_node.cljs$core$IFn$_invoke$arity$2(x,id) : predict_prostate.content_reader.match_node.call(null,x,id));
if(cljs.core.truth_(temp__5733__auto__)){
var rv = temp__5733__auto__;
return rv;
} else {
return (predict_prostate.content_reader.match_node.cljs$core$IFn$_invoke$arity$2 ? predict_prostate.content_reader.match_node.cljs$core$IFn$_invoke$arity$2(xs,id) : predict_prostate.content_reader.match_node.call(null,xs,id));
}
} else {
if(cljs.core.seq(xs)){
return (predict_prostate.content_reader.match_node.cljs$core$IFn$_invoke$arity$2 ? predict_prostate.content_reader.match_node.cljs$core$IFn$_invoke$arity$2(xs,id) : predict_prostate.content_reader.match_node.call(null,xs,id));
} else {
return null;

}
}
}
}
});
predict_prostate.content_reader.add_hiccup_key = (function predict_prostate$content_reader$add_hiccup_key(key,p__33903){
var vec__33904 = p__33903;
var seq__33905 = cljs.core.seq(vec__33904);
var first__33906 = cljs.core.first(seq__33905);
var seq__33905__$1 = cljs.core.next(seq__33905);
var tag = first__33906;
var args = seq__33905__$1;
var hiccup = vec__33904;
var vec__33907 = args;
var seq__33908 = cljs.core.seq(vec__33907);
var first__33909 = cljs.core.first(seq__33908);
var seq__33908__$1 = cljs.core.next(seq__33908);
var m = first__33909;
var rest_args = seq__33908__$1;
var vec__33910 = ((cljs.core.map_QMARK_(m))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.Keyword(null,"key","key",-1516042587),key),rest_args], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),key], null),args], null));
var mk = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33910,(0),null);
var rest_args_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33910,(1),null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,mk], null),rest_args_STAR_));
});
predict_prostate.content_reader.section = (function predict_prostate$content_reader$section(var_args){
var G__33917 = arguments.length;
switch (G__33917) {
case 2:
return predict_prostate.content_reader.section.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return predict_prostate.content_reader.section.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(predict_prostate.content_reader.section.cljs$core$IFn$_invoke$arity$2 = (function (node,id){
var map__33922 = predict_prostate.content_reader.match_node(node,id);
var map__33922__$1 = (((((!((map__33922 == null))))?(((((map__33922.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33922.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33922):map__33922);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33922__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var xs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33922__$1,new cljs.core.Keyword(null,"xs","xs",649443341));
return xs;
}));

(predict_prostate.content_reader.section.cljs$core$IFn$_invoke$arity$1 = (function (id){
return predict_prostate.content_reader.section.cljs$core$IFn$_invoke$arity$2(predict_prostate.content.content(),id);
}));

(predict_prostate.content_reader.section.cljs$lang$maxFixedArity = 2);

/**
 * loop through subsections adding keys.
 */
predict_prostate.content_reader.all_subsections = (function predict_prostate$content_reader$all_subsections(id){
var node = predict_prostate.content_reader.section.cljs$core$IFn$_invoke$arity$1(id);
var iter__4529__auto__ = (function predict_prostate$content_reader$all_subsections_$_iter__33944(s__33945){
return (new cljs.core.LazySeq(null,(function (){
var s__33945__$1 = s__33945;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__33945__$1);
if(temp__5735__auto__){
var s__33945__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__33945__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__33945__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__33947 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__33946 = (0);
while(true){
if((i__33946 < size__4528__auto__)){
var k = cljs.core._nth(c__4527__auto__,i__33946);
var vec__33949 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.rest(node),k);
var seq__33950 = cljs.core.seq(vec__33949);
var first__33951 = cljs.core.first(seq__33950);
var seq__33950__$1 = cljs.core.next(seq__33950);
var sec = first__33951;
var first__33951__$1 = cljs.core.first(seq__33950__$1);
var seq__33950__$2 = cljs.core.next(seq__33950__$1);
var title = first__33951__$1;
var content = seq__33950__$2;
cljs.core.chunk_append(b__33947,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),predict_prostate.results.util.alison_blue_3], null)], null),title], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (i__33946,vec__33949,seq__33950,first__33951,seq__33950__$1,sec,first__33951__$1,seq__33950__$2,title,content,k,c__4527__auto__,size__4528__auto__,b__33947,s__33945__$2,temp__5735__auto__,node){
return (function (p1__33924_SHARP_,p2__33925_SHARP_){
return predict_prostate.content_reader.add_hiccup_key(["k",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__33924_SHARP_)].join(''),p2__33925_SHARP_);
});})(i__33946,vec__33949,seq__33950,first__33951,seq__33950__$1,sec,first__33951__$1,seq__33950__$2,title,content,k,c__4527__auto__,size__4528__auto__,b__33947,s__33945__$2,temp__5735__auto__,node))
,content)], null));

var G__34037 = (i__33946 + (1));
i__33946 = G__34037;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__33947),predict_prostate$content_reader$all_subsections_$_iter__33944(cljs.core.chunk_rest(s__33945__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__33947),null);
}
} else {
var k = cljs.core.first(s__33945__$2);
var vec__33952 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.rest(node),k);
var seq__33953 = cljs.core.seq(vec__33952);
var first__33954 = cljs.core.first(seq__33953);
var seq__33953__$1 = cljs.core.next(seq__33953);
var sec = first__33954;
var first__33954__$1 = cljs.core.first(seq__33953__$1);
var seq__33953__$2 = cljs.core.next(seq__33953__$1);
var title = first__33954__$1;
var content = seq__33953__$2;
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),predict_prostate.results.util.alison_blue_3], null)], null),title], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (vec__33952,seq__33953,first__33954,seq__33953__$1,sec,first__33954__$1,seq__33953__$2,title,content,k,s__33945__$2,temp__5735__auto__,node){
return (function (p1__33924_SHARP_,p2__33925_SHARP_){
return predict_prostate.content_reader.add_hiccup_key(["k",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__33924_SHARP_)].join(''),p2__33925_SHARP_);
});})(vec__33952,seq__33953,first__33954,seq__33953__$1,sec,first__33954__$1,seq__33953__$2,title,content,k,s__33945__$2,temp__5735__auto__,node))
,content)], null),predict_prostate$content_reader$all_subsections_$_iter__33944(cljs.core.rest(s__33945__$2)));
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
