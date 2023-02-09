goog.provide('ajax.xml_http_request');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
var G__43814 = e.target.readyState;
var fexpr__43813 = new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null);
return (fexpr__43813.cljs$core$IFn$_invoke$arity$1 ? fexpr__43813.cljs$core$IFn$_invoke$arity$1(G__43814) : fexpr__43813.call(null,G__43814));
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

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__43819,handler){
var map__43820 = p__43819;
var map__43820__$1 = cljs.core.__destructure_map(map__43820);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43820__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43820__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43820__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43820__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__43820__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__43820__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43820__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
(this$__$1.withCredentials = with_credentials);

(this$__$1.onreadystatechange = (function (p1__43817_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state(p1__43817_SHARP_))){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(this$__$1) : handler.call(null,this$__$1));
} else {
return null;
}
}));

this$__$1.open(method,uri,true);

(this$__$1.timeout = timeout);

var temp__5753__auto___43841 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5753__auto___43841)){
var response_type_43842 = temp__5753__auto___43841;
(this$__$1.responseType = cljs.core.name(response_type_43842));
} else {
}

var seq__43821_43843 = cljs.core.seq(headers);
var chunk__43822_43844 = null;
var count__43823_43845 = (0);
var i__43824_43846 = (0);
while(true){
if((i__43824_43846 < count__43823_43845)){
var vec__43831_43847 = chunk__43822_43844.cljs$core$IIndexed$_nth$arity$2(null,i__43824_43846);
var k_43848 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43831_43847,(0),null);
var v_43849 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43831_43847,(1),null);
this$__$1.setRequestHeader(k_43848,v_43849);


var G__43850 = seq__43821_43843;
var G__43851 = chunk__43822_43844;
var G__43852 = count__43823_43845;
var G__43853 = (i__43824_43846 + (1));
seq__43821_43843 = G__43850;
chunk__43822_43844 = G__43851;
count__43823_43845 = G__43852;
i__43824_43846 = G__43853;
continue;
} else {
var temp__5753__auto___43854 = cljs.core.seq(seq__43821_43843);
if(temp__5753__auto___43854){
var seq__43821_43855__$1 = temp__5753__auto___43854;
if(cljs.core.chunked_seq_QMARK_(seq__43821_43855__$1)){
var c__4638__auto___43856 = cljs.core.chunk_first(seq__43821_43855__$1);
var G__43857 = cljs.core.chunk_rest(seq__43821_43855__$1);
var G__43858 = c__4638__auto___43856;
var G__43859 = cljs.core.count(c__4638__auto___43856);
var G__43860 = (0);
seq__43821_43843 = G__43857;
chunk__43822_43844 = G__43858;
count__43823_43845 = G__43859;
i__43824_43846 = G__43860;
continue;
} else {
var vec__43834_43861 = cljs.core.first(seq__43821_43855__$1);
var k_43862 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43834_43861,(0),null);
var v_43863 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43834_43861,(1),null);
this$__$1.setRequestHeader(k_43862,v_43863);


var G__43864 = cljs.core.next(seq__43821_43855__$1);
var G__43865 = null;
var G__43866 = (0);
var G__43867 = (0);
seq__43821_43843 = G__43864;
chunk__43822_43844 = G__43865;
count__43823_43845 = G__43866;
i__43824_43846 = G__43867;
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
