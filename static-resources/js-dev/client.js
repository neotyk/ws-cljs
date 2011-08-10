goog.provide('client');
goog.require('cljs.core');
goog.require('websocket');
goog.require('goog.events');
goog.require('goog.events.EventHandler');
goog.require('goog.dom');
goog.require('localstorage');
goog.require('state');
goog.require('logger');
goog.require('goog.events.EventType');
goog.require('goog.ui.LabelInput');
goog.require('goog.ui.AnimatedZippy');
goog.require('goog.ui.Tooltip');
goog.require('commands');
client.websocket_opened = (function websocket_opened(soc){
return (function (event){
logger.info.call(null,"websocket",cljs.core.str.call(null,"WebSocket opened: ",event));
var temp__3726__auto____1941 = localstorage.get_BANG_.call(null,"nick");

if(cljs.core.truth_(temp__3726__auto____1941))
{var saved_nick__1942 = temp__3726__auto____1941;

return websocket.emit_BANG_.call(null,soc,"nick",saved_nick__1942);
} else
{return null;
}
});
});
client.websocket_message = (function websocket_message(cmd,body){
if(cljs.core.truth_(cljs.core._EQ_.call(null,cmd,"nick")))
{return commands.new_nickname.call(null,body);
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cmd,"msg")))
{return commands.new_message.call(null,body);
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cmd,"joined")))
{return commands.new_joiner.call(null,body);
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cmd,"left")))
{return commands.new_leaver.call(null,body);
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cmd,"count")))
{return commands.new_count.call(null,body);
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cmd,"users")))
{return commands.users_list.call(null,body);
} else
{return null;
}
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
return cljs.core.seq.call(null,cljs.core.drop.call(null,1,cljs.core.re_matches.call(null,/^\/([^ ]+)(?: )?(.*)$/,msg)));
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
var socket__1950 = websocket.create.call(null);

var temp__3723__auto____1951 = websocket.connect_BANG_.call(null,websocket.configure.call(null,socket__1950,client.websocket_opened.call(null,socket__1950),client.websocket_message,client.websocket_error,client.websocket_closed),'ws://' + document.location.host + '/socket');

if(cljs.core.truth_(temp__3723__auto____1951))
{var socket__1952 = temp__3723__auto____1951;

client.install_shutdown_hook.call(null,(function (){
return websocket.close_BANG_.call(null,socket__1952).call(null);
}));
return client.init_controls.call(null,client.create_message_change.call(null,socket__1952));
} else
{client.disable_controls.call(null);
return commands.new_message.call(null,"No WebSocket supported, get a decent browser.");
}
});
client.init.call(null);
