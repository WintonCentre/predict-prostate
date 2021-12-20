goog.provide('predict_prostate.components.bs3_navbar');
predict_prostate.components.bs3_navbar.collapsing_navbar = rum.core.build_defc((function (p__40120,navbar_menu){
var map__40121 = p__40120;
var map__40121__$1 = (((((!((map__40121 == null))))?(((((map__40121.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40121.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40121):map__40121);
var props = map__40121__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40121__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return React.createElement("div",({"id": id, "className": "collapse navbar-collapse"}),sablono.interpreter.interpret(navbar_menu));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$], null),"collapsing-navbar");
predict_prostate.components.bs3_navbar.navbar = rum.core.build_defc((function (p__40125,navbar_menu){
var map__40126 = p__40125;
var map__40126__$1 = (((((!((map__40126 == null))))?(((((map__40126.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40126.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40126):map__40126);
var props = map__40126__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40126__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var class_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40126__$1,new cljs.core.Keyword(null,"class-name","class-name",945142584));
var logo = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40126__$1,new cljs.core.Keyword(null,"logo","logo",1237980263));
return React.createElement("nav",({"className": ["navbar ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name)].join('')}),React.createElement("div",({"className": "container"}),React.createElement("div",({"className": "navbar-header"}),React.createElement("button",({"type": "button", "data-toggle": "collapse", "data-target": ["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''), "aria-label": "menu", "className": "navbar-toggle"}),sablono.interpreter.interpret(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (i){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.icon-bar","span.icon-bar",618689172),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)], null);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1((3))))),sablono.interpreter.interpret((cljs.core.truth_(logo)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.navbar-brand","img.navbar-brand",-283247648),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),logo,new cljs.core.Keyword(null,"alt","alt",-3214426),"logo"], null)], null):null))),sablono.interpreter.interpret((function (){var G__40133 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),id], null);
var G__40134 = navbar_menu;
return (predict_prostate.components.bs3_navbar.collapsing_navbar.cljs$core$IFn$_invoke$arity$2 ? predict_prostate.components.bs3_navbar.collapsing_navbar.cljs$core$IFn$_invoke$arity$2(G__40133,G__40134) : predict_prostate.components.bs3_navbar.collapsing_navbar.call(null,G__40133,G__40134));
})())));
}),null,"navbar");

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
predict_prostate.components.bs3_navbar.Nav_item = (function (text,on_click,target,__meta,__extmap,__hash){
this.text = text;
this.on_click = on_click;
this.target = target;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(predict_prostate.components.bs3_navbar.Nav_item.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(predict_prostate.components.bs3_navbar.Nav_item.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k40136,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__40146 = k40136;
var G__40146__$1 = (((G__40146 instanceof cljs.core.Keyword))?G__40146.fqn:null);
switch (G__40146__$1) {
case "text":
return self__.text;

break;
case "on-click":
return self__.on_click;

break;
case "target":
return self__.target;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k40136,else__4383__auto__);

}
}));

(predict_prostate.components.bs3_navbar.Nav_item.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__40148){
var vec__40149 = p__40148;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40149,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40149,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(predict_prostate.components.bs3_navbar.Nav_item.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#predict-prostate.components.bs3-navbar.Nav-item{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"text","text",-1790561697),self__.text],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"on-click","on-click",1632826543),self__.on_click],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"target","target",253001721),self__.target],null))], null),self__.__extmap));
}));

(predict_prostate.components.bs3_navbar.Nav_item.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__40135){
var self__ = this;
var G__40135__$1 = this;
return (new cljs.core.RecordIter((0),G__40135__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"on-click","on-click",1632826543),new cljs.core.Keyword(null,"target","target",253001721)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(predict_prostate.components.bs3_navbar.Nav_item.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(predict_prostate.components.bs3_navbar.Nav_item.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new predict_prostate.components.bs3_navbar.Nav_item(self__.text,self__.on_click,self__.target,self__.__meta,self__.__extmap,self__.__hash));
}));

(predict_prostate.components.bs3_navbar.Nav_item.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
}));

(predict_prostate.components.bs3_navbar.Nav_item.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (1595210687 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(predict_prostate.components.bs3_navbar.Nav_item.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this40137,other40138){
var self__ = this;
var this40137__$1 = this;
return (((!((other40138 == null)))) && ((this40137__$1.constructor === other40138.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this40137__$1.text,other40138.text)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this40137__$1.on_click,other40138.on_click)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this40137__$1.target,other40138.target)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this40137__$1.__extmap,other40138.__extmap)));
}));

(predict_prostate.components.bs3_navbar.Nav_item.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),null,new cljs.core.Keyword(null,"target","target",253001721),null,new cljs.core.Keyword(null,"text","text",-1790561697),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new predict_prostate.components.bs3_navbar.Nav_item(self__.text,self__.on_click,self__.target,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(predict_prostate.components.bs3_navbar.Nav_item.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__40135){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__40156 = cljs.core.keyword_identical_QMARK_;
var expr__40157 = k__4388__auto__;
if(cljs.core.truth_((pred__40156.cljs$core$IFn$_invoke$arity$2 ? pred__40156.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"text","text",-1790561697),expr__40157) : pred__40156.call(null,new cljs.core.Keyword(null,"text","text",-1790561697),expr__40157)))){
return (new predict_prostate.components.bs3_navbar.Nav_item(G__40135,self__.on_click,self__.target,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__40156.cljs$core$IFn$_invoke$arity$2 ? pred__40156.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"on-click","on-click",1632826543),expr__40157) : pred__40156.call(null,new cljs.core.Keyword(null,"on-click","on-click",1632826543),expr__40157)))){
return (new predict_prostate.components.bs3_navbar.Nav_item(self__.text,G__40135,self__.target,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__40156.cljs$core$IFn$_invoke$arity$2 ? pred__40156.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"target","target",253001721),expr__40157) : pred__40156.call(null,new cljs.core.Keyword(null,"target","target",253001721),expr__40157)))){
return (new predict_prostate.components.bs3_navbar.Nav_item(self__.text,self__.on_click,G__40135,self__.__meta,self__.__extmap,null));
} else {
return (new predict_prostate.components.bs3_navbar.Nav_item(self__.text,self__.on_click,self__.target,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__40135),null));
}
}
}
}));

(predict_prostate.components.bs3_navbar.Nav_item.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"text","text",-1790561697),self__.text,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"on-click","on-click",1632826543),self__.on_click,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"target","target",253001721),self__.target,null))], null),self__.__extmap));
}));

(predict_prostate.components.bs3_navbar.Nav_item.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__40135){
var self__ = this;
var this__4379__auto____$1 = this;
return (new predict_prostate.components.bs3_navbar.Nav_item(self__.text,self__.on_click,self__.target,G__40135,self__.__extmap,self__.__hash));
}));

(predict_prostate.components.bs3_navbar.Nav_item.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(predict_prostate.components.bs3_navbar.Nav_item.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"text","text",-150030170,null),new cljs.core.Symbol(null,"on-click","on-click",-1021609226,null),new cljs.core.Symbol(null,"target","target",1893533248,null)], null);
}));

(predict_prostate.components.bs3_navbar.Nav_item.cljs$lang$type = true);

(predict_prostate.components.bs3_navbar.Nav_item.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"predict-prostate.components.bs3-navbar/Nav-item",null,(1),null));
}));

(predict_prostate.components.bs3_navbar.Nav_item.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"predict-prostate.components.bs3-navbar/Nav-item");
}));

/**
 * Positional factory function for predict-prostate.components.bs3-navbar/Nav-item.
 */
predict_prostate.components.bs3_navbar.__GT_Nav_item = (function predict_prostate$components$bs3_navbar$__GT_Nav_item(text,on_click,target){
return (new predict_prostate.components.bs3_navbar.Nav_item(text,on_click,target,null,null,null));
});

/**
 * Factory function for predict-prostate.components.bs3-navbar/Nav-item, taking a map of keywords to field values.
 */
predict_prostate.components.bs3_navbar.map__GT_Nav_item = (function predict_prostate$components$bs3_navbar$map__GT_Nav_item(G__40139){
var extmap__4419__auto__ = (function (){var G__40174 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__40139,new cljs.core.Keyword(null,"text","text",-1790561697),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-click","on-click",1632826543),new cljs.core.Keyword(null,"target","target",253001721)], 0));
if(cljs.core.record_QMARK_(G__40139)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__40174);
} else {
return G__40174;
}
})();
return (new predict_prostate.components.bs3_navbar.Nav_item(new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(G__40139),new cljs.core.Keyword(null,"on-click","on-click",1632826543).cljs$core$IFn$_invoke$arity$1(G__40139),new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(G__40139),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

predict_prostate.components.bs3_navbar.navigate_to = (function predict_prostate$components$bs3_navbar$navigate_to(target){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(target,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"about","about",1423892543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"faqs","faqs",636275568)], null)], null))){
interop.utils.scrollTo((0));
} else {
}

if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(target,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"no-op","no-op",-93046065)], null))){
return predict_prostate.state.run_time.route_change.pubsub$feeds$TopicFeed$publish$arity$2(null,target);
} else {
return null;
}
});
predict_prostate.components.bs3_navbar.make_nav_item = (function predict_prostate$components$bs3_navbar$make_nav_item(key,rt,p__40184){
var map__40185 = p__40184;
var map__40185__$1 = (((((!((map__40185 == null))))?(((((map__40185.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40185.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40185):map__40185);
var item = map__40185__$1;
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40185__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40185__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40185__$1,new cljs.core.Keyword(null,"target","target",253001721));
var submenus = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40185__$1,new cljs.core.Keyword(null,"submenus","submenus",-1749389225));
if(cljs.core.seq(submenus)){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"tab-index","tab-index",895755393),(0),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"class-name","class-name",945142584),["dropdown",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(target),cljs.core.first(rt)))?" active":null)].join('')], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.dropdown-toggle","a.dropdown-toggle",-264466802),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-toggle","data-toggle",436966687),"dropdown",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return (on_click.cljs$core$IFn$_invoke$arity$1 ? on_click.cljs$core$IFn$_invoke$arity$1(target) : on_click.call(null,target));
})], null),text,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.caret","span.caret",-1405994877)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.dropdown-menu","ul.dropdown-menu",-867384656),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__40179_SHARP_,p2__40180_SHARP_){
return (predict_prostate.components.bs3_navbar.make_nav_item.cljs$core$IFn$_invoke$arity$3 ? predict_prostate.components.bs3_navbar.make_nav_item.cljs$core$IFn$_invoke$arity$3(p1__40179_SHARP_,rt,p2__40180_SHARP_) : predict_prostate.components.bs3_navbar.make_nav_item.call(null,p1__40179_SHARP_,rt,p2__40180_SHARP_));
}),submenus)], null)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"tab-index","tab-index",895755393),(0),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"class-name","class-name",945142584),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(target),cljs.core.first(rt)))?"active":null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return (on_click.cljs$core$IFn$_invoke$arity$1 ? on_click.cljs$core$IFn$_invoke$arity$1(target) : on_click.call(null,target));
}),new cljs.core.Keyword(null,"data-toggle","data-toggle",436966687),"collapse",new cljs.core.Keyword(null,"data-target","data-target",-113904678),".navbar-collapse.in"], null),text], null)], null);
}
});
predict_prostate.components.bs3_navbar.nav_items = (function predict_prostate$components$bs3_navbar$nav_items(ttt,_,supported_languages){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new predict_prostate.components.bs3_navbar.Nav_item((function (){var G__40202 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("navbar","home","navbar/home",-1110215533),"Home"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__40202) : ttt.call(null,G__40202));
})(),predict_prostate.components.bs3_navbar.navigate_to,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"home","home",-74557309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"home","home",-74557309)], null)], null),null,null,null)),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((new predict_prostate.components.bs3_navbar.Nav_item((function (){var G__40203 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("navbar","about","navbar/about",-1785070545),"About Predict Prostate"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__40203) : ttt.call(null,G__40203));
})(),predict_prostate.components.bs3_navbar.navigate_to,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"no-op","no-op",-93046065)], null),null,null,null)),new cljs.core.Keyword(null,"submenus","submenus",-1749389225),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new predict_prostate.components.bs3_navbar.Nav_item((function (){var G__40205 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("navbar","overview","navbar/overview",-1554595939),"Overview"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__40205) : ttt.call(null,G__40205));
})(),predict_prostate.components.bs3_navbar.navigate_to,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"about","about",1423892543),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"overview","overview",-435037267),new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.Keyword(null,"about","about",1423892543)], null)], null),null,null,null)),(new predict_prostate.components.bs3_navbar.Nav_item((function (){var G__40206 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("navbar","wiif","navbar/wiif",192569787),"\u2013 Who is it for?"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__40206) : ttt.call(null,G__40206));
})(),predict_prostate.components.bs3_navbar.navigate_to,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"about","about",1423892543),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"overview","overview",-435037267),new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.Keyword(null,"whoisitfor","whoisitfor",1411917847)], null)], null),null,null,null)),(new predict_prostate.components.bs3_navbar.Nav_item((function (){var G__40207 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("navbar","hppw","navbar/hppw",-990757415),"\u2013 How Predict Prostate works"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__40207) : ttt.call(null,G__40207));
})(),predict_prostate.components.bs3_navbar.navigate_to,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"about","about",1423892543),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"overview","overview",-435037267),new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.Keyword(null,"howpredictworks","howpredictworks",-1156140842)], null)], null),null,null,null)),(new predict_prostate.components.bs3_navbar.Nav_item((function (){var G__40208 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("navbar","wbpp","navbar/wbpp",584352947),"\u2013 Who built Predict Prostate"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__40208) : ttt.call(null,G__40208));
})(),predict_prostate.components.bs3_navbar.navigate_to,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"about","about",1423892543),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"overview","overview",-435037267),new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.Keyword(null,"whobuiltpredict","whobuiltpredict",1949196346)], null)], null),null,null,null)),(new predict_prostate.components.bs3_navbar.Nav_item((function (){var G__40210 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("navbar","tech","navbar/tech",1242038797),"Technical"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__40210) : ttt.call(null,G__40210));
})(),predict_prostate.components.bs3_navbar.navigate_to,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"about","about",1423892543),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"technical","technical",-1762752687),new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.Keyword(null,"technical","technical",-1762752687)], null)], null),null,null,null)),(new predict_prostate.components.bs3_navbar.Nav_item((function (){var G__40213 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("navbar","dh","navbar/dh",-319448525),"\u2013 Development History"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__40213) : ttt.call(null,G__40213));
})(),predict_prostate.components.bs3_navbar.navigate_to,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"about","about",1423892543),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"technical","technical",-1762752687),new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.Keyword(null,"history","history",-247395220)], null)], null),null,null,null)),(new predict_prostate.components.bs3_navbar.Nav_item((function (){var G__40214 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("navbar","pubs","navbar/pubs",-2134936301),"\u2013 Publications"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__40214) : ttt.call(null,G__40214));
})(),predict_prostate.components.bs3_navbar.navigate_to,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"about","about",1423892543),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"technical","technical",-1762752687),new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.Keyword(null,"publications","publications",1164590218)], null)], null),null,null,null)),(new predict_prostate.components.bs3_navbar.Nav_item((function (){var G__40215 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("navbar","faqs","navbar/faqs",1739435872),"FAQs"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__40215) : ttt.call(null,G__40215));
})(),predict_prostate.components.bs3_navbar.navigate_to,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"about","about",1423892543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"faqs","faqs",636275568)], null)], null),null,null,null))], null)),(new predict_prostate.components.bs3_navbar.Nav_item((function (){var G__40216 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("navbar","tool","navbar/tool",1934903994),"Predict Prostate Tool"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__40216) : ttt.call(null,G__40216));
})(),predict_prostate.components.bs3_navbar.navigate_to,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tool","tool",-1298696470)], null),null,null,null)),(new predict_prostate.components.bs3_navbar.Nav_item((function (){var G__40217 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("navbar","contact","navbar/contact",-485809396),"Contact"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__40217) : ttt.call(null,G__40217));
})(),predict_prostate.components.bs3_navbar.navigate_to,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"contact","contact",609093372)], null),null,null,null)),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((new predict_prostate.components.bs3_navbar.Nav_item((function (){var G__40218 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("navbar","legal","navbar/legal",-818189380),"Legal"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__40218) : ttt.call(null,G__40218));
})(),predict_prostate.components.bs3_navbar.navigate_to,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"no-op","no-op",-93046065)], null),null,null,null)),new cljs.core.Keyword(null,"submenus","submenus",-1749389225),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new predict_prostate.components.bs3_navbar.Nav_item((function (){var G__40219 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("navbar","legal-name","navbar/legal-name",-1277330679),"Predict: Prostate Cancer"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__40219) : ttt.call(null,G__40219));
})(),predict_prostate.components.bs3_navbar.navigate_to,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"legal","legal",302401964),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"product","product",1363474257)], null)], null),null,null,null)),(new predict_prostate.components.bs3_navbar.Nav_item((function (){var G__40220 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("navbar","disclaimer","navbar/disclaimer",-1536104939),"Disclaimer"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__40220) : ttt.call(null,G__40220));
})(),predict_prostate.components.bs3_navbar.navigate_to,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"legal","legal",302401964),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"disclaimer","disclaimer",1605091877)], null)], null),null,null,null)),(new predict_prostate.components.bs3_navbar.Nav_item((function (){var G__40221 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("navbar","alg","navbar/alg",255605842),"Algorithm"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__40221) : ttt.call(null,G__40221));
})(),predict_prostate.components.bs3_navbar.navigate_to,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"legal","legal",302401964),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"algorithm","algorithm",739262820)], null)], null),null,null,null)),(new predict_prostate.components.bs3_navbar.Nav_item((function (){var G__40222 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("navbar","privacy","navbar/privacy",1633419033),"Privacy & Data Protection"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__40222) : ttt.call(null,G__40222));
})(),predict_prostate.components.bs3_navbar.navigate_to,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"legal","legal",302401964),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"privacy","privacy",555299625)], null)], null),null,null,null))], null)),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((new predict_prostate.components.bs3_navbar.Nav_item((function (){var G__40225 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("navbar","change-language","navbar/change-language",-1814466745),"Change Language"], null);
var G__40226 = " ";
return (ttt.cljs$core$IFn$_invoke$arity$2 ? ttt.cljs$core$IFn$_invoke$arity$2(G__40225,G__40226) : ttt.call(null,G__40225,G__40226));
})(),predict_prostate.components.bs3_navbar.navigate_to,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"no-op","no-op",-93046065)], null),null,null,null)),new cljs.core.Keyword(null,"submenus","submenus",-1749389225),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (lang){
return (new predict_prostate.components.bs3_navbar.Nav_item((ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(lang) : ttt.call(null,lang)),(function (){
return predict_prostate.state.run_time.language_change.pubsub$feeds$TopicFeed$publish$arity$2(null,lang);
}),null,null,null,null));
}),supported_languages))], null);
});
predict_prostate.components.bs3_navbar.smartmenus = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (state){
jQuery.SmartMenus.Bootstrap.init();

return state;
})], null);
predict_prostate.components.bs3_navbar.simple_navbar = rum.core.build_defc((function (p__40234){
var vec__40237 = p__40234;
var menu_items = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40237,(0),null);
var rt = rum.core.react(predict_prostate.state.run_time.route);
return sablono.interpreter.interpret((function (){var G__40241 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"navbar",new cljs.core.Keyword(null,"class-name","class-name",945142584),"navbar-inverse",new cljs.core.Keyword(null,"logo","logo",1237980263),null], null);
var G__40242 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.nav.navbar-nav","ul.nav.navbar-nav",1805559761),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__40232_SHARP_,p2__40233_SHARP_){
return predict_prostate.components.bs3_navbar.make_nav_item(p1__40232_SHARP_,rt,p2__40233_SHARP_);
}),menu_items)], null);
return (predict_prostate.components.bs3_navbar.navbar.cljs$core$IFn$_invoke$arity$2 ? predict_prostate.components.bs3_navbar.navbar.cljs$core$IFn$_invoke$arity$2(G__40241,G__40242) : predict_prostate.components.bs3_navbar.navbar.call(null,G__40241,G__40242));
})());
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$,rum.core.reactive], null),"simple-navbar");
/**
 * Returns a 'sticky' scroll event handler for a dom-node
 */
predict_prostate.components.bs3_navbar.scroll_handler = (function predict_prostate$components$bs3_navbar$scroll_handler(node,transition_at,tolerance){
return (function (_){
var y_off = (window["pageYOffset"]);
var c = (transition_at + node.offsetTop);
if((y_off >= (c + tolerance))){
return node.classList.add("navbar-fixed-top");
} else {
if((y_off <= (c - tolerance))){
return node.classList.remove("navbar-fixed-top");
} else {
return null;
}
}
});
});
predict_prostate.components.bs3_navbar.sticky_mixin = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (state){
var comp = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
var dom_node = ReactDOM.findDOMNode(comp);
var sh = predict_prostate.components.bs3_navbar.scroll_handler(dom_node,(60),(40));
addEventListener("scroll",sh);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword("predict-prostate.components.bs3-navbar","scroll-handler","predict-prostate.components.bs3-navbar/scroll-handler",-1298580446),sh,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("predict-prostate.components.bs3-navbar","y-off","predict-prostate.components.bs3-navbar/y-off",-479018353),cljs.core.atom.cljs$core$IFn$_invoke$arity$1((window["pageYOffset"]))], 0));
}),new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (state){
var comp = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
var dom_node = ReactDOM.findDOMNode(comp);
var sh = new cljs.core.Keyword("predict-prostate.components.bs3-navbar","scroll-handler","predict-prostate.components.bs3-navbar/scroll-handler",-1298580446).cljs$core$IFn$_invoke$arity$1(state);
removeEventListener("scroll",sh);

return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword("predict-prostate.components.bs3-navbar","scroll-handler","predict-prostate.components.bs3-navbar/scroll-handler",-1298580446),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("predict-prostate.components.bs3-navbar","y-off","predict-prostate.components.bs3-navbar/y-off",-479018353)], 0));
})], null);
predict_prostate.components.bs3_navbar.hamburger_navbar = rum.core.build_defc((function (ttt){
var t_state = rum.core.react(predict_prostate.state.run_time.t_state_cursor);
var lang = cljs.core.name((cljs.core.truth_(new cljs.core.Keyword(null,"lang","lang",-1819677104).cljs$core$IFn$_invoke$arity$1(t_state))?new cljs.core.Keyword(null,"lang","lang",-1819677104).cljs$core$IFn$_invoke$arity$1(t_state):new cljs.core.Keyword(null,"en","en",88457073)));
var supported_languages = new cljs.core.Keyword(null,"languages","languages",1471910331).cljs$core$IFn$_invoke$arity$1(t_state);
var attrs40245 = (function (){var G__40246 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [predict_prostate.components.bs3_navbar.nav_items(ttt,lang,supported_languages)], null);
return (predict_prostate.components.bs3_navbar.simple_navbar.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.components.bs3_navbar.simple_navbar.cljs$core$IFn$_invoke$arity$1(G__40246) : predict_prostate.components.bs3_navbar.simple_navbar.call(null,G__40246));
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"nav",((cljs.core.map_QMARK_(attrs40245))?sablono.interpreter.attributes(attrs40245):null),((cljs.core.map_QMARK_(attrs40245))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs40245)], null)));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [predict_prostate.components.bs3_navbar.sticky_mixin,predict_prostate.components.bs3_navbar.smartmenus,rum.core.reactive], null),"hamburger-navbar");

//# sourceMappingURL=predict_prostate.components.bs3_navbar.js.map
