goog.provide('svg.axis');
svg.axis.default_axis_color = "#888";
svg.axis.default_axis_style = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"axis","axis",-1215390822),"axis--G__47329"], null);

cljs_css_modules.runtime.inject_style_BANG_(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(garden.core.css,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [".axis--G__47329",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"0.15ex",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"12pt"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["line",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),svg.axis.default_axis_color], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [".tick",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["line",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),svg.axis.default_axis_color], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),svg.axis.default_axis_color], null)], null)], null)], null)], null)),"svg.axis","default-axis-style");
svg.axis.axisBottom = rum.core.build_defc((function (p__47346){
var map__47351 = p__47346;
var map__47351__$1 = (((((!((map__47351 == null))))?(((((map__47351.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47351.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47351):map__47351);
var scale = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__47351__$1,new cljs.core.Keyword(null,"scale","scale",-230427353),svg.scales.__GT_Identity(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),(10)));
var ticks = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__47351__$1,new cljs.core.Keyword(null,"ticks","ticks",-406190313),cljs.core.range.cljs$core$IFn$_invoke$arity$3((0),(1),0.1));
var format_specifier = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47351__$1,new cljs.core.Keyword(null,"format-specifier","format-specifier",1758610918));
var styles = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__47351__$1,new cljs.core.Keyword(null,"styles","styles",1954480375),svg.axis.default_axis_style);
var vec__47355 = svg.scales.in$(scale);
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47355,(0),null);
var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47355,(1),null);
var x = svg.scales.i__GT_o(scale);
var specifier = (((format_specifier == null))?svg.scales.tick_format_specifier(scale):format_specifier);
return React.createElement("g",({"key": "axis-b", "className": new cljs.core.Keyword(null,"axis","axis",-1215390822).cljs$core$IFn$_invoke$arity$1(styles)}),React.createElement("line",({"key": "X", "x1": (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(x1) : x.call(null,x1)), "y1": (0), "x2": (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(x2) : x.call(null,x2)), "y2": (0)})),cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function svg$axis$iter__47358(s__47359){
return (new cljs.core.LazySeq(null,(function (){
var s__47359__$1 = s__47359;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__47359__$1);
if(temp__5735__auto__){
var s__47359__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__47359__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__47359__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__47361 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__47360 = (0);
while(true){
if((i__47360 < size__4528__auto__)){
var tick = cljs.core._nth(c__4527__auto__,i__47360);
cljs.core.chunk_append(b__47361,React.createElement("g",({"key": cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("K"), "className": "tick"}),React.createElement("line",({"key": (1), "x1": (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(tick) : x.call(null,tick)), "y1": (0), "x2": (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(tick) : x.call(null,tick)), "y2": "0.5ex"})),React.createElement("text",({"key": (2), "x": (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(tick) : x.call(null,tick)), "dx": (0), "dy": "2.2ex", "textAnchor": "middle"}),sablono.interpreter.interpret(cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,specifier,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tick], 0))))));

var G__47471 = (i__47360 + (1));
i__47360 = G__47471;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__47361),svg$axis$iter__47358(cljs.core.chunk_rest(s__47359__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__47361),null);
}
} else {
var tick = cljs.core.first(s__47359__$2);
return cljs.core.cons(React.createElement("g",({"key": cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("K"), "className": "tick"}),React.createElement("line",({"key": (1), "x1": (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(tick) : x.call(null,tick)), "y1": (0), "x2": (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(tick) : x.call(null,tick)), "y2": "0.5ex"})),React.createElement("text",({"key": (2), "x": (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(tick) : x.call(null,tick)), "dx": (0), "dy": "2.2ex", "textAnchor": "middle"}),sablono.interpreter.interpret(cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,specifier,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tick], 0))))),svg$axis$iter__47358(cljs.core.rest(s__47359__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(ticks);
})()));
}),null,"axisBottom");
svg.axis.axisTop = rum.core.build_defc((function (p__47369){
var map__47370 = p__47369;
var map__47370__$1 = (((((!((map__47370 == null))))?(((((map__47370.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47370.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47370):map__47370);
var scale = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__47370__$1,new cljs.core.Keyword(null,"scale","scale",-230427353),svg.scales.__GT_Identity(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),(10)));
var ticks = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__47370__$1,new cljs.core.Keyword(null,"ticks","ticks",-406190313),cljs.core.range.cljs$core$IFn$_invoke$arity$3((0),(1),0.1));
var format_specifier = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47370__$1,new cljs.core.Keyword(null,"format-specifier","format-specifier",1758610918));
var styles = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__47370__$1,new cljs.core.Keyword(null,"styles","styles",1954480375),svg.axis.default_axis_style);
var vec__47383 = svg.scales.in$(scale);
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47383,(0),null);
var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47383,(1),null);
var x = svg.scales.i__GT_o(scale);
var specifier = (((format_specifier == null))?svg.scales.tick_format_specifier(scale):format_specifier);
return React.createElement("g",({"key": "axis-b", "className": new cljs.core.Keyword(null,"axis","axis",-1215390822).cljs$core$IFn$_invoke$arity$1(styles)}),React.createElement("line",({"key": "X", "x1": (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(x1) : x.call(null,x1)), "y1": (0), "x2": (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(x2) : x.call(null,x2)), "y2": (0)})),cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function svg$axis$iter__47389(s__47390){
return (new cljs.core.LazySeq(null,(function (){
var s__47390__$1 = s__47390;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__47390__$1);
if(temp__5735__auto__){
var s__47390__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__47390__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__47390__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__47392 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__47391 = (0);
while(true){
if((i__47391 < size__4528__auto__)){
var tick = cljs.core._nth(c__4527__auto__,i__47391);
cljs.core.chunk_append(b__47392,React.createElement("g",({"key": cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("K"), "className": "tick"}),React.createElement("line",({"key": (1), "x1": (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(tick) : x.call(null,tick)), "y1": (0), "x2": (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(tick) : x.call(null,tick)), "y2": "-0.5ex"})),React.createElement("text",({"key": (2), "x": (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(tick) : x.call(null,tick)), "dx": (0), "dy": "-1ex", "textAnchor": "middle"}),sablono.interpreter.interpret(cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,specifier,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tick], 0))))));

var G__47474 = (i__47391 + (1));
i__47391 = G__47474;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__47392),svg$axis$iter__47389(cljs.core.chunk_rest(s__47390__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__47392),null);
}
} else {
var tick = cljs.core.first(s__47390__$2);
return cljs.core.cons(React.createElement("g",({"key": cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("K"), "className": "tick"}),React.createElement("line",({"key": (1), "x1": (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(tick) : x.call(null,tick)), "y1": (0), "x2": (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(tick) : x.call(null,tick)), "y2": "-0.5ex"})),React.createElement("text",({"key": (2), "x": (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(tick) : x.call(null,tick)), "dx": (0), "dy": "-1ex", "textAnchor": "middle"}),sablono.interpreter.interpret(cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,specifier,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tick], 0))))),svg$axis$iter__47389(cljs.core.rest(s__47390__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(ticks);
})()));
}),null,"axisTop");
svg.axis.axisLeft = rum.core.build_defc((function (p__47433){
var map__47434 = p__47433;
var map__47434__$1 = (((((!((map__47434 == null))))?(((((map__47434.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47434.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47434):map__47434);
var scale = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__47434__$1,new cljs.core.Keyword(null,"scale","scale",-230427353),svg.scales.__GT_Identity(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),(10)));
var ticks = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__47434__$1,new cljs.core.Keyword(null,"ticks","ticks",-406190313),cljs.core.range.cljs$core$IFn$_invoke$arity$3((0),(1),0.1));
var format_specifier = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47434__$1,new cljs.core.Keyword(null,"format-specifier","format-specifier",1758610918));
var styles = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__47434__$1,new cljs.core.Keyword(null,"styles","styles",1954480375),svg.axis.default_axis_style);
var vec__47436 = svg.scales.in$(scale);
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47436,(0),null);
var y2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47436,(1),null);
var y = svg.scales.i__GT_o(scale);
var specifier = (((format_specifier == null))?svg.scales.tick_format_specifier(scale):format_specifier);
return React.createElement("g",({"key": "axis-l", "className": new cljs.core.Keyword(null,"axis","axis",-1215390822).cljs$core$IFn$_invoke$arity$1(styles)}),React.createElement("line",({"key": "Y", "x1": (0), "y1": (y.cljs$core$IFn$_invoke$arity$1 ? y.cljs$core$IFn$_invoke$arity$1(y1) : y.call(null,y1)), "x2": (0), "y2": (y.cljs$core$IFn$_invoke$arity$1 ? y.cljs$core$IFn$_invoke$arity$1(y2) : y.call(null,y2))})),cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function svg$axis$iter__47440(s__47441){
return (new cljs.core.LazySeq(null,(function (){
var s__47441__$1 = s__47441;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__47441__$1);
if(temp__5735__auto__){
var s__47441__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__47441__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__47441__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__47443 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__47442 = (0);
while(true){
if((i__47442 < size__4528__auto__)){
var tick = cljs.core._nth(c__4527__auto__,i__47442);
cljs.core.chunk_append(b__47443,React.createElement("g",({"key": cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("K"), "className": "tick"}),React.createElement("text",({"key": (2), "x": (0), "y": (y.cljs$core$IFn$_invoke$arity$1 ? y.cljs$core$IFn$_invoke$arity$1(tick) : y.call(null,tick)), "dx": "-0.7ex", "dy": "0.5ex", "textAnchor": "end"}),sablono.interpreter.interpret(cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,specifier,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tick], 0)))),React.createElement("line",({"key": (1), "x1": (0), "y1": (y.cljs$core$IFn$_invoke$arity$1 ? y.cljs$core$IFn$_invoke$arity$1(tick) : y.call(null,tick)), "x2": "-0.5ex", "y2": (y.cljs$core$IFn$_invoke$arity$1 ? y.cljs$core$IFn$_invoke$arity$1(tick) : y.call(null,tick))}))));

var G__47475 = (i__47442 + (1));
i__47442 = G__47475;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__47443),svg$axis$iter__47440(cljs.core.chunk_rest(s__47441__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__47443),null);
}
} else {
var tick = cljs.core.first(s__47441__$2);
return cljs.core.cons(React.createElement("g",({"key": cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("K"), "className": "tick"}),React.createElement("text",({"key": (2), "x": (0), "y": (y.cljs$core$IFn$_invoke$arity$1 ? y.cljs$core$IFn$_invoke$arity$1(tick) : y.call(null,tick)), "dx": "-0.7ex", "dy": "0.5ex", "textAnchor": "end"}),sablono.interpreter.interpret(cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,specifier,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tick], 0)))),React.createElement("line",({"key": (1), "x1": (0), "y1": (y.cljs$core$IFn$_invoke$arity$1 ? y.cljs$core$IFn$_invoke$arity$1(tick) : y.call(null,tick)), "x2": "-0.5ex", "y2": (y.cljs$core$IFn$_invoke$arity$1 ? y.cljs$core$IFn$_invoke$arity$1(tick) : y.call(null,tick))}))),svg$axis$iter__47440(cljs.core.rest(s__47441__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(ticks);
})()));
}),null,"axisLeft");
svg.axis.axisRight = rum.core.build_defc((function (p__47453){
var map__47455 = p__47453;
var map__47455__$1 = (((((!((map__47455 == null))))?(((((map__47455.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47455.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47455):map__47455);
var scale = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__47455__$1,new cljs.core.Keyword(null,"scale","scale",-230427353),svg.scales.__GT_Identity(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),(10)));
var ticks = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__47455__$1,new cljs.core.Keyword(null,"ticks","ticks",-406190313),cljs.core.range.cljs$core$IFn$_invoke$arity$3((0),(1),0.1));
var format_specifier = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47455__$1,new cljs.core.Keyword(null,"format-specifier","format-specifier",1758610918));
var styles = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__47455__$1,new cljs.core.Keyword(null,"styles","styles",1954480375),svg.axis.default_axis_style);
var vec__47460 = svg.scales.in$(scale);
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47460,(0),null);
var y2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47460,(1),null);
var y = svg.scales.i__GT_o(scale);
var specifier = (((format_specifier == null))?svg.scales.tick_format_specifier(scale):format_specifier);
return React.createElement("g",({"key": "axis-l", "className": new cljs.core.Keyword(null,"axis","axis",-1215390822).cljs$core$IFn$_invoke$arity$1(styles)}),React.createElement("line",({"key": "Y", "x1": (0), "y1": (y.cljs$core$IFn$_invoke$arity$1 ? y.cljs$core$IFn$_invoke$arity$1(y1) : y.call(null,y1)), "x2": (0), "y2": (y.cljs$core$IFn$_invoke$arity$1 ? y.cljs$core$IFn$_invoke$arity$1(y2) : y.call(null,y2))})),cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function svg$axis$iter__47463(s__47464){
return (new cljs.core.LazySeq(null,(function (){
var s__47464__$1 = s__47464;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__47464__$1);
if(temp__5735__auto__){
var s__47464__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__47464__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__47464__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__47466 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__47465 = (0);
while(true){
if((i__47465 < size__4528__auto__)){
var tick = cljs.core._nth(c__4527__auto__,i__47465);
cljs.core.chunk_append(b__47466,React.createElement("g",({"key": cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("K"), "className": "tick"}),React.createElement("text",({"key": (2), "x": (0), "y": (y.cljs$core$IFn$_invoke$arity$1 ? y.cljs$core$IFn$_invoke$arity$1(tick) : y.call(null,tick)), "dx": "0.7ex", "dy": "0.5ex", "textAnchor": "start"}),sablono.interpreter.interpret(cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,specifier,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tick], 0)))),React.createElement("line",({"key": (1), "x1": (0), "y1": (y.cljs$core$IFn$_invoke$arity$1 ? y.cljs$core$IFn$_invoke$arity$1(tick) : y.call(null,tick)), "x2": "0.5ex", "y2": (y.cljs$core$IFn$_invoke$arity$1 ? y.cljs$core$IFn$_invoke$arity$1(tick) : y.call(null,tick))}))));

var G__47481 = (i__47465 + (1));
i__47465 = G__47481;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__47466),svg$axis$iter__47463(cljs.core.chunk_rest(s__47464__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__47466),null);
}
} else {
var tick = cljs.core.first(s__47464__$2);
return cljs.core.cons(React.createElement("g",({"key": cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("K"), "className": "tick"}),React.createElement("text",({"key": (2), "x": (0), "y": (y.cljs$core$IFn$_invoke$arity$1 ? y.cljs$core$IFn$_invoke$arity$1(tick) : y.call(null,tick)), "dx": "0.7ex", "dy": "0.5ex", "textAnchor": "start"}),sablono.interpreter.interpret(cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,specifier,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tick], 0)))),React.createElement("line",({"key": (1), "x1": (0), "y1": (y.cljs$core$IFn$_invoke$arity$1 ? y.cljs$core$IFn$_invoke$arity$1(tick) : y.call(null,tick)), "x2": "0.5ex", "y2": (y.cljs$core$IFn$_invoke$arity$1 ? y.cljs$core$IFn$_invoke$arity$1(tick) : y.call(null,tick))}))),svg$axis$iter__47463(cljs.core.rest(s__47464__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(ticks);
})()));
}),null,"axisRight");

//# sourceMappingURL=svg.axis.js.map
