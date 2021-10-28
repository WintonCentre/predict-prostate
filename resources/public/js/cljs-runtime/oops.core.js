goog.provide('oops.core');
oops.core.report_error_dynamically = (function oops$core$report_error_dynamically(msg,data){
if(oops.state.was_error_reported_QMARK_()){
return null;
} else {
oops.state.mark_error_reported_BANG_();

var G__44856 = oops.config.get_error_reporting();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"throw","throw",-1044625833),G__44856)){
throw oops.state.prepare_error_from_call_site(msg,oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"console","console",1228072057),G__44856)){
var G__44860 = (console["error"]);
var G__44861 = msg;
var G__44862 = oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data);
var fexpr__44859 = oops.state.get_console_reporter();
return (fexpr__44859.cljs$core$IFn$_invoke$arity$3 ? fexpr__44859.cljs$core$IFn$_invoke$arity$3(G__44860,G__44861,G__44862) : fexpr__44859.call(null,G__44860,G__44861,G__44862));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__44856)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44856)].join('')));

}
}
}
}
});
oops.core.report_warning_dynamically = (function oops$core$report_warning_dynamically(msg,data){
var G__44866 = oops.config.get_warning_reporting();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"throw","throw",-1044625833),G__44866)){
throw oops.state.prepare_error_from_call_site(msg,oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"console","console",1228072057),G__44866)){
var G__44869 = (console["warn"]);
var G__44870 = msg;
var G__44871 = oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data);
var fexpr__44868 = oops.state.get_console_reporter();
return (fexpr__44868.cljs$core$IFn$_invoke$arity$3 ? fexpr__44868.cljs$core$IFn$_invoke$arity$3(G__44869,G__44870,G__44871) : fexpr__44868.call(null,G__44869,G__44870,G__44871));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__44866)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44866)].join('')));

}
}
}
});
oops.core.report_if_needed_dynamically = (function oops$core$report_if_needed_dynamically(var_args){
var args__4742__auto__ = [];
var len__4736__auto___45003 = arguments.length;
var i__4737__auto___45004 = (0);
while(true){
if((i__4737__auto___45004 < len__4736__auto___45003)){
args__4742__auto__.push((arguments[i__4737__auto___45004]));

var G__45005 = (i__4737__auto___45004 + (1));
i__4737__auto___45004 = G__45005;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic = (function (msg_id,p__44877){
var vec__44879 = p__44877;
var info = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44879,(0),null);

if(cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),msg_id)){
} else {
var G__44882_45007 = oops.config.get_config_key(msg_id);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"warn","warn",-436710552),G__44882_45007)){
oops.core.report_warning_dynamically.call(null,oops.messages.runtime_message.cljs$core$IFn$_invoke$arity$2(msg_id,info),info);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"error","error",-978969032),G__44882_45007)){
oops.core.report_error_dynamically.call(null,oops.messages.runtime_message.cljs$core$IFn$_invoke$arity$2(msg_id,info),info);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__44882_45007)){
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__44882_45007)){
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44882_45007)].join('')));

}
}
}
}
}

return null;
}));

(oops.core.report_if_needed_dynamically.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(oops.core.report_if_needed_dynamically.cljs$lang$applyTo = (function (seq44872){
var G__44873 = cljs.core.first(seq44872);
var seq44872__$1 = cljs.core.next(seq44872);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44873,seq44872__$1);
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
var descriptor_44898 = temp__5737__auto__;
var temp__5737__auto____$1 = oops.helpers.determine_property_non_writable_reason(descriptor_44898);
if((temp__5737__auto____$1 == null)){
return true;
} else {
var reason_44899 = temp__5737__auto____$1;
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"object-key-not-writable","object-key-not-writable",206336031),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"frozen?","frozen?",613726824),oops.helpers.is_object_frozen_QMARK_(obj),new cljs.core.Keyword(null,"reason","reason",-2070751759),reason_44899,new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null));
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
var child_factory_44925 = oops.config.get_child_factory();
var child_factory_44925__$1 = (function (){var G__44926 = child_factory_44925;
var G__44926__$1 = (((G__44926 instanceof cljs.core.Keyword))?G__44926.fqn:null);
switch (G__44926__$1) {
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
return child_factory_44925;

}
})();

var child_obj_44924 = (child_factory_44925__$1.cljs$core$IFn$_invoke$arity$2 ? child_factory_44925__$1.cljs$core$IFn$_invoke$arity$2(obj,key) : child_factory_44925__$1.call(null,obj,key));
if(oops.core.validate_object_access_dynamically(obj,(2),key,false,true,true)){
(obj[key] = child_obj_44924);
} else {
}

return child_obj_44924;
});
oops.core.build_path_dynamically = (function oops$core$build_path_dynamically(selector){
if(((typeof selector === 'string') || ((selector instanceof cljs.core.Keyword)))){
var selector_path_44931 = [];
oops.schema.prepare_simple_path_BANG_(selector,selector_path_44931);

return selector_path_44931;
} else {
var selector_path_44932 = [];
oops.schema.prepare_path_BANG_(selector,selector_path_44932);

return selector_path_44932;

}
});
oops.core.check_path_dynamically = (function oops$core$check_path_dynamically(path,op){
var temp__5739__auto__ = oops.schema.check_dynamic_path_BANG_(path,op);
if((temp__5739__auto__ == null)){
return null;
} else {
var issue_44933 = temp__5739__auto__;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(oops.core.report_if_needed_dynamically,issue_44933);
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
if(cljs.core.truth_((((!(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector))))?(function (){var explanation_44947 = cljs.spec.alpha.explain_data(new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector);
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_44947,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null));
})():true))){
var path_44939 = (function (){var path_44937 = oops.core.build_path_dynamically(selector);
oops.core.check_path_dynamically(path_44937,(0));

return path_44937;
})();
var len_44940 = path_44939.length;
var i_44941 = (0);
var obj_44942 = obj;
while(true){
if((i_44941 < len_44940)){
var mode_44943 = (path_44939[i_44941]);
var key_44944 = (path_44939[(i_44941 + (1))]);
var next_obj_44945 = oops.core.get_key_dynamically(obj_44942,key_44944,mode_44943);
var G__44948 = mode_44943;
switch (G__44948) {
case (0):
var G__45015 = (i_44941 + (2));
var G__45016 = next_obj_44945;
i_44941 = G__45015;
obj_44942 = G__45016;
continue;

break;
case (1):
if((!((next_obj_44945 == null)))){
var G__45017 = (i_44941 + (2));
var G__45018 = next_obj_44945;
i_44941 = G__45017;
obj_44942 = G__45018;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_44945 == null)))){
var G__45019 = (i_44941 + (2));
var G__45020 = next_obj_44945;
i_44941 = G__45019;
obj_44942 = G__45020;
continue;
} else {
var G__45021 = (i_44941 + (2));
var G__45022 = oops.core.punch_key_dynamically_BANG_.call(null,obj_44942,key_44944);
i_44941 = G__45021;
obj_44942 = G__45022;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44948)].join('')));

}
} else {
return obj_44942;
}
break;
}
} else {
return null;
}
});
oops.core.get_selector_call_info_dynamically = (function oops$core$get_selector_call_info_dynamically(obj,selector){
if(cljs.core.truth_((((!(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector))))?(function (){var explanation_44974 = cljs.spec.alpha.explain_data(new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector);
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_44974,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null));
})():true))){
var path_44950 = (function (){var path_44949 = oops.core.build_path_dynamically(selector);
oops.core.check_path_dynamically(path_44949,(0));

return path_44949;
})();
var len_44951 = path_44950.length;
if((len_44951 < (4))){
return [obj,(function (){var path_44953 = path_44950;
var len_44954 = path_44953.length;
var i_44955 = (0);
var obj_44956 = obj;
while(true){
if((i_44955 < len_44954)){
var mode_44957 = (path_44953[i_44955]);
var key_44958 = (path_44953[(i_44955 + (1))]);
var next_obj_44959 = oops.core.get_key_dynamically(obj_44956,key_44958,mode_44957);
var G__44976 = mode_44957;
switch (G__44976) {
case (0):
var G__45028 = (i_44955 + (2));
var G__45029 = next_obj_44959;
i_44955 = G__45028;
obj_44956 = G__45029;
continue;

break;
case (1):
if((!((next_obj_44959 == null)))){
var G__45030 = (i_44955 + (2));
var G__45031 = next_obj_44959;
i_44955 = G__45030;
obj_44956 = G__45031;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_44959 == null)))){
var G__45032 = (i_44955 + (2));
var G__45033 = next_obj_44959;
i_44955 = G__45032;
obj_44956 = G__45033;
continue;
} else {
var G__45034 = (i_44955 + (2));
var G__45035 = oops.core.punch_key_dynamically_BANG_.call(null,obj_44956,key_44958);
i_44955 = G__45034;
obj_44956 = G__45035;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44976)].join('')));

}
} else {
return obj_44956;
}
break;
}
})()];
} else {
var target_obj_44952 = (function (){var path_44960 = path_44950.slice((0),(len_44951 - (2)));
var len_44961 = path_44960.length;
var i_44962 = (0);
var obj_44963 = obj;
while(true){
if((i_44962 < len_44961)){
var mode_44964 = (path_44960[i_44962]);
var key_44965 = (path_44960[(i_44962 + (1))]);
var next_obj_44966 = oops.core.get_key_dynamically(obj_44963,key_44965,mode_44964);
var G__44977 = mode_44964;
switch (G__44977) {
case (0):
var G__45041 = (i_44962 + (2));
var G__45042 = next_obj_44966;
i_44962 = G__45041;
obj_44963 = G__45042;
continue;

break;
case (1):
if((!((next_obj_44966 == null)))){
var G__45043 = (i_44962 + (2));
var G__45044 = next_obj_44966;
i_44962 = G__45043;
obj_44963 = G__45044;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_44966 == null)))){
var G__45045 = (i_44962 + (2));
var G__45046 = next_obj_44966;
i_44962 = G__45045;
obj_44963 = G__45046;
continue;
} else {
var G__45047 = (i_44962 + (2));
var G__45048 = oops.core.punch_key_dynamically_BANG_.call(null,obj_44963,key_44965);
i_44962 = G__45047;
obj_44963 = G__45048;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44977)].join('')));

}
} else {
return obj_44963;
}
break;
}
})();
return [target_obj_44952,(function (){var path_44967 = [(path_44950[(len_44951 - (2))]),(path_44950[(len_44951 - (1))])];
var len_44968 = path_44967.length;
var i_44969 = (0);
var obj_44970 = target_obj_44952;
while(true){
if((i_44969 < len_44968)){
var mode_44971 = (path_44967[i_44969]);
var key_44972 = (path_44967[(i_44969 + (1))]);
var next_obj_44973 = oops.core.get_key_dynamically(obj_44970,key_44972,mode_44971);
var G__44978 = mode_44971;
switch (G__44978) {
case (0):
var G__45053 = (i_44969 + (2));
var G__45054 = next_obj_44973;
i_44969 = G__45053;
obj_44970 = G__45054;
continue;

break;
case (1):
if((!((next_obj_44973 == null)))){
var G__45057 = (i_44969 + (2));
var G__45058 = next_obj_44973;
i_44969 = G__45057;
obj_44970 = G__45058;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_44973 == null)))){
var G__45059 = (i_44969 + (2));
var G__45060 = next_obj_44973;
i_44969 = G__45059;
obj_44970 = G__45060;
continue;
} else {
var G__45061 = (i_44969 + (2));
var G__45062 = oops.core.punch_key_dynamically_BANG_.call(null,obj_44970,key_44972);
i_44969 = G__45061;
obj_44970 = G__45062;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44978)].join('')));

}
} else {
return obj_44970;
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
if(cljs.core.truth_((((!(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector))))?(function (){var explanation_44994 = cljs.spec.alpha.explain_data(new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector);
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_44994,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null));
})():true))){
var path_44981 = (function (){var path_44980 = oops.core.build_path_dynamically(selector);
oops.core.check_path_dynamically(path_44980,(1));

return path_44980;
})();
var len_44984 = path_44981.length;
var parent_obj_path_44985 = path_44981.slice((0),(len_44984 - (2)));
var key_44982 = (path_44981[(len_44984 - (1))]);
var mode_44983 = (path_44981[(len_44984 - (2))]);
var parent_obj_44986 = (function (){var path_44987 = parent_obj_path_44985;
var len_44988 = path_44987.length;
var i_44989 = (0);
var obj_44990 = obj;
while(true){
if((i_44989 < len_44988)){
var mode_44991 = (path_44987[i_44989]);
var key_44992 = (path_44987[(i_44989 + (1))]);
var next_obj_44993 = oops.core.get_key_dynamically(obj_44990,key_44992,mode_44991);
var G__44995 = mode_44991;
switch (G__44995) {
case (0):
var G__45069 = (i_44989 + (2));
var G__45070 = next_obj_44993;
i_44989 = G__45069;
obj_44990 = G__45070;
continue;

break;
case (1):
if((!((next_obj_44993 == null)))){
var G__45071 = (i_44989 + (2));
var G__45072 = next_obj_44993;
i_44989 = G__45071;
obj_44990 = G__45072;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_44993 == null)))){
var G__45073 = (i_44989 + (2));
var G__45074 = next_obj_44993;
i_44989 = G__45073;
obj_44990 = G__45074;
continue;
} else {
var G__45075 = (i_44989 + (2));
var G__45076 = oops.core.punch_key_dynamically_BANG_.call(null,obj_44990,key_44992);
i_44989 = G__45075;
obj_44990 = G__45076;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44995)].join('')));

}
} else {
return obj_44990;
}
break;
}
})();
return oops.core.set_key_dynamically(parent_obj_44986,key_44982,val,mode_44983);
} else {
return null;
}
});

//# sourceMappingURL=oops.core.js.map
