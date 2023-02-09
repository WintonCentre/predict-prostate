goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__35839 = arguments.length;
switch (G__35839) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35840 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35840 = (function (f,blockable,meta35841){
this.f = f;
this.blockable = blockable;
this.meta35841 = meta35841;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35840.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35842,meta35841__$1){
var self__ = this;
var _35842__$1 = this;
return (new cljs.core.async.t_cljs$core$async35840(self__.f,self__.blockable,meta35841__$1));
}));

(cljs.core.async.t_cljs$core$async35840.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35842){
var self__ = this;
var _35842__$1 = this;
return self__.meta35841;
}));

(cljs.core.async.t_cljs$core$async35840.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35840.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async35840.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async35840.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async35840.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta35841","meta35841",1949056966,null)], null);
}));

(cljs.core.async.t_cljs$core$async35840.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35840.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35840");

(cljs.core.async.t_cljs$core$async35840.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async35840");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35840.
 */
cljs.core.async.__GT_t_cljs$core$async35840 = (function cljs$core$async$__GT_t_cljs$core$async35840(f__$1,blockable__$1,meta35841){
return (new cljs.core.async.t_cljs$core$async35840(f__$1,blockable__$1,meta35841));
});

}

return (new cljs.core.async.t_cljs$core$async35840(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__35853 = arguments.length;
switch (G__35853) {
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
var G__35867 = arguments.length;
switch (G__35867) {
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
var G__35875 = arguments.length;
switch (G__35875) {
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
var val_38052 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_38052) : fn1.call(null,val_38052));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_38052) : fn1.call(null,val_38052));
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
var G__35879 = arguments.length;
switch (G__35879) {
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
var n__4695__auto___38059 = n;
var x_38060 = (0);
while(true){
if((x_38060 < n__4695__auto___38059)){
(a[x_38060] = x_38060);

var G__38061 = (x_38060 + (1));
x_38060 = G__38061;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35880 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35880 = (function (flag,meta35881){
this.flag = flag;
this.meta35881 = meta35881;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35880.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35882,meta35881__$1){
var self__ = this;
var _35882__$1 = this;
return (new cljs.core.async.t_cljs$core$async35880(self__.flag,meta35881__$1));
}));

(cljs.core.async.t_cljs$core$async35880.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35882){
var self__ = this;
var _35882__$1 = this;
return self__.meta35881;
}));

(cljs.core.async.t_cljs$core$async35880.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35880.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async35880.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async35880.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async35880.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta35881","meta35881",394316022,null)], null);
}));

(cljs.core.async.t_cljs$core$async35880.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35880.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35880");

(cljs.core.async.t_cljs$core$async35880.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async35880");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35880.
 */
cljs.core.async.__GT_t_cljs$core$async35880 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async35880(flag__$1,meta35881){
return (new cljs.core.async.t_cljs$core$async35880(flag__$1,meta35881));
});

}

return (new cljs.core.async.t_cljs$core$async35880(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35883 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35883 = (function (flag,cb,meta35884){
this.flag = flag;
this.cb = cb;
this.meta35884 = meta35884;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35883.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35885,meta35884__$1){
var self__ = this;
var _35885__$1 = this;
return (new cljs.core.async.t_cljs$core$async35883(self__.flag,self__.cb,meta35884__$1));
}));

(cljs.core.async.t_cljs$core$async35883.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35885){
var self__ = this;
var _35885__$1 = this;
return self__.meta35884;
}));

(cljs.core.async.t_cljs$core$async35883.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35883.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async35883.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async35883.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async35883.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta35884","meta35884",-1392489832,null)], null);
}));

(cljs.core.async.t_cljs$core$async35883.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35883.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35883");

(cljs.core.async.t_cljs$core$async35883.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async35883");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35883.
 */
cljs.core.async.__GT_t_cljs$core$async35883 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async35883(flag__$1,cb__$1,meta35884){
return (new cljs.core.async.t_cljs$core$async35883(flag__$1,cb__$1,meta35884));
});

}

return (new cljs.core.async.t_cljs$core$async35883(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__35886_SHARP_){
var G__35892 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__35886_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__35892) : fret.call(null,G__35892));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__35887_SHARP_){
var G__35893 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__35887_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__35893) : fret.call(null,G__35893));
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
var G__38066 = (i + (1));
i = G__38066;
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
var len__4818__auto___38068 = arguments.length;
var i__4819__auto___38069 = (0);
while(true){
if((i__4819__auto___38069 < len__4818__auto___38068)){
args__4824__auto__.push((arguments[i__4819__auto___38069]));

var G__38071 = (i__4819__auto___38069 + (1));
i__4819__auto___38069 = G__38071;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__35908){
var map__35909 = p__35908;
var map__35909__$1 = cljs.core.__destructure_map(map__35909);
var opts = map__35909__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq35899){
var G__35900 = cljs.core.first(seq35899);
var seq35899__$1 = cljs.core.next(seq35899);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35900,seq35899__$1);
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
var G__35915 = arguments.length;
switch (G__35915) {
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
var c__35736__auto___38075 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35737__auto__ = (function (){var switch__35582__auto__ = (function (state_35954){
var state_val_35955 = (state_35954[(1)]);
if((state_val_35955 === (7))){
var inst_35949 = (state_35954[(2)]);
var state_35954__$1 = state_35954;
var statearr_35960_38076 = state_35954__$1;
(statearr_35960_38076[(2)] = inst_35949);

(statearr_35960_38076[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35955 === (1))){
var state_35954__$1 = state_35954;
var statearr_35961_38077 = state_35954__$1;
(statearr_35961_38077[(2)] = null);

(statearr_35961_38077[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35955 === (4))){
var inst_35929 = (state_35954[(7)]);
var inst_35929__$1 = (state_35954[(2)]);
var inst_35930 = (inst_35929__$1 == null);
var state_35954__$1 = (function (){var statearr_35965 = state_35954;
(statearr_35965[(7)] = inst_35929__$1);

return statearr_35965;
})();
if(cljs.core.truth_(inst_35930)){
var statearr_35966_38078 = state_35954__$1;
(statearr_35966_38078[(1)] = (5));

} else {
var statearr_35967_38079 = state_35954__$1;
(statearr_35967_38079[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35955 === (13))){
var state_35954__$1 = state_35954;
var statearr_35968_38081 = state_35954__$1;
(statearr_35968_38081[(2)] = null);

(statearr_35968_38081[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35955 === (6))){
var inst_35929 = (state_35954[(7)]);
var state_35954__$1 = state_35954;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35954__$1,(11),to,inst_35929);
} else {
if((state_val_35955 === (3))){
var inst_35951 = (state_35954[(2)]);
var state_35954__$1 = state_35954;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35954__$1,inst_35951);
} else {
if((state_val_35955 === (12))){
var state_35954__$1 = state_35954;
var statearr_35969_38083 = state_35954__$1;
(statearr_35969_38083[(2)] = null);

(statearr_35969_38083[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35955 === (2))){
var state_35954__$1 = state_35954;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35954__$1,(4),from);
} else {
if((state_val_35955 === (11))){
var inst_35939 = (state_35954[(2)]);
var state_35954__$1 = state_35954;
if(cljs.core.truth_(inst_35939)){
var statearr_35970_38084 = state_35954__$1;
(statearr_35970_38084[(1)] = (12));

} else {
var statearr_35972_38085 = state_35954__$1;
(statearr_35972_38085[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35955 === (9))){
var state_35954__$1 = state_35954;
var statearr_35975_38086 = state_35954__$1;
(statearr_35975_38086[(2)] = null);

(statearr_35975_38086[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35955 === (5))){
var state_35954__$1 = state_35954;
if(cljs.core.truth_(close_QMARK_)){
var statearr_35976_38087 = state_35954__$1;
(statearr_35976_38087[(1)] = (8));

} else {
var statearr_35977_38088 = state_35954__$1;
(statearr_35977_38088[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35955 === (14))){
var inst_35947 = (state_35954[(2)]);
var state_35954__$1 = state_35954;
var statearr_35978_38089 = state_35954__$1;
(statearr_35978_38089[(2)] = inst_35947);

(statearr_35978_38089[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35955 === (10))){
var inst_35936 = (state_35954[(2)]);
var state_35954__$1 = state_35954;
var statearr_35979_38090 = state_35954__$1;
(statearr_35979_38090[(2)] = inst_35936);

(statearr_35979_38090[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35955 === (8))){
var inst_35933 = cljs.core.async.close_BANG_(to);
var state_35954__$1 = state_35954;
var statearr_35980_38092 = state_35954__$1;
(statearr_35980_38092[(2)] = inst_35933);

(statearr_35980_38092[(1)] = (10));


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
var cljs$core$async$state_machine__35583__auto__ = null;
var cljs$core$async$state_machine__35583__auto____0 = (function (){
var statearr_35984 = [null,null,null,null,null,null,null,null];
(statearr_35984[(0)] = cljs$core$async$state_machine__35583__auto__);

(statearr_35984[(1)] = (1));

return statearr_35984;
});
var cljs$core$async$state_machine__35583__auto____1 = (function (state_35954){
while(true){
var ret_value__35584__auto__ = (function (){try{while(true){
var result__35585__auto__ = switch__35582__auto__(state_35954);
if(cljs.core.keyword_identical_QMARK_(result__35585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35585__auto__;
}
break;
}
}catch (e35985){var ex__35586__auto__ = e35985;
var statearr_35986_38094 = state_35954;
(statearr_35986_38094[(2)] = ex__35586__auto__);


if(cljs.core.seq((state_35954[(4)]))){
var statearr_35987_38095 = state_35954;
(statearr_35987_38095[(1)] = cljs.core.first((state_35954[(4)])));

} else {
throw ex__35586__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38096 = state_35954;
state_35954 = G__38096;
continue;
} else {
return ret_value__35584__auto__;
}
break;
}
});
cljs$core$async$state_machine__35583__auto__ = function(state_35954){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35583__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35583__auto____1.call(this,state_35954);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35583__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35583__auto____0;
cljs$core$async$state_machine__35583__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35583__auto____1;
return cljs$core$async$state_machine__35583__auto__;
})()
})();
var state__35738__auto__ = (function (){var statearr_35988 = f__35737__auto__();
(statearr_35988[(6)] = c__35736__auto___38075);

return statearr_35988;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35738__auto__);
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
var process = (function (p__35989){
var vec__35990 = p__35989;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35990,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35990,(1),null);
var job = vec__35990;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__35736__auto___38097 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35737__auto__ = (function (){var switch__35582__auto__ = (function (state_35997){
var state_val_35998 = (state_35997[(1)]);
if((state_val_35998 === (1))){
var state_35997__$1 = state_35997;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35997__$1,(2),res,v);
} else {
if((state_val_35998 === (2))){
var inst_35994 = (state_35997[(2)]);
var inst_35995 = cljs.core.async.close_BANG_(res);
var state_35997__$1 = (function (){var statearr_36000 = state_35997;
(statearr_36000[(7)] = inst_35994);

return statearr_36000;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_35997__$1,inst_35995);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__35583__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35583__auto____0 = (function (){
var statearr_36001 = [null,null,null,null,null,null,null,null];
(statearr_36001[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35583__auto__);

(statearr_36001[(1)] = (1));

return statearr_36001;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35583__auto____1 = (function (state_35997){
while(true){
var ret_value__35584__auto__ = (function (){try{while(true){
var result__35585__auto__ = switch__35582__auto__(state_35997);
if(cljs.core.keyword_identical_QMARK_(result__35585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35585__auto__;
}
break;
}
}catch (e36002){var ex__35586__auto__ = e36002;
var statearr_36003_38100 = state_35997;
(statearr_36003_38100[(2)] = ex__35586__auto__);


if(cljs.core.seq((state_35997[(4)]))){
var statearr_36004_38101 = state_35997;
(statearr_36004_38101[(1)] = cljs.core.first((state_35997[(4)])));

} else {
throw ex__35586__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38102 = state_35997;
state_35997 = G__38102;
continue;
} else {
return ret_value__35584__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35583__auto__ = function(state_35997){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35583__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35583__auto____1.call(this,state_35997);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__35583__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35583__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35583__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35583__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35583__auto__;
})()
})();
var state__35738__auto__ = (function (){var statearr_36005 = f__35737__auto__();
(statearr_36005[(6)] = c__35736__auto___38097);

return statearr_36005;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35738__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__36008){
var vec__36009 = p__36008;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36009,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36009,(1),null);
var job = vec__36009;
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
var n__4695__auto___38103 = n;
var __38104 = (0);
while(true){
if((__38104 < n__4695__auto___38103)){
var G__36013_38105 = type;
var G__36013_38106__$1 = (((G__36013_38105 instanceof cljs.core.Keyword))?G__36013_38105.fqn:null);
switch (G__36013_38106__$1) {
case "compute":
var c__35736__auto___38116 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__38104,c__35736__auto___38116,G__36013_38105,G__36013_38106__$1,n__4695__auto___38103,jobs,results,process,async){
return (function (){
var f__35737__auto__ = (function (){var switch__35582__auto__ = ((function (__38104,c__35736__auto___38116,G__36013_38105,G__36013_38106__$1,n__4695__auto___38103,jobs,results,process,async){
return (function (state_36030){
var state_val_36031 = (state_36030[(1)]);
if((state_val_36031 === (1))){
var state_36030__$1 = state_36030;
var statearr_36033_38119 = state_36030__$1;
(statearr_36033_38119[(2)] = null);

(statearr_36033_38119[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36031 === (2))){
var state_36030__$1 = state_36030;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36030__$1,(4),jobs);
} else {
if((state_val_36031 === (3))){
var inst_36028 = (state_36030[(2)]);
var state_36030__$1 = state_36030;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36030__$1,inst_36028);
} else {
if((state_val_36031 === (4))){
var inst_36018 = (state_36030[(2)]);
var inst_36020 = process(inst_36018);
var state_36030__$1 = state_36030;
if(cljs.core.truth_(inst_36020)){
var statearr_36036_38123 = state_36030__$1;
(statearr_36036_38123[(1)] = (5));

} else {
var statearr_36037_38124 = state_36030__$1;
(statearr_36037_38124[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36031 === (5))){
var state_36030__$1 = state_36030;
var statearr_36038_38125 = state_36030__$1;
(statearr_36038_38125[(2)] = null);

(statearr_36038_38125[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36031 === (6))){
var state_36030__$1 = state_36030;
var statearr_36041_38127 = state_36030__$1;
(statearr_36041_38127[(2)] = null);

(statearr_36041_38127[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36031 === (7))){
var inst_36026 = (state_36030[(2)]);
var state_36030__$1 = state_36030;
var statearr_36050_38128 = state_36030__$1;
(statearr_36050_38128[(2)] = inst_36026);

(statearr_36050_38128[(1)] = (3));


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
});})(__38104,c__35736__auto___38116,G__36013_38105,G__36013_38106__$1,n__4695__auto___38103,jobs,results,process,async))
;
return ((function (__38104,switch__35582__auto__,c__35736__auto___38116,G__36013_38105,G__36013_38106__$1,n__4695__auto___38103,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__35583__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35583__auto____0 = (function (){
var statearr_36052 = [null,null,null,null,null,null,null];
(statearr_36052[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35583__auto__);

(statearr_36052[(1)] = (1));

return statearr_36052;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35583__auto____1 = (function (state_36030){
while(true){
var ret_value__35584__auto__ = (function (){try{while(true){
var result__35585__auto__ = switch__35582__auto__(state_36030);
if(cljs.core.keyword_identical_QMARK_(result__35585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35585__auto__;
}
break;
}
}catch (e36053){var ex__35586__auto__ = e36053;
var statearr_36054_38129 = state_36030;
(statearr_36054_38129[(2)] = ex__35586__auto__);


if(cljs.core.seq((state_36030[(4)]))){
var statearr_36055_38130 = state_36030;
(statearr_36055_38130[(1)] = cljs.core.first((state_36030[(4)])));

} else {
throw ex__35586__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38131 = state_36030;
state_36030 = G__38131;
continue;
} else {
return ret_value__35584__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35583__auto__ = function(state_36030){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35583__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35583__auto____1.call(this,state_36030);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__35583__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35583__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35583__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35583__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35583__auto__;
})()
;})(__38104,switch__35582__auto__,c__35736__auto___38116,G__36013_38105,G__36013_38106__$1,n__4695__auto___38103,jobs,results,process,async))
})();
var state__35738__auto__ = (function (){var statearr_36056 = f__35737__auto__();
(statearr_36056[(6)] = c__35736__auto___38116);

return statearr_36056;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35738__auto__);
});})(__38104,c__35736__auto___38116,G__36013_38105,G__36013_38106__$1,n__4695__auto___38103,jobs,results,process,async))
);


break;
case "async":
var c__35736__auto___38132 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__38104,c__35736__auto___38132,G__36013_38105,G__36013_38106__$1,n__4695__auto___38103,jobs,results,process,async){
return (function (){
var f__35737__auto__ = (function (){var switch__35582__auto__ = ((function (__38104,c__35736__auto___38132,G__36013_38105,G__36013_38106__$1,n__4695__auto___38103,jobs,results,process,async){
return (function (state_36069){
var state_val_36070 = (state_36069[(1)]);
if((state_val_36070 === (1))){
var state_36069__$1 = state_36069;
var statearr_36071_38133 = state_36069__$1;
(statearr_36071_38133[(2)] = null);

(statearr_36071_38133[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36070 === (2))){
var state_36069__$1 = state_36069;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36069__$1,(4),jobs);
} else {
if((state_val_36070 === (3))){
var inst_36067 = (state_36069[(2)]);
var state_36069__$1 = state_36069;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36069__$1,inst_36067);
} else {
if((state_val_36070 === (4))){
var inst_36059 = (state_36069[(2)]);
var inst_36060 = async(inst_36059);
var state_36069__$1 = state_36069;
if(cljs.core.truth_(inst_36060)){
var statearr_36072_38138 = state_36069__$1;
(statearr_36072_38138[(1)] = (5));

} else {
var statearr_36073_38139 = state_36069__$1;
(statearr_36073_38139[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36070 === (5))){
var state_36069__$1 = state_36069;
var statearr_36078_38140 = state_36069__$1;
(statearr_36078_38140[(2)] = null);

(statearr_36078_38140[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36070 === (6))){
var state_36069__$1 = state_36069;
var statearr_36079_38141 = state_36069__$1;
(statearr_36079_38141[(2)] = null);

(statearr_36079_38141[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36070 === (7))){
var inst_36065 = (state_36069[(2)]);
var state_36069__$1 = state_36069;
var statearr_36081_38142 = state_36069__$1;
(statearr_36081_38142[(2)] = inst_36065);

(statearr_36081_38142[(1)] = (3));


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
});})(__38104,c__35736__auto___38132,G__36013_38105,G__36013_38106__$1,n__4695__auto___38103,jobs,results,process,async))
;
return ((function (__38104,switch__35582__auto__,c__35736__auto___38132,G__36013_38105,G__36013_38106__$1,n__4695__auto___38103,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__35583__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35583__auto____0 = (function (){
var statearr_36082 = [null,null,null,null,null,null,null];
(statearr_36082[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35583__auto__);

(statearr_36082[(1)] = (1));

return statearr_36082;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35583__auto____1 = (function (state_36069){
while(true){
var ret_value__35584__auto__ = (function (){try{while(true){
var result__35585__auto__ = switch__35582__auto__(state_36069);
if(cljs.core.keyword_identical_QMARK_(result__35585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35585__auto__;
}
break;
}
}catch (e36083){var ex__35586__auto__ = e36083;
var statearr_36084_38143 = state_36069;
(statearr_36084_38143[(2)] = ex__35586__auto__);


if(cljs.core.seq((state_36069[(4)]))){
var statearr_36085_38144 = state_36069;
(statearr_36085_38144[(1)] = cljs.core.first((state_36069[(4)])));

} else {
throw ex__35586__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38145 = state_36069;
state_36069 = G__38145;
continue;
} else {
return ret_value__35584__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35583__auto__ = function(state_36069){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35583__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35583__auto____1.call(this,state_36069);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__35583__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35583__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35583__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35583__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35583__auto__;
})()
;})(__38104,switch__35582__auto__,c__35736__auto___38132,G__36013_38105,G__36013_38106__$1,n__4695__auto___38103,jobs,results,process,async))
})();
var state__35738__auto__ = (function (){var statearr_36088 = f__35737__auto__();
(statearr_36088[(6)] = c__35736__auto___38132);

return statearr_36088;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35738__auto__);
});})(__38104,c__35736__auto___38132,G__36013_38105,G__36013_38106__$1,n__4695__auto___38103,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36013_38106__$1)].join('')));

}

var G__38146 = (__38104 + (1));
__38104 = G__38146;
continue;
} else {
}
break;
}

var c__35736__auto___38147 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35737__auto__ = (function (){var switch__35582__auto__ = (function (state_36112){
var state_val_36113 = (state_36112[(1)]);
if((state_val_36113 === (7))){
var inst_36108 = (state_36112[(2)]);
var state_36112__$1 = state_36112;
var statearr_36118_38148 = state_36112__$1;
(statearr_36118_38148[(2)] = inst_36108);

(statearr_36118_38148[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36113 === (1))){
var state_36112__$1 = state_36112;
var statearr_36119_38149 = state_36112__$1;
(statearr_36119_38149[(2)] = null);

(statearr_36119_38149[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36113 === (4))){
var inst_36093 = (state_36112[(7)]);
var inst_36093__$1 = (state_36112[(2)]);
var inst_36094 = (inst_36093__$1 == null);
var state_36112__$1 = (function (){var statearr_36122 = state_36112;
(statearr_36122[(7)] = inst_36093__$1);

return statearr_36122;
})();
if(cljs.core.truth_(inst_36094)){
var statearr_36123_38151 = state_36112__$1;
(statearr_36123_38151[(1)] = (5));

} else {
var statearr_36125_38153 = state_36112__$1;
(statearr_36125_38153[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36113 === (6))){
var inst_36098 = (state_36112[(8)]);
var inst_36093 = (state_36112[(7)]);
var inst_36098__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_36099 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36100 = [inst_36093,inst_36098__$1];
var inst_36101 = (new cljs.core.PersistentVector(null,2,(5),inst_36099,inst_36100,null));
var state_36112__$1 = (function (){var statearr_36130 = state_36112;
(statearr_36130[(8)] = inst_36098__$1);

return statearr_36130;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36112__$1,(8),jobs,inst_36101);
} else {
if((state_val_36113 === (3))){
var inst_36110 = (state_36112[(2)]);
var state_36112__$1 = state_36112;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36112__$1,inst_36110);
} else {
if((state_val_36113 === (2))){
var state_36112__$1 = state_36112;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36112__$1,(4),from);
} else {
if((state_val_36113 === (9))){
var inst_36105 = (state_36112[(2)]);
var state_36112__$1 = (function (){var statearr_36131 = state_36112;
(statearr_36131[(9)] = inst_36105);

return statearr_36131;
})();
var statearr_36132_38154 = state_36112__$1;
(statearr_36132_38154[(2)] = null);

(statearr_36132_38154[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36113 === (5))){
var inst_36096 = cljs.core.async.close_BANG_(jobs);
var state_36112__$1 = state_36112;
var statearr_36133_38155 = state_36112__$1;
(statearr_36133_38155[(2)] = inst_36096);

(statearr_36133_38155[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36113 === (8))){
var inst_36098 = (state_36112[(8)]);
var inst_36103 = (state_36112[(2)]);
var state_36112__$1 = (function (){var statearr_36134 = state_36112;
(statearr_36134[(10)] = inst_36103);

return statearr_36134;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36112__$1,(9),results,inst_36098);
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
var cljs$core$async$pipeline_STAR__$_state_machine__35583__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35583__auto____0 = (function (){
var statearr_36135 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36135[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35583__auto__);

(statearr_36135[(1)] = (1));

return statearr_36135;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35583__auto____1 = (function (state_36112){
while(true){
var ret_value__35584__auto__ = (function (){try{while(true){
var result__35585__auto__ = switch__35582__auto__(state_36112);
if(cljs.core.keyword_identical_QMARK_(result__35585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35585__auto__;
}
break;
}
}catch (e36136){var ex__35586__auto__ = e36136;
var statearr_36137_38158 = state_36112;
(statearr_36137_38158[(2)] = ex__35586__auto__);


if(cljs.core.seq((state_36112[(4)]))){
var statearr_36138_38159 = state_36112;
(statearr_36138_38159[(1)] = cljs.core.first((state_36112[(4)])));

} else {
throw ex__35586__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38160 = state_36112;
state_36112 = G__38160;
continue;
} else {
return ret_value__35584__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35583__auto__ = function(state_36112){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35583__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35583__auto____1.call(this,state_36112);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__35583__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35583__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35583__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35583__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35583__auto__;
})()
})();
var state__35738__auto__ = (function (){var statearr_36139 = f__35737__auto__();
(statearr_36139[(6)] = c__35736__auto___38147);

return statearr_36139;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35738__auto__);
}));


var c__35736__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35737__auto__ = (function (){var switch__35582__auto__ = (function (state_36179){
var state_val_36180 = (state_36179[(1)]);
if((state_val_36180 === (7))){
var inst_36175 = (state_36179[(2)]);
var state_36179__$1 = state_36179;
var statearr_36210_38165 = state_36179__$1;
(statearr_36210_38165[(2)] = inst_36175);

(statearr_36210_38165[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36180 === (20))){
var state_36179__$1 = state_36179;
var statearr_36212_38170 = state_36179__$1;
(statearr_36212_38170[(2)] = null);

(statearr_36212_38170[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36180 === (1))){
var state_36179__$1 = state_36179;
var statearr_36222_38172 = state_36179__$1;
(statearr_36222_38172[(2)] = null);

(statearr_36222_38172[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36180 === (4))){
var inst_36142 = (state_36179[(7)]);
var inst_36142__$1 = (state_36179[(2)]);
var inst_36143 = (inst_36142__$1 == null);
var state_36179__$1 = (function (){var statearr_36225 = state_36179;
(statearr_36225[(7)] = inst_36142__$1);

return statearr_36225;
})();
if(cljs.core.truth_(inst_36143)){
var statearr_36237_38173 = state_36179__$1;
(statearr_36237_38173[(1)] = (5));

} else {
var statearr_36248_38174 = state_36179__$1;
(statearr_36248_38174[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36180 === (15))){
var inst_36155 = (state_36179[(8)]);
var state_36179__$1 = state_36179;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36179__$1,(18),to,inst_36155);
} else {
if((state_val_36180 === (21))){
var inst_36170 = (state_36179[(2)]);
var state_36179__$1 = state_36179;
var statearr_36259_38179 = state_36179__$1;
(statearr_36259_38179[(2)] = inst_36170);

(statearr_36259_38179[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36180 === (13))){
var inst_36172 = (state_36179[(2)]);
var state_36179__$1 = (function (){var statearr_36273 = state_36179;
(statearr_36273[(9)] = inst_36172);

return statearr_36273;
})();
var statearr_36278_38184 = state_36179__$1;
(statearr_36278_38184[(2)] = null);

(statearr_36278_38184[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36180 === (6))){
var inst_36142 = (state_36179[(7)]);
var state_36179__$1 = state_36179;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36179__$1,(11),inst_36142);
} else {
if((state_val_36180 === (17))){
var inst_36165 = (state_36179[(2)]);
var state_36179__$1 = state_36179;
if(cljs.core.truth_(inst_36165)){
var statearr_36300_38185 = state_36179__$1;
(statearr_36300_38185[(1)] = (19));

} else {
var statearr_36309_38186 = state_36179__$1;
(statearr_36309_38186[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36180 === (3))){
var inst_36177 = (state_36179[(2)]);
var state_36179__$1 = state_36179;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36179__$1,inst_36177);
} else {
if((state_val_36180 === (12))){
var inst_36152 = (state_36179[(10)]);
var state_36179__$1 = state_36179;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36179__$1,(14),inst_36152);
} else {
if((state_val_36180 === (2))){
var state_36179__$1 = state_36179;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36179__$1,(4),results);
} else {
if((state_val_36180 === (19))){
var state_36179__$1 = state_36179;
var statearr_36323_38190 = state_36179__$1;
(statearr_36323_38190[(2)] = null);

(statearr_36323_38190[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36180 === (11))){
var inst_36152 = (state_36179[(2)]);
var state_36179__$1 = (function (){var statearr_36324 = state_36179;
(statearr_36324[(10)] = inst_36152);

return statearr_36324;
})();
var statearr_36325_38193 = state_36179__$1;
(statearr_36325_38193[(2)] = null);

(statearr_36325_38193[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36180 === (9))){
var state_36179__$1 = state_36179;
var statearr_36334_38194 = state_36179__$1;
(statearr_36334_38194[(2)] = null);

(statearr_36334_38194[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36180 === (5))){
var state_36179__$1 = state_36179;
if(cljs.core.truth_(close_QMARK_)){
var statearr_36339_38199 = state_36179__$1;
(statearr_36339_38199[(1)] = (8));

} else {
var statearr_36341_38200 = state_36179__$1;
(statearr_36341_38200[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36180 === (14))){
var inst_36158 = (state_36179[(11)]);
var inst_36155 = (state_36179[(8)]);
var inst_36155__$1 = (state_36179[(2)]);
var inst_36156 = (inst_36155__$1 == null);
var inst_36158__$1 = cljs.core.not(inst_36156);
var state_36179__$1 = (function (){var statearr_36342 = state_36179;
(statearr_36342[(11)] = inst_36158__$1);

(statearr_36342[(8)] = inst_36155__$1);

return statearr_36342;
})();
if(inst_36158__$1){
var statearr_36343_38204 = state_36179__$1;
(statearr_36343_38204[(1)] = (15));

} else {
var statearr_36344_38205 = state_36179__$1;
(statearr_36344_38205[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36180 === (16))){
var inst_36158 = (state_36179[(11)]);
var state_36179__$1 = state_36179;
var statearr_36353_38206 = state_36179__$1;
(statearr_36353_38206[(2)] = inst_36158);

(statearr_36353_38206[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36180 === (10))){
var inst_36149 = (state_36179[(2)]);
var state_36179__$1 = state_36179;
var statearr_36358_38207 = state_36179__$1;
(statearr_36358_38207[(2)] = inst_36149);

(statearr_36358_38207[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36180 === (18))){
var inst_36161 = (state_36179[(2)]);
var state_36179__$1 = state_36179;
var statearr_36363_38208 = state_36179__$1;
(statearr_36363_38208[(2)] = inst_36161);

(statearr_36363_38208[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36180 === (8))){
var inst_36146 = cljs.core.async.close_BANG_(to);
var state_36179__$1 = state_36179;
var statearr_36368_38212 = state_36179__$1;
(statearr_36368_38212[(2)] = inst_36146);

(statearr_36368_38212[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__35583__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35583__auto____0 = (function (){
var statearr_36369 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36369[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35583__auto__);

(statearr_36369[(1)] = (1));

return statearr_36369;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35583__auto____1 = (function (state_36179){
while(true){
var ret_value__35584__auto__ = (function (){try{while(true){
var result__35585__auto__ = switch__35582__auto__(state_36179);
if(cljs.core.keyword_identical_QMARK_(result__35585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35585__auto__;
}
break;
}
}catch (e36370){var ex__35586__auto__ = e36370;
var statearr_36371_38216 = state_36179;
(statearr_36371_38216[(2)] = ex__35586__auto__);


if(cljs.core.seq((state_36179[(4)]))){
var statearr_36372_38217 = state_36179;
(statearr_36372_38217[(1)] = cljs.core.first((state_36179[(4)])));

} else {
throw ex__35586__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38218 = state_36179;
state_36179 = G__38218;
continue;
} else {
return ret_value__35584__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35583__auto__ = function(state_36179){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35583__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35583__auto____1.call(this,state_36179);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__35583__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35583__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35583__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35583__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35583__auto__;
})()
})();
var state__35738__auto__ = (function (){var statearr_36373 = f__35737__auto__();
(statearr_36373[(6)] = c__35736__auto__);

return statearr_36373;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35738__auto__);
}));

return c__35736__auto__;
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
var G__36375 = arguments.length;
switch (G__36375) {
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
var G__36377 = arguments.length;
switch (G__36377) {
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
var G__36379 = arguments.length;
switch (G__36379) {
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
var c__35736__auto___38229 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35737__auto__ = (function (){var switch__35582__auto__ = (function (state_36405){
var state_val_36406 = (state_36405[(1)]);
if((state_val_36406 === (7))){
var inst_36401 = (state_36405[(2)]);
var state_36405__$1 = state_36405;
var statearr_36407_38230 = state_36405__$1;
(statearr_36407_38230[(2)] = inst_36401);

(statearr_36407_38230[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36406 === (1))){
var state_36405__$1 = state_36405;
var statearr_36408_38231 = state_36405__$1;
(statearr_36408_38231[(2)] = null);

(statearr_36408_38231[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36406 === (4))){
var inst_36382 = (state_36405[(7)]);
var inst_36382__$1 = (state_36405[(2)]);
var inst_36383 = (inst_36382__$1 == null);
var state_36405__$1 = (function (){var statearr_36409 = state_36405;
(statearr_36409[(7)] = inst_36382__$1);

return statearr_36409;
})();
if(cljs.core.truth_(inst_36383)){
var statearr_36410_38232 = state_36405__$1;
(statearr_36410_38232[(1)] = (5));

} else {
var statearr_36411_38233 = state_36405__$1;
(statearr_36411_38233[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36406 === (13))){
var state_36405__$1 = state_36405;
var statearr_36412_38234 = state_36405__$1;
(statearr_36412_38234[(2)] = null);

(statearr_36412_38234[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36406 === (6))){
var inst_36382 = (state_36405[(7)]);
var inst_36388 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_36382) : p.call(null,inst_36382));
var state_36405__$1 = state_36405;
if(cljs.core.truth_(inst_36388)){
var statearr_36413_38238 = state_36405__$1;
(statearr_36413_38238[(1)] = (9));

} else {
var statearr_36414_38239 = state_36405__$1;
(statearr_36414_38239[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36406 === (3))){
var inst_36403 = (state_36405[(2)]);
var state_36405__$1 = state_36405;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36405__$1,inst_36403);
} else {
if((state_val_36406 === (12))){
var state_36405__$1 = state_36405;
var statearr_36415_38244 = state_36405__$1;
(statearr_36415_38244[(2)] = null);

(statearr_36415_38244[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36406 === (2))){
var state_36405__$1 = state_36405;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36405__$1,(4),ch);
} else {
if((state_val_36406 === (11))){
var inst_36382 = (state_36405[(7)]);
var inst_36392 = (state_36405[(2)]);
var state_36405__$1 = state_36405;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36405__$1,(8),inst_36392,inst_36382);
} else {
if((state_val_36406 === (9))){
var state_36405__$1 = state_36405;
var statearr_36416_38251 = state_36405__$1;
(statearr_36416_38251[(2)] = tc);

(statearr_36416_38251[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36406 === (5))){
var inst_36385 = cljs.core.async.close_BANG_(tc);
var inst_36386 = cljs.core.async.close_BANG_(fc);
var state_36405__$1 = (function (){var statearr_36417 = state_36405;
(statearr_36417[(8)] = inst_36385);

return statearr_36417;
})();
var statearr_36418_38252 = state_36405__$1;
(statearr_36418_38252[(2)] = inst_36386);

(statearr_36418_38252[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36406 === (14))){
var inst_36399 = (state_36405[(2)]);
var state_36405__$1 = state_36405;
var statearr_36419_38253 = state_36405__$1;
(statearr_36419_38253[(2)] = inst_36399);

(statearr_36419_38253[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36406 === (10))){
var state_36405__$1 = state_36405;
var statearr_36420_38261 = state_36405__$1;
(statearr_36420_38261[(2)] = fc);

(statearr_36420_38261[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36406 === (8))){
var inst_36394 = (state_36405[(2)]);
var state_36405__$1 = state_36405;
if(cljs.core.truth_(inst_36394)){
var statearr_36421_38265 = state_36405__$1;
(statearr_36421_38265[(1)] = (12));

} else {
var statearr_36422_38266 = state_36405__$1;
(statearr_36422_38266[(1)] = (13));

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
var cljs$core$async$state_machine__35583__auto__ = null;
var cljs$core$async$state_machine__35583__auto____0 = (function (){
var statearr_36423 = [null,null,null,null,null,null,null,null,null];
(statearr_36423[(0)] = cljs$core$async$state_machine__35583__auto__);

(statearr_36423[(1)] = (1));

return statearr_36423;
});
var cljs$core$async$state_machine__35583__auto____1 = (function (state_36405){
while(true){
var ret_value__35584__auto__ = (function (){try{while(true){
var result__35585__auto__ = switch__35582__auto__(state_36405);
if(cljs.core.keyword_identical_QMARK_(result__35585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35585__auto__;
}
break;
}
}catch (e36424){var ex__35586__auto__ = e36424;
var statearr_36425_38267 = state_36405;
(statearr_36425_38267[(2)] = ex__35586__auto__);


if(cljs.core.seq((state_36405[(4)]))){
var statearr_36426_38273 = state_36405;
(statearr_36426_38273[(1)] = cljs.core.first((state_36405[(4)])));

} else {
throw ex__35586__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38278 = state_36405;
state_36405 = G__38278;
continue;
} else {
return ret_value__35584__auto__;
}
break;
}
});
cljs$core$async$state_machine__35583__auto__ = function(state_36405){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35583__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35583__auto____1.call(this,state_36405);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35583__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35583__auto____0;
cljs$core$async$state_machine__35583__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35583__auto____1;
return cljs$core$async$state_machine__35583__auto__;
})()
})();
var state__35738__auto__ = (function (){var statearr_36427 = f__35737__auto__();
(statearr_36427[(6)] = c__35736__auto___38229);

return statearr_36427;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35738__auto__);
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
var c__35736__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35737__auto__ = (function (){var switch__35582__auto__ = (function (state_36449){
var state_val_36450 = (state_36449[(1)]);
if((state_val_36450 === (7))){
var inst_36445 = (state_36449[(2)]);
var state_36449__$1 = state_36449;
var statearr_36451_38293 = state_36449__$1;
(statearr_36451_38293[(2)] = inst_36445);

(statearr_36451_38293[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36450 === (1))){
var inst_36428 = init;
var inst_36429 = inst_36428;
var state_36449__$1 = (function (){var statearr_36452 = state_36449;
(statearr_36452[(7)] = inst_36429);

return statearr_36452;
})();
var statearr_36453_38294 = state_36449__$1;
(statearr_36453_38294[(2)] = null);

(statearr_36453_38294[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36450 === (4))){
var inst_36432 = (state_36449[(8)]);
var inst_36432__$1 = (state_36449[(2)]);
var inst_36433 = (inst_36432__$1 == null);
var state_36449__$1 = (function (){var statearr_36454 = state_36449;
(statearr_36454[(8)] = inst_36432__$1);

return statearr_36454;
})();
if(cljs.core.truth_(inst_36433)){
var statearr_36455_38296 = state_36449__$1;
(statearr_36455_38296[(1)] = (5));

} else {
var statearr_36456_38298 = state_36449__$1;
(statearr_36456_38298[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36450 === (6))){
var inst_36432 = (state_36449[(8)]);
var inst_36436 = (state_36449[(9)]);
var inst_36429 = (state_36449[(7)]);
var inst_36436__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_36429,inst_36432) : f.call(null,inst_36429,inst_36432));
var inst_36437 = cljs.core.reduced_QMARK_(inst_36436__$1);
var state_36449__$1 = (function (){var statearr_36457 = state_36449;
(statearr_36457[(9)] = inst_36436__$1);

return statearr_36457;
})();
if(inst_36437){
var statearr_36458_38301 = state_36449__$1;
(statearr_36458_38301[(1)] = (8));

} else {
var statearr_36459_38302 = state_36449__$1;
(statearr_36459_38302[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36450 === (3))){
var inst_36447 = (state_36449[(2)]);
var state_36449__$1 = state_36449;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36449__$1,inst_36447);
} else {
if((state_val_36450 === (2))){
var state_36449__$1 = state_36449;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36449__$1,(4),ch);
} else {
if((state_val_36450 === (9))){
var inst_36436 = (state_36449[(9)]);
var inst_36429 = inst_36436;
var state_36449__$1 = (function (){var statearr_36460 = state_36449;
(statearr_36460[(7)] = inst_36429);

return statearr_36460;
})();
var statearr_36461_38303 = state_36449__$1;
(statearr_36461_38303[(2)] = null);

(statearr_36461_38303[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36450 === (5))){
var inst_36429 = (state_36449[(7)]);
var state_36449__$1 = state_36449;
var statearr_36462_38304 = state_36449__$1;
(statearr_36462_38304[(2)] = inst_36429);

(statearr_36462_38304[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36450 === (10))){
var inst_36443 = (state_36449[(2)]);
var state_36449__$1 = state_36449;
var statearr_36463_38305 = state_36449__$1;
(statearr_36463_38305[(2)] = inst_36443);

(statearr_36463_38305[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36450 === (8))){
var inst_36436 = (state_36449[(9)]);
var inst_36439 = cljs.core.deref(inst_36436);
var state_36449__$1 = state_36449;
var statearr_36464_38306 = state_36449__$1;
(statearr_36464_38306[(2)] = inst_36439);

(statearr_36464_38306[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__35583__auto__ = null;
var cljs$core$async$reduce_$_state_machine__35583__auto____0 = (function (){
var statearr_36465 = [null,null,null,null,null,null,null,null,null,null];
(statearr_36465[(0)] = cljs$core$async$reduce_$_state_machine__35583__auto__);

(statearr_36465[(1)] = (1));

return statearr_36465;
});
var cljs$core$async$reduce_$_state_machine__35583__auto____1 = (function (state_36449){
while(true){
var ret_value__35584__auto__ = (function (){try{while(true){
var result__35585__auto__ = switch__35582__auto__(state_36449);
if(cljs.core.keyword_identical_QMARK_(result__35585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35585__auto__;
}
break;
}
}catch (e36466){var ex__35586__auto__ = e36466;
var statearr_36467_38308 = state_36449;
(statearr_36467_38308[(2)] = ex__35586__auto__);


if(cljs.core.seq((state_36449[(4)]))){
var statearr_36468_38312 = state_36449;
(statearr_36468_38312[(1)] = cljs.core.first((state_36449[(4)])));

} else {
throw ex__35586__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38313 = state_36449;
state_36449 = G__38313;
continue;
} else {
return ret_value__35584__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__35583__auto__ = function(state_36449){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__35583__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__35583__auto____1.call(this,state_36449);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__35583__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__35583__auto____0;
cljs$core$async$reduce_$_state_machine__35583__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__35583__auto____1;
return cljs$core$async$reduce_$_state_machine__35583__auto__;
})()
})();
var state__35738__auto__ = (function (){var statearr_36469 = f__35737__auto__();
(statearr_36469[(6)] = c__35736__auto__);

return statearr_36469;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35738__auto__);
}));

return c__35736__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__35736__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35737__auto__ = (function (){var switch__35582__auto__ = (function (state_36475){
var state_val_36476 = (state_36475[(1)]);
if((state_val_36476 === (1))){
var inst_36470 = cljs.core.async.reduce(f__$1,init,ch);
var state_36475__$1 = state_36475;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36475__$1,(2),inst_36470);
} else {
if((state_val_36476 === (2))){
var inst_36472 = (state_36475[(2)]);
var inst_36473 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_36472) : f__$1.call(null,inst_36472));
var state_36475__$1 = state_36475;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36475__$1,inst_36473);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__35583__auto__ = null;
var cljs$core$async$transduce_$_state_machine__35583__auto____0 = (function (){
var statearr_36477 = [null,null,null,null,null,null,null];
(statearr_36477[(0)] = cljs$core$async$transduce_$_state_machine__35583__auto__);

(statearr_36477[(1)] = (1));

return statearr_36477;
});
var cljs$core$async$transduce_$_state_machine__35583__auto____1 = (function (state_36475){
while(true){
var ret_value__35584__auto__ = (function (){try{while(true){
var result__35585__auto__ = switch__35582__auto__(state_36475);
if(cljs.core.keyword_identical_QMARK_(result__35585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35585__auto__;
}
break;
}
}catch (e36478){var ex__35586__auto__ = e36478;
var statearr_36479_38318 = state_36475;
(statearr_36479_38318[(2)] = ex__35586__auto__);


if(cljs.core.seq((state_36475[(4)]))){
var statearr_36480_38322 = state_36475;
(statearr_36480_38322[(1)] = cljs.core.first((state_36475[(4)])));

} else {
throw ex__35586__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38327 = state_36475;
state_36475 = G__38327;
continue;
} else {
return ret_value__35584__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__35583__auto__ = function(state_36475){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__35583__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__35583__auto____1.call(this,state_36475);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__35583__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__35583__auto____0;
cljs$core$async$transduce_$_state_machine__35583__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__35583__auto____1;
return cljs$core$async$transduce_$_state_machine__35583__auto__;
})()
})();
var state__35738__auto__ = (function (){var statearr_36482 = f__35737__auto__();
(statearr_36482[(6)] = c__35736__auto__);

return statearr_36482;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35738__auto__);
}));

return c__35736__auto__;
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
var G__36484 = arguments.length;
switch (G__36484) {
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
var c__35736__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35737__auto__ = (function (){var switch__35582__auto__ = (function (state_36509){
var state_val_36510 = (state_36509[(1)]);
if((state_val_36510 === (7))){
var inst_36491 = (state_36509[(2)]);
var state_36509__$1 = state_36509;
var statearr_36511_38335 = state_36509__$1;
(statearr_36511_38335[(2)] = inst_36491);

(statearr_36511_38335[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36510 === (1))){
var inst_36485 = cljs.core.seq(coll);
var inst_36486 = inst_36485;
var state_36509__$1 = (function (){var statearr_36512 = state_36509;
(statearr_36512[(7)] = inst_36486);

return statearr_36512;
})();
var statearr_36513_38336 = state_36509__$1;
(statearr_36513_38336[(2)] = null);

(statearr_36513_38336[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36510 === (4))){
var inst_36486 = (state_36509[(7)]);
var inst_36489 = cljs.core.first(inst_36486);
var state_36509__$1 = state_36509;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36509__$1,(7),ch,inst_36489);
} else {
if((state_val_36510 === (13))){
var inst_36503 = (state_36509[(2)]);
var state_36509__$1 = state_36509;
var statearr_36515_38337 = state_36509__$1;
(statearr_36515_38337[(2)] = inst_36503);

(statearr_36515_38337[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36510 === (6))){
var inst_36494 = (state_36509[(2)]);
var state_36509__$1 = state_36509;
if(cljs.core.truth_(inst_36494)){
var statearr_36516_38338 = state_36509__$1;
(statearr_36516_38338[(1)] = (8));

} else {
var statearr_36517_38339 = state_36509__$1;
(statearr_36517_38339[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36510 === (3))){
var inst_36507 = (state_36509[(2)]);
var state_36509__$1 = state_36509;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36509__$1,inst_36507);
} else {
if((state_val_36510 === (12))){
var state_36509__$1 = state_36509;
var statearr_36518_38340 = state_36509__$1;
(statearr_36518_38340[(2)] = null);

(statearr_36518_38340[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36510 === (2))){
var inst_36486 = (state_36509[(7)]);
var state_36509__$1 = state_36509;
if(cljs.core.truth_(inst_36486)){
var statearr_36519_38341 = state_36509__$1;
(statearr_36519_38341[(1)] = (4));

} else {
var statearr_36520_38342 = state_36509__$1;
(statearr_36520_38342[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36510 === (11))){
var inst_36500 = cljs.core.async.close_BANG_(ch);
var state_36509__$1 = state_36509;
var statearr_36521_38343 = state_36509__$1;
(statearr_36521_38343[(2)] = inst_36500);

(statearr_36521_38343[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36510 === (9))){
var state_36509__$1 = state_36509;
if(cljs.core.truth_(close_QMARK_)){
var statearr_36522_38344 = state_36509__$1;
(statearr_36522_38344[(1)] = (11));

} else {
var statearr_36523_38345 = state_36509__$1;
(statearr_36523_38345[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36510 === (5))){
var inst_36486 = (state_36509[(7)]);
var state_36509__$1 = state_36509;
var statearr_36524_38346 = state_36509__$1;
(statearr_36524_38346[(2)] = inst_36486);

(statearr_36524_38346[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36510 === (10))){
var inst_36505 = (state_36509[(2)]);
var state_36509__$1 = state_36509;
var statearr_36525_38354 = state_36509__$1;
(statearr_36525_38354[(2)] = inst_36505);

(statearr_36525_38354[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36510 === (8))){
var inst_36486 = (state_36509[(7)]);
var inst_36496 = cljs.core.next(inst_36486);
var inst_36486__$1 = inst_36496;
var state_36509__$1 = (function (){var statearr_36526 = state_36509;
(statearr_36526[(7)] = inst_36486__$1);

return statearr_36526;
})();
var statearr_36527_38356 = state_36509__$1;
(statearr_36527_38356[(2)] = null);

(statearr_36527_38356[(1)] = (2));


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
var cljs$core$async$state_machine__35583__auto__ = null;
var cljs$core$async$state_machine__35583__auto____0 = (function (){
var statearr_36529 = [null,null,null,null,null,null,null,null];
(statearr_36529[(0)] = cljs$core$async$state_machine__35583__auto__);

(statearr_36529[(1)] = (1));

return statearr_36529;
});
var cljs$core$async$state_machine__35583__auto____1 = (function (state_36509){
while(true){
var ret_value__35584__auto__ = (function (){try{while(true){
var result__35585__auto__ = switch__35582__auto__(state_36509);
if(cljs.core.keyword_identical_QMARK_(result__35585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35585__auto__;
}
break;
}
}catch (e36530){var ex__35586__auto__ = e36530;
var statearr_36532_38357 = state_36509;
(statearr_36532_38357[(2)] = ex__35586__auto__);


if(cljs.core.seq((state_36509[(4)]))){
var statearr_36533_38358 = state_36509;
(statearr_36533_38358[(1)] = cljs.core.first((state_36509[(4)])));

} else {
throw ex__35586__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38359 = state_36509;
state_36509 = G__38359;
continue;
} else {
return ret_value__35584__auto__;
}
break;
}
});
cljs$core$async$state_machine__35583__auto__ = function(state_36509){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35583__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35583__auto____1.call(this,state_36509);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35583__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35583__auto____0;
cljs$core$async$state_machine__35583__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35583__auto____1;
return cljs$core$async$state_machine__35583__auto__;
})()
})();
var state__35738__auto__ = (function (){var statearr_36535 = f__35737__auto__();
(statearr_36535[(6)] = c__35736__auto__);

return statearr_36535;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35738__auto__);
}));

return c__35736__auto__;
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
var G__36538 = arguments.length;
switch (G__36538) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_38361 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_38361(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_38373 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_38373(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_38380 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_38380(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_38382 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_38382(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36543 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36543 = (function (ch,cs,meta36544){
this.ch = ch;
this.cs = cs;
this.meta36544 = meta36544;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36543.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36545,meta36544__$1){
var self__ = this;
var _36545__$1 = this;
return (new cljs.core.async.t_cljs$core$async36543(self__.ch,self__.cs,meta36544__$1));
}));

(cljs.core.async.t_cljs$core$async36543.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36545){
var self__ = this;
var _36545__$1 = this;
return self__.meta36544;
}));

(cljs.core.async.t_cljs$core$async36543.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36543.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async36543.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36543.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async36543.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async36543.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async36543.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta36544","meta36544",-544094278,null)], null);
}));

(cljs.core.async.t_cljs$core$async36543.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36543.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36543");

(cljs.core.async.t_cljs$core$async36543.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async36543");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36543.
 */
cljs.core.async.__GT_t_cljs$core$async36543 = (function cljs$core$async$mult_$___GT_t_cljs$core$async36543(ch__$1,cs__$1,meta36544){
return (new cljs.core.async.t_cljs$core$async36543(ch__$1,cs__$1,meta36544));
});

}

return (new cljs.core.async.t_cljs$core$async36543(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__35736__auto___38384 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35737__auto__ = (function (){var switch__35582__auto__ = (function (state_36684){
var state_val_36685 = (state_36684[(1)]);
if((state_val_36685 === (7))){
var inst_36679 = (state_36684[(2)]);
var state_36684__$1 = state_36684;
var statearr_36688_38385 = state_36684__$1;
(statearr_36688_38385[(2)] = inst_36679);

(statearr_36688_38385[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36685 === (20))){
var inst_36582 = (state_36684[(7)]);
var inst_36594 = cljs.core.first(inst_36582);
var inst_36595 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36594,(0),null);
var inst_36596 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36594,(1),null);
var state_36684__$1 = (function (){var statearr_36689 = state_36684;
(statearr_36689[(8)] = inst_36595);

return statearr_36689;
})();
if(cljs.core.truth_(inst_36596)){
var statearr_36690_38392 = state_36684__$1;
(statearr_36690_38392[(1)] = (22));

} else {
var statearr_36691_38393 = state_36684__$1;
(statearr_36691_38393[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36685 === (27))){
var inst_36550 = (state_36684[(9)]);
var inst_36632 = (state_36684[(10)]);
var inst_36625 = (state_36684[(11)]);
var inst_36627 = (state_36684[(12)]);
var inst_36632__$1 = cljs.core._nth(inst_36625,inst_36627);
var inst_36633 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_36632__$1,inst_36550,done);
var state_36684__$1 = (function (){var statearr_36692 = state_36684;
(statearr_36692[(10)] = inst_36632__$1);

return statearr_36692;
})();
if(cljs.core.truth_(inst_36633)){
var statearr_36693_38394 = state_36684__$1;
(statearr_36693_38394[(1)] = (30));

} else {
var statearr_36694_38395 = state_36684__$1;
(statearr_36694_38395[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36685 === (1))){
var state_36684__$1 = state_36684;
var statearr_36695_38396 = state_36684__$1;
(statearr_36695_38396[(2)] = null);

(statearr_36695_38396[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36685 === (24))){
var inst_36582 = (state_36684[(7)]);
var inst_36602 = (state_36684[(2)]);
var inst_36603 = cljs.core.next(inst_36582);
var inst_36560 = inst_36603;
var inst_36561 = null;
var inst_36562 = (0);
var inst_36563 = (0);
var state_36684__$1 = (function (){var statearr_36696 = state_36684;
(statearr_36696[(13)] = inst_36562);

(statearr_36696[(14)] = inst_36561);

(statearr_36696[(15)] = inst_36560);

(statearr_36696[(16)] = inst_36602);

(statearr_36696[(17)] = inst_36563);

return statearr_36696;
})();
var statearr_36698_38397 = state_36684__$1;
(statearr_36698_38397[(2)] = null);

(statearr_36698_38397[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36685 === (39))){
var state_36684__$1 = state_36684;
var statearr_36702_38398 = state_36684__$1;
(statearr_36702_38398[(2)] = null);

(statearr_36702_38398[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36685 === (4))){
var inst_36550 = (state_36684[(9)]);
var inst_36550__$1 = (state_36684[(2)]);
var inst_36551 = (inst_36550__$1 == null);
var state_36684__$1 = (function (){var statearr_36703 = state_36684;
(statearr_36703[(9)] = inst_36550__$1);

return statearr_36703;
})();
if(cljs.core.truth_(inst_36551)){
var statearr_36704_38399 = state_36684__$1;
(statearr_36704_38399[(1)] = (5));

} else {
var statearr_36705_38400 = state_36684__$1;
(statearr_36705_38400[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36685 === (15))){
var inst_36562 = (state_36684[(13)]);
var inst_36561 = (state_36684[(14)]);
var inst_36560 = (state_36684[(15)]);
var inst_36563 = (state_36684[(17)]);
var inst_36578 = (state_36684[(2)]);
var inst_36579 = (inst_36563 + (1));
var tmp36699 = inst_36562;
var tmp36700 = inst_36561;
var tmp36701 = inst_36560;
var inst_36560__$1 = tmp36701;
var inst_36561__$1 = tmp36700;
var inst_36562__$1 = tmp36699;
var inst_36563__$1 = inst_36579;
var state_36684__$1 = (function (){var statearr_36707 = state_36684;
(statearr_36707[(13)] = inst_36562__$1);

(statearr_36707[(14)] = inst_36561__$1);

(statearr_36707[(15)] = inst_36560__$1);

(statearr_36707[(18)] = inst_36578);

(statearr_36707[(17)] = inst_36563__$1);

return statearr_36707;
})();
var statearr_36708_38404 = state_36684__$1;
(statearr_36708_38404[(2)] = null);

(statearr_36708_38404[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36685 === (21))){
var inst_36606 = (state_36684[(2)]);
var state_36684__$1 = state_36684;
var statearr_36712_38405 = state_36684__$1;
(statearr_36712_38405[(2)] = inst_36606);

(statearr_36712_38405[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36685 === (31))){
var inst_36632 = (state_36684[(10)]);
var inst_36636 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_36632);
var state_36684__$1 = state_36684;
var statearr_36713_38406 = state_36684__$1;
(statearr_36713_38406[(2)] = inst_36636);

(statearr_36713_38406[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36685 === (32))){
var inst_36624 = (state_36684[(19)]);
var inst_36625 = (state_36684[(11)]);
var inst_36626 = (state_36684[(20)]);
var inst_36627 = (state_36684[(12)]);
var inst_36638 = (state_36684[(2)]);
var inst_36639 = (inst_36627 + (1));
var tmp36709 = inst_36624;
var tmp36710 = inst_36625;
var tmp36711 = inst_36626;
var inst_36624__$1 = tmp36709;
var inst_36625__$1 = tmp36710;
var inst_36626__$1 = tmp36711;
var inst_36627__$1 = inst_36639;
var state_36684__$1 = (function (){var statearr_36714 = state_36684;
(statearr_36714[(19)] = inst_36624__$1);

(statearr_36714[(11)] = inst_36625__$1);

(statearr_36714[(20)] = inst_36626__$1);

(statearr_36714[(21)] = inst_36638);

(statearr_36714[(12)] = inst_36627__$1);

return statearr_36714;
})();
var statearr_36715_38416 = state_36684__$1;
(statearr_36715_38416[(2)] = null);

(statearr_36715_38416[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36685 === (40))){
var inst_36651 = (state_36684[(22)]);
var inst_36656 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_36651);
var state_36684__$1 = state_36684;
var statearr_36717_38417 = state_36684__$1;
(statearr_36717_38417[(2)] = inst_36656);

(statearr_36717_38417[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36685 === (33))){
var inst_36642 = (state_36684[(23)]);
var inst_36644 = cljs.core.chunked_seq_QMARK_(inst_36642);
var state_36684__$1 = state_36684;
if(inst_36644){
var statearr_36718_38419 = state_36684__$1;
(statearr_36718_38419[(1)] = (36));

} else {
var statearr_36719_38420 = state_36684__$1;
(statearr_36719_38420[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36685 === (13))){
var inst_36572 = (state_36684[(24)]);
var inst_36575 = cljs.core.async.close_BANG_(inst_36572);
var state_36684__$1 = state_36684;
var statearr_36720_38421 = state_36684__$1;
(statearr_36720_38421[(2)] = inst_36575);

(statearr_36720_38421[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36685 === (22))){
var inst_36595 = (state_36684[(8)]);
var inst_36599 = cljs.core.async.close_BANG_(inst_36595);
var state_36684__$1 = state_36684;
var statearr_36721_38422 = state_36684__$1;
(statearr_36721_38422[(2)] = inst_36599);

(statearr_36721_38422[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36685 === (36))){
var inst_36642 = (state_36684[(23)]);
var inst_36646 = cljs.core.chunk_first(inst_36642);
var inst_36647 = cljs.core.chunk_rest(inst_36642);
var inst_36648 = cljs.core.count(inst_36646);
var inst_36624 = inst_36647;
var inst_36625 = inst_36646;
var inst_36626 = inst_36648;
var inst_36627 = (0);
var state_36684__$1 = (function (){var statearr_36722 = state_36684;
(statearr_36722[(19)] = inst_36624);

(statearr_36722[(11)] = inst_36625);

(statearr_36722[(20)] = inst_36626);

(statearr_36722[(12)] = inst_36627);

return statearr_36722;
})();
var statearr_36723_38424 = state_36684__$1;
(statearr_36723_38424[(2)] = null);

(statearr_36723_38424[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36685 === (41))){
var inst_36642 = (state_36684[(23)]);
var inst_36658 = (state_36684[(2)]);
var inst_36659 = cljs.core.next(inst_36642);
var inst_36624 = inst_36659;
var inst_36625 = null;
var inst_36626 = (0);
var inst_36627 = (0);
var state_36684__$1 = (function (){var statearr_36725 = state_36684;
(statearr_36725[(19)] = inst_36624);

(statearr_36725[(11)] = inst_36625);

(statearr_36725[(25)] = inst_36658);

(statearr_36725[(20)] = inst_36626);

(statearr_36725[(12)] = inst_36627);

return statearr_36725;
})();
var statearr_36726_38429 = state_36684__$1;
(statearr_36726_38429[(2)] = null);

(statearr_36726_38429[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36685 === (43))){
var state_36684__$1 = state_36684;
var statearr_36727_38430 = state_36684__$1;
(statearr_36727_38430[(2)] = null);

(statearr_36727_38430[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36685 === (29))){
var inst_36667 = (state_36684[(2)]);
var state_36684__$1 = state_36684;
var statearr_36728_38431 = state_36684__$1;
(statearr_36728_38431[(2)] = inst_36667);

(statearr_36728_38431[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36685 === (44))){
var inst_36676 = (state_36684[(2)]);
var state_36684__$1 = (function (){var statearr_36729 = state_36684;
(statearr_36729[(26)] = inst_36676);

return statearr_36729;
})();
var statearr_36730_38432 = state_36684__$1;
(statearr_36730_38432[(2)] = null);

(statearr_36730_38432[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36685 === (6))){
var inst_36616 = (state_36684[(27)]);
var inst_36615 = cljs.core.deref(cs);
var inst_36616__$1 = cljs.core.keys(inst_36615);
var inst_36617 = cljs.core.count(inst_36616__$1);
var inst_36618 = cljs.core.reset_BANG_(dctr,inst_36617);
var inst_36623 = cljs.core.seq(inst_36616__$1);
var inst_36624 = inst_36623;
var inst_36625 = null;
var inst_36626 = (0);
var inst_36627 = (0);
var state_36684__$1 = (function (){var statearr_36731 = state_36684;
(statearr_36731[(19)] = inst_36624);

(statearr_36731[(27)] = inst_36616__$1);

(statearr_36731[(11)] = inst_36625);

(statearr_36731[(20)] = inst_36626);

(statearr_36731[(12)] = inst_36627);

(statearr_36731[(28)] = inst_36618);

return statearr_36731;
})();
var statearr_36733_38433 = state_36684__$1;
(statearr_36733_38433[(2)] = null);

(statearr_36733_38433[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36685 === (28))){
var inst_36624 = (state_36684[(19)]);
var inst_36642 = (state_36684[(23)]);
var inst_36642__$1 = cljs.core.seq(inst_36624);
var state_36684__$1 = (function (){var statearr_36734 = state_36684;
(statearr_36734[(23)] = inst_36642__$1);

return statearr_36734;
})();
if(inst_36642__$1){
var statearr_36735_38434 = state_36684__$1;
(statearr_36735_38434[(1)] = (33));

} else {
var statearr_36736_38435 = state_36684__$1;
(statearr_36736_38435[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36685 === (25))){
var inst_36626 = (state_36684[(20)]);
var inst_36627 = (state_36684[(12)]);
var inst_36629 = (inst_36627 < inst_36626);
var inst_36630 = inst_36629;
var state_36684__$1 = state_36684;
if(cljs.core.truth_(inst_36630)){
var statearr_36737_38436 = state_36684__$1;
(statearr_36737_38436[(1)] = (27));

} else {
var statearr_36738_38437 = state_36684__$1;
(statearr_36738_38437[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36685 === (34))){
var state_36684__$1 = state_36684;
var statearr_36739_38440 = state_36684__$1;
(statearr_36739_38440[(2)] = null);

(statearr_36739_38440[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36685 === (17))){
var state_36684__$1 = state_36684;
var statearr_36740_38442 = state_36684__$1;
(statearr_36740_38442[(2)] = null);

(statearr_36740_38442[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36685 === (3))){
var inst_36681 = (state_36684[(2)]);
var state_36684__$1 = state_36684;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36684__$1,inst_36681);
} else {
if((state_val_36685 === (12))){
var inst_36611 = (state_36684[(2)]);
var state_36684__$1 = state_36684;
var statearr_36742_38444 = state_36684__$1;
(statearr_36742_38444[(2)] = inst_36611);

(statearr_36742_38444[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36685 === (2))){
var state_36684__$1 = state_36684;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36684__$1,(4),ch);
} else {
if((state_val_36685 === (23))){
var state_36684__$1 = state_36684;
var statearr_36743_38445 = state_36684__$1;
(statearr_36743_38445[(2)] = null);

(statearr_36743_38445[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36685 === (35))){
var inst_36665 = (state_36684[(2)]);
var state_36684__$1 = state_36684;
var statearr_36744_38446 = state_36684__$1;
(statearr_36744_38446[(2)] = inst_36665);

(statearr_36744_38446[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36685 === (19))){
var inst_36582 = (state_36684[(7)]);
var inst_36586 = cljs.core.chunk_first(inst_36582);
var inst_36587 = cljs.core.chunk_rest(inst_36582);
var inst_36588 = cljs.core.count(inst_36586);
var inst_36560 = inst_36587;
var inst_36561 = inst_36586;
var inst_36562 = inst_36588;
var inst_36563 = (0);
var state_36684__$1 = (function (){var statearr_36745 = state_36684;
(statearr_36745[(13)] = inst_36562);

(statearr_36745[(14)] = inst_36561);

(statearr_36745[(15)] = inst_36560);

(statearr_36745[(17)] = inst_36563);

return statearr_36745;
})();
var statearr_36746_38449 = state_36684__$1;
(statearr_36746_38449[(2)] = null);

(statearr_36746_38449[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36685 === (11))){
var inst_36560 = (state_36684[(15)]);
var inst_36582 = (state_36684[(7)]);
var inst_36582__$1 = cljs.core.seq(inst_36560);
var state_36684__$1 = (function (){var statearr_36748 = state_36684;
(statearr_36748[(7)] = inst_36582__$1);

return statearr_36748;
})();
if(inst_36582__$1){
var statearr_36749_38452 = state_36684__$1;
(statearr_36749_38452[(1)] = (16));

} else {
var statearr_36750_38453 = state_36684__$1;
(statearr_36750_38453[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36685 === (9))){
var inst_36613 = (state_36684[(2)]);
var state_36684__$1 = state_36684;
var statearr_36751_38454 = state_36684__$1;
(statearr_36751_38454[(2)] = inst_36613);

(statearr_36751_38454[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36685 === (5))){
var inst_36558 = cljs.core.deref(cs);
var inst_36559 = cljs.core.seq(inst_36558);
var inst_36560 = inst_36559;
var inst_36561 = null;
var inst_36562 = (0);
var inst_36563 = (0);
var state_36684__$1 = (function (){var statearr_36752 = state_36684;
(statearr_36752[(13)] = inst_36562);

(statearr_36752[(14)] = inst_36561);

(statearr_36752[(15)] = inst_36560);

(statearr_36752[(17)] = inst_36563);

return statearr_36752;
})();
var statearr_36753_38455 = state_36684__$1;
(statearr_36753_38455[(2)] = null);

(statearr_36753_38455[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36685 === (14))){
var state_36684__$1 = state_36684;
var statearr_36754_38456 = state_36684__$1;
(statearr_36754_38456[(2)] = null);

(statearr_36754_38456[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36685 === (45))){
var inst_36673 = (state_36684[(2)]);
var state_36684__$1 = state_36684;
var statearr_36755_38457 = state_36684__$1;
(statearr_36755_38457[(2)] = inst_36673);

(statearr_36755_38457[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36685 === (26))){
var inst_36616 = (state_36684[(27)]);
var inst_36669 = (state_36684[(2)]);
var inst_36670 = cljs.core.seq(inst_36616);
var state_36684__$1 = (function (){var statearr_36757 = state_36684;
(statearr_36757[(29)] = inst_36669);

return statearr_36757;
})();
if(inst_36670){
var statearr_36758_38458 = state_36684__$1;
(statearr_36758_38458[(1)] = (42));

} else {
var statearr_36759_38459 = state_36684__$1;
(statearr_36759_38459[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36685 === (16))){
var inst_36582 = (state_36684[(7)]);
var inst_36584 = cljs.core.chunked_seq_QMARK_(inst_36582);
var state_36684__$1 = state_36684;
if(inst_36584){
var statearr_36760_38460 = state_36684__$1;
(statearr_36760_38460[(1)] = (19));

} else {
var statearr_36761_38461 = state_36684__$1;
(statearr_36761_38461[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36685 === (38))){
var inst_36662 = (state_36684[(2)]);
var state_36684__$1 = state_36684;
var statearr_36762_38462 = state_36684__$1;
(statearr_36762_38462[(2)] = inst_36662);

(statearr_36762_38462[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36685 === (30))){
var state_36684__$1 = state_36684;
var statearr_36763_38470 = state_36684__$1;
(statearr_36763_38470[(2)] = null);

(statearr_36763_38470[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36685 === (10))){
var inst_36561 = (state_36684[(14)]);
var inst_36563 = (state_36684[(17)]);
var inst_36571 = cljs.core._nth(inst_36561,inst_36563);
var inst_36572 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36571,(0),null);
var inst_36573 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36571,(1),null);
var state_36684__$1 = (function (){var statearr_36764 = state_36684;
(statearr_36764[(24)] = inst_36572);

return statearr_36764;
})();
if(cljs.core.truth_(inst_36573)){
var statearr_36765_38471 = state_36684__$1;
(statearr_36765_38471[(1)] = (13));

} else {
var statearr_36766_38472 = state_36684__$1;
(statearr_36766_38472[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36685 === (18))){
var inst_36609 = (state_36684[(2)]);
var state_36684__$1 = state_36684;
var statearr_36767_38474 = state_36684__$1;
(statearr_36767_38474[(2)] = inst_36609);

(statearr_36767_38474[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36685 === (42))){
var state_36684__$1 = state_36684;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36684__$1,(45),dchan);
} else {
if((state_val_36685 === (37))){
var inst_36550 = (state_36684[(9)]);
var inst_36642 = (state_36684[(23)]);
var inst_36651 = (state_36684[(22)]);
var inst_36651__$1 = cljs.core.first(inst_36642);
var inst_36652 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_36651__$1,inst_36550,done);
var state_36684__$1 = (function (){var statearr_36769 = state_36684;
(statearr_36769[(22)] = inst_36651__$1);

return statearr_36769;
})();
if(cljs.core.truth_(inst_36652)){
var statearr_36770_38475 = state_36684__$1;
(statearr_36770_38475[(1)] = (39));

} else {
var statearr_36771_38477 = state_36684__$1;
(statearr_36771_38477[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36685 === (8))){
var inst_36562 = (state_36684[(13)]);
var inst_36563 = (state_36684[(17)]);
var inst_36565 = (inst_36563 < inst_36562);
var inst_36566 = inst_36565;
var state_36684__$1 = state_36684;
if(cljs.core.truth_(inst_36566)){
var statearr_36772_38488 = state_36684__$1;
(statearr_36772_38488[(1)] = (10));

} else {
var statearr_36773_38489 = state_36684__$1;
(statearr_36773_38489[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__35583__auto__ = null;
var cljs$core$async$mult_$_state_machine__35583__auto____0 = (function (){
var statearr_36774 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36774[(0)] = cljs$core$async$mult_$_state_machine__35583__auto__);

(statearr_36774[(1)] = (1));

return statearr_36774;
});
var cljs$core$async$mult_$_state_machine__35583__auto____1 = (function (state_36684){
while(true){
var ret_value__35584__auto__ = (function (){try{while(true){
var result__35585__auto__ = switch__35582__auto__(state_36684);
if(cljs.core.keyword_identical_QMARK_(result__35585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35585__auto__;
}
break;
}
}catch (e36776){var ex__35586__auto__ = e36776;
var statearr_36777_38493 = state_36684;
(statearr_36777_38493[(2)] = ex__35586__auto__);


if(cljs.core.seq((state_36684[(4)]))){
var statearr_36778_38495 = state_36684;
(statearr_36778_38495[(1)] = cljs.core.first((state_36684[(4)])));

} else {
throw ex__35586__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38496 = state_36684;
state_36684 = G__38496;
continue;
} else {
return ret_value__35584__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__35583__auto__ = function(state_36684){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__35583__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__35583__auto____1.call(this,state_36684);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__35583__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__35583__auto____0;
cljs$core$async$mult_$_state_machine__35583__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__35583__auto____1;
return cljs$core$async$mult_$_state_machine__35583__auto__;
})()
})();
var state__35738__auto__ = (function (){var statearr_36779 = f__35737__auto__();
(statearr_36779[(6)] = c__35736__auto___38384);

return statearr_36779;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35738__auto__);
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
var G__36781 = arguments.length;
switch (G__36781) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_38506 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_38506(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_38507 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_38507(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_38511 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_38511(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_38517 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_38517(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_38522 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_38522(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___38527 = arguments.length;
var i__4819__auto___38528 = (0);
while(true){
if((i__4819__auto___38528 < len__4818__auto___38527)){
args__4824__auto__.push((arguments[i__4819__auto___38528]));

var G__38530 = (i__4819__auto___38528 + (1));
i__4819__auto___38528 = G__38530;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((3) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4825__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__36793){
var map__36794 = p__36793;
var map__36794__$1 = cljs.core.__destructure_map(map__36794);
var opts = map__36794__$1;
var statearr_36795_38531 = state;
(statearr_36795_38531[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_36796_38532 = state;
(statearr_36796_38532[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_36797_38533 = state;
(statearr_36797_38533[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq36788){
var G__36789 = cljs.core.first(seq36788);
var seq36788__$1 = cljs.core.next(seq36788);
var G__36790 = cljs.core.first(seq36788__$1);
var seq36788__$2 = cljs.core.next(seq36788__$1);
var G__36791 = cljs.core.first(seq36788__$2);
var seq36788__$3 = cljs.core.next(seq36788__$2);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36789,G__36790,G__36791,seq36788__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36800 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36800 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta36801){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta36801 = meta36801;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36800.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36802,meta36801__$1){
var self__ = this;
var _36802__$1 = this;
return (new cljs.core.async.t_cljs$core$async36800(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta36801__$1));
}));

(cljs.core.async.t_cljs$core$async36800.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36802){
var self__ = this;
var _36802__$1 = this;
return self__.meta36801;
}));

(cljs.core.async.t_cljs$core$async36800.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36800.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async36800.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36800.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async36800.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async36800.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async36800.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async36800.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async36800.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta36801","meta36801",1910107903,null)], null);
}));

(cljs.core.async.t_cljs$core$async36800.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36800.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36800");

(cljs.core.async.t_cljs$core$async36800.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async36800");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36800.
 */
cljs.core.async.__GT_t_cljs$core$async36800 = (function cljs$core$async$mix_$___GT_t_cljs$core$async36800(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta36801){
return (new cljs.core.async.t_cljs$core$async36800(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta36801));
});

}

return (new cljs.core.async.t_cljs$core$async36800(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__35736__auto___38567 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35737__auto__ = (function (){var switch__35582__auto__ = (function (state_36875){
var state_val_36876 = (state_36875[(1)]);
if((state_val_36876 === (7))){
var inst_36834 = (state_36875[(2)]);
var state_36875__$1 = state_36875;
if(cljs.core.truth_(inst_36834)){
var statearr_36877_38568 = state_36875__$1;
(statearr_36877_38568[(1)] = (8));

} else {
var statearr_36878_38570 = state_36875__$1;
(statearr_36878_38570[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36876 === (20))){
var inst_36827 = (state_36875[(7)]);
var state_36875__$1 = state_36875;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36875__$1,(23),out,inst_36827);
} else {
if((state_val_36876 === (1))){
var inst_36809 = calc_state();
var inst_36810 = cljs.core.__destructure_map(inst_36809);
var inst_36811 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_36810,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_36812 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_36810,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_36813 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_36810,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_36814 = inst_36809;
var state_36875__$1 = (function (){var statearr_36880 = state_36875;
(statearr_36880[(8)] = inst_36814);

(statearr_36880[(9)] = inst_36811);

(statearr_36880[(10)] = inst_36813);

(statearr_36880[(11)] = inst_36812);

return statearr_36880;
})();
var statearr_36881_38574 = state_36875__$1;
(statearr_36881_38574[(2)] = null);

(statearr_36881_38574[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36876 === (24))){
var inst_36818 = (state_36875[(12)]);
var inst_36814 = inst_36818;
var state_36875__$1 = (function (){var statearr_36882 = state_36875;
(statearr_36882[(8)] = inst_36814);

return statearr_36882;
})();
var statearr_36883_38575 = state_36875__$1;
(statearr_36883_38575[(2)] = null);

(statearr_36883_38575[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36876 === (4))){
var inst_36829 = (state_36875[(13)]);
var inst_36827 = (state_36875[(7)]);
var inst_36826 = (state_36875[(2)]);
var inst_36827__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36826,(0),null);
var inst_36828 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36826,(1),null);
var inst_36829__$1 = (inst_36827__$1 == null);
var state_36875__$1 = (function (){var statearr_36884 = state_36875;
(statearr_36884[(13)] = inst_36829__$1);

(statearr_36884[(7)] = inst_36827__$1);

(statearr_36884[(14)] = inst_36828);

return statearr_36884;
})();
if(cljs.core.truth_(inst_36829__$1)){
var statearr_36885_38576 = state_36875__$1;
(statearr_36885_38576[(1)] = (5));

} else {
var statearr_36887_38577 = state_36875__$1;
(statearr_36887_38577[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36876 === (15))){
var inst_36848 = (state_36875[(15)]);
var inst_36819 = (state_36875[(16)]);
var inst_36848__$1 = cljs.core.empty_QMARK_(inst_36819);
var state_36875__$1 = (function (){var statearr_36888 = state_36875;
(statearr_36888[(15)] = inst_36848__$1);

return statearr_36888;
})();
if(inst_36848__$1){
var statearr_36889_38578 = state_36875__$1;
(statearr_36889_38578[(1)] = (17));

} else {
var statearr_36890_38579 = state_36875__$1;
(statearr_36890_38579[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36876 === (21))){
var inst_36818 = (state_36875[(12)]);
var inst_36814 = inst_36818;
var state_36875__$1 = (function (){var statearr_36891 = state_36875;
(statearr_36891[(8)] = inst_36814);

return statearr_36891;
})();
var statearr_36892_38580 = state_36875__$1;
(statearr_36892_38580[(2)] = null);

(statearr_36892_38580[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36876 === (13))){
var inst_36841 = (state_36875[(2)]);
var inst_36842 = calc_state();
var inst_36814 = inst_36842;
var state_36875__$1 = (function (){var statearr_36893 = state_36875;
(statearr_36893[(8)] = inst_36814);

(statearr_36893[(17)] = inst_36841);

return statearr_36893;
})();
var statearr_36894_38581 = state_36875__$1;
(statearr_36894_38581[(2)] = null);

(statearr_36894_38581[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36876 === (22))){
var inst_36868 = (state_36875[(2)]);
var state_36875__$1 = state_36875;
var statearr_36895_38582 = state_36875__$1;
(statearr_36895_38582[(2)] = inst_36868);

(statearr_36895_38582[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36876 === (6))){
var inst_36828 = (state_36875[(14)]);
var inst_36832 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36828,change);
var state_36875__$1 = state_36875;
var statearr_36897_38583 = state_36875__$1;
(statearr_36897_38583[(2)] = inst_36832);

(statearr_36897_38583[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36876 === (25))){
var state_36875__$1 = state_36875;
var statearr_36898_38584 = state_36875__$1;
(statearr_36898_38584[(2)] = null);

(statearr_36898_38584[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36876 === (17))){
var inst_36820 = (state_36875[(18)]);
var inst_36828 = (state_36875[(14)]);
var inst_36850 = (inst_36820.cljs$core$IFn$_invoke$arity$1 ? inst_36820.cljs$core$IFn$_invoke$arity$1(inst_36828) : inst_36820.call(null,inst_36828));
var inst_36851 = cljs.core.not(inst_36850);
var state_36875__$1 = state_36875;
var statearr_36899_38585 = state_36875__$1;
(statearr_36899_38585[(2)] = inst_36851);

(statearr_36899_38585[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36876 === (3))){
var inst_36872 = (state_36875[(2)]);
var state_36875__$1 = state_36875;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36875__$1,inst_36872);
} else {
if((state_val_36876 === (12))){
var state_36875__$1 = state_36875;
var statearr_36900_38590 = state_36875__$1;
(statearr_36900_38590[(2)] = null);

(statearr_36900_38590[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36876 === (2))){
var inst_36814 = (state_36875[(8)]);
var inst_36818 = (state_36875[(12)]);
var inst_36818__$1 = cljs.core.__destructure_map(inst_36814);
var inst_36819 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_36818__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_36820 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_36818__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_36821 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_36818__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_36875__$1 = (function (){var statearr_36901 = state_36875;
(statearr_36901[(12)] = inst_36818__$1);

(statearr_36901[(16)] = inst_36819);

(statearr_36901[(18)] = inst_36820);

return statearr_36901;
})();
return cljs.core.async.ioc_alts_BANG_(state_36875__$1,(4),inst_36821);
} else {
if((state_val_36876 === (23))){
var inst_36859 = (state_36875[(2)]);
var state_36875__$1 = state_36875;
if(cljs.core.truth_(inst_36859)){
var statearr_36903_38591 = state_36875__$1;
(statearr_36903_38591[(1)] = (24));

} else {
var statearr_36904_38592 = state_36875__$1;
(statearr_36904_38592[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36876 === (19))){
var inst_36854 = (state_36875[(2)]);
var state_36875__$1 = state_36875;
var statearr_36905_38594 = state_36875__$1;
(statearr_36905_38594[(2)] = inst_36854);

(statearr_36905_38594[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36876 === (11))){
var inst_36828 = (state_36875[(14)]);
var inst_36838 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_36828);
var state_36875__$1 = state_36875;
var statearr_36906_38595 = state_36875__$1;
(statearr_36906_38595[(2)] = inst_36838);

(statearr_36906_38595[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36876 === (9))){
var inst_36845 = (state_36875[(19)]);
var inst_36819 = (state_36875[(16)]);
var inst_36828 = (state_36875[(14)]);
var inst_36845__$1 = (inst_36819.cljs$core$IFn$_invoke$arity$1 ? inst_36819.cljs$core$IFn$_invoke$arity$1(inst_36828) : inst_36819.call(null,inst_36828));
var state_36875__$1 = (function (){var statearr_36907 = state_36875;
(statearr_36907[(19)] = inst_36845__$1);

return statearr_36907;
})();
if(cljs.core.truth_(inst_36845__$1)){
var statearr_36908_38596 = state_36875__$1;
(statearr_36908_38596[(1)] = (14));

} else {
var statearr_36909_38603 = state_36875__$1;
(statearr_36909_38603[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36876 === (5))){
var inst_36829 = (state_36875[(13)]);
var state_36875__$1 = state_36875;
var statearr_36910_38604 = state_36875__$1;
(statearr_36910_38604[(2)] = inst_36829);

(statearr_36910_38604[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36876 === (14))){
var inst_36845 = (state_36875[(19)]);
var state_36875__$1 = state_36875;
var statearr_36911_38612 = state_36875__$1;
(statearr_36911_38612[(2)] = inst_36845);

(statearr_36911_38612[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36876 === (26))){
var inst_36864 = (state_36875[(2)]);
var state_36875__$1 = state_36875;
var statearr_36913_38613 = state_36875__$1;
(statearr_36913_38613[(2)] = inst_36864);

(statearr_36913_38613[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36876 === (16))){
var inst_36856 = (state_36875[(2)]);
var state_36875__$1 = state_36875;
if(cljs.core.truth_(inst_36856)){
var statearr_36914_38614 = state_36875__$1;
(statearr_36914_38614[(1)] = (20));

} else {
var statearr_36915_38615 = state_36875__$1;
(statearr_36915_38615[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36876 === (10))){
var inst_36870 = (state_36875[(2)]);
var state_36875__$1 = state_36875;
var statearr_36916_38616 = state_36875__$1;
(statearr_36916_38616[(2)] = inst_36870);

(statearr_36916_38616[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36876 === (18))){
var inst_36848 = (state_36875[(15)]);
var state_36875__$1 = state_36875;
var statearr_36917_38621 = state_36875__$1;
(statearr_36917_38621[(2)] = inst_36848);

(statearr_36917_38621[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36876 === (8))){
var inst_36827 = (state_36875[(7)]);
var inst_36836 = (inst_36827 == null);
var state_36875__$1 = state_36875;
if(cljs.core.truth_(inst_36836)){
var statearr_36919_38622 = state_36875__$1;
(statearr_36919_38622[(1)] = (11));

} else {
var statearr_36920_38623 = state_36875__$1;
(statearr_36920_38623[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__35583__auto__ = null;
var cljs$core$async$mix_$_state_machine__35583__auto____0 = (function (){
var statearr_36922 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36922[(0)] = cljs$core$async$mix_$_state_machine__35583__auto__);

(statearr_36922[(1)] = (1));

return statearr_36922;
});
var cljs$core$async$mix_$_state_machine__35583__auto____1 = (function (state_36875){
while(true){
var ret_value__35584__auto__ = (function (){try{while(true){
var result__35585__auto__ = switch__35582__auto__(state_36875);
if(cljs.core.keyword_identical_QMARK_(result__35585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35585__auto__;
}
break;
}
}catch (e36923){var ex__35586__auto__ = e36923;
var statearr_36924_38624 = state_36875;
(statearr_36924_38624[(2)] = ex__35586__auto__);


if(cljs.core.seq((state_36875[(4)]))){
var statearr_36925_38631 = state_36875;
(statearr_36925_38631[(1)] = cljs.core.first((state_36875[(4)])));

} else {
throw ex__35586__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38636 = state_36875;
state_36875 = G__38636;
continue;
} else {
return ret_value__35584__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__35583__auto__ = function(state_36875){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__35583__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__35583__auto____1.call(this,state_36875);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__35583__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__35583__auto____0;
cljs$core$async$mix_$_state_machine__35583__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__35583__auto____1;
return cljs$core$async$mix_$_state_machine__35583__auto__;
})()
})();
var state__35738__auto__ = (function (){var statearr_36926 = f__35737__auto__();
(statearr_36926[(6)] = c__35736__auto___38567);

return statearr_36926;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35738__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_38638 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_38638(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_38646 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_38646(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_38651 = (function() {
var G__38652 = null;
var G__38652__1 = (function (p){
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
var G__38652__2 = (function (p,v){
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
G__38652 = function(p,v){
switch(arguments.length){
case 1:
return G__38652__1.call(this,p);
case 2:
return G__38652__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__38652.cljs$core$IFn$_invoke$arity$1 = G__38652__1;
G__38652.cljs$core$IFn$_invoke$arity$2 = G__38652__2;
return G__38652;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__36932 = arguments.length;
switch (G__36932) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_38651(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_38651(p,v);
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
var G__36935 = arguments.length;
switch (G__36935) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__36933_SHARP_){
if(cljs.core.truth_((p1__36933_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__36933_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__36933_SHARP_.call(null,topic)))){
return p1__36933_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__36933_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36942 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36942 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta36943){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta36943 = meta36943;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36942.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36944,meta36943__$1){
var self__ = this;
var _36944__$1 = this;
return (new cljs.core.async.t_cljs$core$async36942(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta36943__$1));
}));

(cljs.core.async.t_cljs$core$async36942.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36944){
var self__ = this;
var _36944__$1 = this;
return self__.meta36943;
}));

(cljs.core.async.t_cljs$core$async36942.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36942.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async36942.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36942.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async36942.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async36942.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async36942.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async36942.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta36943","meta36943",-414607523,null)], null);
}));

(cljs.core.async.t_cljs$core$async36942.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36942.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36942");

(cljs.core.async.t_cljs$core$async36942.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async36942");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36942.
 */
cljs.core.async.__GT_t_cljs$core$async36942 = (function cljs$core$async$__GT_t_cljs$core$async36942(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta36943){
return (new cljs.core.async.t_cljs$core$async36942(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta36943));
});

}

return (new cljs.core.async.t_cljs$core$async36942(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__35736__auto___38669 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35737__auto__ = (function (){var switch__35582__auto__ = (function (state_37043){
var state_val_37044 = (state_37043[(1)]);
if((state_val_37044 === (7))){
var inst_37036 = (state_37043[(2)]);
var state_37043__$1 = state_37043;
var statearr_37049_38673 = state_37043__$1;
(statearr_37049_38673[(2)] = inst_37036);

(statearr_37049_38673[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37044 === (20))){
var state_37043__$1 = state_37043;
var statearr_37051_38674 = state_37043__$1;
(statearr_37051_38674[(2)] = null);

(statearr_37051_38674[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37044 === (1))){
var state_37043__$1 = state_37043;
var statearr_37055_38676 = state_37043__$1;
(statearr_37055_38676[(2)] = null);

(statearr_37055_38676[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37044 === (24))){
var inst_37018 = (state_37043[(7)]);
var inst_37028 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_37018);
var state_37043__$1 = state_37043;
var statearr_37057_38677 = state_37043__$1;
(statearr_37057_38677[(2)] = inst_37028);

(statearr_37057_38677[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37044 === (4))){
var inst_36962 = (state_37043[(8)]);
var inst_36962__$1 = (state_37043[(2)]);
var inst_36963 = (inst_36962__$1 == null);
var state_37043__$1 = (function (){var statearr_37061 = state_37043;
(statearr_37061[(8)] = inst_36962__$1);

return statearr_37061;
})();
if(cljs.core.truth_(inst_36963)){
var statearr_37062_38683 = state_37043__$1;
(statearr_37062_38683[(1)] = (5));

} else {
var statearr_37063_38684 = state_37043__$1;
(statearr_37063_38684[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37044 === (15))){
var inst_37012 = (state_37043[(2)]);
var state_37043__$1 = state_37043;
var statearr_37065_38685 = state_37043__$1;
(statearr_37065_38685[(2)] = inst_37012);

(statearr_37065_38685[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37044 === (21))){
var inst_37033 = (state_37043[(2)]);
var state_37043__$1 = (function (){var statearr_37069 = state_37043;
(statearr_37069[(9)] = inst_37033);

return statearr_37069;
})();
var statearr_37070_38686 = state_37043__$1;
(statearr_37070_38686[(2)] = null);

(statearr_37070_38686[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37044 === (13))){
var inst_36990 = (state_37043[(10)]);
var inst_36993 = cljs.core.chunked_seq_QMARK_(inst_36990);
var state_37043__$1 = state_37043;
if(inst_36993){
var statearr_37072_38687 = state_37043__$1;
(statearr_37072_38687[(1)] = (16));

} else {
var statearr_37073_38688 = state_37043__$1;
(statearr_37073_38688[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37044 === (22))){
var inst_37025 = (state_37043[(2)]);
var state_37043__$1 = state_37043;
if(cljs.core.truth_(inst_37025)){
var statearr_37076_38689 = state_37043__$1;
(statearr_37076_38689[(1)] = (23));

} else {
var statearr_37078_38690 = state_37043__$1;
(statearr_37078_38690[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37044 === (6))){
var inst_36962 = (state_37043[(8)]);
var inst_37020 = (state_37043[(11)]);
var inst_37018 = (state_37043[(7)]);
var inst_37018__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_36962) : topic_fn.call(null,inst_36962));
var inst_37019 = cljs.core.deref(mults);
var inst_37020__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37019,inst_37018__$1);
var state_37043__$1 = (function (){var statearr_37080 = state_37043;
(statearr_37080[(11)] = inst_37020__$1);

(statearr_37080[(7)] = inst_37018__$1);

return statearr_37080;
})();
if(cljs.core.truth_(inst_37020__$1)){
var statearr_37082_38691 = state_37043__$1;
(statearr_37082_38691[(1)] = (19));

} else {
var statearr_37084_38693 = state_37043__$1;
(statearr_37084_38693[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37044 === (25))){
var inst_37030 = (state_37043[(2)]);
var state_37043__$1 = state_37043;
var statearr_37086_38694 = state_37043__$1;
(statearr_37086_38694[(2)] = inst_37030);

(statearr_37086_38694[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37044 === (17))){
var inst_36990 = (state_37043[(10)]);
var inst_37003 = cljs.core.first(inst_36990);
var inst_37004 = cljs.core.async.muxch_STAR_(inst_37003);
var inst_37005 = cljs.core.async.close_BANG_(inst_37004);
var inst_37006 = cljs.core.next(inst_36990);
var inst_36973 = inst_37006;
var inst_36974 = null;
var inst_36975 = (0);
var inst_36976 = (0);
var state_37043__$1 = (function (){var statearr_37090 = state_37043;
(statearr_37090[(12)] = inst_36976);

(statearr_37090[(13)] = inst_36973);

(statearr_37090[(14)] = inst_36975);

(statearr_37090[(15)] = inst_36974);

(statearr_37090[(16)] = inst_37005);

return statearr_37090;
})();
var statearr_37092_38695 = state_37043__$1;
(statearr_37092_38695[(2)] = null);

(statearr_37092_38695[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37044 === (3))){
var inst_37038 = (state_37043[(2)]);
var state_37043__$1 = state_37043;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37043__$1,inst_37038);
} else {
if((state_val_37044 === (12))){
var inst_37014 = (state_37043[(2)]);
var state_37043__$1 = state_37043;
var statearr_37094_38696 = state_37043__$1;
(statearr_37094_38696[(2)] = inst_37014);

(statearr_37094_38696[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37044 === (2))){
var state_37043__$1 = state_37043;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37043__$1,(4),ch);
} else {
if((state_val_37044 === (23))){
var state_37043__$1 = state_37043;
var statearr_37098_38697 = state_37043__$1;
(statearr_37098_38697[(2)] = null);

(statearr_37098_38697[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37044 === (19))){
var inst_36962 = (state_37043[(8)]);
var inst_37020 = (state_37043[(11)]);
var inst_37023 = cljs.core.async.muxch_STAR_(inst_37020);
var state_37043__$1 = state_37043;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37043__$1,(22),inst_37023,inst_36962);
} else {
if((state_val_37044 === (11))){
var inst_36973 = (state_37043[(13)]);
var inst_36990 = (state_37043[(10)]);
var inst_36990__$1 = cljs.core.seq(inst_36973);
var state_37043__$1 = (function (){var statearr_37101 = state_37043;
(statearr_37101[(10)] = inst_36990__$1);

return statearr_37101;
})();
if(inst_36990__$1){
var statearr_37104_38698 = state_37043__$1;
(statearr_37104_38698[(1)] = (13));

} else {
var statearr_37105_38699 = state_37043__$1;
(statearr_37105_38699[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37044 === (9))){
var inst_37016 = (state_37043[(2)]);
var state_37043__$1 = state_37043;
var statearr_37106_38702 = state_37043__$1;
(statearr_37106_38702[(2)] = inst_37016);

(statearr_37106_38702[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37044 === (5))){
var inst_36970 = cljs.core.deref(mults);
var inst_36971 = cljs.core.vals(inst_36970);
var inst_36972 = cljs.core.seq(inst_36971);
var inst_36973 = inst_36972;
var inst_36974 = null;
var inst_36975 = (0);
var inst_36976 = (0);
var state_37043__$1 = (function (){var statearr_37108 = state_37043;
(statearr_37108[(12)] = inst_36976);

(statearr_37108[(13)] = inst_36973);

(statearr_37108[(14)] = inst_36975);

(statearr_37108[(15)] = inst_36974);

return statearr_37108;
})();
var statearr_37112_38710 = state_37043__$1;
(statearr_37112_38710[(2)] = null);

(statearr_37112_38710[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37044 === (14))){
var state_37043__$1 = state_37043;
var statearr_37116_38711 = state_37043__$1;
(statearr_37116_38711[(2)] = null);

(statearr_37116_38711[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37044 === (16))){
var inst_36990 = (state_37043[(10)]);
var inst_36995 = cljs.core.chunk_first(inst_36990);
var inst_36996 = cljs.core.chunk_rest(inst_36990);
var inst_36998 = cljs.core.count(inst_36995);
var inst_36973 = inst_36996;
var inst_36974 = inst_36995;
var inst_36975 = inst_36998;
var inst_36976 = (0);
var state_37043__$1 = (function (){var statearr_37119 = state_37043;
(statearr_37119[(12)] = inst_36976);

(statearr_37119[(13)] = inst_36973);

(statearr_37119[(14)] = inst_36975);

(statearr_37119[(15)] = inst_36974);

return statearr_37119;
})();
var statearr_37122_38712 = state_37043__$1;
(statearr_37122_38712[(2)] = null);

(statearr_37122_38712[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37044 === (10))){
var inst_36976 = (state_37043[(12)]);
var inst_36973 = (state_37043[(13)]);
var inst_36975 = (state_37043[(14)]);
var inst_36974 = (state_37043[(15)]);
var inst_36984 = cljs.core._nth(inst_36974,inst_36976);
var inst_36985 = cljs.core.async.muxch_STAR_(inst_36984);
var inst_36986 = cljs.core.async.close_BANG_(inst_36985);
var inst_36987 = (inst_36976 + (1));
var tmp37113 = inst_36973;
var tmp37114 = inst_36975;
var tmp37115 = inst_36974;
var inst_36973__$1 = tmp37113;
var inst_36974__$1 = tmp37115;
var inst_36975__$1 = tmp37114;
var inst_36976__$1 = inst_36987;
var state_37043__$1 = (function (){var statearr_37125 = state_37043;
(statearr_37125[(12)] = inst_36976__$1);

(statearr_37125[(13)] = inst_36973__$1);

(statearr_37125[(14)] = inst_36975__$1);

(statearr_37125[(15)] = inst_36974__$1);

(statearr_37125[(17)] = inst_36986);

return statearr_37125;
})();
var statearr_37129_38714 = state_37043__$1;
(statearr_37129_38714[(2)] = null);

(statearr_37129_38714[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37044 === (18))){
var inst_37009 = (state_37043[(2)]);
var state_37043__$1 = state_37043;
var statearr_37130_38722 = state_37043__$1;
(statearr_37130_38722[(2)] = inst_37009);

(statearr_37130_38722[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37044 === (8))){
var inst_36976 = (state_37043[(12)]);
var inst_36975 = (state_37043[(14)]);
var inst_36979 = (inst_36976 < inst_36975);
var inst_36981 = inst_36979;
var state_37043__$1 = state_37043;
if(cljs.core.truth_(inst_36981)){
var statearr_37132_38727 = state_37043__$1;
(statearr_37132_38727[(1)] = (10));

} else {
var statearr_37133_38731 = state_37043__$1;
(statearr_37133_38731[(1)] = (11));

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
var cljs$core$async$state_machine__35583__auto__ = null;
var cljs$core$async$state_machine__35583__auto____0 = (function (){
var statearr_37139 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37139[(0)] = cljs$core$async$state_machine__35583__auto__);

(statearr_37139[(1)] = (1));

return statearr_37139;
});
var cljs$core$async$state_machine__35583__auto____1 = (function (state_37043){
while(true){
var ret_value__35584__auto__ = (function (){try{while(true){
var result__35585__auto__ = switch__35582__auto__(state_37043);
if(cljs.core.keyword_identical_QMARK_(result__35585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35585__auto__;
}
break;
}
}catch (e37140){var ex__35586__auto__ = e37140;
var statearr_37142_38732 = state_37043;
(statearr_37142_38732[(2)] = ex__35586__auto__);


if(cljs.core.seq((state_37043[(4)]))){
var statearr_37145_38733 = state_37043;
(statearr_37145_38733[(1)] = cljs.core.first((state_37043[(4)])));

} else {
throw ex__35586__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38734 = state_37043;
state_37043 = G__38734;
continue;
} else {
return ret_value__35584__auto__;
}
break;
}
});
cljs$core$async$state_machine__35583__auto__ = function(state_37043){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35583__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35583__auto____1.call(this,state_37043);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35583__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35583__auto____0;
cljs$core$async$state_machine__35583__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35583__auto____1;
return cljs$core$async$state_machine__35583__auto__;
})()
})();
var state__35738__auto__ = (function (){var statearr_37148 = f__35737__auto__();
(statearr_37148[(6)] = c__35736__auto___38669);

return statearr_37148;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35738__auto__);
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
var G__37154 = arguments.length;
switch (G__37154) {
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
var G__37166 = arguments.length;
switch (G__37166) {
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
var G__37185 = arguments.length;
switch (G__37185) {
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
var c__35736__auto___38741 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35737__auto__ = (function (){var switch__35582__auto__ = (function (state_37255){
var state_val_37256 = (state_37255[(1)]);
if((state_val_37256 === (7))){
var state_37255__$1 = state_37255;
var statearr_37263_38742 = state_37255__$1;
(statearr_37263_38742[(2)] = null);

(statearr_37263_38742[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37256 === (1))){
var state_37255__$1 = state_37255;
var statearr_37266_38743 = state_37255__$1;
(statearr_37266_38743[(2)] = null);

(statearr_37266_38743[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37256 === (4))){
var inst_37202 = (state_37255[(7)]);
var inst_37201 = (state_37255[(8)]);
var inst_37205 = (inst_37202 < inst_37201);
var state_37255__$1 = state_37255;
if(cljs.core.truth_(inst_37205)){
var statearr_37269_38744 = state_37255__$1;
(statearr_37269_38744[(1)] = (6));

} else {
var statearr_37270_38745 = state_37255__$1;
(statearr_37270_38745[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37256 === (15))){
var inst_37240 = (state_37255[(9)]);
var inst_37245 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_37240);
var state_37255__$1 = state_37255;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37255__$1,(17),out,inst_37245);
} else {
if((state_val_37256 === (13))){
var inst_37240 = (state_37255[(9)]);
var inst_37240__$1 = (state_37255[(2)]);
var inst_37241 = cljs.core.some(cljs.core.nil_QMARK_,inst_37240__$1);
var state_37255__$1 = (function (){var statearr_37275 = state_37255;
(statearr_37275[(9)] = inst_37240__$1);

return statearr_37275;
})();
if(cljs.core.truth_(inst_37241)){
var statearr_37276_38747 = state_37255__$1;
(statearr_37276_38747[(1)] = (14));

} else {
var statearr_37277_38748 = state_37255__$1;
(statearr_37277_38748[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37256 === (6))){
var state_37255__$1 = state_37255;
var statearr_37281_38752 = state_37255__$1;
(statearr_37281_38752[(2)] = null);

(statearr_37281_38752[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37256 === (17))){
var inst_37247 = (state_37255[(2)]);
var state_37255__$1 = (function (){var statearr_37290 = state_37255;
(statearr_37290[(10)] = inst_37247);

return statearr_37290;
})();
var statearr_37292_38753 = state_37255__$1;
(statearr_37292_38753[(2)] = null);

(statearr_37292_38753[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37256 === (3))){
var inst_37252 = (state_37255[(2)]);
var state_37255__$1 = state_37255;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37255__$1,inst_37252);
} else {
if((state_val_37256 === (12))){
var _ = (function (){var statearr_37294 = state_37255;
(statearr_37294[(4)] = cljs.core.rest((state_37255[(4)])));

return statearr_37294;
})();
var state_37255__$1 = state_37255;
var ex37286 = (state_37255__$1[(2)]);
var statearr_37297_38754 = state_37255__$1;
(statearr_37297_38754[(5)] = ex37286);


if((ex37286 instanceof Object)){
var statearr_37300_38755 = state_37255__$1;
(statearr_37300_38755[(1)] = (11));

(statearr_37300_38755[(5)] = null);

} else {
throw ex37286;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37256 === (2))){
var inst_37198 = cljs.core.reset_BANG_(dctr,cnt);
var inst_37201 = cnt;
var inst_37202 = (0);
var state_37255__$1 = (function (){var statearr_37307 = state_37255;
(statearr_37307[(11)] = inst_37198);

(statearr_37307[(7)] = inst_37202);

(statearr_37307[(8)] = inst_37201);

return statearr_37307;
})();
var statearr_37308_38756 = state_37255__$1;
(statearr_37308_38756[(2)] = null);

(statearr_37308_38756[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37256 === (11))){
var inst_37215 = (state_37255[(2)]);
var inst_37216 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_37255__$1 = (function (){var statearr_37309 = state_37255;
(statearr_37309[(12)] = inst_37215);

return statearr_37309;
})();
var statearr_37310_38757 = state_37255__$1;
(statearr_37310_38757[(2)] = inst_37216);

(statearr_37310_38757[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37256 === (9))){
var inst_37202 = (state_37255[(7)]);
var _ = (function (){var statearr_37311 = state_37255;
(statearr_37311[(4)] = cljs.core.cons((12),(state_37255[(4)])));

return statearr_37311;
})();
var inst_37223 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_37202) : chs__$1.call(null,inst_37202));
var inst_37224 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_37202) : done.call(null,inst_37202));
var inst_37225 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_37223,inst_37224);
var ___$1 = (function (){var statearr_37312 = state_37255;
(statearr_37312[(4)] = cljs.core.rest((state_37255[(4)])));

return statearr_37312;
})();
var state_37255__$1 = state_37255;
var statearr_37313_38758 = state_37255__$1;
(statearr_37313_38758[(2)] = inst_37225);

(statearr_37313_38758[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37256 === (5))){
var inst_37236 = (state_37255[(2)]);
var state_37255__$1 = (function (){var statearr_37314 = state_37255;
(statearr_37314[(13)] = inst_37236);

return statearr_37314;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37255__$1,(13),dchan);
} else {
if((state_val_37256 === (14))){
var inst_37243 = cljs.core.async.close_BANG_(out);
var state_37255__$1 = state_37255;
var statearr_37315_38759 = state_37255__$1;
(statearr_37315_38759[(2)] = inst_37243);

(statearr_37315_38759[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37256 === (16))){
var inst_37250 = (state_37255[(2)]);
var state_37255__$1 = state_37255;
var statearr_37316_38760 = state_37255__$1;
(statearr_37316_38760[(2)] = inst_37250);

(statearr_37316_38760[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37256 === (10))){
var inst_37202 = (state_37255[(7)]);
var inst_37228 = (state_37255[(2)]);
var inst_37229 = (inst_37202 + (1));
var inst_37202__$1 = inst_37229;
var state_37255__$1 = (function (){var statearr_37317 = state_37255;
(statearr_37317[(14)] = inst_37228);

(statearr_37317[(7)] = inst_37202__$1);

return statearr_37317;
})();
var statearr_37318_38761 = state_37255__$1;
(statearr_37318_38761[(2)] = null);

(statearr_37318_38761[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37256 === (8))){
var inst_37234 = (state_37255[(2)]);
var state_37255__$1 = state_37255;
var statearr_37321_38762 = state_37255__$1;
(statearr_37321_38762[(2)] = inst_37234);

(statearr_37321_38762[(1)] = (5));


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
var cljs$core$async$state_machine__35583__auto__ = null;
var cljs$core$async$state_machine__35583__auto____0 = (function (){
var statearr_37322 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37322[(0)] = cljs$core$async$state_machine__35583__auto__);

(statearr_37322[(1)] = (1));

return statearr_37322;
});
var cljs$core$async$state_machine__35583__auto____1 = (function (state_37255){
while(true){
var ret_value__35584__auto__ = (function (){try{while(true){
var result__35585__auto__ = switch__35582__auto__(state_37255);
if(cljs.core.keyword_identical_QMARK_(result__35585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35585__auto__;
}
break;
}
}catch (e37323){var ex__35586__auto__ = e37323;
var statearr_37324_38763 = state_37255;
(statearr_37324_38763[(2)] = ex__35586__auto__);


if(cljs.core.seq((state_37255[(4)]))){
var statearr_37325_38764 = state_37255;
(statearr_37325_38764[(1)] = cljs.core.first((state_37255[(4)])));

} else {
throw ex__35586__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38765 = state_37255;
state_37255 = G__38765;
continue;
} else {
return ret_value__35584__auto__;
}
break;
}
});
cljs$core$async$state_machine__35583__auto__ = function(state_37255){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35583__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35583__auto____1.call(this,state_37255);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35583__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35583__auto____0;
cljs$core$async$state_machine__35583__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35583__auto____1;
return cljs$core$async$state_machine__35583__auto__;
})()
})();
var state__35738__auto__ = (function (){var statearr_37330 = f__35737__auto__();
(statearr_37330[(6)] = c__35736__auto___38741);

return statearr_37330;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35738__auto__);
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
var G__37338 = arguments.length;
switch (G__37338) {
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
var c__35736__auto___38768 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35737__auto__ = (function (){var switch__35582__auto__ = (function (state_37382){
var state_val_37386 = (state_37382[(1)]);
if((state_val_37386 === (7))){
var inst_37357 = (state_37382[(7)]);
var inst_37358 = (state_37382[(8)]);
var inst_37357__$1 = (state_37382[(2)]);
var inst_37358__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37357__$1,(0),null);
var inst_37359 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37357__$1,(1),null);
var inst_37360 = (inst_37358__$1 == null);
var state_37382__$1 = (function (){var statearr_37391 = state_37382;
(statearr_37391[(9)] = inst_37359);

(statearr_37391[(7)] = inst_37357__$1);

(statearr_37391[(8)] = inst_37358__$1);

return statearr_37391;
})();
if(cljs.core.truth_(inst_37360)){
var statearr_37393_38769 = state_37382__$1;
(statearr_37393_38769[(1)] = (8));

} else {
var statearr_37394_38770 = state_37382__$1;
(statearr_37394_38770[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37386 === (1))){
var inst_37346 = cljs.core.vec(chs);
var inst_37347 = inst_37346;
var state_37382__$1 = (function (){var statearr_37395 = state_37382;
(statearr_37395[(10)] = inst_37347);

return statearr_37395;
})();
var statearr_37396_38774 = state_37382__$1;
(statearr_37396_38774[(2)] = null);

(statearr_37396_38774[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37386 === (4))){
var inst_37347 = (state_37382[(10)]);
var state_37382__$1 = state_37382;
return cljs.core.async.ioc_alts_BANG_(state_37382__$1,(7),inst_37347);
} else {
if((state_val_37386 === (6))){
var inst_37378 = (state_37382[(2)]);
var state_37382__$1 = state_37382;
var statearr_37398_38779 = state_37382__$1;
(statearr_37398_38779[(2)] = inst_37378);

(statearr_37398_38779[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37386 === (3))){
var inst_37380 = (state_37382[(2)]);
var state_37382__$1 = state_37382;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37382__$1,inst_37380);
} else {
if((state_val_37386 === (2))){
var inst_37347 = (state_37382[(10)]);
var inst_37350 = cljs.core.count(inst_37347);
var inst_37351 = (inst_37350 > (0));
var state_37382__$1 = state_37382;
if(cljs.core.truth_(inst_37351)){
var statearr_37400_38780 = state_37382__$1;
(statearr_37400_38780[(1)] = (4));

} else {
var statearr_37401_38781 = state_37382__$1;
(statearr_37401_38781[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37386 === (11))){
var inst_37347 = (state_37382[(10)]);
var inst_37371 = (state_37382[(2)]);
var tmp37399 = inst_37347;
var inst_37347__$1 = tmp37399;
var state_37382__$1 = (function (){var statearr_37402 = state_37382;
(statearr_37402[(10)] = inst_37347__$1);

(statearr_37402[(11)] = inst_37371);

return statearr_37402;
})();
var statearr_37407_38782 = state_37382__$1;
(statearr_37407_38782[(2)] = null);

(statearr_37407_38782[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37386 === (9))){
var inst_37358 = (state_37382[(8)]);
var state_37382__$1 = state_37382;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37382__$1,(11),out,inst_37358);
} else {
if((state_val_37386 === (5))){
var inst_37376 = cljs.core.async.close_BANG_(out);
var state_37382__$1 = state_37382;
var statearr_37416_38788 = state_37382__$1;
(statearr_37416_38788[(2)] = inst_37376);

(statearr_37416_38788[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37386 === (10))){
var inst_37374 = (state_37382[(2)]);
var state_37382__$1 = state_37382;
var statearr_37417_38793 = state_37382__$1;
(statearr_37417_38793[(2)] = inst_37374);

(statearr_37417_38793[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37386 === (8))){
var inst_37359 = (state_37382[(9)]);
var inst_37357 = (state_37382[(7)]);
var inst_37358 = (state_37382[(8)]);
var inst_37347 = (state_37382[(10)]);
var inst_37365 = (function (){var cs = inst_37347;
var vec__37353 = inst_37357;
var v = inst_37358;
var c = inst_37359;
return (function (p1__37336_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__37336_SHARP_);
});
})();
var inst_37367 = cljs.core.filterv(inst_37365,inst_37347);
var inst_37347__$1 = inst_37367;
var state_37382__$1 = (function (){var statearr_37422 = state_37382;
(statearr_37422[(10)] = inst_37347__$1);

return statearr_37422;
})();
var statearr_37423_38804 = state_37382__$1;
(statearr_37423_38804[(2)] = null);

(statearr_37423_38804[(1)] = (2));


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
var cljs$core$async$state_machine__35583__auto__ = null;
var cljs$core$async$state_machine__35583__auto____0 = (function (){
var statearr_37427 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37427[(0)] = cljs$core$async$state_machine__35583__auto__);

(statearr_37427[(1)] = (1));

return statearr_37427;
});
var cljs$core$async$state_machine__35583__auto____1 = (function (state_37382){
while(true){
var ret_value__35584__auto__ = (function (){try{while(true){
var result__35585__auto__ = switch__35582__auto__(state_37382);
if(cljs.core.keyword_identical_QMARK_(result__35585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35585__auto__;
}
break;
}
}catch (e37429){var ex__35586__auto__ = e37429;
var statearr_37430_38805 = state_37382;
(statearr_37430_38805[(2)] = ex__35586__auto__);


if(cljs.core.seq((state_37382[(4)]))){
var statearr_37431_38806 = state_37382;
(statearr_37431_38806[(1)] = cljs.core.first((state_37382[(4)])));

} else {
throw ex__35586__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38807 = state_37382;
state_37382 = G__38807;
continue;
} else {
return ret_value__35584__auto__;
}
break;
}
});
cljs$core$async$state_machine__35583__auto__ = function(state_37382){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35583__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35583__auto____1.call(this,state_37382);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35583__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35583__auto____0;
cljs$core$async$state_machine__35583__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35583__auto____1;
return cljs$core$async$state_machine__35583__auto__;
})()
})();
var state__35738__auto__ = (function (){var statearr_37433 = f__35737__auto__();
(statearr_37433[(6)] = c__35736__auto___38768);

return statearr_37433;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35738__auto__);
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
var G__37443 = arguments.length;
switch (G__37443) {
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
var c__35736__auto___38809 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35737__auto__ = (function (){var switch__35582__auto__ = (function (state_37475){
var state_val_37476 = (state_37475[(1)]);
if((state_val_37476 === (7))){
var inst_37457 = (state_37475[(7)]);
var inst_37457__$1 = (state_37475[(2)]);
var inst_37458 = (inst_37457__$1 == null);
var inst_37459 = cljs.core.not(inst_37458);
var state_37475__$1 = (function (){var statearr_37481 = state_37475;
(statearr_37481[(7)] = inst_37457__$1);

return statearr_37481;
})();
if(inst_37459){
var statearr_37482_38810 = state_37475__$1;
(statearr_37482_38810[(1)] = (8));

} else {
var statearr_37483_38811 = state_37475__$1;
(statearr_37483_38811[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37476 === (1))){
var inst_37451 = (0);
var state_37475__$1 = (function (){var statearr_37485 = state_37475;
(statearr_37485[(8)] = inst_37451);

return statearr_37485;
})();
var statearr_37486_38812 = state_37475__$1;
(statearr_37486_38812[(2)] = null);

(statearr_37486_38812[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37476 === (4))){
var state_37475__$1 = state_37475;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37475__$1,(7),ch);
} else {
if((state_val_37476 === (6))){
var inst_37470 = (state_37475[(2)]);
var state_37475__$1 = state_37475;
var statearr_37487_38813 = state_37475__$1;
(statearr_37487_38813[(2)] = inst_37470);

(statearr_37487_38813[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37476 === (3))){
var inst_37472 = (state_37475[(2)]);
var inst_37473 = cljs.core.async.close_BANG_(out);
var state_37475__$1 = (function (){var statearr_37488 = state_37475;
(statearr_37488[(9)] = inst_37472);

return statearr_37488;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_37475__$1,inst_37473);
} else {
if((state_val_37476 === (2))){
var inst_37451 = (state_37475[(8)]);
var inst_37454 = (inst_37451 < n);
var state_37475__$1 = state_37475;
if(cljs.core.truth_(inst_37454)){
var statearr_37493_38814 = state_37475__$1;
(statearr_37493_38814[(1)] = (4));

} else {
var statearr_37494_38815 = state_37475__$1;
(statearr_37494_38815[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37476 === (11))){
var inst_37451 = (state_37475[(8)]);
var inst_37462 = (state_37475[(2)]);
var inst_37463 = (inst_37451 + (1));
var inst_37451__$1 = inst_37463;
var state_37475__$1 = (function (){var statearr_37499 = state_37475;
(statearr_37499[(8)] = inst_37451__$1);

(statearr_37499[(10)] = inst_37462);

return statearr_37499;
})();
var statearr_37500_38818 = state_37475__$1;
(statearr_37500_38818[(2)] = null);

(statearr_37500_38818[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37476 === (9))){
var state_37475__$1 = state_37475;
var statearr_37501_38819 = state_37475__$1;
(statearr_37501_38819[(2)] = null);

(statearr_37501_38819[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37476 === (5))){
var state_37475__$1 = state_37475;
var statearr_37502_38820 = state_37475__$1;
(statearr_37502_38820[(2)] = null);

(statearr_37502_38820[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37476 === (10))){
var inst_37467 = (state_37475[(2)]);
var state_37475__$1 = state_37475;
var statearr_37506_38821 = state_37475__$1;
(statearr_37506_38821[(2)] = inst_37467);

(statearr_37506_38821[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37476 === (8))){
var inst_37457 = (state_37475[(7)]);
var state_37475__$1 = state_37475;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37475__$1,(11),out,inst_37457);
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
var cljs$core$async$state_machine__35583__auto__ = null;
var cljs$core$async$state_machine__35583__auto____0 = (function (){
var statearr_37511 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37511[(0)] = cljs$core$async$state_machine__35583__auto__);

(statearr_37511[(1)] = (1));

return statearr_37511;
});
var cljs$core$async$state_machine__35583__auto____1 = (function (state_37475){
while(true){
var ret_value__35584__auto__ = (function (){try{while(true){
var result__35585__auto__ = switch__35582__auto__(state_37475);
if(cljs.core.keyword_identical_QMARK_(result__35585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35585__auto__;
}
break;
}
}catch (e37513){var ex__35586__auto__ = e37513;
var statearr_37514_38822 = state_37475;
(statearr_37514_38822[(2)] = ex__35586__auto__);


if(cljs.core.seq((state_37475[(4)]))){
var statearr_37515_38823 = state_37475;
(statearr_37515_38823[(1)] = cljs.core.first((state_37475[(4)])));

} else {
throw ex__35586__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38824 = state_37475;
state_37475 = G__38824;
continue;
} else {
return ret_value__35584__auto__;
}
break;
}
});
cljs$core$async$state_machine__35583__auto__ = function(state_37475){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35583__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35583__auto____1.call(this,state_37475);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35583__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35583__auto____0;
cljs$core$async$state_machine__35583__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35583__auto____1;
return cljs$core$async$state_machine__35583__auto__;
})()
})();
var state__35738__auto__ = (function (){var statearr_37520 = f__35737__auto__();
(statearr_37520[(6)] = c__35736__auto___38809);

return statearr_37520;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35738__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37522 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37522 = (function (f,ch,meta37523){
this.f = f;
this.ch = ch;
this.meta37523 = meta37523;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37522.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37524,meta37523__$1){
var self__ = this;
var _37524__$1 = this;
return (new cljs.core.async.t_cljs$core$async37522(self__.f,self__.ch,meta37523__$1));
}));

(cljs.core.async.t_cljs$core$async37522.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37524){
var self__ = this;
var _37524__$1 = this;
return self__.meta37523;
}));

(cljs.core.async.t_cljs$core$async37522.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37522.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async37522.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async37522.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37522.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37530 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37530 = (function (f,ch,meta37523,_,fn1,meta37531){
this.f = f;
this.ch = ch;
this.meta37523 = meta37523;
this._ = _;
this.fn1 = fn1;
this.meta37531 = meta37531;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37530.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37532,meta37531__$1){
var self__ = this;
var _37532__$1 = this;
return (new cljs.core.async.t_cljs$core$async37530(self__.f,self__.ch,self__.meta37523,self__._,self__.fn1,meta37531__$1));
}));

(cljs.core.async.t_cljs$core$async37530.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37532){
var self__ = this;
var _37532__$1 = this;
return self__.meta37531;
}));

(cljs.core.async.t_cljs$core$async37530.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37530.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async37530.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async37530.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__37521_SHARP_){
var G__37533 = (((p1__37521_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__37521_SHARP_) : self__.f.call(null,p1__37521_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__37533) : f1.call(null,G__37533));
});
}));

(cljs.core.async.t_cljs$core$async37530.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta37523","meta37523",-979277741,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async37522","cljs.core.async/t_cljs$core$async37522",774014309,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta37531","meta37531",-1687964200,null)], null);
}));

(cljs.core.async.t_cljs$core$async37530.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37530.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37530");

(cljs.core.async.t_cljs$core$async37530.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async37530");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37530.
 */
cljs.core.async.__GT_t_cljs$core$async37530 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async37530(f__$1,ch__$1,meta37523__$1,___$2,fn1__$1,meta37531){
return (new cljs.core.async.t_cljs$core$async37530(f__$1,ch__$1,meta37523__$1,___$2,fn1__$1,meta37531));
});

}

return (new cljs.core.async.t_cljs$core$async37530(self__.f,self__.ch,self__.meta37523,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4210__auto__ = ret;
if(cljs.core.truth_(and__4210__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4210__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__37536 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__37536) : self__.f.call(null,G__37536));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async37522.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37522.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async37522.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta37523","meta37523",-979277741,null)], null);
}));

(cljs.core.async.t_cljs$core$async37522.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37522.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37522");

(cljs.core.async.t_cljs$core$async37522.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async37522");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37522.
 */
cljs.core.async.__GT_t_cljs$core$async37522 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async37522(f__$1,ch__$1,meta37523){
return (new cljs.core.async.t_cljs$core$async37522(f__$1,ch__$1,meta37523));
});

}

return (new cljs.core.async.t_cljs$core$async37522(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37537 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37537 = (function (f,ch,meta37538){
this.f = f;
this.ch = ch;
this.meta37538 = meta37538;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37537.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37539,meta37538__$1){
var self__ = this;
var _37539__$1 = this;
return (new cljs.core.async.t_cljs$core$async37537(self__.f,self__.ch,meta37538__$1));
}));

(cljs.core.async.t_cljs$core$async37537.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37539){
var self__ = this;
var _37539__$1 = this;
return self__.meta37538;
}));

(cljs.core.async.t_cljs$core$async37537.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37537.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async37537.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37537.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async37537.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37537.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async37537.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta37538","meta37538",1755232938,null)], null);
}));

(cljs.core.async.t_cljs$core$async37537.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37537.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37537");

(cljs.core.async.t_cljs$core$async37537.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async37537");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37537.
 */
cljs.core.async.__GT_t_cljs$core$async37537 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async37537(f__$1,ch__$1,meta37538){
return (new cljs.core.async.t_cljs$core$async37537(f__$1,ch__$1,meta37538));
});

}

return (new cljs.core.async.t_cljs$core$async37537(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37540 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37540 = (function (p,ch,meta37541){
this.p = p;
this.ch = ch;
this.meta37541 = meta37541;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37540.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37542,meta37541__$1){
var self__ = this;
var _37542__$1 = this;
return (new cljs.core.async.t_cljs$core$async37540(self__.p,self__.ch,meta37541__$1));
}));

(cljs.core.async.t_cljs$core$async37540.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37542){
var self__ = this;
var _37542__$1 = this;
return self__.meta37541;
}));

(cljs.core.async.t_cljs$core$async37540.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37540.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async37540.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async37540.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37540.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async37540.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37540.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async37540.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta37541","meta37541",669049521,null)], null);
}));

(cljs.core.async.t_cljs$core$async37540.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37540.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37540");

(cljs.core.async.t_cljs$core$async37540.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async37540");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37540.
 */
cljs.core.async.__GT_t_cljs$core$async37540 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async37540(p__$1,ch__$1,meta37541){
return (new cljs.core.async.t_cljs$core$async37540(p__$1,ch__$1,meta37541));
});

}

return (new cljs.core.async.t_cljs$core$async37540(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__37547 = arguments.length;
switch (G__37547) {
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
var c__35736__auto___38868 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35737__auto__ = (function (){var switch__35582__auto__ = (function (state_37569){
var state_val_37570 = (state_37569[(1)]);
if((state_val_37570 === (7))){
var inst_37565 = (state_37569[(2)]);
var state_37569__$1 = state_37569;
var statearr_37571_38869 = state_37569__$1;
(statearr_37571_38869[(2)] = inst_37565);

(statearr_37571_38869[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37570 === (1))){
var state_37569__$1 = state_37569;
var statearr_37572_38870 = state_37569__$1;
(statearr_37572_38870[(2)] = null);

(statearr_37572_38870[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37570 === (4))){
var inst_37551 = (state_37569[(7)]);
var inst_37551__$1 = (state_37569[(2)]);
var inst_37552 = (inst_37551__$1 == null);
var state_37569__$1 = (function (){var statearr_37574 = state_37569;
(statearr_37574[(7)] = inst_37551__$1);

return statearr_37574;
})();
if(cljs.core.truth_(inst_37552)){
var statearr_37575_38871 = state_37569__$1;
(statearr_37575_38871[(1)] = (5));

} else {
var statearr_37577_38878 = state_37569__$1;
(statearr_37577_38878[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37570 === (6))){
var inst_37551 = (state_37569[(7)]);
var inst_37556 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_37551) : p.call(null,inst_37551));
var state_37569__$1 = state_37569;
if(cljs.core.truth_(inst_37556)){
var statearr_37578_38879 = state_37569__$1;
(statearr_37578_38879[(1)] = (8));

} else {
var statearr_37579_38880 = state_37569__$1;
(statearr_37579_38880[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37570 === (3))){
var inst_37567 = (state_37569[(2)]);
var state_37569__$1 = state_37569;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37569__$1,inst_37567);
} else {
if((state_val_37570 === (2))){
var state_37569__$1 = state_37569;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37569__$1,(4),ch);
} else {
if((state_val_37570 === (11))){
var inst_37559 = (state_37569[(2)]);
var state_37569__$1 = state_37569;
var statearr_37580_38881 = state_37569__$1;
(statearr_37580_38881[(2)] = inst_37559);

(statearr_37580_38881[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37570 === (9))){
var state_37569__$1 = state_37569;
var statearr_37581_38882 = state_37569__$1;
(statearr_37581_38882[(2)] = null);

(statearr_37581_38882[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37570 === (5))){
var inst_37554 = cljs.core.async.close_BANG_(out);
var state_37569__$1 = state_37569;
var statearr_37582_38883 = state_37569__$1;
(statearr_37582_38883[(2)] = inst_37554);

(statearr_37582_38883[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37570 === (10))){
var inst_37562 = (state_37569[(2)]);
var state_37569__$1 = (function (){var statearr_37583 = state_37569;
(statearr_37583[(8)] = inst_37562);

return statearr_37583;
})();
var statearr_37584_38884 = state_37569__$1;
(statearr_37584_38884[(2)] = null);

(statearr_37584_38884[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37570 === (8))){
var inst_37551 = (state_37569[(7)]);
var state_37569__$1 = state_37569;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37569__$1,(11),out,inst_37551);
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
var cljs$core$async$state_machine__35583__auto__ = null;
var cljs$core$async$state_machine__35583__auto____0 = (function (){
var statearr_37585 = [null,null,null,null,null,null,null,null,null];
(statearr_37585[(0)] = cljs$core$async$state_machine__35583__auto__);

(statearr_37585[(1)] = (1));

return statearr_37585;
});
var cljs$core$async$state_machine__35583__auto____1 = (function (state_37569){
while(true){
var ret_value__35584__auto__ = (function (){try{while(true){
var result__35585__auto__ = switch__35582__auto__(state_37569);
if(cljs.core.keyword_identical_QMARK_(result__35585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35585__auto__;
}
break;
}
}catch (e37586){var ex__35586__auto__ = e37586;
var statearr_37587_38886 = state_37569;
(statearr_37587_38886[(2)] = ex__35586__auto__);


if(cljs.core.seq((state_37569[(4)]))){
var statearr_37588_38887 = state_37569;
(statearr_37588_38887[(1)] = cljs.core.first((state_37569[(4)])));

} else {
throw ex__35586__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38888 = state_37569;
state_37569 = G__38888;
continue;
} else {
return ret_value__35584__auto__;
}
break;
}
});
cljs$core$async$state_machine__35583__auto__ = function(state_37569){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35583__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35583__auto____1.call(this,state_37569);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35583__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35583__auto____0;
cljs$core$async$state_machine__35583__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35583__auto____1;
return cljs$core$async$state_machine__35583__auto__;
})()
})();
var state__35738__auto__ = (function (){var statearr_37589 = f__35737__auto__();
(statearr_37589[(6)] = c__35736__auto___38868);

return statearr_37589;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35738__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__37593 = arguments.length;
switch (G__37593) {
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
var c__35736__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35737__auto__ = (function (){var switch__35582__auto__ = (function (state_37662){
var state_val_37664 = (state_37662[(1)]);
if((state_val_37664 === (7))){
var inst_37658 = (state_37662[(2)]);
var state_37662__$1 = state_37662;
var statearr_37669_38896 = state_37662__$1;
(statearr_37669_38896[(2)] = inst_37658);

(statearr_37669_38896[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37664 === (20))){
var inst_37626 = (state_37662[(7)]);
var inst_37638 = (state_37662[(2)]);
var inst_37640 = cljs.core.next(inst_37626);
var inst_37612 = inst_37640;
var inst_37613 = null;
var inst_37614 = (0);
var inst_37615 = (0);
var state_37662__$1 = (function (){var statearr_37670 = state_37662;
(statearr_37670[(8)] = inst_37615);

(statearr_37670[(9)] = inst_37613);

(statearr_37670[(10)] = inst_37612);

(statearr_37670[(11)] = inst_37614);

(statearr_37670[(12)] = inst_37638);

return statearr_37670;
})();
var statearr_37671_38900 = state_37662__$1;
(statearr_37671_38900[(2)] = null);

(statearr_37671_38900[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37664 === (1))){
var state_37662__$1 = state_37662;
var statearr_37672_38901 = state_37662__$1;
(statearr_37672_38901[(2)] = null);

(statearr_37672_38901[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37664 === (4))){
var inst_37600 = (state_37662[(13)]);
var inst_37600__$1 = (state_37662[(2)]);
var inst_37601 = (inst_37600__$1 == null);
var state_37662__$1 = (function (){var statearr_37673 = state_37662;
(statearr_37673[(13)] = inst_37600__$1);

return statearr_37673;
})();
if(cljs.core.truth_(inst_37601)){
var statearr_37674_38902 = state_37662__$1;
(statearr_37674_38902[(1)] = (5));

} else {
var statearr_37675_38903 = state_37662__$1;
(statearr_37675_38903[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37664 === (15))){
var state_37662__$1 = state_37662;
var statearr_37679_38904 = state_37662__$1;
(statearr_37679_38904[(2)] = null);

(statearr_37679_38904[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37664 === (21))){
var state_37662__$1 = state_37662;
var statearr_37680_38905 = state_37662__$1;
(statearr_37680_38905[(2)] = null);

(statearr_37680_38905[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37664 === (13))){
var inst_37615 = (state_37662[(8)]);
var inst_37613 = (state_37662[(9)]);
var inst_37612 = (state_37662[(10)]);
var inst_37614 = (state_37662[(11)]);
var inst_37622 = (state_37662[(2)]);
var inst_37623 = (inst_37615 + (1));
var tmp37676 = inst_37613;
var tmp37677 = inst_37612;
var tmp37678 = inst_37614;
var inst_37612__$1 = tmp37677;
var inst_37613__$1 = tmp37676;
var inst_37614__$1 = tmp37678;
var inst_37615__$1 = inst_37623;
var state_37662__$1 = (function (){var statearr_37681 = state_37662;
(statearr_37681[(14)] = inst_37622);

(statearr_37681[(8)] = inst_37615__$1);

(statearr_37681[(9)] = inst_37613__$1);

(statearr_37681[(10)] = inst_37612__$1);

(statearr_37681[(11)] = inst_37614__$1);

return statearr_37681;
})();
var statearr_37682_38912 = state_37662__$1;
(statearr_37682_38912[(2)] = null);

(statearr_37682_38912[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37664 === (22))){
var state_37662__$1 = state_37662;
var statearr_37683_38913 = state_37662__$1;
(statearr_37683_38913[(2)] = null);

(statearr_37683_38913[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37664 === (6))){
var inst_37600 = (state_37662[(13)]);
var inst_37610 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_37600) : f.call(null,inst_37600));
var inst_37611 = cljs.core.seq(inst_37610);
var inst_37612 = inst_37611;
var inst_37613 = null;
var inst_37614 = (0);
var inst_37615 = (0);
var state_37662__$1 = (function (){var statearr_37684 = state_37662;
(statearr_37684[(8)] = inst_37615);

(statearr_37684[(9)] = inst_37613);

(statearr_37684[(10)] = inst_37612);

(statearr_37684[(11)] = inst_37614);

return statearr_37684;
})();
var statearr_37685_38914 = state_37662__$1;
(statearr_37685_38914[(2)] = null);

(statearr_37685_38914[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37664 === (17))){
var inst_37626 = (state_37662[(7)]);
var inst_37631 = cljs.core.chunk_first(inst_37626);
var inst_37632 = cljs.core.chunk_rest(inst_37626);
var inst_37633 = cljs.core.count(inst_37631);
var inst_37612 = inst_37632;
var inst_37613 = inst_37631;
var inst_37614 = inst_37633;
var inst_37615 = (0);
var state_37662__$1 = (function (){var statearr_37686 = state_37662;
(statearr_37686[(8)] = inst_37615);

(statearr_37686[(9)] = inst_37613);

(statearr_37686[(10)] = inst_37612);

(statearr_37686[(11)] = inst_37614);

return statearr_37686;
})();
var statearr_37694_38915 = state_37662__$1;
(statearr_37694_38915[(2)] = null);

(statearr_37694_38915[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37664 === (3))){
var inst_37660 = (state_37662[(2)]);
var state_37662__$1 = state_37662;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37662__$1,inst_37660);
} else {
if((state_val_37664 === (12))){
var inst_37648 = (state_37662[(2)]);
var state_37662__$1 = state_37662;
var statearr_37701_38916 = state_37662__$1;
(statearr_37701_38916[(2)] = inst_37648);

(statearr_37701_38916[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37664 === (2))){
var state_37662__$1 = state_37662;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37662__$1,(4),in$);
} else {
if((state_val_37664 === (23))){
var inst_37656 = (state_37662[(2)]);
var state_37662__$1 = state_37662;
var statearr_37708_38917 = state_37662__$1;
(statearr_37708_38917[(2)] = inst_37656);

(statearr_37708_38917[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37664 === (19))){
var inst_37643 = (state_37662[(2)]);
var state_37662__$1 = state_37662;
var statearr_37709_38918 = state_37662__$1;
(statearr_37709_38918[(2)] = inst_37643);

(statearr_37709_38918[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37664 === (11))){
var inst_37612 = (state_37662[(10)]);
var inst_37626 = (state_37662[(7)]);
var inst_37626__$1 = cljs.core.seq(inst_37612);
var state_37662__$1 = (function (){var statearr_37710 = state_37662;
(statearr_37710[(7)] = inst_37626__$1);

return statearr_37710;
})();
if(inst_37626__$1){
var statearr_37711_38919 = state_37662__$1;
(statearr_37711_38919[(1)] = (14));

} else {
var statearr_37712_38920 = state_37662__$1;
(statearr_37712_38920[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37664 === (9))){
var inst_37650 = (state_37662[(2)]);
var inst_37651 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_37662__$1 = (function (){var statearr_37717 = state_37662;
(statearr_37717[(15)] = inst_37650);

return statearr_37717;
})();
if(cljs.core.truth_(inst_37651)){
var statearr_37721_38921 = state_37662__$1;
(statearr_37721_38921[(1)] = (21));

} else {
var statearr_37722_38924 = state_37662__$1;
(statearr_37722_38924[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37664 === (5))){
var inst_37603 = cljs.core.async.close_BANG_(out);
var state_37662__$1 = state_37662;
var statearr_37726_38925 = state_37662__$1;
(statearr_37726_38925[(2)] = inst_37603);

(statearr_37726_38925[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37664 === (14))){
var inst_37626 = (state_37662[(7)]);
var inst_37629 = cljs.core.chunked_seq_QMARK_(inst_37626);
var state_37662__$1 = state_37662;
if(inst_37629){
var statearr_37730_38926 = state_37662__$1;
(statearr_37730_38926[(1)] = (17));

} else {
var statearr_37731_38927 = state_37662__$1;
(statearr_37731_38927[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37664 === (16))){
var inst_37646 = (state_37662[(2)]);
var state_37662__$1 = state_37662;
var statearr_37732_38928 = state_37662__$1;
(statearr_37732_38928[(2)] = inst_37646);

(statearr_37732_38928[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37664 === (10))){
var inst_37615 = (state_37662[(8)]);
var inst_37613 = (state_37662[(9)]);
var inst_37620 = cljs.core._nth(inst_37613,inst_37615);
var state_37662__$1 = state_37662;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37662__$1,(13),out,inst_37620);
} else {
if((state_val_37664 === (18))){
var inst_37626 = (state_37662[(7)]);
var inst_37636 = cljs.core.first(inst_37626);
var state_37662__$1 = state_37662;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37662__$1,(20),out,inst_37636);
} else {
if((state_val_37664 === (8))){
var inst_37615 = (state_37662[(8)]);
var inst_37614 = (state_37662[(11)]);
var inst_37617 = (inst_37615 < inst_37614);
var inst_37618 = inst_37617;
var state_37662__$1 = state_37662;
if(cljs.core.truth_(inst_37618)){
var statearr_37733_38931 = state_37662__$1;
(statearr_37733_38931[(1)] = (10));

} else {
var statearr_37734_38932 = state_37662__$1;
(statearr_37734_38932[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__35583__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__35583__auto____0 = (function (){
var statearr_37735 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37735[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__35583__auto__);

(statearr_37735[(1)] = (1));

return statearr_37735;
});
var cljs$core$async$mapcat_STAR__$_state_machine__35583__auto____1 = (function (state_37662){
while(true){
var ret_value__35584__auto__ = (function (){try{while(true){
var result__35585__auto__ = switch__35582__auto__(state_37662);
if(cljs.core.keyword_identical_QMARK_(result__35585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35585__auto__;
}
break;
}
}catch (e37737){var ex__35586__auto__ = e37737;
var statearr_37741_38934 = state_37662;
(statearr_37741_38934[(2)] = ex__35586__auto__);


if(cljs.core.seq((state_37662[(4)]))){
var statearr_37742_38936 = state_37662;
(statearr_37742_38936[(1)] = cljs.core.first((state_37662[(4)])));

} else {
throw ex__35586__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38938 = state_37662;
state_37662 = G__38938;
continue;
} else {
return ret_value__35584__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__35583__auto__ = function(state_37662){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__35583__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__35583__auto____1.call(this,state_37662);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__35583__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__35583__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__35583__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__35583__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__35583__auto__;
})()
})();
var state__35738__auto__ = (function (){var statearr_37743 = f__35737__auto__();
(statearr_37743[(6)] = c__35736__auto__);

return statearr_37743;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35738__auto__);
}));

return c__35736__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__37745 = arguments.length;
switch (G__37745) {
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
var G__37751 = arguments.length;
switch (G__37751) {
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
var G__37757 = arguments.length;
switch (G__37757) {
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
var c__35736__auto___38942 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35737__auto__ = (function (){var switch__35582__auto__ = (function (state_37782){
var state_val_37783 = (state_37782[(1)]);
if((state_val_37783 === (7))){
var inst_37776 = (state_37782[(2)]);
var state_37782__$1 = state_37782;
var statearr_37785_38949 = state_37782__$1;
(statearr_37785_38949[(2)] = inst_37776);

(statearr_37785_38949[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37783 === (1))){
var inst_37758 = null;
var state_37782__$1 = (function (){var statearr_37786 = state_37782;
(statearr_37786[(7)] = inst_37758);

return statearr_37786;
})();
var statearr_37787_38950 = state_37782__$1;
(statearr_37787_38950[(2)] = null);

(statearr_37787_38950[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37783 === (4))){
var inst_37761 = (state_37782[(8)]);
var inst_37761__$1 = (state_37782[(2)]);
var inst_37762 = (inst_37761__$1 == null);
var inst_37763 = cljs.core.not(inst_37762);
var state_37782__$1 = (function (){var statearr_37789 = state_37782;
(statearr_37789[(8)] = inst_37761__$1);

return statearr_37789;
})();
if(inst_37763){
var statearr_37790_38951 = state_37782__$1;
(statearr_37790_38951[(1)] = (5));

} else {
var statearr_37792_38952 = state_37782__$1;
(statearr_37792_38952[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37783 === (6))){
var state_37782__$1 = state_37782;
var statearr_37793_38954 = state_37782__$1;
(statearr_37793_38954[(2)] = null);

(statearr_37793_38954[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37783 === (3))){
var inst_37778 = (state_37782[(2)]);
var inst_37779 = cljs.core.async.close_BANG_(out);
var state_37782__$1 = (function (){var statearr_37797 = state_37782;
(statearr_37797[(9)] = inst_37778);

return statearr_37797;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_37782__$1,inst_37779);
} else {
if((state_val_37783 === (2))){
var state_37782__$1 = state_37782;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37782__$1,(4),ch);
} else {
if((state_val_37783 === (11))){
var inst_37761 = (state_37782[(8)]);
var inst_37770 = (state_37782[(2)]);
var inst_37758 = inst_37761;
var state_37782__$1 = (function (){var statearr_37798 = state_37782;
(statearr_37798[(7)] = inst_37758);

(statearr_37798[(10)] = inst_37770);

return statearr_37798;
})();
var statearr_37799_38957 = state_37782__$1;
(statearr_37799_38957[(2)] = null);

(statearr_37799_38957[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37783 === (9))){
var inst_37761 = (state_37782[(8)]);
var state_37782__$1 = state_37782;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37782__$1,(11),out,inst_37761);
} else {
if((state_val_37783 === (5))){
var inst_37758 = (state_37782[(7)]);
var inst_37761 = (state_37782[(8)]);
var inst_37765 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_37761,inst_37758);
var state_37782__$1 = state_37782;
if(inst_37765){
var statearr_37801_38960 = state_37782__$1;
(statearr_37801_38960[(1)] = (8));

} else {
var statearr_37802_38961 = state_37782__$1;
(statearr_37802_38961[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37783 === (10))){
var inst_37773 = (state_37782[(2)]);
var state_37782__$1 = state_37782;
var statearr_37803_38963 = state_37782__$1;
(statearr_37803_38963[(2)] = inst_37773);

(statearr_37803_38963[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37783 === (8))){
var inst_37758 = (state_37782[(7)]);
var tmp37800 = inst_37758;
var inst_37758__$1 = tmp37800;
var state_37782__$1 = (function (){var statearr_37804 = state_37782;
(statearr_37804[(7)] = inst_37758__$1);

return statearr_37804;
})();
var statearr_37805_38964 = state_37782__$1;
(statearr_37805_38964[(2)] = null);

(statearr_37805_38964[(1)] = (2));


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
var cljs$core$async$state_machine__35583__auto__ = null;
var cljs$core$async$state_machine__35583__auto____0 = (function (){
var statearr_37806 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37806[(0)] = cljs$core$async$state_machine__35583__auto__);

(statearr_37806[(1)] = (1));

return statearr_37806;
});
var cljs$core$async$state_machine__35583__auto____1 = (function (state_37782){
while(true){
var ret_value__35584__auto__ = (function (){try{while(true){
var result__35585__auto__ = switch__35582__auto__(state_37782);
if(cljs.core.keyword_identical_QMARK_(result__35585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35585__auto__;
}
break;
}
}catch (e37807){var ex__35586__auto__ = e37807;
var statearr_37808_38969 = state_37782;
(statearr_37808_38969[(2)] = ex__35586__auto__);


if(cljs.core.seq((state_37782[(4)]))){
var statearr_37809_38970 = state_37782;
(statearr_37809_38970[(1)] = cljs.core.first((state_37782[(4)])));

} else {
throw ex__35586__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38975 = state_37782;
state_37782 = G__38975;
continue;
} else {
return ret_value__35584__auto__;
}
break;
}
});
cljs$core$async$state_machine__35583__auto__ = function(state_37782){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35583__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35583__auto____1.call(this,state_37782);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35583__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35583__auto____0;
cljs$core$async$state_machine__35583__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35583__auto____1;
return cljs$core$async$state_machine__35583__auto__;
})()
})();
var state__35738__auto__ = (function (){var statearr_37810 = f__35737__auto__();
(statearr_37810[(6)] = c__35736__auto___38942);

return statearr_37810;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35738__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__37812 = arguments.length;
switch (G__37812) {
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
var c__35736__auto___38977 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35737__auto__ = (function (){var switch__35582__auto__ = (function (state_37857){
var state_val_37858 = (state_37857[(1)]);
if((state_val_37858 === (7))){
var inst_37853 = (state_37857[(2)]);
var state_37857__$1 = state_37857;
var statearr_37859_38978 = state_37857__$1;
(statearr_37859_38978[(2)] = inst_37853);

(statearr_37859_38978[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37858 === (1))){
var inst_37818 = (new Array(n));
var inst_37819 = inst_37818;
var inst_37820 = (0);
var state_37857__$1 = (function (){var statearr_37860 = state_37857;
(statearr_37860[(7)] = inst_37819);

(statearr_37860[(8)] = inst_37820);

return statearr_37860;
})();
var statearr_37861_38979 = state_37857__$1;
(statearr_37861_38979[(2)] = null);

(statearr_37861_38979[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37858 === (4))){
var inst_37823 = (state_37857[(9)]);
var inst_37823__$1 = (state_37857[(2)]);
var inst_37824 = (inst_37823__$1 == null);
var inst_37825 = cljs.core.not(inst_37824);
var state_37857__$1 = (function (){var statearr_37863 = state_37857;
(statearr_37863[(9)] = inst_37823__$1);

return statearr_37863;
})();
if(inst_37825){
var statearr_37864_38980 = state_37857__$1;
(statearr_37864_38980[(1)] = (5));

} else {
var statearr_37865_38981 = state_37857__$1;
(statearr_37865_38981[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37858 === (15))){
var inst_37847 = (state_37857[(2)]);
var state_37857__$1 = state_37857;
var statearr_37867_38982 = state_37857__$1;
(statearr_37867_38982[(2)] = inst_37847);

(statearr_37867_38982[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37858 === (13))){
var state_37857__$1 = state_37857;
var statearr_37871_38983 = state_37857__$1;
(statearr_37871_38983[(2)] = null);

(statearr_37871_38983[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37858 === (6))){
var inst_37820 = (state_37857[(8)]);
var inst_37842 = (inst_37820 > (0));
var state_37857__$1 = state_37857;
if(cljs.core.truth_(inst_37842)){
var statearr_37872_38984 = state_37857__$1;
(statearr_37872_38984[(1)] = (12));

} else {
var statearr_37873_38985 = state_37857__$1;
(statearr_37873_38985[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37858 === (3))){
var inst_37855 = (state_37857[(2)]);
var state_37857__$1 = state_37857;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37857__$1,inst_37855);
} else {
if((state_val_37858 === (12))){
var inst_37819 = (state_37857[(7)]);
var inst_37845 = cljs.core.vec(inst_37819);
var state_37857__$1 = state_37857;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37857__$1,(15),out,inst_37845);
} else {
if((state_val_37858 === (2))){
var state_37857__$1 = state_37857;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37857__$1,(4),ch);
} else {
if((state_val_37858 === (11))){
var inst_37836 = (state_37857[(2)]);
var inst_37837 = (new Array(n));
var inst_37819 = inst_37837;
var inst_37820 = (0);
var state_37857__$1 = (function (){var statearr_37874 = state_37857;
(statearr_37874[(7)] = inst_37819);

(statearr_37874[(8)] = inst_37820);

(statearr_37874[(10)] = inst_37836);

return statearr_37874;
})();
var statearr_37875_38986 = state_37857__$1;
(statearr_37875_38986[(2)] = null);

(statearr_37875_38986[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37858 === (9))){
var inst_37819 = (state_37857[(7)]);
var inst_37834 = cljs.core.vec(inst_37819);
var state_37857__$1 = state_37857;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37857__$1,(11),out,inst_37834);
} else {
if((state_val_37858 === (5))){
var inst_37819 = (state_37857[(7)]);
var inst_37828 = (state_37857[(11)]);
var inst_37820 = (state_37857[(8)]);
var inst_37823 = (state_37857[(9)]);
var inst_37827 = (inst_37819[inst_37820] = inst_37823);
var inst_37828__$1 = (inst_37820 + (1));
var inst_37829 = (inst_37828__$1 < n);
var state_37857__$1 = (function (){var statearr_37876 = state_37857;
(statearr_37876[(11)] = inst_37828__$1);

(statearr_37876[(12)] = inst_37827);

return statearr_37876;
})();
if(cljs.core.truth_(inst_37829)){
var statearr_37877_38987 = state_37857__$1;
(statearr_37877_38987[(1)] = (8));

} else {
var statearr_37878_38988 = state_37857__$1;
(statearr_37878_38988[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37858 === (14))){
var inst_37850 = (state_37857[(2)]);
var inst_37851 = cljs.core.async.close_BANG_(out);
var state_37857__$1 = (function (){var statearr_37880 = state_37857;
(statearr_37880[(13)] = inst_37850);

return statearr_37880;
})();
var statearr_37881_38990 = state_37857__$1;
(statearr_37881_38990[(2)] = inst_37851);

(statearr_37881_38990[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37858 === (10))){
var inst_37840 = (state_37857[(2)]);
var state_37857__$1 = state_37857;
var statearr_37882_38991 = state_37857__$1;
(statearr_37882_38991[(2)] = inst_37840);

(statearr_37882_38991[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37858 === (8))){
var inst_37819 = (state_37857[(7)]);
var inst_37828 = (state_37857[(11)]);
var tmp37879 = inst_37819;
var inst_37819__$1 = tmp37879;
var inst_37820 = inst_37828;
var state_37857__$1 = (function (){var statearr_37883 = state_37857;
(statearr_37883[(7)] = inst_37819__$1);

(statearr_37883[(8)] = inst_37820);

return statearr_37883;
})();
var statearr_37884_38993 = state_37857__$1;
(statearr_37884_38993[(2)] = null);

(statearr_37884_38993[(1)] = (2));


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
var cljs$core$async$state_machine__35583__auto__ = null;
var cljs$core$async$state_machine__35583__auto____0 = (function (){
var statearr_37885 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37885[(0)] = cljs$core$async$state_machine__35583__auto__);

(statearr_37885[(1)] = (1));

return statearr_37885;
});
var cljs$core$async$state_machine__35583__auto____1 = (function (state_37857){
while(true){
var ret_value__35584__auto__ = (function (){try{while(true){
var result__35585__auto__ = switch__35582__auto__(state_37857);
if(cljs.core.keyword_identical_QMARK_(result__35585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35585__auto__;
}
break;
}
}catch (e37886){var ex__35586__auto__ = e37886;
var statearr_37888_38994 = state_37857;
(statearr_37888_38994[(2)] = ex__35586__auto__);


if(cljs.core.seq((state_37857[(4)]))){
var statearr_37892_38995 = state_37857;
(statearr_37892_38995[(1)] = cljs.core.first((state_37857[(4)])));

} else {
throw ex__35586__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38996 = state_37857;
state_37857 = G__38996;
continue;
} else {
return ret_value__35584__auto__;
}
break;
}
});
cljs$core$async$state_machine__35583__auto__ = function(state_37857){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35583__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35583__auto____1.call(this,state_37857);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35583__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35583__auto____0;
cljs$core$async$state_machine__35583__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35583__auto____1;
return cljs$core$async$state_machine__35583__auto__;
})()
})();
var state__35738__auto__ = (function (){var statearr_37893 = f__35737__auto__();
(statearr_37893[(6)] = c__35736__auto___38977);

return statearr_37893;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35738__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__37899 = arguments.length;
switch (G__37899) {
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
var c__35736__auto___38998 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35737__auto__ = (function (){var switch__35582__auto__ = (function (state_37944){
var state_val_37945 = (state_37944[(1)]);
if((state_val_37945 === (7))){
var inst_37940 = (state_37944[(2)]);
var state_37944__$1 = state_37944;
var statearr_37948_38999 = state_37944__$1;
(statearr_37948_38999[(2)] = inst_37940);

(statearr_37948_38999[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37945 === (1))){
var inst_37900 = [];
var inst_37901 = inst_37900;
var inst_37902 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_37944__$1 = (function (){var statearr_37949 = state_37944;
(statearr_37949[(7)] = inst_37902);

(statearr_37949[(8)] = inst_37901);

return statearr_37949;
})();
var statearr_37950_39002 = state_37944__$1;
(statearr_37950_39002[(2)] = null);

(statearr_37950_39002[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37945 === (4))){
var inst_37905 = (state_37944[(9)]);
var inst_37905__$1 = (state_37944[(2)]);
var inst_37906 = (inst_37905__$1 == null);
var inst_37907 = cljs.core.not(inst_37906);
var state_37944__$1 = (function (){var statearr_37951 = state_37944;
(statearr_37951[(9)] = inst_37905__$1);

return statearr_37951;
})();
if(inst_37907){
var statearr_37952_39003 = state_37944__$1;
(statearr_37952_39003[(1)] = (5));

} else {
var statearr_37953_39004 = state_37944__$1;
(statearr_37953_39004[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37945 === (15))){
var inst_37901 = (state_37944[(8)]);
var inst_37932 = cljs.core.vec(inst_37901);
var state_37944__$1 = state_37944;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37944__$1,(18),out,inst_37932);
} else {
if((state_val_37945 === (13))){
var inst_37927 = (state_37944[(2)]);
var state_37944__$1 = state_37944;
var statearr_37957_39009 = state_37944__$1;
(statearr_37957_39009[(2)] = inst_37927);

(statearr_37957_39009[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37945 === (6))){
var inst_37901 = (state_37944[(8)]);
var inst_37929 = inst_37901.length;
var inst_37930 = (inst_37929 > (0));
var state_37944__$1 = state_37944;
if(cljs.core.truth_(inst_37930)){
var statearr_37958_39010 = state_37944__$1;
(statearr_37958_39010[(1)] = (15));

} else {
var statearr_37959_39011 = state_37944__$1;
(statearr_37959_39011[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37945 === (17))){
var inst_37937 = (state_37944[(2)]);
var inst_37938 = cljs.core.async.close_BANG_(out);
var state_37944__$1 = (function (){var statearr_37960 = state_37944;
(statearr_37960[(10)] = inst_37937);

return statearr_37960;
})();
var statearr_37961_39012 = state_37944__$1;
(statearr_37961_39012[(2)] = inst_37938);

(statearr_37961_39012[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37945 === (3))){
var inst_37942 = (state_37944[(2)]);
var state_37944__$1 = state_37944;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37944__$1,inst_37942);
} else {
if((state_val_37945 === (12))){
var inst_37901 = (state_37944[(8)]);
var inst_37920 = cljs.core.vec(inst_37901);
var state_37944__$1 = state_37944;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37944__$1,(14),out,inst_37920);
} else {
if((state_val_37945 === (2))){
var state_37944__$1 = state_37944;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37944__$1,(4),ch);
} else {
if((state_val_37945 === (11))){
var inst_37909 = (state_37944[(11)]);
var inst_37901 = (state_37944[(8)]);
var inst_37905 = (state_37944[(9)]);
var inst_37917 = inst_37901.push(inst_37905);
var tmp37962 = inst_37901;
var inst_37901__$1 = tmp37962;
var inst_37902 = inst_37909;
var state_37944__$1 = (function (){var statearr_37963 = state_37944;
(statearr_37963[(7)] = inst_37902);

(statearr_37963[(8)] = inst_37901__$1);

(statearr_37963[(12)] = inst_37917);

return statearr_37963;
})();
var statearr_37964_39015 = state_37944__$1;
(statearr_37964_39015[(2)] = null);

(statearr_37964_39015[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37945 === (9))){
var inst_37902 = (state_37944[(7)]);
var inst_37913 = cljs.core.keyword_identical_QMARK_(inst_37902,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_37944__$1 = state_37944;
var statearr_37965_39016 = state_37944__$1;
(statearr_37965_39016[(2)] = inst_37913);

(statearr_37965_39016[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37945 === (5))){
var inst_37909 = (state_37944[(11)]);
var inst_37902 = (state_37944[(7)]);
var inst_37910 = (state_37944[(13)]);
var inst_37905 = (state_37944[(9)]);
var inst_37909__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_37905) : f.call(null,inst_37905));
var inst_37910__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_37909__$1,inst_37902);
var state_37944__$1 = (function (){var statearr_37966 = state_37944;
(statearr_37966[(11)] = inst_37909__$1);

(statearr_37966[(13)] = inst_37910__$1);

return statearr_37966;
})();
if(inst_37910__$1){
var statearr_37967_39018 = state_37944__$1;
(statearr_37967_39018[(1)] = (8));

} else {
var statearr_37968_39019 = state_37944__$1;
(statearr_37968_39019[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37945 === (14))){
var inst_37909 = (state_37944[(11)]);
var inst_37905 = (state_37944[(9)]);
var inst_37922 = (state_37944[(2)]);
var inst_37923 = [];
var inst_37924 = inst_37923.push(inst_37905);
var inst_37901 = inst_37923;
var inst_37902 = inst_37909;
var state_37944__$1 = (function (){var statearr_37969 = state_37944;
(statearr_37969[(7)] = inst_37902);

(statearr_37969[(8)] = inst_37901);

(statearr_37969[(14)] = inst_37922);

(statearr_37969[(15)] = inst_37924);

return statearr_37969;
})();
var statearr_37970_39026 = state_37944__$1;
(statearr_37970_39026[(2)] = null);

(statearr_37970_39026[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37945 === (16))){
var state_37944__$1 = state_37944;
var statearr_37971_39027 = state_37944__$1;
(statearr_37971_39027[(2)] = null);

(statearr_37971_39027[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37945 === (10))){
var inst_37915 = (state_37944[(2)]);
var state_37944__$1 = state_37944;
if(cljs.core.truth_(inst_37915)){
var statearr_37972_39032 = state_37944__$1;
(statearr_37972_39032[(1)] = (11));

} else {
var statearr_37973_39034 = state_37944__$1;
(statearr_37973_39034[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37945 === (18))){
var inst_37934 = (state_37944[(2)]);
var state_37944__$1 = state_37944;
var statearr_37974_39035 = state_37944__$1;
(statearr_37974_39035[(2)] = inst_37934);

(statearr_37974_39035[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37945 === (8))){
var inst_37910 = (state_37944[(13)]);
var state_37944__$1 = state_37944;
var statearr_37975_39036 = state_37944__$1;
(statearr_37975_39036[(2)] = inst_37910);

(statearr_37975_39036[(1)] = (10));


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
var cljs$core$async$state_machine__35583__auto__ = null;
var cljs$core$async$state_machine__35583__auto____0 = (function (){
var statearr_37976 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37976[(0)] = cljs$core$async$state_machine__35583__auto__);

(statearr_37976[(1)] = (1));

return statearr_37976;
});
var cljs$core$async$state_machine__35583__auto____1 = (function (state_37944){
while(true){
var ret_value__35584__auto__ = (function (){try{while(true){
var result__35585__auto__ = switch__35582__auto__(state_37944);
if(cljs.core.keyword_identical_QMARK_(result__35585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35585__auto__;
}
break;
}
}catch (e37977){var ex__35586__auto__ = e37977;
var statearr_37978_39043 = state_37944;
(statearr_37978_39043[(2)] = ex__35586__auto__);


if(cljs.core.seq((state_37944[(4)]))){
var statearr_37979_39044 = state_37944;
(statearr_37979_39044[(1)] = cljs.core.first((state_37944[(4)])));

} else {
throw ex__35586__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39046 = state_37944;
state_37944 = G__39046;
continue;
} else {
return ret_value__35584__auto__;
}
break;
}
});
cljs$core$async$state_machine__35583__auto__ = function(state_37944){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35583__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35583__auto____1.call(this,state_37944);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35583__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35583__auto____0;
cljs$core$async$state_machine__35583__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35583__auto____1;
return cljs$core$async$state_machine__35583__auto__;
})()
})();
var state__35738__auto__ = (function (){var statearr_37980 = f__35737__auto__();
(statearr_37980[(6)] = c__35736__auto___38998);

return statearr_37980;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35738__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
