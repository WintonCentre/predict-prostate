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
predict_prostate.components.primitives.pic = rum.core.build_defc((function (p__34844){
var map__34845 = p__34844;
var map__34845__$1 = cljs.core.__destructure_map(map__34845);
var fill = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34845__$1,new cljs.core.Keyword(null,"fill","fill",883462889));
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34845__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34845__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return React.createElement("div",({"style": ({"fontSize": predict_prostate.components.primitives.psz, "display": "inline-block", "position": "absolute", "left": predict_prostate.components.primitives.left(x), "bottom": predict_prostate.components.primitives.bottom(y)})}),React.createElement("svg",({"width": predict_prostate.components.primitives.psz, "height": predict_prostate.components.primitives.psz}),React.createElement("circle",({"cx": predict_prostate.components.primitives.cx, "cy": predict_prostate.components.primitives.cy, "r": predict_prostate.components.primitives.r, "fill": fill, "stroke": fill, "strokeWidth": 2.5}))));
}),null,"pic");
predict_prostate.components.primitives.pic_dead = rum.core.build_defc((function (p__34849){
var map__34850 = p__34849;
var map__34850__$1 = cljs.core.__destructure_map(map__34850);
var fill = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34850__$1,new cljs.core.Keyword(null,"fill","fill",883462889));
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34850__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34850__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
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
predict_prostate.components.primitives.blob = rum.core.build_defc((function (p__34857){
var map__34858 = p__34857;
var map__34858__$1 = cljs.core.__destructure_map(map__34858);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34858__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var fill = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34858__$1,new cljs.core.Keyword(null,"fill","fill",883462889));
var r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34858__$1,new cljs.core.Keyword(null,"r","r",-471384190));
var tally_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34858__$1,new cljs.core.Keyword(null,"tally?","tally?",-1847300034));
return React.createElement("svg",({"key": key, "width": ((2) * r), "height": ((2) * r)}),(cljs.core.truth_(tally_QMARK_)?sablono.interpreter.interpret((predict_prostate.components.primitives.tally.cljs$core$IFn$_invoke$arity$3 ? predict_prostate.components.primitives.tally.cljs$core$IFn$_invoke$arity$3(fill,(1),(0)) : predict_prostate.components.primitives.tally.call(null,fill,(1),(0)))):sablono.interpreter.interpret((function (){var G__34865 = fill;
var G__34866 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fill,"white"))?"#BBBBBB":"none");
var G__34867 = r;
var G__34868 = (0);
return (predict_prostate.components.primitives.circ.cljs$core$IFn$_invoke$arity$4 ? predict_prostate.components.primitives.circ.cljs$core$IFn$_invoke$arity$4(G__34865,G__34866,G__34867,G__34868) : predict_prostate.components.primitives.circ.call(null,G__34865,G__34866,G__34867,G__34868));
})())));
}),null,"blob");
predict_prostate.components.primitives.blob_10 = rum.core.build_defc((function (p__34870){
var map__34871 = p__34870;
var map__34871__$1 = cljs.core.__destructure_map(map__34871);
var fill = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34871__$1,new cljs.core.Keyword(null,"fill","fill",883462889));
var r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34871__$1,new cljs.core.Keyword(null,"r","r",-471384190));
var tally_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34871__$1,new cljs.core.Keyword(null,"tally?","tally?",-1847300034));
return React.createElement("svg",({"width": ((11) * (cljs.core.truth_(tally_QMARK_)?predict_prostate.components.primitives.tspace:((2) * r))), "height": (cljs.core.truth_(tally_QMARK_)?(15):((2) * r))}),sablono.interpreter.interpret(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__34869_SHARP_){
return rum.core.with_key((cljs.core.truth_(tally_QMARK_)?(function (){var G__34875 = fill;
var G__34876 = predict_prostate.components.primitives.twidth;
var G__34877 = (predict_prostate.components.primitives.tspace * p1__34869_SHARP_);
return (predict_prostate.components.primitives.tally.cljs$core$IFn$_invoke$arity$3 ? predict_prostate.components.primitives.tally.cljs$core$IFn$_invoke$arity$3(G__34875,G__34876,G__34877) : predict_prostate.components.primitives.tally.call(null,G__34875,G__34876,G__34877));
})():(function (){var G__34878 = fill;
var G__34879 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fill,"white"))?"#BBBBBB":"none");
var G__34880 = r;
var G__34881 = (((2) * r) * p1__34869_SHARP_);
return (predict_prostate.components.primitives.circ.cljs$core$IFn$_invoke$arity$4 ? predict_prostate.components.primitives.circ.cljs$core$IFn$_invoke$arity$4(G__34878,G__34879,G__34880,G__34881) : predict_prostate.components.primitives.circ.call(null,G__34878,G__34879,G__34880,G__34881));
})()),["b10-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__34869_SHARP_)].join(''));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1((10)))));
}),null,"blob-10");
predict_prostate.components.primitives.mixed_10 = rum.core.build_defc((function (p__34894){
var map__34895 = p__34894;
var map__34895__$1 = cljs.core.__destructure_map(map__34895);
var fill = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34895__$1,new cljs.core.Keyword(null,"fill","fill",883462889));
var r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34895__$1,new cljs.core.Keyword(null,"r","r",-471384190));
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34895__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var tally_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34895__$1,new cljs.core.Keyword(null,"tally?","tally?",-1847300034));
return React.createElement("svg",({"key": "m10", "width": ((11) * (cljs.core.truth_(tally_QMARK_)?predict_prostate.components.primitives.tspace:((2) * r))), "height": (cljs.core.truth_(tally_QMARK_)?(15):((2) * r))}),sablono.interpreter.interpret(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__34883_SHARP_){
return rum.core.with_key((cljs.core.truth_(tally_QMARK_)?(function (){var G__34899 = fill;
var G__34900 = predict_prostate.components.primitives.twidth;
var G__34901 = (predict_prostate.components.primitives.tspace * p1__34883_SHARP_);
return (predict_prostate.components.primitives.tally.cljs$core$IFn$_invoke$arity$3 ? predict_prostate.components.primitives.tally.cljs$core$IFn$_invoke$arity$3(G__34899,G__34900,G__34901) : predict_prostate.components.primitives.tally.call(null,G__34899,G__34900,G__34901));
})():(function (){var G__34902 = fill;
var G__34903 = (1);
var G__34904 = "none";
var G__34905 = r;
var G__34906 = (((2) * r) * p1__34883_SHARP_);
return (predict_prostate.components.primitives.circ_STAR_.cljs$core$IFn$_invoke$arity$5 ? predict_prostate.components.primitives.circ_STAR_.cljs$core$IFn$_invoke$arity$5(G__34902,G__34903,G__34904,G__34905,G__34906) : predict_prostate.components.primitives.circ_STAR_.call(null,G__34902,G__34903,G__34904,G__34905,G__34906));
})()),["m10+",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__34883_SHARP_)].join(''));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1((x - (1))))),sablono.interpreter.interpret(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__34886_SHARP_){
return rum.core.with_key((cljs.core.truth_(tally_QMARK_)?(function (){var G__34910 = fill;
var G__34911 = predict_prostate.components.primitives.twidth;
var G__34912 = (predict_prostate.components.primitives.tspace * p1__34886_SHARP_);
return (predict_prostate.components.primitives.tally.cljs$core$IFn$_invoke$arity$3 ? predict_prostate.components.primitives.tally.cljs$core$IFn$_invoke$arity$3(G__34910,G__34911,G__34912) : predict_prostate.components.primitives.tally.call(null,G__34910,G__34911,G__34912));
})():(function (){var G__34913 = fill;
var G__34914 = (1);
var G__34915 = "none";
var G__34916 = r;
var G__34917 = (((2) * r) * p1__34886_SHARP_);
return (predict_prostate.components.primitives.circ_STAR_.cljs$core$IFn$_invoke$arity$5 ? predict_prostate.components.primitives.circ_STAR_.cljs$core$IFn$_invoke$arity$5(G__34913,G__34914,G__34915,G__34916,G__34917) : predict_prostate.components.primitives.circ_STAR_.call(null,G__34913,G__34914,G__34915,G__34916,G__34917));
})()),["m10+",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__34886_SHARP_)].join(''));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x - (1))], null))),sablono.interpreter.interpret(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__34889_SHARP_){
return rum.core.with_key((cljs.core.truth_(tally_QMARK_)?(function (){var G__34920 = "#BBBBBB";
var G__34921 = predict_prostate.components.primitives.twidth;
var G__34922 = (predict_prostate.components.primitives.tspace * (x + p1__34889_SHARP_));
return (predict_prostate.components.primitives.tally.cljs$core$IFn$_invoke$arity$3 ? predict_prostate.components.primitives.tally.cljs$core$IFn$_invoke$arity$3(G__34920,G__34921,G__34922) : predict_prostate.components.primitives.tally.call(null,G__34920,G__34921,G__34922));
})():(function (){var G__34923 = "white";
var G__34924 = "#BBBBBB";
var G__34925 = r;
var G__34926 = (((2) * r) * (x + p1__34889_SHARP_));
return (predict_prostate.components.primitives.circ.cljs$core$IFn$_invoke$arity$4 ? predict_prostate.components.primitives.circ.cljs$core$IFn$_invoke$arity$4(G__34923,G__34924,G__34925,G__34926) : predict_prostate.components.primitives.circ.call(null,G__34923,G__34924,G__34925,G__34926));
})()),["m10-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__34889_SHARP_)].join(''));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(((10) - x)))));
}),null,"mixed-10");

//# sourceMappingURL=predict_prostate.components.primitives.js.map
