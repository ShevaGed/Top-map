goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__13821){
var map__13822 = p__13821;
var map__13822__$1 = cljs.core.__destructure_map(map__13822);
var runtime = map__13822__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13822__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5142__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_14160 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_14160)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__13833 = runtime;
var G__13834 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_14160);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__13833,G__13834) : shadow.remote.runtime.shared.process.call(null,G__13833,G__13834));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__13855,res){
var map__13857 = p__13855;
var map__13857__$1 = cljs.core.__destructure_map(map__13857);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13857__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13857__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__13865 = res;
var G__13865__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__13865,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__13865);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__13865__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__13865__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__13883 = arguments.length;
switch (G__13883) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__13890,msg,handlers,timeout_after_ms){
var map__13891 = p__13890;
var map__13891__$1 = cljs.core.__destructure_map(map__13891);
var runtime = map__13891__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13891__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
if(cljs.core.map_QMARK_(msg)){
} else {
throw (new Error("Assert failed: (map? msg)"));
}

if(cljs.core.map_QMARK_(handlers)){
} else {
throw (new Error("Assert failed: (map? handlers)"));
}

if(cljs.core.nat_int_QMARK_(timeout_after_ms)){
} else {
throw (new Error("Assert failed: (nat-int? timeout-after-ms)"));
}

var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5882__auto__ = [];
var len__5876__auto___14207 = arguments.length;
var i__5877__auto___14209 = (0);
while(true){
if((i__5877__auto___14209 < len__5876__auto___14207)){
args__5882__auto__.push((arguments[i__5877__auto___14209]));

var G__14211 = (i__5877__auto___14209 + (1));
i__5877__auto___14209 = G__14211;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((2) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5883__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__13918,ev,args){
var map__13925 = p__13918;
var map__13925__$1 = cljs.core.__destructure_map(map__13925);
var runtime = map__13925__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13925__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__13927 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__13930 = null;
var count__13931 = (0);
var i__13932 = (0);
while(true){
if((i__13932 < count__13931)){
var ext = chunk__13930.cljs$core$IIndexed$_nth$arity$2(null,i__13932);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__14217 = seq__13927;
var G__14218 = chunk__13930;
var G__14219 = count__13931;
var G__14220 = (i__13932 + (1));
seq__13927 = G__14217;
chunk__13930 = G__14218;
count__13931 = G__14219;
i__13932 = G__14220;
continue;
} else {
var G__14221 = seq__13927;
var G__14222 = chunk__13930;
var G__14223 = count__13931;
var G__14224 = (i__13932 + (1));
seq__13927 = G__14221;
chunk__13930 = G__14222;
count__13931 = G__14223;
i__13932 = G__14224;
continue;
}
} else {
var temp__5823__auto__ = cljs.core.seq(seq__13927);
if(temp__5823__auto__){
var seq__13927__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13927__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__13927__$1);
var G__14226 = cljs.core.chunk_rest(seq__13927__$1);
var G__14227 = c__5673__auto__;
var G__14228 = cljs.core.count(c__5673__auto__);
var G__14229 = (0);
seq__13927 = G__14226;
chunk__13930 = G__14227;
count__13931 = G__14228;
i__13932 = G__14229;
continue;
} else {
var ext = cljs.core.first(seq__13927__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__14230 = cljs.core.next(seq__13927__$1);
var G__14231 = null;
var G__14232 = (0);
var G__14233 = (0);
seq__13927 = G__14230;
chunk__13930 = G__14231;
count__13931 = G__14232;
i__13932 = G__14233;
continue;
} else {
var G__14234 = cljs.core.next(seq__13927__$1);
var G__14235 = null;
var G__14236 = (0);
var G__14237 = (0);
seq__13927 = G__14234;
chunk__13930 = G__14235;
count__13931 = G__14236;
i__13932 = G__14237;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq13911){
var G__13912 = cljs.core.first(seq13911);
var seq13911__$1 = cljs.core.next(seq13911);
var G__13913 = cljs.core.first(seq13911__$1);
var seq13911__$2 = cljs.core.next(seq13911__$1);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13912,G__13913,seq13911__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__13956,p__13957){
var map__13963 = p__13956;
var map__13963__$1 = cljs.core.__destructure_map(map__13963);
var runtime = map__13963__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13963__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__13964 = p__13957;
var map__13964__$1 = cljs.core.__destructure_map(map__13964);
var msg = map__13964__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13964__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"welcome","welcome",-578152123),true], 0));

var map__13972 = cljs.core.deref(state_ref);
var map__13972__$1 = cljs.core.__destructure_map(map__13972);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13972__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13972__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__13976,msg){
var map__13977 = p__13976;
var map__13977__$1 = cljs.core.__destructure_map(map__13977);
var runtime = map__13977__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13977__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__13989,key,p__13990){
var map__13991 = p__13989;
var map__13991__$1 = cljs.core.__destructure_map(map__13991);
var state = map__13991__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13991__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__13992 = p__13990;
var map__13992__$1 = cljs.core.__destructure_map(map__13992);
var spec = map__13992__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13992__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
var transit_write_handlers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13992__$1,new cljs.core.Keyword(null,"transit-write-handlers","transit-write-handlers",1886308716));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__14036,key,spec){
var map__14037 = p__14036;
var map__14037__$1 = cljs.core.__destructure_map(map__14037);
var runtime = map__14037__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14037__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);

var temp__5827__auto___14276 = new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125).cljs$core$IFn$_invoke$arity$1(spec);
if((temp__5827__auto___14276 == null)){
} else {
var on_welcome_14279 = temp__5827__auto___14276;
if(cljs.core.truth_(new cljs.core.Keyword(null,"welcome","welcome",-578152123).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))){
(on_welcome_14279.cljs$core$IFn$_invoke$arity$0 ? on_welcome_14279.cljs$core$IFn$_invoke$arity$0() : on_welcome_14279.call(null));
} else {
}
}

return runtime;
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__14043_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__14043_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__14044_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__14044_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__14045_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__14045_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__14046_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__14046_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__14047_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__14047_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__14066,key){
var map__14067 = p__14066;
var map__14067__$1 = cljs.core.__destructure_map(map__14067);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14067__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__14081,msg){
var map__14082 = p__14081;
var map__14082__$1 = cljs.core.__destructure_map(map__14082);
var runtime = map__14082__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14082__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__14095,p__14096){
var map__14098 = p__14095;
var map__14098__$1 = cljs.core.__destructure_map(map__14098);
var runtime = map__14098__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14098__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__14099 = p__14096;
var map__14099__$1 = cljs.core.__destructure_map(map__14099);
var msg = map__14099__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14099__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14099__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__14121 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__14123 = null;
var count__14124 = (0);
var i__14125 = (0);
while(true){
if((i__14125 < count__14124)){
var map__14139 = chunk__14123.cljs$core$IIndexed$_nth$arity$2(null,i__14125);
var map__14139__$1 = cljs.core.__destructure_map(map__14139);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14139__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__14306 = seq__14121;
var G__14307 = chunk__14123;
var G__14308 = count__14124;
var G__14309 = (i__14125 + (1));
seq__14121 = G__14306;
chunk__14123 = G__14307;
count__14124 = G__14308;
i__14125 = G__14309;
continue;
} else {
var G__14310 = seq__14121;
var G__14311 = chunk__14123;
var G__14312 = count__14124;
var G__14313 = (i__14125 + (1));
seq__14121 = G__14310;
chunk__14123 = G__14311;
count__14124 = G__14312;
i__14125 = G__14313;
continue;
}
} else {
var temp__5823__auto__ = cljs.core.seq(seq__14121);
if(temp__5823__auto__){
var seq__14121__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14121__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__14121__$1);
var G__14316 = cljs.core.chunk_rest(seq__14121__$1);
var G__14317 = c__5673__auto__;
var G__14318 = cljs.core.count(c__5673__auto__);
var G__14319 = (0);
seq__14121 = G__14316;
chunk__14123 = G__14317;
count__14124 = G__14318;
i__14125 = G__14319;
continue;
} else {
var map__14144 = cljs.core.first(seq__14121__$1);
var map__14144__$1 = cljs.core.__destructure_map(map__14144);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14144__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__14323 = cljs.core.next(seq__14121__$1);
var G__14324 = null;
var G__14325 = (0);
var G__14326 = (0);
seq__14121 = G__14323;
chunk__14123 = G__14324;
count__14124 = G__14325;
i__14125 = G__14326;
continue;
} else {
var G__14327 = cljs.core.next(seq__14121__$1);
var G__14328 = null;
var G__14329 = (0);
var G__14330 = (0);
seq__14121 = G__14327;
chunk__14123 = G__14328;
count__14124 = G__14329;
i__14125 = G__14330;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
