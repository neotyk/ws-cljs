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
var or__3576__auto____1941 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3576__auto____1941))
{return or__3576__auto____1941;
} else
{var or__3576__auto____1942 = (p["_"]);

if(cljs.core.truth_(or__3576__auto____1942))
{return or__3576__auto____1942;
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
if(cljs.core.truth_((function (){var and__3574__auto____1943 = coll;

if(cljs.core.truth_(and__3574__auto____1943))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3574__auto____1943;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3576__auto____1944 = (_count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____1944))
{return or__3576__auto____1944;
} else
{return (_count["_"]);
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3574__auto____1945 = coll;

if(cljs.core.truth_(and__3574__auto____1945))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3574__auto____1945;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3576__auto____1946 = (_empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____1946))
{return or__3576__auto____1946;
} else
{return (_empty["_"]);
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3574__auto____1947 = coll;

if(cljs.core.truth_(and__3574__auto____1947))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3574__auto____1947;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3576__auto____1948 = (_conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____1948))
{return or__3576__auto____1948;
} else
{return (_conj["_"]);
}
})().call(null,coll,o);
}
});
cljs.core.IIndexed = {};
cljs.core._nth = (function() {
var _nth = null;
var _nth__1953 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3574__auto____1949 = coll;

if(cljs.core.truth_(and__3574__auto____1949))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3574__auto____1949;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3576__auto____1950 = (_nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____1950))
{return or__3576__auto____1950;
} else
{return (_nth["_"]);
}
})().call(null,coll,n);
}
});
var _nth__1954 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3574__auto____1951 = coll;

if(cljs.core.truth_(and__3574__auto____1951))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3574__auto____1951;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3576__auto____1952 = (_nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____1952))
{return or__3576__auto____1952;
} else
{return (_nth["_"]);
}
})().call(null,coll,n,not_found);
}
});
_nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return _nth__1953.call(this,coll,n);
case  3 :
return _nth__1954.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3574__auto____1956 = coll;

if(cljs.core.truth_(and__3574__auto____1956))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3574__auto____1956;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3576__auto____1957 = (_first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____1957))
{return or__3576__auto____1957;
} else
{return (_first["_"]);
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3574__auto____1958 = coll;

if(cljs.core.truth_(and__3574__auto____1958))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3574__auto____1958;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3576__auto____1959 = (_rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____1959))
{return or__3576__auto____1959;
} else
{return (_rest["_"]);
}
})().call(null,coll);
}
});
cljs.core.ILookup = {};
cljs.core._lookup = (function() {
var _lookup = null;
var _lookup__1964 = (function (o,k){
if(cljs.core.truth_((function (){var and__3574__auto____1960 = o;

if(cljs.core.truth_(and__3574__auto____1960))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3574__auto____1960;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3576__auto____1961 = (_lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____1961))
{return or__3576__auto____1961;
} else
{return (_lookup["_"]);
}
})().call(null,o,k);
}
});
var _lookup__1965 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3574__auto____1962 = o;

if(cljs.core.truth_(and__3574__auto____1962))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3574__auto____1962;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3576__auto____1963 = (_lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____1963))
{return or__3576__auto____1963;
} else
{return (_lookup["_"]);
}
})().call(null,o,k,not_found);
}
});
_lookup = function(o,k,not_found){
switch(arguments.length){
case  2 :
return _lookup__1964.call(this,o,k);
case  3 :
return _lookup__1965.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3574__auto____1967 = coll;

if(cljs.core.truth_(and__3574__auto____1967))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3574__auto____1967;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3576__auto____1968 = (_contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____1968))
{return or__3576__auto____1968;
} else
{return (_contains_key_QMARK_["_"]);
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3574__auto____1969 = coll;

if(cljs.core.truth_(and__3574__auto____1969))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3574__auto____1969;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3576__auto____1970 = (_assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____1970))
{return or__3576__auto____1970;
} else
{return (_assoc["_"]);
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3574__auto____1971 = coll;

if(cljs.core.truth_(and__3574__auto____1971))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3574__auto____1971;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3576__auto____1972 = (_dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____1972))
{return or__3576__auto____1972;
} else
{return (_dissoc["_"]);
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3574__auto____1973 = coll;

if(cljs.core.truth_(and__3574__auto____1973))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3574__auto____1973;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3576__auto____1974 = (_disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____1974))
{return or__3576__auto____1974;
} else
{return (_disjoin["_"]);
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3574__auto____1975 = coll;

if(cljs.core.truth_(and__3574__auto____1975))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3574__auto____1975;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3576__auto____1976 = (_peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____1976))
{return or__3576__auto____1976;
} else
{return (_peek["_"]);
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3574__auto____1977 = coll;

if(cljs.core.truth_(and__3574__auto____1977))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3574__auto____1977;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3576__auto____1978 = (_pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____1978))
{return or__3576__auto____1978;
} else
{return (_pop["_"]);
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3574__auto____1979 = coll;

if(cljs.core.truth_(and__3574__auto____1979))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3574__auto____1979;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3576__auto____1980 = (_assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____1980))
{return or__3576__auto____1980;
} else
{return (_assoc_n["_"]);
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3574__auto____1981 = o;

if(cljs.core.truth_(and__3574__auto____1981))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3574__auto____1981;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3576__auto____1982 = (_deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____1982))
{return or__3576__auto____1982;
} else
{return (_deref["_"]);
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3574__auto____1983 = o;

if(cljs.core.truth_(and__3574__auto____1983))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3574__auto____1983;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3576__auto____1984 = (_deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____1984))
{return or__3576__auto____1984;
} else
{return (_deref_with_timeout["_"]);
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3574__auto____1985 = o;

if(cljs.core.truth_(and__3574__auto____1985))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3574__auto____1985;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3576__auto____1986 = (_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____1986))
{return or__3576__auto____1986;
} else
{return (_meta["_"]);
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3574__auto____1987 = o;

if(cljs.core.truth_(and__3574__auto____1987))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3574__auto____1987;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3576__auto____1988 = (_with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____1988))
{return or__3576__auto____1988;
} else
{return (_with_meta["_"]);
}
})().call(null,o,meta);
}
});
cljs.core.IReduce = {};
cljs.core._reduce = (function() {
var _reduce = null;
var _reduce__1993 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3574__auto____1989 = coll;

if(cljs.core.truth_(and__3574__auto____1989))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3574__auto____1989;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3576__auto____1990 = (_reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____1990))
{return or__3576__auto____1990;
} else
{return (_reduce["_"]);
}
})().call(null,coll,f);
}
});
var _reduce__1994 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3574__auto____1991 = coll;

if(cljs.core.truth_(and__3574__auto____1991))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3574__auto____1991;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3576__auto____1992 = (_reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____1992))
{return or__3576__auto____1992;
} else
{return (_reduce["_"]);
}
})().call(null,coll,f,start);
}
});
_reduce = function(coll,f,start){
switch(arguments.length){
case  2 :
return _reduce__1993.call(this,coll,f);
case  3 :
return _reduce__1994.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3574__auto____1996 = o;

if(cljs.core.truth_(and__3574__auto____1996))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3574__auto____1996;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3576__auto____1997 = (_equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____1997))
{return or__3576__auto____1997;
} else
{return (_equiv["_"]);
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3574__auto____1998 = o;

if(cljs.core.truth_(and__3574__auto____1998))
{return o.cljs$core$IHash$_hash;
} else
{return and__3574__auto____1998;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3576__auto____1999 = (_hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____1999))
{return or__3576__auto____1999;
} else
{return (_hash["_"]);
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3574__auto____2000 = o;

if(cljs.core.truth_(and__3574__auto____2000))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3574__auto____2000;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3576__auto____2001 = (_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____2001))
{return or__3576__auto____2001;
} else
{return (_seq["_"]);
}
})().call(null,o);
}
});
cljs.core.ISequential = {};
cljs.core.IPrintable = {};
cljs.core._pr_seq = (function _pr_seq(o,opts){
if(cljs.core.truth_((function (){var and__3574__auto____2002 = o;

if(cljs.core.truth_(and__3574__auto____2002))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3574__auto____2002;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3576__auto____2003 = (_pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____2003))
{return or__3576__auto____2003;
} else
{return (_pr_seq["_"]);
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3574__auto____2004 = d;

if(cljs.core.truth_(and__3574__auto____2004))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3574__auto____2004;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3576__auto____2005 = (_realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3576__auto____2005))
{return or__3576__auto____2005;
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
var G__2006 = null;
var G__2006__2007 = (function (_,n){
return null;
});
var G__2006__2008 = (function (_,n,not_found){
return not_found;
});
G__2006 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__2006__2007.call(this,_,n);
case  3 :
return G__2006__2008.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2006;
})()
);
(cljs.core.IMeta["null"] = true);
(cljs.core._meta["null"] = (function (_){
return null;
}));
(cljs.core.IReduce["null"] = true);
(cljs.core._reduce["null"] = (function() {
var G__2010 = null;
var G__2010__2011 = (function (_,f){
return f.call(null);
});
var G__2010__2012 = (function (_,f,start){
return start;
});
G__2010 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__2010__2011.call(this,_,f);
case  3 :
return G__2010__2012.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2010;
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
var G__2014 = null;
var G__2014__2015 = (function (o,k){
return null;
});
var G__2014__2016 = (function (o,k,not_found){
return not_found;
});
G__2014 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__2014__2015.call(this,o,k);
case  3 :
return G__2014__2016.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2014;
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
var ci_reduce__2024 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__2018 = cljs.core._nth.call(null,cicoll,0);
var n__2019 = 1;

while(true){
if(cljs.core.truth_(cljs.core.lt_.call(null,n__2019,cljs.core._count.call(null,cicoll))))
{{
var G__2028 = f.call(null,val__2018,cljs.core._nth.call(null,cicoll,n__2019));
var G__2029 = cljs.core.inc.call(null,n__2019);
val__2018 = G__2028;
n__2019 = G__2029;
continue;
}
} else
{return val__2018;
}
break;
}
}
});
var ci_reduce__2025 = (function (cicoll,f,val){
var val__2020 = val;
var n__2021 = 0;

while(true){
if(cljs.core.truth_(cljs.core.lt_.call(null,n__2021,cljs.core._count.call(null,cicoll))))
{{
var G__2030 = f.call(null,val__2020,cljs.core._nth.call(null,cicoll,n__2021));
var G__2031 = cljs.core.inc.call(null,n__2021);
val__2020 = G__2030;
n__2021 = G__2031;
continue;
}
} else
{return val__2020;
}
break;
}
});
var ci_reduce__2026 = (function (cicoll,f,val,idx){
var val__2022 = val;
var n__2023 = idx;

while(true){
if(cljs.core.truth_(cljs.core.lt_.call(null,n__2023,cljs.core._count.call(null,cicoll))))
{{
var G__2032 = f.call(null,val__2022,cljs.core._nth.call(null,cicoll,n__2023));
var G__2033 = cljs.core.inc.call(null,n__2023);
val__2022 = G__2032;
n__2023 = G__2033;
continue;
}
} else
{return val__2022;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__2024.call(this,cicoll,f);
case  3 :
return ci_reduce__2025.call(this,cicoll,f,val);
case  4 :
return ci_reduce__2026.call(this,cicoll,f,val,idx);
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
var G__2040 = null;
var G__2040__2041 = (function (_,f){
var this__2034 = this;
return cljs.core.ci_reduce.call(null,this__2034.a,f,(this__2034.a[this__2034.i]),cljs.core.inc.call(null,this__2034.i));
});
var G__2040__2042 = (function (_,f,start){
var this__2035 = this;
return cljs.core.ci_reduce.call(null,this__2035.a,f,start,this__2035.i);
});
G__2040 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__2040__2041.call(this,_,f);
case  3 :
return G__2040__2042.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2040;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__2036 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__2037 = this;
return (this__2037.a[this__2037.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__2038 = this;
if(cljs.core.truth_(cljs.core.lt_.call(null,cljs.core.inc.call(null,this__2038.i),cljs.core._count.call(null,this__2038.a))))
{return (new cljs.core.IndexedSeq(this__2038.a,cljs.core.inc.call(null,this__2038.i)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__2039 = this;
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
var G__2044 = null;
var G__2044__2045 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__2044__2046 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__2044 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__2044__2045.call(this,array,f);
case  3 :
return G__2044__2046.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2044;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__2048 = null;
var G__2048__2049 = (function (array,k){
return (array[k]);
});
var G__2048__2050 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__2048 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__2048__2049.call(this,array,k);
case  3 :
return G__2048__2050.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2048;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__2052 = null;
var G__2052__2053 = (function (array,n){
if(cljs.core.truth_(cljs.core.lt_.call(null,n,array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__2052__2054 = (function (array,n,not_found){
if(cljs.core.truth_(cljs.core.lt_.call(null,n,array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__2052 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__2052__2053.call(this,array,n);
case  3 :
return G__2052__2054.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2052;
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
var temp__3726__auto____2056 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____2056))
{var s__2057 = temp__3726__auto____2056;

return cljs.core._first.call(null,s__2057);
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
var G__2058 = cljs.core.next.call(null,s);
s = G__2058;
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
var s__2059 = cljs.core.seq.call(null,x);
var n__2060 = 0;

while(true){
if(cljs.core.truth_(s__2059))
{{
var G__2061 = cljs.core.next.call(null,s__2059);
var G__2062 = cljs.core.inc.call(null,n__2060);
s__2059 = G__2061;
n__2060 = G__2062;
continue;
}
} else
{return n__2060;
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
var conj__2063 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__2064 = (function() { 
var G__2066__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__2067 = conj.call(null,coll,x);
var G__2068 = cljs.core.first.call(null,xs);
var G__2069 = cljs.core.next.call(null,xs);
coll = G__2067;
x = G__2068;
xs = G__2069;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__2066 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2066__delegate.call(this, coll, x, xs);
};
G__2066.cljs$lang$maxFixedArity = 2;
G__2066.cljs$lang$applyTo = (function (arglist__2070){
var coll = cljs.core.first(arglist__2070);
var x = cljs.core.first(cljs.core.next(arglist__2070));
var xs = cljs.core.rest(cljs.core.next(arglist__2070));
return G__2066__delegate.call(this, coll, x, xs);
});
return G__2066;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__2063.call(this,coll,x);
default:
return conj__2064.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__2064.cljs$lang$applyTo;
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
var nth__2071 = (function (coll,n){
return cljs.core._nth.call(null,coll,n);
});
var nth__2072 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,n,not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__2071.call(this,coll,n);
case  3 :
return nth__2072.call(this,coll,n,not_found);
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
var get__2074 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__2075 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__2074.call(this,o,k);
case  3 :
return get__2075.call(this,o,k,not_found);
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
var assoc__2078 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__2079 = (function() { 
var G__2081__delegate = function (coll,k,v,kvs){
while(true){
var ret__2077 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__2082 = ret__2077;
var G__2083 = cljs.core.first.call(null,kvs);
var G__2084 = cljs.core.second.call(null,kvs);
var G__2085 = cljs.core.nnext.call(null,kvs);
coll = G__2082;
k = G__2083;
v = G__2084;
kvs = G__2085;
continue;
}
} else
{return ret__2077;
}
break;
}
};
var G__2081 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2081__delegate.call(this, coll, k, v, kvs);
};
G__2081.cljs$lang$maxFixedArity = 3;
G__2081.cljs$lang$applyTo = (function (arglist__2086){
var coll = cljs.core.first(arglist__2086);
var k = cljs.core.first(cljs.core.next(arglist__2086));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2086)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2086)));
return G__2081__delegate.call(this, coll, k, v, kvs);
});
return G__2081;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__2078.call(this,coll,k,v);
default:
return assoc__2079.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__2079.cljs$lang$applyTo;
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
var dissoc__2088 = (function (coll){
return coll;
});
var dissoc__2089 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__2090 = (function() { 
var G__2092__delegate = function (coll,k,ks){
while(true){
var ret__2087 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__2093 = ret__2087;
var G__2094 = cljs.core.first.call(null,ks);
var G__2095 = cljs.core.next.call(null,ks);
coll = G__2093;
k = G__2094;
ks = G__2095;
continue;
}
} else
{return ret__2087;
}
break;
}
};
var G__2092 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2092__delegate.call(this, coll, k, ks);
};
G__2092.cljs$lang$maxFixedArity = 2;
G__2092.cljs$lang$applyTo = (function (arglist__2096){
var coll = cljs.core.first(arglist__2096);
var k = cljs.core.first(cljs.core.next(arglist__2096));
var ks = cljs.core.rest(cljs.core.next(arglist__2096));
return G__2092__delegate.call(this, coll, k, ks);
});
return G__2092;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__2088.call(this,coll);
case  2 :
return dissoc__2089.call(this,coll,k);
default:
return dissoc__2090.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__2090.cljs$lang$applyTo;
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
if(cljs.core.truth_((function (){var x__105__auto____2097 = o;

if(cljs.core.truth_((function (){var and__3574__auto____2098 = x__105__auto____2097;

if(cljs.core.truth_(and__3574__auto____2098))
{return x__105__auto____2097.cljs$core$IMeta$;
} else
{return and__3574__auto____2098;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__105__auto____2097);
}
})()))
{return cljs.core._meta.call(null,o);
} else
{return null;
}
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
var disj__2100 = (function (coll){
return coll;
});
var disj__2101 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__2102 = (function() { 
var G__2104__delegate = function (coll,k,ks){
while(true){
var ret__2099 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__2105 = ret__2099;
var G__2106 = cljs.core.first.call(null,ks);
var G__2107 = cljs.core.next.call(null,ks);
coll = G__2105;
k = G__2106;
ks = G__2107;
continue;
}
} else
{return ret__2099;
}
break;
}
};
var G__2104 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2104__delegate.call(this, coll, k, ks);
};
G__2104.cljs$lang$maxFixedArity = 2;
G__2104.cljs$lang$applyTo = (function (arglist__2108){
var coll = cljs.core.first(arglist__2108);
var k = cljs.core.first(cljs.core.next(arglist__2108));
var ks = cljs.core.rest(cljs.core.next(arglist__2108));
return G__2104__delegate.call(this, coll, k, ks);
});
return G__2104;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__2100.call(this,coll);
case  2 :
return disj__2101.call(this,coll,k);
default:
return disj__2102.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__2102.cljs$lang$applyTo;
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
{var x__105__auto____2109 = x;

if(cljs.core.truth_((function (){var and__3574__auto____2110 = x__105__auto____2109;

if(cljs.core.truth_(and__3574__auto____2110))
{return x__105__auto____2109.cljs$core$ICollection$;
} else
{return and__3574__auto____2110;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__105__auto____2109);
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
{var x__105__auto____2111 = x;

if(cljs.core.truth_((function (){var and__3574__auto____2112 = x__105__auto____2111;

if(cljs.core.truth_(and__3574__auto____2112))
{return x__105__auto____2111.cljs$core$ISet$;
} else
{return and__3574__auto____2112;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__105__auto____2111);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__105__auto____2113 = x;

if(cljs.core.truth_((function (){var and__3574__auto____2114 = x__105__auto____2113;

if(cljs.core.truth_(and__3574__auto____2114))
{return x__105__auto____2113.cljs$core$IAssociative$;
} else
{return and__3574__auto____2114;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__105__auto____2113);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__105__auto____2115 = x;

if(cljs.core.truth_((function (){var and__3574__auto____2116 = x__105__auto____2115;

if(cljs.core.truth_(and__3574__auto____2116))
{return x__105__auto____2115.cljs$core$ISequential$;
} else
{return and__3574__auto____2116;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__105__auto____2115);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__105__auto____2117 = x;

if(cljs.core.truth_((function (){var and__3574__auto____2118 = x__105__auto____2117;

if(cljs.core.truth_(and__3574__auto____2118))
{return x__105__auto____2117.cljs$core$ICounted$;
} else
{return and__3574__auto____2118;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__105__auto____2117);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__105__auto____2119 = x;

if(cljs.core.truth_((function (){var and__3574__auto____2120 = x__105__auto____2119;

if(cljs.core.truth_(and__3574__auto____2120))
{return x__105__auto____2119.cljs$core$IMap$;
} else
{return and__3574__auto____2120;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__105__auto____2119);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__105__auto____2121 = x;

if(cljs.core.truth_((function (){var and__3574__auto____2122 = x__105__auto____2121;

if(cljs.core.truth_(and__3574__auto____2122))
{return x__105__auto____2121.cljs$core$IVector$;
} else
{return and__3574__auto____2122;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__105__auto____2121);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__2123 = cljs.core.array.call(null);

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__2123.push(key);
}));
return keys__2123;
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
{var x__105__auto____2124 = s;

if(cljs.core.truth_((function (){var and__3574__auto____2125 = x__105__auto____2124;

if(cljs.core.truth_(and__3574__auto____2125))
{return x__105__auto____2124.cljs$core$ISeq$;
} else
{return and__3574__auto____2125;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__105__auto____2124);
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
var and__3574__auto____2126 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3574__auto____2126))
{return cljs.core.not.call(null,(function (){var or__3576__auto____2127 = cljs.core._EQ_.call(null,x.charAt(0),"﷐");

if(cljs.core.truth_(or__3576__auto____2127))
{return or__3576__auto____2127;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
}
})());
} else
{return and__3574__auto____2126;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3574__auto____2128 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3574__auto____2128))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷐");
} else
{return and__3574__auto____2128;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3574__auto____2129 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3574__auto____2129))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
} else
{return and__3574__auto____2129;
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
var and__3574__auto____2130 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3574__auto____2130))
{return (n == n.toFixed());
} else
{return and__3574__auto____2130;
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
if(cljs.core.truth_((function (){var and__3574__auto____2131 = coll;

if(cljs.core.truth_(and__3574__auto____2131))
{var and__3574__auto____2132 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3574__auto____2132))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3574__auto____2132;
}
} else
{return and__3574__auto____2131;
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
var distinct_QMARK___2137 = (function (x){
return true;
});
var distinct_QMARK___2138 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___2139 = (function() { 
var G__2141__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__2133 = cljs.core.set([y,x]);
var xs__2134 = more;

while(true){
var x__2135 = cljs.core.first.call(null,xs__2134);
var etc__2136 = cljs.core.next.call(null,xs__2134);

if(cljs.core.truth_(xs__2134))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__2133,x__2135)))
{return false;
} else
{{
var G__2142 = cljs.core.conj.call(null,s__2133,x__2135);
var G__2143 = etc__2136;
s__2133 = G__2142;
xs__2134 = G__2143;
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
};
var G__2141 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2141__delegate.call(this, x, y, more);
};
G__2141.cljs$lang$maxFixedArity = 2;
G__2141.cljs$lang$applyTo = (function (arglist__2144){
var x = cljs.core.first(arglist__2144);
var y = cljs.core.first(cljs.core.next(arglist__2144));
var more = cljs.core.rest(cljs.core.next(arglist__2144));
return G__2141__delegate.call(this, x, y, more);
});
return G__2141;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___2137.call(this,x);
case  2 :
return distinct_QMARK___2138.call(this,x,y);
default:
return distinct_QMARK___2139.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___2139.cljs$lang$applyTo;
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
var r__2145 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__2145)))
{return r__2145;
} else
{if(cljs.core.truth_(r__2145))
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
var sort__2147 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__2148 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__2146 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__2146,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__2146);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__2147.call(this,comp);
case  2 :
return sort__2148.call(this,comp,coll);
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
var sort_by__2150 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__2151 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__2150.call(this,keyfn,comp);
case  3 :
return sort_by__2151.call(this,keyfn,comp,coll);
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
var reduce__2153 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__2154 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__2153.call(this,f,val);
case  3 :
return reduce__2154.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__2160 = (function (f,coll){
var temp__3723__auto____2156 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3723__auto____2156))
{var s__2157 = temp__3723__auto____2156;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__2157),cljs.core.next.call(null,s__2157));
} else
{return f.call(null);
}
});
var seq_reduce__2161 = (function (f,val,coll){
var val__2158 = val;
var coll__2159 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__2159))
{{
var G__2163 = f.call(null,val__2158,cljs.core.first.call(null,coll__2159));
var G__2164 = cljs.core.next.call(null,coll__2159);
val__2158 = G__2163;
coll__2159 = G__2164;
continue;
}
} else
{return val__2158;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__2160.call(this,f,val);
case  3 :
return seq_reduce__2161.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__2165 = null;
var G__2165__2166 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__2165__2167 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__2165 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__2165__2166.call(this,coll,f);
case  3 :
return G__2165__2167.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2165;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___2169 = (function (){
return 0;
});
var _PLUS___2170 = (function (x){
return x;
});
var _PLUS___2171 = (function (x,y){
return (x + y);
});
var _PLUS___2172 = (function() { 
var G__2174__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,_PLUS_.call(null,x,y),more);
};
var G__2174 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2174__delegate.call(this, x, y, more);
};
G__2174.cljs$lang$maxFixedArity = 2;
G__2174.cljs$lang$applyTo = (function (arglist__2175){
var x = cljs.core.first(arglist__2175);
var y = cljs.core.first(cljs.core.next(arglist__2175));
var more = cljs.core.rest(cljs.core.next(arglist__2175));
return G__2174__delegate.call(this, x, y, more);
});
return G__2174;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___2169.call(this);
case  1 :
return _PLUS___2170.call(this,x);
case  2 :
return _PLUS___2171.call(this,x,y);
default:
return _PLUS___2172.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___2172.cljs$lang$applyTo;
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
var ___2176 = (function (x){
return (- x);
});
var ___2177 = (function (x,y){
return (x - y);
});
var ___2178 = (function() { 
var G__2180__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,_.call(null,x,y),more);
};
var G__2180 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2180__delegate.call(this, x, y, more);
};
G__2180.cljs$lang$maxFixedArity = 2;
G__2180.cljs$lang$applyTo = (function (arglist__2181){
var x = cljs.core.first(arglist__2181);
var y = cljs.core.first(cljs.core.next(arglist__2181));
var more = cljs.core.rest(cljs.core.next(arglist__2181));
return G__2180__delegate.call(this, x, y, more);
});
return G__2180;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___2176.call(this,x);
case  2 :
return ___2177.call(this,x,y);
default:
return ___2178.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___2178.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___2182 = (function (){
return 1;
});
var _STAR___2183 = (function (x){
return x;
});
var _STAR___2184 = (function (x,y){
return (x * y);
});
var _STAR___2185 = (function() { 
var G__2187__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,_STAR_.call(null,x,y),more);
};
var G__2187 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2187__delegate.call(this, x, y, more);
};
G__2187.cljs$lang$maxFixedArity = 2;
G__2187.cljs$lang$applyTo = (function (arglist__2188){
var x = cljs.core.first(arglist__2188);
var y = cljs.core.first(cljs.core.next(arglist__2188));
var more = cljs.core.rest(cljs.core.next(arglist__2188));
return G__2187__delegate.call(this, x, y, more);
});
return G__2187;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___2182.call(this);
case  1 :
return _STAR___2183.call(this,x);
case  2 :
return _STAR___2184.call(this,x,y);
default:
return _STAR___2185.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___2185.cljs$lang$applyTo;
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
var _SLASH___2189 = (function (x){
return (1 / x);
});
var _SLASH___2190 = (function (x,y){
return (x / y);
});
var _SLASH___2191 = (function() { 
var G__2193__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__2193 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2193__delegate.call(this, x, y, more);
};
G__2193.cljs$lang$maxFixedArity = 2;
G__2193.cljs$lang$applyTo = (function (arglist__2194){
var x = cljs.core.first(arglist__2194);
var y = cljs.core.first(cljs.core.next(arglist__2194));
var more = cljs.core.rest(cljs.core.next(arglist__2194));
return G__2193__delegate.call(this, x, y, more);
});
return G__2193;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___2189.call(this,x);
case  2 :
return _SLASH___2190.call(this,x,y);
default:
return _SLASH___2191.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___2191.cljs$lang$applyTo;
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
var _LT___2195 = (function (x){
return true;
});
var _LT___2196 = (function (x,y){
return (x < y);
});
var _LT___2197 = (function() { 
var G__2199__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_LT_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__2200 = y;
var G__2201 = cljs.core.first.call(null,more);
var G__2202 = cljs.core.next.call(null,more);
x = G__2200;
y = G__2201;
more = G__2202;
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
};
var G__2199 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2199__delegate.call(this, x, y, more);
};
G__2199.cljs$lang$maxFixedArity = 2;
G__2199.cljs$lang$applyTo = (function (arglist__2203){
var x = cljs.core.first(arglist__2203);
var y = cljs.core.first(cljs.core.next(arglist__2203));
var more = cljs.core.rest(cljs.core.next(arglist__2203));
return G__2199__delegate.call(this, x, y, more);
});
return G__2199;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___2195.call(this,x);
case  2 :
return _LT___2196.call(this,x,y);
default:
return _LT___2197.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___2197.cljs$lang$applyTo;
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
var _LT__EQ___2204 = (function (x){
return true;
});
var _LT__EQ___2205 = (function (x,y){
return (x <= y);
});
var _LT__EQ___2206 = (function() { 
var G__2208__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_LT__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__2209 = y;
var G__2210 = cljs.core.first.call(null,more);
var G__2211 = cljs.core.next.call(null,more);
x = G__2209;
y = G__2210;
more = G__2211;
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
};
var G__2208 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2208__delegate.call(this, x, y, more);
};
G__2208.cljs$lang$maxFixedArity = 2;
G__2208.cljs$lang$applyTo = (function (arglist__2212){
var x = cljs.core.first(arglist__2212);
var y = cljs.core.first(cljs.core.next(arglist__2212));
var more = cljs.core.rest(cljs.core.next(arglist__2212));
return G__2208__delegate.call(this, x, y, more);
});
return G__2208;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___2204.call(this,x);
case  2 :
return _LT__EQ___2205.call(this,x,y);
default:
return _LT__EQ___2206.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___2206.cljs$lang$applyTo;
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
var _GT___2213 = (function (x){
return true;
});
var _GT___2214 = (function (x,y){
return (x > y);
});
var _GT___2215 = (function() { 
var G__2217__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_GT_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__2218 = y;
var G__2219 = cljs.core.first.call(null,more);
var G__2220 = cljs.core.next.call(null,more);
x = G__2218;
y = G__2219;
more = G__2220;
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
};
var G__2217 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2217__delegate.call(this, x, y, more);
};
G__2217.cljs$lang$maxFixedArity = 2;
G__2217.cljs$lang$applyTo = (function (arglist__2221){
var x = cljs.core.first(arglist__2221);
var y = cljs.core.first(cljs.core.next(arglist__2221));
var more = cljs.core.rest(cljs.core.next(arglist__2221));
return G__2217__delegate.call(this, x, y, more);
});
return G__2217;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___2213.call(this,x);
case  2 :
return _GT___2214.call(this,x,y);
default:
return _GT___2215.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___2215.cljs$lang$applyTo;
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
var _GT__EQ___2222 = (function (x){
return true;
});
var _GT__EQ___2223 = (function (x,y){
return (x >= y);
});
var _GT__EQ___2224 = (function() { 
var G__2226__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_GT__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__2227 = y;
var G__2228 = cljs.core.first.call(null,more);
var G__2229 = cljs.core.next.call(null,more);
x = G__2227;
y = G__2228;
more = G__2229;
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
};
var G__2226 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2226__delegate.call(this, x, y, more);
};
G__2226.cljs$lang$maxFixedArity = 2;
G__2226.cljs$lang$applyTo = (function (arglist__2230){
var x = cljs.core.first(arglist__2230);
var y = cljs.core.first(cljs.core.next(arglist__2230));
var more = cljs.core.rest(cljs.core.next(arglist__2230));
return G__2226__delegate.call(this, x, y, more);
});
return G__2226;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___2222.call(this,x);
case  2 :
return _GT__EQ___2223.call(this,x,y);
default:
return _GT__EQ___2224.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___2224.cljs$lang$applyTo;
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
var max__2231 = (function (x){
return x;
});
var max__2232 = (function (x,y){
return ((x > y) ? x : y);
});
var max__2233 = (function() { 
var G__2235__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,max.call(null,x,y),more);
};
var G__2235 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2235__delegate.call(this, x, y, more);
};
G__2235.cljs$lang$maxFixedArity = 2;
G__2235.cljs$lang$applyTo = (function (arglist__2236){
var x = cljs.core.first(arglist__2236);
var y = cljs.core.first(cljs.core.next(arglist__2236));
var more = cljs.core.rest(cljs.core.next(arglist__2236));
return G__2235__delegate.call(this, x, y, more);
});
return G__2235;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__2231.call(this,x);
case  2 :
return max__2232.call(this,x,y);
default:
return max__2233.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__2233.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__2237 = (function (x){
return x;
});
var min__2238 = (function (x,y){
return ((x < y) ? x : y);
});
var min__2239 = (function() { 
var G__2241__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,min.call(null,x,y),more);
};
var G__2241 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2241__delegate.call(this, x, y, more);
};
G__2241.cljs$lang$maxFixedArity = 2;
G__2241.cljs$lang$applyTo = (function (arglist__2242){
var x = cljs.core.first(arglist__2242);
var y = cljs.core.first(cljs.core.next(arglist__2242));
var more = cljs.core.rest(cljs.core.next(arglist__2242));
return G__2241__delegate.call(this, x, y, more);
});
return G__2241;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__2237.call(this,x);
case  2 :
return min__2238.call(this,x,y);
default:
return min__2239.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__2239.cljs$lang$applyTo;
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
var rem__2243 = cljs.core.mod.call(null,n,d);

return cljs.core.fix.call(null,((n - rem__2243) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__2244 = cljs.core.quot.call(null,n,d);

return (n - (d * q__2244));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__2245 = (function (){
return Math.random.call(null);
});
var rand__2246 = (function (n){
return cljs.core._STAR_.call(null,n,rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__2245.call(this);
case  1 :
return rand__2246.call(this,n);
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
var _EQ__EQ___2248 = (function (x){
return true;
});
var _EQ__EQ___2249 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___2250 = (function() { 
var G__2252__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__2253 = y;
var G__2254 = cljs.core.first.call(null,more);
var G__2255 = cljs.core.next.call(null,more);
x = G__2253;
y = G__2254;
more = G__2255;
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
};
var G__2252 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2252__delegate.call(this, x, y, more);
};
G__2252.cljs$lang$maxFixedArity = 2;
G__2252.cljs$lang$applyTo = (function (arglist__2256){
var x = cljs.core.first(arglist__2256);
var y = cljs.core.first(cljs.core.next(arglist__2256));
var more = cljs.core.rest(cljs.core.next(arglist__2256));
return G__2252__delegate.call(this, x, y, more);
});
return G__2252;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___2248.call(this,x);
case  2 :
return _EQ__EQ___2249.call(this,x,y);
default:
return _EQ__EQ___2250.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___2250.cljs$lang$applyTo;
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
var n__2257 = n;
var xs__2258 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3574__auto____2259 = xs__2258;

if(cljs.core.truth_(and__3574__auto____2259))
{return cljs.core.pos_QMARK_.call(null,n__2257);
} else
{return and__3574__auto____2259;
}
})()))
{{
var G__2260 = cljs.core.dec.call(null,n__2257);
var G__2261 = cljs.core.next.call(null,xs__2258);
n__2257 = G__2260;
xs__2258 = G__2261;
continue;
}
} else
{return xs__2258;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__2266 = null;
var G__2266__2267 = (function (coll,n){
var temp__3723__auto____2262 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3723__auto____2262))
{var xs__2263 = temp__3723__auto____2262;

return cljs.core.first.call(null,xs__2263);
} else
{throw "Index out of bounds";
}
});
var G__2266__2268 = (function (coll,n,not_found){
var temp__3723__auto____2264 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3723__auto____2264))
{var xs__2265 = temp__3723__auto____2264;

return cljs.core.first.call(null,xs__2265);
} else
{return not_found;
}
});
G__2266 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__2266__2267.call(this,coll,n);
case  3 :
return G__2266__2268.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2266;
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
var str__2270 = (function (){
return "";
});
var str__2271 = (function (x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return "";
} else
{return x.toString();
}
});
var str__2272 = (function() { 
var G__2274__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__2275 = sb.append(str.call(null,cljs.core.first.call(null,more)));
var G__2276 = cljs.core.next.call(null,more);
sb = G__2275;
more = G__2276;
continue;
}
} else
{return str.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str.call(null,x))),ys);
};
var G__2274 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__2274__delegate.call(this, x, ys);
};
G__2274.cljs$lang$maxFixedArity = 1;
G__2274.cljs$lang$applyTo = (function (arglist__2277){
var x = cljs.core.first(arglist__2277);
var ys = cljs.core.rest(arglist__2277);
return G__2274__delegate.call(this, x, ys);
});
return G__2274;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__2270.call(this);
case  1 :
return str__2271.call(this,x);
default:
return str__2272.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__2272.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__2278 = (function (s,start){
return s.substring(start);
});
var subs__2279 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__2278.call(this,s,start);
case  3 :
return subs__2279.call(this,s,start,end);
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
var symbol__2281 = (function (name){
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
var symbol__2282 = (function (ns,name){
return symbol.call(null,cljs.core.str.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__2281.call(this,ns);
case  2 :
return symbol__2282.call(this,ns,name);
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
var keyword__2284 = (function (name){
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
var keyword__2285 = (function (ns,name){
return keyword.call(null,cljs.core.str.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__2284.call(this,ns);
case  2 :
return keyword__2285.call(this,ns,name);
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
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__2287 = cljs.core.seq.call(null,x);
var ys__2288 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,xs__2287)))
{return cljs.core.nil_QMARK_.call(null,ys__2288);
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,ys__2288)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__2287),cljs.core.first.call(null,ys__2288))))
{{
var G__2289 = cljs.core.next.call(null,xs__2287);
var G__2290 = cljs.core.next.call(null,ys__2288);
xs__2287 = G__2289;
ys__2288 = G__2290;
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
return cljs.core.reduce.call(null,(function (p1__2291_SHARP_,p2__2292_SHARP_){
return cljs.core.hash_combine.call(null,p1__2291_SHARP_,cljs.core.hash.call(null,p2__2292_SHARP_));
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
var this__2293 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__2294 = this;
return (new cljs.core.List(this__2294.meta,o,coll,cljs.core.inc.call(null,this__2294.count)));
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__2295 = this;
return this__2295.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__2296 = this;
return this__2296.rest;
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__2297 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__2298 = this;
return this__2298.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__2299 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__2300 = this;
return (new cljs.core.List(meta,this__2300.first,this__2300.rest,this__2300.count));
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__2301 = this;
return cljs.core.List.EMPTY;
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__2302 = this;
return this__2302.meta;
});
cljs.core.List.prototype.cljs$core$IHash$ = true;
cljs.core.List.prototype.cljs$core$IHash$_hash = (function (coll){
var this__2303 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__2304 = this;
return this__2304.count;
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
var this__2305 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__2306 = this;
return (new cljs.core.List(this__2306.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__2307 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__2308 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__2309 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__2310 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__2311 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__2312 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__2313 = this;
return coll;
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__2314 = this;
return this__2314.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IHash$ = true;
cljs.core.EmptyList.prototype.cljs$core$IHash$_hash = (function (coll){
var this__2315 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__2316 = this;
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
cljs.core.list = (function() { 
var list__delegate = function (items){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,cljs.core.reverse.call(null,items));
};
var list = function (var_args){
var items = null;
if (goog.isDef(var_args)) {
  items = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return list__delegate.call(this, items);
};
list.cljs$lang$maxFixedArity = 0;
list.cljs$lang$applyTo = (function (arglist__2317){
var items = cljs.core.seq( arglist__2317 );;
return list__delegate.call(this, items);
});
return list;
})()
;

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
var this__2318 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__2319 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__2320 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__2321 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__2321.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__2322 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__2323 = this;
return this__2323.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__2324 = this;
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__2324.rest)))
{return cljs.core.List.EMPTY;
} else
{return this__2324.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__2325 = this;
return this__2325.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__2326 = this;
return (new cljs.core.Cons(meta,this__2326.first,this__2326.rest));
});
/**
* Returns a new seq where x is the first element and seq is the rest.
*/
cljs.core.cons = (function cons(x,seq){
return (new cljs.core.Cons(null,x,seq));
});
(cljs.core.IReduce["string"] = true);
(cljs.core._reduce["string"] = (function() {
var G__2327 = null;
var G__2327__2328 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__2327__2329 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__2327 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__2327__2328.call(this,string,f);
case  3 :
return G__2327__2329.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2327;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__2331 = null;
var G__2331__2332 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__2331__2333 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__2331 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__2331__2332.call(this,string,k);
case  3 :
return G__2331__2333.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2331;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__2335 = null;
var G__2335__2336 = (function (string,n){
if(cljs.core.truth_(cljs.core._LT_.call(null,n,cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__2335__2337 = (function (string,n,not_found){
if(cljs.core.truth_(cljs.core._LT_.call(null,n,cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__2335 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__2335__2336.call(this,string,n);
case  3 :
return G__2335__2337.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2335;
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
var G__2339 = null;
var G__2339__2340 = (function (_,coll){
return cljs.core.get.call(null,coll,this.toString());
});
var G__2339__2341 = (function (_,coll,not_found){
return cljs.core.get.call(null,coll,this.toString(),not_found);
});
G__2339 = function(_,coll,not_found){
switch(arguments.length){
case  2 :
return G__2339__2340.call(this,_,coll);
case  3 :
return G__2339__2341.call(this,_,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2339;
})()
;
goog.global['String']['prototype']['apply'] = (function (s,args){
if(cljs.core.truth_(cljs.core._LT_.call(null,cljs.core.count.call(null,args),2)))
{return cljs.core.get.call(null,(args[0]),s);
} else
{return cljs.core.get.call(null,(args[0]),s,(args[1]));
}
});
cljs.core.lazy_seq_value = (function lazy_seq_value(lazy_seq){
var x__2343 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__2343;
} else
{lazy_seq.x = x__2343.call(null);
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
var this__2344 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__2345 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__2346 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__2347 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__2347.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__2348 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__2349 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__2350 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__2351 = this;
return this__2351.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__2352 = this;
return (new cljs.core.LazySeq(meta,this__2352.realized,this__2352.x));
});
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__2353 = cljs.core.array.call(null);

var s__2354 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__2354)))
{ary__2353.push(cljs.core.first.call(null,s__2354));
{
var G__2355 = cljs.core.next.call(null,s__2354);
s__2354 = G__2355;
continue;
}
} else
{return ary__2353;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__2356 = s;
var i__2357 = n;
var sum__2358 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3574__auto____2359 = cljs.core.pos_QMARK_.call(null,i__2357);

if(cljs.core.truth_(and__3574__auto____2359))
{return cljs.core.seq.call(null,s__2356);
} else
{return and__3574__auto____2359;
}
})()))
{{
var G__2360 = cljs.core.next.call(null,s__2356);
var G__2361 = cljs.core.dec.call(null,i__2357);
var G__2362 = cljs.core.inc.call(null,sum__2358);
s__2356 = G__2360;
i__2357 = G__2361;
sum__2358 = G__2362;
continue;
}
} else
{return sum__2358;
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
var concat__2366 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__2367 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__2368 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__2363 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__2363))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__2363),concat.call(null,cljs.core.rest.call(null,s__2363),y));
} else
{return y;
}
})));
});
var concat__2369 = (function() { 
var G__2371__delegate = function (x,y,zs){
var cat__2365 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__2364 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__2364))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__2364),cat.call(null,cljs.core.rest.call(null,xys__2364),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__2365.call(null,concat.call(null,x,y),zs);
};
var G__2371 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2371__delegate.call(this, x, y, zs);
};
G__2371.cljs$lang$maxFixedArity = 2;
G__2371.cljs$lang$applyTo = (function (arglist__2372){
var x = cljs.core.first(arglist__2372);
var y = cljs.core.first(cljs.core.next(arglist__2372));
var zs = cljs.core.rest(cljs.core.next(arglist__2372));
return G__2371__delegate.call(this, x, y, zs);
});
return G__2371;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__2366.call(this);
case  1 :
return concat__2367.call(this,x);
case  2 :
return concat__2368.call(this,x,y);
default:
return concat__2369.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__2369.cljs$lang$applyTo;
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
var list_STAR___2373 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___2374 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___2375 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___2376 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___2377 = (function() { 
var G__2379__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__2379 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__2379__delegate.call(this, a, b, c, d, more);
};
G__2379.cljs$lang$maxFixedArity = 4;
G__2379.cljs$lang$applyTo = (function (arglist__2380){
var a = cljs.core.first(arglist__2380);
var b = cljs.core.first(cljs.core.next(arglist__2380));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2380)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2380))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2380))));
return G__2379__delegate.call(this, a, b, c, d, more);
});
return G__2379;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___2373.call(this,a);
case  2 :
return list_STAR___2374.call(this,a,b);
case  3 :
return list_STAR___2375.call(this,a,b,c);
case  4 :
return list_STAR___2376.call(this,a,b,c,d);
default:
return list_STAR___2377.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___2377.cljs$lang$applyTo;
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
var apply__2390 = (function (f,args){
var fixed_arity__2381 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_(cljs.core._LT__EQ_.call(null,cljs.core.bounded_count.call(null,args,cljs.core.inc.call(null,fixed_arity__2381)),fixed_arity__2381)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__2391 = (function (f,x,args){
var arglist__2382 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__2383 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_(cljs.core._LT__EQ_.call(null,cljs.core.bounded_count.call(null,arglist__2382,fixed_arity__2383),fixed_arity__2383)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__2382));
} else
{return f.cljs$lang$applyTo(arglist__2382);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__2382));
}
});
var apply__2392 = (function (f,x,y,args){
var arglist__2384 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__2385 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_(cljs.core._LT__EQ_.call(null,cljs.core.bounded_count.call(null,arglist__2384,fixed_arity__2385),fixed_arity__2385)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__2384));
} else
{return f.cljs$lang$applyTo(arglist__2384);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__2384));
}
});
var apply__2393 = (function (f,x,y,z,args){
var arglist__2386 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__2387 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_(cljs.core._LT__EQ_.call(null,cljs.core.bounded_count.call(null,arglist__2386,fixed_arity__2387),fixed_arity__2387)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__2386));
} else
{return f.cljs$lang$applyTo(arglist__2386);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__2386));
}
});
var apply__2394 = (function() { 
var G__2396__delegate = function (f,a,b,c,d,args){
var arglist__2388 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__2389 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_(cljs.core._LT__EQ_.call(null,cljs.core.bounded_count.call(null,arglist__2388,fixed_arity__2389),fixed_arity__2389)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__2388));
} else
{return f.cljs$lang$applyTo(arglist__2388);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__2388));
}
};
var G__2396 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__2396__delegate.call(this, f, a, b, c, d, args);
};
G__2396.cljs$lang$maxFixedArity = 5;
G__2396.cljs$lang$applyTo = (function (arglist__2397){
var f = cljs.core.first(arglist__2397);
var a = cljs.core.first(cljs.core.next(arglist__2397));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2397)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2397))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2397)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2397)))));
return G__2396__delegate.call(this, f, a, b, c, d, args);
});
return G__2396;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__2390.call(this,f,a);
case  3 :
return apply__2391.call(this,f,a,b);
case  4 :
return apply__2392.call(this,f,a,b,c);
case  5 :
return apply__2393.call(this,f,a,b,c,d);
default:
return apply__2394.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__2394.cljs$lang$applyTo;
return apply;
})()
;
/**
* Returns an object of the same type and value as obj, with
* (apply f (meta obj) args) as its metadata.
* @param {...*} var_args
*/
cljs.core.vary_meta = (function() { 
var vary_meta__delegate = function (obj,f,args){
return cljs.core.with_meta.call(null,obj,cljs.core.apply.call(null,f,cljs.core.meta.call(null,obj),args));
};
var vary_meta = function (obj,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return vary_meta__delegate.call(this, obj, f, args);
};
vary_meta.cljs$lang$maxFixedArity = 2;
vary_meta.cljs$lang$applyTo = (function (arglist__2398){
var obj = cljs.core.first(arglist__2398);
var f = cljs.core.first(cljs.core.next(arglist__2398));
var args = cljs.core.rest(cljs.core.next(arglist__2398));
return vary_meta__delegate.call(this, obj, f, args);
});
return vary_meta;
})()
;
/**
* Same as (not (= obj1 obj2))
* @param {...*} var_args
*/
cljs.core.not_EQ_ = (function() {
var not_EQ_ = null;
var not_EQ___2399 = (function (x){
return false;
});
var not_EQ___2400 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___2401 = (function() { 
var G__2403__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__2403 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2403__delegate.call(this, x, y, more);
};
G__2403.cljs$lang$maxFixedArity = 2;
G__2403.cljs$lang$applyTo = (function (arglist__2404){
var x = cljs.core.first(arglist__2404);
var y = cljs.core.first(cljs.core.next(arglist__2404));
var more = cljs.core.rest(cljs.core.next(arglist__2404));
return G__2403__delegate.call(this, x, y, more);
});
return G__2403;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___2399.call(this,x);
case  2 :
return not_EQ___2400.call(this,x,y);
default:
return not_EQ___2401.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___2401.cljs$lang$applyTo;
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
var G__2405 = pred;
var G__2406 = cljs.core.next.call(null,coll);
pred = G__2405;
coll = G__2406;
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
{var or__3576__auto____2407 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3576__auto____2407))
{return or__3576__auto____2407;
} else
{{
var G__2408 = pred;
var G__2409 = cljs.core.next.call(null,coll);
pred = G__2408;
coll = G__2409;
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
var G__2410 = null;
var G__2410__2411 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__2410__2412 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__2410__2413 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__2410__2414 = (function() { 
var G__2416__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__2416 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2416__delegate.call(this, x, y, zs);
};
G__2416.cljs$lang$maxFixedArity = 2;
G__2416.cljs$lang$applyTo = (function (arglist__2417){
var x = cljs.core.first(arglist__2417);
var y = cljs.core.first(cljs.core.next(arglist__2417));
var zs = cljs.core.rest(cljs.core.next(arglist__2417));
return G__2416__delegate.call(this, x, y, zs);
});
return G__2416;
})()
;
G__2410 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__2410__2411.call(this);
case  1 :
return G__2410__2412.call(this,x);
case  2 :
return G__2410__2413.call(this,x,y);
default:
return G__2410__2414.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__2410.cljs$lang$maxFixedArity = 2;
G__2410.cljs$lang$applyTo = G__2410__2414.cljs$lang$applyTo;
return G__2410;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__2418__delegate = function (args){
return x;
};
var G__2418 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__2418__delegate.call(this, args);
};
G__2418.cljs$lang$maxFixedArity = 0;
G__2418.cljs$lang$applyTo = (function (arglist__2419){
var args = cljs.core.seq( arglist__2419 );;
return G__2418__delegate.call(this, args);
});
return G__2418;
})()
;
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
var comp__2423 = (function (){
return cljs.core.identity;
});
var comp__2424 = (function (f){
return f;
});
var comp__2425 = (function (f,g){
return (function() {
var G__2429 = null;
var G__2429__2430 = (function (){
return f.call(null,g.call(null));
});
var G__2429__2431 = (function (x){
return f.call(null,g.call(null,x));
});
var G__2429__2432 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__2429__2433 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__2429__2434 = (function() { 
var G__2436__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__2436 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2436__delegate.call(this, x, y, z, args);
};
G__2436.cljs$lang$maxFixedArity = 3;
G__2436.cljs$lang$applyTo = (function (arglist__2437){
var x = cljs.core.first(arglist__2437);
var y = cljs.core.first(cljs.core.next(arglist__2437));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2437)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2437)));
return G__2436__delegate.call(this, x, y, z, args);
});
return G__2436;
})()
;
G__2429 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__2429__2430.call(this);
case  1 :
return G__2429__2431.call(this,x);
case  2 :
return G__2429__2432.call(this,x,y);
case  3 :
return G__2429__2433.call(this,x,y,z);
default:
return G__2429__2434.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__2429.cljs$lang$maxFixedArity = 3;
G__2429.cljs$lang$applyTo = G__2429__2434.cljs$lang$applyTo;
return G__2429;
})()
});
var comp__2426 = (function (f,g,h){
return (function() {
var G__2438 = null;
var G__2438__2439 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__2438__2440 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__2438__2441 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__2438__2442 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__2438__2443 = (function() { 
var G__2445__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__2445 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2445__delegate.call(this, x, y, z, args);
};
G__2445.cljs$lang$maxFixedArity = 3;
G__2445.cljs$lang$applyTo = (function (arglist__2446){
var x = cljs.core.first(arglist__2446);
var y = cljs.core.first(cljs.core.next(arglist__2446));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2446)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2446)));
return G__2445__delegate.call(this, x, y, z, args);
});
return G__2445;
})()
;
G__2438 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__2438__2439.call(this);
case  1 :
return G__2438__2440.call(this,x);
case  2 :
return G__2438__2441.call(this,x,y);
case  3 :
return G__2438__2442.call(this,x,y,z);
default:
return G__2438__2443.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__2438.cljs$lang$maxFixedArity = 3;
G__2438.cljs$lang$applyTo = G__2438__2443.cljs$lang$applyTo;
return G__2438;
})()
});
var comp__2427 = (function() { 
var G__2447__delegate = function (f1,f2,f3,fs){
var fs__2420 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__2448__delegate = function (args){
var ret__2421 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__2420),args);
var fs__2422 = cljs.core.next.call(null,fs__2420);

while(true){
if(cljs.core.truth_(fs__2422))
{{
var G__2449 = cljs.core.first.call(null,fs__2422).call(null,ret__2421);
var G__2450 = cljs.core.next.call(null,fs__2422);
ret__2421 = G__2449;
fs__2422 = G__2450;
continue;
}
} else
{return ret__2421;
}
break;
}
};
var G__2448 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__2448__delegate.call(this, args);
};
G__2448.cljs$lang$maxFixedArity = 0;
G__2448.cljs$lang$applyTo = (function (arglist__2451){
var args = cljs.core.seq( arglist__2451 );;
return G__2448__delegate.call(this, args);
});
return G__2448;
})()
;
};
var G__2447 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2447__delegate.call(this, f1, f2, f3, fs);
};
G__2447.cljs$lang$maxFixedArity = 3;
G__2447.cljs$lang$applyTo = (function (arglist__2452){
var f1 = cljs.core.first(arglist__2452);
var f2 = cljs.core.first(cljs.core.next(arglist__2452));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2452)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2452)));
return G__2447__delegate.call(this, f1, f2, f3, fs);
});
return G__2447;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__2423.call(this);
case  1 :
return comp__2424.call(this,f1);
case  2 :
return comp__2425.call(this,f1,f2);
case  3 :
return comp__2426.call(this,f1,f2,f3);
default:
return comp__2427.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__2427.cljs$lang$applyTo;
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
var partial__2453 = (function (f,arg1){
return (function() { 
var G__2458__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__2458 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__2458__delegate.call(this, args);
};
G__2458.cljs$lang$maxFixedArity = 0;
G__2458.cljs$lang$applyTo = (function (arglist__2459){
var args = cljs.core.seq( arglist__2459 );;
return G__2458__delegate.call(this, args);
});
return G__2458;
})()
;
});
var partial__2454 = (function (f,arg1,arg2){
return (function() { 
var G__2460__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__2460 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__2460__delegate.call(this, args);
};
G__2460.cljs$lang$maxFixedArity = 0;
G__2460.cljs$lang$applyTo = (function (arglist__2461){
var args = cljs.core.seq( arglist__2461 );;
return G__2460__delegate.call(this, args);
});
return G__2460;
})()
;
});
var partial__2455 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__2462__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__2462 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__2462__delegate.call(this, args);
};
G__2462.cljs$lang$maxFixedArity = 0;
G__2462.cljs$lang$applyTo = (function (arglist__2463){
var args = cljs.core.seq( arglist__2463 );;
return G__2462__delegate.call(this, args);
});
return G__2462;
})()
;
});
var partial__2456 = (function() { 
var G__2464__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__2465__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__2465 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__2465__delegate.call(this, args);
};
G__2465.cljs$lang$maxFixedArity = 0;
G__2465.cljs$lang$applyTo = (function (arglist__2466){
var args = cljs.core.seq( arglist__2466 );;
return G__2465__delegate.call(this, args);
});
return G__2465;
})()
;
};
var G__2464 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__2464__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__2464.cljs$lang$maxFixedArity = 4;
G__2464.cljs$lang$applyTo = (function (arglist__2467){
var f = cljs.core.first(arglist__2467);
var arg1 = cljs.core.first(cljs.core.next(arglist__2467));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2467)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2467))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2467))));
return G__2464__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__2464;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__2453.call(this,f,arg1);
case  3 :
return partial__2454.call(this,f,arg1,arg2);
case  4 :
return partial__2455.call(this,f,arg1,arg2,arg3);
default:
return partial__2456.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__2456.cljs$lang$applyTo;
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
var fnil__2468 = (function (f,x){
return (function() {
var G__2472 = null;
var G__2472__2473 = (function (a){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a));
});
var G__2472__2474 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b);
});
var G__2472__2475 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c);
});
var G__2472__2476 = (function() { 
var G__2478__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c,ds);
};
var G__2478 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2478__delegate.call(this, a, b, c, ds);
};
G__2478.cljs$lang$maxFixedArity = 3;
G__2478.cljs$lang$applyTo = (function (arglist__2479){
var a = cljs.core.first(arglist__2479);
var b = cljs.core.first(cljs.core.next(arglist__2479));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2479)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2479)));
return G__2478__delegate.call(this, a, b, c, ds);
});
return G__2478;
})()
;
G__2472 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__2472__2473.call(this,a);
case  2 :
return G__2472__2474.call(this,a,b);
case  3 :
return G__2472__2475.call(this,a,b,c);
default:
return G__2472__2476.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__2472.cljs$lang$maxFixedArity = 3;
G__2472.cljs$lang$applyTo = G__2472__2476.cljs$lang$applyTo;
return G__2472;
})()
});
var fnil__2469 = (function (f,x,y){
return (function() {
var G__2480 = null;
var G__2480__2481 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__2480__2482 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c);
});
var G__2480__2483 = (function() { 
var G__2485__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c,ds);
};
var G__2485 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2485__delegate.call(this, a, b, c, ds);
};
G__2485.cljs$lang$maxFixedArity = 3;
G__2485.cljs$lang$applyTo = (function (arglist__2486){
var a = cljs.core.first(arglist__2486);
var b = cljs.core.first(cljs.core.next(arglist__2486));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2486)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2486)));
return G__2485__delegate.call(this, a, b, c, ds);
});
return G__2485;
})()
;
G__2480 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__2480__2481.call(this,a,b);
case  3 :
return G__2480__2482.call(this,a,b,c);
default:
return G__2480__2483.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__2480.cljs$lang$maxFixedArity = 3;
G__2480.cljs$lang$applyTo = G__2480__2483.cljs$lang$applyTo;
return G__2480;
})()
});
var fnil__2470 = (function (f,x,y,z){
return (function() {
var G__2487 = null;
var G__2487__2488 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__2487__2489 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c));
});
var G__2487__2490 = (function() { 
var G__2492__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c),ds);
};
var G__2492 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2492__delegate.call(this, a, b, c, ds);
};
G__2492.cljs$lang$maxFixedArity = 3;
G__2492.cljs$lang$applyTo = (function (arglist__2493){
var a = cljs.core.first(arglist__2493);
var b = cljs.core.first(cljs.core.next(arglist__2493));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2493)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2493)));
return G__2492__delegate.call(this, a, b, c, ds);
});
return G__2492;
})()
;
G__2487 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__2487__2488.call(this,a,b);
case  3 :
return G__2487__2489.call(this,a,b,c);
default:
return G__2487__2490.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__2487.cljs$lang$maxFixedArity = 3;
G__2487.cljs$lang$applyTo = G__2487__2490.cljs$lang$applyTo;
return G__2487;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__2468.call(this,f,x);
case  3 :
return fnil__2469.call(this,f,x,y);
case  4 :
return fnil__2470.call(this,f,x,y,z);
}
throw('Invalid arity: ' + arguments.length);
};
return fnil;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to 0
* and the first item of coll, followed by applying f to 1 and the second
* item in coll, etc, until coll is exhausted. Thus function f should
* accept 2 arguments, index and item.
*/
cljs.core.map_indexed = (function map_indexed(f,coll){
var mapi__2496 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____2494 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____2494))
{var s__2495 = temp__3726__auto____2494;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__2495)),mpi.call(null,cljs.core.inc.call(null,idx),cljs.core.rest.call(null,s__2495)));
} else
{return null;
}
})));
});

return mapi__2496.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____2497 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____2497))
{var s__2498 = temp__3726__auto____2497;

var x__2499 = f.call(null,cljs.core.first.call(null,s__2498));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__2499)))
{return keep.call(null,f,cljs.core.rest.call(null,s__2498));
} else
{return cljs.core.cons.call(null,x__2499,keep.call(null,f,cljs.core.rest.call(null,s__2498)));
}
} else
{return null;
}
})));
});
/**
* Returns a lazy sequence of the non-nil results of (f index item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep_indexed = (function keep_indexed(f,coll){
var keepi__2509 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____2506 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____2506))
{var s__2507 = temp__3726__auto____2506;

var x__2508 = f.call(null,idx,cljs.core.first.call(null,s__2507));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__2508)))
{return kpi.call(null,cljs.core.inc.call(null,idx),cljs.core.rest.call(null,s__2507));
} else
{return cljs.core.cons.call(null,x__2508,kpi.call(null,cljs.core.inc.call(null,idx),cljs.core.rest.call(null,s__2507)));
}
} else
{return null;
}
})));
});

return keepi__2509.call(null,0,coll);
});
/**
* Takes a set of predicates and returns a function f that returns true if all of its
* composing predicates return a logical true value against all of its arguments, else it returns
* false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical false result against the original predicates.
* @param {...*} var_args
*/
cljs.core.every_pred = (function() {
var every_pred = null;
var every_pred__2554 = (function (p){
return (function() {
var ep1 = null;
var ep1__2559 = (function (){
return true;
});
var ep1__2560 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__2561 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____2516 = p.call(null,x);

if(cljs.core.truth_(and__3574__auto____2516))
{return p.call(null,y);
} else
{return and__3574__auto____2516;
}
})());
});
var ep1__2562 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____2517 = p.call(null,x);

if(cljs.core.truth_(and__3574__auto____2517))
{var and__3574__auto____2518 = p.call(null,y);

if(cljs.core.truth_(and__3574__auto____2518))
{return p.call(null,z);
} else
{return and__3574__auto____2518;
}
} else
{return and__3574__auto____2517;
}
})());
});
var ep1__2563 = (function() { 
var G__2565__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____2519 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3574__auto____2519))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3574__auto____2519;
}
})());
};
var G__2565 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2565__delegate.call(this, x, y, z, args);
};
G__2565.cljs$lang$maxFixedArity = 3;
G__2565.cljs$lang$applyTo = (function (arglist__2566){
var x = cljs.core.first(arglist__2566);
var y = cljs.core.first(cljs.core.next(arglist__2566));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2566)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2566)));
return G__2565__delegate.call(this, x, y, z, args);
});
return G__2565;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__2559.call(this);
case  1 :
return ep1__2560.call(this,x);
case  2 :
return ep1__2561.call(this,x,y);
case  3 :
return ep1__2562.call(this,x,y,z);
default:
return ep1__2563.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__2563.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__2555 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__2567 = (function (){
return true;
});
var ep2__2568 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____2520 = p1.call(null,x);

if(cljs.core.truth_(and__3574__auto____2520))
{return p2.call(null,x);
} else
{return and__3574__auto____2520;
}
})());
});
var ep2__2569 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____2521 = p1.call(null,x);

if(cljs.core.truth_(and__3574__auto____2521))
{var and__3574__auto____2522 = p1.call(null,y);

if(cljs.core.truth_(and__3574__auto____2522))
{var and__3574__auto____2523 = p2.call(null,x);

if(cljs.core.truth_(and__3574__auto____2523))
{return p2.call(null,y);
} else
{return and__3574__auto____2523;
}
} else
{return and__3574__auto____2522;
}
} else
{return and__3574__auto____2521;
}
})());
});
var ep2__2570 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____2524 = p1.call(null,x);

if(cljs.core.truth_(and__3574__auto____2524))
{var and__3574__auto____2525 = p1.call(null,y);

if(cljs.core.truth_(and__3574__auto____2525))
{var and__3574__auto____2526 = p1.call(null,z);

if(cljs.core.truth_(and__3574__auto____2526))
{var and__3574__auto____2527 = p2.call(null,x);

if(cljs.core.truth_(and__3574__auto____2527))
{var and__3574__auto____2528 = p2.call(null,y);

if(cljs.core.truth_(and__3574__auto____2528))
{return p2.call(null,z);
} else
{return and__3574__auto____2528;
}
} else
{return and__3574__auto____2527;
}
} else
{return and__3574__auto____2526;
}
} else
{return and__3574__auto____2525;
}
} else
{return and__3574__auto____2524;
}
})());
});
var ep2__2571 = (function() { 
var G__2573__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____2529 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3574__auto____2529))
{return cljs.core.every_QMARK_.call(null,(function (p1__2500_SHARP_){
var and__3574__auto____2530 = p1.call(null,p1__2500_SHARP_);

if(cljs.core.truth_(and__3574__auto____2530))
{return p2.call(null,p1__2500_SHARP_);
} else
{return and__3574__auto____2530;
}
}),args);
} else
{return and__3574__auto____2529;
}
})());
};
var G__2573 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2573__delegate.call(this, x, y, z, args);
};
G__2573.cljs$lang$maxFixedArity = 3;
G__2573.cljs$lang$applyTo = (function (arglist__2574){
var x = cljs.core.first(arglist__2574);
var y = cljs.core.first(cljs.core.next(arglist__2574));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2574)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2574)));
return G__2573__delegate.call(this, x, y, z, args);
});
return G__2573;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__2567.call(this);
case  1 :
return ep2__2568.call(this,x);
case  2 :
return ep2__2569.call(this,x,y);
case  3 :
return ep2__2570.call(this,x,y,z);
default:
return ep2__2571.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__2571.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__2556 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__2575 = (function (){
return true;
});
var ep3__2576 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____2531 = p1.call(null,x);

if(cljs.core.truth_(and__3574__auto____2531))
{var and__3574__auto____2532 = p2.call(null,x);

if(cljs.core.truth_(and__3574__auto____2532))
{return p3.call(null,x);
} else
{return and__3574__auto____2532;
}
} else
{return and__3574__auto____2531;
}
})());
});
var ep3__2577 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____2533 = p1.call(null,x);

if(cljs.core.truth_(and__3574__auto____2533))
{var and__3574__auto____2534 = p2.call(null,x);

if(cljs.core.truth_(and__3574__auto____2534))
{var and__3574__auto____2535 = p3.call(null,x);

if(cljs.core.truth_(and__3574__auto____2535))
{var and__3574__auto____2536 = p1.call(null,y);

if(cljs.core.truth_(and__3574__auto____2536))
{var and__3574__auto____2537 = p2.call(null,y);

if(cljs.core.truth_(and__3574__auto____2537))
{return p3.call(null,y);
} else
{return and__3574__auto____2537;
}
} else
{return and__3574__auto____2536;
}
} else
{return and__3574__auto____2535;
}
} else
{return and__3574__auto____2534;
}
} else
{return and__3574__auto____2533;
}
})());
});
var ep3__2578 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____2538 = p1.call(null,x);

if(cljs.core.truth_(and__3574__auto____2538))
{var and__3574__auto____2539 = p2.call(null,x);

if(cljs.core.truth_(and__3574__auto____2539))
{var and__3574__auto____2540 = p3.call(null,x);

if(cljs.core.truth_(and__3574__auto____2540))
{var and__3574__auto____2541 = p1.call(null,y);

if(cljs.core.truth_(and__3574__auto____2541))
{var and__3574__auto____2542 = p2.call(null,y);

if(cljs.core.truth_(and__3574__auto____2542))
{var and__3574__auto____2543 = p3.call(null,y);

if(cljs.core.truth_(and__3574__auto____2543))
{var and__3574__auto____2544 = p1.call(null,z);

if(cljs.core.truth_(and__3574__auto____2544))
{var and__3574__auto____2545 = p2.call(null,z);

if(cljs.core.truth_(and__3574__auto____2545))
{return p3.call(null,z);
} else
{return and__3574__auto____2545;
}
} else
{return and__3574__auto____2544;
}
} else
{return and__3574__auto____2543;
}
} else
{return and__3574__auto____2542;
}
} else
{return and__3574__auto____2541;
}
} else
{return and__3574__auto____2540;
}
} else
{return and__3574__auto____2539;
}
} else
{return and__3574__auto____2538;
}
})());
});
var ep3__2579 = (function() { 
var G__2581__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____2546 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3574__auto____2546))
{return cljs.core.every_QMARK_.call(null,(function (p1__2501_SHARP_){
var and__3574__auto____2547 = p1.call(null,p1__2501_SHARP_);

if(cljs.core.truth_(and__3574__auto____2547))
{var and__3574__auto____2548 = p2.call(null,p1__2501_SHARP_);

if(cljs.core.truth_(and__3574__auto____2548))
{return p3.call(null,p1__2501_SHARP_);
} else
{return and__3574__auto____2548;
}
} else
{return and__3574__auto____2547;
}
}),args);
} else
{return and__3574__auto____2546;
}
})());
};
var G__2581 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2581__delegate.call(this, x, y, z, args);
};
G__2581.cljs$lang$maxFixedArity = 3;
G__2581.cljs$lang$applyTo = (function (arglist__2582){
var x = cljs.core.first(arglist__2582);
var y = cljs.core.first(cljs.core.next(arglist__2582));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2582)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2582)));
return G__2581__delegate.call(this, x, y, z, args);
});
return G__2581;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__2575.call(this);
case  1 :
return ep3__2576.call(this,x);
case  2 :
return ep3__2577.call(this,x,y);
case  3 :
return ep3__2578.call(this,x,y,z);
default:
return ep3__2579.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__2579.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__2557 = (function() { 
var G__2583__delegate = function (p1,p2,p3,ps){
var ps__2549 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__2584 = (function (){
return true;
});
var epn__2585 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__2502_SHARP_){
return p1__2502_SHARP_.call(null,x);
}),ps__2549);
});
var epn__2586 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__2503_SHARP_){
var and__3574__auto____2550 = p1__2503_SHARP_.call(null,x);

if(cljs.core.truth_(and__3574__auto____2550))
{return p1__2503_SHARP_.call(null,y);
} else
{return and__3574__auto____2550;
}
}),ps__2549);
});
var epn__2587 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__2504_SHARP_){
var and__3574__auto____2551 = p1__2504_SHARP_.call(null,x);

if(cljs.core.truth_(and__3574__auto____2551))
{var and__3574__auto____2552 = p1__2504_SHARP_.call(null,y);

if(cljs.core.truth_(and__3574__auto____2552))
{return p1__2504_SHARP_.call(null,z);
} else
{return and__3574__auto____2552;
}
} else
{return and__3574__auto____2551;
}
}),ps__2549);
});
var epn__2588 = (function() { 
var G__2590__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____2553 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3574__auto____2553))
{return cljs.core.every_QMARK_.call(null,(function (p1__2505_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__2505_SHARP_,args);
}),ps__2549);
} else
{return and__3574__auto____2553;
}
})());
};
var G__2590 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2590__delegate.call(this, x, y, z, args);
};
G__2590.cljs$lang$maxFixedArity = 3;
G__2590.cljs$lang$applyTo = (function (arglist__2591){
var x = cljs.core.first(arglist__2591);
var y = cljs.core.first(cljs.core.next(arglist__2591));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2591)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2591)));
return G__2590__delegate.call(this, x, y, z, args);
});
return G__2590;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__2584.call(this);
case  1 :
return epn__2585.call(this,x);
case  2 :
return epn__2586.call(this,x,y);
case  3 :
return epn__2587.call(this,x,y,z);
default:
return epn__2588.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__2588.cljs$lang$applyTo;
return epn;
})()
};
var G__2583 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2583__delegate.call(this, p1, p2, p3, ps);
};
G__2583.cljs$lang$maxFixedArity = 3;
G__2583.cljs$lang$applyTo = (function (arglist__2592){
var p1 = cljs.core.first(arglist__2592);
var p2 = cljs.core.first(cljs.core.next(arglist__2592));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2592)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2592)));
return G__2583__delegate.call(this, p1, p2, p3, ps);
});
return G__2583;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__2554.call(this,p1);
case  2 :
return every_pred__2555.call(this,p1,p2);
case  3 :
return every_pred__2556.call(this,p1,p2,p3);
default:
return every_pred__2557.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__2557.cljs$lang$applyTo;
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
var some_fn__2632 = (function (p){
return (function() {
var sp1 = null;
var sp1__2637 = (function (){
return null;
});
var sp1__2638 = (function (x){
return p.call(null,x);
});
var sp1__2639 = (function (x,y){
var or__3576__auto____2594 = p.call(null,x);

if(cljs.core.truth_(or__3576__auto____2594))
{return or__3576__auto____2594;
} else
{return p.call(null,y);
}
});
var sp1__2640 = (function (x,y,z){
var or__3576__auto____2595 = p.call(null,x);

if(cljs.core.truth_(or__3576__auto____2595))
{return or__3576__auto____2595;
} else
{var or__3576__auto____2596 = p.call(null,y);

if(cljs.core.truth_(or__3576__auto____2596))
{return or__3576__auto____2596;
} else
{return p.call(null,z);
}
}
});
var sp1__2641 = (function() { 
var G__2643__delegate = function (x,y,z,args){
var or__3576__auto____2597 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3576__auto____2597))
{return or__3576__auto____2597;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__2643 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2643__delegate.call(this, x, y, z, args);
};
G__2643.cljs$lang$maxFixedArity = 3;
G__2643.cljs$lang$applyTo = (function (arglist__2644){
var x = cljs.core.first(arglist__2644);
var y = cljs.core.first(cljs.core.next(arglist__2644));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2644)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2644)));
return G__2643__delegate.call(this, x, y, z, args);
});
return G__2643;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__2637.call(this);
case  1 :
return sp1__2638.call(this,x);
case  2 :
return sp1__2639.call(this,x,y);
case  3 :
return sp1__2640.call(this,x,y,z);
default:
return sp1__2641.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__2641.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__2633 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__2645 = (function (){
return null;
});
var sp2__2646 = (function (x){
var or__3576__auto____2598 = p1.call(null,x);

if(cljs.core.truth_(or__3576__auto____2598))
{return or__3576__auto____2598;
} else
{return p2.call(null,x);
}
});
var sp2__2647 = (function (x,y){
var or__3576__auto____2599 = p1.call(null,x);

if(cljs.core.truth_(or__3576__auto____2599))
{return or__3576__auto____2599;
} else
{var or__3576__auto____2600 = p1.call(null,y);

if(cljs.core.truth_(or__3576__auto____2600))
{return or__3576__auto____2600;
} else
{var or__3576__auto____2601 = p2.call(null,x);

if(cljs.core.truth_(or__3576__auto____2601))
{return or__3576__auto____2601;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__2648 = (function (x,y,z){
var or__3576__auto____2602 = p1.call(null,x);

if(cljs.core.truth_(or__3576__auto____2602))
{return or__3576__auto____2602;
} else
{var or__3576__auto____2603 = p1.call(null,y);

if(cljs.core.truth_(or__3576__auto____2603))
{return or__3576__auto____2603;
} else
{var or__3576__auto____2604 = p1.call(null,z);

if(cljs.core.truth_(or__3576__auto____2604))
{return or__3576__auto____2604;
} else
{var or__3576__auto____2605 = p2.call(null,x);

if(cljs.core.truth_(or__3576__auto____2605))
{return or__3576__auto____2605;
} else
{var or__3576__auto____2606 = p2.call(null,y);

if(cljs.core.truth_(or__3576__auto____2606))
{return or__3576__auto____2606;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__2649 = (function() { 
var G__2651__delegate = function (x,y,z,args){
var or__3576__auto____2607 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3576__auto____2607))
{return or__3576__auto____2607;
} else
{return cljs.core.some.call(null,(function (p1__2510_SHARP_){
var or__3576__auto____2608 = p1.call(null,p1__2510_SHARP_);

if(cljs.core.truth_(or__3576__auto____2608))
{return or__3576__auto____2608;
} else
{return p2.call(null,p1__2510_SHARP_);
}
}),args);
}
};
var G__2651 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2651__delegate.call(this, x, y, z, args);
};
G__2651.cljs$lang$maxFixedArity = 3;
G__2651.cljs$lang$applyTo = (function (arglist__2652){
var x = cljs.core.first(arglist__2652);
var y = cljs.core.first(cljs.core.next(arglist__2652));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2652)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2652)));
return G__2651__delegate.call(this, x, y, z, args);
});
return G__2651;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__2645.call(this);
case  1 :
return sp2__2646.call(this,x);
case  2 :
return sp2__2647.call(this,x,y);
case  3 :
return sp2__2648.call(this,x,y,z);
default:
return sp2__2649.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__2649.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__2634 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__2653 = (function (){
return null;
});
var sp3__2654 = (function (x){
var or__3576__auto____2609 = p1.call(null,x);

if(cljs.core.truth_(or__3576__auto____2609))
{return or__3576__auto____2609;
} else
{var or__3576__auto____2610 = p2.call(null,x);

if(cljs.core.truth_(or__3576__auto____2610))
{return or__3576__auto____2610;
} else
{return p3.call(null,x);
}
}
});
var sp3__2655 = (function (x,y){
var or__3576__auto____2611 = p1.call(null,x);

if(cljs.core.truth_(or__3576__auto____2611))
{return or__3576__auto____2611;
} else
{var or__3576__auto____2612 = p2.call(null,x);

if(cljs.core.truth_(or__3576__auto____2612))
{return or__3576__auto____2612;
} else
{var or__3576__auto____2613 = p3.call(null,x);

if(cljs.core.truth_(or__3576__auto____2613))
{return or__3576__auto____2613;
} else
{var or__3576__auto____2614 = p1.call(null,y);

if(cljs.core.truth_(or__3576__auto____2614))
{return or__3576__auto____2614;
} else
{var or__3576__auto____2615 = p2.call(null,y);

if(cljs.core.truth_(or__3576__auto____2615))
{return or__3576__auto____2615;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__2656 = (function (x,y,z){
var or__3576__auto____2616 = p1.call(null,x);

if(cljs.core.truth_(or__3576__auto____2616))
{return or__3576__auto____2616;
} else
{var or__3576__auto____2617 = p2.call(null,x);

if(cljs.core.truth_(or__3576__auto____2617))
{return or__3576__auto____2617;
} else
{var or__3576__auto____2618 = p3.call(null,x);

if(cljs.core.truth_(or__3576__auto____2618))
{return or__3576__auto____2618;
} else
{var or__3576__auto____2619 = p1.call(null,y);

if(cljs.core.truth_(or__3576__auto____2619))
{return or__3576__auto____2619;
} else
{var or__3576__auto____2620 = p2.call(null,y);

if(cljs.core.truth_(or__3576__auto____2620))
{return or__3576__auto____2620;
} else
{var or__3576__auto____2621 = p3.call(null,y);

if(cljs.core.truth_(or__3576__auto____2621))
{return or__3576__auto____2621;
} else
{var or__3576__auto____2622 = p1.call(null,z);

if(cljs.core.truth_(or__3576__auto____2622))
{return or__3576__auto____2622;
} else
{var or__3576__auto____2623 = p2.call(null,z);

if(cljs.core.truth_(or__3576__auto____2623))
{return or__3576__auto____2623;
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
var sp3__2657 = (function() { 
var G__2659__delegate = function (x,y,z,args){
var or__3576__auto____2624 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3576__auto____2624))
{return or__3576__auto____2624;
} else
{return cljs.core.some.call(null,(function (p1__2511_SHARP_){
var or__3576__auto____2625 = p1.call(null,p1__2511_SHARP_);

if(cljs.core.truth_(or__3576__auto____2625))
{return or__3576__auto____2625;
} else
{var or__3576__auto____2626 = p2.call(null,p1__2511_SHARP_);

if(cljs.core.truth_(or__3576__auto____2626))
{return or__3576__auto____2626;
} else
{return p3.call(null,p1__2511_SHARP_);
}
}
}),args);
}
};
var G__2659 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2659__delegate.call(this, x, y, z, args);
};
G__2659.cljs$lang$maxFixedArity = 3;
G__2659.cljs$lang$applyTo = (function (arglist__2660){
var x = cljs.core.first(arglist__2660);
var y = cljs.core.first(cljs.core.next(arglist__2660));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2660)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2660)));
return G__2659__delegate.call(this, x, y, z, args);
});
return G__2659;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__2653.call(this);
case  1 :
return sp3__2654.call(this,x);
case  2 :
return sp3__2655.call(this,x,y);
case  3 :
return sp3__2656.call(this,x,y,z);
default:
return sp3__2657.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__2657.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__2635 = (function() { 
var G__2661__delegate = function (p1,p2,p3,ps){
var ps__2627 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__2662 = (function (){
return null;
});
var spn__2663 = (function (x){
return cljs.core.some.call(null,(function (p1__2512_SHARP_){
return p1__2512_SHARP_.call(null,x);
}),ps__2627);
});
var spn__2664 = (function (x,y){
return cljs.core.some.call(null,(function (p1__2513_SHARP_){
var or__3576__auto____2628 = p1__2513_SHARP_.call(null,x);

if(cljs.core.truth_(or__3576__auto____2628))
{return or__3576__auto____2628;
} else
{return p1__2513_SHARP_.call(null,y);
}
}),ps__2627);
});
var spn__2665 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__2514_SHARP_){
var or__3576__auto____2629 = p1__2514_SHARP_.call(null,x);

if(cljs.core.truth_(or__3576__auto____2629))
{return or__3576__auto____2629;
} else
{var or__3576__auto____2630 = p1__2514_SHARP_.call(null,y);

if(cljs.core.truth_(or__3576__auto____2630))
{return or__3576__auto____2630;
} else
{return p1__2514_SHARP_.call(null,z);
}
}
}),ps__2627);
});
var spn__2666 = (function() { 
var G__2668__delegate = function (x,y,z,args){
var or__3576__auto____2631 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3576__auto____2631))
{return or__3576__auto____2631;
} else
{return cljs.core.some.call(null,(function (p1__2515_SHARP_){
return cljs.core.some.call(null,p1__2515_SHARP_,args);
}),ps__2627);
}
};
var G__2668 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2668__delegate.call(this, x, y, z, args);
};
G__2668.cljs$lang$maxFixedArity = 3;
G__2668.cljs$lang$applyTo = (function (arglist__2669){
var x = cljs.core.first(arglist__2669);
var y = cljs.core.first(cljs.core.next(arglist__2669));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2669)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2669)));
return G__2668__delegate.call(this, x, y, z, args);
});
return G__2668;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__2662.call(this);
case  1 :
return spn__2663.call(this,x);
case  2 :
return spn__2664.call(this,x,y);
case  3 :
return spn__2665.call(this,x,y,z);
default:
return spn__2666.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__2666.cljs$lang$applyTo;
return spn;
})()
};
var G__2661 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2661__delegate.call(this, p1, p2, p3, ps);
};
G__2661.cljs$lang$maxFixedArity = 3;
G__2661.cljs$lang$applyTo = (function (arglist__2670){
var p1 = cljs.core.first(arglist__2670);
var p2 = cljs.core.first(cljs.core.next(arglist__2670));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2670)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2670)));
return G__2661__delegate.call(this, p1, p2, p3, ps);
});
return G__2661;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__2632.call(this,p1);
case  2 :
return some_fn__2633.call(this,p1,p2);
case  3 :
return some_fn__2634.call(this,p1,p2,p3);
default:
return some_fn__2635.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__2635.cljs$lang$applyTo;
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
var map__2683 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____2671 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____2671))
{var s__2672 = temp__3726__auto____2671;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__2672)),map.call(null,f,cljs.core.rest.call(null,s__2672)));
} else
{return null;
}
})));
});
var map__2684 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__2673 = cljs.core.seq.call(null,c1);
var s2__2674 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3574__auto____2675 = s1__2673;

if(cljs.core.truth_(and__3574__auto____2675))
{return s2__2674;
} else
{return and__3574__auto____2675;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__2673),cljs.core.first.call(null,s2__2674)),map.call(null,f,cljs.core.rest.call(null,s1__2673),cljs.core.rest.call(null,s2__2674)));
} else
{return null;
}
})));
});
var map__2685 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__2676 = cljs.core.seq.call(null,c1);
var s2__2677 = cljs.core.seq.call(null,c2);
var s3__2678 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3574__auto____2679 = s1__2676;

if(cljs.core.truth_(and__3574__auto____2679))
{var and__3574__auto____2680 = s2__2677;

if(cljs.core.truth_(and__3574__auto____2680))
{return s3__2678;
} else
{return and__3574__auto____2680;
}
} else
{return and__3574__auto____2679;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__2676),cljs.core.first.call(null,s2__2677),cljs.core.first.call(null,s3__2678)),map.call(null,f,cljs.core.rest.call(null,s1__2676),cljs.core.rest.call(null,s2__2677),cljs.core.rest.call(null,s3__2678)));
} else
{return null;
}
})));
});
var map__2686 = (function() { 
var G__2688__delegate = function (f,c1,c2,c3,colls){
var step__2682 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__2681 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__2681)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__2681),step.call(null,map.call(null,cljs.core.rest,ss__2681)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__2593_SHARP_){
return cljs.core.apply.call(null,f,p1__2593_SHARP_);
}),step__2682.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__2688 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__2688__delegate.call(this, f, c1, c2, c3, colls);
};
G__2688.cljs$lang$maxFixedArity = 4;
G__2688.cljs$lang$applyTo = (function (arglist__2689){
var f = cljs.core.first(arglist__2689);
var c1 = cljs.core.first(cljs.core.next(arglist__2689));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2689)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2689))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2689))));
return G__2688__delegate.call(this, f, c1, c2, c3, colls);
});
return G__2688;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__2683.call(this,f,c1);
case  3 :
return map__2684.call(this,f,c1,c2);
case  4 :
return map__2685.call(this,f,c1,c2,c3);
default:
return map__2686.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__2686.cljs$lang$applyTo;
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
{var temp__3726__auto____2690 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____2690))
{var s__2691 = temp__3726__auto____2690;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__2691),take.call(null,cljs.core.dec.call(null,n),cljs.core.rest.call(null,s__2691)));
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
var step__2694 = (function (n,coll){
while(true){
var s__2692 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3574__auto____2693 = cljs.core.pos_QMARK_.call(null,n);

if(cljs.core.truth_(and__3574__auto____2693))
{return s__2692;
} else
{return and__3574__auto____2693;
}
})()))
{{
var G__2695 = cljs.core.dec.call(null,n);
var G__2696 = cljs.core.rest.call(null,s__2692);
n = G__2695;
coll = G__2696;
continue;
}
} else
{return s__2692;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__2694.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__2697 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__2698 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__2697.call(this,n);
case  2 :
return drop_last__2698.call(this,n,s);
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
var s__2700 = cljs.core.seq.call(null,coll);
var lead__2701 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__2701))
{{
var G__2702 = cljs.core.next.call(null,s__2700);
var G__2703 = cljs.core.next.call(null,lead__2701);
s__2700 = G__2702;
lead__2701 = G__2703;
continue;
}
} else
{return s__2700;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__2706 = (function (pred,coll){
while(true){
var s__2704 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3574__auto____2705 = s__2704;

if(cljs.core.truth_(and__3574__auto____2705))
{return pred.call(null,cljs.core.first.call(null,s__2704));
} else
{return and__3574__auto____2705;
}
})()))
{{
var G__2707 = pred;
var G__2708 = cljs.core.rest.call(null,s__2704);
pred = G__2707;
coll = G__2708;
continue;
}
} else
{return s__2704;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__2706.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____2709 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____2709))
{var s__2710 = temp__3726__auto____2709;

return cljs.core.concat.call(null,s__2710,cycle.call(null,s__2710));
} else
{return null;
}
})));
});
/**
* Returns a vector of [(take n coll) (drop n coll)]
*/
cljs.core.split_at = (function split_at(n,coll){
return cljs.core.Vector.fromArray([cljs.core.take.call(null,n,coll),cljs.core.drop.call(null,n,coll)]);
});
/**
* Returns a lazy (infinite!, or length n if supplied) sequence of xs.
*/
cljs.core.repeat = (function() {
var repeat = null;
var repeat__2711 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__2712 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__2711.call(this,n);
case  2 :
return repeat__2712.call(this,n,x);
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
var repeatedly__2714 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__2715 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__2714.call(this,n);
case  2 :
return repeatedly__2715.call(this,n,f);
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
var interleave__2721 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__2717 = cljs.core.seq.call(null,c1);
var s2__2718 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3574__auto____2719 = s1__2717;

if(cljs.core.truth_(and__3574__auto____2719))
{return s2__2718;
} else
{return and__3574__auto____2719;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__2717),cljs.core.cons.call(null,cljs.core.first.call(null,s2__2718),interleave.call(null,cljs.core.rest.call(null,s1__2717),cljs.core.rest.call(null,s2__2718))));
} else
{return null;
}
})));
});
var interleave__2722 = (function() { 
var G__2724__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__2720 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__2720)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__2720),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__2720)));
} else
{return null;
}
})));
};
var G__2724 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2724__delegate.call(this, c1, c2, colls);
};
G__2724.cljs$lang$maxFixedArity = 2;
G__2724.cljs$lang$applyTo = (function (arglist__2725){
var c1 = cljs.core.first(arglist__2725);
var c2 = cljs.core.first(cljs.core.next(arglist__2725));
var colls = cljs.core.rest(cljs.core.next(arglist__2725));
return G__2724__delegate.call(this, c1, c2, colls);
});
return G__2724;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__2721.call(this,c1,c2);
default:
return interleave__2722.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__2722.cljs$lang$applyTo;
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
var cat__2728 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3723__auto____2726 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3723__auto____2726))
{var coll__2727 = temp__3723__auto____2726;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__2727),cat.call(null,cljs.core.rest.call(null,coll__2727),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__2728.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__2729 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__2730 = (function() { 
var G__2732__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__2732 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2732__delegate.call(this, f, coll, colls);
};
G__2732.cljs$lang$maxFixedArity = 2;
G__2732.cljs$lang$applyTo = (function (arglist__2733){
var f = cljs.core.first(arglist__2733);
var coll = cljs.core.first(cljs.core.next(arglist__2733));
var colls = cljs.core.rest(cljs.core.next(arglist__2733));
return G__2732__delegate.call(this, f, coll, colls);
});
return G__2732;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__2729.call(this,f,coll);
default:
return mapcat__2730.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__2730.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____2734 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____2734))
{var s__2735 = temp__3726__auto____2734;

var f__2736 = cljs.core.first.call(null,s__2735);
var r__2737 = cljs.core.rest.call(null,s__2735);

if(cljs.core.truth_(pred.call(null,f__2736)))
{return cljs.core.cons.call(null,f__2736,filter.call(null,pred,r__2737));
} else
{return filter.call(null,pred,r__2737);
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
var walk__2739 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__2739.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__2738_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__2738_SHARP_));
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
var partition__2746 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__2747 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____2740 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____2740))
{var s__2741 = temp__3726__auto____2740;

var p__2742 = cljs.core.take.call(null,n,s__2741);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__2742))))
{return cljs.core.cons.call(null,p__2742,partition.call(null,n,step,cljs.core.drop.call(null,step,s__2741)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__2748 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____2743 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____2743))
{var s__2744 = temp__3726__auto____2743;

var p__2745 = cljs.core.take.call(null,n,s__2744);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__2745))))
{return cljs.core.cons.call(null,p__2745,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__2744)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__2745,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__2746.call(this,n,step);
case  3 :
return partition__2747.call(this,n,step,pad);
case  4 :
return partition__2748.call(this,n,step,pad,coll);
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
var get_in__2754 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__2755 = (function (m,ks,not_found){
var sentinel__2750 = cljs.core.lookup_sentinel;
var m__2751 = m;
var ks__2752 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__2752))
{var m__2753 = cljs.core.get.call(null,m__2751,cljs.core.first.call(null,ks__2752),sentinel__2750);

if(cljs.core.truth_(cljs.core.identical_QMARK_.call(null,sentinel__2750,m__2753)))
{return not_found;
} else
{{
var G__2757 = sentinel__2750;
var G__2758 = m__2753;
var G__2759 = cljs.core.next.call(null,ks__2752);
sentinel__2750 = G__2757;
m__2751 = G__2758;
ks__2752 = G__2759;
continue;
}
}
} else
{return m__2751;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__2754.call(this,m,ks);
case  3 :
return get_in__2755.call(this,m,ks,not_found);
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
cljs.core.assoc_in = (function assoc_in(m,p__2760,v){
var vec__2761__2762 = p__2760;
var k__2763 = cljs.core.nth.call(null,vec__2761__2762,0,null);
var ks__2764 = cljs.core.nthnext.call(null,vec__2761__2762,1);

if(cljs.core.truth_(ks__2764))
{return cljs.core.assoc.call(null,m,k__2763,assoc_in.call(null,cljs.core.get.call(null,m,k__2763),ks__2764,v));
} else
{return cljs.core.assoc.call(null,m,k__2763,v);
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
cljs.core.update_in = (function() { 
var update_in__delegate = function (m,p__2765,f,args){
var vec__2766__2767 = p__2765;
var k__2768 = cljs.core.nth.call(null,vec__2766__2767,0,null);
var ks__2769 = cljs.core.nthnext.call(null,vec__2766__2767,1);

if(cljs.core.truth_(ks__2769))
{return cljs.core.assoc.call(null,m,k__2768,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__2768),ks__2769,f,args));
} else
{return cljs.core.assoc.call(null,m,k__2768,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__2768),args));
}
};
var update_in = function (m,p__2765,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__2765, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__2770){
var m = cljs.core.first(arglist__2770);
var p__2765 = cljs.core.first(cljs.core.next(arglist__2770));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2770)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2770)));
return update_in__delegate.call(this, m, p__2765, f, args);
});
return update_in;
})()
;

/**
* @constructor
*/
cljs.core.Vector = (function (meta,array){
this.meta = meta;
this.array = array;
})
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__2771 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__2772 = this;
var new_array__2773 = cljs.core.aclone.call(null,this__2772.array);

new_array__2773.push(o);
return (new cljs.core.Vector(this__2772.meta,new_array__2773));
});
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__2774 = this;
if(cljs.core.truth_(cljs.core._GT_.call(null,this__2774.array.length,0)))
{var vector_seq__2775 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_(cljs.core._LT_.call(null,i,this__2774.array.length)))
{return cljs.core.cons.call(null,(this__2774.array[i]),vector_seq.call(null,cljs.core.inc.call(null,i)));
} else
{return null;
}
})));
});

return vector_seq__2775.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__2776 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__2777 = this;
var count__2778 = this__2777.array.length;

if(cljs.core.truth_(cljs.core._GT_.call(null,count__2778,0)))
{return (this__2777.array[cljs.core.dec.call(null,count__2778)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__2779 = this;
if(cljs.core.truth_(cljs.core._GT_.call(null,this__2779.array.length,0)))
{var new_array__2780 = cljs.core.aclone.call(null,this__2779.array);

new_array__2780.pop();
return (new cljs.core.Vector(this__2779.meta,new_array__2780));
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__2781 = this;
return (new cljs.core.Vector(meta,this__2781.array));
});
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__2782 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__2782.meta);
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__2796 = null;
var G__2796__2797 = (function (coll,n){
var this__2783 = this;
if(cljs.core.truth_((function (){var and__3574__auto____2784 = cljs.core._LT__EQ_.call(null,0,n);

if(cljs.core.truth_(and__3574__auto____2784))
{return cljs.core._LT_.call(null,n,this__2783.array.length);
} else
{return and__3574__auto____2784;
}
})()))
{return (this__2783.array[n]);
} else
{return null;
}
});
var G__2796__2798 = (function (coll,n,not_found){
var this__2785 = this;
if(cljs.core.truth_((function (){var and__3574__auto____2786 = cljs.core._LT__EQ_.call(null,0,n);

if(cljs.core.truth_(and__3574__auto____2786))
{return cljs.core._LT_.call(null,n,this__2785.array.length);
} else
{return and__3574__auto____2786;
}
})()))
{return (this__2785.array[n]);
} else
{return not_found;
}
});
G__2796 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__2796__2797.call(this,coll,n);
case  3 :
return G__2796__2798.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2796;
})()
;
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__2787 = this;
return this__2787.meta;
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__2800 = null;
var G__2800__2801 = (function (v,f){
var this__2788 = this;
return cljs.core.ci_reduce.call(null,this__2788.array,f);
});
var G__2800__2802 = (function (v,f,start){
var this__2789 = this;
return cljs.core.ci_reduce.call(null,this__2789.array,f,start);
});
G__2800 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__2800__2801.call(this,v,f);
case  3 :
return G__2800__2802.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2800;
})()
;
cljs.core.Vector.prototype.cljs$core$IHash$ = true;
cljs.core.Vector.prototype.cljs$core$IHash$_hash = (function (coll){
var this__2790 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__2791 = this;
return this__2791.array.length;
});
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__2792 = this;
var new_array__2793 = cljs.core.aclone.call(null,this__2792.array);

(new_array__2793[k] = v);
return (new cljs.core.Vector(this__2792.meta,new_array__2793));
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__2804 = null;
var G__2804__2805 = (function (coll,k){
var this__2794 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__2804__2806 = (function (coll,k,not_found){
var this__2795 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__2804 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__2804__2805.call(this,coll,k);
case  3 :
return G__2804__2806.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2804;
})()
;
cljs.core.Vector.EMPTY = (new cljs.core.Vector(null,cljs.core.array.call(null)));
cljs.core.Vector.fromArray = (function (xs){
return (new cljs.core.Vector(null,xs));
});
cljs.core.Vector.prototype.call = (function() {
var G__2808 = null;
var G__2808__2809 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__2808__2810 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__2808 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__2808__2809.call(this,_,k);
case  3 :
return G__2808__2810.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2808;
})()
;
cljs.core.vec = (function vec(coll){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.Vector.EMPTY,coll);
});
/**
* @param {...*} var_args
*/
cljs.core.vector = (function() { 
var vector__delegate = function (args){
return cljs.core.vec.call(null,args);
};
var vector = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return vector__delegate.call(this, args);
};
vector.cljs$lang$maxFixedArity = 0;
vector.cljs$lang$applyTo = (function (arglist__2812){
var args = cljs.core.seq( arglist__2812 );;
return vector__delegate.call(this, args);
});
return vector;
})()
;

/**
* @constructor
*/
cljs.core.NeverEquiv = (function (){
})
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$ = true;
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__2813 = this;
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
var len__2814 = array.length;

var i__2815 = 0;

while(true){
if(cljs.core.truth_(cljs.core._LT_.call(null,i__2815,len__2814)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__2815]))))
{return i__2815;
} else
{{
var G__2816 = cljs.core._PLUS_.call(null,i__2815,incr);
i__2815 = G__2816;
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
var obj_map_contains_key_QMARK___2818 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___2819 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3574__auto____2817 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3574__auto____2817))
{return strobj.hasOwnProperty(k);
} else
{return and__3574__auto____2817;
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
return obj_map_contains_key_QMARK___2818.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___2819.call(this,k,strobj,true_val,false_val);
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
var this__2822 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__2823 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__2824 = this;
if(cljs.core.truth_(cljs.core.pos_QMARK_.call(null,this__2824.keys.length)))
{return cljs.core.map.call(null,(function (p1__2821_SHARP_){
return cljs.core.vector.call(null,p1__2821_SHARP_,(this__2824.strobj[p1__2821_SHARP_]));
}),this__2824.keys);
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__2825 = this;
return (new cljs.core.ObjMap(meta,this__2825.keys,this__2825.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__2826 = this;
if(cljs.core.truth_((function (){var and__3574__auto____2827 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3574__auto____2827))
{return this__2826.strobj.hasOwnProperty(k);
} else
{return and__3574__auto____2827;
}
})()))
{var new_keys__2828 = cljs.core.aclone.call(null,this__2826.keys);
var new_strobj__2829 = goog.object.clone.call(null,this__2826.strobj);

new_keys__2828.splice(cljs.core.scan_array.call(null,1,k,new_keys__2828),1);
cljs.core.js_delete.call(null,new_strobj__2829,k);
return (new cljs.core.ObjMap(this__2826.meta,new_keys__2828,new_strobj__2829));
} else
{return coll;
}
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__2830 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__2830.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__2831 = this;
return this__2831.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IHash$ = true;
cljs.core.ObjMap.prototype.cljs$core$IHash$_hash = (function (coll){
var this__2832 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__2833 = this;
return this__2833.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__2834 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__2835 = goog.object.clone.call(null,this__2834.strobj);
var overwrite_QMARK___2836 = new_strobj__2835.hasOwnProperty(k);

(new_strobj__2835[k] = v);
if(cljs.core.truth_(overwrite_QMARK___2836))
{return (new cljs.core.ObjMap(this__2834.meta,this__2834.keys,new_strobj__2835));
} else
{var new_keys__2837 = cljs.core.aclone.call(null,this__2834.keys);

new_keys__2837.push(k);
return (new cljs.core.ObjMap(this__2834.meta,new_keys__2837,new_strobj__2835));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__2834.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__2838 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__2838.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__2841 = null;
var G__2841__2842 = (function (coll,k){
var this__2839 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__2841__2843 = (function (coll,k,not_found){
var this__2840 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__2840.strobj,(this__2840.strobj[k]),not_found);
});
G__2841 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__2841__2842.call(this,coll,k);
case  3 :
return G__2841__2843.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2841;
})()
;
cljs.core.ObjMap.EMPTY = (new cljs.core.ObjMap(null,cljs.core.array.call(null),cljs.core.js_obj.call(null)));
cljs.core.ObjMap.fromObject = (function (ks,obj){
return (new cljs.core.ObjMap(null,ks,obj));
});
cljs.core.ObjMap.prototype.call = (function() {
var G__2846 = null;
var G__2846__2847 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__2846__2848 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__2846 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__2846__2847.call(this,_,k);
case  3 :
return G__2846__2848.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2846;
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
var this__2850 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__2851 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__2852 = this;
if(cljs.core.truth_(cljs.core.pos_QMARK_.call(null,this__2852.count)))
{var hashes__2853 = cljs.core.js_keys.call(null,this__2852.hashobj);

return cljs.core.mapcat.call(null,(function (p1__2845_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__2852.hashobj[p1__2845_SHARP_])));
}),hashes__2853);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__2854 = this;
return (new cljs.core.HashMap(meta,this__2854.count,this__2854.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__2855 = this;
var h__2856 = cljs.core.hash.call(null,k);
var bucket__2857 = (this__2855.hashobj[h__2856]);
var i__2858 = (cljs.core.truth_(bucket__2857)?cljs.core.scan_array.call(null,2,k,bucket__2857):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__2858)))
{return coll;
} else
{var new_hashobj__2859 = goog.object.clone.call(null,this__2855.hashobj);

if(cljs.core.truth_(cljs.core._GT_.call(null,3,bucket__2857.length)))
{cljs.core.js_delete.call(null,new_hashobj__2859,h__2856);
} else
{var new_bucket__2860 = cljs.core.aclone.call(null,bucket__2857);

new_bucket__2860.splice(i__2858,2);
(new_hashobj__2859[h__2856] = new_bucket__2860);
}
return (new cljs.core.HashMap(this__2855.meta,cljs.core.dec.call(null,this__2855.count),new_hashobj__2859));
}
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__2861 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__2861.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__2862 = this;
return this__2862.meta;
});
cljs.core.HashMap.prototype.cljs$core$IHash$ = true;
cljs.core.HashMap.prototype.cljs$core$IHash$_hash = (function (coll){
var this__2863 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__2864 = this;
return this__2864.count;
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__2865 = this;
var h__2866 = cljs.core.hash.call(null,k);
var bucket__2867 = (this__2865.hashobj[h__2866]);

if(cljs.core.truth_(bucket__2867))
{var new_bucket__2868 = cljs.core.aclone.call(null,bucket__2867);
var new_hashobj__2869 = goog.object.clone.call(null,this__2865.hashobj);

(new_hashobj__2869[h__2866] = new_bucket__2868);
var temp__3723__auto____2870 = cljs.core.scan_array.call(null,2,k,new_bucket__2868);

if(cljs.core.truth_(temp__3723__auto____2870))
{var i__2871 = temp__3723__auto____2870;

(new_bucket__2868[cljs.core.inc.call(null,i__2871)] = v);
return (new cljs.core.HashMap(this__2865.meta,this__2865.count,new_hashobj__2869));
} else
{new_bucket__2868.push(k,v);
return (new cljs.core.HashMap(this__2865.meta,cljs.core.inc.call(null,this__2865.count),new_hashobj__2869));
}
} else
{var new_hashobj__2872 = goog.object.clone.call(null,this__2865.hashobj);

(new_hashobj__2872[h__2866] = cljs.core.array.call(null,k,v));
return (new cljs.core.HashMap(this__2865.meta,cljs.core.inc.call(null,this__2865.count),new_hashobj__2872));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__2873 = this;
var bucket__2874 = (this__2873.hashobj[cljs.core.hash.call(null,k)]);
var i__2875 = (cljs.core.truth_(bucket__2874)?cljs.core.scan_array.call(null,2,k,bucket__2874):null);

if(cljs.core.truth_(i__2875))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__2880 = null;
var G__2880__2881 = (function (coll,k){
var this__2876 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__2880__2882 = (function (coll,k,not_found){
var this__2877 = this;
var bucket__2878 = (this__2877.hashobj[cljs.core.hash.call(null,k)]);
var i__2879 = (cljs.core.truth_(bucket__2878)?cljs.core.scan_array.call(null,2,k,bucket__2878):null);

if(cljs.core.truth_(i__2879))
{return (bucket__2878[cljs.core.inc.call(null,i__2879)]);
} else
{return not_found;
}
});
G__2880 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__2880__2881.call(this,coll,k);
case  3 :
return G__2880__2882.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2880;
})()
;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__2884 = ks.length;

var i__2885 = 0;
var out__2886 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core._LT_.call(null,i__2885,len__2884)))
{{
var G__2887 = cljs.core.inc.call(null,i__2885);
var G__2888 = cljs.core.assoc.call(null,out__2886,(ks[i__2885]),(vs[i__2885]));
i__2885 = G__2887;
out__2886 = G__2888;
continue;
}
} else
{return out__2886;
}
break;
}
});
cljs.core.HashMap.prototype.call = (function() {
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
* keyval => key val
* Returns a new hash map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.hash_map = (function() { 
var hash_map__delegate = function (keyvals){
var in$__2893 = cljs.core.seq.call(null,keyvals);
var out__2894 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__2893))
{{
var G__2895 = cljs.core.nnext.call(null,in$__2893);
var G__2896 = cljs.core.assoc.call(null,out__2894,cljs.core.first.call(null,in$__2893),cljs.core.second.call(null,in$__2893));
in$__2893 = G__2895;
out__2894 = G__2896;
continue;
}
} else
{return out__2894;
}
break;
}
};
var hash_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return hash_map__delegate.call(this, keyvals);
};
hash_map.cljs$lang$maxFixedArity = 0;
hash_map.cljs$lang$applyTo = (function (arglist__2897){
var keyvals = cljs.core.seq( arglist__2897 );;
return hash_map__delegate.call(this, keyvals);
});
return hash_map;
})()
;
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
cljs.core.merge = (function() { 
var merge__delegate = function (maps){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps)))
{return cljs.core.reduce.call(null,(function (p1__2898_SHARP_,p2__2899_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3576__auto____2900 = p1__2898_SHARP_;

if(cljs.core.truth_(or__3576__auto____2900))
{return or__3576__auto____2900;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__2899_SHARP_);
}),maps);
} else
{return null;
}
};
var merge = function (var_args){
var maps = null;
if (goog.isDef(var_args)) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return merge__delegate.call(this, maps);
};
merge.cljs$lang$maxFixedArity = 0;
merge.cljs$lang$applyTo = (function (arglist__2901){
var maps = cljs.core.seq( arglist__2901 );;
return merge__delegate.call(this, maps);
});
return merge;
})()
;
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping(s)
* from the latter (left-to-right) will be combined with the mapping in
* the result by calling (f val-in-result val-in-latter).
* @param {...*} var_args
*/
cljs.core.merge_with = (function() { 
var merge_with__delegate = function (f,maps){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps)))
{var merge_entry__2904 = (function (m,e){
var k__2902 = cljs.core.first.call(null,e);
var v__2903 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__2902)))
{return cljs.core.assoc.call(null,m,k__2902,f.call(null,cljs.core.get.call(null,m,k__2902),v__2903));
} else
{return cljs.core.assoc.call(null,m,k__2902,v__2903);
}
});
var merge2__2906 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__2904,(function (){var or__3576__auto____2905 = m1;

if(cljs.core.truth_(or__3576__auto____2905))
{return or__3576__auto____2905;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__2906,maps);
} else
{return null;
}
};
var merge_with = function (f,var_args){
var maps = null;
if (goog.isDef(var_args)) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return merge_with__delegate.call(this, f, maps);
};
merge_with.cljs$lang$maxFixedArity = 1;
merge_with.cljs$lang$applyTo = (function (arglist__2907){
var f = cljs.core.first(arglist__2907);
var maps = cljs.core.rest(arglist__2907);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__2909 = cljs.core.ObjMap.fromObject([],{});
var keys__2910 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__2910))
{var key__2911 = cljs.core.first.call(null,keys__2910);
var entry__2912 = cljs.core.get.call(null,map,key__2911);

{
var G__2913 = (cljs.core.truth_(entry__2912)?cljs.core.assoc.call(null,ret__2909,key__2911,entry__2912):ret__2909);
var G__2914 = cljs.core.next.call(null,keys__2910);
ret__2909 = G__2913;
keys__2910 = G__2914;
continue;
}
} else
{return ret__2909;
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
var this__2915 = this;
return (new cljs.core.Set(this__2915.meta,cljs.core.dissoc.call(null,this__2915.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__2916 = this;
var and__3574__auto____2917 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3574__auto____2917))
{var and__3574__auto____2918 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3574__auto____2918))
{return cljs.core.every_QMARK_.call(null,(function (p1__2908_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__2908_SHARP_);
}),other);
} else
{return and__3574__auto____2918;
}
} else
{return and__3574__auto____2917;
}
});
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__2919 = this;
return (new cljs.core.Set(this__2919.meta,cljs.core.assoc.call(null,this__2919.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__2920 = this;
return cljs.core.keys.call(null,this__2920.hash_map);
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__2921 = this;
return (new cljs.core.Set(meta,this__2921.hash_map));
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__2922 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__2922.meta);
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__2923 = this;
return this__2923.meta;
});
cljs.core.Set.prototype.cljs$core$IHash$ = true;
cljs.core.Set.prototype.cljs$core$IHash$_hash = (function (coll){
var this__2924 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__2925 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__2928 = null;
var G__2928__2929 = (function (coll,v){
var this__2926 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__2928__2930 = (function (coll,v,not_found){
var this__2927 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__2927.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__2928 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__2928__2929.call(this,coll,v);
case  3 :
return G__2928__2930.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2928;
})()
;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
cljs.core.Set.prototype.call = (function() {
var G__2932 = null;
var G__2932__2933 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__2932__2934 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__2932 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__2932__2933.call(this,_,k);
case  3 :
return G__2932__2934.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2932;
})()
;
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__2937 = cljs.core.seq.call(null,coll);
var out__2938 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__2937))))
{{
var G__2939 = cljs.core.rest.call(null,in$__2937);
var G__2940 = cljs.core.conj.call(null,out__2938,cljs.core.first.call(null,in$__2937));
in$__2937 = G__2939;
out__2938 = G__2940;
continue;
}
} else
{return out__2938;
}
break;
}
});
/**
* Given a map of replacement pairs and a vector/collection, returns a
* vector/seq with any elements = a key in smap replaced with the
* corresponding val in smap
*/
cljs.core.replace = (function replace(smap,coll){
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,coll)))
{var n__2941 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3723__auto____2942 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3723__auto____2942))
{var e__2943 = temp__3723__auto____2942;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__2943));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__2941,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__2936_SHARP_){
var temp__3723__auto____2944 = cljs.core.find.call(null,smap,p1__2936_SHARP_);

if(cljs.core.truth_(temp__3723__auto____2944))
{var e__2945 = temp__3723__auto____2944;

return cljs.core.second.call(null,e__2945);
} else
{return p1__2936_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__2953 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__2946,seen){
while(true){
var vec__2947__2948 = p__2946;
var f__2949 = cljs.core.nth.call(null,vec__2947__2948,0,null);
var xs__2950 = vec__2947__2948;

var temp__3726__auto____2951 = cljs.core.seq.call(null,xs__2950);

if(cljs.core.truth_(temp__3726__auto____2951))
{var s__2952 = temp__3726__auto____2951;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__2949)))
{{
var G__2954 = cljs.core.rest.call(null,s__2952);
var G__2955 = seen;
p__2946 = G__2954;
seen = G__2955;
continue;
}
} else
{return cljs.core.cons.call(null,f__2949,step.call(null,cljs.core.rest.call(null,s__2952),cljs.core.conj.call(null,seen,f__2949)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__2953.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__2956 = cljs.core.Vector.fromArray([]);
var s__2957 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__2957)))
{{
var G__2958 = cljs.core.conj.call(null,ret__2956,cljs.core.first.call(null,s__2957));
var G__2959 = cljs.core.next.call(null,s__2957);
ret__2956 = G__2958;
s__2957 = G__2959;
continue;
}
} else
{return cljs.core.seq.call(null,ret__2956);
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
{if(cljs.core.truth_((function (){var or__3576__auto____2960 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3576__auto____2960))
{return or__3576__auto____2960;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__2961 = x.lastIndexOf("/");

if(cljs.core.truth_(cljs.core._LT_.call(null,i__2961,0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,cljs.core.inc.call(null,i__2961));
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
if(cljs.core.truth_((function (){var or__3576__auto____2962 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3576__auto____2962))
{return or__3576__auto____2962;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__2963 = x.lastIndexOf("/");

if(cljs.core.truth_(cljs.core._GT_.call(null,i__2963,-1)))
{return cljs.core.subs.call(null,x,2,i__2963);
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
var map__2966 = cljs.core.ObjMap.fromObject([],{});
var ks__2967 = cljs.core.seq.call(null,keys);
var vs__2968 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3574__auto____2969 = ks__2967;

if(cljs.core.truth_(and__3574__auto____2969))
{return vs__2968;
} else
{return and__3574__auto____2969;
}
})()))
{{
var G__2970 = cljs.core.assoc.call(null,map__2966,cljs.core.first.call(null,ks__2967),cljs.core.first.call(null,vs__2968));
var G__2971 = cljs.core.next.call(null,ks__2967);
var G__2972 = cljs.core.next.call(null,vs__2968);
map__2966 = G__2970;
ks__2967 = G__2971;
vs__2968 = G__2972;
continue;
}
} else
{return map__2966;
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
var max_key__2975 = (function (k,x){
return x;
});
var max_key__2976 = (function (k,x,y){
if(cljs.core.truth_(cljs.core._GT_.call(null,k.call(null,x),k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__2977 = (function() { 
var G__2979__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__2964_SHARP_,p2__2965_SHARP_){
return max_key.call(null,k,p1__2964_SHARP_,p2__2965_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__2979 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2979__delegate.call(this, k, x, y, more);
};
G__2979.cljs$lang$maxFixedArity = 3;
G__2979.cljs$lang$applyTo = (function (arglist__2980){
var k = cljs.core.first(arglist__2980);
var x = cljs.core.first(cljs.core.next(arglist__2980));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2980)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2980)));
return G__2979__delegate.call(this, k, x, y, more);
});
return G__2979;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__2975.call(this,k,x);
case  3 :
return max_key__2976.call(this,k,x,y);
default:
return max_key__2977.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__2977.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__2981 = (function (k,x){
return x;
});
var min_key__2982 = (function (k,x,y){
if(cljs.core.truth_(cljs.core._LT_.call(null,k.call(null,x),k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__2983 = (function() { 
var G__2985__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__2973_SHARP_,p2__2974_SHARP_){
return min_key.call(null,k,p1__2973_SHARP_,p2__2974_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__2985 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2985__delegate.call(this, k, x, y, more);
};
G__2985.cljs$lang$maxFixedArity = 3;
G__2985.cljs$lang$applyTo = (function (arglist__2986){
var k = cljs.core.first(arglist__2986);
var x = cljs.core.first(cljs.core.next(arglist__2986));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2986)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2986)));
return G__2985__delegate.call(this, k, x, y, more);
});
return G__2985;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__2981.call(this,k,x);
case  3 :
return min_key__2982.call(this,k,x,y);
default:
return min_key__2983.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__2983.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__2989 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__2990 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____2987 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____2987))
{var s__2988 = temp__3726__auto____2987;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__2988),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__2988)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__2989.call(this,n,step);
case  3 :
return partition_all__2990.call(this,n,step,coll);
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
var temp__3726__auto____2992 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____2992))
{var s__2993 = temp__3726__auto____2992;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__2993))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__2993),take_while.call(null,pred,cljs.core.rest.call(null,s__2993)));
} else
{return null;
}
} else
{return null;
}
})));
});
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1, and end
* to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__2994 = (function (){
return cljs.core.iterate.call(null,cljs.core.inc,0);
});
var range__2995 = (function (end){
return range.call(null,0,end,1);
});
var range__2996 = (function (start,end){
return range.call(null,start,end,1);
});
var range__2997 = (function (start,end,step){
return cljs.core.take_while.call(null,(function (n){
return cljs.core._LT_.call(null,n,end);
}),cljs.core.iterate.call(null,(function (x){
return cljs.core._PLUS_.call(null,x,step);
}),start));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__2994.call(this);
case  1 :
return range__2995.call(this,start);
case  2 :
return range__2996.call(this,start,end);
case  3 :
return range__2997.call(this,start,end,step);
}
throw('Invalid arity: ' + arguments.length);
};
return range;
})()
;
/**
* Returns a lazy seq of every nth item in coll.
*/
cljs.core.take_nth = (function take_nth(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____2999 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____2999))
{var s__3000 = temp__3726__auto____2999;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__3000),take_nth.call(null,n,cljs.core.drop.call(null,n,s__3000)));
} else
{return null;
}
})));
});
/**
* Returns a vector of [(take-while pred coll) (drop-while pred coll)]
*/
cljs.core.split_with = (function split_with(pred,coll){
return cljs.core.Vector.fromArray([cljs.core.take_while.call(null,pred,coll),cljs.core.drop_while.call(null,pred,coll)]);
});
/**
* Applies f to each value in coll, splitting it each time f returns
* a new value.  Returns a lazy seq of partitions.
*/
cljs.core.partition_by = (function partition_by(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____3002 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____3002))
{var s__3003 = temp__3726__auto____3002;

var fst__3004 = cljs.core.first.call(null,s__3003);
var fv__3005 = f.call(null,fst__3004);
var run__3006 = cljs.core.cons.call(null,fst__3004,cljs.core.take_while.call(null,(function (p1__3001_SHARP_){
return cljs.core._EQ_.call(null,fv__3005,f.call(null,p1__3001_SHARP_));
}),cljs.core.next.call(null,s__3003)));

return cljs.core.cons.call(null,run__3006,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__3006),s__3003))));
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
var reductions__3021 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3723__auto____3017 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3723__auto____3017))
{var s__3018 = temp__3723__auto____3017;

return reductions.call(null,f,cljs.core.first.call(null,s__3018),cljs.core.rest.call(null,s__3018));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__3022 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____3019 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____3019))
{var s__3020 = temp__3726__auto____3019;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__3020)),cljs.core.rest.call(null,s__3020));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__3021.call(this,f,init);
case  3 :
return reductions__3022.call(this,f,init,coll);
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
var juxt__3025 = (function (f){
return (function() {
var G__3030 = null;
var G__3030__3031 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__3030__3032 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__3030__3033 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__3030__3034 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__3030__3035 = (function() { 
var G__3037__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__3037 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3037__delegate.call(this, x, y, z, args);
};
G__3037.cljs$lang$maxFixedArity = 3;
G__3037.cljs$lang$applyTo = (function (arglist__3038){
var x = cljs.core.first(arglist__3038);
var y = cljs.core.first(cljs.core.next(arglist__3038));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3038)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3038)));
return G__3037__delegate.call(this, x, y, z, args);
});
return G__3037;
})()
;
G__3030 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3030__3031.call(this);
case  1 :
return G__3030__3032.call(this,x);
case  2 :
return G__3030__3033.call(this,x,y);
case  3 :
return G__3030__3034.call(this,x,y,z);
default:
return G__3030__3035.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3030.cljs$lang$maxFixedArity = 3;
G__3030.cljs$lang$applyTo = G__3030__3035.cljs$lang$applyTo;
return G__3030;
})()
});
var juxt__3026 = (function (f,g){
return (function() {
var G__3039 = null;
var G__3039__3040 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__3039__3041 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__3039__3042 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__3039__3043 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__3039__3044 = (function() { 
var G__3046__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__3046 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3046__delegate.call(this, x, y, z, args);
};
G__3046.cljs$lang$maxFixedArity = 3;
G__3046.cljs$lang$applyTo = (function (arglist__3047){
var x = cljs.core.first(arglist__3047);
var y = cljs.core.first(cljs.core.next(arglist__3047));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3047)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3047)));
return G__3046__delegate.call(this, x, y, z, args);
});
return G__3046;
})()
;
G__3039 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3039__3040.call(this);
case  1 :
return G__3039__3041.call(this,x);
case  2 :
return G__3039__3042.call(this,x,y);
case  3 :
return G__3039__3043.call(this,x,y,z);
default:
return G__3039__3044.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3039.cljs$lang$maxFixedArity = 3;
G__3039.cljs$lang$applyTo = G__3039__3044.cljs$lang$applyTo;
return G__3039;
})()
});
var juxt__3027 = (function (f,g,h){
return (function() {
var G__3048 = null;
var G__3048__3049 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__3048__3050 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__3048__3051 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__3048__3052 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__3048__3053 = (function() { 
var G__3055__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__3055 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3055__delegate.call(this, x, y, z, args);
};
G__3055.cljs$lang$maxFixedArity = 3;
G__3055.cljs$lang$applyTo = (function (arglist__3056){
var x = cljs.core.first(arglist__3056);
var y = cljs.core.first(cljs.core.next(arglist__3056));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3056)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3056)));
return G__3055__delegate.call(this, x, y, z, args);
});
return G__3055;
})()
;
G__3048 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3048__3049.call(this);
case  1 :
return G__3048__3050.call(this,x);
case  2 :
return G__3048__3051.call(this,x,y);
case  3 :
return G__3048__3052.call(this,x,y,z);
default:
return G__3048__3053.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3048.cljs$lang$maxFixedArity = 3;
G__3048.cljs$lang$applyTo = G__3048__3053.cljs$lang$applyTo;
return G__3048;
})()
});
var juxt__3028 = (function() { 
var G__3057__delegate = function (f,g,h,fs){
var fs__3024 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__3058 = null;
var G__3058__3059 = (function (){
return cljs.core.reduce.call(null,(function (p1__3007_SHARP_,p2__3008_SHARP_){
return cljs.core.conj.call(null,p1__3007_SHARP_,p2__3008_SHARP_.call(null));
}),cljs.core.Vector.fromArray([]),fs__3024);
});
var G__3058__3060 = (function (x){
return cljs.core.reduce.call(null,(function (p1__3009_SHARP_,p2__3010_SHARP_){
return cljs.core.conj.call(null,p1__3009_SHARP_,p2__3010_SHARP_.call(null,x));
}),cljs.core.Vector.fromArray([]),fs__3024);
});
var G__3058__3061 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__3011_SHARP_,p2__3012_SHARP_){
return cljs.core.conj.call(null,p1__3011_SHARP_,p2__3012_SHARP_.call(null,x,y));
}),cljs.core.Vector.fromArray([]),fs__3024);
});
var G__3058__3062 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__3013_SHARP_,p2__3014_SHARP_){
return cljs.core.conj.call(null,p1__3013_SHARP_,p2__3014_SHARP_.call(null,x,y,z));
}),cljs.core.Vector.fromArray([]),fs__3024);
});
var G__3058__3063 = (function() { 
var G__3065__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__3015_SHARP_,p2__3016_SHARP_){
return cljs.core.conj.call(null,p1__3015_SHARP_,cljs.core.apply.call(null,p2__3016_SHARP_,x,y,z,args));
}),cljs.core.Vector.fromArray([]),fs__3024);
};
var G__3065 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3065__delegate.call(this, x, y, z, args);
};
G__3065.cljs$lang$maxFixedArity = 3;
G__3065.cljs$lang$applyTo = (function (arglist__3066){
var x = cljs.core.first(arglist__3066);
var y = cljs.core.first(cljs.core.next(arglist__3066));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3066)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3066)));
return G__3065__delegate.call(this, x, y, z, args);
});
return G__3065;
})()
;
G__3058 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3058__3059.call(this);
case  1 :
return G__3058__3060.call(this,x);
case  2 :
return G__3058__3061.call(this,x,y);
case  3 :
return G__3058__3062.call(this,x,y,z);
default:
return G__3058__3063.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3058.cljs$lang$maxFixedArity = 3;
G__3058.cljs$lang$applyTo = G__3058__3063.cljs$lang$applyTo;
return G__3058;
})()
};
var G__3057 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3057__delegate.call(this, f, g, h, fs);
};
G__3057.cljs$lang$maxFixedArity = 3;
G__3057.cljs$lang$applyTo = (function (arglist__3067){
var f = cljs.core.first(arglist__3067);
var g = cljs.core.first(cljs.core.next(arglist__3067));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3067)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3067)));
return G__3057__delegate.call(this, f, g, h, fs);
});
return G__3057;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__3025.call(this,f);
case  2 :
return juxt__3026.call(this,f,g);
case  3 :
return juxt__3027.call(this,f,g,h);
default:
return juxt__3028.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__3028.cljs$lang$applyTo;
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
var dorun__3069 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__3072 = cljs.core.next.call(null,coll);
coll = G__3072;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__3070 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3574__auto____3068 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3574__auto____3068))
{return cljs.core.pos_QMARK_.call(null,n);
} else
{return and__3574__auto____3068;
}
})()))
{{
var G__3073 = cljs.core.dec.call(null,n);
var G__3074 = cljs.core.next.call(null,coll);
n = G__3073;
coll = G__3074;
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
return dorun__3069.call(this,n);
case  2 :
return dorun__3070.call(this,n,coll);
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
var doall__3075 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__3076 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__3075.call(this,n);
case  2 :
return doall__3076.call(this,n,coll);
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
var matches__3078 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__3078),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__3078),1)))
{return cljs.core.first.call(null,matches__3078);
} else
{return cljs.core.vec.call(null,matches__3078);
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
var matches__3079 = re.exec(s);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,matches__3079)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__3079),1)))
{return cljs.core.first.call(null,matches__3079);
} else
{return cljs.core.vec.call(null,matches__3079);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__3080 = cljs.core.re_find.call(null,re,s);
var match_idx__3081 = s.search(re);
var match_str__3082 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__3080))?cljs.core.first.call(null,match_data__3080):match_data__3080);
var post_match__3083 = cljs.core.subs.call(null,s,cljs.core._PLUS_.call(null,match_idx__3081,cljs.core.count.call(null,match_str__3082)));

if(cljs.core.truth_(match_data__3080))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__3080,re_seq.call(null,re,post_match__3083));
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
return cljs.core.concat.call(null,cljs.core.Vector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.Vector.fromArray([sep]),cljs.core.map.call(null,(function (p1__3084_SHARP_){
return print_one.call(null,p1__3084_SHARP_,opts);
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3574__auto____3085 = cljs.core.get.call(null,opts,"﷐'meta");

if(cljs.core.truth_(and__3574__auto____3085))
{var and__3574__auto____3088 = (function (){var x__105__auto____3086 = obj;

if(cljs.core.truth_((function (){var and__3574__auto____3087 = x__105__auto____3086;

if(cljs.core.truth_(and__3574__auto____3087))
{return x__105__auto____3086.cljs$core$IMeta$;
} else
{return and__3574__auto____3087;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__105__auto____3086);
}
})();

if(cljs.core.truth_(and__3574__auto____3088))
{return cljs.core.meta.call(null,obj);
} else
{return and__3574__auto____3088;
}
} else
{return and__3574__auto____3085;
}
})())?cljs.core.concat.call(null,cljs.core.Vector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.Vector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__105__auto____3089 = obj;

if(cljs.core.truth_((function (){var and__3574__auto____3090 = x__105__auto____3089;

if(cljs.core.truth_(and__3574__auto____3090))
{return x__105__auto____3089.cljs$core$IPrintable$;
} else
{return and__3574__auto____3090;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__105__auto____3089);
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
var first_obj__3091 = cljs.core.first.call(null,objs);
var sb__3092 = (new goog.string.StringBuffer());

var G__3093__3094 = cljs.core.seq.call(null,objs);

while(true){
if(cljs.core.truth_(G__3093__3094))
{var obj__3095 = cljs.core.first.call(null,G__3093__3094);

if(cljs.core.truth_(cljs.core.identical_QMARK_.call(null,obj__3095,first_obj__3091)))
{} else
{sb__3092.append(" ");
}
var G__3096__3097 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__3095,opts));

while(true){
if(cljs.core.truth_(G__3096__3097))
{var string__3098 = cljs.core.first.call(null,G__3096__3097);

sb__3092.append(string__3098);
{
var G__3099 = cljs.core.next.call(null,G__3096__3097);
G__3096__3097 = G__3099;
continue;
}
} else
{}
break;
}
{
var G__3100 = cljs.core.next.call(null,G__3093__3094);
G__3093__3094 = G__3100;
continue;
}
} else
{}
break;
}
return cljs.core.str.call(null,sb__3092);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__3101 = cljs.core.first.call(null,objs);

var G__3102__3103 = cljs.core.seq.call(null,objs);

while(true){
if(cljs.core.truth_(G__3102__3103))
{var obj__3104 = cljs.core.first.call(null,G__3102__3103);

if(cljs.core.truth_(cljs.core.identical_QMARK_.call(null,obj__3104,first_obj__3101)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__3105__3106 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__3104,opts));

while(true){
if(cljs.core.truth_(G__3105__3106))
{var string__3107 = cljs.core.first.call(null,G__3105__3106);

cljs.core.string_print.call(null,string__3107);
{
var G__3108 = cljs.core.next.call(null,G__3105__3106);
G__3105__3106 = G__3108;
continue;
}
} else
{}
break;
}
{
var G__3109 = cljs.core.next.call(null,G__3102__3103);
G__3102__3103 = G__3109;
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
cljs.core.pr_str = (function() { 
var pr_str__delegate = function (objs){
return cljs.core.pr_str_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var pr_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr_str__delegate.call(this, objs);
};
pr_str.cljs$lang$maxFixedArity = 0;
pr_str.cljs$lang$applyTo = (function (arglist__3110){
var objs = cljs.core.seq( arglist__3110 );;
return pr_str__delegate.call(this, objs);
});
return pr_str;
})()
;
/**
* Prints the object(s) using string-print.  Prints the
* object(s), separated by spaces if there is more than one.
* By default, pr and prn print in a way that objects can be
* read by the reader
* @param {...*} var_args
*/
cljs.core.pr = (function() { 
var pr__delegate = function (objs){
return cljs.core.pr_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var pr = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr__delegate.call(this, objs);
};
pr.cljs$lang$maxFixedArity = 0;
pr.cljs$lang$applyTo = (function (arglist__3111){
var objs = cljs.core.seq( arglist__3111 );;
return pr__delegate.call(this, objs);
});
return pr;
})()
;
/**
* Prints the object(s) using string-print.
* print and println produce output for human consumption.
* @param {...*} var_args
*/
cljs.core.print = (function() { 
var cljs_core_print__delegate = function (objs){
return cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"﷐'readably",false));
};
var cljs_core_print = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return cljs_core_print__delegate.call(this, objs);
};
cljs_core_print.cljs$lang$maxFixedArity = 0;
cljs_core_print.cljs$lang$applyTo = (function (arglist__3112){
var objs = cljs.core.seq( arglist__3112 );;
return cljs_core_print__delegate.call(this, objs);
});
return cljs_core_print;
})()
;
/**
* Same as print followed by (newline)
* @param {...*} var_args
*/
cljs.core.println = (function() { 
var println__delegate = function (objs){
cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"﷐'readably",false));
return cljs.core.newline.call(null,cljs.core.pr_opts.call(null));
};
var println = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return println__delegate.call(this, objs);
};
println.cljs$lang$maxFixedArity = 0;
println.cljs$lang$applyTo = (function (arglist__3113){
var objs = cljs.core.seq( arglist__3113 );;
return println__delegate.call(this, objs);
});
return println;
})()
;
/**
* Same as pr followed by (newline).
* @param {...*} var_args
*/
cljs.core.prn = (function() { 
var prn__delegate = function (objs){
cljs.core.pr_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
return cljs.core.newline.call(null,cljs.core.pr_opts.call(null));
};
var prn = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return prn__delegate.call(this, objs);
};
prn.cljs$lang$maxFixedArity = 0;
prn.cljs$lang$applyTo = (function (arglist__3114){
var objs = cljs.core.seq( arglist__3114 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__3115 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__3115,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3726__auto____3116 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3726__auto____3116))
{var nspc__3117 = temp__3726__auto____3116;

return cljs.core.str.call(null,nspc__3117,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3726__auto____3118 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3726__auto____3118))
{var nspc__3119 = temp__3726__auto____3118;

return cljs.core.str.call(null,nspc__3119,"/");
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
var pr_pair__3120 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__3120,"{",", ","}",opts,coll);
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
var this__3121 = this;
return cljs.core.concat.call(null,cljs.core.Vector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__3121.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__3122 = this;
return this__3122.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__3123 = this;
return this__3123.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__3124 = this;
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
var atom__3131 = (function (x){
return (new cljs.core.Atom(x,null,null));
});
var atom__3132 = (function() { 
var G__3134__delegate = function (x,p__3125){
var map__3126__3127 = p__3125;
var map__3126__3128 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__3126__3127))?cljs.core.apply.call(null,cljs.core.hash_map,map__3126__3127):map__3126__3127);
var validator__3129 = cljs.core.get.call(null,map__3126__3128,"﷐'validator");
var meta__3130 = cljs.core.get.call(null,map__3126__3128,"﷐'meta");

return (new cljs.core.Atom(x,meta__3130,validator__3129));
};
var G__3134 = function (x,var_args){
var p__3125 = null;
if (goog.isDef(var_args)) {
  p__3125 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__3134__delegate.call(this, x, p__3125);
};
G__3134.cljs$lang$maxFixedArity = 1;
G__3134.cljs$lang$applyTo = (function (arglist__3135){
var x = cljs.core.first(arglist__3135);
var p__3125 = cljs.core.rest(arglist__3135);
return G__3134__delegate.call(this, x, p__3125);
});
return G__3134;
})()
;
atom = function(x,var_args){
var p__3125 = var_args;
switch(arguments.length){
case  1 :
return atom__3131.call(this,x);
default:
return atom__3132.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__3132.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,newval){
var temp__3726__auto____3136 = a.validator;

if(cljs.core.truth_(temp__3726__auto____3136))
{var v__3137 = temp__3726__auto____3136;

if(cljs.core.truth_(v__3137.call(null,newval)))
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
var swap_BANG___3138 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___3139 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___3140 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___3141 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___3142 = (function() { 
var G__3144__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__3144 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__3144__delegate.call(this, a, f, x, y, z, more);
};
G__3144.cljs$lang$maxFixedArity = 5;
G__3144.cljs$lang$applyTo = (function (arglist__3145){
var a = cljs.core.first(arglist__3145);
var f = cljs.core.first(cljs.core.next(arglist__3145));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3145)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3145))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3145)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3145)))));
return G__3144__delegate.call(this, a, f, x, y, z, more);
});
return G__3144;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___3138.call(this,a,f);
case  3 :
return swap_BANG___3139.call(this,a,f,x);
case  4 :
return swap_BANG___3140.call(this,a,f,x,y);
case  5 :
return swap_BANG___3141.call(this,a,f,x,y,z);
default:
return swap_BANG___3142.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___3142.cljs$lang$applyTo;
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
cljs.core.alter_meta_BANG_ = (function() { 
var alter_meta_BANG___delegate = function (iref,f,args){
return iref.meta = cljs.core.apply.call(null,f,iref.meta,args);
};
var alter_meta_BANG_ = function (iref,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return alter_meta_BANG___delegate.call(this, iref, f, args);
};
alter_meta_BANG_.cljs$lang$maxFixedArity = 2;
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__3146){
var iref = cljs.core.first(arglist__3146);
var f = cljs.core.first(cljs.core.next(arglist__3146));
var args = cljs.core.rest(cljs.core.next(arglist__3146));
return alter_meta_BANG___delegate.call(this, iref, f, args);
});
return alter_meta_BANG_;
})()
;
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
var gensym__3147 = (function (){
return gensym.call(null,"G__");
});
var gensym__3148 = (function (prefix_string){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.gensym_counter)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__3147.call(this);
case  1 :
return gensym__3148.call(this,prefix_string);
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
var this__3150 = this;
return cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,cljs.core.deref.call(null,this__3150.state)));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__3151 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,this__3151.state)))
{} else
{cljs.core.swap_BANG_.call(null,this__3151.state,this__3151.f);
}
return cljs.core.deref.call(null,this__3151.state);
});
/**
* Takes a body of expressions and yields a Delay object that will
* invoke the body only the first time it is forced (with force or deref/@), and
* will cache the result and return it on all subsequent force
* calls.
* @param {...*} var_args
*/
cljs.core.delay = (function() { 
var delay__delegate = function (body){
return (new cljs.core.Delay((function (){
return cljs.core.apply.call(null,cljs.core.identity,body);
}),cljs.core.atom.call(null,null)));
};
var delay = function (var_args){
var body = null;
if (goog.isDef(var_args)) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return delay__delegate.call(this, body);
};
delay.cljs$lang$maxFixedArity = 0;
delay.cljs$lang$applyTo = (function (arglist__3152){
var body = cljs.core.seq( arglist__3152 );;
return delay__delegate.call(this, body);
});
return delay;
})()
;
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
cljs.core.js__GT_clj = (function() { 
var js__GT_clj__delegate = function (x,options){
var map__3153__3154 = options;
var map__3153__3155 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__3153__3154))?cljs.core.apply.call(null,cljs.core.hash_map,map__3153__3154):map__3153__3154);
var keywordize_keys__3156 = cljs.core.get.call(null,map__3153__3155,"﷐'keywordize-keys");
var keyfn__3157 = (cljs.core.truth_(keywordize_keys__3156)?cljs.core.keyword:cljs.core.str);
var f__3163 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__159__auto____3162 = (function iter__3158(s__3159){
return (new cljs.core.LazySeq(null,false,(function (){
var s__3159__3160 = s__3159;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__3159__3160)))
{var k__3161 = cljs.core.first.call(null,s__3159__3160);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([keyfn__3157.call(null,k__3161),thisfn.call(null,(x[k__3161]))]),iter__3158.call(null,cljs.core.rest.call(null,s__3159__3160)));
} else
{return null;
}
break;
}
})));
});

return iter__159__auto____3162.call(null,cljs.core.js_keys.call(null,x));
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

return f__3163.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__3164){
var x = cljs.core.first(arglist__3164);
var options = cljs.core.rest(arglist__3164);
return js__GT_clj__delegate.call(this, x, options);
});
return js__GT_clj;
})()
;
/**
* Returns a memoized version of a referentially transparent function. The
* memoized version of the function keeps a cache of the mapping from arguments
* to results and, when calls with the same arguments are repeated often, has
* higher performance at the expense of higher memory use.
*/
cljs.core.memoize = (function memoize(f){
var mem__3165 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__3169__delegate = function (args){
var temp__3723__auto____3166 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__3165),args);

if(cljs.core.truth_(temp__3723__auto____3166))
{var v__3167 = temp__3723__auto____3166;

return v__3167;
} else
{var ret__3168 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__3165,cljs.core.assoc,args,ret__3168);
return ret__3168;
}
};
var G__3169 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3169__delegate.call(this, args);
};
G__3169.cljs$lang$maxFixedArity = 0;
G__3169.cljs$lang$applyTo = (function (arglist__3170){
var args = cljs.core.seq( arglist__3170 );;
return G__3169__delegate.call(this, args);
});
return G__3169;
})()
;
});
/**
* trampoline can be used to convert algorithms requiring mutual
* recursion without stack consumption. Calls f with supplied args, if
* any. If f returns a fn, calls that fn with no arguments, and
* continues to repeat, until the return value is not a fn, then
* returns that non-fn value. Note that if you want to return a fn as a
* final value, you must wrap it in some data structure and unpack it
* after trampoline returns.
* @param {...*} var_args
*/
cljs.core.trampoline = (function() {
var trampoline = null;
var trampoline__3172 = (function (f){
while(true){
var ret__3171 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__3171)))
{{
var G__3175 = ret__3171;
f = G__3175;
continue;
}
} else
{return ret__3171;
}
break;
}
});
var trampoline__3173 = (function() { 
var G__3176__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__3176 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__3176__delegate.call(this, f, args);
};
G__3176.cljs$lang$maxFixedArity = 1;
G__3176.cljs$lang$applyTo = (function (arglist__3177){
var f = cljs.core.first(arglist__3177);
var args = cljs.core.rest(arglist__3177);
return G__3176__delegate.call(this, f, args);
});
return G__3176;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__3172.call(this,f);
default:
return trampoline__3173.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__3173.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__3178 = (function (){
return rand.call(null,1);
});
var rand__3179 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__3178.call(this);
case  1 :
return rand__3179.call(this,n);
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
var k__3181 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__3181,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__3181,cljs.core.Vector.fromArray([])),x));
}),cljs.core.ObjMap.fromObject([],{}),coll);
});
/**
* Creates a hierarchy object for use with derive, isa? etc.
*/
cljs.core.make_hierarchy = (function make_hierarchy(){
return cljs.core.ObjMap.fromObject(["﷐'parents","﷐'descendants","﷐'ancestors"],{"﷐'parents":cljs.core.ObjMap.fromObject([],{}),"﷐'descendants":cljs.core.ObjMap.fromObject([],{}),"﷐'ancestors":cljs.core.ObjMap.fromObject([],{})});
});
cljs.core.global_hierarchy = cljs.core.atom.call(null,cljs.core.make_hierarchy.call(null));
/**
* Returns true if (= child parent), or child is directly or indirectly derived from
* parent, either via a Java type inheritance relationship or a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy
*/
cljs.core.isa_QMARK_ = (function() {
var isa_QMARK_ = null;
var isa_QMARK___3190 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___3191 = (function (h,child,parent){
var or__3576__auto____3182 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3576__auto____3182))
{return or__3576__auto____3182;
} else
{var or__3576__auto____3183 = cljs.core.contains_QMARK_.call(null,"﷐'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3576__auto____3183))
{return or__3576__auto____3183;
} else
{var and__3574__auto____3184 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3574__auto____3184))
{var and__3574__auto____3185 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3574__auto____3185))
{var and__3574__auto____3186 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3574__auto____3186))
{var ret__3187 = true;
var i__3188 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3576__auto____3189 = cljs.core.not.call(null,ret__3187);

if(cljs.core.truth_(or__3576__auto____3189))
{return or__3576__auto____3189;
} else
{return cljs.core._EQ_.call(null,i__3188,cljs.core.count.call(null,parent));
}
})()))
{return ret__3187;
} else
{{
var G__3193 = isa_QMARK_.call(null,h,child.call(null,i__3188),parent.call(null,i__3188));
var G__3194 = cljs.core.inc.call(null,i__3188);
ret__3187 = G__3193;
i__3188 = G__3194;
continue;
}
}
break;
}
} else
{return and__3574__auto____3186;
}
} else
{return and__3574__auto____3185;
}
} else
{return and__3574__auto____3184;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___3190.call(this,h,child);
case  3 :
return isa_QMARK___3191.call(this,h,child,parent);
}
throw('Invalid arity: ' + arguments.length);
};
return isa_QMARK_;
})()
;
/**
* Returns the immediate parents of tag, either via a Java type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.parents = (function() {
var parents = null;
var parents__3195 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__3196 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__3195.call(this,h);
case  2 :
return parents__3196.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
return parents;
})()
;
/**
* Returns the immediate and indirect parents of tag, either via a Java type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.ancestors = (function() {
var ancestors = null;
var ancestors__3198 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__3199 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__3198.call(this,h);
case  2 :
return ancestors__3199.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
return ancestors;
})()
;
/**
* Returns the immediate and indirect children of tag, through a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy. Note: does not work on Java type inheritance
* relationships.
*/
cljs.core.descendants = (function() {
var descendants = null;
var descendants__3201 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__3202 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__3201.call(this,h);
case  2 :
return descendants__3202.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
return descendants;
})()
;
/**
* Establishes a parent/child relationship between parent and
* tag. Parent must be a namespace-qualified symbol or keyword and
* child can be either a namespace-qualified symbol or keyword or a
* class. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.derive = (function() {
var derive = null;
var derive__3212 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'namespace","﷑'parent")));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__3213 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'not=","﷑'tag","﷑'parent")));
}
var tp__3207 = "﷐'parents".call(null,h);
var td__3208 = "﷐'descendants".call(null,h);
var ta__3209 = "﷐'ancestors".call(null,h);
var tf__3210 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3576__auto____3211 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__3207.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__3209.call(null,tag),parent)))
{throw cljs.core.str.call(null,tag,"already has",parent,"as ancestor");
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__3209.call(null,parent),tag)))
{throw cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor");
} else
{}
return cljs.core.ObjMap.fromObject(["﷐'parents","﷐'ancestors","﷐'descendants"],{"﷐'parents":cljs.core.assoc.call(null,"﷐'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__3207,tag,cljs.core.set([])),parent)),"﷐'ancestors":tf__3210.call(null,"﷐'ancestors".call(null,h),tag,td__3208,parent,ta__3209),"﷐'descendants":tf__3210.call(null,"﷐'descendants".call(null,h),parent,ta__3209,tag,td__3208)});
})());

if(cljs.core.truth_(or__3576__auto____3211))
{return or__3576__auto____3211;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__3212.call(this,h,tag);
case  3 :
return derive__3213.call(this,h,tag,parent);
}
throw('Invalid arity: ' + arguments.length);
};
return derive;
})()
;
/**
* Removes a parent/child relationship between parent and
* tag. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.underive = (function() {
var underive = null;
var underive__3219 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__3220 = (function (h,tag,parent){
var parentMap__3215 = "﷐'parents".call(null,h);
var childsParents__3216 = (cljs.core.truth_(parentMap__3215.call(null,tag))?cljs.core.disj.call(null,parentMap__3215.call(null,tag),parent):cljs.core.set([]));
var newParents__3217 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__3216))?cljs.core.assoc.call(null,parentMap__3215,tag,childsParents__3216):cljs.core.dissoc.call(null,parentMap__3215,tag));
var deriv_seq__3218 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__3204_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__3204_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__3204_SHARP_),cljs.core.second.call(null,p1__3204_SHARP_)));
}),cljs.core.seq.call(null,newParents__3217)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__3215.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__3205_SHARP_,p2__3206_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__3205_SHARP_,p2__3206_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__3218));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__3219.call(this,h,tag);
case  3 :
return underive__3220.call(this,h,tag,parent);
}
throw('Invalid arity: ' + arguments.length);
};
return underive;
})()
;
cljs.core.reset_cache = (function reset_cache(method_cache,method_table,cached_hierarchy,hierarchy){
cljs.core.swap_BANG_.call(null,method_cache,(function (_){
return cljs.core.deref.call(null,method_table);
}));
return cljs.core.swap_BANG_.call(null,cached_hierarchy,(function (_){
return cljs.core.deref.call(null,hierarchy);
}));
});
cljs.core.prefers_STAR_ = (function prefers_STAR_(x,y,prefer_table){
var xprefs__3222 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3576__auto____3224 = (cljs.core.truth_((function (){var and__3574__auto____3223 = xprefs__3222;

if(cljs.core.truth_(and__3574__auto____3223))
{return xprefs__3222.call(null,y);
} else
{return and__3574__auto____3223;
}
})())?true:null);

if(cljs.core.truth_(or__3576__auto____3224))
{return or__3576__auto____3224;
} else
{var or__3576__auto____3226 = (function (){var ps__3225 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_(cljs.core.pos_QMARK_.call(null,cljs.core.count.call(null,ps__3225))))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__3225),prefer_table)))
{} else
{}
{
var G__3229 = cljs.core.rest.call(null,ps__3225);
ps__3225 = G__3229;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3576__auto____3226))
{return or__3576__auto____3226;
} else
{var or__3576__auto____3228 = (function (){var ps__3227 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_(cljs.core.pos_QMARK_.call(null,cljs.core.count.call(null,ps__3227))))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__3227),y,prefer_table)))
{} else
{}
{
var G__3230 = cljs.core.rest.call(null,ps__3227);
ps__3227 = G__3230;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3576__auto____3228))
{return or__3576__auto____3228;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3576__auto____3231 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3576__auto____3231))
{return or__3576__auto____3231;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__3240 = cljs.core.reduce.call(null,(function (be,p__3232){
var vec__3233__3234 = p__3232;
var k__3235 = cljs.core.nth.call(null,vec__3233__3234,0,null);
var ___3236 = cljs.core.nth.call(null,vec__3233__3234,1,null);
var e__3237 = vec__3233__3234;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__3235)))
{var be2__3239 = (cljs.core.truth_((function (){var or__3576__auto____3238 = cljs.core.nil_QMARK_.call(null,be);

if(cljs.core.truth_(or__3576__auto____3238))
{return or__3576__auto____3238;
} else
{return cljs.core.dominates.call(null,k__3235,cljs.core.first.call(null,be),prefer_table);
}
})())?e__3237:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__3239),k__3235,prefer_table)))
{} else
{throw cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__3235," and ",cljs.core.first.call(null,be2__3239),", and neither is preferred");
}
return be2__3239;
} else
{return null;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__3240))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__3240));
return cljs.core.second.call(null,best_entry__3240);
} else
{cljs.core.reset_cache.call(null,method_cache,method_table,cached_hierarchy,hierarchy);
return find_and_cache_best_method.call(null,name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy);
}
} else
{return null;
}
});
cljs.core.IMultiFn = {};
cljs.core._reset = (function _reset(mf){
if(cljs.core.truth_((function (){var and__3574__auto____3241 = mf;

if(cljs.core.truth_(and__3574__auto____3241))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3574__auto____3241;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3576__auto____3242 = (_reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3576__auto____3242))
{return or__3576__auto____3242;
} else
{return (_reset["_"]);
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3574__auto____3243 = mf;

if(cljs.core.truth_(and__3574__auto____3243))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3574__auto____3243;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3576__auto____3244 = (_add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3576__auto____3244))
{return or__3576__auto____3244;
} else
{return (_add_method["_"]);
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3574__auto____3245 = mf;

if(cljs.core.truth_(and__3574__auto____3245))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3574__auto____3245;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3576__auto____3246 = (_remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3576__auto____3246))
{return or__3576__auto____3246;
} else
{return (_remove_method["_"]);
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3574__auto____3247 = mf;

if(cljs.core.truth_(and__3574__auto____3247))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3574__auto____3247;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3576__auto____3248 = (_prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3576__auto____3248))
{return or__3576__auto____3248;
} else
{return (_prefer_method["_"]);
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3574__auto____3249 = mf;

if(cljs.core.truth_(and__3574__auto____3249))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3574__auto____3249;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3576__auto____3250 = (_get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3576__auto____3250))
{return or__3576__auto____3250;
} else
{return (_get_method["_"]);
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3574__auto____3251 = mf;

if(cljs.core.truth_(and__3574__auto____3251))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3574__auto____3251;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3576__auto____3252 = (_methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3576__auto____3252))
{return or__3576__auto____3252;
} else
{return (_methods["_"]);
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3574__auto____3253 = mf;

if(cljs.core.truth_(and__3574__auto____3253))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3574__auto____3253;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3576__auto____3254 = (_prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3576__auto____3254))
{return or__3576__auto____3254;
} else
{return (_prefers["_"]);
}
})().call(null,mf);
}
});
cljs.core._invoke = (function _invoke(mf,args){
if(cljs.core.truth_((function (){var and__3574__auto____3255 = mf;

if(cljs.core.truth_(and__3574__auto____3255))
{return mf.cljs$core$IMultiFn$_invoke;
} else
{return and__3574__auto____3255;
}
})()))
{return mf.cljs$core$IMultiFn$_invoke(mf,args);
} else
{return (function (){var or__3576__auto____3256 = (_invoke[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3576__auto____3256))
{return or__3576__auto____3256;
} else
{return (_invoke["_"]);
}
})().call(null,mf,args);
}
});
cljs.core.do_invoke = (function do_invoke(mf,dispatch_fn,args){
var dispatch_val__3257 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__3258 = cljs.core._get_method.call(null,mf,dispatch_val__3257);

if(cljs.core.truth_(target_fn__3258))
{} else
{throw cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__3257);
}
return cljs.core.apply.call(null,target_fn__3258,args);
});

/**
* @constructor
*/
cljs.core.MultiFn = (function (name,dispatch_fn,default_dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
this.name = name;
this.dispatch_fn = dispatch_fn;
this.default_dispatch_val = default_dispatch_val;
this.hierarchy = hierarchy;
this.method_table = method_table;
this.prefer_table = prefer_table;
this.method_cache = method_cache;
this.cached_hierarchy = cached_hierarchy;
})
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__3259 = this;
cljs.core.swap_BANG_.call(null,this__3259.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__3259.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__3259.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__3259.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__3260 = this;
cljs.core.swap_BANG_.call(null,this__3260.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__3260.method_cache,this__3260.method_table,this__3260.cached_hierarchy,this__3260.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__3261 = this;
cljs.core.swap_BANG_.call(null,this__3261.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__3261.method_cache,this__3261.method_table,this__3261.cached_hierarchy,this__3261.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__3262 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__3262.cached_hierarchy),cljs.core.deref.call(null,this__3262.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__3262.method_cache,this__3262.method_table,this__3262.cached_hierarchy,this__3262.hierarchy);
}
var temp__3723__auto____3263 = cljs.core.deref.call(null,this__3262.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3723__auto____3263))
{var target_fn__3264 = temp__3723__auto____3263;

return target_fn__3264;
} else
{var temp__3723__auto____3265 = cljs.core.find_and_cache_best_method.call(null,this__3262.name,dispatch_val,this__3262.hierarchy,this__3262.method_table,this__3262.prefer_table,this__3262.method_cache,this__3262.cached_hierarchy);

if(cljs.core.truth_(temp__3723__auto____3265))
{var target_fn__3266 = temp__3723__auto____3265;

return target_fn__3266;
} else
{return cljs.core.deref.call(null,this__3262.method_table).call(null,this__3262.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__3267 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__3267.prefer_table)))
{throw cljs.core.str.call(null,"Preference conflict in multimethod '",this__3267.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x);
} else
{}
cljs.core.swap_BANG_.call(null,this__3267.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__3267.method_cache,this__3267.method_table,this__3267.cached_hierarchy,this__3267.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__3268 = this;
return cljs.core.deref.call(null,this__3268.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__3269 = this;
return cljs.core.deref.call(null,this__3269.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_invoke = (function (mf,args){
var this__3270 = this;
return cljs.core.do_invoke.call(null,mf,this__3270.dispatch_fn,args);
});
cljs.core.MultiFn.prototype.call = (function() { 
var G__3271__delegate = function (_,args){
return cljs.core._invoke.call(null,this,args);
};
var G__3271 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__3271__delegate.call(this, _, args);
};
G__3271.cljs$lang$maxFixedArity = 1;
G__3271.cljs$lang$applyTo = (function (arglist__3272){
var _ = cljs.core.first(arglist__3272);
var args = cljs.core.rest(arglist__3272);
return G__3271__delegate.call(this, _, args);
});
return G__3271;
})()
;
/**
* Removes all of the methods of multimethod.
*/
cljs.core.remove_all_methods = (function remove_all_methods(multifn){
return cljs.core._reset.call(null,multifn);
});
/**
* Removes the method of multimethod associated with dispatch-value.
*/
cljs.core.remove_method = (function remove_method(multifn,dispatch_val){
return cljs.core._remove_method.call(null,multifn,dispatch_val);
});
/**
* Causes the multimethod to prefer matches of dispatch-val-x over dispatch-val-y
* when there is a conflict
*/
cljs.core.prefer_method = (function prefer_method(multifn,dispatch_val_x,dispatch_val_y){
return cljs.core._prefer_method.call(null,multifn,dispatch_val_x,dispatch_val_y);
});
/**
* Given a multimethod, returns a map of dispatch values -> dispatch fns
*/
cljs.core.methods$ = (function methods$(multifn){
return cljs.core._methods.call(null,multifn);
});
/**
* Given a multimethod and a dispatch value, returns the dispatch fn
* that would apply to that value, or nil if none apply and no default
*/
cljs.core.get_method = (function get_method(multifn,dispatch_val){
return cljs.core._get_method.call(null,multifn,dispatch_val);
});
/**
* Given a multimethod, returns a map of preferred value -> set of other values
*/
cljs.core.prefers = (function prefers(multifn){
return cljs.core._prefers.call(null,multifn);
});
