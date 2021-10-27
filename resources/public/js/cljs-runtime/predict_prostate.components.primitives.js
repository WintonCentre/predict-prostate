goog.provide('predict_prostate.components.primitives');
predict_prostate.components.primitives.psz = (24);
predict_prostate.components.primitives.x_centre_off = (((predict_prostate.components.primitives.psz / (2)) | (0)) - (1));
predict_prostate.components.primitives.cx = (predict_prostate.components.primitives.psz / (2));
predict_prostate.components.primitives.cy = (predict_prostate.components.primitives.cx + (1));
predict_prostate.components.primitives.gap = (2);
predict_prostate.components.primitives.r = (predict_prostate.components.primitives.cx - predict_prostate.components.primitives.gap);
predict_prostate.components.primitives.xoff = (15);
predict_prostate.components.primitives.yoff = (((10) * ((3) + predict_prostate.components.primitives.psz)) - (1));
predict_prostate.components.primitives.left = (function predict_prostate$components$primitives$left(x){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(((predict_prostate.components.primitives.psz * ((predict_prostate.components.primitives.x_centre_off - x) - (2))) + predict_prostate.components.primitives.xoff)),"px"].join('');
});
predict_prostate.components.primitives.bottom = (function predict_prostate$components$primitives$bottom(y){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(((predict_prostate.components.primitives.psz * y) + (- predict_prostate.components.primitives.yoff))),"px"].join('');
});
predict_prostate.components.primitives.pic = rum.core.build_defc((function (p__47020){
var map__47021 = p__47020;
var map__47021__$1 = (((((!((map__47021 == null))))?(((((map__47021.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47021.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47021):map__47021);
var fill = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47021__$1,new cljs.core.Keyword(null,"fill","fill",883462889));
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47021__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47021__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return React.createElement("div",({"style": ({"fontSize": predict_prostate.components.primitives.psz, "display": "inline-block", "position": "absolute", "left": predict_prostate.components.primitives.left(x), "bottom": predict_prostate.components.primitives.bottom(y)})}),React.createElement("svg",({"width": predict_prostate.components.primitives.psz, "height": predict_prostate.components.primitives.psz}),React.createElement("circle",({"cx": predict_prostate.components.primitives.cx, "cy": predict_prostate.components.primitives.cy, "r": predict_prostate.components.primitives.r, "fill": fill, "stroke": fill, "strokeWidth": 2.5}))));
}),null,"pic");
predict_prostate.components.primitives.pic_dead = rum.core.build_defc((function (p__47029){
var map__47030 = p__47029;
var map__47030__$1 = (((((!((map__47030 == null))))?(((((map__47030.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47030.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47030):map__47030);
var fill = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47030__$1,new cljs.core.Keyword(null,"fill","fill",883462889));
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47030__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47030__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return React.createElement("div",({"style": ({"fontSize": predict_prostate.components.primitives.psz, "display": "inline-block", "position": "absolute", "left": predict_prostate.components.primitives.left(x), "bottom": predict_prostate.components.primitives.bottom(y)})}),React.createElement("svg",({"width": predict_prostate.components.primitives.psz, "height": predict_prostate.components.primitives.psz}),React.createElement("circle",({"cx": predict_prostate.components.primitives.cx, "cy": predict_prostate.components.primitives.cy, "r": predict_prostate.components.primitives.r, "fill": "none", "stroke": fill, "strokeWidth": 2.5}))));
}),null,"pic-dead");
predict_prostate.components.primitives.dead_icon = rum.core.build_defc((function (fill){
return React.createElement("svg",({"width": predict_prostate.components.primitives.psz, "height": predict_prostate.components.primitives.psz, "style": ({"marginBottom": (-5)})}),React.createElement("circle",({"cx": predict_prostate.components.primitives.cx, "cy": predict_prostate.components.primitives.cy, "r": predict_prostate.components.primitives.r, "fill": fill, "stroke": "none"})));
}),null,"dead-icon");
predict_prostate.components.primitives.open_icon = rum.core.build_defc((function (fill){
return React.createElement("svg",({"width": predict_prostate.components.primitives.psz, "height": predict_prostate.components.primitives.psz, "style": ({"marginBottom": (-5)})}),React.createElement("circle",({"cx": predict_prostate.components.primitives.cx, "cy": predict_prostate.components.primitives.cy, "r": predict_prostate.components.primitives.r, "strokeWidth": 2.5, "stroke": fill, "fill": "none"})));
}),null,"open-icon");
predict_prostate.components.primitives.circ_STAR_ = rum.core.build_defc((function (fill,opacity,stroke,r,cx){
return React.createElement("circle",({"cx": (cx + r), "cy": r, "r": r, "fill": fill, "opacity": opacity, "stroke": stroke, "strokeWidth": (1)}));
}),null,"circ*");
predict_prostate.components.primitives.circ = rum.core.build_defc((function (fill,stroke,r,cx){
return sablono.interpreter.interpret((predict_prostate.components.primitives.circ_STAR_.cljs$core$IFn$_invoke$arity$5 ? predict_prostate.components.primitives.circ_STAR_.cljs$core$IFn$_invoke$arity$5(fill,(1),stroke,r,cx) : predict_prostate.components.primitives.circ_STAR_.call(null,fill,(1),stroke,r,cx)));
}),null,"circ");
predict_prostate.components.primitives.tally_STAR_ = rum.core.build_defc((function (fill,opacity,w,x){
return React.createElement("rect",({"fill": fill, "opacity": opacity, "x": x, "y": (0), "height": (20), "width": w}));
}),null,"tally*");
predict_prostate.components.primitives.tally = rum.core.build_defc((function (fill,w,x){
return sablono.interpreter.interpret((predict_prostate.components.primitives.tally_STAR_.cljs$core$IFn$_invoke$arity$4 ? predict_prostate.components.primitives.tally_STAR_.cljs$core$IFn$_invoke$arity$4(fill,(1),w,x) : predict_prostate.components.primitives.tally_STAR_.call(null,fill,(1),w,x)));
}),null,"tally");
predict_prostate.components.primitives.twidth = (3);
predict_prostate.components.primitives.tspace = (4);
predict_prostate.components.primitives.blob = rum.core.build_defc((function (p__47040){
var map__47041 = p__47040;
var map__47041__$1 = (((((!((map__47041 == null))))?(((((map__47041.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47041.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47041):map__47041);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47041__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var fill = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47041__$1,new cljs.core.Keyword(null,"fill","fill",883462889));
var r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47041__$1,new cljs.core.Keyword(null,"r","r",-471384190));
var tally_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47041__$1,new cljs.core.Keyword(null,"tally?","tally?",-1847300034));
return React.createElement("svg",({"key": key, "width": ((2) * r), "height": ((2) * r)}),(cljs.core.truth_(tally_QMARK_)?sablono.interpreter.interpret((predict_prostate.components.primitives.tally.cljs$core$IFn$_invoke$arity$3 ? predict_prostate.components.primitives.tally.cljs$core$IFn$_invoke$arity$3(fill,(1),(0)) : predict_prostate.components.primitives.tally.call(null,fill,(1),(0)))):sablono.interpreter.interpret((function (){var G__47044 = fill;
var G__47045 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fill,"white"))?"#BBBBBB":"none");
var G__47046 = r;
var G__47047 = (0);
return (predict_prostate.components.primitives.circ.cljs$core$IFn$_invoke$arity$4 ? predict_prostate.components.primitives.circ.cljs$core$IFn$_invoke$arity$4(G__47044,G__47045,G__47046,G__47047) : predict_prostate.components.primitives.circ.call(null,G__47044,G__47045,G__47046,G__47047));
})())));
}),null,"blob");
predict_prostate.components.primitives.blob_10 = rum.core.build_defc((function (p__47050){
var map__47051 = p__47050;
var map__47051__$1 = (((((!((map__47051 == null))))?(((((map__47051.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47051.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47051):map__47051);
var fill = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47051__$1,new cljs.core.Keyword(null,"fill","fill",883462889));
var r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47051__$1,new cljs.core.Keyword(null,"r","r",-471384190));
var tally_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47051__$1,new cljs.core.Keyword(null,"tally?","tally?",-1847300034));
return React.createElement("svg",({"width": ((11) * (cljs.core.truth_(tally_QMARK_)?predict_prostate.components.primitives.tspace:((2) * r))), "height": (cljs.core.truth_(tally_QMARK_)?(15):((2) * r))}),sablono.interpreter.interpret(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__47049_SHARP_){
return rum.core.with_key((cljs.core.truth_(tally_QMARK_)?(function (){var G__47053 = fill;
var G__47054 = predict_prostate.components.primitives.twidth;
var G__47055 = (predict_prostate.components.primitives.tspace * p1__47049_SHARP_);
return (predict_prostate.components.primitives.tally.cljs$core$IFn$_invoke$arity$3 ? predict_prostate.components.primitives.tally.cljs$core$IFn$_invoke$arity$3(G__47053,G__47054,G__47055) : predict_prostate.components.primitives.tally.call(null,G__47053,G__47054,G__47055));
})():(function (){var G__47056 = fill;
var G__47057 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fill,"white"))?"#BBBBBB":"none");
var G__47058 = r;
var G__47059 = (((2) * r) * p1__47049_SHARP_);
return (predict_prostate.components.primitives.circ.cljs$core$IFn$_invoke$arity$4 ? predict_prostate.components.primitives.circ.cljs$core$IFn$_invoke$arity$4(G__47056,G__47057,G__47058,G__47059) : predict_prostate.components.primitives.circ.call(null,G__47056,G__47057,G__47058,G__47059));
})()),["b10-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__47049_SHARP_)].join(''));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1((10)))));
}),null,"blob-10");
predict_prostate.components.primitives.mixed_10 = rum.core.build_defc((function (p__47064){
var map__47065 = p__47064;
var map__47065__$1 = (((((!((map__47065 == null))))?(((((map__47065.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47065.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47065):map__47065);
var fill = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47065__$1,new cljs.core.Keyword(null,"fill","fill",883462889));
var r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47065__$1,new cljs.core.Keyword(null,"r","r",-471384190));
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47065__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var tally_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47065__$1,new cljs.core.Keyword(null,"tally?","tally?",-1847300034));
return React.createElement("svg",({"key": "m10", "width": ((11) * (cljs.core.truth_(tally_QMARK_)?predict_prostate.components.primitives.tspace:((2) * r))), "height": (cljs.core.truth_(tally_QMARK_)?(15):((2) * r))}),sablono.interpreter.interpret(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__47061_SHARP_){
return rum.core.with_key((cljs.core.truth_(tally_QMARK_)?(function (){var G__47067 = fill;
var G__47068 = predict_prostate.components.primitives.twidth;
var G__47069 = (predict_prostate.components.primitives.tspace * p1__47061_SHARP_);
return (predict_prostate.components.primitives.tally.cljs$core$IFn$_invoke$arity$3 ? predict_prostate.components.primitives.tally.cljs$core$IFn$_invoke$arity$3(G__47067,G__47068,G__47069) : predict_prostate.components.primitives.tally.call(null,G__47067,G__47068,G__47069));
})():(function (){var G__47070 = fill;
var G__47071 = (1);
var G__47072 = "none";
var G__47073 = r;
var G__47074 = (((2) * r) * p1__47061_SHARP_);
return (predict_prostate.components.primitives.circ_STAR_.cljs$core$IFn$_invoke$arity$5 ? predict_prostate.components.primitives.circ_STAR_.cljs$core$IFn$_invoke$arity$5(G__47070,G__47071,G__47072,G__47073,G__47074) : predict_prostate.components.primitives.circ_STAR_.call(null,G__47070,G__47071,G__47072,G__47073,G__47074));
})()),["m10+",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__47061_SHARP_)].join(''));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1((x - (1))))),sablono.interpreter.interpret(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__47062_SHARP_){
return rum.core.with_key((cljs.core.truth_(tally_QMARK_)?(function (){var G__47075 = fill;
var G__47076 = predict_prostate.components.primitives.twidth;
var G__47077 = (predict_prostate.components.primitives.tspace * p1__47062_SHARP_);
return (predict_prostate.components.primitives.tally.cljs$core$IFn$_invoke$arity$3 ? predict_prostate.components.primitives.tally.cljs$core$IFn$_invoke$arity$3(G__47075,G__47076,G__47077) : predict_prostate.components.primitives.tally.call(null,G__47075,G__47076,G__47077));
})():(function (){var G__47078 = fill;
var G__47079 = (1);
var G__47080 = "none";
var G__47081 = r;
var G__47082 = (((2) * r) * p1__47062_SHARP_);
return (predict_prostate.components.primitives.circ_STAR_.cljs$core$IFn$_invoke$arity$5 ? predict_prostate.components.primitives.circ_STAR_.cljs$core$IFn$_invoke$arity$5(G__47078,G__47079,G__47080,G__47081,G__47082) : predict_prostate.components.primitives.circ_STAR_.call(null,G__47078,G__47079,G__47080,G__47081,G__47082));
})()),["m10+",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__47062_SHARP_)].join(''));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x - (1))], null))),sablono.interpreter.interpret(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__47063_SHARP_){
return rum.core.with_key((cljs.core.truth_(tally_QMARK_)?(function (){var G__47086 = "#BBBBBB";
var G__47087 = predict_prostate.components.primitives.twidth;
var G__47088 = (predict_prostate.components.primitives.tspace * (x + p1__47063_SHARP_));
return (predict_prostate.components.primitives.tally.cljs$core$IFn$_invoke$arity$3 ? predict_prostate.components.primitives.tally.cljs$core$IFn$_invoke$arity$3(G__47086,G__47087,G__47088) : predict_prostate.components.primitives.tally.call(null,G__47086,G__47087,G__47088));
})():(function (){var G__47090 = "white";
var G__47091 = "#BBBBBB";
var G__47092 = r;
var G__47093 = (((2) * r) * (x + p1__47063_SHARP_));
return (predict_prostate.components.primitives.circ.cljs$core$IFn$_invoke$arity$4 ? predict_prostate.components.primitives.circ.cljs$core$IFn$_invoke$arity$4(G__47090,G__47091,G__47092,G__47093) : predict_prostate.components.primitives.circ.call(null,G__47090,G__47091,G__47092,G__47093));
})()),["m10-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__47063_SHARP_)].join(''));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(((10) - x)))));
}),null,"mixed-10");

//# sourceMappingURL=predict_prostate.components.primitives.js.map
