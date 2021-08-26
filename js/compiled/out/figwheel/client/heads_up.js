// Compiled by ClojureScript 1.10.773 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('cljs.core.async');
goog.require('goog.string');
goog.require('goog.dom.dataset');
goog.require('goog.object');
goog.require('goog.dom');
goog.require('cljs.pprint');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__4742__auto__ = [];
var len__4736__auto___39832 = arguments.length;
var i__4737__auto___39833 = (0);
while(true){
if((i__4737__auto___39833 < len__4736__auto___39832)){
args__4742__auto__.push((arguments[i__4737__auto___39833]));

var G__39834 = (i__4737__auto___39833 + (1));
i__4737__auto___39833 = G__39834;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__39824_39835 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__39825_39836 = null;
var count__39826_39837 = (0);
var i__39827_39838 = (0);
while(true){
if((i__39827_39838 < count__39826_39837)){
var k_39839 = cljs.core._nth.call(null,chunk__39825_39836,i__39827_39838);
e.setAttribute(cljs.core.name.call(null,k_39839),cljs.core.get.call(null,attrs,k_39839));


var G__39840 = seq__39824_39835;
var G__39841 = chunk__39825_39836;
var G__39842 = count__39826_39837;
var G__39843 = (i__39827_39838 + (1));
seq__39824_39835 = G__39840;
chunk__39825_39836 = G__39841;
count__39826_39837 = G__39842;
i__39827_39838 = G__39843;
continue;
} else {
var temp__5720__auto___39844 = cljs.core.seq.call(null,seq__39824_39835);
if(temp__5720__auto___39844){
var seq__39824_39845__$1 = temp__5720__auto___39844;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39824_39845__$1)){
var c__4556__auto___39846 = cljs.core.chunk_first.call(null,seq__39824_39845__$1);
var G__39847 = cljs.core.chunk_rest.call(null,seq__39824_39845__$1);
var G__39848 = c__4556__auto___39846;
var G__39849 = cljs.core.count.call(null,c__4556__auto___39846);
var G__39850 = (0);
seq__39824_39835 = G__39847;
chunk__39825_39836 = G__39848;
count__39826_39837 = G__39849;
i__39827_39838 = G__39850;
continue;
} else {
var k_39851 = cljs.core.first.call(null,seq__39824_39845__$1);
e.setAttribute(cljs.core.name.call(null,k_39851),cljs.core.get.call(null,attrs,k_39851));


var G__39852 = cljs.core.next.call(null,seq__39824_39845__$1);
var G__39853 = null;
var G__39854 = (0);
var G__39855 = (0);
seq__39824_39835 = G__39852;
chunk__39825_39836 = G__39853;
count__39826_39837 = G__39854;
i__39827_39838 = G__39855;
continue;
}
} else {
}
}
break;
}

var seq__39828_39856 = cljs.core.seq.call(null,children);
var chunk__39829_39857 = null;
var count__39830_39858 = (0);
var i__39831_39859 = (0);
while(true){
if((i__39831_39859 < count__39830_39858)){
var ch_39860 = cljs.core._nth.call(null,chunk__39829_39857,i__39831_39859);
e.appendChild(ch_39860);


var G__39861 = seq__39828_39856;
var G__39862 = chunk__39829_39857;
var G__39863 = count__39830_39858;
var G__39864 = (i__39831_39859 + (1));
seq__39828_39856 = G__39861;
chunk__39829_39857 = G__39862;
count__39830_39858 = G__39863;
i__39831_39859 = G__39864;
continue;
} else {
var temp__5720__auto___39865 = cljs.core.seq.call(null,seq__39828_39856);
if(temp__5720__auto___39865){
var seq__39828_39866__$1 = temp__5720__auto___39865;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39828_39866__$1)){
var c__4556__auto___39867 = cljs.core.chunk_first.call(null,seq__39828_39866__$1);
var G__39868 = cljs.core.chunk_rest.call(null,seq__39828_39866__$1);
var G__39869 = c__4556__auto___39867;
var G__39870 = cljs.core.count.call(null,c__4556__auto___39867);
var G__39871 = (0);
seq__39828_39856 = G__39868;
chunk__39829_39857 = G__39869;
count__39830_39858 = G__39870;
i__39831_39859 = G__39871;
continue;
} else {
var ch_39872 = cljs.core.first.call(null,seq__39828_39866__$1);
e.appendChild(ch_39872);


var G__39873 = cljs.core.next.call(null,seq__39828_39866__$1);
var G__39874 = null;
var G__39875 = (0);
var G__39876 = (0);
seq__39828_39856 = G__39873;
chunk__39829_39857 = G__39874;
count__39830_39858 = G__39875;
i__39831_39859 = G__39876;
continue;
}
} else {
}
}
break;
}

return e;
}));

(figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq39821){
var G__39822 = cljs.core.first.call(null,seq39821);
var seq39821__$1 = cljs.core.next.call(null,seq39821);
var G__39823 = cljs.core.first.call(null,seq39821__$1);
var seq39821__$2 = cljs.core.next.call(null,seq39821__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39822,G__39823,seq39821__$2);
}));

if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.heads_up !== 'undefined') && (typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined')){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__4619__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),(function (dataset){
return dataset.figwheelEvent;
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine,new cljs.core.Keyword(null,"file-column","file-column",1543934780),dataset.fileColumn], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector(["#",cont_id].join('')))){
var el_39877 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),["-webkit-transition: all 0.2s ease-in-out;","-moz-transition: all 0.2s ease-in-out;","-o-transition: all 0.2s ease-in-out;","transition: all 0.2s ease-in-out;","font-size: 13px;","border-top: 1px solid #f5f5f5;","box-shadow: 0px 0px 1px #aaaaaa;","line-height: 18px;","color: #333;","font-family: monospace;","padding: 0px 10px 0px 70px;","position: fixed;","bottom: 0px;","left: 0px;","height: 0px;","opacity: 0.0;","box-sizing: border-box;","z-index: 10000;","text-align: left;"].join('')], null));
(el_39877.onclick = figwheel.client.heads_up.heads_up_onclick_handler);

(el_39877.innerHTML = figwheel.client.heads_up.cljs_logo_svg);

el_39877.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_39877);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__39878,st_map){
var map__39879 = p__39878;
var map__39879__$1 = (((((!((map__39879 == null))))?(((((map__39879.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39879.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39879):map__39879);
var container_el = cljs.core.get.call(null,map__39879__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,(function (p__39881){
var vec__39882 = p__39881;
var k = cljs.core.nth.call(null,vec__39882,(0),null);
var v = cljs.core.nth.call(null,vec__39882,(1),null);
return goog.object.set(container_el.style,cljs.core.name.call(null,k),v);
}),st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__39885,dom_str){
var map__39886 = p__39885;
var map__39886__$1 = (((((!((map__39886 == null))))?(((((map__39886.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39886.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39886):map__39886);
var c = map__39886__$1;
var content_area_el = cljs.core.get.call(null,map__39886__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return (content_area_el.innerHTML = dom_str);
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__39888){
var map__39889 = p__39888;
var map__39889__$1 = (((((!((map__39889 == null))))?(((((map__39889.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39889.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39889):map__39889);
var content_area_el = cljs.core.get.call(null,map__39889__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return ["<a style=\"","float: right;","font-size: 18px;","text-decoration: none;","text-align: right;","width: 30px;","height: 30px;","color: rgba(84,84,84, 0.5);","\" href=\"#\"  data-figwheel-event=\"close-heads-up\">","x","</a>"].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__36027__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__36028__auto__ = (function (){var switch__35932__auto__ = (function (state_39906){
var state_val_39907 = (state_39906[(1)]);
if((state_val_39907 === (1))){
var inst_39891 = (state_39906[(7)]);
var inst_39891__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_39892 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_39893 = ["10px","10px","100%","68px","1.0"];
var inst_39894 = cljs.core.PersistentHashMap.fromArrays(inst_39892,inst_39893);
var inst_39895 = cljs.core.merge.call(null,inst_39894,style);
var inst_39896 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_39891__$1,inst_39895);
var inst_39897 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_39891__$1,msg);
var inst_39898 = cljs.core.async.timeout.call(null,(300));
var state_39906__$1 = (function (){var statearr_39908 = state_39906;
(statearr_39908[(7)] = inst_39891__$1);

(statearr_39908[(8)] = inst_39897);

(statearr_39908[(9)] = inst_39896);

return statearr_39908;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39906__$1,(2),inst_39898);
} else {
if((state_val_39907 === (2))){
var inst_39891 = (state_39906[(7)]);
var inst_39900 = (state_39906[(2)]);
var inst_39901 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_39902 = ["auto"];
var inst_39903 = cljs.core.PersistentHashMap.fromArrays(inst_39901,inst_39902);
var inst_39904 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_39891,inst_39903);
var state_39906__$1 = (function (){var statearr_39909 = state_39906;
(statearr_39909[(10)] = inst_39900);

return statearr_39909;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39906__$1,inst_39904);
} else {
return null;
}
}
});
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__35933__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__35933__auto____0 = (function (){
var statearr_39910 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_39910[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__35933__auto__);

(statearr_39910[(1)] = (1));

return statearr_39910;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__35933__auto____1 = (function (state_39906){
while(true){
var ret_value__35934__auto__ = (function (){try{while(true){
var result__35935__auto__ = switch__35932__auto__.call(null,state_39906);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35935__auto__;
}
break;
}
}catch (e39911){if((e39911 instanceof Object)){
var ex__35936__auto__ = e39911;
var statearr_39912_39914 = state_39906;
(statearr_39912_39914[(5)] = ex__35936__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39906);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39911;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39915 = state_39906;
state_39906 = G__39915;
continue;
} else {
return ret_value__35934__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__35933__auto__ = function(state_39906){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__35933__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__35933__auto____1.call(this,state_39906);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__35933__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__35933__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__35933__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__35933__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__35933__auto__;
})()
})();
var state__36029__auto__ = (function (){var statearr_39913 = f__36028__auto__.call(null);
(statearr_39913[(6)] = c__36027__auto__);

return statearr_39913;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36029__auto__);
}));

return c__36027__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(var_args){
var G__39917 = arguments.length;
switch (G__39917) {
case 1:
return figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$1 = (function (s){
return figwheel.client.heads_up.heading.call(null,s,"");
}));

(figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$2 = (function (s,sub_head){
return ["<div style=\"","font-size: 26px;","line-height: 26px;","margin-bottom: 2px;","padding-top: 1px;","\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)," <span style=\"","display: inline-block;","font-size: 13px;","\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sub_head),"</span></div>"].join('');
}));

(figwheel.client.heads_up.heading.cljs$lang$maxFixedArity = 2);

figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,column_number,msg){
return ["<div style=\"cursor: pointer;\" data-figwheel-event=\"file-selected\" data-file-name=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_name),"\" data-file-line=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_number),"\" data-file-column=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_number),"\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg),"</div>"].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg,p__39919){
var map__39920 = p__39919;
var map__39920__$1 = (((((!((map__39920 == null))))?(((((map__39920.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39920.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39920):map__39920);
var file = cljs.core.get.call(null,map__39920__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__39920__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__39920__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var msg__$1 = goog.string.htmlEscape(msg);
if(cljs.core.truth_((function (){var or__4126__auto__ = file;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})())){
return figwheel.client.heads_up.file_selector_div.call(null,file,line,column,msg__$1);
} else {
return ["<div>",msg__$1,"</div>"].join('');
}
});
figwheel.client.heads_up.escape = (function figwheel$client$heads_up$escape(x){
return goog.string.htmlEscape(x);
});
figwheel.client.heads_up.pad_line_number = (function figwheel$client$heads_up$pad_line_number(n,line_number){
var len = cljs.core.count.call(null,cljs.core.fnil.call(null,cljs.core.str,"").call(null,line_number));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((len < n))?cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(n - len)," ")):"")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_number)].join('');
});
figwheel.client.heads_up.inline_error_line = (function figwheel$client$heads_up$inline_error_line(style,line_number,line){
return ["<span style='",cljs.core.str.cljs$core$IFn$_invoke$arity$1(style),"'>","<span style='color: #757575;'>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_number),"  </span>",figwheel.client.heads_up.escape.call(null,line),"</span>"].join('');
});
figwheel.client.heads_up.format_inline_error_line = (function figwheel$client$heads_up$format_inline_error_line(p__39922){
var vec__39923 = p__39922;
var typ = cljs.core.nth.call(null,vec__39923,(0),null);
var line_number = cljs.core.nth.call(null,vec__39923,(1),null);
var line = cljs.core.nth.call(null,vec__39923,(2),null);
var pred__39926 = cljs.core._EQ_;
var expr__39927 = typ;
if(cljs.core.truth_(pred__39926.call(null,new cljs.core.Keyword(null,"code-line","code-line",-2138627853),expr__39927))){
return figwheel.client.heads_up.inline_error_line.call(null,"color: #999;",line_number,line);
} else {
if(cljs.core.truth_(pred__39926.call(null,new cljs.core.Keyword(null,"error-in-code","error-in-code",-1661931357),expr__39927))){
return figwheel.client.heads_up.inline_error_line.call(null,"color: #ccc; font-weight: bold;",line_number,line);
} else {
if(cljs.core.truth_(pred__39926.call(null,new cljs.core.Keyword(null,"error-message","error-message",1756021561),expr__39927))){
return figwheel.client.heads_up.inline_error_line.call(null,"color: #D07D7D;",line_number,line);
} else {
return figwheel.client.heads_up.inline_error_line.call(null,"color: #666;",line_number,line);
}
}
}
});
figwheel.client.heads_up.pad_line_numbers = (function figwheel$client$heads_up$pad_line_numbers(inline_error){
var max_line_number_length = ((cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.call(null,cljs.core.max,cljs.core.map.call(null,cljs.core.second,inline_error)))).length);
return cljs.core.map.call(null,(function (p1__39929_SHARP_){
return cljs.core.update_in.call(null,p1__39929_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null),cljs.core.partial.call(null,figwheel.client.heads_up.pad_line_number,max_line_number_length));
}),inline_error);
});
figwheel.client.heads_up.format_inline_error = (function figwheel$client$heads_up$format_inline_error(inline_error){
var lines = cljs.core.map.call(null,figwheel.client.heads_up.format_inline_error_line,figwheel.client.heads_up.pad_line_numbers.call(null,inline_error));
return ["<pre style='whitespace:pre; overflow-x: scroll; display:block; font-family:monospace; font-size:0.8em; border-radius: 3px;"," line-height: 1.1em; padding: 10px; background-color: rgb(24,26,38); margin-right: 5px'>",clojure.string.join.call(null,"\n",lines),"</pre>"].join('');
});
figwheel.client.heads_up.flatten_exception = (function figwheel$client$heads_up$flatten_exception(p1__39930_SHARP_){
return cljs.core.take_while.call(null,cljs.core.some_QMARK_,cljs.core.iterate.call(null,new cljs.core.Keyword(null,"cause","cause",231901252),p1__39930_SHARP_));
});
figwheel.client.heads_up.exception__GT_display_data = (function figwheel$client$heads_up$exception__GT_display_data(p__39933){
var map__39934 = p__39933;
var map__39934__$1 = (((((!((map__39934 == null))))?(((((map__39934.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39934.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39934):map__39934);
var exception = map__39934__$1;
var message = cljs.core.get.call(null,map__39934__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var failed_loading_clj_file = cljs.core.get.call(null,map__39934__$1,new cljs.core.Keyword(null,"failed-loading-clj-file","failed-loading-clj-file",-1682536481));
var reader_exception = cljs.core.get.call(null,map__39934__$1,new cljs.core.Keyword(null,"reader-exception","reader-exception",-1938323098));
var file = cljs.core.get.call(null,map__39934__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var column = cljs.core.get.call(null,map__39934__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var failed_compiling = cljs.core.get.call(null,map__39934__$1,new cljs.core.Keyword(null,"failed-compiling","failed-compiling",1768639503));
var error_inline = cljs.core.get.call(null,map__39934__$1,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185));
var line = cljs.core.get.call(null,map__39934__$1,new cljs.core.Keyword(null,"line","line",212345235));
var class$ = cljs.core.get.call(null,map__39934__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var analysis_exception = cljs.core.get.call(null,map__39934__$1,new cljs.core.Keyword(null,"analysis-exception","analysis-exception",591623285));
var display_ex_data = cljs.core.get.call(null,map__39934__$1,new cljs.core.Keyword(null,"display-ex-data","display-ex-data",-1611558730));
var last_message = (cljs.core.truth_((function (){var and__4115__auto__ = file;
if(cljs.core.truth_(and__4115__auto__)){
return line;
} else {
return and__4115__auto__;
}
})())?["Please see line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)," of file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):(cljs.core.truth_(file)?["Please see ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):null
));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"head","head",-771383919),(cljs.core.truth_(failed_loading_clj_file)?"Couldn't load Clojure file":(cljs.core.truth_(analysis_exception)?"Could not Analyze":(cljs.core.truth_(reader_exception)?"Could not Read":(cljs.core.truth_(failed_compiling)?"Could not Compile":"Compile Exception"
)))),new cljs.core.Keyword(null,"sub-head","sub-head",1930649117),file,new cljs.core.Keyword(null,"messages","messages",345434482),cljs.core.concat.call(null,cljs.core.map.call(null,(function (p1__39931_SHARP_){
return ["<div>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__39931_SHARP_),"</div>"].join('');
}),(cljs.core.truth_(message)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [[(cljs.core.truth_(class$)?[figwheel.client.heads_up.escape.call(null,class$),": "].join(''):""),"<span style=\"font-weight:bold;\">",figwheel.client.heads_up.escape.call(null,message),"</span>"].join(''),(cljs.core.truth_(display_ex_data)?["<pre style=\"white-space: pre-wrap\">",figwheel.client.utils.pprint_to_string.call(null,display_ex_data),"</pre>"].join(''):null),(((cljs.core.count.call(null,error_inline) > (0)))?figwheel.client.heads_up.format_inline_error.call(null,error_inline):null)], null):cljs.core.map.call(null,(function (p1__39932_SHARP_){
return [figwheel.client.heads_up.escape.call(null,new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(p1__39932_SHARP_)),": ",figwheel.client.heads_up.escape.call(null,new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(p1__39932_SHARP_))].join('');
}),figwheel.client.heads_up.flatten_exception.call(null,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(exception))))),(cljs.core.truth_(last_message)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["<div style=\"color: #AD4F4F; padding-top: 3px;\">",figwheel.client.heads_up.escape.call(null,last_message),"</div>"].join('')], null):null)),new cljs.core.Keyword(null,"file","file",-1269645878),file,new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null);
});
figwheel.client.heads_up.auto_notify_source_file_line = (function figwheel$client$heads_up$auto_notify_source_file_line(p__39936){
var map__39937 = p__39936;
var map__39937__$1 = (((((!((map__39937 == null))))?(((((map__39937.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39937.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39937):map__39937);
var file = cljs.core.get.call(null,map__39937__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__39937__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__39937__$1,new cljs.core.Keyword(null,"column","column",2078222095));
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file),new cljs.core.Keyword(null,"file-line","file-line",-1228823138),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line),new cljs.core.Keyword(null,"file-column","file-column",1543934780),cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)], null));
});
figwheel.client.heads_up.display_exception = (function figwheel$client$heads_up$display_exception(exception_data){
var map__39940 = figwheel.client.heads_up.exception__GT_display_data.call(null,exception_data);
var map__39940__$1 = (((((!((map__39940 == null))))?(((((map__39940.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39940.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39940):map__39940);
var head = cljs.core.get.call(null,map__39940__$1,new cljs.core.Keyword(null,"head","head",-771383919));
var sub_head = cljs.core.get.call(null,map__39940__$1,new cljs.core.Keyword(null,"sub-head","sub-head",1930649117));
var messages = cljs.core.get.call(null,map__39940__$1,new cljs.core.Keyword(null,"messages","messages",345434482));
var last_message = cljs.core.get.call(null,map__39940__$1,new cljs.core.Keyword(null,"last-message","last-message",-2087778135));
var file = cljs.core.get.call(null,map__39940__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__39940__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__39940__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var msg = cljs.core.apply.call(null,cljs.core.str,messages);
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[figwheel.client.heads_up.close_link.call(null),figwheel.client.heads_up.heading.call(null,head,sub_head),figwheel.client.heads_up.file_selector_div.call(null,file,line,column,msg)].join(''));
});
figwheel.client.heads_up.warning_data__GT_display_data = (function figwheel$client$heads_up$warning_data__GT_display_data(p__39943){
var map__39944 = p__39943;
var map__39944__$1 = (((((!((map__39944 == null))))?(((((map__39944.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39944.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39944):map__39944);
var warning_data = map__39944__$1;
var file = cljs.core.get.call(null,map__39944__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__39944__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__39944__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var message = cljs.core.get.call(null,map__39944__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var error_inline = cljs.core.get.call(null,map__39944__$1,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185));
var last_message = (cljs.core.truth_((function (){var and__4115__auto__ = file;
if(cljs.core.truth_(and__4115__auto__)){
return line;
} else {
return and__4115__auto__;
}
})())?["Please see line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)," of file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):(cljs.core.truth_(file)?["Please see ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):null
));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"head","head",-771383919),"Compile Warning",new cljs.core.Keyword(null,"sub-head","sub-head",1930649117),file,new cljs.core.Keyword(null,"messages","messages",345434482),cljs.core.concat.call(null,cljs.core.map.call(null,(function (p1__39942_SHARP_){
return ["<div>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__39942_SHARP_),"</div>"].join('');
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(message)?["<span style=\"font-weight:bold;\">",figwheel.client.heads_up.escape.call(null,message),"</span>"].join(''):null),(((cljs.core.count.call(null,error_inline) > (0)))?figwheel.client.heads_up.format_inline_error.call(null,error_inline):null)], null)),(cljs.core.truth_(last_message)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["<div style=\"color: #AD4F4F; padding-top: 3px; margin-bottom: 10px;\">",figwheel.client.heads_up.escape.call(null,last_message),"</div>"].join('')], null):null)),new cljs.core.Keyword(null,"file","file",-1269645878),file,new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null);
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[figwheel.client.heads_up.close_link.call(null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.heading.call(null,header)),"<div>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg),"</div>"].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(warning_data){
var map__39946 = figwheel.client.heads_up.warning_data__GT_display_data.call(null,warning_data);
var map__39946__$1 = (((((!((map__39946 == null))))?(((((map__39946.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39946.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39946):map__39946);
var head = cljs.core.get.call(null,map__39946__$1,new cljs.core.Keyword(null,"head","head",-771383919));
var sub_head = cljs.core.get.call(null,map__39946__$1,new cljs.core.Keyword(null,"sub-head","sub-head",1930649117));
var messages = cljs.core.get.call(null,map__39946__$1,new cljs.core.Keyword(null,"messages","messages",345434482));
var last_message = cljs.core.get.call(null,map__39946__$1,new cljs.core.Keyword(null,"last-message","last-message",-2087778135));
var file = cljs.core.get.call(null,map__39946__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__39946__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__39946__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var msg = cljs.core.apply.call(null,cljs.core.str,messages);
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[figwheel.client.heads_up.close_link.call(null),figwheel.client.heads_up.heading.call(null,head,sub_head),figwheel.client.heads_up.file_selector_div.call(null,file,line,column,msg)].join(''));
});
figwheel.client.heads_up.format_warning_message = (function figwheel$client$heads_up$format_warning_message(p__39948){
var map__39949 = p__39948;
var map__39949__$1 = (((((!((map__39949 == null))))?(((((map__39949.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39949.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39949):map__39949);
var warning_data = map__39949__$1;
var message = cljs.core.get.call(null,map__39949__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var file = cljs.core.get.call(null,map__39949__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__39949__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__39949__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__39951 = message;
var G__39951__$1 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39951)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__39951);
var G__39951__$2 = (cljs.core.truth_((function (){var and__4115__auto__ = line;
if(cljs.core.truth_(and__4115__auto__)){
return column;
} else {
return and__4115__auto__;
}
})())?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39951__$1),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):G__39951__$1);
if(cljs.core.truth_(file)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39951__$2)," in file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join('');
} else {
return G__39951__$2;
}
});
figwheel.client.heads_up.append_warning_message = (function figwheel$client$heads_up$append_warning_message(p__39952){
var map__39953 = p__39952;
var map__39953__$1 = (((((!((map__39953 == null))))?(((((map__39953.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39953.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39953):map__39953);
var warning_data = map__39953__$1;
var message = cljs.core.get.call(null,map__39953__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var file = cljs.core.get.call(null,map__39953__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__39953__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__39953__$1,new cljs.core.Keyword(null,"column","column",2078222095));
if(cljs.core.truth_(message)){
var map__39955 = figwheel.client.heads_up.ensure_container.call(null);
var map__39955__$1 = (((((!((map__39955 == null))))?(((((map__39955.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39955.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39955):map__39955);
var content_area_el = cljs.core.get.call(null,map__39955__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = goog.dom.createElement("div");
var child_count = goog.dom.getChildren(content_area_el).length;
if((child_count < (6))){
(el.innerHTML = figwheel.client.heads_up.format_line.call(null,figwheel.client.heads_up.format_warning_message.call(null,warning_data),warning_data));

return goog.dom.append(content_area_el,el);
} else {
var temp__5720__auto__ = goog.dom.getLastElementChild(content_area_el);
if(cljs.core.truth_(temp__5720__auto__)){
var last_child = temp__5720__auto__;
var temp__5718__auto__ = goog.dom.dataset.get(last_child,"figwheel_count");
if(cljs.core.truth_(temp__5718__auto__)){
var message_count = temp__5718__auto__;
var message_count__$1 = (parseInt(message_count) + (1));
goog.dom.dataset.set(last_child,"figwheel_count",message_count__$1);

return (last_child.innerHTML = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(message_count__$1)," more warnings have not been displayed ..."].join(''));
} else {
return goog.dom.append(content_area_el,goog.dom.createDom("div",({"data-figwheel_count": (1), "style": "margin-top: 3px; font-weight: bold"}),"1 more warning that has not been displayed ..."));
}
} else {
return null;
}
}
} else {
return null;
}
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__36027__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__36028__auto__ = (function (){var switch__35932__auto__ = (function (state_39974){
var state_val_39975 = (state_39974[(1)]);
if((state_val_39975 === (1))){
var inst_39957 = (state_39974[(7)]);
var inst_39957__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_39958 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_39959 = ["0.0"];
var inst_39960 = cljs.core.PersistentHashMap.fromArrays(inst_39958,inst_39959);
var inst_39961 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_39957__$1,inst_39960);
var inst_39962 = cljs.core.async.timeout.call(null,(300));
var state_39974__$1 = (function (){var statearr_39976 = state_39974;
(statearr_39976[(8)] = inst_39961);

(statearr_39976[(7)] = inst_39957__$1);

return statearr_39976;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39974__$1,(2),inst_39962);
} else {
if((state_val_39975 === (2))){
var inst_39957 = (state_39974[(7)]);
var inst_39964 = (state_39974[(2)]);
var inst_39965 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_39966 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_39967 = cljs.core.PersistentHashMap.fromArrays(inst_39965,inst_39966);
var inst_39968 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_39957,inst_39967);
var inst_39969 = cljs.core.async.timeout.call(null,(200));
var state_39974__$1 = (function (){var statearr_39977 = state_39974;
(statearr_39977[(9)] = inst_39968);

(statearr_39977[(10)] = inst_39964);

return statearr_39977;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39974__$1,(3),inst_39969);
} else {
if((state_val_39975 === (3))){
var inst_39957 = (state_39974[(7)]);
var inst_39971 = (state_39974[(2)]);
var inst_39972 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_39957,"");
var state_39974__$1 = (function (){var statearr_39978 = state_39974;
(statearr_39978[(11)] = inst_39971);

return statearr_39978;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39974__$1,inst_39972);
} else {
return null;
}
}
}
});
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__35933__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__35933__auto____0 = (function (){
var statearr_39979 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39979[(0)] = figwheel$client$heads_up$clear_$_state_machine__35933__auto__);

(statearr_39979[(1)] = (1));

return statearr_39979;
});
var figwheel$client$heads_up$clear_$_state_machine__35933__auto____1 = (function (state_39974){
while(true){
var ret_value__35934__auto__ = (function (){try{while(true){
var result__35935__auto__ = switch__35932__auto__.call(null,state_39974);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35935__auto__;
}
break;
}
}catch (e39980){if((e39980 instanceof Object)){
var ex__35936__auto__ = e39980;
var statearr_39981_39983 = state_39974;
(statearr_39981_39983[(5)] = ex__35936__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39974);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39980;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39984 = state_39974;
state_39974 = G__39984;
continue;
} else {
return ret_value__35934__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__35933__auto__ = function(state_39974){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__35933__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__35933__auto____1.call(this,state_39974);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__35933__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__35933__auto____0;
figwheel$client$heads_up$clear_$_state_machine__35933__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__35933__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__35933__auto__;
})()
})();
var state__36029__auto__ = (function (){var statearr_39982 = f__36028__auto__.call(null);
(statearr_39982[(6)] = c__36027__auto__);

return statearr_39982;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36029__auto__);
}));

return c__36027__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__36027__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__36028__auto__ = (function (){var switch__35932__auto__ = (function (state_39995){
var state_val_39996 = (state_39995[(1)]);
if((state_val_39996 === (1))){
var inst_39985 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_39995__$1 = state_39995;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39995__$1,(2),inst_39985);
} else {
if((state_val_39996 === (2))){
var inst_39987 = (state_39995[(2)]);
var inst_39988 = cljs.core.async.timeout.call(null,(400));
var state_39995__$1 = (function (){var statearr_39997 = state_39995;
(statearr_39997[(7)] = inst_39987);

return statearr_39997;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39995__$1,(3),inst_39988);
} else {
if((state_val_39996 === (3))){
var inst_39990 = (state_39995[(2)]);
var inst_39991 = figwheel.client.heads_up.clear.call(null);
var state_39995__$1 = (function (){var statearr_39998 = state_39995;
(statearr_39998[(8)] = inst_39990);

return statearr_39998;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39995__$1,(4),inst_39991);
} else {
if((state_val_39996 === (4))){
var inst_39993 = (state_39995[(2)]);
var state_39995__$1 = state_39995;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39995__$1,inst_39993);
} else {
return null;
}
}
}
}
});
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__35933__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__35933__auto____0 = (function (){
var statearr_39999 = [null,null,null,null,null,null,null,null,null];
(statearr_39999[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__35933__auto__);

(statearr_39999[(1)] = (1));

return statearr_39999;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__35933__auto____1 = (function (state_39995){
while(true){
var ret_value__35934__auto__ = (function (){try{while(true){
var result__35935__auto__ = switch__35932__auto__.call(null,state_39995);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35935__auto__;
}
break;
}
}catch (e40000){if((e40000 instanceof Object)){
var ex__35936__auto__ = e40000;
var statearr_40001_40003 = state_39995;
(statearr_40001_40003[(5)] = ex__35936__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39995);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40000;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40004 = state_39995;
state_39995 = G__40004;
continue;
} else {
return ret_value__35934__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__35933__auto__ = function(state_39995){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__35933__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__35933__auto____1.call(this,state_39995);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__35933__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__35933__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__35933__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__35933__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__35933__auto__;
})()
})();
var state__36029__auto__ = (function (){var statearr_40002 = f__36028__auto__.call(null);
(statearr_40002[(6)] = c__36027__auto__);

return statearr_40002;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36029__auto__);
}));

return c__36027__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";
figwheel.client.heads_up.close_bad_compile_screen = (function figwheel$client$heads_up$close_bad_compile_screen(){
var temp__5720__auto__ = document.getElementById("figwheelFailScreen");
if(cljs.core.truth_(temp__5720__auto__)){
var el = temp__5720__auto__;
return goog.dom.removeNode(el);
} else {
return null;
}
});
figwheel.client.heads_up.bad_compile_screen = (function figwheel$client$heads_up$bad_compile_screen(){
var body = (goog.dom.getElementsByTagNameAndClass("body")[(0)]);
figwheel.client.heads_up.close_bad_compile_screen.call(null);

return goog.dom.append(body,goog.dom.createDom("div",({"id": "figwheelFailScreen", "style": ["background-color: rgba(24, 26, 38, 0.95);","position: absolute;","z-index: 9000;","width: 100vw;","height: 100vh;","top: 0px; left: 0px;","font-family: monospace"].join('')}),goog.dom.createDom("div",({"class": "message", "style": ["color: #FFF5DB;","width: 100vw;","margin: auto;","margin-top: 10px;","text-align: center; ","padding: 2px 0px;","font-size: 13px;","position: relative"].join('')}),goog.dom.createDom("a",({"onclick": (function (e){
e.preventDefault();

return figwheel.client.heads_up.close_bad_compile_screen.call(null);
}), "href": "javascript:", "style": "position: absolute; right: 10px; top: 10px; color: #666"}),"X"),goog.dom.createDom("h2",({"style": "color: #FFF5DB"}),"Figwheel Says: Your code didn't compile."),goog.dom.createDom("div",({"style": "font-size: 12px"}),goog.dom.createDom("p",({"style": "color: #D07D7D;"}),"Keep trying. This page will auto-refresh when your code compiles successfully.")))));
});

//# sourceMappingURL=heads_up.js.map?rel=1630010088592
