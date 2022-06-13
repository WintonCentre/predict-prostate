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
predict_prostate.components.primitives.pic = rum.core.build_defc((function (p__34312){
var map__34313 = p__34312;
var map__34313__$1 = cljs.core.__destructure_map(map__34313);
var fill = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34313__$1,new cljs.core.Keyword(null,"fill","fill",883462889));
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34313__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34313__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return React.createElement("div",({"style": ({"fontSize": predict_prostate.components.primitives.psz, "display": "inline-block", "position": "absolute", "left": predict_prostate.components.primitives.left(x), "bottom": predict_prostate.components.primitives.bottom(y)})}),React.createElement("svg",({"width": predict_prostate.components.primitives.psz, "height": predict_prostate.components.primitives.psz}),React.createElement("circle",({"cx": predict_prostate.components.primitives.cx, "cy": predict_prostate.components.primitives.cy, "r": predict_prostate.components.primitives.r, "fill": fill, "stroke": fill, "strokeWidth": 2.5}))));
}),null,"pic");
predict_prostate.components.primitives.pic_dead = rum.core.build_defc((function (p__34327){
var map__34328 = p__34327;
var map__34328__$1 = cljs.core.__destructure_map(map__34328);
var fill = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34328__$1,new cljs.core.Keyword(null,"fill","fill",883462889));
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34328__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34328__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
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
predict_prostate.components.primitives.blob = rum.core.build_defc((function (p__34336){
var map__34337 = p__34336;
var map__34337__$1 = cljs.core.__destructure_map(map__34337);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34337__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var fill = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34337__$1,new cljs.core.Keyword(null,"fill","fill",883462889));
var r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34337__$1,new cljs.core.Keyword(null,"r","r",-471384190));
var tally_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34337__$1,new cljs.core.Keyword(null,"tally?","tally?",-1847300034));
return React.createElement("svg",({"key": key, "width": ((2) * r), "height": ((2) * r)}),(cljs.core.truth_(tally_QMARK_)?sablono.interpreter.interpret((predict_prostate.components.primitives.tally.cljs$core$IFn$_invoke$arity$3 ? predict_prostate.components.primitives.tally.cljs$core$IFn$_invoke$arity$3(fill,(1),(0)) : predict_prostate.components.primitives.tally.call(null,fill,(1),(0)))):sablono.interpreter.interpret((function (){var G__34338 = fill;
var G__34339 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fill,"white"))?"#BBBBBB":"none");
var G__34340 = r;
var G__34341 = (0);
return (predict_prostate.components.primitives.circ.cljs$core$IFn$_invoke$arity$4 ? predict_prostate.components.primitives.circ.cljs$core$IFn$_invoke$arity$4(G__34338,G__34339,G__34340,G__34341) : predict_prostate.components.primitives.circ.call(null,G__34338,G__34339,G__34340,G__34341));
})())));
}),null,"blob");
predict_prostate.components.primitives.blob_10 = rum.core.build_defc((function (p__34346){
var map__34347 = p__34346;
var map__34347__$1 = cljs.core.__destructure_map(map__34347);
var fill = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34347__$1,new cljs.core.Keyword(null,"fill","fill",883462889));
var r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34347__$1,new cljs.core.Keyword(null,"r","r",-471384190));
var tally_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34347__$1,new cljs.core.Keyword(null,"tally?","tally?",-1847300034));
return React.createElement("svg",({"width": ((11) * (cljs.core.truth_(tally_QMARK_)?predict_prostate.components.primitives.tspace:((2) * r))), "height": (cljs.core.truth_(tally_QMARK_)?(15):((2) * r))}),sablono.interpreter.interpret(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__34342_SHARP_){
return rum.core.with_key((cljs.core.truth_(tally_QMARK_)?(function (){var G__34351 = fill;
var G__34352 = predict_prostate.components.primitives.twidth;
var G__34353 = (predict_prostate.components.primitives.tspace * p1__34342_SHARP_);
return (predict_prostate.components.primitives.tally.cljs$core$IFn$_invoke$arity$3 ? predict_prostate.components.primitives.tally.cljs$core$IFn$_invoke$arity$3(G__34351,G__34352,G__34353) : predict_prostate.components.primitives.tally.call(null,G__34351,G__34352,G__34353));
})():(function (){var G__34354 = fill;
var G__34355 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fill,"white"))?"#BBBBBB":"none");
var G__34356 = r;
var G__34357 = (((2) * r) * p1__34342_SHARP_);
return (predict_prostate.components.primitives.circ.cljs$core$IFn$_invoke$arity$4 ? predict_prostate.components.primitives.circ.cljs$core$IFn$_invoke$arity$4(G__34354,G__34355,G__34356,G__34357) : predict_prostate.components.primitives.circ.call(null,G__34354,G__34355,G__34356,G__34357));
})()),["b10-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__34342_SHARP_)].join(''));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1((10)))));
}),null,"blob-10");
predict_prostate.components.primitives.mixed_10 = rum.core.build_defc((function (p__34361){
var map__34365 = p__34361;
var map__34365__$1 = cljs.core.__destructure_map(map__34365);
var fill = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34365__$1,new cljs.core.Keyword(null,"fill","fill",883462889));
var r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34365__$1,new cljs.core.Keyword(null,"r","r",-471384190));
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34365__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var tally_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34365__$1,new cljs.core.Keyword(null,"tally?","tally?",-1847300034));
return React.createElement("svg",({"key": "m10", "width": ((11) * (cljs.core.truth_(tally_QMARK_)?predict_prostate.components.primitives.tspace:((2) * r))), "height": (cljs.core.truth_(tally_QMARK_)?(15):((2) * r))}),sablono.interpreter.interpret(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__34358_SHARP_){
return rum.core.with_key((cljs.core.truth_(tally_QMARK_)?(function (){var G__34368 = fill;
var G__34369 = predict_prostate.components.primitives.twidth;
var G__34370 = (predict_prostate.components.primitives.tspace * p1__34358_SHARP_);
return (predict_prostate.components.primitives.tally.cljs$core$IFn$_invoke$arity$3 ? predict_prostate.components.primitives.tally.cljs$core$IFn$_invoke$arity$3(G__34368,G__34369,G__34370) : predict_prostate.components.primitives.tally.call(null,G__34368,G__34369,G__34370));
})():(function (){var G__34371 = fill;
var G__34372 = (1);
var G__34373 = "none";
var G__34374 = r;
var G__34375 = (((2) * r) * p1__34358_SHARP_);
return (predict_prostate.components.primitives.circ_STAR_.cljs$core$IFn$_invoke$arity$5 ? predict_prostate.components.primitives.circ_STAR_.cljs$core$IFn$_invoke$arity$5(G__34371,G__34372,G__34373,G__34374,G__34375) : predict_prostate.components.primitives.circ_STAR_.call(null,G__34371,G__34372,G__34373,G__34374,G__34375));
})()),["m10+",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__34358_SHARP_)].join(''));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1((x - (1))))),sablono.interpreter.interpret(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__34359_SHARP_){
return rum.core.with_key((cljs.core.truth_(tally_QMARK_)?(function (){var G__34379 = fill;
var G__34380 = predict_prostate.components.primitives.twidth;
var G__34381 = (predict_prostate.components.primitives.tspace * p1__34359_SHARP_);
return (predict_prostate.components.primitives.tally.cljs$core$IFn$_invoke$arity$3 ? predict_prostate.components.primitives.tally.cljs$core$IFn$_invoke$arity$3(G__34379,G__34380,G__34381) : predict_prostate.components.primitives.tally.call(null,G__34379,G__34380,G__34381));
})():(function (){var G__34383 = fill;
var G__34384 = (1);
var G__34385 = "none";
var G__34386 = r;
var G__34387 = (((2) * r) * p1__34359_SHARP_);
return (predict_prostate.components.primitives.circ_STAR_.cljs$core$IFn$_invoke$arity$5 ? predict_prostate.components.primitives.circ_STAR_.cljs$core$IFn$_invoke$arity$5(G__34383,G__34384,G__34385,G__34386,G__34387) : predict_prostate.components.primitives.circ_STAR_.call(null,G__34383,G__34384,G__34385,G__34386,G__34387));
})()),["m10+",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__34359_SHARP_)].join(''));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x - (1))], null))),sablono.interpreter.interpret(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__34360_SHARP_){
return rum.core.with_key((cljs.core.truth_(tally_QMARK_)?(function (){var G__34391 = "#BBBBBB";
var G__34392 = predict_prostate.components.primitives.twidth;
var G__34393 = (predict_prostate.components.primitives.tspace * (x + p1__34360_SHARP_));
return (predict_prostate.components.primitives.tally.cljs$core$IFn$_invoke$arity$3 ? predict_prostate.components.primitives.tally.cljs$core$IFn$_invoke$arity$3(G__34391,G__34392,G__34393) : predict_prostate.components.primitives.tally.call(null,G__34391,G__34392,G__34393));
})():(function (){var G__34394 = "white";
var G__34395 = "#BBBBBB";
var G__34396 = r;
var G__34397 = (((2) * r) * (x + p1__34360_SHARP_));
return (predict_prostate.components.primitives.circ.cljs$core$IFn$_invoke$arity$4 ? predict_prostate.components.primitives.circ.cljs$core$IFn$_invoke$arity$4(G__34394,G__34395,G__34396,G__34397) : predict_prostate.components.primitives.circ.call(null,G__34394,G__34395,G__34396,G__34397));
})()),["m10-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__34360_SHARP_)].join(''));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(((10) - x)))));
}),null,"mixed-10");

//# sourceMappingURL=predict_prostate.components.primitives.js.map
