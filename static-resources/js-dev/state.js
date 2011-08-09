goog.provide('state');
goog.require('cljs.core');
goog.require('logger');
goog.require('goog.dom');
goog.require('goog.ui.AutoComplete');
goog.require('goog.ui.AutoComplete.Basic');
state.init_state = cljs.core.ObjMap.fromObject(["﷐'nick","﷐'users","﷐'ac"],{"﷐'nick":null,"﷐'users":cljs.core.set([]),"﷐'ac":null});
state.state = cljs.core.atom.call(null,state.init_state);
/**
* Gets nickname used by this client
*/
state.nick = (function nick(){
return "﷐'nick".call(null,cljs.core.deref.call(null,state.state));
});
/**
* Gets current list of users.
*/
state.get_users = (function get_users(){
return "﷐'users".call(null,cljs.core.deref.call(null,state.state));
});
/**
* Updates autocomplete source
*/
state.autocomplete_update = (function autocomplete_update(){
var old_ac__1966 = "﷐'ac".call(null,cljs.core.deref.call(null,state.state));
var new_ac__1967 = (new goog.ui.AutoComplete.Basic(cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,(function (p1__1965_SHARP_){
return cljs.core.str.call(null,"@",p1__1965_SHARP_);
}),state.get_users.call(null))),goog.dom.getElement.call(null,"msg"),false,true));

if(cljs.core.truth_(old_ac__1966))
{old_ac__1966.detachInputs(goog.dom.getElement.call(null,"msg"));
} else
{}
return cljs.core.swap_BANG_.call(null,state.state,cljs.core.assoc,"﷐'ac",new_ac__1967);
});
/**
* Sets nickname used by this client
*/
state.chnick_BANG_ = (function chnick_BANG_(nick){
cljs.core.swap_BANG_.call(null,state.state,(function (m){
var users__1968 = "﷐'users".call(null,m);
var old_nick__1969 = "﷐'nick".call(null,m);

logger.debug.call(null,"state",cljs.core.str.call(null,"chnick! ",nick," users: ",users__1968));
return cljs.core.assoc.call(null,m,"﷐'nick",nick,"﷐'users",cljs.core.conj.call(null,cljs.core.disj.call(null,users__1968,old_nick__1969),nick));
}));
var temp__3726__auto____1970 = goog.dom.getElement.call(null,"nick");

if(cljs.core.truth_(temp__3726__auto____1970))
{var nick_el__1971 = temp__3726__auto____1970;

nick_el__1971.textContent = nick;
} else
{}
return state.autocomplete_update.call(null);
});
/**
* Sets set of connected users.
*/
state.set_users_BANG_ = (function set_users_BANG_(users){
cljs.core.swap_BANG_.call(null,state.state,cljs.core.assoc,"﷐'users",users);
return state.autocomplete_update.call(null);
});
/**
* Adds new user to users set.
*/
state.add_user_BANG_ = (function add_user_BANG_(nick){
cljs.core.swap_BANG_.call(null,state.state,(function (p1__1972_SHARP_){
return cljs.core.assoc.call(null,p1__1972_SHARP_,"﷐'users",cljs.core.conj.call(null,"﷐'users".call(null,p1__1972_SHARP_),nick));
}));
return state.autocomplete_update.call(null);
});
/**
* Removes user from users set.
*/
state.rm_user_BANG_ = (function rm_user_BANG_(nick){
cljs.core.swap_BANG_.call(null,state.state,(function (p1__1973_SHARP_){
return cljs.core.assoc.call(null,p1__1973_SHARP_,"﷐'users",cljs.core.disj.call(null,"﷐'users".call(null,p1__1973_SHARP_),nick));
}));
return state.autocomplete_update.call(null);
});
/**
* Renames user in users set.
*/
state.mv_user_BANG_ = (function mv_user_BANG_(old,new$){
cljs.core.swap_BANG_.call(null,state.state,(function (p1__1974_SHARP_){
return cljs.core.assoc.call(null,p1__1974_SHARP_,"﷐'users",cljs.core.conj.call(null,cljs.core.disj.call(null,"﷐'users".call(null,p1__1974_SHARP_),old),new$));
}));
return state.autocomplete_update.call(null);
});
