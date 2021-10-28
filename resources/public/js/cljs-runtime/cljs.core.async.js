goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__35355 = arguments.length;
switch (G__35355) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35356 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35356 = (function (f,blockable,meta35357){
this.f = f;
this.blockable = blockable;
this.meta35357 = meta35357;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35356.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35358,meta35357__$1){
var self__ = this;
var _35358__$1 = this;
return (new cljs.core.async.t_cljs$core$async35356(self__.f,self__.blockable,meta35357__$1));
}));

(cljs.core.async.t_cljs$core$async35356.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35358){
var self__ = this;
var _35358__$1 = this;
return self__.meta35357;
}));

(cljs.core.async.t_cljs$core$async35356.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35356.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async35356.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async35356.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async35356.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta35357","meta35357",-1682594268,null)], null);
}));

(cljs.core.async.t_cljs$core$async35356.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35356.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35356");

(cljs.core.async.t_cljs$core$async35356.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async35356");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35356.
 */
cljs.core.async.__GT_t_cljs$core$async35356 = (function cljs$core$async$__GT_t_cljs$core$async35356(f__$1,blockable__$1,meta35357){
return (new cljs.core.async.t_cljs$core$async35356(f__$1,blockable__$1,meta35357));
});

}

return (new cljs.core.async.t_cljs$core$async35356(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__35363 = arguments.length;
switch (G__35363) {
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
var G__35371 = arguments.length;
switch (G__35371) {
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
var G__35376 = arguments.length;
switch (G__35376) {
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
var val_37883 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_37883) : fn1.call(null,val_37883));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_37883) : fn1.call(null,val_37883));
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
var G__35381 = arguments.length;
switch (G__35381) {
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
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
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
var n__4613__auto___37885 = n;
var x_37886 = (0);
while(true){
if((x_37886 < n__4613__auto___37885)){
(a[x_37886] = x_37886);

var G__37887 = (x_37886 + (1));
x_37886 = G__37887;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35384 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35384 = (function (flag,meta35385){
this.flag = flag;
this.meta35385 = meta35385;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35384.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35386,meta35385__$1){
var self__ = this;
var _35386__$1 = this;
return (new cljs.core.async.t_cljs$core$async35384(self__.flag,meta35385__$1));
}));

(cljs.core.async.t_cljs$core$async35384.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35386){
var self__ = this;
var _35386__$1 = this;
return self__.meta35385;
}));

(cljs.core.async.t_cljs$core$async35384.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35384.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async35384.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async35384.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async35384.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta35385","meta35385",-560303956,null)], null);
}));

(cljs.core.async.t_cljs$core$async35384.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35384.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35384");

(cljs.core.async.t_cljs$core$async35384.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async35384");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35384.
 */
cljs.core.async.__GT_t_cljs$core$async35384 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async35384(flag__$1,meta35385){
return (new cljs.core.async.t_cljs$core$async35384(flag__$1,meta35385));
});

}

return (new cljs.core.async.t_cljs$core$async35384(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35387 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35387 = (function (flag,cb,meta35388){
this.flag = flag;
this.cb = cb;
this.meta35388 = meta35388;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35387.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35389,meta35388__$1){
var self__ = this;
var _35389__$1 = this;
return (new cljs.core.async.t_cljs$core$async35387(self__.flag,self__.cb,meta35388__$1));
}));

(cljs.core.async.t_cljs$core$async35387.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35389){
var self__ = this;
var _35389__$1 = this;
return self__.meta35388;
}));

(cljs.core.async.t_cljs$core$async35387.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35387.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async35387.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async35387.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async35387.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta35388","meta35388",168075797,null)], null);
}));

(cljs.core.async.t_cljs$core$async35387.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35387.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35387");

(cljs.core.async.t_cljs$core$async35387.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async35387");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35387.
 */
cljs.core.async.__GT_t_cljs$core$async35387 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async35387(flag__$1,cb__$1,meta35388){
return (new cljs.core.async.t_cljs$core$async35387(flag__$1,cb__$1,meta35388));
});

}

return (new cljs.core.async.t_cljs$core$async35387(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__35391_SHARP_){
var G__35393 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__35391_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__35393) : fret.call(null,G__35393));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__35392_SHARP_){
var G__35394 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__35392_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__35394) : fret.call(null,G__35394));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4126__auto__ = wport;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return port;
}
})()], null));
} else {
var G__37903 = (i + (1));
i = G__37903;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4126__auto__ = ret;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4115__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4115__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
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
var args__4742__auto__ = [];
var len__4736__auto___37906 = arguments.length;
var i__4737__auto___37907 = (0);
while(true){
if((i__4737__auto___37907 < len__4736__auto___37906)){
args__4742__auto__.push((arguments[i__4737__auto___37907]));

var G__37908 = (i__4737__auto___37907 + (1));
i__4737__auto___37907 = G__37908;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__35397){
var map__35398 = p__35397;
var map__35398__$1 = (((((!((map__35398 == null))))?(((((map__35398.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35398.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35398):map__35398);
var opts = map__35398__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq35395){
var G__35396 = cljs.core.first(seq35395);
var seq35395__$1 = cljs.core.next(seq35395);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35396,seq35395__$1);
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
var G__35401 = arguments.length;
switch (G__35401) {
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
var c__35275__auto___37913 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35276__auto__ = (function (){var switch__35062__auto__ = (function (state_35552){
var state_val_35554 = (state_35552[(1)]);
if((state_val_35554 === (7))){
var inst_35508 = (state_35552[(2)]);
var state_35552__$1 = state_35552;
var statearr_35604_37915 = state_35552__$1;
(statearr_35604_37915[(2)] = inst_35508);

(statearr_35604_37915[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35554 === (1))){
var state_35552__$1 = state_35552;
var statearr_35612_37916 = state_35552__$1;
(statearr_35612_37916[(2)] = null);

(statearr_35612_37916[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35554 === (4))){
var inst_35453 = (state_35552[(7)]);
var inst_35453__$1 = (state_35552[(2)]);
var inst_35470 = (inst_35453__$1 == null);
var state_35552__$1 = (function (){var statearr_35615 = state_35552;
(statearr_35615[(7)] = inst_35453__$1);

return statearr_35615;
})();
if(cljs.core.truth_(inst_35470)){
var statearr_35616_37918 = state_35552__$1;
(statearr_35616_37918[(1)] = (5));

} else {
var statearr_35619_37919 = state_35552__$1;
(statearr_35619_37919[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35554 === (13))){
var state_35552__$1 = state_35552;
var statearr_35644_37921 = state_35552__$1;
(statearr_35644_37921[(2)] = null);

(statearr_35644_37921[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35554 === (6))){
var inst_35453 = (state_35552[(7)]);
var state_35552__$1 = state_35552;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35552__$1,(11),to,inst_35453);
} else {
if((state_val_35554 === (3))){
var inst_35525 = (state_35552[(2)]);
var state_35552__$1 = state_35552;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35552__$1,inst_35525);
} else {
if((state_val_35554 === (12))){
var state_35552__$1 = state_35552;
var statearr_35710_37922 = state_35552__$1;
(statearr_35710_37922[(2)] = null);

(statearr_35710_37922[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35554 === (2))){
var state_35552__$1 = state_35552;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35552__$1,(4),from);
} else {
if((state_val_35554 === (11))){
var inst_35492 = (state_35552[(2)]);
var state_35552__$1 = state_35552;
if(cljs.core.truth_(inst_35492)){
var statearr_35712_37925 = state_35552__$1;
(statearr_35712_37925[(1)] = (12));

} else {
var statearr_35713_37929 = state_35552__$1;
(statearr_35713_37929[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35554 === (9))){
var state_35552__$1 = state_35552;
var statearr_35715_37930 = state_35552__$1;
(statearr_35715_37930[(2)] = null);

(statearr_35715_37930[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35554 === (5))){
var state_35552__$1 = state_35552;
if(cljs.core.truth_(close_QMARK_)){
var statearr_35725_37931 = state_35552__$1;
(statearr_35725_37931[(1)] = (8));

} else {
var statearr_35730_37932 = state_35552__$1;
(statearr_35730_37932[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35554 === (14))){
var inst_35506 = (state_35552[(2)]);
var state_35552__$1 = state_35552;
var statearr_35733_37935 = state_35552__$1;
(statearr_35733_37935[(2)] = inst_35506);

(statearr_35733_37935[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35554 === (10))){
var inst_35489 = (state_35552[(2)]);
var state_35552__$1 = state_35552;
var statearr_35735_37936 = state_35552__$1;
(statearr_35735_37936[(2)] = inst_35489);

(statearr_35735_37936[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35554 === (8))){
var inst_35481 = cljs.core.async.close_BANG_(to);
var state_35552__$1 = state_35552;
var statearr_35737_37937 = state_35552__$1;
(statearr_35737_37937[(2)] = inst_35481);

(statearr_35737_37937[(1)] = (10));


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
var cljs$core$async$state_machine__35063__auto__ = null;
var cljs$core$async$state_machine__35063__auto____0 = (function (){
var statearr_35739 = [null,null,null,null,null,null,null,null];
(statearr_35739[(0)] = cljs$core$async$state_machine__35063__auto__);

(statearr_35739[(1)] = (1));

return statearr_35739;
});
var cljs$core$async$state_machine__35063__auto____1 = (function (state_35552){
while(true){
var ret_value__35064__auto__ = (function (){try{while(true){
var result__35065__auto__ = switch__35062__auto__(state_35552);
if(cljs.core.keyword_identical_QMARK_(result__35065__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35065__auto__;
}
break;
}
}catch (e35740){var ex__35066__auto__ = e35740;
var statearr_35741_37940 = state_35552;
(statearr_35741_37940[(2)] = ex__35066__auto__);


if(cljs.core.seq((state_35552[(4)]))){
var statearr_35743_37941 = state_35552;
(statearr_35743_37941[(1)] = cljs.core.first((state_35552[(4)])));

} else {
throw ex__35066__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37942 = state_35552;
state_35552 = G__37942;
continue;
} else {
return ret_value__35064__auto__;
}
break;
}
});
cljs$core$async$state_machine__35063__auto__ = function(state_35552){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35063__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35063__auto____1.call(this,state_35552);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35063__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35063__auto____0;
cljs$core$async$state_machine__35063__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35063__auto____1;
return cljs$core$async$state_machine__35063__auto__;
})()
})();
var state__35277__auto__ = (function (){var statearr_35745 = f__35276__auto__();
(statearr_35745[(6)] = c__35275__auto___37913);

return statearr_35745;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35277__auto__);
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
var process = (function (p__35749){
var vec__35750 = p__35749;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35750,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35750,(1),null);
var job = vec__35750;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__35275__auto___37945 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35276__auto__ = (function (){var switch__35062__auto__ = (function (state_35757){
var state_val_35758 = (state_35757[(1)]);
if((state_val_35758 === (1))){
var state_35757__$1 = state_35757;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35757__$1,(2),res,v);
} else {
if((state_val_35758 === (2))){
var inst_35754 = (state_35757[(2)]);
var inst_35755 = cljs.core.async.close_BANG_(res);
var state_35757__$1 = (function (){var statearr_35760 = state_35757;
(statearr_35760[(7)] = inst_35754);

return statearr_35760;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_35757__$1,inst_35755);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__35063__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35063__auto____0 = (function (){
var statearr_35761 = [null,null,null,null,null,null,null,null];
(statearr_35761[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35063__auto__);

(statearr_35761[(1)] = (1));

return statearr_35761;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35063__auto____1 = (function (state_35757){
while(true){
var ret_value__35064__auto__ = (function (){try{while(true){
var result__35065__auto__ = switch__35062__auto__(state_35757);
if(cljs.core.keyword_identical_QMARK_(result__35065__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35065__auto__;
}
break;
}
}catch (e35762){var ex__35066__auto__ = e35762;
var statearr_35763_37947 = state_35757;
(statearr_35763_37947[(2)] = ex__35066__auto__);


if(cljs.core.seq((state_35757[(4)]))){
var statearr_35764_37948 = state_35757;
(statearr_35764_37948[(1)] = cljs.core.first((state_35757[(4)])));

} else {
throw ex__35066__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37949 = state_35757;
state_35757 = G__37949;
continue;
} else {
return ret_value__35064__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35063__auto__ = function(state_35757){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35063__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35063__auto____1.call(this,state_35757);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__35063__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35063__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35063__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35063__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35063__auto__;
})()
})();
var state__35277__auto__ = (function (){var statearr_35765 = f__35276__auto__();
(statearr_35765[(6)] = c__35275__auto___37945);

return statearr_35765;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35277__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__35766){
var vec__35767 = p__35766;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35767,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35767,(1),null);
var job = vec__35767;
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
var n__4613__auto___37952 = n;
var __37953 = (0);
while(true){
if((__37953 < n__4613__auto___37952)){
var G__35770_37954 = type;
var G__35770_37955__$1 = (((G__35770_37954 instanceof cljs.core.Keyword))?G__35770_37954.fqn:null);
switch (G__35770_37955__$1) {
case "compute":
var c__35275__auto___37957 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__37953,c__35275__auto___37957,G__35770_37954,G__35770_37955__$1,n__4613__auto___37952,jobs,results,process,async){
return (function (){
var f__35276__auto__ = (function (){var switch__35062__auto__ = ((function (__37953,c__35275__auto___37957,G__35770_37954,G__35770_37955__$1,n__4613__auto___37952,jobs,results,process,async){
return (function (state_35783){
var state_val_35784 = (state_35783[(1)]);
if((state_val_35784 === (1))){
var state_35783__$1 = state_35783;
var statearr_35785_37958 = state_35783__$1;
(statearr_35785_37958[(2)] = null);

(statearr_35785_37958[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35784 === (2))){
var state_35783__$1 = state_35783;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35783__$1,(4),jobs);
} else {
if((state_val_35784 === (3))){
var inst_35781 = (state_35783[(2)]);
var state_35783__$1 = state_35783;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35783__$1,inst_35781);
} else {
if((state_val_35784 === (4))){
var inst_35773 = (state_35783[(2)]);
var inst_35774 = process(inst_35773);
var state_35783__$1 = state_35783;
if(cljs.core.truth_(inst_35774)){
var statearr_35786_37959 = state_35783__$1;
(statearr_35786_37959[(1)] = (5));

} else {
var statearr_35787_37960 = state_35783__$1;
(statearr_35787_37960[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35784 === (5))){
var state_35783__$1 = state_35783;
var statearr_35788_37961 = state_35783__$1;
(statearr_35788_37961[(2)] = null);

(statearr_35788_37961[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35784 === (6))){
var state_35783__$1 = state_35783;
var statearr_35789_37962 = state_35783__$1;
(statearr_35789_37962[(2)] = null);

(statearr_35789_37962[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35784 === (7))){
var inst_35779 = (state_35783[(2)]);
var state_35783__$1 = state_35783;
var statearr_35790_37965 = state_35783__$1;
(statearr_35790_37965[(2)] = inst_35779);

(statearr_35790_37965[(1)] = (3));


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
});})(__37953,c__35275__auto___37957,G__35770_37954,G__35770_37955__$1,n__4613__auto___37952,jobs,results,process,async))
;
return ((function (__37953,switch__35062__auto__,c__35275__auto___37957,G__35770_37954,G__35770_37955__$1,n__4613__auto___37952,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__35063__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35063__auto____0 = (function (){
var statearr_35791 = [null,null,null,null,null,null,null];
(statearr_35791[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35063__auto__);

(statearr_35791[(1)] = (1));

return statearr_35791;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35063__auto____1 = (function (state_35783){
while(true){
var ret_value__35064__auto__ = (function (){try{while(true){
var result__35065__auto__ = switch__35062__auto__(state_35783);
if(cljs.core.keyword_identical_QMARK_(result__35065__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35065__auto__;
}
break;
}
}catch (e35792){var ex__35066__auto__ = e35792;
var statearr_35793_37973 = state_35783;
(statearr_35793_37973[(2)] = ex__35066__auto__);


if(cljs.core.seq((state_35783[(4)]))){
var statearr_35794_37974 = state_35783;
(statearr_35794_37974[(1)] = cljs.core.first((state_35783[(4)])));

} else {
throw ex__35066__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37975 = state_35783;
state_35783 = G__37975;
continue;
} else {
return ret_value__35064__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35063__auto__ = function(state_35783){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35063__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35063__auto____1.call(this,state_35783);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__35063__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35063__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35063__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35063__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35063__auto__;
})()
;})(__37953,switch__35062__auto__,c__35275__auto___37957,G__35770_37954,G__35770_37955__$1,n__4613__auto___37952,jobs,results,process,async))
})();
var state__35277__auto__ = (function (){var statearr_35795 = f__35276__auto__();
(statearr_35795[(6)] = c__35275__auto___37957);

return statearr_35795;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35277__auto__);
});})(__37953,c__35275__auto___37957,G__35770_37954,G__35770_37955__$1,n__4613__auto___37952,jobs,results,process,async))
);


break;
case "async":
var c__35275__auto___37976 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__37953,c__35275__auto___37976,G__35770_37954,G__35770_37955__$1,n__4613__auto___37952,jobs,results,process,async){
return (function (){
var f__35276__auto__ = (function (){var switch__35062__auto__ = ((function (__37953,c__35275__auto___37976,G__35770_37954,G__35770_37955__$1,n__4613__auto___37952,jobs,results,process,async){
return (function (state_35808){
var state_val_35809 = (state_35808[(1)]);
if((state_val_35809 === (1))){
var state_35808__$1 = state_35808;
var statearr_35811_37983 = state_35808__$1;
(statearr_35811_37983[(2)] = null);

(statearr_35811_37983[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35809 === (2))){
var state_35808__$1 = state_35808;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35808__$1,(4),jobs);
} else {
if((state_val_35809 === (3))){
var inst_35806 = (state_35808[(2)]);
var state_35808__$1 = state_35808;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35808__$1,inst_35806);
} else {
if((state_val_35809 === (4))){
var inst_35798 = (state_35808[(2)]);
var inst_35799 = async(inst_35798);
var state_35808__$1 = state_35808;
if(cljs.core.truth_(inst_35799)){
var statearr_35812_37985 = state_35808__$1;
(statearr_35812_37985[(1)] = (5));

} else {
var statearr_35813_37986 = state_35808__$1;
(statearr_35813_37986[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35809 === (5))){
var state_35808__$1 = state_35808;
var statearr_35814_37991 = state_35808__$1;
(statearr_35814_37991[(2)] = null);

(statearr_35814_37991[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35809 === (6))){
var state_35808__$1 = state_35808;
var statearr_35815_37994 = state_35808__$1;
(statearr_35815_37994[(2)] = null);

(statearr_35815_37994[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35809 === (7))){
var inst_35804 = (state_35808[(2)]);
var state_35808__$1 = state_35808;
var statearr_35817_37995 = state_35808__$1;
(statearr_35817_37995[(2)] = inst_35804);

(statearr_35817_37995[(1)] = (3));


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
});})(__37953,c__35275__auto___37976,G__35770_37954,G__35770_37955__$1,n__4613__auto___37952,jobs,results,process,async))
;
return ((function (__37953,switch__35062__auto__,c__35275__auto___37976,G__35770_37954,G__35770_37955__$1,n__4613__auto___37952,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__35063__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35063__auto____0 = (function (){
var statearr_35819 = [null,null,null,null,null,null,null];
(statearr_35819[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35063__auto__);

(statearr_35819[(1)] = (1));

return statearr_35819;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35063__auto____1 = (function (state_35808){
while(true){
var ret_value__35064__auto__ = (function (){try{while(true){
var result__35065__auto__ = switch__35062__auto__(state_35808);
if(cljs.core.keyword_identical_QMARK_(result__35065__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35065__auto__;
}
break;
}
}catch (e35821){var ex__35066__auto__ = e35821;
var statearr_35822_38000 = state_35808;
(statearr_35822_38000[(2)] = ex__35066__auto__);


if(cljs.core.seq((state_35808[(4)]))){
var statearr_35823_38002 = state_35808;
(statearr_35823_38002[(1)] = cljs.core.first((state_35808[(4)])));

} else {
throw ex__35066__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38004 = state_35808;
state_35808 = G__38004;
continue;
} else {
return ret_value__35064__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35063__auto__ = function(state_35808){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35063__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35063__auto____1.call(this,state_35808);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__35063__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35063__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35063__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35063__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35063__auto__;
})()
;})(__37953,switch__35062__auto__,c__35275__auto___37976,G__35770_37954,G__35770_37955__$1,n__4613__auto___37952,jobs,results,process,async))
})();
var state__35277__auto__ = (function (){var statearr_35824 = f__35276__auto__();
(statearr_35824[(6)] = c__35275__auto___37976);

return statearr_35824;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35277__auto__);
});})(__37953,c__35275__auto___37976,G__35770_37954,G__35770_37955__$1,n__4613__auto___37952,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35770_37955__$1)].join('')));

}

var G__38006 = (__37953 + (1));
__37953 = G__38006;
continue;
} else {
}
break;
}

var c__35275__auto___38007 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35276__auto__ = (function (){var switch__35062__auto__ = (function (state_35847){
var state_val_35848 = (state_35847[(1)]);
if((state_val_35848 === (7))){
var inst_35842 = (state_35847[(2)]);
var state_35847__$1 = state_35847;
var statearr_35851_38012 = state_35847__$1;
(statearr_35851_38012[(2)] = inst_35842);

(statearr_35851_38012[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35848 === (1))){
var state_35847__$1 = state_35847;
var statearr_35852_38013 = state_35847__$1;
(statearr_35852_38013[(2)] = null);

(statearr_35852_38013[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35848 === (4))){
var inst_35827 = (state_35847[(7)]);
var inst_35827__$1 = (state_35847[(2)]);
var inst_35828 = (inst_35827__$1 == null);
var state_35847__$1 = (function (){var statearr_35853 = state_35847;
(statearr_35853[(7)] = inst_35827__$1);

return statearr_35853;
})();
if(cljs.core.truth_(inst_35828)){
var statearr_35854_38014 = state_35847__$1;
(statearr_35854_38014[(1)] = (5));

} else {
var statearr_35855_38015 = state_35847__$1;
(statearr_35855_38015[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35848 === (6))){
var inst_35827 = (state_35847[(7)]);
var inst_35832 = (state_35847[(8)]);
var inst_35832__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_35833 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_35834 = [inst_35827,inst_35832__$1];
var inst_35835 = (new cljs.core.PersistentVector(null,2,(5),inst_35833,inst_35834,null));
var state_35847__$1 = (function (){var statearr_35856 = state_35847;
(statearr_35856[(8)] = inst_35832__$1);

return statearr_35856;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35847__$1,(8),jobs,inst_35835);
} else {
if((state_val_35848 === (3))){
var inst_35844 = (state_35847[(2)]);
var state_35847__$1 = state_35847;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35847__$1,inst_35844);
} else {
if((state_val_35848 === (2))){
var state_35847__$1 = state_35847;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35847__$1,(4),from);
} else {
if((state_val_35848 === (9))){
var inst_35839 = (state_35847[(2)]);
var state_35847__$1 = (function (){var statearr_35857 = state_35847;
(statearr_35857[(9)] = inst_35839);

return statearr_35857;
})();
var statearr_35858_38016 = state_35847__$1;
(statearr_35858_38016[(2)] = null);

(statearr_35858_38016[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35848 === (5))){
var inst_35830 = cljs.core.async.close_BANG_(jobs);
var state_35847__$1 = state_35847;
var statearr_35859_38017 = state_35847__$1;
(statearr_35859_38017[(2)] = inst_35830);

(statearr_35859_38017[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35848 === (8))){
var inst_35832 = (state_35847[(8)]);
var inst_35837 = (state_35847[(2)]);
var state_35847__$1 = (function (){var statearr_35860 = state_35847;
(statearr_35860[(10)] = inst_35837);

return statearr_35860;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35847__$1,(9),results,inst_35832);
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
var cljs$core$async$pipeline_STAR__$_state_machine__35063__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35063__auto____0 = (function (){
var statearr_35861 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35861[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35063__auto__);

(statearr_35861[(1)] = (1));

return statearr_35861;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35063__auto____1 = (function (state_35847){
while(true){
var ret_value__35064__auto__ = (function (){try{while(true){
var result__35065__auto__ = switch__35062__auto__(state_35847);
if(cljs.core.keyword_identical_QMARK_(result__35065__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35065__auto__;
}
break;
}
}catch (e35862){var ex__35066__auto__ = e35862;
var statearr_35863_38020 = state_35847;
(statearr_35863_38020[(2)] = ex__35066__auto__);


if(cljs.core.seq((state_35847[(4)]))){
var statearr_35864_38021 = state_35847;
(statearr_35864_38021[(1)] = cljs.core.first((state_35847[(4)])));

} else {
throw ex__35066__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38022 = state_35847;
state_35847 = G__38022;
continue;
} else {
return ret_value__35064__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35063__auto__ = function(state_35847){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35063__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35063__auto____1.call(this,state_35847);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__35063__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35063__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35063__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35063__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35063__auto__;
})()
})();
var state__35277__auto__ = (function (){var statearr_35865 = f__35276__auto__();
(statearr_35865[(6)] = c__35275__auto___38007);

return statearr_35865;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35277__auto__);
}));


var c__35275__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35276__auto__ = (function (){var switch__35062__auto__ = (function (state_35904){
var state_val_35905 = (state_35904[(1)]);
if((state_val_35905 === (7))){
var inst_35900 = (state_35904[(2)]);
var state_35904__$1 = state_35904;
var statearr_35906_38025 = state_35904__$1;
(statearr_35906_38025[(2)] = inst_35900);

(statearr_35906_38025[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35905 === (20))){
var state_35904__$1 = state_35904;
var statearr_35907_38026 = state_35904__$1;
(statearr_35907_38026[(2)] = null);

(statearr_35907_38026[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35905 === (1))){
var state_35904__$1 = state_35904;
var statearr_35908_38027 = state_35904__$1;
(statearr_35908_38027[(2)] = null);

(statearr_35908_38027[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35905 === (4))){
var inst_35868 = (state_35904[(7)]);
var inst_35868__$1 = (state_35904[(2)]);
var inst_35869 = (inst_35868__$1 == null);
var state_35904__$1 = (function (){var statearr_35909 = state_35904;
(statearr_35909[(7)] = inst_35868__$1);

return statearr_35909;
})();
if(cljs.core.truth_(inst_35869)){
var statearr_35910_38032 = state_35904__$1;
(statearr_35910_38032[(1)] = (5));

} else {
var statearr_35911_38033 = state_35904__$1;
(statearr_35911_38033[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35905 === (15))){
var inst_35882 = (state_35904[(8)]);
var state_35904__$1 = state_35904;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35904__$1,(18),to,inst_35882);
} else {
if((state_val_35905 === (21))){
var inst_35895 = (state_35904[(2)]);
var state_35904__$1 = state_35904;
var statearr_35912_38034 = state_35904__$1;
(statearr_35912_38034[(2)] = inst_35895);

(statearr_35912_38034[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35905 === (13))){
var inst_35897 = (state_35904[(2)]);
var state_35904__$1 = (function (){var statearr_35914 = state_35904;
(statearr_35914[(9)] = inst_35897);

return statearr_35914;
})();
var statearr_35915_38035 = state_35904__$1;
(statearr_35915_38035[(2)] = null);

(statearr_35915_38035[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35905 === (6))){
var inst_35868 = (state_35904[(7)]);
var state_35904__$1 = state_35904;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35904__$1,(11),inst_35868);
} else {
if((state_val_35905 === (17))){
var inst_35890 = (state_35904[(2)]);
var state_35904__$1 = state_35904;
if(cljs.core.truth_(inst_35890)){
var statearr_35916_38036 = state_35904__$1;
(statearr_35916_38036[(1)] = (19));

} else {
var statearr_35917_38037 = state_35904__$1;
(statearr_35917_38037[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35905 === (3))){
var inst_35902 = (state_35904[(2)]);
var state_35904__$1 = state_35904;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35904__$1,inst_35902);
} else {
if((state_val_35905 === (12))){
var inst_35878 = (state_35904[(10)]);
var state_35904__$1 = state_35904;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35904__$1,(14),inst_35878);
} else {
if((state_val_35905 === (2))){
var state_35904__$1 = state_35904;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35904__$1,(4),results);
} else {
if((state_val_35905 === (19))){
var state_35904__$1 = state_35904;
var statearr_35920_38044 = state_35904__$1;
(statearr_35920_38044[(2)] = null);

(statearr_35920_38044[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35905 === (11))){
var inst_35878 = (state_35904[(2)]);
var state_35904__$1 = (function (){var statearr_35921 = state_35904;
(statearr_35921[(10)] = inst_35878);

return statearr_35921;
})();
var statearr_35922_38054 = state_35904__$1;
(statearr_35922_38054[(2)] = null);

(statearr_35922_38054[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35905 === (9))){
var state_35904__$1 = state_35904;
var statearr_35923_38056 = state_35904__$1;
(statearr_35923_38056[(2)] = null);

(statearr_35923_38056[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35905 === (5))){
var state_35904__$1 = state_35904;
if(cljs.core.truth_(close_QMARK_)){
var statearr_35924_38061 = state_35904__$1;
(statearr_35924_38061[(1)] = (8));

} else {
var statearr_35925_38062 = state_35904__$1;
(statearr_35925_38062[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35905 === (14))){
var inst_35882 = (state_35904[(8)]);
var inst_35882__$1 = (state_35904[(2)]);
var inst_35883 = (inst_35882__$1 == null);
var inst_35884 = cljs.core.not(inst_35883);
var state_35904__$1 = (function (){var statearr_35926 = state_35904;
(statearr_35926[(8)] = inst_35882__$1);

return statearr_35926;
})();
if(inst_35884){
var statearr_35927_38067 = state_35904__$1;
(statearr_35927_38067[(1)] = (15));

} else {
var statearr_35928_38068 = state_35904__$1;
(statearr_35928_38068[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35905 === (16))){
var state_35904__$1 = state_35904;
var statearr_35929_38069 = state_35904__$1;
(statearr_35929_38069[(2)] = false);

(statearr_35929_38069[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35905 === (10))){
var inst_35875 = (state_35904[(2)]);
var state_35904__$1 = state_35904;
var statearr_35930_38074 = state_35904__$1;
(statearr_35930_38074[(2)] = inst_35875);

(statearr_35930_38074[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35905 === (18))){
var inst_35887 = (state_35904[(2)]);
var state_35904__$1 = state_35904;
var statearr_35933_38081 = state_35904__$1;
(statearr_35933_38081[(2)] = inst_35887);

(statearr_35933_38081[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35905 === (8))){
var inst_35872 = cljs.core.async.close_BANG_(to);
var state_35904__$1 = state_35904;
var statearr_35934_38085 = state_35904__$1;
(statearr_35934_38085[(2)] = inst_35872);

(statearr_35934_38085[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__35063__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35063__auto____0 = (function (){
var statearr_35935 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35935[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35063__auto__);

(statearr_35935[(1)] = (1));

return statearr_35935;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35063__auto____1 = (function (state_35904){
while(true){
var ret_value__35064__auto__ = (function (){try{while(true){
var result__35065__auto__ = switch__35062__auto__(state_35904);
if(cljs.core.keyword_identical_QMARK_(result__35065__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35065__auto__;
}
break;
}
}catch (e35936){var ex__35066__auto__ = e35936;
var statearr_35937_38109 = state_35904;
(statearr_35937_38109[(2)] = ex__35066__auto__);


if(cljs.core.seq((state_35904[(4)]))){
var statearr_35938_38114 = state_35904;
(statearr_35938_38114[(1)] = cljs.core.first((state_35904[(4)])));

} else {
throw ex__35066__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38116 = state_35904;
state_35904 = G__38116;
continue;
} else {
return ret_value__35064__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35063__auto__ = function(state_35904){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35063__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35063__auto____1.call(this,state_35904);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__35063__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35063__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35063__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35063__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35063__auto__;
})()
})();
var state__35277__auto__ = (function (){var statearr_35939 = f__35276__auto__();
(statearr_35939[(6)] = c__35275__auto__);

return statearr_35939;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35277__auto__);
}));

return c__35275__auto__;
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
var G__35941 = arguments.length;
switch (G__35941) {
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
var G__35945 = arguments.length;
switch (G__35945) {
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
var G__35947 = arguments.length;
switch (G__35947) {
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
var c__35275__auto___38142 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35276__auto__ = (function (){var switch__35062__auto__ = (function (state_35973){
var state_val_35974 = (state_35973[(1)]);
if((state_val_35974 === (7))){
var inst_35969 = (state_35973[(2)]);
var state_35973__$1 = state_35973;
var statearr_35975_38143 = state_35973__$1;
(statearr_35975_38143[(2)] = inst_35969);

(statearr_35975_38143[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35974 === (1))){
var state_35973__$1 = state_35973;
var statearr_35976_38144 = state_35973__$1;
(statearr_35976_38144[(2)] = null);

(statearr_35976_38144[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35974 === (4))){
var inst_35950 = (state_35973[(7)]);
var inst_35950__$1 = (state_35973[(2)]);
var inst_35951 = (inst_35950__$1 == null);
var state_35973__$1 = (function (){var statearr_35977 = state_35973;
(statearr_35977[(7)] = inst_35950__$1);

return statearr_35977;
})();
if(cljs.core.truth_(inst_35951)){
var statearr_35978_38145 = state_35973__$1;
(statearr_35978_38145[(1)] = (5));

} else {
var statearr_35979_38146 = state_35973__$1;
(statearr_35979_38146[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35974 === (13))){
var state_35973__$1 = state_35973;
var statearr_35980_38148 = state_35973__$1;
(statearr_35980_38148[(2)] = null);

(statearr_35980_38148[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35974 === (6))){
var inst_35950 = (state_35973[(7)]);
var inst_35956 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_35950) : p.call(null,inst_35950));
var state_35973__$1 = state_35973;
if(cljs.core.truth_(inst_35956)){
var statearr_35981_38149 = state_35973__$1;
(statearr_35981_38149[(1)] = (9));

} else {
var statearr_35982_38150 = state_35973__$1;
(statearr_35982_38150[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35974 === (3))){
var inst_35971 = (state_35973[(2)]);
var state_35973__$1 = state_35973;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35973__$1,inst_35971);
} else {
if((state_val_35974 === (12))){
var state_35973__$1 = state_35973;
var statearr_35985_38152 = state_35973__$1;
(statearr_35985_38152[(2)] = null);

(statearr_35985_38152[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35974 === (2))){
var state_35973__$1 = state_35973;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35973__$1,(4),ch);
} else {
if((state_val_35974 === (11))){
var inst_35950 = (state_35973[(7)]);
var inst_35960 = (state_35973[(2)]);
var state_35973__$1 = state_35973;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35973__$1,(8),inst_35960,inst_35950);
} else {
if((state_val_35974 === (9))){
var state_35973__$1 = state_35973;
var statearr_35987_38157 = state_35973__$1;
(statearr_35987_38157[(2)] = tc);

(statearr_35987_38157[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35974 === (5))){
var inst_35953 = cljs.core.async.close_BANG_(tc);
var inst_35954 = cljs.core.async.close_BANG_(fc);
var state_35973__$1 = (function (){var statearr_35988 = state_35973;
(statearr_35988[(8)] = inst_35953);

return statearr_35988;
})();
var statearr_35989_38162 = state_35973__$1;
(statearr_35989_38162[(2)] = inst_35954);

(statearr_35989_38162[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35974 === (14))){
var inst_35967 = (state_35973[(2)]);
var state_35973__$1 = state_35973;
var statearr_35993_38164 = state_35973__$1;
(statearr_35993_38164[(2)] = inst_35967);

(statearr_35993_38164[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35974 === (10))){
var state_35973__$1 = state_35973;
var statearr_35994_38166 = state_35973__$1;
(statearr_35994_38166[(2)] = fc);

(statearr_35994_38166[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35974 === (8))){
var inst_35962 = (state_35973[(2)]);
var state_35973__$1 = state_35973;
if(cljs.core.truth_(inst_35962)){
var statearr_35995_38167 = state_35973__$1;
(statearr_35995_38167[(1)] = (12));

} else {
var statearr_35999_38168 = state_35973__$1;
(statearr_35999_38168[(1)] = (13));

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
var cljs$core$async$state_machine__35063__auto__ = null;
var cljs$core$async$state_machine__35063__auto____0 = (function (){
var statearr_36000 = [null,null,null,null,null,null,null,null,null];
(statearr_36000[(0)] = cljs$core$async$state_machine__35063__auto__);

(statearr_36000[(1)] = (1));

return statearr_36000;
});
var cljs$core$async$state_machine__35063__auto____1 = (function (state_35973){
while(true){
var ret_value__35064__auto__ = (function (){try{while(true){
var result__35065__auto__ = switch__35062__auto__(state_35973);
if(cljs.core.keyword_identical_QMARK_(result__35065__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35065__auto__;
}
break;
}
}catch (e36001){var ex__35066__auto__ = e36001;
var statearr_36002_38170 = state_35973;
(statearr_36002_38170[(2)] = ex__35066__auto__);


if(cljs.core.seq((state_35973[(4)]))){
var statearr_36003_38171 = state_35973;
(statearr_36003_38171[(1)] = cljs.core.first((state_35973[(4)])));

} else {
throw ex__35066__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38172 = state_35973;
state_35973 = G__38172;
continue;
} else {
return ret_value__35064__auto__;
}
break;
}
});
cljs$core$async$state_machine__35063__auto__ = function(state_35973){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35063__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35063__auto____1.call(this,state_35973);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35063__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35063__auto____0;
cljs$core$async$state_machine__35063__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35063__auto____1;
return cljs$core$async$state_machine__35063__auto__;
})()
})();
var state__35277__auto__ = (function (){var statearr_36004 = f__35276__auto__();
(statearr_36004[(6)] = c__35275__auto___38142);

return statearr_36004;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35277__auto__);
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
var c__35275__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35276__auto__ = (function (){var switch__35062__auto__ = (function (state_36046){
var state_val_36047 = (state_36046[(1)]);
if((state_val_36047 === (7))){
var inst_36038 = (state_36046[(2)]);
var state_36046__$1 = state_36046;
var statearr_36061_38180 = state_36046__$1;
(statearr_36061_38180[(2)] = inst_36038);

(statearr_36061_38180[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36047 === (1))){
var inst_36010 = init;
var inst_36014 = inst_36010;
var state_36046__$1 = (function (){var statearr_36064 = state_36046;
(statearr_36064[(7)] = inst_36014);

return statearr_36064;
})();
var statearr_36066_38183 = state_36046__$1;
(statearr_36066_38183[(2)] = null);

(statearr_36066_38183[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36047 === (4))){
var inst_36018 = (state_36046[(8)]);
var inst_36018__$1 = (state_36046[(2)]);
var inst_36021 = (inst_36018__$1 == null);
var state_36046__$1 = (function (){var statearr_36072 = state_36046;
(statearr_36072[(8)] = inst_36018__$1);

return statearr_36072;
})();
if(cljs.core.truth_(inst_36021)){
var statearr_36076_38190 = state_36046__$1;
(statearr_36076_38190[(1)] = (5));

} else {
var statearr_36077_38194 = state_36046__$1;
(statearr_36077_38194[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36047 === (6))){
var inst_36025 = (state_36046[(9)]);
var inst_36014 = (state_36046[(7)]);
var inst_36018 = (state_36046[(8)]);
var inst_36025__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_36014,inst_36018) : f.call(null,inst_36014,inst_36018));
var inst_36027 = cljs.core.reduced_QMARK_(inst_36025__$1);
var state_36046__$1 = (function (){var statearr_36082 = state_36046;
(statearr_36082[(9)] = inst_36025__$1);

return statearr_36082;
})();
if(inst_36027){
var statearr_36084_38195 = state_36046__$1;
(statearr_36084_38195[(1)] = (8));

} else {
var statearr_36086_38196 = state_36046__$1;
(statearr_36086_38196[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36047 === (3))){
var inst_36040 = (state_36046[(2)]);
var state_36046__$1 = state_36046;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36046__$1,inst_36040);
} else {
if((state_val_36047 === (2))){
var state_36046__$1 = state_36046;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36046__$1,(4),ch);
} else {
if((state_val_36047 === (9))){
var inst_36025 = (state_36046[(9)]);
var inst_36014 = inst_36025;
var state_36046__$1 = (function (){var statearr_36094 = state_36046;
(statearr_36094[(7)] = inst_36014);

return statearr_36094;
})();
var statearr_36097_38199 = state_36046__$1;
(statearr_36097_38199[(2)] = null);

(statearr_36097_38199[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36047 === (5))){
var inst_36014 = (state_36046[(7)]);
var state_36046__$1 = state_36046;
var statearr_36101_38200 = state_36046__$1;
(statearr_36101_38200[(2)] = inst_36014);

(statearr_36101_38200[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36047 === (10))){
var inst_36036 = (state_36046[(2)]);
var state_36046__$1 = state_36046;
var statearr_36105_38205 = state_36046__$1;
(statearr_36105_38205[(2)] = inst_36036);

(statearr_36105_38205[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36047 === (8))){
var inst_36025 = (state_36046[(9)]);
var inst_36031 = cljs.core.deref(inst_36025);
var state_36046__$1 = state_36046;
var statearr_36106_38206 = state_36046__$1;
(statearr_36106_38206[(2)] = inst_36031);

(statearr_36106_38206[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__35063__auto__ = null;
var cljs$core$async$reduce_$_state_machine__35063__auto____0 = (function (){
var statearr_36108 = [null,null,null,null,null,null,null,null,null,null];
(statearr_36108[(0)] = cljs$core$async$reduce_$_state_machine__35063__auto__);

(statearr_36108[(1)] = (1));

return statearr_36108;
});
var cljs$core$async$reduce_$_state_machine__35063__auto____1 = (function (state_36046){
while(true){
var ret_value__35064__auto__ = (function (){try{while(true){
var result__35065__auto__ = switch__35062__auto__(state_36046);
if(cljs.core.keyword_identical_QMARK_(result__35065__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35065__auto__;
}
break;
}
}catch (e36112){var ex__35066__auto__ = e36112;
var statearr_36113_38214 = state_36046;
(statearr_36113_38214[(2)] = ex__35066__auto__);


if(cljs.core.seq((state_36046[(4)]))){
var statearr_36114_38215 = state_36046;
(statearr_36114_38215[(1)] = cljs.core.first((state_36046[(4)])));

} else {
throw ex__35066__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38216 = state_36046;
state_36046 = G__38216;
continue;
} else {
return ret_value__35064__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__35063__auto__ = function(state_36046){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__35063__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__35063__auto____1.call(this,state_36046);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__35063__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__35063__auto____0;
cljs$core$async$reduce_$_state_machine__35063__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__35063__auto____1;
return cljs$core$async$reduce_$_state_machine__35063__auto__;
})()
})();
var state__35277__auto__ = (function (){var statearr_36116 = f__35276__auto__();
(statearr_36116[(6)] = c__35275__auto__);

return statearr_36116;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35277__auto__);
}));

return c__35275__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__35275__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35276__auto__ = (function (){var switch__35062__auto__ = (function (state_36129){
var state_val_36130 = (state_36129[(1)]);
if((state_val_36130 === (1))){
var inst_36121 = cljs.core.async.reduce(f__$1,init,ch);
var state_36129__$1 = state_36129;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36129__$1,(2),inst_36121);
} else {
if((state_val_36130 === (2))){
var inst_36123 = (state_36129[(2)]);
var inst_36124 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_36123) : f__$1.call(null,inst_36123));
var state_36129__$1 = state_36129;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36129__$1,inst_36124);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__35063__auto__ = null;
var cljs$core$async$transduce_$_state_machine__35063__auto____0 = (function (){
var statearr_36135 = [null,null,null,null,null,null,null];
(statearr_36135[(0)] = cljs$core$async$transduce_$_state_machine__35063__auto__);

(statearr_36135[(1)] = (1));

return statearr_36135;
});
var cljs$core$async$transduce_$_state_machine__35063__auto____1 = (function (state_36129){
while(true){
var ret_value__35064__auto__ = (function (){try{while(true){
var result__35065__auto__ = switch__35062__auto__(state_36129);
if(cljs.core.keyword_identical_QMARK_(result__35065__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35065__auto__;
}
break;
}
}catch (e36136){var ex__35066__auto__ = e36136;
var statearr_36137_38231 = state_36129;
(statearr_36137_38231[(2)] = ex__35066__auto__);


if(cljs.core.seq((state_36129[(4)]))){
var statearr_36140_38232 = state_36129;
(statearr_36140_38232[(1)] = cljs.core.first((state_36129[(4)])));

} else {
throw ex__35066__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38233 = state_36129;
state_36129 = G__38233;
continue;
} else {
return ret_value__35064__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__35063__auto__ = function(state_36129){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__35063__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__35063__auto____1.call(this,state_36129);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__35063__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__35063__auto____0;
cljs$core$async$transduce_$_state_machine__35063__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__35063__auto____1;
return cljs$core$async$transduce_$_state_machine__35063__auto__;
})()
})();
var state__35277__auto__ = (function (){var statearr_36143 = f__35276__auto__();
(statearr_36143[(6)] = c__35275__auto__);

return statearr_36143;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35277__auto__);
}));

return c__35275__auto__;
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
var G__36147 = arguments.length;
switch (G__36147) {
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
var c__35275__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35276__auto__ = (function (){var switch__35062__auto__ = (function (state_36180){
var state_val_36181 = (state_36180[(1)]);
if((state_val_36181 === (7))){
var inst_36161 = (state_36180[(2)]);
var state_36180__$1 = state_36180;
var statearr_36186_38235 = state_36180__$1;
(statearr_36186_38235[(2)] = inst_36161);

(statearr_36186_38235[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36181 === (1))){
var inst_36152 = cljs.core.seq(coll);
var inst_36153 = inst_36152;
var state_36180__$1 = (function (){var statearr_36188 = state_36180;
(statearr_36188[(7)] = inst_36153);

return statearr_36188;
})();
var statearr_36189_38237 = state_36180__$1;
(statearr_36189_38237[(2)] = null);

(statearr_36189_38237[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36181 === (4))){
var inst_36153 = (state_36180[(7)]);
var inst_36159 = cljs.core.first(inst_36153);
var state_36180__$1 = state_36180;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36180__$1,(7),ch,inst_36159);
} else {
if((state_val_36181 === (13))){
var inst_36173 = (state_36180[(2)]);
var state_36180__$1 = state_36180;
var statearr_36193_38239 = state_36180__$1;
(statearr_36193_38239[(2)] = inst_36173);

(statearr_36193_38239[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36181 === (6))){
var inst_36164 = (state_36180[(2)]);
var state_36180__$1 = state_36180;
if(cljs.core.truth_(inst_36164)){
var statearr_36194_38240 = state_36180__$1;
(statearr_36194_38240[(1)] = (8));

} else {
var statearr_36196_38241 = state_36180__$1;
(statearr_36196_38241[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36181 === (3))){
var inst_36177 = (state_36180[(2)]);
var state_36180__$1 = state_36180;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36180__$1,inst_36177);
} else {
if((state_val_36181 === (12))){
var state_36180__$1 = state_36180;
var statearr_36197_38242 = state_36180__$1;
(statearr_36197_38242[(2)] = null);

(statearr_36197_38242[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36181 === (2))){
var inst_36153 = (state_36180[(7)]);
var state_36180__$1 = state_36180;
if(cljs.core.truth_(inst_36153)){
var statearr_36201_38269 = state_36180__$1;
(statearr_36201_38269[(1)] = (4));

} else {
var statearr_36202_38274 = state_36180__$1;
(statearr_36202_38274[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36181 === (11))){
var inst_36170 = cljs.core.async.close_BANG_(ch);
var state_36180__$1 = state_36180;
var statearr_36203_38280 = state_36180__$1;
(statearr_36203_38280[(2)] = inst_36170);

(statearr_36203_38280[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36181 === (9))){
var state_36180__$1 = state_36180;
if(cljs.core.truth_(close_QMARK_)){
var statearr_36205_38282 = state_36180__$1;
(statearr_36205_38282[(1)] = (11));

} else {
var statearr_36206_38283 = state_36180__$1;
(statearr_36206_38283[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36181 === (5))){
var inst_36153 = (state_36180[(7)]);
var state_36180__$1 = state_36180;
var statearr_36210_38288 = state_36180__$1;
(statearr_36210_38288[(2)] = inst_36153);

(statearr_36210_38288[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36181 === (10))){
var inst_36175 = (state_36180[(2)]);
var state_36180__$1 = state_36180;
var statearr_36211_38307 = state_36180__$1;
(statearr_36211_38307[(2)] = inst_36175);

(statearr_36211_38307[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36181 === (8))){
var inst_36153 = (state_36180[(7)]);
var inst_36166 = cljs.core.next(inst_36153);
var inst_36153__$1 = inst_36166;
var state_36180__$1 = (function (){var statearr_36213 = state_36180;
(statearr_36213[(7)] = inst_36153__$1);

return statearr_36213;
})();
var statearr_36214_38310 = state_36180__$1;
(statearr_36214_38310[(2)] = null);

(statearr_36214_38310[(1)] = (2));


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
var cljs$core$async$state_machine__35063__auto__ = null;
var cljs$core$async$state_machine__35063__auto____0 = (function (){
var statearr_36218 = [null,null,null,null,null,null,null,null];
(statearr_36218[(0)] = cljs$core$async$state_machine__35063__auto__);

(statearr_36218[(1)] = (1));

return statearr_36218;
});
var cljs$core$async$state_machine__35063__auto____1 = (function (state_36180){
while(true){
var ret_value__35064__auto__ = (function (){try{while(true){
var result__35065__auto__ = switch__35062__auto__(state_36180);
if(cljs.core.keyword_identical_QMARK_(result__35065__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35065__auto__;
}
break;
}
}catch (e36219){var ex__35066__auto__ = e36219;
var statearr_36220_38339 = state_36180;
(statearr_36220_38339[(2)] = ex__35066__auto__);


if(cljs.core.seq((state_36180[(4)]))){
var statearr_36222_38344 = state_36180;
(statearr_36222_38344[(1)] = cljs.core.first((state_36180[(4)])));

} else {
throw ex__35066__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38351 = state_36180;
state_36180 = G__38351;
continue;
} else {
return ret_value__35064__auto__;
}
break;
}
});
cljs$core$async$state_machine__35063__auto__ = function(state_36180){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35063__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35063__auto____1.call(this,state_36180);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35063__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35063__auto____0;
cljs$core$async$state_machine__35063__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35063__auto____1;
return cljs$core$async$state_machine__35063__auto__;
})()
})();
var state__35277__auto__ = (function (){var statearr_36226 = f__35276__auto__();
(statearr_36226[(6)] = c__35275__auto__);

return statearr_36226;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35277__auto__);
}));

return c__35275__auto__;
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
var G__36233 = arguments.length;
switch (G__36233) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_38375 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_38375(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_38377 = (function (m,ch,close_QMARK_){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4429__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4426__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_38377(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_38378 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_38378(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_38379 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_38379(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36259 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36259 = (function (ch,cs,meta36260){
this.ch = ch;
this.cs = cs;
this.meta36260 = meta36260;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36259.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36261,meta36260__$1){
var self__ = this;
var _36261__$1 = this;
return (new cljs.core.async.t_cljs$core$async36259(self__.ch,self__.cs,meta36260__$1));
}));

(cljs.core.async.t_cljs$core$async36259.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36261){
var self__ = this;
var _36261__$1 = this;
return self__.meta36260;
}));

(cljs.core.async.t_cljs$core$async36259.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36259.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async36259.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36259.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async36259.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async36259.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async36259.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta36260","meta36260",-1600977011,null)], null);
}));

(cljs.core.async.t_cljs$core$async36259.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36259.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36259");

(cljs.core.async.t_cljs$core$async36259.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async36259");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36259.
 */
cljs.core.async.__GT_t_cljs$core$async36259 = (function cljs$core$async$mult_$___GT_t_cljs$core$async36259(ch__$1,cs__$1,meta36260){
return (new cljs.core.async.t_cljs$core$async36259(ch__$1,cs__$1,meta36260));
});

}

return (new cljs.core.async.t_cljs$core$async36259(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__35275__auto___38387 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35276__auto__ = (function (){var switch__35062__auto__ = (function (state_36423){
var state_val_36424 = (state_36423[(1)]);
if((state_val_36424 === (7))){
var inst_36405 = (state_36423[(2)]);
var state_36423__$1 = state_36423;
var statearr_36425_38388 = state_36423__$1;
(statearr_36425_38388[(2)] = inst_36405);

(statearr_36425_38388[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36424 === (20))){
var inst_36306 = (state_36423[(7)]);
var inst_36318 = cljs.core.first(inst_36306);
var inst_36319 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36318,(0),null);
var inst_36320 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36318,(1),null);
var state_36423__$1 = (function (){var statearr_36426 = state_36423;
(statearr_36426[(8)] = inst_36319);

return statearr_36426;
})();
if(cljs.core.truth_(inst_36320)){
var statearr_36427_38392 = state_36423__$1;
(statearr_36427_38392[(1)] = (22));

} else {
var statearr_36428_38393 = state_36423__$1;
(statearr_36428_38393[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36424 === (27))){
var inst_36274 = (state_36423[(9)]);
var inst_36352 = (state_36423[(10)]);
var inst_36358 = (state_36423[(11)]);
var inst_36350 = (state_36423[(12)]);
var inst_36358__$1 = cljs.core._nth(inst_36350,inst_36352);
var inst_36359 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_36358__$1,inst_36274,done);
var state_36423__$1 = (function (){var statearr_36429 = state_36423;
(statearr_36429[(11)] = inst_36358__$1);

return statearr_36429;
})();
if(cljs.core.truth_(inst_36359)){
var statearr_36430_38397 = state_36423__$1;
(statearr_36430_38397[(1)] = (30));

} else {
var statearr_36431_38398 = state_36423__$1;
(statearr_36431_38398[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36424 === (1))){
var state_36423__$1 = state_36423;
var statearr_36432_38399 = state_36423__$1;
(statearr_36432_38399[(2)] = null);

(statearr_36432_38399[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36424 === (24))){
var inst_36306 = (state_36423[(7)]);
var inst_36325 = (state_36423[(2)]);
var inst_36326 = cljs.core.next(inst_36306);
var inst_36283 = inst_36326;
var inst_36284 = null;
var inst_36285 = (0);
var inst_36286 = (0);
var state_36423__$1 = (function (){var statearr_36433 = state_36423;
(statearr_36433[(13)] = inst_36325);

(statearr_36433[(14)] = inst_36285);

(statearr_36433[(15)] = inst_36286);

(statearr_36433[(16)] = inst_36284);

(statearr_36433[(17)] = inst_36283);

return statearr_36433;
})();
var statearr_36434_38403 = state_36423__$1;
(statearr_36434_38403[(2)] = null);

(statearr_36434_38403[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36424 === (39))){
var state_36423__$1 = state_36423;
var statearr_36438_38404 = state_36423__$1;
(statearr_36438_38404[(2)] = null);

(statearr_36438_38404[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36424 === (4))){
var inst_36274 = (state_36423[(9)]);
var inst_36274__$1 = (state_36423[(2)]);
var inst_36275 = (inst_36274__$1 == null);
var state_36423__$1 = (function (){var statearr_36439 = state_36423;
(statearr_36439[(9)] = inst_36274__$1);

return statearr_36439;
})();
if(cljs.core.truth_(inst_36275)){
var statearr_36440_38409 = state_36423__$1;
(statearr_36440_38409[(1)] = (5));

} else {
var statearr_36441_38410 = state_36423__$1;
(statearr_36441_38410[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36424 === (15))){
var inst_36285 = (state_36423[(14)]);
var inst_36286 = (state_36423[(15)]);
var inst_36284 = (state_36423[(16)]);
var inst_36283 = (state_36423[(17)]);
var inst_36302 = (state_36423[(2)]);
var inst_36303 = (inst_36286 + (1));
var tmp36435 = inst_36285;
var tmp36436 = inst_36284;
var tmp36437 = inst_36283;
var inst_36283__$1 = tmp36437;
var inst_36284__$1 = tmp36436;
var inst_36285__$1 = tmp36435;
var inst_36286__$1 = inst_36303;
var state_36423__$1 = (function (){var statearr_36442 = state_36423;
(statearr_36442[(18)] = inst_36302);

(statearr_36442[(14)] = inst_36285__$1);

(statearr_36442[(15)] = inst_36286__$1);

(statearr_36442[(16)] = inst_36284__$1);

(statearr_36442[(17)] = inst_36283__$1);

return statearr_36442;
})();
var statearr_36443_38414 = state_36423__$1;
(statearr_36443_38414[(2)] = null);

(statearr_36443_38414[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36424 === (21))){
var inst_36329 = (state_36423[(2)]);
var state_36423__$1 = state_36423;
var statearr_36447_38418 = state_36423__$1;
(statearr_36447_38418[(2)] = inst_36329);

(statearr_36447_38418[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36424 === (31))){
var inst_36358 = (state_36423[(11)]);
var inst_36362 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_36358);
var state_36423__$1 = state_36423;
var statearr_36448_38422 = state_36423__$1;
(statearr_36448_38422[(2)] = inst_36362);

(statearr_36448_38422[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36424 === (32))){
var inst_36349 = (state_36423[(19)]);
var inst_36352 = (state_36423[(10)]);
var inst_36350 = (state_36423[(12)]);
var inst_36351 = (state_36423[(20)]);
var inst_36364 = (state_36423[(2)]);
var inst_36365 = (inst_36352 + (1));
var tmp36444 = inst_36349;
var tmp36445 = inst_36350;
var tmp36446 = inst_36351;
var inst_36349__$1 = tmp36444;
var inst_36350__$1 = tmp36445;
var inst_36351__$1 = tmp36446;
var inst_36352__$1 = inst_36365;
var state_36423__$1 = (function (){var statearr_36449 = state_36423;
(statearr_36449[(19)] = inst_36349__$1);

(statearr_36449[(10)] = inst_36352__$1);

(statearr_36449[(21)] = inst_36364);

(statearr_36449[(12)] = inst_36350__$1);

(statearr_36449[(20)] = inst_36351__$1);

return statearr_36449;
})();
var statearr_36450_38432 = state_36423__$1;
(statearr_36450_38432[(2)] = null);

(statearr_36450_38432[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36424 === (40))){
var inst_36377 = (state_36423[(22)]);
var inst_36381 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_36377);
var state_36423__$1 = state_36423;
var statearr_36451_38437 = state_36423__$1;
(statearr_36451_38437[(2)] = inst_36381);

(statearr_36451_38437[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36424 === (33))){
var inst_36368 = (state_36423[(23)]);
var inst_36370 = cljs.core.chunked_seq_QMARK_(inst_36368);
var state_36423__$1 = state_36423;
if(inst_36370){
var statearr_36452_38438 = state_36423__$1;
(statearr_36452_38438[(1)] = (36));

} else {
var statearr_36453_38439 = state_36423__$1;
(statearr_36453_38439[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36424 === (13))){
var inst_36296 = (state_36423[(24)]);
var inst_36299 = cljs.core.async.close_BANG_(inst_36296);
var state_36423__$1 = state_36423;
var statearr_36454_38440 = state_36423__$1;
(statearr_36454_38440[(2)] = inst_36299);

(statearr_36454_38440[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36424 === (22))){
var inst_36319 = (state_36423[(8)]);
var inst_36322 = cljs.core.async.close_BANG_(inst_36319);
var state_36423__$1 = state_36423;
var statearr_36455_38444 = state_36423__$1;
(statearr_36455_38444[(2)] = inst_36322);

(statearr_36455_38444[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36424 === (36))){
var inst_36368 = (state_36423[(23)]);
var inst_36372 = cljs.core.chunk_first(inst_36368);
var inst_36373 = cljs.core.chunk_rest(inst_36368);
var inst_36374 = cljs.core.count(inst_36372);
var inst_36349 = inst_36373;
var inst_36350 = inst_36372;
var inst_36351 = inst_36374;
var inst_36352 = (0);
var state_36423__$1 = (function (){var statearr_36456 = state_36423;
(statearr_36456[(19)] = inst_36349);

(statearr_36456[(10)] = inst_36352);

(statearr_36456[(12)] = inst_36350);

(statearr_36456[(20)] = inst_36351);

return statearr_36456;
})();
var statearr_36457_38445 = state_36423__$1;
(statearr_36457_38445[(2)] = null);

(statearr_36457_38445[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36424 === (41))){
var inst_36368 = (state_36423[(23)]);
var inst_36383 = (state_36423[(2)]);
var inst_36384 = cljs.core.next(inst_36368);
var inst_36349 = inst_36384;
var inst_36350 = null;
var inst_36351 = (0);
var inst_36352 = (0);
var state_36423__$1 = (function (){var statearr_36458 = state_36423;
(statearr_36458[(19)] = inst_36349);

(statearr_36458[(10)] = inst_36352);

(statearr_36458[(12)] = inst_36350);

(statearr_36458[(20)] = inst_36351);

(statearr_36458[(25)] = inst_36383);

return statearr_36458;
})();
var statearr_36461_38446 = state_36423__$1;
(statearr_36461_38446[(2)] = null);

(statearr_36461_38446[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36424 === (43))){
var state_36423__$1 = state_36423;
var statearr_36466_38447 = state_36423__$1;
(statearr_36466_38447[(2)] = null);

(statearr_36466_38447[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36424 === (29))){
var inst_36392 = (state_36423[(2)]);
var state_36423__$1 = state_36423;
var statearr_36473_38448 = state_36423__$1;
(statearr_36473_38448[(2)] = inst_36392);

(statearr_36473_38448[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36424 === (44))){
var inst_36402 = (state_36423[(2)]);
var state_36423__$1 = (function (){var statearr_36474 = state_36423;
(statearr_36474[(26)] = inst_36402);

return statearr_36474;
})();
var statearr_36482_38449 = state_36423__$1;
(statearr_36482_38449[(2)] = null);

(statearr_36482_38449[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36424 === (6))){
var inst_36341 = (state_36423[(27)]);
var inst_36340 = cljs.core.deref(cs);
var inst_36341__$1 = cljs.core.keys(inst_36340);
var inst_36342 = cljs.core.count(inst_36341__$1);
var inst_36343 = cljs.core.reset_BANG_(dctr,inst_36342);
var inst_36348 = cljs.core.seq(inst_36341__$1);
var inst_36349 = inst_36348;
var inst_36350 = null;
var inst_36351 = (0);
var inst_36352 = (0);
var state_36423__$1 = (function (){var statearr_36496 = state_36423;
(statearr_36496[(27)] = inst_36341__$1);

(statearr_36496[(19)] = inst_36349);

(statearr_36496[(10)] = inst_36352);

(statearr_36496[(12)] = inst_36350);

(statearr_36496[(20)] = inst_36351);

(statearr_36496[(28)] = inst_36343);

return statearr_36496;
})();
var statearr_36499_38450 = state_36423__$1;
(statearr_36499_38450[(2)] = null);

(statearr_36499_38450[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36424 === (28))){
var inst_36349 = (state_36423[(19)]);
var inst_36368 = (state_36423[(23)]);
var inst_36368__$1 = cljs.core.seq(inst_36349);
var state_36423__$1 = (function (){var statearr_36507 = state_36423;
(statearr_36507[(23)] = inst_36368__$1);

return statearr_36507;
})();
if(inst_36368__$1){
var statearr_36509_38455 = state_36423__$1;
(statearr_36509_38455[(1)] = (33));

} else {
var statearr_36510_38456 = state_36423__$1;
(statearr_36510_38456[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36424 === (25))){
var inst_36352 = (state_36423[(10)]);
var inst_36351 = (state_36423[(20)]);
var inst_36355 = (inst_36352 < inst_36351);
var inst_36356 = inst_36355;
var state_36423__$1 = state_36423;
if(cljs.core.truth_(inst_36356)){
var statearr_36515_38457 = state_36423__$1;
(statearr_36515_38457[(1)] = (27));

} else {
var statearr_36516_38458 = state_36423__$1;
(statearr_36516_38458[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36424 === (34))){
var state_36423__$1 = state_36423;
var statearr_36521_38459 = state_36423__$1;
(statearr_36521_38459[(2)] = null);

(statearr_36521_38459[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36424 === (17))){
var state_36423__$1 = state_36423;
var statearr_36522_38460 = state_36423__$1;
(statearr_36522_38460[(2)] = null);

(statearr_36522_38460[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36424 === (3))){
var inst_36407 = (state_36423[(2)]);
var state_36423__$1 = state_36423;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36423__$1,inst_36407);
} else {
if((state_val_36424 === (12))){
var inst_36335 = (state_36423[(2)]);
var state_36423__$1 = state_36423;
var statearr_36526_38462 = state_36423__$1;
(statearr_36526_38462[(2)] = inst_36335);

(statearr_36526_38462[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36424 === (2))){
var state_36423__$1 = state_36423;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36423__$1,(4),ch);
} else {
if((state_val_36424 === (23))){
var state_36423__$1 = state_36423;
var statearr_36528_38463 = state_36423__$1;
(statearr_36528_38463[(2)] = null);

(statearr_36528_38463[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36424 === (35))){
var inst_36390 = (state_36423[(2)]);
var state_36423__$1 = state_36423;
var statearr_36531_38464 = state_36423__$1;
(statearr_36531_38464[(2)] = inst_36390);

(statearr_36531_38464[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36424 === (19))){
var inst_36306 = (state_36423[(7)]);
var inst_36310 = cljs.core.chunk_first(inst_36306);
var inst_36311 = cljs.core.chunk_rest(inst_36306);
var inst_36312 = cljs.core.count(inst_36310);
var inst_36283 = inst_36311;
var inst_36284 = inst_36310;
var inst_36285 = inst_36312;
var inst_36286 = (0);
var state_36423__$1 = (function (){var statearr_36532 = state_36423;
(statearr_36532[(14)] = inst_36285);

(statearr_36532[(15)] = inst_36286);

(statearr_36532[(16)] = inst_36284);

(statearr_36532[(17)] = inst_36283);

return statearr_36532;
})();
var statearr_36533_38465 = state_36423__$1;
(statearr_36533_38465[(2)] = null);

(statearr_36533_38465[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36424 === (11))){
var inst_36306 = (state_36423[(7)]);
var inst_36283 = (state_36423[(17)]);
var inst_36306__$1 = cljs.core.seq(inst_36283);
var state_36423__$1 = (function (){var statearr_36534 = state_36423;
(statearr_36534[(7)] = inst_36306__$1);

return statearr_36534;
})();
if(inst_36306__$1){
var statearr_36535_38466 = state_36423__$1;
(statearr_36535_38466[(1)] = (16));

} else {
var statearr_36536_38470 = state_36423__$1;
(statearr_36536_38470[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36424 === (9))){
var inst_36337 = (state_36423[(2)]);
var state_36423__$1 = state_36423;
var statearr_36541_38471 = state_36423__$1;
(statearr_36541_38471[(2)] = inst_36337);

(statearr_36541_38471[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36424 === (5))){
var inst_36281 = cljs.core.deref(cs);
var inst_36282 = cljs.core.seq(inst_36281);
var inst_36283 = inst_36282;
var inst_36284 = null;
var inst_36285 = (0);
var inst_36286 = (0);
var state_36423__$1 = (function (){var statearr_36546 = state_36423;
(statearr_36546[(14)] = inst_36285);

(statearr_36546[(15)] = inst_36286);

(statearr_36546[(16)] = inst_36284);

(statearr_36546[(17)] = inst_36283);

return statearr_36546;
})();
var statearr_36547_38472 = state_36423__$1;
(statearr_36547_38472[(2)] = null);

(statearr_36547_38472[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36424 === (14))){
var state_36423__$1 = state_36423;
var statearr_36548_38473 = state_36423__$1;
(statearr_36548_38473[(2)] = null);

(statearr_36548_38473[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36424 === (45))){
var inst_36398 = (state_36423[(2)]);
var state_36423__$1 = state_36423;
var statearr_36553_38475 = state_36423__$1;
(statearr_36553_38475[(2)] = inst_36398);

(statearr_36553_38475[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36424 === (26))){
var inst_36341 = (state_36423[(27)]);
var inst_36394 = (state_36423[(2)]);
var inst_36395 = cljs.core.seq(inst_36341);
var state_36423__$1 = (function (){var statearr_36554 = state_36423;
(statearr_36554[(29)] = inst_36394);

return statearr_36554;
})();
if(inst_36395){
var statearr_36558_38476 = state_36423__$1;
(statearr_36558_38476[(1)] = (42));

} else {
var statearr_36559_38478 = state_36423__$1;
(statearr_36559_38478[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36424 === (16))){
var inst_36306 = (state_36423[(7)]);
var inst_36308 = cljs.core.chunked_seq_QMARK_(inst_36306);
var state_36423__$1 = state_36423;
if(inst_36308){
var statearr_36561_38479 = state_36423__$1;
(statearr_36561_38479[(1)] = (19));

} else {
var statearr_36562_38480 = state_36423__$1;
(statearr_36562_38480[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36424 === (38))){
var inst_36387 = (state_36423[(2)]);
var state_36423__$1 = state_36423;
var statearr_36563_38481 = state_36423__$1;
(statearr_36563_38481[(2)] = inst_36387);

(statearr_36563_38481[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36424 === (30))){
var state_36423__$1 = state_36423;
var statearr_36568_38482 = state_36423__$1;
(statearr_36568_38482[(2)] = null);

(statearr_36568_38482[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36424 === (10))){
var inst_36286 = (state_36423[(15)]);
var inst_36284 = (state_36423[(16)]);
var inst_36295 = cljs.core._nth(inst_36284,inst_36286);
var inst_36296 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36295,(0),null);
var inst_36297 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36295,(1),null);
var state_36423__$1 = (function (){var statearr_36569 = state_36423;
(statearr_36569[(24)] = inst_36296);

return statearr_36569;
})();
if(cljs.core.truth_(inst_36297)){
var statearr_36570_38484 = state_36423__$1;
(statearr_36570_38484[(1)] = (13));

} else {
var statearr_36571_38485 = state_36423__$1;
(statearr_36571_38485[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36424 === (18))){
var inst_36332 = (state_36423[(2)]);
var state_36423__$1 = state_36423;
var statearr_36574_38486 = state_36423__$1;
(statearr_36574_38486[(2)] = inst_36332);

(statearr_36574_38486[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36424 === (42))){
var state_36423__$1 = state_36423;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36423__$1,(45),dchan);
} else {
if((state_val_36424 === (37))){
var inst_36368 = (state_36423[(23)]);
var inst_36274 = (state_36423[(9)]);
var inst_36377 = (state_36423[(22)]);
var inst_36377__$1 = cljs.core.first(inst_36368);
var inst_36378 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_36377__$1,inst_36274,done);
var state_36423__$1 = (function (){var statearr_36575 = state_36423;
(statearr_36575[(22)] = inst_36377__$1);

return statearr_36575;
})();
if(cljs.core.truth_(inst_36378)){
var statearr_36576_38492 = state_36423__$1;
(statearr_36576_38492[(1)] = (39));

} else {
var statearr_36577_38493 = state_36423__$1;
(statearr_36577_38493[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36424 === (8))){
var inst_36285 = (state_36423[(14)]);
var inst_36286 = (state_36423[(15)]);
var inst_36288 = (inst_36286 < inst_36285);
var inst_36289 = inst_36288;
var state_36423__$1 = state_36423;
if(cljs.core.truth_(inst_36289)){
var statearr_36578_38494 = state_36423__$1;
(statearr_36578_38494[(1)] = (10));

} else {
var statearr_36579_38495 = state_36423__$1;
(statearr_36579_38495[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__35063__auto__ = null;
var cljs$core$async$mult_$_state_machine__35063__auto____0 = (function (){
var statearr_36588 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36588[(0)] = cljs$core$async$mult_$_state_machine__35063__auto__);

(statearr_36588[(1)] = (1));

return statearr_36588;
});
var cljs$core$async$mult_$_state_machine__35063__auto____1 = (function (state_36423){
while(true){
var ret_value__35064__auto__ = (function (){try{while(true){
var result__35065__auto__ = switch__35062__auto__(state_36423);
if(cljs.core.keyword_identical_QMARK_(result__35065__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35065__auto__;
}
break;
}
}catch (e36589){var ex__35066__auto__ = e36589;
var statearr_36590_38496 = state_36423;
(statearr_36590_38496[(2)] = ex__35066__auto__);


if(cljs.core.seq((state_36423[(4)]))){
var statearr_36594_38497 = state_36423;
(statearr_36594_38497[(1)] = cljs.core.first((state_36423[(4)])));

} else {
throw ex__35066__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38498 = state_36423;
state_36423 = G__38498;
continue;
} else {
return ret_value__35064__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__35063__auto__ = function(state_36423){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__35063__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__35063__auto____1.call(this,state_36423);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__35063__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__35063__auto____0;
cljs$core$async$mult_$_state_machine__35063__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__35063__auto____1;
return cljs$core$async$mult_$_state_machine__35063__auto__;
})()
})();
var state__35277__auto__ = (function (){var statearr_36596 = f__35276__auto__();
(statearr_36596[(6)] = c__35275__auto___38387);

return statearr_36596;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35277__auto__);
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
var G__36605 = arguments.length;
switch (G__36605) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_38500 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_38500(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_38502 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_38502(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_38507 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_38507(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_38508 = (function (m,state_map){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4429__auto__.call(null,m,state_map));
} else {
var m__4426__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4426__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_38508(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_38509 = (function (m,mode){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4429__auto__.call(null,m,mode));
} else {
var m__4426__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4426__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_38509(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___38512 = arguments.length;
var i__4737__auto___38513 = (0);
while(true){
if((i__4737__auto___38513 < len__4736__auto___38512)){
args__4742__auto__.push((arguments[i__4737__auto___38513]));

var G__38514 = (i__4737__auto___38513 + (1));
i__4737__auto___38513 = G__38514;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__36616){
var map__36617 = p__36616;
var map__36617__$1 = (((((!((map__36617 == null))))?(((((map__36617.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36617.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36617):map__36617);
var opts = map__36617__$1;
var statearr_36619_38517 = state;
(statearr_36619_38517[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_36620_38518 = state;
(statearr_36620_38518[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_36621_38519 = state;
(statearr_36621_38519[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq36612){
var G__36613 = cljs.core.first(seq36612);
var seq36612__$1 = cljs.core.next(seq36612);
var G__36614 = cljs.core.first(seq36612__$1);
var seq36612__$2 = cljs.core.next(seq36612__$1);
var G__36615 = cljs.core.first(seq36612__$2);
var seq36612__$3 = cljs.core.next(seq36612__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36613,G__36614,G__36615,seq36612__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36624 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36624 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta36625){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta36625 = meta36625;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36624.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36626,meta36625__$1){
var self__ = this;
var _36626__$1 = this;
return (new cljs.core.async.t_cljs$core$async36624(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta36625__$1));
}));

(cljs.core.async.t_cljs$core$async36624.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36626){
var self__ = this;
var _36626__$1 = this;
return self__.meta36625;
}));

(cljs.core.async.t_cljs$core$async36624.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36624.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async36624.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36624.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async36624.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async36624.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async36624.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async36624.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async36624.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta36625","meta36625",-1227644476,null)], null);
}));

(cljs.core.async.t_cljs$core$async36624.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36624.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36624");

(cljs.core.async.t_cljs$core$async36624.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async36624");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36624.
 */
cljs.core.async.__GT_t_cljs$core$async36624 = (function cljs$core$async$mix_$___GT_t_cljs$core$async36624(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta36625){
return (new cljs.core.async.t_cljs$core$async36624(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta36625));
});

}

return (new cljs.core.async.t_cljs$core$async36624(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__35275__auto___38550 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35276__auto__ = (function (){var switch__35062__auto__ = (function (state_36740){
var state_val_36741 = (state_36740[(1)]);
if((state_val_36741 === (7))){
var inst_36649 = (state_36740[(2)]);
var state_36740__$1 = state_36740;
var statearr_36744_38557 = state_36740__$1;
(statearr_36744_38557[(2)] = inst_36649);

(statearr_36744_38557[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36741 === (20))){
var inst_36661 = (state_36740[(7)]);
var state_36740__$1 = state_36740;
var statearr_36746_38558 = state_36740__$1;
(statearr_36746_38558[(2)] = inst_36661);

(statearr_36746_38558[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36741 === (27))){
var state_36740__$1 = state_36740;
var statearr_36749_38559 = state_36740__$1;
(statearr_36749_38559[(2)] = null);

(statearr_36749_38559[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36741 === (1))){
var inst_36636 = (state_36740[(8)]);
var inst_36636__$1 = calc_state();
var inst_36638 = (inst_36636__$1 == null);
var inst_36639 = cljs.core.not(inst_36638);
var state_36740__$1 = (function (){var statearr_36751 = state_36740;
(statearr_36751[(8)] = inst_36636__$1);

return statearr_36751;
})();
if(inst_36639){
var statearr_36752_38560 = state_36740__$1;
(statearr_36752_38560[(1)] = (2));

} else {
var statearr_36753_38561 = state_36740__$1;
(statearr_36753_38561[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36741 === (24))){
var inst_36709 = (state_36740[(9)]);
var inst_36694 = (state_36740[(10)]);
var inst_36685 = (state_36740[(11)]);
var inst_36709__$1 = (inst_36685.cljs$core$IFn$_invoke$arity$1 ? inst_36685.cljs$core$IFn$_invoke$arity$1(inst_36694) : inst_36685.call(null,inst_36694));
var state_36740__$1 = (function (){var statearr_36754 = state_36740;
(statearr_36754[(9)] = inst_36709__$1);

return statearr_36754;
})();
if(cljs.core.truth_(inst_36709__$1)){
var statearr_36755_38566 = state_36740__$1;
(statearr_36755_38566[(1)] = (29));

} else {
var statearr_36756_38567 = state_36740__$1;
(statearr_36756_38567[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36741 === (4))){
var inst_36652 = (state_36740[(2)]);
var state_36740__$1 = state_36740;
if(cljs.core.truth_(inst_36652)){
var statearr_36760_38568 = state_36740__$1;
(statearr_36760_38568[(1)] = (8));

} else {
var statearr_36761_38571 = state_36740__$1;
(statearr_36761_38571[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36741 === (15))){
var inst_36679 = (state_36740[(2)]);
var state_36740__$1 = state_36740;
if(cljs.core.truth_(inst_36679)){
var statearr_36762_38573 = state_36740__$1;
(statearr_36762_38573[(1)] = (19));

} else {
var statearr_36763_38574 = state_36740__$1;
(statearr_36763_38574[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36741 === (21))){
var inst_36684 = (state_36740[(12)]);
var inst_36684__$1 = (state_36740[(2)]);
var inst_36685 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_36684__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_36686 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_36684__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_36687 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_36684__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_36740__$1 = (function (){var statearr_36764 = state_36740;
(statearr_36764[(12)] = inst_36684__$1);

(statearr_36764[(13)] = inst_36686);

(statearr_36764[(11)] = inst_36685);

return statearr_36764;
})();
return cljs.core.async.ioc_alts_BANG_(state_36740__$1,(22),inst_36687);
} else {
if((state_val_36741 === (31))){
var inst_36722 = (state_36740[(2)]);
var state_36740__$1 = state_36740;
if(cljs.core.truth_(inst_36722)){
var statearr_36765_38582 = state_36740__$1;
(statearr_36765_38582[(1)] = (32));

} else {
var statearr_36766_38583 = state_36740__$1;
(statearr_36766_38583[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36741 === (32))){
var inst_36693 = (state_36740[(14)]);
var state_36740__$1 = state_36740;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36740__$1,(35),out,inst_36693);
} else {
if((state_val_36741 === (33))){
var inst_36684 = (state_36740[(12)]);
var inst_36661 = inst_36684;
var state_36740__$1 = (function (){var statearr_36767 = state_36740;
(statearr_36767[(7)] = inst_36661);

return statearr_36767;
})();
var statearr_36768_38589 = state_36740__$1;
(statearr_36768_38589[(2)] = null);

(statearr_36768_38589[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36741 === (13))){
var inst_36661 = (state_36740[(7)]);
var inst_36668 = inst_36661.cljs$lang$protocol_mask$partition0$;
var inst_36669 = (inst_36668 & (64));
var inst_36670 = inst_36661.cljs$core$ISeq$;
var inst_36671 = (cljs.core.PROTOCOL_SENTINEL === inst_36670);
var inst_36672 = ((inst_36669) || (inst_36671));
var state_36740__$1 = state_36740;
if(cljs.core.truth_(inst_36672)){
var statearr_36782_38595 = state_36740__$1;
(statearr_36782_38595[(1)] = (16));

} else {
var statearr_36783_38598 = state_36740__$1;
(statearr_36783_38598[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36741 === (22))){
var inst_36694 = (state_36740[(10)]);
var inst_36693 = (state_36740[(14)]);
var inst_36692 = (state_36740[(2)]);
var inst_36693__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36692,(0),null);
var inst_36694__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36692,(1),null);
var inst_36695 = (inst_36693__$1 == null);
var inst_36696 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36694__$1,change);
var inst_36697 = ((inst_36695) || (inst_36696));
var state_36740__$1 = (function (){var statearr_36790 = state_36740;
(statearr_36790[(10)] = inst_36694__$1);

(statearr_36790[(14)] = inst_36693__$1);

return statearr_36790;
})();
if(cljs.core.truth_(inst_36697)){
var statearr_36791_38601 = state_36740__$1;
(statearr_36791_38601[(1)] = (23));

} else {
var statearr_36792_38602 = state_36740__$1;
(statearr_36792_38602[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36741 === (36))){
var inst_36684 = (state_36740[(12)]);
var inst_36661 = inst_36684;
var state_36740__$1 = (function (){var statearr_36793 = state_36740;
(statearr_36793[(7)] = inst_36661);

return statearr_36793;
})();
var statearr_36794_38603 = state_36740__$1;
(statearr_36794_38603[(2)] = null);

(statearr_36794_38603[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36741 === (29))){
var inst_36709 = (state_36740[(9)]);
var state_36740__$1 = state_36740;
var statearr_36795_38604 = state_36740__$1;
(statearr_36795_38604[(2)] = inst_36709);

(statearr_36795_38604[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36741 === (6))){
var state_36740__$1 = state_36740;
var statearr_36803_38607 = state_36740__$1;
(statearr_36803_38607[(2)] = false);

(statearr_36803_38607[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36741 === (28))){
var inst_36705 = (state_36740[(2)]);
var inst_36706 = calc_state();
var inst_36661 = inst_36706;
var state_36740__$1 = (function (){var statearr_36807 = state_36740;
(statearr_36807[(7)] = inst_36661);

(statearr_36807[(15)] = inst_36705);

return statearr_36807;
})();
var statearr_36808_38610 = state_36740__$1;
(statearr_36808_38610[(2)] = null);

(statearr_36808_38610[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36741 === (25))){
var inst_36736 = (state_36740[(2)]);
var state_36740__$1 = state_36740;
var statearr_36809_38612 = state_36740__$1;
(statearr_36809_38612[(2)] = inst_36736);

(statearr_36809_38612[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36741 === (34))){
var inst_36734 = (state_36740[(2)]);
var state_36740__$1 = state_36740;
var statearr_36810_38613 = state_36740__$1;
(statearr_36810_38613[(2)] = inst_36734);

(statearr_36810_38613[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36741 === (17))){
var state_36740__$1 = state_36740;
var statearr_36814_38614 = state_36740__$1;
(statearr_36814_38614[(2)] = false);

(statearr_36814_38614[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36741 === (3))){
var state_36740__$1 = state_36740;
var statearr_36815_38615 = state_36740__$1;
(statearr_36815_38615[(2)] = false);

(statearr_36815_38615[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36741 === (12))){
var inst_36738 = (state_36740[(2)]);
var state_36740__$1 = state_36740;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36740__$1,inst_36738);
} else {
if((state_val_36741 === (2))){
var inst_36636 = (state_36740[(8)]);
var inst_36641 = inst_36636.cljs$lang$protocol_mask$partition0$;
var inst_36642 = (inst_36641 & (64));
var inst_36643 = inst_36636.cljs$core$ISeq$;
var inst_36644 = (cljs.core.PROTOCOL_SENTINEL === inst_36643);
var inst_36645 = ((inst_36642) || (inst_36644));
var state_36740__$1 = state_36740;
if(cljs.core.truth_(inst_36645)){
var statearr_36816_38616 = state_36740__$1;
(statearr_36816_38616[(1)] = (5));

} else {
var statearr_36817_38617 = state_36740__$1;
(statearr_36817_38617[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36741 === (23))){
var inst_36693 = (state_36740[(14)]);
var inst_36699 = (inst_36693 == null);
var state_36740__$1 = state_36740;
if(cljs.core.truth_(inst_36699)){
var statearr_36818_38618 = state_36740__$1;
(statearr_36818_38618[(1)] = (26));

} else {
var statearr_36819_38619 = state_36740__$1;
(statearr_36819_38619[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36741 === (35))){
var inst_36725 = (state_36740[(2)]);
var state_36740__$1 = state_36740;
if(cljs.core.truth_(inst_36725)){
var statearr_36821_38620 = state_36740__$1;
(statearr_36821_38620[(1)] = (36));

} else {
var statearr_36825_38621 = state_36740__$1;
(statearr_36825_38621[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36741 === (19))){
var inst_36661 = (state_36740[(7)]);
var inst_36681 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_36661);
var state_36740__$1 = state_36740;
var statearr_36826_38622 = state_36740__$1;
(statearr_36826_38622[(2)] = inst_36681);

(statearr_36826_38622[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36741 === (11))){
var inst_36661 = (state_36740[(7)]);
var inst_36665 = (inst_36661 == null);
var inst_36666 = cljs.core.not(inst_36665);
var state_36740__$1 = state_36740;
if(inst_36666){
var statearr_36827_38623 = state_36740__$1;
(statearr_36827_38623[(1)] = (13));

} else {
var statearr_36828_38624 = state_36740__$1;
(statearr_36828_38624[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36741 === (9))){
var inst_36636 = (state_36740[(8)]);
var state_36740__$1 = state_36740;
var statearr_36829_38625 = state_36740__$1;
(statearr_36829_38625[(2)] = inst_36636);

(statearr_36829_38625[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36741 === (5))){
var state_36740__$1 = state_36740;
var statearr_36830_38627 = state_36740__$1;
(statearr_36830_38627[(2)] = true);

(statearr_36830_38627[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36741 === (14))){
var state_36740__$1 = state_36740;
var statearr_36831_38628 = state_36740__$1;
(statearr_36831_38628[(2)] = false);

(statearr_36831_38628[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36741 === (26))){
var inst_36694 = (state_36740[(10)]);
var inst_36701 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_36694);
var state_36740__$1 = state_36740;
var statearr_36832_38631 = state_36740__$1;
(statearr_36832_38631[(2)] = inst_36701);

(statearr_36832_38631[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36741 === (16))){
var state_36740__$1 = state_36740;
var statearr_36833_38633 = state_36740__$1;
(statearr_36833_38633[(2)] = true);

(statearr_36833_38633[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36741 === (38))){
var inst_36730 = (state_36740[(2)]);
var state_36740__$1 = state_36740;
var statearr_36835_38634 = state_36740__$1;
(statearr_36835_38634[(2)] = inst_36730);

(statearr_36835_38634[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36741 === (30))){
var inst_36686 = (state_36740[(13)]);
var inst_36694 = (state_36740[(10)]);
var inst_36685 = (state_36740[(11)]);
var inst_36713 = cljs.core.empty_QMARK_(inst_36685);
var inst_36715 = (inst_36686.cljs$core$IFn$_invoke$arity$1 ? inst_36686.cljs$core$IFn$_invoke$arity$1(inst_36694) : inst_36686.call(null,inst_36694));
var inst_36716 = cljs.core.not(inst_36715);
var inst_36720 = ((inst_36713) && (inst_36716));
var state_36740__$1 = state_36740;
var statearr_36839_38636 = state_36740__$1;
(statearr_36839_38636[(2)] = inst_36720);

(statearr_36839_38636[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36741 === (10))){
var inst_36636 = (state_36740[(8)]);
var inst_36657 = (state_36740[(2)]);
var inst_36658 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_36657,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_36659 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_36657,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_36660 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_36657,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_36661 = inst_36636;
var state_36740__$1 = (function (){var statearr_36842 = state_36740;
(statearr_36842[(7)] = inst_36661);

(statearr_36842[(16)] = inst_36659);

(statearr_36842[(17)] = inst_36658);

(statearr_36842[(18)] = inst_36660);

return statearr_36842;
})();
var statearr_36843_38638 = state_36740__$1;
(statearr_36843_38638[(2)] = null);

(statearr_36843_38638[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36741 === (18))){
var inst_36676 = (state_36740[(2)]);
var state_36740__$1 = state_36740;
var statearr_36845_38639 = state_36740__$1;
(statearr_36845_38639[(2)] = inst_36676);

(statearr_36845_38639[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36741 === (37))){
var state_36740__$1 = state_36740;
var statearr_36846_38640 = state_36740__$1;
(statearr_36846_38640[(2)] = null);

(statearr_36846_38640[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36741 === (8))){
var inst_36636 = (state_36740[(8)]);
var inst_36654 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_36636);
var state_36740__$1 = state_36740;
var statearr_36848_38641 = state_36740__$1;
(statearr_36848_38641[(2)] = inst_36654);

(statearr_36848_38641[(1)] = (10));


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
});
return (function() {
var cljs$core$async$mix_$_state_machine__35063__auto__ = null;
var cljs$core$async$mix_$_state_machine__35063__auto____0 = (function (){
var statearr_36849 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36849[(0)] = cljs$core$async$mix_$_state_machine__35063__auto__);

(statearr_36849[(1)] = (1));

return statearr_36849;
});
var cljs$core$async$mix_$_state_machine__35063__auto____1 = (function (state_36740){
while(true){
var ret_value__35064__auto__ = (function (){try{while(true){
var result__35065__auto__ = switch__35062__auto__(state_36740);
if(cljs.core.keyword_identical_QMARK_(result__35065__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35065__auto__;
}
break;
}
}catch (e36850){var ex__35066__auto__ = e36850;
var statearr_36851_38642 = state_36740;
(statearr_36851_38642[(2)] = ex__35066__auto__);


if(cljs.core.seq((state_36740[(4)]))){
var statearr_36852_38643 = state_36740;
(statearr_36852_38643[(1)] = cljs.core.first((state_36740[(4)])));

} else {
throw ex__35066__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38644 = state_36740;
state_36740 = G__38644;
continue;
} else {
return ret_value__35064__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__35063__auto__ = function(state_36740){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__35063__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__35063__auto____1.call(this,state_36740);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__35063__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__35063__auto____0;
cljs$core$async$mix_$_state_machine__35063__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__35063__auto____1;
return cljs$core$async$mix_$_state_machine__35063__auto__;
})()
})();
var state__35277__auto__ = (function (){var statearr_36853 = f__35276__auto__();
(statearr_36853[(6)] = c__35275__auto___38550);

return statearr_36853;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35277__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_38649 = (function (p,v,ch,close_QMARK_){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4429__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4426__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_38649(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_38651 = (function (p,v,ch){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4429__auto__.call(null,p,v,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4426__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_38651(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_38652 = (function() {
var G__38653 = null;
var G__38653__1 = (function (p){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4429__auto__.call(null,p));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4426__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__38653__2 = (function (p,v){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4429__auto__.call(null,p,v));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4426__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__38653 = function(p,v){
switch(arguments.length){
case 1:
return G__38653__1.call(this,p);
case 2:
return G__38653__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__38653.cljs$core$IFn$_invoke$arity$1 = G__38653__1;
G__38653.cljs$core$IFn$_invoke$arity$2 = G__38653__2;
return G__38653;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__36862 = arguments.length;
switch (G__36862) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_38652(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_38652(p,v);
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
var G__36870 = arguments.length;
switch (G__36870) {
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
var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__36867_SHARP_){
if(cljs.core.truth_((p1__36867_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__36867_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__36867_SHARP_.call(null,topic)))){
return p1__36867_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__36867_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36875 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36875 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta36876){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta36876 = meta36876;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36875.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36877,meta36876__$1){
var self__ = this;
var _36877__$1 = this;
return (new cljs.core.async.t_cljs$core$async36875(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta36876__$1));
}));

(cljs.core.async.t_cljs$core$async36875.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36877){
var self__ = this;
var _36877__$1 = this;
return self__.meta36876;
}));

(cljs.core.async.t_cljs$core$async36875.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36875.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async36875.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36875.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async36875.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async36875.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async36875.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async36875.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta36876","meta36876",568984836,null)], null);
}));

(cljs.core.async.t_cljs$core$async36875.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36875.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36875");

(cljs.core.async.t_cljs$core$async36875.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async36875");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36875.
 */
cljs.core.async.__GT_t_cljs$core$async36875 = (function cljs$core$async$__GT_t_cljs$core$async36875(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta36876){
return (new cljs.core.async.t_cljs$core$async36875(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta36876));
});

}

return (new cljs.core.async.t_cljs$core$async36875(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__35275__auto___38673 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35276__auto__ = (function (){var switch__35062__auto__ = (function (state_36962){
var state_val_36963 = (state_36962[(1)]);
if((state_val_36963 === (7))){
var inst_36958 = (state_36962[(2)]);
var state_36962__$1 = state_36962;
var statearr_36964_38674 = state_36962__$1;
(statearr_36964_38674[(2)] = inst_36958);

(statearr_36964_38674[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36963 === (20))){
var state_36962__$1 = state_36962;
var statearr_36965_38675 = state_36962__$1;
(statearr_36965_38675[(2)] = null);

(statearr_36965_38675[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36963 === (1))){
var state_36962__$1 = state_36962;
var statearr_36966_38676 = state_36962__$1;
(statearr_36966_38676[(2)] = null);

(statearr_36966_38676[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36963 === (24))){
var inst_36941 = (state_36962[(7)]);
var inst_36950 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_36941);
var state_36962__$1 = state_36962;
var statearr_36967_38677 = state_36962__$1;
(statearr_36967_38677[(2)] = inst_36950);

(statearr_36967_38677[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36963 === (4))){
var inst_36889 = (state_36962[(8)]);
var inst_36889__$1 = (state_36962[(2)]);
var inst_36890 = (inst_36889__$1 == null);
var state_36962__$1 = (function (){var statearr_36968 = state_36962;
(statearr_36968[(8)] = inst_36889__$1);

return statearr_36968;
})();
if(cljs.core.truth_(inst_36890)){
var statearr_36970_38678 = state_36962__$1;
(statearr_36970_38678[(1)] = (5));

} else {
var statearr_36971_38679 = state_36962__$1;
(statearr_36971_38679[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36963 === (15))){
var inst_36935 = (state_36962[(2)]);
var state_36962__$1 = state_36962;
var statearr_36973_38680 = state_36962__$1;
(statearr_36973_38680[(2)] = inst_36935);

(statearr_36973_38680[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36963 === (21))){
var inst_36955 = (state_36962[(2)]);
var state_36962__$1 = (function (){var statearr_36974 = state_36962;
(statearr_36974[(9)] = inst_36955);

return statearr_36974;
})();
var statearr_36975_38681 = state_36962__$1;
(statearr_36975_38681[(2)] = null);

(statearr_36975_38681[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36963 === (13))){
var inst_36913 = (state_36962[(10)]);
var inst_36915 = cljs.core.chunked_seq_QMARK_(inst_36913);
var state_36962__$1 = state_36962;
if(inst_36915){
var statearr_36979_38682 = state_36962__$1;
(statearr_36979_38682[(1)] = (16));

} else {
var statearr_36980_38683 = state_36962__$1;
(statearr_36980_38683[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36963 === (22))){
var inst_36947 = (state_36962[(2)]);
var state_36962__$1 = state_36962;
if(cljs.core.truth_(inst_36947)){
var statearr_36981_38684 = state_36962__$1;
(statearr_36981_38684[(1)] = (23));

} else {
var statearr_36982_38685 = state_36962__$1;
(statearr_36982_38685[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36963 === (6))){
var inst_36943 = (state_36962[(11)]);
var inst_36889 = (state_36962[(8)]);
var inst_36941 = (state_36962[(7)]);
var inst_36941__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_36889) : topic_fn.call(null,inst_36889));
var inst_36942 = cljs.core.deref(mults);
var inst_36943__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_36942,inst_36941__$1);
var state_36962__$1 = (function (){var statearr_36983 = state_36962;
(statearr_36983[(11)] = inst_36943__$1);

(statearr_36983[(7)] = inst_36941__$1);

return statearr_36983;
})();
if(cljs.core.truth_(inst_36943__$1)){
var statearr_36984_38687 = state_36962__$1;
(statearr_36984_38687[(1)] = (19));

} else {
var statearr_36985_38688 = state_36962__$1;
(statearr_36985_38688[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36963 === (25))){
var inst_36952 = (state_36962[(2)]);
var state_36962__$1 = state_36962;
var statearr_36986_38689 = state_36962__$1;
(statearr_36986_38689[(2)] = inst_36952);

(statearr_36986_38689[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36963 === (17))){
var inst_36913 = (state_36962[(10)]);
var inst_36922 = cljs.core.first(inst_36913);
var inst_36923 = cljs.core.async.muxch_STAR_(inst_36922);
var inst_36924 = cljs.core.async.close_BANG_(inst_36923);
var inst_36926 = cljs.core.next(inst_36913);
var inst_36899 = inst_36926;
var inst_36900 = null;
var inst_36901 = (0);
var inst_36902 = (0);
var state_36962__$1 = (function (){var statearr_36987 = state_36962;
(statearr_36987[(12)] = inst_36900);

(statearr_36987[(13)] = inst_36901);

(statearr_36987[(14)] = inst_36902);

(statearr_36987[(15)] = inst_36899);

(statearr_36987[(16)] = inst_36924);

return statearr_36987;
})();
var statearr_36988_38690 = state_36962__$1;
(statearr_36988_38690[(2)] = null);

(statearr_36988_38690[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36963 === (3))){
var inst_36960 = (state_36962[(2)]);
var state_36962__$1 = state_36962;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36962__$1,inst_36960);
} else {
if((state_val_36963 === (12))){
var inst_36937 = (state_36962[(2)]);
var state_36962__$1 = state_36962;
var statearr_36989_38697 = state_36962__$1;
(statearr_36989_38697[(2)] = inst_36937);

(statearr_36989_38697[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36963 === (2))){
var state_36962__$1 = state_36962;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36962__$1,(4),ch);
} else {
if((state_val_36963 === (23))){
var state_36962__$1 = state_36962;
var statearr_36990_38699 = state_36962__$1;
(statearr_36990_38699[(2)] = null);

(statearr_36990_38699[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36963 === (19))){
var inst_36943 = (state_36962[(11)]);
var inst_36889 = (state_36962[(8)]);
var inst_36945 = cljs.core.async.muxch_STAR_(inst_36943);
var state_36962__$1 = state_36962;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36962__$1,(22),inst_36945,inst_36889);
} else {
if((state_val_36963 === (11))){
var inst_36899 = (state_36962[(15)]);
var inst_36913 = (state_36962[(10)]);
var inst_36913__$1 = cljs.core.seq(inst_36899);
var state_36962__$1 = (function (){var statearr_36992 = state_36962;
(statearr_36992[(10)] = inst_36913__$1);

return statearr_36992;
})();
if(inst_36913__$1){
var statearr_36993_38700 = state_36962__$1;
(statearr_36993_38700[(1)] = (13));

} else {
var statearr_36994_38701 = state_36962__$1;
(statearr_36994_38701[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36963 === (9))){
var inst_36939 = (state_36962[(2)]);
var state_36962__$1 = state_36962;
var statearr_36995_38705 = state_36962__$1;
(statearr_36995_38705[(2)] = inst_36939);

(statearr_36995_38705[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36963 === (5))){
var inst_36896 = cljs.core.deref(mults);
var inst_36897 = cljs.core.vals(inst_36896);
var inst_36898 = cljs.core.seq(inst_36897);
var inst_36899 = inst_36898;
var inst_36900 = null;
var inst_36901 = (0);
var inst_36902 = (0);
var state_36962__$1 = (function (){var statearr_36996 = state_36962;
(statearr_36996[(12)] = inst_36900);

(statearr_36996[(13)] = inst_36901);

(statearr_36996[(14)] = inst_36902);

(statearr_36996[(15)] = inst_36899);

return statearr_36996;
})();
var statearr_36997_38706 = state_36962__$1;
(statearr_36997_38706[(2)] = null);

(statearr_36997_38706[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36963 === (14))){
var state_36962__$1 = state_36962;
var statearr_37001_38710 = state_36962__$1;
(statearr_37001_38710[(2)] = null);

(statearr_37001_38710[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36963 === (16))){
var inst_36913 = (state_36962[(10)]);
var inst_36917 = cljs.core.chunk_first(inst_36913);
var inst_36918 = cljs.core.chunk_rest(inst_36913);
var inst_36919 = cljs.core.count(inst_36917);
var inst_36899 = inst_36918;
var inst_36900 = inst_36917;
var inst_36901 = inst_36919;
var inst_36902 = (0);
var state_36962__$1 = (function (){var statearr_37005 = state_36962;
(statearr_37005[(12)] = inst_36900);

(statearr_37005[(13)] = inst_36901);

(statearr_37005[(14)] = inst_36902);

(statearr_37005[(15)] = inst_36899);

return statearr_37005;
})();
var statearr_37006_38715 = state_36962__$1;
(statearr_37006_38715[(2)] = null);

(statearr_37006_38715[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36963 === (10))){
var inst_36900 = (state_36962[(12)]);
var inst_36901 = (state_36962[(13)]);
var inst_36902 = (state_36962[(14)]);
var inst_36899 = (state_36962[(15)]);
var inst_36907 = cljs.core._nth(inst_36900,inst_36902);
var inst_36908 = cljs.core.async.muxch_STAR_(inst_36907);
var inst_36909 = cljs.core.async.close_BANG_(inst_36908);
var inst_36910 = (inst_36902 + (1));
var tmp36998 = inst_36900;
var tmp36999 = inst_36901;
var tmp37000 = inst_36899;
var inst_36899__$1 = tmp37000;
var inst_36900__$1 = tmp36998;
var inst_36901__$1 = tmp36999;
var inst_36902__$1 = inst_36910;
var state_36962__$1 = (function (){var statearr_37007 = state_36962;
(statearr_37007[(12)] = inst_36900__$1);

(statearr_37007[(17)] = inst_36909);

(statearr_37007[(13)] = inst_36901__$1);

(statearr_37007[(14)] = inst_36902__$1);

(statearr_37007[(15)] = inst_36899__$1);

return statearr_37007;
})();
var statearr_37008_38722 = state_36962__$1;
(statearr_37008_38722[(2)] = null);

(statearr_37008_38722[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36963 === (18))){
var inst_36929 = (state_36962[(2)]);
var state_36962__$1 = state_36962;
var statearr_37009_38726 = state_36962__$1;
(statearr_37009_38726[(2)] = inst_36929);

(statearr_37009_38726[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36963 === (8))){
var inst_36901 = (state_36962[(13)]);
var inst_36902 = (state_36962[(14)]);
var inst_36904 = (inst_36902 < inst_36901);
var inst_36905 = inst_36904;
var state_36962__$1 = state_36962;
if(cljs.core.truth_(inst_36905)){
var statearr_37010_38731 = state_36962__$1;
(statearr_37010_38731[(1)] = (10));

} else {
var statearr_37011_38732 = state_36962__$1;
(statearr_37011_38732[(1)] = (11));

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
var cljs$core$async$state_machine__35063__auto__ = null;
var cljs$core$async$state_machine__35063__auto____0 = (function (){
var statearr_37016 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37016[(0)] = cljs$core$async$state_machine__35063__auto__);

(statearr_37016[(1)] = (1));

return statearr_37016;
});
var cljs$core$async$state_machine__35063__auto____1 = (function (state_36962){
while(true){
var ret_value__35064__auto__ = (function (){try{while(true){
var result__35065__auto__ = switch__35062__auto__(state_36962);
if(cljs.core.keyword_identical_QMARK_(result__35065__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35065__auto__;
}
break;
}
}catch (e37017){var ex__35066__auto__ = e37017;
var statearr_37018_38743 = state_36962;
(statearr_37018_38743[(2)] = ex__35066__auto__);


if(cljs.core.seq((state_36962[(4)]))){
var statearr_37019_38744 = state_36962;
(statearr_37019_38744[(1)] = cljs.core.first((state_36962[(4)])));

} else {
throw ex__35066__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38745 = state_36962;
state_36962 = G__38745;
continue;
} else {
return ret_value__35064__auto__;
}
break;
}
});
cljs$core$async$state_machine__35063__auto__ = function(state_36962){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35063__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35063__auto____1.call(this,state_36962);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35063__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35063__auto____0;
cljs$core$async$state_machine__35063__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35063__auto____1;
return cljs$core$async$state_machine__35063__auto__;
})()
})();
var state__35277__auto__ = (function (){var statearr_37020 = f__35276__auto__();
(statearr_37020[(6)] = c__35275__auto___38673);

return statearr_37020;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35277__auto__);
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
var G__37022 = arguments.length;
switch (G__37022) {
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
var G__37024 = arguments.length;
switch (G__37024) {
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
var G__37046 = arguments.length;
switch (G__37046) {
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
var c__35275__auto___38759 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35276__auto__ = (function (){var switch__35062__auto__ = (function (state_37115){
var state_val_37116 = (state_37115[(1)]);
if((state_val_37116 === (7))){
var state_37115__$1 = state_37115;
var statearr_37117_38760 = state_37115__$1;
(statearr_37117_38760[(2)] = null);

(statearr_37117_38760[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37116 === (1))){
var state_37115__$1 = state_37115;
var statearr_37118_38761 = state_37115__$1;
(statearr_37118_38761[(2)] = null);

(statearr_37118_38761[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37116 === (4))){
var inst_37071 = (state_37115[(7)]);
var inst_37072 = (state_37115[(8)]);
var inst_37074 = (inst_37072 < inst_37071);
var state_37115__$1 = state_37115;
if(cljs.core.truth_(inst_37074)){
var statearr_37119_38762 = state_37115__$1;
(statearr_37119_38762[(1)] = (6));

} else {
var statearr_37120_38763 = state_37115__$1;
(statearr_37120_38763[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37116 === (15))){
var inst_37101 = (state_37115[(9)]);
var inst_37106 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_37101);
var state_37115__$1 = state_37115;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37115__$1,(17),out,inst_37106);
} else {
if((state_val_37116 === (13))){
var inst_37101 = (state_37115[(9)]);
var inst_37101__$1 = (state_37115[(2)]);
var inst_37102 = cljs.core.some(cljs.core.nil_QMARK_,inst_37101__$1);
var state_37115__$1 = (function (){var statearr_37121 = state_37115;
(statearr_37121[(9)] = inst_37101__$1);

return statearr_37121;
})();
if(cljs.core.truth_(inst_37102)){
var statearr_37122_38767 = state_37115__$1;
(statearr_37122_38767[(1)] = (14));

} else {
var statearr_37123_38768 = state_37115__$1;
(statearr_37123_38768[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37116 === (6))){
var state_37115__$1 = state_37115;
var statearr_37124_38769 = state_37115__$1;
(statearr_37124_38769[(2)] = null);

(statearr_37124_38769[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37116 === (17))){
var inst_37108 = (state_37115[(2)]);
var state_37115__$1 = (function (){var statearr_37131 = state_37115;
(statearr_37131[(10)] = inst_37108);

return statearr_37131;
})();
var statearr_37135_38775 = state_37115__$1;
(statearr_37135_38775[(2)] = null);

(statearr_37135_38775[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37116 === (3))){
var inst_37113 = (state_37115[(2)]);
var state_37115__$1 = state_37115;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37115__$1,inst_37113);
} else {
if((state_val_37116 === (12))){
var _ = (function (){var statearr_37139 = state_37115;
(statearr_37139[(4)] = cljs.core.rest((state_37115[(4)])));

return statearr_37139;
})();
var state_37115__$1 = state_37115;
var ex37125 = (state_37115__$1[(2)]);
var statearr_37140_38776 = state_37115__$1;
(statearr_37140_38776[(5)] = ex37125);


if((ex37125 instanceof Object)){
var statearr_37141_38777 = state_37115__$1;
(statearr_37141_38777[(1)] = (11));

(statearr_37141_38777[(5)] = null);

} else {
throw ex37125;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37116 === (2))){
var inst_37070 = cljs.core.reset_BANG_(dctr,cnt);
var inst_37071 = cnt;
var inst_37072 = (0);
var state_37115__$1 = (function (){var statearr_37142 = state_37115;
(statearr_37142[(7)] = inst_37071);

(statearr_37142[(11)] = inst_37070);

(statearr_37142[(8)] = inst_37072);

return statearr_37142;
})();
var statearr_37143_38778 = state_37115__$1;
(statearr_37143_38778[(2)] = null);

(statearr_37143_38778[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37116 === (11))){
var inst_37080 = (state_37115[(2)]);
var inst_37081 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_37115__$1 = (function (){var statearr_37144 = state_37115;
(statearr_37144[(12)] = inst_37080);

return statearr_37144;
})();
var statearr_37145_38779 = state_37115__$1;
(statearr_37145_38779[(2)] = inst_37081);

(statearr_37145_38779[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37116 === (9))){
var inst_37072 = (state_37115[(8)]);
var _ = (function (){var statearr_37146 = state_37115;
(statearr_37146[(4)] = cljs.core.cons((12),(state_37115[(4)])));

return statearr_37146;
})();
var inst_37087 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_37072) : chs__$1.call(null,inst_37072));
var inst_37088 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_37072) : done.call(null,inst_37072));
var inst_37089 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_37087,inst_37088);
var ___$1 = (function (){var statearr_37147 = state_37115;
(statearr_37147[(4)] = cljs.core.rest((state_37115[(4)])));

return statearr_37147;
})();
var state_37115__$1 = state_37115;
var statearr_37148_38784 = state_37115__$1;
(statearr_37148_38784[(2)] = inst_37089);

(statearr_37148_38784[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37116 === (5))){
var inst_37099 = (state_37115[(2)]);
var state_37115__$1 = (function (){var statearr_37149 = state_37115;
(statearr_37149[(13)] = inst_37099);

return statearr_37149;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37115__$1,(13),dchan);
} else {
if((state_val_37116 === (14))){
var inst_37104 = cljs.core.async.close_BANG_(out);
var state_37115__$1 = state_37115;
var statearr_37150_38786 = state_37115__$1;
(statearr_37150_38786[(2)] = inst_37104);

(statearr_37150_38786[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37116 === (16))){
var inst_37111 = (state_37115[(2)]);
var state_37115__$1 = state_37115;
var statearr_37151_38790 = state_37115__$1;
(statearr_37151_38790[(2)] = inst_37111);

(statearr_37151_38790[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37116 === (10))){
var inst_37072 = (state_37115[(8)]);
var inst_37092 = (state_37115[(2)]);
var inst_37093 = (inst_37072 + (1));
var inst_37072__$1 = inst_37093;
var state_37115__$1 = (function (){var statearr_37152 = state_37115;
(statearr_37152[(14)] = inst_37092);

(statearr_37152[(8)] = inst_37072__$1);

return statearr_37152;
})();
var statearr_37153_38791 = state_37115__$1;
(statearr_37153_38791[(2)] = null);

(statearr_37153_38791[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37116 === (8))){
var inst_37097 = (state_37115[(2)]);
var state_37115__$1 = state_37115;
var statearr_37154_38793 = state_37115__$1;
(statearr_37154_38793[(2)] = inst_37097);

(statearr_37154_38793[(1)] = (5));


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
var cljs$core$async$state_machine__35063__auto__ = null;
var cljs$core$async$state_machine__35063__auto____0 = (function (){
var statearr_37155 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37155[(0)] = cljs$core$async$state_machine__35063__auto__);

(statearr_37155[(1)] = (1));

return statearr_37155;
});
var cljs$core$async$state_machine__35063__auto____1 = (function (state_37115){
while(true){
var ret_value__35064__auto__ = (function (){try{while(true){
var result__35065__auto__ = switch__35062__auto__(state_37115);
if(cljs.core.keyword_identical_QMARK_(result__35065__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35065__auto__;
}
break;
}
}catch (e37157){var ex__35066__auto__ = e37157;
var statearr_37158_38796 = state_37115;
(statearr_37158_38796[(2)] = ex__35066__auto__);


if(cljs.core.seq((state_37115[(4)]))){
var statearr_37159_38797 = state_37115;
(statearr_37159_38797[(1)] = cljs.core.first((state_37115[(4)])));

} else {
throw ex__35066__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38798 = state_37115;
state_37115 = G__38798;
continue;
} else {
return ret_value__35064__auto__;
}
break;
}
});
cljs$core$async$state_machine__35063__auto__ = function(state_37115){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35063__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35063__auto____1.call(this,state_37115);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35063__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35063__auto____0;
cljs$core$async$state_machine__35063__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35063__auto____1;
return cljs$core$async$state_machine__35063__auto__;
})()
})();
var state__35277__auto__ = (function (){var statearr_37161 = f__35276__auto__();
(statearr_37161[(6)] = c__35275__auto___38759);

return statearr_37161;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35277__auto__);
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
var G__37167 = arguments.length;
switch (G__37167) {
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
var c__35275__auto___38800 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35276__auto__ = (function (){var switch__35062__auto__ = (function (state_37203){
var state_val_37204 = (state_37203[(1)]);
if((state_val_37204 === (7))){
var inst_37183 = (state_37203[(7)]);
var inst_37182 = (state_37203[(8)]);
var inst_37182__$1 = (state_37203[(2)]);
var inst_37183__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37182__$1,(0),null);
var inst_37184 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37182__$1,(1),null);
var inst_37185 = (inst_37183__$1 == null);
var state_37203__$1 = (function (){var statearr_37218 = state_37203;
(statearr_37218[(9)] = inst_37184);

(statearr_37218[(7)] = inst_37183__$1);

(statearr_37218[(8)] = inst_37182__$1);

return statearr_37218;
})();
if(cljs.core.truth_(inst_37185)){
var statearr_37222_38804 = state_37203__$1;
(statearr_37222_38804[(1)] = (8));

} else {
var statearr_37223_38805 = state_37203__$1;
(statearr_37223_38805[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37204 === (1))){
var inst_37172 = cljs.core.vec(chs);
var inst_37173 = inst_37172;
var state_37203__$1 = (function (){var statearr_37231 = state_37203;
(statearr_37231[(10)] = inst_37173);

return statearr_37231;
})();
var statearr_37235_38806 = state_37203__$1;
(statearr_37235_38806[(2)] = null);

(statearr_37235_38806[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37204 === (4))){
var inst_37173 = (state_37203[(10)]);
var state_37203__$1 = state_37203;
return cljs.core.async.ioc_alts_BANG_(state_37203__$1,(7),inst_37173);
} else {
if((state_val_37204 === (6))){
var inst_37199 = (state_37203[(2)]);
var state_37203__$1 = state_37203;
var statearr_37253_38807 = state_37203__$1;
(statearr_37253_38807[(2)] = inst_37199);

(statearr_37253_38807[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37204 === (3))){
var inst_37201 = (state_37203[(2)]);
var state_37203__$1 = state_37203;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37203__$1,inst_37201);
} else {
if((state_val_37204 === (2))){
var inst_37173 = (state_37203[(10)]);
var inst_37175 = cljs.core.count(inst_37173);
var inst_37176 = (inst_37175 > (0));
var state_37203__$1 = state_37203;
if(cljs.core.truth_(inst_37176)){
var statearr_37257_38808 = state_37203__$1;
(statearr_37257_38808[(1)] = (4));

} else {
var statearr_37258_38809 = state_37203__$1;
(statearr_37258_38809[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37204 === (11))){
var inst_37173 = (state_37203[(10)]);
var inst_37192 = (state_37203[(2)]);
var tmp37254 = inst_37173;
var inst_37173__$1 = tmp37254;
var state_37203__$1 = (function (){var statearr_37259 = state_37203;
(statearr_37259[(10)] = inst_37173__$1);

(statearr_37259[(11)] = inst_37192);

return statearr_37259;
})();
var statearr_37260_38811 = state_37203__$1;
(statearr_37260_38811[(2)] = null);

(statearr_37260_38811[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37204 === (9))){
var inst_37183 = (state_37203[(7)]);
var state_37203__$1 = state_37203;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37203__$1,(11),out,inst_37183);
} else {
if((state_val_37204 === (5))){
var inst_37197 = cljs.core.async.close_BANG_(out);
var state_37203__$1 = state_37203;
var statearr_37262_38812 = state_37203__$1;
(statearr_37262_38812[(2)] = inst_37197);

(statearr_37262_38812[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37204 === (10))){
var inst_37195 = (state_37203[(2)]);
var state_37203__$1 = state_37203;
var statearr_37265_38813 = state_37203__$1;
(statearr_37265_38813[(2)] = inst_37195);

(statearr_37265_38813[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37204 === (8))){
var inst_37173 = (state_37203[(10)]);
var inst_37184 = (state_37203[(9)]);
var inst_37183 = (state_37203[(7)]);
var inst_37182 = (state_37203[(8)]);
var inst_37187 = (function (){var cs = inst_37173;
var vec__37178 = inst_37182;
var v = inst_37183;
var c = inst_37184;
return (function (p1__37164_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__37164_SHARP_);
});
})();
var inst_37188 = cljs.core.filterv(inst_37187,inst_37173);
var inst_37173__$1 = inst_37188;
var state_37203__$1 = (function (){var statearr_37266 = state_37203;
(statearr_37266[(10)] = inst_37173__$1);

return statearr_37266;
})();
var statearr_37267_38818 = state_37203__$1;
(statearr_37267_38818[(2)] = null);

(statearr_37267_38818[(1)] = (2));


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
var cljs$core$async$state_machine__35063__auto__ = null;
var cljs$core$async$state_machine__35063__auto____0 = (function (){
var statearr_37268 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37268[(0)] = cljs$core$async$state_machine__35063__auto__);

(statearr_37268[(1)] = (1));

return statearr_37268;
});
var cljs$core$async$state_machine__35063__auto____1 = (function (state_37203){
while(true){
var ret_value__35064__auto__ = (function (){try{while(true){
var result__35065__auto__ = switch__35062__auto__(state_37203);
if(cljs.core.keyword_identical_QMARK_(result__35065__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35065__auto__;
}
break;
}
}catch (e37270){var ex__35066__auto__ = e37270;
var statearr_37275_38831 = state_37203;
(statearr_37275_38831[(2)] = ex__35066__auto__);


if(cljs.core.seq((state_37203[(4)]))){
var statearr_37283_38835 = state_37203;
(statearr_37283_38835[(1)] = cljs.core.first((state_37203[(4)])));

} else {
throw ex__35066__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38836 = state_37203;
state_37203 = G__38836;
continue;
} else {
return ret_value__35064__auto__;
}
break;
}
});
cljs$core$async$state_machine__35063__auto__ = function(state_37203){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35063__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35063__auto____1.call(this,state_37203);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35063__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35063__auto____0;
cljs$core$async$state_machine__35063__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35063__auto____1;
return cljs$core$async$state_machine__35063__auto__;
})()
})();
var state__35277__auto__ = (function (){var statearr_37284 = f__35276__auto__();
(statearr_37284[(6)] = c__35275__auto___38800);

return statearr_37284;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35277__auto__);
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
var G__37288 = arguments.length;
switch (G__37288) {
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
var c__35275__auto___38856 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35276__auto__ = (function (){var switch__35062__auto__ = (function (state_37312){
var state_val_37313 = (state_37312[(1)]);
if((state_val_37313 === (7))){
var inst_37294 = (state_37312[(7)]);
var inst_37294__$1 = (state_37312[(2)]);
var inst_37295 = (inst_37294__$1 == null);
var inst_37296 = cljs.core.not(inst_37295);
var state_37312__$1 = (function (){var statearr_37314 = state_37312;
(statearr_37314[(7)] = inst_37294__$1);

return statearr_37314;
})();
if(inst_37296){
var statearr_37315_38873 = state_37312__$1;
(statearr_37315_38873[(1)] = (8));

} else {
var statearr_37316_38874 = state_37312__$1;
(statearr_37316_38874[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37313 === (1))){
var inst_37289 = (0);
var state_37312__$1 = (function (){var statearr_37317 = state_37312;
(statearr_37317[(8)] = inst_37289);

return statearr_37317;
})();
var statearr_37318_38875 = state_37312__$1;
(statearr_37318_38875[(2)] = null);

(statearr_37318_38875[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37313 === (4))){
var state_37312__$1 = state_37312;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37312__$1,(7),ch);
} else {
if((state_val_37313 === (6))){
var inst_37307 = (state_37312[(2)]);
var state_37312__$1 = state_37312;
var statearr_37319_38882 = state_37312__$1;
(statearr_37319_38882[(2)] = inst_37307);

(statearr_37319_38882[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37313 === (3))){
var inst_37309 = (state_37312[(2)]);
var inst_37310 = cljs.core.async.close_BANG_(out);
var state_37312__$1 = (function (){var statearr_37322 = state_37312;
(statearr_37322[(9)] = inst_37309);

return statearr_37322;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_37312__$1,inst_37310);
} else {
if((state_val_37313 === (2))){
var inst_37289 = (state_37312[(8)]);
var inst_37291 = (inst_37289 < n);
var state_37312__$1 = state_37312;
if(cljs.core.truth_(inst_37291)){
var statearr_37323_38893 = state_37312__$1;
(statearr_37323_38893[(1)] = (4));

} else {
var statearr_37324_38897 = state_37312__$1;
(statearr_37324_38897[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37313 === (11))){
var inst_37289 = (state_37312[(8)]);
var inst_37299 = (state_37312[(2)]);
var inst_37300 = (inst_37289 + (1));
var inst_37289__$1 = inst_37300;
var state_37312__$1 = (function (){var statearr_37325 = state_37312;
(statearr_37325[(8)] = inst_37289__$1);

(statearr_37325[(10)] = inst_37299);

return statearr_37325;
})();
var statearr_37327_38903 = state_37312__$1;
(statearr_37327_38903[(2)] = null);

(statearr_37327_38903[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37313 === (9))){
var state_37312__$1 = state_37312;
var statearr_37328_38904 = state_37312__$1;
(statearr_37328_38904[(2)] = null);

(statearr_37328_38904[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37313 === (5))){
var state_37312__$1 = state_37312;
var statearr_37329_38908 = state_37312__$1;
(statearr_37329_38908[(2)] = null);

(statearr_37329_38908[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37313 === (10))){
var inst_37304 = (state_37312[(2)]);
var state_37312__$1 = state_37312;
var statearr_37330_38910 = state_37312__$1;
(statearr_37330_38910[(2)] = inst_37304);

(statearr_37330_38910[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37313 === (8))){
var inst_37294 = (state_37312[(7)]);
var state_37312__$1 = state_37312;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37312__$1,(11),out,inst_37294);
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
var cljs$core$async$state_machine__35063__auto__ = null;
var cljs$core$async$state_machine__35063__auto____0 = (function (){
var statearr_37331 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37331[(0)] = cljs$core$async$state_machine__35063__auto__);

(statearr_37331[(1)] = (1));

return statearr_37331;
});
var cljs$core$async$state_machine__35063__auto____1 = (function (state_37312){
while(true){
var ret_value__35064__auto__ = (function (){try{while(true){
var result__35065__auto__ = switch__35062__auto__(state_37312);
if(cljs.core.keyword_identical_QMARK_(result__35065__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35065__auto__;
}
break;
}
}catch (e37332){var ex__35066__auto__ = e37332;
var statearr_37333_38914 = state_37312;
(statearr_37333_38914[(2)] = ex__35066__auto__);


if(cljs.core.seq((state_37312[(4)]))){
var statearr_37343_38915 = state_37312;
(statearr_37343_38915[(1)] = cljs.core.first((state_37312[(4)])));

} else {
throw ex__35066__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38916 = state_37312;
state_37312 = G__38916;
continue;
} else {
return ret_value__35064__auto__;
}
break;
}
});
cljs$core$async$state_machine__35063__auto__ = function(state_37312){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35063__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35063__auto____1.call(this,state_37312);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35063__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35063__auto____0;
cljs$core$async$state_machine__35063__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35063__auto____1;
return cljs$core$async$state_machine__35063__auto__;
})()
})();
var state__35277__auto__ = (function (){var statearr_37344 = f__35276__auto__();
(statearr_37344[(6)] = c__35275__auto___38856);

return statearr_37344;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35277__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37347 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37347 = (function (f,ch,meta37348){
this.f = f;
this.ch = ch;
this.meta37348 = meta37348;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37347.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37349,meta37348__$1){
var self__ = this;
var _37349__$1 = this;
return (new cljs.core.async.t_cljs$core$async37347(self__.f,self__.ch,meta37348__$1));
}));

(cljs.core.async.t_cljs$core$async37347.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37349){
var self__ = this;
var _37349__$1 = this;
return self__.meta37348;
}));

(cljs.core.async.t_cljs$core$async37347.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37347.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async37347.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async37347.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37347.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37350 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37350 = (function (f,ch,meta37348,_,fn1,meta37351){
this.f = f;
this.ch = ch;
this.meta37348 = meta37348;
this._ = _;
this.fn1 = fn1;
this.meta37351 = meta37351;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37350.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37352,meta37351__$1){
var self__ = this;
var _37352__$1 = this;
return (new cljs.core.async.t_cljs$core$async37350(self__.f,self__.ch,self__.meta37348,self__._,self__.fn1,meta37351__$1));
}));

(cljs.core.async.t_cljs$core$async37350.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37352){
var self__ = this;
var _37352__$1 = this;
return self__.meta37351;
}));

(cljs.core.async.t_cljs$core$async37350.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37350.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async37350.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async37350.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__37345_SHARP_){
var G__37357 = (((p1__37345_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__37345_SHARP_) : self__.f.call(null,p1__37345_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__37357) : f1.call(null,G__37357));
});
}));

(cljs.core.async.t_cljs$core$async37350.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta37348","meta37348",-882657328,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async37347","cljs.core.async/t_cljs$core$async37347",-388749895,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta37351","meta37351",-1847927560,null)], null);
}));

(cljs.core.async.t_cljs$core$async37350.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37350.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37350");

(cljs.core.async.t_cljs$core$async37350.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async37350");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37350.
 */
cljs.core.async.__GT_t_cljs$core$async37350 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async37350(f__$1,ch__$1,meta37348__$1,___$2,fn1__$1,meta37351){
return (new cljs.core.async.t_cljs$core$async37350(f__$1,ch__$1,meta37348__$1,___$2,fn1__$1,meta37351));
});

}

return (new cljs.core.async.t_cljs$core$async37350(self__.f,self__.ch,self__.meta37348,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__37372 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__37372) : self__.f.call(null,G__37372));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async37347.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37347.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async37347.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta37348","meta37348",-882657328,null)], null);
}));

(cljs.core.async.t_cljs$core$async37347.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37347.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37347");

(cljs.core.async.t_cljs$core$async37347.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async37347");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37347.
 */
cljs.core.async.__GT_t_cljs$core$async37347 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async37347(f__$1,ch__$1,meta37348){
return (new cljs.core.async.t_cljs$core$async37347(f__$1,ch__$1,meta37348));
});

}

return (new cljs.core.async.t_cljs$core$async37347(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37376 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37376 = (function (f,ch,meta37377){
this.f = f;
this.ch = ch;
this.meta37377 = meta37377;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37376.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37378,meta37377__$1){
var self__ = this;
var _37378__$1 = this;
return (new cljs.core.async.t_cljs$core$async37376(self__.f,self__.ch,meta37377__$1));
}));

(cljs.core.async.t_cljs$core$async37376.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37378){
var self__ = this;
var _37378__$1 = this;
return self__.meta37377;
}));

(cljs.core.async.t_cljs$core$async37376.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37376.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async37376.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37376.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async37376.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37376.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async37376.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta37377","meta37377",-1449560583,null)], null);
}));

(cljs.core.async.t_cljs$core$async37376.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37376.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37376");

(cljs.core.async.t_cljs$core$async37376.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async37376");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37376.
 */
cljs.core.async.__GT_t_cljs$core$async37376 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async37376(f__$1,ch__$1,meta37377){
return (new cljs.core.async.t_cljs$core$async37376(f__$1,ch__$1,meta37377));
});

}

return (new cljs.core.async.t_cljs$core$async37376(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37387 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37387 = (function (p,ch,meta37388){
this.p = p;
this.ch = ch;
this.meta37388 = meta37388;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37387.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37389,meta37388__$1){
var self__ = this;
var _37389__$1 = this;
return (new cljs.core.async.t_cljs$core$async37387(self__.p,self__.ch,meta37388__$1));
}));

(cljs.core.async.t_cljs$core$async37387.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37389){
var self__ = this;
var _37389__$1 = this;
return self__.meta37388;
}));

(cljs.core.async.t_cljs$core$async37387.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37387.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async37387.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async37387.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37387.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async37387.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37387.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async37387.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta37388","meta37388",-642314616,null)], null);
}));

(cljs.core.async.t_cljs$core$async37387.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37387.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37387");

(cljs.core.async.t_cljs$core$async37387.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async37387");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37387.
 */
cljs.core.async.__GT_t_cljs$core$async37387 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async37387(p__$1,ch__$1,meta37388){
return (new cljs.core.async.t_cljs$core$async37387(p__$1,ch__$1,meta37388));
});

}

return (new cljs.core.async.t_cljs$core$async37387(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__37414 = arguments.length;
switch (G__37414) {
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
var c__35275__auto___38932 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35276__auto__ = (function (){var switch__35062__auto__ = (function (state_37442){
var state_val_37444 = (state_37442[(1)]);
if((state_val_37444 === (7))){
var inst_37438 = (state_37442[(2)]);
var state_37442__$1 = state_37442;
var statearr_37449_38933 = state_37442__$1;
(statearr_37449_38933[(2)] = inst_37438);

(statearr_37449_38933[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37444 === (1))){
var state_37442__$1 = state_37442;
var statearr_37451_38934 = state_37442__$1;
(statearr_37451_38934[(2)] = null);

(statearr_37451_38934[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37444 === (4))){
var inst_37424 = (state_37442[(7)]);
var inst_37424__$1 = (state_37442[(2)]);
var inst_37425 = (inst_37424__$1 == null);
var state_37442__$1 = (function (){var statearr_37452 = state_37442;
(statearr_37452[(7)] = inst_37424__$1);

return statearr_37452;
})();
if(cljs.core.truth_(inst_37425)){
var statearr_37453_38935 = state_37442__$1;
(statearr_37453_38935[(1)] = (5));

} else {
var statearr_37454_38936 = state_37442__$1;
(statearr_37454_38936[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37444 === (6))){
var inst_37424 = (state_37442[(7)]);
var inst_37429 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_37424) : p.call(null,inst_37424));
var state_37442__$1 = state_37442;
if(cljs.core.truth_(inst_37429)){
var statearr_37455_38937 = state_37442__$1;
(statearr_37455_38937[(1)] = (8));

} else {
var statearr_37456_38938 = state_37442__$1;
(statearr_37456_38938[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37444 === (3))){
var inst_37440 = (state_37442[(2)]);
var state_37442__$1 = state_37442;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37442__$1,inst_37440);
} else {
if((state_val_37444 === (2))){
var state_37442__$1 = state_37442;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37442__$1,(4),ch);
} else {
if((state_val_37444 === (11))){
var inst_37432 = (state_37442[(2)]);
var state_37442__$1 = state_37442;
var statearr_37458_38940 = state_37442__$1;
(statearr_37458_38940[(2)] = inst_37432);

(statearr_37458_38940[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37444 === (9))){
var state_37442__$1 = state_37442;
var statearr_37459_38941 = state_37442__$1;
(statearr_37459_38941[(2)] = null);

(statearr_37459_38941[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37444 === (5))){
var inst_37427 = cljs.core.async.close_BANG_(out);
var state_37442__$1 = state_37442;
var statearr_37468_38942 = state_37442__$1;
(statearr_37468_38942[(2)] = inst_37427);

(statearr_37468_38942[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37444 === (10))){
var inst_37435 = (state_37442[(2)]);
var state_37442__$1 = (function (){var statearr_37469 = state_37442;
(statearr_37469[(8)] = inst_37435);

return statearr_37469;
})();
var statearr_37470_38944 = state_37442__$1;
(statearr_37470_38944[(2)] = null);

(statearr_37470_38944[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37444 === (8))){
var inst_37424 = (state_37442[(7)]);
var state_37442__$1 = state_37442;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37442__$1,(11),out,inst_37424);
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
var cljs$core$async$state_machine__35063__auto__ = null;
var cljs$core$async$state_machine__35063__auto____0 = (function (){
var statearr_37471 = [null,null,null,null,null,null,null,null,null];
(statearr_37471[(0)] = cljs$core$async$state_machine__35063__auto__);

(statearr_37471[(1)] = (1));

return statearr_37471;
});
var cljs$core$async$state_machine__35063__auto____1 = (function (state_37442){
while(true){
var ret_value__35064__auto__ = (function (){try{while(true){
var result__35065__auto__ = switch__35062__auto__(state_37442);
if(cljs.core.keyword_identical_QMARK_(result__35065__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35065__auto__;
}
break;
}
}catch (e37473){var ex__35066__auto__ = e37473;
var statearr_37474_38945 = state_37442;
(statearr_37474_38945[(2)] = ex__35066__auto__);


if(cljs.core.seq((state_37442[(4)]))){
var statearr_37475_38946 = state_37442;
(statearr_37475_38946[(1)] = cljs.core.first((state_37442[(4)])));

} else {
throw ex__35066__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38947 = state_37442;
state_37442 = G__38947;
continue;
} else {
return ret_value__35064__auto__;
}
break;
}
});
cljs$core$async$state_machine__35063__auto__ = function(state_37442){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35063__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35063__auto____1.call(this,state_37442);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35063__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35063__auto____0;
cljs$core$async$state_machine__35063__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35063__auto____1;
return cljs$core$async$state_machine__35063__auto__;
})()
})();
var state__35277__auto__ = (function (){var statearr_37476 = f__35276__auto__();
(statearr_37476[(6)] = c__35275__auto___38932);

return statearr_37476;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35277__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__37482 = arguments.length;
switch (G__37482) {
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
var c__35275__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35276__auto__ = (function (){var switch__35062__auto__ = (function (state_37547){
var state_val_37548 = (state_37547[(1)]);
if((state_val_37548 === (7))){
var inst_37543 = (state_37547[(2)]);
var state_37547__$1 = state_37547;
var statearr_37553_38950 = state_37547__$1;
(statearr_37553_38950[(2)] = inst_37543);

(statearr_37553_38950[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37548 === (20))){
var inst_37513 = (state_37547[(7)]);
var inst_37524 = (state_37547[(2)]);
var inst_37525 = cljs.core.next(inst_37513);
var inst_37499 = inst_37525;
var inst_37500 = null;
var inst_37501 = (0);
var inst_37502 = (0);
var state_37547__$1 = (function (){var statearr_37555 = state_37547;
(statearr_37555[(8)] = inst_37524);

(statearr_37555[(9)] = inst_37501);

(statearr_37555[(10)] = inst_37500);

(statearr_37555[(11)] = inst_37499);

(statearr_37555[(12)] = inst_37502);

return statearr_37555;
})();
var statearr_37556_38951 = state_37547__$1;
(statearr_37556_38951[(2)] = null);

(statearr_37556_38951[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37548 === (1))){
var state_37547__$1 = state_37547;
var statearr_37557_38952 = state_37547__$1;
(statearr_37557_38952[(2)] = null);

(statearr_37557_38952[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37548 === (4))){
var inst_37487 = (state_37547[(13)]);
var inst_37487__$1 = (state_37547[(2)]);
var inst_37488 = (inst_37487__$1 == null);
var state_37547__$1 = (function (){var statearr_37572 = state_37547;
(statearr_37572[(13)] = inst_37487__$1);

return statearr_37572;
})();
if(cljs.core.truth_(inst_37488)){
var statearr_37573_38958 = state_37547__$1;
(statearr_37573_38958[(1)] = (5));

} else {
var statearr_37580_38959 = state_37547__$1;
(statearr_37580_38959[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37548 === (15))){
var state_37547__$1 = state_37547;
var statearr_37590_38960 = state_37547__$1;
(statearr_37590_38960[(2)] = null);

(statearr_37590_38960[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37548 === (21))){
var state_37547__$1 = state_37547;
var statearr_37592_38962 = state_37547__$1;
(statearr_37592_38962[(2)] = null);

(statearr_37592_38962[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37548 === (13))){
var inst_37501 = (state_37547[(9)]);
var inst_37500 = (state_37547[(10)]);
var inst_37499 = (state_37547[(11)]);
var inst_37502 = (state_37547[(12)]);
var inst_37509 = (state_37547[(2)]);
var inst_37510 = (inst_37502 + (1));
var tmp37587 = inst_37501;
var tmp37588 = inst_37500;
var tmp37589 = inst_37499;
var inst_37499__$1 = tmp37589;
var inst_37500__$1 = tmp37588;
var inst_37501__$1 = tmp37587;
var inst_37502__$1 = inst_37510;
var state_37547__$1 = (function (){var statearr_37595 = state_37547;
(statearr_37595[(9)] = inst_37501__$1);

(statearr_37595[(10)] = inst_37500__$1);

(statearr_37595[(11)] = inst_37499__$1);

(statearr_37595[(12)] = inst_37502__$1);

(statearr_37595[(14)] = inst_37509);

return statearr_37595;
})();
var statearr_37601_38966 = state_37547__$1;
(statearr_37601_38966[(2)] = null);

(statearr_37601_38966[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37548 === (22))){
var state_37547__$1 = state_37547;
var statearr_37609_38968 = state_37547__$1;
(statearr_37609_38968[(2)] = null);

(statearr_37609_38968[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37548 === (6))){
var inst_37487 = (state_37547[(13)]);
var inst_37497 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_37487) : f.call(null,inst_37487));
var inst_37498 = cljs.core.seq(inst_37497);
var inst_37499 = inst_37498;
var inst_37500 = null;
var inst_37501 = (0);
var inst_37502 = (0);
var state_37547__$1 = (function (){var statearr_37611 = state_37547;
(statearr_37611[(9)] = inst_37501);

(statearr_37611[(10)] = inst_37500);

(statearr_37611[(11)] = inst_37499);

(statearr_37611[(12)] = inst_37502);

return statearr_37611;
})();
var statearr_37617_38971 = state_37547__$1;
(statearr_37617_38971[(2)] = null);

(statearr_37617_38971[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37548 === (17))){
var inst_37513 = (state_37547[(7)]);
var inst_37517 = cljs.core.chunk_first(inst_37513);
var inst_37518 = cljs.core.chunk_rest(inst_37513);
var inst_37519 = cljs.core.count(inst_37517);
var inst_37499 = inst_37518;
var inst_37500 = inst_37517;
var inst_37501 = inst_37519;
var inst_37502 = (0);
var state_37547__$1 = (function (){var statearr_37618 = state_37547;
(statearr_37618[(9)] = inst_37501);

(statearr_37618[(10)] = inst_37500);

(statearr_37618[(11)] = inst_37499);

(statearr_37618[(12)] = inst_37502);

return statearr_37618;
})();
var statearr_37619_38977 = state_37547__$1;
(statearr_37619_38977[(2)] = null);

(statearr_37619_38977[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37548 === (3))){
var inst_37545 = (state_37547[(2)]);
var state_37547__$1 = state_37547;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37547__$1,inst_37545);
} else {
if((state_val_37548 === (12))){
var inst_37533 = (state_37547[(2)]);
var state_37547__$1 = state_37547;
var statearr_37620_38982 = state_37547__$1;
(statearr_37620_38982[(2)] = inst_37533);

(statearr_37620_38982[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37548 === (2))){
var state_37547__$1 = state_37547;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37547__$1,(4),in$);
} else {
if((state_val_37548 === (23))){
var inst_37541 = (state_37547[(2)]);
var state_37547__$1 = state_37547;
var statearr_37621_38983 = state_37547__$1;
(statearr_37621_38983[(2)] = inst_37541);

(statearr_37621_38983[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37548 === (19))){
var inst_37528 = (state_37547[(2)]);
var state_37547__$1 = state_37547;
var statearr_37622_38984 = state_37547__$1;
(statearr_37622_38984[(2)] = inst_37528);

(statearr_37622_38984[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37548 === (11))){
var inst_37513 = (state_37547[(7)]);
var inst_37499 = (state_37547[(11)]);
var inst_37513__$1 = cljs.core.seq(inst_37499);
var state_37547__$1 = (function (){var statearr_37623 = state_37547;
(statearr_37623[(7)] = inst_37513__$1);

return statearr_37623;
})();
if(inst_37513__$1){
var statearr_37624_38985 = state_37547__$1;
(statearr_37624_38985[(1)] = (14));

} else {
var statearr_37625_38986 = state_37547__$1;
(statearr_37625_38986[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37548 === (9))){
var inst_37535 = (state_37547[(2)]);
var inst_37536 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_37547__$1 = (function (){var statearr_37630 = state_37547;
(statearr_37630[(15)] = inst_37535);

return statearr_37630;
})();
if(cljs.core.truth_(inst_37536)){
var statearr_37631_38990 = state_37547__$1;
(statearr_37631_38990[(1)] = (21));

} else {
var statearr_37632_38991 = state_37547__$1;
(statearr_37632_38991[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37548 === (5))){
var inst_37491 = cljs.core.async.close_BANG_(out);
var state_37547__$1 = state_37547;
var statearr_37633_38993 = state_37547__$1;
(statearr_37633_38993[(2)] = inst_37491);

(statearr_37633_38993[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37548 === (14))){
var inst_37513 = (state_37547[(7)]);
var inst_37515 = cljs.core.chunked_seq_QMARK_(inst_37513);
var state_37547__$1 = state_37547;
if(inst_37515){
var statearr_37634_38999 = state_37547__$1;
(statearr_37634_38999[(1)] = (17));

} else {
var statearr_37635_39000 = state_37547__$1;
(statearr_37635_39000[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37548 === (16))){
var inst_37531 = (state_37547[(2)]);
var state_37547__$1 = state_37547;
var statearr_37636_39004 = state_37547__$1;
(statearr_37636_39004[(2)] = inst_37531);

(statearr_37636_39004[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37548 === (10))){
var inst_37500 = (state_37547[(10)]);
var inst_37502 = (state_37547[(12)]);
var inst_37507 = cljs.core._nth(inst_37500,inst_37502);
var state_37547__$1 = state_37547;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37547__$1,(13),out,inst_37507);
} else {
if((state_val_37548 === (18))){
var inst_37513 = (state_37547[(7)]);
var inst_37522 = cljs.core.first(inst_37513);
var state_37547__$1 = state_37547;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37547__$1,(20),out,inst_37522);
} else {
if((state_val_37548 === (8))){
var inst_37501 = (state_37547[(9)]);
var inst_37502 = (state_37547[(12)]);
var inst_37504 = (inst_37502 < inst_37501);
var inst_37505 = inst_37504;
var state_37547__$1 = state_37547;
if(cljs.core.truth_(inst_37505)){
var statearr_37641_39005 = state_37547__$1;
(statearr_37641_39005[(1)] = (10));

} else {
var statearr_37645_39009 = state_37547__$1;
(statearr_37645_39009[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__35063__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__35063__auto____0 = (function (){
var statearr_37649 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37649[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__35063__auto__);

(statearr_37649[(1)] = (1));

return statearr_37649;
});
var cljs$core$async$mapcat_STAR__$_state_machine__35063__auto____1 = (function (state_37547){
while(true){
var ret_value__35064__auto__ = (function (){try{while(true){
var result__35065__auto__ = switch__35062__auto__(state_37547);
if(cljs.core.keyword_identical_QMARK_(result__35065__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35065__auto__;
}
break;
}
}catch (e37650){var ex__35066__auto__ = e37650;
var statearr_37651_39017 = state_37547;
(statearr_37651_39017[(2)] = ex__35066__auto__);


if(cljs.core.seq((state_37547[(4)]))){
var statearr_37652_39019 = state_37547;
(statearr_37652_39019[(1)] = cljs.core.first((state_37547[(4)])));

} else {
throw ex__35066__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39020 = state_37547;
state_37547 = G__39020;
continue;
} else {
return ret_value__35064__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__35063__auto__ = function(state_37547){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__35063__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__35063__auto____1.call(this,state_37547);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__35063__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__35063__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__35063__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__35063__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__35063__auto__;
})()
})();
var state__35277__auto__ = (function (){var statearr_37653 = f__35276__auto__();
(statearr_37653[(6)] = c__35275__auto__);

return statearr_37653;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35277__auto__);
}));

return c__35275__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__37655 = arguments.length;
switch (G__37655) {
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
var G__37660 = arguments.length;
switch (G__37660) {
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
var G__37662 = arguments.length;
switch (G__37662) {
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
var c__35275__auto___39049 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35276__auto__ = (function (){var switch__35062__auto__ = (function (state_37686){
var state_val_37687 = (state_37686[(1)]);
if((state_val_37687 === (7))){
var inst_37681 = (state_37686[(2)]);
var state_37686__$1 = state_37686;
var statearr_37688_39050 = state_37686__$1;
(statearr_37688_39050[(2)] = inst_37681);

(statearr_37688_39050[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37687 === (1))){
var inst_37663 = null;
var state_37686__$1 = (function (){var statearr_37689 = state_37686;
(statearr_37689[(7)] = inst_37663);

return statearr_37689;
})();
var statearr_37690_39057 = state_37686__$1;
(statearr_37690_39057[(2)] = null);

(statearr_37690_39057[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37687 === (4))){
var inst_37666 = (state_37686[(8)]);
var inst_37666__$1 = (state_37686[(2)]);
var inst_37667 = (inst_37666__$1 == null);
var inst_37668 = cljs.core.not(inst_37667);
var state_37686__$1 = (function (){var statearr_37691 = state_37686;
(statearr_37691[(8)] = inst_37666__$1);

return statearr_37691;
})();
if(inst_37668){
var statearr_37692_39059 = state_37686__$1;
(statearr_37692_39059[(1)] = (5));

} else {
var statearr_37693_39060 = state_37686__$1;
(statearr_37693_39060[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37687 === (6))){
var state_37686__$1 = state_37686;
var statearr_37694_39061 = state_37686__$1;
(statearr_37694_39061[(2)] = null);

(statearr_37694_39061[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37687 === (3))){
var inst_37683 = (state_37686[(2)]);
var inst_37684 = cljs.core.async.close_BANG_(out);
var state_37686__$1 = (function (){var statearr_37696 = state_37686;
(statearr_37696[(9)] = inst_37683);

return statearr_37696;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_37686__$1,inst_37684);
} else {
if((state_val_37687 === (2))){
var state_37686__$1 = state_37686;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37686__$1,(4),ch);
} else {
if((state_val_37687 === (11))){
var inst_37666 = (state_37686[(8)]);
var inst_37675 = (state_37686[(2)]);
var inst_37663 = inst_37666;
var state_37686__$1 = (function (){var statearr_37697 = state_37686;
(statearr_37697[(10)] = inst_37675);

(statearr_37697[(7)] = inst_37663);

return statearr_37697;
})();
var statearr_37698_39063 = state_37686__$1;
(statearr_37698_39063[(2)] = null);

(statearr_37698_39063[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37687 === (9))){
var inst_37666 = (state_37686[(8)]);
var state_37686__$1 = state_37686;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37686__$1,(11),out,inst_37666);
} else {
if((state_val_37687 === (5))){
var inst_37663 = (state_37686[(7)]);
var inst_37666 = (state_37686[(8)]);
var inst_37670 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_37666,inst_37663);
var state_37686__$1 = state_37686;
if(inst_37670){
var statearr_37703_39064 = state_37686__$1;
(statearr_37703_39064[(1)] = (8));

} else {
var statearr_37704_39065 = state_37686__$1;
(statearr_37704_39065[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37687 === (10))){
var inst_37678 = (state_37686[(2)]);
var state_37686__$1 = state_37686;
var statearr_37705_39066 = state_37686__$1;
(statearr_37705_39066[(2)] = inst_37678);

(statearr_37705_39066[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37687 === (8))){
var inst_37663 = (state_37686[(7)]);
var tmp37699 = inst_37663;
var inst_37663__$1 = tmp37699;
var state_37686__$1 = (function (){var statearr_37706 = state_37686;
(statearr_37706[(7)] = inst_37663__$1);

return statearr_37706;
})();
var statearr_37707_39073 = state_37686__$1;
(statearr_37707_39073[(2)] = null);

(statearr_37707_39073[(1)] = (2));


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
var cljs$core$async$state_machine__35063__auto__ = null;
var cljs$core$async$state_machine__35063__auto____0 = (function (){
var statearr_37708 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37708[(0)] = cljs$core$async$state_machine__35063__auto__);

(statearr_37708[(1)] = (1));

return statearr_37708;
});
var cljs$core$async$state_machine__35063__auto____1 = (function (state_37686){
while(true){
var ret_value__35064__auto__ = (function (){try{while(true){
var result__35065__auto__ = switch__35062__auto__(state_37686);
if(cljs.core.keyword_identical_QMARK_(result__35065__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35065__auto__;
}
break;
}
}catch (e37712){var ex__35066__auto__ = e37712;
var statearr_37713_39074 = state_37686;
(statearr_37713_39074[(2)] = ex__35066__auto__);


if(cljs.core.seq((state_37686[(4)]))){
var statearr_37714_39075 = state_37686;
(statearr_37714_39075[(1)] = cljs.core.first((state_37686[(4)])));

} else {
throw ex__35066__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39076 = state_37686;
state_37686 = G__39076;
continue;
} else {
return ret_value__35064__auto__;
}
break;
}
});
cljs$core$async$state_machine__35063__auto__ = function(state_37686){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35063__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35063__auto____1.call(this,state_37686);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35063__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35063__auto____0;
cljs$core$async$state_machine__35063__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35063__auto____1;
return cljs$core$async$state_machine__35063__auto__;
})()
})();
var state__35277__auto__ = (function (){var statearr_37715 = f__35276__auto__();
(statearr_37715[(6)] = c__35275__auto___39049);

return statearr_37715;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35277__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__37717 = arguments.length;
switch (G__37717) {
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
var c__35275__auto___39081 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35276__auto__ = (function (){var switch__35062__auto__ = (function (state_37756){
var state_val_37757 = (state_37756[(1)]);
if((state_val_37757 === (7))){
var inst_37752 = (state_37756[(2)]);
var state_37756__$1 = state_37756;
var statearr_37758_39088 = state_37756__$1;
(statearr_37758_39088[(2)] = inst_37752);

(statearr_37758_39088[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37757 === (1))){
var inst_37718 = (new Array(n));
var inst_37719 = inst_37718;
var inst_37720 = (0);
var state_37756__$1 = (function (){var statearr_37763 = state_37756;
(statearr_37763[(7)] = inst_37720);

(statearr_37763[(8)] = inst_37719);

return statearr_37763;
})();
var statearr_37764_39091 = state_37756__$1;
(statearr_37764_39091[(2)] = null);

(statearr_37764_39091[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37757 === (4))){
var inst_37723 = (state_37756[(9)]);
var inst_37723__$1 = (state_37756[(2)]);
var inst_37725 = (inst_37723__$1 == null);
var inst_37726 = cljs.core.not(inst_37725);
var state_37756__$1 = (function (){var statearr_37765 = state_37756;
(statearr_37765[(9)] = inst_37723__$1);

return statearr_37765;
})();
if(inst_37726){
var statearr_37766_39094 = state_37756__$1;
(statearr_37766_39094[(1)] = (5));

} else {
var statearr_37767_39095 = state_37756__$1;
(statearr_37767_39095[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37757 === (15))){
var inst_37746 = (state_37756[(2)]);
var state_37756__$1 = state_37756;
var statearr_37772_39097 = state_37756__$1;
(statearr_37772_39097[(2)] = inst_37746);

(statearr_37772_39097[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37757 === (13))){
var state_37756__$1 = state_37756;
var statearr_37773_39098 = state_37756__$1;
(statearr_37773_39098[(2)] = null);

(statearr_37773_39098[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37757 === (6))){
var inst_37720 = (state_37756[(7)]);
var inst_37742 = (inst_37720 > (0));
var state_37756__$1 = state_37756;
if(cljs.core.truth_(inst_37742)){
var statearr_37774_39099 = state_37756__$1;
(statearr_37774_39099[(1)] = (12));

} else {
var statearr_37775_39100 = state_37756__$1;
(statearr_37775_39100[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37757 === (3))){
var inst_37754 = (state_37756[(2)]);
var state_37756__$1 = state_37756;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37756__$1,inst_37754);
} else {
if((state_val_37757 === (12))){
var inst_37719 = (state_37756[(8)]);
var inst_37744 = cljs.core.vec(inst_37719);
var state_37756__$1 = state_37756;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37756__$1,(15),out,inst_37744);
} else {
if((state_val_37757 === (2))){
var state_37756__$1 = state_37756;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37756__$1,(4),ch);
} else {
if((state_val_37757 === (11))){
var inst_37736 = (state_37756[(2)]);
var inst_37737 = (new Array(n));
var inst_37719 = inst_37737;
var inst_37720 = (0);
var state_37756__$1 = (function (){var statearr_37776 = state_37756;
(statearr_37776[(7)] = inst_37720);

(statearr_37776[(10)] = inst_37736);

(statearr_37776[(8)] = inst_37719);

return statearr_37776;
})();
var statearr_37777_39107 = state_37756__$1;
(statearr_37777_39107[(2)] = null);

(statearr_37777_39107[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37757 === (9))){
var inst_37719 = (state_37756[(8)]);
var inst_37734 = cljs.core.vec(inst_37719);
var state_37756__$1 = state_37756;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37756__$1,(11),out,inst_37734);
} else {
if((state_val_37757 === (5))){
var inst_37720 = (state_37756[(7)]);
var inst_37723 = (state_37756[(9)]);
var inst_37729 = (state_37756[(11)]);
var inst_37719 = (state_37756[(8)]);
var inst_37728 = (inst_37719[inst_37720] = inst_37723);
var inst_37729__$1 = (inst_37720 + (1));
var inst_37730 = (inst_37729__$1 < n);
var state_37756__$1 = (function (){var statearr_37778 = state_37756;
(statearr_37778[(11)] = inst_37729__$1);

(statearr_37778[(12)] = inst_37728);

return statearr_37778;
})();
if(cljs.core.truth_(inst_37730)){
var statearr_37780_39109 = state_37756__$1;
(statearr_37780_39109[(1)] = (8));

} else {
var statearr_37782_39110 = state_37756__$1;
(statearr_37782_39110[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37757 === (14))){
var inst_37749 = (state_37756[(2)]);
var inst_37750 = cljs.core.async.close_BANG_(out);
var state_37756__$1 = (function (){var statearr_37784 = state_37756;
(statearr_37784[(13)] = inst_37749);

return statearr_37784;
})();
var statearr_37785_39111 = state_37756__$1;
(statearr_37785_39111[(2)] = inst_37750);

(statearr_37785_39111[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37757 === (10))){
var inst_37740 = (state_37756[(2)]);
var state_37756__$1 = state_37756;
var statearr_37786_39112 = state_37756__$1;
(statearr_37786_39112[(2)] = inst_37740);

(statearr_37786_39112[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37757 === (8))){
var inst_37729 = (state_37756[(11)]);
var inst_37719 = (state_37756[(8)]);
var tmp37783 = inst_37719;
var inst_37719__$1 = tmp37783;
var inst_37720 = inst_37729;
var state_37756__$1 = (function (){var statearr_37787 = state_37756;
(statearr_37787[(7)] = inst_37720);

(statearr_37787[(8)] = inst_37719__$1);

return statearr_37787;
})();
var statearr_37788_39113 = state_37756__$1;
(statearr_37788_39113[(2)] = null);

(statearr_37788_39113[(1)] = (2));


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
var cljs$core$async$state_machine__35063__auto__ = null;
var cljs$core$async$state_machine__35063__auto____0 = (function (){
var statearr_37789 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37789[(0)] = cljs$core$async$state_machine__35063__auto__);

(statearr_37789[(1)] = (1));

return statearr_37789;
});
var cljs$core$async$state_machine__35063__auto____1 = (function (state_37756){
while(true){
var ret_value__35064__auto__ = (function (){try{while(true){
var result__35065__auto__ = switch__35062__auto__(state_37756);
if(cljs.core.keyword_identical_QMARK_(result__35065__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35065__auto__;
}
break;
}
}catch (e37790){var ex__35066__auto__ = e37790;
var statearr_37791_39114 = state_37756;
(statearr_37791_39114[(2)] = ex__35066__auto__);


if(cljs.core.seq((state_37756[(4)]))){
var statearr_37792_39115 = state_37756;
(statearr_37792_39115[(1)] = cljs.core.first((state_37756[(4)])));

} else {
throw ex__35066__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39116 = state_37756;
state_37756 = G__39116;
continue;
} else {
return ret_value__35064__auto__;
}
break;
}
});
cljs$core$async$state_machine__35063__auto__ = function(state_37756){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35063__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35063__auto____1.call(this,state_37756);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35063__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35063__auto____0;
cljs$core$async$state_machine__35063__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35063__auto____1;
return cljs$core$async$state_machine__35063__auto__;
})()
})();
var state__35277__auto__ = (function (){var statearr_37793 = f__35276__auto__();
(statearr_37793[(6)] = c__35275__auto___39081);

return statearr_37793;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35277__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__37795 = arguments.length;
switch (G__37795) {
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
var c__35275__auto___39122 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35276__auto__ = (function (){var switch__35062__auto__ = (function (state_37837){
var state_val_37838 = (state_37837[(1)]);
if((state_val_37838 === (7))){
var inst_37833 = (state_37837[(2)]);
var state_37837__$1 = state_37837;
var statearr_37839_39125 = state_37837__$1;
(statearr_37839_39125[(2)] = inst_37833);

(statearr_37839_39125[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37838 === (1))){
var inst_37796 = [];
var inst_37797 = inst_37796;
var inst_37798 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_37837__$1 = (function (){var statearr_37840 = state_37837;
(statearr_37840[(7)] = inst_37797);

(statearr_37840[(8)] = inst_37798);

return statearr_37840;
})();
var statearr_37841_39127 = state_37837__$1;
(statearr_37841_39127[(2)] = null);

(statearr_37841_39127[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37838 === (4))){
var inst_37801 = (state_37837[(9)]);
var inst_37801__$1 = (state_37837[(2)]);
var inst_37802 = (inst_37801__$1 == null);
var inst_37803 = cljs.core.not(inst_37802);
var state_37837__$1 = (function (){var statearr_37842 = state_37837;
(statearr_37842[(9)] = inst_37801__$1);

return statearr_37842;
})();
if(inst_37803){
var statearr_37843_39129 = state_37837__$1;
(statearr_37843_39129[(1)] = (5));

} else {
var statearr_37844_39130 = state_37837__$1;
(statearr_37844_39130[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37838 === (15))){
var inst_37827 = (state_37837[(2)]);
var state_37837__$1 = state_37837;
var statearr_37845_39131 = state_37837__$1;
(statearr_37845_39131[(2)] = inst_37827);

(statearr_37845_39131[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37838 === (13))){
var state_37837__$1 = state_37837;
var statearr_37846_39132 = state_37837__$1;
(statearr_37846_39132[(2)] = null);

(statearr_37846_39132[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37838 === (6))){
var inst_37797 = (state_37837[(7)]);
var inst_37822 = inst_37797.length;
var inst_37823 = (inst_37822 > (0));
var state_37837__$1 = state_37837;
if(cljs.core.truth_(inst_37823)){
var statearr_37847_39136 = state_37837__$1;
(statearr_37847_39136[(1)] = (12));

} else {
var statearr_37848_39137 = state_37837__$1;
(statearr_37848_39137[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37838 === (3))){
var inst_37835 = (state_37837[(2)]);
var state_37837__$1 = state_37837;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37837__$1,inst_37835);
} else {
if((state_val_37838 === (12))){
var inst_37797 = (state_37837[(7)]);
var inst_37825 = cljs.core.vec(inst_37797);
var state_37837__$1 = state_37837;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37837__$1,(15),out,inst_37825);
} else {
if((state_val_37838 === (2))){
var state_37837__$1 = state_37837;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37837__$1,(4),ch);
} else {
if((state_val_37838 === (11))){
var inst_37801 = (state_37837[(9)]);
var inst_37805 = (state_37837[(10)]);
var inst_37815 = (state_37837[(2)]);
var inst_37816 = [];
var inst_37817 = inst_37816.push(inst_37801);
var inst_37797 = inst_37816;
var inst_37798 = inst_37805;
var state_37837__$1 = (function (){var statearr_37853 = state_37837;
(statearr_37853[(11)] = inst_37817);

(statearr_37853[(12)] = inst_37815);

(statearr_37853[(7)] = inst_37797);

(statearr_37853[(8)] = inst_37798);

return statearr_37853;
})();
var statearr_37854_39168 = state_37837__$1;
(statearr_37854_39168[(2)] = null);

(statearr_37854_39168[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37838 === (9))){
var inst_37797 = (state_37837[(7)]);
var inst_37813 = cljs.core.vec(inst_37797);
var state_37837__$1 = state_37837;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37837__$1,(11),out,inst_37813);
} else {
if((state_val_37838 === (5))){
var inst_37801 = (state_37837[(9)]);
var inst_37798 = (state_37837[(8)]);
var inst_37805 = (state_37837[(10)]);
var inst_37805__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_37801) : f.call(null,inst_37801));
var inst_37806 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_37805__$1,inst_37798);
var inst_37807 = cljs.core.keyword_identical_QMARK_(inst_37798,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_37808 = ((inst_37806) || (inst_37807));
var state_37837__$1 = (function (){var statearr_37858 = state_37837;
(statearr_37858[(10)] = inst_37805__$1);

return statearr_37858;
})();
if(cljs.core.truth_(inst_37808)){
var statearr_37859_39169 = state_37837__$1;
(statearr_37859_39169[(1)] = (8));

} else {
var statearr_37860_39170 = state_37837__$1;
(statearr_37860_39170[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37838 === (14))){
var inst_37830 = (state_37837[(2)]);
var inst_37831 = cljs.core.async.close_BANG_(out);
var state_37837__$1 = (function (){var statearr_37862 = state_37837;
(statearr_37862[(13)] = inst_37830);

return statearr_37862;
})();
var statearr_37863_39171 = state_37837__$1;
(statearr_37863_39171[(2)] = inst_37831);

(statearr_37863_39171[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37838 === (10))){
var inst_37820 = (state_37837[(2)]);
var state_37837__$1 = state_37837;
var statearr_37864_39172 = state_37837__$1;
(statearr_37864_39172[(2)] = inst_37820);

(statearr_37864_39172[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37838 === (8))){
var inst_37801 = (state_37837[(9)]);
var inst_37797 = (state_37837[(7)]);
var inst_37805 = (state_37837[(10)]);
var inst_37810 = inst_37797.push(inst_37801);
var tmp37861 = inst_37797;
var inst_37797__$1 = tmp37861;
var inst_37798 = inst_37805;
var state_37837__$1 = (function (){var statearr_37865 = state_37837;
(statearr_37865[(14)] = inst_37810);

(statearr_37865[(7)] = inst_37797__$1);

(statearr_37865[(8)] = inst_37798);

return statearr_37865;
})();
var statearr_37866_39173 = state_37837__$1;
(statearr_37866_39173[(2)] = null);

(statearr_37866_39173[(1)] = (2));


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
var cljs$core$async$state_machine__35063__auto__ = null;
var cljs$core$async$state_machine__35063__auto____0 = (function (){
var statearr_37867 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37867[(0)] = cljs$core$async$state_machine__35063__auto__);

(statearr_37867[(1)] = (1));

return statearr_37867;
});
var cljs$core$async$state_machine__35063__auto____1 = (function (state_37837){
while(true){
var ret_value__35064__auto__ = (function (){try{while(true){
var result__35065__auto__ = switch__35062__auto__(state_37837);
if(cljs.core.keyword_identical_QMARK_(result__35065__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35065__auto__;
}
break;
}
}catch (e37868){var ex__35066__auto__ = e37868;
var statearr_37869_39174 = state_37837;
(statearr_37869_39174[(2)] = ex__35066__auto__);


if(cljs.core.seq((state_37837[(4)]))){
var statearr_37870_39175 = state_37837;
(statearr_37870_39175[(1)] = cljs.core.first((state_37837[(4)])));

} else {
throw ex__35066__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39176 = state_37837;
state_37837 = G__39176;
continue;
} else {
return ret_value__35064__auto__;
}
break;
}
});
cljs$core$async$state_machine__35063__auto__ = function(state_37837){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35063__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35063__auto____1.call(this,state_37837);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35063__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35063__auto____0;
cljs$core$async$state_machine__35063__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35063__auto____1;
return cljs$core$async$state_machine__35063__auto__;
})()
})();
var state__35277__auto__ = (function (){var statearr_37871 = f__35276__auto__();
(statearr_37871[(6)] = c__35275__auto___39122);

return statearr_37871;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35277__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
