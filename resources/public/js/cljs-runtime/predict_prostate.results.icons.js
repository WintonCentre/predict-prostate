goog.provide('predict_prostate.results.icons');
predict_prostate.results.icons.round = Math.round;
predict_prostate.results.icons.br_deaths_fill = "#fcc";
predict_prostate.results.icons.oth_deaths_fill = "#888";
predict_prostate.results.icons.set_default = (function predict_prostate$results$icons$set_default(key){

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (state){
var default_42599 = predict_prostate.state.config.get_input_default(predict_prostate.state.config.input_groups,key);
pubsub.feeds.publish(predict_prostate.state.run_time.input_change(key),default_42599);

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
return React.createElement("div",null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__4611__auto__ = (function predict_prostate$results$icons$iter__42400(s__42401){
return (new cljs.core.LazySeq(null,(function (){
var s__42401__$1 = s__42401;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__42401__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var y = cljs.core.first(xs__6308__auto__);
var iterys__4607__auto__ = ((function (s__42401__$1,y,xs__6308__auto__,temp__5753__auto__,cum_counts){
return (function predict_prostate$results$icons$iter__42400_$_iter__42403(s__42404){
return (new cljs.core.LazySeq(null,((function (s__42401__$1,y,xs__6308__auto__,temp__5753__auto__,cum_counts){
return (function (){
var s__42404__$1 = s__42404;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__42404__$1);
if(temp__5753__auto____$1){
var s__42404__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__42404__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__42404__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__42406 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__42405 = (0);
while(true){
if((i__42405 < size__4610__auto__)){
var x = cljs.core._nth(c__4609__auto__,i__42405);
var n = (x + ((10) * y));
var style = predict_prostate.results.icons.color_picker(fill_counts,cum_counts,n);
var shape = (cljs.core.truth_(new cljs.core.Keyword(null,"filled","filled",1908725116).cljs$core$IFn$_invoke$arity$1(style))?predict_prostate.components.primitives.pic:predict_prostate.components.primitives.pic_dead);
cljs.core.chunk_append(b__42406,sablono.interpreter.interpret(rum.core.with_key((function (){var G__42424 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"fill","fill",883462889).cljs$core$IFn$_invoke$arity$1(style),new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y], null);
return (shape.cljs$core$IFn$_invoke$arity$1 ? shape.cljs$core$IFn$_invoke$arity$1(G__42424) : shape.call(null,G__42424));
})(),n)));

var G__42612 = (i__42405 + (1));
i__42405 = G__42612;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__42406),predict_prostate$results$icons$iter__42400_$_iter__42403(cljs.core.chunk_rest(s__42404__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__42406),null);
}
} else {
var x = cljs.core.first(s__42404__$2);
var n = (x + ((10) * y));
var style = predict_prostate.results.icons.color_picker(fill_counts,cum_counts,n);
var shape = (cljs.core.truth_(new cljs.core.Keyword(null,"filled","filled",1908725116).cljs$core$IFn$_invoke$arity$1(style))?predict_prostate.components.primitives.pic:predict_prostate.components.primitives.pic_dead);
return cljs.core.cons(sablono.interpreter.interpret(rum.core.with_key((function (){var G__42460 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"fill","fill",883462889).cljs$core$IFn$_invoke$arity$1(style),new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y], null);
return (shape.cljs$core$IFn$_invoke$arity$1 ? shape.cljs$core$IFn$_invoke$arity$1(G__42460) : shape.call(null,G__42460));
})(),n)),predict_prostate$results$icons$iter__42400_$_iter__42403(cljs.core.rest(s__42404__$2)));
}
} else {
return null;
}
break;
}
});})(s__42401__$1,y,xs__6308__auto__,temp__5753__auto__,cum_counts))
,null,null));
});})(s__42401__$1,y,xs__6308__auto__,temp__5753__auto__,cum_counts))
;
var fs__4608__auto__ = cljs.core.seq(iterys__4607__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((10))));
if(fs__4608__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4608__auto__,predict_prostate$results$icons$iter__42400(cljs.core.rest(s__42401__$1)));
} else {
var G__42616 = cljs.core.rest(s__42401__$1);
s__42401__$1 = G__42616;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((10)));
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
if((n <= (1))){
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
var one_sum = (function (p1__42477_SHARP_,p2__42478_SHARP_){
return ((100) * ((1) - (p1__42477_SHARP_ + p2__42478_SHARP_)));
});
var radical_survival = cljs.core.map.cljs$core$IFn$_invoke$arity$3(one_sum,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(results,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"radical","radical",1159030213),new cljs.core.Keyword(null,"pred-PC-cum","pred-PC-cum",1965177836)], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(results,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"radical","radical",1159030213),new cljs.core.Keyword(null,"pred-NPC-cum","pred-NPC-cum",-1636287417)], null)));
var conservative_survival = cljs.core.map.cljs$core$IFn$_invoke$arity$3(one_sum,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(results,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"conservative","conservative",-1075714010),new cljs.core.Keyword(null,"pred-PC-cum","pred-PC-cum",1965177836)], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(results,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"conservative","conservative",-1075714010),new cljs.core.Keyword(null,"pred-NPC-cum","pred-NPC-cum",-1636287417)], null)));
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"title","title",636505583),"Overall Survival",new cljs.core.Keyword(null,"subtitle-over","subtitle-over",1867978156),"for men with prostate cancer, 5 and 10 years after diagnosis",new cljs.core.Keyword(null,"subtitle-under","subtitle-under",-1133908191),"years after diagnosis",new cljs.core.Keyword(null,"conservative-survival","conservative-survival",-852356338),conservative_survival,new cljs.core.Keyword(null,"radical-survival","radical-survival",-74207469),radical_survival,new cljs.core.Keyword(null,"radical-benefit","radical-benefit",1730049395),cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__42480_SHARP_,p2__42482_SHARP_){
return (p1__42480_SHARP_ - p2__42482_SHARP_);
}),radical_survival,conservative_survival),new cljs.core.Keyword(null,"dotted-orange","dotted-orange",-573056274),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__42486_SHARP_){
return ((100) * p1__42486_SHARP_);
}),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(results,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"conservative","conservative",-1075714010),new cljs.core.Keyword(null,"NPC-survival","NPC-survival",-1399930619)], null)))], null);
});
predict_prostate.results.icons.results_in_icons_STAR_ = rum.core.build_defc((function (p__42518){
var map__42519 = p__42518;
var map__42519__$1 = cljs.core.__destructure_map(map__42519);
var printable = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42519__$1,new cljs.core.Keyword(null,"printable","printable",-928999004));
var ttt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42519__$1,new cljs.core.Keyword(null,"ttt","ttt",1858561240));
var radical_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),rum.core.react(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"primary-rx","primary-rx",-1656848904))));
var data = predict_prostate.results.icons.extract_data(rum.core.react(predict_prostate.state.run_time.results_cursor),radical_QMARK_);
var years = rum.core.react(predict_prostate.state.run_time.input_cursor(new cljs.core.Keyword(null,"result-year","result-year",1413238532)));
var cs = (function (){var G__42521 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"conservative-survival","conservative-survival",-852356338).cljs$core$IFn$_invoke$arity$1(data),years);
return (predict_prostate.results.icons.round.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.icons.round.cljs$core$IFn$_invoke$arity$1(G__42521) : predict_prostate.results.icons.round.call(null,G__42521));
})();
var rs = ((radical_QMARK_)?(function (){var G__42525 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"radical-survival","radical-survival",-74207469).cljs$core$IFn$_invoke$arity$1(data),years);
return (predict_prostate.results.icons.round.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.icons.round.cljs$core$IFn$_invoke$arity$1(G__42525) : predict_prostate.results.icons.round.call(null,G__42525));
})():(0));
var benefit = ((radical_QMARK_)?(rs - cs):(0));
var pc_deaths = (function (){var G__42526 = ((cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"dotted-orange","dotted-orange",-573056274).cljs$core$IFn$_invoke$arity$1(data),years) - cs) - benefit);
return (predict_prostate.results.icons.round.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.icons.round.cljs$core$IFn$_invoke$arity$1(G__42526) : predict_prostate.results.icons.round.call(null,G__42526));
})();
var npc_deaths = ((((100) - pc_deaths) - benefit) - cs);
var fill_counts = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(predict_prostate.results.util.fill.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.util.fill.cljs$core$IFn$_invoke$arity$1((2)) : predict_prostate.results.util.fill.call(null,(2))),cs], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(predict_prostate.results.util.fill.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.util.fill.cljs$core$IFn$_invoke$arity$1((1)) : predict_prostate.results.util.fill.call(null,(1))),benefit], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [predict_prostate.results.icons.br_deaths_fill,pc_deaths], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [predict_prostate.results.icons.oth_deaths_fill,npc_deaths], null)], null);
var render_year = (function (year,data__$1){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".row",".row",-368374508),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clear","clear",1877104959),"both"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".col-sm-7",".col-sm-7",1613729537),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"display","display",242065432),"inline-block",new cljs.core.Keyword(null,"clear","clear",1877104959),"both",new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),"none",new cljs.core.Keyword(null,"height","height",1025178622),(260),new cljs.core.Keyword(null,"top","top",-1856271961),(-260)], null)], null),(predict_prostate.results.icons.placed_icons.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.icons.placed_icons.cljs$core$IFn$_invoke$arity$1(fill_counts) : predict_prostate.results.icons.placed_icons.call(null,fill_counts))], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".col-md-4.col-md-offset-1.screen-only",".col-md-4.col-md-offset-1.screen-only",1689609364),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),"35px",new cljs.core.Keyword(null,"position","position",-2011731912),"relative"], null)], null),(((npc_deaths > (0)))?new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"14px"], null)], null),(predict_prostate.components.primitives.open_icon.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.components.primitives.open_icon.cljs$core$IFn$_invoke$arity$1(predict_prostate.results.icons.oth_deaths_fill) : predict_prostate.components.primitives.open_icon.call(null,predict_prostate.results.icons.oth_deaths_fill))," ",npc_deaths," ",predict_prostate.results.icons.plural(npc_deaths,(function (){var G__42532 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("icons","leg-1s","icons/leg-1s",1912779132),"death due to other causes"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__42532) : ttt.call(null,G__42532));
})(),(function (){var G__42534 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("icons","leg-1p","icons/leg-1p",-1462386243),"deaths due to other causes"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__42534) : ttt.call(null,G__42534));
})())], null):null),(((pc_deaths > (0)))?new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"14px"], null)], null),(predict_prostate.components.primitives.open_icon.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.components.primitives.open_icon.cljs$core$IFn$_invoke$arity$1(predict_prostate.results.icons.br_deaths_fill) : predict_prostate.components.primitives.open_icon.call(null,predict_prostate.results.icons.br_deaths_fill))," ",pc_deaths," ",predict_prostate.results.icons.plural(pc_deaths,(function (){var G__42536 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("icons","leg-2s","icons/leg-2s",1587645875),"prostate cancer related death"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__42536) : ttt.call(null,G__42536));
})(),(function (){var G__42539 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("icons","leg-2p","icons/leg-2p",263439642),"prostate cancer related deaths"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__42539) : ttt.call(null,G__42539));
})())], null):null),(((benefit > (0)))?new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"14px"], null)], null),(function (){var G__42540 = (predict_prostate.results.util.fill.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.util.fill.cljs$core$IFn$_invoke$arity$1((1)) : predict_prostate.results.util.fill.call(null,(1)));
return (predict_prostate.components.primitives.dead_icon.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.components.primitives.dead_icon.cljs$core$IFn$_invoke$arity$1(G__42540) : predict_prostate.components.primitives.dead_icon.call(null,G__42540));
})()," ",benefit," ",predict_prostate.results.icons.plural(benefit,(function (){var G__42543 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("icons","leg-3s","icons/leg-3s",2093706343),"extra survivor due to radical treatment"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__42543) : ttt.call(null,G__42543));
})(),(function (){var G__42544 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("icons","leg-3p","icons/leg-3p",-1686268154),"extra survivors due to radical treatment"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__42544) : ttt.call(null,G__42544));
})())], null):null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"14px"], null)], null),(function (){var G__42545 = (predict_prostate.results.util.fill.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.util.fill.cljs$core$IFn$_invoke$arity$1((2)) : predict_prostate.results.util.fill.call(null,(2)));
return (predict_prostate.components.primitives.dead_icon.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.components.primitives.dead_icon.cljs$core$IFn$_invoke$arity$1(G__42545) : predict_prostate.components.primitives.dead_icon.call(null,G__42545));
})()," ",cs," ",predict_prostate.results.icons.plural(cs,(function (){var G__42547 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("icons","leg-4s","icons/leg-4s",-1721635751),"survivor with initial conservative management"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__42547) : ttt.call(null,G__42547));
})(),(function (){var G__42548 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("icons","leg-4p","icons/leg-4p",1308304951),"survivors with initial conservative management"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__42548) : ttt.call(null,G__42548));
})())], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clear","clear",1877104959),"both"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".col-sm-6.print-only",".col-sm-6.print-only",2137481395),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"top","top",-1856271961),"55px",new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"left","left",-399115937),(260)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"inline-block"], null)], null)], null),(((npc_deaths > (0)))?new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),(predict_prostate.components.primitives.open_icon.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.components.primitives.open_icon.cljs$core$IFn$_invoke$arity$1(predict_prostate.results.icons.oth_deaths_fill) : predict_prostate.components.primitives.open_icon.call(null,predict_prostate.results.icons.oth_deaths_fill))," ",npc_deaths," ",predict_prostate.results.icons.plural(npc_deaths,(function (){var G__42550 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("icons","leg-1s","icons/leg-1s",1912779132),"death due to other causes"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__42550) : ttt.call(null,G__42550));
})(),(function (){var G__42551 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("icons","leg-1p","icons/leg-1p",-1462386243),"deaths due to other causes"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__42551) : ttt.call(null,G__42551));
})())], null):null),(((pc_deaths > (0)))?new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),(predict_prostate.components.primitives.open_icon.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.components.primitives.open_icon.cljs$core$IFn$_invoke$arity$1(predict_prostate.results.icons.br_deaths_fill) : predict_prostate.components.primitives.open_icon.call(null,predict_prostate.results.icons.br_deaths_fill))," ",pc_deaths," ",predict_prostate.results.icons.plural(pc_deaths,(function (){var G__42554 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("icons","leg-2s","icons/leg-2s",1587645875),"prostate cancer related death"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__42554) : ttt.call(null,G__42554));
})(),(function (){var G__42555 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("icons","leg-2p","icons/leg-2p",263439642),"prostate cancer related deaths"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__42555) : ttt.call(null,G__42555));
})())], null):null),(((benefit > (0)))?new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),(function (){var G__42556 = (predict_prostate.results.util.fill.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.util.fill.cljs$core$IFn$_invoke$arity$1((1)) : predict_prostate.results.util.fill.call(null,(1)));
return (predict_prostate.components.primitives.dead_icon.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.components.primitives.dead_icon.cljs$core$IFn$_invoke$arity$1(G__42556) : predict_prostate.components.primitives.dead_icon.call(null,G__42556));
})()," ",benefit," ",predict_prostate.results.icons.plural(benefit,(function (){var G__42557 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("icons","leg-3s","icons/leg-3s",2093706343),"extra survivor due to radical treatment"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__42557) : ttt.call(null,G__42557));
})(),(function (){var G__42560 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("icons","leg-3p","icons/leg-3p",-1686268154),"extra survivors due to radical treatment"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__42560) : ttt.call(null,G__42560));
})())], null):null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),(function (){var G__42562 = (predict_prostate.results.util.fill.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.results.util.fill.cljs$core$IFn$_invoke$arity$1((2)) : predict_prostate.results.util.fill.call(null,(2)));
return (predict_prostate.components.primitives.dead_icon.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.components.primitives.dead_icon.cljs$core$IFn$_invoke$arity$1(G__42562) : predict_prostate.components.primitives.dead_icon.call(null,G__42562));
})()," ",cs," ",predict_prostate.results.icons.plural(cs,(function (){var G__42563 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("icons","leg-4s","icons/leg-4s",-1721635751),"survivor with initial conservative management"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__42563) : ttt.call(null,G__42563));
})(),(function (){var G__42564 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("icons","leg-4p","icons/leg-4p",1308304951),"survivors with initial conservative management"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__42564) : ttt.call(null,G__42564));
})())], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clear","clear",1877104959),"both"], null)], null)], null)], null)], null);
});
return React.createElement("div",null,React.createElement("div",null,React.createElement("div",({"style": ({"position": "relative"}), "className": "row"}),React.createElement("div",({"style": ({"marginTop": "15px", "fontSize": (16)}), "className": "col-xs-12 screen-only"}),sablono.interpreter.interpret((function (){var G__42576 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("icons","out-text1","icons/out-text1",-1172984618),"This display shows the outcomes for 100 men. These results are based on the inputs and treatments you selected"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__42576) : ttt.call(null,G__42576));
})())," ",(function (){var attrs42575 = (predict_prostate.components.button.year_picker.cljs$core$IFn$_invoke$arity$1 ? predict_prostate.components.button.year_picker.cljs$core$IFn$_invoke$arity$1(ttt) : predict_prostate.components.button.year_picker.call(null,ttt));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs42575))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["screen-only"], null)], null),attrs42575], 0))):({"className": "screen-only"})),((cljs.core.map_QMARK_(attrs42575))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs42575)], null)));
})(),React.createElement("span",({"style": ({"fontSize": (12)}), "className": "print-only"}),sablono.interpreter.interpret(years))," ",sablono.interpreter.interpret((function (){var G__42578 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("icons","out-text2","icons/out-text2",-1909152517),"years after diagnosis"], null);
return (ttt.cljs$core$IFn$_invoke$arity$1 ? ttt.cljs$core$IFn$_invoke$arity$1(G__42578) : ttt.call(null,G__42578));
})())),(function (){var attrs42574 = render_year(years,data);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs42574))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["col-xs-12"], null)], null),attrs42574], 0))):({"className": "col-xs-12"})),((cljs.core.map_QMARK_(attrs42574))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs42574)], null)));
})())),React.createElement("div",({"style": ({"clear": "both"})})," "));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"results-in-icons*");

//# sourceMappingURL=predict_prostate.results.icons.js.map
