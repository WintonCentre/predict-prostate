goog.provide('svg.axis');
svg.axis.default_axis_color = "#888";
svg.axis.default_axis_style = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"axis","axis",-1215390822),"axis--G__35003"], null);

cljs_css_modules.runtime.inject_style_BANG_(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(garden.core.css,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [".axis--G__35003",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"0.15ex",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"12pt"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["line",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),svg.axis.default_axis_color], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [".tick",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["line",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),svg.axis.default_axis_color], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),svg.axis.default_axis_color], null)], null)], null)], null)], null)),"svg.axis","default-axis-style");
svg.axis.axisBottom = rum.core.build_defc((function (p__35005){
var map__35006 = p__35005;
var map__35006__$1 = cljs.core.__destructure_map(map__35006);
var scale = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__35006__$1,new cljs.core.Keyword(null,"scale","scale",-230427353),svg.scales.__GT_Identity(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),(10)));
var ticks = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__35006__$1,new cljs.core.Keyword(null,"ticks","ticks",-406190313),cljs.core.range.cljs$core$IFn$_invoke$arity$3((0),(1),0.1));
var format_specifier = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35006__$1,new cljs.core.Keyword(null,"format-specifier","format-specifier",1758610918));
var styles = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__35006__$1,new cljs.core.Keyword(null,"styles","styles",1954480375),svg.axis.default_axis_style);
var vec__35007 = svg.scales.in$(scale);
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35007,(0),null);
var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35007,(1),null);
var x = svg.scales.i__GT_o(scale);
var specifier = (((format_specifier == null))?svg.scales.tick_format_specifier(scale):format_specifier);
return React.createElement("g",({"key": "axis-b", "className": new cljs.core.Keyword(null,"axis","axis",-1215390822).cljs$core$IFn$_invoke$arity$1(styles)}),React.createElement("line",({"key": "X", "x1": (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(x1) : x.call(null,x1)), "y1": (0), "x2": (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(x2) : x.call(null,x2)), "y2": (0)})),cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__4611__auto__ = (function svg$axis$iter__35010(s__35011){
return (new cljs.core.LazySeq(null,(function (){
var s__35011__$1 = s__35011;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__35011__$1);
if(temp__5753__auto__){
var s__35011__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__35011__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__35011__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__35013 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__35012 = (0);
while(true){
if((i__35012 < size__4610__auto__)){
var tick = cljs.core._nth(c__4609__auto__,i__35012);
cljs.core.chunk_append(b__35013,React.createElement("g",({"key": cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("K"), "className": "tick"}),React.createElement("line",({"key": (1), "x1": (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(tick) : x.call(null,tick)), "y1": (0), "x2": (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(tick) : x.call(null,tick)), "y2": "0.5ex"})),React.createElement("text",({"key": (2), "x": (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(tick) : x.call(null,tick)), "dx": (0), "dy": "2.2ex", "textAnchor": "middle"}),sablono.interpreter.interpret(cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,specifier,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tick], 0))))));

var G__35051 = (i__35012 + (1));
i__35012 = G__35051;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35013),svg$axis$iter__35010(cljs.core.chunk_rest(s__35011__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35013),null);
}
} else {
var tick = cljs.core.first(s__35011__$2);
return cljs.core.cons(React.createElement("g",({"key": cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("K"), "className": "tick"}),React.createElement("line",({"key": (1), "x1": (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(tick) : x.call(null,tick)), "y1": (0), "x2": (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(tick) : x.call(null,tick)), "y2": "0.5ex"})),React.createElement("text",({"key": (2), "x": (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(tick) : x.call(null,tick)), "dx": (0), "dy": "2.2ex", "textAnchor": "middle"}),sablono.interpreter.interpret(cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,specifier,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tick], 0))))),svg$axis$iter__35010(cljs.core.rest(s__35011__$2)));
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
svg.axis.axisTop = rum.core.build_defc((function (p__35015){
var map__35016 = p__35015;
var map__35016__$1 = cljs.core.__destructure_map(map__35016);
var scale = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__35016__$1,new cljs.core.Keyword(null,"scale","scale",-230427353),svg.scales.__GT_Identity(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),(10)));
var ticks = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__35016__$1,new cljs.core.Keyword(null,"ticks","ticks",-406190313),cljs.core.range.cljs$core$IFn$_invoke$arity$3((0),(1),0.1));
var format_specifier = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35016__$1,new cljs.core.Keyword(null,"format-specifier","format-specifier",1758610918));
var styles = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__35016__$1,new cljs.core.Keyword(null,"styles","styles",1954480375),svg.axis.default_axis_style);
var vec__35019 = svg.scales.in$(scale);
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35019,(0),null);
var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35019,(1),null);
var x = svg.scales.i__GT_o(scale);
var specifier = (((format_specifier == null))?svg.scales.tick_format_specifier(scale):format_specifier);
return React.createElement("g",({"key": "axis-b", "className": new cljs.core.Keyword(null,"axis","axis",-1215390822).cljs$core$IFn$_invoke$arity$1(styles)}),React.createElement("line",({"key": "X", "x1": (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(x1) : x.call(null,x1)), "y1": (0), "x2": (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(x2) : x.call(null,x2)), "y2": (0)})),cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__4611__auto__ = (function svg$axis$iter__35022(s__35023){
return (new cljs.core.LazySeq(null,(function (){
var s__35023__$1 = s__35023;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__35023__$1);
if(temp__5753__auto__){
var s__35023__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__35023__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__35023__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__35025 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__35024 = (0);
while(true){
if((i__35024 < size__4610__auto__)){
var tick = cljs.core._nth(c__4609__auto__,i__35024);
cljs.core.chunk_append(b__35025,React.createElement("g",({"key": cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("K"), "className": "tick"}),React.createElement("line",({"key": (1), "x1": (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(tick) : x.call(null,tick)), "y1": (0), "x2": (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(tick) : x.call(null,tick)), "y2": "-0.5ex"})),React.createElement("text",({"key": (2), "x": (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(tick) : x.call(null,tick)), "dx": (0), "dy": "-1ex", "textAnchor": "middle"}),sablono.interpreter.interpret(cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,specifier,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tick], 0))))));

var G__35052 = (i__35024 + (1));
i__35024 = G__35052;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35025),svg$axis$iter__35022(cljs.core.chunk_rest(s__35023__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35025),null);
}
} else {
var tick = cljs.core.first(s__35023__$2);
return cljs.core.cons(React.createElement("g",({"key": cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("K"), "className": "tick"}),React.createElement("line",({"key": (1), "x1": (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(tick) : x.call(null,tick)), "y1": (0), "x2": (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(tick) : x.call(null,tick)), "y2": "-0.5ex"})),React.createElement("text",({"key": (2), "x": (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(tick) : x.call(null,tick)), "dx": (0), "dy": "-1ex", "textAnchor": "middle"}),sablono.interpreter.interpret(cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,specifier,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tick], 0))))),svg$axis$iter__35022(cljs.core.rest(s__35023__$2)));
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
svg.axis.axisLeft = rum.core.build_defc((function (p__35026){
var map__35027 = p__35026;
var map__35027__$1 = cljs.core.__destructure_map(map__35027);
var scale = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__35027__$1,new cljs.core.Keyword(null,"scale","scale",-230427353),svg.scales.__GT_Identity(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),(10)));
var ticks = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__35027__$1,new cljs.core.Keyword(null,"ticks","ticks",-406190313),cljs.core.range.cljs$core$IFn$_invoke$arity$3((0),(1),0.1));
var format_specifier = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35027__$1,new cljs.core.Keyword(null,"format-specifier","format-specifier",1758610918));
var styles = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__35027__$1,new cljs.core.Keyword(null,"styles","styles",1954480375),svg.axis.default_axis_style);
var vec__35028 = svg.scales.in$(scale);
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35028,(0),null);
var y2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35028,(1),null);
var y = svg.scales.i__GT_o(scale);
var specifier = (((format_specifier == null))?svg.scales.tick_format_specifier(scale):format_specifier);
return React.createElement("g",({"key": "axis-l", "className": new cljs.core.Keyword(null,"axis","axis",-1215390822).cljs$core$IFn$_invoke$arity$1(styles)}),React.createElement("line",({"key": "Y", "x1": (0), "y1": (y.cljs$core$IFn$_invoke$arity$1 ? y.cljs$core$IFn$_invoke$arity$1(y1) : y.call(null,y1)), "x2": (0), "y2": (y.cljs$core$IFn$_invoke$arity$1 ? y.cljs$core$IFn$_invoke$arity$1(y2) : y.call(null,y2))})),cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__4611__auto__ = (function svg$axis$iter__35031(s__35032){
return (new cljs.core.LazySeq(null,(function (){
var s__35032__$1 = s__35032;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__35032__$1);
if(temp__5753__auto__){
var s__35032__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__35032__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__35032__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__35034 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__35033 = (0);
while(true){
if((i__35033 < size__4610__auto__)){
var tick = cljs.core._nth(c__4609__auto__,i__35033);
cljs.core.chunk_append(b__35034,React.createElement("g",({"key": cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("K"), "className": "tick"}),React.createElement("text",({"key": (2), "x": (0), "y": (y.cljs$core$IFn$_invoke$arity$1 ? y.cljs$core$IFn$_invoke$arity$1(tick) : y.call(null,tick)), "dx": "-0.7ex", "dy": "0.5ex", "textAnchor": "end"}),sablono.interpreter.interpret(cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,specifier,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tick], 0)))),React.createElement("line",({"key": (1), "x1": (0), "y1": (y.cljs$core$IFn$_invoke$arity$1 ? y.cljs$core$IFn$_invoke$arity$1(tick) : y.call(null,tick)), "x2": "-0.5ex", "y2": (y.cljs$core$IFn$_invoke$arity$1 ? y.cljs$core$IFn$_invoke$arity$1(tick) : y.call(null,tick))}))));

var G__35053 = (i__35033 + (1));
i__35033 = G__35053;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35034),svg$axis$iter__35031(cljs.core.chunk_rest(s__35032__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35034),null);
}
} else {
var tick = cljs.core.first(s__35032__$2);
return cljs.core.cons(React.createElement("g",({"key": cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("K"), "className": "tick"}),React.createElement("text",({"key": (2), "x": (0), "y": (y.cljs$core$IFn$_invoke$arity$1 ? y.cljs$core$IFn$_invoke$arity$1(tick) : y.call(null,tick)), "dx": "-0.7ex", "dy": "0.5ex", "textAnchor": "end"}),sablono.interpreter.interpret(cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,specifier,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tick], 0)))),React.createElement("line",({"key": (1), "x1": (0), "y1": (y.cljs$core$IFn$_invoke$arity$1 ? y.cljs$core$IFn$_invoke$arity$1(tick) : y.call(null,tick)), "x2": "-0.5ex", "y2": (y.cljs$core$IFn$_invoke$arity$1 ? y.cljs$core$IFn$_invoke$arity$1(tick) : y.call(null,tick))}))),svg$axis$iter__35031(cljs.core.rest(s__35032__$2)));
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
svg.axis.axisRight = rum.core.build_defc((function (p__35035){
var map__35036 = p__35035;
var map__35036__$1 = cljs.core.__destructure_map(map__35036);
var scale = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__35036__$1,new cljs.core.Keyword(null,"scale","scale",-230427353),svg.scales.__GT_Identity(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),(10)));
var ticks = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__35036__$1,new cljs.core.Keyword(null,"ticks","ticks",-406190313),cljs.core.range.cljs$core$IFn$_invoke$arity$3((0),(1),0.1));
var format_specifier = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35036__$1,new cljs.core.Keyword(null,"format-specifier","format-specifier",1758610918));
var styles = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__35036__$1,new cljs.core.Keyword(null,"styles","styles",1954480375),svg.axis.default_axis_style);
var vec__35037 = svg.scales.in$(scale);
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35037,(0),null);
var y2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35037,(1),null);
var y = svg.scales.i__GT_o(scale);
var specifier = (((format_specifier == null))?svg.scales.tick_format_specifier(scale):format_specifier);
return React.createElement("g",({"key": "axis-l", "className": new cljs.core.Keyword(null,"axis","axis",-1215390822).cljs$core$IFn$_invoke$arity$1(styles)}),React.createElement("line",({"key": "Y", "x1": (0), "y1": (y.cljs$core$IFn$_invoke$arity$1 ? y.cljs$core$IFn$_invoke$arity$1(y1) : y.call(null,y1)), "x2": (0), "y2": (y.cljs$core$IFn$_invoke$arity$1 ? y.cljs$core$IFn$_invoke$arity$1(y2) : y.call(null,y2))})),cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__4611__auto__ = (function svg$axis$iter__35047(s__35048){
return (new cljs.core.LazySeq(null,(function (){
var s__35048__$1 = s__35048;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__35048__$1);
if(temp__5753__auto__){
var s__35048__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__35048__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__35048__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__35050 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__35049 = (0);
while(true){
if((i__35049 < size__4610__auto__)){
var tick = cljs.core._nth(c__4609__auto__,i__35049);
cljs.core.chunk_append(b__35050,React.createElement("g",({"key": cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("K"), "className": "tick"}),React.createElement("text",({"key": (2), "x": (0), "y": (y.cljs$core$IFn$_invoke$arity$1 ? y.cljs$core$IFn$_invoke$arity$1(tick) : y.call(null,tick)), "dx": "0.7ex", "dy": "0.5ex", "textAnchor": "start"}),sablono.interpreter.interpret(cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,specifier,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tick], 0)))),React.createElement("line",({"key": (1), "x1": (0), "y1": (y.cljs$core$IFn$_invoke$arity$1 ? y.cljs$core$IFn$_invoke$arity$1(tick) : y.call(null,tick)), "x2": "0.5ex", "y2": (y.cljs$core$IFn$_invoke$arity$1 ? y.cljs$core$IFn$_invoke$arity$1(tick) : y.call(null,tick))}))));

var G__35054 = (i__35049 + (1));
i__35049 = G__35054;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35050),svg$axis$iter__35047(cljs.core.chunk_rest(s__35048__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35050),null);
}
} else {
var tick = cljs.core.first(s__35048__$2);
return cljs.core.cons(React.createElement("g",({"key": cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("K"), "className": "tick"}),React.createElement("text",({"key": (2), "x": (0), "y": (y.cljs$core$IFn$_invoke$arity$1 ? y.cljs$core$IFn$_invoke$arity$1(tick) : y.call(null,tick)), "dx": "0.7ex", "dy": "0.5ex", "textAnchor": "start"}),sablono.interpreter.interpret(cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,specifier,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tick], 0)))),React.createElement("line",({"key": (1), "x1": (0), "y1": (y.cljs$core$IFn$_invoke$arity$1 ? y.cljs$core$IFn$_invoke$arity$1(tick) : y.call(null,tick)), "x2": "0.5ex", "y2": (y.cljs$core$IFn$_invoke$arity$1 ? y.cljs$core$IFn$_invoke$arity$1(tick) : y.call(null,tick))}))),svg$axis$iter__35047(cljs.core.rest(s__35048__$2)));
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
