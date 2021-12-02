goog.provide('predict_prostate.results.icons');
predict_prostate.results.icons.round = Math.round;
predict_prostate.results.icons.br_deaths_fill = "#fcc";
predict_prostate.results.icons.oth_deaths_fill = "#888";
predict_prostate.results.icons.set_default = (function predict_prostate$results$icons$set_default(key){

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (state){
var default_84522 = predict_prostate.state.config.get_input_default(predict_prostate.state.config.input_groups,key);
pubsub.feeds.publish(predict_prostate.state.run_time.input_change(key),default_84522);

return state;
})], null);
});
predict_prostate.results.icons.color_picker = (function predict_prostate$results$icons$color_picker(fill_counts,cum_counts,n){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fill","fill",883462889),(((n < (cum_counts.cljs$core$IFn$_invoke$arity$1 ? cum_counts.cljs$core$IFn$_invoke$arity$1((0)) : cum_counts.call(null,(0)))))?cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(fill_counts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)):(((n < (cum_counts.cljs$core$IFn$_invoke$arity$1 ? cum_counts.cljs$core$IFn$_invoke$arity$1((1)) : cum_counts.call(null,(1)))))?cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(fill_counts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)):(((n < (cum_counts.cljs$core$IFn$_invoke$arity$1 ? cum_counts.cljs$core$IFn$_invoke$arity$1((2)) : cum_counts.call(null,(2)))))?cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(fill_counts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0)], null)):cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(fill_counts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(0)], null))
))),new cljs.core.Keyword(null,"filled","filled",1908725116),(n < (cum_counts.cljs$core$IFn$_invoke$arity$1 ? cum_counts.cljs$core$IFn$_invoke$arity$1((1)) : cum_counts.call(null,(1))))], null);
});
/**
 * Place a square of icons with these colours and counts.
 *   Fill-counts looks like: [[#0000aa 82] [#00afef 3] [#fcc 3] [#888 12]].
 *   Counts should sum to 100.
 */
predict_prostate.results.icons.placed_icons = rum.core.build_defc((function (fill_counts){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((100),cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,fill_counts)))){
} else {
throw (new Error("Assert failed: (= 100 (reduce + (mapv second fill-counts)))"));
}

var cum_counts = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.reductions.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,fill_counts)));
return React.createElement("div",null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function predict_prostate$results$icons$iter__84342(s__84343){
return (new cljs.core.LazySeq(null,(function (){
var s__84343__$1 = s__84343;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__84343__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var y = cljs.core.first(xs__6292__auto__);
var iterys__4525__auto__ = ((function (s__84343__$1,y,xs__6292__auto__,temp__5735__auto__,cum_counts){
return (function predict_prostate$results$icons$iter__84342_$_iter__84344(s__84345){
return (new cljs.core.LazySeq(null,((function (s__84343__$1,y,xs__6292__auto__,temp__5735__auto__,cum_counts){
return (function (){
var s__84345__$1 = s__84345;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__84345__$1);
if(temp__5735__auto____$1){
var s__84345__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__84345__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__84345__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__84347 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__84346 = (0);
while(true){
if((i__84346 < size__4528__auto__)){
var x = cljs.core._nth(c__4527__auto__,i__84346);
var n = (x + ((10) * y));
var style = predict_prostate.results.icons.color_picker(fill_counts,cum_counts,n);
var shape = (cljs.core.truth_(new cljs.core.Keyword(null,"filled","filled",1908725116).cljs$core$IFn$_invoke$arity$1(style))?predict_prostate.components.primitives.pic:predict_prostate.components.primitives.pic_dead);
cljs.core.chunk_append(b__84347,sablono.interpreter.interpret(rum.core.with_key((function (){var G__84372 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"fill","fill",883462889).cljs$core$IFn$_invoke$arity$1(style),new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y], null);
return (shape.cljs$core$IFn$_invoke$arity$1 ? shape.cljs$core$IFn$_invoke$arity$1(G__84372) : shape.call(null,G__84372));
})(),n)));

var G__84546 = (i__84346 + (1));
i__84346 = G__84546;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__84347),predict_prostate$results$icons$iter__84342_$_iter__84344(cljs.core.chunk_rest(s__84345__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__84347),null);
}
} else {
var x = cljs.core.first(s__84345__$2);
var n = (x + ((10) * y));
var style = predict_prostate.results.icons.color_picker(fill_counts,cum_counts,n);
var shape = (cljs.core.truth_(new cljs.core.Keyword(null,"filled","filled",1908725116).cljs$core$IFn$_invoke$arity$1(style))?predict_prostate.components.primitives.pic:predict_prostate.components.primitives.pic_dead);
return cljs.core.cons(sablono.interpreter.interpret(rum.core.with_key((function (){var G__84375 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"fill","fill",883462889).cljs$core$IFn$_invoke$arity$1(style),new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y], null);
return (shape.cljs$core$IFn$_invoke$arity$1 ? shape.cljs$core$IFn$_invoke$arity$1(G__84375) : shape.call(null,G__84375));
})(),n)),predict_prostate$results$icons$iter__84342_$_iter__84344(cljs.core.rest(s__84345__$2)));
}
} else {
return null;
}
break;
}
});})(s__84343__$1,y,xs__6292__auto__,temp__5735__auto__,cum_counts))
,null,null));
});})(s__84343__$1,y,xs__6292__auto__,temp__5735__auto__,cum_counts))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((10))));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,predict_prostate$results$icons$iter__84342(cljs.core.rest(s__84343__$1)));
} else {
var G__84556 = cljs.core.rest(s__84343__$1);
s__84343__$1 = G__84556;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((10)));
})()));
}),null,"placed-icons");
predict_prostate.results.icons.add_s = (function predict_prostate$results$icons$add_s(n){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,(1))){
return "";
} else {
return "s";
}
});
predict_prostate.results.icons.plural = (function predict_prostate$results$icons$plural(n,s,p){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,(1))){
return s;
} else {
return p;
}
});
/**
 * Different models use different treatment widgets, so we need to use these to react to the correct
 *   treatments and lookup the appropriate result-data.
 */
predict_prostate.results.icons.extract_data = (function predict_prostate$results$icons$extract_data(results,radical_QMARK_){
var one_sum = (function (p1__84392_SHARP_,p2__84393_SHARP_){
return ((100) * ((1) - (p1__84392_SHARP_ + p2__84393_SHARP_)));
});
var radical_survival = cljs.core.map.cljs$core$IFn$_invoke$arity$3(one_sum,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(results,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"radical","radical",1159030213),new cljs.core.Keyword(null,"pred-PC-cum","pred-PC-cum",1965177836)], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(results,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"radical","radical",1159030213),new cljs.core.Keyword(null,"pred-NPC-cum","pred-NPC-cum",-1636287417)], null)));
var conservative_survival = cljs.core.map.cljs$core$IFn$_invoke$arity$3(one_sum,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(results,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"conservative","conservative",-1075714010),new cljs.core.Keyword(null,"pred-PC-cum","pred-PC-cum",1965177836)], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(results,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"conservative","conservative",-1075714010),new cljs.core.Keyword(null,"pred-NPC-cum","pred-NPC-cum",-1636287417)], null)));
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"title","title",636505583),"Overall Survival",new cljs.core.Keyword(null,"subtitle-over","subtitle-over",1867978156),"for men with prostate cancer, 5 and 10 years after diagnosis",new cljs.core.Keyword(null,"subtitle-under","subtitle-under",-1133908191),"years after diagnosis",new cljs.core.Keyword(null,"conservative-survival","conservative-survival",-852356338),conservative_survival,new cljs.core.Keyword(null,"radical-survival","radical-survival",-74207469),radical_survival,new cljs.core.Keyword(null,"radical-benefit","radical-benefit",1730049395),cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__84394_SHARP_,p2__84395_SHARP_){
return (p1__84394_SHARP_ - p2__84395_SHARP_);
}),radical_survival,conservative_survival),new cljs.core.Keyword(null,"dotted-orange","dotted-orange",-573056274),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__84396_SHARP_){
return ((100) * p1__84396_SHARP_);
}),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(results,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"conservative","conservative",-1075714010),new cljs.core.Keyword(null,"NPC-survival","NPC-survival",-1399930619)], null)))], null);
});
predict_prostate.results.icons.results_in_icons_STAR_ = rum.core.build_defc((function (p__84437){
var map__84439 = p__84437;
var map__84439__$1 = (((((!((map__84439 == null))))?(((((map__84439.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__84439.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__84439):map__84439);
var printable = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84439__$1,new cljs.core.Keyword(null,"printable","printable",-928999004));
var ttt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84439__$1,new cljs.core.Keyword(null,"ttt","ttt",1858561240));
var radical_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),rum.core.react(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"primary-rx","primary-rx",-1656848904))));
var data = predict_prostate.results.icons.extract_data(rum.core.react(predict_prostate.state.run_time.results_cursor),radical_QMARK_);
var years = rum.core.react(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"result-year","result-year",1413238532)));
var cs = (function (){var G__84455 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"conservative-survival","conservative-survival",-852356338).cljs$core$IFn$_invoke$arity$1(data),years);
return (predict_prostate.results.icons.round.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.icons.round.cljs$core$IFn$_invoke$arity$1(G__84455) : predict_prostate.results.icons.round.call(null,G__84455));
})();
var rs = ((radical_QMARK_)?(function (){var G__84457 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"radical-survival","radical-survival",-74207469).cljs$core$IFn$_invoke$arity$1(data),years);
return (predict_prostate.results.icons.round.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.icons.round.cljs$core$IFn$_invoke$arity$1(G__84457) : predict_prostate.results.icons.round.call(null,G__84457));
})():(0));
var benefit = ((radical_QMARK_)?(rs - cs):(0));
var pc_deaths = (function (){var G__84462 = ((cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"dotted-orange","dotted-orange",-573056274).cljs$core$IFn$_invoke$arity$1(data),years) - cs) - benefit);
return (predict_prostate.results.icons.round.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.icons.round.cljs$core$IFn$_invoke$arity$1(G__84462) : predict_prostate.results.icons.round.call(null,G__84462));
})();
var npc_deaths = ((((100) - pc_deaths) - benefit) - cs);
var fill_counts = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(predict_prostate.results.util.fill.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.util.fill.cljs$core$IFn$_invoke$arity$1((2)) : predict_prostate.results.util.fill.call(null,(2))),cs], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(predict_prostate.results.util.fill.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.util.fill.cljs$core$IFn$_invoke$arity$1((1)) : predict_prostate.results.util.fill.call(null,(1))),benefit], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [predict_prostate.results.icons.br_deaths_fill,pc_deaths], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [predict_prostate.results.icons.oth_deaths_fill,npc_deaths], null)], null);
var render_year = (function (year,data__$1){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".row",".row",-368374508),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clear","clear",1877104959),"both"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".col-sm-7",".col-sm-7",1613729537),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"display","display",242065432),"inline-block",new cljs.core.Keyword(null,"clear","clear",1877104959),"both",new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),"none",new cljs.core.Keyword(null,"height","height",1025178622),(260),new cljs.core.Keyword(null,"top","top",-1856271961),(-260)], null)], null),(predict_prostate.results.icons.placed_icons.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.icons.placed_icons.cljs$core$IFn$_invoke$arity$1(fill_counts) : predict_prostate.results.icons.placed_icons.call(null,fill_counts))], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".col-md-4.col-md-offset-1.screen-only",".col-md-4.col-md-offset-1.screen-only",1689609364),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),"35px",new cljs.core.Keyword(null,"position","position",-2011731912),"relative"], null)], null),(((npc_deaths > (0)))?new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"14px"], null)], null),(predict_prostate.components.primitives.open_icon.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.components.primitives.open_icon.cljs$core$IFn$_invoke$arity$1(predict_prostate.results.icons.oth_deaths_fill) : predict_prostate.components.primitives.open_icon.call(null,predict_prostate.results.icons.oth_deaths_fill))," ",npc_deaths," ",predict_prostate.results.icons.plural(npc_deaths,(function (){var G__84465 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("icons","leg-1s","icons/leg-1s",1912779132),"death due to other causes"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__84465) : ttt.call(null,G__84465));
})(),(function (){var G__84466 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("icons","leg-1p","icons/leg-1p",-1462386243),"deaths due to other causes"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__84466) : ttt.call(null,G__84466));
})())], null):null),(((pc_deaths > (0)))?new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"14px"], null)], null),(predict_prostate.components.primitives.open_icon.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.components.primitives.open_icon.cljs$core$IFn$_invoke$arity$1(predict_prostate.results.icons.br_deaths_fill) : predict_prostate.components.primitives.open_icon.call(null,predict_prostate.results.icons.br_deaths_fill))," ",pc_deaths," ",predict_prostate.results.icons.plural(pc_deaths,(function (){var G__84468 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("icons","leg-2s","icons/leg-2s",1587645875),"prostate cancer related death"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__84468) : ttt.call(null,G__84468));
})(),(function (){var G__84469 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("icons","leg-2p","icons/leg-2p",263439642),"prostate cancer related deaths"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__84469) : ttt.call(null,G__84469));
})())], null):null),(((benefit > (0)))?new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"14px"], null)], null),(function (){var G__84470 = (predict_prostate.results.util.fill.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.util.fill.cljs$core$IFn$_invoke$arity$1((1)) : predict_prostate.results.util.fill.call(null,(1)));
return (predict_prostate.components.primitives.dead_icon.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.components.primitives.dead_icon.cljs$core$IFn$_invoke$arity$1(G__84470) : predict_prostate.components.primitives.dead_icon.call(null,G__84470));
})()," ",benefit," ",predict_prostate.results.icons.plural(benefit,(function (){var G__84471 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("icons","leg-3s","icons/leg-3s",2093706343),"extra survivor due to radical treatment"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__84471) : ttt.call(null,G__84471));
})(),(function (){var G__84472 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("icons","leg-3p","icons/leg-3p",-1686268154),"extra survivors due to radical treatment"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__84472) : ttt.call(null,G__84472));
})())], null):null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"14px"], null)], null),(function (){var G__84473 = (predict_prostate.results.util.fill.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.util.fill.cljs$core$IFn$_invoke$arity$1((2)) : predict_prostate.results.util.fill.call(null,(2)));
return (predict_prostate.components.primitives.dead_icon.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.components.primitives.dead_icon.cljs$core$IFn$_invoke$arity$1(G__84473) : predict_prostate.components.primitives.dead_icon.call(null,G__84473));
})()," ",cs," ",predict_prostate.results.icons.plural(cs,(function (){var G__84474 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("icons","leg-4s","icons/leg-4s",-1721635751),"survivor with initial conservative management"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__84474) : ttt.call(null,G__84474));
})(),(function (){var G__84475 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("icons","leg-4p","icons/leg-4p",1308304951),"survivors with initial conservative management"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__84475) : ttt.call(null,G__84475));
})())], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clear","clear",1877104959),"both"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".col-sm-6.print-only",".col-sm-6.print-only",2137481395),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"top","top",-1856271961),"55px",new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"left","left",-399115937),(260)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"inline-block"], null)], null)], null),(((npc_deaths > (0)))?new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),(predict_prostate.components.primitives.open_icon.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.components.primitives.open_icon.cljs$core$IFn$_invoke$arity$1(predict_prostate.results.icons.oth_deaths_fill) : predict_prostate.components.primitives.open_icon.call(null,predict_prostate.results.icons.oth_deaths_fill))," ",npc_deaths," ",predict_prostate.results.icons.plural(npc_deaths,(function (){var G__84476 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("icons","leg-1s","icons/leg-1s",1912779132),"death due to other causes"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__84476) : ttt.call(null,G__84476));
})(),(function (){var G__84477 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("icons","leg-1p","icons/leg-1p",-1462386243),"deaths due to other causes"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__84477) : ttt.call(null,G__84477));
})())], null):null),(((pc_deaths > (0)))?new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),(predict_prostate.components.primitives.open_icon.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.components.primitives.open_icon.cljs$core$IFn$_invoke$arity$1(predict_prostate.results.icons.br_deaths_fill) : predict_prostate.components.primitives.open_icon.call(null,predict_prostate.results.icons.br_deaths_fill))," ",pc_deaths," ",predict_prostate.results.icons.plural(pc_deaths,(function (){var G__84479 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("icons","leg-2s","icons/leg-2s",1587645875),"prostate cancer related death"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__84479) : ttt.call(null,G__84479));
})(),(function (){var G__84481 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("icons","leg-2p","icons/leg-2p",263439642),"prostate cancer related deaths"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__84481) : ttt.call(null,G__84481));
})())], null):null),(((benefit > (0)))?new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),(function (){var G__84483 = (predict_prostate.results.util.fill.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.util.fill.cljs$core$IFn$_invoke$arity$1((1)) : predict_prostate.results.util.fill.call(null,(1)));
return (predict_prostate.components.primitives.dead_icon.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.components.primitives.dead_icon.cljs$core$IFn$_invoke$arity$1(G__84483) : predict_prostate.components.primitives.dead_icon.call(null,G__84483));
})()," ",benefit," ",predict_prostate.results.icons.plural(benefit,(function (){var G__84484 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("icons","leg-3s","icons/leg-3s",2093706343),"extra survivor due to radical treatment"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__84484) : ttt.call(null,G__84484));
})(),(function (){var G__84485 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("icons","leg-3p","icons/leg-3p",-1686268154),"extra survivors due to radical treatment"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__84485) : ttt.call(null,G__84485));
})())], null):null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),(function (){var G__84486 = (predict_prostate.results.util.fill.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.util.fill.cljs$core$IFn$_invoke$arity$1((2)) : predict_prostate.results.util.fill.call(null,(2)));
return (predict_prostate.components.primitives.dead_icon.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.components.primitives.dead_icon.cljs$core$IFn$_invoke$arity$1(G__84486) : predict_prostate.components.primitives.dead_icon.call(null,G__84486));
})()," ",cs," ",predict_prostate.results.icons.plural(cs,(function (){var G__84487 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("icons","leg-4s","icons/leg-4s",-1721635751),"survivor with initial conservative management"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__84487) : ttt.call(null,G__84487));
})(),(function (){var G__84488 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("icons","leg-4p","icons/leg-4p",1308304951),"survivors with initial conservative management"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__84488) : ttt.call(null,G__84488));
})())], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clear","clear",1877104959),"both"], null)], null)], null)], null)], null);
});
return React.createElement("div",null,React.createElement("div",null,React.createElement("div",({"style": ({"position": "relative"}), "className": "row"}),React.createElement("div",({"style": ({"marginTop": "15px", "fontSize": (16)}), "className": "col-xs-12 screen-only"}),sablono.interpreter.interpret((function (){var G__84502 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("icons","out-text1","icons/out-text1",-1172984618),"This display shows the outcomes for 100 men. These results are based on the inputs and treatments you selected"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__84502) : ttt.call(null,G__84502));
})())," ",(function (){var attrs84501 = (predict_prostate.components.button.year_picker.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.components.button.year_picker.cljs$core$IFn$_invoke$arity$1(ttt) : predict_prostate.components.button.year_picker.call(null,ttt));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs84501))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["screen-only"], null)], null),attrs84501], 0))):({"className": "screen-only"})),((cljs.core.map_QMARK_(attrs84501))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs84501)], null)));
})(),React.createElement("span",({"style": ({"fontSize": (12)}), "className": "print-only"}),sablono.interpreter.interpret(years))," ",sablono.interpreter.interpret((function (){var G__84503 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("icons","out-text2","icons/out-text2",-1909152517),"years after diagnosis"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__84503) : ttt.call(null,G__84503));
})())),(function (){var attrs84499 = render_year(years,data);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs84499))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["col-xs-12"], null)], null),attrs84499], 0))):({"className": "col-xs-12"})),((cljs.core.map_QMARK_(attrs84499))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs84499)], null)));
})())),React.createElement("div",({"style": ({"clear": "both"})})," "));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"results-in-icons*");

//# sourceMappingURL=predict_prostate.results.icons.js.map
