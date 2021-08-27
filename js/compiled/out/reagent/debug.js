// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('reagent.debug');
goog.require('cljs.core');
goog.require('cljs.core.constants');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__34808__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$warn], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__34808 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34809__i = 0, G__34809__a = new Array(arguments.length -  0);
while (G__34809__i < G__34809__a.length) {G__34809__a[G__34809__i] = arguments[G__34809__i + 0]; ++G__34809__i;}
  args = new cljs.core.IndexedSeq(G__34809__a,0,null);
} 
return G__34808__delegate.call(this,args);};
G__34808.cljs$lang$maxFixedArity = 0;
G__34808.cljs$lang$applyTo = (function (arglist__34810){
var args = cljs.core.seq(arglist__34810);
return G__34808__delegate(args);
});
G__34808.cljs$core$IFn$_invoke$arity$variadic = G__34808__delegate;
return G__34808;
})()
);

(o.error = (function() { 
var G__34811__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__34811 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34812__i = 0, G__34812__a = new Array(arguments.length -  0);
while (G__34812__i < G__34812__a.length) {G__34812__a[G__34812__i] = arguments[G__34812__i + 0]; ++G__34812__i;}
  args = new cljs.core.IndexedSeq(G__34812__a,0,null);
} 
return G__34811__delegate.call(this,args);};
G__34811.cljs$lang$maxFixedArity = 0;
G__34811.cljs$lang$applyTo = (function (arglist__34813){
var args = cljs.core.seq(arglist__34813);
return G__34811__delegate(args);
});
G__34811.cljs$core$IFn$_invoke$arity$variadic = G__34811__delegate;
return G__34811;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});
