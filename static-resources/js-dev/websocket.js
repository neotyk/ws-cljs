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
var configure__1962 = (function (soc,opened,message){
return configure.call(null,soc,opened,message,null);
});
var configure__1963 = (function (soc,opened,message,error){
return configure.call(null,soc,opened,message,error,null);
});
var configure__1964 = (function (soc,opened,message,error,closed){
var handler__1955 = (new goog.events.EventHandler());

handler__1955.listen(soc,goog.net.WebSocket.EventType.OPENED,opened);
handler__1955.listen(soc,goog.net.WebSocket.EventType.MESSAGE,(function (p1__1954_SHARP_){
var payload__1957 = p1__1954_SHARP_.message;
var vec__1956__1958 = cljs.core.re_matches.call(null,cljs.core.re_pattern.call(null,"/([^ ]+) (.*)"),payload__1957);
var ___1959 = cljs.core.nth.call(null,vec__1956__1958,0,null);
var cmd__1960 = cljs.core.nth.call(null,vec__1956__1958,1,null);
var body__1961 = cljs.core.nth.call(null,vec__1956__1958,2,null);

logger.debug.call(null,"websocket",cljs.core.str.call(null,"R: ",payload__1957));
return message.call(null,cmd__1960,body__1961);
}));
if(cljs.core.truth_(error))
{handler__1955.listen(soc,goog.net.WebSocket.EventType.ERROR,error);
} else
{}
if(cljs.core.truth_(closed))
{handler__1955.listen(soc,goog.net.WebSocket.EventType.CLOSED,closed);
} else
{}
return soc;
});
configure = function(soc,opened,message,error,closed){
switch(arguments.length){
case  3 :
return configure__1962.call(this,soc,opened,message);
case  4 :
return configure__1963.call(this,soc,opened,message,error);
case  5 :
return configure__1964.call(this,soc,opened,message,error,closed);
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
}catch (e1966){if(cljs.core.truth_(cljs.core.instance_QMARK_.call(null,goog.global['Error'],e1966)))
{var e__1967 = e1966;

return logger.warn.call(null,"websocket","No WebSocket supported, get a decent browser.");
} else
{if(cljs.core.truth_("﷐'else"))
{throw e1966;
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
var emit_BANG___1969 = (function (socket,msg){
return emit_BANG_.call(null,socket,"message",msg);
});
var emit_BANG___1970 = (function (socket,category,msg){
var packet__1968 = cljs.core.str.call(null,"/",category," ",msg);

logger.debug.call(null,"websocket",cljs.core.str.call(null,"T: ",packet__1968));
return socket.send(packet__1968);
});
emit_BANG_ = function(socket,category,msg){
switch(arguments.length){
case  2 :
return emit_BANG___1969.call(this,socket,category);
case  3 :
return emit_BANG___1970.call(this,socket,category,msg);
}
throw('Invalid arity: ' + arguments.length);
};
return emit_BANG_;
})()
;
