goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__19004){
var map__19005 = p__19004;
var map__19005__$1 = cljs.core.__destructure_map(map__19005);
var m = map__19005__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19005__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19005__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__19023_19550 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__19024_19551 = null;
var count__19025_19552 = (0);
var i__19026_19553 = (0);
while(true){
if((i__19026_19553 < count__19025_19552)){
var f_19555 = chunk__19024_19551.cljs$core$IIndexed$_nth$arity$2(null,i__19026_19553);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_19555], 0));


var G__19557 = seq__19023_19550;
var G__19558 = chunk__19024_19551;
var G__19559 = count__19025_19552;
var G__19560 = (i__19026_19553 + (1));
seq__19023_19550 = G__19557;
chunk__19024_19551 = G__19558;
count__19025_19552 = G__19559;
i__19026_19553 = G__19560;
continue;
} else {
var temp__5823__auto___19562 = cljs.core.seq(seq__19023_19550);
if(temp__5823__auto___19562){
var seq__19023_19563__$1 = temp__5823__auto___19562;
if(cljs.core.chunked_seq_QMARK_(seq__19023_19563__$1)){
var c__5673__auto___19564 = cljs.core.chunk_first(seq__19023_19563__$1);
var G__19565 = cljs.core.chunk_rest(seq__19023_19563__$1);
var G__19566 = c__5673__auto___19564;
var G__19567 = cljs.core.count(c__5673__auto___19564);
var G__19568 = (0);
seq__19023_19550 = G__19565;
chunk__19024_19551 = G__19566;
count__19025_19552 = G__19567;
i__19026_19553 = G__19568;
continue;
} else {
var f_19570 = cljs.core.first(seq__19023_19563__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_19570], 0));


var G__19571 = cljs.core.next(seq__19023_19563__$1);
var G__19572 = null;
var G__19573 = (0);
var G__19574 = (0);
seq__19023_19550 = G__19571;
chunk__19024_19551 = G__19572;
count__19025_19552 = G__19573;
i__19026_19553 = G__19574;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_19576 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5142__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_19576], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_19576)))?cljs.core.second(arglists_19576):arglists_19576)], 0));
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
var seq__19053_19582 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__19054_19583 = null;
var count__19055_19584 = (0);
var i__19056_19585 = (0);
while(true){
if((i__19056_19585 < count__19055_19584)){
var vec__19097_19587 = chunk__19054_19583.cljs$core$IIndexed$_nth$arity$2(null,i__19056_19585);
var name_19588 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19097_19587,(0),null);
var map__19100_19589 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19097_19587,(1),null);
var map__19100_19590__$1 = cljs.core.__destructure_map(map__19100_19589);
var doc_19591 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19100_19590__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_19592 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19100_19590__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_19588], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_19592], 0));

if(cljs.core.truth_(doc_19591)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_19591], 0));
} else {
}


var G__19596 = seq__19053_19582;
var G__19597 = chunk__19054_19583;
var G__19599 = count__19055_19584;
var G__19600 = (i__19056_19585 + (1));
seq__19053_19582 = G__19596;
chunk__19054_19583 = G__19597;
count__19055_19584 = G__19599;
i__19056_19585 = G__19600;
continue;
} else {
var temp__5823__auto___19602 = cljs.core.seq(seq__19053_19582);
if(temp__5823__auto___19602){
var seq__19053_19603__$1 = temp__5823__auto___19602;
if(cljs.core.chunked_seq_QMARK_(seq__19053_19603__$1)){
var c__5673__auto___19608 = cljs.core.chunk_first(seq__19053_19603__$1);
var G__19609 = cljs.core.chunk_rest(seq__19053_19603__$1);
var G__19610 = c__5673__auto___19608;
var G__19611 = cljs.core.count(c__5673__auto___19608);
var G__19612 = (0);
seq__19053_19582 = G__19609;
chunk__19054_19583 = G__19610;
count__19055_19584 = G__19611;
i__19056_19585 = G__19612;
continue;
} else {
var vec__19107_19613 = cljs.core.first(seq__19053_19603__$1);
var name_19614 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19107_19613,(0),null);
var map__19110_19615 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19107_19613,(1),null);
var map__19110_19616__$1 = cljs.core.__destructure_map(map__19110_19615);
var doc_19617 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19110_19616__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_19618 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19110_19616__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_19614], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_19618], 0));

if(cljs.core.truth_(doc_19617)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_19617], 0));
} else {
}


var G__19630 = cljs.core.next(seq__19053_19603__$1);
var G__19631 = null;
var G__19632 = (0);
var G__19633 = (0);
seq__19053_19582 = G__19630;
chunk__19054_19583 = G__19631;
count__19055_19584 = G__19632;
i__19056_19585 = G__19633;
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

var seq__19150 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__19151 = null;
var count__19152 = (0);
var i__19153 = (0);
while(true){
if((i__19153 < count__19152)){
var role = chunk__19151.cljs$core$IIndexed$_nth$arity$2(null,i__19153);
var temp__5823__auto___19638__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5823__auto___19638__$1)){
var spec_19640 = temp__5823__auto___19638__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(""+"\n "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(role))+":"),cljs.spec.alpha.describe(spec_19640)], 0));
} else {
}


var G__19645 = seq__19150;
var G__19646 = chunk__19151;
var G__19647 = count__19152;
var G__19648 = (i__19153 + (1));
seq__19150 = G__19645;
chunk__19151 = G__19646;
count__19152 = G__19647;
i__19153 = G__19648;
continue;
} else {
var temp__5823__auto____$1 = cljs.core.seq(seq__19150);
if(temp__5823__auto____$1){
var seq__19150__$1 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__19150__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__19150__$1);
var G__19651 = cljs.core.chunk_rest(seq__19150__$1);
var G__19652 = c__5673__auto__;
var G__19653 = cljs.core.count(c__5673__auto__);
var G__19654 = (0);
seq__19150 = G__19651;
chunk__19151 = G__19652;
count__19152 = G__19653;
i__19153 = G__19654;
continue;
} else {
var role = cljs.core.first(seq__19150__$1);
var temp__5823__auto___19659__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5823__auto___19659__$2)){
var spec_19660 = temp__5823__auto___19659__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(""+"\n "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(role))+":"),cljs.spec.alpha.describe(spec_19660)], 0));
} else {
}


var G__19662 = cljs.core.next(seq__19150__$1);
var G__19663 = null;
var G__19664 = (0);
var G__19665 = (0);
seq__19150 = G__19662;
chunk__19151 = G__19663;
count__19152 = G__19664;
i__19153 = G__19665;
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
var map__19264 = datafied_throwable;
var map__19264__$1 = cljs.core.__destructure_map(map__19264);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19264__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19264__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__19264__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__19266 = cljs.core.last(via);
var map__19266__$1 = cljs.core.__destructure_map(map__19266);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19266__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19266__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19266__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__19267 = data;
var map__19267__$1 = cljs.core.__destructure_map(map__19267);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19267__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19267__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19267__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__19268 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__19268__$1 = cljs.core.__destructure_map(map__19268);
var top_data = map__19268__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19268__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__19282 = phase;
var G__19282__$1 = (((G__19282 instanceof cljs.core.Keyword))?G__19282.fqn:null);
switch (G__19282__$1) {
case "read-source":
var map__19292 = data;
var map__19292__$1 = cljs.core.__destructure_map(map__19292);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19292__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19292__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__19295 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__19295__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19295,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__19295);
var G__19295__$2 = (cljs.core.truth_((function (){var fexpr__19305 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__19305.cljs$core$IFn$_invoke$arity$1 ? fexpr__19305.cljs$core$IFn$_invoke$arity$1(source) : fexpr__19305.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__19295__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__19295__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19295__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__19295__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__19309 = top_data;
var G__19309__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19309,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__19309);
var G__19309__$2 = (cljs.core.truth_((function (){var fexpr__19322 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__19322.cljs$core$IFn$_invoke$arity$1 ? fexpr__19322.cljs$core$IFn$_invoke$arity$1(source) : fexpr__19322.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__19309__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__19309__$1);
var G__19309__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19309__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__19309__$2);
var G__19309__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19309__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__19309__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19309__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__19309__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__19329 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19329,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19329,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19329,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19329,(3),null);
var G__19338 = top_data;
var G__19338__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19338,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__19338);
var G__19338__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19338__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__19338__$1);
var G__19338__$3 = (cljs.core.truth_((function (){var and__5140__auto__ = source__$1;
if(cljs.core.truth_(and__5140__auto__)){
return method;
} else {
return and__5140__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19338__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__19338__$2);
var G__19338__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19338__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__19338__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19338__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__19338__$4;
}

break;
case "execution":
var vec__19346 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19346,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19346,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19346,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19346,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__19261_SHARP_){
var or__5142__auto__ = (p1__19261_SHARP_ == null);
if(or__5142__auto__){
return or__5142__auto__;
} else {
var fexpr__19358 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__19358.cljs$core$IFn$_invoke$arity$1 ? fexpr__19358.cljs$core$IFn$_invoke$arity$1(p1__19261_SHARP_) : fexpr__19358.call(null,p1__19261_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5142__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return line;
}
})();
var G__19360 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__19360__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19360,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__19360);
var G__19360__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19360__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__19360__$1);
var G__19360__$3 = (cljs.core.truth_((function (){var or__5142__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19360__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5142__auto__ = fn;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__19360__$2);
var G__19360__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19360__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__19360__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19360__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__19360__$4;
}

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19282__$1))));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__19392){
var map__19394 = p__19392;
var map__19394__$1 = cljs.core.__destructure_map(map__19394);
var triage_data = map__19394__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19394__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19394__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19394__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19394__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19394__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19394__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19394__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19394__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__19418 = phase;
var G__19418__$1 = (((G__19418 instanceof cljs.core.Keyword))?G__19418.fqn:null);
switch (G__19418__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__19422 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__19423 = (cljs.core.truth_(symbol)?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)+" "):"");
var G__19424 = loc;
var G__19425 = (cljs.core.truth_(spec)?(function (){var sb__5795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__19427_19699 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__19428_19700 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__19429_19701 = true;
var _STAR_print_fn_STAR__temp_val__19430_19702 = (function (x__5796__auto__){
return sb__5795__auto__.append(x__5796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__19429_19701);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__19430_19702);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__19386_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__19386_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__19428_19700);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__19427_19699);
}
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5795__auto__));
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__19422,G__19423,G__19424,G__19425) : format.call(null,G__19422,G__19423,G__19424,G__19425));

break;
case "macroexpansion":
var G__19442 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__19443 = cause_type;
var G__19444 = (cljs.core.truth_(symbol)?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)+" "):"");
var G__19445 = loc;
var G__19446 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19442,G__19443,G__19444,G__19445,G__19446) : format.call(null,G__19442,G__19443,G__19444,G__19445,G__19446));

break;
case "compile-syntax-check":
var G__19449 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__19450 = cause_type;
var G__19451 = (cljs.core.truth_(symbol)?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)+" "):"");
var G__19452 = loc;
var G__19453 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19449,G__19450,G__19451,G__19452,G__19453) : format.call(null,G__19449,G__19450,G__19451,G__19452,G__19453));

break;
case "compilation":
var G__19455 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__19456 = cause_type;
var G__19457 = (cljs.core.truth_(symbol)?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)+" "):"");
var G__19458 = loc;
var G__19459 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19455,G__19456,G__19457,G__19458,G__19459) : format.call(null,G__19455,G__19456,G__19457,G__19458,G__19459));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__19461 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__19462 = symbol;
var G__19463 = loc;
var G__19464 = (function (){var sb__5795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__19470_19709 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__19471_19710 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__19472_19711 = true;
var _STAR_print_fn_STAR__temp_val__19473_19712 = (function (x__5796__auto__){
return sb__5795__auto__.append(x__5796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__19472_19711);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__19473_19712);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__19389_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__19389_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__19471_19710);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__19470_19709);
}
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5795__auto__));
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__19461,G__19462,G__19463,G__19464) : format.call(null,G__19461,G__19462,G__19463,G__19464));
} else {
var G__19484 = "Execution error%s at %s(%s).\n%s\n";
var G__19485 = cause_type;
var G__19486 = (cljs.core.truth_(symbol)?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)+" "):"");
var G__19487 = loc;
var G__19488 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19484,G__19485,G__19486,G__19487,G__19488) : format.call(null,G__19484,G__19485,G__19486,G__19487,G__19488));
}

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19418__$1))));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
