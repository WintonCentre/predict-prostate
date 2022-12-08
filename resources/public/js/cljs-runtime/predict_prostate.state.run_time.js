goog.provide('predict_prostate.state.run_time');
predict_prostate.state.run_time.event_bus = pubsub.feeds.create_feed();
predict_prostate.state.run_time.model = "prostate-release";
predict_prostate.state.run_time.unknown = "Unknown";
predict_prostate.state.run_time.N = (15);
/**
 * Make a new topic on which to report events
 */
predict_prostate.state.run_time.make_topic = (function predict_prostate$state$run_time$make_topic(topic_key){
return pubsub.feeds.__GT_Topic(topic_key,predict_prostate.state.run_time.event_bus);
});
if((typeof predict_prostate !== 'undefined') && (typeof predict_prostate.state !== 'undefined') && (typeof predict_prostate.state.run_time !== 'undefined') && (typeof predict_prostate.state.run_time.rtdb !== 'undefined')){
} else {
predict_prostate.state.run_time.rtdb = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"t-state","t-state",-949929279),new cljs.core.Keyword(null,"on-screen-treatments","on-screen-treatments",-1224669659),new cljs.core.Keyword(null,"help-visible","help-visible",-41851928),new cljs.core.Keyword(null,"incomplete","incomplete",-998567478),new cljs.core.Keyword(null,"active-mockup","active-mockup",-1957953013),new cljs.core.Keyword(null,"help-content","help-content",-1146352148),new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Keyword(null,"plot-style","plot-style",-113762355),new cljs.core.Keyword(null,"settings-visible","settings-visible",-1241594802),new cljs.core.Keyword(null,"help-key","help-key",-330891567),new cljs.core.Keyword(null,"on-screen-inputs","on-screen-inputs",-1260802924),new cljs.core.Keyword(null,"help-header","help-header",-1874522216),new cljs.core.Keyword(null,"show-uncertainty","show-uncertainty",-166217605),new cljs.core.Keyword(null,"hide-warning","hide-warning",1423504796),new cljs.core.Keyword(null,"media","media",-1066138403),new cljs.core.Keyword(null,"test","test",577538877),new cljs.core.Keyword(null,"recalculate-error-state","recalculate-error-state",-1513288226),new cljs.core.Keyword(null,"active-results-pane","active-results-pane",1428827423),new cljs.core.Keyword(null,"results","results",-1134170113)],[cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(translations.config.initial_t_state,new cljs.core.Keyword(null,"translator","translator",-1752203115),translations.tongue_base.wrap_translator(translations.config.initial_lang,tongue.core.build_translate(translations.config.initial_translations))),cljs.core.PersistentHashSet.EMPTY,false,true,"Mockup 1","Help content",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"home","home",-74557309),null,null], null),null,false,null,cljs.core.PersistentHashSet.EMPTY,"Help header",new cljs.core.Keyword(null,"no","no",-390373634),false,new cljs.core.Keyword(null,"screen","screen",1990059748),"test",(0),"charts",cljs.core.PersistentVector.EMPTY]));
}
if((typeof predict_prostate !== 'undefined') && (typeof predict_prostate.state !== 'undefined') && (typeof predict_prostate.state.run_time !== 'undefined') && (typeof predict_prostate.state.run_time.edit_cursor !== 'undefined')){
} else {
predict_prostate.state.run_time.edit_cursor = rum.core.cursor_in(predict_prostate.state.run_time.rtdb,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"edit","edit",-1641834166)], null));
}
if((typeof predict_prostate !== 'undefined') && (typeof predict_prostate.state !== 'undefined') && (typeof predict_prostate.state.run_time !== 'undefined') && (typeof predict_prostate.state.run_time.edit_change !== 'undefined')){
} else {
predict_prostate.state.run_time.edit_change = predict_prostate.state.run_time.make_topic(new cljs.core.Keyword(null,"edit-change","edit-change",-1693718136));
}
if((typeof predict_prostate !== 'undefined') && (typeof predict_prostate.state !== 'undefined') && (typeof predict_prostate.state.run_time !== 'undefined') && (typeof predict_prostate.state.run_time.new_text_cursor !== 'undefined')){
} else {
predict_prostate.state.run_time.new_text_cursor = rum.core.cursor_in(predict_prostate.state.run_time.rtdb,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"edit","edit",-1641834166),new cljs.core.Keyword(null,"new-text","new-text",962412088)], null));
}
if((typeof predict_prostate !== 'undefined') && (typeof predict_prostate.state !== 'undefined') && (typeof predict_prostate.state.run_time !== 'undefined') && (typeof predict_prostate.state.run_time.new_text_change !== 'undefined')){
} else {
predict_prostate.state.run_time.new_text_change = predict_prostate.state.run_time.make_topic(new cljs.core.Keyword(null,"new-text-change","new-text-change",549693685));
}
if((typeof predict_prostate !== 'undefined') && (typeof predict_prostate.state !== 'undefined') && (typeof predict_prostate.state.run_time !== 'undefined') && (typeof predict_prostate.state.run_time.text_change !== 'undefined')){
} else {
predict_prostate.state.run_time.text_change = predict_prostate.state.run_time.make_topic(new cljs.core.Keyword(null,"text-change","text-change",-368710709));
}
if((typeof predict_prostate !== 'undefined') && (typeof predict_prostate.state !== 'undefined') && (typeof predict_prostate.state.run_time !== 'undefined') && (typeof predict_prostate.state.run_time.add_language_modal !== 'undefined')){
} else {
predict_prostate.state.run_time.add_language_modal = predict_prostate.state.run_time.make_topic(new cljs.core.Keyword(null,"add-language-modal","add-language-modal",1467045725));
}
if((typeof predict_prostate !== 'undefined') && (typeof predict_prostate.state !== 'undefined') && (typeof predict_prostate.state.run_time !== 'undefined') && (typeof predict_prostate.state.run_time.add_language !== 'undefined')){
} else {
predict_prostate.state.run_time.add_language = predict_prostate.state.run_time.make_topic(new cljs.core.Keyword(null,"add-language","add-language",817419765));
}
if((typeof predict_prostate !== 'undefined') && (typeof predict_prostate.state !== 'undefined') && (typeof predict_prostate.state.run_time !== 'undefined') && (typeof predict_prostate.state.run_time.t_state_cursor !== 'undefined')){
} else {
predict_prostate.state.run_time.t_state_cursor = rum.core.cursor_in(predict_prostate.state.run_time.rtdb,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"t-state","t-state",-949929279)], null));
}
if((typeof predict_prostate !== 'undefined') && (typeof predict_prostate.state !== 'undefined') && (typeof predict_prostate.state.run_time !== 'undefined') && (typeof predict_prostate.state.run_time.t_state_change !== 'undefined')){
} else {
predict_prostate.state.run_time.t_state_change = predict_prostate.state.run_time.make_topic(new cljs.core.Keyword(null,"t-state-change","t-state-change",1837362165));
}
if((typeof predict_prostate !== 'undefined') && (typeof predict_prostate.state !== 'undefined') && (typeof predict_prostate.state.run_time !== 'undefined') && (typeof predict_prostate.state.run_time.ttt_cursor !== 'undefined')){
} else {
predict_prostate.state.run_time.ttt_cursor = rum.core.cursor_in(predict_prostate.state.run_time.rtdb,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"t-state","t-state",-949929279),new cljs.core.Keyword(null,"translator","translator",-1752203115)], null));
}
if((typeof predict_prostate !== 'undefined') && (typeof predict_prostate.state !== 'undefined') && (typeof predict_prostate.state.run_time !== 'undefined') && (typeof predict_prostate.state.run_time.language_change !== 'undefined')){
} else {
predict_prostate.state.run_time.language_change = predict_prostate.state.run_time.make_topic(new cljs.core.Keyword(null,"language-change","language-change",1891938328));
}
if((typeof predict_prostate !== 'undefined') && (typeof predict_prostate.state !== 'undefined') && (typeof predict_prostate.state.run_time !== 'undefined') && (typeof predict_prostate.state.run_time.estimates !== 'undefined')){
} else {
predict_prostate.state.run_time.estimates = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof predict_prostate !== 'undefined') && (typeof predict_prostate.state !== 'undefined') && (typeof predict_prostate.state.run_time !== 'undefined') && (typeof predict_prostate.state.run_time.media_cursor !== 'undefined')){
} else {
predict_prostate.state.run_time.media_cursor = rum.core.cursor(predict_prostate.state.run_time.rtdb,new cljs.core.Keyword(null,"media","media",-1066138403));
}
if((typeof predict_prostate !== 'undefined') && (typeof predict_prostate.state !== 'undefined') && (typeof predict_prostate.state.run_time !== 'undefined') && (typeof predict_prostate.state.run_time.media_change !== 'undefined')){
} else {
predict_prostate.state.run_time.media_change = predict_prostate.state.run_time.make_topic(new cljs.core.Keyword(null,"media-change","media-change",-1831133059));
}
if((typeof predict_prostate !== 'undefined') && (typeof predict_prostate.state !== 'undefined') && (typeof predict_prostate.state.run_time !== 'undefined') && (typeof predict_prostate.state.run_time.hide_warning_cursor !== 'undefined')){
} else {
predict_prostate.state.run_time.hide_warning_cursor = rum.core.cursor(predict_prostate.state.run_time.rtdb,new cljs.core.Keyword(null,"hide-warning","hide-warning",1423504796));
}
if((typeof predict_prostate !== 'undefined') && (typeof predict_prostate.state !== 'undefined') && (typeof predict_prostate.state.run_time !== 'undefined') && (typeof predict_prostate.state.run_time.hide_warning_change !== 'undefined')){
} else {
predict_prostate.state.run_time.hide_warning_change = predict_prostate.state.run_time.make_topic(new cljs.core.Keyword(null,"hide-warning-change","hide-warning-change",-703664775));
}
if((typeof predict_prostate !== 'undefined') && (typeof predict_prostate.state !== 'undefined') && (typeof predict_prostate.state.run_time !== 'undefined') && (typeof predict_prostate.state.run_time.show_uncertainty_cursor !== 'undefined')){
} else {
predict_prostate.state.run_time.show_uncertainty_cursor = rum.core.cursor(predict_prostate.state.run_time.rtdb,new cljs.core.Keyword(null,"show-uncertainty","show-uncertainty",-166217605));
}
if((typeof predict_prostate !== 'undefined') && (typeof predict_prostate.state !== 'undefined') && (typeof predict_prostate.state.run_time !== 'undefined') && (typeof predict_prostate.state.run_time.show_uncertainty_change !== 'undefined')){
} else {
predict_prostate.state.run_time.show_uncertainty_change = predict_prostate.state.run_time.make_topic(new cljs.core.Keyword(null,"show-uncertainty-change","show-uncertainty-change",295634838));
}
if((typeof predict_prostate !== 'undefined') && (typeof predict_prostate.state !== 'undefined') && (typeof predict_prostate.state.run_time !== 'undefined') && (typeof predict_prostate.state.run_time.route !== 'undefined')){
} else {
predict_prostate.state.run_time.route = rum.core.cursor(predict_prostate.state.run_time.rtdb,new cljs.core.Keyword(null,"route","route",329891309));
}
if((typeof predict_prostate !== 'undefined') && (typeof predict_prostate.state !== 'undefined') && (typeof predict_prostate.state.run_time !== 'undefined') && (typeof predict_prostate.state.run_time.route_change !== 'undefined')){
} else {
predict_prostate.state.run_time.route_change = predict_prostate.state.run_time.make_topic(new cljs.core.Keyword(null,"route-change","route-change",1497541830));
}
if((typeof predict_prostate !== 'undefined') && (typeof predict_prostate.state !== 'undefined') && (typeof predict_prostate.state.run_time !== 'undefined') && (typeof predict_prostate.state.run_time.help_header_cursor !== 'undefined')){
} else {
predict_prostate.state.run_time.help_header_cursor = rum.core.cursor(predict_prostate.state.run_time.rtdb,new cljs.core.Keyword(null,"help-header","help-header",-1874522216));
}
if((typeof predict_prostate !== 'undefined') && (typeof predict_prostate.state !== 'undefined') && (typeof predict_prostate.state.run_time !== 'undefined') && (typeof predict_prostate.state.run_time.help_header_change !== 'undefined')){
} else {
predict_prostate.state.run_time.help_header_change = predict_prostate.state.run_time.make_topic(new cljs.core.Keyword(null,"help-header-change","help-header-change",1714491000));
}
if((typeof predict_prostate !== 'undefined') && (typeof predict_prostate.state !== 'undefined') && (typeof predict_prostate.state.run_time !== 'undefined') && (typeof predict_prostate.state.run_time.help_content_cursor !== 'undefined')){
} else {
predict_prostate.state.run_time.help_content_cursor = rum.core.cursor(predict_prostate.state.run_time.rtdb,new cljs.core.Keyword(null,"help-content","help-content",-1146352148));
}
if((typeof predict_prostate !== 'undefined') && (typeof predict_prostate.state !== 'undefined') && (typeof predict_prostate.state.run_time !== 'undefined') && (typeof predict_prostate.state.run_time.help_content_change !== 'undefined')){
} else {
predict_prostate.state.run_time.help_content_change = predict_prostate.state.run_time.make_topic(new cljs.core.Keyword(null,"help-content-change","help-content-change",-1998494050));
}
if((typeof predict_prostate !== 'undefined') && (typeof predict_prostate.state !== 'undefined') && (typeof predict_prostate.state.run_time !== 'undefined') && (typeof predict_prostate.state.run_time.help_key_cursor !== 'undefined')){
} else {
predict_prostate.state.run_time.help_key_cursor = rum.core.cursor(predict_prostate.state.run_time.rtdb,new cljs.core.Keyword(null,"help-key","help-key",-330891567));
}
if((typeof predict_prostate !== 'undefined') && (typeof predict_prostate.state !== 'undefined') && (typeof predict_prostate.state.run_time !== 'undefined') && (typeof predict_prostate.state.run_time.help_key_change !== 'undefined')){
} else {
predict_prostate.state.run_time.help_key_change = predict_prostate.state.run_time.make_topic(new cljs.core.Keyword(null,"help-key-change","help-key-change",-1967569092));
}
if((typeof predict_prostate !== 'undefined') && (typeof predict_prostate.state !== 'undefined') && (typeof predict_prostate.state.run_time !== 'undefined') && (typeof predict_prostate.state.run_time.settings_cursor !== 'undefined')){
} else {
predict_prostate.state.run_time.settings_cursor = rum.core.cursor(predict_prostate.state.run_time.rtdb,new cljs.core.Keyword(null,"settings-visible","settings-visible",-1241594802));
}
if((typeof predict_prostate !== 'undefined') && (typeof predict_prostate.state !== 'undefined') && (typeof predict_prostate.state.run_time !== 'undefined') && (typeof predict_prostate.state.run_time.settings_change !== 'undefined')){
} else {
predict_prostate.state.run_time.settings_change = predict_prostate.state.run_time.make_topic(new cljs.core.Keyword(null,"settings-change","settings-change",275047493));
}
if((typeof predict_prostate !== 'undefined') && (typeof predict_prostate.state !== 'undefined') && (typeof predict_prostate.state.run_time !== 'undefined') && (typeof predict_prostate.state.run_time.print_cursor !== 'undefined')){
} else {
predict_prostate.state.run_time.print_cursor = rum.core.cursor(predict_prostate.state.run_time.rtdb,new cljs.core.Keyword(null,"print-visible","print-visible",-289922850));
}
if((typeof predict_prostate !== 'undefined') && (typeof predict_prostate.state !== 'undefined') && (typeof predict_prostate.state.run_time !== 'undefined') && (typeof predict_prostate.state.run_time.print_change !== 'undefined')){
} else {
predict_prostate.state.run_time.print_change = predict_prostate.state.run_time.make_topic(new cljs.core.Keyword(null,"print-change","print-change",893643696));
}
if((typeof predict_prostate !== 'undefined') && (typeof predict_prostate.state !== 'undefined') && (typeof predict_prostate.state.run_time !== 'undefined') && (typeof predict_prostate.state.run_time.help_cursor !== 'undefined')){
} else {
predict_prostate.state.run_time.help_cursor = rum.core.cursor(predict_prostate.state.run_time.rtdb,new cljs.core.Keyword(null,"settings-visible","settings-visible",-1241594802));
}
if((typeof predict_prostate !== 'undefined') && (typeof predict_prostate.state !== 'undefined') && (typeof predict_prostate.state.run_time !== 'undefined') && (typeof predict_prostate.state.run_time.help_change !== 'undefined')){
} else {
predict_prostate.state.run_time.help_change = predict_prostate.state.run_time.make_topic(new cljs.core.Keyword(null,"settings-change","settings-change",275047493));
}
if((typeof predict_prostate !== 'undefined') && (typeof predict_prostate.state !== 'undefined') && (typeof predict_prostate.state.run_time !== 'undefined') && (typeof predict_prostate.state.run_time.on_screen_inputs_cursor !== 'undefined')){
} else {
predict_prostate.state.run_time.on_screen_inputs_cursor = rum.core.cursor(predict_prostate.state.run_time.rtdb,new cljs.core.Keyword(null,"on-screen-inputs","on-screen-inputs",-1260802924));
}
if((typeof predict_prostate !== 'undefined') && (typeof predict_prostate.state !== 'undefined') && (typeof predict_prostate.state.run_time !== 'undefined') && (typeof predict_prostate.state.run_time.on_screen_treatments_cursor !== 'undefined')){
} else {
predict_prostate.state.run_time.on_screen_treatments_cursor = rum.core.cursor(predict_prostate.state.run_time.rtdb,new cljs.core.Keyword(null,"on-screen-treatments","on-screen-treatments",-1224669659));
}
predict_prostate.state.run_time.ost = predict_prostate.state.run_time.on_screen_treatments_cursor;
if((typeof predict_prostate !== 'undefined') && (typeof predict_prostate.state !== 'undefined') && (typeof predict_prostate.state.run_time !== 'undefined') && (typeof predict_prostate.state.run_time.results_change !== 'undefined')){
} else {
predict_prostate.state.run_time.results_change = predict_prostate.state.run_time.make_topic(new cljs.core.Keyword(null,"results","results",-1134170113));
}
if((typeof predict_prostate !== 'undefined') && (typeof predict_prostate.state !== 'undefined') && (typeof predict_prostate.state.run_time !== 'undefined') && (typeof predict_prostate.state.run_time.results_cursor !== 'undefined')){
} else {
predict_prostate.state.run_time.results_cursor = rum.core.cursor(predict_prostate.state.run_time.rtdb,new cljs.core.Keyword(null,"results","results",-1134170113));
}
if((typeof predict_prostate !== 'undefined') && (typeof predict_prostate.state !== 'undefined') && (typeof predict_prostate.state.run_time !== 'undefined') && (typeof predict_prostate.state.run_time.active_results_pane !== 'undefined')){
} else {
predict_prostate.state.run_time.active_results_pane = rum.core.cursor(predict_prostate.state.run_time.rtdb,new cljs.core.Keyword(null,"active-results-pane","active-results-pane",1428827423));
}
if((typeof predict_prostate !== 'undefined') && (typeof predict_prostate.state !== 'undefined') && (typeof predict_prostate.state.run_time !== 'undefined') && (typeof predict_prostate.state.run_time.active_results_change !== 'undefined')){
} else {
predict_prostate.state.run_time.active_results_change = predict_prostate.state.run_time.make_topic(new cljs.core.Keyword(null,"active-results-pane","active-results-pane",1428827423));
}
if((typeof predict_prostate !== 'undefined') && (typeof predict_prostate.state !== 'undefined') && (typeof predict_prostate.state.run_time !== 'undefined') && (typeof predict_prostate.state.run_time.mockup_cursor !== 'undefined')){
} else {
predict_prostate.state.run_time.mockup_cursor = rum.core.cursor(predict_prostate.state.run_time.rtdb,new cljs.core.Keyword(null,"active-mockup","active-mockup",-1957953013));
}
if((typeof predict_prostate !== 'undefined') && (typeof predict_prostate.state !== 'undefined') && (typeof predict_prostate.state.run_time !== 'undefined') && (typeof predict_prostate.state.run_time.mockup_change !== 'undefined')){
} else {
predict_prostate.state.run_time.mockup_change = predict_prostate.state.run_time.make_topic(new cljs.core.Keyword(null,"active-mockup","active-mockup",-1957953013));
}
if((typeof predict_prostate !== 'undefined') && (typeof predict_prostate.state !== 'undefined') && (typeof predict_prostate.state.run_time !== 'undefined') && (typeof predict_prostate.state.run_time.force_recalculation !== 'undefined')){
} else {
predict_prostate.state.run_time.force_recalculation = predict_prostate.state.run_time.make_topic(new cljs.core.Keyword(null,"force-recalculation","force-recalculation",-1659872768));
}
predict_prostate.state.run_time.input_cursors = (function predict_prostate$state$run_time$input_cursors(){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(predict_prostate.state.run_time.rtdb),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input-config","input-config",-1105526956),new cljs.core.Keyword(null,"cursor","cursor",1011937484)], null));
});
predict_prostate.state.run_time.input_cursor = (function predict_prostate$state$run_time$input_cursor(key){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(predict_prostate.state.run_time.rtdb),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input-config","input-config",-1105526956),new cljs.core.Keyword(null,"cursor","cursor",1011937484),key], null));
});
predict_prostate.state.run_time.input_changes = (function predict_prostate$state$run_time$input_changes(){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(predict_prostate.state.run_time.rtdb),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input-config","input-config",-1105526956),new cljs.core.Keyword(null,"change","change",-1163046502)], null));
});
predict_prostate.state.run_time.input_change = (function predict_prostate$state$run_time$input_change(key){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(predict_prostate.state.run_time.rtdb),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input-config","input-config",-1105526956),new cljs.core.Keyword(null,"change","change",-1163046502),key], null));
});
predict_prostate.state.run_time.input_label = (function predict_prostate$state$run_time$input_label(key){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(predict_prostate.state.run_time.rtdb),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input-config","input-config",-1105526956),new cljs.core.Keyword(null,"label","label",1718410804),key], null));
});
predict_prostate.state.run_time.input_default = (function predict_prostate$state$run_time$input_default(key){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(predict_prostate.state.run_time.rtdb),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input-config","input-config",-1105526956),new cljs.core.Keyword(null,"default","default",-1987822328),key], null));
});
predict_prostate.state.run_time.input_widget = (function predict_prostate$state$run_time$input_widget(key){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(predict_prostate.state.run_time.rtdb),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input-config","input-config",-1105526956),new cljs.core.Keyword(null,"widget","widget",-853968943),key], null));
});
predict_prostate.state.run_time.input_access = (function predict_prostate$state$run_time$input_access(key){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(predict_prostate.state.run_time.rtdb),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input-config","input-config",-1105526956),new cljs.core.Keyword(null,"access","access",2027349272),key], null));
});
/**
 * This is the map of values that we feed into the model.
 *   Keys are unqualified (i.e. they don't refer to the selected treatment option).
 */
predict_prostate.state.run_time.input_map = (function predict_prostate$state$run_time$input_map(){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__48078){
var vec__48079 = p__48078;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48079,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48079,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.deref(v)], null);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__48082){
var vec__48083 = p__48082;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48083,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48083,(1),null);
var fexpr__48086 = clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(predict_prostate.state.run_time.on_screen_inputs_cursor),cljs.core.deref(predict_prostate.state.run_time.on_screen_treatments_cursor));
return (fexpr__48086.cljs$core$IFn$_invoke$arity$1 ? fexpr__48086.cljs$core$IFn$_invoke$arity$1(k) : fexpr__48086.call(null,k));
}),predict_prostate.state.run_time.input_cursors())));
});
predict_prostate.state.run_time.year_selected = (function predict_prostate$state$run_time$year_selected(){

return predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"result-year","result-year",1413238532));
});
predict_prostate.state.run_time.error_QMARK_ = (function predict_prostate$state$run_time$error_QMARK_(v){
return (((v == null)) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,"")) || (((typeof v === 'string') && ((!((clojure.string.index_of.cljs$core$IFn$_invoke$arity$2(v,":") == null)))))))));
});
predict_prostate.state.run_time.error_by_key_QMARK_ = (function predict_prostate$state$run_time$error_by_key_QMARK_(k){
return predict_prostate.state.run_time.error_QMARK_(cljs.core.deref(predict_prostate.state.run_time.input_cursor(k)));
});
/**
 * return true if the model can be calculated, else nil.
 *   im is the result of calling input-map
 */
predict_prostate.state.run_time.recalculate_model_QMARK_ = (function predict_prostate$state$run_time$recalculate_model_QMARK_(input_map){
return ((cljs.core.seq(cljs.core.deref(predict_prostate.state.run_time.on_screen_inputs_cursor))) && (cljs.core.every_QMARK_((function (k){
var and__4210__auto____$1 = (input_map.cljs$core$IFn$_invoke$arity$1 ? input_map.cljs$core$IFn$_invoke$arity$1(k) : input_map.call(null,k));
if(cljs.core.truth_(and__4210__auto____$1)){
return (!(predict_prostate.state.run_time.error_by_key_QMARK_(k)));
} else {
return and__4210__auto____$1;
}
}),cljs.core.deref(predict_prostate.state.run_time.on_screen_inputs_cursor))));
});

//# sourceMappingURL=predict_prostate.state.run_time.js.map
