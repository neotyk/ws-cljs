goog.provide('client');
goog.require('cljs.core');
goog.require('websocket');
goog.require('goog.events');
goog.require('goog.events.EventHandler');
goog.require('cljs.reader');
goog.require('goog.dom');
goog.require('clojure.string');
goog.require('state');
goog.require('logger');
goog.require('goog.dom.classes');
goog.require('goog.events.EventType');
goog.require('goog.ui.LabelInput');
goog.require('goog.ui.AnimatedZippy');
goog.require('goog.ui.Tooltip');
/**
* Redispalys users list.
*/
client.refresh_users = (function() {
var refresh_users = null;
var refresh_users__1939 = (function (){
return refresh_users.call(null,state.get_users.call(null),state.nick.call(null));
});
var refresh_users__1940 = (function (users,me){
var participants_el__1934 = goog.dom.getElement.call(null,"participants");

goog.dom.removeChildren.call(null,participants_el__1934);
var G__1935__1936 = cljs.core.seq.call(null,cljs.core.sort.call(null,users));

while(true){
if(cljs.core.truth_(G__1935__1936))
{var user__1937 = cljs.core.first.call(null,G__1935__1936);

var user_el__1938 = goog.dom.createDom.call(null,"li");

goog.dom.classes.set.call(null,user_el__1938,"nick");
if(cljs.core.truth_(cljs.core._EQ_.call(null,user__1937,me)))
{goog.dom.classes.add.call(null,user_el__1938,"me");
} else
{}
goog.dom.setTextContent.call(null,user_el__1938,cljs.core.name.call(null,user__1937));
goog.dom.appendChild.call(null,participants_el__1934,user_el__1938);
{
var G__1942 = cljs.core.next.call(null,G__1935__1936);
G__1935__1936 = G__1942;
continue;
}
} else
{return null;
}
break;
}
});
refresh_users = function(users,me){
switch(arguments.length){
case  0 :
return refresh_users__1939.call(this);
case  2 :
return refresh_users__1940.call(this,users,me);
}
throw('Invalid arity: ' + arguments.length);
};
return refresh_users;
})()
;
client.new_nickname = (function new_nickname(body){
var parts__1943 = clojure.string.split.call(null,body,/ /);

if(cljs.core.truth_(cljs.core._EQ_.call(null,2,cljs.core.count.call(null,parts__1943))))
{var vec__1944__1945 = parts__1943;
var old__1946 = cljs.core.nth.call(null,vec__1944__1945,0,null);
var new$__1947 = cljs.core.nth.call(null,vec__1944__1945,1,null);

if(cljs.core.truth_(cljs.core._EQ_.call(null,old__1946,state.nick.call(null))))
{state.chnick_BANG_.call(null,new$__1947);
} else
{state.mv_user_BANG_.call(null,old__1946,new$__1947);
}
return client.refresh_users.call(null);
} else
{return state.chnick_BANG_.call(null,body);
}
});
client.new_message = (function new_message(msg){
var msgs_container__1948 = goog.dom.getElement.call(null,"messages");
var new_msg__1949 = goog.dom.createElement.call(null,"li");

goog.dom.setTextContent.call(null,new_msg__1949,msg);
return goog.dom.appendChild.call(null,msgs_container__1948,new_msg__1949);
});
client.new_joiner = (function new_joiner(nick){
state.add_user_BANG_.call(null,nick);
client.new_message.call(null,cljs.core.str.call(null,nick," joined"));
return client.refresh_users.call(null);
});
client.new_leaver = (function new_leaver(nick){
state.rm_user_BANG_.call(null,nick);
client.new_message.call(null,cljs.core.str.call(null,nick," left"));
return client.refresh_users.call(null);
});
client.new_count = (function new_count(nr){
return client.new_message.call(null,cljs.core.str.call(null,"#",nr," connected"));
});
/**
* Updates participants list.
*/
client.users_list = (function users_list(users_str){
var temp__3726__auto____1950 = cljs.core.into.call(null,cljs.core.set([]),cljs.core.map.call(null,cljs.core.name,cljs.reader.read_string.call(null,users_str)));

if(cljs.core.truth_(temp__3726__auto____1950))
{var users__1951 = temp__3726__auto____1950;

state.set_users_BANG_.call(null,users__1951);
return client.refresh_users.call(null,users__1951,state.nick.call(null));
} else
{return null;
}
});
client.websocket_opened = (function websocket_opened(event){
return logger.info.call(null,"websocket",cljs.core.str.call(null,"WebSocket opened: ",event));
});
client.websocket_message = (function websocket_message(cmd,body){
if(cljs.core.truth_(cljs.core._EQ_.call(null,cmd,"nick")))
{client.new_nickname.call(null,body);
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cmd,"msg")))
{client.new_message.call(null,body);
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cmd,"joined")))
{client.new_joiner.call(null,body);
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cmd,"left")))
{client.new_leaver.call(null,body);
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cmd,"count")))
{client.new_count.call(null,body);
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cmd,"users")))
{client.users_list.call(null,body);
} else
{}
}
}
}
}
}
return logger.debug.call(null,"websocket",cljs.core.str.call(null,cmd,":",body,": DONE"));
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
var e__1952 = event.target;
var msg__1953 = e__1952.value;

var temp__3723__auto____1954 = client.extract_command.call(null,msg__1953);

if(cljs.core.truth_(temp__3723__auto____1954))
{var cmd__1955 = temp__3723__auto____1954;

cljs.core.apply.call(null,websocket.emit_BANG_,soc,cmd__1955);
} else
{websocket.emit_BANG_.call(null,soc,"msg",msg__1953);
}
return e__1952.value = "";
});
});
client.init_controls = (function init_controls(handler){
var input__1956 = goog.dom.getElement.call(null,"msg");

(new goog.ui.LabelInput()).decorate(input__1956);
(new goog.ui.Tooltip(input__1956,input__1956.getAttribute("label")));
logger.info.call(null,"client",cljs.core.str.call(null,"Installing handler on ",input__1956));
goog.events.listen.call(null,input__1956,goog.events.EventType.CHANGE,handler);
input__1956.focus(true);
return (new goog.ui.AnimatedZippy("log-h","log",false));
});
client.disable_controls = (function disable_controls(){
var input__1957 = goog.dom.getElement.call(null,"msg");

input__1957.disabled = true;
return input__1957.hidden = true;
});
client.install_shutdown_hook = (function install_shutdown_hook(f){
var body__1958 = document.body;

logger.info.call(null,"client","Installing unload hook.");
return body__1958.onunload = f;
});
client.init = (function init(){
logger.init.call(null,"log");
logger.info.call(null,"client","Initilizing application.");
var temp__3723__auto____1959 = websocket.connect_BANG_.call(null,websocket.configure.call(null,websocket.create.call(null),client.websocket_opened,client.websocket_message,client.websocket_error,client.websocket_closed),'ws://' + document.location.host + '/socket');

if(cljs.core.truth_(temp__3723__auto____1959))
{var socket__1960 = temp__3723__auto____1959;

client.install_shutdown_hook.call(null,(function (){
return websocket.close_BANG_.call(null,socket__1960).call(null);
}));
return client.init_controls.call(null,client.create_message_change.call(null,socket__1960));
} else
{client.disable_controls.call(null);
return client.new_message.call(null,"No WebSocket supported, get a decent browser.");
}
});
client.init.call(null);
