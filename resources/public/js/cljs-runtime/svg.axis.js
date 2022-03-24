goog.provide('svg.axis');
svg.axis.default_axis_color = "#888";
svg.axis.default_axis_style = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"axis","axis",-1215390822),"axis--G__47129"], null);

cljs_css_modules.runtime.inject_style_BANG_(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(garden.core.css,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [".axis--G__47129",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"0.15ex",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"12pt"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["line",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),svg.axis.default_axis_color], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [".tick",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["line",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),svg.axis.default_axis_color], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),svg.axis.default_axis_color], null)], null)], null)], null)], null)),"svg.axis","default-axis-style");
svg.axis.axisBottom = rum.core.build_defc((function (p__47138){
var map__47142 = p__47138;
var map__47142__$1 = cljs.core.__destructure_map(map__47142);
var scale = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__47142__$1,new cljs.core.Keyword(null,"scale","scale",-230427353),svg.scales.__GT_Identity(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),(10)));
var ticks = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__47142__$1,new cljs.core.Keyword(null,"ticks","ticks",-406190313),cljs.core.range.cljs$core$IFn$_invoke$arity$3((0),(1),0.1));
var format_specifier = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47142__$1,new cljs.core.Keyword(null,"format-specifier","format-specifier",1758610918));
var styles = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__47142__$1,new cljs.core.Keyword(null,"styles","styles",1954480375),svg.axis.default_axis_style);
var vec__47144 = svg.scales.in$(scale);
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47144,(0),null);
var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47144,(1),null);
var x = svg.scales.i__GT_o(scale);
var specifier = (((format_specifier == null))?svg.scales.tick_format_specifier(scale):format_specifier);
return React.createElement("g",({"key": "axis-b", "className": new cljs.core.Keyword(null,"axis","axis",-1215390822).cljs$core$IFn$_invoke$arity$1(styles)}),React.createElement("line",({"key": "X", "x1": (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(x1) : x.call(null,x1)), "y1": (0), "x2": (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(x2) : x.call(null,x2)), "y2": (0)})),cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__4611__auto__ = (function svg$axis$iter__47148(s__47149){
return (new cljs.core.LazySeq(null,(function (){
var s__47149__$1 = s__47149;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__47149__$1);
if(temp__5753__auto__){
var s__47149__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__47149__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__47149__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__47151 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__47150 = (0);
while(true){
if((i__47150 < size__4610__auto__)){
var tick = cljs.core._nth(c__4609__auto__,i__47150);
cljs.core.chunk_append(b__47151,React.createElement("g",({"key": cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("K"), "className": "tick"}),React.createElement("line",({"key": (1), "x1": (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(tick) : x.call(null,tick)), "y1": (0), "x2": (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(tick) : x.call(null,tick)), "y2": "0.5ex"})),React.createElement("text",({"key": (2), "x": (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(tick) : x.call(null,tick)), "dx": (0), "dy": "2.2ex", "textAnchor": "middle"}),sablono.interpreter.interpret(cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,specifier,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tick], 0))))));

var G__47262 = (i__47150 + (1));
i__47150 = G__47262;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__47151),svg$axis$iter__47148(cljs.core.chunk_rest(s__47149__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__47151),null);
}
} else {
var tick = cljs.core.first(s__47149__$2);
return cljs.core.cons(React.createElement("g",({"key": cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("K"), "className": "tick"}),React.createElement("line",({"key": (1), "x1": (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(tick) : x.call(null,tick)), "y1": (0), "x2": (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(tick) : x.call(null,tick)), "y2": "0.5ex"})),React.createElement("text",({"key": (2), "x": (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(tick) : x.call(null,tick)), "dx": (0), "dy": "2.2ex", "textAnchor": "middle"}),sablono.interpreter.interpret(cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,specifier,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tick], 0))))),svg$axis$iter__47148(cljs.core.rest(s__47149__$2)));
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
svg.axis.axisTop = rum.core.build_defc((function (p__47152){
var map__47153 = p__47152;
var map__47153__$1 = cljs.core.__destructure_map(map__47153);
var scale = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__47153__$1,new cljs.core.Keyword(null,"scale","scale",-230427353),svg.scales.__GT_Identity(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),(10)));
var ticks = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__47153__$1,new cljs.core.Keyword(null,"ticks","ticks",-406190313),cljs.core.range.cljs$core$IFn$_invoke$arity$3((0),(1),0.1));
var format_specifier = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47153__$1,new cljs.core.Keyword(null,"format-specifier","format-specifier",1758610918));
var styles = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__47153__$1,new cljs.core.Keyword(null,"styles","styles",1954480375),svg.axis.default_axis_style);
var vec__47154 = svg.scales.in$(scale);
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47154,(0),null);
var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47154,(1),null);
var x = svg.scales.i__GT_o(scale);
var specifier = (((format_specifier == null))?svg.scales.tick_format_specifier(scale):format_specifier);
return React.createElement("g",({"key": "axis-b", "className": new cljs.core.Keyword(null,"axis","axis",-1215390822).cljs$core$IFn$_invoke$arity$1(styles)}),React.createElement("line",({"key": "X", "x1": (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(x1) : x.call(null,x1)), "y1": (0), "x2": (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(x2) : x.call(null,x2)), "y2": (0)})),cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__4611__auto__ = (function svg$axis$iter__47165(s__47166){
return (new cljs.core.LazySeq(null,(function (){
var s__47166__$1 = s__47166;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__47166__$1);
if(temp__5753__auto__){
var s__47166__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__47166__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__47166__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__47168 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__47167 = (0);
while(true){
if((i__47167 < size__4610__auto__)){
var tick = cljs.core._nth(c__4609__auto__,i__47167);
cljs.core.chunk_append(b__47168,React.createElement("g",({"key": cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("K"), "className": "tick"}),React.createElement("line",({"key": (1), "x1": (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(tick) : x.call(null,tick)), "y1": (0), "x2": (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(tick) : x.call(null,tick)), "y2": "-0.5ex"})),React.createElement("text",({"key": (2), "x": (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(tick) : x.call(null,tick)), "dx": (0), "dy": "-1ex", "textAnchor": "middle"}),sablono.interpreter.interpret(cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,specifier,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tick], 0))))));

var G__47266 = (i__47167 + (1));
i__47167 = G__47266;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__47168),svg$axis$iter__47165(cljs.core.chunk_rest(s__47166__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__47168),null);
}
} else {
var tick = cljs.core.first(s__47166__$2);
return cljs.core.cons(React.createElement("g",({"key": cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("K"), "className": "tick"}),React.createElement("line",({"key": (1), "x1": (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(tick) : x.call(null,tick)), "y1": (0), "x2": (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(tick) : x.call(null,tick)), "y2": "-0.5ex"})),React.createElement("text",({"key": (2), "x": (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(tick) : x.call(null,tick)), "dx": (0), "dy": "-1ex", "textAnchor": "middle"}),sablono.interpreter.interpret(cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,specifier,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tick], 0))))),svg$axis$iter__47165(cljs.core.rest(s__47166__$2)));
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
svg.axis.axisLeft = rum.core.build_defc((function (p__47187){
var map__47188 = p__47187;
var map__47188__$1 = cljs.core.__destructure_map(map__47188);
var scale = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__47188__$1,new cljs.core.Keyword(null,"scale","scale",-230427353),svg.scales.__GT_Identity(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),(10)));
var ticks = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__47188__$1,new cljs.core.Keyword(null,"ticks","ticks",-406190313),cljs.core.range.cljs$core$IFn$_invoke$arity$3((0),(1),0.1));
var format_specifier = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47188__$1,new cljs.core.Keyword(null,"format-specifier","format-specifier",1758610918));
var styles = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__47188__$1,new cljs.core.Keyword(null,"styles","styles",1954480375),svg.axis.default_axis_style);
var vec__47192 = svg.scales.in$(scale);
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47192,(0),null);
var y2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47192,(1),null);
var y = svg.scales.i__GT_o(scale);
var specifier = (((format_specifier == null))?svg.scales.tick_format_specifier(scale):format_specifier);
return React.createElement("g",({"key": "axis-l", "className": new cljs.core.Keyword(null,"axis","axis",-1215390822).cljs$core$IFn$_invoke$arity$1(styles)}),React.createElement("line",({"key": "Y", "x1": (0), "y1": (y.cljs$core$IFn$_invoke$arity$1 ? y.cljs$core$IFn$_invoke$arity$1(y1) : y.call(null,y1)), "x2": (0), "y2": (y.cljs$core$IFn$_invoke$arity$1 ? y.cljs$core$IFn$_invoke$arity$1(y2) : y.call(null,y2))})),cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__4611__auto__ = (function svg$axis$iter__47201(s__47202){
return (new cljs.core.LazySeq(null,(function (){
var s__47202__$1 = s__47202;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__47202__$1);
if(temp__5753__auto__){
var s__47202__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__47202__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__47202__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__47204 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__47203 = (0);
while(true){
if((i__47203 < size__4610__auto__)){
var tick = cljs.core._nth(c__4609__auto__,i__47203);
cljs.core.chunk_append(b__47204,React.createElement("g",({"key": cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("K"), "className": "tick"}),React.createElement("text",({"key": (2), "x": (0), "y": (y.cljs$core$IFn$_invoke$arity$1 ? y.cljs$core$IFn$_invoke$arity$1(tick) : y.call(null,tick)), "dx": "-0.7ex", "dy": "0.5ex", "textAnchor": "end"}),sablono.interpreter.interpret(cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,specifier,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tick], 0)))),React.createElement("line",({"key": (1), "x1": (0), "y1": (y.cljs$core$IFn$_invoke$arity$1 ? y.cljs$core$IFn$_invoke$arity$1(tick) : y.call(null,tick)), "x2": "-0.5ex", "y2": (y.cljs$core$IFn$_invoke$arity$1 ? y.cljs$core$IFn$_invoke$arity$1(tick) : y.call(null,tick))}))));

var G__47271 = (i__47203 + (1));
i__47203 = G__47271;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__47204),svg$axis$iter__47201(cljs.core.chunk_rest(s__47202__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__47204),null);
}
} else {
var tick = cljs.core.first(s__47202__$2);
return cljs.core.cons(React.createElement("g",({"key": cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("K"), "className": "tick"}),React.createElement("text",({"key": (2), "x": (0), "y": (y.cljs$core$IFn$_invoke$arity$1 ? y.cljs$core$IFn$_invoke$arity$1(tick) : y.call(null,tick)), "dx": "-0.7ex", "dy": "0.5ex", "textAnchor": "end"}),sablono.interpreter.interpret(cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,specifier,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tick], 0)))),React.createElement("line",({"key": (1), "x1": (0), "y1": (y.cljs$core$IFn$_invoke$arity$1 ? y.cljs$core$IFn$_invoke$arity$1(tick) : y.call(null,tick)), "x2": "-0.5ex", "y2": (y.cljs$core$IFn$_invoke$arity$1 ? y.cljs$core$IFn$_invoke$arity$1(tick) : y.call(null,tick))}))),svg$axis$iter__47201(cljs.core.rest(s__47202__$2)));
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
svg.axis.axisRight = rum.core.build_defc((function (p__47235){
var map__47236 = p__47235;
var map__47236__$1 = cljs.core.__destructure_map(map__47236);
var scale = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__47236__$1,new cljs.core.Keyword(null,"scale","scale",-230427353),svg.scales.__GT_Identity(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),(10)));
var ticks = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__47236__$1,new cljs.core.Keyword(null,"ticks","ticks",-406190313),cljs.core.range.cljs$core$IFn$_invoke$arity$3((0),(1),0.1));
var format_specifier = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47236__$1,new cljs.core.Keyword(null,"format-specifier","format-specifier",1758610918));
var styles = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__47236__$1,new cljs.core.Keyword(null,"styles","styles",1954480375),svg.axis.default_axis_style);
var vec__47238 = svg.scales.in$(scale);
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47238,(0),null);
var y2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47238,(1),null);
var y = svg.scales.i__GT_o(scale);
var specifier = (((format_specifier == null))?svg.scales.tick_format_specifier(scale):format_specifier);
return React.createElement("g",({"key": "axis-l", "className": new cljs.core.Keyword(null,"axis","axis",-1215390822).cljs$core$IFn$_invoke$arity$1(styles)}),React.createElement("line",({"key": "Y", "x1": (0), "y1": (y.cljs$core$IFn$_invoke$arity$1 ? y.cljs$core$IFn$_invoke$arity$1(y1) : y.call(null,y1)), "x2": (0), "y2": (y.cljs$core$IFn$_invoke$arity$1 ? y.cljs$core$IFn$_invoke$arity$1(y2) : y.call(null,y2))})),cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__4611__auto__ = (function svg$axis$iter__47248(s__47249){
return (new cljs.core.LazySeq(null,(function (){
var s__47249__$1 = s__47249;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__47249__$1);
if(temp__5753__auto__){
var s__47249__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__47249__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__47249__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__47251 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__47250 = (0);
while(true){
if((i__47250 < size__4610__auto__)){
var tick = cljs.core._nth(c__4609__auto__,i__47250);
cljs.core.chunk_append(b__47251,React.createElement("g",({"key": cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("K"), "className": "tick"}),React.createElement("text",({"key": (2), "x": (0), "y": (y.cljs$core$IFn$_invoke$arity$1 ? y.cljs$core$IFn$_invoke$arity$1(tick) : y.call(null,tick)), "dx": "0.7ex", "dy": "0.5ex", "textAnchor": "start"}),sablono.interpreter.interpret(cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,specifier,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tick], 0)))),React.createElement("line",({"key": (1), "x1": (0), "y1": (y.cljs$core$IFn$_invoke$arity$1 ? y.cljs$core$IFn$_invoke$arity$1(tick) : y.call(null,tick)), "x2": "0.5ex", "y2": (y.cljs$core$IFn$_invoke$arity$1 ? y.cljs$core$IFn$_invoke$arity$1(tick) : y.call(null,tick))}))));

var G__47279 = (i__47250 + (1));
i__47250 = G__47279;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__47251),svg$axis$iter__47248(cljs.core.chunk_rest(s__47249__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__47251),null);
}
} else {
var tick = cljs.core.first(s__47249__$2);
return cljs.core.cons(React.createElement("g",({"key": cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("K"), "className": "tick"}),React.createElement("text",({"key": (2), "x": (0), "y": (y.cljs$core$IFn$_invoke$arity$1 ? y.cljs$core$IFn$_invoke$arity$1(tick) : y.call(null,tick)), "dx": "0.7ex", "dy": "0.5ex", "textAnchor": "start"}),sablono.interpreter.interpret(cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,specifier,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tick], 0)))),React.createElement("line",({"key": (1), "x1": (0), "y1": (y.cljs$core$IFn$_invoke$arity$1 ? y.cljs$core$IFn$_invoke$arity$1(tick) : y.call(null,tick)), "x2": "0.5ex", "y2": (y.cljs$core$IFn$_invoke$arity$1 ? y.cljs$core$IFn$_invoke$arity$1(tick) : y.call(null,tick))}))),svg$axis$iter__47248(cljs.core.rest(s__47249__$2)));
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
