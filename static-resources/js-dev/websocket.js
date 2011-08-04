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
var configure__1964 = (function (soc,opened,message){
return configure.call(null,soc,opened,message,null);
});
var configure__1965 = (function (soc,opened,message,error){
return configure.call(null,soc,opened,message,error,null);
});
var configure__1966 = (function (soc,opened,message,error,closed){
var handler__1957 = (new goog.events.EventHandler());

handler__1957.listen(soc,goog.net.WebSocket.EventType.OPENED,opened);
handler__1957.listen(soc,goog.net.WebSocket.EventType.MESSAGE,(function (p1__1956_SHARP_){
var payload__1959 = p1__1956_SHARP_.message;
var vec__1958__1960 = cljs.core.re_matches.call(null,/\/([^ ]+) (.*)/,payload__1959);
var ___1961 = cljs.core.nth.call(null,vec__1958__1960,0,null);
var cmd__1962 = cljs.core.nth.call(null,vec__1958__1960,1,null);
var body__1963 = cljs.core.nth.call(null,vec__1958__1960,2,null);

logger.debug.call(null,"websocket",cljs.core.str.call(null,"R: ",payload__1959));
return message.call(null,cmd__1962,body__1963);
}));
if(cljs.core.truth_(error))
{handler__1957.listen(soc,goog.net.WebSocket.EventType.ERROR,error);
} else
{}
if(cljs.core.truth_(closed))
{handler__1957.listen(soc,goog.net.WebSocket.EventType.CLOSED,closed);
} else
{}
return soc;
});
configure = function(soc,opened,message,error,closed){
switch(arguments.length){
case  3 :
return configure__1964.call(this,soc,opened,message);
case  4 :
return configure__1965.call(this,soc,opened,message,error);
case  5 :
return configure__1966.call(this,soc,opened,message,error,closed);
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
}catch (e1968){if(cljs.core.truth_(cljs.core.instance_QMARK_.call(null,goog.global['Error'],e1968)))
{var e__1969 = e1968;

return logger.warn.call(null,"websocket","No WebSocket supported, get a decent browser.");
} else
{if(cljs.core.truth_("﷐'else"))
{throw e1968;
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
var emit_BANG___1971 = (function (socket,msg){
return emit_BANG_.call(null,socket,"message",msg);
});
var emit_BANG___1972 = (function (socket,category,msg){
var packet__1970 = cljs.core.str.call(null,"/",category," ",msg);

logger.debug.call(null,"websocket",cljs.core.str.call(null,"T: ",packet__1970));
return socket.send(packet__1970);
});
emit_BANG_ = function(socket,category,msg){
switch(arguments.length){
case  2 :
return emit_BANG___1971.call(this,socket,category);
case  3 :
return emit_BANG___1972.call(this,socket,category,msg);
}
throw('Invalid arity: ' + arguments.length);
};
return emit_BANG_;
})()
;
