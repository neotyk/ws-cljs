goog.provide('logger');
goog.require('cljs.core');
goog.require('goog.debug');
goog.require('goog.debug.DivConsole');
goog.require('goog.debug.Logger');
goog.require('goog.debug.LogManager');
goog.require('goog.debug.Logger.Level');
goog.require('goog.dom');
logger.info = (function info(category,msg){
var logger__1943 = goog.debug.Logger.getLogger.call(null,cljs.core.name.call(null,category));

return logger__1943.info(msg);
});
logger.warn = (function warn(category,msg){
var logger__1944 = goog.debug.Logger.getLogger.call(null,cljs.core.name.call(null,category));

return logger__1944.warning(msg);
});
logger.debug = (function debug(categoty,msg){
var logger__1945 = goog.debug.Logger.getLogger.call(null,cljs.core.name.call(null,categoty));

return logger__1945.fine(msg);
});
logger.init = (function init(id){
var win__1946 = (new goog.debug.DivConsole(goog.dom.getElement.call(null,id)));

goog.debug.LogManager.getRoot.call(null).setLevel(goog.debug.Logger.Level.ALL);
return win__1946.setCapturing(true);
});
