// Compiled by ClojureScript 1.10.773 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.20";
figwheel.client.js_stringify = (((((typeof JSON !== 'undefined')) && ((!((JSON.stringify == null))))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return cljs.core.str.cljs$core$IFn$_invoke$arity$1(x);
}catch (e40007){if((e40007 instanceof Error)){
var e = e40007;
return "Error: Unable to stringify";
} else {
throw e40007;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__40010 = arguments.length;
switch (G__40010) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__40008_SHARP_){
if(typeof p1__40008_SHARP_ === 'string'){
return p1__40008_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__40008_SHARP_);
}
}),args)], null)], null));

return null;
}));

(figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
}));

(figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2);

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4742__auto__ = [];
var len__4736__auto___40013 = arguments.length;
var i__4737__auto___40014 = (0);
while(true){
if((i__4737__auto___40014 < len__4736__auto___40013)){
args__4742__auto__.push((arguments[i__4737__auto___40014]));

var G__40015 = (i__4737__auto___40014 + (1));
i__4737__auto___40014 = G__40015;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
}));

(figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq40012){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40012));
}));

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4742__auto__ = [];
var len__4736__auto___40017 = arguments.length;
var i__4737__auto___40018 = (0);
while(true){
if((i__4737__auto___40018 < len__4736__auto___40017)){
args__4742__auto__.push((arguments[i__4737__auto___40018]));

var G__40019 = (i__4737__auto___40018 + (1));
i__4737__auto___40018 = G__40019;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
}));

(figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq40016){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40016));
}));

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
(cljs.core._STAR_print_newline_STAR_ = false);

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),"Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",(cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF")].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__40020){
var map__40021 = p__40020;
var map__40021__$1 = (((((!((map__40021 == null))))?(((((map__40021.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40021.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40021):map__40021);
var message = cljs.core.get.call(null,map__40021__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__40021__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__4126__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return false;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__36027__auto___40100 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__36028__auto__ = (function (){var switch__35932__auto__ = (function (state_40072){
var state_val_40073 = (state_40072[(1)]);
if((state_val_40073 === (7))){
var inst_40068 = (state_40072[(2)]);
var state_40072__$1 = state_40072;
var statearr_40074_40101 = state_40072__$1;
(statearr_40074_40101[(2)] = inst_40068);

(statearr_40074_40101[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40073 === (1))){
var state_40072__$1 = state_40072;
var statearr_40075_40102 = state_40072__$1;
(statearr_40075_40102[(2)] = null);

(statearr_40075_40102[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40073 === (4))){
var inst_40025 = (state_40072[(7)]);
var inst_40025__$1 = (state_40072[(2)]);
var state_40072__$1 = (function (){var statearr_40076 = state_40072;
(statearr_40076[(7)] = inst_40025__$1);

return statearr_40076;
})();
if(cljs.core.truth_(inst_40025__$1)){
var statearr_40077_40103 = state_40072__$1;
(statearr_40077_40103[(1)] = (5));

} else {
var statearr_40078_40104 = state_40072__$1;
(statearr_40078_40104[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40073 === (15))){
var inst_40032 = (state_40072[(8)]);
var inst_40047 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_40032);
var inst_40048 = cljs.core.first.call(null,inst_40047);
var inst_40049 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_40048);
var inst_40050 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_40049)].join('');
var inst_40051 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_40050);
var state_40072__$1 = state_40072;
var statearr_40079_40105 = state_40072__$1;
(statearr_40079_40105[(2)] = inst_40051);

(statearr_40079_40105[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40073 === (13))){
var inst_40056 = (state_40072[(2)]);
var state_40072__$1 = state_40072;
var statearr_40080_40106 = state_40072__$1;
(statearr_40080_40106[(2)] = inst_40056);

(statearr_40080_40106[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40073 === (6))){
var state_40072__$1 = state_40072;
var statearr_40081_40107 = state_40072__$1;
(statearr_40081_40107[(2)] = null);

(statearr_40081_40107[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40073 === (17))){
var inst_40054 = (state_40072[(2)]);
var state_40072__$1 = state_40072;
var statearr_40082_40108 = state_40072__$1;
(statearr_40082_40108[(2)] = inst_40054);

(statearr_40082_40108[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40073 === (3))){
var inst_40070 = (state_40072[(2)]);
var state_40072__$1 = state_40072;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40072__$1,inst_40070);
} else {
if((state_val_40073 === (12))){
var inst_40031 = (state_40072[(9)]);
var inst_40045 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_40031,opts);
var state_40072__$1 = state_40072;
if(inst_40045){
var statearr_40083_40109 = state_40072__$1;
(statearr_40083_40109[(1)] = (15));

} else {
var statearr_40084_40110 = state_40072__$1;
(statearr_40084_40110[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40073 === (2))){
var state_40072__$1 = state_40072;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40072__$1,(4),ch);
} else {
if((state_val_40073 === (11))){
var inst_40032 = (state_40072[(8)]);
var inst_40037 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_40038 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_40032);
var inst_40039 = cljs.core.async.timeout.call(null,(1000));
var inst_40040 = [inst_40038,inst_40039];
var inst_40041 = (new cljs.core.PersistentVector(null,2,(5),inst_40037,inst_40040,null));
var state_40072__$1 = state_40072;
return cljs.core.async.ioc_alts_BANG_.call(null,state_40072__$1,(14),inst_40041);
} else {
if((state_val_40073 === (9))){
var inst_40032 = (state_40072[(8)]);
var inst_40058 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_40059 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_40032);
var inst_40060 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_40059);
var inst_40061 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_40060)].join('');
var inst_40062 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_40061);
var state_40072__$1 = (function (){var statearr_40085 = state_40072;
(statearr_40085[(10)] = inst_40058);

return statearr_40085;
})();
var statearr_40086_40111 = state_40072__$1;
(statearr_40086_40111[(2)] = inst_40062);

(statearr_40086_40111[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40073 === (5))){
var inst_40025 = (state_40072[(7)]);
var inst_40027 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_40028 = (new cljs.core.PersistentArrayMap(null,2,inst_40027,null));
var inst_40029 = (new cljs.core.PersistentHashSet(null,inst_40028,null));
var inst_40030 = figwheel.client.focus_msgs.call(null,inst_40029,inst_40025);
var inst_40031 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_40030);
var inst_40032 = cljs.core.first.call(null,inst_40030);
var inst_40033 = figwheel.client.autoload_QMARK_.call(null);
var state_40072__$1 = (function (){var statearr_40087 = state_40072;
(statearr_40087[(9)] = inst_40031);

(statearr_40087[(8)] = inst_40032);

return statearr_40087;
})();
if(cljs.core.truth_(inst_40033)){
var statearr_40088_40112 = state_40072__$1;
(statearr_40088_40112[(1)] = (8));

} else {
var statearr_40089_40113 = state_40072__$1;
(statearr_40089_40113[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40073 === (14))){
var inst_40043 = (state_40072[(2)]);
var state_40072__$1 = state_40072;
var statearr_40090_40114 = state_40072__$1;
(statearr_40090_40114[(2)] = inst_40043);

(statearr_40090_40114[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40073 === (16))){
var state_40072__$1 = state_40072;
var statearr_40091_40115 = state_40072__$1;
(statearr_40091_40115[(2)] = null);

(statearr_40091_40115[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40073 === (10))){
var inst_40064 = (state_40072[(2)]);
var state_40072__$1 = (function (){var statearr_40092 = state_40072;
(statearr_40092[(11)] = inst_40064);

return statearr_40092;
})();
var statearr_40093_40116 = state_40072__$1;
(statearr_40093_40116[(2)] = null);

(statearr_40093_40116[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40073 === (8))){
var inst_40031 = (state_40072[(9)]);
var inst_40035 = figwheel.client.reload_file_state_QMARK_.call(null,inst_40031,opts);
var state_40072__$1 = state_40072;
if(cljs.core.truth_(inst_40035)){
var statearr_40094_40117 = state_40072__$1;
(statearr_40094_40117[(1)] = (11));

} else {
var statearr_40095_40118 = state_40072__$1;
(statearr_40095_40118[(1)] = (12));

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
});
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__35933__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__35933__auto____0 = (function (){
var statearr_40096 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40096[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__35933__auto__);

(statearr_40096[(1)] = (1));

return statearr_40096;
});
var figwheel$client$file_reloader_plugin_$_state_machine__35933__auto____1 = (function (state_40072){
while(true){
var ret_value__35934__auto__ = (function (){try{while(true){
var result__35935__auto__ = switch__35932__auto__.call(null,state_40072);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35935__auto__;
}
break;
}
}catch (e40097){if((e40097 instanceof Object)){
var ex__35936__auto__ = e40097;
var statearr_40098_40119 = state_40072;
(statearr_40098_40119[(5)] = ex__35936__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40072);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40097;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40120 = state_40072;
state_40072 = G__40120;
continue;
} else {
return ret_value__35934__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__35933__auto__ = function(state_40072){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__35933__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__35933__auto____1.call(this,state_40072);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__35933__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__35933__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__35933__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__35933__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__35933__auto__;
})()
})();
var state__36029__auto__ = (function (){var statearr_40099 = f__36028__auto__.call(null);
(statearr_40099[(6)] = c__36027__auto___40100);

return statearr_40099;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36029__auto__);
}));


return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__40121_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__40121_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(figwheel.client.utils.node_env_QMARK_.call(null)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(goog.userAgent.product.SAFARI){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(goog.userAgent.product.CHROME){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(goog.userAgent.product.FIREFOX){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(goog.userAgent.product.IE){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_40127 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__40123 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__40124 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__40125 = true;
var _STAR_print_fn_STAR__temp_val__40126 = (function (x){
return sb.append(x);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__40125);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__40126);

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
var result_value__$1 = (((!(typeof result_value === 'string')))?cljs.core.pr_str.call(null,result_value):result_value);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__40124);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__40123);
}}catch (e40122){if((e40122 instanceof Error)){
var e = e40122;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_40127], null));
} else {
var e = e40122;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return (cljs.user = ({}));
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__40128){
var map__40129 = p__40128;
var map__40129__$1 = (((((!((map__40129 == null))))?(((((map__40129.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40129.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40129):map__40129);
var opts = map__40129__$1;
var build_id = cljs.core.get.call(null,map__40129__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return (function (p__40131){
var vec__40132 = p__40131;
var seq__40133 = cljs.core.seq.call(null,vec__40132);
var first__40134 = cljs.core.first.call(null,seq__40133);
var seq__40133__$1 = cljs.core.next.call(null,seq__40133);
var map__40135 = first__40134;
var map__40135__$1 = (((((!((map__40135 == null))))?(((((map__40135.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40135.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40135):map__40135);
var msg = map__40135__$1;
var msg_name = cljs.core.get.call(null,map__40135__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__40133__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,(function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
}));
} else {
return null;
}
});
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__40137){
var vec__40138 = p__40137;
var seq__40139 = cljs.core.seq.call(null,vec__40138);
var first__40140 = cljs.core.first.call(null,seq__40139);
var seq__40139__$1 = cljs.core.next.call(null,seq__40139);
var map__40141 = first__40140;
var map__40141__$1 = (((((!((map__40141 == null))))?(((((map__40141.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40141.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40141):map__40141);
var msg = map__40141__$1;
var msg_name = cljs.core.get.call(null,map__40141__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__40139__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__40143){
var map__40144 = p__40143;
var map__40144__$1 = (((((!((map__40144 == null))))?(((((map__40144.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40144.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40144):map__40144);
var on_compile_warning = cljs.core.get.call(null,map__40144__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__40144__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return (function (p__40146){
var vec__40147 = p__40146;
var seq__40148 = cljs.core.seq.call(null,vec__40147);
var first__40149 = cljs.core.first.call(null,seq__40148);
var seq__40148__$1 = cljs.core.next.call(null,seq__40148);
var map__40150 = first__40149;
var map__40150__$1 = (((((!((map__40150 == null))))?(((((map__40150.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40150.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40150):map__40150);
var msg = map__40150__$1;
var msg_name = cljs.core.get.call(null,map__40150__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__40148__$1;
var pred__40152 = cljs.core._EQ_;
var expr__40153 = msg_name;
if(cljs.core.truth_(pred__40152.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__40153))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__40152.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__40153))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__36027__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__36028__auto__ = (function (){var switch__35932__auto__ = (function (state_40242){
var state_val_40243 = (state_40242[(1)]);
if((state_val_40243 === (7))){
var inst_40162 = (state_40242[(2)]);
var state_40242__$1 = state_40242;
if(cljs.core.truth_(inst_40162)){
var statearr_40244_40291 = state_40242__$1;
(statearr_40244_40291[(1)] = (8));

} else {
var statearr_40245_40292 = state_40242__$1;
(statearr_40245_40292[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40243 === (20))){
var inst_40236 = (state_40242[(2)]);
var state_40242__$1 = state_40242;
var statearr_40246_40293 = state_40242__$1;
(statearr_40246_40293[(2)] = inst_40236);

(statearr_40246_40293[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40243 === (27))){
var inst_40232 = (state_40242[(2)]);
var state_40242__$1 = state_40242;
var statearr_40247_40294 = state_40242__$1;
(statearr_40247_40294[(2)] = inst_40232);

(statearr_40247_40294[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40243 === (1))){
var inst_40155 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_40242__$1 = state_40242;
if(cljs.core.truth_(inst_40155)){
var statearr_40248_40295 = state_40242__$1;
(statearr_40248_40295[(1)] = (2));

} else {
var statearr_40249_40296 = state_40242__$1;
(statearr_40249_40296[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40243 === (24))){
var inst_40234 = (state_40242[(2)]);
var state_40242__$1 = state_40242;
var statearr_40250_40297 = state_40242__$1;
(statearr_40250_40297[(2)] = inst_40234);

(statearr_40250_40297[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40243 === (4))){
var inst_40240 = (state_40242[(2)]);
var state_40242__$1 = state_40242;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40242__$1,inst_40240);
} else {
if((state_val_40243 === (15))){
var inst_40238 = (state_40242[(2)]);
var state_40242__$1 = state_40242;
var statearr_40251_40298 = state_40242__$1;
(statearr_40251_40298[(2)] = inst_40238);

(statearr_40251_40298[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40243 === (21))){
var inst_40191 = (state_40242[(2)]);
var inst_40192 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40193 = figwheel.client.auto_jump_to_error.call(null,opts,inst_40192);
var state_40242__$1 = (function (){var statearr_40252 = state_40242;
(statearr_40252[(7)] = inst_40191);

return statearr_40252;
})();
var statearr_40253_40299 = state_40242__$1;
(statearr_40253_40299[(2)] = inst_40193);

(statearr_40253_40299[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40243 === (31))){
var inst_40221 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_40242__$1 = state_40242;
if(inst_40221){
var statearr_40254_40300 = state_40242__$1;
(statearr_40254_40300[(1)] = (34));

} else {
var statearr_40255_40301 = state_40242__$1;
(statearr_40255_40301[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40243 === (32))){
var inst_40230 = (state_40242[(2)]);
var state_40242__$1 = state_40242;
var statearr_40256_40302 = state_40242__$1;
(statearr_40256_40302[(2)] = inst_40230);

(statearr_40256_40302[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40243 === (33))){
var inst_40217 = (state_40242[(2)]);
var inst_40218 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40219 = figwheel.client.auto_jump_to_error.call(null,opts,inst_40218);
var state_40242__$1 = (function (){var statearr_40257 = state_40242;
(statearr_40257[(8)] = inst_40217);

return statearr_40257;
})();
var statearr_40258_40303 = state_40242__$1;
(statearr_40258_40303[(2)] = inst_40219);

(statearr_40258_40303[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40243 === (13))){
var inst_40176 = figwheel.client.heads_up.clear.call(null);
var state_40242__$1 = state_40242;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40242__$1,(16),inst_40176);
} else {
if((state_val_40243 === (22))){
var inst_40197 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40198 = figwheel.client.heads_up.append_warning_message.call(null,inst_40197);
var state_40242__$1 = state_40242;
var statearr_40259_40304 = state_40242__$1;
(statearr_40259_40304[(2)] = inst_40198);

(statearr_40259_40304[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40243 === (36))){
var inst_40228 = (state_40242[(2)]);
var state_40242__$1 = state_40242;
var statearr_40260_40305 = state_40242__$1;
(statearr_40260_40305[(2)] = inst_40228);

(statearr_40260_40305[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40243 === (29))){
var inst_40208 = (state_40242[(2)]);
var inst_40209 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40210 = figwheel.client.auto_jump_to_error.call(null,opts,inst_40209);
var state_40242__$1 = (function (){var statearr_40261 = state_40242;
(statearr_40261[(9)] = inst_40208);

return statearr_40261;
})();
var statearr_40262_40306 = state_40242__$1;
(statearr_40262_40306[(2)] = inst_40210);

(statearr_40262_40306[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40243 === (6))){
var inst_40157 = (state_40242[(10)]);
var state_40242__$1 = state_40242;
var statearr_40263_40307 = state_40242__$1;
(statearr_40263_40307[(2)] = inst_40157);

(statearr_40263_40307[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40243 === (28))){
var inst_40204 = (state_40242[(2)]);
var inst_40205 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40206 = figwheel.client.heads_up.display_warning.call(null,inst_40205);
var state_40242__$1 = (function (){var statearr_40264 = state_40242;
(statearr_40264[(11)] = inst_40204);

return statearr_40264;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40242__$1,(29),inst_40206);
} else {
if((state_val_40243 === (25))){
var inst_40202 = figwheel.client.heads_up.clear.call(null);
var state_40242__$1 = state_40242;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40242__$1,(28),inst_40202);
} else {
if((state_val_40243 === (34))){
var inst_40223 = figwheel.client.heads_up.flash_loaded.call(null);
var state_40242__$1 = state_40242;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40242__$1,(37),inst_40223);
} else {
if((state_val_40243 === (17))){
var inst_40182 = (state_40242[(2)]);
var inst_40183 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40184 = figwheel.client.auto_jump_to_error.call(null,opts,inst_40183);
var state_40242__$1 = (function (){var statearr_40265 = state_40242;
(statearr_40265[(12)] = inst_40182);

return statearr_40265;
})();
var statearr_40266_40308 = state_40242__$1;
(statearr_40266_40308[(2)] = inst_40184);

(statearr_40266_40308[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40243 === (3))){
var inst_40174 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_40242__$1 = state_40242;
if(inst_40174){
var statearr_40267_40309 = state_40242__$1;
(statearr_40267_40309[(1)] = (13));

} else {
var statearr_40268_40310 = state_40242__$1;
(statearr_40268_40310[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40243 === (12))){
var inst_40170 = (state_40242[(2)]);
var state_40242__$1 = state_40242;
var statearr_40269_40311 = state_40242__$1;
(statearr_40269_40311[(2)] = inst_40170);

(statearr_40269_40311[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40243 === (2))){
var inst_40157 = (state_40242[(10)]);
var inst_40157__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_40242__$1 = (function (){var statearr_40270 = state_40242;
(statearr_40270[(10)] = inst_40157__$1);

return statearr_40270;
})();
if(cljs.core.truth_(inst_40157__$1)){
var statearr_40271_40312 = state_40242__$1;
(statearr_40271_40312[(1)] = (5));

} else {
var statearr_40272_40313 = state_40242__$1;
(statearr_40272_40313[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40243 === (23))){
var inst_40200 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_40242__$1 = state_40242;
if(inst_40200){
var statearr_40273_40314 = state_40242__$1;
(statearr_40273_40314[(1)] = (25));

} else {
var statearr_40274_40315 = state_40242__$1;
(statearr_40274_40315[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40243 === (35))){
var state_40242__$1 = state_40242;
var statearr_40275_40316 = state_40242__$1;
(statearr_40275_40316[(2)] = null);

(statearr_40275_40316[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40243 === (19))){
var inst_40195 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_40242__$1 = state_40242;
if(inst_40195){
var statearr_40276_40317 = state_40242__$1;
(statearr_40276_40317[(1)] = (22));

} else {
var statearr_40277_40318 = state_40242__$1;
(statearr_40277_40318[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40243 === (11))){
var inst_40166 = (state_40242[(2)]);
var state_40242__$1 = state_40242;
var statearr_40278_40319 = state_40242__$1;
(statearr_40278_40319[(2)] = inst_40166);

(statearr_40278_40319[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40243 === (9))){
var inst_40168 = figwheel.client.heads_up.clear.call(null);
var state_40242__$1 = state_40242;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40242__$1,(12),inst_40168);
} else {
if((state_val_40243 === (5))){
var inst_40159 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_40242__$1 = state_40242;
var statearr_40279_40320 = state_40242__$1;
(statearr_40279_40320[(2)] = inst_40159);

(statearr_40279_40320[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40243 === (14))){
var inst_40186 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_40242__$1 = state_40242;
if(inst_40186){
var statearr_40280_40321 = state_40242__$1;
(statearr_40280_40321[(1)] = (18));

} else {
var statearr_40281_40322 = state_40242__$1;
(statearr_40281_40322[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40243 === (26))){
var inst_40212 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_40242__$1 = state_40242;
if(inst_40212){
var statearr_40282_40323 = state_40242__$1;
(statearr_40282_40323[(1)] = (30));

} else {
var statearr_40283_40324 = state_40242__$1;
(statearr_40283_40324[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40243 === (16))){
var inst_40178 = (state_40242[(2)]);
var inst_40179 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40180 = figwheel.client.heads_up.display_exception.call(null,inst_40179);
var state_40242__$1 = (function (){var statearr_40284 = state_40242;
(statearr_40284[(13)] = inst_40178);

return statearr_40284;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40242__$1,(17),inst_40180);
} else {
if((state_val_40243 === (30))){
var inst_40214 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40215 = figwheel.client.heads_up.display_warning.call(null,inst_40214);
var state_40242__$1 = state_40242;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40242__$1,(33),inst_40215);
} else {
if((state_val_40243 === (10))){
var inst_40172 = (state_40242[(2)]);
var state_40242__$1 = state_40242;
var statearr_40285_40325 = state_40242__$1;
(statearr_40285_40325[(2)] = inst_40172);

(statearr_40285_40325[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40243 === (18))){
var inst_40188 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40189 = figwheel.client.heads_up.display_exception.call(null,inst_40188);
var state_40242__$1 = state_40242;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40242__$1,(21),inst_40189);
} else {
if((state_val_40243 === (37))){
var inst_40225 = (state_40242[(2)]);
var state_40242__$1 = state_40242;
var statearr_40286_40326 = state_40242__$1;
(statearr_40286_40326[(2)] = inst_40225);

(statearr_40286_40326[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40243 === (8))){
var inst_40164 = figwheel.client.heads_up.flash_loaded.call(null);
var state_40242__$1 = state_40242;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40242__$1,(11),inst_40164);
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
});
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35933__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35933__auto____0 = (function (){
var statearr_40287 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40287[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35933__auto__);

(statearr_40287[(1)] = (1));

return statearr_40287;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35933__auto____1 = (function (state_40242){
while(true){
var ret_value__35934__auto__ = (function (){try{while(true){
var result__35935__auto__ = switch__35932__auto__.call(null,state_40242);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35935__auto__;
}
break;
}
}catch (e40288){if((e40288 instanceof Object)){
var ex__35936__auto__ = e40288;
var statearr_40289_40327 = state_40242;
(statearr_40289_40327[(5)] = ex__35936__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40242);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40288;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40328 = state_40242;
state_40242 = G__40328;
continue;
} else {
return ret_value__35934__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35933__auto__ = function(state_40242){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35933__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35933__auto____1.call(this,state_40242);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35933__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35933__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35933__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35933__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35933__auto__;
})()
})();
var state__36029__auto__ = (function (){var statearr_40290 = f__36028__auto__.call(null);
(statearr_40290[(6)] = c__36027__auto__);

return statearr_40290;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36029__auto__);
}));

return c__36027__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__36027__auto___40357 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__36028__auto__ = (function (){var switch__35932__auto__ = (function (state_40343){
var state_val_40344 = (state_40343[(1)]);
if((state_val_40344 === (1))){
var state_40343__$1 = state_40343;
var statearr_40345_40358 = state_40343__$1;
(statearr_40345_40358[(2)] = null);

(statearr_40345_40358[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40344 === (2))){
var state_40343__$1 = state_40343;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40343__$1,(4),ch);
} else {
if((state_val_40344 === (3))){
var inst_40341 = (state_40343[(2)]);
var state_40343__$1 = state_40343;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40343__$1,inst_40341);
} else {
if((state_val_40344 === (4))){
var inst_40331 = (state_40343[(7)]);
var inst_40331__$1 = (state_40343[(2)]);
var state_40343__$1 = (function (){var statearr_40346 = state_40343;
(statearr_40346[(7)] = inst_40331__$1);

return statearr_40346;
})();
if(cljs.core.truth_(inst_40331__$1)){
var statearr_40347_40359 = state_40343__$1;
(statearr_40347_40359[(1)] = (5));

} else {
var statearr_40348_40360 = state_40343__$1;
(statearr_40348_40360[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40344 === (5))){
var inst_40331 = (state_40343[(7)]);
var inst_40333 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_40331);
var state_40343__$1 = state_40343;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40343__$1,(8),inst_40333);
} else {
if((state_val_40344 === (6))){
var state_40343__$1 = state_40343;
var statearr_40349_40361 = state_40343__$1;
(statearr_40349_40361[(2)] = null);

(statearr_40349_40361[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40344 === (7))){
var inst_40339 = (state_40343[(2)]);
var state_40343__$1 = state_40343;
var statearr_40350_40362 = state_40343__$1;
(statearr_40350_40362[(2)] = inst_40339);

(statearr_40350_40362[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40344 === (8))){
var inst_40335 = (state_40343[(2)]);
var state_40343__$1 = (function (){var statearr_40351 = state_40343;
(statearr_40351[(8)] = inst_40335);

return statearr_40351;
})();
var statearr_40352_40363 = state_40343__$1;
(statearr_40352_40363[(2)] = null);

(statearr_40352_40363[(1)] = (2));


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
});
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__35933__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__35933__auto____0 = (function (){
var statearr_40353 = [null,null,null,null,null,null,null,null,null];
(statearr_40353[(0)] = figwheel$client$heads_up_plugin_$_state_machine__35933__auto__);

(statearr_40353[(1)] = (1));

return statearr_40353;
});
var figwheel$client$heads_up_plugin_$_state_machine__35933__auto____1 = (function (state_40343){
while(true){
var ret_value__35934__auto__ = (function (){try{while(true){
var result__35935__auto__ = switch__35932__auto__.call(null,state_40343);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35935__auto__;
}
break;
}
}catch (e40354){if((e40354 instanceof Object)){
var ex__35936__auto__ = e40354;
var statearr_40355_40364 = state_40343;
(statearr_40355_40364[(5)] = ex__35936__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40343);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40354;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40365 = state_40343;
state_40343 = G__40365;
continue;
} else {
return ret_value__35934__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__35933__auto__ = function(state_40343){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__35933__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__35933__auto____1.call(this,state_40343);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__35933__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__35933__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__35933__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__35933__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__35933__auto__;
})()
})();
var state__36029__auto__ = (function (){var statearr_40356 = f__36028__auto__.call(null);
(statearr_40356[(6)] = c__36027__auto___40357);

return statearr_40356;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36029__auto__);
}));


figwheel.client.heads_up.ensure_container.call(null);

return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__36027__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__36028__auto__ = (function (){var switch__35932__auto__ = (function (state_40371){
var state_val_40372 = (state_40371[(1)]);
if((state_val_40372 === (1))){
var inst_40366 = cljs.core.async.timeout.call(null,(3000));
var state_40371__$1 = state_40371;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40371__$1,(2),inst_40366);
} else {
if((state_val_40372 === (2))){
var inst_40368 = (state_40371[(2)]);
var inst_40369 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_40371__$1 = (function (){var statearr_40373 = state_40371;
(statearr_40373[(7)] = inst_40368);

return statearr_40373;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40371__$1,inst_40369);
} else {
return null;
}
}
});
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__35933__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__35933__auto____0 = (function (){
var statearr_40374 = [null,null,null,null,null,null,null,null];
(statearr_40374[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__35933__auto__);

(statearr_40374[(1)] = (1));

return statearr_40374;
});
var figwheel$client$enforce_project_plugin_$_state_machine__35933__auto____1 = (function (state_40371){
while(true){
var ret_value__35934__auto__ = (function (){try{while(true){
var result__35935__auto__ = switch__35932__auto__.call(null,state_40371);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35935__auto__;
}
break;
}
}catch (e40375){if((e40375 instanceof Object)){
var ex__35936__auto__ = e40375;
var statearr_40376_40378 = state_40371;
(statearr_40376_40378[(5)] = ex__35936__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40371);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40375;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40379 = state_40371;
state_40371 = G__40379;
continue;
} else {
return ret_value__35934__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__35933__auto__ = function(state_40371){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__35933__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__35933__auto____1.call(this,state_40371);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__35933__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__35933__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__35933__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__35933__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__35933__auto__;
})()
})();
var state__36029__auto__ = (function (){var statearr_40377 = f__36028__auto__.call(null);
(statearr_40377[(6)] = c__36027__auto__);

return statearr_40377;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36029__auto__);
}));

return c__36027__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5720__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5720__auto__)){
var figwheel_version = temp__5720__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__36027__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__36028__auto__ = (function (){var switch__35932__auto__ = (function (state_40386){
var state_val_40387 = (state_40386[(1)]);
if((state_val_40387 === (1))){
var inst_40380 = cljs.core.async.timeout.call(null,(2000));
var state_40386__$1 = state_40386;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40386__$1,(2),inst_40380);
} else {
if((state_val_40387 === (2))){
var inst_40382 = (state_40386[(2)]);
var inst_40383 = ["Figwheel Client Version <strong>",figwheel.client._figwheel_version_,"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_40384 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_40383);
var state_40386__$1 = (function (){var statearr_40388 = state_40386;
(statearr_40388[(7)] = inst_40382);

return statearr_40388;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40386__$1,inst_40384);
} else {
return null;
}
}
});
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35933__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35933__auto____0 = (function (){
var statearr_40389 = [null,null,null,null,null,null,null,null];
(statearr_40389[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35933__auto__);

(statearr_40389[(1)] = (1));

return statearr_40389;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35933__auto____1 = (function (state_40386){
while(true){
var ret_value__35934__auto__ = (function (){try{while(true){
var result__35935__auto__ = switch__35932__auto__.call(null,state_40386);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35935__auto__;
}
break;
}
}catch (e40390){if((e40390 instanceof Object)){
var ex__35936__auto__ = e40390;
var statearr_40391_40393 = state_40386;
(statearr_40391_40393[(5)] = ex__35936__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40386);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40390;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40394 = state_40386;
state_40386 = G__40394;
continue;
} else {
return ret_value__35934__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35933__auto__ = function(state_40386){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35933__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35933__auto____1.call(this,state_40386);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35933__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35933__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35933__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35933__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35933__auto__;
})()
})();
var state__36029__auto__ = (function (){var statearr_40392 = f__36028__auto__.call(null);
(statearr_40392[(6)] = c__36027__auto__);

return statearr_40392;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36029__auto__);
}));

return c__36027__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__40395){
var map__40396 = p__40395;
var map__40396__$1 = (((((!((map__40396 == null))))?(((((map__40396.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40396.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40396):map__40396);
var file = cljs.core.get.call(null,map__40396__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__40396__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__40396__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__40398 = "";
var G__40398__$1 = (cljs.core.truth_(file)?[G__40398,"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__40398);
var G__40398__$2 = (cljs.core.truth_(line)?[G__40398__$1," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__40398__$1);
if(cljs.core.truth_((function (){var and__4115__auto__ = line;
if(cljs.core.truth_(and__4115__auto__)){
return column;
} else {
return and__4115__auto__;
}
})())){
return [G__40398__$2,", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__40398__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__40399){
var map__40400 = p__40399;
var map__40400__$1 = (((((!((map__40400 == null))))?(((((map__40400.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40400.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40400):map__40400);
var ed = map__40400__$1;
var exception_data = cljs.core.get.call(null,map__40400__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__40400__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var message_40403 = (function (){var G__40402 = cljs.core.apply.call(null,cljs.core.str,"Figwheel: Compile Exception ",figwheel.client.format_messages.call(null,exception_data));
if(cljs.core.truth_(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(exception_data))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__40402)," Error on ",figwheel.client.file_line_column.call(null,exception_data)].join('');
} else {
return G__40402;
}
})();
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),message_40403);

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__40404){
var map__40405 = p__40404;
var map__40405__$1 = (((((!((map__40405 == null))))?(((((map__40405.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40405.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40405):map__40405);
var w = map__40405__$1;
var message = cljs.core.get.call(null,map__40405__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",figwheel.client.file_line_column.call(null,message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.config_defaults !== 'undefined')){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/out/figwheel/client.cljs",33,1,362,362,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/out/figwheel/client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(figwheel.client.utils.html_env_QMARK_.call(null)){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = (((!(figwheel.client.utils.html_env_QMARK_.call(null))))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__4115__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__4115__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__4115__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__40407 = cljs.core.seq.call(null,plugins);
var chunk__40408 = null;
var count__40409 = (0);
var i__40410 = (0);
while(true){
if((i__40410 < count__40409)){
var vec__40417 = cljs.core._nth.call(null,chunk__40408,i__40410);
var k = cljs.core.nth.call(null,vec__40417,(0),null);
var plugin = cljs.core.nth.call(null,vec__40417,(1),null);
if(cljs.core.truth_(plugin)){
var pl_40423 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__40407,chunk__40408,count__40409,i__40410,pl_40423,vec__40417,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_40423.call(null,msg_hist);
});})(seq__40407,chunk__40408,count__40409,i__40410,pl_40423,vec__40417,k,plugin))
);
} else {
}


var G__40424 = seq__40407;
var G__40425 = chunk__40408;
var G__40426 = count__40409;
var G__40427 = (i__40410 + (1));
seq__40407 = G__40424;
chunk__40408 = G__40425;
count__40409 = G__40426;
i__40410 = G__40427;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__40407);
if(temp__5720__auto__){
var seq__40407__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40407__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__40407__$1);
var G__40428 = cljs.core.chunk_rest.call(null,seq__40407__$1);
var G__40429 = c__4556__auto__;
var G__40430 = cljs.core.count.call(null,c__4556__auto__);
var G__40431 = (0);
seq__40407 = G__40428;
chunk__40408 = G__40429;
count__40409 = G__40430;
i__40410 = G__40431;
continue;
} else {
var vec__40420 = cljs.core.first.call(null,seq__40407__$1);
var k = cljs.core.nth.call(null,vec__40420,(0),null);
var plugin = cljs.core.nth.call(null,vec__40420,(1),null);
if(cljs.core.truth_(plugin)){
var pl_40432 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__40407,chunk__40408,count__40409,i__40410,pl_40432,vec__40420,k,plugin,seq__40407__$1,temp__5720__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_40432.call(null,msg_hist);
});})(seq__40407,chunk__40408,count__40409,i__40410,pl_40432,vec__40420,k,plugin,seq__40407__$1,temp__5720__auto__))
);
} else {
}


var G__40433 = cljs.core.next.call(null,seq__40407__$1);
var G__40434 = null;
var G__40435 = (0);
var G__40436 = (0);
seq__40407 = G__40433;
chunk__40408 = G__40434;
count__40409 = G__40435;
i__40410 = G__40436;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__40438 = arguments.length;
switch (G__40438) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((((!((goog.dependencies_ == null)))) || ((((!((goog.debugLoader_ == null)))) && ((!((goog.debugLoader_.dependencies_ == null)))))))){
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.__figwheel_start_once__ !== 'undefined')){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
(figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts));

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__40439_40444 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__40440_40445 = null;
var count__40441_40446 = (0);
var i__40442_40447 = (0);
while(true){
if((i__40442_40447 < count__40441_40446)){
var msg_40448 = cljs.core._nth.call(null,chunk__40440_40445,i__40442_40447);
figwheel.client.socket.handle_incoming_message.call(null,msg_40448);


var G__40449 = seq__40439_40444;
var G__40450 = chunk__40440_40445;
var G__40451 = count__40441_40446;
var G__40452 = (i__40442_40447 + (1));
seq__40439_40444 = G__40449;
chunk__40440_40445 = G__40450;
count__40441_40446 = G__40451;
i__40442_40447 = G__40452;
continue;
} else {
var temp__5720__auto___40453 = cljs.core.seq.call(null,seq__40439_40444);
if(temp__5720__auto___40453){
var seq__40439_40454__$1 = temp__5720__auto___40453;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40439_40454__$1)){
var c__4556__auto___40455 = cljs.core.chunk_first.call(null,seq__40439_40454__$1);
var G__40456 = cljs.core.chunk_rest.call(null,seq__40439_40454__$1);
var G__40457 = c__4556__auto___40455;
var G__40458 = cljs.core.count.call(null,c__4556__auto___40455);
var G__40459 = (0);
seq__40439_40444 = G__40456;
chunk__40440_40445 = G__40457;
count__40441_40446 = G__40458;
i__40442_40447 = G__40459;
continue;
} else {
var msg_40460 = cljs.core.first.call(null,seq__40439_40454__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_40460);


var G__40461 = cljs.core.next.call(null,seq__40439_40454__$1);
var G__40462 = null;
var G__40463 = (0);
var G__40464 = (0);
seq__40439_40444 = G__40461;
chunk__40440_40445 = G__40462;
count__40441_40446 = G__40463;
i__40442_40447 = G__40464;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
} else {
return null;
}
}));

(figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
}));

(figwheel.client.start.cljs$lang$maxFixedArity = 1);

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4742__auto__ = [];
var len__4736__auto___40469 = arguments.length;
var i__4737__auto___40470 = (0);
while(true){
if((i__4737__auto___40470 < len__4736__auto___40469)){
args__4742__auto__.push((arguments[i__4737__auto___40470]));

var G__40471 = (i__4737__auto___40470 + (1));
i__4737__auto___40470 = G__40471;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__40466){
var map__40467 = p__40466;
var map__40467__$1 = (((((!((map__40467 == null))))?(((((map__40467.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40467.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40467):map__40467);
var opts = map__40467__$1;
return figwheel.client.start.call(null,opts);
}));

(figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq40465){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40465));
}));

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e40472){if((e40472 instanceof Error)){
var e = e40472;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e40472;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
(goog.dependencies_ = true);
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),(function (p__40473){
var map__40474 = p__40473;
var map__40474__$1 = (((((!((map__40474 == null))))?(((((map__40474.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40474.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40474):map__40474);
var msg_name = cljs.core.get.call(null,map__40474__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return (location.href = location.href);
} else {
return null;
}
}));
});

//# sourceMappingURL=client.js.map?rel=1630010088931
