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
if((typeof map_ukv !== 'undefined') && (typeof map_ukv.core !== 'undefined') && (typeof map_ukv.core.legend_ui !== 'undefined')){
} else {
map_ukv.core.legend_ui = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof map_ukv !== 'undefined') && (typeof map_ukv.core !== 'undefined') && (typeof map_ukv.core.boundary_points !== 'undefined')){
} else {
map_ukv.core.boundary_points = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
map_ukv.core.antenna_icon = L.icon(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"iconUrl","iconUrl",-1868537869),"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiMyYzNlNTAiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjxwYXRoIGQ9Ik0xMiAyTDEyIDUuNU0xMiAyMkwxMiAxMk0xMiAxMkw3IDIyTTEyIDEyTDE3IDIyTTEwIDhoNE04IDExaDhNMTEuNSAyaDEiLz48L3N2Zz4=",new cljs.core.Keyword(null,"iconSize","iconSize",253109071),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(40),(40)], null),new cljs.core.Keyword(null,"iconAnchor","iconAnchor",970343173),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(20),(40)], null),new cljs.core.Keyword(null,"className","className",-1983287057),"antenna-icon-svg"], null)));
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
var vec__11957 = p1;
var lat1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11957,(0),null);
var lng1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11957,(1),null);
var vec__11960 = p2;
var lat2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11960,(0),null);
var lng2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11960,(1),null);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (i){
var fraction = (i / steps);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(lat1 + (fraction * (lat2 - lat1))),(lng1 + (fraction * (lng2 - lng1)))], null);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1((steps + (1))));
});
map_ukv.core.fetch_ray_visibility = (function map_ukv$core$fetch_ray_visibility(path_points,h){
var body_api = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"locations","locations",-435476560),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__11964){
var vec__11965 = p__11964;
var lat = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11965,(0),null);
var lng = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11965,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"latitude","latitude",394867543),lat,new cljs.core.Keyword(null,"longitude","longitude",-1268876372),lng], null);
}),path_points)], null));
return fetch("https://api.open-elevation.com/api/v1/lookup",cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 1, ["Content-Type","application/json"], null),new cljs.core.Keyword(null,"body","body",-2049205669),JSON.stringify(body_api)], null))).then((function (res){
return res.json();
})).then((function (data){
var elevations = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__11963_SHARP_){
return p1__11963_SHARP_.elevation;
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
map_ukv.core.update_legend_ui = (function map_ukv$core$update_legend_ui(freq,h_base,h_user){
var legend_div = document.getElementById("dynamic-legend");
if(cljs.core.truth_(legend_div)){
return (legend_div.innerHTML = (""+"<div style='text-align:center;'>\n                    <strong style='color:#2c3e50;'>\u041F\u043E\u0442\u043E\u0447\u043D\u0456 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u0438</strong><br>\n                    <div style='margin:5px 0;'>\n                       <span style='background:#3498db; color:white; padding:2px 6px; border-radius:3px; font-size:12px; font-weight:bold;'>"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(freq)+" MHz</span>\n                    </div>\n                    <small style='color:#7f8c8d;'>\u0429\u043E\u0433\u043B\u0430: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(h_base)+"\u043C | \u041F\u0440\u0438\u0439\u043C\u0430\u0447: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(h_user)+"\u043C</small>\n                  </div>"));
} else {
return null;
}
});
map_ukv.core.handle_map_click = (function map_ukv$core$handle_map_click(lat,lng,my_map){
var h_base = parseFloat(document.getElementById("antenna-height").value);
var h_user = parseFloat(document.getElementById("user-height").value);
var dist = parseFloat(document.getElementById("scan-dist").value);
var freq = parseInt(document.getElementById("freq-select").value);
var loader = document.getElementById("loader");
var num_points = (50);
(loader.style.display = "block");

cljs.core.deref(map_ukv.core.rays_group).clearLayers();

cljs.core.reset_BANG_(map_ukv.core.boundary_points,cljs.core.PersistentArrayMap.EMPTY);

if(cljs.core.truth_(cljs.core.deref(map_ukv.core.last_marker))){
cljs.core.deref(map_ukv.core.last_marker).remove();
} else {
}

cljs.core.reset_BANG_(map_ukv.core.last_marker,L.marker(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lat,lng], null)),cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"icon","icon",1679606541),map_ukv.core.antenna_icon], null))).addTo(my_map));

var angles = cljs.core.range.cljs$core$IFn$_invoke$arity$3((0),(361),(5));
var angle_map = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (a){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,map_ukv.core.interpolate_points(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lat,lng], null),map_ukv.core.destination_point(lat,lng,dist,a),num_points)], null);
}),angles));
var flat_locations = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__11971){
var vec__11972 = p__11971;
var la = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11972,(0),null);
var ln = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11972,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"latitude","latitude",394867543),la,new cljs.core.Keyword(null,"longitude","longitude",-1268876372),ln], null);
}),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__11968_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(angle_map,p1__11968_SHARP_);
}),angles)));
return fetch("https://api.open-elevation.com/api/v1/lookup",cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 1, ["Content-Type","application/json"], null),new cljs.core.Keyword(null,"body","body",-2049205669),JSON.stringify(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"locations","locations",-435476560),flat_locations], null)))], null))).then((function (res){
return res.json();
})).then((function (data){
var all_elevations = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__11969_SHARP_){
return p1__11969_SHARP_.elevation;
}),data.results);
var chunked_elevs = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((num_points + (1)),all_elevations);
var seq__11975 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,chunked_elevs));
var chunk__11976 = null;
var count__11977 = (0);
var i__11978 = (0);
while(true){
if((i__11978 < count__11977)){
var vec__11985 = chunk__11976.cljs$core$IIndexed$_nth$arity$2(null,i__11978);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11985,(0),null);
var elevs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11985,(1),null);
var angle_11995 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(angles,idx);
var path_11996 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(angle_map,angle_11995);
fetch("http://localhost:3000/check-profile",cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 1, ["Content-Type","application/json"], null),new cljs.core.Keyword(null,"body","body",-2049205669),JSON.stringify(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"elevations","elevations",524473566),elevs,new cljs.core.Keyword(null,"h1","h1",-1896887462),h_base,new cljs.core.Keyword(null,"h2","h2",-372662728),h_user,new cljs.core.Keyword(null,"freq","freq",-1855845278),freq], null)))], null))).then(((function (seq__11975,chunk__11976,count__11977,i__11978,angle_11995,path_11996,vec__11985,idx,elevs,all_elevations,chunked_elevs,angles,angle_map,flat_locations,h_base,h_user,dist,freq,loader,num_points){
return (function (res){
return res.json();
});})(seq__11975,chunk__11976,count__11977,i__11978,angle_11995,path_11996,vec__11985,idx,elevs,all_elevations,chunked_elevs,angles,angle_map,flat_locations,h_base,h_user,dist,freq,loader,num_points))
).then(((function (seq__11975,chunk__11976,count__11977,i__11978,angle_11995,path_11996,vec__11985,idx,elevs,all_elevations,chunked_elevs,angles,angle_map,flat_locations,h_base,h_user,dist,freq,loader,num_points){
return (function (result){
var res_clj = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(result,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var visible_part = map_ukv.core.get_visible_segment(res_clj);
var last_idx = cljs.core.max.cljs$core$IFn$_invoke$arity$2((0),(cljs.core.count(visible_part) - (1)));
var edge_point = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(path_11996,last_idx);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(map_ukv.core.boundary_points,cljs.core.assoc,angle_11995,edge_point);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.deref(map_ukv.core.boundary_points)),cljs.core.count(angles))){
var sorted_coords = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (seq__11975,chunk__11976,count__11977,i__11978,res_clj,visible_part,last_idx,edge_point,angle_11995,path_11996,vec__11985,idx,elevs,all_elevations,chunked_elevs,angles,angle_map,flat_locations,h_base,h_user,dist,freq,loader,num_points){
return (function (p1__11970_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(map_ukv.core.boundary_points),p1__11970_SHARP_);
});})(seq__11975,chunk__11976,count__11977,i__11978,res_clj,visible_part,last_idx,edge_point,angle_11995,path_11996,vec__11985,idx,elevs,all_elevations,chunked_elevs,angles,angle_map,flat_locations,h_base,h_user,dist,freq,loader,num_points))
,angles);
var clean_coords = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,sorted_coords);
var poly = module$node_modules$leaflet$dist$leaflet_src.polygon(cljs.core.clj__GT_js(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lat,lng], null)], null),clean_coords)),cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"color","color",1011675173),"#3498db",new cljs.core.Keyword(null,"fillColor","fillColor",-176906116),"#3498db",new cljs.core.Keyword(null,"fillOpacity","fillOpacity",619211981),0.4,new cljs.core.Keyword(null,"weight","weight",-1262796205),(2)], null)));
poly.addTo(cljs.core.deref(map_ukv.core.rays_group));

(loader.style.display = "none");

return map_ukv.core.update_legend_ui(freq,h_base,h_user);
} else {
return null;
}
});})(seq__11975,chunk__11976,count__11977,i__11978,angle_11995,path_11996,vec__11985,idx,elevs,all_elevations,chunked_elevs,angles,angle_map,flat_locations,h_base,h_user,dist,freq,loader,num_points))
);


var G__11997 = seq__11975;
var G__11998 = chunk__11976;
var G__11999 = count__11977;
var G__12000 = (i__11978 + (1));
seq__11975 = G__11997;
chunk__11976 = G__11998;
count__11977 = G__11999;
i__11978 = G__12000;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__11975);
if(temp__5823__auto__){
var seq__11975__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11975__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__11975__$1);
var G__12001 = cljs.core.chunk_rest(seq__11975__$1);
var G__12002 = c__5673__auto__;
var G__12003 = cljs.core.count(c__5673__auto__);
var G__12004 = (0);
seq__11975 = G__12001;
chunk__11976 = G__12002;
count__11977 = G__12003;
i__11978 = G__12004;
continue;
} else {
var vec__11988 = cljs.core.first(seq__11975__$1);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11988,(0),null);
var elevs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11988,(1),null);
var angle_12005 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(angles,idx);
var path_12006 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(angle_map,angle_12005);
fetch("http://localhost:3000/check-profile",cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 1, ["Content-Type","application/json"], null),new cljs.core.Keyword(null,"body","body",-2049205669),JSON.stringify(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"elevations","elevations",524473566),elevs,new cljs.core.Keyword(null,"h1","h1",-1896887462),h_base,new cljs.core.Keyword(null,"h2","h2",-372662728),h_user,new cljs.core.Keyword(null,"freq","freq",-1855845278),freq], null)))], null))).then(((function (seq__11975,chunk__11976,count__11977,i__11978,angle_12005,path_12006,vec__11988,idx,elevs,seq__11975__$1,temp__5823__auto__,all_elevations,chunked_elevs,angles,angle_map,flat_locations,h_base,h_user,dist,freq,loader,num_points){
return (function (res){
return res.json();
});})(seq__11975,chunk__11976,count__11977,i__11978,angle_12005,path_12006,vec__11988,idx,elevs,seq__11975__$1,temp__5823__auto__,all_elevations,chunked_elevs,angles,angle_map,flat_locations,h_base,h_user,dist,freq,loader,num_points))
).then(((function (seq__11975,chunk__11976,count__11977,i__11978,angle_12005,path_12006,vec__11988,idx,elevs,seq__11975__$1,temp__5823__auto__,all_elevations,chunked_elevs,angles,angle_map,flat_locations,h_base,h_user,dist,freq,loader,num_points){
return (function (result){
var res_clj = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(result,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var visible_part = map_ukv.core.get_visible_segment(res_clj);
var last_idx = cljs.core.max.cljs$core$IFn$_invoke$arity$2((0),(cljs.core.count(visible_part) - (1)));
var edge_point = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(path_12006,last_idx);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(map_ukv.core.boundary_points,cljs.core.assoc,angle_12005,edge_point);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.deref(map_ukv.core.boundary_points)),cljs.core.count(angles))){
var sorted_coords = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (seq__11975,chunk__11976,count__11977,i__11978,res_clj,visible_part,last_idx,edge_point,angle_12005,path_12006,vec__11988,idx,elevs,seq__11975__$1,temp__5823__auto__,all_elevations,chunked_elevs,angles,angle_map,flat_locations,h_base,h_user,dist,freq,loader,num_points){
return (function (p1__11970_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(map_ukv.core.boundary_points),p1__11970_SHARP_);
});})(seq__11975,chunk__11976,count__11977,i__11978,res_clj,visible_part,last_idx,edge_point,angle_12005,path_12006,vec__11988,idx,elevs,seq__11975__$1,temp__5823__auto__,all_elevations,chunked_elevs,angles,angle_map,flat_locations,h_base,h_user,dist,freq,loader,num_points))
,angles);
var clean_coords = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,sorted_coords);
var poly = module$node_modules$leaflet$dist$leaflet_src.polygon(cljs.core.clj__GT_js(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lat,lng], null)], null),clean_coords)),cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"color","color",1011675173),"#3498db",new cljs.core.Keyword(null,"fillColor","fillColor",-176906116),"#3498db",new cljs.core.Keyword(null,"fillOpacity","fillOpacity",619211981),0.4,new cljs.core.Keyword(null,"weight","weight",-1262796205),(2)], null)));
poly.addTo(cljs.core.deref(map_ukv.core.rays_group));

(loader.style.display = "none");

return map_ukv.core.update_legend_ui(freq,h_base,h_user);
} else {
return null;
}
});})(seq__11975,chunk__11976,count__11977,i__11978,angle_12005,path_12006,vec__11988,idx,elevs,seq__11975__$1,temp__5823__auto__,all_elevations,chunked_elevs,angles,angle_map,flat_locations,h_base,h_user,dist,freq,loader,num_points))
);


var G__12007 = cljs.core.next(seq__11975__$1);
var G__12008 = null;
var G__12009 = (0);
var G__12010 = (0);
seq__11975 = G__12007;
chunk__11976 = G__12008;
count__11977 = G__12009;
i__11978 = G__12010;
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
var export_btn = document.getElementById("export-btn");
if(cljs.core.truth_(clear_btn)){
clear_btn.addEventListener("click",(function (){
cljs.core.deref(map_ukv.core.rays_group).clearLayers();

if(cljs.core.truth_(cljs.core.deref(map_ukv.core.last_marker))){
cljs.core.deref(map_ukv.core.last_marker).remove();

cljs.core.reset_BANG_(map_ukv.core.last_marker,null);
} else {
}

cljs.core.reset_BANG_(map_ukv.core.boundary_points,cljs.core.PersistentArrayMap.EMPTY);

var legend_div = document.getElementById("dynamic-legend");
if(cljs.core.truth_(legend_div)){
return (legend_div.innerHTML = "\u041A\u043B\u0456\u043A\u043D\u0456\u0442\u044C \u043D\u0430 \u043A\u0430\u0440\u0442\u0443 \u0434\u043B\u044F \u0440\u043E\u0437\u0440\u0430\u0445\u0443\u043D\u043A\u0443");
} else {
return null;
}
}));
} else {
}

if(cljs.core.truth_(export_btn)){
return export_btn.addEventListener("click",(function (){
var marker = cljs.core.deref(map_ukv.core.last_marker);
var points = cljs.core.deref(map_ukv.core.boundary_points);
if(cljs.core.truth_((function (){var and__5140__auto__ = marker;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not_empty(points);
} else {
return and__5140__auto__;
}
})())){
var latlng = marker.getLatLng();
var lat = latlng.lat;
var lng = latlng.lng;
var export_data = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"antenna","antenna",-1733193971),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lat","lat",-580793929),lat,new cljs.core.Keyword(null,"lng","lng",1667213918),lng], null),new cljs.core.Keyword(null,"parameters","parameters",-1229919748),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"h1","h1",-1896887462),parseFloat(document.getElementById("antenna-height").value),new cljs.core.Keyword(null,"h2","h2",-372662728),parseFloat(document.getElementById("user-height").value),new cljs.core.Keyword(null,"freq","freq",-1855845278),parseInt(document.getElementById("freq-select").value)], null),new cljs.core.Keyword(null,"boundary","boundary",-2000996754),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__11991){
var vec__11992 = p__11991;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11992,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11992,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)),v], null);
}),points))], null);
var json_str = JSON.stringify(cljs.core.clj__GT_js(export_data));
var blob = (new Blob([json_str],({"type": "application/json"})));
var url = URL.createObjectURL(blob);
var link = document.createElement("a");
(link.href = url);

(link.download = (""+"coverage-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).getTime())+".json"));

link.click();

return URL.revokeObjectURL(url);
} else {
return alert("\u041F\u043E\u043C\u0438\u043B\u043A\u0430: \u041C\u0430\u0440\u043A\u0435\u0440 \u043D\u0435 \u0437\u043D\u0430\u0439\u0434\u0435\u043D\u043E \u0430\u0431\u043E \u0434\u0430\u043D\u0456 \u0449\u0435 \u0437\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0443\u044E\u0442\u044C\u0441\u044F!");
}
}));
} else {
return null;
}
});
map_ukv.core.init = (function map_ukv$core$init(){
var topo = module$node_modules$leaflet$dist$leaflet_src.tileLayer("https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png",cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"maxZoom","maxZoom",566190639),(17),new cljs.core.Keyword(null,"attribution","attribution",1937239286),"OpenTopoMap"], null)));
var streets = module$node_modules$leaflet$dist$leaflet_src.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"attribution","attribution",1937239286),"OpenStreetMap"], null)));
var satellite = module$node_modules$leaflet$dist$leaflet_src.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"attribution","attribution",1937239286),"Esri Satellite"], null)));
var my_map = L.map("map-id",cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [50.0,36.2], null),new cljs.core.Keyword(null,"zoom","zoom",-1827487038),(11),new cljs.core.Keyword(null,"layers","layers",1944875032),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [topo], null)], null)));
var base_maps_12011 = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, ["\u0422\u043E\u043F\u043E\u0433\u0440\u0430\u0444\u0456\u0447\u043D\u0430",topo,"\u0412\u0443\u043B\u0438\u0446\u0456",streets,"\u0421\u0443\u043F\u0443\u0442\u043D\u0438\u043A",satellite], null));
L.control.layers(base_maps_12011).addTo(my_map);

var legend_12012 = L.control(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),"bottomright"], null)));
(legend_12012.onAdd = (function (map){
var div = L.DomUtil.create("div","map-legend");
(div.id = "dynamic-legend");

(div.innerHTML = "\u041A\u043B\u0456\u043A\u043D\u0456\u0442\u044C \u043D\u0430 \u043A\u0430\u0440\u0442\u0443 \u0434\u043B\u044F \u0440\u043E\u0437\u0440\u0430\u0445\u0443\u043D\u043A\u0443");

return div;
}));

legend_12012.addTo(my_map);

cljs.core.reset_BANG_(map_ukv.core.legend_ui,legend_12012);

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
