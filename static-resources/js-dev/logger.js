goog.provide('logger');
goog.require('cljs.core');
goog.require('goog.debug');
goog.require('goog.debug.DivConsole');
goog.require('goog.debug.Logger');
goog.require('goog.debug.LogManager');
goog.require('goog.debug.Logger.Level');
goog.require('goog.dom');
logger.info = (function info(category,msg){
var logger__2006 = goog.debug.Logger.getLogger.call(null,cljs.core.name.call(null,category));

return logger__2006.info(msg);
});
logger.warn = (function warn(category,msg){
var logger__2007 = goog.debug.Logger.getLogger.call(null,cljs.core.name.call(null,category));

return logger__2007.warning(msg);
});
logger.init = (function init(id){
var win__2008 = (new goog.debug.DivConsole(goog.dom.getElement.call(null,id)));

goog.debug.LogManager.getRoot.call(null).setLevel(goog.debug.Logger.Level.ALL);
return win__2008.setCapturing(true);
});
