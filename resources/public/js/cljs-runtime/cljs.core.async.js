goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__35828 = arguments.length;
switch (G__35828) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35829 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35829 = (function (f,blockable,meta35830){
this.f = f;
this.blockable = blockable;
this.meta35830 = meta35830;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35829.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35831,meta35830__$1){
var self__ = this;
var _35831__$1 = this;
return (new cljs.core.async.t_cljs$core$async35829(self__.f,self__.blockable,meta35830__$1));
}));

(cljs.core.async.t_cljs$core$async35829.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35831){
var self__ = this;
var _35831__$1 = this;
return self__.meta35830;
}));

(cljs.core.async.t_cljs$core$async35829.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35829.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async35829.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async35829.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async35829.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta35830","meta35830",-774947342,null)], null);
}));

(cljs.core.async.t_cljs$core$async35829.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35829.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35829");

(cljs.core.async.t_cljs$core$async35829.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async35829");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35829.
 */
cljs.core.async.__GT_t_cljs$core$async35829 = (function cljs$core$async$__GT_t_cljs$core$async35829(f__$1,blockable__$1,meta35830){
return (new cljs.core.async.t_cljs$core$async35829(f__$1,blockable__$1,meta35830));
});

}

return (new cljs.core.async.t_cljs$core$async35829(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__35834 = arguments.length;
switch (G__35834) {
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
var G__35836 = arguments.length;
switch (G__35836) {
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
var G__35842 = arguments.length;
switch (G__35842) {
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
var val_38104 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_38104) : fn1.call(null,val_38104));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_38104) : fn1.call(null,val_38104));
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
var G__35844 = arguments.length;
switch (G__35844) {
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
var n__4695__auto___38118 = n;
var x_38119 = (0);
while(true){
if((x_38119 < n__4695__auto___38118)){
(a[x_38119] = x_38119);

var G__38120 = (x_38119 + (1));
x_38119 = G__38120;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35847 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35847 = (function (flag,meta35848){
this.flag = flag;
this.meta35848 = meta35848;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35847.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35849,meta35848__$1){
var self__ = this;
var _35849__$1 = this;
return (new cljs.core.async.t_cljs$core$async35847(self__.flag,meta35848__$1));
}));

(cljs.core.async.t_cljs$core$async35847.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35849){
var self__ = this;
var _35849__$1 = this;
return self__.meta35848;
}));

(cljs.core.async.t_cljs$core$async35847.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35847.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async35847.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async35847.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async35847.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta35848","meta35848",211969587,null)], null);
}));

(cljs.core.async.t_cljs$core$async35847.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35847.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35847");

(cljs.core.async.t_cljs$core$async35847.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async35847");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35847.
 */
cljs.core.async.__GT_t_cljs$core$async35847 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async35847(flag__$1,meta35848){
return (new cljs.core.async.t_cljs$core$async35847(flag__$1,meta35848));
});

}

return (new cljs.core.async.t_cljs$core$async35847(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35853 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35853 = (function (flag,cb,meta35854){
this.flag = flag;
this.cb = cb;
this.meta35854 = meta35854;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35853.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35855,meta35854__$1){
var self__ = this;
var _35855__$1 = this;
return (new cljs.core.async.t_cljs$core$async35853(self__.flag,self__.cb,meta35854__$1));
}));

(cljs.core.async.t_cljs$core$async35853.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35855){
var self__ = this;
var _35855__$1 = this;
return self__.meta35854;
}));

(cljs.core.async.t_cljs$core$async35853.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35853.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async35853.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async35853.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async35853.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta35854","meta35854",1380333453,null)], null);
}));

(cljs.core.async.t_cljs$core$async35853.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35853.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35853");

(cljs.core.async.t_cljs$core$async35853.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async35853");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35853.
 */
cljs.core.async.__GT_t_cljs$core$async35853 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async35853(flag__$1,cb__$1,meta35854){
return (new cljs.core.async.t_cljs$core$async35853(flag__$1,cb__$1,meta35854));
});

}

return (new cljs.core.async.t_cljs$core$async35853(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__35859_SHARP_){
var G__35861 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__35859_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__35861) : fret.call(null,G__35861));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__35860_SHARP_){
var G__35862 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__35860_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__35862) : fret.call(null,G__35862));
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
var G__38126 = (i + (1));
i = G__38126;
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
var len__4818__auto___38127 = arguments.length;
var i__4819__auto___38130 = (0);
while(true){
if((i__4819__auto___38130 < len__4818__auto___38127)){
args__4824__auto__.push((arguments[i__4819__auto___38130]));

var G__38131 = (i__4819__auto___38130 + (1));
i__4819__auto___38130 = G__38131;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__35867){
var map__35868 = p__35867;
var map__35868__$1 = cljs.core.__destructure_map(map__35868);
var opts = map__35868__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq35864){
var G__35866 = cljs.core.first(seq35864);
var seq35864__$1 = cljs.core.next(seq35864);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35866,seq35864__$1);
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
var G__35870 = arguments.length;
switch (G__35870) {
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
var c__35744__auto___38141 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35745__auto__ = (function (){var switch__35549__auto__ = (function (state_35904){
var state_val_35905 = (state_35904[(1)]);
if((state_val_35905 === (7))){
var inst_35900 = (state_35904[(2)]);
var state_35904__$1 = state_35904;
var statearr_35910_38142 = state_35904__$1;
(statearr_35910_38142[(2)] = inst_35900);

(statearr_35910_38142[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35905 === (1))){
var state_35904__$1 = state_35904;
var statearr_35911_38143 = state_35904__$1;
(statearr_35911_38143[(2)] = null);

(statearr_35911_38143[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35905 === (4))){
var inst_35879 = (state_35904[(7)]);
var inst_35879__$1 = (state_35904[(2)]);
var inst_35880 = (inst_35879__$1 == null);
var state_35904__$1 = (function (){var statearr_35912 = state_35904;
(statearr_35912[(7)] = inst_35879__$1);

return statearr_35912;
})();
if(cljs.core.truth_(inst_35880)){
var statearr_35913_38153 = state_35904__$1;
(statearr_35913_38153[(1)] = (5));

} else {
var statearr_35914_38154 = state_35904__$1;
(statearr_35914_38154[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35905 === (13))){
var state_35904__$1 = state_35904;
var statearr_35916_38155 = state_35904__$1;
(statearr_35916_38155[(2)] = null);

(statearr_35916_38155[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35905 === (6))){
var inst_35879 = (state_35904[(7)]);
var state_35904__$1 = state_35904;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35904__$1,(11),to,inst_35879);
} else {
if((state_val_35905 === (3))){
var inst_35902 = (state_35904[(2)]);
var state_35904__$1 = state_35904;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35904__$1,inst_35902);
} else {
if((state_val_35905 === (12))){
var state_35904__$1 = state_35904;
var statearr_35917_38156 = state_35904__$1;
(statearr_35917_38156[(2)] = null);

(statearr_35917_38156[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35905 === (2))){
var state_35904__$1 = state_35904;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35904__$1,(4),from);
} else {
if((state_val_35905 === (11))){
var inst_35893 = (state_35904[(2)]);
var state_35904__$1 = state_35904;
if(cljs.core.truth_(inst_35893)){
var statearr_35918_38157 = state_35904__$1;
(statearr_35918_38157[(1)] = (12));

} else {
var statearr_35919_38158 = state_35904__$1;
(statearr_35919_38158[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35905 === (9))){
var state_35904__$1 = state_35904;
var statearr_35920_38161 = state_35904__$1;
(statearr_35920_38161[(2)] = null);

(statearr_35920_38161[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35905 === (5))){
var state_35904__$1 = state_35904;
if(cljs.core.truth_(close_QMARK_)){
var statearr_35921_38164 = state_35904__$1;
(statearr_35921_38164[(1)] = (8));

} else {
var statearr_35922_38165 = state_35904__$1;
(statearr_35922_38165[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35905 === (14))){
var inst_35898 = (state_35904[(2)]);
var state_35904__$1 = state_35904;
var statearr_35924_38166 = state_35904__$1;
(statearr_35924_38166[(2)] = inst_35898);

(statearr_35924_38166[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35905 === (10))){
var inst_35890 = (state_35904[(2)]);
var state_35904__$1 = state_35904;
var statearr_35925_38167 = state_35904__$1;
(statearr_35925_38167[(2)] = inst_35890);

(statearr_35925_38167[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35905 === (8))){
var inst_35887 = cljs.core.async.close_BANG_(to);
var state_35904__$1 = state_35904;
var statearr_35926_38168 = state_35904__$1;
(statearr_35926_38168[(2)] = inst_35887);

(statearr_35926_38168[(1)] = (10));


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
var cljs$core$async$state_machine__35550__auto__ = null;
var cljs$core$async$state_machine__35550__auto____0 = (function (){
var statearr_35927 = [null,null,null,null,null,null,null,null];
(statearr_35927[(0)] = cljs$core$async$state_machine__35550__auto__);

(statearr_35927[(1)] = (1));

return statearr_35927;
});
var cljs$core$async$state_machine__35550__auto____1 = (function (state_35904){
while(true){
var ret_value__35551__auto__ = (function (){try{while(true){
var result__35552__auto__ = switch__35549__auto__(state_35904);
if(cljs.core.keyword_identical_QMARK_(result__35552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35552__auto__;
}
break;
}
}catch (e35928){var ex__35553__auto__ = e35928;
var statearr_35929_38176 = state_35904;
(statearr_35929_38176[(2)] = ex__35553__auto__);


if(cljs.core.seq((state_35904[(4)]))){
var statearr_35930_38177 = state_35904;
(statearr_35930_38177[(1)] = cljs.core.first((state_35904[(4)])));

} else {
throw ex__35553__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38178 = state_35904;
state_35904 = G__38178;
continue;
} else {
return ret_value__35551__auto__;
}
break;
}
});
cljs$core$async$state_machine__35550__auto__ = function(state_35904){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35550__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35550__auto____1.call(this,state_35904);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35550__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35550__auto____0;
cljs$core$async$state_machine__35550__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35550__auto____1;
return cljs$core$async$state_machine__35550__auto__;
})()
})();
var state__35746__auto__ = (function (){var statearr_35931 = f__35745__auto__();
(statearr_35931[(6)] = c__35744__auto___38141);

return statearr_35931;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35746__auto__);
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
var process = (function (p__35934){
var vec__35935 = p__35934;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35935,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35935,(1),null);
var job = vec__35935;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__35744__auto___38180 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35745__auto__ = (function (){var switch__35549__auto__ = (function (state_35942){
var state_val_35943 = (state_35942[(1)]);
if((state_val_35943 === (1))){
var state_35942__$1 = state_35942;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35942__$1,(2),res,v);
} else {
if((state_val_35943 === (2))){
var inst_35939 = (state_35942[(2)]);
var inst_35940 = cljs.core.async.close_BANG_(res);
var state_35942__$1 = (function (){var statearr_35944 = state_35942;
(statearr_35944[(7)] = inst_35939);

return statearr_35944;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_35942__$1,inst_35940);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__35550__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35550__auto____0 = (function (){
var statearr_35945 = [null,null,null,null,null,null,null,null];
(statearr_35945[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35550__auto__);

(statearr_35945[(1)] = (1));

return statearr_35945;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35550__auto____1 = (function (state_35942){
while(true){
var ret_value__35551__auto__ = (function (){try{while(true){
var result__35552__auto__ = switch__35549__auto__(state_35942);
if(cljs.core.keyword_identical_QMARK_(result__35552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35552__auto__;
}
break;
}
}catch (e35946){var ex__35553__auto__ = e35946;
var statearr_35947_38184 = state_35942;
(statearr_35947_38184[(2)] = ex__35553__auto__);


if(cljs.core.seq((state_35942[(4)]))){
var statearr_35948_38185 = state_35942;
(statearr_35948_38185[(1)] = cljs.core.first((state_35942[(4)])));

} else {
throw ex__35553__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38186 = state_35942;
state_35942 = G__38186;
continue;
} else {
return ret_value__35551__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35550__auto__ = function(state_35942){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35550__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35550__auto____1.call(this,state_35942);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__35550__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35550__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35550__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35550__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35550__auto__;
})()
})();
var state__35746__auto__ = (function (){var statearr_35949 = f__35745__auto__();
(statearr_35949[(6)] = c__35744__auto___38180);

return statearr_35949;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35746__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__35950){
var vec__35951 = p__35950;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35951,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35951,(1),null);
var job = vec__35951;
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
var n__4695__auto___38194 = n;
var __38195 = (0);
while(true){
if((__38195 < n__4695__auto___38194)){
var G__35955_38196 = type;
var G__35955_38197__$1 = (((G__35955_38196 instanceof cljs.core.Keyword))?G__35955_38196.fqn:null);
switch (G__35955_38197__$1) {
case "compute":
var c__35744__auto___38199 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__38195,c__35744__auto___38199,G__35955_38196,G__35955_38197__$1,n__4695__auto___38194,jobs,results,process,async){
return (function (){
var f__35745__auto__ = (function (){var switch__35549__auto__ = ((function (__38195,c__35744__auto___38199,G__35955_38196,G__35955_38197__$1,n__4695__auto___38194,jobs,results,process,async){
return (function (state_35976){
var state_val_35977 = (state_35976[(1)]);
if((state_val_35977 === (1))){
var state_35976__$1 = state_35976;
var statearr_35978_38200 = state_35976__$1;
(statearr_35978_38200[(2)] = null);

(statearr_35978_38200[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35977 === (2))){
var state_35976__$1 = state_35976;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35976__$1,(4),jobs);
} else {
if((state_val_35977 === (3))){
var inst_35974 = (state_35976[(2)]);
var state_35976__$1 = state_35976;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35976__$1,inst_35974);
} else {
if((state_val_35977 === (4))){
var inst_35966 = (state_35976[(2)]);
var inst_35967 = process(inst_35966);
var state_35976__$1 = state_35976;
if(cljs.core.truth_(inst_35967)){
var statearr_35982_38201 = state_35976__$1;
(statearr_35982_38201[(1)] = (5));

} else {
var statearr_35983_38203 = state_35976__$1;
(statearr_35983_38203[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35977 === (5))){
var state_35976__$1 = state_35976;
var statearr_35984_38205 = state_35976__$1;
(statearr_35984_38205[(2)] = null);

(statearr_35984_38205[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35977 === (6))){
var state_35976__$1 = state_35976;
var statearr_35988_38206 = state_35976__$1;
(statearr_35988_38206[(2)] = null);

(statearr_35988_38206[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35977 === (7))){
var inst_35972 = (state_35976[(2)]);
var state_35976__$1 = state_35976;
var statearr_35989_38208 = state_35976__$1;
(statearr_35989_38208[(2)] = inst_35972);

(statearr_35989_38208[(1)] = (3));


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
});})(__38195,c__35744__auto___38199,G__35955_38196,G__35955_38197__$1,n__4695__auto___38194,jobs,results,process,async))
;
return ((function (__38195,switch__35549__auto__,c__35744__auto___38199,G__35955_38196,G__35955_38197__$1,n__4695__auto___38194,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__35550__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35550__auto____0 = (function (){
var statearr_35990 = [null,null,null,null,null,null,null];
(statearr_35990[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35550__auto__);

(statearr_35990[(1)] = (1));

return statearr_35990;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35550__auto____1 = (function (state_35976){
while(true){
var ret_value__35551__auto__ = (function (){try{while(true){
var result__35552__auto__ = switch__35549__auto__(state_35976);
if(cljs.core.keyword_identical_QMARK_(result__35552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35552__auto__;
}
break;
}
}catch (e35991){var ex__35553__auto__ = e35991;
var statearr_35992_38213 = state_35976;
(statearr_35992_38213[(2)] = ex__35553__auto__);


if(cljs.core.seq((state_35976[(4)]))){
var statearr_35993_38214 = state_35976;
(statearr_35993_38214[(1)] = cljs.core.first((state_35976[(4)])));

} else {
throw ex__35553__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38215 = state_35976;
state_35976 = G__38215;
continue;
} else {
return ret_value__35551__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35550__auto__ = function(state_35976){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35550__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35550__auto____1.call(this,state_35976);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__35550__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35550__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35550__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35550__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35550__auto__;
})()
;})(__38195,switch__35549__auto__,c__35744__auto___38199,G__35955_38196,G__35955_38197__$1,n__4695__auto___38194,jobs,results,process,async))
})();
var state__35746__auto__ = (function (){var statearr_35994 = f__35745__auto__();
(statearr_35994[(6)] = c__35744__auto___38199);

return statearr_35994;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35746__auto__);
});})(__38195,c__35744__auto___38199,G__35955_38196,G__35955_38197__$1,n__4695__auto___38194,jobs,results,process,async))
);


break;
case "async":
var c__35744__auto___38216 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__38195,c__35744__auto___38216,G__35955_38196,G__35955_38197__$1,n__4695__auto___38194,jobs,results,process,async){
return (function (){
var f__35745__auto__ = (function (){var switch__35549__auto__ = ((function (__38195,c__35744__auto___38216,G__35955_38196,G__35955_38197__$1,n__4695__auto___38194,jobs,results,process,async){
return (function (state_36010){
var state_val_36011 = (state_36010[(1)]);
if((state_val_36011 === (1))){
var state_36010__$1 = state_36010;
var statearr_36012_38218 = state_36010__$1;
(statearr_36012_38218[(2)] = null);

(statearr_36012_38218[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36011 === (2))){
var state_36010__$1 = state_36010;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36010__$1,(4),jobs);
} else {
if((state_val_36011 === (3))){
var inst_36008 = (state_36010[(2)]);
var state_36010__$1 = state_36010;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36010__$1,inst_36008);
} else {
if((state_val_36011 === (4))){
var inst_36000 = (state_36010[(2)]);
var inst_36001 = async(inst_36000);
var state_36010__$1 = state_36010;
if(cljs.core.truth_(inst_36001)){
var statearr_36013_38220 = state_36010__$1;
(statearr_36013_38220[(1)] = (5));

} else {
var statearr_36014_38221 = state_36010__$1;
(statearr_36014_38221[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36011 === (5))){
var state_36010__$1 = state_36010;
var statearr_36016_38222 = state_36010__$1;
(statearr_36016_38222[(2)] = null);

(statearr_36016_38222[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36011 === (6))){
var state_36010__$1 = state_36010;
var statearr_36018_38223 = state_36010__$1;
(statearr_36018_38223[(2)] = null);

(statearr_36018_38223[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36011 === (7))){
var inst_36006 = (state_36010[(2)]);
var state_36010__$1 = state_36010;
var statearr_36020_38224 = state_36010__$1;
(statearr_36020_38224[(2)] = inst_36006);

(statearr_36020_38224[(1)] = (3));


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
});})(__38195,c__35744__auto___38216,G__35955_38196,G__35955_38197__$1,n__4695__auto___38194,jobs,results,process,async))
;
return ((function (__38195,switch__35549__auto__,c__35744__auto___38216,G__35955_38196,G__35955_38197__$1,n__4695__auto___38194,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__35550__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35550__auto____0 = (function (){
var statearr_36023 = [null,null,null,null,null,null,null];
(statearr_36023[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35550__auto__);

(statearr_36023[(1)] = (1));

return statearr_36023;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35550__auto____1 = (function (state_36010){
while(true){
var ret_value__35551__auto__ = (function (){try{while(true){
var result__35552__auto__ = switch__35549__auto__(state_36010);
if(cljs.core.keyword_identical_QMARK_(result__35552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35552__auto__;
}
break;
}
}catch (e36025){var ex__35553__auto__ = e36025;
var statearr_36026_38225 = state_36010;
(statearr_36026_38225[(2)] = ex__35553__auto__);


if(cljs.core.seq((state_36010[(4)]))){
var statearr_36028_38226 = state_36010;
(statearr_36028_38226[(1)] = cljs.core.first((state_36010[(4)])));

} else {
throw ex__35553__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38227 = state_36010;
state_36010 = G__38227;
continue;
} else {
return ret_value__35551__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35550__auto__ = function(state_36010){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35550__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35550__auto____1.call(this,state_36010);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__35550__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35550__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35550__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35550__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35550__auto__;
})()
;})(__38195,switch__35549__auto__,c__35744__auto___38216,G__35955_38196,G__35955_38197__$1,n__4695__auto___38194,jobs,results,process,async))
})();
var state__35746__auto__ = (function (){var statearr_36032 = f__35745__auto__();
(statearr_36032[(6)] = c__35744__auto___38216);

return statearr_36032;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35746__auto__);
});})(__38195,c__35744__auto___38216,G__35955_38196,G__35955_38197__$1,n__4695__auto___38194,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35955_38197__$1)].join('')));

}

var G__38229 = (__38195 + (1));
__38195 = G__38229;
continue;
} else {
}
break;
}

var c__35744__auto___38231 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35745__auto__ = (function (){var switch__35549__auto__ = (function (state_36059){
var state_val_36060 = (state_36059[(1)]);
if((state_val_36060 === (7))){
var inst_36055 = (state_36059[(2)]);
var state_36059__$1 = state_36059;
var statearr_36072_38233 = state_36059__$1;
(statearr_36072_38233[(2)] = inst_36055);

(statearr_36072_38233[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36060 === (1))){
var state_36059__$1 = state_36059;
var statearr_36073_38234 = state_36059__$1;
(statearr_36073_38234[(2)] = null);

(statearr_36073_38234[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36060 === (4))){
var inst_36037 = (state_36059[(7)]);
var inst_36037__$1 = (state_36059[(2)]);
var inst_36038 = (inst_36037__$1 == null);
var state_36059__$1 = (function (){var statearr_36074 = state_36059;
(statearr_36074[(7)] = inst_36037__$1);

return statearr_36074;
})();
if(cljs.core.truth_(inst_36038)){
var statearr_36192_38235 = state_36059__$1;
(statearr_36192_38235[(1)] = (5));

} else {
var statearr_36193_38236 = state_36059__$1;
(statearr_36193_38236[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36060 === (6))){
var inst_36037 = (state_36059[(7)]);
var inst_36042 = (state_36059[(8)]);
var inst_36042__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_36044 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36047 = [inst_36037,inst_36042__$1];
var inst_36048 = (new cljs.core.PersistentVector(null,2,(5),inst_36044,inst_36047,null));
var state_36059__$1 = (function (){var statearr_36201 = state_36059;
(statearr_36201[(8)] = inst_36042__$1);

return statearr_36201;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36059__$1,(8),jobs,inst_36048);
} else {
if((state_val_36060 === (3))){
var inst_36057 = (state_36059[(2)]);
var state_36059__$1 = state_36059;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36059__$1,inst_36057);
} else {
if((state_val_36060 === (2))){
var state_36059__$1 = state_36059;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36059__$1,(4),from);
} else {
if((state_val_36060 === (9))){
var inst_36052 = (state_36059[(2)]);
var state_36059__$1 = (function (){var statearr_36202 = state_36059;
(statearr_36202[(9)] = inst_36052);

return statearr_36202;
})();
var statearr_36203_38237 = state_36059__$1;
(statearr_36203_38237[(2)] = null);

(statearr_36203_38237[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36060 === (5))){
var inst_36040 = cljs.core.async.close_BANG_(jobs);
var state_36059__$1 = state_36059;
var statearr_36204_38245 = state_36059__$1;
(statearr_36204_38245[(2)] = inst_36040);

(statearr_36204_38245[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36060 === (8))){
var inst_36042 = (state_36059[(8)]);
var inst_36050 = (state_36059[(2)]);
var state_36059__$1 = (function (){var statearr_36205 = state_36059;
(statearr_36205[(10)] = inst_36050);

return statearr_36205;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36059__$1,(9),results,inst_36042);
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
var cljs$core$async$pipeline_STAR__$_state_machine__35550__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35550__auto____0 = (function (){
var statearr_36208 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36208[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35550__auto__);

(statearr_36208[(1)] = (1));

return statearr_36208;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35550__auto____1 = (function (state_36059){
while(true){
var ret_value__35551__auto__ = (function (){try{while(true){
var result__35552__auto__ = switch__35549__auto__(state_36059);
if(cljs.core.keyword_identical_QMARK_(result__35552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35552__auto__;
}
break;
}
}catch (e36209){var ex__35553__auto__ = e36209;
var statearr_36210_38246 = state_36059;
(statearr_36210_38246[(2)] = ex__35553__auto__);


if(cljs.core.seq((state_36059[(4)]))){
var statearr_36211_38247 = state_36059;
(statearr_36211_38247[(1)] = cljs.core.first((state_36059[(4)])));

} else {
throw ex__35553__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38248 = state_36059;
state_36059 = G__38248;
continue;
} else {
return ret_value__35551__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35550__auto__ = function(state_36059){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35550__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35550__auto____1.call(this,state_36059);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__35550__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35550__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35550__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35550__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35550__auto__;
})()
})();
var state__35746__auto__ = (function (){var statearr_36214 = f__35745__auto__();
(statearr_36214[(6)] = c__35744__auto___38231);

return statearr_36214;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35746__auto__);
}));


var c__35744__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35745__auto__ = (function (){var switch__35549__auto__ = (function (state_36266){
var state_val_36267 = (state_36266[(1)]);
if((state_val_36267 === (7))){
var inst_36261 = (state_36266[(2)]);
var state_36266__$1 = state_36266;
var statearr_36269_38250 = state_36266__$1;
(statearr_36269_38250[(2)] = inst_36261);

(statearr_36269_38250[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36267 === (20))){
var state_36266__$1 = state_36266;
var statearr_36270_38251 = state_36266__$1;
(statearr_36270_38251[(2)] = null);

(statearr_36270_38251[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36267 === (1))){
var state_36266__$1 = state_36266;
var statearr_36271_38252 = state_36266__$1;
(statearr_36271_38252[(2)] = null);

(statearr_36271_38252[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36267 === (4))){
var inst_36217 = (state_36266[(7)]);
var inst_36217__$1 = (state_36266[(2)]);
var inst_36218 = (inst_36217__$1 == null);
var state_36266__$1 = (function (){var statearr_36274 = state_36266;
(statearr_36274[(7)] = inst_36217__$1);

return statearr_36274;
})();
if(cljs.core.truth_(inst_36218)){
var statearr_36275_38253 = state_36266__$1;
(statearr_36275_38253[(1)] = (5));

} else {
var statearr_36276_38254 = state_36266__$1;
(statearr_36276_38254[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36267 === (15))){
var inst_36242 = (state_36266[(8)]);
var state_36266__$1 = state_36266;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36266__$1,(18),to,inst_36242);
} else {
if((state_val_36267 === (21))){
var inst_36256 = (state_36266[(2)]);
var state_36266__$1 = state_36266;
var statearr_36277_38255 = state_36266__$1;
(statearr_36277_38255[(2)] = inst_36256);

(statearr_36277_38255[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36267 === (13))){
var inst_36258 = (state_36266[(2)]);
var state_36266__$1 = (function (){var statearr_36278 = state_36266;
(statearr_36278[(9)] = inst_36258);

return statearr_36278;
})();
var statearr_36279_38256 = state_36266__$1;
(statearr_36279_38256[(2)] = null);

(statearr_36279_38256[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36267 === (6))){
var inst_36217 = (state_36266[(7)]);
var state_36266__$1 = state_36266;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36266__$1,(11),inst_36217);
} else {
if((state_val_36267 === (17))){
var inst_36250 = (state_36266[(2)]);
var state_36266__$1 = state_36266;
if(cljs.core.truth_(inst_36250)){
var statearr_36280_38257 = state_36266__$1;
(statearr_36280_38257[(1)] = (19));

} else {
var statearr_36281_38258 = state_36266__$1;
(statearr_36281_38258[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36267 === (3))){
var inst_36263 = (state_36266[(2)]);
var state_36266__$1 = state_36266;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36266__$1,inst_36263);
} else {
if((state_val_36267 === (12))){
var inst_36239 = (state_36266[(10)]);
var state_36266__$1 = state_36266;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36266__$1,(14),inst_36239);
} else {
if((state_val_36267 === (2))){
var state_36266__$1 = state_36266;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36266__$1,(4),results);
} else {
if((state_val_36267 === (19))){
var state_36266__$1 = state_36266;
var statearr_36283_38259 = state_36266__$1;
(statearr_36283_38259[(2)] = null);

(statearr_36283_38259[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36267 === (11))){
var inst_36239 = (state_36266[(2)]);
var state_36266__$1 = (function (){var statearr_36284 = state_36266;
(statearr_36284[(10)] = inst_36239);

return statearr_36284;
})();
var statearr_36287_38260 = state_36266__$1;
(statearr_36287_38260[(2)] = null);

(statearr_36287_38260[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36267 === (9))){
var state_36266__$1 = state_36266;
var statearr_36289_38263 = state_36266__$1;
(statearr_36289_38263[(2)] = null);

(statearr_36289_38263[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36267 === (5))){
var state_36266__$1 = state_36266;
if(cljs.core.truth_(close_QMARK_)){
var statearr_36290_38265 = state_36266__$1;
(statearr_36290_38265[(1)] = (8));

} else {
var statearr_36292_38266 = state_36266__$1;
(statearr_36292_38266[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36267 === (14))){
var inst_36244 = (state_36266[(11)]);
var inst_36242 = (state_36266[(8)]);
var inst_36242__$1 = (state_36266[(2)]);
var inst_36243 = (inst_36242__$1 == null);
var inst_36244__$1 = cljs.core.not(inst_36243);
var state_36266__$1 = (function (){var statearr_36313 = state_36266;
(statearr_36313[(11)] = inst_36244__$1);

(statearr_36313[(8)] = inst_36242__$1);

return statearr_36313;
})();
if(inst_36244__$1){
var statearr_36315_38268 = state_36266__$1;
(statearr_36315_38268[(1)] = (15));

} else {
var statearr_36316_38269 = state_36266__$1;
(statearr_36316_38269[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36267 === (16))){
var inst_36244 = (state_36266[(11)]);
var state_36266__$1 = state_36266;
var statearr_36317_38270 = state_36266__$1;
(statearr_36317_38270[(2)] = inst_36244);

(statearr_36317_38270[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36267 === (10))){
var inst_36235 = (state_36266[(2)]);
var state_36266__$1 = state_36266;
var statearr_36319_38271 = state_36266__$1;
(statearr_36319_38271[(2)] = inst_36235);

(statearr_36319_38271[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36267 === (18))){
var inst_36247 = (state_36266[(2)]);
var state_36266__$1 = state_36266;
var statearr_36320_38272 = state_36266__$1;
(statearr_36320_38272[(2)] = inst_36247);

(statearr_36320_38272[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36267 === (8))){
var inst_36221 = cljs.core.async.close_BANG_(to);
var state_36266__$1 = state_36266;
var statearr_36321_38275 = state_36266__$1;
(statearr_36321_38275[(2)] = inst_36221);

(statearr_36321_38275[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__35550__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35550__auto____0 = (function (){
var statearr_36322 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36322[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35550__auto__);

(statearr_36322[(1)] = (1));

return statearr_36322;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35550__auto____1 = (function (state_36266){
while(true){
var ret_value__35551__auto__ = (function (){try{while(true){
var result__35552__auto__ = switch__35549__auto__(state_36266);
if(cljs.core.keyword_identical_QMARK_(result__35552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35552__auto__;
}
break;
}
}catch (e36323){var ex__35553__auto__ = e36323;
var statearr_36324_38276 = state_36266;
(statearr_36324_38276[(2)] = ex__35553__auto__);


if(cljs.core.seq((state_36266[(4)]))){
var statearr_36325_38277 = state_36266;
(statearr_36325_38277[(1)] = cljs.core.first((state_36266[(4)])));

} else {
throw ex__35553__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38278 = state_36266;
state_36266 = G__38278;
continue;
} else {
return ret_value__35551__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35550__auto__ = function(state_36266){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35550__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35550__auto____1.call(this,state_36266);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__35550__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35550__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35550__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35550__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35550__auto__;
})()
})();
var state__35746__auto__ = (function (){var statearr_36338 = f__35745__auto__();
(statearr_36338[(6)] = c__35744__auto__);

return statearr_36338;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35746__auto__);
}));

return c__35744__auto__;
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
var G__36349 = arguments.length;
switch (G__36349) {
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
var G__36351 = arguments.length;
switch (G__36351) {
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
var G__36353 = arguments.length;
switch (G__36353) {
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
var c__35744__auto___38285 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35745__auto__ = (function (){var switch__35549__auto__ = (function (state_36380){
var state_val_36381 = (state_36380[(1)]);
if((state_val_36381 === (7))){
var inst_36376 = (state_36380[(2)]);
var state_36380__$1 = state_36380;
var statearr_36382_38287 = state_36380__$1;
(statearr_36382_38287[(2)] = inst_36376);

(statearr_36382_38287[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36381 === (1))){
var state_36380__$1 = state_36380;
var statearr_36383_38288 = state_36380__$1;
(statearr_36383_38288[(2)] = null);

(statearr_36383_38288[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36381 === (4))){
var inst_36357 = (state_36380[(7)]);
var inst_36357__$1 = (state_36380[(2)]);
var inst_36358 = (inst_36357__$1 == null);
var state_36380__$1 = (function (){var statearr_36384 = state_36380;
(statearr_36384[(7)] = inst_36357__$1);

return statearr_36384;
})();
if(cljs.core.truth_(inst_36358)){
var statearr_36385_38289 = state_36380__$1;
(statearr_36385_38289[(1)] = (5));

} else {
var statearr_36386_38290 = state_36380__$1;
(statearr_36386_38290[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36381 === (13))){
var state_36380__$1 = state_36380;
var statearr_36387_38291 = state_36380__$1;
(statearr_36387_38291[(2)] = null);

(statearr_36387_38291[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36381 === (6))){
var inst_36357 = (state_36380[(7)]);
var inst_36363 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_36357) : p.call(null,inst_36357));
var state_36380__$1 = state_36380;
if(cljs.core.truth_(inst_36363)){
var statearr_36388_38292 = state_36380__$1;
(statearr_36388_38292[(1)] = (9));

} else {
var statearr_36389_38293 = state_36380__$1;
(statearr_36389_38293[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36381 === (3))){
var inst_36378 = (state_36380[(2)]);
var state_36380__$1 = state_36380;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36380__$1,inst_36378);
} else {
if((state_val_36381 === (12))){
var state_36380__$1 = state_36380;
var statearr_36390_38294 = state_36380__$1;
(statearr_36390_38294[(2)] = null);

(statearr_36390_38294[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36381 === (2))){
var state_36380__$1 = state_36380;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36380__$1,(4),ch);
} else {
if((state_val_36381 === (11))){
var inst_36357 = (state_36380[(7)]);
var inst_36367 = (state_36380[(2)]);
var state_36380__$1 = state_36380;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36380__$1,(8),inst_36367,inst_36357);
} else {
if((state_val_36381 === (9))){
var state_36380__$1 = state_36380;
var statearr_36392_38295 = state_36380__$1;
(statearr_36392_38295[(2)] = tc);

(statearr_36392_38295[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36381 === (5))){
var inst_36360 = cljs.core.async.close_BANG_(tc);
var inst_36361 = cljs.core.async.close_BANG_(fc);
var state_36380__$1 = (function (){var statearr_36393 = state_36380;
(statearr_36393[(8)] = inst_36360);

return statearr_36393;
})();
var statearr_36394_38296 = state_36380__$1;
(statearr_36394_38296[(2)] = inst_36361);

(statearr_36394_38296[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36381 === (14))){
var inst_36374 = (state_36380[(2)]);
var state_36380__$1 = state_36380;
var statearr_36395_38297 = state_36380__$1;
(statearr_36395_38297[(2)] = inst_36374);

(statearr_36395_38297[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36381 === (10))){
var state_36380__$1 = state_36380;
var statearr_36396_38298 = state_36380__$1;
(statearr_36396_38298[(2)] = fc);

(statearr_36396_38298[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36381 === (8))){
var inst_36369 = (state_36380[(2)]);
var state_36380__$1 = state_36380;
if(cljs.core.truth_(inst_36369)){
var statearr_36398_38299 = state_36380__$1;
(statearr_36398_38299[(1)] = (12));

} else {
var statearr_36399_38300 = state_36380__$1;
(statearr_36399_38300[(1)] = (13));

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
var cljs$core$async$state_machine__35550__auto__ = null;
var cljs$core$async$state_machine__35550__auto____0 = (function (){
var statearr_36400 = [null,null,null,null,null,null,null,null,null];
(statearr_36400[(0)] = cljs$core$async$state_machine__35550__auto__);

(statearr_36400[(1)] = (1));

return statearr_36400;
});
var cljs$core$async$state_machine__35550__auto____1 = (function (state_36380){
while(true){
var ret_value__35551__auto__ = (function (){try{while(true){
var result__35552__auto__ = switch__35549__auto__(state_36380);
if(cljs.core.keyword_identical_QMARK_(result__35552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35552__auto__;
}
break;
}
}catch (e36402){var ex__35553__auto__ = e36402;
var statearr_36403_38301 = state_36380;
(statearr_36403_38301[(2)] = ex__35553__auto__);


if(cljs.core.seq((state_36380[(4)]))){
var statearr_36404_38302 = state_36380;
(statearr_36404_38302[(1)] = cljs.core.first((state_36380[(4)])));

} else {
throw ex__35553__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38303 = state_36380;
state_36380 = G__38303;
continue;
} else {
return ret_value__35551__auto__;
}
break;
}
});
cljs$core$async$state_machine__35550__auto__ = function(state_36380){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35550__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35550__auto____1.call(this,state_36380);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35550__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35550__auto____0;
cljs$core$async$state_machine__35550__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35550__auto____1;
return cljs$core$async$state_machine__35550__auto__;
})()
})();
var state__35746__auto__ = (function (){var statearr_36406 = f__35745__auto__();
(statearr_36406[(6)] = c__35744__auto___38285);

return statearr_36406;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35746__auto__);
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
var c__35744__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35745__auto__ = (function (){var switch__35549__auto__ = (function (state_36430){
var state_val_36431 = (state_36430[(1)]);
if((state_val_36431 === (7))){
var inst_36425 = (state_36430[(2)]);
var state_36430__$1 = state_36430;
var statearr_36432_38304 = state_36430__$1;
(statearr_36432_38304[(2)] = inst_36425);

(statearr_36432_38304[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36431 === (1))){
var inst_36408 = init;
var inst_36409 = inst_36408;
var state_36430__$1 = (function (){var statearr_36434 = state_36430;
(statearr_36434[(7)] = inst_36409);

return statearr_36434;
})();
var statearr_36435_38305 = state_36430__$1;
(statearr_36435_38305[(2)] = null);

(statearr_36435_38305[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36431 === (4))){
var inst_36412 = (state_36430[(8)]);
var inst_36412__$1 = (state_36430[(2)]);
var inst_36413 = (inst_36412__$1 == null);
var state_36430__$1 = (function (){var statearr_36436 = state_36430;
(statearr_36436[(8)] = inst_36412__$1);

return statearr_36436;
})();
if(cljs.core.truth_(inst_36413)){
var statearr_36437_38307 = state_36430__$1;
(statearr_36437_38307[(1)] = (5));

} else {
var statearr_36438_38308 = state_36430__$1;
(statearr_36438_38308[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36431 === (6))){
var inst_36412 = (state_36430[(8)]);
var inst_36416 = (state_36430[(9)]);
var inst_36409 = (state_36430[(7)]);
var inst_36416__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_36409,inst_36412) : f.call(null,inst_36409,inst_36412));
var inst_36417 = cljs.core.reduced_QMARK_(inst_36416__$1);
var state_36430__$1 = (function (){var statearr_36440 = state_36430;
(statearr_36440[(9)] = inst_36416__$1);

return statearr_36440;
})();
if(inst_36417){
var statearr_36441_38309 = state_36430__$1;
(statearr_36441_38309[(1)] = (8));

} else {
var statearr_36442_38310 = state_36430__$1;
(statearr_36442_38310[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36431 === (3))){
var inst_36427 = (state_36430[(2)]);
var state_36430__$1 = state_36430;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36430__$1,inst_36427);
} else {
if((state_val_36431 === (2))){
var state_36430__$1 = state_36430;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36430__$1,(4),ch);
} else {
if((state_val_36431 === (9))){
var inst_36416 = (state_36430[(9)]);
var inst_36409 = inst_36416;
var state_36430__$1 = (function (){var statearr_36443 = state_36430;
(statearr_36443[(7)] = inst_36409);

return statearr_36443;
})();
var statearr_36444_38315 = state_36430__$1;
(statearr_36444_38315[(2)] = null);

(statearr_36444_38315[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36431 === (5))){
var inst_36409 = (state_36430[(7)]);
var state_36430__$1 = state_36430;
var statearr_36445_38316 = state_36430__$1;
(statearr_36445_38316[(2)] = inst_36409);

(statearr_36445_38316[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36431 === (10))){
var inst_36423 = (state_36430[(2)]);
var state_36430__$1 = state_36430;
var statearr_36446_38317 = state_36430__$1;
(statearr_36446_38317[(2)] = inst_36423);

(statearr_36446_38317[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36431 === (8))){
var inst_36416 = (state_36430[(9)]);
var inst_36419 = cljs.core.deref(inst_36416);
var state_36430__$1 = state_36430;
var statearr_36447_38318 = state_36430__$1;
(statearr_36447_38318[(2)] = inst_36419);

(statearr_36447_38318[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__35550__auto__ = null;
var cljs$core$async$reduce_$_state_machine__35550__auto____0 = (function (){
var statearr_36448 = [null,null,null,null,null,null,null,null,null,null];
(statearr_36448[(0)] = cljs$core$async$reduce_$_state_machine__35550__auto__);

(statearr_36448[(1)] = (1));

return statearr_36448;
});
var cljs$core$async$reduce_$_state_machine__35550__auto____1 = (function (state_36430){
while(true){
var ret_value__35551__auto__ = (function (){try{while(true){
var result__35552__auto__ = switch__35549__auto__(state_36430);
if(cljs.core.keyword_identical_QMARK_(result__35552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35552__auto__;
}
break;
}
}catch (e36449){var ex__35553__auto__ = e36449;
var statearr_36450_38319 = state_36430;
(statearr_36450_38319[(2)] = ex__35553__auto__);


if(cljs.core.seq((state_36430[(4)]))){
var statearr_36451_38320 = state_36430;
(statearr_36451_38320[(1)] = cljs.core.first((state_36430[(4)])));

} else {
throw ex__35553__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38321 = state_36430;
state_36430 = G__38321;
continue;
} else {
return ret_value__35551__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__35550__auto__ = function(state_36430){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__35550__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__35550__auto____1.call(this,state_36430);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__35550__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__35550__auto____0;
cljs$core$async$reduce_$_state_machine__35550__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__35550__auto____1;
return cljs$core$async$reduce_$_state_machine__35550__auto__;
})()
})();
var state__35746__auto__ = (function (){var statearr_36452 = f__35745__auto__();
(statearr_36452[(6)] = c__35744__auto__);

return statearr_36452;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35746__auto__);
}));

return c__35744__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__35744__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35745__auto__ = (function (){var switch__35549__auto__ = (function (state_36459){
var state_val_36460 = (state_36459[(1)]);
if((state_val_36460 === (1))){
var inst_36454 = cljs.core.async.reduce(f__$1,init,ch);
var state_36459__$1 = state_36459;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36459__$1,(2),inst_36454);
} else {
if((state_val_36460 === (2))){
var inst_36456 = (state_36459[(2)]);
var inst_36457 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_36456) : f__$1.call(null,inst_36456));
var state_36459__$1 = state_36459;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36459__$1,inst_36457);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__35550__auto__ = null;
var cljs$core$async$transduce_$_state_machine__35550__auto____0 = (function (){
var statearr_36461 = [null,null,null,null,null,null,null];
(statearr_36461[(0)] = cljs$core$async$transduce_$_state_machine__35550__auto__);

(statearr_36461[(1)] = (1));

return statearr_36461;
});
var cljs$core$async$transduce_$_state_machine__35550__auto____1 = (function (state_36459){
while(true){
var ret_value__35551__auto__ = (function (){try{while(true){
var result__35552__auto__ = switch__35549__auto__(state_36459);
if(cljs.core.keyword_identical_QMARK_(result__35552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35552__auto__;
}
break;
}
}catch (e36462){var ex__35553__auto__ = e36462;
var statearr_36463_38327 = state_36459;
(statearr_36463_38327[(2)] = ex__35553__auto__);


if(cljs.core.seq((state_36459[(4)]))){
var statearr_36464_38328 = state_36459;
(statearr_36464_38328[(1)] = cljs.core.first((state_36459[(4)])));

} else {
throw ex__35553__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38329 = state_36459;
state_36459 = G__38329;
continue;
} else {
return ret_value__35551__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__35550__auto__ = function(state_36459){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__35550__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__35550__auto____1.call(this,state_36459);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__35550__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__35550__auto____0;
cljs$core$async$transduce_$_state_machine__35550__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__35550__auto____1;
return cljs$core$async$transduce_$_state_machine__35550__auto__;
})()
})();
var state__35746__auto__ = (function (){var statearr_36466 = f__35745__auto__();
(statearr_36466[(6)] = c__35744__auto__);

return statearr_36466;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35746__auto__);
}));

return c__35744__auto__;
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
var G__36468 = arguments.length;
switch (G__36468) {
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
var c__35744__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35745__auto__ = (function (){var switch__35549__auto__ = (function (state_36493){
var state_val_36494 = (state_36493[(1)]);
if((state_val_36494 === (7))){
var inst_36475 = (state_36493[(2)]);
var state_36493__$1 = state_36493;
var statearr_36496_38337 = state_36493__$1;
(statearr_36496_38337[(2)] = inst_36475);

(statearr_36496_38337[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36494 === (1))){
var inst_36469 = cljs.core.seq(coll);
var inst_36470 = inst_36469;
var state_36493__$1 = (function (){var statearr_36497 = state_36493;
(statearr_36497[(7)] = inst_36470);

return statearr_36497;
})();
var statearr_36499_38338 = state_36493__$1;
(statearr_36499_38338[(2)] = null);

(statearr_36499_38338[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36494 === (4))){
var inst_36470 = (state_36493[(7)]);
var inst_36473 = cljs.core.first(inst_36470);
var state_36493__$1 = state_36493;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36493__$1,(7),ch,inst_36473);
} else {
if((state_val_36494 === (13))){
var inst_36487 = (state_36493[(2)]);
var state_36493__$1 = state_36493;
var statearr_36500_38342 = state_36493__$1;
(statearr_36500_38342[(2)] = inst_36487);

(statearr_36500_38342[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36494 === (6))){
var inst_36478 = (state_36493[(2)]);
var state_36493__$1 = state_36493;
if(cljs.core.truth_(inst_36478)){
var statearr_36501_38343 = state_36493__$1;
(statearr_36501_38343[(1)] = (8));

} else {
var statearr_36502_38344 = state_36493__$1;
(statearr_36502_38344[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36494 === (3))){
var inst_36491 = (state_36493[(2)]);
var state_36493__$1 = state_36493;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36493__$1,inst_36491);
} else {
if((state_val_36494 === (12))){
var state_36493__$1 = state_36493;
var statearr_36504_38345 = state_36493__$1;
(statearr_36504_38345[(2)] = null);

(statearr_36504_38345[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36494 === (2))){
var inst_36470 = (state_36493[(7)]);
var state_36493__$1 = state_36493;
if(cljs.core.truth_(inst_36470)){
var statearr_36505_38346 = state_36493__$1;
(statearr_36505_38346[(1)] = (4));

} else {
var statearr_36506_38347 = state_36493__$1;
(statearr_36506_38347[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36494 === (11))){
var inst_36484 = cljs.core.async.close_BANG_(ch);
var state_36493__$1 = state_36493;
var statearr_36507_38348 = state_36493__$1;
(statearr_36507_38348[(2)] = inst_36484);

(statearr_36507_38348[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36494 === (9))){
var state_36493__$1 = state_36493;
if(cljs.core.truth_(close_QMARK_)){
var statearr_36508_38349 = state_36493__$1;
(statearr_36508_38349[(1)] = (11));

} else {
var statearr_36509_38351 = state_36493__$1;
(statearr_36509_38351[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36494 === (5))){
var inst_36470 = (state_36493[(7)]);
var state_36493__$1 = state_36493;
var statearr_36510_38355 = state_36493__$1;
(statearr_36510_38355[(2)] = inst_36470);

(statearr_36510_38355[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36494 === (10))){
var inst_36489 = (state_36493[(2)]);
var state_36493__$1 = state_36493;
var statearr_36511_38356 = state_36493__$1;
(statearr_36511_38356[(2)] = inst_36489);

(statearr_36511_38356[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36494 === (8))){
var inst_36470 = (state_36493[(7)]);
var inst_36480 = cljs.core.next(inst_36470);
var inst_36470__$1 = inst_36480;
var state_36493__$1 = (function (){var statearr_36512 = state_36493;
(statearr_36512[(7)] = inst_36470__$1);

return statearr_36512;
})();
var statearr_36514_38357 = state_36493__$1;
(statearr_36514_38357[(2)] = null);

(statearr_36514_38357[(1)] = (2));


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
var cljs$core$async$state_machine__35550__auto__ = null;
var cljs$core$async$state_machine__35550__auto____0 = (function (){
var statearr_36515 = [null,null,null,null,null,null,null,null];
(statearr_36515[(0)] = cljs$core$async$state_machine__35550__auto__);

(statearr_36515[(1)] = (1));

return statearr_36515;
});
var cljs$core$async$state_machine__35550__auto____1 = (function (state_36493){
while(true){
var ret_value__35551__auto__ = (function (){try{while(true){
var result__35552__auto__ = switch__35549__auto__(state_36493);
if(cljs.core.keyword_identical_QMARK_(result__35552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35552__auto__;
}
break;
}
}catch (e36516){var ex__35553__auto__ = e36516;
var statearr_36517_38358 = state_36493;
(statearr_36517_38358[(2)] = ex__35553__auto__);


if(cljs.core.seq((state_36493[(4)]))){
var statearr_36518_38359 = state_36493;
(statearr_36518_38359[(1)] = cljs.core.first((state_36493[(4)])));

} else {
throw ex__35553__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38360 = state_36493;
state_36493 = G__38360;
continue;
} else {
return ret_value__35551__auto__;
}
break;
}
});
cljs$core$async$state_machine__35550__auto__ = function(state_36493){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35550__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35550__auto____1.call(this,state_36493);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35550__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35550__auto____0;
cljs$core$async$state_machine__35550__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35550__auto____1;
return cljs$core$async$state_machine__35550__auto__;
})()
})();
var state__35746__auto__ = (function (){var statearr_36520 = f__35745__auto__();
(statearr_36520[(6)] = c__35744__auto__);

return statearr_36520;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35746__auto__);
}));

return c__35744__auto__;
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
var G__36524 = arguments.length;
switch (G__36524) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_38362 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_38362(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_38369 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_38369(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_38371 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_38371(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_38379 = (function (m){
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36531 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36531 = (function (ch,cs,meta36532){
this.ch = ch;
this.cs = cs;
this.meta36532 = meta36532;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36531.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36533,meta36532__$1){
var self__ = this;
var _36533__$1 = this;
return (new cljs.core.async.t_cljs$core$async36531(self__.ch,self__.cs,meta36532__$1));
}));

(cljs.core.async.t_cljs$core$async36531.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36533){
var self__ = this;
var _36533__$1 = this;
return self__.meta36532;
}));

(cljs.core.async.t_cljs$core$async36531.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36531.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async36531.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36531.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async36531.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async36531.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async36531.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta36532","meta36532",-871949240,null)], null);
}));

(cljs.core.async.t_cljs$core$async36531.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36531.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36531");

(cljs.core.async.t_cljs$core$async36531.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async36531");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36531.
 */
cljs.core.async.__GT_t_cljs$core$async36531 = (function cljs$core$async$mult_$___GT_t_cljs$core$async36531(ch__$1,cs__$1,meta36532){
return (new cljs.core.async.t_cljs$core$async36531(ch__$1,cs__$1,meta36532));
});

}

return (new cljs.core.async.t_cljs$core$async36531(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__35744__auto___38382 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35745__auto__ = (function (){var switch__35549__auto__ = (function (state_36669){
var state_val_36670 = (state_36669[(1)]);
if((state_val_36670 === (7))){
var inst_36665 = (state_36669[(2)]);
var state_36669__$1 = state_36669;
var statearr_36672_38387 = state_36669__$1;
(statearr_36672_38387[(2)] = inst_36665);

(statearr_36672_38387[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36670 === (20))){
var inst_36568 = (state_36669[(7)]);
var inst_36580 = cljs.core.first(inst_36568);
var inst_36581 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36580,(0),null);
var inst_36583 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36580,(1),null);
var state_36669__$1 = (function (){var statearr_36673 = state_36669;
(statearr_36673[(8)] = inst_36581);

return statearr_36673;
})();
if(cljs.core.truth_(inst_36583)){
var statearr_36675_38396 = state_36669__$1;
(statearr_36675_38396[(1)] = (22));

} else {
var statearr_36676_38397 = state_36669__$1;
(statearr_36676_38397[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36670 === (27))){
var inst_36611 = (state_36669[(9)]);
var inst_36537 = (state_36669[(10)]);
var inst_36613 = (state_36669[(11)]);
var inst_36618 = (state_36669[(12)]);
var inst_36618__$1 = cljs.core._nth(inst_36611,inst_36613);
var inst_36619 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_36618__$1,inst_36537,done);
var state_36669__$1 = (function (){var statearr_36677 = state_36669;
(statearr_36677[(12)] = inst_36618__$1);

return statearr_36677;
})();
if(cljs.core.truth_(inst_36619)){
var statearr_36678_38406 = state_36669__$1;
(statearr_36678_38406[(1)] = (30));

} else {
var statearr_36680_38407 = state_36669__$1;
(statearr_36680_38407[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36670 === (1))){
var state_36669__$1 = state_36669;
var statearr_36681_38411 = state_36669__$1;
(statearr_36681_38411[(2)] = null);

(statearr_36681_38411[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36670 === (24))){
var inst_36568 = (state_36669[(7)]);
var inst_36588 = (state_36669[(2)]);
var inst_36589 = cljs.core.next(inst_36568);
var inst_36546 = inst_36589;
var inst_36547 = null;
var inst_36548 = (0);
var inst_36549 = (0);
var state_36669__$1 = (function (){var statearr_36682 = state_36669;
(statearr_36682[(13)] = inst_36547);

(statearr_36682[(14)] = inst_36549);

(statearr_36682[(15)] = inst_36588);

(statearr_36682[(16)] = inst_36546);

(statearr_36682[(17)] = inst_36548);

return statearr_36682;
})();
var statearr_36683_38412 = state_36669__$1;
(statearr_36683_38412[(2)] = null);

(statearr_36683_38412[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36670 === (39))){
var state_36669__$1 = state_36669;
var statearr_36688_38416 = state_36669__$1;
(statearr_36688_38416[(2)] = null);

(statearr_36688_38416[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36670 === (4))){
var inst_36537 = (state_36669[(10)]);
var inst_36537__$1 = (state_36669[(2)]);
var inst_36538 = (inst_36537__$1 == null);
var state_36669__$1 = (function (){var statearr_36689 = state_36669;
(statearr_36689[(10)] = inst_36537__$1);

return statearr_36689;
})();
if(cljs.core.truth_(inst_36538)){
var statearr_36691_38417 = state_36669__$1;
(statearr_36691_38417[(1)] = (5));

} else {
var statearr_36692_38418 = state_36669__$1;
(statearr_36692_38418[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36670 === (15))){
var inst_36547 = (state_36669[(13)]);
var inst_36549 = (state_36669[(14)]);
var inst_36546 = (state_36669[(16)]);
var inst_36548 = (state_36669[(17)]);
var inst_36564 = (state_36669[(2)]);
var inst_36565 = (inst_36549 + (1));
var tmp36685 = inst_36547;
var tmp36686 = inst_36546;
var tmp36687 = inst_36548;
var inst_36546__$1 = tmp36686;
var inst_36547__$1 = tmp36685;
var inst_36548__$1 = tmp36687;
var inst_36549__$1 = inst_36565;
var state_36669__$1 = (function (){var statearr_36693 = state_36669;
(statearr_36693[(13)] = inst_36547__$1);

(statearr_36693[(14)] = inst_36549__$1);

(statearr_36693[(16)] = inst_36546__$1);

(statearr_36693[(18)] = inst_36564);

(statearr_36693[(17)] = inst_36548__$1);

return statearr_36693;
})();
var statearr_36694_38427 = state_36669__$1;
(statearr_36694_38427[(2)] = null);

(statearr_36694_38427[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36670 === (21))){
var inst_36592 = (state_36669[(2)]);
var state_36669__$1 = state_36669;
var statearr_36699_38428 = state_36669__$1;
(statearr_36699_38428[(2)] = inst_36592);

(statearr_36699_38428[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36670 === (31))){
var inst_36618 = (state_36669[(12)]);
var inst_36622 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_36618);
var state_36669__$1 = state_36669;
var statearr_36700_38432 = state_36669__$1;
(statearr_36700_38432[(2)] = inst_36622);

(statearr_36700_38432[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36670 === (32))){
var inst_36610 = (state_36669[(19)]);
var inst_36611 = (state_36669[(9)]);
var inst_36612 = (state_36669[(20)]);
var inst_36613 = (state_36669[(11)]);
var inst_36624 = (state_36669[(2)]);
var inst_36625 = (inst_36613 + (1));
var tmp36696 = inst_36610;
var tmp36697 = inst_36611;
var tmp36698 = inst_36612;
var inst_36610__$1 = tmp36696;
var inst_36611__$1 = tmp36697;
var inst_36612__$1 = tmp36698;
var inst_36613__$1 = inst_36625;
var state_36669__$1 = (function (){var statearr_36701 = state_36669;
(statearr_36701[(19)] = inst_36610__$1);

(statearr_36701[(9)] = inst_36611__$1);

(statearr_36701[(21)] = inst_36624);

(statearr_36701[(20)] = inst_36612__$1);

(statearr_36701[(11)] = inst_36613__$1);

return statearr_36701;
})();
var statearr_36702_38437 = state_36669__$1;
(statearr_36702_38437[(2)] = null);

(statearr_36702_38437[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36670 === (40))){
var inst_36637 = (state_36669[(22)]);
var inst_36641 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_36637);
var state_36669__$1 = state_36669;
var statearr_36704_38438 = state_36669__$1;
(statearr_36704_38438[(2)] = inst_36641);

(statearr_36704_38438[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36670 === (33))){
var inst_36628 = (state_36669[(23)]);
var inst_36630 = cljs.core.chunked_seq_QMARK_(inst_36628);
var state_36669__$1 = state_36669;
if(inst_36630){
var statearr_36705_38442 = state_36669__$1;
(statearr_36705_38442[(1)] = (36));

} else {
var statearr_36706_38443 = state_36669__$1;
(statearr_36706_38443[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36670 === (13))){
var inst_36558 = (state_36669[(24)]);
var inst_36561 = cljs.core.async.close_BANG_(inst_36558);
var state_36669__$1 = state_36669;
var statearr_36707_38449 = state_36669__$1;
(statearr_36707_38449[(2)] = inst_36561);

(statearr_36707_38449[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36670 === (22))){
var inst_36581 = (state_36669[(8)]);
var inst_36585 = cljs.core.async.close_BANG_(inst_36581);
var state_36669__$1 = state_36669;
var statearr_36708_38450 = state_36669__$1;
(statearr_36708_38450[(2)] = inst_36585);

(statearr_36708_38450[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36670 === (36))){
var inst_36628 = (state_36669[(23)]);
var inst_36632 = cljs.core.chunk_first(inst_36628);
var inst_36633 = cljs.core.chunk_rest(inst_36628);
var inst_36634 = cljs.core.count(inst_36632);
var inst_36610 = inst_36633;
var inst_36611 = inst_36632;
var inst_36612 = inst_36634;
var inst_36613 = (0);
var state_36669__$1 = (function (){var statearr_36710 = state_36669;
(statearr_36710[(19)] = inst_36610);

(statearr_36710[(9)] = inst_36611);

(statearr_36710[(20)] = inst_36612);

(statearr_36710[(11)] = inst_36613);

return statearr_36710;
})();
var statearr_36711_38452 = state_36669__$1;
(statearr_36711_38452[(2)] = null);

(statearr_36711_38452[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36670 === (41))){
var inst_36628 = (state_36669[(23)]);
var inst_36643 = (state_36669[(2)]);
var inst_36645 = cljs.core.next(inst_36628);
var inst_36610 = inst_36645;
var inst_36611 = null;
var inst_36612 = (0);
var inst_36613 = (0);
var state_36669__$1 = (function (){var statearr_36712 = state_36669;
(statearr_36712[(19)] = inst_36610);

(statearr_36712[(9)] = inst_36611);

(statearr_36712[(25)] = inst_36643);

(statearr_36712[(20)] = inst_36612);

(statearr_36712[(11)] = inst_36613);

return statearr_36712;
})();
var statearr_36713_38453 = state_36669__$1;
(statearr_36713_38453[(2)] = null);

(statearr_36713_38453[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36670 === (43))){
var state_36669__$1 = state_36669;
var statearr_36714_38454 = state_36669__$1;
(statearr_36714_38454[(2)] = null);

(statearr_36714_38454[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36670 === (29))){
var inst_36653 = (state_36669[(2)]);
var state_36669__$1 = state_36669;
var statearr_36715_38455 = state_36669__$1;
(statearr_36715_38455[(2)] = inst_36653);

(statearr_36715_38455[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36670 === (44))){
var inst_36662 = (state_36669[(2)]);
var state_36669__$1 = (function (){var statearr_36717 = state_36669;
(statearr_36717[(26)] = inst_36662);

return statearr_36717;
})();
var statearr_36718_38456 = state_36669__$1;
(statearr_36718_38456[(2)] = null);

(statearr_36718_38456[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36670 === (6))){
var inst_36602 = (state_36669[(27)]);
var inst_36601 = cljs.core.deref(cs);
var inst_36602__$1 = cljs.core.keys(inst_36601);
var inst_36603 = cljs.core.count(inst_36602__$1);
var inst_36604 = cljs.core.reset_BANG_(dctr,inst_36603);
var inst_36609 = cljs.core.seq(inst_36602__$1);
var inst_36610 = inst_36609;
var inst_36611 = null;
var inst_36612 = (0);
var inst_36613 = (0);
var state_36669__$1 = (function (){var statearr_36719 = state_36669;
(statearr_36719[(19)] = inst_36610);

(statearr_36719[(9)] = inst_36611);

(statearr_36719[(27)] = inst_36602__$1);

(statearr_36719[(28)] = inst_36604);

(statearr_36719[(20)] = inst_36612);

(statearr_36719[(11)] = inst_36613);

return statearr_36719;
})();
var statearr_36720_38457 = state_36669__$1;
(statearr_36720_38457[(2)] = null);

(statearr_36720_38457[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36670 === (28))){
var inst_36610 = (state_36669[(19)]);
var inst_36628 = (state_36669[(23)]);
var inst_36628__$1 = cljs.core.seq(inst_36610);
var state_36669__$1 = (function (){var statearr_36721 = state_36669;
(statearr_36721[(23)] = inst_36628__$1);

return statearr_36721;
})();
if(inst_36628__$1){
var statearr_36722_38459 = state_36669__$1;
(statearr_36722_38459[(1)] = (33));

} else {
var statearr_36723_38460 = state_36669__$1;
(statearr_36723_38460[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36670 === (25))){
var inst_36612 = (state_36669[(20)]);
var inst_36613 = (state_36669[(11)]);
var inst_36615 = (inst_36613 < inst_36612);
var inst_36616 = inst_36615;
var state_36669__$1 = state_36669;
if(cljs.core.truth_(inst_36616)){
var statearr_36724_38464 = state_36669__$1;
(statearr_36724_38464[(1)] = (27));

} else {
var statearr_36726_38465 = state_36669__$1;
(statearr_36726_38465[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36670 === (34))){
var state_36669__$1 = state_36669;
var statearr_36727_38466 = state_36669__$1;
(statearr_36727_38466[(2)] = null);

(statearr_36727_38466[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36670 === (17))){
var state_36669__$1 = state_36669;
var statearr_36728_38467 = state_36669__$1;
(statearr_36728_38467[(2)] = null);

(statearr_36728_38467[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36670 === (3))){
var inst_36667 = (state_36669[(2)]);
var state_36669__$1 = state_36669;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36669__$1,inst_36667);
} else {
if((state_val_36670 === (12))){
var inst_36597 = (state_36669[(2)]);
var state_36669__$1 = state_36669;
var statearr_36729_38468 = state_36669__$1;
(statearr_36729_38468[(2)] = inst_36597);

(statearr_36729_38468[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36670 === (2))){
var state_36669__$1 = state_36669;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36669__$1,(4),ch);
} else {
if((state_val_36670 === (23))){
var state_36669__$1 = state_36669;
var statearr_36730_38469 = state_36669__$1;
(statearr_36730_38469[(2)] = null);

(statearr_36730_38469[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36670 === (35))){
var inst_36651 = (state_36669[(2)]);
var state_36669__$1 = state_36669;
var statearr_36731_38472 = state_36669__$1;
(statearr_36731_38472[(2)] = inst_36651);

(statearr_36731_38472[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36670 === (19))){
var inst_36568 = (state_36669[(7)]);
var inst_36572 = cljs.core.chunk_first(inst_36568);
var inst_36573 = cljs.core.chunk_rest(inst_36568);
var inst_36574 = cljs.core.count(inst_36572);
var inst_36546 = inst_36573;
var inst_36547 = inst_36572;
var inst_36548 = inst_36574;
var inst_36549 = (0);
var state_36669__$1 = (function (){var statearr_36733 = state_36669;
(statearr_36733[(13)] = inst_36547);

(statearr_36733[(14)] = inst_36549);

(statearr_36733[(16)] = inst_36546);

(statearr_36733[(17)] = inst_36548);

return statearr_36733;
})();
var statearr_36734_38477 = state_36669__$1;
(statearr_36734_38477[(2)] = null);

(statearr_36734_38477[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36670 === (11))){
var inst_36546 = (state_36669[(16)]);
var inst_36568 = (state_36669[(7)]);
var inst_36568__$1 = cljs.core.seq(inst_36546);
var state_36669__$1 = (function (){var statearr_36735 = state_36669;
(statearr_36735[(7)] = inst_36568__$1);

return statearr_36735;
})();
if(inst_36568__$1){
var statearr_36736_38485 = state_36669__$1;
(statearr_36736_38485[(1)] = (16));

} else {
var statearr_36737_38486 = state_36669__$1;
(statearr_36737_38486[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36670 === (9))){
var inst_36599 = (state_36669[(2)]);
var state_36669__$1 = state_36669;
var statearr_36738_38488 = state_36669__$1;
(statearr_36738_38488[(2)] = inst_36599);

(statearr_36738_38488[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36670 === (5))){
var inst_36544 = cljs.core.deref(cs);
var inst_36545 = cljs.core.seq(inst_36544);
var inst_36546 = inst_36545;
var inst_36547 = null;
var inst_36548 = (0);
var inst_36549 = (0);
var state_36669__$1 = (function (){var statearr_36739 = state_36669;
(statearr_36739[(13)] = inst_36547);

(statearr_36739[(14)] = inst_36549);

(statearr_36739[(16)] = inst_36546);

(statearr_36739[(17)] = inst_36548);

return statearr_36739;
})();
var statearr_36741_38493 = state_36669__$1;
(statearr_36741_38493[(2)] = null);

(statearr_36741_38493[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36670 === (14))){
var state_36669__$1 = state_36669;
var statearr_36742_38494 = state_36669__$1;
(statearr_36742_38494[(2)] = null);

(statearr_36742_38494[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36670 === (45))){
var inst_36659 = (state_36669[(2)]);
var state_36669__$1 = state_36669;
var statearr_36743_38495 = state_36669__$1;
(statearr_36743_38495[(2)] = inst_36659);

(statearr_36743_38495[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36670 === (26))){
var inst_36602 = (state_36669[(27)]);
var inst_36655 = (state_36669[(2)]);
var inst_36656 = cljs.core.seq(inst_36602);
var state_36669__$1 = (function (){var statearr_36744 = state_36669;
(statearr_36744[(29)] = inst_36655);

return statearr_36744;
})();
if(inst_36656){
var statearr_36745_38496 = state_36669__$1;
(statearr_36745_38496[(1)] = (42));

} else {
var statearr_36746_38497 = state_36669__$1;
(statearr_36746_38497[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36670 === (16))){
var inst_36568 = (state_36669[(7)]);
var inst_36570 = cljs.core.chunked_seq_QMARK_(inst_36568);
var state_36669__$1 = state_36669;
if(inst_36570){
var statearr_36747_38498 = state_36669__$1;
(statearr_36747_38498[(1)] = (19));

} else {
var statearr_36748_38499 = state_36669__$1;
(statearr_36748_38499[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36670 === (38))){
var inst_36648 = (state_36669[(2)]);
var state_36669__$1 = state_36669;
var statearr_36749_38501 = state_36669__$1;
(statearr_36749_38501[(2)] = inst_36648);

(statearr_36749_38501[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36670 === (30))){
var state_36669__$1 = state_36669;
var statearr_36751_38505 = state_36669__$1;
(statearr_36751_38505[(2)] = null);

(statearr_36751_38505[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36670 === (10))){
var inst_36547 = (state_36669[(13)]);
var inst_36549 = (state_36669[(14)]);
var inst_36557 = cljs.core._nth(inst_36547,inst_36549);
var inst_36558 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36557,(0),null);
var inst_36559 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36557,(1),null);
var state_36669__$1 = (function (){var statearr_36752 = state_36669;
(statearr_36752[(24)] = inst_36558);

return statearr_36752;
})();
if(cljs.core.truth_(inst_36559)){
var statearr_36753_38508 = state_36669__$1;
(statearr_36753_38508[(1)] = (13));

} else {
var statearr_36754_38509 = state_36669__$1;
(statearr_36754_38509[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36670 === (18))){
var inst_36595 = (state_36669[(2)]);
var state_36669__$1 = state_36669;
var statearr_36755_38512 = state_36669__$1;
(statearr_36755_38512[(2)] = inst_36595);

(statearr_36755_38512[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36670 === (42))){
var state_36669__$1 = state_36669;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36669__$1,(45),dchan);
} else {
if((state_val_36670 === (37))){
var inst_36628 = (state_36669[(23)]);
var inst_36537 = (state_36669[(10)]);
var inst_36637 = (state_36669[(22)]);
var inst_36637__$1 = cljs.core.first(inst_36628);
var inst_36638 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_36637__$1,inst_36537,done);
var state_36669__$1 = (function (){var statearr_36758 = state_36669;
(statearr_36758[(22)] = inst_36637__$1);

return statearr_36758;
})();
if(cljs.core.truth_(inst_36638)){
var statearr_36759_38520 = state_36669__$1;
(statearr_36759_38520[(1)] = (39));

} else {
var statearr_36760_38524 = state_36669__$1;
(statearr_36760_38524[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36670 === (8))){
var inst_36549 = (state_36669[(14)]);
var inst_36548 = (state_36669[(17)]);
var inst_36551 = (inst_36549 < inst_36548);
var inst_36552 = inst_36551;
var state_36669__$1 = state_36669;
if(cljs.core.truth_(inst_36552)){
var statearr_36761_38531 = state_36669__$1;
(statearr_36761_38531[(1)] = (10));

} else {
var statearr_36762_38532 = state_36669__$1;
(statearr_36762_38532[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__35550__auto__ = null;
var cljs$core$async$mult_$_state_machine__35550__auto____0 = (function (){
var statearr_36763 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36763[(0)] = cljs$core$async$mult_$_state_machine__35550__auto__);

(statearr_36763[(1)] = (1));

return statearr_36763;
});
var cljs$core$async$mult_$_state_machine__35550__auto____1 = (function (state_36669){
while(true){
var ret_value__35551__auto__ = (function (){try{while(true){
var result__35552__auto__ = switch__35549__auto__(state_36669);
if(cljs.core.keyword_identical_QMARK_(result__35552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35552__auto__;
}
break;
}
}catch (e36764){var ex__35553__auto__ = e36764;
var statearr_36765_38533 = state_36669;
(statearr_36765_38533[(2)] = ex__35553__auto__);


if(cljs.core.seq((state_36669[(4)]))){
var statearr_36766_38534 = state_36669;
(statearr_36766_38534[(1)] = cljs.core.first((state_36669[(4)])));

} else {
throw ex__35553__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38535 = state_36669;
state_36669 = G__38535;
continue;
} else {
return ret_value__35551__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__35550__auto__ = function(state_36669){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__35550__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__35550__auto____1.call(this,state_36669);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__35550__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__35550__auto____0;
cljs$core$async$mult_$_state_machine__35550__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__35550__auto____1;
return cljs$core$async$mult_$_state_machine__35550__auto__;
})()
})();
var state__35746__auto__ = (function (){var statearr_36769 = f__35745__auto__();
(statearr_36769[(6)] = c__35744__auto___38382);

return statearr_36769;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35746__auto__);
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
var G__36771 = arguments.length;
switch (G__36771) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_38537 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_38537(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_38538 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_38538(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_38539 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_38539(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_38540 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_38540(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_38541 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_38541(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___38542 = arguments.length;
var i__4819__auto___38543 = (0);
while(true){
if((i__4819__auto___38543 < len__4818__auto___38542)){
args__4824__auto__.push((arguments[i__4819__auto___38543]));

var G__38544 = (i__4819__auto___38543 + (1));
i__4819__auto___38543 = G__38544;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((3) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4825__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__36787){
var map__36788 = p__36787;
var map__36788__$1 = cljs.core.__destructure_map(map__36788);
var opts = map__36788__$1;
var statearr_36789_38545 = state;
(statearr_36789_38545[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_36790_38546 = state;
(statearr_36790_38546[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_36791_38547 = state;
(statearr_36791_38547[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq36780){
var G__36781 = cljs.core.first(seq36780);
var seq36780__$1 = cljs.core.next(seq36780);
var G__36782 = cljs.core.first(seq36780__$1);
var seq36780__$2 = cljs.core.next(seq36780__$1);
var G__36783 = cljs.core.first(seq36780__$2);
var seq36780__$3 = cljs.core.next(seq36780__$2);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36781,G__36782,G__36783,seq36780__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36804 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36804 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta36805){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta36805 = meta36805;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36804.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36806,meta36805__$1){
var self__ = this;
var _36806__$1 = this;
return (new cljs.core.async.t_cljs$core$async36804(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta36805__$1));
}));

(cljs.core.async.t_cljs$core$async36804.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36806){
var self__ = this;
var _36806__$1 = this;
return self__.meta36805;
}));

(cljs.core.async.t_cljs$core$async36804.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36804.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async36804.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36804.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async36804.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async36804.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async36804.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async36804.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async36804.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta36805","meta36805",-1924176140,null)], null);
}));

(cljs.core.async.t_cljs$core$async36804.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36804.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36804");

(cljs.core.async.t_cljs$core$async36804.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async36804");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36804.
 */
cljs.core.async.__GT_t_cljs$core$async36804 = (function cljs$core$async$mix_$___GT_t_cljs$core$async36804(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta36805){
return (new cljs.core.async.t_cljs$core$async36804(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta36805));
});

}

return (new cljs.core.async.t_cljs$core$async36804(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__35744__auto___38561 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35745__auto__ = (function (){var switch__35549__auto__ = (function (state_36931){
var state_val_36932 = (state_36931[(1)]);
if((state_val_36932 === (7))){
var inst_36887 = (state_36931[(2)]);
var state_36931__$1 = state_36931;
if(cljs.core.truth_(inst_36887)){
var statearr_36936_38562 = state_36931__$1;
(statearr_36936_38562[(1)] = (8));

} else {
var statearr_36937_38563 = state_36931__$1;
(statearr_36937_38563[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36932 === (20))){
var inst_36880 = (state_36931[(7)]);
var state_36931__$1 = state_36931;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36931__$1,(23),out,inst_36880);
} else {
if((state_val_36932 === (1))){
var inst_36859 = calc_state();
var inst_36860 = cljs.core.__destructure_map(inst_36859);
var inst_36861 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_36860,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_36863 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_36860,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_36865 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_36860,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_36866 = inst_36859;
var state_36931__$1 = (function (){var statearr_36942 = state_36931;
(statearr_36942[(8)] = inst_36866);

(statearr_36942[(9)] = inst_36861);

(statearr_36942[(10)] = inst_36863);

(statearr_36942[(11)] = inst_36865);

return statearr_36942;
})();
var statearr_36943_38570 = state_36931__$1;
(statearr_36943_38570[(2)] = null);

(statearr_36943_38570[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36932 === (24))){
var inst_36870 = (state_36931[(12)]);
var inst_36866 = inst_36870;
var state_36931__$1 = (function (){var statearr_36944 = state_36931;
(statearr_36944[(8)] = inst_36866);

return statearr_36944;
})();
var statearr_36945_38571 = state_36931__$1;
(statearr_36945_38571[(2)] = null);

(statearr_36945_38571[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36932 === (4))){
var inst_36880 = (state_36931[(7)]);
var inst_36882 = (state_36931[(13)]);
var inst_36879 = (state_36931[(2)]);
var inst_36880__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36879,(0),null);
var inst_36881 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36879,(1),null);
var inst_36882__$1 = (inst_36880__$1 == null);
var state_36931__$1 = (function (){var statearr_36947 = state_36931;
(statearr_36947[(7)] = inst_36880__$1);

(statearr_36947[(13)] = inst_36882__$1);

(statearr_36947[(14)] = inst_36881);

return statearr_36947;
})();
if(cljs.core.truth_(inst_36882__$1)){
var statearr_36950_38572 = state_36931__$1;
(statearr_36950_38572[(1)] = (5));

} else {
var statearr_36952_38573 = state_36931__$1;
(statearr_36952_38573[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36932 === (15))){
var inst_36904 = (state_36931[(15)]);
var inst_36871 = (state_36931[(16)]);
var inst_36904__$1 = cljs.core.empty_QMARK_(inst_36871);
var state_36931__$1 = (function (){var statearr_36953 = state_36931;
(statearr_36953[(15)] = inst_36904__$1);

return statearr_36953;
})();
if(inst_36904__$1){
var statearr_36955_38574 = state_36931__$1;
(statearr_36955_38574[(1)] = (17));

} else {
var statearr_36956_38575 = state_36931__$1;
(statearr_36956_38575[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36932 === (21))){
var inst_36870 = (state_36931[(12)]);
var inst_36866 = inst_36870;
var state_36931__$1 = (function (){var statearr_36960 = state_36931;
(statearr_36960[(8)] = inst_36866);

return statearr_36960;
})();
var statearr_36961_38576 = state_36931__$1;
(statearr_36961_38576[(2)] = null);

(statearr_36961_38576[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36932 === (13))){
var inst_36895 = (state_36931[(2)]);
var inst_36897 = calc_state();
var inst_36866 = inst_36897;
var state_36931__$1 = (function (){var statearr_36963 = state_36931;
(statearr_36963[(8)] = inst_36866);

(statearr_36963[(17)] = inst_36895);

return statearr_36963;
})();
var statearr_36966_38583 = state_36931__$1;
(statearr_36966_38583[(2)] = null);

(statearr_36966_38583[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36932 === (22))){
var inst_36924 = (state_36931[(2)]);
var state_36931__$1 = state_36931;
var statearr_36969_38584 = state_36931__$1;
(statearr_36969_38584[(2)] = inst_36924);

(statearr_36969_38584[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36932 === (6))){
var inst_36881 = (state_36931[(14)]);
var inst_36885 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36881,change);
var state_36931__$1 = state_36931;
var statearr_36971_38586 = state_36931__$1;
(statearr_36971_38586[(2)] = inst_36885);

(statearr_36971_38586[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36932 === (25))){
var state_36931__$1 = state_36931;
var statearr_36975_38587 = state_36931__$1;
(statearr_36975_38587[(2)] = null);

(statearr_36975_38587[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36932 === (17))){
var inst_36872 = (state_36931[(18)]);
var inst_36881 = (state_36931[(14)]);
var inst_36906 = (inst_36872.cljs$core$IFn$_invoke$arity$1 ? inst_36872.cljs$core$IFn$_invoke$arity$1(inst_36881) : inst_36872.call(null,inst_36881));
var inst_36907 = cljs.core.not(inst_36906);
var state_36931__$1 = state_36931;
var statearr_36978_38588 = state_36931__$1;
(statearr_36978_38588[(2)] = inst_36907);

(statearr_36978_38588[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36932 === (3))){
var inst_36928 = (state_36931[(2)]);
var state_36931__$1 = state_36931;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36931__$1,inst_36928);
} else {
if((state_val_36932 === (12))){
var state_36931__$1 = state_36931;
var statearr_36983_38589 = state_36931__$1;
(statearr_36983_38589[(2)] = null);

(statearr_36983_38589[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36932 === (2))){
var inst_36866 = (state_36931[(8)]);
var inst_36870 = (state_36931[(12)]);
var inst_36870__$1 = cljs.core.__destructure_map(inst_36866);
var inst_36871 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_36870__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_36872 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_36870__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_36873 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_36870__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_36931__$1 = (function (){var statearr_36988 = state_36931;
(statearr_36988[(18)] = inst_36872);

(statearr_36988[(16)] = inst_36871);

(statearr_36988[(12)] = inst_36870__$1);

return statearr_36988;
})();
return cljs.core.async.ioc_alts_BANG_(state_36931__$1,(4),inst_36873);
} else {
if((state_val_36932 === (23))){
var inst_36915 = (state_36931[(2)]);
var state_36931__$1 = state_36931;
if(cljs.core.truth_(inst_36915)){
var statearr_37000_38603 = state_36931__$1;
(statearr_37000_38603[(1)] = (24));

} else {
var statearr_37002_38604 = state_36931__$1;
(statearr_37002_38604[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36932 === (19))){
var inst_36910 = (state_36931[(2)]);
var state_36931__$1 = state_36931;
var statearr_37004_38605 = state_36931__$1;
(statearr_37004_38605[(2)] = inst_36910);

(statearr_37004_38605[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36932 === (11))){
var inst_36881 = (state_36931[(14)]);
var inst_36892 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_36881);
var state_36931__$1 = state_36931;
var statearr_37008_38606 = state_36931__$1;
(statearr_37008_38606[(2)] = inst_36892);

(statearr_37008_38606[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36932 === (9))){
var inst_36900 = (state_36931[(19)]);
var inst_36871 = (state_36931[(16)]);
var inst_36881 = (state_36931[(14)]);
var inst_36900__$1 = (inst_36871.cljs$core$IFn$_invoke$arity$1 ? inst_36871.cljs$core$IFn$_invoke$arity$1(inst_36881) : inst_36871.call(null,inst_36881));
var state_36931__$1 = (function (){var statearr_37010 = state_36931;
(statearr_37010[(19)] = inst_36900__$1);

return statearr_37010;
})();
if(cljs.core.truth_(inst_36900__$1)){
var statearr_37012_38607 = state_36931__$1;
(statearr_37012_38607[(1)] = (14));

} else {
var statearr_37016_38608 = state_36931__$1;
(statearr_37016_38608[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36932 === (5))){
var inst_36882 = (state_36931[(13)]);
var state_36931__$1 = state_36931;
var statearr_37020_38609 = state_36931__$1;
(statearr_37020_38609[(2)] = inst_36882);

(statearr_37020_38609[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36932 === (14))){
var inst_36900 = (state_36931[(19)]);
var state_36931__$1 = state_36931;
var statearr_37021_38610 = state_36931__$1;
(statearr_37021_38610[(2)] = inst_36900);

(statearr_37021_38610[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36932 === (26))){
var inst_36920 = (state_36931[(2)]);
var state_36931__$1 = state_36931;
var statearr_37023_38611 = state_36931__$1;
(statearr_37023_38611[(2)] = inst_36920);

(statearr_37023_38611[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36932 === (16))){
var inst_36912 = (state_36931[(2)]);
var state_36931__$1 = state_36931;
if(cljs.core.truth_(inst_36912)){
var statearr_37027_38612 = state_36931__$1;
(statearr_37027_38612[(1)] = (20));

} else {
var statearr_37028_38613 = state_36931__$1;
(statearr_37028_38613[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36932 === (10))){
var inst_36926 = (state_36931[(2)]);
var state_36931__$1 = state_36931;
var statearr_37030_38614 = state_36931__$1;
(statearr_37030_38614[(2)] = inst_36926);

(statearr_37030_38614[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36932 === (18))){
var inst_36904 = (state_36931[(15)]);
var state_36931__$1 = state_36931;
var statearr_37034_38615 = state_36931__$1;
(statearr_37034_38615[(2)] = inst_36904);

(statearr_37034_38615[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36932 === (8))){
var inst_36880 = (state_36931[(7)]);
var inst_36889 = (inst_36880 == null);
var state_36931__$1 = state_36931;
if(cljs.core.truth_(inst_36889)){
var statearr_37035_38617 = state_36931__$1;
(statearr_37035_38617[(1)] = (11));

} else {
var statearr_37042_38619 = state_36931__$1;
(statearr_37042_38619[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__35550__auto__ = null;
var cljs$core$async$mix_$_state_machine__35550__auto____0 = (function (){
var statearr_37051 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37051[(0)] = cljs$core$async$mix_$_state_machine__35550__auto__);

(statearr_37051[(1)] = (1));

return statearr_37051;
});
var cljs$core$async$mix_$_state_machine__35550__auto____1 = (function (state_36931){
while(true){
var ret_value__35551__auto__ = (function (){try{while(true){
var result__35552__auto__ = switch__35549__auto__(state_36931);
if(cljs.core.keyword_identical_QMARK_(result__35552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35552__auto__;
}
break;
}
}catch (e37055){var ex__35553__auto__ = e37055;
var statearr_37057_38620 = state_36931;
(statearr_37057_38620[(2)] = ex__35553__auto__);


if(cljs.core.seq((state_36931[(4)]))){
var statearr_37059_38621 = state_36931;
(statearr_37059_38621[(1)] = cljs.core.first((state_36931[(4)])));

} else {
throw ex__35553__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38622 = state_36931;
state_36931 = G__38622;
continue;
} else {
return ret_value__35551__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__35550__auto__ = function(state_36931){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__35550__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__35550__auto____1.call(this,state_36931);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__35550__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__35550__auto____0;
cljs$core$async$mix_$_state_machine__35550__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__35550__auto____1;
return cljs$core$async$mix_$_state_machine__35550__auto__;
})()
})();
var state__35746__auto__ = (function (){var statearr_37066 = f__35745__auto__();
(statearr_37066[(6)] = c__35744__auto___38561);

return statearr_37066;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35746__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_38623 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_38623(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_38626 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_38626(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_38627 = (function() {
var G__38628 = null;
var G__38628__1 = (function (p){
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
var G__38628__2 = (function (p,v){
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
G__38628 = function(p,v){
switch(arguments.length){
case 1:
return G__38628__1.call(this,p);
case 2:
return G__38628__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__38628.cljs$core$IFn$_invoke$arity$1 = G__38628__1;
G__38628.cljs$core$IFn$_invoke$arity$2 = G__38628__2;
return G__38628;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__37088 = arguments.length;
switch (G__37088) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_38627(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_38627(p,v);
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
var G__37100 = arguments.length;
switch (G__37100) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__37098_SHARP_){
if(cljs.core.truth_((p1__37098_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__37098_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__37098_SHARP_.call(null,topic)))){
return p1__37098_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__37098_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37113 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37113 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta37114){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta37114 = meta37114;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37113.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37115,meta37114__$1){
var self__ = this;
var _37115__$1 = this;
return (new cljs.core.async.t_cljs$core$async37113(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta37114__$1));
}));

(cljs.core.async.t_cljs$core$async37113.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37115){
var self__ = this;
var _37115__$1 = this;
return self__.meta37114;
}));

(cljs.core.async.t_cljs$core$async37113.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37113.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async37113.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37113.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async37113.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async37113.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async37113.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async37113.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta37114","meta37114",-1705414487,null)], null);
}));

(cljs.core.async.t_cljs$core$async37113.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37113.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37113");

(cljs.core.async.t_cljs$core$async37113.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async37113");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37113.
 */
cljs.core.async.__GT_t_cljs$core$async37113 = (function cljs$core$async$__GT_t_cljs$core$async37113(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta37114){
return (new cljs.core.async.t_cljs$core$async37113(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta37114));
});

}

return (new cljs.core.async.t_cljs$core$async37113(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__35744__auto___38633 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35745__auto__ = (function (){var switch__35549__auto__ = (function (state_37196){
var state_val_37197 = (state_37196[(1)]);
if((state_val_37197 === (7))){
var inst_37192 = (state_37196[(2)]);
var state_37196__$1 = state_37196;
var statearr_37198_38634 = state_37196__$1;
(statearr_37198_38634[(2)] = inst_37192);

(statearr_37198_38634[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37197 === (20))){
var state_37196__$1 = state_37196;
var statearr_37199_38635 = state_37196__$1;
(statearr_37199_38635[(2)] = null);

(statearr_37199_38635[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37197 === (1))){
var state_37196__$1 = state_37196;
var statearr_37200_38636 = state_37196__$1;
(statearr_37200_38636[(2)] = null);

(statearr_37200_38636[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37197 === (24))){
var inst_37174 = (state_37196[(7)]);
var inst_37183 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_37174);
var state_37196__$1 = state_37196;
var statearr_37201_38637 = state_37196__$1;
(statearr_37201_38637[(2)] = inst_37183);

(statearr_37201_38637[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37197 === (4))){
var inst_37126 = (state_37196[(8)]);
var inst_37126__$1 = (state_37196[(2)]);
var inst_37127 = (inst_37126__$1 == null);
var state_37196__$1 = (function (){var statearr_37206 = state_37196;
(statearr_37206[(8)] = inst_37126__$1);

return statearr_37206;
})();
if(cljs.core.truth_(inst_37127)){
var statearr_37207_38638 = state_37196__$1;
(statearr_37207_38638[(1)] = (5));

} else {
var statearr_37208_38639 = state_37196__$1;
(statearr_37208_38639[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37197 === (15))){
var inst_37168 = (state_37196[(2)]);
var state_37196__$1 = state_37196;
var statearr_37212_38640 = state_37196__$1;
(statearr_37212_38640[(2)] = inst_37168);

(statearr_37212_38640[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37197 === (21))){
var inst_37188 = (state_37196[(2)]);
var state_37196__$1 = (function (){var statearr_37214 = state_37196;
(statearr_37214[(9)] = inst_37188);

return statearr_37214;
})();
var statearr_37215_38641 = state_37196__$1;
(statearr_37215_38641[(2)] = null);

(statearr_37215_38641[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37197 === (13))){
var inst_37150 = (state_37196[(10)]);
var inst_37152 = cljs.core.chunked_seq_QMARK_(inst_37150);
var state_37196__$1 = state_37196;
if(inst_37152){
var statearr_37216_38642 = state_37196__$1;
(statearr_37216_38642[(1)] = (16));

} else {
var statearr_37217_38643 = state_37196__$1;
(statearr_37217_38643[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37197 === (22))){
var inst_37180 = (state_37196[(2)]);
var state_37196__$1 = state_37196;
if(cljs.core.truth_(inst_37180)){
var statearr_37218_38644 = state_37196__$1;
(statearr_37218_38644[(1)] = (23));

} else {
var statearr_37219_38645 = state_37196__$1;
(statearr_37219_38645[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37197 === (6))){
var inst_37126 = (state_37196[(8)]);
var inst_37174 = (state_37196[(7)]);
var inst_37176 = (state_37196[(11)]);
var inst_37174__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_37126) : topic_fn.call(null,inst_37126));
var inst_37175 = cljs.core.deref(mults);
var inst_37176__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37175,inst_37174__$1);
var state_37196__$1 = (function (){var statearr_37223 = state_37196;
(statearr_37223[(7)] = inst_37174__$1);

(statearr_37223[(11)] = inst_37176__$1);

return statearr_37223;
})();
if(cljs.core.truth_(inst_37176__$1)){
var statearr_37224_38648 = state_37196__$1;
(statearr_37224_38648[(1)] = (19));

} else {
var statearr_37225_38649 = state_37196__$1;
(statearr_37225_38649[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37197 === (25))){
var inst_37185 = (state_37196[(2)]);
var state_37196__$1 = state_37196;
var statearr_37227_38650 = state_37196__$1;
(statearr_37227_38650[(2)] = inst_37185);

(statearr_37227_38650[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37197 === (17))){
var inst_37150 = (state_37196[(10)]);
var inst_37159 = cljs.core.first(inst_37150);
var inst_37160 = cljs.core.async.muxch_STAR_(inst_37159);
var inst_37161 = cljs.core.async.close_BANG_(inst_37160);
var inst_37162 = cljs.core.next(inst_37150);
var inst_37136 = inst_37162;
var inst_37137 = null;
var inst_37138 = (0);
var inst_37139 = (0);
var state_37196__$1 = (function (){var statearr_37228 = state_37196;
(statearr_37228[(12)] = inst_37136);

(statearr_37228[(13)] = inst_37138);

(statearr_37228[(14)] = inst_37137);

(statearr_37228[(15)] = inst_37161);

(statearr_37228[(16)] = inst_37139);

return statearr_37228;
})();
var statearr_37229_38651 = state_37196__$1;
(statearr_37229_38651[(2)] = null);

(statearr_37229_38651[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37197 === (3))){
var inst_37194 = (state_37196[(2)]);
var state_37196__$1 = state_37196;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37196__$1,inst_37194);
} else {
if((state_val_37197 === (12))){
var inst_37170 = (state_37196[(2)]);
var state_37196__$1 = state_37196;
var statearr_37233_38652 = state_37196__$1;
(statearr_37233_38652[(2)] = inst_37170);

(statearr_37233_38652[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37197 === (2))){
var state_37196__$1 = state_37196;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37196__$1,(4),ch);
} else {
if((state_val_37197 === (23))){
var state_37196__$1 = state_37196;
var statearr_37235_38653 = state_37196__$1;
(statearr_37235_38653[(2)] = null);

(statearr_37235_38653[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37197 === (19))){
var inst_37126 = (state_37196[(8)]);
var inst_37176 = (state_37196[(11)]);
var inst_37178 = cljs.core.async.muxch_STAR_(inst_37176);
var state_37196__$1 = state_37196;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37196__$1,(22),inst_37178,inst_37126);
} else {
if((state_val_37197 === (11))){
var inst_37136 = (state_37196[(12)]);
var inst_37150 = (state_37196[(10)]);
var inst_37150__$1 = cljs.core.seq(inst_37136);
var state_37196__$1 = (function (){var statearr_37236 = state_37196;
(statearr_37236[(10)] = inst_37150__$1);

return statearr_37236;
})();
if(inst_37150__$1){
var statearr_37237_38658 = state_37196__$1;
(statearr_37237_38658[(1)] = (13));

} else {
var statearr_37238_38659 = state_37196__$1;
(statearr_37238_38659[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37197 === (9))){
var inst_37172 = (state_37196[(2)]);
var state_37196__$1 = state_37196;
var statearr_37242_38663 = state_37196__$1;
(statearr_37242_38663[(2)] = inst_37172);

(statearr_37242_38663[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37197 === (5))){
var inst_37133 = cljs.core.deref(mults);
var inst_37134 = cljs.core.vals(inst_37133);
var inst_37135 = cljs.core.seq(inst_37134);
var inst_37136 = inst_37135;
var inst_37137 = null;
var inst_37138 = (0);
var inst_37139 = (0);
var state_37196__$1 = (function (){var statearr_37244 = state_37196;
(statearr_37244[(12)] = inst_37136);

(statearr_37244[(13)] = inst_37138);

(statearr_37244[(14)] = inst_37137);

(statearr_37244[(16)] = inst_37139);

return statearr_37244;
})();
var statearr_37245_38664 = state_37196__$1;
(statearr_37245_38664[(2)] = null);

(statearr_37245_38664[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37197 === (14))){
var state_37196__$1 = state_37196;
var statearr_37250_38666 = state_37196__$1;
(statearr_37250_38666[(2)] = null);

(statearr_37250_38666[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37197 === (16))){
var inst_37150 = (state_37196[(10)]);
var inst_37154 = cljs.core.chunk_first(inst_37150);
var inst_37155 = cljs.core.chunk_rest(inst_37150);
var inst_37156 = cljs.core.count(inst_37154);
var inst_37136 = inst_37155;
var inst_37137 = inst_37154;
var inst_37138 = inst_37156;
var inst_37139 = (0);
var state_37196__$1 = (function (){var statearr_37255 = state_37196;
(statearr_37255[(12)] = inst_37136);

(statearr_37255[(13)] = inst_37138);

(statearr_37255[(14)] = inst_37137);

(statearr_37255[(16)] = inst_37139);

return statearr_37255;
})();
var statearr_37259_38667 = state_37196__$1;
(statearr_37259_38667[(2)] = null);

(statearr_37259_38667[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37197 === (10))){
var inst_37136 = (state_37196[(12)]);
var inst_37138 = (state_37196[(13)]);
var inst_37137 = (state_37196[(14)]);
var inst_37139 = (state_37196[(16)]);
var inst_37144 = cljs.core._nth(inst_37137,inst_37139);
var inst_37145 = cljs.core.async.muxch_STAR_(inst_37144);
var inst_37146 = cljs.core.async.close_BANG_(inst_37145);
var inst_37147 = (inst_37139 + (1));
var tmp37246 = inst_37136;
var tmp37247 = inst_37138;
var tmp37248 = inst_37137;
var inst_37136__$1 = tmp37246;
var inst_37137__$1 = tmp37248;
var inst_37138__$1 = tmp37247;
var inst_37139__$1 = inst_37147;
var state_37196__$1 = (function (){var statearr_37265 = state_37196;
(statearr_37265[(12)] = inst_37136__$1);

(statearr_37265[(13)] = inst_37138__$1);

(statearr_37265[(17)] = inst_37146);

(statearr_37265[(14)] = inst_37137__$1);

(statearr_37265[(16)] = inst_37139__$1);

return statearr_37265;
})();
var statearr_37269_38672 = state_37196__$1;
(statearr_37269_38672[(2)] = null);

(statearr_37269_38672[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37197 === (18))){
var inst_37165 = (state_37196[(2)]);
var state_37196__$1 = state_37196;
var statearr_37271_38673 = state_37196__$1;
(statearr_37271_38673[(2)] = inst_37165);

(statearr_37271_38673[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37197 === (8))){
var inst_37138 = (state_37196[(13)]);
var inst_37139 = (state_37196[(16)]);
var inst_37141 = (inst_37139 < inst_37138);
var inst_37142 = inst_37141;
var state_37196__$1 = state_37196;
if(cljs.core.truth_(inst_37142)){
var statearr_37276_38675 = state_37196__$1;
(statearr_37276_38675[(1)] = (10));

} else {
var statearr_37277_38676 = state_37196__$1;
(statearr_37277_38676[(1)] = (11));

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
var cljs$core$async$state_machine__35550__auto__ = null;
var cljs$core$async$state_machine__35550__auto____0 = (function (){
var statearr_37279 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37279[(0)] = cljs$core$async$state_machine__35550__auto__);

(statearr_37279[(1)] = (1));

return statearr_37279;
});
var cljs$core$async$state_machine__35550__auto____1 = (function (state_37196){
while(true){
var ret_value__35551__auto__ = (function (){try{while(true){
var result__35552__auto__ = switch__35549__auto__(state_37196);
if(cljs.core.keyword_identical_QMARK_(result__35552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35552__auto__;
}
break;
}
}catch (e37288){var ex__35553__auto__ = e37288;
var statearr_37289_38677 = state_37196;
(statearr_37289_38677[(2)] = ex__35553__auto__);


if(cljs.core.seq((state_37196[(4)]))){
var statearr_37290_38678 = state_37196;
(statearr_37290_38678[(1)] = cljs.core.first((state_37196[(4)])));

} else {
throw ex__35553__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38679 = state_37196;
state_37196 = G__38679;
continue;
} else {
return ret_value__35551__auto__;
}
break;
}
});
cljs$core$async$state_machine__35550__auto__ = function(state_37196){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35550__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35550__auto____1.call(this,state_37196);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35550__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35550__auto____0;
cljs$core$async$state_machine__35550__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35550__auto____1;
return cljs$core$async$state_machine__35550__auto__;
})()
})();
var state__35746__auto__ = (function (){var statearr_37299 = f__35745__auto__();
(statearr_37299[(6)] = c__35744__auto___38633);

return statearr_37299;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35746__auto__);
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
var G__37305 = arguments.length;
switch (G__37305) {
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
var G__37312 = arguments.length;
switch (G__37312) {
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
var G__37316 = arguments.length;
switch (G__37316) {
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
var c__35744__auto___38702 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35745__auto__ = (function (){var switch__35549__auto__ = (function (state_37365){
var state_val_37366 = (state_37365[(1)]);
if((state_val_37366 === (7))){
var state_37365__$1 = state_37365;
var statearr_37367_38703 = state_37365__$1;
(statearr_37367_38703[(2)] = null);

(statearr_37367_38703[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37366 === (1))){
var state_37365__$1 = state_37365;
var statearr_37368_38704 = state_37365__$1;
(statearr_37368_38704[(2)] = null);

(statearr_37368_38704[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37366 === (4))){
var inst_37320 = (state_37365[(7)]);
var inst_37319 = (state_37365[(8)]);
var inst_37322 = (inst_37320 < inst_37319);
var state_37365__$1 = state_37365;
if(cljs.core.truth_(inst_37322)){
var statearr_37369_38706 = state_37365__$1;
(statearr_37369_38706[(1)] = (6));

} else {
var statearr_37370_38707 = state_37365__$1;
(statearr_37370_38707[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37366 === (15))){
var inst_37348 = (state_37365[(9)]);
var inst_37354 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_37348);
var state_37365__$1 = state_37365;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37365__$1,(17),out,inst_37354);
} else {
if((state_val_37366 === (13))){
var inst_37348 = (state_37365[(9)]);
var inst_37348__$1 = (state_37365[(2)]);
var inst_37349 = cljs.core.some(cljs.core.nil_QMARK_,inst_37348__$1);
var state_37365__$1 = (function (){var statearr_37371 = state_37365;
(statearr_37371[(9)] = inst_37348__$1);

return statearr_37371;
})();
if(cljs.core.truth_(inst_37349)){
var statearr_37372_38711 = state_37365__$1;
(statearr_37372_38711[(1)] = (14));

} else {
var statearr_37373_38712 = state_37365__$1;
(statearr_37373_38712[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37366 === (6))){
var state_37365__$1 = state_37365;
var statearr_37374_38713 = state_37365__$1;
(statearr_37374_38713[(2)] = null);

(statearr_37374_38713[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37366 === (17))){
var inst_37356 = (state_37365[(2)]);
var state_37365__$1 = (function (){var statearr_37377 = state_37365;
(statearr_37377[(10)] = inst_37356);

return statearr_37377;
})();
var statearr_37379_38714 = state_37365__$1;
(statearr_37379_38714[(2)] = null);

(statearr_37379_38714[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37366 === (3))){
var inst_37361 = (state_37365[(2)]);
var state_37365__$1 = state_37365;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37365__$1,inst_37361);
} else {
if((state_val_37366 === (12))){
var _ = (function (){var statearr_37380 = state_37365;
(statearr_37380[(4)] = cljs.core.rest((state_37365[(4)])));

return statearr_37380;
})();
var state_37365__$1 = state_37365;
var ex37375 = (state_37365__$1[(2)]);
var statearr_37381_38715 = state_37365__$1;
(statearr_37381_38715[(5)] = ex37375);


if((ex37375 instanceof Object)){
var statearr_37382_38716 = state_37365__$1;
(statearr_37382_38716[(1)] = (11));

(statearr_37382_38716[(5)] = null);

} else {
throw ex37375;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37366 === (2))){
var inst_37318 = cljs.core.reset_BANG_(dctr,cnt);
var inst_37319 = cnt;
var inst_37320 = (0);
var state_37365__$1 = (function (){var statearr_37383 = state_37365;
(statearr_37383[(11)] = inst_37318);

(statearr_37383[(7)] = inst_37320);

(statearr_37383[(8)] = inst_37319);

return statearr_37383;
})();
var statearr_37384_38717 = state_37365__$1;
(statearr_37384_38717[(2)] = null);

(statearr_37384_38717[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37366 === (11))){
var inst_37326 = (state_37365[(2)]);
var inst_37327 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_37365__$1 = (function (){var statearr_37386 = state_37365;
(statearr_37386[(12)] = inst_37326);

return statearr_37386;
})();
var statearr_37387_38718 = state_37365__$1;
(statearr_37387_38718[(2)] = inst_37327);

(statearr_37387_38718[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37366 === (9))){
var inst_37320 = (state_37365[(7)]);
var _ = (function (){var statearr_37391 = state_37365;
(statearr_37391[(4)] = cljs.core.cons((12),(state_37365[(4)])));

return statearr_37391;
})();
var inst_37334 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_37320) : chs__$1.call(null,inst_37320));
var inst_37335 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_37320) : done.call(null,inst_37320));
var inst_37336 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_37334,inst_37335);
var ___$1 = (function (){var statearr_37392 = state_37365;
(statearr_37392[(4)] = cljs.core.rest((state_37365[(4)])));

return statearr_37392;
})();
var state_37365__$1 = state_37365;
var statearr_37393_38719 = state_37365__$1;
(statearr_37393_38719[(2)] = inst_37336);

(statearr_37393_38719[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37366 === (5))){
var inst_37346 = (state_37365[(2)]);
var state_37365__$1 = (function (){var statearr_37394 = state_37365;
(statearr_37394[(13)] = inst_37346);

return statearr_37394;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37365__$1,(13),dchan);
} else {
if((state_val_37366 === (14))){
var inst_37352 = cljs.core.async.close_BANG_(out);
var state_37365__$1 = state_37365;
var statearr_37395_38721 = state_37365__$1;
(statearr_37395_38721[(2)] = inst_37352);

(statearr_37395_38721[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37366 === (16))){
var inst_37359 = (state_37365[(2)]);
var state_37365__$1 = state_37365;
var statearr_37396_38723 = state_37365__$1;
(statearr_37396_38723[(2)] = inst_37359);

(statearr_37396_38723[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37366 === (10))){
var inst_37320 = (state_37365[(7)]);
var inst_37339 = (state_37365[(2)]);
var inst_37340 = (inst_37320 + (1));
var inst_37320__$1 = inst_37340;
var state_37365__$1 = (function (){var statearr_37397 = state_37365;
(statearr_37397[(14)] = inst_37339);

(statearr_37397[(7)] = inst_37320__$1);

return statearr_37397;
})();
var statearr_37399_38725 = state_37365__$1;
(statearr_37399_38725[(2)] = null);

(statearr_37399_38725[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37366 === (8))){
var inst_37344 = (state_37365[(2)]);
var state_37365__$1 = state_37365;
var statearr_37400_38726 = state_37365__$1;
(statearr_37400_38726[(2)] = inst_37344);

(statearr_37400_38726[(1)] = (5));


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
var cljs$core$async$state_machine__35550__auto__ = null;
var cljs$core$async$state_machine__35550__auto____0 = (function (){
var statearr_37402 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37402[(0)] = cljs$core$async$state_machine__35550__auto__);

(statearr_37402[(1)] = (1));

return statearr_37402;
});
var cljs$core$async$state_machine__35550__auto____1 = (function (state_37365){
while(true){
var ret_value__35551__auto__ = (function (){try{while(true){
var result__35552__auto__ = switch__35549__auto__(state_37365);
if(cljs.core.keyword_identical_QMARK_(result__35552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35552__auto__;
}
break;
}
}catch (e37403){var ex__35553__auto__ = e37403;
var statearr_37404_38727 = state_37365;
(statearr_37404_38727[(2)] = ex__35553__auto__);


if(cljs.core.seq((state_37365[(4)]))){
var statearr_37405_38728 = state_37365;
(statearr_37405_38728[(1)] = cljs.core.first((state_37365[(4)])));

} else {
throw ex__35553__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38729 = state_37365;
state_37365 = G__38729;
continue;
} else {
return ret_value__35551__auto__;
}
break;
}
});
cljs$core$async$state_machine__35550__auto__ = function(state_37365){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35550__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35550__auto____1.call(this,state_37365);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35550__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35550__auto____0;
cljs$core$async$state_machine__35550__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35550__auto____1;
return cljs$core$async$state_machine__35550__auto__;
})()
})();
var state__35746__auto__ = (function (){var statearr_37407 = f__35745__auto__();
(statearr_37407[(6)] = c__35744__auto___38702);

return statearr_37407;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35746__auto__);
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
var G__37412 = arguments.length;
switch (G__37412) {
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
var c__35744__auto___38731 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35745__auto__ = (function (){var switch__35549__auto__ = (function (state_37447){
var state_val_37448 = (state_37447[(1)]);
if((state_val_37448 === (7))){
var inst_37427 = (state_37447[(7)]);
var inst_37426 = (state_37447[(8)]);
var inst_37426__$1 = (state_37447[(2)]);
var inst_37427__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37426__$1,(0),null);
var inst_37428 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37426__$1,(1),null);
var inst_37429 = (inst_37427__$1 == null);
var state_37447__$1 = (function (){var statearr_37449 = state_37447;
(statearr_37449[(9)] = inst_37428);

(statearr_37449[(7)] = inst_37427__$1);

(statearr_37449[(8)] = inst_37426__$1);

return statearr_37449;
})();
if(cljs.core.truth_(inst_37429)){
var statearr_37450_38732 = state_37447__$1;
(statearr_37450_38732[(1)] = (8));

} else {
var statearr_37451_38733 = state_37447__$1;
(statearr_37451_38733[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37448 === (1))){
var inst_37413 = cljs.core.vec(chs);
var inst_37414 = inst_37413;
var state_37447__$1 = (function (){var statearr_37452 = state_37447;
(statearr_37452[(10)] = inst_37414);

return statearr_37452;
})();
var statearr_37453_38734 = state_37447__$1;
(statearr_37453_38734[(2)] = null);

(statearr_37453_38734[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37448 === (4))){
var inst_37414 = (state_37447[(10)]);
var state_37447__$1 = state_37447;
return cljs.core.async.ioc_alts_BANG_(state_37447__$1,(7),inst_37414);
} else {
if((state_val_37448 === (6))){
var inst_37443 = (state_37447[(2)]);
var state_37447__$1 = state_37447;
var statearr_37454_38736 = state_37447__$1;
(statearr_37454_38736[(2)] = inst_37443);

(statearr_37454_38736[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37448 === (3))){
var inst_37445 = (state_37447[(2)]);
var state_37447__$1 = state_37447;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37447__$1,inst_37445);
} else {
if((state_val_37448 === (2))){
var inst_37414 = (state_37447[(10)]);
var inst_37416 = cljs.core.count(inst_37414);
var inst_37417 = (inst_37416 > (0));
var state_37447__$1 = state_37447;
if(cljs.core.truth_(inst_37417)){
var statearr_37456_38738 = state_37447__$1;
(statearr_37456_38738[(1)] = (4));

} else {
var statearr_37457_38739 = state_37447__$1;
(statearr_37457_38739[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37448 === (11))){
var inst_37414 = (state_37447[(10)]);
var inst_37436 = (state_37447[(2)]);
var tmp37455 = inst_37414;
var inst_37414__$1 = tmp37455;
var state_37447__$1 = (function (){var statearr_37458 = state_37447;
(statearr_37458[(10)] = inst_37414__$1);

(statearr_37458[(11)] = inst_37436);

return statearr_37458;
})();
var statearr_37459_38740 = state_37447__$1;
(statearr_37459_38740[(2)] = null);

(statearr_37459_38740[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37448 === (9))){
var inst_37427 = (state_37447[(7)]);
var state_37447__$1 = state_37447;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37447__$1,(11),out,inst_37427);
} else {
if((state_val_37448 === (5))){
var inst_37441 = cljs.core.async.close_BANG_(out);
var state_37447__$1 = state_37447;
var statearr_37460_38741 = state_37447__$1;
(statearr_37460_38741[(2)] = inst_37441);

(statearr_37460_38741[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37448 === (10))){
var inst_37439 = (state_37447[(2)]);
var state_37447__$1 = state_37447;
var statearr_37464_38742 = state_37447__$1;
(statearr_37464_38742[(2)] = inst_37439);

(statearr_37464_38742[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37448 === (8))){
var inst_37414 = (state_37447[(10)]);
var inst_37428 = (state_37447[(9)]);
var inst_37427 = (state_37447[(7)]);
var inst_37426 = (state_37447[(8)]);
var inst_37431 = (function (){var cs = inst_37414;
var vec__37419 = inst_37426;
var v = inst_37427;
var c = inst_37428;
return (function (p1__37408_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__37408_SHARP_);
});
})();
var inst_37432 = cljs.core.filterv(inst_37431,inst_37414);
var inst_37414__$1 = inst_37432;
var state_37447__$1 = (function (){var statearr_37475 = state_37447;
(statearr_37475[(10)] = inst_37414__$1);

return statearr_37475;
})();
var statearr_37476_38743 = state_37447__$1;
(statearr_37476_38743[(2)] = null);

(statearr_37476_38743[(1)] = (2));


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
var cljs$core$async$state_machine__35550__auto__ = null;
var cljs$core$async$state_machine__35550__auto____0 = (function (){
var statearr_37483 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37483[(0)] = cljs$core$async$state_machine__35550__auto__);

(statearr_37483[(1)] = (1));

return statearr_37483;
});
var cljs$core$async$state_machine__35550__auto____1 = (function (state_37447){
while(true){
var ret_value__35551__auto__ = (function (){try{while(true){
var result__35552__auto__ = switch__35549__auto__(state_37447);
if(cljs.core.keyword_identical_QMARK_(result__35552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35552__auto__;
}
break;
}
}catch (e37484){var ex__35553__auto__ = e37484;
var statearr_37485_38744 = state_37447;
(statearr_37485_38744[(2)] = ex__35553__auto__);


if(cljs.core.seq((state_37447[(4)]))){
var statearr_37493_38745 = state_37447;
(statearr_37493_38745[(1)] = cljs.core.first((state_37447[(4)])));

} else {
throw ex__35553__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38746 = state_37447;
state_37447 = G__38746;
continue;
} else {
return ret_value__35551__auto__;
}
break;
}
});
cljs$core$async$state_machine__35550__auto__ = function(state_37447){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35550__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35550__auto____1.call(this,state_37447);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35550__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35550__auto____0;
cljs$core$async$state_machine__35550__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35550__auto____1;
return cljs$core$async$state_machine__35550__auto__;
})()
})();
var state__35746__auto__ = (function (){var statearr_37497 = f__35745__auto__();
(statearr_37497[(6)] = c__35744__auto___38731);

return statearr_37497;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35746__auto__);
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
var G__37506 = arguments.length;
switch (G__37506) {
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
var c__35744__auto___38748 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35745__auto__ = (function (){var switch__35549__auto__ = (function (state_37530){
var state_val_37531 = (state_37530[(1)]);
if((state_val_37531 === (7))){
var inst_37512 = (state_37530[(7)]);
var inst_37512__$1 = (state_37530[(2)]);
var inst_37513 = (inst_37512__$1 == null);
var inst_37514 = cljs.core.not(inst_37513);
var state_37530__$1 = (function (){var statearr_37536 = state_37530;
(statearr_37536[(7)] = inst_37512__$1);

return statearr_37536;
})();
if(inst_37514){
var statearr_37537_38749 = state_37530__$1;
(statearr_37537_38749[(1)] = (8));

} else {
var statearr_37540_38750 = state_37530__$1;
(statearr_37540_38750[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37531 === (1))){
var inst_37507 = (0);
var state_37530__$1 = (function (){var statearr_37541 = state_37530;
(statearr_37541[(8)] = inst_37507);

return statearr_37541;
})();
var statearr_37542_38751 = state_37530__$1;
(statearr_37542_38751[(2)] = null);

(statearr_37542_38751[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37531 === (4))){
var state_37530__$1 = state_37530;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37530__$1,(7),ch);
} else {
if((state_val_37531 === (6))){
var inst_37525 = (state_37530[(2)]);
var state_37530__$1 = state_37530;
var statearr_37544_38752 = state_37530__$1;
(statearr_37544_38752[(2)] = inst_37525);

(statearr_37544_38752[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37531 === (3))){
var inst_37527 = (state_37530[(2)]);
var inst_37528 = cljs.core.async.close_BANG_(out);
var state_37530__$1 = (function (){var statearr_37546 = state_37530;
(statearr_37546[(9)] = inst_37527);

return statearr_37546;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_37530__$1,inst_37528);
} else {
if((state_val_37531 === (2))){
var inst_37507 = (state_37530[(8)]);
var inst_37509 = (inst_37507 < n);
var state_37530__$1 = state_37530;
if(cljs.core.truth_(inst_37509)){
var statearr_37547_38757 = state_37530__$1;
(statearr_37547_38757[(1)] = (4));

} else {
var statearr_37548_38758 = state_37530__$1;
(statearr_37548_38758[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37531 === (11))){
var inst_37507 = (state_37530[(8)]);
var inst_37517 = (state_37530[(2)]);
var inst_37518 = (inst_37507 + (1));
var inst_37507__$1 = inst_37518;
var state_37530__$1 = (function (){var statearr_37549 = state_37530;
(statearr_37549[(8)] = inst_37507__$1);

(statearr_37549[(10)] = inst_37517);

return statearr_37549;
})();
var statearr_37550_38759 = state_37530__$1;
(statearr_37550_38759[(2)] = null);

(statearr_37550_38759[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37531 === (9))){
var state_37530__$1 = state_37530;
var statearr_37551_38760 = state_37530__$1;
(statearr_37551_38760[(2)] = null);

(statearr_37551_38760[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37531 === (5))){
var state_37530__$1 = state_37530;
var statearr_37552_38761 = state_37530__$1;
(statearr_37552_38761[(2)] = null);

(statearr_37552_38761[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37531 === (10))){
var inst_37522 = (state_37530[(2)]);
var state_37530__$1 = state_37530;
var statearr_37553_38762 = state_37530__$1;
(statearr_37553_38762[(2)] = inst_37522);

(statearr_37553_38762[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37531 === (8))){
var inst_37512 = (state_37530[(7)]);
var state_37530__$1 = state_37530;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37530__$1,(11),out,inst_37512);
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
var cljs$core$async$state_machine__35550__auto__ = null;
var cljs$core$async$state_machine__35550__auto____0 = (function (){
var statearr_37554 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37554[(0)] = cljs$core$async$state_machine__35550__auto__);

(statearr_37554[(1)] = (1));

return statearr_37554;
});
var cljs$core$async$state_machine__35550__auto____1 = (function (state_37530){
while(true){
var ret_value__35551__auto__ = (function (){try{while(true){
var result__35552__auto__ = switch__35549__auto__(state_37530);
if(cljs.core.keyword_identical_QMARK_(result__35552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35552__auto__;
}
break;
}
}catch (e37555){var ex__35553__auto__ = e37555;
var statearr_37556_38767 = state_37530;
(statearr_37556_38767[(2)] = ex__35553__auto__);


if(cljs.core.seq((state_37530[(4)]))){
var statearr_37557_38768 = state_37530;
(statearr_37557_38768[(1)] = cljs.core.first((state_37530[(4)])));

} else {
throw ex__35553__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38769 = state_37530;
state_37530 = G__38769;
continue;
} else {
return ret_value__35551__auto__;
}
break;
}
});
cljs$core$async$state_machine__35550__auto__ = function(state_37530){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35550__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35550__auto____1.call(this,state_37530);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35550__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35550__auto____0;
cljs$core$async$state_machine__35550__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35550__auto____1;
return cljs$core$async$state_machine__35550__auto__;
})()
})();
var state__35746__auto__ = (function (){var statearr_37559 = f__35745__auto__();
(statearr_37559[(6)] = c__35744__auto___38748);

return statearr_37559;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35746__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37562 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37562 = (function (f,ch,meta37563){
this.f = f;
this.ch = ch;
this.meta37563 = meta37563;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37562.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37564,meta37563__$1){
var self__ = this;
var _37564__$1 = this;
return (new cljs.core.async.t_cljs$core$async37562(self__.f,self__.ch,meta37563__$1));
}));

(cljs.core.async.t_cljs$core$async37562.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37564){
var self__ = this;
var _37564__$1 = this;
return self__.meta37563;
}));

(cljs.core.async.t_cljs$core$async37562.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37562.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async37562.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async37562.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37562.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37570 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37570 = (function (f,ch,meta37563,_,fn1,meta37571){
this.f = f;
this.ch = ch;
this.meta37563 = meta37563;
this._ = _;
this.fn1 = fn1;
this.meta37571 = meta37571;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37570.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37572,meta37571__$1){
var self__ = this;
var _37572__$1 = this;
return (new cljs.core.async.t_cljs$core$async37570(self__.f,self__.ch,self__.meta37563,self__._,self__.fn1,meta37571__$1));
}));

(cljs.core.async.t_cljs$core$async37570.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37572){
var self__ = this;
var _37572__$1 = this;
return self__.meta37571;
}));

(cljs.core.async.t_cljs$core$async37570.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37570.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async37570.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async37570.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__37561_SHARP_){
var G__37585 = (((p1__37561_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__37561_SHARP_) : self__.f.call(null,p1__37561_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__37585) : f1.call(null,G__37585));
});
}));

(cljs.core.async.t_cljs$core$async37570.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta37563","meta37563",-826870615,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async37562","cljs.core.async/t_cljs$core$async37562",1871777488,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta37571","meta37571",977467628,null)], null);
}));

(cljs.core.async.t_cljs$core$async37570.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37570.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37570");

(cljs.core.async.t_cljs$core$async37570.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async37570");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37570.
 */
cljs.core.async.__GT_t_cljs$core$async37570 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async37570(f__$1,ch__$1,meta37563__$1,___$2,fn1__$1,meta37571){
return (new cljs.core.async.t_cljs$core$async37570(f__$1,ch__$1,meta37563__$1,___$2,fn1__$1,meta37571));
});

}

return (new cljs.core.async.t_cljs$core$async37570(self__.f,self__.ch,self__.meta37563,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4210__auto__ = ret;
if(cljs.core.truth_(and__4210__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4210__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__37586 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__37586) : self__.f.call(null,G__37586));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async37562.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37562.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async37562.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta37563","meta37563",-826870615,null)], null);
}));

(cljs.core.async.t_cljs$core$async37562.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37562.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37562");

(cljs.core.async.t_cljs$core$async37562.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async37562");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37562.
 */
cljs.core.async.__GT_t_cljs$core$async37562 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async37562(f__$1,ch__$1,meta37563){
return (new cljs.core.async.t_cljs$core$async37562(f__$1,ch__$1,meta37563));
});

}

return (new cljs.core.async.t_cljs$core$async37562(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37591 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37591 = (function (f,ch,meta37592){
this.f = f;
this.ch = ch;
this.meta37592 = meta37592;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37591.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37593,meta37592__$1){
var self__ = this;
var _37593__$1 = this;
return (new cljs.core.async.t_cljs$core$async37591(self__.f,self__.ch,meta37592__$1));
}));

(cljs.core.async.t_cljs$core$async37591.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37593){
var self__ = this;
var _37593__$1 = this;
return self__.meta37592;
}));

(cljs.core.async.t_cljs$core$async37591.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37591.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async37591.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37591.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async37591.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37591.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async37591.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta37592","meta37592",-2085281040,null)], null);
}));

(cljs.core.async.t_cljs$core$async37591.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37591.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37591");

(cljs.core.async.t_cljs$core$async37591.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async37591");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37591.
 */
cljs.core.async.__GT_t_cljs$core$async37591 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async37591(f__$1,ch__$1,meta37592){
return (new cljs.core.async.t_cljs$core$async37591(f__$1,ch__$1,meta37592));
});

}

return (new cljs.core.async.t_cljs$core$async37591(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37598 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37598 = (function (p,ch,meta37599){
this.p = p;
this.ch = ch;
this.meta37599 = meta37599;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37598.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37600,meta37599__$1){
var self__ = this;
var _37600__$1 = this;
return (new cljs.core.async.t_cljs$core$async37598(self__.p,self__.ch,meta37599__$1));
}));

(cljs.core.async.t_cljs$core$async37598.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37600){
var self__ = this;
var _37600__$1 = this;
return self__.meta37599;
}));

(cljs.core.async.t_cljs$core$async37598.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37598.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async37598.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async37598.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37598.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async37598.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37598.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async37598.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta37599","meta37599",-859157416,null)], null);
}));

(cljs.core.async.t_cljs$core$async37598.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37598.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37598");

(cljs.core.async.t_cljs$core$async37598.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async37598");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37598.
 */
cljs.core.async.__GT_t_cljs$core$async37598 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async37598(p__$1,ch__$1,meta37599){
return (new cljs.core.async.t_cljs$core$async37598(p__$1,ch__$1,meta37599));
});

}

return (new cljs.core.async.t_cljs$core$async37598(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__37604 = arguments.length;
switch (G__37604) {
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
var c__35744__auto___38785 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35745__auto__ = (function (){var switch__35549__auto__ = (function (state_37628){
var state_val_37629 = (state_37628[(1)]);
if((state_val_37629 === (7))){
var inst_37624 = (state_37628[(2)]);
var state_37628__$1 = state_37628;
var statearr_37630_38786 = state_37628__$1;
(statearr_37630_38786[(2)] = inst_37624);

(statearr_37630_38786[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37629 === (1))){
var state_37628__$1 = state_37628;
var statearr_37631_38787 = state_37628__$1;
(statearr_37631_38787[(2)] = null);

(statearr_37631_38787[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37629 === (4))){
var inst_37610 = (state_37628[(7)]);
var inst_37610__$1 = (state_37628[(2)]);
var inst_37611 = (inst_37610__$1 == null);
var state_37628__$1 = (function (){var statearr_37632 = state_37628;
(statearr_37632[(7)] = inst_37610__$1);

return statearr_37632;
})();
if(cljs.core.truth_(inst_37611)){
var statearr_37633_38789 = state_37628__$1;
(statearr_37633_38789[(1)] = (5));

} else {
var statearr_37634_38790 = state_37628__$1;
(statearr_37634_38790[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37629 === (6))){
var inst_37610 = (state_37628[(7)]);
var inst_37615 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_37610) : p.call(null,inst_37610));
var state_37628__$1 = state_37628;
if(cljs.core.truth_(inst_37615)){
var statearr_37635_38791 = state_37628__$1;
(statearr_37635_38791[(1)] = (8));

} else {
var statearr_37636_38792 = state_37628__$1;
(statearr_37636_38792[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37629 === (3))){
var inst_37626 = (state_37628[(2)]);
var state_37628__$1 = state_37628;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37628__$1,inst_37626);
} else {
if((state_val_37629 === (2))){
var state_37628__$1 = state_37628;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37628__$1,(4),ch);
} else {
if((state_val_37629 === (11))){
var inst_37618 = (state_37628[(2)]);
var state_37628__$1 = state_37628;
var statearr_37637_38796 = state_37628__$1;
(statearr_37637_38796[(2)] = inst_37618);

(statearr_37637_38796[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37629 === (9))){
var state_37628__$1 = state_37628;
var statearr_37638_38797 = state_37628__$1;
(statearr_37638_38797[(2)] = null);

(statearr_37638_38797[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37629 === (5))){
var inst_37613 = cljs.core.async.close_BANG_(out);
var state_37628__$1 = state_37628;
var statearr_37639_38798 = state_37628__$1;
(statearr_37639_38798[(2)] = inst_37613);

(statearr_37639_38798[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37629 === (10))){
var inst_37621 = (state_37628[(2)]);
var state_37628__$1 = (function (){var statearr_37640 = state_37628;
(statearr_37640[(8)] = inst_37621);

return statearr_37640;
})();
var statearr_37641_38799 = state_37628__$1;
(statearr_37641_38799[(2)] = null);

(statearr_37641_38799[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37629 === (8))){
var inst_37610 = (state_37628[(7)]);
var state_37628__$1 = state_37628;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37628__$1,(11),out,inst_37610);
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
var cljs$core$async$state_machine__35550__auto__ = null;
var cljs$core$async$state_machine__35550__auto____0 = (function (){
var statearr_37642 = [null,null,null,null,null,null,null,null,null];
(statearr_37642[(0)] = cljs$core$async$state_machine__35550__auto__);

(statearr_37642[(1)] = (1));

return statearr_37642;
});
var cljs$core$async$state_machine__35550__auto____1 = (function (state_37628){
while(true){
var ret_value__35551__auto__ = (function (){try{while(true){
var result__35552__auto__ = switch__35549__auto__(state_37628);
if(cljs.core.keyword_identical_QMARK_(result__35552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35552__auto__;
}
break;
}
}catch (e37643){var ex__35553__auto__ = e37643;
var statearr_37644_38801 = state_37628;
(statearr_37644_38801[(2)] = ex__35553__auto__);


if(cljs.core.seq((state_37628[(4)]))){
var statearr_37645_38802 = state_37628;
(statearr_37645_38802[(1)] = cljs.core.first((state_37628[(4)])));

} else {
throw ex__35553__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38804 = state_37628;
state_37628 = G__38804;
continue;
} else {
return ret_value__35551__auto__;
}
break;
}
});
cljs$core$async$state_machine__35550__auto__ = function(state_37628){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35550__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35550__auto____1.call(this,state_37628);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35550__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35550__auto____0;
cljs$core$async$state_machine__35550__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35550__auto____1;
return cljs$core$async$state_machine__35550__auto__;
})()
})();
var state__35746__auto__ = (function (){var statearr_37646 = f__35745__auto__();
(statearr_37646[(6)] = c__35744__auto___38785);

return statearr_37646;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35746__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__37648 = arguments.length;
switch (G__37648) {
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
var c__35744__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35745__auto__ = (function (){var switch__35549__auto__ = (function (state_37714){
var state_val_37715 = (state_37714[(1)]);
if((state_val_37715 === (7))){
var inst_37707 = (state_37714[(2)]);
var state_37714__$1 = state_37714;
var statearr_37716_38815 = state_37714__$1;
(statearr_37716_38815[(2)] = inst_37707);

(statearr_37716_38815[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37715 === (20))){
var inst_37677 = (state_37714[(7)]);
var inst_37688 = (state_37714[(2)]);
var inst_37689 = cljs.core.next(inst_37677);
var inst_37663 = inst_37689;
var inst_37664 = null;
var inst_37665 = (0);
var inst_37666 = (0);
var state_37714__$1 = (function (){var statearr_37717 = state_37714;
(statearr_37717[(8)] = inst_37664);

(statearr_37717[(9)] = inst_37688);

(statearr_37717[(10)] = inst_37663);

(statearr_37717[(11)] = inst_37666);

(statearr_37717[(12)] = inst_37665);

return statearr_37717;
})();
var statearr_37722_38818 = state_37714__$1;
(statearr_37722_38818[(2)] = null);

(statearr_37722_38818[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37715 === (1))){
var state_37714__$1 = state_37714;
var statearr_37723_38819 = state_37714__$1;
(statearr_37723_38819[(2)] = null);

(statearr_37723_38819[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37715 === (4))){
var inst_37652 = (state_37714[(13)]);
var inst_37652__$1 = (state_37714[(2)]);
var inst_37653 = (inst_37652__$1 == null);
var state_37714__$1 = (function (){var statearr_37724 = state_37714;
(statearr_37724[(13)] = inst_37652__$1);

return statearr_37724;
})();
if(cljs.core.truth_(inst_37653)){
var statearr_37725_38829 = state_37714__$1;
(statearr_37725_38829[(1)] = (5));

} else {
var statearr_37726_38830 = state_37714__$1;
(statearr_37726_38830[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37715 === (15))){
var state_37714__$1 = state_37714;
var statearr_37744_38831 = state_37714__$1;
(statearr_37744_38831[(2)] = null);

(statearr_37744_38831[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37715 === (21))){
var state_37714__$1 = state_37714;
var statearr_37751_38836 = state_37714__$1;
(statearr_37751_38836[(2)] = null);

(statearr_37751_38836[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37715 === (13))){
var inst_37664 = (state_37714[(8)]);
var inst_37663 = (state_37714[(10)]);
var inst_37666 = (state_37714[(11)]);
var inst_37665 = (state_37714[(12)]);
var inst_37673 = (state_37714[(2)]);
var inst_37674 = (inst_37666 + (1));
var tmp37727 = inst_37664;
var tmp37728 = inst_37663;
var tmp37729 = inst_37665;
var inst_37663__$1 = tmp37728;
var inst_37664__$1 = tmp37727;
var inst_37665__$1 = tmp37729;
var inst_37666__$1 = inst_37674;
var state_37714__$1 = (function (){var statearr_37752 = state_37714;
(statearr_37752[(8)] = inst_37664__$1);

(statearr_37752[(10)] = inst_37663__$1);

(statearr_37752[(14)] = inst_37673);

(statearr_37752[(11)] = inst_37666__$1);

(statearr_37752[(12)] = inst_37665__$1);

return statearr_37752;
})();
var statearr_37753_38837 = state_37714__$1;
(statearr_37753_38837[(2)] = null);

(statearr_37753_38837[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37715 === (22))){
var state_37714__$1 = state_37714;
var statearr_37760_38838 = state_37714__$1;
(statearr_37760_38838[(2)] = null);

(statearr_37760_38838[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37715 === (6))){
var inst_37652 = (state_37714[(13)]);
var inst_37661 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_37652) : f.call(null,inst_37652));
var inst_37662 = cljs.core.seq(inst_37661);
var inst_37663 = inst_37662;
var inst_37664 = null;
var inst_37665 = (0);
var inst_37666 = (0);
var state_37714__$1 = (function (){var statearr_37769 = state_37714;
(statearr_37769[(8)] = inst_37664);

(statearr_37769[(10)] = inst_37663);

(statearr_37769[(11)] = inst_37666);

(statearr_37769[(12)] = inst_37665);

return statearr_37769;
})();
var statearr_37770_38849 = state_37714__$1;
(statearr_37770_38849[(2)] = null);

(statearr_37770_38849[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37715 === (17))){
var inst_37677 = (state_37714[(7)]);
var inst_37681 = cljs.core.chunk_first(inst_37677);
var inst_37682 = cljs.core.chunk_rest(inst_37677);
var inst_37683 = cljs.core.count(inst_37681);
var inst_37663 = inst_37682;
var inst_37664 = inst_37681;
var inst_37665 = inst_37683;
var inst_37666 = (0);
var state_37714__$1 = (function (){var statearr_37771 = state_37714;
(statearr_37771[(8)] = inst_37664);

(statearr_37771[(10)] = inst_37663);

(statearr_37771[(11)] = inst_37666);

(statearr_37771[(12)] = inst_37665);

return statearr_37771;
})();
var statearr_37772_38850 = state_37714__$1;
(statearr_37772_38850[(2)] = null);

(statearr_37772_38850[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37715 === (3))){
var inst_37712 = (state_37714[(2)]);
var state_37714__$1 = state_37714;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37714__$1,inst_37712);
} else {
if((state_val_37715 === (12))){
var inst_37697 = (state_37714[(2)]);
var state_37714__$1 = state_37714;
var statearr_37779_38856 = state_37714__$1;
(statearr_37779_38856[(2)] = inst_37697);

(statearr_37779_38856[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37715 === (2))){
var state_37714__$1 = state_37714;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37714__$1,(4),in$);
} else {
if((state_val_37715 === (23))){
var inst_37705 = (state_37714[(2)]);
var state_37714__$1 = state_37714;
var statearr_37780_38857 = state_37714__$1;
(statearr_37780_38857[(2)] = inst_37705);

(statearr_37780_38857[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37715 === (19))){
var inst_37692 = (state_37714[(2)]);
var state_37714__$1 = state_37714;
var statearr_37781_38858 = state_37714__$1;
(statearr_37781_38858[(2)] = inst_37692);

(statearr_37781_38858[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37715 === (11))){
var inst_37663 = (state_37714[(10)]);
var inst_37677 = (state_37714[(7)]);
var inst_37677__$1 = cljs.core.seq(inst_37663);
var state_37714__$1 = (function (){var statearr_37782 = state_37714;
(statearr_37782[(7)] = inst_37677__$1);

return statearr_37782;
})();
if(inst_37677__$1){
var statearr_37783_38859 = state_37714__$1;
(statearr_37783_38859[(1)] = (14));

} else {
var statearr_37784_38861 = state_37714__$1;
(statearr_37784_38861[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37715 === (9))){
var inst_37699 = (state_37714[(2)]);
var inst_37700 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_37714__$1 = (function (){var statearr_37785 = state_37714;
(statearr_37785[(15)] = inst_37699);

return statearr_37785;
})();
if(cljs.core.truth_(inst_37700)){
var statearr_37788_38862 = state_37714__$1;
(statearr_37788_38862[(1)] = (21));

} else {
var statearr_37789_38863 = state_37714__$1;
(statearr_37789_38863[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37715 === (5))){
var inst_37655 = cljs.core.async.close_BANG_(out);
var state_37714__$1 = state_37714;
var statearr_37790_38864 = state_37714__$1;
(statearr_37790_38864[(2)] = inst_37655);

(statearr_37790_38864[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37715 === (14))){
var inst_37677 = (state_37714[(7)]);
var inst_37679 = cljs.core.chunked_seq_QMARK_(inst_37677);
var state_37714__$1 = state_37714;
if(inst_37679){
var statearr_37791_38869 = state_37714__$1;
(statearr_37791_38869[(1)] = (17));

} else {
var statearr_37792_38870 = state_37714__$1;
(statearr_37792_38870[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37715 === (16))){
var inst_37695 = (state_37714[(2)]);
var state_37714__$1 = state_37714;
var statearr_37794_38872 = state_37714__$1;
(statearr_37794_38872[(2)] = inst_37695);

(statearr_37794_38872[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37715 === (10))){
var inst_37664 = (state_37714[(8)]);
var inst_37666 = (state_37714[(11)]);
var inst_37671 = cljs.core._nth(inst_37664,inst_37666);
var state_37714__$1 = state_37714;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37714__$1,(13),out,inst_37671);
} else {
if((state_val_37715 === (18))){
var inst_37677 = (state_37714[(7)]);
var inst_37686 = cljs.core.first(inst_37677);
var state_37714__$1 = state_37714;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37714__$1,(20),out,inst_37686);
} else {
if((state_val_37715 === (8))){
var inst_37666 = (state_37714[(11)]);
var inst_37665 = (state_37714[(12)]);
var inst_37668 = (inst_37666 < inst_37665);
var inst_37669 = inst_37668;
var state_37714__$1 = state_37714;
if(cljs.core.truth_(inst_37669)){
var statearr_37795_38873 = state_37714__$1;
(statearr_37795_38873[(1)] = (10));

} else {
var statearr_37796_38874 = state_37714__$1;
(statearr_37796_38874[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__35550__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__35550__auto____0 = (function (){
var statearr_37797 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37797[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__35550__auto__);

(statearr_37797[(1)] = (1));

return statearr_37797;
});
var cljs$core$async$mapcat_STAR__$_state_machine__35550__auto____1 = (function (state_37714){
while(true){
var ret_value__35551__auto__ = (function (){try{while(true){
var result__35552__auto__ = switch__35549__auto__(state_37714);
if(cljs.core.keyword_identical_QMARK_(result__35552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35552__auto__;
}
break;
}
}catch (e37801){var ex__35553__auto__ = e37801;
var statearr_37802_38879 = state_37714;
(statearr_37802_38879[(2)] = ex__35553__auto__);


if(cljs.core.seq((state_37714[(4)]))){
var statearr_37803_38880 = state_37714;
(statearr_37803_38880[(1)] = cljs.core.first((state_37714[(4)])));

} else {
throw ex__35553__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38881 = state_37714;
state_37714 = G__38881;
continue;
} else {
return ret_value__35551__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__35550__auto__ = function(state_37714){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__35550__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__35550__auto____1.call(this,state_37714);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__35550__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__35550__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__35550__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__35550__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__35550__auto__;
})()
})();
var state__35746__auto__ = (function (){var statearr_37804 = f__35745__auto__();
(statearr_37804[(6)] = c__35744__auto__);

return statearr_37804;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35746__auto__);
}));

return c__35744__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__37806 = arguments.length;
switch (G__37806) {
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
var G__37808 = arguments.length;
switch (G__37808) {
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
var G__37810 = arguments.length;
switch (G__37810) {
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
var c__35744__auto___38885 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35745__auto__ = (function (){var switch__35549__auto__ = (function (state_37834){
var state_val_37835 = (state_37834[(1)]);
if((state_val_37835 === (7))){
var inst_37829 = (state_37834[(2)]);
var state_37834__$1 = state_37834;
var statearr_37836_38886 = state_37834__$1;
(statearr_37836_38886[(2)] = inst_37829);

(statearr_37836_38886[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37835 === (1))){
var inst_37811 = null;
var state_37834__$1 = (function (){var statearr_37837 = state_37834;
(statearr_37837[(7)] = inst_37811);

return statearr_37837;
})();
var statearr_37838_38887 = state_37834__$1;
(statearr_37838_38887[(2)] = null);

(statearr_37838_38887[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37835 === (4))){
var inst_37814 = (state_37834[(8)]);
var inst_37814__$1 = (state_37834[(2)]);
var inst_37815 = (inst_37814__$1 == null);
var inst_37816 = cljs.core.not(inst_37815);
var state_37834__$1 = (function (){var statearr_37839 = state_37834;
(statearr_37839[(8)] = inst_37814__$1);

return statearr_37839;
})();
if(inst_37816){
var statearr_37840_38888 = state_37834__$1;
(statearr_37840_38888[(1)] = (5));

} else {
var statearr_37841_38890 = state_37834__$1;
(statearr_37841_38890[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37835 === (6))){
var state_37834__$1 = state_37834;
var statearr_37842_38891 = state_37834__$1;
(statearr_37842_38891[(2)] = null);

(statearr_37842_38891[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37835 === (3))){
var inst_37831 = (state_37834[(2)]);
var inst_37832 = cljs.core.async.close_BANG_(out);
var state_37834__$1 = (function (){var statearr_37843 = state_37834;
(statearr_37843[(9)] = inst_37831);

return statearr_37843;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_37834__$1,inst_37832);
} else {
if((state_val_37835 === (2))){
var state_37834__$1 = state_37834;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37834__$1,(4),ch);
} else {
if((state_val_37835 === (11))){
var inst_37814 = (state_37834[(8)]);
var inst_37823 = (state_37834[(2)]);
var inst_37811 = inst_37814;
var state_37834__$1 = (function (){var statearr_37844 = state_37834;
(statearr_37844[(7)] = inst_37811);

(statearr_37844[(10)] = inst_37823);

return statearr_37844;
})();
var statearr_37845_38892 = state_37834__$1;
(statearr_37845_38892[(2)] = null);

(statearr_37845_38892[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37835 === (9))){
var inst_37814 = (state_37834[(8)]);
var state_37834__$1 = state_37834;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37834__$1,(11),out,inst_37814);
} else {
if((state_val_37835 === (5))){
var inst_37811 = (state_37834[(7)]);
var inst_37814 = (state_37834[(8)]);
var inst_37818 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_37814,inst_37811);
var state_37834__$1 = state_37834;
if(inst_37818){
var statearr_37847_38894 = state_37834__$1;
(statearr_37847_38894[(1)] = (8));

} else {
var statearr_37848_38895 = state_37834__$1;
(statearr_37848_38895[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37835 === (10))){
var inst_37826 = (state_37834[(2)]);
var state_37834__$1 = state_37834;
var statearr_37857_38896 = state_37834__$1;
(statearr_37857_38896[(2)] = inst_37826);

(statearr_37857_38896[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37835 === (8))){
var inst_37811 = (state_37834[(7)]);
var tmp37846 = inst_37811;
var inst_37811__$1 = tmp37846;
var state_37834__$1 = (function (){var statearr_37858 = state_37834;
(statearr_37858[(7)] = inst_37811__$1);

return statearr_37858;
})();
var statearr_37862_38897 = state_37834__$1;
(statearr_37862_38897[(2)] = null);

(statearr_37862_38897[(1)] = (2));


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
var cljs$core$async$state_machine__35550__auto__ = null;
var cljs$core$async$state_machine__35550__auto____0 = (function (){
var statearr_37863 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37863[(0)] = cljs$core$async$state_machine__35550__auto__);

(statearr_37863[(1)] = (1));

return statearr_37863;
});
var cljs$core$async$state_machine__35550__auto____1 = (function (state_37834){
while(true){
var ret_value__35551__auto__ = (function (){try{while(true){
var result__35552__auto__ = switch__35549__auto__(state_37834);
if(cljs.core.keyword_identical_QMARK_(result__35552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35552__auto__;
}
break;
}
}catch (e37864){var ex__35553__auto__ = e37864;
var statearr_37865_38899 = state_37834;
(statearr_37865_38899[(2)] = ex__35553__auto__);


if(cljs.core.seq((state_37834[(4)]))){
var statearr_37866_38900 = state_37834;
(statearr_37866_38900[(1)] = cljs.core.first((state_37834[(4)])));

} else {
throw ex__35553__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38901 = state_37834;
state_37834 = G__38901;
continue;
} else {
return ret_value__35551__auto__;
}
break;
}
});
cljs$core$async$state_machine__35550__auto__ = function(state_37834){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35550__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35550__auto____1.call(this,state_37834);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35550__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35550__auto____0;
cljs$core$async$state_machine__35550__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35550__auto____1;
return cljs$core$async$state_machine__35550__auto__;
})()
})();
var state__35746__auto__ = (function (){var statearr_37867 = f__35745__auto__();
(statearr_37867[(6)] = c__35744__auto___38885);

return statearr_37867;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35746__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__37869 = arguments.length;
switch (G__37869) {
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
var c__35744__auto___38906 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35745__auto__ = (function (){var switch__35549__auto__ = (function (state_37909){
var state_val_37910 = (state_37909[(1)]);
if((state_val_37910 === (7))){
var inst_37905 = (state_37909[(2)]);
var state_37909__$1 = state_37909;
var statearr_37913_38907 = state_37909__$1;
(statearr_37913_38907[(2)] = inst_37905);

(statearr_37913_38907[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37910 === (1))){
var inst_37870 = (new Array(n));
var inst_37871 = inst_37870;
var inst_37872 = (0);
var state_37909__$1 = (function (){var statearr_37914 = state_37909;
(statearr_37914[(7)] = inst_37871);

(statearr_37914[(8)] = inst_37872);

return statearr_37914;
})();
var statearr_37916_38908 = state_37909__$1;
(statearr_37916_38908[(2)] = null);

(statearr_37916_38908[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37910 === (4))){
var inst_37875 = (state_37909[(9)]);
var inst_37875__$1 = (state_37909[(2)]);
var inst_37876 = (inst_37875__$1 == null);
var inst_37877 = cljs.core.not(inst_37876);
var state_37909__$1 = (function (){var statearr_37917 = state_37909;
(statearr_37917[(9)] = inst_37875__$1);

return statearr_37917;
})();
if(inst_37877){
var statearr_37919_38909 = state_37909__$1;
(statearr_37919_38909[(1)] = (5));

} else {
var statearr_37920_38910 = state_37909__$1;
(statearr_37920_38910[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37910 === (15))){
var inst_37899 = (state_37909[(2)]);
var state_37909__$1 = state_37909;
var statearr_37921_38912 = state_37909__$1;
(statearr_37921_38912[(2)] = inst_37899);

(statearr_37921_38912[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37910 === (13))){
var state_37909__$1 = state_37909;
var statearr_37922_38917 = state_37909__$1;
(statearr_37922_38917[(2)] = null);

(statearr_37922_38917[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37910 === (6))){
var inst_37872 = (state_37909[(8)]);
var inst_37895 = (inst_37872 > (0));
var state_37909__$1 = state_37909;
if(cljs.core.truth_(inst_37895)){
var statearr_37923_38931 = state_37909__$1;
(statearr_37923_38931[(1)] = (12));

} else {
var statearr_37924_38932 = state_37909__$1;
(statearr_37924_38932[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37910 === (3))){
var inst_37907 = (state_37909[(2)]);
var state_37909__$1 = state_37909;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37909__$1,inst_37907);
} else {
if((state_val_37910 === (12))){
var inst_37871 = (state_37909[(7)]);
var inst_37897 = cljs.core.vec(inst_37871);
var state_37909__$1 = state_37909;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37909__$1,(15),out,inst_37897);
} else {
if((state_val_37910 === (2))){
var state_37909__$1 = state_37909;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37909__$1,(4),ch);
} else {
if((state_val_37910 === (11))){
var inst_37889 = (state_37909[(2)]);
var inst_37890 = (new Array(n));
var inst_37871 = inst_37890;
var inst_37872 = (0);
var state_37909__$1 = (function (){var statearr_37925 = state_37909;
(statearr_37925[(7)] = inst_37871);

(statearr_37925[(10)] = inst_37889);

(statearr_37925[(8)] = inst_37872);

return statearr_37925;
})();
var statearr_37927_38940 = state_37909__$1;
(statearr_37927_38940[(2)] = null);

(statearr_37927_38940[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37910 === (9))){
var inst_37871 = (state_37909[(7)]);
var inst_37887 = cljs.core.vec(inst_37871);
var state_37909__$1 = state_37909;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37909__$1,(11),out,inst_37887);
} else {
if((state_val_37910 === (5))){
var inst_37882 = (state_37909[(11)]);
var inst_37871 = (state_37909[(7)]);
var inst_37872 = (state_37909[(8)]);
var inst_37875 = (state_37909[(9)]);
var inst_37880 = (inst_37871[inst_37872] = inst_37875);
var inst_37882__$1 = (inst_37872 + (1));
var inst_37883 = (inst_37882__$1 < n);
var state_37909__$1 = (function (){var statearr_37929 = state_37909;
(statearr_37929[(11)] = inst_37882__$1);

(statearr_37929[(12)] = inst_37880);

return statearr_37929;
})();
if(cljs.core.truth_(inst_37883)){
var statearr_37930_38979 = state_37909__$1;
(statearr_37930_38979[(1)] = (8));

} else {
var statearr_37931_38980 = state_37909__$1;
(statearr_37931_38980[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37910 === (14))){
var inst_37902 = (state_37909[(2)]);
var inst_37903 = cljs.core.async.close_BANG_(out);
var state_37909__$1 = (function (){var statearr_37933 = state_37909;
(statearr_37933[(13)] = inst_37902);

return statearr_37933;
})();
var statearr_37934_38988 = state_37909__$1;
(statearr_37934_38988[(2)] = inst_37903);

(statearr_37934_38988[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37910 === (10))){
var inst_37893 = (state_37909[(2)]);
var state_37909__$1 = state_37909;
var statearr_37935_38991 = state_37909__$1;
(statearr_37935_38991[(2)] = inst_37893);

(statearr_37935_38991[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37910 === (8))){
var inst_37882 = (state_37909[(11)]);
var inst_37871 = (state_37909[(7)]);
var tmp37932 = inst_37871;
var inst_37871__$1 = tmp37932;
var inst_37872 = inst_37882;
var state_37909__$1 = (function (){var statearr_37936 = state_37909;
(statearr_37936[(7)] = inst_37871__$1);

(statearr_37936[(8)] = inst_37872);

return statearr_37936;
})();
var statearr_37937_39006 = state_37909__$1;
(statearr_37937_39006[(2)] = null);

(statearr_37937_39006[(1)] = (2));


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
var cljs$core$async$state_machine__35550__auto__ = null;
var cljs$core$async$state_machine__35550__auto____0 = (function (){
var statearr_37938 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37938[(0)] = cljs$core$async$state_machine__35550__auto__);

(statearr_37938[(1)] = (1));

return statearr_37938;
});
var cljs$core$async$state_machine__35550__auto____1 = (function (state_37909){
while(true){
var ret_value__35551__auto__ = (function (){try{while(true){
var result__35552__auto__ = switch__35549__auto__(state_37909);
if(cljs.core.keyword_identical_QMARK_(result__35552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35552__auto__;
}
break;
}
}catch (e37939){var ex__35553__auto__ = e37939;
var statearr_37940_39011 = state_37909;
(statearr_37940_39011[(2)] = ex__35553__auto__);


if(cljs.core.seq((state_37909[(4)]))){
var statearr_37941_39017 = state_37909;
(statearr_37941_39017[(1)] = cljs.core.first((state_37909[(4)])));

} else {
throw ex__35553__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39022 = state_37909;
state_37909 = G__39022;
continue;
} else {
return ret_value__35551__auto__;
}
break;
}
});
cljs$core$async$state_machine__35550__auto__ = function(state_37909){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35550__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35550__auto____1.call(this,state_37909);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35550__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35550__auto____0;
cljs$core$async$state_machine__35550__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35550__auto____1;
return cljs$core$async$state_machine__35550__auto__;
})()
})();
var state__35746__auto__ = (function (){var statearr_37942 = f__35745__auto__();
(statearr_37942[(6)] = c__35744__auto___38906);

return statearr_37942;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35746__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__37944 = arguments.length;
switch (G__37944) {
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
var c__35744__auto___39032 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35745__auto__ = (function (){var switch__35549__auto__ = (function (state_37989){
var state_val_37990 = (state_37989[(1)]);
if((state_val_37990 === (7))){
var inst_37985 = (state_37989[(2)]);
var state_37989__$1 = state_37989;
var statearr_37994_39035 = state_37989__$1;
(statearr_37994_39035[(2)] = inst_37985);

(statearr_37994_39035[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37990 === (1))){
var inst_37945 = [];
var inst_37946 = inst_37945;
var inst_37947 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_37989__$1 = (function (){var statearr_37995 = state_37989;
(statearr_37995[(7)] = inst_37947);

(statearr_37995[(8)] = inst_37946);

return statearr_37995;
})();
var statearr_37996_39043 = state_37989__$1;
(statearr_37996_39043[(2)] = null);

(statearr_37996_39043[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37990 === (4))){
var inst_37950 = (state_37989[(9)]);
var inst_37950__$1 = (state_37989[(2)]);
var inst_37951 = (inst_37950__$1 == null);
var inst_37952 = cljs.core.not(inst_37951);
var state_37989__$1 = (function (){var statearr_37997 = state_37989;
(statearr_37997[(9)] = inst_37950__$1);

return statearr_37997;
})();
if(inst_37952){
var statearr_37998_39044 = state_37989__$1;
(statearr_37998_39044[(1)] = (5));

} else {
var statearr_37999_39045 = state_37989__$1;
(statearr_37999_39045[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37990 === (15))){
var inst_37946 = (state_37989[(8)]);
var inst_37977 = cljs.core.vec(inst_37946);
var state_37989__$1 = state_37989;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37989__$1,(18),out,inst_37977);
} else {
if((state_val_37990 === (13))){
var inst_37972 = (state_37989[(2)]);
var state_37989__$1 = state_37989;
var statearr_38000_39054 = state_37989__$1;
(statearr_38000_39054[(2)] = inst_37972);

(statearr_38000_39054[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37990 === (6))){
var inst_37946 = (state_37989[(8)]);
var inst_37974 = inst_37946.length;
var inst_37975 = (inst_37974 > (0));
var state_37989__$1 = state_37989;
if(cljs.core.truth_(inst_37975)){
var statearr_38001_39057 = state_37989__$1;
(statearr_38001_39057[(1)] = (15));

} else {
var statearr_38005_39058 = state_37989__$1;
(statearr_38005_39058[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37990 === (17))){
var inst_37982 = (state_37989[(2)]);
var inst_37983 = cljs.core.async.close_BANG_(out);
var state_37989__$1 = (function (){var statearr_38010 = state_37989;
(statearr_38010[(10)] = inst_37982);

return statearr_38010;
})();
var statearr_38014_39061 = state_37989__$1;
(statearr_38014_39061[(2)] = inst_37983);

(statearr_38014_39061[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37990 === (3))){
var inst_37987 = (state_37989[(2)]);
var state_37989__$1 = state_37989;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37989__$1,inst_37987);
} else {
if((state_val_37990 === (12))){
var inst_37946 = (state_37989[(8)]);
var inst_37965 = cljs.core.vec(inst_37946);
var state_37989__$1 = state_37989;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37989__$1,(14),out,inst_37965);
} else {
if((state_val_37990 === (2))){
var state_37989__$1 = state_37989;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37989__$1,(4),ch);
} else {
if((state_val_37990 === (11))){
var inst_37950 = (state_37989[(9)]);
var inst_37946 = (state_37989[(8)]);
var inst_37954 = (state_37989[(11)]);
var inst_37962 = inst_37946.push(inst_37950);
var tmp38018 = inst_37946;
var inst_37946__$1 = tmp38018;
var inst_37947 = inst_37954;
var state_37989__$1 = (function (){var statearr_38019 = state_37989;
(statearr_38019[(7)] = inst_37947);

(statearr_38019[(12)] = inst_37962);

(statearr_38019[(8)] = inst_37946__$1);

return statearr_38019;
})();
var statearr_38020_39063 = state_37989__$1;
(statearr_38020_39063[(2)] = null);

(statearr_38020_39063[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37990 === (9))){
var inst_37947 = (state_37989[(7)]);
var inst_37958 = cljs.core.keyword_identical_QMARK_(inst_37947,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_37989__$1 = state_37989;
var statearr_38028_39064 = state_37989__$1;
(statearr_38028_39064[(2)] = inst_37958);

(statearr_38028_39064[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37990 === (5))){
var inst_37947 = (state_37989[(7)]);
var inst_37950 = (state_37989[(9)]);
var inst_37955 = (state_37989[(13)]);
var inst_37954 = (state_37989[(11)]);
var inst_37954__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_37950) : f.call(null,inst_37950));
var inst_37955__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_37954__$1,inst_37947);
var state_37989__$1 = (function (){var statearr_38032 = state_37989;
(statearr_38032[(13)] = inst_37955__$1);

(statearr_38032[(11)] = inst_37954__$1);

return statearr_38032;
})();
if(inst_37955__$1){
var statearr_38033_39068 = state_37989__$1;
(statearr_38033_39068[(1)] = (8));

} else {
var statearr_38034_39069 = state_37989__$1;
(statearr_38034_39069[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37990 === (14))){
var inst_37950 = (state_37989[(9)]);
var inst_37954 = (state_37989[(11)]);
var inst_37967 = (state_37989[(2)]);
var inst_37968 = [];
var inst_37969 = inst_37968.push(inst_37950);
var inst_37946 = inst_37968;
var inst_37947 = inst_37954;
var state_37989__$1 = (function (){var statearr_38035 = state_37989;
(statearr_38035[(7)] = inst_37947);

(statearr_38035[(14)] = inst_37967);

(statearr_38035[(15)] = inst_37969);

(statearr_38035[(8)] = inst_37946);

return statearr_38035;
})();
var statearr_38037_39072 = state_37989__$1;
(statearr_38037_39072[(2)] = null);

(statearr_38037_39072[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37990 === (16))){
var state_37989__$1 = state_37989;
var statearr_38043_39074 = state_37989__$1;
(statearr_38043_39074[(2)] = null);

(statearr_38043_39074[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37990 === (10))){
var inst_37960 = (state_37989[(2)]);
var state_37989__$1 = state_37989;
if(cljs.core.truth_(inst_37960)){
var statearr_38048_39075 = state_37989__$1;
(statearr_38048_39075[(1)] = (11));

} else {
var statearr_38049_39076 = state_37989__$1;
(statearr_38049_39076[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37990 === (18))){
var inst_37979 = (state_37989[(2)]);
var state_37989__$1 = state_37989;
var statearr_38053_39077 = state_37989__$1;
(statearr_38053_39077[(2)] = inst_37979);

(statearr_38053_39077[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37990 === (8))){
var inst_37955 = (state_37989[(13)]);
var state_37989__$1 = state_37989;
var statearr_38058_39079 = state_37989__$1;
(statearr_38058_39079[(2)] = inst_37955);

(statearr_38058_39079[(1)] = (10));


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
var cljs$core$async$state_machine__35550__auto__ = null;
var cljs$core$async$state_machine__35550__auto____0 = (function (){
var statearr_38059 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38059[(0)] = cljs$core$async$state_machine__35550__auto__);

(statearr_38059[(1)] = (1));

return statearr_38059;
});
var cljs$core$async$state_machine__35550__auto____1 = (function (state_37989){
while(true){
var ret_value__35551__auto__ = (function (){try{while(true){
var result__35552__auto__ = switch__35549__auto__(state_37989);
if(cljs.core.keyword_identical_QMARK_(result__35552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35552__auto__;
}
break;
}
}catch (e38060){var ex__35553__auto__ = e38060;
var statearr_38061_39080 = state_37989;
(statearr_38061_39080[(2)] = ex__35553__auto__);


if(cljs.core.seq((state_37989[(4)]))){
var statearr_38064_39081 = state_37989;
(statearr_38064_39081[(1)] = cljs.core.first((state_37989[(4)])));

} else {
throw ex__35553__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39083 = state_37989;
state_37989 = G__39083;
continue;
} else {
return ret_value__35551__auto__;
}
break;
}
});
cljs$core$async$state_machine__35550__auto__ = function(state_37989){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35550__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35550__auto____1.call(this,state_37989);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35550__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35550__auto____0;
cljs$core$async$state_machine__35550__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35550__auto____1;
return cljs$core$async$state_machine__35550__auto__;
})()
})();
var state__35746__auto__ = (function (){var statearr_38065 = f__35745__auto__();
(statearr_38065[(6)] = c__35744__auto___39032);

return statearr_38065;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35746__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
