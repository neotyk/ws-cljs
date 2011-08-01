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
var or__3576__auto____2020 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3576__auto____2020))
{return or__3576__auto____2020;
} else
{var or__3576__auto____2021 = (p["_"]);

if(cljs.core.truth_(or__3576__auto____2021))
{return or__3576__auto____2021;
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
if(cljs.core.truth_((function (){var and__3574__auto____2022 = coll;

if(cljs.core.truth_(and__3574__auto____2022))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3574__auto____2022;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3576__auto____2023 = (_count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2023))
{return or__3576__auto____2023;
} else
{return (_count["_"]);
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3574__auto____2024 = coll;

if(cljs.core.truth_(and__3574__auto____2024))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3574__auto____2024;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3576__auto____2025 = (_empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2025))
{return or__3576__auto____2025;
} else
{return (_empty["_"]);
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3574__auto____2026 = coll;

if(cljs.core.truth_(and__3574__auto____2026))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3574__auto____2026;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3576__auto____2027 = (_conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2027))
{return or__3576__auto____2027;
} else
{return (_conj["_"]);
}
})().call(null,coll,o);
}
});
cljs.core.IIndexed = {};
cljs.core._nth = (function() {
var _nth = null;
var _nth__2032 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3574__auto____2028 = coll;

if(cljs.core.truth_(and__3574__auto____2028))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3574__auto____2028;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3576__auto____2029 = (_nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2029))
{return or__3576__auto____2029;
} else
{return (_nth["_"]);
}
})().call(null,coll,n);
}
});
var _nth__2033 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3574__auto____2030 = coll;

if(cljs.core.truth_(and__3574__auto____2030))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3574__auto____2030;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3576__auto____2031 = (_nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2031))
{return or__3576__auto____2031;
} else
{return (_nth["_"]);
}
})().call(null,coll,n,not_found);
}
});
_nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return _nth__2032.call(this,coll,n);
case  3 :
return _nth__2033.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3574__auto____2035 = coll;

if(cljs.core.truth_(and__3574__auto____2035))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3574__auto____2035;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3576__auto____2036 = (_first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2036))
{return or__3576__auto____2036;
} else
{return (_first["_"]);
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3574__auto____2037 = coll;

if(cljs.core.truth_(and__3574__auto____2037))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3574__auto____2037;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3576__auto____2038 = (_rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2038))
{return or__3576__auto____2038;
} else
{return (_rest["_"]);
}
})().call(null,coll);
}
});
cljs.core.ILookup = {};
cljs.core._lookup = (function() {
var _lookup = null;
var _lookup__2043 = (function (o,k){
if(cljs.core.truth_((function (){var and__3574__auto____2039 = o;

if(cljs.core.truth_(and__3574__auto____2039))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3574__auto____2039;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3576__auto____2040 = (_lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____2040))
{return or__3576__auto____2040;
} else
{return (_lookup["_"]);
}
})().call(null,o,k);
}
});
var _lookup__2044 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3574__auto____2041 = o;

if(cljs.core.truth_(and__3574__auto____2041))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3574__auto____2041;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3576__auto____2042 = (_lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____2042))
{return or__3576__auto____2042;
} else
{return (_lookup["_"]);
}
})().call(null,o,k,not_found);
}
});
_lookup = function(o,k,not_found){
switch(arguments.length){
case  2 :
return _lookup__2043.call(this,o,k);
case  3 :
return _lookup__2044.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3574__auto____2046 = coll;

if(cljs.core.truth_(and__3574__auto____2046))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3574__auto____2046;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3576__auto____2047 = (_contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2047))
{return or__3576__auto____2047;
} else
{return (_contains_key_QMARK_["_"]);
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3574__auto____2048 = coll;

if(cljs.core.truth_(and__3574__auto____2048))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3574__auto____2048;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3576__auto____2049 = (_assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2049))
{return or__3576__auto____2049;
} else
{return (_assoc["_"]);
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3574__auto____2050 = coll;

if(cljs.core.truth_(and__3574__auto____2050))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3574__auto____2050;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3576__auto____2051 = (_dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2051))
{return or__3576__auto____2051;
} else
{return (_dissoc["_"]);
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3574__auto____2052 = coll;

if(cljs.core.truth_(and__3574__auto____2052))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3574__auto____2052;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3576__auto____2053 = (_disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2053))
{return or__3576__auto____2053;
} else
{return (_disjoin["_"]);
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3574__auto____2054 = coll;

if(cljs.core.truth_(and__3574__auto____2054))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3574__auto____2054;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3576__auto____2055 = (_peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2055))
{return or__3576__auto____2055;
} else
{return (_peek["_"]);
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3574__auto____2056 = coll;

if(cljs.core.truth_(and__3574__auto____2056))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3574__auto____2056;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3576__auto____2057 = (_pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2057))
{return or__3576__auto____2057;
} else
{return (_pop["_"]);
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3574__auto____2058 = coll;

if(cljs.core.truth_(and__3574__auto____2058))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3574__auto____2058;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3576__auto____2059 = (_assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2059))
{return or__3576__auto____2059;
} else
{return (_assoc_n["_"]);
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3574__auto____2060 = o;

if(cljs.core.truth_(and__3574__auto____2060))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3574__auto____2060;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3576__auto____2061 = (_deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____2061))
{return or__3576__auto____2061;
} else
{return (_deref["_"]);
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3574__auto____2062 = o;

if(cljs.core.truth_(and__3574__auto____2062))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3574__auto____2062;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3576__auto____2063 = (_deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____2063))
{return or__3576__auto____2063;
} else
{return (_deref_with_timeout["_"]);
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3574__auto____2064 = o;

if(cljs.core.truth_(and__3574__auto____2064))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3574__auto____2064;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3576__auto____2065 = (_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____2065))
{return or__3576__auto____2065;
} else
{return (_meta["_"]);
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3574__auto____2066 = o;

if(cljs.core.truth_(and__3574__auto____2066))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3574__auto____2066;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3576__auto____2067 = (_with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____2067))
{return or__3576__auto____2067;
} else
{return (_with_meta["_"]);
}
})().call(null,o,meta);
}
});
cljs.core.IReduce = {};
cljs.core._reduce = (function() {
var _reduce = null;
var _reduce__2072 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3574__auto____2068 = coll;

if(cljs.core.truth_(and__3574__auto____2068))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3574__auto____2068;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3576__auto____2069 = (_reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2069))
{return or__3576__auto____2069;
} else
{return (_reduce["_"]);
}
})().call(null,coll,f);
}
});
var _reduce__2073 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3574__auto____2070 = coll;

if(cljs.core.truth_(and__3574__auto____2070))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3574__auto____2070;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3576__auto____2071 = (_reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2071))
{return or__3576__auto____2071;
} else
{return (_reduce["_"]);
}
})().call(null,coll,f,start);
}
});
_reduce = function(coll,f,start){
switch(arguments.length){
case  2 :
return _reduce__2072.call(this,coll,f);
case  3 :
return _reduce__2073.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3574__auto____2075 = o;

if(cljs.core.truth_(and__3574__auto____2075))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3574__auto____2075;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3576__auto____2076 = (_equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____2076))
{return or__3576__auto____2076;
} else
{return (_equiv["_"]);
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3574__auto____2077 = o;

if(cljs.core.truth_(and__3574__auto____2077))
{return o.cljs$core$IHash$_hash;
} else
{return and__3574__auto____2077;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3576__auto____2078 = (_hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____2078))
{return or__3576__auto____2078;
} else
{return (_hash["_"]);
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3574__auto____2079 = o;

if(cljs.core.truth_(and__3574__auto____2079))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3574__auto____2079;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3576__auto____2080 = (_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____2080))
{return or__3576__auto____2080;
} else
{return (_seq["_"]);
}
})().call(null,o);
}
});
cljs.core.ISequential = {};
cljs.core.IPrintable = {};
cljs.core._pr_seq = (function _pr_seq(o,opts){
if(cljs.core.truth_((function (){var and__3574__auto____2081 = o;

if(cljs.core.truth_(and__3574__auto____2081))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3574__auto____2081;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3576__auto____2082 = (_pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____2082))
{return or__3576__auto____2082;
} else
{return (_pr_seq["_"]);
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3574__auto____2083 = d;

if(cljs.core.truth_(and__3574__auto____2083))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3574__auto____2083;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3576__auto____2084 = (_realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3576__auto____2084))
{return or__3576__auto____2084;
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
var G__2085 = null;
var G__2085__2086 = (function (_,n){
return null;
});
var G__2085__2087 = (function (_,n,not_found){
return not_found;
});
G__2085 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__2085__2086.call(this,_,n);
case  3 :
return G__2085__2087.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2085;
})()
);
(cljs.core.IMeta["null"] = true);
(cljs.core._meta["null"] = (function (_){
return null;
}));
(cljs.core.IReduce["null"] = true);
(cljs.core._reduce["null"] = (function() {
var G__2089 = null;
var G__2089__2090 = (function (_,f){
return f.call(null);
});
var G__2089__2091 = (function (_,f,start){
return start;
});
G__2089 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__2089__2090.call(this,_,f);
case  3 :
return G__2089__2091.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2089;
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
var G__2093 = null;
var G__2093__2094 = (function (o,k){
return null;
});
var G__2093__2095 = (function (o,k,not_found){
return not_found;
});
G__2093 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__2093__2094.call(this,o,k);
case  3 :
return G__2093__2095.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2093;
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
var ci_reduce__2103 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__2097 = cljs.core._nth.call(null,cicoll,0);
var n__2098 = 1;

while(true){
if(cljs.core.truth_(cljs.core.lt_.call(null,n__2098,cljs.core._count.call(null,cicoll))))
{{
var G__2107 = f.call(null,val__2097,cljs.core._nth.call(null,cicoll,n__2098));
var G__2108 = cljs.core.inc.call(null,n__2098);
val__2097 = G__2107;
n__2098 = G__2108;
continue;
}
} else
{return val__2097;
}
break;
}
}
});
var ci_reduce__2104 = (function (cicoll,f,val){
var val__2099 = val;
var n__2100 = 0;

while(true){
if(cljs.core.truth_(cljs.core.lt_.call(null,n__2100,cljs.core._count.call(null,cicoll))))
{{
var G__2109 = f.call(null,val__2099,cljs.core._nth.call(null,cicoll,n__2100));
var G__2110 = cljs.core.inc.call(null,n__2100);
val__2099 = G__2109;
n__2100 = G__2110;
continue;
}
} else
{return val__2099;
}
break;
}
});
var ci_reduce__2105 = (function (cicoll,f,val,idx){
var val__2101 = val;
var n__2102 = idx;

while(true){
if(cljs.core.truth_(cljs.core.lt_.call(null,n__2102,cljs.core._count.call(null,cicoll))))
{{
var G__2111 = f.call(null,val__2101,cljs.core._nth.call(null,cicoll,n__2102));
var G__2112 = cljs.core.inc.call(null,n__2102);
val__2101 = G__2111;
n__2102 = G__2112;
continue;
}
} else
{return val__2101;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__2103.call(this,cicoll,f);
case  3 :
return ci_reduce__2104.call(this,cicoll,f,val);
case  4 :
return ci_reduce__2105.call(this,cicoll,f,val,idx);
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
var G__2119 = null;
var G__2119__2120 = (function (_,f){
var this__2113 = this;
return cljs.core.ci_reduce.call(null,this__2113.a,f,(this__2113.a[this__2113.i]),cljs.core.inc.call(null,this__2113.i));
});
var G__2119__2121 = (function (_,f,start){
var this__2114 = this;
return cljs.core.ci_reduce.call(null,this__2114.a,f,start,this__2114.i);
});
G__2119 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__2119__2120.call(this,_,f);
case  3 :
return G__2119__2121.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2119;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__2115 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__2116 = this;
return (this__2116.a[this__2116.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__2117 = this;
if(cljs.core.truth_(cljs.core.lt_.call(null,cljs.core.inc.call(null,this__2117.i),cljs.core._count.call(null,this__2117.a))))
{return (new cljs.core.IndexedSeq(this__2117.a,cljs.core.inc.call(null,this__2117.i)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__2118 = this;
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
var G__2123 = null;
var G__2123__2124 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__2123__2125 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__2123 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__2123__2124.call(this,array,f);
case  3 :
return G__2123__2125.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2123;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__2127 = null;
var G__2127__2128 = (function (array,k){
return (array[k]);
});
var G__2127__2129 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__2127 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__2127__2128.call(this,array,k);
case  3 :
return G__2127__2129.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2127;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__2131 = null;
var G__2131__2132 = (function (array,n){
if(cljs.core.truth_(cljs.core.lt_.call(null,n,array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__2131__2133 = (function (array,n,not_found){
if(cljs.core.truth_(cljs.core.lt_.call(null,n,array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__2131 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__2131__2132.call(this,array,n);
case  3 :
return G__2131__2133.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2131;
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
var temp__3726__auto____2135 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____2135))
{var s__2136 = temp__3726__auto____2135;

return cljs.core._first.call(null,s__2136);
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
var G__2137 = cljs.core.next.call(null,s);
s = G__2137;
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
var s__2138 = cljs.core.seq.call(null,x);
var n__2139 = 0;

while(true){
if(cljs.core.truth_(s__2138))
{{
var G__2140 = cljs.core.next.call(null,s__2138);
var G__2141 = cljs.core.inc.call(null,n__2139);
s__2138 = G__2140;
n__2139 = G__2141;
continue;
}
} else
{return n__2139;
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
var conj__2142 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__2143 = (function() { 
var G__2145__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__2146 = conj.call(null,coll,x);
var G__2147 = cljs.core.first.call(null,xs);
var G__2148 = cljs.core.next.call(null,xs);
coll = G__2146;
x = G__2147;
xs = G__2148;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__2145 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2145__delegate.call(this, coll, x, xs);
};
G__2145.cljs$lang$maxFixedArity = 2;
G__2145.cljs$lang$applyTo = (function (arglist__2149){
var coll = cljs.core.first(arglist__2149);
var x = cljs.core.first(cljs.core.next(arglist__2149));
var xs = cljs.core.rest(cljs.core.next(arglist__2149));
return G__2145__delegate.call(null, coll, x, xs);
});
return G__2145;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__2142.call(this,coll,x);
default:
return conj__2143.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__2143.cljs$lang$applyTo;
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
var nth__2150 = (function (coll,n){
return cljs.core._nth.call(null,coll,n);
});
var nth__2151 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,n,not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__2150.call(this,coll,n);
case  3 :
return nth__2151.call(this,coll,n,not_found);
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
var get__2153 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__2154 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__2153.call(this,o,k);
case  3 :
return get__2154.call(this,o,k,not_found);
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
var assoc__2157 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__2158 = (function() { 
var G__2160__delegate = function (coll,k,v,kvs){
while(true){
var ret__2156 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__2161 = ret__2156;
var G__2162 = cljs.core.first.call(null,kvs);
var G__2163 = cljs.core.second.call(null,kvs);
var G__2164 = cljs.core.nnext.call(null,kvs);
coll = G__2161;
k = G__2162;
v = G__2163;
kvs = G__2164;
continue;
}
} else
{return ret__2156;
}
break;
}
};
var G__2160 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2160__delegate.call(this, coll, k, v, kvs);
};
G__2160.cljs$lang$maxFixedArity = 3;
G__2160.cljs$lang$applyTo = (function (arglist__2165){
var coll = cljs.core.first(arglist__2165);
var k = cljs.core.first(cljs.core.next(arglist__2165));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2165)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2165)));
return G__2160__delegate.call(null, coll, k, v, kvs);
});
return G__2160;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__2157.call(this,coll,k,v);
default:
return assoc__2158.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__2158.cljs$lang$applyTo;
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
var dissoc__2167 = (function (coll){
return coll;
});
var dissoc__2168 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__2169 = (function() { 
var G__2171__delegate = function (coll,k,ks){
while(true){
var ret__2166 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__2172 = ret__2166;
var G__2173 = cljs.core.first.call(null,ks);
var G__2174 = cljs.core.next.call(null,ks);
coll = G__2172;
k = G__2173;
ks = G__2174;
continue;
}
} else
{return ret__2166;
}
break;
}
};
var G__2171 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2171__delegate.call(this, coll, k, ks);
};
G__2171.cljs$lang$maxFixedArity = 2;
G__2171.cljs$lang$applyTo = (function (arglist__2175){
var coll = cljs.core.first(arglist__2175);
var k = cljs.core.first(cljs.core.next(arglist__2175));
var ks = cljs.core.rest(cljs.core.next(arglist__2175));
return G__2171__delegate.call(null, coll, k, ks);
});
return G__2171;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__2167.call(this,coll);
case  2 :
return dissoc__2168.call(this,coll,k);
default:
return dissoc__2169.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__2169.cljs$lang$applyTo;
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
var disj__2177 = (function (coll){
return coll;
});
var disj__2178 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__2179 = (function() { 
var G__2181__delegate = function (coll,k,ks){
while(true){
var ret__2176 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__2182 = ret__2176;
var G__2183 = cljs.core.first.call(null,ks);
var G__2184 = cljs.core.next.call(null,ks);
coll = G__2182;
k = G__2183;
ks = G__2184;
continue;
}
} else
{return ret__2176;
}
break;
}
};
var G__2181 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2181__delegate.call(this, coll, k, ks);
};
G__2181.cljs$lang$maxFixedArity = 2;
G__2181.cljs$lang$applyTo = (function (arglist__2185){
var coll = cljs.core.first(arglist__2185);
var k = cljs.core.first(cljs.core.next(arglist__2185));
var ks = cljs.core.rest(cljs.core.next(arglist__2185));
return G__2181__delegate.call(null, coll, k, ks);
});
return G__2181;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__2177.call(this,coll);
case  2 :
return disj__2178.call(this,coll,k);
default:
return disj__2179.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__2179.cljs$lang$applyTo;
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
{var x__105__auto____2186 = x;

if(cljs.core.truth_((function (){var and__3574__auto____2187 = x__105__auto____2186;

if(cljs.core.truth_(and__3574__auto____2187))
{return x__105__auto____2186.cljs$core$ICollection$;
} else
{return and__3574__auto____2187;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__105__auto____2186);
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
{var x__105__auto____2188 = x;

if(cljs.core.truth_((function (){var and__3574__auto____2189 = x__105__auto____2188;

if(cljs.core.truth_(and__3574__auto____2189))
{return x__105__auto____2188.cljs$core$ISet$;
} else
{return and__3574__auto____2189;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__105__auto____2188);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__105__auto____2190 = x;

if(cljs.core.truth_((function (){var and__3574__auto____2191 = x__105__auto____2190;

if(cljs.core.truth_(and__3574__auto____2191))
{return x__105__auto____2190.cljs$core$IAssociative$;
} else
{return and__3574__auto____2191;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__105__auto____2190);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__105__auto____2192 = x;

if(cljs.core.truth_((function (){var and__3574__auto____2193 = x__105__auto____2192;

if(cljs.core.truth_(and__3574__auto____2193))
{return x__105__auto____2192.cljs$core$ISequential$;
} else
{return and__3574__auto____2193;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__105__auto____2192);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__105__auto____2194 = x;

if(cljs.core.truth_((function (){var and__3574__auto____2195 = x__105__auto____2194;

if(cljs.core.truth_(and__3574__auto____2195))
{return x__105__auto____2194.cljs$core$ICounted$;
} else
{return and__3574__auto____2195;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__105__auto____2194);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__105__auto____2196 = x;

if(cljs.core.truth_((function (){var and__3574__auto____2197 = x__105__auto____2196;

if(cljs.core.truth_(and__3574__auto____2197))
{return x__105__auto____2196.cljs$core$IMap$;
} else
{return and__3574__auto____2197;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__105__auto____2196);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__105__auto____2198 = x;

if(cljs.core.truth_((function (){var and__3574__auto____2199 = x__105__auto____2198;

if(cljs.core.truth_(and__3574__auto____2199))
{return x__105__auto____2198.cljs$core$IVector$;
} else
{return and__3574__auto____2199;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__105__auto____2198);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__2200 = cljs.core.array.call(null);

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__2200.push(key);
}));
return keys__2200;
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
{var x__105__auto____2201 = s;

if(cljs.core.truth_((function (){var and__3574__auto____2202 = x__105__auto____2201;

if(cljs.core.truth_(and__3574__auto____2202))
{return x__105__auto____2201.cljs$core$ISeq$;
} else
{return and__3574__auto____2202;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__105__auto____2201);
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
var and__3574__auto____2203 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3574__auto____2203))
{return cljs.core.not.call(null,(function (){var or__3576__auto____2204 = cljs.core._EQ_.call(null,x.charAt(0),"﷐");

if(cljs.core.truth_(or__3576__auto____2204))
{return or__3576__auto____2204;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
}
})());
} else
{return and__3574__auto____2203;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3574__auto____2205 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3574__auto____2205))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷐");
} else
{return and__3574__auto____2205;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3574__auto____2206 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3574__auto____2206))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
} else
{return and__3574__auto____2206;
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
var and__3574__auto____2207 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3574__auto____2207))
{return (n == n.toFixed());
} else
{return and__3574__auto____2207;
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
if(cljs.core.truth_((function (){var and__3574__auto____2208 = coll;

if(cljs.core.truth_(and__3574__auto____2208))
{var and__3574__auto____2209 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3574__auto____2209))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3574__auto____2209;
}
} else
{return and__3574__auto____2208;
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
var distinct_QMARK___2214 = (function (x){
return true;
});
var distinct_QMARK___2215 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___2216 = (function() { 
var G__2218__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__2210 = cljs.core.set([y,x]);
var xs__2211 = more;

while(true){
var x__2212 = cljs.core.first.call(null,xs__2211);
var etc__2213 = cljs.core.next.call(null,xs__2211);

if(cljs.core.truth_(xs__2211))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__2210,x__2212)))
{return false;
} else
{{
var G__2219 = cljs.core.conj.call(null,s__2210,x__2212);
var G__2220 = etc__2213;
s__2210 = G__2219;
xs__2211 = G__2220;
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
var G__2218 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2218__delegate.call(this, x, y, more);
};
G__2218.cljs$lang$maxFixedArity = 2;
G__2218.cljs$lang$applyTo = (function (arglist__2221){
var x = cljs.core.first(arglist__2221);
var y = cljs.core.first(cljs.core.next(arglist__2221));
var more = cljs.core.rest(cljs.core.next(arglist__2221));
return G__2218__delegate.call(null, x, y, more);
});
return G__2218;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___2214.call(this,x);
case  2 :
return distinct_QMARK___2215.call(this,x,y);
default:
return distinct_QMARK___2216.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___2216.cljs$lang$applyTo;
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
var r__2222 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__2222)))
{return r__2222;
} else
{if(cljs.core.truth_(r__2222))
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
var sort__2224 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__2225 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__2223 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__2223,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__2223);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__2224.call(this,comp);
case  2 :
return sort__2225.call(this,comp,coll);
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
var sort_by__2227 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__2228 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__2227.call(this,keyfn,comp);
case  3 :
return sort_by__2228.call(this,keyfn,comp,coll);
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
var reduce__2230 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__2231 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__2230.call(this,f,val);
case  3 :
return reduce__2231.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__2237 = (function (f,coll){
var temp__3723__auto____2233 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3723__auto____2233))
{var s__2234 = temp__3723__auto____2233;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__2234),cljs.core.next.call(null,s__2234));
} else
{return f.call(null);
}
});
var seq_reduce__2238 = (function (f,val,coll){
var val__2235 = val;
var coll__2236 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__2236))
{{
var G__2240 = f.call(null,val__2235,cljs.core.first.call(null,coll__2236));
var G__2241 = cljs.core.next.call(null,coll__2236);
val__2235 = G__2240;
coll__2236 = G__2241;
continue;
}
} else
{return val__2235;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__2237.call(this,f,val);
case  3 :
return seq_reduce__2238.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__2242 = null;
var G__2242__2243 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__2242__2244 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__2242 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__2242__2243.call(this,coll,f);
case  3 :
return G__2242__2244.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2242;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___2246 = (function (){
return 0;
});
var _PLUS___2247 = (function (x){
return x;
});
var _PLUS___2248 = (function (x,y){
return (x + y);
});
var _PLUS___2249 = (function() { 
var G__2251__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,_PLUS_.call(null,x,y),more);
};
var G__2251 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2251__delegate.call(this, x, y, more);
};
G__2251.cljs$lang$maxFixedArity = 2;
G__2251.cljs$lang$applyTo = (function (arglist__2252){
var x = cljs.core.first(arglist__2252);
var y = cljs.core.first(cljs.core.next(arglist__2252));
var more = cljs.core.rest(cljs.core.next(arglist__2252));
return G__2251__delegate.call(null, x, y, more);
});
return G__2251;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___2246.call(this);
case  1 :
return _PLUS___2247.call(this,x);
case  2 :
return _PLUS___2248.call(this,x,y);
default:
return _PLUS___2249.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___2249.cljs$lang$applyTo;
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
var ___2253 = (function (x){
return (- x);
});
var ___2254 = (function (x,y){
return (x - y);
});
var ___2255 = (function() { 
var G__2257__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,_.call(null,x,y),more);
};
var G__2257 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2257__delegate.call(this, x, y, more);
};
G__2257.cljs$lang$maxFixedArity = 2;
G__2257.cljs$lang$applyTo = (function (arglist__2258){
var x = cljs.core.first(arglist__2258);
var y = cljs.core.first(cljs.core.next(arglist__2258));
var more = cljs.core.rest(cljs.core.next(arglist__2258));
return G__2257__delegate.call(null, x, y, more);
});
return G__2257;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___2253.call(this,x);
case  2 :
return ___2254.call(this,x,y);
default:
return ___2255.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___2255.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___2259 = (function (){
return 1;
});
var _STAR___2260 = (function (x){
return x;
});
var _STAR___2261 = (function (x,y){
return (x * y);
});
var _STAR___2262 = (function() { 
var G__2264__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,_STAR_.call(null,x,y),more);
};
var G__2264 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2264__delegate.call(this, x, y, more);
};
G__2264.cljs$lang$maxFixedArity = 2;
G__2264.cljs$lang$applyTo = (function (arglist__2265){
var x = cljs.core.first(arglist__2265);
var y = cljs.core.first(cljs.core.next(arglist__2265));
var more = cljs.core.rest(cljs.core.next(arglist__2265));
return G__2264__delegate.call(null, x, y, more);
});
return G__2264;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___2259.call(this);
case  1 :
return _STAR___2260.call(this,x);
case  2 :
return _STAR___2261.call(this,x,y);
default:
return _STAR___2262.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___2262.cljs$lang$applyTo;
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
var _SLASH___2266 = (function (x){
return (1 / x);
});
var _SLASH___2267 = (function (x,y){
return (x / y);
});
var _SLASH___2268 = (function() { 
var G__2270__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__2270 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2270__delegate.call(this, x, y, more);
};
G__2270.cljs$lang$maxFixedArity = 2;
G__2270.cljs$lang$applyTo = (function (arglist__2271){
var x = cljs.core.first(arglist__2271);
var y = cljs.core.first(cljs.core.next(arglist__2271));
var more = cljs.core.rest(cljs.core.next(arglist__2271));
return G__2270__delegate.call(null, x, y, more);
});
return G__2270;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___2266.call(this,x);
case  2 :
return _SLASH___2267.call(this,x,y);
default:
return _SLASH___2268.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___2268.cljs$lang$applyTo;
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
var _LT___2272 = (function (x){
return true;
});
var _LT___2273 = (function (x,y){
return (x < y);
});
var _LT___2274 = (function() { 
var G__2276__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_LT_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__2277 = y;
var G__2278 = cljs.core.first.call(null,more);
var G__2279 = cljs.core.next.call(null,more);
x = G__2277;
y = G__2278;
more = G__2279;
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
var G__2276 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2276__delegate.call(this, x, y, more);
};
G__2276.cljs$lang$maxFixedArity = 2;
G__2276.cljs$lang$applyTo = (function (arglist__2280){
var x = cljs.core.first(arglist__2280);
var y = cljs.core.first(cljs.core.next(arglist__2280));
var more = cljs.core.rest(cljs.core.next(arglist__2280));
return G__2276__delegate.call(null, x, y, more);
});
return G__2276;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___2272.call(this,x);
case  2 :
return _LT___2273.call(this,x,y);
default:
return _LT___2274.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___2274.cljs$lang$applyTo;
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
var _LT__EQ___2281 = (function (x){
return true;
});
var _LT__EQ___2282 = (function (x,y){
return (x <= y);
});
var _LT__EQ___2283 = (function() { 
var G__2285__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_LT__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__2286 = y;
var G__2287 = cljs.core.first.call(null,more);
var G__2288 = cljs.core.next.call(null,more);
x = G__2286;
y = G__2287;
more = G__2288;
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
var G__2285 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2285__delegate.call(this, x, y, more);
};
G__2285.cljs$lang$maxFixedArity = 2;
G__2285.cljs$lang$applyTo = (function (arglist__2289){
var x = cljs.core.first(arglist__2289);
var y = cljs.core.first(cljs.core.next(arglist__2289));
var more = cljs.core.rest(cljs.core.next(arglist__2289));
return G__2285__delegate.call(null, x, y, more);
});
return G__2285;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___2281.call(this,x);
case  2 :
return _LT__EQ___2282.call(this,x,y);
default:
return _LT__EQ___2283.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___2283.cljs$lang$applyTo;
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
var _GT___2290 = (function (x){
return true;
});
var _GT___2291 = (function (x,y){
return (x > y);
});
var _GT___2292 = (function() { 
var G__2294__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_GT_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__2295 = y;
var G__2296 = cljs.core.first.call(null,more);
var G__2297 = cljs.core.next.call(null,more);
x = G__2295;
y = G__2296;
more = G__2297;
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
var G__2294 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2294__delegate.call(this, x, y, more);
};
G__2294.cljs$lang$maxFixedArity = 2;
G__2294.cljs$lang$applyTo = (function (arglist__2298){
var x = cljs.core.first(arglist__2298);
var y = cljs.core.first(cljs.core.next(arglist__2298));
var more = cljs.core.rest(cljs.core.next(arglist__2298));
return G__2294__delegate.call(null, x, y, more);
});
return G__2294;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___2290.call(this,x);
case  2 :
return _GT___2291.call(this,x,y);
default:
return _GT___2292.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___2292.cljs$lang$applyTo;
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
var _GT__EQ___2299 = (function (x){
return true;
});
var _GT__EQ___2300 = (function (x,y){
return (x >= y);
});
var _GT__EQ___2301 = (function() { 
var G__2303__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_GT__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__2304 = y;
var G__2305 = cljs.core.first.call(null,more);
var G__2306 = cljs.core.next.call(null,more);
x = G__2304;
y = G__2305;
more = G__2306;
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
var G__2303 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2303__delegate.call(this, x, y, more);
};
G__2303.cljs$lang$maxFixedArity = 2;
G__2303.cljs$lang$applyTo = (function (arglist__2307){
var x = cljs.core.first(arglist__2307);
var y = cljs.core.first(cljs.core.next(arglist__2307));
var more = cljs.core.rest(cljs.core.next(arglist__2307));
return G__2303__delegate.call(null, x, y, more);
});
return G__2303;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___2299.call(this,x);
case  2 :
return _GT__EQ___2300.call(this,x,y);
default:
return _GT__EQ___2301.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___2301.cljs$lang$applyTo;
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
var max__2308 = (function (x){
return x;
});
var max__2309 = (function (x,y){
return ((x > y) ? x : y);
});
var max__2310 = (function() { 
var G__2312__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,max.call(null,x,y),more);
};
var G__2312 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2312__delegate.call(this, x, y, more);
};
G__2312.cljs$lang$maxFixedArity = 2;
G__2312.cljs$lang$applyTo = (function (arglist__2313){
var x = cljs.core.first(arglist__2313);
var y = cljs.core.first(cljs.core.next(arglist__2313));
var more = cljs.core.rest(cljs.core.next(arglist__2313));
return G__2312__delegate.call(null, x, y, more);
});
return G__2312;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__2308.call(this,x);
case  2 :
return max__2309.call(this,x,y);
default:
return max__2310.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__2310.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__2314 = (function (x){
return x;
});
var min__2315 = (function (x,y){
return ((x < y) ? x : y);
});
var min__2316 = (function() { 
var G__2318__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,min.call(null,x,y),more);
};
var G__2318 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2318__delegate.call(this, x, y, more);
};
G__2318.cljs$lang$maxFixedArity = 2;
G__2318.cljs$lang$applyTo = (function (arglist__2319){
var x = cljs.core.first(arglist__2319);
var y = cljs.core.first(cljs.core.next(arglist__2319));
var more = cljs.core.rest(cljs.core.next(arglist__2319));
return G__2318__delegate.call(null, x, y, more);
});
return G__2318;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__2314.call(this,x);
case  2 :
return min__2315.call(this,x,y);
default:
return min__2316.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__2316.cljs$lang$applyTo;
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
var rem__2320 = cljs.core.mod.call(null,n,d);

return cljs.core.fix.call(null,((n - rem__2320) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__2321 = cljs.core.quot.call(null,n,d);

return (n - (d * q__2321));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__2322 = (function (){
return Math.random.call(null);
});
var rand__2323 = (function (n){
return cljs.core._STAR_.call(null,n,rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__2322.call(this);
case  1 :
return rand__2323.call(this,n);
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
var _EQ__EQ___2325 = (function (x){
return true;
});
var _EQ__EQ___2326 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___2327 = (function() { 
var G__2329__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__2330 = y;
var G__2331 = cljs.core.first.call(null,more);
var G__2332 = cljs.core.next.call(null,more);
x = G__2330;
y = G__2331;
more = G__2332;
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
var G__2329 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2329__delegate.call(this, x, y, more);
};
G__2329.cljs$lang$maxFixedArity = 2;
G__2329.cljs$lang$applyTo = (function (arglist__2333){
var x = cljs.core.first(arglist__2333);
var y = cljs.core.first(cljs.core.next(arglist__2333));
var more = cljs.core.rest(cljs.core.next(arglist__2333));
return G__2329__delegate.call(null, x, y, more);
});
return G__2329;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___2325.call(this,x);
case  2 :
return _EQ__EQ___2326.call(this,x,y);
default:
return _EQ__EQ___2327.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___2327.cljs$lang$applyTo;
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
var n__2334 = n;
var xs__2335 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3574__auto____2336 = xs__2335;

if(cljs.core.truth_(and__3574__auto____2336))
{return cljs.core.pos_QMARK_.call(null,n__2334);
} else
{return and__3574__auto____2336;
}
})()))
{{
var G__2337 = cljs.core.dec.call(null,n__2334);
var G__2338 = cljs.core.next.call(null,xs__2335);
n__2334 = G__2337;
xs__2335 = G__2338;
continue;
}
} else
{return xs__2335;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__2343 = null;
var G__2343__2344 = (function (coll,n){
var temp__3723__auto____2339 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3723__auto____2339))
{var xs__2340 = temp__3723__auto____2339;

return cljs.core.first.call(null,xs__2340);
} else
{throw "Index out of bounds";
}
});
var G__2343__2345 = (function (coll,n,not_found){
var temp__3723__auto____2341 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3723__auto____2341))
{var xs__2342 = temp__3723__auto____2341;

return cljs.core.first.call(null,xs__2342);
} else
{return not_found;
}
});
G__2343 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__2343__2344.call(this,coll,n);
case  3 :
return G__2343__2345.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2343;
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
var str__2347 = (function (){
return "";
});
var str__2348 = (function (x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return "";
} else
{return x.toString();
}
});
var str__2349 = (function() { 
var G__2351__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__2352 = sb.append(str.call(null,cljs.core.first.call(null,more)));
var G__2353 = cljs.core.next.call(null,more);
sb = G__2352;
more = G__2353;
continue;
}
} else
{return str.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str.call(null,x))),ys);
};
var G__2351 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__2351__delegate.call(this, x, ys);
};
G__2351.cljs$lang$maxFixedArity = 1;
G__2351.cljs$lang$applyTo = (function (arglist__2354){
var x = cljs.core.first(arglist__2354);
var ys = cljs.core.rest(arglist__2354);
return G__2351__delegate.call(null, x, ys);
});
return G__2351;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__2347.call(this);
case  1 :
return str__2348.call(this,x);
default:
return str__2349.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__2349.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__2355 = (function (s,start){
return s.substring(start);
});
var subs__2356 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__2355.call(this,s,start);
case  3 :
return subs__2356.call(this,s,start,end);
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
var symbol__2358 = (function (name){
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
var symbol__2359 = (function (ns,name){
return symbol.call(null,cljs.core.str.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__2358.call(this,ns);
case  2 :
return symbol__2359.call(this,ns,name);
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
var keyword__2361 = (function (name){
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
var keyword__2362 = (function (ns,name){
return keyword.call(null,cljs.core.str.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__2361.call(this,ns);
case  2 :
return keyword__2362.call(this,ns,name);
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
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__2364 = cljs.core.seq.call(null,x);
var ys__2365 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,xs__2364)))
{return cljs.core.nil_QMARK_.call(null,ys__2365);
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,ys__2365)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__2364),cljs.core.first.call(null,ys__2365))))
{{
var G__2366 = cljs.core.next.call(null,xs__2364);
var G__2367 = cljs.core.next.call(null,ys__2365);
xs__2364 = G__2366;
ys__2365 = G__2367;
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
return cljs.core.reduce.call(null,(function (p1__2368_SHARP_,p2__2369_SHARP_){
return cljs.core.hash_combine.call(null,p1__2368_SHARP_,cljs.core.hash.call(null,p2__2369_SHARP_));
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
var this__2370 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__2371 = this;
return (new cljs.core.List(this__2371.meta,o,coll,cljs.core.inc.call(null,this__2371.count)));
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__2372 = this;
return this__2372.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__2373 = this;
return this__2373.rest;
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__2374 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__2375 = this;
return this__2375.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__2376 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__2377 = this;
return (new cljs.core.List(meta,this__2377.first,this__2377.rest,this__2377.count));
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__2378 = this;
return cljs.core.List.EMPTY;
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__2379 = this;
return this__2379.meta;
});
cljs.core.List.prototype.cljs$core$IHash$ = true;
cljs.core.List.prototype.cljs$core$IHash$_hash = (function (coll){
var this__2380 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__2381 = this;
return this__2381.count;
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
var this__2382 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__2383 = this;
return (new cljs.core.List(this__2383.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__2384 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__2385 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__2386 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__2387 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__2388 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__2389 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__2390 = this;
return coll;
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__2391 = this;
return this__2391.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IHash$ = true;
cljs.core.EmptyList.prototype.cljs$core$IHash$_hash = (function (coll){
var this__2392 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__2393 = this;
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
list.cljs$lang$applyTo = (function (arglist__2394){
var items = cljs.core.seq( arglist__2394 );;
return list__delegate.call(null, items);
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
var this__2395 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__2396 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__2397 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__2398 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__2398.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__2399 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__2400 = this;
return this__2400.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__2401 = this;
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__2401.rest)))
{return cljs.core.List.EMPTY;
} else
{return this__2401.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__2402 = this;
return this__2402.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__2403 = this;
return (new cljs.core.Cons(meta,this__2403.first,this__2403.rest));
});
/**
* Returns a new seq where x is the first element and seq is the rest.
*/
cljs.core.cons = (function cons(x,seq){
return (new cljs.core.Cons(null,x,seq));
});
(cljs.core.IReduce["string"] = true);
(cljs.core._reduce["string"] = (function() {
var G__2404 = null;
var G__2404__2405 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__2404__2406 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__2404 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__2404__2405.call(this,string,f);
case  3 :
return G__2404__2406.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2404;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__2408 = null;
var G__2408__2409 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__2408__2410 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__2408 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__2408__2409.call(this,string,k);
case  3 :
return G__2408__2410.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2408;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__2412 = null;
var G__2412__2413 = (function (string,n){
if(cljs.core.truth_(cljs.core._LT_.call(null,n,cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__2412__2414 = (function (string,n,not_found){
if(cljs.core.truth_(cljs.core._LT_.call(null,n,cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__2412 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__2412__2413.call(this,string,n);
case  3 :
return G__2412__2414.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2412;
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
var G__2416 = null;
var G__2416__2417 = (function (_,coll){
return cljs.core.get.call(null,coll,this.toString());
});
var G__2416__2418 = (function (_,coll,not_found){
return cljs.core.get.call(null,coll,this.toString(),not_found);
});
G__2416 = function(_,coll,not_found){
switch(arguments.length){
case  2 :
return G__2416__2417.call(this,_,coll);
case  3 :
return G__2416__2418.call(this,_,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2416;
})()
;
cljs.core.lazy_seq_value = (function lazy_seq_value(lazy_seq){
var x__2420 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__2420;
} else
{lazy_seq.x = x__2420.call(null);
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
var this__2421 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__2422 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__2423 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__2424 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__2424.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__2425 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__2426 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__2427 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__2428 = this;
return this__2428.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__2429 = this;
return (new cljs.core.LazySeq(meta,this__2429.realized,this__2429.x));
});
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__2430 = cljs.core.array.call(null);

var s__2431 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__2431)))
{ary__2430.push(cljs.core.first.call(null,s__2431));
{
var G__2432 = cljs.core.next.call(null,s__2431);
s__2431 = G__2432;
continue;
}
} else
{return ary__2430;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__2433 = s;
var i__2434 = n;
var sum__2435 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3574__auto____2436 = cljs.core.pos_QMARK_.call(null,i__2434);

if(cljs.core.truth_(and__3574__auto____2436))
{return cljs.core.seq.call(null,s__2433);
} else
{return and__3574__auto____2436;
}
})()))
{{
var G__2437 = cljs.core.next.call(null,s__2433);
var G__2438 = cljs.core.dec.call(null,i__2434);
var G__2439 = cljs.core.inc.call(null,sum__2435);
s__2433 = G__2437;
i__2434 = G__2438;
sum__2435 = G__2439;
continue;
}
} else
{return sum__2435;
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
var concat__2443 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__2444 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__2445 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__2440 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__2440))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__2440),concat.call(null,cljs.core.rest.call(null,s__2440),y));
} else
{return y;
}
})));
});
var concat__2446 = (function() { 
var G__2448__delegate = function (x,y,zs){
var cat__2442 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__2441 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__2441))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__2441),cat.call(null,cljs.core.rest.call(null,xys__2441),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__2442.call(null,concat.call(null,x,y),zs);
};
var G__2448 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2448__delegate.call(this, x, y, zs);
};
G__2448.cljs$lang$maxFixedArity = 2;
G__2448.cljs$lang$applyTo = (function (arglist__2449){
var x = cljs.core.first(arglist__2449);
var y = cljs.core.first(cljs.core.next(arglist__2449));
var zs = cljs.core.rest(cljs.core.next(arglist__2449));
return G__2448__delegate.call(null, x, y, zs);
});
return G__2448;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__2443.call(this);
case  1 :
return concat__2444.call(this,x);
case  2 :
return concat__2445.call(this,x,y);
default:
return concat__2446.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__2446.cljs$lang$applyTo;
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
var list_STAR___2450 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___2451 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___2452 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___2453 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___2454 = (function() { 
var G__2456__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__2456 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__2456__delegate.call(this, a, b, c, d, more);
};
G__2456.cljs$lang$maxFixedArity = 4;
G__2456.cljs$lang$applyTo = (function (arglist__2457){
var a = cljs.core.first(arglist__2457);
var b = cljs.core.first(cljs.core.next(arglist__2457));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2457)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2457))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2457))));
return G__2456__delegate.call(null, a, b, c, d, more);
});
return G__2456;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___2450.call(this,a);
case  2 :
return list_STAR___2451.call(this,a,b);
case  3 :
return list_STAR___2452.call(this,a,b,c);
case  4 :
return list_STAR___2453.call(this,a,b,c,d);
default:
return list_STAR___2454.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___2454.cljs$lang$applyTo;
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
var apply__2467 = (function (f,args){
var fixed_arity__2458 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_(cljs.core._LT__EQ_.call(null,cljs.core.bounded_count.call(null,args,cljs.core.inc.call(null,fixed_arity__2458)),fixed_arity__2458)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__2468 = (function (f,x,args){
var arglist__2459 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__2460 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_(cljs.core._LT__EQ_.call(null,cljs.core.bounded_count.call(null,arglist__2459,fixed_arity__2460),fixed_arity__2460)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__2459));
} else
{return f.cljs$lang$applyTo(arglist__2459);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__2459));
}
});
var apply__2469 = (function (f,x,y,args){
var arglist__2461 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__2462 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_(cljs.core._LT__EQ_.call(null,cljs.core.bounded_count.call(null,arglist__2461,fixed_arity__2462),fixed_arity__2462)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__2461));
} else
{return f.cljs$lang$applyTo(arglist__2461);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__2461));
}
});
var apply__2470 = (function (f,x,y,z,args){
var arglist__2463 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__2464 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_(cljs.core._LT__EQ_.call(null,cljs.core.bounded_count.call(null,arglist__2463,fixed_arity__2464),fixed_arity__2464)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__2463));
} else
{return f.cljs$lang$applyTo(arglist__2463);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__2463));
}
});
var apply__2471 = (function() { 
var G__2473__delegate = function (f,a,b,c,d,args){
var arglist__2465 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__2466 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_(cljs.core._LT__EQ_.call(null,cljs.core.bounded_count.call(null,arglist__2465,fixed_arity__2466),fixed_arity__2466)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__2465));
} else
{return f.cljs$lang$applyTo(arglist__2465);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__2465));
}
};
var G__2473 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__2473__delegate.call(this, f, a, b, c, d, args);
};
G__2473.cljs$lang$maxFixedArity = 5;
G__2473.cljs$lang$applyTo = (function (arglist__2474){
var f = cljs.core.first(arglist__2474);
var a = cljs.core.first(cljs.core.next(arglist__2474));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2474)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2474))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2474)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2474)))));
return G__2473__delegate.call(null, f, a, b, c, d, args);
});
return G__2473;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__2467.call(this,f,a);
case  3 :
return apply__2468.call(this,f,a,b);
case  4 :
return apply__2469.call(this,f,a,b,c);
case  5 :
return apply__2470.call(this,f,a,b,c,d);
default:
return apply__2471.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__2471.cljs$lang$applyTo;
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
vary_meta.cljs$lang$applyTo = (function (arglist__2475){
var obj = cljs.core.first(arglist__2475);
var f = cljs.core.first(cljs.core.next(arglist__2475));
var args = cljs.core.rest(cljs.core.next(arglist__2475));
return vary_meta__delegate.call(null, obj, f, args);
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
var not_EQ___2476 = (function (x){
return false;
});
var not_EQ___2477 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___2478 = (function() { 
var G__2480__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__2480 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2480__delegate.call(this, x, y, more);
};
G__2480.cljs$lang$maxFixedArity = 2;
G__2480.cljs$lang$applyTo = (function (arglist__2481){
var x = cljs.core.first(arglist__2481);
var y = cljs.core.first(cljs.core.next(arglist__2481));
var more = cljs.core.rest(cljs.core.next(arglist__2481));
return G__2480__delegate.call(null, x, y, more);
});
return G__2480;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___2476.call(this,x);
case  2 :
return not_EQ___2477.call(this,x,y);
default:
return not_EQ___2478.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___2478.cljs$lang$applyTo;
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
var G__2482 = pred;
var G__2483 = cljs.core.next.call(null,coll);
pred = G__2482;
coll = G__2483;
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
{var or__3576__auto____2484 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3576__auto____2484))
{return or__3576__auto____2484;
} else
{{
var G__2485 = pred;
var G__2486 = cljs.core.next.call(null,coll);
pred = G__2485;
coll = G__2486;
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
var G__2487 = null;
var G__2487__2488 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__2487__2489 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__2487__2490 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__2487__2491 = (function() { 
var G__2493__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__2493 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2493__delegate.call(this, x, y, zs);
};
G__2493.cljs$lang$maxFixedArity = 2;
G__2493.cljs$lang$applyTo = (function (arglist__2494){
var x = cljs.core.first(arglist__2494);
var y = cljs.core.first(cljs.core.next(arglist__2494));
var zs = cljs.core.rest(cljs.core.next(arglist__2494));
return G__2493__delegate.call(null, x, y, zs);
});
return G__2493;
})()
;
G__2487 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__2487__2488.call(this);
case  1 :
return G__2487__2489.call(this,x);
case  2 :
return G__2487__2490.call(this,x,y);
default:
return G__2487__2491.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__2487.cljs$lang$maxFixedArity = 2;
G__2487.cljs$lang$applyTo = G__2487__2491.cljs$lang$applyTo;
return G__2487;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__2495__delegate = function (args){
return x;
};
var G__2495 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__2495__delegate.call(this, args);
};
G__2495.cljs$lang$maxFixedArity = 0;
G__2495.cljs$lang$applyTo = (function (arglist__2496){
var args = cljs.core.seq( arglist__2496 );;
return G__2495__delegate.call(null, args);
});
return G__2495;
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
var comp__2500 = (function (){
return cljs.core.identity;
});
var comp__2501 = (function (f){
return f;
});
var comp__2502 = (function (f,g){
return (function() {
var G__2506 = null;
var G__2506__2507 = (function (){
return f.call(null,g.call(null));
});
var G__2506__2508 = (function (x){
return f.call(null,g.call(null,x));
});
var G__2506__2509 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__2506__2510 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__2506__2511 = (function() { 
var G__2513__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__2513 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2513__delegate.call(this, x, y, z, args);
};
G__2513.cljs$lang$maxFixedArity = 3;
G__2513.cljs$lang$applyTo = (function (arglist__2514){
var x = cljs.core.first(arglist__2514);
var y = cljs.core.first(cljs.core.next(arglist__2514));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2514)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2514)));
return G__2513__delegate.call(null, x, y, z, args);
});
return G__2513;
})()
;
G__2506 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__2506__2507.call(this);
case  1 :
return G__2506__2508.call(this,x);
case  2 :
return G__2506__2509.call(this,x,y);
case  3 :
return G__2506__2510.call(this,x,y,z);
default:
return G__2506__2511.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__2506.cljs$lang$maxFixedArity = 3;
G__2506.cljs$lang$applyTo = G__2506__2511.cljs$lang$applyTo;
return G__2506;
})()
});
var comp__2503 = (function (f,g,h){
return (function() {
var G__2515 = null;
var G__2515__2516 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__2515__2517 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__2515__2518 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__2515__2519 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__2515__2520 = (function() { 
var G__2522__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__2522 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2522__delegate.call(this, x, y, z, args);
};
G__2522.cljs$lang$maxFixedArity = 3;
G__2522.cljs$lang$applyTo = (function (arglist__2523){
var x = cljs.core.first(arglist__2523);
var y = cljs.core.first(cljs.core.next(arglist__2523));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2523)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2523)));
return G__2522__delegate.call(null, x, y, z, args);
});
return G__2522;
})()
;
G__2515 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__2515__2516.call(this);
case  1 :
return G__2515__2517.call(this,x);
case  2 :
return G__2515__2518.call(this,x,y);
case  3 :
return G__2515__2519.call(this,x,y,z);
default:
return G__2515__2520.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__2515.cljs$lang$maxFixedArity = 3;
G__2515.cljs$lang$applyTo = G__2515__2520.cljs$lang$applyTo;
return G__2515;
})()
});
var comp__2504 = (function() { 
var G__2524__delegate = function (f1,f2,f3,fs){
var fs__2497 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__2525__delegate = function (args){
var ret__2498 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__2497),args);
var fs__2499 = cljs.core.next.call(null,fs__2497);

while(true){
if(cljs.core.truth_(fs__2499))
{{
var G__2526 = cljs.core.first.call(null,fs__2499).call(null,ret__2498);
var G__2527 = cljs.core.next.call(null,fs__2499);
ret__2498 = G__2526;
fs__2499 = G__2527;
continue;
}
} else
{return ret__2498;
}
break;
}
};
var G__2525 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__2525__delegate.call(this, args);
};
G__2525.cljs$lang$maxFixedArity = 0;
G__2525.cljs$lang$applyTo = (function (arglist__2528){
var args = cljs.core.seq( arglist__2528 );;
return G__2525__delegate.call(null, args);
});
return G__2525;
})()
;
};
var G__2524 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2524__delegate.call(this, f1, f2, f3, fs);
};
G__2524.cljs$lang$maxFixedArity = 3;
G__2524.cljs$lang$applyTo = (function (arglist__2529){
var f1 = cljs.core.first(arglist__2529);
var f2 = cljs.core.first(cljs.core.next(arglist__2529));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2529)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2529)));
return G__2524__delegate.call(null, f1, f2, f3, fs);
});
return G__2524;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__2500.call(this);
case  1 :
return comp__2501.call(this,f1);
case  2 :
return comp__2502.call(this,f1,f2);
case  3 :
return comp__2503.call(this,f1,f2,f3);
default:
return comp__2504.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__2504.cljs$lang$applyTo;
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
var partial__2530 = (function (f,arg1){
return (function() { 
var G__2535__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__2535 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__2535__delegate.call(this, args);
};
G__2535.cljs$lang$maxFixedArity = 0;
G__2535.cljs$lang$applyTo = (function (arglist__2536){
var args = cljs.core.seq( arglist__2536 );;
return G__2535__delegate.call(null, args);
});
return G__2535;
})()
;
});
var partial__2531 = (function (f,arg1,arg2){
return (function() { 
var G__2537__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__2537 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__2537__delegate.call(this, args);
};
G__2537.cljs$lang$maxFixedArity = 0;
G__2537.cljs$lang$applyTo = (function (arglist__2538){
var args = cljs.core.seq( arglist__2538 );;
return G__2537__delegate.call(null, args);
});
return G__2537;
})()
;
});
var partial__2532 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__2539__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__2539 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__2539__delegate.call(this, args);
};
G__2539.cljs$lang$maxFixedArity = 0;
G__2539.cljs$lang$applyTo = (function (arglist__2540){
var args = cljs.core.seq( arglist__2540 );;
return G__2539__delegate.call(null, args);
});
return G__2539;
})()
;
});
var partial__2533 = (function() { 
var G__2541__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__2542__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__2542 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__2542__delegate.call(this, args);
};
G__2542.cljs$lang$maxFixedArity = 0;
G__2542.cljs$lang$applyTo = (function (arglist__2543){
var args = cljs.core.seq( arglist__2543 );;
return G__2542__delegate.call(null, args);
});
return G__2542;
})()
;
};
var G__2541 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__2541__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__2541.cljs$lang$maxFixedArity = 4;
G__2541.cljs$lang$applyTo = (function (arglist__2544){
var f = cljs.core.first(arglist__2544);
var arg1 = cljs.core.first(cljs.core.next(arglist__2544));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2544)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2544))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2544))));
return G__2541__delegate.call(null, f, arg1, arg2, arg3, more);
});
return G__2541;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__2530.call(this,f,arg1);
case  3 :
return partial__2531.call(this,f,arg1,arg2);
case  4 :
return partial__2532.call(this,f,arg1,arg2,arg3);
default:
return partial__2533.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__2533.cljs$lang$applyTo;
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
var fnil__2545 = (function (f,x){
return (function() {
var G__2549 = null;
var G__2549__2550 = (function (a){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a));
});
var G__2549__2551 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b);
});
var G__2549__2552 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c);
});
var G__2549__2553 = (function() { 
var G__2555__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c,ds);
};
var G__2555 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2555__delegate.call(this, a, b, c, ds);
};
G__2555.cljs$lang$maxFixedArity = 3;
G__2555.cljs$lang$applyTo = (function (arglist__2556){
var a = cljs.core.first(arglist__2556);
var b = cljs.core.first(cljs.core.next(arglist__2556));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2556)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2556)));
return G__2555__delegate.call(null, a, b, c, ds);
});
return G__2555;
})()
;
G__2549 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__2549__2550.call(this,a);
case  2 :
return G__2549__2551.call(this,a,b);
case  3 :
return G__2549__2552.call(this,a,b,c);
default:
return G__2549__2553.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__2549.cljs$lang$maxFixedArity = 3;
G__2549.cljs$lang$applyTo = G__2549__2553.cljs$lang$applyTo;
return G__2549;
})()
});
var fnil__2546 = (function (f,x,y){
return (function() {
var G__2557 = null;
var G__2557__2558 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__2557__2559 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c);
});
var G__2557__2560 = (function() { 
var G__2562__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c,ds);
};
var G__2562 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2562__delegate.call(this, a, b, c, ds);
};
G__2562.cljs$lang$maxFixedArity = 3;
G__2562.cljs$lang$applyTo = (function (arglist__2563){
var a = cljs.core.first(arglist__2563);
var b = cljs.core.first(cljs.core.next(arglist__2563));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2563)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2563)));
return G__2562__delegate.call(null, a, b, c, ds);
});
return G__2562;
})()
;
G__2557 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__2557__2558.call(this,a,b);
case  3 :
return G__2557__2559.call(this,a,b,c);
default:
return G__2557__2560.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__2557.cljs$lang$maxFixedArity = 3;
G__2557.cljs$lang$applyTo = G__2557__2560.cljs$lang$applyTo;
return G__2557;
})()
});
var fnil__2547 = (function (f,x,y,z){
return (function() {
var G__2564 = null;
var G__2564__2565 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__2564__2566 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c));
});
var G__2564__2567 = (function() { 
var G__2569__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c),ds);
};
var G__2569 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2569__delegate.call(this, a, b, c, ds);
};
G__2569.cljs$lang$maxFixedArity = 3;
G__2569.cljs$lang$applyTo = (function (arglist__2570){
var a = cljs.core.first(arglist__2570);
var b = cljs.core.first(cljs.core.next(arglist__2570));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2570)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2570)));
return G__2569__delegate.call(null, a, b, c, ds);
});
return G__2569;
})()
;
G__2564 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__2564__2565.call(this,a,b);
case  3 :
return G__2564__2566.call(this,a,b,c);
default:
return G__2564__2567.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__2564.cljs$lang$maxFixedArity = 3;
G__2564.cljs$lang$applyTo = G__2564__2567.cljs$lang$applyTo;
return G__2564;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__2545.call(this,f,x);
case  3 :
return fnil__2546.call(this,f,x,y);
case  4 :
return fnil__2547.call(this,f,x,y,z);
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
var mapi__2573 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____2571 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____2571))
{var s__2572 = temp__3726__auto____2571;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__2572)),mpi.call(null,cljs.core.inc.call(null,idx),cljs.core.rest.call(null,s__2572)));
} else
{return null;
}
})));
});

return mapi__2573.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____2574 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____2574))
{var s__2575 = temp__3726__auto____2574;

var x__2576 = f.call(null,cljs.core.first.call(null,s__2575));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__2576)))
{return keep.call(null,f,cljs.core.rest.call(null,s__2575));
} else
{return cljs.core.cons.call(null,x__2576,keep.call(null,f,cljs.core.rest.call(null,s__2575)));
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
var keepi__2586 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____2583 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____2583))
{var s__2584 = temp__3726__auto____2583;

var x__2585 = f.call(null,idx,cljs.core.first.call(null,s__2584));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__2585)))
{return kpi.call(null,cljs.core.inc.call(null,idx),cljs.core.rest.call(null,s__2584));
} else
{return cljs.core.cons.call(null,x__2585,kpi.call(null,cljs.core.inc.call(null,idx),cljs.core.rest.call(null,s__2584)));
}
} else
{return null;
}
})));
});

return keepi__2586.call(null,0,coll);
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
var every_pred__2631 = (function (p){
return (function() {
var ep1 = null;
var ep1__2636 = (function (){
return true;
});
var ep1__2637 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__2638 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____2593 = p.call(null,x);

if(cljs.core.truth_(and__3574__auto____2593))
{return p.call(null,y);
} else
{return and__3574__auto____2593;
}
})());
});
var ep1__2639 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____2594 = p.call(null,x);

if(cljs.core.truth_(and__3574__auto____2594))
{var and__3574__auto____2595 = p.call(null,y);

if(cljs.core.truth_(and__3574__auto____2595))
{return p.call(null,z);
} else
{return and__3574__auto____2595;
}
} else
{return and__3574__auto____2594;
}
})());
});
var ep1__2640 = (function() { 
var G__2642__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____2596 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3574__auto____2596))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3574__auto____2596;
}
})());
};
var G__2642 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2642__delegate.call(this, x, y, z, args);
};
G__2642.cljs$lang$maxFixedArity = 3;
G__2642.cljs$lang$applyTo = (function (arglist__2643){
var x = cljs.core.first(arglist__2643);
var y = cljs.core.first(cljs.core.next(arglist__2643));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2643)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2643)));
return G__2642__delegate.call(null, x, y, z, args);
});
return G__2642;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__2636.call(this);
case  1 :
return ep1__2637.call(this,x);
case  2 :
return ep1__2638.call(this,x,y);
case  3 :
return ep1__2639.call(this,x,y,z);
default:
return ep1__2640.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__2640.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__2632 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__2644 = (function (){
return true;
});
var ep2__2645 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____2597 = p1.call(null,x);

if(cljs.core.truth_(and__3574__auto____2597))
{return p2.call(null,x);
} else
{return and__3574__auto____2597;
}
})());
});
var ep2__2646 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____2598 = p1.call(null,x);

if(cljs.core.truth_(and__3574__auto____2598))
{var and__3574__auto____2599 = p1.call(null,y);

if(cljs.core.truth_(and__3574__auto____2599))
{var and__3574__auto____2600 = p2.call(null,x);

if(cljs.core.truth_(and__3574__auto____2600))
{return p2.call(null,y);
} else
{return and__3574__auto____2600;
}
} else
{return and__3574__auto____2599;
}
} else
{return and__3574__auto____2598;
}
})());
});
var ep2__2647 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____2601 = p1.call(null,x);

if(cljs.core.truth_(and__3574__auto____2601))
{var and__3574__auto____2602 = p1.call(null,y);

if(cljs.core.truth_(and__3574__auto____2602))
{var and__3574__auto____2603 = p1.call(null,z);

if(cljs.core.truth_(and__3574__auto____2603))
{var and__3574__auto____2604 = p2.call(null,x);

if(cljs.core.truth_(and__3574__auto____2604))
{var and__3574__auto____2605 = p2.call(null,y);

if(cljs.core.truth_(and__3574__auto____2605))
{return p2.call(null,z);
} else
{return and__3574__auto____2605;
}
} else
{return and__3574__auto____2604;
}
} else
{return and__3574__auto____2603;
}
} else
{return and__3574__auto____2602;
}
} else
{return and__3574__auto____2601;
}
})());
});
var ep2__2648 = (function() { 
var G__2650__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____2606 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3574__auto____2606))
{return cljs.core.every_QMARK_.call(null,(function (p1__2577_SHARP_){
var and__3574__auto____2607 = p1.call(null,p1__2577_SHARP_);

if(cljs.core.truth_(and__3574__auto____2607))
{return p2.call(null,p1__2577_SHARP_);
} else
{return and__3574__auto____2607;
}
}),args);
} else
{return and__3574__auto____2606;
}
})());
};
var G__2650 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2650__delegate.call(this, x, y, z, args);
};
G__2650.cljs$lang$maxFixedArity = 3;
G__2650.cljs$lang$applyTo = (function (arglist__2651){
var x = cljs.core.first(arglist__2651);
var y = cljs.core.first(cljs.core.next(arglist__2651));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2651)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2651)));
return G__2650__delegate.call(null, x, y, z, args);
});
return G__2650;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__2644.call(this);
case  1 :
return ep2__2645.call(this,x);
case  2 :
return ep2__2646.call(this,x,y);
case  3 :
return ep2__2647.call(this,x,y,z);
default:
return ep2__2648.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__2648.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__2633 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__2652 = (function (){
return true;
});
var ep3__2653 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____2608 = p1.call(null,x);

if(cljs.core.truth_(and__3574__auto____2608))
{var and__3574__auto____2609 = p2.call(null,x);

if(cljs.core.truth_(and__3574__auto____2609))
{return p3.call(null,x);
} else
{return and__3574__auto____2609;
}
} else
{return and__3574__auto____2608;
}
})());
});
var ep3__2654 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____2610 = p1.call(null,x);

if(cljs.core.truth_(and__3574__auto____2610))
{var and__3574__auto____2611 = p2.call(null,x);

if(cljs.core.truth_(and__3574__auto____2611))
{var and__3574__auto____2612 = p3.call(null,x);

if(cljs.core.truth_(and__3574__auto____2612))
{var and__3574__auto____2613 = p1.call(null,y);

if(cljs.core.truth_(and__3574__auto____2613))
{var and__3574__auto____2614 = p2.call(null,y);

if(cljs.core.truth_(and__3574__auto____2614))
{return p3.call(null,y);
} else
{return and__3574__auto____2614;
}
} else
{return and__3574__auto____2613;
}
} else
{return and__3574__auto____2612;
}
} else
{return and__3574__auto____2611;
}
} else
{return and__3574__auto____2610;
}
})());
});
var ep3__2655 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____2615 = p1.call(null,x);

if(cljs.core.truth_(and__3574__auto____2615))
{var and__3574__auto____2616 = p2.call(null,x);

if(cljs.core.truth_(and__3574__auto____2616))
{var and__3574__auto____2617 = p3.call(null,x);

if(cljs.core.truth_(and__3574__auto____2617))
{var and__3574__auto____2618 = p1.call(null,y);

if(cljs.core.truth_(and__3574__auto____2618))
{var and__3574__auto____2619 = p2.call(null,y);

if(cljs.core.truth_(and__3574__auto____2619))
{var and__3574__auto____2620 = p3.call(null,y);

if(cljs.core.truth_(and__3574__auto____2620))
{var and__3574__auto____2621 = p1.call(null,z);

if(cljs.core.truth_(and__3574__auto____2621))
{var and__3574__auto____2622 = p2.call(null,z);

if(cljs.core.truth_(and__3574__auto____2622))
{return p3.call(null,z);
} else
{return and__3574__auto____2622;
}
} else
{return and__3574__auto____2621;
}
} else
{return and__3574__auto____2620;
}
} else
{return and__3574__auto____2619;
}
} else
{return and__3574__auto____2618;
}
} else
{return and__3574__auto____2617;
}
} else
{return and__3574__auto____2616;
}
} else
{return and__3574__auto____2615;
}
})());
});
var ep3__2656 = (function() { 
var G__2658__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____2623 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3574__auto____2623))
{return cljs.core.every_QMARK_.call(null,(function (p1__2578_SHARP_){
var and__3574__auto____2624 = p1.call(null,p1__2578_SHARP_);

if(cljs.core.truth_(and__3574__auto____2624))
{var and__3574__auto____2625 = p2.call(null,p1__2578_SHARP_);

if(cljs.core.truth_(and__3574__auto____2625))
{return p3.call(null,p1__2578_SHARP_);
} else
{return and__3574__auto____2625;
}
} else
{return and__3574__auto____2624;
}
}),args);
} else
{return and__3574__auto____2623;
}
})());
};
var G__2658 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2658__delegate.call(this, x, y, z, args);
};
G__2658.cljs$lang$maxFixedArity = 3;
G__2658.cljs$lang$applyTo = (function (arglist__2659){
var x = cljs.core.first(arglist__2659);
var y = cljs.core.first(cljs.core.next(arglist__2659));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2659)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2659)));
return G__2658__delegate.call(null, x, y, z, args);
});
return G__2658;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__2652.call(this);
case  1 :
return ep3__2653.call(this,x);
case  2 :
return ep3__2654.call(this,x,y);
case  3 :
return ep3__2655.call(this,x,y,z);
default:
return ep3__2656.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__2656.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__2634 = (function() { 
var G__2660__delegate = function (p1,p2,p3,ps){
var ps__2626 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__2661 = (function (){
return true;
});
var epn__2662 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__2579_SHARP_){
return p1__2579_SHARP_.call(null,x);
}),ps__2626);
});
var epn__2663 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__2580_SHARP_){
var and__3574__auto____2627 = p1__2580_SHARP_.call(null,x);

if(cljs.core.truth_(and__3574__auto____2627))
{return p1__2580_SHARP_.call(null,y);
} else
{return and__3574__auto____2627;
}
}),ps__2626);
});
var epn__2664 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__2581_SHARP_){
var and__3574__auto____2628 = p1__2581_SHARP_.call(null,x);

if(cljs.core.truth_(and__3574__auto____2628))
{var and__3574__auto____2629 = p1__2581_SHARP_.call(null,y);

if(cljs.core.truth_(and__3574__auto____2629))
{return p1__2581_SHARP_.call(null,z);
} else
{return and__3574__auto____2629;
}
} else
{return and__3574__auto____2628;
}
}),ps__2626);
});
var epn__2665 = (function() { 
var G__2667__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____2630 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3574__auto____2630))
{return cljs.core.every_QMARK_.call(null,(function (p1__2582_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__2582_SHARP_,args);
}),ps__2626);
} else
{return and__3574__auto____2630;
}
})());
};
var G__2667 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2667__delegate.call(this, x, y, z, args);
};
G__2667.cljs$lang$maxFixedArity = 3;
G__2667.cljs$lang$applyTo = (function (arglist__2668){
var x = cljs.core.first(arglist__2668);
var y = cljs.core.first(cljs.core.next(arglist__2668));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2668)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2668)));
return G__2667__delegate.call(null, x, y, z, args);
});
return G__2667;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__2661.call(this);
case  1 :
return epn__2662.call(this,x);
case  2 :
return epn__2663.call(this,x,y);
case  3 :
return epn__2664.call(this,x,y,z);
default:
return epn__2665.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__2665.cljs$lang$applyTo;
return epn;
})()
};
var G__2660 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2660__delegate.call(this, p1, p2, p3, ps);
};
G__2660.cljs$lang$maxFixedArity = 3;
G__2660.cljs$lang$applyTo = (function (arglist__2669){
var p1 = cljs.core.first(arglist__2669);
var p2 = cljs.core.first(cljs.core.next(arglist__2669));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2669)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2669)));
return G__2660__delegate.call(null, p1, p2, p3, ps);
});
return G__2660;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__2631.call(this,p1);
case  2 :
return every_pred__2632.call(this,p1,p2);
case  3 :
return every_pred__2633.call(this,p1,p2,p3);
default:
return every_pred__2634.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__2634.cljs$lang$applyTo;
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
var some_fn__2709 = (function (p){
return (function() {
var sp1 = null;
var sp1__2714 = (function (){
return null;
});
var sp1__2715 = (function (x){
return p.call(null,x);
});
var sp1__2716 = (function (x,y){
var or__3576__auto____2671 = p.call(null,x);

if(cljs.core.truth_(or__3576__auto____2671))
{return or__3576__auto____2671;
} else
{return p.call(null,y);
}
});
var sp1__2717 = (function (x,y,z){
var or__3576__auto____2672 = p.call(null,x);

if(cljs.core.truth_(or__3576__auto____2672))
{return or__3576__auto____2672;
} else
{var or__3576__auto____2673 = p.call(null,y);

if(cljs.core.truth_(or__3576__auto____2673))
{return or__3576__auto____2673;
} else
{return p.call(null,z);
}
}
});
var sp1__2718 = (function() { 
var G__2720__delegate = function (x,y,z,args){
var or__3576__auto____2674 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3576__auto____2674))
{return or__3576__auto____2674;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__2720 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2720__delegate.call(this, x, y, z, args);
};
G__2720.cljs$lang$maxFixedArity = 3;
G__2720.cljs$lang$applyTo = (function (arglist__2721){
var x = cljs.core.first(arglist__2721);
var y = cljs.core.first(cljs.core.next(arglist__2721));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2721)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2721)));
return G__2720__delegate.call(null, x, y, z, args);
});
return G__2720;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__2714.call(this);
case  1 :
return sp1__2715.call(this,x);
case  2 :
return sp1__2716.call(this,x,y);
case  3 :
return sp1__2717.call(this,x,y,z);
default:
return sp1__2718.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__2718.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__2710 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__2722 = (function (){
return null;
});
var sp2__2723 = (function (x){
var or__3576__auto____2675 = p1.call(null,x);

if(cljs.core.truth_(or__3576__auto____2675))
{return or__3576__auto____2675;
} else
{return p2.call(null,x);
}
});
var sp2__2724 = (function (x,y){
var or__3576__auto____2676 = p1.call(null,x);

if(cljs.core.truth_(or__3576__auto____2676))
{return or__3576__auto____2676;
} else
{var or__3576__auto____2677 = p1.call(null,y);

if(cljs.core.truth_(or__3576__auto____2677))
{return or__3576__auto____2677;
} else
{var or__3576__auto____2678 = p2.call(null,x);

if(cljs.core.truth_(or__3576__auto____2678))
{return or__3576__auto____2678;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__2725 = (function (x,y,z){
var or__3576__auto____2679 = p1.call(null,x);

if(cljs.core.truth_(or__3576__auto____2679))
{return or__3576__auto____2679;
} else
{var or__3576__auto____2680 = p1.call(null,y);

if(cljs.core.truth_(or__3576__auto____2680))
{return or__3576__auto____2680;
} else
{var or__3576__auto____2681 = p1.call(null,z);

if(cljs.core.truth_(or__3576__auto____2681))
{return or__3576__auto____2681;
} else
{var or__3576__auto____2682 = p2.call(null,x);

if(cljs.core.truth_(or__3576__auto____2682))
{return or__3576__auto____2682;
} else
{var or__3576__auto____2683 = p2.call(null,y);

if(cljs.core.truth_(or__3576__auto____2683))
{return or__3576__auto____2683;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__2726 = (function() { 
var G__2728__delegate = function (x,y,z,args){
var or__3576__auto____2684 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3576__auto____2684))
{return or__3576__auto____2684;
} else
{return cljs.core.some.call(null,(function (p1__2587_SHARP_){
var or__3576__auto____2685 = p1.call(null,p1__2587_SHARP_);

if(cljs.core.truth_(or__3576__auto____2685))
{return or__3576__auto____2685;
} else
{return p2.call(null,p1__2587_SHARP_);
}
}),args);
}
};
var G__2728 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2728__delegate.call(this, x, y, z, args);
};
G__2728.cljs$lang$maxFixedArity = 3;
G__2728.cljs$lang$applyTo = (function (arglist__2729){
var x = cljs.core.first(arglist__2729);
var y = cljs.core.first(cljs.core.next(arglist__2729));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2729)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2729)));
return G__2728__delegate.call(null, x, y, z, args);
});
return G__2728;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__2722.call(this);
case  1 :
return sp2__2723.call(this,x);
case  2 :
return sp2__2724.call(this,x,y);
case  3 :
return sp2__2725.call(this,x,y,z);
default:
return sp2__2726.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__2726.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__2711 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__2730 = (function (){
return null;
});
var sp3__2731 = (function (x){
var or__3576__auto____2686 = p1.call(null,x);

if(cljs.core.truth_(or__3576__auto____2686))
{return or__3576__auto____2686;
} else
{var or__3576__auto____2687 = p2.call(null,x);

if(cljs.core.truth_(or__3576__auto____2687))
{return or__3576__auto____2687;
} else
{return p3.call(null,x);
}
}
});
var sp3__2732 = (function (x,y){
var or__3576__auto____2688 = p1.call(null,x);

if(cljs.core.truth_(or__3576__auto____2688))
{return or__3576__auto____2688;
} else
{var or__3576__auto____2689 = p2.call(null,x);

if(cljs.core.truth_(or__3576__auto____2689))
{return or__3576__auto____2689;
} else
{var or__3576__auto____2690 = p3.call(null,x);

if(cljs.core.truth_(or__3576__auto____2690))
{return or__3576__auto____2690;
} else
{var or__3576__auto____2691 = p1.call(null,y);

if(cljs.core.truth_(or__3576__auto____2691))
{return or__3576__auto____2691;
} else
{var or__3576__auto____2692 = p2.call(null,y);

if(cljs.core.truth_(or__3576__auto____2692))
{return or__3576__auto____2692;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__2733 = (function (x,y,z){
var or__3576__auto____2693 = p1.call(null,x);

if(cljs.core.truth_(or__3576__auto____2693))
{return or__3576__auto____2693;
} else
{var or__3576__auto____2694 = p2.call(null,x);

if(cljs.core.truth_(or__3576__auto____2694))
{return or__3576__auto____2694;
} else
{var or__3576__auto____2695 = p3.call(null,x);

if(cljs.core.truth_(or__3576__auto____2695))
{return or__3576__auto____2695;
} else
{var or__3576__auto____2696 = p1.call(null,y);

if(cljs.core.truth_(or__3576__auto____2696))
{return or__3576__auto____2696;
} else
{var or__3576__auto____2697 = p2.call(null,y);

if(cljs.core.truth_(or__3576__auto____2697))
{return or__3576__auto____2697;
} else
{var or__3576__auto____2698 = p3.call(null,y);

if(cljs.core.truth_(or__3576__auto____2698))
{return or__3576__auto____2698;
} else
{var or__3576__auto____2699 = p1.call(null,z);

if(cljs.core.truth_(or__3576__auto____2699))
{return or__3576__auto____2699;
} else
{var or__3576__auto____2700 = p2.call(null,z);

if(cljs.core.truth_(or__3576__auto____2700))
{return or__3576__auto____2700;
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
var sp3__2734 = (function() { 
var G__2736__delegate = function (x,y,z,args){
var or__3576__auto____2701 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3576__auto____2701))
{return or__3576__auto____2701;
} else
{return cljs.core.some.call(null,(function (p1__2588_SHARP_){
var or__3576__auto____2702 = p1.call(null,p1__2588_SHARP_);

if(cljs.core.truth_(or__3576__auto____2702))
{return or__3576__auto____2702;
} else
{var or__3576__auto____2703 = p2.call(null,p1__2588_SHARP_);

if(cljs.core.truth_(or__3576__auto____2703))
{return or__3576__auto____2703;
} else
{return p3.call(null,p1__2588_SHARP_);
}
}
}),args);
}
};
var G__2736 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2736__delegate.call(this, x, y, z, args);
};
G__2736.cljs$lang$maxFixedArity = 3;
G__2736.cljs$lang$applyTo = (function (arglist__2737){
var x = cljs.core.first(arglist__2737);
var y = cljs.core.first(cljs.core.next(arglist__2737));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2737)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2737)));
return G__2736__delegate.call(null, x, y, z, args);
});
return G__2736;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__2730.call(this);
case  1 :
return sp3__2731.call(this,x);
case  2 :
return sp3__2732.call(this,x,y);
case  3 :
return sp3__2733.call(this,x,y,z);
default:
return sp3__2734.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__2734.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__2712 = (function() { 
var G__2738__delegate = function (p1,p2,p3,ps){
var ps__2704 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__2739 = (function (){
return null;
});
var spn__2740 = (function (x){
return cljs.core.some.call(null,(function (p1__2589_SHARP_){
return p1__2589_SHARP_.call(null,x);
}),ps__2704);
});
var spn__2741 = (function (x,y){
return cljs.core.some.call(null,(function (p1__2590_SHARP_){
var or__3576__auto____2705 = p1__2590_SHARP_.call(null,x);

if(cljs.core.truth_(or__3576__auto____2705))
{return or__3576__auto____2705;
} else
{return p1__2590_SHARP_.call(null,y);
}
}),ps__2704);
});
var spn__2742 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__2591_SHARP_){
var or__3576__auto____2706 = p1__2591_SHARP_.call(null,x);

if(cljs.core.truth_(or__3576__auto____2706))
{return or__3576__auto____2706;
} else
{var or__3576__auto____2707 = p1__2591_SHARP_.call(null,y);

if(cljs.core.truth_(or__3576__auto____2707))
{return or__3576__auto____2707;
} else
{return p1__2591_SHARP_.call(null,z);
}
}
}),ps__2704);
});
var spn__2743 = (function() { 
var G__2745__delegate = function (x,y,z,args){
var or__3576__auto____2708 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3576__auto____2708))
{return or__3576__auto____2708;
} else
{return cljs.core.some.call(null,(function (p1__2592_SHARP_){
return cljs.core.some.call(null,p1__2592_SHARP_,args);
}),ps__2704);
}
};
var G__2745 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2745__delegate.call(this, x, y, z, args);
};
G__2745.cljs$lang$maxFixedArity = 3;
G__2745.cljs$lang$applyTo = (function (arglist__2746){
var x = cljs.core.first(arglist__2746);
var y = cljs.core.first(cljs.core.next(arglist__2746));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2746)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2746)));
return G__2745__delegate.call(null, x, y, z, args);
});
return G__2745;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__2739.call(this);
case  1 :
return spn__2740.call(this,x);
case  2 :
return spn__2741.call(this,x,y);
case  3 :
return spn__2742.call(this,x,y,z);
default:
return spn__2743.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__2743.cljs$lang$applyTo;
return spn;
})()
};
var G__2738 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2738__delegate.call(this, p1, p2, p3, ps);
};
G__2738.cljs$lang$maxFixedArity = 3;
G__2738.cljs$lang$applyTo = (function (arglist__2747){
var p1 = cljs.core.first(arglist__2747);
var p2 = cljs.core.first(cljs.core.next(arglist__2747));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2747)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2747)));
return G__2738__delegate.call(null, p1, p2, p3, ps);
});
return G__2738;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__2709.call(this,p1);
case  2 :
return some_fn__2710.call(this,p1,p2);
case  3 :
return some_fn__2711.call(this,p1,p2,p3);
default:
return some_fn__2712.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__2712.cljs$lang$applyTo;
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
var map__2760 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____2748 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____2748))
{var s__2749 = temp__3726__auto____2748;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__2749)),map.call(null,f,cljs.core.rest.call(null,s__2749)));
} else
{return null;
}
})));
});
var map__2761 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__2750 = cljs.core.seq.call(null,c1);
var s2__2751 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3574__auto____2752 = s1__2750;

if(cljs.core.truth_(and__3574__auto____2752))
{return s2__2751;
} else
{return and__3574__auto____2752;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__2750),cljs.core.first.call(null,s2__2751)),map.call(null,f,cljs.core.rest.call(null,s1__2750),cljs.core.rest.call(null,s2__2751)));
} else
{return null;
}
})));
});
var map__2762 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__2753 = cljs.core.seq.call(null,c1);
var s2__2754 = cljs.core.seq.call(null,c2);
var s3__2755 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3574__auto____2756 = s1__2753;

if(cljs.core.truth_(and__3574__auto____2756))
{var and__3574__auto____2757 = s2__2754;

if(cljs.core.truth_(and__3574__auto____2757))
{return s3__2755;
} else
{return and__3574__auto____2757;
}
} else
{return and__3574__auto____2756;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__2753),cljs.core.first.call(null,s2__2754),cljs.core.first.call(null,s3__2755)),map.call(null,f,cljs.core.rest.call(null,s1__2753),cljs.core.rest.call(null,s2__2754),cljs.core.rest.call(null,s3__2755)));
} else
{return null;
}
})));
});
var map__2763 = (function() { 
var G__2765__delegate = function (f,c1,c2,c3,colls){
var step__2759 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__2758 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__2758)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__2758),step.call(null,map.call(null,cljs.core.rest,ss__2758)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__2670_SHARP_){
return cljs.core.apply.call(null,f,p1__2670_SHARP_);
}),step__2759.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__2765 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__2765__delegate.call(this, f, c1, c2, c3, colls);
};
G__2765.cljs$lang$maxFixedArity = 4;
G__2765.cljs$lang$applyTo = (function (arglist__2766){
var f = cljs.core.first(arglist__2766);
var c1 = cljs.core.first(cljs.core.next(arglist__2766));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2766)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2766))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2766))));
return G__2765__delegate.call(null, f, c1, c2, c3, colls);
});
return G__2765;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__2760.call(this,f,c1);
case  3 :
return map__2761.call(this,f,c1,c2);
case  4 :
return map__2762.call(this,f,c1,c2,c3);
default:
return map__2763.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__2763.cljs$lang$applyTo;
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
{var temp__3726__auto____2767 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____2767))
{var s__2768 = temp__3726__auto____2767;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__2768),take.call(null,cljs.core.dec.call(null,n),cljs.core.rest.call(null,s__2768)));
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
var step__2771 = (function (n,coll){
while(true){
var s__2769 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3574__auto____2770 = cljs.core.pos_QMARK_.call(null,n);

if(cljs.core.truth_(and__3574__auto____2770))
{return s__2769;
} else
{return and__3574__auto____2770;
}
})()))
{{
var G__2772 = cljs.core.dec.call(null,n);
var G__2773 = cljs.core.rest.call(null,s__2769);
n = G__2772;
coll = G__2773;
continue;
}
} else
{return s__2769;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__2771.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__2774 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__2775 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__2774.call(this,n);
case  2 :
return drop_last__2775.call(this,n,s);
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
var s__2777 = cljs.core.seq.call(null,coll);
var lead__2778 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__2778))
{{
var G__2779 = cljs.core.next.call(null,s__2777);
var G__2780 = cljs.core.next.call(null,lead__2778);
s__2777 = G__2779;
lead__2778 = G__2780;
continue;
}
} else
{return s__2777;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__2783 = (function (pred,coll){
while(true){
var s__2781 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3574__auto____2782 = s__2781;

if(cljs.core.truth_(and__3574__auto____2782))
{return pred.call(null,cljs.core.first.call(null,s__2781));
} else
{return and__3574__auto____2782;
}
})()))
{{
var G__2784 = pred;
var G__2785 = cljs.core.rest.call(null,s__2781);
pred = G__2784;
coll = G__2785;
continue;
}
} else
{return s__2781;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__2783.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____2786 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____2786))
{var s__2787 = temp__3726__auto____2786;

return cljs.core.concat.call(null,s__2787,cycle.call(null,s__2787));
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
var repeat__2788 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__2789 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__2788.call(this,n);
case  2 :
return repeat__2789.call(this,n,x);
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
var repeatedly__2791 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__2792 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__2791.call(this,n);
case  2 :
return repeatedly__2792.call(this,n,f);
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
var interleave__2798 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__2794 = cljs.core.seq.call(null,c1);
var s2__2795 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3574__auto____2796 = s1__2794;

if(cljs.core.truth_(and__3574__auto____2796))
{return s2__2795;
} else
{return and__3574__auto____2796;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__2794),cljs.core.cons.call(null,cljs.core.first.call(null,s2__2795),interleave.call(null,cljs.core.rest.call(null,s1__2794),cljs.core.rest.call(null,s2__2795))));
} else
{return null;
}
})));
});
var interleave__2799 = (function() { 
var G__2801__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__2797 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__2797)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__2797),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__2797)));
} else
{return null;
}
})));
};
var G__2801 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2801__delegate.call(this, c1, c2, colls);
};
G__2801.cljs$lang$maxFixedArity = 2;
G__2801.cljs$lang$applyTo = (function (arglist__2802){
var c1 = cljs.core.first(arglist__2802);
var c2 = cljs.core.first(cljs.core.next(arglist__2802));
var colls = cljs.core.rest(cljs.core.next(arglist__2802));
return G__2801__delegate.call(null, c1, c2, colls);
});
return G__2801;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__2798.call(this,c1,c2);
default:
return interleave__2799.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__2799.cljs$lang$applyTo;
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
var cat__2805 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3723__auto____2803 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3723__auto____2803))
{var coll__2804 = temp__3723__auto____2803;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__2804),cat.call(null,cljs.core.rest.call(null,coll__2804),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__2805.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__2806 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__2807 = (function() { 
var G__2809__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__2809 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2809__delegate.call(this, f, coll, colls);
};
G__2809.cljs$lang$maxFixedArity = 2;
G__2809.cljs$lang$applyTo = (function (arglist__2810){
var f = cljs.core.first(arglist__2810);
var coll = cljs.core.first(cljs.core.next(arglist__2810));
var colls = cljs.core.rest(cljs.core.next(arglist__2810));
return G__2809__delegate.call(null, f, coll, colls);
});
return G__2809;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__2806.call(this,f,coll);
default:
return mapcat__2807.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__2807.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____2811 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____2811))
{var s__2812 = temp__3726__auto____2811;

var f__2813 = cljs.core.first.call(null,s__2812);
var r__2814 = cljs.core.rest.call(null,s__2812);

if(cljs.core.truth_(pred.call(null,f__2813)))
{return cljs.core.cons.call(null,f__2813,filter.call(null,pred,r__2814));
} else
{return filter.call(null,pred,r__2814);
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
var walk__2816 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__2816.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__2815_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__2815_SHARP_));
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
var partition__2823 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__2824 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____2817 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____2817))
{var s__2818 = temp__3726__auto____2817;

var p__2819 = cljs.core.take.call(null,n,s__2818);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__2819))))
{return cljs.core.cons.call(null,p__2819,partition.call(null,n,step,cljs.core.drop.call(null,step,s__2818)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__2825 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____2820 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____2820))
{var s__2821 = temp__3726__auto____2820;

var p__2822 = cljs.core.take.call(null,n,s__2821);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__2822))))
{return cljs.core.cons.call(null,p__2822,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__2821)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__2822,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__2823.call(this,n,step);
case  3 :
return partition__2824.call(this,n,step,pad);
case  4 :
return partition__2825.call(this,n,step,pad,coll);
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
var get_in__2831 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__2832 = (function (m,ks,not_found){
var sentinel__2827 = cljs.core.lookup_sentinel;
var m__2828 = m;
var ks__2829 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__2829))
{var m__2830 = cljs.core.get.call(null,m__2828,cljs.core.first.call(null,ks__2829),sentinel__2827);

if(cljs.core.truth_(cljs.core.identical_QMARK_.call(null,sentinel__2827,m__2830)))
{return not_found;
} else
{{
var G__2834 = sentinel__2827;
var G__2835 = m__2830;
var G__2836 = cljs.core.next.call(null,ks__2829);
sentinel__2827 = G__2834;
m__2828 = G__2835;
ks__2829 = G__2836;
continue;
}
}
} else
{return m__2828;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__2831.call(this,m,ks);
case  3 :
return get_in__2832.call(this,m,ks,not_found);
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
cljs.core.assoc_in = (function assoc_in(m,p__2837,v){
var vec__2838__2839 = p__2837;
var k__2840 = cljs.core.nth.call(null,vec__2838__2839,0,null);
var ks__2841 = cljs.core.nthnext.call(null,vec__2838__2839,1);

if(cljs.core.truth_(ks__2841))
{return cljs.core.assoc.call(null,m,k__2840,assoc_in.call(null,cljs.core.get.call(null,m,k__2840),ks__2841,v));
} else
{return cljs.core.assoc.call(null,m,k__2840,v);
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
var update_in__delegate = function (m,p__2842,f,args){
var vec__2843__2844 = p__2842;
var k__2845 = cljs.core.nth.call(null,vec__2843__2844,0,null);
var ks__2846 = cljs.core.nthnext.call(null,vec__2843__2844,1);

if(cljs.core.truth_(ks__2846))
{return cljs.core.assoc.call(null,m,k__2845,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__2845),ks__2846,f,args));
} else
{return cljs.core.assoc.call(null,m,k__2845,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__2845),args));
}
};
var update_in = function (m,p__2842,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__2842, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__2847){
var m = cljs.core.first(arglist__2847);
var p__2842 = cljs.core.first(cljs.core.next(arglist__2847));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2847)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2847)));
return update_in__delegate.call(null, m, p__2842, f, args);
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
var this__2848 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__2849 = this;
var new_array__2850 = cljs.core.aclone.call(null,this__2849.array);

new_array__2850.push(o);
return (new cljs.core.Vector(this__2849.meta,new_array__2850));
});
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__2851 = this;
if(cljs.core.truth_(cljs.core._GT_.call(null,this__2851.array.length,0)))
{var vector_seq__2852 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_(cljs.core._LT_.call(null,i,this__2851.array.length)))
{return cljs.core.cons.call(null,(this__2851.array[i]),vector_seq.call(null,cljs.core.inc.call(null,i)));
} else
{return null;
}
})));
});

return vector_seq__2852.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__2853 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__2854 = this;
var count__2855 = this__2854.array.length;

if(cljs.core.truth_(cljs.core._GT_.call(null,count__2855,0)))
{return (this__2854.array[cljs.core.dec.call(null,count__2855)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__2856 = this;
if(cljs.core.truth_(cljs.core._GT_.call(null,this__2856.array.length,0)))
{var new_array__2857 = cljs.core.aclone.call(null,this__2856.array);

new_array__2857.pop();
return (new cljs.core.Vector(this__2856.meta,new_array__2857));
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__2858 = this;
return (new cljs.core.Vector(meta,this__2858.array));
});
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__2859 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__2859.meta);
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__2873 = null;
var G__2873__2874 = (function (coll,n){
var this__2860 = this;
if(cljs.core.truth_((function (){var and__3574__auto____2861 = cljs.core._LT__EQ_.call(null,0,n);

if(cljs.core.truth_(and__3574__auto____2861))
{return cljs.core._LT_.call(null,n,this__2860.array.length);
} else
{return and__3574__auto____2861;
}
})()))
{return (this__2860.array[n]);
} else
{return null;
}
});
var G__2873__2875 = (function (coll,n,not_found){
var this__2862 = this;
if(cljs.core.truth_((function (){var and__3574__auto____2863 = cljs.core._LT__EQ_.call(null,0,n);

if(cljs.core.truth_(and__3574__auto____2863))
{return cljs.core._LT_.call(null,n,this__2862.array.length);
} else
{return and__3574__auto____2863;
}
})()))
{return (this__2862.array[n]);
} else
{return not_found;
}
});
G__2873 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__2873__2874.call(this,coll,n);
case  3 :
return G__2873__2875.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2873;
})()
;
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__2864 = this;
return this__2864.meta;
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__2877 = null;
var G__2877__2878 = (function (v,f){
var this__2865 = this;
return cljs.core.ci_reduce.call(null,this__2865.array,f);
});
var G__2877__2879 = (function (v,f,start){
var this__2866 = this;
return cljs.core.ci_reduce.call(null,this__2866.array,f,start);
});
G__2877 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__2877__2878.call(this,v,f);
case  3 :
return G__2877__2879.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2877;
})()
;
cljs.core.Vector.prototype.cljs$core$IHash$ = true;
cljs.core.Vector.prototype.cljs$core$IHash$_hash = (function (coll){
var this__2867 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__2868 = this;
return this__2868.array.length;
});
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__2869 = this;
var new_array__2870 = cljs.core.aclone.call(null,this__2869.array);

(new_array__2870[k] = v);
return (new cljs.core.Vector(this__2869.meta,new_array__2870));
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__2881 = null;
var G__2881__2882 = (function (coll,k){
var this__2871 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__2881__2883 = (function (coll,k,not_found){
var this__2872 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__2881 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__2881__2882.call(this,coll,k);
case  3 :
return G__2881__2883.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2881;
})()
;
cljs.core.Vector.EMPTY = (new cljs.core.Vector(null,cljs.core.array.call(null)));
cljs.core.Vector.fromArray = (function (xs){
return (new cljs.core.Vector(null,xs));
});
cljs.core.Vector.prototype.call = (function() {
var G__2885 = null;
var G__2885__2886 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__2885__2887 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__2885 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__2885__2886.call(this,_,k);
case  3 :
return G__2885__2887.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2885;
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
vector.cljs$lang$applyTo = (function (arglist__2889){
var args = cljs.core.seq( arglist__2889 );;
return vector__delegate.call(null, args);
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
var this__2890 = this;
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
var len__2891 = array.length;

var i__2892 = 0;

while(true){
if(cljs.core.truth_(cljs.core._LT_.call(null,i__2892,len__2891)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__2892]))))
{return i__2892;
} else
{{
var G__2893 = cljs.core._PLUS_.call(null,i__2892,incr);
i__2892 = G__2893;
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
var obj_map_contains_key_QMARK___2895 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___2896 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3574__auto____2894 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3574__auto____2894))
{return strobj.hasOwnProperty(k);
} else
{return and__3574__auto____2894;
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
return obj_map_contains_key_QMARK___2895.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___2896.call(this,k,strobj,true_val,false_val);
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
var this__2899 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__2900 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__2901 = this;
if(cljs.core.truth_(cljs.core.pos_QMARK_.call(null,this__2901.keys.length)))
{return cljs.core.map.call(null,(function (p1__2898_SHARP_){
return cljs.core.vector.call(null,p1__2898_SHARP_,(this__2901.strobj[p1__2898_SHARP_]));
}),this__2901.keys);
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__2902 = this;
return (new cljs.core.ObjMap(meta,this__2902.keys,this__2902.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__2903 = this;
if(cljs.core.truth_((function (){var and__3574__auto____2904 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3574__auto____2904))
{return this__2903.strobj.hasOwnProperty(k);
} else
{return and__3574__auto____2904;
}
})()))
{var new_keys__2905 = cljs.core.aclone.call(null,this__2903.keys);
var new_strobj__2906 = goog.object.clone.call(null,this__2903.strobj);

new_keys__2905.splice(cljs.core.scan_array.call(null,1,k,new_keys__2905),1);
cljs.core.js_delete.call(null,new_strobj__2906,k);
return (new cljs.core.ObjMap(this__2903.meta,new_keys__2905,new_strobj__2906));
} else
{return coll;
}
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__2907 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__2907.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__2908 = this;
return this__2908.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IHash$ = true;
cljs.core.ObjMap.prototype.cljs$core$IHash$_hash = (function (coll){
var this__2909 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__2910 = this;
return this__2910.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__2911 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__2912 = goog.object.clone.call(null,this__2911.strobj);
var overwrite_QMARK___2913 = new_strobj__2912.hasOwnProperty(k);

(new_strobj__2912[k] = v);
if(cljs.core.truth_(overwrite_QMARK___2913))
{return (new cljs.core.ObjMap(this__2911.meta,this__2911.keys,new_strobj__2912));
} else
{var new_keys__2914 = cljs.core.aclone.call(null,this__2911.keys);

new_keys__2914.push(k);
return (new cljs.core.ObjMap(this__2911.meta,new_keys__2914,new_strobj__2912));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__2911.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__2915 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__2915.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__2918 = null;
var G__2918__2919 = (function (coll,k){
var this__2916 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__2918__2920 = (function (coll,k,not_found){
var this__2917 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__2917.strobj,(this__2917.strobj[k]),not_found);
});
G__2918 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__2918__2919.call(this,coll,k);
case  3 :
return G__2918__2920.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2918;
})()
;
cljs.core.ObjMap.EMPTY = (new cljs.core.ObjMap(null,cljs.core.array.call(null),cljs.core.js_obj.call(null)));
cljs.core.ObjMap.fromObject = (function (ks,obj){
return (new cljs.core.ObjMap(null,ks,obj));
});
cljs.core.ObjMap.prototype.call = (function() {
var G__2923 = null;
var G__2923__2924 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__2923__2925 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__2923 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__2923__2924.call(this,_,k);
case  3 :
return G__2923__2925.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2923;
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
var this__2927 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__2928 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__2929 = this;
if(cljs.core.truth_(cljs.core.pos_QMARK_.call(null,this__2929.count)))
{var hashes__2930 = cljs.core.js_keys.call(null,this__2929.hashobj);

return cljs.core.mapcat.call(null,(function (p1__2922_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__2929.hashobj[p1__2922_SHARP_])));
}),hashes__2930);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__2931 = this;
return (new cljs.core.HashMap(meta,this__2931.count,this__2931.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__2932 = this;
var h__2933 = cljs.core.hash.call(null,k);
var bucket__2934 = (this__2932.hashobj[h__2933]);
var i__2935 = (cljs.core.truth_(bucket__2934)?cljs.core.scan_array.call(null,2,k,bucket__2934):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__2935)))
{return coll;
} else
{var new_hashobj__2936 = goog.object.clone.call(null,this__2932.hashobj);

if(cljs.core.truth_(cljs.core._GT_.call(null,3,bucket__2934.length)))
{cljs.core.js_delete.call(null,new_hashobj__2936,h__2933);
} else
{var new_bucket__2937 = cljs.core.aclone.call(null,bucket__2934);

new_bucket__2937.splice(i__2935,2);
(new_hashobj__2936[h__2933] = new_bucket__2937);
}
return (new cljs.core.HashMap(this__2932.meta,cljs.core.dec.call(null,this__2932.count),new_hashobj__2936));
}
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__2938 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__2938.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__2939 = this;
return this__2939.meta;
});
cljs.core.HashMap.prototype.cljs$core$IHash$ = true;
cljs.core.HashMap.prototype.cljs$core$IHash$_hash = (function (coll){
var this__2940 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__2941 = this;
return this__2941.count;
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__2942 = this;
var h__2943 = cljs.core.hash.call(null,k);
var bucket__2944 = (this__2942.hashobj[h__2943]);

if(cljs.core.truth_(bucket__2944))
{var new_bucket__2945 = cljs.core.aclone.call(null,bucket__2944);
var new_hashobj__2946 = goog.object.clone.call(null,this__2942.hashobj);

(new_hashobj__2946[h__2943] = new_bucket__2945);
var temp__3723__auto____2947 = cljs.core.scan_array.call(null,2,k,new_bucket__2945);

if(cljs.core.truth_(temp__3723__auto____2947))
{var i__2948 = temp__3723__auto____2947;

(new_bucket__2945[cljs.core.inc.call(null,i__2948)] = v);
return (new cljs.core.HashMap(this__2942.meta,this__2942.count,new_hashobj__2946));
} else
{new_bucket__2945.push(k,v);
return (new cljs.core.HashMap(this__2942.meta,cljs.core.inc.call(null,this__2942.count),new_hashobj__2946));
}
} else
{var new_hashobj__2949 = goog.object.clone.call(null,this__2942.hashobj);

(new_hashobj__2949[h__2943] = cljs.core.array.call(null,k,v));
return (new cljs.core.HashMap(this__2942.meta,cljs.core.inc.call(null,this__2942.count),new_hashobj__2949));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__2950 = this;
var bucket__2951 = (this__2950.hashobj[cljs.core.hash.call(null,k)]);
var i__2952 = (cljs.core.truth_(bucket__2951)?cljs.core.scan_array.call(null,2,k,bucket__2951):null);

if(cljs.core.truth_(i__2952))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__2957 = null;
var G__2957__2958 = (function (coll,k){
var this__2953 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__2957__2959 = (function (coll,k,not_found){
var this__2954 = this;
var bucket__2955 = (this__2954.hashobj[cljs.core.hash.call(null,k)]);
var i__2956 = (cljs.core.truth_(bucket__2955)?cljs.core.scan_array.call(null,2,k,bucket__2955):null);

if(cljs.core.truth_(i__2956))
{return (bucket__2955[cljs.core.inc.call(null,i__2956)]);
} else
{return not_found;
}
});
G__2957 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__2957__2958.call(this,coll,k);
case  3 :
return G__2957__2959.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2957;
})()
;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__2961 = ks.length;

var i__2962 = 0;
var out__2963 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core._LT_.call(null,i__2962,len__2961)))
{{
var G__2964 = cljs.core.inc.call(null,i__2962);
var G__2965 = cljs.core.assoc.call(null,out__2963,(ks[i__2962]),(vs[i__2962]));
i__2962 = G__2964;
out__2963 = G__2965;
continue;
}
} else
{return out__2963;
}
break;
}
});
cljs.core.HashMap.prototype.call = (function() {
var G__2966 = null;
var G__2966__2967 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__2966__2968 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__2966 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__2966__2967.call(this,_,k);
case  3 :
return G__2966__2968.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2966;
})()
;
/**
* keyval => key val
* Returns a new hash map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.hash_map = (function() { 
var hash_map__delegate = function (keyvals){
var in$__2970 = cljs.core.seq.call(null,keyvals);
var out__2971 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__2970))
{{
var G__2972 = cljs.core.nnext.call(null,in$__2970);
var G__2973 = cljs.core.assoc.call(null,out__2971,cljs.core.first.call(null,in$__2970),cljs.core.second.call(null,in$__2970));
in$__2970 = G__2972;
out__2971 = G__2973;
continue;
}
} else
{return out__2971;
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
hash_map.cljs$lang$applyTo = (function (arglist__2974){
var keyvals = cljs.core.seq( arglist__2974 );;
return hash_map__delegate.call(null, keyvals);
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
{return cljs.core.reduce.call(null,(function (p1__2975_SHARP_,p2__2976_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3576__auto____2977 = p1__2975_SHARP_;

if(cljs.core.truth_(or__3576__auto____2977))
{return or__3576__auto____2977;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__2976_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__2978){
var maps = cljs.core.seq( arglist__2978 );;
return merge__delegate.call(null, maps);
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
{var merge_entry__2981 = (function (m,e){
var k__2979 = cljs.core.first.call(null,e);
var v__2980 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__2979)))
{return cljs.core.assoc.call(null,m,k__2979,f.call(null,cljs.core.get.call(null,m,k__2979),v__2980));
} else
{return cljs.core.assoc.call(null,m,k__2979,v__2980);
}
});
var merge2__2983 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__2981,(function (){var or__3576__auto____2982 = m1;

if(cljs.core.truth_(or__3576__auto____2982))
{return or__3576__auto____2982;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__2983,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__2984){
var f = cljs.core.first(arglist__2984);
var maps = cljs.core.rest(arglist__2984);
return merge_with__delegate.call(null, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__2986 = cljs.core.ObjMap.fromObject([],{});
var keys__2987 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__2987))
{var key__2988 = cljs.core.first.call(null,keys__2987);
var entry__2989 = cljs.core.get.call(null,map,key__2988);

{
var G__2990 = (cljs.core.truth_(entry__2989)?cljs.core.assoc.call(null,ret__2986,key__2988,entry__2989):ret__2986);
var G__2991 = cljs.core.next.call(null,keys__2987);
ret__2986 = G__2990;
keys__2987 = G__2991;
continue;
}
} else
{return ret__2986;
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
var this__2992 = this;
return (new cljs.core.Set(this__2992.meta,cljs.core.dissoc.call(null,this__2992.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__2993 = this;
var and__3574__auto____2994 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3574__auto____2994))
{var and__3574__auto____2995 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3574__auto____2995))
{return cljs.core.every_QMARK_.call(null,(function (p1__2985_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__2985_SHARP_);
}),other);
} else
{return and__3574__auto____2995;
}
} else
{return and__3574__auto____2994;
}
});
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__2996 = this;
return (new cljs.core.Set(this__2996.meta,cljs.core.assoc.call(null,this__2996.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__2997 = this;
return cljs.core.keys.call(null,this__2997.hash_map);
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__2998 = this;
return (new cljs.core.Set(meta,this__2998.hash_map));
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__2999 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__2999.meta);
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3000 = this;
return this__3000.meta;
});
cljs.core.Set.prototype.cljs$core$IHash$ = true;
cljs.core.Set.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3001 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3002 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__3005 = null;
var G__3005__3006 = (function (coll,v){
var this__3003 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__3005__3007 = (function (coll,v,not_found){
var this__3004 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__3004.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__3005 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__3005__3006.call(this,coll,v);
case  3 :
return G__3005__3007.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3005;
})()
;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
cljs.core.Set.prototype.call = (function() {
var G__3009 = null;
var G__3009__3010 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__3009__3011 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__3009 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__3009__3010.call(this,_,k);
case  3 :
return G__3009__3011.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3009;
})()
;
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__3014 = cljs.core.seq.call(null,coll);
var out__3015 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__3014))))
{{
var G__3016 = cljs.core.rest.call(null,in$__3014);
var G__3017 = cljs.core.conj.call(null,out__3015,cljs.core.first.call(null,in$__3014));
in$__3014 = G__3016;
out__3015 = G__3017;
continue;
}
} else
{return out__3015;
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
{var n__3018 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3723__auto____3019 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3723__auto____3019))
{var e__3020 = temp__3723__auto____3019;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__3020));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__3018,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__3013_SHARP_){
var temp__3723__auto____3021 = cljs.core.find.call(null,smap,p1__3013_SHARP_);

if(cljs.core.truth_(temp__3723__auto____3021))
{var e__3022 = temp__3723__auto____3021;

return cljs.core.second.call(null,e__3022);
} else
{return p1__3013_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__3030 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__3023,seen){
while(true){
var vec__3024__3025 = p__3023;
var f__3026 = cljs.core.nth.call(null,vec__3024__3025,0,null);
var xs__3027 = vec__3024__3025;

var temp__3726__auto____3028 = cljs.core.seq.call(null,xs__3027);

if(cljs.core.truth_(temp__3726__auto____3028))
{var s__3029 = temp__3726__auto____3028;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__3026)))
{{
var G__3031 = cljs.core.rest.call(null,s__3029);
var G__3032 = seen;
p__3023 = G__3031;
seen = G__3032;
continue;
}
} else
{return cljs.core.cons.call(null,f__3026,step.call(null,cljs.core.rest.call(null,s__3029),cljs.core.conj.call(null,seen,f__3026)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__3030.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__3033 = cljs.core.Vector.fromArray([]);
var s__3034 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__3034)))
{{
var G__3035 = cljs.core.conj.call(null,ret__3033,cljs.core.first.call(null,s__3034));
var G__3036 = cljs.core.next.call(null,s__3034);
ret__3033 = G__3035;
s__3034 = G__3036;
continue;
}
} else
{return cljs.core.seq.call(null,ret__3033);
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
{if(cljs.core.truth_((function (){var or__3576__auto____3037 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3576__auto____3037))
{return or__3576__auto____3037;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__3038 = x.lastIndexOf("/");

if(cljs.core.truth_(cljs.core._LT_.call(null,i__3038,0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,cljs.core.inc.call(null,i__3038));
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
if(cljs.core.truth_((function (){var or__3576__auto____3039 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3576__auto____3039))
{return or__3576__auto____3039;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__3040 = x.lastIndexOf("/");

if(cljs.core.truth_(cljs.core._GT_.call(null,i__3040,-1)))
{return cljs.core.subs.call(null,x,2,i__3040);
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
var map__3043 = cljs.core.ObjMap.fromObject([],{});
var ks__3044 = cljs.core.seq.call(null,keys);
var vs__3045 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3574__auto____3046 = ks__3044;

if(cljs.core.truth_(and__3574__auto____3046))
{return vs__3045;
} else
{return and__3574__auto____3046;
}
})()))
{{
var G__3047 = cljs.core.assoc.call(null,map__3043,cljs.core.first.call(null,ks__3044),cljs.core.first.call(null,vs__3045));
var G__3048 = cljs.core.next.call(null,ks__3044);
var G__3049 = cljs.core.next.call(null,vs__3045);
map__3043 = G__3047;
ks__3044 = G__3048;
vs__3045 = G__3049;
continue;
}
} else
{return map__3043;
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
var max_key__3052 = (function (k,x){
return x;
});
var max_key__3053 = (function (k,x,y){
if(cljs.core.truth_(cljs.core._GT_.call(null,k.call(null,x),k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__3054 = (function() { 
var G__3056__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__3041_SHARP_,p2__3042_SHARP_){
return max_key.call(null,k,p1__3041_SHARP_,p2__3042_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__3056 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3056__delegate.call(this, k, x, y, more);
};
G__3056.cljs$lang$maxFixedArity = 3;
G__3056.cljs$lang$applyTo = (function (arglist__3057){
var k = cljs.core.first(arglist__3057);
var x = cljs.core.first(cljs.core.next(arglist__3057));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3057)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3057)));
return G__3056__delegate.call(null, k, x, y, more);
});
return G__3056;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__3052.call(this,k,x);
case  3 :
return max_key__3053.call(this,k,x,y);
default:
return max_key__3054.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__3054.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__3058 = (function (k,x){
return x;
});
var min_key__3059 = (function (k,x,y){
if(cljs.core.truth_(cljs.core._LT_.call(null,k.call(null,x),k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__3060 = (function() { 
var G__3062__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__3050_SHARP_,p2__3051_SHARP_){
return min_key.call(null,k,p1__3050_SHARP_,p2__3051_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__3062 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3062__delegate.call(this, k, x, y, more);
};
G__3062.cljs$lang$maxFixedArity = 3;
G__3062.cljs$lang$applyTo = (function (arglist__3063){
var k = cljs.core.first(arglist__3063);
var x = cljs.core.first(cljs.core.next(arglist__3063));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3063)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3063)));
return G__3062__delegate.call(null, k, x, y, more);
});
return G__3062;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__3058.call(this,k,x);
case  3 :
return min_key__3059.call(this,k,x,y);
default:
return min_key__3060.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__3060.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__3066 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__3067 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____3064 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____3064))
{var s__3065 = temp__3726__auto____3064;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__3065),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__3065)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__3066.call(this,n,step);
case  3 :
return partition_all__3067.call(this,n,step,coll);
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
var temp__3726__auto____3069 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____3069))
{var s__3070 = temp__3726__auto____3069;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__3070))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__3070),take_while.call(null,pred,cljs.core.rest.call(null,s__3070)));
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
var temp__3726__auto____3071 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____3071))
{var s__3072 = temp__3726__auto____3071;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__3072),take_nth.call(null,n,cljs.core.drop.call(null,n,s__3072)));
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
var temp__3726__auto____3074 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____3074))
{var s__3075 = temp__3726__auto____3074;

var fst__3076 = cljs.core.first.call(null,s__3075);
var fv__3077 = f.call(null,fst__3076);
var run__3078 = cljs.core.cons.call(null,fst__3076,cljs.core.take_while.call(null,(function (p1__3073_SHARP_){
return cljs.core._EQ_.call(null,fv__3077,f.call(null,p1__3073_SHARP_));
}),cljs.core.next.call(null,s__3075)));

return cljs.core.cons.call(null,run__3078,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__3078),s__3075))));
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
var reductions__3093 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3723__auto____3089 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3723__auto____3089))
{var s__3090 = temp__3723__auto____3089;

return reductions.call(null,f,cljs.core.first.call(null,s__3090),cljs.core.rest.call(null,s__3090));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__3094 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____3091 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____3091))
{var s__3092 = temp__3726__auto____3091;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__3092)),cljs.core.rest.call(null,s__3092));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__3093.call(this,f,init);
case  3 :
return reductions__3094.call(this,f,init,coll);
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
var juxt__3097 = (function (f){
return (function() {
var G__3102 = null;
var G__3102__3103 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__3102__3104 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__3102__3105 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__3102__3106 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__3102__3107 = (function() { 
var G__3109__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__3109 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3109__delegate.call(this, x, y, z, args);
};
G__3109.cljs$lang$maxFixedArity = 3;
G__3109.cljs$lang$applyTo = (function (arglist__3110){
var x = cljs.core.first(arglist__3110);
var y = cljs.core.first(cljs.core.next(arglist__3110));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3110)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3110)));
return G__3109__delegate.call(null, x, y, z, args);
});
return G__3109;
})()
;
G__3102 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3102__3103.call(this);
case  1 :
return G__3102__3104.call(this,x);
case  2 :
return G__3102__3105.call(this,x,y);
case  3 :
return G__3102__3106.call(this,x,y,z);
default:
return G__3102__3107.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3102.cljs$lang$maxFixedArity = 3;
G__3102.cljs$lang$applyTo = G__3102__3107.cljs$lang$applyTo;
return G__3102;
})()
});
var juxt__3098 = (function (f,g){
return (function() {
var G__3111 = null;
var G__3111__3112 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__3111__3113 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__3111__3114 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__3111__3115 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__3111__3116 = (function() { 
var G__3118__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__3118 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3118__delegate.call(this, x, y, z, args);
};
G__3118.cljs$lang$maxFixedArity = 3;
G__3118.cljs$lang$applyTo = (function (arglist__3119){
var x = cljs.core.first(arglist__3119);
var y = cljs.core.first(cljs.core.next(arglist__3119));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3119)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3119)));
return G__3118__delegate.call(null, x, y, z, args);
});
return G__3118;
})()
;
G__3111 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3111__3112.call(this);
case  1 :
return G__3111__3113.call(this,x);
case  2 :
return G__3111__3114.call(this,x,y);
case  3 :
return G__3111__3115.call(this,x,y,z);
default:
return G__3111__3116.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3111.cljs$lang$maxFixedArity = 3;
G__3111.cljs$lang$applyTo = G__3111__3116.cljs$lang$applyTo;
return G__3111;
})()
});
var juxt__3099 = (function (f,g,h){
return (function() {
var G__3120 = null;
var G__3120__3121 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__3120__3122 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__3120__3123 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__3120__3124 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__3120__3125 = (function() { 
var G__3127__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__3127 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3127__delegate.call(this, x, y, z, args);
};
G__3127.cljs$lang$maxFixedArity = 3;
G__3127.cljs$lang$applyTo = (function (arglist__3128){
var x = cljs.core.first(arglist__3128);
var y = cljs.core.first(cljs.core.next(arglist__3128));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3128)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3128)));
return G__3127__delegate.call(null, x, y, z, args);
});
return G__3127;
})()
;
G__3120 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3120__3121.call(this);
case  1 :
return G__3120__3122.call(this,x);
case  2 :
return G__3120__3123.call(this,x,y);
case  3 :
return G__3120__3124.call(this,x,y,z);
default:
return G__3120__3125.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3120.cljs$lang$maxFixedArity = 3;
G__3120.cljs$lang$applyTo = G__3120__3125.cljs$lang$applyTo;
return G__3120;
})()
});
var juxt__3100 = (function() { 
var G__3129__delegate = function (f,g,h,fs){
var fs__3096 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__3130 = null;
var G__3130__3131 = (function (){
return cljs.core.reduce.call(null,(function (p1__3079_SHARP_,p2__3080_SHARP_){
return cljs.core.conj.call(null,p1__3079_SHARP_,p2__3080_SHARP_.call(null));
}),cljs.core.Vector.fromArray([]),fs__3096);
});
var G__3130__3132 = (function (x){
return cljs.core.reduce.call(null,(function (p1__3081_SHARP_,p2__3082_SHARP_){
return cljs.core.conj.call(null,p1__3081_SHARP_,p2__3082_SHARP_.call(null,x));
}),cljs.core.Vector.fromArray([]),fs__3096);
});
var G__3130__3133 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__3083_SHARP_,p2__3084_SHARP_){
return cljs.core.conj.call(null,p1__3083_SHARP_,p2__3084_SHARP_.call(null,x,y));
}),cljs.core.Vector.fromArray([]),fs__3096);
});
var G__3130__3134 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__3085_SHARP_,p2__3086_SHARP_){
return cljs.core.conj.call(null,p1__3085_SHARP_,p2__3086_SHARP_.call(null,x,y,z));
}),cljs.core.Vector.fromArray([]),fs__3096);
});
var G__3130__3135 = (function() { 
var G__3137__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__3087_SHARP_,p2__3088_SHARP_){
return cljs.core.conj.call(null,p1__3087_SHARP_,cljs.core.apply.call(null,p2__3088_SHARP_,x,y,z,args));
}),cljs.core.Vector.fromArray([]),fs__3096);
};
var G__3137 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3137__delegate.call(this, x, y, z, args);
};
G__3137.cljs$lang$maxFixedArity = 3;
G__3137.cljs$lang$applyTo = (function (arglist__3138){
var x = cljs.core.first(arglist__3138);
var y = cljs.core.first(cljs.core.next(arglist__3138));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3138)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3138)));
return G__3137__delegate.call(null, x, y, z, args);
});
return G__3137;
})()
;
G__3130 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3130__3131.call(this);
case  1 :
return G__3130__3132.call(this,x);
case  2 :
return G__3130__3133.call(this,x,y);
case  3 :
return G__3130__3134.call(this,x,y,z);
default:
return G__3130__3135.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3130.cljs$lang$maxFixedArity = 3;
G__3130.cljs$lang$applyTo = G__3130__3135.cljs$lang$applyTo;
return G__3130;
})()
};
var G__3129 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3129__delegate.call(this, f, g, h, fs);
};
G__3129.cljs$lang$maxFixedArity = 3;
G__3129.cljs$lang$applyTo = (function (arglist__3139){
var f = cljs.core.first(arglist__3139);
var g = cljs.core.first(cljs.core.next(arglist__3139));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3139)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3139)));
return G__3129__delegate.call(null, f, g, h, fs);
});
return G__3129;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__3097.call(this,f);
case  2 :
return juxt__3098.call(this,f,g);
case  3 :
return juxt__3099.call(this,f,g,h);
default:
return juxt__3100.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__3100.cljs$lang$applyTo;
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
var dorun__3141 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__3144 = cljs.core.next.call(null,coll);
coll = G__3144;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__3142 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3574__auto____3140 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3574__auto____3140))
{return cljs.core.pos_QMARK_.call(null,n);
} else
{return and__3574__auto____3140;
}
})()))
{{
var G__3145 = cljs.core.dec.call(null,n);
var G__3146 = cljs.core.next.call(null,coll);
n = G__3145;
coll = G__3146;
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
return dorun__3141.call(this,n);
case  2 :
return dorun__3142.call(this,n,coll);
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
var doall__3147 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__3148 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__3147.call(this,n);
case  2 :
return doall__3148.call(this,n,coll);
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
var matches__3150 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__3150),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__3150),1)))
{return cljs.core.first.call(null,matches__3150);
} else
{return cljs.core.vec.call(null,matches__3150);
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
var matches__3151 = re.exec(s);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,matches__3151)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__3151),1)))
{return cljs.core.first.call(null,matches__3151);
} else
{return cljs.core.vec.call(null,matches__3151);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__3152 = cljs.core.re_find.call(null,re,s);
var match_idx__3153 = s.search(re);
var match_str__3154 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__3152))?cljs.core.first.call(null,match_data__3152):match_data__3152);
var post_match__3155 = cljs.core.subs.call(null,s,cljs.core._PLUS_.call(null,match_idx__3153,cljs.core.count.call(null,match_str__3154)));

if(cljs.core.truth_(match_data__3152))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__3152,re_seq.call(null,re,post_match__3155));
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
return cljs.core.concat.call(null,cljs.core.Vector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.Vector.fromArray([sep]),cljs.core.map.call(null,(function (p1__3156_SHARP_){
return print_one.call(null,p1__3156_SHARP_,opts);
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3574__auto____3157 = cljs.core.get.call(null,opts,"﷐'meta");

if(cljs.core.truth_(and__3574__auto____3157))
{var and__3574__auto____3160 = (function (){var x__105__auto____3158 = obj;

if(cljs.core.truth_((function (){var and__3574__auto____3159 = x__105__auto____3158;

if(cljs.core.truth_(and__3574__auto____3159))
{return x__105__auto____3158.cljs$core$IMeta$;
} else
{return and__3574__auto____3159;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__105__auto____3158);
}
})();

if(cljs.core.truth_(and__3574__auto____3160))
{return cljs.core.meta.call(null,obj);
} else
{return and__3574__auto____3160;
}
} else
{return and__3574__auto____3157;
}
})())?cljs.core.concat.call(null,cljs.core.Vector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.Vector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__105__auto____3161 = obj;

if(cljs.core.truth_((function (){var and__3574__auto____3162 = x__105__auto____3161;

if(cljs.core.truth_(and__3574__auto____3162))
{return x__105__auto____3161.cljs$core$IPrintable$;
} else
{return and__3574__auto____3162;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__105__auto____3161);
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
var first_obj__3163 = cljs.core.first.call(null,objs);
var sb__3164 = (new goog.string.StringBuffer());

var G__3165__3166 = cljs.core.seq.call(null,objs);

while(true){
if(cljs.core.truth_(G__3165__3166))
{var obj__3167 = cljs.core.first.call(null,G__3165__3166);

if(cljs.core.truth_(cljs.core.identical_QMARK_.call(null,obj__3167,first_obj__3163)))
{} else
{sb__3164.append(" ");
}
var G__3168__3169 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__3167,opts));

while(true){
if(cljs.core.truth_(G__3168__3169))
{var string__3170 = cljs.core.first.call(null,G__3168__3169);

sb__3164.append(string__3170);
{
var G__3171 = cljs.core.next.call(null,G__3168__3169);
G__3168__3169 = G__3171;
continue;
}
} else
{}
break;
}
{
var G__3172 = cljs.core.next.call(null,G__3165__3166);
G__3165__3166 = G__3172;
continue;
}
} else
{}
break;
}
return cljs.core.str.call(null,sb__3164);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__3173 = cljs.core.first.call(null,objs);

var G__3174__3175 = cljs.core.seq.call(null,objs);

while(true){
if(cljs.core.truth_(G__3174__3175))
{var obj__3176 = cljs.core.first.call(null,G__3174__3175);

if(cljs.core.truth_(cljs.core.identical_QMARK_.call(null,obj__3176,first_obj__3173)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__3177__3178 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__3176,opts));

while(true){
if(cljs.core.truth_(G__3177__3178))
{var string__3179 = cljs.core.first.call(null,G__3177__3178);

cljs.core.string_print.call(null,string__3179);
{
var G__3180 = cljs.core.next.call(null,G__3177__3178);
G__3177__3178 = G__3180;
continue;
}
} else
{}
break;
}
{
var G__3181 = cljs.core.next.call(null,G__3174__3175);
G__3174__3175 = G__3181;
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
pr_str.cljs$lang$applyTo = (function (arglist__3182){
var objs = cljs.core.seq( arglist__3182 );;
return pr_str__delegate.call(null, objs);
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
pr.cljs$lang$applyTo = (function (arglist__3183){
var objs = cljs.core.seq( arglist__3183 );;
return pr__delegate.call(null, objs);
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__3184){
var objs = cljs.core.seq( arglist__3184 );;
return cljs_core_print__delegate.call(null, objs);
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
println.cljs$lang$applyTo = (function (arglist__3185){
var objs = cljs.core.seq( arglist__3185 );;
return println__delegate.call(null, objs);
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
prn.cljs$lang$applyTo = (function (arglist__3186){
var objs = cljs.core.seq( arglist__3186 );;
return prn__delegate.call(null, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__3187 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__3187,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3726__auto____3188 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3726__auto____3188))
{var nspc__3189 = temp__3726__auto____3188;

return cljs.core.str.call(null,nspc__3189,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3726__auto____3190 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3726__auto____3190))
{var nspc__3191 = temp__3726__auto____3190;

return cljs.core.str.call(null,nspc__3191,"/");
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
var pr_pair__3192 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__3192,"{",", ","}",opts,coll);
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
var this__3193 = this;
return cljs.core.concat.call(null,cljs.core.Vector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__3193.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__3194 = this;
return this__3194.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__3195 = this;
return this__3195.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__3196 = this;
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
var atom__3203 = (function (x){
return (new cljs.core.Atom(x,null,null));
});
var atom__3204 = (function() { 
var G__3206__delegate = function (x,p__3197){
var map__3198__3199 = p__3197;
var map__3198__3200 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__3198__3199))?cljs.core.apply.call(null,cljs.core.hash_map,map__3198__3199):map__3198__3199);
var validator__3201 = cljs.core.get.call(null,map__3198__3200,"﷐'validator");
var meta__3202 = cljs.core.get.call(null,map__3198__3200,"﷐'meta");

return (new cljs.core.Atom(x,meta__3202,validator__3201));
};
var G__3206 = function (x,var_args){
var p__3197 = null;
if (goog.isDef(var_args)) {
  p__3197 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__3206__delegate.call(this, x, p__3197);
};
G__3206.cljs$lang$maxFixedArity = 1;
G__3206.cljs$lang$applyTo = (function (arglist__3207){
var x = cljs.core.first(arglist__3207);
var p__3197 = cljs.core.rest(arglist__3207);
return G__3206__delegate.call(null, x, p__3197);
});
return G__3206;
})()
;
atom = function(x,var_args){
var p__3197 = var_args;
switch(arguments.length){
case  1 :
return atom__3203.call(this,x);
default:
return atom__3204.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__3204.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,newval){
var temp__3726__auto____3208 = a.validator;

if(cljs.core.truth_(temp__3726__auto____3208))
{var v__3209 = temp__3726__auto____3208;

if(cljs.core.truth_(v__3209.call(null,newval)))
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
var swap_BANG___3210 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___3211 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___3212 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___3213 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___3214 = (function() { 
var G__3216__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__3216 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__3216__delegate.call(this, a, f, x, y, z, more);
};
G__3216.cljs$lang$maxFixedArity = 5;
G__3216.cljs$lang$applyTo = (function (arglist__3217){
var a = cljs.core.first(arglist__3217);
var f = cljs.core.first(cljs.core.next(arglist__3217));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3217)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3217))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3217)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3217)))));
return G__3216__delegate.call(null, a, f, x, y, z, more);
});
return G__3216;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___3210.call(this,a,f);
case  3 :
return swap_BANG___3211.call(this,a,f,x);
case  4 :
return swap_BANG___3212.call(this,a,f,x,y);
case  5 :
return swap_BANG___3213.call(this,a,f,x,y,z);
default:
return swap_BANG___3214.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___3214.cljs$lang$applyTo;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__3218){
var iref = cljs.core.first(arglist__3218);
var f = cljs.core.first(cljs.core.next(arglist__3218));
var args = cljs.core.rest(cljs.core.next(arglist__3218));
return alter_meta_BANG___delegate.call(null, iref, f, args);
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
var gensym__3219 = (function (){
return gensym.call(null,"G__");
});
var gensym__3220 = (function (prefix_string){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.gensym_counter)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__3219.call(this);
case  1 :
return gensym__3220.call(this,prefix_string);
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
var this__3222 = this;
return cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,cljs.core.deref.call(null,this__3222.state)));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__3223 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,this__3223.state)))
{} else
{cljs.core.swap_BANG_.call(null,this__3223.state,this__3223.f);
}
return cljs.core.deref.call(null,this__3223.state);
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
delay.cljs$lang$applyTo = (function (arglist__3224){
var body = cljs.core.seq( arglist__3224 );;
return delay__delegate.call(null, body);
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
var map__3225__3226 = options;
var map__3225__3227 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__3225__3226))?cljs.core.apply.call(null,cljs.core.hash_map,map__3225__3226):map__3225__3226);
var keywordize_keys__3228 = cljs.core.get.call(null,map__3225__3227,"﷐'keywordize-keys");
var keyfn__3229 = (cljs.core.truth_(keywordize_keys__3228)?cljs.core.keyword:cljs.core.str);
var f__3235 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__159__auto____3234 = (function iter__3230(s__3231){
return (new cljs.core.LazySeq(null,false,(function (){
var s__3231__3232 = s__3231;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__3231__3232)))
{var k__3233 = cljs.core.first.call(null,s__3231__3232);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([keyfn__3229.call(null,k__3233),thisfn.call(null,(x[k__3233]))]),iter__3230.call(null,cljs.core.rest.call(null,s__3231__3232)));
} else
{return null;
}
break;
}
})));
});

return iter__159__auto____3234.call(null,cljs.core.js_keys.call(null,x));
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

return f__3235.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__3236){
var x = cljs.core.first(arglist__3236);
var options = cljs.core.rest(arglist__3236);
return js__GT_clj__delegate.call(null, x, options);
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
var mem__3237 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__3241__delegate = function (args){
var temp__3723__auto____3238 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__3237),args);

if(cljs.core.truth_(temp__3723__auto____3238))
{var v__3239 = temp__3723__auto____3238;

return v__3239;
} else
{var ret__3240 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__3237,cljs.core.assoc,args,ret__3240);
return ret__3240;
}
};
var G__3241 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3241__delegate.call(this, args);
};
G__3241.cljs$lang$maxFixedArity = 0;
G__3241.cljs$lang$applyTo = (function (arglist__3242){
var args = cljs.core.seq( arglist__3242 );;
return G__3241__delegate.call(null, args);
});
return G__3241;
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
var trampoline__3244 = (function (f){
while(true){
var ret__3243 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__3243)))
{{
var G__3247 = ret__3243;
f = G__3247;
continue;
}
} else
{return ret__3243;
}
break;
}
});
var trampoline__3245 = (function() { 
var G__3248__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__3248 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__3248__delegate.call(this, f, args);
};
G__3248.cljs$lang$maxFixedArity = 1;
G__3248.cljs$lang$applyTo = (function (arglist__3249){
var f = cljs.core.first(arglist__3249);
var args = cljs.core.rest(arglist__3249);
return G__3248__delegate.call(null, f, args);
});
return G__3248;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__3244.call(this,f);
default:
return trampoline__3245.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__3245.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__3250 = (function (){
return rand.call(null,1);
});
var rand__3251 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__3250.call(this);
case  1 :
return rand__3251.call(this,n);
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
var k__3263 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__3263,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__3263,cljs.core.Vector.fromArray([])),x));
}),cljs.core.ObjMap.fromObject([],{}),coll);
});
cljs.core.test_stuff = (function test_stuff(){
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([4,3,2,1,0]),(function (){var i__3264 = 0;
var j__3265 = cljs.core.List.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core._LT_.call(null,i__3264,5)))
{{
var G__3404 = cljs.core.inc.call(null,i__3264);
var G__3405 = cljs.core.conj.call(null,j__3265,((function (i__3264,j__3265){
return (function (){
return i__3264;
});})(i__3264,j__3265))
);
i__3264 = G__3404;
j__3265 = G__3405;
continue;
}
} else
{return cljs.core.map.call(null,((function (i__3264,j__3265){
return (function (p1__3253_SHARP_){
return p1__3253_SHARP_.call(null);
});})(i__3264,j__3265))
,j__3265);
}
break;
}
})())))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [4,3,2,1,0])),cljs.core.list("﷑'loop",(new cljs.core.Vector(null, ["﷑'i",0,"﷑'j",cljs.core.List.EMPTY])),cljs.core.list("﷑'if",cljs.core.list("﷑'<","﷑'i",5),cljs.core.list("﷑'recur",cljs.core.list("﷑'inc","﷑'i"),cljs.core.list("﷑'conj","﷑'j",cljs.core.list("﷑'fn",(new cljs.core.Vector(null, [])),"﷑'i"))),cljs.core.list("﷑'map",cljs.core.list("﷑'fn*",(new cljs.core.Vector(null, ["﷑'p1__3253#"])),cljs.core.list("﷑'p1__3253#")),"﷑'j"))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([cljs.core.Vector.fromArray([1,1]),cljs.core.Vector.fromArray([1,2]),cljs.core.Vector.fromArray([1,3]),cljs.core.Vector.fromArray([2,1]),cljs.core.Vector.fromArray([2,2]),cljs.core.Vector.fromArray([2,3])]),cljs.core.map.call(null,(function (p1__3254_SHARP_){
return p1__3254_SHARP_.call(null);
}),(function (){var iter__159__auto____3276 = (function iter__3266(s__3267){
return (new cljs.core.LazySeq(null,false,(function (){
var s__3267__3270 = s__3267;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__3267__3270)))
{var i__3271 = cljs.core.first.call(null,s__3267__3270);

var iterys__157__auto____3274 = ((function (s__3267__3270){
return (function iter__3268(s__3269){
return (new cljs.core.LazySeq(null,false,((function (s__3267__3270){
return (function (){
var s__3269__3272 = s__3269;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__3269__3272)))
{var j__3273 = cljs.core.first.call(null,s__3269__3272);

return cljs.core.cons.call(null,((function (s__3267__3270){
return (function (){
return cljs.core.Vector.fromArray([i__3271,j__3273]);
});})(s__3267__3270))
,iter__3268.call(null,cljs.core.rest.call(null,s__3269__3272)));
} else
{return null;
}
break;
}
});})(s__3267__3270))
));
});})(s__3267__3270))
;
var fs__158__auto____3275 = cljs.core.seq.call(null,iterys__157__auto____3274.call(null,cljs.core.Vector.fromArray([1,2,3])));

if(cljs.core.truth_(fs__158__auto____3275))
{return cljs.core.concat.call(null,fs__158__auto____3275,iter__3266.call(null,cljs.core.rest.call(null,s__3267__3270)));
} else
{{
var G__3406 = cljs.core.rest.call(null,s__3267__3270);
s__3267__3270 = G__3406;
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

return iter__159__auto____3276.call(null,cljs.core.Vector.fromArray([1,2]));
})()))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [(new cljs.core.Vector(null, [1,1])),(new cljs.core.Vector(null, [1,2])),(new cljs.core.Vector(null, [1,3])),(new cljs.core.Vector(null, [2,1])),(new cljs.core.Vector(null, [2,2])),(new cljs.core.Vector(null, [2,3]))])),cljs.core.list("﷑'map",cljs.core.list("﷑'fn*",(new cljs.core.Vector(null, ["﷑'p1__3254#"])),cljs.core.list("﷑'p1__3254#")),cljs.core.list("﷑'for",(new cljs.core.Vector(null, ["﷑'i",(new cljs.core.Vector(null, [1,2])),"﷑'j",(new cljs.core.Vector(null, [1,2,3]))])),cljs.core.list("﷑'fn",(new cljs.core.Vector(null, [])),(new cljs.core.Vector(null, ["﷑'i","﷑'j"]))))))));
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
if(cljs.core.truth_(cljs.core._EQ_.call(null,"cabd",(function (){var jumble__3277 = (function (a,b){
return cljs.core.str.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.reverse.call(null,cljs.core.str.call(null,a))),b);
});

return cljs.core._reduce.call(null,"abcd",jumble__3277);
})())))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=","cabd",cljs.core.list("﷑'let",(new cljs.core.Vector(null, ["﷑'jumble",cljs.core.list("﷑'fn",(new cljs.core.Vector(null, ["﷑'a","﷑'b"])),cljs.core.list("﷑'str",cljs.core.list("﷑'apply","﷑'str",cljs.core.list("﷑'reverse",cljs.core.list("﷑'str","﷑'a"))),"﷑'b"))])),cljs.core.list("﷑'-reduce","abcd","﷑'jumble")))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,"cafrogbd",(function (){var jumble__3278 = (function (a,b){
return cljs.core.str.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.reverse.call(null,cljs.core.str.call(null,a))),b);
});

return cljs.core._reduce.call(null,"abcd",jumble__3278,"frog");
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
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.list,cljs.core.Vector.fromArray([])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.List.EMPTY,cljs.core.list("﷑'apply","﷑'list",(new cljs.core.Vector(null, []))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([1,2,3]),cljs.core.apply.call(null,cljs.core.list,cljs.core.Vector.fromArray([1,2,3])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [1,2,3])),cljs.core.list("﷑'apply","﷑'list",(new cljs.core.Vector(null, [1,2,3]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,6,cljs.core.apply.call(null,cljs.core.apply,cljs.core.Vector.fromArray([cljs.core._PLUS_,cljs.core.Vector.fromArray([1,2,3])])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",6,cljs.core.list("﷑'apply","﷑'apply",(new cljs.core.Vector(null, ["﷑'+",(new cljs.core.Vector(null, [1,2,3]))]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,3,cljs.core.apply.call(null,(function() { 
var G__3407__delegate = function (args){
return cljs.core._PLUS_.call(null,cljs.core.nth.call(null,args,0),cljs.core.nth.call(null,args,1),cljs.core.nth.call(null,args,2));
};
var G__3407 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3407__delegate.call(this, args);
};
G__3407.cljs$lang$maxFixedArity = 0;
G__3407.cljs$lang$applyTo = (function (arglist__3408){
var args = cljs.core.seq( arglist__3408 );;
return G__3407__delegate.call(null, args);
});
return G__3407;
})()
,cljs.core.iterate.call(null,cljs.core.inc,0)))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",3,cljs.core.list("﷑'apply",cljs.core.list("﷑'fn",(new cljs.core.Vector(null, ["﷑'&","﷑'args"])),cljs.core.list("﷑'+",cljs.core.list("﷑'nth","﷑'args",0),cljs.core.list("﷑'nth","﷑'args",1),cljs.core.list("﷑'nth","﷑'args",2))),cljs.core.list("﷑'iterate","﷑'inc",0)))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([0,1,2,3,4]),cljs.core.take.call(null,5,cljs.core.apply.call(null,(function() { 
var G__3409__delegate = function (m){
return m;
};
var G__3409 = function (var_args){
var m = null;
if (goog.isDef(var_args)) {
  m = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3409__delegate.call(this, m);
};
G__3409.cljs$lang$maxFixedArity = 0;
G__3409.cljs$lang$applyTo = (function (arglist__3410){
var m = cljs.core.seq( arglist__3410 );;
return G__3409__delegate.call(null, m);
});
return G__3409;
})()
,cljs.core.iterate.call(null,cljs.core.inc,0))))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [0,1,2,3,4])),cljs.core.list("﷑'take",5,cljs.core.list("﷑'apply",cljs.core.list("﷑'fn",(new cljs.core.Vector(null, ["﷑'&","﷑'m"])),"﷑'m"),cljs.core.list("﷑'iterate","﷑'inc",0))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([1,2,3,4,5]),cljs.core.take.call(null,5,cljs.core.apply.call(null,(function() { 
var G__3411__delegate = function (x,m){
return m;
};
var G__3411 = function (x,var_args){
var m = null;
if (goog.isDef(var_args)) {
  m = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__3411__delegate.call(this, x, m);
};
G__3411.cljs$lang$maxFixedArity = 1;
G__3411.cljs$lang$applyTo = (function (arglist__3412){
var x = cljs.core.first(arglist__3412);
var m = cljs.core.rest(arglist__3412);
return G__3411__delegate.call(null, x, m);
});
return G__3411;
})()
,cljs.core.iterate.call(null,cljs.core.inc,0))))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [1,2,3,4,5])),cljs.core.list("﷑'take",5,cljs.core.list("﷑'apply",cljs.core.list("﷑'fn",(new cljs.core.Vector(null, ["﷑'x","﷑'&","﷑'m"])),"﷑'m"),cljs.core.list("﷑'iterate","﷑'inc",0))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([2,3,4,5,6]),cljs.core.take.call(null,5,cljs.core.apply.call(null,(function() { 
var G__3413__delegate = function (x,y,m){
return m;
};
var G__3413 = function (x,y,var_args){
var m = null;
if (goog.isDef(var_args)) {
  m = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3413__delegate.call(this, x, y, m);
};
G__3413.cljs$lang$maxFixedArity = 2;
G__3413.cljs$lang$applyTo = (function (arglist__3414){
var x = cljs.core.first(arglist__3414);
var y = cljs.core.first(cljs.core.next(arglist__3414));
var m = cljs.core.rest(cljs.core.next(arglist__3414));
return G__3413__delegate.call(null, x, y, m);
});
return G__3413;
})()
,cljs.core.iterate.call(null,cljs.core.inc,0))))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [2,3,4,5,6])),cljs.core.list("﷑'take",5,cljs.core.list("﷑'apply",cljs.core.list("﷑'fn",(new cljs.core.Vector(null, ["﷑'x","﷑'y","﷑'&","﷑'m"])),"﷑'m"),cljs.core.list("﷑'iterate","﷑'inc",0))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([3,4,5,6,7]),cljs.core.take.call(null,5,cljs.core.apply.call(null,(function() { 
var G__3415__delegate = function (x,y,z,m){
return m;
};
var G__3415 = function (x,y,z,var_args){
var m = null;
if (goog.isDef(var_args)) {
  m = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3415__delegate.call(this, x, y, z, m);
};
G__3415.cljs$lang$maxFixedArity = 3;
G__3415.cljs$lang$applyTo = (function (arglist__3416){
var x = cljs.core.first(arglist__3416);
var y = cljs.core.first(cljs.core.next(arglist__3416));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3416)));
var m = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3416)));
return G__3415__delegate.call(null, x, y, z, m);
});
return G__3415;
})()
,cljs.core.iterate.call(null,cljs.core.inc,0))))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [3,4,5,6,7])),cljs.core.list("﷑'take",5,cljs.core.list("﷑'apply",cljs.core.list("﷑'fn",(new cljs.core.Vector(null, ["﷑'x","﷑'y","﷑'z","﷑'&","﷑'m"])),"﷑'m"),cljs.core.list("﷑'iterate","﷑'inc",0))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([4,5,6,7,8]),cljs.core.take.call(null,5,cljs.core.apply.call(null,(function() { 
var G__3417__delegate = function (x,y,z,a,m){
return m;
};
var G__3417 = function (x,y,z,a,var_args){
var m = null;
if (goog.isDef(var_args)) {
  m = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__3417__delegate.call(this, x, y, z, a, m);
};
G__3417.cljs$lang$maxFixedArity = 4;
G__3417.cljs$lang$applyTo = (function (arglist__3418){
var x = cljs.core.first(arglist__3418);
var y = cljs.core.first(cljs.core.next(arglist__3418));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3418)));
var a = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3418))));
var m = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3418))));
return G__3417__delegate.call(null, x, y, z, a, m);
});
return G__3417;
})()
,cljs.core.iterate.call(null,cljs.core.inc,0))))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [4,5,6,7,8])),cljs.core.list("﷑'take",5,cljs.core.list("﷑'apply",cljs.core.list("﷑'fn",(new cljs.core.Vector(null, ["﷑'x","﷑'y","﷑'z","﷑'a","﷑'&","﷑'m"])),"﷑'m"),cljs.core.list("﷑'iterate","﷑'inc",0))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([5,6,7,8,9]),cljs.core.take.call(null,5,cljs.core.apply.call(null,(function() { 
var G__3419__delegate = function (x,y,z,a,b,m){
return m;
};
var G__3419 = function (x,y,z,a,b,var_args){
var m = null;
if (goog.isDef(var_args)) {
  m = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__3419__delegate.call(this, x, y, z, a, b, m);
};
G__3419.cljs$lang$maxFixedArity = 5;
G__3419.cljs$lang$applyTo = (function (arglist__3420){
var x = cljs.core.first(arglist__3420);
var y = cljs.core.first(cljs.core.next(arglist__3420));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3420)));
var a = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3420))));
var b = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3420)))));
var m = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3420)))));
return G__3419__delegate.call(null, x, y, z, a, b, m);
});
return G__3419;
})()
,cljs.core.iterate.call(null,cljs.core.inc,0))))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [5,6,7,8,9])),cljs.core.list("﷑'take",5,cljs.core.list("﷑'apply",cljs.core.list("﷑'fn",(new cljs.core.Vector(null, ["﷑'x","﷑'y","﷑'z","﷑'a","﷑'b","﷑'&","﷑'m"])),"﷑'m"),cljs.core.list("﷑'iterate","﷑'inc",0))))));
}
var single_arity_non_variadic__3279 = (function (x,y,z){
return cljs.core.Vector.fromArray([z,y,x]);
});
var multiple_arity_non_variadic__3280 = (function() {
var G__3421 = null;
var G__3421__3422 = (function (x){
return x;
});
var G__3421__3423 = (function (x,y){
return cljs.core.Vector.fromArray([y,x]);
});
var G__3421__3424 = (function (x,y,z){
return cljs.core.Vector.fromArray([z,y,x]);
});
G__3421 = function(x,y,z){
switch(arguments.length){
case  1 :
return G__3421__3422.call(this,x);
case  2 :
return G__3421__3423.call(this,x,y);
case  3 :
return G__3421__3424.call(this,x,y,z);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3421;
})()
;
var single_arity_variadic_fixedargs__3281 = (function() { 
var G__3426__delegate = function (x,y,more){
return cljs.core.Vector.fromArray([more,y,x]);
};
var G__3426 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3426__delegate.call(this, x, y, more);
};
G__3426.cljs$lang$maxFixedArity = 2;
G__3426.cljs$lang$applyTo = (function (arglist__3427){
var x = cljs.core.first(arglist__3427);
var y = cljs.core.first(cljs.core.next(arglist__3427));
var more = cljs.core.rest(cljs.core.next(arglist__3427));
return G__3426__delegate.call(null, x, y, more);
});
return G__3426;
})()
;
var single_arity_variadic_nofixedargs__3282 = (function() { 
var G__3428__delegate = function (more){
return more;
};
var G__3428 = function (var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3428__delegate.call(this, more);
};
G__3428.cljs$lang$maxFixedArity = 0;
G__3428.cljs$lang$applyTo = (function (arglist__3429){
var more = cljs.core.seq( arglist__3429 );;
return G__3428__delegate.call(null, more);
});
return G__3428;
})()
;
var multiple_arity_variadic__3283 = (function() {
var G__3430 = null;
var G__3430__3431 = (function (x){
return x;
});
var G__3430__3432 = (function (x,y){
return cljs.core.Vector.fromArray([y,x]);
});
var G__3430__3433 = (function() { 
var G__3435__delegate = function (x,y,more){
return cljs.core.Vector.fromArray([more,y,x]);
};
var G__3435 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3435__delegate.call(this, x, y, more);
};
G__3435.cljs$lang$maxFixedArity = 2;
G__3435.cljs$lang$applyTo = (function (arglist__3436){
var x = cljs.core.first(arglist__3436);
var y = cljs.core.first(cljs.core.next(arglist__3436));
var more = cljs.core.rest(cljs.core.next(arglist__3436));
return G__3435__delegate.call(null, x, y, more);
});
return G__3435;
})()
;
G__3430 = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return G__3430__3431.call(this,x);
case  2 :
return G__3430__3432.call(this,x,y);
default:
return G__3430__3433.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3430.cljs$lang$maxFixedArity = 2;
G__3430.cljs$lang$applyTo = G__3430__3433.cljs$lang$applyTo;
return G__3430;
})()
;

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([3,2,1]),cljs.core.apply.call(null,single_arity_non_variadic__3279,cljs.core.Vector.fromArray([1,2,3])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [3,2,1])),cljs.core.list("﷑'apply","﷑'single-arity-non-variadic",(new cljs.core.Vector(null, [1,2,3]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([3,2,1]),cljs.core.apply.call(null,single_arity_non_variadic__3279,1,cljs.core.Vector.fromArray([2,3])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [3,2,1])),cljs.core.list("﷑'apply","﷑'single-arity-non-variadic",1,(new cljs.core.Vector(null, [2,3]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([3,2,1]),cljs.core.apply.call(null,single_arity_non_variadic__3279,1,2,cljs.core.Vector.fromArray([3])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [3,2,1])),cljs.core.list("﷑'apply","﷑'single-arity-non-variadic",1,2,(new cljs.core.Vector(null, [3]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,42,cljs.core.apply.call(null,multiple_arity_non_variadic__3280,cljs.core.Vector.fromArray([42])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",42,cljs.core.list("﷑'apply","﷑'multiple-arity-non-variadic",(new cljs.core.Vector(null, [42]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([2,1]),cljs.core.apply.call(null,multiple_arity_non_variadic__3280,cljs.core.Vector.fromArray([1,2])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [2,1])),cljs.core.list("﷑'apply","﷑'multiple-arity-non-variadic",(new cljs.core.Vector(null, [1,2]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([2,1]),cljs.core.apply.call(null,multiple_arity_non_variadic__3280,1,cljs.core.Vector.fromArray([2])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [2,1])),cljs.core.list("﷑'apply","﷑'multiple-arity-non-variadic",1,(new cljs.core.Vector(null, [2]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([3,2,1]),cljs.core.apply.call(null,multiple_arity_non_variadic__3280,cljs.core.Vector.fromArray([1,2,3])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [3,2,1])),cljs.core.list("﷑'apply","﷑'multiple-arity-non-variadic",(new cljs.core.Vector(null, [1,2,3]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([3,2,1]),cljs.core.apply.call(null,multiple_arity_non_variadic__3280,1,cljs.core.Vector.fromArray([2,3])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [3,2,1])),cljs.core.list("﷑'apply","﷑'multiple-arity-non-variadic",1,(new cljs.core.Vector(null, [2,3]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([3,2,1]),cljs.core.apply.call(null,multiple_arity_non_variadic__3280,1,2,cljs.core.Vector.fromArray([3])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [3,2,1])),cljs.core.list("﷑'apply","﷑'multiple-arity-non-variadic",1,2,(new cljs.core.Vector(null, [3]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([cljs.core.Vector.fromArray([3,4,5]),2,1]),cljs.core.apply.call(null,single_arity_variadic_fixedargs__3281,cljs.core.Vector.fromArray([1,2,3,4,5])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [(new cljs.core.Vector(null, [3,4,5])),2,1])),cljs.core.list("﷑'apply","﷑'single-arity-variadic-fixedargs",(new cljs.core.Vector(null, [1,2,3,4,5]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([cljs.core.Vector.fromArray([3,4,5]),2,1]),cljs.core.apply.call(null,single_arity_variadic_fixedargs__3281,1,cljs.core.Vector.fromArray([2,3,4,5])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [(new cljs.core.Vector(null, [3,4,5])),2,1])),cljs.core.list("﷑'apply","﷑'single-arity-variadic-fixedargs",1,(new cljs.core.Vector(null, [2,3,4,5]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([cljs.core.Vector.fromArray([3,4,5]),2,1]),cljs.core.apply.call(null,single_arity_variadic_fixedargs__3281,1,2,cljs.core.Vector.fromArray([3,4,5])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [(new cljs.core.Vector(null, [3,4,5])),2,1])),cljs.core.list("﷑'apply","﷑'single-arity-variadic-fixedargs",1,2,(new cljs.core.Vector(null, [3,4,5]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([cljs.core.Vector.fromArray([3,4,5]),2,1]),cljs.core.apply.call(null,single_arity_variadic_fixedargs__3281,1,2,3,cljs.core.Vector.fromArray([4,5])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [(new cljs.core.Vector(null, [3,4,5])),2,1])),cljs.core.list("﷑'apply","﷑'single-arity-variadic-fixedargs",1,2,3,(new cljs.core.Vector(null, [4,5]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([cljs.core.Vector.fromArray([3,4,5]),2,1]),cljs.core.apply.call(null,single_arity_variadic_fixedargs__3281,1,2,3,4,cljs.core.Vector.fromArray([5])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [(new cljs.core.Vector(null, [3,4,5])),2,1])),cljs.core.list("﷑'apply","﷑'single-arity-variadic-fixedargs",1,2,3,4,(new cljs.core.Vector(null, [5]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([3,4,5]),cljs.core.take.call(null,3,cljs.core.first.call(null,cljs.core.apply.call(null,single_arity_variadic_fixedargs__3281,cljs.core.iterate.call(null,cljs.core.inc,1)))))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [3,4,5])),cljs.core.list("﷑'take",3,cljs.core.list("﷑'first",cljs.core.list("﷑'apply","﷑'single-arity-variadic-fixedargs",cljs.core.list("﷑'iterate","﷑'inc",1)))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([2,1]),cljs.core.rest.call(null,cljs.core.apply.call(null,single_arity_variadic_fixedargs__3281,cljs.core.iterate.call(null,cljs.core.inc,1))))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [2,1])),cljs.core.list("﷑'rest",cljs.core.list("﷑'apply","﷑'single-arity-variadic-fixedargs",cljs.core.list("﷑'iterate","﷑'inc",1))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([1,2,3,4,5]),cljs.core.apply.call(null,single_arity_variadic_nofixedargs__3282,cljs.core.Vector.fromArray([1,2,3,4,5])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [1,2,3,4,5])),cljs.core.list("﷑'apply","﷑'single-arity-variadic-nofixedargs",(new cljs.core.Vector(null, [1,2,3,4,5]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([1,2,3,4,5]),cljs.core.apply.call(null,single_arity_variadic_nofixedargs__3282,1,cljs.core.Vector.fromArray([2,3,4,5])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [1,2,3,4,5])),cljs.core.list("﷑'apply","﷑'single-arity-variadic-nofixedargs",1,(new cljs.core.Vector(null, [2,3,4,5]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([1,2,3,4,5]),cljs.core.apply.call(null,single_arity_variadic_nofixedargs__3282,1,2,cljs.core.Vector.fromArray([3,4,5])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [1,2,3,4,5])),cljs.core.list("﷑'apply","﷑'single-arity-variadic-nofixedargs",1,2,(new cljs.core.Vector(null, [3,4,5]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([1,2,3,4,5]),cljs.core.apply.call(null,single_arity_variadic_nofixedargs__3282,1,2,3,cljs.core.Vector.fromArray([4,5])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [1,2,3,4,5])),cljs.core.list("﷑'apply","﷑'single-arity-variadic-nofixedargs",1,2,3,(new cljs.core.Vector(null, [4,5]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([1,2,3,4,5]),cljs.core.apply.call(null,single_arity_variadic_nofixedargs__3282,1,2,3,4,cljs.core.Vector.fromArray([5])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [1,2,3,4,5])),cljs.core.list("﷑'apply","﷑'single-arity-variadic-nofixedargs",1,2,3,4,(new cljs.core.Vector(null, [5]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([1,2,3,4,5]),cljs.core.take.call(null,5,cljs.core.apply.call(null,single_arity_variadic_nofixedargs__3282,cljs.core.iterate.call(null,cljs.core.inc,1))))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [1,2,3,4,5])),cljs.core.list("﷑'take",5,cljs.core.list("﷑'apply","﷑'single-arity-variadic-nofixedargs",cljs.core.list("﷑'iterate","﷑'inc",1))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,42,cljs.core.apply.call(null,multiple_arity_variadic__3283,cljs.core.Vector.fromArray([42])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",42,cljs.core.list("﷑'apply","﷑'multiple-arity-variadic",(new cljs.core.Vector(null, [42]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([2,1]),cljs.core.apply.call(null,multiple_arity_variadic__3283,cljs.core.Vector.fromArray([1,2])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [2,1])),cljs.core.list("﷑'apply","﷑'multiple-arity-variadic",(new cljs.core.Vector(null, [1,2]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([2,1]),cljs.core.apply.call(null,multiple_arity_variadic__3283,1,cljs.core.Vector.fromArray([2])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [2,1])),cljs.core.list("﷑'apply","﷑'multiple-arity-variadic",1,(new cljs.core.Vector(null, [2]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([cljs.core.Vector.fromArray([3,4,5]),2,1]),cljs.core.apply.call(null,multiple_arity_variadic__3283,cljs.core.Vector.fromArray([1,2,3,4,5])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [(new cljs.core.Vector(null, [3,4,5])),2,1])),cljs.core.list("﷑'apply","﷑'multiple-arity-variadic",(new cljs.core.Vector(null, [1,2,3,4,5]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([cljs.core.Vector.fromArray([3,4,5]),2,1]),cljs.core.apply.call(null,multiple_arity_variadic__3283,1,cljs.core.Vector.fromArray([2,3,4,5])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [(new cljs.core.Vector(null, [3,4,5])),2,1])),cljs.core.list("﷑'apply","﷑'multiple-arity-variadic",1,(new cljs.core.Vector(null, [2,3,4,5]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([cljs.core.Vector.fromArray([3,4,5]),2,1]),cljs.core.apply.call(null,multiple_arity_variadic__3283,1,2,cljs.core.Vector.fromArray([3,4,5])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [(new cljs.core.Vector(null, [3,4,5])),2,1])),cljs.core.list("﷑'apply","﷑'multiple-arity-variadic",1,2,(new cljs.core.Vector(null, [3,4,5]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([cljs.core.Vector.fromArray([3,4,5]),2,1]),cljs.core.apply.call(null,multiple_arity_variadic__3283,1,2,3,cljs.core.Vector.fromArray([4,5])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [(new cljs.core.Vector(null, [3,4,5])),2,1])),cljs.core.list("﷑'apply","﷑'multiple-arity-variadic",1,2,3,(new cljs.core.Vector(null, [4,5]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([cljs.core.Vector.fromArray([3,4,5]),2,1]),cljs.core.apply.call(null,multiple_arity_variadic__3283,1,2,3,4,cljs.core.Vector.fromArray([5])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [(new cljs.core.Vector(null, [3,4,5])),2,1])),cljs.core.list("﷑'apply","﷑'multiple-arity-variadic",1,2,3,4,(new cljs.core.Vector(null, [5]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([3,4,5]),cljs.core.take.call(null,3,cljs.core.first.call(null,cljs.core.apply.call(null,multiple_arity_variadic__3283,cljs.core.iterate.call(null,cljs.core.inc,1)))))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [3,4,5])),cljs.core.list("﷑'take",3,cljs.core.list("﷑'first",cljs.core.list("﷑'apply","﷑'multiple-arity-variadic",cljs.core.list("﷑'iterate","﷑'inc",1)))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([2,1]),cljs.core.rest.call(null,cljs.core.apply.call(null,multiple_arity_variadic__3283,cljs.core.iterate.call(null,cljs.core.inc,1))))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [2,1])),cljs.core.list("﷑'rest",cljs.core.list("﷑'apply","﷑'multiple-arity-variadic",cljs.core.list("﷑'iterate","﷑'inc",1))))));
}
var a__3284 = cljs.core.atom.call(null,0);

if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core.deref.call(null,a__3284))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",0,cljs.core.list("﷑'deref","﷑'a"))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,1,cljs.core.swap_BANG_.call(null,a__3284,cljs.core.inc))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",1,cljs.core.list("﷑'swap!","﷑'a","﷑'inc"))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,false,cljs.core.compare_and_set_BANG_.call(null,a__3284,0,42))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",false,cljs.core.list("﷑'compare-and-set!","﷑'a",0,42))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,true,cljs.core.compare_and_set_BANG_.call(null,a__3284,1,7))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",true,cljs.core.list("﷑'compare-and-set!","﷑'a",1,7))));
}
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.meta.call(null,a__3284))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'nil?",cljs.core.list("﷑'meta","﷑'a"))));
}
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.get_validator.call(null,a__3284))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'nil?",cljs.core.list("﷑'get-validator","﷑'a"))));
}
var a__3285 = cljs.core.atom.call(null,0);

if(cljs.core.truth_(cljs.core._EQ_.call(null,1,cljs.core.swap_BANG_.call(null,a__3285,cljs.core._PLUS_,1))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",1,cljs.core.list("﷑'swap!","﷑'a","﷑'+",1))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,4,cljs.core.swap_BANG_.call(null,a__3285,cljs.core._PLUS_,1,2))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",4,cljs.core.list("﷑'swap!","﷑'a","﷑'+",1,2))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,10,cljs.core.swap_BANG_.call(null,a__3285,cljs.core._PLUS_,1,2,3))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",10,cljs.core.list("﷑'swap!","﷑'a","﷑'+",1,2,3))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,20,cljs.core.swap_BANG_.call(null,a__3285,cljs.core._PLUS_,1,2,3,4))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",20,cljs.core.list("﷑'swap!","﷑'a","﷑'+",1,2,3,4))));
}
var a__3286 = cljs.core.atom.call(null,cljs.core.Vector.fromArray([1]),"﷐'validator",cljs.core.coll_QMARK_,"﷐'meta",cljs.core.ObjMap.fromObject(["﷐'a"],{"﷐'a":1}));

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.coll_QMARK_,cljs.core.get_validator.call(null,a__3286))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=","﷑'coll?",cljs.core.list("﷑'get-validator","﷑'a"))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.ObjMap.fromObject(["﷐'a"],{"﷐'a":1}),cljs.core.meta.call(null,a__3286))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.hash_map("﷐'a",1),cljs.core.list("﷑'meta","﷑'a"))));
}
cljs.core.alter_meta_BANG_.call(null,a__3286,cljs.core.assoc,"﷐'b",2);
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.ObjMap.fromObject(["﷐'a","﷐'b"],{"﷐'a":1,"﷐'b":2}),cljs.core.meta.call(null,a__3286))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.hash_map("﷐'a",1,"﷐'b",2),cljs.core.list("﷑'meta","﷑'a"))));
}
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.empty.call(null,null))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'nil?",cljs.core.list("﷑'empty",null))));
}
var e_lazy_seq__3287 = cljs.core.empty.call(null,cljs.core.with_meta.call(null,(new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,"﷐'a",null);
}))),cljs.core.ObjMap.fromObject(["﷐'b"],{"﷐'b":"﷐'c"})));

if(cljs.core.truth_(cljs.core.seq_QMARK_.call(null,e_lazy_seq__3287)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'seq?","﷑'e-lazy-seq")));
}
if(cljs.core.truth_(cljs.core.empty_QMARK_.call(null,e_lazy_seq__3287)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'empty?","﷑'e-lazy-seq")));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.ObjMap.fromObject(["﷐'b"],{"﷐'b":"﷐'c"}),cljs.core.meta.call(null,e_lazy_seq__3287))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.hash_map("﷐'b","﷐'c"),cljs.core.list("﷑'meta","﷑'e-lazy-seq"))));
}
var e_list__3288 = cljs.core.empty.call(null,cljs.core.with_meta(cljs.core.list(1,2,3),cljs.core.hash_map("﷐'b","﷐'c")));

if(cljs.core.truth_(cljs.core.seq_QMARK_.call(null,e_list__3288)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'seq?","﷑'e-list")));
}
if(cljs.core.truth_(cljs.core.empty_QMARK_.call(null,e_list__3288)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'empty?","﷑'e-list")));
}
var e_elist__3289 = cljs.core.empty.call(null,cljs.core.with_meta(cljs.core.List.EMPTY,cljs.core.hash_map("﷐'b","﷐'c")));

if(cljs.core.truth_(cljs.core.seq_QMARK_.call(null,e_elist__3289)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'seq?","﷑'e-elist")));
}
if(cljs.core.truth_(cljs.core.empty_QMARK_.call(null,e_elist__3289)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'empty?","﷑'e-elist")));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,"﷐'c",cljs.core.get.call(null,cljs.core.meta.call(null,e_elist__3289),"﷐'b"))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=","﷐'c",cljs.core.list("﷑'get",cljs.core.list("﷑'meta","﷑'e-elist"),"﷐'b"))));
}
var e_cons__3290 = cljs.core.empty.call(null,cljs.core.with_meta.call(null,cljs.core.cons.call(null,"﷐'a",null),cljs.core.ObjMap.fromObject(["﷐'b"],{"﷐'b":"﷐'c"})));

if(cljs.core.truth_(cljs.core.seq_QMARK_.call(null,e_cons__3290)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'seq?","﷑'e-cons")));
}
if(cljs.core.truth_(cljs.core.empty_QMARK_.call(null,e_cons__3290)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'empty?","﷑'e-cons")));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.ObjMap.fromObject(["﷐'b"],{"﷐'b":"﷐'c"}),cljs.core.meta.call(null,e_cons__3290))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.hash_map("﷐'b","﷐'c"),cljs.core.list("﷑'meta","﷑'e-cons"))));
}
var e_vec__3291 = cljs.core.empty.call(null,cljs.core.with_meta(cljs.core.Vector.fromArray(["﷐'a","﷐'d","﷐'g"]),cljs.core.ObjMap.fromObject(["﷐'b"],{"﷐'b":"﷐'c"})));

if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,e_vec__3291)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'vector?","﷑'e-vec")));
}
if(cljs.core.truth_(cljs.core.empty_QMARK_.call(null,e_vec__3291)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'empty?","﷑'e-vec")));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.ObjMap.fromObject(["﷐'b"],{"﷐'b":"﷐'c"}),cljs.core.meta.call(null,e_vec__3291))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.hash_map("﷐'b","﷐'c"),cljs.core.list("﷑'meta","﷑'e-vec"))));
}
var e_omap__3292 = cljs.core.empty.call(null,cljs.core.with_meta(cljs.core.ObjMap.fromObject(["﷐'a","﷐'g"],{"﷐'a":"﷐'d","﷐'g":"﷐'h"}),cljs.core.ObjMap.fromObject(["﷐'b"],{"﷐'b":"﷐'c"})));

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,e_omap__3292)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'map?","﷑'e-omap")));
}
if(cljs.core.truth_(cljs.core.empty_QMARK_.call(null,e_omap__3292)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'empty?","﷑'e-omap")));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.ObjMap.fromObject(["﷐'b"],{"﷐'b":"﷐'c"}),cljs.core.meta.call(null,e_omap__3292))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.hash_map("﷐'b","﷐'c"),cljs.core.list("﷑'meta","﷑'e-omap"))));
}
var e_hmap__3293 = cljs.core.empty.call(null,cljs.core.with_meta(cljs.core.HashMap.fromArrays([cljs.core.Vector.fromArray([1,2]),"﷐'g"],["﷐'d","﷐'h"]),cljs.core.ObjMap.fromObject(["﷐'b"],{"﷐'b":"﷐'c"})));

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,e_hmap__3293)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'map?","﷑'e-hmap")));
}
if(cljs.core.truth_(cljs.core.empty_QMARK_.call(null,e_hmap__3293)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'empty?","﷑'e-hmap")));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.ObjMap.fromObject(["﷐'b"],{"﷐'b":"﷐'c"}),cljs.core.meta.call(null,e_hmap__3293))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.hash_map("﷐'b","﷐'c"),cljs.core.list("﷑'meta","﷑'e-hmap"))));
}
var a__3294 = cljs.core.atom.call(null,null);

if(cljs.core.truth_(cljs.core._EQ_.call(null,1,1)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",1,cljs.core.list("﷑'try",1))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,2,(function (){try{throw (new goog.global['Error']());
}catch (e3296){if(cljs.core.truth_(cljs.core.instance_QMARK_.call(null,goog.global['Error'],e3296)))
{var e__3297 = e3296;

return 2;
} else
{if(cljs.core.truth_("﷐'else"))
{throw e3296;
} else
{return null;
}
}
}})())))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",2,cljs.core.list("﷑'try",1,cljs.core.list("﷑'throw",cljs.core.list("﷑'js/Error.")),cljs.core.list("﷑'catch","﷑'js/Error","﷑'e",2)))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,2,(function (){try{throw (new goog.global['Error']());
}catch (e3298){if(cljs.core.truth_(cljs.core.instance_QMARK_.call(null,goog.global['Error'],e3298)))
{var e__3299 = e3298;

return 2;
} else
{if(cljs.core.truth_("﷐'else"))
{throw e3298;
} else
{return null;
}
}
}})())))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",2,cljs.core.list("﷑'try",1,cljs.core.list("﷑'throw",cljs.core.list("﷑'js/Error.")),cljs.core.list("﷑'catch","﷑'js/Error","﷑'e",1,2)))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,1,(function (){try{return 1;
}finally {cljs.core.reset_BANG_.call(null,a__3294,42);
}})())))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",1,cljs.core.list("﷑'try",1,cljs.core.list("﷑'finally",cljs.core.list("﷑'reset!","﷑'a",42))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,42,cljs.core.deref.call(null,a__3294))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",42,cljs.core.list("﷑'deref","﷑'a"))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([3]),cljs.core.nthnext.call(null,cljs.core.Vector.fromArray([1,2,3]),2))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [3])),cljs.core.list("﷑'nthnext",(new cljs.core.Vector(null, [1,2,3])),2))));
}
var v__3301 = cljs.core.Vector.fromArray([1,2,3]);

if(cljs.core.truth_(cljs.core._EQ_.call(null,v__3301,(function (){var iter__159__auto____3306 = (function iter__3302(s__3303){
return (new cljs.core.LazySeq(null,false,(function (){
var s__3303__3304 = s__3303;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__3303__3304)))
{var e__3305 = cljs.core.first.call(null,s__3303__3304);

return cljs.core.cons.call(null,e__3305,iter__3302.call(null,cljs.core.rest.call(null,s__3303__3304)));
} else
{return null;
}
break;
}
})));
});

return iter__159__auto____3306.call(null,v__3301);
})())))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=","﷑'v",cljs.core.list("﷑'for",(new cljs.core.Vector(null, ["﷑'e","﷑'v"])),"﷑'e"))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([cljs.core.Vector.fromArray([1,1]),cljs.core.Vector.fromArray([2,4]),cljs.core.Vector.fromArray([3,9])]),(function (){var iter__159__auto____3312 = (function iter__3307(s__3308){
return (new cljs.core.LazySeq(null,false,(function (){
var s__3308__3309 = s__3308;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__3308__3309)))
{var e__3310 = cljs.core.first.call(null,s__3308__3309);

var m__3311 = cljs.core._STAR_.call(null,e__3310,e__3310);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([e__3310,m__3311]),iter__3307.call(null,cljs.core.rest.call(null,s__3308__3309)));
} else
{return null;
}
break;
}
})));
});

return iter__159__auto____3312.call(null,v__3301);
})())))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [(new cljs.core.Vector(null, [1,1])),(new cljs.core.Vector(null, [2,4])),(new cljs.core.Vector(null, [3,9]))])),cljs.core.list("﷑'for",(new cljs.core.Vector(null, ["﷑'e","﷑'v","﷐'let",(new cljs.core.Vector(null, ["﷑'m",cljs.core.list("﷑'*","﷑'e","﷑'e")]))])),(new cljs.core.Vector(null, ["﷑'e","﷑'m"]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([1,2]),(function (){var iter__159__auto____3317 = (function iter__3313(s__3314){
return (new cljs.core.LazySeq(null,false,(function (){
var s__3314__3315 = s__3314;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__3314__3315)))
{var e__3316 = cljs.core.first.call(null,s__3314__3315);

if(cljs.core.truth_(cljs.core._LT_.call(null,e__3316,3)))
{return cljs.core.cons.call(null,e__3316,iter__3313.call(null,cljs.core.rest.call(null,s__3314__3315)));
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

return iter__159__auto____3317.call(null,v__3301);
})())))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [1,2])),cljs.core.list("﷑'for",(new cljs.core.Vector(null, ["﷑'e","﷑'v","﷐'while",cljs.core.list("﷑'<","﷑'e",3)])),"﷑'e"))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([3]),(function (){var iter__159__auto____3322 = (function iter__3318(s__3319){
return (new cljs.core.LazySeq(null,false,(function (){
var s__3319__3320 = s__3319;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__3319__3320)))
{var e__3321 = cljs.core.first.call(null,s__3319__3320);

if(cljs.core.truth_(cljs.core._GT_.call(null,e__3321,2)))
{return cljs.core.cons.call(null,e__3321,iter__3318.call(null,cljs.core.rest.call(null,s__3319__3320)));
} else
{{
var G__3437 = cljs.core.rest.call(null,s__3319__3320);
s__3319__3320 = G__3437;
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

return iter__159__auto____3322.call(null,v__3301);
})())))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [3])),cljs.core.list("﷑'for",(new cljs.core.Vector(null, ["﷑'e","﷑'v","﷐'when",cljs.core.list("﷑'>","﷑'e",2)])),"﷑'e"))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([cljs.core.Vector.fromArray([1,1]),cljs.core.Vector.fromArray([2,4])]),(function (){var iter__159__auto____3328 = (function iter__3323(s__3324){
return (new cljs.core.LazySeq(null,false,(function (){
var s__3324__3325 = s__3324;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__3324__3325)))
{var e__3326 = cljs.core.first.call(null,s__3324__3325);

if(cljs.core.truth_(cljs.core._LT_.call(null,e__3326,3)))
{var m__3327 = cljs.core._STAR_.call(null,e__3326,e__3326);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([e__3326,m__3327]),iter__3323.call(null,cljs.core.rest.call(null,s__3324__3325)));
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

return iter__159__auto____3328.call(null,v__3301);
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
var a10__3329 = cljs.core.partial.call(null,cljs.core._PLUS_,10);
var a20__3330 = cljs.core.partial.call(null,cljs.core._PLUS_,10,10);
var a21__3331 = cljs.core.partial.call(null,cljs.core._PLUS_,10,10,1);
var a22__3332 = cljs.core.partial.call(null,cljs.core._PLUS_,10,5,4,3);
var a23__3333 = cljs.core.partial.call(null,cljs.core._PLUS_,10,5,4,3,1);

if(cljs.core.truth_(cljs.core._EQ_.call(null,110,a10__3329.call(null,100))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",110,cljs.core.list("﷑'a10",100))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,120,a20__3330.call(null,100))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",120,cljs.core.list("﷑'a20",100))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,121,a21__3331.call(null,100))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",121,cljs.core.list("﷑'a21",100))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,122,a22__3332.call(null,100))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",122,cljs.core.list("﷑'a22",100))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,123,a23__3333.call(null,100))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",123,cljs.core.list("﷑'a23",100))));
}
var n2__3334 = cljs.core.comp.call(null,cljs.core.first,cljs.core.rest);
var n3__3335 = cljs.core.comp.call(null,cljs.core.first,cljs.core.rest,cljs.core.rest);
var n4__3336 = cljs.core.comp.call(null,cljs.core.first,cljs.core.rest,cljs.core.rest,cljs.core.rest);
var n5__3337 = cljs.core.comp.call(null,cljs.core.first,cljs.core.rest,cljs.core.rest,cljs.core.rest,cljs.core.rest);
var n6__3338 = cljs.core.comp.call(null,cljs.core.first,cljs.core.rest,cljs.core.rest,cljs.core.rest,cljs.core.rest,cljs.core.rest);

if(cljs.core.truth_(cljs.core._EQ_.call(null,2,n2__3334.call(null,cljs.core.Vector.fromArray([1,2,3,4,5,6,7])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",2,cljs.core.list("﷑'n2",(new cljs.core.Vector(null, [1,2,3,4,5,6,7]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,3,n3__3335.call(null,cljs.core.Vector.fromArray([1,2,3,4,5,6,7])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",3,cljs.core.list("﷑'n3",(new cljs.core.Vector(null, [1,2,3,4,5,6,7]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,4,n4__3336.call(null,cljs.core.Vector.fromArray([1,2,3,4,5,6,7])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",4,cljs.core.list("﷑'n4",(new cljs.core.Vector(null, [1,2,3,4,5,6,7]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,5,n5__3337.call(null,cljs.core.Vector.fromArray([1,2,3,4,5,6,7])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",5,cljs.core.list("﷑'n5",(new cljs.core.Vector(null, [1,2,3,4,5,6,7]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,6,n6__3338.call(null,cljs.core.Vector.fromArray([1,2,3,4,5,6,7])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",6,cljs.core.list("﷑'n6",(new cljs.core.Vector(null, [1,2,3,4,5,6,7]))))));
}
var sf__3339 = cljs.core.some_fn.call(null,cljs.core.number_QMARK_,cljs.core.keyword_QMARK_,cljs.core.symbol_QMARK_);

if(cljs.core.truth_(sf__3339.call(null,"﷐'foo",1)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'sf","﷐'foo",1)));
}
if(cljs.core.truth_(sf__3339.call(null,"﷐'foo")))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'sf","﷐'foo")));
}
if(cljs.core.truth_(sf__3339.call(null,"﷑'bar",1)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'sf",cljs.core.list("﷑'quote","﷑'bar"),1)));
}
if(cljs.core.truth_(cljs.core.not.call(null,sf__3339.call(null,cljs.core.Vector.fromArray([]),cljs.core.List.EMPTY))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'not",cljs.core.list("﷑'sf",(new cljs.core.Vector(null, [])),cljs.core.List.EMPTY))));
}
var ep__3340 = cljs.core.every_pred.call(null,cljs.core.number_QMARK_,cljs.core.zero_QMARK_);

if(cljs.core.truth_(ep__3340.call(null,0,0,0)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'ep",0,0,0)));
}
if(cljs.core.truth_(cljs.core.not.call(null,ep__3340.call(null,1,2,3,0))))
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
var x__3341 = cljs.core.array.call(null,1,2,3);

x__3341.foo = "﷐'hello";
if(cljs.core.truth_(cljs.core._EQ_.call(null,x__3341.foo,"﷐'hello")))
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
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([2,1]),(function (){var vec__3342__3343 = cljs.core.Vector.fromArray([1,2]);
var a__3344 = cljs.core.nth.call(null,vec__3342__3343,0,null);
var b__3345 = cljs.core.nth.call(null,vec__3342__3343,1,null);

return cljs.core.Vector.fromArray([b__3345,a__3344]);
})())))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [2,1])),cljs.core.list("﷑'let",(new cljs.core.Vector(null, [(new cljs.core.Vector(null, ["﷑'a","﷑'b"])),(new cljs.core.Vector(null, [1,2]))])),(new cljs.core.Vector(null, ["﷑'b","﷑'a"]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.set([1,2]),(function (){var vec__3346__3347 = cljs.core.Vector.fromArray([1,2]);
var a__3348 = cljs.core.nth.call(null,vec__3346__3347,0,null);
var b__3349 = cljs.core.nth.call(null,vec__3346__3347,1,null);

return cljs.core.set([a__3348,b__3349]);
})())))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.set([1,2]),cljs.core.list("﷑'let",(new cljs.core.Vector(null, [(new cljs.core.Vector(null, ["﷑'a","﷑'b"])),(new cljs.core.Vector(null, [1,2]))])),cljs.core.set(["﷑'a","﷑'b"])))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([1,2]),(function (){var map__3350__3351 = cljs.core.ObjMap.fromObject(["﷐'a","﷐'b"],{"﷐'a":1,"﷐'b":2});
var map__3350__3352 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__3350__3351))?cljs.core.apply.call(null,cljs.core.hash_map,map__3350__3351):map__3350__3351);
var a__3353 = cljs.core.get.call(null,map__3350__3352,"﷐'a");
var b__3354 = cljs.core.get.call(null,map__3350__3352,"﷐'b");

return cljs.core.Vector.fromArray([a__3353,b__3354]);
})())))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [1,2])),cljs.core.list("﷑'let",(new cljs.core.Vector(null, [cljs.core.hash_map("﷑'a","﷐'a","﷑'b","﷐'b"),cljs.core.hash_map("﷐'a",1,"﷐'b",2)])),(new cljs.core.Vector(null, ["﷑'a","﷑'b"]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([1,2]),(function (){var map__3355__3356 = cljs.core.ObjMap.fromObject(["﷐'a","﷐'b"],{"﷐'a":1,"﷐'b":2});
var map__3355__3357 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__3355__3356))?cljs.core.apply.call(null,cljs.core.hash_map,map__3355__3356):map__3355__3356);
var b__3358 = cljs.core.get.call(null,map__3355__3357,"﷐'b");
var a__3359 = cljs.core.get.call(null,map__3355__3357,"﷐'a");

return cljs.core.Vector.fromArray([a__3359,b__3358]);
})())))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [1,2])),cljs.core.list("﷑'let",(new cljs.core.Vector(null, [cljs.core.hash_map("﷐'keys",(new cljs.core.Vector(null, ["﷑'a","﷑'b"]))),cljs.core.hash_map("﷐'a",1,"﷐'b",2)])),(new cljs.core.Vector(null, ["﷑'a","﷑'b"]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([1,2,cljs.core.Vector.fromArray([1,2])]),(function (){var vec__3360__3361 = cljs.core.Vector.fromArray([1,2]);
var a__3362 = cljs.core.nth.call(null,vec__3360__3361,0,null);
var b__3363 = cljs.core.nth.call(null,vec__3360__3361,1,null);
var v__3364 = vec__3360__3361;

return cljs.core.Vector.fromArray([a__3362,b__3363,v__3364]);
})())))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [1,2,(new cljs.core.Vector(null, [1,2]))])),cljs.core.list("﷑'let",(new cljs.core.Vector(null, [(new cljs.core.Vector(null, ["﷑'a","﷑'b","﷐'as","﷑'v"])),(new cljs.core.Vector(null, [1,2]))])),(new cljs.core.Vector(null, ["﷑'a","﷑'b","﷑'v"]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([1,42]),(function (){var map__3365__3366 = cljs.core.ObjMap.fromObject(["﷐'a"],{"﷐'a":1});
var map__3365__3367 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__3365__3366))?cljs.core.apply.call(null,cljs.core.hash_map,map__3365__3366):map__3365__3366);
var b__3368 = cljs.core.get.call(null,map__3365__3367,"﷐'b",42);
var a__3369 = cljs.core.get.call(null,map__3365__3367,"﷐'a");

return cljs.core.Vector.fromArray([a__3369,b__3368]);
})())))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [1,42])),cljs.core.list("﷑'let",(new cljs.core.Vector(null, [cljs.core.hash_map("﷐'keys",(new cljs.core.Vector(null, ["﷑'a","﷑'b"])),"﷐'or",cljs.core.hash_map("﷑'b",42)),cljs.core.hash_map("﷐'a",1)])),(new cljs.core.Vector(null, ["﷑'a","﷑'b"]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([1,null]),(function (){var map__3370__3371 = cljs.core.ObjMap.fromObject(["﷐'a"],{"﷐'a":1});
var map__3370__3372 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__3370__3371))?cljs.core.apply.call(null,cljs.core.hash_map,map__3370__3371):map__3370__3371);
var b__3373 = cljs.core.get.call(null,map__3370__3372,"﷐'b");
var a__3374 = cljs.core.get.call(null,map__3370__3372,"﷐'a");

return cljs.core.Vector.fromArray([a__3374,b__3373]);
})())))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [1,null])),cljs.core.list("﷑'let",(new cljs.core.Vector(null, [cljs.core.hash_map("﷐'keys",(new cljs.core.Vector(null, ["﷑'a","﷑'b"])),"﷐'or",cljs.core.hash_map("﷑'c",42)),cljs.core.hash_map("﷐'a",1)])),(new cljs.core.Vector(null, ["﷑'a","﷑'b"]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([2,1]),(function (){var vec__3375__3376 = cljs.core.list(1,2);
var a__3377 = cljs.core.nth.call(null,vec__3375__3376,0,null);
var b__3378 = cljs.core.nth.call(null,vec__3375__3376,1,null);

return cljs.core.Vector.fromArray([b__3378,a__3377]);
})())))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [2,1])),cljs.core.list("﷑'let",(new cljs.core.Vector(null, [(new cljs.core.Vector(null, ["﷑'a","﷑'b"])),cljs.core.list("﷑'quote",cljs.core.list(1,2))])),(new cljs.core.Vector(null, ["﷑'b","﷑'a"]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.HashMap.fromArrays([1],[2]),(function (){var vec__3379__3380 = cljs.core.Vector.fromArray([1,2]);
var a__3381 = cljs.core.nth.call(null,vec__3379__3380,0,null);
var b__3382 = cljs.core.nth.call(null,vec__3379__3380,1,null);

return cljs.core.HashMap.fromArrays([a__3381],[b__3382]);
})())))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.hash_map(1,2),cljs.core.list("﷑'let",(new cljs.core.Vector(null, [(new cljs.core.Vector(null, ["﷑'a","﷑'b"])),(new cljs.core.Vector(null, [1,2]))])),cljs.core.hash_map("﷑'a","﷑'b")))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([2,1]),(function (){var vec__3383__3384 = cljs.core.seq.call(null,cljs.core.Vector.fromArray([1,2]));
var a__3385 = cljs.core.nth.call(null,vec__3383__3384,0,null);
var b__3386 = cljs.core.nth.call(null,vec__3383__3384,1,null);

return cljs.core.Vector.fromArray([b__3386,a__3385]);
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
var a__3387 = cljs.core.to_array.call(null,cljs.core.Vector.fromArray([1,2,3]));

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([10,20,30]),cljs.core.seq.call(null,(function (){var a__192__auto____3388 = a__3387;
var ret__3389 = cljs.core.aclone.call(null,a__192__auto____3388);

var i__3390 = 0;

while(true){
if(cljs.core.truth_(cljs.core._LT_.call(null,i__3390,cljs.core.alength.call(null,a__192__auto____3388))))
{(ret__3389[i__3390] = cljs.core._STAR_.call(null,10,(a__3387[i__3390])));
{
var G__3438 = cljs.core.inc.call(null,i__3390);
i__3390 = G__3438;
continue;
}
} else
{return ret__3389;
}
break;
}
})()))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [10,20,30])),cljs.core.list("﷑'seq",cljs.core.list("﷑'amap","﷑'a","﷑'i","﷑'ret",cljs.core.list("﷑'*",10,cljs.core.list("﷑'aget","﷑'a","﷑'i")))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,6,(function (){var a__198__auto____3391 = a__3387;

var i__3392 = 0;
var ret__3393 = 0;

while(true){
if(cljs.core.truth_(cljs.core._LT_.call(null,i__3392,cljs.core.alength.call(null,a__198__auto____3391))))
{{
var G__3439 = cljs.core.inc.call(null,i__3392);
var G__3440 = cljs.core._PLUS_.call(null,ret__3393,(a__3387[i__3392]));
i__3392 = G__3439;
ret__3393 = G__3440;
continue;
}
} else
{return ret__3393;
}
break;
}
})())))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",6,cljs.core.list("﷑'areduce","﷑'a","﷑'i","﷑'ret",0,cljs.core.list("﷑'+","﷑'ret",cljs.core.list("﷑'aget","﷑'a","﷑'i"))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.seq.call(null,a__3387),cljs.core.seq.call(null,cljs.core.to_array.call(null,cljs.core.Vector.fromArray([1,2,3]))))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'seq","﷑'a"),cljs.core.list("﷑'seq",cljs.core.list("﷑'to-array",(new cljs.core.Vector(null, [1,2,3])))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,42,(a__3387[0] = 42))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",42,cljs.core.list("﷑'aset","﷑'a",0,42))));
}
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,cljs.core.seq.call(null,a__3387),cljs.core.seq.call(null,cljs.core.to_array.call(null,cljs.core.Vector.fromArray([1,2,3]))))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'not=",cljs.core.list("﷑'seq","﷑'a"),cljs.core.list("﷑'seq",cljs.core.list("﷑'to-array",(new cljs.core.Vector(null, [1,2,3])))))));
}
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,a__3387,cljs.core.aclone.call(null,a__3387))))
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
var s__3394 = cljs.core.atom.call(null,cljs.core.Vector.fromArray([]));

var n__204__auto____3395 = 5;

var n__3396 = 0;

while(true){
if(cljs.core.truth_(cljs.core._LT_.call(null,n__3396,n__204__auto____3395)))
{cljs.core.swap_BANG_.call(null,s__3394,cljs.core.conj,n__3396);
{
var G__3441 = cljs.core.inc.call(null,n__3396);
n__3396 = G__3441;
continue;
}
} else
{}
break;
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([0,1,2,3,4]),cljs.core.deref.call(null,s__3394))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [0,1,2,3,4])),cljs.core.list("﷑'clojure.core/deref","﷑'s"))));
}
var v__3397 = cljs.core.Vector.fromArray([1,2,3,4,5]);
var s__3398 = cljs.core.atom.call(null,cljs.core.List.EMPTY);

var G__3399__3400 = cljs.core.seq.call(null,v__3397);

while(true){
if(cljs.core.truth_(G__3399__3400))
{var n__3401 = cljs.core.first.call(null,G__3399__3400);

cljs.core.swap_BANG_.call(null,s__3398,cljs.core.conj,n__3401);
{
var G__3442 = cljs.core.next.call(null,G__3399__3400);
G__3399__3400 = G__3442;
continue;
}
} else
{}
break;
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,s__3398),cljs.core.reverse.call(null,v__3397))))
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
var f__3402 = cljs.core.memoize.call(null,(function (){
return cljs.core.rand.call(null);
}));

f__3402.call(null);
if(cljs.core.truth_(cljs.core._EQ_.call(null,f__3402.call(null),f__3402.call(null))))
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
var d__3403 = cljs.core.group_by.call(null,cljs.core.second,cljs.core.ObjMap.fromObject(["﷐'a","﷐'b","﷐'c","﷐'d","﷐'e","﷐'f"],{"﷐'a":1,"﷐'b":2,"﷐'c":1,"﷐'d":4,"﷐'e":1,"﷐'f":2}));

if(cljs.core.truth_(cljs.core._EQ_.call(null,3,cljs.core.count.call(null,cljs.core.get.call(null,d__3403,1)))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",3,cljs.core.list("﷑'count",cljs.core.list("﷑'get","﷑'d",1)))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,2,cljs.core.count.call(null,cljs.core.get.call(null,d__3403,2)))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",2,cljs.core.list("﷑'count",cljs.core.list("﷑'get","﷑'d",2)))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,1,cljs.core.count.call(null,cljs.core.get.call(null,d__3403,4)))))
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
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([1,3,5,7,9]),cljs.core.keep.call(null,(function (p1__3255_SHARP_){
if(cljs.core.truth_(cljs.core.odd_QMARK_.call(null,p1__3255_SHARP_)))
{return p1__3255_SHARP_;
} else
{return null;
}
}),cljs.core.Vector.fromArray([1,2,3,4,5,6,7,8,9,10])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [1,3,5,7,9])),cljs.core.list("﷑'keep",cljs.core.list("﷑'fn*",(new cljs.core.Vector(null, ["﷑'p1__3255#"])),cljs.core.list("﷑'if",cljs.core.list("﷑'odd?","﷑'p1__3255#"),"﷑'p1__3255#")),(new cljs.core.Vector(null, [1,2,3,4,5,6,7,8,9,10]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([2,4,6,8,10]),cljs.core.keep.call(null,(function (p1__3256_SHARP_){
if(cljs.core.truth_(cljs.core.even_QMARK_.call(null,p1__3256_SHARP_)))
{return p1__3256_SHARP_;
} else
{return null;
}
}),cljs.core.Vector.fromArray([1,2,3,4,5,6,7,8,9,10])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [2,4,6,8,10])),cljs.core.list("﷑'keep",cljs.core.list("﷑'fn*",(new cljs.core.Vector(null, ["﷑'p1__3256#"])),cljs.core.list("﷑'if",cljs.core.list("﷑'even?","﷑'p1__3256#"),"﷑'p1__3256#")),(new cljs.core.Vector(null, [1,2,3,4,5,6,7,8,9,10]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([1,3,5,7,9]),cljs.core.keep_indexed.call(null,(function (p1__3257_SHARP_,p2__3258_SHARP_){
if(cljs.core.truth_(cljs.core.odd_QMARK_.call(null,p1__3257_SHARP_)))
{return p2__3258_SHARP_;
} else
{return null;
}
}),cljs.core.Vector.fromArray([0,1,2,3,4,5,6,7,8,9,10])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [1,3,5,7,9])),cljs.core.list("﷑'keep-indexed",cljs.core.list("﷑'fn*",(new cljs.core.Vector(null, ["﷑'p1__3257#","﷑'p2__3258#"])),cljs.core.list("﷑'if",cljs.core.list("﷑'odd?","﷑'p1__3257#"),"﷑'p2__3258#")),(new cljs.core.Vector(null, [0,1,2,3,4,5,6,7,8,9,10]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([2,4,5]),cljs.core.keep_indexed.call(null,(function (p1__3260_SHARP_,p2__3259_SHARP_){
if(cljs.core.truth_(cljs.core.pos_QMARK_.call(null,p2__3259_SHARP_)))
{return p1__3260_SHARP_;
} else
{return null;
}
}),cljs.core.Vector.fromArray([-9,0,29,-7,45,3,-8])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [2,4,5])),cljs.core.list("﷑'keep-indexed",cljs.core.list("﷑'fn*",(new cljs.core.Vector(null, ["﷑'p1__3260#","﷑'p2__3259#"])),cljs.core.list("﷑'if",cljs.core.list("﷑'pos?","﷑'p2__3259#"),"﷑'p1__3260#")),(new cljs.core.Vector(null, [-9,0,29,-7,45,3,-8]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([cljs.core.Vector.fromArray([0,"﷐'a"]),cljs.core.Vector.fromArray([1,"﷐'b"]),cljs.core.Vector.fromArray([2,"﷐'c"])]),cljs.core.map_indexed.call(null,(function (p1__3261_SHARP_,p2__3262_SHARP_){
return cljs.core.vector.call(null,p1__3261_SHARP_,p2__3262_SHARP_);
}),cljs.core.Vector.fromArray(["﷐'a","﷐'b","﷐'c"])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [(new cljs.core.Vector(null, [0,"﷐'a"])),(new cljs.core.Vector(null, [1,"﷐'b"])),(new cljs.core.Vector(null, [2,"﷐'c"]))])),cljs.core.list("﷑'map-indexed",cljs.core.list("﷑'fn*",(new cljs.core.Vector(null, ["﷑'p1__3261#","﷑'p2__3262#"])),cljs.core.list("﷑'vector","﷑'p1__3261#","﷑'p2__3262#")),(new cljs.core.Vector(null, ["﷐'a","﷐'b","﷐'c"]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.hash_map("Foo",cljs.core.list("foo","FOO","fOo"),"Bar",cljs.core.list("bar","BAR","BAr"),"Baz",(new cljs.core.Vector(null, ["baz"])),"Qux",(new cljs.core.Vector(null, ["qux","quux"]))),cljs.core.merge_with.call(null,cljs.core.concat,cljs.core.ObjMap.fromObject(["Foo","Bar","Baz"],{"Foo":cljs.core.Vector.fromArray(["foo","FOO"]),"Bar":cljs.core.Vector.fromArray(["bar","BAR"]),"Baz":cljs.core.Vector.fromArray(["baz"])}),cljs.core.ObjMap.fromObject(["Foo","Bar","Qux"],{"Foo":cljs.core.Vector.fromArray(["fOo"]),"Bar":cljs.core.Vector.fromArray(["BAr"]),"Qux":cljs.core.Vector.fromArray(["qux","quux"])})))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'quote",cljs.core.hash_map("Foo",cljs.core.list("foo","FOO","fOo"),"Bar",cljs.core.list("bar","BAR","BAr"),"Baz",(new cljs.core.Vector(null, ["baz"])),"Qux",(new cljs.core.Vector(null, ["qux","quux"])))),cljs.core.list("﷑'merge-with","﷑'concat",cljs.core.hash_map("Foo",(new cljs.core.Vector(null, ["foo","FOO"])),"Bar",(new cljs.core.Vector(null, ["bar","BAR"])),"Baz",(new cljs.core.Vector(null, ["baz"]))),cljs.core.hash_map("Foo",(new cljs.core.Vector(null, ["fOo"])),"Bar",(new cljs.core.Vector(null, ["BAr"])),"Qux",(new cljs.core.Vector(null, ["qux","quux"])))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.ObjMap.fromObject(["﷐'a","﷐'b","﷐'c"],{"﷐'a":111,"﷐'b":102,"﷐'c":13}),cljs.core.merge_with.call(null,cljs.core._PLUS_,cljs.core.ObjMap.fromObject(["﷐'a","﷐'b","﷐'c"],{"﷐'a":1,"﷐'b":2,"﷐'c":3}),cljs.core.ObjMap.fromObject(["﷐'a","﷐'c"],{"﷐'a":10,"﷐'c":10}),cljs.core.ObjMap.fromObject(["﷐'a","﷐'b"],{"﷐'a":100,"﷐'b":100})))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.hash_map("﷐'a",111,"﷐'b",102,"﷐'c",13),cljs.core.list("﷑'merge-with","﷑'+",cljs.core.hash_map("﷐'a",1,"﷐'b",2,"﷐'c",3),cljs.core.hash_map("﷐'a",10,"﷐'c",10),cljs.core.hash_map("﷐'a",100,"﷐'b",100)))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.ObjMap.fromObject(["﷐'a","﷐'b","﷐'c"],{"﷐'a":3,"﷐'b":102,"﷐'c":13}),cljs.core.apply.call(null,cljs.core.merge_with,cljs.core.Vector.fromArray([cljs.core._PLUS_,cljs.core.ObjMap.fromObject(["﷐'a","﷐'b"],{"﷐'a":1,"﷐'b":100}),cljs.core.ObjMap.fromObject(["﷐'a","﷐'b","﷐'c"],{"﷐'a":1,"﷐'b":2,"﷐'c":3}),cljs.core.ObjMap.fromObject(["﷐'a","﷐'c"],{"﷐'a":1,"﷐'c":10})])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.hash_map("﷐'a",3,"﷐'b",102,"﷐'c",13),cljs.core.list("﷑'apply","﷑'merge-with",(new cljs.core.Vector(null, ["﷑'+",cljs.core.hash_map("﷐'a",1,"﷐'b",100),cljs.core.hash_map("﷐'a",1,"﷐'b",2,"﷐'c",3),cljs.core.hash_map("﷐'a",1,"﷐'c",10)]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,(new cljs.core.Vector(null, ["﷑'a","﷑'c","﷑'e"])),cljs.core.replace.call(null,(new cljs.core.Vector(null, ["﷑'a","﷑'b","﷑'c","﷑'d","﷑'e"])),cljs.core.Vector.fromArray([0,2,4])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.list("﷑'quote",(new cljs.core.Vector(null, ["﷑'a","﷑'c","﷑'e"]))),cljs.core.list("﷑'replace",cljs.core.list("﷑'quote",(new cljs.core.Vector(null, ["﷑'a","﷑'b","﷑'c","﷑'d","﷑'e"]))),(new cljs.core.Vector(null, [0,2,4]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray(["﷐'one","﷐'zero","﷐'two","﷐'zero"]),cljs.core.replace.call(null,cljs.core.HashMap.fromArrays([0,1,2],["﷐'zero","﷐'one","﷐'two"]),cljs.core.list(1,0,2,0)))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, ["﷐'one","﷐'zero","﷐'two","﷐'zero"])),cljs.core.list("﷑'replace",cljs.core.hash_map(0,"﷐'zero",1,"﷐'one",2,"﷐'two"),cljs.core.list("﷑'quote",cljs.core.list(1,0,2,0))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([cljs.core.Vector.fromArray([1,2]),cljs.core.Vector.fromArray([3,4,5])]),cljs.core.split_at.call(null,2,cljs.core.Vector.fromArray([1,2,3,4,5])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [(new cljs.core.Vector(null, [1,2])),(new cljs.core.Vector(null, [3,4,5]))])),cljs.core.list("﷑'split-at",2,(new cljs.core.Vector(null, [1,2,3,4,5]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray([cljs.core.Vector.fromArray([1,2,3]),cljs.core.Vector.fromArray([4,5])]),cljs.core.split_with.call(null,cljs.core.partial.call(null,cljs.core._GT__EQ_,3),cljs.core.Vector.fromArray([1,2,3,4,5])))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, [(new cljs.core.Vector(null, [1,2,3])),(new cljs.core.Vector(null, [4,5]))])),cljs.core.list("﷑'split-with",cljs.core.list("﷑'partial","﷑'>=",3),(new cljs.core.Vector(null, [1,2,3,4,5]))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,10000,cljs.core.trampoline.call(null,(function f(n){
if(cljs.core.truth_(cljs.core._GT__EQ_.call(null,n,10000)))
{return n;
} else
{return (function (){
return f.call(null,cljs.core.inc.call(null,n));
});
}
}),0))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",10000,cljs.core.list("﷑'trampoline",cljs.core.list("﷑'fn","﷑'f",(new cljs.core.Vector(null, ["﷑'n"])),cljs.core.list("﷑'if",cljs.core.list("﷑'>=","﷑'n",10000),"﷑'n",cljs.core.list("﷑'fn*",(new cljs.core.Vector(null, [])),cljs.core.list("﷑'f",cljs.core.list("﷑'inc","﷑'n"))))),0))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.ObjMap.fromObject(["﷐'a"],{"﷐'a":1}),cljs.core.meta.call(null,cljs.core.vary_meta.call(null,cljs.core.Vector.fromArray([]),cljs.core.assoc,"﷐'a",1)))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.hash_map("﷐'a",1),cljs.core.list("﷑'meta",cljs.core.list("﷑'vary-meta",(new cljs.core.Vector(null, [])),"﷑'assoc","﷐'a",1)))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.ObjMap.fromObject(["﷐'a","﷐'b"],{"﷐'a":1,"﷐'b":2}),cljs.core.meta.call(null,cljs.core.vary_meta.call(null,cljs.core.with_meta.call(null,cljs.core.Vector.fromArray([]),cljs.core.ObjMap.fromObject(["﷐'b"],{"﷐'b":2})),cljs.core.assoc,"﷐'a",1)))))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.hash_map("﷐'a",1,"﷐'b",2),cljs.core.list("﷑'meta",cljs.core.list("﷑'vary-meta",cljs.core.list("﷑'with-meta",(new cljs.core.Vector(null, [])),cljs.core.hash_map("﷐'b",2)),"﷑'assoc","﷐'a",1)))));
}
return "﷐'ok";
});
