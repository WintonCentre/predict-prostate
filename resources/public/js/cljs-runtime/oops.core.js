goog.provide('oops.core');
oops.core.report_error_dynamically = (function oops$core$report_error_dynamically(msg,data){
if(oops.state.was_error_reported_QMARK_()){
return null;
} else {
oops.state.mark_error_reported_BANG_();

var G__49190 = oops.config.get_error_reporting();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"throw","throw",-1044625833),G__49190)){
throw oops.state.prepare_error_from_call_site(msg,oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"console","console",1228072057),G__49190)){
var G__49192 = (console["error"]);
var G__49193 = msg;
var G__49194 = oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data);
var fexpr__49191 = oops.state.get_console_reporter();
return (fexpr__49191.cljs$core$IFn$_invoke$arity$3 ? fexpr__49191.cljs$core$IFn$_invoke$arity$3(G__49192,G__49193,G__49194) : fexpr__49191.call(null,G__49192,G__49193,G__49194));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__49190)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49190)].join('')));

}
}
}
}
});
oops.core.report_warning_dynamically = (function oops$core$report_warning_dynamically(msg,data){
var G__49197 = oops.config.get_warning_reporting();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"throw","throw",-1044625833),G__49197)){
throw oops.state.prepare_error_from_call_site(msg,oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"console","console",1228072057),G__49197)){
var G__49199 = (console["warn"]);
var G__49200 = msg;
var G__49201 = oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data);
var fexpr__49198 = oops.state.get_console_reporter();
return (fexpr__49198.cljs$core$IFn$_invoke$arity$3 ? fexpr__49198.cljs$core$IFn$_invoke$arity$3(G__49199,G__49200,G__49201) : fexpr__49198.call(null,G__49199,G__49200,G__49201));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__49197)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49197)].join('')));

}
}
}
});
oops.core.report_if_needed_dynamically = (function oops$core$report_if_needed_dynamically(var_args){
var args__4824__auto__ = [];
var len__4818__auto___49294 = arguments.length;
var i__4819__auto___49295 = (0);
while(true){
if((i__4819__auto___49295 < len__4818__auto___49294)){
args__4824__auto__.push((arguments[i__4819__auto___49295]));

var G__49296 = (i__4819__auto___49295 + (1));
i__4819__auto___49295 = G__49296;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic = (function (msg_id,p__49205){
var vec__49207 = p__49205;
var info = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49207,(0),null);

if(cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),msg_id)){
} else {
var G__49213_49297 = oops.config.get_config_key(msg_id);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"warn","warn",-436710552),G__49213_49297)){
oops.core.report_warning_dynamically.call(null,oops.messages.runtime_message.cljs$core$IFn$_invoke$arity$2(msg_id,info),info);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"error","error",-978969032),G__49213_49297)){
oops.core.report_error_dynamically.call(null,oops.messages.runtime_message.cljs$core$IFn$_invoke$arity$2(msg_id,info),info);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__49213_49297)){
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__49213_49297)){
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49213_49297)].join('')));

}
}
}
}
}

return null;
}));

(oops.core.report_if_needed_dynamically.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(oops.core.report_if_needed_dynamically.cljs$lang$applyTo = (function (seq49202){
var G__49203 = cljs.core.first(seq49202);
var seq49202__$1 = cljs.core.next(seq49202);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49203,seq49202__$1);
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
var descriptor_49220 = temp__5755__auto__;
var temp__5755__auto____$1 = oops.helpers.determine_property_non_writable_reason(descriptor_49220);
if((temp__5755__auto____$1 == null)){
return true;
} else {
var reason_49221 = temp__5755__auto____$1;
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"object-key-not-writable","object-key-not-writable",206336031),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"frozen?","frozen?",613726824),oops.helpers.is_object_frozen_QMARK_(obj),new cljs.core.Keyword(null,"reason","reason",-2070751759),reason_49221,new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null));
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
var child_factory_49231 = oops.config.get_child_factory();
var child_factory_49231__$1 = (function (){var G__49232 = child_factory_49231;
var G__49232__$1 = (((G__49232 instanceof cljs.core.Keyword))?G__49232.fqn:null);
switch (G__49232__$1) {
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
return child_factory_49231;

}
})();

var child_obj_49230 = (child_factory_49231__$1.cljs$core$IFn$_invoke$arity$2 ? child_factory_49231__$1.cljs$core$IFn$_invoke$arity$2(obj,key) : child_factory_49231__$1.call(null,obj,key));
if(oops.core.validate_object_access_dynamically(obj,(2),key,false,true,true)){
(obj[key] = child_obj_49230);
} else {
}

return child_obj_49230;
});
oops.core.build_path_dynamically = (function oops$core$build_path_dynamically(selector){
if(((typeof selector === 'string') || ((selector instanceof cljs.core.Keyword)))){
var selector_path_49235 = [];
oops.schema.prepare_simple_path_BANG_(selector,selector_path_49235);

return selector_path_49235;
} else {
var selector_path_49236 = [];
oops.schema.prepare_path_BANG_(selector,selector_path_49236);

return selector_path_49236;

}
});
oops.core.check_path_dynamically = (function oops$core$check_path_dynamically(path,op){
var temp__5757__auto__ = oops.schema.check_dynamic_path_BANG_(path,op);
if((temp__5757__auto__ == null)){
return null;
} else {
var issue_49237 = temp__5757__auto__;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(oops.core.report_if_needed_dynamically,issue_49237);
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
if(cljs.core.truth_((((!(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector))))?(function (){var explanation_49246 = cljs.spec.alpha.explain_data(new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector);
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_49246,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null));
})():true))){
var path_49239 = (function (){var path_49238 = oops.core.build_path_dynamically(selector);
oops.core.check_path_dynamically(path_49238,(0));

return path_49238;
})();
var len_49240 = path_49239.length;
var i_49241 = (0);
var obj_49242 = obj;
while(true){
if((i_49241 < len_49240)){
var mode_49243 = (path_49239[i_49241]);
var key_49244 = (path_49239[(i_49241 + (1))]);
var next_obj_49245 = oops.core.get_key_dynamically(obj_49242,key_49244,mode_49243);
var G__49247 = mode_49243;
switch (G__49247) {
case (0):
var G__49301 = (i_49241 + (2));
var G__49302 = next_obj_49245;
i_49241 = G__49301;
obj_49242 = G__49302;
continue;

break;
case (1):
if((!((next_obj_49245 == null)))){
var G__49303 = (i_49241 + (2));
var G__49304 = next_obj_49245;
i_49241 = G__49303;
obj_49242 = G__49304;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_49245 == null)))){
var G__49305 = (i_49241 + (2));
var G__49306 = next_obj_49245;
i_49241 = G__49305;
obj_49242 = G__49306;
continue;
} else {
var G__49307 = (i_49241 + (2));
var G__49308 = oops.core.punch_key_dynamically_BANG_.call(null,obj_49242,key_49244);
i_49241 = G__49307;
obj_49242 = G__49308;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49247)].join('')));

}
} else {
return obj_49242;
}
break;
}
} else {
return null;
}
});
oops.core.get_selector_call_info_dynamically = (function oops$core$get_selector_call_info_dynamically(obj,selector){
if(cljs.core.truth_((((!(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector))))?(function (){var explanation_49273 = cljs.spec.alpha.explain_data(new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector);
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_49273,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null));
})():true))){
var path_49249 = (function (){var path_49248 = oops.core.build_path_dynamically(selector);
oops.core.check_path_dynamically(path_49248,(0));

return path_49248;
})();
var len_49250 = path_49249.length;
if((len_49250 < (4))){
return [obj,(function (){var path_49252 = path_49249;
var len_49253 = path_49252.length;
var i_49254 = (0);
var obj_49255 = obj;
while(true){
if((i_49254 < len_49253)){
var mode_49256 = (path_49252[i_49254]);
var key_49257 = (path_49252[(i_49254 + (1))]);
var next_obj_49258 = oops.core.get_key_dynamically(obj_49255,key_49257,mode_49256);
var G__49274 = mode_49256;
switch (G__49274) {
case (0):
var G__49312 = (i_49254 + (2));
var G__49313 = next_obj_49258;
i_49254 = G__49312;
obj_49255 = G__49313;
continue;

break;
case (1):
if((!((next_obj_49258 == null)))){
var G__49314 = (i_49254 + (2));
var G__49315 = next_obj_49258;
i_49254 = G__49314;
obj_49255 = G__49315;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_49258 == null)))){
var G__49316 = (i_49254 + (2));
var G__49317 = next_obj_49258;
i_49254 = G__49316;
obj_49255 = G__49317;
continue;
} else {
var G__49318 = (i_49254 + (2));
var G__49319 = oops.core.punch_key_dynamically_BANG_.call(null,obj_49255,key_49257);
i_49254 = G__49318;
obj_49255 = G__49319;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49274)].join('')));

}
} else {
return obj_49255;
}
break;
}
})()];
} else {
var target_obj_49251 = (function (){var path_49259 = path_49249.slice((0),(len_49250 - (2)));
var len_49260 = path_49259.length;
var i_49261 = (0);
var obj_49262 = obj;
while(true){
if((i_49261 < len_49260)){
var mode_49263 = (path_49259[i_49261]);
var key_49264 = (path_49259[(i_49261 + (1))]);
var next_obj_49265 = oops.core.get_key_dynamically(obj_49262,key_49264,mode_49263);
var G__49275 = mode_49263;
switch (G__49275) {
case (0):
var G__49321 = (i_49261 + (2));
var G__49322 = next_obj_49265;
i_49261 = G__49321;
obj_49262 = G__49322;
continue;

break;
case (1):
if((!((next_obj_49265 == null)))){
var G__49323 = (i_49261 + (2));
var G__49324 = next_obj_49265;
i_49261 = G__49323;
obj_49262 = G__49324;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_49265 == null)))){
var G__49325 = (i_49261 + (2));
var G__49326 = next_obj_49265;
i_49261 = G__49325;
obj_49262 = G__49326;
continue;
} else {
var G__49327 = (i_49261 + (2));
var G__49328 = oops.core.punch_key_dynamically_BANG_.call(null,obj_49262,key_49264);
i_49261 = G__49327;
obj_49262 = G__49328;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49275)].join('')));

}
} else {
return obj_49262;
}
break;
}
})();
return [target_obj_49251,(function (){var path_49266 = [(path_49249[(len_49250 - (2))]),(path_49249[(len_49250 - (1))])];
var len_49267 = path_49266.length;
var i_49268 = (0);
var obj_49269 = target_obj_49251;
while(true){
if((i_49268 < len_49267)){
var mode_49270 = (path_49266[i_49268]);
var key_49271 = (path_49266[(i_49268 + (1))]);
var next_obj_49272 = oops.core.get_key_dynamically(obj_49269,key_49271,mode_49270);
var G__49276 = mode_49270;
switch (G__49276) {
case (0):
var G__49330 = (i_49268 + (2));
var G__49331 = next_obj_49272;
i_49268 = G__49330;
obj_49269 = G__49331;
continue;

break;
case (1):
if((!((next_obj_49272 == null)))){
var G__49332 = (i_49268 + (2));
var G__49333 = next_obj_49272;
i_49268 = G__49332;
obj_49269 = G__49333;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_49272 == null)))){
var G__49334 = (i_49268 + (2));
var G__49335 = next_obj_49272;
i_49268 = G__49334;
obj_49269 = G__49335;
continue;
} else {
var G__49336 = (i_49268 + (2));
var G__49337 = oops.core.punch_key_dynamically_BANG_.call(null,obj_49269,key_49271);
i_49268 = G__49336;
obj_49269 = G__49337;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49276)].join('')));

}
} else {
return obj_49269;
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
if(cljs.core.truth_((((!(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector))))?(function (){var explanation_49291 = cljs.spec.alpha.explain_data(new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector);
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_49291,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null));
})():true))){
var path_49278 = (function (){var path_49277 = oops.core.build_path_dynamically(selector);
oops.core.check_path_dynamically(path_49277,(1));

return path_49277;
})();
var len_49281 = path_49278.length;
var parent_obj_path_49282 = path_49278.slice((0),(len_49281 - (2)));
var key_49279 = (path_49278[(len_49281 - (1))]);
var mode_49280 = (path_49278[(len_49281 - (2))]);
var parent_obj_49283 = (function (){var path_49284 = parent_obj_path_49282;
var len_49285 = path_49284.length;
var i_49286 = (0);
var obj_49287 = obj;
while(true){
if((i_49286 < len_49285)){
var mode_49288 = (path_49284[i_49286]);
var key_49289 = (path_49284[(i_49286 + (1))]);
var next_obj_49290 = oops.core.get_key_dynamically(obj_49287,key_49289,mode_49288);
var G__49292 = mode_49288;
switch (G__49292) {
case (0):
var G__49339 = (i_49286 + (2));
var G__49340 = next_obj_49290;
i_49286 = G__49339;
obj_49287 = G__49340;
continue;

break;
case (1):
if((!((next_obj_49290 == null)))){
var G__49341 = (i_49286 + (2));
var G__49342 = next_obj_49290;
i_49286 = G__49341;
obj_49287 = G__49342;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_49290 == null)))){
var G__49343 = (i_49286 + (2));
var G__49344 = next_obj_49290;
i_49286 = G__49343;
obj_49287 = G__49344;
continue;
} else {
var G__49345 = (i_49286 + (2));
var G__49346 = oops.core.punch_key_dynamically_BANG_.call(null,obj_49287,key_49289);
i_49286 = G__49345;
obj_49287 = G__49346;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49292)].join('')));

}
} else {
return obj_49287;
}
break;
}
})();
return oops.core.set_key_dynamically(parent_obj_49283,key_49279,val,mode_49280);
} else {
return null;
}
});

//# sourceMappingURL=oops.core.js.map
