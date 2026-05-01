goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = true;

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_15126 = (function (this$){
var x__5498__auto__ = (((this$ == null))?null:this$);
var m__5499__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5499__auto__.call(null,this$));
} else {
var m__5497__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5497__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_15126(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_15131 = (function (this$){
var x__5498__auto__ = (((this$ == null))?null:this$);
var m__5499__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5499__auto__.call(null,this$));
} else {
var m__5497__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5497__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_15131(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__13449 = coll;
var G__13450 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__13449,G__13450) : shadow.dom.lazy_native_coll_seq.call(null,G__13449,G__13450));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5142__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(el)));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__13479 = arguments.length;
switch (G__13479) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__13483 = arguments.length;
switch (G__13483) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__13491 = arguments.length;
switch (G__13491) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__13508 = arguments.length;
switch (G__13508) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__13522 = arguments.length;
switch (G__13522) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__13529 = arguments.length;
switch (G__13529) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5142__auto__ = (!((typeof document !== 'undefined')));
if(or__5142__auto__){
return or__5142__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent((""+"on"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e13546){if((e13546 instanceof Object)){
var e = e13546;
return console.log("didnt support attachEvent",el,e);
} else {
throw e13546;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5142__auto__ = (!((typeof document !== 'undefined')));
if(or__5142__auto__){
return or__5142__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent((""+"on"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__13562 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__13563 = null;
var count__13564 = (0);
var i__13565 = (0);
while(true){
if((i__13565 < count__13564)){
var el = chunk__13563.cljs$core$IIndexed$_nth$arity$2(null,i__13565);
var handler_15192__$1 = ((function (seq__13562,chunk__13563,count__13564,i__13565,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__13562,chunk__13563,count__13564,i__13565,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_15192__$1);


var G__15197 = seq__13562;
var G__15198 = chunk__13563;
var G__15199 = count__13564;
var G__15200 = (i__13565 + (1));
seq__13562 = G__15197;
chunk__13563 = G__15198;
count__13564 = G__15199;
i__13565 = G__15200;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__13562);
if(temp__5823__auto__){
var seq__13562__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13562__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__13562__$1);
var G__15202 = cljs.core.chunk_rest(seq__13562__$1);
var G__15203 = c__5673__auto__;
var G__15204 = cljs.core.count(c__5673__auto__);
var G__15205 = (0);
seq__13562 = G__15202;
chunk__13563 = G__15203;
count__13564 = G__15204;
i__13565 = G__15205;
continue;
} else {
var el = cljs.core.first(seq__13562__$1);
var handler_15206__$1 = ((function (seq__13562,chunk__13563,count__13564,i__13565,el,seq__13562__$1,temp__5823__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__13562,chunk__13563,count__13564,i__13565,el,seq__13562__$1,temp__5823__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_15206__$1);


var G__15210 = cljs.core.next(seq__13562__$1);
var G__15211 = null;
var G__15212 = (0);
var G__15213 = (0);
seq__13562 = G__15210;
chunk__13563 = G__15211;
count__13564 = G__15212;
i__13565 = G__15213;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__13601 = arguments.length;
switch (G__13601) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__13627 = cljs.core.seq(events);
var chunk__13628 = null;
var count__13629 = (0);
var i__13630 = (0);
while(true){
if((i__13630 < count__13629)){
var vec__13644 = chunk__13628.cljs$core$IIndexed$_nth$arity$2(null,i__13630);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13644,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13644,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__15216 = seq__13627;
var G__15217 = chunk__13628;
var G__15218 = count__13629;
var G__15219 = (i__13630 + (1));
seq__13627 = G__15216;
chunk__13628 = G__15217;
count__13629 = G__15218;
i__13630 = G__15219;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__13627);
if(temp__5823__auto__){
var seq__13627__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13627__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__13627__$1);
var G__15222 = cljs.core.chunk_rest(seq__13627__$1);
var G__15223 = c__5673__auto__;
var G__15224 = cljs.core.count(c__5673__auto__);
var G__15225 = (0);
seq__13627 = G__15222;
chunk__13628 = G__15223;
count__13629 = G__15224;
i__13630 = G__15225;
continue;
} else {
var vec__13651 = cljs.core.first(seq__13627__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13651,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13651,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__15226 = cljs.core.next(seq__13627__$1);
var G__15227 = null;
var G__15228 = (0);
var G__15229 = (0);
seq__13627 = G__15226;
chunk__13628 = G__15227;
count__13629 = G__15228;
i__13630 = G__15229;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__13658 = cljs.core.seq(styles);
var chunk__13659 = null;
var count__13660 = (0);
var i__13661 = (0);
while(true){
if((i__13661 < count__13660)){
var vec__13682 = chunk__13659.cljs$core$IIndexed$_nth$arity$2(null,i__13661);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13682,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13682,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__15230 = seq__13658;
var G__15231 = chunk__13659;
var G__15232 = count__13660;
var G__15233 = (i__13661 + (1));
seq__13658 = G__15230;
chunk__13659 = G__15231;
count__13660 = G__15232;
i__13661 = G__15233;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__13658);
if(temp__5823__auto__){
var seq__13658__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13658__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__13658__$1);
var G__15234 = cljs.core.chunk_rest(seq__13658__$1);
var G__15235 = c__5673__auto__;
var G__15236 = cljs.core.count(c__5673__auto__);
var G__15237 = (0);
seq__13658 = G__15234;
chunk__13659 = G__15235;
count__13660 = G__15236;
i__13661 = G__15237;
continue;
} else {
var vec__13698 = cljs.core.first(seq__13658__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13698,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13698,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__15238 = cljs.core.next(seq__13658__$1);
var G__15239 = null;
var G__15240 = (0);
var G__15241 = (0);
seq__13658 = G__15238;
chunk__13659 = G__15239;
count__13660 = G__15240;
i__13661 = G__15241;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__13713_15243 = key;
var G__13713_15244__$1 = (((G__13713_15243 instanceof cljs.core.Keyword))?G__13713_15243.fqn:null);
switch (G__13713_15244__$1) {
case "id":
(el.id = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)));

break;
case "class":
(el.className = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_15275 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5142__auto__ = goog.string.startsWith(ks_15275,"data-");
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return goog.string.startsWith(ks_15275,"aria-");
}
})())){
el.setAttribute(ks_15275,value);
} else {
(el[ks_15275] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class));
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw (""+"cant have id after class?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(spec__$1));
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__13769){
var map__13770 = p__13769;
var map__13770__$1 = cljs.core.__destructure_map(map__13770);
var props = map__13770__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13770__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__13772 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13772,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13772,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13772,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__13780 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__13780,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__13780;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__13783 = arguments.length;
switch (G__13783) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5823__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5823__auto__)){
var n = temp__5823__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5823__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5823__auto__)){
var n = temp__5823__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__13816){
var vec__13817 = p__13816;
var seq__13818 = cljs.core.seq(vec__13817);
var first__13819 = cljs.core.first(seq__13818);
var seq__13818__$1 = cljs.core.next(seq__13818);
var nn = first__13819;
var first__13819__$1 = cljs.core.first(seq__13818__$1);
var seq__13818__$2 = cljs.core.next(seq__13818__$1);
var np = first__13819__$1;
var nc = seq__13818__$2;
var node = vec__13817;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__13823 = nn;
var G__13824 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__13823,G__13824) : create_fn.call(null,G__13823,G__13824));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__13826 = nn;
var G__13827 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__13826,G__13827) : create_fn.call(null,G__13826,G__13827));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__13830 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13830,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13830,(1),null);
var seq__13835_15308 = cljs.core.seq(node_children);
var chunk__13836_15309 = null;
var count__13837_15310 = (0);
var i__13838_15311 = (0);
while(true){
if((i__13838_15311 < count__13837_15310)){
var child_struct_15312 = chunk__13836_15309.cljs$core$IIndexed$_nth$arity$2(null,i__13838_15311);
var children_15314 = shadow.dom.dom_node(child_struct_15312);
if(cljs.core.seq_QMARK_(children_15314)){
var seq__13919_15317 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_15314));
var chunk__13921_15318 = null;
var count__13922_15319 = (0);
var i__13923_15320 = (0);
while(true){
if((i__13923_15320 < count__13922_15319)){
var child_15321 = chunk__13921_15318.cljs$core$IIndexed$_nth$arity$2(null,i__13923_15320);
if(cljs.core.truth_(child_15321)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_15321);


var G__15324 = seq__13919_15317;
var G__15325 = chunk__13921_15318;
var G__15326 = count__13922_15319;
var G__15327 = (i__13923_15320 + (1));
seq__13919_15317 = G__15324;
chunk__13921_15318 = G__15325;
count__13922_15319 = G__15326;
i__13923_15320 = G__15327;
continue;
} else {
var G__15330 = seq__13919_15317;
var G__15331 = chunk__13921_15318;
var G__15332 = count__13922_15319;
var G__15333 = (i__13923_15320 + (1));
seq__13919_15317 = G__15330;
chunk__13921_15318 = G__15331;
count__13922_15319 = G__15332;
i__13923_15320 = G__15333;
continue;
}
} else {
var temp__5823__auto___15334 = cljs.core.seq(seq__13919_15317);
if(temp__5823__auto___15334){
var seq__13919_15336__$1 = temp__5823__auto___15334;
if(cljs.core.chunked_seq_QMARK_(seq__13919_15336__$1)){
var c__5673__auto___15338 = cljs.core.chunk_first(seq__13919_15336__$1);
var G__15339 = cljs.core.chunk_rest(seq__13919_15336__$1);
var G__15340 = c__5673__auto___15338;
var G__15341 = cljs.core.count(c__5673__auto___15338);
var G__15342 = (0);
seq__13919_15317 = G__15339;
chunk__13921_15318 = G__15340;
count__13922_15319 = G__15341;
i__13923_15320 = G__15342;
continue;
} else {
var child_15343 = cljs.core.first(seq__13919_15336__$1);
if(cljs.core.truth_(child_15343)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_15343);


var G__15344 = cljs.core.next(seq__13919_15336__$1);
var G__15345 = null;
var G__15346 = (0);
var G__15347 = (0);
seq__13919_15317 = G__15344;
chunk__13921_15318 = G__15345;
count__13922_15319 = G__15346;
i__13923_15320 = G__15347;
continue;
} else {
var G__15349 = cljs.core.next(seq__13919_15336__$1);
var G__15350 = null;
var G__15351 = (0);
var G__15352 = (0);
seq__13919_15317 = G__15349;
chunk__13921_15318 = G__15350;
count__13922_15319 = G__15351;
i__13923_15320 = G__15352;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_15314);
}


var G__15354 = seq__13835_15308;
var G__15355 = chunk__13836_15309;
var G__15356 = count__13837_15310;
var G__15357 = (i__13838_15311 + (1));
seq__13835_15308 = G__15354;
chunk__13836_15309 = G__15355;
count__13837_15310 = G__15356;
i__13838_15311 = G__15357;
continue;
} else {
var temp__5823__auto___15358 = cljs.core.seq(seq__13835_15308);
if(temp__5823__auto___15358){
var seq__13835_15360__$1 = temp__5823__auto___15358;
if(cljs.core.chunked_seq_QMARK_(seq__13835_15360__$1)){
var c__5673__auto___15361 = cljs.core.chunk_first(seq__13835_15360__$1);
var G__15363 = cljs.core.chunk_rest(seq__13835_15360__$1);
var G__15364 = c__5673__auto___15361;
var G__15365 = cljs.core.count(c__5673__auto___15361);
var G__15366 = (0);
seq__13835_15308 = G__15363;
chunk__13836_15309 = G__15364;
count__13837_15310 = G__15365;
i__13838_15311 = G__15366;
continue;
} else {
var child_struct_15367 = cljs.core.first(seq__13835_15360__$1);
var children_15368 = shadow.dom.dom_node(child_struct_15367);
if(cljs.core.seq_QMARK_(children_15368)){
var seq__13943_15370 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_15368));
var chunk__13945_15371 = null;
var count__13946_15372 = (0);
var i__13947_15373 = (0);
while(true){
if((i__13947_15373 < count__13946_15372)){
var child_15374 = chunk__13945_15371.cljs$core$IIndexed$_nth$arity$2(null,i__13947_15373);
if(cljs.core.truth_(child_15374)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_15374);


var G__15375 = seq__13943_15370;
var G__15376 = chunk__13945_15371;
var G__15377 = count__13946_15372;
var G__15378 = (i__13947_15373 + (1));
seq__13943_15370 = G__15375;
chunk__13945_15371 = G__15376;
count__13946_15372 = G__15377;
i__13947_15373 = G__15378;
continue;
} else {
var G__15379 = seq__13943_15370;
var G__15380 = chunk__13945_15371;
var G__15381 = count__13946_15372;
var G__15382 = (i__13947_15373 + (1));
seq__13943_15370 = G__15379;
chunk__13945_15371 = G__15380;
count__13946_15372 = G__15381;
i__13947_15373 = G__15382;
continue;
}
} else {
var temp__5823__auto___15383__$1 = cljs.core.seq(seq__13943_15370);
if(temp__5823__auto___15383__$1){
var seq__13943_15384__$1 = temp__5823__auto___15383__$1;
if(cljs.core.chunked_seq_QMARK_(seq__13943_15384__$1)){
var c__5673__auto___15385 = cljs.core.chunk_first(seq__13943_15384__$1);
var G__15387 = cljs.core.chunk_rest(seq__13943_15384__$1);
var G__15388 = c__5673__auto___15385;
var G__15389 = cljs.core.count(c__5673__auto___15385);
var G__15390 = (0);
seq__13943_15370 = G__15387;
chunk__13945_15371 = G__15388;
count__13946_15372 = G__15389;
i__13947_15373 = G__15390;
continue;
} else {
var child_15391 = cljs.core.first(seq__13943_15384__$1);
if(cljs.core.truth_(child_15391)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_15391);


var G__15392 = cljs.core.next(seq__13943_15384__$1);
var G__15393 = null;
var G__15394 = (0);
var G__15395 = (0);
seq__13943_15370 = G__15392;
chunk__13945_15371 = G__15393;
count__13946_15372 = G__15394;
i__13947_15373 = G__15395;
continue;
} else {
var G__15396 = cljs.core.next(seq__13943_15384__$1);
var G__15397 = null;
var G__15398 = (0);
var G__15399 = (0);
seq__13943_15370 = G__15396;
chunk__13945_15371 = G__15397;
count__13946_15372 = G__15398;
i__13947_15373 = G__15399;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_15368);
}


var G__15402 = cljs.core.next(seq__13835_15360__$1);
var G__15403 = null;
var G__15404 = (0);
var G__15405 = (0);
seq__13835_15308 = G__15402;
chunk__13836_15309 = G__15403;
count__13837_15310 = G__15404;
i__13838_15311 = G__15405;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__13997 = cljs.core.seq(node);
var chunk__13998 = null;
var count__13999 = (0);
var i__14000 = (0);
while(true){
if((i__14000 < count__13999)){
var n = chunk__13998.cljs$core$IIndexed$_nth$arity$2(null,i__14000);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__15424 = seq__13997;
var G__15425 = chunk__13998;
var G__15426 = count__13999;
var G__15427 = (i__14000 + (1));
seq__13997 = G__15424;
chunk__13998 = G__15425;
count__13999 = G__15426;
i__14000 = G__15427;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__13997);
if(temp__5823__auto__){
var seq__13997__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13997__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__13997__$1);
var G__15440 = cljs.core.chunk_rest(seq__13997__$1);
var G__15441 = c__5673__auto__;
var G__15442 = cljs.core.count(c__5673__auto__);
var G__15443 = (0);
seq__13997 = G__15440;
chunk__13998 = G__15441;
count__13999 = G__15442;
i__14000 = G__15443;
continue;
} else {
var n = cljs.core.first(seq__13997__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__15447 = cljs.core.next(seq__13997__$1);
var G__15448 = null;
var G__15449 = (0);
var G__15450 = (0);
seq__13997 = G__15447;
chunk__13998 = G__15448;
count__13999 = G__15449;
i__14000 = G__15450;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__14053 = arguments.length;
switch (G__14053) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__14063 = arguments.length;
switch (G__14063) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__14086 = arguments.length;
switch (G__14086) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5142__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute((""+"data-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(key))));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute((""+"data-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(key))),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5882__auto__ = [];
var len__5876__auto___15492 = arguments.length;
var i__5877__auto___15493 = (0);
while(true){
if((i__5877__auto___15493 < len__5876__auto___15492)){
args__5882__auto__.push((arguments[i__5877__auto___15493]));

var G__15495 = (i__5877__auto___15493 + (1));
i__5877__auto___15493 = G__15495;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((0) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5883__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__14131_15522 = cljs.core.seq(nodes);
var chunk__14132_15523 = null;
var count__14133_15524 = (0);
var i__14134_15525 = (0);
while(true){
if((i__14134_15525 < count__14133_15524)){
var node_15529 = chunk__14132_15523.cljs$core$IIndexed$_nth$arity$2(null,i__14134_15525);
fragment.appendChild(shadow.dom._to_dom(node_15529));


var G__15530 = seq__14131_15522;
var G__15531 = chunk__14132_15523;
var G__15532 = count__14133_15524;
var G__15533 = (i__14134_15525 + (1));
seq__14131_15522 = G__15530;
chunk__14132_15523 = G__15531;
count__14133_15524 = G__15532;
i__14134_15525 = G__15533;
continue;
} else {
var temp__5823__auto___15534 = cljs.core.seq(seq__14131_15522);
if(temp__5823__auto___15534){
var seq__14131_15535__$1 = temp__5823__auto___15534;
if(cljs.core.chunked_seq_QMARK_(seq__14131_15535__$1)){
var c__5673__auto___15536 = cljs.core.chunk_first(seq__14131_15535__$1);
var G__15537 = cljs.core.chunk_rest(seq__14131_15535__$1);
var G__15538 = c__5673__auto___15536;
var G__15539 = cljs.core.count(c__5673__auto___15536);
var G__15540 = (0);
seq__14131_15522 = G__15537;
chunk__14132_15523 = G__15538;
count__14133_15524 = G__15539;
i__14134_15525 = G__15540;
continue;
} else {
var node_15541 = cljs.core.first(seq__14131_15535__$1);
fragment.appendChild(shadow.dom._to_dom(node_15541));


var G__15542 = cljs.core.next(seq__14131_15535__$1);
var G__15543 = null;
var G__15544 = (0);
var G__15545 = (0);
seq__14131_15522 = G__15542;
chunk__14132_15523 = G__15543;
count__14133_15524 = G__15544;
i__14134_15525 = G__15545;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq14130){
var self__5862__auto__ = this;
return self__5862__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14130));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__14146_15549 = cljs.core.seq(scripts);
var chunk__14148_15550 = null;
var count__14149_15551 = (0);
var i__14150_15552 = (0);
while(true){
if((i__14150_15552 < count__14149_15551)){
var vec__14169_15555 = chunk__14148_15550.cljs$core$IIndexed$_nth$arity$2(null,i__14150_15552);
var script_tag_15556 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14169_15555,(0),null);
var script_body_15557 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14169_15555,(1),null);
eval(script_body_15557);


var G__15559 = seq__14146_15549;
var G__15560 = chunk__14148_15550;
var G__15561 = count__14149_15551;
var G__15562 = (i__14150_15552 + (1));
seq__14146_15549 = G__15559;
chunk__14148_15550 = G__15560;
count__14149_15551 = G__15561;
i__14150_15552 = G__15562;
continue;
} else {
var temp__5823__auto___15563 = cljs.core.seq(seq__14146_15549);
if(temp__5823__auto___15563){
var seq__14146_15565__$1 = temp__5823__auto___15563;
if(cljs.core.chunked_seq_QMARK_(seq__14146_15565__$1)){
var c__5673__auto___15566 = cljs.core.chunk_first(seq__14146_15565__$1);
var G__15567 = cljs.core.chunk_rest(seq__14146_15565__$1);
var G__15568 = c__5673__auto___15566;
var G__15569 = cljs.core.count(c__5673__auto___15566);
var G__15570 = (0);
seq__14146_15549 = G__15567;
chunk__14148_15550 = G__15568;
count__14149_15551 = G__15569;
i__14150_15552 = G__15570;
continue;
} else {
var vec__14185_15571 = cljs.core.first(seq__14146_15565__$1);
var script_tag_15572 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14185_15571,(0),null);
var script_body_15573 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14185_15571,(1),null);
eval(script_body_15573);


var G__15574 = cljs.core.next(seq__14146_15565__$1);
var G__15575 = null;
var G__15576 = (0);
var G__15577 = (0);
seq__14146_15549 = G__15574;
chunk__14148_15550 = G__15575;
count__14149_15551 = G__15576;
i__14150_15552 = G__15577;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__14197){
var vec__14198 = p__14197;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14198,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14198,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__14225 = arguments.length;
switch (G__14225) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | 0))+"px");
});
shadow.dom.pct = (function shadow$dom$pct(value){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)+"%");
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__14272 = cljs.core.seq(style_keys);
var chunk__14273 = null;
var count__14274 = (0);
var i__14275 = (0);
while(true){
if((i__14275 < count__14274)){
var it = chunk__14273.cljs$core$IIndexed$_nth$arity$2(null,i__14275);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__15596 = seq__14272;
var G__15597 = chunk__14273;
var G__15598 = count__14274;
var G__15599 = (i__14275 + (1));
seq__14272 = G__15596;
chunk__14273 = G__15597;
count__14274 = G__15598;
i__14275 = G__15599;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__14272);
if(temp__5823__auto__){
var seq__14272__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14272__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__14272__$1);
var G__15610 = cljs.core.chunk_rest(seq__14272__$1);
var G__15611 = c__5673__auto__;
var G__15612 = cljs.core.count(c__5673__auto__);
var G__15613 = (0);
seq__14272 = G__15610;
chunk__14273 = G__15611;
count__14274 = G__15612;
i__14275 = G__15613;
continue;
} else {
var it = cljs.core.first(seq__14272__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__15623 = cljs.core.next(seq__14272__$1);
var G__15624 = null;
var G__15625 = (0);
var G__15626 = (0);
seq__14272 = G__15623;
chunk__14273 = G__15624;
count__14274 = G__15625;
i__14275 = G__15626;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5448__auto__,k__5449__auto__){
var self__ = this;
var this__5448__auto____$1 = this;
return this__5448__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5449__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5450__auto__,k14298,else__5451__auto__){
var self__ = this;
var this__5450__auto____$1 = this;
var G__14366 = k14298;
var G__14366__$1 = (((G__14366 instanceof cljs.core.Keyword))?G__14366.fqn:null);
switch (G__14366__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k14298,else__5451__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5468__auto__,f__5469__auto__,init__5470__auto__){
var self__ = this;
var this__5468__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5471__auto__,p__14372){
var vec__14373 = p__14372;
var k__5472__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14373,(0),null);
var v__5473__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14373,(1),null);
return (f__5469__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5469__auto__.cljs$core$IFn$_invoke$arity$3(ret__5471__auto__,k__5472__auto__,v__5473__auto__) : f__5469__auto__.call(null,ret__5471__auto__,k__5472__auto__,v__5473__auto__));
}),init__5470__auto__,this__5468__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5463__auto__,writer__5464__auto__,opts__5465__auto__){
var self__ = this;
var this__5463__auto____$1 = this;
var pr_pair__5466__auto__ = (function (keyval__5467__auto__){
return cljs.core.pr_sequential_writer(writer__5464__auto__,cljs.core.pr_writer,""," ","",opts__5465__auto__,keyval__5467__auto__);
});
return cljs.core.pr_sequential_writer(writer__5464__auto__,pr_pair__5466__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5465__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__14297){
var self__ = this;
var G__14297__$1 = this;
return (new cljs.core.RecordIter((0),G__14297__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5446__auto__){
var self__ = this;
var this__5446__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5443__auto__){
var self__ = this;
var this__5443__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5452__auto__){
var self__ = this;
var this__5452__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5444__auto__){
var self__ = this;
var this__5444__auto____$1 = this;
var h__5251__auto__ = self__.__hash;
if((!((h__5251__auto__ == null)))){
return h__5251__auto__;
} else {
var h__5251__auto____$1 = (function (coll__5445__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5445__auto__));
})(this__5444__auto____$1);
(self__.__hash = h__5251__auto____$1);

return h__5251__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this14299,other14300){
var self__ = this;
var this14299__$1 = this;
return (((!((other14300 == null)))) && ((((this14299__$1.constructor === other14300.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14299__$1.x,other14300.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14299__$1.y,other14300.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14299__$1.__extmap,other14300.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5458__auto__,k__5459__auto__){
var self__ = this;
var this__5458__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5459__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5458__auto____$1),self__.__meta),k__5459__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5459__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5455__auto__,k14298){
var self__ = this;
var this__5455__auto____$1 = this;
var G__14470 = k14298;
var G__14470__$1 = (((G__14470 instanceof cljs.core.Keyword))?G__14470.fqn:null);
switch (G__14470__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k14298);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5456__auto__,k__5457__auto__,G__14297){
var self__ = this;
var this__5456__auto____$1 = this;
var pred__14474 = cljs.core.keyword_identical_QMARK_;
var expr__14475 = k__5457__auto__;
if(cljs.core.truth_((pred__14474.cljs$core$IFn$_invoke$arity$2 ? pred__14474.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__14475) : pred__14474.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__14475)))){
return (new shadow.dom.Coordinate(G__14297,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__14474.cljs$core$IFn$_invoke$arity$2 ? pred__14474.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__14475) : pred__14474.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__14475)))){
return (new shadow.dom.Coordinate(self__.x,G__14297,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5457__auto__,G__14297),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5461__auto__){
var self__ = this;
var this__5461__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5447__auto__,G__14297){
var self__ = this;
var this__5447__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__14297,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5453__auto__,entry__5454__auto__){
var self__ = this;
var this__5453__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5454__auto__)){
return this__5453__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5454__auto__,(0)),cljs.core._nth(entry__5454__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5453__auto____$1,entry__5454__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5494__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5494__auto__,writer__5495__auto__){
return cljs.core._write(writer__5495__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__14335){
var extmap__5490__auto__ = (function (){var G__14507 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__14335,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__14335)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__14507);
} else {
return G__14507;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__14335),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__14335),null,cljs.core.not_empty(extmap__5490__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5448__auto__,k__5449__auto__){
var self__ = this;
var this__5448__auto____$1 = this;
return this__5448__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5449__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5450__auto__,k14541,else__5451__auto__){
var self__ = this;
var this__5450__auto____$1 = this;
var G__14554 = k14541;
var G__14554__$1 = (((G__14554 instanceof cljs.core.Keyword))?G__14554.fqn:null);
switch (G__14554__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k14541,else__5451__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5468__auto__,f__5469__auto__,init__5470__auto__){
var self__ = this;
var this__5468__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5471__auto__,p__14565){
var vec__14567 = p__14565;
var k__5472__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14567,(0),null);
var v__5473__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14567,(1),null);
return (f__5469__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5469__auto__.cljs$core$IFn$_invoke$arity$3(ret__5471__auto__,k__5472__auto__,v__5473__auto__) : f__5469__auto__.call(null,ret__5471__auto__,k__5472__auto__,v__5473__auto__));
}),init__5470__auto__,this__5468__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5463__auto__,writer__5464__auto__,opts__5465__auto__){
var self__ = this;
var this__5463__auto____$1 = this;
var pr_pair__5466__auto__ = (function (keyval__5467__auto__){
return cljs.core.pr_sequential_writer(writer__5464__auto__,cljs.core.pr_writer,""," ","",opts__5465__auto__,keyval__5467__auto__);
});
return cljs.core.pr_sequential_writer(writer__5464__auto__,pr_pair__5466__auto__,"#shadow.dom.Size{",", ","}",opts__5465__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__14540){
var self__ = this;
var G__14540__$1 = this;
return (new cljs.core.RecordIter((0),G__14540__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5446__auto__){
var self__ = this;
var this__5446__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5443__auto__){
var self__ = this;
var this__5443__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5452__auto__){
var self__ = this;
var this__5452__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5444__auto__){
var self__ = this;
var this__5444__auto____$1 = this;
var h__5251__auto__ = self__.__hash;
if((!((h__5251__auto__ == null)))){
return h__5251__auto__;
} else {
var h__5251__auto____$1 = (function (coll__5445__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5445__auto__));
})(this__5444__auto____$1);
(self__.__hash = h__5251__auto____$1);

return h__5251__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this14542,other14543){
var self__ = this;
var this14542__$1 = this;
return (((!((other14543 == null)))) && ((((this14542__$1.constructor === other14543.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14542__$1.w,other14543.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14542__$1.h,other14543.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14542__$1.__extmap,other14543.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5458__auto__,k__5459__auto__){
var self__ = this;
var this__5458__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5459__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5458__auto____$1),self__.__meta),k__5459__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5459__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5455__auto__,k14541){
var self__ = this;
var this__5455__auto____$1 = this;
var G__14600 = k14541;
var G__14600__$1 = (((G__14600 instanceof cljs.core.Keyword))?G__14600.fqn:null);
switch (G__14600__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k14541);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5456__auto__,k__5457__auto__,G__14540){
var self__ = this;
var this__5456__auto____$1 = this;
var pred__14601 = cljs.core.keyword_identical_QMARK_;
var expr__14602 = k__5457__auto__;
if(cljs.core.truth_((pred__14601.cljs$core$IFn$_invoke$arity$2 ? pred__14601.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__14602) : pred__14601.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__14602)))){
return (new shadow.dom.Size(G__14540,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__14601.cljs$core$IFn$_invoke$arity$2 ? pred__14601.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__14602) : pred__14601.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__14602)))){
return (new shadow.dom.Size(self__.w,G__14540,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5457__auto__,G__14540),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5461__auto__){
var self__ = this;
var this__5461__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5447__auto__,G__14540){
var self__ = this;
var this__5447__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__14540,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5453__auto__,entry__5454__auto__){
var self__ = this;
var this__5453__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5454__auto__)){
return this__5453__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5454__auto__,(0)),cljs.core._nth(entry__5454__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5453__auto____$1,entry__5454__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5494__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5494__auto__,writer__5495__auto__){
return cljs.core._write(writer__5495__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__14548){
var extmap__5490__auto__ = (function (){var G__14638 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__14548,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__14548)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__14638);
} else {
return G__14638;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__14548),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__14548),null,cljs.core.not_empty(extmap__5490__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5738__auto__ = opts;
var l__5739__auto__ = a__5738__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5739__auto__)){
var G__15692 = (i + (1));
var G__15693 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__15692;
ret = G__15693;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__14717){
var vec__14718 = p__14717;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14718,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14718,(1),null);
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k))+"="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))));
}),query_params))));
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__14734 = arguments.length;
switch (G__14734) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5821__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5821__auto__)){
var child = temp__5821__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__15705 = ps;
var G__15706 = (i + (1));
el__$1 = G__15705;
i = G__15706;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__14803 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14803,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14803,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14803,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__14808_15710 = cljs.core.seq(props);
var chunk__14809_15711 = null;
var count__14810_15712 = (0);
var i__14811_15713 = (0);
while(true){
if((i__14811_15713 < count__14810_15712)){
var vec__14839_15714 = chunk__14809_15711.cljs$core$IIndexed$_nth$arity$2(null,i__14811_15713);
var k_15715 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14839_15714,(0),null);
var v_15716 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14839_15714,(1),null);
el.setAttributeNS((function (){var temp__5823__auto__ = cljs.core.namespace(k_15715);
if(cljs.core.truth_(temp__5823__auto__)){
var ns = temp__5823__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_15715),v_15716);


var G__15717 = seq__14808_15710;
var G__15718 = chunk__14809_15711;
var G__15719 = count__14810_15712;
var G__15720 = (i__14811_15713 + (1));
seq__14808_15710 = G__15717;
chunk__14809_15711 = G__15718;
count__14810_15712 = G__15719;
i__14811_15713 = G__15720;
continue;
} else {
var temp__5823__auto___15721 = cljs.core.seq(seq__14808_15710);
if(temp__5823__auto___15721){
var seq__14808_15722__$1 = temp__5823__auto___15721;
if(cljs.core.chunked_seq_QMARK_(seq__14808_15722__$1)){
var c__5673__auto___15723 = cljs.core.chunk_first(seq__14808_15722__$1);
var G__15724 = cljs.core.chunk_rest(seq__14808_15722__$1);
var G__15725 = c__5673__auto___15723;
var G__15726 = cljs.core.count(c__5673__auto___15723);
var G__15727 = (0);
seq__14808_15710 = G__15724;
chunk__14809_15711 = G__15725;
count__14810_15712 = G__15726;
i__14811_15713 = G__15727;
continue;
} else {
var vec__14848_15728 = cljs.core.first(seq__14808_15722__$1);
var k_15729 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14848_15728,(0),null);
var v_15730 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14848_15728,(1),null);
el.setAttributeNS((function (){var temp__5823__auto____$1 = cljs.core.namespace(k_15729);
if(cljs.core.truth_(temp__5823__auto____$1)){
var ns = temp__5823__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_15729),v_15730);


var G__15735 = cljs.core.next(seq__14808_15722__$1);
var G__15736 = null;
var G__15737 = (0);
var G__15738 = (0);
seq__14808_15710 = G__15735;
chunk__14809_15711 = G__15736;
count__14810_15712 = G__15737;
i__14811_15713 = G__15738;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__14871 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14871,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14871,(1),null);
var seq__14876_15741 = cljs.core.seq(node_children);
var chunk__14878_15742 = null;
var count__14879_15743 = (0);
var i__14880_15744 = (0);
while(true){
if((i__14880_15744 < count__14879_15743)){
var child_struct_15745 = chunk__14878_15742.cljs$core$IIndexed$_nth$arity$2(null,i__14880_15744);
if((!((child_struct_15745 == null)))){
if(typeof child_struct_15745 === 'string'){
var text_15746 = (node["textContent"]);
(node["textContent"] = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_15746)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(child_struct_15745)));
} else {
var children_15747 = shadow.dom.svg_node(child_struct_15745);
if(cljs.core.seq_QMARK_(children_15747)){
var seq__14974_15748 = cljs.core.seq(children_15747);
var chunk__14976_15749 = null;
var count__14977_15750 = (0);
var i__14978_15751 = (0);
while(true){
if((i__14978_15751 < count__14977_15750)){
var child_15754 = chunk__14976_15749.cljs$core$IIndexed$_nth$arity$2(null,i__14978_15751);
if(cljs.core.truth_(child_15754)){
node.appendChild(child_15754);


var G__15755 = seq__14974_15748;
var G__15756 = chunk__14976_15749;
var G__15757 = count__14977_15750;
var G__15758 = (i__14978_15751 + (1));
seq__14974_15748 = G__15755;
chunk__14976_15749 = G__15756;
count__14977_15750 = G__15757;
i__14978_15751 = G__15758;
continue;
} else {
var G__15759 = seq__14974_15748;
var G__15760 = chunk__14976_15749;
var G__15761 = count__14977_15750;
var G__15762 = (i__14978_15751 + (1));
seq__14974_15748 = G__15759;
chunk__14976_15749 = G__15760;
count__14977_15750 = G__15761;
i__14978_15751 = G__15762;
continue;
}
} else {
var temp__5823__auto___15763 = cljs.core.seq(seq__14974_15748);
if(temp__5823__auto___15763){
var seq__14974_15764__$1 = temp__5823__auto___15763;
if(cljs.core.chunked_seq_QMARK_(seq__14974_15764__$1)){
var c__5673__auto___15767 = cljs.core.chunk_first(seq__14974_15764__$1);
var G__15768 = cljs.core.chunk_rest(seq__14974_15764__$1);
var G__15769 = c__5673__auto___15767;
var G__15770 = cljs.core.count(c__5673__auto___15767);
var G__15771 = (0);
seq__14974_15748 = G__15768;
chunk__14976_15749 = G__15769;
count__14977_15750 = G__15770;
i__14978_15751 = G__15771;
continue;
} else {
var child_15772 = cljs.core.first(seq__14974_15764__$1);
if(cljs.core.truth_(child_15772)){
node.appendChild(child_15772);


var G__15773 = cljs.core.next(seq__14974_15764__$1);
var G__15774 = null;
var G__15775 = (0);
var G__15776 = (0);
seq__14974_15748 = G__15773;
chunk__14976_15749 = G__15774;
count__14977_15750 = G__15775;
i__14978_15751 = G__15776;
continue;
} else {
var G__15777 = cljs.core.next(seq__14974_15764__$1);
var G__15778 = null;
var G__15779 = (0);
var G__15780 = (0);
seq__14974_15748 = G__15777;
chunk__14976_15749 = G__15778;
count__14977_15750 = G__15779;
i__14978_15751 = G__15780;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_15747);
}
}


var G__15781 = seq__14876_15741;
var G__15782 = chunk__14878_15742;
var G__15783 = count__14879_15743;
var G__15784 = (i__14880_15744 + (1));
seq__14876_15741 = G__15781;
chunk__14878_15742 = G__15782;
count__14879_15743 = G__15783;
i__14880_15744 = G__15784;
continue;
} else {
var G__15785 = seq__14876_15741;
var G__15786 = chunk__14878_15742;
var G__15787 = count__14879_15743;
var G__15788 = (i__14880_15744 + (1));
seq__14876_15741 = G__15785;
chunk__14878_15742 = G__15786;
count__14879_15743 = G__15787;
i__14880_15744 = G__15788;
continue;
}
} else {
var temp__5823__auto___15789 = cljs.core.seq(seq__14876_15741);
if(temp__5823__auto___15789){
var seq__14876_15790__$1 = temp__5823__auto___15789;
if(cljs.core.chunked_seq_QMARK_(seq__14876_15790__$1)){
var c__5673__auto___15792 = cljs.core.chunk_first(seq__14876_15790__$1);
var G__15793 = cljs.core.chunk_rest(seq__14876_15790__$1);
var G__15794 = c__5673__auto___15792;
var G__15795 = cljs.core.count(c__5673__auto___15792);
var G__15796 = (0);
seq__14876_15741 = G__15793;
chunk__14878_15742 = G__15794;
count__14879_15743 = G__15795;
i__14880_15744 = G__15796;
continue;
} else {
var child_struct_15797 = cljs.core.first(seq__14876_15790__$1);
if((!((child_struct_15797 == null)))){
if(typeof child_struct_15797 === 'string'){
var text_15798 = (node["textContent"]);
(node["textContent"] = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_15798)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(child_struct_15797)));
} else {
var children_15799 = shadow.dom.svg_node(child_struct_15797);
if(cljs.core.seq_QMARK_(children_15799)){
var seq__15007_15800 = cljs.core.seq(children_15799);
var chunk__15009_15801 = null;
var count__15010_15802 = (0);
var i__15011_15803 = (0);
while(true){
if((i__15011_15803 < count__15010_15802)){
var child_15804 = chunk__15009_15801.cljs$core$IIndexed$_nth$arity$2(null,i__15011_15803);
if(cljs.core.truth_(child_15804)){
node.appendChild(child_15804);


var G__15805 = seq__15007_15800;
var G__15806 = chunk__15009_15801;
var G__15807 = count__15010_15802;
var G__15808 = (i__15011_15803 + (1));
seq__15007_15800 = G__15805;
chunk__15009_15801 = G__15806;
count__15010_15802 = G__15807;
i__15011_15803 = G__15808;
continue;
} else {
var G__15810 = seq__15007_15800;
var G__15811 = chunk__15009_15801;
var G__15812 = count__15010_15802;
var G__15813 = (i__15011_15803 + (1));
seq__15007_15800 = G__15810;
chunk__15009_15801 = G__15811;
count__15010_15802 = G__15812;
i__15011_15803 = G__15813;
continue;
}
} else {
var temp__5823__auto___15814__$1 = cljs.core.seq(seq__15007_15800);
if(temp__5823__auto___15814__$1){
var seq__15007_15818__$1 = temp__5823__auto___15814__$1;
if(cljs.core.chunked_seq_QMARK_(seq__15007_15818__$1)){
var c__5673__auto___15822 = cljs.core.chunk_first(seq__15007_15818__$1);
var G__15824 = cljs.core.chunk_rest(seq__15007_15818__$1);
var G__15825 = c__5673__auto___15822;
var G__15826 = cljs.core.count(c__5673__auto___15822);
var G__15827 = (0);
seq__15007_15800 = G__15824;
chunk__15009_15801 = G__15825;
count__15010_15802 = G__15826;
i__15011_15803 = G__15827;
continue;
} else {
var child_15832 = cljs.core.first(seq__15007_15818__$1);
if(cljs.core.truth_(child_15832)){
node.appendChild(child_15832);


var G__15833 = cljs.core.next(seq__15007_15818__$1);
var G__15834 = null;
var G__15835 = (0);
var G__15836 = (0);
seq__15007_15800 = G__15833;
chunk__15009_15801 = G__15834;
count__15010_15802 = G__15835;
i__15011_15803 = G__15836;
continue;
} else {
var G__15837 = cljs.core.next(seq__15007_15818__$1);
var G__15838 = null;
var G__15839 = (0);
var G__15840 = (0);
seq__15007_15800 = G__15837;
chunk__15009_15801 = G__15838;
count__15010_15802 = G__15839;
i__15011_15803 = G__15840;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_15799);
}
}


var G__15841 = cljs.core.next(seq__14876_15790__$1);
var G__15842 = null;
var G__15843 = (0);
var G__15844 = (0);
seq__14876_15741 = G__15841;
chunk__14878_15742 = G__15842;
count__14879_15743 = G__15843;
i__14880_15744 = G__15844;
continue;
} else {
var G__15845 = cljs.core.next(seq__14876_15790__$1);
var G__15846 = null;
var G__15847 = (0);
var G__15848 = (0);
seq__14876_15741 = G__15845;
chunk__14878_15742 = G__15846;
count__14879_15743 = G__15847;
i__14880_15744 = G__15848;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5882__auto__ = [];
var len__5876__auto___15850 = arguments.length;
var i__5877__auto___15851 = (0);
while(true){
if((i__5877__auto___15851 < len__5876__auto___15850)){
args__5882__auto__.push((arguments[i__5877__auto___15851]));

var G__15853 = (i__5877__auto___15851 + (1));
i__5877__auto___15851 = G__15853;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((1) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5883__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq15091){
var G__15092 = cljs.core.first(seq15091);
var seq15091__$1 = cljs.core.next(seq15091);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15092,seq15091__$1);
}));


//# sourceMappingURL=shadow.dom.js.map
