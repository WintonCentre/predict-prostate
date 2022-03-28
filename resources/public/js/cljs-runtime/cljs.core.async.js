goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__36164 = arguments.length;
switch (G__36164) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36165 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36165 = (function (f,blockable,meta36166){
this.f = f;
this.blockable = blockable;
this.meta36166 = meta36166;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36165.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36167,meta36166__$1){
var self__ = this;
var _36167__$1 = this;
return (new cljs.core.async.t_cljs$core$async36165(self__.f,self__.blockable,meta36166__$1));
}));

(cljs.core.async.t_cljs$core$async36165.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36167){
var self__ = this;
var _36167__$1 = this;
return self__.meta36166;
}));

(cljs.core.async.t_cljs$core$async36165.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36165.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async36165.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async36165.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async36165.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta36166","meta36166",-961156888,null)], null);
}));

(cljs.core.async.t_cljs$core$async36165.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36165.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36165");

(cljs.core.async.t_cljs$core$async36165.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async36165");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36165.
 */
cljs.core.async.__GT_t_cljs$core$async36165 = (function cljs$core$async$__GT_t_cljs$core$async36165(f__$1,blockable__$1,meta36166){
return (new cljs.core.async.t_cljs$core$async36165(f__$1,blockable__$1,meta36166));
});

}

return (new cljs.core.async.t_cljs$core$async36165(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__36174 = arguments.length;
switch (G__36174) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__36176 = arguments.length;
switch (G__36176) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__36178 = arguments.length;
switch (G__36178) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_38429 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_38429) : fn1.call(null,val_38429));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_38429) : fn1.call(null,val_38429));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__36180 = arguments.length;
switch (G__36180) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5751__auto__)){
var ret = temp__5751__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5751__auto__)){
var retb = temp__5751__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4695__auto___38435 = n;
var x_38436 = (0);
while(true){
if((x_38436 < n__4695__auto___38435)){
(a[x_38436] = x_38436);

var G__38438 = (x_38436 + (1));
x_38436 = G__38438;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36183 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36183 = (function (flag,meta36184){
this.flag = flag;
this.meta36184 = meta36184;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36183.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36185,meta36184__$1){
var self__ = this;
var _36185__$1 = this;
return (new cljs.core.async.t_cljs$core$async36183(self__.flag,meta36184__$1));
}));

(cljs.core.async.t_cljs$core$async36183.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36185){
var self__ = this;
var _36185__$1 = this;
return self__.meta36184;
}));

(cljs.core.async.t_cljs$core$async36183.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36183.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async36183.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async36183.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async36183.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta36184","meta36184",109820972,null)], null);
}));

(cljs.core.async.t_cljs$core$async36183.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36183.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36183");

(cljs.core.async.t_cljs$core$async36183.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async36183");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36183.
 */
cljs.core.async.__GT_t_cljs$core$async36183 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async36183(flag__$1,meta36184){
return (new cljs.core.async.t_cljs$core$async36183(flag__$1,meta36184));
});

}

return (new cljs.core.async.t_cljs$core$async36183(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36188 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36188 = (function (flag,cb,meta36189){
this.flag = flag;
this.cb = cb;
this.meta36189 = meta36189;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36188.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36190,meta36189__$1){
var self__ = this;
var _36190__$1 = this;
return (new cljs.core.async.t_cljs$core$async36188(self__.flag,self__.cb,meta36189__$1));
}));

(cljs.core.async.t_cljs$core$async36188.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36190){
var self__ = this;
var _36190__$1 = this;
return self__.meta36189;
}));

(cljs.core.async.t_cljs$core$async36188.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36188.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async36188.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async36188.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async36188.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta36189","meta36189",1730143699,null)], null);
}));

(cljs.core.async.t_cljs$core$async36188.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36188.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36188");

(cljs.core.async.t_cljs$core$async36188.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async36188");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36188.
 */
cljs.core.async.__GT_t_cljs$core$async36188 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async36188(flag__$1,cb__$1,meta36189){
return (new cljs.core.async.t_cljs$core$async36188(flag__$1,cb__$1,meta36189));
});

}

return (new cljs.core.async.t_cljs$core$async36188(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__36200_SHARP_){
var G__36203 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__36200_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__36203) : fret.call(null,G__36203));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__36201_SHARP_){
var G__36204 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__36201_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__36204) : fret.call(null,G__36204));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4212__auto__ = wport;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return port;
}
})()], null));
} else {
var G__38445 = (i + (1));
i = G__38445;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4212__auto__ = ret;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5753__auto__ = (function (){var and__4210__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4210__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4210__auto__;
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var got = temp__5753__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___38446 = arguments.length;
var i__4819__auto___38447 = (0);
while(true){
if((i__4819__auto___38447 < len__4818__auto___38446)){
args__4824__auto__.push((arguments[i__4819__auto___38447]));

var G__38448 = (i__4819__auto___38447 + (1));
i__4819__auto___38447 = G__38448;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__36211){
var map__36212 = p__36211;
var map__36212__$1 = cljs.core.__destructure_map(map__36212);
var opts = map__36212__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq36205){
var G__36206 = cljs.core.first(seq36205);
var seq36205__$1 = cljs.core.next(seq36205);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36206,seq36205__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__36214 = arguments.length;
switch (G__36214) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__36087__auto___38453 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36088__auto__ = (function (){var switch__35885__auto__ = (function (state_36266){
var state_val_36267 = (state_36266[(1)]);
if((state_val_36267 === (7))){
var inst_36260 = (state_36266[(2)]);
var state_36266__$1 = state_36266;
var statearr_36268_38454 = state_36266__$1;
(statearr_36268_38454[(2)] = inst_36260);

(statearr_36268_38454[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36267 === (1))){
var state_36266__$1 = state_36266;
var statearr_36269_38455 = state_36266__$1;
(statearr_36269_38455[(2)] = null);

(statearr_36269_38455[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36267 === (4))){
var inst_36225 = (state_36266[(7)]);
var inst_36225__$1 = (state_36266[(2)]);
var inst_36228 = (inst_36225__$1 == null);
var state_36266__$1 = (function (){var statearr_36273 = state_36266;
(statearr_36273[(7)] = inst_36225__$1);

return statearr_36273;
})();
if(cljs.core.truth_(inst_36228)){
var statearr_36274_38456 = state_36266__$1;
(statearr_36274_38456[(1)] = (5));

} else {
var statearr_36276_38457 = state_36266__$1;
(statearr_36276_38457[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36267 === (13))){
var state_36266__$1 = state_36266;
var statearr_36277_38458 = state_36266__$1;
(statearr_36277_38458[(2)] = null);

(statearr_36277_38458[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36267 === (6))){
var inst_36225 = (state_36266[(7)]);
var state_36266__$1 = state_36266;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36266__$1,(11),to,inst_36225);
} else {
if((state_val_36267 === (3))){
var inst_36263 = (state_36266[(2)]);
var state_36266__$1 = state_36266;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36266__$1,inst_36263);
} else {
if((state_val_36267 === (12))){
var state_36266__$1 = state_36266;
var statearr_36279_38459 = state_36266__$1;
(statearr_36279_38459[(2)] = null);

(statearr_36279_38459[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36267 === (2))){
var state_36266__$1 = state_36266;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36266__$1,(4),from);
} else {
if((state_val_36267 === (11))){
var inst_36250 = (state_36266[(2)]);
var state_36266__$1 = state_36266;
if(cljs.core.truth_(inst_36250)){
var statearr_36280_38462 = state_36266__$1;
(statearr_36280_38462[(1)] = (12));

} else {
var statearr_36281_38463 = state_36266__$1;
(statearr_36281_38463[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36267 === (9))){
var state_36266__$1 = state_36266;
var statearr_36282_38473 = state_36266__$1;
(statearr_36282_38473[(2)] = null);

(statearr_36282_38473[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36267 === (5))){
var state_36266__$1 = state_36266;
if(cljs.core.truth_(close_QMARK_)){
var statearr_36283_38474 = state_36266__$1;
(statearr_36283_38474[(1)] = (8));

} else {
var statearr_36284_38475 = state_36266__$1;
(statearr_36284_38475[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36267 === (14))){
var inst_36258 = (state_36266[(2)]);
var state_36266__$1 = state_36266;
var statearr_36285_38476 = state_36266__$1;
(statearr_36285_38476[(2)] = inst_36258);

(statearr_36285_38476[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36267 === (10))){
var inst_36247 = (state_36266[(2)]);
var state_36266__$1 = state_36266;
var statearr_36286_38477 = state_36266__$1;
(statearr_36286_38477[(2)] = inst_36247);

(statearr_36286_38477[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36267 === (8))){
var inst_36238 = cljs.core.async.close_BANG_(to);
var state_36266__$1 = state_36266;
var statearr_36287_38478 = state_36266__$1;
(statearr_36287_38478[(2)] = inst_36238);

(statearr_36287_38478[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__35886__auto__ = null;
var cljs$core$async$state_machine__35886__auto____0 = (function (){
var statearr_36288 = [null,null,null,null,null,null,null,null];
(statearr_36288[(0)] = cljs$core$async$state_machine__35886__auto__);

(statearr_36288[(1)] = (1));

return statearr_36288;
});
var cljs$core$async$state_machine__35886__auto____1 = (function (state_36266){
while(true){
var ret_value__35887__auto__ = (function (){try{while(true){
var result__35888__auto__ = switch__35885__auto__(state_36266);
if(cljs.core.keyword_identical_QMARK_(result__35888__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35888__auto__;
}
break;
}
}catch (e36289){var ex__35889__auto__ = e36289;
var statearr_36290_38480 = state_36266;
(statearr_36290_38480[(2)] = ex__35889__auto__);


if(cljs.core.seq((state_36266[(4)]))){
var statearr_36291_38481 = state_36266;
(statearr_36291_38481[(1)] = cljs.core.first((state_36266[(4)])));

} else {
throw ex__35889__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38482 = state_36266;
state_36266 = G__38482;
continue;
} else {
return ret_value__35887__auto__;
}
break;
}
});
cljs$core$async$state_machine__35886__auto__ = function(state_36266){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35886__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35886__auto____1.call(this,state_36266);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35886__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35886__auto____0;
cljs$core$async$state_machine__35886__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35886__auto____1;
return cljs$core$async$state_machine__35886__auto__;
})()
})();
var state__36089__auto__ = (function (){var statearr_36292 = f__36088__auto__();
(statearr_36292[(6)] = c__36087__auto___38453);

return statearr_36292;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36089__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__36293){
var vec__36294 = p__36293;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36294,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36294,(1),null);
var job = vec__36294;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__36087__auto___38483 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36088__auto__ = (function (){var switch__35885__auto__ = (function (state_36301){
var state_val_36302 = (state_36301[(1)]);
if((state_val_36302 === (1))){
var state_36301__$1 = state_36301;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36301__$1,(2),res,v);
} else {
if((state_val_36302 === (2))){
var inst_36298 = (state_36301[(2)]);
var inst_36299 = cljs.core.async.close_BANG_(res);
var state_36301__$1 = (function (){var statearr_36303 = state_36301;
(statearr_36303[(7)] = inst_36298);

return statearr_36303;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36301__$1,inst_36299);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__35886__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35886__auto____0 = (function (){
var statearr_36304 = [null,null,null,null,null,null,null,null];
(statearr_36304[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35886__auto__);

(statearr_36304[(1)] = (1));

return statearr_36304;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35886__auto____1 = (function (state_36301){
while(true){
var ret_value__35887__auto__ = (function (){try{while(true){
var result__35888__auto__ = switch__35885__auto__(state_36301);
if(cljs.core.keyword_identical_QMARK_(result__35888__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35888__auto__;
}
break;
}
}catch (e36305){var ex__35889__auto__ = e36305;
var statearr_36306_38484 = state_36301;
(statearr_36306_38484[(2)] = ex__35889__auto__);


if(cljs.core.seq((state_36301[(4)]))){
var statearr_36307_38485 = state_36301;
(statearr_36307_38485[(1)] = cljs.core.first((state_36301[(4)])));

} else {
throw ex__35889__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38486 = state_36301;
state_36301 = G__38486;
continue;
} else {
return ret_value__35887__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35886__auto__ = function(state_36301){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35886__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35886__auto____1.call(this,state_36301);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__35886__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35886__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35886__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35886__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35886__auto__;
})()
})();
var state__36089__auto__ = (function (){var statearr_36309 = f__36088__auto__();
(statearr_36309[(6)] = c__36087__auto___38483);

return statearr_36309;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36089__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__36310){
var vec__36311 = p__36310;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36311,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36311,(1),null);
var job = vec__36311;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4695__auto___38487 = n;
var __38488 = (0);
while(true){
if((__38488 < n__4695__auto___38487)){
var G__36314_38491 = type;
var G__36314_38492__$1 = (((G__36314_38491 instanceof cljs.core.Keyword))?G__36314_38491.fqn:null);
switch (G__36314_38492__$1) {
case "compute":
var c__36087__auto___38495 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__38488,c__36087__auto___38495,G__36314_38491,G__36314_38492__$1,n__4695__auto___38487,jobs,results,process,async){
return (function (){
var f__36088__auto__ = (function (){var switch__35885__auto__ = ((function (__38488,c__36087__auto___38495,G__36314_38491,G__36314_38492__$1,n__4695__auto___38487,jobs,results,process,async){
return (function (state_36327){
var state_val_36328 = (state_36327[(1)]);
if((state_val_36328 === (1))){
var state_36327__$1 = state_36327;
var statearr_36329_38496 = state_36327__$1;
(statearr_36329_38496[(2)] = null);

(statearr_36329_38496[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36328 === (2))){
var state_36327__$1 = state_36327;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36327__$1,(4),jobs);
} else {
if((state_val_36328 === (3))){
var inst_36325 = (state_36327[(2)]);
var state_36327__$1 = state_36327;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36327__$1,inst_36325);
} else {
if((state_val_36328 === (4))){
var inst_36317 = (state_36327[(2)]);
var inst_36318 = process(inst_36317);
var state_36327__$1 = state_36327;
if(cljs.core.truth_(inst_36318)){
var statearr_36334_38497 = state_36327__$1;
(statearr_36334_38497[(1)] = (5));

} else {
var statearr_36336_38498 = state_36327__$1;
(statearr_36336_38498[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36328 === (5))){
var state_36327__$1 = state_36327;
var statearr_36338_38500 = state_36327__$1;
(statearr_36338_38500[(2)] = null);

(statearr_36338_38500[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36328 === (6))){
var state_36327__$1 = state_36327;
var statearr_36343_38501 = state_36327__$1;
(statearr_36343_38501[(2)] = null);

(statearr_36343_38501[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36328 === (7))){
var inst_36323 = (state_36327[(2)]);
var state_36327__$1 = state_36327;
var statearr_36344_38502 = state_36327__$1;
(statearr_36344_38502[(2)] = inst_36323);

(statearr_36344_38502[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__38488,c__36087__auto___38495,G__36314_38491,G__36314_38492__$1,n__4695__auto___38487,jobs,results,process,async))
;
return ((function (__38488,switch__35885__auto__,c__36087__auto___38495,G__36314_38491,G__36314_38492__$1,n__4695__auto___38487,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__35886__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35886__auto____0 = (function (){
var statearr_36347 = [null,null,null,null,null,null,null];
(statearr_36347[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35886__auto__);

(statearr_36347[(1)] = (1));

return statearr_36347;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35886__auto____1 = (function (state_36327){
while(true){
var ret_value__35887__auto__ = (function (){try{while(true){
var result__35888__auto__ = switch__35885__auto__(state_36327);
if(cljs.core.keyword_identical_QMARK_(result__35888__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35888__auto__;
}
break;
}
}catch (e36349){var ex__35889__auto__ = e36349;
var statearr_36354_38504 = state_36327;
(statearr_36354_38504[(2)] = ex__35889__auto__);


if(cljs.core.seq((state_36327[(4)]))){
var statearr_36355_38505 = state_36327;
(statearr_36355_38505[(1)] = cljs.core.first((state_36327[(4)])));

} else {
throw ex__35889__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38506 = state_36327;
state_36327 = G__38506;
continue;
} else {
return ret_value__35887__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35886__auto__ = function(state_36327){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35886__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35886__auto____1.call(this,state_36327);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__35886__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35886__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35886__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35886__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35886__auto__;
})()
;})(__38488,switch__35885__auto__,c__36087__auto___38495,G__36314_38491,G__36314_38492__$1,n__4695__auto___38487,jobs,results,process,async))
})();
var state__36089__auto__ = (function (){var statearr_36357 = f__36088__auto__();
(statearr_36357[(6)] = c__36087__auto___38495);

return statearr_36357;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36089__auto__);
});})(__38488,c__36087__auto___38495,G__36314_38491,G__36314_38492__$1,n__4695__auto___38487,jobs,results,process,async))
);


break;
case "async":
var c__36087__auto___38507 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__38488,c__36087__auto___38507,G__36314_38491,G__36314_38492__$1,n__4695__auto___38487,jobs,results,process,async){
return (function (){
var f__36088__auto__ = (function (){var switch__35885__auto__ = ((function (__38488,c__36087__auto___38507,G__36314_38491,G__36314_38492__$1,n__4695__auto___38487,jobs,results,process,async){
return (function (state_36375){
var state_val_36376 = (state_36375[(1)]);
if((state_val_36376 === (1))){
var state_36375__$1 = state_36375;
var statearr_36377_38508 = state_36375__$1;
(statearr_36377_38508[(2)] = null);

(statearr_36377_38508[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36376 === (2))){
var state_36375__$1 = state_36375;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36375__$1,(4),jobs);
} else {
if((state_val_36376 === (3))){
var inst_36373 = (state_36375[(2)]);
var state_36375__$1 = state_36375;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36375__$1,inst_36373);
} else {
if((state_val_36376 === (4))){
var inst_36365 = (state_36375[(2)]);
var inst_36366 = async(inst_36365);
var state_36375__$1 = state_36375;
if(cljs.core.truth_(inst_36366)){
var statearr_36379_38509 = state_36375__$1;
(statearr_36379_38509[(1)] = (5));

} else {
var statearr_36380_38510 = state_36375__$1;
(statearr_36380_38510[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36376 === (5))){
var state_36375__$1 = state_36375;
var statearr_36381_38512 = state_36375__$1;
(statearr_36381_38512[(2)] = null);

(statearr_36381_38512[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36376 === (6))){
var state_36375__$1 = state_36375;
var statearr_36384_38513 = state_36375__$1;
(statearr_36384_38513[(2)] = null);

(statearr_36384_38513[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36376 === (7))){
var inst_36371 = (state_36375[(2)]);
var state_36375__$1 = state_36375;
var statearr_36385_38514 = state_36375__$1;
(statearr_36385_38514[(2)] = inst_36371);

(statearr_36385_38514[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__38488,c__36087__auto___38507,G__36314_38491,G__36314_38492__$1,n__4695__auto___38487,jobs,results,process,async))
;
return ((function (__38488,switch__35885__auto__,c__36087__auto___38507,G__36314_38491,G__36314_38492__$1,n__4695__auto___38487,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__35886__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35886__auto____0 = (function (){
var statearr_36387 = [null,null,null,null,null,null,null];
(statearr_36387[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35886__auto__);

(statearr_36387[(1)] = (1));

return statearr_36387;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35886__auto____1 = (function (state_36375){
while(true){
var ret_value__35887__auto__ = (function (){try{while(true){
var result__35888__auto__ = switch__35885__auto__(state_36375);
if(cljs.core.keyword_identical_QMARK_(result__35888__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35888__auto__;
}
break;
}
}catch (e36388){var ex__35889__auto__ = e36388;
var statearr_36389_38523 = state_36375;
(statearr_36389_38523[(2)] = ex__35889__auto__);


if(cljs.core.seq((state_36375[(4)]))){
var statearr_36390_38524 = state_36375;
(statearr_36390_38524[(1)] = cljs.core.first((state_36375[(4)])));

} else {
throw ex__35889__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38525 = state_36375;
state_36375 = G__38525;
continue;
} else {
return ret_value__35887__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35886__auto__ = function(state_36375){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35886__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35886__auto____1.call(this,state_36375);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__35886__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35886__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35886__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35886__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35886__auto__;
})()
;})(__38488,switch__35885__auto__,c__36087__auto___38507,G__36314_38491,G__36314_38492__$1,n__4695__auto___38487,jobs,results,process,async))
})();
var state__36089__auto__ = (function (){var statearr_36395 = f__36088__auto__();
(statearr_36395[(6)] = c__36087__auto___38507);

return statearr_36395;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36089__auto__);
});})(__38488,c__36087__auto___38507,G__36314_38491,G__36314_38492__$1,n__4695__auto___38487,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36314_38492__$1)].join('')));

}

var G__38527 = (__38488 + (1));
__38488 = G__38527;
continue;
} else {
}
break;
}

var c__36087__auto___38528 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36088__auto__ = (function (){var switch__35885__auto__ = (function (state_36439){
var state_val_36444 = (state_36439[(1)]);
if((state_val_36444 === (7))){
var inst_36430 = (state_36439[(2)]);
var state_36439__$1 = state_36439;
var statearr_36469_38529 = state_36439__$1;
(statearr_36469_38529[(2)] = inst_36430);

(statearr_36469_38529[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36444 === (1))){
var state_36439__$1 = state_36439;
var statearr_36479_38530 = state_36439__$1;
(statearr_36479_38530[(2)] = null);

(statearr_36479_38530[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36444 === (4))){
var inst_36415 = (state_36439[(7)]);
var inst_36415__$1 = (state_36439[(2)]);
var inst_36416 = (inst_36415__$1 == null);
var state_36439__$1 = (function (){var statearr_36481 = state_36439;
(statearr_36481[(7)] = inst_36415__$1);

return statearr_36481;
})();
if(cljs.core.truth_(inst_36416)){
var statearr_36482_38531 = state_36439__$1;
(statearr_36482_38531[(1)] = (5));

} else {
var statearr_36483_38532 = state_36439__$1;
(statearr_36483_38532[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36444 === (6))){
var inst_36420 = (state_36439[(8)]);
var inst_36415 = (state_36439[(7)]);
var inst_36420__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_36421 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36422 = [inst_36415,inst_36420__$1];
var inst_36423 = (new cljs.core.PersistentVector(null,2,(5),inst_36421,inst_36422,null));
var state_36439__$1 = (function (){var statearr_36490 = state_36439;
(statearr_36490[(8)] = inst_36420__$1);

return statearr_36490;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36439__$1,(8),jobs,inst_36423);
} else {
if((state_val_36444 === (3))){
var inst_36436 = (state_36439[(2)]);
var state_36439__$1 = state_36439;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36439__$1,inst_36436);
} else {
if((state_val_36444 === (2))){
var state_36439__$1 = state_36439;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36439__$1,(4),from);
} else {
if((state_val_36444 === (9))){
var inst_36427 = (state_36439[(2)]);
var state_36439__$1 = (function (){var statearr_36501 = state_36439;
(statearr_36501[(9)] = inst_36427);

return statearr_36501;
})();
var statearr_36502_38542 = state_36439__$1;
(statearr_36502_38542[(2)] = null);

(statearr_36502_38542[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36444 === (5))){
var inst_36418 = cljs.core.async.close_BANG_(jobs);
var state_36439__$1 = state_36439;
var statearr_36504_38543 = state_36439__$1;
(statearr_36504_38543[(2)] = inst_36418);

(statearr_36504_38543[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36444 === (8))){
var inst_36420 = (state_36439[(8)]);
var inst_36425 = (state_36439[(2)]);
var state_36439__$1 = (function (){var statearr_36505 = state_36439;
(statearr_36505[(10)] = inst_36425);

return statearr_36505;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36439__$1,(9),results,inst_36420);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__35886__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35886__auto____0 = (function (){
var statearr_36507 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36507[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35886__auto__);

(statearr_36507[(1)] = (1));

return statearr_36507;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35886__auto____1 = (function (state_36439){
while(true){
var ret_value__35887__auto__ = (function (){try{while(true){
var result__35888__auto__ = switch__35885__auto__(state_36439);
if(cljs.core.keyword_identical_QMARK_(result__35888__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35888__auto__;
}
break;
}
}catch (e36508){var ex__35889__auto__ = e36508;
var statearr_36509_38548 = state_36439;
(statearr_36509_38548[(2)] = ex__35889__auto__);


if(cljs.core.seq((state_36439[(4)]))){
var statearr_36510_38549 = state_36439;
(statearr_36510_38549[(1)] = cljs.core.first((state_36439[(4)])));

} else {
throw ex__35889__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38550 = state_36439;
state_36439 = G__38550;
continue;
} else {
return ret_value__35887__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35886__auto__ = function(state_36439){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35886__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35886__auto____1.call(this,state_36439);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__35886__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35886__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35886__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35886__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35886__auto__;
})()
})();
var state__36089__auto__ = (function (){var statearr_36511 = f__36088__auto__();
(statearr_36511[(6)] = c__36087__auto___38528);

return statearr_36511;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36089__auto__);
}));


var c__36087__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36088__auto__ = (function (){var switch__35885__auto__ = (function (state_36549){
var state_val_36550 = (state_36549[(1)]);
if((state_val_36550 === (7))){
var inst_36545 = (state_36549[(2)]);
var state_36549__$1 = state_36549;
var statearr_36552_38558 = state_36549__$1;
(statearr_36552_38558[(2)] = inst_36545);

(statearr_36552_38558[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36550 === (20))){
var state_36549__$1 = state_36549;
var statearr_36554_38559 = state_36549__$1;
(statearr_36554_38559[(2)] = null);

(statearr_36554_38559[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36550 === (1))){
var state_36549__$1 = state_36549;
var statearr_36555_38560 = state_36549__$1;
(statearr_36555_38560[(2)] = null);

(statearr_36555_38560[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36550 === (4))){
var inst_36514 = (state_36549[(7)]);
var inst_36514__$1 = (state_36549[(2)]);
var inst_36515 = (inst_36514__$1 == null);
var state_36549__$1 = (function (){var statearr_36556 = state_36549;
(statearr_36556[(7)] = inst_36514__$1);

return statearr_36556;
})();
if(cljs.core.truth_(inst_36515)){
var statearr_36557_38562 = state_36549__$1;
(statearr_36557_38562[(1)] = (5));

} else {
var statearr_36558_38563 = state_36549__$1;
(statearr_36558_38563[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36550 === (15))){
var inst_36527 = (state_36549[(8)]);
var state_36549__$1 = state_36549;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36549__$1,(18),to,inst_36527);
} else {
if((state_val_36550 === (21))){
var inst_36540 = (state_36549[(2)]);
var state_36549__$1 = state_36549;
var statearr_36559_38564 = state_36549__$1;
(statearr_36559_38564[(2)] = inst_36540);

(statearr_36559_38564[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36550 === (13))){
var inst_36542 = (state_36549[(2)]);
var state_36549__$1 = (function (){var statearr_36560 = state_36549;
(statearr_36560[(9)] = inst_36542);

return statearr_36560;
})();
var statearr_36561_38566 = state_36549__$1;
(statearr_36561_38566[(2)] = null);

(statearr_36561_38566[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36550 === (6))){
var inst_36514 = (state_36549[(7)]);
var state_36549__$1 = state_36549;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36549__$1,(11),inst_36514);
} else {
if((state_val_36550 === (17))){
var inst_36535 = (state_36549[(2)]);
var state_36549__$1 = state_36549;
if(cljs.core.truth_(inst_36535)){
var statearr_36562_38567 = state_36549__$1;
(statearr_36562_38567[(1)] = (19));

} else {
var statearr_36563_38568 = state_36549__$1;
(statearr_36563_38568[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36550 === (3))){
var inst_36547 = (state_36549[(2)]);
var state_36549__$1 = state_36549;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36549__$1,inst_36547);
} else {
if((state_val_36550 === (12))){
var inst_36524 = (state_36549[(10)]);
var state_36549__$1 = state_36549;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36549__$1,(14),inst_36524);
} else {
if((state_val_36550 === (2))){
var state_36549__$1 = state_36549;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36549__$1,(4),results);
} else {
if((state_val_36550 === (19))){
var state_36549__$1 = state_36549;
var statearr_36564_38572 = state_36549__$1;
(statearr_36564_38572[(2)] = null);

(statearr_36564_38572[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36550 === (11))){
var inst_36524 = (state_36549[(2)]);
var state_36549__$1 = (function (){var statearr_36565 = state_36549;
(statearr_36565[(10)] = inst_36524);

return statearr_36565;
})();
var statearr_36566_38576 = state_36549__$1;
(statearr_36566_38576[(2)] = null);

(statearr_36566_38576[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36550 === (9))){
var state_36549__$1 = state_36549;
var statearr_36567_38577 = state_36549__$1;
(statearr_36567_38577[(2)] = null);

(statearr_36567_38577[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36550 === (5))){
var state_36549__$1 = state_36549;
if(cljs.core.truth_(close_QMARK_)){
var statearr_36571_38580 = state_36549__$1;
(statearr_36571_38580[(1)] = (8));

} else {
var statearr_36572_38581 = state_36549__$1;
(statearr_36572_38581[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36550 === (14))){
var inst_36527 = (state_36549[(8)]);
var inst_36529 = (state_36549[(11)]);
var inst_36527__$1 = (state_36549[(2)]);
var inst_36528 = (inst_36527__$1 == null);
var inst_36529__$1 = cljs.core.not(inst_36528);
var state_36549__$1 = (function (){var statearr_36573 = state_36549;
(statearr_36573[(8)] = inst_36527__$1);

(statearr_36573[(11)] = inst_36529__$1);

return statearr_36573;
})();
if(inst_36529__$1){
var statearr_36574_38582 = state_36549__$1;
(statearr_36574_38582[(1)] = (15));

} else {
var statearr_36575_38583 = state_36549__$1;
(statearr_36575_38583[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36550 === (16))){
var inst_36529 = (state_36549[(11)]);
var state_36549__$1 = state_36549;
var statearr_36576_38584 = state_36549__$1;
(statearr_36576_38584[(2)] = inst_36529);

(statearr_36576_38584[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36550 === (10))){
var inst_36521 = (state_36549[(2)]);
var state_36549__$1 = state_36549;
var statearr_36577_38586 = state_36549__$1;
(statearr_36577_38586[(2)] = inst_36521);

(statearr_36577_38586[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36550 === (18))){
var inst_36532 = (state_36549[(2)]);
var state_36549__$1 = state_36549;
var statearr_36578_38589 = state_36549__$1;
(statearr_36578_38589[(2)] = inst_36532);

(statearr_36578_38589[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36550 === (8))){
var inst_36518 = cljs.core.async.close_BANG_(to);
var state_36549__$1 = state_36549;
var statearr_36579_38590 = state_36549__$1;
(statearr_36579_38590[(2)] = inst_36518);

(statearr_36579_38590[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__35886__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35886__auto____0 = (function (){
var statearr_36580 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36580[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35886__auto__);

(statearr_36580[(1)] = (1));

return statearr_36580;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35886__auto____1 = (function (state_36549){
while(true){
var ret_value__35887__auto__ = (function (){try{while(true){
var result__35888__auto__ = switch__35885__auto__(state_36549);
if(cljs.core.keyword_identical_QMARK_(result__35888__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35888__auto__;
}
break;
}
}catch (e36581){var ex__35889__auto__ = e36581;
var statearr_36582_38594 = state_36549;
(statearr_36582_38594[(2)] = ex__35889__auto__);


if(cljs.core.seq((state_36549[(4)]))){
var statearr_36583_38596 = state_36549;
(statearr_36583_38596[(1)] = cljs.core.first((state_36549[(4)])));

} else {
throw ex__35889__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38597 = state_36549;
state_36549 = G__38597;
continue;
} else {
return ret_value__35887__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35886__auto__ = function(state_36549){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35886__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35886__auto____1.call(this,state_36549);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__35886__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35886__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35886__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35886__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35886__auto__;
})()
})();
var state__36089__auto__ = (function (){var statearr_36584 = f__36088__auto__();
(statearr_36584[(6)] = c__36087__auto__);

return statearr_36584;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36089__auto__);
}));

return c__36087__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__36588 = arguments.length;
switch (G__36588) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__36598 = arguments.length;
switch (G__36598) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__36600 = arguments.length;
switch (G__36600) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__36087__auto___38619 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36088__auto__ = (function (){var switch__35885__auto__ = (function (state_36626){
var state_val_36627 = (state_36626[(1)]);
if((state_val_36627 === (7))){
var inst_36622 = (state_36626[(2)]);
var state_36626__$1 = state_36626;
var statearr_36628_38621 = state_36626__$1;
(statearr_36628_38621[(2)] = inst_36622);

(statearr_36628_38621[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36627 === (1))){
var state_36626__$1 = state_36626;
var statearr_36629_38622 = state_36626__$1;
(statearr_36629_38622[(2)] = null);

(statearr_36629_38622[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36627 === (4))){
var inst_36603 = (state_36626[(7)]);
var inst_36603__$1 = (state_36626[(2)]);
var inst_36604 = (inst_36603__$1 == null);
var state_36626__$1 = (function (){var statearr_36631 = state_36626;
(statearr_36631[(7)] = inst_36603__$1);

return statearr_36631;
})();
if(cljs.core.truth_(inst_36604)){
var statearr_36632_38624 = state_36626__$1;
(statearr_36632_38624[(1)] = (5));

} else {
var statearr_36633_38625 = state_36626__$1;
(statearr_36633_38625[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36627 === (13))){
var state_36626__$1 = state_36626;
var statearr_36634_38626 = state_36626__$1;
(statearr_36634_38626[(2)] = null);

(statearr_36634_38626[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36627 === (6))){
var inst_36603 = (state_36626[(7)]);
var inst_36609 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_36603) : p.call(null,inst_36603));
var state_36626__$1 = state_36626;
if(cljs.core.truth_(inst_36609)){
var statearr_36635_38627 = state_36626__$1;
(statearr_36635_38627[(1)] = (9));

} else {
var statearr_36636_38628 = state_36626__$1;
(statearr_36636_38628[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36627 === (3))){
var inst_36624 = (state_36626[(2)]);
var state_36626__$1 = state_36626;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36626__$1,inst_36624);
} else {
if((state_val_36627 === (12))){
var state_36626__$1 = state_36626;
var statearr_36637_38630 = state_36626__$1;
(statearr_36637_38630[(2)] = null);

(statearr_36637_38630[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36627 === (2))){
var state_36626__$1 = state_36626;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36626__$1,(4),ch);
} else {
if((state_val_36627 === (11))){
var inst_36603 = (state_36626[(7)]);
var inst_36613 = (state_36626[(2)]);
var state_36626__$1 = state_36626;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36626__$1,(8),inst_36613,inst_36603);
} else {
if((state_val_36627 === (9))){
var state_36626__$1 = state_36626;
var statearr_36638_38632 = state_36626__$1;
(statearr_36638_38632[(2)] = tc);

(statearr_36638_38632[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36627 === (5))){
var inst_36606 = cljs.core.async.close_BANG_(tc);
var inst_36607 = cljs.core.async.close_BANG_(fc);
var state_36626__$1 = (function (){var statearr_36640 = state_36626;
(statearr_36640[(8)] = inst_36606);

return statearr_36640;
})();
var statearr_36641_38633 = state_36626__$1;
(statearr_36641_38633[(2)] = inst_36607);

(statearr_36641_38633[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36627 === (14))){
var inst_36620 = (state_36626[(2)]);
var state_36626__$1 = state_36626;
var statearr_36642_38634 = state_36626__$1;
(statearr_36642_38634[(2)] = inst_36620);

(statearr_36642_38634[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36627 === (10))){
var state_36626__$1 = state_36626;
var statearr_36643_38635 = state_36626__$1;
(statearr_36643_38635[(2)] = fc);

(statearr_36643_38635[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36627 === (8))){
var inst_36615 = (state_36626[(2)]);
var state_36626__$1 = state_36626;
if(cljs.core.truth_(inst_36615)){
var statearr_36644_38636 = state_36626__$1;
(statearr_36644_38636[(1)] = (12));

} else {
var statearr_36645_38637 = state_36626__$1;
(statearr_36645_38637[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__35886__auto__ = null;
var cljs$core$async$state_machine__35886__auto____0 = (function (){
var statearr_36646 = [null,null,null,null,null,null,null,null,null];
(statearr_36646[(0)] = cljs$core$async$state_machine__35886__auto__);

(statearr_36646[(1)] = (1));

return statearr_36646;
});
var cljs$core$async$state_machine__35886__auto____1 = (function (state_36626){
while(true){
var ret_value__35887__auto__ = (function (){try{while(true){
var result__35888__auto__ = switch__35885__auto__(state_36626);
if(cljs.core.keyword_identical_QMARK_(result__35888__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35888__auto__;
}
break;
}
}catch (e36647){var ex__35889__auto__ = e36647;
var statearr_36648_38638 = state_36626;
(statearr_36648_38638[(2)] = ex__35889__auto__);


if(cljs.core.seq((state_36626[(4)]))){
var statearr_36649_38639 = state_36626;
(statearr_36649_38639[(1)] = cljs.core.first((state_36626[(4)])));

} else {
throw ex__35889__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38644 = state_36626;
state_36626 = G__38644;
continue;
} else {
return ret_value__35887__auto__;
}
break;
}
});
cljs$core$async$state_machine__35886__auto__ = function(state_36626){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35886__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35886__auto____1.call(this,state_36626);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35886__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35886__auto____0;
cljs$core$async$state_machine__35886__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35886__auto____1;
return cljs$core$async$state_machine__35886__auto__;
})()
})();
var state__36089__auto__ = (function (){var statearr_36650 = f__36088__auto__();
(statearr_36650[(6)] = c__36087__auto___38619);

return statearr_36650;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36089__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__36087__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36088__auto__ = (function (){var switch__35885__auto__ = (function (state_36686){
var state_val_36687 = (state_36686[(1)]);
if((state_val_36687 === (7))){
var inst_36682 = (state_36686[(2)]);
var state_36686__$1 = state_36686;
var statearr_36701_38645 = state_36686__$1;
(statearr_36701_38645[(2)] = inst_36682);

(statearr_36701_38645[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36687 === (1))){
var inst_36657 = init;
var inst_36659 = inst_36657;
var state_36686__$1 = (function (){var statearr_36702 = state_36686;
(statearr_36702[(7)] = inst_36659);

return statearr_36702;
})();
var statearr_36704_38646 = state_36686__$1;
(statearr_36704_38646[(2)] = null);

(statearr_36704_38646[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36687 === (4))){
var inst_36664 = (state_36686[(8)]);
var inst_36664__$1 = (state_36686[(2)]);
var inst_36665 = (inst_36664__$1 == null);
var state_36686__$1 = (function (){var statearr_36708 = state_36686;
(statearr_36708[(8)] = inst_36664__$1);

return statearr_36708;
})();
if(cljs.core.truth_(inst_36665)){
var statearr_36711_38647 = state_36686__$1;
(statearr_36711_38647[(1)] = (5));

} else {
var statearr_36712_38648 = state_36686__$1;
(statearr_36712_38648[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36687 === (6))){
var inst_36671 = (state_36686[(9)]);
var inst_36664 = (state_36686[(8)]);
var inst_36659 = (state_36686[(7)]);
var inst_36671__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_36659,inst_36664) : f.call(null,inst_36659,inst_36664));
var inst_36672 = cljs.core.reduced_QMARK_(inst_36671__$1);
var state_36686__$1 = (function (){var statearr_36718 = state_36686;
(statearr_36718[(9)] = inst_36671__$1);

return statearr_36718;
})();
if(inst_36672){
var statearr_36719_38649 = state_36686__$1;
(statearr_36719_38649[(1)] = (8));

} else {
var statearr_36720_38650 = state_36686__$1;
(statearr_36720_38650[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36687 === (3))){
var inst_36684 = (state_36686[(2)]);
var state_36686__$1 = state_36686;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36686__$1,inst_36684);
} else {
if((state_val_36687 === (2))){
var state_36686__$1 = state_36686;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36686__$1,(4),ch);
} else {
if((state_val_36687 === (9))){
var inst_36671 = (state_36686[(9)]);
var inst_36659 = inst_36671;
var state_36686__$1 = (function (){var statearr_36722 = state_36686;
(statearr_36722[(7)] = inst_36659);

return statearr_36722;
})();
var statearr_36724_38655 = state_36686__$1;
(statearr_36724_38655[(2)] = null);

(statearr_36724_38655[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36687 === (5))){
var inst_36659 = (state_36686[(7)]);
var state_36686__$1 = state_36686;
var statearr_36735_38656 = state_36686__$1;
(statearr_36735_38656[(2)] = inst_36659);

(statearr_36735_38656[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36687 === (10))){
var inst_36679 = (state_36686[(2)]);
var state_36686__$1 = state_36686;
var statearr_36738_38657 = state_36686__$1;
(statearr_36738_38657[(2)] = inst_36679);

(statearr_36738_38657[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36687 === (8))){
var inst_36671 = (state_36686[(9)]);
var inst_36674 = cljs.core.deref(inst_36671);
var state_36686__$1 = state_36686;
var statearr_36765_38658 = state_36686__$1;
(statearr_36765_38658[(2)] = inst_36674);

(statearr_36765_38658[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__35886__auto__ = null;
var cljs$core$async$reduce_$_state_machine__35886__auto____0 = (function (){
var statearr_36766 = [null,null,null,null,null,null,null,null,null,null];
(statearr_36766[(0)] = cljs$core$async$reduce_$_state_machine__35886__auto__);

(statearr_36766[(1)] = (1));

return statearr_36766;
});
var cljs$core$async$reduce_$_state_machine__35886__auto____1 = (function (state_36686){
while(true){
var ret_value__35887__auto__ = (function (){try{while(true){
var result__35888__auto__ = switch__35885__auto__(state_36686);
if(cljs.core.keyword_identical_QMARK_(result__35888__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35888__auto__;
}
break;
}
}catch (e36767){var ex__35889__auto__ = e36767;
var statearr_36768_38660 = state_36686;
(statearr_36768_38660[(2)] = ex__35889__auto__);


if(cljs.core.seq((state_36686[(4)]))){
var statearr_36769_38661 = state_36686;
(statearr_36769_38661[(1)] = cljs.core.first((state_36686[(4)])));

} else {
throw ex__35889__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38662 = state_36686;
state_36686 = G__38662;
continue;
} else {
return ret_value__35887__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__35886__auto__ = function(state_36686){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__35886__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__35886__auto____1.call(this,state_36686);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__35886__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__35886__auto____0;
cljs$core$async$reduce_$_state_machine__35886__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__35886__auto____1;
return cljs$core$async$reduce_$_state_machine__35886__auto__;
})()
})();
var state__36089__auto__ = (function (){var statearr_36771 = f__36088__auto__();
(statearr_36771[(6)] = c__36087__auto__);

return statearr_36771;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36089__auto__);
}));

return c__36087__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__36087__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36088__auto__ = (function (){var switch__35885__auto__ = (function (state_36777){
var state_val_36778 = (state_36777[(1)]);
if((state_val_36778 === (1))){
var inst_36772 = cljs.core.async.reduce(f__$1,init,ch);
var state_36777__$1 = state_36777;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36777__$1,(2),inst_36772);
} else {
if((state_val_36778 === (2))){
var inst_36774 = (state_36777[(2)]);
var inst_36775 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_36774) : f__$1.call(null,inst_36774));
var state_36777__$1 = state_36777;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36777__$1,inst_36775);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__35886__auto__ = null;
var cljs$core$async$transduce_$_state_machine__35886__auto____0 = (function (){
var statearr_36780 = [null,null,null,null,null,null,null];
(statearr_36780[(0)] = cljs$core$async$transduce_$_state_machine__35886__auto__);

(statearr_36780[(1)] = (1));

return statearr_36780;
});
var cljs$core$async$transduce_$_state_machine__35886__auto____1 = (function (state_36777){
while(true){
var ret_value__35887__auto__ = (function (){try{while(true){
var result__35888__auto__ = switch__35885__auto__(state_36777);
if(cljs.core.keyword_identical_QMARK_(result__35888__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35888__auto__;
}
break;
}
}catch (e36781){var ex__35889__auto__ = e36781;
var statearr_36782_38674 = state_36777;
(statearr_36782_38674[(2)] = ex__35889__auto__);


if(cljs.core.seq((state_36777[(4)]))){
var statearr_36783_38675 = state_36777;
(statearr_36783_38675[(1)] = cljs.core.first((state_36777[(4)])));

} else {
throw ex__35889__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38676 = state_36777;
state_36777 = G__38676;
continue;
} else {
return ret_value__35887__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__35886__auto__ = function(state_36777){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__35886__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__35886__auto____1.call(this,state_36777);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__35886__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__35886__auto____0;
cljs$core$async$transduce_$_state_machine__35886__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__35886__auto____1;
return cljs$core$async$transduce_$_state_machine__35886__auto__;
})()
})();
var state__36089__auto__ = (function (){var statearr_36784 = f__36088__auto__();
(statearr_36784[(6)] = c__36087__auto__);

return statearr_36784;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36089__auto__);
}));

return c__36087__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__36787 = arguments.length;
switch (G__36787) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__36087__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36088__auto__ = (function (){var switch__35885__auto__ = (function (state_36833){
var state_val_36834 = (state_36833[(1)]);
if((state_val_36834 === (7))){
var inst_36815 = (state_36833[(2)]);
var state_36833__$1 = state_36833;
var statearr_36835_38682 = state_36833__$1;
(statearr_36835_38682[(2)] = inst_36815);

(statearr_36835_38682[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36834 === (1))){
var inst_36808 = cljs.core.seq(coll);
var inst_36809 = inst_36808;
var state_36833__$1 = (function (){var statearr_36836 = state_36833;
(statearr_36836[(7)] = inst_36809);

return statearr_36836;
})();
var statearr_36837_38683 = state_36833__$1;
(statearr_36837_38683[(2)] = null);

(statearr_36837_38683[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36834 === (4))){
var inst_36809 = (state_36833[(7)]);
var inst_36813 = cljs.core.first(inst_36809);
var state_36833__$1 = state_36833;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36833__$1,(7),ch,inst_36813);
} else {
if((state_val_36834 === (13))){
var inst_36827 = (state_36833[(2)]);
var state_36833__$1 = state_36833;
var statearr_36839_38684 = state_36833__$1;
(statearr_36839_38684[(2)] = inst_36827);

(statearr_36839_38684[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36834 === (6))){
var inst_36818 = (state_36833[(2)]);
var state_36833__$1 = state_36833;
if(cljs.core.truth_(inst_36818)){
var statearr_36841_38689 = state_36833__$1;
(statearr_36841_38689[(1)] = (8));

} else {
var statearr_36842_38696 = state_36833__$1;
(statearr_36842_38696[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36834 === (3))){
var inst_36831 = (state_36833[(2)]);
var state_36833__$1 = state_36833;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36833__$1,inst_36831);
} else {
if((state_val_36834 === (12))){
var state_36833__$1 = state_36833;
var statearr_36843_38700 = state_36833__$1;
(statearr_36843_38700[(2)] = null);

(statearr_36843_38700[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36834 === (2))){
var inst_36809 = (state_36833[(7)]);
var state_36833__$1 = state_36833;
if(cljs.core.truth_(inst_36809)){
var statearr_36845_38701 = state_36833__$1;
(statearr_36845_38701[(1)] = (4));

} else {
var statearr_36846_38702 = state_36833__$1;
(statearr_36846_38702[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36834 === (11))){
var inst_36824 = cljs.core.async.close_BANG_(ch);
var state_36833__$1 = state_36833;
var statearr_36848_38703 = state_36833__$1;
(statearr_36848_38703[(2)] = inst_36824);

(statearr_36848_38703[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36834 === (9))){
var state_36833__$1 = state_36833;
if(cljs.core.truth_(close_QMARK_)){
var statearr_36849_38704 = state_36833__$1;
(statearr_36849_38704[(1)] = (11));

} else {
var statearr_36850_38705 = state_36833__$1;
(statearr_36850_38705[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36834 === (5))){
var inst_36809 = (state_36833[(7)]);
var state_36833__$1 = state_36833;
var statearr_36851_38715 = state_36833__$1;
(statearr_36851_38715[(2)] = inst_36809);

(statearr_36851_38715[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36834 === (10))){
var inst_36829 = (state_36833[(2)]);
var state_36833__$1 = state_36833;
var statearr_36852_38716 = state_36833__$1;
(statearr_36852_38716[(2)] = inst_36829);

(statearr_36852_38716[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36834 === (8))){
var inst_36809 = (state_36833[(7)]);
var inst_36820 = cljs.core.next(inst_36809);
var inst_36809__$1 = inst_36820;
var state_36833__$1 = (function (){var statearr_36853 = state_36833;
(statearr_36853[(7)] = inst_36809__$1);

return statearr_36853;
})();
var statearr_36854_38720 = state_36833__$1;
(statearr_36854_38720[(2)] = null);

(statearr_36854_38720[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__35886__auto__ = null;
var cljs$core$async$state_machine__35886__auto____0 = (function (){
var statearr_36856 = [null,null,null,null,null,null,null,null];
(statearr_36856[(0)] = cljs$core$async$state_machine__35886__auto__);

(statearr_36856[(1)] = (1));

return statearr_36856;
});
var cljs$core$async$state_machine__35886__auto____1 = (function (state_36833){
while(true){
var ret_value__35887__auto__ = (function (){try{while(true){
var result__35888__auto__ = switch__35885__auto__(state_36833);
if(cljs.core.keyword_identical_QMARK_(result__35888__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35888__auto__;
}
break;
}
}catch (e36857){var ex__35889__auto__ = e36857;
var statearr_36858_38721 = state_36833;
(statearr_36858_38721[(2)] = ex__35889__auto__);


if(cljs.core.seq((state_36833[(4)]))){
var statearr_36859_38722 = state_36833;
(statearr_36859_38722[(1)] = cljs.core.first((state_36833[(4)])));

} else {
throw ex__35889__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38727 = state_36833;
state_36833 = G__38727;
continue;
} else {
return ret_value__35887__auto__;
}
break;
}
});
cljs$core$async$state_machine__35886__auto__ = function(state_36833){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35886__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35886__auto____1.call(this,state_36833);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35886__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35886__auto____0;
cljs$core$async$state_machine__35886__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35886__auto____1;
return cljs$core$async$state_machine__35886__auto__;
})()
})();
var state__36089__auto__ = (function (){var statearr_36860 = f__36088__auto__();
(statearr_36860[(6)] = c__36087__auto__);

return statearr_36860;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36089__auto__);
}));

return c__36087__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__36863 = arguments.length;
switch (G__36863) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_38737 = (function (_){
var x__4509__auto__ = (((_ == null))?null:_);
var m__4510__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4510__auto__.call(null,_));
} else {
var m__4508__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4508__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_38737(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_38738 = (function (m,ch,close_QMARK_){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4510__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4508__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4508__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_38738(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_38742 = (function (m,ch){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4510__auto__.call(null,m,ch));
} else {
var m__4508__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4508__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_38742(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_38751 = (function (m){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4510__auto__.call(null,m));
} else {
var m__4508__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4508__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_38751(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36869 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36869 = (function (ch,cs,meta36870){
this.ch = ch;
this.cs = cs;
this.meta36870 = meta36870;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36869.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36871,meta36870__$1){
var self__ = this;
var _36871__$1 = this;
return (new cljs.core.async.t_cljs$core$async36869(self__.ch,self__.cs,meta36870__$1));
}));

(cljs.core.async.t_cljs$core$async36869.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36871){
var self__ = this;
var _36871__$1 = this;
return self__.meta36870;
}));

(cljs.core.async.t_cljs$core$async36869.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36869.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async36869.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36869.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async36869.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async36869.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async36869.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta36870","meta36870",1620139247,null)], null);
}));

(cljs.core.async.t_cljs$core$async36869.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36869.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36869");

(cljs.core.async.t_cljs$core$async36869.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async36869");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36869.
 */
cljs.core.async.__GT_t_cljs$core$async36869 = (function cljs$core$async$mult_$___GT_t_cljs$core$async36869(ch__$1,cs__$1,meta36870){
return (new cljs.core.async.t_cljs$core$async36869(ch__$1,cs__$1,meta36870));
});

}

return (new cljs.core.async.t_cljs$core$async36869(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__36087__auto___38762 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36088__auto__ = (function (){var switch__35885__auto__ = (function (state_37009){
var state_val_37010 = (state_37009[(1)]);
if((state_val_37010 === (7))){
var inst_37004 = (state_37009[(2)]);
var state_37009__$1 = state_37009;
var statearr_37012_38764 = state_37009__$1;
(statearr_37012_38764[(2)] = inst_37004);

(statearr_37012_38764[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37010 === (20))){
var inst_36908 = (state_37009[(7)]);
var inst_36920 = cljs.core.first(inst_36908);
var inst_36921 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36920,(0),null);
var inst_36922 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36920,(1),null);
var state_37009__$1 = (function (){var statearr_37013 = state_37009;
(statearr_37013[(8)] = inst_36921);

return statearr_37013;
})();
if(cljs.core.truth_(inst_36922)){
var statearr_37014_38765 = state_37009__$1;
(statearr_37014_38765[(1)] = (22));

} else {
var statearr_37015_38766 = state_37009__$1;
(statearr_37015_38766[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37010 === (27))){
var inst_36952 = (state_37009[(9)]);
var inst_36876 = (state_37009[(10)]);
var inst_36957 = (state_37009[(11)]);
var inst_36950 = (state_37009[(12)]);
var inst_36957__$1 = cljs.core._nth(inst_36950,inst_36952);
var inst_36959 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_36957__$1,inst_36876,done);
var state_37009__$1 = (function (){var statearr_37016 = state_37009;
(statearr_37016[(11)] = inst_36957__$1);

return statearr_37016;
})();
if(cljs.core.truth_(inst_36959)){
var statearr_37017_38772 = state_37009__$1;
(statearr_37017_38772[(1)] = (30));

} else {
var statearr_37018_38773 = state_37009__$1;
(statearr_37018_38773[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37010 === (1))){
var state_37009__$1 = state_37009;
var statearr_37019_38774 = state_37009__$1;
(statearr_37019_38774[(2)] = null);

(statearr_37019_38774[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37010 === (24))){
var inst_36908 = (state_37009[(7)]);
var inst_36927 = (state_37009[(2)]);
var inst_36928 = cljs.core.next(inst_36908);
var inst_36885 = inst_36928;
var inst_36886 = null;
var inst_36887 = (0);
var inst_36888 = (0);
var state_37009__$1 = (function (){var statearr_37020 = state_37009;
(statearr_37020[(13)] = inst_36886);

(statearr_37020[(14)] = inst_36885);

(statearr_37020[(15)] = inst_36888);

(statearr_37020[(16)] = inst_36927);

(statearr_37020[(17)] = inst_36887);

return statearr_37020;
})();
var statearr_37021_38775 = state_37009__$1;
(statearr_37021_38775[(2)] = null);

(statearr_37021_38775[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37010 === (39))){
var state_37009__$1 = state_37009;
var statearr_37026_38776 = state_37009__$1;
(statearr_37026_38776[(2)] = null);

(statearr_37026_38776[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37010 === (4))){
var inst_36876 = (state_37009[(10)]);
var inst_36876__$1 = (state_37009[(2)]);
var inst_36877 = (inst_36876__$1 == null);
var state_37009__$1 = (function (){var statearr_37027 = state_37009;
(statearr_37027[(10)] = inst_36876__$1);

return statearr_37027;
})();
if(cljs.core.truth_(inst_36877)){
var statearr_37028_38777 = state_37009__$1;
(statearr_37028_38777[(1)] = (5));

} else {
var statearr_37029_38778 = state_37009__$1;
(statearr_37029_38778[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37010 === (15))){
var inst_36886 = (state_37009[(13)]);
var inst_36885 = (state_37009[(14)]);
var inst_36888 = (state_37009[(15)]);
var inst_36887 = (state_37009[(17)]);
var inst_36903 = (state_37009[(2)]);
var inst_36904 = (inst_36888 + (1));
var tmp37023 = inst_36886;
var tmp37024 = inst_36885;
var tmp37025 = inst_36887;
var inst_36885__$1 = tmp37024;
var inst_36886__$1 = tmp37023;
var inst_36887__$1 = tmp37025;
var inst_36888__$1 = inst_36904;
var state_37009__$1 = (function (){var statearr_37030 = state_37009;
(statearr_37030[(13)] = inst_36886__$1);

(statearr_37030[(14)] = inst_36885__$1);

(statearr_37030[(15)] = inst_36888__$1);

(statearr_37030[(18)] = inst_36903);

(statearr_37030[(17)] = inst_36887__$1);

return statearr_37030;
})();
var statearr_37032_38779 = state_37009__$1;
(statearr_37032_38779[(2)] = null);

(statearr_37032_38779[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37010 === (21))){
var inst_36931 = (state_37009[(2)]);
var state_37009__$1 = state_37009;
var statearr_37036_38780 = state_37009__$1;
(statearr_37036_38780[(2)] = inst_36931);

(statearr_37036_38780[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37010 === (31))){
var inst_36957 = (state_37009[(11)]);
var inst_36962 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_36957);
var state_37009__$1 = state_37009;
var statearr_37037_38781 = state_37009__$1;
(statearr_37037_38781[(2)] = inst_36962);

(statearr_37037_38781[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37010 === (32))){
var inst_36952 = (state_37009[(9)]);
var inst_36951 = (state_37009[(19)]);
var inst_36950 = (state_37009[(12)]);
var inst_36949 = (state_37009[(20)]);
var inst_36964 = (state_37009[(2)]);
var inst_36965 = (inst_36952 + (1));
var tmp37033 = inst_36951;
var tmp37034 = inst_36950;
var tmp37035 = inst_36949;
var inst_36949__$1 = tmp37035;
var inst_36950__$1 = tmp37034;
var inst_36951__$1 = tmp37033;
var inst_36952__$1 = inst_36965;
var state_37009__$1 = (function (){var statearr_37038 = state_37009;
(statearr_37038[(9)] = inst_36952__$1);

(statearr_37038[(19)] = inst_36951__$1);

(statearr_37038[(21)] = inst_36964);

(statearr_37038[(12)] = inst_36950__$1);

(statearr_37038[(20)] = inst_36949__$1);

return statearr_37038;
})();
var statearr_37039_38786 = state_37009__$1;
(statearr_37039_38786[(2)] = null);

(statearr_37039_38786[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37010 === (40))){
var inst_36977 = (state_37009[(22)]);
var inst_36981 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_36977);
var state_37009__$1 = state_37009;
var statearr_37041_38787 = state_37009__$1;
(statearr_37041_38787[(2)] = inst_36981);

(statearr_37041_38787[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37010 === (33))){
var inst_36968 = (state_37009[(23)]);
var inst_36970 = cljs.core.chunked_seq_QMARK_(inst_36968);
var state_37009__$1 = state_37009;
if(inst_36970){
var statearr_37042_38788 = state_37009__$1;
(statearr_37042_38788[(1)] = (36));

} else {
var statearr_37043_38789 = state_37009__$1;
(statearr_37043_38789[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37010 === (13))){
var inst_36897 = (state_37009[(24)]);
var inst_36900 = cljs.core.async.close_BANG_(inst_36897);
var state_37009__$1 = state_37009;
var statearr_37044_38790 = state_37009__$1;
(statearr_37044_38790[(2)] = inst_36900);

(statearr_37044_38790[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37010 === (22))){
var inst_36921 = (state_37009[(8)]);
var inst_36924 = cljs.core.async.close_BANG_(inst_36921);
var state_37009__$1 = state_37009;
var statearr_37045_38791 = state_37009__$1;
(statearr_37045_38791[(2)] = inst_36924);

(statearr_37045_38791[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37010 === (36))){
var inst_36968 = (state_37009[(23)]);
var inst_36972 = cljs.core.chunk_first(inst_36968);
var inst_36973 = cljs.core.chunk_rest(inst_36968);
var inst_36974 = cljs.core.count(inst_36972);
var inst_36949 = inst_36973;
var inst_36950 = inst_36972;
var inst_36951 = inst_36974;
var inst_36952 = (0);
var state_37009__$1 = (function (){var statearr_37047 = state_37009;
(statearr_37047[(9)] = inst_36952);

(statearr_37047[(19)] = inst_36951);

(statearr_37047[(12)] = inst_36950);

(statearr_37047[(20)] = inst_36949);

return statearr_37047;
})();
var statearr_37048_38798 = state_37009__$1;
(statearr_37048_38798[(2)] = null);

(statearr_37048_38798[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37010 === (41))){
var inst_36968 = (state_37009[(23)]);
var inst_36983 = (state_37009[(2)]);
var inst_36984 = cljs.core.next(inst_36968);
var inst_36949 = inst_36984;
var inst_36950 = null;
var inst_36951 = (0);
var inst_36952 = (0);
var state_37009__$1 = (function (){var statearr_37049 = state_37009;
(statearr_37049[(9)] = inst_36952);

(statearr_37049[(19)] = inst_36951);

(statearr_37049[(12)] = inst_36950);

(statearr_37049[(20)] = inst_36949);

(statearr_37049[(25)] = inst_36983);

return statearr_37049;
})();
var statearr_37050_38808 = state_37009__$1;
(statearr_37050_38808[(2)] = null);

(statearr_37050_38808[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37010 === (43))){
var state_37009__$1 = state_37009;
var statearr_37051_38809 = state_37009__$1;
(statearr_37051_38809[(2)] = null);

(statearr_37051_38809[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37010 === (29))){
var inst_36992 = (state_37009[(2)]);
var state_37009__$1 = state_37009;
var statearr_37052_38811 = state_37009__$1;
(statearr_37052_38811[(2)] = inst_36992);

(statearr_37052_38811[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37010 === (44))){
var inst_37001 = (state_37009[(2)]);
var state_37009__$1 = (function (){var statearr_37054 = state_37009;
(statearr_37054[(26)] = inst_37001);

return statearr_37054;
})();
var statearr_37055_38812 = state_37009__$1;
(statearr_37055_38812[(2)] = null);

(statearr_37055_38812[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37010 === (6))){
var inst_36941 = (state_37009[(27)]);
var inst_36940 = cljs.core.deref(cs);
var inst_36941__$1 = cljs.core.keys(inst_36940);
var inst_36942 = cljs.core.count(inst_36941__$1);
var inst_36943 = cljs.core.reset_BANG_(dctr,inst_36942);
var inst_36948 = cljs.core.seq(inst_36941__$1);
var inst_36949 = inst_36948;
var inst_36950 = null;
var inst_36951 = (0);
var inst_36952 = (0);
var state_37009__$1 = (function (){var statearr_37056 = state_37009;
(statearr_37056[(28)] = inst_36943);

(statearr_37056[(9)] = inst_36952);

(statearr_37056[(27)] = inst_36941__$1);

(statearr_37056[(19)] = inst_36951);

(statearr_37056[(12)] = inst_36950);

(statearr_37056[(20)] = inst_36949);

return statearr_37056;
})();
var statearr_37057_38815 = state_37009__$1;
(statearr_37057_38815[(2)] = null);

(statearr_37057_38815[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37010 === (28))){
var inst_36968 = (state_37009[(23)]);
var inst_36949 = (state_37009[(20)]);
var inst_36968__$1 = cljs.core.seq(inst_36949);
var state_37009__$1 = (function (){var statearr_37058 = state_37009;
(statearr_37058[(23)] = inst_36968__$1);

return statearr_37058;
})();
if(inst_36968__$1){
var statearr_37059_38816 = state_37009__$1;
(statearr_37059_38816[(1)] = (33));

} else {
var statearr_37060_38817 = state_37009__$1;
(statearr_37060_38817[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37010 === (25))){
var inst_36952 = (state_37009[(9)]);
var inst_36951 = (state_37009[(19)]);
var inst_36954 = (inst_36952 < inst_36951);
var inst_36955 = inst_36954;
var state_37009__$1 = state_37009;
if(cljs.core.truth_(inst_36955)){
var statearr_37062_38818 = state_37009__$1;
(statearr_37062_38818[(1)] = (27));

} else {
var statearr_37063_38819 = state_37009__$1;
(statearr_37063_38819[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37010 === (34))){
var state_37009__$1 = state_37009;
var statearr_37064_38820 = state_37009__$1;
(statearr_37064_38820[(2)] = null);

(statearr_37064_38820[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37010 === (17))){
var state_37009__$1 = state_37009;
var statearr_37065_38821 = state_37009__$1;
(statearr_37065_38821[(2)] = null);

(statearr_37065_38821[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37010 === (3))){
var inst_37006 = (state_37009[(2)]);
var state_37009__$1 = state_37009;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37009__$1,inst_37006);
} else {
if((state_val_37010 === (12))){
var inst_36936 = (state_37009[(2)]);
var state_37009__$1 = state_37009;
var statearr_37066_38825 = state_37009__$1;
(statearr_37066_38825[(2)] = inst_36936);

(statearr_37066_38825[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37010 === (2))){
var state_37009__$1 = state_37009;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37009__$1,(4),ch);
} else {
if((state_val_37010 === (23))){
var state_37009__$1 = state_37009;
var statearr_37067_38826 = state_37009__$1;
(statearr_37067_38826[(2)] = null);

(statearr_37067_38826[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37010 === (35))){
var inst_36990 = (state_37009[(2)]);
var state_37009__$1 = state_37009;
var statearr_37068_38827 = state_37009__$1;
(statearr_37068_38827[(2)] = inst_36990);

(statearr_37068_38827[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37010 === (19))){
var inst_36908 = (state_37009[(7)]);
var inst_36912 = cljs.core.chunk_first(inst_36908);
var inst_36913 = cljs.core.chunk_rest(inst_36908);
var inst_36914 = cljs.core.count(inst_36912);
var inst_36885 = inst_36913;
var inst_36886 = inst_36912;
var inst_36887 = inst_36914;
var inst_36888 = (0);
var state_37009__$1 = (function (){var statearr_37069 = state_37009;
(statearr_37069[(13)] = inst_36886);

(statearr_37069[(14)] = inst_36885);

(statearr_37069[(15)] = inst_36888);

(statearr_37069[(17)] = inst_36887);

return statearr_37069;
})();
var statearr_37070_38832 = state_37009__$1;
(statearr_37070_38832[(2)] = null);

(statearr_37070_38832[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37010 === (11))){
var inst_36885 = (state_37009[(14)]);
var inst_36908 = (state_37009[(7)]);
var inst_36908__$1 = cljs.core.seq(inst_36885);
var state_37009__$1 = (function (){var statearr_37072 = state_37009;
(statearr_37072[(7)] = inst_36908__$1);

return statearr_37072;
})();
if(inst_36908__$1){
var statearr_37073_38833 = state_37009__$1;
(statearr_37073_38833[(1)] = (16));

} else {
var statearr_37074_38834 = state_37009__$1;
(statearr_37074_38834[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37010 === (9))){
var inst_36938 = (state_37009[(2)]);
var state_37009__$1 = state_37009;
var statearr_37075_38835 = state_37009__$1;
(statearr_37075_38835[(2)] = inst_36938);

(statearr_37075_38835[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37010 === (5))){
var inst_36883 = cljs.core.deref(cs);
var inst_36884 = cljs.core.seq(inst_36883);
var inst_36885 = inst_36884;
var inst_36886 = null;
var inst_36887 = (0);
var inst_36888 = (0);
var state_37009__$1 = (function (){var statearr_37076 = state_37009;
(statearr_37076[(13)] = inst_36886);

(statearr_37076[(14)] = inst_36885);

(statearr_37076[(15)] = inst_36888);

(statearr_37076[(17)] = inst_36887);

return statearr_37076;
})();
var statearr_37077_38840 = state_37009__$1;
(statearr_37077_38840[(2)] = null);

(statearr_37077_38840[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37010 === (14))){
var state_37009__$1 = state_37009;
var statearr_37078_38841 = state_37009__$1;
(statearr_37078_38841[(2)] = null);

(statearr_37078_38841[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37010 === (45))){
var inst_36998 = (state_37009[(2)]);
var state_37009__$1 = state_37009;
var statearr_37079_38842 = state_37009__$1;
(statearr_37079_38842[(2)] = inst_36998);

(statearr_37079_38842[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37010 === (26))){
var inst_36941 = (state_37009[(27)]);
var inst_36994 = (state_37009[(2)]);
var inst_36995 = cljs.core.seq(inst_36941);
var state_37009__$1 = (function (){var statearr_37080 = state_37009;
(statearr_37080[(29)] = inst_36994);

return statearr_37080;
})();
if(inst_36995){
var statearr_37081_38846 = state_37009__$1;
(statearr_37081_38846[(1)] = (42));

} else {
var statearr_37082_38847 = state_37009__$1;
(statearr_37082_38847[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37010 === (16))){
var inst_36908 = (state_37009[(7)]);
var inst_36910 = cljs.core.chunked_seq_QMARK_(inst_36908);
var state_37009__$1 = state_37009;
if(inst_36910){
var statearr_37084_38852 = state_37009__$1;
(statearr_37084_38852[(1)] = (19));

} else {
var statearr_37085_38853 = state_37009__$1;
(statearr_37085_38853[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37010 === (38))){
var inst_36987 = (state_37009[(2)]);
var state_37009__$1 = state_37009;
var statearr_37086_38854 = state_37009__$1;
(statearr_37086_38854[(2)] = inst_36987);

(statearr_37086_38854[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37010 === (30))){
var state_37009__$1 = state_37009;
var statearr_37087_38861 = state_37009__$1;
(statearr_37087_38861[(2)] = null);

(statearr_37087_38861[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37010 === (10))){
var inst_36886 = (state_37009[(13)]);
var inst_36888 = (state_37009[(15)]);
var inst_36896 = cljs.core._nth(inst_36886,inst_36888);
var inst_36897 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36896,(0),null);
var inst_36898 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36896,(1),null);
var state_37009__$1 = (function (){var statearr_37088 = state_37009;
(statearr_37088[(24)] = inst_36897);

return statearr_37088;
})();
if(cljs.core.truth_(inst_36898)){
var statearr_37089_38862 = state_37009__$1;
(statearr_37089_38862[(1)] = (13));

} else {
var statearr_37090_38863 = state_37009__$1;
(statearr_37090_38863[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37010 === (18))){
var inst_36934 = (state_37009[(2)]);
var state_37009__$1 = state_37009;
var statearr_37093_38864 = state_37009__$1;
(statearr_37093_38864[(2)] = inst_36934);

(statearr_37093_38864[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37010 === (42))){
var state_37009__$1 = state_37009;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37009__$1,(45),dchan);
} else {
if((state_val_37010 === (37))){
var inst_36977 = (state_37009[(22)]);
var inst_36876 = (state_37009[(10)]);
var inst_36968 = (state_37009[(23)]);
var inst_36977__$1 = cljs.core.first(inst_36968);
var inst_36978 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_36977__$1,inst_36876,done);
var state_37009__$1 = (function (){var statearr_37094 = state_37009;
(statearr_37094[(22)] = inst_36977__$1);

return statearr_37094;
})();
if(cljs.core.truth_(inst_36978)){
var statearr_37095_38865 = state_37009__$1;
(statearr_37095_38865[(1)] = (39));

} else {
var statearr_37096_38866 = state_37009__$1;
(statearr_37096_38866[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37010 === (8))){
var inst_36888 = (state_37009[(15)]);
var inst_36887 = (state_37009[(17)]);
var inst_36890 = (inst_36888 < inst_36887);
var inst_36891 = inst_36890;
var state_37009__$1 = state_37009;
if(cljs.core.truth_(inst_36891)){
var statearr_37097_38867 = state_37009__$1;
(statearr_37097_38867[(1)] = (10));

} else {
var statearr_37098_38868 = state_37009__$1;
(statearr_37098_38868[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__35886__auto__ = null;
var cljs$core$async$mult_$_state_machine__35886__auto____0 = (function (){
var statearr_37099 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37099[(0)] = cljs$core$async$mult_$_state_machine__35886__auto__);

(statearr_37099[(1)] = (1));

return statearr_37099;
});
var cljs$core$async$mult_$_state_machine__35886__auto____1 = (function (state_37009){
while(true){
var ret_value__35887__auto__ = (function (){try{while(true){
var result__35888__auto__ = switch__35885__auto__(state_37009);
if(cljs.core.keyword_identical_QMARK_(result__35888__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35888__auto__;
}
break;
}
}catch (e37100){var ex__35889__auto__ = e37100;
var statearr_37101_38869 = state_37009;
(statearr_37101_38869[(2)] = ex__35889__auto__);


if(cljs.core.seq((state_37009[(4)]))){
var statearr_37102_38870 = state_37009;
(statearr_37102_38870[(1)] = cljs.core.first((state_37009[(4)])));

} else {
throw ex__35889__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38871 = state_37009;
state_37009 = G__38871;
continue;
} else {
return ret_value__35887__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__35886__auto__ = function(state_37009){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__35886__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__35886__auto____1.call(this,state_37009);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__35886__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__35886__auto____0;
cljs$core$async$mult_$_state_machine__35886__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__35886__auto____1;
return cljs$core$async$mult_$_state_machine__35886__auto__;
})()
})();
var state__36089__auto__ = (function (){var statearr_37105 = f__36088__auto__();
(statearr_37105[(6)] = c__36087__auto___38762);

return statearr_37105;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36089__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__37107 = arguments.length;
switch (G__37107) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_38879 = (function (m,ch){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4510__auto__.call(null,m,ch));
} else {
var m__4508__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4508__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_38879(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_38881 = (function (m,ch){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4510__auto__.call(null,m,ch));
} else {
var m__4508__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4508__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_38881(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_38882 = (function (m){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4510__auto__.call(null,m));
} else {
var m__4508__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4508__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_38882(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_38886 = (function (m,state_map){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4510__auto__.call(null,m,state_map));
} else {
var m__4508__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4508__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_38886(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_38893 = (function (m,mode){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4510__auto__.call(null,m,mode));
} else {
var m__4508__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4508__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_38893(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___38894 = arguments.length;
var i__4819__auto___38895 = (0);
while(true){
if((i__4819__auto___38895 < len__4818__auto___38894)){
args__4824__auto__.push((arguments[i__4819__auto___38895]));

var G__38899 = (i__4819__auto___38895 + (1));
i__4819__auto___38895 = G__38899;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((3) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4825__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__37117){
var map__37120 = p__37117;
var map__37120__$1 = cljs.core.__destructure_map(map__37120);
var opts = map__37120__$1;
var statearr_37122_38900 = state;
(statearr_37122_38900[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_37126_38901 = state;
(statearr_37126_38901[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_37127_38902 = state;
(statearr_37127_38902[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq37110){
var G__37111 = cljs.core.first(seq37110);
var seq37110__$1 = cljs.core.next(seq37110);
var G__37112 = cljs.core.first(seq37110__$1);
var seq37110__$2 = cljs.core.next(seq37110__$1);
var G__37113 = cljs.core.first(seq37110__$2);
var seq37110__$3 = cljs.core.next(seq37110__$2);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37111,G__37112,G__37113,seq37110__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37141 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37141 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta37142){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta37142 = meta37142;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37141.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37143,meta37142__$1){
var self__ = this;
var _37143__$1 = this;
return (new cljs.core.async.t_cljs$core$async37141(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta37142__$1));
}));

(cljs.core.async.t_cljs$core$async37141.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37143){
var self__ = this;
var _37143__$1 = this;
return self__.meta37142;
}));

(cljs.core.async.t_cljs$core$async37141.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37141.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async37141.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37141.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async37141.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async37141.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async37141.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async37141.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async37141.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta37142","meta37142",1897424930,null)], null);
}));

(cljs.core.async.t_cljs$core$async37141.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37141.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37141");

(cljs.core.async.t_cljs$core$async37141.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async37141");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37141.
 */
cljs.core.async.__GT_t_cljs$core$async37141 = (function cljs$core$async$mix_$___GT_t_cljs$core$async37141(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta37142){
return (new cljs.core.async.t_cljs$core$async37141(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta37142));
});

}

return (new cljs.core.async.t_cljs$core$async37141(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__36087__auto___38914 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36088__auto__ = (function (){var switch__35885__auto__ = (function (state_37249){
var state_val_37250 = (state_37249[(1)]);
if((state_val_37250 === (7))){
var inst_37202 = (state_37249[(2)]);
var state_37249__$1 = state_37249;
if(cljs.core.truth_(inst_37202)){
var statearr_37256_38915 = state_37249__$1;
(statearr_37256_38915[(1)] = (8));

} else {
var statearr_37257_38916 = state_37249__$1;
(statearr_37257_38916[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37250 === (20))){
var inst_37195 = (state_37249[(7)]);
var state_37249__$1 = state_37249;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37249__$1,(23),out,inst_37195);
} else {
if((state_val_37250 === (1))){
var inst_37174 = calc_state();
var inst_37176 = cljs.core.__destructure_map(inst_37174);
var inst_37177 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37176,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_37178 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37176,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_37179 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37176,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_37180 = inst_37174;
var state_37249__$1 = (function (){var statearr_37262 = state_37249;
(statearr_37262[(8)] = inst_37180);

(statearr_37262[(9)] = inst_37177);

(statearr_37262[(10)] = inst_37179);

(statearr_37262[(11)] = inst_37178);

return statearr_37262;
})();
var statearr_37264_38921 = state_37249__$1;
(statearr_37264_38921[(2)] = null);

(statearr_37264_38921[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37250 === (24))){
var inst_37183 = (state_37249[(12)]);
var inst_37180 = inst_37183;
var state_37249__$1 = (function (){var statearr_37265 = state_37249;
(statearr_37265[(8)] = inst_37180);

return statearr_37265;
})();
var statearr_37267_38922 = state_37249__$1;
(statearr_37267_38922[(2)] = null);

(statearr_37267_38922[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37250 === (4))){
var inst_37195 = (state_37249[(7)]);
var inst_37197 = (state_37249[(13)]);
var inst_37193 = (state_37249[(2)]);
var inst_37195__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37193,(0),null);
var inst_37196 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37193,(1),null);
var inst_37197__$1 = (inst_37195__$1 == null);
var state_37249__$1 = (function (){var statearr_37271 = state_37249;
(statearr_37271[(14)] = inst_37196);

(statearr_37271[(7)] = inst_37195__$1);

(statearr_37271[(13)] = inst_37197__$1);

return statearr_37271;
})();
if(cljs.core.truth_(inst_37197__$1)){
var statearr_37272_38924 = state_37249__$1;
(statearr_37272_38924[(1)] = (5));

} else {
var statearr_37273_38925 = state_37249__$1;
(statearr_37273_38925[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37250 === (15))){
var inst_37184 = (state_37249[(15)]);
var inst_37220 = (state_37249[(16)]);
var inst_37220__$1 = cljs.core.empty_QMARK_(inst_37184);
var state_37249__$1 = (function (){var statearr_37277 = state_37249;
(statearr_37277[(16)] = inst_37220__$1);

return statearr_37277;
})();
if(inst_37220__$1){
var statearr_37279_38930 = state_37249__$1;
(statearr_37279_38930[(1)] = (17));

} else {
var statearr_37280_38931 = state_37249__$1;
(statearr_37280_38931[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37250 === (21))){
var inst_37183 = (state_37249[(12)]);
var inst_37180 = inst_37183;
var state_37249__$1 = (function (){var statearr_37282 = state_37249;
(statearr_37282[(8)] = inst_37180);

return statearr_37282;
})();
var statearr_37285_38932 = state_37249__$1;
(statearr_37285_38932[(2)] = null);

(statearr_37285_38932[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37250 === (13))){
var inst_37210 = (state_37249[(2)]);
var inst_37211 = calc_state();
var inst_37180 = inst_37211;
var state_37249__$1 = (function (){var statearr_37286 = state_37249;
(statearr_37286[(8)] = inst_37180);

(statearr_37286[(17)] = inst_37210);

return statearr_37286;
})();
var statearr_37288_38933 = state_37249__$1;
(statearr_37288_38933[(2)] = null);

(statearr_37288_38933[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37250 === (22))){
var inst_37241 = (state_37249[(2)]);
var state_37249__$1 = state_37249;
var statearr_37291_38934 = state_37249__$1;
(statearr_37291_38934[(2)] = inst_37241);

(statearr_37291_38934[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37250 === (6))){
var inst_37196 = (state_37249[(14)]);
var inst_37200 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_37196,change);
var state_37249__$1 = state_37249;
var statearr_37293_38935 = state_37249__$1;
(statearr_37293_38935[(2)] = inst_37200);

(statearr_37293_38935[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37250 === (25))){
var state_37249__$1 = state_37249;
var statearr_37295_38936 = state_37249__$1;
(statearr_37295_38936[(2)] = null);

(statearr_37295_38936[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37250 === (17))){
var inst_37196 = (state_37249[(14)]);
var inst_37185 = (state_37249[(18)]);
var inst_37222 = (inst_37185.cljs$core$IFn$_invoke$arity$1 ? inst_37185.cljs$core$IFn$_invoke$arity$1(inst_37196) : inst_37185.call(null,inst_37196));
var inst_37223 = cljs.core.not(inst_37222);
var state_37249__$1 = state_37249;
var statearr_37299_38937 = state_37249__$1;
(statearr_37299_38937[(2)] = inst_37223);

(statearr_37299_38937[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37250 === (3))){
var inst_37245 = (state_37249[(2)]);
var state_37249__$1 = state_37249;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37249__$1,inst_37245);
} else {
if((state_val_37250 === (12))){
var state_37249__$1 = state_37249;
var statearr_37301_38940 = state_37249__$1;
(statearr_37301_38940[(2)] = null);

(statearr_37301_38940[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37250 === (2))){
var inst_37180 = (state_37249[(8)]);
var inst_37183 = (state_37249[(12)]);
var inst_37183__$1 = cljs.core.__destructure_map(inst_37180);
var inst_37184 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37183__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_37185 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37183__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_37186 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37183__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_37249__$1 = (function (){var statearr_37309 = state_37249;
(statearr_37309[(15)] = inst_37184);

(statearr_37309[(12)] = inst_37183__$1);

(statearr_37309[(18)] = inst_37185);

return statearr_37309;
})();
return cljs.core.async.ioc_alts_BANG_(state_37249__$1,(4),inst_37186);
} else {
if((state_val_37250 === (23))){
var inst_37231 = (state_37249[(2)]);
var state_37249__$1 = state_37249;
if(cljs.core.truth_(inst_37231)){
var statearr_37314_38941 = state_37249__$1;
(statearr_37314_38941[(1)] = (24));

} else {
var statearr_37315_38942 = state_37249__$1;
(statearr_37315_38942[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37250 === (19))){
var inst_37226 = (state_37249[(2)]);
var state_37249__$1 = state_37249;
var statearr_37317_38944 = state_37249__$1;
(statearr_37317_38944[(2)] = inst_37226);

(statearr_37317_38944[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37250 === (11))){
var inst_37196 = (state_37249[(14)]);
var inst_37207 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_37196);
var state_37249__$1 = state_37249;
var statearr_37321_38946 = state_37249__$1;
(statearr_37321_38946[(2)] = inst_37207);

(statearr_37321_38946[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37250 === (9))){
var inst_37196 = (state_37249[(14)]);
var inst_37184 = (state_37249[(15)]);
var inst_37216 = (state_37249[(19)]);
var inst_37216__$1 = (inst_37184.cljs$core$IFn$_invoke$arity$1 ? inst_37184.cljs$core$IFn$_invoke$arity$1(inst_37196) : inst_37184.call(null,inst_37196));
var state_37249__$1 = (function (){var statearr_37323 = state_37249;
(statearr_37323[(19)] = inst_37216__$1);

return statearr_37323;
})();
if(cljs.core.truth_(inst_37216__$1)){
var statearr_37324_38947 = state_37249__$1;
(statearr_37324_38947[(1)] = (14));

} else {
var statearr_37327_38948 = state_37249__$1;
(statearr_37327_38948[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37250 === (5))){
var inst_37197 = (state_37249[(13)]);
var state_37249__$1 = state_37249;
var statearr_37329_38949 = state_37249__$1;
(statearr_37329_38949[(2)] = inst_37197);

(statearr_37329_38949[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37250 === (14))){
var inst_37216 = (state_37249[(19)]);
var state_37249__$1 = state_37249;
var statearr_37331_38950 = state_37249__$1;
(statearr_37331_38950[(2)] = inst_37216);

(statearr_37331_38950[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37250 === (26))){
var inst_37237 = (state_37249[(2)]);
var state_37249__$1 = state_37249;
var statearr_37334_38951 = state_37249__$1;
(statearr_37334_38951[(2)] = inst_37237);

(statearr_37334_38951[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37250 === (16))){
var inst_37228 = (state_37249[(2)]);
var state_37249__$1 = state_37249;
if(cljs.core.truth_(inst_37228)){
var statearr_37336_38952 = state_37249__$1;
(statearr_37336_38952[(1)] = (20));

} else {
var statearr_37338_38953 = state_37249__$1;
(statearr_37338_38953[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37250 === (10))){
var inst_37243 = (state_37249[(2)]);
var state_37249__$1 = state_37249;
var statearr_37339_38955 = state_37249__$1;
(statearr_37339_38955[(2)] = inst_37243);

(statearr_37339_38955[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37250 === (18))){
var inst_37220 = (state_37249[(16)]);
var state_37249__$1 = state_37249;
var statearr_37343_38956 = state_37249__$1;
(statearr_37343_38956[(2)] = inst_37220);

(statearr_37343_38956[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37250 === (8))){
var inst_37195 = (state_37249[(7)]);
var inst_37205 = (inst_37195 == null);
var state_37249__$1 = state_37249;
if(cljs.core.truth_(inst_37205)){
var statearr_37345_38957 = state_37249__$1;
(statearr_37345_38957[(1)] = (11));

} else {
var statearr_37347_38958 = state_37249__$1;
(statearr_37347_38958[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__35886__auto__ = null;
var cljs$core$async$mix_$_state_machine__35886__auto____0 = (function (){
var statearr_37352 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37352[(0)] = cljs$core$async$mix_$_state_machine__35886__auto__);

(statearr_37352[(1)] = (1));

return statearr_37352;
});
var cljs$core$async$mix_$_state_machine__35886__auto____1 = (function (state_37249){
while(true){
var ret_value__35887__auto__ = (function (){try{while(true){
var result__35888__auto__ = switch__35885__auto__(state_37249);
if(cljs.core.keyword_identical_QMARK_(result__35888__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35888__auto__;
}
break;
}
}catch (e37353){var ex__35889__auto__ = e37353;
var statearr_37356_38960 = state_37249;
(statearr_37356_38960[(2)] = ex__35889__auto__);


if(cljs.core.seq((state_37249[(4)]))){
var statearr_37358_38961 = state_37249;
(statearr_37358_38961[(1)] = cljs.core.first((state_37249[(4)])));

} else {
throw ex__35889__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38962 = state_37249;
state_37249 = G__38962;
continue;
} else {
return ret_value__35887__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__35886__auto__ = function(state_37249){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__35886__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__35886__auto____1.call(this,state_37249);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__35886__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__35886__auto____0;
cljs$core$async$mix_$_state_machine__35886__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__35886__auto____1;
return cljs$core$async$mix_$_state_machine__35886__auto__;
})()
})();
var state__36089__auto__ = (function (){var statearr_37361 = f__36088__auto__();
(statearr_37361[(6)] = c__36087__auto___38914);

return statearr_37361;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36089__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_38963 = (function (p,v,ch,close_QMARK_){
var x__4509__auto__ = (((p == null))?null:p);
var m__4510__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4510__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4508__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4508__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_38963(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_38964 = (function (p,v,ch){
var x__4509__auto__ = (((p == null))?null:p);
var m__4510__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4510__auto__.call(null,p,v,ch));
} else {
var m__4508__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4508__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_38964(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_38965 = (function() {
var G__38966 = null;
var G__38966__1 = (function (p){
var x__4509__auto__ = (((p == null))?null:p);
var m__4510__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4510__auto__.call(null,p));
} else {
var m__4508__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4508__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__38966__2 = (function (p,v){
var x__4509__auto__ = (((p == null))?null:p);
var m__4510__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4510__auto__.call(null,p,v));
} else {
var m__4508__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4508__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__38966 = function(p,v){
switch(arguments.length){
case 1:
return G__38966__1.call(this,p);
case 2:
return G__38966__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__38966.cljs$core$IFn$_invoke$arity$1 = G__38966__1;
G__38966.cljs$core$IFn$_invoke$arity$2 = G__38966__2;
return G__38966;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__37407 = arguments.length;
switch (G__37407) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_38965(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_38965(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__37423 = arguments.length;
switch (G__37423) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4212__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__37421_SHARP_){
if(cljs.core.truth_((p1__37421_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__37421_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__37421_SHARP_.call(null,topic)))){
return p1__37421_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__37421_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37424 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37424 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta37425){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta37425 = meta37425;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37424.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37426,meta37425__$1){
var self__ = this;
var _37426__$1 = this;
return (new cljs.core.async.t_cljs$core$async37424(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta37425__$1));
}));

(cljs.core.async.t_cljs$core$async37424.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37426){
var self__ = this;
var _37426__$1 = this;
return self__.meta37425;
}));

(cljs.core.async.t_cljs$core$async37424.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37424.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async37424.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37424.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async37424.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5753__auto__)){
var m = temp__5753__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async37424.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async37424.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async37424.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta37425","meta37425",2071069491,null)], null);
}));

(cljs.core.async.t_cljs$core$async37424.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37424.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37424");

(cljs.core.async.t_cljs$core$async37424.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async37424");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37424.
 */
cljs.core.async.__GT_t_cljs$core$async37424 = (function cljs$core$async$__GT_t_cljs$core$async37424(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta37425){
return (new cljs.core.async.t_cljs$core$async37424(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta37425));
});

}

return (new cljs.core.async.t_cljs$core$async37424(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__36087__auto___38972 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36088__auto__ = (function (){var switch__35885__auto__ = (function (state_37527){
var state_val_37528 = (state_37527[(1)]);
if((state_val_37528 === (7))){
var inst_37519 = (state_37527[(2)]);
var state_37527__$1 = state_37527;
var statearr_37533_38973 = state_37527__$1;
(statearr_37533_38973[(2)] = inst_37519);

(statearr_37533_38973[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37528 === (20))){
var state_37527__$1 = state_37527;
var statearr_37534_38974 = state_37527__$1;
(statearr_37534_38974[(2)] = null);

(statearr_37534_38974[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37528 === (1))){
var state_37527__$1 = state_37527;
var statearr_37535_38975 = state_37527__$1;
(statearr_37535_38975[(2)] = null);

(statearr_37535_38975[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37528 === (24))){
var inst_37502 = (state_37527[(7)]);
var inst_37511 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_37502);
var state_37527__$1 = state_37527;
var statearr_37537_38977 = state_37527__$1;
(statearr_37537_38977[(2)] = inst_37511);

(statearr_37537_38977[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37528 === (4))){
var inst_37431 = (state_37527[(8)]);
var inst_37431__$1 = (state_37527[(2)]);
var inst_37432 = (inst_37431__$1 == null);
var state_37527__$1 = (function (){var statearr_37538 = state_37527;
(statearr_37538[(8)] = inst_37431__$1);

return statearr_37538;
})();
if(cljs.core.truth_(inst_37432)){
var statearr_37539_38985 = state_37527__$1;
(statearr_37539_38985[(1)] = (5));

} else {
var statearr_37540_38986 = state_37527__$1;
(statearr_37540_38986[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37528 === (15))){
var inst_37496 = (state_37527[(2)]);
var state_37527__$1 = state_37527;
var statearr_37541_38987 = state_37527__$1;
(statearr_37541_38987[(2)] = inst_37496);

(statearr_37541_38987[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37528 === (21))){
var inst_37516 = (state_37527[(2)]);
var state_37527__$1 = (function (){var statearr_37546 = state_37527;
(statearr_37546[(9)] = inst_37516);

return statearr_37546;
})();
var statearr_37547_38988 = state_37527__$1;
(statearr_37547_38988[(2)] = null);

(statearr_37547_38988[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37528 === (13))){
var inst_37474 = (state_37527[(10)]);
var inst_37476 = cljs.core.chunked_seq_QMARK_(inst_37474);
var state_37527__$1 = state_37527;
if(inst_37476){
var statearr_37552_38989 = state_37527__$1;
(statearr_37552_38989[(1)] = (16));

} else {
var statearr_37553_38990 = state_37527__$1;
(statearr_37553_38990[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37528 === (22))){
var inst_37508 = (state_37527[(2)]);
var state_37527__$1 = state_37527;
if(cljs.core.truth_(inst_37508)){
var statearr_37554_38991 = state_37527__$1;
(statearr_37554_38991[(1)] = (23));

} else {
var statearr_37555_38995 = state_37527__$1;
(statearr_37555_38995[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37528 === (6))){
var inst_37431 = (state_37527[(8)]);
var inst_37502 = (state_37527[(7)]);
var inst_37504 = (state_37527[(11)]);
var inst_37502__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_37431) : topic_fn.call(null,inst_37431));
var inst_37503 = cljs.core.deref(mults);
var inst_37504__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37503,inst_37502__$1);
var state_37527__$1 = (function (){var statearr_37560 = state_37527;
(statearr_37560[(7)] = inst_37502__$1);

(statearr_37560[(11)] = inst_37504__$1);

return statearr_37560;
})();
if(cljs.core.truth_(inst_37504__$1)){
var statearr_37561_38996 = state_37527__$1;
(statearr_37561_38996[(1)] = (19));

} else {
var statearr_37562_38997 = state_37527__$1;
(statearr_37562_38997[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37528 === (25))){
var inst_37513 = (state_37527[(2)]);
var state_37527__$1 = state_37527;
var statearr_37567_38998 = state_37527__$1;
(statearr_37567_38998[(2)] = inst_37513);

(statearr_37567_38998[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37528 === (17))){
var inst_37474 = (state_37527[(10)]);
var inst_37486 = cljs.core.first(inst_37474);
var inst_37487 = cljs.core.async.muxch_STAR_(inst_37486);
var inst_37488 = cljs.core.async.close_BANG_(inst_37487);
var inst_37489 = cljs.core.next(inst_37474);
var inst_37456 = inst_37489;
var inst_37457 = null;
var inst_37458 = (0);
var inst_37459 = (0);
var state_37527__$1 = (function (){var statearr_37568 = state_37527;
(statearr_37568[(12)] = inst_37456);

(statearr_37568[(13)] = inst_37488);

(statearr_37568[(14)] = inst_37459);

(statearr_37568[(15)] = inst_37457);

(statearr_37568[(16)] = inst_37458);

return statearr_37568;
})();
var statearr_37572_38999 = state_37527__$1;
(statearr_37572_38999[(2)] = null);

(statearr_37572_38999[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37528 === (3))){
var inst_37524 = (state_37527[(2)]);
var state_37527__$1 = state_37527;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37527__$1,inst_37524);
} else {
if((state_val_37528 === (12))){
var inst_37498 = (state_37527[(2)]);
var state_37527__$1 = state_37527;
var statearr_37574_39000 = state_37527__$1;
(statearr_37574_39000[(2)] = inst_37498);

(statearr_37574_39000[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37528 === (2))){
var state_37527__$1 = state_37527;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37527__$1,(4),ch);
} else {
if((state_val_37528 === (23))){
var state_37527__$1 = state_37527;
var statearr_37576_39001 = state_37527__$1;
(statearr_37576_39001[(2)] = null);

(statearr_37576_39001[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37528 === (19))){
var inst_37431 = (state_37527[(8)]);
var inst_37504 = (state_37527[(11)]);
var inst_37506 = cljs.core.async.muxch_STAR_(inst_37504);
var state_37527__$1 = state_37527;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37527__$1,(22),inst_37506,inst_37431);
} else {
if((state_val_37528 === (11))){
var inst_37474 = (state_37527[(10)]);
var inst_37456 = (state_37527[(12)]);
var inst_37474__$1 = cljs.core.seq(inst_37456);
var state_37527__$1 = (function (){var statearr_37577 = state_37527;
(statearr_37577[(10)] = inst_37474__$1);

return statearr_37577;
})();
if(inst_37474__$1){
var statearr_37578_39006 = state_37527__$1;
(statearr_37578_39006[(1)] = (13));

} else {
var statearr_37579_39010 = state_37527__$1;
(statearr_37579_39010[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37528 === (9))){
var inst_37500 = (state_37527[(2)]);
var state_37527__$1 = state_37527;
var statearr_37580_39011 = state_37527__$1;
(statearr_37580_39011[(2)] = inst_37500);

(statearr_37580_39011[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37528 === (5))){
var inst_37449 = cljs.core.deref(mults);
var inst_37450 = cljs.core.vals(inst_37449);
var inst_37451 = cljs.core.seq(inst_37450);
var inst_37456 = inst_37451;
var inst_37457 = null;
var inst_37458 = (0);
var inst_37459 = (0);
var state_37527__$1 = (function (){var statearr_37588 = state_37527;
(statearr_37588[(12)] = inst_37456);

(statearr_37588[(14)] = inst_37459);

(statearr_37588[(15)] = inst_37457);

(statearr_37588[(16)] = inst_37458);

return statearr_37588;
})();
var statearr_37590_39012 = state_37527__$1;
(statearr_37590_39012[(2)] = null);

(statearr_37590_39012[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37528 === (14))){
var state_37527__$1 = state_37527;
var statearr_37594_39013 = state_37527__$1;
(statearr_37594_39013[(2)] = null);

(statearr_37594_39013[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37528 === (16))){
var inst_37474 = (state_37527[(10)]);
var inst_37478 = cljs.core.chunk_first(inst_37474);
var inst_37479 = cljs.core.chunk_rest(inst_37474);
var inst_37480 = cljs.core.count(inst_37478);
var inst_37456 = inst_37479;
var inst_37457 = inst_37478;
var inst_37458 = inst_37480;
var inst_37459 = (0);
var state_37527__$1 = (function (){var statearr_37599 = state_37527;
(statearr_37599[(12)] = inst_37456);

(statearr_37599[(14)] = inst_37459);

(statearr_37599[(15)] = inst_37457);

(statearr_37599[(16)] = inst_37458);

return statearr_37599;
})();
var statearr_37600_39018 = state_37527__$1;
(statearr_37600_39018[(2)] = null);

(statearr_37600_39018[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37528 === (10))){
var inst_37456 = (state_37527[(12)]);
var inst_37459 = (state_37527[(14)]);
var inst_37457 = (state_37527[(15)]);
var inst_37458 = (state_37527[(16)]);
var inst_37468 = cljs.core._nth(inst_37457,inst_37459);
var inst_37469 = cljs.core.async.muxch_STAR_(inst_37468);
var inst_37470 = cljs.core.async.close_BANG_(inst_37469);
var inst_37471 = (inst_37459 + (1));
var tmp37591 = inst_37456;
var tmp37592 = inst_37457;
var tmp37593 = inst_37458;
var inst_37456__$1 = tmp37591;
var inst_37457__$1 = tmp37592;
var inst_37458__$1 = tmp37593;
var inst_37459__$1 = inst_37471;
var state_37527__$1 = (function (){var statearr_37605 = state_37527;
(statearr_37605[(12)] = inst_37456__$1);

(statearr_37605[(14)] = inst_37459__$1);

(statearr_37605[(17)] = inst_37470);

(statearr_37605[(15)] = inst_37457__$1);

(statearr_37605[(16)] = inst_37458__$1);

return statearr_37605;
})();
var statearr_37606_39022 = state_37527__$1;
(statearr_37606_39022[(2)] = null);

(statearr_37606_39022[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37528 === (18))){
var inst_37492 = (state_37527[(2)]);
var state_37527__$1 = state_37527;
var statearr_37607_39026 = state_37527__$1;
(statearr_37607_39026[(2)] = inst_37492);

(statearr_37607_39026[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37528 === (8))){
var inst_37459 = (state_37527[(14)]);
var inst_37458 = (state_37527[(16)]);
var inst_37464 = (inst_37459 < inst_37458);
var inst_37465 = inst_37464;
var state_37527__$1 = state_37527;
if(cljs.core.truth_(inst_37465)){
var statearr_37612_39027 = state_37527__$1;
(statearr_37612_39027[(1)] = (10));

} else {
var statearr_37613_39028 = state_37527__$1;
(statearr_37613_39028[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__35886__auto__ = null;
var cljs$core$async$state_machine__35886__auto____0 = (function (){
var statearr_37614 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37614[(0)] = cljs$core$async$state_machine__35886__auto__);

(statearr_37614[(1)] = (1));

return statearr_37614;
});
var cljs$core$async$state_machine__35886__auto____1 = (function (state_37527){
while(true){
var ret_value__35887__auto__ = (function (){try{while(true){
var result__35888__auto__ = switch__35885__auto__(state_37527);
if(cljs.core.keyword_identical_QMARK_(result__35888__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35888__auto__;
}
break;
}
}catch (e37616){var ex__35889__auto__ = e37616;
var statearr_37617_39033 = state_37527;
(statearr_37617_39033[(2)] = ex__35889__auto__);


if(cljs.core.seq((state_37527[(4)]))){
var statearr_37618_39034 = state_37527;
(statearr_37618_39034[(1)] = cljs.core.first((state_37527[(4)])));

} else {
throw ex__35889__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39035 = state_37527;
state_37527 = G__39035;
continue;
} else {
return ret_value__35887__auto__;
}
break;
}
});
cljs$core$async$state_machine__35886__auto__ = function(state_37527){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35886__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35886__auto____1.call(this,state_37527);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35886__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35886__auto____0;
cljs$core$async$state_machine__35886__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35886__auto____1;
return cljs$core$async$state_machine__35886__auto__;
})()
})();
var state__36089__auto__ = (function (){var statearr_37619 = f__36088__auto__();
(statearr_37619[(6)] = c__36087__auto___38972);

return statearr_37619;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36089__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__37625 = arguments.length;
switch (G__37625) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__37631 = arguments.length;
switch (G__37631) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__37641 = arguments.length;
switch (G__37641) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__36087__auto___39044 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36088__auto__ = (function (){var switch__35885__auto__ = (function (state_37693){
var state_val_37695 = (state_37693[(1)]);
if((state_val_37695 === (7))){
var state_37693__$1 = state_37693;
var statearr_37697_39045 = state_37693__$1;
(statearr_37697_39045[(2)] = null);

(statearr_37697_39045[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37695 === (1))){
var state_37693__$1 = state_37693;
var statearr_37698_39046 = state_37693__$1;
(statearr_37698_39046[(2)] = null);

(statearr_37698_39046[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37695 === (4))){
var inst_37648 = (state_37693[(7)]);
var inst_37649 = (state_37693[(8)]);
var inst_37655 = (inst_37649 < inst_37648);
var state_37693__$1 = state_37693;
if(cljs.core.truth_(inst_37655)){
var statearr_37699_39047 = state_37693__$1;
(statearr_37699_39047[(1)] = (6));

} else {
var statearr_37700_39048 = state_37693__$1;
(statearr_37700_39048[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37695 === (15))){
var inst_37679 = (state_37693[(9)]);
var inst_37684 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_37679);
var state_37693__$1 = state_37693;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37693__$1,(17),out,inst_37684);
} else {
if((state_val_37695 === (13))){
var inst_37679 = (state_37693[(9)]);
var inst_37679__$1 = (state_37693[(2)]);
var inst_37680 = cljs.core.some(cljs.core.nil_QMARK_,inst_37679__$1);
var state_37693__$1 = (function (){var statearr_37701 = state_37693;
(statearr_37701[(9)] = inst_37679__$1);

return statearr_37701;
})();
if(cljs.core.truth_(inst_37680)){
var statearr_37702_39049 = state_37693__$1;
(statearr_37702_39049[(1)] = (14));

} else {
var statearr_37703_39050 = state_37693__$1;
(statearr_37703_39050[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37695 === (6))){
var state_37693__$1 = state_37693;
var statearr_37704_39051 = state_37693__$1;
(statearr_37704_39051[(2)] = null);

(statearr_37704_39051[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37695 === (17))){
var inst_37686 = (state_37693[(2)]);
var state_37693__$1 = (function (){var statearr_37706 = state_37693;
(statearr_37706[(10)] = inst_37686);

return statearr_37706;
})();
var statearr_37707_39052 = state_37693__$1;
(statearr_37707_39052[(2)] = null);

(statearr_37707_39052[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37695 === (3))){
var inst_37691 = (state_37693[(2)]);
var state_37693__$1 = state_37693;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37693__$1,inst_37691);
} else {
if((state_val_37695 === (12))){
var _ = (function (){var statearr_37708 = state_37693;
(statearr_37708[(4)] = cljs.core.rest((state_37693[(4)])));

return statearr_37708;
})();
var state_37693__$1 = state_37693;
var ex37705 = (state_37693__$1[(2)]);
var statearr_37709_39053 = state_37693__$1;
(statearr_37709_39053[(5)] = ex37705);


if((ex37705 instanceof Object)){
var statearr_37710_39054 = state_37693__$1;
(statearr_37710_39054[(1)] = (11));

(statearr_37710_39054[(5)] = null);

} else {
throw ex37705;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37695 === (2))){
var inst_37647 = cljs.core.reset_BANG_(dctr,cnt);
var inst_37648 = cnt;
var inst_37649 = (0);
var state_37693__$1 = (function (){var statearr_37713 = state_37693;
(statearr_37713[(7)] = inst_37648);

(statearr_37713[(8)] = inst_37649);

(statearr_37713[(11)] = inst_37647);

return statearr_37713;
})();
var statearr_37715_39055 = state_37693__$1;
(statearr_37715_39055[(2)] = null);

(statearr_37715_39055[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37695 === (11))){
var inst_37658 = (state_37693[(2)]);
var inst_37659 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_37693__$1 = (function (){var statearr_37716 = state_37693;
(statearr_37716[(12)] = inst_37658);

return statearr_37716;
})();
var statearr_37717_39056 = state_37693__$1;
(statearr_37717_39056[(2)] = inst_37659);

(statearr_37717_39056[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37695 === (9))){
var inst_37649 = (state_37693[(8)]);
var _ = (function (){var statearr_37718 = state_37693;
(statearr_37718[(4)] = cljs.core.cons((12),(state_37693[(4)])));

return statearr_37718;
})();
var inst_37665 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_37649) : chs__$1.call(null,inst_37649));
var inst_37666 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_37649) : done.call(null,inst_37649));
var inst_37667 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_37665,inst_37666);
var ___$1 = (function (){var statearr_37719 = state_37693;
(statearr_37719[(4)] = cljs.core.rest((state_37693[(4)])));

return statearr_37719;
})();
var state_37693__$1 = state_37693;
var statearr_37720_39061 = state_37693__$1;
(statearr_37720_39061[(2)] = inst_37667);

(statearr_37720_39061[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37695 === (5))){
var inst_37677 = (state_37693[(2)]);
var state_37693__$1 = (function (){var statearr_37722 = state_37693;
(statearr_37722[(13)] = inst_37677);

return statearr_37722;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37693__$1,(13),dchan);
} else {
if((state_val_37695 === (14))){
var inst_37682 = cljs.core.async.close_BANG_(out);
var state_37693__$1 = state_37693;
var statearr_37723_39063 = state_37693__$1;
(statearr_37723_39063[(2)] = inst_37682);

(statearr_37723_39063[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37695 === (16))){
var inst_37689 = (state_37693[(2)]);
var state_37693__$1 = state_37693;
var statearr_37724_39064 = state_37693__$1;
(statearr_37724_39064[(2)] = inst_37689);

(statearr_37724_39064[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37695 === (10))){
var inst_37649 = (state_37693[(8)]);
var inst_37670 = (state_37693[(2)]);
var inst_37671 = (inst_37649 + (1));
var inst_37649__$1 = inst_37671;
var state_37693__$1 = (function (){var statearr_37725 = state_37693;
(statearr_37725[(8)] = inst_37649__$1);

(statearr_37725[(14)] = inst_37670);

return statearr_37725;
})();
var statearr_37726_39067 = state_37693__$1;
(statearr_37726_39067[(2)] = null);

(statearr_37726_39067[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37695 === (8))){
var inst_37675 = (state_37693[(2)]);
var state_37693__$1 = state_37693;
var statearr_37727_39068 = state_37693__$1;
(statearr_37727_39068[(2)] = inst_37675);

(statearr_37727_39068[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__35886__auto__ = null;
var cljs$core$async$state_machine__35886__auto____0 = (function (){
var statearr_37728 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37728[(0)] = cljs$core$async$state_machine__35886__auto__);

(statearr_37728[(1)] = (1));

return statearr_37728;
});
var cljs$core$async$state_machine__35886__auto____1 = (function (state_37693){
while(true){
var ret_value__35887__auto__ = (function (){try{while(true){
var result__35888__auto__ = switch__35885__auto__(state_37693);
if(cljs.core.keyword_identical_QMARK_(result__35888__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35888__auto__;
}
break;
}
}catch (e37730){var ex__35889__auto__ = e37730;
var statearr_37731_39069 = state_37693;
(statearr_37731_39069[(2)] = ex__35889__auto__);


if(cljs.core.seq((state_37693[(4)]))){
var statearr_37733_39070 = state_37693;
(statearr_37733_39070[(1)] = cljs.core.first((state_37693[(4)])));

} else {
throw ex__35889__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39075 = state_37693;
state_37693 = G__39075;
continue;
} else {
return ret_value__35887__auto__;
}
break;
}
});
cljs$core$async$state_machine__35886__auto__ = function(state_37693){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35886__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35886__auto____1.call(this,state_37693);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35886__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35886__auto____0;
cljs$core$async$state_machine__35886__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35886__auto____1;
return cljs$core$async$state_machine__35886__auto__;
})()
})();
var state__36089__auto__ = (function (){var statearr_37734 = f__36088__auto__();
(statearr_37734[(6)] = c__36087__auto___39044);

return statearr_37734;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36089__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__37737 = arguments.length;
switch (G__37737) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__36087__auto___39078 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36088__auto__ = (function (){var switch__35885__auto__ = (function (state_37775){
var state_val_37776 = (state_37775[(1)]);
if((state_val_37776 === (7))){
var inst_37750 = (state_37775[(7)]);
var inst_37751 = (state_37775[(8)]);
var inst_37750__$1 = (state_37775[(2)]);
var inst_37751__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37750__$1,(0),null);
var inst_37752 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37750__$1,(1),null);
var inst_37753 = (inst_37751__$1 == null);
var state_37775__$1 = (function (){var statearr_37778 = state_37775;
(statearr_37778[(9)] = inst_37752);

(statearr_37778[(7)] = inst_37750__$1);

(statearr_37778[(8)] = inst_37751__$1);

return statearr_37778;
})();
if(cljs.core.truth_(inst_37753)){
var statearr_37779_39079 = state_37775__$1;
(statearr_37779_39079[(1)] = (8));

} else {
var statearr_37781_39080 = state_37775__$1;
(statearr_37781_39080[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37776 === (1))){
var inst_37738 = cljs.core.vec(chs);
var inst_37739 = inst_37738;
var state_37775__$1 = (function (){var statearr_37782 = state_37775;
(statearr_37782[(10)] = inst_37739);

return statearr_37782;
})();
var statearr_37783_39081 = state_37775__$1;
(statearr_37783_39081[(2)] = null);

(statearr_37783_39081[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37776 === (4))){
var inst_37739 = (state_37775[(10)]);
var state_37775__$1 = state_37775;
return cljs.core.async.ioc_alts_BANG_(state_37775__$1,(7),inst_37739);
} else {
if((state_val_37776 === (6))){
var inst_37767 = (state_37775[(2)]);
var state_37775__$1 = state_37775;
var statearr_37785_39082 = state_37775__$1;
(statearr_37785_39082[(2)] = inst_37767);

(statearr_37785_39082[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37776 === (3))){
var inst_37769 = (state_37775[(2)]);
var state_37775__$1 = state_37775;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37775__$1,inst_37769);
} else {
if((state_val_37776 === (2))){
var inst_37739 = (state_37775[(10)]);
var inst_37742 = cljs.core.count(inst_37739);
var inst_37743 = (inst_37742 > (0));
var state_37775__$1 = state_37775;
if(cljs.core.truth_(inst_37743)){
var statearr_37789_39084 = state_37775__$1;
(statearr_37789_39084[(1)] = (4));

} else {
var statearr_37790_39085 = state_37775__$1;
(statearr_37790_39085[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37776 === (11))){
var inst_37739 = (state_37775[(10)]);
var inst_37760 = (state_37775[(2)]);
var tmp37788 = inst_37739;
var inst_37739__$1 = tmp37788;
var state_37775__$1 = (function (){var statearr_37791 = state_37775;
(statearr_37791[(10)] = inst_37739__$1);

(statearr_37791[(11)] = inst_37760);

return statearr_37791;
})();
var statearr_37792_39086 = state_37775__$1;
(statearr_37792_39086[(2)] = null);

(statearr_37792_39086[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37776 === (9))){
var inst_37751 = (state_37775[(8)]);
var state_37775__$1 = state_37775;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37775__$1,(11),out,inst_37751);
} else {
if((state_val_37776 === (5))){
var inst_37765 = cljs.core.async.close_BANG_(out);
var state_37775__$1 = state_37775;
var statearr_37796_39091 = state_37775__$1;
(statearr_37796_39091[(2)] = inst_37765);

(statearr_37796_39091[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37776 === (10))){
var inst_37763 = (state_37775[(2)]);
var state_37775__$1 = state_37775;
var statearr_37797_39092 = state_37775__$1;
(statearr_37797_39092[(2)] = inst_37763);

(statearr_37797_39092[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37776 === (8))){
var inst_37752 = (state_37775[(9)]);
var inst_37750 = (state_37775[(7)]);
var inst_37739 = (state_37775[(10)]);
var inst_37751 = (state_37775[(8)]);
var inst_37755 = (function (){var cs = inst_37739;
var vec__37745 = inst_37750;
var v = inst_37751;
var c = inst_37752;
return (function (p1__37735_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__37735_SHARP_);
});
})();
var inst_37756 = cljs.core.filterv(inst_37755,inst_37739);
var inst_37739__$1 = inst_37756;
var state_37775__$1 = (function (){var statearr_37811 = state_37775;
(statearr_37811[(10)] = inst_37739__$1);

return statearr_37811;
})();
var statearr_37812_39093 = state_37775__$1;
(statearr_37812_39093[(2)] = null);

(statearr_37812_39093[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__35886__auto__ = null;
var cljs$core$async$state_machine__35886__auto____0 = (function (){
var statearr_37819 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37819[(0)] = cljs$core$async$state_machine__35886__auto__);

(statearr_37819[(1)] = (1));

return statearr_37819;
});
var cljs$core$async$state_machine__35886__auto____1 = (function (state_37775){
while(true){
var ret_value__35887__auto__ = (function (){try{while(true){
var result__35888__auto__ = switch__35885__auto__(state_37775);
if(cljs.core.keyword_identical_QMARK_(result__35888__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35888__auto__;
}
break;
}
}catch (e37820){var ex__35889__auto__ = e37820;
var statearr_37821_39094 = state_37775;
(statearr_37821_39094[(2)] = ex__35889__auto__);


if(cljs.core.seq((state_37775[(4)]))){
var statearr_37822_39095 = state_37775;
(statearr_37822_39095[(1)] = cljs.core.first((state_37775[(4)])));

} else {
throw ex__35889__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39096 = state_37775;
state_37775 = G__39096;
continue;
} else {
return ret_value__35887__auto__;
}
break;
}
});
cljs$core$async$state_machine__35886__auto__ = function(state_37775){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35886__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35886__auto____1.call(this,state_37775);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35886__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35886__auto____0;
cljs$core$async$state_machine__35886__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35886__auto____1;
return cljs$core$async$state_machine__35886__auto__;
})()
})();
var state__36089__auto__ = (function (){var statearr_37823 = f__36088__auto__();
(statearr_37823[(6)] = c__36087__auto___39078);

return statearr_37823;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36089__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__37835 = arguments.length;
switch (G__37835) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__36087__auto___39102 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36088__auto__ = (function (){var switch__35885__auto__ = (function (state_37862){
var state_val_37863 = (state_37862[(1)]);
if((state_val_37863 === (7))){
var inst_37844 = (state_37862[(7)]);
var inst_37844__$1 = (state_37862[(2)]);
var inst_37845 = (inst_37844__$1 == null);
var inst_37846 = cljs.core.not(inst_37845);
var state_37862__$1 = (function (){var statearr_37868 = state_37862;
(statearr_37868[(7)] = inst_37844__$1);

return statearr_37868;
})();
if(inst_37846){
var statearr_37869_39103 = state_37862__$1;
(statearr_37869_39103[(1)] = (8));

} else {
var statearr_37870_39104 = state_37862__$1;
(statearr_37870_39104[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37863 === (1))){
var inst_37839 = (0);
var state_37862__$1 = (function (){var statearr_37871 = state_37862;
(statearr_37871[(8)] = inst_37839);

return statearr_37871;
})();
var statearr_37872_39109 = state_37862__$1;
(statearr_37872_39109[(2)] = null);

(statearr_37872_39109[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37863 === (4))){
var state_37862__$1 = state_37862;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37862__$1,(7),ch);
} else {
if((state_val_37863 === (6))){
var inst_37857 = (state_37862[(2)]);
var state_37862__$1 = state_37862;
var statearr_37873_39110 = state_37862__$1;
(statearr_37873_39110[(2)] = inst_37857);

(statearr_37873_39110[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37863 === (3))){
var inst_37859 = (state_37862[(2)]);
var inst_37860 = cljs.core.async.close_BANG_(out);
var state_37862__$1 = (function (){var statearr_37874 = state_37862;
(statearr_37874[(9)] = inst_37859);

return statearr_37874;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_37862__$1,inst_37860);
} else {
if((state_val_37863 === (2))){
var inst_37839 = (state_37862[(8)]);
var inst_37841 = (inst_37839 < n);
var state_37862__$1 = state_37862;
if(cljs.core.truth_(inst_37841)){
var statearr_37875_39111 = state_37862__$1;
(statearr_37875_39111[(1)] = (4));

} else {
var statearr_37876_39112 = state_37862__$1;
(statearr_37876_39112[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37863 === (11))){
var inst_37839 = (state_37862[(8)]);
var inst_37849 = (state_37862[(2)]);
var inst_37850 = (inst_37839 + (1));
var inst_37839__$1 = inst_37850;
var state_37862__$1 = (function (){var statearr_37878 = state_37862;
(statearr_37878[(10)] = inst_37849);

(statearr_37878[(8)] = inst_37839__$1);

return statearr_37878;
})();
var statearr_37882_39113 = state_37862__$1;
(statearr_37882_39113[(2)] = null);

(statearr_37882_39113[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37863 === (9))){
var state_37862__$1 = state_37862;
var statearr_37883_39114 = state_37862__$1;
(statearr_37883_39114[(2)] = null);

(statearr_37883_39114[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37863 === (5))){
var state_37862__$1 = state_37862;
var statearr_37884_39115 = state_37862__$1;
(statearr_37884_39115[(2)] = null);

(statearr_37884_39115[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37863 === (10))){
var inst_37854 = (state_37862[(2)]);
var state_37862__$1 = state_37862;
var statearr_37887_39116 = state_37862__$1;
(statearr_37887_39116[(2)] = inst_37854);

(statearr_37887_39116[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37863 === (8))){
var inst_37844 = (state_37862[(7)]);
var state_37862__$1 = state_37862;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37862__$1,(11),out,inst_37844);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__35886__auto__ = null;
var cljs$core$async$state_machine__35886__auto____0 = (function (){
var statearr_37889 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37889[(0)] = cljs$core$async$state_machine__35886__auto__);

(statearr_37889[(1)] = (1));

return statearr_37889;
});
var cljs$core$async$state_machine__35886__auto____1 = (function (state_37862){
while(true){
var ret_value__35887__auto__ = (function (){try{while(true){
var result__35888__auto__ = switch__35885__auto__(state_37862);
if(cljs.core.keyword_identical_QMARK_(result__35888__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35888__auto__;
}
break;
}
}catch (e37890){var ex__35889__auto__ = e37890;
var statearr_37892_39118 = state_37862;
(statearr_37892_39118[(2)] = ex__35889__auto__);


if(cljs.core.seq((state_37862[(4)]))){
var statearr_37893_39119 = state_37862;
(statearr_37893_39119[(1)] = cljs.core.first((state_37862[(4)])));

} else {
throw ex__35889__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39123 = state_37862;
state_37862 = G__39123;
continue;
} else {
return ret_value__35887__auto__;
}
break;
}
});
cljs$core$async$state_machine__35886__auto__ = function(state_37862){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35886__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35886__auto____1.call(this,state_37862);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35886__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35886__auto____0;
cljs$core$async$state_machine__35886__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35886__auto____1;
return cljs$core$async$state_machine__35886__auto__;
})()
})();
var state__36089__auto__ = (function (){var statearr_37894 = f__36088__auto__();
(statearr_37894[(6)] = c__36087__auto___39102);

return statearr_37894;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36089__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37896 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37896 = (function (f,ch,meta37897){
this.f = f;
this.ch = ch;
this.meta37897 = meta37897;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37896.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37898,meta37897__$1){
var self__ = this;
var _37898__$1 = this;
return (new cljs.core.async.t_cljs$core$async37896(self__.f,self__.ch,meta37897__$1));
}));

(cljs.core.async.t_cljs$core$async37896.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37898){
var self__ = this;
var _37898__$1 = this;
return self__.meta37897;
}));

(cljs.core.async.t_cljs$core$async37896.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37896.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async37896.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async37896.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37896.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37901 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37901 = (function (f,ch,meta37897,_,fn1,meta37902){
this.f = f;
this.ch = ch;
this.meta37897 = meta37897;
this._ = _;
this.fn1 = fn1;
this.meta37902 = meta37902;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37901.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37903,meta37902__$1){
var self__ = this;
var _37903__$1 = this;
return (new cljs.core.async.t_cljs$core$async37901(self__.f,self__.ch,self__.meta37897,self__._,self__.fn1,meta37902__$1));
}));

(cljs.core.async.t_cljs$core$async37901.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37903){
var self__ = this;
var _37903__$1 = this;
return self__.meta37902;
}));

(cljs.core.async.t_cljs$core$async37901.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37901.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async37901.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async37901.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__37895_SHARP_){
var G__37909 = (((p1__37895_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__37895_SHARP_) : self__.f.call(null,p1__37895_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__37909) : f1.call(null,G__37909));
});
}));

(cljs.core.async.t_cljs$core$async37901.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta37897","meta37897",934460702,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async37896","cljs.core.async/t_cljs$core$async37896",1936314136,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta37902","meta37902",715394286,null)], null);
}));

(cljs.core.async.t_cljs$core$async37901.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37901.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37901");

(cljs.core.async.t_cljs$core$async37901.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async37901");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37901.
 */
cljs.core.async.__GT_t_cljs$core$async37901 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async37901(f__$1,ch__$1,meta37897__$1,___$2,fn1__$1,meta37902){
return (new cljs.core.async.t_cljs$core$async37901(f__$1,ch__$1,meta37897__$1,___$2,fn1__$1,meta37902));
});

}

return (new cljs.core.async.t_cljs$core$async37901(self__.f,self__.ch,self__.meta37897,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4210__auto__ = ret;
if(cljs.core.truth_(and__4210__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4210__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__37910 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__37910) : self__.f.call(null,G__37910));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async37896.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37896.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async37896.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta37897","meta37897",934460702,null)], null);
}));

(cljs.core.async.t_cljs$core$async37896.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37896.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37896");

(cljs.core.async.t_cljs$core$async37896.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async37896");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37896.
 */
cljs.core.async.__GT_t_cljs$core$async37896 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async37896(f__$1,ch__$1,meta37897){
return (new cljs.core.async.t_cljs$core$async37896(f__$1,ch__$1,meta37897));
});

}

return (new cljs.core.async.t_cljs$core$async37896(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37911 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37911 = (function (f,ch,meta37912){
this.f = f;
this.ch = ch;
this.meta37912 = meta37912;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37911.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37913,meta37912__$1){
var self__ = this;
var _37913__$1 = this;
return (new cljs.core.async.t_cljs$core$async37911(self__.f,self__.ch,meta37912__$1));
}));

(cljs.core.async.t_cljs$core$async37911.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37913){
var self__ = this;
var _37913__$1 = this;
return self__.meta37912;
}));

(cljs.core.async.t_cljs$core$async37911.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37911.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async37911.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37911.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async37911.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37911.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async37911.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta37912","meta37912",-275605673,null)], null);
}));

(cljs.core.async.t_cljs$core$async37911.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37911.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37911");

(cljs.core.async.t_cljs$core$async37911.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async37911");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37911.
 */
cljs.core.async.__GT_t_cljs$core$async37911 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async37911(f__$1,ch__$1,meta37912){
return (new cljs.core.async.t_cljs$core$async37911(f__$1,ch__$1,meta37912));
});

}

return (new cljs.core.async.t_cljs$core$async37911(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37922 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37922 = (function (p,ch,meta37923){
this.p = p;
this.ch = ch;
this.meta37923 = meta37923;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37922.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37924,meta37923__$1){
var self__ = this;
var _37924__$1 = this;
return (new cljs.core.async.t_cljs$core$async37922(self__.p,self__.ch,meta37923__$1));
}));

(cljs.core.async.t_cljs$core$async37922.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37924){
var self__ = this;
var _37924__$1 = this;
return self__.meta37923;
}));

(cljs.core.async.t_cljs$core$async37922.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37922.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async37922.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async37922.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37922.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async37922.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37922.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async37922.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta37923","meta37923",-1105627342,null)], null);
}));

(cljs.core.async.t_cljs$core$async37922.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37922.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37922");

(cljs.core.async.t_cljs$core$async37922.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async37922");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37922.
 */
cljs.core.async.__GT_t_cljs$core$async37922 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async37922(p__$1,ch__$1,meta37923){
return (new cljs.core.async.t_cljs$core$async37922(p__$1,ch__$1,meta37923));
});

}

return (new cljs.core.async.t_cljs$core$async37922(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__37934 = arguments.length;
switch (G__37934) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__36087__auto___39132 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36088__auto__ = (function (){var switch__35885__auto__ = (function (state_37959){
var state_val_37960 = (state_37959[(1)]);
if((state_val_37960 === (7))){
var inst_37955 = (state_37959[(2)]);
var state_37959__$1 = state_37959;
var statearr_37961_39133 = state_37959__$1;
(statearr_37961_39133[(2)] = inst_37955);

(statearr_37961_39133[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37960 === (1))){
var state_37959__$1 = state_37959;
var statearr_37962_39134 = state_37959__$1;
(statearr_37962_39134[(2)] = null);

(statearr_37962_39134[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37960 === (4))){
var inst_37941 = (state_37959[(7)]);
var inst_37941__$1 = (state_37959[(2)]);
var inst_37942 = (inst_37941__$1 == null);
var state_37959__$1 = (function (){var statearr_37963 = state_37959;
(statearr_37963[(7)] = inst_37941__$1);

return statearr_37963;
})();
if(cljs.core.truth_(inst_37942)){
var statearr_37964_39139 = state_37959__$1;
(statearr_37964_39139[(1)] = (5));

} else {
var statearr_37965_39140 = state_37959__$1;
(statearr_37965_39140[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37960 === (6))){
var inst_37941 = (state_37959[(7)]);
var inst_37946 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_37941) : p.call(null,inst_37941));
var state_37959__$1 = state_37959;
if(cljs.core.truth_(inst_37946)){
var statearr_37966_39141 = state_37959__$1;
(statearr_37966_39141[(1)] = (8));

} else {
var statearr_37967_39142 = state_37959__$1;
(statearr_37967_39142[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37960 === (3))){
var inst_37957 = (state_37959[(2)]);
var state_37959__$1 = state_37959;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37959__$1,inst_37957);
} else {
if((state_val_37960 === (2))){
var state_37959__$1 = state_37959;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37959__$1,(4),ch);
} else {
if((state_val_37960 === (11))){
var inst_37949 = (state_37959[(2)]);
var state_37959__$1 = state_37959;
var statearr_37969_39143 = state_37959__$1;
(statearr_37969_39143[(2)] = inst_37949);

(statearr_37969_39143[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37960 === (9))){
var state_37959__$1 = state_37959;
var statearr_37971_39144 = state_37959__$1;
(statearr_37971_39144[(2)] = null);

(statearr_37971_39144[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37960 === (5))){
var inst_37944 = cljs.core.async.close_BANG_(out);
var state_37959__$1 = state_37959;
var statearr_37972_39145 = state_37959__$1;
(statearr_37972_39145[(2)] = inst_37944);

(statearr_37972_39145[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37960 === (10))){
var inst_37952 = (state_37959[(2)]);
var state_37959__$1 = (function (){var statearr_37973 = state_37959;
(statearr_37973[(8)] = inst_37952);

return statearr_37973;
})();
var statearr_37974_39146 = state_37959__$1;
(statearr_37974_39146[(2)] = null);

(statearr_37974_39146[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37960 === (8))){
var inst_37941 = (state_37959[(7)]);
var state_37959__$1 = state_37959;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37959__$1,(11),out,inst_37941);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__35886__auto__ = null;
var cljs$core$async$state_machine__35886__auto____0 = (function (){
var statearr_37978 = [null,null,null,null,null,null,null,null,null];
(statearr_37978[(0)] = cljs$core$async$state_machine__35886__auto__);

(statearr_37978[(1)] = (1));

return statearr_37978;
});
var cljs$core$async$state_machine__35886__auto____1 = (function (state_37959){
while(true){
var ret_value__35887__auto__ = (function (){try{while(true){
var result__35888__auto__ = switch__35885__auto__(state_37959);
if(cljs.core.keyword_identical_QMARK_(result__35888__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35888__auto__;
}
break;
}
}catch (e37979){var ex__35889__auto__ = e37979;
var statearr_37980_39147 = state_37959;
(statearr_37980_39147[(2)] = ex__35889__auto__);


if(cljs.core.seq((state_37959[(4)]))){
var statearr_37981_39148 = state_37959;
(statearr_37981_39148[(1)] = cljs.core.first((state_37959[(4)])));

} else {
throw ex__35889__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39149 = state_37959;
state_37959 = G__39149;
continue;
} else {
return ret_value__35887__auto__;
}
break;
}
});
cljs$core$async$state_machine__35886__auto__ = function(state_37959){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35886__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35886__auto____1.call(this,state_37959);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35886__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35886__auto____0;
cljs$core$async$state_machine__35886__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35886__auto____1;
return cljs$core$async$state_machine__35886__auto__;
})()
})();
var state__36089__auto__ = (function (){var statearr_37982 = f__36088__auto__();
(statearr_37982[(6)] = c__36087__auto___39132);

return statearr_37982;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36089__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__37984 = arguments.length;
switch (G__37984) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__36087__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36088__auto__ = (function (){var switch__35885__auto__ = (function (state_38046){
var state_val_38047 = (state_38046[(1)]);
if((state_val_38047 === (7))){
var inst_38042 = (state_38046[(2)]);
var state_38046__$1 = state_38046;
var statearr_38048_39153 = state_38046__$1;
(statearr_38048_39153[(2)] = inst_38042);

(statearr_38048_39153[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38047 === (20))){
var inst_38012 = (state_38046[(7)]);
var inst_38023 = (state_38046[(2)]);
var inst_38024 = cljs.core.next(inst_38012);
var inst_37998 = inst_38024;
var inst_37999 = null;
var inst_38000 = (0);
var inst_38001 = (0);
var state_38046__$1 = (function (){var statearr_38049 = state_38046;
(statearr_38049[(8)] = inst_37998);

(statearr_38049[(9)] = inst_37999);

(statearr_38049[(10)] = inst_38000);

(statearr_38049[(11)] = inst_38001);

(statearr_38049[(12)] = inst_38023);

return statearr_38049;
})();
var statearr_38050_39155 = state_38046__$1;
(statearr_38050_39155[(2)] = null);

(statearr_38050_39155[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38047 === (1))){
var state_38046__$1 = state_38046;
var statearr_38051_39156 = state_38046__$1;
(statearr_38051_39156[(2)] = null);

(statearr_38051_39156[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38047 === (4))){
var inst_37987 = (state_38046[(13)]);
var inst_37987__$1 = (state_38046[(2)]);
var inst_37988 = (inst_37987__$1 == null);
var state_38046__$1 = (function (){var statearr_38052 = state_38046;
(statearr_38052[(13)] = inst_37987__$1);

return statearr_38052;
})();
if(cljs.core.truth_(inst_37988)){
var statearr_38053_39158 = state_38046__$1;
(statearr_38053_39158[(1)] = (5));

} else {
var statearr_38054_39159 = state_38046__$1;
(statearr_38054_39159[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38047 === (15))){
var state_38046__$1 = state_38046;
var statearr_38058_39160 = state_38046__$1;
(statearr_38058_39160[(2)] = null);

(statearr_38058_39160[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38047 === (21))){
var state_38046__$1 = state_38046;
var statearr_38059_39161 = state_38046__$1;
(statearr_38059_39161[(2)] = null);

(statearr_38059_39161[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38047 === (13))){
var inst_37998 = (state_38046[(8)]);
var inst_37999 = (state_38046[(9)]);
var inst_38000 = (state_38046[(10)]);
var inst_38001 = (state_38046[(11)]);
var inst_38008 = (state_38046[(2)]);
var inst_38009 = (inst_38001 + (1));
var tmp38055 = inst_37998;
var tmp38056 = inst_37999;
var tmp38057 = inst_38000;
var inst_37998__$1 = tmp38055;
var inst_37999__$1 = tmp38056;
var inst_38000__$1 = tmp38057;
var inst_38001__$1 = inst_38009;
var state_38046__$1 = (function (){var statearr_38060 = state_38046;
(statearr_38060[(8)] = inst_37998__$1);

(statearr_38060[(9)] = inst_37999__$1);

(statearr_38060[(10)] = inst_38000__$1);

(statearr_38060[(14)] = inst_38008);

(statearr_38060[(11)] = inst_38001__$1);

return statearr_38060;
})();
var statearr_38061_39163 = state_38046__$1;
(statearr_38061_39163[(2)] = null);

(statearr_38061_39163[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38047 === (22))){
var state_38046__$1 = state_38046;
var statearr_38062_39164 = state_38046__$1;
(statearr_38062_39164[(2)] = null);

(statearr_38062_39164[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38047 === (6))){
var inst_37987 = (state_38046[(13)]);
var inst_37996 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_37987) : f.call(null,inst_37987));
var inst_37997 = cljs.core.seq(inst_37996);
var inst_37998 = inst_37997;
var inst_37999 = null;
var inst_38000 = (0);
var inst_38001 = (0);
var state_38046__$1 = (function (){var statearr_38063 = state_38046;
(statearr_38063[(8)] = inst_37998);

(statearr_38063[(9)] = inst_37999);

(statearr_38063[(10)] = inst_38000);

(statearr_38063[(11)] = inst_38001);

return statearr_38063;
})();
var statearr_38064_39168 = state_38046__$1;
(statearr_38064_39168[(2)] = null);

(statearr_38064_39168[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38047 === (17))){
var inst_38012 = (state_38046[(7)]);
var inst_38016 = cljs.core.chunk_first(inst_38012);
var inst_38017 = cljs.core.chunk_rest(inst_38012);
var inst_38018 = cljs.core.count(inst_38016);
var inst_37998 = inst_38017;
var inst_37999 = inst_38016;
var inst_38000 = inst_38018;
var inst_38001 = (0);
var state_38046__$1 = (function (){var statearr_38066 = state_38046;
(statearr_38066[(8)] = inst_37998);

(statearr_38066[(9)] = inst_37999);

(statearr_38066[(10)] = inst_38000);

(statearr_38066[(11)] = inst_38001);

return statearr_38066;
})();
var statearr_38067_39169 = state_38046__$1;
(statearr_38067_39169[(2)] = null);

(statearr_38067_39169[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38047 === (3))){
var inst_38044 = (state_38046[(2)]);
var state_38046__$1 = state_38046;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38046__$1,inst_38044);
} else {
if((state_val_38047 === (12))){
var inst_38032 = (state_38046[(2)]);
var state_38046__$1 = state_38046;
var statearr_38068_39171 = state_38046__$1;
(statearr_38068_39171[(2)] = inst_38032);

(statearr_38068_39171[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38047 === (2))){
var state_38046__$1 = state_38046;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38046__$1,(4),in$);
} else {
if((state_val_38047 === (23))){
var inst_38040 = (state_38046[(2)]);
var state_38046__$1 = state_38046;
var statearr_38069_39172 = state_38046__$1;
(statearr_38069_39172[(2)] = inst_38040);

(statearr_38069_39172[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38047 === (19))){
var inst_38027 = (state_38046[(2)]);
var state_38046__$1 = state_38046;
var statearr_38070_39173 = state_38046__$1;
(statearr_38070_39173[(2)] = inst_38027);

(statearr_38070_39173[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38047 === (11))){
var inst_37998 = (state_38046[(8)]);
var inst_38012 = (state_38046[(7)]);
var inst_38012__$1 = cljs.core.seq(inst_37998);
var state_38046__$1 = (function (){var statearr_38074 = state_38046;
(statearr_38074[(7)] = inst_38012__$1);

return statearr_38074;
})();
if(inst_38012__$1){
var statearr_38075_39174 = state_38046__$1;
(statearr_38075_39174[(1)] = (14));

} else {
var statearr_38076_39175 = state_38046__$1;
(statearr_38076_39175[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38047 === (9))){
var inst_38034 = (state_38046[(2)]);
var inst_38035 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_38046__$1 = (function (){var statearr_38077 = state_38046;
(statearr_38077[(15)] = inst_38034);

return statearr_38077;
})();
if(cljs.core.truth_(inst_38035)){
var statearr_38078_39176 = state_38046__$1;
(statearr_38078_39176[(1)] = (21));

} else {
var statearr_38079_39177 = state_38046__$1;
(statearr_38079_39177[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38047 === (5))){
var inst_37990 = cljs.core.async.close_BANG_(out);
var state_38046__$1 = state_38046;
var statearr_38080_39178 = state_38046__$1;
(statearr_38080_39178[(2)] = inst_37990);

(statearr_38080_39178[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38047 === (14))){
var inst_38012 = (state_38046[(7)]);
var inst_38014 = cljs.core.chunked_seq_QMARK_(inst_38012);
var state_38046__$1 = state_38046;
if(inst_38014){
var statearr_38081_39180 = state_38046__$1;
(statearr_38081_39180[(1)] = (17));

} else {
var statearr_38082_39181 = state_38046__$1;
(statearr_38082_39181[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38047 === (16))){
var inst_38030 = (state_38046[(2)]);
var state_38046__$1 = state_38046;
var statearr_38083_39182 = state_38046__$1;
(statearr_38083_39182[(2)] = inst_38030);

(statearr_38083_39182[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38047 === (10))){
var inst_37999 = (state_38046[(9)]);
var inst_38001 = (state_38046[(11)]);
var inst_38006 = cljs.core._nth(inst_37999,inst_38001);
var state_38046__$1 = state_38046;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38046__$1,(13),out,inst_38006);
} else {
if((state_val_38047 === (18))){
var inst_38012 = (state_38046[(7)]);
var inst_38021 = cljs.core.first(inst_38012);
var state_38046__$1 = state_38046;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38046__$1,(20),out,inst_38021);
} else {
if((state_val_38047 === (8))){
var inst_38000 = (state_38046[(10)]);
var inst_38001 = (state_38046[(11)]);
var inst_38003 = (inst_38001 < inst_38000);
var inst_38004 = inst_38003;
var state_38046__$1 = state_38046;
if(cljs.core.truth_(inst_38004)){
var statearr_38088_39184 = state_38046__$1;
(statearr_38088_39184[(1)] = (10));

} else {
var statearr_38089_39186 = state_38046__$1;
(statearr_38089_39186[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__35886__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__35886__auto____0 = (function (){
var statearr_38090 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38090[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__35886__auto__);

(statearr_38090[(1)] = (1));

return statearr_38090;
});
var cljs$core$async$mapcat_STAR__$_state_machine__35886__auto____1 = (function (state_38046){
while(true){
var ret_value__35887__auto__ = (function (){try{while(true){
var result__35888__auto__ = switch__35885__auto__(state_38046);
if(cljs.core.keyword_identical_QMARK_(result__35888__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35888__auto__;
}
break;
}
}catch (e38091){var ex__35889__auto__ = e38091;
var statearr_38092_39188 = state_38046;
(statearr_38092_39188[(2)] = ex__35889__auto__);


if(cljs.core.seq((state_38046[(4)]))){
var statearr_38093_39189 = state_38046;
(statearr_38093_39189[(1)] = cljs.core.first((state_38046[(4)])));

} else {
throw ex__35889__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39190 = state_38046;
state_38046 = G__39190;
continue;
} else {
return ret_value__35887__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__35886__auto__ = function(state_38046){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__35886__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__35886__auto____1.call(this,state_38046);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__35886__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__35886__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__35886__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__35886__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__35886__auto__;
})()
})();
var state__36089__auto__ = (function (){var statearr_38094 = f__36088__auto__();
(statearr_38094[(6)] = c__36087__auto__);

return statearr_38094;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36089__auto__);
}));

return c__36087__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__38096 = arguments.length;
switch (G__38096) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__38098 = arguments.length;
switch (G__38098) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__38120 = arguments.length;
switch (G__38120) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__36087__auto___39199 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36088__auto__ = (function (){var switch__35885__auto__ = (function (state_38164){
var state_val_38165 = (state_38164[(1)]);
if((state_val_38165 === (7))){
var inst_38159 = (state_38164[(2)]);
var state_38164__$1 = state_38164;
var statearr_38168_39200 = state_38164__$1;
(statearr_38168_39200[(2)] = inst_38159);

(statearr_38168_39200[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38165 === (1))){
var inst_38141 = null;
var state_38164__$1 = (function (){var statearr_38170 = state_38164;
(statearr_38170[(7)] = inst_38141);

return statearr_38170;
})();
var statearr_38171_39201 = state_38164__$1;
(statearr_38171_39201[(2)] = null);

(statearr_38171_39201[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38165 === (4))){
var inst_38144 = (state_38164[(8)]);
var inst_38144__$1 = (state_38164[(2)]);
var inst_38145 = (inst_38144__$1 == null);
var inst_38146 = cljs.core.not(inst_38145);
var state_38164__$1 = (function (){var statearr_38172 = state_38164;
(statearr_38172[(8)] = inst_38144__$1);

return statearr_38172;
})();
if(inst_38146){
var statearr_38173_39202 = state_38164__$1;
(statearr_38173_39202[(1)] = (5));

} else {
var statearr_38174_39203 = state_38164__$1;
(statearr_38174_39203[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38165 === (6))){
var state_38164__$1 = state_38164;
var statearr_38175_39204 = state_38164__$1;
(statearr_38175_39204[(2)] = null);

(statearr_38175_39204[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38165 === (3))){
var inst_38161 = (state_38164[(2)]);
var inst_38162 = cljs.core.async.close_BANG_(out);
var state_38164__$1 = (function (){var statearr_38176 = state_38164;
(statearr_38176[(9)] = inst_38161);

return statearr_38176;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_38164__$1,inst_38162);
} else {
if((state_val_38165 === (2))){
var state_38164__$1 = state_38164;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38164__$1,(4),ch);
} else {
if((state_val_38165 === (11))){
var inst_38144 = (state_38164[(8)]);
var inst_38153 = (state_38164[(2)]);
var inst_38141 = inst_38144;
var state_38164__$1 = (function (){var statearr_38180 = state_38164;
(statearr_38180[(10)] = inst_38153);

(statearr_38180[(7)] = inst_38141);

return statearr_38180;
})();
var statearr_38181_39211 = state_38164__$1;
(statearr_38181_39211[(2)] = null);

(statearr_38181_39211[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38165 === (9))){
var inst_38144 = (state_38164[(8)]);
var state_38164__$1 = state_38164;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38164__$1,(11),out,inst_38144);
} else {
if((state_val_38165 === (5))){
var inst_38144 = (state_38164[(8)]);
var inst_38141 = (state_38164[(7)]);
var inst_38148 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_38144,inst_38141);
var state_38164__$1 = state_38164;
if(inst_38148){
var statearr_38183_39216 = state_38164__$1;
(statearr_38183_39216[(1)] = (8));

} else {
var statearr_38184_39217 = state_38164__$1;
(statearr_38184_39217[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38165 === (10))){
var inst_38156 = (state_38164[(2)]);
var state_38164__$1 = state_38164;
var statearr_38185_39218 = state_38164__$1;
(statearr_38185_39218[(2)] = inst_38156);

(statearr_38185_39218[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38165 === (8))){
var inst_38141 = (state_38164[(7)]);
var tmp38182 = inst_38141;
var inst_38141__$1 = tmp38182;
var state_38164__$1 = (function (){var statearr_38186 = state_38164;
(statearr_38186[(7)] = inst_38141__$1);

return statearr_38186;
})();
var statearr_38187_39220 = state_38164__$1;
(statearr_38187_39220[(2)] = null);

(statearr_38187_39220[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__35886__auto__ = null;
var cljs$core$async$state_machine__35886__auto____0 = (function (){
var statearr_38188 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_38188[(0)] = cljs$core$async$state_machine__35886__auto__);

(statearr_38188[(1)] = (1));

return statearr_38188;
});
var cljs$core$async$state_machine__35886__auto____1 = (function (state_38164){
while(true){
var ret_value__35887__auto__ = (function (){try{while(true){
var result__35888__auto__ = switch__35885__auto__(state_38164);
if(cljs.core.keyword_identical_QMARK_(result__35888__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35888__auto__;
}
break;
}
}catch (e38189){var ex__35889__auto__ = e38189;
var statearr_38190_39226 = state_38164;
(statearr_38190_39226[(2)] = ex__35889__auto__);


if(cljs.core.seq((state_38164[(4)]))){
var statearr_38191_39227 = state_38164;
(statearr_38191_39227[(1)] = cljs.core.first((state_38164[(4)])));

} else {
throw ex__35889__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39231 = state_38164;
state_38164 = G__39231;
continue;
} else {
return ret_value__35887__auto__;
}
break;
}
});
cljs$core$async$state_machine__35886__auto__ = function(state_38164){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35886__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35886__auto____1.call(this,state_38164);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35886__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35886__auto____0;
cljs$core$async$state_machine__35886__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35886__auto____1;
return cljs$core$async$state_machine__35886__auto__;
})()
})();
var state__36089__auto__ = (function (){var statearr_38192 = f__36088__auto__();
(statearr_38192[(6)] = c__36087__auto___39199);

return statearr_38192;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36089__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__38194 = arguments.length;
switch (G__38194) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__36087__auto___39237 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36088__auto__ = (function (){var switch__35885__auto__ = (function (state_38232){
var state_val_38233 = (state_38232[(1)]);
if((state_val_38233 === (7))){
var inst_38228 = (state_38232[(2)]);
var state_38232__$1 = state_38232;
var statearr_38234_39239 = state_38232__$1;
(statearr_38234_39239[(2)] = inst_38228);

(statearr_38234_39239[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38233 === (1))){
var inst_38195 = (new Array(n));
var inst_38196 = inst_38195;
var inst_38197 = (0);
var state_38232__$1 = (function (){var statearr_38235 = state_38232;
(statearr_38235[(7)] = inst_38197);

(statearr_38235[(8)] = inst_38196);

return statearr_38235;
})();
var statearr_38236_39244 = state_38232__$1;
(statearr_38236_39244[(2)] = null);

(statearr_38236_39244[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38233 === (4))){
var inst_38200 = (state_38232[(9)]);
var inst_38200__$1 = (state_38232[(2)]);
var inst_38201 = (inst_38200__$1 == null);
var inst_38202 = cljs.core.not(inst_38201);
var state_38232__$1 = (function (){var statearr_38237 = state_38232;
(statearr_38237[(9)] = inst_38200__$1);

return statearr_38237;
})();
if(inst_38202){
var statearr_38238_39246 = state_38232__$1;
(statearr_38238_39246[(1)] = (5));

} else {
var statearr_38239_39247 = state_38232__$1;
(statearr_38239_39247[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38233 === (15))){
var inst_38222 = (state_38232[(2)]);
var state_38232__$1 = state_38232;
var statearr_38240_39248 = state_38232__$1;
(statearr_38240_39248[(2)] = inst_38222);

(statearr_38240_39248[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38233 === (13))){
var state_38232__$1 = state_38232;
var statearr_38241_39250 = state_38232__$1;
(statearr_38241_39250[(2)] = null);

(statearr_38241_39250[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38233 === (6))){
var inst_38197 = (state_38232[(7)]);
var inst_38218 = (inst_38197 > (0));
var state_38232__$1 = state_38232;
if(cljs.core.truth_(inst_38218)){
var statearr_38242_39258 = state_38232__$1;
(statearr_38242_39258[(1)] = (12));

} else {
var statearr_38243_39259 = state_38232__$1;
(statearr_38243_39259[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38233 === (3))){
var inst_38230 = (state_38232[(2)]);
var state_38232__$1 = state_38232;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38232__$1,inst_38230);
} else {
if((state_val_38233 === (12))){
var inst_38196 = (state_38232[(8)]);
var inst_38220 = cljs.core.vec(inst_38196);
var state_38232__$1 = state_38232;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38232__$1,(15),out,inst_38220);
} else {
if((state_val_38233 === (2))){
var state_38232__$1 = state_38232;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38232__$1,(4),ch);
} else {
if((state_val_38233 === (11))){
var inst_38212 = (state_38232[(2)]);
var inst_38213 = (new Array(n));
var inst_38196 = inst_38213;
var inst_38197 = (0);
var state_38232__$1 = (function (){var statearr_38247 = state_38232;
(statearr_38247[(7)] = inst_38197);

(statearr_38247[(8)] = inst_38196);

(statearr_38247[(10)] = inst_38212);

return statearr_38247;
})();
var statearr_38253_39260 = state_38232__$1;
(statearr_38253_39260[(2)] = null);

(statearr_38253_39260[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38233 === (9))){
var inst_38196 = (state_38232[(8)]);
var inst_38210 = cljs.core.vec(inst_38196);
var state_38232__$1 = state_38232;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38232__$1,(11),out,inst_38210);
} else {
if((state_val_38233 === (5))){
var inst_38197 = (state_38232[(7)]);
var inst_38196 = (state_38232[(8)]);
var inst_38200 = (state_38232[(9)]);
var inst_38205 = (state_38232[(11)]);
var inst_38204 = (inst_38196[inst_38197] = inst_38200);
var inst_38205__$1 = (inst_38197 + (1));
var inst_38206 = (inst_38205__$1 < n);
var state_38232__$1 = (function (){var statearr_38257 = state_38232;
(statearr_38257[(11)] = inst_38205__$1);

(statearr_38257[(12)] = inst_38204);

return statearr_38257;
})();
if(cljs.core.truth_(inst_38206)){
var statearr_38258_39261 = state_38232__$1;
(statearr_38258_39261[(1)] = (8));

} else {
var statearr_38259_39262 = state_38232__$1;
(statearr_38259_39262[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38233 === (14))){
var inst_38225 = (state_38232[(2)]);
var inst_38226 = cljs.core.async.close_BANG_(out);
var state_38232__$1 = (function (){var statearr_38261 = state_38232;
(statearr_38261[(13)] = inst_38225);

return statearr_38261;
})();
var statearr_38262_39263 = state_38232__$1;
(statearr_38262_39263[(2)] = inst_38226);

(statearr_38262_39263[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38233 === (10))){
var inst_38216 = (state_38232[(2)]);
var state_38232__$1 = state_38232;
var statearr_38263_39264 = state_38232__$1;
(statearr_38263_39264[(2)] = inst_38216);

(statearr_38263_39264[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38233 === (8))){
var inst_38196 = (state_38232[(8)]);
var inst_38205 = (state_38232[(11)]);
var tmp38260 = inst_38196;
var inst_38196__$1 = tmp38260;
var inst_38197 = inst_38205;
var state_38232__$1 = (function (){var statearr_38264 = state_38232;
(statearr_38264[(7)] = inst_38197);

(statearr_38264[(8)] = inst_38196__$1);

return statearr_38264;
})();
var statearr_38265_39266 = state_38232__$1;
(statearr_38265_39266[(2)] = null);

(statearr_38265_39266[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__35886__auto__ = null;
var cljs$core$async$state_machine__35886__auto____0 = (function (){
var statearr_38266 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38266[(0)] = cljs$core$async$state_machine__35886__auto__);

(statearr_38266[(1)] = (1));

return statearr_38266;
});
var cljs$core$async$state_machine__35886__auto____1 = (function (state_38232){
while(true){
var ret_value__35887__auto__ = (function (){try{while(true){
var result__35888__auto__ = switch__35885__auto__(state_38232);
if(cljs.core.keyword_identical_QMARK_(result__35888__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35888__auto__;
}
break;
}
}catch (e38267){var ex__35889__auto__ = e38267;
var statearr_38268_39284 = state_38232;
(statearr_38268_39284[(2)] = ex__35889__auto__);


if(cljs.core.seq((state_38232[(4)]))){
var statearr_38269_39286 = state_38232;
(statearr_38269_39286[(1)] = cljs.core.first((state_38232[(4)])));

} else {
throw ex__35889__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39287 = state_38232;
state_38232 = G__39287;
continue;
} else {
return ret_value__35887__auto__;
}
break;
}
});
cljs$core$async$state_machine__35886__auto__ = function(state_38232){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35886__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35886__auto____1.call(this,state_38232);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35886__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35886__auto____0;
cljs$core$async$state_machine__35886__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35886__auto____1;
return cljs$core$async$state_machine__35886__auto__;
})()
})();
var state__36089__auto__ = (function (){var statearr_38270 = f__36088__auto__();
(statearr_38270[(6)] = c__36087__auto___39237);

return statearr_38270;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36089__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__38272 = arguments.length;
switch (G__38272) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__36087__auto___39296 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36088__auto__ = (function (){var switch__35885__auto__ = (function (state_38319){
var state_val_38320 = (state_38319[(1)]);
if((state_val_38320 === (7))){
var inst_38315 = (state_38319[(2)]);
var state_38319__$1 = state_38319;
var statearr_38323_39297 = state_38319__$1;
(statearr_38323_39297[(2)] = inst_38315);

(statearr_38323_39297[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38320 === (1))){
var inst_38273 = [];
var inst_38274 = inst_38273;
var inst_38275 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_38319__$1 = (function (){var statearr_38324 = state_38319;
(statearr_38324[(7)] = inst_38274);

(statearr_38324[(8)] = inst_38275);

return statearr_38324;
})();
var statearr_38326_39298 = state_38319__$1;
(statearr_38326_39298[(2)] = null);

(statearr_38326_39298[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38320 === (4))){
var inst_38278 = (state_38319[(9)]);
var inst_38278__$1 = (state_38319[(2)]);
var inst_38279 = (inst_38278__$1 == null);
var inst_38280 = cljs.core.not(inst_38279);
var state_38319__$1 = (function (){var statearr_38328 = state_38319;
(statearr_38328[(9)] = inst_38278__$1);

return statearr_38328;
})();
if(inst_38280){
var statearr_38329_39299 = state_38319__$1;
(statearr_38329_39299[(1)] = (5));

} else {
var statearr_38330_39304 = state_38319__$1;
(statearr_38330_39304[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38320 === (15))){
var inst_38274 = (state_38319[(7)]);
var inst_38307 = cljs.core.vec(inst_38274);
var state_38319__$1 = state_38319;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38319__$1,(18),out,inst_38307);
} else {
if((state_val_38320 === (13))){
var inst_38301 = (state_38319[(2)]);
var state_38319__$1 = state_38319;
var statearr_38333_39315 = state_38319__$1;
(statearr_38333_39315[(2)] = inst_38301);

(statearr_38333_39315[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38320 === (6))){
var inst_38274 = (state_38319[(7)]);
var inst_38303 = inst_38274.length;
var inst_38304 = (inst_38303 > (0));
var state_38319__$1 = state_38319;
if(cljs.core.truth_(inst_38304)){
var statearr_38334_39316 = state_38319__$1;
(statearr_38334_39316[(1)] = (15));

} else {
var statearr_38335_39317 = state_38319__$1;
(statearr_38335_39317[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38320 === (17))){
var inst_38312 = (state_38319[(2)]);
var inst_38313 = cljs.core.async.close_BANG_(out);
var state_38319__$1 = (function (){var statearr_38336 = state_38319;
(statearr_38336[(10)] = inst_38312);

return statearr_38336;
})();
var statearr_38337_39322 = state_38319__$1;
(statearr_38337_39322[(2)] = inst_38313);

(statearr_38337_39322[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38320 === (3))){
var inst_38317 = (state_38319[(2)]);
var state_38319__$1 = state_38319;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38319__$1,inst_38317);
} else {
if((state_val_38320 === (12))){
var inst_38274 = (state_38319[(7)]);
var inst_38294 = cljs.core.vec(inst_38274);
var state_38319__$1 = state_38319;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38319__$1,(14),out,inst_38294);
} else {
if((state_val_38320 === (2))){
var state_38319__$1 = state_38319;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38319__$1,(4),ch);
} else {
if((state_val_38320 === (11))){
var inst_38274 = (state_38319[(7)]);
var inst_38282 = (state_38319[(11)]);
var inst_38278 = (state_38319[(9)]);
var inst_38290 = inst_38274.push(inst_38278);
var tmp38338 = inst_38274;
var inst_38274__$1 = tmp38338;
var inst_38275 = inst_38282;
var state_38319__$1 = (function (){var statearr_38339 = state_38319;
(statearr_38339[(7)] = inst_38274__$1);

(statearr_38339[(8)] = inst_38275);

(statearr_38339[(12)] = inst_38290);

return statearr_38339;
})();
var statearr_38340_39345 = state_38319__$1;
(statearr_38340_39345[(2)] = null);

(statearr_38340_39345[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38320 === (9))){
var inst_38275 = (state_38319[(8)]);
var inst_38286 = cljs.core.keyword_identical_QMARK_(inst_38275,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_38319__$1 = state_38319;
var statearr_38341_39350 = state_38319__$1;
(statearr_38341_39350[(2)] = inst_38286);

(statearr_38341_39350[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38320 === (5))){
var inst_38282 = (state_38319[(11)]);
var inst_38275 = (state_38319[(8)]);
var inst_38278 = (state_38319[(9)]);
var inst_38283 = (state_38319[(13)]);
var inst_38282__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_38278) : f.call(null,inst_38278));
var inst_38283__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_38282__$1,inst_38275);
var state_38319__$1 = (function (){var statearr_38342 = state_38319;
(statearr_38342[(11)] = inst_38282__$1);

(statearr_38342[(13)] = inst_38283__$1);

return statearr_38342;
})();
if(inst_38283__$1){
var statearr_38343_39358 = state_38319__$1;
(statearr_38343_39358[(1)] = (8));

} else {
var statearr_38344_39359 = state_38319__$1;
(statearr_38344_39359[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38320 === (14))){
var inst_38282 = (state_38319[(11)]);
var inst_38278 = (state_38319[(9)]);
var inst_38296 = (state_38319[(2)]);
var inst_38297 = [];
var inst_38298 = inst_38297.push(inst_38278);
var inst_38274 = inst_38297;
var inst_38275 = inst_38282;
var state_38319__$1 = (function (){var statearr_38345 = state_38319;
(statearr_38345[(7)] = inst_38274);

(statearr_38345[(14)] = inst_38298);

(statearr_38345[(8)] = inst_38275);

(statearr_38345[(15)] = inst_38296);

return statearr_38345;
})();
var statearr_38346_39364 = state_38319__$1;
(statearr_38346_39364[(2)] = null);

(statearr_38346_39364[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38320 === (16))){
var state_38319__$1 = state_38319;
var statearr_38347_39368 = state_38319__$1;
(statearr_38347_39368[(2)] = null);

(statearr_38347_39368[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38320 === (10))){
var inst_38288 = (state_38319[(2)]);
var state_38319__$1 = state_38319;
if(cljs.core.truth_(inst_38288)){
var statearr_38348_39377 = state_38319__$1;
(statearr_38348_39377[(1)] = (11));

} else {
var statearr_38349_39378 = state_38319__$1;
(statearr_38349_39378[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38320 === (18))){
var inst_38309 = (state_38319[(2)]);
var state_38319__$1 = state_38319;
var statearr_38350_39379 = state_38319__$1;
(statearr_38350_39379[(2)] = inst_38309);

(statearr_38350_39379[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38320 === (8))){
var inst_38283 = (state_38319[(13)]);
var state_38319__$1 = state_38319;
var statearr_38351_39380 = state_38319__$1;
(statearr_38351_39380[(2)] = inst_38283);

(statearr_38351_39380[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__35886__auto__ = null;
var cljs$core$async$state_machine__35886__auto____0 = (function (){
var statearr_38355 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38355[(0)] = cljs$core$async$state_machine__35886__auto__);

(statearr_38355[(1)] = (1));

return statearr_38355;
});
var cljs$core$async$state_machine__35886__auto____1 = (function (state_38319){
while(true){
var ret_value__35887__auto__ = (function (){try{while(true){
var result__35888__auto__ = switch__35885__auto__(state_38319);
if(cljs.core.keyword_identical_QMARK_(result__35888__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35888__auto__;
}
break;
}
}catch (e38356){var ex__35889__auto__ = e38356;
var statearr_38357_39390 = state_38319;
(statearr_38357_39390[(2)] = ex__35889__auto__);


if(cljs.core.seq((state_38319[(4)]))){
var statearr_38358_39391 = state_38319;
(statearr_38358_39391[(1)] = cljs.core.first((state_38319[(4)])));

} else {
throw ex__35889__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39396 = state_38319;
state_38319 = G__39396;
continue;
} else {
return ret_value__35887__auto__;
}
break;
}
});
cljs$core$async$state_machine__35886__auto__ = function(state_38319){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35886__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35886__auto____1.call(this,state_38319);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35886__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35886__auto____0;
cljs$core$async$state_machine__35886__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35886__auto____1;
return cljs$core$async$state_machine__35886__auto__;
})()
})();
var state__36089__auto__ = (function (){var statearr_38359 = f__36088__auto__();
(statearr_38359[(6)] = c__36087__auto___39296);

return statearr_38359;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36089__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
