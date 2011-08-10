goog.provide('state');
goog.require('cljs.core');
goog.require('autocomplete');
goog.require('logger');
goog.require('goog.dom');
state.init_state = cljs.core.ObjMap.fromObject(["﷐'nick","﷐'users","﷐'autocomplete"],{"﷐'nick":null,"﷐'users":cljs.core.set([]),"﷐'autocomplete":null});
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
* @param {...*} var_args
*/
state.fn_users = (function() { 
var fn_users__delegate = function (f,nick){
var msg_el__1942 = goog.dom.getElement.call(null,"msg");

return cljs.core.swap_BANG_.call(null,state.state,(function (p__1943){
var m__1944 = p__1943;
var m__1945 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,m__1944))?cljs.core.apply.call(null,cljs.core.hash_map,m__1944):m__1944);
var autocomplete__1946 = cljs.core.get.call(null,m__1945,"﷐'autocomplete");
var users__1947 = cljs.core.get.call(null,m__1945,"﷐'users");

var new_users__1948 = f.call(null,users__1947);

return cljs.core.apply.call(null,cljs.core.assoc,m__1945,"﷐'users",new_users__1948,"﷐'autocomplete",autocomplete.update.call(null,autocomplete__1946,cljs.core.map.call(null,(function (p1__1941_SHARP_){
return cljs.core.str.call(null,"@",p1__1941_SHARP_);
}),new_users__1948),msg_el__1942),(cljs.core.truth_(cljs.core.seq.call(null,nick))?cljs.core.Vector.fromArray(["﷐'nick",cljs.core.first.call(null,nick)]):null));
}));
};
var fn_users = function (f,var_args){
var nick = null;
if (goog.isDef(var_args)) {
  nick = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return fn_users__delegate.call(this, f, nick);
};
fn_users.cljs$lang$maxFixedArity = 1;
fn_users.cljs$lang$applyTo = (function (arglist__1949){
var f = cljs.core.first(arglist__1949);
var nick = cljs.core.rest(arglist__1949);
return fn_users__delegate.call(this, f, nick);
});
return fn_users;
})()
;
/**
* Sets set of connected users.
*/
state.set_users_BANG_ = (function set_users_BANG_(users){
logger.debug.call(null,"state",cljs.core.str.call(null,"users= ",cljs.core.pr_str.call(null,users)));
return state.fn_users.call(null,(function (){
return cljs.core.identity.call(null,users);
}));
});
/**
* Adds new user to users set.
*/
state.add_user_BANG_ = (function add_user_BANG_(nick){
logger.debug.call(null,"state",cljs.core.str.call(null,"users+: ",nick));
return state.fn_users.call(null,(function (p1__1950_SHARP_){
return cljs.core.conj.call(null,p1__1950_SHARP_,nick);
}));
});
/**
* Removes user from users set.
*/
state.rm_user_BANG_ = (function rm_user_BANG_(nick){
logger.debug.call(null,"state",cljs.core.str.call(null,"users-: ",nick));
return state.fn_users.call(null,(function (p1__1951_SHARP_){
return cljs.core.disj.call(null,p1__1951_SHARP_,nick);
}));
});
/**
* Renames user in users set.
*/
state.mv_user_BANG_ = (function mv_user_BANG_(old,new$){
logger.debug.call(null,"state",cljs.core.str.call(null,"users>: ",old," ",new$));
return state.fn_users.call(null,(function (p1__1952_SHARP_){
return cljs.core.conj.call(null,cljs.core.disj.call(null,p1__1952_SHARP_,old),new$);
}));
});
/**
* Sets nickname used by this client
*/
state.chnick_BANG_ = (function chnick_BANG_(new_nick){
logger.debug.call(null,"state",cljs.core.str.call(null,"nick= ",new_nick));
var temp__3726__auto____1954 = goog.dom.getElement.call(null,"nick");

if(cljs.core.truth_(temp__3726__auto____1954))
{var nick_el__1955 = temp__3726__auto____1954;

nick_el__1955.textContent = new_nick;
} else
{}
return state.fn_users.call(null,(function (p1__1953_SHARP_){
return cljs.core.conj.call(null,cljs.core.disj.call(null,p1__1953_SHARP_,state.nick.call(null)),new_nick);
}),new_nick);
});
