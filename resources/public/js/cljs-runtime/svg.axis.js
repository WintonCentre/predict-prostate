goog.provide('svg.axis');
svg.axis.default_axis_color = "#888";
svg.axis.default_axis_style = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"axis","axis",-1215390822),"axis--G__34481"], null);

cljs_css_modules.runtime.inject_style_BANG_(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(garden.core.css,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [".axis--G__34481",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"0.15ex",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"12pt"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["line",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),svg.axis.default_axis_color], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [".tick",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["line",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),svg.axis.default_axis_color], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),svg.axis.default_axis_color], null)], null)], null)], null)], null)),"svg.axis","default-axis-style");
svg.axis.axisBottom = rum.core.build_defc((function (p__34482){
var map__34483 = p__34482;
var map__34483__$1 = cljs.core.__destructure_map(map__34483);
var scale = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__34483__$1,new cljs.core.Keyword(null,"scale","scale",-230427353),svg.scales.__GT_Identity(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),(10)));
var ticks = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__34483__$1,new cljs.core.Keyword(null,"ticks","ticks",-406190313),cljs.core.range.cljs$core$IFn$_invoke$arity$3((0),(1),0.1));
var format_specifier = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34483__$1,new cljs.core.Keyword(null,"format-specifier","format-specifier",1758610918));
var styles = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__34483__$1,new cljs.core.Keyword(null,"styles","styles",1954480375),svg.axis.default_axis_style);
var vec__34484 = svg.scales.in$(scale);
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34484,(0),null);
var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34484,(1),null);
var x = svg.scales.i__GT_o(scale);
var specifier = (((format_specifier == null))?svg.scales.tick_format_specifier(scale):format_specifier);
return React.createElement("g",({"key": "axis-b", "className": new cljs.core.Keyword(null,"axis","axis",-1215390822).cljs$core$IFn$_invoke$arity$1(styles)}),React.createElement("line",({"key": "X", "x1": (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(x1) : x.call(null,x1)), "y1": (0), "x2": (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(x2) : x.call(null,x2)), "y2": (0)})),cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__4611__auto__ = (function svg$axis$iter__34487(s__34488){
return (new cljs.core.LazySeq(null,(function (){
var s__34488__$1 = s__34488;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__34488__$1);
if(temp__5753__auto__){
var s__34488__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__34488__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__34488__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__34490 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__34489 = (0);
while(true){
if((i__34489 < size__4610__auto__)){
var tick = cljs.core._nth(c__4609__auto__,i__34489);
cljs.core.chunk_append(b__34490,React.createElement("g",({"key": cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("K"), "className": "tick"}),React.createElement("line",({"key": (1), "x1": (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(tick) : x.call(null,tick)), "y1": (0), "x2": (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(tick) : x.call(null,tick)), "y2": "0.5ex"})),React.createElement("text",({"key": (2), "x": (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(tick) : x.call(null,tick)), "dx": (0), "dy": "2.2ex", "textAnchor": "middle"}),sablono.interpreter.interpret(cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,specifier,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tick], 0))))));

var G__34546 = (i__34489 + (1));
i__34489 = G__34546;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__34490),svg$axis$iter__34487(cljs.core.chunk_rest(s__34488__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__34490),null);
}
} else {
var tick = cljs.core.first(s__34488__$2);
return cljs.core.cons(React.createElement("g",({"key": cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("K"), "className": "tick"}),React.createElement("line",({"key": (1), "x1": (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(tick) : x.call(null,tick)), "y1": (0), "x2": (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(tick) : x.call(null,tick)), "y2": "0.5ex"})),React.createElement("text",({"key": (2), "x": (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(tick) : x.call(null,tick)), "dx": (0), "dy": "2.2ex", "textAnchor": "middle"}),sablono.interpreter.interpret(cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,specifier,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tick], 0))))),svg$axis$iter__34487(cljs.core.rest(s__34488__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(ticks);
})()));
}),null,"axisBottom");
svg.axis.axisTop = rum.core.build_defc((function (p__34491){
var map__34492 = p__34491;
var map__34492__$1 = cljs.core.__destructure_map(map__34492);
var scale = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__34492__$1,new cljs.core.Keyword(null,"scale","scale",-230427353),svg.scales.__GT_Identity(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),(10)));
var ticks = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__34492__$1,new cljs.core.Keyword(null,"ticks","ticks",-406190313),cljs.core.range.cljs$core$IFn$_invoke$arity$3((0),(1),0.1));
var format_specifier = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34492__$1,new cljs.core.Keyword(null,"format-specifier","format-specifier",1758610918));
var styles = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__34492__$1,new cljs.core.Keyword(null,"styles","styles",1954480375),svg.axis.default_axis_style);
var vec__34493 = svg.scales.in$(scale);
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34493,(0),null);
var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34493,(1),null);
var x = svg.scales.i__GT_o(scale);
var specifier = (((format_specifier == null))?svg.scales.tick_format_specifier(scale):format_specifier);
return React.createElement("g",({"key": "axis-b", "className": new cljs.core.Keyword(null,"axis","axis",-1215390822).cljs$core$IFn$_invoke$arity$1(styles)}),React.createElement("line",({"key": "X", "x1": (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(x1) : x.call(null,x1)), "y1": (0), "x2": (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(x2) : x.call(null,x2)), "y2": (0)})),cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__4611__auto__ = (function svg$axis$iter__34501(s__34502){
return (new cljs.core.LazySeq(null,(function (){
var s__34502__$1 = s__34502;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__34502__$1);
if(temp__5753__auto__){
var s__34502__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__34502__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__34502__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__34504 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__34503 = (0);
while(true){
if((i__34503 < size__4610__auto__)){
var tick = cljs.core._nth(c__4609__auto__,i__34503);
cljs.core.chunk_append(b__34504,React.createElement("g",({"key": cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("K"), "className": "tick"}),React.createElement("line",({"key": (1), "x1": (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(tick) : x.call(null,tick)), "y1": (0), "x2": (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(tick) : x.call(null,tick)), "y2": "-0.5ex"})),React.createElement("text",({"key": (2), "x": (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(tick) : x.call(null,tick)), "dx": (0), "dy": "-1ex", "textAnchor": "middle"}),sablono.interpreter.interpret(cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,specifier,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tick], 0))))));

var G__34555 = (i__34503 + (1));
i__34503 = G__34555;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__34504),svg$axis$iter__34501(cljs.core.chunk_rest(s__34502__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__34504),null);
}
} else {
var tick = cljs.core.first(s__34502__$2);
return cljs.core.cons(React.createElement("g",({"key": cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("K"), "className": "tick"}),React.createElement("line",({"key": (1), "x1": (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(tick) : x.call(null,tick)), "y1": (0), "x2": (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(tick) : x.call(null,tick)), "y2": "-0.5ex"})),React.createElement("text",({"key": (2), "x": (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(tick) : x.call(null,tick)), "dx": (0), "dy": "-1ex", "textAnchor": "middle"}),sablono.interpreter.interpret(cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,specifier,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tick], 0))))),svg$axis$iter__34501(cljs.core.rest(s__34502__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(ticks);
})()));
}),null,"axisTop");
svg.axis.axisLeft = rum.core.build_defc((function (p__34513){
var map__34514 = p__34513;
var map__34514__$1 = cljs.core.__destructure_map(map__34514);
var scale = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__34514__$1,new cljs.core.Keyword(null,"scale","scale",-230427353),svg.scales.__GT_Identity(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),(10)));
var ticks = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__34514__$1,new cljs.core.Keyword(null,"ticks","ticks",-406190313),cljs.core.range.cljs$core$IFn$_invoke$arity$3((0),(1),0.1));
var format_specifier = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34514__$1,new cljs.core.Keyword(null,"format-specifier","format-specifier",1758610918));
var styles = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__34514__$1,new cljs.core.Keyword(null,"styles","styles",1954480375),svg.axis.default_axis_style);
var vec__34517 = svg.scales.in$(scale);
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34517,(0),null);
var y2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34517,(1),null);
var y = svg.scales.i__GT_o(scale);
var specifier = (((format_specifier == null))?svg.scales.tick_format_specifier(scale):format_specifier);
return React.createElement("g",({"key": "axis-l", "className": new cljs.core.Keyword(null,"axis","axis",-1215390822).cljs$core$IFn$_invoke$arity$1(styles)}),React.createElement("line",({"key": "Y", "x1": (0), "y1": (y.cljs$core$IFn$_invoke$arity$1 ? y.cljs$core$IFn$_invoke$arity$1(y1) : y.call(null,y1)), "x2": (0), "y2": (y.cljs$core$IFn$_invoke$arity$1 ? y.cljs$core$IFn$_invoke$arity$1(y2) : y.call(null,y2))})),cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__4611__auto__ = (function svg$axis$iter__34520(s__34521){
return (new cljs.core.LazySeq(null,(function (){
var s__34521__$1 = s__34521;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__34521__$1);
if(temp__5753__auto__){
var s__34521__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__34521__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__34521__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__34523 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__34522 = (0);
while(true){
if((i__34522 < size__4610__auto__)){
var tick = cljs.core._nth(c__4609__auto__,i__34522);
cljs.core.chunk_append(b__34523,React.createElement("g",({"key": cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("K"), "className": "tick"}),React.createElement("text",({"key": (2), "x": (0), "y": (y.cljs$core$IFn$_invoke$arity$1 ? y.cljs$core$IFn$_invoke$arity$1(tick) : y.call(null,tick)), "dx": "-0.7ex", "dy": "0.5ex", "textAnchor": "end"}),sablono.interpreter.interpret(cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,specifier,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tick], 0)))),React.createElement("line",({"key": (1), "x1": (0), "y1": (y.cljs$core$IFn$_invoke$arity$1 ? y.cljs$core$IFn$_invoke$arity$1(tick) : y.call(null,tick)), "x2": "-0.5ex", "y2": (y.cljs$core$IFn$_invoke$arity$1 ? y.cljs$core$IFn$_invoke$arity$1(tick) : y.call(null,tick))}))));

var G__34559 = (i__34522 + (1));
i__34522 = G__34559;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__34523),svg$axis$iter__34520(cljs.core.chunk_rest(s__34521__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__34523),null);
}
} else {
var tick = cljs.core.first(s__34521__$2);
return cljs.core.cons(React.createElement("g",({"key": cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("K"), "className": "tick"}),React.createElement("text",({"key": (2), "x": (0), "y": (y.cljs$core$IFn$_invoke$arity$1 ? y.cljs$core$IFn$_invoke$arity$1(tick) : y.call(null,tick)), "dx": "-0.7ex", "dy": "0.5ex", "textAnchor": "end"}),sablono.interpreter.interpret(cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,specifier,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tick], 0)))),React.createElement("line",({"key": (1), "x1": (0), "y1": (y.cljs$core$IFn$_invoke$arity$1 ? y.cljs$core$IFn$_invoke$arity$1(tick) : y.call(null,tick)), "x2": "-0.5ex", "y2": (y.cljs$core$IFn$_invoke$arity$1 ? y.cljs$core$IFn$_invoke$arity$1(tick) : y.call(null,tick))}))),svg$axis$iter__34520(cljs.core.rest(s__34521__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(ticks);
})()));
}),null,"axisLeft");
svg.axis.axisRight = rum.core.build_defc((function (p__34531){
var map__34532 = p__34531;
var map__34532__$1 = cljs.core.__destructure_map(map__34532);
var scale = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__34532__$1,new cljs.core.Keyword(null,"scale","scale",-230427353),svg.scales.__GT_Identity(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),(10)));
var ticks = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__34532__$1,new cljs.core.Keyword(null,"ticks","ticks",-406190313),cljs.core.range.cljs$core$IFn$_invoke$arity$3((0),(1),0.1));
var format_specifier = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34532__$1,new cljs.core.Keyword(null,"format-specifier","format-specifier",1758610918));
var styles = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__34532__$1,new cljs.core.Keyword(null,"styles","styles",1954480375),svg.axis.default_axis_style);
var vec__34533 = svg.scales.in$(scale);
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34533,(0),null);
var y2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34533,(1),null);
var y = svg.scales.i__GT_o(scale);
var specifier = (((format_specifier == null))?svg.scales.tick_format_specifier(scale):format_specifier);
return React.createElement("g",({"key": "axis-l", "className": new cljs.core.Keyword(null,"axis","axis",-1215390822).cljs$core$IFn$_invoke$arity$1(styles)}),React.createElement("line",({"key": "Y", "x1": (0), "y1": (y.cljs$core$IFn$_invoke$arity$1 ? y.cljs$core$IFn$_invoke$arity$1(y1) : y.call(null,y1)), "x2": (0), "y2": (y.cljs$core$IFn$_invoke$arity$1 ? y.cljs$core$IFn$_invoke$arity$1(y2) : y.call(null,y2))})),cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__4611__auto__ = (function svg$axis$iter__34536(s__34537){
return (new cljs.core.LazySeq(null,(function (){
var s__34537__$1 = s__34537;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__34537__$1);
if(temp__5753__auto__){
var s__34537__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__34537__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__34537__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__34539 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__34538 = (0);
while(true){
if((i__34538 < size__4610__auto__)){
var tick = cljs.core._nth(c__4609__auto__,i__34538);
cljs.core.chunk_append(b__34539,React.createElement("g",({"key": cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("K"), "className": "tick"}),React.createElement("text",({"key": (2), "x": (0), "y": (y.cljs$core$IFn$_invoke$arity$1 ? y.cljs$core$IFn$_invoke$arity$1(tick) : y.call(null,tick)), "dx": "0.7ex", "dy": "0.5ex", "textAnchor": "start"}),sablono.interpreter.interpret(cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,specifier,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tick], 0)))),React.createElement("line",({"key": (1), "x1": (0), "y1": (y.cljs$core$IFn$_invoke$arity$1 ? y.cljs$core$IFn$_invoke$arity$1(tick) : y.call(null,tick)), "x2": "0.5ex", "y2": (y.cljs$core$IFn$_invoke$arity$1 ? y.cljs$core$IFn$_invoke$arity$1(tick) : y.call(null,tick))}))));

var G__34564 = (i__34538 + (1));
i__34538 = G__34564;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__34539),svg$axis$iter__34536(cljs.core.chunk_rest(s__34537__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__34539),null);
}
} else {
var tick = cljs.core.first(s__34537__$2);
return cljs.core.cons(React.createElement("g",({"key": cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("K"), "className": "tick"}),React.createElement("text",({"key": (2), "x": (0), "y": (y.cljs$core$IFn$_invoke$arity$1 ? y.cljs$core$IFn$_invoke$arity$1(tick) : y.call(null,tick)), "dx": "0.7ex", "dy": "0.5ex", "textAnchor": "start"}),sablono.interpreter.interpret(cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,specifier,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tick], 0)))),React.createElement("line",({"key": (1), "x1": (0), "y1": (y.cljs$core$IFn$_invoke$arity$1 ? y.cljs$core$IFn$_invoke$arity$1(tick) : y.call(null,tick)), "x2": "0.5ex", "y2": (y.cljs$core$IFn$_invoke$arity$1 ? y.cljs$core$IFn$_invoke$arity$1(tick) : y.call(null,tick))}))),svg$axis$iter__34536(cljs.core.rest(s__34537__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(ticks);
})()));
}),null,"axisRight");

//# sourceMappingURL=svg.axis.js.map
