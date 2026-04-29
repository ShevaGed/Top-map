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
map_ukv.core.API_URL = "http://localhost:3000";
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
var vec__12761 = p1;
var lat1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12761,(0),null);
var lng1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12761,(1),null);
var vec__12764 = p2;
var lat2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12764,(0),null);
var lng2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12764,(1),null);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (i){
var fraction = (i / steps);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(lat1 + (fraction * (lat2 - lat1))),(lng1 + (fraction * (lng2 - lng1)))], null);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1((steps + (1))));
});
map_ukv.core.fetch_ray_visibility = (function map_ukv$core$fetch_ray_visibility(path_points,h){
var body_api = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"locations","locations",-435476560),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__12768){
var vec__12769 = p__12768;
var lat = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12769,(0),null);
var lng = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12769,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"latitude","latitude",394867543),lat,new cljs.core.Keyword(null,"longitude","longitude",-1268876372),lng], null);
}),path_points)], null));
return fetch("https://api.open-elevation.com/api/v1/lookup",cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 1, ["Content-Type","application/json"], null),new cljs.core.Keyword(null,"body","body",-2049205669),JSON.stringify(body_api)], null))).then((function (res){
return res.json();
})).then((function (data){
var elevations = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__12767_SHARP_){
return p1__12767_SHARP_.elevation;
}),data.results);
return fetch((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(map_ukv.core.API_URL)+"/check-profile"),cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 1, ["Content-Type","application/json"], null),new cljs.core.Keyword(null,"body","body",-2049205669),JSON.stringify(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"elevations","elevations",524473566),elevations,new cljs.core.Keyword(null,"h1","h1",-1896887462),h,new cljs.core.Keyword(null,"h2","h2",-372662728),h], null)))], null))).then((function (res){
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
map_ukv.core.validate_params = (function map_ukv$core$validate_params(h_base,h_user,dist,freq){
if(cljs.core.truth_((function (){var or__5142__auto__ = isNaN(h_base);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (((h_base < (1))) || ((h_base > (300))));
}
})())){
alert("\u041F\u043E\u043C\u0438\u043B\u043A\u0430: \u0412\u0438\u0441\u043E\u0442\u0430 \u0430\u043D\u0442\u0435\u043D\u0438 \u043C\u0430\u0454 \u0431\u0443\u0442\u0438 \u0432\u0456\u0434 1 \u0434\u043E 300 \u043C\u0435\u0442\u0440\u0456\u0432.");

return false;
} else {
if(cljs.core.truth_((function (){var or__5142__auto__ = isNaN(h_user);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (((h_user < (1))) || ((h_user > (50))));
}
})())){
alert("\u041F\u043E\u043C\u0438\u043B\u043A\u0430: \u0412\u0438\u0441\u043E\u0442\u0430 \u043F\u0440\u0438\u0439\u043C\u0430\u0447\u0430 \u043C\u0430\u0454 \u0431\u0443\u0442\u0438 \u0432\u0456\u0434 1 \u0434\u043E 50 \u043C\u0435\u0442\u0440\u0456\u0432.");

return false;
} else {
if(cljs.core.truth_((function (){var or__5142__auto__ = isNaN(dist);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (((dist <= (0))) || ((dist > (100))));
}
})())){
alert("\u041F\u043E\u043C\u0438\u043B\u043A\u0430: \u0414\u0438\u0441\u0442\u0430\u043D\u0446\u0456\u044F \u0441\u043A\u0430\u043D\u0443\u0432\u0430\u043D\u043D\u044F \u043C\u0430\u0454 \u0431\u0443\u0442\u0438 \u0432\u0456\u0434 1 \u0434\u043E 100 \u043A\u043C.");

return false;
} else {
if((!(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(440),null,(140),null], null), null),freq)))){
alert("\u041F\u043E\u043C\u0438\u043B\u043A\u0430: \u041E\u0431\u0435\u0440\u0456\u0442\u044C \u043A\u043E\u0440\u0435\u043A\u0442\u043D\u0443 \u0447\u0430\u0441\u0442\u043E\u0442\u0443 (140 \u0430\u0431\u043E 440 \u041C\u0413\u0446).");

return false;
} else {
return true;

}
}
}
}
});
map_ukv.core.handle_map_click = (function map_ukv$core$handle_map_click(lat,lng,my_map){
var h_base = parseFloat(document.getElementById("antenna-height").value);
var h_user = parseFloat(document.getElementById("user-height").value);
var dist = parseFloat(document.getElementById("scan-dist").value);
var freq = parseInt(document.getElementById("freq-select").value);
var loader = document.getElementById("loader");
var num_points = (50);
if(map_ukv.core.validate_params(h_base,h_user,dist,freq)){
if((cljs.core.count(cljs.core.deref(map_ukv.core.markers)) >= (2))){
cljs.core.deref(map_ukv.core.rays_group).clearLayers();

var seq__12776_12812 = cljs.core.seq(cljs.core.deref(map_ukv.core.markers));
var chunk__12777_12813 = null;
var count__12778_12814 = (0);
var i__12779_12815 = (0);
while(true){
if((i__12779_12815 < count__12778_12814)){
var m_12816 = chunk__12777_12813.cljs$core$IIndexed$_nth$arity$2(null,i__12779_12815);
m_12816.remove();


var G__12817 = seq__12776_12812;
var G__12818 = chunk__12777_12813;
var G__12819 = count__12778_12814;
var G__12820 = (i__12779_12815 + (1));
seq__12776_12812 = G__12817;
chunk__12777_12813 = G__12818;
count__12778_12814 = G__12819;
i__12779_12815 = G__12820;
continue;
} else {
var temp__5823__auto___12821 = cljs.core.seq(seq__12776_12812);
if(temp__5823__auto___12821){
var seq__12776_12822__$1 = temp__5823__auto___12821;
if(cljs.core.chunked_seq_QMARK_(seq__12776_12822__$1)){
var c__5673__auto___12823 = cljs.core.chunk_first(seq__12776_12822__$1);
var G__12824 = cljs.core.chunk_rest(seq__12776_12822__$1);
var G__12825 = c__5673__auto___12823;
var G__12826 = cljs.core.count(c__5673__auto___12823);
var G__12827 = (0);
seq__12776_12812 = G__12824;
chunk__12777_12813 = G__12825;
count__12778_12814 = G__12826;
i__12779_12815 = G__12827;
continue;
} else {
var m_12828 = cljs.core.first(seq__12776_12822__$1);
m_12828.remove();


var G__12829 = cljs.core.next(seq__12776_12822__$1);
var G__12830 = null;
var G__12831 = (0);
var G__12832 = (0);
seq__12776_12812 = G__12829;
chunk__12777_12813 = G__12830;
count__12778_12814 = G__12831;
i__12779_12815 = G__12832;
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
var flat_locations = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__12780){
var vec__12781 = p__12780;
var la = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12781,(0),null);
var ln = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12781,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"latitude","latitude",394867543),la,new cljs.core.Keyword(null,"longitude","longitude",-1268876372),ln], null);
}),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__12772_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(angle_map,p1__12772_SHARP_);
}),angles)));
return fetch("https://api.open-elevation.com/api/v1/lookup",cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 1, ["Content-Type","application/json"], null),new cljs.core.Keyword(null,"body","body",-2049205669),JSON.stringify(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"locations","locations",-435476560),flat_locations], null)))], null))).then((function (res){
if(cljs.core.truth_(res.ok)){
return res.json();
} else {
throw (new Error("\u041F\u043E\u043C\u0438\u043B\u043A\u0430 API \u0432\u0438\u0441\u043E\u0442 (Open-Elevation)"));
}
})).then((function (data){
var all_elevations = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__12773_SHARP_){
return p1__12773_SHARP_.elevation;
}),data.results);
var chunked_elevs = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((num_points + (1)),all_elevations);
var seq__12784 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,chunked_elevs));
var chunk__12785 = null;
var count__12786 = (0);
var i__12787 = (0);
while(true){
if((i__12787 < count__12786)){
var vec__12794 = chunk__12785.cljs$core$IIndexed$_nth$arity$2(null,i__12787);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12794,(0),null);
var elevs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12794,(1),null);
var angle_12833 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(angles,idx);
var path_12834 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(angle_map,angle_12833);
fetch((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(map_ukv.core.API_URL)+"/check-profile"),cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 1, ["Content-Type","application/json"], null),new cljs.core.Keyword(null,"body","body",-2049205669),JSON.stringify(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"elevations","elevations",524473566),elevs,new cljs.core.Keyword(null,"h1","h1",-1896887462),h_base,new cljs.core.Keyword(null,"h2","h2",-372662728),h_user,new cljs.core.Keyword(null,"freq","freq",-1855845278),freq], null)))], null))).then(((function (seq__12784,chunk__12785,count__12786,i__12787,angle_12833,path_12834,vec__12794,idx,elevs,all_elevations,chunked_elevs,angles,angle_map,flat_locations,new_marker,_,marker_id,color,h_base,h_user,dist,freq,loader,num_points){
return (function (res){
return res.json();
});})(seq__12784,chunk__12785,count__12786,i__12787,angle_12833,path_12834,vec__12794,idx,elevs,all_elevations,chunked_elevs,angles,angle_map,flat_locations,new_marker,_,marker_id,color,h_base,h_user,dist,freq,loader,num_points))
).then(((function (seq__12784,chunk__12785,count__12786,i__12787,angle_12833,path_12834,vec__12794,idx,elevs,all_elevations,chunked_elevs,angles,angle_map,flat_locations,new_marker,_,marker_id,color,h_base,h_user,dist,freq,loader,num_points){
return (function (result){
var res_clj = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(result,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var visible_part = map_ukv.core.get_visible_segment(res_clj);
var last_idx = cljs.core.max.cljs$core$IFn$_invoke$arity$2((0),(cljs.core.count(visible_part) - (1)));
var edge_point = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(path_12834,last_idx);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(map_ukv.core.boundary_points,cljs.core.assoc,(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(marker_id)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(angle_12833)),edge_point);

var current_antenna_points = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (seq__12784,chunk__12785,count__12786,i__12787,res_clj,visible_part,last_idx,edge_point,angle_12833,path_12834,vec__12794,idx,elevs,all_elevations,chunked_elevs,angles,angle_map,flat_locations,new_marker,_,marker_id,color,h_base,h_user,dist,freq,loader,num_points){
return (function (p1__12774_SHARP_){
return clojure.string.starts_with_QMARK_(p1__12774_SHARP_,(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(marker_id)+"-"));
});})(seq__12784,chunk__12785,count__12786,i__12787,res_clj,visible_part,last_idx,edge_point,angle_12833,path_12834,vec__12794,idx,elevs,all_elevations,chunked_elevs,angles,angle_map,flat_locations,new_marker,_,marker_id,color,h_base,h_user,dist,freq,loader,num_points))
,cljs.core.keys(cljs.core.deref(map_ukv.core.boundary_points)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(current_antenna_points),cljs.core.count(angles))){
var sorted_coords = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (seq__12784,chunk__12785,count__12786,i__12787,current_antenna_points,res_clj,visible_part,last_idx,edge_point,angle_12833,path_12834,vec__12794,idx,elevs,all_elevations,chunked_elevs,angles,angle_map,flat_locations,new_marker,_,marker_id,color,h_base,h_user,dist,freq,loader,num_points){
return (function (p1__12775_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(map_ukv.core.boundary_points),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(marker_id)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__12775_SHARP_)));
});})(seq__12784,chunk__12785,count__12786,i__12787,current_antenna_points,res_clj,visible_part,last_idx,edge_point,angle_12833,path_12834,vec__12794,idx,elevs,all_elevations,chunked_elevs,angles,angle_map,flat_locations,new_marker,_,marker_id,color,h_base,h_user,dist,freq,loader,num_points))
,angles);
var clean_coords = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,sorted_coords);
var poly = module$node_modules$leaflet$dist$leaflet_src.polygon(cljs.core.clj__GT_js(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lat,lng], null)], null),clean_coords)),cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"color","color",1011675173),color,new cljs.core.Keyword(null,"fillColor","fillColor",-176906116),color,new cljs.core.Keyword(null,"fillOpacity","fillOpacity",619211981),0.4,new cljs.core.Keyword(null,"weight","weight",-1262796205),(2)], null)));
poly.addTo(cljs.core.deref(map_ukv.core.rays_group));

(loader.style.display = "none");

return map_ukv.core.update_legend_ui(freq,h_base,h_user);
} else {
return null;
}
});})(seq__12784,chunk__12785,count__12786,i__12787,angle_12833,path_12834,vec__12794,idx,elevs,all_elevations,chunked_elevs,angles,angle_map,flat_locations,new_marker,_,marker_id,color,h_base,h_user,dist,freq,loader,num_points))
);


var G__12835 = seq__12784;
var G__12836 = chunk__12785;
var G__12837 = count__12786;
var G__12838 = (i__12787 + (1));
seq__12784 = G__12835;
chunk__12785 = G__12836;
count__12786 = G__12837;
i__12787 = G__12838;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__12784);
if(temp__5823__auto__){
var seq__12784__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12784__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__12784__$1);
var G__12839 = cljs.core.chunk_rest(seq__12784__$1);
var G__12840 = c__5673__auto__;
var G__12841 = cljs.core.count(c__5673__auto__);
var G__12842 = (0);
seq__12784 = G__12839;
chunk__12785 = G__12840;
count__12786 = G__12841;
i__12787 = G__12842;
continue;
} else {
var vec__12797 = cljs.core.first(seq__12784__$1);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12797,(0),null);
var elevs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12797,(1),null);
var angle_12843 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(angles,idx);
var path_12844 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(angle_map,angle_12843);
fetch((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(map_ukv.core.API_URL)+"/check-profile"),cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 1, ["Content-Type","application/json"], null),new cljs.core.Keyword(null,"body","body",-2049205669),JSON.stringify(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"elevations","elevations",524473566),elevs,new cljs.core.Keyword(null,"h1","h1",-1896887462),h_base,new cljs.core.Keyword(null,"h2","h2",-372662728),h_user,new cljs.core.Keyword(null,"freq","freq",-1855845278),freq], null)))], null))).then(((function (seq__12784,chunk__12785,count__12786,i__12787,angle_12843,path_12844,vec__12797,idx,elevs,seq__12784__$1,temp__5823__auto__,all_elevations,chunked_elevs,angles,angle_map,flat_locations,new_marker,_,marker_id,color,h_base,h_user,dist,freq,loader,num_points){
return (function (res){
return res.json();
});})(seq__12784,chunk__12785,count__12786,i__12787,angle_12843,path_12844,vec__12797,idx,elevs,seq__12784__$1,temp__5823__auto__,all_elevations,chunked_elevs,angles,angle_map,flat_locations,new_marker,_,marker_id,color,h_base,h_user,dist,freq,loader,num_points))
).then(((function (seq__12784,chunk__12785,count__12786,i__12787,angle_12843,path_12844,vec__12797,idx,elevs,seq__12784__$1,temp__5823__auto__,all_elevations,chunked_elevs,angles,angle_map,flat_locations,new_marker,_,marker_id,color,h_base,h_user,dist,freq,loader,num_points){
return (function (result){
var res_clj = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(result,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var visible_part = map_ukv.core.get_visible_segment(res_clj);
var last_idx = cljs.core.max.cljs$core$IFn$_invoke$arity$2((0),(cljs.core.count(visible_part) - (1)));
var edge_point = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(path_12844,last_idx);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(map_ukv.core.boundary_points,cljs.core.assoc,(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(marker_id)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(angle_12843)),edge_point);

var current_antenna_points = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (seq__12784,chunk__12785,count__12786,i__12787,res_clj,visible_part,last_idx,edge_point,angle_12843,path_12844,vec__12797,idx,elevs,seq__12784__$1,temp__5823__auto__,all_elevations,chunked_elevs,angles,angle_map,flat_locations,new_marker,_,marker_id,color,h_base,h_user,dist,freq,loader,num_points){
return (function (p1__12774_SHARP_){
return clojure.string.starts_with_QMARK_(p1__12774_SHARP_,(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(marker_id)+"-"));
});})(seq__12784,chunk__12785,count__12786,i__12787,res_clj,visible_part,last_idx,edge_point,angle_12843,path_12844,vec__12797,idx,elevs,seq__12784__$1,temp__5823__auto__,all_elevations,chunked_elevs,angles,angle_map,flat_locations,new_marker,_,marker_id,color,h_base,h_user,dist,freq,loader,num_points))
,cljs.core.keys(cljs.core.deref(map_ukv.core.boundary_points)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(current_antenna_points),cljs.core.count(angles))){
var sorted_coords = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (seq__12784,chunk__12785,count__12786,i__12787,current_antenna_points,res_clj,visible_part,last_idx,edge_point,angle_12843,path_12844,vec__12797,idx,elevs,seq__12784__$1,temp__5823__auto__,all_elevations,chunked_elevs,angles,angle_map,flat_locations,new_marker,_,marker_id,color,h_base,h_user,dist,freq,loader,num_points){
return (function (p1__12775_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(map_ukv.core.boundary_points),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(marker_id)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__12775_SHARP_)));
});})(seq__12784,chunk__12785,count__12786,i__12787,current_antenna_points,res_clj,visible_part,last_idx,edge_point,angle_12843,path_12844,vec__12797,idx,elevs,seq__12784__$1,temp__5823__auto__,all_elevations,chunked_elevs,angles,angle_map,flat_locations,new_marker,_,marker_id,color,h_base,h_user,dist,freq,loader,num_points))
,angles);
var clean_coords = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,sorted_coords);
var poly = module$node_modules$leaflet$dist$leaflet_src.polygon(cljs.core.clj__GT_js(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lat,lng], null)], null),clean_coords)),cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"color","color",1011675173),color,new cljs.core.Keyword(null,"fillColor","fillColor",-176906116),color,new cljs.core.Keyword(null,"fillOpacity","fillOpacity",619211981),0.4,new cljs.core.Keyword(null,"weight","weight",-1262796205),(2)], null)));
poly.addTo(cljs.core.deref(map_ukv.core.rays_group));

(loader.style.display = "none");

return map_ukv.core.update_legend_ui(freq,h_base,h_user);
} else {
return null;
}
});})(seq__12784,chunk__12785,count__12786,i__12787,angle_12843,path_12844,vec__12797,idx,elevs,seq__12784__$1,temp__5823__auto__,all_elevations,chunked_elevs,angles,angle_map,flat_locations,new_marker,_,marker_id,color,h_base,h_user,dist,freq,loader,num_points))
);


var G__12845 = cljs.core.next(seq__12784__$1);
var G__12846 = null;
var G__12847 = (0);
var G__12848 = (0);
seq__12784 = G__12845;
chunk__12785 = G__12846;
count__12786 = G__12847;
i__12787 = G__12848;
continue;
}
} else {
return null;
}
}
break;
}
})).catch((function (err){
(loader.style.display = "none");

alert((""+"\u041F\u043E\u043C\u0438\u043B\u043A\u0430: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(err.message)));

return console.error("Fetch error:",err);
}));
} else {
return null;
}
});
map_ukv.core.render_history_table = (function map_ukv$core$render_history_table(data){
var body = document.getElementById("history-body");
if(cljs.core.truth_(body)){
(body.innerHTML = "");

if(cljs.core.empty_QMARK_(data)){
return (body.innerHTML = "<tr><td colspan='4' style='text-align:center; padding:10px; color:gray;'>\u0406\u0441\u0442\u043E\u0440\u0456\u044F \u043F\u043E\u0440\u043E\u0436\u043D\u044F</td></tr>");
} else {
var seq__12800 = cljs.core.seq(data);
var chunk__12801 = null;
var count__12802 = (0);
var i__12803 = (0);
while(true){
if((i__12803 < count__12802)){
var item = chunk__12801.cljs$core$IIndexed$_nth$arity$2(null,i__12803);
var row_12849 = body.insertRow();
var id_12850 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(item,"id");
var lat_12851 = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(item,"lat")));
var lng_12852 = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(item,"lng")));
var h1_12853 = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(item,"h_antenna")));
var h2_12854 = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(item,"h_user")));
var freq_12855 = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(item,"freq")));
var raw_dt_12856 = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(item,"created_at")));
var dt_12857 = (((((raw_dt_12856).length) > (16)))?cljs.core.subs.cljs$core$IFn$_invoke$arity$3(raw_dt_12856,(5),(16)):raw_dt_12856);
row_12849.setAttribute("data-lat",lat_12851);

row_12849.setAttribute("data-lng",lng_12852);

row_12849.setAttribute("data-h1",h1_12853);

row_12849.setAttribute("data-h2",h2_12854);

row_12849.setAttribute("data-freq",freq_12855);

row_12849.setAttribute("data-id",id_12850);

(row_12849.className = "history-row");

(row_12849.style.cursor = "pointer");

(row_12849.innerHTML = (""+"<td style='padding: 6px 4px; color: #000;'>"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dt_12857)+"</td>"+"<td style='padding: 6px 4px; font-weight: bold; color: #2980b9; text-align: center;'>"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(freq_12855)+"</td>"+"<td style='padding: 6px 4px; color: #27ae60; text-align: right;'>"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(h1_12853)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(h2_12854)+"\u043C</td>"+"<td style='padding: 6px 4px; text-align: center;'>"+"<button class='delete-btn' style='background:none; border:none; color:#e74c3c; cursor:pointer; font-weight:bold; font-size:14px;'>&times;</button>"+"</td>"));


var G__12858 = seq__12800;
var G__12859 = chunk__12801;
var G__12860 = count__12802;
var G__12861 = (i__12803 + (1));
seq__12800 = G__12858;
chunk__12801 = G__12859;
count__12802 = G__12860;
i__12803 = G__12861;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__12800);
if(temp__5823__auto__){
var seq__12800__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12800__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__12800__$1);
var G__12862 = cljs.core.chunk_rest(seq__12800__$1);
var G__12863 = c__5673__auto__;
var G__12864 = cljs.core.count(c__5673__auto__);
var G__12865 = (0);
seq__12800 = G__12862;
chunk__12801 = G__12863;
count__12802 = G__12864;
i__12803 = G__12865;
continue;
} else {
var item = cljs.core.first(seq__12800__$1);
var row_12866 = body.insertRow();
var id_12867 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(item,"id");
var lat_12868 = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(item,"lat")));
var lng_12869 = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(item,"lng")));
var h1_12870 = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(item,"h_antenna")));
var h2_12871 = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(item,"h_user")));
var freq_12872 = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(item,"freq")));
var raw_dt_12873 = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(item,"created_at")));
var dt_12874 = (((((raw_dt_12873).length) > (16)))?cljs.core.subs.cljs$core$IFn$_invoke$arity$3(raw_dt_12873,(5),(16)):raw_dt_12873);
row_12866.setAttribute("data-lat",lat_12868);

row_12866.setAttribute("data-lng",lng_12869);

row_12866.setAttribute("data-h1",h1_12870);

row_12866.setAttribute("data-h2",h2_12871);

row_12866.setAttribute("data-freq",freq_12872);

row_12866.setAttribute("data-id",id_12867);

(row_12866.className = "history-row");

(row_12866.style.cursor = "pointer");

(row_12866.innerHTML = (""+"<td style='padding: 6px 4px; color: #000;'>"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dt_12874)+"</td>"+"<td style='padding: 6px 4px; font-weight: bold; color: #2980b9; text-align: center;'>"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(freq_12872)+"</td>"+"<td style='padding: 6px 4px; color: #27ae60; text-align: right;'>"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(h1_12870)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(h2_12871)+"\u043C</td>"+"<td style='padding: 6px 4px; text-align: center;'>"+"<button class='delete-btn' style='background:none; border:none; color:#e74c3c; cursor:pointer; font-weight:bold; font-size:14px;'>&times;</button>"+"</td>"));


var G__12875 = cljs.core.next(seq__12800__$1);
var G__12876 = null;
var G__12877 = (0);
var G__12878 = (0);
seq__12800 = G__12875;
chunk__12801 = G__12876;
count__12802 = G__12877;
i__12803 = G__12878;
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
return fetch((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(map_ukv.core.API_URL)+"/history")).then((function (res){
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
return fetch((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(map_ukv.core.API_URL)+"/save-scan"),cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 1, ["Content-Type","application/json"], null),new cljs.core.Keyword(null,"body","body",-2049205669),JSON.stringify(cljs.core.clj__GT_js(data))], null))).then((function (res){
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
return fetch((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(map_ukv.core.API_URL)+"/delete-scan/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)),cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"method","method",55703592),"DELETE"], null))).then((function (res){
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

var seq__12804_12879 = cljs.core.seq(cljs.core.deref(map_ukv.core.markers));
var chunk__12805_12880 = null;
var count__12806_12881 = (0);
var i__12807_12882 = (0);
while(true){
if((i__12807_12882 < count__12806_12881)){
var m_12883 = chunk__12805_12880.cljs$core$IIndexed$_nth$arity$2(null,i__12807_12882);
m_12883.remove();


var G__12884 = seq__12804_12879;
var G__12885 = chunk__12805_12880;
var G__12886 = count__12806_12881;
var G__12887 = (i__12807_12882 + (1));
seq__12804_12879 = G__12884;
chunk__12805_12880 = G__12885;
count__12806_12881 = G__12886;
i__12807_12882 = G__12887;
continue;
} else {
var temp__5823__auto___12888 = cljs.core.seq(seq__12804_12879);
if(temp__5823__auto___12888){
var seq__12804_12889__$1 = temp__5823__auto___12888;
if(cljs.core.chunked_seq_QMARK_(seq__12804_12889__$1)){
var c__5673__auto___12890 = cljs.core.chunk_first(seq__12804_12889__$1);
var G__12891 = cljs.core.chunk_rest(seq__12804_12889__$1);
var G__12892 = c__5673__auto___12890;
var G__12893 = cljs.core.count(c__5673__auto___12890);
var G__12894 = (0);
seq__12804_12879 = G__12891;
chunk__12805_12880 = G__12892;
count__12806_12881 = G__12893;
i__12807_12882 = G__12894;
continue;
} else {
var m_12895 = cljs.core.first(seq__12804_12889__$1);
m_12895.remove();


var G__12896 = cljs.core.next(seq__12804_12889__$1);
var G__12897 = null;
var G__12898 = (0);
var G__12899 = (0);
seq__12804_12879 = G__12896;
chunk__12805_12880 = G__12897;
count__12806_12881 = G__12898;
i__12807_12882 = G__12899;
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
var export_data = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"antenna","antenna",-1733193971),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lat","lat",-580793929),lat,new cljs.core.Keyword(null,"lng","lng",1667213918),lng], null),new cljs.core.Keyword(null,"parameters","parameters",-1229919748),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"h1","h1",-1896887462),parseFloat(document.getElementById("antenna-height").value),new cljs.core.Keyword(null,"h2","h2",-372662728),parseFloat(document.getElementById("user-height").value),new cljs.core.Keyword(null,"freq","freq",-1855845278),parseInt(document.getElementById("freq-select").value)], null),new cljs.core.Keyword(null,"boundary","boundary",-2000996754),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__12808){
var vec__12809 = p__12808;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12809,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12809,(1),null);
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

var base_maps_12900 = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, ["\u0422\u043E\u043F\u043E\u0433\u0440\u0430\u0444\u0456\u0447\u043D\u0430",topo,"\u0412\u0443\u043B\u0438\u0446\u0456",streets,"\u0421\u0443\u043F\u0443\u0442\u043D\u0438\u043A",satellite], null));
L.control.layers(base_maps_12900).addTo(my_map);

var legend_12901 = L.control(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),"bottomright"], null)));
(legend_12901.onAdd = (function (map){
var div = L.DomUtil.create("div","map-legend");
(div.id = "dynamic-legend");

(div.innerHTML = "\u041A\u043B\u0456\u043A\u043D\u0456\u0442\u044C \u043D\u0430 \u043A\u0430\u0440\u0442\u0443 \u0434\u043B\u044F \u0440\u043E\u0437\u0440\u0430\u0445\u0443\u043D\u043A\u0443");

return div;
}));

legend_12901.addTo(my_map);

cljs.core.reset_BANG_(map_ukv.core.legend_ui,legend_12901);

cljs.core.reset_BANG_(map_ukv.core.rays_group,L.layerGroup().addTo(my_map));

my_map.on("click",(function (e){
var lat = e.latlng.lat;
var lng = e.latlng.lng;
return map_ukv.core.handle_map_click(lat,lng,my_map);
}));

var temp__5823__auto___12902 = document.getElementById("scan-dist");
if(cljs.core.truth_(temp__5823__auto___12902)){
var dist_input_12903 = temp__5823__auto___12902;
(dist_input_12903.value = "50");
} else {
}

map_ukv.core.setup_ui_events();

map_ukv.core.fetch_history();

return console.log("\u0421\u0438\u0441\u0442\u0435\u043C\u0430 \u0433\u043E\u0442\u043E\u0432\u0430.");
});

//# sourceMappingURL=map_ukv.core.js.map
