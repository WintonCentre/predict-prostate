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
predict_prostate.components.primitives.pic = rum.core.build_defc((function (p__46993){
var map__46994 = p__46993;
var map__46994__$1 = cljs.core.__destructure_map(map__46994);
var fill = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46994__$1,new cljs.core.Keyword(null,"fill","fill",883462889));
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46994__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46994__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return React.createElement("div",({"style": ({"fontSize": predict_prostate.components.primitives.psz, "display": "inline-block", "position": "absolute", "left": predict_prostate.components.primitives.left(x), "bottom": predict_prostate.components.primitives.bottom(y)})}),React.createElement("svg",({"width": predict_prostate.components.primitives.psz, "height": predict_prostate.components.primitives.psz}),React.createElement("circle",({"cx": predict_prostate.components.primitives.cx, "cy": predict_prostate.components.primitives.cy, "r": predict_prostate.components.primitives.r, "fill": fill, "stroke": fill, "strokeWidth": 2.5}))));
}),null,"pic");
predict_prostate.components.primitives.pic_dead = rum.core.build_defc((function (p__46995){
var map__46996 = p__46995;
var map__46996__$1 = cljs.core.__destructure_map(map__46996);
var fill = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46996__$1,new cljs.core.Keyword(null,"fill","fill",883462889));
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46996__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46996__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
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
predict_prostate.components.primitives.blob = rum.core.build_defc((function (p__47000){
var map__47001 = p__47000;
var map__47001__$1 = cljs.core.__destructure_map(map__47001);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47001__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var fill = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47001__$1,new cljs.core.Keyword(null,"fill","fill",883462889));
var r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47001__$1,new cljs.core.Keyword(null,"r","r",-471384190));
var tally_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47001__$1,new cljs.core.Keyword(null,"tally?","tally?",-1847300034));
return React.createElement("svg",({"key": key, "width": ((2) * r), "height": ((2) * r)}),(cljs.core.truth_(tally_QMARK_)?sablono.interpreter.interpret((predict_prostate.components.primitives.tally.cljs$core$IFn$_invoke$arity$3 ? predict_prostate.components.primitives.tally.cljs$core$IFn$_invoke$arity$3(fill,(1),(0)) : predict_prostate.components.primitives.tally.call(null,fill,(1),(0)))):sablono.interpreter.interpret((function (){var G__47003 = fill;
var G__47004 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fill,"white"))?"#BBBBBB":"none");
var G__47005 = r;
var G__47006 = (0);
return (predict_prostate.components.primitives.circ.cljs$core$IFn$_invoke$arity$4 ? predict_prostate.components.primitives.circ.cljs$core$IFn$_invoke$arity$4(G__47003,G__47004,G__47005,G__47006) : predict_prostate.components.primitives.circ.call(null,G__47003,G__47004,G__47005,G__47006));
})())));
}),null,"blob");
predict_prostate.components.primitives.blob_10 = rum.core.build_defc((function (p__47009){
var map__47010 = p__47009;
var map__47010__$1 = cljs.core.__destructure_map(map__47010);
var fill = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47010__$1,new cljs.core.Keyword(null,"fill","fill",883462889));
var r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47010__$1,new cljs.core.Keyword(null,"r","r",-471384190));
var tally_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47010__$1,new cljs.core.Keyword(null,"tally?","tally?",-1847300034));
return React.createElement("svg",({"width": ((11) * (cljs.core.truth_(tally_QMARK_)?predict_prostate.components.primitives.tspace:((2) * r))), "height": (cljs.core.truth_(tally_QMARK_)?(15):((2) * r))}),sablono.interpreter.interpret(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__47008_SHARP_){
return rum.core.with_key((cljs.core.truth_(tally_QMARK_)?(function (){var G__47011 = fill;
var G__47012 = predict_prostate.components.primitives.twidth;
var G__47013 = (predict_prostate.components.primitives.tspace * p1__47008_SHARP_);
return (predict_prostate.components.primitives.tally.cljs$core$IFn$_invoke$arity$3 ? predict_prostate.components.primitives.tally.cljs$core$IFn$_invoke$arity$3(G__47011,G__47012,G__47013) : predict_prostate.components.primitives.tally.call(null,G__47011,G__47012,G__47013));
})():(function (){var G__47014 = fill;
var G__47015 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fill,"white"))?"#BBBBBB":"none");
var G__47016 = r;
var G__47017 = (((2) * r) * p1__47008_SHARP_);
return (predict_prostate.components.primitives.circ.cljs$core$IFn$_invoke$arity$4 ? predict_prostate.components.primitives.circ.cljs$core$IFn$_invoke$arity$4(G__47014,G__47015,G__47016,G__47017) : predict_prostate.components.primitives.circ.call(null,G__47014,G__47015,G__47016,G__47017));
})()),["b10-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__47008_SHARP_)].join(''));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1((10)))));
}),null,"blob-10");
predict_prostate.components.primitives.mixed_10 = rum.core.build_defc((function (p__47022){
var map__47023 = p__47022;
var map__47023__$1 = cljs.core.__destructure_map(map__47023);
var fill = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47023__$1,new cljs.core.Keyword(null,"fill","fill",883462889));
var r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47023__$1,new cljs.core.Keyword(null,"r","r",-471384190));
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47023__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var tally_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47023__$1,new cljs.core.Keyword(null,"tally?","tally?",-1847300034));
return React.createElement("svg",({"key": "m10", "width": ((11) * (cljs.core.truth_(tally_QMARK_)?predict_prostate.components.primitives.tspace:((2) * r))), "height": (cljs.core.truth_(tally_QMARK_)?(15):((2) * r))}),sablono.interpreter.interpret(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__47019_SHARP_){
return rum.core.with_key((cljs.core.truth_(tally_QMARK_)?(function (){var G__47024 = fill;
var G__47025 = predict_prostate.components.primitives.twidth;
var G__47026 = (predict_prostate.components.primitives.tspace * p1__47019_SHARP_);
return (predict_prostate.components.primitives.tally.cljs$core$IFn$_invoke$arity$3 ? predict_prostate.components.primitives.tally.cljs$core$IFn$_invoke$arity$3(G__47024,G__47025,G__47026) : predict_prostate.components.primitives.tally.call(null,G__47024,G__47025,G__47026));
})():(function (){var G__47031 = fill;
var G__47032 = (1);
var G__47033 = "none";
var G__47034 = r;
var G__47035 = (((2) * r) * p1__47019_SHARP_);
return (predict_prostate.components.primitives.circ_STAR_.cljs$core$IFn$_invoke$arity$5 ? predict_prostate.components.primitives.circ_STAR_.cljs$core$IFn$_invoke$arity$5(G__47031,G__47032,G__47033,G__47034,G__47035) : predict_prostate.components.primitives.circ_STAR_.call(null,G__47031,G__47032,G__47033,G__47034,G__47035));
})()),["m10+",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__47019_SHARP_)].join(''));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1((x - (1))))),sablono.interpreter.interpret(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__47020_SHARP_){
return rum.core.with_key((cljs.core.truth_(tally_QMARK_)?(function (){var G__47036 = fill;
var G__47037 = predict_prostate.components.primitives.twidth;
var G__47038 = (predict_prostate.components.primitives.tspace * p1__47020_SHARP_);
return (predict_prostate.components.primitives.tally.cljs$core$IFn$_invoke$arity$3 ? predict_prostate.components.primitives.tally.cljs$core$IFn$_invoke$arity$3(G__47036,G__47037,G__47038) : predict_prostate.components.primitives.tally.call(null,G__47036,G__47037,G__47038));
})():(function (){var G__47040 = fill;
var G__47041 = (1);
var G__47042 = "none";
var G__47043 = r;
var G__47044 = (((2) * r) * p1__47020_SHARP_);
return (predict_prostate.components.primitives.circ_STAR_.cljs$core$IFn$_invoke$arity$5 ? predict_prostate.components.primitives.circ_STAR_.cljs$core$IFn$_invoke$arity$5(G__47040,G__47041,G__47042,G__47043,G__47044) : predict_prostate.components.primitives.circ_STAR_.call(null,G__47040,G__47041,G__47042,G__47043,G__47044));
})()),["m10+",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__47020_SHARP_)].join(''));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x - (1))], null))),sablono.interpreter.interpret(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__47021_SHARP_){
return rum.core.with_key((cljs.core.truth_(tally_QMARK_)?(function (){var G__47045 = "#BBBBBB";
var G__47046 = predict_prostate.components.primitives.twidth;
var G__47047 = (predict_prostate.components.primitives.tspace * (x + p1__47021_SHARP_));
return (predict_prostate.components.primitives.tally.cljs$core$IFn$_invoke$arity$3 ? predict_prostate.components.primitives.tally.cljs$core$IFn$_invoke$arity$3(G__47045,G__47046,G__47047) : predict_prostate.components.primitives.tally.call(null,G__47045,G__47046,G__47047));
})():(function (){var G__47048 = "white";
var G__47049 = "#BBBBBB";
var G__47050 = r;
var G__47051 = (((2) * r) * (x + p1__47021_SHARP_));
return (predict_prostate.components.primitives.circ.cljs$core$IFn$_invoke$arity$4 ? predict_prostate.components.primitives.circ.cljs$core$IFn$_invoke$arity$4(G__47048,G__47049,G__47050,G__47051) : predict_prostate.components.primitives.circ.call(null,G__47048,G__47049,G__47050,G__47051));
})()),["m10-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__47021_SHARP_)].join(''));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(((10) - x)))));
}),null,"mixed-10");

//# sourceMappingURL=predict_prostate.components.primitives.js.map
