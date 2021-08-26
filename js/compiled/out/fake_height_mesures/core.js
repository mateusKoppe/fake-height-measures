// Compiled by ClojureScript 1.10.773 {}
goog.provide('fake_height_mesures.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.dom');
cljs.core.enable_console_print_BANG_.call(null);
if((typeof fake_height_mesures !== 'undefined') && (typeof fake_height_mesures.core !== 'undefined') && (typeof fake_height_mesures.core.selected_metric !== 'undefined')){
} else {
fake_height_mesures.core.selected_metric = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Feet",new cljs.core.Keyword(null,"cm","cm",540591536),30.48], null));
}
if((typeof fake_height_mesures !== 'undefined') && (typeof fake_height_mesures.core !== 'undefined') && (typeof fake_height_mesures.core.metrics !== 'undefined')){
} else {
fake_height_mesures.core.metrics = reagent.core.atom.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Meter",new cljs.core.Keyword(null,"cm","cm",540591536),(100)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Feet",new cljs.core.Keyword(null,"cm","cm",540591536),30.48], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Aligators",new cljs.core.Keyword(null,"cm","cm",540591536),(340)], null)], null));
}
if((typeof fake_height_mesures !== 'undefined') && (typeof fake_height_mesures.core !== 'undefined') && (typeof fake_height_mesures.core.metric_form_data !== 'undefined')){
} else {
fake_height_mesures.core.metric_form_data = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),null,new cljs.core.Keyword(null,"cm","cm",540591536),new cljs.core.Keyword(null,"nil","nil",99600501)], null));
}
fake_height_mesures.core.handle_new_metric_submit = (function fake_height_mesures$core$handle_new_metric_submit(e){
e.preventDefault();

cljs.core.reset_BANG_.call(null,fake_height_mesures.core.metrics,cljs.core.conj.call(null,cljs.core.deref.call(null,fake_height_mesures.core.metrics),cljs.core.deref.call(null,fake_height_mesures.core.metric_form_data)));

return cljs.core.reset_BANG_.call(null,fake_height_mesures.core.metric_form_data,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),null,new cljs.core.Keyword(null,"cm","cm",540591536),null], null));
});
fake_height_mesures.core.new_metric_form = (function fake_height_mesures$core$new_metric_form(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form.mt-6","form.mt-6",-539044805),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),fake_height_mesures.core.handle_new_metric_submit], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.field.has-addons.is-justify-content-center","div.field.has-addons.is-justify-content-center",-1325252982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.control>input.input","div.control>input.input",-1087345724),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Name",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,fake_height_mesures.core.metric_form_data)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__31436_SHARP_){
return cljs.core.reset_BANG_.call(null,fake_height_mesures.core.metric_form_data,cljs.core.assoc.call(null,cljs.core.deref.call(null,fake_height_mesures.core.metric_form_data),new cljs.core.Keyword(null,"name","name",1843675177),p1__31436_SHARP_.target.value));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.control>input.input","div.control>input.input",-1087345724),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"CM",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"cm","cm",540591536).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,fake_height_mesures.core.metric_form_data)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__31437_SHARP_){
return cljs.core.reset_BANG_.call(null,fake_height_mesures.core.metric_form_data,cljs.core.assoc.call(null,cljs.core.deref.call(null,fake_height_mesures.core.metric_form_data),new cljs.core.Keyword(null,"cm","cm",540591536),p1__31437_SHARP_.target.value));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.control>button.button.is-primary","div.control>button.button.is-primary",778953413),"Add"], null)], null)], null);
});
fake_height_mesures.core.metric_info = (function fake_height_mesures$core$metric_info(metric,cm){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.box>div.level>div.level-item.has-text-centered>div","div.box>div.level>div.level-item.has-text-centered>div",1249850158),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.heading","p.heading",938013724),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(metric)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.title","p.title",-1265013094),(cm / new cljs.core.Keyword(null,"cm","cm",540591536).cljs$core$IFn$_invoke$arity$1(metric)).toFixed((2))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.buttons.are-small","div.buttons.are-small",-731679285),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.button.is-rounded.is-outlined.mt-3","button.button.is-rounded.is-outlined.mt-3",1728961245),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_.call(null,fake_height_mesures.core.selected_metric,metric);
})], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fas.fa-eye","i.fas.fa-eye",592897323)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.button.is-rounded.is-outlined.is-danger.mt-3","button.button.is-rounded.is-outlined.is-danger.mt-3",945202557),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_.call(null,fake_height_mesures.core.metrics,cljs.core.filter.call(null,(function (m){
return cljs.core.not_EQ_.call(null,m,metric);
}),cljs.core.deref.call(null,fake_height_mesures.core.metrics)));
})], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fas.fa-trash","i.fas.fa-trash",25003308)], null)], null)], null)], null);
});
fake_height_mesures.core.size_comparator = (function fake_height_mesures$core$size_comparator(point_of_view,metrics){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mt-6","div.mt-6",1928257716),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.title.is-3","h2.title.is-3",1735557620),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(point_of_view))," height is:"].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.columns.is-flex-wrap-wrap","div.columns.is-flex-wrap-wrap",-1384481915),cljs.core.map.call(null,(function (metric){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.column.is-one-quarter","div.column.is-one-quarter",-204193934),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(metric)], null),fake_height_mesures.core.metric_info.call(null,metric,new cljs.core.Keyword(null,"cm","cm",540591536).cljs$core$IFn$_invoke$arity$1(point_of_view))], null);
}),metrics)], null)], null);
});
fake_height_mesures.core.app = (function fake_height_mesures$core$app(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container.is-max-desktop","div.container.is-max-desktop",-944363474),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.title.is-1.has-text-centered.mt-5","h1.title.is-1.has-text-centered.mt-5",2116545805),"Imperial System in a Nutshell"], null),fake_height_mesures.core.new_metric_form.call(null),fake_height_mesures.core.size_comparator.call(null,cljs.core.deref.call(null,fake_height_mesures.core.selected_metric),cljs.core.deref.call(null,fake_height_mesures.core.metrics))], null);
});
reagent.dom.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fake_height_mesures.core.app], null),document.getElementById("app"));
fake_height_mesures.core.on_js_reload = (function fake_height_mesures$core$on_js_reload(){
return null;
});

//# sourceMappingURL=core.js.map?rel=1630010079083
