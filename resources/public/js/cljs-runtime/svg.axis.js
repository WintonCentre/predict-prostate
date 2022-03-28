goog.provide('svg.axis');
svg.axis.default_axis_color = "#888";
svg.axis.default_axis_style = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"axis","axis",-1215390822),"axis--G__46279"], null);

cljs_css_modules.runtime.inject_style_BANG_(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(garden.core.css,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [".axis--G__46279",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"0.15ex",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"12pt"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["line",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),svg.axis.default_axis_color], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [".tick",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["line",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),svg.axis.default_axis_color], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),svg.axis.default_axis_color], null)], null)], null)], null)], null)),"svg.axis","default-axis-style");
svg.axis.axisBottom = rum.core.lazy_build(rum.core.build_defc,(function (p__46281){
var map__46282 = p__46281;
var map__46282__$1 = cljs.core.__destructure_map(map__46282);
var scale = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__46282__$1,new cljs.core.Keyword(null,"scale","scale",-230427353),svg.scales.__GT_Identity(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),(10)));
var ticks = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__46282__$1,new cljs.core.Keyword(null,"ticks","ticks",-406190313),cljs.core.range.cljs$core$IFn$_invoke$arity$3((0),(1),0.1));
var format_specifier = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46282__$1,new cljs.core.Keyword(null,"format-specifier","format-specifier",1758610918));
var styles = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__46282__$1,new cljs.core.Keyword(null,"styles","styles",1954480375),svg.axis.default_axis_style);
var vec__46286 = svg.scales.in$(scale);
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46286,(0),null);
var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46286,(1),null);
var x = svg.scales.i__GT_o(scale);
var specifier = (((format_specifier == null))?svg.scales.tick_format_specifier(scale):format_specifier);
return daiquiri.core.create_element("g",{'key':"axis-b",'className':new cljs.core.Keyword(null,"axis","axis",-1215390822).cljs$core$IFn$_invoke$arity$1(styles)},[daiquiri.core.create_element("line",{'key':"X",'x1':(x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(x1) : x.call(null,x1)),'y1':(0),'x2':(x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(x2) : x.call(null,x2)),'y2':(0)},[]),cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__4611__auto__ = (function svg$axis$iter__46291(s__46292){
return (new cljs.core.LazySeq(null,(function (){
var s__46292__$1 = s__46292;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__46292__$1);
if(temp__5753__auto__){
var s__46292__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__46292__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__46292__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__46294 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__46293 = (0);
while(true){
if((i__46293 < size__4610__auto__)){
var tick = cljs.core._nth(c__4609__auto__,i__46293);
cljs.core.chunk_append(b__46294,daiquiri.core.create_element("g",{'key':cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("K"),'className':"tick"},[daiquiri.core.create_element("line",{'key':(1),'x1':(x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(tick) : x.call(null,tick)),'y1':(0),'x2':(x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(tick) : x.call(null,tick)),'y2':"0.5ex"},[]),daiquiri.core.create_element("text",{'key':(2),'x':(x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(tick) : x.call(null,tick)),'dx':(0),'dy':"2.2ex",'textAnchor':"middle"},[daiquiri.interpreter.interpret(cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,specifier,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tick], 0)))])]));

var G__46360 = (i__46293 + (1));
i__46293 = G__46360;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__46294),svg$axis$iter__46291(cljs.core.chunk_rest(s__46292__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__46294),null);
}
} else {
var tick = cljs.core.first(s__46292__$2);
return cljs.core.cons(daiquiri.core.create_element("g",{'key':cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("K"),'className':"tick"},[daiquiri.core.create_element("line",{'key':(1),'x1':(x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(tick) : x.call(null,tick)),'y1':(0),'x2':(x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(tick) : x.call(null,tick)),'y2':"0.5ex"},[]),daiquiri.core.create_element("text",{'key':(2),'x':(x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(tick) : x.call(null,tick)),'dx':(0),'dy':"2.2ex",'textAnchor':"middle"},[daiquiri.interpreter.interpret(cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,specifier,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tick], 0)))])]),svg$axis$iter__46291(cljs.core.rest(s__46292__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(ticks);
})())]);
}),null,"svg.axis/axisBottom");
svg.axis.axisTop = rum.core.lazy_build(rum.core.build_defc,(function (p__46302){
var map__46303 = p__46302;
var map__46303__$1 = cljs.core.__destructure_map(map__46303);
var scale = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__46303__$1,new cljs.core.Keyword(null,"scale","scale",-230427353),svg.scales.__GT_Identity(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),(10)));
var ticks = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__46303__$1,new cljs.core.Keyword(null,"ticks","ticks",-406190313),cljs.core.range.cljs$core$IFn$_invoke$arity$3((0),(1),0.1));
var format_specifier = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46303__$1,new cljs.core.Keyword(null,"format-specifier","format-specifier",1758610918));
var styles = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__46303__$1,new cljs.core.Keyword(null,"styles","styles",1954480375),svg.axis.default_axis_style);
var vec__46307 = svg.scales.in$(scale);
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46307,(0),null);
var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46307,(1),null);
var x = svg.scales.i__GT_o(scale);
var specifier = (((format_specifier == null))?svg.scales.tick_format_specifier(scale):format_specifier);
return daiquiri.core.create_element("g",{'key':"axis-b",'className':new cljs.core.Keyword(null,"axis","axis",-1215390822).cljs$core$IFn$_invoke$arity$1(styles)},[daiquiri.core.create_element("line",{'key':"X",'x1':(x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(x1) : x.call(null,x1)),'y1':(0),'x2':(x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(x2) : x.call(null,x2)),'y2':(0)},[]),cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__4611__auto__ = (function svg$axis$iter__46311(s__46312){
return (new cljs.core.LazySeq(null,(function (){
var s__46312__$1 = s__46312;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__46312__$1);
if(temp__5753__auto__){
var s__46312__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__46312__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__46312__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__46314 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__46313 = (0);
while(true){
if((i__46313 < size__4610__auto__)){
var tick = cljs.core._nth(c__4609__auto__,i__46313);
cljs.core.chunk_append(b__46314,daiquiri.core.create_element("g",{'key':cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("K"),'className':"tick"},[daiquiri.core.create_element("line",{'key':(1),'x1':(x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(tick) : x.call(null,tick)),'y1':(0),'x2':(x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(tick) : x.call(null,tick)),'y2':"-0.5ex"},[]),daiquiri.core.create_element("text",{'key':(2),'x':(x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(tick) : x.call(null,tick)),'dx':(0),'dy':"-1ex",'textAnchor':"middle"},[daiquiri.interpreter.interpret(cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,specifier,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tick], 0)))])]));

var G__46373 = (i__46313 + (1));
i__46313 = G__46373;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__46314),svg$axis$iter__46311(cljs.core.chunk_rest(s__46312__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__46314),null);
}
} else {
var tick = cljs.core.first(s__46312__$2);
return cljs.core.cons(daiquiri.core.create_element("g",{'key':cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("K"),'className':"tick"},[daiquiri.core.create_element("line",{'key':(1),'x1':(x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(tick) : x.call(null,tick)),'y1':(0),'x2':(x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(tick) : x.call(null,tick)),'y2':"-0.5ex"},[]),daiquiri.core.create_element("text",{'key':(2),'x':(x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(tick) : x.call(null,tick)),'dx':(0),'dy':"-1ex",'textAnchor':"middle"},[daiquiri.interpreter.interpret(cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,specifier,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tick], 0)))])]),svg$axis$iter__46311(cljs.core.rest(s__46312__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(ticks);
})())]);
}),null,"svg.axis/axisTop");
svg.axis.axisLeft = rum.core.lazy_build(rum.core.build_defc,(function (p__46315){
var map__46316 = p__46315;
var map__46316__$1 = cljs.core.__destructure_map(map__46316);
var scale = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__46316__$1,new cljs.core.Keyword(null,"scale","scale",-230427353),svg.scales.__GT_Identity(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),(10)));
var ticks = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__46316__$1,new cljs.core.Keyword(null,"ticks","ticks",-406190313),cljs.core.range.cljs$core$IFn$_invoke$arity$3((0),(1),0.1));
var format_specifier = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46316__$1,new cljs.core.Keyword(null,"format-specifier","format-specifier",1758610918));
var styles = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__46316__$1,new cljs.core.Keyword(null,"styles","styles",1954480375),svg.axis.default_axis_style);
var vec__46317 = svg.scales.in$(scale);
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46317,(0),null);
var y2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46317,(1),null);
var y = svg.scales.i__GT_o(scale);
var specifier = (((format_specifier == null))?svg.scales.tick_format_specifier(scale):format_specifier);
return daiquiri.core.create_element("g",{'key':"axis-l",'className':new cljs.core.Keyword(null,"axis","axis",-1215390822).cljs$core$IFn$_invoke$arity$1(styles)},[daiquiri.core.create_element("line",{'key':"Y",'x1':(0),'y1':(y.cljs$core$IFn$_invoke$arity$1 ? y.cljs$core$IFn$_invoke$arity$1(y1) : y.call(null,y1)),'x2':(0),'y2':(y.cljs$core$IFn$_invoke$arity$1 ? y.cljs$core$IFn$_invoke$arity$1(y2) : y.call(null,y2))},[]),cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__4611__auto__ = (function svg$axis$iter__46321(s__46322){
return (new cljs.core.LazySeq(null,(function (){
var s__46322__$1 = s__46322;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__46322__$1);
if(temp__5753__auto__){
var s__46322__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__46322__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__46322__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__46324 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__46323 = (0);
while(true){
if((i__46323 < size__4610__auto__)){
var tick = cljs.core._nth(c__4609__auto__,i__46323);
cljs.core.chunk_append(b__46324,daiquiri.core.create_element("g",{'key':cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("K"),'className':"tick"},[daiquiri.core.create_element("text",{'key':(2),'x':(0),'y':(y.cljs$core$IFn$_invoke$arity$1 ? y.cljs$core$IFn$_invoke$arity$1(tick) : y.call(null,tick)),'dx':"-0.7ex",'dy':"0.5ex",'textAnchor':"end"},[daiquiri.interpreter.interpret(cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,specifier,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tick], 0)))]),daiquiri.core.create_element("line",{'key':(1),'x1':(0),'y1':(y.cljs$core$IFn$_invoke$arity$1 ? y.cljs$core$IFn$_invoke$arity$1(tick) : y.call(null,tick)),'x2':"-0.5ex",'y2':(y.cljs$core$IFn$_invoke$arity$1 ? y.cljs$core$IFn$_invoke$arity$1(tick) : y.call(null,tick))},[])]));

var G__46380 = (i__46323 + (1));
i__46323 = G__46380;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__46324),svg$axis$iter__46321(cljs.core.chunk_rest(s__46322__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__46324),null);
}
} else {
var tick = cljs.core.first(s__46322__$2);
return cljs.core.cons(daiquiri.core.create_element("g",{'key':cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("K"),'className':"tick"},[daiquiri.core.create_element("text",{'key':(2),'x':(0),'y':(y.cljs$core$IFn$_invoke$arity$1 ? y.cljs$core$IFn$_invoke$arity$1(tick) : y.call(null,tick)),'dx':"-0.7ex",'dy':"0.5ex",'textAnchor':"end"},[daiquiri.interpreter.interpret(cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,specifier,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tick], 0)))]),daiquiri.core.create_element("line",{'key':(1),'x1':(0),'y1':(y.cljs$core$IFn$_invoke$arity$1 ? y.cljs$core$IFn$_invoke$arity$1(tick) : y.call(null,tick)),'x2':"-0.5ex",'y2':(y.cljs$core$IFn$_invoke$arity$1 ? y.cljs$core$IFn$_invoke$arity$1(tick) : y.call(null,tick))},[])]),svg$axis$iter__46321(cljs.core.rest(s__46322__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(ticks);
})())]);
}),null,"svg.axis/axisLeft");
svg.axis.axisRight = rum.core.lazy_build(rum.core.build_defc,(function (p__46325){
var map__46326 = p__46325;
var map__46326__$1 = cljs.core.__destructure_map(map__46326);
var scale = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__46326__$1,new cljs.core.Keyword(null,"scale","scale",-230427353),svg.scales.__GT_Identity(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),(10)));
var ticks = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__46326__$1,new cljs.core.Keyword(null,"ticks","ticks",-406190313),cljs.core.range.cljs$core$IFn$_invoke$arity$3((0),(1),0.1));
var format_specifier = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46326__$1,new cljs.core.Keyword(null,"format-specifier","format-specifier",1758610918));
var styles = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__46326__$1,new cljs.core.Keyword(null,"styles","styles",1954480375),svg.axis.default_axis_style);
var vec__46327 = svg.scales.in$(scale);
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46327,(0),null);
var y2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46327,(1),null);
var y = svg.scales.i__GT_o(scale);
var specifier = (((format_specifier == null))?svg.scales.tick_format_specifier(scale):format_specifier);
return daiquiri.core.create_element("g",{'key':"axis-l",'className':new cljs.core.Keyword(null,"axis","axis",-1215390822).cljs$core$IFn$_invoke$arity$1(styles)},[daiquiri.core.create_element("line",{'key':"Y",'x1':(0),'y1':(y.cljs$core$IFn$_invoke$arity$1 ? y.cljs$core$IFn$_invoke$arity$1(y1) : y.call(null,y1)),'x2':(0),'y2':(y.cljs$core$IFn$_invoke$arity$1 ? y.cljs$core$IFn$_invoke$arity$1(y2) : y.call(null,y2))},[]),cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__4611__auto__ = (function svg$axis$iter__46330(s__46331){
return (new cljs.core.LazySeq(null,(function (){
var s__46331__$1 = s__46331;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__46331__$1);
if(temp__5753__auto__){
var s__46331__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__46331__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__46331__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__46333 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__46332 = (0);
while(true){
if((i__46332 < size__4610__auto__)){
var tick = cljs.core._nth(c__4609__auto__,i__46332);
cljs.core.chunk_append(b__46333,daiquiri.core.create_element("g",{'key':cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("K"),'className':"tick"},[daiquiri.core.create_element("text",{'key':(2),'x':(0),'y':(y.cljs$core$IFn$_invoke$arity$1 ? y.cljs$core$IFn$_invoke$arity$1(tick) : y.call(null,tick)),'dx':"0.7ex",'dy':"0.5ex",'textAnchor':"start"},[daiquiri.interpreter.interpret(cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,specifier,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tick], 0)))]),daiquiri.core.create_element("line",{'key':(1),'x1':(0),'y1':(y.cljs$core$IFn$_invoke$arity$1 ? y.cljs$core$IFn$_invoke$arity$1(tick) : y.call(null,tick)),'x2':"0.5ex",'y2':(y.cljs$core$IFn$_invoke$arity$1 ? y.cljs$core$IFn$_invoke$arity$1(tick) : y.call(null,tick))},[])]));

var G__46384 = (i__46332 + (1));
i__46332 = G__46384;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__46333),svg$axis$iter__46330(cljs.core.chunk_rest(s__46331__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__46333),null);
}
} else {
var tick = cljs.core.first(s__46331__$2);
return cljs.core.cons(daiquiri.core.create_element("g",{'key':cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("K"),'className':"tick"},[daiquiri.core.create_element("text",{'key':(2),'x':(0),'y':(y.cljs$core$IFn$_invoke$arity$1 ? y.cljs$core$IFn$_invoke$arity$1(tick) : y.call(null,tick)),'dx':"0.7ex",'dy':"0.5ex",'textAnchor':"start"},[daiquiri.interpreter.interpret(cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,specifier,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tick], 0)))]),daiquiri.core.create_element("line",{'key':(1),'x1':(0),'y1':(y.cljs$core$IFn$_invoke$arity$1 ? y.cljs$core$IFn$_invoke$arity$1(tick) : y.call(null,tick)),'x2':"0.5ex",'y2':(y.cljs$core$IFn$_invoke$arity$1 ? y.cljs$core$IFn$_invoke$arity$1(tick) : y.call(null,tick))},[])]),svg$axis$iter__46330(cljs.core.rest(s__46331__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(ticks);
})())]);
}),null,"svg.axis/axisRight");

//# sourceMappingURL=svg.axis.js.map
