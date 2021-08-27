// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('fake_height_measures.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('reagent.dom');
goog.require('cljs.reader');
goog.require('fake_height_measures.storage');
cljs.core.enable_console_print_BANG_();
if((typeof fake_height_measures !== 'undefined') && (typeof fake_height_measures.core !== 'undefined') && (typeof fake_height_measures.core.initial_measure !== 'undefined')){
} else {
fake_height_measures.core.initial_measure = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Foot",cljs.core.cst$kw$cm,30.48], null);
}
if((typeof fake_height_measures !== 'undefined') && (typeof fake_height_measures.core !== 'undefined') && (typeof fake_height_measures.core.reference !== 'undefined')){
} else {
fake_height_measures.core.reference = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(fake_height_measures.core.initial_measure);
}
if((typeof fake_height_measures !== 'undefined') && (typeof fake_height_measures.core !== 'undefined') && (typeof fake_height_measures.core.measures !== 'undefined')){
} else {
fake_height_measures.core.measures = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [fake_height_measures.core.initial_measure,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Meter",cljs.core.cst$kw$cm,(100)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Aligator",cljs.core.cst$kw$cm,(340)], null)], null));
}
fake_height_measures.core.add_new_measure = (function fake_height_measures$core$add_new_measure(data){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(fake_height_measures.core.measures,(function (p1__35707_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__35707_SHARP_,data);
}));

return fake_height_measures.storage.set_item_BANG_("measures",cljs.core.deref(fake_height_measures.core.measures));
});
fake_height_measures.core.select_reference = (function fake_height_measures$core$select_reference(measure){
return cljs.core.reset_BANG_(fake_height_measures.core.reference,measure);
});
fake_height_measures.core.delete_measure = (function fake_height_measures$core$delete_measure(measure){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(fake_height_measures.core.measures,(function (p1__35708_SHARP_){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (m){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(m,measure);
}),p1__35708_SHARP_);
}));

return fake_height_measures.storage.set_item_BANG_("measures",cljs.core.deref(fake_height_measures.core.measures));
});
fake_height_measures.core.init_localstorage = (function fake_height_measures$core$init_localstorage(){
var persisted_measures = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(fake_height_measures.storage.get_item("measures"));
if(cljs.core.truth_(persisted_measures)){
return cljs.core.reset_BANG_(fake_height_measures.core.measures,persisted_measures);
} else {
return fake_height_measures.storage.set_item_BANG_("measures",cljs.core.deref(fake_height_measures.core.measures));
}
});
fake_height_measures.core.measure_form = (function fake_height_measures$core$measure_form(){
var data = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,null,cljs.core.cst$kw$cm,null], null));
return (function (p__35712){
var map__35713 = p__35712;
var map__35713__$1 = (((((!((map__35713 == null))))?(((((map__35713.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35713.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35713):map__35713);
var on_submit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35713__$1,cljs.core.cst$kw$on_DASH_submit);
var handle_submit = (function (p1__35709_SHARP_){
p1__35709_SHARP_.preventDefault();

var G__35715_35716 = cljs.core.deref(data);
(on_submit.cljs$core$IFn$_invoke$arity$1 ? on_submit.cljs$core$IFn$_invoke$arity$1(G__35715_35716) : on_submit.call(null,G__35715_35716));

return cljs.core.reset_BANG_(data,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,null,cljs.core.cst$kw$cm,null], null));
});
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form$mt_DASH_6,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_submit,handle_submit], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$field$has_DASH_addons$is_DASH_justify_DASH_content_DASH_center,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$control_GT_input$input,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$placeholder,"Name",cljs.core.cst$kw$value,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(data)),cljs.core.cst$kw$on_DASH_change,(function (e){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(data,(function (p1__35710_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__35710_SHARP_,cljs.core.cst$kw$name,e.target.value);
}));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$control_GT_input$input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,"number",cljs.core.cst$kw$placeholder,"CM",cljs.core.cst$kw$value,cljs.core.cst$kw$cm.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(data)),cljs.core.cst$kw$on_DASH_change,(function (e){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(data,(function (p1__35711_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__35711_SHARP_,cljs.core.cst$kw$cm,e.target.value);
}));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$control_GT_button$button$is_DASH_primary,"Add"], null)], null)], null);
});
});
fake_height_measures.core.measure_card = (function fake_height_measures$core$measure_card(p__35717){
var map__35718 = p__35717;
var map__35718__$1 = (((((!((map__35718 == null))))?(((((map__35718.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35718.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35718):map__35718);
var measure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35718__$1,cljs.core.cst$kw$measure);
var reference = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35718__$1,cljs.core.cst$kw$reference);
var on_select = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35718__$1,cljs.core.cst$kw$on_DASH_select);
var on_delete = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35718__$1,cljs.core.cst$kw$on_DASH_delete);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$box_GT_div$level_GT_div$level_DASH_item$has_DASH_text_DASH_centered_GT_div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p$heading,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(measure)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p$title,(cljs.core.cst$kw$cm.cljs$core$IFn$_invoke$arity$1(reference) / cljs.core.cst$kw$cm.cljs$core$IFn$_invoke$arity$1(measure)).toFixed((2))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$buttons$are_DASH_small,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$button$is_DASH_rounded$is_DASH_outlined$mt_DASH_3,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (){
return (on_select.cljs$core$IFn$_invoke$arity$1 ? on_select.cljs$core$IFn$_invoke$arity$1(measure) : on_select.call(null,measure));
})], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fas$fa_DASH_eye], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$button$is_DASH_rounded$is_DASH_outlined$is_DASH_danger$mt_DASH_3,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (){
return (on_delete.cljs$core$IFn$_invoke$arity$1 ? on_delete.cljs$core$IFn$_invoke$arity$1(measure) : on_delete.call(null,measure));
})], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fas$fa_DASH_trash], null)], null)], null)], null);
});
fake_height_measures.core.size_comparator = (function fake_height_measures$core$size_comparator(p__35720){
var map__35721 = p__35720;
var map__35721__$1 = (((((!((map__35721 == null))))?(((((map__35721.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35721.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35721):map__35721);
var measures = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35721__$1,cljs.core.cst$kw$measures);
var on_delete_measure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35721__$1,cljs.core.cst$kw$on_DASH_delete_DASH_measure);
var on_select_measure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35721__$1,cljs.core.cst$kw$on_DASH_select_DASH_measure);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$mt_DASH_6,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2$title$is_DASH_3,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(fake_height_measures.core.reference)))," height is:"].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$columns$is_DASH_flex_DASH_wrap_DASH_wrap,cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (index,measure){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$column$is_DASH_one_DASH_quarter,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,index], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fake_height_measures.core.measure_card,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$measure,measure,cljs.core.cst$kw$reference,cljs.core.deref(fake_height_measures.core.reference),cljs.core.cst$kw$on_DASH_select,on_select_measure,cljs.core.cst$kw$on_DASH_delete,on_delete_measure], null)], null)], null);
}),measures))], null)], null);
});
fake_height_measures.core.app = (function fake_height_measures$core$app(){
fake_height_measures.core.init_localstorage();

var handle_new_measure = (function (p1__35723_SHARP_){
fake_height_measures.core.add_new_measure(p1__35723_SHARP_);

return fake_height_measures.core.select_reference(p1__35723_SHARP_);
});
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$container$is_DASH_max_DASH_desktop,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1$title$is_DASH_1$has_DASH_text_DASH_centered$mt_DASH_5,"Imperial System in a Nutshell"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fake_height_measures.core.measure_form,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_submit,handle_new_measure], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fake_height_measures.core.size_comparator,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$measures,cljs.core.deref(fake_height_measures.core.measures),cljs.core.cst$kw$on_DASH_delete_DASH_measure,fake_height_measures.core.delete_measure,cljs.core.cst$kw$on_DASH_select_DASH_measure,fake_height_measures.core.select_reference], null)], null)], null);
});
});
reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fake_height_measures.core.app], null),document.getElementById("app"));
fake_height_measures.core.on_js_reload = (function fake_height_measures$core$on_js_reload(){
return null;
});
