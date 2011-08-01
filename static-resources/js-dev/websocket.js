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
var configure__2010 = (function (soc,opened,message){
return configure.call(null,soc,opened,message,null);
});
var configure__2011 = (function (soc,opened,message,error){
return configure.call(null,soc,opened,message,error,null);
});
var configure__2012 = (function (soc,opened,message,error,closed){
var handler__2009 = (new goog.events.EventHandler());

handler__2009.listen(soc,goog.net.WebSocket.EventType.OPENED,opened);
handler__2009.listen(soc,goog.net.WebSocket.EventType.MESSAGE,message);
if(cljs.core.truth_(error))
{handler__2009.listen(soc,goog.net.WebSocket.EventType.ERROR,error);
} else
{}
if(cljs.core.truth_(closed))
{handler__2009.listen(soc,goog.net.WebSocket.EventType.CLOSED,closed);
} else
{}
return soc;
});
configure = function(soc,opened,message,error,closed){
switch(arguments.length){
case  3 :
return configure__2010.call(this,soc,opened,message);
case  4 :
return configure__2011.call(this,soc,opened,message,error);
case  5 :
return configure__2012.call(this,soc,opened,message,error,closed);
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
}catch (e2014){if(cljs.core.truth_(cljs.core.instance_QMARK_.call(null,goog.global['Error'],e2014)))
{var e__2015 = e2014;

return logger.warn.call(null,"websocket","No WebSocket supported, get a decent browser.");
} else
{if(cljs.core.truth_("﷐'else"))
{throw e2014;
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
var emit_BANG___2017 = (function (socket,msg){
return emit_BANG_.call(null,socket,"message",msg);
});
var emit_BANG___2018 = (function (socket,category,msg){
var packet__2016 = cljs.core.str.call(null,"/",category," ",msg);

logger.info.call(null,"websocket",cljs.core.str.call(null,"Sending: ",packet__2016));
return socket.send(packet__2016);
});
emit_BANG_ = function(socket,category,msg){
switch(arguments.length){
case  2 :
return emit_BANG___2017.call(this,socket,category);
case  3 :
return emit_BANG___2018.call(this,socket,category,msg);
}
throw('Invalid arity: ' + arguments.length);
};
return emit_BANG_;
})()
;
