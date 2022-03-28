goog.provide('oops.core');
oops.core.report_error_dynamically = (function oops$core$report_error_dynamically(msg,data){
if(oops.state.was_error_reported_QMARK_()){
return null;
} else {
oops.state.mark_error_reported_BANG_();

var G__48339 = oops.config.get_error_reporting();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"throw","throw",-1044625833),G__48339)){
throw oops.state.prepare_error_from_call_site(msg,oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"console","console",1228072057),G__48339)){
var G__48342 = (console["error"]);
var G__48343 = msg;
var G__48344 = oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data);
var fexpr__48341 = oops.state.get_console_reporter();
return (fexpr__48341.cljs$core$IFn$_invoke$arity$3 ? fexpr__48341.cljs$core$IFn$_invoke$arity$3(G__48342,G__48343,G__48344) : fexpr__48341.call(null,G__48342,G__48343,G__48344));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__48339)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__48339)].join('')));

}
}
}
}
});
oops.core.report_warning_dynamically = (function oops$core$report_warning_dynamically(msg,data){
var G__48349 = oops.config.get_warning_reporting();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"throw","throw",-1044625833),G__48349)){
throw oops.state.prepare_error_from_call_site(msg,oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"console","console",1228072057),G__48349)){
var G__48351 = (console["warn"]);
var G__48352 = msg;
var G__48353 = oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data);
var fexpr__48350 = oops.state.get_console_reporter();
return (fexpr__48350.cljs$core$IFn$_invoke$arity$3 ? fexpr__48350.cljs$core$IFn$_invoke$arity$3(G__48351,G__48352,G__48353) : fexpr__48350.call(null,G__48351,G__48352,G__48353));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__48349)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__48349)].join('')));

}
}
}
});
oops.core.report_if_needed_dynamically = (function oops$core$report_if_needed_dynamically(var_args){
var args__4824__auto__ = [];
var len__4818__auto___48432 = arguments.length;
var i__4819__auto___48433 = (0);
while(true){
if((i__4819__auto___48433 < len__4818__auto___48432)){
args__4824__auto__.push((arguments[i__4819__auto___48433]));

var G__48434 = (i__4819__auto___48433 + (1));
i__4819__auto___48433 = G__48434;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic = (function (msg_id,p__48358){
var vec__48359 = p__48358;
var info = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48359,(0),null);

if(cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),msg_id)){
} else {
var G__48364_48435 = oops.config.get_config_key(msg_id);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"warn","warn",-436710552),G__48364_48435)){
oops.core.report_warning_dynamically.call(null,oops.messages.runtime_message.cljs$core$IFn$_invoke$arity$2(msg_id,info),info);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"error","error",-978969032),G__48364_48435)){
oops.core.report_error_dynamically.call(null,oops.messages.runtime_message.cljs$core$IFn$_invoke$arity$2(msg_id,info),info);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__48364_48435)){
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__48364_48435)){
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__48364_48435)].join('')));

}
}
}
}
}

return null;
}));

(oops.core.report_if_needed_dynamically.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(oops.core.report_if_needed_dynamically.cljs$lang$applyTo = (function (seq48354){
var G__48355 = cljs.core.first(seq48354);
var seq48354__$1 = cljs.core.next(seq48354);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48355,seq48354__$1);
}));

oops.core.validate_object_access_dynamically = (function oops$core$validate_object_access_dynamically(obj,mode,key,push_QMARK_,check_key_read_QMARK_,check_key_write_QMARK_){
if(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,(0))) && ((void 0 === obj))))?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"undefined",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null));

return false;
})()
):((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,(0))) && ((obj == null))))?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"nil",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null));

return false;
})()
):((cljs.core.boolean_QMARK_(obj))?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"boolean",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null));

return false;
})()
):((typeof obj === 'number')?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"number",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null));

return false;
})()
):((typeof obj === 'string')?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"string",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null));

return false;
})()
):((cljs.core.not(goog.isObject(obj)))?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"non-object",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null));

return false;
})()
):(cljs.core.truth_(goog.isDateLike(obj))?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"date-like",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null));

return true;
})()
):(cljs.core.truth_(oops.helpers.cljs_type_QMARK_(obj))?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"cljs type",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null));

return true;
})()
):(cljs.core.truth_(oops.helpers.cljs_instance_QMARK_(obj))?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"cljs instance",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null));

return true;
})()
):true
)))))))))){
if(cljs.core.truth_(push_QMARK_)){
oops.state.add_key_to_current_path_BANG_(key);

oops.state.set_last_access_modifier_BANG_(mode);
} else {
}

var and__4210__auto__ = (cljs.core.truth_(check_key_read_QMARK_)?((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,(0))) && (cljs.core.not(goog.object.containsKey(obj,key)))))?oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"missing-object-key","missing-object-key",-1300201731),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null)):true):true);
if(cljs.core.truth_(and__4210__auto__)){
if(cljs.core.truth_(check_key_write_QMARK_)){
var temp__5755__auto__ = oops.helpers.get_property_descriptor(obj,key);
if((temp__5755__auto__ == null)){
if(cljs.core.truth_(oops.helpers.is_object_frozen_QMARK_(obj))){
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"object-is-frozen","object-is-frozen",-1391578096),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null));
} else {
if(cljs.core.truth_(oops.helpers.is_object_sealed_QMARK_(obj))){
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"object-is-sealed","object-is-sealed",-1791813926),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null));
} else {
return true;

}
}
} else {
var descriptor_48365 = temp__5755__auto__;
var temp__5755__auto____$1 = oops.helpers.determine_property_non_writable_reason(descriptor_48365);
if((temp__5755__auto____$1 == null)){
return true;
} else {
var reason_48366 = temp__5755__auto____$1;
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"object-key-not-writable","object-key-not-writable",206336031),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"frozen?","frozen?",613726824),oops.helpers.is_object_frozen_QMARK_(obj),new cljs.core.Keyword(null,"reason","reason",-2070751759),reason_48366,new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null));
}
}
} else {
return true;
}
} else {
return and__4210__auto__;
}
} else {
return null;
}
});
oops.core.validate_fn_call_dynamically = (function oops$core$validate_fn_call_dynamically(fn,mode){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,(1))) && ((fn == null)))){
return true;
} else {
if(typeof fn === 'function'){
return true;
} else {
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"expected-function-value","expected-function-value",-1399123630),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"soft?","soft?",-1339668477),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,(1)),new cljs.core.Keyword(null,"fn","fn",-1175266204),fn,new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null));

}
}
});
oops.core.punch_key_dynamically_BANG_ = (function oops$core$punch_key_dynamically_BANG_(obj,key){
var child_factory_48370 = oops.config.get_child_factory();
var child_factory_48370__$1 = (function (){var G__48371 = child_factory_48370;
var G__48371__$1 = (((G__48371 instanceof cljs.core.Keyword))?G__48371.fqn:null);
switch (G__48371__$1) {
case "js-obj":
return (function (){
return ({});
});

break;
case "js-array":
return (function (){
return [];
});

break;
default:
return child_factory_48370;

}
})();

var child_obj_48369 = (child_factory_48370__$1.cljs$core$IFn$_invoke$arity$2 ? child_factory_48370__$1.cljs$core$IFn$_invoke$arity$2(obj,key) : child_factory_48370__$1.call(null,obj,key));
if(oops.core.validate_object_access_dynamically(obj,(2),key,false,true,true)){
(obj[key] = child_obj_48369);
} else {
}

return child_obj_48369;
});
oops.core.build_path_dynamically = (function oops$core$build_path_dynamically(selector){
if(((typeof selector === 'string') || ((selector instanceof cljs.core.Keyword)))){
var selector_path_48374 = [];
oops.schema.prepare_simple_path_BANG_(selector,selector_path_48374);

return selector_path_48374;
} else {
var selector_path_48375 = [];
oops.schema.prepare_path_BANG_(selector,selector_path_48375);

return selector_path_48375;

}
});
oops.core.check_path_dynamically = (function oops$core$check_path_dynamically(path,op){
var temp__5757__auto__ = oops.schema.check_dynamic_path_BANG_(path,op);
if((temp__5757__auto__ == null)){
return null;
} else {
var issue_48376 = temp__5757__auto__;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(oops.core.report_if_needed_dynamically,issue_48376);
}
});
oops.core.get_key_dynamically = (function oops$core$get_key_dynamically(obj,key,mode){
if(oops.core.validate_object_access_dynamically(obj,mode,key,true,true,false)){
return (obj[key]);
} else {
return null;
}
});
oops.core.set_key_dynamically = (function oops$core$set_key_dynamically(obj,key,val,mode){
if(oops.core.validate_object_access_dynamically(obj,mode,key,true,true,true)){
return (obj[key] = val);
} else {
return null;
}
});
oops.core.get_selector_dynamically = (function oops$core$get_selector_dynamically(obj,selector){
if(cljs.core.truth_((((!(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector))))?(function (){var explanation_48385 = cljs.spec.alpha.explain_data(new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector);
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_48385,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null));
})():true))){
var path_48378 = (function (){var path_48377 = oops.core.build_path_dynamically(selector);
oops.core.check_path_dynamically(path_48377,(0));

return path_48377;
})();
var len_48379 = path_48378.length;
var i_48380 = (0);
var obj_48381 = obj;
while(true){
if((i_48380 < len_48379)){
var mode_48382 = (path_48378[i_48380]);
var key_48383 = (path_48378[(i_48380 + (1))]);
var next_obj_48384 = oops.core.get_key_dynamically(obj_48381,key_48383,mode_48382);
var G__48386 = mode_48382;
switch (G__48386) {
case (0):
var G__48438 = (i_48380 + (2));
var G__48439 = next_obj_48384;
i_48380 = G__48438;
obj_48381 = G__48439;
continue;

break;
case (1):
if((!((next_obj_48384 == null)))){
var G__48440 = (i_48380 + (2));
var G__48441 = next_obj_48384;
i_48380 = G__48440;
obj_48381 = G__48441;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_48384 == null)))){
var G__48442 = (i_48380 + (2));
var G__48443 = next_obj_48384;
i_48380 = G__48442;
obj_48381 = G__48443;
continue;
} else {
var G__48444 = (i_48380 + (2));
var G__48445 = oops.core.punch_key_dynamically_BANG_.call(null,obj_48381,key_48383);
i_48380 = G__48444;
obj_48381 = G__48445;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__48386)].join('')));

}
} else {
return obj_48381;
}
break;
}
} else {
return null;
}
});
oops.core.get_selector_call_info_dynamically = (function oops$core$get_selector_call_info_dynamically(obj,selector){
if(cljs.core.truth_((((!(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector))))?(function (){var explanation_48412 = cljs.spec.alpha.explain_data(new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector);
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_48412,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null));
})():true))){
var path_48388 = (function (){var path_48387 = oops.core.build_path_dynamically(selector);
oops.core.check_path_dynamically(path_48387,(0));

return path_48387;
})();
var len_48389 = path_48388.length;
if((len_48389 < (4))){
return [obj,(function (){var path_48391 = path_48388;
var len_48392 = path_48391.length;
var i_48393 = (0);
var obj_48394 = obj;
while(true){
if((i_48393 < len_48392)){
var mode_48395 = (path_48391[i_48393]);
var key_48396 = (path_48391[(i_48393 + (1))]);
var next_obj_48397 = oops.core.get_key_dynamically(obj_48394,key_48396,mode_48395);
var G__48413 = mode_48395;
switch (G__48413) {
case (0):
var G__48448 = (i_48393 + (2));
var G__48449 = next_obj_48397;
i_48393 = G__48448;
obj_48394 = G__48449;
continue;

break;
case (1):
if((!((next_obj_48397 == null)))){
var G__48450 = (i_48393 + (2));
var G__48451 = next_obj_48397;
i_48393 = G__48450;
obj_48394 = G__48451;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_48397 == null)))){
var G__48452 = (i_48393 + (2));
var G__48453 = next_obj_48397;
i_48393 = G__48452;
obj_48394 = G__48453;
continue;
} else {
var G__48454 = (i_48393 + (2));
var G__48455 = oops.core.punch_key_dynamically_BANG_.call(null,obj_48394,key_48396);
i_48393 = G__48454;
obj_48394 = G__48455;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__48413)].join('')));

}
} else {
return obj_48394;
}
break;
}
})()];
} else {
var target_obj_48390 = (function (){var path_48398 = path_48388.slice((0),(len_48389 - (2)));
var len_48399 = path_48398.length;
var i_48400 = (0);
var obj_48401 = obj;
while(true){
if((i_48400 < len_48399)){
var mode_48402 = (path_48398[i_48400]);
var key_48403 = (path_48398[(i_48400 + (1))]);
var next_obj_48404 = oops.core.get_key_dynamically(obj_48401,key_48403,mode_48402);
var G__48414 = mode_48402;
switch (G__48414) {
case (0):
var G__48457 = (i_48400 + (2));
var G__48458 = next_obj_48404;
i_48400 = G__48457;
obj_48401 = G__48458;
continue;

break;
case (1):
if((!((next_obj_48404 == null)))){
var G__48459 = (i_48400 + (2));
var G__48460 = next_obj_48404;
i_48400 = G__48459;
obj_48401 = G__48460;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_48404 == null)))){
var G__48461 = (i_48400 + (2));
var G__48462 = next_obj_48404;
i_48400 = G__48461;
obj_48401 = G__48462;
continue;
} else {
var G__48463 = (i_48400 + (2));
var G__48464 = oops.core.punch_key_dynamically_BANG_.call(null,obj_48401,key_48403);
i_48400 = G__48463;
obj_48401 = G__48464;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__48414)].join('')));

}
} else {
return obj_48401;
}
break;
}
})();
return [target_obj_48390,(function (){var path_48405 = [(path_48388[(len_48389 - (2))]),(path_48388[(len_48389 - (1))])];
var len_48406 = path_48405.length;
var i_48407 = (0);
var obj_48408 = target_obj_48390;
while(true){
if((i_48407 < len_48406)){
var mode_48409 = (path_48405[i_48407]);
var key_48410 = (path_48405[(i_48407 + (1))]);
var next_obj_48411 = oops.core.get_key_dynamically(obj_48408,key_48410,mode_48409);
var G__48415 = mode_48409;
switch (G__48415) {
case (0):
var G__48466 = (i_48407 + (2));
var G__48467 = next_obj_48411;
i_48407 = G__48466;
obj_48408 = G__48467;
continue;

break;
case (1):
if((!((next_obj_48411 == null)))){
var G__48468 = (i_48407 + (2));
var G__48469 = next_obj_48411;
i_48407 = G__48468;
obj_48408 = G__48469;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_48411 == null)))){
var G__48470 = (i_48407 + (2));
var G__48471 = next_obj_48411;
i_48407 = G__48470;
obj_48408 = G__48471;
continue;
} else {
var G__48472 = (i_48407 + (2));
var G__48473 = oops.core.punch_key_dynamically_BANG_.call(null,obj_48408,key_48410);
i_48407 = G__48472;
obj_48408 = G__48473;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__48415)].join('')));

}
} else {
return obj_48408;
}
break;
}
})()];
}
} else {
return null;
}
});
oops.core.set_selector_dynamically = (function oops$core$set_selector_dynamically(obj,selector,val){
if(cljs.core.truth_((((!(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector))))?(function (){var explanation_48430 = cljs.spec.alpha.explain_data(new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector);
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_48430,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null));
})():true))){
var path_48417 = (function (){var path_48416 = oops.core.build_path_dynamically(selector);
oops.core.check_path_dynamically(path_48416,(1));

return path_48416;
})();
var len_48420 = path_48417.length;
var parent_obj_path_48421 = path_48417.slice((0),(len_48420 - (2)));
var key_48418 = (path_48417[(len_48420 - (1))]);
var mode_48419 = (path_48417[(len_48420 - (2))]);
var parent_obj_48422 = (function (){var path_48423 = parent_obj_path_48421;
var len_48424 = path_48423.length;
var i_48425 = (0);
var obj_48426 = obj;
while(true){
if((i_48425 < len_48424)){
var mode_48427 = (path_48423[i_48425]);
var key_48428 = (path_48423[(i_48425 + (1))]);
var next_obj_48429 = oops.core.get_key_dynamically(obj_48426,key_48428,mode_48427);
var G__48431 = mode_48427;
switch (G__48431) {
case (0):
var G__48478 = (i_48425 + (2));
var G__48479 = next_obj_48429;
i_48425 = G__48478;
obj_48426 = G__48479;
continue;

break;
case (1):
if((!((next_obj_48429 == null)))){
var G__48480 = (i_48425 + (2));
var G__48481 = next_obj_48429;
i_48425 = G__48480;
obj_48426 = G__48481;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_48429 == null)))){
var G__48482 = (i_48425 + (2));
var G__48483 = next_obj_48429;
i_48425 = G__48482;
obj_48426 = G__48483;
continue;
} else {
var G__48484 = (i_48425 + (2));
var G__48485 = oops.core.punch_key_dynamically_BANG_.call(null,obj_48426,key_48428);
i_48425 = G__48484;
obj_48426 = G__48485;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__48431)].join('')));

}
} else {
return obj_48426;
}
break;
}
})();
return oops.core.set_key_dynamically(parent_obj_48422,key_48418,val,mode_48419);
} else {
return null;
}
});

//# sourceMappingURL=oops.core.js.map
