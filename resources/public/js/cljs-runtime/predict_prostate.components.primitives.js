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
predict_prostate.components.primitives.pic = rum.core.lazy_build(rum.core.build_defc,(function (p__46143){
var map__46144 = p__46143;
var map__46144__$1 = cljs.core.__destructure_map(map__46144);
var fill = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46144__$1,new cljs.core.Keyword(null,"fill","fill",883462889));
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46144__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46144__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return daiquiri.core.create_element("div",{'style':{'fontSize':predict_prostate.components.primitives.psz,'display':"inline-block",'position':"absolute",'left':predict_prostate.components.primitives.left(x),'bottom':predict_prostate.components.primitives.bottom(y)}},[daiquiri.core.create_element("svg",{'width':predict_prostate.components.primitives.psz,'height':predict_prostate.components.primitives.psz},[daiquiri.core.create_element("circle",{'cx':predict_prostate.components.primitives.cx,'cy':predict_prostate.components.primitives.cy,'r':predict_prostate.components.primitives.r,'fill':fill,'stroke':fill,'strokeWidth':2.5},[])])]);
}),null,"predict-prostate.components.primitives/pic");
predict_prostate.components.primitives.pic_dead = rum.core.lazy_build(rum.core.build_defc,(function (p__46146){
var map__46148 = p__46146;
var map__46148__$1 = cljs.core.__destructure_map(map__46148);
var fill = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46148__$1,new cljs.core.Keyword(null,"fill","fill",883462889));
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46148__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46148__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return daiquiri.core.create_element("div",{'style':{'fontSize':predict_prostate.components.primitives.psz,'display':"inline-block",'position':"absolute",'left':predict_prostate.components.primitives.left(x),'bottom':predict_prostate.components.primitives.bottom(y)}},[daiquiri.core.create_element("svg",{'width':predict_prostate.components.primitives.psz,'height':predict_prostate.components.primitives.psz},[daiquiri.core.create_element("circle",{'cx':predict_prostate.components.primitives.cx,'cy':predict_prostate.components.primitives.cy,'r':predict_prostate.components.primitives.r,'fill':"none",'stroke':fill,'strokeWidth':2.5},[])])]);
}),null,"predict-prostate.components.primitives/pic-dead");
predict_prostate.components.primitives.dead_icon = rum.core.lazy_build(rum.core.build_defc,(function (fill){
return daiquiri.core.create_element("svg",{'width':predict_prostate.components.primitives.psz,'height':predict_prostate.components.primitives.psz,'style':{'marginBottom':(-5)}},[daiquiri.core.create_element("circle",{'cx':predict_prostate.components.primitives.cx,'cy':predict_prostate.components.primitives.cy,'r':predict_prostate.components.primitives.r,'fill':fill,'stroke':"none"},[])]);
}),null,"predict-prostate.components.primitives/dead-icon");
predict_prostate.components.primitives.open_icon = rum.core.lazy_build(rum.core.build_defc,(function (fill){
return daiquiri.core.create_element("svg",{'width':predict_prostate.components.primitives.psz,'height':predict_prostate.components.primitives.psz,'style':{'marginBottom':(-5)}},[daiquiri.core.create_element("circle",{'cx':predict_prostate.components.primitives.cx,'cy':predict_prostate.components.primitives.cy,'r':predict_prostate.components.primitives.r,'strokeWidth':2.5,'stroke':fill,'fill':"none"},[])]);
}),null,"predict-prostate.components.primitives/open-icon");
predict_prostate.components.primitives.circ_STAR_ = rum.core.lazy_build(rum.core.build_defc,(function (fill,opacity,stroke,r,cx){
return daiquiri.core.create_element("circle",{'cx':(cx + r),'cy':r,'r':r,'fill':fill,'opacity':opacity,'stroke':stroke,'strokeWidth':(1)},[]);
}),null,"predict-prostate.components.primitives/circ*");
predict_prostate.components.primitives.circ = rum.core.lazy_build(rum.core.build_defc,(function (fill,stroke,r,cx){
return predict_prostate.components.primitives.circ_STAR_(fill,(1),stroke,r,cx);
}),null,"predict-prostate.components.primitives/circ");
predict_prostate.components.primitives.tally_STAR_ = rum.core.lazy_build(rum.core.build_defc,(function (fill,opacity,w,x){
return daiquiri.core.create_element("rect",{'fill':fill,'opacity':opacity,'x':x,'y':(0),'height':(20),'width':w},[]);
}),null,"predict-prostate.components.primitives/tally*");
predict_prostate.components.primitives.tally = rum.core.lazy_build(rum.core.build_defc,(function (fill,w,x){
return predict_prostate.components.primitives.tally_STAR_(fill,(1),w,x);
}),null,"predict-prostate.components.primitives/tally");
predict_prostate.components.primitives.twidth = (3);
predict_prostate.components.primitives.tspace = (4);
predict_prostate.components.primitives.blob = rum.core.lazy_build(rum.core.build_defc,(function (p__46157){
var map__46158 = p__46157;
var map__46158__$1 = cljs.core.__destructure_map(map__46158);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46158__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var fill = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46158__$1,new cljs.core.Keyword(null,"fill","fill",883462889));
var r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46158__$1,new cljs.core.Keyword(null,"r","r",-471384190));
var tally_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46158__$1,new cljs.core.Keyword(null,"tally?","tally?",-1847300034));
return daiquiri.core.create_element("svg",{'key':key,'width':((2) * r),'height':((2) * r)},[(cljs.core.truth_(tally_QMARK_)?predict_prostate.components.primitives.tally(fill,(1),(0)):predict_prostate.components.primitives.circ(fill,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fill,"white"))?"#BBBBBB":"none"),r,(0)))]);
}),null,"predict-prostate.components.primitives/blob");
predict_prostate.components.primitives.blob_10 = rum.core.lazy_build(rum.core.build_defc,(function (p__46161){
var map__46162 = p__46161;
var map__46162__$1 = cljs.core.__destructure_map(map__46162);
var fill = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46162__$1,new cljs.core.Keyword(null,"fill","fill",883462889));
var r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46162__$1,new cljs.core.Keyword(null,"r","r",-471384190));
var tally_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46162__$1,new cljs.core.Keyword(null,"tally?","tally?",-1847300034));
return daiquiri.core.create_element("svg",{'width':((11) * (cljs.core.truth_(tally_QMARK_)?predict_prostate.components.primitives.tspace:((2) * r))),'height':(cljs.core.truth_(tally_QMARK_)?(15):((2) * r))},[daiquiri.interpreter.interpret(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__46160_SHARP_){
return rum.core.with_key((cljs.core.truth_(tally_QMARK_)?predict_prostate.components.primitives.tally(fill,predict_prostate.components.primitives.twidth,(predict_prostate.components.primitives.tspace * p1__46160_SHARP_)):predict_prostate.components.primitives.circ(fill,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fill,"white"))?"#BBBBBB":"none"),r,(((2) * r) * p1__46160_SHARP_))),["b10-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__46160_SHARP_)].join(''));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1((10))))]);
}),null,"predict-prostate.components.primitives/blob-10");
predict_prostate.components.primitives.mixed_10 = rum.core.lazy_build(rum.core.build_defc,(function (p__46167){
var map__46168 = p__46167;
var map__46168__$1 = cljs.core.__destructure_map(map__46168);
var fill = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46168__$1,new cljs.core.Keyword(null,"fill","fill",883462889));
var r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46168__$1,new cljs.core.Keyword(null,"r","r",-471384190));
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46168__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var tally_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46168__$1,new cljs.core.Keyword(null,"tally?","tally?",-1847300034));
return daiquiri.core.create_element("svg",{'key':"m10",'width':((11) * (cljs.core.truth_(tally_QMARK_)?predict_prostate.components.primitives.tspace:((2) * r))),'height':(cljs.core.truth_(tally_QMARK_)?(15):((2) * r))},[daiquiri.interpreter.interpret(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__46163_SHARP_){
return rum.core.with_key((cljs.core.truth_(tally_QMARK_)?predict_prostate.components.primitives.tally(fill,predict_prostate.components.primitives.twidth,(predict_prostate.components.primitives.tspace * p1__46163_SHARP_)):predict_prostate.components.primitives.circ_STAR_(fill,(1),"none",r,(((2) * r) * p1__46163_SHARP_))),["m10+",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__46163_SHARP_)].join(''));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1((x - (1))))),daiquiri.interpreter.interpret(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__46164_SHARP_){
return rum.core.with_key((cljs.core.truth_(tally_QMARK_)?predict_prostate.components.primitives.tally(fill,predict_prostate.components.primitives.twidth,(predict_prostate.components.primitives.tspace * p1__46164_SHARP_)):predict_prostate.components.primitives.circ_STAR_(fill,(1),"none",r,(((2) * r) * p1__46164_SHARP_))),["m10+",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__46164_SHARP_)].join(''));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x - (1))], null))),daiquiri.interpreter.interpret(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__46165_SHARP_){
return rum.core.with_key((cljs.core.truth_(tally_QMARK_)?predict_prostate.components.primitives.tally("#BBBBBB",predict_prostate.components.primitives.twidth,(predict_prostate.components.primitives.tspace * (x + p1__46165_SHARP_))):predict_prostate.components.primitives.circ("white","#BBBBBB",r,(((2) * r) * (x + p1__46165_SHARP_)))),["m10-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__46165_SHARP_)].join(''));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(((10) - x))))]);
}),null,"predict-prostate.components.primitives/mixed-10");

//# sourceMappingURL=predict_prostate.components.primitives.js.map
