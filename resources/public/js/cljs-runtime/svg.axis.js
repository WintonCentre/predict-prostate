goog.provide('svg.axis');
svg.axis.default_axis_color = "#888";
svg.axis.default_axis_style = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"axis","axis",-1215390822),"axis--G__33774"], null);

cljs_css_modules.runtime.inject_style_BANG_(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(garden.core.css,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [".axis--G__33774",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"0.15ex",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"12pt"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["line",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),svg.axis.default_axis_color], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [".tick",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["line",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),svg.axis.default_axis_color], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),svg.axis.default_axis_color], null)], null)], null)], null)], null)),"svg.axis","default-axis-style");
svg.axis.axisBottom = rum.core.lazy_build(rum.core.build_defc,(function (p__33775){
var map__33776 = p__33775;
var map__33776__$1 = cljs.core.__destructure_map(map__33776);
var scale = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__33776__$1,new cljs.core.Keyword(null,"scale","scale",-230427353),svg.scales.__GT_Identity(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),(10)));
var ticks = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__33776__$1,new cljs.core.Keyword(null,"ticks","ticks",-406190313),cljs.core.range.cljs$core$IFn$_invoke$arity$3((0),(1),0.1));
var format_specifier = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33776__$1,new cljs.core.Keyword(null,"format-specifier","format-specifier",1758610918));
var styles = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__33776__$1,new cljs.core.Keyword(null,"styles","styles",1954480375),svg.axis.default_axis_style);
var vec__33779 = svg.scales.in$(scale);
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33779,(0),null);
var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33779,(1),null);
var x = svg.scales.i__GT_o(scale);
var specifier = (((format_specifier == null))?svg.scales.tick_format_specifier(scale):format_specifier);
return daiquiri.core.create_element("g",{'key':"axis-b",'className':new cljs.core.Keyword(null,"axis","axis",-1215390822).cljs$core$IFn$_invoke$arity$1(styles)},[daiquiri.core.create_element("line",{'key':"X",'x1':(x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(x1) : x.call(null,x1)),'y1':(0),'x2':(x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(x2) : x.call(null,x2)),'y2':(0)},[]),cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__4611__auto__ = (function svg$axis$iter__33784(s__33785){
return (new cljs.core.LazySeq(null,(function (){
var s__33785__$1 = s__33785;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__33785__$1);
if(temp__5753__auto__){
var s__33785__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__33785__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__33785__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__33787 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__33786 = (0);
while(true){
if((i__33786 < size__4610__auto__)){
var tick = cljs.core._nth(c__4609__auto__,i__33786);
cljs.core.chunk_append(b__33787,daiquiri.core.create_element("g",{'key':cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("K"),'className':"tick"},[daiquiri.core.create_element("line",{'key':(1),'x1':(x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(tick) : x.call(null,tick)),'y1':(0),'x2':(x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(tick) : x.call(null,tick)),'y2':"0.5ex"},[]),daiquiri.core.create_element("text",{'key':(2),'x':(x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(tick) : x.call(null,tick)),'dx':(0),'dy':"2.2ex",'textAnchor':"middle"},[daiquiri.interpreter.interpret(cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,specifier,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tick], 0)))])]));

var G__33815 = (i__33786 + (1));
i__33786 = G__33815;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__33787),svg$axis$iter__33784(cljs.core.chunk_rest(s__33785__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__33787),null);
}
} else {
var tick = cljs.core.first(s__33785__$2);
return cljs.core.cons(daiquiri.core.create_element("g",{'key':cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("K"),'className':"tick"},[daiquiri.core.create_element("line",{'key':(1),'x1':(x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(tick) : x.call(null,tick)),'y1':(0),'x2':(x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(tick) : x.call(null,tick)),'y2':"0.5ex"},[]),daiquiri.core.create_element("text",{'key':(2),'x':(x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(tick) : x.call(null,tick)),'dx':(0),'dy':"2.2ex",'textAnchor':"middle"},[daiquiri.interpreter.interpret(cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,specifier,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tick], 0)))])]),svg$axis$iter__33784(cljs.core.rest(s__33785__$2)));
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
svg.axis.axisTop = rum.core.lazy_build(rum.core.build_defc,(function (p__33788){
var map__33789 = p__33788;
var map__33789__$1 = cljs.core.__destructure_map(map__33789);
var scale = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__33789__$1,new cljs.core.Keyword(null,"scale","scale",-230427353),svg.scales.__GT_Identity(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),(10)));
var ticks = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__33789__$1,new cljs.core.Keyword(null,"ticks","ticks",-406190313),cljs.core.range.cljs$core$IFn$_invoke$arity$3((0),(1),0.1));
var format_specifier = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33789__$1,new cljs.core.Keyword(null,"format-specifier","format-specifier",1758610918));
var styles = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__33789__$1,new cljs.core.Keyword(null,"styles","styles",1954480375),svg.axis.default_axis_style);
var vec__33790 = svg.scales.in$(scale);
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33790,(0),null);
var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33790,(1),null);
var x = svg.scales.i__GT_o(scale);
var specifier = (((format_specifier == null))?svg.scales.tick_format_specifier(scale):format_specifier);
return daiquiri.core.create_element("g",{'key':"axis-b",'className':new cljs.core.Keyword(null,"axis","axis",-1215390822).cljs$core$IFn$_invoke$arity$1(styles)},[daiquiri.core.create_element("line",{'key':"X",'x1':(x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(x1) : x.call(null,x1)),'y1':(0),'x2':(x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(x2) : x.call(null,x2)),'y2':(0)},[]),cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__4611__auto__ = (function svg$axis$iter__33793(s__33794){
return (new cljs.core.LazySeq(null,(function (){
var s__33794__$1 = s__33794;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__33794__$1);
if(temp__5753__auto__){
var s__33794__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__33794__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__33794__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__33796 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__33795 = (0);
while(true){
if((i__33795 < size__4610__auto__)){
var tick = cljs.core._nth(c__4609__auto__,i__33795);
cljs.core.chunk_append(b__33796,daiquiri.core.create_element("g",{'key':cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("K"),'className':"tick"},[daiquiri.core.create_element("line",{'key':(1),'x1':(x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(tick) : x.call(null,tick)),'y1':(0),'x2':(x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(tick) : x.call(null,tick)),'y2':"-0.5ex"},[]),daiquiri.core.create_element("text",{'key':(2),'x':(x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(tick) : x.call(null,tick)),'dx':(0),'dy':"-1ex",'textAnchor':"middle"},[daiquiri.interpreter.interpret(cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,specifier,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tick], 0)))])]));

var G__33816 = (i__33795 + (1));
i__33795 = G__33816;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__33796),svg$axis$iter__33793(cljs.core.chunk_rest(s__33794__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__33796),null);
}
} else {
var tick = cljs.core.first(s__33794__$2);
return cljs.core.cons(daiquiri.core.create_element("g",{'key':cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("K"),'className':"tick"},[daiquiri.core.create_element("line",{'key':(1),'x1':(x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(tick) : x.call(null,tick)),'y1':(0),'x2':(x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(tick) : x.call(null,tick)),'y2':"-0.5ex"},[]),daiquiri.core.create_element("text",{'key':(2),'x':(x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(tick) : x.call(null,tick)),'dx':(0),'dy':"-1ex",'textAnchor':"middle"},[daiquiri.interpreter.interpret(cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,specifier,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tick], 0)))])]),svg$axis$iter__33793(cljs.core.rest(s__33794__$2)));
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
svg.axis.axisLeft = rum.core.lazy_build(rum.core.build_defc,(function (p__33797){
var map__33798 = p__33797;
var map__33798__$1 = cljs.core.__destructure_map(map__33798);
var scale = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__33798__$1,new cljs.core.Keyword(null,"scale","scale",-230427353),svg.scales.__GT_Identity(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),(10)));
var ticks = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__33798__$1,new cljs.core.Keyword(null,"ticks","ticks",-406190313),cljs.core.range.cljs$core$IFn$_invoke$arity$3((0),(1),0.1));
var format_specifier = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33798__$1,new cljs.core.Keyword(null,"format-specifier","format-specifier",1758610918));
var styles = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__33798__$1,new cljs.core.Keyword(null,"styles","styles",1954480375),svg.axis.default_axis_style);
var vec__33799 = svg.scales.in$(scale);
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33799,(0),null);
var y2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33799,(1),null);
var y = svg.scales.i__GT_o(scale);
var specifier = (((format_specifier == null))?svg.scales.tick_format_specifier(scale):format_specifier);
return daiquiri.core.create_element("g",{'key':"axis-l",'className':new cljs.core.Keyword(null,"axis","axis",-1215390822).cljs$core$IFn$_invoke$arity$1(styles)},[daiquiri.core.create_element("line",{'key':"Y",'x1':(0),'y1':(y.cljs$core$IFn$_invoke$arity$1 ? y.cljs$core$IFn$_invoke$arity$1(y1) : y.call(null,y1)),'x2':(0),'y2':(y.cljs$core$IFn$_invoke$arity$1 ? y.cljs$core$IFn$_invoke$arity$1(y2) : y.call(null,y2))},[]),cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__4611__auto__ = (function svg$axis$iter__33802(s__33803){
return (new cljs.core.LazySeq(null,(function (){
var s__33803__$1 = s__33803;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__33803__$1);
if(temp__5753__auto__){
var s__33803__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__33803__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__33803__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__33805 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__33804 = (0);
while(true){
if((i__33804 < size__4610__auto__)){
var tick = cljs.core._nth(c__4609__auto__,i__33804);
cljs.core.chunk_append(b__33805,daiquiri.core.create_element("g",{'key':cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("K"),'className':"tick"},[daiquiri.core.create_element("text",{'key':(2),'x':(0),'y':(y.cljs$core$IFn$_invoke$arity$1 ? y.cljs$core$IFn$_invoke$arity$1(tick) : y.call(null,tick)),'dx':"-0.7ex",'dy':"0.5ex",'textAnchor':"end"},[daiquiri.interpreter.interpret(cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,specifier,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tick], 0)))]),daiquiri.core.create_element("line",{'key':(1),'x1':(0),'y1':(y.cljs$core$IFn$_invoke$arity$1 ? y.cljs$core$IFn$_invoke$arity$1(tick) : y.call(null,tick)),'x2':"-0.5ex",'y2':(y.cljs$core$IFn$_invoke$arity$1 ? y.cljs$core$IFn$_invoke$arity$1(tick) : y.call(null,tick))},[])]));

var G__33817 = (i__33804 + (1));
i__33804 = G__33817;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__33805),svg$axis$iter__33802(cljs.core.chunk_rest(s__33803__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__33805),null);
}
} else {
var tick = cljs.core.first(s__33803__$2);
return cljs.core.cons(daiquiri.core.create_element("g",{'key':cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("K"),'className':"tick"},[daiquiri.core.create_element("text",{'key':(2),'x':(0),'y':(y.cljs$core$IFn$_invoke$arity$1 ? y.cljs$core$IFn$_invoke$arity$1(tick) : y.call(null,tick)),'dx':"-0.7ex",'dy':"0.5ex",'textAnchor':"end"},[daiquiri.interpreter.interpret(cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,specifier,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tick], 0)))]),daiquiri.core.create_element("line",{'key':(1),'x1':(0),'y1':(y.cljs$core$IFn$_invoke$arity$1 ? y.cljs$core$IFn$_invoke$arity$1(tick) : y.call(null,tick)),'x2':"-0.5ex",'y2':(y.cljs$core$IFn$_invoke$arity$1 ? y.cljs$core$IFn$_invoke$arity$1(tick) : y.call(null,tick))},[])]),svg$axis$iter__33802(cljs.core.rest(s__33803__$2)));
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
svg.axis.axisRight = rum.core.lazy_build(rum.core.build_defc,(function (p__33806){
var map__33807 = p__33806;
var map__33807__$1 = cljs.core.__destructure_map(map__33807);
var scale = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__33807__$1,new cljs.core.Keyword(null,"scale","scale",-230427353),svg.scales.__GT_Identity(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),(10)));
var ticks = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__33807__$1,new cljs.core.Keyword(null,"ticks","ticks",-406190313),cljs.core.range.cljs$core$IFn$_invoke$arity$3((0),(1),0.1));
var format_specifier = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33807__$1,new cljs.core.Keyword(null,"format-specifier","format-specifier",1758610918));
var styles = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__33807__$1,new cljs.core.Keyword(null,"styles","styles",1954480375),svg.axis.default_axis_style);
var vec__33808 = svg.scales.in$(scale);
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33808,(0),null);
var y2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33808,(1),null);
var y = svg.scales.i__GT_o(scale);
var specifier = (((format_specifier == null))?svg.scales.tick_format_specifier(scale):format_specifier);
return daiquiri.core.create_element("g",{'key':"axis-l",'className':new cljs.core.Keyword(null,"axis","axis",-1215390822).cljs$core$IFn$_invoke$arity$1(styles)},[daiquiri.core.create_element("line",{'key':"Y",'x1':(0),'y1':(y.cljs$core$IFn$_invoke$arity$1 ? y.cljs$core$IFn$_invoke$arity$1(y1) : y.call(null,y1)),'x2':(0),'y2':(y.cljs$core$IFn$_invoke$arity$1 ? y.cljs$core$IFn$_invoke$arity$1(y2) : y.call(null,y2))},[]),cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__4611__auto__ = (function svg$axis$iter__33811(s__33812){
return (new cljs.core.LazySeq(null,(function (){
var s__33812__$1 = s__33812;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__33812__$1);
if(temp__5753__auto__){
var s__33812__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__33812__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__33812__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__33814 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__33813 = (0);
while(true){
if((i__33813 < size__4610__auto__)){
var tick = cljs.core._nth(c__4609__auto__,i__33813);
cljs.core.chunk_append(b__33814,daiquiri.core.create_element("g",{'key':cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("K"),'className':"tick"},[daiquiri.core.create_element("text",{'key':(2),'x':(0),'y':(y.cljs$core$IFn$_invoke$arity$1 ? y.cljs$core$IFn$_invoke$arity$1(tick) : y.call(null,tick)),'dx':"0.7ex",'dy':"0.5ex",'textAnchor':"start"},[daiquiri.interpreter.interpret(cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,specifier,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tick], 0)))]),daiquiri.core.create_element("line",{'key':(1),'x1':(0),'y1':(y.cljs$core$IFn$_invoke$arity$1 ? y.cljs$core$IFn$_invoke$arity$1(tick) : y.call(null,tick)),'x2':"0.5ex",'y2':(y.cljs$core$IFn$_invoke$arity$1 ? y.cljs$core$IFn$_invoke$arity$1(tick) : y.call(null,tick))},[])]));

var G__33818 = (i__33813 + (1));
i__33813 = G__33818;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__33814),svg$axis$iter__33811(cljs.core.chunk_rest(s__33812__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__33814),null);
}
} else {
var tick = cljs.core.first(s__33812__$2);
return cljs.core.cons(daiquiri.core.create_element("g",{'key':cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("K"),'className':"tick"},[daiquiri.core.create_element("text",{'key':(2),'x':(0),'y':(y.cljs$core$IFn$_invoke$arity$1 ? y.cljs$core$IFn$_invoke$arity$1(tick) : y.call(null,tick)),'dx':"0.7ex",'dy':"0.5ex",'textAnchor':"start"},[daiquiri.interpreter.interpret(cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,specifier,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tick], 0)))]),daiquiri.core.create_element("line",{'key':(1),'x1':(0),'y1':(y.cljs$core$IFn$_invoke$arity$1 ? y.cljs$core$IFn$_invoke$arity$1(tick) : y.call(null,tick)),'x2':"0.5ex",'y2':(y.cljs$core$IFn$_invoke$arity$1 ? y.cljs$core$IFn$_invoke$arity$1(tick) : y.call(null,tick))},[])]),svg$axis$iter__33811(cljs.core.rest(s__33812__$2)));
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
