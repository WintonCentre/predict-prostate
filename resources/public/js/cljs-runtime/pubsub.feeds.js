goog.provide('pubsub.feeds');

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
pubsub.feeds.Feed = (function (input,output,__meta,__extmap,__hash){
this.input = input;
this.output = output;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(pubsub.feeds.Feed.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(pubsub.feeds.Feed.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k42347,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__42365 = k42347;
var G__42365__$1 = (((G__42365 instanceof cljs.core.Keyword))?G__42365.fqn:null);
switch (G__42365__$1) {
case "input":
return self__.input;

break;
case "output":
return self__.output;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k42347,else__4383__auto__);

}
}));

(pubsub.feeds.Feed.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__42386){
var vec__42391 = p__42386;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42391,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42391,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(pubsub.feeds.Feed.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#pubsub.feeds.Feed{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"input","input",556931961),self__.input],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"output","output",-1105869043),self__.output],null))], null),self__.__extmap));
}));

(pubsub.feeds.Feed.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__42346){
var self__ = this;
var G__42346__$1 = this;
return (new cljs.core.RecordIter((0),G__42346__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.Keyword(null,"output","output",-1105869043)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(pubsub.feeds.Feed.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(pubsub.feeds.Feed.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new pubsub.feeds.Feed(self__.input,self__.output,self__.__meta,self__.__extmap,self__.__hash));
}));

(pubsub.feeds.Feed.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(pubsub.feeds.Feed.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-714279528 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(pubsub.feeds.Feed.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this42348,other42349){
var self__ = this;
var this42348__$1 = this;
return (((!((other42349 == null)))) && ((this42348__$1.constructor === other42349.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42348__$1.input,other42349.input)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42348__$1.output,other42349.output)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42348__$1.__extmap,other42349.__extmap)));
}));

(pubsub.feeds.Feed.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"output","output",-1105869043),null,new cljs.core.Keyword(null,"input","input",556931961),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new pubsub.feeds.Feed(self__.input,self__.output,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(pubsub.feeds.Feed.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__42346){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__42451 = cljs.core.keyword_identical_QMARK_;
var expr__42452 = k__4388__auto__;
if(cljs.core.truth_((pred__42451.cljs$core$IFn$_invoke$arity$2 ? pred__42451.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"input","input",556931961),expr__42452) : pred__42451.call(null,new cljs.core.Keyword(null,"input","input",556931961),expr__42452)))){
return (new pubsub.feeds.Feed(G__42346,self__.output,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__42451.cljs$core$IFn$_invoke$arity$2 ? pred__42451.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"output","output",-1105869043),expr__42452) : pred__42451.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),expr__42452)))){
return (new pubsub.feeds.Feed(self__.input,G__42346,self__.__meta,self__.__extmap,null));
} else {
return (new pubsub.feeds.Feed(self__.input,self__.output,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__42346),null));
}
}
}));

(pubsub.feeds.Feed.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"input","input",556931961),self__.input,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"output","output",-1105869043),self__.output,null))], null),self__.__extmap));
}));

(pubsub.feeds.Feed.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__42346){
var self__ = this;
var this__4379__auto____$1 = this;
return (new pubsub.feeds.Feed(self__.input,self__.output,G__42346,self__.__extmap,self__.__hash));
}));

(pubsub.feeds.Feed.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(pubsub.feeds.Feed.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"input","input",-2097503808,null),new cljs.core.Symbol(null,"output","output",534662484,null)], null);
}));

(pubsub.feeds.Feed.cljs$lang$type = true);

(pubsub.feeds.Feed.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"pubsub.feeds/Feed",null,(1),null));
}));

(pubsub.feeds.Feed.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"pubsub.feeds/Feed");
}));

/**
 * Positional factory function for pubsub.feeds/Feed.
 */
pubsub.feeds.__GT_Feed = (function pubsub$feeds$__GT_Feed(input,output){
return (new pubsub.feeds.Feed(input,output,null,null,null));
});

/**
 * Factory function for pubsub.feeds/Feed, taking a map of keywords to field values.
 */
pubsub.feeds.map__GT_Feed = (function pubsub$feeds$map__GT_Feed(G__42353){
var extmap__4419__auto__ = (function (){var G__42474 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__42353,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"output","output",-1105869043)], 0));
if(cljs.core.record_QMARK_(G__42353)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__42474);
} else {
return G__42474;
}
})();
return (new pubsub.feeds.Feed(new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(G__42353),new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(G__42353),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

pubsub.feeds.create_feed = (function pubsub$feeds$create_feed(){

var in_chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
return pubsub.feeds.__GT_Feed(in_chan,cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2(in_chan,cljs.core.first));
});
pubsub.feeds.close_feed = (function pubsub$feeds$close_feed(feed){

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(feed),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"close","close",1835149582),"closing"], null));

return cljs.core.async.close_BANG_(new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(feed));
});

/**
 * @interface
 */
pubsub.feeds.TopicFeed = function(){};

var pubsub$feeds$TopicFeed$publish$dyn_42608 = (function (_,message){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (pubsub.feeds.publish[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(_,message) : m__4429__auto__.call(null,_,message));
} else {
var m__4426__auto__ = (pubsub.feeds.publish["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(_,message) : m__4426__auto__.call(null,_,message));
} else {
throw cljs.core.missing_protocol("TopicFeed.publish",_);
}
}
});
/**
 * write a message to the feed for distribution, returning false if the feed is closed
 */
pubsub.feeds.publish = (function pubsub$feeds$publish(_,message){
if((((!((_ == null)))) && ((!((_.pubsub$feeds$TopicFeed$publish$arity$2 == null)))))){
return _.pubsub$feeds$TopicFeed$publish$arity$2(_,message);
} else {
return pubsub$feeds$TopicFeed$publish$dyn_42608(_,message);
}
});

var pubsub$feeds$TopicFeed$subscribe$dyn_42610 = (function (_,handler){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (pubsub.feeds.subscribe[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(_,handler) : m__4429__auto__.call(null,_,handler));
} else {
var m__4426__auto__ = (pubsub.feeds.subscribe["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(_,handler) : m__4426__auto__.call(null,_,handler));
} else {
throw cljs.core.missing_protocol("TopicFeed.subscribe",_);
}
}
});
/**
 * subscribe to this feed, passing topic & messages to the handler
 */
pubsub.feeds.subscribe = (function pubsub$feeds$subscribe(_,handler){
if((((!((_ == null)))) && ((!((_.pubsub$feeds$TopicFeed$subscribe$arity$2 == null)))))){
return _.pubsub$feeds$TopicFeed$subscribe$arity$2(_,handler);
} else {
return pubsub$feeds$TopicFeed$subscribe$dyn_42610(_,handler);
}
});

var pubsub$feeds$TopicFeed$unsubscribe$dyn_42618 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (pubsub.feeds.unsubscribe[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (pubsub.feeds.unsubscribe["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("TopicFeed.unsubscribe",_);
}
}
});
/**
 * unsubscribe from this topicfeed
 */
pubsub.feeds.unsubscribe = (function pubsub$feeds$unsubscribe(_){
if((((!((_ == null)))) && ((!((_.pubsub$feeds$TopicFeed$unsubscribe$arity$1 == null)))))){
return _.pubsub$feeds$TopicFeed$unsubscribe$arity$1(_);
} else {
return pubsub$feeds$TopicFeed$unsubscribe$dyn_42618(_);
}
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {pubsub.feeds.TopicFeed}
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
pubsub.feeds.Topic = (function (topic,feed,__meta,__extmap,__hash){
this.topic = topic;
this.feed = feed;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(pubsub.feeds.Topic.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(pubsub.feeds.Topic.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k42488,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__42495 = k42488;
var G__42495__$1 = (((G__42495 instanceof cljs.core.Keyword))?G__42495.fqn:null);
switch (G__42495__$1) {
case "topic":
return self__.topic;

break;
case "feed":
return self__.feed;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k42488,else__4383__auto__);

}
}));

(pubsub.feeds.Topic.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__42498){
var vec__42499 = p__42498;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42499,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42499,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(pubsub.feeds.Topic.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#pubsub.feeds.Topic{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"topic","topic",-1960480691),self__.topic],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"feed","feed",-1566486205),self__.feed],null))], null),self__.__extmap));
}));

(pubsub.feeds.Topic.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__42487){
var self__ = this;
var G__42487__$1 = this;
return (new cljs.core.RecordIter((0),G__42487__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"topic","topic",-1960480691),new cljs.core.Keyword(null,"feed","feed",-1566486205)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(pubsub.feeds.Topic.prototype.pubsub$feeds$TopicFeed$ = cljs.core.PROTOCOL_SENTINEL);

(pubsub.feeds.Topic.prototype.pubsub$feeds$TopicFeed$publish$arity$2 = (function (_,message){
var self__ = this;
var ___$1 = this;
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(self__.feed),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.topic,message], null));
}));

(pubsub.feeds.Topic.prototype.pubsub$feeds$TopicFeed$subscribe$arity$2 = (function (_,handler){
var self__ = this;
var ___$1 = this;
var in_chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(self__.feed),self__.topic,in_chan);

var c__35275__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35276__auto__ = (function (){var switch__35062__auto__ = (function (state_42529){
var state_val_42531 = (state_42529[(1)]);
if((state_val_42531 === (1))){
var state_42529__$1 = state_42529;
var statearr_42537_42637 = state_42529__$1;
(statearr_42537_42637[(2)] = null);

(statearr_42537_42637[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42531 === (2))){
var state_42529__$1 = state_42529;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42529__$1,(4),in_chan);
} else {
if((state_val_42531 === (3))){
var inst_42526 = (state_42529[(2)]);
var state_42529__$1 = state_42529;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42529__$1,inst_42526);
} else {
if((state_val_42531 === (4))){
var inst_42512 = (state_42529[(7)]);
var inst_42508 = (state_42529[(2)]);
var inst_42511 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_42508,(0),null);
var inst_42512__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_42508,(1),null);
var inst_42513 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_42512__$1,new cljs.core.Keyword(null,"close","close",1835149582));
var state_42529__$1 = (function (){var statearr_42541 = state_42529;
(statearr_42541[(7)] = inst_42512__$1);

(statearr_42541[(8)] = inst_42511);

return statearr_42541;
})();
if(inst_42513){
var statearr_42542_42641 = state_42529__$1;
(statearr_42542_42641[(1)] = (5));

} else {
var statearr_42544_42643 = state_42529__$1;
(statearr_42544_42643[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42531 === (5))){
var inst_42517 = new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(self__.feed);
var inst_42518 = cljs.core.async.unsub(inst_42517,self__.topic,in_chan);
var inst_42519 = cljs.core.async.close_BANG_(in_chan);
var state_42529__$1 = (function (){var statearr_42545 = state_42529;
(statearr_42545[(9)] = inst_42518);

return statearr_42545;
})();
var statearr_42547_42646 = state_42529__$1;
(statearr_42547_42646[(2)] = inst_42519);

(statearr_42547_42646[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42531 === (6))){
var inst_42512 = (state_42529[(7)]);
var inst_42511 = (state_42529[(8)]);
var inst_42521 = (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(inst_42511,inst_42512) : handler.call(null,inst_42511,inst_42512));
var state_42529__$1 = (function (){var statearr_42550 = state_42529;
(statearr_42550[(10)] = inst_42521);

return statearr_42550;
})();
var statearr_42551_42647 = state_42529__$1;
(statearr_42551_42647[(2)] = null);

(statearr_42551_42647[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42531 === (7))){
var inst_42524 = (state_42529[(2)]);
var state_42529__$1 = state_42529;
var statearr_42553_42649 = state_42529__$1;
(statearr_42553_42649[(2)] = inst_42524);

(statearr_42553_42649[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});
return (function() {
var pubsub$feeds$state_machine__35063__auto__ = null;
var pubsub$feeds$state_machine__35063__auto____0 = (function (){
var statearr_42554 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_42554[(0)] = pubsub$feeds$state_machine__35063__auto__);

(statearr_42554[(1)] = (1));

return statearr_42554;
});
var pubsub$feeds$state_machine__35063__auto____1 = (function (state_42529){
while(true){
var ret_value__35064__auto__ = (function (){try{while(true){
var result__35065__auto__ = switch__35062__auto__(state_42529);
if(cljs.core.keyword_identical_QMARK_(result__35065__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35065__auto__;
}
break;
}
}catch (e42556){var ex__35066__auto__ = e42556;
var statearr_42557_42670 = state_42529;
(statearr_42557_42670[(2)] = ex__35066__auto__);


if(cljs.core.seq((state_42529[(4)]))){
var statearr_42559_42671 = state_42529;
(statearr_42559_42671[(1)] = cljs.core.first((state_42529[(4)])));

} else {
throw ex__35066__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42672 = state_42529;
state_42529 = G__42672;
continue;
} else {
return ret_value__35064__auto__;
}
break;
}
});
pubsub$feeds$state_machine__35063__auto__ = function(state_42529){
switch(arguments.length){
case 0:
return pubsub$feeds$state_machine__35063__auto____0.call(this);
case 1:
return pubsub$feeds$state_machine__35063__auto____1.call(this,state_42529);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pubsub$feeds$state_machine__35063__auto__.cljs$core$IFn$_invoke$arity$0 = pubsub$feeds$state_machine__35063__auto____0;
pubsub$feeds$state_machine__35063__auto__.cljs$core$IFn$_invoke$arity$1 = pubsub$feeds$state_machine__35063__auto____1;
return pubsub$feeds$state_machine__35063__auto__;
})()
})();
var state__35277__auto__ = (function (){var statearr_42561 = f__35276__auto__();
(statearr_42561[(6)] = c__35275__auto__);

return statearr_42561;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35277__auto__);
}));

return c__35275__auto__;
}));

(pubsub.feeds.Topic.prototype.pubsub$feeds$TopicFeed$unsubscribe$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1.pubsub$feeds$TopicFeed$publish$arity$2(null,new cljs.core.Keyword(null,"close","close",1835149582));
}));

(pubsub.feeds.Topic.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(pubsub.feeds.Topic.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new pubsub.feeds.Topic(self__.topic,self__.feed,self__.__meta,self__.__extmap,self__.__hash));
}));

(pubsub.feeds.Topic.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(pubsub.feeds.Topic.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-105090243 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(pubsub.feeds.Topic.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this42489,other42490){
var self__ = this;
var this42489__$1 = this;
return (((!((other42490 == null)))) && ((this42489__$1.constructor === other42490.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42489__$1.topic,other42490.topic)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42489__$1.feed,other42490.feed)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42489__$1.__extmap,other42490.__extmap)));
}));

(pubsub.feeds.Topic.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"feed","feed",-1566486205),null,new cljs.core.Keyword(null,"topic","topic",-1960480691),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new pubsub.feeds.Topic(self__.topic,self__.feed,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(pubsub.feeds.Topic.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__42487){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__42574 = cljs.core.keyword_identical_QMARK_;
var expr__42575 = k__4388__auto__;
if(cljs.core.truth_((pred__42574.cljs$core$IFn$_invoke$arity$2 ? pred__42574.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"topic","topic",-1960480691),expr__42575) : pred__42574.call(null,new cljs.core.Keyword(null,"topic","topic",-1960480691),expr__42575)))){
return (new pubsub.feeds.Topic(G__42487,self__.feed,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__42574.cljs$core$IFn$_invoke$arity$2 ? pred__42574.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"feed","feed",-1566486205),expr__42575) : pred__42574.call(null,new cljs.core.Keyword(null,"feed","feed",-1566486205),expr__42575)))){
return (new pubsub.feeds.Topic(self__.topic,G__42487,self__.__meta,self__.__extmap,null));
} else {
return (new pubsub.feeds.Topic(self__.topic,self__.feed,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__42487),null));
}
}
}));

(pubsub.feeds.Topic.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"topic","topic",-1960480691),self__.topic,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"feed","feed",-1566486205),self__.feed,null))], null),self__.__extmap));
}));

(pubsub.feeds.Topic.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__42487){
var self__ = this;
var this__4379__auto____$1 = this;
return (new pubsub.feeds.Topic(self__.topic,self__.feed,G__42487,self__.__extmap,self__.__hash));
}));

(pubsub.feeds.Topic.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(pubsub.feeds.Topic.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"topic","topic",-319949164,null),new cljs.core.Symbol(null,"feed","feed",74045322,null)], null);
}));

(pubsub.feeds.Topic.cljs$lang$type = true);

(pubsub.feeds.Topic.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"pubsub.feeds/Topic",null,(1),null));
}));

(pubsub.feeds.Topic.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"pubsub.feeds/Topic");
}));

/**
 * Positional factory function for pubsub.feeds/Topic.
 */
pubsub.feeds.__GT_Topic = (function pubsub$feeds$__GT_Topic(topic,feed){
return (new pubsub.feeds.Topic(topic,feed,null,null,null));
});

/**
 * Factory function for pubsub.feeds/Topic, taking a map of keywords to field values.
 */
pubsub.feeds.map__GT_Topic = (function pubsub$feeds$map__GT_Topic(G__42491){
var extmap__4419__auto__ = (function (){var G__42586 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__42491,new cljs.core.Keyword(null,"topic","topic",-1960480691),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"feed","feed",-1566486205)], 0));
if(cljs.core.record_QMARK_(G__42491)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__42586);
} else {
return G__42586;
}
})();
return (new pubsub.feeds.Topic(new cljs.core.Keyword(null,"topic","topic",-1960480691).cljs$core$IFn$_invoke$arity$1(G__42491),new cljs.core.Keyword(null,"feed","feed",-1566486205).cljs$core$IFn$_invoke$arity$1(G__42491),null,cljs.core.not_empty(extmap__4419__auto__),null));
});


//# sourceMappingURL=pubsub.feeds.js.map
