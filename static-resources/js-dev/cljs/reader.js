goog.provide('cljs.reader');
goog.require('cljs.core');
goog.require('goog.string');
cljs.reader.PushbackReader = {};
cljs.reader.read_char = (function read_char(reader){
if(cljs.core.truth_((function (){var and__3574__auto____3274 = reader;

if(cljs.core.truth_(and__3574__auto____3274))
{return reader.cljs$reader$PushbackReader$read_char;
} else
{return and__3574__auto____3274;
}
})()))
{return reader.cljs$reader$PushbackReader$read_char(reader);
} else
{return (function (){var or__3576__auto____3275 = (read_char[goog.typeOf.call(null,reader)]);

if(cljs.core.truth_(or__3576__auto____3275))
{return or__3576__auto____3275;
} else
{return (read_char["_"]);
}
})().call(null,reader);
}
});
cljs.reader.unread = (function unread(reader,ch){
if(cljs.core.truth_((function (){var and__3574__auto____3276 = reader;

if(cljs.core.truth_(and__3574__auto____3276))
{return reader.cljs$reader$PushbackReader$unread;
} else
{return and__3574__auto____3276;
}
})()))
{return reader.cljs$reader$PushbackReader$unread(reader,ch);
} else
{return (function (){var or__3576__auto____3277 = (unread[goog.typeOf.call(null,reader)]);

if(cljs.core.truth_(or__3576__auto____3277))
{return or__3576__auto____3277;
} else
{return (unread["_"]);
}
})().call(null,reader,ch);
}
});

/**
* @constructor
*/
cljs.reader.StringPushbackReader = (function (s,index_atom,buffer_atom){
this.s = s;
this.index_atom = index_atom;
this.buffer_atom = buffer_atom;
})
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$ = true;
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$read_char = (function (reader){
var this__3278 = this;
if(cljs.core.truth_(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,this__3278.buffer_atom))))
{var idx__3279 = cljs.core.deref.call(null,this__3278.index_atom);

cljs.core.swap_BANG_.call(null,this__3278.index_atom,cljs.core.inc);
return cljs.core.nth.call(null,this__3278.s,idx__3279);
} else
{var buf__3280 = cljs.core.deref.call(null,this__3278.buffer_atom);

cljs.core.swap_BANG_.call(null,this__3278.buffer_atom,cljs.core.rest);
return cljs.core.first.call(null,buf__3280);
}
});
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$unread = (function (reader,ch){
var this__3281 = this;
return cljs.core.swap_BANG_.call(null,this__3281.buffer_atom,(function (p1__3273_SHARP_){
return cljs.core.cons.call(null,ch,p1__3273_SHARP_);
}));
});
cljs.reader.push_back_reader = (function push_back_reader(s){
return (new cljs.reader.StringPushbackReader(s,cljs.core.atom.call(null,0),cljs.core.atom.call(null,null)));
});
/**
* Checks whether a given character is whitespace
*/
cljs.reader.whitespace_QMARK_ = (function whitespace_QMARK_(ch){
var or__3576__auto____3282 = goog.string.isBreakingWhitespace.call(null,ch);

if(cljs.core.truth_(or__3576__auto____3282))
{return or__3576__auto____3282;
} else
{return cljs.core._EQ_.call(null,",",ch);
}
});
/**
* Checks whether a given character is numeric
*/
cljs.reader.numeric_QMARK_ = (function numeric_QMARK_(ch){
return goog.string.isNumeric.call(null,ch);
});
/**
* Checks whether the character begins a comment.
*/
cljs.reader.comment_prefix_QMARK_ = (function comment_prefix_QMARK_(ch){
return cljs.core._EQ_.call(null,";",ch);
});
/**
* Checks whether the reader is at the start of a number literal
*/
cljs.reader.number_literal_QMARK_ = (function number_literal_QMARK_(reader,initch){
var or__3576__auto____3283 = cljs.reader.numeric_QMARK_.call(null,initch);

if(cljs.core.truth_(or__3576__auto____3283))
{return or__3576__auto____3283;
} else
{var and__3574__auto____3285 = (function (){var or__3576__auto____3284 = cljs.core._EQ_.call(null,"+",initch);

if(cljs.core.truth_(or__3576__auto____3284))
{return or__3576__auto____3284;
} else
{return cljs.core._EQ_.call(null,"-",initch);
}
})();

if(cljs.core.truth_(and__3574__auto____3285))
{return cljs.reader.numeric_QMARK_.call(null,(function (){var next_ch__3286 = cljs.reader.read_char.call(null,reader);

cljs.reader.unread.call(null,reader,next_ch__3286);
return next_ch__3286;
})());
} else
{return and__3574__auto____3285;
}
}
});
/**
* @param {...*} var_args
*/
cljs.reader.reader_error = (function() { 
var reader_error__delegate = function (rdr,msg){
throw cljs.core.apply.call(null,cljs.core.str,msg);
};
var reader_error = function (rdr,var_args){
var msg = null;
if (goog.isDef(var_args)) {
  msg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return reader_error__delegate.call(this, rdr, msg);
};
reader_error.cljs$lang$maxFixedArity = 1;
reader_error.cljs$lang$applyTo = (function (arglist__3287){
var rdr = cljs.core.first(arglist__3287);
var msg = cljs.core.rest(arglist__3287);
return reader_error__delegate.call(this, rdr, msg);
});
return reader_error;
})()
;
cljs.reader.macro_terminating_QMARK_ = (function macro_terminating_QMARK_(ch){
var and__3574__auto____3288 = cljs.core.not_EQ_.call(null,ch,"#");

if(cljs.core.truth_(and__3574__auto____3288))
{var and__3574__auto____3289 = cljs.core.not_EQ_.call(null,ch,"'");

if(cljs.core.truth_(and__3574__auto____3289))
{return cljs.core.contains_QMARK_.call(null,cljs.reader.macros,ch);
} else
{return and__3574__auto____3289;
}
} else
{return and__3574__auto____3288;
}
});
cljs.reader.read_token = (function read_token(rdr,initch){
var sb__3290 = (new goog.string.StringBuffer(initch));
var ch__3291 = cljs.reader.read_char.call(null,rdr);

while(true){
if(cljs.core.truth_((function (){var or__3576__auto____3292 = cljs.core.nil_QMARK_.call(null,ch__3291);

if(cljs.core.truth_(or__3576__auto____3292))
{return or__3576__auto____3292;
} else
{var or__3576__auto____3293 = cljs.reader.whitespace_QMARK_.call(null,ch__3291);

if(cljs.core.truth_(or__3576__auto____3293))
{return or__3576__auto____3293;
} else
{return cljs.reader.macro_terminating_QMARK_.call(null,ch__3291);
}
}
})()))
{cljs.reader.unread.call(null,rdr,ch__3291);
return sb__3290.toString();
} else
{{
var G__3294 = (function (){sb__3290.append(ch__3291);
return sb__3290;
})();
var G__3295 = cljs.reader.read_char.call(null,rdr);
sb__3290 = G__3294;
ch__3291 = G__3295;
continue;
}
}
break;
}
});
/**
* Advances the reader to the end of a line. Returns the reader
*/
cljs.reader.skip_line = (function skip_line(reader,_){

while(true){
var ch__3296 = cljs.reader.read_char.call(null,reader);

if(cljs.core.truth_((function (){var or__3576__auto____3297 = cljs.core._EQ_.call(null,ch__3296,"n");

if(cljs.core.truth_(or__3576__auto____3297))
{return or__3576__auto____3297;
} else
{var or__3576__auto____3298 = cljs.core._EQ_.call(null,ch__3296,"r");

if(cljs.core.truth_(or__3576__auto____3298))
{return or__3576__auto____3298;
} else
{return cljs.core.nil_QMARK_.call(null,ch__3296);
}
}
})()))
{return reader;
} else
{{
continue;
}
}
break;
}
});
cljs.reader.int_pattern = cljs.core.re_pattern.call(null,"([-+]?)(?:(0)|([1-9][0-9]*)|0[xX]([0-9A-Fa-f]+)|0([0-7]+)|([1-9][0-9]?)[rR]([0-9A-Za-z]+)|0[0-9]+)(N)?");
cljs.reader.ratio_pattern = cljs.core.re_pattern.call(null,"([-+]?[0-9]+)/([0-9]+)");
cljs.reader.float_pattern = cljs.core.re_pattern.call(null,"([-+]?[0-9]+(\\.[0-9]*)?([eE][-+]?[0-9]+)?)(M)?");
cljs.reader.match_int = (function match_int(s){
var groups__3299 = cljs.core.re_find.call(null,cljs.reader.int_pattern,s);

if(cljs.core.truth_(cljs.core.nth.call(null,groups__3299,2)))
{return 0;
} else
{var negate__3301 = (cljs.core.truth_(cljs.core._EQ_.call(null,"-",cljs.core.nth.call(null,groups__3299,1)))?-1:1);
var vec__3300__3302 = (cljs.core.truth_(cljs.core.nth.call(null,groups__3299,3))?cljs.core.Vector.fromArray([cljs.core.nth.call(null,groups__3299,3),10]):(cljs.core.truth_(cljs.core.nth.call(null,groups__3299,4))?cljs.core.Vector.fromArray([cljs.core.nth.call(null,groups__3299,4),16]):(cljs.core.truth_(cljs.core.nth.call(null,groups__3299,5))?cljs.core.Vector.fromArray([cljs.core.nth.call(null,groups__3299,5),8]):(cljs.core.truth_(cljs.core.nth.call(null,groups__3299,7))?cljs.core.Vector.fromArray([cljs.core.nth.call(null,groups__3299,7),goog.global['parseInt'].call(null,cljs.core.nth.call(null,groups__3299,7))]):(cljs.core.truth_("﷐'default")?cljs.core.Vector.fromArray([null,null]):null)))));
var n__3303 = cljs.core.nth.call(null,vec__3300__3302,0,null);
var radix__3304 = cljs.core.nth.call(null,vec__3300__3302,1,null);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,n__3303)))
{return null;
} else
{return cljs.core._STAR_.call(null,negate__3301,goog.global['parseInt'].call(null,n__3303,radix__3304));
}
}
});
cljs.reader.match_ratio = (function match_ratio(s){
var groups__3305 = cljs.core.re_find.call(null,cljs.reader.ratio_pattern,s);
var numinator__3306 = cljs.core.nth.call(null,groups__3305,1);
var denominator__3307 = cljs.core.nth.call(null,groups__3305,2);

return cljs.core._SLASH_.call(null,goog.global['parseInt'].call(null,numinator__3306),goog.global['parseInt'].call(null,denominator__3307));
});
cljs.reader.match_float = (function match_float(s){
return goog.global['parseFloat'].call(null,s);
});
cljs.reader.match_number = (function match_number(s){
if(cljs.core.truth_(cljs.core.re_matches.call(null,cljs.reader.int_pattern,s)))
{return cljs.reader.match_int.call(null,s);
} else
{if(cljs.core.truth_(cljs.core.re_matches.call(null,cljs.reader.ratio_pattern,s)))
{return cljs.reader.match_ratio.call(null,s);
} else
{if(cljs.core.truth_(cljs.core.re_matches.call(null,cljs.reader.float_pattern,s)))
{return cljs.reader.match_float.call(null,s);
} else
{return null;
}
}
}
});
cljs.reader.escape_char_map = cljs.core.HashMap.fromArrays(["t","r","n","\\","\"","b","f"],["\t","\r","\n","\\","\"","\b","\f"]);
cljs.reader.read_unicode_char = (function read_unicode_char(reader,initch){
return cljs.reader.reader_error.call(null,reader,"Unicode characters not supported by reader (yet)");
});
cljs.reader.escape_char = (function escape_char(buffer,reader){
var ch__3308 = cljs.reader.read_char.call(null,reader);
var mapresult__3309 = cljs.core.get.call(null,cljs.reader.escape_char_map,ch__3308);

if(cljs.core.truth_(mapresult__3309))
{return mapresult__3309;
} else
{if(cljs.core.truth_((function (){var or__3576__auto____3310 = cljs.core._EQ_.call(null,"u",ch__3308);

if(cljs.core.truth_(or__3576__auto____3310))
{return or__3576__auto____3310;
} else
{return cljs.reader.numeric_QMARK_.call(null,ch__3308);
}
})()))
{return cljs.reader.read_unicode_char.call(null,reader,ch__3308);
} else
{return cljs.reader.reader_error.call(null,reader,"Unsupported escape charater: \\",ch__3308);
}
}
});
/**
* Read until first character that doesn't match pred, returning
* char.
*/
cljs.reader.read_past = (function read_past(pred,rdr){
var ch__3311 = cljs.reader.read_char.call(null,rdr);

while(true){
if(cljs.core.truth_(pred.call(null,ch__3311)))
{{
var G__3312 = cljs.reader.read_char.call(null,rdr);
ch__3311 = G__3312;
continue;
}
} else
{return ch__3311;
}
break;
}
});
cljs.reader.read_delimited_list = (function read_delimited_list(delim,rdr,recursive_QMARK_){
var a__3313 = cljs.core.Vector.fromArray([]);

while(true){
var ch__3314 = cljs.reader.read_past.call(null,cljs.reader.whitespace_QMARK_,rdr);

if(cljs.core.truth_(ch__3314))
{} else
{cljs.reader.reader_error.call(null,rdr,"EOF");
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,delim,ch__3314)))
{return a__3313;
} else
{var temp__3723__auto____3315 = cljs.core.get.call(null,cljs.reader.macros,ch__3314);

if(cljs.core.truth_(temp__3723__auto____3315))
{var macrofn__3316 = temp__3723__auto____3315;

var mret__3317 = macrofn__3316.call(null,rdr,ch__3314);

{
var G__3319 = (cljs.core.truth_(cljs.core._EQ_.call(null,mret__3317,rdr))?a__3313:cljs.core.conj.call(null,a__3313,mret__3317));
a__3313 = G__3319;
continue;
}
} else
{cljs.reader.unread.call(null,rdr,ch__3314);
var o__3318 = cljs.reader.read.call(null,rdr,true,null,recursive_QMARK_);

{
var G__3320 = (cljs.core.truth_(cljs.core._EQ_.call(null,o__3318,rdr))?a__3313:cljs.core.conj.call(null,a__3313,o__3318));
a__3313 = G__3320;
continue;
}
}
}
break;
}
});
cljs.reader.not_implemented = (function not_implemented(rdr,ch){
return cljs.reader.reader_error.call(null,rdr,"Reader for ",ch," not implemented yet");
});
cljs.reader.read_dispatch = (function read_dispatch(rdr,_){
var ch__3321 = cljs.reader.read_char.call(null,rdr);
var dm__3322 = cljs.core.get.call(null,cljs.reader.dispatch_macros,ch__3321);

if(cljs.core.truth_(dm__3322))
{return dm__3322.call(null,rdr,_);
} else
{return cljs.reader.reader_error.call(null,rdr,"No dispatch macro for ",ch__3321);
}
});
cljs.reader.read_unmatched_delimiter = (function read_unmatched_delimiter(rdr,ch){
return cljs.reader.reader_error.call(null,rdr,"Unmached delimiter ",ch);
});
cljs.reader.read_list = (function read_list(rdr,_){
return cljs.core.apply.call(null,cljs.core.list,cljs.reader.read_delimited_list.call(null,")",rdr,true));
});
cljs.reader.read_comment = cljs.reader.skip_line;
cljs.reader.read_vector = (function read_vector(rdr,_){
return cljs.reader.read_delimited_list.call(null,"]",rdr,true);
});
cljs.reader.read_map = (function read_map(rdr,_){
var l__3323 = cljs.reader.read_delimited_list.call(null,"}",rdr,true);

if(cljs.core.truth_(cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,l__3323))))
{cljs.reader.reader_error.call(null,rdr,"Map literal must contain an even number of forms");
} else
{}
return cljs.core.apply.call(null,cljs.core.hash_map,l__3323);
});
cljs.reader.read_number = (function read_number(reader,initch){
var buffer__3324 = (new goog.string.StringBuffer(initch));
var ch__3325 = cljs.reader.read_char.call(null,reader);

while(true){
if(cljs.core.truth_((function (){var or__3576__auto____3326 = cljs.core.nil_QMARK_.call(null,ch__3325);

if(cljs.core.truth_(or__3576__auto____3326))
{return or__3576__auto____3326;
} else
{var or__3576__auto____3327 = cljs.reader.whitespace_QMARK_.call(null,ch__3325);

if(cljs.core.truth_(or__3576__auto____3327))
{return or__3576__auto____3327;
} else
{return cljs.core.contains_QMARK_.call(null,cljs.reader.macros,ch__3325);
}
}
})()))
{cljs.reader.unread.call(null,reader,ch__3325);
var s__3328 = buffer__3324.toString();

var or__3576__auto____3329 = cljs.reader.match_number.call(null,s__3328);

if(cljs.core.truth_(or__3576__auto____3329))
{return or__3576__auto____3329;
} else
{return cljs.reader.reader_error.call(null,reader,"Invalid number format [",s__3328,"]");
}
} else
{{
var G__3330 = (function (){buffer__3324.append(ch__3325);
return buffer__3324;
})();
var G__3331 = cljs.reader.read_char.call(null,reader);
buffer__3324 = G__3330;
ch__3325 = G__3331;
continue;
}
}
break;
}
});
cljs.reader.read_string = (function read_string(reader,_){
var buffer__3332 = (new goog.string.StringBuffer());
var ch__3333 = cljs.reader.read_char.call(null,reader);

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,ch__3333)))
{return cljs.reader.reader_error.call(null,reader,"EOF while reading string");
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,"\\",ch__3333)))
{{
var G__3334 = cljs.reader.escape_char.call(null,buffer__3332,reader);
var G__3335 = cljs.reader.read_char.call(null,reader);
buffer__3332 = G__3334;
ch__3333 = G__3335;
continue;
}
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,"\"",ch__3333)))
{return buffer__3332.toString();
} else
{if(cljs.core.truth_("﷐'default"))
{{
var G__3336 = (function (){buffer__3332.append(ch__3333);
return buffer__3332;
})();
var G__3337 = cljs.reader.read_char.call(null,reader);
buffer__3332 = G__3336;
ch__3333 = G__3337;
continue;
}
} else
{return null;
}
}
}
}
break;
}
});
cljs.reader.special_symbols = cljs.core.ObjMap.fromObject(["nil","true","false"],{"nil":null,"true":true,"false":false});
cljs.reader.read_symbol = (function read_symbol(reader,initch){
var token__3338 = cljs.reader.read_token.call(null,reader,initch);

if(cljs.core.truth_(goog.string.contains.call(null,token__3338,"/")))
{return cljs.core.symbol.call(null,cljs.core.subs.call(null,token__3338,0,token__3338.indexOf("/")),cljs.core.subs.call(null,cljs.core.inc.call(null,token__3338.indexOf("/")),token__3338.length));
} else
{return cljs.core.get.call(null,cljs.reader.special_symbols,token__3338,cljs.core.symbol.call(null,token__3338));
}
});
cljs.reader.read_keyword = (function read_keyword(reader,initch){
var token__3339 = cljs.reader.read_token.call(null,reader,cljs.reader.read_char.call(null,reader));

if(cljs.core.truth_(goog.string.contains.call(null,token__3339,"/")))
{return cljs.core.keyword.call(null,cljs.core.subs.call(null,token__3339,0,token__3339.indexOf("/")),cljs.core.subs.call(null,cljs.core.inc.call(null,token__3339.indexOf("/")),token__3339.length));
} else
{return cljs.core.keyword.call(null,token__3339);
}
});
cljs.reader.desugar_meta = (function desugar_meta(f){
if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,f)))
{return cljs.core.ObjMap.fromObject(["﷐'tag"],{"﷐'tag":f});
} else
{if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,f)))
{return cljs.core.ObjMap.fromObject(["﷐'tag"],{"﷐'tag":f});
} else
{if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,f)))
{return cljs.core.HashMap.fromArrays([f],[true]);
} else
{if(cljs.core.truth_("﷐'else"))
{return f;
} else
{return null;
}
}
}
}
});
cljs.reader.wrapping_reader = (function wrapping_reader(sym){
return (function (rdr,_){
return cljs.core.list.call(null,sym,cljs.reader.read.call(null,rdr,true,null,true));
});
});
cljs.reader.throwing_reader = (function throwing_reader(msg){
return (function (rdr,_){
return cljs.reader.reader_error.call(null,rdr,msg);
});
});
cljs.reader.read_meta = (function read_meta(rdr,_){
var m__3340 = cljs.reader.desugar_meta.call(null,cljs.reader.read.call(null,rdr,true,null,true));

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,m__3340)))
{} else
{cljs.reader.reader_error.call(null,rdr,"Metadata must be Symbol,Keyword,String or Map");
}
var o__3341 = cljs.reader.read.call(null,rdr,true,null,true);

if(cljs.core.truth_((function (){var x__105__auto____3342 = o__3341;

if(cljs.core.truth_((function (){var and__3574__auto____3343 = x__105__auto____3342;

if(cljs.core.truth_(and__3574__auto____3343))
{return x__105__auto____3342.cljs$core$IWithMeta$;
} else
{return and__3574__auto____3343;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IWithMeta,x__105__auto____3342);
}
})()))
{return cljs.core.with_meta.call(null,o__3341,cljs.core.merge.call(null,cljs.core.meta.call(null,o__3341),m__3340));
} else
{return cljs.reader.reader_error.call(null,rdr,"Metadata can only be applied to IWithMetas");
}
});
cljs.reader.read_set = (function read_set(rdr,_){
return cljs.core.set.call(null,cljs.reader.read_delimited_list.call(null,"}",rdr,true));
});
cljs.reader.read_regex = (function read_regex(rdr,ch){
return cljs.core.re_pattern.call(null,cljs.reader.read_string.call(null,rdr,ch));
});
cljs.reader.read_discard = (function read_discard(rdr,_){
cljs.reader.read.call(null,rdr,true,null,true);
return rdr;
});
cljs.reader.macros = cljs.core.HashMap.fromArrays(["@","`","\"","#","%","'","(",")",":",";","[","{","\\","]","}","^","~"],[cljs.reader.wrapping_reader.call(null,"﷑'deref"),cljs.reader.not_implemented,cljs.reader.read_string,cljs.reader.read_dispatch,cljs.reader.not_implemented,cljs.reader.wrapping_reader.call(null,"﷑'quote"),cljs.reader.read_list,cljs.reader.read_unmatched_delimiter,cljs.reader.read_keyword,cljs.reader.not_implemented,cljs.reader.read_vector,cljs.reader.read_map,cljs.reader.read_char,cljs.reader.read_unmatched_delimiter,cljs.reader.read_unmatched_delimiter,cljs.reader.read_meta,cljs.reader.not_implemented]);
cljs.reader.dispatch_macros = cljs.core.ObjMap.fromObject(["{","<","\"","!","_"],{"{":cljs.reader.read_set,"<":cljs.reader.throwing_reader.call(null,"Unreadable form"),"\"":cljs.reader.read_regex,"!":cljs.reader.read_comment,"_":cljs.reader.read_discard});
/**
* Reads the first object from a PushbackReader. Returns the object read.
* If EOF, throws if eof-is-error is true. Otherwise returns sentinel.
*/
cljs.reader.read = (function read(reader,eof_is_error,sentinel,is_recursive){
while(true){
var ch__3344 = cljs.reader.read_char.call(null,reader);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,ch__3344)))
{if(cljs.core.truth_(eof_is_error))
{return cljs.reader.reader_error.call(null,reader,"EOF");
} else
{return sentinel;
}
} else
{if(cljs.core.truth_(cljs.reader.whitespace_QMARK_.call(null,ch__3344)))
{{
var G__3346 = reader;
var G__3347 = eof_is_error;
var G__3348 = sentinel;
var G__3349 = is_recursive;
reader = G__3346;
eof_is_error = G__3347;
sentinel = G__3348;
is_recursive = G__3349;
continue;
}
} else
{if(cljs.core.truth_(cljs.reader.comment_prefix_QMARK_.call(null,ch__3344)))
{{
var G__3350 = cljs.reader.read_comment.call(null,reader,ch__3344);
var G__3351 = eof_is_error;
var G__3352 = sentinel;
var G__3353 = is_recursive;
reader = G__3350;
eof_is_error = G__3351;
sentinel = G__3352;
is_recursive = G__3353;
continue;
}
} else
{if(cljs.core.truth_("﷐'else"))
{var res__3345 = (cljs.core.truth_(cljs.reader.macros.call(null,ch__3344))?cljs.reader.macros.call(null,ch__3344).call(null,reader,ch__3344):(cljs.core.truth_(cljs.reader.number_literal_QMARK_.call(null,reader,ch__3344))?cljs.reader.read_number.call(null,reader,ch__3344):(cljs.core.truth_("﷐'else")?cljs.reader.read_symbol.call(null,reader,ch__3344):null)));

if(cljs.core.truth_(cljs.core._EQ_.call(null,res__3345,reader)))
{{
var G__3354 = reader;
var G__3355 = eof_is_error;
var G__3356 = sentinel;
var G__3357 = is_recursive;
reader = G__3354;
eof_is_error = G__3355;
sentinel = G__3356;
is_recursive = G__3357;
continue;
}
} else
{return res__3345;
}
} else
{return null;
}
}
}
}
break;
}
});
/**
* Reads one object from the string s
*/
cljs.reader.read_string = (function read_string(s){
var r__3358 = cljs.reader.push_back_reader.call(null,s);

return cljs.reader.read.call(null,r__3358,true,null,false);
});
