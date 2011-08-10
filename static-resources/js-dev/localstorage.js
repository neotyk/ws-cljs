goog.provide('localstorage');
goog.require('cljs.core');
goog.require('goog.storage.Storage');
goog.require('goog.storage.mechanism.HTML5LocalStorage');
localstorage.storage = (function storage(){
var mech__1941 = (new goog.storage.mechanism.HTML5LocalStorage());
var store__1942 = (new goog.storage.Storage(mech__1941));

return store__1942;
});
/**
* Gets value from local storage.
*/
localstorage.get_BANG_ = (function get_BANG_(key){
var store__1943 = localstorage.storage.call(null);

return store__1943.get(key);
});
/**
* Stores key value in local storage.
*/
localstorage.set_BANG_ = (function set_BANG_(key,val){
var store__1944 = localstorage.storage.call(null);

return store__1944.set(key,val);
});
