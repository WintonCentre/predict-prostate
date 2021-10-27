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

(pubsub.feeds.Feed.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k42350,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__42367 = k42350;
var G__42367__$1 = (((G__42367 instanceof cljs.core.Keyword))?G__42367.fqn:null);
switch (G__42367__$1) {
case "input":
return self__.input;

break;
case "output":
return self__.output;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k42350,else__4383__auto__);

}
}));

(pubsub.feeds.Feed.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__42373){
var vec__42375 = p__42373;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42375,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42375,(1),null);
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

(pubsub.feeds.Feed.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__42349){
var self__ = this;
var G__42349__$1 = this;
return (new cljs.core.RecordIter((0),G__42349__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.Keyword(null,"output","output",-1105869043)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(pubsub.feeds.Feed.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this42351,other42352){
var self__ = this;
var this42351__$1 = this;
return (((!((other42352 == null)))) && ((this42351__$1.constructor === other42352.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42351__$1.input,other42352.input)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42351__$1.output,other42352.output)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42351__$1.__extmap,other42352.__extmap)));
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

(pubsub.feeds.Feed.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__42349){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__42412 = cljs.core.keyword_identical_QMARK_;
var expr__42413 = k__4388__auto__;
if(cljs.core.truth_((pred__42412.cljs$core$IFn$_invoke$arity$2 ? pred__42412.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"input","input",556931961),expr__42413) : pred__42412.call(null,new cljs.core.Keyword(null,"input","input",556931961),expr__42413)))){
return (new pubsub.feeds.Feed(G__42349,self__.output,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__42412.cljs$core$IFn$_invoke$arity$2 ? pred__42412.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"output","output",-1105869043),expr__42413) : pred__42412.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),expr__42413)))){
return (new pubsub.feeds.Feed(self__.input,G__42349,self__.__meta,self__.__extmap,null));
} else {
return (new pubsub.feeds.Feed(self__.input,self__.output,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__42349),null));
}
}
}));

(pubsub.feeds.Feed.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"input","input",556931961),self__.input,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"output","output",-1105869043),self__.output,null))], null),self__.__extmap));
}));

(pubsub.feeds.Feed.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__42349){
var self__ = this;
var this__4379__auto____$1 = this;
return (new pubsub.feeds.Feed(self__.input,self__.output,G__42349,self__.__extmap,self__.__hash));
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
pubsub.feeds.map__GT_Feed = (function pubsub$feeds$map__GT_Feed(G__42358){
var extmap__4419__auto__ = (function (){var G__42428 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__42358,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"output","output",-1105869043)], 0));
if(cljs.core.record_QMARK_(G__42358)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__42428);
} else {
return G__42428;
}
})();
return (new pubsub.feeds.Feed(new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(G__42358),new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(G__42358),null,cljs.core.not_empty(extmap__4419__auto__),null));
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

var pubsub$feeds$TopicFeed$publish$dyn_42528 = (function (_,message){
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
return pubsub$feeds$TopicFeed$publish$dyn_42528(_,message);
}
});

var pubsub$feeds$TopicFeed$subscribe$dyn_42530 = (function (_,handler){
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
return pubsub$feeds$TopicFeed$subscribe$dyn_42530(_,handler);
}
});

var pubsub$feeds$TopicFeed$unsubscribe$dyn_42532 = (function (_){
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
return pubsub$feeds$TopicFeed$unsubscribe$dyn_42532(_);
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

(pubsub.feeds.Topic.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k42442,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__42446 = k42442;
var G__42446__$1 = (((G__42446 instanceof cljs.core.Keyword))?G__42446.fqn:null);
switch (G__42446__$1) {
case "topic":
return self__.topic;

break;
case "feed":
return self__.feed;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k42442,else__4383__auto__);

}
}));

(pubsub.feeds.Topic.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__42447){
var vec__42448 = p__42447;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42448,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42448,(1),null);
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

(pubsub.feeds.Topic.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__42441){
var self__ = this;
var G__42441__$1 = this;
return (new cljs.core.RecordIter((0),G__42441__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"topic","topic",-1960480691),new cljs.core.Keyword(null,"feed","feed",-1566486205)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

var c__35306__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35307__auto__ = (function (){var switch__35071__auto__ = (function (state_42481){
var state_val_42482 = (state_42481[(1)]);
if((state_val_42482 === (1))){
var state_42481__$1 = state_42481;
var statearr_42483_42535 = state_42481__$1;
(statearr_42483_42535[(2)] = null);

(statearr_42483_42535[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42482 === (2))){
var state_42481__$1 = state_42481;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42481__$1,(4),in_chan);
} else {
if((state_val_42482 === (3))){
var inst_42479 = (state_42481[(2)]);
var state_42481__$1 = state_42481;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42481__$1,inst_42479);
} else {
if((state_val_42482 === (4))){
var inst_42463 = (state_42481[(7)]);
var inst_42461 = (state_42481[(2)]);
var inst_42462 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_42461,(0),null);
var inst_42463__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_42461,(1),null);
var inst_42464 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_42463__$1,new cljs.core.Keyword(null,"close","close",1835149582));
var state_42481__$1 = (function (){var statearr_42484 = state_42481;
(statearr_42484[(7)] = inst_42463__$1);

(statearr_42484[(8)] = inst_42462);

return statearr_42484;
})();
if(inst_42464){
var statearr_42485_42538 = state_42481__$1;
(statearr_42485_42538[(1)] = (5));

} else {
var statearr_42486_42539 = state_42481__$1;
(statearr_42486_42539[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42482 === (5))){
var inst_42466 = new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(self__.feed);
var inst_42467 = cljs.core.async.unsub(inst_42466,self__.topic,in_chan);
var inst_42468 = cljs.core.async.close_BANG_(in_chan);
var state_42481__$1 = (function (){var statearr_42487 = state_42481;
(statearr_42487[(9)] = inst_42467);

return statearr_42487;
})();
var statearr_42488_42540 = state_42481__$1;
(statearr_42488_42540[(2)] = inst_42468);

(statearr_42488_42540[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42482 === (6))){
var inst_42463 = (state_42481[(7)]);
var inst_42462 = (state_42481[(8)]);
var inst_42470 = (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(inst_42462,inst_42463) : handler.call(null,inst_42462,inst_42463));
var state_42481__$1 = (function (){var statearr_42489 = state_42481;
(statearr_42489[(10)] = inst_42470);

return statearr_42489;
})();
var statearr_42490_42542 = state_42481__$1;
(statearr_42490_42542[(2)] = null);

(statearr_42490_42542[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42482 === (7))){
var inst_42477 = (state_42481[(2)]);
var state_42481__$1 = state_42481;
var statearr_42491_42543 = state_42481__$1;
(statearr_42491_42543[(2)] = inst_42477);

(statearr_42491_42543[(1)] = (3));


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
var pubsub$feeds$state_machine__35072__auto__ = null;
var pubsub$feeds$state_machine__35072__auto____0 = (function (){
var statearr_42492 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_42492[(0)] = pubsub$feeds$state_machine__35072__auto__);

(statearr_42492[(1)] = (1));

return statearr_42492;
});
var pubsub$feeds$state_machine__35072__auto____1 = (function (state_42481){
while(true){
var ret_value__35073__auto__ = (function (){try{while(true){
var result__35074__auto__ = switch__35071__auto__(state_42481);
if(cljs.core.keyword_identical_QMARK_(result__35074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35074__auto__;
}
break;
}
}catch (e42493){var ex__35075__auto__ = e42493;
var statearr_42494_42544 = state_42481;
(statearr_42494_42544[(2)] = ex__35075__auto__);


if(cljs.core.seq((state_42481[(4)]))){
var statearr_42495_42545 = state_42481;
(statearr_42495_42545[(1)] = cljs.core.first((state_42481[(4)])));

} else {
throw ex__35075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42546 = state_42481;
state_42481 = G__42546;
continue;
} else {
return ret_value__35073__auto__;
}
break;
}
});
pubsub$feeds$state_machine__35072__auto__ = function(state_42481){
switch(arguments.length){
case 0:
return pubsub$feeds$state_machine__35072__auto____0.call(this);
case 1:
return pubsub$feeds$state_machine__35072__auto____1.call(this,state_42481);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pubsub$feeds$state_machine__35072__auto__.cljs$core$IFn$_invoke$arity$0 = pubsub$feeds$state_machine__35072__auto____0;
pubsub$feeds$state_machine__35072__auto__.cljs$core$IFn$_invoke$arity$1 = pubsub$feeds$state_machine__35072__auto____1;
return pubsub$feeds$state_machine__35072__auto__;
})()
})();
var state__35308__auto__ = (function (){var statearr_42498 = f__35307__auto__();
(statearr_42498[(6)] = c__35306__auto__);

return statearr_42498;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35308__auto__);
}));

return c__35306__auto__;
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

(pubsub.feeds.Topic.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this42443,other42444){
var self__ = this;
var this42443__$1 = this;
return (((!((other42444 == null)))) && ((this42443__$1.constructor === other42444.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42443__$1.topic,other42444.topic)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42443__$1.feed,other42444.feed)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42443__$1.__extmap,other42444.__extmap)));
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

(pubsub.feeds.Topic.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__42441){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__42508 = cljs.core.keyword_identical_QMARK_;
var expr__42509 = k__4388__auto__;
if(cljs.core.truth_((pred__42508.cljs$core$IFn$_invoke$arity$2 ? pred__42508.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"topic","topic",-1960480691),expr__42509) : pred__42508.call(null,new cljs.core.Keyword(null,"topic","topic",-1960480691),expr__42509)))){
return (new pubsub.feeds.Topic(G__42441,self__.feed,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__42508.cljs$core$IFn$_invoke$arity$2 ? pred__42508.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"feed","feed",-1566486205),expr__42509) : pred__42508.call(null,new cljs.core.Keyword(null,"feed","feed",-1566486205),expr__42509)))){
return (new pubsub.feeds.Topic(self__.topic,G__42441,self__.__meta,self__.__extmap,null));
} else {
return (new pubsub.feeds.Topic(self__.topic,self__.feed,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__42441),null));
}
}
}));

(pubsub.feeds.Topic.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"topic","topic",-1960480691),self__.topic,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"feed","feed",-1566486205),self__.feed,null))], null),self__.__extmap));
}));

(pubsub.feeds.Topic.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__42441){
var self__ = this;
var this__4379__auto____$1 = this;
return (new pubsub.feeds.Topic(self__.topic,self__.feed,G__42441,self__.__extmap,self__.__hash));
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
pubsub.feeds.map__GT_Topic = (function pubsub$feeds$map__GT_Topic(G__42445){
var extmap__4419__auto__ = (function (){var G__42517 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__42445,new cljs.core.Keyword(null,"topic","topic",-1960480691),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"feed","feed",-1566486205)], 0));
if(cljs.core.record_QMARK_(G__42445)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__42517);
} else {
return G__42517;
}
})();
return (new pubsub.feeds.Topic(new cljs.core.Keyword(null,"topic","topic",-1960480691).cljs$core$IFn$_invoke$arity$1(G__42445),new cljs.core.Keyword(null,"feed","feed",-1566486205).cljs$core$IFn$_invoke$arity$1(G__42445),null,cljs.core.not_empty(extmap__4419__auto__),null));
});


//# sourceMappingURL=pubsub.feeds.js.map
