goog.provide('svg.axis');
svg.axis.default_axis_color = "#888";
svg.axis.default_axis_style = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"axis","axis",-1215390822),"axis--G__47183"], null);

cljs_css_modules.runtime.inject_style_BANG_(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(garden.core.css,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [".axis--G__47183",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"0.15ex",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"12pt"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["line",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),svg.axis.default_axis_color], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [".tick",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["line",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),svg.axis.default_axis_color], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),svg.axis.default_axis_color], null)], null)], null)], null)], null)),"svg.axis","default-axis-style");
svg.axis.axisBottom = rum.core.build_defc((function (p__47185){
var map__47186 = p__47185;
var map__47186__$1 = cljs.core.__destructure_map(map__47186);
var scale = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__47186__$1,new cljs.core.Keyword(null,"scale","scale",-230427353),svg.scales.__GT_Identity(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),(10)));
var ticks = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__47186__$1,new cljs.core.Keyword(null,"ticks","ticks",-406190313),cljs.core.range.cljs$core$IFn$_invoke$arity$3((0),(1),0.1));
var format_specifier = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47186__$1,new cljs.core.Keyword(null,"format-specifier","format-specifier",1758610918));
var styles = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__47186__$1,new cljs.core.Keyword(null,"styles","styles",1954480375),svg.axis.default_axis_style);
var vec__47187 = svg.scales.in$(scale);
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47187,(0),null);
var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47187,(1),null);
var x = svg.scales.i__GT_o(scale);
var specifier = (((format_specifier == null))?svg.scales.tick_format_specifier(scale):format_specifier);
return React.createElement("g",({"key": "axis-b", "className": new cljs.core.Keyword(null,"axis","axis",-1215390822).cljs$core$IFn$_invoke$arity$1(styles)}),React.createElement("line",({"key": "X", "x1": (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(x1) : x.call(null,x1)), "y1": (0), "x2": (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(x2) : x.call(null,x2)), "y2": (0)})),cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__4611__auto__ = (function svg$axis$iter__47190(s__47191){
return (new cljs.core.LazySeq(null,(function (){
var s__47191__$1 = s__47191;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__47191__$1);
if(temp__5753__auto__){
var s__47191__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__47191__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__47191__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__47193 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__47192 = (0);
while(true){
if((i__47192 < size__4610__auto__)){
var tick = cljs.core._nth(c__4609__auto__,i__47192);
cljs.core.chunk_append(b__47193,React.createElement("g",({"key": cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("K"), "className": "tick"}),React.createElement("line",({"key": (1), "x1": (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(tick) : x.call(null,tick)), "y1": (0), "x2": (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(tick) : x.call(null,tick)), "y2": "0.5ex"})),React.createElement("text",({"key": (2), "x": (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(tick) : x.call(null,tick)), "dx": (0), "dy": "2.2ex", "textAnchor": "middle"}),sablono.interpreter.interpret(cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,specifier,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tick], 0))))));

var G__47293 = (i__47192 + (1));
i__47192 = G__47293;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__47193),svg$axis$iter__47190(cljs.core.chunk_rest(s__47191__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__47193),null);
}
} else {
var tick = cljs.core.first(s__47191__$2);
return cljs.core.cons(React.createElement("g",({"key": cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("K"), "className": "tick"}),React.createElement("line",({"key": (1), "x1": (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(tick) : x.call(null,tick)), "y1": (0), "x2": (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(tick) : x.call(null,tick)), "y2": "0.5ex"})),React.createElement("text",({"key": (2), "x": (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(tick) : x.call(null,tick)), "dx": (0), "dy": "2.2ex", "textAnchor": "middle"}),sablono.interpreter.interpret(cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,specifier,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tick], 0))))),svg$axis$iter__47190(cljs.core.rest(s__47191__$2)));
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
svg.axis.axisTop = rum.core.build_defc((function (p__47197){
var map__47198 = p__47197;
var map__47198__$1 = cljs.core.__destructure_map(map__47198);
var scale = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__47198__$1,new cljs.core.Keyword(null,"scale","scale",-230427353),svg.scales.__GT_Identity(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),(10)));
var ticks = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__47198__$1,new cljs.core.Keyword(null,"ticks","ticks",-406190313),cljs.core.range.cljs$core$IFn$_invoke$arity$3((0),(1),0.1));
var format_specifier = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47198__$1,new cljs.core.Keyword(null,"format-specifier","format-specifier",1758610918));
var styles = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__47198__$1,new cljs.core.Keyword(null,"styles","styles",1954480375),svg.axis.default_axis_style);
var vec__47199 = svg.scales.in$(scale);
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47199,(0),null);
var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47199,(1),null);
var x = svg.scales.i__GT_o(scale);
var specifier = (((format_specifier == null))?svg.scales.tick_format_specifier(scale):format_specifier);
return React.createElement("g",({"key": "axis-b", "className": new cljs.core.Keyword(null,"axis","axis",-1215390822).cljs$core$IFn$_invoke$arity$1(styles)}),React.createElement("line",({"key": "X", "x1": (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(x1) : x.call(null,x1)), "y1": (0), "x2": (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(x2) : x.call(null,x2)), "y2": (0)})),cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__4611__auto__ = (function svg$axis$iter__47202(s__47203){
return (new cljs.core.LazySeq(null,(function (){
var s__47203__$1 = s__47203;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__47203__$1);
if(temp__5753__auto__){
var s__47203__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__47203__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__47203__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__47205 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__47204 = (0);
while(true){
if((i__47204 < size__4610__auto__)){
var tick = cljs.core._nth(c__4609__auto__,i__47204);
cljs.core.chunk_append(b__47205,React.createElement("g",({"key": cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("K"), "className": "tick"}),React.createElement("line",({"key": (1), "x1": (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(tick) : x.call(null,tick)), "y1": (0), "x2": (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(tick) : x.call(null,tick)), "y2": "-0.5ex"})),React.createElement("text",({"key": (2), "x": (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(tick) : x.call(null,tick)), "dx": (0), "dy": "-1ex", "textAnchor": "middle"}),sablono.interpreter.interpret(cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,specifier,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tick], 0))))));

var G__47307 = (i__47204 + (1));
i__47204 = G__47307;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__47205),svg$axis$iter__47202(cljs.core.chunk_rest(s__47203__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__47205),null);
}
} else {
var tick = cljs.core.first(s__47203__$2);
return cljs.core.cons(React.createElement("g",({"key": cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("K"), "className": "tick"}),React.createElement("line",({"key": (1), "x1": (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(tick) : x.call(null,tick)), "y1": (0), "x2": (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(tick) : x.call(null,tick)), "y2": "-0.5ex"})),React.createElement("text",({"key": (2), "x": (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(tick) : x.call(null,tick)), "dx": (0), "dy": "-1ex", "textAnchor": "middle"}),sablono.interpreter.interpret(cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,specifier,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tick], 0))))),svg$axis$iter__47202(cljs.core.rest(s__47203__$2)));
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
svg.axis.axisLeft = rum.core.build_defc((function (p__47214){
var map__47215 = p__47214;
var map__47215__$1 = cljs.core.__destructure_map(map__47215);
var scale = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__47215__$1,new cljs.core.Keyword(null,"scale","scale",-230427353),svg.scales.__GT_Identity(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),(10)));
var ticks = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__47215__$1,new cljs.core.Keyword(null,"ticks","ticks",-406190313),cljs.core.range.cljs$core$IFn$_invoke$arity$3((0),(1),0.1));
var format_specifier = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47215__$1,new cljs.core.Keyword(null,"format-specifier","format-specifier",1758610918));
var styles = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__47215__$1,new cljs.core.Keyword(null,"styles","styles",1954480375),svg.axis.default_axis_style);
var vec__47216 = svg.scales.in$(scale);
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47216,(0),null);
var y2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47216,(1),null);
var y = svg.scales.i__GT_o(scale);
var specifier = (((format_specifier == null))?svg.scales.tick_format_specifier(scale):format_specifier);
return React.createElement("g",({"key": "axis-l", "className": new cljs.core.Keyword(null,"axis","axis",-1215390822).cljs$core$IFn$_invoke$arity$1(styles)}),React.createElement("line",({"key": "Y", "x1": (0), "y1": (y.cljs$core$IFn$_invoke$arity$1 ? y.cljs$core$IFn$_invoke$arity$1(y1) : y.call(null,y1)), "x2": (0), "y2": (y.cljs$core$IFn$_invoke$arity$1 ? y.cljs$core$IFn$_invoke$arity$1(y2) : y.call(null,y2))})),cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__4611__auto__ = (function svg$axis$iter__47220(s__47221){
return (new cljs.core.LazySeq(null,(function (){
var s__47221__$1 = s__47221;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__47221__$1);
if(temp__5753__auto__){
var s__47221__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__47221__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__47221__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__47223 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__47222 = (0);
while(true){
if((i__47222 < size__4610__auto__)){
var tick = cljs.core._nth(c__4609__auto__,i__47222);
cljs.core.chunk_append(b__47223,React.createElement("g",({"key": cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("K"), "className": "tick"}),React.createElement("text",({"key": (2), "x": (0), "y": (y.cljs$core$IFn$_invoke$arity$1 ? y.cljs$core$IFn$_invoke$arity$1(tick) : y.call(null,tick)), "dx": "-0.7ex", "dy": "0.5ex", "textAnchor": "end"}),sablono.interpreter.interpret(cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,specifier,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tick], 0)))),React.createElement("line",({"key": (1), "x1": (0), "y1": (y.cljs$core$IFn$_invoke$arity$1 ? y.cljs$core$IFn$_invoke$arity$1(tick) : y.call(null,tick)), "x2": "-0.5ex", "y2": (y.cljs$core$IFn$_invoke$arity$1 ? y.cljs$core$IFn$_invoke$arity$1(tick) : y.call(null,tick))}))));

var G__47317 = (i__47222 + (1));
i__47222 = G__47317;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__47223),svg$axis$iter__47220(cljs.core.chunk_rest(s__47221__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__47223),null);
}
} else {
var tick = cljs.core.first(s__47221__$2);
return cljs.core.cons(React.createElement("g",({"key": cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("K"), "className": "tick"}),React.createElement("text",({"key": (2), "x": (0), "y": (y.cljs$core$IFn$_invoke$arity$1 ? y.cljs$core$IFn$_invoke$arity$1(tick) : y.call(null,tick)), "dx": "-0.7ex", "dy": "0.5ex", "textAnchor": "end"}),sablono.interpreter.interpret(cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,specifier,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tick], 0)))),React.createElement("line",({"key": (1), "x1": (0), "y1": (y.cljs$core$IFn$_invoke$arity$1 ? y.cljs$core$IFn$_invoke$arity$1(tick) : y.call(null,tick)), "x2": "-0.5ex", "y2": (y.cljs$core$IFn$_invoke$arity$1 ? y.cljs$core$IFn$_invoke$arity$1(tick) : y.call(null,tick))}))),svg$axis$iter__47220(cljs.core.rest(s__47221__$2)));
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
svg.axis.axisRight = rum.core.build_defc((function (p__47242){
var map__47243 = p__47242;
var map__47243__$1 = cljs.core.__destructure_map(map__47243);
var scale = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__47243__$1,new cljs.core.Keyword(null,"scale","scale",-230427353),svg.scales.__GT_Identity(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),(10)));
var ticks = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__47243__$1,new cljs.core.Keyword(null,"ticks","ticks",-406190313),cljs.core.range.cljs$core$IFn$_invoke$arity$3((0),(1),0.1));
var format_specifier = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47243__$1,new cljs.core.Keyword(null,"format-specifier","format-specifier",1758610918));
var styles = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__47243__$1,new cljs.core.Keyword(null,"styles","styles",1954480375),svg.axis.default_axis_style);
var vec__47247 = svg.scales.in$(scale);
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47247,(0),null);
var y2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47247,(1),null);
var y = svg.scales.i__GT_o(scale);
var specifier = (((format_specifier == null))?svg.scales.tick_format_specifier(scale):format_specifier);
return React.createElement("g",({"key": "axis-l", "className": new cljs.core.Keyword(null,"axis","axis",-1215390822).cljs$core$IFn$_invoke$arity$1(styles)}),React.createElement("line",({"key": "Y", "x1": (0), "y1": (y.cljs$core$IFn$_invoke$arity$1 ? y.cljs$core$IFn$_invoke$arity$1(y1) : y.call(null,y1)), "x2": (0), "y2": (y.cljs$core$IFn$_invoke$arity$1 ? y.cljs$core$IFn$_invoke$arity$1(y2) : y.call(null,y2))})),cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__4611__auto__ = (function svg$axis$iter__47253(s__47254){
return (new cljs.core.LazySeq(null,(function (){
var s__47254__$1 = s__47254;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__47254__$1);
if(temp__5753__auto__){
var s__47254__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__47254__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__47254__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__47256 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__47255 = (0);
while(true){
if((i__47255 < size__4610__auto__)){
var tick = cljs.core._nth(c__4609__auto__,i__47255);
cljs.core.chunk_append(b__47256,React.createElement("g",({"key": cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("K"), "className": "tick"}),React.createElement("text",({"key": (2), "x": (0), "y": (y.cljs$core$IFn$_invoke$arity$1 ? y.cljs$core$IFn$_invoke$arity$1(tick) : y.call(null,tick)), "dx": "0.7ex", "dy": "0.5ex", "textAnchor": "start"}),sablono.interpreter.interpret(cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,specifier,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tick], 0)))),React.createElement("line",({"key": (1), "x1": (0), "y1": (y.cljs$core$IFn$_invoke$arity$1 ? y.cljs$core$IFn$_invoke$arity$1(tick) : y.call(null,tick)), "x2": "0.5ex", "y2": (y.cljs$core$IFn$_invoke$arity$1 ? y.cljs$core$IFn$_invoke$arity$1(tick) : y.call(null,tick))}))));

var G__47448 = (i__47255 + (1));
i__47255 = G__47448;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__47256),svg$axis$iter__47253(cljs.core.chunk_rest(s__47254__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__47256),null);
}
} else {
var tick = cljs.core.first(s__47254__$2);
return cljs.core.cons(React.createElement("g",({"key": cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("K"), "className": "tick"}),React.createElement("text",({"key": (2), "x": (0), "y": (y.cljs$core$IFn$_invoke$arity$1 ? y.cljs$core$IFn$_invoke$arity$1(tick) : y.call(null,tick)), "dx": "0.7ex", "dy": "0.5ex", "textAnchor": "start"}),sablono.interpreter.interpret(cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,specifier,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tick], 0)))),React.createElement("line",({"key": (1), "x1": (0), "y1": (y.cljs$core$IFn$_invoke$arity$1 ? y.cljs$core$IFn$_invoke$arity$1(tick) : y.call(null,tick)), "x2": "0.5ex", "y2": (y.cljs$core$IFn$_invoke$arity$1 ? y.cljs$core$IFn$_invoke$arity$1(tick) : y.call(null,tick))}))),svg$axis$iter__47253(cljs.core.rest(s__47254__$2)));
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
