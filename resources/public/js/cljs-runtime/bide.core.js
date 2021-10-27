goog.provide('bide.core');

/**
 * @interface
 */
bide.core.IRouter = function(){};

var bide$core$IRouter$_navigate$dyn_43560 = (function (_,loc,params,query){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (bide.core._navigate[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$4(_,loc,params,query) : m__4429__auto__.call(null,_,loc,params,query));
} else {
var m__4426__auto__ = (bide.core._navigate["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$4(_,loc,params,query) : m__4426__auto__.call(null,_,loc,params,query));
} else {
throw cljs.core.missing_protocol("IRouter.-navigate",_);
}
}
});
bide.core._navigate = (function bide$core$_navigate(_,loc,params,query){
if((((!((_ == null)))) && ((!((_.bide$core$IRouter$_navigate$arity$4 == null)))))){
return _.bide$core$IRouter$_navigate$arity$4(_,loc,params,query);
} else {
return bide$core$IRouter$_navigate$dyn_43560(_,loc,params,query);
}
});

var bide$core$IRouter$_replace$dyn_43561 = (function (_,loc,params,query){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (bide.core._replace[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$4(_,loc,params,query) : m__4429__auto__.call(null,_,loc,params,query));
} else {
var m__4426__auto__ = (bide.core._replace["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$4(_,loc,params,query) : m__4426__auto__.call(null,_,loc,params,query));
} else {
throw cljs.core.missing_protocol("IRouter.-replace",_);
}
}
});
bide.core._replace = (function bide$core$_replace(_,loc,params,query){
if((((!((_ == null)))) && ((!((_.bide$core$IRouter$_replace$arity$4 == null)))))){
return _.bide$core$IRouter$_replace$arity$4(_,loc,params,query);
} else {
return bide$core$IRouter$_replace$dyn_43561(_,loc,params,query);
}
});


/**
 * Path parameters coercion protocol.
 * @interface
 */
bide.core.IPathRepr = function(){};

var bide$core$IPathRepr$_repr$dyn_43562 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (bide.core._repr[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (bide.core._repr["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IPathRepr.-repr",_);
}
}
});
/**
 * Return a representation of object in path.
 */
bide.core._repr = (function bide$core$_repr(_){
if((((!((_ == null)))) && ((!((_.bide$core$IPathRepr$_repr$arity$1 == null)))))){
return _.bide$core$IPathRepr$_repr$arity$1(_);
} else {
return bide$core$IPathRepr$_repr$dyn_43562(_);
}
});

goog.object.set(bide.core.IPathRepr,"null",true);

goog.object.set(bide.core._repr,"null",(function (it){
return "";
}));

goog.object.set(bide.core.IPathRepr,"object",true);

goog.object.set(bide.core._repr,"object",(function (it){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(it);
}));

goog.object.set(bide.core.IPathRepr,"number",true);

goog.object.set(bide.core._repr,"number",(function (it){
return it;
}));

goog.object.set(bide.core.IPathRepr,"string",true);

goog.object.set(bide.core._repr,"string",(function (it){
return it;
}));

(cljs.core.Keyword.prototype.bide$core$IPathRepr$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.bide$core$IPathRepr$_repr$arity$1 = (function (it){
var it__$1 = this;
return cljs.core.name(it__$1);
}));

(cljs.core.PersistentVector.prototype.bide$core$IPathRepr$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.bide$core$IPathRepr$_repr$arity$1 = (function (it){
var it__$1 = this;
return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(bide.core._repr,it__$1));
}));
bide.core.props__GT_js = (function bide$core$props__GT_js(params){
if(cljs.core.truth_(params)){
return cljs.core.reduce_kv((function (m,k,v){
(m[cljs.core.key__GT_js.cljs$core$IFn$_invoke$arity$1(k)] = bide.core._repr(v));

return m;
}),({}),params);
} else {
return null;
}
});
bide.core.js__GT_props = (function bide$core$js__GT_props(params){
if(cljs.core.truth_(params)){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,key){
var value = (params[key]);
if(cljs.core.truth_(bide.impl.helpers.isArray(value))){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(acc,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(key),cljs.core.vec(value));
} else {
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(acc,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(key),value);
}
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),bide.impl.helpers.keys(params)));
} else {
return null;
}
});
/**
 * Check if the `v` is a Router instance.
 */
bide.core.router_QMARK_ = (function bide$core$router_QMARK_(v){
return bide.impl.router.isRouter(v);
});
/**
 * Construct an empty router.
 */
bide.core.empty = (function bide$core$empty(){
return bide.impl.router.empty();
});
/**
 * Insert a new entry to the router.
 */
bide.core.insert = (function bide$core$insert(router,path,name){
return bide.impl.router.insert(router,path,name);
});
/**
 * Try to match a path to a specific route in the router, returns `nil`
 *   if the no match is found.
 */
bide.core.match = (function bide$core$match(router,path){
var vec__43506 = cljs.core.vec(bide.impl.router.match(router,path));
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43506,(0),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43506,(1),null);
var query = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43506,(2),null);
if(cljs.core.truth_(name)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,bide.core.js__GT_props(params),bide.core.js__GT_props(query)], null);
} else {
return null;
}
});
/**
 * A helper for compile a vector of routes in a router instance.
 */
bide.core.router = (function bide$core$router(routes){
if(cljs.core.vector_QMARK_(routes)){
} else {
throw (new Error("Assert failed: (vector? routes)"));
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (router,p__43509){
var vec__43510 = p__43509;
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43510,(0),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43510,(1),null);
return bide.impl.router.insert(router,path,name);
}),bide.impl.router.empty(),routes);
});
/**
 * Perform a url resolve operation.
 */
bide.core.resolve = (function bide$core$resolve(var_args){
var G__43514 = arguments.length;
switch (G__43514) {
case 2:
return bide.core.resolve.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return bide.core.resolve.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return bide.core.resolve.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(bide.core.resolve.cljs$core$IFn$_invoke$arity$2 = (function (router,name){
return bide.core.resolve.cljs$core$IFn$_invoke$arity$4(router,name,null,null);
}));

(bide.core.resolve.cljs$core$IFn$_invoke$arity$3 = (function (router,name,params){
return bide.core.resolve.cljs$core$IFn$_invoke$arity$4(router,name,params,null);
}));

(bide.core.resolve.cljs$core$IFn$_invoke$arity$4 = (function (router,name,params,query){
if(bide.core.router_QMARK_(router)){
} else {
throw (new Error("Assert failed: (router? router)"));
}

var params__$1 = bide.core.props__GT_js(params);
var query__$1 = bide.core.props__GT_js(query);
return bide.impl.router.resolve(router,name,params__$1,query__$1);
}));

(bide.core.resolve.cljs$lang$maxFixedArity = 4);

/**
 * Construct an object that implements
 *   `goog.history.Html5History.TokenTransformer` with query string support.
 */
bide.core.token_transformer = (function bide$core$token_transformer(){
return (new bide.impl.TokenTransformer());
});
/**
 * Starts the bide routing handling using the `goog.history.Html5History` API as
 *   browser history event watching mechanism.
 * 
 *   Accepts router and configuration map. Required configuration keys are
 *   `:on-navigate` and `:default`. `:on-navigate` is a function that would be
 *   called each time route is changed providing route id, params and query as
 *   arguments. `:default` used as default route id when URL doesn't match any
 *   route registered in router. Optional configuration keys are `:html5?` (`false`
 *   by default) and `:html5history` (new `goog.history.Html5History` instance by
 *   default). Passing anything that evaluates to logical false as value of
 *   `:html5?` would configure history to use fragment to store token. Pass factory
 *   function that returns instance of `goog.history.Html5History` to
 *   `:html5history` when you need to do some customizations to history instance
 *   used to manage history events.
 */
bide.core.start_BANG_ = (function bide$core$start_BANG_(router,p__43520){
var map__43521 = p__43520;
var map__43521__$1 = (((((!((map__43521 == null))))?(((((map__43521.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43521.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43521):map__43521);
var opts = map__43521__$1;
var on_navigate = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43521__$1,new cljs.core.Keyword(null,"on-navigate","on-navigate",-297227908));
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43521__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var html5_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__43521__$1,new cljs.core.Keyword(null,"html5?","html5?",-1008298421),false);
var html5history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43521__$1,new cljs.core.Keyword(null,"html5history","html5history",-1921478143));
var default$__$1 = ((cljs.core.vector_QMARK_(default$))?default$:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [default$,null], null));
var _on_navigate = (function bide$core$start_BANG__$__on_navigate(event){
var vec__43532 = _match(event.token);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43532,(0),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43532,(1),null);
var query = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43532,(2),null);
return (on_navigate.cljs$core$IFn$_invoke$arity$3 ? on_navigate.cljs$core$IFn$_invoke$arity$3(name,params,query) : on_navigate.call(null,name,params,query));
});
var _match = (function bide$core$start_BANG__$__match(token){
var result = bide.core.match(router,token);
var or__4126__auto__ = result;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return default$__$1;
}
});
var _initial_token = (function bide$core$start_BANG__$__initial_token(history){
var token = history.getToken();
if(clojure.string.blank_QMARK_(token)){
var or__4126__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(bide.core.resolve,router,default$__$1);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "/";
}
} else {
return token;
}
});
var html5history__$1 = ((cljs.core.fn_QMARK_(html5history))?(html5history.cljs$core$IFn$_invoke$arity$0 ? html5history.cljs$core$IFn$_invoke$arity$0() : html5history.call(null)):(new goog.history.Html5History(null,bide.core.token_transformer())));
var history = (cljs.core.truth_(html5_QMARK_)?(function (){var G__43535 = html5history__$1;
G__43535.setPathPrefix("");

G__43535.setUseFragment(false);

G__43535.setEnabled(true);

return G__43535;
})():(function (){var G__43536 = html5history__$1;
G__43536.setUseFragment(true);

G__43536.setEnabled(true);

return G__43536;
})());
var initial_token = _initial_token(history);
var initial_loc = _match(initial_token);
var lkey = goog.events.listen(history,goog.history.EventType.NAVIGATE,_on_navigate);
history.replaceToken(initial_token);

var x43540 = router;
(x43540.close = (function (){
var _ = this;
goog.events.unlistenByKey(lkey);

return history.setEnabled(false);
}));

(x43540.bide$core$IRouter$ = cljs.core.PROTOCOL_SENTINEL);

(x43540.bide$core$IRouter$_navigate$arity$4 = (function (_,id,params,query){
var ___$1 = this;
var temp__5735__auto__ = bide.core.resolve.cljs$core$IFn$_invoke$arity$4(router,id,params,query);
if(cljs.core.truth_(temp__5735__auto__)){
var path = temp__5735__auto__;
return history.setToken(path);
} else {
return null;
}
}));

(x43540.bide$core$IRouter$_replace$arity$4 = (function (_,id,params,query){
var ___$1 = this;
var temp__5735__auto__ = bide.core.resolve.cljs$core$IFn$_invoke$arity$4(router,id,params,query);
if(cljs.core.truth_(temp__5735__auto__)){
var path = temp__5735__auto__;
return history.replaceToken(path);
} else {
return null;
}
}));

return x43540;
});
/**
 * Trigger a navigate event to a specific location.
 */
bide.core.navigate_BANG_ = (function bide$core$navigate_BANG_(var_args){
var G__43554 = arguments.length;
switch (G__43554) {
case 2:
return bide.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return bide.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return bide.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(bide.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (router,id){
return bide.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$4(router,id,null,null);
}));

(bide.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (router,id,params){
return bide.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$4(router,id,params,null);
}));

(bide.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (router,id,params,query){
if(bide.core.router_QMARK_(router)){
} else {
throw (new Error("Assert failed: (router? router)"));
}

return bide.core._navigate(router,id,params,query);
}));

(bide.core.navigate_BANG_.cljs$lang$maxFixedArity = 4);

/**
 * Trigger a replace event to a specific location.
 */
bide.core.replace_BANG_ = (function bide$core$replace_BANG_(var_args){
var G__43559 = arguments.length;
switch (G__43559) {
case 2:
return bide.core.replace_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return bide.core.replace_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return bide.core.replace_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(bide.core.replace_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (router,id){
return bide.core.replace_BANG_.cljs$core$IFn$_invoke$arity$4(router,id,null,null);
}));

(bide.core.replace_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (router,id,params){
return bide.core.replace_BANG_.cljs$core$IFn$_invoke$arity$4(router,id,params,null);
}));

(bide.core.replace_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (router,id,params,query){
if(bide.core.router_QMARK_(router)){
} else {
throw (new Error("Assert failed: (router? router)"));
}

return bide.core._replace(router,id,params,query);
}));

(bide.core.replace_BANG_.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=bide.core.js.map
