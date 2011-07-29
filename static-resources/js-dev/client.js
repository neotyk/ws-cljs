goog.provide('client');
goog.require('cljs.core');
goog.require('goog.debug.FancyWindow');
goog.require('goog.debug.DivConsole');
goog.require('goog.events');
goog.require('goog.net.WebSocket.MessageEvent');
goog.require('goog.events.EventHandler');
goog.require('goog.dom');
goog.require('goog.net.WebSocket');
goog.require('goog.debug.Logger');
goog.require('goog.events.EventType');
goog.require('goog.net.WebSocket.EventType');
goog.require('goog.debug');
client.ws_url = 'ws://' + document.location.host + '/socket';
client.initial_state = cljs.core.ObjMap.fromObject(["﷐'websocket","﷐'nickname"],{"﷐'websocket":null,"﷐'nickname":null});
client.state = cljs.core.atom.call(null,client.initial_state);
client.info = (function info(msg){
var logger__1961 = goog.debug.Logger.getLogger.call(null,"client");

return logger__1961.info(msg);
});
client.init_logger = (function init_logger(){
var win__1962 = (new goog.debug.DivConsole(goog.dom.getElement.call(null,"log")));

return win__1962.setCapturing(true);
});
client.add_message = (function add_message(msg){
var msgs_container__1963 = goog.dom.getElement.call(null,"messages");
var new_msg__1964 = goog.dom.createElement.call(null,"li");

goog.dom.setTextContent.call(null,new_msg__1964,msg);
return goog.dom.appendChild.call(null,msgs_container__1963,new_msg__1964);
});
client.get_websocket = (function get_websocket(){
return "﷐'websocket".call(null,cljs.core.deref.call(null,client.state));
});
client.emit = (function emit(socket,msg){
client.info.call(null,cljs.core.str.call(null,"emit '",msg,"' on '",socket,"'."));
return socket.send(msg);
});
client.create_web_socket_BANG_ = (function create_web_socket_BANG_(){
var soc__1965 = (new goog.net.WebSocket());

cljs.core.swap_BANG_.call(null,client.state,cljs.core.assoc,"﷐'websocket",soc__1965);
return soc__1965;
});
/**
* Connects WebSocket
*/
client.connect_web_socket_BANG_ = (function connect_web_socket_BANG_(socket){
socket.open(client.ws_url);
return socket;
});
/**
* Configures WebSocket
*/
client.configure_web_socket = (function() {
var configure_web_socket = null;
var configure_web_socket__1967 = (function (ws,opened,message){
return configure_web_socket.call(null,ws,opened,message,null);
});
var configure_web_socket__1968 = (function (ws,opened,message,error){
return configure_web_socket.call(null,ws,opened,message,error,null);
});
var configure_web_socket__1969 = (function (ws,opened,message,error,closed){
var handler__1966 = (new goog.events.EventHandler());

handler__1966.listen(ws,goog.net.WebSocket.EventType.OPENED,opened);
handler__1966.listen(ws,goog.net.WebSocket.EventType.MESSAGE,message);
if(cljs.core.truth_(error))
{handler__1966.listen(ws,goog.net.WebSocket.EventType.ERROR,error);
} else
{}
if(cljs.core.truth_(closed))
{return handler__1966.listen(ws,goog.net.WebSocket.EventType.CLOSED,closed);
} else
{return null;
}
});
configure_web_socket = function(ws,opened,message,error,closed){
switch(arguments.length){
case  3 :
return configure_web_socket__1967.call(this,ws,opened,message);
case  4 :
return configure_web_socket__1968.call(this,ws,opened,message,error);
case  5 :
return configure_web_socket__1969.call(this,ws,opened,message,error,closed);
}
throw('Invalid arity: ' + arguments.length);
};
return configure_web_socket;
})()
;
client.ws_opened_handler = (function ws_opened_handler(event){
return client.info.call(null,cljs.core.str.call(null,"WebSocket opened: ",event));
});
client.ws_message_handler = (function ws_message_handler(event){
var payload__1971 = event.message;

client.info.call(null,cljs.core.str.call(null,"Message received: ",payload__1971));
return client.add_message.call(null,payload__1971);
});
client.ws_error_handler = (function ws_error_handler(event){
return client.info.call(null,cljs.core.str.call(null,"WebSocket error: ",event));
});
client.ws_closed_handler = (function ws_closed_handler(event){
return client.info.call(null,cljs.core.str.call(null,"WebSocket closed: ",event));
});
client.create_message_change_handler = (function create_message_change_handler(ws){
return (function (event){
var e__1972 = event.target;
var msg__1973 = e__1972.value;

client.emit.call(null,ws,msg__1973);
return e__1972.value = '';
});
});
client.init_controls = (function init_controls(ws){
var input__1974 = goog.dom.getElement.call(null,"msg");
var handler__1975 = client.create_message_change_handler.call(null,ws);

client.info.call(null,cljs.core.str.call(null,"Installing handler on ",input__1974));
return goog.events.listen.call(null,input__1974,goog.events.EventType.CHANGE,handler__1975);
});
client.init = (function init(){
client.init_logger.call(null);
client.info.call(null,"Initilizing application.");
var socket__1976 = client.create_web_socket_BANG_.call(null);

client.configure_web_socket.call(null,socket__1976,client.ws_opened_handler,client.ws_message_handler,client.ws_error_handler,client.ws_closed_handler);
client.connect_web_socket_BANG_.call(null,socket__1976);
return client.init_controls.call(null,socket__1976);
});
client.init.call(null);
