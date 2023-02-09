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
(pubsub.feeds.Feed.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4461__auto__,k__4462__auto__){
var self__ = this;
var this__4461__auto____$1 = this;
return this__4461__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4462__auto__,null);
}));

(pubsub.feeds.Feed.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4463__auto__,k42659,else__4464__auto__){
var self__ = this;
var this__4463__auto____$1 = this;
var G__42674 = k42659;
var G__42674__$1 = (((G__42674 instanceof cljs.core.Keyword))?G__42674.fqn:null);
switch (G__42674__$1) {
case "input":
return self__.input;

break;
case "output":
return self__.output;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k42659,else__4464__auto__);

}
}));

(pubsub.feeds.Feed.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4481__auto__,f__4482__auto__,init__4483__auto__){
var self__ = this;
var this__4481__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4484__auto__,p__42706){
var vec__42707 = p__42706;
var k__4485__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42707,(0),null);
var v__4486__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42707,(1),null);
return (f__4482__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4482__auto__.cljs$core$IFn$_invoke$arity$3(ret__4484__auto__,k__4485__auto__,v__4486__auto__) : f__4482__auto__.call(null,ret__4484__auto__,k__4485__auto__,v__4486__auto__));
}),init__4483__auto__,this__4481__auto____$1);
}));

(pubsub.feeds.Feed.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4476__auto__,writer__4477__auto__,opts__4478__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
var pr_pair__4479__auto__ = (function (keyval__4480__auto__){
return cljs.core.pr_sequential_writer(writer__4477__auto__,cljs.core.pr_writer,""," ","",opts__4478__auto__,keyval__4480__auto__);
});
return cljs.core.pr_sequential_writer(writer__4477__auto__,pr_pair__4479__auto__,"#pubsub.feeds.Feed{",", ","}",opts__4478__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"input","input",556931961),self__.input],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"output","output",-1105869043),self__.output],null))], null),self__.__extmap));
}));

(pubsub.feeds.Feed.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__42658){
var self__ = this;
var G__42658__$1 = this;
return (new cljs.core.RecordIter((0),G__42658__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.Keyword(null,"output","output",-1105869043)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(pubsub.feeds.Feed.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4459__auto__){
var self__ = this;
var this__4459__auto____$1 = this;
return self__.__meta;
}));

(pubsub.feeds.Feed.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4456__auto__){
var self__ = this;
var this__4456__auto____$1 = this;
return (new pubsub.feeds.Feed(self__.input,self__.output,self__.__meta,self__.__extmap,self__.__hash));
}));

(pubsub.feeds.Feed.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4465__auto__){
var self__ = this;
var this__4465__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(pubsub.feeds.Feed.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4457__auto__){
var self__ = this;
var this__4457__auto____$1 = this;
var h__4319__auto__ = self__.__hash;
if((!((h__4319__auto__ == null)))){
return h__4319__auto__;
} else {
var h__4319__auto____$1 = (function (coll__4458__auto__){
return (-714279528 ^ cljs.core.hash_unordered_coll(coll__4458__auto__));
})(this__4457__auto____$1);
(self__.__hash = h__4319__auto____$1);

return h__4319__auto____$1;
}
}));

(pubsub.feeds.Feed.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this42660,other42661){
var self__ = this;
var this42660__$1 = this;
return (((!((other42661 == null)))) && ((((this42660__$1.constructor === other42661.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42660__$1.input,other42661.input)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42660__$1.output,other42661.output)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42660__$1.__extmap,other42661.__extmap)))))))));
}));

(pubsub.feeds.Feed.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4471__auto__,k__4472__auto__){
var self__ = this;
var this__4471__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"output","output",-1105869043),null,new cljs.core.Keyword(null,"input","input",556931961),null], null), null),k__4472__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4471__auto____$1),self__.__meta),k__4472__auto__);
} else {
return (new pubsub.feeds.Feed(self__.input,self__.output,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4472__auto__)),null));
}
}));

(pubsub.feeds.Feed.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4468__auto__,k42659){
var self__ = this;
var this__4468__auto____$1 = this;
var G__42761 = k42659;
var G__42761__$1 = (((G__42761 instanceof cljs.core.Keyword))?G__42761.fqn:null);
switch (G__42761__$1) {
case "input":
case "output":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k42659);

}
}));

(pubsub.feeds.Feed.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4469__auto__,k__4470__auto__,G__42658){
var self__ = this;
var this__4469__auto____$1 = this;
var pred__42763 = cljs.core.keyword_identical_QMARK_;
var expr__42764 = k__4470__auto__;
if(cljs.core.truth_((pred__42763.cljs$core$IFn$_invoke$arity$2 ? pred__42763.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"input","input",556931961),expr__42764) : pred__42763.call(null,new cljs.core.Keyword(null,"input","input",556931961),expr__42764)))){
return (new pubsub.feeds.Feed(G__42658,self__.output,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__42763.cljs$core$IFn$_invoke$arity$2 ? pred__42763.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"output","output",-1105869043),expr__42764) : pred__42763.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),expr__42764)))){
return (new pubsub.feeds.Feed(self__.input,G__42658,self__.__meta,self__.__extmap,null));
} else {
return (new pubsub.feeds.Feed(self__.input,self__.output,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4470__auto__,G__42658),null));
}
}
}));

(pubsub.feeds.Feed.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4474__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"input","input",556931961),self__.input,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"output","output",-1105869043),self__.output,null))], null),self__.__extmap));
}));

(pubsub.feeds.Feed.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4460__auto__,G__42658){
var self__ = this;
var this__4460__auto____$1 = this;
return (new pubsub.feeds.Feed(self__.input,self__.output,G__42658,self__.__extmap,self__.__hash));
}));

(pubsub.feeds.Feed.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4466__auto__,entry__4467__auto__){
var self__ = this;
var this__4466__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4467__auto__)){
return this__4466__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4467__auto__,(0)),cljs.core._nth(entry__4467__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4466__auto____$1,entry__4467__auto__);
}
}));

(pubsub.feeds.Feed.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"input","input",-2097503808,null),new cljs.core.Symbol(null,"output","output",534662484,null)], null);
}));

(pubsub.feeds.Feed.cljs$lang$type = true);

(pubsub.feeds.Feed.cljs$lang$ctorPrSeq = (function (this__4505__auto__){
return (new cljs.core.List(null,"pubsub.feeds/Feed",null,(1),null));
}));

(pubsub.feeds.Feed.cljs$lang$ctorPrWriter = (function (this__4505__auto__,writer__4506__auto__){
return cljs.core._write(writer__4506__auto__,"pubsub.feeds/Feed");
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
pubsub.feeds.map__GT_Feed = (function pubsub$feeds$map__GT_Feed(G__42662){
var extmap__4501__auto__ = (function (){var G__42776 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__42662,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"output","output",-1105869043)], 0));
if(cljs.core.record_QMARK_(G__42662)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__42776);
} else {
return G__42776;
}
})();
return (new pubsub.feeds.Feed(new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(G__42662),new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(G__42662),null,cljs.core.not_empty(extmap__4501__auto__),null));
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

var pubsub$feeds$TopicFeed$publish$dyn_42942 = (function (_,message){
var x__4509__auto__ = (((_ == null))?null:_);
var m__4510__auto__ = (pubsub.feeds.publish[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(_,message) : m__4510__auto__.call(null,_,message));
} else {
var m__4508__auto__ = (pubsub.feeds.publish["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(_,message) : m__4508__auto__.call(null,_,message));
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
return pubsub$feeds$TopicFeed$publish$dyn_42942(_,message);
}
});

var pubsub$feeds$TopicFeed$subscribe$dyn_42947 = (function (_,handler){
var x__4509__auto__ = (((_ == null))?null:_);
var m__4510__auto__ = (pubsub.feeds.subscribe[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(_,handler) : m__4510__auto__.call(null,_,handler));
} else {
var m__4508__auto__ = (pubsub.feeds.subscribe["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(_,handler) : m__4508__auto__.call(null,_,handler));
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
return pubsub$feeds$TopicFeed$subscribe$dyn_42947(_,handler);
}
});

var pubsub$feeds$TopicFeed$unsubscribe$dyn_42951 = (function (_){
var x__4509__auto__ = (((_ == null))?null:_);
var m__4510__auto__ = (pubsub.feeds.unsubscribe[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4510__auto__.call(null,_));
} else {
var m__4508__auto__ = (pubsub.feeds.unsubscribe["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4508__auto__.call(null,_));
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
return pubsub$feeds$TopicFeed$unsubscribe$dyn_42951(_);
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
(pubsub.feeds.Topic.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4461__auto__,k__4462__auto__){
var self__ = this;
var this__4461__auto____$1 = this;
return this__4461__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4462__auto__,null);
}));

(pubsub.feeds.Topic.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4463__auto__,k42808,else__4464__auto__){
var self__ = this;
var this__4463__auto____$1 = this;
var G__42817 = k42808;
var G__42817__$1 = (((G__42817 instanceof cljs.core.Keyword))?G__42817.fqn:null);
switch (G__42817__$1) {
case "topic":
return self__.topic;

break;
case "feed":
return self__.feed;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k42808,else__4464__auto__);

}
}));

(pubsub.feeds.Topic.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4481__auto__,f__4482__auto__,init__4483__auto__){
var self__ = this;
var this__4481__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4484__auto__,p__42818){
var vec__42819 = p__42818;
var k__4485__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42819,(0),null);
var v__4486__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42819,(1),null);
return (f__4482__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4482__auto__.cljs$core$IFn$_invoke$arity$3(ret__4484__auto__,k__4485__auto__,v__4486__auto__) : f__4482__auto__.call(null,ret__4484__auto__,k__4485__auto__,v__4486__auto__));
}),init__4483__auto__,this__4481__auto____$1);
}));

(pubsub.feeds.Topic.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4476__auto__,writer__4477__auto__,opts__4478__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
var pr_pair__4479__auto__ = (function (keyval__4480__auto__){
return cljs.core.pr_sequential_writer(writer__4477__auto__,cljs.core.pr_writer,""," ","",opts__4478__auto__,keyval__4480__auto__);
});
return cljs.core.pr_sequential_writer(writer__4477__auto__,pr_pair__4479__auto__,"#pubsub.feeds.Topic{",", ","}",opts__4478__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"topic","topic",-1960480691),self__.topic],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"feed","feed",-1566486205),self__.feed],null))], null),self__.__extmap));
}));

(pubsub.feeds.Topic.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__42807){
var self__ = this;
var G__42807__$1 = this;
return (new cljs.core.RecordIter((0),G__42807__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"topic","topic",-1960480691),new cljs.core.Keyword(null,"feed","feed",-1566486205)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

var c__35736__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35737__auto__ = (function (){var switch__35582__auto__ = (function (state_42849){
var state_val_42850 = (state_42849[(1)]);
if((state_val_42850 === (1))){
var state_42849__$1 = state_42849;
var statearr_42851_42960 = state_42849__$1;
(statearr_42851_42960[(2)] = null);

(statearr_42851_42960[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42850 === (2))){
var state_42849__$1 = state_42849;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42849__$1,(4),in_chan);
} else {
if((state_val_42850 === (3))){
var inst_42847 = (state_42849[(2)]);
var state_42849__$1 = state_42849;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42849__$1,inst_42847);
} else {
if((state_val_42850 === (4))){
var inst_42834 = (state_42849[(7)]);
var inst_42832 = (state_42849[(2)]);
var inst_42833 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_42832,(0),null);
var inst_42834__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_42832,(1),null);
var inst_42835 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_42834__$1,new cljs.core.Keyword(null,"close","close",1835149582));
var state_42849__$1 = (function (){var statearr_42852 = state_42849;
(statearr_42852[(7)] = inst_42834__$1);

(statearr_42852[(8)] = inst_42833);

return statearr_42852;
})();
if(inst_42835){
var statearr_42853_42962 = state_42849__$1;
(statearr_42853_42962[(1)] = (5));

} else {
var statearr_42854_42963 = state_42849__$1;
(statearr_42854_42963[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42850 === (5))){
var inst_42837 = new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(self__.feed);
var inst_42838 = cljs.core.async.unsub(inst_42837,self__.topic,in_chan);
var inst_42839 = cljs.core.async.close_BANG_(in_chan);
var state_42849__$1 = (function (){var statearr_42856 = state_42849;
(statearr_42856[(9)] = inst_42838);

return statearr_42856;
})();
var statearr_42863_42965 = state_42849__$1;
(statearr_42863_42965[(2)] = inst_42839);

(statearr_42863_42965[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42850 === (6))){
var inst_42834 = (state_42849[(7)]);
var inst_42833 = (state_42849[(8)]);
var inst_42841 = (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(inst_42833,inst_42834) : handler.call(null,inst_42833,inst_42834));
var state_42849__$1 = (function (){var statearr_42868 = state_42849;
(statearr_42868[(10)] = inst_42841);

return statearr_42868;
})();
var statearr_42869_42969 = state_42849__$1;
(statearr_42869_42969[(2)] = null);

(statearr_42869_42969[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42850 === (7))){
var inst_42844 = (state_42849[(2)]);
var state_42849__$1 = state_42849;
var statearr_42870_42972 = state_42849__$1;
(statearr_42870_42972[(2)] = inst_42844);

(statearr_42870_42972[(1)] = (3));


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
var pubsub$feeds$state_machine__35583__auto__ = null;
var pubsub$feeds$state_machine__35583__auto____0 = (function (){
var statearr_42872 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_42872[(0)] = pubsub$feeds$state_machine__35583__auto__);

(statearr_42872[(1)] = (1));

return statearr_42872;
});
var pubsub$feeds$state_machine__35583__auto____1 = (function (state_42849){
while(true){
var ret_value__35584__auto__ = (function (){try{while(true){
var result__35585__auto__ = switch__35582__auto__(state_42849);
if(cljs.core.keyword_identical_QMARK_(result__35585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35585__auto__;
}
break;
}
}catch (e42876){var ex__35586__auto__ = e42876;
var statearr_42877_42974 = state_42849;
(statearr_42877_42974[(2)] = ex__35586__auto__);


if(cljs.core.seq((state_42849[(4)]))){
var statearr_42878_42975 = state_42849;
(statearr_42878_42975[(1)] = cljs.core.first((state_42849[(4)])));

} else {
throw ex__35586__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42976 = state_42849;
state_42849 = G__42976;
continue;
} else {
return ret_value__35584__auto__;
}
break;
}
});
pubsub$feeds$state_machine__35583__auto__ = function(state_42849){
switch(arguments.length){
case 0:
return pubsub$feeds$state_machine__35583__auto____0.call(this);
case 1:
return pubsub$feeds$state_machine__35583__auto____1.call(this,state_42849);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pubsub$feeds$state_machine__35583__auto__.cljs$core$IFn$_invoke$arity$0 = pubsub$feeds$state_machine__35583__auto____0;
pubsub$feeds$state_machine__35583__auto__.cljs$core$IFn$_invoke$arity$1 = pubsub$feeds$state_machine__35583__auto____1;
return pubsub$feeds$state_machine__35583__auto__;
})()
})();
var state__35738__auto__ = (function (){var statearr_42879 = f__35737__auto__();
(statearr_42879[(6)] = c__35736__auto__);

return statearr_42879;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35738__auto__);
}));

return c__35736__auto__;
}));

(pubsub.feeds.Topic.prototype.pubsub$feeds$TopicFeed$unsubscribe$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1.pubsub$feeds$TopicFeed$publish$arity$2(null,new cljs.core.Keyword(null,"close","close",1835149582));
}));

(pubsub.feeds.Topic.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4459__auto__){
var self__ = this;
var this__4459__auto____$1 = this;
return self__.__meta;
}));

(pubsub.feeds.Topic.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4456__auto__){
var self__ = this;
var this__4456__auto____$1 = this;
return (new pubsub.feeds.Topic(self__.topic,self__.feed,self__.__meta,self__.__extmap,self__.__hash));
}));

(pubsub.feeds.Topic.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4465__auto__){
var self__ = this;
var this__4465__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(pubsub.feeds.Topic.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4457__auto__){
var self__ = this;
var this__4457__auto____$1 = this;
var h__4319__auto__ = self__.__hash;
if((!((h__4319__auto__ == null)))){
return h__4319__auto__;
} else {
var h__4319__auto____$1 = (function (coll__4458__auto__){
return (-105090243 ^ cljs.core.hash_unordered_coll(coll__4458__auto__));
})(this__4457__auto____$1);
(self__.__hash = h__4319__auto____$1);

return h__4319__auto____$1;
}
}));

(pubsub.feeds.Topic.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this42809,other42810){
var self__ = this;
var this42809__$1 = this;
return (((!((other42810 == null)))) && ((((this42809__$1.constructor === other42810.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42809__$1.topic,other42810.topic)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42809__$1.feed,other42810.feed)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42809__$1.__extmap,other42810.__extmap)))))))));
}));

(pubsub.feeds.Topic.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4471__auto__,k__4472__auto__){
var self__ = this;
var this__4471__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"feed","feed",-1566486205),null,new cljs.core.Keyword(null,"topic","topic",-1960480691),null], null), null),k__4472__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4471__auto____$1),self__.__meta),k__4472__auto__);
} else {
return (new pubsub.feeds.Topic(self__.topic,self__.feed,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4472__auto__)),null));
}
}));

(pubsub.feeds.Topic.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4468__auto__,k42808){
var self__ = this;
var this__4468__auto____$1 = this;
var G__42899 = k42808;
var G__42899__$1 = (((G__42899 instanceof cljs.core.Keyword))?G__42899.fqn:null);
switch (G__42899__$1) {
case "topic":
case "feed":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k42808);

}
}));

(pubsub.feeds.Topic.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4469__auto__,k__4470__auto__,G__42807){
var self__ = this;
var this__4469__auto____$1 = this;
var pred__42900 = cljs.core.keyword_identical_QMARK_;
var expr__42901 = k__4470__auto__;
if(cljs.core.truth_((pred__42900.cljs$core$IFn$_invoke$arity$2 ? pred__42900.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"topic","topic",-1960480691),expr__42901) : pred__42900.call(null,new cljs.core.Keyword(null,"topic","topic",-1960480691),expr__42901)))){
return (new pubsub.feeds.Topic(G__42807,self__.feed,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__42900.cljs$core$IFn$_invoke$arity$2 ? pred__42900.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"feed","feed",-1566486205),expr__42901) : pred__42900.call(null,new cljs.core.Keyword(null,"feed","feed",-1566486205),expr__42901)))){
return (new pubsub.feeds.Topic(self__.topic,G__42807,self__.__meta,self__.__extmap,null));
} else {
return (new pubsub.feeds.Topic(self__.topic,self__.feed,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4470__auto__,G__42807),null));
}
}
}));

(pubsub.feeds.Topic.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4474__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"topic","topic",-1960480691),self__.topic,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"feed","feed",-1566486205),self__.feed,null))], null),self__.__extmap));
}));

(pubsub.feeds.Topic.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4460__auto__,G__42807){
var self__ = this;
var this__4460__auto____$1 = this;
return (new pubsub.feeds.Topic(self__.topic,self__.feed,G__42807,self__.__extmap,self__.__hash));
}));

(pubsub.feeds.Topic.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4466__auto__,entry__4467__auto__){
var self__ = this;
var this__4466__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4467__auto__)){
return this__4466__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4467__auto__,(0)),cljs.core._nth(entry__4467__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4466__auto____$1,entry__4467__auto__);
}
}));

(pubsub.feeds.Topic.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"topic","topic",-319949164,null),new cljs.core.Symbol(null,"feed","feed",74045322,null)], null);
}));

(pubsub.feeds.Topic.cljs$lang$type = true);

(pubsub.feeds.Topic.cljs$lang$ctorPrSeq = (function (this__4505__auto__){
return (new cljs.core.List(null,"pubsub.feeds/Topic",null,(1),null));
}));

(pubsub.feeds.Topic.cljs$lang$ctorPrWriter = (function (this__4505__auto__,writer__4506__auto__){
return cljs.core._write(writer__4506__auto__,"pubsub.feeds/Topic");
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
pubsub.feeds.map__GT_Topic = (function pubsub$feeds$map__GT_Topic(G__42813){
var extmap__4501__auto__ = (function (){var G__42915 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__42813,new cljs.core.Keyword(null,"topic","topic",-1960480691),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"feed","feed",-1566486205)], 0));
if(cljs.core.record_QMARK_(G__42813)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__42915);
} else {
return G__42915;
}
})();
return (new pubsub.feeds.Topic(new cljs.core.Keyword(null,"topic","topic",-1960480691).cljs$core$IFn$_invoke$arity$1(G__42813),new cljs.core.Keyword(null,"feed","feed",-1566486205).cljs$core$IFn$_invoke$arity$1(G__42813),null,cljs.core.not_empty(extmap__4501__auto__),null));
});


//# sourceMappingURL=pubsub.feeds.js.map
