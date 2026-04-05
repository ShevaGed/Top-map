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
cljs.core.async.t_cljs$core$async15029 = (function (f,blockable,meta15030){
this.f = f;
this.blockable = blockable;
this.meta15030 = meta15030;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15029.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15031,meta15030__$1){
var self__ = this;
var _15031__$1 = this;
return (new cljs.core.async.t_cljs$core$async15029(self__.f,self__.blockable,meta15030__$1));
}));

(cljs.core.async.t_cljs$core$async15029.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15031){
var self__ = this;
var _15031__$1 = this;
return self__.meta15030;
}));

(cljs.core.async.t_cljs$core$async15029.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15029.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async15029.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async15029.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async15029.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta15030","meta15030",-502038136,null)], null);
}));

(cljs.core.async.t_cljs$core$async15029.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15029.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15029");

(cljs.core.async.t_cljs$core$async15029.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async15029");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15029.
 */
cljs.core.async.__GT_t_cljs$core$async15029 = (function cljs$core$async$__GT_t_cljs$core$async15029(f,blockable,meta15030){
return (new cljs.core.async.t_cljs$core$async15029(f,blockable,meta15030));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__15023 = arguments.length;
switch (G__15023) {
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
return (new cljs.core.async.t_cljs$core$async15029(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__15088 = arguments.length;
switch (G__15088) {
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
var G__15101 = arguments.length;
switch (G__15101) {
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
var G__15104 = arguments.length;
switch (G__15104) {
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
var val_18186 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_18186) : fn1.call(null,val_18186));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_18186) : fn1.call(null,val_18186));
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
var G__15110 = arguments.length;
switch (G__15110) {
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
var n__5741__auto___18199 = n;
var x_18200 = (0);
while(true){
if((x_18200 < n__5741__auto___18199)){
(a[x_18200] = x_18200);

var G__18201 = (x_18200 + (1));
x_18200 = G__18201;
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
cljs.core.async.t_cljs$core$async15113 = (function (flag,meta15114){
this.flag = flag;
this.meta15114 = meta15114;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15113.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15115,meta15114__$1){
var self__ = this;
var _15115__$1 = this;
return (new cljs.core.async.t_cljs$core$async15113(self__.flag,meta15114__$1));
}));

(cljs.core.async.t_cljs$core$async15113.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15115){
var self__ = this;
var _15115__$1 = this;
return self__.meta15114;
}));

(cljs.core.async.t_cljs$core$async15113.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15113.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async15113.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async15113.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async15113.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta15114","meta15114",1248767521,null)], null);
}));

(cljs.core.async.t_cljs$core$async15113.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15113.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15113");

(cljs.core.async.t_cljs$core$async15113.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async15113");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15113.
 */
cljs.core.async.__GT_t_cljs$core$async15113 = (function cljs$core$async$__GT_t_cljs$core$async15113(flag,meta15114){
return (new cljs.core.async.t_cljs$core$async15113(flag,meta15114));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async15113(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15117 = (function (flag,cb,meta15118){
this.flag = flag;
this.cb = cb;
this.meta15118 = meta15118;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15117.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15119,meta15118__$1){
var self__ = this;
var _15119__$1 = this;
return (new cljs.core.async.t_cljs$core$async15117(self__.flag,self__.cb,meta15118__$1));
}));

(cljs.core.async.t_cljs$core$async15117.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15119){
var self__ = this;
var _15119__$1 = this;
return self__.meta15118;
}));

(cljs.core.async.t_cljs$core$async15117.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15117.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async15117.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async15117.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async15117.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta15118","meta15118",-1735721757,null)], null);
}));

(cljs.core.async.t_cljs$core$async15117.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15117.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15117");

(cljs.core.async.t_cljs$core$async15117.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async15117");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15117.
 */
cljs.core.async.__GT_t_cljs$core$async15117 = (function cljs$core$async$__GT_t_cljs$core$async15117(flag,cb,meta15118){
return (new cljs.core.async.t_cljs$core$async15117(flag,cb,meta15118));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async15117(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
var port_18215 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports__$1,i);
if(cljs.core.vector_QMARK_(port_18215)){
if((!(((port_18215.cljs$core$IFn$_invoke$arity$1 ? port_18215.cljs$core$IFn$_invoke$arity$1((1)) : port_18215.call(null,(1))) == null)))){
} else {
throw (new Error((""+"Assert failed: "+"can't put nil on channel"+"\n"+"(some? (port 1))")));
}
} else {
}

var G__18216 = (i + (1));
i = G__18216;
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
return (function (p1__15133_SHARP_){
var G__15137 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15133_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__15137) : fret.call(null,G__15137));
});})(i,val,idx,port,wport,flag,ports__$1,n,_,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,ports__$1,n,_,idxs,priority){
return (function (p1__15134_SHARP_){
var G__15141 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15134_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__15141) : fret.call(null,G__15141));
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
var G__18221 = (i + (1));
i = G__18221;
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
var len__5876__auto___18222 = arguments.length;
var i__5877__auto___18223 = (0);
while(true){
if((i__5877__auto___18223 < len__5876__auto___18222)){
args__5882__auto__.push((arguments[i__5877__auto___18223]));

var G__18224 = (i__5877__auto___18223 + (1));
i__5877__auto___18223 = G__18224;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((1) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5883__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__15148){
var map__15149 = p__15148;
var map__15149__$1 = cljs.core.__destructure_map(map__15149);
var opts = map__15149__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq15145){
var G__15146 = cljs.core.first(seq15145);
var seq15145__$1 = cljs.core.next(seq15145);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15146,seq15145__$1);
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
var G__15161 = arguments.length;
switch (G__15161) {
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
var c__14860__auto___18240 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14861__auto__ = (function (){var switch__13956__auto__ = (function (state_15197){
var state_val_15198 = (state_15197[(1)]);
if((state_val_15198 === (7))){
var inst_15189 = (state_15197[(2)]);
var state_15197__$1 = state_15197;
var statearr_15201_18241 = state_15197__$1;
(statearr_15201_18241[(2)] = inst_15189);

(statearr_15201_18241[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15198 === (1))){
var state_15197__$1 = state_15197;
var statearr_15202_18242 = state_15197__$1;
(statearr_15202_18242[(2)] = null);

(statearr_15202_18242[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15198 === (4))){
var inst_15171 = (state_15197[(7)]);
var inst_15171__$1 = (state_15197[(2)]);
var inst_15172 = (inst_15171__$1 == null);
var state_15197__$1 = (function (){var statearr_15203 = state_15197;
(statearr_15203[(7)] = inst_15171__$1);

return statearr_15203;
})();
if(cljs.core.truth_(inst_15172)){
var statearr_15206_18243 = state_15197__$1;
(statearr_15206_18243[(1)] = (5));

} else {
var statearr_15207_18244 = state_15197__$1;
(statearr_15207_18244[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15198 === (13))){
var state_15197__$1 = state_15197;
var statearr_15208_18245 = state_15197__$1;
(statearr_15208_18245[(2)] = null);

(statearr_15208_18245[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15198 === (6))){
var inst_15171 = (state_15197[(7)]);
var state_15197__$1 = state_15197;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15197__$1,(11),to,inst_15171);
} else {
if((state_val_15198 === (3))){
var inst_15192 = (state_15197[(2)]);
var state_15197__$1 = state_15197;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15197__$1,inst_15192);
} else {
if((state_val_15198 === (12))){
var state_15197__$1 = state_15197;
var statearr_15214_18249 = state_15197__$1;
(statearr_15214_18249[(2)] = null);

(statearr_15214_18249[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15198 === (2))){
var state_15197__$1 = state_15197;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15197__$1,(4),from);
} else {
if((state_val_15198 === (11))){
var inst_15181 = (state_15197[(2)]);
var state_15197__$1 = state_15197;
if(cljs.core.truth_(inst_15181)){
var statearr_15215_18250 = state_15197__$1;
(statearr_15215_18250[(1)] = (12));

} else {
var statearr_15216_18251 = state_15197__$1;
(statearr_15216_18251[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15198 === (9))){
var state_15197__$1 = state_15197;
var statearr_15217_18252 = state_15197__$1;
(statearr_15217_18252[(2)] = null);

(statearr_15217_18252[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15198 === (5))){
var state_15197__$1 = state_15197;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15221_18253 = state_15197__$1;
(statearr_15221_18253[(1)] = (8));

} else {
var statearr_15222_18254 = state_15197__$1;
(statearr_15222_18254[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15198 === (14))){
var inst_15187 = (state_15197[(2)]);
var state_15197__$1 = state_15197;
var statearr_15226_18255 = state_15197__$1;
(statearr_15226_18255[(2)] = inst_15187);

(statearr_15226_18255[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15198 === (10))){
var inst_15178 = (state_15197[(2)]);
var state_15197__$1 = state_15197;
var statearr_15230_18257 = state_15197__$1;
(statearr_15230_18257[(2)] = inst_15178);

(statearr_15230_18257[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15198 === (8))){
var inst_15175 = cljs.core.async.close_BANG_(to);
var state_15197__$1 = state_15197;
var statearr_15231_18258 = state_15197__$1;
(statearr_15231_18258[(2)] = inst_15175);

(statearr_15231_18258[(1)] = (10));


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
var cljs$core$async$state_machine__13958__auto__ = null;
var cljs$core$async$state_machine__13958__auto____0 = (function (){
var statearr_15234 = [null,null,null,null,null,null,null,null];
(statearr_15234[(0)] = cljs$core$async$state_machine__13958__auto__);

(statearr_15234[(1)] = (1));

return statearr_15234;
});
var cljs$core$async$state_machine__13958__auto____1 = (function (state_15197){
while(true){
var ret_value__13959__auto__ = (function (){try{while(true){
var result__13960__auto__ = switch__13956__auto__(state_15197);
if(cljs.core.keyword_identical_QMARK_(result__13960__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13960__auto__;
}
break;
}
}catch (e15238){var ex__13961__auto__ = e15238;
var statearr_15239_18259 = state_15197;
(statearr_15239_18259[(2)] = ex__13961__auto__);


if(cljs.core.seq((state_15197[(4)]))){
var statearr_15242_18260 = state_15197;
(statearr_15242_18260[(1)] = cljs.core.first((state_15197[(4)])));

} else {
throw ex__13961__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18261 = state_15197;
state_15197 = G__18261;
continue;
} else {
return ret_value__13959__auto__;
}
break;
}
});
cljs$core$async$state_machine__13958__auto__ = function(state_15197){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13958__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13958__auto____1.call(this,state_15197);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13958__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13958__auto____0;
cljs$core$async$state_machine__13958__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13958__auto____1;
return cljs$core$async$state_machine__13958__auto__;
})()
})();
var state__14862__auto__ = (function (){var statearr_15243 = f__14861__auto__();
(statearr_15243[(6)] = c__14860__auto___18240);

return statearr_15243;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14862__auto__);
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
var process__$1 = (function (p__15254){
var vec__15255 = p__15254;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15255,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15255,(1),null);
var job = vec__15255;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__14860__auto___18265 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14861__auto__ = (function (){var switch__13956__auto__ = (function (state_15268){
var state_val_15269 = (state_15268[(1)]);
if((state_val_15269 === (1))){
var state_15268__$1 = state_15268;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15268__$1,(2),res,v);
} else {
if((state_val_15269 === (2))){
var inst_15263 = (state_15268[(2)]);
var inst_15264 = cljs.core.async.close_BANG_(res);
var state_15268__$1 = (function (){var statearr_15272 = state_15268;
(statearr_15272[(7)] = inst_15263);

return statearr_15272;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_15268__$1,inst_15264);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13958__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13958__auto____0 = (function (){
var statearr_15274 = [null,null,null,null,null,null,null,null];
(statearr_15274[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13958__auto__);

(statearr_15274[(1)] = (1));

return statearr_15274;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13958__auto____1 = (function (state_15268){
while(true){
var ret_value__13959__auto__ = (function (){try{while(true){
var result__13960__auto__ = switch__13956__auto__(state_15268);
if(cljs.core.keyword_identical_QMARK_(result__13960__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13960__auto__;
}
break;
}
}catch (e15277){var ex__13961__auto__ = e15277;
var statearr_15278_18271 = state_15268;
(statearr_15278_18271[(2)] = ex__13961__auto__);


if(cljs.core.seq((state_15268[(4)]))){
var statearr_15281_18273 = state_15268;
(statearr_15281_18273[(1)] = cljs.core.first((state_15268[(4)])));

} else {
throw ex__13961__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18274 = state_15268;
state_15268 = G__18274;
continue;
} else {
return ret_value__13959__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13958__auto__ = function(state_15268){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13958__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13958__auto____1.call(this,state_15268);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13958__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13958__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13958__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13958__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13958__auto__;
})()
})();
var state__14862__auto__ = (function (){var statearr_15288 = f__14861__auto__();
(statearr_15288[(6)] = c__14860__auto___18265);

return statearr_15288;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14862__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__15294){
var vec__15295 = p__15294;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15295,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15295,(1),null);
var job = vec__15295;
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
var n__5741__auto___18279 = n;
var __18280 = (0);
while(true){
if((__18280 < n__5741__auto___18279)){
var G__15300_18281 = type;
var G__15300_18282__$1 = (((G__15300_18281 instanceof cljs.core.Keyword))?G__15300_18281.fqn:null);
switch (G__15300_18282__$1) {
case "compute":
var c__14860__auto___18285 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__18280,c__14860__auto___18285,G__15300_18281,G__15300_18282__$1,n__5741__auto___18279,jobs,results,process__$1,async){
return (function (){
var f__14861__auto__ = (function (){var switch__13956__auto__ = ((function (__18280,c__14860__auto___18285,G__15300_18281,G__15300_18282__$1,n__5741__auto___18279,jobs,results,process__$1,async){
return (function (state_15319){
var state_val_15320 = (state_15319[(1)]);
if((state_val_15320 === (1))){
var state_15319__$1 = state_15319;
var statearr_15328_18289 = state_15319__$1;
(statearr_15328_18289[(2)] = null);

(statearr_15328_18289[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15320 === (2))){
var state_15319__$1 = state_15319;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15319__$1,(4),jobs);
} else {
if((state_val_15320 === (3))){
var inst_15316 = (state_15319[(2)]);
var state_15319__$1 = state_15319;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15319__$1,inst_15316);
} else {
if((state_val_15320 === (4))){
var inst_15307 = (state_15319[(2)]);
var inst_15308 = process__$1(inst_15307);
var state_15319__$1 = state_15319;
if(cljs.core.truth_(inst_15308)){
var statearr_15334_18291 = state_15319__$1;
(statearr_15334_18291[(1)] = (5));

} else {
var statearr_15335_18292 = state_15319__$1;
(statearr_15335_18292[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15320 === (5))){
var state_15319__$1 = state_15319;
var statearr_15338_18293 = state_15319__$1;
(statearr_15338_18293[(2)] = null);

(statearr_15338_18293[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15320 === (6))){
var state_15319__$1 = state_15319;
var statearr_15341_18295 = state_15319__$1;
(statearr_15341_18295[(2)] = null);

(statearr_15341_18295[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15320 === (7))){
var inst_15314 = (state_15319[(2)]);
var state_15319__$1 = state_15319;
var statearr_15343_18296 = state_15319__$1;
(statearr_15343_18296[(2)] = inst_15314);

(statearr_15343_18296[(1)] = (3));


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
});})(__18280,c__14860__auto___18285,G__15300_18281,G__15300_18282__$1,n__5741__auto___18279,jobs,results,process__$1,async))
;
return ((function (__18280,switch__13956__auto__,c__14860__auto___18285,G__15300_18281,G__15300_18282__$1,n__5741__auto___18279,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13958__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13958__auto____0 = (function (){
var statearr_15345 = [null,null,null,null,null,null,null];
(statearr_15345[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13958__auto__);

(statearr_15345[(1)] = (1));

return statearr_15345;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13958__auto____1 = (function (state_15319){
while(true){
var ret_value__13959__auto__ = (function (){try{while(true){
var result__13960__auto__ = switch__13956__auto__(state_15319);
if(cljs.core.keyword_identical_QMARK_(result__13960__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13960__auto__;
}
break;
}
}catch (e15349){var ex__13961__auto__ = e15349;
var statearr_15350_18300 = state_15319;
(statearr_15350_18300[(2)] = ex__13961__auto__);


if(cljs.core.seq((state_15319[(4)]))){
var statearr_15353_18301 = state_15319;
(statearr_15353_18301[(1)] = cljs.core.first((state_15319[(4)])));

} else {
throw ex__13961__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18306 = state_15319;
state_15319 = G__18306;
continue;
} else {
return ret_value__13959__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13958__auto__ = function(state_15319){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13958__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13958__auto____1.call(this,state_15319);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13958__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13958__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13958__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13958__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13958__auto__;
})()
;})(__18280,switch__13956__auto__,c__14860__auto___18285,G__15300_18281,G__15300_18282__$1,n__5741__auto___18279,jobs,results,process__$1,async))
})();
var state__14862__auto__ = (function (){var statearr_15357 = f__14861__auto__();
(statearr_15357[(6)] = c__14860__auto___18285);

return statearr_15357;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14862__auto__);
});})(__18280,c__14860__auto___18285,G__15300_18281,G__15300_18282__$1,n__5741__auto___18279,jobs,results,process__$1,async))
);


break;
case "async":
var c__14860__auto___18307 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__18280,c__14860__auto___18307,G__15300_18281,G__15300_18282__$1,n__5741__auto___18279,jobs,results,process__$1,async){
return (function (){
var f__14861__auto__ = (function (){var switch__13956__auto__ = ((function (__18280,c__14860__auto___18307,G__15300_18281,G__15300_18282__$1,n__5741__auto___18279,jobs,results,process__$1,async){
return (function (state_15372){
var state_val_15373 = (state_15372[(1)]);
if((state_val_15373 === (1))){
var state_15372__$1 = state_15372;
var statearr_15375_18315 = state_15372__$1;
(statearr_15375_18315[(2)] = null);

(statearr_15375_18315[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15373 === (2))){
var state_15372__$1 = state_15372;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15372__$1,(4),jobs);
} else {
if((state_val_15373 === (3))){
var inst_15370 = (state_15372[(2)]);
var state_15372__$1 = state_15372;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15372__$1,inst_15370);
} else {
if((state_val_15373 === (4))){
var inst_15362 = (state_15372[(2)]);
var inst_15363 = async(inst_15362);
var state_15372__$1 = state_15372;
if(cljs.core.truth_(inst_15363)){
var statearr_15384_18316 = state_15372__$1;
(statearr_15384_18316[(1)] = (5));

} else {
var statearr_15385_18320 = state_15372__$1;
(statearr_15385_18320[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15373 === (5))){
var state_15372__$1 = state_15372;
var statearr_15389_18323 = state_15372__$1;
(statearr_15389_18323[(2)] = null);

(statearr_15389_18323[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15373 === (6))){
var state_15372__$1 = state_15372;
var statearr_15391_18325 = state_15372__$1;
(statearr_15391_18325[(2)] = null);

(statearr_15391_18325[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15373 === (7))){
var inst_15368 = (state_15372[(2)]);
var state_15372__$1 = state_15372;
var statearr_15394_18326 = state_15372__$1;
(statearr_15394_18326[(2)] = inst_15368);

(statearr_15394_18326[(1)] = (3));


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
});})(__18280,c__14860__auto___18307,G__15300_18281,G__15300_18282__$1,n__5741__auto___18279,jobs,results,process__$1,async))
;
return ((function (__18280,switch__13956__auto__,c__14860__auto___18307,G__15300_18281,G__15300_18282__$1,n__5741__auto___18279,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13958__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13958__auto____0 = (function (){
var statearr_15399 = [null,null,null,null,null,null,null];
(statearr_15399[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13958__auto__);

(statearr_15399[(1)] = (1));

return statearr_15399;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13958__auto____1 = (function (state_15372){
while(true){
var ret_value__13959__auto__ = (function (){try{while(true){
var result__13960__auto__ = switch__13956__auto__(state_15372);
if(cljs.core.keyword_identical_QMARK_(result__13960__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13960__auto__;
}
break;
}
}catch (e15400){var ex__13961__auto__ = e15400;
var statearr_15401_18329 = state_15372;
(statearr_15401_18329[(2)] = ex__13961__auto__);


if(cljs.core.seq((state_15372[(4)]))){
var statearr_15402_18330 = state_15372;
(statearr_15402_18330[(1)] = cljs.core.first((state_15372[(4)])));

} else {
throw ex__13961__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18334 = state_15372;
state_15372 = G__18334;
continue;
} else {
return ret_value__13959__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13958__auto__ = function(state_15372){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13958__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13958__auto____1.call(this,state_15372);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13958__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13958__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13958__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13958__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13958__auto__;
})()
;})(__18280,switch__13956__auto__,c__14860__auto___18307,G__15300_18281,G__15300_18282__$1,n__5741__auto___18279,jobs,results,process__$1,async))
})();
var state__14862__auto__ = (function (){var statearr_15407 = f__14861__auto__();
(statearr_15407[(6)] = c__14860__auto___18307);

return statearr_15407;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14862__auto__);
});})(__18280,c__14860__auto___18307,G__15300_18281,G__15300_18282__$1,n__5741__auto___18279,jobs,results,process__$1,async))
);


break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15300_18282__$1))));

}

var G__18337 = (__18280 + (1));
__18280 = G__18337;
continue;
} else {
}
break;
}

var c__14860__auto___18338 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14861__auto__ = (function (){var switch__13956__auto__ = (function (state_15436){
var state_val_15438 = (state_15436[(1)]);
if((state_val_15438 === (7))){
var inst_15431 = (state_15436[(2)]);
var state_15436__$1 = state_15436;
var statearr_15447_18343 = state_15436__$1;
(statearr_15447_18343[(2)] = inst_15431);

(statearr_15447_18343[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15438 === (1))){
var state_15436__$1 = state_15436;
var statearr_15449_18344 = state_15436__$1;
(statearr_15449_18344[(2)] = null);

(statearr_15449_18344[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15438 === (4))){
var inst_15413 = (state_15436[(7)]);
var inst_15413__$1 = (state_15436[(2)]);
var inst_15414 = (inst_15413__$1 == null);
var state_15436__$1 = (function (){var statearr_15451 = state_15436;
(statearr_15451[(7)] = inst_15413__$1);

return statearr_15451;
})();
if(cljs.core.truth_(inst_15414)){
var statearr_15452_18345 = state_15436__$1;
(statearr_15452_18345[(1)] = (5));

} else {
var statearr_15454_18346 = state_15436__$1;
(statearr_15454_18346[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15438 === (6))){
var inst_15413 = (state_15436[(7)]);
var inst_15420 = (state_15436[(8)]);
var inst_15420__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_15422 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_15423 = [inst_15413,inst_15420__$1];
var inst_15424 = (new cljs.core.PersistentVector(null,2,(5),inst_15422,inst_15423,null));
var state_15436__$1 = (function (){var statearr_15459 = state_15436;
(statearr_15459[(8)] = inst_15420__$1);

return statearr_15459;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15436__$1,(8),jobs,inst_15424);
} else {
if((state_val_15438 === (3))){
var inst_15433 = (state_15436[(2)]);
var state_15436__$1 = state_15436;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15436__$1,inst_15433);
} else {
if((state_val_15438 === (2))){
var state_15436__$1 = state_15436;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15436__$1,(4),from);
} else {
if((state_val_15438 === (9))){
var inst_15428 = (state_15436[(2)]);
var state_15436__$1 = (function (){var statearr_15465 = state_15436;
(statearr_15465[(9)] = inst_15428);

return statearr_15465;
})();
var statearr_15466_18348 = state_15436__$1;
(statearr_15466_18348[(2)] = null);

(statearr_15466_18348[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15438 === (5))){
var inst_15418 = cljs.core.async.close_BANG_(jobs);
var state_15436__$1 = state_15436;
var statearr_15467_18354 = state_15436__$1;
(statearr_15467_18354[(2)] = inst_15418);

(statearr_15467_18354[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15438 === (8))){
var inst_15420 = (state_15436[(8)]);
var inst_15426 = (state_15436[(2)]);
var state_15436__$1 = (function (){var statearr_15468 = state_15436;
(statearr_15468[(10)] = inst_15426);

return statearr_15468;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15436__$1,(9),results,inst_15420);
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
var cljs$core$async$pipeline_STAR__$_state_machine__13958__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13958__auto____0 = (function (){
var statearr_15478 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15478[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13958__auto__);

(statearr_15478[(1)] = (1));

return statearr_15478;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13958__auto____1 = (function (state_15436){
while(true){
var ret_value__13959__auto__ = (function (){try{while(true){
var result__13960__auto__ = switch__13956__auto__(state_15436);
if(cljs.core.keyword_identical_QMARK_(result__13960__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13960__auto__;
}
break;
}
}catch (e15483){var ex__13961__auto__ = e15483;
var statearr_15484_18355 = state_15436;
(statearr_15484_18355[(2)] = ex__13961__auto__);


if(cljs.core.seq((state_15436[(4)]))){
var statearr_15485_18356 = state_15436;
(statearr_15485_18356[(1)] = cljs.core.first((state_15436[(4)])));

} else {
throw ex__13961__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18357 = state_15436;
state_15436 = G__18357;
continue;
} else {
return ret_value__13959__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13958__auto__ = function(state_15436){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13958__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13958__auto____1.call(this,state_15436);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13958__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13958__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13958__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13958__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13958__auto__;
})()
})();
var state__14862__auto__ = (function (){var statearr_15486 = f__14861__auto__();
(statearr_15486[(6)] = c__14860__auto___18338);

return statearr_15486;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14862__auto__);
}));


var c__14860__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14861__auto__ = (function (){var switch__13956__auto__ = (function (state_15531){
var state_val_15532 = (state_15531[(1)]);
if((state_val_15532 === (7))){
var inst_15527 = (state_15531[(2)]);
var state_15531__$1 = state_15531;
var statearr_15533_18359 = state_15531__$1;
(statearr_15533_18359[(2)] = inst_15527);

(statearr_15533_18359[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15532 === (20))){
var state_15531__$1 = state_15531;
var statearr_15534_18361 = state_15531__$1;
(statearr_15534_18361[(2)] = null);

(statearr_15534_18361[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15532 === (1))){
var state_15531__$1 = state_15531;
var statearr_15539_18363 = state_15531__$1;
(statearr_15539_18363[(2)] = null);

(statearr_15539_18363[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15532 === (4))){
var inst_15492 = (state_15531[(7)]);
var inst_15492__$1 = (state_15531[(2)]);
var inst_15494 = (inst_15492__$1 == null);
var state_15531__$1 = (function (){var statearr_15542 = state_15531;
(statearr_15542[(7)] = inst_15492__$1);

return statearr_15542;
})();
if(cljs.core.truth_(inst_15494)){
var statearr_15544_18366 = state_15531__$1;
(statearr_15544_18366[(1)] = (5));

} else {
var statearr_15545_18367 = state_15531__$1;
(statearr_15545_18367[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15532 === (15))){
var inst_15507 = (state_15531[(8)]);
var state_15531__$1 = state_15531;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15531__$1,(18),to,inst_15507);
} else {
if((state_val_15532 === (21))){
var inst_15522 = (state_15531[(2)]);
var state_15531__$1 = state_15531;
var statearr_15549_18369 = state_15531__$1;
(statearr_15549_18369[(2)] = inst_15522);

(statearr_15549_18369[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15532 === (13))){
var inst_15524 = (state_15531[(2)]);
var state_15531__$1 = (function (){var statearr_15550 = state_15531;
(statearr_15550[(9)] = inst_15524);

return statearr_15550;
})();
var statearr_15551_18375 = state_15531__$1;
(statearr_15551_18375[(2)] = null);

(statearr_15551_18375[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15532 === (6))){
var inst_15492 = (state_15531[(7)]);
var state_15531__$1 = state_15531;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15531__$1,(11),inst_15492);
} else {
if((state_val_15532 === (17))){
var inst_15517 = (state_15531[(2)]);
var state_15531__$1 = state_15531;
if(cljs.core.truth_(inst_15517)){
var statearr_15552_18381 = state_15531__$1;
(statearr_15552_18381[(1)] = (19));

} else {
var statearr_15553_18382 = state_15531__$1;
(statearr_15553_18382[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15532 === (3))){
var inst_15529 = (state_15531[(2)]);
var state_15531__$1 = state_15531;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15531__$1,inst_15529);
} else {
if((state_val_15532 === (12))){
var inst_15504 = (state_15531[(10)]);
var state_15531__$1 = state_15531;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15531__$1,(14),inst_15504);
} else {
if((state_val_15532 === (2))){
var state_15531__$1 = state_15531;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15531__$1,(4),results);
} else {
if((state_val_15532 === (19))){
var state_15531__$1 = state_15531;
var statearr_15557_18386 = state_15531__$1;
(statearr_15557_18386[(2)] = null);

(statearr_15557_18386[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15532 === (11))){
var inst_15504 = (state_15531[(2)]);
var state_15531__$1 = (function (){var statearr_15561 = state_15531;
(statearr_15561[(10)] = inst_15504);

return statearr_15561;
})();
var statearr_15562_18387 = state_15531__$1;
(statearr_15562_18387[(2)] = null);

(statearr_15562_18387[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15532 === (9))){
var state_15531__$1 = state_15531;
var statearr_15563_18391 = state_15531__$1;
(statearr_15563_18391[(2)] = null);

(statearr_15563_18391[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15532 === (5))){
var state_15531__$1 = state_15531;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15565_18393 = state_15531__$1;
(statearr_15565_18393[(1)] = (8));

} else {
var statearr_15566_18394 = state_15531__$1;
(statearr_15566_18394[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15532 === (14))){
var inst_15507 = (state_15531[(8)]);
var inst_15510 = (state_15531[(11)]);
var inst_15507__$1 = (state_15531[(2)]);
var inst_15509 = (inst_15507__$1 == null);
var inst_15510__$1 = cljs.core.not(inst_15509);
var state_15531__$1 = (function (){var statearr_15567 = state_15531;
(statearr_15567[(8)] = inst_15507__$1);

(statearr_15567[(11)] = inst_15510__$1);

return statearr_15567;
})();
if(inst_15510__$1){
var statearr_15568_18395 = state_15531__$1;
(statearr_15568_18395[(1)] = (15));

} else {
var statearr_15569_18396 = state_15531__$1;
(statearr_15569_18396[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15532 === (16))){
var inst_15510 = (state_15531[(11)]);
var state_15531__$1 = state_15531;
var statearr_15570_18397 = state_15531__$1;
(statearr_15570_18397[(2)] = inst_15510);

(statearr_15570_18397[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15532 === (10))){
var inst_15501 = (state_15531[(2)]);
var state_15531__$1 = state_15531;
var statearr_15571_18398 = state_15531__$1;
(statearr_15571_18398[(2)] = inst_15501);

(statearr_15571_18398[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15532 === (18))){
var inst_15514 = (state_15531[(2)]);
var state_15531__$1 = state_15531;
var statearr_15576_18400 = state_15531__$1;
(statearr_15576_18400[(2)] = inst_15514);

(statearr_15576_18400[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15532 === (8))){
var inst_15498 = cljs.core.async.close_BANG_(to);
var state_15531__$1 = state_15531;
var statearr_15577_18402 = state_15531__$1;
(statearr_15577_18402[(2)] = inst_15498);

(statearr_15577_18402[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__13958__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13958__auto____0 = (function (){
var statearr_15579 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15579[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13958__auto__);

(statearr_15579[(1)] = (1));

return statearr_15579;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13958__auto____1 = (function (state_15531){
while(true){
var ret_value__13959__auto__ = (function (){try{while(true){
var result__13960__auto__ = switch__13956__auto__(state_15531);
if(cljs.core.keyword_identical_QMARK_(result__13960__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13960__auto__;
}
break;
}
}catch (e15580){var ex__13961__auto__ = e15580;
var statearr_15583_18405 = state_15531;
(statearr_15583_18405[(2)] = ex__13961__auto__);


if(cljs.core.seq((state_15531[(4)]))){
var statearr_15585_18409 = state_15531;
(statearr_15585_18409[(1)] = cljs.core.first((state_15531[(4)])));

} else {
throw ex__13961__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18410 = state_15531;
state_15531 = G__18410;
continue;
} else {
return ret_value__13959__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13958__auto__ = function(state_15531){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13958__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13958__auto____1.call(this,state_15531);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13958__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13958__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13958__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13958__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13958__auto__;
})()
})();
var state__14862__auto__ = (function (){var statearr_15588 = f__14861__auto__();
(statearr_15588[(6)] = c__14860__auto__);

return statearr_15588;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14862__auto__);
}));

return c__14860__auto__;
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
var G__15601 = arguments.length;
switch (G__15601) {
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
var G__15613 = arguments.length;
switch (G__15613) {
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
var G__15632 = arguments.length;
switch (G__15632) {
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
var c__14860__auto___18424 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14861__auto__ = (function (){var switch__13956__auto__ = (function (state_15674){
var state_val_15675 = (state_15674[(1)]);
if((state_val_15675 === (7))){
var inst_15669 = (state_15674[(2)]);
var state_15674__$1 = state_15674;
var statearr_15682_18425 = state_15674__$1;
(statearr_15682_18425[(2)] = inst_15669);

(statearr_15682_18425[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15675 === (1))){
var state_15674__$1 = state_15674;
var statearr_15685_18426 = state_15674__$1;
(statearr_15685_18426[(2)] = null);

(statearr_15685_18426[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15675 === (4))){
var inst_15649 = (state_15674[(7)]);
var inst_15649__$1 = (state_15674[(2)]);
var inst_15650 = (inst_15649__$1 == null);
var state_15674__$1 = (function (){var statearr_15689 = state_15674;
(statearr_15689[(7)] = inst_15649__$1);

return statearr_15689;
})();
if(cljs.core.truth_(inst_15650)){
var statearr_15691_18427 = state_15674__$1;
(statearr_15691_18427[(1)] = (5));

} else {
var statearr_15692_18428 = state_15674__$1;
(statearr_15692_18428[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15675 === (13))){
var state_15674__$1 = state_15674;
var statearr_15695_18430 = state_15674__$1;
(statearr_15695_18430[(2)] = null);

(statearr_15695_18430[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15675 === (6))){
var inst_15649 = (state_15674[(7)]);
var inst_15655 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_15649) : p.call(null,inst_15649));
var state_15674__$1 = state_15674;
if(cljs.core.truth_(inst_15655)){
var statearr_15697_18434 = state_15674__$1;
(statearr_15697_18434[(1)] = (9));

} else {
var statearr_15699_18435 = state_15674__$1;
(statearr_15699_18435[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15675 === (3))){
var inst_15672 = (state_15674[(2)]);
var state_15674__$1 = state_15674;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15674__$1,inst_15672);
} else {
if((state_val_15675 === (12))){
var state_15674__$1 = state_15674;
var statearr_15704_18436 = state_15674__$1;
(statearr_15704_18436[(2)] = null);

(statearr_15704_18436[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15675 === (2))){
var state_15674__$1 = state_15674;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15674__$1,(4),ch);
} else {
if((state_val_15675 === (11))){
var inst_15649 = (state_15674[(7)]);
var inst_15660 = (state_15674[(2)]);
var state_15674__$1 = state_15674;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15674__$1,(8),inst_15660,inst_15649);
} else {
if((state_val_15675 === (9))){
var state_15674__$1 = state_15674;
var statearr_15709_18437 = state_15674__$1;
(statearr_15709_18437[(2)] = tc);

(statearr_15709_18437[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15675 === (5))){
var inst_15652 = cljs.core.async.close_BANG_(tc);
var inst_15653 = cljs.core.async.close_BANG_(fc);
var state_15674__$1 = (function (){var statearr_15711 = state_15674;
(statearr_15711[(8)] = inst_15652);

return statearr_15711;
})();
var statearr_15713_18438 = state_15674__$1;
(statearr_15713_18438[(2)] = inst_15653);

(statearr_15713_18438[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15675 === (14))){
var inst_15667 = (state_15674[(2)]);
var state_15674__$1 = state_15674;
var statearr_15717_18439 = state_15674__$1;
(statearr_15717_18439[(2)] = inst_15667);

(statearr_15717_18439[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15675 === (10))){
var state_15674__$1 = state_15674;
var statearr_15724_18441 = state_15674__$1;
(statearr_15724_18441[(2)] = fc);

(statearr_15724_18441[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15675 === (8))){
var inst_15662 = (state_15674[(2)]);
var state_15674__$1 = state_15674;
if(cljs.core.truth_(inst_15662)){
var statearr_15727_18442 = state_15674__$1;
(statearr_15727_18442[(1)] = (12));

} else {
var statearr_15731_18443 = state_15674__$1;
(statearr_15731_18443[(1)] = (13));

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
var cljs$core$async$state_machine__13958__auto__ = null;
var cljs$core$async$state_machine__13958__auto____0 = (function (){
var statearr_15735 = [null,null,null,null,null,null,null,null,null];
(statearr_15735[(0)] = cljs$core$async$state_machine__13958__auto__);

(statearr_15735[(1)] = (1));

return statearr_15735;
});
var cljs$core$async$state_machine__13958__auto____1 = (function (state_15674){
while(true){
var ret_value__13959__auto__ = (function (){try{while(true){
var result__13960__auto__ = switch__13956__auto__(state_15674);
if(cljs.core.keyword_identical_QMARK_(result__13960__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13960__auto__;
}
break;
}
}catch (e15738){var ex__13961__auto__ = e15738;
var statearr_15739_18445 = state_15674;
(statearr_15739_18445[(2)] = ex__13961__auto__);


if(cljs.core.seq((state_15674[(4)]))){
var statearr_15742_18446 = state_15674;
(statearr_15742_18446[(1)] = cljs.core.first((state_15674[(4)])));

} else {
throw ex__13961__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18447 = state_15674;
state_15674 = G__18447;
continue;
} else {
return ret_value__13959__auto__;
}
break;
}
});
cljs$core$async$state_machine__13958__auto__ = function(state_15674){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13958__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13958__auto____1.call(this,state_15674);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13958__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13958__auto____0;
cljs$core$async$state_machine__13958__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13958__auto____1;
return cljs$core$async$state_machine__13958__auto__;
})()
})();
var state__14862__auto__ = (function (){var statearr_15747 = f__14861__auto__();
(statearr_15747[(6)] = c__14860__auto___18424);

return statearr_15747;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14862__auto__);
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
var c__14860__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14861__auto__ = (function (){var switch__13956__auto__ = (function (state_15793){
var state_val_15794 = (state_15793[(1)]);
if((state_val_15794 === (7))){
var inst_15786 = (state_15793[(2)]);
var state_15793__$1 = state_15793;
var statearr_15800_18452 = state_15793__$1;
(statearr_15800_18452[(2)] = inst_15786);

(statearr_15800_18452[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15794 === (1))){
var inst_15763 = init;
var inst_15765 = inst_15763;
var state_15793__$1 = (function (){var statearr_15802 = state_15793;
(statearr_15802[(7)] = inst_15765);

return statearr_15802;
})();
var statearr_15804_18454 = state_15793__$1;
(statearr_15804_18454[(2)] = null);

(statearr_15804_18454[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15794 === (4))){
var inst_15768 = (state_15793[(8)]);
var inst_15768__$1 = (state_15793[(2)]);
var inst_15770 = (inst_15768__$1 == null);
var state_15793__$1 = (function (){var statearr_15813 = state_15793;
(statearr_15813[(8)] = inst_15768__$1);

return statearr_15813;
})();
if(cljs.core.truth_(inst_15770)){
var statearr_15814_18458 = state_15793__$1;
(statearr_15814_18458[(1)] = (5));

} else {
var statearr_15815_18459 = state_15793__$1;
(statearr_15815_18459[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15794 === (6))){
var inst_15765 = (state_15793[(7)]);
var inst_15768 = (state_15793[(8)]);
var inst_15774 = (state_15793[(9)]);
var inst_15774__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_15765,inst_15768) : f.call(null,inst_15765,inst_15768));
var inst_15775 = cljs.core.reduced_QMARK_(inst_15774__$1);
var state_15793__$1 = (function (){var statearr_15821 = state_15793;
(statearr_15821[(9)] = inst_15774__$1);

return statearr_15821;
})();
if(inst_15775){
var statearr_15823_18460 = state_15793__$1;
(statearr_15823_18460[(1)] = (8));

} else {
var statearr_15824_18461 = state_15793__$1;
(statearr_15824_18461[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15794 === (3))){
var inst_15789 = (state_15793[(2)]);
var state_15793__$1 = state_15793;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15793__$1,inst_15789);
} else {
if((state_val_15794 === (2))){
var state_15793__$1 = state_15793;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15793__$1,(4),ch);
} else {
if((state_val_15794 === (9))){
var inst_15774 = (state_15793[(9)]);
var inst_15765 = inst_15774;
var state_15793__$1 = (function (){var statearr_15831 = state_15793;
(statearr_15831[(7)] = inst_15765);

return statearr_15831;
})();
var statearr_15832_18464 = state_15793__$1;
(statearr_15832_18464[(2)] = null);

(statearr_15832_18464[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15794 === (5))){
var inst_15765 = (state_15793[(7)]);
var state_15793__$1 = state_15793;
var statearr_15835_18465 = state_15793__$1;
(statearr_15835_18465[(2)] = inst_15765);

(statearr_15835_18465[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15794 === (10))){
var inst_15783 = (state_15793[(2)]);
var state_15793__$1 = state_15793;
var statearr_15839_18466 = state_15793__$1;
(statearr_15839_18466[(2)] = inst_15783);

(statearr_15839_18466[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15794 === (8))){
var inst_15774 = (state_15793[(9)]);
var inst_15779 = cljs.core.deref(inst_15774);
var state_15793__$1 = state_15793;
var statearr_15843_18467 = state_15793__$1;
(statearr_15843_18467[(2)] = inst_15779);

(statearr_15843_18467[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__13958__auto__ = null;
var cljs$core$async$reduce_$_state_machine__13958__auto____0 = (function (){
var statearr_15850 = [null,null,null,null,null,null,null,null,null,null];
(statearr_15850[(0)] = cljs$core$async$reduce_$_state_machine__13958__auto__);

(statearr_15850[(1)] = (1));

return statearr_15850;
});
var cljs$core$async$reduce_$_state_machine__13958__auto____1 = (function (state_15793){
while(true){
var ret_value__13959__auto__ = (function (){try{while(true){
var result__13960__auto__ = switch__13956__auto__(state_15793);
if(cljs.core.keyword_identical_QMARK_(result__13960__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13960__auto__;
}
break;
}
}catch (e15851){var ex__13961__auto__ = e15851;
var statearr_15856_18468 = state_15793;
(statearr_15856_18468[(2)] = ex__13961__auto__);


if(cljs.core.seq((state_15793[(4)]))){
var statearr_15857_18469 = state_15793;
(statearr_15857_18469[(1)] = cljs.core.first((state_15793[(4)])));

} else {
throw ex__13961__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18470 = state_15793;
state_15793 = G__18470;
continue;
} else {
return ret_value__13959__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__13958__auto__ = function(state_15793){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__13958__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__13958__auto____1.call(this,state_15793);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__13958__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__13958__auto____0;
cljs$core$async$reduce_$_state_machine__13958__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__13958__auto____1;
return cljs$core$async$reduce_$_state_machine__13958__auto__;
})()
})();
var state__14862__auto__ = (function (){var statearr_15861 = f__14861__auto__();
(statearr_15861[(6)] = c__14860__auto__);

return statearr_15861;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14862__auto__);
}));

return c__14860__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__14860__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14861__auto__ = (function (){var switch__13956__auto__ = (function (state_15873){
var state_val_15875 = (state_15873[(1)]);
if((state_val_15875 === (1))){
var inst_15867 = cljs.core.async.reduce(f__$1,init,ch);
var state_15873__$1 = state_15873;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15873__$1,(2),inst_15867);
} else {
if((state_val_15875 === (2))){
var inst_15869 = (state_15873[(2)]);
var inst_15870 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_15869) : f__$1.call(null,inst_15869));
var state_15873__$1 = state_15873;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15873__$1,inst_15870);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__13958__auto__ = null;
var cljs$core$async$transduce_$_state_machine__13958__auto____0 = (function (){
var statearr_15888 = [null,null,null,null,null,null,null];
(statearr_15888[(0)] = cljs$core$async$transduce_$_state_machine__13958__auto__);

(statearr_15888[(1)] = (1));

return statearr_15888;
});
var cljs$core$async$transduce_$_state_machine__13958__auto____1 = (function (state_15873){
while(true){
var ret_value__13959__auto__ = (function (){try{while(true){
var result__13960__auto__ = switch__13956__auto__(state_15873);
if(cljs.core.keyword_identical_QMARK_(result__13960__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13960__auto__;
}
break;
}
}catch (e15891){var ex__13961__auto__ = e15891;
var statearr_15892_18475 = state_15873;
(statearr_15892_18475[(2)] = ex__13961__auto__);


if(cljs.core.seq((state_15873[(4)]))){
var statearr_15895_18476 = state_15873;
(statearr_15895_18476[(1)] = cljs.core.first((state_15873[(4)])));

} else {
throw ex__13961__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18478 = state_15873;
state_15873 = G__18478;
continue;
} else {
return ret_value__13959__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__13958__auto__ = function(state_15873){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__13958__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__13958__auto____1.call(this,state_15873);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__13958__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__13958__auto____0;
cljs$core$async$transduce_$_state_machine__13958__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__13958__auto____1;
return cljs$core$async$transduce_$_state_machine__13958__auto__;
})()
})();
var state__14862__auto__ = (function (){var statearr_15898 = f__14861__auto__();
(statearr_15898[(6)] = c__14860__auto__);

return statearr_15898;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14862__auto__);
}));

return c__14860__auto__;
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
var G__15911 = arguments.length;
switch (G__15911) {
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
var c__14860__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14861__auto__ = (function (){var switch__13956__auto__ = (function (state_15952){
var state_val_15953 = (state_15952[(1)]);
if((state_val_15953 === (7))){
var inst_15932 = (state_15952[(2)]);
var state_15952__$1 = state_15952;
var statearr_15961_18487 = state_15952__$1;
(statearr_15961_18487[(2)] = inst_15932);

(statearr_15961_18487[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15953 === (1))){
var inst_15922 = cljs.core.seq(coll);
var inst_15923 = inst_15922;
var state_15952__$1 = (function (){var statearr_15969 = state_15952;
(statearr_15969[(7)] = inst_15923);

return statearr_15969;
})();
var statearr_15973_18488 = state_15952__$1;
(statearr_15973_18488[(2)] = null);

(statearr_15973_18488[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15953 === (4))){
var inst_15923 = (state_15952[(7)]);
var inst_15930 = cljs.core.first(inst_15923);
var state_15952__$1 = state_15952;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15952__$1,(7),ch,inst_15930);
} else {
if((state_val_15953 === (13))){
var inst_15946 = (state_15952[(2)]);
var state_15952__$1 = state_15952;
var statearr_15979_18489 = state_15952__$1;
(statearr_15979_18489[(2)] = inst_15946);

(statearr_15979_18489[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15953 === (6))){
var inst_15935 = (state_15952[(2)]);
var state_15952__$1 = state_15952;
if(cljs.core.truth_(inst_15935)){
var statearr_15982_18490 = state_15952__$1;
(statearr_15982_18490[(1)] = (8));

} else {
var statearr_15984_18491 = state_15952__$1;
(statearr_15984_18491[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15953 === (3))){
var inst_15950 = (state_15952[(2)]);
var state_15952__$1 = state_15952;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15952__$1,inst_15950);
} else {
if((state_val_15953 === (12))){
var state_15952__$1 = state_15952;
var statearr_15988_18495 = state_15952__$1;
(statearr_15988_18495[(2)] = null);

(statearr_15988_18495[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15953 === (2))){
var inst_15923 = (state_15952[(7)]);
var state_15952__$1 = state_15952;
if(cljs.core.truth_(inst_15923)){
var statearr_15990_18496 = state_15952__$1;
(statearr_15990_18496[(1)] = (4));

} else {
var statearr_15991_18497 = state_15952__$1;
(statearr_15991_18497[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15953 === (11))){
var inst_15943 = cljs.core.async.close_BANG_(ch);
var state_15952__$1 = state_15952;
var statearr_15994_18498 = state_15952__$1;
(statearr_15994_18498[(2)] = inst_15943);

(statearr_15994_18498[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15953 === (9))){
var state_15952__$1 = state_15952;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15996_18501 = state_15952__$1;
(statearr_15996_18501[(1)] = (11));

} else {
var statearr_15998_18502 = state_15952__$1;
(statearr_15998_18502[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15953 === (5))){
var inst_15923 = (state_15952[(7)]);
var state_15952__$1 = state_15952;
var statearr_16001_18503 = state_15952__$1;
(statearr_16001_18503[(2)] = inst_15923);

(statearr_16001_18503[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15953 === (10))){
var inst_15948 = (state_15952[(2)]);
var state_15952__$1 = state_15952;
var statearr_16003_18504 = state_15952__$1;
(statearr_16003_18504[(2)] = inst_15948);

(statearr_16003_18504[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15953 === (8))){
var inst_15923 = (state_15952[(7)]);
var inst_15937 = cljs.core.next(inst_15923);
var inst_15923__$1 = inst_15937;
var state_15952__$1 = (function (){var statearr_16007 = state_15952;
(statearr_16007[(7)] = inst_15923__$1);

return statearr_16007;
})();
var statearr_16008_18509 = state_15952__$1;
(statearr_16008_18509[(2)] = null);

(statearr_16008_18509[(1)] = (2));


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
var cljs$core$async$state_machine__13958__auto__ = null;
var cljs$core$async$state_machine__13958__auto____0 = (function (){
var statearr_16012 = [null,null,null,null,null,null,null,null];
(statearr_16012[(0)] = cljs$core$async$state_machine__13958__auto__);

(statearr_16012[(1)] = (1));

return statearr_16012;
});
var cljs$core$async$state_machine__13958__auto____1 = (function (state_15952){
while(true){
var ret_value__13959__auto__ = (function (){try{while(true){
var result__13960__auto__ = switch__13956__auto__(state_15952);
if(cljs.core.keyword_identical_QMARK_(result__13960__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13960__auto__;
}
break;
}
}catch (e16015){var ex__13961__auto__ = e16015;
var statearr_16016_18511 = state_15952;
(statearr_16016_18511[(2)] = ex__13961__auto__);


if(cljs.core.seq((state_15952[(4)]))){
var statearr_16018_18512 = state_15952;
(statearr_16018_18512[(1)] = cljs.core.first((state_15952[(4)])));

} else {
throw ex__13961__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18513 = state_15952;
state_15952 = G__18513;
continue;
} else {
return ret_value__13959__auto__;
}
break;
}
});
cljs$core$async$state_machine__13958__auto__ = function(state_15952){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13958__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13958__auto____1.call(this,state_15952);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13958__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13958__auto____0;
cljs$core$async$state_machine__13958__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13958__auto____1;
return cljs$core$async$state_machine__13958__auto__;
})()
})();
var state__14862__auto__ = (function (){var statearr_16027 = f__14861__auto__();
(statearr_16027[(6)] = c__14860__auto__);

return statearr_16027;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14862__auto__);
}));

return c__14860__auto__;
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
var G__16045 = arguments.length;
switch (G__16045) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_18531 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_18531(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_18533 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_18533(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_18535 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_18535(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_18537 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_18537(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16111 = (function (ch,cs,meta16112){
this.ch = ch;
this.cs = cs;
this.meta16112 = meta16112;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16111.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16113,meta16112__$1){
var self__ = this;
var _16113__$1 = this;
return (new cljs.core.async.t_cljs$core$async16111(self__.ch,self__.cs,meta16112__$1));
}));

(cljs.core.async.t_cljs$core$async16111.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16113){
var self__ = this;
var _16113__$1 = this;
return self__.meta16112;
}));

(cljs.core.async.t_cljs$core$async16111.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16111.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async16111.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16111.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async16111.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async16111.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async16111.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta16112","meta16112",-599451165,null)], null);
}));

(cljs.core.async.t_cljs$core$async16111.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16111.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16111");

(cljs.core.async.t_cljs$core$async16111.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async16111");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16111.
 */
cljs.core.async.__GT_t_cljs$core$async16111 = (function cljs$core$async$__GT_t_cljs$core$async16111(ch,cs,meta16112){
return (new cljs.core.async.t_cljs$core$async16111(ch,cs,meta16112));
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
var m = (new cljs.core.async.t_cljs$core$async16111(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__14860__auto___18551 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14861__auto__ = (function (){var switch__13956__auto__ = (function (state_16301){
var state_val_16302 = (state_16301[(1)]);
if((state_val_16302 === (7))){
var inst_16291 = (state_16301[(2)]);
var state_16301__$1 = state_16301;
var statearr_16307_18553 = state_16301__$1;
(statearr_16307_18553[(2)] = inst_16291);

(statearr_16307_18553[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16302 === (20))){
var inst_16183 = (state_16301[(7)]);
var inst_16196 = cljs.core.first(inst_16183);
var inst_16197 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16196,(0),null);
var inst_16198 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16196,(1),null);
var state_16301__$1 = (function (){var statearr_16315 = state_16301;
(statearr_16315[(8)] = inst_16197);

return statearr_16315;
})();
if(cljs.core.truth_(inst_16198)){
var statearr_16317_18554 = state_16301__$1;
(statearr_16317_18554[(1)] = (22));

} else {
var statearr_16318_18555 = state_16301__$1;
(statearr_16318_18555[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16302 === (27))){
var inst_16228 = (state_16301[(9)]);
var inst_16230 = (state_16301[(10)]);
var inst_16235 = (state_16301[(11)]);
var inst_16148 = (state_16301[(12)]);
var inst_16235__$1 = cljs.core._nth(inst_16228,inst_16230);
var inst_16236 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_16235__$1,inst_16148,done);
var state_16301__$1 = (function (){var statearr_16319 = state_16301;
(statearr_16319[(11)] = inst_16235__$1);

return statearr_16319;
})();
if(cljs.core.truth_(inst_16236)){
var statearr_16320_18557 = state_16301__$1;
(statearr_16320_18557[(1)] = (30));

} else {
var statearr_16321_18558 = state_16301__$1;
(statearr_16321_18558[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16302 === (1))){
var state_16301__$1 = state_16301;
var statearr_16322_18560 = state_16301__$1;
(statearr_16322_18560[(2)] = null);

(statearr_16322_18560[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16302 === (24))){
var inst_16183 = (state_16301[(7)]);
var inst_16204 = (state_16301[(2)]);
var inst_16205 = cljs.core.next(inst_16183);
var inst_16157 = inst_16205;
var inst_16158 = null;
var inst_16159 = (0);
var inst_16160 = (0);
var state_16301__$1 = (function (){var statearr_16328 = state_16301;
(statearr_16328[(13)] = inst_16204);

(statearr_16328[(14)] = inst_16157);

(statearr_16328[(15)] = inst_16158);

(statearr_16328[(16)] = inst_16159);

(statearr_16328[(17)] = inst_16160);

return statearr_16328;
})();
var statearr_16330_18564 = state_16301__$1;
(statearr_16330_18564[(2)] = null);

(statearr_16330_18564[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16302 === (39))){
var state_16301__$1 = state_16301;
var statearr_16335_18565 = state_16301__$1;
(statearr_16335_18565[(2)] = null);

(statearr_16335_18565[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16302 === (4))){
var inst_16148 = (state_16301[(12)]);
var inst_16148__$1 = (state_16301[(2)]);
var inst_16149 = (inst_16148__$1 == null);
var state_16301__$1 = (function (){var statearr_16336 = state_16301;
(statearr_16336[(12)] = inst_16148__$1);

return statearr_16336;
})();
if(cljs.core.truth_(inst_16149)){
var statearr_16337_18566 = state_16301__$1;
(statearr_16337_18566[(1)] = (5));

} else {
var statearr_16339_18567 = state_16301__$1;
(statearr_16339_18567[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16302 === (15))){
var inst_16160 = (state_16301[(17)]);
var inst_16157 = (state_16301[(14)]);
var inst_16158 = (state_16301[(15)]);
var inst_16159 = (state_16301[(16)]);
var inst_16179 = (state_16301[(2)]);
var inst_16180 = (inst_16160 + (1));
var tmp16331 = inst_16158;
var tmp16332 = inst_16157;
var tmp16333 = inst_16159;
var inst_16157__$1 = tmp16332;
var inst_16158__$1 = tmp16331;
var inst_16159__$1 = tmp16333;
var inst_16160__$1 = inst_16180;
var state_16301__$1 = (function (){var statearr_16340 = state_16301;
(statearr_16340[(18)] = inst_16179);

(statearr_16340[(14)] = inst_16157__$1);

(statearr_16340[(15)] = inst_16158__$1);

(statearr_16340[(16)] = inst_16159__$1);

(statearr_16340[(17)] = inst_16160__$1);

return statearr_16340;
})();
var statearr_16341_18573 = state_16301__$1;
(statearr_16341_18573[(2)] = null);

(statearr_16341_18573[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16302 === (21))){
var inst_16208 = (state_16301[(2)]);
var state_16301__$1 = state_16301;
var statearr_16349_18576 = state_16301__$1;
(statearr_16349_18576[(2)] = inst_16208);

(statearr_16349_18576[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16302 === (31))){
var inst_16235 = (state_16301[(11)]);
var inst_16239 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_16235);
var state_16301__$1 = state_16301;
var statearr_16352_18578 = state_16301__$1;
(statearr_16352_18578[(2)] = inst_16239);

(statearr_16352_18578[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16302 === (32))){
var inst_16230 = (state_16301[(10)]);
var inst_16227 = (state_16301[(19)]);
var inst_16228 = (state_16301[(9)]);
var inst_16229 = (state_16301[(20)]);
var inst_16241 = (state_16301[(2)]);
var inst_16242 = (inst_16230 + (1));
var tmp16343 = inst_16227;
var tmp16344 = inst_16228;
var tmp16345 = inst_16229;
var inst_16227__$1 = tmp16343;
var inst_16228__$1 = tmp16344;
var inst_16229__$1 = tmp16345;
var inst_16230__$1 = inst_16242;
var state_16301__$1 = (function (){var statearr_16353 = state_16301;
(statearr_16353[(21)] = inst_16241);

(statearr_16353[(19)] = inst_16227__$1);

(statearr_16353[(9)] = inst_16228__$1);

(statearr_16353[(20)] = inst_16229__$1);

(statearr_16353[(10)] = inst_16230__$1);

return statearr_16353;
})();
var statearr_16355_18581 = state_16301__$1;
(statearr_16355_18581[(2)] = null);

(statearr_16355_18581[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16302 === (40))){
var inst_16262 = (state_16301[(22)]);
var inst_16266 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_16262);
var state_16301__$1 = state_16301;
var statearr_16358_18583 = state_16301__$1;
(statearr_16358_18583[(2)] = inst_16266);

(statearr_16358_18583[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16302 === (33))){
var inst_16249 = (state_16301[(23)]);
var inst_16254 = cljs.core.chunked_seq_QMARK_(inst_16249);
var state_16301__$1 = state_16301;
if(inst_16254){
var statearr_16359_18584 = state_16301__$1;
(statearr_16359_18584[(1)] = (36));

} else {
var statearr_16362_18586 = state_16301__$1;
(statearr_16362_18586[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16302 === (13))){
var inst_16173 = (state_16301[(24)]);
var inst_16176 = cljs.core.async.close_BANG_(inst_16173);
var state_16301__$1 = state_16301;
var statearr_16365_18588 = state_16301__$1;
(statearr_16365_18588[(2)] = inst_16176);

(statearr_16365_18588[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16302 === (22))){
var inst_16197 = (state_16301[(8)]);
var inst_16200 = cljs.core.async.close_BANG_(inst_16197);
var state_16301__$1 = state_16301;
var statearr_16367_18591 = state_16301__$1;
(statearr_16367_18591[(2)] = inst_16200);

(statearr_16367_18591[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16302 === (36))){
var inst_16249 = (state_16301[(23)]);
var inst_16256 = cljs.core.chunk_first(inst_16249);
var inst_16257 = cljs.core.chunk_rest(inst_16249);
var inst_16258 = cljs.core.count(inst_16256);
var inst_16227 = inst_16257;
var inst_16228 = inst_16256;
var inst_16229 = inst_16258;
var inst_16230 = (0);
var state_16301__$1 = (function (){var statearr_16368 = state_16301;
(statearr_16368[(19)] = inst_16227);

(statearr_16368[(9)] = inst_16228);

(statearr_16368[(20)] = inst_16229);

(statearr_16368[(10)] = inst_16230);

return statearr_16368;
})();
var statearr_16369_18605 = state_16301__$1;
(statearr_16369_18605[(2)] = null);

(statearr_16369_18605[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16302 === (41))){
var inst_16249 = (state_16301[(23)]);
var inst_16268 = (state_16301[(2)]);
var inst_16271 = cljs.core.next(inst_16249);
var inst_16227 = inst_16271;
var inst_16228 = null;
var inst_16229 = (0);
var inst_16230 = (0);
var state_16301__$1 = (function (){var statearr_16370 = state_16301;
(statearr_16370[(25)] = inst_16268);

(statearr_16370[(19)] = inst_16227);

(statearr_16370[(9)] = inst_16228);

(statearr_16370[(20)] = inst_16229);

(statearr_16370[(10)] = inst_16230);

return statearr_16370;
})();
var statearr_16371_18608 = state_16301__$1;
(statearr_16371_18608[(2)] = null);

(statearr_16371_18608[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16302 === (43))){
var state_16301__$1 = state_16301;
var statearr_16373_18609 = state_16301__$1;
(statearr_16373_18609[(2)] = null);

(statearr_16373_18609[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16302 === (29))){
var inst_16279 = (state_16301[(2)]);
var state_16301__$1 = state_16301;
var statearr_16374_18611 = state_16301__$1;
(statearr_16374_18611[(2)] = inst_16279);

(statearr_16374_18611[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16302 === (44))){
var inst_16288 = (state_16301[(2)]);
var state_16301__$1 = (function (){var statearr_16375 = state_16301;
(statearr_16375[(26)] = inst_16288);

return statearr_16375;
})();
var statearr_16376_18614 = state_16301__$1;
(statearr_16376_18614[(2)] = null);

(statearr_16376_18614[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16302 === (6))){
var inst_16219 = (state_16301[(27)]);
var inst_16218 = cljs.core.deref(cs);
var inst_16219__$1 = cljs.core.keys(inst_16218);
var inst_16220 = cljs.core.count(inst_16219__$1);
var inst_16221 = cljs.core.reset_BANG_(dctr,inst_16220);
var inst_16226 = cljs.core.seq(inst_16219__$1);
var inst_16227 = inst_16226;
var inst_16228 = null;
var inst_16229 = (0);
var inst_16230 = (0);
var state_16301__$1 = (function (){var statearr_16379 = state_16301;
(statearr_16379[(27)] = inst_16219__$1);

(statearr_16379[(28)] = inst_16221);

(statearr_16379[(19)] = inst_16227);

(statearr_16379[(9)] = inst_16228);

(statearr_16379[(20)] = inst_16229);

(statearr_16379[(10)] = inst_16230);

return statearr_16379;
})();
var statearr_16381_18624 = state_16301__$1;
(statearr_16381_18624[(2)] = null);

(statearr_16381_18624[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16302 === (28))){
var inst_16227 = (state_16301[(19)]);
var inst_16249 = (state_16301[(23)]);
var inst_16249__$1 = cljs.core.seq(inst_16227);
var state_16301__$1 = (function (){var statearr_16387 = state_16301;
(statearr_16387[(23)] = inst_16249__$1);

return statearr_16387;
})();
if(inst_16249__$1){
var statearr_16388_18629 = state_16301__$1;
(statearr_16388_18629[(1)] = (33));

} else {
var statearr_16389_18630 = state_16301__$1;
(statearr_16389_18630[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16302 === (25))){
var inst_16230 = (state_16301[(10)]);
var inst_16229 = (state_16301[(20)]);
var inst_16232 = (inst_16230 < inst_16229);
var inst_16233 = inst_16232;
var state_16301__$1 = state_16301;
if(cljs.core.truth_(inst_16233)){
var statearr_16390_18631 = state_16301__$1;
(statearr_16390_18631[(1)] = (27));

} else {
var statearr_16391_18632 = state_16301__$1;
(statearr_16391_18632[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16302 === (34))){
var state_16301__$1 = state_16301;
var statearr_16395_18633 = state_16301__$1;
(statearr_16395_18633[(2)] = null);

(statearr_16395_18633[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16302 === (17))){
var state_16301__$1 = state_16301;
var statearr_16400_18634 = state_16301__$1;
(statearr_16400_18634[(2)] = null);

(statearr_16400_18634[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16302 === (3))){
var inst_16293 = (state_16301[(2)]);
var state_16301__$1 = state_16301;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16301__$1,inst_16293);
} else {
if((state_val_16302 === (12))){
var inst_16213 = (state_16301[(2)]);
var state_16301__$1 = state_16301;
var statearr_16402_18639 = state_16301__$1;
(statearr_16402_18639[(2)] = inst_16213);

(statearr_16402_18639[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16302 === (2))){
var state_16301__$1 = state_16301;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16301__$1,(4),ch);
} else {
if((state_val_16302 === (23))){
var state_16301__$1 = state_16301;
var statearr_16404_18643 = state_16301__$1;
(statearr_16404_18643[(2)] = null);

(statearr_16404_18643[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16302 === (35))){
var inst_16277 = (state_16301[(2)]);
var state_16301__$1 = state_16301;
var statearr_16405_18650 = state_16301__$1;
(statearr_16405_18650[(2)] = inst_16277);

(statearr_16405_18650[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16302 === (19))){
var inst_16183 = (state_16301[(7)]);
var inst_16188 = cljs.core.chunk_first(inst_16183);
var inst_16189 = cljs.core.chunk_rest(inst_16183);
var inst_16190 = cljs.core.count(inst_16188);
var inst_16157 = inst_16189;
var inst_16158 = inst_16188;
var inst_16159 = inst_16190;
var inst_16160 = (0);
var state_16301__$1 = (function (){var statearr_16408 = state_16301;
(statearr_16408[(14)] = inst_16157);

(statearr_16408[(15)] = inst_16158);

(statearr_16408[(16)] = inst_16159);

(statearr_16408[(17)] = inst_16160);

return statearr_16408;
})();
var statearr_16409_18651 = state_16301__$1;
(statearr_16409_18651[(2)] = null);

(statearr_16409_18651[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16302 === (11))){
var inst_16157 = (state_16301[(14)]);
var inst_16183 = (state_16301[(7)]);
var inst_16183__$1 = cljs.core.seq(inst_16157);
var state_16301__$1 = (function (){var statearr_16411 = state_16301;
(statearr_16411[(7)] = inst_16183__$1);

return statearr_16411;
})();
if(inst_16183__$1){
var statearr_16412_18657 = state_16301__$1;
(statearr_16412_18657[(1)] = (16));

} else {
var statearr_16415_18658 = state_16301__$1;
(statearr_16415_18658[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16302 === (9))){
var inst_16216 = (state_16301[(2)]);
var state_16301__$1 = state_16301;
var statearr_16416_18662 = state_16301__$1;
(statearr_16416_18662[(2)] = inst_16216);

(statearr_16416_18662[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16302 === (5))){
var inst_16155 = cljs.core.deref(cs);
var inst_16156 = cljs.core.seq(inst_16155);
var inst_16157 = inst_16156;
var inst_16158 = null;
var inst_16159 = (0);
var inst_16160 = (0);
var state_16301__$1 = (function (){var statearr_16420 = state_16301;
(statearr_16420[(14)] = inst_16157);

(statearr_16420[(15)] = inst_16158);

(statearr_16420[(16)] = inst_16159);

(statearr_16420[(17)] = inst_16160);

return statearr_16420;
})();
var statearr_16421_18668 = state_16301__$1;
(statearr_16421_18668[(2)] = null);

(statearr_16421_18668[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16302 === (14))){
var state_16301__$1 = state_16301;
var statearr_16422_18669 = state_16301__$1;
(statearr_16422_18669[(2)] = null);

(statearr_16422_18669[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16302 === (45))){
var inst_16285 = (state_16301[(2)]);
var state_16301__$1 = state_16301;
var statearr_16424_18673 = state_16301__$1;
(statearr_16424_18673[(2)] = inst_16285);

(statearr_16424_18673[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16302 === (26))){
var inst_16219 = (state_16301[(27)]);
var inst_16281 = (state_16301[(2)]);
var inst_16282 = cljs.core.seq(inst_16219);
var state_16301__$1 = (function (){var statearr_16429 = state_16301;
(statearr_16429[(29)] = inst_16281);

return statearr_16429;
})();
if(inst_16282){
var statearr_16431_18674 = state_16301__$1;
(statearr_16431_18674[(1)] = (42));

} else {
var statearr_16432_18675 = state_16301__$1;
(statearr_16432_18675[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16302 === (16))){
var inst_16183 = (state_16301[(7)]);
var inst_16186 = cljs.core.chunked_seq_QMARK_(inst_16183);
var state_16301__$1 = state_16301;
if(inst_16186){
var statearr_16433_18677 = state_16301__$1;
(statearr_16433_18677[(1)] = (19));

} else {
var statearr_16434_18678 = state_16301__$1;
(statearr_16434_18678[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16302 === (38))){
var inst_16274 = (state_16301[(2)]);
var state_16301__$1 = state_16301;
var statearr_16439_18679 = state_16301__$1;
(statearr_16439_18679[(2)] = inst_16274);

(statearr_16439_18679[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16302 === (30))){
var state_16301__$1 = state_16301;
var statearr_16440_18680 = state_16301__$1;
(statearr_16440_18680[(2)] = null);

(statearr_16440_18680[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16302 === (10))){
var inst_16158 = (state_16301[(15)]);
var inst_16160 = (state_16301[(17)]);
var inst_16171 = cljs.core._nth(inst_16158,inst_16160);
var inst_16173 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16171,(0),null);
var inst_16174 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16171,(1),null);
var state_16301__$1 = (function (){var statearr_16442 = state_16301;
(statearr_16442[(24)] = inst_16173);

return statearr_16442;
})();
if(cljs.core.truth_(inst_16174)){
var statearr_16443_18681 = state_16301__$1;
(statearr_16443_18681[(1)] = (13));

} else {
var statearr_16446_18682 = state_16301__$1;
(statearr_16446_18682[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16302 === (18))){
var inst_16211 = (state_16301[(2)]);
var state_16301__$1 = state_16301;
var statearr_16451_18683 = state_16301__$1;
(statearr_16451_18683[(2)] = inst_16211);

(statearr_16451_18683[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16302 === (42))){
var state_16301__$1 = state_16301;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16301__$1,(45),dchan);
} else {
if((state_val_16302 === (37))){
var inst_16249 = (state_16301[(23)]);
var inst_16262 = (state_16301[(22)]);
var inst_16148 = (state_16301[(12)]);
var inst_16262__$1 = cljs.core.first(inst_16249);
var inst_16263 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_16262__$1,inst_16148,done);
var state_16301__$1 = (function (){var statearr_16454 = state_16301;
(statearr_16454[(22)] = inst_16262__$1);

return statearr_16454;
})();
if(cljs.core.truth_(inst_16263)){
var statearr_16455_18693 = state_16301__$1;
(statearr_16455_18693[(1)] = (39));

} else {
var statearr_16456_18694 = state_16301__$1;
(statearr_16456_18694[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16302 === (8))){
var inst_16160 = (state_16301[(17)]);
var inst_16159 = (state_16301[(16)]);
var inst_16162 = (inst_16160 < inst_16159);
var inst_16163 = inst_16162;
var state_16301__$1 = state_16301;
if(cljs.core.truth_(inst_16163)){
var statearr_16460_18695 = state_16301__$1;
(statearr_16460_18695[(1)] = (10));

} else {
var statearr_16461_18697 = state_16301__$1;
(statearr_16461_18697[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__13958__auto__ = null;
var cljs$core$async$mult_$_state_machine__13958__auto____0 = (function (){
var statearr_16463 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16463[(0)] = cljs$core$async$mult_$_state_machine__13958__auto__);

(statearr_16463[(1)] = (1));

return statearr_16463;
});
var cljs$core$async$mult_$_state_machine__13958__auto____1 = (function (state_16301){
while(true){
var ret_value__13959__auto__ = (function (){try{while(true){
var result__13960__auto__ = switch__13956__auto__(state_16301);
if(cljs.core.keyword_identical_QMARK_(result__13960__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13960__auto__;
}
break;
}
}catch (e16466){var ex__13961__auto__ = e16466;
var statearr_16467_18701 = state_16301;
(statearr_16467_18701[(2)] = ex__13961__auto__);


if(cljs.core.seq((state_16301[(4)]))){
var statearr_16476_18702 = state_16301;
(statearr_16476_18702[(1)] = cljs.core.first((state_16301[(4)])));

} else {
throw ex__13961__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18703 = state_16301;
state_16301 = G__18703;
continue;
} else {
return ret_value__13959__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__13958__auto__ = function(state_16301){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__13958__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__13958__auto____1.call(this,state_16301);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__13958__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__13958__auto____0;
cljs$core$async$mult_$_state_machine__13958__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__13958__auto____1;
return cljs$core$async$mult_$_state_machine__13958__auto__;
})()
})();
var state__14862__auto__ = (function (){var statearr_16489 = f__14861__auto__();
(statearr_16489[(6)] = c__14860__auto___18551);

return statearr_16489;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14862__auto__);
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
var G__16498 = arguments.length;
switch (G__16498) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_18706 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_18706(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_18713 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_18713(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_18717 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_18717(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_18719 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_18719(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_18723 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_18723(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5882__auto__ = [];
var len__5876__auto___18729 = arguments.length;
var i__5877__auto___18730 = (0);
while(true){
if((i__5877__auto___18730 < len__5876__auto___18729)){
args__5882__auto__.push((arguments[i__5877__auto___18730]));

var G__18733 = (i__5877__auto___18730 + (1));
i__5877__auto___18730 = G__18733;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((3) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5883__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__16546){
var map__16547 = p__16546;
var map__16547__$1 = cljs.core.__destructure_map(map__16547);
var opts = map__16547__$1;
var statearr_16551_18736 = state;
(statearr_16551_18736[(1)] = cont_block);


var temp__5823__auto__ = cljs.core.async.do_alts((function (val){
var statearr_16552_18737 = state;
(statearr_16552_18737[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5823__auto__)){
var cb = temp__5823__auto__;
var statearr_16555_18741 = state;
(statearr_16555_18741[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq16540){
var G__16541 = cljs.core.first(seq16540);
var seq16540__$1 = cljs.core.next(seq16540);
var G__16542 = cljs.core.first(seq16540__$1);
var seq16540__$2 = cljs.core.next(seq16540__$1);
var G__16543 = cljs.core.first(seq16540__$2);
var seq16540__$3 = cljs.core.next(seq16540__$2);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16541,G__16542,G__16543,seq16540__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16568 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16569){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta16569 = meta16569;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16568.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16570,meta16569__$1){
var self__ = this;
var _16570__$1 = this;
return (new cljs.core.async.t_cljs$core$async16568(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta16569__$1));
}));

(cljs.core.async.t_cljs$core$async16568.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16570){
var self__ = this;
var _16570__$1 = this;
return self__.meta16569;
}));

(cljs.core.async.t_cljs$core$async16568.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16568.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async16568.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16568.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16568.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16568.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16568.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16568.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error((""+"Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((""+"mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+"(solo-modes mode)")));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16568.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta16569","meta16569",2109483950,null)], null);
}));

(cljs.core.async.t_cljs$core$async16568.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16568.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16568");

(cljs.core.async.t_cljs$core$async16568.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async16568");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16568.
 */
cljs.core.async.__GT_t_cljs$core$async16568 = (function cljs$core$async$__GT_t_cljs$core$async16568(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16569){
return (new cljs.core.async.t_cljs$core$async16568(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16569));
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
var m = (new cljs.core.async.t_cljs$core$async16568(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__14860__auto___18780 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14861__auto__ = (function (){var switch__13956__auto__ = (function (state_16698){
var state_val_16699 = (state_16698[(1)]);
if((state_val_16699 === (7))){
var inst_16656 = (state_16698[(2)]);
var state_16698__$1 = state_16698;
if(cljs.core.truth_(inst_16656)){
var statearr_16703_18781 = state_16698__$1;
(statearr_16703_18781[(1)] = (8));

} else {
var statearr_16704_18782 = state_16698__$1;
(statearr_16704_18782[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16699 === (20))){
var inst_16649 = (state_16698[(7)]);
var state_16698__$1 = state_16698;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16698__$1,(23),out,inst_16649);
} else {
if((state_val_16699 === (1))){
var inst_16624 = calc_state();
var inst_16625 = cljs.core.__destructure_map(inst_16624);
var inst_16626 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16625,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_16627 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16625,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_16628 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16625,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_16629 = inst_16624;
var state_16698__$1 = (function (){var statearr_16708 = state_16698;
(statearr_16708[(8)] = inst_16626);

(statearr_16708[(9)] = inst_16627);

(statearr_16708[(10)] = inst_16628);

(statearr_16708[(11)] = inst_16629);

return statearr_16708;
})();
var statearr_16713_18785 = state_16698__$1;
(statearr_16713_18785[(2)] = null);

(statearr_16713_18785[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16699 === (24))){
var inst_16634 = (state_16698[(12)]);
var inst_16629 = inst_16634;
var state_16698__$1 = (function (){var statearr_16714 = state_16698;
(statearr_16714[(11)] = inst_16629);

return statearr_16714;
})();
var statearr_16715_18790 = state_16698__$1;
(statearr_16715_18790[(2)] = null);

(statearr_16715_18790[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16699 === (4))){
var inst_16649 = (state_16698[(7)]);
var inst_16651 = (state_16698[(13)]);
var inst_16648 = (state_16698[(2)]);
var inst_16649__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16648,(0),null);
var inst_16650 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16648,(1),null);
var inst_16651__$1 = (inst_16649__$1 == null);
var state_16698__$1 = (function (){var statearr_16719 = state_16698;
(statearr_16719[(7)] = inst_16649__$1);

(statearr_16719[(14)] = inst_16650);

(statearr_16719[(13)] = inst_16651__$1);

return statearr_16719;
})();
if(cljs.core.truth_(inst_16651__$1)){
var statearr_16720_18792 = state_16698__$1;
(statearr_16720_18792[(1)] = (5));

} else {
var statearr_16721_18793 = state_16698__$1;
(statearr_16721_18793[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16699 === (15))){
var inst_16639 = (state_16698[(15)]);
var inst_16672 = (state_16698[(16)]);
var inst_16672__$1 = cljs.core.empty_QMARK_(inst_16639);
var state_16698__$1 = (function (){var statearr_16722 = state_16698;
(statearr_16722[(16)] = inst_16672__$1);

return statearr_16722;
})();
if(inst_16672__$1){
var statearr_16723_18794 = state_16698__$1;
(statearr_16723_18794[(1)] = (17));

} else {
var statearr_16724_18795 = state_16698__$1;
(statearr_16724_18795[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16699 === (21))){
var inst_16634 = (state_16698[(12)]);
var inst_16629 = inst_16634;
var state_16698__$1 = (function (){var statearr_16729 = state_16698;
(statearr_16729[(11)] = inst_16629);

return statearr_16729;
})();
var statearr_16730_18796 = state_16698__$1;
(statearr_16730_18796[(2)] = null);

(statearr_16730_18796[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16699 === (13))){
var inst_16663 = (state_16698[(2)]);
var inst_16664 = calc_state();
var inst_16629 = inst_16664;
var state_16698__$1 = (function (){var statearr_16732 = state_16698;
(statearr_16732[(17)] = inst_16663);

(statearr_16732[(11)] = inst_16629);

return statearr_16732;
})();
var statearr_16733_18797 = state_16698__$1;
(statearr_16733_18797[(2)] = null);

(statearr_16733_18797[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16699 === (22))){
var inst_16692 = (state_16698[(2)]);
var state_16698__$1 = state_16698;
var statearr_16734_18798 = state_16698__$1;
(statearr_16734_18798[(2)] = inst_16692);

(statearr_16734_18798[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16699 === (6))){
var inst_16650 = (state_16698[(14)]);
var inst_16654 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_16650,change);
var state_16698__$1 = state_16698;
var statearr_16736_18799 = state_16698__$1;
(statearr_16736_18799[(2)] = inst_16654);

(statearr_16736_18799[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16699 === (25))){
var state_16698__$1 = state_16698;
var statearr_16737_18800 = state_16698__$1;
(statearr_16737_18800[(2)] = null);

(statearr_16737_18800[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16699 === (17))){
var inst_16640 = (state_16698[(18)]);
var inst_16650 = (state_16698[(14)]);
var inst_16674 = (inst_16640.cljs$core$IFn$_invoke$arity$1 ? inst_16640.cljs$core$IFn$_invoke$arity$1(inst_16650) : inst_16640.call(null,inst_16650));
var inst_16675 = cljs.core.not(inst_16674);
var state_16698__$1 = state_16698;
var statearr_16742_18801 = state_16698__$1;
(statearr_16742_18801[(2)] = inst_16675);

(statearr_16742_18801[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16699 === (3))){
var inst_16696 = (state_16698[(2)]);
var state_16698__$1 = state_16698;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16698__$1,inst_16696);
} else {
if((state_val_16699 === (12))){
var state_16698__$1 = state_16698;
var statearr_16743_18803 = state_16698__$1;
(statearr_16743_18803[(2)] = null);

(statearr_16743_18803[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16699 === (2))){
var inst_16629 = (state_16698[(11)]);
var inst_16634 = (state_16698[(12)]);
var inst_16634__$1 = cljs.core.__destructure_map(inst_16629);
var inst_16639 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16634__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_16640 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16634__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_16641 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16634__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_16698__$1 = (function (){var statearr_16744 = state_16698;
(statearr_16744[(12)] = inst_16634__$1);

(statearr_16744[(15)] = inst_16639);

(statearr_16744[(18)] = inst_16640);

return statearr_16744;
})();
return cljs.core.async.ioc_alts_BANG_(state_16698__$1,(4),inst_16641);
} else {
if((state_val_16699 === (23))){
var inst_16683 = (state_16698[(2)]);
var state_16698__$1 = state_16698;
if(cljs.core.truth_(inst_16683)){
var statearr_16746_18807 = state_16698__$1;
(statearr_16746_18807[(1)] = (24));

} else {
var statearr_16747_18808 = state_16698__$1;
(statearr_16747_18808[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16699 === (19))){
var inst_16678 = (state_16698[(2)]);
var state_16698__$1 = state_16698;
var statearr_16748_18809 = state_16698__$1;
(statearr_16748_18809[(2)] = inst_16678);

(statearr_16748_18809[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16699 === (11))){
var inst_16650 = (state_16698[(14)]);
var inst_16660 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_16650);
var state_16698__$1 = state_16698;
var statearr_16749_18814 = state_16698__$1;
(statearr_16749_18814[(2)] = inst_16660);

(statearr_16749_18814[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16699 === (9))){
var inst_16639 = (state_16698[(15)]);
var inst_16650 = (state_16698[(14)]);
var inst_16667 = (state_16698[(19)]);
var inst_16667__$1 = (inst_16639.cljs$core$IFn$_invoke$arity$1 ? inst_16639.cljs$core$IFn$_invoke$arity$1(inst_16650) : inst_16639.call(null,inst_16650));
var state_16698__$1 = (function (){var statearr_16750 = state_16698;
(statearr_16750[(19)] = inst_16667__$1);

return statearr_16750;
})();
if(cljs.core.truth_(inst_16667__$1)){
var statearr_16751_18815 = state_16698__$1;
(statearr_16751_18815[(1)] = (14));

} else {
var statearr_16752_18816 = state_16698__$1;
(statearr_16752_18816[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16699 === (5))){
var inst_16651 = (state_16698[(13)]);
var state_16698__$1 = state_16698;
var statearr_16755_18818 = state_16698__$1;
(statearr_16755_18818[(2)] = inst_16651);

(statearr_16755_18818[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16699 === (14))){
var inst_16667 = (state_16698[(19)]);
var state_16698__$1 = state_16698;
var statearr_16760_18823 = state_16698__$1;
(statearr_16760_18823[(2)] = inst_16667);

(statearr_16760_18823[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16699 === (26))){
var inst_16688 = (state_16698[(2)]);
var state_16698__$1 = state_16698;
var statearr_16761_18824 = state_16698__$1;
(statearr_16761_18824[(2)] = inst_16688);

(statearr_16761_18824[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16699 === (16))){
var inst_16680 = (state_16698[(2)]);
var state_16698__$1 = state_16698;
if(cljs.core.truth_(inst_16680)){
var statearr_16762_18825 = state_16698__$1;
(statearr_16762_18825[(1)] = (20));

} else {
var statearr_16763_18826 = state_16698__$1;
(statearr_16763_18826[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16699 === (10))){
var inst_16694 = (state_16698[(2)]);
var state_16698__$1 = state_16698;
var statearr_16764_18827 = state_16698__$1;
(statearr_16764_18827[(2)] = inst_16694);

(statearr_16764_18827[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16699 === (18))){
var inst_16672 = (state_16698[(16)]);
var state_16698__$1 = state_16698;
var statearr_16768_18828 = state_16698__$1;
(statearr_16768_18828[(2)] = inst_16672);

(statearr_16768_18828[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16699 === (8))){
var inst_16649 = (state_16698[(7)]);
var inst_16658 = (inst_16649 == null);
var state_16698__$1 = state_16698;
if(cljs.core.truth_(inst_16658)){
var statearr_16769_18833 = state_16698__$1;
(statearr_16769_18833[(1)] = (11));

} else {
var statearr_16770_18834 = state_16698__$1;
(statearr_16770_18834[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__13958__auto__ = null;
var cljs$core$async$mix_$_state_machine__13958__auto____0 = (function (){
var statearr_16772 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16772[(0)] = cljs$core$async$mix_$_state_machine__13958__auto__);

(statearr_16772[(1)] = (1));

return statearr_16772;
});
var cljs$core$async$mix_$_state_machine__13958__auto____1 = (function (state_16698){
while(true){
var ret_value__13959__auto__ = (function (){try{while(true){
var result__13960__auto__ = switch__13956__auto__(state_16698);
if(cljs.core.keyword_identical_QMARK_(result__13960__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13960__auto__;
}
break;
}
}catch (e16773){var ex__13961__auto__ = e16773;
var statearr_16774_18836 = state_16698;
(statearr_16774_18836[(2)] = ex__13961__auto__);


if(cljs.core.seq((state_16698[(4)]))){
var statearr_16775_18837 = state_16698;
(statearr_16775_18837[(1)] = cljs.core.first((state_16698[(4)])));

} else {
throw ex__13961__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18838 = state_16698;
state_16698 = G__18838;
continue;
} else {
return ret_value__13959__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__13958__auto__ = function(state_16698){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__13958__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__13958__auto____1.call(this,state_16698);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__13958__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__13958__auto____0;
cljs$core$async$mix_$_state_machine__13958__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__13958__auto____1;
return cljs$core$async$mix_$_state_machine__13958__auto__;
})()
})();
var state__14862__auto__ = (function (){var statearr_16776 = f__14861__auto__();
(statearr_16776[(6)] = c__14860__auto___18780);

return statearr_16776;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14862__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_18843 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_18843(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_18845 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_18845(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_18847 = (function() {
var G__18848 = null;
var G__18848__1 = (function (p){
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
var G__18848__2 = (function (p,v){
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
G__18848 = function(p,v){
switch(arguments.length){
case 1:
return G__18848__1.call(this,p);
case 2:
return G__18848__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__18848.cljs$core$IFn$_invoke$arity$1 = G__18848__1;
G__18848.cljs$core$IFn$_invoke$arity$2 = G__18848__2;
return G__18848;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__16808 = arguments.length;
switch (G__16808) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_18847(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_18847(p,v);
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
cljs.core.async.t_cljs$core$async16849 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta16850){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta16850 = meta16850;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16849.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16851,meta16850__$1){
var self__ = this;
var _16851__$1 = this;
return (new cljs.core.async.t_cljs$core$async16849(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta16850__$1));
}));

(cljs.core.async.t_cljs$core$async16849.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16851){
var self__ = this;
var _16851__$1 = this;
return self__.meta16850;
}));

(cljs.core.async.t_cljs$core$async16849.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16849.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async16849.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16849.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async16849.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async16849.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async16849.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async16849.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta16850","meta16850",-1091857400,null)], null);
}));

(cljs.core.async.t_cljs$core$async16849.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16849.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16849");

(cljs.core.async.t_cljs$core$async16849.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async16849");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16849.
 */
cljs.core.async.__GT_t_cljs$core$async16849 = (function cljs$core$async$__GT_t_cljs$core$async16849(ch,topic_fn,buf_fn,mults,ensure_mult,meta16850){
return (new cljs.core.async.t_cljs$core$async16849(ch,topic_fn,buf_fn,mults,ensure_mult,meta16850));
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
var G__16817 = arguments.length;
switch (G__16817) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__16813_SHARP_){
if(cljs.core.truth_((p1__16813_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__16813_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__16813_SHARP_.call(null,topic)))){
return p1__16813_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__16813_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async16849(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__14860__auto___18863 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14861__auto__ = (function (){var switch__13956__auto__ = (function (state_16961){
var state_val_16962 = (state_16961[(1)]);
if((state_val_16962 === (7))){
var inst_16957 = (state_16961[(2)]);
var state_16961__$1 = state_16961;
var statearr_16966_18865 = state_16961__$1;
(statearr_16966_18865[(2)] = inst_16957);

(statearr_16966_18865[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16962 === (20))){
var state_16961__$1 = state_16961;
var statearr_16967_18866 = state_16961__$1;
(statearr_16967_18866[(2)] = null);

(statearr_16967_18866[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16962 === (1))){
var state_16961__$1 = state_16961;
var statearr_16968_18868 = state_16961__$1;
(statearr_16968_18868[(2)] = null);

(statearr_16968_18868[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16962 === (24))){
var inst_16938 = (state_16961[(7)]);
var inst_16947 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_16938);
var state_16961__$1 = state_16961;
var statearr_16969_18869 = state_16961__$1;
(statearr_16969_18869[(2)] = inst_16947);

(statearr_16969_18869[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16962 === (4))){
var inst_16885 = (state_16961[(8)]);
var inst_16885__$1 = (state_16961[(2)]);
var inst_16887 = (inst_16885__$1 == null);
var state_16961__$1 = (function (){var statearr_16970 = state_16961;
(statearr_16970[(8)] = inst_16885__$1);

return statearr_16970;
})();
if(cljs.core.truth_(inst_16887)){
var statearr_16971_18871 = state_16961__$1;
(statearr_16971_18871[(1)] = (5));

} else {
var statearr_16972_18872 = state_16961__$1;
(statearr_16972_18872[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16962 === (15))){
var inst_16931 = (state_16961[(2)]);
var state_16961__$1 = state_16961;
var statearr_16973_18873 = state_16961__$1;
(statearr_16973_18873[(2)] = inst_16931);

(statearr_16973_18873[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16962 === (21))){
var inst_16954 = (state_16961[(2)]);
var state_16961__$1 = (function (){var statearr_16974 = state_16961;
(statearr_16974[(9)] = inst_16954);

return statearr_16974;
})();
var statearr_16975_18875 = state_16961__$1;
(statearr_16975_18875[(2)] = null);

(statearr_16975_18875[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16962 === (13))){
var inst_16913 = (state_16961[(10)]);
var inst_16915 = cljs.core.chunked_seq_QMARK_(inst_16913);
var state_16961__$1 = state_16961;
if(inst_16915){
var statearr_16977_18879 = state_16961__$1;
(statearr_16977_18879[(1)] = (16));

} else {
var statearr_16979_18881 = state_16961__$1;
(statearr_16979_18881[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16962 === (22))){
var inst_16944 = (state_16961[(2)]);
var state_16961__$1 = state_16961;
if(cljs.core.truth_(inst_16944)){
var statearr_16980_18882 = state_16961__$1;
(statearr_16980_18882[(1)] = (23));

} else {
var statearr_16981_18883 = state_16961__$1;
(statearr_16981_18883[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16962 === (6))){
var inst_16885 = (state_16961[(8)]);
var inst_16938 = (state_16961[(7)]);
var inst_16940 = (state_16961[(11)]);
var inst_16938__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_16885) : topic_fn.call(null,inst_16885));
var inst_16939 = cljs.core.deref(mults);
var inst_16940__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16939,inst_16938__$1);
var state_16961__$1 = (function (){var statearr_16982 = state_16961;
(statearr_16982[(7)] = inst_16938__$1);

(statearr_16982[(11)] = inst_16940__$1);

return statearr_16982;
})();
if(cljs.core.truth_(inst_16940__$1)){
var statearr_16983_18886 = state_16961__$1;
(statearr_16983_18886[(1)] = (19));

} else {
var statearr_16984_18887 = state_16961__$1;
(statearr_16984_18887[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16962 === (25))){
var inst_16950 = (state_16961[(2)]);
var state_16961__$1 = state_16961;
var statearr_16985_18888 = state_16961__$1;
(statearr_16985_18888[(2)] = inst_16950);

(statearr_16985_18888[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16962 === (17))){
var inst_16913 = (state_16961[(10)]);
var inst_16922 = cljs.core.first(inst_16913);
var inst_16923 = cljs.core.async.muxch_STAR_(inst_16922);
var inst_16924 = cljs.core.async.close_BANG_(inst_16923);
var inst_16925 = cljs.core.next(inst_16913);
var inst_16896 = inst_16925;
var inst_16897 = null;
var inst_16898 = (0);
var inst_16899 = (0);
var state_16961__$1 = (function (){var statearr_16986 = state_16961;
(statearr_16986[(12)] = inst_16924);

(statearr_16986[(13)] = inst_16896);

(statearr_16986[(14)] = inst_16897);

(statearr_16986[(15)] = inst_16898);

(statearr_16986[(16)] = inst_16899);

return statearr_16986;
})();
var statearr_16987_18892 = state_16961__$1;
(statearr_16987_18892[(2)] = null);

(statearr_16987_18892[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16962 === (3))){
var inst_16959 = (state_16961[(2)]);
var state_16961__$1 = state_16961;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16961__$1,inst_16959);
} else {
if((state_val_16962 === (12))){
var inst_16933 = (state_16961[(2)]);
var state_16961__$1 = state_16961;
var statearr_16988_18893 = state_16961__$1;
(statearr_16988_18893[(2)] = inst_16933);

(statearr_16988_18893[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16962 === (2))){
var state_16961__$1 = state_16961;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16961__$1,(4),ch);
} else {
if((state_val_16962 === (23))){
var state_16961__$1 = state_16961;
var statearr_16989_18894 = state_16961__$1;
(statearr_16989_18894[(2)] = null);

(statearr_16989_18894[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16962 === (19))){
var inst_16940 = (state_16961[(11)]);
var inst_16885 = (state_16961[(8)]);
var inst_16942 = cljs.core.async.muxch_STAR_(inst_16940);
var state_16961__$1 = state_16961;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16961__$1,(22),inst_16942,inst_16885);
} else {
if((state_val_16962 === (11))){
var inst_16896 = (state_16961[(13)]);
var inst_16913 = (state_16961[(10)]);
var inst_16913__$1 = cljs.core.seq(inst_16896);
var state_16961__$1 = (function (){var statearr_16990 = state_16961;
(statearr_16990[(10)] = inst_16913__$1);

return statearr_16990;
})();
if(inst_16913__$1){
var statearr_16991_18900 = state_16961__$1;
(statearr_16991_18900[(1)] = (13));

} else {
var statearr_16992_18901 = state_16961__$1;
(statearr_16992_18901[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16962 === (9))){
var inst_16935 = (state_16961[(2)]);
var state_16961__$1 = state_16961;
var statearr_16993_18904 = state_16961__$1;
(statearr_16993_18904[(2)] = inst_16935);

(statearr_16993_18904[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16962 === (5))){
var inst_16893 = cljs.core.deref(mults);
var inst_16894 = cljs.core.vals(inst_16893);
var inst_16895 = cljs.core.seq(inst_16894);
var inst_16896 = inst_16895;
var inst_16897 = null;
var inst_16898 = (0);
var inst_16899 = (0);
var state_16961__$1 = (function (){var statearr_16994 = state_16961;
(statearr_16994[(13)] = inst_16896);

(statearr_16994[(14)] = inst_16897);

(statearr_16994[(15)] = inst_16898);

(statearr_16994[(16)] = inst_16899);

return statearr_16994;
})();
var statearr_16996_18908 = state_16961__$1;
(statearr_16996_18908[(2)] = null);

(statearr_16996_18908[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16962 === (14))){
var state_16961__$1 = state_16961;
var statearr_17007_18909 = state_16961__$1;
(statearr_17007_18909[(2)] = null);

(statearr_17007_18909[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16962 === (16))){
var inst_16913 = (state_16961[(10)]);
var inst_16917 = cljs.core.chunk_first(inst_16913);
var inst_16918 = cljs.core.chunk_rest(inst_16913);
var inst_16919 = cljs.core.count(inst_16917);
var inst_16896 = inst_16918;
var inst_16897 = inst_16917;
var inst_16898 = inst_16919;
var inst_16899 = (0);
var state_16961__$1 = (function (){var statearr_17014 = state_16961;
(statearr_17014[(13)] = inst_16896);

(statearr_17014[(14)] = inst_16897);

(statearr_17014[(15)] = inst_16898);

(statearr_17014[(16)] = inst_16899);

return statearr_17014;
})();
var statearr_17015_18910 = state_16961__$1;
(statearr_17015_18910[(2)] = null);

(statearr_17015_18910[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16962 === (10))){
var inst_16897 = (state_16961[(14)]);
var inst_16899 = (state_16961[(16)]);
var inst_16896 = (state_16961[(13)]);
var inst_16898 = (state_16961[(15)]);
var inst_16904 = cljs.core._nth(inst_16897,inst_16899);
var inst_16908 = cljs.core.async.muxch_STAR_(inst_16904);
var inst_16909 = cljs.core.async.close_BANG_(inst_16908);
var inst_16910 = (inst_16899 + (1));
var tmp17004 = inst_16898;
var tmp17005 = inst_16897;
var tmp17006 = inst_16896;
var inst_16896__$1 = tmp17006;
var inst_16897__$1 = tmp17005;
var inst_16898__$1 = tmp17004;
var inst_16899__$1 = inst_16910;
var state_16961__$1 = (function (){var statearr_17016 = state_16961;
(statearr_17016[(17)] = inst_16909);

(statearr_17016[(13)] = inst_16896__$1);

(statearr_17016[(14)] = inst_16897__$1);

(statearr_17016[(15)] = inst_16898__$1);

(statearr_17016[(16)] = inst_16899__$1);

return statearr_17016;
})();
var statearr_17017_18913 = state_16961__$1;
(statearr_17017_18913[(2)] = null);

(statearr_17017_18913[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16962 === (18))){
var inst_16928 = (state_16961[(2)]);
var state_16961__$1 = state_16961;
var statearr_17018_18914 = state_16961__$1;
(statearr_17018_18914[(2)] = inst_16928);

(statearr_17018_18914[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16962 === (8))){
var inst_16899 = (state_16961[(16)]);
var inst_16898 = (state_16961[(15)]);
var inst_16901 = (inst_16899 < inst_16898);
var inst_16902 = inst_16901;
var state_16961__$1 = state_16961;
if(cljs.core.truth_(inst_16902)){
var statearr_17019_18916 = state_16961__$1;
(statearr_17019_18916[(1)] = (10));

} else {
var statearr_17020_18917 = state_16961__$1;
(statearr_17020_18917[(1)] = (11));

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
var cljs$core$async$state_machine__13958__auto__ = null;
var cljs$core$async$state_machine__13958__auto____0 = (function (){
var statearr_17021 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17021[(0)] = cljs$core$async$state_machine__13958__auto__);

(statearr_17021[(1)] = (1));

return statearr_17021;
});
var cljs$core$async$state_machine__13958__auto____1 = (function (state_16961){
while(true){
var ret_value__13959__auto__ = (function (){try{while(true){
var result__13960__auto__ = switch__13956__auto__(state_16961);
if(cljs.core.keyword_identical_QMARK_(result__13960__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13960__auto__;
}
break;
}
}catch (e17023){var ex__13961__auto__ = e17023;
var statearr_17024_18924 = state_16961;
(statearr_17024_18924[(2)] = ex__13961__auto__);


if(cljs.core.seq((state_16961[(4)]))){
var statearr_17025_18925 = state_16961;
(statearr_17025_18925[(1)] = cljs.core.first((state_16961[(4)])));

} else {
throw ex__13961__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18926 = state_16961;
state_16961 = G__18926;
continue;
} else {
return ret_value__13959__auto__;
}
break;
}
});
cljs$core$async$state_machine__13958__auto__ = function(state_16961){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13958__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13958__auto____1.call(this,state_16961);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13958__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13958__auto____0;
cljs$core$async$state_machine__13958__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13958__auto____1;
return cljs$core$async$state_machine__13958__auto__;
})()
})();
var state__14862__auto__ = (function (){var statearr_17028 = f__14861__auto__();
(statearr_17028[(6)] = c__14860__auto___18863);

return statearr_17028;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14862__auto__);
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
var G__17032 = arguments.length;
switch (G__17032) {
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
var G__17040 = arguments.length;
switch (G__17040) {
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
var G__17043 = arguments.length;
switch (G__17043) {
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
var c__14860__auto___18946 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14861__auto__ = (function (){var switch__13956__auto__ = (function (state_17099){
var state_val_17100 = (state_17099[(1)]);
if((state_val_17100 === (7))){
var state_17099__$1 = state_17099;
var statearr_17104_18951 = state_17099__$1;
(statearr_17104_18951[(2)] = null);

(statearr_17104_18951[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17100 === (1))){
var state_17099__$1 = state_17099;
var statearr_17105_18954 = state_17099__$1;
(statearr_17105_18954[(2)] = null);

(statearr_17105_18954[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17100 === (4))){
var inst_17055 = (state_17099[(7)]);
var inst_17054 = (state_17099[(8)]);
var inst_17057 = (inst_17055 < inst_17054);
var state_17099__$1 = state_17099;
if(cljs.core.truth_(inst_17057)){
var statearr_17108_18955 = state_17099__$1;
(statearr_17108_18955[(1)] = (6));

} else {
var statearr_17109_18957 = state_17099__$1;
(statearr_17109_18957[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17100 === (15))){
var inst_17084 = (state_17099[(9)]);
var inst_17090 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_17084);
var state_17099__$1 = state_17099;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17099__$1,(17),out,inst_17090);
} else {
if((state_val_17100 === (13))){
var inst_17084 = (state_17099[(9)]);
var inst_17084__$1 = (state_17099[(2)]);
var inst_17085 = cljs.core.some(cljs.core.nil_QMARK_,inst_17084__$1);
var state_17099__$1 = (function (){var statearr_17110 = state_17099;
(statearr_17110[(9)] = inst_17084__$1);

return statearr_17110;
})();
if(cljs.core.truth_(inst_17085)){
var statearr_17111_18965 = state_17099__$1;
(statearr_17111_18965[(1)] = (14));

} else {
var statearr_17112_18966 = state_17099__$1;
(statearr_17112_18966[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17100 === (6))){
var state_17099__$1 = state_17099;
var statearr_17113_18969 = state_17099__$1;
(statearr_17113_18969[(2)] = null);

(statearr_17113_18969[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17100 === (17))){
var inst_17092 = (state_17099[(2)]);
var state_17099__$1 = (function (){var statearr_17123 = state_17099;
(statearr_17123[(10)] = inst_17092);

return statearr_17123;
})();
var statearr_17124_18971 = state_17099__$1;
(statearr_17124_18971[(2)] = null);

(statearr_17124_18971[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17100 === (3))){
var inst_17097 = (state_17099[(2)]);
var state_17099__$1 = state_17099;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17099__$1,inst_17097);
} else {
if((state_val_17100 === (12))){
var _ = (function (){var statearr_17129 = state_17099;
(statearr_17129[(4)] = cljs.core.rest((state_17099[(4)])));

return statearr_17129;
})();
var state_17099__$1 = state_17099;
var ex17114 = (state_17099__$1[(2)]);
var statearr_17130_18972 = state_17099__$1;
(statearr_17130_18972[(5)] = ex17114);


if((ex17114 instanceof Object)){
var statearr_17133_18973 = state_17099__$1;
(statearr_17133_18973[(1)] = (11));

(statearr_17133_18973[(5)] = null);

} else {
throw ex17114;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17100 === (2))){
var inst_17053 = cljs.core.reset_BANG_(dctr,cnt);
var inst_17054 = cnt;
var inst_17055 = (0);
var state_17099__$1 = (function (){var statearr_17137 = state_17099;
(statearr_17137[(11)] = inst_17053);

(statearr_17137[(8)] = inst_17054);

(statearr_17137[(7)] = inst_17055);

return statearr_17137;
})();
var statearr_17138_18974 = state_17099__$1;
(statearr_17138_18974[(2)] = null);

(statearr_17138_18974[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17100 === (11))){
var inst_17062 = (state_17099[(2)]);
var inst_17063 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_17099__$1 = (function (){var statearr_17140 = state_17099;
(statearr_17140[(12)] = inst_17062);

return statearr_17140;
})();
var statearr_17141_18975 = state_17099__$1;
(statearr_17141_18975[(2)] = inst_17063);

(statearr_17141_18975[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17100 === (9))){
var inst_17055 = (state_17099[(7)]);
var _ = (function (){var statearr_17142 = state_17099;
(statearr_17142[(4)] = cljs.core.cons((12),(state_17099[(4)])));

return statearr_17142;
})();
var inst_17070 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_17055) : chs__$1.call(null,inst_17055));
var inst_17071 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_17055) : done.call(null,inst_17055));
var inst_17072 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_17070,inst_17071);
var ___$1 = (function (){var statearr_17146 = state_17099;
(statearr_17146[(4)] = cljs.core.rest((state_17099[(4)])));

return statearr_17146;
})();
var state_17099__$1 = state_17099;
var statearr_17150_18980 = state_17099__$1;
(statearr_17150_18980[(2)] = inst_17072);

(statearr_17150_18980[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17100 === (5))){
var inst_17082 = (state_17099[(2)]);
var state_17099__$1 = (function (){var statearr_17153 = state_17099;
(statearr_17153[(13)] = inst_17082);

return statearr_17153;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17099__$1,(13),dchan);
} else {
if((state_val_17100 === (14))){
var inst_17088 = cljs.core.async.close_BANG_(out);
var state_17099__$1 = state_17099;
var statearr_17158_18984 = state_17099__$1;
(statearr_17158_18984[(2)] = inst_17088);

(statearr_17158_18984[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17100 === (16))){
var inst_17095 = (state_17099[(2)]);
var state_17099__$1 = state_17099;
var statearr_17159_18985 = state_17099__$1;
(statearr_17159_18985[(2)] = inst_17095);

(statearr_17159_18985[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17100 === (10))){
var inst_17055 = (state_17099[(7)]);
var inst_17075 = (state_17099[(2)]);
var inst_17076 = (inst_17055 + (1));
var inst_17055__$1 = inst_17076;
var state_17099__$1 = (function (){var statearr_17162 = state_17099;
(statearr_17162[(14)] = inst_17075);

(statearr_17162[(7)] = inst_17055__$1);

return statearr_17162;
})();
var statearr_17163_18989 = state_17099__$1;
(statearr_17163_18989[(2)] = null);

(statearr_17163_18989[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17100 === (8))){
var inst_17080 = (state_17099[(2)]);
var state_17099__$1 = state_17099;
var statearr_17164_18991 = state_17099__$1;
(statearr_17164_18991[(2)] = inst_17080);

(statearr_17164_18991[(1)] = (5));


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
var cljs$core$async$state_machine__13958__auto__ = null;
var cljs$core$async$state_machine__13958__auto____0 = (function (){
var statearr_17168 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17168[(0)] = cljs$core$async$state_machine__13958__auto__);

(statearr_17168[(1)] = (1));

return statearr_17168;
});
var cljs$core$async$state_machine__13958__auto____1 = (function (state_17099){
while(true){
var ret_value__13959__auto__ = (function (){try{while(true){
var result__13960__auto__ = switch__13956__auto__(state_17099);
if(cljs.core.keyword_identical_QMARK_(result__13960__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13960__auto__;
}
break;
}
}catch (e17174){var ex__13961__auto__ = e17174;
var statearr_17175_19000 = state_17099;
(statearr_17175_19000[(2)] = ex__13961__auto__);


if(cljs.core.seq((state_17099[(4)]))){
var statearr_17176_19001 = state_17099;
(statearr_17176_19001[(1)] = cljs.core.first((state_17099[(4)])));

} else {
throw ex__13961__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19003 = state_17099;
state_17099 = G__19003;
continue;
} else {
return ret_value__13959__auto__;
}
break;
}
});
cljs$core$async$state_machine__13958__auto__ = function(state_17099){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13958__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13958__auto____1.call(this,state_17099);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13958__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13958__auto____0;
cljs$core$async$state_machine__13958__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13958__auto____1;
return cljs$core$async$state_machine__13958__auto__;
})()
})();
var state__14862__auto__ = (function (){var statearr_17178 = f__14861__auto__();
(statearr_17178[(6)] = c__14860__auto___18946);

return statearr_17178;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14862__auto__);
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
var G__17181 = arguments.length;
switch (G__17181) {
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
var c__14860__auto___19015 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14861__auto__ = (function (){var switch__13956__auto__ = (function (state_17248){
var state_val_17249 = (state_17248[(1)]);
if((state_val_17249 === (7))){
var inst_17216 = (state_17248[(7)]);
var inst_17220 = (state_17248[(8)]);
var inst_17216__$1 = (state_17248[(2)]);
var inst_17220__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17216__$1,(0),null);
var inst_17221 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17216__$1,(1),null);
var inst_17222 = (inst_17220__$1 == null);
var state_17248__$1 = (function (){var statearr_17252 = state_17248;
(statearr_17252[(7)] = inst_17216__$1);

(statearr_17252[(8)] = inst_17220__$1);

(statearr_17252[(9)] = inst_17221);

return statearr_17252;
})();
if(cljs.core.truth_(inst_17222)){
var statearr_17255_19025 = state_17248__$1;
(statearr_17255_19025[(1)] = (8));

} else {
var statearr_17257_19026 = state_17248__$1;
(statearr_17257_19026[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17249 === (1))){
var inst_17202 = cljs.core.vec(chs);
var inst_17203 = inst_17202;
var state_17248__$1 = (function (){var statearr_17264 = state_17248;
(statearr_17264[(10)] = inst_17203);

return statearr_17264;
})();
var statearr_17265_19027 = state_17248__$1;
(statearr_17265_19027[(2)] = null);

(statearr_17265_19027[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17249 === (4))){
var inst_17203 = (state_17248[(10)]);
var state_17248__$1 = state_17248;
return cljs.core.async.ioc_alts_BANG_(state_17248__$1,(7),inst_17203);
} else {
if((state_val_17249 === (6))){
var inst_17241 = (state_17248[(2)]);
var state_17248__$1 = state_17248;
var statearr_17277_19028 = state_17248__$1;
(statearr_17277_19028[(2)] = inst_17241);

(statearr_17277_19028[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17249 === (3))){
var inst_17243 = (state_17248[(2)]);
var state_17248__$1 = state_17248;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17248__$1,inst_17243);
} else {
if((state_val_17249 === (2))){
var inst_17203 = (state_17248[(10)]);
var inst_17209 = cljs.core.count(inst_17203);
var inst_17210 = (inst_17209 > (0));
var state_17248__$1 = state_17248;
if(cljs.core.truth_(inst_17210)){
var statearr_17282_19031 = state_17248__$1;
(statearr_17282_19031[(1)] = (4));

} else {
var statearr_17283_19033 = state_17248__$1;
(statearr_17283_19033[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17249 === (11))){
var inst_17203 = (state_17248[(10)]);
var inst_17234 = (state_17248[(2)]);
var tmp17281 = inst_17203;
var inst_17203__$1 = tmp17281;
var state_17248__$1 = (function (){var statearr_17284 = state_17248;
(statearr_17284[(11)] = inst_17234);

(statearr_17284[(10)] = inst_17203__$1);

return statearr_17284;
})();
var statearr_17285_19034 = state_17248__$1;
(statearr_17285_19034[(2)] = null);

(statearr_17285_19034[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17249 === (9))){
var inst_17220 = (state_17248[(8)]);
var state_17248__$1 = state_17248;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17248__$1,(11),out,inst_17220);
} else {
if((state_val_17249 === (5))){
var inst_17239 = cljs.core.async.close_BANG_(out);
var state_17248__$1 = state_17248;
var statearr_17291_19035 = state_17248__$1;
(statearr_17291_19035[(2)] = inst_17239);

(statearr_17291_19035[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17249 === (10))){
var inst_17237 = (state_17248[(2)]);
var state_17248__$1 = state_17248;
var statearr_17299_19037 = state_17248__$1;
(statearr_17299_19037[(2)] = inst_17237);

(statearr_17299_19037[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17249 === (8))){
var inst_17203 = (state_17248[(10)]);
var inst_17216 = (state_17248[(7)]);
var inst_17220 = (state_17248[(8)]);
var inst_17221 = (state_17248[(9)]);
var inst_17226 = (function (){var cs = inst_17203;
var vec__17212 = inst_17216;
var v = inst_17220;
var c = inst_17221;
return (function (p1__17179_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__17179_SHARP_);
});
})();
var inst_17227 = cljs.core.filterv(inst_17226,inst_17203);
var inst_17203__$1 = inst_17227;
var state_17248__$1 = (function (){var statearr_17304 = state_17248;
(statearr_17304[(10)] = inst_17203__$1);

return statearr_17304;
})();
var statearr_17305_19052 = state_17248__$1;
(statearr_17305_19052[(2)] = null);

(statearr_17305_19052[(1)] = (2));


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
var cljs$core$async$state_machine__13958__auto__ = null;
var cljs$core$async$state_machine__13958__auto____0 = (function (){
var statearr_17311 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17311[(0)] = cljs$core$async$state_machine__13958__auto__);

(statearr_17311[(1)] = (1));

return statearr_17311;
});
var cljs$core$async$state_machine__13958__auto____1 = (function (state_17248){
while(true){
var ret_value__13959__auto__ = (function (){try{while(true){
var result__13960__auto__ = switch__13956__auto__(state_17248);
if(cljs.core.keyword_identical_QMARK_(result__13960__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13960__auto__;
}
break;
}
}catch (e17312){var ex__13961__auto__ = e17312;
var statearr_17313_19063 = state_17248;
(statearr_17313_19063[(2)] = ex__13961__auto__);


if(cljs.core.seq((state_17248[(4)]))){
var statearr_17317_19068 = state_17248;
(statearr_17317_19068[(1)] = cljs.core.first((state_17248[(4)])));

} else {
throw ex__13961__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19074 = state_17248;
state_17248 = G__19074;
continue;
} else {
return ret_value__13959__auto__;
}
break;
}
});
cljs$core$async$state_machine__13958__auto__ = function(state_17248){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13958__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13958__auto____1.call(this,state_17248);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13958__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13958__auto____0;
cljs$core$async$state_machine__13958__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13958__auto____1;
return cljs$core$async$state_machine__13958__auto__;
})()
})();
var state__14862__auto__ = (function (){var statearr_17320 = f__14861__auto__();
(statearr_17320[(6)] = c__14860__auto___19015);

return statearr_17320;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14862__auto__);
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
var G__17325 = arguments.length;
switch (G__17325) {
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
var c__14860__auto___19097 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14861__auto__ = (function (){var switch__13956__auto__ = (function (state_17353){
var state_val_17356 = (state_17353[(1)]);
if((state_val_17356 === (7))){
var inst_17335 = (state_17353[(7)]);
var inst_17335__$1 = (state_17353[(2)]);
var inst_17336 = (inst_17335__$1 == null);
var inst_17337 = cljs.core.not(inst_17336);
var state_17353__$1 = (function (){var statearr_17357 = state_17353;
(statearr_17357[(7)] = inst_17335__$1);

return statearr_17357;
})();
if(inst_17337){
var statearr_17358_19112 = state_17353__$1;
(statearr_17358_19112[(1)] = (8));

} else {
var statearr_17359_19113 = state_17353__$1;
(statearr_17359_19113[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17356 === (1))){
var inst_17330 = (0);
var state_17353__$1 = (function (){var statearr_17360 = state_17353;
(statearr_17360[(8)] = inst_17330);

return statearr_17360;
})();
var statearr_17361_19114 = state_17353__$1;
(statearr_17361_19114[(2)] = null);

(statearr_17361_19114[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17356 === (4))){
var state_17353__$1 = state_17353;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17353__$1,(7),ch);
} else {
if((state_val_17356 === (6))){
var inst_17348 = (state_17353[(2)]);
var state_17353__$1 = state_17353;
var statearr_17362_19116 = state_17353__$1;
(statearr_17362_19116[(2)] = inst_17348);

(statearr_17362_19116[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17356 === (3))){
var inst_17350 = (state_17353[(2)]);
var inst_17351 = cljs.core.async.close_BANG_(out);
var state_17353__$1 = (function (){var statearr_17363 = state_17353;
(statearr_17363[(9)] = inst_17350);

return statearr_17363;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17353__$1,inst_17351);
} else {
if((state_val_17356 === (2))){
var inst_17330 = (state_17353[(8)]);
var inst_17332 = (inst_17330 < n);
var state_17353__$1 = state_17353;
if(cljs.core.truth_(inst_17332)){
var statearr_17364_19121 = state_17353__$1;
(statearr_17364_19121[(1)] = (4));

} else {
var statearr_17365_19122 = state_17353__$1;
(statearr_17365_19122[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17356 === (11))){
var inst_17330 = (state_17353[(8)]);
var inst_17340 = (state_17353[(2)]);
var inst_17341 = (inst_17330 + (1));
var inst_17330__$1 = inst_17341;
var state_17353__$1 = (function (){var statearr_17366 = state_17353;
(statearr_17366[(10)] = inst_17340);

(statearr_17366[(8)] = inst_17330__$1);

return statearr_17366;
})();
var statearr_17367_19126 = state_17353__$1;
(statearr_17367_19126[(2)] = null);

(statearr_17367_19126[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17356 === (9))){
var state_17353__$1 = state_17353;
var statearr_17368_19128 = state_17353__$1;
(statearr_17368_19128[(2)] = null);

(statearr_17368_19128[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17356 === (5))){
var state_17353__$1 = state_17353;
var statearr_17369_19132 = state_17353__$1;
(statearr_17369_19132[(2)] = null);

(statearr_17369_19132[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17356 === (10))){
var inst_17345 = (state_17353[(2)]);
var state_17353__$1 = state_17353;
var statearr_17370_19133 = state_17353__$1;
(statearr_17370_19133[(2)] = inst_17345);

(statearr_17370_19133[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17356 === (8))){
var inst_17335 = (state_17353[(7)]);
var state_17353__$1 = state_17353;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17353__$1,(11),out,inst_17335);
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
var cljs$core$async$state_machine__13958__auto__ = null;
var cljs$core$async$state_machine__13958__auto____0 = (function (){
var statearr_17383 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17383[(0)] = cljs$core$async$state_machine__13958__auto__);

(statearr_17383[(1)] = (1));

return statearr_17383;
});
var cljs$core$async$state_machine__13958__auto____1 = (function (state_17353){
while(true){
var ret_value__13959__auto__ = (function (){try{while(true){
var result__13960__auto__ = switch__13956__auto__(state_17353);
if(cljs.core.keyword_identical_QMARK_(result__13960__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13960__auto__;
}
break;
}
}catch (e17384){var ex__13961__auto__ = e17384;
var statearr_17385_19134 = state_17353;
(statearr_17385_19134[(2)] = ex__13961__auto__);


if(cljs.core.seq((state_17353[(4)]))){
var statearr_17386_19135 = state_17353;
(statearr_17386_19135[(1)] = cljs.core.first((state_17353[(4)])));

} else {
throw ex__13961__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19136 = state_17353;
state_17353 = G__19136;
continue;
} else {
return ret_value__13959__auto__;
}
break;
}
});
cljs$core$async$state_machine__13958__auto__ = function(state_17353){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13958__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13958__auto____1.call(this,state_17353);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13958__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13958__auto____0;
cljs$core$async$state_machine__13958__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13958__auto____1;
return cljs$core$async$state_machine__13958__auto__;
})()
})();
var state__14862__auto__ = (function (){var statearr_17387 = f__14861__auto__();
(statearr_17387[(6)] = c__14860__auto___19097);

return statearr_17387;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14862__auto__);
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
cljs.core.async.t_cljs$core$async17398 = (function (f,ch,meta17396,_,fn1,meta17399){
this.f = f;
this.ch = ch;
this.meta17396 = meta17396;
this._ = _;
this.fn1 = fn1;
this.meta17399 = meta17399;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17398.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17400,meta17399__$1){
var self__ = this;
var _17400__$1 = this;
return (new cljs.core.async.t_cljs$core$async17398(self__.f,self__.ch,self__.meta17396,self__._,self__.fn1,meta17399__$1));
}));

(cljs.core.async.t_cljs$core$async17398.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17400){
var self__ = this;
var _17400__$1 = this;
return self__.meta17399;
}));

(cljs.core.async.t_cljs$core$async17398.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17398.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async17398.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async17398.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__17392_SHARP_){
var G__17412 = (((p1__17392_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__17392_SHARP_) : self__.f.call(null,p1__17392_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__17412) : f1.call(null,G__17412));
});
}));

(cljs.core.async.t_cljs$core$async17398.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17396","meta17396",-144765119,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async17395","cljs.core.async/t_cljs$core$async17395",800158257,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta17399","meta17399",1102856562,null)], null);
}));

(cljs.core.async.t_cljs$core$async17398.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17398.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17398");

(cljs.core.async.t_cljs$core$async17398.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async17398");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17398.
 */
cljs.core.async.__GT_t_cljs$core$async17398 = (function cljs$core$async$__GT_t_cljs$core$async17398(f,ch,meta17396,_,fn1,meta17399){
return (new cljs.core.async.t_cljs$core$async17398(f,ch,meta17396,_,fn1,meta17399));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17395 = (function (f,ch,meta17396){
this.f = f;
this.ch = ch;
this.meta17396 = meta17396;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17395.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17397,meta17396__$1){
var self__ = this;
var _17397__$1 = this;
return (new cljs.core.async.t_cljs$core$async17395(self__.f,self__.ch,meta17396__$1));
}));

(cljs.core.async.t_cljs$core$async17395.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17397){
var self__ = this;
var _17397__$1 = this;
return self__.meta17396;
}));

(cljs.core.async.t_cljs$core$async17395.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17395.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17395.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17395.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17395.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async17398(self__.f,self__.ch,self__.meta17396,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5140__auto__ = ret;
if(cljs.core.truth_(and__5140__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5140__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__17427 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__17427) : self__.f.call(null,G__17427));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async17395.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17395.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async17395.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17396","meta17396",-144765119,null)], null);
}));

(cljs.core.async.t_cljs$core$async17395.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17395.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17395");

(cljs.core.async.t_cljs$core$async17395.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async17395");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17395.
 */
cljs.core.async.__GT_t_cljs$core$async17395 = (function cljs$core$async$__GT_t_cljs$core$async17395(f,ch,meta17396){
return (new cljs.core.async.t_cljs$core$async17395(f,ch,meta17396));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async17395(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17444 = (function (f,ch,meta17445){
this.f = f;
this.ch = ch;
this.meta17445 = meta17445;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17444.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17446,meta17445__$1){
var self__ = this;
var _17446__$1 = this;
return (new cljs.core.async.t_cljs$core$async17444(self__.f,self__.ch,meta17445__$1));
}));

(cljs.core.async.t_cljs$core$async17444.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17446){
var self__ = this;
var _17446__$1 = this;
return self__.meta17445;
}));

(cljs.core.async.t_cljs$core$async17444.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17444.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17444.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17444.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async17444.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17444.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async17444.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17445","meta17445",1156305348,null)], null);
}));

(cljs.core.async.t_cljs$core$async17444.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17444.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17444");

(cljs.core.async.t_cljs$core$async17444.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async17444");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17444.
 */
cljs.core.async.__GT_t_cljs$core$async17444 = (function cljs$core$async$__GT_t_cljs$core$async17444(f,ch,meta17445){
return (new cljs.core.async.t_cljs$core$async17444(f,ch,meta17445));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async17444(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17453 = (function (p,ch,meta17454){
this.p = p;
this.ch = ch;
this.meta17454 = meta17454;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17453.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17455,meta17454__$1){
var self__ = this;
var _17455__$1 = this;
return (new cljs.core.async.t_cljs$core$async17453(self__.p,self__.ch,meta17454__$1));
}));

(cljs.core.async.t_cljs$core$async17453.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17455){
var self__ = this;
var _17455__$1 = this;
return self__.meta17454;
}));

(cljs.core.async.t_cljs$core$async17453.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17453.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17453.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17453.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17453.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async17453.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17453.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async17453.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17454","meta17454",1288682459,null)], null);
}));

(cljs.core.async.t_cljs$core$async17453.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17453.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17453");

(cljs.core.async.t_cljs$core$async17453.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async17453");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17453.
 */
cljs.core.async.__GT_t_cljs$core$async17453 = (function cljs$core$async$__GT_t_cljs$core$async17453(p,ch,meta17454){
return (new cljs.core.async.t_cljs$core$async17453(p,ch,meta17454));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async17453(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__17473 = arguments.length;
switch (G__17473) {
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
var c__14860__auto___19231 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14861__auto__ = (function (){var switch__13956__auto__ = (function (state_17496){
var state_val_17497 = (state_17496[(1)]);
if((state_val_17497 === (7))){
var inst_17491 = (state_17496[(2)]);
var state_17496__$1 = state_17496;
var statearr_17500_19233 = state_17496__$1;
(statearr_17500_19233[(2)] = inst_17491);

(statearr_17500_19233[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17497 === (1))){
var state_17496__$1 = state_17496;
var statearr_17502_19234 = state_17496__$1;
(statearr_17502_19234[(2)] = null);

(statearr_17502_19234[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17497 === (4))){
var inst_17477 = (state_17496[(7)]);
var inst_17477__$1 = (state_17496[(2)]);
var inst_17478 = (inst_17477__$1 == null);
var state_17496__$1 = (function (){var statearr_17504 = state_17496;
(statearr_17504[(7)] = inst_17477__$1);

return statearr_17504;
})();
if(cljs.core.truth_(inst_17478)){
var statearr_17505_19243 = state_17496__$1;
(statearr_17505_19243[(1)] = (5));

} else {
var statearr_17509_19245 = state_17496__$1;
(statearr_17509_19245[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17497 === (6))){
var inst_17477 = (state_17496[(7)]);
var inst_17482 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_17477) : p.call(null,inst_17477));
var state_17496__$1 = state_17496;
if(cljs.core.truth_(inst_17482)){
var statearr_17510_19250 = state_17496__$1;
(statearr_17510_19250[(1)] = (8));

} else {
var statearr_17511_19253 = state_17496__$1;
(statearr_17511_19253[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17497 === (3))){
var inst_17493 = (state_17496[(2)]);
var state_17496__$1 = state_17496;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17496__$1,inst_17493);
} else {
if((state_val_17497 === (2))){
var state_17496__$1 = state_17496;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17496__$1,(4),ch);
} else {
if((state_val_17497 === (11))){
var inst_17485 = (state_17496[(2)]);
var state_17496__$1 = state_17496;
var statearr_17512_19257 = state_17496__$1;
(statearr_17512_19257[(2)] = inst_17485);

(statearr_17512_19257[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17497 === (9))){
var state_17496__$1 = state_17496;
var statearr_17513_19266 = state_17496__$1;
(statearr_17513_19266[(2)] = null);

(statearr_17513_19266[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17497 === (5))){
var inst_17480 = cljs.core.async.close_BANG_(out);
var state_17496__$1 = state_17496;
var statearr_17517_19268 = state_17496__$1;
(statearr_17517_19268[(2)] = inst_17480);

(statearr_17517_19268[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17497 === (10))){
var inst_17488 = (state_17496[(2)]);
var state_17496__$1 = (function (){var statearr_17518 = state_17496;
(statearr_17518[(8)] = inst_17488);

return statearr_17518;
})();
var statearr_17519_19269 = state_17496__$1;
(statearr_17519_19269[(2)] = null);

(statearr_17519_19269[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17497 === (8))){
var inst_17477 = (state_17496[(7)]);
var state_17496__$1 = state_17496;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17496__$1,(11),out,inst_17477);
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
var cljs$core$async$state_machine__13958__auto__ = null;
var cljs$core$async$state_machine__13958__auto____0 = (function (){
var statearr_17521 = [null,null,null,null,null,null,null,null,null];
(statearr_17521[(0)] = cljs$core$async$state_machine__13958__auto__);

(statearr_17521[(1)] = (1));

return statearr_17521;
});
var cljs$core$async$state_machine__13958__auto____1 = (function (state_17496){
while(true){
var ret_value__13959__auto__ = (function (){try{while(true){
var result__13960__auto__ = switch__13956__auto__(state_17496);
if(cljs.core.keyword_identical_QMARK_(result__13960__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13960__auto__;
}
break;
}
}catch (e17525){var ex__13961__auto__ = e17525;
var statearr_17526_19273 = state_17496;
(statearr_17526_19273[(2)] = ex__13961__auto__);


if(cljs.core.seq((state_17496[(4)]))){
var statearr_17536_19279 = state_17496;
(statearr_17536_19279[(1)] = cljs.core.first((state_17496[(4)])));

} else {
throw ex__13961__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19280 = state_17496;
state_17496 = G__19280;
continue;
} else {
return ret_value__13959__auto__;
}
break;
}
});
cljs$core$async$state_machine__13958__auto__ = function(state_17496){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13958__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13958__auto____1.call(this,state_17496);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13958__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13958__auto____0;
cljs$core$async$state_machine__13958__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13958__auto____1;
return cljs$core$async$state_machine__13958__auto__;
})()
})();
var state__14862__auto__ = (function (){var statearr_17539 = f__14861__auto__();
(statearr_17539[(6)] = c__14860__auto___19231);

return statearr_17539;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14862__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__17549 = arguments.length;
switch (G__17549) {
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
var c__14860__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14861__auto__ = (function (){var switch__13956__auto__ = (function (state_17615){
var state_val_17616 = (state_17615[(1)]);
if((state_val_17616 === (7))){
var inst_17611 = (state_17615[(2)]);
var state_17615__$1 = state_17615;
var statearr_17617_19293 = state_17615__$1;
(statearr_17617_19293[(2)] = inst_17611);

(statearr_17617_19293[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17616 === (20))){
var inst_17581 = (state_17615[(7)]);
var inst_17592 = (state_17615[(2)]);
var inst_17593 = cljs.core.next(inst_17581);
var inst_17565 = inst_17593;
var inst_17566 = null;
var inst_17567 = (0);
var inst_17568 = (0);
var state_17615__$1 = (function (){var statearr_17618 = state_17615;
(statearr_17618[(8)] = inst_17592);

(statearr_17618[(9)] = inst_17565);

(statearr_17618[(10)] = inst_17566);

(statearr_17618[(11)] = inst_17567);

(statearr_17618[(12)] = inst_17568);

return statearr_17618;
})();
var statearr_17619_19295 = state_17615__$1;
(statearr_17619_19295[(2)] = null);

(statearr_17619_19295[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17616 === (1))){
var state_17615__$1 = state_17615;
var statearr_17634_19297 = state_17615__$1;
(statearr_17634_19297[(2)] = null);

(statearr_17634_19297[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17616 === (4))){
var inst_17553 = (state_17615[(13)]);
var inst_17553__$1 = (state_17615[(2)]);
var inst_17554 = (inst_17553__$1 == null);
var state_17615__$1 = (function (){var statearr_17639 = state_17615;
(statearr_17639[(13)] = inst_17553__$1);

return statearr_17639;
})();
if(cljs.core.truth_(inst_17554)){
var statearr_17640_19298 = state_17615__$1;
(statearr_17640_19298[(1)] = (5));

} else {
var statearr_17641_19299 = state_17615__$1;
(statearr_17641_19299[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17616 === (15))){
var state_17615__$1 = state_17615;
var statearr_17645_19300 = state_17615__$1;
(statearr_17645_19300[(2)] = null);

(statearr_17645_19300[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17616 === (21))){
var state_17615__$1 = state_17615;
var statearr_17646_19301 = state_17615__$1;
(statearr_17646_19301[(2)] = null);

(statearr_17646_19301[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17616 === (13))){
var inst_17568 = (state_17615[(12)]);
var inst_17565 = (state_17615[(9)]);
var inst_17566 = (state_17615[(10)]);
var inst_17567 = (state_17615[(11)]);
var inst_17575 = (state_17615[(2)]);
var inst_17576 = (inst_17568 + (1));
var tmp17642 = inst_17565;
var tmp17643 = inst_17567;
var tmp17644 = inst_17566;
var inst_17565__$1 = tmp17642;
var inst_17566__$1 = tmp17644;
var inst_17567__$1 = tmp17643;
var inst_17568__$1 = inst_17576;
var state_17615__$1 = (function (){var statearr_17649 = state_17615;
(statearr_17649[(14)] = inst_17575);

(statearr_17649[(9)] = inst_17565__$1);

(statearr_17649[(10)] = inst_17566__$1);

(statearr_17649[(11)] = inst_17567__$1);

(statearr_17649[(12)] = inst_17568__$1);

return statearr_17649;
})();
var statearr_17650_19306 = state_17615__$1;
(statearr_17650_19306[(2)] = null);

(statearr_17650_19306[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17616 === (22))){
var state_17615__$1 = state_17615;
var statearr_17651_19307 = state_17615__$1;
(statearr_17651_19307[(2)] = null);

(statearr_17651_19307[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17616 === (6))){
var inst_17553 = (state_17615[(13)]);
var inst_17563 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_17553) : f.call(null,inst_17553));
var inst_17564 = cljs.core.seq(inst_17563);
var inst_17565 = inst_17564;
var inst_17566 = null;
var inst_17567 = (0);
var inst_17568 = (0);
var state_17615__$1 = (function (){var statearr_17652 = state_17615;
(statearr_17652[(9)] = inst_17565);

(statearr_17652[(10)] = inst_17566);

(statearr_17652[(11)] = inst_17567);

(statearr_17652[(12)] = inst_17568);

return statearr_17652;
})();
var statearr_17653_19309 = state_17615__$1;
(statearr_17653_19309[(2)] = null);

(statearr_17653_19309[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17616 === (17))){
var inst_17581 = (state_17615[(7)]);
var inst_17585 = cljs.core.chunk_first(inst_17581);
var inst_17586 = cljs.core.chunk_rest(inst_17581);
var inst_17587 = cljs.core.count(inst_17585);
var inst_17565 = inst_17586;
var inst_17566 = inst_17585;
var inst_17567 = inst_17587;
var inst_17568 = (0);
var state_17615__$1 = (function (){var statearr_17654 = state_17615;
(statearr_17654[(9)] = inst_17565);

(statearr_17654[(10)] = inst_17566);

(statearr_17654[(11)] = inst_17567);

(statearr_17654[(12)] = inst_17568);

return statearr_17654;
})();
var statearr_17655_19312 = state_17615__$1;
(statearr_17655_19312[(2)] = null);

(statearr_17655_19312[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17616 === (3))){
var inst_17613 = (state_17615[(2)]);
var state_17615__$1 = state_17615;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17615__$1,inst_17613);
} else {
if((state_val_17616 === (12))){
var inst_17601 = (state_17615[(2)]);
var state_17615__$1 = state_17615;
var statearr_17657_19314 = state_17615__$1;
(statearr_17657_19314[(2)] = inst_17601);

(statearr_17657_19314[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17616 === (2))){
var state_17615__$1 = state_17615;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17615__$1,(4),in$);
} else {
if((state_val_17616 === (23))){
var inst_17609 = (state_17615[(2)]);
var state_17615__$1 = state_17615;
var statearr_17661_19320 = state_17615__$1;
(statearr_17661_19320[(2)] = inst_17609);

(statearr_17661_19320[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17616 === (19))){
var inst_17596 = (state_17615[(2)]);
var state_17615__$1 = state_17615;
var statearr_17663_19321 = state_17615__$1;
(statearr_17663_19321[(2)] = inst_17596);

(statearr_17663_19321[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17616 === (11))){
var inst_17565 = (state_17615[(9)]);
var inst_17581 = (state_17615[(7)]);
var inst_17581__$1 = cljs.core.seq(inst_17565);
var state_17615__$1 = (function (){var statearr_17667 = state_17615;
(statearr_17667[(7)] = inst_17581__$1);

return statearr_17667;
})();
if(inst_17581__$1){
var statearr_17668_19323 = state_17615__$1;
(statearr_17668_19323[(1)] = (14));

} else {
var statearr_17669_19324 = state_17615__$1;
(statearr_17669_19324[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17616 === (9))){
var inst_17603 = (state_17615[(2)]);
var inst_17604 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_17615__$1 = (function (){var statearr_17670 = state_17615;
(statearr_17670[(15)] = inst_17603);

return statearr_17670;
})();
if(cljs.core.truth_(inst_17604)){
var statearr_17671_19329 = state_17615__$1;
(statearr_17671_19329[(1)] = (21));

} else {
var statearr_17672_19330 = state_17615__$1;
(statearr_17672_19330[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17616 === (5))){
var inst_17557 = cljs.core.async.close_BANG_(out);
var state_17615__$1 = state_17615;
var statearr_17675_19335 = state_17615__$1;
(statearr_17675_19335[(2)] = inst_17557);

(statearr_17675_19335[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17616 === (14))){
var inst_17581 = (state_17615[(7)]);
var inst_17583 = cljs.core.chunked_seq_QMARK_(inst_17581);
var state_17615__$1 = state_17615;
if(inst_17583){
var statearr_17678_19337 = state_17615__$1;
(statearr_17678_19337[(1)] = (17));

} else {
var statearr_17679_19339 = state_17615__$1;
(statearr_17679_19339[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17616 === (16))){
var inst_17599 = (state_17615[(2)]);
var state_17615__$1 = state_17615;
var statearr_17681_19341 = state_17615__$1;
(statearr_17681_19341[(2)] = inst_17599);

(statearr_17681_19341[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17616 === (10))){
var inst_17566 = (state_17615[(10)]);
var inst_17568 = (state_17615[(12)]);
var inst_17573 = cljs.core._nth(inst_17566,inst_17568);
var state_17615__$1 = state_17615;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17615__$1,(13),out,inst_17573);
} else {
if((state_val_17616 === (18))){
var inst_17581 = (state_17615[(7)]);
var inst_17590 = cljs.core.first(inst_17581);
var state_17615__$1 = state_17615;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17615__$1,(20),out,inst_17590);
} else {
if((state_val_17616 === (8))){
var inst_17568 = (state_17615[(12)]);
var inst_17567 = (state_17615[(11)]);
var inst_17570 = (inst_17568 < inst_17567);
var inst_17571 = inst_17570;
var state_17615__$1 = state_17615;
if(cljs.core.truth_(inst_17571)){
var statearr_17683_19342 = state_17615__$1;
(statearr_17683_19342[(1)] = (10));

} else {
var statearr_17684_19343 = state_17615__$1;
(statearr_17684_19343[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__13958__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__13958__auto____0 = (function (){
var statearr_17687 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17687[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__13958__auto__);

(statearr_17687[(1)] = (1));

return statearr_17687;
});
var cljs$core$async$mapcat_STAR__$_state_machine__13958__auto____1 = (function (state_17615){
while(true){
var ret_value__13959__auto__ = (function (){try{while(true){
var result__13960__auto__ = switch__13956__auto__(state_17615);
if(cljs.core.keyword_identical_QMARK_(result__13960__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13960__auto__;
}
break;
}
}catch (e17688){var ex__13961__auto__ = e17688;
var statearr_17689_19347 = state_17615;
(statearr_17689_19347[(2)] = ex__13961__auto__);


if(cljs.core.seq((state_17615[(4)]))){
var statearr_17690_19348 = state_17615;
(statearr_17690_19348[(1)] = cljs.core.first((state_17615[(4)])));

} else {
throw ex__13961__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19353 = state_17615;
state_17615 = G__19353;
continue;
} else {
return ret_value__13959__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__13958__auto__ = function(state_17615){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__13958__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__13958__auto____1.call(this,state_17615);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__13958__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__13958__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__13958__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__13958__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__13958__auto__;
})()
})();
var state__14862__auto__ = (function (){var statearr_17701 = f__14861__auto__();
(statearr_17701[(6)] = c__14860__auto__);

return statearr_17701;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14862__auto__);
}));

return c__14860__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__17704 = arguments.length;
switch (G__17704) {
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
var G__17725 = arguments.length;
switch (G__17725) {
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
var G__17732 = arguments.length;
switch (G__17732) {
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
var c__14860__auto___19370 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14861__auto__ = (function (){var switch__13956__auto__ = (function (state_17774){
var state_val_17775 = (state_17774[(1)]);
if((state_val_17775 === (7))){
var inst_17767 = (state_17774[(2)]);
var state_17774__$1 = state_17774;
var statearr_17776_19372 = state_17774__$1;
(statearr_17776_19372[(2)] = inst_17767);

(statearr_17776_19372[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17775 === (1))){
var inst_17745 = null;
var state_17774__$1 = (function (){var statearr_17777 = state_17774;
(statearr_17777[(7)] = inst_17745);

return statearr_17777;
})();
var statearr_17778_19374 = state_17774__$1;
(statearr_17778_19374[(2)] = null);

(statearr_17778_19374[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17775 === (4))){
var inst_17749 = (state_17774[(8)]);
var inst_17749__$1 = (state_17774[(2)]);
var inst_17750 = (inst_17749__$1 == null);
var inst_17751 = cljs.core.not(inst_17750);
var state_17774__$1 = (function (){var statearr_17781 = state_17774;
(statearr_17781[(8)] = inst_17749__$1);

return statearr_17781;
})();
if(inst_17751){
var statearr_17782_19382 = state_17774__$1;
(statearr_17782_19382[(1)] = (5));

} else {
var statearr_17783_19383 = state_17774__$1;
(statearr_17783_19383[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17775 === (6))){
var state_17774__$1 = state_17774;
var statearr_17784_19386 = state_17774__$1;
(statearr_17784_19386[(2)] = null);

(statearr_17784_19386[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17775 === (3))){
var inst_17769 = (state_17774[(2)]);
var inst_17772 = cljs.core.async.close_BANG_(out);
var state_17774__$1 = (function (){var statearr_17800 = state_17774;
(statearr_17800[(9)] = inst_17769);

return statearr_17800;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17774__$1,inst_17772);
} else {
if((state_val_17775 === (2))){
var state_17774__$1 = state_17774;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17774__$1,(4),ch);
} else {
if((state_val_17775 === (11))){
var inst_17749 = (state_17774[(8)]);
var inst_17761 = (state_17774[(2)]);
var inst_17745 = inst_17749;
var state_17774__$1 = (function (){var statearr_17805 = state_17774;
(statearr_17805[(10)] = inst_17761);

(statearr_17805[(7)] = inst_17745);

return statearr_17805;
})();
var statearr_17806_19394 = state_17774__$1;
(statearr_17806_19394[(2)] = null);

(statearr_17806_19394[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17775 === (9))){
var inst_17749 = (state_17774[(8)]);
var state_17774__$1 = state_17774;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17774__$1,(11),out,inst_17749);
} else {
if((state_val_17775 === (5))){
var inst_17749 = (state_17774[(8)]);
var inst_17745 = (state_17774[(7)]);
var inst_17756 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17749,inst_17745);
var state_17774__$1 = state_17774;
if(inst_17756){
var statearr_17809_19400 = state_17774__$1;
(statearr_17809_19400[(1)] = (8));

} else {
var statearr_17810_19401 = state_17774__$1;
(statearr_17810_19401[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17775 === (10))){
var inst_17764 = (state_17774[(2)]);
var state_17774__$1 = state_17774;
var statearr_17811_19408 = state_17774__$1;
(statearr_17811_19408[(2)] = inst_17764);

(statearr_17811_19408[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17775 === (8))){
var inst_17745 = (state_17774[(7)]);
var tmp17808 = inst_17745;
var inst_17745__$1 = tmp17808;
var state_17774__$1 = (function (){var statearr_17812 = state_17774;
(statearr_17812[(7)] = inst_17745__$1);

return statearr_17812;
})();
var statearr_17813_19409 = state_17774__$1;
(statearr_17813_19409[(2)] = null);

(statearr_17813_19409[(1)] = (2));


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
var cljs$core$async$state_machine__13958__auto__ = null;
var cljs$core$async$state_machine__13958__auto____0 = (function (){
var statearr_17815 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17815[(0)] = cljs$core$async$state_machine__13958__auto__);

(statearr_17815[(1)] = (1));

return statearr_17815;
});
var cljs$core$async$state_machine__13958__auto____1 = (function (state_17774){
while(true){
var ret_value__13959__auto__ = (function (){try{while(true){
var result__13960__auto__ = switch__13956__auto__(state_17774);
if(cljs.core.keyword_identical_QMARK_(result__13960__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13960__auto__;
}
break;
}
}catch (e17816){var ex__13961__auto__ = e17816;
var statearr_17817_19428 = state_17774;
(statearr_17817_19428[(2)] = ex__13961__auto__);


if(cljs.core.seq((state_17774[(4)]))){
var statearr_17818_19429 = state_17774;
(statearr_17818_19429[(1)] = cljs.core.first((state_17774[(4)])));

} else {
throw ex__13961__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19431 = state_17774;
state_17774 = G__19431;
continue;
} else {
return ret_value__13959__auto__;
}
break;
}
});
cljs$core$async$state_machine__13958__auto__ = function(state_17774){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13958__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13958__auto____1.call(this,state_17774);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13958__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13958__auto____0;
cljs$core$async$state_machine__13958__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13958__auto____1;
return cljs$core$async$state_machine__13958__auto__;
})()
})();
var state__14862__auto__ = (function (){var statearr_17822 = f__14861__auto__();
(statearr_17822[(6)] = c__14860__auto___19370);

return statearr_17822;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14862__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__17825 = arguments.length;
switch (G__17825) {
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
var c__14860__auto___19443 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14861__auto__ = (function (){var switch__13956__auto__ = (function (state_17867){
var state_val_17868 = (state_17867[(1)]);
if((state_val_17868 === (7))){
var inst_17863 = (state_17867[(2)]);
var state_17867__$1 = state_17867;
var statearr_17874_19444 = state_17867__$1;
(statearr_17874_19444[(2)] = inst_17863);

(statearr_17874_19444[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17868 === (1))){
var inst_17827 = (new Array(n));
var inst_17828 = inst_17827;
var inst_17829 = (0);
var state_17867__$1 = (function (){var statearr_17878 = state_17867;
(statearr_17878[(7)] = inst_17828);

(statearr_17878[(8)] = inst_17829);

return statearr_17878;
})();
var statearr_17879_19449 = state_17867__$1;
(statearr_17879_19449[(2)] = null);

(statearr_17879_19449[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17868 === (4))){
var inst_17832 = (state_17867[(9)]);
var inst_17832__$1 = (state_17867[(2)]);
var inst_17833 = (inst_17832__$1 == null);
var inst_17834 = cljs.core.not(inst_17833);
var state_17867__$1 = (function (){var statearr_17880 = state_17867;
(statearr_17880[(9)] = inst_17832__$1);

return statearr_17880;
})();
if(inst_17834){
var statearr_17884_19450 = state_17867__$1;
(statearr_17884_19450[(1)] = (5));

} else {
var statearr_17885_19456 = state_17867__$1;
(statearr_17885_19456[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17868 === (15))){
var inst_17857 = (state_17867[(2)]);
var state_17867__$1 = state_17867;
var statearr_17887_19457 = state_17867__$1;
(statearr_17887_19457[(2)] = inst_17857);

(statearr_17887_19457[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17868 === (13))){
var state_17867__$1 = state_17867;
var statearr_17888_19459 = state_17867__$1;
(statearr_17888_19459[(2)] = null);

(statearr_17888_19459[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17868 === (6))){
var inst_17829 = (state_17867[(8)]);
var inst_17852 = (inst_17829 > (0));
var state_17867__$1 = state_17867;
if(cljs.core.truth_(inst_17852)){
var statearr_17889_19460 = state_17867__$1;
(statearr_17889_19460[(1)] = (12));

} else {
var statearr_17890_19461 = state_17867__$1;
(statearr_17890_19461[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17868 === (3))){
var inst_17865 = (state_17867[(2)]);
var state_17867__$1 = state_17867;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17867__$1,inst_17865);
} else {
if((state_val_17868 === (12))){
var inst_17828 = (state_17867[(7)]);
var inst_17855 = cljs.core.vec(inst_17828);
var state_17867__$1 = state_17867;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17867__$1,(15),out,inst_17855);
} else {
if((state_val_17868 === (2))){
var state_17867__$1 = state_17867;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17867__$1,(4),ch);
} else {
if((state_val_17868 === (11))){
var inst_17845 = (state_17867[(2)]);
var inst_17846 = (new Array(n));
var inst_17828 = inst_17846;
var inst_17829 = (0);
var state_17867__$1 = (function (){var statearr_17894 = state_17867;
(statearr_17894[(10)] = inst_17845);

(statearr_17894[(7)] = inst_17828);

(statearr_17894[(8)] = inst_17829);

return statearr_17894;
})();
var statearr_17895_19462 = state_17867__$1;
(statearr_17895_19462[(2)] = null);

(statearr_17895_19462[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17868 === (9))){
var inst_17828 = (state_17867[(7)]);
var inst_17843 = cljs.core.vec(inst_17828);
var state_17867__$1 = state_17867;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17867__$1,(11),out,inst_17843);
} else {
if((state_val_17868 === (5))){
var inst_17828 = (state_17867[(7)]);
var inst_17829 = (state_17867[(8)]);
var inst_17832 = (state_17867[(9)]);
var inst_17837 = (state_17867[(11)]);
var inst_17836 = (inst_17828[inst_17829] = inst_17832);
var inst_17837__$1 = (inst_17829 + (1));
var inst_17838 = (inst_17837__$1 < n);
var state_17867__$1 = (function (){var statearr_17898 = state_17867;
(statearr_17898[(12)] = inst_17836);

(statearr_17898[(11)] = inst_17837__$1);

return statearr_17898;
})();
if(cljs.core.truth_(inst_17838)){
var statearr_17899_19464 = state_17867__$1;
(statearr_17899_19464[(1)] = (8));

} else {
var statearr_17900_19465 = state_17867__$1;
(statearr_17900_19465[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17868 === (14))){
var inst_17860 = (state_17867[(2)]);
var inst_17861 = cljs.core.async.close_BANG_(out);
var state_17867__$1 = (function (){var statearr_17903 = state_17867;
(statearr_17903[(13)] = inst_17860);

return statearr_17903;
})();
var statearr_17904_19466 = state_17867__$1;
(statearr_17904_19466[(2)] = inst_17861);

(statearr_17904_19466[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17868 === (10))){
var inst_17849 = (state_17867[(2)]);
var state_17867__$1 = state_17867;
var statearr_17907_19467 = state_17867__$1;
(statearr_17907_19467[(2)] = inst_17849);

(statearr_17907_19467[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17868 === (8))){
var inst_17828 = (state_17867[(7)]);
var inst_17837 = (state_17867[(11)]);
var tmp17902 = inst_17828;
var inst_17828__$1 = tmp17902;
var inst_17829 = inst_17837;
var state_17867__$1 = (function (){var statearr_17908 = state_17867;
(statearr_17908[(7)] = inst_17828__$1);

(statearr_17908[(8)] = inst_17829);

return statearr_17908;
})();
var statearr_17909_19471 = state_17867__$1;
(statearr_17909_19471[(2)] = null);

(statearr_17909_19471[(1)] = (2));


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
var cljs$core$async$state_machine__13958__auto__ = null;
var cljs$core$async$state_machine__13958__auto____0 = (function (){
var statearr_17913 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17913[(0)] = cljs$core$async$state_machine__13958__auto__);

(statearr_17913[(1)] = (1));

return statearr_17913;
});
var cljs$core$async$state_machine__13958__auto____1 = (function (state_17867){
while(true){
var ret_value__13959__auto__ = (function (){try{while(true){
var result__13960__auto__ = switch__13956__auto__(state_17867);
if(cljs.core.keyword_identical_QMARK_(result__13960__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13960__auto__;
}
break;
}
}catch (e17914){var ex__13961__auto__ = e17914;
var statearr_17915_19472 = state_17867;
(statearr_17915_19472[(2)] = ex__13961__auto__);


if(cljs.core.seq((state_17867[(4)]))){
var statearr_17916_19473 = state_17867;
(statearr_17916_19473[(1)] = cljs.core.first((state_17867[(4)])));

} else {
throw ex__13961__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19474 = state_17867;
state_17867 = G__19474;
continue;
} else {
return ret_value__13959__auto__;
}
break;
}
});
cljs$core$async$state_machine__13958__auto__ = function(state_17867){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13958__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13958__auto____1.call(this,state_17867);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13958__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13958__auto____0;
cljs$core$async$state_machine__13958__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13958__auto____1;
return cljs$core$async$state_machine__13958__auto__;
})()
})();
var state__14862__auto__ = (function (){var statearr_17918 = f__14861__auto__();
(statearr_17918[(6)] = c__14860__auto___19443);

return statearr_17918;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14862__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__17924 = arguments.length;
switch (G__17924) {
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
var c__14860__auto___19481 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14861__auto__ = (function (){var switch__13956__auto__ = (function (state_17981){
var state_val_17982 = (state_17981[(1)]);
if((state_val_17982 === (7))){
var inst_17973 = (state_17981[(2)]);
var state_17981__$1 = state_17981;
var statearr_17983_19487 = state_17981__$1;
(statearr_17983_19487[(2)] = inst_17973);

(statearr_17983_19487[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17982 === (1))){
var inst_17925 = [];
var inst_17926 = inst_17925;
var inst_17927 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_17981__$1 = (function (){var statearr_17984 = state_17981;
(statearr_17984[(7)] = inst_17926);

(statearr_17984[(8)] = inst_17927);

return statearr_17984;
})();
var statearr_17987_19495 = state_17981__$1;
(statearr_17987_19495[(2)] = null);

(statearr_17987_19495[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17982 === (4))){
var inst_17930 = (state_17981[(9)]);
var inst_17930__$1 = (state_17981[(2)]);
var inst_17931 = (inst_17930__$1 == null);
var inst_17932 = cljs.core.not(inst_17931);
var state_17981__$1 = (function (){var statearr_17995 = state_17981;
(statearr_17995[(9)] = inst_17930__$1);

return statearr_17995;
})();
if(inst_17932){
var statearr_17996_19501 = state_17981__$1;
(statearr_17996_19501[(1)] = (5));

} else {
var statearr_17997_19503 = state_17981__$1;
(statearr_17997_19503[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17982 === (15))){
var inst_17926 = (state_17981[(7)]);
var inst_17965 = cljs.core.vec(inst_17926);
var state_17981__$1 = state_17981;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17981__$1,(18),out,inst_17965);
} else {
if((state_val_17982 === (13))){
var inst_17956 = (state_17981[(2)]);
var state_17981__$1 = state_17981;
var statearr_17998_19506 = state_17981__$1;
(statearr_17998_19506[(2)] = inst_17956);

(statearr_17998_19506[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17982 === (6))){
var inst_17926 = (state_17981[(7)]);
var inst_17962 = inst_17926.length;
var inst_17963 = (inst_17962 > (0));
var state_17981__$1 = state_17981;
if(cljs.core.truth_(inst_17963)){
var statearr_17999_19507 = state_17981__$1;
(statearr_17999_19507[(1)] = (15));

} else {
var statearr_18000_19508 = state_17981__$1;
(statearr_18000_19508[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17982 === (17))){
var inst_17970 = (state_17981[(2)]);
var inst_17971 = cljs.core.async.close_BANG_(out);
var state_17981__$1 = (function (){var statearr_18005 = state_17981;
(statearr_18005[(10)] = inst_17970);

return statearr_18005;
})();
var statearr_18006_19509 = state_17981__$1;
(statearr_18006_19509[(2)] = inst_17971);

(statearr_18006_19509[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17982 === (3))){
var inst_17975 = (state_17981[(2)]);
var state_17981__$1 = state_17981;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17981__$1,inst_17975);
} else {
if((state_val_17982 === (12))){
var inst_17926 = (state_17981[(7)]);
var inst_17945 = cljs.core.vec(inst_17926);
var state_17981__$1 = state_17981;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17981__$1,(14),out,inst_17945);
} else {
if((state_val_17982 === (2))){
var state_17981__$1 = state_17981;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17981__$1,(4),ch);
} else {
if((state_val_17982 === (11))){
var inst_17926 = (state_17981[(7)]);
var inst_17930 = (state_17981[(9)]);
var inst_17934 = (state_17981[(11)]);
var inst_17942 = inst_17926.push(inst_17930);
var tmp18007 = inst_17926;
var inst_17926__$1 = tmp18007;
var inst_17927 = inst_17934;
var state_17981__$1 = (function (){var statearr_18011 = state_17981;
(statearr_18011[(12)] = inst_17942);

(statearr_18011[(7)] = inst_17926__$1);

(statearr_18011[(8)] = inst_17927);

return statearr_18011;
})();
var statearr_18018_19515 = state_17981__$1;
(statearr_18018_19515[(2)] = null);

(statearr_18018_19515[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17982 === (9))){
var inst_17927 = (state_17981[(8)]);
var inst_17938 = cljs.core.keyword_identical_QMARK_(inst_17927,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_17981__$1 = state_17981;
var statearr_18019_19522 = state_17981__$1;
(statearr_18019_19522[(2)] = inst_17938);

(statearr_18019_19522[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17982 === (5))){
var inst_17930 = (state_17981[(9)]);
var inst_17934 = (state_17981[(11)]);
var inst_17927 = (state_17981[(8)]);
var inst_17935 = (state_17981[(13)]);
var inst_17934__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_17930) : f.call(null,inst_17930));
var inst_17935__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17934__$1,inst_17927);
var state_17981__$1 = (function (){var statearr_18031 = state_17981;
(statearr_18031[(11)] = inst_17934__$1);

(statearr_18031[(13)] = inst_17935__$1);

return statearr_18031;
})();
if(inst_17935__$1){
var statearr_18032_19528 = state_17981__$1;
(statearr_18032_19528[(1)] = (8));

} else {
var statearr_18033_19529 = state_17981__$1;
(statearr_18033_19529[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17982 === (14))){
var inst_17930 = (state_17981[(9)]);
var inst_17934 = (state_17981[(11)]);
var inst_17947 = (state_17981[(2)]);
var inst_17952 = [];
var inst_17953 = inst_17952.push(inst_17930);
var inst_17926 = inst_17952;
var inst_17927 = inst_17934;
var state_17981__$1 = (function (){var statearr_18034 = state_17981;
(statearr_18034[(14)] = inst_17947);

(statearr_18034[(15)] = inst_17953);

(statearr_18034[(7)] = inst_17926);

(statearr_18034[(8)] = inst_17927);

return statearr_18034;
})();
var statearr_18035_19542 = state_17981__$1;
(statearr_18035_19542[(2)] = null);

(statearr_18035_19542[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17982 === (16))){
var state_17981__$1 = state_17981;
var statearr_18040_19543 = state_17981__$1;
(statearr_18040_19543[(2)] = null);

(statearr_18040_19543[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17982 === (10))){
var inst_17940 = (state_17981[(2)]);
var state_17981__$1 = state_17981;
if(cljs.core.truth_(inst_17940)){
var statearr_18047_19544 = state_17981__$1;
(statearr_18047_19544[(1)] = (11));

} else {
var statearr_18048_19545 = state_17981__$1;
(statearr_18048_19545[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17982 === (18))){
var inst_17967 = (state_17981[(2)]);
var state_17981__$1 = state_17981;
var statearr_18051_19550 = state_17981__$1;
(statearr_18051_19550[(2)] = inst_17967);

(statearr_18051_19550[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17982 === (8))){
var inst_17935 = (state_17981[(13)]);
var state_17981__$1 = state_17981;
var statearr_18052_19551 = state_17981__$1;
(statearr_18052_19551[(2)] = inst_17935);

(statearr_18052_19551[(1)] = (10));


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
var cljs$core$async$state_machine__13958__auto__ = null;
var cljs$core$async$state_machine__13958__auto____0 = (function (){
var statearr_18056 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18056[(0)] = cljs$core$async$state_machine__13958__auto__);

(statearr_18056[(1)] = (1));

return statearr_18056;
});
var cljs$core$async$state_machine__13958__auto____1 = (function (state_17981){
while(true){
var ret_value__13959__auto__ = (function (){try{while(true){
var result__13960__auto__ = switch__13956__auto__(state_17981);
if(cljs.core.keyword_identical_QMARK_(result__13960__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13960__auto__;
}
break;
}
}catch (e18057){var ex__13961__auto__ = e18057;
var statearr_18058_19554 = state_17981;
(statearr_18058_19554[(2)] = ex__13961__auto__);


if(cljs.core.seq((state_17981[(4)]))){
var statearr_18062_19556 = state_17981;
(statearr_18062_19556[(1)] = cljs.core.first((state_17981[(4)])));

} else {
throw ex__13961__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13959__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19557 = state_17981;
state_17981 = G__19557;
continue;
} else {
return ret_value__13959__auto__;
}
break;
}
});
cljs$core$async$state_machine__13958__auto__ = function(state_17981){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13958__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13958__auto____1.call(this,state_17981);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13958__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13958__auto____0;
cljs$core$async$state_machine__13958__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13958__auto____1;
return cljs$core$async$state_machine__13958__auto__;
})()
})();
var state__14862__auto__ = (function (){var statearr_18072 = f__14861__auto__();
(statearr_18072[(6)] = c__14860__auto___19481);

return statearr_18072;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14862__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
