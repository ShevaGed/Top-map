goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5882__auto__ = [];
var len__5876__auto___21318 = arguments.length;
var i__5877__auto___21319 = (0);
while(true){
if((i__5877__auto___21319 < len__5876__auto___21318)){
args__5882__auto__.push((arguments[i__5877__auto___21319]));

var G__21320 = (i__5877__auto___21319 + (1));
i__5877__auto___21319 = G__21320;
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq21027){
var G__21028 = cljs.core.first(seq21027);
var seq21027__$1 = cljs.core.next(seq21027);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21028,seq21027__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__21032 = cljs.core.seq(sources);
var chunk__21033 = null;
var count__21034 = (0);
var i__21035 = (0);
while(true){
if((i__21035 < count__21034)){
var map__21042 = chunk__21033.cljs$core$IIndexed$_nth$arity$2(null,i__21035);
var map__21042__$1 = cljs.core.__destructure_map(map__21042);
var src = map__21042__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21042__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21042__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21042__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21042__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js)+"\n//# sourceURL="+cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)));
}catch (e21044){var e_21321 = e21044;
if(shadow.cljs.devtools.client.env.log){
console.error((""+"Failed to load "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)),e_21321);
} else {
}

throw (new Error((""+"Failed to load "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)+": "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_21321.message))));
}

var G__21322 = seq__21032;
var G__21323 = chunk__21033;
var G__21324 = count__21034;
var G__21325 = (i__21035 + (1));
seq__21032 = G__21322;
chunk__21033 = G__21323;
count__21034 = G__21324;
i__21035 = G__21325;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__21032);
if(temp__5823__auto__){
var seq__21032__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21032__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__21032__$1);
var G__21326 = cljs.core.chunk_rest(seq__21032__$1);
var G__21327 = c__5673__auto__;
var G__21328 = cljs.core.count(c__5673__auto__);
var G__21329 = (0);
seq__21032 = G__21326;
chunk__21033 = G__21327;
count__21034 = G__21328;
i__21035 = G__21329;
continue;
} else {
var map__21046 = cljs.core.first(seq__21032__$1);
var map__21046__$1 = cljs.core.__destructure_map(map__21046);
var src = map__21046__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21046__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21046__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21046__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21046__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js)+"\n//# sourceURL="+cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)));
}catch (e21047){var e_21330 = e21047;
if(shadow.cljs.devtools.client.env.log){
console.error((""+"Failed to load "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)),e_21330);
} else {
}

throw (new Error((""+"Failed to load "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)+": "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_21330.message))));
}

var G__21331 = cljs.core.next(seq__21032__$1);
var G__21332 = null;
var G__21333 = (0);
var G__21334 = (0);
seq__21032 = G__21331;
chunk__21033 = G__21332;
count__21034 = G__21333;
i__21035 = G__21334;
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
var seq__21048 = cljs.core.seq(js_requires);
var chunk__21049 = null;
var count__21050 = (0);
var i__21051 = (0);
while(true){
if((i__21051 < count__21050)){
var js_ns = chunk__21049.cljs$core$IIndexed$_nth$arity$2(null,i__21051);
var require_str_21335 = (""+"var "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)+" = shadow.js.require(\""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)+"\");");
shadow.cljs.devtools.client.browser.script_eval(require_str_21335);


var G__21336 = seq__21048;
var G__21337 = chunk__21049;
var G__21338 = count__21050;
var G__21339 = (i__21051 + (1));
seq__21048 = G__21336;
chunk__21049 = G__21337;
count__21050 = G__21338;
i__21051 = G__21339;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__21048);
if(temp__5823__auto__){
var seq__21048__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21048__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__21048__$1);
var G__21340 = cljs.core.chunk_rest(seq__21048__$1);
var G__21341 = c__5673__auto__;
var G__21342 = cljs.core.count(c__5673__auto__);
var G__21343 = (0);
seq__21048 = G__21340;
chunk__21049 = G__21341;
count__21050 = G__21342;
i__21051 = G__21343;
continue;
} else {
var js_ns = cljs.core.first(seq__21048__$1);
var require_str_21344 = (""+"var "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)+" = shadow.js.require(\""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)+"\");");
shadow.cljs.devtools.client.browser.script_eval(require_str_21344);


var G__21345 = cljs.core.next(seq__21048__$1);
var G__21346 = null;
var G__21347 = (0);
var G__21348 = (0);
seq__21048 = G__21345;
chunk__21049 = G__21346;
count__21050 = G__21347;
i__21051 = G__21348;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__21053){
var map__21054 = p__21053;
var map__21054__$1 = cljs.core.__destructure_map(map__21054);
var msg = map__21054__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21054__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21054__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5628__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21055(s__21056){
return (new cljs.core.LazySeq(null,(function (){
var s__21056__$1 = s__21056;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__21056__$1);
if(temp__5823__auto__){
var xs__6383__auto__ = temp__5823__auto__;
var map__21061 = cljs.core.first(xs__6383__auto__);
var map__21061__$1 = cljs.core.__destructure_map(map__21061);
var src = map__21061__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21061__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21061__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5624__auto__ = ((function (s__21056__$1,map__21061,map__21061__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__21054,map__21054__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21055_$_iter__21057(s__21058){
return (new cljs.core.LazySeq(null,((function (s__21056__$1,map__21061,map__21061__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__21054,map__21054__$1,msg,info,reload_info){
return (function (){
var s__21058__$1 = s__21058;
while(true){
var temp__5823__auto____$1 = cljs.core.seq(s__21058__$1);
if(temp__5823__auto____$1){
var s__21058__$2 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__21058__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__21058__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__21060 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__21059 = (0);
while(true){
if((i__21059 < size__5627__auto__)){
var warning = cljs.core._nth(c__5626__auto__,i__21059);
cljs.core.chunk_append(b__21060,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__21349 = (i__21059 + (1));
i__21059 = G__21349;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21060),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21055_$_iter__21057(cljs.core.chunk_rest(s__21058__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21060),null);
}
} else {
var warning = cljs.core.first(s__21058__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21055_$_iter__21057(cljs.core.rest(s__21058__$2)));
}
} else {
return null;
}
break;
}
});})(s__21056__$1,map__21061,map__21061__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__21054,map__21054__$1,msg,info,reload_info))
,null,null));
});})(s__21056__$1,map__21061,map__21061__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__21054,map__21054__$1,msg,info,reload_info))
;
var fs__5625__auto__ = cljs.core.seq(iterys__5624__auto__(warnings));
if(fs__5625__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5625__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21055(cljs.core.rest(s__21056__$1)));
} else {
var G__21350 = cljs.core.rest(s__21056__$1);
s__21056__$1 = G__21350;
continue;
}
} else {
var G__21351 = cljs.core.rest(s__21056__$1);
s__21056__$1 = G__21351;
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
var seq__21062_21352 = cljs.core.seq(warnings);
var chunk__21063_21353 = null;
var count__21064_21354 = (0);
var i__21065_21355 = (0);
while(true){
if((i__21065_21355 < count__21064_21354)){
var map__21068_21356 = chunk__21063_21353.cljs$core$IIndexed$_nth$arity$2(null,i__21065_21355);
var map__21068_21357__$1 = cljs.core.__destructure_map(map__21068_21356);
var w_21358 = map__21068_21357__$1;
var msg_21359__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21068_21357__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_21360 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21068_21357__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_21361 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21068_21357__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_21362 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21068_21357__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn((""+"BUILD-WARNING in "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_21362)+" at ["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_21360)+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_21361)+"]\n\t"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_21359__$1)));


var G__21363 = seq__21062_21352;
var G__21364 = chunk__21063_21353;
var G__21365 = count__21064_21354;
var G__21366 = (i__21065_21355 + (1));
seq__21062_21352 = G__21363;
chunk__21063_21353 = G__21364;
count__21064_21354 = G__21365;
i__21065_21355 = G__21366;
continue;
} else {
var temp__5823__auto___21367 = cljs.core.seq(seq__21062_21352);
if(temp__5823__auto___21367){
var seq__21062_21368__$1 = temp__5823__auto___21367;
if(cljs.core.chunked_seq_QMARK_(seq__21062_21368__$1)){
var c__5673__auto___21369 = cljs.core.chunk_first(seq__21062_21368__$1);
var G__21370 = cljs.core.chunk_rest(seq__21062_21368__$1);
var G__21371 = c__5673__auto___21369;
var G__21372 = cljs.core.count(c__5673__auto___21369);
var G__21373 = (0);
seq__21062_21352 = G__21370;
chunk__21063_21353 = G__21371;
count__21064_21354 = G__21372;
i__21065_21355 = G__21373;
continue;
} else {
var map__21069_21374 = cljs.core.first(seq__21062_21368__$1);
var map__21069_21375__$1 = cljs.core.__destructure_map(map__21069_21374);
var w_21376 = map__21069_21375__$1;
var msg_21377__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21069_21375__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_21378 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21069_21375__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_21379 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21069_21375__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_21380 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21069_21375__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn((""+"BUILD-WARNING in "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_21380)+" at ["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_21378)+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_21379)+"]\n\t"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_21377__$1)));


var G__21381 = cljs.core.next(seq__21062_21368__$1);
var G__21382 = null;
var G__21383 = (0);
var G__21384 = (0);
seq__21062_21352 = G__21381;
chunk__21063_21353 = G__21382;
count__21064_21354 = G__21383;
i__21065_21355 = G__21384;
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

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__21052_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__21052_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__21071 = node_uri;
G__21071.setQuery(null);

G__21071.setPath(new$);

return G__21071;
})()));
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__21072){
var map__21073 = p__21072;
var map__21073__$1 = cljs.core.__destructure_map(map__21073);
var msg = map__21073__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21073__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21073__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__21074 = cljs.core.seq(updates);
var chunk__21076 = null;
var count__21077 = (0);
var i__21078 = (0);
while(true){
if((i__21078 < count__21077)){
var path = chunk__21076.cljs$core$IIndexed$_nth$arity$2(null,i__21078);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__21188_21385 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__21192_21386 = null;
var count__21193_21387 = (0);
var i__21194_21388 = (0);
while(true){
if((i__21194_21388 < count__21193_21387)){
var node_21389 = chunk__21192_21386.cljs$core$IIndexed$_nth$arity$2(null,i__21194_21388);
if(cljs.core.not(node_21389.shadow$old)){
var path_match_21390 = shadow.cljs.devtools.client.browser.match_paths(node_21389.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21390)){
var new_link_21391 = (function (){var G__21220 = node_21389.cloneNode(true);
G__21220.setAttribute("href",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21390)+"?r="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())));

return G__21220;
})();
(node_21389.shadow$old = true);

(new_link_21391.onload = ((function (seq__21188_21385,chunk__21192_21386,count__21193_21387,i__21194_21388,seq__21074,chunk__21076,count__21077,i__21078,new_link_21391,path_match_21390,node_21389,path,map__21073,map__21073__$1,msg,updates,reload_info){
return (function (e){
var seq__21221_21392 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21223_21393 = null;
var count__21224_21394 = (0);
var i__21225_21395 = (0);
while(true){
if((i__21225_21395 < count__21224_21394)){
var map__21229_21396 = chunk__21223_21393.cljs$core$IIndexed$_nth$arity$2(null,i__21225_21395);
var map__21229_21397__$1 = cljs.core.__destructure_map(map__21229_21396);
var task_21398 = map__21229_21397__$1;
var fn_str_21399 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21229_21397__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21400 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21229_21397__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21401 = goog.getObjectByName(fn_str_21399,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21400)));

(fn_obj_21401.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21401.cljs$core$IFn$_invoke$arity$2(path,new_link_21391) : fn_obj_21401.call(null,path,new_link_21391));


var G__21402 = seq__21221_21392;
var G__21403 = chunk__21223_21393;
var G__21404 = count__21224_21394;
var G__21405 = (i__21225_21395 + (1));
seq__21221_21392 = G__21402;
chunk__21223_21393 = G__21403;
count__21224_21394 = G__21404;
i__21225_21395 = G__21405;
continue;
} else {
var temp__5823__auto___21406 = cljs.core.seq(seq__21221_21392);
if(temp__5823__auto___21406){
var seq__21221_21407__$1 = temp__5823__auto___21406;
if(cljs.core.chunked_seq_QMARK_(seq__21221_21407__$1)){
var c__5673__auto___21408 = cljs.core.chunk_first(seq__21221_21407__$1);
var G__21409 = cljs.core.chunk_rest(seq__21221_21407__$1);
var G__21410 = c__5673__auto___21408;
var G__21411 = cljs.core.count(c__5673__auto___21408);
var G__21412 = (0);
seq__21221_21392 = G__21409;
chunk__21223_21393 = G__21410;
count__21224_21394 = G__21411;
i__21225_21395 = G__21412;
continue;
} else {
var map__21230_21413 = cljs.core.first(seq__21221_21407__$1);
var map__21230_21414__$1 = cljs.core.__destructure_map(map__21230_21413);
var task_21415 = map__21230_21414__$1;
var fn_str_21416 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21230_21414__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21417 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21230_21414__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21418 = goog.getObjectByName(fn_str_21416,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21417)));

(fn_obj_21418.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21418.cljs$core$IFn$_invoke$arity$2(path,new_link_21391) : fn_obj_21418.call(null,path,new_link_21391));


var G__21419 = cljs.core.next(seq__21221_21407__$1);
var G__21420 = null;
var G__21421 = (0);
var G__21422 = (0);
seq__21221_21392 = G__21419;
chunk__21223_21393 = G__21420;
count__21224_21394 = G__21421;
i__21225_21395 = G__21422;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21389);
});})(seq__21188_21385,chunk__21192_21386,count__21193_21387,i__21194_21388,seq__21074,chunk__21076,count__21077,i__21078,new_link_21391,path_match_21390,node_21389,path,map__21073,map__21073__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21390], 0));

goog.dom.insertSiblingAfter(new_link_21391,node_21389);


var G__21423 = seq__21188_21385;
var G__21424 = chunk__21192_21386;
var G__21425 = count__21193_21387;
var G__21426 = (i__21194_21388 + (1));
seq__21188_21385 = G__21423;
chunk__21192_21386 = G__21424;
count__21193_21387 = G__21425;
i__21194_21388 = G__21426;
continue;
} else {
var G__21427 = seq__21188_21385;
var G__21428 = chunk__21192_21386;
var G__21429 = count__21193_21387;
var G__21430 = (i__21194_21388 + (1));
seq__21188_21385 = G__21427;
chunk__21192_21386 = G__21428;
count__21193_21387 = G__21429;
i__21194_21388 = G__21430;
continue;
}
} else {
var G__21431 = seq__21188_21385;
var G__21432 = chunk__21192_21386;
var G__21433 = count__21193_21387;
var G__21434 = (i__21194_21388 + (1));
seq__21188_21385 = G__21431;
chunk__21192_21386 = G__21432;
count__21193_21387 = G__21433;
i__21194_21388 = G__21434;
continue;
}
} else {
var temp__5823__auto___21435 = cljs.core.seq(seq__21188_21385);
if(temp__5823__auto___21435){
var seq__21188_21436__$1 = temp__5823__auto___21435;
if(cljs.core.chunked_seq_QMARK_(seq__21188_21436__$1)){
var c__5673__auto___21437 = cljs.core.chunk_first(seq__21188_21436__$1);
var G__21438 = cljs.core.chunk_rest(seq__21188_21436__$1);
var G__21439 = c__5673__auto___21437;
var G__21440 = cljs.core.count(c__5673__auto___21437);
var G__21441 = (0);
seq__21188_21385 = G__21438;
chunk__21192_21386 = G__21439;
count__21193_21387 = G__21440;
i__21194_21388 = G__21441;
continue;
} else {
var node_21442 = cljs.core.first(seq__21188_21436__$1);
if(cljs.core.not(node_21442.shadow$old)){
var path_match_21443 = shadow.cljs.devtools.client.browser.match_paths(node_21442.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21443)){
var new_link_21444 = (function (){var G__21231 = node_21442.cloneNode(true);
G__21231.setAttribute("href",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21443)+"?r="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())));

return G__21231;
})();
(node_21442.shadow$old = true);

(new_link_21444.onload = ((function (seq__21188_21385,chunk__21192_21386,count__21193_21387,i__21194_21388,seq__21074,chunk__21076,count__21077,i__21078,new_link_21444,path_match_21443,node_21442,seq__21188_21436__$1,temp__5823__auto___21435,path,map__21073,map__21073__$1,msg,updates,reload_info){
return (function (e){
var seq__21232_21445 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21234_21446 = null;
var count__21235_21447 = (0);
var i__21236_21448 = (0);
while(true){
if((i__21236_21448 < count__21235_21447)){
var map__21240_21449 = chunk__21234_21446.cljs$core$IIndexed$_nth$arity$2(null,i__21236_21448);
var map__21240_21450__$1 = cljs.core.__destructure_map(map__21240_21449);
var task_21451 = map__21240_21450__$1;
var fn_str_21452 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21240_21450__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21453 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21240_21450__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21454 = goog.getObjectByName(fn_str_21452,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21453)));

(fn_obj_21454.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21454.cljs$core$IFn$_invoke$arity$2(path,new_link_21444) : fn_obj_21454.call(null,path,new_link_21444));


var G__21455 = seq__21232_21445;
var G__21456 = chunk__21234_21446;
var G__21457 = count__21235_21447;
var G__21458 = (i__21236_21448 + (1));
seq__21232_21445 = G__21455;
chunk__21234_21446 = G__21456;
count__21235_21447 = G__21457;
i__21236_21448 = G__21458;
continue;
} else {
var temp__5823__auto___21459__$1 = cljs.core.seq(seq__21232_21445);
if(temp__5823__auto___21459__$1){
var seq__21232_21460__$1 = temp__5823__auto___21459__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21232_21460__$1)){
var c__5673__auto___21461 = cljs.core.chunk_first(seq__21232_21460__$1);
var G__21462 = cljs.core.chunk_rest(seq__21232_21460__$1);
var G__21463 = c__5673__auto___21461;
var G__21464 = cljs.core.count(c__5673__auto___21461);
var G__21465 = (0);
seq__21232_21445 = G__21462;
chunk__21234_21446 = G__21463;
count__21235_21447 = G__21464;
i__21236_21448 = G__21465;
continue;
} else {
var map__21241_21466 = cljs.core.first(seq__21232_21460__$1);
var map__21241_21467__$1 = cljs.core.__destructure_map(map__21241_21466);
var task_21468 = map__21241_21467__$1;
var fn_str_21469 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21241_21467__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21470 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21241_21467__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21471 = goog.getObjectByName(fn_str_21469,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21470)));

(fn_obj_21471.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21471.cljs$core$IFn$_invoke$arity$2(path,new_link_21444) : fn_obj_21471.call(null,path,new_link_21444));


var G__21472 = cljs.core.next(seq__21232_21460__$1);
var G__21473 = null;
var G__21474 = (0);
var G__21475 = (0);
seq__21232_21445 = G__21472;
chunk__21234_21446 = G__21473;
count__21235_21447 = G__21474;
i__21236_21448 = G__21475;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21442);
});})(seq__21188_21385,chunk__21192_21386,count__21193_21387,i__21194_21388,seq__21074,chunk__21076,count__21077,i__21078,new_link_21444,path_match_21443,node_21442,seq__21188_21436__$1,temp__5823__auto___21435,path,map__21073,map__21073__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21443], 0));

goog.dom.insertSiblingAfter(new_link_21444,node_21442);


var G__21476 = cljs.core.next(seq__21188_21436__$1);
var G__21477 = null;
var G__21478 = (0);
var G__21479 = (0);
seq__21188_21385 = G__21476;
chunk__21192_21386 = G__21477;
count__21193_21387 = G__21478;
i__21194_21388 = G__21479;
continue;
} else {
var G__21480 = cljs.core.next(seq__21188_21436__$1);
var G__21481 = null;
var G__21482 = (0);
var G__21483 = (0);
seq__21188_21385 = G__21480;
chunk__21192_21386 = G__21481;
count__21193_21387 = G__21482;
i__21194_21388 = G__21483;
continue;
}
} else {
var G__21484 = cljs.core.next(seq__21188_21436__$1);
var G__21485 = null;
var G__21486 = (0);
var G__21487 = (0);
seq__21188_21385 = G__21484;
chunk__21192_21386 = G__21485;
count__21193_21387 = G__21486;
i__21194_21388 = G__21487;
continue;
}
}
} else {
}
}
break;
}


var G__21488 = seq__21074;
var G__21489 = chunk__21076;
var G__21490 = count__21077;
var G__21491 = (i__21078 + (1));
seq__21074 = G__21488;
chunk__21076 = G__21489;
count__21077 = G__21490;
i__21078 = G__21491;
continue;
} else {
var G__21492 = seq__21074;
var G__21493 = chunk__21076;
var G__21494 = count__21077;
var G__21495 = (i__21078 + (1));
seq__21074 = G__21492;
chunk__21076 = G__21493;
count__21077 = G__21494;
i__21078 = G__21495;
continue;
}
} else {
var temp__5823__auto__ = cljs.core.seq(seq__21074);
if(temp__5823__auto__){
var seq__21074__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21074__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__21074__$1);
var G__21496 = cljs.core.chunk_rest(seq__21074__$1);
var G__21497 = c__5673__auto__;
var G__21498 = cljs.core.count(c__5673__auto__);
var G__21499 = (0);
seq__21074 = G__21496;
chunk__21076 = G__21497;
count__21077 = G__21498;
i__21078 = G__21499;
continue;
} else {
var path = cljs.core.first(seq__21074__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__21242_21500 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__21246_21501 = null;
var count__21247_21502 = (0);
var i__21248_21503 = (0);
while(true){
if((i__21248_21503 < count__21247_21502)){
var node_21504 = chunk__21246_21501.cljs$core$IIndexed$_nth$arity$2(null,i__21248_21503);
if(cljs.core.not(node_21504.shadow$old)){
var path_match_21505 = shadow.cljs.devtools.client.browser.match_paths(node_21504.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21505)){
var new_link_21506 = (function (){var G__21274 = node_21504.cloneNode(true);
G__21274.setAttribute("href",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21505)+"?r="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())));

return G__21274;
})();
(node_21504.shadow$old = true);

(new_link_21506.onload = ((function (seq__21242_21500,chunk__21246_21501,count__21247_21502,i__21248_21503,seq__21074,chunk__21076,count__21077,i__21078,new_link_21506,path_match_21505,node_21504,path,seq__21074__$1,temp__5823__auto__,map__21073,map__21073__$1,msg,updates,reload_info){
return (function (e){
var seq__21275_21507 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21277_21508 = null;
var count__21278_21509 = (0);
var i__21279_21510 = (0);
while(true){
if((i__21279_21510 < count__21278_21509)){
var map__21283_21511 = chunk__21277_21508.cljs$core$IIndexed$_nth$arity$2(null,i__21279_21510);
var map__21283_21512__$1 = cljs.core.__destructure_map(map__21283_21511);
var task_21513 = map__21283_21512__$1;
var fn_str_21514 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21283_21512__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21515 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21283_21512__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21516 = goog.getObjectByName(fn_str_21514,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21515)));

(fn_obj_21516.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21516.cljs$core$IFn$_invoke$arity$2(path,new_link_21506) : fn_obj_21516.call(null,path,new_link_21506));


var G__21517 = seq__21275_21507;
var G__21518 = chunk__21277_21508;
var G__21519 = count__21278_21509;
var G__21520 = (i__21279_21510 + (1));
seq__21275_21507 = G__21517;
chunk__21277_21508 = G__21518;
count__21278_21509 = G__21519;
i__21279_21510 = G__21520;
continue;
} else {
var temp__5823__auto___21521__$1 = cljs.core.seq(seq__21275_21507);
if(temp__5823__auto___21521__$1){
var seq__21275_21522__$1 = temp__5823__auto___21521__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21275_21522__$1)){
var c__5673__auto___21523 = cljs.core.chunk_first(seq__21275_21522__$1);
var G__21524 = cljs.core.chunk_rest(seq__21275_21522__$1);
var G__21525 = c__5673__auto___21523;
var G__21526 = cljs.core.count(c__5673__auto___21523);
var G__21527 = (0);
seq__21275_21507 = G__21524;
chunk__21277_21508 = G__21525;
count__21278_21509 = G__21526;
i__21279_21510 = G__21527;
continue;
} else {
var map__21284_21528 = cljs.core.first(seq__21275_21522__$1);
var map__21284_21529__$1 = cljs.core.__destructure_map(map__21284_21528);
var task_21530 = map__21284_21529__$1;
var fn_str_21531 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21284_21529__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21532 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21284_21529__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21533 = goog.getObjectByName(fn_str_21531,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21532)));

(fn_obj_21533.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21533.cljs$core$IFn$_invoke$arity$2(path,new_link_21506) : fn_obj_21533.call(null,path,new_link_21506));


var G__21534 = cljs.core.next(seq__21275_21522__$1);
var G__21535 = null;
var G__21536 = (0);
var G__21537 = (0);
seq__21275_21507 = G__21534;
chunk__21277_21508 = G__21535;
count__21278_21509 = G__21536;
i__21279_21510 = G__21537;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21504);
});})(seq__21242_21500,chunk__21246_21501,count__21247_21502,i__21248_21503,seq__21074,chunk__21076,count__21077,i__21078,new_link_21506,path_match_21505,node_21504,path,seq__21074__$1,temp__5823__auto__,map__21073,map__21073__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21505], 0));

goog.dom.insertSiblingAfter(new_link_21506,node_21504);


var G__21538 = seq__21242_21500;
var G__21539 = chunk__21246_21501;
var G__21540 = count__21247_21502;
var G__21541 = (i__21248_21503 + (1));
seq__21242_21500 = G__21538;
chunk__21246_21501 = G__21539;
count__21247_21502 = G__21540;
i__21248_21503 = G__21541;
continue;
} else {
var G__21542 = seq__21242_21500;
var G__21543 = chunk__21246_21501;
var G__21544 = count__21247_21502;
var G__21545 = (i__21248_21503 + (1));
seq__21242_21500 = G__21542;
chunk__21246_21501 = G__21543;
count__21247_21502 = G__21544;
i__21248_21503 = G__21545;
continue;
}
} else {
var G__21546 = seq__21242_21500;
var G__21547 = chunk__21246_21501;
var G__21548 = count__21247_21502;
var G__21549 = (i__21248_21503 + (1));
seq__21242_21500 = G__21546;
chunk__21246_21501 = G__21547;
count__21247_21502 = G__21548;
i__21248_21503 = G__21549;
continue;
}
} else {
var temp__5823__auto___21550__$1 = cljs.core.seq(seq__21242_21500);
if(temp__5823__auto___21550__$1){
var seq__21242_21551__$1 = temp__5823__auto___21550__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21242_21551__$1)){
var c__5673__auto___21552 = cljs.core.chunk_first(seq__21242_21551__$1);
var G__21553 = cljs.core.chunk_rest(seq__21242_21551__$1);
var G__21554 = c__5673__auto___21552;
var G__21555 = cljs.core.count(c__5673__auto___21552);
var G__21556 = (0);
seq__21242_21500 = G__21553;
chunk__21246_21501 = G__21554;
count__21247_21502 = G__21555;
i__21248_21503 = G__21556;
continue;
} else {
var node_21557 = cljs.core.first(seq__21242_21551__$1);
if(cljs.core.not(node_21557.shadow$old)){
var path_match_21558 = shadow.cljs.devtools.client.browser.match_paths(node_21557.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21558)){
var new_link_21559 = (function (){var G__21285 = node_21557.cloneNode(true);
G__21285.setAttribute("href",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21558)+"?r="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())));

return G__21285;
})();
(node_21557.shadow$old = true);

(new_link_21559.onload = ((function (seq__21242_21500,chunk__21246_21501,count__21247_21502,i__21248_21503,seq__21074,chunk__21076,count__21077,i__21078,new_link_21559,path_match_21558,node_21557,seq__21242_21551__$1,temp__5823__auto___21550__$1,path,seq__21074__$1,temp__5823__auto__,map__21073,map__21073__$1,msg,updates,reload_info){
return (function (e){
var seq__21286_21560 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21288_21561 = null;
var count__21289_21562 = (0);
var i__21290_21563 = (0);
while(true){
if((i__21290_21563 < count__21289_21562)){
var map__21294_21564 = chunk__21288_21561.cljs$core$IIndexed$_nth$arity$2(null,i__21290_21563);
var map__21294_21565__$1 = cljs.core.__destructure_map(map__21294_21564);
var task_21566 = map__21294_21565__$1;
var fn_str_21567 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21294_21565__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21568 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21294_21565__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21569 = goog.getObjectByName(fn_str_21567,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21568)));

(fn_obj_21569.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21569.cljs$core$IFn$_invoke$arity$2(path,new_link_21559) : fn_obj_21569.call(null,path,new_link_21559));


var G__21570 = seq__21286_21560;
var G__21571 = chunk__21288_21561;
var G__21572 = count__21289_21562;
var G__21573 = (i__21290_21563 + (1));
seq__21286_21560 = G__21570;
chunk__21288_21561 = G__21571;
count__21289_21562 = G__21572;
i__21290_21563 = G__21573;
continue;
} else {
var temp__5823__auto___21574__$2 = cljs.core.seq(seq__21286_21560);
if(temp__5823__auto___21574__$2){
var seq__21286_21575__$1 = temp__5823__auto___21574__$2;
if(cljs.core.chunked_seq_QMARK_(seq__21286_21575__$1)){
var c__5673__auto___21576 = cljs.core.chunk_first(seq__21286_21575__$1);
var G__21577 = cljs.core.chunk_rest(seq__21286_21575__$1);
var G__21578 = c__5673__auto___21576;
var G__21579 = cljs.core.count(c__5673__auto___21576);
var G__21580 = (0);
seq__21286_21560 = G__21577;
chunk__21288_21561 = G__21578;
count__21289_21562 = G__21579;
i__21290_21563 = G__21580;
continue;
} else {
var map__21295_21581 = cljs.core.first(seq__21286_21575__$1);
var map__21295_21582__$1 = cljs.core.__destructure_map(map__21295_21581);
var task_21583 = map__21295_21582__$1;
var fn_str_21584 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21295_21582__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21585 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21295_21582__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21586 = goog.getObjectByName(fn_str_21584,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21585)));

(fn_obj_21586.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21586.cljs$core$IFn$_invoke$arity$2(path,new_link_21559) : fn_obj_21586.call(null,path,new_link_21559));


var G__21587 = cljs.core.next(seq__21286_21575__$1);
var G__21588 = null;
var G__21589 = (0);
var G__21590 = (0);
seq__21286_21560 = G__21587;
chunk__21288_21561 = G__21588;
count__21289_21562 = G__21589;
i__21290_21563 = G__21590;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21557);
});})(seq__21242_21500,chunk__21246_21501,count__21247_21502,i__21248_21503,seq__21074,chunk__21076,count__21077,i__21078,new_link_21559,path_match_21558,node_21557,seq__21242_21551__$1,temp__5823__auto___21550__$1,path,seq__21074__$1,temp__5823__auto__,map__21073,map__21073__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21558], 0));

goog.dom.insertSiblingAfter(new_link_21559,node_21557);


var G__21591 = cljs.core.next(seq__21242_21551__$1);
var G__21592 = null;
var G__21593 = (0);
var G__21594 = (0);
seq__21242_21500 = G__21591;
chunk__21246_21501 = G__21592;
count__21247_21502 = G__21593;
i__21248_21503 = G__21594;
continue;
} else {
var G__21595 = cljs.core.next(seq__21242_21551__$1);
var G__21596 = null;
var G__21597 = (0);
var G__21598 = (0);
seq__21242_21500 = G__21595;
chunk__21246_21501 = G__21596;
count__21247_21502 = G__21597;
i__21248_21503 = G__21598;
continue;
}
} else {
var G__21599 = cljs.core.next(seq__21242_21551__$1);
var G__21600 = null;
var G__21601 = (0);
var G__21602 = (0);
seq__21242_21500 = G__21599;
chunk__21246_21501 = G__21600;
count__21247_21502 = G__21601;
i__21248_21503 = G__21602;
continue;
}
}
} else {
}
}
break;
}


var G__21603 = cljs.core.next(seq__21074__$1);
var G__21604 = null;
var G__21605 = (0);
var G__21606 = (0);
seq__21074 = G__21603;
chunk__21076 = G__21604;
count__21077 = G__21605;
i__21078 = G__21606;
continue;
} else {
var G__21607 = cljs.core.next(seq__21074__$1);
var G__21608 = null;
var G__21609 = (0);
var G__21610 = (0);
seq__21074 = G__21607;
chunk__21076 = G__21608;
count__21077 = G__21609;
i__21078 = G__21610;
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
try{var G__21297 = shadow.cljs.devtools.client.browser.global_eval(code);
return (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(G__21297) : success.call(null,G__21297));
}catch (e21296){var e = e21296;
return (fail.cljs$core$IFn$_invoke$arity$1 ? fail.cljs$core$IFn$_invoke$arity$1(e) : fail.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$5 = (function (this$,ns,p__21298,success,fail){
var map__21299 = p__21298;
var map__21299__$1 = cljs.core.__destructure_map(map__21299);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21299__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
try{var G__21301 = shadow.cljs.devtools.client.browser.global_eval(js);
return (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(G__21301) : success.call(null,G__21301));
}catch (e21300){var e = e21300;
return (fail.cljs$core$IFn$_invoke$arity$1 ? fail.cljs$core$IFn$_invoke$arity$1(e) : fail.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__21302,done,error){
var map__21303 = p__21302;
var map__21303__$1 = cljs.core.__destructure_map(map__21303);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21303__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__21304,done,error){
var map__21305 = p__21304;
var map__21305__$1 = cljs.core.__destructure_map(map__21305);
var msg = map__21305__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21305__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21305__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21305__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__21306){
var map__21307 = p__21306;
var map__21307__$1 = cljs.core.__destructure_map(map__21307);
var src = map__21307__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21307__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5140__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5140__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__21308 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__21308) : done.call(null,G__21308));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__21309){
var map__21310 = p__21309;
var map__21310__$1 = cljs.core.__destructure_map(map__21310);
var msg__$1 = map__21310__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21310__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e21311){var ex = e21311;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__21312){
var map__21313 = p__21312;
var map__21313__$1 = cljs.core.__destructure_map(map__21313);
var env = map__21313__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21313__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
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
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__21314){
var map__21315 = p__21314;
var map__21315__$1 = cljs.core.__destructure_map(map__21315);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21315__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21315__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
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
}),(function (p__21316){
var map__21317 = p__21316;
var map__21317__$1 = cljs.core.__destructure_map(map__21317);
var svc = map__21317__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21317__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
