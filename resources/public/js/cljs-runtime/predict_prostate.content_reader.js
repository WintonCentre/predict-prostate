goog.provide('predict_prostate.content_reader');
/**
 * Regular expression that parses a CSS-style id and class from an element name.
 */
predict_prostate.content_reader.re_tag = /([^\s\.#]+)(?:#([^\s\.#]+))?(?:\.([^\s#]+))?/;
/**
 * return true if tag contains a hash tag-id matching id.
 */
predict_prostate.content_reader.match_id = (function predict_prostate$content_reader$match_id(tag,id){
var vec__45923 = cljs.core.re_find(predict_prostate.content_reader.re_tag,cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45923,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45923,(1),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45923,(2),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45923,(3),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,tag_id);
});
predict_prostate.content_reader.match_node = (function predict_prostate$content_reader$match_node(ttt,node,id){
var vec__45926 = node;
var seq__45927 = cljs.core.seq(vec__45926);
var first__45928 = cljs.core.first(seq__45927);
var seq__45927__$1 = cljs.core.next(seq__45927);
var x = first__45928;
var xs = seq__45927__$1;
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
predict_prostate.content_reader.add_hiccup_key = (function predict_prostate$content_reader$add_hiccup_key(key,p__45929){
var vec__45930 = p__45929;
var seq__45931 = cljs.core.seq(vec__45930);
var first__45932 = cljs.core.first(seq__45931);
var seq__45931__$1 = cljs.core.next(seq__45931);
var tag = first__45932;
var args = seq__45931__$1;
var vec__45933 = args;
var seq__45934 = cljs.core.seq(vec__45933);
var first__45935 = cljs.core.first(seq__45934);
var seq__45934__$1 = cljs.core.next(seq__45934);
var m = first__45935;
var rest_args = seq__45934__$1;
var vec__45936 = ((cljs.core.map_QMARK_(m))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.Keyword(null,"key","key",-1516042587),key),rest_args], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),key], null),args], null));
var mk = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45936,(0),null);
var rest_args_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45936,(1),null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,mk], null),rest_args_STAR_));
});
predict_prostate.content_reader.section = (function predict_prostate$content_reader$section(var_args){
var G__45942 = arguments.length;
switch (G__45942) {
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
var map__45945 = predict_prostate.content_reader.match_node(ttt,node,id);
var map__45945__$1 = cljs.core.__destructure_map(map__45945);
var _ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45945__$1,new cljs.core.Keyword(null,"_","_",1453416199));
var xs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45945__$1,new cljs.core.Keyword(null,"xs","xs",649443341));
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
var iter__4611__auto__ = (function predict_prostate$content_reader$all_subsections_$_iter__45952(s__45953){
return (new cljs.core.LazySeq(null,(function (){
var s__45953__$1 = s__45953;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__45953__$1);
if(temp__5753__auto__){
var s__45953__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__45953__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__45953__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__45955 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__45954 = (0);
while(true){
if((i__45954 < size__4610__auto__)){
var k = cljs.core._nth(c__4609__auto__,i__45954);
var vec__45960 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.rest(node),k);
var seq__45961 = cljs.core.seq(vec__45960);
var first__45962 = cljs.core.first(seq__45961);
var seq__45961__$1 = cljs.core.next(seq__45961);
var _ = first__45962;
var first__45962__$1 = cljs.core.first(seq__45961__$1);
var seq__45961__$2 = cljs.core.next(seq__45961__$1);
var title = first__45962__$1;
var content = seq__45961__$2;
cljs.core.chunk_append(b__45955,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),predict_prostate.results.util.alison_blue_3], null)], null),title], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (i__45954,vec__45960,seq__45961,first__45962,seq__45961__$1,_,first__45962__$1,seq__45961__$2,title,content,k,c__4609__auto__,size__4610__auto__,b__45955,s__45953__$2,temp__5753__auto__,node){
return (function (p1__45948_SHARP_,p2__45949_SHARP_){
return predict_prostate.content_reader.add_hiccup_key(["k",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__45948_SHARP_)].join(''),p2__45949_SHARP_);
});})(i__45954,vec__45960,seq__45961,first__45962,seq__45961__$1,_,first__45962__$1,seq__45961__$2,title,content,k,c__4609__auto__,size__4610__auto__,b__45955,s__45953__$2,temp__5753__auto__,node))
,content)], null));

var G__45987 = (i__45954 + (1));
i__45954 = G__45987;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__45955),predict_prostate$content_reader$all_subsections_$_iter__45952(cljs.core.chunk_rest(s__45953__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__45955),null);
}
} else {
var k = cljs.core.first(s__45953__$2);
var vec__45967 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.rest(node),k);
var seq__45968 = cljs.core.seq(vec__45967);
var first__45969 = cljs.core.first(seq__45968);
var seq__45968__$1 = cljs.core.next(seq__45968);
var _ = first__45969;
var first__45969__$1 = cljs.core.first(seq__45968__$1);
var seq__45968__$2 = cljs.core.next(seq__45968__$1);
var title = first__45969__$1;
var content = seq__45968__$2;
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),predict_prostate.results.util.alison_blue_3], null)], null),title], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (vec__45967,seq__45968,first__45969,seq__45968__$1,_,first__45969__$1,seq__45968__$2,title,content,k,s__45953__$2,temp__5753__auto__,node){
return (function (p1__45948_SHARP_,p2__45949_SHARP_){
return predict_prostate.content_reader.add_hiccup_key(["k",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__45948_SHARP_)].join(''),p2__45949_SHARP_);
});})(vec__45967,seq__45968,first__45969,seq__45968__$1,_,first__45969__$1,seq__45968__$2,title,content,k,s__45953__$2,temp__5753__auto__,node))
,content)], null),predict_prostate$content_reader$all_subsections_$_iter__45952(cljs.core.rest(s__45953__$2)));
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
