// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('fake_height_measures.storage');
goog.require('cljs.core');
goog.require('cljs.core.constants');
/**
 * Set `key' in browser's localStorage to `val`.
 */
fake_height_measures.storage.set_item_BANG_ = (function fake_height_measures$storage$set_item_BANG_(key,val){
return window.localStorage.setItem(key,val);
});
/**
 * Returns value of `key' from browser's localStorage.
 */
fake_height_measures.storage.get_item = (function fake_height_measures$storage$get_item(key){
return window.localStorage.getItem(key);
});
