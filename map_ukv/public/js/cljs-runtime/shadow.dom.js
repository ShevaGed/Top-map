goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = true;

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_13256 = (function (this$){
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
return shadow$dom$IElement$_to_dom$dyn_13256(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_13263 = (function (this$){
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
return shadow$dom$SVGElement$_to_svg$dyn_13263(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__11759 = coll;
var G__11760 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__11759,G__11760) : shadow.dom.lazy_native_coll_seq.call(null,G__11759,G__11760));
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
var G__11811 = arguments.length;
switch (G__11811) {
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
var G__11822 = arguments.length;
switch (G__11822) {
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
var G__11832 = arguments.length;
switch (G__11832) {
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
var G__11858 = arguments.length;
switch (G__11858) {
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
var G__11890 = arguments.length;
switch (G__11890) {
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
var G__11917 = arguments.length;
switch (G__11917) {
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
}catch (e11957){if((e11957 instanceof Object)){
var e = e11957;
return console.log("didnt support attachEvent",el,e);
} else {
throw e11957;

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
var seq__11973 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__11974 = null;
var count__11975 = (0);
var i__11976 = (0);
while(true){
if((i__11976 < count__11975)){
var el = chunk__11974.cljs$core$IIndexed$_nth$arity$2(null,i__11976);
var handler_13494__$1 = ((function (seq__11973,chunk__11974,count__11975,i__11976,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__11973,chunk__11974,count__11975,i__11976,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_13494__$1);


var G__13496 = seq__11973;
var G__13497 = chunk__11974;
var G__13498 = count__11975;
var G__13499 = (i__11976 + (1));
seq__11973 = G__13496;
chunk__11974 = G__13497;
count__11975 = G__13498;
i__11976 = G__13499;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__11973);
if(temp__5823__auto__){
var seq__11973__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11973__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__11973__$1);
var G__13500 = cljs.core.chunk_rest(seq__11973__$1);
var G__13501 = c__5673__auto__;
var G__13502 = cljs.core.count(c__5673__auto__);
var G__13503 = (0);
seq__11973 = G__13500;
chunk__11974 = G__13501;
count__11975 = G__13502;
i__11976 = G__13503;
continue;
} else {
var el = cljs.core.first(seq__11973__$1);
var handler_13506__$1 = ((function (seq__11973,chunk__11974,count__11975,i__11976,el,seq__11973__$1,temp__5823__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__11973,chunk__11974,count__11975,i__11976,el,seq__11973__$1,temp__5823__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_13506__$1);


var G__13507 = cljs.core.next(seq__11973__$1);
var G__13508 = null;
var G__13509 = (0);
var G__13510 = (0);
seq__11973 = G__13507;
chunk__11974 = G__13508;
count__11975 = G__13509;
i__11976 = G__13510;
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
var G__12017 = arguments.length;
switch (G__12017) {
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
var seq__12052 = cljs.core.seq(events);
var chunk__12053 = null;
var count__12054 = (0);
var i__12055 = (0);
while(true){
if((i__12055 < count__12054)){
var vec__12067 = chunk__12053.cljs$core$IIndexed$_nth$arity$2(null,i__12055);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12067,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12067,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__13560 = seq__12052;
var G__13561 = chunk__12053;
var G__13562 = count__12054;
var G__13563 = (i__12055 + (1));
seq__12052 = G__13560;
chunk__12053 = G__13561;
count__12054 = G__13562;
i__12055 = G__13563;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__12052);
if(temp__5823__auto__){
var seq__12052__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12052__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__12052__$1);
var G__13569 = cljs.core.chunk_rest(seq__12052__$1);
var G__13570 = c__5673__auto__;
var G__13571 = cljs.core.count(c__5673__auto__);
var G__13572 = (0);
seq__12052 = G__13569;
chunk__12053 = G__13570;
count__12054 = G__13571;
i__12055 = G__13572;
continue;
} else {
var vec__12082 = cljs.core.first(seq__12052__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12082,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12082,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__13573 = cljs.core.next(seq__12052__$1);
var G__13574 = null;
var G__13575 = (0);
var G__13576 = (0);
seq__12052 = G__13573;
chunk__12053 = G__13574;
count__12054 = G__13575;
i__12055 = G__13576;
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
var seq__12094 = cljs.core.seq(styles);
var chunk__12095 = null;
var count__12096 = (0);
var i__12097 = (0);
while(true){
if((i__12097 < count__12096)){
var vec__12125 = chunk__12095.cljs$core$IIndexed$_nth$arity$2(null,i__12097);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12125,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12125,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__13584 = seq__12094;
var G__13585 = chunk__12095;
var G__13586 = count__12096;
var G__13587 = (i__12097 + (1));
seq__12094 = G__13584;
chunk__12095 = G__13585;
count__12096 = G__13586;
i__12097 = G__13587;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__12094);
if(temp__5823__auto__){
var seq__12094__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12094__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__12094__$1);
var G__13588 = cljs.core.chunk_rest(seq__12094__$1);
var G__13589 = c__5673__auto__;
var G__13590 = cljs.core.count(c__5673__auto__);
var G__13591 = (0);
seq__12094 = G__13588;
chunk__12095 = G__13589;
count__12096 = G__13590;
i__12097 = G__13591;
continue;
} else {
var vec__12141 = cljs.core.first(seq__12094__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12141,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12141,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__13594 = cljs.core.next(seq__12094__$1);
var G__13595 = null;
var G__13596 = (0);
var G__13597 = (0);
seq__12094 = G__13594;
chunk__12095 = G__13595;
count__12096 = G__13596;
i__12097 = G__13597;
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
var G__12152_13599 = key;
var G__12152_13600__$1 = (((G__12152_13599 instanceof cljs.core.Keyword))?G__12152_13599.fqn:null);
switch (G__12152_13600__$1) {
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
var ks_13614 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5142__auto__ = goog.string.startsWith(ks_13614,"data-");
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return goog.string.startsWith(ks_13614,"aria-");
}
})())){
el.setAttribute(ks_13614,value);
} else {
(el[ks_13614] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__12231){
var map__12233 = p__12231;
var map__12233__$1 = cljs.core.__destructure_map(map__12233);
var props = map__12233__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12233__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__12235 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12235,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12235,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12235,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__12241 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__12241,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__12241;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__12245 = arguments.length;
switch (G__12245) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__12257){
var vec__12260 = p__12257;
var seq__12261 = cljs.core.seq(vec__12260);
var first__12262 = cljs.core.first(seq__12261);
var seq__12261__$1 = cljs.core.next(seq__12261);
var nn = first__12262;
var first__12262__$1 = cljs.core.first(seq__12261__$1);
var seq__12261__$2 = cljs.core.next(seq__12261__$1);
var np = first__12262__$1;
var nc = seq__12261__$2;
var node = vec__12260;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__12265 = nn;
var G__12266 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__12265,G__12266) : create_fn.call(null,G__12265,G__12266));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__12276 = nn;
var G__12277 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__12276,G__12277) : create_fn.call(null,G__12276,G__12277));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__12279 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12279,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12279,(1),null);
var seq__12283_13667 = cljs.core.seq(node_children);
var chunk__12284_13668 = null;
var count__12285_13669 = (0);
var i__12286_13670 = (0);
while(true){
if((i__12286_13670 < count__12285_13669)){
var child_struct_13671 = chunk__12284_13668.cljs$core$IIndexed$_nth$arity$2(null,i__12286_13670);
var children_13672 = shadow.dom.dom_node(child_struct_13671);
if(cljs.core.seq_QMARK_(children_13672)){
var seq__12345_13673 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_13672));
var chunk__12347_13674 = null;
var count__12348_13675 = (0);
var i__12349_13676 = (0);
while(true){
if((i__12349_13676 < count__12348_13675)){
var child_13679 = chunk__12347_13674.cljs$core$IIndexed$_nth$arity$2(null,i__12349_13676);
if(cljs.core.truth_(child_13679)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_13679);


var G__13681 = seq__12345_13673;
var G__13682 = chunk__12347_13674;
var G__13683 = count__12348_13675;
var G__13684 = (i__12349_13676 + (1));
seq__12345_13673 = G__13681;
chunk__12347_13674 = G__13682;
count__12348_13675 = G__13683;
i__12349_13676 = G__13684;
continue;
} else {
var G__13685 = seq__12345_13673;
var G__13686 = chunk__12347_13674;
var G__13687 = count__12348_13675;
var G__13688 = (i__12349_13676 + (1));
seq__12345_13673 = G__13685;
chunk__12347_13674 = G__13686;
count__12348_13675 = G__13687;
i__12349_13676 = G__13688;
continue;
}
} else {
var temp__5823__auto___13689 = cljs.core.seq(seq__12345_13673);
if(temp__5823__auto___13689){
var seq__12345_13691__$1 = temp__5823__auto___13689;
if(cljs.core.chunked_seq_QMARK_(seq__12345_13691__$1)){
var c__5673__auto___13694 = cljs.core.chunk_first(seq__12345_13691__$1);
var G__13695 = cljs.core.chunk_rest(seq__12345_13691__$1);
var G__13696 = c__5673__auto___13694;
var G__13697 = cljs.core.count(c__5673__auto___13694);
var G__13698 = (0);
seq__12345_13673 = G__13695;
chunk__12347_13674 = G__13696;
count__12348_13675 = G__13697;
i__12349_13676 = G__13698;
continue;
} else {
var child_13700 = cljs.core.first(seq__12345_13691__$1);
if(cljs.core.truth_(child_13700)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_13700);


var G__13702 = cljs.core.next(seq__12345_13691__$1);
var G__13703 = null;
var G__13704 = (0);
var G__13705 = (0);
seq__12345_13673 = G__13702;
chunk__12347_13674 = G__13703;
count__12348_13675 = G__13704;
i__12349_13676 = G__13705;
continue;
} else {
var G__13706 = cljs.core.next(seq__12345_13691__$1);
var G__13707 = null;
var G__13708 = (0);
var G__13709 = (0);
seq__12345_13673 = G__13706;
chunk__12347_13674 = G__13707;
count__12348_13675 = G__13708;
i__12349_13676 = G__13709;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_13672);
}


var G__13710 = seq__12283_13667;
var G__13711 = chunk__12284_13668;
var G__13712 = count__12285_13669;
var G__13713 = (i__12286_13670 + (1));
seq__12283_13667 = G__13710;
chunk__12284_13668 = G__13711;
count__12285_13669 = G__13712;
i__12286_13670 = G__13713;
continue;
} else {
var temp__5823__auto___13715 = cljs.core.seq(seq__12283_13667);
if(temp__5823__auto___13715){
var seq__12283_13716__$1 = temp__5823__auto___13715;
if(cljs.core.chunked_seq_QMARK_(seq__12283_13716__$1)){
var c__5673__auto___13717 = cljs.core.chunk_first(seq__12283_13716__$1);
var G__13718 = cljs.core.chunk_rest(seq__12283_13716__$1);
var G__13719 = c__5673__auto___13717;
var G__13720 = cljs.core.count(c__5673__auto___13717);
var G__13721 = (0);
seq__12283_13667 = G__13718;
chunk__12284_13668 = G__13719;
count__12285_13669 = G__13720;
i__12286_13670 = G__13721;
continue;
} else {
var child_struct_13724 = cljs.core.first(seq__12283_13716__$1);
var children_13726 = shadow.dom.dom_node(child_struct_13724);
if(cljs.core.seq_QMARK_(children_13726)){
var seq__12360_13733 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_13726));
var chunk__12362_13734 = null;
var count__12363_13735 = (0);
var i__12364_13736 = (0);
while(true){
if((i__12364_13736 < count__12363_13735)){
var child_13739 = chunk__12362_13734.cljs$core$IIndexed$_nth$arity$2(null,i__12364_13736);
if(cljs.core.truth_(child_13739)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_13739);


var G__13740 = seq__12360_13733;
var G__13741 = chunk__12362_13734;
var G__13742 = count__12363_13735;
var G__13744 = (i__12364_13736 + (1));
seq__12360_13733 = G__13740;
chunk__12362_13734 = G__13741;
count__12363_13735 = G__13742;
i__12364_13736 = G__13744;
continue;
} else {
var G__13746 = seq__12360_13733;
var G__13747 = chunk__12362_13734;
var G__13748 = count__12363_13735;
var G__13749 = (i__12364_13736 + (1));
seq__12360_13733 = G__13746;
chunk__12362_13734 = G__13747;
count__12363_13735 = G__13748;
i__12364_13736 = G__13749;
continue;
}
} else {
var temp__5823__auto___13750__$1 = cljs.core.seq(seq__12360_13733);
if(temp__5823__auto___13750__$1){
var seq__12360_13752__$1 = temp__5823__auto___13750__$1;
if(cljs.core.chunked_seq_QMARK_(seq__12360_13752__$1)){
var c__5673__auto___13753 = cljs.core.chunk_first(seq__12360_13752__$1);
var G__13754 = cljs.core.chunk_rest(seq__12360_13752__$1);
var G__13755 = c__5673__auto___13753;
var G__13756 = cljs.core.count(c__5673__auto___13753);
var G__13757 = (0);
seq__12360_13733 = G__13754;
chunk__12362_13734 = G__13755;
count__12363_13735 = G__13756;
i__12364_13736 = G__13757;
continue;
} else {
var child_13760 = cljs.core.first(seq__12360_13752__$1);
if(cljs.core.truth_(child_13760)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_13760);


var G__13761 = cljs.core.next(seq__12360_13752__$1);
var G__13762 = null;
var G__13763 = (0);
var G__13764 = (0);
seq__12360_13733 = G__13761;
chunk__12362_13734 = G__13762;
count__12363_13735 = G__13763;
i__12364_13736 = G__13764;
continue;
} else {
var G__13765 = cljs.core.next(seq__12360_13752__$1);
var G__13766 = null;
var G__13767 = (0);
var G__13768 = (0);
seq__12360_13733 = G__13765;
chunk__12362_13734 = G__13766;
count__12363_13735 = G__13767;
i__12364_13736 = G__13768;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_13726);
}


var G__13772 = cljs.core.next(seq__12283_13716__$1);
var G__13773 = null;
var G__13774 = (0);
var G__13775 = (0);
seq__12283_13667 = G__13772;
chunk__12284_13668 = G__13773;
count__12285_13669 = G__13774;
i__12286_13670 = G__13775;
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
var seq__12398 = cljs.core.seq(node);
var chunk__12399 = null;
var count__12400 = (0);
var i__12401 = (0);
while(true){
if((i__12401 < count__12400)){
var n = chunk__12399.cljs$core$IIndexed$_nth$arity$2(null,i__12401);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__13788 = seq__12398;
var G__13789 = chunk__12399;
var G__13790 = count__12400;
var G__13791 = (i__12401 + (1));
seq__12398 = G__13788;
chunk__12399 = G__13789;
count__12400 = G__13790;
i__12401 = G__13791;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__12398);
if(temp__5823__auto__){
var seq__12398__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12398__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__12398__$1);
var G__13797 = cljs.core.chunk_rest(seq__12398__$1);
var G__13798 = c__5673__auto__;
var G__13799 = cljs.core.count(c__5673__auto__);
var G__13800 = (0);
seq__12398 = G__13797;
chunk__12399 = G__13798;
count__12400 = G__13799;
i__12401 = G__13800;
continue;
} else {
var n = cljs.core.first(seq__12398__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__13803 = cljs.core.next(seq__12398__$1);
var G__13804 = null;
var G__13805 = (0);
var G__13806 = (0);
seq__12398 = G__13803;
chunk__12399 = G__13804;
count__12400 = G__13805;
i__12401 = G__13806;
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
var G__12426 = arguments.length;
switch (G__12426) {
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
var G__12436 = arguments.length;
switch (G__12436) {
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
var G__12465 = arguments.length;
switch (G__12465) {
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
var len__5876__auto___13854 = arguments.length;
var i__5877__auto___13855 = (0);
while(true){
if((i__5877__auto___13855 < len__5876__auto___13854)){
args__5882__auto__.push((arguments[i__5877__auto___13855]));

var G__13856 = (i__5877__auto___13855 + (1));
i__5877__auto___13855 = G__13856;
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
var seq__12503_13859 = cljs.core.seq(nodes);
var chunk__12504_13860 = null;
var count__12505_13861 = (0);
var i__12506_13862 = (0);
while(true){
if((i__12506_13862 < count__12505_13861)){
var node_13863 = chunk__12504_13860.cljs$core$IIndexed$_nth$arity$2(null,i__12506_13862);
fragment.appendChild(shadow.dom._to_dom(node_13863));


var G__13866 = seq__12503_13859;
var G__13867 = chunk__12504_13860;
var G__13868 = count__12505_13861;
var G__13869 = (i__12506_13862 + (1));
seq__12503_13859 = G__13866;
chunk__12504_13860 = G__13867;
count__12505_13861 = G__13868;
i__12506_13862 = G__13869;
continue;
} else {
var temp__5823__auto___13871 = cljs.core.seq(seq__12503_13859);
if(temp__5823__auto___13871){
var seq__12503_13872__$1 = temp__5823__auto___13871;
if(cljs.core.chunked_seq_QMARK_(seq__12503_13872__$1)){
var c__5673__auto___13873 = cljs.core.chunk_first(seq__12503_13872__$1);
var G__13874 = cljs.core.chunk_rest(seq__12503_13872__$1);
var G__13875 = c__5673__auto___13873;
var G__13876 = cljs.core.count(c__5673__auto___13873);
var G__13877 = (0);
seq__12503_13859 = G__13874;
chunk__12504_13860 = G__13875;
count__12505_13861 = G__13876;
i__12506_13862 = G__13877;
continue;
} else {
var node_13879 = cljs.core.first(seq__12503_13872__$1);
fragment.appendChild(shadow.dom._to_dom(node_13879));


var G__13880 = cljs.core.next(seq__12503_13872__$1);
var G__13881 = null;
var G__13882 = (0);
var G__13883 = (0);
seq__12503_13859 = G__13880;
chunk__12504_13860 = G__13881;
count__12505_13861 = G__13882;
i__12506_13862 = G__13883;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq12489){
var self__5862__auto__ = this;
return self__5862__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12489));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__12523_13892 = cljs.core.seq(scripts);
var chunk__12524_13893 = null;
var count__12525_13894 = (0);
var i__12526_13895 = (0);
while(true){
if((i__12526_13895 < count__12525_13894)){
var vec__12551_13896 = chunk__12524_13893.cljs$core$IIndexed$_nth$arity$2(null,i__12526_13895);
var script_tag_13897 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12551_13896,(0),null);
var script_body_13898 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12551_13896,(1),null);
eval(script_body_13898);


var G__13900 = seq__12523_13892;
var G__13901 = chunk__12524_13893;
var G__13902 = count__12525_13894;
var G__13903 = (i__12526_13895 + (1));
seq__12523_13892 = G__13900;
chunk__12524_13893 = G__13901;
count__12525_13894 = G__13902;
i__12526_13895 = G__13903;
continue;
} else {
var temp__5823__auto___13904 = cljs.core.seq(seq__12523_13892);
if(temp__5823__auto___13904){
var seq__12523_13905__$1 = temp__5823__auto___13904;
if(cljs.core.chunked_seq_QMARK_(seq__12523_13905__$1)){
var c__5673__auto___13908 = cljs.core.chunk_first(seq__12523_13905__$1);
var G__13909 = cljs.core.chunk_rest(seq__12523_13905__$1);
var G__13910 = c__5673__auto___13908;
var G__13911 = cljs.core.count(c__5673__auto___13908);
var G__13912 = (0);
seq__12523_13892 = G__13909;
chunk__12524_13893 = G__13910;
count__12525_13894 = G__13911;
i__12526_13895 = G__13912;
continue;
} else {
var vec__12556_13913 = cljs.core.first(seq__12523_13905__$1);
var script_tag_13914 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12556_13913,(0),null);
var script_body_13915 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12556_13913,(1),null);
eval(script_body_13915);


var G__13916 = cljs.core.next(seq__12523_13905__$1);
var G__13917 = null;
var G__13918 = (0);
var G__13919 = (0);
seq__12523_13892 = G__13916;
chunk__12524_13893 = G__13917;
count__12525_13894 = G__13918;
i__12526_13895 = G__13919;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__12562){
var vec__12563 = p__12562;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12563,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12563,(1),null);
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
var G__12580 = arguments.length;
switch (G__12580) {
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
var seq__12609 = cljs.core.seq(style_keys);
var chunk__12610 = null;
var count__12611 = (0);
var i__12612 = (0);
while(true){
if((i__12612 < count__12611)){
var it = chunk__12610.cljs$core$IIndexed$_nth$arity$2(null,i__12612);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__13935 = seq__12609;
var G__13936 = chunk__12610;
var G__13937 = count__12611;
var G__13938 = (i__12612 + (1));
seq__12609 = G__13935;
chunk__12610 = G__13936;
count__12611 = G__13937;
i__12612 = G__13938;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__12609);
if(temp__5823__auto__){
var seq__12609__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12609__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__12609__$1);
var G__13940 = cljs.core.chunk_rest(seq__12609__$1);
var G__13941 = c__5673__auto__;
var G__13942 = cljs.core.count(c__5673__auto__);
var G__13943 = (0);
seq__12609 = G__13940;
chunk__12610 = G__13941;
count__12611 = G__13942;
i__12612 = G__13943;
continue;
} else {
var it = cljs.core.first(seq__12609__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__13946 = cljs.core.next(seq__12609__$1);
var G__13947 = null;
var G__13948 = (0);
var G__13949 = (0);
seq__12609 = G__13946;
chunk__12610 = G__13947;
count__12611 = G__13948;
i__12612 = G__13949;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5450__auto__,k12626,else__5451__auto__){
var self__ = this;
var this__5450__auto____$1 = this;
var G__12649 = k12626;
var G__12649__$1 = (((G__12649 instanceof cljs.core.Keyword))?G__12649.fqn:null);
switch (G__12649__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k12626,else__5451__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5468__auto__,f__5469__auto__,init__5470__auto__){
var self__ = this;
var this__5468__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5471__auto__,p__12654){
var vec__12655 = p__12654;
var k__5472__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12655,(0),null);
var v__5473__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12655,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12625){
var self__ = this;
var G__12625__$1 = this;
return (new cljs.core.RecordIter((0),G__12625__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this12628,other12629){
var self__ = this;
var this12628__$1 = this;
return (((!((other12629 == null)))) && ((((this12628__$1.constructor === other12629.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12628__$1.x,other12629.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12628__$1.y,other12629.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12628__$1.__extmap,other12629.__extmap)))))))));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5455__auto__,k12626){
var self__ = this;
var this__5455__auto____$1 = this;
var G__12677 = k12626;
var G__12677__$1 = (((G__12677 instanceof cljs.core.Keyword))?G__12677.fqn:null);
switch (G__12677__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k12626);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5456__auto__,k__5457__auto__,G__12625){
var self__ = this;
var this__5456__auto____$1 = this;
var pred__12687 = cljs.core.keyword_identical_QMARK_;
var expr__12688 = k__5457__auto__;
if(cljs.core.truth_((pred__12687.cljs$core$IFn$_invoke$arity$2 ? pred__12687.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__12688) : pred__12687.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__12688)))){
return (new shadow.dom.Coordinate(G__12625,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__12687.cljs$core$IFn$_invoke$arity$2 ? pred__12687.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__12688) : pred__12687.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__12688)))){
return (new shadow.dom.Coordinate(self__.x,G__12625,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5457__auto__,G__12625),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5461__auto__){
var self__ = this;
var this__5461__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5447__auto__,G__12625){
var self__ = this;
var this__5447__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__12625,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__12643){
var extmap__5490__auto__ = (function (){var G__12698 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__12643,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__12643)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__12698);
} else {
return G__12698;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__12643),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__12643),null,cljs.core.not_empty(extmap__5490__auto__),null));
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5450__auto__,k12707,else__5451__auto__){
var self__ = this;
var this__5450__auto____$1 = this;
var G__12723 = k12707;
var G__12723__$1 = (((G__12723 instanceof cljs.core.Keyword))?G__12723.fqn:null);
switch (G__12723__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k12707,else__5451__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5468__auto__,f__5469__auto__,init__5470__auto__){
var self__ = this;
var this__5468__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5471__auto__,p__12726){
var vec__12727 = p__12726;
var k__5472__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12727,(0),null);
var v__5473__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12727,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12706){
var self__ = this;
var G__12706__$1 = this;
return (new cljs.core.RecordIter((0),G__12706__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this12708,other12709){
var self__ = this;
var this12708__$1 = this;
return (((!((other12709 == null)))) && ((((this12708__$1.constructor === other12709.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12708__$1.w,other12709.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12708__$1.h,other12709.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12708__$1.__extmap,other12709.__extmap)))))))));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5455__auto__,k12707){
var self__ = this;
var this__5455__auto____$1 = this;
var G__12744 = k12707;
var G__12744__$1 = (((G__12744 instanceof cljs.core.Keyword))?G__12744.fqn:null);
switch (G__12744__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k12707);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5456__auto__,k__5457__auto__,G__12706){
var self__ = this;
var this__5456__auto____$1 = this;
var pred__12746 = cljs.core.keyword_identical_QMARK_;
var expr__12747 = k__5457__auto__;
if(cljs.core.truth_((pred__12746.cljs$core$IFn$_invoke$arity$2 ? pred__12746.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__12747) : pred__12746.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__12747)))){
return (new shadow.dom.Size(G__12706,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__12746.cljs$core$IFn$_invoke$arity$2 ? pred__12746.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__12747) : pred__12746.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__12747)))){
return (new shadow.dom.Size(self__.w,G__12706,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5457__auto__,G__12706),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5461__auto__){
var self__ = this;
var this__5461__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5447__auto__,G__12706){
var self__ = this;
var this__5447__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__12706,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__12712){
var extmap__5490__auto__ = (function (){var G__12762 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__12712,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__12712)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__12762);
} else {
return G__12762;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__12712),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__12712),null,cljs.core.not_empty(extmap__5490__auto__),null));
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
var G__14058 = (i + (1));
var G__14059 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__14058;
ret = G__14059;
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
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__12790){
var vec__12791 = p__12790;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12791,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12791,(1),null);
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k))+"="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))));
}),query_params))));
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__12807 = arguments.length;
switch (G__12807) {
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
var G__14093 = ps;
var G__14094 = (i + (1));
el__$1 = G__14093;
i = G__14094;
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
var vec__12835 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12835,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12835,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12835,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__12839_14104 = cljs.core.seq(props);
var chunk__12840_14105 = null;
var count__12841_14106 = (0);
var i__12842_14107 = (0);
while(true){
if((i__12842_14107 < count__12841_14106)){
var vec__12861_14108 = chunk__12840_14105.cljs$core$IIndexed$_nth$arity$2(null,i__12842_14107);
var k_14109 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12861_14108,(0),null);
var v_14110 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12861_14108,(1),null);
el.setAttributeNS((function (){var temp__5823__auto__ = cljs.core.namespace(k_14109);
if(cljs.core.truth_(temp__5823__auto__)){
var ns = temp__5823__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_14109),v_14110);


var G__14113 = seq__12839_14104;
var G__14114 = chunk__12840_14105;
var G__14115 = count__12841_14106;
var G__14116 = (i__12842_14107 + (1));
seq__12839_14104 = G__14113;
chunk__12840_14105 = G__14114;
count__12841_14106 = G__14115;
i__12842_14107 = G__14116;
continue;
} else {
var temp__5823__auto___14121 = cljs.core.seq(seq__12839_14104);
if(temp__5823__auto___14121){
var seq__12839_14123__$1 = temp__5823__auto___14121;
if(cljs.core.chunked_seq_QMARK_(seq__12839_14123__$1)){
var c__5673__auto___14124 = cljs.core.chunk_first(seq__12839_14123__$1);
var G__14125 = cljs.core.chunk_rest(seq__12839_14123__$1);
var G__14126 = c__5673__auto___14124;
var G__14127 = cljs.core.count(c__5673__auto___14124);
var G__14128 = (0);
seq__12839_14104 = G__14125;
chunk__12840_14105 = G__14126;
count__12841_14106 = G__14127;
i__12842_14107 = G__14128;
continue;
} else {
var vec__12869_14130 = cljs.core.first(seq__12839_14123__$1);
var k_14131 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12869_14130,(0),null);
var v_14132 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12869_14130,(1),null);
el.setAttributeNS((function (){var temp__5823__auto____$1 = cljs.core.namespace(k_14131);
if(cljs.core.truth_(temp__5823__auto____$1)){
var ns = temp__5823__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_14131),v_14132);


var G__14143 = cljs.core.next(seq__12839_14123__$1);
var G__14144 = null;
var G__14145 = (0);
var G__14146 = (0);
seq__12839_14104 = G__14143;
chunk__12840_14105 = G__14144;
count__12841_14106 = G__14145;
i__12842_14107 = G__14146;
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
var vec__12890 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12890,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12890,(1),null);
var seq__12894_14150 = cljs.core.seq(node_children);
var chunk__12896_14151 = null;
var count__12897_14152 = (0);
var i__12898_14153 = (0);
while(true){
if((i__12898_14153 < count__12897_14152)){
var child_struct_14154 = chunk__12896_14151.cljs$core$IIndexed$_nth$arity$2(null,i__12898_14153);
if((!((child_struct_14154 == null)))){
if(typeof child_struct_14154 === 'string'){
var text_14155 = (node["textContent"]);
(node["textContent"] = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_14155)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(child_struct_14154)));
} else {
var children_14156 = shadow.dom.svg_node(child_struct_14154);
if(cljs.core.seq_QMARK_(children_14156)){
var seq__13063_14157 = cljs.core.seq(children_14156);
var chunk__13065_14158 = null;
var count__13066_14159 = (0);
var i__13067_14160 = (0);
while(true){
if((i__13067_14160 < count__13066_14159)){
var child_14162 = chunk__13065_14158.cljs$core$IIndexed$_nth$arity$2(null,i__13067_14160);
if(cljs.core.truth_(child_14162)){
node.appendChild(child_14162);


var G__14164 = seq__13063_14157;
var G__14165 = chunk__13065_14158;
var G__14166 = count__13066_14159;
var G__14167 = (i__13067_14160 + (1));
seq__13063_14157 = G__14164;
chunk__13065_14158 = G__14165;
count__13066_14159 = G__14166;
i__13067_14160 = G__14167;
continue;
} else {
var G__14170 = seq__13063_14157;
var G__14171 = chunk__13065_14158;
var G__14172 = count__13066_14159;
var G__14173 = (i__13067_14160 + (1));
seq__13063_14157 = G__14170;
chunk__13065_14158 = G__14171;
count__13066_14159 = G__14172;
i__13067_14160 = G__14173;
continue;
}
} else {
var temp__5823__auto___14176 = cljs.core.seq(seq__13063_14157);
if(temp__5823__auto___14176){
var seq__13063_14177__$1 = temp__5823__auto___14176;
if(cljs.core.chunked_seq_QMARK_(seq__13063_14177__$1)){
var c__5673__auto___14178 = cljs.core.chunk_first(seq__13063_14177__$1);
var G__14179 = cljs.core.chunk_rest(seq__13063_14177__$1);
var G__14180 = c__5673__auto___14178;
var G__14181 = cljs.core.count(c__5673__auto___14178);
var G__14182 = (0);
seq__13063_14157 = G__14179;
chunk__13065_14158 = G__14180;
count__13066_14159 = G__14181;
i__13067_14160 = G__14182;
continue;
} else {
var child_14183 = cljs.core.first(seq__13063_14177__$1);
if(cljs.core.truth_(child_14183)){
node.appendChild(child_14183);


var G__14184 = cljs.core.next(seq__13063_14177__$1);
var G__14185 = null;
var G__14186 = (0);
var G__14187 = (0);
seq__13063_14157 = G__14184;
chunk__13065_14158 = G__14185;
count__13066_14159 = G__14186;
i__13067_14160 = G__14187;
continue;
} else {
var G__14188 = cljs.core.next(seq__13063_14177__$1);
var G__14189 = null;
var G__14190 = (0);
var G__14191 = (0);
seq__13063_14157 = G__14188;
chunk__13065_14158 = G__14189;
count__13066_14159 = G__14190;
i__13067_14160 = G__14191;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_14156);
}
}


var G__14192 = seq__12894_14150;
var G__14193 = chunk__12896_14151;
var G__14194 = count__12897_14152;
var G__14195 = (i__12898_14153 + (1));
seq__12894_14150 = G__14192;
chunk__12896_14151 = G__14193;
count__12897_14152 = G__14194;
i__12898_14153 = G__14195;
continue;
} else {
var G__14196 = seq__12894_14150;
var G__14197 = chunk__12896_14151;
var G__14198 = count__12897_14152;
var G__14199 = (i__12898_14153 + (1));
seq__12894_14150 = G__14196;
chunk__12896_14151 = G__14197;
count__12897_14152 = G__14198;
i__12898_14153 = G__14199;
continue;
}
} else {
var temp__5823__auto___14200 = cljs.core.seq(seq__12894_14150);
if(temp__5823__auto___14200){
var seq__12894_14201__$1 = temp__5823__auto___14200;
if(cljs.core.chunked_seq_QMARK_(seq__12894_14201__$1)){
var c__5673__auto___14202 = cljs.core.chunk_first(seq__12894_14201__$1);
var G__14203 = cljs.core.chunk_rest(seq__12894_14201__$1);
var G__14204 = c__5673__auto___14202;
var G__14205 = cljs.core.count(c__5673__auto___14202);
var G__14206 = (0);
seq__12894_14150 = G__14203;
chunk__12896_14151 = G__14204;
count__12897_14152 = G__14205;
i__12898_14153 = G__14206;
continue;
} else {
var child_struct_14208 = cljs.core.first(seq__12894_14201__$1);
if((!((child_struct_14208 == null)))){
if(typeof child_struct_14208 === 'string'){
var text_14210 = (node["textContent"]);
(node["textContent"] = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_14210)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(child_struct_14208)));
} else {
var children_14213 = shadow.dom.svg_node(child_struct_14208);
if(cljs.core.seq_QMARK_(children_14213)){
var seq__13089_14214 = cljs.core.seq(children_14213);
var chunk__13091_14215 = null;
var count__13092_14216 = (0);
var i__13093_14217 = (0);
while(true){
if((i__13093_14217 < count__13092_14216)){
var child_14218 = chunk__13091_14215.cljs$core$IIndexed$_nth$arity$2(null,i__13093_14217);
if(cljs.core.truth_(child_14218)){
node.appendChild(child_14218);


var G__14222 = seq__13089_14214;
var G__14223 = chunk__13091_14215;
var G__14224 = count__13092_14216;
var G__14225 = (i__13093_14217 + (1));
seq__13089_14214 = G__14222;
chunk__13091_14215 = G__14223;
count__13092_14216 = G__14224;
i__13093_14217 = G__14225;
continue;
} else {
var G__14226 = seq__13089_14214;
var G__14227 = chunk__13091_14215;
var G__14228 = count__13092_14216;
var G__14229 = (i__13093_14217 + (1));
seq__13089_14214 = G__14226;
chunk__13091_14215 = G__14227;
count__13092_14216 = G__14228;
i__13093_14217 = G__14229;
continue;
}
} else {
var temp__5823__auto___14230__$1 = cljs.core.seq(seq__13089_14214);
if(temp__5823__auto___14230__$1){
var seq__13089_14231__$1 = temp__5823__auto___14230__$1;
if(cljs.core.chunked_seq_QMARK_(seq__13089_14231__$1)){
var c__5673__auto___14232 = cljs.core.chunk_first(seq__13089_14231__$1);
var G__14233 = cljs.core.chunk_rest(seq__13089_14231__$1);
var G__14234 = c__5673__auto___14232;
var G__14235 = cljs.core.count(c__5673__auto___14232);
var G__14236 = (0);
seq__13089_14214 = G__14233;
chunk__13091_14215 = G__14234;
count__13092_14216 = G__14235;
i__13093_14217 = G__14236;
continue;
} else {
var child_14237 = cljs.core.first(seq__13089_14231__$1);
if(cljs.core.truth_(child_14237)){
node.appendChild(child_14237);


var G__14238 = cljs.core.next(seq__13089_14231__$1);
var G__14239 = null;
var G__14240 = (0);
var G__14241 = (0);
seq__13089_14214 = G__14238;
chunk__13091_14215 = G__14239;
count__13092_14216 = G__14240;
i__13093_14217 = G__14241;
continue;
} else {
var G__14242 = cljs.core.next(seq__13089_14231__$1);
var G__14243 = null;
var G__14244 = (0);
var G__14245 = (0);
seq__13089_14214 = G__14242;
chunk__13091_14215 = G__14243;
count__13092_14216 = G__14244;
i__13093_14217 = G__14245;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_14213);
}
}


var G__14246 = cljs.core.next(seq__12894_14201__$1);
var G__14247 = null;
var G__14248 = (0);
var G__14249 = (0);
seq__12894_14150 = G__14246;
chunk__12896_14151 = G__14247;
count__12897_14152 = G__14248;
i__12898_14153 = G__14249;
continue;
} else {
var G__14252 = cljs.core.next(seq__12894_14201__$1);
var G__14253 = null;
var G__14254 = (0);
var G__14255 = (0);
seq__12894_14150 = G__14252;
chunk__12896_14151 = G__14253;
count__12897_14152 = G__14254;
i__12898_14153 = G__14255;
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
var len__5876__auto___14263 = arguments.length;
var i__5877__auto___14264 = (0);
while(true){
if((i__5877__auto___14264 < len__5876__auto___14263)){
args__5882__auto__.push((arguments[i__5877__auto___14264]));

var G__14266 = (i__5877__auto___14264 + (1));
i__5877__auto___14264 = G__14266;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq13210){
var G__13211 = cljs.core.first(seq13210);
var seq13210__$1 = cljs.core.next(seq13210);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13211,seq13210__$1);
}));


//# sourceMappingURL=shadow.dom.js.map
