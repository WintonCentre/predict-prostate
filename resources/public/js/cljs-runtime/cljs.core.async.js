goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__35359 = arguments.length;
switch (G__35359) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35360 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35360 = (function (f,blockable,meta35361){
this.f = f;
this.blockable = blockable;
this.meta35361 = meta35361;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35360.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35362,meta35361__$1){
var self__ = this;
var _35362__$1 = this;
return (new cljs.core.async.t_cljs$core$async35360(self__.f,self__.blockable,meta35361__$1));
}));

(cljs.core.async.t_cljs$core$async35360.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35362){
var self__ = this;
var _35362__$1 = this;
return self__.meta35361;
}));

(cljs.core.async.t_cljs$core$async35360.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35360.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async35360.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async35360.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async35360.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta35361","meta35361",-2113700927,null)], null);
}));

(cljs.core.async.t_cljs$core$async35360.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35360.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35360");

(cljs.core.async.t_cljs$core$async35360.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async35360");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35360.
 */
cljs.core.async.__GT_t_cljs$core$async35360 = (function cljs$core$async$__GT_t_cljs$core$async35360(f__$1,blockable__$1,meta35361){
return (new cljs.core.async.t_cljs$core$async35360(f__$1,blockable__$1,meta35361));
});

}

return (new cljs.core.async.t_cljs$core$async35360(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__35365 = arguments.length;
switch (G__35365) {
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
var G__35367 = arguments.length;
switch (G__35367) {
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
var G__35369 = arguments.length;
switch (G__35369) {
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
var val_37856 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_37856) : fn1.call(null,val_37856));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_37856) : fn1.call(null,val_37856));
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
var G__35371 = arguments.length;
switch (G__35371) {
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
var n__4613__auto___37859 = n;
var x_37860 = (0);
while(true){
if((x_37860 < n__4613__auto___37859)){
(a[x_37860] = x_37860);

var G__37861 = (x_37860 + (1));
x_37860 = G__37861;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35372 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35372 = (function (flag,meta35373){
this.flag = flag;
this.meta35373 = meta35373;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35372.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35374,meta35373__$1){
var self__ = this;
var _35374__$1 = this;
return (new cljs.core.async.t_cljs$core$async35372(self__.flag,meta35373__$1));
}));

(cljs.core.async.t_cljs$core$async35372.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35374){
var self__ = this;
var _35374__$1 = this;
return self__.meta35373;
}));

(cljs.core.async.t_cljs$core$async35372.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35372.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async35372.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async35372.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async35372.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta35373","meta35373",-274045623,null)], null);
}));

(cljs.core.async.t_cljs$core$async35372.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35372.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35372");

(cljs.core.async.t_cljs$core$async35372.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async35372");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35372.
 */
cljs.core.async.__GT_t_cljs$core$async35372 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async35372(flag__$1,meta35373){
return (new cljs.core.async.t_cljs$core$async35372(flag__$1,meta35373));
});

}

return (new cljs.core.async.t_cljs$core$async35372(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35375 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35375 = (function (flag,cb,meta35376){
this.flag = flag;
this.cb = cb;
this.meta35376 = meta35376;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35375.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35377,meta35376__$1){
var self__ = this;
var _35377__$1 = this;
return (new cljs.core.async.t_cljs$core$async35375(self__.flag,self__.cb,meta35376__$1));
}));

(cljs.core.async.t_cljs$core$async35375.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35377){
var self__ = this;
var _35377__$1 = this;
return self__.meta35376;
}));

(cljs.core.async.t_cljs$core$async35375.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35375.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async35375.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async35375.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async35375.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta35376","meta35376",152420010,null)], null);
}));

(cljs.core.async.t_cljs$core$async35375.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35375.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35375");

(cljs.core.async.t_cljs$core$async35375.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async35375");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35375.
 */
cljs.core.async.__GT_t_cljs$core$async35375 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async35375(flag__$1,cb__$1,meta35376){
return (new cljs.core.async.t_cljs$core$async35375(flag__$1,cb__$1,meta35376));
});

}

return (new cljs.core.async.t_cljs$core$async35375(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__35378_SHARP_){
var G__35384 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__35378_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__35384) : fret.call(null,G__35384));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__35379_SHARP_){
var G__35385 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__35379_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__35385) : fret.call(null,G__35385));
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
var G__37866 = (i + (1));
i = G__37866;
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
var len__4736__auto___37867 = arguments.length;
var i__4737__auto___37868 = (0);
while(true){
if((i__4737__auto___37868 < len__4736__auto___37867)){
args__4742__auto__.push((arguments[i__4737__auto___37868]));

var G__37869 = (i__4737__auto___37868 + (1));
i__4737__auto___37868 = G__37869;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__35394){
var map__35395 = p__35394;
var map__35395__$1 = (((((!((map__35395 == null))))?(((((map__35395.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35395.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35395):map__35395);
var opts = map__35395__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq35390){
var G__35391 = cljs.core.first(seq35390);
var seq35390__$1 = cljs.core.next(seq35390);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35391,seq35390__$1);
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
var G__35403 = arguments.length;
switch (G__35403) {
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
var c__35295__auto___37871 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35296__auto__ = (function (){var switch__35066__auto__ = (function (state_35468){
var state_val_35469 = (state_35468[(1)]);
if((state_val_35469 === (7))){
var inst_35458 = (state_35468[(2)]);
var state_35468__$1 = state_35468;
var statearr_35494_37872 = state_35468__$1;
(statearr_35494_37872[(2)] = inst_35458);

(statearr_35494_37872[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35469 === (1))){
var state_35468__$1 = state_35468;
var statearr_35498_37873 = state_35468__$1;
(statearr_35498_37873[(2)] = null);

(statearr_35498_37873[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35469 === (4))){
var inst_35421 = (state_35468[(7)]);
var inst_35421__$1 = (state_35468[(2)]);
var inst_35439 = (inst_35421__$1 == null);
var state_35468__$1 = (function (){var statearr_35509 = state_35468;
(statearr_35509[(7)] = inst_35421__$1);

return statearr_35509;
})();
if(cljs.core.truth_(inst_35439)){
var statearr_35510_37874 = state_35468__$1;
(statearr_35510_37874[(1)] = (5));

} else {
var statearr_35518_37875 = state_35468__$1;
(statearr_35518_37875[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35469 === (13))){
var state_35468__$1 = state_35468;
var statearr_35568_37876 = state_35468__$1;
(statearr_35568_37876[(2)] = null);

(statearr_35568_37876[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35469 === (6))){
var inst_35421 = (state_35468[(7)]);
var state_35468__$1 = state_35468;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35468__$1,(11),to,inst_35421);
} else {
if((state_val_35469 === (3))){
var inst_35466 = (state_35468[(2)]);
var state_35468__$1 = state_35468;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35468__$1,inst_35466);
} else {
if((state_val_35469 === (12))){
var state_35468__$1 = state_35468;
var statearr_35602_37877 = state_35468__$1;
(statearr_35602_37877[(2)] = null);

(statearr_35602_37877[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35469 === (2))){
var state_35468__$1 = state_35468;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35468__$1,(4),from);
} else {
if((state_val_35469 === (11))){
var inst_35451 = (state_35468[(2)]);
var state_35468__$1 = state_35468;
if(cljs.core.truth_(inst_35451)){
var statearr_35606_37878 = state_35468__$1;
(statearr_35606_37878[(1)] = (12));

} else {
var statearr_35611_37879 = state_35468__$1;
(statearr_35611_37879[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35469 === (9))){
var state_35468__$1 = state_35468;
var statearr_35626_37880 = state_35468__$1;
(statearr_35626_37880[(2)] = null);

(statearr_35626_37880[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35469 === (5))){
var state_35468__$1 = state_35468;
if(cljs.core.truth_(close_QMARK_)){
var statearr_35628_37882 = state_35468__$1;
(statearr_35628_37882[(1)] = (8));

} else {
var statearr_35632_37883 = state_35468__$1;
(statearr_35632_37883[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35469 === (14))){
var inst_35456 = (state_35468[(2)]);
var state_35468__$1 = state_35468;
var statearr_35639_37884 = state_35468__$1;
(statearr_35639_37884[(2)] = inst_35456);

(statearr_35639_37884[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35469 === (10))){
var inst_35448 = (state_35468[(2)]);
var state_35468__$1 = state_35468;
var statearr_35640_37885 = state_35468__$1;
(statearr_35640_37885[(2)] = inst_35448);

(statearr_35640_37885[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35469 === (8))){
var inst_35445 = cljs.core.async.close_BANG_(to);
var state_35468__$1 = state_35468;
var statearr_35642_37887 = state_35468__$1;
(statearr_35642_37887[(2)] = inst_35445);

(statearr_35642_37887[(1)] = (10));


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
var cljs$core$async$state_machine__35067__auto__ = null;
var cljs$core$async$state_machine__35067__auto____0 = (function (){
var statearr_35643 = [null,null,null,null,null,null,null,null];
(statearr_35643[(0)] = cljs$core$async$state_machine__35067__auto__);

(statearr_35643[(1)] = (1));

return statearr_35643;
});
var cljs$core$async$state_machine__35067__auto____1 = (function (state_35468){
while(true){
var ret_value__35068__auto__ = (function (){try{while(true){
var result__35069__auto__ = switch__35066__auto__(state_35468);
if(cljs.core.keyword_identical_QMARK_(result__35069__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35069__auto__;
}
break;
}
}catch (e35646){var ex__35070__auto__ = e35646;
var statearr_35648_37889 = state_35468;
(statearr_35648_37889[(2)] = ex__35070__auto__);


if(cljs.core.seq((state_35468[(4)]))){
var statearr_35650_37890 = state_35468;
(statearr_35650_37890[(1)] = cljs.core.first((state_35468[(4)])));

} else {
throw ex__35070__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37892 = state_35468;
state_35468 = G__37892;
continue;
} else {
return ret_value__35068__auto__;
}
break;
}
});
cljs$core$async$state_machine__35067__auto__ = function(state_35468){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35067__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35067__auto____1.call(this,state_35468);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35067__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35067__auto____0;
cljs$core$async$state_machine__35067__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35067__auto____1;
return cljs$core$async$state_machine__35067__auto__;
})()
})();
var state__35297__auto__ = (function (){var statearr_35652 = f__35296__auto__();
(statearr_35652[(6)] = c__35295__auto___37871);

return statearr_35652;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35297__auto__);
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
var process = (function (p__35658){
var vec__35659 = p__35658;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35659,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35659,(1),null);
var job = vec__35659;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__35295__auto___37893 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35296__auto__ = (function (){var switch__35066__auto__ = (function (state_35671){
var state_val_35672 = (state_35671[(1)]);
if((state_val_35672 === (1))){
var state_35671__$1 = state_35671;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35671__$1,(2),res,v);
} else {
if((state_val_35672 === (2))){
var inst_35668 = (state_35671[(2)]);
var inst_35669 = cljs.core.async.close_BANG_(res);
var state_35671__$1 = (function (){var statearr_35675 = state_35671;
(statearr_35675[(7)] = inst_35668);

return statearr_35675;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_35671__$1,inst_35669);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__35067__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35067__auto____0 = (function (){
var statearr_35676 = [null,null,null,null,null,null,null,null];
(statearr_35676[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35067__auto__);

(statearr_35676[(1)] = (1));

return statearr_35676;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35067__auto____1 = (function (state_35671){
while(true){
var ret_value__35068__auto__ = (function (){try{while(true){
var result__35069__auto__ = switch__35066__auto__(state_35671);
if(cljs.core.keyword_identical_QMARK_(result__35069__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35069__auto__;
}
break;
}
}catch (e35677){var ex__35070__auto__ = e35677;
var statearr_35679_37894 = state_35671;
(statearr_35679_37894[(2)] = ex__35070__auto__);


if(cljs.core.seq((state_35671[(4)]))){
var statearr_35685_37895 = state_35671;
(statearr_35685_37895[(1)] = cljs.core.first((state_35671[(4)])));

} else {
throw ex__35070__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37896 = state_35671;
state_35671 = G__37896;
continue;
} else {
return ret_value__35068__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35067__auto__ = function(state_35671){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35067__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35067__auto____1.call(this,state_35671);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__35067__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35067__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35067__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35067__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35067__auto__;
})()
})();
var state__35297__auto__ = (function (){var statearr_35689 = f__35296__auto__();
(statearr_35689[(6)] = c__35295__auto___37893);

return statearr_35689;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35297__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__35690){
var vec__35691 = p__35690;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35691,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35691,(1),null);
var job = vec__35691;
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
var n__4613__auto___37897 = n;
var __37898 = (0);
while(true){
if((__37898 < n__4613__auto___37897)){
var G__35696_37899 = type;
var G__35696_37900__$1 = (((G__35696_37899 instanceof cljs.core.Keyword))?G__35696_37899.fqn:null);
switch (G__35696_37900__$1) {
case "compute":
var c__35295__auto___37902 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__37898,c__35295__auto___37902,G__35696_37899,G__35696_37900__$1,n__4613__auto___37897,jobs,results,process,async){
return (function (){
var f__35296__auto__ = (function (){var switch__35066__auto__ = ((function (__37898,c__35295__auto___37902,G__35696_37899,G__35696_37900__$1,n__4613__auto___37897,jobs,results,process,async){
return (function (state_35712){
var state_val_35713 = (state_35712[(1)]);
if((state_val_35713 === (1))){
var state_35712__$1 = state_35712;
var statearr_35716_37903 = state_35712__$1;
(statearr_35716_37903[(2)] = null);

(statearr_35716_37903[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35713 === (2))){
var state_35712__$1 = state_35712;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35712__$1,(4),jobs);
} else {
if((state_val_35713 === (3))){
var inst_35710 = (state_35712[(2)]);
var state_35712__$1 = state_35712;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35712__$1,inst_35710);
} else {
if((state_val_35713 === (4))){
var inst_35701 = (state_35712[(2)]);
var inst_35703 = process(inst_35701);
var state_35712__$1 = state_35712;
if(cljs.core.truth_(inst_35703)){
var statearr_35717_37904 = state_35712__$1;
(statearr_35717_37904[(1)] = (5));

} else {
var statearr_35718_37905 = state_35712__$1;
(statearr_35718_37905[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35713 === (5))){
var state_35712__$1 = state_35712;
var statearr_35720_37912 = state_35712__$1;
(statearr_35720_37912[(2)] = null);

(statearr_35720_37912[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35713 === (6))){
var state_35712__$1 = state_35712;
var statearr_35721_37913 = state_35712__$1;
(statearr_35721_37913[(2)] = null);

(statearr_35721_37913[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35713 === (7))){
var inst_35708 = (state_35712[(2)]);
var state_35712__$1 = state_35712;
var statearr_35722_37914 = state_35712__$1;
(statearr_35722_37914[(2)] = inst_35708);

(statearr_35722_37914[(1)] = (3));


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
});})(__37898,c__35295__auto___37902,G__35696_37899,G__35696_37900__$1,n__4613__auto___37897,jobs,results,process,async))
;
return ((function (__37898,switch__35066__auto__,c__35295__auto___37902,G__35696_37899,G__35696_37900__$1,n__4613__auto___37897,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__35067__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35067__auto____0 = (function (){
var statearr_35723 = [null,null,null,null,null,null,null];
(statearr_35723[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35067__auto__);

(statearr_35723[(1)] = (1));

return statearr_35723;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35067__auto____1 = (function (state_35712){
while(true){
var ret_value__35068__auto__ = (function (){try{while(true){
var result__35069__auto__ = switch__35066__auto__(state_35712);
if(cljs.core.keyword_identical_QMARK_(result__35069__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35069__auto__;
}
break;
}
}catch (e35724){var ex__35070__auto__ = e35724;
var statearr_35725_37915 = state_35712;
(statearr_35725_37915[(2)] = ex__35070__auto__);


if(cljs.core.seq((state_35712[(4)]))){
var statearr_35726_37916 = state_35712;
(statearr_35726_37916[(1)] = cljs.core.first((state_35712[(4)])));

} else {
throw ex__35070__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37918 = state_35712;
state_35712 = G__37918;
continue;
} else {
return ret_value__35068__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35067__auto__ = function(state_35712){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35067__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35067__auto____1.call(this,state_35712);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__35067__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35067__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35067__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35067__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35067__auto__;
})()
;})(__37898,switch__35066__auto__,c__35295__auto___37902,G__35696_37899,G__35696_37900__$1,n__4613__auto___37897,jobs,results,process,async))
})();
var state__35297__auto__ = (function (){var statearr_35729 = f__35296__auto__();
(statearr_35729[(6)] = c__35295__auto___37902);

return statearr_35729;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35297__auto__);
});})(__37898,c__35295__auto___37902,G__35696_37899,G__35696_37900__$1,n__4613__auto___37897,jobs,results,process,async))
);


break;
case "async":
var c__35295__auto___37919 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__37898,c__35295__auto___37919,G__35696_37899,G__35696_37900__$1,n__4613__auto___37897,jobs,results,process,async){
return (function (){
var f__35296__auto__ = (function (){var switch__35066__auto__ = ((function (__37898,c__35295__auto___37919,G__35696_37899,G__35696_37900__$1,n__4613__auto___37897,jobs,results,process,async){
return (function (state_35742){
var state_val_35743 = (state_35742[(1)]);
if((state_val_35743 === (1))){
var state_35742__$1 = state_35742;
var statearr_35744_37925 = state_35742__$1;
(statearr_35744_37925[(2)] = null);

(statearr_35744_37925[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35743 === (2))){
var state_35742__$1 = state_35742;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35742__$1,(4),jobs);
} else {
if((state_val_35743 === (3))){
var inst_35740 = (state_35742[(2)]);
var state_35742__$1 = state_35742;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35742__$1,inst_35740);
} else {
if((state_val_35743 === (4))){
var inst_35732 = (state_35742[(2)]);
var inst_35733 = async(inst_35732);
var state_35742__$1 = state_35742;
if(cljs.core.truth_(inst_35733)){
var statearr_35749_37926 = state_35742__$1;
(statearr_35749_37926[(1)] = (5));

} else {
var statearr_35750_37927 = state_35742__$1;
(statearr_35750_37927[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35743 === (5))){
var state_35742__$1 = state_35742;
var statearr_35751_37928 = state_35742__$1;
(statearr_35751_37928[(2)] = null);

(statearr_35751_37928[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35743 === (6))){
var state_35742__$1 = state_35742;
var statearr_35752_37929 = state_35742__$1;
(statearr_35752_37929[(2)] = null);

(statearr_35752_37929[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35743 === (7))){
var inst_35738 = (state_35742[(2)]);
var state_35742__$1 = state_35742;
var statearr_35761_37930 = state_35742__$1;
(statearr_35761_37930[(2)] = inst_35738);

(statearr_35761_37930[(1)] = (3));


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
});})(__37898,c__35295__auto___37919,G__35696_37899,G__35696_37900__$1,n__4613__auto___37897,jobs,results,process,async))
;
return ((function (__37898,switch__35066__auto__,c__35295__auto___37919,G__35696_37899,G__35696_37900__$1,n__4613__auto___37897,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__35067__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35067__auto____0 = (function (){
var statearr_35766 = [null,null,null,null,null,null,null];
(statearr_35766[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35067__auto__);

(statearr_35766[(1)] = (1));

return statearr_35766;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35067__auto____1 = (function (state_35742){
while(true){
var ret_value__35068__auto__ = (function (){try{while(true){
var result__35069__auto__ = switch__35066__auto__(state_35742);
if(cljs.core.keyword_identical_QMARK_(result__35069__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35069__auto__;
}
break;
}
}catch (e35771){var ex__35070__auto__ = e35771;
var statearr_35777_37931 = state_35742;
(statearr_35777_37931[(2)] = ex__35070__auto__);


if(cljs.core.seq((state_35742[(4)]))){
var statearr_35778_37932 = state_35742;
(statearr_35778_37932[(1)] = cljs.core.first((state_35742[(4)])));

} else {
throw ex__35070__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37935 = state_35742;
state_35742 = G__37935;
continue;
} else {
return ret_value__35068__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35067__auto__ = function(state_35742){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35067__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35067__auto____1.call(this,state_35742);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__35067__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35067__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35067__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35067__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35067__auto__;
})()
;})(__37898,switch__35066__auto__,c__35295__auto___37919,G__35696_37899,G__35696_37900__$1,n__4613__auto___37897,jobs,results,process,async))
})();
var state__35297__auto__ = (function (){var statearr_35779 = f__35296__auto__();
(statearr_35779[(6)] = c__35295__auto___37919);

return statearr_35779;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35297__auto__);
});})(__37898,c__35295__auto___37919,G__35696_37899,G__35696_37900__$1,n__4613__auto___37897,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35696_37900__$1)].join('')));

}

var G__37936 = (__37898 + (1));
__37898 = G__37936;
continue;
} else {
}
break;
}

var c__35295__auto___37937 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35296__auto__ = (function (){var switch__35066__auto__ = (function (state_35802){
var state_val_35803 = (state_35802[(1)]);
if((state_val_35803 === (7))){
var inst_35798 = (state_35802[(2)]);
var state_35802__$1 = state_35802;
var statearr_35805_37938 = state_35802__$1;
(statearr_35805_37938[(2)] = inst_35798);

(statearr_35805_37938[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35803 === (1))){
var state_35802__$1 = state_35802;
var statearr_35806_37940 = state_35802__$1;
(statearr_35806_37940[(2)] = null);

(statearr_35806_37940[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35803 === (4))){
var inst_35782 = (state_35802[(7)]);
var inst_35782__$1 = (state_35802[(2)]);
var inst_35783 = (inst_35782__$1 == null);
var state_35802__$1 = (function (){var statearr_35807 = state_35802;
(statearr_35807[(7)] = inst_35782__$1);

return statearr_35807;
})();
if(cljs.core.truth_(inst_35783)){
var statearr_35808_37941 = state_35802__$1;
(statearr_35808_37941[(1)] = (5));

} else {
var statearr_35809_37942 = state_35802__$1;
(statearr_35809_37942[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35803 === (6))){
var inst_35787 = (state_35802[(8)]);
var inst_35782 = (state_35802[(7)]);
var inst_35787__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_35789 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_35790 = [inst_35782,inst_35787__$1];
var inst_35791 = (new cljs.core.PersistentVector(null,2,(5),inst_35789,inst_35790,null));
var state_35802__$1 = (function (){var statearr_35810 = state_35802;
(statearr_35810[(8)] = inst_35787__$1);

return statearr_35810;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35802__$1,(8),jobs,inst_35791);
} else {
if((state_val_35803 === (3))){
var inst_35800 = (state_35802[(2)]);
var state_35802__$1 = state_35802;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35802__$1,inst_35800);
} else {
if((state_val_35803 === (2))){
var state_35802__$1 = state_35802;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35802__$1,(4),from);
} else {
if((state_val_35803 === (9))){
var inst_35795 = (state_35802[(2)]);
var state_35802__$1 = (function (){var statearr_35812 = state_35802;
(statearr_35812[(9)] = inst_35795);

return statearr_35812;
})();
var statearr_35813_37945 = state_35802__$1;
(statearr_35813_37945[(2)] = null);

(statearr_35813_37945[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35803 === (5))){
var inst_35785 = cljs.core.async.close_BANG_(jobs);
var state_35802__$1 = state_35802;
var statearr_35814_37946 = state_35802__$1;
(statearr_35814_37946[(2)] = inst_35785);

(statearr_35814_37946[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35803 === (8))){
var inst_35787 = (state_35802[(8)]);
var inst_35793 = (state_35802[(2)]);
var state_35802__$1 = (function (){var statearr_35815 = state_35802;
(statearr_35815[(10)] = inst_35793);

return statearr_35815;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35802__$1,(9),results,inst_35787);
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
var cljs$core$async$pipeline_STAR__$_state_machine__35067__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35067__auto____0 = (function (){
var statearr_35816 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35816[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35067__auto__);

(statearr_35816[(1)] = (1));

return statearr_35816;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35067__auto____1 = (function (state_35802){
while(true){
var ret_value__35068__auto__ = (function (){try{while(true){
var result__35069__auto__ = switch__35066__auto__(state_35802);
if(cljs.core.keyword_identical_QMARK_(result__35069__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35069__auto__;
}
break;
}
}catch (e35817){var ex__35070__auto__ = e35817;
var statearr_35819_37951 = state_35802;
(statearr_35819_37951[(2)] = ex__35070__auto__);


if(cljs.core.seq((state_35802[(4)]))){
var statearr_35820_37956 = state_35802;
(statearr_35820_37956[(1)] = cljs.core.first((state_35802[(4)])));

} else {
throw ex__35070__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37957 = state_35802;
state_35802 = G__37957;
continue;
} else {
return ret_value__35068__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35067__auto__ = function(state_35802){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35067__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35067__auto____1.call(this,state_35802);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__35067__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35067__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35067__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35067__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35067__auto__;
})()
})();
var state__35297__auto__ = (function (){var statearr_35821 = f__35296__auto__();
(statearr_35821[(6)] = c__35295__auto___37937);

return statearr_35821;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35297__auto__);
}));


var c__35295__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35296__auto__ = (function (){var switch__35066__auto__ = (function (state_35868){
var state_val_35869 = (state_35868[(1)]);
if((state_val_35869 === (7))){
var inst_35864 = (state_35868[(2)]);
var state_35868__$1 = state_35868;
var statearr_35870_37958 = state_35868__$1;
(statearr_35870_37958[(2)] = inst_35864);

(statearr_35870_37958[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35869 === (20))){
var state_35868__$1 = state_35868;
var statearr_35871_37959 = state_35868__$1;
(statearr_35871_37959[(2)] = null);

(statearr_35871_37959[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35869 === (1))){
var state_35868__$1 = state_35868;
var statearr_35872_37960 = state_35868__$1;
(statearr_35872_37960[(2)] = null);

(statearr_35872_37960[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35869 === (4))){
var inst_35824 = (state_35868[(7)]);
var inst_35824__$1 = (state_35868[(2)]);
var inst_35825 = (inst_35824__$1 == null);
var state_35868__$1 = (function (){var statearr_35877 = state_35868;
(statearr_35877[(7)] = inst_35824__$1);

return statearr_35877;
})();
if(cljs.core.truth_(inst_35825)){
var statearr_35882_37961 = state_35868__$1;
(statearr_35882_37961[(1)] = (5));

} else {
var statearr_35883_37962 = state_35868__$1;
(statearr_35883_37962[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35869 === (15))){
var inst_35846 = (state_35868[(8)]);
var state_35868__$1 = state_35868;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35868__$1,(18),to,inst_35846);
} else {
if((state_val_35869 === (21))){
var inst_35859 = (state_35868[(2)]);
var state_35868__$1 = state_35868;
var statearr_35888_37963 = state_35868__$1;
(statearr_35888_37963[(2)] = inst_35859);

(statearr_35888_37963[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35869 === (13))){
var inst_35861 = (state_35868[(2)]);
var state_35868__$1 = (function (){var statearr_35898 = state_35868;
(statearr_35898[(9)] = inst_35861);

return statearr_35898;
})();
var statearr_35899_37964 = state_35868__$1;
(statearr_35899_37964[(2)] = null);

(statearr_35899_37964[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35869 === (6))){
var inst_35824 = (state_35868[(7)]);
var state_35868__$1 = state_35868;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35868__$1,(11),inst_35824);
} else {
if((state_val_35869 === (17))){
var inst_35854 = (state_35868[(2)]);
var state_35868__$1 = state_35868;
if(cljs.core.truth_(inst_35854)){
var statearr_35900_37965 = state_35868__$1;
(statearr_35900_37965[(1)] = (19));

} else {
var statearr_35901_37966 = state_35868__$1;
(statearr_35901_37966[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35869 === (3))){
var inst_35866 = (state_35868[(2)]);
var state_35868__$1 = state_35868;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35868__$1,inst_35866);
} else {
if((state_val_35869 === (12))){
var inst_35843 = (state_35868[(10)]);
var state_35868__$1 = state_35868;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35868__$1,(14),inst_35843);
} else {
if((state_val_35869 === (2))){
var state_35868__$1 = state_35868;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35868__$1,(4),results);
} else {
if((state_val_35869 === (19))){
var state_35868__$1 = state_35868;
var statearr_35903_37967 = state_35868__$1;
(statearr_35903_37967[(2)] = null);

(statearr_35903_37967[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35869 === (11))){
var inst_35843 = (state_35868[(2)]);
var state_35868__$1 = (function (){var statearr_35904 = state_35868;
(statearr_35904[(10)] = inst_35843);

return statearr_35904;
})();
var statearr_35905_37968 = state_35868__$1;
(statearr_35905_37968[(2)] = null);

(statearr_35905_37968[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35869 === (9))){
var state_35868__$1 = state_35868;
var statearr_35906_37969 = state_35868__$1;
(statearr_35906_37969[(2)] = null);

(statearr_35906_37969[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35869 === (5))){
var state_35868__$1 = state_35868;
if(cljs.core.truth_(close_QMARK_)){
var statearr_35907_37970 = state_35868__$1;
(statearr_35907_37970[(1)] = (8));

} else {
var statearr_35908_37971 = state_35868__$1;
(statearr_35908_37971[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35869 === (14))){
var inst_35846 = (state_35868[(8)]);
var inst_35846__$1 = (state_35868[(2)]);
var inst_35847 = (inst_35846__$1 == null);
var inst_35848 = cljs.core.not(inst_35847);
var state_35868__$1 = (function (){var statearr_35909 = state_35868;
(statearr_35909[(8)] = inst_35846__$1);

return statearr_35909;
})();
if(inst_35848){
var statearr_35910_37972 = state_35868__$1;
(statearr_35910_37972[(1)] = (15));

} else {
var statearr_35911_37973 = state_35868__$1;
(statearr_35911_37973[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35869 === (16))){
var state_35868__$1 = state_35868;
var statearr_35912_37974 = state_35868__$1;
(statearr_35912_37974[(2)] = false);

(statearr_35912_37974[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35869 === (10))){
var inst_35840 = (state_35868[(2)]);
var state_35868__$1 = state_35868;
var statearr_35913_37975 = state_35868__$1;
(statearr_35913_37975[(2)] = inst_35840);

(statearr_35913_37975[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35869 === (18))){
var inst_35851 = (state_35868[(2)]);
var state_35868__$1 = state_35868;
var statearr_35914_37976 = state_35868__$1;
(statearr_35914_37976[(2)] = inst_35851);

(statearr_35914_37976[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35869 === (8))){
var inst_35828 = cljs.core.async.close_BANG_(to);
var state_35868__$1 = state_35868;
var statearr_35915_37977 = state_35868__$1;
(statearr_35915_37977[(2)] = inst_35828);

(statearr_35915_37977[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__35067__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35067__auto____0 = (function (){
var statearr_35916 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35916[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35067__auto__);

(statearr_35916[(1)] = (1));

return statearr_35916;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35067__auto____1 = (function (state_35868){
while(true){
var ret_value__35068__auto__ = (function (){try{while(true){
var result__35069__auto__ = switch__35066__auto__(state_35868);
if(cljs.core.keyword_identical_QMARK_(result__35069__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35069__auto__;
}
break;
}
}catch (e35917){var ex__35070__auto__ = e35917;
var statearr_35918_37978 = state_35868;
(statearr_35918_37978[(2)] = ex__35070__auto__);


if(cljs.core.seq((state_35868[(4)]))){
var statearr_35919_37979 = state_35868;
(statearr_35919_37979[(1)] = cljs.core.first((state_35868[(4)])));

} else {
throw ex__35070__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37980 = state_35868;
state_35868 = G__37980;
continue;
} else {
return ret_value__35068__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35067__auto__ = function(state_35868){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35067__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35067__auto____1.call(this,state_35868);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__35067__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35067__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35067__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35067__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35067__auto__;
})()
})();
var state__35297__auto__ = (function (){var statearr_35921 = f__35296__auto__();
(statearr_35921[(6)] = c__35295__auto__);

return statearr_35921;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35297__auto__);
}));

return c__35295__auto__;
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
var G__35923 = arguments.length;
switch (G__35923) {
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
var G__35925 = arguments.length;
switch (G__35925) {
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
var G__35927 = arguments.length;
switch (G__35927) {
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
var c__35295__auto___37988 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35296__auto__ = (function (){var switch__35066__auto__ = (function (state_35954){
var state_val_35955 = (state_35954[(1)]);
if((state_val_35955 === (7))){
var inst_35950 = (state_35954[(2)]);
var state_35954__$1 = state_35954;
var statearr_35956_37989 = state_35954__$1;
(statearr_35956_37989[(2)] = inst_35950);

(statearr_35956_37989[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35955 === (1))){
var state_35954__$1 = state_35954;
var statearr_35957_37990 = state_35954__$1;
(statearr_35957_37990[(2)] = null);

(statearr_35957_37990[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35955 === (4))){
var inst_35931 = (state_35954[(7)]);
var inst_35931__$1 = (state_35954[(2)]);
var inst_35932 = (inst_35931__$1 == null);
var state_35954__$1 = (function (){var statearr_35958 = state_35954;
(statearr_35958[(7)] = inst_35931__$1);

return statearr_35958;
})();
if(cljs.core.truth_(inst_35932)){
var statearr_35959_37991 = state_35954__$1;
(statearr_35959_37991[(1)] = (5));

} else {
var statearr_35960_37992 = state_35954__$1;
(statearr_35960_37992[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35955 === (13))){
var state_35954__$1 = state_35954;
var statearr_35961_37993 = state_35954__$1;
(statearr_35961_37993[(2)] = null);

(statearr_35961_37993[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35955 === (6))){
var inst_35931 = (state_35954[(7)]);
var inst_35937 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_35931) : p.call(null,inst_35931));
var state_35954__$1 = state_35954;
if(cljs.core.truth_(inst_35937)){
var statearr_35962_37994 = state_35954__$1;
(statearr_35962_37994[(1)] = (9));

} else {
var statearr_35963_37995 = state_35954__$1;
(statearr_35963_37995[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35955 === (3))){
var inst_35952 = (state_35954[(2)]);
var state_35954__$1 = state_35954;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35954__$1,inst_35952);
} else {
if((state_val_35955 === (12))){
var state_35954__$1 = state_35954;
var statearr_35964_37996 = state_35954__$1;
(statearr_35964_37996[(2)] = null);

(statearr_35964_37996[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35955 === (2))){
var state_35954__$1 = state_35954;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35954__$1,(4),ch);
} else {
if((state_val_35955 === (11))){
var inst_35931 = (state_35954[(7)]);
var inst_35941 = (state_35954[(2)]);
var state_35954__$1 = state_35954;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35954__$1,(8),inst_35941,inst_35931);
} else {
if((state_val_35955 === (9))){
var state_35954__$1 = state_35954;
var statearr_35965_37997 = state_35954__$1;
(statearr_35965_37997[(2)] = tc);

(statearr_35965_37997[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35955 === (5))){
var inst_35934 = cljs.core.async.close_BANG_(tc);
var inst_35935 = cljs.core.async.close_BANG_(fc);
var state_35954__$1 = (function (){var statearr_35966 = state_35954;
(statearr_35966[(8)] = inst_35934);

return statearr_35966;
})();
var statearr_35967_37998 = state_35954__$1;
(statearr_35967_37998[(2)] = inst_35935);

(statearr_35967_37998[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35955 === (14))){
var inst_35948 = (state_35954[(2)]);
var state_35954__$1 = state_35954;
var statearr_35968_37999 = state_35954__$1;
(statearr_35968_37999[(2)] = inst_35948);

(statearr_35968_37999[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35955 === (10))){
var state_35954__$1 = state_35954;
var statearr_35969_38000 = state_35954__$1;
(statearr_35969_38000[(2)] = fc);

(statearr_35969_38000[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35955 === (8))){
var inst_35943 = (state_35954[(2)]);
var state_35954__$1 = state_35954;
if(cljs.core.truth_(inst_35943)){
var statearr_35970_38001 = state_35954__$1;
(statearr_35970_38001[(1)] = (12));

} else {
var statearr_35971_38002 = state_35954__$1;
(statearr_35971_38002[(1)] = (13));

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
var cljs$core$async$state_machine__35067__auto__ = null;
var cljs$core$async$state_machine__35067__auto____0 = (function (){
var statearr_35972 = [null,null,null,null,null,null,null,null,null];
(statearr_35972[(0)] = cljs$core$async$state_machine__35067__auto__);

(statearr_35972[(1)] = (1));

return statearr_35972;
});
var cljs$core$async$state_machine__35067__auto____1 = (function (state_35954){
while(true){
var ret_value__35068__auto__ = (function (){try{while(true){
var result__35069__auto__ = switch__35066__auto__(state_35954);
if(cljs.core.keyword_identical_QMARK_(result__35069__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35069__auto__;
}
break;
}
}catch (e35973){var ex__35070__auto__ = e35973;
var statearr_35974_38004 = state_35954;
(statearr_35974_38004[(2)] = ex__35070__auto__);


if(cljs.core.seq((state_35954[(4)]))){
var statearr_35975_38005 = state_35954;
(statearr_35975_38005[(1)] = cljs.core.first((state_35954[(4)])));

} else {
throw ex__35070__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38006 = state_35954;
state_35954 = G__38006;
continue;
} else {
return ret_value__35068__auto__;
}
break;
}
});
cljs$core$async$state_machine__35067__auto__ = function(state_35954){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35067__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35067__auto____1.call(this,state_35954);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35067__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35067__auto____0;
cljs$core$async$state_machine__35067__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35067__auto____1;
return cljs$core$async$state_machine__35067__auto__;
})()
})();
var state__35297__auto__ = (function (){var statearr_35977 = f__35296__auto__();
(statearr_35977[(6)] = c__35295__auto___37988);

return statearr_35977;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35297__auto__);
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
var c__35295__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35296__auto__ = (function (){var switch__35066__auto__ = (function (state_36000){
var state_val_36001 = (state_36000[(1)]);
if((state_val_36001 === (7))){
var inst_35996 = (state_36000[(2)]);
var state_36000__$1 = state_36000;
var statearr_36002_38007 = state_36000__$1;
(statearr_36002_38007[(2)] = inst_35996);

(statearr_36002_38007[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36001 === (1))){
var inst_35978 = init;
var inst_35979 = inst_35978;
var state_36000__$1 = (function (){var statearr_36003 = state_36000;
(statearr_36003[(7)] = inst_35979);

return statearr_36003;
})();
var statearr_36004_38008 = state_36000__$1;
(statearr_36004_38008[(2)] = null);

(statearr_36004_38008[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36001 === (4))){
var inst_35982 = (state_36000[(8)]);
var inst_35982__$1 = (state_36000[(2)]);
var inst_35983 = (inst_35982__$1 == null);
var state_36000__$1 = (function (){var statearr_36005 = state_36000;
(statearr_36005[(8)] = inst_35982__$1);

return statearr_36005;
})();
if(cljs.core.truth_(inst_35983)){
var statearr_36007_38010 = state_36000__$1;
(statearr_36007_38010[(1)] = (5));

} else {
var statearr_36008_38012 = state_36000__$1;
(statearr_36008_38012[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36001 === (6))){
var inst_35979 = (state_36000[(7)]);
var inst_35982 = (state_36000[(8)]);
var inst_35986 = (state_36000[(9)]);
var inst_35986__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_35979,inst_35982) : f.call(null,inst_35979,inst_35982));
var inst_35987 = cljs.core.reduced_QMARK_(inst_35986__$1);
var state_36000__$1 = (function (){var statearr_36009 = state_36000;
(statearr_36009[(9)] = inst_35986__$1);

return statearr_36009;
})();
if(inst_35987){
var statearr_36010_38013 = state_36000__$1;
(statearr_36010_38013[(1)] = (8));

} else {
var statearr_36011_38014 = state_36000__$1;
(statearr_36011_38014[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36001 === (3))){
var inst_35998 = (state_36000[(2)]);
var state_36000__$1 = state_36000;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36000__$1,inst_35998);
} else {
if((state_val_36001 === (2))){
var state_36000__$1 = state_36000;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36000__$1,(4),ch);
} else {
if((state_val_36001 === (9))){
var inst_35986 = (state_36000[(9)]);
var inst_35979 = inst_35986;
var state_36000__$1 = (function (){var statearr_36012 = state_36000;
(statearr_36012[(7)] = inst_35979);

return statearr_36012;
})();
var statearr_36014_38015 = state_36000__$1;
(statearr_36014_38015[(2)] = null);

(statearr_36014_38015[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36001 === (5))){
var inst_35979 = (state_36000[(7)]);
var state_36000__$1 = state_36000;
var statearr_36015_38017 = state_36000__$1;
(statearr_36015_38017[(2)] = inst_35979);

(statearr_36015_38017[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36001 === (10))){
var inst_35994 = (state_36000[(2)]);
var state_36000__$1 = state_36000;
var statearr_36017_38019 = state_36000__$1;
(statearr_36017_38019[(2)] = inst_35994);

(statearr_36017_38019[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36001 === (8))){
var inst_35986 = (state_36000[(9)]);
var inst_35989 = cljs.core.deref(inst_35986);
var state_36000__$1 = state_36000;
var statearr_36018_38024 = state_36000__$1;
(statearr_36018_38024[(2)] = inst_35989);

(statearr_36018_38024[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__35067__auto__ = null;
var cljs$core$async$reduce_$_state_machine__35067__auto____0 = (function (){
var statearr_36020 = [null,null,null,null,null,null,null,null,null,null];
(statearr_36020[(0)] = cljs$core$async$reduce_$_state_machine__35067__auto__);

(statearr_36020[(1)] = (1));

return statearr_36020;
});
var cljs$core$async$reduce_$_state_machine__35067__auto____1 = (function (state_36000){
while(true){
var ret_value__35068__auto__ = (function (){try{while(true){
var result__35069__auto__ = switch__35066__auto__(state_36000);
if(cljs.core.keyword_identical_QMARK_(result__35069__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35069__auto__;
}
break;
}
}catch (e36021){var ex__35070__auto__ = e36021;
var statearr_36022_38025 = state_36000;
(statearr_36022_38025[(2)] = ex__35070__auto__);


if(cljs.core.seq((state_36000[(4)]))){
var statearr_36023_38026 = state_36000;
(statearr_36023_38026[(1)] = cljs.core.first((state_36000[(4)])));

} else {
throw ex__35070__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38028 = state_36000;
state_36000 = G__38028;
continue;
} else {
return ret_value__35068__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__35067__auto__ = function(state_36000){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__35067__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__35067__auto____1.call(this,state_36000);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__35067__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__35067__auto____0;
cljs$core$async$reduce_$_state_machine__35067__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__35067__auto____1;
return cljs$core$async$reduce_$_state_machine__35067__auto__;
})()
})();
var state__35297__auto__ = (function (){var statearr_36024 = f__35296__auto__();
(statearr_36024[(6)] = c__35295__auto__);

return statearr_36024;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35297__auto__);
}));

return c__35295__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__35295__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35296__auto__ = (function (){var switch__35066__auto__ = (function (state_36030){
var state_val_36031 = (state_36030[(1)]);
if((state_val_36031 === (1))){
var inst_36025 = cljs.core.async.reduce(f__$1,init,ch);
var state_36030__$1 = state_36030;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36030__$1,(2),inst_36025);
} else {
if((state_val_36031 === (2))){
var inst_36027 = (state_36030[(2)]);
var inst_36028 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_36027) : f__$1.call(null,inst_36027));
var state_36030__$1 = state_36030;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36030__$1,inst_36028);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__35067__auto__ = null;
var cljs$core$async$transduce_$_state_machine__35067__auto____0 = (function (){
var statearr_36032 = [null,null,null,null,null,null,null];
(statearr_36032[(0)] = cljs$core$async$transduce_$_state_machine__35067__auto__);

(statearr_36032[(1)] = (1));

return statearr_36032;
});
var cljs$core$async$transduce_$_state_machine__35067__auto____1 = (function (state_36030){
while(true){
var ret_value__35068__auto__ = (function (){try{while(true){
var result__35069__auto__ = switch__35066__auto__(state_36030);
if(cljs.core.keyword_identical_QMARK_(result__35069__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35069__auto__;
}
break;
}
}catch (e36033){var ex__35070__auto__ = e36033;
var statearr_36034_38034 = state_36030;
(statearr_36034_38034[(2)] = ex__35070__auto__);


if(cljs.core.seq((state_36030[(4)]))){
var statearr_36035_38036 = state_36030;
(statearr_36035_38036[(1)] = cljs.core.first((state_36030[(4)])));

} else {
throw ex__35070__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38037 = state_36030;
state_36030 = G__38037;
continue;
} else {
return ret_value__35068__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__35067__auto__ = function(state_36030){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__35067__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__35067__auto____1.call(this,state_36030);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__35067__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__35067__auto____0;
cljs$core$async$transduce_$_state_machine__35067__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__35067__auto____1;
return cljs$core$async$transduce_$_state_machine__35067__auto__;
})()
})();
var state__35297__auto__ = (function (){var statearr_36036 = f__35296__auto__();
(statearr_36036[(6)] = c__35295__auto__);

return statearr_36036;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35297__auto__);
}));

return c__35295__auto__;
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
var G__36038 = arguments.length;
switch (G__36038) {
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
var c__35295__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35296__auto__ = (function (){var switch__35066__auto__ = (function (state_36063){
var state_val_36064 = (state_36063[(1)]);
if((state_val_36064 === (7))){
var inst_36045 = (state_36063[(2)]);
var state_36063__$1 = state_36063;
var statearr_36067_38039 = state_36063__$1;
(statearr_36067_38039[(2)] = inst_36045);

(statearr_36067_38039[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36064 === (1))){
var inst_36039 = cljs.core.seq(coll);
var inst_36040 = inst_36039;
var state_36063__$1 = (function (){var statearr_36068 = state_36063;
(statearr_36068[(7)] = inst_36040);

return statearr_36068;
})();
var statearr_36069_38040 = state_36063__$1;
(statearr_36069_38040[(2)] = null);

(statearr_36069_38040[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36064 === (4))){
var inst_36040 = (state_36063[(7)]);
var inst_36043 = cljs.core.first(inst_36040);
var state_36063__$1 = state_36063;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36063__$1,(7),ch,inst_36043);
} else {
if((state_val_36064 === (13))){
var inst_36057 = (state_36063[(2)]);
var state_36063__$1 = state_36063;
var statearr_36071_38044 = state_36063__$1;
(statearr_36071_38044[(2)] = inst_36057);

(statearr_36071_38044[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36064 === (6))){
var inst_36048 = (state_36063[(2)]);
var state_36063__$1 = state_36063;
if(cljs.core.truth_(inst_36048)){
var statearr_36072_38045 = state_36063__$1;
(statearr_36072_38045[(1)] = (8));

} else {
var statearr_36073_38046 = state_36063__$1;
(statearr_36073_38046[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36064 === (3))){
var inst_36061 = (state_36063[(2)]);
var state_36063__$1 = state_36063;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36063__$1,inst_36061);
} else {
if((state_val_36064 === (12))){
var state_36063__$1 = state_36063;
var statearr_36074_38047 = state_36063__$1;
(statearr_36074_38047[(2)] = null);

(statearr_36074_38047[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36064 === (2))){
var inst_36040 = (state_36063[(7)]);
var state_36063__$1 = state_36063;
if(cljs.core.truth_(inst_36040)){
var statearr_36075_38048 = state_36063__$1;
(statearr_36075_38048[(1)] = (4));

} else {
var statearr_36076_38049 = state_36063__$1;
(statearr_36076_38049[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36064 === (11))){
var inst_36054 = cljs.core.async.close_BANG_(ch);
var state_36063__$1 = state_36063;
var statearr_36078_38050 = state_36063__$1;
(statearr_36078_38050[(2)] = inst_36054);

(statearr_36078_38050[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36064 === (9))){
var state_36063__$1 = state_36063;
if(cljs.core.truth_(close_QMARK_)){
var statearr_36079_38051 = state_36063__$1;
(statearr_36079_38051[(1)] = (11));

} else {
var statearr_36080_38052 = state_36063__$1;
(statearr_36080_38052[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36064 === (5))){
var inst_36040 = (state_36063[(7)]);
var state_36063__$1 = state_36063;
var statearr_36081_38053 = state_36063__$1;
(statearr_36081_38053[(2)] = inst_36040);

(statearr_36081_38053[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36064 === (10))){
var inst_36059 = (state_36063[(2)]);
var state_36063__$1 = state_36063;
var statearr_36082_38054 = state_36063__$1;
(statearr_36082_38054[(2)] = inst_36059);

(statearr_36082_38054[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36064 === (8))){
var inst_36040 = (state_36063[(7)]);
var inst_36050 = cljs.core.next(inst_36040);
var inst_36040__$1 = inst_36050;
var state_36063__$1 = (function (){var statearr_36083 = state_36063;
(statearr_36083[(7)] = inst_36040__$1);

return statearr_36083;
})();
var statearr_36084_38057 = state_36063__$1;
(statearr_36084_38057[(2)] = null);

(statearr_36084_38057[(1)] = (2));


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
var cljs$core$async$state_machine__35067__auto__ = null;
var cljs$core$async$state_machine__35067__auto____0 = (function (){
var statearr_36086 = [null,null,null,null,null,null,null,null];
(statearr_36086[(0)] = cljs$core$async$state_machine__35067__auto__);

(statearr_36086[(1)] = (1));

return statearr_36086;
});
var cljs$core$async$state_machine__35067__auto____1 = (function (state_36063){
while(true){
var ret_value__35068__auto__ = (function (){try{while(true){
var result__35069__auto__ = switch__35066__auto__(state_36063);
if(cljs.core.keyword_identical_QMARK_(result__35069__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35069__auto__;
}
break;
}
}catch (e36087){var ex__35070__auto__ = e36087;
var statearr_36088_38058 = state_36063;
(statearr_36088_38058[(2)] = ex__35070__auto__);


if(cljs.core.seq((state_36063[(4)]))){
var statearr_36089_38059 = state_36063;
(statearr_36089_38059[(1)] = cljs.core.first((state_36063[(4)])));

} else {
throw ex__35070__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38063 = state_36063;
state_36063 = G__38063;
continue;
} else {
return ret_value__35068__auto__;
}
break;
}
});
cljs$core$async$state_machine__35067__auto__ = function(state_36063){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35067__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35067__auto____1.call(this,state_36063);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35067__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35067__auto____0;
cljs$core$async$state_machine__35067__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35067__auto____1;
return cljs$core$async$state_machine__35067__auto__;
})()
})();
var state__35297__auto__ = (function (){var statearr_36090 = f__35296__auto__();
(statearr_36090[(6)] = c__35295__auto__);

return statearr_36090;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35297__auto__);
}));

return c__35295__auto__;
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
var G__36093 = arguments.length;
switch (G__36093) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_38066 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_38066(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_38067 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_38067(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_38068 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_38068(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_38069 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_38069(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36103 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36103 = (function (ch,cs,meta36104){
this.ch = ch;
this.cs = cs;
this.meta36104 = meta36104;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36103.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36105,meta36104__$1){
var self__ = this;
var _36105__$1 = this;
return (new cljs.core.async.t_cljs$core$async36103(self__.ch,self__.cs,meta36104__$1));
}));

(cljs.core.async.t_cljs$core$async36103.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36105){
var self__ = this;
var _36105__$1 = this;
return self__.meta36104;
}));

(cljs.core.async.t_cljs$core$async36103.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36103.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async36103.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36103.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async36103.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async36103.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async36103.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta36104","meta36104",561110540,null)], null);
}));

(cljs.core.async.t_cljs$core$async36103.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36103.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36103");

(cljs.core.async.t_cljs$core$async36103.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async36103");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36103.
 */
cljs.core.async.__GT_t_cljs$core$async36103 = (function cljs$core$async$mult_$___GT_t_cljs$core$async36103(ch__$1,cs__$1,meta36104){
return (new cljs.core.async.t_cljs$core$async36103(ch__$1,cs__$1,meta36104));
});

}

return (new cljs.core.async.t_cljs$core$async36103(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__35295__auto___38070 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35296__auto__ = (function (){var switch__35066__auto__ = (function (state_36294){
var state_val_36296 = (state_36294[(1)]);
if((state_val_36296 === (7))){
var inst_36286 = (state_36294[(2)]);
var state_36294__$1 = state_36294;
var statearr_36300_38071 = state_36294__$1;
(statearr_36300_38071[(2)] = inst_36286);

(statearr_36300_38071[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36296 === (20))){
var inst_36174 = (state_36294[(7)]);
var inst_36194 = cljs.core.first(inst_36174);
var inst_36195 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36194,(0),null);
var inst_36196 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36194,(1),null);
var state_36294__$1 = (function (){var statearr_36304 = state_36294;
(statearr_36304[(8)] = inst_36195);

return statearr_36304;
})();
if(cljs.core.truth_(inst_36196)){
var statearr_36305_38072 = state_36294__$1;
(statearr_36305_38072[(1)] = (22));

} else {
var statearr_36306_38073 = state_36294__$1;
(statearr_36306_38073[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36296 === (27))){
var inst_36235 = (state_36294[(9)]);
var inst_36228 = (state_36294[(10)]);
var inst_36226 = (state_36294[(11)]);
var inst_36128 = (state_36294[(12)]);
var inst_36235__$1 = cljs.core._nth(inst_36226,inst_36228);
var inst_36236 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_36235__$1,inst_36128,done);
var state_36294__$1 = (function (){var statearr_36311 = state_36294;
(statearr_36311[(9)] = inst_36235__$1);

return statearr_36311;
})();
if(cljs.core.truth_(inst_36236)){
var statearr_36312_38074 = state_36294__$1;
(statearr_36312_38074[(1)] = (30));

} else {
var statearr_36313_38075 = state_36294__$1;
(statearr_36313_38075[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36296 === (1))){
var state_36294__$1 = state_36294;
var statearr_36314_38080 = state_36294__$1;
(statearr_36314_38080[(2)] = null);

(statearr_36314_38080[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36296 === (24))){
var inst_36174 = (state_36294[(7)]);
var inst_36201 = (state_36294[(2)]);
var inst_36202 = cljs.core.next(inst_36174);
var inst_36141 = inst_36202;
var inst_36142 = null;
var inst_36143 = (0);
var inst_36144 = (0);
var state_36294__$1 = (function (){var statearr_36316 = state_36294;
(statearr_36316[(13)] = inst_36142);

(statearr_36316[(14)] = inst_36141);

(statearr_36316[(15)] = inst_36143);

(statearr_36316[(16)] = inst_36144);

(statearr_36316[(17)] = inst_36201);

return statearr_36316;
})();
var statearr_36320_38081 = state_36294__$1;
(statearr_36320_38081[(2)] = null);

(statearr_36320_38081[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36296 === (39))){
var state_36294__$1 = state_36294;
var statearr_36329_38082 = state_36294__$1;
(statearr_36329_38082[(2)] = null);

(statearr_36329_38082[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36296 === (4))){
var inst_36128 = (state_36294[(12)]);
var inst_36128__$1 = (state_36294[(2)]);
var inst_36132 = (inst_36128__$1 == null);
var state_36294__$1 = (function (){var statearr_36332 = state_36294;
(statearr_36332[(12)] = inst_36128__$1);

return statearr_36332;
})();
if(cljs.core.truth_(inst_36132)){
var statearr_36334_38083 = state_36294__$1;
(statearr_36334_38083[(1)] = (5));

} else {
var statearr_36335_38084 = state_36294__$1;
(statearr_36335_38084[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36296 === (15))){
var inst_36142 = (state_36294[(13)]);
var inst_36141 = (state_36294[(14)]);
var inst_36143 = (state_36294[(15)]);
var inst_36144 = (state_36294[(16)]);
var inst_36166 = (state_36294[(2)]);
var inst_36168 = (inst_36144 + (1));
var tmp36322 = inst_36142;
var tmp36323 = inst_36141;
var tmp36324 = inst_36143;
var inst_36141__$1 = tmp36323;
var inst_36142__$1 = tmp36322;
var inst_36143__$1 = tmp36324;
var inst_36144__$1 = inst_36168;
var state_36294__$1 = (function (){var statearr_36337 = state_36294;
(statearr_36337[(18)] = inst_36166);

(statearr_36337[(13)] = inst_36142__$1);

(statearr_36337[(14)] = inst_36141__$1);

(statearr_36337[(15)] = inst_36143__$1);

(statearr_36337[(16)] = inst_36144__$1);

return statearr_36337;
})();
var statearr_36338_38087 = state_36294__$1;
(statearr_36338_38087[(2)] = null);

(statearr_36338_38087[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36296 === (21))){
var inst_36205 = (state_36294[(2)]);
var state_36294__$1 = state_36294;
var statearr_36345_38089 = state_36294__$1;
(statearr_36345_38089[(2)] = inst_36205);

(statearr_36345_38089[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36296 === (31))){
var inst_36235 = (state_36294[(9)]);
var inst_36239 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_36235);
var state_36294__$1 = state_36294;
var statearr_36346_38090 = state_36294__$1;
(statearr_36346_38090[(2)] = inst_36239);

(statearr_36346_38090[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36296 === (32))){
var inst_36227 = (state_36294[(19)]);
var inst_36228 = (state_36294[(10)]);
var inst_36226 = (state_36294[(11)]);
var inst_36225 = (state_36294[(20)]);
var inst_36241 = (state_36294[(2)]);
var inst_36242 = (inst_36228 + (1));
var tmp36341 = inst_36227;
var tmp36342 = inst_36226;
var tmp36343 = inst_36225;
var inst_36225__$1 = tmp36343;
var inst_36226__$1 = tmp36342;
var inst_36227__$1 = tmp36341;
var inst_36228__$1 = inst_36242;
var state_36294__$1 = (function (){var statearr_36351 = state_36294;
(statearr_36351[(19)] = inst_36227__$1);

(statearr_36351[(21)] = inst_36241);

(statearr_36351[(10)] = inst_36228__$1);

(statearr_36351[(11)] = inst_36226__$1);

(statearr_36351[(20)] = inst_36225__$1);

return statearr_36351;
})();
var statearr_36353_38091 = state_36294__$1;
(statearr_36353_38091[(2)] = null);

(statearr_36353_38091[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36296 === (40))){
var inst_36258 = (state_36294[(22)]);
var inst_36262 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_36258);
var state_36294__$1 = state_36294;
var statearr_36354_38094 = state_36294__$1;
(statearr_36354_38094[(2)] = inst_36262);

(statearr_36354_38094[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36296 === (33))){
var inst_36246 = (state_36294[(23)]);
var inst_36248 = cljs.core.chunked_seq_QMARK_(inst_36246);
var state_36294__$1 = state_36294;
if(inst_36248){
var statearr_36356_38095 = state_36294__$1;
(statearr_36356_38095[(1)] = (36));

} else {
var statearr_36357_38096 = state_36294__$1;
(statearr_36357_38096[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36296 === (13))){
var inst_36157 = (state_36294[(24)]);
var inst_36163 = cljs.core.async.close_BANG_(inst_36157);
var state_36294__$1 = state_36294;
var statearr_36361_38097 = state_36294__$1;
(statearr_36361_38097[(2)] = inst_36163);

(statearr_36361_38097[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36296 === (22))){
var inst_36195 = (state_36294[(8)]);
var inst_36198 = cljs.core.async.close_BANG_(inst_36195);
var state_36294__$1 = state_36294;
var statearr_36364_38098 = state_36294__$1;
(statearr_36364_38098[(2)] = inst_36198);

(statearr_36364_38098[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36296 === (36))){
var inst_36246 = (state_36294[(23)]);
var inst_36252 = cljs.core.chunk_first(inst_36246);
var inst_36253 = cljs.core.chunk_rest(inst_36246);
var inst_36254 = cljs.core.count(inst_36252);
var inst_36225 = inst_36253;
var inst_36226 = inst_36252;
var inst_36227 = inst_36254;
var inst_36228 = (0);
var state_36294__$1 = (function (){var statearr_36367 = state_36294;
(statearr_36367[(19)] = inst_36227);

(statearr_36367[(10)] = inst_36228);

(statearr_36367[(11)] = inst_36226);

(statearr_36367[(20)] = inst_36225);

return statearr_36367;
})();
var statearr_36369_38099 = state_36294__$1;
(statearr_36369_38099[(2)] = null);

(statearr_36369_38099[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36296 === (41))){
var inst_36246 = (state_36294[(23)]);
var inst_36264 = (state_36294[(2)]);
var inst_36265 = cljs.core.next(inst_36246);
var inst_36225 = inst_36265;
var inst_36226 = null;
var inst_36227 = (0);
var inst_36228 = (0);
var state_36294__$1 = (function (){var statearr_36380 = state_36294;
(statearr_36380[(19)] = inst_36227);

(statearr_36380[(25)] = inst_36264);

(statearr_36380[(10)] = inst_36228);

(statearr_36380[(11)] = inst_36226);

(statearr_36380[(20)] = inst_36225);

return statearr_36380;
})();
var statearr_36385_38100 = state_36294__$1;
(statearr_36385_38100[(2)] = null);

(statearr_36385_38100[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36296 === (43))){
var state_36294__$1 = state_36294;
var statearr_36390_38101 = state_36294__$1;
(statearr_36390_38101[(2)] = null);

(statearr_36390_38101[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36296 === (29))){
var inst_36273 = (state_36294[(2)]);
var state_36294__$1 = state_36294;
var statearr_36395_38102 = state_36294__$1;
(statearr_36395_38102[(2)] = inst_36273);

(statearr_36395_38102[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36296 === (44))){
var inst_36283 = (state_36294[(2)]);
var state_36294__$1 = (function (){var statearr_36396 = state_36294;
(statearr_36396[(26)] = inst_36283);

return statearr_36396;
})();
var statearr_36397_38103 = state_36294__$1;
(statearr_36397_38103[(2)] = null);

(statearr_36397_38103[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36296 === (6))){
var inst_36216 = (state_36294[(27)]);
var inst_36215 = cljs.core.deref(cs);
var inst_36216__$1 = cljs.core.keys(inst_36215);
var inst_36217 = cljs.core.count(inst_36216__$1);
var inst_36218 = cljs.core.reset_BANG_(dctr,inst_36217);
var inst_36223 = cljs.core.seq(inst_36216__$1);
var inst_36225 = inst_36223;
var inst_36226 = null;
var inst_36227 = (0);
var inst_36228 = (0);
var state_36294__$1 = (function (){var statearr_36398 = state_36294;
(statearr_36398[(27)] = inst_36216__$1);

(statearr_36398[(28)] = inst_36218);

(statearr_36398[(19)] = inst_36227);

(statearr_36398[(10)] = inst_36228);

(statearr_36398[(11)] = inst_36226);

(statearr_36398[(20)] = inst_36225);

return statearr_36398;
})();
var statearr_36399_38104 = state_36294__$1;
(statearr_36399_38104[(2)] = null);

(statearr_36399_38104[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36296 === (28))){
var inst_36246 = (state_36294[(23)]);
var inst_36225 = (state_36294[(20)]);
var inst_36246__$1 = cljs.core.seq(inst_36225);
var state_36294__$1 = (function (){var statearr_36400 = state_36294;
(statearr_36400[(23)] = inst_36246__$1);

return statearr_36400;
})();
if(inst_36246__$1){
var statearr_36401_38105 = state_36294__$1;
(statearr_36401_38105[(1)] = (33));

} else {
var statearr_36403_38106 = state_36294__$1;
(statearr_36403_38106[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36296 === (25))){
var inst_36227 = (state_36294[(19)]);
var inst_36228 = (state_36294[(10)]);
var inst_36232 = (inst_36228 < inst_36227);
var inst_36233 = inst_36232;
var state_36294__$1 = state_36294;
if(cljs.core.truth_(inst_36233)){
var statearr_36408_38107 = state_36294__$1;
(statearr_36408_38107[(1)] = (27));

} else {
var statearr_36409_38108 = state_36294__$1;
(statearr_36409_38108[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36296 === (34))){
var state_36294__$1 = state_36294;
var statearr_36411_38109 = state_36294__$1;
(statearr_36411_38109[(2)] = null);

(statearr_36411_38109[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36296 === (17))){
var state_36294__$1 = state_36294;
var statearr_36414_38110 = state_36294__$1;
(statearr_36414_38110[(2)] = null);

(statearr_36414_38110[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36296 === (3))){
var inst_36288 = (state_36294[(2)]);
var state_36294__$1 = state_36294;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36294__$1,inst_36288);
} else {
if((state_val_36296 === (12))){
var inst_36210 = (state_36294[(2)]);
var state_36294__$1 = state_36294;
var statearr_36416_38111 = state_36294__$1;
(statearr_36416_38111[(2)] = inst_36210);

(statearr_36416_38111[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36296 === (2))){
var state_36294__$1 = state_36294;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36294__$1,(4),ch);
} else {
if((state_val_36296 === (23))){
var state_36294__$1 = state_36294;
var statearr_36418_38116 = state_36294__$1;
(statearr_36418_38116[(2)] = null);

(statearr_36418_38116[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36296 === (35))){
var inst_36271 = (state_36294[(2)]);
var state_36294__$1 = state_36294;
var statearr_36422_38120 = state_36294__$1;
(statearr_36422_38120[(2)] = inst_36271);

(statearr_36422_38120[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36296 === (19))){
var inst_36174 = (state_36294[(7)]);
var inst_36182 = cljs.core.chunk_first(inst_36174);
var inst_36183 = cljs.core.chunk_rest(inst_36174);
var inst_36184 = cljs.core.count(inst_36182);
var inst_36141 = inst_36183;
var inst_36142 = inst_36182;
var inst_36143 = inst_36184;
var inst_36144 = (0);
var state_36294__$1 = (function (){var statearr_36424 = state_36294;
(statearr_36424[(13)] = inst_36142);

(statearr_36424[(14)] = inst_36141);

(statearr_36424[(15)] = inst_36143);

(statearr_36424[(16)] = inst_36144);

return statearr_36424;
})();
var statearr_36425_38121 = state_36294__$1;
(statearr_36425_38121[(2)] = null);

(statearr_36425_38121[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36296 === (11))){
var inst_36141 = (state_36294[(14)]);
var inst_36174 = (state_36294[(7)]);
var inst_36174__$1 = cljs.core.seq(inst_36141);
var state_36294__$1 = (function (){var statearr_36429 = state_36294;
(statearr_36429[(7)] = inst_36174__$1);

return statearr_36429;
})();
if(inst_36174__$1){
var statearr_36430_38125 = state_36294__$1;
(statearr_36430_38125[(1)] = (16));

} else {
var statearr_36431_38126 = state_36294__$1;
(statearr_36431_38126[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36296 === (9))){
var inst_36213 = (state_36294[(2)]);
var state_36294__$1 = state_36294;
var statearr_36433_38127 = state_36294__$1;
(statearr_36433_38127[(2)] = inst_36213);

(statearr_36433_38127[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36296 === (5))){
var inst_36139 = cljs.core.deref(cs);
var inst_36140 = cljs.core.seq(inst_36139);
var inst_36141 = inst_36140;
var inst_36142 = null;
var inst_36143 = (0);
var inst_36144 = (0);
var state_36294__$1 = (function (){var statearr_36434 = state_36294;
(statearr_36434[(13)] = inst_36142);

(statearr_36434[(14)] = inst_36141);

(statearr_36434[(15)] = inst_36143);

(statearr_36434[(16)] = inst_36144);

return statearr_36434;
})();
var statearr_36438_38131 = state_36294__$1;
(statearr_36438_38131[(2)] = null);

(statearr_36438_38131[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36296 === (14))){
var state_36294__$1 = state_36294;
var statearr_36439_38132 = state_36294__$1;
(statearr_36439_38132[(2)] = null);

(statearr_36439_38132[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36296 === (45))){
var inst_36280 = (state_36294[(2)]);
var state_36294__$1 = state_36294;
var statearr_36441_38136 = state_36294__$1;
(statearr_36441_38136[(2)] = inst_36280);

(statearr_36441_38136[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36296 === (26))){
var inst_36216 = (state_36294[(27)]);
var inst_36275 = (state_36294[(2)]);
var inst_36276 = cljs.core.seq(inst_36216);
var state_36294__$1 = (function (){var statearr_36442 = state_36294;
(statearr_36442[(29)] = inst_36275);

return statearr_36442;
})();
if(inst_36276){
var statearr_36445_38137 = state_36294__$1;
(statearr_36445_38137[(1)] = (42));

} else {
var statearr_36447_38138 = state_36294__$1;
(statearr_36447_38138[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36296 === (16))){
var inst_36174 = (state_36294[(7)]);
var inst_36177 = cljs.core.chunked_seq_QMARK_(inst_36174);
var state_36294__$1 = state_36294;
if(inst_36177){
var statearr_36448_38143 = state_36294__$1;
(statearr_36448_38143[(1)] = (19));

} else {
var statearr_36449_38144 = state_36294__$1;
(statearr_36449_38144[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36296 === (38))){
var inst_36268 = (state_36294[(2)]);
var state_36294__$1 = state_36294;
var statearr_36451_38152 = state_36294__$1;
(statearr_36451_38152[(2)] = inst_36268);

(statearr_36451_38152[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36296 === (30))){
var state_36294__$1 = state_36294;
var statearr_36455_38153 = state_36294__$1;
(statearr_36455_38153[(2)] = null);

(statearr_36455_38153[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36296 === (10))){
var inst_36142 = (state_36294[(13)]);
var inst_36144 = (state_36294[(16)]);
var inst_36156 = cljs.core._nth(inst_36142,inst_36144);
var inst_36157 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36156,(0),null);
var inst_36160 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36156,(1),null);
var state_36294__$1 = (function (){var statearr_36457 = state_36294;
(statearr_36457[(24)] = inst_36157);

return statearr_36457;
})();
if(cljs.core.truth_(inst_36160)){
var statearr_36458_38161 = state_36294__$1;
(statearr_36458_38161[(1)] = (13));

} else {
var statearr_36459_38162 = state_36294__$1;
(statearr_36459_38162[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36296 === (18))){
var inst_36208 = (state_36294[(2)]);
var state_36294__$1 = state_36294;
var statearr_36463_38163 = state_36294__$1;
(statearr_36463_38163[(2)] = inst_36208);

(statearr_36463_38163[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36296 === (42))){
var state_36294__$1 = state_36294;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36294__$1,(45),dchan);
} else {
if((state_val_36296 === (37))){
var inst_36246 = (state_36294[(23)]);
var inst_36258 = (state_36294[(22)]);
var inst_36128 = (state_36294[(12)]);
var inst_36258__$1 = cljs.core.first(inst_36246);
var inst_36259 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_36258__$1,inst_36128,done);
var state_36294__$1 = (function (){var statearr_36465 = state_36294;
(statearr_36465[(22)] = inst_36258__$1);

return statearr_36465;
})();
if(cljs.core.truth_(inst_36259)){
var statearr_36466_38167 = state_36294__$1;
(statearr_36466_38167[(1)] = (39));

} else {
var statearr_36469_38168 = state_36294__$1;
(statearr_36469_38168[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36296 === (8))){
var inst_36143 = (state_36294[(15)]);
var inst_36144 = (state_36294[(16)]);
var inst_36149 = (inst_36144 < inst_36143);
var inst_36150 = inst_36149;
var state_36294__$1 = state_36294;
if(cljs.core.truth_(inst_36150)){
var statearr_36471_38169 = state_36294__$1;
(statearr_36471_38169[(1)] = (10));

} else {
var statearr_36472_38173 = state_36294__$1;
(statearr_36472_38173[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__35067__auto__ = null;
var cljs$core$async$mult_$_state_machine__35067__auto____0 = (function (){
var statearr_36480 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36480[(0)] = cljs$core$async$mult_$_state_machine__35067__auto__);

(statearr_36480[(1)] = (1));

return statearr_36480;
});
var cljs$core$async$mult_$_state_machine__35067__auto____1 = (function (state_36294){
while(true){
var ret_value__35068__auto__ = (function (){try{while(true){
var result__35069__auto__ = switch__35066__auto__(state_36294);
if(cljs.core.keyword_identical_QMARK_(result__35069__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35069__auto__;
}
break;
}
}catch (e36484){var ex__35070__auto__ = e36484;
var statearr_36485_38174 = state_36294;
(statearr_36485_38174[(2)] = ex__35070__auto__);


if(cljs.core.seq((state_36294[(4)]))){
var statearr_36486_38175 = state_36294;
(statearr_36486_38175[(1)] = cljs.core.first((state_36294[(4)])));

} else {
throw ex__35070__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38177 = state_36294;
state_36294 = G__38177;
continue;
} else {
return ret_value__35068__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__35067__auto__ = function(state_36294){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__35067__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__35067__auto____1.call(this,state_36294);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__35067__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__35067__auto____0;
cljs$core$async$mult_$_state_machine__35067__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__35067__auto____1;
return cljs$core$async$mult_$_state_machine__35067__auto__;
})()
})();
var state__35297__auto__ = (function (){var statearr_36488 = f__35296__auto__();
(statearr_36488[(6)] = c__35295__auto___38070);

return statearr_36488;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35297__auto__);
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
var G__36494 = arguments.length;
switch (G__36494) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_38179 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_38179(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_38180 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_38180(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_38181 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_38181(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_38182 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_38182(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_38184 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_38184(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___38186 = arguments.length;
var i__4737__auto___38188 = (0);
while(true){
if((i__4737__auto___38188 < len__4736__auto___38186)){
args__4742__auto__.push((arguments[i__4737__auto___38188]));

var G__38192 = (i__4737__auto___38188 + (1));
i__4737__auto___38188 = G__38192;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__36588){
var map__36589 = p__36588;
var map__36589__$1 = (((((!((map__36589 == null))))?(((((map__36589.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36589.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36589):map__36589);
var opts = map__36589__$1;
var statearr_36592_38199 = state;
(statearr_36592_38199[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_36593_38204 = state;
(statearr_36593_38204[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_36594_38206 = state;
(statearr_36594_38206[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq36581){
var G__36582 = cljs.core.first(seq36581);
var seq36581__$1 = cljs.core.next(seq36581);
var G__36583 = cljs.core.first(seq36581__$1);
var seq36581__$2 = cljs.core.next(seq36581__$1);
var G__36584 = cljs.core.first(seq36581__$2);
var seq36581__$3 = cljs.core.next(seq36581__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36582,G__36583,G__36584,seq36581__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36599 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36599 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta36600){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta36600 = meta36600;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36599.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36601,meta36600__$1){
var self__ = this;
var _36601__$1 = this;
return (new cljs.core.async.t_cljs$core$async36599(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta36600__$1));
}));

(cljs.core.async.t_cljs$core$async36599.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36601){
var self__ = this;
var _36601__$1 = this;
return self__.meta36600;
}));

(cljs.core.async.t_cljs$core$async36599.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36599.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async36599.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36599.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async36599.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async36599.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async36599.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async36599.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async36599.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta36600","meta36600",1922654589,null)], null);
}));

(cljs.core.async.t_cljs$core$async36599.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36599.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36599");

(cljs.core.async.t_cljs$core$async36599.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async36599");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36599.
 */
cljs.core.async.__GT_t_cljs$core$async36599 = (function cljs$core$async$mix_$___GT_t_cljs$core$async36599(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta36600){
return (new cljs.core.async.t_cljs$core$async36599(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta36600));
});

}

return (new cljs.core.async.t_cljs$core$async36599(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__35295__auto___38256 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35296__auto__ = (function (){var switch__35066__auto__ = (function (state_36725){
var state_val_36726 = (state_36725[(1)]);
if((state_val_36726 === (7))){
var inst_36640 = (state_36725[(2)]);
var state_36725__$1 = state_36725;
var statearr_36727_38261 = state_36725__$1;
(statearr_36727_38261[(2)] = inst_36640);

(statearr_36727_38261[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36726 === (20))){
var inst_36652 = (state_36725[(7)]);
var state_36725__$1 = state_36725;
var statearr_36728_38268 = state_36725__$1;
(statearr_36728_38268[(2)] = inst_36652);

(statearr_36728_38268[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36726 === (27))){
var state_36725__$1 = state_36725;
var statearr_36729_38270 = state_36725__$1;
(statearr_36729_38270[(2)] = null);

(statearr_36729_38270[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36726 === (1))){
var inst_36627 = (state_36725[(8)]);
var inst_36627__$1 = calc_state();
var inst_36629 = (inst_36627__$1 == null);
var inst_36630 = cljs.core.not(inst_36629);
var state_36725__$1 = (function (){var statearr_36730 = state_36725;
(statearr_36730[(8)] = inst_36627__$1);

return statearr_36730;
})();
if(inst_36630){
var statearr_36731_38271 = state_36725__$1;
(statearr_36731_38271[(1)] = (2));

} else {
var statearr_36732_38278 = state_36725__$1;
(statearr_36732_38278[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36726 === (24))){
var inst_36676 = (state_36725[(9)]);
var inst_36699 = (state_36725[(10)]);
var inst_36685 = (state_36725[(11)]);
var inst_36699__$1 = (inst_36676.cljs$core$IFn$_invoke$arity$1 ? inst_36676.cljs$core$IFn$_invoke$arity$1(inst_36685) : inst_36676.call(null,inst_36685));
var state_36725__$1 = (function (){var statearr_36733 = state_36725;
(statearr_36733[(10)] = inst_36699__$1);

return statearr_36733;
})();
if(cljs.core.truth_(inst_36699__$1)){
var statearr_36738_38296 = state_36725__$1;
(statearr_36738_38296[(1)] = (29));

} else {
var statearr_36739_38297 = state_36725__$1;
(statearr_36739_38297[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36726 === (4))){
var inst_36643 = (state_36725[(2)]);
var state_36725__$1 = state_36725;
if(cljs.core.truth_(inst_36643)){
var statearr_36741_38311 = state_36725__$1;
(statearr_36741_38311[(1)] = (8));

} else {
var statearr_36742_38350 = state_36725__$1;
(statearr_36742_38350[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36726 === (15))){
var inst_36670 = (state_36725[(2)]);
var state_36725__$1 = state_36725;
if(cljs.core.truth_(inst_36670)){
var statearr_36743_38358 = state_36725__$1;
(statearr_36743_38358[(1)] = (19));

} else {
var statearr_36744_38359 = state_36725__$1;
(statearr_36744_38359[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36726 === (21))){
var inst_36675 = (state_36725[(12)]);
var inst_36675__$1 = (state_36725[(2)]);
var inst_36676 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_36675__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_36677 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_36675__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_36678 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_36675__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_36725__$1 = (function (){var statearr_36746 = state_36725;
(statearr_36746[(9)] = inst_36676);

(statearr_36746[(13)] = inst_36677);

(statearr_36746[(12)] = inst_36675__$1);

return statearr_36746;
})();
return cljs.core.async.ioc_alts_BANG_(state_36725__$1,(22),inst_36678);
} else {
if((state_val_36726 === (31))){
var inst_36707 = (state_36725[(2)]);
var state_36725__$1 = state_36725;
if(cljs.core.truth_(inst_36707)){
var statearr_36748_38374 = state_36725__$1;
(statearr_36748_38374[(1)] = (32));

} else {
var statearr_36749_38375 = state_36725__$1;
(statearr_36749_38375[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36726 === (32))){
var inst_36684 = (state_36725[(14)]);
var state_36725__$1 = state_36725;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36725__$1,(35),out,inst_36684);
} else {
if((state_val_36726 === (33))){
var inst_36675 = (state_36725[(12)]);
var inst_36652 = inst_36675;
var state_36725__$1 = (function (){var statearr_36750 = state_36725;
(statearr_36750[(7)] = inst_36652);

return statearr_36750;
})();
var statearr_36751_38384 = state_36725__$1;
(statearr_36751_38384[(2)] = null);

(statearr_36751_38384[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36726 === (13))){
var inst_36652 = (state_36725[(7)]);
var inst_36659 = inst_36652.cljs$lang$protocol_mask$partition0$;
var inst_36660 = (inst_36659 & (64));
var inst_36661 = inst_36652.cljs$core$ISeq$;
var inst_36662 = (cljs.core.PROTOCOL_SENTINEL === inst_36661);
var inst_36663 = ((inst_36660) || (inst_36662));
var state_36725__$1 = state_36725;
if(cljs.core.truth_(inst_36663)){
var statearr_36752_38385 = state_36725__$1;
(statearr_36752_38385[(1)] = (16));

} else {
var statearr_36753_38390 = state_36725__$1;
(statearr_36753_38390[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36726 === (22))){
var inst_36684 = (state_36725[(14)]);
var inst_36685 = (state_36725[(11)]);
var inst_36683 = (state_36725[(2)]);
var inst_36684__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36683,(0),null);
var inst_36685__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36683,(1),null);
var inst_36686 = (inst_36684__$1 == null);
var inst_36687 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36685__$1,change);
var inst_36688 = ((inst_36686) || (inst_36687));
var state_36725__$1 = (function (){var statearr_36754 = state_36725;
(statearr_36754[(14)] = inst_36684__$1);

(statearr_36754[(11)] = inst_36685__$1);

return statearr_36754;
})();
if(cljs.core.truth_(inst_36688)){
var statearr_36756_38391 = state_36725__$1;
(statearr_36756_38391[(1)] = (23));

} else {
var statearr_36758_38392 = state_36725__$1;
(statearr_36758_38392[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36726 === (36))){
var inst_36675 = (state_36725[(12)]);
var inst_36652 = inst_36675;
var state_36725__$1 = (function (){var statearr_36759 = state_36725;
(statearr_36759[(7)] = inst_36652);

return statearr_36759;
})();
var statearr_36760_38393 = state_36725__$1;
(statearr_36760_38393[(2)] = null);

(statearr_36760_38393[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36726 === (29))){
var inst_36699 = (state_36725[(10)]);
var state_36725__$1 = state_36725;
var statearr_36763_38394 = state_36725__$1;
(statearr_36763_38394[(2)] = inst_36699);

(statearr_36763_38394[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36726 === (6))){
var state_36725__$1 = state_36725;
var statearr_36764_38396 = state_36725__$1;
(statearr_36764_38396[(2)] = false);

(statearr_36764_38396[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36726 === (28))){
var inst_36695 = (state_36725[(2)]);
var inst_36696 = calc_state();
var inst_36652 = inst_36696;
var state_36725__$1 = (function (){var statearr_36767 = state_36725;
(statearr_36767[(7)] = inst_36652);

(statearr_36767[(15)] = inst_36695);

return statearr_36767;
})();
var statearr_36768_38397 = state_36725__$1;
(statearr_36768_38397[(2)] = null);

(statearr_36768_38397[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36726 === (25))){
var inst_36721 = (state_36725[(2)]);
var state_36725__$1 = state_36725;
var statearr_36769_38398 = state_36725__$1;
(statearr_36769_38398[(2)] = inst_36721);

(statearr_36769_38398[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36726 === (34))){
var inst_36719 = (state_36725[(2)]);
var state_36725__$1 = state_36725;
var statearr_36770_38399 = state_36725__$1;
(statearr_36770_38399[(2)] = inst_36719);

(statearr_36770_38399[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36726 === (17))){
var state_36725__$1 = state_36725;
var statearr_36771_38400 = state_36725__$1;
(statearr_36771_38400[(2)] = false);

(statearr_36771_38400[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36726 === (3))){
var state_36725__$1 = state_36725;
var statearr_36772_38407 = state_36725__$1;
(statearr_36772_38407[(2)] = false);

(statearr_36772_38407[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36726 === (12))){
var inst_36723 = (state_36725[(2)]);
var state_36725__$1 = state_36725;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36725__$1,inst_36723);
} else {
if((state_val_36726 === (2))){
var inst_36627 = (state_36725[(8)]);
var inst_36632 = inst_36627.cljs$lang$protocol_mask$partition0$;
var inst_36633 = (inst_36632 & (64));
var inst_36634 = inst_36627.cljs$core$ISeq$;
var inst_36635 = (cljs.core.PROTOCOL_SENTINEL === inst_36634);
var inst_36636 = ((inst_36633) || (inst_36635));
var state_36725__$1 = state_36725;
if(cljs.core.truth_(inst_36636)){
var statearr_36773_38410 = state_36725__$1;
(statearr_36773_38410[(1)] = (5));

} else {
var statearr_36774_38411 = state_36725__$1;
(statearr_36774_38411[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36726 === (23))){
var inst_36684 = (state_36725[(14)]);
var inst_36690 = (inst_36684 == null);
var state_36725__$1 = state_36725;
if(cljs.core.truth_(inst_36690)){
var statearr_36775_38415 = state_36725__$1;
(statearr_36775_38415[(1)] = (26));

} else {
var statearr_36776_38418 = state_36725__$1;
(statearr_36776_38418[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36726 === (35))){
var inst_36710 = (state_36725[(2)]);
var state_36725__$1 = state_36725;
if(cljs.core.truth_(inst_36710)){
var statearr_36777_38420 = state_36725__$1;
(statearr_36777_38420[(1)] = (36));

} else {
var statearr_36778_38421 = state_36725__$1;
(statearr_36778_38421[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36726 === (19))){
var inst_36652 = (state_36725[(7)]);
var inst_36672 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_36652);
var state_36725__$1 = state_36725;
var statearr_36780_38422 = state_36725__$1;
(statearr_36780_38422[(2)] = inst_36672);

(statearr_36780_38422[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36726 === (11))){
var inst_36652 = (state_36725[(7)]);
var inst_36656 = (inst_36652 == null);
var inst_36657 = cljs.core.not(inst_36656);
var state_36725__$1 = state_36725;
if(inst_36657){
var statearr_36781_38424 = state_36725__$1;
(statearr_36781_38424[(1)] = (13));

} else {
var statearr_36782_38425 = state_36725__$1;
(statearr_36782_38425[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36726 === (9))){
var inst_36627 = (state_36725[(8)]);
var state_36725__$1 = state_36725;
var statearr_36784_38426 = state_36725__$1;
(statearr_36784_38426[(2)] = inst_36627);

(statearr_36784_38426[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36726 === (5))){
var state_36725__$1 = state_36725;
var statearr_36785_38428 = state_36725__$1;
(statearr_36785_38428[(2)] = true);

(statearr_36785_38428[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36726 === (14))){
var state_36725__$1 = state_36725;
var statearr_36786_38429 = state_36725__$1;
(statearr_36786_38429[(2)] = false);

(statearr_36786_38429[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36726 === (26))){
var inst_36685 = (state_36725[(11)]);
var inst_36692 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_36685);
var state_36725__$1 = state_36725;
var statearr_36787_38431 = state_36725__$1;
(statearr_36787_38431[(2)] = inst_36692);

(statearr_36787_38431[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36726 === (16))){
var state_36725__$1 = state_36725;
var statearr_36788_38432 = state_36725__$1;
(statearr_36788_38432[(2)] = true);

(statearr_36788_38432[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36726 === (38))){
var inst_36715 = (state_36725[(2)]);
var state_36725__$1 = state_36725;
var statearr_36793_38434 = state_36725__$1;
(statearr_36793_38434[(2)] = inst_36715);

(statearr_36793_38434[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36726 === (30))){
var inst_36676 = (state_36725[(9)]);
var inst_36685 = (state_36725[(11)]);
var inst_36677 = (state_36725[(13)]);
var inst_36702 = cljs.core.empty_QMARK_(inst_36676);
var inst_36703 = (inst_36677.cljs$core$IFn$_invoke$arity$1 ? inst_36677.cljs$core$IFn$_invoke$arity$1(inst_36685) : inst_36677.call(null,inst_36685));
var inst_36704 = cljs.core.not(inst_36703);
var inst_36705 = ((inst_36702) && (inst_36704));
var state_36725__$1 = state_36725;
var statearr_36794_38437 = state_36725__$1;
(statearr_36794_38437[(2)] = inst_36705);

(statearr_36794_38437[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36726 === (10))){
var inst_36627 = (state_36725[(8)]);
var inst_36648 = (state_36725[(2)]);
var inst_36649 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_36648,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_36650 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_36648,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_36651 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_36648,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_36652 = inst_36627;
var state_36725__$1 = (function (){var statearr_36795 = state_36725;
(statearr_36795[(16)] = inst_36649);

(statearr_36795[(7)] = inst_36652);

(statearr_36795[(17)] = inst_36651);

(statearr_36795[(18)] = inst_36650);

return statearr_36795;
})();
var statearr_36797_38441 = state_36725__$1;
(statearr_36797_38441[(2)] = null);

(statearr_36797_38441[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36726 === (18))){
var inst_36667 = (state_36725[(2)]);
var state_36725__$1 = state_36725;
var statearr_36798_38443 = state_36725__$1;
(statearr_36798_38443[(2)] = inst_36667);

(statearr_36798_38443[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36726 === (37))){
var state_36725__$1 = state_36725;
var statearr_36800_38445 = state_36725__$1;
(statearr_36800_38445[(2)] = null);

(statearr_36800_38445[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36726 === (8))){
var inst_36627 = (state_36725[(8)]);
var inst_36645 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_36627);
var state_36725__$1 = state_36725;
var statearr_36802_38447 = state_36725__$1;
(statearr_36802_38447[(2)] = inst_36645);

(statearr_36802_38447[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__35067__auto__ = null;
var cljs$core$async$mix_$_state_machine__35067__auto____0 = (function (){
var statearr_36806 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36806[(0)] = cljs$core$async$mix_$_state_machine__35067__auto__);

(statearr_36806[(1)] = (1));

return statearr_36806;
});
var cljs$core$async$mix_$_state_machine__35067__auto____1 = (function (state_36725){
while(true){
var ret_value__35068__auto__ = (function (){try{while(true){
var result__35069__auto__ = switch__35066__auto__(state_36725);
if(cljs.core.keyword_identical_QMARK_(result__35069__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35069__auto__;
}
break;
}
}catch (e36807){var ex__35070__auto__ = e36807;
var statearr_36808_38458 = state_36725;
(statearr_36808_38458[(2)] = ex__35070__auto__);


if(cljs.core.seq((state_36725[(4)]))){
var statearr_36809_38460 = state_36725;
(statearr_36809_38460[(1)] = cljs.core.first((state_36725[(4)])));

} else {
throw ex__35070__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38461 = state_36725;
state_36725 = G__38461;
continue;
} else {
return ret_value__35068__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__35067__auto__ = function(state_36725){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__35067__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__35067__auto____1.call(this,state_36725);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__35067__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__35067__auto____0;
cljs$core$async$mix_$_state_machine__35067__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__35067__auto____1;
return cljs$core$async$mix_$_state_machine__35067__auto__;
})()
})();
var state__35297__auto__ = (function (){var statearr_36810 = f__35296__auto__();
(statearr_36810[(6)] = c__35295__auto___38256);

return statearr_36810;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35297__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_38472 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_38472(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_38508 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_38508(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_38540 = (function() {
var G__38541 = null;
var G__38541__1 = (function (p){
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
var G__38541__2 = (function (p,v){
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
G__38541 = function(p,v){
switch(arguments.length){
case 1:
return G__38541__1.call(this,p);
case 2:
return G__38541__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__38541.cljs$core$IFn$_invoke$arity$1 = G__38541__1;
G__38541.cljs$core$IFn$_invoke$arity$2 = G__38541__2;
return G__38541;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__36847 = arguments.length;
switch (G__36847) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_38540(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_38540(p,v);
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
var G__36854 = arguments.length;
switch (G__36854) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__36852_SHARP_){
if(cljs.core.truth_((p1__36852_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__36852_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__36852_SHARP_.call(null,topic)))){
return p1__36852_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__36852_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36863 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36863 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta36864){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta36864 = meta36864;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36863.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36865,meta36864__$1){
var self__ = this;
var _36865__$1 = this;
return (new cljs.core.async.t_cljs$core$async36863(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta36864__$1));
}));

(cljs.core.async.t_cljs$core$async36863.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36865){
var self__ = this;
var _36865__$1 = this;
return self__.meta36864;
}));

(cljs.core.async.t_cljs$core$async36863.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36863.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async36863.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36863.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async36863.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async36863.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async36863.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async36863.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta36864","meta36864",-85802020,null)], null);
}));

(cljs.core.async.t_cljs$core$async36863.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36863.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36863");

(cljs.core.async.t_cljs$core$async36863.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async36863");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36863.
 */
cljs.core.async.__GT_t_cljs$core$async36863 = (function cljs$core$async$__GT_t_cljs$core$async36863(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta36864){
return (new cljs.core.async.t_cljs$core$async36863(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta36864));
});

}

return (new cljs.core.async.t_cljs$core$async36863(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__35295__auto___38610 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35296__auto__ = (function (){var switch__35066__auto__ = (function (state_36944){
var state_val_36945 = (state_36944[(1)]);
if((state_val_36945 === (7))){
var inst_36936 = (state_36944[(2)]);
var state_36944__$1 = state_36944;
var statearr_36946_38614 = state_36944__$1;
(statearr_36946_38614[(2)] = inst_36936);

(statearr_36946_38614[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36945 === (20))){
var state_36944__$1 = state_36944;
var statearr_36947_38615 = state_36944__$1;
(statearr_36947_38615[(2)] = null);

(statearr_36947_38615[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36945 === (1))){
var state_36944__$1 = state_36944;
var statearr_36948_38619 = state_36944__$1;
(statearr_36948_38619[(2)] = null);

(statearr_36948_38619[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36945 === (24))){
var inst_36918 = (state_36944[(7)]);
var inst_36928 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_36918);
var state_36944__$1 = state_36944;
var statearr_36949_38620 = state_36944__$1;
(statearr_36949_38620[(2)] = inst_36928);

(statearr_36949_38620[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36945 === (4))){
var inst_36870 = (state_36944[(8)]);
var inst_36870__$1 = (state_36944[(2)]);
var inst_36871 = (inst_36870__$1 == null);
var state_36944__$1 = (function (){var statearr_36950 = state_36944;
(statearr_36950[(8)] = inst_36870__$1);

return statearr_36950;
})();
if(cljs.core.truth_(inst_36871)){
var statearr_36951_38625 = state_36944__$1;
(statearr_36951_38625[(1)] = (5));

} else {
var statearr_36952_38626 = state_36944__$1;
(statearr_36952_38626[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36945 === (15))){
var inst_36912 = (state_36944[(2)]);
var state_36944__$1 = state_36944;
var statearr_36953_38628 = state_36944__$1;
(statearr_36953_38628[(2)] = inst_36912);

(statearr_36953_38628[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36945 === (21))){
var inst_36933 = (state_36944[(2)]);
var state_36944__$1 = (function (){var statearr_36954 = state_36944;
(statearr_36954[(9)] = inst_36933);

return statearr_36954;
})();
var statearr_36955_38632 = state_36944__$1;
(statearr_36955_38632[(2)] = null);

(statearr_36955_38632[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36945 === (13))){
var inst_36894 = (state_36944[(10)]);
var inst_36896 = cljs.core.chunked_seq_QMARK_(inst_36894);
var state_36944__$1 = state_36944;
if(inst_36896){
var statearr_36956_38634 = state_36944__$1;
(statearr_36956_38634[(1)] = (16));

} else {
var statearr_36957_38635 = state_36944__$1;
(statearr_36957_38635[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36945 === (22))){
var inst_36925 = (state_36944[(2)]);
var state_36944__$1 = state_36944;
if(cljs.core.truth_(inst_36925)){
var statearr_36958_38636 = state_36944__$1;
(statearr_36958_38636[(1)] = (23));

} else {
var statearr_36959_38637 = state_36944__$1;
(statearr_36959_38637[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36945 === (6))){
var inst_36921 = (state_36944[(11)]);
var inst_36870 = (state_36944[(8)]);
var inst_36918 = (state_36944[(7)]);
var inst_36918__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_36870) : topic_fn.call(null,inst_36870));
var inst_36920 = cljs.core.deref(mults);
var inst_36921__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_36920,inst_36918__$1);
var state_36944__$1 = (function (){var statearr_36960 = state_36944;
(statearr_36960[(11)] = inst_36921__$1);

(statearr_36960[(7)] = inst_36918__$1);

return statearr_36960;
})();
if(cljs.core.truth_(inst_36921__$1)){
var statearr_36961_38638 = state_36944__$1;
(statearr_36961_38638[(1)] = (19));

} else {
var statearr_36962_38639 = state_36944__$1;
(statearr_36962_38639[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36945 === (25))){
var inst_36930 = (state_36944[(2)]);
var state_36944__$1 = state_36944;
var statearr_36963_38640 = state_36944__$1;
(statearr_36963_38640[(2)] = inst_36930);

(statearr_36963_38640[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36945 === (17))){
var inst_36894 = (state_36944[(10)]);
var inst_36903 = cljs.core.first(inst_36894);
var inst_36904 = cljs.core.async.muxch_STAR_(inst_36903);
var inst_36905 = cljs.core.async.close_BANG_(inst_36904);
var inst_36906 = cljs.core.next(inst_36894);
var inst_36880 = inst_36906;
var inst_36881 = null;
var inst_36882 = (0);
var inst_36883 = (0);
var state_36944__$1 = (function (){var statearr_36964 = state_36944;
(statearr_36964[(12)] = inst_36883);

(statearr_36964[(13)] = inst_36905);

(statearr_36964[(14)] = inst_36880);

(statearr_36964[(15)] = inst_36882);

(statearr_36964[(16)] = inst_36881);

return statearr_36964;
})();
var statearr_36967_38644 = state_36944__$1;
(statearr_36967_38644[(2)] = null);

(statearr_36967_38644[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36945 === (3))){
var inst_36939 = (state_36944[(2)]);
var state_36944__$1 = state_36944;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36944__$1,inst_36939);
} else {
if((state_val_36945 === (12))){
var inst_36914 = (state_36944[(2)]);
var state_36944__$1 = state_36944;
var statearr_36970_38648 = state_36944__$1;
(statearr_36970_38648[(2)] = inst_36914);

(statearr_36970_38648[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36945 === (2))){
var state_36944__$1 = state_36944;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36944__$1,(4),ch);
} else {
if((state_val_36945 === (23))){
var state_36944__$1 = state_36944;
var statearr_36971_38649 = state_36944__$1;
(statearr_36971_38649[(2)] = null);

(statearr_36971_38649[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36945 === (19))){
var inst_36921 = (state_36944[(11)]);
var inst_36870 = (state_36944[(8)]);
var inst_36923 = cljs.core.async.muxch_STAR_(inst_36921);
var state_36944__$1 = state_36944;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36944__$1,(22),inst_36923,inst_36870);
} else {
if((state_val_36945 === (11))){
var inst_36894 = (state_36944[(10)]);
var inst_36880 = (state_36944[(14)]);
var inst_36894__$1 = cljs.core.seq(inst_36880);
var state_36944__$1 = (function (){var statearr_36973 = state_36944;
(statearr_36973[(10)] = inst_36894__$1);

return statearr_36973;
})();
if(inst_36894__$1){
var statearr_36974_38650 = state_36944__$1;
(statearr_36974_38650[(1)] = (13));

} else {
var statearr_36975_38651 = state_36944__$1;
(statearr_36975_38651[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36945 === (9))){
var inst_36916 = (state_36944[(2)]);
var state_36944__$1 = state_36944;
var statearr_36976_38652 = state_36944__$1;
(statearr_36976_38652[(2)] = inst_36916);

(statearr_36976_38652[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36945 === (5))){
var inst_36877 = cljs.core.deref(mults);
var inst_36878 = cljs.core.vals(inst_36877);
var inst_36879 = cljs.core.seq(inst_36878);
var inst_36880 = inst_36879;
var inst_36881 = null;
var inst_36882 = (0);
var inst_36883 = (0);
var state_36944__$1 = (function (){var statearr_36977 = state_36944;
(statearr_36977[(12)] = inst_36883);

(statearr_36977[(14)] = inst_36880);

(statearr_36977[(15)] = inst_36882);

(statearr_36977[(16)] = inst_36881);

return statearr_36977;
})();
var statearr_36978_38653 = state_36944__$1;
(statearr_36978_38653[(2)] = null);

(statearr_36978_38653[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36945 === (14))){
var state_36944__$1 = state_36944;
var statearr_36982_38656 = state_36944__$1;
(statearr_36982_38656[(2)] = null);

(statearr_36982_38656[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36945 === (16))){
var inst_36894 = (state_36944[(10)]);
var inst_36898 = cljs.core.chunk_first(inst_36894);
var inst_36899 = cljs.core.chunk_rest(inst_36894);
var inst_36900 = cljs.core.count(inst_36898);
var inst_36880 = inst_36899;
var inst_36881 = inst_36898;
var inst_36882 = inst_36900;
var inst_36883 = (0);
var state_36944__$1 = (function (){var statearr_36984 = state_36944;
(statearr_36984[(12)] = inst_36883);

(statearr_36984[(14)] = inst_36880);

(statearr_36984[(15)] = inst_36882);

(statearr_36984[(16)] = inst_36881);

return statearr_36984;
})();
var statearr_36985_38657 = state_36944__$1;
(statearr_36985_38657[(2)] = null);

(statearr_36985_38657[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36945 === (10))){
var inst_36883 = (state_36944[(12)]);
var inst_36880 = (state_36944[(14)]);
var inst_36882 = (state_36944[(15)]);
var inst_36881 = (state_36944[(16)]);
var inst_36888 = cljs.core._nth(inst_36881,inst_36883);
var inst_36889 = cljs.core.async.muxch_STAR_(inst_36888);
var inst_36890 = cljs.core.async.close_BANG_(inst_36889);
var inst_36891 = (inst_36883 + (1));
var tmp36979 = inst_36880;
var tmp36980 = inst_36882;
var tmp36981 = inst_36881;
var inst_36880__$1 = tmp36979;
var inst_36881__$1 = tmp36981;
var inst_36882__$1 = tmp36980;
var inst_36883__$1 = inst_36891;
var state_36944__$1 = (function (){var statearr_36987 = state_36944;
(statearr_36987[(17)] = inst_36890);

(statearr_36987[(12)] = inst_36883__$1);

(statearr_36987[(14)] = inst_36880__$1);

(statearr_36987[(15)] = inst_36882__$1);

(statearr_36987[(16)] = inst_36881__$1);

return statearr_36987;
})();
var statearr_36988_38658 = state_36944__$1;
(statearr_36988_38658[(2)] = null);

(statearr_36988_38658[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36945 === (18))){
var inst_36909 = (state_36944[(2)]);
var state_36944__$1 = state_36944;
var statearr_36989_38659 = state_36944__$1;
(statearr_36989_38659[(2)] = inst_36909);

(statearr_36989_38659[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36945 === (8))){
var inst_36883 = (state_36944[(12)]);
var inst_36882 = (state_36944[(15)]);
var inst_36885 = (inst_36883 < inst_36882);
var inst_36886 = inst_36885;
var state_36944__$1 = state_36944;
if(cljs.core.truth_(inst_36886)){
var statearr_36990_38662 = state_36944__$1;
(statearr_36990_38662[(1)] = (10));

} else {
var statearr_36991_38663 = state_36944__$1;
(statearr_36991_38663[(1)] = (11));

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
var cljs$core$async$state_machine__35067__auto__ = null;
var cljs$core$async$state_machine__35067__auto____0 = (function (){
var statearr_36992 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36992[(0)] = cljs$core$async$state_machine__35067__auto__);

(statearr_36992[(1)] = (1));

return statearr_36992;
});
var cljs$core$async$state_machine__35067__auto____1 = (function (state_36944){
while(true){
var ret_value__35068__auto__ = (function (){try{while(true){
var result__35069__auto__ = switch__35066__auto__(state_36944);
if(cljs.core.keyword_identical_QMARK_(result__35069__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35069__auto__;
}
break;
}
}catch (e36993){var ex__35070__auto__ = e36993;
var statearr_36994_38665 = state_36944;
(statearr_36994_38665[(2)] = ex__35070__auto__);


if(cljs.core.seq((state_36944[(4)]))){
var statearr_36995_38666 = state_36944;
(statearr_36995_38666[(1)] = cljs.core.first((state_36944[(4)])));

} else {
throw ex__35070__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38671 = state_36944;
state_36944 = G__38671;
continue;
} else {
return ret_value__35068__auto__;
}
break;
}
});
cljs$core$async$state_machine__35067__auto__ = function(state_36944){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35067__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35067__auto____1.call(this,state_36944);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35067__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35067__auto____0;
cljs$core$async$state_machine__35067__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35067__auto____1;
return cljs$core$async$state_machine__35067__auto__;
})()
})();
var state__35297__auto__ = (function (){var statearr_36996 = f__35296__auto__();
(statearr_36996[(6)] = c__35295__auto___38610);

return statearr_36996;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35297__auto__);
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
var G__36999 = arguments.length;
switch (G__36999) {
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
var G__37004 = arguments.length;
switch (G__37004) {
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
var G__37009 = arguments.length;
switch (G__37009) {
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
var c__35295__auto___38683 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35296__auto__ = (function (){var switch__35066__auto__ = (function (state_37056){
var state_val_37057 = (state_37056[(1)]);
if((state_val_37057 === (7))){
var state_37056__$1 = state_37056;
var statearr_37062_38684 = state_37056__$1;
(statearr_37062_38684[(2)] = null);

(statearr_37062_38684[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37057 === (1))){
var state_37056__$1 = state_37056;
var statearr_37063_38685 = state_37056__$1;
(statearr_37063_38685[(2)] = null);

(statearr_37063_38685[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37057 === (4))){
var inst_37013 = (state_37056[(7)]);
var inst_37012 = (state_37056[(8)]);
var inst_37015 = (inst_37013 < inst_37012);
var state_37056__$1 = state_37056;
if(cljs.core.truth_(inst_37015)){
var statearr_37064_38686 = state_37056__$1;
(statearr_37064_38686[(1)] = (6));

} else {
var statearr_37065_38687 = state_37056__$1;
(statearr_37065_38687[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37057 === (15))){
var inst_37042 = (state_37056[(9)]);
var inst_37047 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_37042);
var state_37056__$1 = state_37056;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37056__$1,(17),out,inst_37047);
} else {
if((state_val_37057 === (13))){
var inst_37042 = (state_37056[(9)]);
var inst_37042__$1 = (state_37056[(2)]);
var inst_37043 = cljs.core.some(cljs.core.nil_QMARK_,inst_37042__$1);
var state_37056__$1 = (function (){var statearr_37066 = state_37056;
(statearr_37066[(9)] = inst_37042__$1);

return statearr_37066;
})();
if(cljs.core.truth_(inst_37043)){
var statearr_37067_38688 = state_37056__$1;
(statearr_37067_38688[(1)] = (14));

} else {
var statearr_37069_38689 = state_37056__$1;
(statearr_37069_38689[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37057 === (6))){
var state_37056__$1 = state_37056;
var statearr_37071_38690 = state_37056__$1;
(statearr_37071_38690[(2)] = null);

(statearr_37071_38690[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37057 === (17))){
var inst_37049 = (state_37056[(2)]);
var state_37056__$1 = (function (){var statearr_37076 = state_37056;
(statearr_37076[(10)] = inst_37049);

return statearr_37076;
})();
var statearr_37077_38691 = state_37056__$1;
(statearr_37077_38691[(2)] = null);

(statearr_37077_38691[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37057 === (3))){
var inst_37054 = (state_37056[(2)]);
var state_37056__$1 = state_37056;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37056__$1,inst_37054);
} else {
if((state_val_37057 === (12))){
var _ = (function (){var statearr_37078 = state_37056;
(statearr_37078[(4)] = cljs.core.rest((state_37056[(4)])));

return statearr_37078;
})();
var state_37056__$1 = state_37056;
var ex37075 = (state_37056__$1[(2)]);
var statearr_37079_38692 = state_37056__$1;
(statearr_37079_38692[(5)] = ex37075);


if((ex37075 instanceof Object)){
var statearr_37080_38693 = state_37056__$1;
(statearr_37080_38693[(1)] = (11));

(statearr_37080_38693[(5)] = null);

} else {
throw ex37075;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37057 === (2))){
var inst_37011 = cljs.core.reset_BANG_(dctr,cnt);
var inst_37012 = cnt;
var inst_37013 = (0);
var state_37056__$1 = (function (){var statearr_37081 = state_37056;
(statearr_37081[(11)] = inst_37011);

(statearr_37081[(7)] = inst_37013);

(statearr_37081[(8)] = inst_37012);

return statearr_37081;
})();
var statearr_37082_38694 = state_37056__$1;
(statearr_37082_38694[(2)] = null);

(statearr_37082_38694[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37057 === (11))){
var inst_37018 = (state_37056[(2)]);
var inst_37022 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_37056__$1 = (function (){var statearr_37083 = state_37056;
(statearr_37083[(12)] = inst_37018);

return statearr_37083;
})();
var statearr_37084_38699 = state_37056__$1;
(statearr_37084_38699[(2)] = inst_37022);

(statearr_37084_38699[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37057 === (9))){
var inst_37013 = (state_37056[(7)]);
var _ = (function (){var statearr_37085 = state_37056;
(statearr_37085[(4)] = cljs.core.cons((12),(state_37056[(4)])));

return statearr_37085;
})();
var inst_37028 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_37013) : chs__$1.call(null,inst_37013));
var inst_37029 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_37013) : done.call(null,inst_37013));
var inst_37030 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_37028,inst_37029);
var ___$1 = (function (){var statearr_37086 = state_37056;
(statearr_37086[(4)] = cljs.core.rest((state_37056[(4)])));

return statearr_37086;
})();
var state_37056__$1 = state_37056;
var statearr_37087_38700 = state_37056__$1;
(statearr_37087_38700[(2)] = inst_37030);

(statearr_37087_38700[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37057 === (5))){
var inst_37040 = (state_37056[(2)]);
var state_37056__$1 = (function (){var statearr_37088 = state_37056;
(statearr_37088[(13)] = inst_37040);

return statearr_37088;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37056__$1,(13),dchan);
} else {
if((state_val_37057 === (14))){
var inst_37045 = cljs.core.async.close_BANG_(out);
var state_37056__$1 = state_37056;
var statearr_37089_38701 = state_37056__$1;
(statearr_37089_38701[(2)] = inst_37045);

(statearr_37089_38701[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37057 === (16))){
var inst_37052 = (state_37056[(2)]);
var state_37056__$1 = state_37056;
var statearr_37090_38702 = state_37056__$1;
(statearr_37090_38702[(2)] = inst_37052);

(statearr_37090_38702[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37057 === (10))){
var inst_37013 = (state_37056[(7)]);
var inst_37033 = (state_37056[(2)]);
var inst_37034 = (inst_37013 + (1));
var inst_37013__$1 = inst_37034;
var state_37056__$1 = (function (){var statearr_37091 = state_37056;
(statearr_37091[(7)] = inst_37013__$1);

(statearr_37091[(14)] = inst_37033);

return statearr_37091;
})();
var statearr_37092_38703 = state_37056__$1;
(statearr_37092_38703[(2)] = null);

(statearr_37092_38703[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37057 === (8))){
var inst_37038 = (state_37056[(2)]);
var state_37056__$1 = state_37056;
var statearr_37093_38708 = state_37056__$1;
(statearr_37093_38708[(2)] = inst_37038);

(statearr_37093_38708[(1)] = (5));


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
var cljs$core$async$state_machine__35067__auto__ = null;
var cljs$core$async$state_machine__35067__auto____0 = (function (){
var statearr_37094 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37094[(0)] = cljs$core$async$state_machine__35067__auto__);

(statearr_37094[(1)] = (1));

return statearr_37094;
});
var cljs$core$async$state_machine__35067__auto____1 = (function (state_37056){
while(true){
var ret_value__35068__auto__ = (function (){try{while(true){
var result__35069__auto__ = switch__35066__auto__(state_37056);
if(cljs.core.keyword_identical_QMARK_(result__35069__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35069__auto__;
}
break;
}
}catch (e37095){var ex__35070__auto__ = e37095;
var statearr_37096_38714 = state_37056;
(statearr_37096_38714[(2)] = ex__35070__auto__);


if(cljs.core.seq((state_37056[(4)]))){
var statearr_37097_38715 = state_37056;
(statearr_37097_38715[(1)] = cljs.core.first((state_37056[(4)])));

} else {
throw ex__35070__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38716 = state_37056;
state_37056 = G__38716;
continue;
} else {
return ret_value__35068__auto__;
}
break;
}
});
cljs$core$async$state_machine__35067__auto__ = function(state_37056){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35067__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35067__auto____1.call(this,state_37056);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35067__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35067__auto____0;
cljs$core$async$state_machine__35067__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35067__auto____1;
return cljs$core$async$state_machine__35067__auto__;
})()
})();
var state__35297__auto__ = (function (){var statearr_37098 = f__35296__auto__();
(statearr_37098[(6)] = c__35295__auto___38683);

return statearr_37098;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35297__auto__);
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
var G__37101 = arguments.length;
switch (G__37101) {
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
var c__35295__auto___38720 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35296__auto__ = (function (){var switch__35066__auto__ = (function (state_37137){
var state_val_37138 = (state_37137[(1)]);
if((state_val_37138 === (7))){
var inst_37113 = (state_37137[(7)]);
var inst_37112 = (state_37137[(8)]);
var inst_37112__$1 = (state_37137[(2)]);
var inst_37113__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37112__$1,(0),null);
var inst_37114 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37112__$1,(1),null);
var inst_37115 = (inst_37113__$1 == null);
var state_37137__$1 = (function (){var statearr_37139 = state_37137;
(statearr_37139[(7)] = inst_37113__$1);

(statearr_37139[(8)] = inst_37112__$1);

(statearr_37139[(9)] = inst_37114);

return statearr_37139;
})();
if(cljs.core.truth_(inst_37115)){
var statearr_37140_38721 = state_37137__$1;
(statearr_37140_38721[(1)] = (8));

} else {
var statearr_37141_38722 = state_37137__$1;
(statearr_37141_38722[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37138 === (1))){
var inst_37102 = cljs.core.vec(chs);
var inst_37103 = inst_37102;
var state_37137__$1 = (function (){var statearr_37142 = state_37137;
(statearr_37142[(10)] = inst_37103);

return statearr_37142;
})();
var statearr_37143_38723 = state_37137__$1;
(statearr_37143_38723[(2)] = null);

(statearr_37143_38723[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37138 === (4))){
var inst_37103 = (state_37137[(10)]);
var state_37137__$1 = state_37137;
return cljs.core.async.ioc_alts_BANG_(state_37137__$1,(7),inst_37103);
} else {
if((state_val_37138 === (6))){
var inst_37130 = (state_37137[(2)]);
var state_37137__$1 = state_37137;
var statearr_37144_38728 = state_37137__$1;
(statearr_37144_38728[(2)] = inst_37130);

(statearr_37144_38728[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37138 === (3))){
var inst_37132 = (state_37137[(2)]);
var state_37137__$1 = state_37137;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37137__$1,inst_37132);
} else {
if((state_val_37138 === (2))){
var inst_37103 = (state_37137[(10)]);
var inst_37105 = cljs.core.count(inst_37103);
var inst_37106 = (inst_37105 > (0));
var state_37137__$1 = state_37137;
if(cljs.core.truth_(inst_37106)){
var statearr_37146_38729 = state_37137__$1;
(statearr_37146_38729[(1)] = (4));

} else {
var statearr_37147_38730 = state_37137__$1;
(statearr_37147_38730[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37138 === (11))){
var inst_37103 = (state_37137[(10)]);
var inst_37123 = (state_37137[(2)]);
var tmp37145 = inst_37103;
var inst_37103__$1 = tmp37145;
var state_37137__$1 = (function (){var statearr_37148 = state_37137;
(statearr_37148[(11)] = inst_37123);

(statearr_37148[(10)] = inst_37103__$1);

return statearr_37148;
})();
var statearr_37149_38731 = state_37137__$1;
(statearr_37149_38731[(2)] = null);

(statearr_37149_38731[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37138 === (9))){
var inst_37113 = (state_37137[(7)]);
var state_37137__$1 = state_37137;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37137__$1,(11),out,inst_37113);
} else {
if((state_val_37138 === (5))){
var inst_37128 = cljs.core.async.close_BANG_(out);
var state_37137__$1 = state_37137;
var statearr_37154_38732 = state_37137__$1;
(statearr_37154_38732[(2)] = inst_37128);

(statearr_37154_38732[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37138 === (10))){
var inst_37126 = (state_37137[(2)]);
var state_37137__$1 = state_37137;
var statearr_37155_38733 = state_37137__$1;
(statearr_37155_38733[(2)] = inst_37126);

(statearr_37155_38733[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37138 === (8))){
var inst_37113 = (state_37137[(7)]);
var inst_37112 = (state_37137[(8)]);
var inst_37114 = (state_37137[(9)]);
var inst_37103 = (state_37137[(10)]);
var inst_37118 = (function (){var cs = inst_37103;
var vec__37108 = inst_37112;
var v = inst_37113;
var c = inst_37114;
return (function (p1__37099_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__37099_SHARP_);
});
})();
var inst_37119 = cljs.core.filterv(inst_37118,inst_37103);
var inst_37103__$1 = inst_37119;
var state_37137__$1 = (function (){var statearr_37156 = state_37137;
(statearr_37156[(10)] = inst_37103__$1);

return statearr_37156;
})();
var statearr_37157_38734 = state_37137__$1;
(statearr_37157_38734[(2)] = null);

(statearr_37157_38734[(1)] = (2));


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
var cljs$core$async$state_machine__35067__auto__ = null;
var cljs$core$async$state_machine__35067__auto____0 = (function (){
var statearr_37158 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37158[(0)] = cljs$core$async$state_machine__35067__auto__);

(statearr_37158[(1)] = (1));

return statearr_37158;
});
var cljs$core$async$state_machine__35067__auto____1 = (function (state_37137){
while(true){
var ret_value__35068__auto__ = (function (){try{while(true){
var result__35069__auto__ = switch__35066__auto__(state_37137);
if(cljs.core.keyword_identical_QMARK_(result__35069__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35069__auto__;
}
break;
}
}catch (e37159){var ex__35070__auto__ = e37159;
var statearr_37160_38736 = state_37137;
(statearr_37160_38736[(2)] = ex__35070__auto__);


if(cljs.core.seq((state_37137[(4)]))){
var statearr_37161_38737 = state_37137;
(statearr_37161_38737[(1)] = cljs.core.first((state_37137[(4)])));

} else {
throw ex__35070__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38739 = state_37137;
state_37137 = G__38739;
continue;
} else {
return ret_value__35068__auto__;
}
break;
}
});
cljs$core$async$state_machine__35067__auto__ = function(state_37137){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35067__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35067__auto____1.call(this,state_37137);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35067__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35067__auto____0;
cljs$core$async$state_machine__35067__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35067__auto____1;
return cljs$core$async$state_machine__35067__auto__;
})()
})();
var state__35297__auto__ = (function (){var statearr_37162 = f__35296__auto__();
(statearr_37162[(6)] = c__35295__auto___38720);

return statearr_37162;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35297__auto__);
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
var G__37164 = arguments.length;
switch (G__37164) {
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
var c__35295__auto___38741 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35296__auto__ = (function (){var switch__35066__auto__ = (function (state_37188){
var state_val_37189 = (state_37188[(1)]);
if((state_val_37189 === (7))){
var inst_37170 = (state_37188[(7)]);
var inst_37170__$1 = (state_37188[(2)]);
var inst_37171 = (inst_37170__$1 == null);
var inst_37172 = cljs.core.not(inst_37171);
var state_37188__$1 = (function (){var statearr_37190 = state_37188;
(statearr_37190[(7)] = inst_37170__$1);

return statearr_37190;
})();
if(inst_37172){
var statearr_37199_38742 = state_37188__$1;
(statearr_37199_38742[(1)] = (8));

} else {
var statearr_37206_38743 = state_37188__$1;
(statearr_37206_38743[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37189 === (1))){
var inst_37165 = (0);
var state_37188__$1 = (function (){var statearr_37207 = state_37188;
(statearr_37207[(8)] = inst_37165);

return statearr_37207;
})();
var statearr_37208_38746 = state_37188__$1;
(statearr_37208_38746[(2)] = null);

(statearr_37208_38746[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37189 === (4))){
var state_37188__$1 = state_37188;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37188__$1,(7),ch);
} else {
if((state_val_37189 === (6))){
var inst_37183 = (state_37188[(2)]);
var state_37188__$1 = state_37188;
var statearr_37215_38747 = state_37188__$1;
(statearr_37215_38747[(2)] = inst_37183);

(statearr_37215_38747[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37189 === (3))){
var inst_37185 = (state_37188[(2)]);
var inst_37186 = cljs.core.async.close_BANG_(out);
var state_37188__$1 = (function (){var statearr_37216 = state_37188;
(statearr_37216[(9)] = inst_37185);

return statearr_37216;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_37188__$1,inst_37186);
} else {
if((state_val_37189 === (2))){
var inst_37165 = (state_37188[(8)]);
var inst_37167 = (inst_37165 < n);
var state_37188__$1 = state_37188;
if(cljs.core.truth_(inst_37167)){
var statearr_37217_38750 = state_37188__$1;
(statearr_37217_38750[(1)] = (4));

} else {
var statearr_37218_38751 = state_37188__$1;
(statearr_37218_38751[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37189 === (11))){
var inst_37165 = (state_37188[(8)]);
var inst_37175 = (state_37188[(2)]);
var inst_37176 = (inst_37165 + (1));
var inst_37165__$1 = inst_37176;
var state_37188__$1 = (function (){var statearr_37219 = state_37188;
(statearr_37219[(8)] = inst_37165__$1);

(statearr_37219[(10)] = inst_37175);

return statearr_37219;
})();
var statearr_37228_38752 = state_37188__$1;
(statearr_37228_38752[(2)] = null);

(statearr_37228_38752[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37189 === (9))){
var state_37188__$1 = state_37188;
var statearr_37235_38753 = state_37188__$1;
(statearr_37235_38753[(2)] = null);

(statearr_37235_38753[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37189 === (5))){
var state_37188__$1 = state_37188;
var statearr_37236_38754 = state_37188__$1;
(statearr_37236_38754[(2)] = null);

(statearr_37236_38754[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37189 === (10))){
var inst_37180 = (state_37188[(2)]);
var state_37188__$1 = state_37188;
var statearr_37243_38755 = state_37188__$1;
(statearr_37243_38755[(2)] = inst_37180);

(statearr_37243_38755[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37189 === (8))){
var inst_37170 = (state_37188[(7)]);
var state_37188__$1 = state_37188;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37188__$1,(11),out,inst_37170);
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
var cljs$core$async$state_machine__35067__auto__ = null;
var cljs$core$async$state_machine__35067__auto____0 = (function (){
var statearr_37244 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37244[(0)] = cljs$core$async$state_machine__35067__auto__);

(statearr_37244[(1)] = (1));

return statearr_37244;
});
var cljs$core$async$state_machine__35067__auto____1 = (function (state_37188){
while(true){
var ret_value__35068__auto__ = (function (){try{while(true){
var result__35069__auto__ = switch__35066__auto__(state_37188);
if(cljs.core.keyword_identical_QMARK_(result__35069__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35069__auto__;
}
break;
}
}catch (e37245){var ex__35070__auto__ = e37245;
var statearr_37248_38756 = state_37188;
(statearr_37248_38756[(2)] = ex__35070__auto__);


if(cljs.core.seq((state_37188[(4)]))){
var statearr_37249_38757 = state_37188;
(statearr_37249_38757[(1)] = cljs.core.first((state_37188[(4)])));

} else {
throw ex__35070__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38758 = state_37188;
state_37188 = G__38758;
continue;
} else {
return ret_value__35068__auto__;
}
break;
}
});
cljs$core$async$state_machine__35067__auto__ = function(state_37188){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35067__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35067__auto____1.call(this,state_37188);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35067__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35067__auto____0;
cljs$core$async$state_machine__35067__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35067__auto____1;
return cljs$core$async$state_machine__35067__auto__;
})()
})();
var state__35297__auto__ = (function (){var statearr_37250 = f__35296__auto__();
(statearr_37250[(6)] = c__35295__auto___38741);

return statearr_37250;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35297__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37256 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37256 = (function (f,ch,meta37257){
this.f = f;
this.ch = ch;
this.meta37257 = meta37257;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37256.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37258,meta37257__$1){
var self__ = this;
var _37258__$1 = this;
return (new cljs.core.async.t_cljs$core$async37256(self__.f,self__.ch,meta37257__$1));
}));

(cljs.core.async.t_cljs$core$async37256.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37258){
var self__ = this;
var _37258__$1 = this;
return self__.meta37257;
}));

(cljs.core.async.t_cljs$core$async37256.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37256.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async37256.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async37256.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37256.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37259 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37259 = (function (f,ch,meta37257,_,fn1,meta37260){
this.f = f;
this.ch = ch;
this.meta37257 = meta37257;
this._ = _;
this.fn1 = fn1;
this.meta37260 = meta37260;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37259.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37261,meta37260__$1){
var self__ = this;
var _37261__$1 = this;
return (new cljs.core.async.t_cljs$core$async37259(self__.f,self__.ch,self__.meta37257,self__._,self__.fn1,meta37260__$1));
}));

(cljs.core.async.t_cljs$core$async37259.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37261){
var self__ = this;
var _37261__$1 = this;
return self__.meta37260;
}));

(cljs.core.async.t_cljs$core$async37259.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37259.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async37259.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async37259.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__37255_SHARP_){
var G__37262 = (((p1__37255_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__37255_SHARP_) : self__.f.call(null,p1__37255_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__37262) : f1.call(null,G__37262));
});
}));

(cljs.core.async.t_cljs$core$async37259.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta37257","meta37257",-337943557,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async37256","cljs.core.async/t_cljs$core$async37256",-255529576,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta37260","meta37260",1270711298,null)], null);
}));

(cljs.core.async.t_cljs$core$async37259.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37259.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37259");

(cljs.core.async.t_cljs$core$async37259.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async37259");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37259.
 */
cljs.core.async.__GT_t_cljs$core$async37259 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async37259(f__$1,ch__$1,meta37257__$1,___$2,fn1__$1,meta37260){
return (new cljs.core.async.t_cljs$core$async37259(f__$1,ch__$1,meta37257__$1,___$2,fn1__$1,meta37260));
});

}

return (new cljs.core.async.t_cljs$core$async37259(self__.f,self__.ch,self__.meta37257,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__37274 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__37274) : self__.f.call(null,G__37274));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async37256.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37256.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async37256.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta37257","meta37257",-337943557,null)], null);
}));

(cljs.core.async.t_cljs$core$async37256.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37256.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37256");

(cljs.core.async.t_cljs$core$async37256.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async37256");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37256.
 */
cljs.core.async.__GT_t_cljs$core$async37256 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async37256(f__$1,ch__$1,meta37257){
return (new cljs.core.async.t_cljs$core$async37256(f__$1,ch__$1,meta37257));
});

}

return (new cljs.core.async.t_cljs$core$async37256(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37275 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37275 = (function (f,ch,meta37276){
this.f = f;
this.ch = ch;
this.meta37276 = meta37276;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37275.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37277,meta37276__$1){
var self__ = this;
var _37277__$1 = this;
return (new cljs.core.async.t_cljs$core$async37275(self__.f,self__.ch,meta37276__$1));
}));

(cljs.core.async.t_cljs$core$async37275.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37277){
var self__ = this;
var _37277__$1 = this;
return self__.meta37276;
}));

(cljs.core.async.t_cljs$core$async37275.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37275.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async37275.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37275.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async37275.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37275.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async37275.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta37276","meta37276",361358947,null)], null);
}));

(cljs.core.async.t_cljs$core$async37275.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37275.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37275");

(cljs.core.async.t_cljs$core$async37275.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async37275");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37275.
 */
cljs.core.async.__GT_t_cljs$core$async37275 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async37275(f__$1,ch__$1,meta37276){
return (new cljs.core.async.t_cljs$core$async37275(f__$1,ch__$1,meta37276));
});

}

return (new cljs.core.async.t_cljs$core$async37275(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37278 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37278 = (function (p,ch,meta37279){
this.p = p;
this.ch = ch;
this.meta37279 = meta37279;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37278.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37280,meta37279__$1){
var self__ = this;
var _37280__$1 = this;
return (new cljs.core.async.t_cljs$core$async37278(self__.p,self__.ch,meta37279__$1));
}));

(cljs.core.async.t_cljs$core$async37278.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37280){
var self__ = this;
var _37280__$1 = this;
return self__.meta37279;
}));

(cljs.core.async.t_cljs$core$async37278.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37278.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async37278.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async37278.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37278.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async37278.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37278.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async37278.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta37279","meta37279",-1161707565,null)], null);
}));

(cljs.core.async.t_cljs$core$async37278.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37278.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37278");

(cljs.core.async.t_cljs$core$async37278.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async37278");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37278.
 */
cljs.core.async.__GT_t_cljs$core$async37278 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async37278(p__$1,ch__$1,meta37279){
return (new cljs.core.async.t_cljs$core$async37278(p__$1,ch__$1,meta37279));
});

}

return (new cljs.core.async.t_cljs$core$async37278(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__37291 = arguments.length;
switch (G__37291) {
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
var c__35295__auto___38792 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35296__auto__ = (function (){var switch__35066__auto__ = (function (state_37312){
var state_val_37313 = (state_37312[(1)]);
if((state_val_37313 === (7))){
var inst_37308 = (state_37312[(2)]);
var state_37312__$1 = state_37312;
var statearr_37314_38793 = state_37312__$1;
(statearr_37314_38793[(2)] = inst_37308);

(statearr_37314_38793[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37313 === (1))){
var state_37312__$1 = state_37312;
var statearr_37315_38798 = state_37312__$1;
(statearr_37315_38798[(2)] = null);

(statearr_37315_38798[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37313 === (4))){
var inst_37294 = (state_37312[(7)]);
var inst_37294__$1 = (state_37312[(2)]);
var inst_37295 = (inst_37294__$1 == null);
var state_37312__$1 = (function (){var statearr_37316 = state_37312;
(statearr_37316[(7)] = inst_37294__$1);

return statearr_37316;
})();
if(cljs.core.truth_(inst_37295)){
var statearr_37317_38800 = state_37312__$1;
(statearr_37317_38800[(1)] = (5));

} else {
var statearr_37318_38801 = state_37312__$1;
(statearr_37318_38801[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37313 === (6))){
var inst_37294 = (state_37312[(7)]);
var inst_37299 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_37294) : p.call(null,inst_37294));
var state_37312__$1 = state_37312;
if(cljs.core.truth_(inst_37299)){
var statearr_37319_38802 = state_37312__$1;
(statearr_37319_38802[(1)] = (8));

} else {
var statearr_37320_38803 = state_37312__$1;
(statearr_37320_38803[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37313 === (3))){
var inst_37310 = (state_37312[(2)]);
var state_37312__$1 = state_37312;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37312__$1,inst_37310);
} else {
if((state_val_37313 === (2))){
var state_37312__$1 = state_37312;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37312__$1,(4),ch);
} else {
if((state_val_37313 === (11))){
var inst_37302 = (state_37312[(2)]);
var state_37312__$1 = state_37312;
var statearr_37324_38807 = state_37312__$1;
(statearr_37324_38807[(2)] = inst_37302);

(statearr_37324_38807[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37313 === (9))){
var state_37312__$1 = state_37312;
var statearr_37325_38809 = state_37312__$1;
(statearr_37325_38809[(2)] = null);

(statearr_37325_38809[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37313 === (5))){
var inst_37297 = cljs.core.async.close_BANG_(out);
var state_37312__$1 = state_37312;
var statearr_37326_38812 = state_37312__$1;
(statearr_37326_38812[(2)] = inst_37297);

(statearr_37326_38812[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37313 === (10))){
var inst_37305 = (state_37312[(2)]);
var state_37312__$1 = (function (){var statearr_37327 = state_37312;
(statearr_37327[(8)] = inst_37305);

return statearr_37327;
})();
var statearr_37328_38813 = state_37312__$1;
(statearr_37328_38813[(2)] = null);

(statearr_37328_38813[(1)] = (2));


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
var cljs$core$async$state_machine__35067__auto__ = null;
var cljs$core$async$state_machine__35067__auto____0 = (function (){
var statearr_37329 = [null,null,null,null,null,null,null,null,null];
(statearr_37329[(0)] = cljs$core$async$state_machine__35067__auto__);

(statearr_37329[(1)] = (1));

return statearr_37329;
});
var cljs$core$async$state_machine__35067__auto____1 = (function (state_37312){
while(true){
var ret_value__35068__auto__ = (function (){try{while(true){
var result__35069__auto__ = switch__35066__auto__(state_37312);
if(cljs.core.keyword_identical_QMARK_(result__35069__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35069__auto__;
}
break;
}
}catch (e37333){var ex__35070__auto__ = e37333;
var statearr_37334_38817 = state_37312;
(statearr_37334_38817[(2)] = ex__35070__auto__);


if(cljs.core.seq((state_37312[(4)]))){
var statearr_37339_38819 = state_37312;
(statearr_37339_38819[(1)] = cljs.core.first((state_37312[(4)])));

} else {
throw ex__35070__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38822 = state_37312;
state_37312 = G__38822;
continue;
} else {
return ret_value__35068__auto__;
}
break;
}
});
cljs$core$async$state_machine__35067__auto__ = function(state_37312){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35067__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35067__auto____1.call(this,state_37312);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35067__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35067__auto____0;
cljs$core$async$state_machine__35067__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35067__auto____1;
return cljs$core$async$state_machine__35067__auto__;
})()
})();
var state__35297__auto__ = (function (){var statearr_37346 = f__35296__auto__();
(statearr_37346[(6)] = c__35295__auto___38792);

return statearr_37346;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35297__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__37348 = arguments.length;
switch (G__37348) {
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
var c__35295__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35296__auto__ = (function (){var switch__35066__auto__ = (function (state_37439){
var state_val_37440 = (state_37439[(1)]);
if((state_val_37440 === (7))){
var inst_37435 = (state_37439[(2)]);
var state_37439__$1 = state_37439;
var statearr_37455_38830 = state_37439__$1;
(statearr_37455_38830[(2)] = inst_37435);

(statearr_37455_38830[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37440 === (20))){
var inst_37405 = (state_37439[(7)]);
var inst_37416 = (state_37439[(2)]);
var inst_37417 = cljs.core.next(inst_37405);
var inst_37391 = inst_37417;
var inst_37392 = null;
var inst_37393 = (0);
var inst_37394 = (0);
var state_37439__$1 = (function (){var statearr_37457 = state_37439;
(statearr_37457[(8)] = inst_37391);

(statearr_37457[(9)] = inst_37416);

(statearr_37457[(10)] = inst_37394);

(statearr_37457[(11)] = inst_37393);

(statearr_37457[(12)] = inst_37392);

return statearr_37457;
})();
var statearr_37458_38833 = state_37439__$1;
(statearr_37458_38833[(2)] = null);

(statearr_37458_38833[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37440 === (1))){
var state_37439__$1 = state_37439;
var statearr_37459_38838 = state_37439__$1;
(statearr_37459_38838[(2)] = null);

(statearr_37459_38838[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37440 === (4))){
var inst_37368 = (state_37439[(13)]);
var inst_37368__$1 = (state_37439[(2)]);
var inst_37369 = (inst_37368__$1 == null);
var state_37439__$1 = (function (){var statearr_37461 = state_37439;
(statearr_37461[(13)] = inst_37368__$1);

return statearr_37461;
})();
if(cljs.core.truth_(inst_37369)){
var statearr_37462_38839 = state_37439__$1;
(statearr_37462_38839[(1)] = (5));

} else {
var statearr_37463_38840 = state_37439__$1;
(statearr_37463_38840[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37440 === (15))){
var state_37439__$1 = state_37439;
var statearr_37468_38842 = state_37439__$1;
(statearr_37468_38842[(2)] = null);

(statearr_37468_38842[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37440 === (21))){
var state_37439__$1 = state_37439;
var statearr_37469_38849 = state_37439__$1;
(statearr_37469_38849[(2)] = null);

(statearr_37469_38849[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37440 === (13))){
var inst_37391 = (state_37439[(8)]);
var inst_37394 = (state_37439[(10)]);
var inst_37393 = (state_37439[(11)]);
var inst_37392 = (state_37439[(12)]);
var inst_37401 = (state_37439[(2)]);
var inst_37402 = (inst_37394 + (1));
var tmp37464 = inst_37391;
var tmp37465 = inst_37393;
var tmp37466 = inst_37392;
var inst_37391__$1 = tmp37464;
var inst_37392__$1 = tmp37466;
var inst_37393__$1 = tmp37465;
var inst_37394__$1 = inst_37402;
var state_37439__$1 = (function (){var statearr_37470 = state_37439;
(statearr_37470[(8)] = inst_37391__$1);

(statearr_37470[(14)] = inst_37401);

(statearr_37470[(10)] = inst_37394__$1);

(statearr_37470[(11)] = inst_37393__$1);

(statearr_37470[(12)] = inst_37392__$1);

return statearr_37470;
})();
var statearr_37471_38850 = state_37439__$1;
(statearr_37471_38850[(2)] = null);

(statearr_37471_38850[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37440 === (22))){
var state_37439__$1 = state_37439;
var statearr_37472_38851 = state_37439__$1;
(statearr_37472_38851[(2)] = null);

(statearr_37472_38851[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37440 === (6))){
var inst_37368 = (state_37439[(13)]);
var inst_37380 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_37368) : f.call(null,inst_37368));
var inst_37381 = cljs.core.seq(inst_37380);
var inst_37391 = inst_37381;
var inst_37392 = null;
var inst_37393 = (0);
var inst_37394 = (0);
var state_37439__$1 = (function (){var statearr_37473 = state_37439;
(statearr_37473[(8)] = inst_37391);

(statearr_37473[(10)] = inst_37394);

(statearr_37473[(11)] = inst_37393);

(statearr_37473[(12)] = inst_37392);

return statearr_37473;
})();
var statearr_37474_38852 = state_37439__$1;
(statearr_37474_38852[(2)] = null);

(statearr_37474_38852[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37440 === (17))){
var inst_37405 = (state_37439[(7)]);
var inst_37409 = cljs.core.chunk_first(inst_37405);
var inst_37410 = cljs.core.chunk_rest(inst_37405);
var inst_37411 = cljs.core.count(inst_37409);
var inst_37391 = inst_37410;
var inst_37392 = inst_37409;
var inst_37393 = inst_37411;
var inst_37394 = (0);
var state_37439__$1 = (function (){var statearr_37475 = state_37439;
(statearr_37475[(8)] = inst_37391);

(statearr_37475[(10)] = inst_37394);

(statearr_37475[(11)] = inst_37393);

(statearr_37475[(12)] = inst_37392);

return statearr_37475;
})();
var statearr_37476_38853 = state_37439__$1;
(statearr_37476_38853[(2)] = null);

(statearr_37476_38853[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37440 === (3))){
var inst_37437 = (state_37439[(2)]);
var state_37439__$1 = state_37439;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37439__$1,inst_37437);
} else {
if((state_val_37440 === (12))){
var inst_37425 = (state_37439[(2)]);
var state_37439__$1 = state_37439;
var statearr_37477_38855 = state_37439__$1;
(statearr_37477_38855[(2)] = inst_37425);

(statearr_37477_38855[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37440 === (2))){
var state_37439__$1 = state_37439;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37439__$1,(4),in$);
} else {
if((state_val_37440 === (23))){
var inst_37433 = (state_37439[(2)]);
var state_37439__$1 = state_37439;
var statearr_37478_38856 = state_37439__$1;
(statearr_37478_38856[(2)] = inst_37433);

(statearr_37478_38856[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37440 === (19))){
var inst_37420 = (state_37439[(2)]);
var state_37439__$1 = state_37439;
var statearr_37479_38857 = state_37439__$1;
(statearr_37479_38857[(2)] = inst_37420);

(statearr_37479_38857[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37440 === (11))){
var inst_37391 = (state_37439[(8)]);
var inst_37405 = (state_37439[(7)]);
var inst_37405__$1 = cljs.core.seq(inst_37391);
var state_37439__$1 = (function (){var statearr_37480 = state_37439;
(statearr_37480[(7)] = inst_37405__$1);

return statearr_37480;
})();
if(inst_37405__$1){
var statearr_37481_38858 = state_37439__$1;
(statearr_37481_38858[(1)] = (14));

} else {
var statearr_37482_38859 = state_37439__$1;
(statearr_37482_38859[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37440 === (9))){
var inst_37427 = (state_37439[(2)]);
var inst_37428 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_37439__$1 = (function (){var statearr_37483 = state_37439;
(statearr_37483[(15)] = inst_37427);

return statearr_37483;
})();
if(cljs.core.truth_(inst_37428)){
var statearr_37484_38860 = state_37439__$1;
(statearr_37484_38860[(1)] = (21));

} else {
var statearr_37486_38861 = state_37439__$1;
(statearr_37486_38861[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37440 === (5))){
var inst_37374 = cljs.core.async.close_BANG_(out);
var state_37439__$1 = state_37439;
var statearr_37488_38862 = state_37439__$1;
(statearr_37488_38862[(2)] = inst_37374);

(statearr_37488_38862[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37440 === (14))){
var inst_37405 = (state_37439[(7)]);
var inst_37407 = cljs.core.chunked_seq_QMARK_(inst_37405);
var state_37439__$1 = state_37439;
if(inst_37407){
var statearr_37489_38866 = state_37439__$1;
(statearr_37489_38866[(1)] = (17));

} else {
var statearr_37490_38867 = state_37439__$1;
(statearr_37490_38867[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37440 === (16))){
var inst_37423 = (state_37439[(2)]);
var state_37439__$1 = state_37439;
var statearr_37492_38868 = state_37439__$1;
(statearr_37492_38868[(2)] = inst_37423);

(statearr_37492_38868[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37440 === (10))){
var inst_37394 = (state_37439[(10)]);
var inst_37392 = (state_37439[(12)]);
var inst_37399 = cljs.core._nth(inst_37392,inst_37394);
var state_37439__$1 = state_37439;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37439__$1,(13),out,inst_37399);
} else {
if((state_val_37440 === (18))){
var inst_37405 = (state_37439[(7)]);
var inst_37414 = cljs.core.first(inst_37405);
var state_37439__$1 = state_37439;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37439__$1,(20),out,inst_37414);
} else {
if((state_val_37440 === (8))){
var inst_37394 = (state_37439[(10)]);
var inst_37393 = (state_37439[(11)]);
var inst_37396 = (inst_37394 < inst_37393);
var inst_37397 = inst_37396;
var state_37439__$1 = state_37439;
if(cljs.core.truth_(inst_37397)){
var statearr_37493_38869 = state_37439__$1;
(statearr_37493_38869[(1)] = (10));

} else {
var statearr_37494_38870 = state_37439__$1;
(statearr_37494_38870[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__35067__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__35067__auto____0 = (function (){
var statearr_37495 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37495[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__35067__auto__);

(statearr_37495[(1)] = (1));

return statearr_37495;
});
var cljs$core$async$mapcat_STAR__$_state_machine__35067__auto____1 = (function (state_37439){
while(true){
var ret_value__35068__auto__ = (function (){try{while(true){
var result__35069__auto__ = switch__35066__auto__(state_37439);
if(cljs.core.keyword_identical_QMARK_(result__35069__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35069__auto__;
}
break;
}
}catch (e37496){var ex__35070__auto__ = e37496;
var statearr_37497_38871 = state_37439;
(statearr_37497_38871[(2)] = ex__35070__auto__);


if(cljs.core.seq((state_37439[(4)]))){
var statearr_37498_38872 = state_37439;
(statearr_37498_38872[(1)] = cljs.core.first((state_37439[(4)])));

} else {
throw ex__35070__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38874 = state_37439;
state_37439 = G__38874;
continue;
} else {
return ret_value__35068__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__35067__auto__ = function(state_37439){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__35067__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__35067__auto____1.call(this,state_37439);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__35067__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__35067__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__35067__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__35067__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__35067__auto__;
})()
})();
var state__35297__auto__ = (function (){var statearr_37508 = f__35296__auto__();
(statearr_37508[(6)] = c__35295__auto__);

return statearr_37508;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35297__auto__);
}));

return c__35295__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__37511 = arguments.length;
switch (G__37511) {
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
var G__37513 = arguments.length;
switch (G__37513) {
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
var G__37515 = arguments.length;
switch (G__37515) {
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
var c__35295__auto___38905 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35296__auto__ = (function (){var switch__35066__auto__ = (function (state_37557){
var state_val_37558 = (state_37557[(1)]);
if((state_val_37558 === (7))){
var inst_37546 = (state_37557[(2)]);
var state_37557__$1 = state_37557;
var statearr_37561_38912 = state_37557__$1;
(statearr_37561_38912[(2)] = inst_37546);

(statearr_37561_38912[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37558 === (1))){
var inst_37522 = null;
var state_37557__$1 = (function (){var statearr_37562 = state_37557;
(statearr_37562[(7)] = inst_37522);

return statearr_37562;
})();
var statearr_37563_38916 = state_37557__$1;
(statearr_37563_38916[(2)] = null);

(statearr_37563_38916[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37558 === (4))){
var inst_37527 = (state_37557[(8)]);
var inst_37527__$1 = (state_37557[(2)]);
var inst_37528 = (inst_37527__$1 == null);
var inst_37529 = cljs.core.not(inst_37528);
var state_37557__$1 = (function (){var statearr_37564 = state_37557;
(statearr_37564[(8)] = inst_37527__$1);

return statearr_37564;
})();
if(inst_37529){
var statearr_37565_38918 = state_37557__$1;
(statearr_37565_38918[(1)] = (5));

} else {
var statearr_37566_38919 = state_37557__$1;
(statearr_37566_38919[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37558 === (6))){
var state_37557__$1 = state_37557;
var statearr_37567_38920 = state_37557__$1;
(statearr_37567_38920[(2)] = null);

(statearr_37567_38920[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37558 === (3))){
var inst_37548 = (state_37557[(2)]);
var inst_37549 = cljs.core.async.close_BANG_(out);
var state_37557__$1 = (function (){var statearr_37569 = state_37557;
(statearr_37569[(9)] = inst_37548);

return statearr_37569;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_37557__$1,inst_37549);
} else {
if((state_val_37558 === (2))){
var state_37557__$1 = state_37557;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37557__$1,(4),ch);
} else {
if((state_val_37558 === (11))){
var inst_37527 = (state_37557[(8)]);
var inst_37538 = (state_37557[(2)]);
var inst_37522 = inst_37527;
var state_37557__$1 = (function (){var statearr_37570 = state_37557;
(statearr_37570[(7)] = inst_37522);

(statearr_37570[(10)] = inst_37538);

return statearr_37570;
})();
var statearr_37571_38924 = state_37557__$1;
(statearr_37571_38924[(2)] = null);

(statearr_37571_38924[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37558 === (9))){
var inst_37527 = (state_37557[(8)]);
var state_37557__$1 = state_37557;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37557__$1,(11),out,inst_37527);
} else {
if((state_val_37558 === (5))){
var inst_37527 = (state_37557[(8)]);
var inst_37522 = (state_37557[(7)]);
var inst_37533 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_37527,inst_37522);
var state_37557__$1 = state_37557;
if(inst_37533){
var statearr_37573_38956 = state_37557__$1;
(statearr_37573_38956[(1)] = (8));

} else {
var statearr_37574_38959 = state_37557__$1;
(statearr_37574_38959[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37558 === (10))){
var inst_37541 = (state_37557[(2)]);
var state_37557__$1 = state_37557;
var statearr_37575_38964 = state_37557__$1;
(statearr_37575_38964[(2)] = inst_37541);

(statearr_37575_38964[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37558 === (8))){
var inst_37522 = (state_37557[(7)]);
var tmp37572 = inst_37522;
var inst_37522__$1 = tmp37572;
var state_37557__$1 = (function (){var statearr_37576 = state_37557;
(statearr_37576[(7)] = inst_37522__$1);

return statearr_37576;
})();
var statearr_37577_38965 = state_37557__$1;
(statearr_37577_38965[(2)] = null);

(statearr_37577_38965[(1)] = (2));


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
var cljs$core$async$state_machine__35067__auto__ = null;
var cljs$core$async$state_machine__35067__auto____0 = (function (){
var statearr_37578 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37578[(0)] = cljs$core$async$state_machine__35067__auto__);

(statearr_37578[(1)] = (1));

return statearr_37578;
});
var cljs$core$async$state_machine__35067__auto____1 = (function (state_37557){
while(true){
var ret_value__35068__auto__ = (function (){try{while(true){
var result__35069__auto__ = switch__35066__auto__(state_37557);
if(cljs.core.keyword_identical_QMARK_(result__35069__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35069__auto__;
}
break;
}
}catch (e37587){var ex__35070__auto__ = e37587;
var statearr_37588_38970 = state_37557;
(statearr_37588_38970[(2)] = ex__35070__auto__);


if(cljs.core.seq((state_37557[(4)]))){
var statearr_37589_38972 = state_37557;
(statearr_37589_38972[(1)] = cljs.core.first((state_37557[(4)])));

} else {
throw ex__35070__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38974 = state_37557;
state_37557 = G__38974;
continue;
} else {
return ret_value__35068__auto__;
}
break;
}
});
cljs$core$async$state_machine__35067__auto__ = function(state_37557){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35067__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35067__auto____1.call(this,state_37557);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35067__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35067__auto____0;
cljs$core$async$state_machine__35067__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35067__auto____1;
return cljs$core$async$state_machine__35067__auto__;
})()
})();
var state__35297__auto__ = (function (){var statearr_37591 = f__35296__auto__();
(statearr_37591[(6)] = c__35295__auto___38905);

return statearr_37591;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35297__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__37602 = arguments.length;
switch (G__37602) {
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
var c__35295__auto___38982 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35296__auto__ = (function (){var switch__35066__auto__ = (function (state_37660){
var state_val_37661 = (state_37660[(1)]);
if((state_val_37661 === (7))){
var inst_37648 = (state_37660[(2)]);
var state_37660__$1 = state_37660;
var statearr_37664_38983 = state_37660__$1;
(statearr_37664_38983[(2)] = inst_37648);

(statearr_37664_38983[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37661 === (1))){
var inst_37607 = (new Array(n));
var inst_37608 = inst_37607;
var inst_37609 = (0);
var state_37660__$1 = (function (){var statearr_37665 = state_37660;
(statearr_37665[(7)] = inst_37608);

(statearr_37665[(8)] = inst_37609);

return statearr_37665;
})();
var statearr_37666_38990 = state_37660__$1;
(statearr_37666_38990[(2)] = null);

(statearr_37666_38990[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37661 === (4))){
var inst_37613 = (state_37660[(9)]);
var inst_37613__$1 = (state_37660[(2)]);
var inst_37620 = (inst_37613__$1 == null);
var inst_37621 = cljs.core.not(inst_37620);
var state_37660__$1 = (function (){var statearr_37670 = state_37660;
(statearr_37670[(9)] = inst_37613__$1);

return statearr_37670;
})();
if(inst_37621){
var statearr_37672_38993 = state_37660__$1;
(statearr_37672_38993[(1)] = (5));

} else {
var statearr_37673_38994 = state_37660__$1;
(statearr_37673_38994[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37661 === (15))){
var inst_37642 = (state_37660[(2)]);
var state_37660__$1 = state_37660;
var statearr_37674_38995 = state_37660__$1;
(statearr_37674_38995[(2)] = inst_37642);

(statearr_37674_38995[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37661 === (13))){
var state_37660__$1 = state_37660;
var statearr_37675_38998 = state_37660__$1;
(statearr_37675_38998[(2)] = null);

(statearr_37675_38998[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37661 === (6))){
var inst_37609 = (state_37660[(8)]);
var inst_37638 = (inst_37609 > (0));
var state_37660__$1 = state_37660;
if(cljs.core.truth_(inst_37638)){
var statearr_37676_39000 = state_37660__$1;
(statearr_37676_39000[(1)] = (12));

} else {
var statearr_37677_39001 = state_37660__$1;
(statearr_37677_39001[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37661 === (3))){
var inst_37650 = (state_37660[(2)]);
var state_37660__$1 = state_37660;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37660__$1,inst_37650);
} else {
if((state_val_37661 === (12))){
var inst_37608 = (state_37660[(7)]);
var inst_37640 = cljs.core.vec(inst_37608);
var state_37660__$1 = state_37660;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37660__$1,(15),out,inst_37640);
} else {
if((state_val_37661 === (2))){
var state_37660__$1 = state_37660;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37660__$1,(4),ch);
} else {
if((state_val_37661 === (11))){
var inst_37632 = (state_37660[(2)]);
var inst_37633 = (new Array(n));
var inst_37608 = inst_37633;
var inst_37609 = (0);
var state_37660__$1 = (function (){var statearr_37679 = state_37660;
(statearr_37679[(7)] = inst_37608);

(statearr_37679[(8)] = inst_37609);

(statearr_37679[(10)] = inst_37632);

return statearr_37679;
})();
var statearr_37680_39002 = state_37660__$1;
(statearr_37680_39002[(2)] = null);

(statearr_37680_39002[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37661 === (9))){
var inst_37608 = (state_37660[(7)]);
var inst_37630 = cljs.core.vec(inst_37608);
var state_37660__$1 = state_37660;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37660__$1,(11),out,inst_37630);
} else {
if((state_val_37661 === (5))){
var inst_37608 = (state_37660[(7)]);
var inst_37613 = (state_37660[(9)]);
var inst_37625 = (state_37660[(11)]);
var inst_37609 = (state_37660[(8)]);
var inst_37624 = (inst_37608[inst_37609] = inst_37613);
var inst_37625__$1 = (inst_37609 + (1));
var inst_37626 = (inst_37625__$1 < n);
var state_37660__$1 = (function (){var statearr_37688 = state_37660;
(statearr_37688[(11)] = inst_37625__$1);

(statearr_37688[(12)] = inst_37624);

return statearr_37688;
})();
if(cljs.core.truth_(inst_37626)){
var statearr_37690_39010 = state_37660__$1;
(statearr_37690_39010[(1)] = (8));

} else {
var statearr_37691_39011 = state_37660__$1;
(statearr_37691_39011[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37661 === (14))){
var inst_37645 = (state_37660[(2)]);
var inst_37646 = cljs.core.async.close_BANG_(out);
var state_37660__$1 = (function (){var statearr_37693 = state_37660;
(statearr_37693[(13)] = inst_37645);

return statearr_37693;
})();
var statearr_37694_39012 = state_37660__$1;
(statearr_37694_39012[(2)] = inst_37646);

(statearr_37694_39012[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37661 === (10))){
var inst_37636 = (state_37660[(2)]);
var state_37660__$1 = state_37660;
var statearr_37695_39015 = state_37660__$1;
(statearr_37695_39015[(2)] = inst_37636);

(statearr_37695_39015[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37661 === (8))){
var inst_37608 = (state_37660[(7)]);
var inst_37625 = (state_37660[(11)]);
var tmp37692 = inst_37608;
var inst_37608__$1 = tmp37692;
var inst_37609 = inst_37625;
var state_37660__$1 = (function (){var statearr_37696 = state_37660;
(statearr_37696[(7)] = inst_37608__$1);

(statearr_37696[(8)] = inst_37609);

return statearr_37696;
})();
var statearr_37697_39017 = state_37660__$1;
(statearr_37697_39017[(2)] = null);

(statearr_37697_39017[(1)] = (2));


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
var cljs$core$async$state_machine__35067__auto__ = null;
var cljs$core$async$state_machine__35067__auto____0 = (function (){
var statearr_37698 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37698[(0)] = cljs$core$async$state_machine__35067__auto__);

(statearr_37698[(1)] = (1));

return statearr_37698;
});
var cljs$core$async$state_machine__35067__auto____1 = (function (state_37660){
while(true){
var ret_value__35068__auto__ = (function (){try{while(true){
var result__35069__auto__ = switch__35066__auto__(state_37660);
if(cljs.core.keyword_identical_QMARK_(result__35069__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35069__auto__;
}
break;
}
}catch (e37699){var ex__35070__auto__ = e37699;
var statearr_37700_39018 = state_37660;
(statearr_37700_39018[(2)] = ex__35070__auto__);


if(cljs.core.seq((state_37660[(4)]))){
var statearr_37701_39019 = state_37660;
(statearr_37701_39019[(1)] = cljs.core.first((state_37660[(4)])));

} else {
throw ex__35070__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39022 = state_37660;
state_37660 = G__39022;
continue;
} else {
return ret_value__35068__auto__;
}
break;
}
});
cljs$core$async$state_machine__35067__auto__ = function(state_37660){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35067__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35067__auto____1.call(this,state_37660);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35067__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35067__auto____0;
cljs$core$async$state_machine__35067__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35067__auto____1;
return cljs$core$async$state_machine__35067__auto__;
})()
})();
var state__35297__auto__ = (function (){var statearr_37702 = f__35296__auto__();
(statearr_37702[(6)] = c__35295__auto___38982);

return statearr_37702;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35297__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__37705 = arguments.length;
switch (G__37705) {
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
var c__35295__auto___39028 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35296__auto__ = (function (){var switch__35066__auto__ = (function (state_37754){
var state_val_37755 = (state_37754[(1)]);
if((state_val_37755 === (7))){
var inst_37750 = (state_37754[(2)]);
var state_37754__$1 = state_37754;
var statearr_37761_39029 = state_37754__$1;
(statearr_37761_39029[(2)] = inst_37750);

(statearr_37761_39029[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37755 === (1))){
var inst_37706 = [];
var inst_37707 = inst_37706;
var inst_37708 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_37754__$1 = (function (){var statearr_37763 = state_37754;
(statearr_37763[(7)] = inst_37708);

(statearr_37763[(8)] = inst_37707);

return statearr_37763;
})();
var statearr_37771_39030 = state_37754__$1;
(statearr_37771_39030[(2)] = null);

(statearr_37771_39030[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37755 === (4))){
var inst_37713 = (state_37754[(9)]);
var inst_37713__$1 = (state_37754[(2)]);
var inst_37716 = (inst_37713__$1 == null);
var inst_37717 = cljs.core.not(inst_37716);
var state_37754__$1 = (function (){var statearr_37774 = state_37754;
(statearr_37774[(9)] = inst_37713__$1);

return statearr_37774;
})();
if(inst_37717){
var statearr_37779_39035 = state_37754__$1;
(statearr_37779_39035[(1)] = (5));

} else {
var statearr_37780_39036 = state_37754__$1;
(statearr_37780_39036[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37755 === (15))){
var inst_37744 = (state_37754[(2)]);
var state_37754__$1 = state_37754;
var statearr_37787_39037 = state_37754__$1;
(statearr_37787_39037[(2)] = inst_37744);

(statearr_37787_39037[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37755 === (13))){
var state_37754__$1 = state_37754;
var statearr_37794_39038 = state_37754__$1;
(statearr_37794_39038[(2)] = null);

(statearr_37794_39038[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37755 === (6))){
var inst_37707 = (state_37754[(8)]);
var inst_37739 = inst_37707.length;
var inst_37740 = (inst_37739 > (0));
var state_37754__$1 = state_37754;
if(cljs.core.truth_(inst_37740)){
var statearr_37795_39040 = state_37754__$1;
(statearr_37795_39040[(1)] = (12));

} else {
var statearr_37796_39041 = state_37754__$1;
(statearr_37796_39041[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37755 === (3))){
var inst_37752 = (state_37754[(2)]);
var state_37754__$1 = state_37754;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37754__$1,inst_37752);
} else {
if((state_val_37755 === (12))){
var inst_37707 = (state_37754[(8)]);
var inst_37742 = cljs.core.vec(inst_37707);
var state_37754__$1 = state_37754;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37754__$1,(15),out,inst_37742);
} else {
if((state_val_37755 === (2))){
var state_37754__$1 = state_37754;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37754__$1,(4),ch);
} else {
if((state_val_37755 === (11))){
var inst_37713 = (state_37754[(9)]);
var inst_37719 = (state_37754[(10)]);
var inst_37731 = (state_37754[(2)]);
var inst_37732 = [];
var inst_37733 = inst_37732.push(inst_37713);
var inst_37707 = inst_37732;
var inst_37708 = inst_37719;
var state_37754__$1 = (function (){var statearr_37797 = state_37754;
(statearr_37797[(11)] = inst_37733);

(statearr_37797[(7)] = inst_37708);

(statearr_37797[(12)] = inst_37731);

(statearr_37797[(8)] = inst_37707);

return statearr_37797;
})();
var statearr_37798_39047 = state_37754__$1;
(statearr_37798_39047[(2)] = null);

(statearr_37798_39047[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37755 === (9))){
var inst_37707 = (state_37754[(8)]);
var inst_37729 = cljs.core.vec(inst_37707);
var state_37754__$1 = state_37754;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37754__$1,(11),out,inst_37729);
} else {
if((state_val_37755 === (5))){
var inst_37713 = (state_37754[(9)]);
var inst_37708 = (state_37754[(7)]);
var inst_37719 = (state_37754[(10)]);
var inst_37719__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_37713) : f.call(null,inst_37713));
var inst_37720 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_37719__$1,inst_37708);
var inst_37721 = cljs.core.keyword_identical_QMARK_(inst_37708,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_37722 = ((inst_37720) || (inst_37721));
var state_37754__$1 = (function (){var statearr_37799 = state_37754;
(statearr_37799[(10)] = inst_37719__$1);

return statearr_37799;
})();
if(cljs.core.truth_(inst_37722)){
var statearr_37800_39049 = state_37754__$1;
(statearr_37800_39049[(1)] = (8));

} else {
var statearr_37801_39050 = state_37754__$1;
(statearr_37801_39050[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37755 === (14))){
var inst_37747 = (state_37754[(2)]);
var inst_37748 = cljs.core.async.close_BANG_(out);
var state_37754__$1 = (function (){var statearr_37803 = state_37754;
(statearr_37803[(13)] = inst_37747);

return statearr_37803;
})();
var statearr_37804_39053 = state_37754__$1;
(statearr_37804_39053[(2)] = inst_37748);

(statearr_37804_39053[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37755 === (10))){
var inst_37736 = (state_37754[(2)]);
var state_37754__$1 = state_37754;
var statearr_37805_39055 = state_37754__$1;
(statearr_37805_39055[(2)] = inst_37736);

(statearr_37805_39055[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37755 === (8))){
var inst_37713 = (state_37754[(9)]);
var inst_37707 = (state_37754[(8)]);
var inst_37719 = (state_37754[(10)]);
var inst_37725 = inst_37707.push(inst_37713);
var tmp37802 = inst_37707;
var inst_37707__$1 = tmp37802;
var inst_37708 = inst_37719;
var state_37754__$1 = (function (){var statearr_37806 = state_37754;
(statearr_37806[(7)] = inst_37708);

(statearr_37806[(8)] = inst_37707__$1);

(statearr_37806[(14)] = inst_37725);

return statearr_37806;
})();
var statearr_37807_39056 = state_37754__$1;
(statearr_37807_39056[(2)] = null);

(statearr_37807_39056[(1)] = (2));


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
var cljs$core$async$state_machine__35067__auto__ = null;
var cljs$core$async$state_machine__35067__auto____0 = (function (){
var statearr_37808 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37808[(0)] = cljs$core$async$state_machine__35067__auto__);

(statearr_37808[(1)] = (1));

return statearr_37808;
});
var cljs$core$async$state_machine__35067__auto____1 = (function (state_37754){
while(true){
var ret_value__35068__auto__ = (function (){try{while(true){
var result__35069__auto__ = switch__35066__auto__(state_37754);
if(cljs.core.keyword_identical_QMARK_(result__35069__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35069__auto__;
}
break;
}
}catch (e37809){var ex__35070__auto__ = e37809;
var statearr_37810_39057 = state_37754;
(statearr_37810_39057[(2)] = ex__35070__auto__);


if(cljs.core.seq((state_37754[(4)]))){
var statearr_37811_39061 = state_37754;
(statearr_37811_39061[(1)] = cljs.core.first((state_37754[(4)])));

} else {
throw ex__35070__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39063 = state_37754;
state_37754 = G__39063;
continue;
} else {
return ret_value__35068__auto__;
}
break;
}
});
cljs$core$async$state_machine__35067__auto__ = function(state_37754){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35067__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35067__auto____1.call(this,state_37754);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35067__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35067__auto____0;
cljs$core$async$state_machine__35067__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35067__auto____1;
return cljs$core$async$state_machine__35067__auto__;
})()
})();
var state__35297__auto__ = (function (){var statearr_37813 = f__35296__auto__();
(statearr_37813[(6)] = c__35295__auto___39028);

return statearr_37813;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35297__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
