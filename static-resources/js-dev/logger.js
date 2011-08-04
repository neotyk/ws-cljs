goog.provide('logger');
goog.require('cljs.core');
goog.require('goog.debug');
goog.require('goog.debug.DivConsole');
goog.require('goog.debug.Logger');
goog.require('goog.debug.LogManager');
goog.require('goog.debug.Logger.Level');
goog.require('goog.dom');
logger.info = (function info(category,msg){
var logger__1952 = goog.debug.Logger.getLogger.call(null,cljs.core.name.call(null,category));

return logger__1952.info(msg);
});
logger.warn = (function warn(category,msg){
var logger__1953 = goog.debug.Logger.getLogger.call(null,cljs.core.name.call(null,category));

return logger__1953.warning(msg);
});
logger.debug = (function debug(categoty,msg){
var logger__1954 = goog.debug.Logger.getLogger.call(null,cljs.core.name.call(null,categoty));

return logger__1954.fine(msg);
});
logger.init = (function init(id){
var win__1955 = (new goog.debug.DivConsole(goog.dom.getElement.call(null,id)));

goog.debug.LogManager.getRoot.call(null).setLevel(goog.debug.Logger.Level.ALL);
return win__1955.setCapturing(true);
});
