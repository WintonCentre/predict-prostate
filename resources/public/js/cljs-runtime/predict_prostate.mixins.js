goog.provide('predict_prostate.mixins');
/**
 * Works like the rum/local mixin, but the initial value is taken
 *   from component args rather than passed in as a mixin parameter.
 *   If called with a key, that key is used to store the local state atom.
 *   If initial is a function it is used to locate the arg needed in :rum/args,
 *   else it is treated as an initial value.
 */
predict_prostate.mixins.arg_local = (function predict_prostate$mixins$arg_local(var_args){
var G__33646 = arguments.length;
switch (G__33646) {
case 1:
return predict_prostate.mixins.arg_local.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return predict_prostate.mixins.arg_local.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(predict_prostate.mixins.arg_local.cljs$core$IFn$_invoke$arity$1 = (function (initial){
return predict_prostate.mixins.arg_local.cljs$core$IFn$_invoke$arity$2(initial,new cljs.core.Keyword("predict-prostate.mixins","value","predict-prostate.mixins/value",-1357438015));
}));

(predict_prostate.mixins.arg_local.cljs$core$IFn$_invoke$arity$2 = (function (initial,key){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init","init",-1875481434),(function (p__33654){
var map__33655 = p__33654;
var map__33655__$1 = cljs.core.__destructure_map(map__33655);
var state = map__33655__$1;
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33655__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var args__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33655__$1,new cljs.core.Keyword("rum","args","rum/args",1315791754));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,key,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(((cljs.core.fn_QMARK_(initial))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(initial,args__$1):initial)));
})], null);
}));

(predict_prostate.mixins.arg_local.cljs$lang$maxFixedArity = 2);

/**
 * allow a rum component to access its rendered size
 */
predict_prostate.mixins.sizing_mixin = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"will-mount","will-mount",-434633071),(function (state){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword(null,"width","width",-384071477),cljs.core.atom.cljs$core$IFn$_invoke$arity$1((100)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"height","height",1025178622),cljs.core.atom.cljs$core$IFn$_invoke$arity$1((100)),new cljs.core.Keyword(null,"resizer","resizer",1358802315),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null)], 0));
}),new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (state){
var node = ReactDOM.findDOMNode(new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state));
var resize = (function (){
cljs.core.reset_BANG_(new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(state),node.clientWidth);

return cljs.core.reset_BANG_(new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(state),node.clientHeight);
});
window.addEventListener("resize",resize);

cljs.core.reset_BANG_(new cljs.core.Keyword(null,"resizer","resizer",1358802315).cljs$core$IFn$_invoke$arity$1(state),resize);

resize();

return state;
}),new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (state){
window.removeEventListener("resize",new cljs.core.Keyword(null,"resizer","resizer",1358802315).cljs$core$IFn$_invoke$arity$1(state));

return state;
})], null);
/**
 * Since the inputs are configurable and sometimes hidden, we need to actively monitor which ones are on screen at
 *   any one time. This is so we know when to switch on treatments.
 */
predict_prostate.mixins.active_monitor = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (state){
var vec__33673_33721 = new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state);
var map__33676_33722 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33673_33721,(0),null);
var map__33676_33723__$1 = cljs.core.__destructure_map(map__33676_33722);
var key_33724 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33676_33723__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(predict_prostate.state.run_time.on_screen_inputs_cursor,cljs.core.conj,key_33724);

predict_prostate.state.run_time.force_recalculation.pubsub$feeds$TopicFeed$publish$arity$2(null,null);

return state;
}),new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (state){
var vec__33687_33725 = new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state);
var map__33690_33726 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33687_33725,(0),null);
var map__33690_33727__$1 = cljs.core.__destructure_map(map__33690_33726);
var key_33728 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33690_33727__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(predict_prostate.state.run_time.on_screen_inputs_cursor,cljs.core.disj,key_33728);

predict_prostate.state.run_time.force_recalculation.pubsub$feeds$TopicFeed$publish$arity$2(null,null);

return state;
})], null);
/**
 * A mixin which keeps track of treatment inputs present in the user interface.
 *   Currently tracks both fully qualified treatments (with a treatment options suffix)
 *   and treatments with this suffix stripped off.
 */
predict_prostate.mixins.treatment_monitor = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (state){
var vec__33695_33729 = new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state);
var map__33698_33730 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33695_33729,(0),null);
var map__33698_33731__$1 = cljs.core.__destructure_map(map__33698_33730);
var key_33732 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33698_33731__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var __33733 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33695_33729,(1),null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(predict_prostate.state.run_time.on_screen_treatments_cursor,cljs.core.conj,key_33732);

return state;
}),new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (state){
var vec__33704_33734 = new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state);
var map__33707_33735 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33704_33734,(0),null);
var map__33707_33736__$1 = cljs.core.__destructure_map(map__33707_33735);
var key_33737 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33707_33736__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var __33738 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33704_33734,(1),null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(predict_prostate.state.run_time.on_screen_treatments_cursor,cljs.core.disj,cljs.core.PersistentHashSet.createAsIfByAssoc([key_33737]));

return state;
})], null);
predict_prostate.mixins.set_default = (function predict_prostate$mixins$set_default(key){

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (state){
pubsub.feeds.publish(predict_prostate.state.run_time.input_change(key),(function (){var temp__5751__auto__ = cljs.core.deref(predict_prostate.state.run_time.input_cursor(key));
if(cljs.core.truth_(temp__5751__auto__)){
var val = temp__5751__auto__;
return val;
} else {
return predict_prostate.state.config.get_input_default(predict_prostate.state.config.input_groups,key);
}
})());

return state;
})], null);
});

//# sourceMappingURL=predict_prostate.mixins.js.map
