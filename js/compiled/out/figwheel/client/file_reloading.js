// Compiled by ClojureScript 1.10.773 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined')){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.debug_loader_QMARK_ = (function figwheel$client$file_reloading$debug_loader_QMARK_(){
return (!((goog.debugLoader_ == null)));
});
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__4126__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__4126__auto__){
return or__4126__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (ns){

return goog.debugLoader_.getPathFromDeps_(ns);
}):(function (ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
}));
figwheel.client.file_reloading.provided_QMARK_ = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (ns){
return goog.getObjectByName(ns);
}):(function (ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
}));
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(ns){
return ((cljs.core._EQ_.call(null,"goog",ns)) || (cljs.core._EQ_.call(null,"cljs.core",ns)) || (cljs.core._EQ_.call(null,"cljs.nodejs",ns)) || (goog.string.startsWith(ns,"clojure.")) || (goog.string.startsWith(ns,"goog.")));
});
figwheel.client.file_reloading.base_requires_for_ns_path = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (path){
var G__38044 = goog.object.get(goog.debugLoader_.dependencies_,path);
if((G__38044 == null)){
return null;
} else {
return goog.object.get(G__38044,"requires");
}
}):(function (path){
var G__38045 = goog.object.get(goog.dependencies_.requires,path);
if((G__38045 == null)){
return null;
} else {
return goog.object.getKeys(G__38045);
}
}));
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__38046_SHARP_){
return (!(figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__38046_SHARP_)));
}),figwheel.client.file_reloading.base_requires_for_ns_path.call(null,figwheel.client.file_reloading.name__GT_path.call(null,ns))));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependency_data !== 'undefined')){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (_,___$1){
return null;
}):(function (path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
}));
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (){
return null;
}):(function (){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,(function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
}));
}));
figwheel.client.file_reloading.path__GT_name = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (path){
var G__38047 = goog.object.get(goog.debugLoader_.dependencies_,path);
var G__38047__$1 = (((G__38047 == null))?null:goog.object.get(G__38047,"provides"));
if((G__38047__$1 == null)){
return null;
} else {
return cljs.core.set.call(null,G__38047__$1);
}
}):(function (path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
}));
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),parent_ns);
});
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (){
return goog.object.forEach(goog.object.filter(goog.debugLoader_.dependencies_,(function (dep,path,_){
return cljs.core.not.call(null,cljs.core.some.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_,goog.object.get(dep,"provides")));
})),(function (dep,path,_){
var provides = goog.object.get(dep,"provides");
var requires = goog.object.get(dep,"requires");
var seq__38048 = cljs.core.seq.call(null,provides);
var chunk__38049 = null;
var count__38050 = (0);
var i__38051 = (0);
while(true){
if((i__38051 < count__38050)){
var prov = cljs.core._nth.call(null,chunk__38049,i__38051);
var seq__38060_38072 = cljs.core.seq.call(null,requires);
var chunk__38061_38073 = null;
var count__38062_38074 = (0);
var i__38063_38075 = (0);
while(true){
if((i__38063_38075 < count__38062_38074)){
var req_38076 = cljs.core._nth.call(null,chunk__38061_38073,i__38063_38075);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_38076,prov);


var G__38077 = seq__38060_38072;
var G__38078 = chunk__38061_38073;
var G__38079 = count__38062_38074;
var G__38080 = (i__38063_38075 + (1));
seq__38060_38072 = G__38077;
chunk__38061_38073 = G__38078;
count__38062_38074 = G__38079;
i__38063_38075 = G__38080;
continue;
} else {
var temp__5720__auto___38081 = cljs.core.seq.call(null,seq__38060_38072);
if(temp__5720__auto___38081){
var seq__38060_38082__$1 = temp__5720__auto___38081;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38060_38082__$1)){
var c__4556__auto___38083 = cljs.core.chunk_first.call(null,seq__38060_38082__$1);
var G__38084 = cljs.core.chunk_rest.call(null,seq__38060_38082__$1);
var G__38085 = c__4556__auto___38083;
var G__38086 = cljs.core.count.call(null,c__4556__auto___38083);
var G__38087 = (0);
seq__38060_38072 = G__38084;
chunk__38061_38073 = G__38085;
count__38062_38074 = G__38086;
i__38063_38075 = G__38087;
continue;
} else {
var req_38088 = cljs.core.first.call(null,seq__38060_38082__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_38088,prov);


var G__38089 = cljs.core.next.call(null,seq__38060_38082__$1);
var G__38090 = null;
var G__38091 = (0);
var G__38092 = (0);
seq__38060_38072 = G__38089;
chunk__38061_38073 = G__38090;
count__38062_38074 = G__38091;
i__38063_38075 = G__38092;
continue;
}
} else {
}
}
break;
}


var G__38093 = seq__38048;
var G__38094 = chunk__38049;
var G__38095 = count__38050;
var G__38096 = (i__38051 + (1));
seq__38048 = G__38093;
chunk__38049 = G__38094;
count__38050 = G__38095;
i__38051 = G__38096;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__38048);
if(temp__5720__auto__){
var seq__38048__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38048__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__38048__$1);
var G__38097 = cljs.core.chunk_rest.call(null,seq__38048__$1);
var G__38098 = c__4556__auto__;
var G__38099 = cljs.core.count.call(null,c__4556__auto__);
var G__38100 = (0);
seq__38048 = G__38097;
chunk__38049 = G__38098;
count__38050 = G__38099;
i__38051 = G__38100;
continue;
} else {
var prov = cljs.core.first.call(null,seq__38048__$1);
var seq__38064_38101 = cljs.core.seq.call(null,requires);
var chunk__38065_38102 = null;
var count__38066_38103 = (0);
var i__38067_38104 = (0);
while(true){
if((i__38067_38104 < count__38066_38103)){
var req_38105 = cljs.core._nth.call(null,chunk__38065_38102,i__38067_38104);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_38105,prov);


var G__38106 = seq__38064_38101;
var G__38107 = chunk__38065_38102;
var G__38108 = count__38066_38103;
var G__38109 = (i__38067_38104 + (1));
seq__38064_38101 = G__38106;
chunk__38065_38102 = G__38107;
count__38066_38103 = G__38108;
i__38067_38104 = G__38109;
continue;
} else {
var temp__5720__auto___38110__$1 = cljs.core.seq.call(null,seq__38064_38101);
if(temp__5720__auto___38110__$1){
var seq__38064_38111__$1 = temp__5720__auto___38110__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38064_38111__$1)){
var c__4556__auto___38112 = cljs.core.chunk_first.call(null,seq__38064_38111__$1);
var G__38113 = cljs.core.chunk_rest.call(null,seq__38064_38111__$1);
var G__38114 = c__4556__auto___38112;
var G__38115 = cljs.core.count.call(null,c__4556__auto___38112);
var G__38116 = (0);
seq__38064_38101 = G__38113;
chunk__38065_38102 = G__38114;
count__38066_38103 = G__38115;
i__38067_38104 = G__38116;
continue;
} else {
var req_38117 = cljs.core.first.call(null,seq__38064_38111__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_38117,prov);


var G__38118 = cljs.core.next.call(null,seq__38064_38111__$1);
var G__38119 = null;
var G__38120 = (0);
var G__38121 = (0);
seq__38064_38101 = G__38118;
chunk__38065_38102 = G__38119;
count__38066_38103 = G__38120;
i__38067_38104 = G__38121;
continue;
}
} else {
}
}
break;
}


var G__38122 = cljs.core.next.call(null,seq__38048__$1);
var G__38123 = null;
var G__38124 = (0);
var G__38125 = (0);
seq__38048 = G__38122;
chunk__38049 = G__38123;
count__38050 = G__38124;
i__38051 = G__38125;
continue;
}
} else {
return null;
}
}
break;
}
}));
}):(function (){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,(function (deps,path,_){
var seq__38068 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,path));
var chunk__38069 = null;
var count__38070 = (0);
var i__38071 = (0);
while(true){
if((i__38071 < count__38070)){
var prov = cljs.core._nth.call(null,chunk__38069,i__38071);
goog.object.forEach(deps,((function (seq__38068,chunk__38069,count__38070,i__38071,prov,requires){
return (function (___$1,req,___$2){
return figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req,prov);
});})(seq__38068,chunk__38069,count__38070,i__38071,prov,requires))
);


var G__38126 = seq__38068;
var G__38127 = chunk__38069;
var G__38128 = count__38070;
var G__38129 = (i__38071 + (1));
seq__38068 = G__38126;
chunk__38069 = G__38127;
count__38070 = G__38128;
i__38071 = G__38129;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__38068);
if(temp__5720__auto__){
var seq__38068__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38068__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__38068__$1);
var G__38130 = cljs.core.chunk_rest.call(null,seq__38068__$1);
var G__38131 = c__4556__auto__;
var G__38132 = cljs.core.count.call(null,c__4556__auto__);
var G__38133 = (0);
seq__38068 = G__38130;
chunk__38069 = G__38131;
count__38070 = G__38132;
i__38071 = G__38133;
continue;
} else {
var prov = cljs.core.first.call(null,seq__38068__$1);
goog.object.forEach(deps,((function (seq__38068,chunk__38069,count__38070,i__38071,prov,seq__38068__$1,temp__5720__auto__,requires){
return (function (___$1,req,___$2){
return figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req,prov);
});})(seq__38068,chunk__38069,count__38070,i__38071,prov,seq__38068__$1,temp__5720__auto__,requires))
);


var G__38134 = cljs.core.next.call(null,seq__38068__$1);
var G__38135 = null;
var G__38136 = (0);
var G__38137 = (0);
seq__38068 = G__38134;
chunk__38069 = G__38135;
count__38070 = G__38136;
i__38071 = G__38137;
continue;
}
} else {
return null;
}
}
break;
}
}));
}));
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__38138){
var vec__38139 = p__38138;
var _ = cljs.core.nth.call(null,vec__38139,(0),null);
var v = cljs.core.nth.call(null,vec__38139,(1),null);
var and__4115__auto__ = v;
if(cljs.core.truth_(and__4115__auto__)){
return v.call(null,dep);
} else {
return and__4115__auto__;
}
}),cljs.core.filter.call(null,(function (p__38142){
var vec__38143 = p__38142;
var k = cljs.core.nth.call(null,vec__38143,(0),null);
var v = cljs.core.nth.call(null,vec__38143,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});
var topo_sort_STAR_ = (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__38155_38163 = cljs.core.seq.call(null,deps);
var chunk__38156_38164 = null;
var count__38157_38165 = (0);
var i__38158_38166 = (0);
while(true){
if((i__38158_38166 < count__38157_38165)){
var dep_38167 = cljs.core._nth.call(null,chunk__38156_38164,i__38158_38166);
if(cljs.core.truth_((function (){var and__4115__auto__ = dep_38167;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_38167));
} else {
return and__4115__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_38167,(depth + (1)),state);
} else {
}


var G__38168 = seq__38155_38163;
var G__38169 = chunk__38156_38164;
var G__38170 = count__38157_38165;
var G__38171 = (i__38158_38166 + (1));
seq__38155_38163 = G__38168;
chunk__38156_38164 = G__38169;
count__38157_38165 = G__38170;
i__38158_38166 = G__38171;
continue;
} else {
var temp__5720__auto___38172 = cljs.core.seq.call(null,seq__38155_38163);
if(temp__5720__auto___38172){
var seq__38155_38173__$1 = temp__5720__auto___38172;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38155_38173__$1)){
var c__4556__auto___38174 = cljs.core.chunk_first.call(null,seq__38155_38173__$1);
var G__38175 = cljs.core.chunk_rest.call(null,seq__38155_38173__$1);
var G__38176 = c__4556__auto___38174;
var G__38177 = cljs.core.count.call(null,c__4556__auto___38174);
var G__38178 = (0);
seq__38155_38163 = G__38175;
chunk__38156_38164 = G__38176;
count__38157_38165 = G__38177;
i__38158_38166 = G__38178;
continue;
} else {
var dep_38179 = cljs.core.first.call(null,seq__38155_38173__$1);
if(cljs.core.truth_((function (){var and__4115__auto__ = dep_38179;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_38179));
} else {
return and__4115__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_38179,(depth + (1)),state);
} else {
}


var G__38180 = cljs.core.next.call(null,seq__38155_38173__$1);
var G__38181 = null;
var G__38182 = (0);
var G__38183 = (0);
seq__38155_38163 = G__38180;
chunk__38156_38164 = G__38181;
count__38157_38165 = G__38182;
i__38158_38166 = G__38183;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;
var elim_dups_STAR_ = (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__38159){
var vec__38160 = p__38159;
var seq__38161 = cljs.core.seq.call(null,vec__38160);
var first__38162 = cljs.core.first.call(null,seq__38161);
var seq__38161__$1 = cljs.core.next.call(null,seq__38161);
var x = first__38162;
var xs = seq__38161__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,(function (p1__38146_SHARP_){
return clojure.set.difference.call(null,p1__38146_SHARP_,x);
}),xs)));
}
});
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.debugLoader_.written_,path);

return goog.object.remove(goog.debugLoader_.written_,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
}):(function (ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
}));
figwheel.client.file_reloading.resolve_ns = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?figwheel.client.file_reloading.name__GT_path:(function (p1__38184_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,p1__38184_SHARP_))].join('');
}));
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__38185 = cljs.core.seq.call(null,provides);
var chunk__38186 = null;
var count__38187 = (0);
var i__38188 = (0);
while(true){
if((i__38188 < count__38187)){
var prov = cljs.core._nth.call(null,chunk__38186,i__38188);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__38197_38205 = cljs.core.seq.call(null,requires);
var chunk__38198_38206 = null;
var count__38199_38207 = (0);
var i__38200_38208 = (0);
while(true){
if((i__38200_38208 < count__38199_38207)){
var req_38209 = cljs.core._nth.call(null,chunk__38198_38206,i__38200_38208);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_38209,prov);


var G__38210 = seq__38197_38205;
var G__38211 = chunk__38198_38206;
var G__38212 = count__38199_38207;
var G__38213 = (i__38200_38208 + (1));
seq__38197_38205 = G__38210;
chunk__38198_38206 = G__38211;
count__38199_38207 = G__38212;
i__38200_38208 = G__38213;
continue;
} else {
var temp__5720__auto___38214 = cljs.core.seq.call(null,seq__38197_38205);
if(temp__5720__auto___38214){
var seq__38197_38215__$1 = temp__5720__auto___38214;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38197_38215__$1)){
var c__4556__auto___38216 = cljs.core.chunk_first.call(null,seq__38197_38215__$1);
var G__38217 = cljs.core.chunk_rest.call(null,seq__38197_38215__$1);
var G__38218 = c__4556__auto___38216;
var G__38219 = cljs.core.count.call(null,c__4556__auto___38216);
var G__38220 = (0);
seq__38197_38205 = G__38217;
chunk__38198_38206 = G__38218;
count__38199_38207 = G__38219;
i__38200_38208 = G__38220;
continue;
} else {
var req_38221 = cljs.core.first.call(null,seq__38197_38215__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_38221,prov);


var G__38222 = cljs.core.next.call(null,seq__38197_38215__$1);
var G__38223 = null;
var G__38224 = (0);
var G__38225 = (0);
seq__38197_38205 = G__38222;
chunk__38198_38206 = G__38223;
count__38199_38207 = G__38224;
i__38200_38208 = G__38225;
continue;
}
} else {
}
}
break;
}


var G__38226 = seq__38185;
var G__38227 = chunk__38186;
var G__38228 = count__38187;
var G__38229 = (i__38188 + (1));
seq__38185 = G__38226;
chunk__38186 = G__38227;
count__38187 = G__38228;
i__38188 = G__38229;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__38185);
if(temp__5720__auto__){
var seq__38185__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38185__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__38185__$1);
var G__38230 = cljs.core.chunk_rest.call(null,seq__38185__$1);
var G__38231 = c__4556__auto__;
var G__38232 = cljs.core.count.call(null,c__4556__auto__);
var G__38233 = (0);
seq__38185 = G__38230;
chunk__38186 = G__38231;
count__38187 = G__38232;
i__38188 = G__38233;
continue;
} else {
var prov = cljs.core.first.call(null,seq__38185__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__38201_38234 = cljs.core.seq.call(null,requires);
var chunk__38202_38235 = null;
var count__38203_38236 = (0);
var i__38204_38237 = (0);
while(true){
if((i__38204_38237 < count__38203_38236)){
var req_38238 = cljs.core._nth.call(null,chunk__38202_38235,i__38204_38237);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_38238,prov);


var G__38239 = seq__38201_38234;
var G__38240 = chunk__38202_38235;
var G__38241 = count__38203_38236;
var G__38242 = (i__38204_38237 + (1));
seq__38201_38234 = G__38239;
chunk__38202_38235 = G__38240;
count__38203_38236 = G__38241;
i__38204_38237 = G__38242;
continue;
} else {
var temp__5720__auto___38243__$1 = cljs.core.seq.call(null,seq__38201_38234);
if(temp__5720__auto___38243__$1){
var seq__38201_38244__$1 = temp__5720__auto___38243__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38201_38244__$1)){
var c__4556__auto___38245 = cljs.core.chunk_first.call(null,seq__38201_38244__$1);
var G__38246 = cljs.core.chunk_rest.call(null,seq__38201_38244__$1);
var G__38247 = c__4556__auto___38245;
var G__38248 = cljs.core.count.call(null,c__4556__auto___38245);
var G__38249 = (0);
seq__38201_38234 = G__38246;
chunk__38202_38235 = G__38247;
count__38203_38236 = G__38248;
i__38204_38237 = G__38249;
continue;
} else {
var req_38250 = cljs.core.first.call(null,seq__38201_38244__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_38250,prov);


var G__38251 = cljs.core.next.call(null,seq__38201_38244__$1);
var G__38252 = null;
var G__38253 = (0);
var G__38254 = (0);
seq__38201_38234 = G__38251;
chunk__38202_38235 = G__38252;
count__38203_38236 = G__38253;
i__38204_38237 = G__38254;
continue;
}
} else {
}
}
break;
}


var G__38255 = cljs.core.next.call(null,seq__38185__$1);
var G__38256 = null;
var G__38257 = (0);
var G__38258 = (0);
seq__38185 = G__38255;
chunk__38186 = G__38256;
count__38187 = G__38257;
i__38188 = G__38258;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
(goog.require = figwheel.client.file_reloading.figwheel_require);

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__38259_38263 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__38260_38264 = null;
var count__38261_38265 = (0);
var i__38262_38266 = (0);
while(true){
if((i__38262_38266 < count__38261_38265)){
var ns_38267 = cljs.core._nth.call(null,chunk__38260_38264,i__38262_38266);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_38267);


var G__38268 = seq__38259_38263;
var G__38269 = chunk__38260_38264;
var G__38270 = count__38261_38265;
var G__38271 = (i__38262_38266 + (1));
seq__38259_38263 = G__38268;
chunk__38260_38264 = G__38269;
count__38261_38265 = G__38270;
i__38262_38266 = G__38271;
continue;
} else {
var temp__5720__auto___38272 = cljs.core.seq.call(null,seq__38259_38263);
if(temp__5720__auto___38272){
var seq__38259_38273__$1 = temp__5720__auto___38272;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38259_38273__$1)){
var c__4556__auto___38274 = cljs.core.chunk_first.call(null,seq__38259_38273__$1);
var G__38275 = cljs.core.chunk_rest.call(null,seq__38259_38273__$1);
var G__38276 = c__4556__auto___38274;
var G__38277 = cljs.core.count.call(null,c__4556__auto___38274);
var G__38278 = (0);
seq__38259_38263 = G__38275;
chunk__38260_38264 = G__38276;
count__38261_38265 = G__38277;
i__38262_38266 = G__38278;
continue;
} else {
var ns_38279 = cljs.core.first.call(null,seq__38259_38273__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_38279);


var G__38280 = cljs.core.next.call(null,seq__38259_38273__$1);
var G__38281 = null;
var G__38282 = (0);
var G__38283 = (0);
seq__38259_38263 = G__38280;
chunk__38260_38264 = G__38281;
count__38261_38265 = G__38282;
i__38262_38266 = G__38283;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
(goog.require_figwheel_backup_ = (function (){var or__4126__auto__ = goog.require__;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return goog.require;
}
})());

(goog.isProvided_ = (function (name){
return false;
}));

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

(goog.addDependency_figwheel_backup_ = goog.addDependency);

(goog.addDependency = (function() { 
var G__38284__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__38284 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38285__i = 0, G__38285__a = new Array(arguments.length -  0);
while (G__38285__i < G__38285__a.length) {G__38285__a[G__38285__i] = arguments[G__38285__i + 0]; ++G__38285__i;}
  args = new cljs.core.IndexedSeq(G__38285__a,0,null);
} 
return G__38284__delegate.call(this,args);};
G__38284.cljs$lang$maxFixedArity = 0;
G__38284.cljs$lang$applyTo = (function (arglist__38286){
var args = cljs.core.seq(arglist__38286);
return G__38284__delegate(args);
});
G__38284.cljs$core$IFn$_invoke$arity$variadic = G__38284__delegate;
return G__38284;
})()
);

goog.constructNamespace_("cljs.user");

(goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload);

return (goog.require = figwheel.client.file_reloading.figwheel_require);
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined')){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__38287_SHARP_,p2__38288_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__38287_SHARP_)),p2__38288_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__38289_SHARP_,p2__38290_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__38289_SHARP_),p2__38290_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__38291 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__38291.addCallback((function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
}));

G__38291.addErrback((function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
}));

return G__38291;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e38292){if((e38292 instanceof Error)){
var e = e38292;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e38292;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,(function (v,k,o){
return goog.string.endsWith(k,util_pattern);
}));
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e38293){if((e38293 instanceof Error)){
var e = e38293;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e38293;

}
}})());
});
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__38294 = cljs.core._EQ_;
var expr__38295 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__38294.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__38295))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__38294.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__38295))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__38294.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__38295))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return (function (a,b){
throw "Reload not defined for this platform";
});
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__38297,callback){
var map__38298 = p__38297;
var map__38298__$1 = (((((!((map__38298 == null))))?(((((map__38298.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38298.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38298):map__38298);
var file_msg = map__38298__$1;
var request_url = cljs.core.get.call(null,map__38298__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__4126__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,(function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
}));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_chan !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined')){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined')){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),(function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
}));

return out;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reloader_loop !== 'undefined')){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__36027__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__36028__auto__ = (function (){var switch__35932__auto__ = (function (state_38336){
var state_val_38337 = (state_38336[(1)]);
if((state_val_38337 === (7))){
var inst_38332 = (state_38336[(2)]);
var state_38336__$1 = state_38336;
var statearr_38338_38364 = state_38336__$1;
(statearr_38338_38364[(2)] = inst_38332);

(statearr_38338_38364[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38337 === (1))){
var state_38336__$1 = state_38336;
var statearr_38339_38365 = state_38336__$1;
(statearr_38339_38365[(2)] = null);

(statearr_38339_38365[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38337 === (4))){
var inst_38302 = (state_38336[(7)]);
var inst_38302__$1 = (state_38336[(2)]);
var state_38336__$1 = (function (){var statearr_38340 = state_38336;
(statearr_38340[(7)] = inst_38302__$1);

return statearr_38340;
})();
if(cljs.core.truth_(inst_38302__$1)){
var statearr_38341_38366 = state_38336__$1;
(statearr_38341_38366[(1)] = (5));

} else {
var statearr_38342_38367 = state_38336__$1;
(statearr_38342_38367[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38337 === (15))){
var inst_38317 = (state_38336[(8)]);
var inst_38315 = (state_38336[(9)]);
var inst_38319 = inst_38317.call(null,inst_38315);
var state_38336__$1 = state_38336;
var statearr_38343_38368 = state_38336__$1;
(statearr_38343_38368[(2)] = inst_38319);

(statearr_38343_38368[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38337 === (13))){
var inst_38326 = (state_38336[(2)]);
var state_38336__$1 = state_38336;
var statearr_38344_38369 = state_38336__$1;
(statearr_38344_38369[(2)] = inst_38326);

(statearr_38344_38369[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38337 === (6))){
var state_38336__$1 = state_38336;
var statearr_38345_38370 = state_38336__$1;
(statearr_38345_38370[(2)] = null);

(statearr_38345_38370[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38337 === (17))){
var inst_38323 = (state_38336[(2)]);
var state_38336__$1 = state_38336;
var statearr_38346_38371 = state_38336__$1;
(statearr_38346_38371[(2)] = inst_38323);

(statearr_38346_38371[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38337 === (3))){
var inst_38334 = (state_38336[(2)]);
var state_38336__$1 = state_38336;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38336__$1,inst_38334);
} else {
if((state_val_38337 === (12))){
var state_38336__$1 = state_38336;
var statearr_38347_38372 = state_38336__$1;
(statearr_38347_38372[(2)] = null);

(statearr_38347_38372[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38337 === (2))){
var state_38336__$1 = state_38336;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38336__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_38337 === (11))){
var inst_38307 = (state_38336[(10)]);
var inst_38313 = figwheel.client.file_reloading.blocking_load.call(null,inst_38307);
var state_38336__$1 = state_38336;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38336__$1,(14),inst_38313);
} else {
if((state_val_38337 === (9))){
var inst_38307 = (state_38336[(10)]);
var state_38336__$1 = state_38336;
if(cljs.core.truth_(inst_38307)){
var statearr_38348_38373 = state_38336__$1;
(statearr_38348_38373[(1)] = (11));

} else {
var statearr_38349_38374 = state_38336__$1;
(statearr_38349_38374[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38337 === (5))){
var inst_38308 = (state_38336[(11)]);
var inst_38302 = (state_38336[(7)]);
var inst_38307 = cljs.core.nth.call(null,inst_38302,(0),null);
var inst_38308__$1 = cljs.core.nth.call(null,inst_38302,(1),null);
var state_38336__$1 = (function (){var statearr_38350 = state_38336;
(statearr_38350[(10)] = inst_38307);

(statearr_38350[(11)] = inst_38308__$1);

return statearr_38350;
})();
if(cljs.core.truth_(inst_38308__$1)){
var statearr_38351_38375 = state_38336__$1;
(statearr_38351_38375[(1)] = (8));

} else {
var statearr_38352_38376 = state_38336__$1;
(statearr_38352_38376[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38337 === (14))){
var inst_38307 = (state_38336[(10)]);
var inst_38317 = (state_38336[(8)]);
var inst_38315 = (state_38336[(2)]);
var inst_38316 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_38317__$1 = cljs.core.get.call(null,inst_38316,inst_38307);
var state_38336__$1 = (function (){var statearr_38353 = state_38336;
(statearr_38353[(8)] = inst_38317__$1);

(statearr_38353[(9)] = inst_38315);

return statearr_38353;
})();
if(cljs.core.truth_(inst_38317__$1)){
var statearr_38354_38377 = state_38336__$1;
(statearr_38354_38377[(1)] = (15));

} else {
var statearr_38355_38378 = state_38336__$1;
(statearr_38355_38378[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38337 === (16))){
var inst_38315 = (state_38336[(9)]);
var inst_38321 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_38315);
var state_38336__$1 = state_38336;
var statearr_38356_38379 = state_38336__$1;
(statearr_38356_38379[(2)] = inst_38321);

(statearr_38356_38379[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38337 === (10))){
var inst_38328 = (state_38336[(2)]);
var state_38336__$1 = (function (){var statearr_38357 = state_38336;
(statearr_38357[(12)] = inst_38328);

return statearr_38357;
})();
var statearr_38358_38380 = state_38336__$1;
(statearr_38358_38380[(2)] = null);

(statearr_38358_38380[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38337 === (8))){
var inst_38308 = (state_38336[(11)]);
var inst_38310 = eval(inst_38308);
var state_38336__$1 = state_38336;
var statearr_38359_38381 = state_38336__$1;
(statearr_38359_38381[(2)] = inst_38310);

(statearr_38359_38381[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var figwheel$client$file_reloading$state_machine__35933__auto__ = null;
var figwheel$client$file_reloading$state_machine__35933__auto____0 = (function (){
var statearr_38360 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38360[(0)] = figwheel$client$file_reloading$state_machine__35933__auto__);

(statearr_38360[(1)] = (1));

return statearr_38360;
});
var figwheel$client$file_reloading$state_machine__35933__auto____1 = (function (state_38336){
while(true){
var ret_value__35934__auto__ = (function (){try{while(true){
var result__35935__auto__ = switch__35932__auto__.call(null,state_38336);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35935__auto__;
}
break;
}
}catch (e38361){if((e38361 instanceof Object)){
var ex__35936__auto__ = e38361;
var statearr_38362_38382 = state_38336;
(statearr_38362_38382[(5)] = ex__35936__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38336);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38361;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38383 = state_38336;
state_38336 = G__38383;
continue;
} else {
return ret_value__35934__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__35933__auto__ = function(state_38336){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__35933__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__35933__auto____1.call(this,state_38336);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__35933__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__35933__auto____0;
figwheel$client$file_reloading$state_machine__35933__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__35933__auto____1;
return figwheel$client$file_reloading$state_machine__35933__auto__;
})()
})();
var state__36029__auto__ = (function (){var statearr_38363 = f__36028__auto__.call(null);
(statearr_38363[(6)] = c__36027__auto__);

return statearr_38363;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36029__auto__);
}));

return c__36027__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__38385 = arguments.length;
switch (G__38385) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
}));

(figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
}));

(figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2);

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__38387,callback){
var map__38388 = p__38387;
var map__38388__$1 = (((((!((map__38388 == null))))?(((((map__38388.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38388.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38388):map__38388);
var file_msg = map__38388__$1;
var namespace = cljs.core.get.call(null,map__38388__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,(function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
}));

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__38390){
var map__38391 = p__38390;
var map__38391__$1 = (((((!((map__38391 == null))))?(((((map__38391.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38391.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38391):map__38391);
var file_msg = map__38391__$1;
var namespace = cljs.core.get.call(null,map__38391__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__38393){
var map__38394 = p__38393;
var map__38394__$1 = (((((!((map__38394 == null))))?(((((map__38394.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38394.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38394):map__38394);
var file_msg = map__38394__$1;
var namespace = cljs.core.get.call(null,map__38394__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if(cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg))){
var or__4126__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
var or__4126__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__4126__auto____$2)){
return or__4126__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return false;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__38396,callback){
var map__38397 = p__38396;
var map__38397__$1 = (((((!((map__38397 == null))))?(((((map__38397.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38397.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38397):map__38397);
var file_msg = map__38397__$1;
var request_url = cljs.core.get.call(null,map__38397__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__38397__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,(function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
}));

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__36027__auto___38447 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__36028__auto__ = (function (){var switch__35932__auto__ = (function (state_38432){
var state_val_38433 = (state_38432[(1)]);
if((state_val_38433 === (1))){
var inst_38406 = cljs.core.seq.call(null,files);
var inst_38407 = cljs.core.first.call(null,inst_38406);
var inst_38408 = cljs.core.next.call(null,inst_38406);
var inst_38409 = files;
var state_38432__$1 = (function (){var statearr_38434 = state_38432;
(statearr_38434[(7)] = inst_38408);

(statearr_38434[(8)] = inst_38409);

(statearr_38434[(9)] = inst_38407);

return statearr_38434;
})();
var statearr_38435_38448 = state_38432__$1;
(statearr_38435_38448[(2)] = null);

(statearr_38435_38448[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38433 === (2))){
var inst_38409 = (state_38432[(8)]);
var inst_38415 = (state_38432[(10)]);
var inst_38414 = cljs.core.seq.call(null,inst_38409);
var inst_38415__$1 = cljs.core.first.call(null,inst_38414);
var inst_38416 = cljs.core.next.call(null,inst_38414);
var inst_38417 = (inst_38415__$1 == null);
var inst_38418 = cljs.core.not.call(null,inst_38417);
var state_38432__$1 = (function (){var statearr_38436 = state_38432;
(statearr_38436[(11)] = inst_38416);

(statearr_38436[(10)] = inst_38415__$1);

return statearr_38436;
})();
if(inst_38418){
var statearr_38437_38449 = state_38432__$1;
(statearr_38437_38449[(1)] = (4));

} else {
var statearr_38438_38450 = state_38432__$1;
(statearr_38438_38450[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38433 === (3))){
var inst_38430 = (state_38432[(2)]);
var state_38432__$1 = state_38432;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38432__$1,inst_38430);
} else {
if((state_val_38433 === (4))){
var inst_38415 = (state_38432[(10)]);
var inst_38420 = figwheel.client.file_reloading.reload_js_file.call(null,inst_38415);
var state_38432__$1 = state_38432;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38432__$1,(7),inst_38420);
} else {
if((state_val_38433 === (5))){
var inst_38426 = cljs.core.async.close_BANG_.call(null,out);
var state_38432__$1 = state_38432;
var statearr_38439_38451 = state_38432__$1;
(statearr_38439_38451[(2)] = inst_38426);

(statearr_38439_38451[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38433 === (6))){
var inst_38428 = (state_38432[(2)]);
var state_38432__$1 = state_38432;
var statearr_38440_38452 = state_38432__$1;
(statearr_38440_38452[(2)] = inst_38428);

(statearr_38440_38452[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38433 === (7))){
var inst_38416 = (state_38432[(11)]);
var inst_38422 = (state_38432[(2)]);
var inst_38423 = cljs.core.async.put_BANG_.call(null,out,inst_38422);
var inst_38409 = inst_38416;
var state_38432__$1 = (function (){var statearr_38441 = state_38432;
(statearr_38441[(8)] = inst_38409);

(statearr_38441[(12)] = inst_38423);

return statearr_38441;
})();
var statearr_38442_38453 = state_38432__$1;
(statearr_38442_38453[(2)] = null);

(statearr_38442_38453[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__35933__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__35933__auto____0 = (function (){
var statearr_38443 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38443[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__35933__auto__);

(statearr_38443[(1)] = (1));

return statearr_38443;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__35933__auto____1 = (function (state_38432){
while(true){
var ret_value__35934__auto__ = (function (){try{while(true){
var result__35935__auto__ = switch__35932__auto__.call(null,state_38432);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35935__auto__;
}
break;
}
}catch (e38444){if((e38444 instanceof Object)){
var ex__35936__auto__ = e38444;
var statearr_38445_38454 = state_38432;
(statearr_38445_38454[(5)] = ex__35936__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38432);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38444;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38455 = state_38432;
state_38432 = G__38455;
continue;
} else {
return ret_value__35934__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__35933__auto__ = function(state_38432){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__35933__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__35933__auto____1.call(this,state_38432);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__35933__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__35933__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__35933__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__35933__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__35933__auto__;
})()
})();
var state__36029__auto__ = (function (){var statearr_38446 = f__36028__auto__.call(null);
(statearr_38446[(6)] = c__36027__auto___38447);

return statearr_38446;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36029__auto__);
}));


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__38456,opts){
var map__38457 = p__38456;
var map__38457__$1 = (((((!((map__38457 == null))))?(((((map__38457.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38457.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38457):map__38457);
var eval_body = cljs.core.get.call(null,map__38457__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__38457__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__4115__auto__ = eval_body;
if(cljs.core.truth_(and__4115__auto__)){
return typeof eval_body === 'string';
} else {
return and__4115__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e38459){var e = e38459;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,(function (n){
var temp__5718__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__38460_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__38460_SHARP_),n);
}),files));
if(cljs.core.truth_(temp__5718__auto__)){
var file_msg = temp__5718__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
}),deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__38461){
var vec__38462 = p__38461;
var k = cljs.core.nth.call(null,vec__38462,(0),null);
var v = cljs.core.nth.call(null,vec__38462,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__38465){
var vec__38466 = p__38465;
var k = cljs.core.nth.call(null,vec__38466,(0),null);
var v = cljs.core.nth.call(null,vec__38466,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__38472,p__38473){
var map__38474 = p__38472;
var map__38474__$1 = (((((!((map__38474 == null))))?(((((map__38474.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38474.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38474):map__38474);
var opts = map__38474__$1;
var before_jsload = cljs.core.get.call(null,map__38474__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__38474__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__38474__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__38475 = p__38473;
var map__38475__$1 = (((((!((map__38475 == null))))?(((((map__38475.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38475.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38475):map__38475);
var msg = map__38475__$1;
var files = cljs.core.get.call(null,map__38475__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__38475__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__38475__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__36027__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__36028__auto__ = (function (){var switch__35932__auto__ = (function (state_38629){
var state_val_38630 = (state_38629[(1)]);
if((state_val_38630 === (7))){
var inst_38492 = (state_38629[(7)]);
var inst_38489 = (state_38629[(8)]);
var inst_38491 = (state_38629[(9)]);
var inst_38490 = (state_38629[(10)]);
var inst_38497 = cljs.core._nth.call(null,inst_38490,inst_38492);
var inst_38498 = figwheel.client.file_reloading.eval_body.call(null,inst_38497,opts);
var inst_38499 = (inst_38492 + (1));
var tmp38631 = inst_38489;
var tmp38632 = inst_38491;
var tmp38633 = inst_38490;
var inst_38489__$1 = tmp38631;
var inst_38490__$1 = tmp38633;
var inst_38491__$1 = tmp38632;
var inst_38492__$1 = inst_38499;
var state_38629__$1 = (function (){var statearr_38634 = state_38629;
(statearr_38634[(7)] = inst_38492__$1);

(statearr_38634[(11)] = inst_38498);

(statearr_38634[(8)] = inst_38489__$1);

(statearr_38634[(9)] = inst_38491__$1);

(statearr_38634[(10)] = inst_38490__$1);

return statearr_38634;
})();
var statearr_38635_38718 = state_38629__$1;
(statearr_38635_38718[(2)] = null);

(statearr_38635_38718[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38630 === (20))){
var inst_38532 = (state_38629[(12)]);
var inst_38540 = figwheel.client.file_reloading.sort_files.call(null,inst_38532);
var state_38629__$1 = state_38629;
var statearr_38636_38719 = state_38629__$1;
(statearr_38636_38719[(2)] = inst_38540);

(statearr_38636_38719[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38630 === (27))){
var state_38629__$1 = state_38629;
var statearr_38637_38720 = state_38629__$1;
(statearr_38637_38720[(2)] = null);

(statearr_38637_38720[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38630 === (1))){
var inst_38481 = (state_38629[(13)]);
var inst_38478 = before_jsload.call(null,files);
var inst_38479 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_38480 = (function (){return (function (p1__38469_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__38469_SHARP_);
});
})();
var inst_38481__$1 = cljs.core.filter.call(null,inst_38480,files);
var inst_38482 = cljs.core.not_empty.call(null,inst_38481__$1);
var state_38629__$1 = (function (){var statearr_38638 = state_38629;
(statearr_38638[(14)] = inst_38478);

(statearr_38638[(13)] = inst_38481__$1);

(statearr_38638[(15)] = inst_38479);

return statearr_38638;
})();
if(cljs.core.truth_(inst_38482)){
var statearr_38639_38721 = state_38629__$1;
(statearr_38639_38721[(1)] = (2));

} else {
var statearr_38640_38722 = state_38629__$1;
(statearr_38640_38722[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38630 === (24))){
var state_38629__$1 = state_38629;
var statearr_38641_38723 = state_38629__$1;
(statearr_38641_38723[(2)] = null);

(statearr_38641_38723[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38630 === (39))){
var inst_38582 = (state_38629[(16)]);
var state_38629__$1 = state_38629;
var statearr_38642_38724 = state_38629__$1;
(statearr_38642_38724[(2)] = inst_38582);

(statearr_38642_38724[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38630 === (46))){
var inst_38624 = (state_38629[(2)]);
var state_38629__$1 = state_38629;
var statearr_38643_38725 = state_38629__$1;
(statearr_38643_38725[(2)] = inst_38624);

(statearr_38643_38725[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38630 === (4))){
var inst_38526 = (state_38629[(2)]);
var inst_38527 = cljs.core.List.EMPTY;
var inst_38528 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_38527);
var inst_38529 = (function (){return (function (p1__38470_SHARP_){
var and__4115__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__38470_SHARP_);
if(cljs.core.truth_(and__4115__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__38470_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__38470_SHARP_))));
} else {
return and__4115__auto__;
}
});
})();
var inst_38530 = cljs.core.filter.call(null,inst_38529,files);
var inst_38531 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_38532 = cljs.core.concat.call(null,inst_38530,inst_38531);
var state_38629__$1 = (function (){var statearr_38644 = state_38629;
(statearr_38644[(12)] = inst_38532);

(statearr_38644[(17)] = inst_38526);

(statearr_38644[(18)] = inst_38528);

return statearr_38644;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_38645_38726 = state_38629__$1;
(statearr_38645_38726[(1)] = (16));

} else {
var statearr_38646_38727 = state_38629__$1;
(statearr_38646_38727[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38630 === (15))){
var inst_38516 = (state_38629[(2)]);
var state_38629__$1 = state_38629;
var statearr_38647_38728 = state_38629__$1;
(statearr_38647_38728[(2)] = inst_38516);

(statearr_38647_38728[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38630 === (21))){
var inst_38542 = (state_38629[(19)]);
var inst_38542__$1 = (state_38629[(2)]);
var inst_38543 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_38542__$1);
var state_38629__$1 = (function (){var statearr_38648 = state_38629;
(statearr_38648[(19)] = inst_38542__$1);

return statearr_38648;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38629__$1,(22),inst_38543);
} else {
if((state_val_38630 === (31))){
var inst_38627 = (state_38629[(2)]);
var state_38629__$1 = state_38629;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38629__$1,inst_38627);
} else {
if((state_val_38630 === (32))){
var inst_38582 = (state_38629[(16)]);
var inst_38587 = inst_38582.cljs$lang$protocol_mask$partition0$;
var inst_38588 = (inst_38587 & (64));
var inst_38589 = inst_38582.cljs$core$ISeq$;
var inst_38590 = (cljs.core.PROTOCOL_SENTINEL === inst_38589);
var inst_38591 = ((inst_38588) || (inst_38590));
var state_38629__$1 = state_38629;
if(cljs.core.truth_(inst_38591)){
var statearr_38649_38729 = state_38629__$1;
(statearr_38649_38729[(1)] = (35));

} else {
var statearr_38650_38730 = state_38629__$1;
(statearr_38650_38730[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38630 === (40))){
var inst_38604 = (state_38629[(20)]);
var inst_38603 = (state_38629[(2)]);
var inst_38604__$1 = cljs.core.get.call(null,inst_38603,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_38605 = cljs.core.get.call(null,inst_38603,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_38606 = cljs.core.not_empty.call(null,inst_38604__$1);
var state_38629__$1 = (function (){var statearr_38651 = state_38629;
(statearr_38651[(20)] = inst_38604__$1);

(statearr_38651[(21)] = inst_38605);

return statearr_38651;
})();
if(cljs.core.truth_(inst_38606)){
var statearr_38652_38731 = state_38629__$1;
(statearr_38652_38731[(1)] = (41));

} else {
var statearr_38653_38732 = state_38629__$1;
(statearr_38653_38732[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38630 === (33))){
var state_38629__$1 = state_38629;
var statearr_38654_38733 = state_38629__$1;
(statearr_38654_38733[(2)] = false);

(statearr_38654_38733[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38630 === (13))){
var inst_38502 = (state_38629[(22)]);
var inst_38506 = cljs.core.chunk_first.call(null,inst_38502);
var inst_38507 = cljs.core.chunk_rest.call(null,inst_38502);
var inst_38508 = cljs.core.count.call(null,inst_38506);
var inst_38489 = inst_38507;
var inst_38490 = inst_38506;
var inst_38491 = inst_38508;
var inst_38492 = (0);
var state_38629__$1 = (function (){var statearr_38655 = state_38629;
(statearr_38655[(7)] = inst_38492);

(statearr_38655[(8)] = inst_38489);

(statearr_38655[(9)] = inst_38491);

(statearr_38655[(10)] = inst_38490);

return statearr_38655;
})();
var statearr_38656_38734 = state_38629__$1;
(statearr_38656_38734[(2)] = null);

(statearr_38656_38734[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38630 === (22))){
var inst_38545 = (state_38629[(23)]);
var inst_38546 = (state_38629[(24)]);
var inst_38550 = (state_38629[(25)]);
var inst_38542 = (state_38629[(19)]);
var inst_38545__$1 = (state_38629[(2)]);
var inst_38546__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_38545__$1);
var inst_38547 = (function (){var all_files = inst_38542;
var res_SINGLEQUOTE_ = inst_38545__$1;
var res = inst_38546__$1;
return (function (p1__38471_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__38471_SHARP_));
});
})();
var inst_38548 = cljs.core.filter.call(null,inst_38547,inst_38545__$1);
var inst_38549 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_38550__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_38549);
var inst_38551 = cljs.core.not_empty.call(null,inst_38550__$1);
var state_38629__$1 = (function (){var statearr_38657 = state_38629;
(statearr_38657[(26)] = inst_38548);

(statearr_38657[(23)] = inst_38545__$1);

(statearr_38657[(24)] = inst_38546__$1);

(statearr_38657[(25)] = inst_38550__$1);

return statearr_38657;
})();
if(cljs.core.truth_(inst_38551)){
var statearr_38658_38735 = state_38629__$1;
(statearr_38658_38735[(1)] = (23));

} else {
var statearr_38659_38736 = state_38629__$1;
(statearr_38659_38736[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38630 === (36))){
var state_38629__$1 = state_38629;
var statearr_38660_38737 = state_38629__$1;
(statearr_38660_38737[(2)] = false);

(statearr_38660_38737[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38630 === (41))){
var inst_38604 = (state_38629[(20)]);
var inst_38608 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_38609 = cljs.core.map.call(null,inst_38608,inst_38604);
var inst_38610 = cljs.core.pr_str.call(null,inst_38609);
var inst_38611 = ["figwheel-no-load meta-data: ",inst_38610].join('');
var inst_38612 = figwheel.client.utils.log.call(null,inst_38611);
var state_38629__$1 = state_38629;
var statearr_38661_38738 = state_38629__$1;
(statearr_38661_38738[(2)] = inst_38612);

(statearr_38661_38738[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38630 === (43))){
var inst_38605 = (state_38629[(21)]);
var inst_38615 = (state_38629[(2)]);
var inst_38616 = cljs.core.not_empty.call(null,inst_38605);
var state_38629__$1 = (function (){var statearr_38662 = state_38629;
(statearr_38662[(27)] = inst_38615);

return statearr_38662;
})();
if(cljs.core.truth_(inst_38616)){
var statearr_38663_38739 = state_38629__$1;
(statearr_38663_38739[(1)] = (44));

} else {
var statearr_38664_38740 = state_38629__$1;
(statearr_38664_38740[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38630 === (29))){
var inst_38548 = (state_38629[(26)]);
var inst_38582 = (state_38629[(16)]);
var inst_38545 = (state_38629[(23)]);
var inst_38546 = (state_38629[(24)]);
var inst_38550 = (state_38629[(25)]);
var inst_38542 = (state_38629[(19)]);
var inst_38578 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_38581 = (function (){var all_files = inst_38542;
var res_SINGLEQUOTE_ = inst_38545;
var res = inst_38546;
var files_not_loaded = inst_38548;
var dependencies_that_loaded = inst_38550;
return (function (p__38580){
var map__38665 = p__38580;
var map__38665__$1 = (((((!((map__38665 == null))))?(((((map__38665.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38665.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38665):map__38665);
var namespace = cljs.core.get.call(null,map__38665__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
})();
var inst_38582__$1 = cljs.core.group_by.call(null,inst_38581,inst_38548);
var inst_38584 = (inst_38582__$1 == null);
var inst_38585 = cljs.core.not.call(null,inst_38584);
var state_38629__$1 = (function (){var statearr_38667 = state_38629;
(statearr_38667[(16)] = inst_38582__$1);

(statearr_38667[(28)] = inst_38578);

return statearr_38667;
})();
if(inst_38585){
var statearr_38668_38741 = state_38629__$1;
(statearr_38668_38741[(1)] = (32));

} else {
var statearr_38669_38742 = state_38629__$1;
(statearr_38669_38742[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38630 === (44))){
var inst_38605 = (state_38629[(21)]);
var inst_38618 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_38605);
var inst_38619 = cljs.core.pr_str.call(null,inst_38618);
var inst_38620 = ["not required: ",inst_38619].join('');
var inst_38621 = figwheel.client.utils.log.call(null,inst_38620);
var state_38629__$1 = state_38629;
var statearr_38670_38743 = state_38629__$1;
(statearr_38670_38743[(2)] = inst_38621);

(statearr_38670_38743[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38630 === (6))){
var inst_38523 = (state_38629[(2)]);
var state_38629__$1 = state_38629;
var statearr_38671_38744 = state_38629__$1;
(statearr_38671_38744[(2)] = inst_38523);

(statearr_38671_38744[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38630 === (28))){
var inst_38548 = (state_38629[(26)]);
var inst_38575 = (state_38629[(2)]);
var inst_38576 = cljs.core.not_empty.call(null,inst_38548);
var state_38629__$1 = (function (){var statearr_38672 = state_38629;
(statearr_38672[(29)] = inst_38575);

return statearr_38672;
})();
if(cljs.core.truth_(inst_38576)){
var statearr_38673_38745 = state_38629__$1;
(statearr_38673_38745[(1)] = (29));

} else {
var statearr_38674_38746 = state_38629__$1;
(statearr_38674_38746[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38630 === (25))){
var inst_38546 = (state_38629[(24)]);
var inst_38562 = (state_38629[(2)]);
var inst_38563 = cljs.core.not_empty.call(null,inst_38546);
var state_38629__$1 = (function (){var statearr_38675 = state_38629;
(statearr_38675[(30)] = inst_38562);

return statearr_38675;
})();
if(cljs.core.truth_(inst_38563)){
var statearr_38676_38747 = state_38629__$1;
(statearr_38676_38747[(1)] = (26));

} else {
var statearr_38677_38748 = state_38629__$1;
(statearr_38677_38748[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38630 === (34))){
var inst_38598 = (state_38629[(2)]);
var state_38629__$1 = state_38629;
if(cljs.core.truth_(inst_38598)){
var statearr_38678_38749 = state_38629__$1;
(statearr_38678_38749[(1)] = (38));

} else {
var statearr_38679_38750 = state_38629__$1;
(statearr_38679_38750[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38630 === (17))){
var state_38629__$1 = state_38629;
var statearr_38680_38751 = state_38629__$1;
(statearr_38680_38751[(2)] = recompile_dependents);

(statearr_38680_38751[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38630 === (3))){
var state_38629__$1 = state_38629;
var statearr_38681_38752 = state_38629__$1;
(statearr_38681_38752[(2)] = null);

(statearr_38681_38752[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38630 === (12))){
var inst_38519 = (state_38629[(2)]);
var state_38629__$1 = state_38629;
var statearr_38682_38753 = state_38629__$1;
(statearr_38682_38753[(2)] = inst_38519);

(statearr_38682_38753[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38630 === (2))){
var inst_38481 = (state_38629[(13)]);
var inst_38488 = cljs.core.seq.call(null,inst_38481);
var inst_38489 = inst_38488;
var inst_38490 = null;
var inst_38491 = (0);
var inst_38492 = (0);
var state_38629__$1 = (function (){var statearr_38683 = state_38629;
(statearr_38683[(7)] = inst_38492);

(statearr_38683[(8)] = inst_38489);

(statearr_38683[(9)] = inst_38491);

(statearr_38683[(10)] = inst_38490);

return statearr_38683;
})();
var statearr_38684_38754 = state_38629__$1;
(statearr_38684_38754[(2)] = null);

(statearr_38684_38754[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38630 === (23))){
var inst_38548 = (state_38629[(26)]);
var inst_38545 = (state_38629[(23)]);
var inst_38546 = (state_38629[(24)]);
var inst_38550 = (state_38629[(25)]);
var inst_38542 = (state_38629[(19)]);
var inst_38553 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_38555 = (function (){var all_files = inst_38542;
var res_SINGLEQUOTE_ = inst_38545;
var res = inst_38546;
var files_not_loaded = inst_38548;
var dependencies_that_loaded = inst_38550;
return (function (p__38554){
var map__38685 = p__38554;
var map__38685__$1 = (((((!((map__38685 == null))))?(((((map__38685.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38685.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38685):map__38685);
var request_url = cljs.core.get.call(null,map__38685__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
})();
var inst_38556 = cljs.core.reverse.call(null,inst_38550);
var inst_38557 = cljs.core.map.call(null,inst_38555,inst_38556);
var inst_38558 = cljs.core.pr_str.call(null,inst_38557);
var inst_38559 = figwheel.client.utils.log.call(null,inst_38558);
var state_38629__$1 = (function (){var statearr_38687 = state_38629;
(statearr_38687[(31)] = inst_38553);

return statearr_38687;
})();
var statearr_38688_38755 = state_38629__$1;
(statearr_38688_38755[(2)] = inst_38559);

(statearr_38688_38755[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38630 === (35))){
var state_38629__$1 = state_38629;
var statearr_38689_38756 = state_38629__$1;
(statearr_38689_38756[(2)] = true);

(statearr_38689_38756[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38630 === (19))){
var inst_38532 = (state_38629[(12)]);
var inst_38538 = figwheel.client.file_reloading.expand_files.call(null,inst_38532);
var state_38629__$1 = state_38629;
var statearr_38690_38757 = state_38629__$1;
(statearr_38690_38757[(2)] = inst_38538);

(statearr_38690_38757[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38630 === (11))){
var state_38629__$1 = state_38629;
var statearr_38691_38758 = state_38629__$1;
(statearr_38691_38758[(2)] = null);

(statearr_38691_38758[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38630 === (9))){
var inst_38521 = (state_38629[(2)]);
var state_38629__$1 = state_38629;
var statearr_38692_38759 = state_38629__$1;
(statearr_38692_38759[(2)] = inst_38521);

(statearr_38692_38759[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38630 === (5))){
var inst_38492 = (state_38629[(7)]);
var inst_38491 = (state_38629[(9)]);
var inst_38494 = (inst_38492 < inst_38491);
var inst_38495 = inst_38494;
var state_38629__$1 = state_38629;
if(cljs.core.truth_(inst_38495)){
var statearr_38693_38760 = state_38629__$1;
(statearr_38693_38760[(1)] = (7));

} else {
var statearr_38694_38761 = state_38629__$1;
(statearr_38694_38761[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38630 === (14))){
var inst_38502 = (state_38629[(22)]);
var inst_38511 = cljs.core.first.call(null,inst_38502);
var inst_38512 = figwheel.client.file_reloading.eval_body.call(null,inst_38511,opts);
var inst_38513 = cljs.core.next.call(null,inst_38502);
var inst_38489 = inst_38513;
var inst_38490 = null;
var inst_38491 = (0);
var inst_38492 = (0);
var state_38629__$1 = (function (){var statearr_38695 = state_38629;
(statearr_38695[(7)] = inst_38492);

(statearr_38695[(32)] = inst_38512);

(statearr_38695[(8)] = inst_38489);

(statearr_38695[(9)] = inst_38491);

(statearr_38695[(10)] = inst_38490);

return statearr_38695;
})();
var statearr_38696_38762 = state_38629__$1;
(statearr_38696_38762[(2)] = null);

(statearr_38696_38762[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38630 === (45))){
var state_38629__$1 = state_38629;
var statearr_38697_38763 = state_38629__$1;
(statearr_38697_38763[(2)] = null);

(statearr_38697_38763[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38630 === (26))){
var inst_38548 = (state_38629[(26)]);
var inst_38545 = (state_38629[(23)]);
var inst_38546 = (state_38629[(24)]);
var inst_38550 = (state_38629[(25)]);
var inst_38542 = (state_38629[(19)]);
var inst_38565 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_38567 = (function (){var all_files = inst_38542;
var res_SINGLEQUOTE_ = inst_38545;
var res = inst_38546;
var files_not_loaded = inst_38548;
var dependencies_that_loaded = inst_38550;
return (function (p__38566){
var map__38698 = p__38566;
var map__38698__$1 = (((((!((map__38698 == null))))?(((((map__38698.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38698.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38698):map__38698);
var namespace = cljs.core.get.call(null,map__38698__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__38698__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
})();
var inst_38568 = cljs.core.map.call(null,inst_38567,inst_38546);
var inst_38569 = cljs.core.pr_str.call(null,inst_38568);
var inst_38570 = figwheel.client.utils.log.call(null,inst_38569);
var inst_38571 = (function (){var all_files = inst_38542;
var res_SINGLEQUOTE_ = inst_38545;
var res = inst_38546;
var files_not_loaded = inst_38548;
var dependencies_that_loaded = inst_38550;
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
})();
var inst_38572 = setTimeout(inst_38571,(10));
var state_38629__$1 = (function (){var statearr_38700 = state_38629;
(statearr_38700[(33)] = inst_38570);

(statearr_38700[(34)] = inst_38565);

return statearr_38700;
})();
var statearr_38701_38764 = state_38629__$1;
(statearr_38701_38764[(2)] = inst_38572);

(statearr_38701_38764[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38630 === (16))){
var state_38629__$1 = state_38629;
var statearr_38702_38765 = state_38629__$1;
(statearr_38702_38765[(2)] = reload_dependents);

(statearr_38702_38765[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38630 === (38))){
var inst_38582 = (state_38629[(16)]);
var inst_38600 = cljs.core.apply.call(null,cljs.core.hash_map,inst_38582);
var state_38629__$1 = state_38629;
var statearr_38703_38766 = state_38629__$1;
(statearr_38703_38766[(2)] = inst_38600);

(statearr_38703_38766[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38630 === (30))){
var state_38629__$1 = state_38629;
var statearr_38704_38767 = state_38629__$1;
(statearr_38704_38767[(2)] = null);

(statearr_38704_38767[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38630 === (10))){
var inst_38502 = (state_38629[(22)]);
var inst_38504 = cljs.core.chunked_seq_QMARK_.call(null,inst_38502);
var state_38629__$1 = state_38629;
if(inst_38504){
var statearr_38705_38768 = state_38629__$1;
(statearr_38705_38768[(1)] = (13));

} else {
var statearr_38706_38769 = state_38629__$1;
(statearr_38706_38769[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38630 === (18))){
var inst_38536 = (state_38629[(2)]);
var state_38629__$1 = state_38629;
if(cljs.core.truth_(inst_38536)){
var statearr_38707_38770 = state_38629__$1;
(statearr_38707_38770[(1)] = (19));

} else {
var statearr_38708_38771 = state_38629__$1;
(statearr_38708_38771[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38630 === (42))){
var state_38629__$1 = state_38629;
var statearr_38709_38772 = state_38629__$1;
(statearr_38709_38772[(2)] = null);

(statearr_38709_38772[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38630 === (37))){
var inst_38595 = (state_38629[(2)]);
var state_38629__$1 = state_38629;
var statearr_38710_38773 = state_38629__$1;
(statearr_38710_38773[(2)] = inst_38595);

(statearr_38710_38773[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38630 === (8))){
var inst_38502 = (state_38629[(22)]);
var inst_38489 = (state_38629[(8)]);
var inst_38502__$1 = cljs.core.seq.call(null,inst_38489);
var state_38629__$1 = (function (){var statearr_38711 = state_38629;
(statearr_38711[(22)] = inst_38502__$1);

return statearr_38711;
})();
if(inst_38502__$1){
var statearr_38712_38774 = state_38629__$1;
(statearr_38712_38774[(1)] = (10));

} else {
var statearr_38713_38775 = state_38629__$1;
(statearr_38713_38775[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__35933__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__35933__auto____0 = (function (){
var statearr_38714 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38714[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__35933__auto__);

(statearr_38714[(1)] = (1));

return statearr_38714;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__35933__auto____1 = (function (state_38629){
while(true){
var ret_value__35934__auto__ = (function (){try{while(true){
var result__35935__auto__ = switch__35932__auto__.call(null,state_38629);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35935__auto__;
}
break;
}
}catch (e38715){if((e38715 instanceof Object)){
var ex__35936__auto__ = e38715;
var statearr_38716_38776 = state_38629;
(statearr_38716_38776[(5)] = ex__35936__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38629);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38715;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38777 = state_38629;
state_38629 = G__38777;
continue;
} else {
return ret_value__35934__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__35933__auto__ = function(state_38629){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__35933__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__35933__auto____1.call(this,state_38629);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__35933__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__35933__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__35933__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__35933__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__35933__auto__;
})()
})();
var state__36029__auto__ = (function (){var statearr_38717 = f__36028__auto__.call(null);
(statearr_38717[(6)] = c__36027__auto__);

return statearr_38717;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36029__auto__);
}));

return c__36027__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__38780,link){
var map__38781 = p__38780;
var map__38781__$1 = (((((!((map__38781 == null))))?(((((map__38781.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38781.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38781):map__38781);
var file = cljs.core.get.call(null,map__38781__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5720__auto__ = link.href;
if(cljs.core.truth_(temp__5720__auto__)){
var link_href = temp__5720__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,(function (p1__38778_SHARP_,p2__38779_SHARP_){
if(cljs.core._EQ_.call(null,p1__38778_SHARP_,p2__38779_SHARP_)){
return p1__38778_SHARP_;
} else {
return false;
}
}),cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = ((match).length);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),((figwheel.client.file_reloading.truncate_url.call(null,link_href)).length)], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5720__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__38784){
var map__38785 = p__38784;
var map__38785__$1 = (((((!((map__38785 == null))))?(((((map__38785.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38785.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38785):map__38785);
var match_length = cljs.core.get.call(null,map__38785__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__38785__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__38783_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__38783_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5720__auto__)){
var res = temp__5720__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
(clone.rel = "stylesheet");

(clone.media = link.media);

(clone.disabled = link.disabled);

(clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url));

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
(link.rel = "stylesheet");

(link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url));

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__38787_SHARP_,p2__38788_SHARP_){
return cljs.core.assoc.call(null,p1__38787_SHARP_,cljs.core.get.call(null,p2__38788_SHARP_,key),p2__38788_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout((function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
}),(300));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5718__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5718__auto__)){
var link = temp__5718__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),(function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
}));
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_38789 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_38789);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_38789);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__38790,p__38791){
var map__38792 = p__38790;
var map__38792__$1 = (((((!((map__38792 == null))))?(((((map__38792.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38792.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38792):map__38792);
var on_cssload = cljs.core.get.call(null,map__38792__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__38793 = p__38791;
var map__38793__$1 = (((((!((map__38793 == null))))?(((((map__38793.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38793.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38793):map__38793);
var files_msg = map__38793__$1;
var files = cljs.core.get.call(null,map__38793__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(figwheel.client.utils.html_env_QMARK_.call(null)){
var temp__5720__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5720__auto__)){
var f_datas = temp__5720__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1630010086696
