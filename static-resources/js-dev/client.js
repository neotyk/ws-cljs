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
client.new_message = (function new_message(msg){
var msgs_container__1934 = goog.dom.getElement.call(null,"messages");
var new_msg__1935 = goog.dom.createElement.call(null,"li");

goog.dom.setTextContent.call(null,new_msg__1935,msg);
return goog.dom.appendChild.call(null,msgs_container__1934,new_msg__1935);
});
client.new_joiner = (function new_joiner(nick){
return client.new_message.call(null,cljs.core.str.call(null,nick," joined"));
});
client.new_leaver = (function new_leaver(nick){
return client.new_message.call(null,cljs.core.str.call(null,nick," left"));
});
client.new_count = (function new_count(nr){
return client.new_message.call(null,cljs.core.str.call(null,"#",nr," connected"));
});
client.websocket_opened = (function websocket_opened(event){
return logger.info.call(null,"websocket",cljs.core.str.call(null,"WebSocket opened: ",event));
});
client.websocket_message = (function websocket_message(cmd,body){
if(cljs.core.truth_(cljs.core._EQ_.call(null,cmd,"msg")))
{return client.new_message.call(null,body);
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cmd,"joined")))
{return client.new_joiner.call(null,body);
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cmd,"left")))
{return client.new_leaver.call(null,body);
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cmd,"count")))
{return client.new_count.call(null,body);
} else
{return null;
}
}
}
}
});
client.websocket_error = (function websocket_error(event){
return logger.info.call(null,"websocket",cljs.core.str.call(null,"WebSocket error: ",event));
});
client.websocket_closed = (function websocket_closed(event){
return logger.info.call(null,"websocket",cljs.core.str.call(null,"WebSocket closed: ",event));
});
client.create_message_change = (function create_message_change(soc){
return (function (event){
var e__1936 = event.target;
var msg__1937 = e__1936.value;

if(cljs.core.truth_("﷐'nick".call(null,cljs.core.deref.call(null,client.state))))
{websocket.emit_BANG_.call(null,soc,"msg",msg__1937);
} else
{cljs.core.swap_BANG_.call(null,client.state,cljs.core.assoc,"﷐'nick",msg__1937);
websocket.emit_BANG_.call(null,soc,"nick",msg__1937);
}
return e__1936.value = "";
});
});
client.init_controls = (function init_controls(handler){
var input__1938 = goog.dom.getElement.call(null,"msg");

(new goog.ui.LabelInput()).decorate(input__1938);
(new goog.ui.Tooltip(input__1938,input__1938.getAttribute("label")));
logger.info.call(null,"client",cljs.core.str.call(null,"Installing handler on ",input__1938));
goog.events.listen.call(null,input__1938,goog.events.EventType.CHANGE,handler);
input__1938.focus(true);
return (new goog.ui.AnimatedZippy("log-h","log",false));
});
client.disable_controls = (function disable_controls(){
var input__1939 = goog.dom.getElement.call(null,"msg");

input__1939.disabled = true;
return input__1939.hidden = true;
});
client.install_shutdown_hook = (function install_shutdown_hook(f){
var body__1940 = document.body;

logger.info.call(null,"client","Installing unload hook.");
return body__1940.onunload = f;
});
client.init = (function init(){
logger.init.call(null,"log");
logger.info.call(null,"client","Initilizing application.");
var temp__3723__auto____1941 = websocket.connect_BANG_.call(null,websocket.configure.call(null,websocket.create.call(null),client.websocket_opened,client.websocket_message,client.websocket_error,client.websocket_closed),'ws://' + document.location.host + '/socket');

if(cljs.core.truth_(temp__3723__auto____1941))
{var socket__1942 = temp__3723__auto____1941;

client.install_shutdown_hook.call(null,(function (){
return websocket.close_BANG_.call(null,socket__1942).call(null);
}));
return client.init_controls.call(null,client.create_message_change.call(null,socket__1942));
} else
{client.disable_controls.call(null);
return client.new_message.call(null,"No WebSocket supported, get a decent browser.");
}
});
client.init.call(null);
