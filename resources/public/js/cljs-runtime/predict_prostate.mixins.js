goog.provide('predict_prostate.mixins');
/**
 * Works like the rum/local mixin, but the initial value is taken
 *   from component args rather than passed in as a mixin parameter.
 *   If called with a key, that key is used to store the local state atom.
 *   If initial is a function it is used to locate the arg needed in :rum/args,
 *   else it is treated as an initial value.
 */
predict_prostate.mixins.arg_local = (function predict_prostate$mixins$arg_local(var_args){
var G__32757 = arguments.length;
switch (G__32757) {
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
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init","init",-1875481434),(function (p__32768){
var map__32769 = p__32768;
var map__32769__$1 = (((((!((map__32769 == null))))?(((((map__32769.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32769.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32769):map__32769);
var state = map__32769__$1;
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32769__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var args__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32769__$1,new cljs.core.Keyword("rum","args","rum/args",1315791754));
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
var vec__32786_32859 = new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state);
var map__32789_32860 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32786_32859,(0),null);
var map__32789_32861__$1 = (((((!((map__32789_32860 == null))))?(((((map__32789_32860.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32789_32860.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32789_32860):map__32789_32860);
var key_32862 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32789_32861__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(predict_prostate.state.run_time.on_screen_inputs_cursor,cljs.core.conj,key_32862);

predict_prostate.state.run_time.force_recalculation.pubsub$feeds$TopicFeed$publish$arity$2(null,null);

return state;
}),new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (state){
var vec__32797_32865 = new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state);
var map__32800_32866 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32797_32865,(0),null);
var map__32800_32867__$1 = (((((!((map__32800_32866 == null))))?(((((map__32800_32866.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32800_32866.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32800_32866):map__32800_32866);
var key_32868 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32800_32867__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(predict_prostate.state.run_time.on_screen_inputs_cursor,cljs.core.disj,key_32868);

predict_prostate.state.run_time.force_recalculation.pubsub$feeds$TopicFeed$publish$arity$2(null,null);

return state;
})], null);
/**
 * A mixin which keeps track of treatment inputs present in the user interface.
 *   Currently tracks both fully qualified treatments (with a treatment options suffix)
 *   and treatments with this suffix stripped off.
 */
predict_prostate.mixins.treatment_monitor = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (state){
var vec__32804_32869 = new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state);
var map__32807_32870 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32804_32869,(0),null);
var map__32807_32871__$1 = (((((!((map__32807_32870 == null))))?(((((map__32807_32870.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32807_32870.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32807_32870):map__32807_32870);
var key_32872 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32807_32871__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var __32873 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32804_32869,(1),null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(predict_prostate.state.run_time.on_screen_treatments_cursor,cljs.core.conj,key_32872);

return state;
}),new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (state){
var vec__32817_32878 = new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state);
var map__32820_32879 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32817_32878,(0),null);
var map__32820_32880__$1 = (((((!((map__32820_32879 == null))))?(((((map__32820_32879.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32820_32879.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32820_32879):map__32820_32879);
var key_32881 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32820_32880__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var __32882 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32817_32878,(1),null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(predict_prostate.state.run_time.on_screen_treatments_cursor,cljs.core.disj,cljs.core.PersistentHashSet.createAsIfByAssoc([key_32881]));

return state;
})], null);
predict_prostate.mixins.set_default = (function predict_prostate$mixins$set_default(key){

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (state){
pubsub.feeds.publish(predict_prostate.state.run_time.input_change(key),(function (){var temp__5733__auto__ = cljs.core.deref(predict_prostate.state.run_time.input_cursor(key));
if(cljs.core.truth_(temp__5733__auto__)){
var val = temp__5733__auto__;
return val;
} else {
return predict_prostate.state.config.get_input_default(predict_prostate.state.config.input_groups,key);
}
})());

return state;
})], null);
});

//# sourceMappingURL=predict_prostate.mixins.js.map