goog.provide('ajax.xml_http_request');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
var G__32234 = e.target.readyState;
var fexpr__32233 = new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null);
return (fexpr__32233.cljs$core$IFn$_invoke$arity$1 ? fexpr__32233.cljs$core$IFn$_invoke$arity$1(G__32234) : fexpr__32233.call(null,G__32234));
});
ajax.xml_http_request.append = (function ajax$xml_http_request$append(current,next){
if(cljs.core.truth_(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(next)].join('');
} else {
return next;
}
});
ajax.xml_http_request.process_headers = (function ajax$xml_http_request$process_headers(header_str){
if(cljs.core.truth_(header_str)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (headers,header_line){
if(cljs.core.truth_(goog.string.isEmptyOrWhitespace(header_line))){
return headers;
} else {
var key_value = goog.string.splitLimit(header_line,": ",(2));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(headers,(key_value[(0)]),ajax.xml_http_request.append,(key_value[(1)]));
}
}),cljs.core.PersistentArrayMap.EMPTY,header_str.split("\r\n"));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
ajax.xml_http_request.xmlhttprequest = (((typeof goog !== 'undefined') && (typeof goog.global !== 'undefined') && (typeof goog.global.XMLHttpRequest !== 'undefined'))?goog.global.XMLHttpRequest:(((typeof require !== 'undefined'))?(function (){var req = require;
return (req.cljs$core$IFn$_invoke$arity$1 ? req.cljs$core$IFn$_invoke$arity$1("xmlhttprequest") : req.call(null,"xmlhttprequest")).XMLHttpRequest;
})():null));
(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__32244,handler){
var map__32245 = p__32244;
var map__32245__$1 = cljs.core.__destructure_map(map__32245);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32245__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32245__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32245__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32245__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__32245__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__32245__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32245__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
(this$__$1.withCredentials = with_credentials);

(this$__$1.onreadystatechange = (function (p1__32243_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state(p1__32243_SHARP_))){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(this$__$1) : handler.call(null,this$__$1));
} else {
return null;
}
}));

this$__$1.open(method,uri,true);

(this$__$1.timeout = timeout);

var temp__5753__auto___32272 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5753__auto___32272)){
var response_type_32273 = temp__5753__auto___32272;
(this$__$1.responseType = cljs.core.name(response_type_32273));
} else {
}

var seq__32246_32274 = cljs.core.seq(headers);
var chunk__32247_32275 = null;
var count__32248_32276 = (0);
var i__32249_32277 = (0);
while(true){
if((i__32249_32277 < count__32248_32276)){
var vec__32256_32278 = chunk__32247_32275.cljs$core$IIndexed$_nth$arity$2(null,i__32249_32277);
var k_32279 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32256_32278,(0),null);
var v_32280 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32256_32278,(1),null);
this$__$1.setRequestHeader(k_32279,v_32280);


var G__32282 = seq__32246_32274;
var G__32283 = chunk__32247_32275;
var G__32284 = count__32248_32276;
var G__32285 = (i__32249_32277 + (1));
seq__32246_32274 = G__32282;
chunk__32247_32275 = G__32283;
count__32248_32276 = G__32284;
i__32249_32277 = G__32285;
continue;
} else {
var temp__5753__auto___32286 = cljs.core.seq(seq__32246_32274);
if(temp__5753__auto___32286){
var seq__32246_32287__$1 = temp__5753__auto___32286;
if(cljs.core.chunked_seq_QMARK_(seq__32246_32287__$1)){
var c__4638__auto___32288 = cljs.core.chunk_first(seq__32246_32287__$1);
var G__32289 = cljs.core.chunk_rest(seq__32246_32287__$1);
var G__32290 = c__4638__auto___32288;
var G__32291 = cljs.core.count(c__4638__auto___32288);
var G__32292 = (0);
seq__32246_32274 = G__32289;
chunk__32247_32275 = G__32290;
count__32248_32276 = G__32291;
i__32249_32277 = G__32292;
continue;
} else {
var vec__32262_32293 = cljs.core.first(seq__32246_32287__$1);
var k_32294 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32262_32293,(0),null);
var v_32295 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32262_32293,(1),null);
this$__$1.setRequestHeader(k_32294,v_32295);


var G__32296 = cljs.core.next(seq__32246_32287__$1);
var G__32297 = null;
var G__32298 = (0);
var G__32299 = (0);
seq__32246_32274 = G__32296;
chunk__32247_32275 = G__32297;
count__32248_32276 = G__32298;
i__32249_32277 = G__32299;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__4212__auto__ = body;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return "";
}
})());

return this$__$1;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_all_headers$arity$1 = (function (this$){
var this$__$1 = this;
return ajax.xml_http_request.process_headers(this$__$1.getAllResponseHeaders());
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),this$__$1.readyState);
}));

//# sourceMappingURL=ajax.xml_http_request.js.map
