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
var configure__1983 = (function (soc,opened,message){
return configure.call(null,soc,opened,message,null);
});
var configure__1984 = (function (soc,opened,message,error){
return configure.call(null,soc,opened,message,error,null);
});
var configure__1985 = (function (soc,opened,message,error,closed){
var handler__1976 = (new goog.events.EventHandler());

handler__1976.listen(soc,goog.net.WebSocket.EventType.OPENED,opened);
handler__1976.listen(soc,goog.net.WebSocket.EventType.MESSAGE,(function (p1__1975_SHARP_){
var payload__1978 = p1__1975_SHARP_.message;
var vec__1977__1979 = cljs.core.re_matches.call(null,/\/([^ ]+) (.*)/,payload__1978);
var ___1980 = cljs.core.nth.call(null,vec__1977__1979,0,null);
var cmd__1981 = cljs.core.nth.call(null,vec__1977__1979,1,null);
var body__1982 = cljs.core.nth.call(null,vec__1977__1979,2,null);

logger.debug.call(null,"websocket",cljs.core.str.call(null,"R: ",payload__1978));
return message.call(null,cmd__1981,body__1982);
}));
if(cljs.core.truth_(error))
{handler__1976.listen(soc,goog.net.WebSocket.EventType.ERROR,error);
} else
{}
if(cljs.core.truth_(closed))
{handler__1976.listen(soc,goog.net.WebSocket.EventType.CLOSED,closed);
} else
{}
return soc;
});
configure = function(soc,opened,message,error,closed){
switch(arguments.length){
case  3 :
return configure__1983.call(this,soc,opened,message);
case  4 :
return configure__1984.call(this,soc,opened,message,error);
case  5 :
return configure__1985.call(this,soc,opened,message,error,closed);
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
}catch (e1987){if(cljs.core.truth_(cljs.core.instance_QMARK_.call(null,goog.global['Error'],e1987)))
{var e__1988 = e1987;

return logger.warn.call(null,"websocket","No WebSocket supported, get a decent browser.");
} else
{if(cljs.core.truth_("﷐'else"))
{throw e1987;
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
* Sends a command to server, optionally with message.
*/
websocket.emit_BANG_ = (function() {
var emit_BANG_ = null;
var emit_BANG___1990 = (function (socket,cmd){
return emit_BANG_.call(null,socket,cmd,null);
});
var emit_BANG___1991 = (function (socket,cmd,msg){
var packet__1989 = cljs.core.str.call(null,"/",cmd,(cljs.core.truth_(msg)?cljs.core.str.call(null," ",msg):null));

logger.debug.call(null,"websocket",cljs.core.str.call(null,"T: ",packet__1989));
return socket.send(packet__1989);
});
emit_BANG_ = function(socket,cmd,msg){
switch(arguments.length){
case  2 :
return emit_BANG___1990.call(this,socket,cmd);
case  3 :
return emit_BANG___1991.call(this,socket,cmd,msg);
}
throw('Invalid arity: ' + arguments.length);
};
return emit_BANG_;
})()
;
