goog.provide('cljs.core');
goog.require('goog.string');
goog.require('goog.string.StringBuffer');
goog.require('goog.object');
goog.require('goog.array');
/**
* Internal - do not use!
*/
cljs.core.truth_ = (function truth_(x){
return (x != null && x !== false);
});
/**
* Internal - do not use!
*/
cljs.core.type_satisfies_ = (function type_satisfies_(p,x){
var or__3576__auto____1976 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3576__auto____1976))
{return or__3576__auto____1976;
} else
{var or__3576__auto____1977 = (p["_"]);

if(cljs.core.truth_(or__3576__auto____1977))
{return or__3576__auto____1977;
} else
{return false;
}
}
});
/**
* When compiled for a command-line target, whatever
* function *main-fn* is set to will be called with the command-line
* argv as arguments
*/
cljs.core._STAR_main_cli_fn_STAR_ = null;
/**
* Returns a javascript array, cloned from the passed in array
*/
cljs.core.aclone = (function aclone(array_like){
return Array.prototype.slice.call(array_like);
});
/**
* Creates a new javascript array.
* @param {...*} var_args
*/
cljs.core.array = (function array(var_args){
return Array.prototype.slice.call(arguments);
});
/**
* Returns the value at the index.
*/
cljs.core.aget = (function aget(array,i){
return array[i];
});
/**
* Sets the value at the index.
*/
cljs.core.aset = (function aset(array,i,val){
return (array[i] = val);
});
/**
* Returns the length of the Java array. Works on arrays of all types.
*/
cljs.core.alength = (function alength(array){
return array.length;
});
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3574__auto____1978 = coll;

if(cljs.core.truth_(and__3574__auto____1978))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3574__auto____1978;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3576__auto____1979 = (_count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____1979))
{return or__3576__auto____1979;
} else
{return (_count["_"]);
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3574__auto____1980 = coll;

if(cljs.core.truth_(and__3574__auto____1980))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3574__auto____1980;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3576__auto____1981 = (_empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____1981))
{return or__3576__auto____1981;
} else
{return (_empty["_"]);
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3574__auto____1982 = coll;

if(cljs.core.truth_(and__3574__auto____1982))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3574__auto____1982;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3576__auto____1983 = (_conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____1983))
{return or__3576__auto____1983;
} else
{return (_conj["_"]);
}
})().call(null,coll,o);
}
});
cljs.core.IIndexed = {};
cljs.core._nth = (function() {
var _nth = null;
var _nth__1988 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3574__auto____1984 = coll;

if(cljs.core.truth_(and__3574__auto____1984))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3574__auto____1984;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3576__auto____1985 = (_nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____1985))
{return or__3576__auto____1985;
} else
{return (_nth["_"]);
}
})().call(null,coll,n);
}
});
var _nth__1989 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3574__auto____1986 = coll;

if(cljs.core.truth_(and__3574__auto____1986))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3574__auto____1986;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3576__auto____1987 = (_nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____1987))
{return or__3576__auto____1987;
} else
{return (_nth["_"]);
}
})().call(null,coll,n,not_found);
}
});
_nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return _nth__1988.call(this,coll,n);
case  3 :
return _nth__1989.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3574__auto____1991 = coll;

if(cljs.core.truth_(and__3574__auto____1991))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3574__auto____1991;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3576__auto____1992 = (_first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____1992))
{return or__3576__auto____1992;
} else
{return (_first["_"]);
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3574__auto____1993 = coll;

if(cljs.core.truth_(and__3574__auto____1993))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3574__auto____1993;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3576__auto____1994 = (_rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____1994))
{return or__3576__auto____1994;
} else
{return (_rest["_"]);
}
})().call(null,coll);
}
});
cljs.core.ILookup = {};
cljs.core._lookup = (function() {
var _lookup = null;
var _lookup__1999 = (function (o,k){
if(cljs.core.truth_((function (){var and__3574__auto____1995 = o;

if(cljs.core.truth_(and__3574__auto____1995))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3574__auto____1995;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3576__auto____1996 = (_lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____1996))
{return or__3576__auto____1996;
} else
{return (_lookup["_"]);
}
})().call(null,o,k);
}
});
var _lookup__2000 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3574__auto____1997 = o;

if(cljs.core.truth_(and__3574__auto____1997))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3574__auto____1997;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3576__auto____1998 = (_lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____1998))
{return or__3576__auto____1998;
} else
{return (_lookup["_"]);
}
})().call(null,o,k,not_found);
}
});
_lookup = function(o,k,not_found){
switch(arguments.length){
case  2 :
return _lookup__1999.call(this,o,k);
case  3 :
return _lookup__2000.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3574__auto____2002 = coll;

if(cljs.core.truth_(and__3574__auto____2002))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3574__auto____2002;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3576__auto____2003 = (_contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2003))
{return or__3576__auto____2003;
} else
{return (_contains_key_QMARK_["_"]);
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3574__auto____2004 = coll;

if(cljs.core.truth_(and__3574__auto____2004))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3574__auto____2004;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3576__auto____2005 = (_assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2005))
{return or__3576__auto____2005;
} else
{return (_assoc["_"]);
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3574__auto____2006 = coll;

if(cljs.core.truth_(and__3574__auto____2006))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3574__auto____2006;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3576__auto____2007 = (_dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2007))
{return or__3576__auto____2007;
} else
{return (_dissoc["_"]);
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3574__auto____2008 = coll;

if(cljs.core.truth_(and__3574__auto____2008))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3574__auto____2008;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3576__auto____2009 = (_disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2009))
{return or__3576__auto____2009;
} else
{return (_disjoin["_"]);
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3574__auto____2010 = coll;

if(cljs.core.truth_(and__3574__auto____2010))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3574__auto____2010;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3576__auto____2011 = (_peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2011))
{return or__3576__auto____2011;
} else
{return (_peek["_"]);
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3574__auto____2012 = coll;

if(cljs.core.truth_(and__3574__auto____2012))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3574__auto____2012;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3576__auto____2013 = (_pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2013))
{return or__3576__auto____2013;
} else
{return (_pop["_"]);
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3574__auto____2014 = coll;

if(cljs.core.truth_(and__3574__auto____2014))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3574__auto____2014;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3576__auto____2015 = (_assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2015))
{return or__3576__auto____2015;
} else
{return (_assoc_n["_"]);
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3574__auto____2016 = o;

if(cljs.core.truth_(and__3574__auto____2016))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3574__auto____2016;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3576__auto____2017 = (_deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____2017))
{return or__3576__auto____2017;
} else
{return (_deref["_"]);
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3574__auto____2018 = o;

if(cljs.core.truth_(and__3574__auto____2018))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3574__auto____2018;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3576__auto____2019 = (_deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____2019))
{return or__3576__auto____2019;
} else
{return (_deref_with_timeout["_"]);
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3574__auto____2020 = o;

if(cljs.core.truth_(and__3574__auto____2020))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3574__auto____2020;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3576__auto____2021 = (_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____2021))
{return or__3576__auto____2021;
} else
{return (_meta["_"]);
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3574__auto____2022 = o;

if(cljs.core.truth_(and__3574__auto____2022))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3574__auto____2022;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3576__auto____2023 = (_with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____2023))
{return or__3576__auto____2023;
} else
{return (_with_meta["_"]);
}
})().call(null,o,meta);
}
});
cljs.core.IReduce = {};
cljs.core._reduce = (function() {
var _reduce = null;
var _reduce__2028 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3574__auto____2024 = coll;

if(cljs.core.truth_(and__3574__auto____2024))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3574__auto____2024;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3576__auto____2025 = (_reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2025))
{return or__3576__auto____2025;
} else
{return (_reduce["_"]);
}
})().call(null,coll,f);
}
});
var _reduce__2029 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3574__auto____2026 = coll;

if(cljs.core.truth_(and__3574__auto____2026))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3574__auto____2026;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3576__auto____2027 = (_reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2027))
{return or__3576__auto____2027;
} else
{return (_reduce["_"]);
}
})().call(null,coll,f,start);
}
});
_reduce = function(coll,f,start){
switch(arguments.length){
case  2 :
return _reduce__2028.call(this,coll,f);
case  3 :
return _reduce__2029.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3574__auto____2031 = o;

if(cljs.core.truth_(and__3574__auto____2031))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3574__auto____2031;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3576__auto____2032 = (_equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____2032))
{return or__3576__auto____2032;
} else
{return (_equiv["_"]);
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3574__auto____2033 = o;

if(cljs.core.truth_(and__3574__auto____2033))
{return o.cljs$core$IHash$_hash;
} else
{return and__3574__auto____2033;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3576__auto____2034 = (_hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____2034))
{return or__3576__auto____2034;
} else
{return (_hash["_"]);
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3574__auto____2035 = o;

if(cljs.core.truth_(and__3574__auto____2035))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3574__auto____2035;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3576__auto____2036 = (_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____2036))
{return or__3576__auto____2036;
} else
{return (_seq["_"]);
}
})().call(null,o);
}
});
cljs.core.ISequential = {};
cljs.core.IPrintable = {};
cljs.core._pr_seq = (function _pr_seq(o,opts){
if(cljs.core.truth_((function (){var and__3574__auto____2037 = o;

if(cljs.core.truth_(and__3574__auto____2037))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3574__auto____2037;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3576__auto____2038 = (_pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____2038))
{return or__3576__auto____2038;
} else
{return (_pr_seq["_"]);
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3574__auto____2039 = d;

if(cljs.core.truth_(and__3574__auto____2039))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3574__auto____2039;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3576__auto____2040 = (_realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3576__auto____2040))
{return or__3576__auto____2040;
} else
{return (_realized_QMARK_["_"]);
}
})().call(null,d);
}
});
cljs.core.identical_QMARK_ = (function identical_QMARK_(x,y){
return (x === y);
});
cljs.core._EQ_ = (function _EQ_(x,y){
return cljs.core._equiv.call(null,x,y);
});
cljs.core.nil_QMARK_ = (function nil_QMARK_(x){
return cljs.core.identical_QMARK_.call(null,x,null);
});
(cljs.core.ISet["null"] = true);
(cljs.core._disjoin["null"] = (function (_,v){
return null;
}));
(cljs.core.IEquiv["null"] = true);
(cljs.core._equiv["null"] = (function (_,o){
return cljs.core.nil_QMARK_.call(null,o);
}));
(cljs.core.ICollection["null"] = true);
(cljs.core._conj["null"] = (function (_,o){
return cljs.core.list.call(null,o);
}));
(cljs.core.ISeq["null"] = true);
(cljs.core._first["null"] = (function (_){
return null;
}));
(cljs.core._rest["null"] = (function (_){
return cljs.core.list.call(null);
}));
(cljs.core.IStack["null"] = true);
(cljs.core._peek["null"] = (function (_){
return null;
}));
(cljs.core._pop["null"] = (function (_){
return null;
}));
(cljs.core.IWithMeta["null"] = true);
(cljs.core._with_meta["null"] = (function (_,meta){
return null;
}));
(cljs.core.IMap["null"] = true);
(cljs.core._dissoc["null"] = (function (_,k){
return null;
}));
(cljs.core.IEmptyableCollection["null"] = true);
(cljs.core._empty["null"] = (function (_){
return null;
}));
(cljs.core.IIndexed["null"] = true);
(cljs.core._nth["null"] = (function() {
var G__2041 = null;
var G__2041__2042 = (function (_,n){
return null;
});
var G__2041__2043 = (function (_,n,not_found){
return not_found;
});
G__2041 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__2041__2042.call(this,_,n);
case  3 :
return G__2041__2043.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2041;
})()
);
(cljs.core.IMeta["null"] = true);
(cljs.core._meta["null"] = (function (_){
return null;
}));
(cljs.core.IReduce["null"] = true);
(cljs.core._reduce["null"] = (function() {
var G__2045 = null;
var G__2045__2046 = (function (_,f){
return f.call(null);
});
var G__2045__2047 = (function (_,f,start){
return start;
});
G__2045 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__2045__2046.call(this,_,f);
case  3 :
return G__2045__2047.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2045;
})()
);
(cljs.core.IHash["null"] = true);
(cljs.core._hash["null"] = (function (o){
return 0;
}));
(cljs.core.ICounted["null"] = true);
(cljs.core._count["null"] = (function (_){
return 0;
}));
(cljs.core.IAssociative["null"] = true);
(cljs.core._assoc["null"] = (function (_,k,v){
return cljs.core.hash_map.call(null,k,v);
}));
(cljs.core.ILookup["null"] = true);
(cljs.core._lookup["null"] = (function() {
var G__2049 = null;
var G__2049__2050 = (function (o,k){
return null;
});
var G__2049__2051 = (function (o,k,not_found){
return not_found;
});
G__2049 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__2049__2050.call(this,o,k);
case  3 :
return G__2049__2051.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2049;
})()
);
goog.global['Date'].prototype.cljs$core$IEquiv$ = true;
goog.global['Date'].prototype.cljs$core$IEquiv$_equiv = (function (o,other){
return cljs.core.identical_QMARK_.call(null,o.toString,other.toString);
});
(cljs.core.IHash["number"] = true);
(cljs.core._hash["number"] = (function (o){
return o;
}));
(cljs.core.IEquiv["number"] = true);
(cljs.core._equiv["number"] = (function (x,o){
return cljs.core.identical_QMARK_.call(null,x,o);
}));
(cljs.core.IHash["function"] = true);
(cljs.core._hash["function"] = (function (o){
return goog.getUid.call(null,o);
}));
/**
* Returns a number one greater than num.
*/
cljs.core.inc = (function inc(x){
return (x + 1);
});
cljs.core.lt_ = (function lt_(x,y){
return (x < y);
});
/**
* Accepts any collection which satisfies the ICount and IIndexed protocols and
* reduces them without incurring seq initialization
*/
cljs.core.ci_reduce = (function() {
var ci_reduce = null;
var ci_reduce__2059 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__2053 = cljs.core._nth.call(null,cicoll,0);
var n__2054 = 1;

while(true){
if(cljs.core.truth_(cljs.core.lt_.call(null,n__2054,cljs.core._count.call(null,cicoll))))
{{
var G__2063 = f.call(null,val__2053,cljs.core._nth.call(null,cicoll,n__2054));
var G__2064 = cljs.core.inc.call(null,n__2054);
val__2053 = G__2063;
n__2054 = G__2064;
continue;
}
} else
{return val__2053;
}
break;
}
}
});
var ci_reduce__2060 = (function (cicoll,f,val){
var val__2055 = val;
var n__2056 = 0;

while(true){
if(cljs.core.truth_(cljs.core.lt_.call(null,n__2056,cljs.core._count.call(null,cicoll))))
{{
var G__2065 = f.call(null,val__2055,cljs.core._nth.call(null,cicoll,n__2056));
var G__2066 = cljs.core.inc.call(null,n__2056);
val__2055 = G__2065;
n__2056 = G__2066;
continue;
}
} else
{return val__2055;
}
break;
}
});
var ci_reduce__2061 = (function (cicoll,f,val,idx){
var val__2057 = val;
var n__2058 = idx;

while(true){
if(cljs.core.truth_(cljs.core.lt_.call(null,n__2058,cljs.core._count.call(null,cicoll))))
{{
var G__2067 = f.call(null,val__2057,cljs.core._nth.call(null,cicoll,n__2058));
var G__2068 = cljs.core.inc.call(null,n__2058);
val__2057 = G__2067;
n__2058 = G__2068;
continue;
}
} else
{return val__2057;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__2059.call(this,cicoll,f);
case  3 :
return ci_reduce__2060.call(this,cicoll,f,val);
case  4 :
return ci_reduce__2061.call(this,cicoll,f,val,idx);
}
throw('Invalid arity: ' + arguments.length);
};
return ci_reduce;
})()
;

/**
* @constructor
*/
cljs.core.IndexedSeq = (function (a,i){
this.a = a;
this.i = i;
})
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__2075 = null;
var G__2075__2076 = (function (_,f){
var this__2069 = this;
return cljs.core.ci_reduce.call(null,this__2069.a,f,(this__2069.a[this__2069.i]),cljs.core.inc.call(null,this__2069.i));
});
var G__2075__2077 = (function (_,f,start){
var this__2070 = this;
return cljs.core.ci_reduce.call(null,this__2070.a,f,start,this__2070.i);
});
G__2075 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__2075__2076.call(this,_,f);
case  3 :
return G__2075__2077.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2075;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__2071 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__2072 = this;
return (this__2072.a[this__2072.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__2073 = this;
if(cljs.core.truth_(cljs.core.lt_.call(null,cljs.core.inc.call(null,this__2073.i),cljs.core._count.call(null,this__2073.a))))
{return (new cljs.core.IndexedSeq(this__2073.a,cljs.core.inc.call(null,this__2073.i)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__2074 = this;
return this$;
});
cljs.core.prim_seq = (function prim_seq(prim,i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,prim))))
{return null;
} else
{return (new cljs.core.IndexedSeq(prim,i));
}
});
cljs.core.array_seq = (function array_seq(array,i){
return cljs.core.prim_seq.call(null,array,i);
});
(cljs.core.IReduce["array"] = true);
(cljs.core._reduce["array"] = (function() {
var G__2079 = null;
var G__2079__2080 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__2079__2081 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__2079 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__2079__2080.call(this,array,f);
case  3 :
return G__2079__2081.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2079;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__2083 = null;
var G__2083__2084 = (function (array,k){
return (array[k]);
});
var G__2083__2085 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__2083 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__2083__2084.call(this,array,k);
case  3 :
return G__2083__2085.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2083;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__2087 = null;
var G__2087__2088 = (function (array,n){
if(cljs.core.truth_(cljs.core.lt_.call(null,n,array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__2087__2089 = (function (array,n,not_found){
if(cljs.core.truth_(cljs.core.lt_.call(null,n,array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__2087 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__2087__2088.call(this,array,n);
case  3 :
return G__2087__2089.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2087;
})()
);
(cljs.core.ICounted["array"] = true);
(cljs.core._count["array"] = (function (a){
return a.length;
}));
(cljs.core.ISeqable["array"] = true);
(cljs.core._seq["array"] = (function (array){
return cljs.core.array_seq.call(null,array,0);
}));
/**
* Returns a seq on the collection. If the collection is
* empty, returns nil.  (seq nil) returns nil. seq also works on
* Strings.
*/
cljs.core.seq = (function seq(coll){
if(cljs.core.truth_(coll))
{return cljs.core._seq.call(null,coll);
} else
{return null;
}
});
/**
* Returns the first item in the collection. Calls seq on its
* argument. If coll is nil, returns nil.
*/
cljs.core.first = (function first(coll){
var temp__3726__auto____2091 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____2091))
{var s__2092 = temp__3726__auto____2091;

return cljs.core._first.call(null,s__2092);
} else
{return null;
}
});
/**
* Returns a possibly empty seq of the items after the first. Calls seq on its
* argument.
*/
cljs.core.rest = (function rest(coll){
return cljs.core._rest.call(null,cljs.core.seq.call(null,coll));
});
/**
* Returns a seq of the items after the first. Calls seq on its
* argument.  If there are no more items, returns nil
*/
cljs.core.next = (function next(coll){
if(cljs.core.truth_(coll))
{return cljs.core.seq.call(null,cljs.core.rest.call(null,coll));
} else
{return null;
}
});
/**
* Same as (first (next x))
*/
cljs.core.second = (function second(coll){
return cljs.core.first.call(null,cljs.core.next.call(null,coll));
});
/**
* Same as (first (first x))
*/
cljs.core.ffirst = (function ffirst(coll){
return cljs.core.first.call(null,cljs.core.first.call(null,coll));
});
/**
* Same as (next (first x))
*/
cljs.core.nfirst = (function nfirst(coll){
return cljs.core.next.call(null,cljs.core.first.call(null,coll));
});
/**
* Same as (first (next x))
*/
cljs.core.fnext = (function fnext(coll){
return cljs.core.first.call(null,cljs.core.next.call(null,coll));
});
/**
* Same as (next (next x))
*/
cljs.core.nnext = (function nnext(coll){
return cljs.core.next.call(null,cljs.core.next.call(null,coll));
});
/**
* Return the last item in coll, in linear time
*/
cljs.core.last = (function last(s){
while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s)))
{{
var G__2093 = cljs.core.next.call(null,s);
s = G__2093;
continue;
}
} else
{return cljs.core.first.call(null,s);
}
break;
}
});
(cljs.core.ICounted["_"] = true);
(cljs.core._count["_"] = (function (x){
var s__2094 = cljs.core.seq.call(null,x);
var n__2095 = 0;

while(true){
if(cljs.core.truth_(s__2094))
{{
var G__2096 = cljs.core.next.call(null,s__2094);
var G__2097 = cljs.core.inc.call(null,n__2095);
s__2094 = G__2096;
n__2095 = G__2097;
continue;
}
} else
{return n__2095;
}
break;
}
}));
(cljs.core.IEquiv["_"] = true);
(cljs.core._equiv["_"] = (function (x,o){
return cljs.core.identical_QMARK_.call(null,x,o);
}));
/**
* Returns true if x is logical false, false otherwise.
*/
cljs.core.not = (function not(x){
if(cljs.core.truth_(x))
{return false;
} else
{return true;
}
});
/**
* conj[oin]. Returns a new collection with the xs
* 'added'. (conj nil item) returns (item).  The 'addition' may
* happen at different 'places' depending on the concrete type.
* @param {...*} var_args
*/
cljs.core.conj = (function() {
var conj = null;
var conj__2098 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__2099 = (function (coll,x,var_args){
var xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
while(true){
if(cljs.core.truth_(xs))
{{
var G__2101 = conj.call(null,coll,x);
var G__2102 = cljs.core.first.call(null,xs);
var G__2103 = cljs.core.next.call(null,xs);
coll = G__2101;
x = G__2102;
xs = G__2103;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
});
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__2098.call(this,coll,x);
default:
return conj__2099.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = (function (arglist__2104){
var coll = cljs.core.first(arglist__2104);
var x = cljs.core.first(cljs.core.next(arglist__2104));
var xs = cljs.core.rest(cljs.core.next(arglist__2104));
return conj__2099.call(null, coll, x, xs);
});
return conj;
})()
;
/**
* Returns an empty collection of the same category as coll, or nil
*/
cljs.core.empty = (function empty(coll){
return cljs.core._empty.call(null,coll);
});
/**
* Returns the number of items in the collection. (count nil) returns
* 0.  Also works on strings, arrays, and Maps
*/
cljs.core.count = (function count(coll){
return cljs.core._count.call(null,coll);
});
/**
* Returns the value at the index. get returns nil if index out of
* bounds, nth throws an exception unless not-found is supplied.  nth
* also works for strings, arrays, regex Matchers and Lists, and,
* in O(n) time, for sequences.
*/
cljs.core.nth = (function() {
var nth = null;
var nth__2105 = (function (coll,n){
return cljs.core._nth.call(null,coll,n);
});
var nth__2106 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,n,not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__2105.call(this,coll,n);
case  3 :
return nth__2106.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return nth;
})()
;
/**
* Returns the value mapped to key, not-found or nil if key not present.
*/
cljs.core.get = (function() {
var get = null;
var get__2108 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__2109 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__2108.call(this,o,k);
case  3 :
return get__2109.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return get;
})()
;
/**
* assoc[iate]. When applied to a map, returns a new map of the
* same (hashed/sorted) type, that contains the mapping of key(s) to
* val(s). When applied to a vector, returns a new vector that
* contains val at index.
* @param {...*} var_args
*/
cljs.core.assoc = (function() {
var assoc = null;
var assoc__2112 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__2113 = (function (coll,k,v,var_args){
var kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
while(true){
var ret__2111 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__2115 = ret__2111;
var G__2116 = cljs.core.first.call(null,kvs);
var G__2117 = cljs.core.second.call(null,kvs);
var G__2118 = cljs.core.nnext.call(null,kvs);
coll = G__2115;
k = G__2116;
v = G__2117;
kvs = G__2118;
continue;
}
} else
{return ret__2111;
}
break;
}
});
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__2112.call(this,coll,k,v);
default:
return assoc__2113.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = (function (arglist__2119){
var coll = cljs.core.first(arglist__2119);
var k = cljs.core.first(cljs.core.next(arglist__2119));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2119)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2119)));
return assoc__2113.call(null, coll, k, v, kvs);
});
return assoc;
})()
;
/**
* dissoc[iate]. Returns a new map of the same (hashed/sorted) type,
* that does not contain a mapping for key(s).
* @param {...*} var_args
*/
cljs.core.dissoc = (function() {
var dissoc = null;
var dissoc__2121 = (function (coll){
return coll;
});
var dissoc__2122 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__2123 = (function (coll,k,var_args){
var ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
while(true){
var ret__2120 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__2125 = ret__2120;
var G__2126 = cljs.core.first.call(null,ks);
var G__2127 = cljs.core.next.call(null,ks);
coll = G__2125;
k = G__2126;
ks = G__2127;
continue;
}
} else
{return ret__2120;
}
break;
}
});
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__2121.call(this,coll);
case  2 :
return dissoc__2122.call(this,coll,k);
default:
return dissoc__2123.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = (function (arglist__2128){
var coll = cljs.core.first(arglist__2128);
var k = cljs.core.first(cljs.core.next(arglist__2128));
var ks = cljs.core.rest(cljs.core.next(arglist__2128));
return dissoc__2123.call(null, coll, k, ks);
});
return dissoc;
})()
;
/**
* Returns an object of the same type and value as obj, with
* map m as its metadata.
*/
cljs.core.with_meta = (function with_meta(o,meta){
return cljs.core._with_meta.call(null,o,meta);
});
/**
* Returns the metadata of obj, returns nil if there is no metadata.
*/
cljs.core.meta = (function meta(o){
return cljs.core._meta.call(null,o);
});
/**
* For a list or queue, same as first, for a vector, same as, but much
* more efficient than, last. If the collection is empty, returns nil.
*/
cljs.core.peek = (function peek(coll){
return cljs.core._peek.call(null,coll);
});
/**
* For a list or queue, returns a new list/queue without the first
* item, for a vector, returns a new vector without the last item.
* Note - not the same as next/butlast.
*/
cljs.core.pop = (function pop(coll){
return cljs.core._pop.call(null,coll);
});
/**
* disj[oin]. Returns a new set of the same (hashed/sorted) type, that
* does not contain key(s).
* @param {...*} var_args
*/
cljs.core.disj = (function() {
var disj = null;
var disj__2130 = (function (coll){
return coll;
});
var disj__2131 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__2132 = (function (coll,k,var_args){
var ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
while(true){
var ret__2129 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__2134 = ret__2129;
var G__2135 = cljs.core.first.call(null,ks);
var G__2136 = cljs.core.next.call(null,ks);
coll = G__2134;
k = G__2135;
ks = G__2136;
continue;
}
} else
{return ret__2129;
}
break;
}
});
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__2130.call(this,coll);
case  2 :
return disj__2131.call(this,coll,k);
default:
return disj__2132.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = (function (arglist__2137){
var coll = cljs.core.first(arglist__2137);
var k = cljs.core.first(cljs.core.next(arglist__2137));
var ks = cljs.core.rest(cljs.core.next(arglist__2137));
return disj__2132.call(null, coll, k, ks);
});
return disj;
})()
;
cljs.core.hash = (function hash(o){
return cljs.core._hash.call(null,o);
});
/**
* Returns true if coll has no items - same as (not (seq coll)).
* Please use the idiom (seq x) rather than (not (empty? x))
*/
cljs.core.empty_QMARK_ = (function empty_QMARK_(coll){
return cljs.core.not.call(null,cljs.core.seq.call(null,coll));
});
/**
* Returns true if x satisfies ICollection
*/
cljs.core.coll_QMARK_ = (function coll_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__105__auto____2138 = x;

if(cljs.core.truth_((function (){var and__3574__auto____2139 = x__105__auto____2138;

if(cljs.core.truth_(and__3574__auto____2139))
{return x__105__auto____2138.cljs$core$ICollection$;
} else
{return and__3574__auto____2139;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__105__auto____2138);
}
}
});
/**
* Returns true if x satisfies ISet
*/
cljs.core.set_QMARK_ = (function set_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__105__auto____2140 = x;

if(cljs.core.truth_((function (){var and__3574__auto____2141 = x__105__auto____2140;

if(cljs.core.truth_(and__3574__auto____2141))
{return x__105__auto____2140.cljs$core$ISet$;
} else
{return and__3574__auto____2141;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__105__auto____2140);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__105__auto____2142 = x;

if(cljs.core.truth_((function (){var and__3574__auto____2143 = x__105__auto____2142;

if(cljs.core.truth_(and__3574__auto____2143))
{return x__105__auto____2142.cljs$core$IAssociative$;
} else
{return and__3574__auto____2143;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__105__auto____2142);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__105__auto____2144 = x;

if(cljs.core.truth_((function (){var and__3574__auto____2145 = x__105__auto____2144;

if(cljs.core.truth_(and__3574__auto____2145))
{return x__105__auto____2144.cljs$core$ISequential$;
} else
{return and__3574__auto____2145;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__105__auto____2144);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__105__auto____2146 = x;

if(cljs.core.truth_((function (){var and__3574__auto____2147 = x__105__auto____2146;

if(cljs.core.truth_(and__3574__auto____2147))
{return x__105__auto____2146.cljs$core$ICounted$;
} else
{return and__3574__auto____2147;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__105__auto____2146);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__105__auto____2148 = x;

if(cljs.core.truth_((function (){var and__3574__auto____2149 = x__105__auto____2148;

if(cljs.core.truth_(and__3574__auto____2149))
{return x__105__auto____2148.cljs$core$IMap$;
} else
{return and__3574__auto____2149;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__105__auto____2148);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__105__auto____2150 = x;

if(cljs.core.truth_((function (){var and__3574__auto____2151 = x__105__auto____2150;

if(cljs.core.truth_(and__3574__auto____2151))
{return x__105__auto____2150.cljs$core$IVector$;
} else
{return and__3574__auto____2151;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__105__auto____2150);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__2152 = cljs.core.array.call(null);

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__2152.push(key);
}));
return keys__2152;
});
cljs.core.js_delete = (function js_delete(obj,key){
return delete obj[key];
});
cljs.core.lookup_sentinel = cljs.core.js_obj.call(null);
/**
* Returns true if x is the value false, false otherwise.
*/
cljs.core.false_QMARK_ = (function false_QMARK_(x){
return x === false;
});
/**
* Returns true if x is the value true, false otherwise.
*/
cljs.core.true_QMARK_ = (function true_QMARK_(x){
return x === true;
});
cljs.core.undefined_QMARK_ = (function undefined_QMARK_(x){
return (void 0 === x);
});
cljs.core.instance_QMARK_ = (function instance_QMARK_(t,o){
return (o instanceof t);
});
/**
* Return true if s satisfies ISeq
*/
cljs.core.seq_QMARK_ = (function seq_QMARK_(s){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,s)))
{return false;
} else
{var x__105__auto____2153 = s;

if(cljs.core.truth_((function (){var and__3574__auto____2154 = x__105__auto____2153;

if(cljs.core.truth_(and__3574__auto____2154))
{return x__105__auto____2153.cljs$core$ISeq$;
} else
{return and__3574__auto____2154;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__105__auto____2153);
}
}
});
cljs.core.boolean$ = (function boolean$(x){
if(cljs.core.truth_(x))
{return true;
} else
{return false;
}
});
cljs.core.string_QMARK_ = (function string_QMARK_(x){
var and__3574__auto____2155 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3574__auto____2155))
{return cljs.core.not.call(null,(function (){var or__3576__auto____2156 = cljs.core._EQ_.call(null,x.charAt(0),"﷐");

if(cljs.core.truth_(or__3576__auto____2156))
{return or__3576__auto____2156;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
}
})());
} else
{return and__3574__auto____2155;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3574__auto____2157 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3574__auto____2157))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷐");
} else
{return and__3574__auto____2157;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3574__auto____2158 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3574__auto____2158))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
} else
{return and__3574__auto____2158;
}
});
cljs.core.number_QMARK_ = (function number_QMARK_(n){
return goog.isNumber.call(null,n);
});
cljs.core.fn_QMARK_ = (function fn_QMARK_(f){
return goog.isFunction.call(null,f);
});
/**
* Returns true if n is an integer.  Warning: returns true on underflow condition.
*/
cljs.core.integer_QMARK_ = (function integer_QMARK_(n){
var and__3574__auto____2159 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3574__auto____2159))
{return (n == n.toFixed());
} else
{return and__3574__auto____2159;
}
});
/**
* Returns true if key is present in the given collection, otherwise
* returns false.  Note that for numerically indexed collections like
* vectors and arrays, this tests if the numeric key is within the
* range of indexes. 'contains?' operates constant or logarithmic time;
* it will not perform a linear search for a value.  See also 'some'.
*/
cljs.core.contains_QMARK_ = (function contains_QMARK_(coll,v){
if(cljs.core.truth_(cljs.core.identical_QMARK_.call(null,cljs.core._lookup.call(null,coll,v,cljs.core.lookup_sentinel),cljs.core.lookup_sentinel)))
{return false;
} else
{return true;
}
});
/**
* Returns the map entry for key, or nil if key not present.
*/
cljs.core.find = (function find(coll,k){
if(cljs.core.truth_((function (){var and__3574__auto____2160 = coll;

if(cljs.core.truth_(and__3574__auto____2160))
{var and__3574__auto____2161 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3574__auto____2161))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3574__auto____2161;
}
} else
{return and__3574__auto____2160;
}
})()))
{return cljs.core.Vector.fromArray([k,cljs.core._lookup.call(null,coll,k)]);
} else
{return null;
}
});
/**
* Returns true if no two of the arguments are =
* @param {...*} var_args
*/
cljs.core.distinct_QMARK_ = (function() {
var distinct_QMARK_ = null;
var distinct_QMARK___2166 = (function (x){
return true;
});
var distinct_QMARK___2167 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___2168 = (function (x,y,var_args){
var more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__2162 = cljs.core.set([y,x]);
var xs__2163 = more;

while(true){
var x__2164 = cljs.core.first.call(null,xs__2163);
var etc__2165 = cljs.core.next.call(null,xs__2163);

if(cljs.core.truth_(xs__2163))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__2162,x__2164)))
{return false;
} else
{{
var G__2170 = cljs.core.conj.call(null,s__2162,x__2164);
var G__2171 = etc__2165;
s__2162 = G__2170;
xs__2163 = G__2171;
continue;
}
}
} else
{return true;
}
break;
}
} else
{return false;
}
});
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___2166.call(this,x);
case  2 :
return distinct_QMARK___2167.call(this,x,y);
default:
return distinct_QMARK___2168.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = (function (arglist__2172){
var x = cljs.core.first(arglist__2172);
var y = cljs.core.first(cljs.core.next(arglist__2172));
var more = cljs.core.rest(cljs.core.next(arglist__2172));
return distinct_QMARK___2168.call(null, x, y, more);
});
return distinct_QMARK_;
})()
;
/**
* Comparator. Returns a negative number, zero, or a positive number
* when x is logically 'less than', 'equal to', or 'greater than'
* y. Uses google.array.defaultCompare.
*/
cljs.core.compare = (function compare(x,y){
return goog.array.defaultCompare.call(null,x,y);
});
/**
* Given a fn that might be boolean valued or a comparator,
* return a fn that is a comparator.
*/
cljs.core.fn__GT_comparator = (function fn__GT_comparator(f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,f,cljs.core.compare)))
{return cljs.core.compare;
} else
{return (function (x,y){
var r__2173 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__2173)))
{return r__2173;
} else
{if(cljs.core.truth_(r__2173))
{return -1;
} else
{if(cljs.core.truth_(f.call(null,y,x)))
{return 1;
} else
{return 0;
}
}
}
});
}
});
/**
* Returns a sorted sequence of the items in coll. Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort = (function() {
var sort = null;
var sort__2175 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__2176 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__2174 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__2174,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__2174);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__2175.call(this,comp);
case  2 :
return sort__2176.call(this,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return sort;
})()
;
/**
* Returns a sorted sequence of the items in coll, where the sort
* order is determined by comparing (keyfn item).  Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort_by = (function() {
var sort_by = null;
var sort_by__2178 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__2179 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__2178.call(this,keyfn,comp);
case  3 :
return sort_by__2179.call(this,keyfn,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return sort_by;
})()
;
/**
* f should be a function of 2 arguments. If val is not supplied,
* returns the result of applying f to the first 2 items in coll, then
* applying f to that result and the 3rd item, etc. If coll contains no
* items, f must accept no arguments as well, and reduce returns the
* result of calling f with no arguments.  If coll has only 1 item, it
* is returned and f is not called.  If val is supplied, returns the
* result of applying f to val and the first item in coll, then
* applying f to that result and the 2nd item, etc. If coll contains no
* items, returns val and f is not called.
*/
cljs.core.reduce = (function() {
var reduce = null;
var reduce__2181 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__2182 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__2181.call(this,f,val);
case  3 :
return reduce__2182.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__2188 = (function (f,coll){
var temp__3723__auto____2184 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3723__auto____2184))
{var s__2185 = temp__3723__auto____2184;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__2185),cljs.core.next.call(null,s__2185));
} else
{return f.call(null);
}
});
var seq_reduce__2189 = (function (f,val,coll){
var val__2186 = val;
var coll__2187 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__2187))
{{
var G__2191 = f.call(null,val__2186,cljs.core.first.call(null,coll__2187));
var G__2192 = cljs.core.next.call(null,coll__2187);
val__2186 = G__2191;
coll__2187 = G__2192;
continue;
}
} else
{return val__2186;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__2188.call(this,f,val);
case  3 :
return seq_reduce__2189.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__2193 = null;
var G__2193__2194 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__2193__2195 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__2193 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__2193__2194.call(this,coll,f);
case  3 :
return G__2193__2195.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2193;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___2197 = (function (){
return 0;
});
var _PLUS___2198 = (function (x){
return x;
});
var _PLUS___2199 = (function (x,y){
return (x + y);
});
var _PLUS___2200 = (function (x,y,var_args){
var more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
return cljs.core.reduce.call(null,_PLUS_,_PLUS_.call(null,x,y),more);
});
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___2197.call(this);
case  1 :
return _PLUS___2198.call(this,x);
case  2 :
return _PLUS___2199.call(this,x,y);
default:
return _PLUS___2200.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = (function (arglist__2202){
var x = cljs.core.first(arglist__2202);
var y = cljs.core.first(cljs.core.next(arglist__2202));
var more = cljs.core.rest(cljs.core.next(arglist__2202));
return _PLUS___2200.call(null, x, y, more);
});
return _PLUS_;
})()
;
/**
* If no ys are supplied, returns the negation of x, else subtracts
* the ys from x and returns the result.
* @param {...*} var_args
*/
cljs.core._ = (function() {
var _ = null;
var ___2203 = (function (x){
return (- x);
});
var ___2204 = (function (x,y){
return (x - y);
});
var ___2205 = (function (x,y,var_args){
var more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
return cljs.core.reduce.call(null,_,_.call(null,x,y),more);
});
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___2203.call(this,x);
case  2 :
return ___2204.call(this,x,y);
default:
return ___2205.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = (function (arglist__2207){
var x = cljs.core.first(arglist__2207);
var y = cljs.core.first(cljs.core.next(arglist__2207));
var more = cljs.core.rest(cljs.core.next(arglist__2207));
return ___2205.call(null, x, y, more);
});
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___2208 = (function (){
return 1;
});
var _STAR___2209 = (function (x){
return x;
});
var _STAR___2210 = (function (x,y){
return (x * y);
});
var _STAR___2211 = (function (x,y,var_args){
var more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
return cljs.core.reduce.call(null,_STAR_,_STAR_.call(null,x,y),more);
});
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___2208.call(this);
case  1 :
return _STAR___2209.call(this,x);
case  2 :
return _STAR___2210.call(this,x,y);
default:
return _STAR___2211.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = (function (arglist__2213){
var x = cljs.core.first(arglist__2213);
var y = cljs.core.first(cljs.core.next(arglist__2213));
var more = cljs.core.rest(cljs.core.next(arglist__2213));
return _STAR___2211.call(null, x, y, more);
});
return _STAR_;
})()
;
/**
* If no denominators are supplied, returns 1/numerator,
* else returns numerator divided by all of the denominators.
* @param {...*} var_args
*/
cljs.core._SLASH_ = (function() {
var _SLASH_ = null;
var _SLASH___2214 = (function (x){
return (1 / x);
});
var _SLASH___2215 = (function (x,y){
return (x / y);
});
var _SLASH___2216 = (function (x,y,var_args){
var more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
});
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___2214.call(this,x);
case  2 :
return _SLASH___2215.call(this,x,y);
default:
return _SLASH___2216.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = (function (arglist__2218){
var x = cljs.core.first(arglist__2218);
var y = cljs.core.first(cljs.core.next(arglist__2218));
var more = cljs.core.rest(cljs.core.next(arglist__2218));
return _SLASH___2216.call(null, x, y, more);
});
return _SLASH_;
})()
;
/**
* Returns non-nil if nums are in monotonically increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT_ = (function() {
var _LT_ = null;
var _LT___2219 = (function (x){
return true;
});
var _LT___2220 = (function (x,y){
return (x < y);
});
var _LT___2221 = (function (x,y,var_args){
var more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
while(true){
if(cljs.core.truth_(_LT_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__2223 = y;
var G__2224 = cljs.core.first.call(null,more);
var G__2225 = cljs.core.next.call(null,more);
x = G__2223;
y = G__2224;
more = G__2225;
continue;
}
} else
{return _LT_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
});
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___2219.call(this,x);
case  2 :
return _LT___2220.call(this,x,y);
default:
return _LT___2221.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = (function (arglist__2226){
var x = cljs.core.first(arglist__2226);
var y = cljs.core.first(cljs.core.next(arglist__2226));
var more = cljs.core.rest(cljs.core.next(arglist__2226));
return _LT___2221.call(null, x, y, more);
});
return _LT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT__EQ_ = (function() {
var _LT__EQ_ = null;
var _LT__EQ___2227 = (function (x){
return true;
});
var _LT__EQ___2228 = (function (x,y){
return (x <= y);
});
var _LT__EQ___2229 = (function (x,y,var_args){
var more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
while(true){
if(cljs.core.truth_(_LT__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__2231 = y;
var G__2232 = cljs.core.first.call(null,more);
var G__2233 = cljs.core.next.call(null,more);
x = G__2231;
y = G__2232;
more = G__2233;
continue;
}
} else
{return _LT__EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
});
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___2227.call(this,x);
case  2 :
return _LT__EQ___2228.call(this,x,y);
default:
return _LT__EQ___2229.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = (function (arglist__2234){
var x = cljs.core.first(arglist__2234);
var y = cljs.core.first(cljs.core.next(arglist__2234));
var more = cljs.core.rest(cljs.core.next(arglist__2234));
return _LT__EQ___2229.call(null, x, y, more);
});
return _LT__EQ_;
})()
;
/**
* Returns non-nil if nums are in monotonically decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT_ = (function() {
var _GT_ = null;
var _GT___2235 = (function (x){
return true;
});
var _GT___2236 = (function (x,y){
return (x > y);
});
var _GT___2237 = (function (x,y,var_args){
var more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
while(true){
if(cljs.core.truth_(_GT_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__2239 = y;
var G__2240 = cljs.core.first.call(null,more);
var G__2241 = cljs.core.next.call(null,more);
x = G__2239;
y = G__2240;
more = G__2241;
continue;
}
} else
{return _GT_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
});
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___2235.call(this,x);
case  2 :
return _GT___2236.call(this,x,y);
default:
return _GT___2237.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = (function (arglist__2242){
var x = cljs.core.first(arglist__2242);
var y = cljs.core.first(cljs.core.next(arglist__2242));
var more = cljs.core.rest(cljs.core.next(arglist__2242));
return _GT___2237.call(null, x, y, more);
});
return _GT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT__EQ_ = (function() {
var _GT__EQ_ = null;
var _GT__EQ___2243 = (function (x){
return true;
});
var _GT__EQ___2244 = (function (x,y){
return (x >= y);
});
var _GT__EQ___2245 = (function (x,y,var_args){
var more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
while(true){
if(cljs.core.truth_(_GT__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__2247 = y;
var G__2248 = cljs.core.first.call(null,more);
var G__2249 = cljs.core.next.call(null,more);
x = G__2247;
y = G__2248;
more = G__2249;
continue;
}
} else
{return _GT__EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
});
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___2243.call(this,x);
case  2 :
return _GT__EQ___2244.call(this,x,y);
default:
return _GT__EQ___2245.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = (function (arglist__2250){
var x = cljs.core.first(arglist__2250);
var y = cljs.core.first(cljs.core.next(arglist__2250));
var more = cljs.core.rest(cljs.core.next(arglist__2250));
return _GT__EQ___2245.call(null, x, y, more);
});
return _GT__EQ_;
})()
;
/**
* Returns a number one less than num.
*/
cljs.core.dec = (function dec(x){
return cljs.core._.call(null,x,1);
});
/**
* Returns the greatest of the nums.
* @param {...*} var_args
*/
cljs.core.max = (function() {
var max = null;
var max__2251 = (function (x){
return x;
});
var max__2252 = (function (x,y){
return ((x > y) ? x : y);
});
var max__2253 = (function (x,y,var_args){
var more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
return cljs.core.reduce.call(null,max,max.call(null,x,y),more);
});
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__2251.call(this,x);
case  2 :
return max__2252.call(this,x,y);
default:
return max__2253.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = (function (arglist__2255){
var x = cljs.core.first(arglist__2255);
var y = cljs.core.first(cljs.core.next(arglist__2255));
var more = cljs.core.rest(cljs.core.next(arglist__2255));
return max__2253.call(null, x, y, more);
});
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__2256 = (function (x){
return x;
});
var min__2257 = (function (x,y){
return ((x < y) ? x : y);
});
var min__2258 = (function (x,y,var_args){
var more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
return cljs.core.reduce.call(null,min,min.call(null,x,y),more);
});
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__2256.call(this,x);
case  2 :
return min__2257.call(this,x,y);
default:
return min__2258.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = (function (arglist__2260){
var x = cljs.core.first(arglist__2260);
var y = cljs.core.first(cljs.core.next(arglist__2260));
var more = cljs.core.rest(cljs.core.next(arglist__2260));
return min__2258.call(null, x, y, more);
});
return min;
})()
;
cljs.core.fix = (function fix(q){
if(cljs.core.truth_(cljs.core._GT__EQ_.call(null,q,0)))
{return Math.floor.call(null,q);
} else
{return Math.ceil.call(null,q);
}
});
/**
* Modulus of num and div. Truncates toward negative infinity.
*/
cljs.core.mod = (function mod(n,d){
return (n % d);
});
/**
* quot[ient] of dividing numerator by denominator.
*/
cljs.core.quot = (function quot(n,d){
var rem__2261 = cljs.core.mod.call(null,n,d);

return cljs.core.fix.call(null,((n - rem__2261) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__2262 = cljs.core.quot.call(null,n,d);

return (n - (d * q__2262));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__2263 = (function (){
return Math.random.call(null);
});
var rand__2264 = (function (n){
return cljs.core._STAR_.call(null,n,rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__2263.call(this);
case  1 :
return rand__2264.call(this,n);
}
throw('Invalid arity: ' + arguments.length);
};
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return cljs.core.fix.call(null,cljs.core.rand.call(null,n));
});
/**
* Bitwise exclusive or
*/
cljs.core.bit_xor = (function bit_xor(x,y){
return (x ^ y);
});
/**
* Bitwise and
*/
cljs.core.bit_and = (function bit_and(x,y){
return (x & y);
});
/**
* Bitwise or
*/
cljs.core.bit_or = (function bit_or(x,y){
return (x | y);
});
/**
* Bitwise and
*/
cljs.core.bit_and_not = (function bit_and_not(x,y){
return (x & ~y);
});
/**
* Clear bit at index n
*/
cljs.core.bit_clear = (function bit_clear(x,n){
return (x & ~(1 << n));
});
/**
* Flip bit at index n
*/
cljs.core.bit_flip = (function bit_flip(x,n){
return (x ^ (1 << n));
});
/**
* Bitwise complement
*/
cljs.core.bit_not = (function bit_not(x){
return (~x);
});
/**
* Set bit at index n
*/
cljs.core.bit_set = (function bit_set(x,n){
return (x | (1 << n));
});
/**
* Test bit at index n
*/
cljs.core.bit_test = (function bit_test(x,n){
return ((x & (1 << n)) != 0);
});
/**
* Bitwise shift left
*/
cljs.core.bit_shift_left = (function bit_shift_left(x,n){
return (x << n);
});
/**
* Bitwise shift right
*/
cljs.core.bit_shift_right = (function bit_shift_right(x,n){
return (x >> n);
});
/**
* Returns non-nil if nums all have the equivalent
* value (type-independent), otherwise false
* @param {...*} var_args
*/
cljs.core._EQ__EQ_ = (function() {
var _EQ__EQ_ = null;
var _EQ__EQ___2266 = (function (x){
return true;
});
var _EQ__EQ___2267 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___2268 = (function (x,y,var_args){
var more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__2270 = y;
var G__2271 = cljs.core.first.call(null,more);
var G__2272 = cljs.core.next.call(null,more);
x = G__2270;
y = G__2271;
more = G__2272;
continue;
}
} else
{return _EQ__EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
});
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___2266.call(this,x);
case  2 :
return _EQ__EQ___2267.call(this,x,y);
default:
return _EQ__EQ___2268.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = (function (arglist__2273){
var x = cljs.core.first(arglist__2273);
var y = cljs.core.first(cljs.core.next(arglist__2273));
var more = cljs.core.rest(cljs.core.next(arglist__2273));
return _EQ__EQ___2268.call(null, x, y, more);
});
return _EQ__EQ_;
})()
;
/**
* Returns true if num is greater than zero, else false
*/
cljs.core.pos_QMARK_ = (function pos_QMARK_(n){
return cljs.core._LT_.call(null,0,n);
});
cljs.core.zero_QMARK_ = (function zero_QMARK_(n){
return cljs.core._EQ__EQ_.call(null,0,n);
});
/**
* Returns true if num is less than zero, else false
*/
cljs.core.neg_QMARK_ = (function neg_QMARK_(x){
return (x < 0);
});
/**
* Returns the nth next of coll, (seq coll) when n is 0.
*/
cljs.core.nthnext = (function nthnext(coll,n){
var n__2274 = n;
var xs__2275 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3574__auto____2276 = xs__2275;

if(cljs.core.truth_(and__3574__auto____2276))
{return cljs.core.pos_QMARK_.call(null,n__2274);
} else
{return and__3574__auto____2276;
}
})()))
{{
var G__2277 = cljs.core.dec.call(null,n__2274);
var G__2278 = cljs.core.next.call(null,xs__2275);
n__2274 = G__2277;
xs__2275 = G__2278;
continue;
}
} else
{return xs__2275;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__2283 = null;
var G__2283__2284 = (function (coll,n){
var temp__3723__auto____2279 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3723__auto____2279))
{var xs__2280 = temp__3723__auto____2279;

return cljs.core.first.call(null,xs__2280);
} else
{throw "Index out of bounds";
}
});
var G__2283__2285 = (function (coll,n,not_found){
var temp__3723__auto____2281 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3723__auto____2281))
{var xs__2282 = temp__3723__auto____2281;

return cljs.core.first.call(null,xs__2282);
} else
{return not_found;
}
});
G__2283 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__2283__2284.call(this,coll,n);
case  3 :
return G__2283__2285.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2283;
})()
);
/**
* With no args, returns the empty string. With one arg x, returns
* x.toString().  (str nil) returns the empty string. With more than
* one arg, returns the concatenation of the str values of the args.
* @param {...*} var_args
*/
cljs.core.str = (function() {
var str = null;
var str__2287 = (function (){
return "";
});
var str__2288 = (function (x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return "";
} else
{return x.toString();
}
});
var str__2289 = (function (x,var_args){
var ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__2291 = sb.append(str.call(null,cljs.core.first.call(null,more)));
var G__2292 = cljs.core.next.call(null,more);
sb = G__2291;
more = G__2292;
continue;
}
} else
{return str.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str.call(null,x))),ys);
});
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__2287.call(this);
case  1 :
return str__2288.call(this,x);
default:
return str__2289.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = (function (arglist__2293){
var x = cljs.core.first(arglist__2293);
var ys = cljs.core.rest(arglist__2293);
return str__2289.call(null, x, ys);
});
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__2294 = (function (s,start){
return s.substring(start);
});
var subs__2295 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__2294.call(this,s,start);
case  3 :
return subs__2295.call(this,s,start,end);
}
throw('Invalid arity: ' + arguments.length);
};
return subs;
})()
;
/**
* Returns a Symbol with the given namespace and name.
*/
cljs.core.symbol = (function() {
var symbol = null;
var symbol__2297 = (function (name){
if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,name)))
{return name;
} else
{if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,name)))
{return cljs.core.str.call(null,"﷑","'",cljs.core.subs.call(null,name,2));
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.str.call(null,"﷑","'",name);
} else
{return null;
}
}
}
});
var symbol__2298 = (function (ns,name){
return symbol.call(null,cljs.core.str.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__2297.call(this,ns);
case  2 :
return symbol__2298.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
return symbol;
})()
;
/**
* Returns a Keyword with the given namespace and name.  Do not use :
* in the keyword strings, it will be added automatically.
*/
cljs.core.keyword = (function() {
var keyword = null;
var keyword__2300 = (function (name){
if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,name)))
{return name;
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,name)))
{return cljs.core.str.call(null,"﷐","'",cljs.core.subs.call(null,name,2));
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.str.call(null,"﷐","'",name);
} else
{return null;
}
}
}
});
var keyword__2301 = (function (ns,name){
return keyword.call(null,cljs.core.str.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__2300.call(this,ns);
case  2 :
return keyword__2301.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
return keyword;
})()
;
/**
* Assumes x is sequential. Returns true if x equals y, otherwise
* returns false.
*/
cljs.core.equiv_sequential = (function equiv_sequential(x,y){
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__2303 = cljs.core.seq.call(null,x);
var ys__2304 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,xs__2303)))
{return cljs.core.nil_QMARK_.call(null,ys__2304);
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,ys__2304)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__2303),cljs.core.first.call(null,ys__2304))))
{{
var G__2305 = cljs.core.next.call(null,xs__2303);
var G__2306 = cljs.core.next.call(null,ys__2304);
xs__2303 = G__2305;
ys__2304 = G__2306;
continue;
}
} else
{if(cljs.core.truth_("﷐'else"))
{return false;
} else
{return null;
}
}
}
}
break;
}
})():null));
});
cljs.core.hash_combine = (function hash_combine(seed,hash){
return cljs.core.bit_xor.call(null,seed,cljs.core._PLUS_.call(null,hash,2654435769,cljs.core.bit_shift_left.call(null,seed,6),cljs.core.bit_shift_right.call(null,seed,2)));
});
cljs.core.hash_coll = (function hash_coll(coll){
return cljs.core.reduce.call(null,(function (p1__2307_SHARP_,p2__2308_SHARP_){
return cljs.core.hash_combine.call(null,p1__2307_SHARP_,cljs.core.hash.call(null,p2__2308_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});

/**
* @constructor
*/
cljs.core.List = (function (meta,first,rest,count){
this.meta = meta;
this.first = first;
this.rest = rest;
this.count = count;
})
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__2309 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__2310 = this;
return (new cljs.core.List(this__2310.meta,o,coll,cljs.core.inc.call(null,this__2310.count)));
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__2311 = this;
return this__2311.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__2312 = this;
return this__2312.rest;
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__2313 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__2314 = this;
return this__2314.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__2315 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__2316 = this;
return (new cljs.core.List(meta,this__2316.first,this__2316.rest,this__2316.count));
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__2317 = this;
return cljs.core.List.EMPTY;
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__2318 = this;
return this__2318.meta;
});
cljs.core.List.prototype.cljs$core$IHash$ = true;
cljs.core.List.prototype.cljs$core$IHash$_hash = (function (coll){
var this__2319 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__2320 = this;
return this__2320.count;
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;

/**
* @constructor
*/
cljs.core.EmptyList = (function (meta){
this.meta = meta;
})
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__2321 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__2322 = this;
return (new cljs.core.List(this__2322.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__2323 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__2324 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__2325 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__2326 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__2327 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__2328 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__2329 = this;
return coll;
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__2330 = this;
return this__2330.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IHash$ = true;
cljs.core.EmptyList.prototype.cljs$core$IHash$_hash = (function (coll){
var this__2331 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__2332 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.List.EMPTY = (new cljs.core.EmptyList(null));
/**
* Returns a seq of the items in coll in reverse order. Not lazy.
*/
cljs.core.reverse = (function reverse(coll){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,coll);
});
/**
* @param {...*} var_args
*/
cljs.core.list = (function list(var_args){
var items = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,cljs.core.reverse.call(null,items));
});

/**
* @constructor
*/
cljs.core.Cons = (function (meta,first,rest){
this.meta = meta;
this.first = first;
this.rest = rest;
})
cljs.core.Cons.prototype.cljs$core$ISeqable$ = true;
cljs.core.Cons.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__2333 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__2334 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__2335 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__2336 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__2336.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__2337 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__2338 = this;
return this__2338.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__2339 = this;
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__2339.rest)))
{return cljs.core.List.EMPTY;
} else
{return this__2339.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__2340 = this;
return this__2340.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__2341 = this;
return (new cljs.core.Cons(meta,this__2341.first,this__2341.rest));
});
/**
* Returns a new seq where x is the first element and seq is the rest.
*/
cljs.core.cons = (function cons(x,seq){
return (new cljs.core.Cons(null,x,seq));
});
(cljs.core.IReduce["string"] = true);
(cljs.core._reduce["string"] = (function() {
var G__2342 = null;
var G__2342__2343 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__2342__2344 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__2342 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__2342__2343.call(this,string,f);
case  3 :
return G__2342__2344.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2342;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__2346 = null;
var G__2346__2347 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__2346__2348 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__2346 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__2346__2347.call(this,string,k);
case  3 :
return G__2346__2348.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2346;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__2350 = null;
var G__2350__2351 = (function (string,n){
if(cljs.core.truth_(cljs.core._LT_.call(null,n,cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__2350__2352 = (function (string,n,not_found){
if(cljs.core.truth_(cljs.core._LT_.call(null,n,cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__2350 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__2350__2351.call(this,string,n);
case  3 :
return G__2350__2352.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2350;
})()
);
(cljs.core.ICounted["string"] = true);
(cljs.core._count["string"] = (function (s){
return s.length;
}));
(cljs.core.ISeqable["string"] = true);
(cljs.core._seq["string"] = (function (string){
return cljs.core.prim_seq.call(null,string,0);
}));
(cljs.core.IHash["string"] = true);
(cljs.core._hash["string"] = (function (o){
return goog.string.hashCode.call(null,o);
}));
goog.global['String']['prototype']['call'] = (function() {
var G__2354 = null;
var G__2354__2355 = (function (_,coll){
return cljs.core.get.call(null,coll,this.toString());
});
var G__2354__2356 = (function (_,coll,not_found){
return cljs.core.get.call(null,coll,this.toString(),not_found);
});
G__2354 = function(_,coll,not_found){
switch(arguments.length){
case  2 :
return G__2354__2355.call(this,_,coll);
case  3 :
return G__2354__2356.call(this,_,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2354;
})()
;
cljs.core.lazy_seq_value = (function lazy_seq_value(lazy_seq){
var x__2358 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__2358;
} else
{lazy_seq.x = x__2358.call(null);
lazy_seq.realized = true;
return lazy_seq.x;
}
});

/**
* @constructor
*/
cljs.core.LazySeq = (function (meta,realized,x){
this.meta = meta;
this.realized = realized;
this.x = x;
})
cljs.core.LazySeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__2359 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__2360 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__2361 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__2362 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__2362.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__2363 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__2364 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__2365 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__2366 = this;
return this__2366.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__2367 = this;
return (new cljs.core.LazySeq(meta,this__2367.realized,this__2367.x));
});
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__2368 = cljs.core.array.call(null);

var s__2369 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__2369)))
{ary__2368.push(cljs.core.first.call(null,s__2369));
{
var G__2370 = cljs.core.next.call(null,s__2369);
s__2369 = G__2370;
continue;
}
} else
{return ary__2368;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__2371 = s;
var i__2372 = n;
var sum__2373 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3574__auto____2374 = cljs.core.pos_QMARK_.call(null,i__2372);

if(cljs.core.truth_(and__3574__auto____2374))
{return cljs.core.seq.call(null,s__2371);
} else
{return and__3574__auto____2374;
}
})()))
{{
var G__2375 = cljs.core.next.call(null,s__2371);
var G__2376 = cljs.core.dec.call(null,i__2372);
var G__2377 = cljs.core.inc.call(null,sum__2373);
s__2371 = G__2375;
i__2372 = G__2376;
sum__2373 = G__2377;
continue;
}
} else
{return sum__2373;
}
break;
}
});
cljs.core.spread = (function spread(arglist){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,arglist)))
{return null;
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.next.call(null,arglist))))
{return cljs.core.seq.call(null,cljs.core.first.call(null,arglist));
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.cons.call(null,cljs.core.first.call(null,arglist),spread.call(null,cljs.core.next.call(null,arglist)));
} else
{return null;
}
}
}
});
/**
* Returns a lazy seq representing the concatenation of the elements in the supplied colls.
* @param {...*} var_args
*/
cljs.core.concat = (function() {
var concat = null;
var concat__2381 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__2382 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__2383 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__2378 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__2378))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__2378),concat.call(null,cljs.core.rest.call(null,s__2378),y));
} else
{return y;
}
})));
});
var concat__2384 = (function (x,y,var_args){
var zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
var cat__2380 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__2379 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__2379))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__2379),cat.call(null,cljs.core.rest.call(null,xys__2379),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__2380.call(null,concat.call(null,x,y),zs);
});
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__2381.call(this);
case  1 :
return concat__2382.call(this,x);
case  2 :
return concat__2383.call(this,x,y);
default:
return concat__2384.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = (function (arglist__2386){
var x = cljs.core.first(arglist__2386);
var y = cljs.core.first(cljs.core.next(arglist__2386));
var zs = cljs.core.rest(cljs.core.next(arglist__2386));
return concat__2384.call(null, x, y, zs);
});
return concat;
})()
;
/**
* Creates a new list containing the items prepended to the rest, the
* last of which will be treated as a sequence.
* @param {...*} var_args
*/
cljs.core.list_STAR_ = (function() {
var list_STAR_ = null;
var list_STAR___2387 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___2388 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___2389 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___2390 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___2391 = (function (a,b,c,d,var_args){
var more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
});
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___2387.call(this,a);
case  2 :
return list_STAR___2388.call(this,a,b);
case  3 :
return list_STAR___2389.call(this,a,b,c);
case  4 :
return list_STAR___2390.call(this,a,b,c,d);
default:
return list_STAR___2391.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = (function (arglist__2393){
var a = cljs.core.first(arglist__2393);
var b = cljs.core.first(cljs.core.next(arglist__2393));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2393)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2393))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2393))));
return list_STAR___2391.call(null, a, b, c, d, more);
});
return list_STAR_;
})()
;
/**
* Applies fn f to the argument list formed by prepending intervening arguments to args.
* First cut.  Not lazy.  Needs to use emitted toApply.
* @param {...*} var_args
*/
cljs.core.apply = (function() {
var apply = null;
var apply__2403 = (function (f,args){
var fixed_arity__2394 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_(cljs.core._LT__EQ_.call(null,cljs.core.bounded_count.call(null,args,fixed_arity__2394),fixed_arity__2394)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__2404 = (function (f,x,args){
var arglist__2395 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__2396 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_(cljs.core._LT__EQ_.call(null,cljs.core.bounded_count.call(null,arglist__2395,fixed_arity__2396),fixed_arity__2396)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__2395));
} else
{return f.cljs$lang$applyTo(arglist__2395);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__2395));
}
});
var apply__2405 = (function (f,x,y,args){
var arglist__2397 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__2398 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_(cljs.core._LT__EQ_.call(null,cljs.core.bounded_count.call(null,arglist__2397,fixed_arity__2398),fixed_arity__2398)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__2397));
} else
{return f.cljs$lang$applyTo(arglist__2397);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__2397));
}
});
var apply__2406 = (function (f,x,y,z,args){
var arglist__2399 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__2400 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_(cljs.core._LT__EQ_.call(null,cljs.core.bounded_count.call(null,arglist__2399,fixed_arity__2400),fixed_arity__2400)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__2399));
} else
{return f.cljs$lang$applyTo(arglist__2399);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__2399));
}
});
var apply__2407 = (function (f,a,b,c,d,var_args){
var args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
var arglist__2401 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__2402 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_(cljs.core._LT__EQ_.call(null,cljs.core.bounded_count.call(null,arglist__2401,fixed_arity__2402),fixed_arity__2402)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__2401));
} else
{return f.cljs$lang$applyTo(arglist__2401);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__2401));
}
});
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__2403.call(this,f,a);
case  3 :
return apply__2404.call(this,f,a,b);
case  4 :
return apply__2405.call(this,f,a,b,c);
case  5 :
return apply__2406.call(this,f,a,b,c,d);
default:
return apply__2407.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = (function (arglist__2409){
var f = cljs.core.first(arglist__2409);
var a = cljs.core.first(cljs.core.next(arglist__2409));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2409)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2409))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2409)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2409)))));
return apply__2407.call(null, f, a, b, c, d, args);
});
return apply;
})()
;
/**
* Same as (not (= obj1 obj2))
* @param {...*} var_args
*/
cljs.core.not_EQ_ = (function() {
var not_EQ_ = null;
var not_EQ___2410 = (function (x){
return false;
});
var not_EQ___2411 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___2412 = (function (x,y,var_args){
var more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
});
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___2410.call(this,x);
case  2 :
return not_EQ___2411.call(this,x,y);
default:
return not_EQ___2412.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = (function (arglist__2414){
var x = cljs.core.first(arglist__2414);
var y = cljs.core.first(cljs.core.next(arglist__2414));
var more = cljs.core.rest(cljs.core.next(arglist__2414));
return not_EQ___2412.call(null, x, y, more);
});
return not_EQ_;
})()
;
/**
* If coll is empty, returns nil, else coll
*/
cljs.core.not_empty = (function not_empty(coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{return coll;
} else
{return null;
}
});
/**
* Returns true if (pred x) is logical true for every x in coll, else
* false.
*/
cljs.core.every_QMARK_ = (function every_QMARK_(pred,coll){
while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.seq.call(null,coll))))
{return true;
} else
{if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,coll))))
{{
var G__2415 = pred;
var G__2416 = cljs.core.next.call(null,coll);
pred = G__2415;
coll = G__2416;
continue;
}
} else
{if(cljs.core.truth_("﷐'else"))
{return false;
} else
{return null;
}
}
}
break;
}
});
/**
* Returns false if (pred x) is logical true for every x in
* coll, else true.
*/
cljs.core.not_every_QMARK_ = (function not_every_QMARK_(pred,coll){
return cljs.core.not.call(null,cljs.core.every_QMARK_.call(null,pred,coll));
});
/**
* Returns the first logical true value of (pred x) for any x in coll,
* else nil.  One common idiom is to use a set as pred, for example
* this will return :fred if :fred is in the sequence, otherwise nil:
* (some #{:fred} coll)
*/
cljs.core.some = (function some(pred,coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var or__3576__auto____2417 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3576__auto____2417))
{return or__3576__auto____2417;
} else
{{
var G__2418 = pred;
var G__2419 = cljs.core.next.call(null,coll);
pred = G__2418;
coll = G__2419;
continue;
}
}
} else
{return null;
}
break;
}
});
/**
* Returns false if (pred x) is logical true for any x in coll,
* else true.
*/
cljs.core.not_any_QMARK_ = (function not_any_QMARK_(pred,coll){
return cljs.core.not.call(null,cljs.core.some.call(null,pred,coll));
});
/**
* Returns true if n is even, throws an exception if n is not an integer
*/
cljs.core.even_QMARK_ = (function even_QMARK_(n){
if(cljs.core.truth_(cljs.core.integer_QMARK_.call(null,n)))
{return cljs.core.zero_QMARK_.call(null,cljs.core.bit_and.call(null,n,1));
} else
{throw cljs.core.str.call(null,"Argument must be an integer: ",n);
}
});
/**
* Returns true if n is odd, throws an exception if n is not an integer
*/
cljs.core.odd_QMARK_ = (function odd_QMARK_(n){
return cljs.core.not.call(null,cljs.core.even_QMARK_.call(null,n));
});
cljs.core.identity = (function identity(x){
return x;
});
/**
* Takes a fn f and returns a fn that takes the same arguments as f,
* has the same effects, if any, and returns the opposite truth value.
*/
cljs.core.complement = (function complement(f){
return (function() {
var G__2420 = null;
var G__2420__2421 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__2420__2422 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__2420__2423 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__2420__2424 = (function (x,y,var_args){
var zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
});
G__2420 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__2420__2421.call(this);
case  1 :
return G__2420__2422.call(this,x);
case  2 :
return G__2420__2423.call(this,x,y);
default:
return G__2420__2424.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__2420.cljs$lang$maxFixedArity = 2;
G__2420.cljs$lang$applyTo = (function (arglist__2426){
var x = cljs.core.first(arglist__2426);
var y = cljs.core.first(cljs.core.next(arglist__2426));
var zs = cljs.core.rest(cljs.core.next(arglist__2426));
return G__2420__2424.call(null, x, y, zs);
});
return G__2420;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function (var_args){
var args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
return x;
});
});
/**
* Takes a set of functions and returns a fn that is the composition
* of those fns.  The returned fn takes a variable number of args,
* applies the rightmost of fns to the args, the next
* fn (right-to-left) to the result, etc.
* 
* TODO: Implement apply
* @param {...*} var_args
*/
cljs.core.comp = (function() {
var comp = null;
var comp__2430 = (function (){
return cljs.core.identity;
});
var comp__2431 = (function (f){
return f;
});
var comp__2432 = (function (f,g){
return (function() {
var G__2436 = null;
var G__2436__2437 = (function (){
return f.call(null,g.call(null));
});
var G__2436__2438 = (function (x){
return f.call(null,g.call(null,x));
});
var G__2436__2439 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__2436__2440 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__2436__2441 = (function (x,y,z,var_args){
var args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
});
G__2436 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__2436__2437.call(this);
case  1 :
return G__2436__2438.call(this,x);
case  2 :
return G__2436__2439.call(this,x,y);
case  3 :
return G__2436__2440.call(this,x,y,z);
default:
return G__2436__2441.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__2436.cljs$lang$maxFixedArity = 3;
G__2436.cljs$lang$applyTo = (function (arglist__2443){
var x = cljs.core.first(arglist__2443);
var y = cljs.core.first(cljs.core.next(arglist__2443));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2443)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2443)));
return G__2436__2441.call(null, x, y, z, args);
});
return G__2436;
})()
});
var comp__2433 = (function (f,g,h){
return (function() {
var G__2444 = null;
var G__2444__2445 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__2444__2446 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__2444__2447 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__2444__2448 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__2444__2449 = (function (x,y,z,var_args){
var args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
});
G__2444 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__2444__2445.call(this);
case  1 :
return G__2444__2446.call(this,x);
case  2 :
return G__2444__2447.call(this,x,y);
case  3 :
return G__2444__2448.call(this,x,y,z);
default:
return G__2444__2449.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__2444.cljs$lang$maxFixedArity = 3;
G__2444.cljs$lang$applyTo = (function (arglist__2451){
var x = cljs.core.first(arglist__2451);
var y = cljs.core.first(cljs.core.next(arglist__2451));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2451)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2451)));
return G__2444__2449.call(null, x, y, z, args);
});
return G__2444;
})()
});
var comp__2434 = (function (f1,f2,f3,var_args){
var fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
var fs__2427 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function (var_args){
var args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
var ret__2428 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__2427),args);
var fs__2429 = cljs.core.next.call(null,fs__2427);

while(true){
if(cljs.core.truth_(fs__2429))
{{
var G__2452 = cljs.core.first.call(null,fs__2429).call(null,ret__2428);
var G__2453 = cljs.core.next.call(null,fs__2429);
ret__2428 = G__2452;
fs__2429 = G__2453;
continue;
}
} else
{return ret__2428;
}
break;
}
});
});
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__2430.call(this);
case  1 :
return comp__2431.call(this,f1);
case  2 :
return comp__2432.call(this,f1,f2);
case  3 :
return comp__2433.call(this,f1,f2,f3);
default:
return comp__2434.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = (function (arglist__2454){
var f1 = cljs.core.first(arglist__2454);
var f2 = cljs.core.first(cljs.core.next(arglist__2454));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2454)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2454)));
return comp__2434.call(null, f1, f2, f3, fs);
});
return comp;
})()
;
/**
* Takes a function f and fewer than the normal arguments to f, and
* returns a fn that takes a variable number of additional args. When
* called, the returned function calls f with args + additional args.
* 
* TODO: Implement apply
* @param {...*} var_args
*/
cljs.core.partial = (function() {
var partial = null;
var partial__2455 = (function (f,arg1){
return (function (var_args){
var args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
return cljs.core.apply.call(null,f,arg1,args);
});
});
var partial__2456 = (function (f,arg1,arg2){
return (function (var_args){
var args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
return cljs.core.apply.call(null,f,arg1,arg2,args);
});
});
var partial__2457 = (function (f,arg1,arg2,arg3){
return (function (var_args){
var args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
});
});
var partial__2458 = (function (f,arg1,arg2,arg3,var_args){
var more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
return (function (var_args){
var args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
});
});
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__2455.call(this,f,arg1);
case  3 :
return partial__2456.call(this,f,arg1,arg2);
case  4 :
return partial__2457.call(this,f,arg1,arg2,arg3);
default:
return partial__2458.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = (function (arglist__2460){
var f = cljs.core.first(arglist__2460);
var arg1 = cljs.core.first(cljs.core.next(arglist__2460));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2460)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2460))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2460))));
return partial__2458.call(null, f, arg1, arg2, arg3, more);
});
return partial;
})()
;
/**
* Takes a function f, and returns a function that calls f, replacing
* a nil first argument to f with the supplied value x. Higher arity
* versions can replace arguments in the second and third
* positions (y, z). Note that the function f can take any number of
* arguments, not just the one(s) being nil-patched.
*/
cljs.core.fnil = (function() {
var fnil = null;
var fnil__2467 = (function (f,x){
return (function() {
var G__2471 = null;
var G__2471__2472 = (function (a){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a));
});
var G__2471__2473 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b);
});
var G__2471__2474 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c);
});
var G__2471__2475 = (function (a,b,c,var_args){
var ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c,ds);
});
G__2471 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__2471__2472.call(this,a);
case  2 :
return G__2471__2473.call(this,a,b);
case  3 :
return G__2471__2474.call(this,a,b,c);
default:
return G__2471__2475.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__2471.cljs$lang$maxFixedArity = 3;
G__2471.cljs$lang$applyTo = (function (arglist__2477){
var a = cljs.core.first(arglist__2477);
var b = cljs.core.first(cljs.core.next(arglist__2477));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2477)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2477)));
return G__2471__2475.call(null, a, b, c, ds);
});
return G__2471;
})()
});
var fnil__2468 = (function (f,x,y){
return (function() {
var G__2478 = null;
var G__2478__2479 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__2478__2480 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c);
});
var G__2478__2481 = (function (a,b,c,var_args){
var ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c,ds);
});
G__2478 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__2478__2479.call(this,a,b);
case  3 :
return G__2478__2480.call(this,a,b,c);
default:
return G__2478__2481.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__2478.cljs$lang$maxFixedArity = 3;
G__2478.cljs$lang$applyTo = (function (arglist__2483){
var a = cljs.core.first(arglist__2483);
var b = cljs.core.first(cljs.core.next(arglist__2483));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2483)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2483)));
return G__2478__2481.call(null, a, b, c, ds);
});
return G__2478;
})()
});
var fnil__2469 = (function (f,x,y,z){
return (function() {
var G__2484 = null;
var G__2484__2485 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__2484__2486 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c));
});
var G__2484__2487 = (function (a,b,c,var_args){
var ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c),ds);
});
G__2484 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__2484__2485.call(this,a,b);
case  3 :
return G__2484__2486.call(this,a,b,c);
default:
return G__2484__2487.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__2484.cljs$lang$maxFixedArity = 3;
G__2484.cljs$lang$applyTo = (function (arglist__2489){
var a = cljs.core.first(arglist__2489);
var b = cljs.core.first(cljs.core.next(arglist__2489));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2489)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2489)));
return G__2484__2487.call(null, a, b, c, ds);
});
return G__2484;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__2467.call(this,f,x);
case  3 :
return fnil__2468.call(this,f,x,y);
case  4 :
return fnil__2469.call(this,f,x,y,z);
}
throw('Invalid arity: ' + arguments.length);
};
return fnil;
})()
;
/**
* Takes a set of predicates and returns a function f that returns true if all of its
* composing predicates return a logical true value against all of its arguments, else it returns
* false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical false result against the original predicates.
* @param {...*} var_args
*/
cljs.core.every_pred = (function() {
var every_pred = null;
var every_pred__2534 = (function (p){
return (function() {
var ep1 = null;
var ep1__2539 = (function (){
return true;
});
var ep1__2540 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__2541 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____2496 = p.call(null,x);

if(cljs.core.truth_(and__3574__auto____2496))
{return p.call(null,y);
} else
{return and__3574__auto____2496;
}
})());
});
var ep1__2542 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____2497 = p.call(null,x);

if(cljs.core.truth_(and__3574__auto____2497))
{var and__3574__auto____2498 = p.call(null,y);

if(cljs.core.truth_(and__3574__auto____2498))
{return p.call(null,z);
} else
{return and__3574__auto____2498;
}
} else
{return and__3574__auto____2497;
}
})());
});
var ep1__2543 = (function (x,y,z,var_args){
var args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____2499 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3574__auto____2499))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3574__auto____2499;
}
})());
});
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__2539.call(this);
case  1 :
return ep1__2540.call(this,x);
case  2 :
return ep1__2541.call(this,x,y);
case  3 :
return ep1__2542.call(this,x,y,z);
default:
return ep1__2543.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = (function (arglist__2545){
var x = cljs.core.first(arglist__2545);
var y = cljs.core.first(cljs.core.next(arglist__2545));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2545)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2545)));
return ep1__2543.call(null, x, y, z, args);
});
return ep1;
})()
});
var every_pred__2535 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__2546 = (function (){
return true;
});
var ep2__2547 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____2500 = p1.call(null,x);

if(cljs.core.truth_(and__3574__auto____2500))
{return p2.call(null,x);
} else
{return and__3574__auto____2500;
}
})());
});
var ep2__2548 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____2501 = p1.call(null,x);

if(cljs.core.truth_(and__3574__auto____2501))
{var and__3574__auto____2502 = p1.call(null,y);

if(cljs.core.truth_(and__3574__auto____2502))
{var and__3574__auto____2503 = p2.call(null,x);

if(cljs.core.truth_(and__3574__auto____2503))
{return p2.call(null,y);
} else
{return and__3574__auto____2503;
}
} else
{return and__3574__auto____2502;
}
} else
{return and__3574__auto____2501;
}
})());
});
var ep2__2549 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____2504 = p1.call(null,x);

if(cljs.core.truth_(and__3574__auto____2504))
{var and__3574__auto____2505 = p1.call(null,y);

if(cljs.core.truth_(and__3574__auto____2505))
{var and__3574__auto____2506 = p1.call(null,z);

if(cljs.core.truth_(and__3574__auto____2506))
{var and__3574__auto____2507 = p2.call(null,x);

if(cljs.core.truth_(and__3574__auto____2507))
{var and__3574__auto____2508 = p2.call(null,y);

if(cljs.core.truth_(and__3574__auto____2508))
{return p2.call(null,z);
} else
{return and__3574__auto____2508;
}
} else
{return and__3574__auto____2507;
}
} else
{return and__3574__auto____2506;
}
} else
{return and__3574__auto____2505;
}
} else
{return and__3574__auto____2504;
}
})());
});
var ep2__2550 = (function (x,y,z,var_args){
var args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____2509 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3574__auto____2509))
{return cljs.core.every_QMARK_.call(null,(function (p1__2461_SHARP_){
var and__3574__auto____2510 = p1.call(null,p1__2461_SHARP_);

if(cljs.core.truth_(and__3574__auto____2510))
{return p2.call(null,p1__2461_SHARP_);
} else
{return and__3574__auto____2510;
}
}),args);
} else
{return and__3574__auto____2509;
}
})());
});
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__2546.call(this);
case  1 :
return ep2__2547.call(this,x);
case  2 :
return ep2__2548.call(this,x,y);
case  3 :
return ep2__2549.call(this,x,y,z);
default:
return ep2__2550.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = (function (arglist__2552){
var x = cljs.core.first(arglist__2552);
var y = cljs.core.first(cljs.core.next(arglist__2552));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2552)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2552)));
return ep2__2550.call(null, x, y, z, args);
});
return ep2;
})()
});
var every_pred__2536 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__2553 = (function (){
return true;
});
var ep3__2554 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____2511 = p1.call(null,x);

if(cljs.core.truth_(and__3574__auto____2511))
{var and__3574__auto____2512 = p2.call(null,x);

if(cljs.core.truth_(and__3574__auto____2512))
{return p3.call(null,x);
} else
{return and__3574__auto____2512;
}
} else
{return and__3574__auto____2511;
}
})());
});
var ep3__2555 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____2513 = p1.call(null,x);

if(cljs.core.truth_(and__3574__auto____2513))
{var and__3574__auto____2514 = p2.call(null,x);

if(cljs.core.truth_(and__3574__auto____2514))
{var and__3574__auto____2515 = p3.call(null,x);

if(cljs.core.truth_(and__3574__auto____2515))
{var and__3574__auto____2516 = p1.call(null,y);

if(cljs.core.truth_(and__3574__auto____2516))
{var and__3574__auto____2517 = p2.call(null,y);

if(cljs.core.truth_(and__3574__auto____2517))
{return p3.call(null,y);
} else
{return and__3574__auto____2517;
}
} else
{return and__3574__auto____2516;
}
} else
{return and__3574__auto____2515;
}
} else
{return and__3574__auto____2514;
}
} else
{return and__3574__auto____2513;
}
})());
});
var ep3__2556 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____2518 = p1.call(null,x);

if(cljs.core.truth_(and__3574__auto____2518))
{var and__3574__auto____2519 = p2.call(null,x);

if(cljs.core.truth_(and__3574__auto____2519))
{var and__3574__auto____2520 = p3.call(null,x);

if(cljs.core.truth_(and__3574__auto____2520))
{var and__3574__auto____2521 = p1.call(null,y);

if(cljs.core.truth_(and__3574__auto____2521))
{var and__3574__auto____2522 = p2.call(null,y);

if(cljs.core.truth_(and__3574__auto____2522))
{var and__3574__auto____2523 = p3.call(null,y);

if(cljs.core.truth_(and__3574__auto____2523))
{var and__3574__auto____2524 = p1.call(null,z);

if(cljs.core.truth_(and__3574__auto____2524))
{var and__3574__auto____2525 = p2.call(null,z);

if(cljs.core.truth_(and__3574__auto____2525))
{return p3.call(null,z);
} else
{return and__3574__auto____2525;
}
} else
{return and__3574__auto____2524;
}
} else
{return and__3574__auto____2523;
}
} else
{return and__3574__auto____2522;
}
} else
{return and__3574__auto____2521;
}
} else
{return and__3574__auto____2520;
}
} else
{return and__3574__auto____2519;
}
} else
{return and__3574__auto____2518;
}
})());
});
var ep3__2557 = (function (x,y,z,var_args){
var args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____2526 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3574__auto____2526))
{return cljs.core.every_QMARK_.call(null,(function (p1__2462_SHARP_){
var and__3574__auto____2527 = p1.call(null,p1__2462_SHARP_);

if(cljs.core.truth_(and__3574__auto____2527))
{var and__3574__auto____2528 = p2.call(null,p1__2462_SHARP_);

if(cljs.core.truth_(and__3574__auto____2528))
{return p3.call(null,p1__2462_SHARP_);
} else
{return and__3574__auto____2528;
}
} else
{return and__3574__auto____2527;
}
}),args);
} else
{return and__3574__auto____2526;
}
})());
});
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__2553.call(this);
case  1 :
return ep3__2554.call(this,x);
case  2 :
return ep3__2555.call(this,x,y);
case  3 :
return ep3__2556.call(this,x,y,z);
default:
return ep3__2557.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = (function (arglist__2559){
var x = cljs.core.first(arglist__2559);
var y = cljs.core.first(cljs.core.next(arglist__2559));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2559)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2559)));
return ep3__2557.call(null, x, y, z, args);
});
return ep3;
})()
});
var every_pred__2537 = (function (p1,p2,p3,var_args){
var ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
var ps__2529 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__2560 = (function (){
return true;
});
var epn__2561 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__2463_SHARP_){
return p1__2463_SHARP_.call(null,x);
}),ps__2529);
});
var epn__2562 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__2464_SHARP_){
var and__3574__auto____2530 = p1__2464_SHARP_.call(null,x);

if(cljs.core.truth_(and__3574__auto____2530))
{return p1__2464_SHARP_.call(null,y);
} else
{return and__3574__auto____2530;
}
}),ps__2529);
});
var epn__2563 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__2465_SHARP_){
var and__3574__auto____2531 = p1__2465_SHARP_.call(null,x);

if(cljs.core.truth_(and__3574__auto____2531))
{var and__3574__auto____2532 = p1__2465_SHARP_.call(null,y);

if(cljs.core.truth_(and__3574__auto____2532))
{return p1__2465_SHARP_.call(null,z);
} else
{return and__3574__auto____2532;
}
} else
{return and__3574__auto____2531;
}
}),ps__2529);
});
var epn__2564 = (function (x,y,z,var_args){
var args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____2533 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3574__auto____2533))
{return cljs.core.every_QMARK_.call(null,(function (p1__2466_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__2466_SHARP_,args);
}),ps__2529);
} else
{return and__3574__auto____2533;
}
})());
});
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__2560.call(this);
case  1 :
return epn__2561.call(this,x);
case  2 :
return epn__2562.call(this,x,y);
case  3 :
return epn__2563.call(this,x,y,z);
default:
return epn__2564.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = (function (arglist__2566){
var x = cljs.core.first(arglist__2566);
var y = cljs.core.first(cljs.core.next(arglist__2566));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2566)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2566)));
return epn__2564.call(null, x, y, z, args);
});
return epn;
})()
});
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__2534.call(this,p1);
case  2 :
return every_pred__2535.call(this,p1,p2);
case  3 :
return every_pred__2536.call(this,p1,p2,p3);
default:
return every_pred__2537.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = (function (arglist__2567){
var p1 = cljs.core.first(arglist__2567);
var p2 = cljs.core.first(cljs.core.next(arglist__2567));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2567)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2567)));
return every_pred__2537.call(null, p1, p2, p3, ps);
});
return every_pred;
})()
;
/**
* Takes a set of predicates and returns a function f that returns the first logical true value
* returned by one of its composing predicates against any of its arguments, else it returns
* logical false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical true result against the original predicates.
* @param {...*} var_args
*/
cljs.core.some_fn = (function() {
var some_fn = null;
var some_fn__2607 = (function (p){
return (function() {
var sp1 = null;
var sp1__2612 = (function (){
return null;
});
var sp1__2613 = (function (x){
return p.call(null,x);
});
var sp1__2614 = (function (x,y){
var or__3576__auto____2569 = p.call(null,x);

if(cljs.core.truth_(or__3576__auto____2569))
{return or__3576__auto____2569;
} else
{return p.call(null,y);
}
});
var sp1__2615 = (function (x,y,z){
var or__3576__auto____2570 = p.call(null,x);

if(cljs.core.truth_(or__3576__auto____2570))
{return or__3576__auto____2570;
} else
{var or__3576__auto____2571 = p.call(null,y);

if(cljs.core.truth_(or__3576__auto____2571))
{return or__3576__auto____2571;
} else
{return p.call(null,z);
}
}
});
var sp1__2616 = (function (x,y,z,var_args){
var args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
var or__3576__auto____2572 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3576__auto____2572))
{return or__3576__auto____2572;
} else
{return cljs.core.some.call(null,p,args);
}
});
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__2612.call(this);
case  1 :
return sp1__2613.call(this,x);
case  2 :
return sp1__2614.call(this,x,y);
case  3 :
return sp1__2615.call(this,x,y,z);
default:
return sp1__2616.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = (function (arglist__2618){
var x = cljs.core.first(arglist__2618);
var y = cljs.core.first(cljs.core.next(arglist__2618));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2618)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2618)));
return sp1__2616.call(null, x, y, z, args);
});
return sp1;
})()
});
var some_fn__2608 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__2619 = (function (){
return null;
});
var sp2__2620 = (function (x){
var or__3576__auto____2573 = p1.call(null,x);

if(cljs.core.truth_(or__3576__auto____2573))
{return or__3576__auto____2573;
} else
{return p2.call(null,x);
}
});
var sp2__2621 = (function (x,y){
var or__3576__auto____2574 = p1.call(null,x);

if(cljs.core.truth_(or__3576__auto____2574))
{return or__3576__auto____2574;
} else
{var or__3576__auto____2575 = p1.call(null,y);

if(cljs.core.truth_(or__3576__auto____2575))
{return or__3576__auto____2575;
} else
{var or__3576__auto____2576 = p2.call(null,x);

if(cljs.core.truth_(or__3576__auto____2576))
{return or__3576__auto____2576;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__2622 = (function (x,y,z){
var or__3576__auto____2577 = p1.call(null,x);

if(cljs.core.truth_(or__3576__auto____2577))
{return or__3576__auto____2577;
} else
{var or__3576__auto____2578 = p1.call(null,y);

if(cljs.core.truth_(or__3576__auto____2578))
{return or__3576__auto____2578;
} else
{var or__3576__auto____2579 = p1.call(null,z);

if(cljs.core.truth_(or__3576__auto____2579))
{return or__3576__auto____2579;
} else
{var or__3576__auto____2580 = p2.call(null,x);

if(cljs.core.truth_(or__3576__auto____2580))
{return or__3576__auto____2580;
} else
{var or__3576__auto____2581 = p2.call(null,y);

if(cljs.core.truth_(or__3576__auto____2581))
{return or__3576__auto____2581;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__2623 = (function (x,y,z,var_args){
var args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
var or__3576__auto____2582 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3576__auto____2582))
{return or__3576__auto____2582;
} else
{return cljs.core.some.call(null,(function (p1__2490_SHARP_){
var or__3576__auto____2583 = p1.call(null,p1__2490_SHARP_);

if(cljs.core.truth_(or__3576__auto____2583))
{return or__3576__auto____2583;
} else
{return p2.call(null,p1__2490_SHARP_);
}
}),args);
}
});
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__2619.call(this);
case  1 :
return sp2__2620.call(this,x);
case  2 :
return sp2__2621.call(this,x,y);
case  3 :
return sp2__2622.call(this,x,y,z);
default:
return sp2__2623.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = (function (arglist__2625){
var x = cljs.core.first(arglist__2625);
var y = cljs.core.first(cljs.core.next(arglist__2625));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2625)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2625)));
return sp2__2623.call(null, x, y, z, args);
});
return sp2;
})()
});
var some_fn__2609 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__2626 = (function (){
return null;
});
var sp3__2627 = (function (x){
var or__3576__auto____2584 = p1.call(null,x);

if(cljs.core.truth_(or__3576__auto____2584))
{return or__3576__auto____2584;
} else
{var or__3576__auto____2585 = p2.call(null,x);

if(cljs.core.truth_(or__3576__auto____2585))
{return or__3576__auto____2585;
} else
{return p3.call(null,x);
}
}
});
var sp3__2628 = (function (x,y){
var or__3576__auto____2586 = p1.call(null,x);

if(cljs.core.truth_(or__3576__auto____2586))
{return or__3576__auto____2586;
} else
{var or__3576__auto____2587 = p2.call(null,x);

if(cljs.core.truth_(or__3576__auto____2587))
{return or__3576__auto____2587;
} else
{var or__3576__auto____2588 = p3.call(null,x);

if(cljs.core.truth_(or__3576__auto____2588))
{return or__3576__auto____2588;
} else
{var or__3576__auto____2589 = p1.call(null,y);

if(cljs.core.truth_(or__3576__auto____2589))
{return or__3576__auto____2589;
} else
{var or__3576__auto____2590 = p2.call(null,y);

if(cljs.core.truth_(or__3576__auto____2590))
{return or__3576__auto____2590;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__2629 = (function (x,y,z){
var or__3576__auto____2591 = p1.call(null,x);

if(cljs.core.truth_(or__3576__auto____2591))
{return or__3576__auto____2591;
} else
{var or__3576__auto____2592 = p2.call(null,x);

if(cljs.core.truth_(or__3576__auto____2592))
{return or__3576__auto____2592;
} else
{var or__3576__auto____2593 = p3.call(null,x);

if(cljs.core.truth_(or__3576__auto____2593))
{return or__3576__auto____2593;
} else
{var or__3576__auto____2594 = p1.call(null,y);

if(cljs.core.truth_(or__3576__auto____2594))
{return or__3576__auto____2594;
} else
{var or__3576__auto____2595 = p2.call(null,y);

if(cljs.core.truth_(or__3576__auto____2595))
{return or__3576__auto____2595;
} else
{var or__3576__auto____2596 = p3.call(null,y);

if(cljs.core.truth_(or__3576__auto____2596))
{return or__3576__auto____2596;
} else
{var or__3576__auto____2597 = p1.call(null,z);

if(cljs.core.truth_(or__3576__auto____2597))
{return or__3576__auto____2597;
} else
{var or__3576__auto____2598 = p2.call(null,z);

if(cljs.core.truth_(or__3576__auto____2598))
{return or__3576__auto____2598;
} else
{return p3.call(null,z);
}
}
}
}
}
}
}
}
});
var sp3__2630 = (function (x,y,z,var_args){
var args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
var or__3576__auto____2599 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3576__auto____2599))
{return or__3576__auto____2599;
} else
{return cljs.core.some.call(null,(function (p1__2491_SHARP_){
var or__3576__auto____2600 = p1.call(null,p1__2491_SHARP_);

if(cljs.core.truth_(or__3576__auto____2600))
{return or__3576__auto____2600;
} else
{var or__3576__auto____2601 = p2.call(null,p1__2491_SHARP_);

if(cljs.core.truth_(or__3576__auto____2601))
{return or__3576__auto____2601;
} else
{return p3.call(null,p1__2491_SHARP_);
}
}
}),args);
}
});
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__2626.call(this);
case  1 :
return sp3__2627.call(this,x);
case  2 :
return sp3__2628.call(this,x,y);
case  3 :
return sp3__2629.call(this,x,y,z);
default:
return sp3__2630.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = (function (arglist__2632){
var x = cljs.core.first(arglist__2632);
var y = cljs.core.first(cljs.core.next(arglist__2632));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2632)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2632)));
return sp3__2630.call(null, x, y, z, args);
});
return sp3;
})()
});
var some_fn__2610 = (function (p1,p2,p3,var_args){
var ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
var ps__2602 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__2633 = (function (){
return null;
});
var spn__2634 = (function (x){
return cljs.core.some.call(null,(function (p1__2492_SHARP_){
return p1__2492_SHARP_.call(null,x);
}),ps__2602);
});
var spn__2635 = (function (x,y){
return cljs.core.some.call(null,(function (p1__2493_SHARP_){
var or__3576__auto____2603 = p1__2493_SHARP_.call(null,x);

if(cljs.core.truth_(or__3576__auto____2603))
{return or__3576__auto____2603;
} else
{return p1__2493_SHARP_.call(null,y);
}
}),ps__2602);
});
var spn__2636 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__2494_SHARP_){
var or__3576__auto____2604 = p1__2494_SHARP_.call(null,x);

if(cljs.core.truth_(or__3576__auto____2604))
{return or__3576__auto____2604;
} else
{var or__3576__auto____2605 = p1__2494_SHARP_.call(null,y);

if(cljs.core.truth_(or__3576__auto____2605))
{return or__3576__auto____2605;
} else
{return p1__2494_SHARP_.call(null,z);
}
}
}),ps__2602);
});
var spn__2637 = (function (x,y,z,var_args){
var args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
var or__3576__auto____2606 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3576__auto____2606))
{return or__3576__auto____2606;
} else
{return cljs.core.some.call(null,(function (p1__2495_SHARP_){
return cljs.core.some.call(null,p1__2495_SHARP_,args);
}),ps__2602);
}
});
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__2633.call(this);
case  1 :
return spn__2634.call(this,x);
case  2 :
return spn__2635.call(this,x,y);
case  3 :
return spn__2636.call(this,x,y,z);
default:
return spn__2637.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = (function (arglist__2639){
var x = cljs.core.first(arglist__2639);
var y = cljs.core.first(cljs.core.next(arglist__2639));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2639)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2639)));
return spn__2637.call(null, x, y, z, args);
});
return spn;
})()
});
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__2607.call(this,p1);
case  2 :
return some_fn__2608.call(this,p1,p2);
case  3 :
return some_fn__2609.call(this,p1,p2,p3);
default:
return some_fn__2610.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = (function (arglist__2640){
var p1 = cljs.core.first(arglist__2640);
var p2 = cljs.core.first(cljs.core.next(arglist__2640));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2640)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2640)));
return some_fn__2610.call(null, p1, p2, p3, ps);
});
return some_fn;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to the
* set of first items of each coll, followed by applying f to the set
* of second items in each coll, until any one of the colls is
* exhausted.  Any remaining items in other colls are ignored. Function
* f should accept number-of-colls arguments.
* @param {...*} var_args
*/
cljs.core.map = (function() {
var map = null;
var map__2653 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____2641 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____2641))
{var s__2642 = temp__3726__auto____2641;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__2642)),map.call(null,f,cljs.core.rest.call(null,s__2642)));
} else
{return null;
}
})));
});
var map__2654 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__2643 = cljs.core.seq.call(null,c1);
var s2__2644 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3574__auto____2645 = s1__2643;

if(cljs.core.truth_(and__3574__auto____2645))
{return s2__2644;
} else
{return and__3574__auto____2645;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__2643),cljs.core.first.call(null,s2__2644)),map.call(null,f,cljs.core.rest.call(null,s1__2643),cljs.core.rest.call(null,s2__2644)));
} else
{return null;
}
})));
});
var map__2655 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__2646 = cljs.core.seq.call(null,c1);
var s2__2647 = cljs.core.seq.call(null,c2);
var s3__2648 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3574__auto____2649 = s1__2646;

if(cljs.core.truth_(and__3574__auto____2649))
{var and__3574__auto____2650 = s2__2647;

if(cljs.core.truth_(and__3574__auto____2650))
{return s3__2648;
} else
{return and__3574__auto____2650;
}
} else
{return and__3574__auto____2649;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__2646),cljs.core.first.call(null,s2__2647),cljs.core.first.call(null,s3__2648)),map.call(null,f,cljs.core.rest.call(null,s1__2646),cljs.core.rest.call(null,s2__2647),cljs.core.rest.call(null,s3__2648)));
} else
{return null;
}
})));
});
var map__2656 = (function (f,c1,c2,c3,var_args){
var colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
var step__2652 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__2651 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__2651)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__2651),step.call(null,map.call(null,cljs.core.rest,ss__2651)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__2568_SHARP_){
return cljs.core.apply.call(null,f,p1__2568_SHARP_);
}),step__2652.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
});
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__2653.call(this,f,c1);
case  3 :
return map__2654.call(this,f,c1,c2);
case  4 :
return map__2655.call(this,f,c1,c2,c3);
default:
return map__2656.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = (function (arglist__2658){
var f = cljs.core.first(arglist__2658);
var c1 = cljs.core.first(cljs.core.next(arglist__2658));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2658)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2658))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2658))));
return map__2656.call(null, f, c1, c2, c3, colls);
});
return map;
})()
;
/**
* Returns a lazy sequence of the first n items in coll, or all items if
* there are fewer than n.
*/
cljs.core.take = (function take(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_(cljs.core.pos_QMARK_.call(null,n)))
{var temp__3726__auto____2659 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____2659))
{var s__2660 = temp__3726__auto____2659;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__2660),take.call(null,cljs.core.dec.call(null,n),cljs.core.rest.call(null,s__2660)));
} else
{return null;
}
} else
{return null;
}
})));
});
/**
* Returns a lazy sequence of all but the first n items in coll.
*/
cljs.core.drop = (function drop(n,coll){
var step__2663 = (function (n,coll){
while(true){
var s__2661 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3574__auto____2662 = cljs.core.pos_QMARK_.call(null,n);

if(cljs.core.truth_(and__3574__auto____2662))
{return s__2661;
} else
{return and__3574__auto____2662;
}
})()))
{{
var G__2664 = cljs.core.dec.call(null,n);
var G__2665 = cljs.core.rest.call(null,s__2661);
n = G__2664;
coll = G__2665;
continue;
}
} else
{return s__2661;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__2663.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__2666 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__2667 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__2666.call(this,n);
case  2 :
return drop_last__2667.call(this,n,s);
}
throw('Invalid arity: ' + arguments.length);
};
return drop_last;
})()
;
/**
* Returns a seq of the last n items in coll.  Depending on the type
* of coll may be no better than linear time.  For vectors, see also subvec.
*/
cljs.core.take_last = (function take_last(n,coll){
var s__2669 = cljs.core.seq.call(null,coll);
var lead__2670 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__2670))
{{
var G__2671 = cljs.core.next.call(null,s__2669);
var G__2672 = cljs.core.next.call(null,lead__2670);
s__2669 = G__2671;
lead__2670 = G__2672;
continue;
}
} else
{return s__2669;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__2675 = (function (pred,coll){
while(true){
var s__2673 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3574__auto____2674 = s__2673;

if(cljs.core.truth_(and__3574__auto____2674))
{return pred.call(null,cljs.core.first.call(null,s__2673));
} else
{return and__3574__auto____2674;
}
})()))
{{
var G__2676 = pred;
var G__2677 = cljs.core.rest.call(null,s__2673);
pred = G__2676;
coll = G__2677;
continue;
}
} else
{return s__2673;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__2675.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____2678 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____2678))
{var s__2679 = temp__3726__auto____2678;

return cljs.core.concat.call(null,s__2679,cycle.call(null,s__2679));
} else
{return null;
}
})));
});
/**
* Returns a lazy (infinite!, or length n if supplied) sequence of xs.
*/
cljs.core.repeat = (function() {
var repeat = null;
var repeat__2680 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__2681 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__2680.call(this,n);
case  2 :
return repeat__2681.call(this,n,x);
}
throw('Invalid arity: ' + arguments.length);
};
return repeat;
})()
;
/**
* Returns a lazy seq of n xs.
*/
cljs.core.replicate = (function replicate(n,x){
return cljs.core.take.call(null,n,cljs.core.repeat.call(null,x));
});
/**
* Takes a function of no args, presumably with side effects, and
* returns an infinite (or length n if supplied) lazy sequence of calls
* to it
*/
cljs.core.repeatedly = (function() {
var repeatedly = null;
var repeatedly__2683 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__2684 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__2683.call(this,n);
case  2 :
return repeatedly__2684.call(this,n,f);
}
throw('Invalid arity: ' + arguments.length);
};
return repeatedly;
})()
;
/**
* Returns a lazy sequence of x, (f x), (f (f x)) etc. f must be free of side-effects
*/
cljs.core.iterate = (function iterate(f,x){
return cljs.core.cons.call(null,x,(new cljs.core.LazySeq(null,false,(function (){
return iterate.call(null,f,f.call(null,x));
}))));
});
/**
* Returns a lazy seq of the first item in each coll, then the second etc.
* @param {...*} var_args
*/
cljs.core.interleave = (function() {
var interleave = null;
var interleave__2690 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__2686 = cljs.core.seq.call(null,c1);
var s2__2687 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3574__auto____2688 = s1__2686;

if(cljs.core.truth_(and__3574__auto____2688))
{return s2__2687;
} else
{return and__3574__auto____2688;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__2686),cljs.core.cons.call(null,cljs.core.first.call(null,s2__2687),interleave.call(null,cljs.core.rest.call(null,s1__2686),cljs.core.rest.call(null,s2__2687))));
} else
{return null;
}
})));
});
var interleave__2691 = (function (c1,c2,var_args){
var colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
return (new cljs.core.LazySeq(null,false,(function (){
var ss__2689 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__2689)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__2689),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__2689)));
} else
{return null;
}
})));
});
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__2690.call(this,c1,c2);
default:
return interleave__2691.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = (function (arglist__2693){
var c1 = cljs.core.first(arglist__2693);
var c2 = cljs.core.first(cljs.core.next(arglist__2693));
var colls = cljs.core.rest(cljs.core.next(arglist__2693));
return interleave__2691.call(null, c1, c2, colls);
});
return interleave;
})()
;
/**
* Returns a lazy seq of the elements of coll separated by sep
*/
cljs.core.interpose = (function interpose(sep,coll){
return cljs.core.drop.call(null,1,cljs.core.interleave.call(null,cljs.core.repeat.call(null,sep),coll));
});
/**
* Take a collection of collections, and return a lazy seq
* of items from the inner collection
*/
cljs.core.flatten1 = (function flatten1(colls){
var cat__2696 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3723__auto____2694 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3723__auto____2694))
{var coll__2695 = temp__3723__auto____2694;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__2695),cat.call(null,cljs.core.rest.call(null,coll__2695),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__2696.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__2697 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__2698 = (function (f,coll,var_args){
var colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
});
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__2697.call(this,f,coll);
default:
return mapcat__2698.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = (function (arglist__2700){
var f = cljs.core.first(arglist__2700);
var coll = cljs.core.first(cljs.core.next(arglist__2700));
var colls = cljs.core.rest(cljs.core.next(arglist__2700));
return mapcat__2698.call(null, f, coll, colls);
});
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____2701 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____2701))
{var s__2702 = temp__3726__auto____2701;

var f__2703 = cljs.core.first.call(null,s__2702);
var r__2704 = cljs.core.rest.call(null,s__2702);

if(cljs.core.truth_(pred.call(null,f__2703)))
{return cljs.core.cons.call(null,f__2703,filter.call(null,pred,r__2704));
} else
{return filter.call(null,pred,r__2704);
}
} else
{return null;
}
})));
});
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns false. pred must be free of side-effects.
*/
cljs.core.remove = (function remove(pred,coll){
return cljs.core.filter.call(null,cljs.core.complement.call(null,pred),coll);
});
/**
* Returns a lazy sequence of the nodes in a tree, via a depth-first walk.
* branch? must be a fn of one arg that returns true if passed a node
* that can have children (but may not).  children must be a fn of one
* arg that returns a sequence of the children. Will only be called on
* nodes for which branch? returns true. Root is the root node of the
* tree.
*/
cljs.core.tree_seq = (function tree_seq(branch_QMARK_,children,root){
var walk__2706 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__2706.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__2705_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__2705_SHARP_));
}),cljs.core.rest.call(null,cljs.core.tree_seq.call(null,cljs.core.sequential_QMARK_,cljs.core.seq,x)));
});
/**
* Returns a new coll consisting of to-coll with all of the items of
* from-coll conjoined.
*/
cljs.core.into = (function into(to,from){
return cljs.core.reduce.call(null,cljs.core._conj,to,from);
});
/**
* Returns a lazy sequence of lists of n items each, at offsets step
* apart. If step is not supplied, defaults to n, i.e. the partitions
* do not overlap. If a pad collection is supplied, use its elements as
* necessary to complete last partition upto n items. In case there are
* not enough padding elements, return a partition with less than n items.
*/
cljs.core.partition = (function() {
var partition = null;
var partition__2713 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__2714 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____2707 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____2707))
{var s__2708 = temp__3726__auto____2707;

var p__2709 = cljs.core.take.call(null,n,s__2708);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__2709))))
{return cljs.core.cons.call(null,p__2709,partition.call(null,n,step,cljs.core.drop.call(null,step,s__2708)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__2715 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____2710 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____2710))
{var s__2711 = temp__3726__auto____2710;

var p__2712 = cljs.core.take.call(null,n,s__2711);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__2712))))
{return cljs.core.cons.call(null,p__2712,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__2711)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__2712,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__2713.call(this,n,step);
case  3 :
return partition__2714.call(this,n,step,pad);
case  4 :
return partition__2715.call(this,n,step,pad,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return partition;
})()
;
/**
* Returns the value in a nested associative structure,
* where ks is a sequence of ke(ys. Returns nil if the key is not present,
* or the not-found value if supplied.
*/
cljs.core.get_in = (function() {
var get_in = null;
var get_in__2721 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__2722 = (function (m,ks,not_found){
var sentinel__2717 = cljs.core.lookup_sentinel;
var m__2718 = m;
var ks__2719 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__2719))
{var m__2720 = cljs.core.get.call(null,m__2718,cljs.core.first.call(null,ks__2719),sentinel__2717);

if(cljs.core.truth_(cljs.core.identical_QMARK_.call(null,sentinel__2717,m__2720)))
{return not_found;
} else
{{
var G__2724 = sentinel__2717;
var G__2725 = m__2720;
var G__2726 = cljs.core.next.call(null,ks__2719);
sentinel__2717 = G__2724;
m__2718 = G__2725;
ks__2719 = G__2726;
continue;
}
}
} else
{return m__2718;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__2721.call(this,m,ks);
case  3 :
return get_in__2722.call(this,m,ks,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return get_in;
})()
;
/**
* Associates a value in a nested associative structure, where ks is a
* sequence of keys and v is the new value and returns a new nested structure.
* If any levels do not exist, hash-maps will be created.
*/
cljs.core.assoc_in = (function assoc_in(m,p__2727,v){
var vec__2728__2729 = p__2727;
var k__2730 = cljs.core.nth.call(null,vec__2728__2729,0,null);
var ks__2731 = cljs.core.nthnext.call(null,vec__2728__2729,1);

if(cljs.core.truth_(ks__2731))
{return cljs.core.assoc.call(null,m,k__2730,assoc_in.call(null,cljs.core.get.call(null,m,k__2730),ks__2731,v));
} else
{return cljs.core.assoc.call(null,m,k__2730,v);
}
});
/**
* 'Updates' a value in a nested associative structure, where ks is a
* sequence of keys and f is a function that will take the old value
* and any supplied args and return the new value, and returns a new
* nested structure.  If any levels do not exist, hash-maps will be
* created.
* @param {...*} var_args
*/
cljs.core.update_in = (function update_in(m,p__2732,f,var_args){
var args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
var vec__2733__2734 = p__2732;
var k__2735 = cljs.core.nth.call(null,vec__2733__2734,0,null);
var ks__2736 = cljs.core.nthnext.call(null,vec__2733__2734,1);

if(cljs.core.truth_(ks__2736))
{return cljs.core.assoc.call(null,m,k__2735,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__2735),ks__2736,f,args));
} else
{return cljs.core.assoc.call(null,m,k__2735,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__2735),args));
}
});

/**
* @constructor
*/
cljs.core.Vector = (function (meta,array){
this.meta = meta;
this.array = array;
})
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__2737 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__2738 = this;
var new_array__2739 = cljs.core.aclone.call(null,this__2738.array);

new_array__2739.push(o);
return (new cljs.core.Vector(this__2738.meta,new_array__2739));
});
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__2740 = this;
if(cljs.core.truth_(cljs.core._GT_.call(null,this__2740.array.length,0)))
{var vector_seq__2741 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_(cljs.core._LT_.call(null,i,this__2740.array.length)))
{return cljs.core.cons.call(null,(this__2740.array[i]),vector_seq.call(null,cljs.core.inc.call(null,i)));
} else
{return null;
}
})));
});

return vector_seq__2741.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__2742 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__2743 = this;
var count__2744 = this__2743.array.length;

if(cljs.core.truth_(cljs.core._GT_.call(null,count__2744,0)))
{return (this__2743.array[cljs.core.dec.call(null,count__2744)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__2745 = this;
if(cljs.core.truth_(cljs.core._GT_.call(null,this__2745.array.length,0)))
{var new_array__2746 = cljs.core.aclone.call(null,this__2745.array);

new_array__2746.pop();
return (new cljs.core.Vector(this__2745.meta,new_array__2746));
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__2747 = this;
return (new cljs.core.Vector(meta,this__2747.array));
});
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__2748 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__2748.meta);
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__2762 = null;
var G__2762__2763 = (function (coll,n){
var this__2749 = this;
if(cljs.core.truth_((function (){var and__3574__auto____2750 = cljs.core._LT__EQ_.call(null,0,n);

if(cljs.core.truth_(and__3574__auto____2750))
{return cljs.core._LT_.call(null,n,this__2749.array.length);
} else
{return and__3574__auto____2750;
}
})()))
{return (this__2749.array[n]);
} else
{return null;
}
});
var G__2762__2764 = (function (coll,n,not_found){
var this__2751 = this;
if(cljs.core.truth_((function (){var and__3574__auto____2752 = cljs.core._LT__EQ_.call(null,0,n);

if(cljs.core.truth_(and__3574__auto____2752))
{return cljs.core._LT_.call(null,n,this__2751.array.length);
} else
{return and__3574__auto____2752;
}
})()))
{return (this__2751.array[n]);
} else
{return not_found;
}
});
G__2762 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__2762__2763.call(this,coll,n);
case  3 :
return G__2762__2764.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2762;
})()
;
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__2753 = this;
return this__2753.meta;
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__2766 = null;
var G__2766__2767 = (function (v,f){
var this__2754 = this;
return cljs.core.ci_reduce.call(null,this__2754.array,f);
});
var G__2766__2768 = (function (v,f,start){
var this__2755 = this;
return cljs.core.ci_reduce.call(null,this__2755.array,f,start);
});
G__2766 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__2766__2767.call(this,v,f);
case  3 :
return G__2766__2768.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2766;
})()
;
cljs.core.Vector.prototype.cljs$core$IHash$ = true;
cljs.core.Vector.prototype.cljs$core$IHash$_hash = (function (coll){
var this__2756 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__2757 = this;
return this__2757.array.length;
});
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__2758 = this;
var new_array__2759 = cljs.core.aclone.call(null,this__2758.array);

(new_array__2759[k] = v);
return (new cljs.core.Vector(this__2758.meta,new_array__2759));
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__2770 = null;
var G__2770__2771 = (function (coll,k){
var this__2760 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__2770__2772 = (function (coll,k,not_found){
var this__2761 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__2770 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__2770__2771.call(this,coll,k);
case  3 :
return G__2770__2772.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2770;
})()
;
cljs.core.Vector.EMPTY = (new cljs.core.Vector(null,cljs.core.array.call(null)));
cljs.core.Vector.fromArray = (function (xs){
return (new cljs.core.Vector(null,xs));
});
cljs.core.Vector.prototype.call = (function() {
var G__2774 = null;
var G__2774__2775 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__2774__2776 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__2774 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__2774__2775.call(this,_,k);
case  3 :
return G__2774__2776.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2774;
})()
;
cljs.core.vec = (function vec(coll){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.Vector.EMPTY,coll);
});
/**
* @param {...*} var_args
*/
cljs.core.vector = (function vector(var_args){
var args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
return cljs.core.vec.call(null,args);
});

/**
* @constructor
*/
cljs.core.NeverEquiv = (function (){
})
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$ = true;
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__2778 = this;
return false;
});
cljs.core.never_equiv = (new cljs.core.NeverEquiv());
/**
* Assumes y is a map. Returns true if x equals y, otherwise returns
* false.
*/
cljs.core.equiv_map = (function equiv_map(x,y){
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.map_QMARK_.call(null,y))?(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,x),cljs.core.count.call(null,y)))?cljs.core.every_QMARK_.call(null,cljs.core.identity,cljs.core.map.call(null,(function (xkv){
return cljs.core._EQ_.call(null,cljs.core.get.call(null,y,cljs.core.first.call(null,xkv),cljs.core.never_equiv),cljs.core.second.call(null,xkv));
}),x)):null):null));
});
cljs.core.scan_array = (function scan_array(incr,k,array){
var len__2779 = array.length;

var i__2780 = 0;

while(true){
if(cljs.core.truth_(cljs.core._LT_.call(null,i__2780,len__2779)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__2780]))))
{return i__2780;
} else
{{
var G__2781 = cljs.core._PLUS_.call(null,i__2780,incr);
i__2780 = G__2781;
continue;
}
}
} else
{return null;
}
break;
}
});
cljs.core.obj_map_contains_key_QMARK_ = (function() {
var obj_map_contains_key_QMARK_ = null;
var obj_map_contains_key_QMARK___2783 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___2784 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3574__auto____2782 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3574__auto____2782))
{return strobj.hasOwnProperty(k);
} else
{return and__3574__auto____2782;
}
})()))
{return true_val;
} else
{return false_val;
}
});
obj_map_contains_key_QMARK_ = function(k,strobj,true_val,false_val){
switch(arguments.length){
case  2 :
return obj_map_contains_key_QMARK___2783.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___2784.call(this,k,strobj,true_val,false_val);
}
throw('Invalid arity: ' + arguments.length);
};
return obj_map_contains_key_QMARK_;
})()
;

/**
* @constructor
*/
cljs.core.ObjMap = (function (meta,keys,strobj){
this.meta = meta;
this.keys = keys;
this.strobj = strobj;
})
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__2787 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__2788 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__2789 = this;
if(cljs.core.truth_(cljs.core.pos_QMARK_.call(null,this__2789.keys.length)))
{return cljs.core.map.call(null,(function (p1__2786_SHARP_){
return cljs.core.vector.call(null,p1__2786_SHARP_,(this__2789.strobj[p1__2786_SHARP_]));
}),this__2789.keys);
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__2790 = this;
return (new cljs.core.ObjMap(meta,this__2790.keys,this__2790.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__2791 = this;
if(cljs.core.truth_((function (){var and__3574__auto____2792 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3574__auto____2792))
{return this__2791.strobj.hasOwnProperty(k);
} else
{return and__3574__auto____2792;
}
})()))
{var new_keys__2793 = cljs.core.aclone.call(null,this__2791.keys);
var new_strobj__2794 = goog.object.clone.call(null,this__2791.strobj);

new_keys__2793.splice(cljs.core.scan_array.call(null,1,k,new_keys__2793),1);
cljs.core.js_delete.call(null,new_strobj__2794,k);
return (new cljs.core.ObjMap(this__2791.meta,new_keys__2793,new_strobj__2794));
} else
{return coll;
}
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__2795 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__2795.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__2796 = this;
return this__2796.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IHash$ = true;
cljs.core.ObjMap.prototype.cljs$core$IHash$_hash = (function (coll){
var this__2797 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__2798 = this;
return this__2798.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__2799 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__2800 = goog.object.clone.call(null,this__2799.strobj);
var overwrite_QMARK___2801 = new_strobj__2800.hasOwnProperty(k);

(new_strobj__2800[k] = v);
if(cljs.core.truth_(overwrite_QMARK___2801))
{return (new cljs.core.ObjMap(this__2799.meta,this__2799.keys,new_strobj__2800));
} else
{var new_keys__2802 = cljs.core.aclone.call(null,this__2799.keys);

new_keys__2802.push(k);
return (new cljs.core.ObjMap(this__2799.meta,new_keys__2802,new_strobj__2800));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__2799.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__2803 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__2803.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__2806 = null;
var G__2806__2807 = (function (coll,k){
var this__2804 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__2806__2808 = (function (coll,k,not_found){
var this__2805 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__2805.strobj,(this__2805.strobj[k]),not_found);
});
G__2806 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__2806__2807.call(this,coll,k);
case  3 :
return G__2806__2808.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2806;
})()
;
cljs.core.ObjMap.EMPTY = (new cljs.core.ObjMap(null,cljs.core.array.call(null),cljs.core.js_obj.call(null)));
cljs.core.ObjMap.fromObject = (function (ks,obj){
return (new cljs.core.ObjMap(null,ks,obj));
});
cljs.core.ObjMap.prototype.call = (function() {
var G__2811 = null;
var G__2811__2812 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__2811__2813 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__2811 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__2811__2812.call(this,_,k);
case  3 :
return G__2811__2813.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2811;
})()
;

/**
* @constructor
*/
cljs.core.HashMap = (function (meta,count,hashobj){
this.meta = meta;
this.count = count;
this.hashobj = hashobj;
})
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__2815 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__2816 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__2817 = this;
if(cljs.core.truth_(cljs.core.pos_QMARK_.call(null,this__2817.count)))
{var hashes__2818 = cljs.core.js_keys.call(null,this__2817.hashobj);

return cljs.core.mapcat.call(null,(function (p1__2810_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__2817.hashobj[p1__2810_SHARP_])));
}),hashes__2818);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__2819 = this;
return (new cljs.core.HashMap(meta,this__2819.count,this__2819.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__2820 = this;
var h__2821 = cljs.core.hash.call(null,k);
var bucket__2822 = (this__2820.hashobj[h__2821]);
var i__2823 = (cljs.core.truth_(bucket__2822)?cljs.core.scan_array.call(null,2,k,bucket__2822):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__2823)))
{return coll;
} else
{var new_hashobj__2824 = goog.object.clone.call(null,this__2820.hashobj);

if(cljs.core.truth_(cljs.core._GT_.call(null,3,bucket__2822.length)))
{cljs.core.js_delete.call(null,new_hashobj__2824,h__2821);
} else
{var new_bucket__2825 = cljs.core.aclone.call(null,bucket__2822);

new_bucket__2825.splice(i__2823,2);
(new_hashobj__2824[h__2821] = new_bucket__2825);
}
return (new cljs.core.HashMap(this__2820.meta,cljs.core.dec.call(null,this__2820.count),new_hashobj__2824));
}
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__2826 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__2826.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__2827 = this;
return this__2827.meta;
});
cljs.core.HashMap.prototype.cljs$core$IHash$ = true;
cljs.core.HashMap.prototype.cljs$core$IHash$_hash = (function (coll){
var this__2828 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__2829 = this;
return this__2829.count;
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__2830 = this;
var h__2831 = cljs.core.hash.call(null,k);
var bucket__2832 = (this__2830.hashobj[h__2831]);

if(cljs.core.truth_(bucket__2832))
{var new_bucket__2833 = cljs.core.aclone.call(null,bucket__2832);
var new_hashobj__2834 = goog.object.clone.call(null,this__2830.hashobj);

(new_hashobj__2834[h__2831] = new_bucket__2833);
var temp__3723__auto____2835 = cljs.core.scan_array.call(null,2,k,new_bucket__2833);

if(cljs.core.truth_(temp__3723__auto____2835))
{var i__2836 = temp__3723__auto____2835;

(new_bucket__2833[cljs.core.inc.call(null,i__2836)] = v);
return (new cljs.core.HashMap(this__2830.meta,this__2830.count,new_hashobj__2834));
} else
{new_bucket__2833.push(k,v);
return (new cljs.core.HashMap(this__2830.meta,cljs.core.inc.call(null,this__2830.count),new_hashobj__2834));
}
} else
{var new_hashobj__2837 = goog.object.clone.call(null,this__2830.hashobj);

(new_hashobj__2837[h__2831] = cljs.core.array.call(null,k,v));
return (new cljs.core.HashMap(this__2830.meta,cljs.core.inc.call(null,this__2830.count),new_hashobj__2837));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__2838 = this;
var bucket__2839 = (this__2838.hashobj[cljs.core.hash.call(null,k)]);
var i__2840 = (cljs.core.truth_(bucket__2839)?cljs.core.scan_array.call(null,2,k,bucket__2839):null);

if(cljs.core.truth_(i__2840))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__2845 = null;
var G__2845__2846 = (function (coll,k){
var this__2841 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__2845__2847 = (function (coll,k,not_found){
var this__2842 = this;
var bucket__2843 = (this__2842.hashobj[cljs.core.hash.call(null,k)]);
var i__2844 = (cljs.core.truth_(bucket__2843)?cljs.core.scan_array.call(null,2,k,bucket__2843):null);

if(cljs.core.truth_(i__2844))
{return (bucket__2843[cljs.core.inc.call(null,i__2844)]);
} else
{return not_found;
}
});
G__2845 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__2845__2846.call(this,coll,k);
case  3 :
return G__2845__2847.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2845;
})()
;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__2849 = ks.length;

var i__2850 = 0;
var out__2851 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core._LT_.call(null,i__2850,len__2849)))
{{
var G__2852 = cljs.core.inc.call(null,i__2850);
var G__2853 = cljs.core.assoc.call(null,out__2851,(ks[i__2850]),(vs[i__2850]));
i__2850 = G__2852;
out__2851 = G__2853;
continue;
}
} else
{return out__2851;
}
break;
}
});
cljs.core.HashMap.prototype.call = (function() {
var G__2854 = null;
var G__2854__2855 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__2854__2856 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__2854 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__2854__2855.call(this,_,k);
case  3 :
return G__2854__2856.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2854;
})()
;
/**
* keyval => key val
* Returns a new hash map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.hash_map = (function hash_map(var_args){
var keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
var in$__2858 = cljs.core.seq.call(null,keyvals);
var out__2859 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__2858))
{{
var G__2860 = cljs.core.nnext.call(null,in$__2858);
var G__2861 = cljs.core.assoc.call(null,out__2859,cljs.core.first.call(null,in$__2858),cljs.core.second.call(null,in$__2858));
in$__2858 = G__2860;
out__2859 = G__2861;
continue;
}
} else
{return out__2859;
}
break;
}
});
/**
* Returns a sequence of the map's keys.
*/
cljs.core.keys = (function keys(hash_map){
return cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.first,hash_map));
});
/**
* Returns a sequence of the map's values.
*/
cljs.core.vals = (function vals(hash_map){
return cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.second,hash_map));
});
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping from
* the latter (left-to-right) will be the mapping in the result.
* @param {...*} var_args
*/
cljs.core.merge = (function merge(var_args){
var maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps)))
{return cljs.core.reduce.call(null,(function (p1__2862_SHARP_,p2__2863_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3576__auto____2864 = p1__2862_SHARP_;

if(cljs.core.truth_(or__3576__auto____2864))
{return or__3576__auto____2864;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__2863_SHARP_);
}),maps);
} else
{return null;
}
});
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__2866 = cljs.core.ObjMap.fromObject([],{});
var keys__2867 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__2867))
{var key__2868 = cljs.core.first.call(null,keys__2867);
var entry__2869 = cljs.core.get.call(null,map,key__2868);

{
var G__2870 = (cljs.core.truth_(entry__2869)?cljs.core.assoc.call(null,ret__2866,key__2868,entry__2869):ret__2866);
var G__2871 = cljs.core.next.call(null,keys__2867);
ret__2866 = G__2870;
keys__2867 = G__2871;
continue;
}
} else
{return ret__2866;
}
break;
}
});

/**
* @constructor
*/
cljs.core.Set = (function (meta,hash_map){
this.meta = meta;
this.hash_map = hash_map;
})
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__2872 = this;
return (new cljs.core.Set(this__2872.meta,cljs.core.dissoc.call(null,this__2872.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__2873 = this;
var and__3574__auto____2874 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3574__auto____2874))
{var and__3574__auto____2875 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3574__auto____2875))
{return cljs.core.every_QMARK_.call(null,(function (p1__2865_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__2865_SHARP_);
}),other);
} else
{return and__3574__auto____2875;
}
} else
{return and__3574__auto____2874;
}
});
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__2876 = this;
return (new cljs.core.Set(this__2876.meta,cljs.core.assoc.call(null,this__2876.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__2877 = this;
return cljs.core.keys.call(null,this__2877.hash_map);
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__2878 = this;
return (new cljs.core.Set(meta,this__2878.hash_map));
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__2879 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__2879.meta);
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__2880 = this;
return this__2880.meta;
});
cljs.core.Set.prototype.cljs$core$IHash$ = true;
cljs.core.Set.prototype.cljs$core$IHash$_hash = (function (coll){
var this__2881 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__2882 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__2885 = null;
var G__2885__2886 = (function (coll,v){
var this__2883 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__2885__2887 = (function (coll,v,not_found){
var this__2884 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__2884.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__2885 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__2885__2886.call(this,coll,v);
case  3 :
return G__2885__2887.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2885;
})()
;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
cljs.core.Set.prototype.call = (function() {
var G__2889 = null;
var G__2889__2890 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__2889__2891 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__2889 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__2889__2890.call(this,_,k);
case  3 :
return G__2889__2891.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2889;
})()
;
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__2893 = cljs.core.seq.call(null,coll);
var out__2894 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__2893))))
{{
var G__2895 = cljs.core.rest.call(null,in$__2893);
var G__2896 = cljs.core.conj.call(null,out__2894,cljs.core.first.call(null,in$__2893));
in$__2893 = G__2895;
out__2894 = G__2896;
continue;
}
} else
{return out__2894;
}
break;
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__2904 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__2897,seen){
while(true){
var vec__2898__2899 = p__2897;
var f__2900 = cljs.core.nth.call(null,vec__2898__2899,0,null);
var xs__2901 = vec__2898__2899;

var temp__3726__auto____2902 = cljs.core.seq.call(null,xs__2901);

if(cljs.core.truth_(temp__3726__auto____2902))
{var s__2903 = temp__3726__auto____2902;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__2900)))
{{
var G__2905 = cljs.core.rest.call(null,s__2903);
var G__2906 = seen;
p__2897 = G__2905;
seen = G__2906;
continue;
}
} else
{return cljs.core.cons.call(null,f__2900,step.call(null,cljs.core.rest.call(null,s__2903),cljs.core.conj.call(null,seen,f__2900)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__2904.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__2907 = cljs.core.Vector.fromArray([]);
var s__2908 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__2908)))
{{
var G__2909 = cljs.core.conj.call(null,ret__2907,cljs.core.first.call(null,s__2908));
var G__2910 = cljs.core.next.call(null,s__2908);
ret__2907 = G__2909;
s__2908 = G__2910;
continue;
}
} else
{return cljs.core.seq.call(null,ret__2907);
}
break;
}
});
/**
* Returns the name String of a string, symbol or keyword.
*/
cljs.core.name = (function name(x){
if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,x)))
{return x;
} else
{if(cljs.core.truth_((function (){var or__3576__auto____2911 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3576__auto____2911))
{return or__3576__auto____2911;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__2912 = x.lastIndexOf("/");

if(cljs.core.truth_(cljs.core._LT_.call(null,i__2912,0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,cljs.core.inc.call(null,i__2912));
}
} else
{if(cljs.core.truth_("﷐'else"))
{return null;
} else
{return null;
}
}
}
});
/**
* Returns the namespace String of a symbol or keyword, or nil if not present.
*/
cljs.core.namespace = (function namespace(x){
if(cljs.core.truth_((function (){var or__3576__auto____2913 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3576__auto____2913))
{return or__3576__auto____2913;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__2914 = x.lastIndexOf("/");

if(cljs.core.truth_(cljs.core._GT_.call(null,i__2914,-1)))
{return cljs.core.subs.call(null,x,2,i__2914);
} else
{return null;
}
} else
{return "﷐'else";
}
});
/**
* Returns a map with the keys mapped to the corresponding vals.
*/
cljs.core.zipmap = (function zipmap(keys,vals){
var map__2917 = cljs.core.ObjMap.fromObject([],{});
var ks__2918 = cljs.core.seq.call(null,keys);
var vs__2919 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3574__auto____2920 = ks__2918;

if(cljs.core.truth_(and__3574__auto____2920))
{return vs__2919;
} else
{return and__3574__auto____2920;
}
})()))
{{
var G__2921 = cljs.core.assoc.call(null,map__2917,cljs.core.first.call(null,ks__2918),cljs.core.first.call(null,vs__2919));
var G__2922 = cljs.core.next.call(null,ks__2918);
var G__2923 = cljs.core.next.call(null,vs__2919);
map__2917 = G__2921;
ks__2918 = G__2922;
vs__2919 = G__2923;
continue;
}
} else
{return map__2917;
}
break;
}
});
/**
* Returns the x for which (k x), a number, is greatest.
* @param {...*} var_args
*/
cljs.core.max_key = (function() {
var max_key = null;
var max_key__2926 = (function (k,x){
return x;
});
var max_key__2927 = (function (k,x,y){
if(cljs.core.truth_(cljs.core._GT_.call(null,k.call(null,x),k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__2928 = (function (k,x,y,var_args){
var more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
return cljs.core.reduce.call(null,(function (p1__2915_SHARP_,p2__2916_SHARP_){
return max_key.call(null,k,p1__2915_SHARP_,p2__2916_SHARP_);
}),max_key.call(null,k,x,y),more);
});
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__2926.call(this,k,x);
case  3 :
return max_key__2927.call(this,k,x,y);
default:
return max_key__2928.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = (function (arglist__2930){
var k = cljs.core.first(arglist__2930);
var x = cljs.core.first(cljs.core.next(arglist__2930));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2930)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2930)));
return max_key__2928.call(null, k, x, y, more);
});
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__2931 = (function (k,x){
return x;
});
var min_key__2932 = (function (k,x,y){
if(cljs.core.truth_(cljs.core._LT_.call(null,k.call(null,x),k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__2933 = (function (k,x,y,var_args){
var more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
return cljs.core.reduce.call(null,(function (p1__2924_SHARP_,p2__2925_SHARP_){
return min_key.call(null,k,p1__2924_SHARP_,p2__2925_SHARP_);
}),min_key.call(null,k,x,y),more);
});
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__2931.call(this,k,x);
case  3 :
return min_key__2932.call(this,k,x,y);
default:
return min_key__2933.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = (function (arglist__2935){
var k = cljs.core.first(arglist__2935);
var x = cljs.core.first(cljs.core.next(arglist__2935));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2935)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2935)));
return min_key__2933.call(null, k, x, y, more);
});
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__2938 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__2939 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____2936 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____2936))
{var s__2937 = temp__3726__auto____2936;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__2937),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__2937)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__2938.call(this,n,step);
case  3 :
return partition_all__2939.call(this,n,step,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return partition_all;
})()
;
/**
* Returns a lazy sequence of successive items from coll while
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.take_while = (function take_while(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____2941 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____2941))
{var s__2942 = temp__3726__auto____2941;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__2942))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__2942),take_while.call(null,pred,cljs.core.rest.call(null,s__2942)));
} else
{return null;
}
} else
{return null;
}
})));
});
/**
* Returns a lazy seq of every nth item in coll.
*/
cljs.core.take_nth = (function take_nth(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____2944 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____2944))
{var s__2945 = temp__3726__auto____2944;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__2945),take_nth.call(null,n,cljs.core.drop.call(null,n,s__2945)));
} else
{return null;
}
})));
});
/**
* Applies f to each value in coll, splitting it each time f returns
* a new value.  Returns a lazy seq of partitions.
*/
cljs.core.partition_by = (function partition_by(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____2946 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____2946))
{var s__2947 = temp__3726__auto____2946;

var fst__2948 = cljs.core.first.call(null,s__2947);
var fv__2949 = f.call(null,fst__2948);
var run__2950 = cljs.core.cons.call(null,fst__2948,cljs.core.take_while.call(null,(function (p1__2943_SHARP_){
return cljs.core._EQ_.call(null,fv__2949,f.call(null,p1__2943_SHARP_));
}),cljs.core.next.call(null,s__2947)));

return cljs.core.cons.call(null,run__2950,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__2950),s__2947))));
} else
{return null;
}
})));
});
/**
* Returns a map from distinct items in coll to the number of times
* they appear.
*/
cljs.core.frequencies = (function frequencies(coll){
return cljs.core.reduce.call(null,(function (counts,x){
return cljs.core.assoc.call(null,counts,x,cljs.core.inc.call(null,cljs.core.get.call(null,counts,x,0)));
}),cljs.core.ObjMap.fromObject([],{}),coll);
});
/**
* Returns a lazy seq of the intermediate values of the reduction (as
* per reduce) of coll by f, starting with init.
*/
cljs.core.reductions = (function() {
var reductions = null;
var reductions__2965 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3723__auto____2961 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3723__auto____2961))
{var s__2962 = temp__3723__auto____2961;

return reductions.call(null,f,cljs.core.first.call(null,s__2962),cljs.core.rest.call(null,s__2962));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__2966 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____2963 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____2963))
{var s__2964 = temp__3726__auto____2963;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__2964)),cljs.core.rest.call(null,s__2964));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__2965.call(this,f,init);
case  3 :
return reductions__2966.call(this,f,init,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reductions;
})()
;
/**
* Takes a set of functions and returns a fn that is the juxtaposition
* of those fns.  The returned fn takes a variable number of args, and
* returns a vector containing the result of applying each fn to the
* args (left-to-right).
* ((juxt a b c) x) => [(a x) (b x) (c x)]
* 
* TODO: Implement apply
* @param {...*} var_args
*/
cljs.core.juxt = (function() {
var juxt = null;
var juxt__2969 = (function (f){
return (function() {
var G__2974 = null;
var G__2974__2975 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__2974__2976 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__2974__2977 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__2974__2978 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__2974__2979 = (function (x,y,z,var_args){
var args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
});
G__2974 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__2974__2975.call(this);
case  1 :
return G__2974__2976.call(this,x);
case  2 :
return G__2974__2977.call(this,x,y);
case  3 :
return G__2974__2978.call(this,x,y,z);
default:
return G__2974__2979.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__2974.cljs$lang$maxFixedArity = 3;
G__2974.cljs$lang$applyTo = (function (arglist__2981){
var x = cljs.core.first(arglist__2981);
var y = cljs.core.first(cljs.core.next(arglist__2981));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2981)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2981)));
return G__2974__2979.call(null, x, y, z, args);
});
return G__2974;
})()
});
var juxt__2970 = (function (f,g){
return (function() {
var G__2982 = null;
var G__2982__2983 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__2982__2984 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__2982__2985 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__2982__2986 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__2982__2987 = (function (x,y,z,var_args){
var args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
});
G__2982 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__2982__2983.call(this);
case  1 :
return G__2982__2984.call(this,x);
case  2 :
return G__2982__2985.call(this,x,y);
case  3 :
return G__2982__2986.call(this,x,y,z);
default:
return G__2982__2987.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__2982.cljs$lang$maxFixedArity = 3;
G__2982.cljs$lang$applyTo = (function (arglist__2989){
var x = cljs.core.first(arglist__2989);
var y = cljs.core.first(cljs.core.next(arglist__2989));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2989)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2989)));
return G__2982__2987.call(null, x, y, z, args);
});
return G__2982;
})()
});
var juxt__2971 = (function (f,g,h){
return (function() {
var G__2990 = null;
var G__2990__2991 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__2990__2992 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__2990__2993 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__2990__2994 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__2990__2995 = (function (x,y,z,var_args){
var args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
});
G__2990 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__2990__2991.call(this);
case  1 :
return G__2990__2992.call(this,x);
case  2 :
return G__2990__2993.call(this,x,y);
case  3 :
return G__2990__2994.call(this,x,y,z);
default:
return G__2990__2995.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__2990.cljs$lang$maxFixedArity = 3;
G__2990.cljs$lang$applyTo = (function (arglist__2997){
var x = cljs.core.first(arglist__2997);
var y = cljs.core.first(cljs.core.next(arglist__2997));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2997)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2997)));
return G__2990__2995.call(null, x, y, z, args);
});
return G__2990;
})()
});
var juxt__2972 = (function (f,g,h,var_args){
var fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
var fs__2968 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__2998 = null;
var G__2998__2999 = (function (){
return cljs.core.reduce.call(null,(function (p1__2951_SHARP_,p2__2952_SHARP_){
return cljs.core.conj.call(null,p1__2951_SHARP_,p2__2952_SHARP_.call(null));
}),cljs.core.Vector.fromArray([]),fs__2968);
});
var G__2998__3000 = (function (x){
return cljs.core.reduce.call(null,(function (p1__2953_SHARP_,p2__2954_SHARP_){
return cljs.core.conj.call(null,p1__2953_SHARP_,p2__2954_SHARP_.call(null,x));
}),cljs.core.Vector.fromArray([]),fs__2968);
});
var G__2998__3001 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__2955_SHARP_,p2__2956_SHARP_){
return cljs.core.conj.call(null,p1__2955_SHARP_,p2__2956_SHARP_.call(null,x,y));
}),cljs.core.Vector.fromArray([]),fs__2968);
});
var G__2998__3002 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__2957_SHARP_,p2__2958_SHARP_){
return cljs.core.conj.call(null,p1__2957_SHARP_,p2__2958_SHARP_.call(null,x,y,z));
}),cljs.core.Vector.fromArray([]),fs__2968);
});
var G__2998__3003 = (function (x,y,z,var_args){
var args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
return cljs.core.reduce.call(null,(function (p1__2959_SHARP_,p2__2960_SHARP_){
return cljs.core.conj.call(null,p1__2959_SHARP_,cljs.core.apply.call(null,p2__2960_SHARP_,x,y,z,args));
}),cljs.core.Vector.fromArray([]),fs__2968);
});
G__2998 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__2998__2999.call(this);
case  1 :
return G__2998__3000.call(this,x);
case  2 :
return G__2998__3001.call(this,x,y);
case  3 :
return G__2998__3002.call(this,x,y,z);
default:
return G__2998__3003.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__2998.cljs$lang$maxFixedArity = 3;
G__2998.cljs$lang$applyTo = (function (arglist__3005){
var x = cljs.core.first(arglist__3005);
var y = cljs.core.first(cljs.core.next(arglist__3005));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3005)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3005)));
return G__2998__3003.call(null, x, y, z, args);
});
return G__2998;
})()
});
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__2969.call(this,f);
case  2 :
return juxt__2970.call(this,f,g);
case  3 :
return juxt__2971.call(this,f,g,h);
default:
return juxt__2972.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = (function (arglist__3006){
var f = cljs.core.first(arglist__3006);
var g = cljs.core.first(cljs.core.next(arglist__3006));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3006)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3006)));
return juxt__2972.call(null, f, g, h, fs);
});
return juxt;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. dorun can
* be used to force any effects. Walks through the successive nexts of
* the seq, does not retain the head and returns nil.
*/
cljs.core.dorun = (function() {
var dorun = null;
var dorun__3008 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__3011 = cljs.core.next.call(null,coll);
coll = G__3011;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__3009 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3574__auto____3007 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3574__auto____3007))
{return cljs.core.pos_QMARK_.call(null,n);
} else
{return and__3574__auto____3007;
}
})()))
{{
var G__3012 = cljs.core.dec.call(null,n);
var G__3013 = cljs.core.next.call(null,coll);
n = G__3012;
coll = G__3013;
continue;
}
} else
{return null;
}
break;
}
});
dorun = function(n,coll){
switch(arguments.length){
case  1 :
return dorun__3008.call(this,n);
case  2 :
return dorun__3009.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return dorun;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. doall can
* be used to force any effects. Walks through the successive nexts of
* the seq, retains the head and returns it, thus causing the entire
* seq to reside in memory at one time.
*/
cljs.core.doall = (function() {
var doall = null;
var doall__3014 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__3015 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__3014.call(this,n);
case  2 :
return doall__3015.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return doall;
})()
;
/**
* Returns the result of (re-find re s) if re fully matches s.
*/
cljs.core.re_matches = (function re_matches(re,s){
var matches__3017 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__3017),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__3017),1)))
{return cljs.core.first.call(null,matches__3017);
} else
{return cljs.core.vec.call(null,matches__3017);
}
} else
{return null;
}
});
/**
* Returns the first regex match, if any, of s to re, using
* re.exec(s). Returns a vector, containing first the matching
* substring, then any capturing groups if the regular expression contains
* capturing groups.
*/
cljs.core.re_find = (function re_find(re,s){
var matches__3018 = re.exec(s);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,matches__3018)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__3018),1)))
{return cljs.core.first.call(null,matches__3018);
} else
{return cljs.core.vec.call(null,matches__3018);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__3019 = cljs.core.re_find.call(null,re,s);
var match_idx__3020 = s.search(re);
var match_str__3021 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__3019))?cljs.core.first.call(null,match_data__3019):match_data__3019);
var post_match__3022 = cljs.core.subs.call(null,s,cljs.core._PLUS_.call(null,match_idx__3020,cljs.core.count.call(null,match_str__3021)));

if(cljs.core.truth_(match_data__3019))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__3019,re_seq.call(null,re,post_match__3022));
})));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
return (new goog.global['RegExp'](s));
});
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.Vector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.Vector.fromArray([sep]),cljs.core.map.call(null,(function (p1__3023_SHARP_){
return print_one.call(null,p1__3023_SHARP_,opts);
}),coll))),cljs.core.Vector.fromArray([end]));
});
cljs.core.string_print = (function string_print(x){
goog.global['print'].call(null,x);
return null;
});
cljs.core.flush = (function flush(){
return null;
});
cljs.core.pr_seq = (function pr_seq(obj,opts){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,"nil");
} else
{if(cljs.core.truth_(cljs.core.undefined_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,"#<undefined>");
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3574__auto____3024 = cljs.core.get.call(null,opts,"﷐'meta");

if(cljs.core.truth_(and__3574__auto____3024))
{var and__3574__auto____3027 = (function (){var x__105__auto____3025 = obj;

if(cljs.core.truth_((function (){var and__3574__auto____3026 = x__105__auto____3025;

if(cljs.core.truth_(and__3574__auto____3026))
{return x__105__auto____3025.cljs$core$IMeta$;
} else
{return and__3574__auto____3026;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__105__auto____3025);
}
})();

if(cljs.core.truth_(and__3574__auto____3027))
{return cljs.core.meta.call(null,obj);
} else
{return and__3574__auto____3027;
}
} else
{return and__3574__auto____3024;
}
})())?cljs.core.concat.call(null,cljs.core.Vector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.Vector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__105__auto____3028 = obj;

if(cljs.core.truth_((function (){var and__3574__auto____3029 = x__105__auto____3028;

if(cljs.core.truth_(and__3574__auto____3029))
{return x__105__auto____3028.cljs$core$IPrintable$;
} else
{return and__3574__auto____3029;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__105__auto____3028);
}
})())?cljs.core._pr_seq.call(null,obj,opts):cljs.core.list.call(null,"#<",cljs.core.str.call(null,obj),">")));
} else
{return null;
}
}
}
});
/**
* Prints a sequence of objects to a string, observing all the
* options given in opts
*/
cljs.core.pr_str_with_opts = (function pr_str_with_opts(objs,opts){
var first_obj__3030 = cljs.core.first.call(null,objs);
var sb__3031 = (new goog.string.StringBuffer());

var G__3032__3033 = cljs.core.seq.call(null,objs);

while(true){
if(cljs.core.truth_(G__3032__3033))
{var obj__3034 = cljs.core.first.call(null,G__3032__3033);

if(cljs.core.truth_(cljs.core.identical_QMARK_.call(null,obj__3034,first_obj__3030)))
{} else
{sb__3031.append(" ");
}
var G__3035__3036 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__3034,opts));

while(true){
if(cljs.core.truth_(G__3035__3036))
{var string__3037 = cljs.core.first.call(null,G__3035__3036);

sb__3031.append(string__3037);
{
var G__3038 = cljs.core.next.call(null,G__3035__3036);
G__3035__3036 = G__3038;
continue;
}
} else
{}
break;
}
{
var G__3039 = cljs.core.next.call(null,G__3032__3033);
G__3032__3033 = G__3039;
continue;
}
} else
{}
break;
}
return cljs.core.str.call(null,sb__3031);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__3040 = cljs.core.first.call(null,objs);

var G__3041__3042 = cljs.core.seq.call(null,objs);

while(true){
if(cljs.core.truth_(G__3041__3042))
{var obj__3043 = cljs.core.first.call(null,G__3041__3042);

if(cljs.core.truth_(cljs.core.identical_QMARK_.call(null,obj__3043,first_obj__3040)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__3044__3045 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__3043,opts));

while(true){
if(cljs.core.truth_(G__3044__3045))
{var string__3046 = cljs.core.first.call(null,G__3044__3045);

cljs.core.string_print.call(null,string__3046);
{
var G__3047 = cljs.core.next.call(null,G__3044__3045);
G__3044__3045 = G__3047;
continue;
}
} else
{}
break;
}
{
var G__3048 = cljs.core.next.call(null,G__3041__3042);
G__3041__3042 = G__3048;
continue;
}
} else
{return null;
}
break;
}
});
cljs.core.newline = (function newline(opts){
cljs.core.string_print.call(null,"\n");
if(cljs.core.truth_(cljs.core.get.call(null,opts,"﷐'flush-on-newline")))
{return cljs.core.flush.call(null);
} else
{return null;
}
});
cljs.core._STAR_flush_on_newline_STAR_ = true;
cljs.core._STAR_print_readably_STAR_ = true;
cljs.core._STAR_print_meta_STAR_ = false;
cljs.core._STAR_print_dup_STAR_ = false;
cljs.core.pr_opts = (function pr_opts(){
return cljs.core.ObjMap.fromObject(["﷐'flush-on-newline","﷐'readably","﷐'meta","﷐'dup"],{"﷐'flush-on-newline":cljs.core._STAR_flush_on_newline_STAR_,"﷐'readably":cljs.core._STAR_print_readably_STAR_,"﷐'meta":cljs.core._STAR_print_meta_STAR_,"﷐'dup":cljs.core._STAR_print_dup_STAR_});
});
/**
* pr to a string, returning it. Fundamental entrypoint to IPrintable.
* @param {...*} var_args
*/
cljs.core.pr_str = (function pr_str(var_args){
var objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
return cljs.core.pr_str_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
});
/**
* Prints the object(s) using string-print.  Prints the
* object(s), separated by spaces if there is more than one.
* By default, pr and prn print in a way that objects can be
* read by the reader
* @param {...*} var_args
*/
cljs.core.pr = (function pr(var_args){
var objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
return cljs.core.pr_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
});
/**
* Prints the object(s) using string-print.
* print and println produce output for human consumption.
* @param {...*} var_args
*/
cljs.core.print = (function cljs_core_print(var_args){
var objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
return cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"﷐'readably",false));
});
/**
* Same as print followed by (newline)
* @param {...*} var_args
*/
cljs.core.println = (function println(var_args){
var objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"﷐'readably",false));
return cljs.core.newline.call(null,cljs.core.pr_opts.call(null));
});
/**
* Same as pr followed by (newline).
* @param {...*} var_args
*/
cljs.core.prn = (function prn(var_args){
var objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
cljs.core.pr_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
return cljs.core.newline.call(null,cljs.core.pr_opts.call(null));
});
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__3049 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__3049,"{",", ","}",opts,coll);
});
(cljs.core.IPrintable["number"] = true);
(cljs.core._pr_seq["number"] = (function (n,opts){
return cljs.core.list.call(null,cljs.core.str.call(null,n));
}));
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.LazySeq.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
(cljs.core.IPrintable["boolean"] = true);
(cljs.core._pr_seq["boolean"] = (function (bool,opts){
return cljs.core.list.call(null,cljs.core.str.call(null,bool));
}));
cljs.core.Set.prototype.cljs$core$IPrintable$ = true;
cljs.core.Set.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#{"," ","}",opts,coll);
});
(cljs.core.IPrintable["string"] = true);
(cljs.core._pr_seq["string"] = (function (obj,opts){
if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3726__auto____3050 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3726__auto____3050))
{var nspc__3051 = temp__3726__auto____3050;

return cljs.core.str.call(null,nspc__3051,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3726__auto____3052 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3726__auto____3052))
{var nspc__3053 = temp__3726__auto____3052;

return cljs.core.str.call(null,nspc__3053,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.list.call(null,(cljs.core.truth_("﷐'readably".call(null,opts))?goog.string.quote.call(null,obj):obj));
} else
{return null;
}
}
}
}));
cljs.core.Vector.prototype.cljs$core$IPrintable$ = true;
cljs.core.Vector.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.List.prototype.cljs$core$IPrintable$ = true;
cljs.core.List.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
(cljs.core.IPrintable["array"] = true);
(cljs.core._pr_seq["array"] = (function (a,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#<Array [",", ","]>",opts,a);
}));
cljs.core.EmptyList.prototype.cljs$core$IPrintable$ = true;
cljs.core.EmptyList.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.list.call(null,"()");
});
cljs.core.Cons.prototype.cljs$core$IPrintable$ = true;
cljs.core.Cons.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.ObjMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.ObjMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__3054 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__3054,"{",", ","}",opts,coll);
});

/**
* @constructor
*/
cljs.core.Atom = (function (state,meta,validator){
this.state = state;
this.meta = meta;
this.validator = validator;
})
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__3055 = this;
return cljs.core.concat.call(null,cljs.core.Vector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__3055.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__3056 = this;
return this__3056.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__3057 = this;
return this__3057.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__3058 = this;
return cljs.core.identical_QMARK_.call(null,o,other);
});
/**
* Creates and returns an Atom with an initial value of x and zero or
* more options (in any order):
* 
* :meta metadata-map
* 
* :validator validate-fn
* 
* If metadata-map is supplied, it will be come the metadata on the
* atom. validate-fn must be nil or a side-effect-free fn of one
* argument, which will be passed the intended new state on any state
* change. If the new state is unacceptable, the validate-fn should
* return false or throw an exception.
* @param {...*} var_args
*/
cljs.core.atom = (function() {
var atom = null;
var atom__3065 = (function (x){
return (new cljs.core.Atom(x,null,null));
});
var atom__3066 = (function (x,var_args){
var p__3059 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
var map__3060__3061 = p__3059;
var map__3060__3062 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__3060__3061))?cljs.core.apply.call(null,cljs.core.hash_map,map__3060__3061):map__3060__3061);
var validator__3063 = cljs.core.get.call(null,map__3060__3062,"﷐'validator");
var meta__3064 = cljs.core.get.call(null,map__3060__3062,"﷐'meta");

return (new cljs.core.Atom(x,meta__3064,validator__3063));
});
atom = function(x,var_args){
var p__3059 = var_args;
switch(arguments.length){
case  1 :
return atom__3065.call(this,x);
default:
return atom__3066.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = (function (arglist__3068){
var x = cljs.core.first(arglist__3068);
var p__3059 = cljs.core.rest(arglist__3068);
return atom__3066.call(null, x, p__3059);
});
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,newval){
var temp__3726__auto____3069 = a.validator;

if(cljs.core.truth_(temp__3726__auto____3069))
{var v__3070 = temp__3726__auto____3069;

if(cljs.core.truth_(v__3070.call(null,newval)))
{} else
{throw "Validator rejected reference state";
}
} else
{}
return a.state = newval;
});
/**
* Atomically swaps the value of atom to be:
* (apply f current-value-of-atom args). Note that f may be called
* multiple times, and thus should be free of side effects.  Returns
* the value that was swapped in.
* @param {...*} var_args
*/
cljs.core.swap_BANG_ = (function() {
var swap_BANG_ = null;
var swap_BANG___3071 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___3072 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___3073 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___3074 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___3075 = (function (a,f,x,y,z,var_args){
var more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
});
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___3071.call(this,a,f);
case  3 :
return swap_BANG___3072.call(this,a,f,x);
case  4 :
return swap_BANG___3073.call(this,a,f,x,y);
case  5 :
return swap_BANG___3074.call(this,a,f,x,y,z);
default:
return swap_BANG___3075.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = (function (arglist__3077){
var a = cljs.core.first(arglist__3077);
var f = cljs.core.first(cljs.core.next(arglist__3077));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3077)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3077))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3077)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3077)))));
return swap_BANG___3075.call(null, a, f, x, y, z, more);
});
return swap_BANG_;
})()
;
/**
* Atomically sets the value of atom to newval if and only if the
* current value of the atom is identical to oldval. Returns true if
* set happened, else false.
*/
cljs.core.compare_and_set_BANG_ = (function compare_and_set_BANG_(a,oldval,newval){
if(cljs.core.truth_(cljs.core._EQ_.call(null,a.state,oldval)))
{cljs.core.reset_BANG_.call(null,a,newval);
return true;
} else
{return false;
}
});
cljs.core.deref = (function deref(o){
return cljs.core._deref.call(null,o);
});
/**
* Sets the validator-fn for a var/ref/agent/atom. validator-fn must be nil or a
* side-effect-free fn of one argument, which will be passed the intended
* new state on any state change. If the new state is unacceptable, the
* validator-fn should return false or throw an exception. If the current state (root
* value if var) is not acceptable to the new validator, an exception
* will be thrown and the validator will not be changed.
*/
cljs.core.set_validator_BANG_ = (function set_validator_BANG_(iref,val){
return iref.validator = val;
});
/**
* Gets the validator-fn for a var/ref/agent/atom.
*/
cljs.core.get_validator = (function get_validator(iref){
return iref.validator;
});
/**
* Atomically sets the metadata for a namespace/var/ref/agent/atom to be:
* 
* (apply f its-current-meta args)
* 
* f must be free of side-effects
* @param {...*} var_args
*/
cljs.core.alter_meta_BANG_ = (function alter_meta_BANG_(iref,f,var_args){
var args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
return iref.meta = cljs.core.apply.call(null,f,iref.meta,args);
});
/**
* Atomically resets the metadata for a namespace/var/ref/agent/atom
*/
cljs.core.reset_meta_BANG_ = (function reset_meta_BANG_(iref,m){
return iref.meta = m;
});
cljs.core.gensym_counter = null;
/**
* Returns a new symbol with a unique name. If a prefix string is
* supplied, the name is prefix# where # is some unique number. If
* prefix is not supplied, the prefix is 'G__'.
*/
cljs.core.gensym = (function() {
var gensym = null;
var gensym__3078 = (function (){
return gensym.call(null,"G__");
});
var gensym__3079 = (function (prefix_string){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.gensym_counter)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__3078.call(this);
case  1 :
return gensym__3079.call(this,prefix_string);
}
throw('Invalid arity: ' + arguments.length);
};
return gensym;
})()
;
cljs.core.fixture1 = 1;
cljs.core.fixture2 = 2;

/**
* @constructor
*/
cljs.core.Delay = (function (f,state){
this.f = f;
this.state = state;
})
cljs.core.Delay.prototype.cljs$core$IPending$ = true;
cljs.core.Delay.prototype.cljs$core$IPending$_realized_QMARK_ = (function (d){
var this__3081 = this;
return cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,cljs.core.deref.call(null,this__3081.state)));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__3082 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,this__3082.state)))
{} else
{cljs.core.swap_BANG_.call(null,this__3082.state,this__3082.f);
}
return cljs.core.deref.call(null,this__3082.state);
});
/**
* Takes a body of expressions and yields a Delay object that will
* invoke the body only the first time it is forced (with force or deref/@), and
* will cache the result and return it on all subsequent force
* calls.
* @param {...*} var_args
*/
cljs.core.delay = (function delay(var_args){
var body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
return (new cljs.core.Delay((function (){
return cljs.core.apply.call(null,cljs.core.identity,body);
}),cljs.core.atom.call(null,null)));
});
/**
* returns true if x is a Delay created with delay
*/
cljs.core.delay_QMARK_ = (function delay_QMARK_(x){
return cljs.core.instance_QMARK_.call(null,cljs.core.Delay,x);
});
/**
* If x is a Delay, returns the (possibly cached) value of its expression, else returns x
*/
cljs.core.force = (function force(x){
if(cljs.core.truth_(cljs.core.delay_QMARK_.call(null,x)))
{return cljs.core.deref.call(null,x);
} else
{return x;
}
});
/**
* Returns true if a value has been produced for a promise, delay, future or lazy sequence.
*/
cljs.core.realized_QMARK_ = (function realized_QMARK_(d){
return cljs.core._realized_QMARK_.call(null,d);
});
/**
* Recursively transforms JavaScript arrays into ClojureScript
* vectors, and JavaScript objects into ClojureScript maps.  With
* option ':keywordize-keys true' will convert object fields from
* strings to keywords.
* @param {...*} var_args
*/
cljs.core.js__GT_clj = (function js__GT_clj(x,var_args){
var options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
var map__3083__3084 = options;
var map__3083__3085 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__3083__3084))?cljs.core.apply.call(null,cljs.core.hash_map,map__3083__3084):map__3083__3084);
var keywordize_keys__3086 = cljs.core.get.call(null,map__3083__3085,"﷐'keywordize-keys");
var keyfn__3087 = (cljs.core.truth_(keywordize_keys__3086)?cljs.core.keyword:cljs.core.str);
var f__3093 = (function thisfn(x){
if(cljs.core.truth_(cljs.core.seq_QMARK_.call(null,x)))
{return cljs.core.doall.call(null,cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(cljs.core.coll_QMARK_.call(null,x)))
{return cljs.core.into.call(null,cljs.core.empty.call(null,x),cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(goog.isArray.call(null,x)))
{return cljs.core.vec.call(null,cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(goog.isObject.call(null,x)))
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__159__auto____3092 = (function iter__3088(s__3089){
return (new cljs.core.LazySeq(null,false,(function (){
var s__3089__3090 = s__3089;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__3089__3090)))
{var k__3091 = cljs.core.first.call(null,s__3089__3090);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([keyfn__3087.call(null,k__3091),thisfn.call(null,(x[k__3091]))]),iter__3088.call(null,cljs.core.rest.call(null,s__3089__3090)));
} else
{return null;
}
break;
}
})));
});

return iter__159__auto____3092.call(null,cljs.core.js_keys.call(null,x));
})());
} else
{if(cljs.core.truth_("﷐'else"))
{return x;
} else
{return null;
}
}
}
}
}
});

return f__3093.call(null,x);
});
/**
* Returns a memoized version of a referentially transparent function. The
* memoized version of the function keeps a cache of the mapping from arguments
* to results and, when calls with the same arguments are repeated often, has
* higher performance at the expense of higher memory use.
*/
cljs.core.memoize = (function memoize(f){
var mem__3094 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function (var_args){
var args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
var temp__3723__auto____3095 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__3094),args);

if(cljs.core.truth_(temp__3723__auto____3095))
{var v__3096 = temp__3723__auto____3095;

return v__3096;
} else
{var ret__3097 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__3094,cljs.core.assoc,args,ret__3097);
return ret__3097;
}
});
});
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__3098 = (function (){
return rand.call(null,1);
});
var rand__3099 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__3098.call(this);
case  1 :
return rand__3099.call(this,n);
}
throw('Invalid arity: ' + arguments.length);
};
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return Math.floor(Math.random() * n);
});
/**
* Return a random element of the (sequential) collection. Will have
* the same performance characteristics as nth for the given
* collection.
*/
cljs.core.rand_nth = (function rand_nth(coll){
return cljs.core.nth.call(null,coll,cljs.core.rand_int.call(null,cljs.core.count.call(null,coll)));
});
/**
* Returns a map of the elements of coll keyed by the result of
* f on each element. The value at each key will be a vector of the
* corresponding elements, in the order they appeared in coll.
*/
cljs.core.group_by = (function group_by(f,coll){
return cljs.core.reduce.call(null,(function (ret,x){
var k__3103 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__3103,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__3103,cljs.core.Vector.fromArray([])),x));
}),cljs.core.ObjMap.fromObject([],{}),coll);
});
cljs.core.test_stuff = (function test_stuff(){
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([4,3,2,1,0]),(function (){var i__3104 = 0;
var j__3105 = cljs.core.List.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core._LT_.call(null,i__3104,5)))
{{
var G__3239 = cljs.core.inc.call(null,i__3104);
var G__3240 = cljs.core.conj.call(null,j__3105,((function (i__3104,j__3105){
return (function (){
return i__3104;
});})(i__3104,j__3105))
);
i__3104 = G__3239;
j__3105 = G__3240;
continue;
}
} else
{return cljs.core.map.call(null,((function (i__3104,j__3105){
return (function (p1__3101_SHARP_){
return p1__3101_SHARP_.call(null);
});})(i__3104,j__3105))
,j__3105);
}
break;
}
})())))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [4,3,2,1,0])),cljs.core.list("﷑'loop",(new cljs.core.Vector(null, ["﷑'i",0,"﷑'j",cljs.core.List.EMPTY])),cljs.core.list("﷑'if",cljs.core.list("﷑'<","﷑'i",5),cljs.core.list("﷑'recur",cljs.core.list("﷑'inc","﷑'i"),cljs.core.list("﷑'conj","﷑'j",cljs.core.list("﷑'fn",(new cljs.core.Vector(null, [])),"﷑'i"))),cljs.core.list("﷑'map",cljs.core.list("﷑'fn*",(new cljs.core.Vector(null, ["﷑'p1__3101#"])),cljs.core.list("﷑'p1__3101#")),"﷑'j"))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([cljs.core.Vector.fromArray([1,1]),cljs.core.Vector.fromArray([1,2]),cljs.core.Vector.fromArray([1,3]),cljs.core.Vector.fromArray([2,1]),cljs.core.Vector.fromArray([2,2]),cljs.core.Vector.fromArray([2,3])]),cljs.core.map.call(null,(function (p1__3102_SHARP_){
return p1__3102_SHARP_.call(null);
}),(function (){var iter__159__auto____3116 = (function iter__3106(s__3107){
return (new cljs.core.LazySeq(null,false,(function (){
var s__3107__3110 = s__3107;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__3107__3110)))
{var i__3111 = cljs.core.first.call(null,s__3107__3110);

var iterys__157__auto____3114 = ((function (s__3107__3110){
return (function iter__3108(s__3109){
return (new cljs.core.LazySeq(null,false,((function (s__3107__3110){
return (function (){
var s__3109__3112 = s__3109;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__3109__3112)))
{var j__3113 = cljs.core.first.call(null,s__3109__3112);

return cljs.core.cons.call(null,((function (s__3107__3110){
return (function (){
return cljs.core.Vector.fromArray([i__3111,j__3113]);
});})(s__3107__3110))
,iter__3108.call(null,cljs.core.rest.call(null,s__3109__3112)));
} else
{return null;
}
break;
}
});})(s__3107__3110))
));
});})(s__3107__3110))
;
var fs__158__auto____3115 = cljs.core.seq.call(null,iterys__157__auto____3114.call(null,cljs.core.Vector.fromArray([1,2,3])));

if(cljs.core.truth_(fs__158__auto____3115))
{return cljs.core.concat.call(null,fs__158__auto____3115,iter__3106.call(null,cljs.core.rest.call(null,s__3107__3110)));
} else
{{
var G__3241 = cljs.core.rest.call(null,s__3107__3110);
s__3107__3110 = G__3241;
continue;
}
}
} else
{return null;
}
break;
}
})));
});

return iter__159__auto____3116.call(null,cljs.core.Vector.fromArray([1,2]));
})()))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [(new cljs.core.Vector(null, [1,1])),(new cljs.core.Vector(null, [1,2])),(new cljs.core.Vector(null, [1,3])),(new cljs.core.Vector(null, [2,1])),(new cljs.core.Vector(null, [2,2])),(new cljs.core.Vector(null, [2,3]))])),cljs.core.list("﷑'map",cljs.core.list("﷑'fn*",(new cljs.core.Vector(null, ["﷑'p1__3102#"])),cljs.core.list("﷑'p1__3102#")),cljs.core.list("﷑'for",(new cljs.core.Vector(null, ["﷑'i",(new cljs.core.Vector(null, [1,2])),"﷑'j",(new cljs.core.Vector(null, [1,2,3]))])),cljs.core.list("﷑'fn",(new cljs.core.Vector(null, [])),(new cljs.core.Vector(null, ["﷑'i","﷑'j"]))))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,2,"﷐'b".call(null,cljs.core.ObjMap.fromObject(["﷐'a","﷐'b"],{"﷐'a":1,"﷐'b":2})))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",2,cljs.core.list("﷐'b",cljs.core.hash_map("﷐'a",1,"﷐'b",2)))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,2,"﷑'b".call(null,cljs.core.hash_map("﷐'a",1,"﷑'b",2)))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",2,cljs.core.list(cljs.core.list("﷑'quote","﷑'b"),cljs.core.list("﷑'quote",cljs.core.hash_map("﷐'a",1,"﷑'b",2))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,2,cljs.core.ObjMap.fromObject(["﷐'a","﷐'b"],{"﷐'a":1,"﷐'b":2}).call(null,"﷐'b"))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",2,cljs.core.list(cljs.core.hash_map("﷐'a",1,"﷐'b",2),"﷐'b"))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,2,cljs.core.HashMap.fromArrays([1,2],[1,2]).call(null,2))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",2,cljs.core.list(cljs.core.hash_map(1,1,2,2),2))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,2,cljs.core.set([1,2,3]).call(null,2))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",2,cljs.core.list(cljs.core.set([1,2,3]),2))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,"baz",cljs.core.name.call(null,"﷑'foo/bar/baz"))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=","baz",cljs.core.list("﷑'name",cljs.core.list("﷑'quote","﷑'foo/bar/baz")))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,"foo/bar",cljs.core.namespace.call(null,"﷑'foo/bar/baz"))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=","foo/bar",cljs.core.list("﷑'namespace",cljs.core.list("﷑'quote","﷑'foo/bar/baz")))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,"baz",cljs.core.name.call(null,"﷐'foo/bar/baz"))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=","baz",cljs.core.list("﷑'name","﷐'foo/bar/baz"))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.ObjMap.fromObject(["﷐'a"],{"﷐'a":"﷐'b"}),cljs.core.get.call(null,cljs.core.HashMap.fromArrays([cljs.core.Vector.fromArray([1,2,3]),4],[cljs.core.ObjMap.fromObject(["﷐'a"],{"﷐'a":"﷐'b"}),5]),cljs.core.Vector.fromArray([1,2,3])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.hash_map("﷐'a","﷐'b"),cljs.core.list("﷑'get",cljs.core.hash_map((new cljs.core.Vector(null, [1,2,3])),cljs.core.hash_map("﷐'a","﷐'b"),4,5),(new cljs.core.Vector(null, [1,2,3]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,"﷐'a",cljs.core.nth.call(null,cljs.core.Vector.fromArray(["﷐'a","﷐'b","﷐'c","﷐'d"]),0))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=","﷐'a",cljs.core.list("﷑'nth",(new cljs.core.Vector(null, ["﷐'a","﷐'b","﷐'c","﷐'d"])),0))));
}
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,cljs.core.ObjMap.fromObject(["﷐'a","﷐'c"],{"﷐'a":"﷐'b","﷐'c":null}),cljs.core.ObjMap.fromObject(["﷐'a","﷐'d"],{"﷐'a":"﷐'b","﷐'d":null})))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'not",cljs.core.list("﷑'=",cljs.core.hash_map("﷐'a","﷐'b","﷐'c",null),cljs.core.hash_map("﷐'a","﷐'b","﷐'d",null)))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.list.call(null,3,2,1),cljs.core.Vector.fromArray([3,2,1]))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'list",3,2,1),(new cljs.core.Vector(null, [3,2,1])))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([3,2,1]),cljs.core.seq.call(null,cljs.core.array.call(null,3,2,1)))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [3,2,1])),cljs.core.list("﷑'seq",cljs.core.list("﷑'array",3,2,1)))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.List.EMPTY,cljs.core.rest.call(null,null))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.List.EMPTY,cljs.core.list("﷑'rest",null))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.List.EMPTY,cljs.core.rest.call(null,cljs.core.Vector.fromArray([1])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.List.EMPTY,cljs.core.list("﷑'rest",(new cljs.core.Vector(null, [1]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.List.EMPTY,cljs.core.rest.call(null,cljs.core.array.call(null,1)))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.List.EMPTY,cljs.core.list("﷑'rest",cljs.core.list("﷑'array",1)))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.ObjMap.fromObject(["x"],{"x":"y"}),cljs.core.meta.call(null,cljs.core.with_meta(cljs.core.Vector.fromArray([]),cljs.core.ObjMap.fromObject(["x"],{"x":"y"}))))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.hash_map("x","y"),cljs.core.list("﷑'meta",cljs.core.with_meta((new cljs.core.Vector(null, [])),cljs.core.hash_map("x","y"))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.ObjMap.fromObject(["﷐'a"],{"﷐'a":"﷐'b"}),cljs.core.dissoc.call(null,cljs.core.ObjMap.fromObject(["﷐'a","﷐'c"],{"﷐'a":"﷐'b","﷐'c":"﷐'d"}),"﷐'c"))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.hash_map("﷐'a","﷐'b"),cljs.core.list("﷑'dissoc",cljs.core.hash_map("﷐'a","﷐'b","﷐'c","﷐'d"),"﷐'c"))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.hash_map.call(null,"﷐'foo",5),cljs.core.assoc.call(null,(new cljs.core.ObjMap(null,cljs.core.array.call(null),cljs.core.js_obj.call(null))),"﷐'foo",5))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'hash-map","﷐'foo",5),cljs.core.list("﷑'assoc",cljs.core.list("﷑'cljs.core.ObjMap.",null,cljs.core.list("﷑'array"),cljs.core.list("﷑'js-obj")),"﷐'foo",5))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,"[1 true {:a 2, :b 42} #<Array [3, 4]>]",cljs.core.pr_str.call(null,cljs.core.Vector.fromArray([1,true,cljs.core.ObjMap.fromObject(["﷐'a","﷐'b"],{"﷐'a":2,"﷐'b":42}),cljs.core.array.call(null,3,4)])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=","[1 true {:a 2, :b 42} #<Array [3, 4]>]",cljs.core.list("﷑'pr-str",(new cljs.core.Vector(null, [1,true,cljs.core.hash_map("﷐'a",2,"﷐'b",42),cljs.core.list("﷑'array",3,4)]))))));
}
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,"one","two"))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'not",cljs.core.list("﷑'=","one","two"))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,3,cljs.core._count.call(null,"abc"))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",3,cljs.core.list("﷑'-count","abc"))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,4,cljs.core._count.call(null,cljs.core.array.call(null,1,2,3,4)))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",4,cljs.core.list("﷑'-count",cljs.core.list("﷑'array",1,2,3,4)))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,"c",cljs.core._nth.call(null,"abc",2))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=","c",cljs.core.list("﷑'-nth","abc",2))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,"quux",cljs.core._nth.call(null,"abc",3,"quux"))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=","quux",cljs.core.list("﷑'-nth","abc",3,"quux"))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,1,cljs.core._nth.call(null,cljs.core.array.call(null,1,2,3,4),0))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",1,cljs.core.list("﷑'-nth",cljs.core.list("﷑'array",1,2,3,4),0))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,"val",cljs.core._nth.call(null,cljs.core.array.call(null,1,2,3,4),4,"val"))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=","val",cljs.core.list("﷑'-nth",cljs.core.list("﷑'array",1,2,3,4),4,"val"))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,"b",cljs.core._lookup.call(null,"abc",1))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=","b",cljs.core.list("﷑'-lookup","abc",1))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,"harriet",cljs.core._lookup.call(null,"abcd",4,"harriet"))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=","harriet",cljs.core.list("﷑'-lookup","abcd",4,"harriet"))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,4,cljs.core._lookup.call(null,cljs.core.array.call(null,1,2,3,4),3))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",4,cljs.core.list("﷑'-lookup",cljs.core.list("﷑'array",1,2,3,4),3))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,"zot",cljs.core._lookup.call(null,cljs.core.array.call(null,1,2,3,4),4,"zot"))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=","zot",cljs.core.list("﷑'-lookup",cljs.core.list("﷑'array",1,2,3,4),4,"zot"))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,10,cljs.core._reduce.call(null,cljs.core.array.call(null,1,2,3,4),cljs.core._PLUS_))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",10,cljs.core.list("﷑'-reduce",cljs.core.list("﷑'array",1,2,3,4),"﷑'+"))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,20,cljs.core._reduce.call(null,cljs.core.array.call(null,1,2,3,4),cljs.core._PLUS_,10))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",20,cljs.core.list("﷑'-reduce",cljs.core.list("﷑'array",1,2,3,4),"﷑'+",10))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,"cabd",(function (){var jumble__3117 = (function (a,b){
return cljs.core.str.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.reverse.call(null,cljs.core.str.call(null,a))),b);
});

return cljs.core._reduce.call(null,"abcd",jumble__3117);
})())))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=","cabd",cljs.core.list("﷑'let",(new cljs.core.Vector(null, ["﷑'jumble",cljs.core.list("﷑'fn",(new cljs.core.Vector(null, ["﷑'a","﷑'b"])),cljs.core.list("﷑'str",cljs.core.list("﷑'apply","﷑'str",cljs.core.list("﷑'reverse",cljs.core.list("﷑'str","﷑'a"))),"﷑'b"))])),cljs.core.list("﷑'-reduce","abcd","﷑'jumble")))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,"cafrogbd",(function (){var jumble__3118 = (function (a,b){
return cljs.core.str.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.reverse.call(null,cljs.core.str.call(null,a))),b);
});

return cljs.core._reduce.call(null,"abcd",jumble__3118,"frog");
})())))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=","cafrogbd",cljs.core.list("﷑'let",(new cljs.core.Vector(null, ["﷑'jumble",cljs.core.list("﷑'fn",(new cljs.core.Vector(null, ["﷑'a","﷑'b"])),cljs.core.list("﷑'str",cljs.core.list("﷑'apply","﷑'str",cljs.core.list("﷑'reverse",cljs.core.list("﷑'str","﷑'a"))),"﷑'b"))])),cljs.core.list("﷑'-reduce","abcd","﷑'jumble","frog")))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([0,0,1,0,1]),cljs.core.Vector.fromArray([cljs.core.bit_and.call(null,1,0),cljs.core.bit_and.call(null,0,0),cljs.core.bit_and.call(null,1,1),cljs.core.bit_and.call(null,42,1),cljs.core.bit_and.call(null,41,1)]))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [0,0,1,0,1])),(new cljs.core.Vector(null, [cljs.core.list("﷑'bit-and",1,0),cljs.core.list("﷑'bit-and",0,0),cljs.core.list("﷑'bit-and",1,1),cljs.core.list("﷑'bit-and",42,1),cljs.core.list("﷑'bit-and",41,1)])))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([1,0,1,43,41]),cljs.core.Vector.fromArray([cljs.core.bit_or.call(null,1,0),cljs.core.bit_or.call(null,0,0),cljs.core.bit_or.call(null,1,1),cljs.core.bit_or.call(null,42,1),cljs.core.bit_or.call(null,41,1)]))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [1,0,1,43,41])),(new cljs.core.Vector(null, [cljs.core.list("﷑'bit-or",1,0),cljs.core.list("﷑'bit-or",0,0),cljs.core.list("﷑'bit-or",1,1),cljs.core.list("﷑'bit-or",42,1),cljs.core.list("﷑'bit-or",41,1)])))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([1,0,0,42,40]),cljs.core.Vector.fromArray([cljs.core.bit_and_not.call(null,1,0),cljs.core.bit_and_not.call(null,0,0),cljs.core.bit_and_not.call(null,1,1),cljs.core.bit_and_not.call(null,42,1),cljs.core.bit_and_not.call(null,41,1)]))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [1,0,0,42,40])),(new cljs.core.Vector(null, [cljs.core.list("﷑'bit-and-not",1,0),cljs.core.list("﷑'bit-and-not",0,0),cljs.core.list("﷑'bit-and-not",1,1),cljs.core.list("﷑'bit-and-not",42,1),cljs.core.list("﷑'bit-and-not",41,1)])))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([0,2,968,16649,0]),cljs.core.Vector.fromArray([cljs.core.bit_clear.call(null,1,0),cljs.core.bit_clear.call(null,2,0),cljs.core.bit_clear.call(null,1000,5),cljs.core.bit_clear.call(null,16713,6),cljs.core.bit_clear.call(null,1024,10)]))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [0,2,968,16649,0])),(new cljs.core.Vector(null, [cljs.core.list("﷑'bit-clear",1,0),cljs.core.list("﷑'bit-clear",2,0),cljs.core.list("﷑'bit-clear",1000,5),cljs.core.list("﷑'bit-clear",16713,6),cljs.core.list("﷑'bit-clear",1024,10)])))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([0,0,992,18761,0]),cljs.core.Vector.fromArray([cljs.core.bit_flip.call(null,1,0),cljs.core.bit_flip.call(null,2,1),cljs.core.bit_flip.call(null,1000,3),cljs.core.bit_flip.call(null,16713,11),cljs.core.bit_flip.call(null,1024,10)]))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [0,0,992,18761,0])),(new cljs.core.Vector(null, [cljs.core.list("﷑'bit-flip",1,0),cljs.core.list("﷑'bit-flip",2,1),cljs.core.list("﷑'bit-flip",1000,3),cljs.core.list("﷑'bit-flip",16713,11),cljs.core.list("﷑'bit-flip",1024,10)])))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([-2,-3,999,-16714,-1025]),cljs.core.Vector.fromArray([cljs.core.bit_not.call(null,1),cljs.core.bit_not.call(null,2),cljs.core.bit_not.call(null,-1000),cljs.core.bit_not.call(null,16713),cljs.core.bit_not.call(null,1024)]))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [-2,-3,999,-16714,-1025])),(new cljs.core.Vector(null, [cljs.core.list("﷑'bit-not",1),cljs.core.list("﷑'bit-not",2),cljs.core.list("﷑'bit-not",-1000),cljs.core.list("﷑'bit-not",16713),cljs.core.list("﷑'bit-not",1024)])))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([1,2,1000,18761,1024]),cljs.core.Vector.fromArray([cljs.core.bit_set.call(null,1,0),cljs.core.bit_set.call(null,2,1),cljs.core.bit_set.call(null,1000,3),cljs.core.bit_set.call(null,16713,11),cljs.core.bit_set.call(null,1024,10)]))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [1,2,1000,18761,1024])),(new cljs.core.Vector(null, [cljs.core.list("﷑'bit-set",1,0),cljs.core.list("﷑'bit-set",2,1),cljs.core.list("﷑'bit-set",1000,3),cljs.core.list("﷑'bit-set",16713,11),cljs.core.list("﷑'bit-set",1024,10)])))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([true,true,true,false,true]),cljs.core.Vector.fromArray([cljs.core.bit_test.call(null,1,0),cljs.core.bit_test.call(null,2,1),cljs.core.bit_test.call(null,1000,3),cljs.core.bit_test.call(null,16713,11),cljs.core.bit_test.call(null,1024,10)]))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [true,true,true,false,true])),(new cljs.core.Vector(null, [cljs.core.list("﷑'bit-test",1,0),cljs.core.list("﷑'bit-test",2,1),cljs.core.list("﷑'bit-test",1000,3),cljs.core.list("﷑'bit-test",16713,11),cljs.core.list("﷑'bit-test",1024,10)])))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([true,false,true,false,false,false]),cljs.core.Vector.fromArray([cljs.core.true_QMARK_.call(null,true),cljs.core.true_QMARK_.call(null,false),cljs.core.false_QMARK_.call(null,false),cljs.core.false_QMARK_.call(null,true),cljs.core.true_QMARK_.call(null,goog.global['undefined']),cljs.core.false_QMARK_.call(null,goog.global['undefined'])]))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [true,false,true,false,false,false])),(new cljs.core.Vector(null, [cljs.core.list("﷑'true?",true),cljs.core.list("﷑'true?",false),cljs.core.list("﷑'false?",false),cljs.core.list("﷑'false?",true),cljs.core.list("﷑'true?","﷑'js/undefined"),cljs.core.list("﷑'false?","﷑'js/undefined")])))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core.apply.call(null,cljs.core._PLUS_,null))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",0,cljs.core.list("﷑'apply","﷑'+",null))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.list.call(null)))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",0,cljs.core.list("﷑'apply","﷑'+",cljs.core.list("﷑'list")))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,1,cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.list.call(null,1)))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",1,cljs.core.list("﷑'apply","﷑'+",cljs.core.list("﷑'list",1)))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,3,cljs.core.apply.call(null,cljs.core._PLUS_,1,cljs.core.list.call(null,2)))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",3,cljs.core.list("﷑'apply","﷑'+",1,cljs.core.list("﷑'list",2)))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,7,cljs.core.apply.call(null,cljs.core._PLUS_,1,2,cljs.core.list.call(null,4)))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",7,cljs.core.list("﷑'apply","﷑'+",1,2,cljs.core.list("﷑'list",4)))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,15,cljs.core.apply.call(null,cljs.core._PLUS_,1,2,4,cljs.core.list.call(null,8)))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",15,cljs.core.list("﷑'apply","﷑'+",1,2,4,cljs.core.list("﷑'list",8)))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,31,cljs.core.apply.call(null,cljs.core._PLUS_,1,2,4,8,cljs.core.list.call(null,16)))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",31,cljs.core.list("﷑'apply","﷑'+",1,2,4,8,cljs.core.list("﷑'list",16)))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,63,cljs.core.apply.call(null,cljs.core._PLUS_,1,2,4,8,16,cljs.core.list.call(null,32)))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",63,cljs.core.list("﷑'apply","﷑'+",1,2,4,8,16,cljs.core.list("﷑'list",32)))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,127,cljs.core.apply.call(null,cljs.core._PLUS_,1,2,4,8,16,cljs.core.list.call(null,32,64)))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",127,cljs.core.list("﷑'apply","﷑'+",1,2,4,8,16,cljs.core.list("﷑'list",32,64)))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,4950,cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.take.call(null,100,cljs.core.iterate.call(null,cljs.core.inc,0))))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",4950,cljs.core.list("﷑'apply","﷑'+",cljs.core.list("﷑'take",100,cljs.core.list("﷑'iterate","﷑'inc",0))))));
}
var a__3119 = cljs.core.atom.call(null,0);

if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core.deref.call(null,a__3119))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",0,cljs.core.list("﷑'deref","﷑'a"))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,1,cljs.core.swap_BANG_.call(null,a__3119,cljs.core.inc))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",1,cljs.core.list("﷑'swap!","﷑'a","﷑'inc"))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,false,cljs.core.compare_and_set_BANG_.call(null,a__3119,0,42))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",false,cljs.core.list("﷑'compare-and-set!","﷑'a",0,42))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,true,cljs.core.compare_and_set_BANG_.call(null,a__3119,1,7))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",true,cljs.core.list("﷑'compare-and-set!","﷑'a",1,7))));
}
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.meta.call(null,a__3119))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'nil?",cljs.core.list("﷑'meta","﷑'a"))));
}
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.get_validator.call(null,a__3119))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'nil?",cljs.core.list("﷑'get-validator","﷑'a"))));
}
var a__3120 = cljs.core.atom.call(null,0);

if(cljs.core.truth_(cljs.core._EQ_.call(null,1,cljs.core.swap_BANG_.call(null,a__3120,cljs.core._PLUS_,1))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",1,cljs.core.list("﷑'swap!","﷑'a","﷑'+",1))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,4,cljs.core.swap_BANG_.call(null,a__3120,cljs.core._PLUS_,1,2))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",4,cljs.core.list("﷑'swap!","﷑'a","﷑'+",1,2))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,10,cljs.core.swap_BANG_.call(null,a__3120,cljs.core._PLUS_,1,2,3))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",10,cljs.core.list("﷑'swap!","﷑'a","﷑'+",1,2,3))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,20,cljs.core.swap_BANG_.call(null,a__3120,cljs.core._PLUS_,1,2,3,4))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",20,cljs.core.list("﷑'swap!","﷑'a","﷑'+",1,2,3,4))));
}
var a__3121 = cljs.core.atom.call(null,cljs.core.Vector.fromArray([1]),"﷐'validator",cljs.core.coll_QMARK_,"﷐'meta",cljs.core.ObjMap.fromObject(["﷐'a"],{"﷐'a":1}));

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.coll_QMARK_,cljs.core.get_validator.call(null,a__3121))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=","﷑'coll?",cljs.core.list("﷑'get-validator","﷑'a"))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.ObjMap.fromObject(["﷐'a"],{"﷐'a":1}),cljs.core.meta.call(null,a__3121))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.hash_map("﷐'a",1),cljs.core.list("﷑'meta","﷑'a"))));
}
cljs.core.alter_meta_BANG_.call(null,a__3121,cljs.core.assoc,"﷐'b",2);
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.ObjMap.fromObject(["﷐'a","﷐'b"],{"﷐'a":1,"﷐'b":2}),cljs.core.meta.call(null,a__3121))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.hash_map("﷐'a",1,"﷐'b",2),cljs.core.list("﷑'meta","﷑'a"))));
}
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.empty.call(null,null))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'nil?",cljs.core.list("﷑'empty",null))));
}
var e_lazy_seq__3122 = cljs.core.empty.call(null,cljs.core.with_meta.call(null,(new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,"﷐'a",null);
}))),cljs.core.ObjMap.fromObject(["﷐'b"],{"﷐'b":"﷐'c"})));

if(cljs.core.truth_(cljs.core.seq_QMARK_.call(null,e_lazy_seq__3122)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'seq?","﷑'e-lazy-seq")));
}
if(cljs.core.truth_(cljs.core.empty_QMARK_.call(null,e_lazy_seq__3122)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'empty?","﷑'e-lazy-seq")));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.ObjMap.fromObject(["﷐'b"],{"﷐'b":"﷐'c"}),cljs.core.meta.call(null,e_lazy_seq__3122))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.hash_map("﷐'b","﷐'c"),cljs.core.list("﷑'meta","﷑'e-lazy-seq"))));
}
var e_list__3123 = cljs.core.empty.call(null,cljs.core.with_meta(cljs.core.list(1,2,3),cljs.core.hash_map("﷐'b","﷐'c")));

if(cljs.core.truth_(cljs.core.seq_QMARK_.call(null,e_list__3123)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'seq?","﷑'e-list")));
}
if(cljs.core.truth_(cljs.core.empty_QMARK_.call(null,e_list__3123)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'empty?","﷑'e-list")));
}
var e_elist__3124 = cljs.core.empty.call(null,cljs.core.with_meta(cljs.core.List.EMPTY,cljs.core.hash_map("﷐'b","﷐'c")));

if(cljs.core.truth_(cljs.core.seq_QMARK_.call(null,e_elist__3124)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'seq?","﷑'e-elist")));
}
if(cljs.core.truth_(cljs.core.empty_QMARK_.call(null,e_elist__3124)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'empty?","﷑'e-elist")));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,"﷐'c",cljs.core.get.call(null,cljs.core.meta.call(null,e_elist__3124),"﷐'b"))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=","﷐'c",cljs.core.list("﷑'get",cljs.core.list("﷑'meta","﷑'e-elist"),"﷐'b"))));
}
var e_cons__3125 = cljs.core.empty.call(null,cljs.core.with_meta.call(null,cljs.core.cons.call(null,"﷐'a",null),cljs.core.ObjMap.fromObject(["﷐'b"],{"﷐'b":"﷐'c"})));

if(cljs.core.truth_(cljs.core.seq_QMARK_.call(null,e_cons__3125)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'seq?","﷑'e-cons")));
}
if(cljs.core.truth_(cljs.core.empty_QMARK_.call(null,e_cons__3125)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'empty?","﷑'e-cons")));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.ObjMap.fromObject(["﷐'b"],{"﷐'b":"﷐'c"}),cljs.core.meta.call(null,e_cons__3125))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.hash_map("﷐'b","﷐'c"),cljs.core.list("﷑'meta","﷑'e-cons"))));
}
var e_vec__3126 = cljs.core.empty.call(null,cljs.core.with_meta(cljs.core.Vector.fromArray(["﷐'a","﷐'d","﷐'g"]),cljs.core.ObjMap.fromObject(["﷐'b"],{"﷐'b":"﷐'c"})));

if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,e_vec__3126)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'vector?","﷑'e-vec")));
}
if(cljs.core.truth_(cljs.core.empty_QMARK_.call(null,e_vec__3126)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'empty?","﷑'e-vec")));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.ObjMap.fromObject(["﷐'b"],{"﷐'b":"﷐'c"}),cljs.core.meta.call(null,e_vec__3126))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.hash_map("﷐'b","﷐'c"),cljs.core.list("﷑'meta","﷑'e-vec"))));
}
var e_omap__3127 = cljs.core.empty.call(null,cljs.core.with_meta(cljs.core.ObjMap.fromObject(["﷐'a","﷐'g"],{"﷐'a":"﷐'d","﷐'g":"﷐'h"}),cljs.core.ObjMap.fromObject(["﷐'b"],{"﷐'b":"﷐'c"})));

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,e_omap__3127)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'map?","﷑'e-omap")));
}
if(cljs.core.truth_(cljs.core.empty_QMARK_.call(null,e_omap__3127)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'empty?","﷑'e-omap")));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.ObjMap.fromObject(["﷐'b"],{"﷐'b":"﷐'c"}),cljs.core.meta.call(null,e_omap__3127))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.hash_map("﷐'b","﷐'c"),cljs.core.list("﷑'meta","﷑'e-omap"))));
}
var e_hmap__3128 = cljs.core.empty.call(null,cljs.core.with_meta(cljs.core.HashMap.fromArrays([cljs.core.Vector.fromArray([1,2]),"﷐'g"],["﷐'d","﷐'h"]),cljs.core.ObjMap.fromObject(["﷐'b"],{"﷐'b":"﷐'c"})));

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,e_hmap__3128)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'map?","﷑'e-hmap")));
}
if(cljs.core.truth_(cljs.core.empty_QMARK_.call(null,e_hmap__3128)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'empty?","﷑'e-hmap")));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.ObjMap.fromObject(["﷐'b"],{"﷐'b":"﷐'c"}),cljs.core.meta.call(null,e_hmap__3128))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.hash_map("﷐'b","﷐'c"),cljs.core.list("﷑'meta","﷑'e-hmap"))));
}
var a__3129 = cljs.core.atom.call(null,null);

if(cljs.core.truth_(cljs.core._EQ_.call(null,1,1)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",1,cljs.core.list("﷑'try",1))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,2,(function (){try{throw (new goog.global['Error']());
}catch (e3131){if(cljs.core.truth_(cljs.core.instance_QMARK_.call(null,goog.global['Error'],e3131)))
{var e__3132 = e3131;

return 2;
} else
{if(cljs.core.truth_("﷐'else"))
{throw e3131;
} else
{return null;
}
}
}})())))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",2,cljs.core.list("﷑'try",1,cljs.core.list("﷑'throw",cljs.core.list("﷑'js/Error.")),cljs.core.list("﷑'catch","﷑'js/Error","﷑'e",2)))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,2,(function (){try{throw (new goog.global['Error']());
}catch (e3133){if(cljs.core.truth_(cljs.core.instance_QMARK_.call(null,goog.global['Error'],e3133)))
{var e__3134 = e3133;

return 2;
} else
{if(cljs.core.truth_("﷐'else"))
{throw e3133;
} else
{return null;
}
}
}})())))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",2,cljs.core.list("﷑'try",1,cljs.core.list("﷑'throw",cljs.core.list("﷑'js/Error.")),cljs.core.list("﷑'catch","﷑'js/Error","﷑'e",1,2)))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,1,(function (){try{return 1;
}finally {cljs.core.reset_BANG_.call(null,a__3129,42);
}})())))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",1,cljs.core.list("﷑'try",1,cljs.core.list("﷑'finally",cljs.core.list("﷑'reset!","﷑'a",42))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,42,cljs.core.deref.call(null,a__3129))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",42,cljs.core.list("﷑'deref","﷑'a"))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([3]),cljs.core.nthnext.call(null,cljs.core.Vector.fromArray([1,2,3]),2))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [3])),cljs.core.list("﷑'nthnext",(new cljs.core.Vector(null, [1,2,3])),2))));
}
var v__3136 = cljs.core.Vector.fromArray([1,2,3]);

if(cljs.core.truth_(cljs.core._EQ_.call(null,v__3136,(function (){var iter__159__auto____3141 = (function iter__3137(s__3138){
return (new cljs.core.LazySeq(null,false,(function (){
var s__3138__3139 = s__3138;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__3138__3139)))
{var e__3140 = cljs.core.first.call(null,s__3138__3139);

return cljs.core.cons.call(null,e__3140,iter__3137.call(null,cljs.core.rest.call(null,s__3138__3139)));
} else
{return null;
}
break;
}
})));
});

return iter__159__auto____3141.call(null,v__3136);
})())))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=","﷑'v",cljs.core.list("﷑'for",(new cljs.core.Vector(null, ["﷑'e","﷑'v"])),"﷑'e"))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([cljs.core.Vector.fromArray([1,1]),cljs.core.Vector.fromArray([2,4]),cljs.core.Vector.fromArray([3,9])]),(function (){var iter__159__auto____3147 = (function iter__3142(s__3143){
return (new cljs.core.LazySeq(null,false,(function (){
var s__3143__3144 = s__3143;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__3143__3144)))
{var e__3145 = cljs.core.first.call(null,s__3143__3144);

var m__3146 = cljs.core._STAR_.call(null,e__3145,e__3145);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([e__3145,m__3146]),iter__3142.call(null,cljs.core.rest.call(null,s__3143__3144)));
} else
{return null;
}
break;
}
})));
});

return iter__159__auto____3147.call(null,v__3136);
})())))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [(new cljs.core.Vector(null, [1,1])),(new cljs.core.Vector(null, [2,4])),(new cljs.core.Vector(null, [3,9]))])),cljs.core.list("﷑'for",(new cljs.core.Vector(null, ["﷑'e","﷑'v","﷐'let",(new cljs.core.Vector(null, ["﷑'m",cljs.core.list("﷑'*","﷑'e","﷑'e")]))])),(new cljs.core.Vector(null, ["﷑'e","﷑'m"]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([1,2]),(function (){var iter__159__auto____3152 = (function iter__3148(s__3149){
return (new cljs.core.LazySeq(null,false,(function (){
var s__3149__3150 = s__3149;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__3149__3150)))
{var e__3151 = cljs.core.first.call(null,s__3149__3150);

if(cljs.core.truth_(cljs.core._LT_.call(null,e__3151,3)))
{return cljs.core.cons.call(null,e__3151,iter__3148.call(null,cljs.core.rest.call(null,s__3149__3150)));
} else
{return null;
}
} else
{return null;
}
break;
}
})));
});

return iter__159__auto____3152.call(null,v__3136);
})())))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [1,2])),cljs.core.list("﷑'for",(new cljs.core.Vector(null, ["﷑'e","﷑'v","﷐'while",cljs.core.list("﷑'<","﷑'e",3)])),"﷑'e"))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([3]),(function (){var iter__159__auto____3157 = (function iter__3153(s__3154){
return (new cljs.core.LazySeq(null,false,(function (){
var s__3154__3155 = s__3154;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__3154__3155)))
{var e__3156 = cljs.core.first.call(null,s__3154__3155);

if(cljs.core.truth_(cljs.core._GT_.call(null,e__3156,2)))
{return cljs.core.cons.call(null,e__3156,iter__3153.call(null,cljs.core.rest.call(null,s__3154__3155)));
} else
{{
var G__3242 = cljs.core.rest.call(null,s__3154__3155);
s__3154__3155 = G__3242;
continue;
}
}
} else
{return null;
}
break;
}
})));
});

return iter__159__auto____3157.call(null,v__3136);
})())))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [3])),cljs.core.list("﷑'for",(new cljs.core.Vector(null, ["﷑'e","﷑'v","﷐'when",cljs.core.list("﷑'>","﷑'e",2)])),"﷑'e"))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([cljs.core.Vector.fromArray([1,1]),cljs.core.Vector.fromArray([2,4])]),(function (){var iter__159__auto____3163 = (function iter__3158(s__3159){
return (new cljs.core.LazySeq(null,false,(function (){
var s__3159__3160 = s__3159;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__3159__3160)))
{var e__3161 = cljs.core.first.call(null,s__3159__3160);

if(cljs.core.truth_(cljs.core._LT_.call(null,e__3161,3)))
{var m__3162 = cljs.core._STAR_.call(null,e__3161,e__3161);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([e__3161,m__3162]),iter__3158.call(null,cljs.core.rest.call(null,s__3159__3160)));
} else
{return null;
}
} else
{return null;
}
break;
}
})));
});

return iter__159__auto____3163.call(null,v__3136);
})())))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [(new cljs.core.Vector(null, [1,1])),(new cljs.core.Vector(null, [2,4]))])),cljs.core.list("﷑'for",(new cljs.core.Vector(null, ["﷑'e","﷑'v","﷐'while",cljs.core.list("﷑'<","﷑'e",3),"﷐'let",(new cljs.core.Vector(null, ["﷑'m",cljs.core.list("﷑'*","﷑'e","﷑'e")]))])),(new cljs.core.Vector(null, ["﷑'e","﷑'m"]))))));
}
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,1,2)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'not=",1,2)));
}
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.not_EQ_.call(null,1,1))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'not",cljs.core.list("﷑'not=",1,1))));
}
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.not_empty.call(null,cljs.core.Vector.fromArray([])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'not",cljs.core.list("﷑'not-empty",(new cljs.core.Vector(null, []))))));
}
if(cljs.core.truth_(cljs.core.boolean$.call(null,cljs.core.not_empty.call(null,cljs.core.Vector.fromArray([1,2,3])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'boolean",cljs.core.list("﷑'not-empty",(new cljs.core.Vector(null, [1,2,3]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,"joel",cljs.core.min_key.call(null,cljs.core.count,"joel","tom servo","crooooooooow"))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=","joel",cljs.core.list("﷑'min-key","﷑'count","joel","tom servo","crooooooooow"))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,"crooooooooow",cljs.core.max_key.call(null,cljs.core.count,"joel","tom servo","crooooooooow"))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=","crooooooooow",cljs.core.list("﷑'max-key","﷑'count","joel","tom servo","crooooooooow"))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.partition_all.call(null,4,cljs.core.Vector.fromArray([1,2,3,4,5,6,7,8,9])),cljs.core.Vector.fromArray([cljs.core.Vector.fromArray([1,2,3,4]),cljs.core.Vector.fromArray([5,6,7,8]),cljs.core.Vector.fromArray([9])]))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'partition-all",4,(new cljs.core.Vector(null, [1,2,3,4,5,6,7,8,9]))),(new cljs.core.Vector(null, [(new cljs.core.Vector(null, [1,2,3,4])),(new cljs.core.Vector(null, [5,6,7,8])),(new cljs.core.Vector(null, [9]))])))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.partition_all.call(null,4,2,cljs.core.Vector.fromArray([1,2,3,4,5,6,7,8,9])),cljs.core.Vector.fromArray([cljs.core.Vector.fromArray([1,2,3,4]),cljs.core.Vector.fromArray([3,4,5,6]),cljs.core.Vector.fromArray([5,6,7,8]),cljs.core.Vector.fromArray([7,8,9]),cljs.core.Vector.fromArray([9])]))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'partition-all",4,2,(new cljs.core.Vector(null, [1,2,3,4,5,6,7,8,9]))),(new cljs.core.Vector(null, [(new cljs.core.Vector(null, [1,2,3,4])),(new cljs.core.Vector(null, [3,4,5,6])),(new cljs.core.Vector(null, [5,6,7,8])),(new cljs.core.Vector(null, [7,8,9])),(new cljs.core.Vector(null, [9]))])))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([true,true]),cljs.core.take_while.call(null,cljs.core.true_QMARK_,cljs.core.Vector.fromArray([true,true,2,3,4])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [true,true])),cljs.core.list("﷑'take-while","﷑'true?",(new cljs.core.Vector(null, [true,true,2,3,4]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([cljs.core.Vector.fromArray([true,true]),cljs.core.Vector.fromArray([false,false,false]),cljs.core.Vector.fromArray([true,true])]),cljs.core.partition_by.call(null,cljs.core.true_QMARK_,cljs.core.Vector.fromArray([true,true,false,false,false,true,true])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [(new cljs.core.Vector(null, [true,true])),(new cljs.core.Vector(null, [false,false,false])),(new cljs.core.Vector(null, [true,true]))])),cljs.core.list("﷑'partition-by","﷑'true?",(new cljs.core.Vector(null, [true,true,false,false,false,true,true]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([0,2,4,6,8,10]),cljs.core.take_nth.call(null,2,cljs.core.Vector.fromArray([0,1,2,3,4,5,6,7,8,9,10])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [0,2,4,6,8,10])),cljs.core.list("﷑'take-nth",2,(new cljs.core.Vector(null, [0,1,2,3,4,5,6,7,8,9,10]))))));
}
var a10__3164 = cljs.core.partial.call(null,cljs.core._PLUS_,10);
var a20__3165 = cljs.core.partial.call(null,cljs.core._PLUS_,10,10);
var a21__3166 = cljs.core.partial.call(null,cljs.core._PLUS_,10,10,1);
var a22__3167 = cljs.core.partial.call(null,cljs.core._PLUS_,10,5,4,3);
var a23__3168 = cljs.core.partial.call(null,cljs.core._PLUS_,10,5,4,3,1);

if(cljs.core.truth_(cljs.core._EQ_.call(null,110,a10__3164.call(null,100))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",110,cljs.core.list("﷑'a10",100))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,120,a20__3165.call(null,100))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",120,cljs.core.list("﷑'a20",100))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,121,a21__3166.call(null,100))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",121,cljs.core.list("﷑'a21",100))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,122,a22__3167.call(null,100))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",122,cljs.core.list("﷑'a22",100))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,123,a23__3168.call(null,100))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",123,cljs.core.list("﷑'a23",100))));
}
var n2__3169 = cljs.core.comp.call(null,cljs.core.first,cljs.core.rest);
var n3__3170 = cljs.core.comp.call(null,cljs.core.first,cljs.core.rest,cljs.core.rest);
var n4__3171 = cljs.core.comp.call(null,cljs.core.first,cljs.core.rest,cljs.core.rest,cljs.core.rest);
var n5__3172 = cljs.core.comp.call(null,cljs.core.first,cljs.core.rest,cljs.core.rest,cljs.core.rest,cljs.core.rest);
var n6__3173 = cljs.core.comp.call(null,cljs.core.first,cljs.core.rest,cljs.core.rest,cljs.core.rest,cljs.core.rest,cljs.core.rest);

if(cljs.core.truth_(cljs.core._EQ_.call(null,2,n2__3169.call(null,cljs.core.Vector.fromArray([1,2,3,4,5,6,7])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",2,cljs.core.list("﷑'n2",(new cljs.core.Vector(null, [1,2,3,4,5,6,7]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,3,n3__3170.call(null,cljs.core.Vector.fromArray([1,2,3,4,5,6,7])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",3,cljs.core.list("﷑'n3",(new cljs.core.Vector(null, [1,2,3,4,5,6,7]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,4,n4__3171.call(null,cljs.core.Vector.fromArray([1,2,3,4,5,6,7])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",4,cljs.core.list("﷑'n4",(new cljs.core.Vector(null, [1,2,3,4,5,6,7]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,5,n5__3172.call(null,cljs.core.Vector.fromArray([1,2,3,4,5,6,7])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",5,cljs.core.list("﷑'n5",(new cljs.core.Vector(null, [1,2,3,4,5,6,7]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,6,n6__3173.call(null,cljs.core.Vector.fromArray([1,2,3,4,5,6,7])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",6,cljs.core.list("﷑'n6",(new cljs.core.Vector(null, [1,2,3,4,5,6,7]))))));
}
var sf__3174 = cljs.core.some_fn.call(null,cljs.core.number_QMARK_,cljs.core.keyword_QMARK_,cljs.core.symbol_QMARK_);

if(cljs.core.truth_(sf__3174.call(null,"﷐'foo",1)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'sf","﷐'foo",1)));
}
if(cljs.core.truth_(sf__3174.call(null,"﷐'foo")))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'sf","﷐'foo")));
}
if(cljs.core.truth_(sf__3174.call(null,"﷑'bar",1)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'sf",cljs.core.list("﷑'quote","﷑'bar"),1)));
}
if(cljs.core.truth_(cljs.core.not.call(null,sf__3174.call(null,cljs.core.Vector.fromArray([]),cljs.core.List.EMPTY))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'not",cljs.core.list("﷑'sf",(new cljs.core.Vector(null, [])),cljs.core.List.EMPTY))));
}
var ep__3175 = cljs.core.every_pred.call(null,cljs.core.number_QMARK_,cljs.core.zero_QMARK_);

if(cljs.core.truth_(ep__3175.call(null,0,0,0)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'ep",0,0,0)));
}
if(cljs.core.truth_(cljs.core.not.call(null,ep__3175.call(null,1,2,3,0))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'not",cljs.core.list("﷑'ep",1,2,3,0))));
}
if(cljs.core.truth_(cljs.core.complement.call(null,cljs.core.number_QMARK_).call(null,"﷐'foo")))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list(cljs.core.list("﷑'complement","﷑'number?"),"﷐'foo")));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([1,cljs.core.Vector.fromArray([2,3]),cljs.core.Vector.fromArray([1,2,3])]),cljs.core.juxt.call(null,cljs.core.first,cljs.core.rest,cljs.core.seq).call(null,cljs.core.Vector.fromArray([1,2,3])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [1,(new cljs.core.Vector(null, [2,3])),(new cljs.core.Vector(null, [1,2,3]))])),cljs.core.list(cljs.core.list("﷑'juxt","﷑'first","﷑'rest","﷑'seq"),(new cljs.core.Vector(null, [1,2,3]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,5,cljs.core.max.call(null,1,2,3,4,5))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",5,cljs.core.list("﷑'max",1,2,3,4,5))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,5.5,cljs.core.max.call(null,1,2,3,4,5,5.5))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",5.5,cljs.core.list("﷑'max",1,2,3,4,5,5.5))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,1,cljs.core.min.call(null,5,4,3,2,1))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",1,cljs.core.list("﷑'min",5,4,3,2,1))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,0.5,cljs.core.min.call(null,5,4,3,0.5,2,1))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",0.5,cljs.core.list("﷑'min",5,4,3,0.5,2,1))));
}
var x__3176 = cljs.core.array.call(null,1,2,3);

x__3176.foo = "﷐'hello";
if(cljs.core.truth_(cljs.core._EQ_.call(null,x__3176.foo,"﷐'hello")))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'.foo","﷑'x"),"﷐'hello")));
}
if(cljs.core.truth_(cljs.core.set.call(null,cljs.core.Vector.fromArray([]))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'set",(new cljs.core.Vector(null, [])))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.set([]),cljs.core.set.call(null,cljs.core.Vector.fromArray([])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.set([]),cljs.core.list("﷑'set",(new cljs.core.Vector(null, []))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.set(["foo"]),cljs.core.set.call(null,cljs.core.Vector.fromArray(["foo"])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.set(["foo"]),cljs.core.list("﷑'set",(new cljs.core.Vector(null, ["foo"]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.set([1,2,3]),cljs.core.set([1,2,3]))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.set([1,2,3]),cljs.core.set([1,2,3]))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.set([cljs.core.Vector.fromArray([4,5,6]),cljs.core.set([1,2,3]),9,10,cljs.core.HashMap.fromArrays([7],[8])]),cljs.core.set([cljs.core.Vector.fromArray([4,5,6]),cljs.core.set([1,2,3]),9,10,cljs.core.HashMap.fromArrays([7],[8])]))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.set([(new cljs.core.Vector(null, [4,5,6])),cljs.core.set([1,2,3]),9,10,cljs.core.hash_map(7,8)]),cljs.core.set([(new cljs.core.Vector(null, [4,5,6])),cljs.core.set([1,2,3]),9,10,cljs.core.hash_map(7,8)]))));
}
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,cljs.core.set([null,cljs.core.ObjMap.fromObject([],{}),0,cljs.core.set([]),cljs.core.Vector.fromArray([])]),cljs.core.set([])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'not",cljs.core.list("﷑'=",cljs.core.set([null,cljs.core.hash_map(),0,cljs.core.set([]),(new cljs.core.Vector(null, []))]),cljs.core.set([])))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.set([null,cljs.core.ObjMap.fromObject([],{}),0,cljs.core.set([]),cljs.core.Vector.fromArray([])])),5)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'count",cljs.core.set([null,cljs.core.hash_map(),0,cljs.core.set([]),(new cljs.core.Vector(null, []))])),5)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.conj.call(null,cljs.core.set([1]),1),cljs.core.set([1]))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'conj",cljs.core.set([1]),1),cljs.core.set([1]))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.conj.call(null,cljs.core.set([1]),2),cljs.core.set([1,2]))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'conj",cljs.core.set([1]),2),cljs.core.set([1,2]))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.set([]),cljs.core._empty.call(null,cljs.core.set([1,2,3,4])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.set([]),cljs.core.list("﷑'-empty",cljs.core.set([1,2,3,4])))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.set([1,2,3,4,5])),15)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'reduce","﷑'+",cljs.core.set([1,2,3,4,5])),15)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,4,cljs.core.get.call(null,cljs.core.set([1,2,3,4]),4))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",4,cljs.core.list("﷑'get",cljs.core.set([1,2,3,4]),4))));
}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,cljs.core.set([1,2,3,4]),4)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'contains?",cljs.core.set([1,2,3,4]),4)));
}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,cljs.core.set([null,0,cljs.core.ObjMap.fromObject([],{}),cljs.core.set([]),cljs.core.Vector.fromArray([])]),cljs.core.ObjMap.fromObject([],{}))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'contains?",cljs.core.set([null,0,cljs.core.hash_map(),cljs.core.set([]),(new cljs.core.Vector(null, []))]),cljs.core.hash_map())));
}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,cljs.core.set([cljs.core.Vector.fromArray([1,2,3])]),cljs.core.Vector.fromArray([1,2,3]))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'contains?",cljs.core.set([(new cljs.core.Vector(null, [1,2,3]))]),(new cljs.core.Vector(null, [1,2,3])))));
}
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.contains_QMARK_.call(null,cljs.core._disjoin.call(null,cljs.core.set([1,2,3]),3),3))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'not",cljs.core.list("﷑'contains?",cljs.core.list("﷑'-disjoin",cljs.core.set([1,2,3]),3),3))));
}
if(cljs.core.truth_(cljs.core.neg_QMARK_.call(null,-1)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'neg?",-1)));
}
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.neg_QMARK_.call(null,1))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'not",cljs.core.list("﷑'neg?",1))));
}
if(cljs.core.truth_(cljs.core.neg_QMARK_.call(null,-1.765)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'neg?",-1.765)));
}
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.neg_QMARK_.call(null,0))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'not",cljs.core.list("﷑'neg?",0))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([true,false,true,false,true,false,true,false]),cljs.core.map.call(null,cljs.core.integer_QMARK_,cljs.core.Vector.fromArray([1,1.00001,2023,cljs.core.Vector.fromArray([]),cljs.core._.call(null,88,1001991881),"﷐'foo",0,"0"])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [true,false,true,false,true,false,true,false])),cljs.core.list("﷑'map","﷑'integer?",(new cljs.core.Vector(null, [1,1.00001,2023,(new cljs.core.Vector(null, [])),cljs.core.list("﷑'-",88,1001991881),"﷐'foo",0,"0"]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([true,false,true,false,true,false]),cljs.core.map.call(null,cljs.core.odd_QMARK_,cljs.core.Vector.fromArray([1,2,3,4,-1,0])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [true,false,true,false,true,false])),cljs.core.list("﷑'map","﷑'odd?",(new cljs.core.Vector(null, [1,2,3,4,-1,0]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([true,false,true,false,true,true]),cljs.core.map.call(null,cljs.core.even_QMARK_,cljs.core.Vector.fromArray([2,3,4,5,-2,0])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [true,false,true,false,true,true])),cljs.core.list("﷑'map","﷑'even?",(new cljs.core.Vector(null, [2,3,4,5,-2,0]))))));
}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,cljs.core.ObjMap.fromObject(["﷐'a","﷐'b"],{"﷐'a":1,"﷐'b":2}),"﷐'a")))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'contains?",cljs.core.hash_map("﷐'a",1,"﷐'b",2),"﷐'a")));
}
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.contains_QMARK_.call(null,cljs.core.ObjMap.fromObject(["﷐'a","﷐'b"],{"﷐'a":1,"﷐'b":2}),"﷐'z"))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'not",cljs.core.list("﷑'contains?",cljs.core.hash_map("﷐'a",1,"﷐'b",2),"﷐'z"))));
}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,cljs.core.Vector.fromArray([5,6,7]),1)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'contains?",(new cljs.core.Vector(null, [5,6,7])),1)));
}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,cljs.core.Vector.fromArray([5,6,7]),2)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'contains?",(new cljs.core.Vector(null, [5,6,7])),2)));
}
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.contains_QMARK_.call(null,cljs.core.Vector.fromArray([5,6,7]),3))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'not",cljs.core.list("﷑'contains?",(new cljs.core.Vector(null, [5,6,7])),3))));
}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,cljs.core.to_array.call(null,cljs.core.Vector.fromArray([5,6,7])),1)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'contains?",cljs.core.list("﷑'to-array",(new cljs.core.Vector(null, [5,6,7]))),1)));
}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,cljs.core.to_array.call(null,cljs.core.Vector.fromArray([5,6,7])),2)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'contains?",cljs.core.list("﷑'to-array",(new cljs.core.Vector(null, [5,6,7]))),2)));
}
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.contains_QMARK_.call(null,cljs.core.to_array.call(null,cljs.core.Vector.fromArray([5,6,7])),3))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'not",cljs.core.list("﷑'contains?",cljs.core.list("﷑'to-array",(new cljs.core.Vector(null, [5,6,7]))),3))));
}
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.contains_QMARK_.call(null,null,42))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'not",cljs.core.list("﷑'contains?",null,42))));
}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,"f",0)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'contains?","f",0)));
}
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.contains_QMARK_.call(null,"f",55))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'not",cljs.core.list("﷑'contains?","f",55))));
}
if(cljs.core.truth_(cljs.core.distinct_QMARK_.call(null,1,2,3)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'distinct?",1,2,3)));
}
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.distinct_QMARK_.call(null,1,2,3,1))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'not",cljs.core.list("﷑'distinct?",1,2,3,1))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.distinct.call(null,cljs.core.List.EMPTY),cljs.core.List.EMPTY)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'distinct",cljs.core.List.EMPTY),cljs.core.List.EMPTY)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.distinct.call(null,cljs.core.list(1)),cljs.core.list(1))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'distinct",cljs.core.list("﷑'quote",cljs.core.list(1))),cljs.core.list("﷑'quote",cljs.core.list(1)))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.distinct.call(null,cljs.core.list(1,2,3,1,1,1)),cljs.core.list(1,2,3))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'distinct",cljs.core.list("﷑'quote",cljs.core.list(1,2,3,1,1,1))),cljs.core.list("﷑'quote",cljs.core.list(1,2,3)))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.distinct.call(null,cljs.core.Vector.fromArray([1,1,1,2])),cljs.core.list(1,2))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'distinct",(new cljs.core.Vector(null, [1,1,1,2]))),cljs.core.list("﷑'quote",cljs.core.list(1,2)))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.distinct.call(null,cljs.core.Vector.fromArray([1,2,1,2])),cljs.core.list(1,2))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'distinct",(new cljs.core.Vector(null, [1,2,1,2]))),cljs.core.list("﷑'quote",cljs.core.list(1,2)))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.distinct.call(null,"a"),cljs.core.Vector.fromArray(["a"]))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'distinct","a"),(new cljs.core.Vector(null, ["a"])))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.distinct.call(null,"abcabab"),cljs.core.Vector.fromArray(["a","b","c"]))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'distinct","abcabab"),(new cljs.core.Vector(null, ["a","b","c"])))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.distinct.call(null,cljs.core.Vector.fromArray(["abc","abc"])),cljs.core.Vector.fromArray(["abc"]))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'distinct",(new cljs.core.Vector(null, ["abc","abc"]))),(new cljs.core.Vector(null, ["abc"])))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.distinct.call(null,cljs.core.Vector.fromArray([null,null])),cljs.core.Vector.fromArray([null]))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'distinct",(new cljs.core.Vector(null, [null,null]))),(new cljs.core.Vector(null, [null])))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.distinct.call(null,cljs.core.Vector.fromArray([0.0,0.0])),cljs.core.Vector.fromArray([0.0]))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'distinct",(new cljs.core.Vector(null, [0.0,0.0]))),(new cljs.core.Vector(null, [0.0])))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.distinct.call(null,cljs.core.Vector.fromArray(["﷑'sym","﷑'sym"])),(new cljs.core.Vector(null, ["﷑'sym"])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'distinct",(new cljs.core.Vector(null, [cljs.core.list("﷑'quote","﷑'sym"),cljs.core.list("﷑'quote","﷑'sym")]))),cljs.core.list("﷑'quote",(new cljs.core.Vector(null, ["﷑'sym"]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.distinct.call(null,cljs.core.Vector.fromArray(["﷐'kw","﷐'kw"])),cljs.core.Vector.fromArray(["﷐'kw"]))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'distinct",(new cljs.core.Vector(null, ["﷐'kw","﷐'kw"]))),(new cljs.core.Vector(null, ["﷐'kw"])))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.distinct.call(null,cljs.core.Vector.fromArray([42,42])),cljs.core.Vector.fromArray([42]))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'distinct",(new cljs.core.Vector(null, [42,42]))),(new cljs.core.Vector(null, [42])))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.distinct.call(null,cljs.core.Vector.fromArray([cljs.core.Vector.fromArray([]),cljs.core.Vector.fromArray([])])),cljs.core.Vector.fromArray([cljs.core.Vector.fromArray([])]))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'distinct",(new cljs.core.Vector(null, [(new cljs.core.Vector(null, [])),(new cljs.core.Vector(null, []))]))),(new cljs.core.Vector(null, [(new cljs.core.Vector(null, []))])))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.distinct.call(null,cljs.core.Vector.fromArray([cljs.core.list(1,2),cljs.core.list(1,2)])),(new cljs.core.Vector(null, [cljs.core.list(1,2)])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'distinct",(new cljs.core.Vector(null, [cljs.core.list("﷑'quote",cljs.core.list(1,2)),cljs.core.list("﷑'quote",cljs.core.list(1,2))]))),cljs.core.list("﷑'quote",(new cljs.core.Vector(null, [cljs.core.list(1,2)]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.distinct.call(null,cljs.core.Vector.fromArray([cljs.core.List.EMPTY,cljs.core.List.EMPTY])),cljs.core.Vector.fromArray([cljs.core.List.EMPTY]))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'distinct",(new cljs.core.Vector(null, [cljs.core.List.EMPTY,cljs.core.List.EMPTY]))),(new cljs.core.Vector(null, [cljs.core.List.EMPTY])))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.distinct.call(null,cljs.core.Vector.fromArray([cljs.core.Vector.fromArray([1,2]),cljs.core.Vector.fromArray([1,2])])),cljs.core.Vector.fromArray([cljs.core.Vector.fromArray([1,2])]))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'distinct",(new cljs.core.Vector(null, [(new cljs.core.Vector(null, [1,2])),(new cljs.core.Vector(null, [1,2]))]))),(new cljs.core.Vector(null, [(new cljs.core.Vector(null, [1,2]))])))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.distinct.call(null,cljs.core.Vector.fromArray([cljs.core.ObjMap.fromObject(["﷐'a","﷐'b"],{"﷐'a":1,"﷐'b":2}),cljs.core.ObjMap.fromObject(["﷐'a","﷐'b"],{"﷐'a":1,"﷐'b":2})])),cljs.core.Vector.fromArray([cljs.core.ObjMap.fromObject(["﷐'a","﷐'b"],{"﷐'a":1,"﷐'b":2})]))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'distinct",(new cljs.core.Vector(null, [cljs.core.hash_map("﷐'a",1,"﷐'b",2),cljs.core.hash_map("﷐'a",1,"﷐'b",2)]))),(new cljs.core.Vector(null, [cljs.core.hash_map("﷐'a",1,"﷐'b",2)])))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.distinct.call(null,cljs.core.Vector.fromArray([cljs.core.ObjMap.fromObject([],{}),cljs.core.ObjMap.fromObject([],{})])),cljs.core.Vector.fromArray([cljs.core.ObjMap.fromObject([],{})]))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'distinct",(new cljs.core.Vector(null, [cljs.core.hash_map(),cljs.core.hash_map()]))),(new cljs.core.Vector(null, [cljs.core.hash_map()])))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.distinct.call(null,cljs.core.Vector.fromArray([cljs.core.set([1,2]),cljs.core.set([1,2])])),cljs.core.Vector.fromArray([cljs.core.set([1,2])]))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'distinct",(new cljs.core.Vector(null, [cljs.core.set([1,2]),cljs.core.set([1,2])]))),(new cljs.core.Vector(null, [cljs.core.set([1,2])])))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.distinct.call(null,cljs.core.Vector.fromArray([cljs.core.set([]),cljs.core.set([])])),cljs.core.Vector.fromArray([cljs.core.set([])]))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'distinct",(new cljs.core.Vector(null, [cljs.core.set([]),cljs.core.set([])]))),(new cljs.core.Vector(null, [cljs.core.set([])])))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([2,1]),(function (){var vec__3177__3178 = cljs.core.Vector.fromArray([1,2]);
var a__3179 = cljs.core.nth.call(null,vec__3177__3178,0,null);
var b__3180 = cljs.core.nth.call(null,vec__3177__3178,1,null);

return cljs.core.Vector.fromArray([b__3180,a__3179]);
})())))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [2,1])),cljs.core.list("﷑'let",(new cljs.core.Vector(null, [(new cljs.core.Vector(null, ["﷑'a","﷑'b"])),(new cljs.core.Vector(null, [1,2]))])),(new cljs.core.Vector(null, ["﷑'b","﷑'a"]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.set([1,2]),(function (){var vec__3181__3182 = cljs.core.Vector.fromArray([1,2]);
var a__3183 = cljs.core.nth.call(null,vec__3181__3182,0,null);
var b__3184 = cljs.core.nth.call(null,vec__3181__3182,1,null);

return cljs.core.set([a__3183,b__3184]);
})())))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.set([1,2]),cljs.core.list("﷑'let",(new cljs.core.Vector(null, [(new cljs.core.Vector(null, ["﷑'a","﷑'b"])),(new cljs.core.Vector(null, [1,2]))])),cljs.core.set(["﷑'a","﷑'b"])))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([1,2]),(function (){var map__3185__3186 = cljs.core.ObjMap.fromObject(["﷐'a","﷐'b"],{"﷐'a":1,"﷐'b":2});
var map__3185__3187 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__3185__3186))?cljs.core.apply.call(null,cljs.core.hash_map,map__3185__3186):map__3185__3186);
var a__3188 = cljs.core.get.call(null,map__3185__3187,"﷐'a");
var b__3189 = cljs.core.get.call(null,map__3185__3187,"﷐'b");

return cljs.core.Vector.fromArray([a__3188,b__3189]);
})())))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [1,2])),cljs.core.list("﷑'let",(new cljs.core.Vector(null, [cljs.core.hash_map("﷑'a","﷐'a","﷑'b","﷐'b"),cljs.core.hash_map("﷐'a",1,"﷐'b",2)])),(new cljs.core.Vector(null, ["﷑'a","﷑'b"]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([1,2]),(function (){var map__3190__3191 = cljs.core.ObjMap.fromObject(["﷐'a","﷐'b"],{"﷐'a":1,"﷐'b":2});
var map__3190__3192 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__3190__3191))?cljs.core.apply.call(null,cljs.core.hash_map,map__3190__3191):map__3190__3191);
var b__3193 = cljs.core.get.call(null,map__3190__3192,"﷐'b");
var a__3194 = cljs.core.get.call(null,map__3190__3192,"﷐'a");

return cljs.core.Vector.fromArray([a__3194,b__3193]);
})())))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [1,2])),cljs.core.list("﷑'let",(new cljs.core.Vector(null, [cljs.core.hash_map("﷐'keys",(new cljs.core.Vector(null, ["﷑'a","﷑'b"]))),cljs.core.hash_map("﷐'a",1,"﷐'b",2)])),(new cljs.core.Vector(null, ["﷑'a","﷑'b"]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([1,2,cljs.core.Vector.fromArray([1,2])]),(function (){var vec__3195__3196 = cljs.core.Vector.fromArray([1,2]);
var a__3197 = cljs.core.nth.call(null,vec__3195__3196,0,null);
var b__3198 = cljs.core.nth.call(null,vec__3195__3196,1,null);
var v__3199 = vec__3195__3196;

return cljs.core.Vector.fromArray([a__3197,b__3198,v__3199]);
})())))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [1,2,(new cljs.core.Vector(null, [1,2]))])),cljs.core.list("﷑'let",(new cljs.core.Vector(null, [(new cljs.core.Vector(null, ["﷑'a","﷑'b","﷐'as","﷑'v"])),(new cljs.core.Vector(null, [1,2]))])),(new cljs.core.Vector(null, ["﷑'a","﷑'b","﷑'v"]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([1,42]),(function (){var map__3200__3201 = cljs.core.ObjMap.fromObject(["﷐'a"],{"﷐'a":1});
var map__3200__3202 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__3200__3201))?cljs.core.apply.call(null,cljs.core.hash_map,map__3200__3201):map__3200__3201);
var b__3203 = cljs.core.get.call(null,map__3200__3202,"﷐'b",42);
var a__3204 = cljs.core.get.call(null,map__3200__3202,"﷐'a");

return cljs.core.Vector.fromArray([a__3204,b__3203]);
})())))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [1,42])),cljs.core.list("﷑'let",(new cljs.core.Vector(null, [cljs.core.hash_map("﷐'keys",(new cljs.core.Vector(null, ["﷑'a","﷑'b"])),"﷐'or",cljs.core.hash_map("﷑'b",42)),cljs.core.hash_map("﷐'a",1)])),(new cljs.core.Vector(null, ["﷑'a","﷑'b"]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([1,null]),(function (){var map__3205__3206 = cljs.core.ObjMap.fromObject(["﷐'a"],{"﷐'a":1});
var map__3205__3207 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__3205__3206))?cljs.core.apply.call(null,cljs.core.hash_map,map__3205__3206):map__3205__3206);
var b__3208 = cljs.core.get.call(null,map__3205__3207,"﷐'b");
var a__3209 = cljs.core.get.call(null,map__3205__3207,"﷐'a");

return cljs.core.Vector.fromArray([a__3209,b__3208]);
})())))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [1,null])),cljs.core.list("﷑'let",(new cljs.core.Vector(null, [cljs.core.hash_map("﷐'keys",(new cljs.core.Vector(null, ["﷑'a","﷑'b"])),"﷐'or",cljs.core.hash_map("﷑'c",42)),cljs.core.hash_map("﷐'a",1)])),(new cljs.core.Vector(null, ["﷑'a","﷑'b"]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([2,1]),(function (){var vec__3210__3211 = cljs.core.list(1,2);
var a__3212 = cljs.core.nth.call(null,vec__3210__3211,0,null);
var b__3213 = cljs.core.nth.call(null,vec__3210__3211,1,null);

return cljs.core.Vector.fromArray([b__3213,a__3212]);
})())))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [2,1])),cljs.core.list("﷑'let",(new cljs.core.Vector(null, [(new cljs.core.Vector(null, ["﷑'a","﷑'b"])),cljs.core.list("﷑'quote",cljs.core.list(1,2))])),(new cljs.core.Vector(null, ["﷑'b","﷑'a"]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.HashMap.fromArrays([1],[2]),(function (){var vec__3214__3215 = cljs.core.Vector.fromArray([1,2]);
var a__3216 = cljs.core.nth.call(null,vec__3214__3215,0,null);
var b__3217 = cljs.core.nth.call(null,vec__3214__3215,1,null);

return cljs.core.HashMap.fromArrays([a__3216],[b__3217]);
})())))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.hash_map(1,2),cljs.core.list("﷑'let",(new cljs.core.Vector(null, [(new cljs.core.Vector(null, ["﷑'a","﷑'b"])),(new cljs.core.Vector(null, [1,2]))])),cljs.core.hash_map("﷑'a","﷑'b")))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([2,1]),(function (){var vec__3218__3219 = cljs.core.seq.call(null,cljs.core.Vector.fromArray([1,2]));
var a__3220 = cljs.core.nth.call(null,vec__3218__3219,0,null);
var b__3221 = cljs.core.nth.call(null,vec__3218__3219,1,null);

return cljs.core.Vector.fromArray([b__3221,a__3220]);
})())))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [2,1])),cljs.core.list("﷑'let",(new cljs.core.Vector(null, [(new cljs.core.Vector(null, ["﷑'a","﷑'b"])),cljs.core.list("﷑'seq",(new cljs.core.Vector(null, [1,2])))])),(new cljs.core.Vector(null, ["﷑'b","﷑'a"]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.ObjMap.fromObject(["﷐'foo"],{"﷐'foo":cljs.core.ObjMap.fromObject(["﷐'bar"],{"﷐'bar":cljs.core.ObjMap.fromObject(["﷐'baz"],{"﷐'baz":1})})}),cljs.core.update_in.call(null,cljs.core.ObjMap.fromObject(["﷐'foo"],{"﷐'foo":cljs.core.ObjMap.fromObject(["﷐'bar"],{"﷐'bar":cljs.core.ObjMap.fromObject(["﷐'baz"],{"﷐'baz":0})})}),cljs.core.Vector.fromArray(["﷐'foo","﷐'bar","﷐'baz"]),cljs.core.inc))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.hash_map("﷐'foo",cljs.core.hash_map("﷐'bar",cljs.core.hash_map("﷐'baz",1))),cljs.core.list("﷑'update-in",cljs.core.hash_map("﷐'foo",cljs.core.hash_map("﷐'bar",cljs.core.hash_map("﷐'baz",0))),(new cljs.core.Vector(null, ["﷐'foo","﷐'bar","﷐'baz"])),"﷑'inc"))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.ObjMap.fromObject(["﷐'foo","﷐'bar","﷐'baz"],{"﷐'foo":1,"﷐'bar":2,"﷐'baz":10}),cljs.core.update_in.call(null,cljs.core.ObjMap.fromObject(["﷐'foo","﷐'bar","﷐'baz"],{"﷐'foo":1,"﷐'bar":2,"﷐'baz":3}),cljs.core.Vector.fromArray(["﷐'baz"]),cljs.core._PLUS_,7))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.hash_map("﷐'foo",1,"﷐'bar",2,"﷐'baz",10),cljs.core.list("﷑'update-in",cljs.core.hash_map("﷐'foo",1,"﷐'bar",2,"﷐'baz",3),(new cljs.core.Vector(null, ["﷐'baz"])),"﷑'+",7))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([cljs.core.ObjMap.fromObject(["﷐'foo","﷐'bar"],{"﷐'foo":1,"﷐'bar":2}),cljs.core.ObjMap.fromObject(["﷐'foo","﷐'bar"],{"﷐'foo":1,"﷐'bar":3})]),cljs.core.update_in.call(null,cljs.core.Vector.fromArray([cljs.core.ObjMap.fromObject(["﷐'foo","﷐'bar"],{"﷐'foo":1,"﷐'bar":2}),cljs.core.ObjMap.fromObject(["﷐'foo","﷐'bar"],{"﷐'foo":1,"﷐'bar":2})]),cljs.core.Vector.fromArray([1,"﷐'bar"]),cljs.core.inc))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [cljs.core.hash_map("﷐'foo",1,"﷐'bar",2),cljs.core.hash_map("﷐'foo",1,"﷐'bar",3)])),cljs.core.list("﷑'update-in",(new cljs.core.Vector(null, [cljs.core.hash_map("﷐'foo",1,"﷐'bar",2),cljs.core.hash_map("﷐'foo",1,"﷐'bar",2)])),(new cljs.core.Vector(null, [1,"﷐'bar"])),"﷑'inc"))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([cljs.core.ObjMap.fromObject(["﷐'foo"],{"﷐'foo":cljs.core.ObjMap.fromObject(["﷐'bar"],{"﷐'bar":2})}),cljs.core.ObjMap.fromObject(["﷐'foo"],{"﷐'foo":cljs.core.ObjMap.fromObject(["﷐'bar"],{"﷐'bar":3})})]),cljs.core.update_in.call(null,cljs.core.Vector.fromArray([cljs.core.ObjMap.fromObject(["﷐'foo"],{"﷐'foo":cljs.core.ObjMap.fromObject(["﷐'bar"],{"﷐'bar":2})}),cljs.core.ObjMap.fromObject(["﷐'foo"],{"﷐'foo":cljs.core.ObjMap.fromObject(["﷐'bar"],{"﷐'bar":2})})]),cljs.core.Vector.fromArray([1,"﷐'foo","﷐'bar"]),cljs.core.inc))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [cljs.core.hash_map("﷐'foo",cljs.core.hash_map("﷐'bar",2)),cljs.core.hash_map("﷐'foo",cljs.core.hash_map("﷐'bar",3))])),cljs.core.list("﷑'update-in",(new cljs.core.Vector(null, [cljs.core.hash_map("﷐'foo",cljs.core.hash_map("﷐'bar",2)),cljs.core.hash_map("﷐'foo",cljs.core.hash_map("﷐'bar",2))])),(new cljs.core.Vector(null, [1,"﷐'foo","﷐'bar"])),"﷑'inc"))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.ObjMap.fromObject(["﷐'foo"],{"﷐'foo":cljs.core.ObjMap.fromObject(["﷐'bar"],{"﷐'bar":cljs.core.ObjMap.fromObject(["﷐'baz"],{"﷐'baz":100})})}),cljs.core.assoc_in.call(null,cljs.core.ObjMap.fromObject(["﷐'foo"],{"﷐'foo":cljs.core.ObjMap.fromObject(["﷐'bar"],{"﷐'bar":cljs.core.ObjMap.fromObject(["﷐'baz"],{"﷐'baz":0})})}),cljs.core.Vector.fromArray(["﷐'foo","﷐'bar","﷐'baz"]),100))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.hash_map("﷐'foo",cljs.core.hash_map("﷐'bar",cljs.core.hash_map("﷐'baz",100))),cljs.core.list("﷑'assoc-in",cljs.core.hash_map("﷐'foo",cljs.core.hash_map("﷐'bar",cljs.core.hash_map("﷐'baz",0))),(new cljs.core.Vector(null, ["﷐'foo","﷐'bar","﷐'baz"])),100))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.ObjMap.fromObject(["﷐'foo","﷐'bar","﷐'baz"],{"﷐'foo":1,"﷐'bar":2,"﷐'baz":100}),cljs.core.assoc_in.call(null,cljs.core.ObjMap.fromObject(["﷐'foo","﷐'bar","﷐'baz"],{"﷐'foo":1,"﷐'bar":2,"﷐'baz":3}),cljs.core.Vector.fromArray(["﷐'baz"]),100))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.hash_map("﷐'foo",1,"﷐'bar",2,"﷐'baz",100),cljs.core.list("﷑'assoc-in",cljs.core.hash_map("﷐'foo",1,"﷐'bar",2,"﷐'baz",3),(new cljs.core.Vector(null, ["﷐'baz"])),100))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([cljs.core.ObjMap.fromObject(["﷐'foo"],{"﷐'foo":cljs.core.Vector.fromArray([cljs.core.ObjMap.fromObject(["﷐'bar"],{"﷐'bar":2}),cljs.core.ObjMap.fromObject(["﷐'baz"],{"﷐'baz":3})])}),cljs.core.ObjMap.fromObject(["﷐'foo"],{"﷐'foo":cljs.core.Vector.fromArray([cljs.core.ObjMap.fromObject(["﷐'bar"],{"﷐'bar":2}),cljs.core.ObjMap.fromObject(["﷐'baz"],{"﷐'baz":100})])})]),cljs.core.assoc_in.call(null,cljs.core.Vector.fromArray([cljs.core.ObjMap.fromObject(["﷐'foo"],{"﷐'foo":cljs.core.Vector.fromArray([cljs.core.ObjMap.fromObject(["﷐'bar"],{"﷐'bar":2}),cljs.core.ObjMap.fromObject(["﷐'baz"],{"﷐'baz":3})])}),cljs.core.ObjMap.fromObject(["﷐'foo"],{"﷐'foo":cljs.core.Vector.fromArray([cljs.core.ObjMap.fromObject(["﷐'bar"],{"﷐'bar":2}),cljs.core.ObjMap.fromObject(["﷐'baz"],{"﷐'baz":3})])})]),cljs.core.Vector.fromArray([1,"﷐'foo",1,"﷐'baz"]),100))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [cljs.core.hash_map("﷐'foo",(new cljs.core.Vector(null, [cljs.core.hash_map("﷐'bar",2),cljs.core.hash_map("﷐'baz",3)]))),cljs.core.hash_map("﷐'foo",(new cljs.core.Vector(null, [cljs.core.hash_map("﷐'bar",2),cljs.core.hash_map("﷐'baz",100)])))])),cljs.core.list("﷑'assoc-in",(new cljs.core.Vector(null, [cljs.core.hash_map("﷐'foo",(new cljs.core.Vector(null, [cljs.core.hash_map("﷐'bar",2),cljs.core.hash_map("﷐'baz",3)]))),cljs.core.hash_map("﷐'foo",(new cljs.core.Vector(null, [cljs.core.hash_map("﷐'bar",2),cljs.core.hash_map("﷐'baz",3)])))])),(new cljs.core.Vector(null, [1,"﷐'foo",1,"﷐'baz"])),100))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([cljs.core.ObjMap.fromObject(["﷐'foo","﷐'bar"],{"﷐'foo":1,"﷐'bar":2}),cljs.core.ObjMap.fromObject(["﷐'foo","﷐'bar"],{"﷐'foo":1,"﷐'bar":100})]),cljs.core.assoc_in.call(null,cljs.core.Vector.fromArray([cljs.core.ObjMap.fromObject(["﷐'foo","﷐'bar"],{"﷐'foo":1,"﷐'bar":2}),cljs.core.ObjMap.fromObject(["﷐'foo","﷐'bar"],{"﷐'foo":1,"﷐'bar":2})]),cljs.core.Vector.fromArray([1,"﷐'bar"]),100))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [cljs.core.hash_map("﷐'foo",1,"﷐'bar",2),cljs.core.hash_map("﷐'foo",1,"﷐'bar",100)])),cljs.core.list("﷑'assoc-in",(new cljs.core.Vector(null, [cljs.core.hash_map("﷐'foo",1,"﷐'bar",2),cljs.core.hash_map("﷐'foo",1,"﷐'bar",2)])),(new cljs.core.Vector(null, [1,"﷐'bar"])),100))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,1,cljs.core.get_in.call(null,cljs.core.ObjMap.fromObject(["﷐'foo","﷐'bar"],{"﷐'foo":1,"﷐'bar":2}),cljs.core.Vector.fromArray(["﷐'foo"])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",1,cljs.core.list("﷑'get-in",cljs.core.hash_map("﷐'foo",1,"﷐'bar",2),(new cljs.core.Vector(null, ["﷐'foo"]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,2,cljs.core.get_in.call(null,cljs.core.ObjMap.fromObject(["﷐'foo"],{"﷐'foo":cljs.core.ObjMap.fromObject(["﷐'bar"],{"﷐'bar":2})}),cljs.core.Vector.fromArray(["﷐'foo","﷐'bar"])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",2,cljs.core.list("﷑'get-in",cljs.core.hash_map("﷐'foo",cljs.core.hash_map("﷐'bar",2)),(new cljs.core.Vector(null, ["﷐'foo","﷐'bar"]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,1,cljs.core.get_in.call(null,cljs.core.Vector.fromArray([cljs.core.ObjMap.fromObject(["﷐'foo"],{"﷐'foo":1}),cljs.core.ObjMap.fromObject(["﷐'foo"],{"﷐'foo":2})]),cljs.core.Vector.fromArray([0,"﷐'foo"])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",1,cljs.core.list("﷑'get-in",(new cljs.core.Vector(null, [cljs.core.hash_map("﷐'foo",1),cljs.core.hash_map("﷐'foo",2)])),(new cljs.core.Vector(null, [0,"﷐'foo"]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,4,cljs.core.get_in.call(null,cljs.core.Vector.fromArray([cljs.core.ObjMap.fromObject(["﷐'foo","﷐'bar"],{"﷐'foo":1,"﷐'bar":cljs.core.Vector.fromArray([cljs.core.ObjMap.fromObject(["﷐'baz"],{"﷐'baz":1}),cljs.core.ObjMap.fromObject(["﷐'buzz"],{"﷐'buzz":2})])}),cljs.core.ObjMap.fromObject(["﷐'foo","﷐'bar"],{"﷐'foo":3,"﷐'bar":cljs.core.Vector.fromArray([cljs.core.ObjMap.fromObject(["﷐'baz"],{"﷐'baz":3}),cljs.core.ObjMap.fromObject(["﷐'buzz"],{"﷐'buzz":4})])})]),cljs.core.Vector.fromArray([1,"﷐'bar",1,"﷐'buzz"])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",4,cljs.core.list("﷑'get-in",(new cljs.core.Vector(null, [cljs.core.hash_map("﷐'foo",1,"﷐'bar",(new cljs.core.Vector(null, [cljs.core.hash_map("﷐'baz",1),cljs.core.hash_map("﷐'buzz",2)]))),cljs.core.hash_map("﷐'foo",3,"﷐'bar",(new cljs.core.Vector(null, [cljs.core.hash_map("﷐'baz",3),cljs.core.hash_map("﷐'buzz",4)])))])),(new cljs.core.Vector(null, [1,"﷐'bar",1,"﷐'buzz"]))))));
}
var a__3222 = cljs.core.to_array.call(null,cljs.core.Vector.fromArray([1,2,3]));

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([10,20,30]),cljs.core.seq.call(null,(function (){var a__192__auto____3223 = a__3222;
var ret__3224 = cljs.core.aclone.call(null,a__192__auto____3223);

var i__3225 = 0;

while(true){
if(cljs.core.truth_(cljs.core._LT_.call(null,i__3225,cljs.core.alength.call(null,a__192__auto____3223))))
{(ret__3224[i__3225] = cljs.core._STAR_.call(null,10,(a__3222[i__3225])));
{
var G__3243 = cljs.core.inc.call(null,i__3225);
i__3225 = G__3243;
continue;
}
} else
{return ret__3224;
}
break;
}
})()))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [10,20,30])),cljs.core.list("﷑'seq",cljs.core.list("﷑'amap","﷑'a","﷑'i","﷑'ret",cljs.core.list("﷑'*",10,cljs.core.list("﷑'aget","﷑'a","﷑'i")))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,6,(function (){var a__198__auto____3226 = a__3222;

var i__3227 = 0;
var ret__3228 = 0;

while(true){
if(cljs.core.truth_(cljs.core._LT_.call(null,i__3227,cljs.core.alength.call(null,a__198__auto____3226))))
{{
var G__3244 = cljs.core.inc.call(null,i__3227);
var G__3245 = cljs.core._PLUS_.call(null,ret__3228,(a__3222[i__3227]));
i__3227 = G__3244;
ret__3228 = G__3245;
continue;
}
} else
{return ret__3228;
}
break;
}
})())))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",6,cljs.core.list("﷑'areduce","﷑'a","﷑'i","﷑'ret",0,cljs.core.list("﷑'+","﷑'ret",cljs.core.list("﷑'aget","﷑'a","﷑'i"))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.seq.call(null,a__3222),cljs.core.seq.call(null,cljs.core.to_array.call(null,cljs.core.Vector.fromArray([1,2,3]))))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'seq","﷑'a"),cljs.core.list("﷑'seq",cljs.core.list("﷑'to-array",(new cljs.core.Vector(null, [1,2,3])))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,42,(a__3222[0] = 42))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",42,cljs.core.list("﷑'aset","﷑'a",0,42))));
}
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,cljs.core.seq.call(null,a__3222),cljs.core.seq.call(null,cljs.core.to_array.call(null,cljs.core.Vector.fromArray([1,2,3]))))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'not=",cljs.core.list("﷑'seq","﷑'a"),cljs.core.list("﷑'seq",cljs.core.list("﷑'to-array",(new cljs.core.Vector(null, [1,2,3])))))));
}
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,a__3222,cljs.core.aclone.call(null,a__3222))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'not=","﷑'a",cljs.core.list("﷑'aclone","﷑'a"))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([1,2,3,4,5]),cljs.core.sort.call(null,cljs.core.Vector.fromArray([5,3,1,4,2])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [1,2,3,4,5])),cljs.core.list("﷑'sort",(new cljs.core.Vector(null, [5,3,1,4,2]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([1,2,3,4,5]),cljs.core.sort.call(null,cljs.core._LT_,cljs.core.Vector.fromArray([5,3,1,4,2])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [1,2,3,4,5])),cljs.core.list("﷑'sort","﷑'<",(new cljs.core.Vector(null, [5,3,1,4,2]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([5,4,3,2,1]),cljs.core.sort.call(null,cljs.core._GT_,cljs.core.Vector.fromArray([5,3,1,4,2])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [5,4,3,2,1])),cljs.core.list("﷑'sort","﷑'>",(new cljs.core.Vector(null, [5,3,1,4,2]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray(["a",cljs.core.Vector.fromArray([1,2]),"foo"]),cljs.core.sort_by.call(null,cljs.core.count,cljs.core.Vector.fromArray(["foo","a",cljs.core.Vector.fromArray([1,2])])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, ["a",(new cljs.core.Vector(null, [1,2])),"foo"])),cljs.core.list("﷑'sort-by","﷑'count",(new cljs.core.Vector(null, ["foo","a",(new cljs.core.Vector(null, [1,2]))]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray(["foo",cljs.core.Vector.fromArray([1,2]),"a"]),cljs.core.sort_by.call(null,cljs.core.count,cljs.core._GT_,cljs.core.Vector.fromArray(["foo","a",cljs.core.Vector.fromArray([1,2])])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, ["foo",(new cljs.core.Vector(null, [1,2])),"a"])),cljs.core.list("﷑'sort-by","﷑'count","﷑'>",(new cljs.core.Vector(null, ["foo","a",(new cljs.core.Vector(null, [1,2]))]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.ObjMap.fromObject(["a","b"],{"a":1,"b":2}),cljs.core.js__GT_clj.call(null,{"a":1,"b":2}))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.hash_map("a",1,"b",2),cljs.core.list("﷑'js->clj",cljs.core.list("﷑'js*","{\"a\":1,\"b\":2}")))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.ObjMap.fromObject(["﷐'a","﷐'b"],{"﷐'a":1,"﷐'b":2}),cljs.core.js__GT_clj.call(null,{"a":1,"b":2},"﷐'keywordize-keys",true))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.hash_map("﷐'a",1,"﷐'b",2),cljs.core.list("﷑'js->clj",cljs.core.list("﷑'js*","{\"a\":1,\"b\":2}"),"﷐'keywordize-keys",true))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([cljs.core.Vector.fromArray([cljs.core.ObjMap.fromObject(["﷐'a","﷐'b"],{"﷐'a":1,"﷐'b":2}),cljs.core.ObjMap.fromObject(["﷐'a","﷐'b"],{"﷐'a":1,"﷐'b":2})])]),cljs.core.js__GT_clj.call(null,[[{"a":1,"b":2}, {"a":1,"b":2}]],"﷐'keywordize-keys",true))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [(new cljs.core.Vector(null, [cljs.core.hash_map("﷐'a",1,"﷐'b",2),cljs.core.hash_map("﷐'a",1,"﷐'b",2)]))])),cljs.core.list("﷑'js->clj",cljs.core.list("﷑'js*","[[{\"a\":1,\"b\":2}, {\"a\":1,\"b\":2}]]"),"﷐'keywordize-keys",true))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([cljs.core.Vector.fromArray([cljs.core.ObjMap.fromObject(["﷐'a","﷐'b"],{"﷐'a":1,"﷐'b":2}),cljs.core.ObjMap.fromObject(["﷐'a","﷐'b"],{"﷐'a":1,"﷐'b":2})])]),cljs.core.js__GT_clj.call(null,cljs.core.Vector.fromArray([cljs.core.Vector.fromArray([cljs.core.ObjMap.fromObject(["﷐'a","﷐'b"],{"﷐'a":1,"﷐'b":2}),cljs.core.ObjMap.fromObject(["﷐'a","﷐'b"],{"﷐'a":1,"﷐'b":2})])])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [(new cljs.core.Vector(null, [cljs.core.hash_map("﷐'a",1,"﷐'b",2),cljs.core.hash_map("﷐'a",1,"﷐'b",2)]))])),cljs.core.list("﷑'js->clj",(new cljs.core.Vector(null, [(new cljs.core.Vector(null, [cljs.core.hash_map("﷐'a",1,"﷐'b",2),cljs.core.hash_map("﷐'a",1,"﷐'b",2)]))]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,null,cljs.core.last.call(null,null))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",null,cljs.core.list("﷑'last",null))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,3,cljs.core.last.call(null,cljs.core.Vector.fromArray([1,2,3])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",3,cljs.core.list("﷑'last",(new cljs.core.Vector(null, [1,2,3]))))));
}
var s__3229 = cljs.core.atom.call(null,cljs.core.Vector.fromArray([]));

var n__204__auto____3230 = 5;

var n__3231 = 0;

while(true){
if(cljs.core.truth_(cljs.core._LT_.call(null,n__3231,n__204__auto____3230)))
{cljs.core.swap_BANG_.call(null,s__3229,cljs.core.conj,n__3231);
{
var G__3246 = cljs.core.inc.call(null,n__3231);
n__3231 = G__3246;
continue;
}
} else
{}
break;
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([0,1,2,3,4]),cljs.core.deref.call(null,s__3229))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [0,1,2,3,4])),cljs.core.list("﷑'clojure.core/deref","﷑'s"))));
}
var v__3232 = cljs.core.Vector.fromArray([1,2,3,4,5]);
var s__3233 = cljs.core.atom.call(null,cljs.core.List.EMPTY);

var G__3234__3235 = cljs.core.seq.call(null,v__3232);

while(true){
if(cljs.core.truth_(G__3234__3235))
{var n__3236 = cljs.core.first.call(null,G__3234__3235);

cljs.core.swap_BANG_.call(null,s__3233,cljs.core.conj,n__3236);
{
var G__3247 = cljs.core.next.call(null,G__3234__3235);
G__3234__3235 = G__3247;
continue;
}
} else
{}
break;
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,s__3233),cljs.core.reverse.call(null,v__3232))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'clojure.core/deref","﷑'s"),cljs.core.list("﷑'reverse","﷑'v"))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.HashMap.fromArrays([1,3],[2,4]),cljs.core.assoc.call(null,cljs.core.ObjMap.fromObject([],{}),1,2,3,4))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.hash_map(1,2,3,4),cljs.core.list("﷑'assoc",cljs.core.hash_map(),1,2,3,4))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.HashMap.fromArrays([1],[2]),cljs.core.assoc.call(null,cljs.core.ObjMap.fromObject([],{}),1,2))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.hash_map(1,2),cljs.core.list("﷑'assoc",cljs.core.hash_map(),1,2))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([42,2]),cljs.core.assoc.call(null,cljs.core.Vector.fromArray([1,2]),0,42))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [42,2])),cljs.core.list("﷑'assoc",(new cljs.core.Vector(null, [1,2])),0,42))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.dissoc.call(null,cljs.core.HashMap.fromArrays([1,3],[2,4]),1,3))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.hash_map(),cljs.core.list("﷑'dissoc",cljs.core.hash_map(1,2,3,4),1,3))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.HashMap.fromArrays([1],[2]),cljs.core.dissoc.call(null,cljs.core.HashMap.fromArrays([1,3],[2,4]),3))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.hash_map(1,2),cljs.core.list("﷑'dissoc",cljs.core.hash_map(1,2,3,4),3))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.set([1,2,3]),cljs.core.disj.call(null,cljs.core.set([1,2,3])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.set([1,2,3]),cljs.core.list("﷑'disj",cljs.core.set([1,2,3])))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.set([1,2]),cljs.core.disj.call(null,cljs.core.set([1,2,3]),3))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.set([1,2]),cljs.core.list("﷑'disj",cljs.core.set([1,2,3]),3))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.set([1]),cljs.core.disj.call(null,cljs.core.set([1,2,3]),2,3))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.set([1]),cljs.core.list("﷑'disj",cljs.core.set([1,2,3]),2,3))));
}
var f__3237 = cljs.core.memoize.call(null,(function (){
return cljs.core.rand.call(null);
}));

f__3237.call(null);
if(cljs.core.truth_(cljs.core._EQ_.call(null,f__3237.call(null),f__3237.call(null))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'f"),cljs.core.list("﷑'f"))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.find.call(null,cljs.core.ObjMap.fromObject([],{}),"﷐'a"),null)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'find",cljs.core.hash_map(),"﷐'a"),null)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.find.call(null,cljs.core.ObjMap.fromObject(["﷐'a"],{"﷐'a":1}),"﷐'a"),cljs.core.Vector.fromArray(["﷐'a",1]))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'find",cljs.core.hash_map("﷐'a",1),"﷐'a"),(new cljs.core.Vector(null, ["﷐'a",1])))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.find.call(null,cljs.core.ObjMap.fromObject(["﷐'a"],{"﷐'a":1}),"﷐'b"),null)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'find",cljs.core.hash_map("﷐'a",1),"﷐'b"),null)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.find.call(null,cljs.core.ObjMap.fromObject(["﷐'a","﷐'b"],{"﷐'a":1,"﷐'b":2}),"﷐'a"),cljs.core.Vector.fromArray(["﷐'a",1]))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'find",cljs.core.hash_map("﷐'a",1,"﷐'b",2),"﷐'a"),(new cljs.core.Vector(null, ["﷐'a",1])))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.find.call(null,cljs.core.ObjMap.fromObject(["﷐'a","﷐'b"],{"﷐'a":1,"﷐'b":2}),"﷐'b"),cljs.core.Vector.fromArray(["﷐'b",2]))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'find",cljs.core.hash_map("﷐'a",1,"﷐'b",2),"﷐'b"),(new cljs.core.Vector(null, ["﷐'b",2])))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.find.call(null,cljs.core.ObjMap.fromObject(["﷐'a","﷐'b"],{"﷐'a":1,"﷐'b":2}),"﷐'c"),null)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'find",cljs.core.hash_map("﷐'a",1,"﷐'b",2),"﷐'c"),null)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.find.call(null,cljs.core.ObjMap.fromObject([],{}),null),null)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'find",cljs.core.hash_map(),null),null)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.find.call(null,cljs.core.ObjMap.fromObject(["﷐'a"],{"﷐'a":1}),null),null)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'find",cljs.core.hash_map("﷐'a",1),null),null)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.find.call(null,cljs.core.ObjMap.fromObject(["﷐'a","﷐'b"],{"﷐'a":1,"﷐'b":2}),null),null)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'find",cljs.core.hash_map("﷐'a",1,"﷐'b",2),null),null)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.find.call(null,cljs.core.Vector.fromArray([1,2,3]),0),cljs.core.Vector.fromArray([0,1]))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'find",(new cljs.core.Vector(null, [1,2,3])),0),(new cljs.core.Vector(null, [0,1])))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.quot.call(null,4,2),2)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'quot",4,2),2)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.quot.call(null,3,2),1)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'quot",3,2),1)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.quot.call(null,6,4),1)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'quot",6,4),1)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.quot.call(null,0,5),0)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'quot",0,5),0)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.quot.call(null,42,5),8)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'quot",42,5),8)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.quot.call(null,42,-5),-8)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'quot",42,-5),-8)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.quot.call(null,-42,-5),8)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'quot",-42,-5),8)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.quot.call(null,9,3),3)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'quot",9,3),3)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.quot.call(null,9,-3),-3)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'quot",9,-3),-3)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.quot.call(null,-9,3),-3)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'quot",-9,3),-3)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.quot.call(null,2,-5),0)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'quot",2,-5),0)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.quot.call(null,-2,5),0)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'quot",-2,5),0)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.quot.call(null,0,3),0)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'quot",0,3),0)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.quot.call(null,0,-3),0)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'quot",0,-3),0)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.mod.call(null,4,2),0)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'mod",4,2),0)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.mod.call(null,3,2),1)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'mod",3,2),1)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.mod.call(null,6,4),2)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'mod",6,4),2)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.mod.call(null,0,5),0)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'mod",0,5),0)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.mod.call(null,4.5,2.0),0.5)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'mod",4.5,2.0),0.5)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.mod.call(null,42,5),2)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'mod",42,5),2)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.mod.call(null,9,3),0)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'mod",9,3),0)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.mod.call(null,9,-3),0)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'mod",9,-3),0)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.mod.call(null,-9,3),0)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'mod",-9,3),0)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.mod.call(null,-9,-3),0)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'mod",-9,-3),0)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.mod.call(null,0,3),0)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'mod",0,3),0)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.mod.call(null,3216478362187432,432143214),120355456)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'mod",3216478362187432,432143214),120355456)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.rem.call(null,4,2),0)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'rem",4,2),0)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.rem.call(null,0,5),0)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'rem",0,5),0)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.rem.call(null,4.5,2.0),0.5)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'rem",4.5,2.0),0.5)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.rem.call(null,42,5),2)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'rem",42,5),2)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.rem.call(null,2,5),2)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'rem",2,5),2)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.rem.call(null,2,-5),2)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'rem",2,-5),2)));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.rem.call(null,0,3),0)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'rem",0,3),0)));
}
var d__3238 = cljs.core.group_by.call(null,cljs.core.second,cljs.core.ObjMap.fromObject(["﷐'a","﷐'b","﷐'c","﷐'d","﷐'e","﷐'f"],{"﷐'a":1,"﷐'b":2,"﷐'c":1,"﷐'d":4,"﷐'e":1,"﷐'f":2}));

if(cljs.core.truth_(cljs.core._EQ_.call(null,3,cljs.core.count.call(null,cljs.core.get.call(null,d__3238,1)))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",3,cljs.core.list("﷑'count",cljs.core.list("﷑'get","﷑'d",1)))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,2,cljs.core.count.call(null,cljs.core.get.call(null,d__3238,2)))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",2,cljs.core.list("﷑'count",cljs.core.list("﷑'get","﷑'d",2)))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,1,cljs.core.count.call(null,cljs.core.get.call(null,d__3238,4)))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",1,cljs.core.list("﷑'count",cljs.core.list("﷑'get","﷑'d",4)))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.HashMap.fromArrays([1,3,5],[2,4,6]),cljs.core.merge.call(null,cljs.core.HashMap.fromArrays([1],[2]),cljs.core.HashMap.fromArrays([3],[4]),cljs.core.HashMap.fromArrays([5],[6])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.hash_map(1,2,3,4,5,6),cljs.core.list("﷑'merge",cljs.core.hash_map(1,2),cljs.core.hash_map(3,4),cljs.core.hash_map(5,6)))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.HashMap.fromArrays([1,3],[2,4]),cljs.core.merge.call(null,cljs.core.HashMap.fromArrays([1],[2]),cljs.core.HashMap.fromArrays([3],[4]),null))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.hash_map(1,2,3,4),cljs.core.list("﷑'merge",cljs.core.hash_map(1,2),cljs.core.hash_map(3,4),null))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.ObjMap.fromObject(["﷐'a","﷐'b"],{"﷐'a":3,"﷐'b":2}),cljs.core.frequencies.call(null,cljs.core.Vector.fromArray(["﷐'a","﷐'b","﷐'a","﷐'b","﷐'a"])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.hash_map("﷐'a",3,"﷐'b",2),cljs.core.list("﷑'frequencies",(new cljs.core.Vector(null, ["﷐'a","﷐'b","﷐'a","﷐'b","﷐'a"]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([1,3,6,10,15]),cljs.core.reductions.call(null,cljs.core._PLUS_,cljs.core.Vector.fromArray([1,2,3,4,5])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [1,3,6,10,15])),cljs.core.list("﷑'reductions","﷑'+",(new cljs.core.Vector(null, [1,2,3,4,5]))))));
}
return "﷐'ok";
});
