goog.provide('client');
goog.require('cljs.core');
goog.require('websocket');
goog.require('goog.events');
goog.require('goog.events.EventHandler');
goog.require('goog.dom');
goog.require('clojure.string');
goog.require('logger');
goog.require('goog.events.EventType');
goog.require('goog.ui.LabelInput');
goog.require('goog.ui.AnimatedZippy');
goog.require('goog.ui.Tooltip');
client.init_state = cljs.core.ObjMap.fromObject(["﷐'nick","﷐'count","﷐'connected"],{"﷐'nick":null,"﷐'count":0,"﷐'connected":cljs.core.set([])});
client.state = cljs.core.atom.call(null,client.init_state);
/**
* Sets new nickname used by this client
*/
client.my_nick = (function my_nick(nick){
cljs.core.swap_BANG_.call(null,client.state,cljs.core.assoc,"﷐'nick",nick);
var temp__3726__auto____1934 = goog.dom.getElement.call(null,"nick");

if(cljs.core.truth_(temp__3726__auto____1934))
{var nick_el__1935 = temp__3726__auto____1934;

return nick_el__1935.textContent = nick;
} else
{return null;
}
});
client.new_nickname = (function new_nickname(body){
var parts__1936 = clojure.string.split.call(null,body,/ /);

if(cljs.core.truth_(cljs.core._EQ_.call(null,2,cljs.core.count.call(null,parts__1936))))
{var vec__1937__1938 = parts__1936;
var old__1939 = cljs.core.nth.call(null,vec__1937__1938,0,null);
var new$__1940 = cljs.core.nth.call(null,vec__1937__1938,1,null);

if(cljs.core.truth_(cljs.core._EQ_.call(null,old__1939,"﷐'nick".call(null,cljs.core.deref.call(null,client.state)))))
{return client.my_nick.call(null,new$__1940);
} else
{return logger.info.call(null,"TODO","Others nickname change to implement.");
}
} else
{return client.my_nick.call(null,body);
}
});
client.new_message = (function new_message(msg){
var msgs_container__1941 = goog.dom.getElement.call(null,"messages");
var new_msg__1942 = goog.dom.createElement.call(null,"li");

goog.dom.setTextContent.call(null,new_msg__1942,msg);
return goog.dom.appendChild.call(null,msgs_container__1941,new_msg__1942);
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
if(cljs.core.truth_(cljs.core._EQ_.call(null,cmd,"nick")))
{return client.new_nickname.call(null,body);
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cmd,"msg")))
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
}
});
client.websocket_error = (function websocket_error(event){
return logger.info.call(null,"websocket",cljs.core.str.call(null,"WebSocket error: ",event));
});
client.websocket_closed = (function websocket_closed(event){
return logger.info.call(null,"websocket",cljs.core.str.call(null,"WebSocket closed: ",event));
});
/**
* Extracts command and args from message, nil if not found
*/
client.extract_command = (function extract_command(msg){
return cljs.core.seq.call(null,cljs.core.drop.call(null,1,cljs.core.re_matches.call(null,/^\/([^ ]+) (.*)$/,msg)));
});
client.create_message_change = (function create_message_change(soc){
return (function (event){
var e__1943 = event.target;
var msg__1944 = e__1943.value;

var temp__3723__auto____1945 = client.extract_command.call(null,msg__1944);

if(cljs.core.truth_(temp__3723__auto____1945))
{var cmd__1946 = temp__3723__auto____1945;

cljs.core.apply.call(null,websocket.emit_BANG_,soc,cmd__1946);
} else
{websocket.emit_BANG_.call(null,soc,"msg",msg__1944);
}
return e__1943.value = "";
});
});
client.init_controls = (function init_controls(handler){
var input__1947 = goog.dom.getElement.call(null,"msg");

(new goog.ui.LabelInput()).decorate(input__1947);
(new goog.ui.Tooltip(input__1947,input__1947.getAttribute("label")));
logger.info.call(null,"client",cljs.core.str.call(null,"Installing handler on ",input__1947));
goog.events.listen.call(null,input__1947,goog.events.EventType.CHANGE,handler);
input__1947.focus(true);
return (new goog.ui.AnimatedZippy("log-h","log",false));
});
client.disable_controls = (function disable_controls(){
var input__1948 = goog.dom.getElement.call(null,"msg");

input__1948.disabled = true;
return input__1948.hidden = true;
});
client.install_shutdown_hook = (function install_shutdown_hook(f){
var body__1949 = document.body;

logger.info.call(null,"client","Installing unload hook.");
return body__1949.onunload = f;
});
client.init = (function init(){
logger.init.call(null,"log");
logger.info.call(null,"client","Initilizing application.");
var temp__3723__auto____1950 = websocket.connect_BANG_.call(null,websocket.configure.call(null,websocket.create.call(null),client.websocket_opened,client.websocket_message,client.websocket_error,client.websocket_closed),'ws://' + document.location.host + '/socket');

if(cljs.core.truth_(temp__3723__auto____1950))
{var socket__1951 = temp__3723__auto____1950;

client.install_shutdown_hook.call(null,(function (){
return websocket.close_BANG_.call(null,socket__1951).call(null);
}));
return client.init_controls.call(null,client.create_message_change.call(null,socket__1951));
} else
{client.disable_controls.call(null);
return client.new_message.call(null,"No WebSocket supported, get a decent browser.");
}
});
client.init.call(null);
