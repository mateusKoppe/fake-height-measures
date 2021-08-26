// Compiled by ClojureScript 1.10.773 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__30973__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__30973 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30974__i = 0, G__30974__a = new Array(arguments.length -  0);
while (G__30974__i < G__30974__a.length) {G__30974__a[G__30974__i] = arguments[G__30974__i + 0]; ++G__30974__i;}
  args = new cljs.core.IndexedSeq(G__30974__a,0,null);
} 
return G__30973__delegate.call(this,args);};
G__30973.cljs$lang$maxFixedArity = 0;
G__30973.cljs$lang$applyTo = (function (arglist__30975){
var args = cljs.core.seq(arglist__30975);
return G__30973__delegate(args);
});
G__30973.cljs$core$IFn$_invoke$arity$variadic = G__30973__delegate;
return G__30973;
})()
);

(o.error = (function() { 
var G__30976__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__30976 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30977__i = 0, G__30977__a = new Array(arguments.length -  0);
while (G__30977__i < G__30977__a.length) {G__30977__a[G__30977__i] = arguments[G__30977__i + 0]; ++G__30977__i;}
  args = new cljs.core.IndexedSeq(G__30977__a,0,null);
} 
return G__30976__delegate.call(this,args);};
G__30976.cljs$lang$maxFixedArity = 0;
G__30976.cljs$lang$applyTo = (function (arglist__30978){
var args = cljs.core.seq(arglist__30978);
return G__30976__delegate(args);
});
G__30976.cljs$core$IFn$_invoke$arity$variadic = G__30976__delegate;
return G__30976;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1630010077793
