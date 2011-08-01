goog.provide('client');
goog.require('cljs.core');
goog.require('websocket');
goog.require('goog.events');
goog.require('goog.events.EventHandler');
goog.require('goog.dom');
goog.require('logger');
goog.require('goog.events.EventType');
goog.require('goog.ui.LabelInput');
goog.require('goog.ui.AnimatedZippy');
goog.require('goog.ui.Tooltip');
client.init_state = cljs.core.ObjMap.fromObject(["﷐'nick","﷐'count","﷐'connected"],{"﷐'nick":null,"﷐'count":0,"﷐'connected":cljs.core.set([])});
client.state = cljs.core.atom.call(null,client.init_state);
client.add_message = (function add_message(msg){
var msgs_container__1996 = goog.dom.getElement.call(null,"messages");
var new_msg__1997 = goog.dom.createElement.call(null,"li");

goog.dom.setTextContent.call(null,new_msg__1997,msg);
return goog.dom.appendChild.call(null,msgs_container__1996,new_msg__1997);
});
client.websocket_opened = (function websocket_opened(event){
return logger.info.call(null,"websocket",cljs.core.str.call(null,"WebSocket opened: ",event));
});
client.websocket_message = (function websocket_message(event){
var payload__1998 = event.message;

logger.info.call(null,"websocket",cljs.core.str.call(null,"Message received: ",payload__1998));
return client.add_message.call(null,payload__1998);
});
client.websocket_error = (function websocket_error(event){
return logger.info.call(null,"websocket",cljs.core.str.call(null,"WebSocket error: ",event));
});
client.websocket_closed = (function websocket_closed(event){
return logger.info.call(null,"websocket",cljs.core.str.call(null,"WebSocket closed: ",event));
});
client.create_message_change = (function create_message_change(soc){
return (function (event){
var e__1999 = event.target;
var msg__2000 = e__1999.value;

if(cljs.core.truth_("﷐'nick".call(null,cljs.core.deref.call(null,client.state))))
{websocket.emit_BANG_.call(null,soc,"msg",msg__2000);
} else
{cljs.core.swap_BANG_.call(null,client.state,cljs.core.assoc,"﷐'nick",msg__2000);
websocket.emit_BANG_.call(null,soc,"nick",msg__2000);
}
return e__1999.value = '';
});
});
client.init_controls = (function init_controls(handler){
var input__2001 = goog.dom.getElement.call(null,"msg");

(new goog.ui.LabelInput()).decorate(input__2001);
(new goog.ui.Tooltip(input__2001,input__2001.getAttribute("label")));
logger.info.call(null,"client",cljs.core.str.call(null,"Installing handler on ",input__2001));
goog.events.listen.call(null,input__2001,goog.events.EventType.CHANGE,handler);
input__2001.focus(true);
return (new goog.ui.AnimatedZippy("log-h","log",false));
});
client.disable_controls = (function disable_controls(){
var input__2002 = goog.dom.getElement.call(null,"msg");

input__2002.disabled = true;
return input__2002.hidden = true;
});
client.install_shutdown_hook = (function install_shutdown_hook(f){
var body__2003 = document.body;

logger.info.call(null,"client","Installing shutdown hook.");
return body__2003.onunload = f;
});
client.init = (function init(){
logger.init.call(null,"log");
logger.info.call(null,"client","Initilizing application.");
var temp__3723__auto____2004 = websocket.connect_BANG_.call(null,websocket.configure.call(null,websocket.create.call(null),client.websocket_opened,client.websocket_message,client.websocket_error,client.websocket_closed),'ws://' + document.location.host + '/socket');

if(cljs.core.truth_(temp__3723__auto____2004))
{var socket__2005 = temp__3723__auto____2004;

client.install_shutdown_hook.call(null,(function (){
return websocket.close_BANG_.call(null,socket__2005).call(null);
}));
return client.init_controls.call(null,client.create_message_change.call(null,socket__2005));
} else
{client.disable_controls.call(null);
return client.add_message.call(null,"No WebSocket supported, get a decent browser.");
}
});
client.init.call(null);
