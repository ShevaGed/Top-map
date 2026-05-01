goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5882__auto__ = [];
var len__5876__auto___21549 = arguments.length;
var i__5877__auto___21550 = (0);
while(true){
if((i__5877__auto___21550 < len__5876__auto___21549)){
args__5882__auto__.push((arguments[i__5877__auto___21550]));

var G__21551 = (i__5877__auto___21550 + (1));
i__5877__auto___21550 = G__21551;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((1) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5883__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(""+"%cshadow-cljs: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(""+"shadow-cljs: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg))], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq21261){
var G__21262 = cljs.core.first(seq21261);
var seq21261__$1 = cljs.core.next(seq21261);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21262,seq21261__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__21265 = cljs.core.seq(sources);
var chunk__21266 = null;
var count__21267 = (0);
var i__21268 = (0);
while(true){
if((i__21268 < count__21267)){
var map__21275 = chunk__21266.cljs$core$IIndexed$_nth$arity$2(null,i__21268);
var map__21275__$1 = cljs.core.__destructure_map(map__21275);
var src = map__21275__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21275__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21275__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21275__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21275__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js)+"\n//# sourceURL="+cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)));
}catch (e21276){var e_21552 = e21276;
if(shadow.cljs.devtools.client.env.log){
console.error((""+"Failed to load "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)),e_21552);
} else {
}

throw (new Error((""+"Failed to load "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)+": "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_21552.message))));
}

var G__21553 = seq__21265;
var G__21554 = chunk__21266;
var G__21555 = count__21267;
var G__21556 = (i__21268 + (1));
seq__21265 = G__21553;
chunk__21266 = G__21554;
count__21267 = G__21555;
i__21268 = G__21556;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__21265);
if(temp__5823__auto__){
var seq__21265__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21265__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__21265__$1);
var G__21557 = cljs.core.chunk_rest(seq__21265__$1);
var G__21558 = c__5673__auto__;
var G__21559 = cljs.core.count(c__5673__auto__);
var G__21560 = (0);
seq__21265 = G__21557;
chunk__21266 = G__21558;
count__21267 = G__21559;
i__21268 = G__21560;
continue;
} else {
var map__21277 = cljs.core.first(seq__21265__$1);
var map__21277__$1 = cljs.core.__destructure_map(map__21277);
var src = map__21277__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21277__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21277__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21277__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21277__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js)+"\n//# sourceURL="+cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)));
}catch (e21278){var e_21561 = e21278;
if(shadow.cljs.devtools.client.env.log){
console.error((""+"Failed to load "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)),e_21561);
} else {
}

throw (new Error((""+"Failed to load "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)+": "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_21561.message))));
}

var G__21562 = cljs.core.next(seq__21265__$1);
var G__21563 = null;
var G__21564 = (0);
var G__21565 = (0);
seq__21265 = G__21562;
chunk__21266 = G__21563;
count__21267 = G__21564;
i__21268 = G__21565;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg((""+"call async "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)));
})], 0)),(function (next){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (next.cljs$core$IFn$_invoke$arity$0 ? next.cljs$core$IFn$_invoke$arity$0() : next.call(null));
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__21279 = cljs.core.seq(js_requires);
var chunk__21280 = null;
var count__21281 = (0);
var i__21282 = (0);
while(true){
if((i__21282 < count__21281)){
var js_ns = chunk__21280.cljs$core$IIndexed$_nth$arity$2(null,i__21282);
var require_str_21566 = (""+"var "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)+" = shadow.js.require(\""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)+"\");");
shadow.cljs.devtools.client.browser.script_eval(require_str_21566);


var G__21567 = seq__21279;
var G__21568 = chunk__21280;
var G__21569 = count__21281;
var G__21570 = (i__21282 + (1));
seq__21279 = G__21567;
chunk__21280 = G__21568;
count__21281 = G__21569;
i__21282 = G__21570;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__21279);
if(temp__5823__auto__){
var seq__21279__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21279__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__21279__$1);
var G__21571 = cljs.core.chunk_rest(seq__21279__$1);
var G__21572 = c__5673__auto__;
var G__21573 = cljs.core.count(c__5673__auto__);
var G__21574 = (0);
seq__21279 = G__21571;
chunk__21280 = G__21572;
count__21281 = G__21573;
i__21282 = G__21574;
continue;
} else {
var js_ns = cljs.core.first(seq__21279__$1);
var require_str_21575 = (""+"var "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)+" = shadow.js.require(\""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)+"\");");
shadow.cljs.devtools.client.browser.script_eval(require_str_21575);


var G__21576 = cljs.core.next(seq__21279__$1);
var G__21577 = null;
var G__21578 = (0);
var G__21579 = (0);
seq__21279 = G__21576;
chunk__21280 = G__21577;
count__21281 = G__21578;
i__21282 = G__21579;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__21284){
var map__21285 = p__21284;
var map__21285__$1 = cljs.core.__destructure_map(map__21285);
var msg = map__21285__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21285__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21285__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5628__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21286(s__21287){
return (new cljs.core.LazySeq(null,(function (){
var s__21287__$1 = s__21287;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__21287__$1);
if(temp__5823__auto__){
var xs__6383__auto__ = temp__5823__auto__;
var map__21292 = cljs.core.first(xs__6383__auto__);
var map__21292__$1 = cljs.core.__destructure_map(map__21292);
var src = map__21292__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21292__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21292__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5624__auto__ = ((function (s__21287__$1,map__21292,map__21292__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__21285,map__21285__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21286_$_iter__21288(s__21289){
return (new cljs.core.LazySeq(null,((function (s__21287__$1,map__21292,map__21292__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__21285,map__21285__$1,msg,info,reload_info){
return (function (){
var s__21289__$1 = s__21289;
while(true){
var temp__5823__auto____$1 = cljs.core.seq(s__21289__$1);
if(temp__5823__auto____$1){
var s__21289__$2 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__21289__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__21289__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__21291 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__21290 = (0);
while(true){
if((i__21290 < size__5627__auto__)){
var warning = cljs.core._nth(c__5626__auto__,i__21290);
cljs.core.chunk_append(b__21291,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__21580 = (i__21290 + (1));
i__21290 = G__21580;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21291),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21286_$_iter__21288(cljs.core.chunk_rest(s__21289__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21291),null);
}
} else {
var warning = cljs.core.first(s__21289__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21286_$_iter__21288(cljs.core.rest(s__21289__$2)));
}
} else {
return null;
}
break;
}
});})(s__21287__$1,map__21292,map__21292__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__21285,map__21285__$1,msg,info,reload_info))
,null,null));
});})(s__21287__$1,map__21292,map__21292__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__21285,map__21285__$1,msg,info,reload_info))
;
var fs__5625__auto__ = cljs.core.seq(iterys__5624__auto__(warnings));
if(fs__5625__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5625__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21286(cljs.core.rest(s__21287__$1)));
} else {
var G__21581 = cljs.core.rest(s__21287__$1);
s__21287__$1 = G__21581;
continue;
}
} else {
var G__21582 = cljs.core.rest(s__21287__$1);
s__21287__$1 = G__21582;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__21293_21583 = cljs.core.seq(warnings);
var chunk__21294_21584 = null;
var count__21295_21585 = (0);
var i__21296_21586 = (0);
while(true){
if((i__21296_21586 < count__21295_21585)){
var map__21299_21587 = chunk__21294_21584.cljs$core$IIndexed$_nth$arity$2(null,i__21296_21586);
var map__21299_21588__$1 = cljs.core.__destructure_map(map__21299_21587);
var w_21589 = map__21299_21588__$1;
var msg_21590__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21299_21588__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_21591 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21299_21588__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_21592 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21299_21588__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_21593 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21299_21588__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn((""+"BUILD-WARNING in "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_21593)+" at ["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_21591)+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_21592)+"]\n\t"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_21590__$1)));


var G__21594 = seq__21293_21583;
var G__21595 = chunk__21294_21584;
var G__21596 = count__21295_21585;
var G__21597 = (i__21296_21586 + (1));
seq__21293_21583 = G__21594;
chunk__21294_21584 = G__21595;
count__21295_21585 = G__21596;
i__21296_21586 = G__21597;
continue;
} else {
var temp__5823__auto___21598 = cljs.core.seq(seq__21293_21583);
if(temp__5823__auto___21598){
var seq__21293_21599__$1 = temp__5823__auto___21598;
if(cljs.core.chunked_seq_QMARK_(seq__21293_21599__$1)){
var c__5673__auto___21600 = cljs.core.chunk_first(seq__21293_21599__$1);
var G__21601 = cljs.core.chunk_rest(seq__21293_21599__$1);
var G__21602 = c__5673__auto___21600;
var G__21603 = cljs.core.count(c__5673__auto___21600);
var G__21604 = (0);
seq__21293_21583 = G__21601;
chunk__21294_21584 = G__21602;
count__21295_21585 = G__21603;
i__21296_21586 = G__21604;
continue;
} else {
var map__21300_21605 = cljs.core.first(seq__21293_21599__$1);
var map__21300_21606__$1 = cljs.core.__destructure_map(map__21300_21605);
var w_21607 = map__21300_21606__$1;
var msg_21608__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21300_21606__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_21609 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21300_21606__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_21610 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21300_21606__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_21611 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21300_21606__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn((""+"BUILD-WARNING in "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_21611)+" at ["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_21609)+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_21610)+"]\n\t"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_21608__$1)));


var G__21612 = cljs.core.next(seq__21293_21599__$1);
var G__21613 = null;
var G__21614 = (0);
var G__21615 = (0);
seq__21293_21583 = G__21612;
chunk__21294_21584 = G__21613;
count__21295_21585 = G__21614;
i__21296_21586 = G__21615;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__21283_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__21283_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(rel_new)+"?"))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5140__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5140__auto__){
var and__5140__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5140__auto____$1){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__21302 = node_uri;
G__21302.setQuery(null);

G__21302.setPath(new$);

return G__21302;
})()));
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__21303){
var map__21304 = p__21303;
var map__21304__$1 = cljs.core.__destructure_map(map__21304);
var msg = map__21304__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21304__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21304__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__21305 = cljs.core.seq(updates);
var chunk__21307 = null;
var count__21308 = (0);
var i__21309 = (0);
while(true){
if((i__21309 < count__21308)){
var path = chunk__21307.cljs$core$IIndexed$_nth$arity$2(null,i__21309);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__21419_21616 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__21423_21617 = null;
var count__21424_21618 = (0);
var i__21425_21619 = (0);
while(true){
if((i__21425_21619 < count__21424_21618)){
var node_21620 = chunk__21423_21617.cljs$core$IIndexed$_nth$arity$2(null,i__21425_21619);
if(cljs.core.not(node_21620.shadow$old)){
var path_match_21621 = shadow.cljs.devtools.client.browser.match_paths(node_21620.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21621)){
var new_link_21622 = (function (){var G__21451 = node_21620.cloneNode(true);
G__21451.setAttribute("href",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21621)+"?r="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())));

return G__21451;
})();
(node_21620.shadow$old = true);

(new_link_21622.onload = ((function (seq__21419_21616,chunk__21423_21617,count__21424_21618,i__21425_21619,seq__21305,chunk__21307,count__21308,i__21309,new_link_21622,path_match_21621,node_21620,path,map__21304,map__21304__$1,msg,updates,reload_info){
return (function (e){
var seq__21452_21623 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21454_21624 = null;
var count__21455_21625 = (0);
var i__21456_21626 = (0);
while(true){
if((i__21456_21626 < count__21455_21625)){
var map__21460_21627 = chunk__21454_21624.cljs$core$IIndexed$_nth$arity$2(null,i__21456_21626);
var map__21460_21628__$1 = cljs.core.__destructure_map(map__21460_21627);
var task_21629 = map__21460_21628__$1;
var fn_str_21630 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21460_21628__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21631 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21460_21628__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21632 = goog.getObjectByName(fn_str_21630,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21631)));

(fn_obj_21632.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21632.cljs$core$IFn$_invoke$arity$2(path,new_link_21622) : fn_obj_21632.call(null,path,new_link_21622));


var G__21633 = seq__21452_21623;
var G__21634 = chunk__21454_21624;
var G__21635 = count__21455_21625;
var G__21636 = (i__21456_21626 + (1));
seq__21452_21623 = G__21633;
chunk__21454_21624 = G__21634;
count__21455_21625 = G__21635;
i__21456_21626 = G__21636;
continue;
} else {
var temp__5823__auto___21637 = cljs.core.seq(seq__21452_21623);
if(temp__5823__auto___21637){
var seq__21452_21638__$1 = temp__5823__auto___21637;
if(cljs.core.chunked_seq_QMARK_(seq__21452_21638__$1)){
var c__5673__auto___21639 = cljs.core.chunk_first(seq__21452_21638__$1);
var G__21640 = cljs.core.chunk_rest(seq__21452_21638__$1);
var G__21641 = c__5673__auto___21639;
var G__21642 = cljs.core.count(c__5673__auto___21639);
var G__21643 = (0);
seq__21452_21623 = G__21640;
chunk__21454_21624 = G__21641;
count__21455_21625 = G__21642;
i__21456_21626 = G__21643;
continue;
} else {
var map__21461_21644 = cljs.core.first(seq__21452_21638__$1);
var map__21461_21645__$1 = cljs.core.__destructure_map(map__21461_21644);
var task_21646 = map__21461_21645__$1;
var fn_str_21647 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21461_21645__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21648 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21461_21645__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21649 = goog.getObjectByName(fn_str_21647,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21648)));

(fn_obj_21649.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21649.cljs$core$IFn$_invoke$arity$2(path,new_link_21622) : fn_obj_21649.call(null,path,new_link_21622));


var G__21650 = cljs.core.next(seq__21452_21638__$1);
var G__21651 = null;
var G__21652 = (0);
var G__21653 = (0);
seq__21452_21623 = G__21650;
chunk__21454_21624 = G__21651;
count__21455_21625 = G__21652;
i__21456_21626 = G__21653;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21620);
});})(seq__21419_21616,chunk__21423_21617,count__21424_21618,i__21425_21619,seq__21305,chunk__21307,count__21308,i__21309,new_link_21622,path_match_21621,node_21620,path,map__21304,map__21304__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21621], 0));

goog.dom.insertSiblingAfter(new_link_21622,node_21620);


var G__21654 = seq__21419_21616;
var G__21655 = chunk__21423_21617;
var G__21656 = count__21424_21618;
var G__21657 = (i__21425_21619 + (1));
seq__21419_21616 = G__21654;
chunk__21423_21617 = G__21655;
count__21424_21618 = G__21656;
i__21425_21619 = G__21657;
continue;
} else {
var G__21658 = seq__21419_21616;
var G__21659 = chunk__21423_21617;
var G__21660 = count__21424_21618;
var G__21661 = (i__21425_21619 + (1));
seq__21419_21616 = G__21658;
chunk__21423_21617 = G__21659;
count__21424_21618 = G__21660;
i__21425_21619 = G__21661;
continue;
}
} else {
var G__21662 = seq__21419_21616;
var G__21663 = chunk__21423_21617;
var G__21664 = count__21424_21618;
var G__21665 = (i__21425_21619 + (1));
seq__21419_21616 = G__21662;
chunk__21423_21617 = G__21663;
count__21424_21618 = G__21664;
i__21425_21619 = G__21665;
continue;
}
} else {
var temp__5823__auto___21666 = cljs.core.seq(seq__21419_21616);
if(temp__5823__auto___21666){
var seq__21419_21667__$1 = temp__5823__auto___21666;
if(cljs.core.chunked_seq_QMARK_(seq__21419_21667__$1)){
var c__5673__auto___21668 = cljs.core.chunk_first(seq__21419_21667__$1);
var G__21669 = cljs.core.chunk_rest(seq__21419_21667__$1);
var G__21670 = c__5673__auto___21668;
var G__21671 = cljs.core.count(c__5673__auto___21668);
var G__21672 = (0);
seq__21419_21616 = G__21669;
chunk__21423_21617 = G__21670;
count__21424_21618 = G__21671;
i__21425_21619 = G__21672;
continue;
} else {
var node_21673 = cljs.core.first(seq__21419_21667__$1);
if(cljs.core.not(node_21673.shadow$old)){
var path_match_21674 = shadow.cljs.devtools.client.browser.match_paths(node_21673.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21674)){
var new_link_21675 = (function (){var G__21462 = node_21673.cloneNode(true);
G__21462.setAttribute("href",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21674)+"?r="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())));

return G__21462;
})();
(node_21673.shadow$old = true);

(new_link_21675.onload = ((function (seq__21419_21616,chunk__21423_21617,count__21424_21618,i__21425_21619,seq__21305,chunk__21307,count__21308,i__21309,new_link_21675,path_match_21674,node_21673,seq__21419_21667__$1,temp__5823__auto___21666,path,map__21304,map__21304__$1,msg,updates,reload_info){
return (function (e){
var seq__21463_21676 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21465_21677 = null;
var count__21466_21678 = (0);
var i__21467_21679 = (0);
while(true){
if((i__21467_21679 < count__21466_21678)){
var map__21471_21680 = chunk__21465_21677.cljs$core$IIndexed$_nth$arity$2(null,i__21467_21679);
var map__21471_21681__$1 = cljs.core.__destructure_map(map__21471_21680);
var task_21682 = map__21471_21681__$1;
var fn_str_21683 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21471_21681__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21684 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21471_21681__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21685 = goog.getObjectByName(fn_str_21683,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21684)));

(fn_obj_21685.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21685.cljs$core$IFn$_invoke$arity$2(path,new_link_21675) : fn_obj_21685.call(null,path,new_link_21675));


var G__21686 = seq__21463_21676;
var G__21687 = chunk__21465_21677;
var G__21688 = count__21466_21678;
var G__21689 = (i__21467_21679 + (1));
seq__21463_21676 = G__21686;
chunk__21465_21677 = G__21687;
count__21466_21678 = G__21688;
i__21467_21679 = G__21689;
continue;
} else {
var temp__5823__auto___21690__$1 = cljs.core.seq(seq__21463_21676);
if(temp__5823__auto___21690__$1){
var seq__21463_21691__$1 = temp__5823__auto___21690__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21463_21691__$1)){
var c__5673__auto___21692 = cljs.core.chunk_first(seq__21463_21691__$1);
var G__21693 = cljs.core.chunk_rest(seq__21463_21691__$1);
var G__21694 = c__5673__auto___21692;
var G__21695 = cljs.core.count(c__5673__auto___21692);
var G__21696 = (0);
seq__21463_21676 = G__21693;
chunk__21465_21677 = G__21694;
count__21466_21678 = G__21695;
i__21467_21679 = G__21696;
continue;
} else {
var map__21472_21697 = cljs.core.first(seq__21463_21691__$1);
var map__21472_21698__$1 = cljs.core.__destructure_map(map__21472_21697);
var task_21699 = map__21472_21698__$1;
var fn_str_21700 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21472_21698__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21701 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21472_21698__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21702 = goog.getObjectByName(fn_str_21700,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21701)));

(fn_obj_21702.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21702.cljs$core$IFn$_invoke$arity$2(path,new_link_21675) : fn_obj_21702.call(null,path,new_link_21675));


var G__21703 = cljs.core.next(seq__21463_21691__$1);
var G__21704 = null;
var G__21705 = (0);
var G__21706 = (0);
seq__21463_21676 = G__21703;
chunk__21465_21677 = G__21704;
count__21466_21678 = G__21705;
i__21467_21679 = G__21706;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21673);
});})(seq__21419_21616,chunk__21423_21617,count__21424_21618,i__21425_21619,seq__21305,chunk__21307,count__21308,i__21309,new_link_21675,path_match_21674,node_21673,seq__21419_21667__$1,temp__5823__auto___21666,path,map__21304,map__21304__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21674], 0));

goog.dom.insertSiblingAfter(new_link_21675,node_21673);


var G__21707 = cljs.core.next(seq__21419_21667__$1);
var G__21708 = null;
var G__21709 = (0);
var G__21710 = (0);
seq__21419_21616 = G__21707;
chunk__21423_21617 = G__21708;
count__21424_21618 = G__21709;
i__21425_21619 = G__21710;
continue;
} else {
var G__21711 = cljs.core.next(seq__21419_21667__$1);
var G__21712 = null;
var G__21713 = (0);
var G__21714 = (0);
seq__21419_21616 = G__21711;
chunk__21423_21617 = G__21712;
count__21424_21618 = G__21713;
i__21425_21619 = G__21714;
continue;
}
} else {
var G__21715 = cljs.core.next(seq__21419_21667__$1);
var G__21716 = null;
var G__21717 = (0);
var G__21718 = (0);
seq__21419_21616 = G__21715;
chunk__21423_21617 = G__21716;
count__21424_21618 = G__21717;
i__21425_21619 = G__21718;
continue;
}
}
} else {
}
}
break;
}


var G__21719 = seq__21305;
var G__21720 = chunk__21307;
var G__21721 = count__21308;
var G__21722 = (i__21309 + (1));
seq__21305 = G__21719;
chunk__21307 = G__21720;
count__21308 = G__21721;
i__21309 = G__21722;
continue;
} else {
var G__21723 = seq__21305;
var G__21724 = chunk__21307;
var G__21725 = count__21308;
var G__21726 = (i__21309 + (1));
seq__21305 = G__21723;
chunk__21307 = G__21724;
count__21308 = G__21725;
i__21309 = G__21726;
continue;
}
} else {
var temp__5823__auto__ = cljs.core.seq(seq__21305);
if(temp__5823__auto__){
var seq__21305__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21305__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__21305__$1);
var G__21727 = cljs.core.chunk_rest(seq__21305__$1);
var G__21728 = c__5673__auto__;
var G__21729 = cljs.core.count(c__5673__auto__);
var G__21730 = (0);
seq__21305 = G__21727;
chunk__21307 = G__21728;
count__21308 = G__21729;
i__21309 = G__21730;
continue;
} else {
var path = cljs.core.first(seq__21305__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__21473_21731 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__21477_21732 = null;
var count__21478_21733 = (0);
var i__21479_21734 = (0);
while(true){
if((i__21479_21734 < count__21478_21733)){
var node_21735 = chunk__21477_21732.cljs$core$IIndexed$_nth$arity$2(null,i__21479_21734);
if(cljs.core.not(node_21735.shadow$old)){
var path_match_21736 = shadow.cljs.devtools.client.browser.match_paths(node_21735.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21736)){
var new_link_21737 = (function (){var G__21505 = node_21735.cloneNode(true);
G__21505.setAttribute("href",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21736)+"?r="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())));

return G__21505;
})();
(node_21735.shadow$old = true);

(new_link_21737.onload = ((function (seq__21473_21731,chunk__21477_21732,count__21478_21733,i__21479_21734,seq__21305,chunk__21307,count__21308,i__21309,new_link_21737,path_match_21736,node_21735,path,seq__21305__$1,temp__5823__auto__,map__21304,map__21304__$1,msg,updates,reload_info){
return (function (e){
var seq__21506_21738 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21508_21739 = null;
var count__21509_21740 = (0);
var i__21510_21741 = (0);
while(true){
if((i__21510_21741 < count__21509_21740)){
var map__21514_21742 = chunk__21508_21739.cljs$core$IIndexed$_nth$arity$2(null,i__21510_21741);
var map__21514_21743__$1 = cljs.core.__destructure_map(map__21514_21742);
var task_21744 = map__21514_21743__$1;
var fn_str_21745 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21514_21743__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21746 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21514_21743__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21747 = goog.getObjectByName(fn_str_21745,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21746)));

(fn_obj_21747.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21747.cljs$core$IFn$_invoke$arity$2(path,new_link_21737) : fn_obj_21747.call(null,path,new_link_21737));


var G__21748 = seq__21506_21738;
var G__21749 = chunk__21508_21739;
var G__21750 = count__21509_21740;
var G__21751 = (i__21510_21741 + (1));
seq__21506_21738 = G__21748;
chunk__21508_21739 = G__21749;
count__21509_21740 = G__21750;
i__21510_21741 = G__21751;
continue;
} else {
var temp__5823__auto___21752__$1 = cljs.core.seq(seq__21506_21738);
if(temp__5823__auto___21752__$1){
var seq__21506_21753__$1 = temp__5823__auto___21752__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21506_21753__$1)){
var c__5673__auto___21754 = cljs.core.chunk_first(seq__21506_21753__$1);
var G__21755 = cljs.core.chunk_rest(seq__21506_21753__$1);
var G__21756 = c__5673__auto___21754;
var G__21757 = cljs.core.count(c__5673__auto___21754);
var G__21758 = (0);
seq__21506_21738 = G__21755;
chunk__21508_21739 = G__21756;
count__21509_21740 = G__21757;
i__21510_21741 = G__21758;
continue;
} else {
var map__21515_21759 = cljs.core.first(seq__21506_21753__$1);
var map__21515_21760__$1 = cljs.core.__destructure_map(map__21515_21759);
var task_21761 = map__21515_21760__$1;
var fn_str_21762 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21515_21760__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21763 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21515_21760__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21764 = goog.getObjectByName(fn_str_21762,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21763)));

(fn_obj_21764.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21764.cljs$core$IFn$_invoke$arity$2(path,new_link_21737) : fn_obj_21764.call(null,path,new_link_21737));


var G__21765 = cljs.core.next(seq__21506_21753__$1);
var G__21766 = null;
var G__21767 = (0);
var G__21768 = (0);
seq__21506_21738 = G__21765;
chunk__21508_21739 = G__21766;
count__21509_21740 = G__21767;
i__21510_21741 = G__21768;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21735);
});})(seq__21473_21731,chunk__21477_21732,count__21478_21733,i__21479_21734,seq__21305,chunk__21307,count__21308,i__21309,new_link_21737,path_match_21736,node_21735,path,seq__21305__$1,temp__5823__auto__,map__21304,map__21304__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21736], 0));

goog.dom.insertSiblingAfter(new_link_21737,node_21735);


var G__21769 = seq__21473_21731;
var G__21770 = chunk__21477_21732;
var G__21771 = count__21478_21733;
var G__21772 = (i__21479_21734 + (1));
seq__21473_21731 = G__21769;
chunk__21477_21732 = G__21770;
count__21478_21733 = G__21771;
i__21479_21734 = G__21772;
continue;
} else {
var G__21773 = seq__21473_21731;
var G__21774 = chunk__21477_21732;
var G__21775 = count__21478_21733;
var G__21776 = (i__21479_21734 + (1));
seq__21473_21731 = G__21773;
chunk__21477_21732 = G__21774;
count__21478_21733 = G__21775;
i__21479_21734 = G__21776;
continue;
}
} else {
var G__21777 = seq__21473_21731;
var G__21778 = chunk__21477_21732;
var G__21779 = count__21478_21733;
var G__21780 = (i__21479_21734 + (1));
seq__21473_21731 = G__21777;
chunk__21477_21732 = G__21778;
count__21478_21733 = G__21779;
i__21479_21734 = G__21780;
continue;
}
} else {
var temp__5823__auto___21781__$1 = cljs.core.seq(seq__21473_21731);
if(temp__5823__auto___21781__$1){
var seq__21473_21782__$1 = temp__5823__auto___21781__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21473_21782__$1)){
var c__5673__auto___21783 = cljs.core.chunk_first(seq__21473_21782__$1);
var G__21784 = cljs.core.chunk_rest(seq__21473_21782__$1);
var G__21785 = c__5673__auto___21783;
var G__21786 = cljs.core.count(c__5673__auto___21783);
var G__21787 = (0);
seq__21473_21731 = G__21784;
chunk__21477_21732 = G__21785;
count__21478_21733 = G__21786;
i__21479_21734 = G__21787;
continue;
} else {
var node_21788 = cljs.core.first(seq__21473_21782__$1);
if(cljs.core.not(node_21788.shadow$old)){
var path_match_21789 = shadow.cljs.devtools.client.browser.match_paths(node_21788.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21789)){
var new_link_21790 = (function (){var G__21516 = node_21788.cloneNode(true);
G__21516.setAttribute("href",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21789)+"?r="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())));

return G__21516;
})();
(node_21788.shadow$old = true);

(new_link_21790.onload = ((function (seq__21473_21731,chunk__21477_21732,count__21478_21733,i__21479_21734,seq__21305,chunk__21307,count__21308,i__21309,new_link_21790,path_match_21789,node_21788,seq__21473_21782__$1,temp__5823__auto___21781__$1,path,seq__21305__$1,temp__5823__auto__,map__21304,map__21304__$1,msg,updates,reload_info){
return (function (e){
var seq__21517_21791 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21519_21792 = null;
var count__21520_21793 = (0);
var i__21521_21794 = (0);
while(true){
if((i__21521_21794 < count__21520_21793)){
var map__21525_21795 = chunk__21519_21792.cljs$core$IIndexed$_nth$arity$2(null,i__21521_21794);
var map__21525_21796__$1 = cljs.core.__destructure_map(map__21525_21795);
var task_21797 = map__21525_21796__$1;
var fn_str_21798 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21525_21796__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21799 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21525_21796__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21800 = goog.getObjectByName(fn_str_21798,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21799)));

(fn_obj_21800.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21800.cljs$core$IFn$_invoke$arity$2(path,new_link_21790) : fn_obj_21800.call(null,path,new_link_21790));


var G__21801 = seq__21517_21791;
var G__21802 = chunk__21519_21792;
var G__21803 = count__21520_21793;
var G__21804 = (i__21521_21794 + (1));
seq__21517_21791 = G__21801;
chunk__21519_21792 = G__21802;
count__21520_21793 = G__21803;
i__21521_21794 = G__21804;
continue;
} else {
var temp__5823__auto___21805__$2 = cljs.core.seq(seq__21517_21791);
if(temp__5823__auto___21805__$2){
var seq__21517_21806__$1 = temp__5823__auto___21805__$2;
if(cljs.core.chunked_seq_QMARK_(seq__21517_21806__$1)){
var c__5673__auto___21807 = cljs.core.chunk_first(seq__21517_21806__$1);
var G__21808 = cljs.core.chunk_rest(seq__21517_21806__$1);
var G__21809 = c__5673__auto___21807;
var G__21810 = cljs.core.count(c__5673__auto___21807);
var G__21811 = (0);
seq__21517_21791 = G__21808;
chunk__21519_21792 = G__21809;
count__21520_21793 = G__21810;
i__21521_21794 = G__21811;
continue;
} else {
var map__21526_21812 = cljs.core.first(seq__21517_21806__$1);
var map__21526_21813__$1 = cljs.core.__destructure_map(map__21526_21812);
var task_21814 = map__21526_21813__$1;
var fn_str_21815 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21526_21813__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21816 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21526_21813__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21817 = goog.getObjectByName(fn_str_21815,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21816)));

(fn_obj_21817.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21817.cljs$core$IFn$_invoke$arity$2(path,new_link_21790) : fn_obj_21817.call(null,path,new_link_21790));


var G__21818 = cljs.core.next(seq__21517_21806__$1);
var G__21819 = null;
var G__21820 = (0);
var G__21821 = (0);
seq__21517_21791 = G__21818;
chunk__21519_21792 = G__21819;
count__21520_21793 = G__21820;
i__21521_21794 = G__21821;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21788);
});})(seq__21473_21731,chunk__21477_21732,count__21478_21733,i__21479_21734,seq__21305,chunk__21307,count__21308,i__21309,new_link_21790,path_match_21789,node_21788,seq__21473_21782__$1,temp__5823__auto___21781__$1,path,seq__21305__$1,temp__5823__auto__,map__21304,map__21304__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21789], 0));

goog.dom.insertSiblingAfter(new_link_21790,node_21788);


var G__21822 = cljs.core.next(seq__21473_21782__$1);
var G__21823 = null;
var G__21824 = (0);
var G__21825 = (0);
seq__21473_21731 = G__21822;
chunk__21477_21732 = G__21823;
count__21478_21733 = G__21824;
i__21479_21734 = G__21825;
continue;
} else {
var G__21826 = cljs.core.next(seq__21473_21782__$1);
var G__21827 = null;
var G__21828 = (0);
var G__21829 = (0);
seq__21473_21731 = G__21826;
chunk__21477_21732 = G__21827;
count__21478_21733 = G__21828;
i__21479_21734 = G__21829;
continue;
}
} else {
var G__21830 = cljs.core.next(seq__21473_21782__$1);
var G__21831 = null;
var G__21832 = (0);
var G__21833 = (0);
seq__21473_21731 = G__21830;
chunk__21477_21732 = G__21831;
count__21478_21733 = G__21832;
i__21479_21734 = G__21833;
continue;
}
}
} else {
}
}
break;
}


var G__21834 = cljs.core.next(seq__21305__$1);
var G__21835 = null;
var G__21836 = (0);
var G__21837 = (0);
seq__21305 = G__21834;
chunk__21307 = G__21835;
count__21308 = G__21836;
i__21309 = G__21837;
continue;
} else {
var G__21838 = cljs.core.next(seq__21305__$1);
var G__21839 = null;
var G__21840 = (0);
var G__21841 = (0);
seq__21305 = G__21838;
chunk__21307 = G__21839;
count__21308 = G__21840;
i__21309 = G__21841;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null))))))))+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)+" ["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM)+"]"),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$4 = (function (this$,code,success,fail){
var this$__$1 = this;
try{var G__21528 = shadow.cljs.devtools.client.browser.global_eval(code);
return (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(G__21528) : success.call(null,G__21528));
}catch (e21527){var e = e21527;
return (fail.cljs$core$IFn$_invoke$arity$1 ? fail.cljs$core$IFn$_invoke$arity$1(e) : fail.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$5 = (function (this$,ns,p__21529,success,fail){
var map__21530 = p__21529;
var map__21530__$1 = cljs.core.__destructure_map(map__21530);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21530__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
try{var G__21532 = shadow.cljs.devtools.client.browser.global_eval(js);
return (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(G__21532) : success.call(null,G__21532));
}catch (e21531){var e = e21531;
return (fail.cljs$core$IFn$_invoke$arity$1 ? fail.cljs$core$IFn$_invoke$arity$1(e) : fail.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__21533,done,error){
var map__21534 = p__21533;
var map__21534__$1 = cljs.core.__destructure_map(map__21534);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21534__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__21535,done,error){
var map__21536 = p__21535;
var map__21536__$1 = cljs.core.__destructure_map(map__21536);
var msg = map__21536__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21536__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21536__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21536__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__21537){
var map__21538 = p__21537;
var map__21538__$1 = cljs.core.__destructure_map(map__21538);
var src = map__21538__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21538__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5140__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5140__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__21539 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__21539) : done.call(null,G__21539));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__21540){
var map__21541 = p__21540;
var map__21541__$1 = cljs.core.__destructure_map(map__21541);
var msg__$1 = map__21541__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21541__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e21542){var ex = e21542;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__21543){
var map__21544 = p__21543;
var map__21544__$1 = cljs.core.__destructure_map(map__21544);
var env = map__21544__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21544__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg((""+"#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))+" ready!"));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error((""+"Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."+" Is the watch for this build running?"));
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__21545){
var map__21546 = p__21545;
var map__21546__$1 = cljs.core.__destructure_map(map__21546);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21546__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21546__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__21547){
var map__21548 = p__21547;
var map__21548__$1 = cljs.core.__destructure_map(map__21548);
var svc = map__21548__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21548__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
