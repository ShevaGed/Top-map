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
var vec__11745 = p1;
var lat1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11745,(0),null);
var lng1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11745,(1),null);
var vec__11748 = p2;
var lat2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11748,(0),null);
var lng2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11748,(1),null);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (i){
var fraction = (i / steps);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(lat1 + (fraction * (lat2 - lat1))),(lng1 + (fraction * (lng2 - lng1)))], null);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1((steps + (1))));
});
map_ukv.core.fetch_ray_visibility = (function map_ukv$core$fetch_ray_visibility(path_points,h){
var body_api = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"locations","locations",-435476560),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__11752){
var vec__11753 = p__11752;
var lat = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11753,(0),null);
var lng = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11753,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"latitude","latitude",394867543),lat,new cljs.core.Keyword(null,"longitude","longitude",-1268876372),lng], null);
}),path_points)], null));
return fetch("https://api.open-elevation.com/api/v1/lookup",cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 1, ["Content-Type","application/json"], null),new cljs.core.Keyword(null,"body","body",-2049205669),JSON.stringify(body_api)], null))).then((function (res){
return res.json();
})).then((function (data){
var elevations = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__11751_SHARP_){
return p1__11751_SHARP_.elevation;
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
map_ukv.core.handle_map_click = (function map_ukv$core$handle_map_click(lat,lng,my_map){
if(cljs.core.truth_(cljs.core.deref(map_ukv.core.rays_group))){
cljs.core.deref(map_ukv.core.rays_group).clearLayers();
} else {
}

var temp__5823__auto___11777 = cljs.core.deref(map_ukv.core.last_marker);
if(cljs.core.truth_(temp__5823__auto___11777)){
var m_11778 = temp__5823__auto___11777;
m_11778.remove();
} else {
}

var m = L.marker(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lat,lng], null))).addTo(my_map);
var h_base = parseFloat(document.getElementById("antenna-height").value);
var h_user = 1.5;
var dist = (20);
var angles = cljs.core.range.cljs$core$IFn$_invoke$arity$3((0),(360),(10));
var all_rays = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (angle){
return map_ukv.core.interpolate_points(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lat,lng], null),map_ukv.core.destination_point(lat,lng,dist,angle),(20));
}),angles);
var flat_points = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,all_rays);
cljs.core.reset_BANG_(map_ukv.core.last_marker,m);

console.log("\u0421\u043A\u0430\u043D\u0443\u044E \u0437\u043E\u043D\u0443 \u043F\u043E\u043A\u0440\u0438\u0442\u0442\u044F (h1:",h_base,"\u043C, h2:",h_user,"\u043C)...");

var body_api = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"locations","locations",-435476560),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__11757){
var vec__11758 = p__11757;
var la = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11758,(0),null);
var ln = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11758,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"latitude","latitude",394867543),la,new cljs.core.Keyword(null,"longitude","longitude",-1268876372),ln], null);
}),flat_points)], null));
return fetch("https://api.open-elevation.com/api/v1/lookup",cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 1, ["Content-Type","application/json"], null),new cljs.core.Keyword(null,"body","body",-2049205669),JSON.stringify(body_api)], null))).then((function (res){
return res.json();
})).then((function (data){
var all_elevations = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__11756_SHARP_){
return p1__11756_SHARP_.elevation;
}),data.results);
var chunked_elevs = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((21),all_elevations);
var seq__11761 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,chunked_elevs));
var chunk__11762 = null;
var count__11763 = (0);
var i__11764 = (0);
while(true){
if((i__11764 < count__11763)){
var vec__11771 = chunk__11762.cljs$core$IIndexed$_nth$arity$2(null,i__11764);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11771,(0),null);
var elevs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11771,(1),null);
var path_11779 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(all_rays,idx);
fetch("http://localhost:3000/check-profile",cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 1, ["Content-Type","application/json"], null),new cljs.core.Keyword(null,"body","body",-2049205669),JSON.stringify(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"elevations","elevations",524473566),elevs,new cljs.core.Keyword(null,"h1","h1",-1896887462),h_base,new cljs.core.Keyword(null,"h2","h2",-372662728),h_user], null)))], null))).then(((function (seq__11761,chunk__11762,count__11763,i__11764,path_11779,vec__11771,idx,elevs,all_elevations,chunked_elevs,body_api,m,h_base,h_user,dist,angles,all_rays,flat_points){
return (function (res){
return res.json();
});})(seq__11761,chunk__11762,count__11763,i__11764,path_11779,vec__11771,idx,elevs,all_elevations,chunked_elevs,body_api,m,h_base,h_user,dist,angles,all_rays,flat_points))
).then(((function (seq__11761,chunk__11762,count__11763,i__11764,path_11779,vec__11771,idx,elevs,all_elevations,chunked_elevs,body_api,m,h_base,h_user,dist,angles,all_rays,flat_points){
return (function (result){
var res_clj = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(result,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var is_visible = cljs.core.every_QMARK_(new cljs.core.Keyword(null,"visible","visible",-1024216805),res_clj);
var line = module$node_modules$leaflet$dist$leaflet_src.polyline(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(path_11779),cljs.core.last(path_11779)], null)),cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),((is_visible)?"#2ecc71":"#e74c3c"),new cljs.core.Keyword(null,"weight","weight",-1262796205),(2),new cljs.core.Keyword(null,"opacity","opacity",397153780),0.5], null)));
return line.addTo(cljs.core.deref(map_ukv.core.rays_group));
});})(seq__11761,chunk__11762,count__11763,i__11764,path_11779,vec__11771,idx,elevs,all_elevations,chunked_elevs,body_api,m,h_base,h_user,dist,angles,all_rays,flat_points))
);


var G__11780 = seq__11761;
var G__11781 = chunk__11762;
var G__11782 = count__11763;
var G__11783 = (i__11764 + (1));
seq__11761 = G__11780;
chunk__11762 = G__11781;
count__11763 = G__11782;
i__11764 = G__11783;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__11761);
if(temp__5823__auto__){
var seq__11761__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11761__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__11761__$1);
var G__11784 = cljs.core.chunk_rest(seq__11761__$1);
var G__11785 = c__5673__auto__;
var G__11786 = cljs.core.count(c__5673__auto__);
var G__11787 = (0);
seq__11761 = G__11784;
chunk__11762 = G__11785;
count__11763 = G__11786;
i__11764 = G__11787;
continue;
} else {
var vec__11774 = cljs.core.first(seq__11761__$1);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11774,(0),null);
var elevs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11774,(1),null);
var path_11788 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(all_rays,idx);
fetch("http://localhost:3000/check-profile",cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 1, ["Content-Type","application/json"], null),new cljs.core.Keyword(null,"body","body",-2049205669),JSON.stringify(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"elevations","elevations",524473566),elevs,new cljs.core.Keyword(null,"h1","h1",-1896887462),h_base,new cljs.core.Keyword(null,"h2","h2",-372662728),h_user], null)))], null))).then(((function (seq__11761,chunk__11762,count__11763,i__11764,path_11788,vec__11774,idx,elevs,seq__11761__$1,temp__5823__auto__,all_elevations,chunked_elevs,body_api,m,h_base,h_user,dist,angles,all_rays,flat_points){
return (function (res){
return res.json();
});})(seq__11761,chunk__11762,count__11763,i__11764,path_11788,vec__11774,idx,elevs,seq__11761__$1,temp__5823__auto__,all_elevations,chunked_elevs,body_api,m,h_base,h_user,dist,angles,all_rays,flat_points))
).then(((function (seq__11761,chunk__11762,count__11763,i__11764,path_11788,vec__11774,idx,elevs,seq__11761__$1,temp__5823__auto__,all_elevations,chunked_elevs,body_api,m,h_base,h_user,dist,angles,all_rays,flat_points){
return (function (result){
var res_clj = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(result,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var is_visible = cljs.core.every_QMARK_(new cljs.core.Keyword(null,"visible","visible",-1024216805),res_clj);
var line = module$node_modules$leaflet$dist$leaflet_src.polyline(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(path_11788),cljs.core.last(path_11788)], null)),cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),((is_visible)?"#2ecc71":"#e74c3c"),new cljs.core.Keyword(null,"weight","weight",-1262796205),(2),new cljs.core.Keyword(null,"opacity","opacity",397153780),0.5], null)));
return line.addTo(cljs.core.deref(map_ukv.core.rays_group));
});})(seq__11761,chunk__11762,count__11763,i__11764,path_11788,vec__11774,idx,elevs,seq__11761__$1,temp__5823__auto__,all_elevations,chunked_elevs,body_api,m,h_base,h_user,dist,angles,all_rays,flat_points))
);


var G__11789 = cljs.core.next(seq__11761__$1);
var G__11790 = null;
var G__11791 = (0);
var G__11792 = (0);
seq__11761 = G__11789;
chunk__11762 = G__11790;
count__11763 = G__11791;
i__11764 = G__11792;
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
