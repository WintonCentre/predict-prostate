goog.provide('oops.core');
oops.core.report_error_dynamically = (function oops$core$report_error_dynamically(msg,data){
if(oops.state.was_error_reported_QMARK_()){
return null;
} else {
oops.state.mark_error_reported_BANG_();

var G__44865 = oops.config.get_error_reporting();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"throw","throw",-1044625833),G__44865)){
throw oops.state.prepare_error_from_call_site(msg,oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"console","console",1228072057),G__44865)){
var G__44869 = (console["error"]);
var G__44870 = msg;
var G__44871 = oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data);
var fexpr__44868 = oops.state.get_console_reporter();
return (fexpr__44868.cljs$core$IFn$_invoke$arity$3 ? fexpr__44868.cljs$core$IFn$_invoke$arity$3(G__44869,G__44870,G__44871) : fexpr__44868.call(null,G__44869,G__44870,G__44871));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__44865)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44865)].join('')));

}
}
}
}
});
oops.core.report_warning_dynamically = (function oops$core$report_warning_dynamically(msg,data){
var G__44875 = oops.config.get_warning_reporting();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"throw","throw",-1044625833),G__44875)){
throw oops.state.prepare_error_from_call_site(msg,oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"console","console",1228072057),G__44875)){
var G__44877 = (console["warn"]);
var G__44878 = msg;
var G__44879 = oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data);
var fexpr__44876 = oops.state.get_console_reporter();
return (fexpr__44876.cljs$core$IFn$_invoke$arity$3 ? fexpr__44876.cljs$core$IFn$_invoke$arity$3(G__44877,G__44878,G__44879) : fexpr__44876.call(null,G__44877,G__44878,G__44879));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__44875)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44875)].join('')));

}
}
}
});
oops.core.report_if_needed_dynamically = (function oops$core$report_if_needed_dynamically(var_args){
var args__4742__auto__ = [];
var len__4736__auto___45011 = arguments.length;
var i__4737__auto___45013 = (0);
while(true){
if((i__4737__auto___45013 < len__4736__auto___45011)){
args__4742__auto__.push((arguments[i__4737__auto___45013]));

var G__45014 = (i__4737__auto___45013 + (1));
i__4737__auto___45013 = G__45014;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic = (function (msg_id,p__44883){
var vec__44884 = p__44883;
var info = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44884,(0),null);

if(cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),msg_id)){
} else {
var G__44890_45015 = oops.config.get_config_key(msg_id);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"warn","warn",-436710552),G__44890_45015)){
oops.core.report_warning_dynamically.call(null,oops.messages.runtime_message.cljs$core$IFn$_invoke$arity$2(msg_id,info),info);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"error","error",-978969032),G__44890_45015)){
oops.core.report_error_dynamically.call(null,oops.messages.runtime_message.cljs$core$IFn$_invoke$arity$2(msg_id,info),info);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__44890_45015)){
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__44890_45015)){
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44890_45015)].join('')));

}
}
}
}
}

return null;
}));

(oops.core.report_if_needed_dynamically.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(oops.core.report_if_needed_dynamically.cljs$lang$applyTo = (function (seq44881){
var G__44882 = cljs.core.first(seq44881);
var seq44881__$1 = cljs.core.next(seq44881);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44882,seq44881__$1);
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
var descriptor_44897 = temp__5737__auto__;
var temp__5737__auto____$1 = oops.helpers.determine_property_non_writable_reason(descriptor_44897);
if((temp__5737__auto____$1 == null)){
return true;
} else {
var reason_44898 = temp__5737__auto____$1;
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"object-key-not-writable","object-key-not-writable",206336031),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"frozen?","frozen?",613726824),oops.helpers.is_object_frozen_QMARK_(obj),new cljs.core.Keyword(null,"reason","reason",-2070751759),reason_44898,new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null));
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
var child_factory_44911 = oops.config.get_child_factory();
var child_factory_44911__$1 = (function (){var G__44918 = child_factory_44911;
var G__44918__$1 = (((G__44918 instanceof cljs.core.Keyword))?G__44918.fqn:null);
switch (G__44918__$1) {
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
return child_factory_44911;

}
})();

var child_obj_44910 = (child_factory_44911__$1.cljs$core$IFn$_invoke$arity$2 ? child_factory_44911__$1.cljs$core$IFn$_invoke$arity$2(obj,key) : child_factory_44911__$1.call(null,obj,key));
if(oops.core.validate_object_access_dynamically(obj,(2),key,false,true,true)){
(obj[key] = child_obj_44910);
} else {
}

return child_obj_44910;
});
oops.core.build_path_dynamically = (function oops$core$build_path_dynamically(selector){
if(((typeof selector === 'string') || ((selector instanceof cljs.core.Keyword)))){
var selector_path_44921 = [];
oops.schema.prepare_simple_path_BANG_(selector,selector_path_44921);

return selector_path_44921;
} else {
var selector_path_44922 = [];
oops.schema.prepare_path_BANG_(selector,selector_path_44922);

return selector_path_44922;

}
});
oops.core.check_path_dynamically = (function oops$core$check_path_dynamically(path,op){
var temp__5739__auto__ = oops.schema.check_dynamic_path_BANG_(path,op);
if((temp__5739__auto__ == null)){
return null;
} else {
var issue_44923 = temp__5739__auto__;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(oops.core.report_if_needed_dynamically,issue_44923);
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
if(cljs.core.truth_((((!(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector))))?(function (){var explanation_44951 = cljs.spec.alpha.explain_data(new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector);
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_44951,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null));
})():true))){
var path_44944 = (function (){var path_44942 = oops.core.build_path_dynamically(selector);
oops.core.check_path_dynamically(path_44942,(0));

return path_44942;
})();
var len_44945 = path_44944.length;
var i_44946 = (0);
var obj_44947 = obj;
while(true){
if((i_44946 < len_44945)){
var mode_44948 = (path_44944[i_44946]);
var key_44949 = (path_44944[(i_44946 + (1))]);
var next_obj_44950 = oops.core.get_key_dynamically(obj_44947,key_44949,mode_44948);
var G__44952 = mode_44948;
switch (G__44952) {
case (0):
var G__45019 = (i_44946 + (2));
var G__45020 = next_obj_44950;
i_44946 = G__45019;
obj_44947 = G__45020;
continue;

break;
case (1):
if((!((next_obj_44950 == null)))){
var G__45021 = (i_44946 + (2));
var G__45022 = next_obj_44950;
i_44946 = G__45021;
obj_44947 = G__45022;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_44950 == null)))){
var G__45023 = (i_44946 + (2));
var G__45024 = next_obj_44950;
i_44946 = G__45023;
obj_44947 = G__45024;
continue;
} else {
var G__45025 = (i_44946 + (2));
var G__45026 = oops.core.punch_key_dynamically_BANG_.call(null,obj_44947,key_44949);
i_44946 = G__45025;
obj_44947 = G__45026;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44952)].join('')));

}
} else {
return obj_44947;
}
break;
}
} else {
return null;
}
});
oops.core.get_selector_call_info_dynamically = (function oops$core$get_selector_call_info_dynamically(obj,selector){
if(cljs.core.truth_((((!(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector))))?(function (){var explanation_44978 = cljs.spec.alpha.explain_data(new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector);
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_44978,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null));
})():true))){
var path_44954 = (function (){var path_44953 = oops.core.build_path_dynamically(selector);
oops.core.check_path_dynamically(path_44953,(0));

return path_44953;
})();
var len_44955 = path_44954.length;
if((len_44955 < (4))){
return [obj,(function (){var path_44957 = path_44954;
var len_44958 = path_44957.length;
var i_44959 = (0);
var obj_44960 = obj;
while(true){
if((i_44959 < len_44958)){
var mode_44961 = (path_44957[i_44959]);
var key_44962 = (path_44957[(i_44959 + (1))]);
var next_obj_44963 = oops.core.get_key_dynamically(obj_44960,key_44962,mode_44961);
var G__44979 = mode_44961;
switch (G__44979) {
case (0):
var G__45030 = (i_44959 + (2));
var G__45031 = next_obj_44963;
i_44959 = G__45030;
obj_44960 = G__45031;
continue;

break;
case (1):
if((!((next_obj_44963 == null)))){
var G__45032 = (i_44959 + (2));
var G__45033 = next_obj_44963;
i_44959 = G__45032;
obj_44960 = G__45033;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_44963 == null)))){
var G__45034 = (i_44959 + (2));
var G__45035 = next_obj_44963;
i_44959 = G__45034;
obj_44960 = G__45035;
continue;
} else {
var G__45036 = (i_44959 + (2));
var G__45037 = oops.core.punch_key_dynamically_BANG_.call(null,obj_44960,key_44962);
i_44959 = G__45036;
obj_44960 = G__45037;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44979)].join('')));

}
} else {
return obj_44960;
}
break;
}
})()];
} else {
var target_obj_44956 = (function (){var path_44964 = path_44954.slice((0),(len_44955 - (2)));
var len_44965 = path_44964.length;
var i_44966 = (0);
var obj_44967 = obj;
while(true){
if((i_44966 < len_44965)){
var mode_44968 = (path_44964[i_44966]);
var key_44969 = (path_44964[(i_44966 + (1))]);
var next_obj_44970 = oops.core.get_key_dynamically(obj_44967,key_44969,mode_44968);
var G__44980 = mode_44968;
switch (G__44980) {
case (0):
var G__45040 = (i_44966 + (2));
var G__45041 = next_obj_44970;
i_44966 = G__45040;
obj_44967 = G__45041;
continue;

break;
case (1):
if((!((next_obj_44970 == null)))){
var G__45042 = (i_44966 + (2));
var G__45043 = next_obj_44970;
i_44966 = G__45042;
obj_44967 = G__45043;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_44970 == null)))){
var G__45044 = (i_44966 + (2));
var G__45045 = next_obj_44970;
i_44966 = G__45044;
obj_44967 = G__45045;
continue;
} else {
var G__45046 = (i_44966 + (2));
var G__45047 = oops.core.punch_key_dynamically_BANG_.call(null,obj_44967,key_44969);
i_44966 = G__45046;
obj_44967 = G__45047;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44980)].join('')));

}
} else {
return obj_44967;
}
break;
}
})();
return [target_obj_44956,(function (){var path_44971 = [(path_44954[(len_44955 - (2))]),(path_44954[(len_44955 - (1))])];
var len_44972 = path_44971.length;
var i_44973 = (0);
var obj_44974 = target_obj_44956;
while(true){
if((i_44973 < len_44972)){
var mode_44975 = (path_44971[i_44973]);
var key_44976 = (path_44971[(i_44973 + (1))]);
var next_obj_44977 = oops.core.get_key_dynamically(obj_44974,key_44976,mode_44975);
var G__44981 = mode_44975;
switch (G__44981) {
case (0):
var G__45050 = (i_44973 + (2));
var G__45051 = next_obj_44977;
i_44973 = G__45050;
obj_44974 = G__45051;
continue;

break;
case (1):
if((!((next_obj_44977 == null)))){
var G__45052 = (i_44973 + (2));
var G__45053 = next_obj_44977;
i_44973 = G__45052;
obj_44974 = G__45053;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_44977 == null)))){
var G__45054 = (i_44973 + (2));
var G__45055 = next_obj_44977;
i_44973 = G__45054;
obj_44974 = G__45055;
continue;
} else {
var G__45056 = (i_44973 + (2));
var G__45057 = oops.core.punch_key_dynamically_BANG_.call(null,obj_44974,key_44976);
i_44973 = G__45056;
obj_44974 = G__45057;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44981)].join('')));

}
} else {
return obj_44974;
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
if(cljs.core.truth_((((!(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector))))?(function (){var explanation_44996 = cljs.spec.alpha.explain_data(new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector);
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_44996,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null));
})():true))){
var path_44983 = (function (){var path_44982 = oops.core.build_path_dynamically(selector);
oops.core.check_path_dynamically(path_44982,(1));

return path_44982;
})();
var len_44986 = path_44983.length;
var parent_obj_path_44987 = path_44983.slice((0),(len_44986 - (2)));
var key_44984 = (path_44983[(len_44986 - (1))]);
var mode_44985 = (path_44983[(len_44986 - (2))]);
var parent_obj_44988 = (function (){var path_44989 = parent_obj_path_44987;
var len_44990 = path_44989.length;
var i_44991 = (0);
var obj_44992 = obj;
while(true){
if((i_44991 < len_44990)){
var mode_44993 = (path_44989[i_44991]);
var key_44994 = (path_44989[(i_44991 + (1))]);
var next_obj_44995 = oops.core.get_key_dynamically(obj_44992,key_44994,mode_44993);
var G__44999 = mode_44993;
switch (G__44999) {
case (0):
var G__45059 = (i_44991 + (2));
var G__45060 = next_obj_44995;
i_44991 = G__45059;
obj_44992 = G__45060;
continue;

break;
case (1):
if((!((next_obj_44995 == null)))){
var G__45061 = (i_44991 + (2));
var G__45062 = next_obj_44995;
i_44991 = G__45061;
obj_44992 = G__45062;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_44995 == null)))){
var G__45063 = (i_44991 + (2));
var G__45064 = next_obj_44995;
i_44991 = G__45063;
obj_44992 = G__45064;
continue;
} else {
var G__45065 = (i_44991 + (2));
var G__45066 = oops.core.punch_key_dynamically_BANG_.call(null,obj_44992,key_44994);
i_44991 = G__45065;
obj_44992 = G__45066;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44999)].join('')));

}
} else {
return obj_44992;
}
break;
}
})();
return oops.core.set_key_dynamically(parent_obj_44988,key_44984,val,mode_44985);
} else {
return null;
}
});

//# sourceMappingURL=oops.core.js.map
