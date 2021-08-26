// Compiled by ClojureScript 1.10.773 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__39660){
var map__39661 = p__39660;
var map__39661__$1 = (((((!((map__39661 == null))))?(((((map__39661.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39661.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39661):map__39661);
var m = map__39661__$1;
var n = cljs.core.get.call(null,map__39661__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__39661__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [(function (){var temp__5720__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5720__auto__)){
var ns = temp__5720__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__39663_39695 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__39664_39696 = null;
var count__39665_39697 = (0);
var i__39666_39698 = (0);
while(true){
if((i__39666_39698 < count__39665_39697)){
var f_39699 = cljs.core._nth.call(null,chunk__39664_39696,i__39666_39698);
cljs.core.println.call(null,"  ",f_39699);


var G__39700 = seq__39663_39695;
var G__39701 = chunk__39664_39696;
var G__39702 = count__39665_39697;
var G__39703 = (i__39666_39698 + (1));
seq__39663_39695 = G__39700;
chunk__39664_39696 = G__39701;
count__39665_39697 = G__39702;
i__39666_39698 = G__39703;
continue;
} else {
var temp__5720__auto___39704 = cljs.core.seq.call(null,seq__39663_39695);
if(temp__5720__auto___39704){
var seq__39663_39705__$1 = temp__5720__auto___39704;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39663_39705__$1)){
var c__4556__auto___39706 = cljs.core.chunk_first.call(null,seq__39663_39705__$1);
var G__39707 = cljs.core.chunk_rest.call(null,seq__39663_39705__$1);
var G__39708 = c__4556__auto___39706;
var G__39709 = cljs.core.count.call(null,c__4556__auto___39706);
var G__39710 = (0);
seq__39663_39695 = G__39707;
chunk__39664_39696 = G__39708;
count__39665_39697 = G__39709;
i__39666_39698 = G__39710;
continue;
} else {
var f_39711 = cljs.core.first.call(null,seq__39663_39705__$1);
cljs.core.println.call(null,"  ",f_39711);


var G__39712 = cljs.core.next.call(null,seq__39663_39705__$1);
var G__39713 = null;
var G__39714 = (0);
var G__39715 = (0);
seq__39663_39695 = G__39712;
chunk__39664_39696 = G__39713;
count__39665_39697 = G__39714;
i__39666_39698 = G__39715;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_39716 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_39716);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_39716)))?cljs.core.second.call(null,arglists_39716):arglists_39716));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__39667_39717 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__39668_39718 = null;
var count__39669_39719 = (0);
var i__39670_39720 = (0);
while(true){
if((i__39670_39720 < count__39669_39719)){
var vec__39681_39721 = cljs.core._nth.call(null,chunk__39668_39718,i__39670_39720);
var name_39722 = cljs.core.nth.call(null,vec__39681_39721,(0),null);
var map__39684_39723 = cljs.core.nth.call(null,vec__39681_39721,(1),null);
var map__39684_39724__$1 = (((((!((map__39684_39723 == null))))?(((((map__39684_39723.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39684_39723.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39684_39723):map__39684_39723);
var doc_39725 = cljs.core.get.call(null,map__39684_39724__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_39726 = cljs.core.get.call(null,map__39684_39724__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_39722);

cljs.core.println.call(null," ",arglists_39726);

if(cljs.core.truth_(doc_39725)){
cljs.core.println.call(null," ",doc_39725);
} else {
}


var G__39727 = seq__39667_39717;
var G__39728 = chunk__39668_39718;
var G__39729 = count__39669_39719;
var G__39730 = (i__39670_39720 + (1));
seq__39667_39717 = G__39727;
chunk__39668_39718 = G__39728;
count__39669_39719 = G__39729;
i__39670_39720 = G__39730;
continue;
} else {
var temp__5720__auto___39731 = cljs.core.seq.call(null,seq__39667_39717);
if(temp__5720__auto___39731){
var seq__39667_39732__$1 = temp__5720__auto___39731;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39667_39732__$1)){
var c__4556__auto___39733 = cljs.core.chunk_first.call(null,seq__39667_39732__$1);
var G__39734 = cljs.core.chunk_rest.call(null,seq__39667_39732__$1);
var G__39735 = c__4556__auto___39733;
var G__39736 = cljs.core.count.call(null,c__4556__auto___39733);
var G__39737 = (0);
seq__39667_39717 = G__39734;
chunk__39668_39718 = G__39735;
count__39669_39719 = G__39736;
i__39670_39720 = G__39737;
continue;
} else {
var vec__39686_39738 = cljs.core.first.call(null,seq__39667_39732__$1);
var name_39739 = cljs.core.nth.call(null,vec__39686_39738,(0),null);
var map__39689_39740 = cljs.core.nth.call(null,vec__39686_39738,(1),null);
var map__39689_39741__$1 = (((((!((map__39689_39740 == null))))?(((((map__39689_39740.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39689_39740.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39689_39740):map__39689_39740);
var doc_39742 = cljs.core.get.call(null,map__39689_39741__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_39743 = cljs.core.get.call(null,map__39689_39741__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_39739);

cljs.core.println.call(null," ",arglists_39743);

if(cljs.core.truth_(doc_39742)){
cljs.core.println.call(null," ",doc_39742);
} else {
}


var G__39744 = cljs.core.next.call(null,seq__39667_39732__$1);
var G__39745 = null;
var G__39746 = (0);
var G__39747 = (0);
seq__39667_39717 = G__39744;
chunk__39668_39718 = G__39745;
count__39669_39719 = G__39746;
i__39670_39720 = G__39747;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5720__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5720__auto__)){
var fnspec = temp__5720__auto__;
cljs.core.print.call(null,"Spec");

var seq__39691 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__39692 = null;
var count__39693 = (0);
var i__39694 = (0);
while(true){
if((i__39694 < count__39693)){
var role = cljs.core._nth.call(null,chunk__39692,i__39694);
var temp__5720__auto___39748__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___39748__$1)){
var spec_39749 = temp__5720__auto___39748__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_39749));
} else {
}


var G__39750 = seq__39691;
var G__39751 = chunk__39692;
var G__39752 = count__39693;
var G__39753 = (i__39694 + (1));
seq__39691 = G__39750;
chunk__39692 = G__39751;
count__39693 = G__39752;
i__39694 = G__39753;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq.call(null,seq__39691);
if(temp__5720__auto____$1){
var seq__39691__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39691__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__39691__$1);
var G__39754 = cljs.core.chunk_rest.call(null,seq__39691__$1);
var G__39755 = c__4556__auto__;
var G__39756 = cljs.core.count.call(null,c__4556__auto__);
var G__39757 = (0);
seq__39691 = G__39754;
chunk__39692 = G__39755;
count__39693 = G__39756;
i__39694 = G__39757;
continue;
} else {
var role = cljs.core.first.call(null,seq__39691__$1);
var temp__5720__auto___39758__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___39758__$2)){
var spec_39759 = temp__5720__auto___39758__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_39759));
} else {
}


var G__39760 = cljs.core.next.call(null,seq__39691__$1);
var G__39761 = null;
var G__39762 = (0);
var G__39763 = (0);
seq__39691 = G__39760;
chunk__39692 = G__39761;
count__39693 = G__39762;
i__39694 = G__39763;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.call(null,"js",t.name):null
))], null),(function (){var temp__5720__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5720__auto__)){
var msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5720__auto__)){
var ed = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__39764 = cljs.core.conj.call(null,via,t);
var G__39765 = cljs.core.ex_cause.call(null,t);
via = G__39764;
t = G__39765;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5720__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5720__auto__)){
var root_msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5720__auto__)){
var data = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5720__auto__)){
var phase = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__39768 = datafied_throwable;
var map__39768__$1 = (((((!((map__39768 == null))))?(((((map__39768.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39768.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39768):map__39768);
var via = cljs.core.get.call(null,map__39768__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__39768__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__39768__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__39769 = cljs.core.last.call(null,via);
var map__39769__$1 = (((((!((map__39769 == null))))?(((((map__39769.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39769.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39769):map__39769);
var type = cljs.core.get.call(null,map__39769__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__39769__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__39769__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__39770 = data;
var map__39770__$1 = (((((!((map__39770 == null))))?(((((map__39770.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39770.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39770):map__39770);
var problems = cljs.core.get.call(null,map__39770__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__39770__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__39770__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__39771 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__39771__$1 = (((((!((map__39771 == null))))?(((((map__39771.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39771.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39771):map__39771);
var top_data = map__39771__$1;
var source = cljs.core.get.call(null,map__39771__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__39776 = phase;
var G__39776__$1 = (((G__39776 instanceof cljs.core.Keyword))?G__39776.fqn:null);
switch (G__39776__$1) {
case "read-source":
var map__39777 = data;
var map__39777__$1 = (((((!((map__39777 == null))))?(((((map__39777.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39777.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39777):map__39777);
var line = cljs.core.get.call(null,map__39777__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__39777__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__39779 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__39779__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__39779,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__39779);
var G__39779__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__39779__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__39779__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__39779__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__39779__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__39780 = top_data;
var G__39780__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__39780,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__39780);
var G__39780__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__39780__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__39780__$1);
var G__39780__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__39780__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__39780__$2);
var G__39780__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__39780__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__39780__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__39780__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__39780__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__39781 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__39781,(0),null);
var method = cljs.core.nth.call(null,vec__39781,(1),null);
var file = cljs.core.nth.call(null,vec__39781,(2),null);
var line = cljs.core.nth.call(null,vec__39781,(3),null);
var G__39784 = top_data;
var G__39784__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__39784,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__39784);
var G__39784__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__39784__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__39784__$1);
var G__39784__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.call(null,G__39784__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__39784__$2);
var G__39784__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__39784__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__39784__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__39784__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__39784__$4;
}

break;
case "execution":
var vec__39785 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__39785,(0),null);
var method = cljs.core.nth.call(null,vec__39785,(1),null);
var file = cljs.core.nth.call(null,vec__39785,(2),null);
var line = cljs.core.nth.call(null,vec__39785,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__39767_SHARP_){
var or__4126__auto__ = (p1__39767_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__39767_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__39788 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__39788__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__39788,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__39788);
var G__39788__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__39788__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__39788__$1);
var G__39788__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
}
})())?cljs.core.assoc.call(null,G__39788__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__39788__$2);
var G__39788__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__39788__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__39788__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__39788__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__39788__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39776__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__39792){
var map__39793 = p__39792;
var map__39793__$1 = (((((!((map__39793 == null))))?(((((map__39793.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39793.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39793):map__39793);
var triage_data = map__39793__$1;
var phase = cljs.core.get.call(null,map__39793__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__39793__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__39793__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__39793__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__39793__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__39793__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__39793__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__39793__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__39795 = phase;
var G__39795__$1 = (((G__39795 instanceof cljs.core.Keyword))?G__39795.fqn:null);
switch (G__39795__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__39796_39805 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__39797_39806 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__39798_39807 = true;
var _STAR_print_fn_STAR__temp_val__39799_39808 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__39798_39807);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__39799_39808);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__39790_SHARP_){
return cljs.core.dissoc.call(null,p1__39790_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__39797_39806);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__39796_39805);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__39800_39809 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__39801_39810 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__39802_39811 = true;
var _STAR_print_fn_STAR__temp_val__39803_39812 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__39802_39811);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__39803_39812);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__39791_SHARP_){
return cljs.core.dissoc.call(null,p1__39791_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__39801_39810);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__39800_39809);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39795__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map?rel=1630010088286
