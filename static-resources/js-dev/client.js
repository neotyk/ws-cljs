goog.provide('client');
goog.require('cljs.core');
goog.require('goog.debug.FancyWindow');
goog.require('goog.debug.DivConsole');
goog.require('goog.events');
goog.require('goog.events.EventHandler');
goog.require('goog.net.WebSocket.EventType');
goog.require('goog.dom');
goog.require('goog.net.WebSocket');
goog.require('goog.debug.Logger');
goog.require('goog.events.EventType');
goog.require('goog.ui.LabelInput');
goog.require('goog.net.WebSocket.MessageEvent');
goog.require('goog.debug');
client.initial_state = cljs.core.ObjMap.fromObject(["﷐'websocket","﷐'nickname"],{"﷐'websocket":null,"﷐'nickname":null});
client.state = cljs.core.atom.call(null,client.initial_state);
client.info = (function info(msg){
var logger__1996 = goog.debug.Logger.getLogger.call(null,"client");

return logger__1996.info(msg);
});
client.warn = (function warn(msg){
var logger__1997 = goog.debug.Logger.getLogger.call(null,"client");

return logger__1997.warning(msg);
});
client.init_logger = (function init_logger(){
var win__1998 = (new goog.debug.DivConsole(goog.dom.getElement.call(null,"log")));

return win__1998.setCapturing(true);
});
client.add_message = (function add_message(msg){
var msgs_container__1999 = goog.dom.getElement.call(null,"messages");
var new_msg__2000 = goog.dom.createElement.call(null,"li");

goog.dom.setTextContent.call(null,new_msg__2000,msg);
return goog.dom.appendChild.call(null,msgs_container__1999,new_msg__2000);
});
client.get_websocket = (function get_websocket(){
return "﷐'websocket".call(null,cljs.core.deref.call(null,client.state));
});
client.emit = (function emit(socket,msg){
client.info.call(null,cljs.core.str.call(null,"emit '",msg,"' on '",socket,"'."));
return socket.send(msg);
});
client.create_websocket_BANG_ = (function create_websocket_BANG_(){
var soc__2001 = (new goog.net.WebSocket());

cljs.core.swap_BANG_.call(null,client.state,cljs.core.assoc,"﷐'websocket",soc__2001);
return soc__2001;
});
/**
* Connects WebSocket
*/
client.connect_websocket_BANG_ = (function connect_websocket_BANG_(socket,url){
try{socket.open(url);
return socket;
}catch (e2002){if(cljs.core.truth_(cljs.core.instance_QMARK_.call(null,goog.global['Error'],e2002)))
{var e__2003 = e2002;

return client.warn.call(null,"No WebSocket supported, get a decent browser.");
} else
{if(cljs.core.truth_("﷐'else"))
{throw e2002;
} else
{return null;
}
}
}});
/**
* Closes WebSocket
*/
client.close_websocket_BANG_ = (function close_websocket_BANG_(socket){
socket.close;
return cljs.core.swap_BANG_.call(null,client.state,cljs.core.dissoc,"﷐'websocket");
});
/**
* Configures WebSocket
*/
client.configure_websocket = (function() {
var configure_websocket = null;
var configure_websocket__2005 = (function (websocket,opened,message){
return configure_websocket.call(null,websocket,opened,message,null);
});
var configure_websocket__2006 = (function (websocket,opened,message,error){
return configure_websocket.call(null,websocket,opened,message,error,null);
});
var configure_websocket__2007 = (function (websocket,opened,message,error,closed){
var handler__2004 = (new goog.events.EventHandler());

handler__2004.listen(websocket,goog.net.WebSocket.EventType.OPENED,opened);
handler__2004.listen(websocket,goog.net.WebSocket.EventType.MESSAGE,message);
if(cljs.core.truth_(error))
{handler__2004.listen(websocket,goog.net.WebSocket.EventType.ERROR,error);
} else
{}
if(cljs.core.truth_(closed))
{handler__2004.listen(websocket,goog.net.WebSocket.EventType.CLOSED,closed);
} else
{}
return websocket;
});
configure_websocket = function(websocket,opened,message,error,closed){
switch(arguments.length){
case  3 :
return configure_websocket__2005.call(this,websocket,opened,message);
case  4 :
return configure_websocket__2006.call(this,websocket,opened,message,error);
case  5 :
return configure_websocket__2007.call(this,websocket,opened,message,error,closed);
}
throw('Invalid arity: ' + arguments.length);
};
return configure_websocket;
})()
;
client.websocket_opened = (function websocket_opened(event){
return client.info.call(null,cljs.core.str.call(null,"WebSocket opened: ",event));
});
client.websocket_message = (function websocket_message(event){
var payload__2009 = event.message;

client.info.call(null,cljs.core.str.call(null,"Message received: ",payload__2009));
return client.add_message.call(null,payload__2009);
});
client.websocket_error = (function websocket_error(event){
return client.info.call(null,cljs.core.str.call(null,"WebSocket error: ",event));
});
client.websocket_closed = (function websocket_closed(event){
return client.info.call(null,cljs.core.str.call(null,"WebSocket closed: ",event));
});
client.create_message_change = (function create_message_change(websocket){
return (function (event){
var e__2010 = event.target;
var msg__2011 = e__2010.value;

client.emit.call(null,websocket,msg__2011);
return e__2010.value = '';
});
});
client.init_controls = (function init_controls(handler){
var input__2012 = goog.dom.getElement.call(null,"msg");

(new goog.ui.LabelInput()).decorate(input__2012);
client.info.call(null,cljs.core.str.call(null,"Installing handler on ",input__2012));
goog.events.listen.call(null,input__2012,goog.events.EventType.CHANGE,handler);
return input__2012.focus;
});
client.disable_controls = (function disable_controls(){
var input__2013 = goog.dom.getElement.call(null,"msg");

input__2013.disabled = true;
return input__2013.hidden = true;
});
client.unload = (function unload(){
return client.close_websocket_BANG_.call(null,client.get_websocket.call(null));
});
goog.exportSymbol('client.unload', client.unload);
client.init = (function init(){
client.init_logger.call(null);
client.info.call(null,"Initilizing application.");
var temp__3723__auto____2014 = client.connect_websocket_BANG_.call(null,client.configure_websocket.call(null,client.create_websocket_BANG_.call(null),client.websocket_opened,client.websocket_message,client.websocket_error,client.websocket_closed),'ws://' + document.location.host + '/socket');

if(cljs.core.truth_(temp__3723__auto____2014))
{var socket__2015 = temp__3723__auto____2014;

return client.init_controls.call(null,client.create_message_change.call(null,socket__2015));
} else
{client.disable_controls.call(null);
return client.add_message.call(null,"No WebSocket supported, get a decent browser.");
}
});
client.init.call(null);
