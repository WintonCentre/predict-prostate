goog.provide('oops.core');
oops.core.report_error_dynamically = (function oops$core$report_error_dynamically(msg,data){
if(oops.state.was_error_reported_QMARK_()){
return null;
} else {
oops.state.mark_error_reported_BANG_();

var G__36762 = oops.config.get_error_reporting();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"throw","throw",-1044625833),G__36762)){
throw oops.state.prepare_error_from_call_site(msg,oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"console","console",1228072057),G__36762)){
var G__36770 = (console["error"]);
var G__36771 = msg;
var G__36772 = oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data);
var fexpr__36769 = oops.state.get_console_reporter();
return (fexpr__36769.cljs$core$IFn$_invoke$arity$3 ? fexpr__36769.cljs$core$IFn$_invoke$arity$3(G__36770,G__36771,G__36772) : fexpr__36769.call(null,G__36770,G__36771,G__36772));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__36762)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36762)].join('')));

}
}
}
}
});
oops.core.report_warning_dynamically = (function oops$core$report_warning_dynamically(msg,data){
var G__36778 = oops.config.get_warning_reporting();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"throw","throw",-1044625833),G__36778)){
throw oops.state.prepare_error_from_call_site(msg,oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"console","console",1228072057),G__36778)){
var G__36780 = (console["warn"]);
var G__36781 = msg;
var G__36782 = oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data);
var fexpr__36779 = oops.state.get_console_reporter();
return (fexpr__36779.cljs$core$IFn$_invoke$arity$3 ? fexpr__36779.cljs$core$IFn$_invoke$arity$3(G__36780,G__36781,G__36782) : fexpr__36779.call(null,G__36780,G__36781,G__36782));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__36778)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36778)].join('')));

}
}
}
});
oops.core.report_if_needed_dynamically = (function oops$core$report_if_needed_dynamically(var_args){
var args__4824__auto__ = [];
var len__4818__auto___36855 = arguments.length;
var i__4819__auto___36856 = (0);
while(true){
if((i__4819__auto___36856 < len__4818__auto___36855)){
args__4824__auto__.push((arguments[i__4819__auto___36856]));

var G__36857 = (i__4819__auto___36856 + (1));
i__4819__auto___36856 = G__36857;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic = (function (msg_id,p__36785){
var vec__36786 = p__36785;
var info = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36786,(0),null);

if(cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),msg_id)){
} else {
var G__36789_36858 = oops.config.get_config_key(msg_id);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"warn","warn",-436710552),G__36789_36858)){
oops.core.report_warning_dynamically.call(null,oops.messages.runtime_message.cljs$core$IFn$_invoke$arity$2(msg_id,info),info);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"error","error",-978969032),G__36789_36858)){
oops.core.report_error_dynamically.call(null,oops.messages.runtime_message.cljs$core$IFn$_invoke$arity$2(msg_id,info),info);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__36789_36858)){
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__36789_36858)){
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36789_36858)].join('')));

}
}
}
}
}

return null;
}));

(oops.core.report_if_needed_dynamically.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(oops.core.report_if_needed_dynamically.cljs$lang$applyTo = (function (seq36783){
var G__36784 = cljs.core.first(seq36783);
var seq36783__$1 = cljs.core.next(seq36783);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36784,seq36783__$1);
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
var descriptor_36790 = temp__5755__auto__;
var temp__5755__auto____$1 = oops.helpers.determine_property_non_writable_reason(descriptor_36790);
if((temp__5755__auto____$1 == null)){
return true;
} else {
var reason_36791 = temp__5755__auto____$1;
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"object-key-not-writable","object-key-not-writable",206336031),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"frozen?","frozen?",613726824),oops.helpers.is_object_frozen_QMARK_(obj),new cljs.core.Keyword(null,"reason","reason",-2070751759),reason_36791,new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null));
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
var child_factory_36793 = oops.config.get_child_factory();
var child_factory_36793__$1 = (function (){var G__36794 = child_factory_36793;
var G__36794__$1 = (((G__36794 instanceof cljs.core.Keyword))?G__36794.fqn:null);
switch (G__36794__$1) {
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
return child_factory_36793;

}
})();

var child_obj_36792 = (child_factory_36793__$1.cljs$core$IFn$_invoke$arity$2 ? child_factory_36793__$1.cljs$core$IFn$_invoke$arity$2(obj,key) : child_factory_36793__$1.call(null,obj,key));
if(oops.core.validate_object_access_dynamically(obj,(2),key,false,true,true)){
(obj[key] = child_obj_36792);
} else {
}

return child_obj_36792;
});
oops.core.build_path_dynamically = (function oops$core$build_path_dynamically(selector){
if(((typeof selector === 'string') || ((selector instanceof cljs.core.Keyword)))){
var selector_path_36797 = [];
oops.schema.prepare_simple_path_BANG_(selector,selector_path_36797);

return selector_path_36797;
} else {
var selector_path_36798 = [];
oops.schema.prepare_path_BANG_(selector,selector_path_36798);

return selector_path_36798;

}
});
oops.core.check_path_dynamically = (function oops$core$check_path_dynamically(path,op){
var temp__5757__auto__ = oops.schema.check_dynamic_path_BANG_(path,op);
if((temp__5757__auto__ == null)){
return null;
} else {
var issue_36799 = temp__5757__auto__;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(oops.core.report_if_needed_dynamically,issue_36799);
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
if(cljs.core.truth_((((!(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector))))?(function (){var explanation_36808 = cljs.spec.alpha.explain_data(new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector);
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_36808,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null));
})():true))){
var path_36801 = (function (){var path_36800 = oops.core.build_path_dynamically(selector);
oops.core.check_path_dynamically(path_36800,(0));

return path_36800;
})();
var len_36802 = path_36801.length;
var i_36803 = (0);
var obj_36804 = obj;
while(true){
if((i_36803 < len_36802)){
var mode_36805 = (path_36801[i_36803]);
var key_36806 = (path_36801[(i_36803 + (1))]);
var next_obj_36807 = oops.core.get_key_dynamically(obj_36804,key_36806,mode_36805);
var G__36809 = mode_36805;
switch (G__36809) {
case (0):
var G__36862 = (i_36803 + (2));
var G__36863 = next_obj_36807;
i_36803 = G__36862;
obj_36804 = G__36863;
continue;

break;
case (1):
if((!((next_obj_36807 == null)))){
var G__36864 = (i_36803 + (2));
var G__36865 = next_obj_36807;
i_36803 = G__36864;
obj_36804 = G__36865;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_36807 == null)))){
var G__36866 = (i_36803 + (2));
var G__36867 = next_obj_36807;
i_36803 = G__36866;
obj_36804 = G__36867;
continue;
} else {
var G__36868 = (i_36803 + (2));
var G__36869 = oops.core.punch_key_dynamically_BANG_.call(null,obj_36804,key_36806);
i_36803 = G__36868;
obj_36804 = G__36869;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36809)].join('')));

}
} else {
return obj_36804;
}
break;
}
} else {
return null;
}
});
oops.core.get_selector_call_info_dynamically = (function oops$core$get_selector_call_info_dynamically(obj,selector){
if(cljs.core.truth_((((!(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector))))?(function (){var explanation_36835 = cljs.spec.alpha.explain_data(new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector);
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_36835,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null));
})():true))){
var path_36811 = (function (){var path_36810 = oops.core.build_path_dynamically(selector);
oops.core.check_path_dynamically(path_36810,(0));

return path_36810;
})();
var len_36812 = path_36811.length;
if((len_36812 < (4))){
return [obj,(function (){var path_36814 = path_36811;
var len_36815 = path_36814.length;
var i_36816 = (0);
var obj_36817 = obj;
while(true){
if((i_36816 < len_36815)){
var mode_36818 = (path_36814[i_36816]);
var key_36819 = (path_36814[(i_36816 + (1))]);
var next_obj_36820 = oops.core.get_key_dynamically(obj_36817,key_36819,mode_36818);
var G__36836 = mode_36818;
switch (G__36836) {
case (0):
var G__36871 = (i_36816 + (2));
var G__36872 = next_obj_36820;
i_36816 = G__36871;
obj_36817 = G__36872;
continue;

break;
case (1):
if((!((next_obj_36820 == null)))){
var G__36873 = (i_36816 + (2));
var G__36874 = next_obj_36820;
i_36816 = G__36873;
obj_36817 = G__36874;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_36820 == null)))){
var G__36875 = (i_36816 + (2));
var G__36876 = next_obj_36820;
i_36816 = G__36875;
obj_36817 = G__36876;
continue;
} else {
var G__36877 = (i_36816 + (2));
var G__36878 = oops.core.punch_key_dynamically_BANG_.call(null,obj_36817,key_36819);
i_36816 = G__36877;
obj_36817 = G__36878;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36836)].join('')));

}
} else {
return obj_36817;
}
break;
}
})()];
} else {
var target_obj_36813 = (function (){var path_36821 = path_36811.slice((0),(len_36812 - (2)));
var len_36822 = path_36821.length;
var i_36823 = (0);
var obj_36824 = obj;
while(true){
if((i_36823 < len_36822)){
var mode_36825 = (path_36821[i_36823]);
var key_36826 = (path_36821[(i_36823 + (1))]);
var next_obj_36827 = oops.core.get_key_dynamically(obj_36824,key_36826,mode_36825);
var G__36837 = mode_36825;
switch (G__36837) {
case (0):
var G__36880 = (i_36823 + (2));
var G__36881 = next_obj_36827;
i_36823 = G__36880;
obj_36824 = G__36881;
continue;

break;
case (1):
if((!((next_obj_36827 == null)))){
var G__36882 = (i_36823 + (2));
var G__36883 = next_obj_36827;
i_36823 = G__36882;
obj_36824 = G__36883;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_36827 == null)))){
var G__36884 = (i_36823 + (2));
var G__36885 = next_obj_36827;
i_36823 = G__36884;
obj_36824 = G__36885;
continue;
} else {
var G__36886 = (i_36823 + (2));
var G__36887 = oops.core.punch_key_dynamically_BANG_.call(null,obj_36824,key_36826);
i_36823 = G__36886;
obj_36824 = G__36887;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36837)].join('')));

}
} else {
return obj_36824;
}
break;
}
})();
return [target_obj_36813,(function (){var path_36828 = [(path_36811[(len_36812 - (2))]),(path_36811[(len_36812 - (1))])];
var len_36829 = path_36828.length;
var i_36830 = (0);
var obj_36831 = target_obj_36813;
while(true){
if((i_36830 < len_36829)){
var mode_36832 = (path_36828[i_36830]);
var key_36833 = (path_36828[(i_36830 + (1))]);
var next_obj_36834 = oops.core.get_key_dynamically(obj_36831,key_36833,mode_36832);
var G__36838 = mode_36832;
switch (G__36838) {
case (0):
var G__36890 = (i_36830 + (2));
var G__36891 = next_obj_36834;
i_36830 = G__36890;
obj_36831 = G__36891;
continue;

break;
case (1):
if((!((next_obj_36834 == null)))){
var G__36892 = (i_36830 + (2));
var G__36893 = next_obj_36834;
i_36830 = G__36892;
obj_36831 = G__36893;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_36834 == null)))){
var G__36894 = (i_36830 + (2));
var G__36895 = next_obj_36834;
i_36830 = G__36894;
obj_36831 = G__36895;
continue;
} else {
var G__36896 = (i_36830 + (2));
var G__36897 = oops.core.punch_key_dynamically_BANG_.call(null,obj_36831,key_36833);
i_36830 = G__36896;
obj_36831 = G__36897;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36838)].join('')));

}
} else {
return obj_36831;
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
if(cljs.core.truth_((((!(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector))))?(function (){var explanation_36853 = cljs.spec.alpha.explain_data(new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector);
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_36853,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null));
})():true))){
var path_36840 = (function (){var path_36839 = oops.core.build_path_dynamically(selector);
oops.core.check_path_dynamically(path_36839,(1));

return path_36839;
})();
var len_36843 = path_36840.length;
var parent_obj_path_36844 = path_36840.slice((0),(len_36843 - (2)));
var key_36841 = (path_36840[(len_36843 - (1))]);
var mode_36842 = (path_36840[(len_36843 - (2))]);
var parent_obj_36845 = (function (){var path_36846 = parent_obj_path_36844;
var len_36847 = path_36846.length;
var i_36848 = (0);
var obj_36849 = obj;
while(true){
if((i_36848 < len_36847)){
var mode_36850 = (path_36846[i_36848]);
var key_36851 = (path_36846[(i_36848 + (1))]);
var next_obj_36852 = oops.core.get_key_dynamically(obj_36849,key_36851,mode_36850);
var G__36854 = mode_36850;
switch (G__36854) {
case (0):
var G__36901 = (i_36848 + (2));
var G__36902 = next_obj_36852;
i_36848 = G__36901;
obj_36849 = G__36902;
continue;

break;
case (1):
if((!((next_obj_36852 == null)))){
var G__36903 = (i_36848 + (2));
var G__36904 = next_obj_36852;
i_36848 = G__36903;
obj_36849 = G__36904;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_36852 == null)))){
var G__36905 = (i_36848 + (2));
var G__36906 = next_obj_36852;
i_36848 = G__36905;
obj_36849 = G__36906;
continue;
} else {
var G__36907 = (i_36848 + (2));
var G__36908 = oops.core.punch_key_dynamically_BANG_.call(null,obj_36849,key_36851);
i_36848 = G__36907;
obj_36849 = G__36908;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36854)].join('')));

}
} else {
return obj_36849;
}
break;
}
})();
return oops.core.set_key_dynamically(parent_obj_36845,key_36841,val,mode_36842);
} else {
return null;
}
});

//# sourceMappingURL=oops.core.js.map
