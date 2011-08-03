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
{var sb__1972 = (new goog.string.StringBuffer());

var coll__1973 = clojure.string.seq_reverse.call(null,cljs.core.seq.call(null,s.split("")));

while(true){
if(cljs.core.truth_(coll__1973))
{sb__1972.append(cljs.core.first.call(null,coll__1973));
{
var G__1974 = cljs.core.next.call(null,coll__1973);
coll__1973 = G__1974;
continue;
}
} else
{}
break;
}
return sb__1972.toString();
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
var join__1975 = (function (coll){
return cljs.core.apply.call(null,cljs.core.str,coll);
});
var join__1976 = (function (separator,coll){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,separator,coll));
});
join = function(separator,coll){
switch(arguments.length){
case  1 :
return join__1975.call(this,separator);
case  2 :
return join__1976.call(this,separator,coll);
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
var split__1984 = (function (s,re){
return cljs.core.vec.call(null,cljs.core.str.call(null,s).split(re));
});
var split__1985 = (function (s,re,limit){
if(cljs.core.truth_(cljs.core._LT_.call(null,limit,1)))
{return cljs.core.vec.call(null,cljs.core.str.call(null,s).split(re));
} else
{var s__1978 = s;
var limit__1979 = limit;
var parts__1980 = cljs.core.Vector.fromArray([]);

while(true){
if(cljs.core.truth_(cljs.core._EQ_.call(null,limit__1979,1)))
{return cljs.core.conj.call(null,parts__1980,s__1978);
} else
{var temp__3723__auto____1981 = cljs.core.re_find.call(null,re,s__1978);

if(cljs.core.truth_(temp__3723__auto____1981))
{var m__1982 = temp__3723__auto____1981;

var index__1983 = s__1978.indexOf(m__1982);

{
var G__1987 = s__1978.substring(cljs.core._PLUS_.call(null,index__1983,cljs.core.count.call(null,m__1982)));
var G__1988 = cljs.core.dec.call(null,limit__1979);
var G__1989 = cljs.core.conj.call(null,parts__1980,s__1978.substring(0,index__1983));
s__1978 = G__1987;
limit__1979 = G__1988;
parts__1980 = G__1989;
continue;
}
} else
{return cljs.core.conj.call(null,parts__1980,s__1978);
}
}
break;
}
}
});
split = function(s,re,limit){
switch(arguments.length){
case  2 :
return split__1984.call(this,s,re);
case  3 :
return split__1985.call(this,s,re,limit);
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
return clojure.string.split.call(null,cljs.core.str.call(null,s),/\n|\r\n/);
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
var index__1990 = s.length;

while(true){
if(cljs.core.truth_(cljs.core.zero_QMARK_.call(null,index__1990)))
{return "";
} else
{var ch__1991 = cljs.core.get.call(null,s,cljs.core.dec.call(null,index__1990));

if(cljs.core.truth_((function (){var or__3576__auto____1992 = cljs.core._EQ_.call(null,ch__1991,"\n");

if(cljs.core.truth_(or__3576__auto____1992))
{return or__3576__auto____1992;
} else
{return cljs.core._EQ_.call(null,ch__1991,"\r");
}
})()))
{{
var G__1993 = cljs.core.dec.call(null,index__1990);
index__1990 = G__1993;
continue;
}
} else
{return s.substring(0,index__1990);
}
}
break;
}
});
/**
* True is s is nil, empty, or contains only whitespace.
*/
clojure.string.blank_QMARK_ = (function blank_QMARK_(s){
var s__1994 = cljs.core.str.call(null,s);

if(cljs.core.truth_((function (){var or__3576__auto____1995 = cljs.core.not.call(null,s__1994);

if(cljs.core.truth_(or__3576__auto____1995))
{return or__3576__auto____1995;
} else
{var or__3576__auto____1996 = cljs.core._EQ_.call(null,"",s__1994);

if(cljs.core.truth_(or__3576__auto____1996))
{return or__3576__auto____1996;
} else
{return cljs.core.re_matches.call(null,/\s+/,s__1994);
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
var buffer__1997 = (new goog.string.StringBuffer());
var length__1998 = s.length;

var index__1999 = 0;

while(true){
if(cljs.core.truth_(cljs.core._EQ_.call(null,length__1998,index__1999)))
{return buffer__1997.toString();
} else
{var ch__2000 = s.charAt(index__1999);

var temp__3723__auto____2001 = cljs.core.get.call(null,cmap,ch__2000);

if(cljs.core.truth_(temp__3723__auto____2001))
{var replacement__2002 = temp__3723__auto____2001;

buffer__1997.append(cljs.core.str.call(null,replacement__2002));
} else
{buffer__1997.append(ch__2000);
}
{
var G__2003 = cljs.core.inc.call(null,index__1999);
index__1999 = G__2003;
continue;
}
}
break;
}
});
