goog.provide('ajax.xml_http_request');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
var G__42907 = e.target.readyState;
var fexpr__42906 = new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null);
return (fexpr__42906.cljs$core$IFn$_invoke$arity$1 ? fexpr__42906.cljs$core$IFn$_invoke$arity$1(G__42907) : fexpr__42906.call(null,G__42907));
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

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__42912,handler){
var map__42913 = p__42912;
var map__42913__$1 = cljs.core.__destructure_map(map__42913);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42913__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42913__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42913__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42913__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__42913__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__42913__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42913__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
(this$__$1.withCredentials = with_credentials);

(this$__$1.onreadystatechange = (function (p1__42910_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state(p1__42910_SHARP_))){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(this$__$1) : handler.call(null,this$__$1));
} else {
return null;
}
}));

this$__$1.open(method,uri,true);

(this$__$1.timeout = timeout);

var temp__5753__auto___42947 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5753__auto___42947)){
var response_type_42948 = temp__5753__auto___42947;
(this$__$1.responseType = cljs.core.name(response_type_42948));
} else {
}

var seq__42916_42949 = cljs.core.seq(headers);
var chunk__42917_42950 = null;
var count__42918_42951 = (0);
var i__42919_42952 = (0);
while(true){
if((i__42919_42952 < count__42918_42951)){
var vec__42928_42953 = chunk__42917_42950.cljs$core$IIndexed$_nth$arity$2(null,i__42919_42952);
var k_42954 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42928_42953,(0),null);
var v_42955 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42928_42953,(1),null);
this$__$1.setRequestHeader(k_42954,v_42955);


var G__42956 = seq__42916_42949;
var G__42957 = chunk__42917_42950;
var G__42958 = count__42918_42951;
var G__42959 = (i__42919_42952 + (1));
seq__42916_42949 = G__42956;
chunk__42917_42950 = G__42957;
count__42918_42951 = G__42958;
i__42919_42952 = G__42959;
continue;
} else {
var temp__5753__auto___42960 = cljs.core.seq(seq__42916_42949);
if(temp__5753__auto___42960){
var seq__42916_42961__$1 = temp__5753__auto___42960;
if(cljs.core.chunked_seq_QMARK_(seq__42916_42961__$1)){
var c__4638__auto___42962 = cljs.core.chunk_first(seq__42916_42961__$1);
var G__42963 = cljs.core.chunk_rest(seq__42916_42961__$1);
var G__42964 = c__4638__auto___42962;
var G__42965 = cljs.core.count(c__4638__auto___42962);
var G__42966 = (0);
seq__42916_42949 = G__42963;
chunk__42917_42950 = G__42964;
count__42918_42951 = G__42965;
i__42919_42952 = G__42966;
continue;
} else {
var vec__42932_42967 = cljs.core.first(seq__42916_42961__$1);
var k_42968 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42932_42967,(0),null);
var v_42969 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42932_42967,(1),null);
this$__$1.setRequestHeader(k_42968,v_42969);


var G__42970 = cljs.core.next(seq__42916_42961__$1);
var G__42971 = null;
var G__42972 = (0);
var G__42973 = (0);
seq__42916_42949 = G__42970;
chunk__42917_42950 = G__42971;
count__42918_42951 = G__42972;
i__42919_42952 = G__42973;
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
