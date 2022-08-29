goog.provide('predict_prostate.content_reader');
/**
 * Regular expression that parses a CSS-style id and class from an element name.
 */
predict_prostate.content_reader.re_tag = /([^\s\.#]+)(?:#([^\s\.#]+))?(?:\.([^\s#]+))?/;
/**
 * return true if tag contains a hash tag-id matching id.
 */
predict_prostate.content_reader.match_id = (function predict_prostate$content_reader$match_id(tag,id){
var vec__33700 = cljs.core.re_find(predict_prostate.content_reader.re_tag,cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33700,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33700,(1),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33700,(2),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33700,(3),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,tag_id);
});
predict_prostate.content_reader.match_node = (function predict_prostate$content_reader$match_node(ttt,node,id){
var vec__33703 = node;
var seq__33704 = cljs.core.seq(vec__33703);
var first__33705 = cljs.core.first(seq__33704);
var seq__33704__$1 = cljs.core.next(seq__33704);
var x = first__33705;
var xs = seq__33704__$1;
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
predict_prostate.content_reader.add_hiccup_key = (function predict_prostate$content_reader$add_hiccup_key(key,p__33706){
var vec__33707 = p__33706;
var seq__33708 = cljs.core.seq(vec__33707);
var first__33709 = cljs.core.first(seq__33708);
var seq__33708__$1 = cljs.core.next(seq__33708);
var tag = first__33709;
var args = seq__33708__$1;
var vec__33710 = args;
var seq__33711 = cljs.core.seq(vec__33710);
var first__33712 = cljs.core.first(seq__33711);
var seq__33711__$1 = cljs.core.next(seq__33711);
var m = first__33712;
var rest_args = seq__33711__$1;
var vec__33713 = ((cljs.core.map_QMARK_(m))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.Keyword(null,"key","key",-1516042587),key),rest_args], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),key], null),args], null));
var mk = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33713,(0),null);
var rest_args_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33713,(1),null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,mk], null),rest_args_STAR_));
});
predict_prostate.content_reader.section = (function predict_prostate$content_reader$section(var_args){
var G__33717 = arguments.length;
switch (G__33717) {
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
var map__33721 = predict_prostate.content_reader.match_node(ttt,node,id);
var map__33721__$1 = cljs.core.__destructure_map(map__33721);
var _ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33721__$1,new cljs.core.Keyword(null,"_","_",1453416199));
var xs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33721__$1,new cljs.core.Keyword(null,"xs","xs",649443341));
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
var iter__4611__auto__ = (function predict_prostate$content_reader$all_subsections_$_iter__33724(s__33725){
return (new cljs.core.LazySeq(null,(function (){
var s__33725__$1 = s__33725;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__33725__$1);
if(temp__5753__auto__){
var s__33725__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__33725__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__33725__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__33727 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__33726 = (0);
while(true){
if((i__33726 < size__4610__auto__)){
var k = cljs.core._nth(c__4609__auto__,i__33726);
var vec__33728 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.rest(node),k);
var seq__33729 = cljs.core.seq(vec__33728);
var first__33730 = cljs.core.first(seq__33729);
var seq__33729__$1 = cljs.core.next(seq__33729);
var _ = first__33730;
var first__33730__$1 = cljs.core.first(seq__33729__$1);
var seq__33729__$2 = cljs.core.next(seq__33729__$1);
var title = first__33730__$1;
var content = seq__33729__$2;
cljs.core.chunk_append(b__33727,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),predict_prostate.results.util.alison_blue_3], null)], null),title], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (i__33726,vec__33728,seq__33729,first__33730,seq__33729__$1,_,first__33730__$1,seq__33729__$2,title,content,k,c__4609__auto__,size__4610__auto__,b__33727,s__33725__$2,temp__5753__auto__,node){
return (function (p1__33722_SHARP_,p2__33723_SHARP_){
return predict_prostate.content_reader.add_hiccup_key(["k",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__33722_SHARP_)].join(''),p2__33723_SHARP_);
});})(i__33726,vec__33728,seq__33729,first__33730,seq__33729__$1,_,first__33730__$1,seq__33729__$2,title,content,k,c__4609__auto__,size__4610__auto__,b__33727,s__33725__$2,temp__5753__auto__,node))
,content)], null));

var G__33735 = (i__33726 + (1));
i__33726 = G__33735;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__33727),predict_prostate$content_reader$all_subsections_$_iter__33724(cljs.core.chunk_rest(s__33725__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__33727),null);
}
} else {
var k = cljs.core.first(s__33725__$2);
var vec__33731 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.rest(node),k);
var seq__33732 = cljs.core.seq(vec__33731);
var first__33733 = cljs.core.first(seq__33732);
var seq__33732__$1 = cljs.core.next(seq__33732);
var _ = first__33733;
var first__33733__$1 = cljs.core.first(seq__33732__$1);
var seq__33732__$2 = cljs.core.next(seq__33732__$1);
var title = first__33733__$1;
var content = seq__33732__$2;
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),predict_prostate.results.util.alison_blue_3], null)], null),title], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (vec__33731,seq__33732,first__33733,seq__33732__$1,_,first__33733__$1,seq__33732__$2,title,content,k,s__33725__$2,temp__5753__auto__,node){
return (function (p1__33722_SHARP_,p2__33723_SHARP_){
return predict_prostate.content_reader.add_hiccup_key(["k",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__33722_SHARP_)].join(''),p2__33723_SHARP_);
});})(vec__33731,seq__33732,first__33733,seq__33732__$1,_,first__33733__$1,seq__33732__$2,title,content,k,s__33725__$2,temp__5753__auto__,node))
,content)], null),predict_prostate$content_reader$all_subsections_$_iter__33724(cljs.core.rest(s__33725__$2)));
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
