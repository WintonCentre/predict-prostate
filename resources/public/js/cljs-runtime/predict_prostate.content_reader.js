goog.provide('predict_prostate.content_reader');
/**
 * Regular expression that parses a CSS-style id and class from an element name.
 */
predict_prostate.content_reader.re_tag = /([^\s\.#]+)(?:#([^\s\.#]+))?(?:\.([^\s#]+))?/;
/**
 * return true if tag contains a hash tag-id matching id.
 */
predict_prostate.content_reader.match_id = (function predict_prostate$content_reader$match_id(tag,id){
var vec__22777 = cljs.core.re_find(predict_prostate.content_reader.re_tag,cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22777,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22777,(1),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22777,(2),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22777,(3),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,tag_id);
});
predict_prostate.content_reader.match_node = (function predict_prostate$content_reader$match_node(ttt,node,id){
var vec__22780 = node;
var seq__22781 = cljs.core.seq(vec__22780);
var first__22782 = cljs.core.first(seq__22781);
var seq__22781__$1 = cljs.core.next(seq__22781);
var x = first__22782;
var xs = seq__22781__$1;
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
predict_prostate.content_reader.add_hiccup_key = (function predict_prostate$content_reader$add_hiccup_key(key,p__22783){
var vec__22784 = p__22783;
var seq__22785 = cljs.core.seq(vec__22784);
var first__22786 = cljs.core.first(seq__22785);
var seq__22785__$1 = cljs.core.next(seq__22785);
var tag = first__22786;
var args = seq__22785__$1;
var vec__22787 = args;
var seq__22788 = cljs.core.seq(vec__22787);
var first__22789 = cljs.core.first(seq__22788);
var seq__22788__$1 = cljs.core.next(seq__22788);
var m = first__22789;
var rest_args = seq__22788__$1;
var vec__22790 = ((cljs.core.map_QMARK_(m))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.Keyword(null,"key","key",-1516042587),key),rest_args], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),key], null),args], null));
var mk = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22790,(0),null);
var rest_args_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22790,(1),null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,mk], null),rest_args_STAR_));
});
predict_prostate.content_reader.section = (function predict_prostate$content_reader$section(var_args){
var G__22794 = arguments.length;
switch (G__22794) {
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
var map__22798 = predict_prostate.content_reader.match_node(ttt,node,id);
var map__22798__$1 = cljs.core.__destructure_map(map__22798);
var _ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22798__$1,new cljs.core.Keyword(null,"_","_",1453416199));
var xs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22798__$1,new cljs.core.Keyword(null,"xs","xs",649443341));
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
var iter__4611__auto__ = (function predict_prostate$content_reader$all_subsections_$_iter__22801(s__22802){
return (new cljs.core.LazySeq(null,(function (){
var s__22802__$1 = s__22802;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__22802__$1);
if(temp__5753__auto__){
var s__22802__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22802__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__22802__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__22804 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__22803 = (0);
while(true){
if((i__22803 < size__4610__auto__)){
var k = cljs.core._nth(c__4609__auto__,i__22803);
var vec__22805 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.rest(node),k);
var seq__22806 = cljs.core.seq(vec__22805);
var first__22807 = cljs.core.first(seq__22806);
var seq__22806__$1 = cljs.core.next(seq__22806);
var _ = first__22807;
var first__22807__$1 = cljs.core.first(seq__22806__$1);
var seq__22806__$2 = cljs.core.next(seq__22806__$1);
var title = first__22807__$1;
var content = seq__22806__$2;
cljs.core.chunk_append(b__22804,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),predict_prostate.results.util.alison_blue_3], null)], null),title], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (i__22803,vec__22805,seq__22806,first__22807,seq__22806__$1,_,first__22807__$1,seq__22806__$2,title,content,k,c__4609__auto__,size__4610__auto__,b__22804,s__22802__$2,temp__5753__auto__,node){
return (function (p1__22799_SHARP_,p2__22800_SHARP_){
return predict_prostate.content_reader.add_hiccup_key(["k",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__22799_SHARP_)].join(''),p2__22800_SHARP_);
});})(i__22803,vec__22805,seq__22806,first__22807,seq__22806__$1,_,first__22807__$1,seq__22806__$2,title,content,k,c__4609__auto__,size__4610__auto__,b__22804,s__22802__$2,temp__5753__auto__,node))
,content)], null));

var G__22812 = (i__22803 + (1));
i__22803 = G__22812;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22804),predict_prostate$content_reader$all_subsections_$_iter__22801(cljs.core.chunk_rest(s__22802__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22804),null);
}
} else {
var k = cljs.core.first(s__22802__$2);
var vec__22808 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.rest(node),k);
var seq__22809 = cljs.core.seq(vec__22808);
var first__22810 = cljs.core.first(seq__22809);
var seq__22809__$1 = cljs.core.next(seq__22809);
var _ = first__22810;
var first__22810__$1 = cljs.core.first(seq__22809__$1);
var seq__22809__$2 = cljs.core.next(seq__22809__$1);
var title = first__22810__$1;
var content = seq__22809__$2;
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),predict_prostate.results.util.alison_blue_3], null)], null),title], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (vec__22808,seq__22809,first__22810,seq__22809__$1,_,first__22810__$1,seq__22809__$2,title,content,k,s__22802__$2,temp__5753__auto__,node){
return (function (p1__22799_SHARP_,p2__22800_SHARP_){
return predict_prostate.content_reader.add_hiccup_key(["k",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__22799_SHARP_)].join(''),p2__22800_SHARP_);
});})(vec__22808,seq__22809,first__22810,seq__22809__$1,_,first__22810__$1,seq__22809__$2,title,content,k,s__22802__$2,temp__5753__auto__,node))
,content)], null),predict_prostate$content_reader$all_subsections_$_iter__22801(cljs.core.rest(s__22802__$2)));
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
