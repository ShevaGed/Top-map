goog.provide('map_ukv.core');
var module$node_modules$leaflet$dist$leaflet_src=shadow.js.require("module$node_modules$leaflet$dist$leaflet_src", {});
if((typeof map_ukv !== 'undefined') && (typeof map_ukv.core !== 'undefined') && (typeof map_ukv.core.map_state !== 'undefined')){
} else {
map_ukv.core.map_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof map_ukv !== 'undefined') && (typeof map_ukv.core !== 'undefined') && (typeof map_ukv.core.markers !== 'undefined')){
} else {
map_ukv.core.markers = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
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
var vec__12787 = p1;
var lat1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12787,(0),null);
var lng1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12787,(1),null);
var vec__12790 = p2;
var lat2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12790,(0),null);
var lng2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12790,(1),null);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (i){
var fraction = (i / steps);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(lat1 + (fraction * (lat2 - lat1))),(lng1 + (fraction * (lng2 - lng1)))], null);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1((steps + (1))));
});
map_ukv.core.fetch_ray_visibility = (function map_ukv$core$fetch_ray_visibility(path_points,h){
var body_api = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"locations","locations",-435476560),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__12794){
var vec__12795 = p__12794;
var lat = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12795,(0),null);
var lng = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12795,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"latitude","latitude",394867543),lat,new cljs.core.Keyword(null,"longitude","longitude",-1268876372),lng], null);
}),path_points)], null));
return fetch("https://api.open-elevation.com/api/v1/lookup",cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 1, ["Content-Type","application/json"], null),new cljs.core.Keyword(null,"body","body",-2049205669),JSON.stringify(body_api)], null))).then((function (res){
return res.json();
})).then((function (data){
var elevations = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__12793_SHARP_){
return p1__12793_SHARP_.elevation;
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
if((cljs.core.count(cljs.core.deref(map_ukv.core.markers)) >= (2))){
cljs.core.deref(map_ukv.core.rays_group).clearLayers();

var seq__12802_12838 = cljs.core.seq(cljs.core.deref(map_ukv.core.markers));
var chunk__12803_12839 = null;
var count__12804_12840 = (0);
var i__12805_12841 = (0);
while(true){
if((i__12805_12841 < count__12804_12840)){
var m_12842 = chunk__12803_12839.cljs$core$IIndexed$_nth$arity$2(null,i__12805_12841);
m_12842.remove();


var G__12843 = seq__12802_12838;
var G__12844 = chunk__12803_12839;
var G__12845 = count__12804_12840;
var G__12846 = (i__12805_12841 + (1));
seq__12802_12838 = G__12843;
chunk__12803_12839 = G__12844;
count__12804_12840 = G__12845;
i__12805_12841 = G__12846;
continue;
} else {
var temp__5823__auto___12847 = cljs.core.seq(seq__12802_12838);
if(temp__5823__auto___12847){
var seq__12802_12848__$1 = temp__5823__auto___12847;
if(cljs.core.chunked_seq_QMARK_(seq__12802_12848__$1)){
var c__5673__auto___12849 = cljs.core.chunk_first(seq__12802_12848__$1);
var G__12850 = cljs.core.chunk_rest(seq__12802_12848__$1);
var G__12851 = c__5673__auto___12849;
var G__12852 = cljs.core.count(c__5673__auto___12849);
var G__12853 = (0);
seq__12802_12838 = G__12850;
chunk__12803_12839 = G__12851;
count__12804_12840 = G__12852;
i__12805_12841 = G__12853;
continue;
} else {
var m_12854 = cljs.core.first(seq__12802_12848__$1);
m_12854.remove();


var G__12855 = cljs.core.next(seq__12802_12848__$1);
var G__12856 = null;
var G__12857 = (0);
var G__12858 = (0);
seq__12802_12838 = G__12855;
chunk__12803_12839 = G__12856;
count__12804_12840 = G__12857;
i__12805_12841 = G__12858;
continue;
}
} else {
}
}
break;
}

cljs.core.reset_BANG_(map_ukv.core.markers,cljs.core.PersistentVector.EMPTY);

cljs.core.reset_BANG_(map_ukv.core.boundary_points,cljs.core.PersistentArrayMap.EMPTY);
} else {
}

(loader.style.display = "block");

var new_marker = L.marker(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lat,lng], null)),cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"icon","icon",1679606541),map_ukv.core.antenna_icon], null))).addTo(my_map);
var _ = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(map_ukv.core.markers,cljs.core.conj,new_marker);
var marker_id = cljs.core.count(cljs.core.deref(map_ukv.core.markers));
var color = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(marker_id,(1)))?"#3498db":"#e67e22");
var angles = cljs.core.range.cljs$core$IFn$_invoke$arity$3((0),(361),(5));
var angle_map = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (a){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,map_ukv.core.interpolate_points(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lat,lng], null),map_ukv.core.destination_point(lat,lng,dist,a),num_points)], null);
}),angles));
var flat_locations = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__12806){
var vec__12807 = p__12806;
var la = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12807,(0),null);
var ln = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12807,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"latitude","latitude",394867543),la,new cljs.core.Keyword(null,"longitude","longitude",-1268876372),ln], null);
}),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__12798_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(angle_map,p1__12798_SHARP_);
}),angles)));
return fetch("https://api.open-elevation.com/api/v1/lookup",cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 1, ["Content-Type","application/json"], null),new cljs.core.Keyword(null,"body","body",-2049205669),JSON.stringify(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"locations","locations",-435476560),flat_locations], null)))], null))).then((function (res){
return res.json();
})).then((function (data){
var all_elevations = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__12799_SHARP_){
return p1__12799_SHARP_.elevation;
}),data.results);
var chunked_elevs = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((num_points + (1)),all_elevations);
var seq__12810 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,chunked_elevs));
var chunk__12811 = null;
var count__12812 = (0);
var i__12813 = (0);
while(true){
if((i__12813 < count__12812)){
var vec__12820 = chunk__12811.cljs$core$IIndexed$_nth$arity$2(null,i__12813);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12820,(0),null);
var elevs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12820,(1),null);
var angle_12859 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(angles,idx);
var path_12860 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(angle_map,angle_12859);
fetch("http://localhost:3000/check-profile",cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 1, ["Content-Type","application/json"], null),new cljs.core.Keyword(null,"body","body",-2049205669),JSON.stringify(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"elevations","elevations",524473566),elevs,new cljs.core.Keyword(null,"h1","h1",-1896887462),h_base,new cljs.core.Keyword(null,"h2","h2",-372662728),h_user,new cljs.core.Keyword(null,"freq","freq",-1855845278),freq], null)))], null))).then(((function (seq__12810,chunk__12811,count__12812,i__12813,angle_12859,path_12860,vec__12820,idx,elevs,all_elevations,chunked_elevs,angles,angle_map,flat_locations,new_marker,_,marker_id,color,h_base,h_user,dist,freq,loader,num_points){
return (function (res){
return res.json();
});})(seq__12810,chunk__12811,count__12812,i__12813,angle_12859,path_12860,vec__12820,idx,elevs,all_elevations,chunked_elevs,angles,angle_map,flat_locations,new_marker,_,marker_id,color,h_base,h_user,dist,freq,loader,num_points))
).then(((function (seq__12810,chunk__12811,count__12812,i__12813,angle_12859,path_12860,vec__12820,idx,elevs,all_elevations,chunked_elevs,angles,angle_map,flat_locations,new_marker,_,marker_id,color,h_base,h_user,dist,freq,loader,num_points){
return (function (result){
var res_clj = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(result,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var visible_part = map_ukv.core.get_visible_segment(res_clj);
var last_idx = cljs.core.max.cljs$core$IFn$_invoke$arity$2((0),(cljs.core.count(visible_part) - (1)));
var edge_point = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(path_12860,last_idx);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(map_ukv.core.boundary_points,cljs.core.assoc,(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(marker_id)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(angle_12859)),edge_point);

var current_antenna_points = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (seq__12810,chunk__12811,count__12812,i__12813,res_clj,visible_part,last_idx,edge_point,angle_12859,path_12860,vec__12820,idx,elevs,all_elevations,chunked_elevs,angles,angle_map,flat_locations,new_marker,_,marker_id,color,h_base,h_user,dist,freq,loader,num_points){
return (function (p1__12800_SHARP_){
return clojure.string.starts_with_QMARK_(p1__12800_SHARP_,(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(marker_id)+"-"));
});})(seq__12810,chunk__12811,count__12812,i__12813,res_clj,visible_part,last_idx,edge_point,angle_12859,path_12860,vec__12820,idx,elevs,all_elevations,chunked_elevs,angles,angle_map,flat_locations,new_marker,_,marker_id,color,h_base,h_user,dist,freq,loader,num_points))
,cljs.core.keys(cljs.core.deref(map_ukv.core.boundary_points)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(current_antenna_points),cljs.core.count(angles))){
var sorted_coords = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (seq__12810,chunk__12811,count__12812,i__12813,current_antenna_points,res_clj,visible_part,last_idx,edge_point,angle_12859,path_12860,vec__12820,idx,elevs,all_elevations,chunked_elevs,angles,angle_map,flat_locations,new_marker,_,marker_id,color,h_base,h_user,dist,freq,loader,num_points){
return (function (p1__12801_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(map_ukv.core.boundary_points),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(marker_id)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__12801_SHARP_)));
});})(seq__12810,chunk__12811,count__12812,i__12813,current_antenna_points,res_clj,visible_part,last_idx,edge_point,angle_12859,path_12860,vec__12820,idx,elevs,all_elevations,chunked_elevs,angles,angle_map,flat_locations,new_marker,_,marker_id,color,h_base,h_user,dist,freq,loader,num_points))
,angles);
var clean_coords = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,sorted_coords);
var poly = module$node_modules$leaflet$dist$leaflet_src.polygon(cljs.core.clj__GT_js(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lat,lng], null)], null),clean_coords)),cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"color","color",1011675173),color,new cljs.core.Keyword(null,"fillColor","fillColor",-176906116),color,new cljs.core.Keyword(null,"fillOpacity","fillOpacity",619211981),0.4,new cljs.core.Keyword(null,"weight","weight",-1262796205),(2)], null)));
poly.addTo(cljs.core.deref(map_ukv.core.rays_group));

(loader.style.display = "none");

return map_ukv.core.update_legend_ui(freq,h_base,h_user);
} else {
return null;
}
});})(seq__12810,chunk__12811,count__12812,i__12813,angle_12859,path_12860,vec__12820,idx,elevs,all_elevations,chunked_elevs,angles,angle_map,flat_locations,new_marker,_,marker_id,color,h_base,h_user,dist,freq,loader,num_points))
);


var G__12861 = seq__12810;
var G__12862 = chunk__12811;
var G__12863 = count__12812;
var G__12864 = (i__12813 + (1));
seq__12810 = G__12861;
chunk__12811 = G__12862;
count__12812 = G__12863;
i__12813 = G__12864;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__12810);
if(temp__5823__auto__){
var seq__12810__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12810__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__12810__$1);
var G__12865 = cljs.core.chunk_rest(seq__12810__$1);
var G__12866 = c__5673__auto__;
var G__12867 = cljs.core.count(c__5673__auto__);
var G__12868 = (0);
seq__12810 = G__12865;
chunk__12811 = G__12866;
count__12812 = G__12867;
i__12813 = G__12868;
continue;
} else {
var vec__12823 = cljs.core.first(seq__12810__$1);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12823,(0),null);
var elevs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12823,(1),null);
var angle_12869 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(angles,idx);
var path_12870 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(angle_map,angle_12869);
fetch("http://localhost:3000/check-profile",cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 1, ["Content-Type","application/json"], null),new cljs.core.Keyword(null,"body","body",-2049205669),JSON.stringify(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"elevations","elevations",524473566),elevs,new cljs.core.Keyword(null,"h1","h1",-1896887462),h_base,new cljs.core.Keyword(null,"h2","h2",-372662728),h_user,new cljs.core.Keyword(null,"freq","freq",-1855845278),freq], null)))], null))).then(((function (seq__12810,chunk__12811,count__12812,i__12813,angle_12869,path_12870,vec__12823,idx,elevs,seq__12810__$1,temp__5823__auto__,all_elevations,chunked_elevs,angles,angle_map,flat_locations,new_marker,_,marker_id,color,h_base,h_user,dist,freq,loader,num_points){
return (function (res){
return res.json();
});})(seq__12810,chunk__12811,count__12812,i__12813,angle_12869,path_12870,vec__12823,idx,elevs,seq__12810__$1,temp__5823__auto__,all_elevations,chunked_elevs,angles,angle_map,flat_locations,new_marker,_,marker_id,color,h_base,h_user,dist,freq,loader,num_points))
).then(((function (seq__12810,chunk__12811,count__12812,i__12813,angle_12869,path_12870,vec__12823,idx,elevs,seq__12810__$1,temp__5823__auto__,all_elevations,chunked_elevs,angles,angle_map,flat_locations,new_marker,_,marker_id,color,h_base,h_user,dist,freq,loader,num_points){
return (function (result){
var res_clj = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(result,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var visible_part = map_ukv.core.get_visible_segment(res_clj);
var last_idx = cljs.core.max.cljs$core$IFn$_invoke$arity$2((0),(cljs.core.count(visible_part) - (1)));
var edge_point = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(path_12870,last_idx);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(map_ukv.core.boundary_points,cljs.core.assoc,(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(marker_id)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(angle_12869)),edge_point);

var current_antenna_points = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (seq__12810,chunk__12811,count__12812,i__12813,res_clj,visible_part,last_idx,edge_point,angle_12869,path_12870,vec__12823,idx,elevs,seq__12810__$1,temp__5823__auto__,all_elevations,chunked_elevs,angles,angle_map,flat_locations,new_marker,_,marker_id,color,h_base,h_user,dist,freq,loader,num_points){
return (function (p1__12800_SHARP_){
return clojure.string.starts_with_QMARK_(p1__12800_SHARP_,(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(marker_id)+"-"));
});})(seq__12810,chunk__12811,count__12812,i__12813,res_clj,visible_part,last_idx,edge_point,angle_12869,path_12870,vec__12823,idx,elevs,seq__12810__$1,temp__5823__auto__,all_elevations,chunked_elevs,angles,angle_map,flat_locations,new_marker,_,marker_id,color,h_base,h_user,dist,freq,loader,num_points))
,cljs.core.keys(cljs.core.deref(map_ukv.core.boundary_points)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(current_antenna_points),cljs.core.count(angles))){
var sorted_coords = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (seq__12810,chunk__12811,count__12812,i__12813,current_antenna_points,res_clj,visible_part,last_idx,edge_point,angle_12869,path_12870,vec__12823,idx,elevs,seq__12810__$1,temp__5823__auto__,all_elevations,chunked_elevs,angles,angle_map,flat_locations,new_marker,_,marker_id,color,h_base,h_user,dist,freq,loader,num_points){
return (function (p1__12801_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(map_ukv.core.boundary_points),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(marker_id)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__12801_SHARP_)));
});})(seq__12810,chunk__12811,count__12812,i__12813,current_antenna_points,res_clj,visible_part,last_idx,edge_point,angle_12869,path_12870,vec__12823,idx,elevs,seq__12810__$1,temp__5823__auto__,all_elevations,chunked_elevs,angles,angle_map,flat_locations,new_marker,_,marker_id,color,h_base,h_user,dist,freq,loader,num_points))
,angles);
var clean_coords = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,sorted_coords);
var poly = module$node_modules$leaflet$dist$leaflet_src.polygon(cljs.core.clj__GT_js(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lat,lng], null)], null),clean_coords)),cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"color","color",1011675173),color,new cljs.core.Keyword(null,"fillColor","fillColor",-176906116),color,new cljs.core.Keyword(null,"fillOpacity","fillOpacity",619211981),0.4,new cljs.core.Keyword(null,"weight","weight",-1262796205),(2)], null)));
poly.addTo(cljs.core.deref(map_ukv.core.rays_group));

(loader.style.display = "none");

return map_ukv.core.update_legend_ui(freq,h_base,h_user);
} else {
return null;
}
});})(seq__12810,chunk__12811,count__12812,i__12813,angle_12869,path_12870,vec__12823,idx,elevs,seq__12810__$1,temp__5823__auto__,all_elevations,chunked_elevs,angles,angle_map,flat_locations,new_marker,_,marker_id,color,h_base,h_user,dist,freq,loader,num_points))
);


var G__12871 = cljs.core.next(seq__12810__$1);
var G__12872 = null;
var G__12873 = (0);
var G__12874 = (0);
seq__12810 = G__12871;
chunk__12811 = G__12872;
count__12812 = G__12873;
i__12813 = G__12874;
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
map_ukv.core.render_history_table = (function map_ukv$core$render_history_table(data){
var body = document.getElementById("history-body");
if(cljs.core.truth_(body)){
(body.innerHTML = "");

if(cljs.core.empty_QMARK_(data)){
return (body.innerHTML = "<tr><td colspan='4' style='text-align:center; padding:10px; color:gray;'>\u0406\u0441\u0442\u043E\u0440\u0456\u044F \u043F\u043E\u0440\u043E\u0436\u043D\u044F</td></tr>");
} else {
var seq__12826 = cljs.core.seq(data);
var chunk__12827 = null;
var count__12828 = (0);
var i__12829 = (0);
while(true){
if((i__12829 < count__12828)){
var item = chunk__12827.cljs$core$IIndexed$_nth$arity$2(null,i__12829);
var row_12875 = body.insertRow();
var id_12876 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(item,"id");
var lat_12877 = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(item,"lat")));
var lng_12878 = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(item,"lng")));
var h1_12879 = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(item,"h_antenna")));
var h2_12880 = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(item,"h_user")));
var freq_12881 = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(item,"freq")));
var raw_dt_12882 = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(item,"created_at")));
var dt_12883 = (((((raw_dt_12882).length) > (16)))?cljs.core.subs.cljs$core$IFn$_invoke$arity$3(raw_dt_12882,(5),(16)):raw_dt_12882);
row_12875.setAttribute("data-lat",lat_12877);

row_12875.setAttribute("data-lng",lng_12878);

row_12875.setAttribute("data-h1",h1_12879);

row_12875.setAttribute("data-h2",h2_12880);

row_12875.setAttribute("data-freq",freq_12881);

row_12875.setAttribute("data-id",id_12876);

(row_12875.className = "history-row");

(row_12875.style.cursor = "pointer");

(row_12875.innerHTML = (""+"<td style='padding: 6px 4px; color: #000;'>"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dt_12883)+"</td>"+"<td style='padding: 6px 4px; font-weight: bold; color: #2980b9; text-align: center;'>"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(freq_12881)+"</td>"+"<td style='padding: 6px 4px; color: #27ae60; text-align: right;'>"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(h1_12879)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(h2_12880)+"\u043C</td>"+"<td style='padding: 6px 4px; text-align: center;'>"+"<button class='delete-btn' style='background:none; border:none; color:#e74c3c; cursor:pointer; font-weight:bold; font-size:14px;'>&times;</button>"+"</td>"));


var G__12884 = seq__12826;
var G__12885 = chunk__12827;
var G__12886 = count__12828;
var G__12887 = (i__12829 + (1));
seq__12826 = G__12884;
chunk__12827 = G__12885;
count__12828 = G__12886;
i__12829 = G__12887;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__12826);
if(temp__5823__auto__){
var seq__12826__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12826__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__12826__$1);
var G__12888 = cljs.core.chunk_rest(seq__12826__$1);
var G__12889 = c__5673__auto__;
var G__12890 = cljs.core.count(c__5673__auto__);
var G__12891 = (0);
seq__12826 = G__12888;
chunk__12827 = G__12889;
count__12828 = G__12890;
i__12829 = G__12891;
continue;
} else {
var item = cljs.core.first(seq__12826__$1);
var row_12892 = body.insertRow();
var id_12893 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(item,"id");
var lat_12894 = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(item,"lat")));
var lng_12895 = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(item,"lng")));
var h1_12896 = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(item,"h_antenna")));
var h2_12897 = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(item,"h_user")));
var freq_12898 = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(item,"freq")));
var raw_dt_12899 = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(item,"created_at")));
var dt_12900 = (((((raw_dt_12899).length) > (16)))?cljs.core.subs.cljs$core$IFn$_invoke$arity$3(raw_dt_12899,(5),(16)):raw_dt_12899);
row_12892.setAttribute("data-lat",lat_12894);

row_12892.setAttribute("data-lng",lng_12895);

row_12892.setAttribute("data-h1",h1_12896);

row_12892.setAttribute("data-h2",h2_12897);

row_12892.setAttribute("data-freq",freq_12898);

row_12892.setAttribute("data-id",id_12893);

(row_12892.className = "history-row");

(row_12892.style.cursor = "pointer");

(row_12892.innerHTML = (""+"<td style='padding: 6px 4px; color: #000;'>"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dt_12900)+"</td>"+"<td style='padding: 6px 4px; font-weight: bold; color: #2980b9; text-align: center;'>"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(freq_12898)+"</td>"+"<td style='padding: 6px 4px; color: #27ae60; text-align: right;'>"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(h1_12896)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(h2_12897)+"\u043C</td>"+"<td style='padding: 6px 4px; text-align: center;'>"+"<button class='delete-btn' style='background:none; border:none; color:#e74c3c; cursor:pointer; font-weight:bold; font-size:14px;'>&times;</button>"+"</td>"));


var G__12901 = cljs.core.next(seq__12826__$1);
var G__12902 = null;
var G__12903 = (0);
var G__12904 = (0);
seq__12826 = G__12901;
chunk__12827 = G__12902;
count__12828 = G__12903;
i__12829 = G__12904;
continue;
}
} else {
return null;
}
}
break;
}
}
} else {
return null;
}
});
map_ukv.core.fetch_history = (function map_ukv$core$fetch_history(){
return fetch("http://localhost:3000/history").then((function (res){
return res.json();
})).then((function (data){
var clj_data = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(data);
return map_ukv.core.render_history_table(clj_data);
})).catch((function (err){
return console.error("\u041F\u043E\u043C\u0438\u043B\u043A\u0430 \u0437\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0435\u043D\u043D\u044F \u0456\u0441\u0442\u043E\u0440\u0456\u0457:",err);
}));
});
map_ukv.core.save_to_db = (function map_ukv$core$save_to_db(lat,lng,h1,h2,freq){
var data = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"lat","lat",-580793929),lat,new cljs.core.Keyword(null,"lng","lng",1667213918),lng,new cljs.core.Keyword(null,"h1","h1",-1896887462),h1,new cljs.core.Keyword(null,"h2","h2",-372662728),h2,new cljs.core.Keyword(null,"freq","freq",-1855845278),freq], null);
return fetch("http://localhost:3000/save-scan",cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 1, ["Content-Type","application/json"], null),new cljs.core.Keyword(null,"body","body",-2049205669),JSON.stringify(cljs.core.clj__GT_js(data))], null))).then((function (res){
return res.json();
})).then((function (result){
console.log("\u0417\u0431\u0435\u0440\u0435\u0436\u0435\u043D\u043E \u0432 \u0411\u0414:",result);

map_ukv.core.fetch_history();

return alert("\u0420\u043E\u0437\u0440\u0430\u0445\u0443\u043D\u043E\u043A \u0443\u0441\u043F\u0456\u0448\u043D\u043E \u0437\u0431\u0435\u0440\u0435\u0436\u0435\u043D\u043E \u0432 \u0431\u0430\u0437\u0443 \u0434\u0430\u043D\u0438\u0445!");
})).catch((function (err){
console.error("\u041F\u043E\u043C\u0438\u043B\u043A\u0430 \u0437\u0431\u0435\u0440\u0435\u0436\u0435\u043D\u043D\u044F:",err);

return alert("\u041D\u0435 \u0432\u0434\u0430\u043B\u043E\u0441\u044F \u0437\u0431\u0435\u0440\u0435\u0433\u0442\u0438 \u0432 \u0411\u0414.");
}));
});
map_ukv.core.delete_from_db = (function map_ukv$core$delete_from_db(id){
if(cljs.core.truth_((function (){var and__5140__auto__ = id;
if(cljs.core.truth_(and__5140__auto__)){
return confirm("\u0412\u0438 \u0432\u043F\u0435\u0432\u043D\u0435\u043D\u0456, \u0449\u043E \u0445\u043E\u0447\u0435\u0442\u0435 \u0432\u0438\u0434\u0430\u043B\u0438\u0442\u0438 \u0446\u0435\u0439 \u0437\u0430\u043F\u0438\u0441?");
} else {
return and__5140__auto__;
}
})())){
return fetch((""+"http://localhost:3000/delete-scan/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)),cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"method","method",55703592),"DELETE"], null))).then((function (res){
if(cljs.core.truth_(res.ok)){
return res.json();
} else {
throw (new Error("\u041F\u043E\u043C\u0438\u043B\u043A\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0430"));
}
})).then((function (result){
console.log("\u0412\u0438\u0434\u0430\u043B\u0435\u043D\u043E ID:",id);

return map_ukv.core.fetch_history();
})).catch((function (err){
console.error("\u041F\u043E\u043C\u0438\u043B\u043A\u0430 \u0432\u0438\u0434\u0430\u043B\u0435\u043D\u043D\u044F:",err);

return alert("\u041D\u0435 \u0432\u0434\u0430\u043B\u043E\u0441\u044F \u0432\u0438\u0434\u0430\u043B\u0438\u0442\u0438 \u0437\u0430\u043F\u0438\u0441 \u0456\u0437 \u0431\u0430\u0437\u0438.");
}));
} else {
return null;
}
});
map_ukv.core.setup_ui_events = (function map_ukv$core$setup_ui_events(){
var clear_btn = document.getElementById("clear-btn");
var export_btn = document.getElementById("export-btn");
var save_db_btn = document.getElementById("save-db-btn");
var history_body = document.getElementById("history-body");
if(cljs.core.truth_(clear_btn)){
clear_btn.addEventListener("click",(function (){
cljs.core.deref(map_ukv.core.rays_group).clearLayers();

var seq__12830_12905 = cljs.core.seq(cljs.core.deref(map_ukv.core.markers));
var chunk__12831_12906 = null;
var count__12832_12907 = (0);
var i__12833_12908 = (0);
while(true){
if((i__12833_12908 < count__12832_12907)){
var m_12909 = chunk__12831_12906.cljs$core$IIndexed$_nth$arity$2(null,i__12833_12908);
m_12909.remove();


var G__12910 = seq__12830_12905;
var G__12911 = chunk__12831_12906;
var G__12912 = count__12832_12907;
var G__12913 = (i__12833_12908 + (1));
seq__12830_12905 = G__12910;
chunk__12831_12906 = G__12911;
count__12832_12907 = G__12912;
i__12833_12908 = G__12913;
continue;
} else {
var temp__5823__auto___12914 = cljs.core.seq(seq__12830_12905);
if(temp__5823__auto___12914){
var seq__12830_12915__$1 = temp__5823__auto___12914;
if(cljs.core.chunked_seq_QMARK_(seq__12830_12915__$1)){
var c__5673__auto___12916 = cljs.core.chunk_first(seq__12830_12915__$1);
var G__12917 = cljs.core.chunk_rest(seq__12830_12915__$1);
var G__12918 = c__5673__auto___12916;
var G__12919 = cljs.core.count(c__5673__auto___12916);
var G__12920 = (0);
seq__12830_12905 = G__12917;
chunk__12831_12906 = G__12918;
count__12832_12907 = G__12919;
i__12833_12908 = G__12920;
continue;
} else {
var m_12921 = cljs.core.first(seq__12830_12915__$1);
m_12921.remove();


var G__12922 = cljs.core.next(seq__12830_12915__$1);
var G__12923 = null;
var G__12924 = (0);
var G__12925 = (0);
seq__12830_12905 = G__12922;
chunk__12831_12906 = G__12923;
count__12832_12907 = G__12924;
i__12833_12908 = G__12925;
continue;
}
} else {
}
}
break;
}

cljs.core.reset_BANG_(map_ukv.core.markers,cljs.core.PersistentVector.EMPTY);

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
export_btn.addEventListener("click",(function (){
var marker = cljs.core.last(cljs.core.deref(map_ukv.core.markers));
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
var export_data = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"antenna","antenna",-1733193971),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lat","lat",-580793929),lat,new cljs.core.Keyword(null,"lng","lng",1667213918),lng], null),new cljs.core.Keyword(null,"parameters","parameters",-1229919748),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"h1","h1",-1896887462),parseFloat(document.getElementById("antenna-height").value),new cljs.core.Keyword(null,"h2","h2",-372662728),parseFloat(document.getElementById("user-height").value),new cljs.core.Keyword(null,"freq","freq",-1855845278),parseInt(document.getElementById("freq-select").value)], null),new cljs.core.Keyword(null,"boundary","boundary",-2000996754),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__12834){
var vec__12835 = p__12834;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12835,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12835,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)),v], null);
}),points))], null);
var json_str = JSON.stringify(cljs.core.clj__GT_js(export_data));
var blob = (new Blob([json_str],({"type": "application/json"})));
var url = URL.createObjectURL(blob);
var link = document.createElement("a");
(link.href = url);

(link.download = "coverage-export.json");

link.click();

return URL.revokeObjectURL(url);
} else {
return alert("\u041F\u043E\u043C\u0438\u043B\u043A\u0430: \u0410\u043D\u0442\u0435\u043D\u0438 \u043D\u0435 \u0437\u043D\u0430\u0439\u0434\u0435\u043D\u043E!");
}
}));
} else {
}

if(cljs.core.truth_(save_db_btn)){
save_db_btn.addEventListener("click",(function (){
var marker = cljs.core.last(cljs.core.deref(map_ukv.core.markers));
if(cljs.core.truth_(marker)){
var latlng = marker.getLatLng();
var h1 = parseFloat(document.getElementById("antenna-height").value);
var h2 = parseFloat(document.getElementById("user-height").value);
var freq = parseInt(document.getElementById("freq-select").value);
return map_ukv.core.save_to_db(latlng.lat,latlng.lng,h1,h2,freq);
} else {
return alert("\u0421\u043F\u043E\u0447\u0430\u0442\u043A\u0443 \u043F\u043E\u0441\u0442\u0430\u0432\u0442\u0435 \u0430\u043D\u0442\u0435\u043D\u0443 \u043D\u0430 \u043A\u0430\u0440\u0442\u0443!");
}
}));
} else {
}

if(cljs.core.truth_(history_body)){
return history_body.addEventListener("click",(function (e){
var target = e.target;
var row = target.closest("tr");
var id = (row["dataset"]["id"]);
if(cljs.core.truth_(target.classList.contains("delete-btn"))){
e.stopPropagation();

return map_ukv.core.delete_from_db(id);
} else {
var lat = parseFloat((row["dataset"]["lat"]));
var lng = parseFloat((row["dataset"]["lng"]));
var h1 = parseFloat((row["dataset"]["h1"]));
var h2 = parseFloat((row["dataset"]["h2"]));
var freq = parseInt((row["dataset"]["freq"]));
if(((cljs.core.not(isNaN(lat))) && (cljs.core.not(isNaN(lng))))){
cljs.core.deref(map_ukv.core.map_state).flyTo(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lat,lng], null)),(13));

(document.getElementById("antenna-height").value = h1);

(document.getElementById("user-height").value = h2);

(document.getElementById("freq-select").value = freq);

return map_ukv.core.handle_map_click(lat,lng,cljs.core.deref(map_ukv.core.map_state));
} else {
return null;
}
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
cljs.core.reset_BANG_(map_ukv.core.map_state,my_map);

var base_maps_12926 = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, ["\u0422\u043E\u043F\u043E\u0433\u0440\u0430\u0444\u0456\u0447\u043D\u0430",topo,"\u0412\u0443\u043B\u0438\u0446\u0456",streets,"\u0421\u0443\u043F\u0443\u0442\u043D\u0438\u043A",satellite], null));
L.control.layers(base_maps_12926).addTo(my_map);

var legend_12927 = L.control(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),"bottomright"], null)));
(legend_12927.onAdd = (function (map){
var div = L.DomUtil.create("div","map-legend");
(div.id = "dynamic-legend");

(div.innerHTML = "\u041A\u043B\u0456\u043A\u043D\u0456\u0442\u044C \u043D\u0430 \u043A\u0430\u0440\u0442\u0443 \u0434\u043B\u044F \u0440\u043E\u0437\u0440\u0430\u0445\u0443\u043D\u043A\u0443");

return div;
}));

legend_12927.addTo(my_map);

cljs.core.reset_BANG_(map_ukv.core.legend_ui,legend_12927);

cljs.core.reset_BANG_(map_ukv.core.rays_group,L.layerGroup().addTo(my_map));

my_map.on("click",(function (e){
var lat = e.latlng.lat;
var lng = e.latlng.lng;
return map_ukv.core.handle_map_click(lat,lng,my_map);
}));

var temp__5823__auto___12928 = document.getElementById("scan-dist");
if(cljs.core.truth_(temp__5823__auto___12928)){
var dist_input_12929 = temp__5823__auto___12928;
(dist_input_12929.value = "50");
} else {
}

map_ukv.core.setup_ui_events();

map_ukv.core.fetch_history();

return console.log("\u0421\u0438\u0441\u0442\u0435\u043C\u0430 \u0433\u043E\u0442\u043E\u0432\u0430.");
});

//# sourceMappingURL=map_ukv.core.js.map
