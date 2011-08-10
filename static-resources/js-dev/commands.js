goog.provide('commands');
goog.require('cljs.core');
goog.require('state');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.dom');
goog.require('goog.dom.classes');
goog.require('goog.i18n.DateTimeFormat');
goog.require('goog.date.DateTime');
/**
* Redispalys users list.
*/
commands.refresh_users = (function() {
var refresh_users = null;
var refresh_users__1946 = (function (){
return refresh_users.call(null,state.get_users.call(null),state.nick.call(null));
});
var refresh_users__1947 = (function (users,me){
var participants_el__1941 = goog.dom.getElement.call(null,"participants");

goog.dom.removeChildren.call(null,participants_el__1941);
var G__1942__1943 = cljs.core.seq.call(null,cljs.core.sort.call(null,users));

while(true){
if(cljs.core.truth_(G__1942__1943))
{var user__1944 = cljs.core.first.call(null,G__1942__1943);

var user_el__1945 = goog.dom.createDom.call(null,"li");

goog.dom.classes.set.call(null,user_el__1945,"nick");
if(cljs.core.truth_(cljs.core._EQ_.call(null,user__1944,me)))
{goog.dom.classes.add.call(null,user_el__1945,"me");
} else
{}
goog.dom.setTextContent.call(null,user_el__1945,cljs.core.name.call(null,user__1944));
goog.dom.appendChild.call(null,participants_el__1941,user_el__1945);
{
var G__1949 = cljs.core.next.call(null,G__1942__1943);
G__1942__1943 = G__1949;
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
return refresh_users__1946.call(this);
case  2 :
return refresh_users__1947.call(this,users,me);
}
throw('Invalid arity: ' + arguments.length);
};
return refresh_users;
})()
;
commands.new_message = (function new_message(msg){
var msgs_container__1950 = goog.dom.getElement.call(null,"messages");
var new_msg__1951 = goog.dom.createElement.call(null,"li");
var ts__1952 = goog.dom.createDom.call(null,"span");
var now__1953 = (new goog.date.DateTime());

goog.dom.classes.set.call(null,ts__1952,"tstamp");
now__1953.setTime(new Date().getTime());
goog.dom.setTextContent.call(null,ts__1952,(new goog.i18n.DateTimeFormat("HH:mm:ss")).format(now__1953));
goog.dom.appendChild.call(null,new_msg__1951,ts__1952);
goog.dom.appendChild.call(null,new_msg__1951,goog.dom.createTextNode.call(null,msg));
goog.dom.appendChild.call(null,msgs_container__1950,new_msg__1951);
return msgs_container__1950.scrollTop = msgs_container__1950.scrollHeight;
});
commands.new_nickname = (function new_nickname(body){
var parts__1954 = clojure.string.split.call(null,body,/ /);

if(cljs.core.truth_(cljs.core._EQ_.call(null,2,cljs.core.count.call(null,parts__1954))))
{var vec__1955__1956 = parts__1954;
var old__1957 = cljs.core.nth.call(null,vec__1955__1956,0,null);
var new$__1958 = cljs.core.nth.call(null,vec__1955__1956,1,null);

commands.new_message.call(null,cljs.core.str.call(null,old__1957," -> ",new$__1958));
if(cljs.core.truth_(cljs.core._EQ_.call(null,old__1957,state.nick.call(null))))
{state.chnick_BANG_.call(null,new$__1958);
} else
{state.mv_user_BANG_.call(null,old__1957,new$__1958);
}
return commands.refresh_users.call(null);
} else
{return state.chnick_BANG_.call(null,body);
}
});
commands.new_joiner = (function new_joiner(nick){
state.add_user_BANG_.call(null,nick);
commands.new_message.call(null,cljs.core.str.call(null,nick," joined"));
return commands.refresh_users.call(null);
});
commands.new_leaver = (function new_leaver(nick){
state.rm_user_BANG_.call(null,nick);
commands.new_message.call(null,cljs.core.str.call(null,nick," left"));
return commands.refresh_users.call(null);
});
commands.new_count = (function new_count(nr){
return commands.new_message.call(null,cljs.core.str.call(null,"#",nr," connected"));
});
/**
* Updates participants list.
*/
commands.users_list = (function users_list(users_str){
var temp__3726__auto____1959 = cljs.core.into.call(null,cljs.core.set([]),cljs.core.map.call(null,cljs.core.name,cljs.reader.read_string.call(null,users_str)));

if(cljs.core.truth_(temp__3726__auto____1959))
{var users__1960 = temp__3726__auto____1959;

state.set_users_BANG_.call(null,users__1960);
return commands.refresh_users.call(null,users__1960,state.nick.call(null));
} else
{return null;
}
});
