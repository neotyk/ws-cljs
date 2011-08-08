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
var configure__1980 = (function (soc,opened,message){
return configure.call(null,soc,opened,message,null);
});
var configure__1981 = (function (soc,opened,message,error){
return configure.call(null,soc,opened,message,error,null);
});
var configure__1982 = (function (soc,opened,message,error,closed){
var handler__1973 = (new goog.events.EventHandler());

handler__1973.listen(soc,goog.net.WebSocket.EventType.OPENED,opened);
handler__1973.listen(soc,goog.net.WebSocket.EventType.MESSAGE,(function (p1__1972_SHARP_){
var payload__1975 = p1__1972_SHARP_.message;
var vec__1974__1976 = cljs.core.re_matches.call(null,/\/([^ ]+) (.*)/,payload__1975);
var ___1977 = cljs.core.nth.call(null,vec__1974__1976,0,null);
var cmd__1978 = cljs.core.nth.call(null,vec__1974__1976,1,null);
var body__1979 = cljs.core.nth.call(null,vec__1974__1976,2,null);

logger.debug.call(null,"websocket",cljs.core.str.call(null,"R: ",payload__1975));
return message.call(null,cmd__1978,body__1979);
}));
if(cljs.core.truth_(error))
{handler__1973.listen(soc,goog.net.WebSocket.EventType.ERROR,error);
} else
{}
if(cljs.core.truth_(closed))
{handler__1973.listen(soc,goog.net.WebSocket.EventType.CLOSED,closed);
} else
{}
return soc;
});
configure = function(soc,opened,message,error,closed){
switch(arguments.length){
case  3 :
return configure__1980.call(this,soc,opened,message);
case  4 :
return configure__1981.call(this,soc,opened,message,error);
case  5 :
return configure__1982.call(this,soc,opened,message,error,closed);
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
}catch (e1984){if(cljs.core.truth_(cljs.core.instance_QMARK_.call(null,goog.global['Error'],e1984)))
{var e__1985 = e1984;

return logger.warn.call(null,"websocket","No WebSocket supported, get a decent browser.");
} else
{if(cljs.core.truth_("﷐'else"))
{throw e1984;
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
var emit_BANG___1987 = (function (socket,cmd){
return emit_BANG_.call(null,socket,cmd,null);
});
var emit_BANG___1988 = (function (socket,cmd,msg){
var packet__1986 = cljs.core.str.call(null,"/",cmd,(cljs.core.truth_(msg)?cljs.core.str.call(null," ",msg):null));

logger.debug.call(null,"websocket",cljs.core.str.call(null,"T: ",packet__1986));
return socket.send(packet__1986);
});
emit_BANG_ = function(socket,cmd,msg){
switch(arguments.length){
case  2 :
return emit_BANG___1987.call(this,socket,cmd);
case  3 :
return emit_BANG___1988.call(this,socket,cmd,msg);
}
throw('Invalid arity: ' + arguments.length);
};
return emit_BANG_;
})()
;
