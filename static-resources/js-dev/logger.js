goog.provide('logger');
goog.require('cljs.core');
goog.require('goog.debug');
goog.require('goog.debug.DivConsole');
goog.require('goog.debug.Logger');
goog.require('goog.debug.LogManager');
goog.require('goog.debug.Logger.Level');
goog.require('goog.dom');
logger.info = (function info(category,msg){
var logger__1950 = goog.debug.Logger.getLogger.call(null,cljs.core.name.call(null,category));

return logger__1950.info(msg);
});
logger.warn = (function warn(category,msg){
var logger__1951 = goog.debug.Logger.getLogger.call(null,cljs.core.name.call(null,category));

return logger__1951.warning(msg);
});
logger.debug = (function debug(categoty,msg){
var logger__1952 = goog.debug.Logger.getLogger.call(null,cljs.core.name.call(null,categoty));

return logger__1952.fine(msg);
});
logger.init = (function init(id){
var win__1953 = (new goog.debug.DivConsole(goog.dom.getElement.call(null,id)));

goog.debug.LogManager.getRoot.call(null).setLevel(goog.debug.Logger.Level.ALL);
return win__1953.setCapturing(true);
});
