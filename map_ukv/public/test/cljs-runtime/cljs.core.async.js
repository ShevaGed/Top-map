goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14286 = (function (f,blockable,meta14287){
this.f = f;
this.blockable = blockable;
this.meta14287 = meta14287;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14286.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14288,meta14287__$1){
var self__ = this;
var _14288__$1 = this;
return (new cljs.core.async.t_cljs$core$async14286(self__.f,self__.blockable,meta14287__$1));
}));

(cljs.core.async.t_cljs$core$async14286.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14288){
var self__ = this;
var _14288__$1 = this;
return self__.meta14287;
}));

(cljs.core.async.t_cljs$core$async14286.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14286.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14286.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async14286.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async14286.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta14287","meta14287",841835193,null)], null);
}));

(cljs.core.async.t_cljs$core$async14286.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14286.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14286");

(cljs.core.async.t_cljs$core$async14286.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async14286");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14286.
 */
cljs.core.async.__GT_t_cljs$core$async14286 = (function cljs$core$async$__GT_t_cljs$core$async14286(f,blockable,meta14287){
return (new cljs.core.async.t_cljs$core$async14286(f,blockable,meta14287));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__14258 = arguments.length;
switch (G__14258) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async14286(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__14339 = arguments.length;
switch (G__14339) {
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
throw (new Error(["Invalid arity: ",arguments.length].join("")));

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
throw (new Error((""+"Assert failed: "+"buffer must be supplied when transducer is"+"\n"+"buf-or-n")));
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
 *   channel is closed, then return the value (or nil) forever. See chan for the
 *   semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__14371 = arguments.length;
switch (G__14371) {
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
throw (new Error(["Invalid arity: ",arguments.length].join("")));

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
var G__14415 = arguments.length;
switch (G__14415) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_18114 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_18114) : fn1.call(null,val_18114));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_18114) : fn1.call(null,val_18114));
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
var G__14460 = arguments.length;
switch (G__14460) {
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
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5821__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5821__auto__)){
var ret = temp__5821__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5821__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5821__auto__)){
var retb = temp__5821__auto__;
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
var n__5741__auto___18119 = n;
var x_18120 = (0);
while(true){
if((x_18120 < n__5741__auto___18119)){
(a[x_18120] = x_18120);

var G__18123 = (x_18120 + (1));
x_18120 = G__18123;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14485 = (function (flag,meta14486){
this.flag = flag;
this.meta14486 = meta14486;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14485.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14487,meta14486__$1){
var self__ = this;
var _14487__$1 = this;
return (new cljs.core.async.t_cljs$core$async14485(self__.flag,meta14486__$1));
}));

(cljs.core.async.t_cljs$core$async14485.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14487){
var self__ = this;
var _14487__$1 = this;
return self__.meta14486;
}));

(cljs.core.async.t_cljs$core$async14485.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14485.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async14485.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14485.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async14485.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta14486","meta14486",-306925763,null)], null);
}));

(cljs.core.async.t_cljs$core$async14485.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14485.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14485");

(cljs.core.async.t_cljs$core$async14485.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async14485");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14485.
 */
cljs.core.async.__GT_t_cljs$core$async14485 = (function cljs$core$async$__GT_t_cljs$core$async14485(flag,meta14486){
return (new cljs.core.async.t_cljs$core$async14485(flag,meta14486));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async14485(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14518 = (function (flag,cb,meta14519){
this.flag = flag;
this.cb = cb;
this.meta14519 = meta14519;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14518.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14520,meta14519__$1){
var self__ = this;
var _14520__$1 = this;
return (new cljs.core.async.t_cljs$core$async14518(self__.flag,self__.cb,meta14519__$1));
}));

(cljs.core.async.t_cljs$core$async14518.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14520){
var self__ = this;
var _14520__$1 = this;
return self__.meta14519;
}));

(cljs.core.async.t_cljs$core$async14518.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14518.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async14518.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14518.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async14518.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta14519","meta14519",-316517557,null)], null);
}));

(cljs.core.async.t_cljs$core$async14518.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14518.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14518");

(cljs.core.async.t_cljs$core$async14518.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async14518");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14518.
 */
cljs.core.async.__GT_t_cljs$core$async14518 = (function cljs$core$async$__GT_t_cljs$core$async14518(flag,cb,meta14519){
return (new cljs.core.async.t_cljs$core$async14518(flag,cb,meta14519));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async14518(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error((""+"Assert failed: "+"alts must have at least one channel operation"+"\n"+"(pos? (count ports))")));
}

var flag = cljs.core.async.alt_flag();
var ports__$1 = cljs.core.vec(ports);
var n = cljs.core.count(ports__$1);
var _ = (function (){var i = (0);
while(true){
if((i < n)){
var port_18129 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports__$1,i);
if(cljs.core.vector_QMARK_(port_18129)){
if((!(((port_18129.cljs$core$IFn$_invoke$arity$1 ? port_18129.cljs$core$IFn$_invoke$arity$1((1)) : port_18129.call(null,(1))) == null)))){
} else {
throw (new Error((""+"Assert failed: "+"can't put nil on channel"+"\n"+"(some? (port 1))")));
}
} else {
}

var G__18136 = (i + (1));
i = G__18136;
continue;
} else {
return null;
}
break;
}
})();
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports__$1,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,ports__$1,n,_,idxs,priority){
return (function (p1__14549_SHARP_){
var G__14570 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14549_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__14570) : fret.call(null,G__14570));
});})(i,val,idx,port,wport,flag,ports__$1,n,_,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,ports__$1,n,_,idxs,priority){
return (function (p1__14550_SHARP_){
var G__14573 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14550_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__14573) : fret.call(null,G__14573));
});})(i,idx,port,wport,flag,ports__$1,n,_,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5142__auto__ = wport;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return port;
}
})()], null));
} else {
var G__18138 = (i + (1));
i = G__18138;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5142__auto__ = ret;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5823__auto__ = (function (){var and__5140__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5140__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(temp__5823__auto__)){
var got = temp__5823__auto__;
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
var args__5882__auto__ = [];
var len__5876__auto___18140 = arguments.length;
var i__5877__auto___18141 = (0);
while(true){
if((i__5877__auto___18141 < len__5876__auto___18140)){
args__5882__auto__.push((arguments[i__5877__auto___18141]));

var G__18142 = (i__5877__auto___18141 + (1));
i__5877__auto___18141 = G__18142;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((1) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5883__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__14588){
var map__14591 = p__14588;
var map__14591__$1 = cljs.core.__destructure_map(map__14591);
var opts = map__14591__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq14583){
var G__14584 = cljs.core.first(seq14583);
var seq14583__$1 = cljs.core.next(seq14583);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14584,seq14583__$1);
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
var G__14606 = arguments.length;
switch (G__14606) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__14141__auto___18161 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14142__auto__ = (function (){var switch__13325__auto__ = (function (state_14677){
var state_val_14678 = (state_14677[(1)]);
if((state_val_14678 === (7))){
var inst_14673 = (state_14677[(2)]);
var state_14677__$1 = state_14677;
var statearr_14683_18165 = state_14677__$1;
(statearr_14683_18165[(2)] = inst_14673);

(statearr_14683_18165[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14678 === (1))){
var state_14677__$1 = state_14677;
var statearr_14689_18166 = state_14677__$1;
(statearr_14689_18166[(2)] = null);

(statearr_14689_18166[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14678 === (4))){
var inst_14623 = (state_14677[(7)]);
var inst_14623__$1 = (state_14677[(2)]);
var inst_14649 = (inst_14623__$1 == null);
var state_14677__$1 = (function (){var statearr_14708 = state_14677;
(statearr_14708[(7)] = inst_14623__$1);

return statearr_14708;
})();
if(cljs.core.truth_(inst_14649)){
var statearr_14740_18169 = state_14677__$1;
(statearr_14740_18169[(1)] = (5));

} else {
var statearr_14741_18172 = state_14677__$1;
(statearr_14741_18172[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14678 === (13))){
var state_14677__$1 = state_14677;
var statearr_14748_18173 = state_14677__$1;
(statearr_14748_18173[(2)] = null);

(statearr_14748_18173[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14678 === (6))){
var inst_14623 = (state_14677[(7)]);
var state_14677__$1 = state_14677;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14677__$1,(11),to,inst_14623);
} else {
if((state_val_14678 === (3))){
var inst_14675 = (state_14677[(2)]);
var state_14677__$1 = state_14677;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14677__$1,inst_14675);
} else {
if((state_val_14678 === (12))){
var state_14677__$1 = state_14677;
var statearr_14755_18174 = state_14677__$1;
(statearr_14755_18174[(2)] = null);

(statearr_14755_18174[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14678 === (2))){
var state_14677__$1 = state_14677;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14677__$1,(4),from);
} else {
if((state_val_14678 === (11))){
var inst_14662 = (state_14677[(2)]);
var state_14677__$1 = state_14677;
if(cljs.core.truth_(inst_14662)){
var statearr_14760_18183 = state_14677__$1;
(statearr_14760_18183[(1)] = (12));

} else {
var statearr_14761_18184 = state_14677__$1;
(statearr_14761_18184[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14678 === (9))){
var state_14677__$1 = state_14677;
var statearr_14762_18185 = state_14677__$1;
(statearr_14762_18185[(2)] = null);

(statearr_14762_18185[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14678 === (5))){
var state_14677__$1 = state_14677;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14766_18187 = state_14677__$1;
(statearr_14766_18187[(1)] = (8));

} else {
var statearr_14767_18188 = state_14677__$1;
(statearr_14767_18188[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14678 === (14))){
var inst_14671 = (state_14677[(2)]);
var state_14677__$1 = state_14677;
var statearr_14768_18189 = state_14677__$1;
(statearr_14768_18189[(2)] = inst_14671);

(statearr_14768_18189[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14678 === (10))){
var inst_14658 = (state_14677[(2)]);
var state_14677__$1 = state_14677;
var statearr_14772_18197 = state_14677__$1;
(statearr_14772_18197[(2)] = inst_14658);

(statearr_14772_18197[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14678 === (8))){
var inst_14653 = cljs.core.async.close_BANG_(to);
var state_14677__$1 = state_14677;
var statearr_14773_18198 = state_14677__$1;
(statearr_14773_18198[(2)] = inst_14653);

(statearr_14773_18198[(1)] = (10));


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
var cljs$core$async$state_machine__13326__auto__ = null;
var cljs$core$async$state_machine__13326__auto____0 = (function (){
var statearr_14774 = [null,null,null,null,null,null,null,null];
(statearr_14774[(0)] = cljs$core$async$state_machine__13326__auto__);

(statearr_14774[(1)] = (1));

return statearr_14774;
});
var cljs$core$async$state_machine__13326__auto____1 = (function (state_14677){
while(true){
var ret_value__13328__auto__ = (function (){try{while(true){
var result__13329__auto__ = switch__13325__auto__(state_14677);
if(cljs.core.keyword_identical_QMARK_(result__13329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13329__auto__;
}
break;
}
}catch (e14776){var ex__13330__auto__ = e14776;
var statearr_14777_18199 = state_14677;
(statearr_14777_18199[(2)] = ex__13330__auto__);


if(cljs.core.seq((state_14677[(4)]))){
var statearr_14778_18201 = state_14677;
(statearr_14778_18201[(1)] = cljs.core.first((state_14677[(4)])));

} else {
throw ex__13330__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18202 = state_14677;
state_14677 = G__18202;
continue;
} else {
return ret_value__13328__auto__;
}
break;
}
});
cljs$core$async$state_machine__13326__auto__ = function(state_14677){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13326__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13326__auto____1.call(this,state_14677);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13326__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13326__auto____0;
cljs$core$async$state_machine__13326__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13326__auto____1;
return cljs$core$async$state_machine__13326__auto__;
})()
})();
var state__14143__auto__ = (function (){var statearr_14780 = f__14142__auto__();
(statearr_14780[(6)] = c__14141__auto___18161);

return statearr_14780;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14143__auto__);
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
var process__$1 = (function (p__14782){
var vec__14783 = p__14782;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14783,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14783,(1),null);
var job = vec__14783;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__14141__auto___18212 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14142__auto__ = (function (){var switch__13325__auto__ = (function (state_14791){
var state_val_14792 = (state_14791[(1)]);
if((state_val_14792 === (1))){
var state_14791__$1 = state_14791;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14791__$1,(2),res,v);
} else {
if((state_val_14792 === (2))){
var inst_14787 = (state_14791[(2)]);
var inst_14788 = cljs.core.async.close_BANG_(res);
var state_14791__$1 = (function (){var statearr_14795 = state_14791;
(statearr_14795[(7)] = inst_14787);

return statearr_14795;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_14791__$1,inst_14788);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13326__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13326__auto____0 = (function (){
var statearr_14796 = [null,null,null,null,null,null,null,null];
(statearr_14796[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13326__auto__);

(statearr_14796[(1)] = (1));

return statearr_14796;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13326__auto____1 = (function (state_14791){
while(true){
var ret_value__13328__auto__ = (function (){try{while(true){
var result__13329__auto__ = switch__13325__auto__(state_14791);
if(cljs.core.keyword_identical_QMARK_(result__13329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13329__auto__;
}
break;
}
}catch (e14797){var ex__13330__auto__ = e14797;
var statearr_14799_18216 = state_14791;
(statearr_14799_18216[(2)] = ex__13330__auto__);


if(cljs.core.seq((state_14791[(4)]))){
var statearr_14801_18217 = state_14791;
(statearr_14801_18217[(1)] = cljs.core.first((state_14791[(4)])));

} else {
throw ex__13330__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18218 = state_14791;
state_14791 = G__18218;
continue;
} else {
return ret_value__13328__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13326__auto__ = function(state_14791){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13326__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13326__auto____1.call(this,state_14791);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13326__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13326__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13326__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13326__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13326__auto__;
})()
})();
var state__14143__auto__ = (function (){var statearr_14807 = f__14142__auto__();
(statearr_14807[(6)] = c__14141__auto___18212);

return statearr_14807;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14143__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__14817){
var vec__14818 = p__14817;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14818,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14818,(1),null);
var job = vec__14818;
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
var n__5741__auto___18223 = n;
var __18224 = (0);
while(true){
if((__18224 < n__5741__auto___18223)){
var G__14824_18225 = type;
var G__14824_18226__$1 = (((G__14824_18225 instanceof cljs.core.Keyword))?G__14824_18225.fqn:null);
switch (G__14824_18226__$1) {
case "compute":
var c__14141__auto___18228 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__18224,c__14141__auto___18228,G__14824_18225,G__14824_18226__$1,n__5741__auto___18223,jobs,results,process__$1,async){
return (function (){
var f__14142__auto__ = (function (){var switch__13325__auto__ = ((function (__18224,c__14141__auto___18228,G__14824_18225,G__14824_18226__$1,n__5741__auto___18223,jobs,results,process__$1,async){
return (function (state_14837){
var state_val_14838 = (state_14837[(1)]);
if((state_val_14838 === (1))){
var state_14837__$1 = state_14837;
var statearr_14844_18230 = state_14837__$1;
(statearr_14844_18230[(2)] = null);

(statearr_14844_18230[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14838 === (2))){
var state_14837__$1 = state_14837;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14837__$1,(4),jobs);
} else {
if((state_val_14838 === (3))){
var inst_14835 = (state_14837[(2)]);
var state_14837__$1 = state_14837;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14837__$1,inst_14835);
} else {
if((state_val_14838 === (4))){
var inst_14827 = (state_14837[(2)]);
var inst_14828 = process__$1(inst_14827);
var state_14837__$1 = state_14837;
if(cljs.core.truth_(inst_14828)){
var statearr_14851_18235 = state_14837__$1;
(statearr_14851_18235[(1)] = (5));

} else {
var statearr_14852_18236 = state_14837__$1;
(statearr_14852_18236[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14838 === (5))){
var state_14837__$1 = state_14837;
var statearr_14854_18238 = state_14837__$1;
(statearr_14854_18238[(2)] = null);

(statearr_14854_18238[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14838 === (6))){
var state_14837__$1 = state_14837;
var statearr_14856_18239 = state_14837__$1;
(statearr_14856_18239[(2)] = null);

(statearr_14856_18239[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14838 === (7))){
var inst_14833 = (state_14837[(2)]);
var state_14837__$1 = state_14837;
var statearr_14861_18240 = state_14837__$1;
(statearr_14861_18240[(2)] = inst_14833);

(statearr_14861_18240[(1)] = (3));


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
});})(__18224,c__14141__auto___18228,G__14824_18225,G__14824_18226__$1,n__5741__auto___18223,jobs,results,process__$1,async))
;
return ((function (__18224,switch__13325__auto__,c__14141__auto___18228,G__14824_18225,G__14824_18226__$1,n__5741__auto___18223,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13326__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13326__auto____0 = (function (){
var statearr_14865 = [null,null,null,null,null,null,null];
(statearr_14865[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13326__auto__);

(statearr_14865[(1)] = (1));

return statearr_14865;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13326__auto____1 = (function (state_14837){
while(true){
var ret_value__13328__auto__ = (function (){try{while(true){
var result__13329__auto__ = switch__13325__auto__(state_14837);
if(cljs.core.keyword_identical_QMARK_(result__13329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13329__auto__;
}
break;
}
}catch (e14866){var ex__13330__auto__ = e14866;
var statearr_14867_18242 = state_14837;
(statearr_14867_18242[(2)] = ex__13330__auto__);


if(cljs.core.seq((state_14837[(4)]))){
var statearr_14874_18246 = state_14837;
(statearr_14874_18246[(1)] = cljs.core.first((state_14837[(4)])));

} else {
throw ex__13330__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18247 = state_14837;
state_14837 = G__18247;
continue;
} else {
return ret_value__13328__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13326__auto__ = function(state_14837){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13326__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13326__auto____1.call(this,state_14837);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13326__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13326__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13326__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13326__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13326__auto__;
})()
;})(__18224,switch__13325__auto__,c__14141__auto___18228,G__14824_18225,G__14824_18226__$1,n__5741__auto___18223,jobs,results,process__$1,async))
})();
var state__14143__auto__ = (function (){var statearr_14882 = f__14142__auto__();
(statearr_14882[(6)] = c__14141__auto___18228);

return statearr_14882;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14143__auto__);
});})(__18224,c__14141__auto___18228,G__14824_18225,G__14824_18226__$1,n__5741__auto___18223,jobs,results,process__$1,async))
);


break;
case "async":
var c__14141__auto___18250 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__18224,c__14141__auto___18250,G__14824_18225,G__14824_18226__$1,n__5741__auto___18223,jobs,results,process__$1,async){
return (function (){
var f__14142__auto__ = (function (){var switch__13325__auto__ = ((function (__18224,c__14141__auto___18250,G__14824_18225,G__14824_18226__$1,n__5741__auto___18223,jobs,results,process__$1,async){
return (function (state_14901){
var state_val_14902 = (state_14901[(1)]);
if((state_val_14902 === (1))){
var state_14901__$1 = state_14901;
var statearr_14911_18258 = state_14901__$1;
(statearr_14911_18258[(2)] = null);

(statearr_14911_18258[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14902 === (2))){
var state_14901__$1 = state_14901;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14901__$1,(4),jobs);
} else {
if((state_val_14902 === (3))){
var inst_14899 = (state_14901[(2)]);
var state_14901__$1 = state_14901;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14901__$1,inst_14899);
} else {
if((state_val_14902 === (4))){
var inst_14891 = (state_14901[(2)]);
var inst_14892 = async(inst_14891);
var state_14901__$1 = state_14901;
if(cljs.core.truth_(inst_14892)){
var statearr_14913_18259 = state_14901__$1;
(statearr_14913_18259[(1)] = (5));

} else {
var statearr_14914_18260 = state_14901__$1;
(statearr_14914_18260[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14902 === (5))){
var state_14901__$1 = state_14901;
var statearr_14915_18262 = state_14901__$1;
(statearr_14915_18262[(2)] = null);

(statearr_14915_18262[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14902 === (6))){
var state_14901__$1 = state_14901;
var statearr_14916_18263 = state_14901__$1;
(statearr_14916_18263[(2)] = null);

(statearr_14916_18263[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14902 === (7))){
var inst_14897 = (state_14901[(2)]);
var state_14901__$1 = state_14901;
var statearr_14918_18264 = state_14901__$1;
(statearr_14918_18264[(2)] = inst_14897);

(statearr_14918_18264[(1)] = (3));


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
});})(__18224,c__14141__auto___18250,G__14824_18225,G__14824_18226__$1,n__5741__auto___18223,jobs,results,process__$1,async))
;
return ((function (__18224,switch__13325__auto__,c__14141__auto___18250,G__14824_18225,G__14824_18226__$1,n__5741__auto___18223,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13326__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13326__auto____0 = (function (){
var statearr_14919 = [null,null,null,null,null,null,null];
(statearr_14919[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13326__auto__);

(statearr_14919[(1)] = (1));

return statearr_14919;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13326__auto____1 = (function (state_14901){
while(true){
var ret_value__13328__auto__ = (function (){try{while(true){
var result__13329__auto__ = switch__13325__auto__(state_14901);
if(cljs.core.keyword_identical_QMARK_(result__13329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13329__auto__;
}
break;
}
}catch (e14926){var ex__13330__auto__ = e14926;
var statearr_14928_18269 = state_14901;
(statearr_14928_18269[(2)] = ex__13330__auto__);


if(cljs.core.seq((state_14901[(4)]))){
var statearr_14935_18270 = state_14901;
(statearr_14935_18270[(1)] = cljs.core.first((state_14901[(4)])));

} else {
throw ex__13330__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18271 = state_14901;
state_14901 = G__18271;
continue;
} else {
return ret_value__13328__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13326__auto__ = function(state_14901){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13326__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13326__auto____1.call(this,state_14901);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13326__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13326__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13326__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13326__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13326__auto__;
})()
;})(__18224,switch__13325__auto__,c__14141__auto___18250,G__14824_18225,G__14824_18226__$1,n__5741__auto___18223,jobs,results,process__$1,async))
})();
var state__14143__auto__ = (function (){var statearr_14940 = f__14142__auto__();
(statearr_14940[(6)] = c__14141__auto___18250);

return statearr_14940;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14143__auto__);
});})(__18224,c__14141__auto___18250,G__14824_18225,G__14824_18226__$1,n__5741__auto___18223,jobs,results,process__$1,async))
);


break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14824_18226__$1))));

}

var G__18272 = (__18224 + (1));
__18224 = G__18272;
continue;
} else {
}
break;
}

var c__14141__auto___18274 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14142__auto__ = (function (){var switch__13325__auto__ = (function (state_14970){
var state_val_14972 = (state_14970[(1)]);
if((state_val_14972 === (7))){
var inst_14964 = (state_14970[(2)]);
var state_14970__$1 = state_14970;
var statearr_14988_18276 = state_14970__$1;
(statearr_14988_18276[(2)] = inst_14964);

(statearr_14988_18276[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14972 === (1))){
var state_14970__$1 = state_14970;
var statearr_14991_18277 = state_14970__$1;
(statearr_14991_18277[(2)] = null);

(statearr_14991_18277[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14972 === (4))){
var inst_14945 = (state_14970[(7)]);
var inst_14945__$1 = (state_14970[(2)]);
var inst_14947 = (inst_14945__$1 == null);
var state_14970__$1 = (function (){var statearr_14997 = state_14970;
(statearr_14997[(7)] = inst_14945__$1);

return statearr_14997;
})();
if(cljs.core.truth_(inst_14947)){
var statearr_14998_18279 = state_14970__$1;
(statearr_14998_18279[(1)] = (5));

} else {
var statearr_14999_18282 = state_14970__$1;
(statearr_14999_18282[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14972 === (6))){
var inst_14945 = (state_14970[(7)]);
var inst_14951 = (state_14970[(8)]);
var inst_14951__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_14953 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_14955 = [inst_14945,inst_14951__$1];
var inst_14956 = (new cljs.core.PersistentVector(null,2,(5),inst_14953,inst_14955,null));
var state_14970__$1 = (function (){var statearr_15001 = state_14970;
(statearr_15001[(8)] = inst_14951__$1);

return statearr_15001;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14970__$1,(8),jobs,inst_14956);
} else {
if((state_val_14972 === (3))){
var inst_14966 = (state_14970[(2)]);
var state_14970__$1 = state_14970;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14970__$1,inst_14966);
} else {
if((state_val_14972 === (2))){
var state_14970__$1 = state_14970;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14970__$1,(4),from);
} else {
if((state_val_14972 === (9))){
var inst_14960 = (state_14970[(2)]);
var state_14970__$1 = (function (){var statearr_15014 = state_14970;
(statearr_15014[(9)] = inst_14960);

return statearr_15014;
})();
var statearr_15016_18289 = state_14970__$1;
(statearr_15016_18289[(2)] = null);

(statearr_15016_18289[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14972 === (5))){
var inst_14949 = cljs.core.async.close_BANG_(jobs);
var state_14970__$1 = state_14970;
var statearr_15020_18291 = state_14970__$1;
(statearr_15020_18291[(2)] = inst_14949);

(statearr_15020_18291[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14972 === (8))){
var inst_14951 = (state_14970[(8)]);
var inst_14958 = (state_14970[(2)]);
var state_14970__$1 = (function (){var statearr_15022 = state_14970;
(statearr_15022[(10)] = inst_14958);

return statearr_15022;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14970__$1,(9),results,inst_14951);
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
var cljs$core$async$pipeline_STAR__$_state_machine__13326__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13326__auto____0 = (function (){
var statearr_15028 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15028[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13326__auto__);

(statearr_15028[(1)] = (1));

return statearr_15028;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13326__auto____1 = (function (state_14970){
while(true){
var ret_value__13328__auto__ = (function (){try{while(true){
var result__13329__auto__ = switch__13325__auto__(state_14970);
if(cljs.core.keyword_identical_QMARK_(result__13329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13329__auto__;
}
break;
}
}catch (e15030){var ex__13330__auto__ = e15030;
var statearr_15031_18297 = state_14970;
(statearr_15031_18297[(2)] = ex__13330__auto__);


if(cljs.core.seq((state_14970[(4)]))){
var statearr_15033_18299 = state_14970;
(statearr_15033_18299[(1)] = cljs.core.first((state_14970[(4)])));

} else {
throw ex__13330__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18304 = state_14970;
state_14970 = G__18304;
continue;
} else {
return ret_value__13328__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13326__auto__ = function(state_14970){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13326__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13326__auto____1.call(this,state_14970);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13326__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13326__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13326__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13326__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13326__auto__;
})()
})();
var state__14143__auto__ = (function (){var statearr_15042 = f__14142__auto__();
(statearr_15042[(6)] = c__14141__auto___18274);

return statearr_15042;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14143__auto__);
}));


var c__14141__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14142__auto__ = (function (){var switch__13325__auto__ = (function (state_15088){
var state_val_15090 = (state_15088[(1)]);
if((state_val_15090 === (7))){
var inst_15081 = (state_15088[(2)]);
var state_15088__$1 = state_15088;
var statearr_15099_18306 = state_15088__$1;
(statearr_15099_18306[(2)] = inst_15081);

(statearr_15099_18306[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15090 === (20))){
var state_15088__$1 = state_15088;
var statearr_15101_18307 = state_15088__$1;
(statearr_15101_18307[(2)] = null);

(statearr_15101_18307[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15090 === (1))){
var state_15088__$1 = state_15088;
var statearr_15102_18308 = state_15088__$1;
(statearr_15102_18308[(2)] = null);

(statearr_15102_18308[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15090 === (4))){
var inst_15046 = (state_15088[(7)]);
var inst_15046__$1 = (state_15088[(2)]);
var inst_15047 = (inst_15046__$1 == null);
var state_15088__$1 = (function (){var statearr_15109 = state_15088;
(statearr_15109[(7)] = inst_15046__$1);

return statearr_15109;
})();
if(cljs.core.truth_(inst_15047)){
var statearr_15112_18310 = state_15088__$1;
(statearr_15112_18310[(1)] = (5));

} else {
var statearr_15113_18311 = state_15088__$1;
(statearr_15113_18311[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15090 === (15))){
var inst_15060 = (state_15088[(8)]);
var state_15088__$1 = state_15088;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15088__$1,(18),to,inst_15060);
} else {
if((state_val_15090 === (21))){
var inst_15076 = (state_15088[(2)]);
var state_15088__$1 = state_15088;
var statearr_15117_18313 = state_15088__$1;
(statearr_15117_18313[(2)] = inst_15076);

(statearr_15117_18313[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15090 === (13))){
var inst_15078 = (state_15088[(2)]);
var state_15088__$1 = (function (){var statearr_15118 = state_15088;
(statearr_15118[(9)] = inst_15078);

return statearr_15118;
})();
var statearr_15119_18317 = state_15088__$1;
(statearr_15119_18317[(2)] = null);

(statearr_15119_18317[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15090 === (6))){
var inst_15046 = (state_15088[(7)]);
var state_15088__$1 = state_15088;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15088__$1,(11),inst_15046);
} else {
if((state_val_15090 === (17))){
var inst_15070 = (state_15088[(2)]);
var state_15088__$1 = state_15088;
if(cljs.core.truth_(inst_15070)){
var statearr_15123_18318 = state_15088__$1;
(statearr_15123_18318[(1)] = (19));

} else {
var statearr_15124_18319 = state_15088__$1;
(statearr_15124_18319[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15090 === (3))){
var inst_15083 = (state_15088[(2)]);
var state_15088__$1 = state_15088;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15088__$1,inst_15083);
} else {
if((state_val_15090 === (12))){
var inst_15057 = (state_15088[(10)]);
var state_15088__$1 = state_15088;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15088__$1,(14),inst_15057);
} else {
if((state_val_15090 === (2))){
var state_15088__$1 = state_15088;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15088__$1,(4),results);
} else {
if((state_val_15090 === (19))){
var state_15088__$1 = state_15088;
var statearr_15129_18324 = state_15088__$1;
(statearr_15129_18324[(2)] = null);

(statearr_15129_18324[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15090 === (11))){
var inst_15057 = (state_15088[(2)]);
var state_15088__$1 = (function (){var statearr_15134 = state_15088;
(statearr_15134[(10)] = inst_15057);

return statearr_15134;
})();
var statearr_15135_18331 = state_15088__$1;
(statearr_15135_18331[(2)] = null);

(statearr_15135_18331[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15090 === (9))){
var state_15088__$1 = state_15088;
var statearr_15137_18332 = state_15088__$1;
(statearr_15137_18332[(2)] = null);

(statearr_15137_18332[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15090 === (5))){
var state_15088__$1 = state_15088;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15138_18333 = state_15088__$1;
(statearr_15138_18333[(1)] = (8));

} else {
var statearr_15139_18334 = state_15088__$1;
(statearr_15139_18334[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15090 === (14))){
var inst_15060 = (state_15088[(8)]);
var inst_15063 = (state_15088[(11)]);
var inst_15060__$1 = (state_15088[(2)]);
var inst_15062 = (inst_15060__$1 == null);
var inst_15063__$1 = cljs.core.not(inst_15062);
var state_15088__$1 = (function (){var statearr_15141 = state_15088;
(statearr_15141[(8)] = inst_15060__$1);

(statearr_15141[(11)] = inst_15063__$1);

return statearr_15141;
})();
if(inst_15063__$1){
var statearr_15142_18335 = state_15088__$1;
(statearr_15142_18335[(1)] = (15));

} else {
var statearr_15143_18336 = state_15088__$1;
(statearr_15143_18336[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15090 === (16))){
var inst_15063 = (state_15088[(11)]);
var state_15088__$1 = state_15088;
var statearr_15148_18341 = state_15088__$1;
(statearr_15148_18341[(2)] = inst_15063);

(statearr_15148_18341[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15090 === (10))){
var inst_15054 = (state_15088[(2)]);
var state_15088__$1 = state_15088;
var statearr_15153_18346 = state_15088__$1;
(statearr_15153_18346[(2)] = inst_15054);

(statearr_15153_18346[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15090 === (18))){
var inst_15066 = (state_15088[(2)]);
var state_15088__$1 = state_15088;
var statearr_15158_18351 = state_15088__$1;
(statearr_15158_18351[(2)] = inst_15066);

(statearr_15158_18351[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15090 === (8))){
var inst_15051 = cljs.core.async.close_BANG_(to);
var state_15088__$1 = state_15088;
var statearr_15160_18355 = state_15088__$1;
(statearr_15160_18355[(2)] = inst_15051);

(statearr_15160_18355[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__13326__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13326__auto____0 = (function (){
var statearr_15162 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15162[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13326__auto__);

(statearr_15162[(1)] = (1));

return statearr_15162;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13326__auto____1 = (function (state_15088){
while(true){
var ret_value__13328__auto__ = (function (){try{while(true){
var result__13329__auto__ = switch__13325__auto__(state_15088);
if(cljs.core.keyword_identical_QMARK_(result__13329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13329__auto__;
}
break;
}
}catch (e15167){var ex__13330__auto__ = e15167;
var statearr_15168_18380 = state_15088;
(statearr_15168_18380[(2)] = ex__13330__auto__);


if(cljs.core.seq((state_15088[(4)]))){
var statearr_15169_18382 = state_15088;
(statearr_15169_18382[(1)] = cljs.core.first((state_15088[(4)])));

} else {
throw ex__13330__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18394 = state_15088;
state_15088 = G__18394;
continue;
} else {
return ret_value__13328__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13326__auto__ = function(state_15088){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13326__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13326__auto____1.call(this,state_15088);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13326__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13326__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13326__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13326__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13326__auto__;
})()
})();
var state__14143__auto__ = (function (){var statearr_15172 = f__14142__auto__();
(statearr_15172[(6)] = c__14141__auto__);

return statearr_15172;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14143__auto__);
}));

return c__14141__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__15180 = arguments.length;
switch (G__15180) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

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
var G__15190 = arguments.length;
switch (G__15190) {
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
throw (new Error(["Invalid arity: ",arguments.length].join("")));

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
var G__15221 = arguments.length;
switch (G__15221) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__14141__auto___18432 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14142__auto__ = (function (){var switch__13325__auto__ = (function (state_15273){
var state_val_15274 = (state_15273[(1)]);
if((state_val_15274 === (7))){
var inst_15267 = (state_15273[(2)]);
var state_15273__$1 = state_15273;
var statearr_15279_18433 = state_15273__$1;
(statearr_15279_18433[(2)] = inst_15267);

(statearr_15279_18433[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15274 === (1))){
var state_15273__$1 = state_15273;
var statearr_15281_18438 = state_15273__$1;
(statearr_15281_18438[(2)] = null);

(statearr_15281_18438[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15274 === (4))){
var inst_15247 = (state_15273[(7)]);
var inst_15247__$1 = (state_15273[(2)]);
var inst_15248 = (inst_15247__$1 == null);
var state_15273__$1 = (function (){var statearr_15282 = state_15273;
(statearr_15282[(7)] = inst_15247__$1);

return statearr_15282;
})();
if(cljs.core.truth_(inst_15248)){
var statearr_15283_18439 = state_15273__$1;
(statearr_15283_18439[(1)] = (5));

} else {
var statearr_15285_18446 = state_15273__$1;
(statearr_15285_18446[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15274 === (13))){
var state_15273__$1 = state_15273;
var statearr_15289_18447 = state_15273__$1;
(statearr_15289_18447[(2)] = null);

(statearr_15289_18447[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15274 === (6))){
var inst_15247 = (state_15273[(7)]);
var inst_15254 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_15247) : p.call(null,inst_15247));
var state_15273__$1 = state_15273;
if(cljs.core.truth_(inst_15254)){
var statearr_15295_18458 = state_15273__$1;
(statearr_15295_18458[(1)] = (9));

} else {
var statearr_15297_18462 = state_15273__$1;
(statearr_15297_18462[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15274 === (3))){
var inst_15269 = (state_15273[(2)]);
var state_15273__$1 = state_15273;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15273__$1,inst_15269);
} else {
if((state_val_15274 === (12))){
var state_15273__$1 = state_15273;
var statearr_15299_18464 = state_15273__$1;
(statearr_15299_18464[(2)] = null);

(statearr_15299_18464[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15274 === (2))){
var state_15273__$1 = state_15273;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15273__$1,(4),ch);
} else {
if((state_val_15274 === (11))){
var inst_15247 = (state_15273[(7)]);
var inst_15258 = (state_15273[(2)]);
var state_15273__$1 = state_15273;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15273__$1,(8),inst_15258,inst_15247);
} else {
if((state_val_15274 === (9))){
var state_15273__$1 = state_15273;
var statearr_15304_18469 = state_15273__$1;
(statearr_15304_18469[(2)] = tc);

(statearr_15304_18469[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15274 === (5))){
var inst_15250 = cljs.core.async.close_BANG_(tc);
var inst_15251 = cljs.core.async.close_BANG_(fc);
var state_15273__$1 = (function (){var statearr_15305 = state_15273;
(statearr_15305[(8)] = inst_15250);

return statearr_15305;
})();
var statearr_15306_18472 = state_15273__$1;
(statearr_15306_18472[(2)] = inst_15251);

(statearr_15306_18472[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15274 === (14))){
var inst_15265 = (state_15273[(2)]);
var state_15273__$1 = state_15273;
var statearr_15307_18474 = state_15273__$1;
(statearr_15307_18474[(2)] = inst_15265);

(statearr_15307_18474[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15274 === (10))){
var state_15273__$1 = state_15273;
var statearr_15315_18475 = state_15273__$1;
(statearr_15315_18475[(2)] = fc);

(statearr_15315_18475[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15274 === (8))){
var inst_15260 = (state_15273[(2)]);
var state_15273__$1 = state_15273;
if(cljs.core.truth_(inst_15260)){
var statearr_15322_18477 = state_15273__$1;
(statearr_15322_18477[(1)] = (12));

} else {
var statearr_15328_18478 = state_15273__$1;
(statearr_15328_18478[(1)] = (13));

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
var cljs$core$async$state_machine__13326__auto__ = null;
var cljs$core$async$state_machine__13326__auto____0 = (function (){
var statearr_15348 = [null,null,null,null,null,null,null,null,null];
(statearr_15348[(0)] = cljs$core$async$state_machine__13326__auto__);

(statearr_15348[(1)] = (1));

return statearr_15348;
});
var cljs$core$async$state_machine__13326__auto____1 = (function (state_15273){
while(true){
var ret_value__13328__auto__ = (function (){try{while(true){
var result__13329__auto__ = switch__13325__auto__(state_15273);
if(cljs.core.keyword_identical_QMARK_(result__13329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13329__auto__;
}
break;
}
}catch (e15359){var ex__13330__auto__ = e15359;
var statearr_15362_18480 = state_15273;
(statearr_15362_18480[(2)] = ex__13330__auto__);


if(cljs.core.seq((state_15273[(4)]))){
var statearr_15369_18481 = state_15273;
(statearr_15369_18481[(1)] = cljs.core.first((state_15273[(4)])));

} else {
throw ex__13330__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18485 = state_15273;
state_15273 = G__18485;
continue;
} else {
return ret_value__13328__auto__;
}
break;
}
});
cljs$core$async$state_machine__13326__auto__ = function(state_15273){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13326__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13326__auto____1.call(this,state_15273);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13326__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13326__auto____0;
cljs$core$async$state_machine__13326__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13326__auto____1;
return cljs$core$async$state_machine__13326__auto__;
})()
})();
var state__14143__auto__ = (function (){var statearr_15386 = f__14142__auto__();
(statearr_15386[(6)] = c__14141__auto___18432);

return statearr_15386;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14143__auto__);
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
var c__14141__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14142__auto__ = (function (){var switch__13325__auto__ = (function (state_15445){
var state_val_15446 = (state_15445[(1)]);
if((state_val_15446 === (7))){
var inst_15436 = (state_15445[(2)]);
var state_15445__$1 = state_15445;
var statearr_15458_18486 = state_15445__$1;
(statearr_15458_18486[(2)] = inst_15436);

(statearr_15458_18486[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15446 === (1))){
var inst_15414 = init;
var inst_15416 = inst_15414;
var state_15445__$1 = (function (){var statearr_15459 = state_15445;
(statearr_15459[(7)] = inst_15416);

return statearr_15459;
})();
var statearr_15461_18492 = state_15445__$1;
(statearr_15461_18492[(2)] = null);

(statearr_15461_18492[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15446 === (4))){
var inst_15419 = (state_15445[(8)]);
var inst_15419__$1 = (state_15445[(2)]);
var inst_15420 = (inst_15419__$1 == null);
var state_15445__$1 = (function (){var statearr_15470 = state_15445;
(statearr_15470[(8)] = inst_15419__$1);

return statearr_15470;
})();
if(cljs.core.truth_(inst_15420)){
var statearr_15471_18493 = state_15445__$1;
(statearr_15471_18493[(1)] = (5));

} else {
var statearr_15472_18494 = state_15445__$1;
(statearr_15472_18494[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15446 === (6))){
var inst_15416 = (state_15445[(7)]);
var inst_15419 = (state_15445[(8)]);
var inst_15423 = (state_15445[(9)]);
var inst_15423__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_15416,inst_15419) : f.call(null,inst_15416,inst_15419));
var inst_15428 = cljs.core.reduced_QMARK_(inst_15423__$1);
var state_15445__$1 = (function (){var statearr_15475 = state_15445;
(statearr_15475[(9)] = inst_15423__$1);

return statearr_15475;
})();
if(inst_15428){
var statearr_15477_18500 = state_15445__$1;
(statearr_15477_18500[(1)] = (8));

} else {
var statearr_15480_18501 = state_15445__$1;
(statearr_15480_18501[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15446 === (3))){
var inst_15438 = (state_15445[(2)]);
var state_15445__$1 = state_15445;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15445__$1,inst_15438);
} else {
if((state_val_15446 === (2))){
var state_15445__$1 = state_15445;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15445__$1,(4),ch);
} else {
if((state_val_15446 === (9))){
var inst_15423 = (state_15445[(9)]);
var inst_15416 = inst_15423;
var state_15445__$1 = (function (){var statearr_15482 = state_15445;
(statearr_15482[(7)] = inst_15416);

return statearr_15482;
})();
var statearr_15485_18505 = state_15445__$1;
(statearr_15485_18505[(2)] = null);

(statearr_15485_18505[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15446 === (5))){
var inst_15416 = (state_15445[(7)]);
var state_15445__$1 = state_15445;
var statearr_15489_18506 = state_15445__$1;
(statearr_15489_18506[(2)] = inst_15416);

(statearr_15489_18506[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15446 === (10))){
var inst_15434 = (state_15445[(2)]);
var state_15445__$1 = state_15445;
var statearr_15490_18510 = state_15445__$1;
(statearr_15490_18510[(2)] = inst_15434);

(statearr_15490_18510[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15446 === (8))){
var inst_15423 = (state_15445[(9)]);
var inst_15430 = cljs.core.deref(inst_15423);
var state_15445__$1 = state_15445;
var statearr_15491_18511 = state_15445__$1;
(statearr_15491_18511[(2)] = inst_15430);

(statearr_15491_18511[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__13326__auto__ = null;
var cljs$core$async$reduce_$_state_machine__13326__auto____0 = (function (){
var statearr_15494 = [null,null,null,null,null,null,null,null,null,null];
(statearr_15494[(0)] = cljs$core$async$reduce_$_state_machine__13326__auto__);

(statearr_15494[(1)] = (1));

return statearr_15494;
});
var cljs$core$async$reduce_$_state_machine__13326__auto____1 = (function (state_15445){
while(true){
var ret_value__13328__auto__ = (function (){try{while(true){
var result__13329__auto__ = switch__13325__auto__(state_15445);
if(cljs.core.keyword_identical_QMARK_(result__13329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13329__auto__;
}
break;
}
}catch (e15497){var ex__13330__auto__ = e15497;
var statearr_15498_18516 = state_15445;
(statearr_15498_18516[(2)] = ex__13330__auto__);


if(cljs.core.seq((state_15445[(4)]))){
var statearr_15499_18517 = state_15445;
(statearr_15499_18517[(1)] = cljs.core.first((state_15445[(4)])));

} else {
throw ex__13330__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18518 = state_15445;
state_15445 = G__18518;
continue;
} else {
return ret_value__13328__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__13326__auto__ = function(state_15445){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__13326__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__13326__auto____1.call(this,state_15445);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__13326__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__13326__auto____0;
cljs$core$async$reduce_$_state_machine__13326__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__13326__auto____1;
return cljs$core$async$reduce_$_state_machine__13326__auto__;
})()
})();
var state__14143__auto__ = (function (){var statearr_15504 = f__14142__auto__();
(statearr_15504[(6)] = c__14141__auto__);

return statearr_15504;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14143__auto__);
}));

return c__14141__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__14141__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14142__auto__ = (function (){var switch__13325__auto__ = (function (state_15518){
var state_val_15519 = (state_15518[(1)]);
if((state_val_15519 === (1))){
var inst_15510 = cljs.core.async.reduce(f__$1,init,ch);
var state_15518__$1 = state_15518;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15518__$1,(2),inst_15510);
} else {
if((state_val_15519 === (2))){
var inst_15512 = (state_15518[(2)]);
var inst_15513 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_15512) : f__$1.call(null,inst_15512));
var state_15518__$1 = state_15518;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15518__$1,inst_15513);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__13326__auto__ = null;
var cljs$core$async$transduce_$_state_machine__13326__auto____0 = (function (){
var statearr_15546 = [null,null,null,null,null,null,null];
(statearr_15546[(0)] = cljs$core$async$transduce_$_state_machine__13326__auto__);

(statearr_15546[(1)] = (1));

return statearr_15546;
});
var cljs$core$async$transduce_$_state_machine__13326__auto____1 = (function (state_15518){
while(true){
var ret_value__13328__auto__ = (function (){try{while(true){
var result__13329__auto__ = switch__13325__auto__(state_15518);
if(cljs.core.keyword_identical_QMARK_(result__13329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13329__auto__;
}
break;
}
}catch (e15548){var ex__13330__auto__ = e15548;
var statearr_15553_18527 = state_15518;
(statearr_15553_18527[(2)] = ex__13330__auto__);


if(cljs.core.seq((state_15518[(4)]))){
var statearr_15558_18531 = state_15518;
(statearr_15558_18531[(1)] = cljs.core.first((state_15518[(4)])));

} else {
throw ex__13330__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18533 = state_15518;
state_15518 = G__18533;
continue;
} else {
return ret_value__13328__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__13326__auto__ = function(state_15518){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__13326__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__13326__auto____1.call(this,state_15518);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__13326__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__13326__auto____0;
cljs$core$async$transduce_$_state_machine__13326__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__13326__auto____1;
return cljs$core$async$transduce_$_state_machine__13326__auto__;
})()
})();
var state__14143__auto__ = (function (){var statearr_15578 = f__14142__auto__();
(statearr_15578[(6)] = c__14141__auto__);

return statearr_15578;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14143__auto__);
}));

return c__14141__auto__;
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
var G__15588 = arguments.length;
switch (G__15588) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__14141__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14142__auto__ = (function (){var switch__13325__auto__ = (function (state_15627){
var state_val_15628 = (state_15627[(1)]);
if((state_val_15628 === (7))){
var inst_15601 = (state_15627[(2)]);
var state_15627__$1 = state_15627;
var statearr_15631_18536 = state_15627__$1;
(statearr_15631_18536[(2)] = inst_15601);

(statearr_15631_18536[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15628 === (1))){
var inst_15591 = cljs.core.seq(coll);
var inst_15592 = inst_15591;
var state_15627__$1 = (function (){var statearr_15632 = state_15627;
(statearr_15632[(7)] = inst_15592);

return statearr_15632;
})();
var statearr_15634_18537 = state_15627__$1;
(statearr_15634_18537[(2)] = null);

(statearr_15634_18537[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15628 === (4))){
var inst_15592 = (state_15627[(7)]);
var inst_15595 = cljs.core.first(inst_15592);
var state_15627__$1 = state_15627;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15627__$1,(7),ch,inst_15595);
} else {
if((state_val_15628 === (13))){
var inst_15617 = (state_15627[(2)]);
var state_15627__$1 = state_15627;
var statearr_15639_18539 = state_15627__$1;
(statearr_15639_18539[(2)] = inst_15617);

(statearr_15639_18539[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15628 === (6))){
var inst_15604 = (state_15627[(2)]);
var state_15627__$1 = state_15627;
if(cljs.core.truth_(inst_15604)){
var statearr_15642_18544 = state_15627__$1;
(statearr_15642_18544[(1)] = (8));

} else {
var statearr_15643_18545 = state_15627__$1;
(statearr_15643_18545[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15628 === (3))){
var inst_15621 = (state_15627[(2)]);
var state_15627__$1 = state_15627;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15627__$1,inst_15621);
} else {
if((state_val_15628 === (12))){
var state_15627__$1 = state_15627;
var statearr_15646_18546 = state_15627__$1;
(statearr_15646_18546[(2)] = null);

(statearr_15646_18546[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15628 === (2))){
var inst_15592 = (state_15627[(7)]);
var state_15627__$1 = state_15627;
if(cljs.core.truth_(inst_15592)){
var statearr_15647_18548 = state_15627__$1;
(statearr_15647_18548[(1)] = (4));

} else {
var statearr_15649_18549 = state_15627__$1;
(statearr_15649_18549[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15628 === (11))){
var inst_15614 = cljs.core.async.close_BANG_(ch);
var state_15627__$1 = state_15627;
var statearr_15651_18553 = state_15627__$1;
(statearr_15651_18553[(2)] = inst_15614);

(statearr_15651_18553[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15628 === (9))){
var state_15627__$1 = state_15627;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15652_18554 = state_15627__$1;
(statearr_15652_18554[(1)] = (11));

} else {
var statearr_15655_18555 = state_15627__$1;
(statearr_15655_18555[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15628 === (5))){
var inst_15592 = (state_15627[(7)]);
var state_15627__$1 = state_15627;
var statearr_15657_18556 = state_15627__$1;
(statearr_15657_18556[(2)] = inst_15592);

(statearr_15657_18556[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15628 === (10))){
var inst_15619 = (state_15627[(2)]);
var state_15627__$1 = state_15627;
var statearr_15659_18557 = state_15627__$1;
(statearr_15659_18557[(2)] = inst_15619);

(statearr_15659_18557[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15628 === (8))){
var inst_15592 = (state_15627[(7)]);
var inst_15606 = cljs.core.next(inst_15592);
var inst_15592__$1 = inst_15606;
var state_15627__$1 = (function (){var statearr_15663 = state_15627;
(statearr_15663[(7)] = inst_15592__$1);

return statearr_15663;
})();
var statearr_15664_18565 = state_15627__$1;
(statearr_15664_18565[(2)] = null);

(statearr_15664_18565[(1)] = (2));


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
var cljs$core$async$state_machine__13326__auto__ = null;
var cljs$core$async$state_machine__13326__auto____0 = (function (){
var statearr_15668 = [null,null,null,null,null,null,null,null];
(statearr_15668[(0)] = cljs$core$async$state_machine__13326__auto__);

(statearr_15668[(1)] = (1));

return statearr_15668;
});
var cljs$core$async$state_machine__13326__auto____1 = (function (state_15627){
while(true){
var ret_value__13328__auto__ = (function (){try{while(true){
var result__13329__auto__ = switch__13325__auto__(state_15627);
if(cljs.core.keyword_identical_QMARK_(result__13329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13329__auto__;
}
break;
}
}catch (e15670){var ex__13330__auto__ = e15670;
var statearr_15671_18569 = state_15627;
(statearr_15671_18569[(2)] = ex__13330__auto__);


if(cljs.core.seq((state_15627[(4)]))){
var statearr_15675_18570 = state_15627;
(statearr_15675_18570[(1)] = cljs.core.first((state_15627[(4)])));

} else {
throw ex__13330__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18571 = state_15627;
state_15627 = G__18571;
continue;
} else {
return ret_value__13328__auto__;
}
break;
}
});
cljs$core$async$state_machine__13326__auto__ = function(state_15627){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13326__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13326__auto____1.call(this,state_15627);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13326__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13326__auto____0;
cljs$core$async$state_machine__13326__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13326__auto____1;
return cljs$core$async$state_machine__13326__auto__;
})()
})();
var state__14143__auto__ = (function (){var statearr_15679 = f__14142__auto__();
(statearr_15679[(6)] = c__14141__auto__);

return statearr_15679;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14143__auto__);
}));

return c__14141__auto__;
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
var G__15686 = arguments.length;
switch (G__15686) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

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

var cljs$core$async$Mux$muxch_STAR_$dyn_18579 = (function (_){
var x__5498__auto__ = (((_ == null))?null:_);
var m__5499__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5499__auto__.call(null,_));
} else {
var m__5497__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5497__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_18579(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_18581 = (function (m,ch,close_QMARK_){
var x__5498__auto__ = (((m == null))?null:m);
var m__5499__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5499__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5497__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5497__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_18581(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_18587 = (function (m,ch){
var x__5498__auto__ = (((m == null))?null:m);
var m__5499__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5499__auto__.call(null,m,ch));
} else {
var m__5497__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5497__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_18587(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_18589 = (function (m){
var x__5498__auto__ = (((m == null))?null:m);
var m__5499__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5499__auto__.call(null,m));
} else {
var m__5497__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5497__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_18589(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15819 = (function (ch,cs,meta15820){
this.ch = ch;
this.cs = cs;
this.meta15820 = meta15820;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15819.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15821,meta15820__$1){
var self__ = this;
var _15821__$1 = this;
return (new cljs.core.async.t_cljs$core$async15819(self__.ch,self__.cs,meta15820__$1));
}));

(cljs.core.async.t_cljs$core$async15819.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15821){
var self__ = this;
var _15821__$1 = this;
return self__.meta15820;
}));

(cljs.core.async.t_cljs$core$async15819.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15819.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async15819.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15819.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async15819.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async15819.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async15819.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta15820","meta15820",-2094422423,null)], null);
}));

(cljs.core.async.t_cljs$core$async15819.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15819.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15819");

(cljs.core.async.t_cljs$core$async15819.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async15819");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15819.
 */
cljs.core.async.__GT_t_cljs$core$async15819 = (function cljs$core$async$__GT_t_cljs$core$async15819(ch,cs,meta15820){
return (new cljs.core.async.t_cljs$core$async15819(ch,cs,meta15820));
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
var m = (new cljs.core.async.t_cljs$core$async15819(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__14141__auto___18605 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14142__auto__ = (function (){var switch__13325__auto__ = (function (state_16009){
var state_val_16010 = (state_16009[(1)]);
if((state_val_16010 === (7))){
var inst_16005 = (state_16009[(2)]);
var state_16009__$1 = state_16009;
var statearr_16013_18606 = state_16009__$1;
(statearr_16013_18606[(2)] = inst_16005);

(statearr_16013_18606[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16010 === (20))){
var inst_15899 = (state_16009[(7)]);
var inst_15912 = cljs.core.first(inst_15899);
var inst_15913 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15912,(0),null);
var inst_15914 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15912,(1),null);
var state_16009__$1 = (function (){var statearr_16016 = state_16009;
(statearr_16016[(8)] = inst_15913);

return statearr_16016;
})();
if(cljs.core.truth_(inst_15914)){
var statearr_16019_18608 = state_16009__$1;
(statearr_16019_18608[(1)] = (22));

} else {
var statearr_16020_18609 = state_16009__$1;
(statearr_16020_18609[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16010 === (27))){
var inst_15943 = (state_16009[(9)]);
var inst_15945 = (state_16009[(10)]);
var inst_15954 = (state_16009[(11)]);
var inst_15863 = (state_16009[(12)]);
var inst_15954__$1 = cljs.core._nth(inst_15943,inst_15945);
var inst_15955 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_15954__$1,inst_15863,done);
var state_16009__$1 = (function (){var statearr_16025 = state_16009;
(statearr_16025[(11)] = inst_15954__$1);

return statearr_16025;
})();
if(cljs.core.truth_(inst_15955)){
var statearr_16026_18614 = state_16009__$1;
(statearr_16026_18614[(1)] = (30));

} else {
var statearr_16027_18615 = state_16009__$1;
(statearr_16027_18615[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16010 === (1))){
var state_16009__$1 = state_16009;
var statearr_16031_18616 = state_16009__$1;
(statearr_16031_18616[(2)] = null);

(statearr_16031_18616[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16010 === (24))){
var inst_15899 = (state_16009[(7)]);
var inst_15920 = (state_16009[(2)]);
var inst_15921 = cljs.core.next(inst_15899);
var inst_15874 = inst_15921;
var inst_15875 = null;
var inst_15876 = (0);
var inst_15877 = (0);
var state_16009__$1 = (function (){var statearr_16037 = state_16009;
(statearr_16037[(13)] = inst_15920);

(statearr_16037[(14)] = inst_15874);

(statearr_16037[(15)] = inst_15875);

(statearr_16037[(16)] = inst_15876);

(statearr_16037[(17)] = inst_15877);

return statearr_16037;
})();
var statearr_16038_18617 = state_16009__$1;
(statearr_16038_18617[(2)] = null);

(statearr_16038_18617[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16010 === (39))){
var state_16009__$1 = state_16009;
var statearr_16042_18619 = state_16009__$1;
(statearr_16042_18619[(2)] = null);

(statearr_16042_18619[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16010 === (4))){
var inst_15863 = (state_16009[(12)]);
var inst_15863__$1 = (state_16009[(2)]);
var inst_15864 = (inst_15863__$1 == null);
var state_16009__$1 = (function (){var statearr_16044 = state_16009;
(statearr_16044[(12)] = inst_15863__$1);

return statearr_16044;
})();
if(cljs.core.truth_(inst_15864)){
var statearr_16045_18620 = state_16009__$1;
(statearr_16045_18620[(1)] = (5));

} else {
var statearr_16046_18621 = state_16009__$1;
(statearr_16046_18621[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16010 === (15))){
var inst_15877 = (state_16009[(17)]);
var inst_15874 = (state_16009[(14)]);
var inst_15875 = (state_16009[(15)]);
var inst_15876 = (state_16009[(16)]);
var inst_15895 = (state_16009[(2)]);
var inst_15896 = (inst_15877 + (1));
var tmp16039 = inst_15875;
var tmp16040 = inst_15876;
var tmp16041 = inst_15874;
var inst_15874__$1 = tmp16041;
var inst_15875__$1 = tmp16039;
var inst_15876__$1 = tmp16040;
var inst_15877__$1 = inst_15896;
var state_16009__$1 = (function (){var statearr_16052 = state_16009;
(statearr_16052[(18)] = inst_15895);

(statearr_16052[(14)] = inst_15874__$1);

(statearr_16052[(15)] = inst_15875__$1);

(statearr_16052[(16)] = inst_15876__$1);

(statearr_16052[(17)] = inst_15877__$1);

return statearr_16052;
})();
var statearr_16053_18627 = state_16009__$1;
(statearr_16053_18627[(2)] = null);

(statearr_16053_18627[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16010 === (21))){
var inst_15924 = (state_16009[(2)]);
var state_16009__$1 = state_16009;
var statearr_16057_18628 = state_16009__$1;
(statearr_16057_18628[(2)] = inst_15924);

(statearr_16057_18628[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16010 === (31))){
var inst_15954 = (state_16009[(11)]);
var inst_15958 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_15954);
var state_16009__$1 = state_16009;
var statearr_16059_18630 = state_16009__$1;
(statearr_16059_18630[(2)] = inst_15958);

(statearr_16059_18630[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16010 === (32))){
var inst_15945 = (state_16009[(10)]);
var inst_15942 = (state_16009[(19)]);
var inst_15943 = (state_16009[(9)]);
var inst_15944 = (state_16009[(20)]);
var inst_15960 = (state_16009[(2)]);
var inst_15962 = (inst_15945 + (1));
var tmp16054 = inst_15944;
var tmp16055 = inst_15943;
var tmp16056 = inst_15942;
var inst_15942__$1 = tmp16056;
var inst_15943__$1 = tmp16055;
var inst_15944__$1 = tmp16054;
var inst_15945__$1 = inst_15962;
var state_16009__$1 = (function (){var statearr_16060 = state_16009;
(statearr_16060[(21)] = inst_15960);

(statearr_16060[(19)] = inst_15942__$1);

(statearr_16060[(9)] = inst_15943__$1);

(statearr_16060[(20)] = inst_15944__$1);

(statearr_16060[(10)] = inst_15945__$1);

return statearr_16060;
})();
var statearr_16061_18632 = state_16009__$1;
(statearr_16061_18632[(2)] = null);

(statearr_16061_18632[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16010 === (40))){
var inst_15978 = (state_16009[(22)]);
var inst_15982 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_15978);
var state_16009__$1 = state_16009;
var statearr_16063_18633 = state_16009__$1;
(statearr_16063_18633[(2)] = inst_15982);

(statearr_16063_18633[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16010 === (33))){
var inst_15966 = (state_16009[(23)]);
var inst_15970 = cljs.core.chunked_seq_QMARK_(inst_15966);
var state_16009__$1 = state_16009;
if(inst_15970){
var statearr_16066_18634 = state_16009__$1;
(statearr_16066_18634[(1)] = (36));

} else {
var statearr_16067_18636 = state_16009__$1;
(statearr_16067_18636[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16010 === (13))){
var inst_15888 = (state_16009[(24)]);
var inst_15892 = cljs.core.async.close_BANG_(inst_15888);
var state_16009__$1 = state_16009;
var statearr_16068_18638 = state_16009__$1;
(statearr_16068_18638[(2)] = inst_15892);

(statearr_16068_18638[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16010 === (22))){
var inst_15913 = (state_16009[(8)]);
var inst_15917 = cljs.core.async.close_BANG_(inst_15913);
var state_16009__$1 = state_16009;
var statearr_16071_18642 = state_16009__$1;
(statearr_16071_18642[(2)] = inst_15917);

(statearr_16071_18642[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16010 === (36))){
var inst_15966 = (state_16009[(23)]);
var inst_15973 = cljs.core.chunk_first(inst_15966);
var inst_15974 = cljs.core.chunk_rest(inst_15966);
var inst_15975 = cljs.core.count(inst_15973);
var inst_15942 = inst_15974;
var inst_15943 = inst_15973;
var inst_15944 = inst_15975;
var inst_15945 = (0);
var state_16009__$1 = (function (){var statearr_16078 = state_16009;
(statearr_16078[(19)] = inst_15942);

(statearr_16078[(9)] = inst_15943);

(statearr_16078[(20)] = inst_15944);

(statearr_16078[(10)] = inst_15945);

return statearr_16078;
})();
var statearr_16079_18643 = state_16009__$1;
(statearr_16079_18643[(2)] = null);

(statearr_16079_18643[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16010 === (41))){
var inst_15966 = (state_16009[(23)]);
var inst_15984 = (state_16009[(2)]);
var inst_15985 = cljs.core.next(inst_15966);
var inst_15942 = inst_15985;
var inst_15943 = null;
var inst_15944 = (0);
var inst_15945 = (0);
var state_16009__$1 = (function (){var statearr_16080 = state_16009;
(statearr_16080[(25)] = inst_15984);

(statearr_16080[(19)] = inst_15942);

(statearr_16080[(9)] = inst_15943);

(statearr_16080[(20)] = inst_15944);

(statearr_16080[(10)] = inst_15945);

return statearr_16080;
})();
var statearr_16081_18647 = state_16009__$1;
(statearr_16081_18647[(2)] = null);

(statearr_16081_18647[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16010 === (43))){
var state_16009__$1 = state_16009;
var statearr_16083_18651 = state_16009__$1;
(statearr_16083_18651[(2)] = null);

(statearr_16083_18651[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16010 === (29))){
var inst_15993 = (state_16009[(2)]);
var state_16009__$1 = state_16009;
var statearr_16085_18652 = state_16009__$1;
(statearr_16085_18652[(2)] = inst_15993);

(statearr_16085_18652[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16010 === (44))){
var inst_16002 = (state_16009[(2)]);
var state_16009__$1 = (function (){var statearr_16086 = state_16009;
(statearr_16086[(26)] = inst_16002);

return statearr_16086;
})();
var statearr_16090_18653 = state_16009__$1;
(statearr_16090_18653[(2)] = null);

(statearr_16090_18653[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16010 === (6))){
var inst_15934 = (state_16009[(27)]);
var inst_15933 = cljs.core.deref(cs);
var inst_15934__$1 = cljs.core.keys(inst_15933);
var inst_15935 = cljs.core.count(inst_15934__$1);
var inst_15936 = cljs.core.reset_BANG_(dctr,inst_15935);
var inst_15941 = cljs.core.seq(inst_15934__$1);
var inst_15942 = inst_15941;
var inst_15943 = null;
var inst_15944 = (0);
var inst_15945 = (0);
var state_16009__$1 = (function (){var statearr_16092 = state_16009;
(statearr_16092[(27)] = inst_15934__$1);

(statearr_16092[(28)] = inst_15936);

(statearr_16092[(19)] = inst_15942);

(statearr_16092[(9)] = inst_15943);

(statearr_16092[(20)] = inst_15944);

(statearr_16092[(10)] = inst_15945);

return statearr_16092;
})();
var statearr_16094_18655 = state_16009__$1;
(statearr_16094_18655[(2)] = null);

(statearr_16094_18655[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16010 === (28))){
var inst_15942 = (state_16009[(19)]);
var inst_15966 = (state_16009[(23)]);
var inst_15966__$1 = cljs.core.seq(inst_15942);
var state_16009__$1 = (function (){var statearr_16095 = state_16009;
(statearr_16095[(23)] = inst_15966__$1);

return statearr_16095;
})();
if(inst_15966__$1){
var statearr_16096_18662 = state_16009__$1;
(statearr_16096_18662[(1)] = (33));

} else {
var statearr_16098_18663 = state_16009__$1;
(statearr_16098_18663[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16010 === (25))){
var inst_15945 = (state_16009[(10)]);
var inst_15944 = (state_16009[(20)]);
var inst_15951 = (inst_15945 < inst_15944);
var inst_15952 = inst_15951;
var state_16009__$1 = state_16009;
if(cljs.core.truth_(inst_15952)){
var statearr_16103_18664 = state_16009__$1;
(statearr_16103_18664[(1)] = (27));

} else {
var statearr_16104_18665 = state_16009__$1;
(statearr_16104_18665[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16010 === (34))){
var state_16009__$1 = state_16009;
var statearr_16105_18666 = state_16009__$1;
(statearr_16105_18666[(2)] = null);

(statearr_16105_18666[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16010 === (17))){
var state_16009__$1 = state_16009;
var statearr_16106_18667 = state_16009__$1;
(statearr_16106_18667[(2)] = null);

(statearr_16106_18667[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16010 === (3))){
var inst_16007 = (state_16009[(2)]);
var state_16009__$1 = state_16009;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16009__$1,inst_16007);
} else {
if((state_val_16010 === (12))){
var inst_15929 = (state_16009[(2)]);
var state_16009__$1 = state_16009;
var statearr_16107_18671 = state_16009__$1;
(statearr_16107_18671[(2)] = inst_15929);

(statearr_16107_18671[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16010 === (2))){
var state_16009__$1 = state_16009;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16009__$1,(4),ch);
} else {
if((state_val_16010 === (23))){
var state_16009__$1 = state_16009;
var statearr_16108_18672 = state_16009__$1;
(statearr_16108_18672[(2)] = null);

(statearr_16108_18672[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16010 === (35))){
var inst_15991 = (state_16009[(2)]);
var state_16009__$1 = state_16009;
var statearr_16110_18673 = state_16009__$1;
(statearr_16110_18673[(2)] = inst_15991);

(statearr_16110_18673[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16010 === (19))){
var inst_15899 = (state_16009[(7)]);
var inst_15903 = cljs.core.chunk_first(inst_15899);
var inst_15904 = cljs.core.chunk_rest(inst_15899);
var inst_15905 = cljs.core.count(inst_15903);
var inst_15874 = inst_15904;
var inst_15875 = inst_15903;
var inst_15876 = inst_15905;
var inst_15877 = (0);
var state_16009__$1 = (function (){var statearr_16115 = state_16009;
(statearr_16115[(14)] = inst_15874);

(statearr_16115[(15)] = inst_15875);

(statearr_16115[(16)] = inst_15876);

(statearr_16115[(17)] = inst_15877);

return statearr_16115;
})();
var statearr_16116_18674 = state_16009__$1;
(statearr_16116_18674[(2)] = null);

(statearr_16116_18674[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16010 === (11))){
var inst_15874 = (state_16009[(14)]);
var inst_15899 = (state_16009[(7)]);
var inst_15899__$1 = cljs.core.seq(inst_15874);
var state_16009__$1 = (function (){var statearr_16121 = state_16009;
(statearr_16121[(7)] = inst_15899__$1);

return statearr_16121;
})();
if(inst_15899__$1){
var statearr_16122_18675 = state_16009__$1;
(statearr_16122_18675[(1)] = (16));

} else {
var statearr_16123_18676 = state_16009__$1;
(statearr_16123_18676[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16010 === (9))){
var inst_15931 = (state_16009[(2)]);
var state_16009__$1 = state_16009;
var statearr_16128_18677 = state_16009__$1;
(statearr_16128_18677[(2)] = inst_15931);

(statearr_16128_18677[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16010 === (5))){
var inst_15872 = cljs.core.deref(cs);
var inst_15873 = cljs.core.seq(inst_15872);
var inst_15874 = inst_15873;
var inst_15875 = null;
var inst_15876 = (0);
var inst_15877 = (0);
var state_16009__$1 = (function (){var statearr_16129 = state_16009;
(statearr_16129[(14)] = inst_15874);

(statearr_16129[(15)] = inst_15875);

(statearr_16129[(16)] = inst_15876);

(statearr_16129[(17)] = inst_15877);

return statearr_16129;
})();
var statearr_16131_18678 = state_16009__$1;
(statearr_16131_18678[(2)] = null);

(statearr_16131_18678[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16010 === (14))){
var state_16009__$1 = state_16009;
var statearr_16132_18679 = state_16009__$1;
(statearr_16132_18679[(2)] = null);

(statearr_16132_18679[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16010 === (45))){
var inst_15999 = (state_16009[(2)]);
var state_16009__$1 = state_16009;
var statearr_16135_18680 = state_16009__$1;
(statearr_16135_18680[(2)] = inst_15999);

(statearr_16135_18680[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16010 === (26))){
var inst_15934 = (state_16009[(27)]);
var inst_15995 = (state_16009[(2)]);
var inst_15996 = cljs.core.seq(inst_15934);
var state_16009__$1 = (function (){var statearr_16136 = state_16009;
(statearr_16136[(29)] = inst_15995);

return statearr_16136;
})();
if(inst_15996){
var statearr_16137_18681 = state_16009__$1;
(statearr_16137_18681[(1)] = (42));

} else {
var statearr_16140_18682 = state_16009__$1;
(statearr_16140_18682[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16010 === (16))){
var inst_15899 = (state_16009[(7)]);
var inst_15901 = cljs.core.chunked_seq_QMARK_(inst_15899);
var state_16009__$1 = state_16009;
if(inst_15901){
var statearr_16142_18683 = state_16009__$1;
(statearr_16142_18683[(1)] = (19));

} else {
var statearr_16143_18684 = state_16009__$1;
(statearr_16143_18684[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16010 === (38))){
var inst_15988 = (state_16009[(2)]);
var state_16009__$1 = state_16009;
var statearr_16146_18686 = state_16009__$1;
(statearr_16146_18686[(2)] = inst_15988);

(statearr_16146_18686[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16010 === (30))){
var state_16009__$1 = state_16009;
var statearr_16148_18687 = state_16009__$1;
(statearr_16148_18687[(2)] = null);

(statearr_16148_18687[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16010 === (10))){
var inst_15875 = (state_16009[(15)]);
var inst_15877 = (state_16009[(17)]);
var inst_15887 = cljs.core._nth(inst_15875,inst_15877);
var inst_15888 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15887,(0),null);
var inst_15889 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15887,(1),null);
var state_16009__$1 = (function (){var statearr_16150 = state_16009;
(statearr_16150[(24)] = inst_15888);

return statearr_16150;
})();
if(cljs.core.truth_(inst_15889)){
var statearr_16151_18690 = state_16009__$1;
(statearr_16151_18690[(1)] = (13));

} else {
var statearr_16152_18691 = state_16009__$1;
(statearr_16152_18691[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16010 === (18))){
var inst_15927 = (state_16009[(2)]);
var state_16009__$1 = state_16009;
var statearr_16153_18692 = state_16009__$1;
(statearr_16153_18692[(2)] = inst_15927);

(statearr_16153_18692[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16010 === (42))){
var state_16009__$1 = state_16009;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16009__$1,(45),dchan);
} else {
if((state_val_16010 === (37))){
var inst_15966 = (state_16009[(23)]);
var inst_15978 = (state_16009[(22)]);
var inst_15863 = (state_16009[(12)]);
var inst_15978__$1 = cljs.core.first(inst_15966);
var inst_15979 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_15978__$1,inst_15863,done);
var state_16009__$1 = (function (){var statearr_16156 = state_16009;
(statearr_16156[(22)] = inst_15978__$1);

return statearr_16156;
})();
if(cljs.core.truth_(inst_15979)){
var statearr_16157_18696 = state_16009__$1;
(statearr_16157_18696[(1)] = (39));

} else {
var statearr_16158_18697 = state_16009__$1;
(statearr_16158_18697[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16010 === (8))){
var inst_15877 = (state_16009[(17)]);
var inst_15876 = (state_16009[(16)]);
var inst_15881 = (inst_15877 < inst_15876);
var inst_15882 = inst_15881;
var state_16009__$1 = state_16009;
if(cljs.core.truth_(inst_15882)){
var statearr_16159_18698 = state_16009__$1;
(statearr_16159_18698[(1)] = (10));

} else {
var statearr_16160_18699 = state_16009__$1;
(statearr_16160_18699[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__13326__auto__ = null;
var cljs$core$async$mult_$_state_machine__13326__auto____0 = (function (){
var statearr_16164 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16164[(0)] = cljs$core$async$mult_$_state_machine__13326__auto__);

(statearr_16164[(1)] = (1));

return statearr_16164;
});
var cljs$core$async$mult_$_state_machine__13326__auto____1 = (function (state_16009){
while(true){
var ret_value__13328__auto__ = (function (){try{while(true){
var result__13329__auto__ = switch__13325__auto__(state_16009);
if(cljs.core.keyword_identical_QMARK_(result__13329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13329__auto__;
}
break;
}
}catch (e16165){var ex__13330__auto__ = e16165;
var statearr_16167_18700 = state_16009;
(statearr_16167_18700[(2)] = ex__13330__auto__);


if(cljs.core.seq((state_16009[(4)]))){
var statearr_16168_18701 = state_16009;
(statearr_16168_18701[(1)] = cljs.core.first((state_16009[(4)])));

} else {
throw ex__13330__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18703 = state_16009;
state_16009 = G__18703;
continue;
} else {
return ret_value__13328__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__13326__auto__ = function(state_16009){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__13326__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__13326__auto____1.call(this,state_16009);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__13326__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__13326__auto____0;
cljs$core$async$mult_$_state_machine__13326__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__13326__auto____1;
return cljs$core$async$mult_$_state_machine__13326__auto__;
})()
})();
var state__14143__auto__ = (function (){var statearr_16171 = f__14142__auto__();
(statearr_16171[(6)] = c__14141__auto___18605);

return statearr_16171;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14143__auto__);
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
var G__16178 = arguments.length;
switch (G__16178) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

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

var cljs$core$async$Mix$admix_STAR_$dyn_18712 = (function (m,ch){
var x__5498__auto__ = (((m == null))?null:m);
var m__5499__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5499__auto__.call(null,m,ch));
} else {
var m__5497__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5497__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_18712(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_18717 = (function (m,ch){
var x__5498__auto__ = (((m == null))?null:m);
var m__5499__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5499__auto__.call(null,m,ch));
} else {
var m__5497__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5497__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_18717(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_18718 = (function (m){
var x__5498__auto__ = (((m == null))?null:m);
var m__5499__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5499__auto__.call(null,m));
} else {
var m__5497__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5497__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_18718(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_18721 = (function (m,state_map){
var x__5498__auto__ = (((m == null))?null:m);
var m__5499__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5499__auto__.call(null,m,state_map));
} else {
var m__5497__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5497__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_18721(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_18722 = (function (m,mode){
var x__5498__auto__ = (((m == null))?null:m);
var m__5499__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5499__auto__.call(null,m,mode));
} else {
var m__5497__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5497__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_18722(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5882__auto__ = [];
var len__5876__auto___18724 = arguments.length;
var i__5877__auto___18725 = (0);
while(true){
if((i__5877__auto___18725 < len__5876__auto___18724)){
args__5882__auto__.push((arguments[i__5877__auto___18725]));

var G__18726 = (i__5877__auto___18725 + (1));
i__5877__auto___18725 = G__18726;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((3) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5883__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__16211){
var map__16212 = p__16211;
var map__16212__$1 = cljs.core.__destructure_map(map__16212);
var opts = map__16212__$1;
var statearr_16213_18729 = state;
(statearr_16213_18729[(1)] = cont_block);


var temp__5823__auto__ = cljs.core.async.do_alts((function (val){
var statearr_16215_18734 = state;
(statearr_16215_18734[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5823__auto__)){
var cb = temp__5823__auto__;
var statearr_16218_18735 = state;
(statearr_16218_18735[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq16200){
var G__16202 = cljs.core.first(seq16200);
var seq16200__$1 = cljs.core.next(seq16200);
var G__16204 = cljs.core.first(seq16200__$1);
var seq16200__$2 = cljs.core.next(seq16200__$1);
var G__16205 = cljs.core.first(seq16200__$2);
var seq16200__$3 = cljs.core.next(seq16200__$2);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16202,G__16204,G__16205,seq16200__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16241 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16242){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta16242 = meta16242;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16241.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16243,meta16242__$1){
var self__ = this;
var _16243__$1 = this;
return (new cljs.core.async.t_cljs$core$async16241(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta16242__$1));
}));

(cljs.core.async.t_cljs$core$async16241.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16243){
var self__ = this;
var _16243__$1 = this;
return self__.meta16242;
}));

(cljs.core.async.t_cljs$core$async16241.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16241.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async16241.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16241.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16241.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16241.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16241.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16241.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error((""+"Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((""+"mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+"(solo-modes mode)")));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16241.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta16242","meta16242",412949718,null)], null);
}));

(cljs.core.async.t_cljs$core$async16241.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16241.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16241");

(cljs.core.async.t_cljs$core$async16241.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async16241");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16241.
 */
cljs.core.async.__GT_t_cljs$core$async16241 = (function cljs$core$async$__GT_t_cljs$core$async16241(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16242){
return (new cljs.core.async.t_cljs$core$async16241(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16242));
});


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
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (cljs.core.seq(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async16241(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__14141__auto___18746 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14142__auto__ = (function (){var switch__13325__auto__ = (function (state_16359){
var state_val_16361 = (state_16359[(1)]);
if((state_val_16361 === (7))){
var inst_16310 = (state_16359[(2)]);
var state_16359__$1 = state_16359;
if(cljs.core.truth_(inst_16310)){
var statearr_16369_18748 = state_16359__$1;
(statearr_16369_18748[(1)] = (8));

} else {
var statearr_16370_18749 = state_16359__$1;
(statearr_16370_18749[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16361 === (20))){
var inst_16300 = (state_16359[(7)]);
var state_16359__$1 = state_16359;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16359__$1,(23),out,inst_16300);
} else {
if((state_val_16361 === (1))){
var inst_16276 = calc_state();
var inst_16277 = cljs.core.__destructure_map(inst_16276);
var inst_16279 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16277,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_16280 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16277,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_16282 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16277,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_16283 = inst_16276;
var state_16359__$1 = (function (){var statearr_16376 = state_16359;
(statearr_16376[(8)] = inst_16279);

(statearr_16376[(9)] = inst_16280);

(statearr_16376[(10)] = inst_16282);

(statearr_16376[(11)] = inst_16283);

return statearr_16376;
})();
var statearr_16378_18750 = state_16359__$1;
(statearr_16378_18750[(2)] = null);

(statearr_16378_18750[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16361 === (24))){
var inst_16289 = (state_16359[(12)]);
var inst_16283 = inst_16289;
var state_16359__$1 = (function (){var statearr_16385 = state_16359;
(statearr_16385[(11)] = inst_16283);

return statearr_16385;
})();
var statearr_16387_18751 = state_16359__$1;
(statearr_16387_18751[(2)] = null);

(statearr_16387_18751[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16361 === (4))){
var inst_16300 = (state_16359[(7)]);
var inst_16304 = (state_16359[(13)]);
var inst_16299 = (state_16359[(2)]);
var inst_16300__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16299,(0),null);
var inst_16301 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16299,(1),null);
var inst_16304__$1 = (inst_16300__$1 == null);
var state_16359__$1 = (function (){var statearr_16395 = state_16359;
(statearr_16395[(7)] = inst_16300__$1);

(statearr_16395[(14)] = inst_16301);

(statearr_16395[(13)] = inst_16304__$1);

return statearr_16395;
})();
if(cljs.core.truth_(inst_16304__$1)){
var statearr_16396_18752 = state_16359__$1;
(statearr_16396_18752[(1)] = (5));

} else {
var statearr_16397_18753 = state_16359__$1;
(statearr_16397_18753[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16361 === (15))){
var inst_16290 = (state_16359[(15)]);
var inst_16327 = (state_16359[(16)]);
var inst_16327__$1 = cljs.core.empty_QMARK_(inst_16290);
var state_16359__$1 = (function (){var statearr_16402 = state_16359;
(statearr_16402[(16)] = inst_16327__$1);

return statearr_16402;
})();
if(inst_16327__$1){
var statearr_16404_18759 = state_16359__$1;
(statearr_16404_18759[(1)] = (17));

} else {
var statearr_16406_18762 = state_16359__$1;
(statearr_16406_18762[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16361 === (21))){
var inst_16289 = (state_16359[(12)]);
var inst_16283 = inst_16289;
var state_16359__$1 = (function (){var statearr_16409 = state_16359;
(statearr_16409[(11)] = inst_16283);

return statearr_16409;
})();
var statearr_16410_18763 = state_16359__$1;
(statearr_16410_18763[(2)] = null);

(statearr_16410_18763[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16361 === (13))){
var inst_16318 = (state_16359[(2)]);
var inst_16319 = calc_state();
var inst_16283 = inst_16319;
var state_16359__$1 = (function (){var statearr_16414 = state_16359;
(statearr_16414[(17)] = inst_16318);

(statearr_16414[(11)] = inst_16283);

return statearr_16414;
})();
var statearr_16416_18767 = state_16359__$1;
(statearr_16416_18767[(2)] = null);

(statearr_16416_18767[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16361 === (22))){
var inst_16351 = (state_16359[(2)]);
var state_16359__$1 = state_16359;
var statearr_16418_18768 = state_16359__$1;
(statearr_16418_18768[(2)] = inst_16351);

(statearr_16418_18768[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16361 === (6))){
var inst_16301 = (state_16359[(14)]);
var inst_16308 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_16301,change);
var state_16359__$1 = state_16359;
var statearr_16421_18775 = state_16359__$1;
(statearr_16421_18775[(2)] = inst_16308);

(statearr_16421_18775[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16361 === (25))){
var state_16359__$1 = state_16359;
var statearr_16424_18776 = state_16359__$1;
(statearr_16424_18776[(2)] = null);

(statearr_16424_18776[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16361 === (17))){
var inst_16291 = (state_16359[(18)]);
var inst_16301 = (state_16359[(14)]);
var inst_16329 = (inst_16291.cljs$core$IFn$_invoke$arity$1 ? inst_16291.cljs$core$IFn$_invoke$arity$1(inst_16301) : inst_16291.call(null,inst_16301));
var inst_16330 = cljs.core.not(inst_16329);
var state_16359__$1 = state_16359;
var statearr_16428_18777 = state_16359__$1;
(statearr_16428_18777[(2)] = inst_16330);

(statearr_16428_18777[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16361 === (3))){
var inst_16355 = (state_16359[(2)]);
var state_16359__$1 = state_16359;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16359__$1,inst_16355);
} else {
if((state_val_16361 === (12))){
var state_16359__$1 = state_16359;
var statearr_16433_18778 = state_16359__$1;
(statearr_16433_18778[(2)] = null);

(statearr_16433_18778[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16361 === (2))){
var inst_16283 = (state_16359[(11)]);
var inst_16289 = (state_16359[(12)]);
var inst_16289__$1 = cljs.core.__destructure_map(inst_16283);
var inst_16290 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16289__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_16291 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16289__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_16293 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16289__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_16359__$1 = (function (){var statearr_16437 = state_16359;
(statearr_16437[(12)] = inst_16289__$1);

(statearr_16437[(15)] = inst_16290);

(statearr_16437[(18)] = inst_16291);

return statearr_16437;
})();
return cljs.core.async.ioc_alts_BANG_(state_16359__$1,(4),inst_16293);
} else {
if((state_val_16361 === (23))){
var inst_16339 = (state_16359[(2)]);
var state_16359__$1 = state_16359;
if(cljs.core.truth_(inst_16339)){
var statearr_16444_18784 = state_16359__$1;
(statearr_16444_18784[(1)] = (24));

} else {
var statearr_16449_18785 = state_16359__$1;
(statearr_16449_18785[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16361 === (19))){
var inst_16333 = (state_16359[(2)]);
var state_16359__$1 = state_16359;
var statearr_16455_18786 = state_16359__$1;
(statearr_16455_18786[(2)] = inst_16333);

(statearr_16455_18786[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16361 === (11))){
var inst_16301 = (state_16359[(14)]);
var inst_16315 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_16301);
var state_16359__$1 = state_16359;
var statearr_16459_18788 = state_16359__$1;
(statearr_16459_18788[(2)] = inst_16315);

(statearr_16459_18788[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16361 === (9))){
var inst_16290 = (state_16359[(15)]);
var inst_16301 = (state_16359[(14)]);
var inst_16324 = (state_16359[(19)]);
var inst_16324__$1 = (inst_16290.cljs$core$IFn$_invoke$arity$1 ? inst_16290.cljs$core$IFn$_invoke$arity$1(inst_16301) : inst_16290.call(null,inst_16301));
var state_16359__$1 = (function (){var statearr_16462 = state_16359;
(statearr_16462[(19)] = inst_16324__$1);

return statearr_16462;
})();
if(cljs.core.truth_(inst_16324__$1)){
var statearr_16463_18789 = state_16359__$1;
(statearr_16463_18789[(1)] = (14));

} else {
var statearr_16464_18790 = state_16359__$1;
(statearr_16464_18790[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16361 === (5))){
var inst_16304 = (state_16359[(13)]);
var state_16359__$1 = state_16359;
var statearr_16468_18791 = state_16359__$1;
(statearr_16468_18791[(2)] = inst_16304);

(statearr_16468_18791[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16361 === (14))){
var inst_16324 = (state_16359[(19)]);
var state_16359__$1 = state_16359;
var statearr_16470_18792 = state_16359__$1;
(statearr_16470_18792[(2)] = inst_16324);

(statearr_16470_18792[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16361 === (26))){
var inst_16346 = (state_16359[(2)]);
var state_16359__$1 = state_16359;
var statearr_16476_18795 = state_16359__$1;
(statearr_16476_18795[(2)] = inst_16346);

(statearr_16476_18795[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16361 === (16))){
var inst_16335 = (state_16359[(2)]);
var state_16359__$1 = state_16359;
if(cljs.core.truth_(inst_16335)){
var statearr_16477_18798 = state_16359__$1;
(statearr_16477_18798[(1)] = (20));

} else {
var statearr_16480_18800 = state_16359__$1;
(statearr_16480_18800[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16361 === (10))){
var inst_16353 = (state_16359[(2)]);
var state_16359__$1 = state_16359;
var statearr_16486_18803 = state_16359__$1;
(statearr_16486_18803[(2)] = inst_16353);

(statearr_16486_18803[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16361 === (18))){
var inst_16327 = (state_16359[(16)]);
var state_16359__$1 = state_16359;
var statearr_16488_18805 = state_16359__$1;
(statearr_16488_18805[(2)] = inst_16327);

(statearr_16488_18805[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16361 === (8))){
var inst_16300 = (state_16359[(7)]);
var inst_16312 = (inst_16300 == null);
var state_16359__$1 = state_16359;
if(cljs.core.truth_(inst_16312)){
var statearr_16489_18806 = state_16359__$1;
(statearr_16489_18806[(1)] = (11));

} else {
var statearr_16490_18807 = state_16359__$1;
(statearr_16490_18807[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__13326__auto__ = null;
var cljs$core$async$mix_$_state_machine__13326__auto____0 = (function (){
var statearr_16495 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16495[(0)] = cljs$core$async$mix_$_state_machine__13326__auto__);

(statearr_16495[(1)] = (1));

return statearr_16495;
});
var cljs$core$async$mix_$_state_machine__13326__auto____1 = (function (state_16359){
while(true){
var ret_value__13328__auto__ = (function (){try{while(true){
var result__13329__auto__ = switch__13325__auto__(state_16359);
if(cljs.core.keyword_identical_QMARK_(result__13329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13329__auto__;
}
break;
}
}catch (e16499){var ex__13330__auto__ = e16499;
var statearr_16501_18810 = state_16359;
(statearr_16501_18810[(2)] = ex__13330__auto__);


if(cljs.core.seq((state_16359[(4)]))){
var statearr_16503_18814 = state_16359;
(statearr_16503_18814[(1)] = cljs.core.first((state_16359[(4)])));

} else {
throw ex__13330__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18818 = state_16359;
state_16359 = G__18818;
continue;
} else {
return ret_value__13328__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__13326__auto__ = function(state_16359){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__13326__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__13326__auto____1.call(this,state_16359);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__13326__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__13326__auto____0;
cljs$core$async$mix_$_state_machine__13326__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__13326__auto____1;
return cljs$core$async$mix_$_state_machine__13326__auto__;
})()
})();
var state__14143__auto__ = (function (){var statearr_16507 = f__14142__auto__();
(statearr_16507[(6)] = c__14141__auto___18746);

return statearr_16507;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14143__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_18860 = (function (p,v,ch,close_QMARK_){
var x__5498__auto__ = (((p == null))?null:p);
var m__5499__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5499__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5497__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5497__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_18860(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_18864 = (function (p,v,ch){
var x__5498__auto__ = (((p == null))?null:p);
var m__5499__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5499__auto__.call(null,p,v,ch));
} else {
var m__5497__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5497__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_18864(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_18871 = (function() {
var G__18872 = null;
var G__18872__1 = (function (p){
var x__5498__auto__ = (((p == null))?null:p);
var m__5499__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5499__auto__.call(null,p));
} else {
var m__5497__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5497__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__18872__2 = (function (p,v){
var x__5498__auto__ = (((p == null))?null:p);
var m__5499__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5499__auto__.call(null,p,v));
} else {
var m__5497__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5497__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__18872 = function(p,v){
switch(arguments.length){
case 1:
return G__18872__1.call(this,p);
case 2:
return G__18872__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__18872.cljs$core$IFn$_invoke$arity$1 = G__18872__1;
G__18872.cljs$core$IFn$_invoke$arity$2 = G__18872__2;
return G__18872;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__16579 = arguments.length;
switch (G__16579) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_18871(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_18871(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16612 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta16613){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta16613 = meta16613;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16612.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16614,meta16613__$1){
var self__ = this;
var _16614__$1 = this;
return (new cljs.core.async.t_cljs$core$async16612(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta16613__$1));
}));

(cljs.core.async.t_cljs$core$async16612.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16614){
var self__ = this;
var _16614__$1 = this;
return self__.meta16613;
}));

(cljs.core.async.t_cljs$core$async16612.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16612.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async16612.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16612.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async16612.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5823__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5823__auto__)){
var m = temp__5823__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async16612.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async16612.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async16612.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta16613","meta16613",2088509858,null)], null);
}));

(cljs.core.async.t_cljs$core$async16612.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16612.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16612");

(cljs.core.async.t_cljs$core$async16612.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async16612");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16612.
 */
cljs.core.async.__GT_t_cljs$core$async16612 = (function cljs$core$async$__GT_t_cljs$core$async16612(ch,topic_fn,buf_fn,mults,ensure_mult,meta16613){
return (new cljs.core.async.t_cljs$core$async16612(ch,topic_fn,buf_fn,mults,ensure_mult,meta16613));
});


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
var G__16593 = arguments.length;
switch (G__16593) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5142__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__16589_SHARP_){
if(cljs.core.truth_((p1__16589_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__16589_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__16589_SHARP_.call(null,topic)))){
return p1__16589_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__16589_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async16612(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__14141__auto___18890 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14142__auto__ = (function (){var switch__13325__auto__ = (function (state_16738){
var state_val_16739 = (state_16738[(1)]);
if((state_val_16739 === (7))){
var inst_16728 = (state_16738[(2)]);
var state_16738__$1 = state_16738;
var statearr_16746_18891 = state_16738__$1;
(statearr_16746_18891[(2)] = inst_16728);

(statearr_16746_18891[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16739 === (20))){
var state_16738__$1 = state_16738;
var statearr_16747_18892 = state_16738__$1;
(statearr_16747_18892[(2)] = null);

(statearr_16747_18892[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16739 === (1))){
var state_16738__$1 = state_16738;
var statearr_16749_18893 = state_16738__$1;
(statearr_16749_18893[(2)] = null);

(statearr_16749_18893[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16739 === (24))){
var inst_16710 = (state_16738[(7)]);
var inst_16720 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_16710);
var state_16738__$1 = state_16738;
var statearr_16754_18899 = state_16738__$1;
(statearr_16754_18899[(2)] = inst_16720);

(statearr_16754_18899[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16739 === (4))){
var inst_16655 = (state_16738[(8)]);
var inst_16655__$1 = (state_16738[(2)]);
var inst_16656 = (inst_16655__$1 == null);
var state_16738__$1 = (function (){var statearr_16779 = state_16738;
(statearr_16779[(8)] = inst_16655__$1);

return statearr_16779;
})();
if(cljs.core.truth_(inst_16656)){
var statearr_16780_18900 = state_16738__$1;
(statearr_16780_18900[(1)] = (5));

} else {
var statearr_16781_18901 = state_16738__$1;
(statearr_16781_18901[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16739 === (15))){
var inst_16704 = (state_16738[(2)]);
var state_16738__$1 = state_16738;
var statearr_16786_18902 = state_16738__$1;
(statearr_16786_18902[(2)] = inst_16704);

(statearr_16786_18902[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16739 === (21))){
var inst_16725 = (state_16738[(2)]);
var state_16738__$1 = (function (){var statearr_16791 = state_16738;
(statearr_16791[(9)] = inst_16725);

return statearr_16791;
})();
var statearr_16792_18903 = state_16738__$1;
(statearr_16792_18903[(2)] = null);

(statearr_16792_18903[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16739 === (13))){
var inst_16682 = (state_16738[(10)]);
var inst_16685 = cljs.core.chunked_seq_QMARK_(inst_16682);
var state_16738__$1 = state_16738;
if(inst_16685){
var statearr_16793_18905 = state_16738__$1;
(statearr_16793_18905[(1)] = (16));

} else {
var statearr_16794_18906 = state_16738__$1;
(statearr_16794_18906[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16739 === (22))){
var inst_16717 = (state_16738[(2)]);
var state_16738__$1 = state_16738;
if(cljs.core.truth_(inst_16717)){
var statearr_16798_18907 = state_16738__$1;
(statearr_16798_18907[(1)] = (23));

} else {
var statearr_16799_18909 = state_16738__$1;
(statearr_16799_18909[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16739 === (6))){
var inst_16655 = (state_16738[(8)]);
var inst_16710 = (state_16738[(7)]);
var inst_16713 = (state_16738[(11)]);
var inst_16710__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_16655) : topic_fn.call(null,inst_16655));
var inst_16712 = cljs.core.deref(mults);
var inst_16713__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16712,inst_16710__$1);
var state_16738__$1 = (function (){var statearr_16804 = state_16738;
(statearr_16804[(7)] = inst_16710__$1);

(statearr_16804[(11)] = inst_16713__$1);

return statearr_16804;
})();
if(cljs.core.truth_(inst_16713__$1)){
var statearr_16808_18911 = state_16738__$1;
(statearr_16808_18911[(1)] = (19));

} else {
var statearr_16810_18912 = state_16738__$1;
(statearr_16810_18912[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16739 === (25))){
var inst_16722 = (state_16738[(2)]);
var state_16738__$1 = state_16738;
var statearr_16813_18913 = state_16738__$1;
(statearr_16813_18913[(2)] = inst_16722);

(statearr_16813_18913[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16739 === (17))){
var inst_16682 = (state_16738[(10)]);
var inst_16692 = cljs.core.first(inst_16682);
var inst_16693 = cljs.core.async.muxch_STAR_(inst_16692);
var inst_16694 = cljs.core.async.close_BANG_(inst_16693);
var inst_16695 = cljs.core.next(inst_16682);
var inst_16665 = inst_16695;
var inst_16666 = null;
var inst_16667 = (0);
var inst_16668 = (0);
var state_16738__$1 = (function (){var statearr_16818 = state_16738;
(statearr_16818[(12)] = inst_16694);

(statearr_16818[(13)] = inst_16665);

(statearr_16818[(14)] = inst_16666);

(statearr_16818[(15)] = inst_16667);

(statearr_16818[(16)] = inst_16668);

return statearr_16818;
})();
var statearr_16819_18916 = state_16738__$1;
(statearr_16819_18916[(2)] = null);

(statearr_16819_18916[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16739 === (3))){
var inst_16730 = (state_16738[(2)]);
var state_16738__$1 = state_16738;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16738__$1,inst_16730);
} else {
if((state_val_16739 === (12))){
var inst_16706 = (state_16738[(2)]);
var state_16738__$1 = state_16738;
var statearr_16821_18917 = state_16738__$1;
(statearr_16821_18917[(2)] = inst_16706);

(statearr_16821_18917[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16739 === (2))){
var state_16738__$1 = state_16738;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16738__$1,(4),ch);
} else {
if((state_val_16739 === (23))){
var state_16738__$1 = state_16738;
var statearr_16824_18920 = state_16738__$1;
(statearr_16824_18920[(2)] = null);

(statearr_16824_18920[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16739 === (19))){
var inst_16713 = (state_16738[(11)]);
var inst_16655 = (state_16738[(8)]);
var inst_16715 = cljs.core.async.muxch_STAR_(inst_16713);
var state_16738__$1 = state_16738;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16738__$1,(22),inst_16715,inst_16655);
} else {
if((state_val_16739 === (11))){
var inst_16665 = (state_16738[(13)]);
var inst_16682 = (state_16738[(10)]);
var inst_16682__$1 = cljs.core.seq(inst_16665);
var state_16738__$1 = (function (){var statearr_16826 = state_16738;
(statearr_16826[(10)] = inst_16682__$1);

return statearr_16826;
})();
if(inst_16682__$1){
var statearr_16830_18922 = state_16738__$1;
(statearr_16830_18922[(1)] = (13));

} else {
var statearr_16833_18923 = state_16738__$1;
(statearr_16833_18923[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16739 === (9))){
var inst_16708 = (state_16738[(2)]);
var state_16738__$1 = state_16738;
var statearr_16838_18925 = state_16738__$1;
(statearr_16838_18925[(2)] = inst_16708);

(statearr_16838_18925[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16739 === (5))){
var inst_16662 = cljs.core.deref(mults);
var inst_16663 = cljs.core.vals(inst_16662);
var inst_16664 = cljs.core.seq(inst_16663);
var inst_16665 = inst_16664;
var inst_16666 = null;
var inst_16667 = (0);
var inst_16668 = (0);
var state_16738__$1 = (function (){var statearr_16840 = state_16738;
(statearr_16840[(13)] = inst_16665);

(statearr_16840[(14)] = inst_16666);

(statearr_16840[(15)] = inst_16667);

(statearr_16840[(16)] = inst_16668);

return statearr_16840;
})();
var statearr_16846_18926 = state_16738__$1;
(statearr_16846_18926[(2)] = null);

(statearr_16846_18926[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16739 === (14))){
var state_16738__$1 = state_16738;
var statearr_16853_18927 = state_16738__$1;
(statearr_16853_18927[(2)] = null);

(statearr_16853_18927[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16739 === (16))){
var inst_16682 = (state_16738[(10)]);
var inst_16687 = cljs.core.chunk_first(inst_16682);
var inst_16688 = cljs.core.chunk_rest(inst_16682);
var inst_16689 = cljs.core.count(inst_16687);
var inst_16665 = inst_16688;
var inst_16666 = inst_16687;
var inst_16667 = inst_16689;
var inst_16668 = (0);
var state_16738__$1 = (function (){var statearr_16859 = state_16738;
(statearr_16859[(13)] = inst_16665);

(statearr_16859[(14)] = inst_16666);

(statearr_16859[(15)] = inst_16667);

(statearr_16859[(16)] = inst_16668);

return statearr_16859;
})();
var statearr_16861_18931 = state_16738__$1;
(statearr_16861_18931[(2)] = null);

(statearr_16861_18931[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16739 === (10))){
var inst_16666 = (state_16738[(14)]);
var inst_16668 = (state_16738[(16)]);
var inst_16665 = (state_16738[(13)]);
var inst_16667 = (state_16738[(15)]);
var inst_16673 = cljs.core._nth(inst_16666,inst_16668);
var inst_16677 = cljs.core.async.muxch_STAR_(inst_16673);
var inst_16678 = cljs.core.async.close_BANG_(inst_16677);
var inst_16679 = (inst_16668 + (1));
var tmp16850 = inst_16666;
var tmp16851 = inst_16667;
var tmp16852 = inst_16665;
var inst_16665__$1 = tmp16852;
var inst_16666__$1 = tmp16850;
var inst_16667__$1 = tmp16851;
var inst_16668__$1 = inst_16679;
var state_16738__$1 = (function (){var statearr_16866 = state_16738;
(statearr_16866[(17)] = inst_16678);

(statearr_16866[(13)] = inst_16665__$1);

(statearr_16866[(14)] = inst_16666__$1);

(statearr_16866[(15)] = inst_16667__$1);

(statearr_16866[(16)] = inst_16668__$1);

return statearr_16866;
})();
var statearr_16867_18934 = state_16738__$1;
(statearr_16867_18934[(2)] = null);

(statearr_16867_18934[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16739 === (18))){
var inst_16701 = (state_16738[(2)]);
var state_16738__$1 = state_16738;
var statearr_16868_18935 = state_16738__$1;
(statearr_16868_18935[(2)] = inst_16701);

(statearr_16868_18935[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16739 === (8))){
var inst_16668 = (state_16738[(16)]);
var inst_16667 = (state_16738[(15)]);
var inst_16670 = (inst_16668 < inst_16667);
var inst_16671 = inst_16670;
var state_16738__$1 = state_16738;
if(cljs.core.truth_(inst_16671)){
var statearr_16870_18938 = state_16738__$1;
(statearr_16870_18938[(1)] = (10));

} else {
var statearr_16871_18939 = state_16738__$1;
(statearr_16871_18939[(1)] = (11));

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
var cljs$core$async$state_machine__13326__auto__ = null;
var cljs$core$async$state_machine__13326__auto____0 = (function (){
var statearr_16872 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16872[(0)] = cljs$core$async$state_machine__13326__auto__);

(statearr_16872[(1)] = (1));

return statearr_16872;
});
var cljs$core$async$state_machine__13326__auto____1 = (function (state_16738){
while(true){
var ret_value__13328__auto__ = (function (){try{while(true){
var result__13329__auto__ = switch__13325__auto__(state_16738);
if(cljs.core.keyword_identical_QMARK_(result__13329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13329__auto__;
}
break;
}
}catch (e16874){var ex__13330__auto__ = e16874;
var statearr_16879_18940 = state_16738;
(statearr_16879_18940[(2)] = ex__13330__auto__);


if(cljs.core.seq((state_16738[(4)]))){
var statearr_16883_18941 = state_16738;
(statearr_16883_18941[(1)] = cljs.core.first((state_16738[(4)])));

} else {
throw ex__13330__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18942 = state_16738;
state_16738 = G__18942;
continue;
} else {
return ret_value__13328__auto__;
}
break;
}
});
cljs$core$async$state_machine__13326__auto__ = function(state_16738){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13326__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13326__auto____1.call(this,state_16738);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13326__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13326__auto____0;
cljs$core$async$state_machine__13326__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13326__auto____1;
return cljs$core$async$state_machine__13326__auto__;
})()
})();
var state__14143__auto__ = (function (){var statearr_16887 = f__14142__auto__();
(statearr_16887[(6)] = c__14141__auto___18890);

return statearr_16887;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14143__auto__);
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
var G__16895 = arguments.length;
switch (G__16895) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

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
var G__16909 = arguments.length;
switch (G__16909) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

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
var G__16917 = arguments.length;
switch (G__16917) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

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
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__14141__auto___18964 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14142__auto__ = (function (){var switch__13325__auto__ = (function (state_16987){
var state_val_16988 = (state_16987[(1)]);
if((state_val_16988 === (7))){
var state_16987__$1 = state_16987;
var statearr_16990_18965 = state_16987__$1;
(statearr_16990_18965[(2)] = null);

(statearr_16990_18965[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16988 === (1))){
var state_16987__$1 = state_16987;
var statearr_16991_18966 = state_16987__$1;
(statearr_16991_18966[(2)] = null);

(statearr_16991_18966[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16988 === (4))){
var inst_16942 = (state_16987[(7)]);
var inst_16941 = (state_16987[(8)]);
var inst_16944 = (inst_16942 < inst_16941);
var state_16987__$1 = state_16987;
if(cljs.core.truth_(inst_16944)){
var statearr_16994_18967 = state_16987__$1;
(statearr_16994_18967[(1)] = (6));

} else {
var statearr_16995_18968 = state_16987__$1;
(statearr_16995_18968[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16988 === (15))){
var inst_16971 = (state_16987[(9)]);
var inst_16976 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_16971);
var state_16987__$1 = state_16987;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16987__$1,(17),out,inst_16976);
} else {
if((state_val_16988 === (13))){
var inst_16971 = (state_16987[(9)]);
var inst_16971__$1 = (state_16987[(2)]);
var inst_16972 = cljs.core.some(cljs.core.nil_QMARK_,inst_16971__$1);
var state_16987__$1 = (function (){var statearr_17000 = state_16987;
(statearr_17000[(9)] = inst_16971__$1);

return statearr_17000;
})();
if(cljs.core.truth_(inst_16972)){
var statearr_17001_18969 = state_16987__$1;
(statearr_17001_18969[(1)] = (14));

} else {
var statearr_17002_18971 = state_16987__$1;
(statearr_17002_18971[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16988 === (6))){
var state_16987__$1 = state_16987;
var statearr_17003_18972 = state_16987__$1;
(statearr_17003_18972[(2)] = null);

(statearr_17003_18972[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16988 === (17))){
var inst_16978 = (state_16987[(2)]);
var state_16987__$1 = (function (){var statearr_17007 = state_16987;
(statearr_17007[(10)] = inst_16978);

return statearr_17007;
})();
var statearr_17008_18973 = state_16987__$1;
(statearr_17008_18973[(2)] = null);

(statearr_17008_18973[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16988 === (3))){
var inst_16983 = (state_16987[(2)]);
var state_16987__$1 = state_16987;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16987__$1,inst_16983);
} else {
if((state_val_16988 === (12))){
var _ = (function (){var statearr_17009 = state_16987;
(statearr_17009[(4)] = cljs.core.rest((state_16987[(4)])));

return statearr_17009;
})();
var state_16987__$1 = state_16987;
var ex17006 = (state_16987__$1[(2)]);
var statearr_17010_18983 = state_16987__$1;
(statearr_17010_18983[(5)] = ex17006);


if((ex17006 instanceof Object)){
var statearr_17013_18984 = state_16987__$1;
(statearr_17013_18984[(1)] = (11));

(statearr_17013_18984[(5)] = null);

} else {
throw ex17006;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16988 === (2))){
var inst_16939 = cljs.core.reset_BANG_(dctr,cnt);
var inst_16941 = cnt;
var inst_16942 = (0);
var state_16987__$1 = (function (){var statearr_17018 = state_16987;
(statearr_17018[(11)] = inst_16939);

(statearr_17018[(8)] = inst_16941);

(statearr_17018[(7)] = inst_16942);

return statearr_17018;
})();
var statearr_17020_18985 = state_16987__$1;
(statearr_17020_18985[(2)] = null);

(statearr_17020_18985[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16988 === (11))){
var inst_16950 = (state_16987[(2)]);
var inst_16951 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_16987__$1 = (function (){var statearr_17025 = state_16987;
(statearr_17025[(12)] = inst_16950);

return statearr_17025;
})();
var statearr_17026_18989 = state_16987__$1;
(statearr_17026_18989[(2)] = inst_16951);

(statearr_17026_18989[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16988 === (9))){
var inst_16942 = (state_16987[(7)]);
var _ = (function (){var statearr_17027 = state_16987;
(statearr_17027[(4)] = cljs.core.cons((12),(state_16987[(4)])));

return statearr_17027;
})();
var inst_16957 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_16942) : chs__$1.call(null,inst_16942));
var inst_16958 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_16942) : done.call(null,inst_16942));
var inst_16959 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_16957,inst_16958);
var ___$1 = (function (){var statearr_17029 = state_16987;
(statearr_17029[(4)] = cljs.core.rest((state_16987[(4)])));

return statearr_17029;
})();
var state_16987__$1 = state_16987;
var statearr_17031_18990 = state_16987__$1;
(statearr_17031_18990[(2)] = inst_16959);

(statearr_17031_18990[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16988 === (5))){
var inst_16969 = (state_16987[(2)]);
var state_16987__$1 = (function (){var statearr_17032 = state_16987;
(statearr_17032[(13)] = inst_16969);

return statearr_17032;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16987__$1,(13),dchan);
} else {
if((state_val_16988 === (14))){
var inst_16974 = cljs.core.async.close_BANG_(out);
var state_16987__$1 = state_16987;
var statearr_17033_18994 = state_16987__$1;
(statearr_17033_18994[(2)] = inst_16974);

(statearr_17033_18994[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16988 === (16))){
var inst_16981 = (state_16987[(2)]);
var state_16987__$1 = state_16987;
var statearr_17034_18995 = state_16987__$1;
(statearr_17034_18995[(2)] = inst_16981);

(statearr_17034_18995[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16988 === (10))){
var inst_16942 = (state_16987[(7)]);
var inst_16962 = (state_16987[(2)]);
var inst_16963 = (inst_16942 + (1));
var inst_16942__$1 = inst_16963;
var state_16987__$1 = (function (){var statearr_17036 = state_16987;
(statearr_17036[(14)] = inst_16962);

(statearr_17036[(7)] = inst_16942__$1);

return statearr_17036;
})();
var statearr_17038_18999 = state_16987__$1;
(statearr_17038_18999[(2)] = null);

(statearr_17038_18999[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16988 === (8))){
var inst_16967 = (state_16987[(2)]);
var state_16987__$1 = state_16987;
var statearr_17039_19003 = state_16987__$1;
(statearr_17039_19003[(2)] = inst_16967);

(statearr_17039_19003[(1)] = (5));


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
var cljs$core$async$state_machine__13326__auto__ = null;
var cljs$core$async$state_machine__13326__auto____0 = (function (){
var statearr_17041 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17041[(0)] = cljs$core$async$state_machine__13326__auto__);

(statearr_17041[(1)] = (1));

return statearr_17041;
});
var cljs$core$async$state_machine__13326__auto____1 = (function (state_16987){
while(true){
var ret_value__13328__auto__ = (function (){try{while(true){
var result__13329__auto__ = switch__13325__auto__(state_16987);
if(cljs.core.keyword_identical_QMARK_(result__13329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13329__auto__;
}
break;
}
}catch (e17042){var ex__13330__auto__ = e17042;
var statearr_17043_19012 = state_16987;
(statearr_17043_19012[(2)] = ex__13330__auto__);


if(cljs.core.seq((state_16987[(4)]))){
var statearr_17044_19013 = state_16987;
(statearr_17044_19013[(1)] = cljs.core.first((state_16987[(4)])));

} else {
throw ex__13330__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19014 = state_16987;
state_16987 = G__19014;
continue;
} else {
return ret_value__13328__auto__;
}
break;
}
});
cljs$core$async$state_machine__13326__auto__ = function(state_16987){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13326__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13326__auto____1.call(this,state_16987);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13326__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13326__auto____0;
cljs$core$async$state_machine__13326__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13326__auto____1;
return cljs$core$async$state_machine__13326__auto__;
})()
})();
var state__14143__auto__ = (function (){var statearr_17045 = f__14142__auto__();
(statearr_17045[(6)] = c__14141__auto___18964);

return statearr_17045;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14143__auto__);
}));

}

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
var G__17049 = arguments.length;
switch (G__17049) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14141__auto___19021 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14142__auto__ = (function (){var switch__13325__auto__ = (function (state_17085){
var state_val_17086 = (state_17085[(1)]);
if((state_val_17086 === (7))){
var inst_17062 = (state_17085[(7)]);
var inst_17063 = (state_17085[(8)]);
var inst_17062__$1 = (state_17085[(2)]);
var inst_17063__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17062__$1,(0),null);
var inst_17064 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17062__$1,(1),null);
var inst_17065 = (inst_17063__$1 == null);
var state_17085__$1 = (function (){var statearr_17090 = state_17085;
(statearr_17090[(7)] = inst_17062__$1);

(statearr_17090[(8)] = inst_17063__$1);

(statearr_17090[(9)] = inst_17064);

return statearr_17090;
})();
if(cljs.core.truth_(inst_17065)){
var statearr_17095_19027 = state_17085__$1;
(statearr_17095_19027[(1)] = (8));

} else {
var statearr_17096_19029 = state_17085__$1;
(statearr_17096_19029[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17086 === (1))){
var inst_17052 = cljs.core.vec(chs);
var inst_17053 = inst_17052;
var state_17085__$1 = (function (){var statearr_17099 = state_17085;
(statearr_17099[(10)] = inst_17053);

return statearr_17099;
})();
var statearr_17100_19030 = state_17085__$1;
(statearr_17100_19030[(2)] = null);

(statearr_17100_19030[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17086 === (4))){
var inst_17053 = (state_17085[(10)]);
var state_17085__$1 = state_17085;
return cljs.core.async.ioc_alts_BANG_(state_17085__$1,(7),inst_17053);
} else {
if((state_val_17086 === (6))){
var inst_17081 = (state_17085[(2)]);
var state_17085__$1 = state_17085;
var statearr_17103_19035 = state_17085__$1;
(statearr_17103_19035[(2)] = inst_17081);

(statearr_17103_19035[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17086 === (3))){
var inst_17083 = (state_17085[(2)]);
var state_17085__$1 = state_17085;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17085__$1,inst_17083);
} else {
if((state_val_17086 === (2))){
var inst_17053 = (state_17085[(10)]);
var inst_17055 = cljs.core.count(inst_17053);
var inst_17056 = (inst_17055 > (0));
var state_17085__$1 = state_17085;
if(cljs.core.truth_(inst_17056)){
var statearr_17111_19038 = state_17085__$1;
(statearr_17111_19038[(1)] = (4));

} else {
var statearr_17113_19039 = state_17085__$1;
(statearr_17113_19039[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17086 === (11))){
var inst_17053 = (state_17085[(10)]);
var inst_17073 = (state_17085[(2)]);
var tmp17104 = inst_17053;
var inst_17053__$1 = tmp17104;
var state_17085__$1 = (function (){var statearr_17116 = state_17085;
(statearr_17116[(11)] = inst_17073);

(statearr_17116[(10)] = inst_17053__$1);

return statearr_17116;
})();
var statearr_17120_19042 = state_17085__$1;
(statearr_17120_19042[(2)] = null);

(statearr_17120_19042[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17086 === (9))){
var inst_17063 = (state_17085[(8)]);
var state_17085__$1 = state_17085;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17085__$1,(11),out,inst_17063);
} else {
if((state_val_17086 === (5))){
var inst_17079 = cljs.core.async.close_BANG_(out);
var state_17085__$1 = state_17085;
var statearr_17121_19045 = state_17085__$1;
(statearr_17121_19045[(2)] = inst_17079);

(statearr_17121_19045[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17086 === (10))){
var inst_17077 = (state_17085[(2)]);
var state_17085__$1 = state_17085;
var statearr_17126_19047 = state_17085__$1;
(statearr_17126_19047[(2)] = inst_17077);

(statearr_17126_19047[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17086 === (8))){
var inst_17053 = (state_17085[(10)]);
var inst_17062 = (state_17085[(7)]);
var inst_17063 = (state_17085[(8)]);
var inst_17064 = (state_17085[(9)]);
var inst_17068 = (function (){var cs = inst_17053;
var vec__17058 = inst_17062;
var v = inst_17063;
var c = inst_17064;
return (function (p1__17046_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__17046_SHARP_);
});
})();
var inst_17069 = cljs.core.filterv(inst_17068,inst_17053);
var inst_17053__$1 = inst_17069;
var state_17085__$1 = (function (){var statearr_17128 = state_17085;
(statearr_17128[(10)] = inst_17053__$1);

return statearr_17128;
})();
var statearr_17132_19049 = state_17085__$1;
(statearr_17132_19049[(2)] = null);

(statearr_17132_19049[(1)] = (2));


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
var cljs$core$async$state_machine__13326__auto__ = null;
var cljs$core$async$state_machine__13326__auto____0 = (function (){
var statearr_17133 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17133[(0)] = cljs$core$async$state_machine__13326__auto__);

(statearr_17133[(1)] = (1));

return statearr_17133;
});
var cljs$core$async$state_machine__13326__auto____1 = (function (state_17085){
while(true){
var ret_value__13328__auto__ = (function (){try{while(true){
var result__13329__auto__ = switch__13325__auto__(state_17085);
if(cljs.core.keyword_identical_QMARK_(result__13329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13329__auto__;
}
break;
}
}catch (e17134){var ex__13330__auto__ = e17134;
var statearr_17135_19050 = state_17085;
(statearr_17135_19050[(2)] = ex__13330__auto__);


if(cljs.core.seq((state_17085[(4)]))){
var statearr_17137_19051 = state_17085;
(statearr_17137_19051[(1)] = cljs.core.first((state_17085[(4)])));

} else {
throw ex__13330__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19052 = state_17085;
state_17085 = G__19052;
continue;
} else {
return ret_value__13328__auto__;
}
break;
}
});
cljs$core$async$state_machine__13326__auto__ = function(state_17085){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13326__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13326__auto____1.call(this,state_17085);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13326__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13326__auto____0;
cljs$core$async$state_machine__13326__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13326__auto____1;
return cljs$core$async$state_machine__13326__auto__;
})()
})();
var state__14143__auto__ = (function (){var statearr_17156 = f__14142__auto__();
(statearr_17156[(6)] = c__14141__auto___19021);

return statearr_17156;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14143__auto__);
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
var G__17169 = arguments.length;
switch (G__17169) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14141__auto___19068 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14142__auto__ = (function (){var switch__13325__auto__ = (function (state_17196){
var state_val_17197 = (state_17196[(1)]);
if((state_val_17197 === (7))){
var inst_17178 = (state_17196[(7)]);
var inst_17178__$1 = (state_17196[(2)]);
var inst_17179 = (inst_17178__$1 == null);
var inst_17180 = cljs.core.not(inst_17179);
var state_17196__$1 = (function (){var statearr_17203 = state_17196;
(statearr_17203[(7)] = inst_17178__$1);

return statearr_17203;
})();
if(inst_17180){
var statearr_17204_19070 = state_17196__$1;
(statearr_17204_19070[(1)] = (8));

} else {
var statearr_17205_19073 = state_17196__$1;
(statearr_17205_19073[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17197 === (1))){
var inst_17173 = (0);
var state_17196__$1 = (function (){var statearr_17206 = state_17196;
(statearr_17206[(8)] = inst_17173);

return statearr_17206;
})();
var statearr_17207_19076 = state_17196__$1;
(statearr_17207_19076[(2)] = null);

(statearr_17207_19076[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17197 === (4))){
var state_17196__$1 = state_17196;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17196__$1,(7),ch);
} else {
if((state_val_17197 === (6))){
var inst_17191 = (state_17196[(2)]);
var state_17196__$1 = state_17196;
var statearr_17211_19077 = state_17196__$1;
(statearr_17211_19077[(2)] = inst_17191);

(statearr_17211_19077[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17197 === (3))){
var inst_17193 = (state_17196[(2)]);
var inst_17194 = cljs.core.async.close_BANG_(out);
var state_17196__$1 = (function (){var statearr_17220 = state_17196;
(statearr_17220[(9)] = inst_17193);

return statearr_17220;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17196__$1,inst_17194);
} else {
if((state_val_17197 === (2))){
var inst_17173 = (state_17196[(8)]);
var inst_17175 = (inst_17173 < n);
var state_17196__$1 = state_17196;
if(cljs.core.truth_(inst_17175)){
var statearr_17225_19086 = state_17196__$1;
(statearr_17225_19086[(1)] = (4));

} else {
var statearr_17226_19087 = state_17196__$1;
(statearr_17226_19087[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17197 === (11))){
var inst_17173 = (state_17196[(8)]);
var inst_17183 = (state_17196[(2)]);
var inst_17184 = (inst_17173 + (1));
var inst_17173__$1 = inst_17184;
var state_17196__$1 = (function (){var statearr_17228 = state_17196;
(statearr_17228[(10)] = inst_17183);

(statearr_17228[(8)] = inst_17173__$1);

return statearr_17228;
})();
var statearr_17232_19089 = state_17196__$1;
(statearr_17232_19089[(2)] = null);

(statearr_17232_19089[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17197 === (9))){
var state_17196__$1 = state_17196;
var statearr_17235_19091 = state_17196__$1;
(statearr_17235_19091[(2)] = null);

(statearr_17235_19091[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17197 === (5))){
var state_17196__$1 = state_17196;
var statearr_17236_19095 = state_17196__$1;
(statearr_17236_19095[(2)] = null);

(statearr_17236_19095[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17197 === (10))){
var inst_17188 = (state_17196[(2)]);
var state_17196__$1 = state_17196;
var statearr_17239_19096 = state_17196__$1;
(statearr_17239_19096[(2)] = inst_17188);

(statearr_17239_19096[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17197 === (8))){
var inst_17178 = (state_17196[(7)]);
var state_17196__$1 = state_17196;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17196__$1,(11),out,inst_17178);
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
var cljs$core$async$state_machine__13326__auto__ = null;
var cljs$core$async$state_machine__13326__auto____0 = (function (){
var statearr_17241 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17241[(0)] = cljs$core$async$state_machine__13326__auto__);

(statearr_17241[(1)] = (1));

return statearr_17241;
});
var cljs$core$async$state_machine__13326__auto____1 = (function (state_17196){
while(true){
var ret_value__13328__auto__ = (function (){try{while(true){
var result__13329__auto__ = switch__13325__auto__(state_17196);
if(cljs.core.keyword_identical_QMARK_(result__13329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13329__auto__;
}
break;
}
}catch (e17244){var ex__13330__auto__ = e17244;
var statearr_17245_19104 = state_17196;
(statearr_17245_19104[(2)] = ex__13330__auto__);


if(cljs.core.seq((state_17196[(4)]))){
var statearr_17246_19105 = state_17196;
(statearr_17246_19105[(1)] = cljs.core.first((state_17196[(4)])));

} else {
throw ex__13330__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19106 = state_17196;
state_17196 = G__19106;
continue;
} else {
return ret_value__13328__auto__;
}
break;
}
});
cljs$core$async$state_machine__13326__auto__ = function(state_17196){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13326__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13326__auto____1.call(this,state_17196);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13326__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13326__auto____0;
cljs$core$async$state_machine__13326__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13326__auto____1;
return cljs$core$async$state_machine__13326__auto__;
})()
})();
var state__14143__auto__ = (function (){var statearr_17247 = f__14142__auto__();
(statearr_17247[(6)] = c__14141__auto___19068);

return statearr_17247;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14143__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17283 = (function (f,ch,meta17260,_,fn1,meta17284){
this.f = f;
this.ch = ch;
this.meta17260 = meta17260;
this._ = _;
this.fn1 = fn1;
this.meta17284 = meta17284;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17283.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17285,meta17284__$1){
var self__ = this;
var _17285__$1 = this;
return (new cljs.core.async.t_cljs$core$async17283(self__.f,self__.ch,self__.meta17260,self__._,self__.fn1,meta17284__$1));
}));

(cljs.core.async.t_cljs$core$async17283.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17285){
var self__ = this;
var _17285__$1 = this;
return self__.meta17284;
}));

(cljs.core.async.t_cljs$core$async17283.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17283.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async17283.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async17283.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__17250_SHARP_){
var G__17297 = (((p1__17250_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__17250_SHARP_) : self__.f.call(null,p1__17250_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__17297) : f1.call(null,G__17297));
});
}));

(cljs.core.async.t_cljs$core$async17283.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17260","meta17260",-797337708,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async17259","cljs.core.async/t_cljs$core$async17259",-1972743806,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta17284","meta17284",-808644203,null)], null);
}));

(cljs.core.async.t_cljs$core$async17283.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17283.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17283");

(cljs.core.async.t_cljs$core$async17283.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async17283");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17283.
 */
cljs.core.async.__GT_t_cljs$core$async17283 = (function cljs$core$async$__GT_t_cljs$core$async17283(f,ch,meta17260,_,fn1,meta17284){
return (new cljs.core.async.t_cljs$core$async17283(f,ch,meta17260,_,fn1,meta17284));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17259 = (function (f,ch,meta17260){
this.f = f;
this.ch = ch;
this.meta17260 = meta17260;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17259.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17261,meta17260__$1){
var self__ = this;
var _17261__$1 = this;
return (new cljs.core.async.t_cljs$core$async17259(self__.f,self__.ch,meta17260__$1));
}));

(cljs.core.async.t_cljs$core$async17259.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17261){
var self__ = this;
var _17261__$1 = this;
return self__.meta17260;
}));

(cljs.core.async.t_cljs$core$async17259.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17259.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17259.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17259.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17259.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async17283(self__.f,self__.ch,self__.meta17260,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5140__auto__ = ret;
if(cljs.core.truth_(and__5140__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5140__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__17310 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__17310) : self__.f.call(null,G__17310));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async17259.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17259.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async17259.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17260","meta17260",-797337708,null)], null);
}));

(cljs.core.async.t_cljs$core$async17259.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17259.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17259");

(cljs.core.async.t_cljs$core$async17259.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async17259");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17259.
 */
cljs.core.async.__GT_t_cljs$core$async17259 = (function cljs$core$async$__GT_t_cljs$core$async17259(f,ch,meta17260){
return (new cljs.core.async.t_cljs$core$async17259(f,ch,meta17260));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async17259(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17319 = (function (f,ch,meta17320){
this.f = f;
this.ch = ch;
this.meta17320 = meta17320;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17319.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17321,meta17320__$1){
var self__ = this;
var _17321__$1 = this;
return (new cljs.core.async.t_cljs$core$async17319(self__.f,self__.ch,meta17320__$1));
}));

(cljs.core.async.t_cljs$core$async17319.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17321){
var self__ = this;
var _17321__$1 = this;
return self__.meta17320;
}));

(cljs.core.async.t_cljs$core$async17319.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17319.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17319.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17319.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async17319.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17319.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async17319.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17320","meta17320",700373967,null)], null);
}));

(cljs.core.async.t_cljs$core$async17319.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17319.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17319");

(cljs.core.async.t_cljs$core$async17319.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async17319");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17319.
 */
cljs.core.async.__GT_t_cljs$core$async17319 = (function cljs$core$async$__GT_t_cljs$core$async17319(f,ch,meta17320){
return (new cljs.core.async.t_cljs$core$async17319(f,ch,meta17320));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async17319(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17331 = (function (p,ch,meta17332){
this.p = p;
this.ch = ch;
this.meta17332 = meta17332;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17331.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17333,meta17332__$1){
var self__ = this;
var _17333__$1 = this;
return (new cljs.core.async.t_cljs$core$async17331(self__.p,self__.ch,meta17332__$1));
}));

(cljs.core.async.t_cljs$core$async17331.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17333){
var self__ = this;
var _17333__$1 = this;
return self__.meta17332;
}));

(cljs.core.async.t_cljs$core$async17331.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17331.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17331.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17331.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17331.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async17331.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17331.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async17331.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17332","meta17332",1650219018,null)], null);
}));

(cljs.core.async.t_cljs$core$async17331.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17331.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17331");

(cljs.core.async.t_cljs$core$async17331.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async17331");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17331.
 */
cljs.core.async.__GT_t_cljs$core$async17331 = (function cljs$core$async$__GT_t_cljs$core$async17331(p,ch,meta17332){
return (new cljs.core.async.t_cljs$core$async17331(p,ch,meta17332));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async17331(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__17366 = arguments.length;
switch (G__17366) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14141__auto___19247 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14142__auto__ = (function (){var switch__13325__auto__ = (function (state_17393){
var state_val_17394 = (state_17393[(1)]);
if((state_val_17394 === (7))){
var inst_17389 = (state_17393[(2)]);
var state_17393__$1 = state_17393;
var statearr_17395_19248 = state_17393__$1;
(statearr_17395_19248[(2)] = inst_17389);

(statearr_17395_19248[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17394 === (1))){
var state_17393__$1 = state_17393;
var statearr_17398_19250 = state_17393__$1;
(statearr_17398_19250[(2)] = null);

(statearr_17398_19250[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17394 === (4))){
var inst_17371 = (state_17393[(7)]);
var inst_17371__$1 = (state_17393[(2)]);
var inst_17372 = (inst_17371__$1 == null);
var state_17393__$1 = (function (){var statearr_17403 = state_17393;
(statearr_17403[(7)] = inst_17371__$1);

return statearr_17403;
})();
if(cljs.core.truth_(inst_17372)){
var statearr_17404_19251 = state_17393__$1;
(statearr_17404_19251[(1)] = (5));

} else {
var statearr_17405_19253 = state_17393__$1;
(statearr_17405_19253[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17394 === (6))){
var inst_17371 = (state_17393[(7)]);
var inst_17377 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_17371) : p.call(null,inst_17371));
var state_17393__$1 = state_17393;
if(cljs.core.truth_(inst_17377)){
var statearr_17410_19258 = state_17393__$1;
(statearr_17410_19258[(1)] = (8));

} else {
var statearr_17411_19260 = state_17393__$1;
(statearr_17411_19260[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17394 === (3))){
var inst_17391 = (state_17393[(2)]);
var state_17393__$1 = state_17393;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17393__$1,inst_17391);
} else {
if((state_val_17394 === (2))){
var state_17393__$1 = state_17393;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17393__$1,(4),ch);
} else {
if((state_val_17394 === (11))){
var inst_17383 = (state_17393[(2)]);
var state_17393__$1 = state_17393;
var statearr_17412_19262 = state_17393__$1;
(statearr_17412_19262[(2)] = inst_17383);

(statearr_17412_19262[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17394 === (9))){
var state_17393__$1 = state_17393;
var statearr_17414_19263 = state_17393__$1;
(statearr_17414_19263[(2)] = null);

(statearr_17414_19263[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17394 === (5))){
var inst_17375 = cljs.core.async.close_BANG_(out);
var state_17393__$1 = state_17393;
var statearr_17415_19265 = state_17393__$1;
(statearr_17415_19265[(2)] = inst_17375);

(statearr_17415_19265[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17394 === (10))){
var inst_17386 = (state_17393[(2)]);
var state_17393__$1 = (function (){var statearr_17416 = state_17393;
(statearr_17416[(8)] = inst_17386);

return statearr_17416;
})();
var statearr_17417_19269 = state_17393__$1;
(statearr_17417_19269[(2)] = null);

(statearr_17417_19269[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17394 === (8))){
var inst_17371 = (state_17393[(7)]);
var state_17393__$1 = state_17393;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17393__$1,(11),out,inst_17371);
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
var cljs$core$async$state_machine__13326__auto__ = null;
var cljs$core$async$state_machine__13326__auto____0 = (function (){
var statearr_17418 = [null,null,null,null,null,null,null,null,null];
(statearr_17418[(0)] = cljs$core$async$state_machine__13326__auto__);

(statearr_17418[(1)] = (1));

return statearr_17418;
});
var cljs$core$async$state_machine__13326__auto____1 = (function (state_17393){
while(true){
var ret_value__13328__auto__ = (function (){try{while(true){
var result__13329__auto__ = switch__13325__auto__(state_17393);
if(cljs.core.keyword_identical_QMARK_(result__13329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13329__auto__;
}
break;
}
}catch (e17423){var ex__13330__auto__ = e17423;
var statearr_17424_19276 = state_17393;
(statearr_17424_19276[(2)] = ex__13330__auto__);


if(cljs.core.seq((state_17393[(4)]))){
var statearr_17429_19278 = state_17393;
(statearr_17429_19278[(1)] = cljs.core.first((state_17393[(4)])));

} else {
throw ex__13330__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19284 = state_17393;
state_17393 = G__19284;
continue;
} else {
return ret_value__13328__auto__;
}
break;
}
});
cljs$core$async$state_machine__13326__auto__ = function(state_17393){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13326__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13326__auto____1.call(this,state_17393);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13326__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13326__auto____0;
cljs$core$async$state_machine__13326__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13326__auto____1;
return cljs$core$async$state_machine__13326__auto__;
})()
})();
var state__14143__auto__ = (function (){var statearr_17434 = f__14142__auto__();
(statearr_17434[(6)] = c__14141__auto___19247);

return statearr_17434;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14143__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__17436 = arguments.length;
switch (G__17436) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

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
var c__14141__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14142__auto__ = (function (){var switch__13325__auto__ = (function (state_17513){
var state_val_17514 = (state_17513[(1)]);
if((state_val_17514 === (7))){
var inst_17507 = (state_17513[(2)]);
var state_17513__$1 = state_17513;
var statearr_17522_19306 = state_17513__$1;
(statearr_17522_19306[(2)] = inst_17507);

(statearr_17522_19306[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17514 === (20))){
var inst_17473 = (state_17513[(7)]);
var inst_17488 = (state_17513[(2)]);
var inst_17489 = cljs.core.next(inst_17473);
var inst_17451 = inst_17489;
var inst_17452 = null;
var inst_17453 = (0);
var inst_17454 = (0);
var state_17513__$1 = (function (){var statearr_17524 = state_17513;
(statearr_17524[(8)] = inst_17488);

(statearr_17524[(9)] = inst_17451);

(statearr_17524[(10)] = inst_17452);

(statearr_17524[(11)] = inst_17453);

(statearr_17524[(12)] = inst_17454);

return statearr_17524;
})();
var statearr_17525_19321 = state_17513__$1;
(statearr_17525_19321[(2)] = null);

(statearr_17525_19321[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17514 === (1))){
var state_17513__$1 = state_17513;
var statearr_17526_19323 = state_17513__$1;
(statearr_17526_19323[(2)] = null);

(statearr_17526_19323[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17514 === (4))){
var inst_17440 = (state_17513[(13)]);
var inst_17440__$1 = (state_17513[(2)]);
var inst_17441 = (inst_17440__$1 == null);
var state_17513__$1 = (function (){var statearr_17527 = state_17513;
(statearr_17527[(13)] = inst_17440__$1);

return statearr_17527;
})();
if(cljs.core.truth_(inst_17441)){
var statearr_17528_19324 = state_17513__$1;
(statearr_17528_19324[(1)] = (5));

} else {
var statearr_17529_19325 = state_17513__$1;
(statearr_17529_19325[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17514 === (15))){
var state_17513__$1 = state_17513;
var statearr_17535_19332 = state_17513__$1;
(statearr_17535_19332[(2)] = null);

(statearr_17535_19332[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17514 === (21))){
var state_17513__$1 = state_17513;
var statearr_17540_19337 = state_17513__$1;
(statearr_17540_19337[(2)] = null);

(statearr_17540_19337[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17514 === (13))){
var inst_17454 = (state_17513[(12)]);
var inst_17451 = (state_17513[(9)]);
var inst_17452 = (state_17513[(10)]);
var inst_17453 = (state_17513[(11)]);
var inst_17464 = (state_17513[(2)]);
var inst_17465 = (inst_17454 + (1));
var tmp17531 = inst_17451;
var tmp17532 = inst_17453;
var tmp17533 = inst_17452;
var inst_17451__$1 = tmp17531;
var inst_17452__$1 = tmp17533;
var inst_17453__$1 = tmp17532;
var inst_17454__$1 = inst_17465;
var state_17513__$1 = (function (){var statearr_17543 = state_17513;
(statearr_17543[(14)] = inst_17464);

(statearr_17543[(9)] = inst_17451__$1);

(statearr_17543[(10)] = inst_17452__$1);

(statearr_17543[(11)] = inst_17453__$1);

(statearr_17543[(12)] = inst_17454__$1);

return statearr_17543;
})();
var statearr_17544_19339 = state_17513__$1;
(statearr_17544_19339[(2)] = null);

(statearr_17544_19339[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17514 === (22))){
var state_17513__$1 = state_17513;
var statearr_17547_19340 = state_17513__$1;
(statearr_17547_19340[(2)] = null);

(statearr_17547_19340[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17514 === (6))){
var inst_17440 = (state_17513[(13)]);
var inst_17449 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_17440) : f.call(null,inst_17440));
var inst_17450 = cljs.core.seq(inst_17449);
var inst_17451 = inst_17450;
var inst_17452 = null;
var inst_17453 = (0);
var inst_17454 = (0);
var state_17513__$1 = (function (){var statearr_17552 = state_17513;
(statearr_17552[(9)] = inst_17451);

(statearr_17552[(10)] = inst_17452);

(statearr_17552[(11)] = inst_17453);

(statearr_17552[(12)] = inst_17454);

return statearr_17552;
})();
var statearr_17555_19345 = state_17513__$1;
(statearr_17555_19345[(2)] = null);

(statearr_17555_19345[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17514 === (17))){
var inst_17473 = (state_17513[(7)]);
var inst_17478 = cljs.core.chunk_first(inst_17473);
var inst_17481 = cljs.core.chunk_rest(inst_17473);
var inst_17482 = cljs.core.count(inst_17478);
var inst_17451 = inst_17481;
var inst_17452 = inst_17478;
var inst_17453 = inst_17482;
var inst_17454 = (0);
var state_17513__$1 = (function (){var statearr_17557 = state_17513;
(statearr_17557[(9)] = inst_17451);

(statearr_17557[(10)] = inst_17452);

(statearr_17557[(11)] = inst_17453);

(statearr_17557[(12)] = inst_17454);

return statearr_17557;
})();
var statearr_17558_19351 = state_17513__$1;
(statearr_17558_19351[(2)] = null);

(statearr_17558_19351[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17514 === (3))){
var inst_17509 = (state_17513[(2)]);
var state_17513__$1 = state_17513;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17513__$1,inst_17509);
} else {
if((state_val_17514 === (12))){
var inst_17497 = (state_17513[(2)]);
var state_17513__$1 = state_17513;
var statearr_17563_19359 = state_17513__$1;
(statearr_17563_19359[(2)] = inst_17497);

(statearr_17563_19359[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17514 === (2))){
var state_17513__$1 = state_17513;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17513__$1,(4),in$);
} else {
if((state_val_17514 === (23))){
var inst_17505 = (state_17513[(2)]);
var state_17513__$1 = state_17513;
var statearr_17564_19361 = state_17513__$1;
(statearr_17564_19361[(2)] = inst_17505);

(statearr_17564_19361[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17514 === (19))){
var inst_17492 = (state_17513[(2)]);
var state_17513__$1 = state_17513;
var statearr_17574_19362 = state_17513__$1;
(statearr_17574_19362[(2)] = inst_17492);

(statearr_17574_19362[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17514 === (11))){
var inst_17451 = (state_17513[(9)]);
var inst_17473 = (state_17513[(7)]);
var inst_17473__$1 = cljs.core.seq(inst_17451);
var state_17513__$1 = (function (){var statearr_17583 = state_17513;
(statearr_17583[(7)] = inst_17473__$1);

return statearr_17583;
})();
if(inst_17473__$1){
var statearr_17584_19369 = state_17513__$1;
(statearr_17584_19369[(1)] = (14));

} else {
var statearr_17591_19370 = state_17513__$1;
(statearr_17591_19370[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17514 === (9))){
var inst_17499 = (state_17513[(2)]);
var inst_17500 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_17513__$1 = (function (){var statearr_17593 = state_17513;
(statearr_17593[(15)] = inst_17499);

return statearr_17593;
})();
if(cljs.core.truth_(inst_17500)){
var statearr_17594_19371 = state_17513__$1;
(statearr_17594_19371[(1)] = (21));

} else {
var statearr_17596_19372 = state_17513__$1;
(statearr_17596_19372[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17514 === (5))){
var inst_17443 = cljs.core.async.close_BANG_(out);
var state_17513__$1 = state_17513;
var statearr_17597_19373 = state_17513__$1;
(statearr_17597_19373[(2)] = inst_17443);

(statearr_17597_19373[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17514 === (14))){
var inst_17473 = (state_17513[(7)]);
var inst_17475 = cljs.core.chunked_seq_QMARK_(inst_17473);
var state_17513__$1 = state_17513;
if(inst_17475){
var statearr_17607_19374 = state_17513__$1;
(statearr_17607_19374[(1)] = (17));

} else {
var statearr_17613_19381 = state_17513__$1;
(statearr_17613_19381[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17514 === (16))){
var inst_17495 = (state_17513[(2)]);
var state_17513__$1 = state_17513;
var statearr_17619_19382 = state_17513__$1;
(statearr_17619_19382[(2)] = inst_17495);

(statearr_17619_19382[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17514 === (10))){
var inst_17452 = (state_17513[(10)]);
var inst_17454 = (state_17513[(12)]);
var inst_17462 = cljs.core._nth(inst_17452,inst_17454);
var state_17513__$1 = state_17513;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17513__$1,(13),out,inst_17462);
} else {
if((state_val_17514 === (18))){
var inst_17473 = (state_17513[(7)]);
var inst_17486 = cljs.core.first(inst_17473);
var state_17513__$1 = state_17513;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17513__$1,(20),out,inst_17486);
} else {
if((state_val_17514 === (8))){
var inst_17454 = (state_17513[(12)]);
var inst_17453 = (state_17513[(11)]);
var inst_17458 = (inst_17454 < inst_17453);
var inst_17459 = inst_17458;
var state_17513__$1 = state_17513;
if(cljs.core.truth_(inst_17459)){
var statearr_17622_19387 = state_17513__$1;
(statearr_17622_19387[(1)] = (10));

} else {
var statearr_17623_19388 = state_17513__$1;
(statearr_17623_19388[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__13326__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__13326__auto____0 = (function (){
var statearr_17627 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17627[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__13326__auto__);

(statearr_17627[(1)] = (1));

return statearr_17627;
});
var cljs$core$async$mapcat_STAR__$_state_machine__13326__auto____1 = (function (state_17513){
while(true){
var ret_value__13328__auto__ = (function (){try{while(true){
var result__13329__auto__ = switch__13325__auto__(state_17513);
if(cljs.core.keyword_identical_QMARK_(result__13329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13329__auto__;
}
break;
}
}catch (e17629){var ex__13330__auto__ = e17629;
var statearr_17630_19391 = state_17513;
(statearr_17630_19391[(2)] = ex__13330__auto__);


if(cljs.core.seq((state_17513[(4)]))){
var statearr_17631_19393 = state_17513;
(statearr_17631_19393[(1)] = cljs.core.first((state_17513[(4)])));

} else {
throw ex__13330__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19397 = state_17513;
state_17513 = G__19397;
continue;
} else {
return ret_value__13328__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__13326__auto__ = function(state_17513){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__13326__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__13326__auto____1.call(this,state_17513);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__13326__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__13326__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__13326__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__13326__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__13326__auto__;
})()
})();
var state__14143__auto__ = (function (){var statearr_17637 = f__14142__auto__();
(statearr_17637[(6)] = c__14141__auto__);

return statearr_17637;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14143__auto__);
}));

return c__14141__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__17642 = arguments.length;
switch (G__17642) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

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
var G__17646 = arguments.length;
switch (G__17646) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

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
var G__17651 = arguments.length;
switch (G__17651) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14141__auto___19421 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14142__auto__ = (function (){var switch__13325__auto__ = (function (state_17687){
var state_val_17688 = (state_17687[(1)]);
if((state_val_17688 === (7))){
var inst_17680 = (state_17687[(2)]);
var state_17687__$1 = state_17687;
var statearr_17691_19426 = state_17687__$1;
(statearr_17691_19426[(2)] = inst_17680);

(statearr_17691_19426[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17688 === (1))){
var inst_17654 = null;
var state_17687__$1 = (function (){var statearr_17695 = state_17687;
(statearr_17695[(7)] = inst_17654);

return statearr_17695;
})();
var statearr_17696_19431 = state_17687__$1;
(statearr_17696_19431[(2)] = null);

(statearr_17696_19431[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17688 === (4))){
var inst_17663 = (state_17687[(8)]);
var inst_17663__$1 = (state_17687[(2)]);
var inst_17664 = (inst_17663__$1 == null);
var inst_17665 = cljs.core.not(inst_17664);
var state_17687__$1 = (function (){var statearr_17697 = state_17687;
(statearr_17697[(8)] = inst_17663__$1);

return statearr_17697;
})();
if(inst_17665){
var statearr_17698_19433 = state_17687__$1;
(statearr_17698_19433[(1)] = (5));

} else {
var statearr_17699_19435 = state_17687__$1;
(statearr_17699_19435[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17688 === (6))){
var state_17687__$1 = state_17687;
var statearr_17700_19437 = state_17687__$1;
(statearr_17700_19437[(2)] = null);

(statearr_17700_19437[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17688 === (3))){
var inst_17682 = (state_17687[(2)]);
var inst_17683 = cljs.core.async.close_BANG_(out);
var state_17687__$1 = (function (){var statearr_17709 = state_17687;
(statearr_17709[(9)] = inst_17682);

return statearr_17709;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17687__$1,inst_17683);
} else {
if((state_val_17688 === (2))){
var state_17687__$1 = state_17687;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17687__$1,(4),ch);
} else {
if((state_val_17688 === (11))){
var inst_17663 = (state_17687[(8)]);
var inst_17674 = (state_17687[(2)]);
var inst_17654 = inst_17663;
var state_17687__$1 = (function (){var statearr_17714 = state_17687;
(statearr_17714[(10)] = inst_17674);

(statearr_17714[(7)] = inst_17654);

return statearr_17714;
})();
var statearr_17722_19440 = state_17687__$1;
(statearr_17722_19440[(2)] = null);

(statearr_17722_19440[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17688 === (9))){
var inst_17663 = (state_17687[(8)]);
var state_17687__$1 = state_17687;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17687__$1,(11),out,inst_17663);
} else {
if((state_val_17688 === (5))){
var inst_17663 = (state_17687[(8)]);
var inst_17654 = (state_17687[(7)]);
var inst_17667 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17663,inst_17654);
var state_17687__$1 = state_17687;
if(inst_17667){
var statearr_17724_19447 = state_17687__$1;
(statearr_17724_19447[(1)] = (8));

} else {
var statearr_17727_19448 = state_17687__$1;
(statearr_17727_19448[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17688 === (10))){
var inst_17677 = (state_17687[(2)]);
var state_17687__$1 = state_17687;
var statearr_17728_19454 = state_17687__$1;
(statearr_17728_19454[(2)] = inst_17677);

(statearr_17728_19454[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17688 === (8))){
var inst_17654 = (state_17687[(7)]);
var tmp17723 = inst_17654;
var inst_17654__$1 = tmp17723;
var state_17687__$1 = (function (){var statearr_17729 = state_17687;
(statearr_17729[(7)] = inst_17654__$1);

return statearr_17729;
})();
var statearr_17730_19460 = state_17687__$1;
(statearr_17730_19460[(2)] = null);

(statearr_17730_19460[(1)] = (2));


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
var cljs$core$async$state_machine__13326__auto__ = null;
var cljs$core$async$state_machine__13326__auto____0 = (function (){
var statearr_17731 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17731[(0)] = cljs$core$async$state_machine__13326__auto__);

(statearr_17731[(1)] = (1));

return statearr_17731;
});
var cljs$core$async$state_machine__13326__auto____1 = (function (state_17687){
while(true){
var ret_value__13328__auto__ = (function (){try{while(true){
var result__13329__auto__ = switch__13325__auto__(state_17687);
if(cljs.core.keyword_identical_QMARK_(result__13329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13329__auto__;
}
break;
}
}catch (e17732){var ex__13330__auto__ = e17732;
var statearr_17733_19468 = state_17687;
(statearr_17733_19468[(2)] = ex__13330__auto__);


if(cljs.core.seq((state_17687[(4)]))){
var statearr_17734_19474 = state_17687;
(statearr_17734_19474[(1)] = cljs.core.first((state_17687[(4)])));

} else {
throw ex__13330__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19475 = state_17687;
state_17687 = G__19475;
continue;
} else {
return ret_value__13328__auto__;
}
break;
}
});
cljs$core$async$state_machine__13326__auto__ = function(state_17687){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13326__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13326__auto____1.call(this,state_17687);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13326__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13326__auto____0;
cljs$core$async$state_machine__13326__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13326__auto____1;
return cljs$core$async$state_machine__13326__auto__;
})()
})();
var state__14143__auto__ = (function (){var statearr_17737 = f__14142__auto__();
(statearr_17737[(6)] = c__14141__auto___19421);

return statearr_17737;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14143__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__17743 = arguments.length;
switch (G__17743) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14141__auto___19489 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14142__auto__ = (function (){var switch__13325__auto__ = (function (state_17790){
var state_val_17791 = (state_17790[(1)]);
if((state_val_17791 === (7))){
var inst_17784 = (state_17790[(2)]);
var state_17790__$1 = state_17790;
var statearr_17793_19498 = state_17790__$1;
(statearr_17793_19498[(2)] = inst_17784);

(statearr_17793_19498[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17791 === (1))){
var inst_17748 = (new Array(n));
var inst_17749 = inst_17748;
var inst_17750 = (0);
var state_17790__$1 = (function (){var statearr_17798 = state_17790;
(statearr_17798[(7)] = inst_17749);

(statearr_17798[(8)] = inst_17750);

return statearr_17798;
})();
var statearr_17800_19503 = state_17790__$1;
(statearr_17800_19503[(2)] = null);

(statearr_17800_19503[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17791 === (4))){
var inst_17754 = (state_17790[(9)]);
var inst_17754__$1 = (state_17790[(2)]);
var inst_17756 = (inst_17754__$1 == null);
var inst_17757 = cljs.core.not(inst_17756);
var state_17790__$1 = (function (){var statearr_17801 = state_17790;
(statearr_17801[(9)] = inst_17754__$1);

return statearr_17801;
})();
if(inst_17757){
var statearr_17802_19518 = state_17790__$1;
(statearr_17802_19518[(1)] = (5));

} else {
var statearr_17803_19521 = state_17790__$1;
(statearr_17803_19521[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17791 === (15))){
var inst_17778 = (state_17790[(2)]);
var state_17790__$1 = state_17790;
var statearr_17805_19530 = state_17790__$1;
(statearr_17805_19530[(2)] = inst_17778);

(statearr_17805_19530[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17791 === (13))){
var state_17790__$1 = state_17790;
var statearr_17806_19535 = state_17790__$1;
(statearr_17806_19535[(2)] = null);

(statearr_17806_19535[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17791 === (6))){
var inst_17750 = (state_17790[(8)]);
var inst_17773 = (inst_17750 > (0));
var state_17790__$1 = state_17790;
if(cljs.core.truth_(inst_17773)){
var statearr_17807_19539 = state_17790__$1;
(statearr_17807_19539[(1)] = (12));

} else {
var statearr_17808_19540 = state_17790__$1;
(statearr_17808_19540[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17791 === (3))){
var inst_17786 = (state_17790[(2)]);
var state_17790__$1 = state_17790;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17790__$1,inst_17786);
} else {
if((state_val_17791 === (12))){
var inst_17749 = (state_17790[(7)]);
var inst_17776 = cljs.core.vec(inst_17749);
var state_17790__$1 = state_17790;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17790__$1,(15),out,inst_17776);
} else {
if((state_val_17791 === (2))){
var state_17790__$1 = state_17790;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17790__$1,(4),ch);
} else {
if((state_val_17791 === (11))){
var inst_17767 = (state_17790[(2)]);
var inst_17768 = (new Array(n));
var inst_17749 = inst_17768;
var inst_17750 = (0);
var state_17790__$1 = (function (){var statearr_17818 = state_17790;
(statearr_17818[(10)] = inst_17767);

(statearr_17818[(7)] = inst_17749);

(statearr_17818[(8)] = inst_17750);

return statearr_17818;
})();
var statearr_17820_19544 = state_17790__$1;
(statearr_17820_19544[(2)] = null);

(statearr_17820_19544[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17791 === (9))){
var inst_17749 = (state_17790[(7)]);
var inst_17765 = cljs.core.vec(inst_17749);
var state_17790__$1 = state_17790;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17790__$1,(11),out,inst_17765);
} else {
if((state_val_17791 === (5))){
var inst_17749 = (state_17790[(7)]);
var inst_17750 = (state_17790[(8)]);
var inst_17754 = (state_17790[(9)]);
var inst_17760 = (state_17790[(11)]);
var inst_17759 = (inst_17749[inst_17750] = inst_17754);
var inst_17760__$1 = (inst_17750 + (1));
var inst_17761 = (inst_17760__$1 < n);
var state_17790__$1 = (function (){var statearr_17828 = state_17790;
(statearr_17828[(12)] = inst_17759);

(statearr_17828[(11)] = inst_17760__$1);

return statearr_17828;
})();
if(cljs.core.truth_(inst_17761)){
var statearr_17829_19549 = state_17790__$1;
(statearr_17829_19549[(1)] = (8));

} else {
var statearr_17830_19554 = state_17790__$1;
(statearr_17830_19554[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17791 === (14))){
var inst_17781 = (state_17790[(2)]);
var inst_17782 = cljs.core.async.close_BANG_(out);
var state_17790__$1 = (function (){var statearr_17833 = state_17790;
(statearr_17833[(13)] = inst_17781);

return statearr_17833;
})();
var statearr_17836_19556 = state_17790__$1;
(statearr_17836_19556[(2)] = inst_17782);

(statearr_17836_19556[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17791 === (10))){
var inst_17771 = (state_17790[(2)]);
var state_17790__$1 = state_17790;
var statearr_17839_19561 = state_17790__$1;
(statearr_17839_19561[(2)] = inst_17771);

(statearr_17839_19561[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17791 === (8))){
var inst_17749 = (state_17790[(7)]);
var inst_17760 = (state_17790[(11)]);
var tmp17832 = inst_17749;
var inst_17749__$1 = tmp17832;
var inst_17750 = inst_17760;
var state_17790__$1 = (function (){var statearr_17840 = state_17790;
(statearr_17840[(7)] = inst_17749__$1);

(statearr_17840[(8)] = inst_17750);

return statearr_17840;
})();
var statearr_17841_19569 = state_17790__$1;
(statearr_17841_19569[(2)] = null);

(statearr_17841_19569[(1)] = (2));


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
var cljs$core$async$state_machine__13326__auto__ = null;
var cljs$core$async$state_machine__13326__auto____0 = (function (){
var statearr_17846 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17846[(0)] = cljs$core$async$state_machine__13326__auto__);

(statearr_17846[(1)] = (1));

return statearr_17846;
});
var cljs$core$async$state_machine__13326__auto____1 = (function (state_17790){
while(true){
var ret_value__13328__auto__ = (function (){try{while(true){
var result__13329__auto__ = switch__13325__auto__(state_17790);
if(cljs.core.keyword_identical_QMARK_(result__13329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13329__auto__;
}
break;
}
}catch (e17854){var ex__13330__auto__ = e17854;
var statearr_17855_19577 = state_17790;
(statearr_17855_19577[(2)] = ex__13330__auto__);


if(cljs.core.seq((state_17790[(4)]))){
var statearr_17856_19578 = state_17790;
(statearr_17856_19578[(1)] = cljs.core.first((state_17790[(4)])));

} else {
throw ex__13330__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19579 = state_17790;
state_17790 = G__19579;
continue;
} else {
return ret_value__13328__auto__;
}
break;
}
});
cljs$core$async$state_machine__13326__auto__ = function(state_17790){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13326__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13326__auto____1.call(this,state_17790);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13326__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13326__auto____0;
cljs$core$async$state_machine__13326__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13326__auto____1;
return cljs$core$async$state_machine__13326__auto__;
})()
})();
var state__14143__auto__ = (function (){var statearr_17865 = f__14142__auto__();
(statearr_17865[(6)] = c__14141__auto___19489);

return statearr_17865;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14143__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__17883 = arguments.length;
switch (G__17883) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14141__auto___19581 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14142__auto__ = (function (){var switch__13325__auto__ = (function (state_17964){
var state_val_17965 = (state_17964[(1)]);
if((state_val_17965 === (7))){
var inst_17960 = (state_17964[(2)]);
var state_17964__$1 = state_17964;
var statearr_17969_19586 = state_17964__$1;
(statearr_17969_19586[(2)] = inst_17960);

(statearr_17969_19586[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17965 === (1))){
var inst_17918 = [];
var inst_17919 = inst_17918;
var inst_17920 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_17964__$1 = (function (){var statearr_17975 = state_17964;
(statearr_17975[(7)] = inst_17919);

(statearr_17975[(8)] = inst_17920);

return statearr_17975;
})();
var statearr_17978_19594 = state_17964__$1;
(statearr_17978_19594[(2)] = null);

(statearr_17978_19594[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17965 === (4))){
var inst_17923 = (state_17964[(9)]);
var inst_17923__$1 = (state_17964[(2)]);
var inst_17924 = (inst_17923__$1 == null);
var inst_17925 = cljs.core.not(inst_17924);
var state_17964__$1 = (function (){var statearr_17979 = state_17964;
(statearr_17979[(9)] = inst_17923__$1);

return statearr_17979;
})();
if(inst_17925){
var statearr_17982_19595 = state_17964__$1;
(statearr_17982_19595[(1)] = (5));

} else {
var statearr_17984_19598 = state_17964__$1;
(statearr_17984_19598[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17965 === (15))){
var inst_17919 = (state_17964[(7)]);
var inst_17952 = cljs.core.vec(inst_17919);
var state_17964__$1 = state_17964;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17964__$1,(18),out,inst_17952);
} else {
if((state_val_17965 === (13))){
var inst_17947 = (state_17964[(2)]);
var state_17964__$1 = state_17964;
var statearr_17986_19607 = state_17964__$1;
(statearr_17986_19607[(2)] = inst_17947);

(statearr_17986_19607[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17965 === (6))){
var inst_17919 = (state_17964[(7)]);
var inst_17949 = inst_17919.length;
var inst_17950 = (inst_17949 > (0));
var state_17964__$1 = state_17964;
if(cljs.core.truth_(inst_17950)){
var statearr_17987_19619 = state_17964__$1;
(statearr_17987_19619[(1)] = (15));

} else {
var statearr_17988_19620 = state_17964__$1;
(statearr_17988_19620[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17965 === (17))){
var inst_17957 = (state_17964[(2)]);
var inst_17958 = cljs.core.async.close_BANG_(out);
var state_17964__$1 = (function (){var statearr_17989 = state_17964;
(statearr_17989[(10)] = inst_17957);

return statearr_17989;
})();
var statearr_17993_19629 = state_17964__$1;
(statearr_17993_19629[(2)] = inst_17958);

(statearr_17993_19629[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17965 === (3))){
var inst_17962 = (state_17964[(2)]);
var state_17964__$1 = state_17964;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17964__$1,inst_17962);
} else {
if((state_val_17965 === (12))){
var inst_17919 = (state_17964[(7)]);
var inst_17940 = cljs.core.vec(inst_17919);
var state_17964__$1 = state_17964;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17964__$1,(14),out,inst_17940);
} else {
if((state_val_17965 === (2))){
var state_17964__$1 = state_17964;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17964__$1,(4),ch);
} else {
if((state_val_17965 === (11))){
var inst_17919 = (state_17964[(7)]);
var inst_17923 = (state_17964[(9)]);
var inst_17927 = (state_17964[(11)]);
var inst_17935 = inst_17919.push(inst_17923);
var tmp17997 = inst_17919;
var inst_17919__$1 = tmp17997;
var inst_17920 = inst_17927;
var state_17964__$1 = (function (){var statearr_18008 = state_17964;
(statearr_18008[(12)] = inst_17935);

(statearr_18008[(7)] = inst_17919__$1);

(statearr_18008[(8)] = inst_17920);

return statearr_18008;
})();
var statearr_18009_19635 = state_17964__$1;
(statearr_18009_19635[(2)] = null);

(statearr_18009_19635[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17965 === (9))){
var inst_17920 = (state_17964[(8)]);
var inst_17931 = cljs.core.keyword_identical_QMARK_(inst_17920,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_17964__$1 = state_17964;
var statearr_18014_19639 = state_17964__$1;
(statearr_18014_19639[(2)] = inst_17931);

(statearr_18014_19639[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17965 === (5))){
var inst_17923 = (state_17964[(9)]);
var inst_17927 = (state_17964[(11)]);
var inst_17920 = (state_17964[(8)]);
var inst_17928 = (state_17964[(13)]);
var inst_17927__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_17923) : f.call(null,inst_17923));
var inst_17928__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17927__$1,inst_17920);
var state_17964__$1 = (function (){var statearr_18015 = state_17964;
(statearr_18015[(11)] = inst_17927__$1);

(statearr_18015[(13)] = inst_17928__$1);

return statearr_18015;
})();
if(inst_17928__$1){
var statearr_18017_19649 = state_17964__$1;
(statearr_18017_19649[(1)] = (8));

} else {
var statearr_18019_19650 = state_17964__$1;
(statearr_18019_19650[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17965 === (14))){
var inst_17923 = (state_17964[(9)]);
var inst_17927 = (state_17964[(11)]);
var inst_17942 = (state_17964[(2)]);
var inst_17943 = [];
var inst_17944 = inst_17943.push(inst_17923);
var inst_17919 = inst_17943;
var inst_17920 = inst_17927;
var state_17964__$1 = (function (){var statearr_18020 = state_17964;
(statearr_18020[(14)] = inst_17942);

(statearr_18020[(15)] = inst_17944);

(statearr_18020[(7)] = inst_17919);

(statearr_18020[(8)] = inst_17920);

return statearr_18020;
})();
var statearr_18022_19661 = state_17964__$1;
(statearr_18022_19661[(2)] = null);

(statearr_18022_19661[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17965 === (16))){
var state_17964__$1 = state_17964;
var statearr_18023_19667 = state_17964__$1;
(statearr_18023_19667[(2)] = null);

(statearr_18023_19667[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17965 === (10))){
var inst_17933 = (state_17964[(2)]);
var state_17964__$1 = state_17964;
if(cljs.core.truth_(inst_17933)){
var statearr_18025_19668 = state_17964__$1;
(statearr_18025_19668[(1)] = (11));

} else {
var statearr_18026_19669 = state_17964__$1;
(statearr_18026_19669[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17965 === (18))){
var inst_17954 = (state_17964[(2)]);
var state_17964__$1 = state_17964;
var statearr_18038_19670 = state_17964__$1;
(statearr_18038_19670[(2)] = inst_17954);

(statearr_18038_19670[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17965 === (8))){
var inst_17928 = (state_17964[(13)]);
var state_17964__$1 = state_17964;
var statearr_18040_19671 = state_17964__$1;
(statearr_18040_19671[(2)] = inst_17928);

(statearr_18040_19671[(1)] = (10));


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
var cljs$core$async$state_machine__13326__auto__ = null;
var cljs$core$async$state_machine__13326__auto____0 = (function (){
var statearr_18045 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18045[(0)] = cljs$core$async$state_machine__13326__auto__);

(statearr_18045[(1)] = (1));

return statearr_18045;
});
var cljs$core$async$state_machine__13326__auto____1 = (function (state_17964){
while(true){
var ret_value__13328__auto__ = (function (){try{while(true){
var result__13329__auto__ = switch__13325__auto__(state_17964);
if(cljs.core.keyword_identical_QMARK_(result__13329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13329__auto__;
}
break;
}
}catch (e18047){var ex__13330__auto__ = e18047;
var statearr_18049_19676 = state_17964;
(statearr_18049_19676[(2)] = ex__13330__auto__);


if(cljs.core.seq((state_17964[(4)]))){
var statearr_18050_19677 = state_17964;
(statearr_18050_19677[(1)] = cljs.core.first((state_17964[(4)])));

} else {
throw ex__13330__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19678 = state_17964;
state_17964 = G__19678;
continue;
} else {
return ret_value__13328__auto__;
}
break;
}
});
cljs$core$async$state_machine__13326__auto__ = function(state_17964){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13326__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13326__auto____1.call(this,state_17964);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13326__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13326__auto____0;
cljs$core$async$state_machine__13326__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13326__auto____1;
return cljs$core$async$state_machine__13326__auto__;
})()
})();
var state__14143__auto__ = (function (){var statearr_18054 = f__14142__auto__();
(statearr_18054[(6)] = c__14141__auto___19581);

return statearr_18054;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14143__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
