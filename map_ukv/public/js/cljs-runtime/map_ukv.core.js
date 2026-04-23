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
var vec__11825 = p1;
var lat1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11825,(0),null);
var lng1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11825,(1),null);
var vec__11828 = p2;
var lat2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11828,(0),null);
var lng2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11828,(1),null);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (i){
var fraction = (i / steps);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(lat1 + (fraction * (lat2 - lat1))),(lng1 + (fraction * (lng2 - lng1)))], null);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1((steps + (1))));
});
map_ukv.core.fetch_ray_visibility = (function map_ukv$core$fetch_ray_visibility(path_points,h){
var body_api = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"locations","locations",-435476560),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__11832){
var vec__11833 = p__11832;
var lat = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11833,(0),null);
var lng = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11833,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"latitude","latitude",394867543),lat,new cljs.core.Keyword(null,"longitude","longitude",-1268876372),lng], null);
}),path_points)], null));
return fetch("https://api.open-elevation.com/api/v1/lookup",cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 1, ["Content-Type","application/json"], null),new cljs.core.Keyword(null,"body","body",-2049205669),JSON.stringify(body_api)], null))).then((function (res){
return res.json();
})).then((function (data){
var elevations = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__11831_SHARP_){
return p1__11831_SHARP_.elevation;
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
if(cljs.core.truth_(cljs.core.deref(map_ukv.core.rays_group))){
cljs.core.deref(map_ukv.core.rays_group).clearLayers();
} else {
}

var temp__5823__auto___11857 = cljs.core.deref(map_ukv.core.last_marker);
if(cljs.core.truth_(temp__5823__auto___11857)){
var m_11858 = temp__5823__auto___11857;
m_11858.remove();
} else {
}

var m = L.marker(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lat,lng], null))).addTo(my_map);
var h_base = parseFloat(document.getElementById("antenna-height").value);
var h_user = 1.5;
var dist = (45);
var angles = cljs.core.range.cljs$core$IFn$_invoke$arity$3((0),(360),(3));
var all_rays = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (angle){
return map_ukv.core.interpolate_points(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lat,lng], null),map_ukv.core.destination_point(lat,lng,dist,angle),(50));
}),angles);
var flat_points = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,all_rays);
cljs.core.reset_BANG_(map_ukv.core.last_marker,m);

console.log("\u0411\u0443\u0434\u0443\u044E \u043F\u043E\u043B\u0456\u0433\u043E\u043D \u043F\u043E\u043A\u0440\u0438\u0442\u0442\u044F...");

var body_api = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"locations","locations",-435476560),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__11837){
var vec__11838 = p__11837;
var la = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11838,(0),null);
var ln = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11838,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"latitude","latitude",394867543),la,new cljs.core.Keyword(null,"longitude","longitude",-1268876372),ln], null);
}),flat_points)], null));
return fetch("https://api.open-elevation.com/api/v1/lookup",cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 1, ["Content-Type","application/json"], null),new cljs.core.Keyword(null,"body","body",-2049205669),JSON.stringify(body_api)], null))).then((function (res){
return res.json();
})).then((function (data){
var all_elevations = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__11836_SHARP_){
return p1__11836_SHARP_.elevation;
}),data.results);
var chunked_elevs = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((51),all_elevations);
var boundary_points = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
var seq__11841 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,chunked_elevs));
var chunk__11842 = null;
var count__11843 = (0);
var i__11844 = (0);
while(true){
if((i__11844 < count__11843)){
var vec__11851 = chunk__11842.cljs$core$IIndexed$_nth$arity$2(null,i__11844);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11851,(0),null);
var elevs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11851,(1),null);
var path_11859 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(all_rays,idx);
fetch("http://localhost:3000/check-profile",cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 1, ["Content-Type","application/json"], null),new cljs.core.Keyword(null,"body","body",-2049205669),JSON.stringify(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"elevations","elevations",524473566),elevs,new cljs.core.Keyword(null,"h1","h1",-1896887462),h_base,new cljs.core.Keyword(null,"h2","h2",-372662728),h_user], null)))], null))).then(((function (seq__11841,chunk__11842,count__11843,i__11844,path_11859,vec__11851,idx,elevs,all_elevations,chunked_elevs,boundary_points,body_api,m,h_base,h_user,dist,angles,all_rays,flat_points){
return (function (res){
return res.json();
});})(seq__11841,chunk__11842,count__11843,i__11844,path_11859,vec__11851,idx,elevs,all_elevations,chunked_elevs,boundary_points,body_api,m,h_base,h_user,dist,angles,all_rays,flat_points))
).then(((function (seq__11841,chunk__11842,count__11843,i__11844,path_11859,vec__11851,idx,elevs,all_elevations,chunked_elevs,boundary_points,body_api,m,h_base,h_user,dist,angles,all_rays,flat_points){
return (function (result){
var res_clj = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(result,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var visible_part = map_ukv.core.get_visible_segment(res_clj);
var last_visible_idx = cljs.core.max.cljs$core$IFn$_invoke$arity$2((0),(cljs.core.count(visible_part) - (1)));
var edge_point = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(path_11859,last_visible_idx);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(boundary_points,cljs.core.conj,edge_point);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.deref(boundary_points)),cljs.core.count(angles))){
var polygon_points = cljs.core.clj__GT_js(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lat,lng], null)], null),cljs.core.deref(boundary_points)));
var poly = module$node_modules$leaflet$dist$leaflet_src.polygon(polygon_points,cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"color","color",1011675173),"#3388ff",new cljs.core.Keyword(null,"fillColor","fillColor",-176906116),"#3388ff",new cljs.core.Keyword(null,"fillOpacity","fillOpacity",619211981),0.4,new cljs.core.Keyword(null,"weight","weight",-1262796205),(2)], null)));
return poly.addTo(cljs.core.deref(map_ukv.core.rays_group));
} else {
return null;
}
});})(seq__11841,chunk__11842,count__11843,i__11844,path_11859,vec__11851,idx,elevs,all_elevations,chunked_elevs,boundary_points,body_api,m,h_base,h_user,dist,angles,all_rays,flat_points))
);


var G__11860 = seq__11841;
var G__11861 = chunk__11842;
var G__11862 = count__11843;
var G__11863 = (i__11844 + (1));
seq__11841 = G__11860;
chunk__11842 = G__11861;
count__11843 = G__11862;
i__11844 = G__11863;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__11841);
if(temp__5823__auto__){
var seq__11841__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11841__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__11841__$1);
var G__11864 = cljs.core.chunk_rest(seq__11841__$1);
var G__11865 = c__5673__auto__;
var G__11866 = cljs.core.count(c__5673__auto__);
var G__11867 = (0);
seq__11841 = G__11864;
chunk__11842 = G__11865;
count__11843 = G__11866;
i__11844 = G__11867;
continue;
} else {
var vec__11854 = cljs.core.first(seq__11841__$1);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11854,(0),null);
var elevs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11854,(1),null);
var path_11868 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(all_rays,idx);
fetch("http://localhost:3000/check-profile",cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 1, ["Content-Type","application/json"], null),new cljs.core.Keyword(null,"body","body",-2049205669),JSON.stringify(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"elevations","elevations",524473566),elevs,new cljs.core.Keyword(null,"h1","h1",-1896887462),h_base,new cljs.core.Keyword(null,"h2","h2",-372662728),h_user], null)))], null))).then(((function (seq__11841,chunk__11842,count__11843,i__11844,path_11868,vec__11854,idx,elevs,seq__11841__$1,temp__5823__auto__,all_elevations,chunked_elevs,boundary_points,body_api,m,h_base,h_user,dist,angles,all_rays,flat_points){
return (function (res){
return res.json();
});})(seq__11841,chunk__11842,count__11843,i__11844,path_11868,vec__11854,idx,elevs,seq__11841__$1,temp__5823__auto__,all_elevations,chunked_elevs,boundary_points,body_api,m,h_base,h_user,dist,angles,all_rays,flat_points))
).then(((function (seq__11841,chunk__11842,count__11843,i__11844,path_11868,vec__11854,idx,elevs,seq__11841__$1,temp__5823__auto__,all_elevations,chunked_elevs,boundary_points,body_api,m,h_base,h_user,dist,angles,all_rays,flat_points){
return (function (result){
var res_clj = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(result,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var visible_part = map_ukv.core.get_visible_segment(res_clj);
var last_visible_idx = cljs.core.max.cljs$core$IFn$_invoke$arity$2((0),(cljs.core.count(visible_part) - (1)));
var edge_point = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(path_11868,last_visible_idx);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(boundary_points,cljs.core.conj,edge_point);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.deref(boundary_points)),cljs.core.count(angles))){
var polygon_points = cljs.core.clj__GT_js(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lat,lng], null)], null),cljs.core.deref(boundary_points)));
var poly = module$node_modules$leaflet$dist$leaflet_src.polygon(polygon_points,cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"color","color",1011675173),"#3388ff",new cljs.core.Keyword(null,"fillColor","fillColor",-176906116),"#3388ff",new cljs.core.Keyword(null,"fillOpacity","fillOpacity",619211981),0.4,new cljs.core.Keyword(null,"weight","weight",-1262796205),(2)], null)));
return poly.addTo(cljs.core.deref(map_ukv.core.rays_group));
} else {
return null;
}
});})(seq__11841,chunk__11842,count__11843,i__11844,path_11868,vec__11854,idx,elevs,seq__11841__$1,temp__5823__auto__,all_elevations,chunked_elevs,boundary_points,body_api,m,h_base,h_user,dist,angles,all_rays,flat_points))
);


var G__11869 = cljs.core.next(seq__11841__$1);
var G__11870 = null;
var G__11871 = (0);
var G__11872 = (0);
seq__11841 = G__11869;
chunk__11842 = G__11870;
count__11843 = G__11871;
i__11844 = G__11872;
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
map_ukv.core.init = (function map_ukv$core$init(){
var my_map = module$node_modules$leaflet$dist$leaflet_src.map("map-id");
var topo_url = "https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png";
var options = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"maxZoom","maxZoom",566190639),(17),new cljs.core.Keyword(null,"attribution","attribution",1937239286),"OpenTopoMap"], null));
my_map.setView(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [50.45,30.52], null)),(10));

module$node_modules$leaflet$dist$leaflet_src.tileLayer(topo_url,options).addTo(my_map);

cljs.core.reset_BANG_(map_ukv.core.rays_group,module$node_modules$leaflet$dist$leaflet_src.layerGroup().addTo(my_map));

my_map.on("click",(function (e){
return map_ukv.core.handle_map_click(e.latlng.lat,e.latlng.lng,my_map);
}));

return cljs.core.reset_BANG_(map_ukv.core.map_state,my_map);
});

//# sourceMappingURL=map_ukv.core.js.map
