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
predict_prostate.components.primitives.pic = rum.core.build_defc((function (p__46968){
var map__46969 = p__46968;
var map__46969__$1 = cljs.core.__destructure_map(map__46969);
var fill = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46969__$1,new cljs.core.Keyword(null,"fill","fill",883462889));
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46969__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46969__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return React.createElement("div",({"style": ({"fontSize": predict_prostate.components.primitives.psz, "display": "inline-block", "position": "absolute", "left": predict_prostate.components.primitives.left(x), "bottom": predict_prostate.components.primitives.bottom(y)})}),React.createElement("svg",({"width": predict_prostate.components.primitives.psz, "height": predict_prostate.components.primitives.psz}),React.createElement("circle",({"cx": predict_prostate.components.primitives.cx, "cy": predict_prostate.components.primitives.cy, "r": predict_prostate.components.primitives.r, "fill": fill, "stroke": fill, "strokeWidth": 2.5}))));
}),null,"pic");
predict_prostate.components.primitives.pic_dead = rum.core.build_defc((function (p__46970){
var map__46971 = p__46970;
var map__46971__$1 = cljs.core.__destructure_map(map__46971);
var fill = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46971__$1,new cljs.core.Keyword(null,"fill","fill",883462889));
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46971__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46971__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
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
predict_prostate.components.primitives.blob = rum.core.build_defc((function (p__46977){
var map__46978 = p__46977;
var map__46978__$1 = cljs.core.__destructure_map(map__46978);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46978__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var fill = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46978__$1,new cljs.core.Keyword(null,"fill","fill",883462889));
var r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46978__$1,new cljs.core.Keyword(null,"r","r",-471384190));
var tally_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46978__$1,new cljs.core.Keyword(null,"tally?","tally?",-1847300034));
return React.createElement("svg",({"key": key, "width": ((2) * r), "height": ((2) * r)}),(cljs.core.truth_(tally_QMARK_)?sablono.interpreter.interpret((predict_prostate.components.primitives.tally.cljs$core$IFn$_invoke$arity$3 ? predict_prostate.components.primitives.tally.cljs$core$IFn$_invoke$arity$3(fill,(1),(0)) : predict_prostate.components.primitives.tally.call(null,fill,(1),(0)))):sablono.interpreter.interpret((function (){var G__46979 = fill;
var G__46980 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fill,"white"))?"#BBBBBB":"none");
var G__46981 = r;
var G__46982 = (0);
return (predict_prostate.components.primitives.circ.cljs$core$IFn$_invoke$arity$4 ? predict_prostate.components.primitives.circ.cljs$core$IFn$_invoke$arity$4(G__46979,G__46980,G__46981,G__46982) : predict_prostate.components.primitives.circ.call(null,G__46979,G__46980,G__46981,G__46982));
})())));
}),null,"blob");
predict_prostate.components.primitives.blob_10 = rum.core.build_defc((function (p__46984){
var map__46985 = p__46984;
var map__46985__$1 = cljs.core.__destructure_map(map__46985);
var fill = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46985__$1,new cljs.core.Keyword(null,"fill","fill",883462889));
var r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46985__$1,new cljs.core.Keyword(null,"r","r",-471384190));
var tally_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46985__$1,new cljs.core.Keyword(null,"tally?","tally?",-1847300034));
return React.createElement("svg",({"width": ((11) * (cljs.core.truth_(tally_QMARK_)?predict_prostate.components.primitives.tspace:((2) * r))), "height": (cljs.core.truth_(tally_QMARK_)?(15):((2) * r))}),sablono.interpreter.interpret(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__46983_SHARP_){
return rum.core.with_key((cljs.core.truth_(tally_QMARK_)?(function (){var G__46986 = fill;
var G__46987 = predict_prostate.components.primitives.twidth;
var G__46988 = (predict_prostate.components.primitives.tspace * p1__46983_SHARP_);
return (predict_prostate.components.primitives.tally.cljs$core$IFn$_invoke$arity$3 ? predict_prostate.components.primitives.tally.cljs$core$IFn$_invoke$arity$3(G__46986,G__46987,G__46988) : predict_prostate.components.primitives.tally.call(null,G__46986,G__46987,G__46988));
})():(function (){var G__46989 = fill;
var G__46990 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fill,"white"))?"#BBBBBB":"none");
var G__46991 = r;
var G__46992 = (((2) * r) * p1__46983_SHARP_);
return (predict_prostate.components.primitives.circ.cljs$core$IFn$_invoke$arity$4 ? predict_prostate.components.primitives.circ.cljs$core$IFn$_invoke$arity$4(G__46989,G__46990,G__46991,G__46992) : predict_prostate.components.primitives.circ.call(null,G__46989,G__46990,G__46991,G__46992));
})()),["b10-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__46983_SHARP_)].join(''));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1((10)))));
}),null,"blob-10");
predict_prostate.components.primitives.mixed_10 = rum.core.build_defc((function (p__46997){
var map__46998 = p__46997;
var map__46998__$1 = cljs.core.__destructure_map(map__46998);
var fill = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46998__$1,new cljs.core.Keyword(null,"fill","fill",883462889));
var r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46998__$1,new cljs.core.Keyword(null,"r","r",-471384190));
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46998__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var tally_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46998__$1,new cljs.core.Keyword(null,"tally?","tally?",-1847300034));
return React.createElement("svg",({"key": "m10", "width": ((11) * (cljs.core.truth_(tally_QMARK_)?predict_prostate.components.primitives.tspace:((2) * r))), "height": (cljs.core.truth_(tally_QMARK_)?(15):((2) * r))}),sablono.interpreter.interpret(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__46994_SHARP_){
return rum.core.with_key((cljs.core.truth_(tally_QMARK_)?(function (){var G__47004 = fill;
var G__47005 = predict_prostate.components.primitives.twidth;
var G__47006 = (predict_prostate.components.primitives.tspace * p1__46994_SHARP_);
return (predict_prostate.components.primitives.tally.cljs$core$IFn$_invoke$arity$3 ? predict_prostate.components.primitives.tally.cljs$core$IFn$_invoke$arity$3(G__47004,G__47005,G__47006) : predict_prostate.components.primitives.tally.call(null,G__47004,G__47005,G__47006));
})():(function (){var G__47007 = fill;
var G__47008 = (1);
var G__47009 = "none";
var G__47010 = r;
var G__47011 = (((2) * r) * p1__46994_SHARP_);
return (predict_prostate.components.primitives.circ_STAR_.cljs$core$IFn$_invoke$arity$5 ? predict_prostate.components.primitives.circ_STAR_.cljs$core$IFn$_invoke$arity$5(G__47007,G__47008,G__47009,G__47010,G__47011) : predict_prostate.components.primitives.circ_STAR_.call(null,G__47007,G__47008,G__47009,G__47010,G__47011));
})()),["m10+",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__46994_SHARP_)].join(''));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1((x - (1))))),sablono.interpreter.interpret(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__46995_SHARP_){
return rum.core.with_key((cljs.core.truth_(tally_QMARK_)?(function (){var G__47013 = fill;
var G__47014 = predict_prostate.components.primitives.twidth;
var G__47015 = (predict_prostate.components.primitives.tspace * p1__46995_SHARP_);
return (predict_prostate.components.primitives.tally.cljs$core$IFn$_invoke$arity$3 ? predict_prostate.components.primitives.tally.cljs$core$IFn$_invoke$arity$3(G__47013,G__47014,G__47015) : predict_prostate.components.primitives.tally.call(null,G__47013,G__47014,G__47015));
})():(function (){var G__47016 = fill;
var G__47017 = (1);
var G__47018 = "none";
var G__47019 = r;
var G__47020 = (((2) * r) * p1__46995_SHARP_);
return (predict_prostate.components.primitives.circ_STAR_.cljs$core$IFn$_invoke$arity$5 ? predict_prostate.components.primitives.circ_STAR_.cljs$core$IFn$_invoke$arity$5(G__47016,G__47017,G__47018,G__47019,G__47020) : predict_prostate.components.primitives.circ_STAR_.call(null,G__47016,G__47017,G__47018,G__47019,G__47020));
})()),["m10+",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__46995_SHARP_)].join(''));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x - (1))], null))),sablono.interpreter.interpret(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__46996_SHARP_){
return rum.core.with_key((cljs.core.truth_(tally_QMARK_)?(function (){var G__47021 = "#BBBBBB";
var G__47022 = predict_prostate.components.primitives.twidth;
var G__47023 = (predict_prostate.components.primitives.tspace * (x + p1__46996_SHARP_));
return (predict_prostate.components.primitives.tally.cljs$core$IFn$_invoke$arity$3 ? predict_prostate.components.primitives.tally.cljs$core$IFn$_invoke$arity$3(G__47021,G__47022,G__47023) : predict_prostate.components.primitives.tally.call(null,G__47021,G__47022,G__47023));
})():(function (){var G__47025 = "white";
var G__47026 = "#BBBBBB";
var G__47027 = r;
var G__47028 = (((2) * r) * (x + p1__46996_SHARP_));
return (predict_prostate.components.primitives.circ.cljs$core$IFn$_invoke$arity$4 ? predict_prostate.components.primitives.circ.cljs$core$IFn$_invoke$arity$4(G__47025,G__47026,G__47027,G__47028) : predict_prostate.components.primitives.circ.call(null,G__47025,G__47026,G__47027,G__47028));
})()),["m10-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__46996_SHARP_)].join(''));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(((10) - x)))));
}),null,"mixed-10");

//# sourceMappingURL=predict_prostate.components.primitives.js.map
