goog.provide('commands');
goog.require('cljs.core');
goog.require('state');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.dom');
goog.require('goog.dom.classes');
/**
* Redispalys users list.
*/
commands.refresh_users = (function() {
var refresh_users = null;
var refresh_users__1948 = (function (){
return refresh_users.call(null,state.get_users.call(null),state.nick.call(null));
});
var refresh_users__1949 = (function (users,me){
var participants_el__1943 = goog.dom.getElement.call(null,"participants");

goog.dom.removeChildren.call(null,participants_el__1943);
var G__1944__1945 = cljs.core.seq.call(null,cljs.core.sort.call(null,users));

while(true){
if(cljs.core.truth_(G__1944__1945))
{var user__1946 = cljs.core.first.call(null,G__1944__1945);

var user_el__1947 = goog.dom.createDom.call(null,"li");

goog.dom.classes.set.call(null,user_el__1947,"nick");
if(cljs.core.truth_(cljs.core._EQ_.call(null,user__1946,me)))
{goog.dom.classes.add.call(null,user_el__1947,"me");
} else
{}
goog.dom.setTextContent.call(null,user_el__1947,cljs.core.name.call(null,user__1946));
goog.dom.appendChild.call(null,participants_el__1943,user_el__1947);
{
var G__1951 = cljs.core.next.call(null,G__1944__1945);
G__1944__1945 = G__1951;
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
return refresh_users__1948.call(this);
case  2 :
return refresh_users__1949.call(this,users,me);
}
throw('Invalid arity: ' + arguments.length);
};
return refresh_users;
})()
;
commands.new_nickname = (function new_nickname(body){
var parts__1952 = clojure.string.split.call(null,body,/ /);

if(cljs.core.truth_(cljs.core._EQ_.call(null,2,cljs.core.count.call(null,parts__1952))))
{var vec__1953__1954 = parts__1952;
var old__1955 = cljs.core.nth.call(null,vec__1953__1954,0,null);
var new$__1956 = cljs.core.nth.call(null,vec__1953__1954,1,null);

if(cljs.core.truth_(cljs.core._EQ_.call(null,old__1955,state.nick.call(null))))
{state.chnick_BANG_.call(null,new$__1956);
} else
{state.mv_user_BANG_.call(null,old__1955,new$__1956);
}
return commands.refresh_users.call(null);
} else
{return state.chnick_BANG_.call(null,body);
}
});
commands.new_message = (function new_message(msg){
var msgs_container__1957 = goog.dom.getElement.call(null,"messages");
var new_msg__1958 = goog.dom.createElement.call(null,"li");

goog.dom.setTextContent.call(null,new_msg__1958,msg);
goog.dom.appendChild.call(null,msgs_container__1957,new_msg__1958);
return msgs_container__1957.scrollTop = msgs_container__1957.scrollHeight;
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
