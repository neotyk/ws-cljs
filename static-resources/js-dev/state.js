goog.provide('state');
goog.require('cljs.core');
goog.require('logger');
goog.require('goog.dom');
state.init_state = cljs.core.ObjMap.fromObject(["﷐'nick","﷐'users"],{"﷐'nick":null,"﷐'users":cljs.core.set([])});
state.state = cljs.core.atom.call(null,state.init_state);
/**
* Gets nickname used by this client
*/
state.nick = (function nick(){
return "﷐'nick".call(null,cljs.core.deref.call(null,state.state));
});
/**
* Sets nickname used by this client
*/
state.chnick_BANG_ = (function chnick_BANG_(nick){
cljs.core.swap_BANG_.call(null,state.state,(function (m){
var users__1965 = "﷐'users".call(null,m);
var old_nick__1966 = "﷐'nick".call(null,m);

logger.debug.call(null,"state",cljs.core.str.call(null,"chnick! ",nick," users: ",users__1965));
return cljs.core.assoc.call(null,m,"﷐'nick",nick,"﷐'users",cljs.core.conj.call(null,cljs.core.disj.call(null,users__1965,old_nick__1966),nick));
}));
var temp__3726__auto____1967 = goog.dom.getElement.call(null,"nick");

if(cljs.core.truth_(temp__3726__auto____1967))
{var nick_el__1968 = temp__3726__auto____1967;

return nick_el__1968.textContent = nick;
} else
{return null;
}
});
/**
* Gets current list of users.
*/
state.get_users = (function get_users(){
return "﷐'users".call(null,cljs.core.deref.call(null,state.state));
});
/**
* Sets set of connected users.
*/
state.set_users_BANG_ = (function set_users_BANG_(users){
return cljs.core.swap_BANG_.call(null,state.state,cljs.core.assoc,"﷐'users",users);
});
/**
* Adds new user to users set.
*/
state.add_user_BANG_ = (function add_user_BANG_(nick){
return cljs.core.swap_BANG_.call(null,state.state,(function (p1__1969_SHARP_){
return cljs.core.assoc.call(null,p1__1969_SHARP_,"﷐'users",cljs.core.conj.call(null,"﷐'users".call(null,p1__1969_SHARP_),nick));
}));
});
/**
* Removes user from users set.
*/
state.rm_user_BANG_ = (function rm_user_BANG_(nick){
return cljs.core.swap_BANG_.call(null,state.state,(function (p1__1970_SHARP_){
return cljs.core.assoc.call(null,p1__1970_SHARP_,"﷐'users",cljs.core.disj.call(null,"﷐'users".call(null,p1__1970_SHARP_),nick));
}));
});
/**
* Renames user in users set.
*/
state.mv_user_BANG_ = (function mv_user_BANG_(old,new$){
return cljs.core.swap_BANG_.call(null,state.state,(function (p1__1971_SHARP_){
return cljs.core.assoc.call(null,p1__1971_SHARP_,"﷐'users",cljs.core.conj.call(null,cljs.core.disj.call(null,"﷐'users".call(null,p1__1971_SHARP_),old),new$));
}));
});
