goog.provide('clojure.string');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.string.StringBuffer');
clojure.string.seq_reverse = (function seq_reverse(coll){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,coll);
});
/**
* Returns s with its characters reversed.
*/
clojure.string.reverse = (function reverse(s){
if(cljs.core.truth_(cljs.core._EQ_.call(null,s.length,0)))
{return "";
} else
{var sb__3359 = (new goog.string.StringBuffer());

var coll__3360 = clojure.string.seq_reverse.call(null,cljs.core.seq.call(null,s.split("")));

while(true){
if(cljs.core.truth_(coll__3360))
{sb__3359.append(cljs.core.first.call(null,coll__3360));
{
var G__3361 = cljs.core.next.call(null,coll__3360);
coll__3360 = G__3361;
continue;
}
} else
{}
break;
}
return sb__3359.toString();
}
});
/**
* Replaces all instance of match with replacement in s.
* match/replacement can be:
* 
* string / string
* pattern / (string or function of match).
*/
clojure.string.replace = (function replace(s,match,replacement){
if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,match)))
{return s.replace((new goog.global['RegExp'](goog.string.regExpEscape.call(null,match),"g")),replacement);
} else
{if(cljs.core.truth_(match.hasOwnProperty("source")))
{return s.replace((new goog.global['RegExp'](match.source,"g")),replacement);
} else
{if(cljs.core.truth_("﷐'else"))
{throw cljs.core.str.call(null,"Invalid match arg: ",match);
} else
{return null;
}
}
}
});
/**
* Replaces the first instance of match with replacement in s.
* match/replacement can be:
* 
* string / string
* pattern / (string or function of match).
*/
clojure.string.replace_first = (function replace_first(s,match,replacement){
return s.replace(match,replacement);
});
/**
* Returns a string of all elements in coll, as returned by (seq coll),
* separated by an optional separator.
*/
clojure.string.join = (function() {
var join = null;
var join__3362 = (function (coll){
return cljs.core.apply.call(null,cljs.core.str,coll);
});
var join__3363 = (function (separator,coll){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,separator,coll));
});
join = function(separator,coll){
switch(arguments.length){
case  1 :
return join__3362.call(this,separator);
case  2 :
return join__3363.call(this,separator,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return join;
})()
;
/**
* Converts string to all upper-case.
*/
clojure.string.upper_case = (function upper_case(s){
return s.toUpperCase();
});
/**
* Converts string to all lower-case.
*/
clojure.string.lower_case = (function lower_case(s){
return s.toLowerCase();
});
/**
* Converts first character of the string to upper-case, all other
* characters to lower-case.
*/
clojure.string.capitalize = (function capitalize(s){
if(cljs.core.truth_(cljs.core._LT_.call(null,cljs.core.count.call(null,s),2)))
{return clojure.string.upper_case.call(null,s);
} else
{return cljs.core.str.call(null,clojure.string.upper_case.call(null,cljs.core.subs.call(null,s,0,1)),clojure.string.lower_case.call(null,cljs.core.subs.call(null,s,1)));
}
});
/**
* Splits string on a regular expression. Optional argument limit is
* the maximum number of splits. Not lazy. Returns vector of the splits.
*/
clojure.string.split = (function() {
var split = null;
var split__3371 = (function (s,re){
return cljs.core.vec.call(null,cljs.core.str.call(null,s).split(re));
});
var split__3372 = (function (s,re,limit){
if(cljs.core.truth_(cljs.core._LT_.call(null,limit,1)))
{return cljs.core.vec.call(null,cljs.core.str.call(null,s).split(re));
} else
{var s__3365 = s;
var limit__3366 = limit;
var parts__3367 = cljs.core.Vector.fromArray([]);

while(true){
if(cljs.core.truth_(cljs.core._EQ_.call(null,limit__3366,1)))
{return cljs.core.conj.call(null,parts__3367,s__3365);
} else
{var temp__3723__auto____3368 = cljs.core.re_find.call(null,re,s__3365);

if(cljs.core.truth_(temp__3723__auto____3368))
{var m__3369 = temp__3723__auto____3368;

var index__3370 = s__3365.indexOf(m__3369);

{
var G__3374 = s__3365.substring(cljs.core._PLUS_.call(null,index__3370,cljs.core.count.call(null,m__3369)));
var G__3375 = cljs.core.dec.call(null,limit__3366);
var G__3376 = cljs.core.conj.call(null,parts__3367,s__3365.substring(0,index__3370));
s__3365 = G__3374;
limit__3366 = G__3375;
parts__3367 = G__3376;
continue;
}
} else
{return cljs.core.conj.call(null,parts__3367,s__3365);
}
}
break;
}
}
});
split = function(s,re,limit){
switch(arguments.length){
case  2 :
return split__3371.call(this,s,re);
case  3 :
return split__3372.call(this,s,re,limit);
}
throw('Invalid arity: ' + arguments.length);
};
return split;
})()
;
/**
* Splits s on
* or
* .
*/
clojure.string.split_lines = (function split_lines(s){
return clojure.string.split.call(null,s,/\n|\r\n/);
});
/**
* Removes whitespace from both ends of string.
*/
clojure.string.trim = (function trim(s){
return goog.string.trim.call(null,s);
});
/**
* Removes whitespace from the left side of string.
*/
clojure.string.triml = (function triml(s){
return goog.string.trimLeft.call(null,s);
});
/**
* Removes whitespace from the right side of string.
*/
clojure.string.trimr = (function trimr(s){
return goog.string.trimRight.call(null,s);
});
/**
* Removes all trailing newline \n or return \r characters from
* string.  Similar to Perl's chomp.
*/
clojure.string.trim_newline = (function trim_newline(s){
var index__3377 = s.length;

while(true){
if(cljs.core.truth_(cljs.core.zero_QMARK_.call(null,index__3377)))
{return "";
} else
{var ch__3378 = cljs.core.get.call(null,s,cljs.core.dec.call(null,index__3377));

if(cljs.core.truth_((function (){var or__3576__auto____3379 = cljs.core._EQ_.call(null,ch__3378,"\n");

if(cljs.core.truth_(or__3576__auto____3379))
{return or__3576__auto____3379;
} else
{return cljs.core._EQ_.call(null,ch__3378,"\r");
}
})()))
{{
var G__3380 = cljs.core.dec.call(null,index__3377);
index__3377 = G__3380;
continue;
}
} else
{return s.substring(0,index__3377);
}
}
break;
}
});
/**
* True is s is nil, empty, or contains only whitespace.
*/
clojure.string.blank_QMARK_ = (function blank_QMARK_(s){
var s__3381 = cljs.core.str.call(null,s);

if(cljs.core.truth_((function (){var or__3576__auto____3382 = cljs.core.not.call(null,s__3381);

if(cljs.core.truth_(or__3576__auto____3382))
{return or__3576__auto____3382;
} else
{var or__3576__auto____3383 = cljs.core._EQ_.call(null,"",s__3381);

if(cljs.core.truth_(or__3576__auto____3383))
{return or__3576__auto____3383;
} else
{return cljs.core.re_matches.call(null,/\s+/,s__3381);
}
}
})()))
{return true;
} else
{return false;
}
});
/**
* Return a new string, using cmap to escape each character ch
* from s as follows:
* 
* If (cmap ch) is nil, append ch to the new string.
* If (cmap ch) is non-nil, append (str (cmap ch)) instead.
*/
clojure.string.escape = (function escape(s,cmap){
var buffer__3384 = (new goog.string.StringBuffer());
var length__3385 = s.length;

var index__3386 = 0;

while(true){
if(cljs.core.truth_(cljs.core._EQ_.call(null,length__3385,index__3386)))
{return buffer__3384.toString();
} else
{var ch__3387 = s.charAt(index__3386);

var temp__3723__auto____3388 = cljs.core.get.call(null,cmap,ch__3387);

if(cljs.core.truth_(temp__3723__auto____3388))
{var replacement__3389 = temp__3723__auto____3388;

buffer__3384.append(cljs.core.str.call(null,replacement__3389));
} else
{buffer__3384.append(ch__3387);
}
{
var G__3390 = cljs.core.inc.call(null,index__3386);
index__3386 = G__3390;
continue;
}
}
break;
}
});
