goog.provide('map_ukv.core');
var module$node_modules$leaflet$dist$leaflet_src=shadow.js.require("module$node_modules$leaflet$dist$leaflet_src", {});
if((typeof map_ukv !== 'undefined') && (typeof map_ukv.core !== 'undefined') && (typeof map_ukv.core.map_state !== 'undefined')){
} else {
map_ukv.core.map_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof map_ukv !== 'undefined') && (typeof map_ukv.core !== 'undefined') && (typeof map_ukv.core.last_marker !== 'undefined')){
} else {
map_ukv.core.last_marker = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof map_ukv !== 'undefined') && (typeof map_ukv.core !== 'undefined') && (typeof map_ukv.core.rays_group !== 'undefined')){
} else {
map_ukv.core.rays_group = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof map_ukv !== 'undefined') && (typeof map_ukv.core !== 'undefined') && (typeof map_ukv.core.antenna_pos !== 'undefined')){
} else {
map_ukv.core.antenna_pos = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
map_ukv.core.antenna_icon = L.icon(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"iconUrl","iconUrl",-1868537869),"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiMyYzNlNTAiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cGF0aCBkPSJNMTIgMkwxMiAxMk0xMiAxMkw3IDIyTTEyIDEyTDE3IDIyTTkgMTJoNk0xMCA5aDRNMTEgNmg2Ii8+PC9zdmc+",new cljs.core.Keyword(null,"iconSize","iconSize",253109071),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(40),(40)], null),new cljs.core.Keyword(null,"iconAnchor","iconAnchor",970343173),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(20),(40)], null),new cljs.core.Keyword(null,"className","className",-1983287057),"antenna-icon-svg"], null)));
map_ukv.core.flatten_all_rays = (function map_ukv$core$flatten_all_rays(rays){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,rays);
});
map_ukv.core.destination_point = (function map_ukv$core$destination_point(lat,lng,distance_km,bearing_deg){
var radius = (6371);
var bearing = (bearing_deg * (Math.PI / (180)));
var lat_rad = (lat * (Math.PI / (180)));
var lng_rad = (lng * (Math.PI / (180)));
var dest_lat_rad = Math.asin(((Math.sin(lat_rad) * Math.cos((distance_km / radius))) + ((Math.cos(lat_rad) * Math.sin((distance_km / radius))) * Math.cos(bearing))));
var dest_lng_rad = (lng_rad + Math.atan2(((Math.sin(bearing) * Math.sin((distance_km / radius))) * Math.cos(lat_rad)),(Math.cos((distance_km / radius)) - (Math.sin(lat_rad) * Math.sin(dest_lat_rad)))));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(dest_lat_rad * ((180) / Math.PI)),(dest_lng_rad * ((180) / Math.PI))], null);
});
map_ukv.core.interpolate_points = (function map_ukv$core$interpolate_points(p1,p2,steps){
var vec__12043 = p1;
var lat1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12043,(0),null);
var lng1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12043,(1),null);
var vec__12046 = p2;
var lat2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12046,(0),null);
var lng2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12046,(1),null);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (i){
var fraction = (i / steps);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(lat1 + (fraction * (lat2 - lat1))),(lng1 + (fraction * (lng2 - lng1)))], null);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1((steps + (1))));
});
map_ukv.core.fetch_ray_visibility = (function map_ukv$core$fetch_ray_visibility(path_points,h){
var body_api = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"locations","locations",-435476560),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__12050){
var vec__12051 = p__12050;
var lat = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12051,(0),null);
var lng = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12051,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"latitude","latitude",394867543),lat,new cljs.core.Keyword(null,"longitude","longitude",-1268876372),lng], null);
}),path_points)], null));
return fetch("https://api.open-elevation.com/api/v1/lookup",cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 1, ["Content-Type","application/json"], null),new cljs.core.Keyword(null,"body","body",-2049205669),JSON.stringify(body_api)], null))).then((function (res){
return res.json();
})).then((function (data){
var elevations = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__12049_SHARP_){
return p1__12049_SHARP_.elevation;
}),data.results);
return fetch("http://localhost:3000/check-profile",cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 1, ["Content-Type","application/json"], null),new cljs.core.Keyword(null,"body","body",-2049205669),JSON.stringify(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"elevations","elevations",524473566),elevations,new cljs.core.Keyword(null,"h1","h1",-1896887462),h,new cljs.core.Keyword(null,"h2","h2",-372662728),h], null)))], null))).then((function (res){
return res.json();
})).then((function (result){
var res_clj = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(result,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var is_visible = cljs.core.every_QMARK_(new cljs.core.Keyword(null,"visible","visible",-1024216805),res_clj);
var p1 = cljs.core.first(path_points);
var p2 = cljs.core.last(path_points);
var line = module$node_modules$leaflet$dist$leaflet_src.polyline(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1,p2], null)),cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),((is_visible)?"green":"red"),new cljs.core.Keyword(null,"weight","weight",-1262796205),(2),new cljs.core.Keyword(null,"opacity","opacity",397153780),0.6], null)));
return line.addTo(cljs.core.deref(map_ukv.core.rays_group));
}));
}));
});
map_ukv.core.get_visible_segment = (function map_ukv$core$get_visible_segment(points_info){
return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"visible","visible",-1024216805),points_info);
});
map_ukv.core.handle_map_click = (function map_ukv$core$handle_map_click(lat,lng,my_map){
var h_base = parseFloat(document.getElementById("antenna-height").value);
var h_user = parseFloat(document.getElementById("user-height").value);
var dist = parseFloat(document.getElementById("scan-dist").value);
var loader = document.getElementById("loader");
var num_points = (((dist > (30)))?(50):(30));
if(cljs.core.truth_(cljs.core.deref(map_ukv.core.rays_group))){
cljs.core.deref(map_ukv.core.rays_group).clearLayers();
} else {
}

var temp__5823__auto___12075 = cljs.core.deref(map_ukv.core.last_marker);
if(cljs.core.truth_(temp__5823__auto___12075)){
var m_12076 = temp__5823__auto___12075;
m_12076.remove();
} else {
}

cljs.core.reset_BANG_(map_ukv.core.last_marker,L.marker(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lat,lng], null)),cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"icon","icon",1679606541),map_ukv.core.antenna_icon], null))).addTo(my_map));

(loader.style.display = "block");

console.log((""+"\u0421\u043A\u0430\u043D\u0443\u0432\u0430\u043D\u043D\u044F: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dist)+"\u043A\u043C, \u0449\u043E\u0433\u043B\u0430 "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(h_base)+"\u043C, \u0440\u0430\u0446\u0456\u044F "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(h_user)+"\u043C"));

var angles = cljs.core.range.cljs$core$IFn$_invoke$arity$3((0),(360),(3));
var all_rays = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (angle){
return map_ukv.core.interpolate_points(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lat,lng], null),map_ukv.core.destination_point(lat,lng,dist,angle),num_points);
}),angles);
var flat_points = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,all_rays);
var body_api = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"locations","locations",-435476560),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__12055){
var vec__12056 = p__12055;
var la = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12056,(0),null);
var ln = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12056,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"latitude","latitude",394867543),la,new cljs.core.Keyword(null,"longitude","longitude",-1268876372),ln], null);
}),flat_points)], null));
return fetch("https://api.open-elevation.com/api/v1/lookup",cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 1, ["Content-Type","application/json"], null),new cljs.core.Keyword(null,"body","body",-2049205669),JSON.stringify(body_api)], null))).then((function (res){
return res.json();
})).then((function (data){
var all_elevations = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__12054_SHARP_){
return p1__12054_SHARP_.elevation;
}),data.results);
var chunked_elevs = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((num_points + (1)),all_elevations);
var boundary_points = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
var seq__12059 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,chunked_elevs));
var chunk__12060 = null;
var count__12061 = (0);
var i__12062 = (0);
while(true){
if((i__12062 < count__12061)){
var vec__12069 = chunk__12060.cljs$core$IIndexed$_nth$arity$2(null,i__12062);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12069,(0),null);
var elevs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12069,(1),null);
var path_12077 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(all_rays,idx);
fetch("http://localhost:3000/check-profile",cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 1, ["Content-Type","application/json"], null),new cljs.core.Keyword(null,"body","body",-2049205669),JSON.stringify(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"elevations","elevations",524473566),elevs,new cljs.core.Keyword(null,"h1","h1",-1896887462),h_base,new cljs.core.Keyword(null,"h2","h2",-372662728),h_user], null)))], null))).then(((function (seq__12059,chunk__12060,count__12061,i__12062,path_12077,vec__12069,idx,elevs,all_elevations,chunked_elevs,boundary_points,body_api,angles,all_rays,flat_points,h_base,h_user,dist,loader,num_points){
return (function (res){
return res.json();
});})(seq__12059,chunk__12060,count__12061,i__12062,path_12077,vec__12069,idx,elevs,all_elevations,chunked_elevs,boundary_points,body_api,angles,all_rays,flat_points,h_base,h_user,dist,loader,num_points))
).then(((function (seq__12059,chunk__12060,count__12061,i__12062,path_12077,vec__12069,idx,elevs,all_elevations,chunked_elevs,boundary_points,body_api,angles,all_rays,flat_points,h_base,h_user,dist,loader,num_points){
return (function (result){
var res_clj = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(result,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var visible_part = map_ukv.core.get_visible_segment(res_clj);
var last_visible_idx = cljs.core.max.cljs$core$IFn$_invoke$arity$2((0),(cljs.core.count(visible_part) - (1)));
var edge_point = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(path_12077,last_visible_idx);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(boundary_points,cljs.core.conj,edge_point);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.deref(boundary_points)),cljs.core.count(angles))){
var polygon_points = cljs.core.clj__GT_js(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lat,lng], null)], null),cljs.core.deref(boundary_points)));
var poly = module$node_modules$leaflet$dist$leaflet_src.polygon(polygon_points,cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"color","color",1011675173),"#3498db",new cljs.core.Keyword(null,"fillColor","fillColor",-176906116),"#3498db",new cljs.core.Keyword(null,"fillOpacity","fillOpacity",619211981),0.4,new cljs.core.Keyword(null,"weight","weight",-1262796205),(2)], null)));
poly.addTo(cljs.core.deref(map_ukv.core.rays_group));

return (loader.style.display = "none");
} else {
return null;
}
});})(seq__12059,chunk__12060,count__12061,i__12062,path_12077,vec__12069,idx,elevs,all_elevations,chunked_elevs,boundary_points,body_api,angles,all_rays,flat_points,h_base,h_user,dist,loader,num_points))
);


var G__12078 = seq__12059;
var G__12079 = chunk__12060;
var G__12080 = count__12061;
var G__12081 = (i__12062 + (1));
seq__12059 = G__12078;
chunk__12060 = G__12079;
count__12061 = G__12080;
i__12062 = G__12081;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__12059);
if(temp__5823__auto__){
var seq__12059__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12059__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__12059__$1);
var G__12082 = cljs.core.chunk_rest(seq__12059__$1);
var G__12083 = c__5673__auto__;
var G__12084 = cljs.core.count(c__5673__auto__);
var G__12085 = (0);
seq__12059 = G__12082;
chunk__12060 = G__12083;
count__12061 = G__12084;
i__12062 = G__12085;
continue;
} else {
var vec__12072 = cljs.core.first(seq__12059__$1);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12072,(0),null);
var elevs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12072,(1),null);
var path_12086 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(all_rays,idx);
fetch("http://localhost:3000/check-profile",cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 1, ["Content-Type","application/json"], null),new cljs.core.Keyword(null,"body","body",-2049205669),JSON.stringify(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"elevations","elevations",524473566),elevs,new cljs.core.Keyword(null,"h1","h1",-1896887462),h_base,new cljs.core.Keyword(null,"h2","h2",-372662728),h_user], null)))], null))).then(((function (seq__12059,chunk__12060,count__12061,i__12062,path_12086,vec__12072,idx,elevs,seq__12059__$1,temp__5823__auto__,all_elevations,chunked_elevs,boundary_points,body_api,angles,all_rays,flat_points,h_base,h_user,dist,loader,num_points){
return (function (res){
return res.json();
});})(seq__12059,chunk__12060,count__12061,i__12062,path_12086,vec__12072,idx,elevs,seq__12059__$1,temp__5823__auto__,all_elevations,chunked_elevs,boundary_points,body_api,angles,all_rays,flat_points,h_base,h_user,dist,loader,num_points))
).then(((function (seq__12059,chunk__12060,count__12061,i__12062,path_12086,vec__12072,idx,elevs,seq__12059__$1,temp__5823__auto__,all_elevations,chunked_elevs,boundary_points,body_api,angles,all_rays,flat_points,h_base,h_user,dist,loader,num_points){
return (function (result){
var res_clj = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(result,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var visible_part = map_ukv.core.get_visible_segment(res_clj);
var last_visible_idx = cljs.core.max.cljs$core$IFn$_invoke$arity$2((0),(cljs.core.count(visible_part) - (1)));
var edge_point = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(path_12086,last_visible_idx);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(boundary_points,cljs.core.conj,edge_point);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.deref(boundary_points)),cljs.core.count(angles))){
var polygon_points = cljs.core.clj__GT_js(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lat,lng], null)], null),cljs.core.deref(boundary_points)));
var poly = module$node_modules$leaflet$dist$leaflet_src.polygon(polygon_points,cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"color","color",1011675173),"#3498db",new cljs.core.Keyword(null,"fillColor","fillColor",-176906116),"#3498db",new cljs.core.Keyword(null,"fillOpacity","fillOpacity",619211981),0.4,new cljs.core.Keyword(null,"weight","weight",-1262796205),(2)], null)));
poly.addTo(cljs.core.deref(map_ukv.core.rays_group));

return (loader.style.display = "none");
} else {
return null;
}
});})(seq__12059,chunk__12060,count__12061,i__12062,path_12086,vec__12072,idx,elevs,seq__12059__$1,temp__5823__auto__,all_elevations,chunked_elevs,boundary_points,body_api,angles,all_rays,flat_points,h_base,h_user,dist,loader,num_points))
);


var G__12087 = cljs.core.next(seq__12059__$1);
var G__12088 = null;
var G__12089 = (0);
var G__12090 = (0);
seq__12059 = G__12087;
chunk__12060 = G__12088;
count__12061 = G__12089;
i__12062 = G__12090;
continue;
}
} else {
return null;
}
}
break;
}
}));
});
map_ukv.core.setup_ui_events = (function map_ukv$core$setup_ui_events(){
var clear_btn = document.getElementById("clear-btn");
return clear_btn.addEventListener("click",(function (){
cljs.core.deref(map_ukv.core.rays_group).clearLayers();

if(cljs.core.truth_(cljs.core.deref(map_ukv.core.last_marker))){
cljs.core.deref(map_ukv.core.last_marker).remove();

return cljs.core.reset_BANG_(map_ukv.core.last_marker,null);
} else {
return null;
}
}));
});
map_ukv.core.antenna_icon = L.icon(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"iconUrl","iconUrl",-1868537869),"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiMyYzNlNTAiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjxwYXRoIGQ9Ik0xMiAyTDEyIDUuNU0xMiAyMkwxMiAxMk0xMiAxMkw3IDIyTTEyIDEyTDE3IDIyTTEwIDhoNE04IDExaDhNMTEuNSAyaDEiLz48L3N2Zz4=",new cljs.core.Keyword(null,"iconSize","iconSize",253109071),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(40),(40)], null),new cljs.core.Keyword(null,"iconAnchor","iconAnchor",970343173),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(20),(40)], null),new cljs.core.Keyword(null,"className","className",-1983287057),"antenna-icon-svg"], null)));
map_ukv.core.init = (function map_ukv$core$init(){
var topo = module$node_modules$leaflet$dist$leaflet_src.tileLayer("https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png",cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"maxZoom","maxZoom",566190639),(17),new cljs.core.Keyword(null,"attribution","attribution",1937239286),"OpenTopoMap"], null)));
var streets = module$node_modules$leaflet$dist$leaflet_src.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"attribution","attribution",1937239286),"OpenStreetMap"], null)));
var satellite = module$node_modules$leaflet$dist$leaflet_src.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"attribution","attribution",1937239286),"Esri Satellite"], null)));
var my_map = L.map("map-id",cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [50.0,36.2], null),new cljs.core.Keyword(null,"zoom","zoom",-1827487038),(11),new cljs.core.Keyword(null,"layers","layers",1944875032),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [topo], null)], null)));
var base_maps_12091 = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, ["\u0422\u043E\u043F\u043E\u0433\u0440\u0430\u0444\u0456\u0447\u043D\u0430",topo,"\u0412\u0443\u043B\u0438\u0446\u0456",streets,"\u0421\u0443\u043F\u0443\u0442\u043D\u0438\u043A",satellite], null));
L.control.layers(base_maps_12091).addTo(my_map);

var legend_12092 = L.control(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),"bottomright"], null)));
(legend_12092.onAdd = (function (map){
var div = L.DomUtil.create("div","map-legend");
(div.innerHTML = "<div style='text-align:center;'>\n                        <strong style='color:#2c3e50;'>\u0420\u0430\u0434\u0456\u043E\u043F\u043E\u043A\u0440\u0438\u0442\u0442\u044F</strong><br>\n                        <div style='display:flex; align-items:center; justify-content:center; gap:8px; margin:5px 0;'>\n                           <div class='legend-color' style='background: #3498db; width:15px; height:15px; border-radius:3px;'></div> \n                           <span style='font-weight:bold;'>VHF 170MHz</span>\n                        </div>\n                        <small style='color:#7f8c8d;'>H1: \u0429\u043E\u0433\u043B\u0430 | H2: 1.7\u043C</small>\n                       </div>");

return div;
}));

legend_12092.addTo(my_map);

cljs.core.reset_BANG_(map_ukv.core.rays_group,L.layerGroup().addTo(my_map));

my_map.on("click",(function (e){
var lat = e.latlng.lat;
var lng = e.latlng.lng;
return map_ukv.core.handle_map_click(lat,lng,my_map);
}));

map_ukv.core.setup_ui_events();

return console.log("\u0421\u0438\u0441\u0442\u0435\u043C\u0430 \u0433\u043E\u0442\u043E\u0432\u0430.");
});

//# sourceMappingURL=map_ukv.core.js.map
