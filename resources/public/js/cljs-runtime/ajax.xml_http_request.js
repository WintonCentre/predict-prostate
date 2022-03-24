goog.provide('ajax.xml_http_request');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
var G__43763 = e.target.readyState;
var fexpr__43762 = new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null);
return (fexpr__43762.cljs$core$IFn$_invoke$arity$1 ? fexpr__43762.cljs$core$IFn$_invoke$arity$1(G__43763) : fexpr__43762.call(null,G__43763));
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

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__43766,handler){
var map__43767 = p__43766;
var map__43767__$1 = cljs.core.__destructure_map(map__43767);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43767__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43767__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43767__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43767__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__43767__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__43767__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43767__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
(this$__$1.withCredentials = with_credentials);

(this$__$1.onreadystatechange = (function (p1__43765_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state(p1__43765_SHARP_))){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(this$__$1) : handler.call(null,this$__$1));
} else {
return null;
}
}));

this$__$1.open(method,uri,true);

(this$__$1.timeout = timeout);

var temp__5753__auto___43801 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5753__auto___43801)){
var response_type_43802 = temp__5753__auto___43801;
(this$__$1.responseType = cljs.core.name(response_type_43802));
} else {
}

var seq__43770_43803 = cljs.core.seq(headers);
var chunk__43771_43804 = null;
var count__43772_43805 = (0);
var i__43773_43806 = (0);
while(true){
if((i__43773_43806 < count__43772_43805)){
var vec__43784_43807 = chunk__43771_43804.cljs$core$IIndexed$_nth$arity$2(null,i__43773_43806);
var k_43808 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43784_43807,(0),null);
var v_43809 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43784_43807,(1),null);
this$__$1.setRequestHeader(k_43808,v_43809);


var G__43810 = seq__43770_43803;
var G__43811 = chunk__43771_43804;
var G__43812 = count__43772_43805;
var G__43813 = (i__43773_43806 + (1));
seq__43770_43803 = G__43810;
chunk__43771_43804 = G__43811;
count__43772_43805 = G__43812;
i__43773_43806 = G__43813;
continue;
} else {
var temp__5753__auto___43814 = cljs.core.seq(seq__43770_43803);
if(temp__5753__auto___43814){
var seq__43770_43815__$1 = temp__5753__auto___43814;
if(cljs.core.chunked_seq_QMARK_(seq__43770_43815__$1)){
var c__4638__auto___43816 = cljs.core.chunk_first(seq__43770_43815__$1);
var G__43820 = cljs.core.chunk_rest(seq__43770_43815__$1);
var G__43821 = c__4638__auto___43816;
var G__43822 = cljs.core.count(c__4638__auto___43816);
var G__43823 = (0);
seq__43770_43803 = G__43820;
chunk__43771_43804 = G__43821;
count__43772_43805 = G__43822;
i__43773_43806 = G__43823;
continue;
} else {
var vec__43788_43824 = cljs.core.first(seq__43770_43815__$1);
var k_43825 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43788_43824,(0),null);
var v_43826 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43788_43824,(1),null);
this$__$1.setRequestHeader(k_43825,v_43826);


var G__43827 = cljs.core.next(seq__43770_43815__$1);
var G__43828 = null;
var G__43829 = (0);
var G__43830 = (0);
seq__43770_43803 = G__43827;
chunk__43771_43804 = G__43828;
count__43772_43805 = G__43829;
i__43773_43806 = G__43830;
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
