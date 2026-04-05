goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__18877){
var map__18880 = p__18877;
var map__18880__$1 = cljs.core.__destructure_map(map__18880);
var m = map__18880__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18880__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18880__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5142__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5823__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5823__auto__)){
var ns = temp__5823__auto__;
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)+"/");
} else {
return null;
}
})())+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m)));
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__18895_19476 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__18896_19477 = null;
var count__18897_19478 = (0);
var i__18898_19479 = (0);
while(true){
if((i__18898_19479 < count__18897_19478)){
var f_19480 = chunk__18896_19477.cljs$core$IIndexed$_nth$arity$2(null,i__18898_19479);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_19480], 0));


var G__19482 = seq__18895_19476;
var G__19483 = chunk__18896_19477;
var G__19484 = count__18897_19478;
var G__19485 = (i__18898_19479 + (1));
seq__18895_19476 = G__19482;
chunk__18896_19477 = G__19483;
count__18897_19478 = G__19484;
i__18898_19479 = G__19485;
continue;
} else {
var temp__5823__auto___19486 = cljs.core.seq(seq__18895_19476);
if(temp__5823__auto___19486){
var seq__18895_19488__$1 = temp__5823__auto___19486;
if(cljs.core.chunked_seq_QMARK_(seq__18895_19488__$1)){
var c__5673__auto___19489 = cljs.core.chunk_first(seq__18895_19488__$1);
var G__19490 = cljs.core.chunk_rest(seq__18895_19488__$1);
var G__19491 = c__5673__auto___19489;
var G__19492 = cljs.core.count(c__5673__auto___19489);
var G__19493 = (0);
seq__18895_19476 = G__19490;
chunk__18896_19477 = G__19491;
count__18897_19478 = G__19492;
i__18898_19479 = G__19493;
continue;
} else {
var f_19494 = cljs.core.first(seq__18895_19488__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_19494], 0));


var G__19496 = cljs.core.next(seq__18895_19488__$1);
var G__19497 = null;
var G__19498 = (0);
var G__19499 = (0);
seq__18895_19476 = G__19496;
chunk__18896_19477 = G__19497;
count__18897_19478 = G__19498;
i__18898_19479 = G__19499;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_19500 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5142__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_19500], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_19500)))?cljs.core.second(arglists_19500):arglists_19500)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(""+"\n  Please see http://clojure.org/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m)))], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(""+"\n  Please see http://clojure.org/special_forms#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m)))], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__18949_19510 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__18950_19511 = null;
var count__18952_19512 = (0);
var i__18953_19513 = (0);
while(true){
if((i__18953_19513 < count__18952_19512)){
var vec__18995_19516 = chunk__18950_19511.cljs$core$IIndexed$_nth$arity$2(null,i__18953_19513);
var name_19517 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18995_19516,(0),null);
var map__18998_19518 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18995_19516,(1),null);
var map__18998_19519__$1 = cljs.core.__destructure_map(map__18998_19518);
var doc_19520 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18998_19519__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_19521 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18998_19519__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_19517], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_19521], 0));

if(cljs.core.truth_(doc_19520)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_19520], 0));
} else {
}


var G__19523 = seq__18949_19510;
var G__19524 = chunk__18950_19511;
var G__19525 = count__18952_19512;
var G__19526 = (i__18953_19513 + (1));
seq__18949_19510 = G__19523;
chunk__18950_19511 = G__19524;
count__18952_19512 = G__19525;
i__18953_19513 = G__19526;
continue;
} else {
var temp__5823__auto___19527 = cljs.core.seq(seq__18949_19510);
if(temp__5823__auto___19527){
var seq__18949_19530__$1 = temp__5823__auto___19527;
if(cljs.core.chunked_seq_QMARK_(seq__18949_19530__$1)){
var c__5673__auto___19531 = cljs.core.chunk_first(seq__18949_19530__$1);
var G__19532 = cljs.core.chunk_rest(seq__18949_19530__$1);
var G__19533 = c__5673__auto___19531;
var G__19534 = cljs.core.count(c__5673__auto___19531);
var G__19535 = (0);
seq__18949_19510 = G__19532;
chunk__18950_19511 = G__19533;
count__18952_19512 = G__19534;
i__18953_19513 = G__19535;
continue;
} else {
var vec__19016_19536 = cljs.core.first(seq__18949_19530__$1);
var name_19537 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19016_19536,(0),null);
var map__19019_19538 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19016_19536,(1),null);
var map__19019_19539__$1 = cljs.core.__destructure_map(map__19019_19538);
var doc_19540 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19019_19539__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_19541 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19019_19539__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_19537], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_19541], 0));

if(cljs.core.truth_(doc_19540)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_19540], 0));
} else {
}


var G__19546 = cljs.core.next(seq__18949_19530__$1);
var G__19547 = null;
var G__19548 = (0);
var G__19549 = (0);
seq__18949_19510 = G__19546;
chunk__18950_19511 = G__19547;
count__18952_19512 = G__19548;
i__18953_19513 = G__19549;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5823__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n))),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5823__auto__)){
var fnspec = temp__5823__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__19036 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__19038 = null;
var count__19039 = (0);
var i__19040 = (0);
while(true){
if((i__19040 < count__19039)){
var role = chunk__19038.cljs$core$IIndexed$_nth$arity$2(null,i__19040);
var temp__5823__auto___19553__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5823__auto___19553__$1)){
var spec_19555 = temp__5823__auto___19553__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(""+"\n "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(role))+":"),cljs.spec.alpha.describe(spec_19555)], 0));
} else {
}


var G__19558 = seq__19036;
var G__19559 = chunk__19038;
var G__19560 = count__19039;
var G__19561 = (i__19040 + (1));
seq__19036 = G__19558;
chunk__19038 = G__19559;
count__19039 = G__19560;
i__19040 = G__19561;
continue;
} else {
var temp__5823__auto____$1 = cljs.core.seq(seq__19036);
if(temp__5823__auto____$1){
var seq__19036__$1 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__19036__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__19036__$1);
var G__19565 = cljs.core.chunk_rest(seq__19036__$1);
var G__19566 = c__5673__auto__;
var G__19567 = cljs.core.count(c__5673__auto__);
var G__19568 = (0);
seq__19036 = G__19565;
chunk__19038 = G__19566;
count__19039 = G__19567;
i__19040 = G__19568;
continue;
} else {
var role = cljs.core.first(seq__19036__$1);
var temp__5823__auto___19569__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5823__auto___19569__$2)){
var spec_19571 = temp__5823__auto___19569__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(""+"\n "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(role))+":"),cljs.spec.alpha.describe(spec_19571)], 0));
} else {
}


var G__19572 = cljs.core.next(seq__19036__$1);
var G__19573 = null;
var G__19574 = (0);
var G__19575 = (0);
seq__19036 = G__19572;
chunk__19038 = G__19573;
count__19039 = G__19574;
i__19040 = G__19575;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
return cljs.core.Throwable__GT_map(o);
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__19209 = datafied_throwable;
var map__19209__$1 = cljs.core.__destructure_map(map__19209);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19209__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19209__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__19209__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__19210 = cljs.core.last(via);
var map__19210__$1 = cljs.core.__destructure_map(map__19210);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19210__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19210__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19210__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__19211 = data;
var map__19211__$1 = cljs.core.__destructure_map(map__19211);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19211__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19211__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19211__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__19212 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__19212__$1 = cljs.core.__destructure_map(map__19212);
var top_data = map__19212__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19212__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__19232 = phase;
var G__19232__$1 = (((G__19232 instanceof cljs.core.Keyword))?G__19232.fqn:null);
switch (G__19232__$1) {
case "read-source":
var map__19244 = data;
var map__19244__$1 = cljs.core.__destructure_map(map__19244);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19244__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19244__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__19254 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__19254__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19254,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__19254);
var G__19254__$2 = (cljs.core.truth_((function (){var fexpr__19267 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__19267.cljs$core$IFn$_invoke$arity$1 ? fexpr__19267.cljs$core$IFn$_invoke$arity$1(source) : fexpr__19267.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__19254__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__19254__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19254__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__19254__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__19271 = top_data;
var G__19271__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19271,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__19271);
var G__19271__$2 = (cljs.core.truth_((function (){var fexpr__19272 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__19272.cljs$core$IFn$_invoke$arity$1 ? fexpr__19272.cljs$core$IFn$_invoke$arity$1(source) : fexpr__19272.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__19271__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__19271__$1);
var G__19271__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19271__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__19271__$2);
var G__19271__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19271__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__19271__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19271__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__19271__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__19285 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19285,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19285,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19285,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19285,(3),null);
var G__19292 = top_data;
var G__19292__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19292,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__19292);
var G__19292__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19292__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__19292__$1);
var G__19292__$3 = (cljs.core.truth_((function (){var and__5140__auto__ = source__$1;
if(cljs.core.truth_(and__5140__auto__)){
return method;
} else {
return and__5140__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19292__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__19292__$2);
var G__19292__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19292__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__19292__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19292__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__19292__$4;
}

break;
case "execution":
var vec__19303 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19303,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19303,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19303,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19303,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__19198_SHARP_){
var or__5142__auto__ = (p1__19198_SHARP_ == null);
if(or__5142__auto__){
return or__5142__auto__;
} else {
var fexpr__19308 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__19308.cljs$core$IFn$_invoke$arity$1 ? fexpr__19308.cljs$core$IFn$_invoke$arity$1(p1__19198_SHARP_) : fexpr__19308.call(null,p1__19198_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5142__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return line;
}
})();
var G__19313 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__19313__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19313,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__19313);
var G__19313__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19313__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__19313__$1);
var G__19313__$3 = (cljs.core.truth_((function (){var or__5142__auto__ = fn;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var and__5140__auto__ = source__$1;
if(cljs.core.truth_(and__5140__auto__)){
return method;
} else {
return and__5140__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19313__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5142__auto__ = fn;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__19313__$2);
var G__19313__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19313__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__19313__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19313__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__19313__$4;
}

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19232__$1))));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__19355){
var map__19356 = p__19355;
var map__19356__$1 = cljs.core.__destructure_map(map__19356);
var triage_data = map__19356__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19356__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19356__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19356__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19356__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19356__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19356__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19356__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19356__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5142__auto__ = source;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "<cljs repl>";
}
})())+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5142__auto__ = line;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (1);
}
})())+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(column)?(""+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)):"")));
var class_name = cljs.core.name((function (){var or__5142__auto__ = class$;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":(""+" ("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(simple_class)+")"));
var format = goog.string.format;
var G__19371 = phase;
var G__19371__$1 = (((G__19371 instanceof cljs.core.Keyword))?G__19371.fqn:null);
switch (G__19371__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__19375 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__19376 = (cljs.core.truth_(symbol)?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)+" "):"");
var G__19377 = loc;
var G__19378 = (cljs.core.truth_(spec)?(function (){var sb__5795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__19384_19630 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__19385_19632 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__19387_19633 = true;
var _STAR_print_fn_STAR__temp_val__19388_19634 = (function (x__5796__auto__){
return sb__5795__auto__.append(x__5796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__19387_19633);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__19388_19634);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__19345_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__19345_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__19385_19632);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__19384_19630);
}
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5795__auto__));
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__19375,G__19376,G__19377,G__19378) : format.call(null,G__19375,G__19376,G__19377,G__19378));

break;
case "macroexpansion":
var G__19403 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__19404 = cause_type;
var G__19405 = (cljs.core.truth_(symbol)?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)+" "):"");
var G__19406 = loc;
var G__19407 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19403,G__19404,G__19405,G__19406,G__19407) : format.call(null,G__19403,G__19404,G__19405,G__19406,G__19407));

break;
case "compile-syntax-check":
var G__19410 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__19411 = cause_type;
var G__19412 = (cljs.core.truth_(symbol)?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)+" "):"");
var G__19413 = loc;
var G__19414 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19410,G__19411,G__19412,G__19413,G__19414) : format.call(null,G__19410,G__19411,G__19412,G__19413,G__19414));

break;
case "compilation":
var G__19423 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__19424 = cause_type;
var G__19425 = (cljs.core.truth_(symbol)?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)+" "):"");
var G__19426 = loc;
var G__19427 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19423,G__19424,G__19425,G__19426,G__19427) : format.call(null,G__19423,G__19424,G__19425,G__19426,G__19427));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__19432 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__19433 = symbol;
var G__19434 = loc;
var G__19435 = (function (){var sb__5795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__19438_19638 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__19439_19639 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__19440_19640 = true;
var _STAR_print_fn_STAR__temp_val__19441_19641 = (function (x__5796__auto__){
return sb__5795__auto__.append(x__5796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__19440_19640);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__19441_19641);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__19346_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__19346_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__19439_19639);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__19438_19638);
}
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5795__auto__));
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__19432,G__19433,G__19434,G__19435) : format.call(null,G__19432,G__19433,G__19434,G__19435));
} else {
var G__19451 = "Execution error%s at %s(%s).\n%s\n";
var G__19452 = cause_type;
var G__19453 = (cljs.core.truth_(symbol)?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)+" "):"");
var G__19454 = loc;
var G__19455 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19451,G__19452,G__19453,G__19454,G__19455) : format.call(null,G__19451,G__19452,G__19453,G__19454,G__19455));
}

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19371__$1))));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
