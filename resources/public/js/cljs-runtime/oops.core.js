goog.provide('oops.core');
oops.core.report_error_dynamically = (function oops$core$report_error_dynamically(msg,data){
if(oops.state.was_error_reported_QMARK_()){
return null;
} else {
oops.state.mark_error_reported_BANG_();

var G__49175 = oops.config.get_error_reporting();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"throw","throw",-1044625833),G__49175)){
throw oops.state.prepare_error_from_call_site(msg,oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"console","console",1228072057),G__49175)){
var G__49177 = (console["error"]);
var G__49178 = msg;
var G__49179 = oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data);
var fexpr__49176 = oops.state.get_console_reporter();
return (fexpr__49176.cljs$core$IFn$_invoke$arity$3 ? fexpr__49176.cljs$core$IFn$_invoke$arity$3(G__49177,G__49178,G__49179) : fexpr__49176.call(null,G__49177,G__49178,G__49179));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__49175)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49175)].join('')));

}
}
}
}
});
oops.core.report_warning_dynamically = (function oops$core$report_warning_dynamically(msg,data){
var G__49185 = oops.config.get_warning_reporting();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"throw","throw",-1044625833),G__49185)){
throw oops.state.prepare_error_from_call_site(msg,oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"console","console",1228072057),G__49185)){
var G__49187 = (console["warn"]);
var G__49188 = msg;
var G__49189 = oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data);
var fexpr__49186 = oops.state.get_console_reporter();
return (fexpr__49186.cljs$core$IFn$_invoke$arity$3 ? fexpr__49186.cljs$core$IFn$_invoke$arity$3(G__49187,G__49188,G__49189) : fexpr__49186.call(null,G__49187,G__49188,G__49189));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__49185)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49185)].join('')));

}
}
}
});
oops.core.report_if_needed_dynamically = (function oops$core$report_if_needed_dynamically(var_args){
var args__4824__auto__ = [];
var len__4818__auto___49264 = arguments.length;
var i__4819__auto___49265 = (0);
while(true){
if((i__4819__auto___49265 < len__4818__auto___49264)){
args__4824__auto__.push((arguments[i__4819__auto___49265]));

var G__49266 = (i__4819__auto___49265 + (1));
i__4819__auto___49265 = G__49266;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic = (function (msg_id,p__49194){
var vec__49195 = p__49194;
var info = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49195,(0),null);

if(cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),msg_id)){
} else {
var G__49198_49267 = oops.config.get_config_key(msg_id);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"warn","warn",-436710552),G__49198_49267)){
oops.core.report_warning_dynamically.call(null,oops.messages.runtime_message.cljs$core$IFn$_invoke$arity$2(msg_id,info),info);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"error","error",-978969032),G__49198_49267)){
oops.core.report_error_dynamically.call(null,oops.messages.runtime_message.cljs$core$IFn$_invoke$arity$2(msg_id,info),info);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__49198_49267)){
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__49198_49267)){
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49198_49267)].join('')));

}
}
}
}
}

return null;
}));

(oops.core.report_if_needed_dynamically.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(oops.core.report_if_needed_dynamically.cljs$lang$applyTo = (function (seq49190){
var G__49191 = cljs.core.first(seq49190);
var seq49190__$1 = cljs.core.next(seq49190);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49191,seq49190__$1);
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
var descriptor_49199 = temp__5755__auto__;
var temp__5755__auto____$1 = oops.helpers.determine_property_non_writable_reason(descriptor_49199);
if((temp__5755__auto____$1 == null)){
return true;
} else {
var reason_49200 = temp__5755__auto____$1;
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"object-key-not-writable","object-key-not-writable",206336031),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"frozen?","frozen?",613726824),oops.helpers.is_object_frozen_QMARK_(obj),new cljs.core.Keyword(null,"reason","reason",-2070751759),reason_49200,new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null));
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
if(cljs.core.truth_(goog.isFunction(fn))){
return true;
} else {
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"expected-function-value","expected-function-value",-1399123630),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"soft?","soft?",-1339668477),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,(1)),new cljs.core.Keyword(null,"fn","fn",-1175266204),fn,new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null));

}
}
});
oops.core.punch_key_dynamically_BANG_ = (function oops$core$punch_key_dynamically_BANG_(obj,key){
var child_factory_49202 = oops.config.get_child_factory();
var child_factory_49202__$1 = (function (){var G__49203 = child_factory_49202;
var G__49203__$1 = (((G__49203 instanceof cljs.core.Keyword))?G__49203.fqn:null);
switch (G__49203__$1) {
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
return child_factory_49202;

}
})();

var child_obj_49201 = (child_factory_49202__$1.cljs$core$IFn$_invoke$arity$2 ? child_factory_49202__$1.cljs$core$IFn$_invoke$arity$2(obj,key) : child_factory_49202__$1.call(null,obj,key));
if(oops.core.validate_object_access_dynamically(obj,(2),key,false,true,true)){
(obj[key] = child_obj_49201);
} else {
}

return child_obj_49201;
});
oops.core.build_path_dynamically = (function oops$core$build_path_dynamically(selector){
if(((typeof selector === 'string') || ((selector instanceof cljs.core.Keyword)))){
var selector_path_49206 = [];
oops.schema.prepare_simple_path_BANG_(selector,selector_path_49206);

return selector_path_49206;
} else {
var selector_path_49207 = [];
oops.schema.prepare_path_BANG_(selector,selector_path_49207);

return selector_path_49207;

}
});
oops.core.check_path_dynamically = (function oops$core$check_path_dynamically(path,op){
var temp__5757__auto__ = oops.schema.check_dynamic_path_BANG_(path,op);
if((temp__5757__auto__ == null)){
return null;
} else {
var issue_49208 = temp__5757__auto__;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(oops.core.report_if_needed_dynamically,issue_49208);
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
if(cljs.core.truth_((((!(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector))))?(function (){var explanation_49217 = cljs.spec.alpha.explain_data(new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector);
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_49217,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null));
})():true))){
var path_49210 = (function (){var path_49209 = oops.core.build_path_dynamically(selector);
oops.core.check_path_dynamically(path_49209,(0));

return path_49209;
})();
var len_49211 = path_49210.length;
var i_49212 = (0);
var obj_49213 = obj;
while(true){
if((i_49212 < len_49211)){
var mode_49214 = (path_49210[i_49212]);
var key_49215 = (path_49210[(i_49212 + (1))]);
var next_obj_49216 = oops.core.get_key_dynamically(obj_49213,key_49215,mode_49214);
var G__49218 = mode_49214;
switch (G__49218) {
case (0):
var G__49271 = (i_49212 + (2));
var G__49272 = next_obj_49216;
i_49212 = G__49271;
obj_49213 = G__49272;
continue;

break;
case (1):
if((!((next_obj_49216 == null)))){
var G__49273 = (i_49212 + (2));
var G__49274 = next_obj_49216;
i_49212 = G__49273;
obj_49213 = G__49274;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_49216 == null)))){
var G__49275 = (i_49212 + (2));
var G__49276 = next_obj_49216;
i_49212 = G__49275;
obj_49213 = G__49276;
continue;
} else {
var G__49277 = (i_49212 + (2));
var G__49278 = oops.core.punch_key_dynamically_BANG_.call(null,obj_49213,key_49215);
i_49212 = G__49277;
obj_49213 = G__49278;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49218)].join('')));

}
} else {
return obj_49213;
}
break;
}
} else {
return null;
}
});
oops.core.get_selector_call_info_dynamically = (function oops$core$get_selector_call_info_dynamically(obj,selector){
if(cljs.core.truth_((((!(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector))))?(function (){var explanation_49244 = cljs.spec.alpha.explain_data(new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector);
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_49244,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null));
})():true))){
var path_49220 = (function (){var path_49219 = oops.core.build_path_dynamically(selector);
oops.core.check_path_dynamically(path_49219,(0));

return path_49219;
})();
var len_49221 = path_49220.length;
if((len_49221 < (4))){
return [obj,(function (){var path_49223 = path_49220;
var len_49224 = path_49223.length;
var i_49225 = (0);
var obj_49226 = obj;
while(true){
if((i_49225 < len_49224)){
var mode_49227 = (path_49223[i_49225]);
var key_49228 = (path_49223[(i_49225 + (1))]);
var next_obj_49229 = oops.core.get_key_dynamically(obj_49226,key_49228,mode_49227);
var G__49245 = mode_49227;
switch (G__49245) {
case (0):
var G__49281 = (i_49225 + (2));
var G__49282 = next_obj_49229;
i_49225 = G__49281;
obj_49226 = G__49282;
continue;

break;
case (1):
if((!((next_obj_49229 == null)))){
var G__49283 = (i_49225 + (2));
var G__49284 = next_obj_49229;
i_49225 = G__49283;
obj_49226 = G__49284;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_49229 == null)))){
var G__49285 = (i_49225 + (2));
var G__49286 = next_obj_49229;
i_49225 = G__49285;
obj_49226 = G__49286;
continue;
} else {
var G__49287 = (i_49225 + (2));
var G__49288 = oops.core.punch_key_dynamically_BANG_.call(null,obj_49226,key_49228);
i_49225 = G__49287;
obj_49226 = G__49288;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49245)].join('')));

}
} else {
return obj_49226;
}
break;
}
})()];
} else {
var target_obj_49222 = (function (){var path_49230 = path_49220.slice((0),(len_49221 - (2)));
var len_49231 = path_49230.length;
var i_49232 = (0);
var obj_49233 = obj;
while(true){
if((i_49232 < len_49231)){
var mode_49234 = (path_49230[i_49232]);
var key_49235 = (path_49230[(i_49232 + (1))]);
var next_obj_49236 = oops.core.get_key_dynamically(obj_49233,key_49235,mode_49234);
var G__49246 = mode_49234;
switch (G__49246) {
case (0):
var G__49290 = (i_49232 + (2));
var G__49291 = next_obj_49236;
i_49232 = G__49290;
obj_49233 = G__49291;
continue;

break;
case (1):
if((!((next_obj_49236 == null)))){
var G__49292 = (i_49232 + (2));
var G__49293 = next_obj_49236;
i_49232 = G__49292;
obj_49233 = G__49293;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_49236 == null)))){
var G__49294 = (i_49232 + (2));
var G__49295 = next_obj_49236;
i_49232 = G__49294;
obj_49233 = G__49295;
continue;
} else {
var G__49297 = (i_49232 + (2));
var G__49298 = oops.core.punch_key_dynamically_BANG_.call(null,obj_49233,key_49235);
i_49232 = G__49297;
obj_49233 = G__49298;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49246)].join('')));

}
} else {
return obj_49233;
}
break;
}
})();
return [target_obj_49222,(function (){var path_49237 = [(path_49220[(len_49221 - (2))]),(path_49220[(len_49221 - (1))])];
var len_49238 = path_49237.length;
var i_49239 = (0);
var obj_49240 = target_obj_49222;
while(true){
if((i_49239 < len_49238)){
var mode_49241 = (path_49237[i_49239]);
var key_49242 = (path_49237[(i_49239 + (1))]);
var next_obj_49243 = oops.core.get_key_dynamically(obj_49240,key_49242,mode_49241);
var G__49247 = mode_49241;
switch (G__49247) {
case (0):
var G__49301 = (i_49239 + (2));
var G__49302 = next_obj_49243;
i_49239 = G__49301;
obj_49240 = G__49302;
continue;

break;
case (1):
if((!((next_obj_49243 == null)))){
var G__49303 = (i_49239 + (2));
var G__49304 = next_obj_49243;
i_49239 = G__49303;
obj_49240 = G__49304;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_49243 == null)))){
var G__49305 = (i_49239 + (2));
var G__49306 = next_obj_49243;
i_49239 = G__49305;
obj_49240 = G__49306;
continue;
} else {
var G__49307 = (i_49239 + (2));
var G__49308 = oops.core.punch_key_dynamically_BANG_.call(null,obj_49240,key_49242);
i_49239 = G__49307;
obj_49240 = G__49308;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49247)].join('')));

}
} else {
return obj_49240;
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
if(cljs.core.truth_((((!(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector))))?(function (){var explanation_49262 = cljs.spec.alpha.explain_data(new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector);
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_49262,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null));
})():true))){
var path_49249 = (function (){var path_49248 = oops.core.build_path_dynamically(selector);
oops.core.check_path_dynamically(path_49248,(1));

return path_49248;
})();
var len_49252 = path_49249.length;
var parent_obj_path_49253 = path_49249.slice((0),(len_49252 - (2)));
var key_49250 = (path_49249[(len_49252 - (1))]);
var mode_49251 = (path_49249[(len_49252 - (2))]);
var parent_obj_49254 = (function (){var path_49255 = parent_obj_path_49253;
var len_49256 = path_49255.length;
var i_49257 = (0);
var obj_49258 = obj;
while(true){
if((i_49257 < len_49256)){
var mode_49259 = (path_49255[i_49257]);
var key_49260 = (path_49255[(i_49257 + (1))]);
var next_obj_49261 = oops.core.get_key_dynamically(obj_49258,key_49260,mode_49259);
var G__49263 = mode_49259;
switch (G__49263) {
case (0):
var G__49310 = (i_49257 + (2));
var G__49311 = next_obj_49261;
i_49257 = G__49310;
obj_49258 = G__49311;
continue;

break;
case (1):
if((!((next_obj_49261 == null)))){
var G__49312 = (i_49257 + (2));
var G__49313 = next_obj_49261;
i_49257 = G__49312;
obj_49258 = G__49313;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_49261 == null)))){
var G__49314 = (i_49257 + (2));
var G__49315 = next_obj_49261;
i_49257 = G__49314;
obj_49258 = G__49315;
continue;
} else {
var G__49316 = (i_49257 + (2));
var G__49317 = oops.core.punch_key_dynamically_BANG_.call(null,obj_49258,key_49260);
i_49257 = G__49316;
obj_49258 = G__49317;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49263)].join('')));

}
} else {
return obj_49258;
}
break;
}
})();
return oops.core.set_key_dynamically(parent_obj_49254,key_49250,val,mode_49251);
} else {
return null;
}
});

//# sourceMappingURL=oops.core.js.map
