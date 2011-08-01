goog.provide('websocket');
goog.require('cljs.core');
goog.require('logger');
goog.require('goog.events');
goog.require('goog.net.WebSocket');
goog.require('goog.net.WebSocket.EventType');
goog.require('goog.net.WebSocket.MessageEvent');
websocket.create = (function create(){
return (new goog.net.WebSocket());
});
/**
* Configures WebSocket
*/
websocket.configure = (function() {
var configure = null;
var configure__1955 = (function (soc,opened,message){
return configure.call(null,soc,opened,message,null);
});
var configure__1956 = (function (soc,opened,message,error){
return configure.call(null,soc,opened,message,error,null);
});
var configure__1957 = (function (soc,opened,message,error,closed){
var handler__1948 = (new goog.events.EventHandler());

handler__1948.listen(soc,goog.net.WebSocket.EventType.OPENED,opened);
handler__1948.listen(soc,goog.net.WebSocket.EventType.MESSAGE,(function (p1__1947_SHARP_){
var payload__1950 = p1__1947_SHARP_.message;
var vec__1949__1951 = cljs.core.re_matches.call(null,cljs.core.re_pattern.call(null,"/([^ ]+) (.*)"),payload__1950);
var ___1952 = cljs.core.nth.call(null,vec__1949__1951,0,null);
var cmd__1953 = cljs.core.nth.call(null,vec__1949__1951,1,null);
var body__1954 = cljs.core.nth.call(null,vec__1949__1951,2,null);

logger.debug.call(null,"websocket",cljs.core.str.call(null,"R: ",payload__1950));
return message.call(null,cmd__1953,body__1954);
}));
if(cljs.core.truth_(error))
{handler__1948.listen(soc,goog.net.WebSocket.EventType.ERROR,error);
} else
{}
if(cljs.core.truth_(closed))
{handler__1948.listen(soc,goog.net.WebSocket.EventType.CLOSED,closed);
} else
{}
return soc;
});
configure = function(soc,opened,message,error,closed){
switch(arguments.length){
case  3 :
return configure__1955.call(this,soc,opened,message);
case  4 :
return configure__1956.call(this,soc,opened,message,error);
case  5 :
return configure__1957.call(this,soc,opened,message,error,closed);
}
throw('Invalid arity: ' + arguments.length);
};
return configure;
})()
;
/**
* Connects WebSocket
*/
websocket.connect_BANG_ = (function connect_BANG_(socket,url){
try{socket.open(url);
return socket;
}catch (e1959){if(cljs.core.truth_(cljs.core.instance_QMARK_.call(null,goog.global['Error'],e1959)))
{var e__1960 = e1959;

return logger.warn.call(null,"websocket","No WebSocket supported, get a decent browser.");
} else
{if(cljs.core.truth_("﷐'else"))
{throw e1959;
} else
{return null;
}
}
}});
/**
* Closes WebSocket
*/
websocket.close_BANG_ = (function close_BANG_(socket){
return socket.close;
});
/**
* Sends a message to server, optionally with category.
*/
websocket.emit_BANG_ = (function() {
var emit_BANG_ = null;
var emit_BANG___1962 = (function (socket,msg){
return emit_BANG_.call(null,socket,"message",msg);
});
var emit_BANG___1963 = (function (socket,category,msg){
var packet__1961 = cljs.core.str.call(null,"/",category," ",msg);

logger.debug.call(null,"websocket",cljs.core.str.call(null,"T: ",packet__1961));
return socket.send(packet__1961);
});
emit_BANG_ = function(socket,category,msg){
switch(arguments.length){
case  2 :
return emit_BANG___1962.call(this,socket,category);
case  3 :
return emit_BANG___1963.call(this,socket,category,msg);
}
throw('Invalid arity: ' + arguments.length);
};
return emit_BANG_;
})()
;
