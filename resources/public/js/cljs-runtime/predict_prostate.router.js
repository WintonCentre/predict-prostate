goog.provide('predict_prostate.router');
cljs.core.enable_console_print_BANG_();
predict_prostate.router.old_browser = goog.object.get(window,"oldBrowser");
predict_prostate.router.use_hash_fragment = (function predict_prostate$router$use_hash_fragment(){
var or__4126__auto__ = goog.DEBUG;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return predict_prostate.router.old_browser;
}
});
predict_prostate.router.docroot = (function predict_prostate$router$docroot(url){
return ["/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)].join('');
});
predict_prostate.router.base = (cljs.core.truth_(goog.DEBUG)?"":"");
predict_prostate.router.iref = (function predict_prostate$router$iref(url){
return [(cljs.core.truth_(predict_prostate.router.use_hash_fragment())?"":""),predict_prostate.router.base,cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)].join('');
});
predict_prostate.router.rooted = (function predict_prostate$router$rooted(url){
return [(cljs.core.truth_(predict_prostate.router.use_hash_fragment())?"":""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)].join('');
});
/**
 * Longest path must be first.
 */
predict_prostate.router.router = bide.core.router(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [predict_prostate.router.rooted("/"),new cljs.core.Keyword(null,"home","home",-74557309)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [predict_prostate.router.rooted("/home"),new cljs.core.Keyword(null,"home","home",-74557309)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [predict_prostate.router.rooted("/about/:page/:section"),new cljs.core.Keyword(null,"about","about",1423892543)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [predict_prostate.router.rooted("/about/:page"),new cljs.core.Keyword(null,"about","about",1423892543)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [predict_prostate.router.rooted("/about"),new cljs.core.Keyword(null,"about","about",1423892543)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [predict_prostate.router.rooted("/tool"),new cljs.core.Keyword(null,"tool","tool",-1298696470)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [predict_prostate.router.rooted("/legal/:page"),new cljs.core.Keyword(null,"legal","legal",302401964)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [predict_prostate.router.rooted("/legal"),new cljs.core.Keyword(null,"legal","legal",302401964)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [predict_prostate.router.rooted("/contact"),new cljs.core.Keyword(null,"contact","contact",609093372)], null)], null));
predict_prostate.router.set_location = (function predict_prostate$router$set_location(url){
return goog.object.set(goog.object.get(window,"location"),"href",url);
});
/**
 * A function which will be called on each route change.
 */
predict_prostate.router.on_navigate = (function predict_prostate$router$on_navigate(name,params,query){
$(".modal").modal("hide");

return cljs.core.reset_BANG_(predict_prostate.state.run_time.route,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,params,query], null));
});
predict_prostate.router.navigate_to = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(pubsub.feeds.publish,predict_prostate.state.run_time.route_change);
bide.core.start_BANG_(predict_prostate.router.router,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"default","default",-1987822328),(cljs.core.truth_(predict_prostate.router.use_hash_fragment())?new cljs.core.Keyword(null,"not-found","not-found",-629079980):new cljs.core.Keyword(null,"home","home",-74557309)),new cljs.core.Keyword(null,"on-navigate","on-navigate",-297227908),predict_prostate.router.on_navigate,new cljs.core.Keyword(null,"html5?","html5?",-1008298421),cljs.core.not(predict_prostate.router.use_hash_fragment())], null));

//# sourceMappingURL=predict_prostate.router.js.map
