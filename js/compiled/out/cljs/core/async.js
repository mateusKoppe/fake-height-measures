// Compiled by ClojureScript 1.10.773 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__36087 = arguments.length;
switch (G__36087) {
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
return cljs.core.async.fn_handler.call(null,f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36088 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36088 = (function (f,blockable,meta36089){
this.f = f;
this.blockable = blockable;
this.meta36089 = meta36089;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36088.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36090,meta36089__$1){
var self__ = this;
var _36090__$1 = this;
return (new cljs.core.async.t_cljs$core$async36088(self__.f,self__.blockable,meta36089__$1));
}));

(cljs.core.async.t_cljs$core$async36088.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36090){
var self__ = this;
var _36090__$1 = this;
return self__.meta36089;
}));

(cljs.core.async.t_cljs$core$async36088.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36088.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async36088.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async36088.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async36088.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta36089","meta36089",2048571651,null)], null);
}));

(cljs.core.async.t_cljs$core$async36088.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36088.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36088");

(cljs.core.async.t_cljs$core$async36088.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async36088");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36088.
 */
cljs.core.async.__GT_t_cljs$core$async36088 = (function cljs$core$async$__GT_t_cljs$core$async36088(f__$1,blockable__$1,meta36089){
return (new cljs.core.async.t_cljs$core$async36088(f__$1,blockable__$1,meta36089));
});

}

return (new cljs.core.async.t_cljs$core$async36088(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
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
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
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
var G__36094 = arguments.length;
switch (G__36094) {
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
return cljs.core.async.chan.call(null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
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
var G__36097 = arguments.length;
switch (G__36097) {
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
return cljs.core.async.promise_chan.call(null,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
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
var G__36100 = arguments.length;
switch (G__36100) {
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
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_36102 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_36102);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,val_36102);
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
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
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
var G__36104 = arguments.length;
switch (G__36104) {
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
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5718__auto__)){
var ret = temp__5718__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5718__auto__)){
var retb = temp__5718__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,ret);
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4613__auto___36106 = n;
var x_36107 = (0);
while(true){
if((x_36107 < n__4613__auto___36106)){
(a[x_36107] = x_36107);

var G__36108 = (x_36107 + (1));
x_36107 = G__36108;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36109 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36109 = (function (flag,meta36110){
this.flag = flag;
this.meta36110 = meta36110;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36109.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36111,meta36110__$1){
var self__ = this;
var _36111__$1 = this;
return (new cljs.core.async.t_cljs$core$async36109(self__.flag,meta36110__$1));
}));

(cljs.core.async.t_cljs$core$async36109.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36111){
var self__ = this;
var _36111__$1 = this;
return self__.meta36110;
}));

(cljs.core.async.t_cljs$core$async36109.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36109.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async36109.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async36109.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async36109.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta36110","meta36110",-1039511768,null)], null);
}));

(cljs.core.async.t_cljs$core$async36109.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36109.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36109");

(cljs.core.async.t_cljs$core$async36109.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async36109");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36109.
 */
cljs.core.async.__GT_t_cljs$core$async36109 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async36109(flag__$1,meta36110){
return (new cljs.core.async.t_cljs$core$async36109(flag__$1,meta36110));
});

}

return (new cljs.core.async.t_cljs$core$async36109(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36112 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36112 = (function (flag,cb,meta36113){
this.flag = flag;
this.cb = cb;
this.meta36113 = meta36113;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36112.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36114,meta36113__$1){
var self__ = this;
var _36114__$1 = this;
return (new cljs.core.async.t_cljs$core$async36112(self__.flag,self__.cb,meta36113__$1));
}));

(cljs.core.async.t_cljs$core$async36112.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36114){
var self__ = this;
var _36114__$1 = this;
return self__.meta36113;
}));

(cljs.core.async.t_cljs$core$async36112.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36112.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async36112.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async36112.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async36112.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta36113","meta36113",758870225,null)], null);
}));

(cljs.core.async.t_cljs$core$async36112.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36112.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36112");

(cljs.core.async.t_cljs$core$async36112.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async36112");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36112.
 */
cljs.core.async.__GT_t_cljs$core$async36112 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async36112(flag__$1,cb__$1,meta36113){
return (new cljs.core.async.t_cljs$core$async36112(flag__$1,cb__$1,meta36113));
});

}

return (new cljs.core.async.t_cljs$core$async36112(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count.call(null,ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__36115_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__36115_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__36116_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__36116_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4126__auto__ = wport;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return port;
}
})()], null));
} else {
var G__36117 = (i + (1));
i = G__36117;
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
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5720__auto__ = (function (){var and__4115__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var got = temp__5720__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
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
var len__4736__auto___36123 = arguments.length;
var i__4737__auto___36124 = (0);
while(true){
if((i__4737__auto___36124 < len__4736__auto___36123)){
args__4742__auto__.push((arguments[i__4737__auto___36124]));

var G__36125 = (i__4737__auto___36124 + (1));
i__4737__auto___36124 = G__36125;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__36120){
var map__36121 = p__36120;
var map__36121__$1 = (((((!((map__36121 == null))))?(((((map__36121.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36121.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36121):map__36121);
var opts = map__36121__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq36118){
var G__36119 = cljs.core.first.call(null,seq36118);
var seq36118__$1 = cljs.core.next.call(null,seq36118);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36119,seq36118__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
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
var G__36127 = arguments.length;
switch (G__36127) {
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
return cljs.core.async.pipe.call(null,from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__36027__auto___36173 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__36028__auto__ = (function (){var switch__35932__auto__ = (function (state_36151){
var state_val_36152 = (state_36151[(1)]);
if((state_val_36152 === (7))){
var inst_36147 = (state_36151[(2)]);
var state_36151__$1 = state_36151;
var statearr_36153_36174 = state_36151__$1;
(statearr_36153_36174[(2)] = inst_36147);

(statearr_36153_36174[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36152 === (1))){
var state_36151__$1 = state_36151;
var statearr_36154_36175 = state_36151__$1;
(statearr_36154_36175[(2)] = null);

(statearr_36154_36175[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36152 === (4))){
var inst_36130 = (state_36151[(7)]);
var inst_36130__$1 = (state_36151[(2)]);
var inst_36131 = (inst_36130__$1 == null);
var state_36151__$1 = (function (){var statearr_36155 = state_36151;
(statearr_36155[(7)] = inst_36130__$1);

return statearr_36155;
})();
if(cljs.core.truth_(inst_36131)){
var statearr_36156_36176 = state_36151__$1;
(statearr_36156_36176[(1)] = (5));

} else {
var statearr_36157_36177 = state_36151__$1;
(statearr_36157_36177[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36152 === (13))){
var state_36151__$1 = state_36151;
var statearr_36158_36178 = state_36151__$1;
(statearr_36158_36178[(2)] = null);

(statearr_36158_36178[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36152 === (6))){
var inst_36130 = (state_36151[(7)]);
var state_36151__$1 = state_36151;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36151__$1,(11),to,inst_36130);
} else {
if((state_val_36152 === (3))){
var inst_36149 = (state_36151[(2)]);
var state_36151__$1 = state_36151;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36151__$1,inst_36149);
} else {
if((state_val_36152 === (12))){
var state_36151__$1 = state_36151;
var statearr_36159_36179 = state_36151__$1;
(statearr_36159_36179[(2)] = null);

(statearr_36159_36179[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36152 === (2))){
var state_36151__$1 = state_36151;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36151__$1,(4),from);
} else {
if((state_val_36152 === (11))){
var inst_36140 = (state_36151[(2)]);
var state_36151__$1 = state_36151;
if(cljs.core.truth_(inst_36140)){
var statearr_36160_36180 = state_36151__$1;
(statearr_36160_36180[(1)] = (12));

} else {
var statearr_36161_36181 = state_36151__$1;
(statearr_36161_36181[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36152 === (9))){
var state_36151__$1 = state_36151;
var statearr_36162_36182 = state_36151__$1;
(statearr_36162_36182[(2)] = null);

(statearr_36162_36182[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36152 === (5))){
var state_36151__$1 = state_36151;
if(cljs.core.truth_(close_QMARK_)){
var statearr_36163_36183 = state_36151__$1;
(statearr_36163_36183[(1)] = (8));

} else {
var statearr_36164_36184 = state_36151__$1;
(statearr_36164_36184[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36152 === (14))){
var inst_36145 = (state_36151[(2)]);
var state_36151__$1 = state_36151;
var statearr_36165_36185 = state_36151__$1;
(statearr_36165_36185[(2)] = inst_36145);

(statearr_36165_36185[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36152 === (10))){
var inst_36137 = (state_36151[(2)]);
var state_36151__$1 = state_36151;
var statearr_36166_36186 = state_36151__$1;
(statearr_36166_36186[(2)] = inst_36137);

(statearr_36166_36186[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36152 === (8))){
var inst_36134 = cljs.core.async.close_BANG_.call(null,to);
var state_36151__$1 = state_36151;
var statearr_36167_36187 = state_36151__$1;
(statearr_36167_36187[(2)] = inst_36134);

(statearr_36167_36187[(1)] = (10));


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
var cljs$core$async$state_machine__35933__auto__ = null;
var cljs$core$async$state_machine__35933__auto____0 = (function (){
var statearr_36168 = [null,null,null,null,null,null,null,null];
(statearr_36168[(0)] = cljs$core$async$state_machine__35933__auto__);

(statearr_36168[(1)] = (1));

return statearr_36168;
});
var cljs$core$async$state_machine__35933__auto____1 = (function (state_36151){
while(true){
var ret_value__35934__auto__ = (function (){try{while(true){
var result__35935__auto__ = switch__35932__auto__.call(null,state_36151);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35935__auto__;
}
break;
}
}catch (e36169){if((e36169 instanceof Object)){
var ex__35936__auto__ = e36169;
var statearr_36170_36188 = state_36151;
(statearr_36170_36188[(5)] = ex__35936__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36151);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36169;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36189 = state_36151;
state_36151 = G__36189;
continue;
} else {
return ret_value__35934__auto__;
}
break;
}
});
cljs$core$async$state_machine__35933__auto__ = function(state_36151){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35933__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35933__auto____1.call(this,state_36151);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35933__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35933__auto____0;
cljs$core$async$state_machine__35933__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35933__auto____1;
return cljs$core$async$state_machine__35933__auto__;
})()
})();
var state__36029__auto__ = (function (){var statearr_36171 = f__36028__auto__.call(null);
(statearr_36171[(6)] = c__36027__auto___36173);

return statearr_36171;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36029__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = (function (p__36190){
var vec__36191 = p__36190;
var v = cljs.core.nth.call(null,vec__36191,(0),null);
var p = cljs.core.nth.call(null,vec__36191,(1),null);
var job = vec__36191;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__36027__auto___36362 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__36028__auto__ = (function (){var switch__35932__auto__ = (function (state_36198){
var state_val_36199 = (state_36198[(1)]);
if((state_val_36199 === (1))){
var state_36198__$1 = state_36198;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36198__$1,(2),res,v);
} else {
if((state_val_36199 === (2))){
var inst_36195 = (state_36198[(2)]);
var inst_36196 = cljs.core.async.close_BANG_.call(null,res);
var state_36198__$1 = (function (){var statearr_36200 = state_36198;
(statearr_36200[(7)] = inst_36195);

return statearr_36200;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36198__$1,inst_36196);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__35933__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35933__auto____0 = (function (){
var statearr_36201 = [null,null,null,null,null,null,null,null];
(statearr_36201[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35933__auto__);

(statearr_36201[(1)] = (1));

return statearr_36201;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35933__auto____1 = (function (state_36198){
while(true){
var ret_value__35934__auto__ = (function (){try{while(true){
var result__35935__auto__ = switch__35932__auto__.call(null,state_36198);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35935__auto__;
}
break;
}
}catch (e36202){if((e36202 instanceof Object)){
var ex__35936__auto__ = e36202;
var statearr_36203_36363 = state_36198;
(statearr_36203_36363[(5)] = ex__35936__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36198);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36202;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36364 = state_36198;
state_36198 = G__36364;
continue;
} else {
return ret_value__35934__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35933__auto__ = function(state_36198){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35933__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35933__auto____1.call(this,state_36198);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__35933__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35933__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35933__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35933__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35933__auto__;
})()
})();
var state__36029__auto__ = (function (){var statearr_36204 = f__36028__auto__.call(null);
(statearr_36204[(6)] = c__36027__auto___36362);

return statearr_36204;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36029__auto__);
}));


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var async = (function (p__36205){
var vec__36206 = p__36205;
var v = cljs.core.nth.call(null,vec__36206,(0),null);
var p = cljs.core.nth.call(null,vec__36206,(1),null);
var job = vec__36206;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var n__4613__auto___36365 = n;
var __36366 = (0);
while(true){
if((__36366 < n__4613__auto___36365)){
var G__36209_36367 = type;
var G__36209_36368__$1 = (((G__36209_36367 instanceof cljs.core.Keyword))?G__36209_36367.fqn:null);
switch (G__36209_36368__$1) {
case "compute":
var c__36027__auto___36370 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__36366,c__36027__auto___36370,G__36209_36367,G__36209_36368__$1,n__4613__auto___36365,jobs,results,process,async){
return (function (){
var f__36028__auto__ = (function (){var switch__35932__auto__ = ((function (__36366,c__36027__auto___36370,G__36209_36367,G__36209_36368__$1,n__4613__auto___36365,jobs,results,process,async){
return (function (state_36222){
var state_val_36223 = (state_36222[(1)]);
if((state_val_36223 === (1))){
var state_36222__$1 = state_36222;
var statearr_36224_36371 = state_36222__$1;
(statearr_36224_36371[(2)] = null);

(statearr_36224_36371[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36223 === (2))){
var state_36222__$1 = state_36222;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36222__$1,(4),jobs);
} else {
if((state_val_36223 === (3))){
var inst_36220 = (state_36222[(2)]);
var state_36222__$1 = state_36222;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36222__$1,inst_36220);
} else {
if((state_val_36223 === (4))){
var inst_36212 = (state_36222[(2)]);
var inst_36213 = process.call(null,inst_36212);
var state_36222__$1 = state_36222;
if(cljs.core.truth_(inst_36213)){
var statearr_36225_36372 = state_36222__$1;
(statearr_36225_36372[(1)] = (5));

} else {
var statearr_36226_36373 = state_36222__$1;
(statearr_36226_36373[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36223 === (5))){
var state_36222__$1 = state_36222;
var statearr_36227_36374 = state_36222__$1;
(statearr_36227_36374[(2)] = null);

(statearr_36227_36374[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36223 === (6))){
var state_36222__$1 = state_36222;
var statearr_36228_36375 = state_36222__$1;
(statearr_36228_36375[(2)] = null);

(statearr_36228_36375[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36223 === (7))){
var inst_36218 = (state_36222[(2)]);
var state_36222__$1 = state_36222;
var statearr_36229_36376 = state_36222__$1;
(statearr_36229_36376[(2)] = inst_36218);

(statearr_36229_36376[(1)] = (3));


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
});})(__36366,c__36027__auto___36370,G__36209_36367,G__36209_36368__$1,n__4613__auto___36365,jobs,results,process,async))
;
return ((function (__36366,switch__35932__auto__,c__36027__auto___36370,G__36209_36367,G__36209_36368__$1,n__4613__auto___36365,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__35933__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35933__auto____0 = (function (){
var statearr_36230 = [null,null,null,null,null,null,null];
(statearr_36230[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35933__auto__);

(statearr_36230[(1)] = (1));

return statearr_36230;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35933__auto____1 = (function (state_36222){
while(true){
var ret_value__35934__auto__ = (function (){try{while(true){
var result__35935__auto__ = switch__35932__auto__.call(null,state_36222);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35935__auto__;
}
break;
}
}catch (e36231){if((e36231 instanceof Object)){
var ex__35936__auto__ = e36231;
var statearr_36232_36377 = state_36222;
(statearr_36232_36377[(5)] = ex__35936__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36222);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36231;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36378 = state_36222;
state_36222 = G__36378;
continue;
} else {
return ret_value__35934__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35933__auto__ = function(state_36222){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35933__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35933__auto____1.call(this,state_36222);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__35933__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35933__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35933__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35933__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35933__auto__;
})()
;})(__36366,switch__35932__auto__,c__36027__auto___36370,G__36209_36367,G__36209_36368__$1,n__4613__auto___36365,jobs,results,process,async))
})();
var state__36029__auto__ = (function (){var statearr_36233 = f__36028__auto__.call(null);
(statearr_36233[(6)] = c__36027__auto___36370);

return statearr_36233;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36029__auto__);
});})(__36366,c__36027__auto___36370,G__36209_36367,G__36209_36368__$1,n__4613__auto___36365,jobs,results,process,async))
);


break;
case "async":
var c__36027__auto___36379 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__36366,c__36027__auto___36379,G__36209_36367,G__36209_36368__$1,n__4613__auto___36365,jobs,results,process,async){
return (function (){
var f__36028__auto__ = (function (){var switch__35932__auto__ = ((function (__36366,c__36027__auto___36379,G__36209_36367,G__36209_36368__$1,n__4613__auto___36365,jobs,results,process,async){
return (function (state_36246){
var state_val_36247 = (state_36246[(1)]);
if((state_val_36247 === (1))){
var state_36246__$1 = state_36246;
var statearr_36248_36380 = state_36246__$1;
(statearr_36248_36380[(2)] = null);

(statearr_36248_36380[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36247 === (2))){
var state_36246__$1 = state_36246;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36246__$1,(4),jobs);
} else {
if((state_val_36247 === (3))){
var inst_36244 = (state_36246[(2)]);
var state_36246__$1 = state_36246;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36246__$1,inst_36244);
} else {
if((state_val_36247 === (4))){
var inst_36236 = (state_36246[(2)]);
var inst_36237 = async.call(null,inst_36236);
var state_36246__$1 = state_36246;
if(cljs.core.truth_(inst_36237)){
var statearr_36249_36381 = state_36246__$1;
(statearr_36249_36381[(1)] = (5));

} else {
var statearr_36250_36382 = state_36246__$1;
(statearr_36250_36382[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36247 === (5))){
var state_36246__$1 = state_36246;
var statearr_36251_36383 = state_36246__$1;
(statearr_36251_36383[(2)] = null);

(statearr_36251_36383[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36247 === (6))){
var state_36246__$1 = state_36246;
var statearr_36252_36384 = state_36246__$1;
(statearr_36252_36384[(2)] = null);

(statearr_36252_36384[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36247 === (7))){
var inst_36242 = (state_36246[(2)]);
var state_36246__$1 = state_36246;
var statearr_36253_36385 = state_36246__$1;
(statearr_36253_36385[(2)] = inst_36242);

(statearr_36253_36385[(1)] = (3));


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
});})(__36366,c__36027__auto___36379,G__36209_36367,G__36209_36368__$1,n__4613__auto___36365,jobs,results,process,async))
;
return ((function (__36366,switch__35932__auto__,c__36027__auto___36379,G__36209_36367,G__36209_36368__$1,n__4613__auto___36365,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__35933__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35933__auto____0 = (function (){
var statearr_36254 = [null,null,null,null,null,null,null];
(statearr_36254[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35933__auto__);

(statearr_36254[(1)] = (1));

return statearr_36254;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35933__auto____1 = (function (state_36246){
while(true){
var ret_value__35934__auto__ = (function (){try{while(true){
var result__35935__auto__ = switch__35932__auto__.call(null,state_36246);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35935__auto__;
}
break;
}
}catch (e36255){if((e36255 instanceof Object)){
var ex__35936__auto__ = e36255;
var statearr_36256_36386 = state_36246;
(statearr_36256_36386[(5)] = ex__35936__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36246);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36255;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36387 = state_36246;
state_36246 = G__36387;
continue;
} else {
return ret_value__35934__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35933__auto__ = function(state_36246){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35933__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35933__auto____1.call(this,state_36246);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__35933__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35933__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35933__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35933__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35933__auto__;
})()
;})(__36366,switch__35932__auto__,c__36027__auto___36379,G__36209_36367,G__36209_36368__$1,n__4613__auto___36365,jobs,results,process,async))
})();
var state__36029__auto__ = (function (){var statearr_36257 = f__36028__auto__.call(null);
(statearr_36257[(6)] = c__36027__auto___36379);

return statearr_36257;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36029__auto__);
});})(__36366,c__36027__auto___36379,G__36209_36367,G__36209_36368__$1,n__4613__auto___36365,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36209_36368__$1)].join('')));

}

var G__36388 = (__36366 + (1));
__36366 = G__36388;
continue;
} else {
}
break;
}

var c__36027__auto___36389 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__36028__auto__ = (function (){var switch__35932__auto__ = (function (state_36279){
var state_val_36280 = (state_36279[(1)]);
if((state_val_36280 === (7))){
var inst_36275 = (state_36279[(2)]);
var state_36279__$1 = state_36279;
var statearr_36281_36390 = state_36279__$1;
(statearr_36281_36390[(2)] = inst_36275);

(statearr_36281_36390[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36280 === (1))){
var state_36279__$1 = state_36279;
var statearr_36282_36391 = state_36279__$1;
(statearr_36282_36391[(2)] = null);

(statearr_36282_36391[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36280 === (4))){
var inst_36260 = (state_36279[(7)]);
var inst_36260__$1 = (state_36279[(2)]);
var inst_36261 = (inst_36260__$1 == null);
var state_36279__$1 = (function (){var statearr_36283 = state_36279;
(statearr_36283[(7)] = inst_36260__$1);

return statearr_36283;
})();
if(cljs.core.truth_(inst_36261)){
var statearr_36284_36392 = state_36279__$1;
(statearr_36284_36392[(1)] = (5));

} else {
var statearr_36285_36393 = state_36279__$1;
(statearr_36285_36393[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36280 === (6))){
var inst_36260 = (state_36279[(7)]);
var inst_36265 = (state_36279[(8)]);
var inst_36265__$1 = cljs.core.async.chan.call(null,(1));
var inst_36266 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36267 = [inst_36260,inst_36265__$1];
var inst_36268 = (new cljs.core.PersistentVector(null,2,(5),inst_36266,inst_36267,null));
var state_36279__$1 = (function (){var statearr_36286 = state_36279;
(statearr_36286[(8)] = inst_36265__$1);

return statearr_36286;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36279__$1,(8),jobs,inst_36268);
} else {
if((state_val_36280 === (3))){
var inst_36277 = (state_36279[(2)]);
var state_36279__$1 = state_36279;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36279__$1,inst_36277);
} else {
if((state_val_36280 === (2))){
var state_36279__$1 = state_36279;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36279__$1,(4),from);
} else {
if((state_val_36280 === (9))){
var inst_36272 = (state_36279[(2)]);
var state_36279__$1 = (function (){var statearr_36287 = state_36279;
(statearr_36287[(9)] = inst_36272);

return statearr_36287;
})();
var statearr_36288_36394 = state_36279__$1;
(statearr_36288_36394[(2)] = null);

(statearr_36288_36394[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36280 === (5))){
var inst_36263 = cljs.core.async.close_BANG_.call(null,jobs);
var state_36279__$1 = state_36279;
var statearr_36289_36395 = state_36279__$1;
(statearr_36289_36395[(2)] = inst_36263);

(statearr_36289_36395[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36280 === (8))){
var inst_36265 = (state_36279[(8)]);
var inst_36270 = (state_36279[(2)]);
var state_36279__$1 = (function (){var statearr_36290 = state_36279;
(statearr_36290[(10)] = inst_36270);

return statearr_36290;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36279__$1,(9),results,inst_36265);
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
var cljs$core$async$pipeline_STAR__$_state_machine__35933__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35933__auto____0 = (function (){
var statearr_36291 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36291[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35933__auto__);

(statearr_36291[(1)] = (1));

return statearr_36291;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35933__auto____1 = (function (state_36279){
while(true){
var ret_value__35934__auto__ = (function (){try{while(true){
var result__35935__auto__ = switch__35932__auto__.call(null,state_36279);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35935__auto__;
}
break;
}
}catch (e36292){if((e36292 instanceof Object)){
var ex__35936__auto__ = e36292;
var statearr_36293_36396 = state_36279;
(statearr_36293_36396[(5)] = ex__35936__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36279);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36292;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36397 = state_36279;
state_36279 = G__36397;
continue;
} else {
return ret_value__35934__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35933__auto__ = function(state_36279){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35933__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35933__auto____1.call(this,state_36279);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__35933__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35933__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35933__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35933__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35933__auto__;
})()
})();
var state__36029__auto__ = (function (){var statearr_36294 = f__36028__auto__.call(null);
(statearr_36294[(6)] = c__36027__auto___36389);

return statearr_36294;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36029__auto__);
}));


var c__36027__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__36028__auto__ = (function (){var switch__35932__auto__ = (function (state_36332){
var state_val_36333 = (state_36332[(1)]);
if((state_val_36333 === (7))){
var inst_36328 = (state_36332[(2)]);
var state_36332__$1 = state_36332;
var statearr_36334_36398 = state_36332__$1;
(statearr_36334_36398[(2)] = inst_36328);

(statearr_36334_36398[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36333 === (20))){
var state_36332__$1 = state_36332;
var statearr_36335_36399 = state_36332__$1;
(statearr_36335_36399[(2)] = null);

(statearr_36335_36399[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36333 === (1))){
var state_36332__$1 = state_36332;
var statearr_36336_36400 = state_36332__$1;
(statearr_36336_36400[(2)] = null);

(statearr_36336_36400[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36333 === (4))){
var inst_36297 = (state_36332[(7)]);
var inst_36297__$1 = (state_36332[(2)]);
var inst_36298 = (inst_36297__$1 == null);
var state_36332__$1 = (function (){var statearr_36337 = state_36332;
(statearr_36337[(7)] = inst_36297__$1);

return statearr_36337;
})();
if(cljs.core.truth_(inst_36298)){
var statearr_36338_36401 = state_36332__$1;
(statearr_36338_36401[(1)] = (5));

} else {
var statearr_36339_36402 = state_36332__$1;
(statearr_36339_36402[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36333 === (15))){
var inst_36310 = (state_36332[(8)]);
var state_36332__$1 = state_36332;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36332__$1,(18),to,inst_36310);
} else {
if((state_val_36333 === (21))){
var inst_36323 = (state_36332[(2)]);
var state_36332__$1 = state_36332;
var statearr_36340_36403 = state_36332__$1;
(statearr_36340_36403[(2)] = inst_36323);

(statearr_36340_36403[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36333 === (13))){
var inst_36325 = (state_36332[(2)]);
var state_36332__$1 = (function (){var statearr_36341 = state_36332;
(statearr_36341[(9)] = inst_36325);

return statearr_36341;
})();
var statearr_36342_36404 = state_36332__$1;
(statearr_36342_36404[(2)] = null);

(statearr_36342_36404[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36333 === (6))){
var inst_36297 = (state_36332[(7)]);
var state_36332__$1 = state_36332;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36332__$1,(11),inst_36297);
} else {
if((state_val_36333 === (17))){
var inst_36318 = (state_36332[(2)]);
var state_36332__$1 = state_36332;
if(cljs.core.truth_(inst_36318)){
var statearr_36343_36405 = state_36332__$1;
(statearr_36343_36405[(1)] = (19));

} else {
var statearr_36344_36406 = state_36332__$1;
(statearr_36344_36406[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36333 === (3))){
var inst_36330 = (state_36332[(2)]);
var state_36332__$1 = state_36332;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36332__$1,inst_36330);
} else {
if((state_val_36333 === (12))){
var inst_36307 = (state_36332[(10)]);
var state_36332__$1 = state_36332;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36332__$1,(14),inst_36307);
} else {
if((state_val_36333 === (2))){
var state_36332__$1 = state_36332;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36332__$1,(4),results);
} else {
if((state_val_36333 === (19))){
var state_36332__$1 = state_36332;
var statearr_36345_36407 = state_36332__$1;
(statearr_36345_36407[(2)] = null);

(statearr_36345_36407[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36333 === (11))){
var inst_36307 = (state_36332[(2)]);
var state_36332__$1 = (function (){var statearr_36346 = state_36332;
(statearr_36346[(10)] = inst_36307);

return statearr_36346;
})();
var statearr_36347_36408 = state_36332__$1;
(statearr_36347_36408[(2)] = null);

(statearr_36347_36408[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36333 === (9))){
var state_36332__$1 = state_36332;
var statearr_36348_36409 = state_36332__$1;
(statearr_36348_36409[(2)] = null);

(statearr_36348_36409[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36333 === (5))){
var state_36332__$1 = state_36332;
if(cljs.core.truth_(close_QMARK_)){
var statearr_36349_36410 = state_36332__$1;
(statearr_36349_36410[(1)] = (8));

} else {
var statearr_36350_36411 = state_36332__$1;
(statearr_36350_36411[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36333 === (14))){
var inst_36310 = (state_36332[(8)]);
var inst_36310__$1 = (state_36332[(2)]);
var inst_36311 = (inst_36310__$1 == null);
var inst_36312 = cljs.core.not.call(null,inst_36311);
var state_36332__$1 = (function (){var statearr_36351 = state_36332;
(statearr_36351[(8)] = inst_36310__$1);

return statearr_36351;
})();
if(inst_36312){
var statearr_36352_36412 = state_36332__$1;
(statearr_36352_36412[(1)] = (15));

} else {
var statearr_36353_36413 = state_36332__$1;
(statearr_36353_36413[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36333 === (16))){
var state_36332__$1 = state_36332;
var statearr_36354_36414 = state_36332__$1;
(statearr_36354_36414[(2)] = false);

(statearr_36354_36414[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36333 === (10))){
var inst_36304 = (state_36332[(2)]);
var state_36332__$1 = state_36332;
var statearr_36355_36415 = state_36332__$1;
(statearr_36355_36415[(2)] = inst_36304);

(statearr_36355_36415[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36333 === (18))){
var inst_36315 = (state_36332[(2)]);
var state_36332__$1 = state_36332;
var statearr_36356_36416 = state_36332__$1;
(statearr_36356_36416[(2)] = inst_36315);

(statearr_36356_36416[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36333 === (8))){
var inst_36301 = cljs.core.async.close_BANG_.call(null,to);
var state_36332__$1 = state_36332;
var statearr_36357_36417 = state_36332__$1;
(statearr_36357_36417[(2)] = inst_36301);

(statearr_36357_36417[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__35933__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35933__auto____0 = (function (){
var statearr_36358 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36358[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35933__auto__);

(statearr_36358[(1)] = (1));

return statearr_36358;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35933__auto____1 = (function (state_36332){
while(true){
var ret_value__35934__auto__ = (function (){try{while(true){
var result__35935__auto__ = switch__35932__auto__.call(null,state_36332);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35935__auto__;
}
break;
}
}catch (e36359){if((e36359 instanceof Object)){
var ex__35936__auto__ = e36359;
var statearr_36360_36418 = state_36332;
(statearr_36360_36418[(5)] = ex__35936__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36332);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36359;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36419 = state_36332;
state_36332 = G__36419;
continue;
} else {
return ret_value__35934__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35933__auto__ = function(state_36332){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35933__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35933__auto____1.call(this,state_36332);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__35933__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35933__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35933__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35933__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35933__auto__;
})()
})();
var state__36029__auto__ = (function (){var statearr_36361 = f__36028__auto__.call(null);
(statearr_36361[(6)] = c__36027__auto__);

return statearr_36361;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36029__auto__);
}));

return c__36027__auto__;
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
var G__36421 = arguments.length;
switch (G__36421) {
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
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
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
var G__36424 = arguments.length;
switch (G__36424) {
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
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
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
var G__36427 = arguments.length;
switch (G__36427) {
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
return cljs.core.async.split.call(null,p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__36027__auto___36476 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__36028__auto__ = (function (){var switch__35932__auto__ = (function (state_36453){
var state_val_36454 = (state_36453[(1)]);
if((state_val_36454 === (7))){
var inst_36449 = (state_36453[(2)]);
var state_36453__$1 = state_36453;
var statearr_36455_36477 = state_36453__$1;
(statearr_36455_36477[(2)] = inst_36449);

(statearr_36455_36477[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36454 === (1))){
var state_36453__$1 = state_36453;
var statearr_36456_36478 = state_36453__$1;
(statearr_36456_36478[(2)] = null);

(statearr_36456_36478[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36454 === (4))){
var inst_36430 = (state_36453[(7)]);
var inst_36430__$1 = (state_36453[(2)]);
var inst_36431 = (inst_36430__$1 == null);
var state_36453__$1 = (function (){var statearr_36457 = state_36453;
(statearr_36457[(7)] = inst_36430__$1);

return statearr_36457;
})();
if(cljs.core.truth_(inst_36431)){
var statearr_36458_36479 = state_36453__$1;
(statearr_36458_36479[(1)] = (5));

} else {
var statearr_36459_36480 = state_36453__$1;
(statearr_36459_36480[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36454 === (13))){
var state_36453__$1 = state_36453;
var statearr_36460_36481 = state_36453__$1;
(statearr_36460_36481[(2)] = null);

(statearr_36460_36481[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36454 === (6))){
var inst_36430 = (state_36453[(7)]);
var inst_36436 = p.call(null,inst_36430);
var state_36453__$1 = state_36453;
if(cljs.core.truth_(inst_36436)){
var statearr_36461_36482 = state_36453__$1;
(statearr_36461_36482[(1)] = (9));

} else {
var statearr_36462_36483 = state_36453__$1;
(statearr_36462_36483[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36454 === (3))){
var inst_36451 = (state_36453[(2)]);
var state_36453__$1 = state_36453;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36453__$1,inst_36451);
} else {
if((state_val_36454 === (12))){
var state_36453__$1 = state_36453;
var statearr_36463_36484 = state_36453__$1;
(statearr_36463_36484[(2)] = null);

(statearr_36463_36484[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36454 === (2))){
var state_36453__$1 = state_36453;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36453__$1,(4),ch);
} else {
if((state_val_36454 === (11))){
var inst_36430 = (state_36453[(7)]);
var inst_36440 = (state_36453[(2)]);
var state_36453__$1 = state_36453;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36453__$1,(8),inst_36440,inst_36430);
} else {
if((state_val_36454 === (9))){
var state_36453__$1 = state_36453;
var statearr_36464_36485 = state_36453__$1;
(statearr_36464_36485[(2)] = tc);

(statearr_36464_36485[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36454 === (5))){
var inst_36433 = cljs.core.async.close_BANG_.call(null,tc);
var inst_36434 = cljs.core.async.close_BANG_.call(null,fc);
var state_36453__$1 = (function (){var statearr_36465 = state_36453;
(statearr_36465[(8)] = inst_36433);

return statearr_36465;
})();
var statearr_36466_36486 = state_36453__$1;
(statearr_36466_36486[(2)] = inst_36434);

(statearr_36466_36486[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36454 === (14))){
var inst_36447 = (state_36453[(2)]);
var state_36453__$1 = state_36453;
var statearr_36467_36487 = state_36453__$1;
(statearr_36467_36487[(2)] = inst_36447);

(statearr_36467_36487[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36454 === (10))){
var state_36453__$1 = state_36453;
var statearr_36468_36488 = state_36453__$1;
(statearr_36468_36488[(2)] = fc);

(statearr_36468_36488[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36454 === (8))){
var inst_36442 = (state_36453[(2)]);
var state_36453__$1 = state_36453;
if(cljs.core.truth_(inst_36442)){
var statearr_36469_36489 = state_36453__$1;
(statearr_36469_36489[(1)] = (12));

} else {
var statearr_36470_36490 = state_36453__$1;
(statearr_36470_36490[(1)] = (13));

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
var cljs$core$async$state_machine__35933__auto__ = null;
var cljs$core$async$state_machine__35933__auto____0 = (function (){
var statearr_36471 = [null,null,null,null,null,null,null,null,null];
(statearr_36471[(0)] = cljs$core$async$state_machine__35933__auto__);

(statearr_36471[(1)] = (1));

return statearr_36471;
});
var cljs$core$async$state_machine__35933__auto____1 = (function (state_36453){
while(true){
var ret_value__35934__auto__ = (function (){try{while(true){
var result__35935__auto__ = switch__35932__auto__.call(null,state_36453);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35935__auto__;
}
break;
}
}catch (e36472){if((e36472 instanceof Object)){
var ex__35936__auto__ = e36472;
var statearr_36473_36491 = state_36453;
(statearr_36473_36491[(5)] = ex__35936__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36453);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36472;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36492 = state_36453;
state_36453 = G__36492;
continue;
} else {
return ret_value__35934__auto__;
}
break;
}
});
cljs$core$async$state_machine__35933__auto__ = function(state_36453){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35933__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35933__auto____1.call(this,state_36453);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35933__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35933__auto____0;
cljs$core$async$state_machine__35933__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35933__auto____1;
return cljs$core$async$state_machine__35933__auto__;
})()
})();
var state__36029__auto__ = (function (){var statearr_36474 = f__36028__auto__.call(null);
(statearr_36474[(6)] = c__36027__auto___36476);

return statearr_36474;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36029__auto__);
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
var c__36027__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__36028__auto__ = (function (){var switch__35932__auto__ = (function (state_36513){
var state_val_36514 = (state_36513[(1)]);
if((state_val_36514 === (7))){
var inst_36509 = (state_36513[(2)]);
var state_36513__$1 = state_36513;
var statearr_36515_36533 = state_36513__$1;
(statearr_36515_36533[(2)] = inst_36509);

(statearr_36515_36533[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36514 === (1))){
var inst_36493 = init;
var state_36513__$1 = (function (){var statearr_36516 = state_36513;
(statearr_36516[(7)] = inst_36493);

return statearr_36516;
})();
var statearr_36517_36534 = state_36513__$1;
(statearr_36517_36534[(2)] = null);

(statearr_36517_36534[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36514 === (4))){
var inst_36496 = (state_36513[(8)]);
var inst_36496__$1 = (state_36513[(2)]);
var inst_36497 = (inst_36496__$1 == null);
var state_36513__$1 = (function (){var statearr_36518 = state_36513;
(statearr_36518[(8)] = inst_36496__$1);

return statearr_36518;
})();
if(cljs.core.truth_(inst_36497)){
var statearr_36519_36535 = state_36513__$1;
(statearr_36519_36535[(1)] = (5));

} else {
var statearr_36520_36536 = state_36513__$1;
(statearr_36520_36536[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36514 === (6))){
var inst_36493 = (state_36513[(7)]);
var inst_36496 = (state_36513[(8)]);
var inst_36500 = (state_36513[(9)]);
var inst_36500__$1 = f.call(null,inst_36493,inst_36496);
var inst_36501 = cljs.core.reduced_QMARK_.call(null,inst_36500__$1);
var state_36513__$1 = (function (){var statearr_36521 = state_36513;
(statearr_36521[(9)] = inst_36500__$1);

return statearr_36521;
})();
if(inst_36501){
var statearr_36522_36537 = state_36513__$1;
(statearr_36522_36537[(1)] = (8));

} else {
var statearr_36523_36538 = state_36513__$1;
(statearr_36523_36538[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36514 === (3))){
var inst_36511 = (state_36513[(2)]);
var state_36513__$1 = state_36513;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36513__$1,inst_36511);
} else {
if((state_val_36514 === (2))){
var state_36513__$1 = state_36513;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36513__$1,(4),ch);
} else {
if((state_val_36514 === (9))){
var inst_36500 = (state_36513[(9)]);
var inst_36493 = inst_36500;
var state_36513__$1 = (function (){var statearr_36524 = state_36513;
(statearr_36524[(7)] = inst_36493);

return statearr_36524;
})();
var statearr_36525_36539 = state_36513__$1;
(statearr_36525_36539[(2)] = null);

(statearr_36525_36539[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36514 === (5))){
var inst_36493 = (state_36513[(7)]);
var state_36513__$1 = state_36513;
var statearr_36526_36540 = state_36513__$1;
(statearr_36526_36540[(2)] = inst_36493);

(statearr_36526_36540[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36514 === (10))){
var inst_36507 = (state_36513[(2)]);
var state_36513__$1 = state_36513;
var statearr_36527_36541 = state_36513__$1;
(statearr_36527_36541[(2)] = inst_36507);

(statearr_36527_36541[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36514 === (8))){
var inst_36500 = (state_36513[(9)]);
var inst_36503 = cljs.core.deref.call(null,inst_36500);
var state_36513__$1 = state_36513;
var statearr_36528_36542 = state_36513__$1;
(statearr_36528_36542[(2)] = inst_36503);

(statearr_36528_36542[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__35933__auto__ = null;
var cljs$core$async$reduce_$_state_machine__35933__auto____0 = (function (){
var statearr_36529 = [null,null,null,null,null,null,null,null,null,null];
(statearr_36529[(0)] = cljs$core$async$reduce_$_state_machine__35933__auto__);

(statearr_36529[(1)] = (1));

return statearr_36529;
});
var cljs$core$async$reduce_$_state_machine__35933__auto____1 = (function (state_36513){
while(true){
var ret_value__35934__auto__ = (function (){try{while(true){
var result__35935__auto__ = switch__35932__auto__.call(null,state_36513);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35935__auto__;
}
break;
}
}catch (e36530){if((e36530 instanceof Object)){
var ex__35936__auto__ = e36530;
var statearr_36531_36543 = state_36513;
(statearr_36531_36543[(5)] = ex__35936__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36513);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36530;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36544 = state_36513;
state_36513 = G__36544;
continue;
} else {
return ret_value__35934__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__35933__auto__ = function(state_36513){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__35933__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__35933__auto____1.call(this,state_36513);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__35933__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__35933__auto____0;
cljs$core$async$reduce_$_state_machine__35933__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__35933__auto____1;
return cljs$core$async$reduce_$_state_machine__35933__auto__;
})()
})();
var state__36029__auto__ = (function (){var statearr_36532 = f__36028__auto__.call(null);
(statearr_36532[(6)] = c__36027__auto__);

return statearr_36532;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36029__auto__);
}));

return c__36027__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__36027__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__36028__auto__ = (function (){var switch__35932__auto__ = (function (state_36550){
var state_val_36551 = (state_36550[(1)]);
if((state_val_36551 === (1))){
var inst_36545 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_36550__$1 = state_36550;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36550__$1,(2),inst_36545);
} else {
if((state_val_36551 === (2))){
var inst_36547 = (state_36550[(2)]);
var inst_36548 = f__$1.call(null,inst_36547);
var state_36550__$1 = state_36550;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36550__$1,inst_36548);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__35933__auto__ = null;
var cljs$core$async$transduce_$_state_machine__35933__auto____0 = (function (){
var statearr_36552 = [null,null,null,null,null,null,null];
(statearr_36552[(0)] = cljs$core$async$transduce_$_state_machine__35933__auto__);

(statearr_36552[(1)] = (1));

return statearr_36552;
});
var cljs$core$async$transduce_$_state_machine__35933__auto____1 = (function (state_36550){
while(true){
var ret_value__35934__auto__ = (function (){try{while(true){
var result__35935__auto__ = switch__35932__auto__.call(null,state_36550);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35935__auto__;
}
break;
}
}catch (e36553){if((e36553 instanceof Object)){
var ex__35936__auto__ = e36553;
var statearr_36554_36556 = state_36550;
(statearr_36554_36556[(5)] = ex__35936__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36550);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36553;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36557 = state_36550;
state_36550 = G__36557;
continue;
} else {
return ret_value__35934__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__35933__auto__ = function(state_36550){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__35933__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__35933__auto____1.call(this,state_36550);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__35933__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__35933__auto____0;
cljs$core$async$transduce_$_state_machine__35933__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__35933__auto____1;
return cljs$core$async$transduce_$_state_machine__35933__auto__;
})()
})();
var state__36029__auto__ = (function (){var statearr_36555 = f__36028__auto__.call(null);
(statearr_36555[(6)] = c__36027__auto__);

return statearr_36555;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36029__auto__);
}));

return c__36027__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__36559 = arguments.length;
switch (G__36559) {
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
return cljs.core.async.onto_chan.call(null,ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__36027__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__36028__auto__ = (function (){var switch__35932__auto__ = (function (state_36584){
var state_val_36585 = (state_36584[(1)]);
if((state_val_36585 === (7))){
var inst_36566 = (state_36584[(2)]);
var state_36584__$1 = state_36584;
var statearr_36586_36607 = state_36584__$1;
(statearr_36586_36607[(2)] = inst_36566);

(statearr_36586_36607[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36585 === (1))){
var inst_36560 = cljs.core.seq.call(null,coll);
var inst_36561 = inst_36560;
var state_36584__$1 = (function (){var statearr_36587 = state_36584;
(statearr_36587[(7)] = inst_36561);

return statearr_36587;
})();
var statearr_36588_36608 = state_36584__$1;
(statearr_36588_36608[(2)] = null);

(statearr_36588_36608[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36585 === (4))){
var inst_36561 = (state_36584[(7)]);
var inst_36564 = cljs.core.first.call(null,inst_36561);
var state_36584__$1 = state_36584;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36584__$1,(7),ch,inst_36564);
} else {
if((state_val_36585 === (13))){
var inst_36578 = (state_36584[(2)]);
var state_36584__$1 = state_36584;
var statearr_36589_36609 = state_36584__$1;
(statearr_36589_36609[(2)] = inst_36578);

(statearr_36589_36609[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36585 === (6))){
var inst_36569 = (state_36584[(2)]);
var state_36584__$1 = state_36584;
if(cljs.core.truth_(inst_36569)){
var statearr_36590_36610 = state_36584__$1;
(statearr_36590_36610[(1)] = (8));

} else {
var statearr_36591_36611 = state_36584__$1;
(statearr_36591_36611[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36585 === (3))){
var inst_36582 = (state_36584[(2)]);
var state_36584__$1 = state_36584;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36584__$1,inst_36582);
} else {
if((state_val_36585 === (12))){
var state_36584__$1 = state_36584;
var statearr_36592_36612 = state_36584__$1;
(statearr_36592_36612[(2)] = null);

(statearr_36592_36612[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36585 === (2))){
var inst_36561 = (state_36584[(7)]);
var state_36584__$1 = state_36584;
if(cljs.core.truth_(inst_36561)){
var statearr_36593_36613 = state_36584__$1;
(statearr_36593_36613[(1)] = (4));

} else {
var statearr_36594_36614 = state_36584__$1;
(statearr_36594_36614[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36585 === (11))){
var inst_36575 = cljs.core.async.close_BANG_.call(null,ch);
var state_36584__$1 = state_36584;
var statearr_36595_36615 = state_36584__$1;
(statearr_36595_36615[(2)] = inst_36575);

(statearr_36595_36615[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36585 === (9))){
var state_36584__$1 = state_36584;
if(cljs.core.truth_(close_QMARK_)){
var statearr_36596_36616 = state_36584__$1;
(statearr_36596_36616[(1)] = (11));

} else {
var statearr_36597_36617 = state_36584__$1;
(statearr_36597_36617[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36585 === (5))){
var inst_36561 = (state_36584[(7)]);
var state_36584__$1 = state_36584;
var statearr_36598_36618 = state_36584__$1;
(statearr_36598_36618[(2)] = inst_36561);

(statearr_36598_36618[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36585 === (10))){
var inst_36580 = (state_36584[(2)]);
var state_36584__$1 = state_36584;
var statearr_36599_36619 = state_36584__$1;
(statearr_36599_36619[(2)] = inst_36580);

(statearr_36599_36619[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36585 === (8))){
var inst_36561 = (state_36584[(7)]);
var inst_36571 = cljs.core.next.call(null,inst_36561);
var inst_36561__$1 = inst_36571;
var state_36584__$1 = (function (){var statearr_36600 = state_36584;
(statearr_36600[(7)] = inst_36561__$1);

return statearr_36600;
})();
var statearr_36601_36620 = state_36584__$1;
(statearr_36601_36620[(2)] = null);

(statearr_36601_36620[(1)] = (2));


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
var cljs$core$async$state_machine__35933__auto__ = null;
var cljs$core$async$state_machine__35933__auto____0 = (function (){
var statearr_36602 = [null,null,null,null,null,null,null,null];
(statearr_36602[(0)] = cljs$core$async$state_machine__35933__auto__);

(statearr_36602[(1)] = (1));

return statearr_36602;
});
var cljs$core$async$state_machine__35933__auto____1 = (function (state_36584){
while(true){
var ret_value__35934__auto__ = (function (){try{while(true){
var result__35935__auto__ = switch__35932__auto__.call(null,state_36584);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35935__auto__;
}
break;
}
}catch (e36603){if((e36603 instanceof Object)){
var ex__35936__auto__ = e36603;
var statearr_36604_36621 = state_36584;
(statearr_36604_36621[(5)] = ex__35936__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36584);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36603;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36622 = state_36584;
state_36584 = G__36622;
continue;
} else {
return ret_value__35934__auto__;
}
break;
}
});
cljs$core$async$state_machine__35933__auto__ = function(state_36584){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35933__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35933__auto____1.call(this,state_36584);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35933__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35933__auto____0;
cljs$core$async$state_machine__35933__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35933__auto____1;
return cljs$core$async$state_machine__35933__auto__;
})()
})();
var state__36029__auto__ = (function (){var statearr_36605 = f__36028__auto__.call(null);
(statearr_36605[(6)] = c__36027__auto__);

return statearr_36605;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36029__auto__);
}));

return c__36027__auto__;
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_36623 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,_);
} else {
var m__4426__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_36623.call(null,_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_36624 = (function (m,ch,close_QMARK_){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4426__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_36624.call(null,m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_36625 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,ch);
} else {
var m__4426__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_36625.call(null,m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_36626 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m);
} else {
var m__4426__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_36626.call(null,m);
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
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36627 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36627 = (function (ch,cs,meta36628){
this.ch = ch;
this.cs = cs;
this.meta36628 = meta36628;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36627.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36629,meta36628__$1){
var self__ = this;
var _36629__$1 = this;
return (new cljs.core.async.t_cljs$core$async36627(self__.ch,self__.cs,meta36628__$1));
}));

(cljs.core.async.t_cljs$core$async36627.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36629){
var self__ = this;
var _36629__$1 = this;
return self__.meta36628;
}));

(cljs.core.async.t_cljs$core$async36627.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36627.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async36627.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36627.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async36627.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async36627.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async36627.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta36628","meta36628",399727413,null)], null);
}));

(cljs.core.async.t_cljs$core$async36627.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36627.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36627");

(cljs.core.async.t_cljs$core$async36627.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async36627");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36627.
 */
cljs.core.async.__GT_t_cljs$core$async36627 = (function cljs$core$async$mult_$___GT_t_cljs$core$async36627(ch__$1,cs__$1,meta36628){
return (new cljs.core.async.t_cljs$core$async36627(ch__$1,cs__$1,meta36628));
});

}

return (new cljs.core.async.t_cljs$core$async36627(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});
var c__36027__auto___36849 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__36028__auto__ = (function (){var switch__35932__auto__ = (function (state_36764){
var state_val_36765 = (state_36764[(1)]);
if((state_val_36765 === (7))){
var inst_36760 = (state_36764[(2)]);
var state_36764__$1 = state_36764;
var statearr_36766_36850 = state_36764__$1;
(statearr_36766_36850[(2)] = inst_36760);

(statearr_36766_36850[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36765 === (20))){
var inst_36663 = (state_36764[(7)]);
var inst_36675 = cljs.core.first.call(null,inst_36663);
var inst_36676 = cljs.core.nth.call(null,inst_36675,(0),null);
var inst_36677 = cljs.core.nth.call(null,inst_36675,(1),null);
var state_36764__$1 = (function (){var statearr_36767 = state_36764;
(statearr_36767[(8)] = inst_36676);

return statearr_36767;
})();
if(cljs.core.truth_(inst_36677)){
var statearr_36768_36851 = state_36764__$1;
(statearr_36768_36851[(1)] = (22));

} else {
var statearr_36769_36852 = state_36764__$1;
(statearr_36769_36852[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36765 === (27))){
var inst_36632 = (state_36764[(9)]);
var inst_36705 = (state_36764[(10)]);
var inst_36707 = (state_36764[(11)]);
var inst_36712 = (state_36764[(12)]);
var inst_36712__$1 = cljs.core._nth.call(null,inst_36705,inst_36707);
var inst_36713 = cljs.core.async.put_BANG_.call(null,inst_36712__$1,inst_36632,done);
var state_36764__$1 = (function (){var statearr_36770 = state_36764;
(statearr_36770[(12)] = inst_36712__$1);

return statearr_36770;
})();
if(cljs.core.truth_(inst_36713)){
var statearr_36771_36853 = state_36764__$1;
(statearr_36771_36853[(1)] = (30));

} else {
var statearr_36772_36854 = state_36764__$1;
(statearr_36772_36854[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36765 === (1))){
var state_36764__$1 = state_36764;
var statearr_36773_36855 = state_36764__$1;
(statearr_36773_36855[(2)] = null);

(statearr_36773_36855[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36765 === (24))){
var inst_36663 = (state_36764[(7)]);
var inst_36682 = (state_36764[(2)]);
var inst_36683 = cljs.core.next.call(null,inst_36663);
var inst_36641 = inst_36683;
var inst_36642 = null;
var inst_36643 = (0);
var inst_36644 = (0);
var state_36764__$1 = (function (){var statearr_36774 = state_36764;
(statearr_36774[(13)] = inst_36643);

(statearr_36774[(14)] = inst_36642);

(statearr_36774[(15)] = inst_36644);

(statearr_36774[(16)] = inst_36682);

(statearr_36774[(17)] = inst_36641);

return statearr_36774;
})();
var statearr_36775_36856 = state_36764__$1;
(statearr_36775_36856[(2)] = null);

(statearr_36775_36856[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36765 === (39))){
var state_36764__$1 = state_36764;
var statearr_36779_36857 = state_36764__$1;
(statearr_36779_36857[(2)] = null);

(statearr_36779_36857[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36765 === (4))){
var inst_36632 = (state_36764[(9)]);
var inst_36632__$1 = (state_36764[(2)]);
var inst_36633 = (inst_36632__$1 == null);
var state_36764__$1 = (function (){var statearr_36780 = state_36764;
(statearr_36780[(9)] = inst_36632__$1);

return statearr_36780;
})();
if(cljs.core.truth_(inst_36633)){
var statearr_36781_36858 = state_36764__$1;
(statearr_36781_36858[(1)] = (5));

} else {
var statearr_36782_36859 = state_36764__$1;
(statearr_36782_36859[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36765 === (15))){
var inst_36643 = (state_36764[(13)]);
var inst_36642 = (state_36764[(14)]);
var inst_36644 = (state_36764[(15)]);
var inst_36641 = (state_36764[(17)]);
var inst_36659 = (state_36764[(2)]);
var inst_36660 = (inst_36644 + (1));
var tmp36776 = inst_36643;
var tmp36777 = inst_36642;
var tmp36778 = inst_36641;
var inst_36641__$1 = tmp36778;
var inst_36642__$1 = tmp36777;
var inst_36643__$1 = tmp36776;
var inst_36644__$1 = inst_36660;
var state_36764__$1 = (function (){var statearr_36783 = state_36764;
(statearr_36783[(13)] = inst_36643__$1);

(statearr_36783[(14)] = inst_36642__$1);

(statearr_36783[(15)] = inst_36644__$1);

(statearr_36783[(18)] = inst_36659);

(statearr_36783[(17)] = inst_36641__$1);

return statearr_36783;
})();
var statearr_36784_36860 = state_36764__$1;
(statearr_36784_36860[(2)] = null);

(statearr_36784_36860[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36765 === (21))){
var inst_36686 = (state_36764[(2)]);
var state_36764__$1 = state_36764;
var statearr_36788_36861 = state_36764__$1;
(statearr_36788_36861[(2)] = inst_36686);

(statearr_36788_36861[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36765 === (31))){
var inst_36712 = (state_36764[(12)]);
var inst_36716 = done.call(null,null);
var inst_36717 = cljs.core.async.untap_STAR_.call(null,m,inst_36712);
var state_36764__$1 = (function (){var statearr_36789 = state_36764;
(statearr_36789[(19)] = inst_36716);

return statearr_36789;
})();
var statearr_36790_36862 = state_36764__$1;
(statearr_36790_36862[(2)] = inst_36717);

(statearr_36790_36862[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36765 === (32))){
var inst_36705 = (state_36764[(10)]);
var inst_36704 = (state_36764[(20)]);
var inst_36707 = (state_36764[(11)]);
var inst_36706 = (state_36764[(21)]);
var inst_36719 = (state_36764[(2)]);
var inst_36720 = (inst_36707 + (1));
var tmp36785 = inst_36705;
var tmp36786 = inst_36704;
var tmp36787 = inst_36706;
var inst_36704__$1 = tmp36786;
var inst_36705__$1 = tmp36785;
var inst_36706__$1 = tmp36787;
var inst_36707__$1 = inst_36720;
var state_36764__$1 = (function (){var statearr_36791 = state_36764;
(statearr_36791[(10)] = inst_36705__$1);

(statearr_36791[(20)] = inst_36704__$1);

(statearr_36791[(11)] = inst_36707__$1);

(statearr_36791[(21)] = inst_36706__$1);

(statearr_36791[(22)] = inst_36719);

return statearr_36791;
})();
var statearr_36792_36863 = state_36764__$1;
(statearr_36792_36863[(2)] = null);

(statearr_36792_36863[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36765 === (40))){
var inst_36732 = (state_36764[(23)]);
var inst_36736 = done.call(null,null);
var inst_36737 = cljs.core.async.untap_STAR_.call(null,m,inst_36732);
var state_36764__$1 = (function (){var statearr_36793 = state_36764;
(statearr_36793[(24)] = inst_36736);

return statearr_36793;
})();
var statearr_36794_36864 = state_36764__$1;
(statearr_36794_36864[(2)] = inst_36737);

(statearr_36794_36864[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36765 === (33))){
var inst_36723 = (state_36764[(25)]);
var inst_36725 = cljs.core.chunked_seq_QMARK_.call(null,inst_36723);
var state_36764__$1 = state_36764;
if(inst_36725){
var statearr_36795_36865 = state_36764__$1;
(statearr_36795_36865[(1)] = (36));

} else {
var statearr_36796_36866 = state_36764__$1;
(statearr_36796_36866[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36765 === (13))){
var inst_36653 = (state_36764[(26)]);
var inst_36656 = cljs.core.async.close_BANG_.call(null,inst_36653);
var state_36764__$1 = state_36764;
var statearr_36797_36867 = state_36764__$1;
(statearr_36797_36867[(2)] = inst_36656);

(statearr_36797_36867[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36765 === (22))){
var inst_36676 = (state_36764[(8)]);
var inst_36679 = cljs.core.async.close_BANG_.call(null,inst_36676);
var state_36764__$1 = state_36764;
var statearr_36798_36868 = state_36764__$1;
(statearr_36798_36868[(2)] = inst_36679);

(statearr_36798_36868[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36765 === (36))){
var inst_36723 = (state_36764[(25)]);
var inst_36727 = cljs.core.chunk_first.call(null,inst_36723);
var inst_36728 = cljs.core.chunk_rest.call(null,inst_36723);
var inst_36729 = cljs.core.count.call(null,inst_36727);
var inst_36704 = inst_36728;
var inst_36705 = inst_36727;
var inst_36706 = inst_36729;
var inst_36707 = (0);
var state_36764__$1 = (function (){var statearr_36799 = state_36764;
(statearr_36799[(10)] = inst_36705);

(statearr_36799[(20)] = inst_36704);

(statearr_36799[(11)] = inst_36707);

(statearr_36799[(21)] = inst_36706);

return statearr_36799;
})();
var statearr_36800_36869 = state_36764__$1;
(statearr_36800_36869[(2)] = null);

(statearr_36800_36869[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36765 === (41))){
var inst_36723 = (state_36764[(25)]);
var inst_36739 = (state_36764[(2)]);
var inst_36740 = cljs.core.next.call(null,inst_36723);
var inst_36704 = inst_36740;
var inst_36705 = null;
var inst_36706 = (0);
var inst_36707 = (0);
var state_36764__$1 = (function (){var statearr_36801 = state_36764;
(statearr_36801[(10)] = inst_36705);

(statearr_36801[(20)] = inst_36704);

(statearr_36801[(11)] = inst_36707);

(statearr_36801[(21)] = inst_36706);

(statearr_36801[(27)] = inst_36739);

return statearr_36801;
})();
var statearr_36802_36870 = state_36764__$1;
(statearr_36802_36870[(2)] = null);

(statearr_36802_36870[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36765 === (43))){
var state_36764__$1 = state_36764;
var statearr_36803_36871 = state_36764__$1;
(statearr_36803_36871[(2)] = null);

(statearr_36803_36871[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36765 === (29))){
var inst_36748 = (state_36764[(2)]);
var state_36764__$1 = state_36764;
var statearr_36804_36872 = state_36764__$1;
(statearr_36804_36872[(2)] = inst_36748);

(statearr_36804_36872[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36765 === (44))){
var inst_36757 = (state_36764[(2)]);
var state_36764__$1 = (function (){var statearr_36805 = state_36764;
(statearr_36805[(28)] = inst_36757);

return statearr_36805;
})();
var statearr_36806_36873 = state_36764__$1;
(statearr_36806_36873[(2)] = null);

(statearr_36806_36873[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36765 === (6))){
var inst_36696 = (state_36764[(29)]);
var inst_36695 = cljs.core.deref.call(null,cs);
var inst_36696__$1 = cljs.core.keys.call(null,inst_36695);
var inst_36697 = cljs.core.count.call(null,inst_36696__$1);
var inst_36698 = cljs.core.reset_BANG_.call(null,dctr,inst_36697);
var inst_36703 = cljs.core.seq.call(null,inst_36696__$1);
var inst_36704 = inst_36703;
var inst_36705 = null;
var inst_36706 = (0);
var inst_36707 = (0);
var state_36764__$1 = (function (){var statearr_36807 = state_36764;
(statearr_36807[(30)] = inst_36698);

(statearr_36807[(10)] = inst_36705);

(statearr_36807[(20)] = inst_36704);

(statearr_36807[(11)] = inst_36707);

(statearr_36807[(21)] = inst_36706);

(statearr_36807[(29)] = inst_36696__$1);

return statearr_36807;
})();
var statearr_36808_36874 = state_36764__$1;
(statearr_36808_36874[(2)] = null);

(statearr_36808_36874[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36765 === (28))){
var inst_36704 = (state_36764[(20)]);
var inst_36723 = (state_36764[(25)]);
var inst_36723__$1 = cljs.core.seq.call(null,inst_36704);
var state_36764__$1 = (function (){var statearr_36809 = state_36764;
(statearr_36809[(25)] = inst_36723__$1);

return statearr_36809;
})();
if(inst_36723__$1){
var statearr_36810_36875 = state_36764__$1;
(statearr_36810_36875[(1)] = (33));

} else {
var statearr_36811_36876 = state_36764__$1;
(statearr_36811_36876[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36765 === (25))){
var inst_36707 = (state_36764[(11)]);
var inst_36706 = (state_36764[(21)]);
var inst_36709 = (inst_36707 < inst_36706);
var inst_36710 = inst_36709;
var state_36764__$1 = state_36764;
if(cljs.core.truth_(inst_36710)){
var statearr_36812_36877 = state_36764__$1;
(statearr_36812_36877[(1)] = (27));

} else {
var statearr_36813_36878 = state_36764__$1;
(statearr_36813_36878[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36765 === (34))){
var state_36764__$1 = state_36764;
var statearr_36814_36879 = state_36764__$1;
(statearr_36814_36879[(2)] = null);

(statearr_36814_36879[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36765 === (17))){
var state_36764__$1 = state_36764;
var statearr_36815_36880 = state_36764__$1;
(statearr_36815_36880[(2)] = null);

(statearr_36815_36880[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36765 === (3))){
var inst_36762 = (state_36764[(2)]);
var state_36764__$1 = state_36764;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36764__$1,inst_36762);
} else {
if((state_val_36765 === (12))){
var inst_36691 = (state_36764[(2)]);
var state_36764__$1 = state_36764;
var statearr_36816_36881 = state_36764__$1;
(statearr_36816_36881[(2)] = inst_36691);

(statearr_36816_36881[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36765 === (2))){
var state_36764__$1 = state_36764;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36764__$1,(4),ch);
} else {
if((state_val_36765 === (23))){
var state_36764__$1 = state_36764;
var statearr_36817_36882 = state_36764__$1;
(statearr_36817_36882[(2)] = null);

(statearr_36817_36882[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36765 === (35))){
var inst_36746 = (state_36764[(2)]);
var state_36764__$1 = state_36764;
var statearr_36818_36883 = state_36764__$1;
(statearr_36818_36883[(2)] = inst_36746);

(statearr_36818_36883[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36765 === (19))){
var inst_36663 = (state_36764[(7)]);
var inst_36667 = cljs.core.chunk_first.call(null,inst_36663);
var inst_36668 = cljs.core.chunk_rest.call(null,inst_36663);
var inst_36669 = cljs.core.count.call(null,inst_36667);
var inst_36641 = inst_36668;
var inst_36642 = inst_36667;
var inst_36643 = inst_36669;
var inst_36644 = (0);
var state_36764__$1 = (function (){var statearr_36819 = state_36764;
(statearr_36819[(13)] = inst_36643);

(statearr_36819[(14)] = inst_36642);

(statearr_36819[(15)] = inst_36644);

(statearr_36819[(17)] = inst_36641);

return statearr_36819;
})();
var statearr_36820_36884 = state_36764__$1;
(statearr_36820_36884[(2)] = null);

(statearr_36820_36884[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36765 === (11))){
var inst_36663 = (state_36764[(7)]);
var inst_36641 = (state_36764[(17)]);
var inst_36663__$1 = cljs.core.seq.call(null,inst_36641);
var state_36764__$1 = (function (){var statearr_36821 = state_36764;
(statearr_36821[(7)] = inst_36663__$1);

return statearr_36821;
})();
if(inst_36663__$1){
var statearr_36822_36885 = state_36764__$1;
(statearr_36822_36885[(1)] = (16));

} else {
var statearr_36823_36886 = state_36764__$1;
(statearr_36823_36886[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36765 === (9))){
var inst_36693 = (state_36764[(2)]);
var state_36764__$1 = state_36764;
var statearr_36824_36887 = state_36764__$1;
(statearr_36824_36887[(2)] = inst_36693);

(statearr_36824_36887[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36765 === (5))){
var inst_36639 = cljs.core.deref.call(null,cs);
var inst_36640 = cljs.core.seq.call(null,inst_36639);
var inst_36641 = inst_36640;
var inst_36642 = null;
var inst_36643 = (0);
var inst_36644 = (0);
var state_36764__$1 = (function (){var statearr_36825 = state_36764;
(statearr_36825[(13)] = inst_36643);

(statearr_36825[(14)] = inst_36642);

(statearr_36825[(15)] = inst_36644);

(statearr_36825[(17)] = inst_36641);

return statearr_36825;
})();
var statearr_36826_36888 = state_36764__$1;
(statearr_36826_36888[(2)] = null);

(statearr_36826_36888[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36765 === (14))){
var state_36764__$1 = state_36764;
var statearr_36827_36889 = state_36764__$1;
(statearr_36827_36889[(2)] = null);

(statearr_36827_36889[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36765 === (45))){
var inst_36754 = (state_36764[(2)]);
var state_36764__$1 = state_36764;
var statearr_36828_36890 = state_36764__$1;
(statearr_36828_36890[(2)] = inst_36754);

(statearr_36828_36890[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36765 === (26))){
var inst_36696 = (state_36764[(29)]);
var inst_36750 = (state_36764[(2)]);
var inst_36751 = cljs.core.seq.call(null,inst_36696);
var state_36764__$1 = (function (){var statearr_36829 = state_36764;
(statearr_36829[(31)] = inst_36750);

return statearr_36829;
})();
if(inst_36751){
var statearr_36830_36891 = state_36764__$1;
(statearr_36830_36891[(1)] = (42));

} else {
var statearr_36831_36892 = state_36764__$1;
(statearr_36831_36892[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36765 === (16))){
var inst_36663 = (state_36764[(7)]);
var inst_36665 = cljs.core.chunked_seq_QMARK_.call(null,inst_36663);
var state_36764__$1 = state_36764;
if(inst_36665){
var statearr_36832_36893 = state_36764__$1;
(statearr_36832_36893[(1)] = (19));

} else {
var statearr_36833_36894 = state_36764__$1;
(statearr_36833_36894[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36765 === (38))){
var inst_36743 = (state_36764[(2)]);
var state_36764__$1 = state_36764;
var statearr_36834_36895 = state_36764__$1;
(statearr_36834_36895[(2)] = inst_36743);

(statearr_36834_36895[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36765 === (30))){
var state_36764__$1 = state_36764;
var statearr_36835_36896 = state_36764__$1;
(statearr_36835_36896[(2)] = null);

(statearr_36835_36896[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36765 === (10))){
var inst_36642 = (state_36764[(14)]);
var inst_36644 = (state_36764[(15)]);
var inst_36652 = cljs.core._nth.call(null,inst_36642,inst_36644);
var inst_36653 = cljs.core.nth.call(null,inst_36652,(0),null);
var inst_36654 = cljs.core.nth.call(null,inst_36652,(1),null);
var state_36764__$1 = (function (){var statearr_36836 = state_36764;
(statearr_36836[(26)] = inst_36653);

return statearr_36836;
})();
if(cljs.core.truth_(inst_36654)){
var statearr_36837_36897 = state_36764__$1;
(statearr_36837_36897[(1)] = (13));

} else {
var statearr_36838_36898 = state_36764__$1;
(statearr_36838_36898[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36765 === (18))){
var inst_36689 = (state_36764[(2)]);
var state_36764__$1 = state_36764;
var statearr_36839_36899 = state_36764__$1;
(statearr_36839_36899[(2)] = inst_36689);

(statearr_36839_36899[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36765 === (42))){
var state_36764__$1 = state_36764;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36764__$1,(45),dchan);
} else {
if((state_val_36765 === (37))){
var inst_36632 = (state_36764[(9)]);
var inst_36732 = (state_36764[(23)]);
var inst_36723 = (state_36764[(25)]);
var inst_36732__$1 = cljs.core.first.call(null,inst_36723);
var inst_36733 = cljs.core.async.put_BANG_.call(null,inst_36732__$1,inst_36632,done);
var state_36764__$1 = (function (){var statearr_36840 = state_36764;
(statearr_36840[(23)] = inst_36732__$1);

return statearr_36840;
})();
if(cljs.core.truth_(inst_36733)){
var statearr_36841_36900 = state_36764__$1;
(statearr_36841_36900[(1)] = (39));

} else {
var statearr_36842_36901 = state_36764__$1;
(statearr_36842_36901[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36765 === (8))){
var inst_36643 = (state_36764[(13)]);
var inst_36644 = (state_36764[(15)]);
var inst_36646 = (inst_36644 < inst_36643);
var inst_36647 = inst_36646;
var state_36764__$1 = state_36764;
if(cljs.core.truth_(inst_36647)){
var statearr_36843_36902 = state_36764__$1;
(statearr_36843_36902[(1)] = (10));

} else {
var statearr_36844_36903 = state_36764__$1;
(statearr_36844_36903[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__35933__auto__ = null;
var cljs$core$async$mult_$_state_machine__35933__auto____0 = (function (){
var statearr_36845 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36845[(0)] = cljs$core$async$mult_$_state_machine__35933__auto__);

(statearr_36845[(1)] = (1));

return statearr_36845;
});
var cljs$core$async$mult_$_state_machine__35933__auto____1 = (function (state_36764){
while(true){
var ret_value__35934__auto__ = (function (){try{while(true){
var result__35935__auto__ = switch__35932__auto__.call(null,state_36764);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35935__auto__;
}
break;
}
}catch (e36846){if((e36846 instanceof Object)){
var ex__35936__auto__ = e36846;
var statearr_36847_36904 = state_36764;
(statearr_36847_36904[(5)] = ex__35936__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36764);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36846;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36905 = state_36764;
state_36764 = G__36905;
continue;
} else {
return ret_value__35934__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__35933__auto__ = function(state_36764){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__35933__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__35933__auto____1.call(this,state_36764);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__35933__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__35933__auto____0;
cljs$core$async$mult_$_state_machine__35933__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__35933__auto____1;
return cljs$core$async$mult_$_state_machine__35933__auto__;
})()
})();
var state__36029__auto__ = (function (){var statearr_36848 = f__36028__auto__.call(null);
(statearr_36848[(6)] = c__36027__auto___36849);

return statearr_36848;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36029__auto__);
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
var G__36907 = arguments.length;
switch (G__36907) {
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
return cljs.core.async.tap.call(null,mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_36909 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,ch);
} else {
var m__4426__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_36909.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_36910 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,ch);
} else {
var m__4426__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_36910.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_36911 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m);
} else {
var m__4426__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_36911.call(null,m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_36912 = (function (m,state_map){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,state_map);
} else {
var m__4426__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_36912.call(null,m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_36913 = (function (m,mode){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,mode);
} else {
var m__4426__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_36913.call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___36924 = arguments.length;
var i__4737__auto___36925 = (0);
while(true){
if((i__4737__auto___36925 < len__4736__auto___36924)){
args__4742__auto__.push((arguments[i__4737__auto___36925]));

var G__36926 = (i__4737__auto___36925 + (1));
i__4737__auto___36925 = G__36926;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__36918){
var map__36919 = p__36918;
var map__36919__$1 = (((((!((map__36919 == null))))?(((((map__36919.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36919.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36919):map__36919);
var opts = map__36919__$1;
var statearr_36921_36927 = state;
(statearr_36921_36927[(1)] = cont_block);


var temp__5720__auto__ = cljs.core.async.do_alts.call(null,(function (val){
var statearr_36922_36928 = state;
(statearr_36922_36928[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
}),ports,opts);
if(cljs.core.truth_(temp__5720__auto__)){
var cb = temp__5720__auto__;
var statearr_36923_36929 = state;
(statearr_36923_36929[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq36914){
var G__36915 = cljs.core.first.call(null,seq36914);
var seq36914__$1 = cljs.core.next.call(null,seq36914);
var G__36916 = cljs.core.first.call(null,seq36914__$1);
var seq36914__$2 = cljs.core.next.call(null,seq36914__$1);
var G__36917 = cljs.core.first.call(null,seq36914__$2);
var seq36914__$3 = cljs.core.next.call(null,seq36914__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36915,G__36916,G__36917,seq36914__$3);
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
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv.call(null,(function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_.call(null,solos))))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36930 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36930 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta36931){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta36931 = meta36931;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36930.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36932,meta36931__$1){
var self__ = this;
var _36932__$1 = this;
return (new cljs.core.async.t_cljs$core$async36930(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta36931__$1));
}));

(cljs.core.async.t_cljs$core$async36930.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36932){
var self__ = this;
var _36932__$1 = this;
return self__.meta36931;
}));

(cljs.core.async.t_cljs$core$async36930.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36930.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async36930.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36930.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async36930.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async36930.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async36930.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async36930.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async36930.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta36931","meta36931",1222728533,null)], null);
}));

(cljs.core.async.t_cljs$core$async36930.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36930.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36930");

(cljs.core.async.t_cljs$core$async36930.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async36930");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36930.
 */
cljs.core.async.__GT_t_cljs$core$async36930 = (function cljs$core$async$mix_$___GT_t_cljs$core$async36930(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta36931){
return (new cljs.core.async.t_cljs$core$async36930(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta36931));
});

}

return (new cljs.core.async.t_cljs$core$async36930(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__36027__auto___37094 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__36028__auto__ = (function (){var switch__35932__auto__ = (function (state_37034){
var state_val_37035 = (state_37034[(1)]);
if((state_val_37035 === (7))){
var inst_36949 = (state_37034[(2)]);
var state_37034__$1 = state_37034;
var statearr_37036_37095 = state_37034__$1;
(statearr_37036_37095[(2)] = inst_36949);

(statearr_37036_37095[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37035 === (20))){
var inst_36961 = (state_37034[(7)]);
var state_37034__$1 = state_37034;
var statearr_37037_37096 = state_37034__$1;
(statearr_37037_37096[(2)] = inst_36961);

(statearr_37037_37096[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37035 === (27))){
var state_37034__$1 = state_37034;
var statearr_37038_37097 = state_37034__$1;
(statearr_37038_37097[(2)] = null);

(statearr_37038_37097[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37035 === (1))){
var inst_36936 = (state_37034[(8)]);
var inst_36936__$1 = calc_state.call(null);
var inst_36938 = (inst_36936__$1 == null);
var inst_36939 = cljs.core.not.call(null,inst_36938);
var state_37034__$1 = (function (){var statearr_37039 = state_37034;
(statearr_37039[(8)] = inst_36936__$1);

return statearr_37039;
})();
if(inst_36939){
var statearr_37040_37098 = state_37034__$1;
(statearr_37040_37098[(1)] = (2));

} else {
var statearr_37041_37099 = state_37034__$1;
(statearr_37041_37099[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37035 === (24))){
var inst_36985 = (state_37034[(9)]);
var inst_37008 = (state_37034[(10)]);
var inst_36994 = (state_37034[(11)]);
var inst_37008__$1 = inst_36985.call(null,inst_36994);
var state_37034__$1 = (function (){var statearr_37042 = state_37034;
(statearr_37042[(10)] = inst_37008__$1);

return statearr_37042;
})();
if(cljs.core.truth_(inst_37008__$1)){
var statearr_37043_37100 = state_37034__$1;
(statearr_37043_37100[(1)] = (29));

} else {
var statearr_37044_37101 = state_37034__$1;
(statearr_37044_37101[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37035 === (4))){
var inst_36952 = (state_37034[(2)]);
var state_37034__$1 = state_37034;
if(cljs.core.truth_(inst_36952)){
var statearr_37045_37102 = state_37034__$1;
(statearr_37045_37102[(1)] = (8));

} else {
var statearr_37046_37103 = state_37034__$1;
(statearr_37046_37103[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37035 === (15))){
var inst_36979 = (state_37034[(2)]);
var state_37034__$1 = state_37034;
if(cljs.core.truth_(inst_36979)){
var statearr_37047_37104 = state_37034__$1;
(statearr_37047_37104[(1)] = (19));

} else {
var statearr_37048_37105 = state_37034__$1;
(statearr_37048_37105[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37035 === (21))){
var inst_36984 = (state_37034[(12)]);
var inst_36984__$1 = (state_37034[(2)]);
var inst_36985 = cljs.core.get.call(null,inst_36984__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_36986 = cljs.core.get.call(null,inst_36984__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_36987 = cljs.core.get.call(null,inst_36984__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_37034__$1 = (function (){var statearr_37049 = state_37034;
(statearr_37049[(12)] = inst_36984__$1);

(statearr_37049[(9)] = inst_36985);

(statearr_37049[(13)] = inst_36986);

return statearr_37049;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_37034__$1,(22),inst_36987);
} else {
if((state_val_37035 === (31))){
var inst_37016 = (state_37034[(2)]);
var state_37034__$1 = state_37034;
if(cljs.core.truth_(inst_37016)){
var statearr_37050_37106 = state_37034__$1;
(statearr_37050_37106[(1)] = (32));

} else {
var statearr_37051_37107 = state_37034__$1;
(statearr_37051_37107[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37035 === (32))){
var inst_36993 = (state_37034[(14)]);
var state_37034__$1 = state_37034;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37034__$1,(35),out,inst_36993);
} else {
if((state_val_37035 === (33))){
var inst_36984 = (state_37034[(12)]);
var inst_36961 = inst_36984;
var state_37034__$1 = (function (){var statearr_37052 = state_37034;
(statearr_37052[(7)] = inst_36961);

return statearr_37052;
})();
var statearr_37053_37108 = state_37034__$1;
(statearr_37053_37108[(2)] = null);

(statearr_37053_37108[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37035 === (13))){
var inst_36961 = (state_37034[(7)]);
var inst_36968 = inst_36961.cljs$lang$protocol_mask$partition0$;
var inst_36969 = (inst_36968 & (64));
var inst_36970 = inst_36961.cljs$core$ISeq$;
var inst_36971 = (cljs.core.PROTOCOL_SENTINEL === inst_36970);
var inst_36972 = ((inst_36969) || (inst_36971));
var state_37034__$1 = state_37034;
if(cljs.core.truth_(inst_36972)){
var statearr_37054_37109 = state_37034__$1;
(statearr_37054_37109[(1)] = (16));

} else {
var statearr_37055_37110 = state_37034__$1;
(statearr_37055_37110[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37035 === (22))){
var inst_36993 = (state_37034[(14)]);
var inst_36994 = (state_37034[(11)]);
var inst_36992 = (state_37034[(2)]);
var inst_36993__$1 = cljs.core.nth.call(null,inst_36992,(0),null);
var inst_36994__$1 = cljs.core.nth.call(null,inst_36992,(1),null);
var inst_36995 = (inst_36993__$1 == null);
var inst_36996 = cljs.core._EQ_.call(null,inst_36994__$1,change);
var inst_36997 = ((inst_36995) || (inst_36996));
var state_37034__$1 = (function (){var statearr_37056 = state_37034;
(statearr_37056[(14)] = inst_36993__$1);

(statearr_37056[(11)] = inst_36994__$1);

return statearr_37056;
})();
if(cljs.core.truth_(inst_36997)){
var statearr_37057_37111 = state_37034__$1;
(statearr_37057_37111[(1)] = (23));

} else {
var statearr_37058_37112 = state_37034__$1;
(statearr_37058_37112[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37035 === (36))){
var inst_36984 = (state_37034[(12)]);
var inst_36961 = inst_36984;
var state_37034__$1 = (function (){var statearr_37059 = state_37034;
(statearr_37059[(7)] = inst_36961);

return statearr_37059;
})();
var statearr_37060_37113 = state_37034__$1;
(statearr_37060_37113[(2)] = null);

(statearr_37060_37113[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37035 === (29))){
var inst_37008 = (state_37034[(10)]);
var state_37034__$1 = state_37034;
var statearr_37061_37114 = state_37034__$1;
(statearr_37061_37114[(2)] = inst_37008);

(statearr_37061_37114[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37035 === (6))){
var state_37034__$1 = state_37034;
var statearr_37062_37115 = state_37034__$1;
(statearr_37062_37115[(2)] = false);

(statearr_37062_37115[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37035 === (28))){
var inst_37004 = (state_37034[(2)]);
var inst_37005 = calc_state.call(null);
var inst_36961 = inst_37005;
var state_37034__$1 = (function (){var statearr_37063 = state_37034;
(statearr_37063[(7)] = inst_36961);

(statearr_37063[(15)] = inst_37004);

return statearr_37063;
})();
var statearr_37064_37116 = state_37034__$1;
(statearr_37064_37116[(2)] = null);

(statearr_37064_37116[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37035 === (25))){
var inst_37030 = (state_37034[(2)]);
var state_37034__$1 = state_37034;
var statearr_37065_37117 = state_37034__$1;
(statearr_37065_37117[(2)] = inst_37030);

(statearr_37065_37117[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37035 === (34))){
var inst_37028 = (state_37034[(2)]);
var state_37034__$1 = state_37034;
var statearr_37066_37118 = state_37034__$1;
(statearr_37066_37118[(2)] = inst_37028);

(statearr_37066_37118[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37035 === (17))){
var state_37034__$1 = state_37034;
var statearr_37067_37119 = state_37034__$1;
(statearr_37067_37119[(2)] = false);

(statearr_37067_37119[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37035 === (3))){
var state_37034__$1 = state_37034;
var statearr_37068_37120 = state_37034__$1;
(statearr_37068_37120[(2)] = false);

(statearr_37068_37120[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37035 === (12))){
var inst_37032 = (state_37034[(2)]);
var state_37034__$1 = state_37034;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37034__$1,inst_37032);
} else {
if((state_val_37035 === (2))){
var inst_36936 = (state_37034[(8)]);
var inst_36941 = inst_36936.cljs$lang$protocol_mask$partition0$;
var inst_36942 = (inst_36941 & (64));
var inst_36943 = inst_36936.cljs$core$ISeq$;
var inst_36944 = (cljs.core.PROTOCOL_SENTINEL === inst_36943);
var inst_36945 = ((inst_36942) || (inst_36944));
var state_37034__$1 = state_37034;
if(cljs.core.truth_(inst_36945)){
var statearr_37069_37121 = state_37034__$1;
(statearr_37069_37121[(1)] = (5));

} else {
var statearr_37070_37122 = state_37034__$1;
(statearr_37070_37122[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37035 === (23))){
var inst_36993 = (state_37034[(14)]);
var inst_36999 = (inst_36993 == null);
var state_37034__$1 = state_37034;
if(cljs.core.truth_(inst_36999)){
var statearr_37071_37123 = state_37034__$1;
(statearr_37071_37123[(1)] = (26));

} else {
var statearr_37072_37124 = state_37034__$1;
(statearr_37072_37124[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37035 === (35))){
var inst_37019 = (state_37034[(2)]);
var state_37034__$1 = state_37034;
if(cljs.core.truth_(inst_37019)){
var statearr_37073_37125 = state_37034__$1;
(statearr_37073_37125[(1)] = (36));

} else {
var statearr_37074_37126 = state_37034__$1;
(statearr_37074_37126[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37035 === (19))){
var inst_36961 = (state_37034[(7)]);
var inst_36981 = cljs.core.apply.call(null,cljs.core.hash_map,inst_36961);
var state_37034__$1 = state_37034;
var statearr_37075_37127 = state_37034__$1;
(statearr_37075_37127[(2)] = inst_36981);

(statearr_37075_37127[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37035 === (11))){
var inst_36961 = (state_37034[(7)]);
var inst_36965 = (inst_36961 == null);
var inst_36966 = cljs.core.not.call(null,inst_36965);
var state_37034__$1 = state_37034;
if(inst_36966){
var statearr_37076_37128 = state_37034__$1;
(statearr_37076_37128[(1)] = (13));

} else {
var statearr_37077_37129 = state_37034__$1;
(statearr_37077_37129[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37035 === (9))){
var inst_36936 = (state_37034[(8)]);
var state_37034__$1 = state_37034;
var statearr_37078_37130 = state_37034__$1;
(statearr_37078_37130[(2)] = inst_36936);

(statearr_37078_37130[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37035 === (5))){
var state_37034__$1 = state_37034;
var statearr_37079_37131 = state_37034__$1;
(statearr_37079_37131[(2)] = true);

(statearr_37079_37131[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37035 === (14))){
var state_37034__$1 = state_37034;
var statearr_37080_37132 = state_37034__$1;
(statearr_37080_37132[(2)] = false);

(statearr_37080_37132[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37035 === (26))){
var inst_36994 = (state_37034[(11)]);
var inst_37001 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_36994);
var state_37034__$1 = state_37034;
var statearr_37081_37133 = state_37034__$1;
(statearr_37081_37133[(2)] = inst_37001);

(statearr_37081_37133[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37035 === (16))){
var state_37034__$1 = state_37034;
var statearr_37082_37134 = state_37034__$1;
(statearr_37082_37134[(2)] = true);

(statearr_37082_37134[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37035 === (38))){
var inst_37024 = (state_37034[(2)]);
var state_37034__$1 = state_37034;
var statearr_37083_37135 = state_37034__$1;
(statearr_37083_37135[(2)] = inst_37024);

(statearr_37083_37135[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37035 === (30))){
var inst_36985 = (state_37034[(9)]);
var inst_36986 = (state_37034[(13)]);
var inst_36994 = (state_37034[(11)]);
var inst_37011 = cljs.core.empty_QMARK_.call(null,inst_36985);
var inst_37012 = inst_36986.call(null,inst_36994);
var inst_37013 = cljs.core.not.call(null,inst_37012);
var inst_37014 = ((inst_37011) && (inst_37013));
var state_37034__$1 = state_37034;
var statearr_37084_37136 = state_37034__$1;
(statearr_37084_37136[(2)] = inst_37014);

(statearr_37084_37136[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37035 === (10))){
var inst_36936 = (state_37034[(8)]);
var inst_36957 = (state_37034[(2)]);
var inst_36958 = cljs.core.get.call(null,inst_36957,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_36959 = cljs.core.get.call(null,inst_36957,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_36960 = cljs.core.get.call(null,inst_36957,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_36961 = inst_36936;
var state_37034__$1 = (function (){var statearr_37085 = state_37034;
(statearr_37085[(16)] = inst_36959);

(statearr_37085[(7)] = inst_36961);

(statearr_37085[(17)] = inst_36958);

(statearr_37085[(18)] = inst_36960);

return statearr_37085;
})();
var statearr_37086_37137 = state_37034__$1;
(statearr_37086_37137[(2)] = null);

(statearr_37086_37137[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37035 === (18))){
var inst_36976 = (state_37034[(2)]);
var state_37034__$1 = state_37034;
var statearr_37087_37138 = state_37034__$1;
(statearr_37087_37138[(2)] = inst_36976);

(statearr_37087_37138[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37035 === (37))){
var state_37034__$1 = state_37034;
var statearr_37088_37139 = state_37034__$1;
(statearr_37088_37139[(2)] = null);

(statearr_37088_37139[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37035 === (8))){
var inst_36936 = (state_37034[(8)]);
var inst_36954 = cljs.core.apply.call(null,cljs.core.hash_map,inst_36936);
var state_37034__$1 = state_37034;
var statearr_37089_37140 = state_37034__$1;
(statearr_37089_37140[(2)] = inst_36954);

(statearr_37089_37140[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__35933__auto__ = null;
var cljs$core$async$mix_$_state_machine__35933__auto____0 = (function (){
var statearr_37090 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37090[(0)] = cljs$core$async$mix_$_state_machine__35933__auto__);

(statearr_37090[(1)] = (1));

return statearr_37090;
});
var cljs$core$async$mix_$_state_machine__35933__auto____1 = (function (state_37034){
while(true){
var ret_value__35934__auto__ = (function (){try{while(true){
var result__35935__auto__ = switch__35932__auto__.call(null,state_37034);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35935__auto__;
}
break;
}
}catch (e37091){if((e37091 instanceof Object)){
var ex__35936__auto__ = e37091;
var statearr_37092_37141 = state_37034;
(statearr_37092_37141[(5)] = ex__35936__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37034);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37091;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37142 = state_37034;
state_37034 = G__37142;
continue;
} else {
return ret_value__35934__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__35933__auto__ = function(state_37034){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__35933__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__35933__auto____1.call(this,state_37034);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__35933__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__35933__auto____0;
cljs$core$async$mix_$_state_machine__35933__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__35933__auto____1;
return cljs$core$async$mix_$_state_machine__35933__auto__;
})()
})();
var state__36029__auto__ = (function (){var statearr_37093 = f__36028__auto__.call(null);
(statearr_37093[(6)] = c__36027__auto___37094);

return statearr_37093;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36029__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
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
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_37145 = (function (p,v,ch,close_QMARK_){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4426__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_37145.call(null,p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_37146 = (function (p,v,ch){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,p,v,ch);
} else {
var m__4426__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_37146.call(null,p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_37147 = (function() {
var G__37148 = null;
var G__37148__1 = (function (p){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,p);
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
});
var G__37148__2 = (function (p,v){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,p,v);
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
});
G__37148 = function(p,v){
switch(arguments.length){
case 1:
return G__37148__1.call(this,p);
case 2:
return G__37148__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__37148.cljs$core$IFn$_invoke$arity$1 = G__37148__1;
G__37148.cljs$core$IFn$_invoke$arity$2 = G__37148__2;
return G__37148;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__37144 = arguments.length;
switch (G__37144) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_37147.call(null,p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_37147.call(null,p,v);
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
var G__37152 = arguments.length;
switch (G__37152) {
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
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,(function (p1__37150_SHARP_){
if(cljs.core.truth_(p1__37150_SHARP_.call(null,topic))){
return p1__37150_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__37150_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37153 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37153 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta37154){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta37154 = meta37154;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37153.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37155,meta37154__$1){
var self__ = this;
var _37155__$1 = this;
return (new cljs.core.async.t_cljs$core$async37153(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta37154__$1));
}));

(cljs.core.async.t_cljs$core$async37153.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37155){
var self__ = this;
var _37155__$1 = this;
return self__.meta37154;
}));

(cljs.core.async.t_cljs$core$async37153.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37153.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async37153.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37153.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async37153.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5720__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5720__auto__)){
var m = temp__5720__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async37153.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async37153.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async37153.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta37154","meta37154",-1985602639,null)], null);
}));

(cljs.core.async.t_cljs$core$async37153.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37153.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37153");

(cljs.core.async.t_cljs$core$async37153.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async37153");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37153.
 */
cljs.core.async.__GT_t_cljs$core$async37153 = (function cljs$core$async$__GT_t_cljs$core$async37153(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta37154){
return (new cljs.core.async.t_cljs$core$async37153(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta37154));
});

}

return (new cljs.core.async.t_cljs$core$async37153(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__36027__auto___37273 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__36028__auto__ = (function (){var switch__35932__auto__ = (function (state_37227){
var state_val_37228 = (state_37227[(1)]);
if((state_val_37228 === (7))){
var inst_37223 = (state_37227[(2)]);
var state_37227__$1 = state_37227;
var statearr_37229_37274 = state_37227__$1;
(statearr_37229_37274[(2)] = inst_37223);

(statearr_37229_37274[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37228 === (20))){
var state_37227__$1 = state_37227;
var statearr_37230_37275 = state_37227__$1;
(statearr_37230_37275[(2)] = null);

(statearr_37230_37275[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37228 === (1))){
var state_37227__$1 = state_37227;
var statearr_37231_37276 = state_37227__$1;
(statearr_37231_37276[(2)] = null);

(statearr_37231_37276[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37228 === (24))){
var inst_37206 = (state_37227[(7)]);
var inst_37215 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_37206);
var state_37227__$1 = state_37227;
var statearr_37232_37277 = state_37227__$1;
(statearr_37232_37277[(2)] = inst_37215);

(statearr_37232_37277[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37228 === (4))){
var inst_37158 = (state_37227[(8)]);
var inst_37158__$1 = (state_37227[(2)]);
var inst_37159 = (inst_37158__$1 == null);
var state_37227__$1 = (function (){var statearr_37233 = state_37227;
(statearr_37233[(8)] = inst_37158__$1);

return statearr_37233;
})();
if(cljs.core.truth_(inst_37159)){
var statearr_37234_37278 = state_37227__$1;
(statearr_37234_37278[(1)] = (5));

} else {
var statearr_37235_37279 = state_37227__$1;
(statearr_37235_37279[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37228 === (15))){
var inst_37200 = (state_37227[(2)]);
var state_37227__$1 = state_37227;
var statearr_37236_37280 = state_37227__$1;
(statearr_37236_37280[(2)] = inst_37200);

(statearr_37236_37280[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37228 === (21))){
var inst_37220 = (state_37227[(2)]);
var state_37227__$1 = (function (){var statearr_37237 = state_37227;
(statearr_37237[(9)] = inst_37220);

return statearr_37237;
})();
var statearr_37238_37281 = state_37227__$1;
(statearr_37238_37281[(2)] = null);

(statearr_37238_37281[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37228 === (13))){
var inst_37182 = (state_37227[(10)]);
var inst_37184 = cljs.core.chunked_seq_QMARK_.call(null,inst_37182);
var state_37227__$1 = state_37227;
if(inst_37184){
var statearr_37239_37282 = state_37227__$1;
(statearr_37239_37282[(1)] = (16));

} else {
var statearr_37240_37283 = state_37227__$1;
(statearr_37240_37283[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37228 === (22))){
var inst_37212 = (state_37227[(2)]);
var state_37227__$1 = state_37227;
if(cljs.core.truth_(inst_37212)){
var statearr_37241_37284 = state_37227__$1;
(statearr_37241_37284[(1)] = (23));

} else {
var statearr_37242_37285 = state_37227__$1;
(statearr_37242_37285[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37228 === (6))){
var inst_37206 = (state_37227[(7)]);
var inst_37208 = (state_37227[(11)]);
var inst_37158 = (state_37227[(8)]);
var inst_37206__$1 = topic_fn.call(null,inst_37158);
var inst_37207 = cljs.core.deref.call(null,mults);
var inst_37208__$1 = cljs.core.get.call(null,inst_37207,inst_37206__$1);
var state_37227__$1 = (function (){var statearr_37243 = state_37227;
(statearr_37243[(7)] = inst_37206__$1);

(statearr_37243[(11)] = inst_37208__$1);

return statearr_37243;
})();
if(cljs.core.truth_(inst_37208__$1)){
var statearr_37244_37286 = state_37227__$1;
(statearr_37244_37286[(1)] = (19));

} else {
var statearr_37245_37287 = state_37227__$1;
(statearr_37245_37287[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37228 === (25))){
var inst_37217 = (state_37227[(2)]);
var state_37227__$1 = state_37227;
var statearr_37246_37288 = state_37227__$1;
(statearr_37246_37288[(2)] = inst_37217);

(statearr_37246_37288[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37228 === (17))){
var inst_37182 = (state_37227[(10)]);
var inst_37191 = cljs.core.first.call(null,inst_37182);
var inst_37192 = cljs.core.async.muxch_STAR_.call(null,inst_37191);
var inst_37193 = cljs.core.async.close_BANG_.call(null,inst_37192);
var inst_37194 = cljs.core.next.call(null,inst_37182);
var inst_37168 = inst_37194;
var inst_37169 = null;
var inst_37170 = (0);
var inst_37171 = (0);
var state_37227__$1 = (function (){var statearr_37247 = state_37227;
(statearr_37247[(12)] = inst_37170);

(statearr_37247[(13)] = inst_37171);

(statearr_37247[(14)] = inst_37169);

(statearr_37247[(15)] = inst_37168);

(statearr_37247[(16)] = inst_37193);

return statearr_37247;
})();
var statearr_37248_37289 = state_37227__$1;
(statearr_37248_37289[(2)] = null);

(statearr_37248_37289[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37228 === (3))){
var inst_37225 = (state_37227[(2)]);
var state_37227__$1 = state_37227;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37227__$1,inst_37225);
} else {
if((state_val_37228 === (12))){
var inst_37202 = (state_37227[(2)]);
var state_37227__$1 = state_37227;
var statearr_37249_37290 = state_37227__$1;
(statearr_37249_37290[(2)] = inst_37202);

(statearr_37249_37290[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37228 === (2))){
var state_37227__$1 = state_37227;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37227__$1,(4),ch);
} else {
if((state_val_37228 === (23))){
var state_37227__$1 = state_37227;
var statearr_37250_37291 = state_37227__$1;
(statearr_37250_37291[(2)] = null);

(statearr_37250_37291[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37228 === (19))){
var inst_37208 = (state_37227[(11)]);
var inst_37158 = (state_37227[(8)]);
var inst_37210 = cljs.core.async.muxch_STAR_.call(null,inst_37208);
var state_37227__$1 = state_37227;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37227__$1,(22),inst_37210,inst_37158);
} else {
if((state_val_37228 === (11))){
var inst_37182 = (state_37227[(10)]);
var inst_37168 = (state_37227[(15)]);
var inst_37182__$1 = cljs.core.seq.call(null,inst_37168);
var state_37227__$1 = (function (){var statearr_37251 = state_37227;
(statearr_37251[(10)] = inst_37182__$1);

return statearr_37251;
})();
if(inst_37182__$1){
var statearr_37252_37292 = state_37227__$1;
(statearr_37252_37292[(1)] = (13));

} else {
var statearr_37253_37293 = state_37227__$1;
(statearr_37253_37293[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37228 === (9))){
var inst_37204 = (state_37227[(2)]);
var state_37227__$1 = state_37227;
var statearr_37254_37294 = state_37227__$1;
(statearr_37254_37294[(2)] = inst_37204);

(statearr_37254_37294[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37228 === (5))){
var inst_37165 = cljs.core.deref.call(null,mults);
var inst_37166 = cljs.core.vals.call(null,inst_37165);
var inst_37167 = cljs.core.seq.call(null,inst_37166);
var inst_37168 = inst_37167;
var inst_37169 = null;
var inst_37170 = (0);
var inst_37171 = (0);
var state_37227__$1 = (function (){var statearr_37255 = state_37227;
(statearr_37255[(12)] = inst_37170);

(statearr_37255[(13)] = inst_37171);

(statearr_37255[(14)] = inst_37169);

(statearr_37255[(15)] = inst_37168);

return statearr_37255;
})();
var statearr_37256_37295 = state_37227__$1;
(statearr_37256_37295[(2)] = null);

(statearr_37256_37295[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37228 === (14))){
var state_37227__$1 = state_37227;
var statearr_37260_37296 = state_37227__$1;
(statearr_37260_37296[(2)] = null);

(statearr_37260_37296[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37228 === (16))){
var inst_37182 = (state_37227[(10)]);
var inst_37186 = cljs.core.chunk_first.call(null,inst_37182);
var inst_37187 = cljs.core.chunk_rest.call(null,inst_37182);
var inst_37188 = cljs.core.count.call(null,inst_37186);
var inst_37168 = inst_37187;
var inst_37169 = inst_37186;
var inst_37170 = inst_37188;
var inst_37171 = (0);
var state_37227__$1 = (function (){var statearr_37261 = state_37227;
(statearr_37261[(12)] = inst_37170);

(statearr_37261[(13)] = inst_37171);

(statearr_37261[(14)] = inst_37169);

(statearr_37261[(15)] = inst_37168);

return statearr_37261;
})();
var statearr_37262_37297 = state_37227__$1;
(statearr_37262_37297[(2)] = null);

(statearr_37262_37297[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37228 === (10))){
var inst_37170 = (state_37227[(12)]);
var inst_37171 = (state_37227[(13)]);
var inst_37169 = (state_37227[(14)]);
var inst_37168 = (state_37227[(15)]);
var inst_37176 = cljs.core._nth.call(null,inst_37169,inst_37171);
var inst_37177 = cljs.core.async.muxch_STAR_.call(null,inst_37176);
var inst_37178 = cljs.core.async.close_BANG_.call(null,inst_37177);
var inst_37179 = (inst_37171 + (1));
var tmp37257 = inst_37170;
var tmp37258 = inst_37169;
var tmp37259 = inst_37168;
var inst_37168__$1 = tmp37259;
var inst_37169__$1 = tmp37258;
var inst_37170__$1 = tmp37257;
var inst_37171__$1 = inst_37179;
var state_37227__$1 = (function (){var statearr_37263 = state_37227;
(statearr_37263[(12)] = inst_37170__$1);

(statearr_37263[(13)] = inst_37171__$1);

(statearr_37263[(17)] = inst_37178);

(statearr_37263[(14)] = inst_37169__$1);

(statearr_37263[(15)] = inst_37168__$1);

return statearr_37263;
})();
var statearr_37264_37298 = state_37227__$1;
(statearr_37264_37298[(2)] = null);

(statearr_37264_37298[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37228 === (18))){
var inst_37197 = (state_37227[(2)]);
var state_37227__$1 = state_37227;
var statearr_37265_37299 = state_37227__$1;
(statearr_37265_37299[(2)] = inst_37197);

(statearr_37265_37299[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37228 === (8))){
var inst_37170 = (state_37227[(12)]);
var inst_37171 = (state_37227[(13)]);
var inst_37173 = (inst_37171 < inst_37170);
var inst_37174 = inst_37173;
var state_37227__$1 = state_37227;
if(cljs.core.truth_(inst_37174)){
var statearr_37266_37300 = state_37227__$1;
(statearr_37266_37300[(1)] = (10));

} else {
var statearr_37267_37301 = state_37227__$1;
(statearr_37267_37301[(1)] = (11));

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
var cljs$core$async$state_machine__35933__auto__ = null;
var cljs$core$async$state_machine__35933__auto____0 = (function (){
var statearr_37268 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37268[(0)] = cljs$core$async$state_machine__35933__auto__);

(statearr_37268[(1)] = (1));

return statearr_37268;
});
var cljs$core$async$state_machine__35933__auto____1 = (function (state_37227){
while(true){
var ret_value__35934__auto__ = (function (){try{while(true){
var result__35935__auto__ = switch__35932__auto__.call(null,state_37227);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35935__auto__;
}
break;
}
}catch (e37269){if((e37269 instanceof Object)){
var ex__35936__auto__ = e37269;
var statearr_37270_37302 = state_37227;
(statearr_37270_37302[(5)] = ex__35936__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37227);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37269;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37303 = state_37227;
state_37227 = G__37303;
continue;
} else {
return ret_value__35934__auto__;
}
break;
}
});
cljs$core$async$state_machine__35933__auto__ = function(state_37227){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35933__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35933__auto____1.call(this,state_37227);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35933__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35933__auto____0;
cljs$core$async$state_machine__35933__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35933__auto____1;
return cljs$core$async$state_machine__35933__auto__;
})()
})();
var state__36029__auto__ = (function (){var statearr_37271 = f__36028__auto__.call(null);
(statearr_37271[(6)] = c__36027__auto___37273);

return statearr_37271;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36029__auto__);
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
return cljs.core.async.sub.call(null,p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__37308 = arguments.length;
switch (G__37308) {
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
return cljs.core.async.unsub_all_STAR_.call(null,p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
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
var G__37311 = arguments.length;
switch (G__37311) {
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
return cljs.core.async.map.call(null,f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,(function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.call(null,cnt));
var c__36027__auto___37378 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__36028__auto__ = (function (){var switch__35932__auto__ = (function (state_37350){
var state_val_37351 = (state_37350[(1)]);
if((state_val_37351 === (7))){
var state_37350__$1 = state_37350;
var statearr_37352_37379 = state_37350__$1;
(statearr_37352_37379[(2)] = null);

(statearr_37352_37379[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37351 === (1))){
var state_37350__$1 = state_37350;
var statearr_37353_37380 = state_37350__$1;
(statearr_37353_37380[(2)] = null);

(statearr_37353_37380[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37351 === (4))){
var inst_37314 = (state_37350[(7)]);
var inst_37316 = (inst_37314 < cnt);
var state_37350__$1 = state_37350;
if(cljs.core.truth_(inst_37316)){
var statearr_37354_37381 = state_37350__$1;
(statearr_37354_37381[(1)] = (6));

} else {
var statearr_37355_37382 = state_37350__$1;
(statearr_37355_37382[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37351 === (15))){
var inst_37346 = (state_37350[(2)]);
var state_37350__$1 = state_37350;
var statearr_37356_37383 = state_37350__$1;
(statearr_37356_37383[(2)] = inst_37346);

(statearr_37356_37383[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37351 === (13))){
var inst_37339 = cljs.core.async.close_BANG_.call(null,out);
var state_37350__$1 = state_37350;
var statearr_37357_37384 = state_37350__$1;
(statearr_37357_37384[(2)] = inst_37339);

(statearr_37357_37384[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37351 === (6))){
var state_37350__$1 = state_37350;
var statearr_37358_37385 = state_37350__$1;
(statearr_37358_37385[(2)] = null);

(statearr_37358_37385[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37351 === (3))){
var inst_37348 = (state_37350[(2)]);
var state_37350__$1 = state_37350;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37350__$1,inst_37348);
} else {
if((state_val_37351 === (12))){
var inst_37336 = (state_37350[(8)]);
var inst_37336__$1 = (state_37350[(2)]);
var inst_37337 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_37336__$1);
var state_37350__$1 = (function (){var statearr_37359 = state_37350;
(statearr_37359[(8)] = inst_37336__$1);

return statearr_37359;
})();
if(cljs.core.truth_(inst_37337)){
var statearr_37360_37386 = state_37350__$1;
(statearr_37360_37386[(1)] = (13));

} else {
var statearr_37361_37387 = state_37350__$1;
(statearr_37361_37387[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37351 === (2))){
var inst_37313 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_37314 = (0);
var state_37350__$1 = (function (){var statearr_37362 = state_37350;
(statearr_37362[(9)] = inst_37313);

(statearr_37362[(7)] = inst_37314);

return statearr_37362;
})();
var statearr_37363_37388 = state_37350__$1;
(statearr_37363_37388[(2)] = null);

(statearr_37363_37388[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37351 === (11))){
var inst_37314 = (state_37350[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_37350,(10),Object,null,(9));
var inst_37323 = chs__$1.call(null,inst_37314);
var inst_37324 = done.call(null,inst_37314);
var inst_37325 = cljs.core.async.take_BANG_.call(null,inst_37323,inst_37324);
var state_37350__$1 = state_37350;
var statearr_37364_37389 = state_37350__$1;
(statearr_37364_37389[(2)] = inst_37325);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37350__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37351 === (9))){
var inst_37314 = (state_37350[(7)]);
var inst_37327 = (state_37350[(2)]);
var inst_37328 = (inst_37314 + (1));
var inst_37314__$1 = inst_37328;
var state_37350__$1 = (function (){var statearr_37365 = state_37350;
(statearr_37365[(10)] = inst_37327);

(statearr_37365[(7)] = inst_37314__$1);

return statearr_37365;
})();
var statearr_37366_37390 = state_37350__$1;
(statearr_37366_37390[(2)] = null);

(statearr_37366_37390[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37351 === (5))){
var inst_37334 = (state_37350[(2)]);
var state_37350__$1 = (function (){var statearr_37367 = state_37350;
(statearr_37367[(11)] = inst_37334);

return statearr_37367;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37350__$1,(12),dchan);
} else {
if((state_val_37351 === (14))){
var inst_37336 = (state_37350[(8)]);
var inst_37341 = cljs.core.apply.call(null,f,inst_37336);
var state_37350__$1 = state_37350;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37350__$1,(16),out,inst_37341);
} else {
if((state_val_37351 === (16))){
var inst_37343 = (state_37350[(2)]);
var state_37350__$1 = (function (){var statearr_37368 = state_37350;
(statearr_37368[(12)] = inst_37343);

return statearr_37368;
})();
var statearr_37369_37391 = state_37350__$1;
(statearr_37369_37391[(2)] = null);

(statearr_37369_37391[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37351 === (10))){
var inst_37318 = (state_37350[(2)]);
var inst_37319 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_37350__$1 = (function (){var statearr_37370 = state_37350;
(statearr_37370[(13)] = inst_37318);

return statearr_37370;
})();
var statearr_37371_37392 = state_37350__$1;
(statearr_37371_37392[(2)] = inst_37319);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37350__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37351 === (8))){
var inst_37332 = (state_37350[(2)]);
var state_37350__$1 = state_37350;
var statearr_37372_37393 = state_37350__$1;
(statearr_37372_37393[(2)] = inst_37332);

(statearr_37372_37393[(1)] = (5));


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
});
return (function() {
var cljs$core$async$state_machine__35933__auto__ = null;
var cljs$core$async$state_machine__35933__auto____0 = (function (){
var statearr_37373 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37373[(0)] = cljs$core$async$state_machine__35933__auto__);

(statearr_37373[(1)] = (1));

return statearr_37373;
});
var cljs$core$async$state_machine__35933__auto____1 = (function (state_37350){
while(true){
var ret_value__35934__auto__ = (function (){try{while(true){
var result__35935__auto__ = switch__35932__auto__.call(null,state_37350);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35935__auto__;
}
break;
}
}catch (e37374){if((e37374 instanceof Object)){
var ex__35936__auto__ = e37374;
var statearr_37375_37394 = state_37350;
(statearr_37375_37394[(5)] = ex__35936__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37350);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37374;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37395 = state_37350;
state_37350 = G__37395;
continue;
} else {
return ret_value__35934__auto__;
}
break;
}
});
cljs$core$async$state_machine__35933__auto__ = function(state_37350){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35933__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35933__auto____1.call(this,state_37350);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35933__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35933__auto____0;
cljs$core$async$state_machine__35933__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35933__auto____1;
return cljs$core$async$state_machine__35933__auto__;
})()
})();
var state__36029__auto__ = (function (){var statearr_37376 = f__36028__auto__.call(null);
(statearr_37376[(6)] = c__36027__auto___37378);

return statearr_37376;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36029__auto__);
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
var G__37398 = arguments.length;
switch (G__37398) {
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
return cljs.core.async.merge.call(null,chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__36027__auto___37452 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__36028__auto__ = (function (){var switch__35932__auto__ = (function (state_37430){
var state_val_37431 = (state_37430[(1)]);
if((state_val_37431 === (7))){
var inst_37409 = (state_37430[(7)]);
var inst_37410 = (state_37430[(8)]);
var inst_37409__$1 = (state_37430[(2)]);
var inst_37410__$1 = cljs.core.nth.call(null,inst_37409__$1,(0),null);
var inst_37411 = cljs.core.nth.call(null,inst_37409__$1,(1),null);
var inst_37412 = (inst_37410__$1 == null);
var state_37430__$1 = (function (){var statearr_37432 = state_37430;
(statearr_37432[(7)] = inst_37409__$1);

(statearr_37432[(8)] = inst_37410__$1);

(statearr_37432[(9)] = inst_37411);

return statearr_37432;
})();
if(cljs.core.truth_(inst_37412)){
var statearr_37433_37453 = state_37430__$1;
(statearr_37433_37453[(1)] = (8));

} else {
var statearr_37434_37454 = state_37430__$1;
(statearr_37434_37454[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37431 === (1))){
var inst_37399 = cljs.core.vec.call(null,chs);
var inst_37400 = inst_37399;
var state_37430__$1 = (function (){var statearr_37435 = state_37430;
(statearr_37435[(10)] = inst_37400);

return statearr_37435;
})();
var statearr_37436_37455 = state_37430__$1;
(statearr_37436_37455[(2)] = null);

(statearr_37436_37455[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37431 === (4))){
var inst_37400 = (state_37430[(10)]);
var state_37430__$1 = state_37430;
return cljs.core.async.ioc_alts_BANG_.call(null,state_37430__$1,(7),inst_37400);
} else {
if((state_val_37431 === (6))){
var inst_37426 = (state_37430[(2)]);
var state_37430__$1 = state_37430;
var statearr_37437_37456 = state_37430__$1;
(statearr_37437_37456[(2)] = inst_37426);

(statearr_37437_37456[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37431 === (3))){
var inst_37428 = (state_37430[(2)]);
var state_37430__$1 = state_37430;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37430__$1,inst_37428);
} else {
if((state_val_37431 === (2))){
var inst_37400 = (state_37430[(10)]);
var inst_37402 = cljs.core.count.call(null,inst_37400);
var inst_37403 = (inst_37402 > (0));
var state_37430__$1 = state_37430;
if(cljs.core.truth_(inst_37403)){
var statearr_37439_37457 = state_37430__$1;
(statearr_37439_37457[(1)] = (4));

} else {
var statearr_37440_37458 = state_37430__$1;
(statearr_37440_37458[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37431 === (11))){
var inst_37400 = (state_37430[(10)]);
var inst_37419 = (state_37430[(2)]);
var tmp37438 = inst_37400;
var inst_37400__$1 = tmp37438;
var state_37430__$1 = (function (){var statearr_37441 = state_37430;
(statearr_37441[(11)] = inst_37419);

(statearr_37441[(10)] = inst_37400__$1);

return statearr_37441;
})();
var statearr_37442_37459 = state_37430__$1;
(statearr_37442_37459[(2)] = null);

(statearr_37442_37459[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37431 === (9))){
var inst_37410 = (state_37430[(8)]);
var state_37430__$1 = state_37430;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37430__$1,(11),out,inst_37410);
} else {
if((state_val_37431 === (5))){
var inst_37424 = cljs.core.async.close_BANG_.call(null,out);
var state_37430__$1 = state_37430;
var statearr_37443_37460 = state_37430__$1;
(statearr_37443_37460[(2)] = inst_37424);

(statearr_37443_37460[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37431 === (10))){
var inst_37422 = (state_37430[(2)]);
var state_37430__$1 = state_37430;
var statearr_37444_37461 = state_37430__$1;
(statearr_37444_37461[(2)] = inst_37422);

(statearr_37444_37461[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37431 === (8))){
var inst_37400 = (state_37430[(10)]);
var inst_37409 = (state_37430[(7)]);
var inst_37410 = (state_37430[(8)]);
var inst_37411 = (state_37430[(9)]);
var inst_37414 = (function (){var cs = inst_37400;
var vec__37405 = inst_37409;
var v = inst_37410;
var c = inst_37411;
return (function (p1__37396_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__37396_SHARP_);
});
})();
var inst_37415 = cljs.core.filterv.call(null,inst_37414,inst_37400);
var inst_37400__$1 = inst_37415;
var state_37430__$1 = (function (){var statearr_37445 = state_37430;
(statearr_37445[(10)] = inst_37400__$1);

return statearr_37445;
})();
var statearr_37446_37462 = state_37430__$1;
(statearr_37446_37462[(2)] = null);

(statearr_37446_37462[(1)] = (2));


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
var cljs$core$async$state_machine__35933__auto__ = null;
var cljs$core$async$state_machine__35933__auto____0 = (function (){
var statearr_37447 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37447[(0)] = cljs$core$async$state_machine__35933__auto__);

(statearr_37447[(1)] = (1));

return statearr_37447;
});
var cljs$core$async$state_machine__35933__auto____1 = (function (state_37430){
while(true){
var ret_value__35934__auto__ = (function (){try{while(true){
var result__35935__auto__ = switch__35932__auto__.call(null,state_37430);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35935__auto__;
}
break;
}
}catch (e37448){if((e37448 instanceof Object)){
var ex__35936__auto__ = e37448;
var statearr_37449_37463 = state_37430;
(statearr_37449_37463[(5)] = ex__35936__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37430);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37448;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37464 = state_37430;
state_37430 = G__37464;
continue;
} else {
return ret_value__35934__auto__;
}
break;
}
});
cljs$core$async$state_machine__35933__auto__ = function(state_37430){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35933__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35933__auto____1.call(this,state_37430);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35933__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35933__auto____0;
cljs$core$async$state_machine__35933__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35933__auto____1;
return cljs$core$async$state_machine__35933__auto__;
})()
})();
var state__36029__auto__ = (function (){var statearr_37450 = f__36028__auto__.call(null);
(statearr_37450[(6)] = c__36027__auto___37452);

return statearr_37450;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36029__auto__);
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
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__37466 = arguments.length;
switch (G__37466) {
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
return cljs.core.async.take.call(null,n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__36027__auto___37511 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__36028__auto__ = (function (){var switch__35932__auto__ = (function (state_37490){
var state_val_37491 = (state_37490[(1)]);
if((state_val_37491 === (7))){
var inst_37472 = (state_37490[(7)]);
var inst_37472__$1 = (state_37490[(2)]);
var inst_37473 = (inst_37472__$1 == null);
var inst_37474 = cljs.core.not.call(null,inst_37473);
var state_37490__$1 = (function (){var statearr_37492 = state_37490;
(statearr_37492[(7)] = inst_37472__$1);

return statearr_37492;
})();
if(inst_37474){
var statearr_37493_37512 = state_37490__$1;
(statearr_37493_37512[(1)] = (8));

} else {
var statearr_37494_37513 = state_37490__$1;
(statearr_37494_37513[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37491 === (1))){
var inst_37467 = (0);
var state_37490__$1 = (function (){var statearr_37495 = state_37490;
(statearr_37495[(8)] = inst_37467);

return statearr_37495;
})();
var statearr_37496_37514 = state_37490__$1;
(statearr_37496_37514[(2)] = null);

(statearr_37496_37514[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37491 === (4))){
var state_37490__$1 = state_37490;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37490__$1,(7),ch);
} else {
if((state_val_37491 === (6))){
var inst_37485 = (state_37490[(2)]);
var state_37490__$1 = state_37490;
var statearr_37497_37515 = state_37490__$1;
(statearr_37497_37515[(2)] = inst_37485);

(statearr_37497_37515[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37491 === (3))){
var inst_37487 = (state_37490[(2)]);
var inst_37488 = cljs.core.async.close_BANG_.call(null,out);
var state_37490__$1 = (function (){var statearr_37498 = state_37490;
(statearr_37498[(9)] = inst_37487);

return statearr_37498;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37490__$1,inst_37488);
} else {
if((state_val_37491 === (2))){
var inst_37467 = (state_37490[(8)]);
var inst_37469 = (inst_37467 < n);
var state_37490__$1 = state_37490;
if(cljs.core.truth_(inst_37469)){
var statearr_37499_37516 = state_37490__$1;
(statearr_37499_37516[(1)] = (4));

} else {
var statearr_37500_37517 = state_37490__$1;
(statearr_37500_37517[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37491 === (11))){
var inst_37467 = (state_37490[(8)]);
var inst_37477 = (state_37490[(2)]);
var inst_37478 = (inst_37467 + (1));
var inst_37467__$1 = inst_37478;
var state_37490__$1 = (function (){var statearr_37501 = state_37490;
(statearr_37501[(10)] = inst_37477);

(statearr_37501[(8)] = inst_37467__$1);

return statearr_37501;
})();
var statearr_37502_37518 = state_37490__$1;
(statearr_37502_37518[(2)] = null);

(statearr_37502_37518[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37491 === (9))){
var state_37490__$1 = state_37490;
var statearr_37503_37519 = state_37490__$1;
(statearr_37503_37519[(2)] = null);

(statearr_37503_37519[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37491 === (5))){
var state_37490__$1 = state_37490;
var statearr_37504_37520 = state_37490__$1;
(statearr_37504_37520[(2)] = null);

(statearr_37504_37520[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37491 === (10))){
var inst_37482 = (state_37490[(2)]);
var state_37490__$1 = state_37490;
var statearr_37505_37521 = state_37490__$1;
(statearr_37505_37521[(2)] = inst_37482);

(statearr_37505_37521[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37491 === (8))){
var inst_37472 = (state_37490[(7)]);
var state_37490__$1 = state_37490;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37490__$1,(11),out,inst_37472);
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
var cljs$core$async$state_machine__35933__auto__ = null;
var cljs$core$async$state_machine__35933__auto____0 = (function (){
var statearr_37506 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37506[(0)] = cljs$core$async$state_machine__35933__auto__);

(statearr_37506[(1)] = (1));

return statearr_37506;
});
var cljs$core$async$state_machine__35933__auto____1 = (function (state_37490){
while(true){
var ret_value__35934__auto__ = (function (){try{while(true){
var result__35935__auto__ = switch__35932__auto__.call(null,state_37490);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35935__auto__;
}
break;
}
}catch (e37507){if((e37507 instanceof Object)){
var ex__35936__auto__ = e37507;
var statearr_37508_37522 = state_37490;
(statearr_37508_37522[(5)] = ex__35936__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37490);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37507;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37523 = state_37490;
state_37490 = G__37523;
continue;
} else {
return ret_value__35934__auto__;
}
break;
}
});
cljs$core$async$state_machine__35933__auto__ = function(state_37490){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35933__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35933__auto____1.call(this,state_37490);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35933__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35933__auto____0;
cljs$core$async$state_machine__35933__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35933__auto____1;
return cljs$core$async$state_machine__35933__auto__;
})()
})();
var state__36029__auto__ = (function (){var statearr_37509 = f__36028__auto__.call(null);
(statearr_37509[(6)] = c__36027__auto___37511);

return statearr_37509;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36029__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37525 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37525 = (function (f,ch,meta37526){
this.f = f;
this.ch = ch;
this.meta37526 = meta37526;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37525.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37527,meta37526__$1){
var self__ = this;
var _37527__$1 = this;
return (new cljs.core.async.t_cljs$core$async37525(self__.f,self__.ch,meta37526__$1));
}));

(cljs.core.async.t_cljs$core$async37525.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37527){
var self__ = this;
var _37527__$1 = this;
return self__.meta37526;
}));

(cljs.core.async.t_cljs$core$async37525.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37525.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async37525.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async37525.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37525.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37528 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37528 = (function (f,ch,meta37526,_,fn1,meta37529){
this.f = f;
this.ch = ch;
this.meta37526 = meta37526;
this._ = _;
this.fn1 = fn1;
this.meta37529 = meta37529;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37528.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37530,meta37529__$1){
var self__ = this;
var _37530__$1 = this;
return (new cljs.core.async.t_cljs$core$async37528(self__.f,self__.ch,self__.meta37526,self__._,self__.fn1,meta37529__$1));
}));

(cljs.core.async.t_cljs$core$async37528.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37530){
var self__ = this;
var _37530__$1 = this;
return self__.meta37529;
}));

(cljs.core.async.t_cljs$core$async37528.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37528.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
}));

(cljs.core.async.t_cljs$core$async37528.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async37528.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return (function (p1__37524_SHARP_){
return f1.call(null,(((p1__37524_SHARP_ == null))?null:self__.f.call(null,p1__37524_SHARP_)));
});
}));

(cljs.core.async.t_cljs$core$async37528.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta37526","meta37526",-2031028216,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async37525","cljs.core.async/t_cljs$core$async37525",1343851601,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta37529","meta37529",1413839174,null)], null);
}));

(cljs.core.async.t_cljs$core$async37528.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37528.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37528");

(cljs.core.async.t_cljs$core$async37528.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async37528");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37528.
 */
cljs.core.async.__GT_t_cljs$core$async37528 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async37528(f__$1,ch__$1,meta37526__$1,___$2,fn1__$1,meta37529){
return (new cljs.core.async.t_cljs$core$async37528(f__$1,ch__$1,meta37526__$1,___$2,fn1__$1,meta37529));
});

}

return (new cljs.core.async.t_cljs$core$async37528(self__.f,self__.ch,self__.meta37526,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async37525.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37525.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async37525.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta37526","meta37526",-2031028216,null)], null);
}));

(cljs.core.async.t_cljs$core$async37525.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37525.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37525");

(cljs.core.async.t_cljs$core$async37525.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async37525");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37525.
 */
cljs.core.async.__GT_t_cljs$core$async37525 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async37525(f__$1,ch__$1,meta37526){
return (new cljs.core.async.t_cljs$core$async37525(f__$1,ch__$1,meta37526));
});

}

return (new cljs.core.async.t_cljs$core$async37525(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37531 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37531 = (function (f,ch,meta37532){
this.f = f;
this.ch = ch;
this.meta37532 = meta37532;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37531.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37533,meta37532__$1){
var self__ = this;
var _37533__$1 = this;
return (new cljs.core.async.t_cljs$core$async37531(self__.f,self__.ch,meta37532__$1));
}));

(cljs.core.async.t_cljs$core$async37531.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37533){
var self__ = this;
var _37533__$1 = this;
return self__.meta37532;
}));

(cljs.core.async.t_cljs$core$async37531.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37531.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async37531.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37531.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async37531.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37531.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
}));

(cljs.core.async.t_cljs$core$async37531.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta37532","meta37532",776211440,null)], null);
}));

(cljs.core.async.t_cljs$core$async37531.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37531.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37531");

(cljs.core.async.t_cljs$core$async37531.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async37531");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37531.
 */
cljs.core.async.__GT_t_cljs$core$async37531 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async37531(f__$1,ch__$1,meta37532){
return (new cljs.core.async.t_cljs$core$async37531(f__$1,ch__$1,meta37532));
});

}

return (new cljs.core.async.t_cljs$core$async37531(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37534 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37534 = (function (p,ch,meta37535){
this.p = p;
this.ch = ch;
this.meta37535 = meta37535;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37534.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37536,meta37535__$1){
var self__ = this;
var _37536__$1 = this;
return (new cljs.core.async.t_cljs$core$async37534(self__.p,self__.ch,meta37535__$1));
}));

(cljs.core.async.t_cljs$core$async37534.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37536){
var self__ = this;
var _37536__$1 = this;
return self__.meta37535;
}));

(cljs.core.async.t_cljs$core$async37534.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37534.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async37534.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async37534.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37534.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async37534.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37534.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async37534.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta37535","meta37535",-256763469,null)], null);
}));

(cljs.core.async.t_cljs$core$async37534.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37534.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37534");

(cljs.core.async.t_cljs$core$async37534.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async37534");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37534.
 */
cljs.core.async.__GT_t_cljs$core$async37534 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async37534(p__$1,ch__$1,meta37535){
return (new cljs.core.async.t_cljs$core$async37534(p__$1,ch__$1,meta37535));
});

}

return (new cljs.core.async.t_cljs$core$async37534(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__37538 = arguments.length;
switch (G__37538) {
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
return cljs.core.async.filter_LT_.call(null,p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__36027__auto___37578 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__36028__auto__ = (function (){var switch__35932__auto__ = (function (state_37559){
var state_val_37560 = (state_37559[(1)]);
if((state_val_37560 === (7))){
var inst_37555 = (state_37559[(2)]);
var state_37559__$1 = state_37559;
var statearr_37561_37579 = state_37559__$1;
(statearr_37561_37579[(2)] = inst_37555);

(statearr_37561_37579[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37560 === (1))){
var state_37559__$1 = state_37559;
var statearr_37562_37580 = state_37559__$1;
(statearr_37562_37580[(2)] = null);

(statearr_37562_37580[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37560 === (4))){
var inst_37541 = (state_37559[(7)]);
var inst_37541__$1 = (state_37559[(2)]);
var inst_37542 = (inst_37541__$1 == null);
var state_37559__$1 = (function (){var statearr_37563 = state_37559;
(statearr_37563[(7)] = inst_37541__$1);

return statearr_37563;
})();
if(cljs.core.truth_(inst_37542)){
var statearr_37564_37581 = state_37559__$1;
(statearr_37564_37581[(1)] = (5));

} else {
var statearr_37565_37582 = state_37559__$1;
(statearr_37565_37582[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37560 === (6))){
var inst_37541 = (state_37559[(7)]);
var inst_37546 = p.call(null,inst_37541);
var state_37559__$1 = state_37559;
if(cljs.core.truth_(inst_37546)){
var statearr_37566_37583 = state_37559__$1;
(statearr_37566_37583[(1)] = (8));

} else {
var statearr_37567_37584 = state_37559__$1;
(statearr_37567_37584[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37560 === (3))){
var inst_37557 = (state_37559[(2)]);
var state_37559__$1 = state_37559;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37559__$1,inst_37557);
} else {
if((state_val_37560 === (2))){
var state_37559__$1 = state_37559;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37559__$1,(4),ch);
} else {
if((state_val_37560 === (11))){
var inst_37549 = (state_37559[(2)]);
var state_37559__$1 = state_37559;
var statearr_37568_37585 = state_37559__$1;
(statearr_37568_37585[(2)] = inst_37549);

(statearr_37568_37585[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37560 === (9))){
var state_37559__$1 = state_37559;
var statearr_37569_37586 = state_37559__$1;
(statearr_37569_37586[(2)] = null);

(statearr_37569_37586[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37560 === (5))){
var inst_37544 = cljs.core.async.close_BANG_.call(null,out);
var state_37559__$1 = state_37559;
var statearr_37570_37587 = state_37559__$1;
(statearr_37570_37587[(2)] = inst_37544);

(statearr_37570_37587[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37560 === (10))){
var inst_37552 = (state_37559[(2)]);
var state_37559__$1 = (function (){var statearr_37571 = state_37559;
(statearr_37571[(8)] = inst_37552);

return statearr_37571;
})();
var statearr_37572_37588 = state_37559__$1;
(statearr_37572_37588[(2)] = null);

(statearr_37572_37588[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37560 === (8))){
var inst_37541 = (state_37559[(7)]);
var state_37559__$1 = state_37559;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37559__$1,(11),out,inst_37541);
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
var cljs$core$async$state_machine__35933__auto__ = null;
var cljs$core$async$state_machine__35933__auto____0 = (function (){
var statearr_37573 = [null,null,null,null,null,null,null,null,null];
(statearr_37573[(0)] = cljs$core$async$state_machine__35933__auto__);

(statearr_37573[(1)] = (1));

return statearr_37573;
});
var cljs$core$async$state_machine__35933__auto____1 = (function (state_37559){
while(true){
var ret_value__35934__auto__ = (function (){try{while(true){
var result__35935__auto__ = switch__35932__auto__.call(null,state_37559);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35935__auto__;
}
break;
}
}catch (e37574){if((e37574 instanceof Object)){
var ex__35936__auto__ = e37574;
var statearr_37575_37589 = state_37559;
(statearr_37575_37589[(5)] = ex__35936__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37559);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37574;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37590 = state_37559;
state_37559 = G__37590;
continue;
} else {
return ret_value__35934__auto__;
}
break;
}
});
cljs$core$async$state_machine__35933__auto__ = function(state_37559){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35933__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35933__auto____1.call(this,state_37559);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35933__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35933__auto____0;
cljs$core$async$state_machine__35933__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35933__auto____1;
return cljs$core$async$state_machine__35933__auto__;
})()
})();
var state__36029__auto__ = (function (){var statearr_37576 = f__36028__auto__.call(null);
(statearr_37576[(6)] = c__36027__auto___37578);

return statearr_37576;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36029__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__37592 = arguments.length;
switch (G__37592) {
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
return cljs.core.async.remove_LT_.call(null,p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__36027__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__36028__auto__ = (function (){var switch__35932__auto__ = (function (state_37655){
var state_val_37656 = (state_37655[(1)]);
if((state_val_37656 === (7))){
var inst_37651 = (state_37655[(2)]);
var state_37655__$1 = state_37655;
var statearr_37657_37695 = state_37655__$1;
(statearr_37657_37695[(2)] = inst_37651);

(statearr_37657_37695[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37656 === (20))){
var inst_37621 = (state_37655[(7)]);
var inst_37632 = (state_37655[(2)]);
var inst_37633 = cljs.core.next.call(null,inst_37621);
var inst_37607 = inst_37633;
var inst_37608 = null;
var inst_37609 = (0);
var inst_37610 = (0);
var state_37655__$1 = (function (){var statearr_37658 = state_37655;
(statearr_37658[(8)] = inst_37610);

(statearr_37658[(9)] = inst_37607);

(statearr_37658[(10)] = inst_37608);

(statearr_37658[(11)] = inst_37609);

(statearr_37658[(12)] = inst_37632);

return statearr_37658;
})();
var statearr_37659_37696 = state_37655__$1;
(statearr_37659_37696[(2)] = null);

(statearr_37659_37696[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37656 === (1))){
var state_37655__$1 = state_37655;
var statearr_37660_37697 = state_37655__$1;
(statearr_37660_37697[(2)] = null);

(statearr_37660_37697[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37656 === (4))){
var inst_37596 = (state_37655[(13)]);
var inst_37596__$1 = (state_37655[(2)]);
var inst_37597 = (inst_37596__$1 == null);
var state_37655__$1 = (function (){var statearr_37661 = state_37655;
(statearr_37661[(13)] = inst_37596__$1);

return statearr_37661;
})();
if(cljs.core.truth_(inst_37597)){
var statearr_37662_37698 = state_37655__$1;
(statearr_37662_37698[(1)] = (5));

} else {
var statearr_37663_37699 = state_37655__$1;
(statearr_37663_37699[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37656 === (15))){
var state_37655__$1 = state_37655;
var statearr_37667_37700 = state_37655__$1;
(statearr_37667_37700[(2)] = null);

(statearr_37667_37700[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37656 === (21))){
var state_37655__$1 = state_37655;
var statearr_37668_37701 = state_37655__$1;
(statearr_37668_37701[(2)] = null);

(statearr_37668_37701[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37656 === (13))){
var inst_37610 = (state_37655[(8)]);
var inst_37607 = (state_37655[(9)]);
var inst_37608 = (state_37655[(10)]);
var inst_37609 = (state_37655[(11)]);
var inst_37617 = (state_37655[(2)]);
var inst_37618 = (inst_37610 + (1));
var tmp37664 = inst_37607;
var tmp37665 = inst_37608;
var tmp37666 = inst_37609;
var inst_37607__$1 = tmp37664;
var inst_37608__$1 = tmp37665;
var inst_37609__$1 = tmp37666;
var inst_37610__$1 = inst_37618;
var state_37655__$1 = (function (){var statearr_37669 = state_37655;
(statearr_37669[(8)] = inst_37610__$1);

(statearr_37669[(9)] = inst_37607__$1);

(statearr_37669[(10)] = inst_37608__$1);

(statearr_37669[(14)] = inst_37617);

(statearr_37669[(11)] = inst_37609__$1);

return statearr_37669;
})();
var statearr_37670_37702 = state_37655__$1;
(statearr_37670_37702[(2)] = null);

(statearr_37670_37702[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37656 === (22))){
var state_37655__$1 = state_37655;
var statearr_37671_37703 = state_37655__$1;
(statearr_37671_37703[(2)] = null);

(statearr_37671_37703[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37656 === (6))){
var inst_37596 = (state_37655[(13)]);
var inst_37605 = f.call(null,inst_37596);
var inst_37606 = cljs.core.seq.call(null,inst_37605);
var inst_37607 = inst_37606;
var inst_37608 = null;
var inst_37609 = (0);
var inst_37610 = (0);
var state_37655__$1 = (function (){var statearr_37672 = state_37655;
(statearr_37672[(8)] = inst_37610);

(statearr_37672[(9)] = inst_37607);

(statearr_37672[(10)] = inst_37608);

(statearr_37672[(11)] = inst_37609);

return statearr_37672;
})();
var statearr_37673_37704 = state_37655__$1;
(statearr_37673_37704[(2)] = null);

(statearr_37673_37704[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37656 === (17))){
var inst_37621 = (state_37655[(7)]);
var inst_37625 = cljs.core.chunk_first.call(null,inst_37621);
var inst_37626 = cljs.core.chunk_rest.call(null,inst_37621);
var inst_37627 = cljs.core.count.call(null,inst_37625);
var inst_37607 = inst_37626;
var inst_37608 = inst_37625;
var inst_37609 = inst_37627;
var inst_37610 = (0);
var state_37655__$1 = (function (){var statearr_37674 = state_37655;
(statearr_37674[(8)] = inst_37610);

(statearr_37674[(9)] = inst_37607);

(statearr_37674[(10)] = inst_37608);

(statearr_37674[(11)] = inst_37609);

return statearr_37674;
})();
var statearr_37675_37705 = state_37655__$1;
(statearr_37675_37705[(2)] = null);

(statearr_37675_37705[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37656 === (3))){
var inst_37653 = (state_37655[(2)]);
var state_37655__$1 = state_37655;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37655__$1,inst_37653);
} else {
if((state_val_37656 === (12))){
var inst_37641 = (state_37655[(2)]);
var state_37655__$1 = state_37655;
var statearr_37676_37706 = state_37655__$1;
(statearr_37676_37706[(2)] = inst_37641);

(statearr_37676_37706[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37656 === (2))){
var state_37655__$1 = state_37655;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37655__$1,(4),in$);
} else {
if((state_val_37656 === (23))){
var inst_37649 = (state_37655[(2)]);
var state_37655__$1 = state_37655;
var statearr_37677_37707 = state_37655__$1;
(statearr_37677_37707[(2)] = inst_37649);

(statearr_37677_37707[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37656 === (19))){
var inst_37636 = (state_37655[(2)]);
var state_37655__$1 = state_37655;
var statearr_37678_37708 = state_37655__$1;
(statearr_37678_37708[(2)] = inst_37636);

(statearr_37678_37708[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37656 === (11))){
var inst_37607 = (state_37655[(9)]);
var inst_37621 = (state_37655[(7)]);
var inst_37621__$1 = cljs.core.seq.call(null,inst_37607);
var state_37655__$1 = (function (){var statearr_37679 = state_37655;
(statearr_37679[(7)] = inst_37621__$1);

return statearr_37679;
})();
if(inst_37621__$1){
var statearr_37680_37709 = state_37655__$1;
(statearr_37680_37709[(1)] = (14));

} else {
var statearr_37681_37710 = state_37655__$1;
(statearr_37681_37710[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37656 === (9))){
var inst_37643 = (state_37655[(2)]);
var inst_37644 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_37655__$1 = (function (){var statearr_37682 = state_37655;
(statearr_37682[(15)] = inst_37643);

return statearr_37682;
})();
if(cljs.core.truth_(inst_37644)){
var statearr_37683_37711 = state_37655__$1;
(statearr_37683_37711[(1)] = (21));

} else {
var statearr_37684_37712 = state_37655__$1;
(statearr_37684_37712[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37656 === (5))){
var inst_37599 = cljs.core.async.close_BANG_.call(null,out);
var state_37655__$1 = state_37655;
var statearr_37685_37713 = state_37655__$1;
(statearr_37685_37713[(2)] = inst_37599);

(statearr_37685_37713[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37656 === (14))){
var inst_37621 = (state_37655[(7)]);
var inst_37623 = cljs.core.chunked_seq_QMARK_.call(null,inst_37621);
var state_37655__$1 = state_37655;
if(inst_37623){
var statearr_37686_37714 = state_37655__$1;
(statearr_37686_37714[(1)] = (17));

} else {
var statearr_37687_37715 = state_37655__$1;
(statearr_37687_37715[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37656 === (16))){
var inst_37639 = (state_37655[(2)]);
var state_37655__$1 = state_37655;
var statearr_37688_37716 = state_37655__$1;
(statearr_37688_37716[(2)] = inst_37639);

(statearr_37688_37716[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37656 === (10))){
var inst_37610 = (state_37655[(8)]);
var inst_37608 = (state_37655[(10)]);
var inst_37615 = cljs.core._nth.call(null,inst_37608,inst_37610);
var state_37655__$1 = state_37655;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37655__$1,(13),out,inst_37615);
} else {
if((state_val_37656 === (18))){
var inst_37621 = (state_37655[(7)]);
var inst_37630 = cljs.core.first.call(null,inst_37621);
var state_37655__$1 = state_37655;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37655__$1,(20),out,inst_37630);
} else {
if((state_val_37656 === (8))){
var inst_37610 = (state_37655[(8)]);
var inst_37609 = (state_37655[(11)]);
var inst_37612 = (inst_37610 < inst_37609);
var inst_37613 = inst_37612;
var state_37655__$1 = state_37655;
if(cljs.core.truth_(inst_37613)){
var statearr_37689_37717 = state_37655__$1;
(statearr_37689_37717[(1)] = (10));

} else {
var statearr_37690_37718 = state_37655__$1;
(statearr_37690_37718[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__35933__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__35933__auto____0 = (function (){
var statearr_37691 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37691[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__35933__auto__);

(statearr_37691[(1)] = (1));

return statearr_37691;
});
var cljs$core$async$mapcat_STAR__$_state_machine__35933__auto____1 = (function (state_37655){
while(true){
var ret_value__35934__auto__ = (function (){try{while(true){
var result__35935__auto__ = switch__35932__auto__.call(null,state_37655);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35935__auto__;
}
break;
}
}catch (e37692){if((e37692 instanceof Object)){
var ex__35936__auto__ = e37692;
var statearr_37693_37719 = state_37655;
(statearr_37693_37719[(5)] = ex__35936__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37655);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37692;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37720 = state_37655;
state_37655 = G__37720;
continue;
} else {
return ret_value__35934__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__35933__auto__ = function(state_37655){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__35933__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__35933__auto____1.call(this,state_37655);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__35933__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__35933__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__35933__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__35933__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__35933__auto__;
})()
})();
var state__36029__auto__ = (function (){var statearr_37694 = f__36028__auto__.call(null);
(statearr_37694[(6)] = c__36027__auto__);

return statearr_37694;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36029__auto__);
}));

return c__36027__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__37722 = arguments.length;
switch (G__37722) {
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
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__37725 = arguments.length;
switch (G__37725) {
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
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__37728 = arguments.length;
switch (G__37728) {
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
return cljs.core.async.unique.call(null,ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__36027__auto___37775 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__36028__auto__ = (function (){var switch__35932__auto__ = (function (state_37752){
var state_val_37753 = (state_37752[(1)]);
if((state_val_37753 === (7))){
var inst_37747 = (state_37752[(2)]);
var state_37752__$1 = state_37752;
var statearr_37754_37776 = state_37752__$1;
(statearr_37754_37776[(2)] = inst_37747);

(statearr_37754_37776[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37753 === (1))){
var inst_37729 = null;
var state_37752__$1 = (function (){var statearr_37755 = state_37752;
(statearr_37755[(7)] = inst_37729);

return statearr_37755;
})();
var statearr_37756_37777 = state_37752__$1;
(statearr_37756_37777[(2)] = null);

(statearr_37756_37777[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37753 === (4))){
var inst_37732 = (state_37752[(8)]);
var inst_37732__$1 = (state_37752[(2)]);
var inst_37733 = (inst_37732__$1 == null);
var inst_37734 = cljs.core.not.call(null,inst_37733);
var state_37752__$1 = (function (){var statearr_37757 = state_37752;
(statearr_37757[(8)] = inst_37732__$1);

return statearr_37757;
})();
if(inst_37734){
var statearr_37758_37778 = state_37752__$1;
(statearr_37758_37778[(1)] = (5));

} else {
var statearr_37759_37779 = state_37752__$1;
(statearr_37759_37779[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37753 === (6))){
var state_37752__$1 = state_37752;
var statearr_37760_37780 = state_37752__$1;
(statearr_37760_37780[(2)] = null);

(statearr_37760_37780[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37753 === (3))){
var inst_37749 = (state_37752[(2)]);
var inst_37750 = cljs.core.async.close_BANG_.call(null,out);
var state_37752__$1 = (function (){var statearr_37761 = state_37752;
(statearr_37761[(9)] = inst_37749);

return statearr_37761;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37752__$1,inst_37750);
} else {
if((state_val_37753 === (2))){
var state_37752__$1 = state_37752;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37752__$1,(4),ch);
} else {
if((state_val_37753 === (11))){
var inst_37732 = (state_37752[(8)]);
var inst_37741 = (state_37752[(2)]);
var inst_37729 = inst_37732;
var state_37752__$1 = (function (){var statearr_37762 = state_37752;
(statearr_37762[(7)] = inst_37729);

(statearr_37762[(10)] = inst_37741);

return statearr_37762;
})();
var statearr_37763_37781 = state_37752__$1;
(statearr_37763_37781[(2)] = null);

(statearr_37763_37781[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37753 === (9))){
var inst_37732 = (state_37752[(8)]);
var state_37752__$1 = state_37752;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37752__$1,(11),out,inst_37732);
} else {
if((state_val_37753 === (5))){
var inst_37732 = (state_37752[(8)]);
var inst_37729 = (state_37752[(7)]);
var inst_37736 = cljs.core._EQ_.call(null,inst_37732,inst_37729);
var state_37752__$1 = state_37752;
if(inst_37736){
var statearr_37765_37782 = state_37752__$1;
(statearr_37765_37782[(1)] = (8));

} else {
var statearr_37766_37783 = state_37752__$1;
(statearr_37766_37783[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37753 === (10))){
var inst_37744 = (state_37752[(2)]);
var state_37752__$1 = state_37752;
var statearr_37767_37784 = state_37752__$1;
(statearr_37767_37784[(2)] = inst_37744);

(statearr_37767_37784[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37753 === (8))){
var inst_37729 = (state_37752[(7)]);
var tmp37764 = inst_37729;
var inst_37729__$1 = tmp37764;
var state_37752__$1 = (function (){var statearr_37768 = state_37752;
(statearr_37768[(7)] = inst_37729__$1);

return statearr_37768;
})();
var statearr_37769_37785 = state_37752__$1;
(statearr_37769_37785[(2)] = null);

(statearr_37769_37785[(1)] = (2));


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
var cljs$core$async$state_machine__35933__auto__ = null;
var cljs$core$async$state_machine__35933__auto____0 = (function (){
var statearr_37770 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37770[(0)] = cljs$core$async$state_machine__35933__auto__);

(statearr_37770[(1)] = (1));

return statearr_37770;
});
var cljs$core$async$state_machine__35933__auto____1 = (function (state_37752){
while(true){
var ret_value__35934__auto__ = (function (){try{while(true){
var result__35935__auto__ = switch__35932__auto__.call(null,state_37752);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35935__auto__;
}
break;
}
}catch (e37771){if((e37771 instanceof Object)){
var ex__35936__auto__ = e37771;
var statearr_37772_37786 = state_37752;
(statearr_37772_37786[(5)] = ex__35936__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37752);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37771;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37787 = state_37752;
state_37752 = G__37787;
continue;
} else {
return ret_value__35934__auto__;
}
break;
}
});
cljs$core$async$state_machine__35933__auto__ = function(state_37752){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35933__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35933__auto____1.call(this,state_37752);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35933__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35933__auto____0;
cljs$core$async$state_machine__35933__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35933__auto____1;
return cljs$core$async$state_machine__35933__auto__;
})()
})();
var state__36029__auto__ = (function (){var statearr_37773 = f__36028__auto__.call(null);
(statearr_37773[(6)] = c__36027__auto___37775);

return statearr_37773;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36029__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__37789 = arguments.length;
switch (G__37789) {
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
return cljs.core.async.partition.call(null,n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__36027__auto___37855 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__36028__auto__ = (function (){var switch__35932__auto__ = (function (state_37827){
var state_val_37828 = (state_37827[(1)]);
if((state_val_37828 === (7))){
var inst_37823 = (state_37827[(2)]);
var state_37827__$1 = state_37827;
var statearr_37829_37856 = state_37827__$1;
(statearr_37829_37856[(2)] = inst_37823);

(statearr_37829_37856[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37828 === (1))){
var inst_37790 = (new Array(n));
var inst_37791 = inst_37790;
var inst_37792 = (0);
var state_37827__$1 = (function (){var statearr_37830 = state_37827;
(statearr_37830[(7)] = inst_37791);

(statearr_37830[(8)] = inst_37792);

return statearr_37830;
})();
var statearr_37831_37857 = state_37827__$1;
(statearr_37831_37857[(2)] = null);

(statearr_37831_37857[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37828 === (4))){
var inst_37795 = (state_37827[(9)]);
var inst_37795__$1 = (state_37827[(2)]);
var inst_37796 = (inst_37795__$1 == null);
var inst_37797 = cljs.core.not.call(null,inst_37796);
var state_37827__$1 = (function (){var statearr_37832 = state_37827;
(statearr_37832[(9)] = inst_37795__$1);

return statearr_37832;
})();
if(inst_37797){
var statearr_37833_37858 = state_37827__$1;
(statearr_37833_37858[(1)] = (5));

} else {
var statearr_37834_37859 = state_37827__$1;
(statearr_37834_37859[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37828 === (15))){
var inst_37817 = (state_37827[(2)]);
var state_37827__$1 = state_37827;
var statearr_37835_37860 = state_37827__$1;
(statearr_37835_37860[(2)] = inst_37817);

(statearr_37835_37860[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37828 === (13))){
var state_37827__$1 = state_37827;
var statearr_37836_37861 = state_37827__$1;
(statearr_37836_37861[(2)] = null);

(statearr_37836_37861[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37828 === (6))){
var inst_37792 = (state_37827[(8)]);
var inst_37813 = (inst_37792 > (0));
var state_37827__$1 = state_37827;
if(cljs.core.truth_(inst_37813)){
var statearr_37837_37862 = state_37827__$1;
(statearr_37837_37862[(1)] = (12));

} else {
var statearr_37838_37863 = state_37827__$1;
(statearr_37838_37863[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37828 === (3))){
var inst_37825 = (state_37827[(2)]);
var state_37827__$1 = state_37827;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37827__$1,inst_37825);
} else {
if((state_val_37828 === (12))){
var inst_37791 = (state_37827[(7)]);
var inst_37815 = cljs.core.vec.call(null,inst_37791);
var state_37827__$1 = state_37827;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37827__$1,(15),out,inst_37815);
} else {
if((state_val_37828 === (2))){
var state_37827__$1 = state_37827;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37827__$1,(4),ch);
} else {
if((state_val_37828 === (11))){
var inst_37807 = (state_37827[(2)]);
var inst_37808 = (new Array(n));
var inst_37791 = inst_37808;
var inst_37792 = (0);
var state_37827__$1 = (function (){var statearr_37839 = state_37827;
(statearr_37839[(10)] = inst_37807);

(statearr_37839[(7)] = inst_37791);

(statearr_37839[(8)] = inst_37792);

return statearr_37839;
})();
var statearr_37840_37864 = state_37827__$1;
(statearr_37840_37864[(2)] = null);

(statearr_37840_37864[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37828 === (9))){
var inst_37791 = (state_37827[(7)]);
var inst_37805 = cljs.core.vec.call(null,inst_37791);
var state_37827__$1 = state_37827;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37827__$1,(11),out,inst_37805);
} else {
if((state_val_37828 === (5))){
var inst_37791 = (state_37827[(7)]);
var inst_37795 = (state_37827[(9)]);
var inst_37792 = (state_37827[(8)]);
var inst_37800 = (state_37827[(11)]);
var inst_37799 = (inst_37791[inst_37792] = inst_37795);
var inst_37800__$1 = (inst_37792 + (1));
var inst_37801 = (inst_37800__$1 < n);
var state_37827__$1 = (function (){var statearr_37841 = state_37827;
(statearr_37841[(11)] = inst_37800__$1);

(statearr_37841[(12)] = inst_37799);

return statearr_37841;
})();
if(cljs.core.truth_(inst_37801)){
var statearr_37842_37865 = state_37827__$1;
(statearr_37842_37865[(1)] = (8));

} else {
var statearr_37843_37866 = state_37827__$1;
(statearr_37843_37866[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37828 === (14))){
var inst_37820 = (state_37827[(2)]);
var inst_37821 = cljs.core.async.close_BANG_.call(null,out);
var state_37827__$1 = (function (){var statearr_37845 = state_37827;
(statearr_37845[(13)] = inst_37820);

return statearr_37845;
})();
var statearr_37846_37867 = state_37827__$1;
(statearr_37846_37867[(2)] = inst_37821);

(statearr_37846_37867[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37828 === (10))){
var inst_37811 = (state_37827[(2)]);
var state_37827__$1 = state_37827;
var statearr_37847_37868 = state_37827__$1;
(statearr_37847_37868[(2)] = inst_37811);

(statearr_37847_37868[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37828 === (8))){
var inst_37791 = (state_37827[(7)]);
var inst_37800 = (state_37827[(11)]);
var tmp37844 = inst_37791;
var inst_37791__$1 = tmp37844;
var inst_37792 = inst_37800;
var state_37827__$1 = (function (){var statearr_37848 = state_37827;
(statearr_37848[(7)] = inst_37791__$1);

(statearr_37848[(8)] = inst_37792);

return statearr_37848;
})();
var statearr_37849_37869 = state_37827__$1;
(statearr_37849_37869[(2)] = null);

(statearr_37849_37869[(1)] = (2));


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
var cljs$core$async$state_machine__35933__auto__ = null;
var cljs$core$async$state_machine__35933__auto____0 = (function (){
var statearr_37850 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37850[(0)] = cljs$core$async$state_machine__35933__auto__);

(statearr_37850[(1)] = (1));

return statearr_37850;
});
var cljs$core$async$state_machine__35933__auto____1 = (function (state_37827){
while(true){
var ret_value__35934__auto__ = (function (){try{while(true){
var result__35935__auto__ = switch__35932__auto__.call(null,state_37827);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35935__auto__;
}
break;
}
}catch (e37851){if((e37851 instanceof Object)){
var ex__35936__auto__ = e37851;
var statearr_37852_37870 = state_37827;
(statearr_37852_37870[(5)] = ex__35936__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37827);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37851;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37871 = state_37827;
state_37827 = G__37871;
continue;
} else {
return ret_value__35934__auto__;
}
break;
}
});
cljs$core$async$state_machine__35933__auto__ = function(state_37827){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35933__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35933__auto____1.call(this,state_37827);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35933__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35933__auto____0;
cljs$core$async$state_machine__35933__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35933__auto____1;
return cljs$core$async$state_machine__35933__auto__;
})()
})();
var state__36029__auto__ = (function (){var statearr_37853 = f__36028__auto__.call(null);
(statearr_37853[(6)] = c__36027__auto___37855);

return statearr_37853;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36029__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__37873 = arguments.length;
switch (G__37873) {
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
return cljs.core.async.partition_by.call(null,f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__36027__auto___37943 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__36028__auto__ = (function (){var switch__35932__auto__ = (function (state_37915){
var state_val_37916 = (state_37915[(1)]);
if((state_val_37916 === (7))){
var inst_37911 = (state_37915[(2)]);
var state_37915__$1 = state_37915;
var statearr_37917_37944 = state_37915__$1;
(statearr_37917_37944[(2)] = inst_37911);

(statearr_37917_37944[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37916 === (1))){
var inst_37874 = [];
var inst_37875 = inst_37874;
var inst_37876 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_37915__$1 = (function (){var statearr_37918 = state_37915;
(statearr_37918[(7)] = inst_37876);

(statearr_37918[(8)] = inst_37875);

return statearr_37918;
})();
var statearr_37919_37945 = state_37915__$1;
(statearr_37919_37945[(2)] = null);

(statearr_37919_37945[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37916 === (4))){
var inst_37879 = (state_37915[(9)]);
var inst_37879__$1 = (state_37915[(2)]);
var inst_37880 = (inst_37879__$1 == null);
var inst_37881 = cljs.core.not.call(null,inst_37880);
var state_37915__$1 = (function (){var statearr_37920 = state_37915;
(statearr_37920[(9)] = inst_37879__$1);

return statearr_37920;
})();
if(inst_37881){
var statearr_37921_37946 = state_37915__$1;
(statearr_37921_37946[(1)] = (5));

} else {
var statearr_37922_37947 = state_37915__$1;
(statearr_37922_37947[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37916 === (15))){
var inst_37905 = (state_37915[(2)]);
var state_37915__$1 = state_37915;
var statearr_37923_37948 = state_37915__$1;
(statearr_37923_37948[(2)] = inst_37905);

(statearr_37923_37948[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37916 === (13))){
var state_37915__$1 = state_37915;
var statearr_37924_37949 = state_37915__$1;
(statearr_37924_37949[(2)] = null);

(statearr_37924_37949[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37916 === (6))){
var inst_37875 = (state_37915[(8)]);
var inst_37900 = inst_37875.length;
var inst_37901 = (inst_37900 > (0));
var state_37915__$1 = state_37915;
if(cljs.core.truth_(inst_37901)){
var statearr_37925_37950 = state_37915__$1;
(statearr_37925_37950[(1)] = (12));

} else {
var statearr_37926_37951 = state_37915__$1;
(statearr_37926_37951[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37916 === (3))){
var inst_37913 = (state_37915[(2)]);
var state_37915__$1 = state_37915;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37915__$1,inst_37913);
} else {
if((state_val_37916 === (12))){
var inst_37875 = (state_37915[(8)]);
var inst_37903 = cljs.core.vec.call(null,inst_37875);
var state_37915__$1 = state_37915;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37915__$1,(15),out,inst_37903);
} else {
if((state_val_37916 === (2))){
var state_37915__$1 = state_37915;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37915__$1,(4),ch);
} else {
if((state_val_37916 === (11))){
var inst_37879 = (state_37915[(9)]);
var inst_37883 = (state_37915[(10)]);
var inst_37893 = (state_37915[(2)]);
var inst_37894 = [];
var inst_37895 = inst_37894.push(inst_37879);
var inst_37875 = inst_37894;
var inst_37876 = inst_37883;
var state_37915__$1 = (function (){var statearr_37927 = state_37915;
(statearr_37927[(11)] = inst_37895);

(statearr_37927[(12)] = inst_37893);

(statearr_37927[(7)] = inst_37876);

(statearr_37927[(8)] = inst_37875);

return statearr_37927;
})();
var statearr_37928_37952 = state_37915__$1;
(statearr_37928_37952[(2)] = null);

(statearr_37928_37952[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37916 === (9))){
var inst_37875 = (state_37915[(8)]);
var inst_37891 = cljs.core.vec.call(null,inst_37875);
var state_37915__$1 = state_37915;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37915__$1,(11),out,inst_37891);
} else {
if((state_val_37916 === (5))){
var inst_37879 = (state_37915[(9)]);
var inst_37876 = (state_37915[(7)]);
var inst_37883 = (state_37915[(10)]);
var inst_37883__$1 = f.call(null,inst_37879);
var inst_37884 = cljs.core._EQ_.call(null,inst_37883__$1,inst_37876);
var inst_37885 = cljs.core.keyword_identical_QMARK_.call(null,inst_37876,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_37886 = ((inst_37884) || (inst_37885));
var state_37915__$1 = (function (){var statearr_37929 = state_37915;
(statearr_37929[(10)] = inst_37883__$1);

return statearr_37929;
})();
if(cljs.core.truth_(inst_37886)){
var statearr_37930_37953 = state_37915__$1;
(statearr_37930_37953[(1)] = (8));

} else {
var statearr_37931_37954 = state_37915__$1;
(statearr_37931_37954[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37916 === (14))){
var inst_37908 = (state_37915[(2)]);
var inst_37909 = cljs.core.async.close_BANG_.call(null,out);
var state_37915__$1 = (function (){var statearr_37933 = state_37915;
(statearr_37933[(13)] = inst_37908);

return statearr_37933;
})();
var statearr_37934_37955 = state_37915__$1;
(statearr_37934_37955[(2)] = inst_37909);

(statearr_37934_37955[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37916 === (10))){
var inst_37898 = (state_37915[(2)]);
var state_37915__$1 = state_37915;
var statearr_37935_37956 = state_37915__$1;
(statearr_37935_37956[(2)] = inst_37898);

(statearr_37935_37956[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37916 === (8))){
var inst_37879 = (state_37915[(9)]);
var inst_37883 = (state_37915[(10)]);
var inst_37875 = (state_37915[(8)]);
var inst_37888 = inst_37875.push(inst_37879);
var tmp37932 = inst_37875;
var inst_37875__$1 = tmp37932;
var inst_37876 = inst_37883;
var state_37915__$1 = (function (){var statearr_37936 = state_37915;
(statearr_37936[(14)] = inst_37888);

(statearr_37936[(7)] = inst_37876);

(statearr_37936[(8)] = inst_37875__$1);

return statearr_37936;
})();
var statearr_37937_37957 = state_37915__$1;
(statearr_37937_37957[(2)] = null);

(statearr_37937_37957[(1)] = (2));


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
var cljs$core$async$state_machine__35933__auto__ = null;
var cljs$core$async$state_machine__35933__auto____0 = (function (){
var statearr_37938 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37938[(0)] = cljs$core$async$state_machine__35933__auto__);

(statearr_37938[(1)] = (1));

return statearr_37938;
});
var cljs$core$async$state_machine__35933__auto____1 = (function (state_37915){
while(true){
var ret_value__35934__auto__ = (function (){try{while(true){
var result__35935__auto__ = switch__35932__auto__.call(null,state_37915);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35935__auto__;
}
break;
}
}catch (e37939){if((e37939 instanceof Object)){
var ex__35936__auto__ = e37939;
var statearr_37940_37958 = state_37915;
(statearr_37940_37958[(5)] = ex__35936__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37915);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37939;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37959 = state_37915;
state_37915 = G__37959;
continue;
} else {
return ret_value__35934__auto__;
}
break;
}
});
cljs$core$async$state_machine__35933__auto__ = function(state_37915){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35933__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35933__auto____1.call(this,state_37915);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35933__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35933__auto____0;
cljs$core$async$state_machine__35933__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35933__auto____1;
return cljs$core$async$state_machine__35933__auto__;
})()
})();
var state__36029__auto__ = (function (){var statearr_37941 = f__36028__auto__.call(null);
(statearr_37941[(6)] = c__36027__auto___37943);

return statearr_37941;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36029__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=async.js.map?rel=1630010085966
