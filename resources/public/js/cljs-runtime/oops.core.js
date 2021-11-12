goog.provide('oops.core');
oops.core.report_error_dynamically = (function oops$core$report_error_dynamically(msg,data){
if(oops.state.was_error_reported_QMARK_()){
return null;
} else {
oops.state.mark_error_reported_BANG_();

var G__50460 = oops.config.get_error_reporting();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"throw","throw",-1044625833),G__50460)){
throw oops.state.prepare_error_from_call_site(msg,oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"console","console",1228072057),G__50460)){
var G__50465 = (console["error"]);
var G__50466 = msg;
var G__50467 = oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data);
var fexpr__50464 = oops.state.get_console_reporter();
return (fexpr__50464.cljs$core$IFn$_invoke$arity$3 ? fexpr__50464.cljs$core$IFn$_invoke$arity$3(G__50465,G__50466,G__50467) : fexpr__50464.call(null,G__50465,G__50466,G__50467));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__50460)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50460)].join('')));

}
}
}
}
});
oops.core.report_warning_dynamically = (function oops$core$report_warning_dynamically(msg,data){
var G__50471 = oops.config.get_warning_reporting();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"throw","throw",-1044625833),G__50471)){
throw oops.state.prepare_error_from_call_site(msg,oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"console","console",1228072057),G__50471)){
var G__50474 = (console["warn"]);
var G__50475 = msg;
var G__50476 = oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data);
var fexpr__50473 = oops.state.get_console_reporter();
return (fexpr__50473.cljs$core$IFn$_invoke$arity$3 ? fexpr__50473.cljs$core$IFn$_invoke$arity$3(G__50474,G__50475,G__50476) : fexpr__50473.call(null,G__50474,G__50475,G__50476));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__50471)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50471)].join('')));

}
}
}
});
oops.core.report_if_needed_dynamically = (function oops$core$report_if_needed_dynamically(var_args){
var args__4742__auto__ = [];
var len__4736__auto___50573 = arguments.length;
var i__4737__auto___50574 = (0);
while(true){
if((i__4737__auto___50574 < len__4736__auto___50573)){
args__4742__auto__.push((arguments[i__4737__auto___50574]));

var G__50575 = (i__4737__auto___50574 + (1));
i__4737__auto___50574 = G__50575;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic = (function (msg_id,p__50483){
var vec__50484 = p__50483;
var info = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50484,(0),null);

if(cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),msg_id)){
} else {
var G__50491_50576 = oops.config.get_config_key(msg_id);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"warn","warn",-436710552),G__50491_50576)){
oops.core.report_warning_dynamically.call(null,oops.messages.runtime_message.cljs$core$IFn$_invoke$arity$2(msg_id,info),info);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"error","error",-978969032),G__50491_50576)){
oops.core.report_error_dynamically.call(null,oops.messages.runtime_message.cljs$core$IFn$_invoke$arity$2(msg_id,info),info);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__50491_50576)){
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__50491_50576)){
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50491_50576)].join('')));

}
}
}
}
}

return null;
}));

(oops.core.report_if_needed_dynamically.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(oops.core.report_if_needed_dynamically.cljs$lang$applyTo = (function (seq50478){
var G__50480 = cljs.core.first(seq50478);
var seq50478__$1 = cljs.core.next(seq50478);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50480,seq50478__$1);
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
):(cljs.core.truth_(goog.isBoolean(obj))?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"boolean",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null));

return false;
})()
):(cljs.core.truth_(goog.isNumber(obj))?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"number",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null));

return false;
})()
):(cljs.core.truth_(goog.isString(obj))?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
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

var and__4115__auto__ = (cljs.core.truth_(check_key_read_QMARK_)?((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,(0))) && (cljs.core.not(goog.object.containsKey(obj,key)))))?oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"missing-object-key","missing-object-key",-1300201731),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null)):true):true);
if(cljs.core.truth_(and__4115__auto__)){
if(cljs.core.truth_(check_key_write_QMARK_)){
var temp__5737__auto__ = oops.helpers.get_property_descriptor(obj,key);
if((temp__5737__auto__ == null)){
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
var descriptor_50499 = temp__5737__auto__;
var temp__5737__auto____$1 = oops.helpers.determine_property_non_writable_reason(descriptor_50499);
if((temp__5737__auto____$1 == null)){
return true;
} else {
var reason_50500 = temp__5737__auto____$1;
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"object-key-not-writable","object-key-not-writable",206336031),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"frozen?","frozen?",613726824),oops.helpers.is_object_frozen_QMARK_(obj),new cljs.core.Keyword(null,"reason","reason",-2070751759),reason_50500,new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null));
}
}
} else {
return true;
}
} else {
return and__4115__auto__;
}
} else {
return null;
}
});
oops.core.validate_fn_call_dynamically = (function oops$core$validate_fn_call_dynamically(fn,mode){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,(1))) && ((fn == null)))){
return true;
} else {
if(cljs.core.truth_(goog.isFunction(fn))){
return true;
} else {
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"expected-function-value","expected-function-value",-1399123630),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"soft?","soft?",-1339668477),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,(1)),new cljs.core.Keyword(null,"fn","fn",-1175266204),fn,new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null));

}
}
});
oops.core.punch_key_dynamically_BANG_ = (function oops$core$punch_key_dynamically_BANG_(obj,key){
var child_factory_50508 = oops.config.get_child_factory();
var child_factory_50508__$1 = (function (){var G__50512 = child_factory_50508;
var G__50512__$1 = (((G__50512 instanceof cljs.core.Keyword))?G__50512.fqn:null);
switch (G__50512__$1) {
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
return child_factory_50508;

}
})();

var child_obj_50507 = (child_factory_50508__$1.cljs$core$IFn$_invoke$arity$2 ? child_factory_50508__$1.cljs$core$IFn$_invoke$arity$2(obj,key) : child_factory_50508__$1.call(null,obj,key));
if(oops.core.validate_object_access_dynamically(obj,(2),key,false,true,true)){
(obj[key] = child_obj_50507);
} else {
}

return child_obj_50507;
});
oops.core.build_path_dynamically = (function oops$core$build_path_dynamically(selector){
if(((typeof selector === 'string') || ((selector instanceof cljs.core.Keyword)))){
var selector_path_50515 = [];
oops.schema.prepare_simple_path_BANG_(selector,selector_path_50515);

return selector_path_50515;
} else {
var selector_path_50516 = [];
oops.schema.prepare_path_BANG_(selector,selector_path_50516);

return selector_path_50516;

}
});
oops.core.check_path_dynamically = (function oops$core$check_path_dynamically(path,op){
var temp__5739__auto__ = oops.schema.check_dynamic_path_BANG_(path,op);
if((temp__5739__auto__ == null)){
return null;
} else {
var issue_50517 = temp__5739__auto__;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(oops.core.report_if_needed_dynamically,issue_50517);
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
if(cljs.core.truth_((((!(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector))))?(function (){var explanation_50526 = cljs.spec.alpha.explain_data(new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector);
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_50526,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null));
})():true))){
var path_50519 = (function (){var path_50518 = oops.core.build_path_dynamically(selector);
oops.core.check_path_dynamically(path_50518,(0));

return path_50518;
})();
var len_50520 = path_50519.length;
var i_50521 = (0);
var obj_50522 = obj;
while(true){
if((i_50521 < len_50520)){
var mode_50523 = (path_50519[i_50521]);
var key_50524 = (path_50519[(i_50521 + (1))]);
var next_obj_50525 = oops.core.get_key_dynamically(obj_50522,key_50524,mode_50523);
var G__50527 = mode_50523;
switch (G__50527) {
case (0):
var G__50585 = (i_50521 + (2));
var G__50586 = next_obj_50525;
i_50521 = G__50585;
obj_50522 = G__50586;
continue;

break;
case (1):
if((!((next_obj_50525 == null)))){
var G__50588 = (i_50521 + (2));
var G__50589 = next_obj_50525;
i_50521 = G__50588;
obj_50522 = G__50589;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_50525 == null)))){
var G__50592 = (i_50521 + (2));
var G__50593 = next_obj_50525;
i_50521 = G__50592;
obj_50522 = G__50593;
continue;
} else {
var G__50594 = (i_50521 + (2));
var G__50595 = oops.core.punch_key_dynamically_BANG_.call(null,obj_50522,key_50524);
i_50521 = G__50594;
obj_50522 = G__50595;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50527)].join('')));

}
} else {
return obj_50522;
}
break;
}
} else {
return null;
}
});
oops.core.get_selector_call_info_dynamically = (function oops$core$get_selector_call_info_dynamically(obj,selector){
if(cljs.core.truth_((((!(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector))))?(function (){var explanation_50553 = cljs.spec.alpha.explain_data(new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector);
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_50553,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null));
})():true))){
var path_50529 = (function (){var path_50528 = oops.core.build_path_dynamically(selector);
oops.core.check_path_dynamically(path_50528,(0));

return path_50528;
})();
var len_50530 = path_50529.length;
if((len_50530 < (4))){
return [obj,(function (){var path_50532 = path_50529;
var len_50533 = path_50532.length;
var i_50534 = (0);
var obj_50535 = obj;
while(true){
if((i_50534 < len_50533)){
var mode_50536 = (path_50532[i_50534]);
var key_50537 = (path_50532[(i_50534 + (1))]);
var next_obj_50538 = oops.core.get_key_dynamically(obj_50535,key_50537,mode_50536);
var G__50554 = mode_50536;
switch (G__50554) {
case (0):
var G__50597 = (i_50534 + (2));
var G__50598 = next_obj_50538;
i_50534 = G__50597;
obj_50535 = G__50598;
continue;

break;
case (1):
if((!((next_obj_50538 == null)))){
var G__50599 = (i_50534 + (2));
var G__50600 = next_obj_50538;
i_50534 = G__50599;
obj_50535 = G__50600;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_50538 == null)))){
var G__50601 = (i_50534 + (2));
var G__50602 = next_obj_50538;
i_50534 = G__50601;
obj_50535 = G__50602;
continue;
} else {
var G__50603 = (i_50534 + (2));
var G__50604 = oops.core.punch_key_dynamically_BANG_.call(null,obj_50535,key_50537);
i_50534 = G__50603;
obj_50535 = G__50604;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50554)].join('')));

}
} else {
return obj_50535;
}
break;
}
})()];
} else {
var target_obj_50531 = (function (){var path_50539 = path_50529.slice((0),(len_50530 - (2)));
var len_50540 = path_50539.length;
var i_50541 = (0);
var obj_50542 = obj;
while(true){
if((i_50541 < len_50540)){
var mode_50543 = (path_50539[i_50541]);
var key_50544 = (path_50539[(i_50541 + (1))]);
var next_obj_50545 = oops.core.get_key_dynamically(obj_50542,key_50544,mode_50543);
var G__50555 = mode_50543;
switch (G__50555) {
case (0):
var G__50608 = (i_50541 + (2));
var G__50609 = next_obj_50545;
i_50541 = G__50608;
obj_50542 = G__50609;
continue;

break;
case (1):
if((!((next_obj_50545 == null)))){
var G__50610 = (i_50541 + (2));
var G__50611 = next_obj_50545;
i_50541 = G__50610;
obj_50542 = G__50611;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_50545 == null)))){
var G__50612 = (i_50541 + (2));
var G__50613 = next_obj_50545;
i_50541 = G__50612;
obj_50542 = G__50613;
continue;
} else {
var G__50614 = (i_50541 + (2));
var G__50615 = oops.core.punch_key_dynamically_BANG_.call(null,obj_50542,key_50544);
i_50541 = G__50614;
obj_50542 = G__50615;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50555)].join('')));

}
} else {
return obj_50542;
}
break;
}
})();
return [target_obj_50531,(function (){var path_50546 = [(path_50529[(len_50530 - (2))]),(path_50529[(len_50530 - (1))])];
var len_50547 = path_50546.length;
var i_50548 = (0);
var obj_50549 = target_obj_50531;
while(true){
if((i_50548 < len_50547)){
var mode_50550 = (path_50546[i_50548]);
var key_50551 = (path_50546[(i_50548 + (1))]);
var next_obj_50552 = oops.core.get_key_dynamically(obj_50549,key_50551,mode_50550);
var G__50556 = mode_50550;
switch (G__50556) {
case (0):
var G__50617 = (i_50548 + (2));
var G__50618 = next_obj_50552;
i_50548 = G__50617;
obj_50549 = G__50618;
continue;

break;
case (1):
if((!((next_obj_50552 == null)))){
var G__50619 = (i_50548 + (2));
var G__50620 = next_obj_50552;
i_50548 = G__50619;
obj_50549 = G__50620;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_50552 == null)))){
var G__50621 = (i_50548 + (2));
var G__50622 = next_obj_50552;
i_50548 = G__50621;
obj_50549 = G__50622;
continue;
} else {
var G__50623 = (i_50548 + (2));
var G__50624 = oops.core.punch_key_dynamically_BANG_.call(null,obj_50549,key_50551);
i_50548 = G__50623;
obj_50549 = G__50624;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50556)].join('')));

}
} else {
return obj_50549;
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
if(cljs.core.truth_((((!(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector))))?(function (){var explanation_50571 = cljs.spec.alpha.explain_data(new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector);
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_50571,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null));
})():true))){
var path_50558 = (function (){var path_50557 = oops.core.build_path_dynamically(selector);
oops.core.check_path_dynamically(path_50557,(1));

return path_50557;
})();
var len_50561 = path_50558.length;
var parent_obj_path_50562 = path_50558.slice((0),(len_50561 - (2)));
var key_50559 = (path_50558[(len_50561 - (1))]);
var mode_50560 = (path_50558[(len_50561 - (2))]);
var parent_obj_50563 = (function (){var path_50564 = parent_obj_path_50562;
var len_50565 = path_50564.length;
var i_50566 = (0);
var obj_50567 = obj;
while(true){
if((i_50566 < len_50565)){
var mode_50568 = (path_50564[i_50566]);
var key_50569 = (path_50564[(i_50566 + (1))]);
var next_obj_50570 = oops.core.get_key_dynamically(obj_50567,key_50569,mode_50568);
var G__50572 = mode_50568;
switch (G__50572) {
case (0):
var G__50626 = (i_50566 + (2));
var G__50627 = next_obj_50570;
i_50566 = G__50626;
obj_50567 = G__50627;
continue;

break;
case (1):
if((!((next_obj_50570 == null)))){
var G__50628 = (i_50566 + (2));
var G__50629 = next_obj_50570;
i_50566 = G__50628;
obj_50567 = G__50629;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_50570 == null)))){
var G__50630 = (i_50566 + (2));
var G__50631 = next_obj_50570;
i_50566 = G__50630;
obj_50567 = G__50631;
continue;
} else {
var G__50632 = (i_50566 + (2));
var G__50633 = oops.core.punch_key_dynamically_BANG_.call(null,obj_50567,key_50569);
i_50566 = G__50632;
obj_50567 = G__50633;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50572)].join('')));

}
} else {
return obj_50567;
}
break;
}
})();
return oops.core.set_key_dynamically(parent_obj_50563,key_50559,val,mode_50560);
} else {
return null;
}
});

//# sourceMappingURL=oops.core.js.map
