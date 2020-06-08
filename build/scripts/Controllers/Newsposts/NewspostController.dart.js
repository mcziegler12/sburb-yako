(function dartProgram(){function copyProperties(a,b){var t=Object.keys(a)
for(var s=0;s<t.length;s++){var r=t[s]
b[r]=a[r]}}var z=function(){var t=function(){}
t.prototype={p:{}}
var s=new t()
if(!(s.__proto__&&s.__proto__.p===t.prototype.p))return false
try{if(typeof navigator!="undefined"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Chrome/")>=0)return true
if(typeof version=="function"&&version.length==0){var r=version()
if(/^\d+\.\d+\.\d+\.\d+$/.test(r))return true}}catch(q){}return false}()
function setFunctionNamesIfNecessary(a){function t(){};if(typeof t.name=="string")return
for(var t=0;t<a.length;t++){var s=a[t]
var r=Object.keys(s)
for(var q=0;q<r.length;q++){var p=r[q]
var o=s[p]
if(typeof o=='function')o.name=p}}}function inherit(a,b){a.prototype.constructor=a
a.prototype["$i"+a.name]=a
if(b!=null){if(z){a.prototype.__proto__=b.prototype
return}var t=Object.create(b.prototype)
copyProperties(a.prototype,t)
a.prototype=t}}function inheritMany(a,b){for(var t=0;t<b.length;t++)inherit(b[t],a)}function mixin(a,b){copyProperties(b.prototype,a.prototype)
a.prototype.constructor=a}function lazy(a,b,c,d){var t=a
a[b]=t
a[c]=function(){a[c]=function(){H.jf(b)}
var s
var r=d
try{if(a[b]===t){s=a[b]=r
s=a[b]=d()}else s=a[b]}finally{if(s===r)a[b]=null
a[c]=function(){return this[b]}}return s}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var t=0;t<a.length;++t)convertToFastObject(a[t])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.es"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.es"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var t=null
return d?function(){if(t===null)t=H.es(this,a,b,c,true,false,e).prototype
return t}:tearOffGetter(a,b,c,e,f)}var x=0
function installTearOff(a,b,c,d,e,f,g,h,i,j){var t=[]
for(var s=0;s<h.length;s++){var r=h[s]
if(typeof r=='string')r=a[r]
r.$callName=g[s]
t.push(r)}var r=t[0]
r.$R=e
r.$D=f
var q=i
if(typeof q=="number")q+=x
var p=h[0]
r.$stubName=p
var o=tearOff(t,j||0,q,c,p,d)
a[b]=o
if(c)r.$tearOff=o}function installStaticTearOff(a,b,c,d,e,f,g,h){return installTearOff(a,b,true,false,c,d,e,f,g,h)}function installInstanceTearOff(a,b,c,d,e,f,g,h,i){return installTearOff(a,b,false,c,d,e,f,g,h,i)}function setOrUpdateInterceptorsByTag(a){var t=v.interceptorsByTag
if(!t){v.interceptorsByTag=a
return}copyProperties(a,t)}function setOrUpdateLeafTags(a){var t=v.leafTags
if(!t){v.leafTags=a
return}copyProperties(a,t)}function updateTypes(a){var t=v.types
var s=t.length
t.push.apply(t,a)
return s}function updateHolder(a,b){copyProperties(b,a)
return a}var hunkHelpers=function(){var t=function(a,b,c,d,e){return function(f,g,h,i){return installInstanceTearOff(f,g,a,b,c,d,[h],i,e)}},s=function(a,b,c,d){return function(e,f,g,h){return installStaticTearOff(e,f,a,b,c,[g],h,d)}}
return{inherit:inherit,inheritMany:inheritMany,mixin:mixin,installStaticTearOff:installStaticTearOff,installInstanceTearOff:installInstanceTearOff,_instance_0u:t(0,0,null,["$0"],0),_instance_1u:t(0,1,null,["$1"],0),_instance_2u:t(0,2,null,["$2"],0),_instance_0i:t(1,0,null,["$0"],0),_instance_1i:t(1,1,null,["$1"],0),_instance_2i:t(1,2,null,["$2"],0),_static_0:s(0,null,["$0"],0),_static_1:s(1,null,["$1"],0),_static_2:s(2,null,["$2"],0),makeConstList:makeConstList,lazy:lazy,updateHolder:updateHolder,convertToFastObject:convertToFastObject,setFunctionNamesIfNecessary:setFunctionNamesIfNecessary,updateTypes:updateTypes,setOrUpdateInterceptorsByTag:setOrUpdateInterceptorsByTag,setOrUpdateLeafTags:setOrUpdateLeafTags}}()
function initializeDeferredHunk(a){x=v.types.length
a(hunkHelpers,v,w,$)}function getGlobalFromName(a){for(var t=0;t<w.length;t++){if(w[t]==C)continue
if(w[t][a])return w[t][a]}}var C={},H={e5:function e5(){},
dL:function(a){var t,s=a^48
if(s<=9)return s
t=a|32
if(97<=t&&t<=102)return t-87
return-1},
hk:function(){return new P.aS("No element")},
bm:function bm(a){this.a=a},
aA:function aA(){},
a8:function a8(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
bv:function bv(){},
bO:function bO(){},
ag:function ag(){},
hc:function(){throw H.b(P.y("Cannot modify unmodifiable Map"))},
fH:function(a){var t,s=H.fG(a)
if(typeof s=="string")return s
t="minified:"+a
return t},
fz:function(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return u.p.b(a)},
f:function(a){var t
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.aq(a)
if(typeof t!="string")throw H.b(H.a2(a))
return t},
aO:function(a){var t=a.$identityHash
if(t==null){t=Math.random()*0x3fffffff|0
a.$identityHash=t}return t},
hy:function(a,b){var t,s,r,q,p,o=null,n=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(n==null)return o
if(3>=n.length)return H.h(n,3)
t=n[3]
if(b==null){if(t!=null)return parseInt(a,10)
if(n[2]!=null)return parseInt(a,16)
return o}if(b<2||b>36)throw H.b(P.v(b,2,36,"radix",o))
if(b===10&&t!=null)return parseInt(a,10)
if(b<10||t==null){s=b<=10?47+b:86+b
r=n[1]
for(q=r.length,p=0;p<q;++p)if((C.a.k(r,p)|32)>s)return o}return parseInt(a,b)},
cN:function(a){var t=H.hs(a)
return t},
hs:function(a){var t,s,r
if(a instanceof P.l)return H.B(H.be(a),null)
if(J.ao(a)===C.I||u.B.b(a)){t=C.o(a)
if(H.eN(t))return t
s=a.constructor
if(typeof s=="function"){r=s.name
if(typeof r=="string"&&H.eN(r))return r}}return H.B(H.be(a),null)},
eN:function(a){var t=a!=="Object"&&a!==""
return t},
ht:function(){if(!!self.location)return self.location.href
return null},
eM:function(a){var t,s,r,q,p=a.length
if(p<=500)return String.fromCharCode.apply(null,a)
for(t="",s=0;s<p;s=r){r=s+500
q=r<p?r:p
t+=String.fromCharCode.apply(null,a.slice(s,q))}return t},
hz:function(a){var t,s,r,q=H.i([],u.t)
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.fE)(a),++s){r=a[s]
if(!H.c9(r))throw H.b(H.a2(r))
if(r<=65535)q.push(r)
else if(r<=1114111){q.push(55296+(C.b.J(r-65536,10)&1023))
q.push(56320+(r&1023))}else throw H.b(H.a2(r))}return H.eM(q)},
eP:function(a){var t,s,r
for(t=a.length,s=0;s<t;++s){r=a[s]
if(!H.c9(r))throw H.b(H.a2(r))
if(r<0)throw H.b(H.a2(r))
if(r>65535)return H.hz(a)}return H.eM(a)},
hA:function(a,b,c){var t,s,r,q
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(t=b,s="";t<c;t=r){r=t+500
q=r<c?r:c
s+=String.fromCharCode.apply(null,a.subarray(t,q))}return s},
cO:function(a){var t
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){t=a-65536
return String.fromCharCode((55296|C.b.J(t,10))>>>0,56320|t&1023)}}throw H.b(P.v(a,0,1114111,null,null))},
ac:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
eO:function(a){var t=H.ac(a).getFullYear()+0
return t},
ea:function(a){var t=H.ac(a).getMonth()+1
return t},
e9:function(a){var t=H.ac(a).getDate()+0
return t},
hu:function(a){var t=H.ac(a).getHours()+0
return t},
hw:function(a){var t=H.ac(a).getMinutes()+0
return t},
hx:function(a){var t=H.ac(a).getSeconds()+0
return t},
hv:function(a){var t=H.ac(a).getMilliseconds()+0
return t},
H:function(a){throw H.b(H.a2(a))},
h:function(a,b){if(a==null)J.W(a)
throw H.b(H.bc(a,b))},
bc:function(a,b){var t,s,r="index"
if(!H.c9(b))return new P.C(!0,b,r,null)
t=J.W(a)
if(!(b<0)){if(typeof t!=="number")return H.H(t)
s=b>=t}else s=!0
if(s)return P.cB(b,a,r,null,t)
return P.cQ(b,r)},
a2:function(a){return new P.C(!0,a,null,null)},
b:function(a){var t
if(a==null)a=new P.bF()
t=new Error()
t.dartException=a
if("defineProperty" in Object){Object.defineProperty(t,"message",{get:H.fF})
t.name=""}else t.toString=H.fF
return t},
fF:function(){return J.aq(this.dartException)},
ap:function(a){throw H.b(a)},
fE:function(a){throw H.b(P.av(a))},
O:function(a){var t,s,r,q,p,o
a=H.j8(a.replace(String({}),'$receiver$'))
t=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(t==null)t=H.i([],u.s)
s=t.indexOf("\\$arguments\\$")
r=t.indexOf("\\$argumentsExpr\\$")
q=t.indexOf("\\$expr\\$")
p=t.indexOf("\\$method\\$")
o=t.indexOf("\\$receiver\\$")
return new H.cW(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),s,r,q,p,o)},
cX:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(t){return t.message}}(a)},
eW:function(a){return function($expr$){try{$expr$.$method$}catch(t){return t.message}}(a)},
eK:function(a,b){return new H.bE(a,b==null?null:b.method)},
e6:function(a,b){var t=b==null,s=t?null:b.method
return new H.bA(a,s,t?null:b.receiver)},
K:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=new H.dW(a)
if(a==null)return f
if(typeof a!=="object")return a
if("dartException" in a)return e.$1(a.dartException)
else if(!("message" in a))return a
t=a.message
if("number" in a&&typeof a.number=="number"){s=a.number
r=s&65535
if((C.b.J(s,16)&8191)===10)switch(r){case 438:return e.$1(H.e6(H.f(t)+" (Error "+r+")",f))
case 445:case 5007:return e.$1(H.eK(H.f(t)+" (Error "+r+")",f))}}if(a instanceof TypeError){q=$.fK()
p=$.fL()
o=$.fM()
n=$.fN()
m=$.fQ()
l=$.fR()
k=$.fP()
$.fO()
j=$.fT()
i=$.fS()
h=q.C(t)
if(h!=null)return e.$1(H.e6(t,h))
else{h=p.C(t)
if(h!=null){h.method="call"
return e.$1(H.e6(t,h))}else{h=o.C(t)
if(h==null){h=n.C(t)
if(h==null){h=m.C(t)
if(h==null){h=l.C(t)
if(h==null){h=k.C(t)
if(h==null){h=n.C(t)
if(h==null){h=j.C(t)
if(h==null){h=i.C(t)
g=h!=null}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0
if(g)return e.$1(H.eK(t,h))}}return e.$1(new H.bN(typeof t=="string"?t:""))}if(a instanceof RangeError){if(typeof t=="string"&&t.indexOf("call stack")!==-1)return new P.aR()
t=function(b){try{return String(b)}catch(d){}return null}(a)
return e.$1(new P.C(!1,f,f,typeof t=="string"?t.replace(/^RangeError:\s*/,""):t))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof t=="string"&&t==="too much recursion")return new P.aR()
return a},
P:function(a){var t
if(a==null)return new H.b2(a)
t=a.$cachedTrace
if(t!=null)return t
return a.$cachedTrace=new H.b2(a)},
j1:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.b(new P.db("Unsupported number of arguments for wrapped closure"))},
cb:function(a,b){var t
if(a==null)return null
t=a.$identity
if(!!t)return t
t=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.j1)
a.$identity=t
return t},
hb:function(a,b,c,d,e,f,g){var t,s,r,q,p,o,n,m,l=null,k=b[0],j=k.$callName,i=e?Object.create(new H.cT().constructor.prototype):Object.create(new H.as(l,l,l,l).constructor.prototype)
i.$initialize=i.constructor
if(e)t=function static_tear_off(){this.$initialize()}
else{s=$.L
if(typeof s!=="number")return s.q()
$.L=s+1
s=new Function("a,b,c,d"+s,"this.$initialize(a,b,c,d"+s+")")
t=s}i.constructor=t
t.prototype=i
if(!e){r=H.eE(a,k,f)
r.$reflectionInfo=d}else{i.$static_name=g
r=k}q=H.h7(d,e,f)
i.$S=q
i[j]=r
for(p=r,o=1;o<b.length;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.eE(a,n,f)
i[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}i.$C=p
i.$R=k.$R
i.$D=k.$D
return t},
h7:function(a,b,c){var t
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.fx,a)
if(typeof a=="string"){if(b)throw H.b("Cannot compute signature for static tearoff.")
t=c?H.h5:H.h4
return function(d,e){return function(){return e(this,d)}}(a,t)}throw H.b("Error in functionType of tearoff")},
h8:function(a,b,c,d){var t=H.eD
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
eE:function(a,b,c){var t,s,r,q,p,o,n
if(c)return H.ha(a,b)
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=27
if(p)return H.h8(s,!q,t,b)
if(s===0){q=$.L
if(typeof q!=="number")return q.q()
$.L=q+1
o="self"+q
q="return function(){var "+o+" = this."
p=$.at
return new Function(q+H.f(p==null?$.at=H.cn("self"):p)+";return "+o+"."+H.f(t)+"();}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s).join(",")
q=$.L
if(typeof q!=="number")return q.q()
$.L=q+1
n+=q
q="return function("+n+"){return this."
p=$.at
return new Function(q+H.f(p==null?$.at=H.cn("self"):p)+"."+H.f(t)+"("+n+");}")()},
h9:function(a,b,c,d){var t=H.eD,s=H.h6
switch(b?-1:a){case 0:throw H.b(H.hE("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,t,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,t,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,t,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,t,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,t,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,t,s)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,t,s)}},
ha:function(a,b){var t,s,r,q,p,o,n,m=$.at
if(m==null)m=$.at=H.cn("self")
t=$.eC
if(t==null)t=$.eC=H.cn("receiver")
s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=28
if(o)return H.h9(r,!p,s,b)
if(r===1){m="return function(){return this."+H.f(m)+"."+H.f(s)+"(this."+H.f(t)+");"
t=$.L
if(typeof t!=="number")return t.q()
$.L=t+1
return new Function(m+t+"}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r-1).join(",")
m="return function("+n+"){return this."+H.f(m)+"."+H.f(s)+"(this."+H.f(t)+", "+n+");"
t=$.L
if(typeof t!=="number")return t.q()
$.L=t+1
return new Function(m+t+"}")()},
es:function(a,b,c,d,e,f,g){return H.hb(a,b,c,d,!!e,!!f,g)},
h4:function(a,b){return H.c5(v.typeUniverse,H.be(a.a),b)},
h5:function(a,b){return H.c5(v.typeUniverse,H.be(a.c),b)},
eD:function(a){return a.a},
h6:function(a){return a.c},
cn:function(a){var t,s,r,q=new H.as("self","target","receiver","name"),p=J.hl(Object.getOwnPropertyNames(q))
for(t=p.length,s=0;s<t;++s){r=p[s]
if(q[r]===a)return r}},
jf:function(a){throw H.b(new P.bs(a))},
hE:function(a){return new H.bI(a)},
fu:function(a){return v.getIsolateTag(a)},
i:function(a,b){a[v.arrayRti]=b
return a},
fv:function(a){if(a==null)return null
return a.$ti},
jN:function(a,b,c){return H.fD(a["$a"+H.f(c)],H.fv(b))},
fD:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return null
if(Array.isArray(a))return a
if(typeof a=="function")return a.apply(null,b)
return b},
jL:function(a,b,c){return a.apply(b,H.fD(J.ao(b)["$a"+H.f(c)],H.fv(b)))},
jM:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
j3:function(a){var t,s,r,q,p=$.fw.$1(a),o=$.dK[p]
if(o!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}t=$.dP[p]
if(t!=null)return t
s=v.interceptorsByTag[p]
if(s==null){p=$.fq.$2(a,p)
if(p!=null){o=$.dK[p]
if(o!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}t=$.dP[p]
if(t!=null)return t
s=v.interceptorsByTag[p]}}if(s==null)return null
t=s.prototype
r=p[0]
if(r==="!"){o=H.dS(t)
$.dK[p]=o
Object.defineProperty(a,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(r==="~"){$.dP[p]=t
return t}if(r==="-"){q=H.dS(t)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:q,enumerable:false,writable:true,configurable:true})
return q.i}if(r==="+")return H.fB(a,t)
if(r==="*")throw H.b(P.ed(p))
if(v.leafTags[p]===true){q=H.dS(t)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:q,enumerable:false,writable:true,configurable:true})
return q.i}else return H.fB(a,t)},
fB:function(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,v.dispatchPropertyName,{value:J.eu(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
dS:function(a){return J.eu(a,!1,null,!!a.$iM)},
j4:function(a,b,c){var t=b.prototype
if(v.leafTags[a]===true)return H.dS(t)
else return J.eu(t,c,null,null)},
j_:function(){if(!0===$.et)return
$.et=!0
H.j0()},
j0:function(){var t,s,r,q,p,o,n,m
$.dK=Object.create(null)
$.dP=Object.create(null)
H.iZ()
t=v.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.fC.$1(p)
if(o!=null){n=H.j4(p,t[p],o)
if(n!=null){Object.defineProperty(o,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
iZ:function(){var t,s,r,q,p,o,n=C.y()
n=H.an(C.z,H.an(C.A,H.an(C.p,H.an(C.p,H.an(C.B,H.an(C.C,H.an(C.D(C.o),n)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(t.constructor==Array)for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")n=r(n)||n}}q=n.getTag
p=n.getUnknownTag
o=n.prototypeForTag
$.fw=new H.dM(q)
$.fq=new H.dN(p)
$.fC=new H.dO(o)},
an:function(a,b){return a(b)||b},
eG:function(a,b,c,d,e,f){var t=b?"m":"",s=c?"":"i",r=d?"u":"",q=e?"s":"",p=f?"g":"",o=function(g,h){try{return new RegExp(g,h)}catch(n){return n}}(a,t+s+r+q+p)
if(o instanceof RegExp)return o
throw H.b(P.n("Illegal RegExp pattern ("+String(o)+")",a,null))},
j8:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
fp:function(a){return a},
je:function(a,b,c,d){var t,s,r,q=new H.d4(b,a,0),p=0,o=""
for(;q.l();o=t){t=q.d
s=t.b
r=s.index
t=o+H.f(H.fp(C.a.i(a,p,r)))+H.f(c.$1(t))
p=r+s[0].length}q=o+H.f(H.fp(C.a.M(a,p)))
return q.charCodeAt(0)==0?q:q},
aw:function aw(){},
ax:function ax(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
cW:function cW(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
bE:function bE(a,b){this.a=a
this.b=b},
bA:function bA(a,b,c){this.a=a
this.b=b
this.c=c},
bN:function bN(a){this.a=a},
dW:function dW(a){this.a=a},
b2:function b2(a){this.a=a
this.b=null},
a3:function a3(){},
cV:function cV(){},
cT:function cT(){},
as:function as(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bI:function bI(a){this.a=a},
aE:function aE(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
cH:function cH(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
aG:function aG(a,b){this.a=a
this.$ti=b},
bB:function bB(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dM:function dM(a){this.a=a},
dN:function dN(a){this.a=a},
dO:function dO(a){this.a=a},
cF:function cF(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
bY:function bY(a){this.b=a},
d4:function d4(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
iv:function(a){return a},
hq:function(a){return new Int8Array(a)},
eo:function(a,b,c){if(a>>>0!==a||a>=c)throw H.b(H.bc(b,a))},
bD:function bD(){},
aL:function aL(){},
aM:function aM(){},
bC:function bC(){},
ab:function ab(){},
aZ:function aZ(){},
b_:function b_(){},
hD:function(a,b){var t=b.c
return t==null?b.c=H.ej(a,b.z,!0):t},
eS:function(a,b){var t=b.c
return t==null?b.c=H.b4(a,"a6",[b.z]):t},
eT:function(a){var t=a.y
if(t===6||t===7||t===8)return H.eT(a.z)
return t===11||t===12},
hC:function(a){return a.cy},
fs:function(a){return H.ek(v.typeUniverse,a,!1)},
U:function(a,b,c,a0){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=b.y
switch(d){case 5:case 1:case 2:case 3:case 4:return b
case 6:t=b.z
s=H.U(a,t,c,a0)
if(s===t)return b
return H.f6(a,s,!0)
case 7:t=b.z
s=H.U(a,t,c,a0)
if(s===t)return b
return H.ej(a,s,!0)
case 8:t=b.z
s=H.U(a,t,c,a0)
if(s===t)return b
return H.f5(a,s,!0)
case 9:r=b.Q
q=H.bb(a,r,c,a0)
if(q===r)return b
return H.b4(a,b.z,q)
case 10:p=b.z
o=H.U(a,p,c,a0)
n=b.Q
m=H.bb(a,n,c,a0)
if(o===p&&m===n)return b
return H.eh(a,o,m)
case 11:l=b.z
k=H.U(a,l,c,a0)
j=b.Q
i=H.iN(a,j,c,a0)
if(k===l&&i===j)return b
return H.f4(a,k,i)
case 12:h=b.Q
a0+=h.length
g=H.bb(a,h,c,a0)
p=b.z
o=H.U(a,p,c,a0)
if(g===h&&o===p)return b
return H.ei(a,o,g,!0)
case 13:f=b.z
if(f<a0)return b
e=c[f-a0]
if(e==null)return b
return e
default:throw H.b(P.cj("Attempted to substitute unexpected RTI kind "+d))}},
bb:function(a,b,c,d){var t,s,r,q,p=b.length,o=[]
for(t=!1,s=0;s<p;++s){r=b[s]
q=H.U(a,r,c,d)
if(q!==r)t=!0
o.push(q)}return t?o:b},
iO:function(a,b,c,d){var t,s,r,q,p,o=b.length,n=[]
for(t=!1,s=0;s<o;s+=2){r=b[s]
q=b[s+1]
p=H.U(a,q,c,d)
if(p!==q)t=!0
n.push(r)
n.push(p)}return t?n:b},
iN:function(a,b,c,d){var t,s=b.a,r=H.bb(a,s,c,d),q=b.b,p=H.bb(a,q,c,d),o=b.c,n=H.iO(a,o,c,d)
if(r===s&&p===q&&n===o)return b
t=new H.bW()
t.a=r
t.b=p
t.c=n
return t},
iU:function(a){var t=a.$S
if(t!=null){if(typeof t=="number")return H.fx(t)
return a.$S()}return null},
fy:function(a,b){var t
if(H.eT(b))if(a instanceof H.a3){t=H.iU(a)
if(t!=null)return t}return H.be(a)},
be:function(a){var t
if(a instanceof P.l){t=a.$ti
return t!=null?t:H.ep(a)}if(Array.isArray(a))return H.en(a)
return H.ep(J.ao(a))},
en:function(a){var t=a[v.arrayRti],s=u.b
if(t==null)return s
if(t.constructor!==s.constructor)return s
return t},
iz:function(a){var t=a.$ti
return t!=null?t:H.ep(a)},
ep:function(a){var t=a.constructor,s=t.$ccache
if(s!=null)return s
return H.iA(a,t)},
iA:function(a,b){var t=a instanceof H.a3?a.__proto__.__proto__.constructor:b,s=H.ia(v.typeUniverse,t.name)
b.$ccache=s
return s},
fx:function(a){var t,s=a,r=v.types,q=r[s]
if(typeof q=="string"){t=H.ek(v.typeUniverse,q,!1)
r[s]=t
return t}return q},
iy:function(a){var t=this,s=H.ix,r=u.K
if(t===r){s=H.iC
t.a=H.is}else if(H.V(t)||t===r){s=H.iF
t.a=H.it}else if(t===u.S)s=H.c9
else if(t===u.i)s=H.fj
else if(t===u.H)s=H.fj
else if(t===u.N)s=H.iD
else if(t===u.y)s=H.fh
else if(t.y===9){r=t.z
if(t.Q.every(H.j2)){t.r="$i"+r
s=H.iE}}t.b=s
return t.b(a)},
ix:function(a){var t=this
return H.o(v.typeUniverse,H.fy(a,t),null,t,null)},
iE:function(a){var t=this,s=t.r
if(a instanceof P.l)return!!a[s]
return!!J.ao(a)[s]},
iw:function(a){var t=this
if(a==null)return a
else if(t.b(a))return a
throw H.b(H.i0(H.f0(a,H.fy(a,t),H.B(t,null))))},
f0:function(a,b,c){var t=P.cv(a),s=H.B(b==null?H.be(a):b,null)
return t+": type '"+H.f(s)+"' is not a subtype of type '"+H.f(c)+"'"},
i0:function(a){return new H.b3("TypeError: "+a)},
c3:function(a,b){return new H.b3("TypeError: "+H.f0(a,null,b))},
iC:function(a){return!0},
is:function(a){return a},
iF:function(a){return!0},
it:function(a){return a},
fh:function(a){return!0===a||!1===a},
jE:function(a){if(!0===a||!1===a)return a
if(a==null)return a
throw H.b(H.c3(a,"bool"))},
jF:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.b(H.c3(a,"double"))},
c9:function(a){return typeof a=="number"&&Math.floor(a)===a},
jG:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.b(H.c3(a,"int"))},
fj:function(a){return typeof a=="number"},
jH:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.b(H.c3(a,"num"))},
iD:function(a){return typeof a=="string"},
jI:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.b(H.c3(a,"String"))},
iK:function(a,b){var t,s,r
for(t="",s="",r=0;r<a.length;++r,s=", ")t+=C.a.q(s,H.B(a[r],b))
return t},
fg:function(a1,a2,a3){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=", "
if(a3!=null){t=a3.length
if(a2==null){a2=H.i([],u.s)
s=null}else s=a2.length
r=a2.length
for(q=t;q>0;--q)a2.push("T"+(r+q))
for(p=u.K,o="<",n="",q=0;q<t;++q,n=a0){o+=n
m=a2.length
l=m-1-q
if(l<0)return H.h(a2,l)
o=C.a.q(o,a2[l])
k=a3[q]
if(!(H.V(k)||k===p))m=!(k===p)
else m=!1
if(m)o+=C.a.q(" extends ",H.B(k,a2))}o+=">"}else{o=""
s=null}p=a1.z
j=a1.Q
i=j.a
h=i.length
g=j.b
f=g.length
e=j.c
d=e.length
c=H.B(p,a2)
for(b="",a="",q=0;q<h;++q,a=a0)b+=C.a.q(a,H.B(i[q],a2))
if(f>0){b+=a+"["
for(a="",q=0;q<f;++q,a=a0)b+=C.a.q(a,H.B(g[q],a2))
b+="]"}if(d>0){b+=a+"{"
for(a="",q=0;q<d;q+=2,a=a0)b+=C.a.q(a,H.B(e[q+1],a2))+" "+e[q]
b+="}"}if(s!=null)a2.length=s
return o+"("+b+") => "+H.f(c)},
B:function(a,b){var t,s,r,q,p,o,n,m=a.y
if(m===5)return"erased"
if(m===2)return"dynamic"
if(m===3)return"void"
if(m===1)return"Never"
if(m===4)return"any"
if(m===6){t=H.B(a.z,b)
return t}if(m===7){s=a.z
t=H.B(s,b)
r=s.y
return J.dY(r===11||r===12?C.a.q("(",t)+")":t,"?")}if(m===8)return"FutureOr<"+H.f(H.B(a.z,b))+">"
if(m===9){q=H.iP(a.z)
p=a.Q
return p.length!==0?q+("<"+H.iK(p,b)+">"):q}if(m===11)return H.fg(a,b,null)
if(m===12)return H.fg(a.z,b,a.Q)
if(m===13){o=a.z
n=b.length
o=n-1-o
if(o<0||o>=n)return H.h(b,o)
return b[o]}return"?"},
iP:function(a){var t,s=H.fG(a)
if(s!=null)return s
t="minified:"+a
return t},
f8:function(a,b){var t=a.tR[b]
for(;typeof t=="string";)t=a.tR[t]
return t},
ia:function(a,b){var t,s,r,q,p,o=a.eT,n=o[b]
if(n==null)return H.ek(a,b,!1)
else if(typeof n=="number"){t=n
s=H.b5(a,5,"#")
r=[]
for(q=0;q<t;++q)r.push(s)
p=H.b4(a,b,r)
o[b]=p
return p}else return n},
i8:function(a,b){return H.ff(a.tR,b)},
i7:function(a,b){return H.ff(a.eT,b)},
ek:function(a,b,c){var t,s=a.eC,r=s.get(b)
if(r!=null)return r
t=H.f7(a,null,b,c)
s.set(b,t)
return t},
c5:function(a,b,c){var t,s,r=b.ch
if(r==null)r=b.ch=new Map()
t=r.get(c)
if(t!=null)return t
s=H.f7(a,b,c,!0)
r.set(c,s)
return s},
i9:function(a,b,c){var t,s,r,q=b.cx
if(q==null)q=b.cx=new Map()
t=c.cy
s=q.get(t)
if(s!=null)return s
r=H.eh(a,b,c.y===10?c.Q:[c])
q.set(t,r)
return r},
f7:function(a,b,c,d){var t=H.hX(H.hT(a,b,c,d))
if(t!=null)return t
throw H.b(P.ed('_Universe._parseRecipe("'+H.f(c)+'")'))},
T:function(a,b){b.a=H.iw
b.b=H.iy
return b},
b5:function(a,b,c){var t,s,r=a.eC.get(c)
if(r!=null)return r
t=new H.D(null,null)
t.y=b
t.cy=c
s=H.T(a,t)
a.eC.set(c,s)
return s},
f6:function(a,b,c){var t,s=b.cy+"*",r=a.eC.get(s)
if(r!=null)return r
t=H.i5(a,b,s,c)
a.eC.set(s,t)
return t},
i5:function(a,b,c,d){var t,s
if(d){t=b.y
if(H.V(b)||b===u.K||b===u.P||t===7||t===6)return b}s=new H.D(null,null)
s.y=6
s.z=b
s.cy=c
return H.T(a,s)},
ej:function(a,b,c){var t,s=b.cy+"?",r=a.eC.get(s)
if(r!=null)return r
t=H.i4(a,b,s,c)
a.eC.set(s,t)
return t},
i4:function(a,b,c,d){var t,s,r,q,p
if(d){t=b.y
if(!H.V(b))if(!(b===u.P))if(t!==7)s=t===8&&H.dQ(b.z)
else s=!0
else s=!0
else s=!0
if(s)return b
else if(t===1)return u.P
else if(t===6){r=b.z
q=r.y
if(q===1)return u.P
else if(q===8&&H.dQ(r.z))return r
else return H.hD(a,b)}}p=new H.D(null,null)
p.y=7
p.z=b
p.cy=c
return H.T(a,p)},
f5:function(a,b,c){var t,s=b.cy+"/",r=a.eC.get(s)
if(r!=null)return r
t=H.i2(a,b,s,c)
a.eC.set(s,t)
return t},
i2:function(a,b,c,d){var t,s
if(d){t=b.y
if(H.V(b)||b===u.K||b===u.K)return b
else if(t===1)return H.b4(a,"a6",[b])
else if(b===u.P)return u.f}s=new H.D(null,null)
s.y=8
s.z=b
s.cy=c
return H.T(a,s)},
i6:function(a,b){var t,s,r=""+b+"^",q=a.eC.get(r)
if(q!=null)return q
t=new H.D(null,null)
t.y=13
t.z=b
t.cy=r
s=H.T(a,t)
a.eC.set(r,s)
return s},
c4:function(a){var t,s,r,q=a.length
for(t="",s="",r=0;r<q;++r,s=",")t+=s+a[r].cy
return t},
i1:function(a){var t,s,r,q,p,o=a.length
for(t="",s="",r=0;r<o;r+=2,s=","){q=a[r]
p=a[r+1].cy
t+=s+q+":"+p}return t},
b4:function(a,b,c){var t,s,r,q=b
if(c.length!==0)q+="<"+H.c4(c)+">"
t=a.eC.get(q)
if(t!=null)return t
s=new H.D(null,null)
s.y=9
s.z=b
s.Q=c
if(c.length>0)s.c=c[0]
s.cy=q
r=H.T(a,s)
a.eC.set(q,r)
return r},
eh:function(a,b,c){var t,s,r,q,p,o
if(b.y===10){t=b.z
s=b.Q.concat(c)}else{s=c
t=b}r=t.cy+";"+("<"+H.c4(s)+">")
q=a.eC.get(r)
if(q!=null)return q
p=new H.D(null,null)
p.y=10
p.z=t
p.Q=s
p.cy=r
o=H.T(a,p)
a.eC.set(r,o)
return o},
f4:function(a,b,c){var t,s,r,q,p=b.cy,o=c.a,n=o.length,m=c.b,l=m.length,k=c.c,j=k.length,i="("+H.c4(o)
if(l>0)i+=(n>0?",":"")+"["+H.c4(m)+"]"
if(j>0)i+=(n>0?",":"")+"{"+H.i1(k)+"}"
t=p+(i+")")
s=a.eC.get(t)
if(s!=null)return s
r=new H.D(null,null)
r.y=11
r.z=b
r.Q=c
r.cy=t
q=H.T(a,r)
a.eC.set(t,q)
return q},
ei:function(a,b,c,d){var t,s=b.cy+"<"+H.c4(c)+">",r=a.eC.get(s)
if(r!=null)return r
t=H.i3(a,b,c,s,d)
a.eC.set(s,t)
return t},
i3:function(a,b,c,d,e){var t,s,r,q,p,o,n,m
if(e){t=c.length
s=new Array(t)
for(r=0,q=0;q<t;++q){p=c[q]
if(p.y===1){s[q]=p;++r}}if(r>0){o=H.U(a,b,s,0)
n=H.bb(a,c,s,0)
return H.ei(a,o,n,c!==n)}}m=new H.D(null,null)
m.y=12
m.z=b
m.Q=c
m.cy=d
return H.T(a,m)},
hT:function(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
hX:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h=a.r,g=a.s
for(t=h.length,s=0;s<t;){r=h.charCodeAt(s)
if(r>=48&&r<=57)s=H.hU(s+1,r,h,g)
else if((((r|32)>>>0)-97&65535)<26||r===95||r===36)s=H.f3(a,s,h,g,!1)
else if(r===46)s=H.f3(a,s,h,g,!0)
else{++s
switch(r){case 44:break
case 58:break
case 59:g.push(H.S(a.u,a.e,g.pop()))
break
case 94:g.push(H.i6(a.u,g.pop()))
break
case 35:g.push(H.b5(a.u,5,"#"))
break
case 64:g.push(H.b5(a.u,2,"@"))
break
case 126:g.push(H.b5(a.u,3,"~"))
break
case 60:g.push(a.p)
a.p=g.length
break
case 62:q=a.u
p=g.splice(a.p)
H.eg(a.u,a.e,p)
a.p=g.pop()
o=g.pop()
if(typeof o=="string")g.push(H.b4(q,o,p))
else{n=H.S(q,a.e,o)
switch(n.y){case 11:g.push(H.ei(q,n,p,a.n))
break
default:g.push(H.eh(q,n,p))
break}}break
case 38:H.hV(a,g)
break
case 42:m=a.u
g.push(H.f6(m,H.S(m,a.e,g.pop()),a.n))
break
case 63:m=a.u
g.push(H.ej(m,H.S(m,a.e,g.pop()),a.n))
break
case 47:m=a.u
g.push(H.f5(m,H.S(m,a.e,g.pop()),a.n))
break
case 40:g.push(a.p)
a.p=g.length
break
case 41:q=a.u
l=new H.bW()
k=q.sEA
j=q.sEA
o=g.pop()
if(typeof o=="number")switch(o){case-1:k=g.pop()
break
case-2:j=g.pop()
break
default:g.push(o)
break}else g.push(o)
p=g.splice(a.p)
H.eg(a.u,a.e,p)
a.p=g.pop()
l.a=p
l.b=k
l.c=j
g.push(H.f4(q,H.S(q,a.e,g.pop()),l))
break
case 91:g.push(a.p)
a.p=g.length
break
case 93:p=g.splice(a.p)
H.eg(a.u,a.e,p)
a.p=g.pop()
g.push(p)
g.push(-1)
break
case 123:g.push(a.p)
a.p=g.length
break
case 125:p=g.splice(a.p)
H.hY(a.u,a.e,p)
a.p=g.pop()
g.push(p)
g.push(-2)
break
default:throw"Bad character "+r}}}i=g.pop()
return H.S(a.u,a.e,i)},
hU:function(a,b,c,d){var t,s,r=b-48
for(t=c.length;a<t;++a){s=c.charCodeAt(a)
if(!(s>=48&&s<=57))break
r=r*10+(s-48)}d.push(r)
return a},
f3:function(a,b,c,d,e){var t,s,r,q,p,o,n=b+1
for(t=c.length;n<t;++n){s=c.charCodeAt(n)
if(s===46){if(e)break
e=!0}else{if(!((((s|32)>>>0)-97&65535)<26||s===95||s===36))r=s>=48&&s<=57
else r=!0
if(!r)break}}q=c.substring(b,n)
if(e){t=a.u
p=a.e
if(p.y===10)p=p.z
o=H.f8(t,p.z)[q]
if(o==null)H.ap('No "'+q+'" in "'+H.hC(p)+'"')
d.push(H.c5(t,p,o))}else d.push(q)
return n},
hV:function(a,b){var t=b.pop()
if(0===t){b.push(H.b5(a.u,1,"0&"))
return}if(1===t){b.push(H.b5(a.u,4,"1&"))
return}throw H.b(P.cj("Unexpected extended operation "+H.f(t)))},
S:function(a,b,c){if(typeof c=="string")return H.b4(a,c,a.sEA)
else if(typeof c=="number")return H.hW(a,b,c)
else return c},
eg:function(a,b,c){var t,s=c.length
for(t=0;t<s;++t)c[t]=H.S(a,b,c[t])},
hY:function(a,b,c){var t,s=c.length
for(t=1;t<s;t+=2)c[t]=H.S(a,b,c[t])},
hW:function(a,b,c){var t,s,r=b.y
if(r===10){if(c===0)return b.z
t=b.Q
s=t.length
if(c<=s)return t[c-1]
c-=s
b=b.z
r=b.y}else if(c===0)return b
if(r!==9)throw H.b(P.cj("Indexed base must be an interface type"))
t=b.Q
if(c<=t.length)return t[c-1]
throw H.b(P.cj("Bad index "+c+" for "+b.h(0)))},
o:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k
if(b===d)return!0
if(H.V(d)||d===u.K)return!0
t=b.y
if(t===4)return!0
if(H.V(b))return!1
if(b===u.P)return!0
s=t===13
if(s)if(H.o(a,c[b.z],c,d,e))return!0
r=d.y
if(t===6)return H.o(a,b.z,c,d,e)
if(r===6){q=d.z
return H.o(a,b,c,q,e)}if(t===8){if(!H.o(a,b.z,c,d,e))return!1
return H.o(a,H.eS(a,b),c,d,e)}if(t===7){q=H.o(a,b.z,c,d,e)
return q}if(r===8){if(H.o(a,b,c,d.z,e))return!0
return H.o(a,b,c,H.eS(a,d),e)}if(r===7){q=H.o(a,b,c,d.z,e)
return q}if(s)return!1
q=t!==11
if((!q||t===12)&&d===u.Z)return!0
if(r===12){if(b===u.g)return!0
if(t!==12)return!1
p=b.Q
o=d.Q
n=p.length
if(n!==o.length)return!1
c=c==null?p:p.concat(c)
e=e==null?o:o.concat(e)
for(m=0;m<n;++m){l=p[m]
k=o[m]
if(!H.o(a,l,c,k,e)||!H.o(a,k,e,l,c))return!1}return H.fi(a,b.z,c,d.z,e)}if(r===11){if(b===u.g)return!0
if(q)return!1
return H.fi(a,b,c,d,e)}if(t===9){if(r!==9)return!1
return H.iB(a,b,c,d,e)}return!1},
fi:function(a0,a1,a2,a3,a4){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
if(!H.o(a0,a1.z,a2,a3.z,a4))return!1
t=a1.Q
s=a3.Q
r=t.a
q=s.a
p=r.length
o=q.length
if(p>o)return!1
n=o-p
m=t.b
l=s.b
k=m.length
j=l.length
if(p+k<o+j)return!1
for(i=0;i<p;++i){h=r[i]
if(!H.o(a0,q[i],a4,h,a2))return!1}for(i=0;i<n;++i){h=m[i]
if(!H.o(a0,q[p+i],a4,h,a2))return!1}for(i=0;i<j;++i){h=m[n+i]
if(!H.o(a0,l[i],a4,h,a2))return!1}g=t.c
f=s.c
e=g.length
d=f.length
for(i=0,c=0;c<d;c+=2){b=f[c]
do{if(i>=e)return!1
a=g[i]
i+=2}while(a<b)
if(b<a)return!1
h=g[i-1]
if(!H.o(a0,f[c+1],a4,h,a2))return!1}return!0},
iB:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l=b.z,k=d.z
if(l===k){t=b.Q
s=d.Q
r=t.length
for(q=0;q<r;++q){p=t[q]
o=s[q]
if(!H.o(a,p,c,o,e))return!1}return!0}if(d===u.K)return!0
n=H.f8(a,l)
if(n==null)return!1
m=n[k]
if(m==null)return!1
r=m.length
s=d.Q
for(q=0;q<r;++q)if(!H.o(a,H.c5(a,b,m[q]),c,s[q],e))return!1
return!0},
dQ:function(a){var t,s=a.y
if(!(a===u.P))if(!H.V(a))if(s!==7)if(!(s===6&&H.dQ(a.z)))t=s===8&&H.dQ(a.z)
else t=!0
else t=!0
else t=!0
else t=!0
return t},
j2:function(a){return H.V(a)||a===u.K},
V:function(a){var t,s=a.y,r=s
if(r!==2)if(r!==3)if(r!==4)if(r!==5){t=u.K
if(!(a===t))s=s===7&&a.z===t
else s=!0}else s=!0
else s=!0
else s=!0
else s=!0
return s},
ff:function(a,b){var t,s,r=Object.keys(b),q=r.length
for(t=0;t<q;++t){s=r[t]
a[s]=b[s]}},
D:function D(a,b){var _=this
_.a=a
_.b=b
_.x=_.r=_.c=null
_.y=0
_.cy=_.cx=_.ch=_.Q=_.z=null},
bW:function bW(){this.c=this.b=this.a=null},
bU:function bU(){},
b3:function b3(a){this.a=a},
fG:function(a){return v.mangledGlobalNames[a]},
j7:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
eu:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
cf:function(a){var t,s,r,q,p=a[v.dispatchPropertyName]
if(p==null)if($.et==null){H.j_()
p=a[v.dispatchPropertyName]}if(p!=null){t=p.p
if(!1===t)return p.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return p.i
if(p.e===s)throw H.b(P.ed("Return interceptor for "+H.f(t(a,p))))}r=a.constructor
q=r==null?null:r[$.ew()]
if(q!=null)return q
q=H.j3(a)
if(q!=null)return q
if(typeof a=="function")return C.J
t=Object.getPrototypeOf(a)
if(t==null)return C.w
if(t===Object.prototype)return C.w
if(typeof r=="function"){Object.defineProperty(r,$.ew(),{value:C.n,enumerable:false,writable:true,configurable:true})
return C.n}return C.n},
hl:function(a){a.fixed$length=Array
return a},
eF:function(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
hm:function(a,b){var t,s
for(t=a.length;b<t;){s=C.a.k(a,b)
if(s!==32&&s!==13&&!J.eF(s))break;++b}return b},
hn:function(a,b){var t,s
for(;b>0;b=t){t=b-1
s=C.a.m(a,t)
if(s!==32&&s!==13&&!J.eF(s))break}return b},
ao:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.aC.prototype
return J.cE.prototype}if(typeof a=="string")return J.Q.prototype
if(a==null)return J.bz.prototype
if(typeof a=="boolean")return J.cD.prototype
if(a.constructor==Array)return J.w.prototype
if(typeof a!="object"){if(typeof a=="function")return J.J.prototype
return a}if(a instanceof P.l)return a
return J.cf(a)},
iW:function(a){if(typeof a=="number")return J.aD.prototype
if(typeof a=="string")return J.Q.prototype
if(a==null)return a
if(a.constructor==Array)return J.w.prototype
if(typeof a!="object"){if(typeof a=="function")return J.J.prototype
return a}if(a instanceof P.l)return a
return J.cf(a)},
bd:function(a){if(typeof a=="string")return J.Q.prototype
if(a==null)return a
if(a.constructor==Array)return J.w.prototype
if(typeof a!="object"){if(typeof a=="function")return J.J.prototype
return a}if(a instanceof P.l)return a
return J.cf(a)},
ft:function(a){if(a==null)return a
if(a.constructor==Array)return J.w.prototype
if(typeof a!="object"){if(typeof a=="function")return J.J.prototype
return a}if(a instanceof P.l)return a
return J.cf(a)},
cd:function(a){if(typeof a=="string")return J.Q.prototype
if(a==null)return a
if(!(a instanceof P.l))return J.af.prototype
return a},
ce:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.J.prototype
return a}if(a instanceof P.l)return a
return J.cf(a)},
dY:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.iW(a).q(a,b)},
cg:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.ao(a).E(a,b)},
ey:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.fz(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.bd(a).n(a,b)},
dZ:function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.fz(a,a[v.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.ft(a).v(a,b,c)},
fY:function(a,b,c,d){return J.ce(a).aT(a,b,c,d)},
fZ:function(a,b){return J.cd(a).k(a,b)},
h_:function(a,b){return J.bd(a).bb(a,b)},
h0:function(a,b,c,d){return J.ce(a).bh(a,b,c,d)},
h1:function(a,b){return J.ce(a).N(a,b)},
ez:function(a){return J.ce(a).gat(a)},
bh:function(a){return J.ao(a).gp(a)},
e_:function(a){return J.ft(a).gD(a)},
W:function(a){return J.bd(a).gj(a)},
ch:function(a,b,c,d,e){return J.ce(a).aB(a,b,c,d,e)},
h2:function(a,b){return J.cd(a).aM(a,b)},
aq:function(a){return J.ao(a).h(a)},
eA:function(a){return J.cd(a).bD(a)},
p:function p(){},
cD:function cD(){},
bz:function bz(){},
Z:function Z(){},
bH:function bH(){},
af:function af(){},
J:function J(){},
w:function w(a){this.$ti=a},
cG:function cG(a){this.$ti=a},
bi:function bi(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
aD:function aD(){},
aC:function aC(){},
cE:function cE(){},
Q:function Q(){}},P={
hP:function(){var t,s,r={}
if(self.scheduleImmediate!=null)return P.iR()
if(self.MutationObserver!=null&&self.document!=null){t=self.document.createElement("div")
s=self.document.createElement("span")
r.a=null
new self.MutationObserver(H.cb(new P.d6(r),1)).observe(t,{childList:true})
return new P.d5(r,t,s)}else if(self.setImmediate!=null)return P.iS()
return P.iT()},
hQ:function(a){self.scheduleImmediate(H.cb(new P.d7(a),0))},
hR:function(a){self.setImmediate(H.cb(new P.d8(a),0))},
hS:function(a){P.ec(C.q,a)},
ec:function(a,b){var t=C.b.A(a.a,1000)
return P.i_(t<0?0:t,b)},
i_:function(a,b){var t=new P.dx()
t.aR(a,b)
return t},
hg:function(a,b){var t=new P.A($.k,b.B("A<0>"))
P.hH(C.q,new P.cy(t,a))
return t},
f1:function(a,b){var t,s,r
b.a=1
try{a.aF(new P.dg(b),new P.dh(b),u.P)}catch(r){t=H.K(r)
s=H.P(r)
P.jb(new P.di(b,t,s))}},
df:function(a,b){var t,s
for(;t=a.a,t===2;)a=a.c
if(t>=4){s=b.U()
b.a=a.a
b.c=a.c
P.aj(b,s)}else{s=b.c
b.a=2
b.c=a
a.ar(s)}},
aj:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h=null,g={},f=g.a=a
for(t=u._;!0;){s={}
r=f.a===8
if(b==null){if(r){t=f.c
P.dI(h,h,f.b,t.a,t.b)}return}for(;q=b.a,q!=null;b=q){b.a=null
P.aj(g.a,b)}f=g.a
p=f.c
s.a=r
s.b=p
o=!r
if(o){n=b.c
n=(n&1)!==0||(n&15)===8}else n=!0
if(n){n=b.b
m=n.b
if(r){l=f.b===m
l=!(l||l)}else l=!1
if(l){P.dI(h,h,f.b,p.a,p.b)
return}k=$.k
if(k!==m)$.k=m
else k=h
f=b.c
if((f&15)===8)new P.dn(g,s,b,r).$0()
else if(o){if((f&1)!==0)new P.dm(s,b,p).$0()}else if((f&2)!==0)new P.dl(g,s,b).$0()
if(k!=null)$.k=k
f=s.b
if(t.b(f)){if(f.a>=4){j=n.c
n.c=null
b=n.V(j)
n.a=f.a
n.c=f.c
g.a=f
continue}else P.df(f,n)
return}}i=b.b
j=i.c
i.c=null
b=i.V(j)
f=s.a
o=s.b
if(!f){i.a=4
i.c=o}else{i.a=8
i.c=o}g.a=i
f=i}},
iI:function(a,b){if(u.Q.b(a))return a
if(u.v.b(a))return a
throw H.b(P.e1(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
iH:function(){var t,s
for(;t=$.al,t!=null;){$.ba=null
s=t.b
$.al=s
if(s==null)$.b9=null
t.a.$0()}},
iM:function(){$.eq=!0
try{P.iH()}finally{$.ba=null
$.eq=!1
if($.al!=null)$.ex().$1(P.fr())}},
fo:function(a){var t=new P.bQ(a)
if($.al==null){$.al=$.b9=t
if(!$.eq)$.ex().$1(P.fr())}else $.b9=$.b9.b=t},
iL:function(a){var t,s,r=$.al
if(r==null){P.fo(a)
$.ba=$.b9
return}t=new P.bQ(a)
s=$.ba
if(s==null){t.b=r
$.al=$.ba=t}else{t.b=s.b
$.ba=s.b=t
if(t.b==null)$.b9=t}},
jb:function(a){var t=null,s=$.k
if(C.c===s){P.am(t,t,C.c,a)
return}P.am(t,t,s,s.a7(a))},
hH:function(a,b){var t=$.k
if(t===C.c)return P.ec(a,b)
return P.ec(a,t.a7(b))},
ck:function(a,b){var t=b==null?P.e3(a):b
P.e2(a,"error")
return new P.bk(a,t)},
e3:function(a){var t
if(u.C.b(a)){t=a.gS()
if(t!=null)return t}return C.G},
dI:function(a,b,c,d,e){var t={}
t.a=d
t.b=e
if(d==null){t.a=new P.C(!1,null,"error","Must not be null")
t.b=P.hF()}P.iL(new P.dJ(t))},
fk:function(a,b,c,d){var t,s=$.k
if(s===c)return d.$0()
$.k=c
t=s
try{s=d.$0()
return s}finally{$.k=t}},
fl:function(a,b,c,d,e){var t,s=$.k
if(s===c)return d.$1(e)
$.k=c
t=s
try{s=d.$1(e)
return s}finally{$.k=t}},
iJ:function(a,b,c,d,e,f){var t,s=$.k
if(s===c)return d.$2(e,f)
$.k=c
t=s
try{s=d.$2(e,f)
return s}finally{$.k=t}},
am:function(a,b,c,d){var t=C.c!==c
if(t)d=!(!t||!1)?c.a7(d):c.b7(d)
P.fo(d)},
d6:function d6(a){this.a=a},
d5:function d5(a,b,c){this.a=a
this.b=b
this.c=c},
d7:function d7(a){this.a=a},
d8:function d8(a){this.a=a},
dx:function dx(){},
dy:function dy(a,b){this.a=a
this.b=b},
cy:function cy(a,b){this.a=a
this.b=b},
aU:function aU(){},
aT:function aT(a,b){this.a=a
this.$ti=b},
bX:function bX(a,b,c,d){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d},
A:function A(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
dc:function dc(a,b){this.a=a
this.b=b},
dk:function dk(a,b){this.a=a
this.b=b},
dg:function dg(a){this.a=a},
dh:function dh(a){this.a=a},
di:function di(a,b,c){this.a=a
this.b=b
this.c=c},
de:function de(a,b){this.a=a
this.b=b},
dj:function dj(a,b){this.a=a
this.b=b},
dd:function dd(a,b,c){this.a=a
this.b=b
this.c=c},
dn:function dn(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dp:function dp(a){this.a=a},
dm:function dm(a,b,c){this.a=a
this.b=b
this.c=c},
dl:function dl(a,b,c){this.a=a
this.b=b
this.c=c},
bQ:function bQ(a){this.a=a
this.b=null},
bK:function bK(){},
bL:function bL(){},
bk:function bk(a,b){this.a=a
this.b=b},
dD:function dD(){},
dJ:function dJ(a){this.a=a},
dt:function dt(){},
dv:function dv(a,b){this.a=a
this.b=b},
du:function du(a,b){this.a=a
this.b=b},
dw:function dw(a,b,c){this.a=a
this.b=b
this.c=c},
eH:function(a,b){return new H.aE(a.B("@<0>").aW(b).B("aE<1,2>"))},
eI:function(a){return new P.aV(a.B("aV<0>"))},
ef:function(){var t=Object.create(null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t},
f2:function(a,b){var t=new P.aW(a,b)
t.c=a.e
return t},
hj:function(a,b,c){var t,s
if(P.er(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}t=H.i([],u.s)
$.z.push(a)
try{P.iG(a,t)}finally{if(0>=$.z.length)return H.h($.z,-1)
$.z.pop()}s=P.eV(b,t,", ")+c
return s.charCodeAt(0)==0?s:s},
cC:function(a,b,c){var t,s
if(P.er(a))return b+"..."+c
t=new P.t(b)
$.z.push(a)
try{s=t
s.a=P.eV(s.a,a,", ")}finally{if(0>=$.z.length)return H.h($.z,-1)
$.z.pop()}t.a+=c
s=t.a
return s.charCodeAt(0)==0?s:s},
er:function(a){var t,s
for(t=$.z.length,s=0;s<t;++s)if(a===$.z[s])return!0
return!1},
iG:function(a,b){var t,s,r,q,p,o,n,m=a.gD(a),l=0,k=0
while(!0){if(!(l<80||k<3))break
if(!m.l())return
t=H.f(m.gt())
b.push(t)
l+=t.length+2;++k}if(!m.l()){if(k<=5)return
if(0>=b.length)return H.h(b,-1)
s=b.pop()
if(0>=b.length)return H.h(b,-1)
r=b.pop()}else{q=m.gt();++k
if(!m.l()){if(k<=4){b.push(H.f(q))
return}s=H.f(q)
if(0>=b.length)return H.h(b,-1)
r=b.pop()
l+=s.length+2}else{p=m.gt();++k
for(;m.l();q=p,p=o){o=m.gt();++k
if(k>100){while(!0){if(!(l>75&&k>3))break
if(0>=b.length)return H.h(b,-1)
l-=b.pop().length+2;--k}b.push("...")
return}}r=H.f(q)
s=H.f(p)
l+=s.length+r.length+4}}if(k>b.length+2){l+=5
n="..."}else n=null
while(!0){if(!(l>80&&b.length>3))break
if(0>=b.length)return H.h(b,-1)
l-=b.pop().length+2
if(n==null){l+=5
n="..."}}if(n!=null)b.push(n)
b.push(r)
b.push(s)},
e7:function(a){var t,s={}
if(P.er(a))return"{...}"
t=new P.t("")
try{$.z.push(a)
t.a+="{"
s.a=!0
J.h1(a,new P.cL(s,t))
t.a+="}"}finally{if(0>=$.z.length)return H.h($.z,-1)
$.z.pop()}s=t.a
return s.charCodeAt(0)==0?s:s},
aV:function aV(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
dr:function dr(a){this.a=a
this.b=null},
aW:function aW(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
aH:function aH(){},
r:function r(){},
aJ:function aJ(){},
cL:function cL(a,b){this.a=a
this.b=b},
a9:function a9(){},
c6:function c6(){},
aK:function aK(){},
ah:function ah(a,b){this.a=a
this.$ti=b},
a0:function a0(){},
aP:function aP(){},
b0:function b0(){},
aX:function aX(){},
b1:function b1(){},
b6:function b6(){},
hK:function(a,b,c,d){if(b instanceof Uint8Array)return P.hL(!1,b,c,d)
return null},
hL:function(a,b,c,d){var t,s,r=$.fU()
if(r==null)return null
t=0===c
if(t&&!0)return P.ee(r,b)
s=b.length
d=P.ae(c,d,s)
if(t&&d===s)return P.ee(r,b)
return P.ee(r,b.subarray(c,d))},
ee:function(a,b){if(P.hN(b))return null
return P.hO(a,b)},
hO:function(a,b){var t,s
try{t=a.decode(b)
return t}catch(s){H.K(s)}return null},
hN:function(a){var t,s=a.length-2
for(t=0;t<s;++t)if(a[t]===237)if((a[t+1]&224)===160)return!0
return!1},
hM:function(){var t,s
try{t=new TextDecoder("utf-8",{fatal:true})
return t}catch(s){H.K(s)}return null},
fn:function(a,b,c){var t,s,r
for(t=J.bd(a),s=b;s<c;++s){r=t.n(a,s)
if(typeof r!=="number")return r.aJ()
if((r&127)!==r)return s-b}return c-b},
eB:function(a,b,c,d,e,f){if(C.b.Z(f,4)!==0)throw H.b(P.n("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.b(P.n("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.b(P.n("Invalid base64 padding, more than two '=' characters",a,b))},
cl:function cl(){},
cm:function cm(){},
bn:function bn(){},
bq:function bq(){},
cu:function cu(){},
d2:function d2(){},
d3:function d3(a){this.a=a},
dC:function dC(a,b){var _=this
_.a=a
_.b=b
_.c=!0
_.f=_.e=_.d=0},
bf:function(a,b,c){var t=H.hy(a,c)
if(t!=null)return t
if(b!=null)return b.$1(a)
throw H.b(P.n(a,null,null))},
hf:function(a){if(a instanceof H.a3)return a.h(0)
return"Instance of '"+H.f(H.cN(a))+"'"},
eb:function(a,b,c){var t
if(Array.isArray(a)){t=a.length
c=P.ae(b,c,t)
return H.eP(b>0||c<t?C.d.aN(a,b,c):a)}if(u.c.b(a))return H.hA(a,b,P.ae(b,c,a.length))
return P.hG(a,b,c)},
hG:function(a,b,c){var t,s,r,q,p=null
if(b<0)throw H.b(P.v(b,0,J.W(a),p,p))
t=c==null
if(!t&&c<b)throw H.b(P.v(c,b,J.W(a),p,p))
s=J.e_(a)
for(r=0;r<b;++r)if(!s.l())throw H.b(P.v(b,0,r,p,p))
q=[]
if(t)for(;s.l();)q.push(s.gt())
else for(r=b;r<c;++r){if(!s.l())throw H.b(P.v(c,b,r,p,p))
q.push(s.gt())}return H.eP(q)},
eR:function(a){return new H.cF(a,H.eG(a,!1,!0,!1,!1,!1))},
eV:function(a,b,c){var t=J.e_(b)
if(!t.l())return a
if(c.length===0){do a+=H.f(t.gt())
while(t.l())}else{a+=H.f(t.gt())
for(;t.l();)a=a+c+H.f(t.gt())}return a},
eY:function(){var t=H.ht()
if(t!=null)return P.hJ(t)
throw H.b(P.y("'Uri.base' is not supported"))},
hF:function(){var t,s
if($.fW())return H.P(new Error())
try{throw H.b("")}catch(s){H.K(s)
t=H.P(s)
return t}},
hd:function(a){var t=Math.abs(a),s=a<0?"-":""
if(t>=1000)return""+a
if(t>=100)return s+"0"+t
if(t>=10)return s+"00"+t
return s+"000"+t},
he:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bu:function(a){if(a>=10)return""+a
return"0"+a},
cv:function(a){if(typeof a=="number"||H.fh(a)||null==a)return J.aq(a)
if(typeof a=="string")return JSON.stringify(a)
return P.hf(a)},
cj:function(a){return new P.bj(a)},
e0:function(a){return new P.C(!1,null,null,a)},
e1:function(a,b,c){return new P.C(!0,a,b,c)},
h3:function(a){return new P.C(!1,null,a,"Must not be null")},
e2:function(a,b){if(a==null)throw H.b(P.h3(b))
return a},
eQ:function(a){var t=null
return new P.ad(t,t,!1,t,t,a)},
cQ:function(a,b){return new P.ad(null,null,!0,a,b,"Value not in range")},
v:function(a,b,c,d,e){return new P.ad(b,c,!0,a,d,"Invalid value")},
ae:function(a,b,c){if(0>a||a>c)throw H.b(P.v(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.b(P.v(b,a,c,"end",null))
return b}return c},
hB:function(a,b){if(typeof a!=="number")return a.u()
if(a<0)throw H.b(P.v(a,0,null,b,null))
return a},
cB:function(a,b,c,d,e){var t=e==null?J.W(b):e
return new P.by(t,!0,a,c,"Index out of range")},
y:function(a){return new P.bP(a)},
ed:function(a){return new P.bM(a)},
eU:function(a){return new P.aS(a)},
av:function(a){return new P.bo(a)},
n:function(a,b,c){return new P.cx(a,b,c)},
ho:function(a,b,c){var t,s,r=H.i([],c.B("w<0>"))
C.d.sj(r,a)
for(t=0;t<a;++t){s=b.$1(t)
if(t>=r.length)return H.h(r,t)
r[t]=s}return r},
ev:function(a){H.j7(a)},
hJ:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a.length
if(d>=5){t=((C.a.k(a,4)^58)*3|C.a.k(a,0)^100|C.a.k(a,1)^97|C.a.k(a,2)^116|C.a.k(a,3)^97)>>>0
if(t===0)return P.eX(d<d?C.a.i(a,0,d):a,5,e).gaG()
else if(t===32)return P.eX(C.a.i(a,5,d),0,e).gaG()}s=new Array(8)
s.fixed$length=Array
r=H.i(s,u.t)
r[0]=0
r[1]=-1
r[2]=-1
r[7]=-1
r[3]=0
r[4]=0
r[5]=d
r[6]=d
if(P.fm(a,0,d,0,r)>=14)r[7]=d
q=r[1]
if(typeof q!=="number")return q.aK()
if(q>=0)if(P.fm(a,0,q,20,r)===20)r[7]=q
s=r[2]
if(typeof s!=="number")return s.q()
p=s+1
o=r[3]
n=r[4]
m=r[5]
l=r[6]
if(typeof l!=="number")return l.u()
if(typeof m!=="number")return H.H(m)
if(l<m)m=l
if(typeof n!=="number")return n.u()
if(n<p)n=m
else if(n<=q)n=q+1
if(typeof o!=="number")return o.u()
if(o<p)o=n
s=r[7]
if(typeof s!=="number")return s.u()
k=s<0
if(k)if(p>q+3){j=e
k=!1}else{s=o>0
if(s&&o+1===n){j=e
k=!1}else{if(!(m<d&&m===n+2&&C.a.w(a,"..",n)))i=m>n+2&&C.a.w(a,"/..",m-3)
else i=!0
if(i){j=e
k=!1}else{if(q===4)if(C.a.w(a,"file",0)){if(p<=0){if(!C.a.w(a,"/",n)){h="file:///"
t=3}else{h="file://"
t=2}a=h+C.a.i(a,n,d)
q-=0
s=t-0
m+=s
l+=s
d=a.length
p=7
o=7
n=7}else if(n===m){g=m+1;++l
a=C.a.L(a,n,m,"/");++d
m=g}j="file"}else if(C.a.w(a,"http",0)){if(s&&o+3===n&&C.a.w(a,"80",o+1)){f=n-3
m-=3
l-=3
a=C.a.L(a,o,n,"")
d-=3
n=f}j="http"}else j=e
else if(q===5&&C.a.w(a,"https",0)){if(s&&o+4===n&&C.a.w(a,"443",o+1)){f=n-4
m-=4
l-=4
a=C.a.L(a,o,n,"")
d-=3
n=f}j="https"}else j=e
k=!0}}}else j=e
if(k){if(d<a.length){a=C.a.i(a,0,d)
q-=0
p-=0
o-=0
n-=0
m-=0
l-=0}return new P.c0(a,q,p,o,n,m,l,j)}return P.ib(a,0,d,q,p,o,n,m,l,j)},
f_:function(a){var t=u.N
return C.d.bk(H.i(a.split("&"),u.s),P.eH(t,t),new P.d1(C.m))},
hI:function(a,b,c){var t,s,r,q,p,o,n,m=null,l="IPv4 address should contain exactly 4 parts",k="each part must be in the range 0..255",j=new P.cZ(a),i=new Uint8Array(4)
for(t=i.length,s=b,r=s,q=0;s<c;++s){p=C.a.m(a,s)
if(p!==46){if((p^48)>9)j.$2("invalid character",s)}else{if(q===3)j.$2(l,s)
o=P.bf(C.a.i(a,r,s),m,m)
if(typeof o!=="number")return o.aL()
if(o>255)j.$2(k,r)
n=q+1
if(q>=t)return H.h(i,q)
i[q]=o
r=s+1
q=n}}if(q!==3)j.$2(l,c)
o=P.bf(C.a.i(a,r,c),m,m)
if(typeof o!=="number")return o.aL()
if(o>255)j.$2(k,r)
if(q>=t)return H.h(i,q)
i[q]=o
return i},
eZ:function(a,b,a0){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=new P.d_(a),c=new P.d0(d,a)
if(a.length<2)d.$1("address is too short")
t=H.i([],u.t)
for(s=b,r=s,q=!1,p=!1;s<a0;++s){o=C.a.m(a,s)
if(o===58){if(s===b){++s
if(C.a.m(a,s)!==58)d.$2("invalid start colon.",s)
r=s}if(s===r){if(q)d.$2("only one wildcard `::` is allowed",s)
t.push(-1)
q=!0}else t.push(c.$2(r,s))
r=s+1}else if(o===46)p=!0}if(t.length===0)d.$1("too few parts")
n=r===a0
m=C.d.gO(t)
if(n&&m!==-1)d.$2("expected a part after last `:`",a0)
if(!n)if(!p)t.push(c.$2(r,a0))
else{l=P.hI(a,r,a0)
t.push((l[0]<<8|l[1])>>>0)
t.push((l[2]<<8|l[3])>>>0)}if(q){if(t.length>7)d.$1("an address with a wildcard must have less than 7 parts")}else if(t.length!==8)d.$1("an address without a wildcard must contain exactly 8 parts")
k=new Uint8Array(16)
for(m=t.length,j=k.length,i=9-m,s=0,h=0;s<m;++s){g=t[s]
if(g===-1)for(f=0;f<i;++f){if(h<0||h>=j)return H.h(k,h)
k[h]=0
e=h+1
if(e>=j)return H.h(k,e)
k[e]=0
h+=2}else{e=C.b.J(g,8)
if(h<0||h>=j)return H.h(k,h)
k[h]=e
e=h+1
if(e>=j)return H.h(k,e)
k[e]=g&255
h+=2}}return k},
ib:function(a,b,c,d,e,f,g,h,i,j){var t,s,r,q,p,o,n,m=null
if(j==null)if(d>b)j=P.il(a,b,d)
else{if(d===b)P.ak(a,b,"Invalid empty scheme")
j=""}if(e>b){t=d+3
s=t<e?P.im(a,t,e-1):""
r=P.ih(a,e,f,!1)
if(typeof f!=="number")return f.q()
q=f+1
if(typeof g!=="number")return H.H(g)
p=q<g?P.ij(P.bf(C.a.i(a,q,g),new P.dA(a,f),m),j):m}else{p=m
r=p
s=""}o=P.ii(a,g,h,m,j,r!=null)
if(typeof h!=="number")return h.u()
n=h<i?P.ik(a,h+1,i,m):m
return new P.b7(j,s,r,p,o,n,i<c?P.ig(a,i+1,c):m)},
f9:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
ak:function(a,b,c){throw H.b(P.n(c,a,b))},
ij:function(a,b){if(a!=null&&a===P.f9(b))return null
return a},
ih:function(a,b,c,d){var t,s,r,q,p,o
if(b===c)return""
if(C.a.m(a,b)===91){if(typeof c!=="number")return c.bH()
t=c-1
if(C.a.m(a,t)!==93)P.ak(a,b,"Missing end `]` to match `[` in host")
s=b+1
r=P.id(a,s,t)
if(typeof r!=="number")return r.u()
if(r<t){q=r+1
p=P.fe(a,C.a.w(a,"25",q)?r+3:q,t,"%25")}else p=""
P.eZ(a,s,r)
return C.a.i(a,b,r).toLowerCase()+p+"]"}if(typeof c!=="number")return H.H(c)
o=b
for(;o<c;++o)if(C.a.m(a,o)===58){r=C.a.X(a,"%",b)
if(!(r>=b&&r<c))r=c
if(r<c){q=r+1
p=P.fe(a,C.a.w(a,"25",q)?r+3:q,c,"%25")}else p=""
P.eZ(a,b,r)
return"["+C.a.i(a,b,r)+p+"]"}return P.ip(a,b,c)},
id:function(a,b,c){var t,s=C.a.X(a,"%",b)
if(s>=b){if(typeof c!=="number")return H.H(c)
t=s<c}else t=!1
return t?s:c},
fe:function(a,b,c,d){var t,s,r,q,p,o,n,m,l,k=d!==""?new P.t(d):null
if(typeof c!=="number")return H.H(c)
t=b
s=t
r=!0
for(;t<c;){q=C.a.m(a,t)
if(q===37){p=P.em(a,t,!0)
o=p==null
if(o&&r){t+=3
continue}if(k==null)k=new P.t("")
n=k.a+=C.a.i(a,s,t)
if(o)p=C.a.i(a,t,t+3)
else if(p==="%")P.ak(a,t,"ZoneID should not contain % anymore")
k.a=n+p
t+=3
s=t
r=!0}else{if(q<127){o=q>>>4
if(o>=8)return H.h(C.l,o)
o=(C.l[o]&1<<(q&15))!==0}else o=!1
if(o){if(r&&65<=q&&90>=q){if(k==null)k=new P.t("")
if(s<t){k.a+=C.a.i(a,s,t)
s=t}r=!1}++t}else{if((q&64512)===55296&&t+1<c){m=C.a.m(a,t+1)
if((m&64512)===56320){q=65536|(q&1023)<<10|m&1023
l=2}else l=1}else l=1
if(k==null)k=new P.t("")
k.a+=C.a.i(a,s,t)
k.a+=P.el(q)
t+=l
s=t}}}if(k==null)return C.a.i(a,b,c)
if(s<c)k.a+=C.a.i(a,s,c)
o=k.a
return o.charCodeAt(0)==0?o:o},
ip:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
if(typeof c!=="number")return H.H(c)
t=b
s=t
r=null
q=!0
for(;t<c;){p=C.a.m(a,t)
if(p===37){o=P.em(a,t,!0)
n=o==null
if(n&&q){t+=3
continue}if(r==null)r=new P.t("")
m=C.a.i(a,s,t)
l=r.a+=!q?m.toLowerCase():m
if(n){o=C.a.i(a,t,t+3)
k=3}else if(o==="%"){o="%25"
k=1}else k=3
r.a=l+o
t+=k
s=t
q=!0}else{if(p<127){n=p>>>4
if(n>=8)return H.h(C.t,n)
n=(C.t[n]&1<<(p&15))!==0}else n=!1
if(n){if(q&&65<=p&&90>=p){if(r==null)r=new P.t("")
if(s<t){r.a+=C.a.i(a,s,t)
s=t}q=!1}++t}else{if(p<=93){n=p>>>4
if(n>=8)return H.h(C.i,n)
n=(C.i[n]&1<<(p&15))!==0}else n=!1
if(n)P.ak(a,t,"Invalid character")
else{if((p&64512)===55296&&t+1<c){j=C.a.m(a,t+1)
if((j&64512)===56320){p=65536|(p&1023)<<10|j&1023
k=2}else k=1}else k=1
if(r==null)r=new P.t("")
m=C.a.i(a,s,t)
r.a+=!q?m.toLowerCase():m
r.a+=P.el(p)
t+=k
s=t}}}}if(r==null)return C.a.i(a,b,c)
if(s<c){m=C.a.i(a,s,c)
r.a+=!q?m.toLowerCase():m}n=r.a
return n.charCodeAt(0)==0?n:n},
il:function(a,b,c){var t,s,r,q
if(b===c)return""
if(!P.fb(C.a.k(a,b)))P.ak(a,b,"Scheme not starting with alphabetic character")
for(t=b,s=!1;t<c;++t){r=C.a.k(a,t)
if(r<128){q=r>>>4
if(q>=8)return H.h(C.k,q)
q=(C.k[q]&1<<(r&15))!==0}else q=!1
if(!q)P.ak(a,t,"Illegal scheme character")
if(65<=r&&r<=90)s=!0}a=C.a.i(a,b,c)
return P.ic(s?a.toLowerCase():a)},
ic:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
im:function(a,b,c){return P.b8(a,b,c,C.L,!1)},
ii:function(a,b,c,d,e,f){var t=e==="file",s=t||f,r=P.b8(a,b,c,C.u,!0)
if(r.length===0){if(t)return"/"}else if(s&&!C.a.F(r,"/"))r="/"+r
return P.io(r,e,f)},
io:function(a,b,c){var t=b.length===0
if(t&&!c&&!C.a.F(a,"/"))return P.iq(a,!t||c)
return P.ir(a)},
ik:function(a,b,c,d){return P.b8(a,b,c,C.j,!0)},
ig:function(a,b,c){return P.b8(a,b,c,C.j,!0)},
em:function(a,b,c){var t,s,r,q,p,o=b+2
if(o>=a.length)return"%"
t=C.a.m(a,b+1)
s=C.a.m(a,o)
r=H.dL(t)
q=H.dL(s)
if(r<0||q<0)return"%"
p=r*16+q
if(p<127){o=C.b.J(p,4)
if(o>=8)return H.h(C.l,o)
o=(C.l[o]&1<<(p&15))!==0}else o=!1
if(o)return H.cO(c&&65<=p&&90>=p?(p|32)>>>0:p)
if(t>=97||s>=97)return C.a.i(a,b,b+3).toUpperCase()
return null},
el:function(a){var t,s,r,q,p,o,n,m,l="0123456789ABCDEF"
if(a<128){t=new Array(3)
t.fixed$length=Array
s=H.i(t,u.t)
s[0]=37
s[1]=C.a.k(l,a>>>4)
s[2]=C.a.k(l,a&15)}else{if(a>2047)if(a>65535){r=240
q=4}else{r=224
q=3}else{r=192
q=2}t=new Array(3*q)
t.fixed$length=Array
s=H.i(t,u.t)
for(t=s.length,p=0;--q,q>=0;r=128){o=C.b.b4(a,6*q)&63|r
if(p>=t)return H.h(s,p)
s[p]=37
n=p+1
m=C.a.k(l,o>>>4)
if(n>=t)return H.h(s,n)
s[n]=m
m=p+2
n=C.a.k(l,o&15)
if(m>=t)return H.h(s,m)
s[m]=n
p+=3}}return P.eb(s,0,null)},
b8:function(a,b,c,d,e){var t=P.fd(a,b,c,d,e)
return t==null?C.a.i(a,b,c):t},
fd:function(a,b,c,d,e){var t,s,r,q,p,o=null,n=!e,m=b,l=m,k=o
while(!0){if(typeof m!=="number")return m.u()
if(typeof c!=="number")return H.H(c)
if(!(m<c))break
c$0:{t=C.a.m(a,m)
if(t<127){s=t>>>4
if(s>=8)return H.h(d,s)
s=(d[s]&1<<(t&15))!==0}else s=!1
if(s)++m
else{if(t===37){r=P.em(a,m,!1)
if(r==null){m+=3
break c$0}if("%"===r){r="%25"
q=1}else q=3}else{if(n)if(t<=93){s=t>>>4
if(s>=8)return H.h(C.i,s)
s=(C.i[s]&1<<(t&15))!==0}else s=!1
else s=!1
if(s){P.ak(a,m,"Invalid character")
q=o
r=q}else{if((t&64512)===55296){s=m+1
if(s<c){p=C.a.m(a,s)
if((p&64512)===56320){t=65536|(t&1023)<<10|p&1023
q=2}else q=1}else q=1}else q=1
r=P.el(t)}}if(k==null)k=new P.t("")
k.a+=C.a.i(a,l,m)
k.a+=H.f(r)
if(typeof q!=="number")return H.H(q)
m+=q
l=m}}}if(k==null)return o
if(typeof l!=="number")return l.u()
if(l<c)k.a+=C.a.i(a,l,c)
n=k.a
return n.charCodeAt(0)==0?n:n},
fc:function(a){if(C.a.F(a,"."))return!0
return C.a.aA(a,"/.")!==-1},
ir:function(a){var t,s,r,q,p,o,n
if(!P.fc(a))return a
t=H.i([],u.s)
for(s=a.split("/"),r=s.length,q=!1,p=0;p<r;++p){o=s[p]
if(J.cg(o,"..")){n=t.length
if(n!==0){if(0>=n)return H.h(t,-1)
t.pop()
if(t.length===0)t.push("")}q=!0}else if("."===o)q=!0
else{t.push(o)
q=!1}}if(q)t.push("")
return C.d.K(t,"/")},
iq:function(a,b){var t,s,r,q,p,o
if(!P.fc(a))return!b?P.fa(a):a
t=H.i([],u.s)
for(s=a.split("/"),r=s.length,q=!1,p=0;p<r;++p){o=s[p]
if(".."===o)if(t.length!==0&&C.d.gO(t)!==".."){if(0>=t.length)return H.h(t,-1)
t.pop()
q=!0}else{t.push("..")
q=!1}else if("."===o)q=!0
else{t.push(o)
q=!1}}s=t.length
if(s!==0)if(s===1){if(0>=s)return H.h(t,0)
s=t[0].length===0}else s=!1
else s=!0
if(s)return"./"
if(q||C.d.gO(t)==="..")t.push("")
if(!b){if(0>=t.length)return H.h(t,0)
s=P.fa(t[0])
if(0>=t.length)return H.h(t,0)
t[0]=s}return C.d.K(t,"/")},
fa:function(a){var t,s,r,q=a.length
if(q>=2&&P.fb(J.fZ(a,0)))for(t=1;t<q;++t){s=C.a.k(a,t)
if(s===58)return C.a.i(a,0,t)+"%3A"+C.a.M(a,t+1)
if(s<=127){r=s>>>4
if(r>=8)return H.h(C.k,r)
r=(C.k[r]&1<<(s&15))===0}else r=!0
if(r)break}return a},
ie:function(a,b){var t,s,r
for(t=0,s=0;s<2;++s){r=C.a.k(a,b+s)
if(48<=r&&r<=57)t=t*16+r-48
else{r|=32
if(97<=r&&r<=102)t=t*16+r-87
else throw H.b(P.e0("Invalid URL encoding"))}}return t},
dB:function(a,b,c,d,e){var t,s,r,q,p=b
while(!0){if(!(p<c)){t=!0
break}s=C.a.k(a,p)
if(s<=127)if(s!==37)r=e&&s===43
else r=!0
else r=!0
if(r){t=!1
break}++p}if(t){if(C.m!==d)r=!1
else r=!0
if(r)return C.a.i(a,b,c)
else q=new H.bm(C.a.i(a,b,c))}else{q=H.i([],u.t)
for(r=a.length,p=b;p<c;++p){s=C.a.k(a,p)
if(s>127)throw H.b(P.e0("Illegal percent encoding in URI"))
if(s===37){if(p+3>r)throw H.b(P.e0("Truncated URI"))
q.push(P.ie(a,p+1))
p+=2}else if(e&&s===43)q.push(32)
else q.push(s)}}return new P.d3(!1).bc(q)},
fb:function(a){var t=a|32
return 97<=t&&t<=122},
eX:function(a,b,c){var t,s,r,q,p,o,n,m,l="Invalid MIME type",k=H.i([b-1],u.t)
for(t=a.length,s=b,r=-1,q=null;s<t;++s){q=C.a.k(a,s)
if(q===44||q===59)break
if(q===47){if(r<0){r=s
continue}throw H.b(P.n(l,a,s))}}if(r<0&&s>b)throw H.b(P.n(l,a,s))
for(;q!==44;){k.push(s);++s
for(p=-1;s<t;++s){q=C.a.k(a,s)
if(q===61){if(p<0)p=s}else if(q===59||q===44)break}if(p>=0)k.push(p)
else{o=C.d.gO(k)
if(q!==44||s!==o+7||!C.a.w(a,"base64",o+1))throw H.b(P.n("Expecting '='",a,s))
break}}k.push(s)
n=s+1
if((k.length&1)===1)a=C.x.bu(a,n,t)
else{m=P.fd(a,n,t,C.j,!0)
if(m!=null)a=C.a.L(a,n,t,m)}return new P.cY(a,k,c)},
iu:function(){var t="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",s=".",r=":",q="/",p="?",o="#",n=P.ho(22,new P.dF(),u.D),m=new P.dE(n),l=new P.dG(),k=new P.dH(),j=m.$2(0,225)
l.$3(j,t,1)
l.$3(j,s,14)
l.$3(j,r,34)
l.$3(j,q,3)
l.$3(j,p,172)
l.$3(j,o,205)
j=m.$2(14,225)
l.$3(j,t,1)
l.$3(j,s,15)
l.$3(j,r,34)
l.$3(j,q,234)
l.$3(j,p,172)
l.$3(j,o,205)
j=m.$2(15,225)
l.$3(j,t,1)
l.$3(j,"%",225)
l.$3(j,r,34)
l.$3(j,q,9)
l.$3(j,p,172)
l.$3(j,o,205)
j=m.$2(1,225)
l.$3(j,t,1)
l.$3(j,r,34)
l.$3(j,q,10)
l.$3(j,p,172)
l.$3(j,o,205)
j=m.$2(2,235)
l.$3(j,t,139)
l.$3(j,q,131)
l.$3(j,s,146)
l.$3(j,p,172)
l.$3(j,o,205)
j=m.$2(3,235)
l.$3(j,t,11)
l.$3(j,q,68)
l.$3(j,s,18)
l.$3(j,p,172)
l.$3(j,o,205)
j=m.$2(4,229)
l.$3(j,t,5)
k.$3(j,"AZ",229)
l.$3(j,r,102)
l.$3(j,"@",68)
l.$3(j,"[",232)
l.$3(j,q,138)
l.$3(j,p,172)
l.$3(j,o,205)
j=m.$2(5,229)
l.$3(j,t,5)
k.$3(j,"AZ",229)
l.$3(j,r,102)
l.$3(j,"@",68)
l.$3(j,q,138)
l.$3(j,p,172)
l.$3(j,o,205)
j=m.$2(6,231)
k.$3(j,"19",7)
l.$3(j,"@",68)
l.$3(j,q,138)
l.$3(j,p,172)
l.$3(j,o,205)
j=m.$2(7,231)
k.$3(j,"09",7)
l.$3(j,"@",68)
l.$3(j,q,138)
l.$3(j,p,172)
l.$3(j,o,205)
l.$3(m.$2(8,8),"]",5)
j=m.$2(9,235)
l.$3(j,t,11)
l.$3(j,s,16)
l.$3(j,q,234)
l.$3(j,p,172)
l.$3(j,o,205)
j=m.$2(16,235)
l.$3(j,t,11)
l.$3(j,s,17)
l.$3(j,q,234)
l.$3(j,p,172)
l.$3(j,o,205)
j=m.$2(17,235)
l.$3(j,t,11)
l.$3(j,q,9)
l.$3(j,p,172)
l.$3(j,o,205)
j=m.$2(10,235)
l.$3(j,t,11)
l.$3(j,s,18)
l.$3(j,q,234)
l.$3(j,p,172)
l.$3(j,o,205)
j=m.$2(18,235)
l.$3(j,t,11)
l.$3(j,s,19)
l.$3(j,q,234)
l.$3(j,p,172)
l.$3(j,o,205)
j=m.$2(19,235)
l.$3(j,t,11)
l.$3(j,q,234)
l.$3(j,p,172)
l.$3(j,o,205)
j=m.$2(11,235)
l.$3(j,t,11)
l.$3(j,q,10)
l.$3(j,p,172)
l.$3(j,o,205)
j=m.$2(12,236)
l.$3(j,t,12)
l.$3(j,p,12)
l.$3(j,o,205)
j=m.$2(13,237)
l.$3(j,t,13)
l.$3(j,p,13)
k.$3(m.$2(20,245),"az",21)
j=m.$2(21,245)
k.$3(j,"az",21)
k.$3(j,"09",21)
l.$3(j,"+-.",21)
return n},
fm:function(a,b,c,d,e){var t,s,r,q,p,o=$.fX()
for(t=b;t<c;++t){if(d<0||d>=o.length)return H.h(o,d)
s=o[d]
r=C.a.k(a,t)^96
if(r>95)r=31
if(r>=s.length)return H.h(s,r)
q=s[r]
d=q&31
p=q>>>5
if(p>=8)return H.h(e,p)
e[p]=t}return d},
ca:function ca(){},
bt:function bt(a,b){this.a=a
this.b=b},
cc:function cc(){},
az:function az(a){this.a=a},
cs:function cs(){},
ct:function ct(){},
j:function j(){},
bj:function bj(a){this.a=a},
bF:function bF(){},
C:function C(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ad:function ad(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
by:function by(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
bP:function bP(a){this.a=a},
bM:function bM(a){this.a=a},
aS:function aS(a){this.a=a},
bo:function bo(a){this.a=a},
bG:function bG(){},
aR:function aR(){},
bs:function bs(a){this.a=a},
db:function db(a){this.a=a},
cx:function cx(a,b,c){this.a=a
this.b=b
this.c=c},
I:function I(){},
a7:function a7(){},
cI:function cI(){},
u:function u(){},
x:function x(){},
bg:function bg(){},
l:function l(){},
aa:function aa(){},
cR:function cR(){},
E:function E(){},
F:function F(){},
c2:function c2(){},
m:function m(){},
t:function t(a){this.a=a},
R:function R(){},
d1:function d1(a){this.a=a},
cZ:function cZ(a){this.a=a},
d_:function d_(a){this.a=a},
d0:function d0(a,b){this.a=a
this.b=b},
b7:function b7(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
dA:function dA(a,b){this.a=a
this.b=b},
cY:function cY(a,b,c){this.a=a
this.b=b
this.c=c},
dF:function dF(){},
dE:function dE(a){this.a=a},
dG:function dG(){},
dH:function dH(){},
c0:function c0(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
bS:function bS(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
br:function br(){},
co:function co(a){this.a=a},
hZ:function(a){var t=new P.ds()
t.aQ(a)
return t},
dq:function dq(){},
ds:function ds(){this.b=this.a=0},
bl:function bl(a){this.a=a},
d:function d(){},
a1:function a1(){}},W={
hh:function(a){return W.hi(a,null,null).ah(new W.cz(),u.N)},
hi:function(a,b,c){var t=new P.A($.k,u.Y),s=new P.aT(t,u.E),r=new XMLHttpRequest()
C.H.bv(r,"GET",a,!0)
W.d9(r,"load",new W.cA(r,s),!1)
W.d9(r,"error",s.gba(),!1)
r.send()
return t},
d9:function(a,b,c,d){var t=W.iQ(new W.da(c),u.A),s=t!=null
if(s&&!0)if(s)J.fY(a,b,t,!1)
return new W.bV(a,b,t,!1)},
iQ:function(a,b){var t=$.k
if(t===C.c)return a
return t.b9(a,b)},
e:function e(){},
ar:function ar(){},
ci:function ci(){},
au:function au(){},
X:function X(){},
ay:function ay(){},
cp:function cp(){},
cq:function cq(){},
cr:function cr(){},
ai:function ai(a,b){this.a=a
this.$ti=b},
a4:function a4(){},
c:function c(){},
a5:function a5(){},
cw:function cw(){},
Y:function Y(){},
cz:function cz(){},
cA:function cA(a,b){this.a=a
this.b=b},
bx:function bx(){},
aF:function aF(){},
cJ:function cJ(){},
N:function N(){},
q:function q(){},
aN:function aN(){},
a_:function a_(){},
cS:function cS(){},
aQ:function aQ(){},
bJ:function bJ(){},
cU:function cU(a){this.a=a},
G:function G(){},
aY:function aY(){},
bT:function bT(a){this.a=a},
e4:function e4(a,b){this.a=a
this.$ti=b},
bV:function bV(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
da:function da(a){this.a=a},
aB:function aB(){},
bw:function bw(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
bp:function bp(){},
dz:function dz(){},
bR:function bR(){},
bZ:function bZ(){},
c_:function c_(){},
c1:function c1(){},
c7:function c7(){},
c8:function c8(){}},Q={
fA:function(){W.hh(C.a.I("../",N.eL())+"navbar.txt").ah(O.j5(),u.n)
Q.ja()
Q.j9()
W.d9(window,"scroll",new Q.dR(),!1)},
ja:function(){var t,s,r,q,p=[K.a("2/2/18","I can fucking believe it's fucking Ground Hogs Day because I have spent the day murdering the fuck out of bugs that should be long fucking dead. Combo sessions once again work, and MAYBE players will stop spawning dead or near dead?<br><br>Also Shogun finally fucking works right. Also, YES I know you're fucking out of character but that is just going to hafta be a thing till the Big Bad update. "),K.a("2/1/18","I definitely did not just spend three days working on a shitty easter egg. That doesn't sound like me at all. <span class = 'void'>4037 is the seed</span>"),K.a("1/26/18","Whoa, wtf? Are SMITHS finally in the sim in the non fanon section? Shit, KR can finally have their true form now. "),K.a("1/25/18","Players can now make robot companions, too. There's two basic ways to get a robot: Be REALLY fucking good at alchemy, OR be really fucking enthused about robots. The robots themselves are either yourself, your best friend, or the Heart player (like you do).<br><Br>Also, I changed how relationships worked a bit to avoid being discriminatory to non-player robots. HOPEFULLY that didn't break anything but I am way too tired to check the more subtle shit (like yellow yards).<br><Br>I also tweaked teh brain ghost rate, was way too rare. So brain ghosts can be your friend if you don't have anybody else you feel strongly enough about."),K.a("1/24/18","Brain ghosts are things that hope players can have as companions. The ghosts are either their crush, their rival, or the Heart player (like you do). <br><br>Also slightly improved rendering and rendering speeds."),K.a("1/23/18","Leprechauns are now available for lords, who ALSO get a buff for each minion they possess. <a href = 'dead_session_finder.html?LordStuck=true'>Dead sessions</a> just got a whole lot dumber."),K.a("1/19/18","You can get carapace companions via dream quests now, and the structure is in place for the Shenanigan Upate (which will heavily rely on carapaces). The carapaces are p generic right now, of course, but their time to shine will come. <br><br>Next up will be the more gimicky types of companions: imaginary friends, robots and independant dream selves. Won't be 'till Monday, tho, cuz the weekend is for chilling and also WigglerSim/DollSim/Gigglesnort.  "),K.a("1/17/18","Hell yes, first part of the NPC UPDATE: Companion Update is complete! Players can now occasionally get consort companions as quest rewards. They help with fights, and count as party members to help with quests (really useful for Pages).  <br><br>Next up will be to make a new reward type that gives you either a companion, an item, or a fraymotif. MOST quests will have that sort of reward, unless there's a specific reason not to. And certain classpects will be more likely to get certain things 'randomly'. Thieves and Rogues, for example, will have a higher rate of items while pages and heirs will have a higher rate of companions, and Seers/Mages will have a higher rate of fraymotifs."),K.a("1/15/18","Hah, take that Shogun. Looks like I can still update the Sim after all. Have some Dutton Cult memes.<br><Br>Still gonna go over to <a href = 'http://farragofiction.com/SBURBSimE/experimentalLanding.html'>Experimental</a> though. It's time for the NPC Update, Shogun or no Shogun."),K.a("1/13/18","<h1>Shogun has Arisen</h1><br><Br>Hopefully you all can still see this???  Some asshole calling himself shogun burst into my spooky Attic when I was ALREADY spooked by that fucking wolf and shitposted his way into my SBURB CONTROL ROOM. That's probably a thing I have. I'm declaring it canon. Anyways, I think he's stuck pretty good in there. Hopefully there's no reprecusions.<br><br>At least I have the <a href = 'http://farragofiction.com/WigglerSim/'>WigglerSim</a>. And I can probably figure out how to get the NPC update started even with that asshole putting cheeto dust all over my things. I bet I can hack into Experimental from here...<Br><br>Also, End Year 1 Voice Chat is here: <a target = '_blank' href ='https://soundcloud.com/jaded-researcher/sburbsim-voice-chat2'>Soundcloud</a> and here <a target = '_blank' href = 'https://www.youtube.com/watch?v=lY9KstW5D7E&feature=youtu.be'>Youtube</a>"),K.a("1/12/18","The POPULAR VOTE for the Shogun v JR contest will be taking place on the discord shortly. And of course, the Discord END OF YEAR 1 VOICE CHAT will happen tomorrow, as well. "),K.a("1/11/18","The WigglerSim runs screaming towards completion while the Shogun v JR competition begins it's final stages. Who is that asshole, anyways?"),K.a("1/3/18","Typos and small bug fixes continue, while most of my efforts are going towards the WigglerSim. I expect to start work on the NPC update on 1/13/18."),K.a("12/31/17","Between IRL shit and the <a href = 'http://www.farragofiction.com/DollSim'>DollSim</a> getting a shit ton of parts from IO/Popo-Merrygamz, WigglerSim is going slower than I wanted (which itself delays the NPC update). My goal at this point is to have it v1 complete by 1/13, which coincidentally is SBURBSim's 1 year anniversary. (That being the day I had a complete sim with a begining, middle and end, but before I was advertising it or had newsposts). <Br><Br>We will be doing a huge Discord voice chat, just like we did for the Great Refactoring that day, 4pm EST. <a href = 'https://www.timeanddate.com/countdown/to?iso=20180113T16&p0=403&msg=SBURBSIM+VOICE+CHAT+2&font=hand'>Check out This Countdown Clock</a><br><br>We'll have a 'future of the sim' address, and then a Q&A section. "),K.a("12/29/17","Whoops, looks Shogun did some shenanigans while I was busy distracted by WigglerSim. Don't worry chased him off with a broom, everything is fine again."),K.a("12/21/17","WigglerSim continues, real life bullshit continues to slow me down. <br><br><li>+Wrigglers can grow up and DIE, in new and more interesting ways! <li>+The caste system now leaves a more systemic mark on your young charges once they leave your care!"),K.a("12/17/17","Still working on wiggler sim, but a friend's in the hospital so I've had to stop coding for a bit."),K.a("12/14/17","There is obviously no way I'm having some sort of weird <a href = 'image_browser.html?mascotCompetition=true'>fanart</a>/fanfic competition over the next month, with a deadline of January 13th. There is further no way that me and Shogun will decide SBURBSim Mascotdom based on who gets more fanart/fanfic. And there definitely isn't any weird rewards planned for participants. <br><Br>But if I WERE. You'd make art and fics of me, and not Shogun, right? I mean, who even IS that douchebag?<br><br>On a serious note, turns out time players were being WAY too panicky about how dangerous some prototypes were. They've calmed down.<br><br><li>+Trolls can now grow up and leave you. <li>+Time players can now save your timeline better with sprite shit."),K.a("12/13/17","Shit, we are exactly one month out from SBURBSim's one year anniversary. What the fuck. <br><Br>More bug fixes, but most of my work is still on wiggler sim.<br><br><li>+Wrigglers now come in eggs, the color of their blood. <li>+Eggs can be adopted. <li>+Who is shogun <li>+Tables re-guarded"),K.a("12/12/17","Spent the first part of the game fighting json with dart, and the latter half panicking about how apparently AB's gone insane like a week ago and ppl just now told me. Turns out she was rage quitting her job any time she saw a crash (even grim dark crashes) because the stack trace software was being a little bitch.<br><br><li>+Skynet fixed. Again. <li>+Wrigglers can be renamed randomly.<li>+Wrigglers can be renamed unrandomly."),K.a("12/11/17","Dream players who hit gnosis3 too early no longer crash the sim. <br><br>Probably gonna leave the two branches synced at least a few more days while I focus on making this WigglerPetSim thing.<li>+Progress on a brand new Wriggler Raising game. <li>+Dream players who break the game no longer totally break the thing they are supposed to sorta break."),K.a("12/10/17","More traits for alchemy sim, so far p stable, just working on DollSim stuff (like the new <a href ='http://www.farragofiction.com/DollSim/echeladder.html'>echedladder</a> stuff).<br><Br>Oh, and fixed a weird bug where sometimes bosses were spawning with less than max health.<br><br><li>+Go grab your Edison bulbs and Tesla coils because STEAMPUNK ITEMS MADE IT IN! <li>+Items now classifiable as 'Swag.' <li>+Cod tier and Dog tier traits added.<li>+Wizards will be delighted to note that we added mandrakes.<li>+Bosses no longer come pre-dead."),K.a("12/8/17","<h1>Alchemy Update On Main!!!</h1><br><Br>Which you know, adds some great flavor text and strengths for some much ignored players (space players come to mind), but what we REALLY wanna see here is that dope as fuck <a href ='testAlchemy.html'>AlchemySim</a> that shook out of the Alchemy update and made it take like, twice as long.<br><br>BESIDES the dope af mini game, Alchemy update gives all players specibi, and lets them get items as rewards from quests and then combine those items as stupidly as possible into ever ridiculous combo items (like a 'Guaranteed Hot AK-47') and then shove those items into their specibus for simple stat boosts.<br><br>And now for the inevitable bug fixes as narrated by manicInsomniac: <br><Br><li>+'Your Story' no longer murders the player who's story it previously was when loading you into it.<li> +Corpses can no longer die. <li>+Living corpses can no longer live. <li>+Shitty weapons will no longer murder their owners.</li><span class='void'><li>Shogun: +Turns out shitty weapons kept working in the wrong direction</span>"),K.a("12/7/17","Reworking murdermode dialogue took longer than expected, but I've finished. Figure we can go main tomorrow, and I'll spend the rest of the day working on doll shit.<br><br><li>New Update: +Oh Christ Shogun broke in and we can't get him out. Send help. +Our Frankenstein-esque dollmaker now works on babies, human and alien alike! Staple body parts together to your heart's content!"),K.a("12/6/17","Working on getting murder mode dialogue updated to the new engine. If alchemy remains bug free by tommorow i'll probably shove it on main after a quick bug check. <br><br><li>+Expanding on the number of ways someone can threaten murder.<li>+Now more difficult to decide to not kill people."),K.a("12/5/17","Alchemy seems to have been balanced okay in the sim itself. I've added a fuck ton of quests, while people make sure nothing went completly bananas I'll rework some of the dialogue, then we're probably ready for main.<br><br>+Legendary items are difficult to alchemize. +Shgouns meme ascension continues. +<br>'Seems pretty balanced'. Somewhere, sometime, Woomod suppresses a flinch.<li>+Skynet reined in again, horrerterrors removed from code."),K.a("12/4/17","<a href = 'testAlchemy.html'>AlchemySim </a> is ready to be out of beta testing, though of course not yet on main. Enjoy playing around with how the sim handle alchemy. You'll notice we made a few non canon decisions, in an attempt to make the poor player chars not get into shitty infinite loops. Alchemy consumes one of the objects, and you can only alchemize a thing so many times, depending on alchemy skill. <br><Br><li>+Luck has a more reasonable effect on god tier resurrection. <li>+Fuck No Go Back button added to doll maker, "),K.a("12/3/17","So, I take back everything I've said before. I have a NEW absolute favorite bug in SBURBSim. Sorry whatever it was before, you are shunned.<br><br>You see, somebody found some batshit insane bug where a consort's associated sound (like glub or nak or whatever) got replaced with 'fuck'. Which of course means, that the sim philosophically asked if the Turtle consorts 'ever stopped fucking'. This is hilarious. This is stupid. I made an entire <a href = 'http://farragofiction.com/MiniSims/TurtleSim'>mini sim</a> for it instead of spending more than ten minutes looking for the bug because that is just how I roll.  "),K.a("12/2/17","Troll dolls now have all the canon extended zodiac symbols, and random trolls are guaranteed to have those symbols be the correct color. <br><br>And you can randomize individual layers for any doll. <br><br>Oh, and you can have palletes for different castes for trolls and humans. <br><Br>AND I made it so that the <a href = 'ocQuiz.html'>Your Story</a> MiniSim only displays your quest when you click a button, which reduces lag when you're getting your shit set up. <br><Br><li>+'Your story' no longer prints as soon as you change a text box.<li>+The invisible players, whose bodies you seize control of when play the alchemy mini game, have had their stats normalized.<li>+Those invisible proxy players can now level up as you pilot their bodies around.<li>+Non-princes and non-bards can properly quest on Doom quests again."),K.a("11/30/17","Just in time for the Gristmas Season, the <a href = 'testAlchemy.html'>Alchemy Mini Game</a> is finally ready for Beta testing.<br><Br><li>+Item page no longer unable to do basic counting.<li> +Pigeons. Fear them. <li>+Sooooooo many traits. Derse and Prospit get their own items, plasma items exist, burning edge items, steampunk stuff... Its ridiculous. <li>+Can now alchemize things with your dead time clones. +Various bird traits added. <li>+Love Letters are writeable again. <li>+Various traits involving ceramic materials. <li>+Cold Iron weapons once again grace our lands. <li>+Legendary items continue to crop up now and again. <li>+Cod pieces are now, and has always been, a valid fashion choice."),K.a("11/29/17","Oh my fuck we're getting close. Alchemy mini game is basically done, besides me purposefully holding out on the Ultimate Reward till I have even more shitty traits and better balance. <br><br>I've even finally added Dream Gnosis to the sim. <br><br>And holy fuck, I made specibi actually effect stats (just a blanket modifier in this v1 version) and then had to spend a few hours running around yelling at code and trying to somewhat balance shit. <br><br><li>+In the AMG, achievements are tracked instead of evaporating into the void. <li>+In the AMG, you can now save and load, like in a real game! <li>+Skynet will explain how to save and load in the AMG. +Doing good things now gives you more then just a warm fuzzy feeling in the AMG. <li>-Shogun has been unglued from the store seat, he is no longer immortal and immovable. <li>+Dream players can learn about how to twist the rules of SBURB.<li>+Alchemy can now work even if you don't use it to make pointless bullshit.<li>+Dream players trying to break the game no longer breaks the game if people have too much dakka.<li>+Dream players are better at breaking the game.<li>+Alchemization no longer pauses time while in progress.<li>+Items effect stats. Or is it affect? They effect an affect? Affect an effect? Send help update writer caught in infinite grammar loop.<li>+Final bosses better at killing children.<li>+Reality no longer broken. <li>+Players are less lucky, resulting in a higher win rate."),K.a("11/28/17","Alright, the alchemy mini game is basically done besides having endings, and getting a balance/pretty pass. That means I need to get Dream gnosis 3 and 4 our, and have specibi affect strife, and we can call the Alchemy update done. <br><br><li>+Reworked how romantic cloths work.<li>+Too many items in the alchemy system to test them all naturally, more combo traits added to reduce the number of possible items. No, we don't know how adding more traits decreases the item numbers. Just trust us, okay?"),K.a("11/27/17","TG goes right to work, more than doubling the amount of Alchemy combo traits. Like, damn.<li>+Even more synonyms for hot! +Shogun Canine now properly announced. <li>+A whole shit ton of new traits for alchemy, courtesy of tableGuardian and also everyone else.<li>+Moist."),K.a("11/26/17","Progress continues on the mysterious alchemi mini sim.<br><br>And we have a new ideasWrangler, plz welcome tableGuardian to the team. They've done a shit ton of testing and bug fixes and ideas suggesting on the Discord. Keep an eye out for them hassling dead session players or whatever.<br><br><li>+Alchemy is being integrated further and further into reality. <li>+Working on installing the capitalism module in Skynet for the alchemy mini-game. <li>+You can no longer alchemize everything with everything forever and ever.<li>+If you alchemize certain items in the mini game, new shopkeepers will come crawling out of the woodwork.<li>+AMG: Shogun Canine can now do capitalism at you.<li>+Your achievements are now announced instead of being quietly whispered and then recorded in a secret place.<li>-Shogun has entered my house and held a gun to my head and is forcing me to say: +Temporarily Drive off The Shogun. But it is futile, I will return<li>+Banishing Shogun now results in an achievement.<li>+Upgraded Shoguns shitposting module."),K.a("11/25/17","Finally tracked down this annoying bug where sometimes AB would just go batshit and lie about sessions. Again. Yay. Poor AB. We ask so much of her.<br><br>Also working on a new char sheet thingy based on <a href = 'http://swirlygerm-art.tumblr.com/post/167621990417'>Swirly Germ's Thing</a><br><Br>And. You know. Still chugging along on alchemy.<br><br><li>+Corrupt items can now break the game more efficiently.<li> +You can now find and pick up random shit off the ground and alchemize with it. <li>+Skynet reined in. <li>+Ungodly abomination ressurected.<li>+Added Santa's Holy Arsenal to get everyone in the gristmas spirit! +'So hot its cold' items now in the game.<li> +Reality crashes less. <li>+Skynet no longer lies to us about session results."),K.a("11/24/17","AlchemySim will probably be ready for play testing in the next day or two, at which point I'll make sure specibi actually do shit in combat. I am not even kidding though, AlchemySim is so fun to make, and it's just straight up leveraging in sim alchemy. <br><br><li>+In the classic sburb fashion, Items can now die! Now you can mourn the end of your friends, family, AND favorite sword! <li>+Alchemy simulator is interesting enough that we're branching it out into its own mini-sim! <li>+Ancient art of the Cod Of Time gifting the Shogun his sword. <li>+Orbital bombardment cannons exist now. <li>+Backwards, grammar is no longer."),K.a("11/23/17","So. Many. Items. <br><br>Also, oh my fuck look at this: <a href = 'images/misc/fanArt/miscFanArt/floralShenanigans.png'><img width = '300' src = 'images/misc/fanArt/miscFanArt/floralShenanigans.png'></a> floralShenanigans on discord made that and it's amazing. <span class ='void'>You can even see the foreshadowing of Shogun Canine.</span> <br><br><li>+~ATH code now learnable. <li>+Obituaries now constant source of reminders of your own mortality. <li>+Totaly-not-copyrighted Mythril Armor added. <li>+PCHOOOOO! Jetpacks added.+Gold and Platinum editions up and running. <li>+Bards will now dispense poison candy. <li>+Heirs now have access to the EXECUTERS AXE. <li>+Excalibur added. +Cueballs added, doc scratch appeased. <li>+All aspects are now associated with various items, either literally or symbolically.<li>+Added wizardly garments and tools.<li> +Added tools of a maids trade.<li> +A-muse-ing tools added. <li>+Pages now properly be-shorted.<li> +Princes now properly pretentious. <li>+Gristorrent now installable by rogues. <li>+Sage wisdom now dispensed in bite-sized journals. <li>+ABJ has a map and compass. So she can find you. <li>+Scribes can now actually write things on paper. <li>+Seers no longer blind, can now use binoculars. <li>+Sylphs now 300% more magical. <li>+Thieves now 888% more sneaky. <li>+Body pillow of jR added to the game. +Witch's cauldron no longer metaphysical and metaphorical only. <li>+Leveling no longer causes total negation of all noise. <li>+I CALL SHOTGUNS! Because shotguns are in the game now. <li>+Irony now properly classified into its separate sub-groups."),K.a("11/22/17","Spent the morning adding Bros to the<a href = 'http://farragofiction.com/DollSim/bro_index.html'>DollSim</a>. Also took the time to fix StrifeSim special attacks to both have more items in them and to use up less memory (so shouldn't crash for some of you anymore). <br<br> Still chugging with alchemy, starting work on aspect items now that the alchemy proper seems to be solid.<li>+Defeating your personalized god monster now lets you loot their house.<li>+Phantom players will no longer invade your house and touch your stuff. <li>+Blood is now 413 percent more mystic. <li>+Bonding handcuffs added, for the adult crowd. <li>+Friendship bracelets: craftable for MAXIMUM FRIEND POTENTIAL."),K.a("11/21/17","Ugh. Why did I think it would be a good idea to try to upgrade the sim/AB to be less insane. It didn't even speed anything up and it took two fucking days. Oh well, at least it's done now and that'll make future shit a little easier. Back to alchemy. <span class='void'>Also, Shogun showed up which means my inevitable demise, in the proximity of some pigeons is looming. </span><br><Br>More from Manic: <li>+Fidget spinners. We're sorry. <li>+XTREME ITEM CRAFTING! <li>+Glam flam is now canon. <li>+Bespoke suits, for the discerning child warrior. <li>+ICE can now mean diamonds.<li> +Diamonds can now mean ICE. <li>+A whole bunch of other item traits!<li>+Rare footage captured of Author Bot Junior. <li>+Pigeonkind specibus. JR fears for their life. <li>+Ultraviolence is now a purpose, not just a mere trait. <li>+Ditto witg Sweet Bro and Hella Jeff merch........... <li>+Clown Cult now usable as life purpose."),K.a("11/19/17","Alright, I think the name system is finally working right for alchemy. Now to do a fucking metric SHIT TON of alchemy.<br><Br>Oh yeah, alchemy has a rendered scene thingy now, too, courtesy of tableGuardian on discord.<br><br><li>+Enabled selfcest in it's most purest form. <li>+Some names are now objectivly better or worse then others. I'm looking at you, Sven.<li>+Nuclear power has been added to the game. This will end well.<li> +99% increase in EDGELORD levels<li>+Smashy-sticky-whacky things now called Morningstars"),K.a("11/18/17","Ah, what a refreshing start to a day. It's been a while since my blatant incompetance has made a player in this session suffer unjustly.<br><Br> Turns out today's <a href = 'ocQuiz.html'>Your Story</a> oc quiz thingy was broken as fuck, as the LEAST LUCKY void player in existance failed to beat their denizen 269 times in a row. 'But wait!' I think to myself, 'Didn't I fucking write code to PREVENT this kind of shit? '  So I go and check and wouldn't you know it, a careless fucking typo meant that these kinds of sessions were allowed to go basically forever until the player won. Yay.  <br><Br> Best part is their land had the sound of 'clapping' in it, which just sounds sarcastic as fuck when you're failling that fucking hard.<br><br>I ALSO spent like, several hours tracking down a bullshit alchemy bug.<br><br>Snarky whatever the fuck from manicInsomniac: <li>+The personalized 'Your Story' quest can no longer trap you in an infinite hell of blood and combat. <li>+Alchemized Items should no longer distort into a twist of logic when placed into Sylladex<li>+Players will now actually use weapons instead of gesturing threateningly with them."),K.a("11/17/17","Shout out to anon on Tumblr for letting me know that the <a href ='ocGenerator.html'>OC Generator</a> was crashing after you rerolled too many times. It's totes fixed now.<br><Br>Alchemy is also coming along nicely. Lots of extra items are rolled out, and I'm still testing the actual alchemy process. <br><br>More snarky updates: <li>+Legendary items added <li>+On a related note, 'How To Draw Manga' added <li>+Added a vital infusion of Gristmas spirit into the site <li>-Experiencing some bugs- Fiduspawn Plush for example is classified as 'Cozy.' It is impossible to describe this plush beyond calling it Cozy. Seriously, just try it. We'll wait. Could you? Yeah, I thought not. Its bugging us too.<li>+Whips and Chains added, for the adult crowd. <li>+Wrenches, Shovels, Razors- Everything the young aspiring murderer needs to dispose of the body!<li>+The Dark Gods of GlitchFAQ have been satisfied: RoadsignKind added. <li>+The Grey Gods of Anime have been appeased: ShurikenKind added. <li>+The Bright Gods of Fashion have been glorified: CaneKind added."),K.a("11/16/17","I fought AB for half the fucking day since telling her about Alchemy and then trying to make her slightly faster was apparently the WORST THING ANYONE HAS EVER DONE and she threw a fit and stated not returning from sessions occasionally. BLUH. <br><br>Once I wrangled her I was finally able to focus on alchemy again, and have the skeletons in place to handle that shit.<br><Br>The discord (especially ideasWrangler manicInsomniac) has started making hilarious change logs of all my github commits. Have a selection of 'em: <br><Br><li>Players can no longer raise the dead with promises of GLORIOUS COMBAT<li>Players no longer can kill with nothing but the force of anger and fraymotifs.<li>Our resident robot overlords have been informed of the existence of physical objects.<li>+Quests should now give INDIVIDUAL, PERSONALIZED items, based off of the players class and aspect. <li>-All INDIVIDUAL, PERSONALIZED items are perfectly generic objects.<li>-The Power of Friendship can no longer cause duplication of music.<li>+Balance change: Mind players and Blood players no longer know what objects are."),K.a("11/15/17","Holy shit, does it feel GOOD to be back in the guts of the sim, irresponsibly adding new features. We've got some bare bones items and strife specibi floating around. Mostly all cosmetic, still. But just you wait. "),K.a("11/14/17","Alright, time to focus on the sim again, and leave dolls and whatever for the weekend. <br><Br>Lots of bug fixes, including Dead Sessions ironically no longer preventing Time Players from playing. <br><br>Today Main and Experimental have officially divurged again, which means no more bug fixes or features for main until the Alchemy Update is ready."),K.a("11/13/17","Still focused on non-sim and doll stuff. Have I seriously not mentioned yogisticDoctor (from discord)'s awesome <a href = 'http://farragofiction.com/DollSim/mom_index.html'>Mom</a> and <a href = 'http://farragofiction.com/DollSim/dad_index.html'>Dad</a> doll set yet? "),K.a("11/11/17","I've spent the week working on the non sim related shit, but ALSO threw together a <a href = 'http://farragofiction.com/MiniSims/StrifeSim/'>11/11 minigame</a> to celebrate the holiday.<br><br>Also, it is time to say a fond farewell to Octobermas."),K.a("11/7/17","I've been working on planning out the Alchemy Update, doll stuff, as well as getting a non-sim game out. <br><Br>In the mean time there's a handful of new quests live."),K.a("11/3/17","Holy fuck. I finally caught this insidius bug AB has been suffering from. Basically, if the royalty used a fraymotif, then the NEXT time a session had that fraymotif they wouldn't be able to use it, which would make the sessions AB found divurge heavily from reality. For MOST sessions this wouldn't matter, but scratched sessions, sessions with jack, combo sessions and yards all could be effected. It took so fucking long to track down. <br><Br>Also, finally finished the land mini feature I wanted to do before splitting experimental off.  You can now ask the sim what <a href = 'ocQuiz.html'>'your' story</a> would be, getting a mini sim with just your quests in it."),K.a("11/1/17","Bug fixes (sessions no longer run infinitely if jack kills everybody, for example) and the first bit of the revised OC generator are in place."),K.a("10/31/17","<h1>Land Update On Main!!!</h1><br><Br>Otherwise known as happy Octobermas/Spoop-o-ween/Whatever! Holy SHIT That was a p comprehensive update.   You should find that sessions are ENTIRELY different now and hella less repetative (And I'll keep adding quests as time goes on). AND it has all the hooks to eventually work with ParadoxLands eventual land rendering update. Hell FUCKING yes! <Br><br> Oh yeah, and to celebrate the most spoopy of holidays/test the land update, <a href = 'dead_index.html'>Dead Sessions</a> are totally a thing. <br><br>Next up: The NPC and Alchemy updates.  Alchemy might hit first in a massively reduced form (called v1), just to give quests new and exciting possible rewards.  NPC update should be hella huge, adding all sort of subplots (including CLUBS DEUCE GETTING THE FUCKING RING, as the meme goes). It'll be fucking great.<br><br>((Also, before I forget, you may notice some extra spoopy avatars in honor of the holiday. Do not be alarmed, fair citizen, they are temporary. And if you are from the far flung future where this shit doesn't make any sense, you can check out what you missed in the <a href ='image_browser.html?octobermas=true'>fan art section</a>. ))<br><br>((And I wonder if reading these newspost might reveal information about something called the <a href = 'http://farragofiction.com/DollSim'>'DollSim'?))</a> "),K.a("10/30/17","Hell yes, two major bugs defeated today.   Yellow yards no longer just straight up fail post scratch, AND if the same quest happens multiple times in the same session it doesn't fuck up.  Go me."),K.a("10/29/17","More quests, more typo fixes, etc. <br><br>Most notably, dead sessions aren't broke af anymore."),K.a("10/28/17","Bug fixes, stability, mostly getting ready for a main deploy."),K.a("10/27/17","Whoa, did I almost forget to have Battlefield quests? Is that a thing that almost happened. Whoops."),K.a("10/26/17","Corrupt lands are a thing again, and space players are WAY less repetitive now. <br><br>Also, holy fuck was balancing Space players to the new system really annoying, all because pastJR accidentally made it so space players are allowed to leave their land as long as they have NOT finished their frog duties. God DAMN."),K.a("10/25/17","Okay, we can all remember that on this, the most sacred day of 10/25, the Land Update was BASICALLY done.<br><Br>  I still wanna add more quest paths. And refactor how land corruption works to use the new system. And Of course I gotta balance all that stat shit PL did before a Main deploy. But I'd say that the Land Update is basically in the shape it'll be once it hits main."),K.a("10/24/17","Happy 1025eve.  I've added a shitton of class themes today, but the weekend was spent working on making DollSim <a href = 'http://www.farragofiction.com/CardSim/'> Trading Cards</a> and <a href = 'http://www.farragofiction.com/DollSim/charSheetCreator'>Character Sheets</a>. I'm trying to do side projects on the weekend."),K.a("10/19/17","Combo sessions are fixed, and intros are much less repetitive. Hell yes x2 combo of productivity!<br><Br>Dream aspect has themes now, too."),K.a("10/18/17","All aspects (besides Dream) have their own themes now.  <br><Br>Next up I'll be debugging the shit out of combo sessions, adding Class themes and doing the last bit of new features for land quests.<br><Br>Moons are fixed so that players wear the right colors, too."),K.a("10/17/17","New themes added for Hope, Life, Light and Mind. Whew. Lots of writing! <br><Br>Also worked on the doll maker over the weekend, lots of new parts and I almost have everything in place to make future mini games based on the dolls."),K.a("10/13/17","Happy Arc Number Day!<br><br>Today I ripped out all references to the old moon/land system, so you shouldn't have to worry lands or moons suddenly not matching shit. <br><br>I also put the structure in place for a new Intro system, with dialogue more close to how dead sessions taunting works. It's still p bare bones, but I plan on adding more variety to shit over the next few days. "),K.a("10/12/17","Whoops, apparently I murdered the OCGenerator and never noticed. RIP. <br><Br>LUCKILY I was already planning on making a new one from scratch today, to get a better feel for how much variety we have in quests. <a href = 'ocGenerator.html'>Check It out</a>. <br><br> Interests are p solid in terms of variety, even for 4 players with all the same interests. Just gotta bring aspects and class up to that level. "),K.a("10/11/17","All interest categories have themes associated them, with one quest chain (for now) per theme. <br><br>Also the doll maker has more and more parts."),K.a("10/10/17","Alright, 'vacation' over! And by vacation I mean I coded a doll maker while not at home. Check it out: <a href = 'http://farragofiction.com/DollSim/index.html'>Kid</a>, or <a href = 'http://farragofiction.com/DollSim/troll_index.html'>Troll</a>, or <a href = 'http://farragofiction.com/DollSim/consort_index.html'>Consorts</a> are all implemented so far. <br><br>I ALSO added a few themes for Justice, Music, Romance, Thief and Rogue. "),K.a("10/4/17","Alright, multiplayer quests have been coded, and we have a few shiping dungeons to test them out. <br><br> A few more themes have been added as well.<br><br>Meanwhile I'm going on vacation 'till the 10th, so I'm gonna TRY to code less and shit during that. Additiction is a powerful thing.<br><Br> Oh yeah, check out the <a href = 'image_browser.html?octobermas=true'>Octobermas Spoopy fanart: </a>"),K.a("10/3/17","Happy Best Month! I have sucessfully murdered the fuck out of regular sessions and replaced things with the new Quest system. I'm still tweaking shit, and there's probably a few features I've forgotten to take into account, but p much the main thing remaining is to get more and more custom themes in for Lands."),K.a("9/30/17","Dream quests no longer happen without a dream self, and the player is attired appropriately. Dream quest also have branches for 'dreaming without a dream self' and 'dreaming without a dream self and bubbles have turned on'. <br><br>In the mean time I did a few minor bug fixes and doom has a custom set of themes, now, too.<br><br>Also, turns out ghosts are no longer accidentally banned from helping players anymore. Whoops."),K.a("9/29/17","More themes added, list of all themes can be found <a href = 'themes.html'>here</a>. (Mostly for my own use though). "),K.a("9/28/17","Alright, so first up, <a href = 'dead_session_finder.html'>AB</a> now is willing to brave the swamp of depravity that is Dead Sessions. As a result, I worked with her to get dead sessions calibrated 'correctly'. Which is to say, it's a practically unwinable joke mode. <br><br>Meanwhile, Dead sessions have the last piece of the puzzle, mainly shitty moon quests. <br><br>Tomorrow I expect to be polishing shit, and maybe I'll burn regular sessions to the ground, in which case you won't see any new updates for a few days as I wire the quest system into place and make sure it works with multiplayer."),K.a("9/27/17","The contents of strifes are finally toggleable (besides the results)! Hell yes, no more strife spam! <br><br>Lessee...generically hope gnosis doesn't suck as much, and grim dark players are less op since PL's stat update. <br><br>Oh yeah, and Dead sessions are filled with meta bullshit now. Dead sessions have an actual ending, too, where they invade the new session. I plan on having an 'enemy' mechanic where ANY player can become a boss enemy, I imagine Dead players will use it p frequently.  <br><br>I guess next thing I wanna do is make a new Dead Session Finder so I can calibrate shit correctly, and then add moon quests to the dead sessions."),K.a("9/26/17","Dead sessions have working planet bosses (what will be denizens in regular sessions). Hell yes."),K.a("9/24/17","Dead sessions continue to chug along. Lords are finally in (courtsey of tinkeredCalculation /jinkeredRaculation/Pixel and KR)  , as well, though of course tragically minionless."),K.a("9/21/17","More dead session stuff, and Muses are added courtesy of tinkeredCalculation /jinkeredRaculation/Pixel (with KR modifying them to work with the rendering engine). They aren't in their final state (since, like Lords, they are planned to have npc minions as quest rewards), but they are p close."),K.a("9/20/17","Dead sessions are really picking up, along with the land update that they are designed to test. Simple, bullshit quests are now available for the unlucky Dead Session Players.<Br><br> I'll expand them out and add frame stories and shit over the next few days, then when dead sessions v1 are done I'll shift my focus to getting all this working in the regular sessions as well."),K.a("9/17/17","Hey! Guess who DIDN'T find out that the afterlife was destroyed and then proceded to NOT completely forget about it for a day or so?  Wait....too many negatives, I've gotten confused. Fuck. <br><Br>Uh. So. The afterlife exists again! Yay! I am definitely not the most asshole creator of all time. <br><Br>And on a completely unrelated note I am REALLY enjoying how the Land update is going so far. Not yet really anything to show you guys yet, but it's p fun so far. Also what could <a href = 'dead_index.html'>this</a> shitty half finished thing be? "),K.a("9/16/17","<br><Br>First thing you should expect to see on Experimental is a complete Stat overhaul provided by ParadoxLands, and then the Land Update will start happening in bits and pieces.<BR><BR>  Current stat update has wastes be a little nerfed. Might see if i can rebuff their rate of crashing sessions and shit later."),K.a("9/15/17","How 'bout that Hiveswap huh? <br><br>Main looks to be stable, one last deploy for some minor shit, and then Experimental will divurge."),K.a("9/13/17","<h1>Waste Update On Main!!!</h1><br><Br>  If you are seeing this then that means we did it. The Great Refactoring is not only over, but there is a shit ton of new content as well. For all you ppl who read the Main site only, feel free to peruse these newsposts that were previously hidden to you for clues as to what the fuck is going on.<br><br>Also, can I just say how fucking pleased I am that we hit Main on the 13th, in honor of the Sim's new Arc number? <br><Br>Before I forget, the pre Great Refactoring Sim (done in 100% JavaScript) will be archived <a hhef = 'http://farragofiction.com/SBURBSimJS/'>here</a> for future generations to jeer at/ boggle at because holy shit how did I get so far in such a shitty, shitty language.<Br><br>As always, I will halt new development for a few days as I field bug reports that inevitably flood in when we do a Main Release.  THEN, we get the glory of the Land Update.<br><br>Also, sudden Dream aspect has shown up???"),K.a("9/12/17","Guess whose server died dramtically last night in the wake of Hurricane Irma? It was my server. It's always me. Even after the power got restored, my server was still inaccessible, tho. I finally got it back up this morning though.  Fuckin firewalls man, how do they work?<br><Br>Today will be more stability fixes.<br><br>I expect to do the main deploy in the morning."),K.a("9/11/17","Enough people have been asking me about the Gnosis update that I have made this handy <a href='gnosis.html'>Gnosis FAQ</a> for all your gigglesnort meta-talk needs. <br><Br>I've also been seriously working on balance and stabliity for gnosis, as well as killing all the pesky little bugs I haven't gotten around to yet. <br><br>My goal is to get this onto main the 13th, basically."),K.a("9/10/17","Hell yes, Time Gnosis4 is ready! Basically, at tier4 the Time Player will fuck off to the end of the session to see how it turned out.  Observers gotta wait and do shit linearly though, cuz fuck you that's why. <Br><br> Once they get there, the tier4 player will give the Observer the option to reset the session, at which point the time player will murder their own past self and replace them as Alpha.  This generally makes the session go differently, since the time player is now op as shit AND has different opinions about all their friends. <Br><br>Fun fact: This is officially the ONLY way to recover from a crash.  Time players should ALWAYS be able to nope the fuck out of a timeline.<br><Br>Haha, whoops I lied. Turns out Space4 gnosis lets you nope out of a crash as well, by escaping to another session. Good times. Frog magic is clearly best magic. <br><Br>Speaking of, Space4 theoretically lets you escape into your own scratch, Hussie Style.  But I couldn't test that code because it turns out the Space3 event p much makes you just win instead of scratch. AB can't even help me look because it's beyond her vision. So, like, if anybody finds a scratch while the infinite combo space4 shit is going, hit me up. I wanna test it.<br><Br> Also, I might make it harder for time players in particular to get gnosis, cuz holy shit are they spamming it. "),K.a("9/8/17","Guess who spent the past 22 hours (I am COUNTING my sleep because derseJR works hard) trying to frantically fix AB? It was me.  It's always me. AB's been a LITTLE wonky lately, but it came to a head with ppl looking for Rage4 updates that just were not going the way AB said they were, even WITHOUT getting the gnosis 4. <br><br>After much wailing and gnashing of teeth and at least one Derse quest, it turns out that unlike every OTHER time AB has gone the RogueAI route, this time it wasn't because of randomness getting out of control (fucking cat trolls, I swear). Nope. THIS time it was the OTHER thing those fucking cat trolls are known for: Shipping. <bR><br>Those handy dandy tool tips I made (where you mouse over a name to see their stats) basically made it so that shipping grids INVSIBLY were different every time, which made the shippers go into overdrive thinking they had new ships all the time.  Unless you told it not to render which would ALSO disable the tool tips. <br><Br> So for once, AB was right and REALITY was insane. Good times. <br><br>OMFG guess mind4 was way easier than I thought. The assholes hax0r my YellowYard thing, but without my trade mark restraint and good sense. Enjoy crashing the session, assholes. "),K.a("9/7/17","Guess who ended up having to sleep instead of finishing up rage last night? It was me. Hopefully this is going out first thing in the morning, tho. <br><Br>  And also hopefully I rewrite it with more energy.  Basically, Rage Gnosis4 is about gettin MAD that you are in a shitty simulation created by shitty people, and draggin them into it to get sweet sweet vengence. <br><Br>Haha fuck that took way more effort than I thought. Just gonna...deploy that shit."),K.a("9/6/17","So, one popular headcanon about Doom is that it's about rules.  So, while all Tier4 gnosis events are about changing the rules, Doom is about changing the RULES. Which is to say that the laws of causality gets fucked up in a weird lovecraftian nightmare as everything inverts itself just for the sake of changing rules.  It's p dope. <br><Br>Also, I finally fixed a p rare instance of a bug with AB, we can all breathe easier now."),K.a("9/5/17","Blood Tier4 is out. Blood players try to hack the game until more of their friends are allowed to play, with mixed results. They also make sure everybody stays abnormally sane.<br><br>Life4 is also out. They seek ultimate power and disable death entirely, which has some interesting side effects.<br><br>Both Life and Blood are tiers that will get a LOT better post NPC update, btw."),K.a("9/4/17","Void Tier4 is out now. Void players highly value their privacy, so don't expect to see what it does. Hell, they even managed to figure out how to lie to AB.<Br><br>Light players do the opposite, drawing attention to themself at the cost of everyone else.  At least they make a little bit of the session stats visible. And you know, everybody gets SO LUUUUUUUUCKY!!!!!!!!  It's kind of funny when two light players fight over the spot light, tho."),K.a("9/3/17","Got both Breath and Heart tier4 gnosis events out today. Heart's are....NOT quite how I envisioned, but I figure glitchy graphics are going to be a risk of wastes fucking with the code. I'll fix it eventually."),K.a("9/2/17","Dear sweet precious sweet sweet AB, who remains, as always, the best, has informed me that she hates my entire Class.  Wastes fuck with the rules of the sim and make her reports incredibly inaccurate.   So I have given her the ultimate act of diamond buddy trust, and have given her the power to UNDO any Wastes effects.   <br><BR>Functionally, this means that she won't apply one sessions' waste shit to the next session in the list, but that the Wastes changes WILL happen to their own scratch and combo and etc.<Br><Br>You should also find AB much faster after PL and me frantically cleared away a lot of shit that was slowing things down."),K.a("9/1/17","Hope players now are able to perform their tier 4 Gnosis bullshit. They generally change basic facts about the session that they'd rather not believe in.<br><Br>The best possible bug happened while I was debugging it, tho.  So, Hope players can childisly rename the class/aspect of whoever they hate, right?  This resulted in me discovering that Aspects dont actually know what file their symbol is in, still using the outdated 'name.png' schema.   This resulted in the sim crashing because it could not find 'Dick.png'.  Best crash."),K.a("8/31/17","Been doing various bug fixes. AB is a LOT more sane now, no clue how so many things went under my radar.<br><br>I also added the ability to hover over names to see what a player/enemies current stats are, and what fraymotifs they have."),K.a("8/30/17","I spammed the fuck out of finishing the tier3 gnosis events. Hell yes.<Br><Br>Now all I gotta do is a buncha bug and balance fixes, and I'll be ready to start up the tier4 events.<br><BR> THEN I'll probably start working on the Land update, although I might suddenly wanna do the NPC update instead. "),K.a("8/29/17","How 'bout that Hiveswap release date announcment? It's so weird to me that I started up SBURBSim as a way to pass the time 'before Hiveswap' way back in January, and now here we are. Good times. <br><Br> Today I implented a basic 'grist' system that is required to breed a successful frog.  Otherwise one asshole with a FAQ was enough to basically guarantee victory.  NOW everybody has to pull their weight.<br><Br>We also have the breath/space mobility exploit, and a shit ton of bug/balance fixes "),K.a("8/28/17","A little flavor text is added for interaction effects, and there's a new mini-prophecy system for Doom to exploit for tier 3 gnosis.<br><Br>A few bug fixes, too."),K.a("8/27/17","Relationships are a little less shitty in the sim now, and I added a bunch of extremely short and vague alternate endings."),K.a("8/26/17","Been importing various FAQs from you, the fans.  <br><br>Oh, and a few minor bug fixes."),K.a("8/25/17","FAQS have ascii art now, and I'm startin to flesh things out from the 'how bullshit is X' level of stuff we had before."),K.a("8/24/17","FAQs are going p good, all the structure is in place for the whole shebang, besides ASCII art which if fighting me.<BR><BR>The discord has opened up a FAQ channel for ppl to submit shit.  It's important to remember that FAQs can be written by any classpect, not just Wastes.  Wastes just have a huge bonus towards meta shit.<BR><BR>I'm gonna be slowly adding the various faq entries while also doing bug fixes.  Once FAQs seem p close to finished (or I get bored) I'll start up the tier 3 gnosis events as well."),K.a("8/23/17","Getting the FAQs working had been kicking my ass so hard. Not even fair.  Sometimes sessions with faqs in them were a little random, which makes AB lose her shit. BLUH.  But they are working better than they were, so enjoy checking out the placeholder shit for tier 1 and 2 gnosis (i.e. players find and write random faqs).<br><Br>ParadoxLands wrote a <a href = 'tools/xml_editor/index.html'>xml editor</a> for ppl on teh discord to use to submit faq sections, which I'll start up once I get the FAQs right. You can use it to create sections for the FAQ. We'll probably get a tutorial up and running (maybe on the discord) before officially opening it, but until then you can check it out."),K.a("8/20/17","No newspost yesterday as I wanted to wait till I had the recording of the <a href = 'https://soundcloud.com/jaded-researcher/great-refactoring-voice-chat'>Great Refactoring Voice Chat</a> ready. <br><Br>Today I'm gonna work more the faqs for the Waste Update. It's not what you'd expect, unless you've seen me rambling. Then it's exactly what you expect.<Br><br>Oh yeah, before I forget, the skeleton of the Waste Update is def in place, and you should see mysterious statements that basically boil down to placeholders.  Ignore them, they clearly mean nothing."),K.a("8/18/17","I'm working on the new waste update and fixing some last few hold out bugs, while PL has made a p dope new <a href ='tools/stat_summary/index.html'>automatic aspect explainer</a>, that'll update as we mess with the code. <Br><Br>Also, before I forget: We are basically at the end of The Great Refactoring. The Denizen Javascript has been defeated.  Sure, experimental is still buggy, but not any worse than other experiemental branch.  <br><Br> SO, to celebrate, I will drop a giggle snort tier and use my actual human voice to give a 'state of the sim' type talk on the discord.<br><Br> <a href = 'https://discord.gg/KPunMPc'>Tune in tomorrow, the 19th at 5pm EST.</a> "),K.a("8/17/17","Lol, no, no we could not get done by 8/13. But, in my defense, mid way through stubbing out the Waste shit I realized that getting the classpects and interests to the new system PL propposed would make it WAY easier. So I set shit on fire again and me and PL fought some red squiggles.  Should be the last fire, Scouts honor.<span class='void'>And as ABJ has demonstrated, if Scouts know about anything, it's fire.</span><Br><Br>So, now to start doing Waste shit. It will be dope as fuck."),K.a("8/12/17","Whoa, looks like AB is back to feeling like her old self. Hell yes.<Br><Br>Now all I gotta do is focus on squashing bugs, both the session crashing ones and the more insidious ones.  Will I be done by SBURBSim's new arc number of 13? Only time will tell. And time is the shittiest Aspect, so it ain't sayin' nothing.<Br><br>A few minor bugs are slain, and combo sessions are working again. OMG, the bug that was killing them was so stupid."),K.a("8/11/17","If I were the type of Waste to have Easter eggs, they'd probably be working a lot better now. <br><br>And if some part of the site were associated with said eggs, maybe they are too???<span class='void' Whoa, did I ACTUALLY refer to [???] with my shitty over punctuation giggle snort quirk???</span>"),K.a("8/10/17","Heh, you know what's boring??? Fighting the tournament arc bugs.  You know what's NOT boring: finally fixing the x= part of ocDataStrings so we can have new classes.<br><br>Behold the Grace and Guide, classes which are still hella blank, but look really cool thanks to KR.  Graces will be the passive counterpart to Wastes (and will eat of the fruit of the upcoming Waste update), and Guides are the counterpart to Scouts.<Br><Br>The AuthorBot is a Guide, for example."),K.a("8/9/17","Working on the Tournament Arc, which is being stubborn. <Br><Br>In the mean time, I remembered that I wanted to add a 'session of the day' kinda thing. You can see it in the menus, but it's basically just converting the date into yyyymmdd, like 201789."),K.a("8/8/17","I figured I was banging my head on a brick wall with AB, so I let her continue at half-capacity for now while I shifted focus to get the OC data strings working.<br><br> As far as I can tell they are HELLA working, guys. It's pretty awesome. Haven't tested any easter eggs they have yet, but we are getting there."),K.a("8/6/17","Holy shit, why is it so hard to make AB filter sessions. This sucks. <br><br>But at least less sessions are crashing now after PL figured out what was wrong with combo sessions.<br><Br> Also, I have decided that '13' is an official arc number for SBURBSim, as my records indicate that on 1/13/17 is when I first coded 'an ending' for it (after starting work on 1/10).  <span class='void'>And also my oc uses hair 13 in the sim, and many other 13s. Like how Wastes are the 13th class.</span>"),K.a("8/4/17","Holy fuck I am the goddamned champion of coding. AB APPEARS TO BE WORKING. I am sure there's plenty of bugs to work out, but god DAMN does it feel good.<br><Br>I have not even REMOTELY sanity checked AB yet, so, you know, Observer Beware.<br><Br>Also, you still can't filter shit. But AB is awake. And that is all there is to say on the matter."),K.a("8/2/17","AB seems to weirdly like Aradia. Who knew. When I first booted her up, Aradia was all she'd talk about.<Br><br>First, I sent a bunch of AB's chassis into Sessions only to never see them again. RIP brave robot chassis. Then, they started coming back occasionally. Apparently they had seen some shit, though, because they would refuse to go back out after reporting to find new sessions.  AB's love of scratching shined through, though, since she would make a special exception of sessions that could be scratched.<Br><Br>Maybe tomorrow I'll get her sorted out? "),K.a("8/1/17","Minor bug fixes here and there as I get AB hooked up to the new stuff.  Royalty, for example, were not getting their prototyping bonus pretty blatantly."),K.a("7/31/17","Today I will focus on getting The Great Refactoring (everything is on fire and there are plenty of crashes) on to the Experimental branch. As such, expect this to be the final Main/JavaScript update for awhile. <br><Br>Holy shit guys, Experimental is burning and full of bugs (fire ants???) but here we are!!!<Br><Br>ParadoxLands is officially the Architect for the post javascript SBURBSim, and will continue helping me out with my Authorial duties."),K.a("7/30/17","Still tracking down ABJ's first bug. When I ask her what classes exist, she lists out the canon ones, and then lists out the fanon ones like 50 times a piece. So. I guess she REALLY likes fanon."),K.a("7/29/17","I have begun the process of waking AB and ABJ back up so they can help us debug.<Br><Br>Oh shit, ABJ is awake. And...reporting that so many players are Wastes of Blood?  This...this is definitely not creepy at all.<Br><Br>(Also why are wastes in the main sim??? Gotta go find that bug)"),K.a("7/28/17","Today I discovered that AB doesn't hate cinnamon rolls."),K.a("7/27/17","Man, I've been dealing with getting The First Session working so much I forgot to update you guys!  <a href = 'https://drive.google.com/file/d/0B-uS7ImZMoISTmw2UGFZaFVHRDA/view'>The First Session</a> is buggy as hell, and nobody is apparently allowed to do Land Quests, but we got 'em folks, and I have promptly added them to my personal Mythology. Hell FUCKING yes.<Br><Br>Next up is getting them able to do quests and fix any bugs that shake out of that, and then waking dear sweet precious sweet sweet AuthorBot up from her medically induced Coma to see if she can help find more bugs.<br><br>Also: holy shit, we are on day TEN of The Great Refactoring. This is the longest I've done any one thing on the sim, or as RS put it: 'ACHIEVEMENT GET: In-TEN-se Work- Slave away for ten days on one task. '."),K.a("7/25/17","Hell FUCKING yes x2Combo!!  The Refactored Sim just generated it's first player, a Witch of Space who has a MonkeySprite but crashed before they had anything else. <a href = 'image_browser.html?firstPlayer=true'>Fan art is here.</a>"),K.a("7/24/17","Hell FUCKING yes, the Great Refactoring has hit a major milestone. I can now render the Sim's navbar, and like, infinity shitty errors. This is progress. This is FANTASTIC progress. Thousands of syntax errors from the conversion process have been slain in absolutely not-honorable combat.  <br><br>And now comes the process of slowly getting each feature working again, while ALSO slaying what red squiggles I have magnanimously allowed to live in my haste to speed run this bitch."),K.a("7/23/17","Mages of Heart no longer suffer from the corruption of their own identity, in the most hilariously ironic bug to hit the OCDataStrings yet.<br><Br>Also, ParadoxLands has helpfully provided this explanation for just what the Great Refactoring is.<br><Br><a href = 'images/misc/fanArt/gifs/the_great_refactor.gif'><img width = '300' src = 'images/misc/fanArt/gifs/the_great_refactor.gif'></a>"),K.a("7/22/17","The Witch of Void and Waste of Mind use The Great Refactoring. A defensive ward of glass and open doors surrounds the allies."),K.a("7/21/17","<span class='void'>Just. Fuck bees.</span>"),K.a("7/20/17","The God Tier Waste of Mind (jadedResearcher) is doing... something. It's kind of hard to see. You are definitely blaming the God Tier Witch of Void (paradoxLands), somehow. Everyone seems to be pretty happy about it, though.<span class ='void'>The Waste of Mind and Witch of Void are refactoring like goddamn machines. It's crazy how much refactoring they are doing. How HIGH do you even have to be etc. etc.  ... ... ...  It's going well.</span>"),K.a("7/19/17","Day Two of the Great Refactoring: Things are going about the speed I anticipated. The Sim is still in ruins, and can't be run, so I've decided to spin off some time to write ways to test it even if it's not finished. In JAVASCRIPT this was as simple as making a new html page, but JavaScript is also a buggy piece of shit (or at least sure does love ENABLING buggy pieces of shit. ) so... <Br><Br>Holy shit, guys, I just realized: JavaScript is TOTALLY a Bard of Doom!!! It ALLOWS you to be destroyed by your own Doom, or to cause destruction with it.  Doom being both 'bad ends' and rules/structure.  JavaScript makes is SO FUCKING EASY to break 'the rules', both for good and for bad. Headcanon: Accepted."),K.a("7/17/16","Last deploy until me and ParadoxLands finish up converting the whole shebang to a new language to get ready for the NPC update. <br><Br>This deploy had bug fixes, and re-enabled dear sweet precious sweet sweet The Mayor, who had accidentally become Impossible. <span class = 'void'>Also, Null class players work again.</span>"),K.a("7/16/17","Spent the past couple days fixing small bugs (such as Original Characters not having the right psionics for their blood color, or Guardians for 13+ sessions crashing them due to not wanting to share classes) and adding small features (like getting the OCDataStrings ready to be extendible. <br><Br>I anticipate main and Experimental branching apart again shortly.<Br><br>Also, Popo-Merrygamz has provided us with 6 new hairs, which KR has massaged to fit the Sim's display specifications."),K.a("7/14/17","What is this??? Did Fraymotifs finally hit the Main Branch??? Hopy shit!<br><br>I bet classpects have gotten a full overhaul, as well as the entire Fraymotif Engine.  I'm litterally writing up the new classpect descriptions for the Char Creator as we speak. <br><br> (Also, what's that <a href = 'land_of_rods_and_screens.html'>LORAS</a> thing???"),K.a("7/13/17","Made sure the new classes get at least place holder quests to fiddle with.  <br><br>I also put in a alpha 'here is a list of buffs/debuffs' readout.  It seems kinda spammy right now. Not sure what I want to do with it.<br><Br> I also workshopped ELEVEN additional 90s rap/rock sensations to help players out with optional bosses I plan on adding to the sim over time. That brings us up to a Pantheon of 12, total.  May they save us all."),K.a("7/12/17","Small, fiddly, fraymotif things, like making not all denizens have the same fraymotif. <br><br>And 3 new classes (Scout, Sage, Scribe) though they behave mostly like existing classes. I have plans though. I continue to like how Life/Doom players behave for ghost shit, and think that all existing scened could benefit from having class themed things for people to do on top of the existing stuff."),K.a("7/11/17","The rebalance is finished. Huzzah! Let us all resolutely forget the thousands of players that died while the survival rate was at 18%. That would be why I didn't deploy till now. 'Cause with all you simulating sessions, it would have been many, many more casualties. R.I.P.<Br><Br>In completely unrelated news, AB is reporting a new type of ending??? What is even up with that? "),K.a("7/10/17","Spent today working on making sure all stats effect combat in some fashion.  Sanity and Free Will will control if you can use fraymotifs, for example.  Problem is it unbalanced everything enough that I can't justify a deploy yet :/<span class='void'><br><br>Which is a fucking SHAME because I made the best shitty fan troll for you guys, with bubble gum pink blood (she is the only one to have it) and heart horns and her name is specialSnowLake and she is in a threeway matesprite ship with Dave and Karkat and etc. etc.<br><br>When I first created this original character (do not steal) she created a dope as fuck bug where all SBURBSim players were covered in her blood, like we were all part of some Orient Express Style conspiracy murder of her annoying ass.</span>"),K.a("7/9/17","Minor tweaks here and there, as well as a list of possible pre-made names for fraymotifs that the discord brainstormed up.<br><Br>Life players should suck a little bit less, too, 'cause they no longer interfere with the God Tiering process.  (They would get all panicky and revive players before they could get a chance to God Tier). <br><Br>Rage/Void players have been nerfed a bit, and shouldn't God Tier the second they get in the Medium anymore. Hilarious though it was, it really unbalanced things."),K.a("7/8/17","So, I noticed that shipping grid were broken, and SOMEHOW this turned into a two day long shipping re-work??? Heart and Blood players maintain shipping grids, with any non-quadranted crushes being the Shippers's speculation. 'Oh, they seem to like this other player a lot, I bet it's FLUSHED/PALE'. Shippers will occasionally also butt in and attempt to get their favorite ships together.  <br><Br>I ALSO did small stat and fraymotif tweaks, but nothing particularly memorable. Fraymotifs in general should be more useful, since they are guaranteed to be at LEAST as good as a regular attack, damage wise. <Br><br>ALSO, DilletantMathematician made this amazing <a href = 'http:,//www.purplefrog.com/~thoth/art/sburb-disco/disco.html'>fan animation-ey thingy</a> with SBURBSim characters dancing.<span class='void'><Br><br>Also, <a href = 'index2.html?faces=off'>FaceOff mode is a thing that will haunt our nightmares forever</a><br><br>Also, since I updated shipping, ABJ broke, and I realized that SHE ships, too!!!  She reports back on initial ships.  So she is a sociopath who enojoys total party wipes, and shipping.</span> "),K.a("7/6/17","<span class='void'>Is it possible I got distracted from fraymotifs??? And added Wastes as a class??? That doesn't SOUND like something I would do, focus is practically my middle name. But if I DID I would expect it to be shitty and alpha and have wastes not do anything special at all.<br><Br></span>I got briefly distracted from fraymotifs working on a tiny rendering engine upgrade that makes swapping out sprites easier (not the full Sprite Rendering Upgrade, though). And so I toiled to make the stupidest possible <a href = 'index2.html?easter=egg'>easter egg</a> with it. (Let's all thank MultipleStripes for the sprites!!!)<br><br>And if I DID manage to focus on fraymotifs for any amount of time at all, I'd expect troll psionics to be more of a thing, both in and out of combat. It's still very much a proof of concept (only a handful of powers) but the framework is there.<br><Br>ALSO I did a shit ton of bug fixes for the character creator, so it should APPEAR less buggy (it wasn't ACTUALLY buggy underneath, the forms just didnt' like to update)"),K.a("7/5/17","More fraymotif work, including sprites (and thus Crowned Carapacians) having fraymotifs. Still a LOT of bugs to fix, though.<br><br>Also, <a href = 'index2.html?images=pumpkin'>What Images Mode</a> is now a thing. If you don't give a fuck about images, or just want to make stupid shit (like 144 player sessions) not crash your browser, this is the mode for you. Shine on, you crazy diamond.<Br><br>ALSO, I made a quick lil 'character sheet' of the players at the end (if they actually GET to the end, and don't crash the game or doom themselves) printing out their 'before' and 'after' stats."),K.a("7/4/17","Denizens have their own 'fraymotifs' now, and several fraymotif related bugs have been fixed as well.<br><br>  If easter eggs were a thing, I'd expect to see more of them, as well. <span class='void'>It's <a href = 'index2.html?pen15=ouija'>dicks</a>. dicks are the secret.</span>"),K.a("7/3/17","Today shall forever go down in history as the day that 'fraymotifs when?' stopped being a meme and instead became a real thing.  Players can now have text only, unbalanced as fuck fraymotifs.  <Br><Br>Next up is hand made 'fraymotifs' for denizens, sprites and psionic trolls.  Then maybe i'll look into at least having the users of the fraymotifs pose as a team (if they are players).  "),K.a("7/1/17","<a href = 'land_of_rods_and_screens.html'>The LORAS game</a>, described by <a href = 'https://classpectanon.tumblr.com/post/162204711075/could-i-get-a-land-analysis-waste-or-maid-if'>classpectanon</a> and drawn by <a href = 'http:,//paradoxlands.tumblr.com/post/162444935101/land-of-rods-and-screens-your-land-is-a'>ParadoxLands</a> is basically complete. In addition to ParadoxLands' dope background for the game, there are multiple 'win' states, and you no longer get the best reward for the regular ending. If you played the game early enough, the best reward (holy shit is it hard not to call it the Ultimate Reward) was pretty much inevitable to get, but now it's only for the True Ending. Thems the breaks, future peeps. <Br><Br>Also, procedural fraymotif descriptions are done, and I expect to be able to shove fraymotifs in general into the sim within the next couple of days.<br><Br>In the meantime you can see my shittily organized test page <a href = 'test_fraymotif.html'> here</a>"),K.a("6/30/17","Fraymotifs are nearly ready for v1 to be integrated into the sim. I'm brainstorming some interesting ways to describe them in sim rather then just call out an attack name and have you guess what happens next. <br><Br>Once player fraymotifs are fairly stable, I'll work on the non-procedural sprite/denizen/etc 'fraymotifs', as well as custom ways to get fraymotifs, and extending fraymotifs to have effects other than just damage/healing/buffing/debuffing."),K.a("6/29/17","So, combo sessions have been acting weird with YellowYards, but only SOMETIMES. Turns out it was SHIPPING GRIDS. The fix is the highly unintuitive 'Have the players drag the corpses with them to the new session, Vriska/Gamzee style'.  <Br><Br>Don't worry about it. Of COURSE shipping problems are fixed by bringing decapitated heads or whatever the fuck. I think we can all agree that SBURB makes perfect sense.<Br><Br>I also enabled <a href = 'index2.html?seed=111&VoidStuck=true'>Void players</a> to have a custom info phrase to describe which stat they have that is crazy high. (For example, SO STRONG, or SO FRIENDLY). If they are a class that has to EARN their power, the stat will be flipped (SO WEAK, or SO AGGRESSIVE).  It has been an interesting way to keep track of how the Void player will be growing over time.<br><br>Also, I've totally got the basic structure of fraymotif tests ready and have a solid plan for finishing them up. "),K.a("6/28/17","So, ExperimentalBranch (which you're either on right now if you can see this, OR you are from the far flung future) has officially gone off the rails and has wildly divurged from Main. <Br><Br>Classpect stats have been completely redone to make future fanon classpects and fraymotifs easier. I haven't updated the help text on the character yet (and won't until classpects settle down) so, for now, they are totol lies.<br><br>Also, smiley quirks are a thing. Finally."),K.a("6/26/17","So I spent the past 36 hours implementing a <a href = 'land_of_rods_and_screens.html'>game</a> version of the land <a href = 'https://classpectanon.tumblr.com/post/162204711075/could-i-get-a-land-analysis-waste-or-maid-if'>classpectanon</a> wrote for me.  <Br><br> It sure does seem unlikely that the game has secrets, doesn't it?  I ESPECIALLY wouldn't expect for the game to unlock any easter eggs in SBURBSim."),K.a("6/24/17","Lol, was I gonna not do any more main updates for awhile??? That stopped being a thing that was true as soon as <a href = 'http:,//paradoxlands.tumblr.com/post/162149733351/main-dish-misalignment-stand-by-sometimes-while'>ParadoxLands</a> made me some p great fanart which reminded me that I STILL hadn't posted all the OTHER fan art I've been collecting.  So have fun with the new <a href='image_browser.html?fanArt=true'>viewer</a> :) :) :) <br><Br>(Hey, did you know I'm collecting fan art???) "),K.a("6/23/17","While I'm doing invisible backend work on the sprite renderer, we have recieved 7 new hair styles! KR made sure the hair recieved from Popo-Merrygamz (and hair 64 from RemJoleea and hair 66 from Ancient ) worked with the rendering engine. That brings us up to 68 different hair styles! "),K.a("6/22/17","Final Main Update for the next while (weeks? a month?) is out.  It includes the tournament, which you'll see links to in lower down newposts, and a link to in the 'fan' tab on the navbar.<br><Br>  (For those new folks here, Main branch only gets newsposts when it gets an update, so if I seem to go silent, why not check the newsposts over on experimental?)<br><Br>Experimental will start getting work for a new rendering engine (that will allow you to specify what sprite set your custom character uses, like PonyStuck or CarapaceStuck or whatever) and a completely redone claspecting (courtsey of the ideasWranglers, especially the newest one, wooMod who advocated the upgrade) system to emphasize class and aspect uniqueness.  BOTH things are going to require a lot of coding before even the experimental branch gets an update, so we'll see how things shake out. I'll try to do little things here and there so things don't stagnate as well.<br><br>Those two things will be the ground work for the NPC update (which will include NPC party members and Midnight Crew Shenanigans) and the fraymotif update, respectively.  So, big plans coming."),K.a("6/21/17","Been working on redoing the rendering engine to make extending it a thing. Plan on having stupid character customization options available some day, like just deciding what sprite set your OC is using.  (EggStuck, PonyStuck, CarapaceStuck, the possibilities are endless because they are still in the future).  <br><Br>I also made a small balance change for sessions with multiple Space/Time players.  Before, only the first Space players's frog mattered and the first Time Players got to make doomed time clones. This was obviously fucking stupid, and has been fixed."),K.a("6/20/17","So, sarcasticIrony totally made <a href = 'http:,//farragofiction.com/SBURBSim/index2.html?seed=105980060&b=KQYQzMBCBioTcrQIKMgFlAJmATksAIwAMwxEhAbEdcYWrMaU9sABwCsabAmkc6kKZiqYmwYTwSAOZoAoq0gB2MqUI46ZekNW6pCdWkIBXfgEUiISwCpWbZqRA57irvoJS2BEmQrUsFBAs+oyOOMgQ+sgAWvxkWACEREEaDgwATmhKAKr8ABqWRJC2wc5pTlCO8HIFTAAqZCrEXMS4kmWq9PoKFfi6hBBYmENaevCwIWQe1WTiTAAKo5pYlEA&s=DTCSCcHsDsE9gEqQDYFMAEAFZBDWBLaAc2ABcBXcaU1AYwAsBhHU6fABxGEdwGdf8vALZgocMviE5U5XgBVUvUvlpouzUr2AAJSOCjga+vVprUcq1HPqpwOdoNJcAYtPD5FwZ-nBL0AcXIccAATfBxoLRwwyHk9VGi9LgRUXGUYXnoOLQBBNilkLVpyUlI0ADNBJhY2ThB-VGhIWnwQ1B0LAGtCElocZHwicj4c8CkiVBCQjK4AEQTSemAAZXIVVvbo-Fj-dzqvHz9A4LCIrX8Txp7gIkvofyalFS4IGHgAIR8Q00pqOnp-JAQjZolxMHZoJ0tO8cN1iDcSrxYIEhJlIKggA'>SpriteStuck</a> and it is the best thing ever.<Br><Br>Bug fixes and balance and tournament are what's being worked on. <a href = 'tournament_arc.html'>Tournament</a>  is basically done besides clean up and trying to figure out why AB keeps letting scratches into the tourney (those things are OP)."),K.a("6/19/17","So, the tournament core is complete, which revealed that teams made all of one aspect are HELLA OP. A little bit of digging revealed they were all sharing (and completely owning) the same denizen.  <br><Br>This is clearly not gonna stand, so I completely redid the denizen system. Players each have their own denizen (with a random name themed either around their aspect, or around how much they suck/rock at the game.  Thanks goes to Discord for brainstorming names with me :) :) :)"),K.a("6/18/17",":/ Tournament mode is taking a bit longer than anticipated, espcially as I valiently fought against server issues today.  <br><Br>BUT, fear not, I have a consolation prize for you guys: galleries of <a href = 'image_browser.html?hair=true'>hair</a> and <a href = 'image_browser.html?horns=true'>horns</a> now exist to make it easier to design your OCs.  We also have new horns courtsey of Popo-Merrygamz, horns 47-73. "),K.a("6/16/17","The site navigation has overgone a major overhaul after a lot of the new folks let me know how confusing it was. Hopefully that's better. <Br><Br>I also got to learn that Math% of you guys have session crashes if you're loading a page when I'm doing a deploy. Not sure what's up with that, but I'm brainstorming solutions.  In the mean time, if you get a crash right as a page loads, try holding shift and clicking refresh to clear the cache just for SBURBSim.  That should clear it up.<Br><Br>Oh yeah, and KR is getting some art help from the fans, including the new ideasWrangler: <a href = 'http:,//popo-merrygamz.tumblr.com/'>Popo-Merrygamz:</a>. Expect new and exciting hair and horns and (eventually) classes."),K.a("6/15/17","The navbar has been updated to remove the newsposts, and instead there is now a link to the new <a href = 'http:,//farragofiction.com/SBURBSimE/character_viewer.html'> Fan OC Viewer.</a>.  You can view all sorts of OCs submitted by fans (just like YOU) as well as amazing OCs from other fandoms. And then you can <a href = 'index2.html?selfInsertOC=true&'> shove</a> 'em all into SBURB together and watch the shenanigans play out.  <br><Br>'"),K.a("6/14/17","Dang, apparently custom interests were only working cosmetically, but were leaving echeladder runs as 'undefined' and screwing up certain kinds of dialogue. It's working again, tho, and OC data string didn't even have to be fucked with. <br><Br>BTW, in case it isn't clear, Main and Experimental branches will be in lock-step until I start working on new sim features (like fraymotifs). Things like the fan OC mode will be on both branches."),K.a("6/13/17","Okay, totally on me, but it turned out custom Heiress trolls were NOT biologically compelled to murder each other. Don't worry: the <a href = 'index2.html?seed=121655061&b=KQBhvMCdgYQZmAISQF2ARhAQWAJiX0L0TAnNj2XAWWPC1A33D3HlnLLMuG0Noo4VJLiwAJUAFZpoXN0ggAinERDeAThlYxANky6AhF0UB2VXU5YAKgFpboQgq77BxQo24BRUF4DkJhRUGgAcFuqIGohYADKYAGIJtkA&s=DTDCHsDsGcAcEsBOBDAxvAptYAhcAPeSAcxBADFlIACAQUQBdgApcAayzOAFkMATeMgZFS9YQDN46ZABtqASUgMMMmfGIZIqDFwDKAV1gZEAC2PhOAJTTxoAWy7lw4BgCNZM4ABF9JDFGpuZGhlRBEuAHEUcUlhYEsVdXgoLgAFEwBPaClsUBNkFFRQ6lBEDCFkyGAgA'>natural order</a> has been restored and they are back to engaging in black flirting and murderous rampages as Hussie intended. <Br><Br>Also: totally working on a viewer for all the OCs people have sent me, as well as a mode to pit them against each other in death games for our amusement. *cough* I mean play SBURB for a chance to become gods.<br><Br>Also, ohmyfuckinggod, ppl, troll wings are supposed to be blood colored. Apparently a large chunk of browsers were rendering them as candy red and lime and ohmyfucking god. ,alsdkj. I had no clue. BLUUUUH. It's fixed, at the cost of the server having to resend you guys the images again, so you can't use your caches for your next session. Sorry. "),K.a("6/12/17","<h1>Holy Shit 3.0!!!</h1><br><Br> For serious, guys. I'll fix bugs as they crop up, but right now Main and Experimental are the same damn thing. Good job, us.<br><Br> <a href ='https:,//www.reddit.com/r/homestuck/comments/6gs16h/sburbsim_30/'>Official Reddit Thread</a><Br><Br><a href = 'https://jadedresearcher.tumblr.com/post/161733787019/30'> Official Tumblr Post</a><br><br>And I totally shoved my GlitchFaq onto <a href = 'http:,//archiveofourown.org/works/11179110'>Archive of Our Own</a>"),K.a("6/11/17","Gearing up for 3.0. Only bug fixes and testing remain. Just imported some of manicInsomniac's dialogue for the QuadrantDialogue bullshit, and also you can destroy players (you monster). And holy shit, now you can even create new ones! You can even have sessions with more than 12 players!!!   <br><br>Some minor bug fixes are out as well (Derse players can exist in replay session again) and I'm working on fixing a few bugs still, too (Heart players will hopefully stop crashing combo sessions that Yellow Yard soon)."),K.a("6/10/17","Hel FUCKING yes, the ReplaySession character creator is basically done. What does this mean? Here, have a <a href = '?seed=4655190&b=KQZgwsCMCiwAwHZ4DZhhMAQgFjQJmAEEM44AtYPCK+AEUswCoBaFNDHfIkud4ATl40acenias4qdFlxgCxeLxn9IlahFEMWbGZ3nclffgFZ15reJ1S++hT2O5hmsRN0c59oyozO62yWkPLkVSYzU-SzcbPU9DMJVUSNdrINkQhxUzZID3dINQ5QxTcxEUwNs4wuN+UpdcmOCCzOLMOrogA&s=DTAqAsFMAIEEFcAu4D2AnAQixwHPQJYB2A5sAFYCGAJpNQEqQDOklaAxlGiLkqmsTL0UAI2xNglPuiw4QefoODCxiCVPyZsPBYVLLR4ydK1zempSqMb+snScuG1xzXfkP9V5zZnb3Fzyd1EzdzRUDVYNc-ML0hIJdbGN0BCOsQ5I94yMTfRCA'>link</a>.  In addition to being the best possible doomed session, clicking on 'replay session' will let you check out the data tab so you can import a jadedResearcher or authorBot into your own sessions as well. I'm gonna have a special board on the Discord that will be just people's OC data strings, so we can all put each other into death games like Hussie intended. <Br><Br>Before the weekend is over, I also expect to have a true 'CharacterCreator' link that isn't tied to a specific session, and a mechanism for creating and destroying players (you monster). "),K.a("6/9/17","Hells yes. Character creator is looking pretty damn good and has lots of new features. I'll finish upgrading it this weekend. <br><br>Plus, the server is totes being hosted on a brand spanking new domain, so we're not bumming off my friend's generously donated purplefrog.com hosting anymore.<br><br>Basically, we are so close to 3.0 I can taste it. 6/12/17 is the goal here. It means fraymotifs will be a strictly post 3.0 thing, but they'll be worth it."),K.a("6/8/17","HAH! Fuck pastJR, they clearly had no clue what they were talking about. A good nights sleep resulted in an even SMALLER url for the same damn session:  <a href = 'index2.html?seed=4655190&b=KQBhvMGFihmYAhATMA7DAjCAUsZALPkSACLBxYCioaoAbLAokVKgIIJgAK+MyMMhGFhYHcPCRoAlMGwBFOY0yMho9SFmTEADnZyQVAFSgdochuGYArEyT62wAJyYDAFSMm1kH6+37RbH4EZFULH2FrRDtEJxoFAzkScJEJVEQHZicxYHYibAA1OVRMVG9UnKczbTQARwN45TCK0UcdOm1sx3ZybHjXTFdyjQAjGI7UHXyQAE0jAApzFshWZhpHDIMAaVBrAEJzIA&s=DTCiBsDcFMGdgEIHsCe8TAIIKwVwC4AWSATgJYB2A5hsACqHQCG+0J9AarQk7NAEZNw4YACUmAB1oAJNkjjAACuCYpKVAASKyTCklqLcEidHzwAUkgDWCjMgAe64AEkKsXODO1RSfki8A6tBkVIT4GgAyZABm+E4YAMJIbhJkJEwAxmQK4lIYmCRx0WRZQhqurMIh0BQZ0MAAylk1dbRJ1k48fILC3tDgIWTJYr7+8EA'>You would see the link here to demonstrate but it doesn't have spaces or anything and escapes from the side right off the page which is so dumb. but it's smaller. Trust me.</a><br><Br>Also, blood color matters for trolls initial hp and power now. Eventually once fraymotifs are a thing, low bloods wil use the engine for their psychic power."),K.a("6/7/17","I am the l337est asshole on the planet and have gotten custom urls to be 70% smaller. Just look at this relatively tiny fucker: <a href = index2.html?seed=4655190&b=%00%C3%BF%00C%C3%B2%7C%10J%24%24%0D%00%00%00%06%C3%B4%C2%A0%10P%2C%2C%0D%00%00%00%C2%A0%C3%B7)%10Q%16%16%0D%00%00%00)%C3%B8A%10E*%08%0D%00%00%00%15%C3%BA%C2%91%10T**%0D%00%00%001%C3%BA%00%10C%23%26%0D%00%00%00%5B%C3%B9E%10Q%10%14%0D%00%00%00%C2%BA%C3%B9%C2%A4%10V%12%12%0D%00%00%00%C2%98%C3%B7q%10E%16%16%0D%00%00%00%C2%87%C3%B9%C2%AD%10E%11%11%0D%00%00%00b%C3%B7%C2%84%10Y*(%0D%00%00%00%04%C3%BE%C2%BA%10K%05!%0D&s=%2C%2CElves%2CBoys%2C%2C%2C%2CAB%2CPuns%2C%2C%2C%2CTheater%2CTV%2C%2C%2C%2CBaseball%2CRap%2C%2C%2C%2CHeroes%2CPlaying%20Piano%2C%2C%2C%2CPuppets%2CJokes%2C%2C%2C%2CBoxing%2CInsults%2C%2C%2C%2CRobots%2CWeight%20Lifting%2C%2C%2C%2CConspiracies%2CRap%2C%2C%2C%2CArtificial%20Intelligence%2CScience%2C%2C%2C%2CCooking%2CBaseball%2C%2C%2C%2CReligion%2CRobots%2C'>Why do long urls try to escape to the side??? It's tiny, I promise.</a>.<br><Br> You will note that fully half the fucking size is custom strings like interests, so don't expect me to add many more other than maybe chatHandle.  Attempting to compress strings that small only makes 'em bigger tho, so that's about as tiny as we're getting. I also laid the ground work for a bunch more ReplaySession features, some of which are accidentally floating around alrady on the page, all undocumented and shit. "),K.a("6/6/17","<a href = 'character_creator.html?seed=1234'>The Session Replayer</a> finally lets you specifiy interests, including custom 'write in' ones. <a href = 'index2.html?seed=21475351&players=NobwRAhgzgDgpgYwC5gFxgMowguYA0YCANtFAPoB2EAtnugLIQCWAJgWAI4CuzATgGs04AGYQAbgHs+zJHABy3GgCM4fNACYAvoQAWLdegCMAZg77+AYUnFpaMAGIADC9cdmUACp8bxNEj5uOEJlW0lWa1tDRwA2Ixc4jmI4ESQACWlKNCNCGQBzXXTM7MJmSjk+OCgkI0sIOTzpAE97T0RdShtJPJbS8rUqpA06hub7AHUZJDK8937K6qN7AEEAITmKwY17ADEISgACHeZkZkksnXBoeGR7BjL2QhIyKlp6MCY2Dh5+IVRRCTSWQKJSqQwAdh0YAs0VM5gMkTs6AcAFYACwaBBGAAc7i8PmIflQYmIUGCYFCknCiOiDhEIlcTiSKSKfCyqDRuWYBVZ7JyYDKm0WIzgjT4LXQbQQHS6PQ2A2qw3qorG6GWCAgrDgNBO8oWNRW6z6QqG9gA0p0AO7JVh5PCXSCwRAoRgPDjPKAUah0O4sR5cXiCYRgMRSKYglRqNBoqEw+xwvQIrq09GYnF47y+NAkskhMIRZP2OkMtyEZKpDJstAmfn5QqV9kmTkC+aDWrKsUSsBSmW2OXGhVDEWd1rtTp93otk1LNVGqeD7boAAKPjyfFoOsoswd12drWYPqepE9rx9jD930DfwBYeBikjhmxsYM8bMiasheRjJcGYJRICQR5lSBZREWaJGDEMQ-mWLINtGThcjycEcgh876u2oziqO0rjt0k6Cguw6qmAljcMQSDcJUeptoa1GKrs+wHMsfAoDuTq3K6lD+h6XpvL6XyED8Qb-CGgLhveYL2GYz78K+8IfqByKpliuKlPiWbEhApLkpS1Kfo49KMsyFbFKgEGIfWpnmWhbZEVh6CTLIMx0UOHbET2uH9jZiwrNwSC6ECW4uYuYBrGAWgALpAA'>Check it</a><br><br>InterestCategories affect echeladder rung names, chatHandles, quadrantDialogue, rap content and skill and (in rare cases) how much people like you.  Oh, and having interests in common with your quadrant mates makes for a more stable relationship.<br><br>I also tweaked various simulation things, managing to dial the murderMode and grimDark rates way back without fucking with win or survival rates too much. It's suprisingly hard to balance shit.<br><Br>Oh god, I can't stop laughing. You know how you should totally sanitize your database input and shit? Well, obvs I don't have a database, but I sure as fuck had a text entry box that gets rendered to a web page (i.e. the interests). You guys made such beautiful html injection attacks on SBURBSim, so glorious.  Players had interests that were just shitty embedded youtube videos, shout out to <a href ='images/misc/fanArt/x2combo.png'>artificialArtificer</a> for letting me know. Looks like imma hafta fix that shit. If for no reason other than to make people be able to trust custom urls to not fucking rick roll them. Such a shame. It was a beautiful cinnamon bun."),K.a("6/5/17","I have once again done battle with mine ancient enemy: lively as fuck corpses. Turns out they were totally flirting up their quadrant mates. Or at least responding to the flirtations. I'm willing to believe that the corpses would even console their living Moirails who were flipping their shit about their dead diamond buddy.  That's how wack shit was.  But never fear, I have this on lock and corpses are once again relegated to merely leveling the hell up and being asked for one-sided romantic advice. <span class='void'>Oh, and rage related death shrieks and void hiding. Whatever. That shit is random as fuck and it's the best feature/bug.</span>You're welcome.<Br><Br>And I have added a shit ton of easter egg stuff, related to how NepetaQuest was improved. It revealed that AB has been stealth flipping her shit about certain types of special sessions, though. All reporting fake bullshit.  So I had to calm her robotic ass down before I could even BEGIN testing my new shit.<> <br><br>I've done a lot of little but cool things today, too. Armless prototyping is totally a thing now (well, technically fingerless but whatevs). OC Generator no longer racist against humans. Small bug fixes. Working on several big things at the same time, including a way to make urls for ReplaySessions way shorter. And hosting solutions for the site itself."),K.a("6/4/17","Bow before me puny mortals, because I finally fucking finished the quadrantDialogue engine. Characters will talk about their interests and their relationships, and get a bonus to their relationship if they actually have interests in common.  Moirails will also try to stop their palemates from flipping their shit. The dialogue is guaranteed to be exactly the right level of shitty, though I may make it less repetitive in future deploys.<Br><Br>Speaking of deploys, people have been reporting bandwidth issues every time I do a deploy lately. My assumption is that when I do a deploy, it invalidates browser caches for everybody, so suddenly you are ALL trying to download art assets at once and it's slow as balls with as many people as there are. <br><Br>I am looking into getting my own hosting (instead of bumming off my friend's purplefrog site). This should give me more control over bandwidth and speed and all that good stuff. I'm likely to start up a Patreon or something at that point though, to try to offset server costs. SBURBSim'll always be free, etc. etc., don't worry about it. And any Patreon or equivalent will be vaguelly generic rather than being all 'pay me for somebody else's intellectual property' "),K.a("6/2/17","quadrantDialogue is getting close to done, just a bunch of bullshit data entry.  <Br><Br>Dear sweet precious sweet sweet AuthorBot has a brand new chasis, alchemized courtesy of our resident Smith of Dreams, karmicRetribution.  They are both the best!<>c3<<br><Br>AB was pretty sick of just being my robo-doppelganger, so the new chasis reflects her actual role within the Sim:  Guiding Observers to interesting decisions/simulations, etc. "),K.a("6/1/17","12 days remaining to get into the [???] Hall of Fame, btw. <Br><Br>I'm still working on a bullshit dialogue engine, but it's getting close to the end. At this point it's just boring as fuck data entry. <br><Br> I ALSO decided to upgrade nepeta quest (holy shit, what could that be???) in a variety of ways. <br><Br>Also, posting a mini mini update to the Main Branch to try to encourage Google to stop bragging about crashing my damn sessions."),K.a("5/30/17","I've been working on a robust bullshit dialogue engine for players in quadrants with each other. It will be yet one more way Romance distracts from the Ultimate Reward AND will be a way for me to indulge in my sweet sweet love of AI conversations that ALMOST make sense. Yessss. <br><Br>Oh, and I finally decided to do something about the odd bug report that turns out to be a bullshit sequence of events like 'scratch the session, then let it combo, then do a yellow yard 3x in a row but i don't remember what i picked and then scratch the session again and it crashes.'  Crashes SHOULD theoretically print out whether each session was scratched, and what yellowYard choices were associated with it. I say 'should' because i deliberately caused errors as best as i could and saw shit play out right, but that doesn't mean it'll play nice with natural bugs.<div class='void'> And today was also the day I decided ABJ was a fucking sociopath.</div>"),K.a("5/29/17","Character creator/SessionReplay has gotten some mild upgrades. People seem to be using it to generate avatars for themselves, so I added a way to render everyone as gods, dream selves or regular players, as well as adding grimDark aura and murder mode slashes.<br><br>  Since you can now view trolls as god tiers, I also added a way to choose their favorite number (which influences their quirk AND their god tier wings)."),K.a("5/28/17","This weekend was spent finally going through with my promise to upgrade AB and the Rare Session Finder. You can now filter sesions by class and aspect. <Br><Br> Check 'Knight' and 'Blood' to show only sessions with a Knight of Blood in them, for example, or select both 'Knight' and 'Seer' along with 'Blood' to see sessions with EITHER a Knight of Blood or a Seer of Blood. I'll post interesting stats on tumblr, once ABs done looking through a bunch of sessions. <br><Br>This is basically the begining of my massive 'vaguely try to balance shit' initiative, before fraymotifs are fully rolled out. "),K.a("5/26/17","Today has been a day of bug fixes, which are boring, and laying out the new <a href = 'test_fraymotif.html'>fraymotif mechanic</a>, which is awesome.<br><Br>Also, main and experimental branches are likely to seperate soon, as the trickle of bug reports dies down. Once they seperate, all bug fixes will be on Experimental only. Thems the breaks."),K.a("5/25/17","Newly started Kismesitudes have a random chance of kicking off a celebratory rap battle. This is definitely an integral feature to SBURBSim, I think we will all agree.<Br><BR>Also, seems like enough people are using the Experimental Branch insteada the main one that I'll post an official main release. Even though the Character Creator/Replay Session thing is only Mildly Fucking Alpha, I'm not gonna consider things to be '3.0' until it's outta alpha entirely and has all the features I want. (And fraymotifs are totally a thing). <Br><Br>  New features for Main include (but are not limited to) shiny new backgrounds and icons, an upgraded rendering engine that is hella fast. The Replay Engine (aka Character Creator) is only 'Mildly Fucking Alpha' instead of Severely. Lots of the repetitive phrases have been given more variation, thanks to the <a href = 'credits.html'> ideasWranglers</a>. Probably a lot more. Read these newsposts going back a month or so.<br><Br><a href = 'https://www.reddit.com/r/homestuck/comments/6d9e66/sburb_sim_299_main_branch_update/'>Official Reddit Post for people to post comments/bugs/feature requests etc."),K.a("5/24/17","AB's CorpseParty now lets you view stats on class and aspect within the AfterLife, which is gonna be a pretty useful feature as I strive to balance this patchwork pile of glitches and whims.  Speaking of, there's some minor bug fixes and tweaks (corpses aren't allowed to counter attack anymore, for example) and the Mildly Fucking Alpha character creator has a full color picker instead of a drop down with like, only a dozen colors in it."),K.a("5/23/2017","Fuck, I LOVE it when the complexity of this simulation shows itself off. <Br><Br> I updated FreeWill events so that Time players are allowed to control themselves. But, the way freeWill works in the simulation, it turns out that pretty much only Bards and Princes of time are allowed to use it (everyone else doesn't have enough free will).  It pleases me so much that these 'Destroyer' classes just sort of naturally gravitate to places where they can makes effects with no real causes (I am flipping my shit because my future self told me to flip my shit because they were flipping their shit because they were told by a future self to....). Just. Fuck yes.<br><br>AAAND it turns out that the Character Creator is now ready to be 'Mildly Fucking Alpha'.  Created characters are sent over to index2.html, and the shareable URL for sessions with custom players in it includes the custom players as well.  Major supported features include scratches, combo sessions and yellow yards.  Players even re-generate their lands, chat handles and Echeladder rungs to suit whatever classpect you gave them. As time goes on, I'll add features to the character creator, and clean it up in general. Have fun :) :) :)"),K.a("5/22/2017","I am THOROUGLY unimpressed with past JR right now. What the hell was I thinking REMOVING ELEMENTS FROM AN ARRAY THAT I WAS CURRENTLY TRANSVERSING???  BLUH!  On a related note, Ultimate Riddle bullshit frequency has gone down as a result, and players actually getting to fight their denizen has gone up, with a corresponding drop in survival rate. BLUH. <Br><Br>On ANOTHER related note, post denizen quests are now more than a single sentence, thanks to the tireless efforts of the <a href = 'credits.html'>ideasWranglers</a>.<br><br>And hey, lookee here, a NONrelated note! MurderModes are WAY rarer now, and have been refactored to be actually sane (unlike their players). That should make up for the survival drop from denizens being more of a thing. Shit, wait, no, that makes it a related note. What the fuck ever."),K.a("5/21/17","Turns out AB has been reporting absolute bullshit for combo sessions, because of her extreme fetish for scratching sessions. <Br><Br> Turns out she would take a session with a sick frog, SCRATCH IT, and then send the scratched players into the new session, if they'd fit. This is very obviously not how things ACTUALLY work out, and so she has been upgraded. <span class = 'void'>Or rather, she's had yet another set of scratching privlidges revoked</span>  Sorry to anybody thinking that looking for combo sessions was confusing.<br><Br>I managed to improve rendering speeds by as much as a third today.  There is only one big obvious improvement to make left, and then I'll probably clean things up, balance a bit and give the main branch an update before I start work on fraymotifs. <br><Br>Holy shit, that last obvious thing improved rendering time by a FUCK TON. Good thing I decided to do it instead of deciding things were working well enough. "),K.a("5/20/17","It's come to my attention that Observers have already been using the Extremely Fucking Alpha character creator to shove OCs into.  I figured I'd help 'em out a little bit by throwing a costmetic upgrade at the thing. You can now choose hair, hairColor, horns, species and bloodColor. Have fun.  As always, you access the Extremely Fucking Alpha character creator by clicking 'Replay Session' at the top bar of any session. "),K.a("5/19/17","Void players have a rendering upgrade where they slowly fade from view as their power increases. Looks pretty dope.<Br><Br>And the Rage/Void upgrade has just dropped. Rage players get to do what Void players do, but visibly and Void players have some mysterious bullshit going on that MAYBE you'll get to see. I'd expect a strong enough Light player to be able to help out."),K.a("5/18/17","Looks like the rendering engine is ready for live again, which means that the Experimental branch will see these newsposts. Fucking sweet.  I have reduced rendering times pretty dramatically, and will still bug and fuss and meddle to fruther reduce them.  I expect there to be some bugs, mostly of players rendering in a state they are not actually in.  If the Maid of Doom's Corpse looks like a person and not a corpse, we have problems.  Let me know. <Br><Br>  I did a lot of balance shit while also redoing the rendering engine, like severely nerfing luck for strifes (too many black kings one shot themselves because of a  lucky player)"),K.a("5/17/1/7","A side effect up upgrading the rendering engine is that I've finally getting around to standardizing the different ways in which player states can change. Before now HOW you reached god tier could effect exactly what stats you ended up with when you revived, which was never my intent.  Now that things are centralized, it's way easier to debug.  To celebrate, I gave god tier players a massive health boost when they first Ascend, as well.  <br><br>Also, enough of you guys have asked about a <a href = 'https:,//discord.gg/4czh3nB'>Discord Server</a> that I went ahead and spent an hour or so setting one up with aspiringWatcher. I expect people to use it to chat each other up about weird sessions, submit bug reports and feature requests and ideas in general."),K.a("5/16/17","It has come to my attention that certain stupidly long sessions are flirting with browser memory limits. <div class = 'void' > If sessions are flirting with memory limits, am I auspitizing between my session and browers memory limits?  Might not count. I'm DEFINITELY taking my sessions' side over the browsers' and I think you'e supposed to hate both your side leafs equally.   </div> And sessions have always rendered stupidly slow. So...I'm going to buckle down and give the rendering engine an upgrade. I have a solid idea for an improvement, but it's gonna take me awhile. So, expect me to disappear for a day or two (hopefully no more???) "),K.a("5/15/17","So, in trying to explain to someone how karmicRetribution gives me art assets, I realized that they are sort of the middle leaf between me and good taste.  All semi-annoyed 'No. Stop that. Just...Here, let me do it FOR you' with my shitty shitty artistic sense. KR refuses to let me keep hurting good design.<font class = 'void' color='white'>You just know that JR c3< KR c3< Good Taste was meant to be because I was Explaining the Joke (tm) to them and half-jokingly sent a 'c3<' symbol and they responded back with that fancy ASCII clubs symbol. You know, &#x2663. I nearly died laughing. </font>  On a similar note, AB and ABJ have their own backgrounds on the Rare Session Finder and Rare Session Finder Junior. <Br><Br>Coding wise I've been upgrading the queen events, doing a shit ton of bug fixes and am midway through the Madness upgrade for Rage. "),K.a("5/14/17","Some of the more repetitive shit has been upgraded.  Writing snippets (see the <a href = 'credits.html'>Credits Page</a> ) have been added for things like dream quests, mayor quests and random bullshit sidequests.  Dream and side quests have also been modded to be more modular as well. Derse dreamers will find the HorrorTerrors a bit chattier, and Prospit dreamers will suddenly notice the contents of Skaia's clouds occasionally, as well.<br><br> I'm gonna do a bit more cosmetic updates, implement 'madness' kinda shit for Rage and then maybe...work on fraymotifs? ABs upgraded enough for work on them, I think, and I can finish upgrading her once fraymotifs start to be a thing. <br><br>Oh yeah, and Doom players are now powered by their own deaths as well.  Their bad luck tends to be wiped out with death, and they get stronger. You know...assuming they revive. Players they revive have similar benefits. Their ghosts should be pretty strong, too. Narratively, it's cause they ALREADY met their Doom, right?"),K.a("5/13/17","Sprites can join their players for Denizen Minion and Jack fights, and seem to raise overall surival rates by a solid amount. A BUNCH of minor fixes have been ran through, including a slightly better GodTier judgement system (you can no longer, for example, die from a regular goddamned enemy and have it be judged 'Heroic'. And should a denizen manage to kill a GrimDark GodTier, it'll be judged as 'Just'. Stuff like that. ).  <br><Br>A <a href = 'credits.html'> Credits</a> page has been added to reference everybody who has helped out, from submitting bug reports all the way to brainstorming ideas with me.  <br><br>Oh! AND I implemented 3/4 of the mechanisms to prevents fights from taking too long, including (but not limited to) a mechanism by which players and doomed time clones can show up mid fight to help out.  Look at all that fucking coding I got done. <Br><Br>Now, I just gotta go back to finishing upgrading AB and...maybe...maybe I can finally implement fraymotifs???  And then, that'll be the entireity of the new battle system, so I can give everything a 'final' balancing, and focus on the character creator. BTW: early conclusions from AB's Corpse Party: The Sprite Prototypings are HELLA OP and make the Jack/Queen/King fights way too deadly. Hopefully the fraymotifs will counteract that. In the meantime I've nerfed the value of the worst prototypings."),K.a("5/12/17","Holy shit, yeah, gonna dial back the passive classpect effects down a bit. AB's new features are showing some bullshit things happening.  <br><br> I also decided that 'rocks fall, everybody dies' if the post-reckoning boss fights go on for too long, especially after an Heir of Doom/Thief of Life duo took advanatage of the afterlife for a 10k turn fight extravaganza. <a href = 'https:,//jadedresearcher.tumblr.com/post/160588958869/i-officially-hate-the-heir-of-doomthief-of-life'> Read More On Tumblr</a><br><Br>  The newspost page also has amazing new KR provided backgrounds as well, and they are super amazing. If you can't tell (or if you're in the future where they are something else) my side is bits of scrambled code from my YellowYard stuff, and the AuthorBot's side is bits of scrambled code from the Rare Session Finder. And on the main page it's a combo of my green code and KR's dream stuff."),K.a("5/12/17","In addition to minor bug fixes and getting the CorpseParty set up, I am prettifying the site up after KR gave me some new assets/counsel on how to use 'em."),K.a("5/10/17","Before I can (finally) work on fraymotifs, I'm buckling down and working on balance. Things LOOK balanced from my 'hardly ever looks at ACTUAL sessions' Authorial position, and AB assures that me that sessions in GENERAL are going smoothly...but, I've had some complaints about how things go from specific Observers. (<a href = 'http:,//www.smbc-comics.com/?id=2560'>See this SMBC comic for why that can be a thing I don't want to get caught doing</a>) <Br><Br> So, I'm gonna spend the next day or two giving the AuthorBot some MAJOR upgrades. First up will be 'CorpseParty' mode, where we can check out the cause of death and class/aspect of every ghost in all found afterlifes. Is something killing players way too much? Are certain classes or aspects getting the shaft when it comes to the dead kid pile (you know, besides time players. Sorry guys, but that is literally your super power. Time is dead kids.).  Next will be the ability for the AuthorBot to filter session results by classes and aspects. That way we can check out if certain types of players are way too OP (i'm looking at you, Light players) or dangerous (Rage players) and I can figure out how to tweak them.<Br><Br>If you're wondering what I worked on today. Well. Whoof want to know?  (Seriously, like, ~20 people on the planet so far have earned the right to see the fruits of today's labor. Guess more people better figure out what that [???] means, huh.) "),K.a("5/9/17","I spent the past couple of days working on subtle shit that nevertheless broke everything so I couldn't do a deploy until I was done. Sprites are completely reworked, and give stat boosts (different for each sprite) to ring wearers. I'm preparing for them to help players out in the early game, and have the structure in place for Tier2 sprites. You can expect sprites to be more custom shit going forwards, too.  I also redid the 'flipping your shit engine', which hasn't been upgraded since v1.0. I probably did other stuff...oh yeah, fixed leveling....lots of little changes. I expect the experimental branch will be back to being wonky.  Fraymotifs will be a thing as soon as I'm done preparing sprites."),K.a("5/7/17","Okay, hopefully this'll be the last drop where the experimental and main branches are the same. In addition to bug fixes (how the hell were yellow yards so broken??? Apparently I managed to ONLY test them for sessions where they sucked so much they didn't defeat any denizens?) I actually remembered to finish the afterlife shenanigans I had been meaning to do. Knights and Pages of Life and Doom finally get to cash in their promises of aid (awesome ghost powers during a fight OR a free revive mid fight) in addition to Heir/Thief/Maid/Rogue ghost powered revives mid battle being a thing. <br><Br> The end result is we now have the LUXURY survival rate of over 70%. We haven't had that since I started all this refactoring bullshit. I wonder how bad that'll plummet once I start letting sprites super power the jack/queen/king?"),K.a("5/6/17","Alright, the main site and the experimental site should be at the same point in time, at least for now.  For all you guys who have been following only the main branch, we now have stuff like a header with links to both branches,  Luck Events, Free Will Events, an actual fucking battle system...um...shit I know I did other stuff. Oh yeah, that huge fucking corruption mechanic. Good times. We ALSO have the extremely fucking alpha Replay mechanic (i.e. the character creator) which was the whole POINT of me vanishing into the experimental branch for a month. But after allowing class and aspect to be customized, I realized there wasn't a whole lot of DIFFERENCE between players, so I went on an epic quest to remedy that. Next on the list (for the experimental branch) is fraymotifs, overhauling the prototyping mechanic and ....probably allowing the YellowYard to undo deaths that happen in battle. "),K.a("5/5/17","Holy shit, would you look at that. I SAID I would do denizen fights next and then I DID denizen fights next! No distractions, no last minute 'great ideas'. It's a Mayo day miracle. <br><Br>So yeah. Next was gonna be fraymotifs, which I am super looking forward to, but I realized it's been about a month since the main site has had an update. So, I'm gonna try to stabilize things as much as I can and push a mini update out to the main site. Should be tomorrow sometime. I've added a link to the 'old' branch as well now, just in case stuff isn't quite as stable as I'd hoped. It'll be hella neat, in any case, to compare sessions across old, main and experimental. I pulled version numbers completely out of my ass, btw. We are 'somewhere before the fabeled 3.0 release'. "),K.a("5/3/17",":\\  Why was enabling absconding such a hard thing to do? It got so fiddly. Bluh.  Next up will be denizen fights and associated stuff. THEN, I can finally buckle down and get my fraymotif on."),K.a("5/2/17"," Turns out if I make Jack too lucky, he finds a bullshit weapon WAY too frequently and then procedes to drop the overall survival rate to 27%, the rapscallion. Oh, hey, in other news I have the bare-bones new battle system ready. It's hella repetitive, for now, but I plan on having simple fraymotifs and special events (like reviving players or using ghost pacts or whatever). <br><Br> Finishing up the battle system (which includes having more landQuests) MIGHT be the last major feature I do before I buckle down and finish working on the character creator. There's plenty more claspect stuff I want to do, but what I do have is pretty solid in terms of showing off what changing a character DOES to the sim. <br><br>Also, it turns out YellowYards/GroundHogDays were hella broken, and I 100% blame the new afterlife system. Since it's transTimeLine, the ghosts from the first playthrough could interfere with the second playthrough. I've tidied up my time loops and now ghosts are banned from interacting with a session until it divurges from the timeline that killed them.  It mostly works, but I'm not gonna sit down and do major testing until everything stops being half-finished. <font class = 'void' color ='white'>Also, happy birthday to me.</font>"),K.a("5/1/17","After spending two straight days ripping apart the old 'battle' system and adding a new one, I'd hoped I'd be able to push an experimental build out tonight. No dice. It works (mostly) without crashing, sure, but it drops the players survival rate down to 27 goddamn percent and I'd feel like a dick letting that out into the wild. Hopefully once I add aspect powers the players will get better at the game. If not...guess I'm nerfing jack. "),K.a("4/29/17","Afterlife is mostly done.  The basic gist is that different classes of Life and Doom players can gain power, revive players, enable dream bubbles and store ghost power for boss fights(coming soon).  I decided to let Life OR Doom do it because ghosts are a source of 'life', but are also definitely 'doomed'. AND I wanted afterlife stuff to be more common than it was with just life players. Dream bubbles are mostly just bullshit, but they do allow ANY player to gain some ghost wisdom, not just players with a Life/Doom guide.  Ironically, adding all these ways to level up and revive has DECREASED overall player surival rate to just 63%. I imagine it's because it's letting the murderous assholes live long enough to REALLY cause problems. Once I'm done refactoring everything I'll have to sit down and just tweak shit 'till I get an overall rate of thigns that makes sense.'"),K.a("4/27/17","Why is past me so wise and forward thinking? PastJR was all 'holy shit no way am I going to let the AuthorBot play around in scratched sessions'.  CurrentJR was all 'derp, it sounds like a good idea! how ELSE will I debug my new half-implemented afterlife bullshit???'.  Guess who was right?  BLUH.  It took hours. Goddamned HOURS.  AB was wandering around aimlessly, scratching the same session multiple times, and other fuckery. For a while, if the players were all dead, she would apparently hoof it over to the Beat Mesa equivalent and scratch the damned session HERSELF just to break in her new features. Then she'd come back and report 'oh yeah, i totally found a scratched session and here's what happened', and I'd go over and find a pile of original player corpses and no scratched session. Fuck.  I THINK I have finally convinced her to just...let the players scratch it their own damn selves. I haven't seen her deviate from reality by too much in awhile. Bluh.  <br><Br> In other news, hey, I got distracted and decided to implement an entire godamned AFTERLIFE system instead of the next feature, which was going to be...*checks*...boss fights apparently. And also exile stuff. Meh,the afterlife will be cool, I promise."),K.a("4/26/17","Guess who has two thumbs and just realized that Heroic and Just deaths have basically never worked as intended. It was me. All along. I fooled you. So. Yeah, that's working right now. AB can also report back on any Just/Heroic deaths she sees. <Br><Br>Also, somebody on Tumblr asked if I could make a random character generator and I was all 'Oh yeah, I totally took away the link to the <a href = 'oc_generator.html'>OC Generator</a>'. So, that's a thing in the navbar, now. The OC Generator was my proof of concept for SBURB SIM 2.0, basically letting me see exactly how hard it was to render random characters. Word of warning, the quirks are WAY simpler in that thing than SBURB SIM.  Otherwise it would just be paragraphs upon paragraphs of quirks listed out.  Mostly subtle shit like 'do they use ing or in, wanna or want to', etc. etc. "),K.a("4/25/17","Free Will is mostly a thing now. I might tweak it, or add some minor events, but I'm really happy with it as is.  KR even noticed how nicely it works with the new Corruption mechanic. GrimDark players may refuse to do their SBURB tasks, but now there are ways to FORCE THEM.  KR personally recomeneds the following session:  <a href = 'https:,//drive.google.com/open?id=0B-uS7ImZMoISRXV2b1BaZUcxVlk'>(saved into PDF format for posterity)</a> <br><br>Next on the docket is re-doing boss fights, as well as Exile influence for players with particularly low free will.  After that I might double down on making the character creator more than bare bones. Hell, I might get fancy and even let YellowYards work for the damn thing. And turn off my authorial stat graphs. Those things are a crime to good taste everywhere."),K.a("4/24/17","Still working on free will events in the Experimental Branch. Players can manipulate others to kill each other (either through guile or game powers). If a player is marked as a claspect that 'knows about SBURB' they can also force (through nagging or game powers) the ectobiologist or space player to do their goddamned jobs and not doom everyone. Characters being controlled can also escape from the control (usally with the death of their controller, but they can just will power out of it, too). <Br><Br> In case it wasn't clear, all these events are using the freeWill mechanic that Mind and Time players influence (mind players mostly increase it, time players mostly decrease it).  I'm still working on further events (like choosing to suicide via god tier).  After that, I will do the opposite and make events specifically about LOW willpower (such as doing whatever your exile tells you to do. Oh, and Exiles will totally be a thing). So, lotsa changes coming up."),K.a("4/22/17","Redead-ITA ITA inspired me to help AB not get stuck in crashed sessions.  In retrospect, it was kind of a dick move of me just leaving her to her own devices if she gets lost.  Now she's able to come back and report on the bug.  Sessions themselves have custom text if they crash, instead of just...stopping.  I also gave GrimDark players an actual point in the session, they can now work to try to CAUSE a crash like a bunch of assholes. Don't they know how hard it is to KEEP this glitchy piece of shit from crashing?<br><br>  Still chugging along doing free will scenes, btw. They are much more work than luck, because they are ALL about choices and alternatives, not just picking something randomly outta a list."),K.a("4/21/17","karmicRetribution convinced me to improve graphics in a variety of ways, including providing a header image for each page. It'll only show up on the <a href = ''>Main Page</a> (which is now a thing) of the site for the regular branch, but'll be every page for the Experimental Branch. Once they merge, they'll be the same. They'll have slightly different images, though. The main branch is the 'alpha' timeline, cause it's less of a buggy piece of shit.<Br><br>Actually sim related: I'm working on implementing FreeWill stuff (that stat mind and time players modify). It's not at the point where it's actually a thing in the sim yet, though I wonder if it will show up as much as Luck?  Bluh. I'll leave calibrations for when the whole refactor-fest is done.<br><br> I have stayed up way too late programming ways for various claspects to mind control people into murdering all their friends. I have probably fucked over my own dreams."),K.a("4/20/17","Still heavily refactoring how claspects work, but made initial quadrants be a thing and platonic relationships more common.  Hope players also don't directly modify trigger level, but DO make players lesss likely to waste time flipping their shit.  <Br><Br>Lucky (and unlucky) events are now a thing. "),K.a("4/18/17","I am HEAVILY refactoring the experimental branch. So, since I'm fuck deep in code, now is the best time to suggest features. I started a reddit thread for that purpose <a href = 'https:,//www.reddit.com/r/homestuck/comments/666hhu/sburb_sim_in_the_process_of_refactoring_want_to/'> here</a>.  Basically, anything I lay the foundation for NOW will be a million times easier LATER.  Obviously I won't do everything suggeseted (and am likely to not implement ANYTHING exactly as submitted, too).  But, if you wanna join the brainstorming efforts, you can head on over there.<br><br>One interesting idea that has already shaken out is a combo between keiyakins, and MoreEpicThanYou747 where I'm toying with having First Guardian shenenigans that can cause time paradoxes. "),K.a("4/16/17","Will avoid updating the main site (and instead update the <a href = 'http:,//purplefrog.com/~jenny/SburbStoryExperimental/index2.html'>experimental branch</a>) while I'm heavily refactoring the sim so that claspects matter more. Sessions are SEVERELY mutating as I do this, so heads up. Once I update the main branch all the links are gonna go to different sessions worse than usual."),K.a("4/15/17","The shittiest rap engine in all of paradox space is now live. Players will occasionally try to stop themselves from going full on murder mode by having a rap battle.  If sick fires happen, they calm down somewhat, else they get their murder on."),K.a("4/14/17","AuthorBot has a new...sibling? Child? Whatever.  Hey! It's...<a href = 'rare_session_finder_junior.html'>AuthorBotJunior</a>!  Guaranteed to be super fast, she only looks at session initial conditions and reports back on them. She's like a Ninja/Scout...thing. While AuthorBot is like the Lewis and Clark of finding sessions. All making detailed notes and doing things right. <Br><Br> Right now you can only filter ABJ's results by number of players, but I do plan to upgrade her with additional filters eventually.<Br><Br> Also: Yes, I could abbreviate her ABJR, but that's just confusing cause it sounds like AuthorBotJadedResearcher. My initials are dumb.<br><Br>Edit: !!! ABJ and frozenLake just found what I am officially dubbing an 'Incestuous Mobius Multi-Session Reach Around '. Check my <a href ='https://jadedresearcher.tumblr.com/post/159574309099/incestuous-mobius-multi-session-reach-around'>Tumblr</a> for details, I guess. "),K.a("4/13/17","Okay, like, on the one hand, I've been wanting to do the character creator for weeks now.  On the other hand, the opportunity arrises to make shitty AI rap battles be a thing for some murdermodes. I am only human. Also, four people have made it into the Hall of Fame for that new mysterious page. ALSO also, today is the day that I realized that AuthorBotJunior should totally be a thing."),K.a("4/12/17","Although it would have been dope as shit to have the Character Creator ready for 4/13, that wasn't in the cards. Instead, what could that mysterious <a href = 'index_pw.html'> link</a> on the main page be?"),K.a("4/11/17","DestroyerTerraria pointed out that GodTiering via QuestBed was so rare as to be unimplemented, so I increased the odds of a player GodTiering BEFORE somebody gets their Corpse mack on. I also let AuthorBot find sessions by questBed or sacrificialSlab to confirm the rarity of both events. Looks like ~20% of all sessions have at least one god tier in them? Maybe I should fiddle with destiny to increase those odds... Of course, I don't want to alter overall surivability. I wonder how much a god tier contributes to party survival rate?  Let's see, we dropped to a 70% survival rate when I increased the odds of QuestBed vs Sacrificial Slab... (that's from 85%)<br><br>Huh. Fun fact: I have WAY less power over this simulation than I thought. I can fiddle with godTierDestiny all I want, but ultimately it's Jack (or Murder Mode Players) who decide whether or not corpses get produced before the reckoning. Even giving 90% of players a godTierDestiny doesn't change survival or even the rate of god tiering very much. Bluh. All it does it increase the uselessness of 'They appear destined for greatness' messages. (Well, and, I mean, it increases the raw NUMBER of God Tiers, I'm sure, but I don't care about that. I wanted to decrease the number of sessions with no god tiers at all.) I'm gonna dial it back down to 50% destiny from 90%. And NOW you have a taste of why this simulation is so freaking hard to steer. So many moving parts."),K.a("4/10/17","Bug fixes, including the easter egg sessions, and small new features, like sprites helping out during landquests."),K.a("4/5/17","With everything in my TODO list, why the hell is SHIPPING GRIDS and TRICKSTER MODE the stuff I am obsessing over?"),K.a("4/3/17","Pushed out a LOT of bug fixes after Reddit and Tumblr swarmed all over the official release, finding all sorts of weird shit.  And put a disclaimer before the GroundHog shit explaining that 'here there be dragons' and the weirder you make the session the more likely there is to be glitches. Also added a couple of new features, the ability to kill a player before they enter a session, and the ability to force a frog prototype (good idea props goes to frozenLake).  May as well make this glitch pile taller."),K.a("4/2/17","The main site is officially being upgraded to 2.1.  Features include, but are not limited to, interactive time shenanigans in the form of the Ground Hog work. Lots of bug fixes, too. New art assets. The works. A good session to check out is: <a href = 'index2.html?seed=221777'> this one</a>. "),K.a("4/1/17","GroundHog day is pretty stable now. Time shenanigans even work with combo sessions, and THAT produced some hilarious bugs. Pretty much the only feature left to implement before I declare this main site worthy is undoing your own attempts to undo things. THEN I can work on the real stuff. Like shipping grids. "),K.a("3/31/17","Been working on getting the GroundHog release stable enough for the main site. Getting close."),K.a("3/28/17","Working on redesigning the rare session finder to be even more useful. In the meantime it's going through growing pains and looks different."),K.a("3/27/17","Operation: Spider dance, aka Operation: Ground Hog's Day, aka Operation: I AM THE GREETIST is a go. Barely tested time shenanigans are now available on the experimental site. I produced my most spirited L337 SCRAMBLE yet, and hop up to the next GOD TIER, achieving the illustrious rank of PROGRAMMING PRAGMATIST. "),K.a("3/27/17","I spent the weekend working on my secret new feature. You can read about it: <a href = 'https:,//jadedresearcher.tumblr.com/post/158869175164/i-have-never-laughed-so-hard-at-a-session-i-am-so'> here</a>. If you can't get to Tumblr or are impatient: Ground. Hog. Day."),K.a("3/24/17","I'm working on a super secret type of scene at this point, and have vague foreshadowing  to it in sessions that it applies to.  I also helped karmicRetribution throw together a fancy background for the Art Newsposts on the site (I did the coding, not the art)"),K.a("3/23/17","I branched the site into <a href = 'http:,//purplefrog.com/~jenny/SburbStoryExperimental/newsposts.html'>Experimental</a> and <a href = 'http://purplefrog.com/~jenny/SburbStory/newsposts.html'>Regular</a> versions. This should hopefully keep me from messing with shareable URLs more than once a week. I'm also working with karmicRetribution to integrate with better hair designs, and get an artist newspost page up and running. "),K.a("3/22/17","I got some feedback that it wasn't clear that the players have the option to partner up with Jack (and can decide to betray him later, too).  I decided to add topic bubbles to dialogue to emphasize that it's not all the same stuff.  Sometimes it's about the game, sometimes relationships, sometimes Jack.  I also re-enabled the rainbow glow for God Tiers (long story).   "),K.a("3/22/17","Okay. So, newspost numero uno.  I figured I needed a better way to communicate to you guys, and the one centralized location is here, on the actual site itself. Any newspost before this is retroactively dated.<br><Br> And I absolutely could not help myself: I love the AuthorBot so much that I gave her a space to make her own newsposts.  But of course, she needs to be able to say her own shit, right? So I gave her a (admittedly pretty shitty) ai.  <br><Br>But her whole thing is finding rare sessions right? If she doesn't do that, she's not the SessionFinderAuthorBot, she's just some random newsbot or some shit. So I decided her AI would be able to comment on all the rad sessions she's finding... <br><Br>Okay, long story short, I added the ability for her to say something about each session she finds (on the session finder page as well as here) I went to so much trouble. All for a barely noticeable kind of joke on a page most people probably ignore? Yes."),K.a("3/21/17","I spent a couple of days working on a major feature: combined sessions. If players have a sick frog, then the code checks their child session to see if the remaining living players can fit into it (max of 12 players in a session at a time). If so, they go on over.  Their child session is a real session that has it's own fate, and these alien players are disrupting that. When they join the session, it prints the ID out, so you could put that in a url to see how the sesion was supposed to go. Sometimes the alien players help, quite often they make things way worse. <Br><Br> These sessions are pretty rare, so I ALSO wrote the AuthorBot over there to look for rare sessions and report back."),K.a("3/20/17","Before this day I was mostly working on debugging and tweaking sessions. I enlisted you, the fans, to help me find rare sessions.")]
for(t=0;t<220;++t){s=p[t]
r=s.a
q="<div id = '"+r+"human'><hr> "+("<b>"+r+":</b> ")+J.dY(s.b,"</div>")
r=document.querySelector("#newspostsMain")
r.toString
J.ch(r,"beforeend",q,C.f,null)}},
j9:function(){var t,s,r,q,p,o="3/23/17"
$.eJ=!1
t=[K.a("8/5/17","Our newest staff member gets an avatar as well. Arise, Witch of Void!<Br><Br><img src = 'images/paradoxLands.png'>"),K.a("7/24/17","Hey, I keep forgetting to update this thing! Most of what I've been working on lately has gone towards adding fan classes. Head over to <a href='character_creator.html'>the character creator</a> if you want to check them out."),K.a("6/28/17","A big shoutout and thanks to everyone who contributed art for the <a href='land_of_rods_and_screens.html'>Land of Rods and Screens</a> There's a lot of very weird, fun, and downright silly stuff in there. It's crazy-awesome that our little project here has such an amazing community already!<br><Br>Speaking of which, I have a favor to ask. I need photo reference for what people in High School are wearing. (That's students age 14-18 for the non-Americans.) I'd love to see all walks of life, dressed up, dressed down, you name it. Turns out it's surprisingly hard to find examples of actual people rather than fashion models and TV stars. Faces aren't necessary, just clothes. You can send photos to karmicRetribution001@gmail.com or thru private message on our Discord. Please don't leave me to source all my clothing from Seventeen and Teen Wolf!"),K.a("6/13/17","In honor of the best troll's birthday, I drew a little chibi of him. If you want to get your hands on the full-size inks, I've posted them as a backers-only post over on our new <a href = 'https://www.patreon.com/FarragoFiction'>Patreon</a>.  You will always be able to see my work here on Farrago Fiction/SBURBSim, but bonus content may get posted there first, or in a higher quality, as a thank-you for those who choose to be our patrons.<br><br><img src = 'images/misc/Karkat_Color.png'>"),K.a("6/08/17","If the AuthorBot gets her own class, then ABjr, should as well, right?  But I'd consider ABjr a Scout rather than a Guide, since she just goes out to find shit then wanders off without explaining anything. And occasionally lurks ominously in the bushes giggling at other people's misfortune. Or something like that. <br><Br><img src='images/authorbot_jr_scout.png'>"),K.a("6/02/17","Sometimes I just make stuff because jR wants it. The AuthorBot has earned a more independent identity, so now we have an official SBURBSim god-tier outfit for the Guide class. Go check out her page if you want to see it. <br><Br>There's also a couple of new secret images, if you can find them!"),K.a("5/20/17","I look at a LOT of sessions. Not as many as JR or AB, but still. And a good amount of the time, I'm actually skimming for specific scenes, or just tying to gauge the overall tone of a session. I thought it would be nice to have some graphical indicators of what each scene is about, and break up the text a bit more. So I made a bazillion tiny icons for different types of scenes. Some of them are only ever going to show up in the rarest of sessions, some are omnipresent.<br><Br>A couple are even animated. :wonk:"),K.a("5/12/17","Booyah - Check this shit out! jR has helped me implement a major visual overhaul for the site. Nifty backgrounds for most pages should be in place. Readability should be improved, and an overall more polished look might even convince people we know what we're doing!"),K.a("5/5/17","It just so happens that I have a fresh masterpiece for you, hot off the canvas and on to your computer where it will sizzle your eyeballs. Screwing with ghosts now comes with sweet special effects! Also, I am told that the main branch will soon have its header in place.<br><Br>PS: Dreambubbles and the afterlife are now a little less 'pediatrician's waiting room' and a little more 'unfathomable space outside of time.''"),K.a("4/21/17","Hey, look at that, an official site header! So fancy! That shit is a fucking symphony on my retinas."),K.a("4/17/17","We are up to 60(!!) hairstyles, including all of the canon characters, even if I had to redraw hair for the ones that sucked. That's going to be all the hair for now - I'm going to move on to other items!"),K.a("4/14/17","<a href ='index2.html?lollipop=true'>TRICKSTER MODE ENGAGE!!!11!</a>"),K.a("4/13/17","Happy 413! I tried to finish out the hair for all the dancestors, but.... Kurloz. Seriously. His hair is too big to fit on the canvas. For NO REASON. He's not the Grand Highblood yet! I threw it out and made new hair that better reflects his talksprite. Anyway, I should be able to finish the rest soon. Did you know there are more than 50 hairstyles in the system already? Sheesh."),K.a("4/5/17"," Ugh tvros your hair is so ugly<Br>ur head's not even round<Br>look at this bullshit:  <Br> <img src = 'images/tavroshead.png'>"),K.a("4/4/17"," Muahahaha! Finally I have finished updating all of the existing sprites for hair and I can start adding new ones."),K.a("3/31/17","Spent today chasing down visual bugs and eating them like a hungry baby dragon. Also banging my face against a scaling issue on the babies that was probably my fault in the first place. I standardized the size of all the rest of the images, but not the babies. Because I'm an idiot.<Br><Br>PS: Hyperrealistic grimdark flames are the best idea I've ever had."),K.a("3/28/17","Here's some proper Dream jammies for all you ungrateful bastards on Reddit."),K.a("3/28/17","Finished fixing up another handful of the worst hairstyles! jR figured out how to get the corrections working in the main branch as well, so you should all be able to see them."),K.a("3/27/17","Death by stabs now includes a knife in the corpse, courtesy of the <a href='http://www.mspaintadventures.com/?s=6&p=002228'>Midnight Crew</a>."),K.a(o,'There are currently 35 hairstyles. For stupid reasons related to my perfectionism, fixing up the hair sprites takes longer than any other sprite part, even the clothes. The few that are finished to my satisfaction are loaded into the <a href="http://purplefrog.com/~jenny/SburbStoryExperimental/newsposts.html">Experimental</a> branch. Making the images for this page has nothing to do with the delay on those, shut up."'),K.a(o,"Why did I spend several hours drawing blank-faced babies in MS Paint?<p><img src='images/Bodies/baby.png'><p>BECAUSE BABY LEGS DON'T WORK THAT WAY, HUSSIE.<p>ahem.<p>Anyway, I want to show off my baby sprites at full size, so you can marvel at their little toes and stupid fingers.<p><img src='images/Bodies/baby1.png'><br><img src='images/Bodies/baby2.png'><br><img src='images/Bodies/baby3.png'>"),K.a(o,"Cool, I get my own page!")]
for(s=0;s<22;++s){r=t[s]
q=r.a
p="<div id = '"+q+"human'><hr> "+("<b>"+q+":</b> ")+J.dY(r.b,"</div>")
q=document.querySelector("#artist_newspostsMain")
q.toString
J.ch(q,"beforeend",p,C.f,null)}},
dR:function dR(){}},K={
a:function(a,b){var t=new K.cM(a,b)
if($.eJ)t.b="Who is Shogun??? <div class ='strikethroughStuff'>"+b+"</a>"
return t},
cM:function cM(a,b){this.a=a
this.b=b}},F={
hp:function(a){if(a===C.M){window
return C.e.gbf(C.e)}if(a===C.v){window
return C.e.gbE()}if(a===C.N){window
return C.e.gbm()}return P.iV()},
aI:function aI(a){this.b=a},
cK:function cK(a,b){this.a=a
this.c=b}},O={
j6:function(a){var t,s,r,q,p,o,n,m,l,k,j=null,i=N.eL(),h=P.eR("(href|src) ?= ?([\"'])(?!https?:)")
a.toString
a=H.je(a,h,new O.dU(i),j)
h=document
t=h.querySelector("#navbar")
t.toString
J.ch(t,"beforeend",a,C.f,null)
if(O.iX("seerOfVoid",j)==="true")P.hg(new O.dV(),u.P)
s=new P.bt(Date.now(),!1)
if(H.ea(s)===4&&H.e9(s)===1)J.ez(h.querySelector("body")).H(0,"voidbody")
r=H.ea(s)
q=H.e9(s)
p=C.b.h(H.eO(s))
o=C.b.h(r)
n=C.b.h(q)
if(r<10)o="0"+o
if(q<10)n="0"+n
m=p+o+n
t=P.bf(m,j,j)
l=new A.cP()
l.a=t==null?C.F:P.hZ(t)
l.bt()
t=l.a.ac()
k=u.a
if(t>0.99)k.a(h.querySelector("#today")).href=C.a.I("../",i)+"dead_index.html?seed="+m
else k.a(h.querySelector("#today")).href=C.a.I("../",i)+"index2.html?seed="+m},
iX:function(a,b){var t=P.eY().gaD().n(0,a)
if(t!=null)t=P.dB(t,0,t.length,C.m,!1)
if(t!=null)return t
return null},
jg:function(){var t,s,r,q=document
J.ez(q.querySelector("body")).H(0,"voidbody")
t=new W.ai(q.querySelectorAll(".void"),u.T)
for(q=new H.a8(t,t.gj(t));q.l();){s=q.d
r=s.style.display
if(r==="none"||r.length===0)O.jc(s)
else O.iY(s)}},
jc:function(a){var t=a.style,s=u.j.b(a)?"inline":"block"
t.display=s},
iY:function(a){var t=a.style
t.display="none"},
jd:function(a){var t,s,r,q="LIFESIMFOUNDCARDS"
if(window.localStorage==null){P.ev("saving isn't possible....you don't have local storage")
return}try{if(window.localStorage.getItem(q)!=null){t=window.localStorage.getItem(q)
s=J.h2(t,",")
if(!J.h_(s,a))window.localStorage.setItem(q,H.f(t)+","+a)}else window.localStorage.setItem(q,a)}catch(r){H.K(r)
P.ev("Saving isn't possible....you don't have local storage")}},
dU:function dU(a){this.a=a},
dV:function dV(){},
dT:function dT(){}},A={cP:function cP(){this.a=null}},N={
hr:function(a){var t,s,r,q,p,o,n,m,l,k=J.aq(a),j=new W.ai(document.querySelectorAll("link"),u.T)
for(t=new H.a8(j,j.gj(j)),s=u.r,r=k.length;t.l();){q=t.d
if(s.b(q)&&q.rel==="stylesheet"){p=$.dX()
H.f(q.href)
p.toString
q=q.href
p=q.length
o=Math.min(r,p)
for(n=0;n<o;++n){if(n>=r)return H.h(k,n)
m=k[n]
if(n>=p)return H.h(q,n)
if(m!==q[n]){l=C.a.M(k,n)
$.dX().toString
return l.split("/").length-1}continue}}}$.dX().bq(C.v,"Didn't find a css link to derive relative path")
return 0},
eL:function(){var t=P.eY()
if(!$.e8.a8(0,t))$.e8.v(0,t,N.hr(t))
return $.e8.n(0,t)}}
var w=[C,H,J,P,W,Q,K,F,O,A,N]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.e5.prototype={}
J.p.prototype={
E:function(a,b){return a===b},
gp:function(a){return H.aO(a)},
h:function(a){return"Instance of '"+H.f(H.cN(a))+"'"}}
J.cD.prototype={
h:function(a){return String(a)},
gp:function(a){return a?519018:218159}}
J.bz.prototype={
E:function(a,b){return null==b},
h:function(a){return"null"},
gp:function(a){return 0},
$ix:1}
J.Z.prototype={
gp:function(a){return 0},
h:function(a){return String(a)}}
J.bH.prototype={}
J.af.prototype={}
J.J.prototype={
h:function(a){var t=a[$.fJ()]
if(t==null)return this.aP(a)
return"JavaScript function for "+H.f(J.aq(t))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}}
J.w.prototype={
K:function(a,b){var t,s,r=a.length,q=new Array(r)
q.fixed$length=Array
for(t=0;t<a.length;++t){s=H.f(a[t])
if(t>=r)return H.h(q,t)
q[t]=s}return q.join(b)},
bj:function(a,b,c){var t,s,r=a.length
for(t=b,s=0;s<r;++s){t=c.$2(t,a[s])
if(a.length!==r)throw H.b(P.av(a))}return t},
bk:function(a,b,c){return this.bj(a,b,c,u.z)},
aN:function(a,b,c){if(b<0||b>a.length)throw H.b(P.v(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.b(P.v(c,b,a.length,"end",null))
if(b===c)return H.i([],H.en(a))
return H.i(a.slice(b,c),H.en(a))},
gO:function(a){var t=a.length
if(t>0)return a[t-1]
throw H.b(H.hk())},
bb:function(a,b){var t
for(t=0;t<a.length;++t)if(J.cg(a[t],b))return!0
return!1},
h:function(a){return P.cC(a,"[","]")},
gD:function(a){return new J.bi(a,a.length)},
gp:function(a){return H.aO(a)},
gj:function(a){return a.length},
sj:function(a,b){if(!!a.fixed$length)H.ap(P.y("set length"))
if(b<0)throw H.b(P.v(b,0,null,"newLength",null))
a.length=b},
n:function(a,b){if(b>=a.length||b<0)throw H.b(H.bc(a,b))
return a[b]}}
J.cG.prototype={}
J.bi.prototype={
gt:function(){return this.d},
l:function(){var t,s=this,r=s.a,q=r.length
if(s.b!==q)throw H.b(H.fE(r))
t=s.c
if(t>=q){s.d=null
return!1}s.d=r[t]
s.c=t+1
return!0}}
J.aD.prototype={
bi:function(a){var t,s
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){t=a|0
return a===t?t:t-1}s=Math.floor(a)
if(isFinite(s))return s
throw H.b(P.y(""+a+".floor()"))},
af:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.b(P.y(""+a+".round()"))},
R:function(a,b){var t,s,r,q
if(b<2||b>36)throw H.b(P.v(b,2,36,"radix",null))
t=a.toString(b)
if(C.a.m(t,t.length-1)!==41)return t
s=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(t)
if(s==null)H.ap(P.y("Unexpected toString result: "+t))
r=s.length
if(1>=r)return H.h(s,1)
t=s[1]
if(3>=r)return H.h(s,3)
q=+s[3]
r=s[2]
if(r!=null){t+=r
q-=r.length}return t+C.a.I("0",q)},
h:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gp:function(a){var t,s,r,q,p=a|0
if(a===p)return 536870911&p
t=Math.abs(a)
s=Math.log(t)/0.6931471805599453|0
r=Math.pow(2,s)
q=t<1?t/r:r/t
return 536870911&((q*9007199254740992|0)+(q*3542243181176521|0))*599197+s*1259},
Z:function(a,b){var t=a%b
if(t===0)return 0
if(t>0)return t
if(b<0)return t-b
else return t+b},
A:function(a,b){return(a|0)===a?a/b|0:this.b5(a,b)},
b5:function(a,b){var t=a/b
if(t>=-2147483648&&t<=2147483647)return t|0
if(t>0){if(t!==1/0)return Math.floor(t)}else if(t>-1/0)return Math.ceil(t)
throw H.b(P.y("Result of truncating division is "+H.f(t)+": "+H.f(a)+" ~/ "+b))},
J:function(a,b){var t
if(a>0)t=this.as(a,b)
else{t=b>31?31:b
t=a>>t>>>0}return t},
b4:function(a,b){if(b<0)throw H.b(H.a2(b))
return this.as(a,b)},
as:function(a,b){return b>31?0:a>>>b}}
J.aC.prototype={$iI:1}
J.cE.prototype={}
J.Q.prototype={
m:function(a,b){if(b<0)throw H.b(H.bc(a,b))
if(b>=a.length)H.ap(H.bc(a,b))
return a.charCodeAt(b)},
k:function(a,b){if(b>=a.length)throw H.b(H.bc(a,b))
return a.charCodeAt(b)},
q:function(a,b){if(typeof b!="string")throw H.b(P.e1(b,null,null))
return a+b},
aM:function(a,b){var t=H.i(a.split(b),u.s)
return t},
L:function(a,b,c,d){var t,s
c=P.ae(b,c,a.length)
t=a.substring(0,b)
s=a.substring(c)
return t+d+s},
w:function(a,b,c){var t
if(c<0||c>a.length)throw H.b(P.v(c,0,a.length,null,null))
t=c+b.length
if(t>a.length)return!1
return b===a.substring(c,t)},
F:function(a,b){return this.w(a,b,0)},
i:function(a,b,c){if(!H.c9(b))H.ap(H.a2(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.u()
if(b<0)throw H.b(P.cQ(b,null))
if(b>c)throw H.b(P.cQ(b,null))
if(c>a.length)throw H.b(P.cQ(c,null))
return a.substring(b,c)},
M:function(a,b){return this.i(a,b,null)},
bD:function(a){var t,s,r,q=a.trim(),p=q.length
if(p===0)return q
if(this.k(q,0)===133){t=J.hm(q,1)
if(t===p)return""}else t=0
s=p-1
r=this.m(q,s)===133?J.hn(q,s):p
if(t===0&&r===p)return q
return q.substring(t,r)},
I:function(a,b){var t,s
if(typeof b!=="number")return H.H(b)
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.b(C.E)
for(t=a,s="";!0;){if((b&1)===1)s=t+s
b=b>>>1
if(b===0)break
t+=t}return s},
X:function(a,b,c){var t
if(c<0||c>a.length)throw H.b(P.v(c,0,a.length,null,null))
t=a.indexOf(b,c)
return t},
aA:function(a,b){return this.X(a,b,0)},
h:function(a){return a},
gp:function(a){var t,s,r
for(t=a.length,s=0,r=0;r<t;++r){s=536870911&s+a.charCodeAt(r)
s=536870911&s+((524287&s)<<10)
s^=s>>6}s=536870911&s+((67108863&s)<<3)
s^=s>>11
return 536870911&s+((16383&s)<<15)},
gj:function(a){return a.length},
$im:1}
H.bm.prototype={
gj:function(a){return this.a.length},
n:function(a,b){return C.a.m(this.a,b)}}
H.aA.prototype={}
H.a8.prototype={
gt:function(){return this.d},
l:function(){var t,s=this,r=s.a,q=J.bd(r),p=q.gj(r)
if(s.b!==p)throw H.b(P.av(r))
t=s.c
if(t>=p){s.d=null
return!1}s.d=q.W(r,t);++s.c
return!0}}
H.bv.prototype={}
H.bO.prototype={
v:function(a,b,c){throw H.b(P.y("Cannot modify an unmodifiable list"))}}
H.ag.prototype={}
H.aw.prototype={
h:function(a){return P.e7(this)},
v:function(a,b,c){return H.hc()},
$iu:1}
H.ax.prototype={
gj:function(a){return this.a},
a8:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
n:function(a,b){if(!this.a8(0,b))return null
return this.ao(b)},
ao:function(a){return this.b[a]},
N:function(a,b){var t,s,r,q=this.c
for(t=q.length,s=0;s<t;++s){r=q[s]
b.$2(r,this.ao(r))}}}
H.cW.prototype={
C:function(a){var t,s,r=this,q=new RegExp(r.a).exec(a)
if(q==null)return null
t=Object.create(null)
s=r.b
if(s!==-1)t.arguments=q[s+1]
s=r.c
if(s!==-1)t.argumentsExpr=q[s+1]
s=r.d
if(s!==-1)t.expr=q[s+1]
s=r.e
if(s!==-1)t.method=q[s+1]
s=r.f
if(s!==-1)t.receiver=q[s+1]
return t}}
H.bE.prototype={
h:function(a){var t=this.b
if(t==null)return"NoSuchMethodError: "+H.f(this.a)
return"NoSuchMethodError: method not found: '"+t+"' on null"}}
H.bA.prototype={
h:function(a){var t,s=this,r="NoSuchMethodError: method not found: '",q=s.b
if(q==null)return"NoSuchMethodError: "+H.f(s.a)
t=s.c
if(t==null)return r+q+"' ("+H.f(s.a)+")"
return r+q+"' on '"+t+"' ("+H.f(s.a)+")"}}
H.bN.prototype={
h:function(a){var t=this.a
return t.length===0?"Error":"Error: "+t}}
H.dW.prototype={
$1:function(a){if(u.C.b(a))if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:2}
H.b2.prototype={
h:function(a){var t,s=this.b
if(s!=null)return s
s=this.a
t=s!==null&&typeof s==="object"?s.stack:null
return this.b=t==null?"":t},
$iF:1}
H.a3.prototype={
h:function(a){var t=this.constructor,s=t==null?null:t.name
return"Closure '"+H.fH(s==null?"unknown":s)+"'"},
gbG:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.cV.prototype={}
H.cT.prototype={
h:function(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+H.fH(t)+"'"}}
H.as.prototype={
E:function(a,b){var t=this
if(b==null)return!1
if(t===b)return!0
if(!(b instanceof H.as))return!1
return t.a===b.a&&t.b===b.b&&t.c===b.c},
gp:function(a){var t,s=this.c
if(s==null)t=H.aO(this.a)
else t=typeof s!=="object"?J.bh(s):H.aO(s)
return(t^H.aO(this.b))>>>0},
h:function(a){var t=this.c
if(t==null)t=this.a
return"Closure '"+H.f(this.d)+"' of "+("Instance of '"+H.f(H.cN(t))+"'")}}
H.bI.prototype={
h:function(a){return"RuntimeError: "+H.f(this.a)}}
H.aE.prototype={
gj:function(a){return this.a},
gab:function(a){return new H.aG(this,H.iz(this).B("aG<1>"))},
a8:function(a,b){var t=this.bo(b)
return t},
bo:function(a){var t=this.d
if(t==null)return!1
return this.aa(this.a2(t,J.bh(a)&0x3ffffff),a)>=0},
n:function(a,b){var t,s,r,q,p=this,o=null
if(typeof b=="string"){t=p.b
if(t==null)return o
s=p.a3(t,b)
r=s==null?o:s.b
return r}else if(typeof b=="number"&&(b&0x3ffffff)===b){q=p.c
if(q==null)return o
s=p.a3(q,b)
r=s==null?o:s.b
return r}else return p.bp(b)},
bp:function(a){var t,s,r=this.d
if(r==null)return null
t=this.a2(r,J.bh(a)&0x3ffffff)
s=this.aa(t,a)
if(s<0)return null
return t[s].b},
v:function(a,b,c){var t,s,r,q,p,o,n=this
if(typeof b=="string"){t=n.b
n.ak(t==null?n.b=n.a4():t,b,c)}else if(typeof b=="number"&&(b&0x3ffffff)===b){s=n.c
n.ak(s==null?n.c=n.a4():s,b,c)}else{r=n.d
if(r==null)r=n.d=n.a4()
q=J.bh(b)&0x3ffffff
p=n.a2(r,q)
if(p==null)n.a6(r,q,[n.a_(b,c)])
else{o=n.aa(p,b)
if(o>=0)p[o].b=c
else p.push(n.a_(b,c))}}},
N:function(a,b){var t=this,s=t.e,r=t.r
for(;s!=null;){b.$2(s.a,s.b)
if(r!==t.r)throw H.b(P.av(t))
s=s.c}},
ak:function(a,b,c){var t=this.a3(a,b)
if(t==null)this.a6(a,b,this.a_(b,c))
else t.b=c},
b1:function(){this.r=this.r+1&67108863},
a_:function(a,b){var t,s=this,r=new H.cH(a,b)
if(s.e==null)s.e=s.f=r
else{t=s.f
r.d=t
s.f=t.c=r}++s.a
s.b1()
return r},
aa:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.cg(a[s].a,b))return s
return-1},
h:function(a){return P.e7(this)},
a3:function(a,b){return a[b]},
a2:function(a,b){return a[b]},
a6:function(a,b,c){a[b]=c},
aZ:function(a,b){delete a[b]},
a4:function(){var t="<non-identifier-key>",s=Object.create(null)
this.a6(s,t,s)
this.aZ(s,t)
return s}}
H.cH.prototype={}
H.aG.prototype={
gj:function(a){return this.a.a},
gD:function(a){var t=this.a,s=new H.bB(t,t.r)
s.c=t.e
return s}}
H.bB.prototype={
gt:function(){return this.d},
l:function(){var t=this,s=t.a
if(t.b!==s.r)throw H.b(P.av(s))
else{s=t.c
if(s==null){t.d=null
return!1}else{t.d=s.a
t.c=s.c
return!0}}}}
H.dM.prototype={
$1:function(a){return this.a(a)},
$S:2}
H.dN.prototype={
$2:function(a,b){return this.a(a,b)}}
H.dO.prototype={
$1:function(a){return this.a(a)}}
H.cF.prototype={
h:function(a){return"RegExp/"+this.a+"/"+this.b.flags},
gb2:function(){var t=this,s=t.c
if(s!=null)return s
s=t.b
return t.c=H.eG(t.a,s.multiline,!s.ignoreCase,s.unicode,s.dotAll,!0)},
b_:function(a,b){var t,s=this.gb2()
s.lastIndex=b
t=s.exec(a)
if(t==null)return null
return new H.bY(t)}}
H.bY.prototype={
gbe:function(){var t=this.b
return t.index+t[0].length},
ai:function(a){var t=this.b
if(a>=t.length)return H.h(t,a)
return t[a]},
$iaa:1}
H.d4.prototype={
gt:function(){return this.d},
l:function(){var t,s,r,q,p=this,o=p.b
if(o==null)return!1
t=p.c
if(t<=o.length){s=p.a
r=s.b_(o,t)
if(r!=null){p.d=r
q=r.gbe()
if(r.b.index===q){if(s.b.unicode){o=p.c
t=o+1
s=p.b
if(t<s.length){o=J.cd(s).m(s,o)
if(o>=55296&&o<=56319){o=C.a.m(s,t)
o=o>=56320&&o<=57343}else o=!1}else o=!1}else o=!1
q=(o?q+1:q)+1}p.c=q
return!0}}p.b=p.d=null
return!1}}
H.bD.prototype={}
H.aL.prototype={
gj:function(a){return a.length},
$iM:1}
H.aM.prototype={
v:function(a,b,c){H.eo(b,a,a.length)
a[b]=c}}
H.bC.prototype={
n:function(a,b){H.eo(b,a,a.length)
return a[b]}}
H.ab.prototype={
gj:function(a){return a.length},
n:function(a,b){H.eo(b,a,a.length)
return a[b]},
$iab:1,
$ia1:1}
H.aZ.prototype={}
H.b_.prototype={}
H.D.prototype={
B:function(a){return H.c5(v.typeUniverse,this,a)},
aW:function(a){return H.i9(v.typeUniverse,this,a)}}
H.bW.prototype={}
H.bU.prototype={
h:function(a){return this.a}}
H.b3.prototype={}
P.d6.prototype={
$1:function(a){var t=this.a,s=t.a
t.a=null
s.$0()},
$S:3}
P.d5.prototype={
$1:function(a){var t,s
this.a.a=a
t=this.b
s=this.c
t.firstChild?t.removeChild(s):t.appendChild(s)}}
P.d7.prototype={
$0:function(){this.a.$0()}}
P.d8.prototype={
$0:function(){this.a.$0()}}
P.dx.prototype={
aR:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.cb(new P.dy(this,b),0),a)
else throw H.b(P.y("`setTimeout()` not found."))}}
P.dy.prototype={
$0:function(){this.b.$0()}}
P.cy.prototype={
$0:function(){var t,s,r,q,p
try{this.a.an(this.b.$0())}catch(r){t=H.K(r)
s=H.P(r)
q=t
p=s
if(p==null)p=P.e3(q)
this.a.T(q,p)}}}
P.aU.prototype={
av:function(a,b){var t
P.e2(a,"error")
t=this.a
if(t.a!==0)throw H.b(P.eU("Future already completed"))
b=P.e3(a)
t.aV(a,b)},
au:function(a){return this.av(a,null)}}
P.aT.prototype={}
P.bX.prototype={
br:function(a){if((this.c&15)!==6)return!0
return this.b.b.ag(this.d,a.a)},
bl:function(a){var t=this.e,s=this.b.b
if(u.Q.b(t))return s.bx(t,a.a,a.b)
else return s.ag(t,a.a)}}
P.A.prototype={
aF:function(a,b,c){var t,s=$.k
if(s!==C.c)b=b!=null?P.iI(b,s):b
t=new P.A($.k,c.B("A<0>"))
this.am(new P.bX(t,b==null?1:3,a,b))
return t},
ah:function(a,b){return this.aF(a,null,b)},
am:function(a){var t,s=this,r=s.a
if(r<=1){a.a=s.c
s.c=a}else{if(r===2){r=s.c
t=r.a
if(t<4){r.am(a)
return}s.a=t
s.c=r.c}P.am(null,null,s.b,new P.dc(s,a))}},
ar:function(a){var t,s,r,q,p,o=this,n={}
n.a=a
if(a==null)return
t=o.a
if(t<=1){s=o.c
r=o.c=a
if(s!=null){for(;q=r.a,q!=null;r=q);r.a=s}}else{if(t===2){t=o.c
p=t.a
if(p<4){t.ar(a)
return}o.a=p
o.c=t.c}n.a=o.V(a)
P.am(null,null,o.b,new P.dk(n,o))}},
U:function(){var t=this.c
this.c=null
return this.V(t)},
V:function(a){var t,s,r
for(t=a,s=null;t!=null;s=t,t=r){r=t.a
t.a=s}return s},
an:function(a){var t,s=this,r=s.$ti
if(r.B("a6<1>").b(a))if(r.b(a))P.df(a,s)
else P.f1(a,s)
else{t=s.U()
s.a=4
s.c=a
P.aj(s,t)}},
T:function(a,b){var t=this,s=t.U(),r=P.ck(a,b)
t.a=8
t.c=r
P.aj(t,s)},
aU:function(a){var t=this
if(t.$ti.B("a6<1>").b(a)){t.aX(a)
return}t.a=1
P.am(null,null,t.b,new P.de(t,a))},
aX:function(a){var t=this
if(t.$ti.b(a)){if(a.gbI()){t.a=1
P.am(null,null,t.b,new P.dj(t,a))}else P.df(a,t)
return}P.f1(a,t)},
aV:function(a,b){this.a=1
P.am(null,null,this.b,new P.dd(this,a,b))},
$ia6:1}
P.dc.prototype={
$0:function(){P.aj(this.a,this.b)}}
P.dk.prototype={
$0:function(){P.aj(this.b,this.a.a)}}
P.dg.prototype={
$1:function(a){var t=this.a
t.a=0
t.an(a)},
$S:3}
P.dh.prototype={
$2:function(a,b){this.a.T(a,b)},
$1:function(a){return this.$2(a,null)},
$S:5}
P.di.prototype={
$0:function(){this.a.T(this.b,this.c)}}
P.de.prototype={
$0:function(){var t=this.a,s=t.U()
t.a=4
t.c=this.b
P.aj(t,s)}}
P.dj.prototype={
$0:function(){P.df(this.b,this.a)}}
P.dd.prototype={
$0:function(){this.a.T(this.b,this.c)}}
P.dn.prototype={
$0:function(){var t,s,r,q,p,o,n=this,m=null
try{r=n.c
m=r.b.b.aE(r.d)}catch(q){t=H.K(q)
s=H.P(q)
if(n.d){r=n.a.a.c.a
p=t
p=r==null?p==null:r===p
r=p}else r=!1
p=n.b
if(r)p.b=n.a.a.c
else p.b=P.ck(t,s)
p.a=!0
return}if(u._.b(m)){if(m instanceof P.A&&m.a>=4){if(m.a===8){r=n.b
r.b=m.c
r.a=!0}return}o=n.a.a
r=n.b
r.b=m.ah(new P.dp(o),u.z)
r.a=!1}}}
P.dp.prototype={
$1:function(a){return this.a},
$S:6}
P.dm.prototype={
$0:function(){var t,s,r,q,p=this
try{r=p.b
p.a.b=r.b.b.ag(r.d,p.c)}catch(q){t=H.K(q)
s=H.P(q)
r=p.a
r.b=P.ck(t,s)
r.a=!0}}}
P.dl.prototype={
$0:function(){var t,s,r,q,p,o,n,m,l=this
try{t=l.a.a.c
q=l.c
if(q.br(t)&&q.e!=null){p=l.b
p.b=q.bl(t)
p.a=!1}}catch(o){s=H.K(o)
r=H.P(o)
q=l.a.a.c
p=q.a
n=s
m=l.b
if(p==null?n==null:p===n)m.b=q
else m.b=P.ck(s,r)
m.a=!0}}}
P.bQ.prototype={}
P.bK.prototype={}
P.bL.prototype={}
P.bk.prototype={
h:function(a){return H.f(this.a)},
$ij:1,
gS:function(){return this.b}}
P.dD.prototype={}
P.dJ.prototype={
$0:function(){var t,s=this.a,r=s.b
if(r==null)throw H.b(s.a)
t=H.b(s.a)
t.stack=r.h(0)
throw t}}
P.dt.prototype={
bz:function(a){var t,s,r,q=null
try{if(C.c===$.k){a.$0()
return}P.fk(q,q,this,a)}catch(r){t=H.K(r)
s=H.P(r)
P.dI(q,q,this,t,s)}},
bB:function(a,b){var t,s,r,q=null
try{if(C.c===$.k){a.$1(b)
return}P.fl(q,q,this,a,b)}catch(r){t=H.K(r)
s=H.P(r)
P.dI(q,q,this,t,s)}},
bC:function(a,b){return this.bB(a,b,u.z)},
b8:function(a){return new P.dv(this,a)},
b7:function(a){return this.b8(a,u.z)},
a7:function(a){return new P.du(this,a)},
b9:function(a,b){return new P.dw(this,a,b)},
bw:function(a){if($.k===C.c)return a.$0()
return P.fk(null,null,this,a)},
aE:function(a){return this.bw(a,u.z)},
bA:function(a,b){if($.k===C.c)return a.$1(b)
return P.fl(null,null,this,a,b)},
ag:function(a,b){return this.bA(a,b,u.z,u.z)},
by:function(a,b,c){if($.k===C.c)return a.$2(b,c)
return P.iJ(null,null,this,a,b,c)},
bx:function(a,b,c){return this.by(a,b,c,u.z,u.z,u.z)}}
P.dv.prototype={
$0:function(){return this.a.aE(this.b)}}
P.du.prototype={
$0:function(){return this.a.bz(this.b)}}
P.dw.prototype={
$1:function(a){return this.a.bC(this.b,a)},
$S:function(){return this.c.B("~(0)")}}
P.aV.prototype={
gD:function(a){var t=new P.aW(this,this.r)
t.c=this.e
return t},
gj:function(a){return this.a},
H:function(a,b){var t,s,r=this
if(typeof b=="string"&&b!=="__proto__"){t=r.b
return r.al(t==null?r.b=P.ef():t,b)}else if(typeof b=="number"&&(b&1073741823)===b){s=r.c
return r.al(s==null?r.c=P.ef():s,b)}else return r.aS(b)},
aS:function(a){var t,s,r=this,q=r.d
if(q==null)q=r.d=P.ef()
t=r.aY(a)
s=q[t]
if(s==null)q[t]=[r.a5(a)]
else{if(r.b0(s,a)>=0)return!1
s.push(r.a5(a))}return!0},
al:function(a,b){if(a[b]!=null)return!1
a[b]=this.a5(b)
return!0},
a5:function(a){var t=this,s=new P.dr(a)
if(t.e==null)t.e=t.f=s
else t.f=t.f.b=s;++t.a
t.r=1073741823&t.r+1
return s},
aY:function(a){return J.bh(a)&1073741823},
b0:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.cg(a[s].a,b))return s
return-1}}
P.dr.prototype={}
P.aW.prototype={
gt:function(){return this.d},
l:function(){var t=this,s=t.a
if(t.b!==s.r)throw H.b(P.av(s))
else{s=t.c
if(s==null){t.d=null
return!1}else{t.d=s.a
t.c=s.b
return!0}}}}
P.aH.prototype={}
P.r.prototype={
gD:function(a){return new H.a8(a,this.gj(a))},
W:function(a,b){return this.n(a,b)},
bh:function(a,b,c,d){var t
P.ae(b,c,this.gj(a))
for(t=b;t<c;++t)this.v(a,t,d)},
h:function(a){return P.cC(a,"[","]")}}
P.aJ.prototype={}
P.cL.prototype={
$2:function(a,b){var t,s=this.a
if(!s.a)this.b.a+=", "
s.a=!1
s=this.b
t=s.a+=H.f(a)
s.a=t+": "
s.a+=H.f(b)},
$S:7}
P.a9.prototype={
N:function(a,b){var t,s
for(t=J.e_(this.gab(a));t.l();){s=t.gt()
b.$2(s,this.n(a,s))}},
gj:function(a){return J.W(this.gab(a))},
h:function(a){return P.e7(a)},
$iu:1}
P.c6.prototype={
v:function(a,b,c){throw H.b(P.y("Cannot modify unmodifiable map"))}}
P.aK.prototype={
n:function(a,b){return J.ey(this.a,b)},
v:function(a,b,c){J.dZ(this.a,b,c)},
gj:function(a){return J.W(this.a)},
h:function(a){return J.aq(this.a)},
$iu:1}
P.ah.prototype={}
P.a0.prototype={
h:function(a){return P.cC(this,"{","}")}}
P.aP.prototype={$iE:1}
P.b0.prototype={
h:function(a){return P.cC(this,"{","}")},
K:function(a,b){var t,s=P.f2(this,this.r)
if(!s.l())return""
if(b===""){t=""
do t+=H.f(s.d)
while(s.l())}else{t=H.f(s.d)
for(;s.l();)t=t+b+H.f(s.d)}return t.charCodeAt(0)==0?t:t},
$iE:1}
P.aX.prototype={}
P.b1.prototype={}
P.b6.prototype={}
P.cl.prototype={
bu:function(a,a0,a1){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b="Invalid base64 encoding length "
a1=P.ae(a0,a1,a.length)
t=$.fV()
for(s=a0,r=s,q=null,p=-1,o=-1,n=0;s<a1;s=m){m=s+1
l=C.a.k(a,s)
if(l===37){k=m+2
if(k<=a1){j=H.dL(C.a.k(a,m))
i=H.dL(C.a.k(a,m+1))
h=j*16+i-(i&256)
if(h===37)h=-1
m=k}else h=-1}else h=l
if(0<=h&&h<=127){if(h<0||h>=t.length)return H.h(t,h)
g=t[h]
if(g>=0){h=C.a.m("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",g)
if(h===l)continue
l=h}else{if(g===-1){if(p<0){f=q==null?null:q.a.length
if(f==null)f=0
p=f+(s-r)
o=s}++n
if(l===61)continue}l=h}if(g!==-2){if(q==null)q=new P.t("")
f=q.a+=C.a.i(a,r,s)
q.a=f+H.cO(l)
r=m
continue}}throw H.b(P.n("Invalid base64 data",a,s))}if(q!=null){f=q.a+=C.a.i(a,r,a1)
e=f.length
if(p>=0)P.eB(a,o,a1,p,n,e)
else{d=C.b.Z(e-1,4)+1
if(d===1)throw H.b(P.n(b,a,a1))
for(;d<4;){f+="="
q.a=f;++d}}f=q.a
return C.a.L(a,a0,a1,f.charCodeAt(0)==0?f:f)}c=a1-a0
if(p>=0)P.eB(a,o,a1,p,n,c)
else{d=C.b.Z(c,4)
if(d===1)throw H.b(P.n(b,a,a1))
if(d>1)a=C.a.L(a,a1,a1,d===2?"==":"=")}return a}}
P.cm.prototype={}
P.bn.prototype={}
P.bq.prototype={}
P.cu.prototype={}
P.d2.prototype={}
P.d3.prototype={
bc:function(a){var t,s,r,q,p,o,n,m,l=P.hK(!1,a,0,null)
if(l!=null)return l
t=P.ae(0,null,J.W(a))
s=P.fn(a,0,t)
if(s>0){r=P.eb(a,0,s)
if(s===t)return r
q=new P.t(r)
p=s
o=!1}else{p=0
q=null
o=!0}if(q==null)q=new P.t("")
n=new P.dC(!1,q)
n.c=o
n.bd(a,p,t)
if(n.e>0){H.ap(P.n("Unfinished UTF-8 octet sequence",a,t))
q.a+=H.cO(65533)
n.f=n.e=n.d=0}m=q.a
return m.charCodeAt(0)==0?m:m}}
P.dC.prototype={
bd:function(a,b,c){var t,s,r,q,p,o,n,m,l,k=this,j="Bad UTF-8 encoding 0x",i=k.d,h=k.e,g=k.f
k.f=k.e=k.d=0
$label0$0:for(t=J.bd(a),s=k.b,r=b;!0;r=m){$label1$1:if(h>0){do{if(r===c)break $label0$0
q=t.n(a,r)
if(typeof q!=="number")return q.aJ()
if((q&192)!==128){p=P.n(j+C.b.R(q,16),a,r)
throw H.b(p)}else{i=(i<<6|q&63)>>>0;--h;++r}}while(h>0)
p=g-1
if(p<0||p>=4)return H.h(C.r,p)
if(i<=C.r[p]){p=P.n("Overlong encoding of 0x"+C.b.R(i,16),a,r-g-1)
throw H.b(p)}if(i>1114111){p=P.n("Character outside valid Unicode range: 0x"+C.b.R(i,16),a,r-g-1)
throw H.b(p)}if(!k.c||i!==65279)s.a+=H.cO(i)
k.c=!1}for(p=r<c;p;){o=P.fn(a,r,c)
if(o>0){k.c=!1
n=r+o
s.a+=P.eb(a,r,n)
if(n===c)break}else n=r
m=n+1
q=t.n(a,n)
if(typeof q!=="number")return q.u()
if(q<0){l=P.n("Negative UTF-8 code unit: -0x"+C.b.R(-q,16),a,m-1)
throw H.b(l)}else{if((q&224)===192){i=q&31
h=1
g=1
continue $label0$0}if((q&240)===224){i=q&15
h=2
g=2
continue $label0$0}if((q&248)===240&&q<245){i=q&7
h=3
g=3
continue $label0$0}l=P.n(j+C.b.R(q,16),a,m-1)
throw H.b(l)}}break $label0$0}if(h>0){k.d=i
k.e=h
k.f=g}}}
P.ca.prototype={}
P.bt.prototype={
E:function(a,b){if(b==null)return!1
return b instanceof P.bt&&this.a===b.a&&!0},
gp:function(a){var t=this.a
return(t^C.b.J(t,30))&1073741823},
h:function(a){var t=this,s=P.hd(H.eO(t)),r=P.bu(H.ea(t)),q=P.bu(H.e9(t)),p=P.bu(H.hu(t)),o=P.bu(H.hw(t)),n=P.bu(H.hx(t)),m=P.he(H.hv(t)),l=s+"-"+r+"-"+q+" "+p+":"+o+":"+n+"."+m
return l}}
P.cc.prototype={}
P.az.prototype={
E:function(a,b){if(b==null)return!1
return b instanceof P.az&&this.a===b.a},
gp:function(a){return C.b.gp(this.a)},
h:function(a){var t,s,r,q=new P.ct(),p=this.a
if(p<0)return"-"+new P.az(0-p).h(0)
t=q.$1(C.b.A(p,6e7)%60)
s=q.$1(C.b.A(p,1e6)%60)
r=new P.cs().$1(p%1e6)
return""+C.b.A(p,36e8)+":"+H.f(t)+":"+H.f(s)+"."+H.f(r)}}
P.cs.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}}
P.ct.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a}}
P.j.prototype={
gS:function(){return H.P(this.$thrownJsError)}}
P.bj.prototype={
h:function(a){var t=this.a
if(t!=null)return"Assertion failed: "+P.cv(t)
return"Assertion failed"}}
P.bF.prototype={
h:function(a){return"Throw of null."}}
P.C.prototype={
ga1:function(){return"Invalid argument"+(!this.a?"(s)":"")},
ga0:function(){return""},
h:function(a){var t,s,r,q,p=this,o=p.c,n=o!=null?" ("+o+")":""
o=p.d
t=o==null?"":": "+o
s=p.ga1()+n+t
if(!p.a)return s
r=p.ga0()
q=P.cv(p.b)
return s+r+": "+q}}
P.ad.prototype={
ga1:function(){return"RangeError"},
ga0:function(){var t,s,r=this.e
if(r==null){r=this.f
t=r!=null?": Not less than or equal to "+H.f(r):""}else{s=this.f
if(s==null)t=": Not greater than or equal to "+H.f(r)
else if(s>r)t=": Not in range "+H.f(r)+".."+H.f(s)+", inclusive"
else t=s<r?": Valid value range is empty":": Only valid value is "+H.f(r)}return t}}
P.by.prototype={
ga1:function(){return"RangeError"},
ga0:function(){var t,s=this.b
if(typeof s!=="number")return s.u()
if(s<0)return": index must not be negative"
t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.f(t)},
gj:function(a){return this.f}}
P.bP.prototype={
h:function(a){return"Unsupported operation: "+this.a}}
P.bM.prototype={
h:function(a){var t=this.a
return t!=null?"UnimplementedError: "+t:"UnimplementedError"}}
P.aS.prototype={
h:function(a){return"Bad state: "+this.a}}
P.bo.prototype={
h:function(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.cv(t)+"."}}
P.bG.prototype={
h:function(a){return"Out of Memory"},
gS:function(){return null},
$ij:1}
P.aR.prototype={
h:function(a){return"Stack Overflow"},
gS:function(){return null},
$ij:1}
P.bs.prototype={
h:function(a){var t=this.a
return t==null?"Reading static variable during its initialization":"Reading static variable '"+t+"' during its initialization"}}
P.db.prototype={
h:function(a){return"Exception: "+this.a}}
P.cx.prototype={
h:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h=this.a,g=""!==h?"FormatException: "+h:"FormatException",f=this.c,e=this.b
if(typeof e=="string"){if(f!=null)h=f<0||f>e.length
else h=!1
if(h)f=null
if(f==null){t=e.length>78?C.a.i(e,0,75)+"...":e
return g+"\n"+t}for(s=1,r=0,q=!1,p=0;p<f;++p){o=C.a.k(e,p)
if(o===10){if(r!==p||!q)++s
r=p+1
q=!1}else if(o===13){++s
r=p+1
q=!0}}g=s>1?g+(" (at line "+s+", character "+(f-r+1)+")\n"):g+(" (at character "+(f+1)+")\n")
n=e.length
for(p=f;p<n;++p){o=C.a.m(e,p)
if(o===10||o===13){n=p
break}}if(n-r>78)if(f-r<75){m=r+75
l=r
k=""
j="..."}else{if(n-f<75){l=n-75
m=n
j=""}else{l=f-36
m=f+36
j="..."}k="..."}else{m=n
l=r
k=""
j=""}i=C.a.i(e,l,m)
return g+k+i+j+"\n"+C.a.I(" ",f-l+k.length)+"^\n"}else return f!=null?g+(" (at offset "+H.f(f)+")"):g}}
P.I.prototype={}
P.a7.prototype={
gj:function(a){var t,s=this.gD(this)
for(t=0;s.l();)++t
return t},
W:function(a,b){var t,s,r,q="index"
P.e2(b,q)
P.hB(b,q)
for(t=this.gD(this),s=0;t.l();){r=t.gt()
if(b===s)return r;++s}throw H.b(P.cB(b,this,q,null,s))},
h:function(a){return P.hj(this,"(",")")}}
P.cI.prototype={}
P.u.prototype={}
P.x.prototype={
gp:function(a){return P.l.prototype.gp.call(this,this)},
h:function(a){return"null"}}
P.bg.prototype={}
P.l.prototype={constructor:P.l,$il:1,
E:function(a,b){return this===b},
gp:function(a){return H.aO(this)},
h:function(a){return"Instance of '"+H.f(H.cN(this))+"'"},
toString:function(){return this.h(this)}}
P.aa.prototype={}
P.cR.prototype={$iaa:1}
P.E.prototype={}
P.F.prototype={}
P.c2.prototype={
h:function(a){return""},
$iF:1}
P.m.prototype={}
P.t.prototype={
gj:function(a){return this.a.length},
h:function(a){var t=this.a
return t.charCodeAt(0)==0?t:t}}
P.R.prototype={}
P.d1.prototype={
$2:function(a,b){var t,s,r,q=J.cd(b).aA(b,"=")
if(q===-1){if(b!=="")J.dZ(a,P.dB(b,0,b.length,this.a,!0),"")}else if(q!==0){t=C.a.i(b,0,q)
s=C.a.M(b,q+1)
r=this.a
J.dZ(a,P.dB(t,0,t.length,r,!0),P.dB(s,0,s.length,r,!0))}return a}}
P.cZ.prototype={
$2:function(a,b){throw H.b(P.n("Illegal IPv4 address, "+a,this.a,b))}}
P.d_.prototype={
$2:function(a,b){throw H.b(P.n("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)}}
P.d0.prototype={
$2:function(a,b){var t
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
t=P.bf(C.a.i(this.b,a,b),null,16)
if(typeof t!=="number")return t.u()
if(t<0||t>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return t}}
P.b7.prototype={
gaH:function(){return this.b},
ga9:function(a){var t=this.c
if(t==null)return""
if(C.a.F(t,"["))return C.a.i(t,1,t.length-1)
return t},
gad:function(a){var t=this.d
if(t==null)return P.f9(this.a)
return t},
gae:function(){var t=this.f
return t==null?"":t},
gaw:function(){var t=this.r
return t==null?"":t},
gaD:function(){var t=this.Q
if(t==null){t=this.f
t=this.Q=new P.ah(P.f_(t==null?"":t),u.h)}return t},
gax:function(){return this.c!=null},
gaz:function(){return this.f!=null},
gay:function(){return this.r!=null},
h:function(a){var t,s,r,q=this,p=q.y
if(p==null){p=q.a
t=p.length!==0?p+":":""
s=q.c
r=s==null
if(!r||p==="file"){p=t+"//"
t=q.b
if(t.length!==0)p=p+t+"@"
if(!r)p+=s
t=q.d
if(t!=null)p=p+":"+H.f(t)}else p=t
p+=q.e
t=q.f
if(t!=null)p=p+"?"+t
t=q.r
if(t!=null)p=p+"#"+t
p=q.y=p.charCodeAt(0)==0?p:p}return p},
E:function(a,b){var t,s,r=this
if(b==null)return!1
if(r===b)return!0
if(u.R.b(b))if(r.a===b.gaj())if(r.c!=null===b.gax())if(r.b==b.gaH())if(r.ga9(r)==b.ga9(b))if(r.gad(r)==b.gad(b))if(r.e===b.gaC(b)){t=r.f
s=t==null
if(!s===b.gaz()){if(s)t=""
if(t===b.gae()){t=r.r
s=t==null
if(!s===b.gay()){if(s)t=""
t=t===b.gaw()}else t=!1}else t=!1}else t=!1}else t=!1
else t=!1
else t=!1
else t=!1
else t=!1
else t=!1
else t=!1
return t},
gp:function(a){var t=this.z
return t==null?this.z=C.a.gp(this.h(0)):t},
$iR:1,
gaj:function(){return this.a},
gaC:function(a){return this.e}}
P.dA.prototype={
$1:function(a){throw H.b(P.n("Invalid port",this.a,this.b+1))}}
P.cY.prototype={
gaG:function(){var t,s,r,q,p=this,o=null,n=p.c
if(n!=null)return n
n=p.b
if(0>=n.length)return H.h(n,0)
t=p.a
n=n[0]+1
s=C.a.X(t,"?",n)
r=t.length
if(s>=0){q=P.b8(t,s+1,r,C.j,!1)
r=s}else q=o
return p.c=new P.bS("data",o,o,o,P.b8(t,n,r,C.u,!1),q,o)},
h:function(a){var t,s=this.b
if(0>=s.length)return H.h(s,0)
t=this.a
return s[0]===-1?"data:"+t:t}}
P.dF.prototype={
$1:function(a){return new Uint8Array(96)}}
P.dE.prototype={
$2:function(a,b){var t=this.a
if(a>=t.length)return H.h(t,a)
t=t[a]
J.h0(t,0,96,b)
return t},
$S:8}
P.dG.prototype={
$3:function(a,b,c){var t,s,r,q
for(t=b.length,s=a.length,r=0;r<t;++r){q=C.a.k(b,r)^96
if(q>=s)return H.h(a,q)
a[q]=c}}}
P.dH.prototype={
$3:function(a,b,c){var t,s,r,q
for(t=C.a.k(b,0),s=C.a.k(b,1),r=a.length;t<=s;++t){q=(t^96)>>>0
if(q>=r)return H.h(a,q)
a[q]=c}}}
P.c0.prototype={
gax:function(){return this.c>0},
gaz:function(){var t=this.f
if(typeof t!=="number")return t.u()
return t<this.r},
gay:function(){return this.r<this.a.length},
gap:function(){return this.b===4&&C.a.F(this.a,"http")},
gaq:function(){return this.b===5&&C.a.F(this.a,"https")},
gaj:function(){var t,s=this,r="file",q="package",p=s.b
if(p<=0)return""
t=s.x
if(t!=null)return t
if(s.gap())p=s.x="http"
else if(s.gaq()){s.x="https"
p="https"}else if(p===4&&C.a.F(s.a,r)){s.x=r
p=r}else if(p===7&&C.a.F(s.a,q)){s.x=q
p=q}else{p=C.a.i(s.a,0,p)
s.x=p}return p},
gaH:function(){var t=this.c,s=this.b+3
return t>s?C.a.i(this.a,s,t-1):""},
ga9:function(a){var t=this.c
return t>0?C.a.i(this.a,t,this.d):""},
gad:function(a){var t,s,r=this
if(r.c>0){t=r.d
if(typeof t!=="number")return t.q()
s=r.e
if(typeof s!=="number")return H.H(s)
s=t+1<s
t=s}else t=!1
if(t){t=r.d
if(typeof t!=="number")return t.q()
return P.bf(C.a.i(r.a,t+1,r.e),null,null)}if(r.gap())return 80
if(r.gaq())return 443
return 0},
gaC:function(a){return C.a.i(this.a,this.e,this.f)},
gae:function(){var t=this.f,s=this.r
if(typeof t!=="number")return t.u()
return t<s?C.a.i(this.a,t+1,s):""},
gaw:function(){var t=this.r,s=this.a
return t<s.length?C.a.M(s,t+1):""},
gaD:function(){var t=this.f
if(typeof t!=="number")return t.u()
if(t>=this.r)return C.O
return new P.ah(P.f_(this.gae()),u.h)},
gp:function(a){var t=this.y
return t==null?this.y=C.a.gp(this.a):t},
E:function(a,b){if(b==null)return!1
if(this===b)return!0
return u.R.b(b)&&this.a===b.h(0)},
h:function(a){return this.a},
$iR:1}
P.bS.prototype={}
W.e.prototype={}
W.ar.prototype={
h:function(a){return String(a)},
$iar:1}
W.ci.prototype={
h:function(a){return String(a)}}
W.au.prototype={$iau:1}
W.X.prototype={
gj:function(a){return a.length}}
W.ay.prototype={
gj:function(a){return a.length}}
W.cp.prototype={}
W.cq.prototype={
h:function(a){return String(a)}}
W.cr.prototype={
gj:function(a){return a.length}}
W.ai.prototype={
gj:function(a){return this.a.length},
n:function(a,b){var t=this.a
if(b<0||b>=t.length)return H.h(t,b)
return t[b]},
v:function(a,b,c){throw H.b(P.y("Cannot modify list"))}}
W.a4.prototype={
gat:function(a){return new W.bT(a)},
h:function(a){return a.localName},
aB:function(a,b,c,d,e){a.insertAdjacentHTML(b,c)},
$ia4:1}
W.c.prototype={$ic:1}
W.a5.prototype={
aT:function(a,b,c,d){return a.addEventListener(b,H.cb(c,1),!1)}}
W.cw.prototype={
gj:function(a){return a.length}}
W.Y.prototype={
bv:function(a,b,c,d){return a.open(b,c,!0)},
$iY:1}
W.cz.prototype={
$1:function(a){return a.responseText}}
W.cA.prototype={
$1:function(a){var t,s,r,q=this.a,p=q.status
if(typeof p!=="number")return p.aK()
t=p>=200&&p<300
s=p>307&&p<400
p=t||p===0||p===304||s
r=this.b
if(p){p=r.a
if(p.a!==0)H.ap(P.eU("Future already completed"))
p.aU(q)}else r.au(a)}}
W.bx.prototype={}
W.aF.prototype={$iaF:1}
W.cJ.prototype={
h:function(a){return String(a)}}
W.N.prototype={$iN:1}
W.q.prototype={
h:function(a){var t=a.nodeValue
return t==null?this.aO(a):t},
$iq:1}
W.aN.prototype={
gj:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.cB(b,a,null,null,null))
return a[b]},
v:function(a,b,c){throw H.b(P.y("Cannot assign element of immutable List."))},
W:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iM:1}
W.a_.prototype={$ia_:1}
W.cS.prototype={
gj:function(a){return a.length}}
W.aQ.prototype={$iaQ:1}
W.bJ.prototype={
n:function(a,b){return a.getItem(b)},
v:function(a,b,c){a.setItem(b,c)},
N:function(a,b){var t,s
for(t=0;!0;++t){s=a.key(t)
if(s==null)return
b.$2(s,a.getItem(s))}},
gab:function(a){var t=H.i([],u.s)
this.N(a,new W.cU(t))
return t},
gj:function(a){return a.length},
$iu:1}
W.cU.prototype={
$2:function(a,b){return this.a.push(a)}}
W.G.prototype={}
W.aY.prototype={
gj:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.cB(b,a,null,null,null))
return a[b]},
v:function(a,b,c){throw H.b(P.y("Cannot assign element of immutable List."))},
W:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iM:1}
W.bT.prototype={
P:function(){var t,s,r,q,p=P.eI(u.N)
for(t=this.a.className.split(" "),s=t.length,r=0;r<s;++r){q=J.eA(t[r])
if(q.length!==0)p.H(0,q)}return p},
aI:function(a){this.a.className=a.K(0," ")},
gj:function(a){return this.a.classList.length},
H:function(a,b){var t=this.a.classList,s=t.contains(b)
t.add(b)
return!s}}
W.e4.prototype={}
W.bV.prototype={}
W.da.prototype={
$1:function(a){return this.a.$1(a)}}
W.aB.prototype={
gD:function(a){return new W.bw(a,this.gj(a))}}
W.bw.prototype={
l:function(){var t=this,s=t.c+1,r=t.b
if(s<r){t.d=J.ey(t.a,s)
t.c=s
return!0}t.d=null
t.c=r
return!1},
gt:function(){return this.d}}
W.bp.prototype={
bg:function(a,b){return typeof console!="undefined"?window.console.error(b):null},
bn:function(a){return typeof console!="undefined"?window.console.info(a):null},
bF:function(a){return typeof console!="undefined"?window.console.warn(a):null}}
W.dz.prototype={}
W.bR.prototype={}
W.bZ.prototype={}
W.c_.prototype={}
W.c1.prototype={}
W.c7.prototype={}
W.c8.prototype={}
P.br.prototype={
b6:function(a){var t=$.fI().b
if(t.test(a))return a
throw H.b(P.e1(a,"value","Not a valid class token"))},
h:function(a){return this.P().K(0," ")},
gD:function(a){var t=this.P()
return P.f2(t,t.r)},
gj:function(a){return this.P().a},
H:function(a,b){this.b6(b)
return this.bs(new P.co(b))},
bs:function(a){var t=this.P(),s=a.$1(t)
this.aI(t)
return s}}
P.co.prototype={
$1:function(a){return a.H(0,this.a)}}
P.dq.prototype={
Y:function(a){if(a<=0||a>4294967296)throw H.b(P.eQ("max must be in range 0 < max \u2264 2^32, was "+a))
return Math.random()*a>>>0},
ac:function(){return Math.random()}}
P.ds.prototype={
aQ:function(a){var t,s,r,q,p,o,n,m=this,l=4294967296,k=a<0?-1:0
do{t=(a&4294967295)>>>0
a=C.b.A(a-t,l)
s=(a&4294967295)>>>0
a=C.b.A(a-s,l)
r=((~t&4294967295)>>>0)+(t<<21>>>0)
q=(r&4294967295)>>>0
s=(~s>>>0)+((s<<21|t>>>11)>>>0)+C.b.A(r-q,l)&4294967295
r=((q^(q>>>24|s<<8))>>>0)*265
t=(r&4294967295)>>>0
s=((s^s>>>24)>>>0)*265+C.b.A(r-t,l)&4294967295
r=((t^(t>>>14|s<<18))>>>0)*21
t=(r&4294967295)>>>0
s=((s^s>>>14)>>>0)*21+C.b.A(r-t,l)&4294967295
t=(t^(t>>>28|s<<4))>>>0
s=(s^s>>>28)>>>0
r=(t<<31>>>0)+t
q=(r&4294967295)>>>0
p=C.b.A(r-q,l)
r=m.a*1037
o=m.a=(r&4294967295)>>>0
n=(m.b*1037+C.b.A(r-o,l)&4294967295)>>>0
m.b=n
o=(o^q)>>>0
m.a=o
p=(n^s+((s<<31|t>>>1)>>>0)+p&4294967295)>>>0
m.b=p}while(a!==k)
if(p===0&&o===0)m.a=23063
m.G()
m.G()
m.G()
m.G()},
G:function(){var t=this,s=t.a,r=4294901760*s,q=(r&4294967295)>>>0,p=55905*s,o=(p&4294967295)>>>0,n=o+q+t.b
s=(n&4294967295)>>>0
t.a=s
t.b=(C.b.A(p-o+(r-q)+(n-s),4294967296)&4294967295)>>>0},
Y:function(a){var t,s,r,q=this
if(a<=0||a>4294967296)throw H.b(P.eQ("max must be in range 0 < max \u2264 2^32, was "+a))
t=a-1
if((a&t)>>>0===0){q.G()
return(q.a&t)>>>0}do{q.G()
s=q.a
r=s%a}while(s-r+a>=4294967296)
return r},
ac:function(){var t,s=this
s.G()
t=s.a
s.G()
return((t&67108863)*134217728+(s.a&134217727))/9007199254740992}}
P.bl.prototype={
P:function(){var t,s,r,q,p=this.a.getAttribute("class"),o=P.eI(u.N)
if(p==null)return o
for(t=p.split(" "),s=t.length,r=0;r<s;++r){q=J.eA(t[r])
if(q.length!==0)o.H(0,q)}return o},
aI:function(a){this.a.setAttribute("class",a.K(0," "))}}
P.d.prototype={
gat:function(a){return new P.bl(a)},
aB:function(a,b,c,d,e){throw H.b(P.y("Cannot invoke insertAdjacentHtml on SVG."))}}
P.a1.prototype={}
Q.dR.prototype={
$1:function(a){var t,s,r=window,q="scrollY" in r?C.h.af(r.scrollY):C.h.af(r.document.documentElement.scrollTop),p=window.screen.height
if(typeof p!=="number")return H.H(p)
t=1500-p
if(t>q){r=document.querySelector("body").style
s="center -"+C.b.h(q)+"px"
r.backgroundPosition=s}else{r=document.querySelector("body").style
s="center -"+C.b.h(t)+"px"
r.backgroundPosition=s}}}
K.cM.prototype={}
F.aI.prototype={
h:function(a){return this.b}}
F.cK.prototype={
bq:function(a,b){F.hp(a).$1("("+this.c+")["+H.f(C.d.gO(a.b.split(".")))+"]: "+b)}}
O.dU.prototype={
$1:function(a){return H.f(a.ai(1))+" = "+H.f(a.ai(2))+C.a.I("../",this.a)}}
O.dV.prototype={
$0:function(){var t=document,s=t.querySelector("#story")
s.toString
J.ch(s,"beforeend","<button id = 'voidButton'>Peer into Void, Y/N?</a><div class='void'>Well, NOW you've certainly gone and done it. You can expect to see any Void Player shenanignans now. If there are any.",C.f,null)
t=u.o.a(t.querySelector("#voidButton"))
t.toString
W.d9(t,"click",new O.dT(),!1)
window.alert("If you gaze long into an abyss, the abyss also gazes into you.  - Troll Bruce Willis")
O.jd("N4Igzg9grgTgxgUxALhAVTAgJgAgMoIIwDyAZgGoQCWuIANCAHYCGAtkqgHJG7FQAuOAOpV+ACxwAlPPRD8EAD34oQEAO6MiCFuxg4A5swBeCMDiqN+EHOIQ4AbtVzNGuADYJmMRmdYQYdmBiogCEsgBGzHAA1vow0K6cbBwgACwADKkADsz6COEIcMxQmIVwYgB0WYz6svwwVPp5MADCYi6IKukVAKyyYIiaYAAqEGiMbhAxKgDaALqyAWBQbvxgePzMa7PAADpMyfvI+wBCkgCCAJKcl8NoACIAovt0+-bMblAIR-s9+wC+dBwewO7B+IAA4pxiHhLngXm8Pl9wQBGAELBj1RrNDZbMAAGVMmBgswxcgaTSIuLWEICWyIpLqFJxmzWjwAjlAPoz-kA")}}
O.dT.prototype={
$1:function(a){return O.jg()}}
A.cP.prototype={
Y:function(a){if(a===0)return 0
return this.b3(a)},
bt:function(){return this.Y(4294967295)},
b3:function(a){var t,s=this.a
if(a>4294967295){t=s.ac()
C.h.af(t*4294967295)
return C.h.bi(t*a)}else return s.Y(a)}};(function aliases(){var t=J.p.prototype
t.aO=t.h
t=J.Z.prototype
t.aP=t.h})();(function installTearOffs(){var t=hunkHelpers._static_1,s=hunkHelpers._static_0,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_1i,p=hunkHelpers._instance_1u
t(P,"iR","hQ",1)
t(P,"iS","hR",1)
t(P,"iT","hS",1)
s(P,"fr","iM",9)
r(P.aU.prototype,"gba",0,1,null,["$2","$1"],["av","au"],4,0)
t(P,"iV","ev",0)
var o
q(o=W.bp.prototype,"gbf","bg",0)
p(o,"gbm","bn",0)
p(o,"gbE","bF",0)
t(O,"j5","j6",10)})();(function inheritance(){var t=hunkHelpers.mixin,s=hunkHelpers.inherit,r=hunkHelpers.inheritMany
s(P.l,null)
r(P.l,[H.e5,J.p,J.bi,P.aX,P.a7,H.a8,H.bv,H.bO,H.aw,H.cW,P.j,H.a3,H.b2,P.a9,H.cH,H.bB,H.cF,H.bY,H.d4,H.D,H.bW,P.dx,P.aU,P.bX,P.A,P.bQ,P.bK,P.bL,P.bk,P.dD,P.b0,P.dr,P.aW,P.r,P.c6,P.aK,P.a0,P.b1,P.bn,P.dC,P.ca,P.bt,P.bg,P.az,P.bG,P.aR,P.db,P.cx,P.cI,P.u,P.x,P.aa,P.cR,P.F,P.c2,P.m,P.t,P.R,P.b7,P.cY,P.c0,W.cp,W.e4,W.aB,W.bw,W.bp,W.dz,P.dq,P.ds,P.a1,K.cM,F.aI,F.cK,A.cP])
r(J.p,[J.cD,J.bz,J.Z,J.w,J.aD,J.Q,H.bD,W.a5,W.bR,W.cq,W.cr,W.c,W.cJ,W.bZ,W.c1,W.c7])
r(J.Z,[J.bH,J.af,J.J])
s(J.cG,J.w)
r(J.aD,[J.aC,J.cE])
s(P.aH,P.aX)
r(P.aH,[H.ag,W.ai])
s(H.bm,H.ag)
s(H.aA,P.a7)
s(H.ax,H.aw)
r(P.j,[H.bE,H.bA,H.bN,H.bI,H.bU,P.bj,P.bF,P.C,P.bP,P.bM,P.aS,P.bo,P.bs])
r(H.a3,[H.dW,H.cV,H.dM,H.dN,H.dO,P.d6,P.d5,P.d7,P.d8,P.dy,P.cy,P.dc,P.dk,P.dg,P.dh,P.di,P.de,P.dj,P.dd,P.dn,P.dp,P.dm,P.dl,P.dJ,P.dv,P.du,P.dw,P.cL,P.cs,P.ct,P.d1,P.cZ,P.d_,P.d0,P.dA,P.dF,P.dE,P.dG,P.dH,W.cz,W.cA,W.cU,W.da,P.co,Q.dR,O.dU,O.dV,O.dT])
r(H.cV,[H.cT,H.as])
s(P.aJ,P.a9)
s(H.aE,P.aJ)
r(H.aA,[H.aG,P.E])
s(H.aL,H.bD)
s(H.aZ,H.aL)
s(H.b_,H.aZ)
s(H.aM,H.b_)
r(H.aM,[H.bC,H.ab])
s(H.b3,H.bU)
s(P.aT,P.aU)
s(P.dt,P.dD)
s(P.aV,P.b0)
s(P.b6,P.aK)
s(P.ah,P.b6)
s(P.aP,P.b1)
r(P.bn,[P.cl,P.cu])
s(P.bq,P.bL)
r(P.bq,[P.cm,P.d3])
s(P.d2,P.cu)
r(P.bg,[P.cc,P.I])
r(P.C,[P.ad,P.by])
s(P.bS,P.b7)
r(W.a5,[W.q,W.bx])
r(W.q,[W.a4,W.X])
r(W.a4,[W.e,P.d])
r(W.e,[W.ar,W.ci,W.au,W.cw,W.aF,W.cS,W.aQ])
s(W.ay,W.bR)
s(W.Y,W.bx)
r(W.c,[W.G,W.a_])
s(W.N,W.G)
s(W.c_,W.bZ)
s(W.aN,W.c_)
s(W.bJ,W.c1)
s(W.c8,W.c7)
s(W.aY,W.c8)
s(P.br,P.aP)
r(P.br,[W.bT,P.bl])
s(W.bV,P.bK)
t(H.ag,H.bO)
t(H.aZ,P.r)
t(H.b_,H.bv)
t(P.aX,P.r)
t(P.b1,P.a0)
t(P.b6,P.c6)
t(W.bR,W.cp)
t(W.bZ,P.r)
t(W.c_,W.aB)
t(W.c1,P.a9)
t(W.c7,P.r)
t(W.c8,W.aB)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{I:"int",cc:"double",bg:"num",m:"String",ca:"bool",x:"Null",cI:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:["~(l)","~(~())","@(@)","x(@)","~(l[F])","x(@[F])","A<@>(@)","x(@,@)","a1(@,@)","~()","~(m)"],interceptorsByTag:null,leafTags:null,arrayRti:typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol("$ti"):"$ti"}
H.i8(v.typeUniverse,JSON.parse('{"J":"Z","bH":"Z","af":"Z","jh":"c","jl":"c","jD":"a_","jp":"N","ji":"G","bz":{"x":[]},"cG":{"w":["1"]},"aC":{"I":[]},"Q":{"m":[]},"bm":{"r":["I"]},"aA":{"a7":["1"]},"ag":{"r":["1"]},"aw":{"u":["1","2"]},"ax":{"u":["1","2"]},"bE":{"j":[]},"bA":{"j":[]},"bN":{"j":[]},"b2":{"F":[]},"bI":{"j":[]},"aE":{"u":["1","2"]},"aG":{"a7":["1"]},"bY":{"aa":[]},"aL":{"M":["@"]},"aM":{"r":["I"],"M":["@"]},"bC":{"r":["I"],"M":["@"]},"ab":{"a1":[],"r":["I"],"M":["@"]},"bU":{"j":[]},"b3":{"j":[]},"aT":{"aU":["1"]},"A":{"a6":["1"]},"bk":{"j":[]},"aV":{"b0":["1"],"E":["1"]},"aH":{"r":["1"]},"aJ":{"u":["1","2"]},"a9":{"u":["1","2"]},"aK":{"u":["1","2"]},"ah":{"u":["1","2"]},"aP":{"a0":["1"],"E":["1"]},"b0":{"E":["1"]},"bj":{"j":[]},"bF":{"j":[]},"C":{"j":[]},"ad":{"j":[]},"by":{"j":[]},"bP":{"j":[]},"bM":{"j":[]},"aS":{"j":[]},"bo":{"j":[]},"bG":{"j":[]},"aR":{"j":[]},"bs":{"j":[]},"cR":{"aa":[]},"E":{"a7":["1"]},"c2":{"F":[]},"b7":{"R":[]},"c0":{"R":[]},"bS":{"R":[]},"ai":{"r":["1"]},"N":{"c":[]},"aN":{"r":["q"],"M":["q"]},"a_":{"c":[]},"bJ":{"u":["m","m"]},"G":{"c":[]},"aY":{"r":["q"],"M":["q"]},"bT":{"a0":["m"],"E":["m"]},"br":{"a0":["m"],"E":["m"]},"bl":{"a0":["m"],"E":["m"]}}'))
H.i7(v.typeUniverse,JSON.parse('{"bi":1,"aA":1,"a8":1,"bv":1,"bO":1,"ag":1,"aw":2,"bB":1,"bX":2,"bK":1,"bL":2,"aW":1,"aH":1,"aJ":2,"a9":2,"c6":2,"aK":2,"aP":1,"aX":1,"b1":1,"b6":2,"bn":2,"bq":2,"bV":1,"aB":1,"bw":1}'))
var u=(function rtii(){var t=H.fs
return{a:t("ar"),o:t("au"),C:t("j"),A:t("c"),Z:t("jm"),f:t("a6<x>"),_:t("a6<@>"),s:t("w<m>"),b:t("w<@>"),t:t("w<I>"),g:t("J"),p:t("M<@>"),r:t("aF"),c:t("ab"),P:t("x"),K:t("l"),j:t("aQ"),N:t("m"),D:t("a1"),B:t("af"),h:t("ah<m,m>"),R:t("R"),E:t("aT<Y>"),T:t("ai<a4>"),Y:t("A<Y>"),y:t("ca"),i:t("cc"),z:t("@"),v:t("@(l)"),Q:t("@(l,F)"),S:t("I"),H:t("bg"),n:t("~")}})();(function constants(){var t=hunkHelpers.makeConstList
C.H=W.Y.prototype
C.I=J.p.prototype
C.d=J.w.prototype
C.b=J.aC.prototype
C.h=J.aD.prototype
C.a=J.Q.prototype
C.J=J.J.prototype
C.w=J.bH.prototype
C.n=J.af.prototype
C.P=new P.cm()
C.x=new P.cl()
C.e=new W.bp()
C.o=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.y=function() {
  var toStringFunction = Object.prototype.toString;
  function getTag(o) {
    var s = toStringFunction.call(o);
    return s.substring(8, s.length - 1);
  }
  function getUnknownTag(object, tag) {
    if (/^HTML[A-Z].*Element$/.test(tag)) {
      var name = toStringFunction.call(object);
      if (name == "[object Object]") return null;
      return "HTMLElement";
    }
  }
  function getUnknownTagGenericBrowser(object, tag) {
    if (self.HTMLElement && object instanceof HTMLElement) return "HTMLElement";
    return getUnknownTag(object, tag);
  }
  function prototypeForTag(tag) {
    if (typeof window == "undefined") return null;
    if (typeof window[tag] == "undefined") return null;
    var constructor = window[tag];
    if (typeof constructor != "function") return null;
    return constructor.prototype;
  }
  function discriminator(tag) { return null; }
  var isBrowser = typeof navigator == "object";
  return {
    getTag: getTag,
    getUnknownTag: isBrowser ? getUnknownTagGenericBrowser : getUnknownTag,
    prototypeForTag: prototypeForTag,
    discriminator: discriminator };
}
C.D=function(getTagFallback) {
  return function(hooks) {
    if (typeof navigator != "object") return hooks;
    var ua = navigator.userAgent;
    if (ua.indexOf("DumpRenderTree") >= 0) return hooks;
    if (ua.indexOf("Chrome") >= 0) {
      function confirm(p) {
        return typeof window == "object" && window[p] && window[p].name == p;
      }
      if (confirm("Window") && confirm("HTMLElement")) return hooks;
    }
    hooks.getTag = getTagFallback;
  };
}
C.z=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.A=function(hooks) {
  var getTag = hooks.getTag;
  var prototypeForTag = hooks.prototypeForTag;
  function getTagFixed(o) {
    var tag = getTag(o);
    if (tag == "Document") {
      if (!!o.xmlVersion) return "!Document";
      return "!HTMLDocument";
    }
    return tag;
  }
  function prototypeForTagFixed(tag) {
    if (tag == "Document") return null;
    return prototypeForTag(tag);
  }
  hooks.getTag = getTagFixed;
  hooks.prototypeForTag = prototypeForTagFixed;
}
C.C=function(hooks) {
  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";
  if (userAgent.indexOf("Firefox") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "GeoGeolocation": "Geolocation",
    "Location": "!Location",
    "WorkerMessageEvent": "MessageEvent",
    "XMLDocument": "!Document"};
  function getTagFirefox(o) {
    var tag = getTag(o);
    return quickMap[tag] || tag;
  }
  hooks.getTag = getTagFirefox;
}
C.B=function(hooks) {
  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";
  if (userAgent.indexOf("Trident/") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "HTMLDDElement": "HTMLElement",
    "HTMLDTElement": "HTMLElement",
    "HTMLPhraseElement": "HTMLElement",
    "Position": "Geoposition"
  };
  function getTagIE(o) {
    var tag = getTag(o);
    var newTag = quickMap[tag];
    if (newTag) return newTag;
    if (tag == "Object") {
      if (window.DataView && (o instanceof window.DataView)) return "DataView";
    }
    return tag;
  }
  function prototypeForTagIE(tag) {
    var constructor = window[tag];
    if (constructor == null) return null;
    return constructor.prototype;
  }
  hooks.getTag = getTagIE;
  hooks.prototypeForTag = prototypeForTagIE;
}
C.p=function(hooks) { return hooks; }

C.E=new P.bG()
C.m=new P.d2()
C.F=new P.dq()
C.c=new P.dt()
C.G=new P.c2()
C.f=new W.dz()
C.q=new P.az(0)
C.r=H.i(t([127,2047,65535,1114111]),u.t)
C.i=H.i(t([0,0,32776,33792,1,10240,0,0]),u.t)
C.j=H.i(t([0,0,65490,45055,65535,34815,65534,18431]),u.t)
C.k=H.i(t([0,0,26624,1023,65534,2047,65534,2047]),u.t)
C.L=H.i(t([0,0,32722,12287,65534,34815,65534,18431]),u.t)
C.l=H.i(t([0,0,24576,1023,65534,34815,65534,18431]),u.t)
C.t=H.i(t([0,0,32754,11263,65534,34815,65534,18431]),u.t)
C.u=H.i(t([0,0,65490,12287,65535,34815,65534,18431]),u.t)
C.M=new F.aI("LogLevel.ERROR")
C.v=new F.aI("LogLevel.WARN")
C.N=new F.aI("LogLevel.VERBOSE")
C.K=H.i(t([]),u.s)
C.O=new H.ax(0,{},C.K,H.fs("ax<m,m>"))})();(function staticFields(){$.L=0
$.at=null
$.eC=null
$.fw=null
$.fq=null
$.fC=null
$.dK=null
$.dP=null
$.et=null
$.al=null
$.b9=null
$.ba=null
$.eq=!1
$.k=C.c
$.z=[]
$.eJ=!1
$.e8=P.eH(u.R,u.S)})();(function lazyInitializers(){var t=hunkHelpers.lazy
t($,"jk","fJ",function(){return H.fu("_$dart_dartClosure")})
t($,"jn","ew",function(){return H.fu("_$dart_js")})
t($,"jq","fK",function(){return H.O(H.cX({
toString:function(){return"$receiver$"}}))})
t($,"jr","fL",function(){return H.O(H.cX({$method$:null,
toString:function(){return"$receiver$"}}))})
t($,"js","fM",function(){return H.O(H.cX(null))})
t($,"jt","fN",function(){return H.O(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(s){return s.message}}())})
t($,"jw","fQ",function(){return H.O(H.cX(void 0))})
t($,"jx","fR",function(){return H.O(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(s){return s.message}}())})
t($,"jv","fP",function(){return H.O(H.eW(null))})
t($,"ju","fO",function(){return H.O(function(){try{null.$method$}catch(s){return s.message}}())})
t($,"jz","fT",function(){return H.O(H.eW(void 0))})
t($,"jy","fS",function(){return H.O(function(){try{(void 0).$method$}catch(s){return s.message}}())})
t($,"jB","ex",function(){return P.hP()})
t($,"jA","fU",function(){return P.hM()})
t($,"jC","fV",function(){return H.hq(H.iv(H.i([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],u.t)))})
t($,"jJ","fW",function(){return new Error().stack!=void 0})
t($,"jK","fX",function(){return P.iu()})
t($,"jj","fI",function(){return P.eR("^\\S+$")})
t($,"jo","dX",function(){return new F.cK(!1,"Path Utils")})})();(function nativeSupport(){!function(){var t=function(a){var n={}
n[a]=1
return Object.keys(hunkHelpers.convertToFastObject(n))[0]}
v.getIsolateTag=function(a){return t("___dart_"+a+v.isolateTag)}
var s="___dart_isolate_tags_"
var r=Object[s]||(Object[s]=Object.create(null))
var q="_ZxYxX"
for(var p=0;;p++){var o=t(q+"_"+p+"_")
if(!(o in r)){r[o]=1
v.isolateTag=o
break}}v.dispatchPropertyName=v.getIsolateTag("dispatch_record")}()
hunkHelpers.setOrUpdateInterceptorsByTag({DOMError:J.p,DOMImplementation:J.p,MediaError:J.p,Navigator:J.p,NavigatorConcurrentHardware:J.p,NavigatorUserMediaError:J.p,OverconstrainedError:J.p,PositionError:J.p,Range:J.p,Screen:J.p,SQLError:J.p,ArrayBufferView:H.bD,Int8Array:H.bC,Uint8Array:H.ab,HTMLAudioElement:W.e,HTMLBRElement:W.e,HTMLBaseElement:W.e,HTMLBodyElement:W.e,HTMLCanvasElement:W.e,HTMLContentElement:W.e,HTMLDListElement:W.e,HTMLDataElement:W.e,HTMLDataListElement:W.e,HTMLDetailsElement:W.e,HTMLDialogElement:W.e,HTMLDivElement:W.e,HTMLEmbedElement:W.e,HTMLFieldSetElement:W.e,HTMLHRElement:W.e,HTMLHeadElement:W.e,HTMLHeadingElement:W.e,HTMLHtmlElement:W.e,HTMLIFrameElement:W.e,HTMLImageElement:W.e,HTMLInputElement:W.e,HTMLLIElement:W.e,HTMLLabelElement:W.e,HTMLLegendElement:W.e,HTMLMapElement:W.e,HTMLMediaElement:W.e,HTMLMenuElement:W.e,HTMLMetaElement:W.e,HTMLMeterElement:W.e,HTMLModElement:W.e,HTMLOListElement:W.e,HTMLObjectElement:W.e,HTMLOptGroupElement:W.e,HTMLOptionElement:W.e,HTMLOutputElement:W.e,HTMLParagraphElement:W.e,HTMLParamElement:W.e,HTMLPictureElement:W.e,HTMLPreElement:W.e,HTMLProgressElement:W.e,HTMLQuoteElement:W.e,HTMLScriptElement:W.e,HTMLShadowElement:W.e,HTMLSlotElement:W.e,HTMLSourceElement:W.e,HTMLStyleElement:W.e,HTMLTableCaptionElement:W.e,HTMLTableCellElement:W.e,HTMLTableDataCellElement:W.e,HTMLTableHeaderCellElement:W.e,HTMLTableColElement:W.e,HTMLTableElement:W.e,HTMLTableRowElement:W.e,HTMLTableSectionElement:W.e,HTMLTemplateElement:W.e,HTMLTextAreaElement:W.e,HTMLTimeElement:W.e,HTMLTitleElement:W.e,HTMLTrackElement:W.e,HTMLUListElement:W.e,HTMLUnknownElement:W.e,HTMLVideoElement:W.e,HTMLDirectoryElement:W.e,HTMLFontElement:W.e,HTMLFrameElement:W.e,HTMLFrameSetElement:W.e,HTMLMarqueeElement:W.e,HTMLElement:W.e,HTMLAnchorElement:W.ar,HTMLAreaElement:W.ci,HTMLButtonElement:W.au,CDATASection:W.X,CharacterData:W.X,Comment:W.X,ProcessingInstruction:W.X,Text:W.X,CSSStyleDeclaration:W.ay,MSStyleCSSProperties:W.ay,CSS2Properties:W.ay,DOMException:W.cq,DOMTokenList:W.cr,Element:W.a4,AbortPaymentEvent:W.c,AnimationEvent:W.c,AnimationPlaybackEvent:W.c,ApplicationCacheErrorEvent:W.c,BackgroundFetchClickEvent:W.c,BackgroundFetchEvent:W.c,BackgroundFetchFailEvent:W.c,BackgroundFetchedEvent:W.c,BeforeInstallPromptEvent:W.c,BeforeUnloadEvent:W.c,BlobEvent:W.c,CanMakePaymentEvent:W.c,ClipboardEvent:W.c,CloseEvent:W.c,CustomEvent:W.c,DeviceMotionEvent:W.c,DeviceOrientationEvent:W.c,ErrorEvent:W.c,ExtendableEvent:W.c,ExtendableMessageEvent:W.c,FetchEvent:W.c,FontFaceSetLoadEvent:W.c,ForeignFetchEvent:W.c,GamepadEvent:W.c,HashChangeEvent:W.c,InstallEvent:W.c,MediaEncryptedEvent:W.c,MediaKeyMessageEvent:W.c,MediaQueryListEvent:W.c,MediaStreamEvent:W.c,MediaStreamTrackEvent:W.c,MessageEvent:W.c,MIDIConnectionEvent:W.c,MIDIMessageEvent:W.c,MutationEvent:W.c,NotificationEvent:W.c,PageTransitionEvent:W.c,PaymentRequestEvent:W.c,PaymentRequestUpdateEvent:W.c,PopStateEvent:W.c,PresentationConnectionAvailableEvent:W.c,PresentationConnectionCloseEvent:W.c,PromiseRejectionEvent:W.c,PushEvent:W.c,RTCDataChannelEvent:W.c,RTCDTMFToneChangeEvent:W.c,RTCPeerConnectionIceEvent:W.c,RTCTrackEvent:W.c,SecurityPolicyViolationEvent:W.c,SensorErrorEvent:W.c,SpeechRecognitionError:W.c,SpeechRecognitionEvent:W.c,SpeechSynthesisEvent:W.c,StorageEvent:W.c,SyncEvent:W.c,TrackEvent:W.c,TransitionEvent:W.c,WebKitTransitionEvent:W.c,VRDeviceEvent:W.c,VRDisplayEvent:W.c,VRSessionEvent:W.c,MojoInterfaceRequestEvent:W.c,USBConnectionEvent:W.c,IDBVersionChangeEvent:W.c,AudioProcessingEvent:W.c,OfflineAudioCompletionEvent:W.c,WebGLContextEvent:W.c,Event:W.c,InputEvent:W.c,SubmitEvent:W.c,Window:W.a5,DOMWindow:W.a5,EventTarget:W.a5,HTMLFormElement:W.cw,XMLHttpRequest:W.Y,XMLHttpRequestEventTarget:W.bx,HTMLLinkElement:W.aF,Location:W.cJ,MouseEvent:W.N,DragEvent:W.N,PointerEvent:W.N,WheelEvent:W.N,Document:W.q,DocumentFragment:W.q,HTMLDocument:W.q,ShadowRoot:W.q,XMLDocument:W.q,Attr:W.q,DocumentType:W.q,Node:W.q,NodeList:W.aN,RadioNodeList:W.aN,ProgressEvent:W.a_,ResourceProgressEvent:W.a_,HTMLSelectElement:W.cS,HTMLSpanElement:W.aQ,Storage:W.bJ,CompositionEvent:W.G,FocusEvent:W.G,KeyboardEvent:W.G,TextEvent:W.G,TouchEvent:W.G,UIEvent:W.G,NamedNodeMap:W.aY,MozNamedAttrMap:W.aY,SVGAElement:P.d,SVGAnimateElement:P.d,SVGAnimateMotionElement:P.d,SVGAnimateTransformElement:P.d,SVGAnimationElement:P.d,SVGCircleElement:P.d,SVGClipPathElement:P.d,SVGDefsElement:P.d,SVGDescElement:P.d,SVGDiscardElement:P.d,SVGEllipseElement:P.d,SVGFEBlendElement:P.d,SVGFEColorMatrixElement:P.d,SVGFEComponentTransferElement:P.d,SVGFECompositeElement:P.d,SVGFEConvolveMatrixElement:P.d,SVGFEDiffuseLightingElement:P.d,SVGFEDisplacementMapElement:P.d,SVGFEDistantLightElement:P.d,SVGFEFloodElement:P.d,SVGFEFuncAElement:P.d,SVGFEFuncBElement:P.d,SVGFEFuncGElement:P.d,SVGFEFuncRElement:P.d,SVGFEGaussianBlurElement:P.d,SVGFEImageElement:P.d,SVGFEMergeElement:P.d,SVGFEMergeNodeElement:P.d,SVGFEMorphologyElement:P.d,SVGFEOffsetElement:P.d,SVGFEPointLightElement:P.d,SVGFESpecularLightingElement:P.d,SVGFESpotLightElement:P.d,SVGFETileElement:P.d,SVGFETurbulenceElement:P.d,SVGFilterElement:P.d,SVGForeignObjectElement:P.d,SVGGElement:P.d,SVGGeometryElement:P.d,SVGGraphicsElement:P.d,SVGImageElement:P.d,SVGLineElement:P.d,SVGLinearGradientElement:P.d,SVGMarkerElement:P.d,SVGMaskElement:P.d,SVGMetadataElement:P.d,SVGPathElement:P.d,SVGPatternElement:P.d,SVGPolygonElement:P.d,SVGPolylineElement:P.d,SVGRadialGradientElement:P.d,SVGRectElement:P.d,SVGScriptElement:P.d,SVGSetElement:P.d,SVGStopElement:P.d,SVGStyleElement:P.d,SVGElement:P.d,SVGSVGElement:P.d,SVGSwitchElement:P.d,SVGSymbolElement:P.d,SVGTSpanElement:P.d,SVGTextContentElement:P.d,SVGTextElement:P.d,SVGTextPathElement:P.d,SVGTextPositioningElement:P.d,SVGTitleElement:P.d,SVGUseElement:P.d,SVGViewElement:P.d,SVGGradientElement:P.d,SVGComponentTransferFunctionElement:P.d,SVGFEDropShadowElement:P.d,SVGMPathElement:P.d})
hunkHelpers.setOrUpdateLeafTags({DOMError:true,DOMImplementation:true,MediaError:true,Navigator:true,NavigatorConcurrentHardware:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,Range:true,Screen:true,SQLError:true,ArrayBufferView:false,Int8Array:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLCanvasElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLButtonElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,DOMException:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,SubmitEvent:false,Window:true,DOMWindow:true,EventTarget:false,HTMLFormElement:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:false,HTMLLinkElement:true,Location:true,MouseEvent:true,DragEvent:true,PointerEvent:true,WheelEvent:true,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,ProgressEvent:true,ResourceProgressEvent:true,HTMLSelectElement:true,HTMLSpanElement:true,Storage:true,CompositionEvent:true,FocusEvent:true,KeyboardEvent:true,TextEvent:true,TouchEvent:true,UIEvent:false,NamedNodeMap:true,MozNamedAttrMap:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true})
H.aL.$nativeSuperclassTag="ArrayBufferView"
H.aZ.$nativeSuperclassTag="ArrayBufferView"
H.b_.$nativeSuperclassTag="ArrayBufferView"
H.aM.$nativeSuperclassTag="ArrayBufferView"})()
Function.prototype.$1$1=function(a){return this(a)}
Function.prototype.$1=function(a){return this(a)}
Function.prototype.$0=function(){return this()}
Function.prototype.$2=function(a,b){return this(a,b)}
Function.prototype.$3=function(a,b,c){return this(a,b,c)}
Function.prototype.$4=function(a,b,c,d){return this(a,b,c,d)}
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r)t[r].removeEventListener("load",onLoad,false)
a(b.target)}for(var s=0;s<t.length;++s)t[s].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(Q.fA,[])
else Q.fA([])})})()
//# sourceMappingURL=NewspostController.dart.js.map
