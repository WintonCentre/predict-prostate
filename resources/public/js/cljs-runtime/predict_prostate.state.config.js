goog.provide('predict_prostate.state.config');
predict_prostate.state.config.any_of_these_diseases = rum.core.build_defc((function (){
return React.createElement("span",null,"Any of ",React.createElement("a",({"style": ({"color": "#A94342", "textDecoration": "underline", "cursor": "pointer"}), "onClick": (function (){
return predict_prostate.state.run_time.help_key_change.pubsub$feeds$TopicFeed$publish$arity$2(null,"comorb");
})}),"these diseases?"));
}),null,"any-of-these-diseases");
predict_prostate.state.config.biopsy_core_examples = rum.core.build_defc((function (){
return React.createElement("span",null,"Any of ",React.createElement("a",({"style": ({"color": "#CCCCCC", "textDecoration": "underline", "cursor": "pointer"}), "onClick": (function (){
return predict_prostate.state.run_time.help_key_change.pubsub$feeds$TopicFeed$publish$arity$2(null,"biopsy-examples");
})}),"See examples"));
}),null,"biopsy-core-examples");
predict_prostate.state.config.rtl_languages = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"az","az",1576197474),null,new cljs.core.Keyword(null,"ur","ur",-1317779958),null,new cljs.core.Keyword(null,"ku","ku",401052043),null,new cljs.core.Keyword(null,"ar","ar",-2093907980),null,new cljs.core.Keyword(null,"dv","dv",781315158),null,new cljs.core.Keyword(null,"he","he",1913907192),null,new cljs.core.Keyword(null,"fa","fa",484981183),null], null), null);

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
predict_prostate.state.config.Input_group = (function (key,label,widget_type,widget_params,read_only,write_only,unknowable,panel,models,default$,__meta,__extmap,__hash){
this.key = key;
this.label = label;
this.widget_type = widget_type;
this.widget_params = widget_params;
this.read_only = read_only;
this.write_only = write_only;
this.unknowable = unknowable;
this.panel = panel;
this.models = models;
this.default$ = default$;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(predict_prostate.state.config.Input_group.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(predict_prostate.state.config.Input_group.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k32348,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__32381 = k32348;
var G__32381__$1 = (((G__32381 instanceof cljs.core.Keyword))?G__32381.fqn:null);
switch (G__32381__$1) {
case "key":
return self__.key;

break;
case "label":
return self__.label;

break;
case "widget-type":
return self__.widget_type;

break;
case "widget-params":
return self__.widget_params;

break;
case "read-only":
return self__.read_only;

break;
case "write-only":
return self__.write_only;

break;
case "unknowable":
return self__.unknowable;

break;
case "panel":
return self__.panel;

break;
case "models":
return self__.models;

break;
case "default":
return self__.default$;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k32348,else__4383__auto__);

}
}));

(predict_prostate.state.config.Input_group.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__32389){
var vec__32390 = p__32389;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32390,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32390,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(predict_prostate.state.config.Input_group.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#predict-prostate.state.config.Input-group{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"key","key",-1516042587),self__.key],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"label","label",1718410804),self__.label],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"widget-type","widget-type",1836256899),self__.widget_type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"widget-params","widget-params",1462627490),self__.widget_params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"read-only","read-only",-191706886),self__.read_only],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"write-only","write-only",292146609),self__.write_only],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"unknowable","unknowable",1635948924),self__.unknowable],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"panel","panel",-558637456),self__.panel],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"models","models",-1985455662),self__.models],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"default","default",-1987822328),self__.default$],null))], null),self__.__extmap));
}));

(predict_prostate.state.config.Input_group.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32347){
var self__ = this;
var G__32347__$1 = this;
return (new cljs.core.RecordIter((0),G__32347__$1,10,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"widget-type","widget-type",1836256899),new cljs.core.Keyword(null,"widget-params","widget-params",1462627490),new cljs.core.Keyword(null,"read-only","read-only",-191706886),new cljs.core.Keyword(null,"write-only","write-only",292146609),new cljs.core.Keyword(null,"unknowable","unknowable",1635948924),new cljs.core.Keyword(null,"panel","panel",-558637456),new cljs.core.Keyword(null,"models","models",-1985455662),new cljs.core.Keyword(null,"default","default",-1987822328)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(predict_prostate.state.config.Input_group.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(predict_prostate.state.config.Input_group.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new predict_prostate.state.config.Input_group(self__.key,self__.label,self__.widget_type,self__.widget_params,self__.read_only,self__.write_only,self__.unknowable,self__.panel,self__.models,self__.default$,self__.__meta,self__.__extmap,self__.__hash));
}));

(predict_prostate.state.config.Input_group.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (10 + cljs.core.count(self__.__extmap));
}));

(predict_prostate.state.config.Input_group.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (1004877946 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(predict_prostate.state.config.Input_group.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this32349,other32350){
var self__ = this;
var this32349__$1 = this;
return (((!((other32350 == null)))) && ((this32349__$1.constructor === other32350.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32349__$1.key,other32350.key)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32349__$1.label,other32350.label)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32349__$1.widget_type,other32350.widget_type)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32349__$1.widget_params,other32350.widget_params)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32349__$1.read_only,other32350.read_only)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32349__$1.write_only,other32350.write_only)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32349__$1.unknowable,other32350.unknowable)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32349__$1.panel,other32350.panel)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32349__$1.models,other32350.models)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32349__$1.default,other32350.default)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32349__$1.__extmap,other32350.__extmap)));
}));

(predict_prostate.state.config.Input_group.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [new cljs.core.Keyword(null,"widget-params","widget-params",1462627490),null,new cljs.core.Keyword(null,"widget-type","widget-type",1836256899),null,new cljs.core.Keyword(null,"key","key",-1516042587),null,new cljs.core.Keyword(null,"default","default",-1987822328),null,new cljs.core.Keyword(null,"panel","panel",-558637456),null,new cljs.core.Keyword(null,"write-only","write-only",292146609),null,new cljs.core.Keyword(null,"models","models",-1985455662),null,new cljs.core.Keyword(null,"label","label",1718410804),null,new cljs.core.Keyword(null,"read-only","read-only",-191706886),null,new cljs.core.Keyword(null,"unknowable","unknowable",1635948924),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new predict_prostate.state.config.Input_group(self__.key,self__.label,self__.widget_type,self__.widget_params,self__.read_only,self__.write_only,self__.unknowable,self__.panel,self__.models,self__.default$,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(predict_prostate.state.config.Input_group.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__32347){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__32412 = cljs.core.keyword_identical_QMARK_;
var expr__32413 = k__4388__auto__;
if(cljs.core.truth_((pred__32412.cljs$core$IFn$_invoke$arity$2 ? pred__32412.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"key","key",-1516042587),expr__32413) : pred__32412.call(null,new cljs.core.Keyword(null,"key","key",-1516042587),expr__32413)))){
return (new predict_prostate.state.config.Input_group(G__32347,self__.label,self__.widget_type,self__.widget_params,self__.read_only,self__.write_only,self__.unknowable,self__.panel,self__.models,self__.default$,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__32412.cljs$core$IFn$_invoke$arity$2 ? pred__32412.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"label","label",1718410804),expr__32413) : pred__32412.call(null,new cljs.core.Keyword(null,"label","label",1718410804),expr__32413)))){
return (new predict_prostate.state.config.Input_group(self__.key,G__32347,self__.widget_type,self__.widget_params,self__.read_only,self__.write_only,self__.unknowable,self__.panel,self__.models,self__.default$,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__32412.cljs$core$IFn$_invoke$arity$2 ? pred__32412.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"widget-type","widget-type",1836256899),expr__32413) : pred__32412.call(null,new cljs.core.Keyword(null,"widget-type","widget-type",1836256899),expr__32413)))){
return (new predict_prostate.state.config.Input_group(self__.key,self__.label,G__32347,self__.widget_params,self__.read_only,self__.write_only,self__.unknowable,self__.panel,self__.models,self__.default$,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__32412.cljs$core$IFn$_invoke$arity$2 ? pred__32412.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"widget-params","widget-params",1462627490),expr__32413) : pred__32412.call(null,new cljs.core.Keyword(null,"widget-params","widget-params",1462627490),expr__32413)))){
return (new predict_prostate.state.config.Input_group(self__.key,self__.label,self__.widget_type,G__32347,self__.read_only,self__.write_only,self__.unknowable,self__.panel,self__.models,self__.default$,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__32412.cljs$core$IFn$_invoke$arity$2 ? pred__32412.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"read-only","read-only",-191706886),expr__32413) : pred__32412.call(null,new cljs.core.Keyword(null,"read-only","read-only",-191706886),expr__32413)))){
return (new predict_prostate.state.config.Input_group(self__.key,self__.label,self__.widget_type,self__.widget_params,G__32347,self__.write_only,self__.unknowable,self__.panel,self__.models,self__.default$,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__32412.cljs$core$IFn$_invoke$arity$2 ? pred__32412.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"write-only","write-only",292146609),expr__32413) : pred__32412.call(null,new cljs.core.Keyword(null,"write-only","write-only",292146609),expr__32413)))){
return (new predict_prostate.state.config.Input_group(self__.key,self__.label,self__.widget_type,self__.widget_params,self__.read_only,G__32347,self__.unknowable,self__.panel,self__.models,self__.default$,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__32412.cljs$core$IFn$_invoke$arity$2 ? pred__32412.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"unknowable","unknowable",1635948924),expr__32413) : pred__32412.call(null,new cljs.core.Keyword(null,"unknowable","unknowable",1635948924),expr__32413)))){
return (new predict_prostate.state.config.Input_group(self__.key,self__.label,self__.widget_type,self__.widget_params,self__.read_only,self__.write_only,G__32347,self__.panel,self__.models,self__.default$,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__32412.cljs$core$IFn$_invoke$arity$2 ? pred__32412.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"panel","panel",-558637456),expr__32413) : pred__32412.call(null,new cljs.core.Keyword(null,"panel","panel",-558637456),expr__32413)))){
return (new predict_prostate.state.config.Input_group(self__.key,self__.label,self__.widget_type,self__.widget_params,self__.read_only,self__.write_only,self__.unknowable,G__32347,self__.models,self__.default$,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__32412.cljs$core$IFn$_invoke$arity$2 ? pred__32412.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"models","models",-1985455662),expr__32413) : pred__32412.call(null,new cljs.core.Keyword(null,"models","models",-1985455662),expr__32413)))){
return (new predict_prostate.state.config.Input_group(self__.key,self__.label,self__.widget_type,self__.widget_params,self__.read_only,self__.write_only,self__.unknowable,self__.panel,G__32347,self__.default$,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__32412.cljs$core$IFn$_invoke$arity$2 ? pred__32412.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"default","default",-1987822328),expr__32413) : pred__32412.call(null,new cljs.core.Keyword(null,"default","default",-1987822328),expr__32413)))){
return (new predict_prostate.state.config.Input_group(self__.key,self__.label,self__.widget_type,self__.widget_params,self__.read_only,self__.write_only,self__.unknowable,self__.panel,self__.models,G__32347,self__.__meta,self__.__extmap,null));
} else {
return (new predict_prostate.state.config.Input_group(self__.key,self__.label,self__.widget_type,self__.widget_params,self__.read_only,self__.write_only,self__.unknowable,self__.panel,self__.models,self__.default$,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__32347),null));
}
}
}
}
}
}
}
}
}
}
}));

(predict_prostate.state.config.Input_group.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"key","key",-1516042587),self__.key,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"label","label",1718410804),self__.label,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"widget-type","widget-type",1836256899),self__.widget_type,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"widget-params","widget-params",1462627490),self__.widget_params,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"read-only","read-only",-191706886),self__.read_only,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"write-only","write-only",292146609),self__.write_only,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"unknowable","unknowable",1635948924),self__.unknowable,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"panel","panel",-558637456),self__.panel,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"models","models",-1985455662),self__.models,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"default","default",-1987822328),self__.default$,null))], null),self__.__extmap));
}));

(predict_prostate.state.config.Input_group.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__32347){
var self__ = this;
var this__4379__auto____$1 = this;
return (new predict_prostate.state.config.Input_group(self__.key,self__.label,self__.widget_type,self__.widget_params,self__.read_only,self__.write_only,self__.unknowable,self__.panel,self__.models,self__.default$,G__32347,self__.__extmap,self__.__hash));
}));

(predict_prostate.state.config.Input_group.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(predict_prostate.state.config.Input_group.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"key","key",124488940,null),new cljs.core.Symbol(null,"label","label",-936024965,null),new cljs.core.Symbol(null,"widget-type","widget-type",-818178870,null),new cljs.core.Symbol(null,"widget-params","widget-params",-1191808279,null),new cljs.core.Symbol(null,"read-only","read-only",1448824641,null),new cljs.core.Symbol(null,"write-only","write-only",1932678136,null),new cljs.core.Symbol(null,"unknowable","unknowable",-1018486845,null),new cljs.core.Symbol(null,"panel","panel",1081894071,null),new cljs.core.Symbol(null,"models","models",-344924135,null),new cljs.core.Symbol(null,"default","default",-347290801,null)], null);
}));

(predict_prostate.state.config.Input_group.cljs$lang$type = true);

(predict_prostate.state.config.Input_group.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"predict-prostate.state.config/Input-group",null,(1),null));
}));

(predict_prostate.state.config.Input_group.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"predict-prostate.state.config/Input-group");
}));

/**
 * Positional factory function for predict-prostate.state.config/Input-group.
 */
predict_prostate.state.config.__GT_Input_group = (function predict_prostate$state$config$__GT_Input_group(key,label,widget_type,widget_params,read_only,write_only,unknowable,panel,models,default$){
return (new predict_prostate.state.config.Input_group(key,label,widget_type,widget_params,read_only,write_only,unknowable,panel,models,default$,null,null,null));
});

/**
 * Factory function for predict-prostate.state.config/Input-group, taking a map of keywords to field values.
 */
predict_prostate.state.config.map__GT_Input_group = (function predict_prostate$state$config$map__GT_Input_group(G__32363){
var extmap__4419__auto__ = (function (){var G__32438 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__32363,new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"widget-type","widget-type",1836256899),new cljs.core.Keyword(null,"widget-params","widget-params",1462627490),new cljs.core.Keyword(null,"read-only","read-only",-191706886),new cljs.core.Keyword(null,"write-only","write-only",292146609),new cljs.core.Keyword(null,"unknowable","unknowable",1635948924),new cljs.core.Keyword(null,"panel","panel",-558637456),new cljs.core.Keyword(null,"models","models",-1985455662),new cljs.core.Keyword(null,"default","default",-1987822328)], 0));
if(cljs.core.record_QMARK_(G__32363)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__32438);
} else {
return G__32438;
}
})();
return (new predict_prostate.state.config.Input_group(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(G__32363),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(G__32363),new cljs.core.Keyword(null,"widget-type","widget-type",1836256899).cljs$core$IFn$_invoke$arity$1(G__32363),new cljs.core.Keyword(null,"widget-params","widget-params",1462627490).cljs$core$IFn$_invoke$arity$1(G__32363),new cljs.core.Keyword(null,"read-only","read-only",-191706886).cljs$core$IFn$_invoke$arity$1(G__32363),new cljs.core.Keyword(null,"write-only","write-only",292146609).cljs$core$IFn$_invoke$arity$1(G__32363),new cljs.core.Keyword(null,"unknowable","unknowable",1635948924).cljs$core$IFn$_invoke$arity$1(G__32363),new cljs.core.Keyword(null,"panel","panel",-558637456).cljs$core$IFn$_invoke$arity$1(G__32363),new cljs.core.Keyword(null,"models","models",-1985455662).cljs$core$IFn$_invoke$arity$1(G__32363),new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(G__32363),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

/**
 * Define all input groups associated with one treatment option. The list of all treatment inputs are
 *   added into the list of input-groups at startup.
 * 
 *   If a treatment widget has value 'nil' we do not flag it as an error. Instead we assume the treatment is not
 *   to be graphed or displayed. 
 */
predict_prostate.state.config.input_groups = new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [predict_prostate.state.config.__GT_Input_group(new cljs.core.Keyword(null,"primary-rx","primary-rx",-1656848904),"Treatment Regime",new cljs.core.Keyword(null,"radio-group","radio-group",1791520002),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"Conservative"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"Radical"], null)], null),false,false,null,new cljs.core.Keyword(null,"primary-rx","primary-rx",-1656848904),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["prostate",null,"prostate-release",null], null), null),(0)),predict_prostate.state.config.__GT_Input_group(new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),"Plot style for treatment benefit",new cljs.core.Keyword(null,"radio-group","radio-group",1791520002),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"area1","area1",-316994623),"Area"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line2","line2",-1975668782),"Line"], null)], null),false,false,null,new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["prostate",null,"prostate-release",null], null), null),null),predict_prostate.state.config.__GT_Input_group(new cljs.core.Keyword(null,"age","age",-604307804),"Age at diagnosis",new cljs.core.Keyword(null,"numeric-input","numeric-input",1592356787),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"min","min",444991522),(35),new cljs.core.Keyword(null,"max","max",61366548),(95),new cljs.core.Keyword(null,"step","step",1288888124),(1),new cljs.core.Keyword(null,"precision","precision",-1175707478),(0)], null),false,false,true,new cljs.core.Keyword(null,"prp","prp",-170777589),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["prostate",null,"prostate-release",null], null), null),""),predict_prostate.state.config.__GT_Input_group(new cljs.core.Keyword(null,"ethnicity","ethnicity",1236281196),"Ethnic Origin",new cljs.core.Keyword(null,"information","information",12262679),"Please click on the info button",false,false,true,new cljs.core.Keyword(null,"prp","prp",-170777589),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["prostate",null,"prostate-release",null], null), null),"See FAQs"),predict_prostate.state.config.__GT_Input_group(new cljs.core.Keyword(null,"psa","psa",-321761459),"PSA (ng/ml)",new cljs.core.Keyword(null,"numeric-input","numeric-input",1592356787),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"min","min",444991522),(0),new cljs.core.Keyword(null,"max","max",61366548),(100),new cljs.core.Keyword(null,"step","step",1288888124),(1),new cljs.core.Keyword(null,"precision","precision",-1175707478),(3)], null),false,false,true,new cljs.core.Keyword(null,"prp","prp",-170777589),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["prostate",null,"prostate-release",null], null), null),""),predict_prostate.state.config.__GT_Input_group(new cljs.core.Keyword(null,"t-stage","t-stage",-1315750984),"Clinical T stage",new cljs.core.Keyword(null,"radio-group","radio-group",1791520002),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"1"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"2"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"3"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),"4"], null)], null),false,false,false,new cljs.core.Keyword(null,"prp","prp",-170777589),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["prostate",null,"prostate-release",null], null), null),null),predict_prostate.state.config.__GT_Input_group(new cljs.core.Keyword(null,"grade-group","grade-group",-1255212518),"Histological grade group",new cljs.core.Keyword(null,"radio-group","radio-group",1791520002),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"1"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"2"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"3"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),"4"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),"5"], null)], null),false,false,false,new cljs.core.Keyword(null,"prp","prp",-170777589),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["prostate",null,"prostate-release",null], null), null),null),predict_prostate.state.config.__GT_Input_group(new cljs.core.Keyword(null,"gleason","gleason",-2044470526),"Gleason score",new cljs.core.Keyword(null,"radio-group","radio-group",1791520002),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"3+3"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"3+4"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"4+3"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),"8"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),"9 or 10"], null)], null),false,false,false,new cljs.core.Keyword(null,"prp","prp",-170777589),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["prostate",null,"prostate-release",null], null), null),null),predict_prostate.state.config.__GT_Input_group(new cljs.core.Keyword(null,"brca","brca",-1943532098),"BRCA",new cljs.core.Keyword(null,"radio-group","radio-group",1791520002),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"Negative or Untested"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"Positive"], null)], null),false,false,false,new cljs.core.Keyword(null,"prp","prp",-170777589),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["prostate-release",null], null), null),null),predict_prostate.state.config.__GT_Input_group(new cljs.core.Keyword(null,"metastasis","metastasis",255525950),"Has the cancer spread (metastasis)?",new cljs.core.Keyword(null,"radio-group","radio-group",1791520002),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"no","no",-390373634),"No"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"yes","yes",182838819),"Yes"], null)], null),false,false,true,new cljs.core.Keyword(null,"prp","prp",-170777589),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["prostate-release",null], null), null),null),predict_prostate.state.config.__GT_Input_group(new cljs.core.Keyword(null,"intra-ductal","intra-ductal",1327158206),"Is there an intra-ductal carcinoma or invasive cribriform component reported  in the biopsies?",new cljs.core.Keyword(null,"radio-group","radio-group",1791520002),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"no","no",-390373634),"No"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"yes","yes",182838819),"Yes"], null)], null),false,false,true,new cljs.core.Keyword(null,"prp","prp",-170777589),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["prostate-release",null], null), null),null),predict_prostate.state.config.__GT_Input_group(new cljs.core.Keyword(null,"biopsy50","biopsy50",-1232179703),"Number of biopsy cores with prostate cancer",new cljs.core.Keyword(null,"radio-group","radio-group",1791520002),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"fewer than half"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"half or more"], null)], null),false,false,true,new cljs.core.Keyword(null,"prp","prp",-170777589),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["prostate",null], null), null),null),predict_prostate.state.config.__GT_Input_group(new cljs.core.Keyword(null,"biopsy-done","biopsy-done",-1332187565),"Biopsy data available?",new cljs.core.Keyword(null,"radio-group","radio-group",1791520002),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"No"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"Yes"], null)], null),false,false,false,new cljs.core.Keyword(null,"prp","prp",-170777589),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["prostate-release",null], null), null),""),predict_prostate.state.config.__GT_Input_group(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666),"Biopsy cores taken",new cljs.core.Keyword(null,"numeric-input","numeric-input",1592356787),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"min","min",444991522),(1),new cljs.core.Keyword(null,"max","max",61366548),(100),new cljs.core.Keyword(null,"step","step",1288888124),(1),new cljs.core.Keyword(null,"precision","precision",-1175707478),(0)], null),false,false,false,new cljs.core.Keyword(null,"prp","prp",-170777589),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["prostate-release",null], null), null),null),predict_prostate.state.config.__GT_Input_group(new cljs.core.Keyword(null,"biopsy-cores-involved","biopsy-cores-involved",1324361520),"Biopsy cores with any prostate cancer in",new cljs.core.Keyword(null,"numeric-input","numeric-input",1592356787),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"min","min",444991522),(1),new cljs.core.Keyword(null,"max","max",61366548),(function (){
return predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"biopsy-cores-taken","biopsy-cores-taken",-1514658666));
}),new cljs.core.Keyword(null,"step","step",1288888124),(1),new cljs.core.Keyword(null,"precision","precision",-1175707478),(0)], null),false,false,false,new cljs.core.Keyword(null,"prp","prp",-170777589),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["prostate-release",null], null), null),null),predict_prostate.state.config.__GT_Input_group(new cljs.core.Keyword(null,"h-admissions","h-admissions",-1503094844),"Hospital admission in last 2 years?",new cljs.core.Keyword(null,"radio-group","radio-group",1791520002),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"No"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"Yes"], null)], null),false,false,false,new cljs.core.Keyword(null,"prp","prp",-170777589),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["prostate",null,"prostate-release",null], null), null),null),predict_prostate.state.config.__GT_Input_group(new cljs.core.Keyword(null,"charlson-comorbidity","charlson-comorbidity",-633596907),(predict_prostate.state.config.any_of_these_diseases.cljs$core$IFn$_invoke$arity$0 ? predict_prostate.state.config.any_of_these_diseases.cljs$core$IFn$_invoke$arity$0() : predict_prostate.state.config.any_of_these_diseases.call(null)),new cljs.core.Keyword(null,"radio-group","radio-group",1791520002),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"No"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"Yes"], null)], null),false,false,false,new cljs.core.Keyword(null,"prp","prp",-170777589),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["prostate",null,"prostate-release",null], null), null),null),predict_prostate.state.config.__GT_Input_group(new cljs.core.Keyword(null,"result-year","result-year",1413238532),"Years after diagnosis",new cljs.core.Keyword(null,"radio-group","radio-group",1791520002),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),"10 years"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(15),"15 years"], null)], null),false,false,false,new cljs.core.Keyword(null,"tables","tables",1334623052),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["v2.1",null], null), null),(10)),predict_prostate.state.config.__GT_Input_group(new cljs.core.Keyword(null,"show-uncertainty","show-uncertainty",-166217605),"More detail?",new cljs.core.Keyword(null,"radio-group","radio-group",1791520002),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"yes","yes",182838819),"Yes"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"no","no",-390373634),"No"], null)], null),false,false,false,new cljs.core.Keyword(null,"tables","tables",1334623052),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["v2.1",null], null), null),new cljs.core.Keyword(null,"no","no",-390373634))], null);
predict_prostate.state.config.get_input_default = (function predict_prostate$state$config$get_input_default(input_groups,key){
return new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.group_by(new cljs.core.Keyword(null,"key","key",-1516042587),input_groups),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null))));
});

//# sourceMappingURL=predict_prostate.state.config.js.map