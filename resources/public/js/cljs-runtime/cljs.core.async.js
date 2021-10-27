goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__35364 = arguments.length;
switch (G__35364) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35365 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35365 = (function (f,blockable,meta35366){
this.f = f;
this.blockable = blockable;
this.meta35366 = meta35366;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35365.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35367,meta35366__$1){
var self__ = this;
var _35367__$1 = this;
return (new cljs.core.async.t_cljs$core$async35365(self__.f,self__.blockable,meta35366__$1));
}));

(cljs.core.async.t_cljs$core$async35365.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35367){
var self__ = this;
var _35367__$1 = this;
return self__.meta35366;
}));

(cljs.core.async.t_cljs$core$async35365.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35365.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async35365.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async35365.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async35365.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta35366","meta35366",-1021303343,null)], null);
}));

(cljs.core.async.t_cljs$core$async35365.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35365.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35365");

(cljs.core.async.t_cljs$core$async35365.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async35365");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35365.
 */
cljs.core.async.__GT_t_cljs$core$async35365 = (function cljs$core$async$__GT_t_cljs$core$async35365(f__$1,blockable__$1,meta35366){
return (new cljs.core.async.t_cljs$core$async35365(f__$1,blockable__$1,meta35366));
});

}

return (new cljs.core.async.t_cljs$core$async35365(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__35371 = arguments.length;
switch (G__35371) {
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
var G__35374 = arguments.length;
switch (G__35374) {
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
var G__35384 = arguments.length;
switch (G__35384) {
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
var val_37878 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_37878) : fn1.call(null,val_37878));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_37878) : fn1.call(null,val_37878));
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
var G__35389 = arguments.length;
switch (G__35389) {
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
var n__4613__auto___37880 = n;
var x_37881 = (0);
while(true){
if((x_37881 < n__4613__auto___37880)){
(a[x_37881] = x_37881);

var G__37882 = (x_37881 + (1));
x_37881 = G__37882;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35393 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35393 = (function (flag,meta35394){
this.flag = flag;
this.meta35394 = meta35394;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35393.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35395,meta35394__$1){
var self__ = this;
var _35395__$1 = this;
return (new cljs.core.async.t_cljs$core$async35393(self__.flag,meta35394__$1));
}));

(cljs.core.async.t_cljs$core$async35393.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35395){
var self__ = this;
var _35395__$1 = this;
return self__.meta35394;
}));

(cljs.core.async.t_cljs$core$async35393.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35393.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async35393.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async35393.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async35393.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta35394","meta35394",-767645904,null)], null);
}));

(cljs.core.async.t_cljs$core$async35393.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35393.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35393");

(cljs.core.async.t_cljs$core$async35393.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async35393");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35393.
 */
cljs.core.async.__GT_t_cljs$core$async35393 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async35393(flag__$1,meta35394){
return (new cljs.core.async.t_cljs$core$async35393(flag__$1,meta35394));
});

}

return (new cljs.core.async.t_cljs$core$async35393(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35398 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35398 = (function (flag,cb,meta35399){
this.flag = flag;
this.cb = cb;
this.meta35399 = meta35399;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35398.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35400,meta35399__$1){
var self__ = this;
var _35400__$1 = this;
return (new cljs.core.async.t_cljs$core$async35398(self__.flag,self__.cb,meta35399__$1));
}));

(cljs.core.async.t_cljs$core$async35398.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35400){
var self__ = this;
var _35400__$1 = this;
return self__.meta35399;
}));

(cljs.core.async.t_cljs$core$async35398.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35398.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async35398.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async35398.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async35398.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta35399","meta35399",1975089940,null)], null);
}));

(cljs.core.async.t_cljs$core$async35398.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35398.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35398");

(cljs.core.async.t_cljs$core$async35398.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async35398");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35398.
 */
cljs.core.async.__GT_t_cljs$core$async35398 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async35398(flag__$1,cb__$1,meta35399){
return (new cljs.core.async.t_cljs$core$async35398(flag__$1,cb__$1,meta35399));
});

}

return (new cljs.core.async.t_cljs$core$async35398(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__35401_SHARP_){
var G__35403 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__35401_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__35403) : fret.call(null,G__35403));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__35402_SHARP_){
var G__35405 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__35402_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__35405) : fret.call(null,G__35405));
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
var G__37883 = (i + (1));
i = G__37883;
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
var len__4736__auto___37884 = arguments.length;
var i__4737__auto___37885 = (0);
while(true){
if((i__4737__auto___37885 < len__4736__auto___37884)){
args__4742__auto__.push((arguments[i__4737__auto___37885]));

var G__37886 = (i__4737__auto___37885 + (1));
i__4737__auto___37885 = G__37886;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__35408){
var map__35409 = p__35408;
var map__35409__$1 = (((((!((map__35409 == null))))?(((((map__35409.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35409.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35409):map__35409);
var opts = map__35409__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq35406){
var G__35407 = cljs.core.first(seq35406);
var seq35406__$1 = cljs.core.next(seq35406);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35407,seq35406__$1);
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
var G__35412 = arguments.length;
switch (G__35412) {
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
var c__35306__auto___37888 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35307__auto__ = (function (){var switch__35071__auto__ = (function (state_35548){
var state_val_35550 = (state_35548[(1)]);
if((state_val_35550 === (7))){
var inst_35513 = (state_35548[(2)]);
var state_35548__$1 = state_35548;
var statearr_35556_37889 = state_35548__$1;
(statearr_35556_37889[(2)] = inst_35513);

(statearr_35556_37889[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35550 === (1))){
var state_35548__$1 = state_35548;
var statearr_35557_37890 = state_35548__$1;
(statearr_35557_37890[(2)] = null);

(statearr_35557_37890[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35550 === (4))){
var inst_35465 = (state_35548[(7)]);
var inst_35465__$1 = (state_35548[(2)]);
var inst_35481 = (inst_35465__$1 == null);
var state_35548__$1 = (function (){var statearr_35561 = state_35548;
(statearr_35561[(7)] = inst_35465__$1);

return statearr_35561;
})();
if(cljs.core.truth_(inst_35481)){
var statearr_35562_37891 = state_35548__$1;
(statearr_35562_37891[(1)] = (5));

} else {
var statearr_35563_37892 = state_35548__$1;
(statearr_35563_37892[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35550 === (13))){
var state_35548__$1 = state_35548;
var statearr_35564_37894 = state_35548__$1;
(statearr_35564_37894[(2)] = null);

(statearr_35564_37894[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35550 === (6))){
var inst_35465 = (state_35548[(7)]);
var state_35548__$1 = state_35548;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35548__$1,(11),to,inst_35465);
} else {
if((state_val_35550 === (3))){
var inst_35518 = (state_35548[(2)]);
var state_35548__$1 = state_35548;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35548__$1,inst_35518);
} else {
if((state_val_35550 === (12))){
var state_35548__$1 = state_35548;
var statearr_35568_37896 = state_35548__$1;
(statearr_35568_37896[(2)] = null);

(statearr_35568_37896[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35550 === (2))){
var state_35548__$1 = state_35548;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35548__$1,(4),from);
} else {
if((state_val_35550 === (11))){
var inst_35497 = (state_35548[(2)]);
var state_35548__$1 = state_35548;
if(cljs.core.truth_(inst_35497)){
var statearr_35569_37897 = state_35548__$1;
(statearr_35569_37897[(1)] = (12));

} else {
var statearr_35570_37898 = state_35548__$1;
(statearr_35570_37898[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35550 === (9))){
var state_35548__$1 = state_35548;
var statearr_35571_37899 = state_35548__$1;
(statearr_35571_37899[(2)] = null);

(statearr_35571_37899[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35550 === (5))){
var state_35548__$1 = state_35548;
if(cljs.core.truth_(close_QMARK_)){
var statearr_35572_37900 = state_35548__$1;
(statearr_35572_37900[(1)] = (8));

} else {
var statearr_35573_37901 = state_35548__$1;
(statearr_35573_37901[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35550 === (14))){
var inst_35511 = (state_35548[(2)]);
var state_35548__$1 = state_35548;
var statearr_35574_37902 = state_35548__$1;
(statearr_35574_37902[(2)] = inst_35511);

(statearr_35574_37902[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35550 === (10))){
var inst_35494 = (state_35548[(2)]);
var state_35548__$1 = state_35548;
var statearr_35575_37903 = state_35548__$1;
(statearr_35575_37903[(2)] = inst_35494);

(statearr_35575_37903[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35550 === (8))){
var inst_35488 = cljs.core.async.close_BANG_(to);
var state_35548__$1 = state_35548;
var statearr_35576_37904 = state_35548__$1;
(statearr_35576_37904[(2)] = inst_35488);

(statearr_35576_37904[(1)] = (10));


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
var cljs$core$async$state_machine__35072__auto__ = null;
var cljs$core$async$state_machine__35072__auto____0 = (function (){
var statearr_35577 = [null,null,null,null,null,null,null,null];
(statearr_35577[(0)] = cljs$core$async$state_machine__35072__auto__);

(statearr_35577[(1)] = (1));

return statearr_35577;
});
var cljs$core$async$state_machine__35072__auto____1 = (function (state_35548){
while(true){
var ret_value__35073__auto__ = (function (){try{while(true){
var result__35074__auto__ = switch__35071__auto__(state_35548);
if(cljs.core.keyword_identical_QMARK_(result__35074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35074__auto__;
}
break;
}
}catch (e35578){var ex__35075__auto__ = e35578;
var statearr_35579_37909 = state_35548;
(statearr_35579_37909[(2)] = ex__35075__auto__);


if(cljs.core.seq((state_35548[(4)]))){
var statearr_35580_37910 = state_35548;
(statearr_35580_37910[(1)] = cljs.core.first((state_35548[(4)])));

} else {
throw ex__35075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37911 = state_35548;
state_35548 = G__37911;
continue;
} else {
return ret_value__35073__auto__;
}
break;
}
});
cljs$core$async$state_machine__35072__auto__ = function(state_35548){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35072__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35072__auto____1.call(this,state_35548);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35072__auto____0;
cljs$core$async$state_machine__35072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35072__auto____1;
return cljs$core$async$state_machine__35072__auto__;
})()
})();
var state__35308__auto__ = (function (){var statearr_35581 = f__35307__auto__();
(statearr_35581[(6)] = c__35306__auto___37888);

return statearr_35581;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35308__auto__);
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
var process = (function (p__35582){
var vec__35583 = p__35582;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35583,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35583,(1),null);
var job = vec__35583;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__35306__auto___37917 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35307__auto__ = (function (){var switch__35071__auto__ = (function (state_35590){
var state_val_35591 = (state_35590[(1)]);
if((state_val_35591 === (1))){
var state_35590__$1 = state_35590;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35590__$1,(2),res,v);
} else {
if((state_val_35591 === (2))){
var inst_35587 = (state_35590[(2)]);
var inst_35588 = cljs.core.async.close_BANG_(res);
var state_35590__$1 = (function (){var statearr_35593 = state_35590;
(statearr_35593[(7)] = inst_35587);

return statearr_35593;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_35590__$1,inst_35588);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__35072__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35072__auto____0 = (function (){
var statearr_35594 = [null,null,null,null,null,null,null,null];
(statearr_35594[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35072__auto__);

(statearr_35594[(1)] = (1));

return statearr_35594;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35072__auto____1 = (function (state_35590){
while(true){
var ret_value__35073__auto__ = (function (){try{while(true){
var result__35074__auto__ = switch__35071__auto__(state_35590);
if(cljs.core.keyword_identical_QMARK_(result__35074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35074__auto__;
}
break;
}
}catch (e35595){var ex__35075__auto__ = e35595;
var statearr_35596_37920 = state_35590;
(statearr_35596_37920[(2)] = ex__35075__auto__);


if(cljs.core.seq((state_35590[(4)]))){
var statearr_35597_37921 = state_35590;
(statearr_35597_37921[(1)] = cljs.core.first((state_35590[(4)])));

} else {
throw ex__35075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37922 = state_35590;
state_35590 = G__37922;
continue;
} else {
return ret_value__35073__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35072__auto__ = function(state_35590){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35072__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35072__auto____1.call(this,state_35590);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__35072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35072__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35072__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35072__auto__;
})()
})();
var state__35308__auto__ = (function (){var statearr_35598 = f__35307__auto__();
(statearr_35598[(6)] = c__35306__auto___37917);

return statearr_35598;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35308__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__35600){
var vec__35601 = p__35600;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35601,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35601,(1),null);
var job = vec__35601;
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
var n__4613__auto___37923 = n;
var __37924 = (0);
while(true){
if((__37924 < n__4613__auto___37923)){
var G__35604_37925 = type;
var G__35604_37926__$1 = (((G__35604_37925 instanceof cljs.core.Keyword))?G__35604_37925.fqn:null);
switch (G__35604_37926__$1) {
case "compute":
var c__35306__auto___37929 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__37924,c__35306__auto___37929,G__35604_37925,G__35604_37926__$1,n__4613__auto___37923,jobs,results,process,async){
return (function (){
var f__35307__auto__ = (function (){var switch__35071__auto__ = ((function (__37924,c__35306__auto___37929,G__35604_37925,G__35604_37926__$1,n__4613__auto___37923,jobs,results,process,async){
return (function (state_35617){
var state_val_35618 = (state_35617[(1)]);
if((state_val_35618 === (1))){
var state_35617__$1 = state_35617;
var statearr_35619_37930 = state_35617__$1;
(statearr_35619_37930[(2)] = null);

(statearr_35619_37930[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35618 === (2))){
var state_35617__$1 = state_35617;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35617__$1,(4),jobs);
} else {
if((state_val_35618 === (3))){
var inst_35615 = (state_35617[(2)]);
var state_35617__$1 = state_35617;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35617__$1,inst_35615);
} else {
if((state_val_35618 === (4))){
var inst_35607 = (state_35617[(2)]);
var inst_35608 = process(inst_35607);
var state_35617__$1 = state_35617;
if(cljs.core.truth_(inst_35608)){
var statearr_35621_37932 = state_35617__$1;
(statearr_35621_37932[(1)] = (5));

} else {
var statearr_35622_37934 = state_35617__$1;
(statearr_35622_37934[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35618 === (5))){
var state_35617__$1 = state_35617;
var statearr_35623_37936 = state_35617__$1;
(statearr_35623_37936[(2)] = null);

(statearr_35623_37936[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35618 === (6))){
var state_35617__$1 = state_35617;
var statearr_35624_37938 = state_35617__$1;
(statearr_35624_37938[(2)] = null);

(statearr_35624_37938[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35618 === (7))){
var inst_35613 = (state_35617[(2)]);
var state_35617__$1 = state_35617;
var statearr_35625_37939 = state_35617__$1;
(statearr_35625_37939[(2)] = inst_35613);

(statearr_35625_37939[(1)] = (3));


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
});})(__37924,c__35306__auto___37929,G__35604_37925,G__35604_37926__$1,n__4613__auto___37923,jobs,results,process,async))
;
return ((function (__37924,switch__35071__auto__,c__35306__auto___37929,G__35604_37925,G__35604_37926__$1,n__4613__auto___37923,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__35072__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35072__auto____0 = (function (){
var statearr_35626 = [null,null,null,null,null,null,null];
(statearr_35626[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35072__auto__);

(statearr_35626[(1)] = (1));

return statearr_35626;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35072__auto____1 = (function (state_35617){
while(true){
var ret_value__35073__auto__ = (function (){try{while(true){
var result__35074__auto__ = switch__35071__auto__(state_35617);
if(cljs.core.keyword_identical_QMARK_(result__35074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35074__auto__;
}
break;
}
}catch (e35628){var ex__35075__auto__ = e35628;
var statearr_35629_37943 = state_35617;
(statearr_35629_37943[(2)] = ex__35075__auto__);


if(cljs.core.seq((state_35617[(4)]))){
var statearr_35633_37944 = state_35617;
(statearr_35633_37944[(1)] = cljs.core.first((state_35617[(4)])));

} else {
throw ex__35075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37945 = state_35617;
state_35617 = G__37945;
continue;
} else {
return ret_value__35073__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35072__auto__ = function(state_35617){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35072__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35072__auto____1.call(this,state_35617);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__35072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35072__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35072__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35072__auto__;
})()
;})(__37924,switch__35071__auto__,c__35306__auto___37929,G__35604_37925,G__35604_37926__$1,n__4613__auto___37923,jobs,results,process,async))
})();
var state__35308__auto__ = (function (){var statearr_35659 = f__35307__auto__();
(statearr_35659[(6)] = c__35306__auto___37929);

return statearr_35659;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35308__auto__);
});})(__37924,c__35306__auto___37929,G__35604_37925,G__35604_37926__$1,n__4613__auto___37923,jobs,results,process,async))
);


break;
case "async":
var c__35306__auto___37948 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__37924,c__35306__auto___37948,G__35604_37925,G__35604_37926__$1,n__4613__auto___37923,jobs,results,process,async){
return (function (){
var f__35307__auto__ = (function (){var switch__35071__auto__ = ((function (__37924,c__35306__auto___37948,G__35604_37925,G__35604_37926__$1,n__4613__auto___37923,jobs,results,process,async){
return (function (state_35692){
var state_val_35693 = (state_35692[(1)]);
if((state_val_35693 === (1))){
var state_35692__$1 = state_35692;
var statearr_35699_37949 = state_35692__$1;
(statearr_35699_37949[(2)] = null);

(statearr_35699_37949[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35693 === (2))){
var state_35692__$1 = state_35692;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35692__$1,(4),jobs);
} else {
if((state_val_35693 === (3))){
var inst_35690 = (state_35692[(2)]);
var state_35692__$1 = state_35692;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35692__$1,inst_35690);
} else {
if((state_val_35693 === (4))){
var inst_35682 = (state_35692[(2)]);
var inst_35683 = async(inst_35682);
var state_35692__$1 = state_35692;
if(cljs.core.truth_(inst_35683)){
var statearr_35706_37950 = state_35692__$1;
(statearr_35706_37950[(1)] = (5));

} else {
var statearr_35711_37951 = state_35692__$1;
(statearr_35711_37951[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35693 === (5))){
var state_35692__$1 = state_35692;
var statearr_35715_37952 = state_35692__$1;
(statearr_35715_37952[(2)] = null);

(statearr_35715_37952[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35693 === (6))){
var state_35692__$1 = state_35692;
var statearr_35721_37953 = state_35692__$1;
(statearr_35721_37953[(2)] = null);

(statearr_35721_37953[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35693 === (7))){
var inst_35688 = (state_35692[(2)]);
var state_35692__$1 = state_35692;
var statearr_35726_37954 = state_35692__$1;
(statearr_35726_37954[(2)] = inst_35688);

(statearr_35726_37954[(1)] = (3));


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
});})(__37924,c__35306__auto___37948,G__35604_37925,G__35604_37926__$1,n__4613__auto___37923,jobs,results,process,async))
;
return ((function (__37924,switch__35071__auto__,c__35306__auto___37948,G__35604_37925,G__35604_37926__$1,n__4613__auto___37923,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__35072__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35072__auto____0 = (function (){
var statearr_35727 = [null,null,null,null,null,null,null];
(statearr_35727[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35072__auto__);

(statearr_35727[(1)] = (1));

return statearr_35727;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35072__auto____1 = (function (state_35692){
while(true){
var ret_value__35073__auto__ = (function (){try{while(true){
var result__35074__auto__ = switch__35071__auto__(state_35692);
if(cljs.core.keyword_identical_QMARK_(result__35074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35074__auto__;
}
break;
}
}catch (e35729){var ex__35075__auto__ = e35729;
var statearr_35730_37956 = state_35692;
(statearr_35730_37956[(2)] = ex__35075__auto__);


if(cljs.core.seq((state_35692[(4)]))){
var statearr_35731_37957 = state_35692;
(statearr_35731_37957[(1)] = cljs.core.first((state_35692[(4)])));

} else {
throw ex__35075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37958 = state_35692;
state_35692 = G__37958;
continue;
} else {
return ret_value__35073__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35072__auto__ = function(state_35692){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35072__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35072__auto____1.call(this,state_35692);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__35072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35072__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35072__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35072__auto__;
})()
;})(__37924,switch__35071__auto__,c__35306__auto___37948,G__35604_37925,G__35604_37926__$1,n__4613__auto___37923,jobs,results,process,async))
})();
var state__35308__auto__ = (function (){var statearr_35736 = f__35307__auto__();
(statearr_35736[(6)] = c__35306__auto___37948);

return statearr_35736;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35308__auto__);
});})(__37924,c__35306__auto___37948,G__35604_37925,G__35604_37926__$1,n__4613__auto___37923,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35604_37926__$1)].join('')));

}

var G__37960 = (__37924 + (1));
__37924 = G__37960;
continue;
} else {
}
break;
}

var c__35306__auto___37961 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35307__auto__ = (function (){var switch__35071__auto__ = (function (state_35798){
var state_val_35799 = (state_35798[(1)]);
if((state_val_35799 === (7))){
var inst_35777 = (state_35798[(2)]);
var state_35798__$1 = state_35798;
var statearr_35815_37963 = state_35798__$1;
(statearr_35815_37963[(2)] = inst_35777);

(statearr_35815_37963[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35799 === (1))){
var state_35798__$1 = state_35798;
var statearr_35816_37965 = state_35798__$1;
(statearr_35816_37965[(2)] = null);

(statearr_35816_37965[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35799 === (4))){
var inst_35752 = (state_35798[(7)]);
var inst_35752__$1 = (state_35798[(2)]);
var inst_35757 = (inst_35752__$1 == null);
var state_35798__$1 = (function (){var statearr_35818 = state_35798;
(statearr_35818[(7)] = inst_35752__$1);

return statearr_35818;
})();
if(cljs.core.truth_(inst_35757)){
var statearr_35819_37967 = state_35798__$1;
(statearr_35819_37967[(1)] = (5));

} else {
var statearr_35820_37968 = state_35798__$1;
(statearr_35820_37968[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35799 === (6))){
var inst_35762 = (state_35798[(8)]);
var inst_35752 = (state_35798[(7)]);
var inst_35762__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_35763 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_35768 = [inst_35752,inst_35762__$1];
var inst_35769 = (new cljs.core.PersistentVector(null,2,(5),inst_35763,inst_35768,null));
var state_35798__$1 = (function (){var statearr_35833 = state_35798;
(statearr_35833[(8)] = inst_35762__$1);

return statearr_35833;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35798__$1,(8),jobs,inst_35769);
} else {
if((state_val_35799 === (3))){
var inst_35779 = (state_35798[(2)]);
var state_35798__$1 = state_35798;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35798__$1,inst_35779);
} else {
if((state_val_35799 === (2))){
var state_35798__$1 = state_35798;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35798__$1,(4),from);
} else {
if((state_val_35799 === (9))){
var inst_35773 = (state_35798[(2)]);
var state_35798__$1 = (function (){var statearr_35844 = state_35798;
(statearr_35844[(9)] = inst_35773);

return statearr_35844;
})();
var statearr_35845_37972 = state_35798__$1;
(statearr_35845_37972[(2)] = null);

(statearr_35845_37972[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35799 === (5))){
var inst_35759 = cljs.core.async.close_BANG_(jobs);
var state_35798__$1 = state_35798;
var statearr_35846_37973 = state_35798__$1;
(statearr_35846_37973[(2)] = inst_35759);

(statearr_35846_37973[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35799 === (8))){
var inst_35762 = (state_35798[(8)]);
var inst_35771 = (state_35798[(2)]);
var state_35798__$1 = (function (){var statearr_35848 = state_35798;
(statearr_35848[(10)] = inst_35771);

return statearr_35848;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35798__$1,(9),results,inst_35762);
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
var cljs$core$async$pipeline_STAR__$_state_machine__35072__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35072__auto____0 = (function (){
var statearr_35849 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35849[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35072__auto__);

(statearr_35849[(1)] = (1));

return statearr_35849;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35072__auto____1 = (function (state_35798){
while(true){
var ret_value__35073__auto__ = (function (){try{while(true){
var result__35074__auto__ = switch__35071__auto__(state_35798);
if(cljs.core.keyword_identical_QMARK_(result__35074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35074__auto__;
}
break;
}
}catch (e35850){var ex__35075__auto__ = e35850;
var statearr_35851_37974 = state_35798;
(statearr_35851_37974[(2)] = ex__35075__auto__);


if(cljs.core.seq((state_35798[(4)]))){
var statearr_35852_37975 = state_35798;
(statearr_35852_37975[(1)] = cljs.core.first((state_35798[(4)])));

} else {
throw ex__35075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37976 = state_35798;
state_35798 = G__37976;
continue;
} else {
return ret_value__35073__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35072__auto__ = function(state_35798){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35072__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35072__auto____1.call(this,state_35798);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__35072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35072__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35072__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35072__auto__;
})()
})();
var state__35308__auto__ = (function (){var statearr_35853 = f__35307__auto__();
(statearr_35853[(6)] = c__35306__auto___37961);

return statearr_35853;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35308__auto__);
}));


var c__35306__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35307__auto__ = (function (){var switch__35071__auto__ = (function (state_35892){
var state_val_35893 = (state_35892[(1)]);
if((state_val_35893 === (7))){
var inst_35888 = (state_35892[(2)]);
var state_35892__$1 = state_35892;
var statearr_35894_37977 = state_35892__$1;
(statearr_35894_37977[(2)] = inst_35888);

(statearr_35894_37977[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35893 === (20))){
var state_35892__$1 = state_35892;
var statearr_35895_37978 = state_35892__$1;
(statearr_35895_37978[(2)] = null);

(statearr_35895_37978[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35893 === (1))){
var state_35892__$1 = state_35892;
var statearr_35896_37981 = state_35892__$1;
(statearr_35896_37981[(2)] = null);

(statearr_35896_37981[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35893 === (4))){
var inst_35856 = (state_35892[(7)]);
var inst_35856__$1 = (state_35892[(2)]);
var inst_35857 = (inst_35856__$1 == null);
var state_35892__$1 = (function (){var statearr_35897 = state_35892;
(statearr_35897[(7)] = inst_35856__$1);

return statearr_35897;
})();
if(cljs.core.truth_(inst_35857)){
var statearr_35898_37982 = state_35892__$1;
(statearr_35898_37982[(1)] = (5));

} else {
var statearr_35899_37983 = state_35892__$1;
(statearr_35899_37983[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35893 === (15))){
var inst_35869 = (state_35892[(8)]);
var state_35892__$1 = state_35892;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35892__$1,(18),to,inst_35869);
} else {
if((state_val_35893 === (21))){
var inst_35883 = (state_35892[(2)]);
var state_35892__$1 = state_35892;
var statearr_35900_37984 = state_35892__$1;
(statearr_35900_37984[(2)] = inst_35883);

(statearr_35900_37984[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35893 === (13))){
var inst_35885 = (state_35892[(2)]);
var state_35892__$1 = (function (){var statearr_35901 = state_35892;
(statearr_35901[(9)] = inst_35885);

return statearr_35901;
})();
var statearr_35902_37985 = state_35892__$1;
(statearr_35902_37985[(2)] = null);

(statearr_35902_37985[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35893 === (6))){
var inst_35856 = (state_35892[(7)]);
var state_35892__$1 = state_35892;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35892__$1,(11),inst_35856);
} else {
if((state_val_35893 === (17))){
var inst_35878 = (state_35892[(2)]);
var state_35892__$1 = state_35892;
if(cljs.core.truth_(inst_35878)){
var statearr_35903_37986 = state_35892__$1;
(statearr_35903_37986[(1)] = (19));

} else {
var statearr_35904_37987 = state_35892__$1;
(statearr_35904_37987[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35893 === (3))){
var inst_35890 = (state_35892[(2)]);
var state_35892__$1 = state_35892;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35892__$1,inst_35890);
} else {
if((state_val_35893 === (12))){
var inst_35866 = (state_35892[(10)]);
var state_35892__$1 = state_35892;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35892__$1,(14),inst_35866);
} else {
if((state_val_35893 === (2))){
var state_35892__$1 = state_35892;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35892__$1,(4),results);
} else {
if((state_val_35893 === (19))){
var state_35892__$1 = state_35892;
var statearr_35905_37988 = state_35892__$1;
(statearr_35905_37988[(2)] = null);

(statearr_35905_37988[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35893 === (11))){
var inst_35866 = (state_35892[(2)]);
var state_35892__$1 = (function (){var statearr_35906 = state_35892;
(statearr_35906[(10)] = inst_35866);

return statearr_35906;
})();
var statearr_35907_37989 = state_35892__$1;
(statearr_35907_37989[(2)] = null);

(statearr_35907_37989[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35893 === (9))){
var state_35892__$1 = state_35892;
var statearr_35908_37990 = state_35892__$1;
(statearr_35908_37990[(2)] = null);

(statearr_35908_37990[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35893 === (5))){
var state_35892__$1 = state_35892;
if(cljs.core.truth_(close_QMARK_)){
var statearr_35909_37991 = state_35892__$1;
(statearr_35909_37991[(1)] = (8));

} else {
var statearr_35910_37992 = state_35892__$1;
(statearr_35910_37992[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35893 === (14))){
var inst_35869 = (state_35892[(8)]);
var inst_35869__$1 = (state_35892[(2)]);
var inst_35871 = (inst_35869__$1 == null);
var inst_35872 = cljs.core.not(inst_35871);
var state_35892__$1 = (function (){var statearr_35911 = state_35892;
(statearr_35911[(8)] = inst_35869__$1);

return statearr_35911;
})();
if(inst_35872){
var statearr_35912_37997 = state_35892__$1;
(statearr_35912_37997[(1)] = (15));

} else {
var statearr_35913_37998 = state_35892__$1;
(statearr_35913_37998[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35893 === (16))){
var state_35892__$1 = state_35892;
var statearr_35914_37999 = state_35892__$1;
(statearr_35914_37999[(2)] = false);

(statearr_35914_37999[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35893 === (10))){
var inst_35863 = (state_35892[(2)]);
var state_35892__$1 = state_35892;
var statearr_35915_38000 = state_35892__$1;
(statearr_35915_38000[(2)] = inst_35863);

(statearr_35915_38000[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35893 === (18))){
var inst_35875 = (state_35892[(2)]);
var state_35892__$1 = state_35892;
var statearr_35916_38005 = state_35892__$1;
(statearr_35916_38005[(2)] = inst_35875);

(statearr_35916_38005[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35893 === (8))){
var inst_35860 = cljs.core.async.close_BANG_(to);
var state_35892__$1 = state_35892;
var statearr_35917_38006 = state_35892__$1;
(statearr_35917_38006[(2)] = inst_35860);

(statearr_35917_38006[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__35072__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35072__auto____0 = (function (){
var statearr_35918 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35918[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35072__auto__);

(statearr_35918[(1)] = (1));

return statearr_35918;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35072__auto____1 = (function (state_35892){
while(true){
var ret_value__35073__auto__ = (function (){try{while(true){
var result__35074__auto__ = switch__35071__auto__(state_35892);
if(cljs.core.keyword_identical_QMARK_(result__35074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35074__auto__;
}
break;
}
}catch (e35919){var ex__35075__auto__ = e35919;
var statearr_35920_38007 = state_35892;
(statearr_35920_38007[(2)] = ex__35075__auto__);


if(cljs.core.seq((state_35892[(4)]))){
var statearr_35922_38008 = state_35892;
(statearr_35922_38008[(1)] = cljs.core.first((state_35892[(4)])));

} else {
throw ex__35075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38009 = state_35892;
state_35892 = G__38009;
continue;
} else {
return ret_value__35073__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35072__auto__ = function(state_35892){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35072__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35072__auto____1.call(this,state_35892);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__35072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35072__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35072__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35072__auto__;
})()
})();
var state__35308__auto__ = (function (){var statearr_35923 = f__35307__auto__();
(statearr_35923[(6)] = c__35306__auto__);

return statearr_35923;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35308__auto__);
}));

return c__35306__auto__;
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
var G__35927 = arguments.length;
switch (G__35927) {
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
var G__35932 = arguments.length;
switch (G__35932) {
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
var G__35938 = arguments.length;
switch (G__35938) {
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
var c__35306__auto___38015 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35307__auto__ = (function (){var switch__35071__auto__ = (function (state_35966){
var state_val_35967 = (state_35966[(1)]);
if((state_val_35967 === (7))){
var inst_35961 = (state_35966[(2)]);
var state_35966__$1 = state_35966;
var statearr_35968_38016 = state_35966__$1;
(statearr_35968_38016[(2)] = inst_35961);

(statearr_35968_38016[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35967 === (1))){
var state_35966__$1 = state_35966;
var statearr_35969_38017 = state_35966__$1;
(statearr_35969_38017[(2)] = null);

(statearr_35969_38017[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35967 === (4))){
var inst_35942 = (state_35966[(7)]);
var inst_35942__$1 = (state_35966[(2)]);
var inst_35943 = (inst_35942__$1 == null);
var state_35966__$1 = (function (){var statearr_35970 = state_35966;
(statearr_35970[(7)] = inst_35942__$1);

return statearr_35970;
})();
if(cljs.core.truth_(inst_35943)){
var statearr_35971_38018 = state_35966__$1;
(statearr_35971_38018[(1)] = (5));

} else {
var statearr_35972_38019 = state_35966__$1;
(statearr_35972_38019[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35967 === (13))){
var state_35966__$1 = state_35966;
var statearr_35974_38020 = state_35966__$1;
(statearr_35974_38020[(2)] = null);

(statearr_35974_38020[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35967 === (6))){
var inst_35942 = (state_35966[(7)]);
var inst_35948 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_35942) : p.call(null,inst_35942));
var state_35966__$1 = state_35966;
if(cljs.core.truth_(inst_35948)){
var statearr_35975_38021 = state_35966__$1;
(statearr_35975_38021[(1)] = (9));

} else {
var statearr_35976_38022 = state_35966__$1;
(statearr_35976_38022[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35967 === (3))){
var inst_35963 = (state_35966[(2)]);
var state_35966__$1 = state_35966;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35966__$1,inst_35963);
} else {
if((state_val_35967 === (12))){
var state_35966__$1 = state_35966;
var statearr_35977_38023 = state_35966__$1;
(statearr_35977_38023[(2)] = null);

(statearr_35977_38023[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35967 === (2))){
var state_35966__$1 = state_35966;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35966__$1,(4),ch);
} else {
if((state_val_35967 === (11))){
var inst_35942 = (state_35966[(7)]);
var inst_35952 = (state_35966[(2)]);
var state_35966__$1 = state_35966;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35966__$1,(8),inst_35952,inst_35942);
} else {
if((state_val_35967 === (9))){
var state_35966__$1 = state_35966;
var statearr_35978_38024 = state_35966__$1;
(statearr_35978_38024[(2)] = tc);

(statearr_35978_38024[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35967 === (5))){
var inst_35945 = cljs.core.async.close_BANG_(tc);
var inst_35946 = cljs.core.async.close_BANG_(fc);
var state_35966__$1 = (function (){var statearr_35980 = state_35966;
(statearr_35980[(8)] = inst_35945);

return statearr_35980;
})();
var statearr_35981_38025 = state_35966__$1;
(statearr_35981_38025[(2)] = inst_35946);

(statearr_35981_38025[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35967 === (14))){
var inst_35959 = (state_35966[(2)]);
var state_35966__$1 = state_35966;
var statearr_35982_38026 = state_35966__$1;
(statearr_35982_38026[(2)] = inst_35959);

(statearr_35982_38026[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35967 === (10))){
var state_35966__$1 = state_35966;
var statearr_35983_38027 = state_35966__$1;
(statearr_35983_38027[(2)] = fc);

(statearr_35983_38027[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35967 === (8))){
var inst_35954 = (state_35966[(2)]);
var state_35966__$1 = state_35966;
if(cljs.core.truth_(inst_35954)){
var statearr_35984_38029 = state_35966__$1;
(statearr_35984_38029[(1)] = (12));

} else {
var statearr_35985_38030 = state_35966__$1;
(statearr_35985_38030[(1)] = (13));

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
var cljs$core$async$state_machine__35072__auto__ = null;
var cljs$core$async$state_machine__35072__auto____0 = (function (){
var statearr_35986 = [null,null,null,null,null,null,null,null,null];
(statearr_35986[(0)] = cljs$core$async$state_machine__35072__auto__);

(statearr_35986[(1)] = (1));

return statearr_35986;
});
var cljs$core$async$state_machine__35072__auto____1 = (function (state_35966){
while(true){
var ret_value__35073__auto__ = (function (){try{while(true){
var result__35074__auto__ = switch__35071__auto__(state_35966);
if(cljs.core.keyword_identical_QMARK_(result__35074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35074__auto__;
}
break;
}
}catch (e35988){var ex__35075__auto__ = e35988;
var statearr_35989_38032 = state_35966;
(statearr_35989_38032[(2)] = ex__35075__auto__);


if(cljs.core.seq((state_35966[(4)]))){
var statearr_35990_38033 = state_35966;
(statearr_35990_38033[(1)] = cljs.core.first((state_35966[(4)])));

} else {
throw ex__35075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38036 = state_35966;
state_35966 = G__38036;
continue;
} else {
return ret_value__35073__auto__;
}
break;
}
});
cljs$core$async$state_machine__35072__auto__ = function(state_35966){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35072__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35072__auto____1.call(this,state_35966);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35072__auto____0;
cljs$core$async$state_machine__35072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35072__auto____1;
return cljs$core$async$state_machine__35072__auto__;
})()
})();
var state__35308__auto__ = (function (){var statearr_35991 = f__35307__auto__();
(statearr_35991[(6)] = c__35306__auto___38015);

return statearr_35991;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35308__auto__);
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
var c__35306__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35307__auto__ = (function (){var switch__35071__auto__ = (function (state_36014){
var state_val_36015 = (state_36014[(1)]);
if((state_val_36015 === (7))){
var inst_36010 = (state_36014[(2)]);
var state_36014__$1 = state_36014;
var statearr_36017_38038 = state_36014__$1;
(statearr_36017_38038[(2)] = inst_36010);

(statearr_36017_38038[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36015 === (1))){
var inst_35993 = init;
var inst_35994 = inst_35993;
var state_36014__$1 = (function (){var statearr_36018 = state_36014;
(statearr_36018[(7)] = inst_35994);

return statearr_36018;
})();
var statearr_36019_38041 = state_36014__$1;
(statearr_36019_38041[(2)] = null);

(statearr_36019_38041[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36015 === (4))){
var inst_35997 = (state_36014[(8)]);
var inst_35997__$1 = (state_36014[(2)]);
var inst_35998 = (inst_35997__$1 == null);
var state_36014__$1 = (function (){var statearr_36020 = state_36014;
(statearr_36020[(8)] = inst_35997__$1);

return statearr_36020;
})();
if(cljs.core.truth_(inst_35998)){
var statearr_36021_38044 = state_36014__$1;
(statearr_36021_38044[(1)] = (5));

} else {
var statearr_36022_38045 = state_36014__$1;
(statearr_36022_38045[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36015 === (6))){
var inst_35994 = (state_36014[(7)]);
var inst_36001 = (state_36014[(9)]);
var inst_35997 = (state_36014[(8)]);
var inst_36001__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_35994,inst_35997) : f.call(null,inst_35994,inst_35997));
var inst_36002 = cljs.core.reduced_QMARK_(inst_36001__$1);
var state_36014__$1 = (function (){var statearr_36023 = state_36014;
(statearr_36023[(9)] = inst_36001__$1);

return statearr_36023;
})();
if(inst_36002){
var statearr_36024_38046 = state_36014__$1;
(statearr_36024_38046[(1)] = (8));

} else {
var statearr_36026_38047 = state_36014__$1;
(statearr_36026_38047[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36015 === (3))){
var inst_36012 = (state_36014[(2)]);
var state_36014__$1 = state_36014;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36014__$1,inst_36012);
} else {
if((state_val_36015 === (2))){
var state_36014__$1 = state_36014;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36014__$1,(4),ch);
} else {
if((state_val_36015 === (9))){
var inst_36001 = (state_36014[(9)]);
var inst_35994 = inst_36001;
var state_36014__$1 = (function (){var statearr_36027 = state_36014;
(statearr_36027[(7)] = inst_35994);

return statearr_36027;
})();
var statearr_36028_38051 = state_36014__$1;
(statearr_36028_38051[(2)] = null);

(statearr_36028_38051[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36015 === (5))){
var inst_35994 = (state_36014[(7)]);
var state_36014__$1 = state_36014;
var statearr_36029_38052 = state_36014__$1;
(statearr_36029_38052[(2)] = inst_35994);

(statearr_36029_38052[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36015 === (10))){
var inst_36008 = (state_36014[(2)]);
var state_36014__$1 = state_36014;
var statearr_36030_38053 = state_36014__$1;
(statearr_36030_38053[(2)] = inst_36008);

(statearr_36030_38053[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36015 === (8))){
var inst_36001 = (state_36014[(9)]);
var inst_36004 = cljs.core.deref(inst_36001);
var state_36014__$1 = state_36014;
var statearr_36031_38055 = state_36014__$1;
(statearr_36031_38055[(2)] = inst_36004);

(statearr_36031_38055[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__35072__auto__ = null;
var cljs$core$async$reduce_$_state_machine__35072__auto____0 = (function (){
var statearr_36033 = [null,null,null,null,null,null,null,null,null,null];
(statearr_36033[(0)] = cljs$core$async$reduce_$_state_machine__35072__auto__);

(statearr_36033[(1)] = (1));

return statearr_36033;
});
var cljs$core$async$reduce_$_state_machine__35072__auto____1 = (function (state_36014){
while(true){
var ret_value__35073__auto__ = (function (){try{while(true){
var result__35074__auto__ = switch__35071__auto__(state_36014);
if(cljs.core.keyword_identical_QMARK_(result__35074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35074__auto__;
}
break;
}
}catch (e36034){var ex__35075__auto__ = e36034;
var statearr_36035_38058 = state_36014;
(statearr_36035_38058[(2)] = ex__35075__auto__);


if(cljs.core.seq((state_36014[(4)]))){
var statearr_36036_38059 = state_36014;
(statearr_36036_38059[(1)] = cljs.core.first((state_36014[(4)])));

} else {
throw ex__35075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38061 = state_36014;
state_36014 = G__38061;
continue;
} else {
return ret_value__35073__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__35072__auto__ = function(state_36014){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__35072__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__35072__auto____1.call(this,state_36014);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__35072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__35072__auto____0;
cljs$core$async$reduce_$_state_machine__35072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__35072__auto____1;
return cljs$core$async$reduce_$_state_machine__35072__auto__;
})()
})();
var state__35308__auto__ = (function (){var statearr_36037 = f__35307__auto__();
(statearr_36037[(6)] = c__35306__auto__);

return statearr_36037;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35308__auto__);
}));

return c__35306__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__35306__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35307__auto__ = (function (){var switch__35071__auto__ = (function (state_36044){
var state_val_36045 = (state_36044[(1)]);
if((state_val_36045 === (1))){
var inst_36039 = cljs.core.async.reduce(f__$1,init,ch);
var state_36044__$1 = state_36044;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36044__$1,(2),inst_36039);
} else {
if((state_val_36045 === (2))){
var inst_36041 = (state_36044[(2)]);
var inst_36042 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_36041) : f__$1.call(null,inst_36041));
var state_36044__$1 = state_36044;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36044__$1,inst_36042);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__35072__auto__ = null;
var cljs$core$async$transduce_$_state_machine__35072__auto____0 = (function (){
var statearr_36047 = [null,null,null,null,null,null,null];
(statearr_36047[(0)] = cljs$core$async$transduce_$_state_machine__35072__auto__);

(statearr_36047[(1)] = (1));

return statearr_36047;
});
var cljs$core$async$transduce_$_state_machine__35072__auto____1 = (function (state_36044){
while(true){
var ret_value__35073__auto__ = (function (){try{while(true){
var result__35074__auto__ = switch__35071__auto__(state_36044);
if(cljs.core.keyword_identical_QMARK_(result__35074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35074__auto__;
}
break;
}
}catch (e36048){var ex__35075__auto__ = e36048;
var statearr_36049_38064 = state_36044;
(statearr_36049_38064[(2)] = ex__35075__auto__);


if(cljs.core.seq((state_36044[(4)]))){
var statearr_36050_38065 = state_36044;
(statearr_36050_38065[(1)] = cljs.core.first((state_36044[(4)])));

} else {
throw ex__35075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38066 = state_36044;
state_36044 = G__38066;
continue;
} else {
return ret_value__35073__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__35072__auto__ = function(state_36044){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__35072__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__35072__auto____1.call(this,state_36044);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__35072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__35072__auto____0;
cljs$core$async$transduce_$_state_machine__35072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__35072__auto____1;
return cljs$core$async$transduce_$_state_machine__35072__auto__;
})()
})();
var state__35308__auto__ = (function (){var statearr_36051 = f__35307__auto__();
(statearr_36051[(6)] = c__35306__auto__);

return statearr_36051;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35308__auto__);
}));

return c__35306__auto__;
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
var G__36054 = arguments.length;
switch (G__36054) {
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
var c__35306__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35307__auto__ = (function (){var switch__35071__auto__ = (function (state_36081){
var state_val_36082 = (state_36081[(1)]);
if((state_val_36082 === (7))){
var inst_36063 = (state_36081[(2)]);
var state_36081__$1 = state_36081;
var statearr_36083_38068 = state_36081__$1;
(statearr_36083_38068[(2)] = inst_36063);

(statearr_36083_38068[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36082 === (1))){
var inst_36055 = cljs.core.seq(coll);
var inst_36056 = inst_36055;
var state_36081__$1 = (function (){var statearr_36084 = state_36081;
(statearr_36084[(7)] = inst_36056);

return statearr_36084;
})();
var statearr_36085_38072 = state_36081__$1;
(statearr_36085_38072[(2)] = null);

(statearr_36085_38072[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36082 === (4))){
var inst_36056 = (state_36081[(7)]);
var inst_36061 = cljs.core.first(inst_36056);
var state_36081__$1 = state_36081;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36081__$1,(7),ch,inst_36061);
} else {
if((state_val_36082 === (13))){
var inst_36075 = (state_36081[(2)]);
var state_36081__$1 = state_36081;
var statearr_36088_38074 = state_36081__$1;
(statearr_36088_38074[(2)] = inst_36075);

(statearr_36088_38074[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36082 === (6))){
var inst_36066 = (state_36081[(2)]);
var state_36081__$1 = state_36081;
if(cljs.core.truth_(inst_36066)){
var statearr_36089_38075 = state_36081__$1;
(statearr_36089_38075[(1)] = (8));

} else {
var statearr_36090_38076 = state_36081__$1;
(statearr_36090_38076[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36082 === (3))){
var inst_36079 = (state_36081[(2)]);
var state_36081__$1 = state_36081;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36081__$1,inst_36079);
} else {
if((state_val_36082 === (12))){
var state_36081__$1 = state_36081;
var statearr_36091_38078 = state_36081__$1;
(statearr_36091_38078[(2)] = null);

(statearr_36091_38078[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36082 === (2))){
var inst_36056 = (state_36081[(7)]);
var state_36081__$1 = state_36081;
if(cljs.core.truth_(inst_36056)){
var statearr_36092_38079 = state_36081__$1;
(statearr_36092_38079[(1)] = (4));

} else {
var statearr_36093_38080 = state_36081__$1;
(statearr_36093_38080[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36082 === (11))){
var inst_36072 = cljs.core.async.close_BANG_(ch);
var state_36081__$1 = state_36081;
var statearr_36094_38081 = state_36081__$1;
(statearr_36094_38081[(2)] = inst_36072);

(statearr_36094_38081[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36082 === (9))){
var state_36081__$1 = state_36081;
if(cljs.core.truth_(close_QMARK_)){
var statearr_36095_38083 = state_36081__$1;
(statearr_36095_38083[(1)] = (11));

} else {
var statearr_36096_38084 = state_36081__$1;
(statearr_36096_38084[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36082 === (5))){
var inst_36056 = (state_36081[(7)]);
var state_36081__$1 = state_36081;
var statearr_36097_38085 = state_36081__$1;
(statearr_36097_38085[(2)] = inst_36056);

(statearr_36097_38085[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36082 === (10))){
var inst_36077 = (state_36081[(2)]);
var state_36081__$1 = state_36081;
var statearr_36098_38086 = state_36081__$1;
(statearr_36098_38086[(2)] = inst_36077);

(statearr_36098_38086[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36082 === (8))){
var inst_36056 = (state_36081[(7)]);
var inst_36068 = cljs.core.next(inst_36056);
var inst_36056__$1 = inst_36068;
var state_36081__$1 = (function (){var statearr_36099 = state_36081;
(statearr_36099[(7)] = inst_36056__$1);

return statearr_36099;
})();
var statearr_36100_38087 = state_36081__$1;
(statearr_36100_38087[(2)] = null);

(statearr_36100_38087[(1)] = (2));


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
var cljs$core$async$state_machine__35072__auto__ = null;
var cljs$core$async$state_machine__35072__auto____0 = (function (){
var statearr_36101 = [null,null,null,null,null,null,null,null];
(statearr_36101[(0)] = cljs$core$async$state_machine__35072__auto__);

(statearr_36101[(1)] = (1));

return statearr_36101;
});
var cljs$core$async$state_machine__35072__auto____1 = (function (state_36081){
while(true){
var ret_value__35073__auto__ = (function (){try{while(true){
var result__35074__auto__ = switch__35071__auto__(state_36081);
if(cljs.core.keyword_identical_QMARK_(result__35074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35074__auto__;
}
break;
}
}catch (e36102){var ex__35075__auto__ = e36102;
var statearr_36103_38089 = state_36081;
(statearr_36103_38089[(2)] = ex__35075__auto__);


if(cljs.core.seq((state_36081[(4)]))){
var statearr_36104_38091 = state_36081;
(statearr_36104_38091[(1)] = cljs.core.first((state_36081[(4)])));

} else {
throw ex__35075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38096 = state_36081;
state_36081 = G__38096;
continue;
} else {
return ret_value__35073__auto__;
}
break;
}
});
cljs$core$async$state_machine__35072__auto__ = function(state_36081){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35072__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35072__auto____1.call(this,state_36081);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35072__auto____0;
cljs$core$async$state_machine__35072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35072__auto____1;
return cljs$core$async$state_machine__35072__auto__;
})()
})();
var state__35308__auto__ = (function (){var statearr_36106 = f__35307__auto__();
(statearr_36106[(6)] = c__35306__auto__);

return statearr_36106;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35308__auto__);
}));

return c__35306__auto__;
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
var G__36109 = arguments.length;
switch (G__36109) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_38101 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_38101(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_38102 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_38102(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_38104 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_38104(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_38106 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_38106(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36124 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36124 = (function (ch,cs,meta36125){
this.ch = ch;
this.cs = cs;
this.meta36125 = meta36125;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36124.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36126,meta36125__$1){
var self__ = this;
var _36126__$1 = this;
return (new cljs.core.async.t_cljs$core$async36124(self__.ch,self__.cs,meta36125__$1));
}));

(cljs.core.async.t_cljs$core$async36124.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36126){
var self__ = this;
var _36126__$1 = this;
return self__.meta36125;
}));

(cljs.core.async.t_cljs$core$async36124.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36124.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async36124.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36124.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async36124.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async36124.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async36124.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta36125","meta36125",-1760343494,null)], null);
}));

(cljs.core.async.t_cljs$core$async36124.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36124.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36124");

(cljs.core.async.t_cljs$core$async36124.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async36124");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36124.
 */
cljs.core.async.__GT_t_cljs$core$async36124 = (function cljs$core$async$mult_$___GT_t_cljs$core$async36124(ch__$1,cs__$1,meta36125){
return (new cljs.core.async.t_cljs$core$async36124(ch__$1,cs__$1,meta36125));
});

}

return (new cljs.core.async.t_cljs$core$async36124(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__35306__auto___38145 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35307__auto__ = (function (){var switch__35071__auto__ = (function (state_36335){
var state_val_36337 = (state_36335[(1)]);
if((state_val_36337 === (7))){
var inst_36330 = (state_36335[(2)]);
var state_36335__$1 = state_36335;
var statearr_36341_38149 = state_36335__$1;
(statearr_36341_38149[(2)] = inst_36330);

(statearr_36341_38149[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36337 === (20))){
var inst_36211 = (state_36335[(7)]);
var inst_36228 = cljs.core.first(inst_36211);
var inst_36231 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36228,(0),null);
var inst_36233 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36228,(1),null);
var state_36335__$1 = (function (){var statearr_36345 = state_36335;
(statearr_36345[(8)] = inst_36231);

return statearr_36345;
})();
if(cljs.core.truth_(inst_36233)){
var statearr_36346_38161 = state_36335__$1;
(statearr_36346_38161[(1)] = (22));

} else {
var statearr_36347_38165 = state_36335__$1;
(statearr_36347_38165[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36337 === (27))){
var inst_36277 = (state_36335[(9)]);
var inst_36268 = (state_36335[(10)]);
var inst_36169 = (state_36335[(11)]);
var inst_36270 = (state_36335[(12)]);
var inst_36277__$1 = cljs.core._nth(inst_36268,inst_36270);
var inst_36278 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_36277__$1,inst_36169,done);
var state_36335__$1 = (function (){var statearr_36351 = state_36335;
(statearr_36351[(9)] = inst_36277__$1);

return statearr_36351;
})();
if(cljs.core.truth_(inst_36278)){
var statearr_36353_38169 = state_36335__$1;
(statearr_36353_38169[(1)] = (30));

} else {
var statearr_36354_38170 = state_36335__$1;
(statearr_36354_38170[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36337 === (1))){
var state_36335__$1 = state_36335;
var statearr_36355_38179 = state_36335__$1;
(statearr_36355_38179[(2)] = null);

(statearr_36355_38179[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36337 === (24))){
var inst_36211 = (state_36335[(7)]);
var inst_36238 = (state_36335[(2)]);
var inst_36240 = cljs.core.next(inst_36211);
var inst_36181 = inst_36240;
var inst_36182 = null;
var inst_36183 = (0);
var inst_36184 = (0);
var state_36335__$1 = (function (){var statearr_36357 = state_36335;
(statearr_36357[(13)] = inst_36182);

(statearr_36357[(14)] = inst_36181);

(statearr_36357[(15)] = inst_36184);

(statearr_36357[(16)] = inst_36238);

(statearr_36357[(17)] = inst_36183);

return statearr_36357;
})();
var statearr_36360_38203 = state_36335__$1;
(statearr_36360_38203[(2)] = null);

(statearr_36360_38203[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36337 === (39))){
var state_36335__$1 = state_36335;
var statearr_36397_38204 = state_36335__$1;
(statearr_36397_38204[(2)] = null);

(statearr_36397_38204[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36337 === (4))){
var inst_36169 = (state_36335[(11)]);
var inst_36169__$1 = (state_36335[(2)]);
var inst_36170 = (inst_36169__$1 == null);
var state_36335__$1 = (function (){var statearr_36398 = state_36335;
(statearr_36398[(11)] = inst_36169__$1);

return statearr_36398;
})();
if(cljs.core.truth_(inst_36170)){
var statearr_36399_38208 = state_36335__$1;
(statearr_36399_38208[(1)] = (5));

} else {
var statearr_36400_38209 = state_36335__$1;
(statearr_36400_38209[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36337 === (15))){
var inst_36182 = (state_36335[(13)]);
var inst_36181 = (state_36335[(14)]);
var inst_36184 = (state_36335[(15)]);
var inst_36183 = (state_36335[(17)]);
var inst_36204 = (state_36335[(2)]);
var inst_36208 = (inst_36184 + (1));
var tmp36392 = inst_36182;
var tmp36393 = inst_36181;
var tmp36394 = inst_36183;
var inst_36181__$1 = tmp36393;
var inst_36182__$1 = tmp36392;
var inst_36183__$1 = tmp36394;
var inst_36184__$1 = inst_36208;
var state_36335__$1 = (function (){var statearr_36401 = state_36335;
(statearr_36401[(13)] = inst_36182__$1);

(statearr_36401[(14)] = inst_36181__$1);

(statearr_36401[(15)] = inst_36184__$1);

(statearr_36401[(17)] = inst_36183__$1);

(statearr_36401[(18)] = inst_36204);

return statearr_36401;
})();
var statearr_36402_38220 = state_36335__$1;
(statearr_36402_38220[(2)] = null);

(statearr_36402_38220[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36337 === (21))){
var inst_36243 = (state_36335[(2)]);
var state_36335__$1 = state_36335;
var statearr_36406_38224 = state_36335__$1;
(statearr_36406_38224[(2)] = inst_36243);

(statearr_36406_38224[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36337 === (31))){
var inst_36277 = (state_36335[(9)]);
var inst_36283 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_36277);
var state_36335__$1 = state_36335;
var statearr_36407_38229 = state_36335__$1;
(statearr_36407_38229[(2)] = inst_36283);

(statearr_36407_38229[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36337 === (32))){
var inst_36268 = (state_36335[(10)]);
var inst_36266 = (state_36335[(19)]);
var inst_36269 = (state_36335[(20)]);
var inst_36270 = (state_36335[(12)]);
var inst_36285 = (state_36335[(2)]);
var inst_36287 = (inst_36270 + (1));
var tmp36403 = inst_36268;
var tmp36404 = inst_36266;
var tmp36405 = inst_36269;
var inst_36266__$1 = tmp36404;
var inst_36268__$1 = tmp36403;
var inst_36269__$1 = tmp36405;
var inst_36270__$1 = inst_36287;
var state_36335__$1 = (function (){var statearr_36410 = state_36335;
(statearr_36410[(21)] = inst_36285);

(statearr_36410[(10)] = inst_36268__$1);

(statearr_36410[(19)] = inst_36266__$1);

(statearr_36410[(20)] = inst_36269__$1);

(statearr_36410[(12)] = inst_36270__$1);

return statearr_36410;
})();
var statearr_36412_38241 = state_36335__$1;
(statearr_36412_38241[(2)] = null);

(statearr_36412_38241[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36337 === (40))){
var inst_36300 = (state_36335[(22)]);
var inst_36305 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_36300);
var state_36335__$1 = state_36335;
var statearr_36414_38242 = state_36335__$1;
(statearr_36414_38242[(2)] = inst_36305);

(statearr_36414_38242[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36337 === (33))){
var inst_36290 = (state_36335[(23)]);
var inst_36292 = cljs.core.chunked_seq_QMARK_(inst_36290);
var state_36335__$1 = state_36335;
if(inst_36292){
var statearr_36415_38243 = state_36335__$1;
(statearr_36415_38243[(1)] = (36));

} else {
var statearr_36416_38244 = state_36335__$1;
(statearr_36416_38244[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36337 === (13))){
var inst_36197 = (state_36335[(24)]);
var inst_36201 = cljs.core.async.close_BANG_(inst_36197);
var state_36335__$1 = state_36335;
var statearr_36420_38245 = state_36335__$1;
(statearr_36420_38245[(2)] = inst_36201);

(statearr_36420_38245[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36337 === (22))){
var inst_36231 = (state_36335[(8)]);
var inst_36235 = cljs.core.async.close_BANG_(inst_36231);
var state_36335__$1 = state_36335;
var statearr_36421_38263 = state_36335__$1;
(statearr_36421_38263[(2)] = inst_36235);

(statearr_36421_38263[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36337 === (36))){
var inst_36290 = (state_36335[(23)]);
var inst_36295 = cljs.core.chunk_first(inst_36290);
var inst_36296 = cljs.core.chunk_rest(inst_36290);
var inst_36297 = cljs.core.count(inst_36295);
var inst_36266 = inst_36296;
var inst_36268 = inst_36295;
var inst_36269 = inst_36297;
var inst_36270 = (0);
var state_36335__$1 = (function (){var statearr_36422 = state_36335;
(statearr_36422[(10)] = inst_36268);

(statearr_36422[(19)] = inst_36266);

(statearr_36422[(20)] = inst_36269);

(statearr_36422[(12)] = inst_36270);

return statearr_36422;
})();
var statearr_36424_38273 = state_36335__$1;
(statearr_36424_38273[(2)] = null);

(statearr_36424_38273[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36337 === (41))){
var inst_36290 = (state_36335[(23)]);
var inst_36308 = (state_36335[(2)]);
var inst_36309 = cljs.core.next(inst_36290);
var inst_36266 = inst_36309;
var inst_36268 = null;
var inst_36269 = (0);
var inst_36270 = (0);
var state_36335__$1 = (function (){var statearr_36425 = state_36335;
(statearr_36425[(10)] = inst_36268);

(statearr_36425[(19)] = inst_36266);

(statearr_36425[(20)] = inst_36269);

(statearr_36425[(25)] = inst_36308);

(statearr_36425[(12)] = inst_36270);

return statearr_36425;
})();
var statearr_36426_38284 = state_36335__$1;
(statearr_36426_38284[(2)] = null);

(statearr_36426_38284[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36337 === (43))){
var state_36335__$1 = state_36335;
var statearr_36428_38290 = state_36335__$1;
(statearr_36428_38290[(2)] = null);

(statearr_36428_38290[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36337 === (29))){
var inst_36318 = (state_36335[(2)]);
var state_36335__$1 = state_36335;
var statearr_36430_38296 = state_36335__$1;
(statearr_36430_38296[(2)] = inst_36318);

(statearr_36430_38296[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36337 === (44))){
var inst_36327 = (state_36335[(2)]);
var state_36335__$1 = (function (){var statearr_36433 = state_36335;
(statearr_36433[(26)] = inst_36327);

return statearr_36433;
})();
var statearr_36434_38300 = state_36335__$1;
(statearr_36434_38300[(2)] = null);

(statearr_36434_38300[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36337 === (6))){
var inst_36256 = (state_36335[(27)]);
var inst_36255 = cljs.core.deref(cs);
var inst_36256__$1 = cljs.core.keys(inst_36255);
var inst_36257 = cljs.core.count(inst_36256__$1);
var inst_36258 = cljs.core.reset_BANG_(dctr,inst_36257);
var inst_36264 = cljs.core.seq(inst_36256__$1);
var inst_36266 = inst_36264;
var inst_36268 = null;
var inst_36269 = (0);
var inst_36270 = (0);
var state_36335__$1 = (function (){var statearr_36436 = state_36335;
(statearr_36436[(27)] = inst_36256__$1);

(statearr_36436[(10)] = inst_36268);

(statearr_36436[(19)] = inst_36266);

(statearr_36436[(20)] = inst_36269);

(statearr_36436[(28)] = inst_36258);

(statearr_36436[(12)] = inst_36270);

return statearr_36436;
})();
var statearr_36437_38306 = state_36335__$1;
(statearr_36437_38306[(2)] = null);

(statearr_36437_38306[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36337 === (28))){
var inst_36290 = (state_36335[(23)]);
var inst_36266 = (state_36335[(19)]);
var inst_36290__$1 = cljs.core.seq(inst_36266);
var state_36335__$1 = (function (){var statearr_36438 = state_36335;
(statearr_36438[(23)] = inst_36290__$1);

return statearr_36438;
})();
if(inst_36290__$1){
var statearr_36439_38315 = state_36335__$1;
(statearr_36439_38315[(1)] = (33));

} else {
var statearr_36440_38320 = state_36335__$1;
(statearr_36440_38320[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36337 === (25))){
var inst_36269 = (state_36335[(20)]);
var inst_36270 = (state_36335[(12)]);
var inst_36273 = (inst_36270 < inst_36269);
var inst_36274 = inst_36273;
var state_36335__$1 = state_36335;
if(cljs.core.truth_(inst_36274)){
var statearr_36441_38330 = state_36335__$1;
(statearr_36441_38330[(1)] = (27));

} else {
var statearr_36443_38335 = state_36335__$1;
(statearr_36443_38335[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36337 === (34))){
var state_36335__$1 = state_36335;
var statearr_36444_38337 = state_36335__$1;
(statearr_36444_38337[(2)] = null);

(statearr_36444_38337[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36337 === (17))){
var state_36335__$1 = state_36335;
var statearr_36445_38339 = state_36335__$1;
(statearr_36445_38339[(2)] = null);

(statearr_36445_38339[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36337 === (3))){
var inst_36332 = (state_36335[(2)]);
var state_36335__$1 = state_36335;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36335__$1,inst_36332);
} else {
if((state_val_36337 === (12))){
var inst_36248 = (state_36335[(2)]);
var state_36335__$1 = state_36335;
var statearr_36446_38350 = state_36335__$1;
(statearr_36446_38350[(2)] = inst_36248);

(statearr_36446_38350[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36337 === (2))){
var state_36335__$1 = state_36335;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36335__$1,(4),ch);
} else {
if((state_val_36337 === (23))){
var state_36335__$1 = state_36335;
var statearr_36449_38356 = state_36335__$1;
(statearr_36449_38356[(2)] = null);

(statearr_36449_38356[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36337 === (35))){
var inst_36316 = (state_36335[(2)]);
var state_36335__$1 = state_36335;
var statearr_36450_38368 = state_36335__$1;
(statearr_36450_38368[(2)] = inst_36316);

(statearr_36450_38368[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36337 === (19))){
var inst_36211 = (state_36335[(7)]);
var inst_36219 = cljs.core.chunk_first(inst_36211);
var inst_36220 = cljs.core.chunk_rest(inst_36211);
var inst_36222 = cljs.core.count(inst_36219);
var inst_36181 = inst_36220;
var inst_36182 = inst_36219;
var inst_36183 = inst_36222;
var inst_36184 = (0);
var state_36335__$1 = (function (){var statearr_36452 = state_36335;
(statearr_36452[(13)] = inst_36182);

(statearr_36452[(14)] = inst_36181);

(statearr_36452[(15)] = inst_36184);

(statearr_36452[(17)] = inst_36183);

return statearr_36452;
})();
var statearr_36453_38382 = state_36335__$1;
(statearr_36453_38382[(2)] = null);

(statearr_36453_38382[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36337 === (11))){
var inst_36181 = (state_36335[(14)]);
var inst_36211 = (state_36335[(7)]);
var inst_36211__$1 = cljs.core.seq(inst_36181);
var state_36335__$1 = (function (){var statearr_36459 = state_36335;
(statearr_36459[(7)] = inst_36211__$1);

return statearr_36459;
})();
if(inst_36211__$1){
var statearr_36461_38386 = state_36335__$1;
(statearr_36461_38386[(1)] = (16));

} else {
var statearr_36462_38389 = state_36335__$1;
(statearr_36462_38389[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36337 === (9))){
var inst_36250 = (state_36335[(2)]);
var state_36335__$1 = state_36335;
var statearr_36464_38391 = state_36335__$1;
(statearr_36464_38391[(2)] = inst_36250);

(statearr_36464_38391[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36337 === (5))){
var inst_36179 = cljs.core.deref(cs);
var inst_36180 = cljs.core.seq(inst_36179);
var inst_36181 = inst_36180;
var inst_36182 = null;
var inst_36183 = (0);
var inst_36184 = (0);
var state_36335__$1 = (function (){var statearr_36467 = state_36335;
(statearr_36467[(13)] = inst_36182);

(statearr_36467[(14)] = inst_36181);

(statearr_36467[(15)] = inst_36184);

(statearr_36467[(17)] = inst_36183);

return statearr_36467;
})();
var statearr_36469_38401 = state_36335__$1;
(statearr_36469_38401[(2)] = null);

(statearr_36469_38401[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36337 === (14))){
var state_36335__$1 = state_36335;
var statearr_36471_38413 = state_36335__$1;
(statearr_36471_38413[(2)] = null);

(statearr_36471_38413[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36337 === (45))){
var inst_36324 = (state_36335[(2)]);
var state_36335__$1 = state_36335;
var statearr_36475_38435 = state_36335__$1;
(statearr_36475_38435[(2)] = inst_36324);

(statearr_36475_38435[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36337 === (26))){
var inst_36256 = (state_36335[(27)]);
var inst_36320 = (state_36335[(2)]);
var inst_36321 = cljs.core.seq(inst_36256);
var state_36335__$1 = (function (){var statearr_36476 = state_36335;
(statearr_36476[(29)] = inst_36320);

return statearr_36476;
})();
if(inst_36321){
var statearr_36478_38445 = state_36335__$1;
(statearr_36478_38445[(1)] = (42));

} else {
var statearr_36479_38447 = state_36335__$1;
(statearr_36479_38447[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36337 === (16))){
var inst_36211 = (state_36335[(7)]);
var inst_36216 = cljs.core.chunked_seq_QMARK_(inst_36211);
var state_36335__$1 = state_36335;
if(inst_36216){
var statearr_36481_38449 = state_36335__$1;
(statearr_36481_38449[(1)] = (19));

} else {
var statearr_36483_38451 = state_36335__$1;
(statearr_36483_38451[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36337 === (38))){
var inst_36312 = (state_36335[(2)]);
var state_36335__$1 = state_36335;
var statearr_36485_38469 = state_36335__$1;
(statearr_36485_38469[(2)] = inst_36312);

(statearr_36485_38469[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36337 === (30))){
var state_36335__$1 = state_36335;
var statearr_36487_38476 = state_36335__$1;
(statearr_36487_38476[(2)] = null);

(statearr_36487_38476[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36337 === (10))){
var inst_36182 = (state_36335[(13)]);
var inst_36184 = (state_36335[(15)]);
var inst_36196 = cljs.core._nth(inst_36182,inst_36184);
var inst_36197 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36196,(0),null);
var inst_36198 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36196,(1),null);
var state_36335__$1 = (function (){var statearr_36490 = state_36335;
(statearr_36490[(24)] = inst_36197);

return statearr_36490;
})();
if(cljs.core.truth_(inst_36198)){
var statearr_36492_38487 = state_36335__$1;
(statearr_36492_38487[(1)] = (13));

} else {
var statearr_36493_38488 = state_36335__$1;
(statearr_36493_38488[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36337 === (18))){
var inst_36246 = (state_36335[(2)]);
var state_36335__$1 = state_36335;
var statearr_36494_38496 = state_36335__$1;
(statearr_36494_38496[(2)] = inst_36246);

(statearr_36494_38496[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36337 === (42))){
var state_36335__$1 = state_36335;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36335__$1,(45),dchan);
} else {
if((state_val_36337 === (37))){
var inst_36290 = (state_36335[(23)]);
var inst_36169 = (state_36335[(11)]);
var inst_36300 = (state_36335[(22)]);
var inst_36300__$1 = cljs.core.first(inst_36290);
var inst_36301 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_36300__$1,inst_36169,done);
var state_36335__$1 = (function (){var statearr_36498 = state_36335;
(statearr_36498[(22)] = inst_36300__$1);

return statearr_36498;
})();
if(cljs.core.truth_(inst_36301)){
var statearr_36500_38522 = state_36335__$1;
(statearr_36500_38522[(1)] = (39));

} else {
var statearr_36501_38526 = state_36335__$1;
(statearr_36501_38526[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36337 === (8))){
var inst_36184 = (state_36335[(15)]);
var inst_36183 = (state_36335[(17)]);
var inst_36187 = (inst_36184 < inst_36183);
var inst_36188 = inst_36187;
var state_36335__$1 = state_36335;
if(cljs.core.truth_(inst_36188)){
var statearr_36502_38539 = state_36335__$1;
(statearr_36502_38539[(1)] = (10));

} else {
var statearr_36504_38540 = state_36335__$1;
(statearr_36504_38540[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__35072__auto__ = null;
var cljs$core$async$mult_$_state_machine__35072__auto____0 = (function (){
var statearr_36508 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36508[(0)] = cljs$core$async$mult_$_state_machine__35072__auto__);

(statearr_36508[(1)] = (1));

return statearr_36508;
});
var cljs$core$async$mult_$_state_machine__35072__auto____1 = (function (state_36335){
while(true){
var ret_value__35073__auto__ = (function (){try{while(true){
var result__35074__auto__ = switch__35071__auto__(state_36335);
if(cljs.core.keyword_identical_QMARK_(result__35074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35074__auto__;
}
break;
}
}catch (e36509){var ex__35075__auto__ = e36509;
var statearr_36510_38546 = state_36335;
(statearr_36510_38546[(2)] = ex__35075__auto__);


if(cljs.core.seq((state_36335[(4)]))){
var statearr_36513_38549 = state_36335;
(statearr_36513_38549[(1)] = cljs.core.first((state_36335[(4)])));

} else {
throw ex__35075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38550 = state_36335;
state_36335 = G__38550;
continue;
} else {
return ret_value__35073__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__35072__auto__ = function(state_36335){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__35072__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__35072__auto____1.call(this,state_36335);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__35072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__35072__auto____0;
cljs$core$async$mult_$_state_machine__35072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__35072__auto____1;
return cljs$core$async$mult_$_state_machine__35072__auto__;
})()
})();
var state__35308__auto__ = (function (){var statearr_36515 = f__35307__auto__();
(statearr_36515[(6)] = c__35306__auto___38145);

return statearr_36515;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35308__auto__);
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
var G__36517 = arguments.length;
switch (G__36517) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_38555 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_38555(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_38556 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_38556(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_38557 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_38557(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_38564 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_38564(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_38565 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_38565(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___38566 = arguments.length;
var i__4737__auto___38567 = (0);
while(true){
if((i__4737__auto___38567 < len__4736__auto___38566)){
args__4742__auto__.push((arguments[i__4737__auto___38567]));

var G__38568 = (i__4737__auto___38567 + (1));
i__4737__auto___38567 = G__38568;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__36564){
var map__36565 = p__36564;
var map__36565__$1 = (((((!((map__36565 == null))))?(((((map__36565.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36565.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36565):map__36565);
var opts = map__36565__$1;
var statearr_36571_38573 = state;
(statearr_36571_38573[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_36575_38574 = state;
(statearr_36575_38574[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_36577_38575 = state;
(statearr_36577_38575[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq36552){
var G__36553 = cljs.core.first(seq36552);
var seq36552__$1 = cljs.core.next(seq36552);
var G__36554 = cljs.core.first(seq36552__$1);
var seq36552__$2 = cljs.core.next(seq36552__$1);
var G__36555 = cljs.core.first(seq36552__$2);
var seq36552__$3 = cljs.core.next(seq36552__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36553,G__36554,G__36555,seq36552__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36592 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36592 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta36593){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta36593 = meta36593;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36592.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36594,meta36593__$1){
var self__ = this;
var _36594__$1 = this;
return (new cljs.core.async.t_cljs$core$async36592(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta36593__$1));
}));

(cljs.core.async.t_cljs$core$async36592.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36594){
var self__ = this;
var _36594__$1 = this;
return self__.meta36593;
}));

(cljs.core.async.t_cljs$core$async36592.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36592.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async36592.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36592.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async36592.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async36592.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async36592.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async36592.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async36592.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta36593","meta36593",34582923,null)], null);
}));

(cljs.core.async.t_cljs$core$async36592.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36592.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36592");

(cljs.core.async.t_cljs$core$async36592.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async36592");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36592.
 */
cljs.core.async.__GT_t_cljs$core$async36592 = (function cljs$core$async$mix_$___GT_t_cljs$core$async36592(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta36593){
return (new cljs.core.async.t_cljs$core$async36592(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta36593));
});

}

return (new cljs.core.async.t_cljs$core$async36592(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__35306__auto___38582 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35307__auto__ = (function (){var switch__35071__auto__ = (function (state_36734){
var state_val_36735 = (state_36734[(1)]);
if((state_val_36735 === (7))){
var inst_36636 = (state_36734[(2)]);
var state_36734__$1 = state_36734;
var statearr_36737_38583 = state_36734__$1;
(statearr_36737_38583[(2)] = inst_36636);

(statearr_36737_38583[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36735 === (20))){
var inst_36649 = (state_36734[(7)]);
var state_36734__$1 = state_36734;
var statearr_36740_38584 = state_36734__$1;
(statearr_36740_38584[(2)] = inst_36649);

(statearr_36740_38584[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36735 === (27))){
var state_36734__$1 = state_36734;
var statearr_36741_38585 = state_36734__$1;
(statearr_36741_38585[(2)] = null);

(statearr_36741_38585[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36735 === (1))){
var inst_36620 = (state_36734[(8)]);
var inst_36620__$1 = calc_state();
var inst_36622 = (inst_36620__$1 == null);
var inst_36623 = cljs.core.not(inst_36622);
var state_36734__$1 = (function (){var statearr_36742 = state_36734;
(statearr_36742[(8)] = inst_36620__$1);

return statearr_36742;
})();
if(inst_36623){
var statearr_36743_38586 = state_36734__$1;
(statearr_36743_38586[(1)] = (2));

} else {
var statearr_36744_38587 = state_36734__$1;
(statearr_36744_38587[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36735 === (24))){
var inst_36704 = (state_36734[(9)]);
var inst_36677 = (state_36734[(10)]);
var inst_36690 = (state_36734[(11)]);
var inst_36704__$1 = (inst_36677.cljs$core$IFn$_invoke$arity$1 ? inst_36677.cljs$core$IFn$_invoke$arity$1(inst_36690) : inst_36677.call(null,inst_36690));
var state_36734__$1 = (function (){var statearr_36745 = state_36734;
(statearr_36745[(9)] = inst_36704__$1);

return statearr_36745;
})();
if(cljs.core.truth_(inst_36704__$1)){
var statearr_36746_38590 = state_36734__$1;
(statearr_36746_38590[(1)] = (29));

} else {
var statearr_36747_38591 = state_36734__$1;
(statearr_36747_38591[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36735 === (4))){
var inst_36639 = (state_36734[(2)]);
var state_36734__$1 = state_36734;
if(cljs.core.truth_(inst_36639)){
var statearr_36748_38592 = state_36734__$1;
(statearr_36748_38592[(1)] = (8));

} else {
var statearr_36749_38593 = state_36734__$1;
(statearr_36749_38593[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36735 === (15))){
var inst_36671 = (state_36734[(2)]);
var state_36734__$1 = state_36734;
if(cljs.core.truth_(inst_36671)){
var statearr_36750_38594 = state_36734__$1;
(statearr_36750_38594[(1)] = (19));

} else {
var statearr_36751_38595 = state_36734__$1;
(statearr_36751_38595[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36735 === (21))){
var inst_36676 = (state_36734[(12)]);
var inst_36676__$1 = (state_36734[(2)]);
var inst_36677 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_36676__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_36678 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_36676__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_36682 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_36676__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_36734__$1 = (function (){var statearr_36754 = state_36734;
(statearr_36754[(12)] = inst_36676__$1);

(statearr_36754[(10)] = inst_36677);

(statearr_36754[(13)] = inst_36678);

return statearr_36754;
})();
return cljs.core.async.ioc_alts_BANG_(state_36734__$1,(22),inst_36682);
} else {
if((state_val_36735 === (31))){
var inst_36712 = (state_36734[(2)]);
var state_36734__$1 = state_36734;
if(cljs.core.truth_(inst_36712)){
var statearr_36756_38596 = state_36734__$1;
(statearr_36756_38596[(1)] = (32));

} else {
var statearr_36757_38597 = state_36734__$1;
(statearr_36757_38597[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36735 === (32))){
var inst_36689 = (state_36734[(14)]);
var state_36734__$1 = state_36734;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36734__$1,(35),out,inst_36689);
} else {
if((state_val_36735 === (33))){
var inst_36676 = (state_36734[(12)]);
var inst_36649 = inst_36676;
var state_36734__$1 = (function (){var statearr_36760 = state_36734;
(statearr_36760[(7)] = inst_36649);

return statearr_36760;
})();
var statearr_36762_38598 = state_36734__$1;
(statearr_36762_38598[(2)] = null);

(statearr_36762_38598[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36735 === (13))){
var inst_36649 = (state_36734[(7)]);
var inst_36660 = inst_36649.cljs$lang$protocol_mask$partition0$;
var inst_36661 = (inst_36660 & (64));
var inst_36662 = inst_36649.cljs$core$ISeq$;
var inst_36663 = (cljs.core.PROTOCOL_SENTINEL === inst_36662);
var inst_36664 = ((inst_36661) || (inst_36663));
var state_36734__$1 = state_36734;
if(cljs.core.truth_(inst_36664)){
var statearr_36763_38601 = state_36734__$1;
(statearr_36763_38601[(1)] = (16));

} else {
var statearr_36764_38602 = state_36734__$1;
(statearr_36764_38602[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36735 === (22))){
var inst_36690 = (state_36734[(11)]);
var inst_36689 = (state_36734[(14)]);
var inst_36688 = (state_36734[(2)]);
var inst_36689__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36688,(0),null);
var inst_36690__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36688,(1),null);
var inst_36691 = (inst_36689__$1 == null);
var inst_36692 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36690__$1,change);
var inst_36693 = ((inst_36691) || (inst_36692));
var state_36734__$1 = (function (){var statearr_36765 = state_36734;
(statearr_36765[(11)] = inst_36690__$1);

(statearr_36765[(14)] = inst_36689__$1);

return statearr_36765;
})();
if(cljs.core.truth_(inst_36693)){
var statearr_36768_38603 = state_36734__$1;
(statearr_36768_38603[(1)] = (23));

} else {
var statearr_36769_38605 = state_36734__$1;
(statearr_36769_38605[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36735 === (36))){
var inst_36676 = (state_36734[(12)]);
var inst_36649 = inst_36676;
var state_36734__$1 = (function (){var statearr_36774 = state_36734;
(statearr_36774[(7)] = inst_36649);

return statearr_36774;
})();
var statearr_36775_38606 = state_36734__$1;
(statearr_36775_38606[(2)] = null);

(statearr_36775_38606[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36735 === (29))){
var inst_36704 = (state_36734[(9)]);
var state_36734__$1 = state_36734;
var statearr_36778_38607 = state_36734__$1;
(statearr_36778_38607[(2)] = inst_36704);

(statearr_36778_38607[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36735 === (6))){
var state_36734__$1 = state_36734;
var statearr_36783_38608 = state_36734__$1;
(statearr_36783_38608[(2)] = false);

(statearr_36783_38608[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36735 === (28))){
var inst_36700 = (state_36734[(2)]);
var inst_36701 = calc_state();
var inst_36649 = inst_36701;
var state_36734__$1 = (function (){var statearr_36784 = state_36734;
(statearr_36784[(15)] = inst_36700);

(statearr_36784[(7)] = inst_36649);

return statearr_36784;
})();
var statearr_36785_38610 = state_36734__$1;
(statearr_36785_38610[(2)] = null);

(statearr_36785_38610[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36735 === (25))){
var inst_36726 = (state_36734[(2)]);
var state_36734__$1 = state_36734;
var statearr_36789_38612 = state_36734__$1;
(statearr_36789_38612[(2)] = inst_36726);

(statearr_36789_38612[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36735 === (34))){
var inst_36724 = (state_36734[(2)]);
var state_36734__$1 = state_36734;
var statearr_36790_38614 = state_36734__$1;
(statearr_36790_38614[(2)] = inst_36724);

(statearr_36790_38614[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36735 === (17))){
var state_36734__$1 = state_36734;
var statearr_36791_38615 = state_36734__$1;
(statearr_36791_38615[(2)] = false);

(statearr_36791_38615[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36735 === (3))){
var state_36734__$1 = state_36734;
var statearr_36792_38616 = state_36734__$1;
(statearr_36792_38616[(2)] = false);

(statearr_36792_38616[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36735 === (12))){
var inst_36728 = (state_36734[(2)]);
var state_36734__$1 = state_36734;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36734__$1,inst_36728);
} else {
if((state_val_36735 === (2))){
var inst_36620 = (state_36734[(8)]);
var inst_36625 = inst_36620.cljs$lang$protocol_mask$partition0$;
var inst_36626 = (inst_36625 & (64));
var inst_36630 = inst_36620.cljs$core$ISeq$;
var inst_36631 = (cljs.core.PROTOCOL_SENTINEL === inst_36630);
var inst_36632 = ((inst_36626) || (inst_36631));
var state_36734__$1 = state_36734;
if(cljs.core.truth_(inst_36632)){
var statearr_36793_38617 = state_36734__$1;
(statearr_36793_38617[(1)] = (5));

} else {
var statearr_36801_38618 = state_36734__$1;
(statearr_36801_38618[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36735 === (23))){
var inst_36689 = (state_36734[(14)]);
var inst_36695 = (inst_36689 == null);
var state_36734__$1 = state_36734;
if(cljs.core.truth_(inst_36695)){
var statearr_36808_38619 = state_36734__$1;
(statearr_36808_38619[(1)] = (26));

} else {
var statearr_36809_38620 = state_36734__$1;
(statearr_36809_38620[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36735 === (35))){
var inst_36715 = (state_36734[(2)]);
var state_36734__$1 = state_36734;
if(cljs.core.truth_(inst_36715)){
var statearr_36810_38621 = state_36734__$1;
(statearr_36810_38621[(1)] = (36));

} else {
var statearr_36811_38622 = state_36734__$1;
(statearr_36811_38622[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36735 === (19))){
var inst_36649 = (state_36734[(7)]);
var inst_36673 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_36649);
var state_36734__$1 = state_36734;
var statearr_36818_38625 = state_36734__$1;
(statearr_36818_38625[(2)] = inst_36673);

(statearr_36818_38625[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36735 === (11))){
var inst_36649 = (state_36734[(7)]);
var inst_36657 = (inst_36649 == null);
var inst_36658 = cljs.core.not(inst_36657);
var state_36734__$1 = state_36734;
if(inst_36658){
var statearr_36819_38628 = state_36734__$1;
(statearr_36819_38628[(1)] = (13));

} else {
var statearr_36820_38630 = state_36734__$1;
(statearr_36820_38630[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36735 === (9))){
var inst_36620 = (state_36734[(8)]);
var state_36734__$1 = state_36734;
var statearr_36821_38633 = state_36734__$1;
(statearr_36821_38633[(2)] = inst_36620);

(statearr_36821_38633[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36735 === (5))){
var state_36734__$1 = state_36734;
var statearr_36822_38638 = state_36734__$1;
(statearr_36822_38638[(2)] = true);

(statearr_36822_38638[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36735 === (14))){
var state_36734__$1 = state_36734;
var statearr_36823_38639 = state_36734__$1;
(statearr_36823_38639[(2)] = false);

(statearr_36823_38639[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36735 === (26))){
var inst_36690 = (state_36734[(11)]);
var inst_36697 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_36690);
var state_36734__$1 = state_36734;
var statearr_36824_38641 = state_36734__$1;
(statearr_36824_38641[(2)] = inst_36697);

(statearr_36824_38641[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36735 === (16))){
var state_36734__$1 = state_36734;
var statearr_36825_38642 = state_36734__$1;
(statearr_36825_38642[(2)] = true);

(statearr_36825_38642[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36735 === (38))){
var inst_36720 = (state_36734[(2)]);
var state_36734__$1 = state_36734;
var statearr_36826_38646 = state_36734__$1;
(statearr_36826_38646[(2)] = inst_36720);

(statearr_36826_38646[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36735 === (30))){
var inst_36677 = (state_36734[(10)]);
var inst_36690 = (state_36734[(11)]);
var inst_36678 = (state_36734[(13)]);
var inst_36707 = cljs.core.empty_QMARK_(inst_36677);
var inst_36708 = (inst_36678.cljs$core$IFn$_invoke$arity$1 ? inst_36678.cljs$core$IFn$_invoke$arity$1(inst_36690) : inst_36678.call(null,inst_36690));
var inst_36709 = cljs.core.not(inst_36708);
var inst_36710 = ((inst_36707) && (inst_36709));
var state_36734__$1 = state_36734;
var statearr_36827_38660 = state_36734__$1;
(statearr_36827_38660[(2)] = inst_36710);

(statearr_36827_38660[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36735 === (10))){
var inst_36620 = (state_36734[(8)]);
var inst_36645 = (state_36734[(2)]);
var inst_36646 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_36645,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_36647 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_36645,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_36648 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_36645,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_36649 = inst_36620;
var state_36734__$1 = (function (){var statearr_36835 = state_36734;
(statearr_36835[(7)] = inst_36649);

(statearr_36835[(16)] = inst_36647);

(statearr_36835[(17)] = inst_36648);

(statearr_36835[(18)] = inst_36646);

return statearr_36835;
})();
var statearr_36836_38672 = state_36734__$1;
(statearr_36836_38672[(2)] = null);

(statearr_36836_38672[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36735 === (18))){
var inst_36668 = (state_36734[(2)]);
var state_36734__$1 = state_36734;
var statearr_36840_38680 = state_36734__$1;
(statearr_36840_38680[(2)] = inst_36668);

(statearr_36840_38680[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36735 === (37))){
var state_36734__$1 = state_36734;
var statearr_36841_38686 = state_36734__$1;
(statearr_36841_38686[(2)] = null);

(statearr_36841_38686[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36735 === (8))){
var inst_36620 = (state_36734[(8)]);
var inst_36642 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_36620);
var state_36734__$1 = state_36734;
var statearr_36845_38691 = state_36734__$1;
(statearr_36845_38691[(2)] = inst_36642);

(statearr_36845_38691[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__35072__auto__ = null;
var cljs$core$async$mix_$_state_machine__35072__auto____0 = (function (){
var statearr_36846 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36846[(0)] = cljs$core$async$mix_$_state_machine__35072__auto__);

(statearr_36846[(1)] = (1));

return statearr_36846;
});
var cljs$core$async$mix_$_state_machine__35072__auto____1 = (function (state_36734){
while(true){
var ret_value__35073__auto__ = (function (){try{while(true){
var result__35074__auto__ = switch__35071__auto__(state_36734);
if(cljs.core.keyword_identical_QMARK_(result__35074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35074__auto__;
}
break;
}
}catch (e36847){var ex__35075__auto__ = e36847;
var statearr_36848_38704 = state_36734;
(statearr_36848_38704[(2)] = ex__35075__auto__);


if(cljs.core.seq((state_36734[(4)]))){
var statearr_36853_38708 = state_36734;
(statearr_36853_38708[(1)] = cljs.core.first((state_36734[(4)])));

} else {
throw ex__35075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38710 = state_36734;
state_36734 = G__38710;
continue;
} else {
return ret_value__35073__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__35072__auto__ = function(state_36734){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__35072__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__35072__auto____1.call(this,state_36734);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__35072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__35072__auto____0;
cljs$core$async$mix_$_state_machine__35072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__35072__auto____1;
return cljs$core$async$mix_$_state_machine__35072__auto__;
})()
})();
var state__35308__auto__ = (function (){var statearr_36854 = f__35307__auto__();
(statearr_36854[(6)] = c__35306__auto___38582);

return statearr_36854;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35308__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_38716 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_38716(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_38720 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_38720(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_38726 = (function() {
var G__38727 = null;
var G__38727__1 = (function (p){
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
var G__38727__2 = (function (p,v){
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
G__38727 = function(p,v){
switch(arguments.length){
case 1:
return G__38727__1.call(this,p);
case 2:
return G__38727__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__38727.cljs$core$IFn$_invoke$arity$1 = G__38727__1;
G__38727.cljs$core$IFn$_invoke$arity$2 = G__38727__2;
return G__38727;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__36871 = arguments.length;
switch (G__36871) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_38726(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_38726(p,v);
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
var G__36874 = arguments.length;
switch (G__36874) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__36872_SHARP_){
if(cljs.core.truth_((p1__36872_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__36872_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__36872_SHARP_.call(null,topic)))){
return p1__36872_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__36872_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36879 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36879 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta36880){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta36880 = meta36880;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36879.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36881,meta36880__$1){
var self__ = this;
var _36881__$1 = this;
return (new cljs.core.async.t_cljs$core$async36879(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta36880__$1));
}));

(cljs.core.async.t_cljs$core$async36879.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36881){
var self__ = this;
var _36881__$1 = this;
return self__.meta36880;
}));

(cljs.core.async.t_cljs$core$async36879.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36879.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async36879.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36879.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async36879.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async36879.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async36879.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async36879.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta36880","meta36880",1393606182,null)], null);
}));

(cljs.core.async.t_cljs$core$async36879.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36879.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36879");

(cljs.core.async.t_cljs$core$async36879.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async36879");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36879.
 */
cljs.core.async.__GT_t_cljs$core$async36879 = (function cljs$core$async$__GT_t_cljs$core$async36879(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta36880){
return (new cljs.core.async.t_cljs$core$async36879(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta36880));
});

}

return (new cljs.core.async.t_cljs$core$async36879(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__35306__auto___38744 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35307__auto__ = (function (){var switch__35071__auto__ = (function (state_36967){
var state_val_36968 = (state_36967[(1)]);
if((state_val_36968 === (7))){
var inst_36963 = (state_36967[(2)]);
var state_36967__$1 = state_36967;
var statearr_36973_38746 = state_36967__$1;
(statearr_36973_38746[(2)] = inst_36963);

(statearr_36973_38746[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36968 === (20))){
var state_36967__$1 = state_36967;
var statearr_36974_38747 = state_36967__$1;
(statearr_36974_38747[(2)] = null);

(statearr_36974_38747[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36968 === (1))){
var state_36967__$1 = state_36967;
var statearr_36975_38748 = state_36967__$1;
(statearr_36975_38748[(2)] = null);

(statearr_36975_38748[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36968 === (24))){
var inst_36946 = (state_36967[(7)]);
var inst_36955 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_36946);
var state_36967__$1 = state_36967;
var statearr_36976_38749 = state_36967__$1;
(statearr_36976_38749[(2)] = inst_36955);

(statearr_36976_38749[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36968 === (4))){
var inst_36894 = (state_36967[(8)]);
var inst_36894__$1 = (state_36967[(2)]);
var inst_36895 = (inst_36894__$1 == null);
var state_36967__$1 = (function (){var statearr_36977 = state_36967;
(statearr_36977[(8)] = inst_36894__$1);

return statearr_36977;
})();
if(cljs.core.truth_(inst_36895)){
var statearr_36978_38752 = state_36967__$1;
(statearr_36978_38752[(1)] = (5));

} else {
var statearr_36979_38753 = state_36967__$1;
(statearr_36979_38753[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36968 === (15))){
var inst_36940 = (state_36967[(2)]);
var state_36967__$1 = state_36967;
var statearr_36980_38754 = state_36967__$1;
(statearr_36980_38754[(2)] = inst_36940);

(statearr_36980_38754[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36968 === (21))){
var inst_36960 = (state_36967[(2)]);
var state_36967__$1 = (function (){var statearr_36981 = state_36967;
(statearr_36981[(9)] = inst_36960);

return statearr_36981;
})();
var statearr_36982_38755 = state_36967__$1;
(statearr_36982_38755[(2)] = null);

(statearr_36982_38755[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36968 === (13))){
var inst_36918 = (state_36967[(10)]);
var inst_36920 = cljs.core.chunked_seq_QMARK_(inst_36918);
var state_36967__$1 = state_36967;
if(inst_36920){
var statearr_36983_38756 = state_36967__$1;
(statearr_36983_38756[(1)] = (16));

} else {
var statearr_36984_38760 = state_36967__$1;
(statearr_36984_38760[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36968 === (22))){
var inst_36952 = (state_36967[(2)]);
var state_36967__$1 = state_36967;
if(cljs.core.truth_(inst_36952)){
var statearr_36985_38761 = state_36967__$1;
(statearr_36985_38761[(1)] = (23));

} else {
var statearr_36986_38762 = state_36967__$1;
(statearr_36986_38762[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36968 === (6))){
var inst_36946 = (state_36967[(7)]);
var inst_36894 = (state_36967[(8)]);
var inst_36948 = (state_36967[(11)]);
var inst_36946__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_36894) : topic_fn.call(null,inst_36894));
var inst_36947 = cljs.core.deref(mults);
var inst_36948__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_36947,inst_36946__$1);
var state_36967__$1 = (function (){var statearr_36987 = state_36967;
(statearr_36987[(7)] = inst_36946__$1);

(statearr_36987[(11)] = inst_36948__$1);

return statearr_36987;
})();
if(cljs.core.truth_(inst_36948__$1)){
var statearr_36988_38763 = state_36967__$1;
(statearr_36988_38763[(1)] = (19));

} else {
var statearr_36989_38765 = state_36967__$1;
(statearr_36989_38765[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36968 === (25))){
var inst_36957 = (state_36967[(2)]);
var state_36967__$1 = state_36967;
var statearr_36990_38766 = state_36967__$1;
(statearr_36990_38766[(2)] = inst_36957);

(statearr_36990_38766[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36968 === (17))){
var inst_36918 = (state_36967[(10)]);
var inst_36931 = cljs.core.first(inst_36918);
var inst_36932 = cljs.core.async.muxch_STAR_(inst_36931);
var inst_36933 = cljs.core.async.close_BANG_(inst_36932);
var inst_36934 = cljs.core.next(inst_36918);
var inst_36904 = inst_36934;
var inst_36905 = null;
var inst_36906 = (0);
var inst_36907 = (0);
var state_36967__$1 = (function (){var statearr_36991 = state_36967;
(statearr_36991[(12)] = inst_36905);

(statearr_36991[(13)] = inst_36904);

(statearr_36991[(14)] = inst_36906);

(statearr_36991[(15)] = inst_36907);

(statearr_36991[(16)] = inst_36933);

return statearr_36991;
})();
var statearr_36992_38769 = state_36967__$1;
(statearr_36992_38769[(2)] = null);

(statearr_36992_38769[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36968 === (3))){
var inst_36965 = (state_36967[(2)]);
var state_36967__$1 = state_36967;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36967__$1,inst_36965);
} else {
if((state_val_36968 === (12))){
var inst_36942 = (state_36967[(2)]);
var state_36967__$1 = state_36967;
var statearr_36993_38770 = state_36967__$1;
(statearr_36993_38770[(2)] = inst_36942);

(statearr_36993_38770[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36968 === (2))){
var state_36967__$1 = state_36967;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36967__$1,(4),ch);
} else {
if((state_val_36968 === (23))){
var state_36967__$1 = state_36967;
var statearr_36995_38771 = state_36967__$1;
(statearr_36995_38771[(2)] = null);

(statearr_36995_38771[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36968 === (19))){
var inst_36894 = (state_36967[(8)]);
var inst_36948 = (state_36967[(11)]);
var inst_36950 = cljs.core.async.muxch_STAR_(inst_36948);
var state_36967__$1 = state_36967;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36967__$1,(22),inst_36950,inst_36894);
} else {
if((state_val_36968 === (11))){
var inst_36904 = (state_36967[(13)]);
var inst_36918 = (state_36967[(10)]);
var inst_36918__$1 = cljs.core.seq(inst_36904);
var state_36967__$1 = (function (){var statearr_36997 = state_36967;
(statearr_36997[(10)] = inst_36918__$1);

return statearr_36997;
})();
if(inst_36918__$1){
var statearr_36998_38772 = state_36967__$1;
(statearr_36998_38772[(1)] = (13));

} else {
var statearr_37002_38773 = state_36967__$1;
(statearr_37002_38773[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36968 === (9))){
var inst_36944 = (state_36967[(2)]);
var state_36967__$1 = state_36967;
var statearr_37003_38774 = state_36967__$1;
(statearr_37003_38774[(2)] = inst_36944);

(statearr_37003_38774[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36968 === (5))){
var inst_36901 = cljs.core.deref(mults);
var inst_36902 = cljs.core.vals(inst_36901);
var inst_36903 = cljs.core.seq(inst_36902);
var inst_36904 = inst_36903;
var inst_36905 = null;
var inst_36906 = (0);
var inst_36907 = (0);
var state_36967__$1 = (function (){var statearr_37004 = state_36967;
(statearr_37004[(12)] = inst_36905);

(statearr_37004[(13)] = inst_36904);

(statearr_37004[(14)] = inst_36906);

(statearr_37004[(15)] = inst_36907);

return statearr_37004;
})();
var statearr_37005_38776 = state_36967__$1;
(statearr_37005_38776[(2)] = null);

(statearr_37005_38776[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36968 === (14))){
var state_36967__$1 = state_36967;
var statearr_37009_38779 = state_36967__$1;
(statearr_37009_38779[(2)] = null);

(statearr_37009_38779[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36968 === (16))){
var inst_36918 = (state_36967[(10)]);
var inst_36922 = cljs.core.chunk_first(inst_36918);
var inst_36927 = cljs.core.chunk_rest(inst_36918);
var inst_36928 = cljs.core.count(inst_36922);
var inst_36904 = inst_36927;
var inst_36905 = inst_36922;
var inst_36906 = inst_36928;
var inst_36907 = (0);
var state_36967__$1 = (function (){var statearr_37010 = state_36967;
(statearr_37010[(12)] = inst_36905);

(statearr_37010[(13)] = inst_36904);

(statearr_37010[(14)] = inst_36906);

(statearr_37010[(15)] = inst_36907);

return statearr_37010;
})();
var statearr_37011_38782 = state_36967__$1;
(statearr_37011_38782[(2)] = null);

(statearr_37011_38782[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36968 === (10))){
var inst_36905 = (state_36967[(12)]);
var inst_36904 = (state_36967[(13)]);
var inst_36906 = (state_36967[(14)]);
var inst_36907 = (state_36967[(15)]);
var inst_36912 = cljs.core._nth(inst_36905,inst_36907);
var inst_36913 = cljs.core.async.muxch_STAR_(inst_36912);
var inst_36914 = cljs.core.async.close_BANG_(inst_36913);
var inst_36915 = (inst_36907 + (1));
var tmp37006 = inst_36905;
var tmp37007 = inst_36904;
var tmp37008 = inst_36906;
var inst_36904__$1 = tmp37007;
var inst_36905__$1 = tmp37006;
var inst_36906__$1 = tmp37008;
var inst_36907__$1 = inst_36915;
var state_36967__$1 = (function (){var statearr_37012 = state_36967;
(statearr_37012[(17)] = inst_36914);

(statearr_37012[(12)] = inst_36905__$1);

(statearr_37012[(13)] = inst_36904__$1);

(statearr_37012[(14)] = inst_36906__$1);

(statearr_37012[(15)] = inst_36907__$1);

return statearr_37012;
})();
var statearr_37013_38783 = state_36967__$1;
(statearr_37013_38783[(2)] = null);

(statearr_37013_38783[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36968 === (18))){
var inst_36937 = (state_36967[(2)]);
var state_36967__$1 = state_36967;
var statearr_37014_38784 = state_36967__$1;
(statearr_37014_38784[(2)] = inst_36937);

(statearr_37014_38784[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36968 === (8))){
var inst_36906 = (state_36967[(14)]);
var inst_36907 = (state_36967[(15)]);
var inst_36909 = (inst_36907 < inst_36906);
var inst_36910 = inst_36909;
var state_36967__$1 = state_36967;
if(cljs.core.truth_(inst_36910)){
var statearr_37016_38785 = state_36967__$1;
(statearr_37016_38785[(1)] = (10));

} else {
var statearr_37017_38786 = state_36967__$1;
(statearr_37017_38786[(1)] = (11));

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
var cljs$core$async$state_machine__35072__auto__ = null;
var cljs$core$async$state_machine__35072__auto____0 = (function (){
var statearr_37021 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37021[(0)] = cljs$core$async$state_machine__35072__auto__);

(statearr_37021[(1)] = (1));

return statearr_37021;
});
var cljs$core$async$state_machine__35072__auto____1 = (function (state_36967){
while(true){
var ret_value__35073__auto__ = (function (){try{while(true){
var result__35074__auto__ = switch__35071__auto__(state_36967);
if(cljs.core.keyword_identical_QMARK_(result__35074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35074__auto__;
}
break;
}
}catch (e37022){var ex__35075__auto__ = e37022;
var statearr_37023_38788 = state_36967;
(statearr_37023_38788[(2)] = ex__35075__auto__);


if(cljs.core.seq((state_36967[(4)]))){
var statearr_37024_38789 = state_36967;
(statearr_37024_38789[(1)] = cljs.core.first((state_36967[(4)])));

} else {
throw ex__35075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38790 = state_36967;
state_36967 = G__38790;
continue;
} else {
return ret_value__35073__auto__;
}
break;
}
});
cljs$core$async$state_machine__35072__auto__ = function(state_36967){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35072__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35072__auto____1.call(this,state_36967);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35072__auto____0;
cljs$core$async$state_machine__35072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35072__auto____1;
return cljs$core$async$state_machine__35072__auto__;
})()
})();
var state__35308__auto__ = (function (){var statearr_37029 = f__35307__auto__();
(statearr_37029[(6)] = c__35306__auto___38744);

return statearr_37029;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35308__auto__);
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
var G__37031 = arguments.length;
switch (G__37031) {
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
var G__37075 = arguments.length;
switch (G__37075) {
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
var G__37078 = arguments.length;
switch (G__37078) {
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
var c__35306__auto___38794 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35307__auto__ = (function (){var switch__35071__auto__ = (function (state_37124){
var state_val_37125 = (state_37124[(1)]);
if((state_val_37125 === (7))){
var state_37124__$1 = state_37124;
var statearr_37126_38795 = state_37124__$1;
(statearr_37126_38795[(2)] = null);

(statearr_37126_38795[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37125 === (1))){
var state_37124__$1 = state_37124;
var statearr_37127_38796 = state_37124__$1;
(statearr_37127_38796[(2)] = null);

(statearr_37127_38796[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37125 === (4))){
var inst_37085 = (state_37124[(7)]);
var inst_37084 = (state_37124[(8)]);
var inst_37087 = (inst_37085 < inst_37084);
var state_37124__$1 = state_37124;
if(cljs.core.truth_(inst_37087)){
var statearr_37128_38797 = state_37124__$1;
(statearr_37128_38797[(1)] = (6));

} else {
var statearr_37129_38798 = state_37124__$1;
(statearr_37129_38798[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37125 === (15))){
var inst_37110 = (state_37124[(9)]);
var inst_37115 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_37110);
var state_37124__$1 = state_37124;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37124__$1,(17),out,inst_37115);
} else {
if((state_val_37125 === (13))){
var inst_37110 = (state_37124[(9)]);
var inst_37110__$1 = (state_37124[(2)]);
var inst_37111 = cljs.core.some(cljs.core.nil_QMARK_,inst_37110__$1);
var state_37124__$1 = (function (){var statearr_37130 = state_37124;
(statearr_37130[(9)] = inst_37110__$1);

return statearr_37130;
})();
if(cljs.core.truth_(inst_37111)){
var statearr_37131_38799 = state_37124__$1;
(statearr_37131_38799[(1)] = (14));

} else {
var statearr_37132_38800 = state_37124__$1;
(statearr_37132_38800[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37125 === (6))){
var state_37124__$1 = state_37124;
var statearr_37133_38801 = state_37124__$1;
(statearr_37133_38801[(2)] = null);

(statearr_37133_38801[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37125 === (17))){
var inst_37117 = (state_37124[(2)]);
var state_37124__$1 = (function (){var statearr_37146 = state_37124;
(statearr_37146[(10)] = inst_37117);

return statearr_37146;
})();
var statearr_37147_38802 = state_37124__$1;
(statearr_37147_38802[(2)] = null);

(statearr_37147_38802[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37125 === (3))){
var inst_37122 = (state_37124[(2)]);
var state_37124__$1 = state_37124;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37124__$1,inst_37122);
} else {
if((state_val_37125 === (12))){
var _ = (function (){var statearr_37148 = state_37124;
(statearr_37148[(4)] = cljs.core.rest((state_37124[(4)])));

return statearr_37148;
})();
var state_37124__$1 = state_37124;
var ex37145 = (state_37124__$1[(2)]);
var statearr_37149_38803 = state_37124__$1;
(statearr_37149_38803[(5)] = ex37145);


if((ex37145 instanceof Object)){
var statearr_37150_38804 = state_37124__$1;
(statearr_37150_38804[(1)] = (11));

(statearr_37150_38804[(5)] = null);

} else {
throw ex37145;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37125 === (2))){
var inst_37083 = cljs.core.reset_BANG_(dctr,cnt);
var inst_37084 = cnt;
var inst_37085 = (0);
var state_37124__$1 = (function (){var statearr_37151 = state_37124;
(statearr_37151[(7)] = inst_37085);

(statearr_37151[(11)] = inst_37083);

(statearr_37151[(8)] = inst_37084);

return statearr_37151;
})();
var statearr_37152_38805 = state_37124__$1;
(statearr_37152_38805[(2)] = null);

(statearr_37152_38805[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37125 === (11))){
var inst_37089 = (state_37124[(2)]);
var inst_37090 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_37124__$1 = (function (){var statearr_37153 = state_37124;
(statearr_37153[(12)] = inst_37089);

return statearr_37153;
})();
var statearr_37154_38806 = state_37124__$1;
(statearr_37154_38806[(2)] = inst_37090);

(statearr_37154_38806[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37125 === (9))){
var inst_37085 = (state_37124[(7)]);
var _ = (function (){var statearr_37155 = state_37124;
(statearr_37155[(4)] = cljs.core.cons((12),(state_37124[(4)])));

return statearr_37155;
})();
var inst_37096 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_37085) : chs__$1.call(null,inst_37085));
var inst_37097 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_37085) : done.call(null,inst_37085));
var inst_37098 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_37096,inst_37097);
var ___$1 = (function (){var statearr_37156 = state_37124;
(statearr_37156[(4)] = cljs.core.rest((state_37124[(4)])));

return statearr_37156;
})();
var state_37124__$1 = state_37124;
var statearr_37157_38807 = state_37124__$1;
(statearr_37157_38807[(2)] = inst_37098);

(statearr_37157_38807[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37125 === (5))){
var inst_37108 = (state_37124[(2)]);
var state_37124__$1 = (function (){var statearr_37158 = state_37124;
(statearr_37158[(13)] = inst_37108);

return statearr_37158;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37124__$1,(13),dchan);
} else {
if((state_val_37125 === (14))){
var inst_37113 = cljs.core.async.close_BANG_(out);
var state_37124__$1 = state_37124;
var statearr_37159_38808 = state_37124__$1;
(statearr_37159_38808[(2)] = inst_37113);

(statearr_37159_38808[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37125 === (16))){
var inst_37120 = (state_37124[(2)]);
var state_37124__$1 = state_37124;
var statearr_37160_38809 = state_37124__$1;
(statearr_37160_38809[(2)] = inst_37120);

(statearr_37160_38809[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37125 === (10))){
var inst_37085 = (state_37124[(7)]);
var inst_37101 = (state_37124[(2)]);
var inst_37102 = (inst_37085 + (1));
var inst_37085__$1 = inst_37102;
var state_37124__$1 = (function (){var statearr_37161 = state_37124;
(statearr_37161[(7)] = inst_37085__$1);

(statearr_37161[(14)] = inst_37101);

return statearr_37161;
})();
var statearr_37162_38810 = state_37124__$1;
(statearr_37162_38810[(2)] = null);

(statearr_37162_38810[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37125 === (8))){
var inst_37106 = (state_37124[(2)]);
var state_37124__$1 = state_37124;
var statearr_37164_38811 = state_37124__$1;
(statearr_37164_38811[(2)] = inst_37106);

(statearr_37164_38811[(1)] = (5));


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
var cljs$core$async$state_machine__35072__auto__ = null;
var cljs$core$async$state_machine__35072__auto____0 = (function (){
var statearr_37166 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37166[(0)] = cljs$core$async$state_machine__35072__auto__);

(statearr_37166[(1)] = (1));

return statearr_37166;
});
var cljs$core$async$state_machine__35072__auto____1 = (function (state_37124){
while(true){
var ret_value__35073__auto__ = (function (){try{while(true){
var result__35074__auto__ = switch__35071__auto__(state_37124);
if(cljs.core.keyword_identical_QMARK_(result__35074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35074__auto__;
}
break;
}
}catch (e37168){var ex__35075__auto__ = e37168;
var statearr_37170_38812 = state_37124;
(statearr_37170_38812[(2)] = ex__35075__auto__);


if(cljs.core.seq((state_37124[(4)]))){
var statearr_37171_38813 = state_37124;
(statearr_37171_38813[(1)] = cljs.core.first((state_37124[(4)])));

} else {
throw ex__35075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38814 = state_37124;
state_37124 = G__38814;
continue;
} else {
return ret_value__35073__auto__;
}
break;
}
});
cljs$core$async$state_machine__35072__auto__ = function(state_37124){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35072__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35072__auto____1.call(this,state_37124);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35072__auto____0;
cljs$core$async$state_machine__35072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35072__auto____1;
return cljs$core$async$state_machine__35072__auto__;
})()
})();
var state__35308__auto__ = (function (){var statearr_37173 = f__35307__auto__();
(statearr_37173[(6)] = c__35306__auto___38794);

return statearr_37173;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35308__auto__);
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
var G__37177 = arguments.length;
switch (G__37177) {
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
var c__35306__auto___38816 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35307__auto__ = (function (){var switch__35071__auto__ = (function (state_37212){
var state_val_37213 = (state_37212[(1)]);
if((state_val_37213 === (7))){
var inst_37192 = (state_37212[(7)]);
var inst_37191 = (state_37212[(8)]);
var inst_37191__$1 = (state_37212[(2)]);
var inst_37192__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37191__$1,(0),null);
var inst_37193 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37191__$1,(1),null);
var inst_37194 = (inst_37192__$1 == null);
var state_37212__$1 = (function (){var statearr_37217 = state_37212;
(statearr_37217[(7)] = inst_37192__$1);

(statearr_37217[(8)] = inst_37191__$1);

(statearr_37217[(9)] = inst_37193);

return statearr_37217;
})();
if(cljs.core.truth_(inst_37194)){
var statearr_37218_38817 = state_37212__$1;
(statearr_37218_38817[(1)] = (8));

} else {
var statearr_37219_38818 = state_37212__$1;
(statearr_37219_38818[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37213 === (1))){
var inst_37181 = cljs.core.vec(chs);
var inst_37182 = inst_37181;
var state_37212__$1 = (function (){var statearr_37220 = state_37212;
(statearr_37220[(10)] = inst_37182);

return statearr_37220;
})();
var statearr_37221_38819 = state_37212__$1;
(statearr_37221_38819[(2)] = null);

(statearr_37221_38819[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37213 === (4))){
var inst_37182 = (state_37212[(10)]);
var state_37212__$1 = state_37212;
return cljs.core.async.ioc_alts_BANG_(state_37212__$1,(7),inst_37182);
} else {
if((state_val_37213 === (6))){
var inst_37208 = (state_37212[(2)]);
var state_37212__$1 = state_37212;
var statearr_37222_38820 = state_37212__$1;
(statearr_37222_38820[(2)] = inst_37208);

(statearr_37222_38820[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37213 === (3))){
var inst_37210 = (state_37212[(2)]);
var state_37212__$1 = state_37212;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37212__$1,inst_37210);
} else {
if((state_val_37213 === (2))){
var inst_37182 = (state_37212[(10)]);
var inst_37184 = cljs.core.count(inst_37182);
var inst_37185 = (inst_37184 > (0));
var state_37212__$1 = state_37212;
if(cljs.core.truth_(inst_37185)){
var statearr_37234_38821 = state_37212__$1;
(statearr_37234_38821[(1)] = (4));

} else {
var statearr_37235_38822 = state_37212__$1;
(statearr_37235_38822[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37213 === (11))){
var inst_37182 = (state_37212[(10)]);
var inst_37201 = (state_37212[(2)]);
var tmp37225 = inst_37182;
var inst_37182__$1 = tmp37225;
var state_37212__$1 = (function (){var statearr_37239 = state_37212;
(statearr_37239[(11)] = inst_37201);

(statearr_37239[(10)] = inst_37182__$1);

return statearr_37239;
})();
var statearr_37240_38823 = state_37212__$1;
(statearr_37240_38823[(2)] = null);

(statearr_37240_38823[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37213 === (9))){
var inst_37192 = (state_37212[(7)]);
var state_37212__$1 = state_37212;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37212__$1,(11),out,inst_37192);
} else {
if((state_val_37213 === (5))){
var inst_37206 = cljs.core.async.close_BANG_(out);
var state_37212__$1 = state_37212;
var statearr_37251_38824 = state_37212__$1;
(statearr_37251_38824[(2)] = inst_37206);

(statearr_37251_38824[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37213 === (10))){
var inst_37204 = (state_37212[(2)]);
var state_37212__$1 = state_37212;
var statearr_37252_38825 = state_37212__$1;
(statearr_37252_38825[(2)] = inst_37204);

(statearr_37252_38825[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37213 === (8))){
var inst_37192 = (state_37212[(7)]);
var inst_37182 = (state_37212[(10)]);
var inst_37191 = (state_37212[(8)]);
var inst_37193 = (state_37212[(9)]);
var inst_37196 = (function (){var cs = inst_37182;
var vec__37187 = inst_37191;
var v = inst_37192;
var c = inst_37193;
return (function (p1__37175_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__37175_SHARP_);
});
})();
var inst_37197 = cljs.core.filterv(inst_37196,inst_37182);
var inst_37182__$1 = inst_37197;
var state_37212__$1 = (function (){var statearr_37253 = state_37212;
(statearr_37253[(10)] = inst_37182__$1);

return statearr_37253;
})();
var statearr_37257_38826 = state_37212__$1;
(statearr_37257_38826[(2)] = null);

(statearr_37257_38826[(1)] = (2));


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
var cljs$core$async$state_machine__35072__auto__ = null;
var cljs$core$async$state_machine__35072__auto____0 = (function (){
var statearr_37265 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37265[(0)] = cljs$core$async$state_machine__35072__auto__);

(statearr_37265[(1)] = (1));

return statearr_37265;
});
var cljs$core$async$state_machine__35072__auto____1 = (function (state_37212){
while(true){
var ret_value__35073__auto__ = (function (){try{while(true){
var result__35074__auto__ = switch__35071__auto__(state_37212);
if(cljs.core.keyword_identical_QMARK_(result__35074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35074__auto__;
}
break;
}
}catch (e37269){var ex__35075__auto__ = e37269;
var statearr_37270_38827 = state_37212;
(statearr_37270_38827[(2)] = ex__35075__auto__);


if(cljs.core.seq((state_37212[(4)]))){
var statearr_37275_38828 = state_37212;
(statearr_37275_38828[(1)] = cljs.core.first((state_37212[(4)])));

} else {
throw ex__35075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38829 = state_37212;
state_37212 = G__38829;
continue;
} else {
return ret_value__35073__auto__;
}
break;
}
});
cljs$core$async$state_machine__35072__auto__ = function(state_37212){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35072__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35072__auto____1.call(this,state_37212);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35072__auto____0;
cljs$core$async$state_machine__35072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35072__auto____1;
return cljs$core$async$state_machine__35072__auto__;
})()
})();
var state__35308__auto__ = (function (){var statearr_37276 = f__35307__auto__();
(statearr_37276[(6)] = c__35306__auto___38816);

return statearr_37276;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35308__auto__);
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
var G__37280 = arguments.length;
switch (G__37280) {
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
var c__35306__auto___38831 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35307__auto__ = (function (){var switch__35071__auto__ = (function (state_37304){
var state_val_37305 = (state_37304[(1)]);
if((state_val_37305 === (7))){
var inst_37286 = (state_37304[(7)]);
var inst_37286__$1 = (state_37304[(2)]);
var inst_37287 = (inst_37286__$1 == null);
var inst_37288 = cljs.core.not(inst_37287);
var state_37304__$1 = (function (){var statearr_37306 = state_37304;
(statearr_37306[(7)] = inst_37286__$1);

return statearr_37306;
})();
if(inst_37288){
var statearr_37307_38832 = state_37304__$1;
(statearr_37307_38832[(1)] = (8));

} else {
var statearr_37308_38833 = state_37304__$1;
(statearr_37308_38833[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37305 === (1))){
var inst_37281 = (0);
var state_37304__$1 = (function (){var statearr_37309 = state_37304;
(statearr_37309[(8)] = inst_37281);

return statearr_37309;
})();
var statearr_37310_38834 = state_37304__$1;
(statearr_37310_38834[(2)] = null);

(statearr_37310_38834[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37305 === (4))){
var state_37304__$1 = state_37304;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37304__$1,(7),ch);
} else {
if((state_val_37305 === (6))){
var inst_37299 = (state_37304[(2)]);
var state_37304__$1 = state_37304;
var statearr_37311_38835 = state_37304__$1;
(statearr_37311_38835[(2)] = inst_37299);

(statearr_37311_38835[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37305 === (3))){
var inst_37301 = (state_37304[(2)]);
var inst_37302 = cljs.core.async.close_BANG_(out);
var state_37304__$1 = (function (){var statearr_37312 = state_37304;
(statearr_37312[(9)] = inst_37301);

return statearr_37312;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_37304__$1,inst_37302);
} else {
if((state_val_37305 === (2))){
var inst_37281 = (state_37304[(8)]);
var inst_37283 = (inst_37281 < n);
var state_37304__$1 = state_37304;
if(cljs.core.truth_(inst_37283)){
var statearr_37313_38836 = state_37304__$1;
(statearr_37313_38836[(1)] = (4));

} else {
var statearr_37314_38837 = state_37304__$1;
(statearr_37314_38837[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37305 === (11))){
var inst_37281 = (state_37304[(8)]);
var inst_37291 = (state_37304[(2)]);
var inst_37292 = (inst_37281 + (1));
var inst_37281__$1 = inst_37292;
var state_37304__$1 = (function (){var statearr_37315 = state_37304;
(statearr_37315[(8)] = inst_37281__$1);

(statearr_37315[(10)] = inst_37291);

return statearr_37315;
})();
var statearr_37316_38838 = state_37304__$1;
(statearr_37316_38838[(2)] = null);

(statearr_37316_38838[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37305 === (9))){
var state_37304__$1 = state_37304;
var statearr_37317_38839 = state_37304__$1;
(statearr_37317_38839[(2)] = null);

(statearr_37317_38839[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37305 === (5))){
var state_37304__$1 = state_37304;
var statearr_37318_38840 = state_37304__$1;
(statearr_37318_38840[(2)] = null);

(statearr_37318_38840[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37305 === (10))){
var inst_37296 = (state_37304[(2)]);
var state_37304__$1 = state_37304;
var statearr_37321_38841 = state_37304__$1;
(statearr_37321_38841[(2)] = inst_37296);

(statearr_37321_38841[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37305 === (8))){
var inst_37286 = (state_37304[(7)]);
var state_37304__$1 = state_37304;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37304__$1,(11),out,inst_37286);
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
var cljs$core$async$state_machine__35072__auto__ = null;
var cljs$core$async$state_machine__35072__auto____0 = (function (){
var statearr_37323 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37323[(0)] = cljs$core$async$state_machine__35072__auto__);

(statearr_37323[(1)] = (1));

return statearr_37323;
});
var cljs$core$async$state_machine__35072__auto____1 = (function (state_37304){
while(true){
var ret_value__35073__auto__ = (function (){try{while(true){
var result__35074__auto__ = switch__35071__auto__(state_37304);
if(cljs.core.keyword_identical_QMARK_(result__35074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35074__auto__;
}
break;
}
}catch (e37324){var ex__35075__auto__ = e37324;
var statearr_37325_38842 = state_37304;
(statearr_37325_38842[(2)] = ex__35075__auto__);


if(cljs.core.seq((state_37304[(4)]))){
var statearr_37326_38843 = state_37304;
(statearr_37326_38843[(1)] = cljs.core.first((state_37304[(4)])));

} else {
throw ex__35075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38844 = state_37304;
state_37304 = G__38844;
continue;
} else {
return ret_value__35073__auto__;
}
break;
}
});
cljs$core$async$state_machine__35072__auto__ = function(state_37304){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35072__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35072__auto____1.call(this,state_37304);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35072__auto____0;
cljs$core$async$state_machine__35072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35072__auto____1;
return cljs$core$async$state_machine__35072__auto__;
})()
})();
var state__35308__auto__ = (function (){var statearr_37327 = f__35307__auto__();
(statearr_37327[(6)] = c__35306__auto___38831);

return statearr_37327;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35308__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37341 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37341 = (function (f,ch,meta37342){
this.f = f;
this.ch = ch;
this.meta37342 = meta37342;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37341.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37343,meta37342__$1){
var self__ = this;
var _37343__$1 = this;
return (new cljs.core.async.t_cljs$core$async37341(self__.f,self__.ch,meta37342__$1));
}));

(cljs.core.async.t_cljs$core$async37341.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37343){
var self__ = this;
var _37343__$1 = this;
return self__.meta37342;
}));

(cljs.core.async.t_cljs$core$async37341.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37341.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async37341.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async37341.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37341.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37346 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37346 = (function (f,ch,meta37342,_,fn1,meta37347){
this.f = f;
this.ch = ch;
this.meta37342 = meta37342;
this._ = _;
this.fn1 = fn1;
this.meta37347 = meta37347;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37346.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37348,meta37347__$1){
var self__ = this;
var _37348__$1 = this;
return (new cljs.core.async.t_cljs$core$async37346(self__.f,self__.ch,self__.meta37342,self__._,self__.fn1,meta37347__$1));
}));

(cljs.core.async.t_cljs$core$async37346.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37348){
var self__ = this;
var _37348__$1 = this;
return self__.meta37347;
}));

(cljs.core.async.t_cljs$core$async37346.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37346.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async37346.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async37346.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__37340_SHARP_){
var G__37349 = (((p1__37340_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__37340_SHARP_) : self__.f.call(null,p1__37340_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__37349) : f1.call(null,G__37349));
});
}));

(cljs.core.async.t_cljs$core$async37346.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta37342","meta37342",-661119865,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async37341","cljs.core.async/t_cljs$core$async37341",1299798681,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta37347","meta37347",1021605027,null)], null);
}));

(cljs.core.async.t_cljs$core$async37346.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37346.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37346");

(cljs.core.async.t_cljs$core$async37346.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async37346");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37346.
 */
cljs.core.async.__GT_t_cljs$core$async37346 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async37346(f__$1,ch__$1,meta37342__$1,___$2,fn1__$1,meta37347){
return (new cljs.core.async.t_cljs$core$async37346(f__$1,ch__$1,meta37342__$1,___$2,fn1__$1,meta37347));
});

}

return (new cljs.core.async.t_cljs$core$async37346(self__.f,self__.ch,self__.meta37342,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__37350 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__37350) : self__.f.call(null,G__37350));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async37341.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37341.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async37341.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta37342","meta37342",-661119865,null)], null);
}));

(cljs.core.async.t_cljs$core$async37341.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37341.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37341");

(cljs.core.async.t_cljs$core$async37341.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async37341");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37341.
 */
cljs.core.async.__GT_t_cljs$core$async37341 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async37341(f__$1,ch__$1,meta37342){
return (new cljs.core.async.t_cljs$core$async37341(f__$1,ch__$1,meta37342));
});

}

return (new cljs.core.async.t_cljs$core$async37341(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37354 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37354 = (function (f,ch,meta37355){
this.f = f;
this.ch = ch;
this.meta37355 = meta37355;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37354.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37356,meta37355__$1){
var self__ = this;
var _37356__$1 = this;
return (new cljs.core.async.t_cljs$core$async37354(self__.f,self__.ch,meta37355__$1));
}));

(cljs.core.async.t_cljs$core$async37354.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37356){
var self__ = this;
var _37356__$1 = this;
return self__.meta37355;
}));

(cljs.core.async.t_cljs$core$async37354.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37354.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async37354.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37354.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async37354.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37354.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async37354.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta37355","meta37355",910490531,null)], null);
}));

(cljs.core.async.t_cljs$core$async37354.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37354.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37354");

(cljs.core.async.t_cljs$core$async37354.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async37354");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37354.
 */
cljs.core.async.__GT_t_cljs$core$async37354 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async37354(f__$1,ch__$1,meta37355){
return (new cljs.core.async.t_cljs$core$async37354(f__$1,ch__$1,meta37355));
});

}

return (new cljs.core.async.t_cljs$core$async37354(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37367 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37367 = (function (p,ch,meta37368){
this.p = p;
this.ch = ch;
this.meta37368 = meta37368;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37367.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37369,meta37368__$1){
var self__ = this;
var _37369__$1 = this;
return (new cljs.core.async.t_cljs$core$async37367(self__.p,self__.ch,meta37368__$1));
}));

(cljs.core.async.t_cljs$core$async37367.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37369){
var self__ = this;
var _37369__$1 = this;
return self__.meta37368;
}));

(cljs.core.async.t_cljs$core$async37367.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37367.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async37367.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async37367.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37367.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async37367.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37367.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async37367.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta37368","meta37368",-210713751,null)], null);
}));

(cljs.core.async.t_cljs$core$async37367.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37367.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37367");

(cljs.core.async.t_cljs$core$async37367.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async37367");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37367.
 */
cljs.core.async.__GT_t_cljs$core$async37367 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async37367(p__$1,ch__$1,meta37368){
return (new cljs.core.async.t_cljs$core$async37367(p__$1,ch__$1,meta37368));
});

}

return (new cljs.core.async.t_cljs$core$async37367(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__37379 = arguments.length;
switch (G__37379) {
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
var c__35306__auto___38846 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35307__auto__ = (function (){var switch__35071__auto__ = (function (state_37412){
var state_val_37413 = (state_37412[(1)]);
if((state_val_37413 === (7))){
var inst_37408 = (state_37412[(2)]);
var state_37412__$1 = state_37412;
var statearr_37415_38847 = state_37412__$1;
(statearr_37415_38847[(2)] = inst_37408);

(statearr_37415_38847[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37413 === (1))){
var state_37412__$1 = state_37412;
var statearr_37416_38848 = state_37412__$1;
(statearr_37416_38848[(2)] = null);

(statearr_37416_38848[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37413 === (4))){
var inst_37392 = (state_37412[(7)]);
var inst_37392__$1 = (state_37412[(2)]);
var inst_37393 = (inst_37392__$1 == null);
var state_37412__$1 = (function (){var statearr_37417 = state_37412;
(statearr_37417[(7)] = inst_37392__$1);

return statearr_37417;
})();
if(cljs.core.truth_(inst_37393)){
var statearr_37418_38849 = state_37412__$1;
(statearr_37418_38849[(1)] = (5));

} else {
var statearr_37419_38850 = state_37412__$1;
(statearr_37419_38850[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37413 === (6))){
var inst_37392 = (state_37412[(7)]);
var inst_37397 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_37392) : p.call(null,inst_37392));
var state_37412__$1 = state_37412;
if(cljs.core.truth_(inst_37397)){
var statearr_37420_38851 = state_37412__$1;
(statearr_37420_38851[(1)] = (8));

} else {
var statearr_37421_38852 = state_37412__$1;
(statearr_37421_38852[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37413 === (3))){
var inst_37410 = (state_37412[(2)]);
var state_37412__$1 = state_37412;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37412__$1,inst_37410);
} else {
if((state_val_37413 === (2))){
var state_37412__$1 = state_37412;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37412__$1,(4),ch);
} else {
if((state_val_37413 === (11))){
var inst_37401 = (state_37412[(2)]);
var state_37412__$1 = state_37412;
var statearr_37422_38853 = state_37412__$1;
(statearr_37422_38853[(2)] = inst_37401);

(statearr_37422_38853[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37413 === (9))){
var state_37412__$1 = state_37412;
var statearr_37423_38854 = state_37412__$1;
(statearr_37423_38854[(2)] = null);

(statearr_37423_38854[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37413 === (5))){
var inst_37395 = cljs.core.async.close_BANG_(out);
var state_37412__$1 = state_37412;
var statearr_37424_38855 = state_37412__$1;
(statearr_37424_38855[(2)] = inst_37395);

(statearr_37424_38855[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37413 === (10))){
var inst_37404 = (state_37412[(2)]);
var state_37412__$1 = (function (){var statearr_37425 = state_37412;
(statearr_37425[(8)] = inst_37404);

return statearr_37425;
})();
var statearr_37426_38856 = state_37412__$1;
(statearr_37426_38856[(2)] = null);

(statearr_37426_38856[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37413 === (8))){
var inst_37392 = (state_37412[(7)]);
var state_37412__$1 = state_37412;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37412__$1,(11),out,inst_37392);
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
var cljs$core$async$state_machine__35072__auto__ = null;
var cljs$core$async$state_machine__35072__auto____0 = (function (){
var statearr_37435 = [null,null,null,null,null,null,null,null,null];
(statearr_37435[(0)] = cljs$core$async$state_machine__35072__auto__);

(statearr_37435[(1)] = (1));

return statearr_37435;
});
var cljs$core$async$state_machine__35072__auto____1 = (function (state_37412){
while(true){
var ret_value__35073__auto__ = (function (){try{while(true){
var result__35074__auto__ = switch__35071__auto__(state_37412);
if(cljs.core.keyword_identical_QMARK_(result__35074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35074__auto__;
}
break;
}
}catch (e37436){var ex__35075__auto__ = e37436;
var statearr_37438_38857 = state_37412;
(statearr_37438_38857[(2)] = ex__35075__auto__);


if(cljs.core.seq((state_37412[(4)]))){
var statearr_37439_38858 = state_37412;
(statearr_37439_38858[(1)] = cljs.core.first((state_37412[(4)])));

} else {
throw ex__35075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38859 = state_37412;
state_37412 = G__38859;
continue;
} else {
return ret_value__35073__auto__;
}
break;
}
});
cljs$core$async$state_machine__35072__auto__ = function(state_37412){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35072__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35072__auto____1.call(this,state_37412);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35072__auto____0;
cljs$core$async$state_machine__35072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35072__auto____1;
return cljs$core$async$state_machine__35072__auto__;
})()
})();
var state__35308__auto__ = (function (){var statearr_37440 = f__35307__auto__();
(statearr_37440[(6)] = c__35306__auto___38846);

return statearr_37440;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35308__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__37453 = arguments.length;
switch (G__37453) {
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
var c__35306__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35307__auto__ = (function (){var switch__35071__auto__ = (function (state_37533){
var state_val_37534 = (state_37533[(1)]);
if((state_val_37534 === (7))){
var inst_37529 = (state_37533[(2)]);
var state_37533__$1 = state_37533;
var statearr_37537_38861 = state_37533__$1;
(statearr_37537_38861[(2)] = inst_37529);

(statearr_37537_38861[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37534 === (20))){
var inst_37492 = (state_37533[(7)]);
var inst_37508 = (state_37533[(2)]);
var inst_37509 = cljs.core.next(inst_37492);
var inst_37478 = inst_37509;
var inst_37479 = null;
var inst_37480 = (0);
var inst_37481 = (0);
var state_37533__$1 = (function (){var statearr_37538 = state_37533;
(statearr_37538[(8)] = inst_37479);

(statearr_37538[(9)] = inst_37478);

(statearr_37538[(10)] = inst_37508);

(statearr_37538[(11)] = inst_37481);

(statearr_37538[(12)] = inst_37480);

return statearr_37538;
})();
var statearr_37542_38862 = state_37533__$1;
(statearr_37542_38862[(2)] = null);

(statearr_37542_38862[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37534 === (1))){
var state_37533__$1 = state_37533;
var statearr_37544_38863 = state_37533__$1;
(statearr_37544_38863[(2)] = null);

(statearr_37544_38863[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37534 === (4))){
var inst_37467 = (state_37533[(13)]);
var inst_37467__$1 = (state_37533[(2)]);
var inst_37468 = (inst_37467__$1 == null);
var state_37533__$1 = (function (){var statearr_37545 = state_37533;
(statearr_37545[(13)] = inst_37467__$1);

return statearr_37545;
})();
if(cljs.core.truth_(inst_37468)){
var statearr_37546_38864 = state_37533__$1;
(statearr_37546_38864[(1)] = (5));

} else {
var statearr_37547_38865 = state_37533__$1;
(statearr_37547_38865[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37534 === (15))){
var state_37533__$1 = state_37533;
var statearr_37551_38866 = state_37533__$1;
(statearr_37551_38866[(2)] = null);

(statearr_37551_38866[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37534 === (21))){
var state_37533__$1 = state_37533;
var statearr_37552_38867 = state_37533__$1;
(statearr_37552_38867[(2)] = null);

(statearr_37552_38867[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37534 === (13))){
var inst_37479 = (state_37533[(8)]);
var inst_37478 = (state_37533[(9)]);
var inst_37481 = (state_37533[(11)]);
var inst_37480 = (state_37533[(12)]);
var inst_37488 = (state_37533[(2)]);
var inst_37489 = (inst_37481 + (1));
var tmp37548 = inst_37479;
var tmp37549 = inst_37478;
var tmp37550 = inst_37480;
var inst_37478__$1 = tmp37549;
var inst_37479__$1 = tmp37548;
var inst_37480__$1 = tmp37550;
var inst_37481__$1 = inst_37489;
var state_37533__$1 = (function (){var statearr_37554 = state_37533;
(statearr_37554[(8)] = inst_37479__$1);

(statearr_37554[(14)] = inst_37488);

(statearr_37554[(9)] = inst_37478__$1);

(statearr_37554[(11)] = inst_37481__$1);

(statearr_37554[(12)] = inst_37480__$1);

return statearr_37554;
})();
var statearr_37555_38868 = state_37533__$1;
(statearr_37555_38868[(2)] = null);

(statearr_37555_38868[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37534 === (22))){
var state_37533__$1 = state_37533;
var statearr_37556_38869 = state_37533__$1;
(statearr_37556_38869[(2)] = null);

(statearr_37556_38869[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37534 === (6))){
var inst_37467 = (state_37533[(13)]);
var inst_37476 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_37467) : f.call(null,inst_37467));
var inst_37477 = cljs.core.seq(inst_37476);
var inst_37478 = inst_37477;
var inst_37479 = null;
var inst_37480 = (0);
var inst_37481 = (0);
var state_37533__$1 = (function (){var statearr_37565 = state_37533;
(statearr_37565[(8)] = inst_37479);

(statearr_37565[(9)] = inst_37478);

(statearr_37565[(11)] = inst_37481);

(statearr_37565[(12)] = inst_37480);

return statearr_37565;
})();
var statearr_37566_38870 = state_37533__$1;
(statearr_37566_38870[(2)] = null);

(statearr_37566_38870[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37534 === (17))){
var inst_37492 = (state_37533[(7)]);
var inst_37498 = cljs.core.chunk_first(inst_37492);
var inst_37499 = cljs.core.chunk_rest(inst_37492);
var inst_37500 = cljs.core.count(inst_37498);
var inst_37478 = inst_37499;
var inst_37479 = inst_37498;
var inst_37480 = inst_37500;
var inst_37481 = (0);
var state_37533__$1 = (function (){var statearr_37567 = state_37533;
(statearr_37567[(8)] = inst_37479);

(statearr_37567[(9)] = inst_37478);

(statearr_37567[(11)] = inst_37481);

(statearr_37567[(12)] = inst_37480);

return statearr_37567;
})();
var statearr_37569_38871 = state_37533__$1;
(statearr_37569_38871[(2)] = null);

(statearr_37569_38871[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37534 === (3))){
var inst_37531 = (state_37533[(2)]);
var state_37533__$1 = state_37533;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37533__$1,inst_37531);
} else {
if((state_val_37534 === (12))){
var inst_37519 = (state_37533[(2)]);
var state_37533__$1 = state_37533;
var statearr_37570_38872 = state_37533__$1;
(statearr_37570_38872[(2)] = inst_37519);

(statearr_37570_38872[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37534 === (2))){
var state_37533__$1 = state_37533;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37533__$1,(4),in$);
} else {
if((state_val_37534 === (23))){
var inst_37527 = (state_37533[(2)]);
var state_37533__$1 = state_37533;
var statearr_37571_38873 = state_37533__$1;
(statearr_37571_38873[(2)] = inst_37527);

(statearr_37571_38873[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37534 === (19))){
var inst_37512 = (state_37533[(2)]);
var state_37533__$1 = state_37533;
var statearr_37572_38874 = state_37533__$1;
(statearr_37572_38874[(2)] = inst_37512);

(statearr_37572_38874[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37534 === (11))){
var inst_37478 = (state_37533[(9)]);
var inst_37492 = (state_37533[(7)]);
var inst_37492__$1 = cljs.core.seq(inst_37478);
var state_37533__$1 = (function (){var statearr_37575 = state_37533;
(statearr_37575[(7)] = inst_37492__$1);

return statearr_37575;
})();
if(inst_37492__$1){
var statearr_37576_38875 = state_37533__$1;
(statearr_37576_38875[(1)] = (14));

} else {
var statearr_37577_38876 = state_37533__$1;
(statearr_37577_38876[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37534 === (9))){
var inst_37521 = (state_37533[(2)]);
var inst_37522 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_37533__$1 = (function (){var statearr_37580 = state_37533;
(statearr_37580[(15)] = inst_37521);

return statearr_37580;
})();
if(cljs.core.truth_(inst_37522)){
var statearr_37581_38877 = state_37533__$1;
(statearr_37581_38877[(1)] = (21));

} else {
var statearr_37582_38878 = state_37533__$1;
(statearr_37582_38878[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37534 === (5))){
var inst_37470 = cljs.core.async.close_BANG_(out);
var state_37533__$1 = state_37533;
var statearr_37583_38879 = state_37533__$1;
(statearr_37583_38879[(2)] = inst_37470);

(statearr_37583_38879[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37534 === (14))){
var inst_37492 = (state_37533[(7)]);
var inst_37496 = cljs.core.chunked_seq_QMARK_(inst_37492);
var state_37533__$1 = state_37533;
if(inst_37496){
var statearr_37584_38880 = state_37533__$1;
(statearr_37584_38880[(1)] = (17));

} else {
var statearr_37585_38881 = state_37533__$1;
(statearr_37585_38881[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37534 === (16))){
var inst_37517 = (state_37533[(2)]);
var state_37533__$1 = state_37533;
var statearr_37587_38886 = state_37533__$1;
(statearr_37587_38886[(2)] = inst_37517);

(statearr_37587_38886[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37534 === (10))){
var inst_37479 = (state_37533[(8)]);
var inst_37481 = (state_37533[(11)]);
var inst_37486 = cljs.core._nth(inst_37479,inst_37481);
var state_37533__$1 = state_37533;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37533__$1,(13),out,inst_37486);
} else {
if((state_val_37534 === (18))){
var inst_37492 = (state_37533[(7)]);
var inst_37503 = cljs.core.first(inst_37492);
var state_37533__$1 = state_37533;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37533__$1,(20),out,inst_37503);
} else {
if((state_val_37534 === (8))){
var inst_37481 = (state_37533[(11)]);
var inst_37480 = (state_37533[(12)]);
var inst_37483 = (inst_37481 < inst_37480);
var inst_37484 = inst_37483;
var state_37533__$1 = state_37533;
if(cljs.core.truth_(inst_37484)){
var statearr_37590_38891 = state_37533__$1;
(statearr_37590_38891[(1)] = (10));

} else {
var statearr_37591_38892 = state_37533__$1;
(statearr_37591_38892[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__35072__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__35072__auto____0 = (function (){
var statearr_37592 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37592[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__35072__auto__);

(statearr_37592[(1)] = (1));

return statearr_37592;
});
var cljs$core$async$mapcat_STAR__$_state_machine__35072__auto____1 = (function (state_37533){
while(true){
var ret_value__35073__auto__ = (function (){try{while(true){
var result__35074__auto__ = switch__35071__auto__(state_37533);
if(cljs.core.keyword_identical_QMARK_(result__35074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35074__auto__;
}
break;
}
}catch (e37593){var ex__35075__auto__ = e37593;
var statearr_37594_38893 = state_37533;
(statearr_37594_38893[(2)] = ex__35075__auto__);


if(cljs.core.seq((state_37533[(4)]))){
var statearr_37595_38894 = state_37533;
(statearr_37595_38894[(1)] = cljs.core.first((state_37533[(4)])));

} else {
throw ex__35075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38895 = state_37533;
state_37533 = G__38895;
continue;
} else {
return ret_value__35073__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__35072__auto__ = function(state_37533){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__35072__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__35072__auto____1.call(this,state_37533);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__35072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__35072__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__35072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__35072__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__35072__auto__;
})()
})();
var state__35308__auto__ = (function (){var statearr_37596 = f__35307__auto__();
(statearr_37596[(6)] = c__35306__auto__);

return statearr_37596;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35308__auto__);
}));

return c__35306__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__37598 = arguments.length;
switch (G__37598) {
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
var G__37605 = arguments.length;
switch (G__37605) {
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
var G__37617 = arguments.length;
switch (G__37617) {
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
var c__35306__auto___38905 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35307__auto__ = (function (){var switch__35071__auto__ = (function (state_37651){
var state_val_37652 = (state_37651[(1)]);
if((state_val_37652 === (7))){
var inst_37646 = (state_37651[(2)]);
var state_37651__$1 = state_37651;
var statearr_37659_38907 = state_37651__$1;
(statearr_37659_38907[(2)] = inst_37646);

(statearr_37659_38907[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37652 === (1))){
var inst_37622 = null;
var state_37651__$1 = (function (){var statearr_37660 = state_37651;
(statearr_37660[(7)] = inst_37622);

return statearr_37660;
})();
var statearr_37661_38909 = state_37651__$1;
(statearr_37661_38909[(2)] = null);

(statearr_37661_38909[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37652 === (4))){
var inst_37625 = (state_37651[(8)]);
var inst_37625__$1 = (state_37651[(2)]);
var inst_37626 = (inst_37625__$1 == null);
var inst_37627 = cljs.core.not(inst_37626);
var state_37651__$1 = (function (){var statearr_37662 = state_37651;
(statearr_37662[(8)] = inst_37625__$1);

return statearr_37662;
})();
if(inst_37627){
var statearr_37663_38913 = state_37651__$1;
(statearr_37663_38913[(1)] = (5));

} else {
var statearr_37664_38915 = state_37651__$1;
(statearr_37664_38915[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37652 === (6))){
var state_37651__$1 = state_37651;
var statearr_37666_38916 = state_37651__$1;
(statearr_37666_38916[(2)] = null);

(statearr_37666_38916[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37652 === (3))){
var inst_37648 = (state_37651[(2)]);
var inst_37649 = cljs.core.async.close_BANG_(out);
var state_37651__$1 = (function (){var statearr_37667 = state_37651;
(statearr_37667[(9)] = inst_37648);

return statearr_37667;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_37651__$1,inst_37649);
} else {
if((state_val_37652 === (2))){
var state_37651__$1 = state_37651;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37651__$1,(4),ch);
} else {
if((state_val_37652 === (11))){
var inst_37625 = (state_37651[(8)]);
var inst_37634 = (state_37651[(2)]);
var inst_37622 = inst_37625;
var state_37651__$1 = (function (){var statearr_37670 = state_37651;
(statearr_37670[(7)] = inst_37622);

(statearr_37670[(10)] = inst_37634);

return statearr_37670;
})();
var statearr_37671_38917 = state_37651__$1;
(statearr_37671_38917[(2)] = null);

(statearr_37671_38917[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37652 === (9))){
var inst_37625 = (state_37651[(8)]);
var state_37651__$1 = state_37651;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37651__$1,(11),out,inst_37625);
} else {
if((state_val_37652 === (5))){
var inst_37622 = (state_37651[(7)]);
var inst_37625 = (state_37651[(8)]);
var inst_37629 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_37625,inst_37622);
var state_37651__$1 = state_37651;
if(inst_37629){
var statearr_37673_38921 = state_37651__$1;
(statearr_37673_38921[(1)] = (8));

} else {
var statearr_37674_38922 = state_37651__$1;
(statearr_37674_38922[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37652 === (10))){
var inst_37637 = (state_37651[(2)]);
var state_37651__$1 = state_37651;
var statearr_37675_38923 = state_37651__$1;
(statearr_37675_38923[(2)] = inst_37637);

(statearr_37675_38923[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37652 === (8))){
var inst_37622 = (state_37651[(7)]);
var tmp37672 = inst_37622;
var inst_37622__$1 = tmp37672;
var state_37651__$1 = (function (){var statearr_37676 = state_37651;
(statearr_37676[(7)] = inst_37622__$1);

return statearr_37676;
})();
var statearr_37677_38924 = state_37651__$1;
(statearr_37677_38924[(2)] = null);

(statearr_37677_38924[(1)] = (2));


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
var cljs$core$async$state_machine__35072__auto__ = null;
var cljs$core$async$state_machine__35072__auto____0 = (function (){
var statearr_37683 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37683[(0)] = cljs$core$async$state_machine__35072__auto__);

(statearr_37683[(1)] = (1));

return statearr_37683;
});
var cljs$core$async$state_machine__35072__auto____1 = (function (state_37651){
while(true){
var ret_value__35073__auto__ = (function (){try{while(true){
var result__35074__auto__ = switch__35071__auto__(state_37651);
if(cljs.core.keyword_identical_QMARK_(result__35074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35074__auto__;
}
break;
}
}catch (e37689){var ex__35075__auto__ = e37689;
var statearr_37690_38934 = state_37651;
(statearr_37690_38934[(2)] = ex__35075__auto__);


if(cljs.core.seq((state_37651[(4)]))){
var statearr_37691_38936 = state_37651;
(statearr_37691_38936[(1)] = cljs.core.first((state_37651[(4)])));

} else {
throw ex__35075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38937 = state_37651;
state_37651 = G__38937;
continue;
} else {
return ret_value__35073__auto__;
}
break;
}
});
cljs$core$async$state_machine__35072__auto__ = function(state_37651){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35072__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35072__auto____1.call(this,state_37651);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35072__auto____0;
cljs$core$async$state_machine__35072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35072__auto____1;
return cljs$core$async$state_machine__35072__auto__;
})()
})();
var state__35308__auto__ = (function (){var statearr_37692 = f__35307__auto__();
(statearr_37692[(6)] = c__35306__auto___38905);

return statearr_37692;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35308__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__37695 = arguments.length;
switch (G__37695) {
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
var c__35306__auto___38939 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35307__auto__ = (function (){var switch__35071__auto__ = (function (state_37740){
var state_val_37741 = (state_37740[(1)]);
if((state_val_37741 === (7))){
var inst_37736 = (state_37740[(2)]);
var state_37740__$1 = state_37740;
var statearr_37742_38940 = state_37740__$1;
(statearr_37742_38940[(2)] = inst_37736);

(statearr_37742_38940[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37741 === (1))){
var inst_37697 = (new Array(n));
var inst_37698 = inst_37697;
var inst_37699 = (0);
var state_37740__$1 = (function (){var statearr_37743 = state_37740;
(statearr_37743[(7)] = inst_37699);

(statearr_37743[(8)] = inst_37698);

return statearr_37743;
})();
var statearr_37744_38946 = state_37740__$1;
(statearr_37744_38946[(2)] = null);

(statearr_37744_38946[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37741 === (4))){
var inst_37703 = (state_37740[(9)]);
var inst_37703__$1 = (state_37740[(2)]);
var inst_37704 = (inst_37703__$1 == null);
var inst_37705 = cljs.core.not(inst_37704);
var state_37740__$1 = (function (){var statearr_37745 = state_37740;
(statearr_37745[(9)] = inst_37703__$1);

return statearr_37745;
})();
if(inst_37705){
var statearr_37747_38948 = state_37740__$1;
(statearr_37747_38948[(1)] = (5));

} else {
var statearr_37748_38949 = state_37740__$1;
(statearr_37748_38949[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37741 === (15))){
var inst_37730 = (state_37740[(2)]);
var state_37740__$1 = state_37740;
var statearr_37752_38950 = state_37740__$1;
(statearr_37752_38950[(2)] = inst_37730);

(statearr_37752_38950[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37741 === (13))){
var state_37740__$1 = state_37740;
var statearr_37753_38951 = state_37740__$1;
(statearr_37753_38951[(2)] = null);

(statearr_37753_38951[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37741 === (6))){
var inst_37699 = (state_37740[(7)]);
var inst_37726 = (inst_37699 > (0));
var state_37740__$1 = state_37740;
if(cljs.core.truth_(inst_37726)){
var statearr_37754_38952 = state_37740__$1;
(statearr_37754_38952[(1)] = (12));

} else {
var statearr_37755_38954 = state_37740__$1;
(statearr_37755_38954[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37741 === (3))){
var inst_37738 = (state_37740[(2)]);
var state_37740__$1 = state_37740;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37740__$1,inst_37738);
} else {
if((state_val_37741 === (12))){
var inst_37698 = (state_37740[(8)]);
var inst_37728 = cljs.core.vec(inst_37698);
var state_37740__$1 = state_37740;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37740__$1,(15),out,inst_37728);
} else {
if((state_val_37741 === (2))){
var state_37740__$1 = state_37740;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37740__$1,(4),ch);
} else {
if((state_val_37741 === (11))){
var inst_37715 = (state_37740[(2)]);
var inst_37716 = (new Array(n));
var inst_37698 = inst_37716;
var inst_37699 = (0);
var state_37740__$1 = (function (){var statearr_37763 = state_37740;
(statearr_37763[(7)] = inst_37699);

(statearr_37763[(8)] = inst_37698);

(statearr_37763[(10)] = inst_37715);

return statearr_37763;
})();
var statearr_37764_38959 = state_37740__$1;
(statearr_37764_38959[(2)] = null);

(statearr_37764_38959[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37741 === (9))){
var inst_37698 = (state_37740[(8)]);
var inst_37713 = cljs.core.vec(inst_37698);
var state_37740__$1 = state_37740;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37740__$1,(11),out,inst_37713);
} else {
if((state_val_37741 === (5))){
var inst_37708 = (state_37740[(11)]);
var inst_37699 = (state_37740[(7)]);
var inst_37703 = (state_37740[(9)]);
var inst_37698 = (state_37740[(8)]);
var inst_37707 = (inst_37698[inst_37699] = inst_37703);
var inst_37708__$1 = (inst_37699 + (1));
var inst_37709 = (inst_37708__$1 < n);
var state_37740__$1 = (function (){var statearr_37768 = state_37740;
(statearr_37768[(11)] = inst_37708__$1);

(statearr_37768[(12)] = inst_37707);

return statearr_37768;
})();
if(cljs.core.truth_(inst_37709)){
var statearr_37769_38962 = state_37740__$1;
(statearr_37769_38962[(1)] = (8));

} else {
var statearr_37770_38964 = state_37740__$1;
(statearr_37770_38964[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37741 === (14))){
var inst_37733 = (state_37740[(2)]);
var inst_37734 = cljs.core.async.close_BANG_(out);
var state_37740__$1 = (function (){var statearr_37772 = state_37740;
(statearr_37772[(13)] = inst_37733);

return statearr_37772;
})();
var statearr_37773_38967 = state_37740__$1;
(statearr_37773_38967[(2)] = inst_37734);

(statearr_37773_38967[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37741 === (10))){
var inst_37719 = (state_37740[(2)]);
var state_37740__$1 = state_37740;
var statearr_37774_38969 = state_37740__$1;
(statearr_37774_38969[(2)] = inst_37719);

(statearr_37774_38969[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37741 === (8))){
var inst_37708 = (state_37740[(11)]);
var inst_37698 = (state_37740[(8)]);
var tmp37771 = inst_37698;
var inst_37698__$1 = tmp37771;
var inst_37699 = inst_37708;
var state_37740__$1 = (function (){var statearr_37775 = state_37740;
(statearr_37775[(7)] = inst_37699);

(statearr_37775[(8)] = inst_37698__$1);

return statearr_37775;
})();
var statearr_37776_38970 = state_37740__$1;
(statearr_37776_38970[(2)] = null);

(statearr_37776_38970[(1)] = (2));


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
var cljs$core$async$state_machine__35072__auto__ = null;
var cljs$core$async$state_machine__35072__auto____0 = (function (){
var statearr_37780 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37780[(0)] = cljs$core$async$state_machine__35072__auto__);

(statearr_37780[(1)] = (1));

return statearr_37780;
});
var cljs$core$async$state_machine__35072__auto____1 = (function (state_37740){
while(true){
var ret_value__35073__auto__ = (function (){try{while(true){
var result__35074__auto__ = switch__35071__auto__(state_37740);
if(cljs.core.keyword_identical_QMARK_(result__35074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35074__auto__;
}
break;
}
}catch (e37781){var ex__35075__auto__ = e37781;
var statearr_37782_38999 = state_37740;
(statearr_37782_38999[(2)] = ex__35075__auto__);


if(cljs.core.seq((state_37740[(4)]))){
var statearr_37783_39000 = state_37740;
(statearr_37783_39000[(1)] = cljs.core.first((state_37740[(4)])));

} else {
throw ex__35075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39002 = state_37740;
state_37740 = G__39002;
continue;
} else {
return ret_value__35073__auto__;
}
break;
}
});
cljs$core$async$state_machine__35072__auto__ = function(state_37740){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35072__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35072__auto____1.call(this,state_37740);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35072__auto____0;
cljs$core$async$state_machine__35072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35072__auto____1;
return cljs$core$async$state_machine__35072__auto__;
})()
})();
var state__35308__auto__ = (function (){var statearr_37784 = f__35307__auto__();
(statearr_37784[(6)] = c__35306__auto___38939);

return statearr_37784;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35308__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__37786 = arguments.length;
switch (G__37786) {
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
var c__35306__auto___39009 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35307__auto__ = (function (){var switch__35071__auto__ = (function (state_37828){
var state_val_37829 = (state_37828[(1)]);
if((state_val_37829 === (7))){
var inst_37824 = (state_37828[(2)]);
var state_37828__$1 = state_37828;
var statearr_37830_39010 = state_37828__$1;
(statearr_37830_39010[(2)] = inst_37824);

(statearr_37830_39010[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37829 === (1))){
var inst_37787 = [];
var inst_37788 = inst_37787;
var inst_37789 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_37828__$1 = (function (){var statearr_37831 = state_37828;
(statearr_37831[(7)] = inst_37788);

(statearr_37831[(8)] = inst_37789);

return statearr_37831;
})();
var statearr_37832_39011 = state_37828__$1;
(statearr_37832_39011[(2)] = null);

(statearr_37832_39011[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37829 === (4))){
var inst_37792 = (state_37828[(9)]);
var inst_37792__$1 = (state_37828[(2)]);
var inst_37793 = (inst_37792__$1 == null);
var inst_37794 = cljs.core.not(inst_37793);
var state_37828__$1 = (function (){var statearr_37833 = state_37828;
(statearr_37833[(9)] = inst_37792__$1);

return statearr_37833;
})();
if(inst_37794){
var statearr_37834_39012 = state_37828__$1;
(statearr_37834_39012[(1)] = (5));

} else {
var statearr_37835_39013 = state_37828__$1;
(statearr_37835_39013[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37829 === (15))){
var inst_37818 = (state_37828[(2)]);
var state_37828__$1 = state_37828;
var statearr_37836_39014 = state_37828__$1;
(statearr_37836_39014[(2)] = inst_37818);

(statearr_37836_39014[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37829 === (13))){
var state_37828__$1 = state_37828;
var statearr_37837_39018 = state_37828__$1;
(statearr_37837_39018[(2)] = null);

(statearr_37837_39018[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37829 === (6))){
var inst_37788 = (state_37828[(7)]);
var inst_37813 = inst_37788.length;
var inst_37814 = (inst_37813 > (0));
var state_37828__$1 = state_37828;
if(cljs.core.truth_(inst_37814)){
var statearr_37839_39019 = state_37828__$1;
(statearr_37839_39019[(1)] = (12));

} else {
var statearr_37840_39022 = state_37828__$1;
(statearr_37840_39022[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37829 === (3))){
var inst_37826 = (state_37828[(2)]);
var state_37828__$1 = state_37828;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37828__$1,inst_37826);
} else {
if((state_val_37829 === (12))){
var inst_37788 = (state_37828[(7)]);
var inst_37816 = cljs.core.vec(inst_37788);
var state_37828__$1 = state_37828;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37828__$1,(15),out,inst_37816);
} else {
if((state_val_37829 === (2))){
var state_37828__$1 = state_37828;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37828__$1,(4),ch);
} else {
if((state_val_37829 === (11))){
var inst_37796 = (state_37828[(10)]);
var inst_37792 = (state_37828[(9)]);
var inst_37806 = (state_37828[(2)]);
var inst_37807 = [];
var inst_37808 = inst_37807.push(inst_37792);
var inst_37788 = inst_37807;
var inst_37789 = inst_37796;
var state_37828__$1 = (function (){var statearr_37844 = state_37828;
(statearr_37844[(7)] = inst_37788);

(statearr_37844[(11)] = inst_37808);

(statearr_37844[(12)] = inst_37806);

(statearr_37844[(8)] = inst_37789);

return statearr_37844;
})();
var statearr_37845_39047 = state_37828__$1;
(statearr_37845_39047[(2)] = null);

(statearr_37845_39047[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37829 === (9))){
var inst_37788 = (state_37828[(7)]);
var inst_37804 = cljs.core.vec(inst_37788);
var state_37828__$1 = state_37828;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37828__$1,(11),out,inst_37804);
} else {
if((state_val_37829 === (5))){
var inst_37796 = (state_37828[(10)]);
var inst_37792 = (state_37828[(9)]);
var inst_37789 = (state_37828[(8)]);
var inst_37796__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_37792) : f.call(null,inst_37792));
var inst_37797 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_37796__$1,inst_37789);
var inst_37798 = cljs.core.keyword_identical_QMARK_(inst_37789,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_37799 = ((inst_37797) || (inst_37798));
var state_37828__$1 = (function (){var statearr_37846 = state_37828;
(statearr_37846[(10)] = inst_37796__$1);

return statearr_37846;
})();
if(cljs.core.truth_(inst_37799)){
var statearr_37850_39068 = state_37828__$1;
(statearr_37850_39068[(1)] = (8));

} else {
var statearr_37851_39069 = state_37828__$1;
(statearr_37851_39069[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37829 === (14))){
var inst_37821 = (state_37828[(2)]);
var inst_37822 = cljs.core.async.close_BANG_(out);
var state_37828__$1 = (function (){var statearr_37853 = state_37828;
(statearr_37853[(13)] = inst_37821);

return statearr_37853;
})();
var statearr_37854_39081 = state_37828__$1;
(statearr_37854_39081[(2)] = inst_37822);

(statearr_37854_39081[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37829 === (10))){
var inst_37811 = (state_37828[(2)]);
var state_37828__$1 = state_37828;
var statearr_37855_39088 = state_37828__$1;
(statearr_37855_39088[(2)] = inst_37811);

(statearr_37855_39088[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37829 === (8))){
var inst_37796 = (state_37828[(10)]);
var inst_37788 = (state_37828[(7)]);
var inst_37792 = (state_37828[(9)]);
var inst_37801 = inst_37788.push(inst_37792);
var tmp37852 = inst_37788;
var inst_37788__$1 = tmp37852;
var inst_37789 = inst_37796;
var state_37828__$1 = (function (){var statearr_37856 = state_37828;
(statearr_37856[(14)] = inst_37801);

(statearr_37856[(7)] = inst_37788__$1);

(statearr_37856[(8)] = inst_37789);

return statearr_37856;
})();
var statearr_37857_39098 = state_37828__$1;
(statearr_37857_39098[(2)] = null);

(statearr_37857_39098[(1)] = (2));


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
var cljs$core$async$state_machine__35072__auto__ = null;
var cljs$core$async$state_machine__35072__auto____0 = (function (){
var statearr_37858 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37858[(0)] = cljs$core$async$state_machine__35072__auto__);

(statearr_37858[(1)] = (1));

return statearr_37858;
});
var cljs$core$async$state_machine__35072__auto____1 = (function (state_37828){
while(true){
var ret_value__35073__auto__ = (function (){try{while(true){
var result__35074__auto__ = switch__35071__auto__(state_37828);
if(cljs.core.keyword_identical_QMARK_(result__35074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35074__auto__;
}
break;
}
}catch (e37859){var ex__35075__auto__ = e37859;
var statearr_37860_39103 = state_37828;
(statearr_37860_39103[(2)] = ex__35075__auto__);


if(cljs.core.seq((state_37828[(4)]))){
var statearr_37861_39105 = state_37828;
(statearr_37861_39105[(1)] = cljs.core.first((state_37828[(4)])));

} else {
throw ex__35075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39113 = state_37828;
state_37828 = G__39113;
continue;
} else {
return ret_value__35073__auto__;
}
break;
}
});
cljs$core$async$state_machine__35072__auto__ = function(state_37828){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35072__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35072__auto____1.call(this,state_37828);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35072__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35072__auto____0;
cljs$core$async$state_machine__35072__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35072__auto____1;
return cljs$core$async$state_machine__35072__auto__;
})()
})();
var state__35308__auto__ = (function (){var statearr_37862 = f__35307__auto__();
(statearr_37862[(6)] = c__35306__auto___39009);

return statearr_37862;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35308__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
