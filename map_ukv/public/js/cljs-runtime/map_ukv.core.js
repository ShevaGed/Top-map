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
map_ukv.core.get_elevation = (function map_ukv$core$get_elevation(lat,lng,my_map){
return fetch((""+"https://api.open-elevation.com/api/v1/lookup?locations="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(lat)+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(lng))).then((function (response){
return response.json();
})).then((function (data){
var results = data.results;
var first_res = (results[(0)]);
var elevation = first_res.elevation;
var temp__5823__auto___11726 = cljs.core.deref(map_ukv.core.last_marker);
if(cljs.core.truth_(temp__5823__auto___11726)){
var old_marker_11727 = temp__5823__auto___11726;
old_marker_11727.remove();
} else {
}

var new_marker = L.marker(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lat,lng], null))).addTo(my_map).bindPopup((""+"<b>\u0412\u0438\u0441\u043E\u0442\u0430:</b> "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(elevation)+" \u043C")).openPopup();
return cljs.core.reset_BANG_(map_ukv.core.last_marker,new_marker);
}));
});
map_ukv.core.init = (function map_ukv$core$init(){
var my_map = module$node_modules$leaflet$dist$leaflet_src.map("map-id");
var topo_url = "https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png";
var options = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"maxZoom","maxZoom",566190639),(17),new cljs.core.Keyword(null,"attribution","attribution",1937239286),"Map data: &copy; OpenStreetMap contributors, SRTM | Map style: &copy; OpenTopoMap (CC-BY-SA)"], null));
my_map.setView(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [50.45,30.52], null)),(10));

module$node_modules$leaflet$dist$leaflet_src.tileLayer(topo_url,options).addTo(my_map);

my_map.on("click",(function (event){
var lat = event.latlng.lat;
var lng = event.latlng.lng;
return map_ukv.core.get_elevation(lat,lng,my_map);
}));

cljs.core.reset_BANG_(map_ukv.core.map_state,my_map);

return console.log("Map-ukv \u0443\u0441\u043F\u0456\u0448\u043D\u043E \u0437\u0430\u043F\u0443\u0449\u0435\u043D\u0430!");
});

//# sourceMappingURL=map_ukv.core.js.map
